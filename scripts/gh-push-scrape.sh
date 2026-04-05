#!/usr/bin/env bash
# Commit scrape output and push to main, retrying when other workflows updated main first.
# Resolves INDEX.json rebase conflicts by regenerating from plugins/*/index.json.
set -euo pipefail

SLUG="${SCRAPE_SLUG:?}"
NAME="${SCRAPE_NAME:?}"
export GIT_EDITOR=true
export GIT_SEQUENCE_EDITOR=true

git config user.name "ML Docs Bot"
git config user.email "bot@wplaunchify.com"

git add plugins/ INDEX.json
PAGES="$(node -e "const d=require('./plugins/' + process.env.SCRAPE_SLUG + '/documentation.json'); console.log(d.total_pages)")"
git commit -m "Update ${NAME} docs (${PAGES} pages) - $(date -u +%Y-%m-%d)"

for attempt in $(seq 1 50); do
  git fetch origin main

  if git rebase origin/main; then
    if git push origin HEAD:main; then
      exit 0
    fi
  else
    if [ -f INDEX.json ] && grep -q '<<<<<<<' INDEX.json 2>/dev/null; then
      node scripts/rebuild-index.js
      git add INDEX.json
      if ! git rebase --continue; then
        git rebase --abort
      fi
    else
      git rebase --abort
    fi
  fi

  sleep "$((2 + RANDOM % 6))"
done

echo "gh-push-scrape: exceeded retries for ${SLUG}"
exit 1
