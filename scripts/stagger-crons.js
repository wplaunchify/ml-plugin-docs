#!/usr/bin/env node

/**
 * Assigns every scrape workflow a unique weekly cron slot.
 *
 * Two problems this solves:
 *  1. Every workflow used `0 H * * 0`, so 5-6 fired on the same minute. GitHub
 *     queues top-of-hour schedules heavily and dispatches them in a burst.
 *  2. Workflows sharing a vendor host hit it simultaneously, which reads as a
 *     small DDoS and gets us rate-limited or connection-reset.
 *
 * Hosts are round-robined before slots are handed out, so same-host workflows
 * land as far apart in the day as possible.
 *
 * Usage: node scripts/stagger-crons.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const WORKFLOW_DIR = path.join(__dirname, '..', '.github', 'workflows');
const DRY_RUN = process.argv.includes('--dry-run');

function hostOf(source) {
  const match = source.match(/--url=(\S+)/);
  if (!match) return 'unknown';
  try {
    return new URL(match[1].replace(/["'\\]+$/, '')).host;
  } catch (err) {
    return 'unknown';
  }
}

const files = fs.readdirSync(WORKFLOW_DIR)
  .filter(f => f.startsWith('scrape-') && f.endsWith('.yml'))
  .sort();

const byHost = new Map();
for (const file of files) {
  const source = fs.readFileSync(path.join(WORKFLOW_DIR, file), 'utf8');
  const host = hostOf(source);
  if (!byHost.has(host)) byHost.set(host, []);
  byHost.get(host).push(file);
}

// Round-robin across hosts, largest group first so its members get the widest
// spacing rather than being crammed into whatever slots are left.
const groups = [...byHost.entries()].sort((a, b) => b[1].length - a[1].length).map(([, list]) => list);
const ordered = [];
for (let i = 0; ordered.length < files.length; i++) {
  for (const group of groups) {
    if (i < group.length) ordered.push(group[i]);
  }
}

const MINUTES_PER_DAY = 24 * 60;
const step = Math.max(1, Math.floor(MINUTES_PER_DAY / ordered.length));

const plan = [];
let changed = 0;
ordered.forEach((file, index) => {
  const slot = (index * step) % MINUTES_PER_DAY;
  const hour = Math.floor(slot / 60);
  const minute = slot % 60;
  const cron = `${minute} ${hour} * * 0`;

  const filePath = path.join(WORKFLOW_DIR, file);
  const source = fs.readFileSync(filePath, 'utf8');
  plan.push({ file, cron, host: hostOf(source) });

  if (!/cron:/.test(source)) {
    console.warn(`  no cron found in ${file}`);
    return;
  }
  const updated = source.replace(/(\n\s*-\s*cron:\s*)'[^']*'/, `$1'${cron}'`);
  if (updated === source) return;
  changed++;
  if (!DRY_RUN) fs.writeFileSync(filePath, updated);
});

console.log(`${DRY_RUN ? '[dry run] would update' : 'updated'} ${changed} of ${files.length} workflows`);
console.log(`spacing: one run every ${step} minute(s) across Sunday`);

const slotCounts = new Map();
const hostSlots = new Map();
for (const entry of plan) {
  slotCounts.set(entry.cron, (slotCounts.get(entry.cron) || 0) + 1);
  const key = `${entry.host} @ ${entry.cron}`;
  hostSlots.set(key, (hostSlots.get(key) || 0) + 1);
}
const sameMinute = [...slotCounts.entries()].filter(([, n]) => n > 1);
const sameHost = [...hostSlots.entries()].filter(([, n]) => n > 1);
console.log(sameMinute.length === 0
  ? 'planned schedule: no two workflows share a minute'
  : `WARNING: ${sameMinute.length} minute(s) double-booked`);
console.log(sameHost.length === 0
  ? 'planned schedule: no same-host collisions'
  : `WARNING: same-host collisions: ${sameHost.map(([k]) => k).join(', ')}`);

// Report the tightest gap between two runs against the same host.
const perHost = new Map();
for (const entry of plan) {
  const [m, h] = entry.cron.split(' ');
  const minuteOfDay = parseInt(h, 10) * 60 + parseInt(m, 10);
  if (!perHost.has(entry.host)) perHost.set(entry.host, []);
  perHost.get(entry.host).push(minuteOfDay);
}
let tightest = { host: null, gap: Infinity };
for (const [host, minutes] of perHost) {
  if (minutes.length < 2) continue;
  minutes.sort((a, b) => a - b);
  for (let i = 1; i < minutes.length; i++) {
    const gap = minutes[i] - minutes[i - 1];
    if (gap < tightest.gap) tightest = { host, gap };
  }
}
if (tightest.host) {
  console.log(`tightest same-host gap: ${tightest.gap} min (${tightest.host})`);
}
