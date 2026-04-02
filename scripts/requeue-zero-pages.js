#!/usr/bin/env node
/**
 * Find scrape-*.yml workflows whose slug is missing from INDEX.json or has page_count === 0,
 * then dispatch workflow_dispatch for up to MAX_PER_RUN (staggered). Intended to run on GitHub Actions only.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function parseMaxPerRun() {
  const raw = process.env.MAX_PER_RUN;
  let n = parseInt(raw != null && String(raw).trim() !== '' ? raw : '5', 10);
  if (!Number.isFinite(n) || n < 1) n = 5;
  return n;
}

function isDryRun() {
  const v = (process.env.DRY_RUN || '').toLowerCase();
  return v === '1' || v === 'true' || v === 'yes';
}

async function main() {
  const token = process.env.GITHUB_TOKEN;
  const repoFull = process.env.GITHUB_REPOSITORY;
  if (!token || !repoFull) {
    console.error('GITHUB_TOKEN and GITHUB_REPOSITORY are required');
    process.exit(1);
  }
  const [owner, repo] = repoFull.split('/');

  const MAX_PER_RUN = parseMaxPerRun();
  const STAGGER_SEC = Math.max(
    0,
    parseInt(process.env.STAGGER_SECONDS || '45', 10) || 0
  );
  const DRY = isDryRun();
  const ref = (process.env.REQUEUE_REF || 'main').trim() || 'main';

  const indexPath = path.join(ROOT, 'INDEX.json');
  if (!fs.existsSync(indexPath)) {
    console.error('INDEX.json not found');
    process.exit(1);
  }
  const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  const bySlug = new Map((index.plugins || []).map((p) => [p.slug, p]));

  const wfDir = path.join(ROOT, '.github', 'workflows');
  if (!fs.existsSync(wfDir)) {
    console.error('.github/workflows not found');
    process.exit(1);
  }

  const files = fs
    .readdirSync(wfDir)
    .filter((f) => /^scrape-.+\.(yml|yaml)$/i.test(f));

  const candidates = [];
  for (const f of files) {
    const m = f.match(/^scrape-(.+)\.(yml|yaml)$/i);
    if (!m) continue;
    const slug = m[1];
    const p = bySlug.get(slug);
    const pages = p ? Number(p.page_count) || 0 : 0;
    if (!p || pages === 0) {
      candidates.push({ slug, file: f, pages });
    }
  }

  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }

  const picks = candidates.slice(0, MAX_PER_RUN);

  console.log(
    `Plugins missing or with 0 pages (among scrape-*.yml): ${candidates.length}`
  );
  if (candidates.length) {
    console.log('Candidates:', candidates.map((c) => c.slug).join(', '));
  }
  console.log(
    `Dispatching this run: ${picks.length} (cap MAX_PER_RUN=${MAX_PER_RUN}, DRY_RUN=${DRY})`
  );

  if (!picks.length) {
    console.log('Nothing to requeue.');
    return;
  }

  for (let i = 0; i < picks.length; i++) {
    const { slug, file } = picks[i];
    const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${encodeURIComponent(
      file
    )}/dispatches`;
    const body = JSON.stringify({ ref });

    if (DRY) {
      console.log(`[DRY_RUN] would POST ${url} body=${body}`);
      continue;
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'ml-plugin-docs-requeue-script',
      },
      body,
    });

    const text = await res.text();
    if (!res.ok) {
      console.error(`Failed to dispatch ${file}: ${res.status} ${text}`);
      process.exitCode = 1;
      continue;
    }
    console.log(
      `Dispatched ${file} (${slug}) [${i + 1}/${picks.length}]`
    );
    if (i < picks.length - 1 && STAGGER_SEC > 0) {
      await sleep(STAGGER_SEC * 1000);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
