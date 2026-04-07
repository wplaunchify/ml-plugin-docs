#!/usr/bin/env node
/**
 * Derive plugins/{slug}/chunks.jsonl from documentation.json for retrieval-friendly search.
 * Each line is JSON: id, slug, url, page_title, category, heading_path, text
 * Run: node scripts/build-chunks.js [--slug=name]  (omit --slug to process all plugins with documentation.json)
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const MAX_CHUNK_CHARS = 1200;
const OVERLAP_CHARS = 120;
const ROOT = path.join(__dirname, '..');

function hashId(slug, url, headingPath, seq) {
  return crypto
    .createHash('sha256')
    .update(`${slug}|${url}|${headingPath}|${seq}`, 'utf8')
    .digest('hex')
    .slice(0, 16);
}

function splitHeadingSections(markdown) {
  if (!markdown || typeof markdown !== 'string') return [''];
  const t = markdown.trim();
  if (!t) return [];
  const parts = t.split(/\n(?=#{2,3}\s)/);
  return parts.map((p) => p.trim()).filter(Boolean);
}

function hardSplit(text, maxLen, overlap) {
  const out = [];
  let start = 0;
  while (start < text.length) {
    let end = Math.min(start + maxLen, text.length);
    if (end < text.length) {
      const space = text.lastIndexOf('\n\n', end);
      if (space > start + maxLen * 0.5) end = space;
    }
    const piece = text.slice(start, end).trim();
    if (piece) out.push(piece);
    if (end >= text.length) break;
    start = Math.max(end - overlap, start + 1);
  }
  return out.length ? out : [text.slice(0, maxLen)];
}

function firstHeadingLine(section) {
  const m = section.match(/^(#{2,3})\s+(.+)$/m);
  if (m) return m[2].trim();
  return '';
}

function buildChunksForPage(slug, page, pageIndex) {
  const url = page.url || '';
  const pageTitle = page.title || '(untitled)';
  const category = page.category || '';
  const body = (page.content || page.markdown || '').trim();
  if (!body) return [];

  const sections = splitHeadingSections(body);
  const chunks = [];
  let globalSeq = 0;

  sections.forEach((section) => {
    const headingPath = firstHeadingLine(section) || pageTitle;
    const pieces = section.length <= MAX_CHUNK_CHARS ? [section] : hardSplit(section, MAX_CHUNK_CHARS, OVERLAP_CHARS);
    pieces.forEach((text) => {
      const id = hashId(slug, url, headingPath, globalSeq);
      globalSeq += 1;
      chunks.push({
        id,
        slug,
        url,
        page_title: pageTitle,
        category,
        heading_path: headingPath,
        text,
      });
    });
  });

  return chunks;
}

function writeChunksJsonl(slug, allChunks) {
  const pluginDir = path.join(ROOT, 'plugins', slug);
  const outPath = path.join(pluginDir, 'chunks.jsonl');
  const lines = allChunks.map((c) => JSON.stringify(c));
  fs.writeFileSync(outPath, lines.join('\n') + (lines.length ? '\n' : ''), 'utf8');

  const meta = {
    plugin_slug: slug,
    chunk_count: allChunks.length,
    built_at: new Date().toISOString(),
    max_chunk_chars: MAX_CHUNK_CHARS,
    format_version: 1,
  };
  fs.writeFileSync(path.join(pluginDir, 'chunks-meta.json'), JSON.stringify(meta, null, 2) + '\n', 'utf8');
  console.log(`  ${slug}: ${allChunks.length} chunks -> chunks.jsonl`);
}

function processSlug(slug) {
  const docPath = path.join(ROOT, 'plugins', slug, 'documentation.json');
  if (!fs.existsSync(docPath)) {
    console.warn(`  skip ${slug}: no documentation.json`);
    return;
  }
  let doc;
  try {
    doc = JSON.parse(fs.readFileSync(docPath, 'utf8'));
  } catch (e) {
    console.error(`  skip ${slug}: invalid JSON`, e.message);
    return;
  }
  const pages = doc.pages || [];
  const allChunks = [];
  pages.forEach((page, idx) => {
    allChunks.push(...buildChunksForPage(slug, page, idx));
  });
  writeChunksJsonl(slug, allChunks);
}

function main() {
  const args = process.argv.slice(2);
  let onlySlug = null;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--slug' && args[i + 1]) {
      onlySlug = args[i + 1];
      break;
    }
    if (args[i].startsWith('--slug=')) {
      onlySlug = args[i].split('=')[1];
      break;
    }
  }

  console.log('build-chunks: MAX_CHUNK_CHARS=%d overlap=%d\n', MAX_CHUNK_CHARS, OVERLAP_CHARS);

  if (onlySlug) {
    processSlug(onlySlug);
    return;
  }

  const pluginsDir = path.join(ROOT, 'plugins');
  if (!fs.existsSync(pluginsDir)) {
    console.error('No plugins/ directory');
    process.exit(1);
  }
  const dirs = fs.readdirSync(pluginsDir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
  dirs.sort();
  for (const slug of dirs) {
    const docPath = path.join(pluginsDir, slug, 'documentation.json');
    if (fs.existsSync(docPath)) processSlug(slug);
  }
  console.log('\nDone.');
}

main();
