# Alphabetical Tag Cloud

*Category from TaxoPress documentation*

---

## Alphabetical Tag Cloud – Themes

**Source:** [https://taxopress.com/docs/alphabetical-tag-cloud-themes/](https://taxopress.com/docs/alphabetical-tag-cloud-themes/)

The Alpabetical Tag Cloud allows you to display a tag cloud with your groups organized into tabs for their first letters. The Free version of the Tag Groups plugin provides one theme called “Delta” for your Alphabetical Tag Cloud layouts. You can see a preview of “Delta” in this screenshot below:

The Pro version of the Tag Groups plugin provides more themes, plus the ability to [create your own themes](https://taxopress.com/docs/creating-your-own-theme/). To choose a default theme, go to 
“Tag Groups” in your WordPress admin menu, then “Front End” and “Themes and Appearance”.

This next screenshot is a preview of the “Base” theme with the Alphabetical Tag Cloud display:

This next screenshot is a preview of the “ui-gray” theme with the Alphabetical Tag Cloud display:

This next screenshot is a preview of the “ui-lightness” theme with the Alphabetical Tag Cloud display:

This next screenshot is a preview of the “ui-darkness” theme with the Alphabetical Tag Cloud display:

This next screenshot is a preview of the “blitzer” theme with the Alphabetical Tag Cloud display:

This next screenshot is a preview of the “aristo” theme with the Alphabetical Tag Cloud display:

---

## Alphabetical Tag Cloud – Overview

**Source:** [https://taxopress.com/docs/alphabetical-tag-cloud-overview/](https://taxopress.com/docs/alphabetical-tag-cloud-overview/)

The Alphabetical Tag Cloud feature allows you to show terms in a layout where they are automatically organized by their first letter. Your terms are sorted under tabs. Each tab displays the first letters that were found in the tags. You can use either shortcodes or Gutenberg blocks for this feature.

- [Click here to see demos of the Alpabetical Tag Cloud feature](https://demo.taxopress.com/alphabetical-tabs/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/alphabetical-tag-cloud-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/alphabetical-tag-cloud-shortcode-parameters/).

Here’s a screenshot of the Alphabetical Tag Cloud feature from [our demo site](https://demo.taxopress.com).

---

## Alphabetical Tag Cloud – Shortcode Parameters

**Source:** [https://taxopress.com/docs/alphabetical-tag-cloud-shortcode-parameters/](https://taxopress.com/docs/alphabetical-tag-cloud-shortcode-parameters/)

This guide shows you how to use and customize the shortcode for the Alphabetical Tag Cloud feature in the Tag Groups plugin.

---

## Shortcode

```
a
b
c
d
g
h
i
l
m
o
p
r
s
t
u
wAccordion Tag Cloud Add Terms Alphabetical List Alphabetical Tag Cloud Alphabetical Tag Index Artificial Intelligence Auto Links Auto Terms 
bbPress Topics 
Categories Create Terms Current Post Custom Taxonomies Custom URL 
Dandelion API default category Delete Terms Delete Unused Terms Display 
Gutenberg 
Hidden Terms 
IBM Watson 
Linked Terms 
Manage Terms Media Tags Merge Terms 
Open Calais OpenAI 
Parent Categories Post Filter Post List Posts Screen Private Taxonomies 
Related Posts Remove Terms Rename Terms 
Schedule Auto Terms Simple Tags Suggest Terms Synonyms 
Tag Cloud Tag Groups Tags Taxonomy Archives TaxoPress TaxoPress Pro Term Description Term Meta Term Order Term Slugs Terms Display Terms for Current Post Terms Screen 
Uncategorized category Understanding Content 
WooCommerce WooCommerce Product Categories WooCommerce Product Tags WordPress API WordPress Categories WordPress Search 

  (function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-alphabet-tabs-6a93ccafe6fcd', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-alphabet-tabs-6a93ccafe6fcd');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

---

## Example

```
a
b
c
d
g
h
i
l
m
o
p
r
s
t
u
wAccordion Tag Cloud Add Terms Alphabetical List Alphabetical Tag Cloud Alphabetical Tag Index Artificial Intelligence Auto Links Auto Terms 
bbPress Topics 
Categories Create Terms Current Post Custom Taxonomies Custom URL 
Dandelion API default category Delete Terms Delete Unused Terms Display 
Gutenberg 
Hidden Terms 
IBM Watson 
Linked Terms 
Manage Terms Media Tags Merge Terms 
Open Calais OpenAI 
Parent Categories Post Filter Post List Posts Screen Private Taxonomies 
Related Posts Remove Terms Rename Terms 
Schedule Auto Terms Simple Tags Suggest Terms Synonyms 
Tag Cloud Tag Groups Tags Taxonomy Archives TaxoPress TaxoPress Pro Term Description Term Meta Term Order Term Slugs Terms Display Terms for Current Post Terms Screen 
Uncategorized category Understanding Content 
WooCommerce WooCommerce Product Categories WooCommerce Product Tags WordPress API WordPress Categories WordPress Search 

  (function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-alphabet-tabs-6a93ccafed225', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-alphabet-tabs-6a93ccafed225');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Tags or Terms

#### taxonomy

Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of taxonomy names | Taxonomies selected in the settings under “Basics”. | taxonomy=post_tag,product_tag |

#### smallest

Font-size in pt of the smallest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 12 | smallest=12 |

#### largest

Font-size in pt of the largest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 22 | largest=20 |

#### include_terms

Here you can specify tags/terms by their IDs that alone should be included.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (= no restriction) | include_terms=4,5,212 |

Available only in the shortcode!

#### exclude_terms

Here you can specify a list of tag/term IDs that should be excluded. **exclude_terms** is ignored if you use include_terms.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (= no restriction) | exclude_terms=3,2,11 |

Available only in the shortcode!

#### orderby

Which field to use for sorting.

Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags with amount, the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | name | orderby=natural |

#### order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | ASC | order=desc |

#### amount

Maximum amount of tags in one cloud (per group).

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 0 (unlimited) | amount=30 |

#### hide_empty

Whether to hide or show tags that are not assigned to any post.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (hide empty) | hide_empty=1 |

### threshold

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups. Please also pay attention to the value of hide_empty.

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 | integer | threshold=2 |

#### tags_post_id

Display only tags that are assigned to the post (or page) with a specified ID. If the value is set to 0, the plugin will try to retrieve the current post ID. Turn it off with -1.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all tags displayed) | tags_post_id=0 |

#### assigned_class

A modification of the tags_post_id parameter: Rather than hiding tags that are not assigned to the post (or page), they can be styled differently. Tags will receive this class name with appended _1 or _0. (If you output the tags as an array, a new element with the key “assigned” will be true or false.)

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (off) | assigned_class=“color-for-assigned-tag” |

#### separator

A separator between the tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | separator=“•” |

#### adjust_separator_size

Whether to adjust the separator’s size to the size of the following tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | adjust_separator_size=1 |

#### separator_size

The size of the separator, if not automatically adjusted to the size of the following tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 12 | separator_size=12 |

#### prepend

Prepend to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | prepend=“#” |

#### append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | append=“{count}” |

#### link_append

Append something to each tag’s link, for example a query.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | link_append=“track=this” |

Available only in the shortcode!

#### link_target

Set the “target” attribute for the links of the tags. Possible values are: _blank, _self, _parent or _top. In the shortcode you can also set the name of a frame.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string: “_blank”, “_self”, “_parent”, “_top”, or the name of a frame | empty (= opens in the same window, same as using _self) | link_target=“_blank” |

#### show_tag_count

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (show) | show_tag_count=0 |

### custom_title

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

If you also use custom_title_plural then the text of custom_title will be used for a post count of 1 and you can use here the singular form

| Default | Possible Values | Example |
| --- | --- | --- |
| depends on show_tag_count | string | custom_title="One post uses {name}" |

### custom_title_zero

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of 0 (i.e. they are not used with any published post).

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_zero="No post uses {name}" |

### custom_title_plural

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of >1. You can use here plural forms.

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_plural="{count} posts use {name}" |

### Tabs and Alphabet

#### include_letters

Which letters should be used for the tabs.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (= all) | include_letters="abcdefghi" |

#### exclude_letters

Which letters should be excluded from the tabs.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (= all) | exclude_letters="äöüß" |

#### collapsible

Whether tabs are collapsible (toggle open/close).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | Settings in the back end. | collapsible=1 |

#### mouseover

Whether tabs can be selected by hovering over with the mouse pointer (without clicking).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | Settings in the back end. | mouseover=1 |

#### active

Whether tabs are initially expanded or collapsed. Useful in connection with the parameter “collapsible”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | active=1 |

#### locale

Customize the locale (language-specific setting) that is used for sorting the first letters (initials). By default we use the language setting of your site. This sort order affects only the *order of the first letters*, not the*tag order* (see “orderby” and “order”).

Accepted values depend on which locales PHP can use on your server. They can have formats like “fr”, “fr_FR” or “fr_FR.UTF8”.  Please ask your provider if you cannot find it by guessing or googling.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (site locale) | locale="fr_FR.UTF8" |

#### ignore_accents

If you turn this on, then accented (or umlaut) letters will be treated like normal letters. For a list of changes see [remove_accents](https://developer.wordpress.org/reference/functions/remove_accents/).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | ignore_accents=1 |

### Groups

#### include

Use only tags of specified groups.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (all groups) | include=1,3,11 |

This parameter is only available in the shortcode.

#### exclude

groups to exclude

| Default | Possible Values | Example |
| --- | --- | --- |
| none | comma-separated list of group IDs | exclude=2,3,5 |

#### delay

Since version 1.29.0, we reveal the tag cloud only after the tabs have finished rendering. This prevents that visitors of your site first see tags in a list (often with bullets) before the software is able to kick in. If for any reason you need to restore the previous behavior, you can turn it off here.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 1 (on) | delay=0 |

### Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.

1. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (random value) | div_id=“sidebar_01” |

#### div_class

Define a class for the enclosing <div>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | tag-groups-cloud-tabs | div_class=“make-it-dark” |

#### ul_class

Define a class for the <ul> that generates the tabs with the group labels.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | ul_class=“change-pointer” |

---

## Alphabetical Tag Cloud – Gutenberg Block

**Source:** [https://taxopress.com/docs/alphabetical-tag-cloud-gutenberg-block/](https://taxopress.com/docs/alphabetical-tag-cloud-gutenberg-block/)

The Alphabetical Tag Cloud allows you can display your tags under tabs, where each starting letter of a tag has its own cloud.

This guide will show you how to use the Gutenberg block that is available with the Alphabetical Tag Cloud.

---

## Tags and Terms

#### Included taxonomies

Restrict the tags only to these taxonomies (“tag types”). Available are only taxonomies that have been activated in the Tag Groups Settings.

#### Smallest font size

Font-size in pt of the smallest tags.

#### Largest font size

Font-size in pt of the largest tags.

#### Tags per group

Maximum amount of tags in one cloud (per group). Pull the slider to zero to show an unlimited number.

#### Order tags by

Which field to use for sorting the tags.

Note on using “Natural Sorting”: Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags, the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

Note on random order: The order only changes when all object and page caches refresh.

#### Sort order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

#### Hide unused tags

Whether to hide or show tags that are not used by any post.

#### Minimum post count for tags to appear

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups.

#### Separator

A separator between the tags.

#### Adjust separator size to following tag

Disable if you want to set a fixed size.

#### Separator size

The size of the separator, if not automatically adjusted to the size of the following tag.

#### Prepend

Prepend to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

#### Append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

#### Show post count in the tooltip

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag.

#### Custom title for post count = 0

The custom title can be configured separately for tags that have a post count of zero. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count =1

Tooltip text when hovering the mouse over the tag. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count >1

The custom title can be configured separately for tags that have a post count > 1 so that you can use here plural in your text. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Append to the link

Append something to each tag’s link, for example a query.

#### Link Target

Set the “target” attribute for the links of the tags. Possible values are:

- **_blank:** open in a new tab/window
- **_self:** open in the same frame
- **_parent:** open in the parent frame
- **_top:** open in the full tab/window of this frame

In the shortcode you can also set the name of a frame.

#### Add filter to tags for multiple groups

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups. If the resulting posts are not complete and troubleshooting doesn’t help, you can disable it here.

#### Use tags of the following post

Display only tags that are assigned to the post (or page) with a specified ID. If you need this option, you mostly want to “use this post”. The menu offers also some recent posts by title.

---

## Alphabet and Tabs

#### Delay the display of the tabs until they are fully rendered

By default the tabs are only revealed after they are fully rendered. That way your visitors don’t see the raw structure with all tags listed below each other before the software is able to kick in. If you use this feature in an unusual position or experience issues, you can disable it here.

#### Include letters

Which letters should be used for the tabs.

#### Exclude letters

Which letters should be excluded from the tabs.

#### Open tabs on mouseover

Whether tabs can be selected by hovering over with the mouse pointer (without clicking).

#### Make panels collapsible

Whether tabs are collapsible (toggle open/close).

#### Start with expanded tabs

Whether tabs are initially expanded or collapsed. Useful when you make tabs collapsible.

---

## Groups

#### Include groups

Use only tags of specified groups.

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.

1. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

#### div class

Define a class for the enclosing <div>.

#### ul class

Define a class for the <ul> that generates the tabs with the group labels.

---

