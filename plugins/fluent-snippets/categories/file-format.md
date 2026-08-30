# File Format

*Category from Fluent Snippets documentation*

---

## File format and headers

**Source:** [https://fluentsnippets.com/docs/file-format](https://fluentsnippets.com/docs/file-format)

You never have to write this by hand. It is worth knowing anyway, because these are the files you
commit to Git and read in diffs.

## Anatomy of a snippet file

```
<?php
// <Internal Doc Start>
/*
*
* @description: Promo bar printed just after the opening body tag.
* @tags: promo,woocommerce
* @group: Promotions
* @name: Free shipping bar
* @type: php_content
* @status: published
* @created_by: 1
* @created_at: 2026-08-11 12:04:11
* @updated_at: 2026-08-11 12:19:02
* @is_valid: 1
* @updated_by: 1
* @priority: 10
* @run_at: wp_body_open
* @load_as_file:
* @load_in_block_editor:
* @condition: {"status":"yes","run_if":"assertive","items":[[{"source":["page","post_type"],"operator":"in","value":["product"]}]]}
*/
?>
<?php if (!defined("ABSPATH")) { return;} // <Internal Doc End> ?>

<div class="ship-bar">
    Free shipping on orders over $50, today only.
</div>
```

Three parts:

1. **The header block**, between the 
```
// <Internal Doc Start>
```

 and 
```
// <Internal Doc End>
```

 markers.
This is what the parser reads. It is a PHP comment, so it never executes.
2. **The ABSPATH guard.** A direct HTTP request to the file returns nothing.
3. **Your code**, everything after the end marker.

For a **Functions** snippet the code section begins with its own 
```
<?php
```

 tag, which the plugin adds
when it saves. For **Content**, **Styles** and **Scripts** it is raw content.

## Header keys

| Key | Values | Notes |
| --- | --- | --- |
| @name | Free text | Required. Shown in the list and used for the filename |
| @description | Free text | Optional. Searchable |
| @type | PHP, php_content, css, js | Required. Functions, Content, Styles, Scripts respectively |
| @run_at | See below | Required. Valid values depend on the type |
| @status | published, draft | A draft is indexed but never loaded |
| @priority | Integer, 1 or higher | The hook priority. Defaults to 10 |
| @group | Free text | The virtual folder |
| @tags | Comma-separated | Free-form labels |
| @condition | JSON | Conditional logic. See below |
| @load_as_file | yes or empty | Styles and Scripts only. Serve as a real .css / .js file |
| @load_in_block_editor | yes or empty | Styles only. Also load in the block editor |
| @created_at, @updated_at | Y-m-d H:i:s, UTC | Bookkeeping |
| @created_by, @updated_by | User ID | Bookkeeping |
| @is_valid | 1 | Reserved |

### @run_at values by type

| @type | Valid @run_at |
| --- | --- |
| PHP | all, backend, frontend |
| php_content | wp_head, wp_body_open, wp_footer, before_content, after_content, shortcode |
| css | wp_head (frontend), admin_head (backend), everywhere (both) |
| js | wp_head, wp_footer, admin_head, admin_footer |

## The condition value

```
@condition
```

 holds JSON describing the whole rule:

```
{
  "status": "yes",
  "run_if": "assertive",
  "items": [
    [
      { "source": ["page", "post_type"], "operator": "in", "value": ["product"] },
      { "source": ["user", "authenticated"], "operator": "=", "value": "no" }
    ],
    [
      { "source": ["page", "url"], "operator": "contains", "value": "/checkout" }
    ]
  ]
}
```

- ```
status
```

 is 
```
yes
```

 when conditional logic is switched on, 
```
no
```

 otherwise.
- ```
items
```

 is an array of **groups**. Each group is an array of conditions.
- Conditions inside a group are ANDed. Groups are ORed. This is the same structure as the visual
builder, which is what makes the builder a faithful view of the file.
- ```
source
```

 is a 
```
[category, key]
```

 pair: 
```
["user","role"]
```

, 
```
["page","page_type"]
```

,

```
["date","day_of_week"]
```

, 
```
["fluentcrm","tags_ids"]
```

.
- ```
operator
```

 is the stored form of the label in the picker: 
```
in
```

, 
```
not_in
```

, 
```
=
```

, 
```
!=
```

, 
```
contains
```

,

```
not_contains
```

, 
```
date_within
```

, 
```
date_not_within
```

.

[Conditional logic](/docs/conditional-logic) documents every source and operator with its UI label.

## If you edit a file by hand

It works, and it is a legitimate way to manage snippets in a repo. Four rules:

**1. Do not use * in a header value.** The parser splits the header block on 
```
*
```

, so a stray one
starts a new key and silently corrupts the rest of the block. The plugin replaces 
```
*
```

 with a space in
values it writes for exactly this reason. In the 
```
@condition
```

 JSON it writes the Unicode escape

```
\u002a
```

 instead, which 
```
json_decode()
```

 turns back into 
```
*
```

, so the rule survives intact.

**2. Keep both markers exactly as they are.** 
```
// <Internal Doc Start>
```

 and 
```
// <Internal Doc End> ?>
```

 delimit the header. A file missing either is not recognised as a snippet.

**3. Keep the ABSPATH guard.** Without it, a misconfigured server could execute or serve your
snippet directly.

**4. Rebuild the index afterwards.** The plugin notices changed files by comparing a signature of
names, sizes and modification times, so loading any admin page once picks up your edit. See
[Rebuilding the index](/docs/how-it-works#rebuilding-the-index).

NOTE
  The parser keeps the *last* value it sees for a repeated key. Combined with the 
```
*
```

 rule above, that is why header values are sanitised: a value containing 
```
* @status: published
```

 would otherwise override the status the plugin just wrote. If you hand-edit, keep one line per key.

## What is deliberately not in the file

There is no checksum, no signature and no encoding. A snippet file is readable source, and it is
meant to be. That is what makes it reviewable in a pull request.

The one place a checksum does appear is the [JSON export format](/docs/import-export#what-is-in-the-file),
where it exists so an import can tell that a file was altered in transit and refuse it.

   Something wrong or missing on this page? [Open an issue on GitHub ↗](https://github.com/WPManageNinja/easy-code-manager/issues)

---

