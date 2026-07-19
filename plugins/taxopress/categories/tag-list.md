# Tag List

*Category from TaxoPress documentation*

---

## Tag List – Gutenberg Block

**Source:** [https://taxopress.com/docs/tag-list-gutenberg-block/](https://taxopress.com/docs/tag-list-gutenberg-block/)

With the Tag List feature, terms are displayed in columns under their group names. You can choose which groups to show and you can customize how the tags layout.

This guide will show you how to use the Gutenberg block that is available with the Tag List feature.

---

## Tags and Taxonomies

#### Include taxonomies

Select the “tag type”. By default we use all that are enabled in the Tag Groups settings.

#### Smallest font size

Font size of the tags with the smallest post count.

#### Largest font size

Font size of the tags with the largest post count.

#### Tags per group

Maximum number of tags per group.

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

## Groups

#### Hide empty groups

Whether to hide groups without tags.

#### Include groups

Tag groups that will be considered in the tag cloud.

#### Use groups of the following post

Display only groups of which at least one assigned tag is also assigned to the selectd post (or page). Matching groups will be added to the list specified by **Include groups**.

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

## Tag List – Overview

**Source:** [https://taxopress.com/docs/tag-list/](https://taxopress.com/docs/tag-list/)

In the Tag List feature, terms are displayed in columns under their group names. You can choose which groups to show and you can customize how the tags layout. You can use either shortcodes or Gutenberg blocks for this feature.

- [Click here to see demos of the Tag List feature](https://demo.taxopress.com/tag-list/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/tag-list-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/tag-list-parameters/).

Here’s a screenshot of the Tag List feature from [our demo site](https://demo.taxopress.com). This example uses a red color scheme, plus the number of times the tag is used.

---

## Tag List – Shortcode Parameters

**Source:** [https://taxopress.com/docs/tag-list-parameters/](https://taxopress.com/docs/tag-list-parameters/)

This guide shows you how to use and customize the shortcode for the Tag List feature in the Tag Groups plugin.

---

## Shortcode

```
[tag_groups_tag_list]
```

---

## Example

```
[tag_groups_tag_list append="{count}"]
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

This overview assumes that you know how to use shortcodes. Shortcodes are the traditional WordPress way how to add features into posts, pages and widgets.

### add_premium_filter

Modifies the URL – for the case that you use the same tag in various groups.

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 (false) | 0 or 1 | add_premium_filter=1 |

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

### assigned_class

adds class name to tags that shows whether the tag is assigned or not; assigned tags have “_1” appended, unassigned “_0” to the class name

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | assigned_class="colored-tags" |

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

### exclude_terms

a list of tags that should not appear

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | comma-separated list of tag IDs | exclude_terms= |

### group_in_class

whether to add information about the groups into the class attribute; tg_tag_group_id_ + ID and tg_tag_group_label_ + tag name (spaces replaced with dashes)

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 (off) | 0 or 1 | group_in_class=1 |

### groups_post_id

ID of a post that the tags should be take from. 0 tries to get current post.

| Default | Possible Values | Example |
| --- | --- | --- |
| -1 (off) | integer | groups_post_id=5634 |

### h_level

H3, then H4 etc.. Headings with the group names

| Default | Possible Values | Example |
| --- | --- | --- |
| 3 | integer | h_level=2 |

### header_class

class for the headers

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | header_class="my-class" |

### hide_empty_content

hide empty groups

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 (off) | 0 or 1 | hide_empty_content=1 |

### hide_empty

hide tags with post count zero

| Default | Possible Values | Example |
| --- | --- | --- |
| 1 | 0 or 1 | hide_empty=0 |

### threshold

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups. Please also pay attention to the value of hide_empty.

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 | integer | hide_empty=0 |

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

### not_assigned_name

lets you choose a custom group name for not-assigned tags

| Default | Possible Values | Example |
| --- | --- | --- |
| not assigned | string | not_assigned_name="unsorted tags" |

### order

ascending or descending order; use with orderby

| Default | Possible Values | Example |
| --- | --- | --- |
| asc | string (asc or desc) | order=desc |

### orderby

by what to order the tags

use together with order

| Default | Possible Values | Example |
| --- | --- | --- |
| name | string | orderby=natural |

### prepend

prepend to the tag; placeholder: {count} for post count

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | prepend="#" |

### show_not_assigned

whether to show tags that are not assigned to any group

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 | 0 or 1 | show_not_assigned=1 |

### show_all_groups

whether to show also empty groups

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 (off) | 0 or 1 | show_all_groups=1 |

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

