#!/usr/bin/env node

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const RATE_LIMIT_MS = 500;
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 2000;
const REQUEST_TIMEOUT_MS = 15000;

const USER_AGENT = 'ML-Plugin-Docs-Scraper/1.0 (+https://github.com/wplaunchify/ml-plugin-docs)';

// Per-plugin config: content selector, elements to strip, category map overrides
const PLUGIN_CONFIGS = {
  wpfusion: {
    contentSelector: '.entry-content',
    stripSelectors: [
      'nav', 'footer', '.sidebar', '.widget-area', '.site-header',
      '.site-footer', '.nav-links', '.post-navigation', '.comments-area',
      '.sharedaddy', '.jp-relatedposts', '.elementor-location-header',
      '.elementor-location-footer', 'script', 'style', 'noscript',
      '.wp-block-yoast-faq-block', '.breadcrumbs', '.site-navigation'
    ],
    indexPageSelector: 'a[href*="/documentation/"]'
  }
};

// ---------------------------------------------------------------------------
// CLI Argument Parsing
// ---------------------------------------------------------------------------

function parseArgs() {
  const args = {};
  process.argv.slice(2).forEach(arg => {
    if (arg.startsWith('--')) {
      const [key, ...valueParts] = arg.slice(2).split('=');
      args[key] = valueParts.join('=') || true;
    }
  });
  return args;
}

// ---------------------------------------------------------------------------
// HTTP Client with Rate Limiting + Retry
// ---------------------------------------------------------------------------

let lastRequestTime = 0;

async function fetchPage(url, retries = MAX_RETRIES) {
  const now = Date.now();
  const elapsed = now - lastRequestTime;
  if (elapsed < RATE_LIMIT_MS) {
    await sleep(RATE_LIMIT_MS - elapsed);
  }
  lastRequestTime = Date.now();

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await axios.get(url, {
        timeout: REQUEST_TIMEOUT_MS,
        headers: { 'User-Agent': USER_AGENT },
        maxRedirects: 5
      });
      return response.data;
    } catch (err) {
      const status = err.response ? err.response.status : 'NETWORK';
      console.error(`  [attempt ${attempt}/${retries}] Failed ${url} (${status})`);
      if (attempt < retries) {
        await sleep(RETRY_DELAY_MS * attempt);
      } else {
        return null;
      }
    }
  }
  return null;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ---------------------------------------------------------------------------
// Link Discovery
// ---------------------------------------------------------------------------

function discoverDocLinks(html, baseUrl, linkSelector) {
  const $ = cheerio.load(html);
  const links = new Set();
  const baseHost = new URL(baseUrl).hostname;
  const basePath = new URL(baseUrl).pathname;

  $(linkSelector).each((_, el) => {
    let href = $(el).attr('href');
    if (!href) return;

    try {
      const parsed = new URL(href, baseUrl);
      if (parsed.hostname !== baseHost) return;
      if (!parsed.pathname.startsWith(basePath)) return;

      // Skip anchor-only links and the index page itself
      const clean = parsed.origin + parsed.pathname;
      if (clean === baseUrl || clean === baseUrl.replace(/\/$/, '')) return;

      // Must be a sub-page of documentation (at least 2 path segments after /documentation/)
      const relPath = parsed.pathname.replace(basePath, '').replace(/^\/|\/$/g, '');
      if (!relPath.includes('/')) return;

      links.add(clean.replace(/\/$/, '/'));
    } catch (_) { /* skip malformed URLs */ }
  });

  return Array.from(links).sort();
}

// ---------------------------------------------------------------------------
// Category Extraction from URL
// ---------------------------------------------------------------------------

function extractCategoryFromUrl(pageUrl, baseUrl) {
  const basePath = new URL(baseUrl).pathname;
  const relPath = new URL(pageUrl).pathname.replace(basePath, '').replace(/^\/|\/$/g, '');
  const parts = relPath.split('/');
  return parts.length >= 1 ? parts[0] : 'uncategorized';
}

