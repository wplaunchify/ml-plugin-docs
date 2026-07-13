# ml-plugin-docs — Agent Notes

This repo scrapes WordPress plugin documentation from vendor sites and stores it as markdown + JSON. One GitHub Actions workflow per plugin in `.github/workflows/`, each running `scraper.js` on a weekly cron.

## How the scraper works

`node scraper.js --slug=<slug> --mode=<mode> --url=<url> [options]`

Three modes:

- `wp-api` — pulls posts from `<site>/wp-json/wp/v2/<post-type>`. Options: `--post-type`, `--taxonomy`. The scraper probes both the configured URL path and the site origin for the API base, and uses whichever answers.
- `sitemap` — reads the site's XML sitemap (or `--sitemap-index=<url>` override), keeps URLs containing the `--url` path, scrapes each page with `--selector`.
- `html-scrape` — fetches `--url` as an index page, follows same-path links, scrapes each with `--selector`. The index page itself is always included.

Fail-fast: if zero pages scrape, `scraper.js` exits 1 and writes nothing. This is deliberate — it turns silent data loss (committing empty docs over good ones) into a visible red run. A red run means the vendor's site changed, not that the pipeline is broken.

## Debugging a failed run

1. Reproduce locally: `npm ci`, then run the exact `node scraper.js ...` line from the workflow file.
2. "EMPTY" on every page = the content selector no longer matches. `curl -L` one doc page, look at the final URL (redirects reveal site migrations) and find the new content container class.
3. Zero URLs found = sitemap or index URL moved. Probe `wp-sitemap.xml`, `sitemap_index.xml`, `sitemap.xml` at the new origin.
4. Verify the fix locally (real page counts, not just exit 0) before pushing.
5. Trigger a live test: POST to `https://api.github.com/repos/wplaunchify/ml-plugin-docs/actions/workflows/<file>.yml/dispatches` with `{"ref":"main"}`. A token is available via `git credential fill` (no `gh` CLI on this machine).

## Known site-specific selectors

- Kadence (all 11 workflows) and The Events Calendar: docs migrated to `docs.nexcess.com` (July 2026). Selector is `.nx-prose`. Kadence workflows still use `kadencewp.com/help-center/` URLs, which redirect there and work.
- WooCommerce products: `.wccom-single-doc-content`
- WP File Manager (`filemanagerpro.io/article/`): `.article_container`
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
