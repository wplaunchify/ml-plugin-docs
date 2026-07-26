#!/usr/bin/env bash
#
# Runs scraper.js and retries only when the failure was vendor-side flakiness.
#
# scraper.js exit codes:
#   0 = success
#   1 = config is wrong (a human must fix it) -> fail immediately, no retry
#   2 = transient (host refused / timed out / served empty) -> retry
#
# Without this, a single dropped connection from a vendor turns into a red run
# and an email, even though the config is fine and the next attempt succeeds.

set -uo pipefail

MAX_ATTEMPTS="${SCRAPE_MAX_ATTEMPTS:-3}"
RETRY_WAIT_SECONDS="${SCRAPE_RETRY_WAIT:-180}"

if [ "$#" -eq 0 ]; then
  echo "usage: run-scrape.sh --slug=... --mode=... --url=... [more scraper args]" >&2
  exit 1
fi

attempt=1
while true; do
  echo "::group::Scrape attempt ${attempt}/${MAX_ATTEMPTS}"
  node scraper.js "$@"
  status=$?
  echo "::endgroup::"

  if [ "$status" -eq 0 ]; then
    [ "$attempt" -gt 1 ] && echo "Succeeded on attempt ${attempt} after transient failure(s)."
    exit 0
  fi

  if [ "$status" -ne 2 ]; then
    echo "::error::Scrape failed with a non-retryable error (exit ${status}). The scrape config likely needs updating."
    exit "$status"
  fi

  if [ "$attempt" -ge "$MAX_ATTEMPTS" ]; then
    echo "::error::Scrape still failing after ${MAX_ATTEMPTS} attempts. The source host may be down or blocking us."
    exit 1
  fi

  wait_for=$(( RETRY_WAIT_SECONDS * attempt ))
  echo "Transient failure (exit 2). Waiting ${wait_for}s before attempt $(( attempt + 1 ))..."
  sleep "$wait_for"
  attempt=$(( attempt + 1 ))
done
