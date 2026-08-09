# Frequently Asked Questions

*Category from TaxoPress documentation*

---

## How to Display Tags in a Custom Sort Order?

**Source:** [https://taxopress.com/docs/how-to-display-tags-in-a-custom-sort-order/](https://taxopress.com/docs/how-to-display-tags-in-a-custom-sort-order/)

Most front end features of the Tag Groups plugin allow you to set the sort order of tags with the parameters **orderby** (the property used for sorting) and **order** (up or down). The tags in the menu of the Toggle Post Filter use **term_orderby** and **term_order**.

WordPress lets you sort by name, post count etc. out of the box. Sometimes, however, you need a custom sort order. Imagine, for example, the following list of tags:

- 10 minutes
- 30 minutes
- 1 hour
- 15 hours
- 1 day

The default sort options won’t let you sort these tag names in chronological order. While it was always possible to use another field of the tag data where you entered numbers, you can also sort by drag and drop.

This process requires two steps that we explain below:

---

## Step #1. Sort tags with a 3rd-party plugin

First you need to install a 3rd-party plugin that lets you drag and drop the tags into the desired order. We tested:

- [Simple Custom Post Order](https://wordpress.org/plugins/simple-custom-post-order/)
- [Custom Taxonomy Order](https://wordpress.org/plugins/custom-taxonomy-order-ne/)

Other plugins might work as well.((They must save the order as integer in the *term_order* column of the database table where terms are stored. If you cannot verify that, simply give it a try.))

**Note:** If the plugin lets you sort the tags directly in the tag list and you notice that the tag order is not consistent across groups, you may have to disable the filtering by tag group while sorting.

## Step #2. Use “term order”

Then you only need to use **orderby=term_order** (or **term_orderby=term_order**) in the shortcode.

Example:

```
(function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-tabs-6a781c374f44d', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-tabs-6a781c374f44d');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

In the Gutenberg block go to “Order tags by” and select “Term Order”:

---

## Other notes

- Tag Groups can use the *term_order* even after the 3rd-party plugin has been deactivated. Just make sure it doesn’t remove its data when you uninstall it. It depends on the particular plugin how they handle that.
- If for some reason you cannot use a 3rd-party plugin or it cannot extend the database tables, there is a fallback solution: Write the custom order as numbers into the description field of the tags. Then order them by description. Don’t forget to use custom_title=”” in the tag clouds to hide the description, which by default is displayed as “tooltip”.

---

## Can I Use Tag Groups with Custom Taxonomies?

**Source:** [https://taxopress.com/docs/can-i-use-tag-groups-with-custom-taxonomies/](https://taxopress.com/docs/can-i-use-tag-groups-with-custom-taxonomies/)

This plugin works with taxonomies such as post tags or product tags. Custom taxonomies must be accessible by Tag Groups and behave like post tags. This depends on the way how they are defined by the plugin or theme that provides them.

The best way to find out if a custom taxonomy works is to install Tag Groups and check if you can select this taxonomy in the settings. Then create a test group and assign custom taxonomy tags to them.

---

## Which Tag Groups Feature Do I Need?

**Source:** [https://taxopress.com/docs/how-to-which-feature-is-the-right-for-me/](https://taxopress.com/docs/how-to-which-feature-is-the-right-for-me/)

Below you find a list of common cases that users need to achieve. Some of these features are available only in the Pro version.

## Tag Clouds

Tag clouds show tags of selected groups. When your visitors click on a tag, they will be taken to a new page where they see a list with matching posts.

### Displaying Tag Groups

#### I need to display the tags under tabs (arranged horizontally). The tabs should represent tag groups.

→ Use the Tabbed Tag Cloud.

#### I need to display the tags in an accordion (stacked vertically and sliding up and down). Each slider should represent a tag group.

→ Use the Accordion Tag Cloud.

#### I need to display the tags in under tabs (arranged horizontally). The tags should be sorted alphabetically into groups by their first letters.

→ Use the Alphabetical Tag Cloud.

#### I need to display the tags in a table: I the first row are the groups and below in each column the tags of a group.

→ Use the Table Tag Cloud.

#### I need to display the tags in one tag cloud. It should be possible to filter the tags by group or by name.

→ Use the Shuffle Box.

#### I need to display a tag cloud but only those tags that belong to a particular post.

Use any of the tag clouds with the parameter tags_post_id. For the current post you use tags_post_id=0.

#### I need to display a tag cloud but only tags of those groups that belong to a particular post.

Use any of the tag clouds with the parameter groups_post_id. For the current post you use groups_post_id=0.

### Not Displaying Tag Groups

#### I need to display the tags in a simple tag cloud. The tags of different groups should be mixed together and no group names should be displayed.

→ Use the Simple Tag Cloud.

#### I need to display only a subset of particular groups in a simple tag cloud.

→ Create a tag group for the tags that you want to display and use the Simple Tag Cloud.

## Other Ways to Display Tags

#### I need to automatically display under each post the tags that belong to this particular post. Tags should be sorted by groups.

→ Activate the Post Tag feature in the Tag Groups settings.

## Lists of Posts

#### I need a filter on my page where visitors first select a group and then some of the tags of this group. Every time they add or remove a tag, they should see a list of posts that match these tags.

→ Use the Dynamic Post Filter.

## Other Ways to use Groups

#### I need to display on a page the name of one or more tag groups or the number of tags in them.

→ Use the Group Info shortcode.

#### I need a menu where visitors can select a group. They will then be taken to a list of matching posts.

→ Use the Tag Groups Menu shortcode.

---

## Can I Use Tag Groups Multiple Times on The Same Page?

**Source:** [https://taxopress.com/docs/can-i-have-two-tag-clouds-on-the-same-page/](https://taxopress.com/docs/can-i-have-two-tag-clouds-on-the-same-page/)

Yes, this is possible with these displays:

- Tabbed Tag Cloud
- Accordion Tag Cloud
- Table Tag Cloud
- Simple Tag Cloud
- Alphabetical Tag Cloud
- Tag List
- Alphabetical Tag Index
- Shuffle Box

More than one tag cloud of these types on the same page is possible. You simply enter  the same shortcode again, or the same Gutenberg block again.

You only have to make sure that the parameter div_id (or table_id) is different for every cloud. If you don’t use that parameter, it will be set automatically and you don’t need to worry about that.

## Exceptions That Can Only Be Used Once

The Toggle Post Filter and Dynamic Post Filter can only be used once per page and not together.

---

## Glossary of Useful Words for Tag Groups

**Source:** [https://taxopress.com/docs/glossary/](https://taxopress.com/docs/glossary/)

In this Glossary you find some explanations of relevant terms that are either part of the default WordPress ecosystem or specific to the Tag Groups plugin.

## Meta Box

A meta box is an additional container on the post or page edit screen where you can enter supplemental information or select among options. The information inside the meta box is usually saved together with the post or page.

In the context of Tag Groups Pro, the meta box holds a tool where you can filter tags by groups and add them to posts. It also includes a button to add all tags of a group to the post.

The Meta Box of Tag Groups Pro is by default off and needs to be activated in the settings. If you still don’t see the expected meta box, you could open the “Screen Options” on the top and check if that particular meta box is enabled.

Meta boxes can be moved around and collapsed.

## Post Type

The post type defines whether a piece of content is a post, a page, an attachment, a product, an event, or other built-in or custom types. Some of the built-in post types are used only internally and not directly visible to users.

Post types can be associated with one or more **taxonomies**, such as tags and categories.

## Shortcode

A [shortcode](https://codex.wordpress.org/Shortcode) is a code wrapped in square brackets. It enables you to insert content into posts, pages and text widgets that is not part of the default WordPress installation. Shortcodes are therefore mostly provided by plugins and themes and they work only as long as those are active.

Shortcodes start with a pre-defined keyword, optionally followed by one or more parameters. You write and edit the shortcode in the post or page editor. On the front end, however, it will show as a tag cloud, an image, a table, a widget or anything else, depending on the keyword.

Parameters are formatted as *name=value*. These name-value pairs are separated from each other by spaces. That means that if you want to include a space in a value, the entire value must be wrapped in (plain, not formatted) quotes. Some characters that have a special meaning in HTML code cannot be used in shortcodes.

Shortcodes will gradually become obsolete as Gutenberg blocks will take their places. Disadvantages of shortcodes are problems with nested codes, visible codes on the front end if the corresponding plugin is disabled, and frequent malfunctions because users unintentionally copied over invisible formatting.

## Shuffle Box

Shuffle Box is a name we use for one of the Pro plugin’s tag clouds. This tag cloud allows users to filter the tags by tag group or by parts of their names. The filtering appears in an animation by re-shuffling the tags – hence the name.

## Tag Group

Tag groups are not available with the standard WordPress installation. They can be activated for all non-hierarchical taxonomies, but some features will not work with hidden or custom taxonomies. The plugin allows you to activate also hierarchical taxonomies, this, however, is an experimental feature that you can play with.

Tag Groups are ordered and have names, and they can contain tags. Tags remain non-hierarchical, but they can be sorted into one (or more, with the Pro plugin) groups that therefore form a parent level.

## Taxonomy

A [taxonomy](https://codex.wordpress.org/Taxonomies) is basically a *tag type*. Taxonomies help organize posts. Best-known taxonomies are post tags and categories.

The most important distinction is between *hierarchical* and *non-hierarchical* taxonomies. Hierarchical taxonomies, such as categories, can be organized in a tree structure where each category can have a parent, even on multiple levels.

Plugins and themes can create custom taxonomies. For example, the plugin WooCommerce creates *product tags* and *product categories*. Custom taxonomies are only available while the respective plugin is active.

All taxonomies are connected to specific **post types**. Post tags and post categories, for example, are connected to posts, and product tags and product categories are connected to products.

Taxonomies are (out of the box) only available for posts and post-like post types – not pages.

Most taxonomy items are clickable where they appear on pages. Their links take you to an “archive” page where you see all posts of that corresponding post type that belong to that item that you clicked on. That way they work like post filters.

If you use the Tag Group Pro plugin with a different taxonomy than “post_tag”, you will need to add a parameter to the shortcode or block where you specify which taxonomy you want to use.

## Term

Term is a general name for **taxonomy** items, such as tags or categories. In the context of this plugin, “term” is almost always synonymous with “tag”.

## Block

Blocks are containers in the **Gutenberg** editor. They can be moved around, duplicated, saved with its content as a template, converted and more.

Your readers won’t see on the front end that you used blocks on the back end.

The default Gutenberg installation provides several useful standard blocks. Further blocks can be added by other plugins and themes. Older plugins don’t automatically have blocks. Blocks need to be created by the developers.

## Gutenberg

Gutenberg is a new WordPress editor that will gradually be introduced as the default editor for posts and pages. Its main objective is to simplify the creation of layouts, to make the user interface more consistent and to integrate the same editor into many places, for example widget sidebars. Gutenberg aims to show on the editing screen the precise layout of the final page and it makes it easier to provide user-friendly context menus.

Gutenberg is based on **blocks** that hold the content.

---

## Can I Use the Tag Groups Plugin with Categories?

**Source:** [https://taxopress.com/docs/can-i-use-the-plugin-with-categories/](https://taxopress.com/docs/can-i-use-the-plugin-with-categories/)

Categories and other hierarchical taxonomies are not officially supported. Some features may work anyway and you can experiment with it on your own risk.

---

## Can I Use the Tag Groups Plugin with Pages?

**Source:** [https://taxopress.com/docs/can-i-use-the-plugin-with-pages/](https://taxopress.com/docs/can-i-use-the-plugin-with-pages/)

Yes, this is possible using the TaxoPress plugin, in addition to the Tag Groups plugin.

[Follow this guide to add your taxonomy to WordPress pages](https://publishpress.com/blog/plugins/tags-categories-wordpress-pages/).

---

## “The Free Tag Groups Plugin Cannot be Active Together with Tag Groups Pro.”

**Source:** [https://taxopress.com/docs/the-free-tag-groups-plugin-cannot-be-active-together/](https://taxopress.com/docs/the-free-tag-groups-plugin-cannot-be-active-together/)

This message appears when you try to activate the free Tag Groups plugin and the Tag Groups Pro plugin at the same time. Since the free plugin is already included in the Pro plugin, it will be automatically deactivated.

This is just an informational message and there is nothing you need to do.

## So is it safe to remove the free plugin?

If you want to remove the free plugin entirely, you can do so without affecting the functionality of the Pro plugin. Just make sure that you didn’t choose to delete your tag groups data in the *Reset* tab of the “Tools” settings. By default, you won’t delete this data.

---

## What are the Minimum System Requirements to Install Tag Groups?

**Source:** [https://taxopress.com/docs/what-are-the-minimum-requirements/](https://taxopress.com/docs/what-are-the-minimum-requirements/)

The Tag Groups plugin works only with post types that have tags or other non-hierarchical taxonomies, such as post tags, product tags or other tags. Categories are not supported.

In order to use the Tag Groups plugin you will need the following:

- WordPress version 4.9 or higher. Recommended is the latest version.
- An administrator account to install plugins and change settings.
- You will need knowledge of HTML and CSS if you want to customize the styling. Your web designer will be able to help you.
- WordPress 5.0 or higher or the Gutenberg plugin if you want to use Gutenberg blocks.
- A server environment that that is able to run the latest version of WordPress, including the following PHP [extensions](https://github.com/johnbillion/ext#wp-ext-required). Your hosting provider will be able to tell you, if these conditions are met.

```
dom
gmagick
SimpleXML
ssh2
xml
xmlreader
curl
date
exif
filter
ftp
gd
hash
iconv
imagick
json
libxml
mbstring
mysqli
openssl
pcre
posix
sockets
SPL
tokenizer
zlib
```

WordPress [recommends](https://github.com/johnbillion/ext#wp-ext-recommended) also the following extensions:

```
gmagick
ssh2
exif
imagick
```

---

