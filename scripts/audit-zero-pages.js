#!/usr/bin/env node
// One-off audit: for every plugin with 0 pages in INDEX.json, parse its
// workflow config and test whether the (origin-corrected) endpoint returns
// real content. Prints a verdict per slug.

const axios = require('axios');
const fs = require('fs');
const path = require('path');

const UA = 'ML-Plugin-Docs-Scraper/1.0 (+https://github.com/wplaunchify/ml-plugin-docs)';

const index = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'INDEX.json'), 'utf8'));
const zeroSlugs = new Set(index.plugins.filter(p => p.page_count === 0).map(p => p.slug));

const wfDir = path.join(__dirname, '..', '.github', 'workflows');
const configs = [];
for (const f of fs.readdirSync(wfDir)) {
  if (!f.startsWith('scrape-')) continue;
  const text = fs.readFileSync(path.join(wfDir, f), 'utf8');
  const m = text.match(/node scraper\.js ([^\n]+)/);
  if (!m) continue;
  const argstr = m[1];
  const get = k => {
    const mm = argstr.match(new RegExp(`--${k}=("[^"]+"|[^ ]+)`));
    return mm ? mm[1].replace(/^"|"$/g, '') : '';
  };
  configs.push({
    file: f,
    slug: get('slug'),
    mode: get('mode') || 'html-scrape',
    url: get('url'),
    postType: get('post-type'),
    taxonomy: get('taxonomy'),
    raw: argstr.trim()
  });
}

async function probe(url) {
  try {
    const r = await axios.get(url, { timeout: 15000, headers: { 'User-Agent': UA }, maxRedirects: 5, validateStatus: () => true });
    return r;
  } catch (e) {
    return { status: 'ERR:' + (e.code || e.message) };
  }
}

(async () => {
  const targets = configs.filter(c => zeroSlugs.has(c.slug));
  console.log(`Zero-page plugins with workflows: ${targets.length}\n`);

  for (const c of targets) {
    let verdict = '';
    if (c.mode === 'wp-api') {
      let origin;
      try { origin = new URL(c.url).origin; } catch (_) { verdict = 'BAD URL'; }
      if (origin) {
        const api = `${origin}/wp-json/wp/v2/${c.postType}?per_page=1`;
        const r = await probe(api);
        if (r.status === 200 && Array.isArray(r.data) && r.data.length > 0) {
          const len = (r.data[0].content && r.data[0].content.rendered || '').length;
          verdict = `OK api=${api} contentLen=${len}${len === 0 ? ' (EMPTY CONTENT!)' : ''}`;
        } else if (r.status === 200) {
          verdict = `EMPTY api=${api}`;
        } else {
          verdict = `HTTP ${r.status} api=${api}`;
        }
      }
    } else {
      const r = await probe(c.url);
      verdict = `mode=${c.mode} HTTP ${r.status} url=${c.url}`;
    }
    console.log(`${c.slug}\n  ${verdict}\n`);
    await new Promise(res => setTimeout(res, 300));
  }
})();
