# Tabbed Tag Cloud

*Category from TaxoPress documentation*

---

## Tabbed Tag Cloud – Themes

**Source:** [https://taxopress.com/docs/tabbed-tag-cloud-themes/](https://taxopress.com/docs/tabbed-tag-cloud-themes/)

The Tabbed Tag Cloud allows you to display a tag cloud with your groups organized into tabs. The Free version of the Tag Groups plugin provides one theme called “Delta” for your tabbed layouts. You can see a preview of “Delta” in this screenshot below:

The Pro version of the Tag Groups plugin provides more themes, plus the ability to [create your own themes](https://taxopress.com/docs/creating-your-own-theme/). To choose a default theme, go to “Tag Groups” in your WordPress admin menu, then “Front End” and “Themes and Appearance”.

**Please note**: Your choice of theme will automatically apply to all the Tabbed Tag Cloud and Accordion Tag Cloud displays on your site. These themes can’t be applied to individual displays.

This next screenshot is a preview of the “Base” theme with a Tabbed Tag Cloud display:

This next screenshot is a preview of the “ui-gray” theme with a Tabbed Tag Cloud display:

This next screenshot is a preview of the “ui-lightness” theme with a Tabbed Tag Cloud display:

This next screenshot is a preview of the “ui-darkness” theme with a Tabbed Tag Cloud display:

This next screenshot is a preview of the “blitzer” theme with a Tabbed Tag Cloud display:

This next screenshot is a preview of the “aristo” theme with a Tabbed Tag Cloud display:

---

## Tabbed Tag Cloud – Shortcode Parameters

**Source:** [https://taxopress.com/docs/tabbed-tag-cloud-shortcode-parameters/](https://taxopress.com/docs/tabbed-tag-cloud-shortcode-parameters/)

This guide shows you how to use and customize the shortcode for the Tabbed Tag Cloud feature in the Tag Groups plugin.

---

## Shortcode

```
[tag_groups_cloud]
```

---

## Example

```
[tag_groups_cloud collapsible=1]
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

** Available only in the shortcode!

#### exclude_terms

Here you can specify a list of tag/term IDs that should be excluded. **exclude_terms** is ignored if you use [include_terms](#include_terms).

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (= no restriction) | exclude_terms=3,2,11 |

** Available only in the shortcode!

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
| string (“ASC” or “DESC”) | ASC | order=desc |

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

#### link_append

Append something to each tag’s link, for example a query.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | link_append=“track=this” |

** Available only in the shortcode!

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

#### show_tabs

Whether to show the tabs. This option is useful if you want to show only one group – see [include](#include).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | show_tabs=0 |

#### hide_empty_tabs

Whether to hide tabs without tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 (Not implemented for PHP function with second parameter set to ‘true’. Not effective with groups_post_id | hide_empty_tabs=1 |

#### show_all_groups

Whether to force showing all groups. Useful with the parameters [tags_post_id](#tags_post_id) and [assigned_class](#assigned_class).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | show_all_groups=1 |

** Available only in the shortcode!

#### show_not_assigned

Whether to show all not-assigned tags as an own group.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | show_not_assigned=1 |

#### not_assigned_name

The name used in the tab of not-assigned tags, if you activated [show_not_assigned](#show_not_assigned).

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “not assigned” | not_assigned_name=“Other” |

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

Whether tabs are initially expanded or collapsed. Useful in connection with the parameter [collapsible](#collapsible).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | active=1 |

#### delay

Since version 1.29.0, we reveal the tag cloud only after the tabs have finished rendering. This prevents that visitors of your site first see tags in a list (often with bullets) before the software is able to kick in. If for any reason you need to restore the previous behavior, you can turn it off here.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 1 (on) | delay=0 |

#### group_in_class

Add class names to each tag that indicates its group ID (tg_tag_group_id_1) and group label (tg_tag_group_label_first_group).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | group_in_class=1 |

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.
2. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

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

## Tabbed Tag Cloud – Gutenberg Block

**Source:** [https://taxopress.com/docs/tabbed-tag-cloud-gutenberg-block/](https://taxopress.com/docs/tabbed-tag-cloud-gutenberg-block/)

The Tabbed Tag Cloud feature allows you to display a tag cloud with your groups as tabs.

This guide will show you how to use the Gutenberg block that is available with the Tabbed Tag Cloud feature.

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

## Groups and Tabs

#### Delay the display of the tabs until they are fully rendered

By default the tabs are only revealed after they are fully rendered. That way your visitors don’t see the raw structure with all tags listed below each other before the software is able to kick in. If you use this feature in an unusual position or experience issues, you can disable it here. (available from 1.30.5)

#### Show tabs

Whether to show the tabs. This option is useful if you want to show only one group.

#### Hide empty tabs

Whether to hide tabs without tags.

#### Open tabs on mouseover

Whether tabs can be selected by hovering over with the mouse pointer (without clicking).

#### Make panels collapsible

Whether tabs are collapsible (toggle open/close).

#### Start with expanded tabs

Whether tabs are initially expanded or collapsed. Useful when you make tabs collapsible.

#### Which tab should be initially open?

(from version 1.31.0) Select a group that should be open when the tabs load.

#### Include groups

Tag groups that will be considered in the tag cloud.

#### Label on tab for not-assigned tags

The name used in the tab of not-assigned tags.

#### Use groups of the following post

Display only groups of which at least one assigned tag is also assigned to the selectd post (or page). Matching groups will be added to the list specified by **Include groups**.

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

```
<a class="..._0"> or <a class="..._1">
```

Rather than hiding tags that are not assigned to the post (or page), they can be styled differently. Tags will receive this class name with appended _1 or _0. (If you output the tags as an array, a new element with the key “assigned” will be true or false.)

#### div id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.
2. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

#### div class

Define a class for the enclosing <div>. Here you can apply some themes.

#### ul class

Define a class for the <ul> that generates the tabs with the group labels.

---

## Tabbed Tag Cloud – Overview

**Source:** [https://taxopress.com/docs/tabbed-tag-cloud/](https://taxopress.com/docs/tabbed-tag-cloud/)

The Tabbed Tag Cloud allows you to display a tag cloud with your groups as tabs. You can use the Gutenberg block or a shortcode.

- [Click here to see demos of the Tabbed Tag Cloud](https://demo.taxopress.com/tabbed-tag-cloud/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/tabbed-tag-cloud-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/tabbed-tag-cloud-shortcode-parameters/).

Here’s a screenshot of the Tabbed Tag Cloud feature from [our demo site](https://demo.taxopress.com). This example uses the “append” and “prepend” options to add style to the terms. We’re using a Unicode icon of a photo, plus the “slategray” theme.

---

