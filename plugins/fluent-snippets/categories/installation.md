# Installation

*Category from Fluent Snippets documentation*

---

## Installation

**Source:** [https://fluentsnippets.com/docs/installation](https://fluentsnippets.com/docs/installation)

FluentSnippets is free on the WordPress.org plugin directory. Install it however you normally install
a plugin.

## From the WordPress dashboard

1. Go to **Plugins → Add New**.
2. Search for **FluentSnippets**.
3. Click **Install Now**, then **Activate**.

A **FluentSnippets** entry appears in the admin sidebar. That is the whole setup; there is no
onboarding wizard, licence key or account to connect.

## With WP-CLI

```
wp plugin install easy-code-manager --activate
```

Handy for provisioning scripts and repeatable deploys. Note that 
```
easy-code-manager
```

 is the
directory slug, kept from the plugin’s original name.

NOTE
  FluentSnippets does not register any WP-CLI commands of its own. The command above is WordPress core's plugin installer. To manage snippets from the command line, work with the files in the storage directory directly and rebuild the index afterwards, as described in [How it works](/docs/how-it-works#rebuilding-the-index).

## Manual upload

1. Download the ZIP from
[WordPress.org](https://wordpress.org/plugins/easy-code-manager/) or the
[GitHub releases page](https://github.com/WPManageNinja/easy-code-manager/releases).
2. Go to **Plugins → Add New → Upload Plugin** and choose the file.
3. Click **Install Now**, then **Activate**.

## What gets created

On activation, FluentSnippets creates a single directory:

```
wp-content/fluent-snippet-storage/
├── index.php      generated map of every snippet's settings
├── .htaccess      denies direct web access to the .php files
└── cached/        optional .css and .js files, when you enable "load as file"
```

No database tables are created, and no snippet data is written to the database at any point.

The 
```
.htaccess
```

 is defence in depth. Every snippet file already begins with an 
```
ABSPATH
```

 guard, so a
direct request returns nothing even without it; the rule covers the case where a server stops
processing PHP in that directory and would otherwise hand out your source. It is written once and an
existing file is never overwritten. See
[fluent_snippets/protect_storage_dir](/docs/constants-and-hooks#fluent_snippetsprotect_storage_dir)
if your host objects to it.

## Moving the storage directory

If you would rather keep snippets somewhere else, define the path in 
```
wp-config.php
```

 **before**
WordPress loads plugins:

```
define( 'FLUENT_SNIPPETS_STORAGE_DIR', WP_CONTENT_DIR . '/uploads/fluent-snippets' );
```

Move any existing snippet files to the new location and load an admin page once so the index
rebuilds. More detail in [Constants and hooks](/docs/constants-and-hooks).

## Upgrading and uninstalling

Updates come through the normal WordPress plugin updater. Your snippet files are untouched by an
update; the index is rebuilt automatically when the plugin version changes.

Deleting the plugin leaves 
```
wp-content/fluent-snippet-storage/
```

 in place, so nothing is lost by
accident. If you had [standalone mode](/docs/standalone-mode) enabled, the snippets keep running from

```
mu-plugins
```

 after deletion. If you did not, they simply stop running and the files sit there until
you remove them yourself.

TIP
  Before you write your first PHP snippet on a live site, open **Settings** and copy the Safe Mode URL somewhere you can reach without the admin. It is the fastest way back in if a snippet ever locks you out. See [Safe Mode](/docs/safe-mode).   Something wrong or missing on this page? [Open an issue on GitHub ↗](https://github.com/WPManageNinja/easy-code-manager/issues)

---

