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
const WP_API_PER_PAGE = 10;

const USER_AGENT = 'ML-Plugin-Docs-Scraper/1.0 (+https://github.com/wplaunchify/ml-plugin-docs)';

const DEFAULT_STRIP_SELECTORS = [
  'nav', 'footer', '.sidebar', '.widget-area', '.site-header',
  '.site-footer', '.nav-links', '.post-navigation', '.comments-area',
  '.sharedaddy', '.jp-relatedposts', '.elementor-location-header',
  '.elementor-location-footer', 'script', 'style', 'noscript',
  '.wp-block-yoast-faq-block', '.breadcrumbs', '.site-navigation'
];

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

async function fetchJson(url, retries = MAX_RETRIES) {
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
        headers: {
          'User-Agent': USER_AGENT,
          'Accept': 'application/json'
        },
        maxRedirects: 5
      });
      return { data: response.data, headers: response.headers };
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
// HTML to Markdown Conversion
// ---------------------------------------------------------------------------

function htmlToMarkdown($, el) {
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
      case 'p': {
        const pInner = htmlToMarkdown($, $n);
        if (pInner.trim()) md += `${pInner.trim()}\n\n`;
        break;
      }
      case 'ul': {
        $n.children('li').each((_, li) => {
          const liContent = htmlToMarkdown($, $(li)).trim();
          md += `- ${liContent}\n`;
        });
        md += '\n';
        break;
      }
      case 'ol': {
        let i = 1;
        $n.children('li').each((_, li) => {
          const liContent = htmlToMarkdown($, $(li)).trim();
          md += `${i++}. ${liContent}\n`;
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
        const childImg = $n.find('img').first();
        if (childImg.length) {
          const imgSrc = childImg.attr('src') || childImg.attr('data-src') || childImg.attr('data-lazy-src') || childImg.attr('data-original') || '';
          const imgAlt = childImg.attr('alt') || '';
          const resolvedSrc = imgSrc || (href && /\.(jpg|jpeg|png|gif|webp|svg)(\?|$)/i.test(href) ? href : '');
          if (resolvedSrc) { md += `![${imgAlt}](${resolvedSrc})`; break; }
        }
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
        const src = $n.attr('src') || $n.attr('data-src') || $n.attr('data-lazy-src') || $n.attr('data-original') || '';
        if (src && !/data:image/.test(src) && !/placeholder/.test(src)) md += `![${alt}](${src})`;
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

function htmlStringToMarkdown(htmlString) {
  const $ = cheerio.load(htmlString);
  return htmlToMarkdown($, $('body'));
}

function extractHeadingsFromHtml(htmlString) {
  const $ = cheerio.load(htmlString);
  const headings = [];
  $('h2, h3, h4').each((_, el) => {
    const text = $(el).text().trim();
    if (text) headings.push(text);
  });
  return headings;
}

function extractCodeBlocksFromHtml(htmlString) {
  const $ = cheerio.load(htmlString);
  const codeBlocks = [];
  $('pre, code').each((_, el) => {
    const code = $(el).text().trim();
    if (code && code.length > 10) codeBlocks.push(code);
  });
  return codeBlocks;
}

// ---------------------------------------------------------------------------
// Shared Helpers
// ---------------------------------------------------------------------------

function categorySlugToTitle(slug) {
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function extractCategoryFromUrl(pageUrl, baseUrl) {
  const basePath = new URL(baseUrl).pathname;
  const relPath = new URL(pageUrl).pathname.replace(basePath, '').replace(/^\/|\/$/g, '');
  const parts = relPath.split('/');
  return parts.length >= 1 ? parts[0] : 'uncategorized';
}

// ---------------------------------------------------------------------------
// Output Generation (shared across all modes)
// ---------------------------------------------------------------------------

function writePluginData(slug, pluginName, baseUrl, pages, failedUrls) {
  const pluginDir = path.join(__dirname, 'plugins', slug);
  const categoriesDir = path.join(pluginDir, 'categories');

  fs.mkdirSync(categoriesDir, { recursive: true });

  const categoryMap = {};
  pages.forEach(page => {
    const cat = page.category;
    if (!categoryMap[cat]) categoryMap[cat] = [];
    categoryMap[cat].push(page);
  });

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

function printSummary(slug, pages, failedUrls, categoryNames) {
  const docJsonPath = path.join(__dirname, 'plugins', slug, 'documentation.json');
  const docJsonSize = fs.statSync(docJsonPath).size;
  console.log(`\n========================================`);
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
    const logPath = path.join(__dirname, 'plugins', slug, 'failed-urls.log');
    fs.writeFileSync(logPath, failedUrls.join('\n') + '\n');
  }
}

// ===========================================================================
// MODE: wp-api
// ===========================================================================

async function runWpApi(args) {
  const { slug, url: siteUrl } = args;
  const postType = args['post-type'] || 'documentation';
  const taxonomy = args['taxonomy'] || '';
  const pluginName = args['name'] || slug.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const apiBase = siteUrl.replace(/\/$/, '') + '/wp-json/wp/v2';

  console.log(`\n========================================`);
  console.log(`  ML Plugin Docs Scraper (WP REST API)`);
  console.log(`  Plugin: ${pluginName} (${slug})`);
  console.log(`  API: ${apiBase}/${postType}`);
  console.log(`========================================\n`);

  // Step 1: Fetch categories if taxonomy provided
  let categoryLookup = {};
  if (taxonomy) {
    console.log(`[1/3] Fetching categories from ${taxonomy}...`);
    const catResult = await fetchJson(`${apiBase}/${taxonomy}?per_page=100`);
    if (catResult && Array.isArray(catResult.data)) {
      catResult.data.forEach(cat => {
        categoryLookup[cat.id] = cat.slug;
      });
      console.log(`  Found ${Object.keys(categoryLookup).length} categories\n`);
    } else {
      console.log('  No categories found (will use "uncategorized")\n');
    }
  } else {
    console.log('[1/3] No taxonomy specified, skipping categories\n');
  }

  // Step 2: Paginate through all posts
  console.log(`[2/3] Fetching documentation posts...`);
  const pages = [];
  const failedUrls = [];
  let page = 1;
  let totalPages = 1;
  let perPage = WP_API_PER_PAGE;
  let reducedOnce = false;

  while (page <= totalPages) {
    const pageUrl = `${apiBase}/${postType}?per_page=${perPage}&page=${page}`;
    process.stdout.write(`  Page ${page}/${totalPages || '?'} (per_page=${perPage})... `);

    let result = await fetchJson(pageUrl);

    if (!result && page === 1 && !reducedOnce && perPage > 10) {
      perPage = Math.max(10, Math.floor(perPage / 2));
      console.log(`FAILED on first page - retrying with per_page=${perPage}`);
      reducedOnce = true;
      continue;
    }
    if (!result) {
      console.log(`FAILED - skipping page ${page}`);
      page++;
      continue;
    }

    if (page === 1) {
      totalPages = parseInt(result.headers['x-wp-totalpages'] || '1', 10);
      const totalPosts = parseInt(result.headers['x-wp-total'] || '0', 10);
      console.log(`OK (${totalPosts} total posts across ${totalPages} pages)`);
    } else {
      console.log(`OK (${result.data.length} posts)`);
    }

    if (!Array.isArray(result.data)) break;

    for (const post of result.data) {
      const title = post.title && post.title.rendered
        ? cheerio.load(post.title.rendered).text().trim()
        : 'Untitled';
      const htmlContent = post.content && post.content.rendered
        ? post.content.rendered
        : '';
      const postUrl = post.link || '';

      if (!htmlContent.trim()) {
        failedUrls.push(postUrl || `post-${post.id}`);
        continue;
      }

      const markdown = htmlStringToMarkdown(htmlContent);
      const headings = extractHeadingsFromHtml(htmlContent);
      const codeBlocks = extractCodeBlocksFromHtml(htmlContent);

      let category = 'uncategorized';
      const catIds = post[taxonomy] || post['documentation-categories'] || [];
      if (Array.isArray(catIds) && catIds.length > 0 && categoryLookup[catIds[0]]) {
        category = categoryLookup[catIds[0]];
      }

      pages.push({ url: postUrl, title, category, markdown, headings, codeBlocks });
    }

    page++;
  }

  console.log(`\n  Fetched: ${pages.length} pages`);
  console.log(`  Failed:  ${failedUrls.length} pages\n`);

  // Step 3: Write output
  console.log('[3/3] Writing output files...');
  const baseUrl = siteUrl.replace(/\/$/, '') + '/documentation/';
  writePluginData(slug, pluginName, baseUrl, pages, failedUrls);
  const categoryNames = [...new Set(pages.map(p => p.category))].sort();

  console.log(`  plugins/${slug}/documentation.json`);
  console.log(`  plugins/${slug}/index.json`);
  categoryNames.forEach(cat => console.log(`  plugins/${slug}/categories/${cat}.md`));

  console.log('\n  Updating master INDEX.json...');
  updateMasterIndex(slug, pluginName, baseUrl, pages.length, categoryNames);

  printSummary(slug, pages, failedUrls, categoryNames);
}

// ===========================================================================
// MODE: sitemap
// ===========================================================================

async function runSitemap(args) {
  const { slug, url: baseUrl } = args;
  const contentSelector = args.selector || '.entry-content';
  const pluginName = args['name'] || slug.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const siteUrl = new URL(baseUrl).origin;
  const docPath = new URL(baseUrl).pathname;

  console.log(`\n========================================`);
  console.log(`  ML Plugin Docs Scraper (Sitemap)`);
  console.log(`  Plugin: ${pluginName} (${slug})`);
  console.log(`  Target: ${baseUrl}`);
  console.log(`========================================\n`);

  // Step 1: Find and parse sitemap
  console.log('[1/4] Searching for sitemap...');
  const sitemapUrls = [
    siteUrl + '/wp-sitemap.xml',
    siteUrl + '/sitemap_index.xml',
    siteUrl + '/sitemap.xml'
  ];

  let docLinks = [];

  for (const smUrl of sitemapUrls) {
    process.stdout.write(`  Trying ${smUrl}... `);
    const smHtml = await fetchPage(smUrl);
    if (!smHtml || typeof smHtml !== 'string') {
      console.log('not found');
      continue;
    }

    const allLocs = [];
    if (smHtml.includes('<sitemapindex')) {
      console.log('sitemap index found');
      const subUrls = [...smHtml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map(m => m[1]);
      const matchingSubs = subUrls.filter(u => u.includes(docPath.replace(/\/$/, '')));
      for (const subUrl of matchingSubs) {
        process.stdout.write(`    Fetching ${subUrl}... `);
        const subHtml = await fetchPage(subUrl);
        if (subHtml && typeof subHtml === 'string') {
          const subLocs = [...subHtml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map(m => m[1]);
          allLocs.push(...subLocs);
          console.log(`${subLocs.length} URLs`);
        } else {
          console.log('failed');
        }
      }
    } else if (smHtml.includes('<urlset')) {
      const locs = [...smHtml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map(m => m[1]);
      allLocs.push(...locs);
      console.log(`${locs.length} URLs in urlset`);
    } else {
      console.log('not a sitemap');
      continue;
    }

    docLinks = allLocs
      .filter(u => u.includes(docPath) && u !== baseUrl && u !== baseUrl.replace(/\/$/, ''))
      .sort();

    if (docLinks.length > 0) break;
  }

  console.log(`  Found ${docLinks.length} documentation URLs in sitemap\n`);

  if (docLinks.length === 0) {
    console.error('FATAL: No documentation URLs found in any sitemap');
    process.exit(1);
  }

  // Step 2: Scrape each page
  console.log(`[2/4] Scraping ${docLinks.length} pages...\n`);
  const pages = [];
  const failedUrls = [];
  const config = {
    contentSelector,
    stripSelectors: DEFAULT_STRIP_SELECTORS
  };

  for (let i = 0; i < docLinks.length; i++) {
    const url = docLinks[i];
    process.stdout.write(`  [${i + 1}/${docLinks.length}] ${url} ... `);

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

  // Step 3: Write output
  console.log('[3/4] Writing output files...');
  writePluginData(slug, pluginName, baseUrl, pages, failedUrls);
  const categoryNames = [...new Set(pages.map(p => p.category))].sort();

  console.log(`  plugins/${slug}/documentation.json`);
  console.log(`  plugins/${slug}/index.json`);
  categoryNames.forEach(cat => console.log(`  plugins/${slug}/categories/${cat}.md`));

  // Step 4: Update master index
  console.log('\n[4/4] Updating master INDEX.json...');
  updateMasterIndex(slug, pluginName, baseUrl, pages.length, categoryNames);

  printSummary(slug, pages, failedUrls, categoryNames);
}

// ===========================================================================
// MODE: html-scrape (original behavior)
// ===========================================================================

function extractContent(html, config) {
  const $ = cheerio.load(html);
  config.stripSelectors.forEach(sel => $(sel).remove());

  const contentEl = $(config.contentSelector);
  if (!contentEl.length) return null;

  let title = $('h1').first().text().trim();
  if (!title) {
    title = $('title').text().trim().split('|')[0].trim();
  }

  const headings = [];
  contentEl.find('h2, h3, h4').each((_, el) => {
    const text = $(el).text().trim();
    if (text) headings.push(text);
  });

  const codeBlocks = [];
  contentEl.find('pre, code').each((_, el) => {
    const code = $(el).text().trim();
    if (code && code.length > 10) codeBlocks.push(code);
  });

  const markdown = htmlToMarkdown($, contentEl);
  return { title, headings, codeBlocks, markdown };
}

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

      const clean = parsed.origin + parsed.pathname;
      if (clean === baseUrl || clean === baseUrl.replace(/\/$/, '')) return;

      const relPath = parsed.pathname.replace(basePath, '').replace(/^\/|\/$/g, '');
      if (!relPath) return;

      links.add(clean.replace(/\/$/, '/'));
    } catch (_) { /* skip malformed URLs */ }
  });

  return Array.from(links).sort();
}

async function runHtmlScrape(args) {
  const { slug, url: baseUrl } = args;
  const contentSelector = args.selector || '.entry-content';
  const linkSelector = args['link-selector'] || `a[href*="${new URL(baseUrl).pathname}"]`;
  const pluginName = args['name'] || slug.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const config = {
    contentSelector,
    stripSelectors: DEFAULT_STRIP_SELECTORS,
    indexPageSelector: linkSelector
  };

  console.log(`\n========================================`);
  console.log(`  ML Plugin Docs Scraper (HTML Scrape)`);
  console.log(`  Plugin: ${pluginName} (${slug})`);
  console.log(`  Target: ${baseUrl}`);
  console.log(`========================================\n`);

  console.log('[1/4] Fetching documentation index page...');
  const indexHtml = await fetchPage(baseUrl);
  if (!indexHtml) {
    console.error('FATAL: Could not fetch index page');
    process.exit(1);
  }

  const docLinks = discoverDocLinks(indexHtml, baseUrl, config.indexPageSelector);
  console.log(`  Found ${docLinks.length} documentation pages\n`);

  console.log(`[2/4] Scraping ${docLinks.length} pages (${RATE_LIMIT_MS}ms rate limit)...\n`);
  const pages = [];
  const failedUrls = [];

  for (let i = 0; i < docLinks.length; i++) {
    const url = docLinks[i];
    process.stdout.write(`  [${i + 1}/${docLinks.length}] ${url} ... `);

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

  console.log('[3/4] Writing output files...');
  writePluginData(slug, pluginName, baseUrl, pages, failedUrls);
  const categoryNames = [...new Set(pages.map(p => p.category))].sort();

  console.log(`  plugins/${slug}/documentation.json`);
  console.log(`  plugins/${slug}/index.json`);
  categoryNames.forEach(cat => console.log(`  plugins/${slug}/categories/${cat}.md`));

  console.log('\n[4/4] Updating master INDEX.json...');
  updateMasterIndex(slug, pluginName, baseUrl, pages.length, categoryNames);

  printSummary(slug, pages, failedUrls, categoryNames);
}

// ===========================================================================
// Main Router
// ===========================================================================

async function main() {
  const args = parseArgs();
  const mode = args.mode || 'html-scrape';
  const slug = args.slug;

  if (!slug) {
    console.error('Usage: node scraper.js --slug=<slug> --mode=<wp-api|sitemap|html-scrape> --url=<url> [options]');
    console.error('');
    console.error('Modes:');
    console.error('  wp-api       Fetch via WordPress REST API');
    console.error('               --url=<site-url> --post-type=<cpt> [--taxonomy=<tax>]');
    console.error('  sitemap      Discover pages from XML sitemap, then scrape');
    console.error('               --url=<docs-base-url> [--selector=<css>]');
    console.error('  html-scrape  Discover links from index page, then scrape');
    console.error('               --url=<docs-index-url> [--selector=<css>] [--link-selector=<css>]');
    process.exit(1);
  }

  if (!args.url) {
    console.error('--url is required');
    process.exit(1);
  }

  switch (mode) {
    case 'wp-api':
      await runWpApi(args);
      break;
    case 'sitemap':
      await runSitemap(args);
      break;
    case 'html-scrape':
      await runHtmlScrape(args);
      break;
    default:
      console.error(`Unknown mode: ${mode}. Use wp-api, sitemap, or html-scrape.`);
      process.exit(1);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
