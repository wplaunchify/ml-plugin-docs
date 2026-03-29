# ML Plugin Docs

Public repository of scraped WordPress plugin documentation for the MinuteLaunch AI Helper ecosystem.

## What This Is

This repo contains structured documentation data scraped from official WordPress plugin documentation sites. The data powers the `fetch_plugin_documentation` MCP tool used by the MinuteLaunch Plugin Manager AI helper to answer expert questions about any plugin combination.

## How It Works

1. **GitHub Actions** run weekly scraper jobs that crawl plugin documentation sites
2. Scraped content is committed as structured **JSON + Markdown** to this repo
3. The **MCP tool** fetches data from this repo via GitHub raw URLs on demand
4. The MinuteLaunch AI helper uses fetched docs to answer customer questions

## Directory Structure

```
ml-plugin-docs/
├── INDEX.json                    ← Master index of all scraped plugins
├── plugins/
│   ├── wpfusion/
│   │   ├── index.json            ← Plugin metadata + section listing
│   │   ├── documentation.json    ← All scraped doc pages (structured)
│   │   └── categories/
│   │       ├── getting-started.md
│   │       ├── integrations.md
│   │       └── ...
│   ├── woocommerce/              ← Future
│   └── fluentcrm/                ← Future
├── scraper.js                    ← Node.js scrape engine
├── package.json                  ← Dependencies
├── .github/
│   └── workflows/
│       └── scrape-wpfusion.yml   ← GitHub Actions workflow
└── README.md
```

## Data Access

Raw JSON is available at:

```
https://raw.githubusercontent.com/wplaunchify/ml-plugin-docs/main/INDEX.json
https://raw.githubusercontent.com/wplaunchify/ml-plugin-docs/main/plugins/{slug}/index.json
https://raw.githubusercontent.com/wplaunchify/ml-plugin-docs/main/plugins/{slug}/documentation.json
```

## Currently Tracked Plugins

| Plugin | Slug | Status |
|--------|------|--------|
| WP Fusion | `wpfusion` | Phase 1 POC |

## Adding New Plugins

1. Create a workflow file: `.github/workflows/scrape-{slug}.yml`
2. Configure the target documentation URL and CSS selectors
3. Run manually or wait for the weekly schedule
4. Plugin auto-appears in `INDEX.json` once scraped

## License

Documentation content belongs to respective plugin authors. This repo indexes publicly available documentation for AI-assisted support purposes.
