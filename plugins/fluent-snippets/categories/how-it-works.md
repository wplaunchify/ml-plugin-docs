# How It Works

*Category from Fluent Snippets documentation*

---

## How it works

**Source:** [https://fluentsnippets.com/docs/how-it-works](https://fluentsnippets.com/docs/how-it-works)

FluentSnippets has one design idea and everything else follows from it: a snippet is a PHP file, and
running a snippet means 
```
include()
```

-ing that file. This page describes the machinery.

## The storage directory

```
wp-content/fluent-snippet-storage/
├── index.php                      generated map of every snippet
├── .htaccess                      denies web access to the .php files
├── cached/                        .css and .js for "load as file" snippets
├── 1-google-analytics-4.php
├── 2-disable-comments-site-wide.php
└── 3-free-shipping-bar.php
```

Filenames are 
```
{n}-{slug}.php
```

, where 
```
n
```

 is the number of snippet files present when the snippet was
created and 
```
slug
```

 comes from the first four words of its name. The name is fixed at creation and
does not change when you rename the snippet, which is why an existing
[shortcode](/docs/shortcodes) keeps working after a rename.

Every snippet file opens with a 
```
<?php
```

 tag, a header comment block holding the snippet’s settings,
and an 
```
ABSPATH
```

 guard, so a direct HTTP request to one returns nothing even if the 
```
.htaccess
```

 is
lost. The format is on its own page: [File format and headers](/docs/file-format).

The location is configurable with
[FLUENT_SNIPPETS_STORAGE_DIR](/docs/constants-and-hooks#fluent_snippets_storage_dir).

## The index

Reading and parsing the header of every snippet on every request would defeat the point. So the
headers are parsed once and written into a generated 
```
index.php
```

, which is a plain PHP file returning
an array:

```
return array (
  'published' => array (
    '1-google-analytics-4.php' => array (
      'type' => 'php_content',
      'run_at' => 'wp_head',
      'priority' => 10,
      'condition' => array ( 'status' => 'no', … ),
      …
    ),
    …
  ),
  'draft' => array ( … ),
  'hooks' => array ( 'wp_head' => array( '1-google-analytics-4.php' ), … ),
  'meta' => array (
    'secret_key' => '…',
    'force_disabled' => 'no',
    'cached_version' => '10.55',
    'cashed_domain' => 'https://example.com',
    'files_hash' => '…',
    'auto_disable' => 'yes',
    'auto_publish' => 'no',
  ),
  'error_files' => array ( … ),
);
```

Because it is a PHP file returning an array, PHP’s opcode cache holds it in memory and a “read” costs
nothing after the first request.

```
meta
```

 also carries the plugin’s settings and your [Safe Mode](/docs/safe-mode) secret, which is why
the directory is protected.

CARE
  Do not edit 
```
index.php
```

 and do not commit it to version control. It is generated, it records the site URL, and it will be rewritten. Add it to 
```
.gitignore
```

 along with 
```
cached/
```

.

## A request, step by step

1. WordPress loads plugins. FluentSnippets hooks its runner to 
```
plugins_loaded
```

 at priority 9.
2. The runner reads 
```
index.php
```

. If the file is missing, or 
```
force_disabled
```

 is 
```
yes
```

([Safe Mode](/docs/safe-mode)), it stops here and nothing else happens.
3. For each **published** snippet, it registers a callback on the appropriate hook, at the snippet’s
priority. Snippets recorded in 
```
error_files
```

 are skipped. Draft snippets are skipped.
4. WordPress runs as normal. When each hook fires, the callback checks the snippet’s
[conditional logic](/docs/conditional-logic) and, if it matches, includes the file or prints the
code.
5. ```
fluent_snippets/after_run_snippets
```

 fires once registration is done.

Which hook a snippet lands on depends on its type and run location:

| Type | Hook |
| --- | --- |
| Functions, no conditions | setup_theme |
| Functions, with conditions | wp |
| Content: header / body open / footer | wp_head, wp_body_open, wp_footer |
| Content: before / after content | the_content |
| Content: shortcode | none; the shortcode handler |
| Styles | wp_head or admin_head, or wp_enqueue_scripts / admin_enqueue_scripts when loaded as a file |
| Scripts | wp_head, wp_footer, admin_head, admin_footer, or the enqueue equivalents |
The Functions difference is explained in
[When your code runs](/docs/functions-snippets#when-your-code-runs).

## Rebuilding the index

The index is rebuilt automatically whenever it could be out of date:

- **When you create, update, delete or toggle a snippet.** These happen through the admin, so the
rebuild is immediate.
- **When the files on disk have changed.** A cheap signature of filenames, sizes and modification
times, with no file opened, is compared against the one recorded in the index. If it differs, the index
is rebuilt. This is what makes a 
```
git pull
```

 or an 
```
rsync
```

 of the storage directory work: load any
admin page once and the new snippets appear.
- **When the plugin version changes**, because the shape of the index may have changed.
- **When the site URL changes**, which means the site was migrated or cloned.
- **When a published snippet’s file has gone missing**, detected while registering hooks.

If you ever need to force it, saving any snippet does it, as does toggling any snippet’s status.

## The cached directory

```
cached/
```

 holds the 
```
.css
```

 and 
```
.js
```

 files produced by the **Load as Stylesheet File** option on
[Styles](/docs/css-snippets#load-as-stylesheet-file) and
[Scripts](/docs/js-snippets#load-as-script-file) snippets. These are served to visitors, so unlike
the snippet 
```
.php
```

 files they must stay publicly readable, so the 
```
.htaccess
```

 rule is deliberately
scoped to 
```
.php
```

 only.

Turning the option off for a snippet deletes its cached file. The enqueued URL carries the snippet’s
last-updated timestamp as a version, so edits are never served stale.

## Why zero database queries

Put together: the settings live in files, the parsed form lives in a generated PHP file that opcache
keeps in memory, and running a snippet is an 
```
include()
```

. At no point in the runtime path does the
plugin query the database. It does not create tables, and it does not store snippets in options.

The admin screens do use the WordPress REST API and read normal WordPress data (post types, terms,
user roles) for the conditional logic pickers. That is the admin, not the front end, and it is not
in the path of a visitor’s page load.

   Something wrong or missing on this page? [Open an issue on GitHub ↗](https://github.com/WPManageNinja/easy-code-manager/issues)

---

