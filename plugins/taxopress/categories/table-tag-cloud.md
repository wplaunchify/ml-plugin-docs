# Table Tag Cloud

*Category from TaxoPress documentation*

---

## Table Tag Cloud – Gutenberg Block

**Source:** [https://taxopress.com/docs/table-tag-cloud-gutenberg-block/](https://taxopress.com/docs/table-tag-cloud-gutenberg-block/)

The Table Tag Cloud feature is part of the Tag Groups Pro plugin. This display organizes tags in a table, with groups as headers. You can use either shortcodes or Gutenberg blocks for this feature.

This guide will show you how to use the Gutenberg block that is available with the Table Tag Cloud.

---

## Tags and Taxonomies

#### Included taxonomies

Restrict the tags only to these taxonomies (“tag types”). Available are only taxonomies that have been activated in the Tag Groups Settings.

#### Smallest font size

Font-size in pt of the smallest tags.

#### Largest font size

Font-size in pt of the largest tags.

#### Amount of tags per group

Maximum amount of tags in one cloud (per group). Pull the slider to zero to show an unlimited number.

#### Order tags by

Which field to use for sorting the tags.

Note on using “Natural Sorting”: Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags with amount, the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

Note on random order: The order only changes when all object and page caches refresh.

#### Sort order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

#### Hide unused tags

Whether to hide or show tags that are not used by any post.

#### Minimum post count for tags to appear

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups.

#### Seperator

A separator between the tags.

#### Adjust separator size to following tag

Whether to adjust the separator’s size to the size of the following tag.

#### Separator size

The size of the separator, if not automatically adjusted to the size of the following tag.

#### Prepend

Prepend to each tag name. Can obtain the placeholder {count} that will be replaced with the post count for that tag. Please note that {count} is the total number – not per selected group.

#### Append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag. Please note that {count} is the total number – not per selected group.

#### Show the post count in the tooltip

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag. Please note that the value is the total number – not per selected group.

If you enter a custom title, this option will be unavailable.

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

#### Add filter to tags for multiple groups

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups.

#### Append to the link

Append something to each tag’s link, for example a query.

#### Use tags of the following post

Display only tags that are assigned to the post (or page) with a specified ID. If you need this option, you mostly want to “use this post”. The menu offers also some recent posts by title.

---

## Groups

#### Include groups

Tag groups that will be considered in the tag cloud. In the short code you use the IDs, which you find in the left column in the list of groups. Empty or not used means that all tag groups will be used.

#### Use groups of the following post

Display only groups of which at least one assigned tag is also assigned to the selected post (or page). Matching groups will be added to the list specified by **Include groups**.

#### Label on tab for not assigned tags

The name used in the tab of not-assigned tags, if you include the group for not-assigned tags.

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### Responsive breakpoint

Width of the viewport (window) when the table should switch into responsive mode.

#### table_id

Define an ID for the enclosing <table>. Avoid identifiers that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

#### table_class

Define a class for the enclosing <table> element.

#### th_class

Define a class for the <th> elements.

#### td_class

Define a class for the <td> elements.

---

## Table Tag Cloud – Overview

**Source:** [https://taxopress.com/docs/table-tag-cloud/](https://taxopress.com/docs/table-tag-cloud/)

The Table Tag Cloud feature is available in the Tag Groups Pro plugin. This display organizes tags in a table, with groups as headers. You can use either shortcodes or Gutenberg blocks for this feature.

- [Click here to see demos of the Tag Cloud feature](https://demo.taxopress.com/table-tag-cloud/).
- [Click here for the Gutenberg block settings](https://taxopress.com/docs/table-tag-cloud-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/table-tag-cloud-parameters/).

Here’s a screenshot of the Table Tag Cloud feature from [our demo site](https://demo.taxopress.com). This example has a color scheme and we’ve added the number of results after each term.

---

## Table Tag Cloud – Shortcode Parameters

**Source:** [https://taxopress.com/docs/table-tag-cloud-parameters/](https://taxopress.com/docs/table-tag-cloud-parameters/)

This guide shows you how to use and customize the shortcode for the Table Tag Cloud feature in the Tag Groups plugin.

---

## Shortcode

```
[tag_groups_table]
```

---

## Example

```
[tag_groups_table include=3,5,6 smallest=16 largest=16]
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
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

#### orderby

Which field to use for sorting.

Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags with [amount](#amount), the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

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

#### threshold

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

#### link_target

Set the “target” attribute for the links of the tags. Possible values are: _blank, _self, _parent or _top. In the shortcode you can also set the name of a frame.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string: “_blank”, “_self”, “_parent”, “_top”, or the name of a frame | empty (= opens in the same window, same as using _self) | link_target=“_blank” |

#### link_append

Append something to each tag’s link, for example a query.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | link_append=“track=this” |

** Available only in the shortcode!

#### show_tag_count

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (show) | show_tag_count=0 |

#### custom_title

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

If you also use custom_title_plural then the text of custom_title will be used for a post count of 1 and you can use here the singular form

| Default | Possible Values | Example |
| --- | --- | --- |
| depends on show_tag_count | string | custom_title="One post uses {name}" |

#### custom_title_zero

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of 0 (i.e. they are not used with any published post).

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_zero="No post uses {name}" |

#### custom_title_plural

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of >1. You can use here plural forms.

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_plural="{count} posts use {name}" |

#### add_premium_filter

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 (no filter) | add_premium_filter=1 |

### Groups and Tabs

#### include

Tag groups that will be considered in the tag cloud. In the short code you use the IDs, which you find in the left column in the list of groups. Empty or not used means that all tag groups will be used.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | all | include=“1,5,9” |

#### exclude

groups to exclude

| Default | Possible Values | Example |
| --- | --- | --- |
| none | comma-separated list of group IDs | exclude=2,3,5 |

#### groups_post_id

Display only groups of which at least one assigned tag is also assigned to the post (or page) with the ID x. If set to 0, it will try to retrieve the current post ID. Matching groups will be added to the list specified by the parameter [include](#include)

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all groups displayed). | groups_post_id=14 |

#### hide_empty_columns

Whether to force hide columns (groups) that contain no tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | hide_empty_columns=1 |

#### show_all_groups

Whether to force showing all groups. Useful with the parameters tags_post_id and assigned_class.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | show_all_groups=1 |

** Available only in the shortcode!

#### show_not_assigned

Whether to show all not-assigned tags as an own group.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | show_not_assigned=1 |

** In the Gutenberg block this parameter is not available. Instead, add the “not assigned” group to the list of included groups.

#### not_assigned_name

The name used in the tab of not-assigned tags, if you activated show_not_assigned.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “not assigned” | not_assigned_name=“Other” |

#### group_in_class

Add class names to each tag that indicates its group ID (tg_tag_group_id_1) and group label (tg_tag_group_label_first_group).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | group_in_class=1 |

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### responsive_breakpoint

Width of the viewport (window) when the table should switch into responsive mode.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 800 | responsive_breakpoint=500 |

#### table_id

Define an ID for the enclosing <table>.

1. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | table_id=“sidebar_01” |

#### table_class

Define a class for the enclosing <table>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | tag-groups-cloud-table | table_class=“make-it-dark” |

#### th_class

Define a class for the <th>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | th_class=“change-pointer” |

#### td_class

Define a class for the <td>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | td_class=“change-pointer” |

---

