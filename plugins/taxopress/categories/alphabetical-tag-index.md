# Alphabetical Tag Index

*Category from TaxoPress documentation*

---

## How to Make the Alphabetical Tag Index or the Tag List Responsive?

**Source:** [https://taxopress.com/docs/alphabetical-tag-index-tag-list-responsive/](https://taxopress.com/docs/alphabetical-tag-index-tag-list-responsive/)

The Alphabetical Tag Index and Tag List features in the Tag Group plugin will create lists in columns. You can use the shortcode parameter column_count or the corresponding block option to set the number of columns.

It is also possible to make these displays responsive, that means that the number of columns adjusts to the screen size of the viewer.

You can achieve this with a few steps.

1. In the shortcode set the column count to zero: column_count=0

2. Use div_class to set the class name to “responsive-tag-groups-list”. Now the shortcode looks like that:

```
[ ... column_count=0 div_class="responsive-tag-groups-list"]
```

3. Add to the CSS, for example in the WordPress customizer (We use the colored text only for the explanations below):

```
@media only screen and (max-width: 700px) {
  .responsive-tag-groups-list {
    column-count: 1;
    /** text-align: center; **/ /** optionally uncomment the code on the left to align tags to the center **/
  }
}
@media only screen and (min-width: 701px) and (max-width: 1000px) {
  .responsive-tag-groups-list {
    column-count: 2;
    column-gap: 10px;
  }
}
@media only screen and (min-width: 1001px) {
  .responsive-tag-groups-list {
    column-count: 3;
    column-gap: 10px;
  }
}
```

This CSS creates three different styles: one column for screen (viewport) sizesup to 700px, two columns for screen sizes from 701 to 1000px and three columns for screen sizes above 1000px.

Feel free to use your own values.

---

## Alphabetical Tag Index – Gutenberg Block

**Source:** [https://taxopress.com/docs/alphabetical-tag-index-gutenberg-block/](https://taxopress.com/docs/alphabetical-tag-index-gutenberg-block/)

The Alphabetical Tag Index feature in the Tag Groups plugin allows you to display a tag cloud with your groups as tabs.

This guide will show you how to use the Gutenberg block that is available with the Alphabetical Tag Index feature.

---

## Tags and Taxonomies

#### Include taxonomies

Select the “tag type”. By default we use all that are enabled in the Tag Groups settings.

#### Smallest font size

Font size of the tags with the smallest post count.

#### Largest font size

Font size of the tags with the largest post count.

#### Tags per panel

Maximum number of tags per panel.

#### Order tags by

Field that we should compare when ordering the tag. If you choose “natural sorting” with “Tags per group” then the number will be determined after sorting by name (not natural sorting).

Note on random order: The order only changes when all object and page caches refresh.

#### Sort order

ascending or descending order

#### Hide unused tags

Hide tags with a post count of zero.

#### Minimum post count for tags to appear

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups.

#### Prepend

Character or text to place before each tag. You can use the placeholder {count} to insert the post count.

#### Append

Character or text to place after each tag. You can use the placeholder {count} to insert the post count.

#### Show post count in the tooltip

Show the number of posts that use that tag when hovering the mouse over the tag.

#### Custom title for post count = 0

The custom title can be configured separately for tags that have a post count of zero. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count =1

Tooltip text when hovering the mouse over the tag. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count >1

The custom title can be configured separately for tags that have a post count > 1 so that you can use here plural in your text. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Link target

Set the “target” attribute for the links of the tags. Possible values are:

- **_blank:** open in a new tab/window
- **_self:** open in the same frame
- **_parent:** open in the parent frame
- **_top:** open in the full tab/window of this frame

In the shortcode you can also set the name of a frame.

#### Append to link

Append something to each tag’s link, for example a URL query.

#### Add filter to tags for multiple groups

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups. If the resulting posts are not complete and troubleshooting doesn’t help, you can disable it here.

#### Use tags of the following post

Display only tags that are assigned to the post (or page) with a specified ID. If you need this option, you mostly want to “use this post”. The menu offers also some recent posts by title.

---

## Alphabet

#### Include letters

A list of letters/characters that should be used, if they appear among the first letters. If you leave it empty, we use all initial letters of the tags.

#### Exclude letters

A list of letters/characters that should be excluded, even if they are among the initial letters of the tags.

---

## Groups

#### Include groups

Tag groups that will be considered in the tag cloud.

---

## Columns

#### Column count

The number of columns.

#### Gap between columns

Width of the gap between columns.

#### Avoid breaking groups over columns

Try to keep the group header and its tags together in one block. That makes it easier to understand which tags belong to which group, but it might lead to empty spaces at the bottom of columns.

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### Title element

Level of the HTML <h?> element.

#### div id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.
2. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

#### div class

Define a class for the enclosing <div>. Here you can apply some themes.

#### tags div class

Define a class for the tags container.

#### header class

Define a class for the header.

---

## Alphabetical Tag Index – Overview

**Source:** [https://taxopress.com/docs/alphabetical-tag-index/](https://taxopress.com/docs/alphabetical-tag-index/)

The Alphabetical Tag Index feature is part of the Tag Groups plugin. This feature allows you to show terms in a layout where they are automatically organized by their first letter. You can use either shortcodes or Gutenberg blocks.

- [Click here to see demos of the Alpabetical Tag Index feature](https://demo.taxopress.com/alphabetical-index/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/alphabetical-tag-index-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/alphabetical-tag-index-parameters/).

Here’s a screenshot of the Alphabetical Tag Index feature from [our demo site](https://demo.taxopress.com). We’re using a custom Unicode icon and a three column layout.

---

## Alphabetical Tag Index – Shortcode Parameters

**Source:** [https://taxopress.com/docs/alphabetical-tag-index-parameters/](https://taxopress.com/docs/alphabetical-tag-index-parameters/)

This guide shows you how to use and customize the shortcode for the Alphabetical Tag Index feature in the Tag Groups plugin.

---

## Shortcode

```
[tag_groups_alphabetical_index]
```

---

## Example

```
[tag_groups_alphabetical_index column_count=2]
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

This overview assumes that you know how to use shortcodes. Shortcodes are the traditional WordPress way how to add features into posts, pages and widgets.

### amount

the maximum number of tags per group to display

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 (no limit) | integer | amount=10 |

### append

adds something behind the tag name; placeholder: {count} for post count

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | append=” ({count})” |

### column_count

number of columns

| Default | Possible Values | Example |
| --- | --- | --- |
| 2 | integer | column_count=3 |

### column_gap

width of the gap between columns

| Default | Possible Values | Example |
| --- | --- | --- |
| 10px | string | column_gap=20px |

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

### div_class

class of the enclosing div for own styling

| Default | Possible Values | Example |
| --- | --- | --- |
| tag-groups-tag-list | string | div_class="my-class" |

### div_id

ID of the enclosing div

| Default | Possible Values | Example |
| --- | --- | --- |
| random | string (must be unique on the page) | div_id="my-id" |

### exclude_letters

letters/characters that should not appear in the list

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | exclude_letters=0123456789 |

### exclude_terms

a list of tags that should not appear

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | comma-separated list of tag IDs | exclude_terms= |

### h_level

<h3>/h3>, <h4></h4>, … of the headings with the group names

| Default | Possible Values | Example |
| --- | --- | --- |
| 3 | integer | h_level=2 |

### header_class

class for the headers

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | header_class="my-class" |

### hide_empty

hide tags with post count zero

| Default | Possible Values | Example |
| --- | --- | --- |
| 1 | 0 or 1 | hide_empty=0 |

### threshold

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups. Please also pay attention to the value of hide_empty.

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 | integer | threshold=2 |

### include

groups to include

| Default | Possible Values | Example |
| --- | --- | --- |
| all | comma-separated list of group IDs | include=2,3,5 |

### exclude

groups to exclude

| Default | Possible Values | Example |
| --- | --- | --- |
| none | comma-separated list of group IDs | exclude=2,3,5 |

### include_letters

which first letters to use

| Default | Possible Values | Example |
| --- | --- | --- |
| all initials of the displayed tags | string | include_letters=abcdz |

### include_terms

tags to include (see also “hide_empty”)

| Default | Possible Values | Example |
| --- | --- | --- |
| all | comma-separated list of tag IDs | include_terms=12,34,255 |

### keep_together

whether to keep headings and tag block together; otherwise tags lists may continue in a new column

| Default | Possible Values | Example |
| --- | --- | --- |
| 1 (on) | 0 or 1 | keep_together=1 |

### largest

max. font size in pt

| Default | Possible Values | Example |
| --- | --- | --- |
| 12 | integer | largest=32 |

### link_target

target attribute of the tag link (_blank, _top, _self, …)

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | link_target="_top" |

### link_append

append query to the link

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | link_append=“source=cloud” |

### locale

Customize the locale (language-specific setting) that is used for sorting the first letters (initials). By default we use the language setting of your site. This sort order affects only the *order of the first letters*, not the*tag order* (see “orderby” and “order”).

Accepted values depend on which locales PHP can use on your server. They can have formats like “fr”, “fr_FR” or “fr_FR.UTF8”.  Please ask your provider if you cannot find it by guessing or googling.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (site locale) | locale="fr_FR.UTF8" |

### ignore_accents

If you turn this on, then accented (or umlaut) letters will be treated like normal letters. For a list of changes see [remove_accents](https://developer.wordpress.org/reference/functions/remove_accents/).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | ignore_accents=1 |

### order

ascending or descending order; use with orderby

| Default | Possible Values | Example |
| --- | --- | --- |
| asc | string (asc or desc) | order=desc |

by what to order the tags

| option | description |
| --- | --- |
| name | display name of the tag |
| natural | natural sort order |
| count | post count |
| slug | tag slug |
| term_id | ID of the tag |
| description | tag description |
| random | random order that changes when all object + page caches refresh |
| term_order | A custom sort order is available with a 3rd-party plugin. |

use together with order

| Default | Possible Values | Example |
| --- | --- | --- |
| name | string | orderby=natural |

### prepend

prepend to the tag; placeholder: {count} for post count

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | prepend="#" |

### show_tag_count

show the post count in the title (deprecated option, better use custom_title

| Default | Possible Values | Example |
| --- | --- | --- |
| 1 (on) | 0 or 1 | show_tag_count=0 |

### smallest

min. font size in pt

| Default | Possible Values | Example |
| --- | --- | --- |
| 12 | integer | smallest=14 |

### tags_div_class

class name for the divs around tags

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | tags_div_class="my-class" |

### tags_post_id

Use post ID or zero for current post.

| Default | Possible Values | Example |
| --- | --- | --- |
| -1 (not used) | integer | tags_post_id=0 |

### taxonomy

taxonomies (tag types) to use

| Default | Possible Values | Example |
| --- | --- | --- |
| all selected in the settings | comma-separated list of taxonomy names/slugs | taxonomy=product_tag |

---

