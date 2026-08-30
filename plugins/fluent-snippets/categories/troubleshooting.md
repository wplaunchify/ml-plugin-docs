# Troubleshooting

*Category from Fluent Snippets documentation*

---

## Troubleshooting

**Source:** [https://fluentsnippets.com/docs/troubleshooting](https://fluentsnippets.com/docs/troubleshooting)

Symptoms first. Find yours, and the cause and fix are underneath.

## My site is broken and I cannot reach the admin

Visit your [Safe Mode URL](/docs/safe-mode). It disables every snippet without a login and puts you
back in the admin. If you do not have the URL to hand, add this to 
```
wp-config.php
```

 over SFTP:

```
define( 'FLUENT_SNIPPETS_SAFE_MODE', true );
```

Then work through the [recovery checklist](/docs/safe-mode#a-recovery-checklist).

## A snippet shows as Paused with an ERROR badge

It caused a fatal error and FluentSnippets took it out of the loading list to keep the site up. The
message on the row tells you what happened. Fix the code and save; that clears the error and restores
the snippet’s previous status. Full detail in [Error handling](/docs/error-handling).

## My snippet saves fine but nothing happens

Work down this list:

1. **Is it published?** New snippets are drafts by default. Check the toggle in the list.
2. **Is the run location right?** A Content snippet set to **Shortcode** does nothing until you place
its shortcode. A Functions snippet set to **Admin Only** does nothing on the front end.
3. **Is conditional logic switched on and not matching?** Turn it off temporarily to check.
4. **Is Safe Mode on?** The snippet list shows a banner when it is.
5. **For Before/After Content**, are you looking at a single post or page? Those locations do not fire
on archives, in excerpts, or in secondary loops. That is
[deliberate](/docs/content-snippets#before-and-after-content).
6. **For Site Wide Body Open**, does your theme call 
```
wp_body_open()
```

? Older themes may not.

## My Functions snippet ran before I added conditions and now it does not

That is the one real gotcha. Adding conditional logic to a Functions snippet moves it from the

```
setup_theme
```

 hook to the 
```
wp
```

 hook, which is much later. Anything that had to happen before 
```
wp
```

 no
longer does.

Fix: wrap the work in a hook of your own inside the snippet, so the snippet’s own attachment point
stops mattering:

```
add_action( 'init', function () {
    // your code
} );
```

See [When your code runs](/docs/functions-snippets#when-your-code-runs).

## “Remove the opening <?php tag”

Functions snippets do not take an opening tag; the plugin writes it when it saves the file. Delete
the 
```
<?php
```

 line at the top and keep the rest.

## “Remove the wrapping <style> / <script> tag”

Styles and Scripts snippets do not take their wrapping element either. The plugin emits it. Delete
the opening and closing tags and keep what was between them.

Code that only *mentions* a tag inside a string is fine and is not what triggered this.

## “You are not allowed to save snippets on this site”

You are missing 
```
install_plugins
```

, 
```
unfiltered_html
```

, or both. The usual causes are being a site
Administrator on a multisite (only Super Admins have 
```
unfiltered_html
```

),

```
DISALLOW_UNFILTERED_HTML
```

 in 
```
wp-config.php
```

, or a security plugin stripping the capability. See
[Permissions](/docs/permissions#the-unfiltered_html-requirement).

## “Your security token has expired”

The page has been open long enough for its nonce to expire. **Copy your code first**, then reload the
page and paste it back. Reloading without copying loses what you typed.

## Two snippets, and only one runs

If both define a function or class with the same name, the second causes a fatal and gets paused. Use
prefixed names, or guard with 
```
function_exists()
```

. See
[Redeclaration errors](/docs/functions-snippets#redeclaration-errors).

If both are on the same hook and the order is wrong rather than one failing, set
[priorities](/docs/snippet-types#priority).

## My shortcode prints an error message

Those messages are only visible to users who can 
```
manage_options
```

, so visitors are not seeing them.
Each one names its cause; the table in [Shortcodes](/docs/shortcodes#when-a-shortcode-renders-nothing)
maps every message to its fix. The most common is a snippet that neither prints nor returns anything.

## I copied snippet files to another site and they do not appear

Load any admin page once. FluentSnippets compares a signature of the files on disk against the one
recorded in its index, notices the difference, and rebuilds. If they still do not appear:

- Check the files are directly in the storage directory, not in a subdirectory.
- Check each file still has its 
```
// <Internal Doc Start>
```

 and 
```
// <Internal Doc End>
```

 markers. A file
without them is not recognised.
- Do not copy 
```
index.php
```

 across. It is generated and records the source site’s URL.

See [Rebuilding the index](/docs/how-it-works#rebuilding-the-index).

## CSS set to “Both Backend and Frontend” does not apply in the admin

This was a bug in the plugin, fixed in the release after 10.55. If you are on 10.55 or earlier, the
option silently behaves as frontend-only. Until you update, use a second snippet set to **Backend**
with the same rules.

## My CSS or JS “load as file” snippet 404s

The cached file is written into 
```
fluent-snippet-storage/cached/
```

, and its public URL is derived from
the storage path. If you moved storage with
[FLUENT_SNIPPETS_STORAGE_DIR](/docs/constants-and-hooks#fluent_snippets_storage_dir) to somewhere
outside 
```
wp-content
```

 and the uploads directory, no URL can be derived. Move it back under one of
those, or turn the option off and let the code print inline.

Also check that your server is not blocking the 
```
cached/
```

 directory. The plugin’s 
```
.htaccess
```

 only
denies 
```
.php
```

 files there, deliberately.

## Snippets stopped running after I deleted the plugin

Expected, unless [standalone mode](/docs/standalone-mode) was enabled first. Your snippet files are
still in 
```
wp-content/fluent-snippet-storage/
```

. Nothing was deleted. Reinstall the plugin and they
reappear exactly as they were.

To get the “keeps running without the plugin” behaviour, enable standalone mode **before** removing
it.

## Enabling standalone mode fails

WordPress could not create or write to 
```
wp-content/mu-plugins/
```

. Create the directory yourself and
make it writable, then try again. Some managed hosts control 
```
mu-plugins
```

 and may not allow it, or
may remove the file later. See [Standalone mode](/docs/standalone-mode#requirements-and-caveats).

## Something else

The plugin is open source, and issues are the support channel:
[github.com/WPManageNinja/easy-code-manager/issues](https://github.com/WPManageNinja/easy-code-manager/issues).

When reporting, include your WordPress and PHP versions, the snippet type and run location, and the
exact error message. **Do not include your Safe Mode URL.** It is a kill switch that needs no login.

   Something wrong or missing on this page? [Open an issue on GitHub ↗](https://github.com/WPManageNinja/easy-code-manager/issues)

---

