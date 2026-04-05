#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const pluginsDir = path.join(root, 'plugins');

if (!fs.existsSync(pluginsDir)) {
  console.error('plugins/ not found');
  process.exit(1);
}

const dirs = fs
  .readdirSync(pluginsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((name) => fs.existsSync(path.join(pluginsDir, name, 'index.json')));

const plugins = dirs.map((dirSlug) => {
  const raw = fs.readFileSync(path.join(pluginsDir, dirSlug, 'index.json'), 'utf8');
  const j = JSON.parse(raw);
  const categories = (j.sections || []).map((s) => s.slug).sort();
  return {
    slug: j.plugin_slug || dirSlug,
    name: j.plugin_name,
    documentation_url: j.documentation_url,
    last_scraped: j.last_scraped,
    page_count: j.total_pages,
    categories,
  };
});

plugins.sort((a, b) => a.slug.localeCompare(b.slug));

const master = {
  last_updated: new Date().toISOString(),
  total_plugins: plugins.length,
  plugins,
};

fs.writeFileSync(path.join(root, 'INDEX.json'), JSON.stringify(master, null, 2) + '\n');
console.log('INDEX.json rebuilt:', master.total_plugins, 'plugins');
