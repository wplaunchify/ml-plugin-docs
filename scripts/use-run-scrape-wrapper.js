#!/usr/bin/env node

/**
 * Rewrites scrape workflows to invoke scripts/run-scrape.sh instead of calling
 * node scraper.js directly, so transient vendor failures get retried in-run.
 *
 * Handles both shapes present in the repo:
 *   run: node scraper.js --slug=... --name="..."
 *   run: |
 *     node scraper.js --slug=... \
 *       --url=... \
 *       --name="..."
 *
 * Idempotent: workflows already using the wrapper are left alone.
 *
 * Usage: node scripts/use-run-scrape-wrapper.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const WORKFLOW_DIR = path.join(__dirname, '..', '.github', 'workflows');
const DRY_RUN = process.argv.includes('--dry-run');

const files = fs.readdirSync(WORKFLOW_DIR)
  .filter(f => f.startsWith('scrape-') && f.endsWith('.yml'))
  .sort();

let changed = 0;
let already = 0;
const skipped = [];

for (const file of files) {
  const filePath = path.join(WORKFLOW_DIR, file);
  const source = fs.readFileSync(filePath, 'utf8');

  if (source.includes('run-scrape.sh')) {
    already++;
    continue;
  }
  if (!source.includes('node scraper.js')) {
    skipped.push(`${file} (no scraper invocation)`);
    continue;
  }

  const lines = source.split('\n');
  const start = lines.findIndex(l => l.includes('node scraper.js'));
  if (start === -1) {
    skipped.push(`${file} (could not locate command)`);
    continue;
  }

  // Collect the full command, following YAML backslash line continuations.
  let end = start;
  while (/\\\s*$/.test(lines[end]) && end + 1 < lines.length) end++;

  const commandBlock = lines.slice(start, end + 1).join('\n');
  const args = commandBlock
    .replace(/^\s*run:\s*/, '')
    .replace(/\\\s*\n/g, ' ')
    .replace(/\s*\n\s*/g, ' ')
    .replace(/^\s*node scraper\.js\s*/, '')
    .replace(/ {2,}/g, ' ') // collapse padding left by continuation lines
    .trim();

  if (!args.includes('--slug=')) {
    skipped.push(`${file} (unexpected args: ${args.slice(0, 60)})`);
    continue;
  }

  // Preserve the indentation of the original `run:` key.
  const runLineIndex = lines.slice(0, start + 1).reverse().findIndex(l => /^\s*run:/.test(l));
  const runLine = runLineIndex === -1 ? lines[start] : lines[start - runLineIndex];
  const indent = (runLine.match(/^(\s*)/) || ['', '        '])[1];

  const replacement = `${indent}run: bash scripts/run-scrape.sh ${args}`;
  const firstLine = /^\s*run:/.test(lines[start]) ? start : start - runLineIndex;

  const updated = [...lines.slice(0, firstLine), replacement, ...lines.slice(end + 1)].join('\n');

  changed++;
  if (!DRY_RUN) fs.writeFileSync(filePath, updated);
}

console.log(`${DRY_RUN ? '[dry run] would rewire' : 'rewired'} ${changed} workflow(s)`);
if (already) console.log(`${already} already using the wrapper`);
if (skipped.length) {
  console.log(`skipped ${skipped.length}:`);
  skipped.forEach(s => console.log(`  ${s}`));
}