function categorySlugToTitle(slug) {
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// ---------------------------------------------------------------------------
// Content Extraction
// ---------------------------------------------------------------------------

function extractContent(html, config) {
  const $ = cheerio.load(html);

  // Remove unwanted elements
  config.stripSelectors.forEach(sel => $(sel).remove());

  const contentEl = $(config.contentSelector);
  if (!contentEl.length) return null;

  // Extract page title
  let title = $('h1').first().text().trim();
  if (!title) {
    title = $('title').text().trim().split('|')[0].trim();
  }

  // Extract headings for indexing
  const headings = [];
  contentEl.find('h2, h3, h4').each((_, el) => {
    const text = $(el).text().trim();
    if (text) headings.push(text);
  });

  // Extract code blocks
  const codeBlocks = [];
  contentEl.find('pre, code').each((_, el) => {
    const code = $(el).text().trim();
    if (code && code.length > 10) codeBlocks.push(code);
  });

  // Convert to clean text/markdown
  const markdown = htmlToMarkdown($, contentEl);

  return { title, headings, codeBlocks, markdown };
}

function htmlToMarkdown($, el) {
  // Simple HTML-to-Markdown conversion for documentation content
  let md = '';

  el.contents().each((_, node) => {
    if (node.type === 'text') {
      md += $(node).text();
      return;
    }

    const $n = $(node);
    const tag = node.tagName ? node.tagName.toLowerCase() : '';

    switch (tag) {
      case 'h1': md += `\n# ${$n.text().trim()}\n\n`; break;
      case 'h2': md += `\n## ${$n.text().trim()}\n\n`; break;
      case 'h3': md += `\n### ${$n.text().trim()}\n\n`; break;
      case 'h4': md += `\n#### ${$n.text().trim()}\n\n`; break;
      case 'p': md += `${$n.text().trim()}\n\n`; break;
      case 'ul': {
        $n.children('li').each((_, li) => {
          md += `- ${$(li).text().trim()}\n`;
        });
        md += '\n';
        break;
      }
      case 'ol': {
        let i = 1;
        $n.children('li').each((_, li) => {
          md += `${i++}. ${$(li).text().trim()}\n`;
        });
        md += '\n';
        break;
      }
      case 'pre':
      case 'code': {
        const code = $n.text().trim();
        if (code) md += `\n\`\`\`\n${code}\n\`\`\`\n\n`;
        break;
      }
      case 'a': {
        const href = $n.attr('href') || '';
        const text = $n.text().trim();
        if (text && href) md += `[${text}](${href})`;
        else if (text) md += text;
        break;
      }
      case 'strong':
      case 'b':
        md += `**${$n.text().trim()}**`;
        break;
      case 'em':
      case 'i':
        md += `*${$n.text().trim()}*`;
        break;
      case 'blockquote':
        md += $n.text().trim().split('\n').map(l => `> ${l}`).join('\n') + '\n\n';
        break;
      case 'br':
        md += '\n';
        break;
      case 'hr':
        md += '\n---\n\n';
        break;
      case 'img': {
        const alt = $n.attr('alt') || '';
        const src = $n.attr('src') || '';
        if (src) md += `![${alt}](${src})`;
        break;
      }
      case 'table': {
        const rows = [];
        $n.find('tr').each((_, tr) => {
          const cells = [];
          $(tr).find('th, td').each((_, cell) => {
            cells.push($(cell).text().trim());
          });
          rows.push(cells);
        });
        if (rows.length > 0) {
          md += '| ' + rows[0].join(' | ') + ' |\n';
          md += '| ' + rows[0].map(() => '---').join(' | ') + ' |\n';
          rows.slice(1).forEach(row => {
            md += '| ' + row.join(' | ') + ' |\n';
          });
          md += '\n';
        }
        break;
      }
      default: {
        const inner = htmlToMarkdown($, $n);
        if (inner.trim()) md += inner;
      }
    }
  });

  return md.replace(/\n{3,}/g, '\n\n').trim();
}

// ---------------------------------------------------------------------------
// Output Generation
// ---------------------------------------------------------------------------

function writePluginData(slug, pluginName, baseUrl, pages, failedUrls) {
  const pluginDir = path.join(__dirname, 'plugins', slug);
  const categoriesDir = path.join(pluginDir, 'categories');

  fs.mkdirSync(categoriesDir, { recursive: true });

  // Group pages by category
  const categoryMap = {};
  pages.forEach(page => {
    const cat = page.category;
    if (!categoryMap[cat]) categoryMap[cat] = [];
    categoryMap[cat].push(page);
  });

  // Write documentation.json
  const docJson = {
    plugin_slug: slug,
    plugin_name: pluginName,
    last_scraped: new Date().toISOString(),
    total_pages: pages.length,
    failed_urls: failedUrls,
    pages: pages.map(p => ({
      title: p.title,
      url: p.url,
      category: categorySlugToTitle(p.category),
      content: p.markdown,
      headings: p.headings,
      code_blocks: p.codeBlocks
    }))
  };
  fs.writeFileSync(
    path.join(pluginDir, 'documentation.json'),
    JSON.stringify(docJson, null, 2)
  );

  // Write index.json
  const sections = Object.keys(categoryMap).sort().map(catSlug => ({
    title: categorySlugToTitle(catSlug),
    slug: catSlug,
    url: `${baseUrl}${catSlug}/`,
    file: `categories/${catSlug}.md`,
    page_count: categoryMap[catSlug].length,
    pages: categoryMap[catSlug].map(p => ({
      title: p.title,
      url: p.url
    }))
  }));

  const indexJson = {
    plugin_slug: slug,
    plugin_name: pluginName,
    documentation_url: baseUrl,
    last_scraped: new Date().toISOString(),
    total_pages: pages.length,
    failed_urls_count: failedUrls.length,
    sections
  };
  fs.writeFileSync(
    path.join(pluginDir, 'index.json'),
    JSON.stringify(indexJson, null, 2)
  );

  // Write category markdown files
  Object.entries(categoryMap).forEach(([catSlug, catPages]) => {
    let md = `# ${categorySlugToTitle(catSlug)}\n\n`;
    md += `*Category from ${pluginName} documentation*\n\n`;
    md += `---\n\n`;
    catPages.forEach(p => {
      md += `## ${p.title}\n\n`;
      md += `**Source:** [${p.url}](${p.url})\n\n`;
      md += p.markdown + '\n\n---\n\n';
    });
    fs.writeFileSync(path.join(categoriesDir, `${catSlug}.md`), md);
  });

  return { sections, categoryMap };
}

function updateMasterIndex(slug, pluginName, baseUrl, pageCount, categories) {
  const indexPath = path.join(__dirname, 'INDEX.json');
  let masterIndex = { last_updated: null, total_plugins: 0, plugins: [] };

  if (fs.existsSync(indexPath)) {
    try {
      masterIndex = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    } catch (_) { /* start fresh */ }
  }

  const existing = masterIndex.plugins.findIndex(p => p.slug === slug);
  const entry = {
    slug,
    name: pluginName,
    documentation_url: baseUrl,
    last_scraped: new Date().toISOString(),
    page_count: pageCount,
    categories
  };

  if (existing >= 0) {
    masterIndex.plugins[existing] = entry;
  } else {
    masterIndex.plugins.push(entry);
  }

  masterIndex.last_updated = new Date().toISOString();
  masterIndex.total_plugins = masterIndex.plugins.length;

  fs.writeFileSync(indexPath, JSON.stringify(masterIndex, null, 2) + '\n');
}

// ---------------------------------------------------------------------------
// Main Scraper
// ---------------------------------------------------------------------------

async function main() {
  const args = parseArgs();
  const slug = args.slug;
  const baseUrl = args.url;
  const selectorOverride = args.selector;

  if (!slug || !baseUrl) {
    console.error('Usage: node scraper.js --slug=<plugin-slug> --url=<documentation-base-url> [--selector=<css-selector>]');
    process.exit(1);
  }

  const config = PLUGIN_CONFIGS[slug] || {
    contentSelector: selectorOverride || '.entry-content',
    stripSelectors: [
      'nav', 'footer', '.sidebar', '.widget-area', '.site-header',
      '.site-footer', '.nav-links', '.post-navigation', '.comments-area',
      'script', 'style', 'noscript', '.breadcrumbs'
    ],
    indexPageSelector: `a[href*="/documentation/"]`
  };

  if (selectorOverride) {
    config.contentSelector = selectorOverride;
  }

  const pluginName = slug.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  console.log(`\n========================================`);
  console.log(`  ML Plugin Docs Scraper`);
  console.log(`  Plugin: ${pluginName} (${slug})`);
  console.log(`  Target: ${baseUrl}`);
  console.log(`========================================\n`);

  // Step 1: Fetch index page and discover links
  console.log('[1/4] Fetching documentation index page...');
  const indexHtml = await fetchPage(baseUrl);
  if (!indexHtml) {
    console.error('FATAL: Could not fetch index page');
    process.exit(1);
  }

  const docLinks = discoverDocLinks(indexHtml, baseUrl, config.indexPageSelector);
  console.log(`  Found ${docLinks.length} documentation pages\n`);

  // Step 2: Crawl each page
  console.log(`[2/4] Scraping ${docLinks.length} pages (${RATE_LIMIT_MS}ms rate limit)...\n`);
  const pages = [];
  const failedUrls = [];

  for (let i = 0; i < docLinks.length; i++) {
    const url = docLinks[i];
    const progress = `[${i + 1}/${docLinks.length}]`;
    process.stdout.write(`  ${progress} ${url} ... `);

    const html = await fetchPage(url);
    if (!html) {
      console.log('FAILED');
      failedUrls.push(url);
      continue;
    }

    const extracted = extractContent(html, config);
    if (!extracted || !extracted.markdown) {
      console.log('EMPTY');
      failedUrls.push(url);
      continue;
    }

    const category = extractCategoryFromUrl(url, baseUrl);
    pages.push({
      url,
      title: extracted.title,
      category,
      markdown: extracted.markdown,
      headings: extracted.headings,
      codeBlocks: extracted.codeBlocks
    });

    console.log(`OK (${extracted.headings.length} headings, ${extracted.markdown.length} chars)`);
  }

  console.log(`\n  Scraped: ${pages.length} pages`);
  console.log(`  Failed:  ${failedUrls.length} pages\n`);

  // Step 3: Write output files
  console.log('[3/4] Writing output files...');
  const { sections } = writePluginData(slug, pluginName, baseUrl, pages, failedUrls);
  const categoryNames = Object.keys(
    pages.reduce((acc, p) => { acc[p.category] = true; return acc; }, {})
  ).sort();

  console.log(`  plugins/${slug}/documentation.json`);
  console.log(`  plugins/${slug}/index.json`);
  categoryNames.forEach(cat => console.log(`  plugins/${slug}/categories/${cat}.md`));

  // Step 4: Update master index
  console.log('\n[4/4] Updating master INDEX.json...');
  updateMasterIndex(slug, pluginName, baseUrl, pages.length, categoryNames);
  console.log('  INDEX.json updated\n');

  // Summary
  const docJsonSize = fs.statSync(path.join(__dirname, 'plugins', slug, 'documentation.json')).size;
  console.log(`========================================`);
  console.log(`  Scrape Complete`);
  console.log(`  Pages scraped:  ${pages.length}`);
  console.log(`  Pages failed:   ${failedUrls.length}`);
  console.log(`  Categories:     ${categoryNames.length}`);
  console.log(`  Doc JSON size:  ${(docJsonSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`========================================\n`);

  if (failedUrls.length > 0) {
    console.log('Failed URLs:');
    failedUrls.forEach(u => console.log(`  - ${u}`));
    console.log('');
  }

  // Write failed URLs log if any
  if (failedUrls.length > 0) {
    const logPath = path.join(__dirname, 'plugins', slug, 'failed-urls.log');
    fs.writeFileSync(logPath, failedUrls.join('\n') + '\n');
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
