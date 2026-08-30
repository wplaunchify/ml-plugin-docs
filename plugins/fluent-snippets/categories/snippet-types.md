# Snippet Types

*Category from Fluent Snippets documentation*

---

## Snippet types and run locations

**Source:** [https://fluentsnippets.com/docs/snippet-types](https://fluentsnippets.com/docs/snippet-types)

A snippet has a **type** and a **run location**. The type says what language you are writing and
decides which locations are available. The location says where in the WordPress request your code is
attached.

## The four types

| Type | Editor language | What it is for |
| --- | --- | --- |
| Functions | PHP | Server-side code, as in functions.php. Hooks, filters, classes, integrations. |
| Content | PHP + HTML | Output. Tracking tags, banners, markup around post content, shortcodes. |
| Styles | CSS | Styling the front end, the admin, or the block editor. |
| Scripts | JavaScript | Third-party embeds and small bits of behaviour. |
Each has its own page with the details:
[Functions](/docs/functions-snippets),
[Content](/docs/content-snippets),
[Styles](/docs/css-snippets),
[Scripts](/docs/js-snippets).

The type is fixed once a snippet is created. To change it, create a new snippet and delete the old
one.

## Run locations

| Location | Available in | What it does |
| --- | --- | --- |
| Run Everywhere | Functions | Runs on both the front end and the admin |
| Admin Only | Functions | Runs only under /wp-admin/ |
| Frontend Only | Functions | Runs only on the front end |
| Site Wide Header | Content, Scripts | Prints inside <head> on the front end (wp_head) |
| Site Wide Body Open | Content | Prints straight after the opening <body> tag (wp_body_open) |
| Site Wide Footer | Content, Scripts | Prints before </body> on the front end (wp_footer) |
| Before Content | Content | Prepends to the content of a single post, page or CPT |
| After Content | Content | Appends to the content of a single post, page or CPT |
| Shortcode | Content | Nothing runs until you place [fluent_snippet id="…"] |
| Admin Area Header | Scripts | Prints in the admin <head> (admin_head) |
| Admin Area Footer | Scripts | Prints before </body> in the admin (admin_footer) |
| Frontend | Styles | Adds the CSS on the front end |
| Backend | Styles | Adds the CSS in /wp-admin/ |
| Both Backend and Frontend | Styles | Adds the CSS in both places |
NOTE
  **Site Wide Body Open** depends on your theme calling 
```
wp_body_open()
```

, which themes have been expected to do since WordPress 5.2. A theme that skips it will not print body-open snippets. If yours does not, use Site Wide Header instead.

## Priority

Every snippet has a **Priority** field. It is passed straight through as the WordPress hook priority,
so the usual rules apply: lower numbers run earlier, the default is 10, and the minimum accepted here
is 1.

Priority only matters between snippets sharing the same hook, and between your snippet and other code
on that hook. Two examples:

- Two **Site Wide Header** Content snippets, one that defines a 
```
dataLayer
```

 and one that reads it.
Give the definition priority 5 and the reader priority 10.
- A **Frontend Only** Functions snippet that must run before a theme’s own callback registered at
priority 10. Set it to 5.

Anything that is not a number, or is below 1, falls back to 10.

## Draft and published

Every snippet is either **published** (running) or **draft** (saved, not running). Draft snippets are
parsed and indexed but never loaded, so a draft costs nothing at runtime.

New snippets are saved as drafts by default. Turn on **Publish new snippets straight away** in
Settings to have them published straight away instead. Imported snippets always arrive as drafts,
whatever that setting says.

Toggle the status from the switch in the snippet list, or from the **Activate** / **Deactivate**
button on the editor screen.

A snippet that has been [quarantined after a fatal error](/docs/error-handling) shows as **Paused**
with an 
```
ERROR
```

 badge, and its toggle is replaced until you fix and re-save it.

## Where the settings are stored

Type, run location, priority, status, group, tags and conditional logic all live in a comment block
at the top of the snippet’s own 
```
.php
```

 file, not in the database. That is what makes snippets
portable between sites. The format is documented in
[File format and headers](/docs/file-format).

   Something wrong or missing on this page? [Open an issue on GitHub ↗](https://github.com/WPManageNinja/easy-code-manager/issues)

---

