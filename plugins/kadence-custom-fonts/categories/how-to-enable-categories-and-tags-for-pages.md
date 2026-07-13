# How To Enable Categories And Tags For Pages

*Category from Kadence Custom Fonts documentation*

---

## How to Enable Categories and Tags for Pages

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/how-to-enable-categories-and-tags-for-pages/](https://www.kadencewp.com/help-center/docs/kadence-theme/how-to-enable-categories-and-tags-for-pages/)

By default, WordPress is designed to distinguish between posts and pages:

- **Posts** are intended for blog entries or articles. They are organized using categories and tags (which are types of *taxonomies*).
- **Pages** are intended for static content, like About or Contact pages. They do not have categories or tags enabled by default because they are usually stand-alone.

However, you might have use cases where it makes sense to assign categories or tags to pages. In that case, you can enable them with a small tweak.

For example, you might want to create a [Query Loop Adv](https://docs.nexcess.com/software/kadence/blocks/advanced-query-loop-block/) block that displays Pages filtered by category.

### Option 1: Add Custom Code to Your Theme

Add this code snippet by following our guide **here**:

```
function enable_categories_and_tags_for_pages() {    // Add category and tag support to 'page'    register_taxonomy_for_object_type( 'category', 'page' );    register_taxonomy_for_object_type( 'post_tag', 'page' );}add_action( 'init', 'enable_categories_and_tags_for_pages' );
```

**What this does:**

- ```
register_taxonomy_for_object_type
```

 tells WordPress to apply the existing *category* and *tag* taxonomies to pages.
- After adding this code, you’ll see categories and tags in the Page editor sidebar.

### Option 2: Use a Plugin

You can also look for plugins that enable categories and tags for pages. One example is https://wordpress.org/plugins/pages-with-category-and-tag

The functionality will be added without custom coding after installing and activating the plugin.

*Note: There are various plugins that offer similar functionality. The one listed above is just an example. You are welcome to search the WordPress.org plugin repository or other trusted sources to find a plugin that best fits your needs.*

---

