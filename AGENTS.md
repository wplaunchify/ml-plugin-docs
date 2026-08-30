# ml-plugin-docs — Agent Notes

This repo scrapes WordPress plugin documentation from vendor sites and stores it as markdown + JSON. One GitHub Actions workflow per plugin in `.github/workflows/`, each running `scraper.js` on a weekly cron.

## How the scraper works

`node scraper.js --slug=<slug> --mode=<mode> --url=<url> [options]`

Three modes:

- `wp-api` — pulls posts from `<site>/wp-json/wp/v2/<post-type>`. Options: `--post-type`, `--taxonomy`. The scraper probes both the configured URL path and the site origin for the API base, and uses whichever answers.
- `sitemap` — reads the site's XML sitemap (or `--sitemap-index=<url>` override), keeps URLs containing the `--url` path, scrapes each page with `--selector`.
- `html-scrape` — fetches `--url` as an index page, follows same-path links, scrapes each with `--selector`. The index page itself is always included.

Fail-fast: if zero pages scrape, `scraper.js` exits 1 and writes nothing. This is deliberate — it turns silent data loss (committing empty docs over good ones) into a visible red run. A red run means the vendor's site changed, not that the pipeline is broken.

## Two kinds of failure — check which one before digging in

The scraper labels every fatal error, and the exit code drives whether it gets retried:

- `CAUSE: TRANSIENT` (exit 2) — the vendor host refused, timed out, or served an empty
  200 even after retries with backoff. The config is fine. `scripts/run-scrape.sh`
  retries the whole scrape up to 3 times (3 min, then 6 min apart) before the job goes red.
- `CAUSE: CONFIG` (exit 1) — the host answered normally but produced nothing usable.
  The docs moved or the mode/url/post-type/selector is wrong. Not retried; needs a human.

Workflows call `bash scripts/run-scrape.sh <args>`, never `node scraper.js` directly.
`scripts/use-run-scrape-wrapper.js` rewires any workflow that still calls the scraper directly.

Crons are staggered by `scripts/stagger-crons.js`: one workflow every 10 minutes across
Sunday, with same-host workflows spread hours apart. Re-run it after adding workflows —
otherwise sibling scrapes hit the same vendor at once and get rate-limited.

## Debugging a failed run

1. Reproduce locally: `npm ci`, then run the exact `node scraper.js ...` line from the workflow file.
2. "EMPTY" on every page = the content selector no longer matches. `curl -L` one doc page, look at the final URL (redirects reveal site migrations) and find the new content container class.
3. Zero URLs found = sitemap or index URL moved. Probe `wp-sitemap.xml`, `sitemap_index.xml`, `sitemap.xml` at the new origin.
3b. A scrape that "succeeds" is not automatically correct. Check `plugins/<slug>/categories/`
   for names like `cart`, `pricing`, `checkout` or bare language codes (`de`, `fr`, `pt`) —
   those mean the config is pointed at a marketing site rather than the docs.
   Category files from earlier scrapes are deleted on each successful run, so the directory
   always reflects the current source.
4. Verify the fix locally (real page counts, not just exit 0) before pushing.
5. Trigger a live test: POST to `https://api.github.com/repos/wplaunchify/ml-plugin-docs/actions/workflows/<file>.yml/dispatches` with `{"ref":"main"}`. A token is available via `git credential fill` (no `gh` CLI on this machine).

## Known site-specific selectors

- Kadence (all 11 workflows) and The Events Calendar: docs migrated to `docs.nexcess.com` (July 2026). Selector is `.nx-prose`. Kadence workflows still use `kadencewp.com/help-center/` URLs, which redirect there and work.
- FooEvents (all 6 workflows): docs are at `help.fooevents.com/docs/` via `sitemap_index.xml`,
  selector `.foodocs-content`. Do not point these at `www.fooevents.com` — that is the
  marketing site and it silently yields cart/pricing/language pages instead of docs. It also
  refuses connections from GitHub runners fairly often.
- WooCommerce products: `.wccom-single-doc-content`
- WP File Manager (`filemanagerpro.io/article/`): `.article_container`
- Fluent Snippets (`fluentsnippets.com/docs/`, 2 workflows): `.docs__main`. The site was
  redesigned in August 2026; the `/docs/` index itself has no article body and always
  reports as the one failed URL, which is expected.
- WPCodeBox 2 (`docs.wpcodebox.com`): `.nextra-content`
- QuadLayers (`quadlayers.com/documentation/`): `.doc-main__content`
- Default when nothing else is specified: `.entry-content`

## Git workflow gotchas

- Scheduled runs push to `main` constantly. Always `git pull --rebase` before pushing; expect `INDEX.json` conflicts. Merge by taking the remote file and overlaying your updated plugin entries (`git show :2:INDEX.json` = remote, `:3:` = yours during rebase).
- `scripts/audit-zero-pages.js --all` audits every workflow config; without `--all` it checks only plugins with zero pages in `INDEX.json`.

## Failure history (for context)

- June 2026: core `wp-api` bug built API URLs off doc sub-paths instead of the origin; ~40 plugins silently scraped zero pages. Fixed in `scraper.js`, plus fail-fast added.
- Early July 2026: 64 workflows reconfigured with correct URLs/modes/selectors after research; WPCodeBox docs moved.
- Mid July 2026: Nexcess/Liquid Web migrated the Kadence help center and Events Calendar docs to `docs.nexcess.com` with a new theme; 12 workflows failed until the selector was updated to `.nx-prose`.
- Aug 30 2026: `launchflows.com` (our own site) started returning HTTP 500 on every
  uncached request — a WordPress fatal, "Composer dependencies require a PHP version
  >= 8.1.0". The scrape config was fine (43 pages on Aug 23); the site needs its PHP
  version raised. Nothing to fix in this repo. Worth re-checking whether it recovered.
- Late July 2026: FooEvents, WP All Import and AffiliateWP runs failed with no config problem at all — every one of them scraped fine on retry, and sibling workflows against the same host succeeded the same day. Root cause was all 131 workflows firing on the hour, so vendors saw bursts and dropped connections, and the scraper only retried 3 times over ~6 seconds. Fixed by staggering crons, adding exponential backoff with jitter and Retry-After support, re-checking empty WP API responses before trusting them, and retrying transient failures at the job level.
