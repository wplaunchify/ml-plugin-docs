# Dynamic Post Filter

*Category from TaxoPress documentation*

---

## Dynamic Post Filter – Gutenberg Block

**Source:** [https://taxopress.com/docs/dynamic-post-filter-gutenberg-block/](https://taxopress.com/docs/dynamic-post-filter-gutenberg-block/)

The Dynamic Post Filter feature allows visitors to select groups and tags and immediately see posts that match their selection.

This guide will show you how to use the Gutenberg block that is available with the Dynamic Post Filter feature.

**Note:**This block can only be used **once** on a page (including widgets), and it cannot be used together with the shortcode or block of the Toggle Post Filter.

---

## Tags and Taxonomies

#### Include taxonomy

Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

#### Logic operator

The operator determines how selected tags and groups should be logically connected when searching for matching posts. Possible values are:

- **any tag matches** (“IN”/”OR”): At least one of the selected tags must be among the post tags for a post to be displayed.
- **all tags match** (“AND”): All selected tags across all groups must be among the post tags of the same group.
- **at least one tag matches from each group** (“IN AND”): At least one selected tag of each group must be among the post tags of the same group.
- **exact match of all selected tags** (“EXACT”): The selection of tags must be identical to the post tags of that same group, not more and not less((If you upgrade from a version before 1.39.0, go to the settings, Troubleshooting and run the maintenance.)) This option is not available for the option where you show groups only.

Groups where no tags are selected won’t be considered. If you use AND or IN AND on five groups and a visitors selects only tags from the first two groups, they may already see posts. The unused other three groups don’t count in.

If you need more precise control with different operators per group, you need to transform the block into a shortcode and then use the parameter “operator”.

---

## Groups

#### Include groups

Restrict the posts to those having tags in these groups.

#### Initially open

Tag groups that are initially open.

#### Show groups only

Skip the tag selection and display all products that match the selected groups.

#### Hide the close buttons

Disables the possibility to remove the input fields of groups. You can use that option if you want to show a fixed set of groups that cannot be altered by visitors.

---

## Posts

#### Posts per page

How many posts appear under the filter.

#### Use a pager

If the pager is enabled then visitors can load the next or previous page.

#### Caching time

Time in minutes that results remain in the cache on the server.

#### Order posts by

Which field to use for sorting.

#### Sort order

Whether to sort the posts in ascending or descending order. Ascending order also means from oldest to newest.

#### Display how many posts were found

This line will appear in a separate field that you create with the messages block. The message itself can be customized in the “Labels and Messages” menu.

From version 1.28.0: You can optionally display the message in an overlay notification that remains visible for three seconds. This is particularly useful for mobile devices, because your visitors will receive a feedback of their search even if the message and posts blocks are outside of their screen (viewport). You can select this option and omit the message block to show only overlay notifications.

When you use a pager, the number will be the total amount. Otherwise it’ll be the amount of visible posts, that is maximum what you choose for **Posts per Page**.

---

## Post template

The post template defines how each post is displayed. The default template shows the featured images on the left, the post title and meta on the right and the post excerpt below.

Starting from version 1.30.0, you can choose among popular templates.

#### Customize the template

Customize the post template how you need it. In the text area you see the HTML of the last selected post template. Please be aware that when you return to one of the preset templates, your custom changes will be lost.

Possible placeholders are: {post_id}, {post_title}, {permalink}, {post_excerpt} (automatically generated), {post_excerpt_html} (preserves most common html tags), {post_date}, {post_author}, {image_src} or {image_src|image size}, {image_alt}, {post_category}, {post_tags}, {custom_field:<name>}((A alue from the post meta <name>.

Please note that the HTML will be sanitized, i.e. some tags and attributes might be removed. In that case try to use a class instead.

#### Image sizes

The following formats are possible:

- keywords like “thumbnail”, “medium”, “large” or any custom image size((Custom sizes may be registered by your theme or another plugin.)). **This method provides the best performance when loading an image.** You can change the sizes in the general Media settings of your WordPress site and then use a plugin such as Regenerate Thumbnails to generate the new sizes.
- width and height, separated by “x”. On both sides you can use numbers (sizes in pixel), percentages or the keyword “auto”. The image loaded by the browser may actually be larger and scaled down.

Examples for the image tag:

```
<img src=”{image_src|medium}” alt=”{image_alt}” class=”tg-entry-image” />
```

```
<img src=”{image_src|100×150}” alt=”{image_alt}” class=”tg-entry-image” />
```

```
<img src=”{image_src|100%×auto}” alt=”{image_alt}” class=”tg-entry-image” />
```

#### Transition

Transition between loading the list of posts.

#### Static taxonomy

Optionally filter also by terms of an additional taxonomy (not necessarily one of the taxonomies used for tag groups). Used together with static terms.

#### Static terms

Optionally filter also by terms of an additional taxonomy (not necessarily one of the taxonomies used for tag groups). Used together with static taxonomy.

---

### Labels and Messages

#### Placeholder for tag field

Placeholder message in the tag input field. It disappears as soon as you enter tags.

#### Placeholder for posts field

Placeholder message for the list of posts.

#### Label for default option

What the pull-down menu should show if no group is selected.

#### Header above groups

Header above the list of selected groups.

#### Alert to use only existing tags

Error message if user tries to enter a tag that doesn’t exist.

#### Alert to use only tags from correct group

Error message if user tries to enter a tag from another group.

#### Message if nothing was found

Message to show if no posts were found. This will also be used for the overlay notification.

#### Link to load more posts

Label of the link to load more posts, if the pager is active.

#### Link to load previous posts

Label of the link to go back, if the pager is active.

#### Message for one post in total

Message if one post was found, if “Display the total amount of posts” is active.

#### Message for {count} posts in total

Message if many posts were found, if “Display the total amount of posts” is active. May contain the placeholder {count}

---

## Other

#### Remember selected filter and post

The Dynamic Post Filter can optionally remember the selection of groups and tags so that your visitors who clicked on an article and then return to this page will see the same list of articles again. After loading, the page will scroll to the group selection menu. (Otherwise the browser might go to a random post, depending on the loading speed.)

The data is saved in a browser cookie. If you use several Dynamic Post Filters on your site, you should give each a different div_id so that each will have its own cookie.

The value is the time in minutes. Zero means off.

---

### Advanced Styling

#### Use styling for selector.

Changes the default select menu to a more stylish one.

You can set here classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div class

Set a class for the <div>.

#### div id

Set an ID for the enclosing <div>.

---

## I Don’t See Posts In the Dynamic Post Filter

**Source:** [https://taxopress.com/docs/i-dont-see-any-or-all-posts/](https://taxopress.com/docs/i-dont-see-any-or-all-posts/)

If you click on a tag in the Dynamic Post Filter from the Tag Groups plugin and don’t see any or all posts, there can be various reasons:

1. Please make sure that these posts are published.
2. Check that the posts have the correct post type. In the Tag Groups settings you will find the submenu “Taxonomies” where you can select the taxonomy for that post type. By default we use Tags. If you have selected anything else, for example Product tags (product_tag) , you will need to use that same taxonomy again in the shortcode or Gutenberg block. This is done with the parameter taxonomy followed by the identifier of that Taxonomy, for example: taxonomy=”product_tag”
3. Sometimes it happens that the plugin was not able to process all your posts in order to update the information about tags and tag groups. You can solve that problem by going to “Tag Groups”, then “Tools”, and the “First Aid” tab. Click all the buttons.

---

## Dynamic Post Filter – Overview

**Source:** [https://taxopress.com/docs/the-dynamic-post-filter/](https://taxopress.com/docs/the-dynamic-post-filter/)

This is a feature of the Tag Groups Pro plan. The Dynamic Post Filter feature allows visitors to select groups and tags and immediately see posts that match their selection.

- [Click here for demos of the Dynamic Post Filter](https://demo.taxopress.com/post-filter-dropdown-menu/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/dynamic-post-filter-gutenberg-block/).
- [Click here for the list of shortcode parameters](https://taxopress.com/docs/dynamic-post-filter-parameters/).

This shortcode or block can only be used once on a page (including widgets), and it cannot be used together with the shortcode or block of the Toggle Post Filter.

---

## Displaying Posts Filtered by Groups and Tags

Imagine you write posts about your travels and you tag these posts with the names of the countries. Now, you may want to assemble all those country tags under a tag group called “Countries”. Using the Dynamic Group Filter, your visitors can now open the group “Countries” and then select tags of your countries. The list of posts refreshes automatically and displays all posts that match one of the selected country tags.

Example of the 2-layered Dynamic Post Filter: First select the group, then the tags.

---

## Performance

Please note that it is unavoidable that complex queries take some time to process in the database. That is particularly the case if many tags are selected in multiple groups. It is therefore highly recommended to use the parameter caching_time (in minutes) to speed up queries that have appeared recently before.

---

## Alternatives

If you don’t want your visitors to enter the tags into the tag field, but select them with a toggle (on-off) switch, you could take a look at the Toggle Post Filter.

If you don’t need the interactivity of the Dynamic Post Filter, you may want to check out the Post List.

You can also use one of the tag clouds. They are highly customizable so that you can, for example, display all tags in the same size or prepend to each the same character. Using the tag clouds, however, visitors don’t see immediately the list of matching posts. Instead, a click on the tag takes them to a “tag page”, where all posts are listed that have this tag.

---

## Common Issues and Solutions

If no tags or no posts appear, please make sure that

- you have selected the correct taxonomy. If you use something else than the default post_tag, use the *taxonomy* parameter.
- you have assigned your tags to groups and used these tags in public posts.

---

## Dynamic Post Filter – Shortcode Parameters

**Source:** [https://taxopress.com/docs/dynamic-post-filter-parameters/](https://taxopress.com/docs/dynamic-post-filter-parameters/)

This guide shows you how to use and customize the shortcode for the Dynamic Post Filter feature in the Tag Groups Pro plugin.

**Note:**This shortcode or block can only be used **once** on a page (including widgets), and it cannot be used together with the shortcode or block of the Dynamic Post Filter With Toggles.

---

## Shortcode

```
[tag_groups_dpf]
```

You can optionally display posts separated from the menu. Simply use in this shortcode separate=1 and add a second shortcode:

```
[tag_groups_dpf_body]
```

---

## Example

```
[tag_groups_dpf include=1,2,3,5 open=1,2,3,5 caching_time=60 persistent_filter=60 pager=1 display_amount=1 transition=fade]
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Tags and Terms

#### taxonomy

Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example |
| --- | --- | --- |
| comma-separated list of taxonomy names | Taxonomies selected in the settings under “Basics”. | taxonomy=post_tag,product_tag |

#### operator

The operator determines how selected tags and groups should be logically connected when searching for matching posts. Possible values are “IN”/”OR” (at least one tag is among the post tags), “AND” (all tags are among the post tags of the same group), “IN AND” (at least one tag from each group is among the post tags), “EXACT” (the selection of tags must be identical to the post tags of that same group, not more and not less; this option is not available for the option groups_only=1), or a per-group definition:

```
operator="all:OPERATOR|group ID:OPERATOR|group ID:OPERATOR| ..."
```

Remarks about the per-group notation:

- You need at least one entry with the keyword “all”. The corresponding operator determines how the groups are connected.
- *OPERATOR* can be AND, OR or EXACT (upper or lower case). IN is an alias of OR.
- The order of groups doesn’t matter.
- If you use this format of the operator, all groups that you don’t specify will fall back to the operator OR.

**Note for the operator “exact”:** If you upgrade from a version before 1.39.0, go to the settings, Troubleshooting and run the maintenance.

| accepted values | default | example |
| --- | --- | --- |
| string | IN/OR | operator="IN AND"operator="all:and|1:or|5:exact|3:and" |

### Groups

#### include

Tag groups that will be selectable by visitors. In the short code you use the IDs, which you find in the left column in the list of groups. Empty or not used means that all tag groups will be used.

| accepted values | default | example |
| --- | --- | --- |
| comma-separated list of integers | empty (=all) | include=1,5,9 |

#### open

Tag groups that are initially open. If you use include, then all selected groups must also be included. Empty or not used means that all tag groups will be open.

| accepted values | default | example |
| --- | --- | --- |
| comma-separated list of integers | empty (=all) | open=1,9 |

#### hide_close_buttons

Disables the possibility to remove the input fields of groups. You can use that option together with the include and open parameters if you want to show a fixed set of groups that cannot be altered by visitors.

| accepted values | default | example |
| --- | --- | --- |
| integer | 0 | hide_close_buttons=1 |

#### sumoselect

Changes the default select menu to a more stylish one.

| accepted values | default | example |
| --- | --- | --- |
| integer | 1 | sumoselect=0 |

#### groups_only

Skip the tag selection and display all products that match the selected groups.

| accepted values | default | example |
| --- | --- | --- |
| integer | 0 | groups_only=1 |

### Posts

#### caching_time

Time in minutes that results remain in the cache.

| accepted values | default | example |
| --- | --- | --- |
| integer | 10 | caching_time=10 |

#### posts_per_page

How many posts appear under the filter. Use -1 to show all.

Please note that high numbers of posts may impact the performance.

Tip: If you use the parameter “display_amount” you can reduce the additional database request by using posts_per_page=-1 instead of a high number of posts.

| accepted values | default | example |
| --- | --- | --- |
| integer | 5 | posts_per_page=10 |

#### pager

If the pager is enabled then visitors can load the next or previous page.

| accepted values | default | example |
| --- | --- | --- |
| integer | 0 | pager=1 |

#### orderby

Which field to use for sorting.

| option | notes |
| --- | --- |
| author |  |
| date |  |
| modified |  |
| rand | random order; recommended not to use with a pager/pagination |
| title |  |
| comment_count |  |

| accepted values | default | example |
| --- | --- | --- |
| string | date | orderby=title |

#### order

Whether to sort the posts in ascending or descending order. Ascending order also means from oldest to newest.

| accepted values | default | example |
| --- | --- | --- |
| string | DESC | order=asc |

#### display_amount

Whether to display a line that shows the total amount of posts.

| accepted values | default | example |
| --- | --- | --- |
| 0 or 1 | 0 | display_amount=1 |

#### template

HTML code that contains some placeholders. If you use only one template on your entire website, it is recommended to leave this parameter empty and edit the default template in the Front End settings.

In order to prevent that WordPress parses the HTML and adds malformed <p></p> tags, it is recommended to encode it before using it.

Possible placeholders are: {post_id}, {post_title}, {permalink}, {post_excerpt} (automatically generated), {post_excerpt_html} (preserves most common html tags), {post_date}, {post_author}, {image_src} or {image_src|image size}, {image_alt}, {post_category}, {post_tags}, {custom_field:<name>}((A value from the post meta <name>.

image_src also accepts percentages or “auto” as values. If you want to use pixels, you enter the number without any “px”

| accepted values | default | example |
| --- | --- | --- |
| string | see below | template='JTNDZGl2JTIwY2xh' |

Default template:

```
<header class="tg-entry-header">
<a href="{permalink}" rel="bookmark"><img src="{image_src|100x100}" alt="{image_alt}" class="tg-entry-image" /></a>
<h3 class="tg-entry-title"><a href="{permalink}" rel="bookmark">{post_title}</a></h3>
Posted on {post_date} by {post_author}.
<p>{post_category}</p></header>
<div class="tg-entry-content"><p>{post_excerpt}</p></div>
```

**Image sizes**

The following formats are possible:

- keywords like “thumbnail”, “medium”, “large” or any custom image size((Custom sizes may be registered by your theme or another plugin.)). **This method provides the best performance when loading an image.** You can change the sizes in the general Media settings of your WordPress site and then use a plugin such as Regenerate Thumbnails to generate the new sizes.
- width and height, separated by “x”. On both sides you can use numbers (sizes in pixel), percentages or the keyword “auto”. The image loaded by the browser may actually be larger and scaled down.

Examples for the image tag:

```
<img src=”{image_src|medium}” alt=”{image_alt}” class=”tg-entry-image” />
```

```
<img src=”{image_src|100×150}” alt=”{image_alt}” class=”tg-entry-image” />
```

```
<img src=”{image_src|100%×auto}” alt=”{image_alt}” class=”tg-entry-image” />
```

#### transition

Transition between loading the list of posts.

| accepted values | default | example |
| --- | --- | --- |
| string | none | transition=fade |

#### static_taxonomy

Optionally filter also by terms of an additional taxonomy (not necessarily one of the taxonomies used for tag groups). Used together with [static_terms](#static_terms).

| accepted values | default | example |
| --- | --- | --- |
| string | none | static_taxonomy=category |

#### static_terms

Optionally filter also by terms of an additional taxonomy (not necessarily one of the taxonomies used for tag groups). Used together with [static_taxonomy](#static_taxonomy).

| accepted values | default | example |
| --- | --- | --- |
| comma-separated list of integers | none | static_terms=42,255 |

---

## Other

#### persistent_filter

The Dynamic Post Filter can optionally remember the selection of groups and tags so that your visitors who clicked on an article and then return to this page will see the same list of articles again. After loading, the page will scroll to the group selection menu. (Otherwise the browser might go to a random post, depending on the loading speed.)

The data is saved in a browser cookie. If you use several Dynamic Post Filters on your site, you should give each a different div_id so that each will have its own cookie.

The value is the time in minutes. Zero means off.

| accepted values | default | example |
| --- | --- | --- |
| integer | 0 (off) | persistent_filter=30 |

---

## Labels and Messages

#### placeholder

Placeholder message in the tag input field. It disappears as soon as you enter tags.

| accepted values | default | example |
| --- | --- | --- |
| string | “Please enter your tags here.” | placeholder="" |

#### posts_placeholder

Placeholder message for the list of posts.

| accepted values | default | example |
| --- | --- | --- |
| string | “Please select a group.” | posts_placeholder="" |

#### default_option_label

What the pull-down menu should show if no group is selected.

| accepted values | default | example |
| --- | --- | --- |
| string | “Filter by group” | default_option_label="" |

#### groups_header

Header above the list of selected groups.

| accepted values | default | example |
| --- | --- | --- |
| string | “Selected groups:” | groups_header="" |

#### message_only_existing

Error message if user tries to enter a tag that doesn’t exist.

| accepted values | default | example |
| --- | --- | --- |
| string | 0 | message_only_existing="" |

#### message_same_group

Error message if user tries to enter a tag from another group.

| accepted values | default | example |
| --- | --- | --- |
| string | 0 | message_same_group="" |

#### message_nothing_found

Message to show if no posts were found.

| accepted values | default | example |
| --- | --- | --- |
| string | “Nothing found.” | message_nothing_found="" |

#### message_load_more

Label of the link to load more posts, if the pager is active.

| accepted values | default | example |
| --- | --- | --- |
| string | “Load more” | message_load_more="" |

#### message_go_back

Label of the link to go back, if the pager is active.

| accepted values | default | example |
| --- | --- | --- |
| string | “Go back” | message_go_back="" |

#### message_amount_singular

Message if one post was found, if display_amount is active.

| accepted values | default | example |
| --- | --- | --- |
| string | “1 post found.” | message_amount_singular="One recipe found." |

#### message_amount_plural

Message if many posts were found, if display_amount is active. May contain the placeholder {count}

| accepted values | default | example |
| --- | --- | --- |
| string | “{count} posts found.” | message_amount_plural="We found {count} recipes." |

---

## Advanced Styling

You can set here classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_class

Define a class for the <div>.

| accepted values | default | example |
| --- | --- | --- |
| string | empty | div_class="change-pointer" |

#### div_id

Define an ID for the enclosing <div>.

| accepted values | default | example |
| --- | --- | --- |
| string |  | div_id="my_id" |

---

