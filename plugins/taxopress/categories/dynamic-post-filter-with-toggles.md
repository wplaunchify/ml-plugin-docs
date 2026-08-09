# Dynamic Post Filter With Toggles

*Category from TaxoPress documentation*

---

## Toggle Post Filter, Text Search – Shortcode Parameters

**Source:** [https://taxopress.com/docs/toggle-post-filter-text-search-shortcode-parameters/](https://taxopress.com/docs/toggle-post-filter-text-search-shortcode-parameters/)

This input field can be used for text search. This guide shows you how to use and customize the shortcode for the text search option for Toggle Post Filter in the Tag Groups plugin.

---

## Shortcode

```
if ( typeof tagGroupsSeparateTextSearch === 'undefined' ) {
  var tagGroupsSeparateTextSearch = 2;
} else {
  tagGroupsSeparateTextSearch = Math.max( 2, tagGroupsSeparateTextSearch );
}
```

---

## Example

```
if ( typeof tagGroupsSeparateTextSearch === 'undefined' ) {
  var tagGroupsSeparateTextSearch = 2;
} else {
  tagGroupsSeparateTextSearch = Math.max( 2, tagGroupsSeparateTextSearch );
}
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

This overview assumes that you know how to use shortcodes. Shortcodes are the traditional WordPress way how to add features into posts, pages and widgets.

#### placeholder

Default text of the input field

| Default | Possible Values | Example |
| --- | --- | --- |
| “Reset filter” | string | placeholder="Type here" |

#### search_trigger

1: on enter; 2: enter or timed

| Default | Possible Values | Example |
| --- | --- | --- |
| “light” | string | search_trigger=1 |

---

## Toggle Post Filter, Text Search – Gutenberg Block

**Source:** [https://taxopress.com/docs/toggle-post-filter-text-search-gutenberg-block/](https://taxopress.com/docs/toggle-post-filter-text-search-gutenberg-block/)

This guide shows you how to use and customize the shortcode for the text search feature in Toggle Post Filter in the Tag Groups plugin.

#### Placeholder for search field

Default text of the input field

#### Search Trigger

Here you can set when the search should start: When the visitors presses enter or when pausing to type.

---

## Toggle Post Filter, Reset Button – Shortcode Parameters

**Source:** [https://taxopress.com/docs/toggle-post-filter-reset-button-shortcode-parameters/](https://taxopress.com/docs/toggle-post-filter-reset-button-shortcode-parameters/)

This button resets the menu of the Toggle Post Filter.

**Note:**This shortcode is also available as Gutenberg block. You can configure the block without using any code or parameters.

---

## Shortcode

```
Reset filter
```

---

## Example

```
Reset filter
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

This overview assumes that you know how to use shortcodes. Shortcodes are the traditional WordPress way how to add features into posts, pages and widgets.

#### button_text

Text for the button

| Default | Possible Values | Example |
| --- | --- | --- |
| “Reset filter” | string | button_text="Show all" |

#### theme

Select a theme. Currently we have “dark” and “light”.

| Default | Possible Values | Example |
| --- | --- | --- |
| “light” | string | theme="dark" |

#### button_class

Optional CSS identifier for the button.

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | button_class="my-button" |

---

## Toggle Post Filter, Menu – Shortcode Parameters

**Source:** [https://taxopress.com/docs/toggle-post-filter-menu-shortcode-parameters/](https://taxopress.com/docs/toggle-post-filter-menu-shortcode-parameters/)

The Toggle Post Filter is a frontend feature in the Tag Groups plugin. Visitors can select tags and see a list of posts that match their search criteria

This guide will show you how to use a shortcode to build the menu that controls the Toggle Post Filter. The menu displays the tags and allows users to make selections.

This shortcode can only be used once on a page (including widgets), and it cannot be used together with the shortcode or block of the Dynamic Post Filter.

---

## Overview

[Click here for an overview of all shortcodes](https://taxopress.com/docs/toggle-post-filter-parameters/) for the Toggle Post Filter.

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Tags and Terms

#### hide_empty

Hide tags that are not being used in (public) posts.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 1 (on) | hide_empty=0 |

#### operator

The operator determines how selected tags and groups should be logically connected when searching for matching posts. Possible values are “IN”/”OR” (at least one tag is among the post tags), “AND” (all tags are among the post tags of the same group), “IN AND” (at least one tag from each group is among the post tags), “EXACT” (the selection of tags must be identical to the post tags of that same group, not more and not less), or a per-group definition:

```
operator="all:OPERATOR|group ID:OPERATOR|group ID:OPERATOR| ..."
```

Remarks about the per-group notation:

- You need at least one entry with the keyword “all”. The corresponding operator determines how the groups are connected.
- *OPERATOR* can be AND, OR or EXACT (upper or lower case). IN is an alias of OR.
- The order of groups doesn’t matter.
- If you use this format of the operator, all groups that you don’t specify will fall back to the operator OR.

**Note for the operator “exact”:** If you upgrade from a version before 1.39.0, go to the settings, Troubleshooting and run the maintenance.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | IN/OR | operator="IN AND"operator="all:and|1:or|5:exact|3:and" |

#### preset_tags

See the information under Preset Tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | none | preset_tags="tag-slug-1,tag-slug-2" |

#### term_orderby

Lets you determine the order of the tags (terms). You can modify the tags’ slugs or descriptions in order to achieve the required order.

| option | description |
| --- | --- |
| name | tag name |
| natural | natural sorting, e.g. “3” before “12” |
| slug | see on the Tags page |
| term_id | term ID |
| description | see on the Tags page |
| count | post count |
| term_order | A custom sort order is available with a 3rd-party plugin. |

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | name | term_orderby=natural |

#### term_order

Whether to sort the tags in ascending or descending order.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string (“asc” or “desc”, capitalization doesn’t matter) | ASC | term_order=asc |

#### taxonomy

Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of taxonomy names | Taxonomies selected in the settings under “Basics”. | taxonomy=post_tag,product_tag |

#### include_terms

Select terms (tags) that should be included. Empty means all.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (=all) | include_terms=1,5,9 |

#### exclude_terms

Select terms (tags) that should be excluded. Empty means none.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (=none) | exclude_terms=1,5,9 |

#### static_taxonomy

Optionally filter also by terms (tags, categories, …) of an additional taxonomy (not necessarily one of the taxonomies used for tag groups). That way you can narrow down the total sample of filtered posts.

Used together with static_terms.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | none | static_taxonomy=category |

#### static_terms

Used together with static_taxonomy. This parameter lists the IDs of the additional tags, categories, … that should be present in all posts used by the filter.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | none | static_terms=42,255 |

### Groups

#### accordion

Display the menu as an accordion. The accordion opens when clicking on a group label. use accordion=2 to open on mouseover (i.e. when hovering your mouse over a label).

Please note that also hidden toggle switches are effective.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 0 (off) | accordion=1 |

#### include

Tag groups that will be shown to visitors. Groups without tags will be hidden.

In the short code you use the IDs, which you find in the left column in the list of groups. Empty or not used means that all tag groups will be used.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (=all) | include=1,5,9 |

#### one_only_groups

Tag groups where visitors can select only one tag. All of these groups must of course be available in the filter.

In the short code you use the IDs, which you find in the left column in the list of groups. Please note that more tags might still be selected if this selection is carried over by the persistent filter setting from another page.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (=none) | one_only_groups=1,5,9 |

### Layout and Theme

#### layout

- **classic:** The menu items appear vertically stacked in a narrow container. Posts have space to display on the right side. If you select “classic” for the menu, also the body part with the posts should use the “classic” layout.
- **button:** Like the classic layout, but instead of toggles we use buttons. Optionally show an icon on active buttons.
- **classic_tags:** The menu is arranged like the classic layout. Tags appear in a tag shape and line up in rows (like in tag clouds).
- **wide:** Groups are lined up horizontally. Posts should display below the menu. If you select “wide”, the post layout can be any of wide, boxed, columns, columns-avoid-break and masonry.
- **wide_button:** Like the wide layout, but instead of toggles we use buttons. Optionally show an icon on active buttons.
- **wide_tags:** The menu is arranged like the wide layout. Tags appear in a tag shape and line up in rows (like in tag clouds).
- **slider_left:** The menu slides in from the left side, covering the contents of the page. The slider remains open while you click on the buttons so that you scroll through the search results while the menu remains open. Consider composing the page in a way that the slider doesn’t cover the posts. You close the menu by clicking on the X or outside the slider.
For the slider you will also need [the button to open the slider](https://taxopress.com/docs/toggle-post-filter-slider-button-shortcode-parameters/).
The default slider uses buttons with optional icons.
- **slider_left_tags:** The menu is arranged like the slider_left layout. Tags appear in a tag shape and line up in rows (like in tag clouds).
- **slider_right:** The same as the left slider, opening from the right.
- **slider_right_tags:** The menu is arranged like the slider_right layout. Tags appear in a tag shape and line up in rows (like in tag clouds).

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | classic | layout=wide |

#### icon_class

Use the [identifier (the part in lowercase letters with dashes)](https://developer.wordpress.org/resource/dashicons/#search) to place an icon on active buttons. (Not available with toggles.)

often used: dashicons-tag, dashicons-yes, dashicons-yes-alt, dashicons-heart, dashicons-arrow-left, dashicons-arrow-right, dashicons-thumbs-up

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | icon_class=dashicons-tag |

#### slider_width

Set the width of the slider menu in pixels. Only available with the slider_left_tags and the slider_right_tags menu layouts.((In the other slider layouts the width is fixed.))

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 600 | slider_width=300 |

#### tag_color

Set the background color of the tags. Only available with the classic_tags, wide_tags, slider_left_tags and the slider_right_tags menu layouts.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | 600 | tag_color="#ddd" |

#### selected_tag_color

Set the background color of the tags that are toggled on in the filter. Only available with the classic_tags, wide_tags, slider_left_tags and the slider_right_tags menu layouts.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | 600 | selected_tag_color="#d00" |

#### theme

Available are “light” and “dark”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | light | theme="dark" |

### Caching and Performance

#### caching_time

Time in minutes that results remain in the cache.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 10 | caching_time=10 |

#### persistent_filter

The Toggle Post Filter can optionally remember the selection of groups and tags so that your visitors who clicked on an article and then return to this page will see the same list of articles again. If now post has been clicked, the page will scroll to the group selection menu. (Otherwise the browser might go to a random post, depending on the loading speed.)

The data is saved in a browser cookie. If you are using this filter more than once on your site, you should use different values for div_id so that each filter uses a different cookie.

The value is the time in minutes. Zero means off.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 0 (off) | persistent_filter=30 |

#### timeout

We try to avoid search requests each time a visitor toggles a button or types a letter in the text field because the search should be launched only when the visitor is done selecting tags and typing text. We achieve this through a timeout of inactivity before the request is sent to the server. This timeout is by default 1000ms (= 1 second) and we dynamically increase it (plus up to 2 seconds) when we assume that a visitor needs more time selecting menu options. We reset this increased timeout when the posts load.

You can set here the (minimum) timeout to find a good balance between user experience (with a responsive search) and database load. Factors to be considered are the habits and needs of typical visitors, the number of visitors who simultaneously search, the size of your database (posts and tags) and the power of your database engine.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer (milliseconds) | 1000 | timeout=500 |

### Text Search

#### text_search

Enable text search and determine when the search should start.

0: off
1: launch by pressing enter
2: launch by pressing enter or pause typing

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 0 | text_search=2 |

### Labels and Messages

#### placeholder_text_search

Placeholder message for the text search field.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “type here” | placeholder_text_search="try word or -word" |

### Advanced Styling

You can set here classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_class

Define a class for the <div>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | dpf_toggle_menu_light | div_class="dpf_toggle_menu_dark" |

#### div_id

Define an ID for the enclosing <div>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | div_id="my_own" |

---

## Toggle Post Filter, Posts – Shortcode Parameters

**Source:** [https://taxopress.com/docs/toggle-post-filter-posts-body-shortcode-parameters/](https://taxopress.com/docs/toggle-post-filter-posts-body-shortcode-parameters/)

This guide shows you how to use and customize the shortcode for posts in the Toggle Post Filter feature in the Tag Groups plugin.

**Note:**This shortcode or block can only be used once on a page (including widgets), and it cannot be used together with the shortcode or block of the Dynamic Post Filter.

---

## Overview

You find [here the overview of all shortcodes](https://taxopress.com/docs/toggle-post-filter-parameters/) for the Toggle Post Filter.

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Posts

#### default_show_posts

Show a list of posts if no filter is active. This will contribute to the impression that you filter the entirety of posts by reducing their number.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 0 (=off) | default_show_posts=1 |

#### posts_per_page

How many posts appear under the filter. Use -1 to show all.

Please note that high numbers of posts may impact the performance.

Tip: If you use the parameter “display_amount” you can reduce the additional database request by using posts_per_page=-1 instead of a high number of posts.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 5 | posts_per_page=10 |

#### pager

- 0: off
- 1: Simple pager; visitors can load the next or previous page.
- 2: Pagination; visitors can click on a page number

It is also possible to use the cursor keys left and right to flip through pages.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 0 | pager=2 |

#### pager_position

- top
- bottom
- both

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | bottom | pager_position=both |

#### orderby

Which field to use for sorting the posts.

| option | notes |
| --- | --- |
| author |  |
| date |  |
| modified |  |
| rand | random order; recommended to use also a small value for caching, for example caching_time=10. Don’t disable caching if you activated paging. |
| title |  |
| comment_count |  |

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | date | orderby=title |

#### order

Whether to sort the posts in ascending or descending order. Ascending order also means from oldest to newest.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | DESC | order=asc |

#### display_amount

Whether to display how many posts were found. If the pager is off, this will be the number of displayed posts.

- 0: off
- 1: This line will appear in a separate field that you create with the messages shortcode.
- 2: The message will appear for three seconds in an overlay. If you use the messages shortcode, it will also appear there.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0, 1 or 2 | 0 | display_amount=1 |

#### template

HTML code that contains some placeholders. If you use only one template on your entire website, it is recommended to leave this parameter empty and edit the default template in the Front End settings.

In order to prevent that WordPress parses the HTML and adds malformed <p></p> tags, it is recommended to encode it before using it.

Possible placeholders are: {post_id}, {post_title}, {permalink}, {post_excerpt} (automatically generated), {post_excerpt_html} (preserves most common html tags), {post_date}, {post_author}, {image_src} or {image_src|image size}, {image_alt}, {post_category}, {post_tags}, {custom_field:<name>}

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | see below | template='JTNDZGl2JTIwY2x' |

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

#### default_image_src

Here you can insert the full URL to your own default image.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | none | default_image_src=https://www.example.com/image.jpg |

#### transition

Transition between loading the list of posts.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | none | transition=fade |

### Messages and Placeholders

#### posts_placeholder

Placeholder message for the list of posts.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “Please select a group.” | posts_placeholder="Please open the filter." |

#### message_nothing_found

Message to show if no posts were found.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “Nothing found.” | message_nothing_found="No courses available." |

#### message_load_more

Label of the link to load more posts, if the pager is active.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “Load more” | message_load_more="forward" |

#### message_go_back

Label of the link to go back, if the pager is active.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “Go back” | message_go_back="back" |

#### message_amount_singular

Message if one post was found, if display_amount is active.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “1 post found.” | message_amount_singular="One recipe found." |

#### message_amount_plural

Message if many posts were found, if display_amount is active. May contain the placeholder {count}

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “{count} posts found.” | message_amount_plural="We found {count} recipes." |

### Theme and Layout

#### theme

Available are “light” and “dark”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | light | theme="dark" |

#### layout

- **classic:** Posts appear stacked on each other in a narrow container. If you select “classic” for the posts, also the menu should display as “classic” layout.
- **wide:** Posts appear stacked on each other in a wide container.
- **boxed:** Posts appear in rows. Posts should approximately have the same size, otherwise you will see empty spaces.
- **columns:** Posts appear in 1-3 rows (depending on the screen size), each row from top to bottom.
- **columns-keep-together:** Same as “columns”, but we try to avoid splitting posts over different columns. This layout makes it clearer which parts belong to a post but it might lead to empty spaces at the bottom.
- **masonry:** Posts arrange as tiles, from top to bottom, trying to fill the slots equally. The post order may therefore change.
- **masonry-small:** Masonry with smaller items.
- **masonry-large:** Masonry with larger items.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | classis | layout=”masonry” |

---

## Advanced Styling

You can set here classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_id

Define an id for the enclosing <div>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | tag_groups_dpf_toggle_body | div_id=“something” |

#### div_class

Define a class for the enclosing <div>. You can use here a class identifier for a theme. Use the “theme” parameter for built-in themes.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | div_class=“my-theme” |

---

## Toggle Post Filter, Posts – Gutenberg Block

**Source:** [https://taxopress.com/docs/toggle-post-filter-body-gutenberg-block/](https://taxopress.com/docs/toggle-post-filter-body-gutenberg-block/)

The Toggle Post Filter is a frontend feature in the Tag Groups plugin. Visitors can select tags and see a list of posts that match their search criteria.

This guide will show you how to use the Gutenberg block that is available with Toggle Post Filter to show a list of posts.

**Note:**The Toggle Post Filter can only be used once on a page (including widgets), and it cannot be used together with the shortcode or block of the Dynamic Post Filter.

---

## Posts

#### Show all posts when no filter is activated.

Show a list of posts if all toggles are off and not text search is in use. This will contribute to a real “filter” impression. That means that you start out from the entirety of posts and use search criteria to narrow them down.

#### Posts per page

Set the maximum number of posts per page.

#### Use a pager

If the pager is enabled then visitors can load the next or previous page or click on a page number. It is also possible to use the cursor keys left and right to flip through pages.

Please note that for a random post order the posts will be randomized for each page and the same post might therefore appear on different pages.

#### Pager position

- top
- bottom
- both

#### Order posts by

Which field to use for sorting posts.

#### Sort order

Whether to sort the posts in ascending or descending order. Ascending order also means from oldest to newest.

#### Display how many posts were found

This line will appear in a separate field that you create with the messages block. The message itself can be customized in the “Labels and Messages” menu.

From version 1.28.0: You can optionally display the message in an overlay notification that remains visible for three seconds. This is particularly useful for mobile devices, because your visitors will receive a feedback of their search even if the message and posts blocks are outside of their screen (viewport). You can select this option and omit the message block to show only overlay notifications.

When you use a pager, the number will be the total amount. Otherwise it’ll be the amount of visible posts, that is maximum what you choose for **Posts per Page**.

#### Transition

Transition when loading the list of posts.

---

## Post template

The post template defines how each post is displayed. The default template shows the featured images on the left, the post title and meta on the right and the post excerpt below.

Starting from version 1.30.0, you can choose among popular templates.

Customize the template

Customize the post template how you need it. In the text area you see the HTML of the last selected post template. Please be aware that when you return to one of the preset templates, your custom changes will be lost.

Possible placeholders are: {post_id}, {post_title}, {permalink}, {post_excerpt} (automatically generated), {post_excerpt_html} (preserves most common html tags), {post_date}, {post_author}, {image_src} or {image_src|image size}, {image_alt}, {post_category}, {post_tags}, {custom_field:<name>}

Please note that the HTML will be sanitized, i.e. some tags and attributes might be removed. In that case try to use a class instead.

Image sizes

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

#### Default image source

Here you can insert the full URL to your own default image.

---

## Post Layout and Theme

#### Post layout

Layout of the **body part**, containing the posts.

- **classic:** Posts appear stacked on each other in a narrow container. If you select “classic” for the posts, also the menu should display as “classic” layout. You will also need a page layout that is wide enough to accommodate both menu and body next to each other.
- **wide:** Posts appear stacked on each other in a wide container.
- **boxed:** Posts appear in rows. Posts should approximately have the same size, otherwise you will see empty spaces.
- **columns:** Posts appear in 1-3 rows (depending on the screen size), each row from top to bottom.
- **columns (avoid splitting posts):** Same as “columns”, but we try to avoid splitting posts over different columns. This layout makes it clearer which parts belong to a post but it might lead to empty spaces at the bottom.
- **masonry:** Posts arrange as tiles, from top to bottom, trying to fill the slots equally. The post order may therefore change.
- **masonry (small):** Masonry with smaller items.
- **masonry (large):** Masonry with larger items.

#### Theme

The plugin comes with two default themes, light and dark.

---

## Labels and Messages

#### Placeholder for posts field

Placeholder message for the list of posts.

#### Message if nothing was found

Message to show if no posts were found. This will also be used for the overlay notification.

#### Link to load more posts

Label of the link to load more posts, if the pager is active.

#### Link to load previous posts

Label of the link to go back, if the pager is active.

#### Message for one post in total

Message if one post was found, if the option “Display the total amount of posts” is enabled.

#### Message for {count} posts in total

Message if many posts were found, if the option “Display the total amount of posts” is enabled. May contain the placeholder {count}

---

## Advanced Styling

You can set here classes to be referred to in CSS. You need some knowledge of CSS to create your own theme.

#### div class

Define a class for the <div>.

#### div id

Define an ID for the enclosing <div>.

---

## Toggle Post Filter, Order Menu, Gutenberg Block

**Source:** [https://taxopress.com/docs/toggle-post-filter-order-menu-gutenberg-block/](https://taxopress.com/docs/toggle-post-filter-order-menu-gutenberg-block/)

This menu allows your visitors to change the sort order of posts that are displayed in the Toggle Post Filter. It must be used together with the menu and the body (posts) part of the Toggle Post Filter.

**Note:** If you use masonry or boxed post layout, all displayed posts will be rearranged after sorting to fit best into the available space. The resulting sort order might therefore be different from what you set in the menu.

Currently you can edit the menu items only in the shortcode. This way you can sort by other values or by custom fields.

### Text before “Order by” menu

Text for the menu to select the “order by” of posts.

### Text before “Order” menu

Text for the menu to select the post order (ascending or descending).

### Theme

Select a theme. Currently we have “dark” and “light”.

### Show select menus in flat design

Whether to show a flat menu.((If this doesn’t work, check if you use a plugin that processes JS scripts such as “Autoptimize” and add “sumoselect” to the excluded files.))

### Div class

Optional CSS identifier for the enclosing div.

---

## Toggle Post Filter, Order Menu – Shortcode Parameters

**Source:** [https://taxopress.com/docs/toggle-post-filter-order-menu-shortcode-parameters/](https://taxopress.com/docs/toggle-post-filter-order-menu-shortcode-parameters/)

This menu allows your visitors to change the sort order of posts that are displayed in the Toggle Post Filter. It must be used together with the menu and the body (posts) part of the Toggle Post Filter.

**Note:** If you use masonry or boxed post layout, all displayed posts will be rearranged after sorting to fit best into the available space. The resulting sort order might therefore be different from what you set in the menu.

---

## Shortcode

```
Order by:
  
      
        date    
            
        author    
            
        title    
          

  Order:
  
      
            ↓    
                        
            ↑    
                      

      
      if (typeof jQuery !== 'undefined' && typeof SumoSelect !== 'undefined') {
        jQuery('.tg_tpf_orderby_select,.tg_tpf_order_select').SumoSelect();
      } else {
        jQuery(document).ready(function(){
          setTimeout(function(){jQuery('.tg_tpf_orderby_select,.tg_tpf_order_select').SumoSelect();}, 500);
        });
      }
    
        
  
    .SumoSelect {
      width: auto;
    }
```

---

## Example

```
Sort order
  
      
        date    
            
        author    
            
        title    
          

  Up or down
  
      
            ↓    
                        
            ↑    
                      

      
      if (typeof jQuery !== 'undefined' && typeof SumoSelect !== 'undefined') {
        jQuery('.tg_tpf_orderby_select,.tg_tpf_order_select').SumoSelect();
      } else {
        jQuery(document).ready(function(){
          setTimeout(function(){jQuery('.tg_tpf_orderby_select,.tg_tpf_order_select').SumoSelect();}, 500);
        });
      }
    
        
  
    .SumoSelect {
      width: auto;
    }
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

This overview assumes that you know how to use shortcodes. Shortcodes are the traditional WordPress way how to add features into posts, pages and widgets.

#### orderby_text

Text for the menu to select the “order by” of posts.

| Default | Possible Values | Example |
| --- | --- | --- |
| Order by | string | orderby_text="sort posts by" |

#### order_text

Text for the menu to select the post order (ascending or descending).

| Default | Possible Values | Example |
| --- | --- | --- |
| Order | string | order_text="up or down" |

#### orderby_options

Here you configure the options that appear in the “order by” menu. Options are separated by |. Each options consists of a value and a label that will be displayed in the menu, separated by :. Values must be [one of the internal orderby identifiers provided by WordPress](https://developer.wordpress.org/reference/classes/wp_query/#order-orderby-parameters) or a custom field (see below).

| Default | Possible Values | Example |
| --- | --- | --- |
| date:date|author:author|title:title | string | orderby_options="date:date|rand:random|title:title" |

If your posts have [custom fields](https://wordpress.org/support/article/custom-fields/) (post meta), you can use them as orderby value. This only works if these custom fields hold strings.

Note: If a custom field is used for sorting, only posts that have that custom field will appear in the list. If the total amount of posts differs depending on the selected sort order, you may have to add the custom field to the missing posts.

**Example:**

We use a custom field “subtitle” that will appear in the menu as “Subtitle”:

```
orderby_options="subtitle:Subtitle|relevance:relevance|title:title"
```

If the custom field saves numbers, you need to add “%num” to the field name. Otherwise the order would follow the rule for strings. (“1, 11, 2, 3” instead of “1, 2, 3, 11”.)

**Example:**

We use a custom field “view_count” that holds numeric values.

```
orderby_options="view_count%num:Views|relevance:relevance|title:title"
```

#### order_options

Here you configure the options that appear in the “order” menu. Options are separated by |. Each options consists of a value and a label that will be displayed in the menu, separated by :. Values must be “asc” and “desc”.

| Default | Possible Values | Example |
| --- | --- | --- |
| desc:↓|asc:↑ | string | order_options=desc:down|asc:up |

#### theme

Select a theme. Currently we have “dark” and “light”.

| Default | Possible Values | Example |
| --- | --- | --- |
| “light” | string | theme="dark" |

#### sumoselect

Whether to show a flat menu.((If this doesn’t work, check if you use a plugin that processes JS scripts such as “Autoptimize” and add “sumoselect” to the excluded files.))

| Default | Possible Values | Example |
| --- | --- | --- |
| 1 (on) | integer | sumoselect=0 |

#### div_class

Optional CSS identifier for the enclosing div.

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | div_class="my-class" |

---

## Toggle Post Filter, Slider Button – Gutenberg Block

**Source:** [https://taxopress.com/docs/toggle-post-filter-slider-button-gutenberg-block/](https://taxopress.com/docs/toggle-post-filter-slider-button-gutenberg-block/)

This button opens the menu of the Toggle Post Filter, if you you selected the left or right slider as menu layout. Alternatively you can also use your own button and give it the class “tg_dpf_slider_toggle_button”.

### button text

Text to appear on the button.

### theme

Select a theme. Currently we have “dark” and “light”.

### button class

Optional CSS identifier for the button. It will be added to the internal CSS class name “tg_dpf_slider_toggle_button”.

---

## Toggle Post Filter, Slider Button – Shortcode Parameters

**Source:** [https://taxopress.com/docs/toggle-post-filter-slider-button-shortcode-parameters/](https://taxopress.com/docs/toggle-post-filter-slider-button-shortcode-parameters/)

This button opens the menu of the Toggle Post Filter, if you you selected the left or right slider as menu layout. Alternatively you can also use your own button and give it the class “tg_dpf_slider_toggle_button”.

---

## Shortcode

```
Filter
```

---

## Example

```
Filter
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

This overview assumes that you know how to use shortcodes. Shortcodes are the traditional WordPress way how to add features into posts, pages and widgets.

#### button_text

Text for the button

| Default | Possible Values | Example |
| --- | --- | --- |
| “Filter” | string | button_text="Refine your search" |

#### theme

Select a theme. Currently we have “dark” and “light”.

| Default | Possible Values | Example |
| --- | --- | --- |
| “light” | string | theme="dark" |

#### button_class

Optional CSS identifier for the button. It will be added to the internal CSS class name “tg_dpf_slider_toggle_button”.

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | button_class="my-button" |

---

## Toggle Post Filter, Menu – Gutenberg Blocks

**Source:** [https://taxopress.com/docs/toggle-post-filter-gutenberg-block/](https://taxopress.com/docs/toggle-post-filter-gutenberg-block/)

The Toggle Post Filter is a frontend feature in the Tag Groups plugin. Visitors can select tags and see a list of posts that match their search criteria.

This guide will show you how to use the Gutenberg blocks that are available with the Toggle Post Filter feature.

**Note:**The Toggle Post Filter can only be used once on a page (including widgets), and it cannot be used together with the shortcode or block of the Dynamic Post Filter.

---

## Available Blocks

This feature consists of several blocks that you can place at different locations of the page, including widgets. The main part is the menu block and here you supply almost all parameters.

- [Toggle Post Filter – Menu](https://taxopress.com/docs/toggle-post-filter-gutenberg-block/) (required)
- [Toggle Post Filter – Posts](https://taxopress.com/docs/toggle-post-filter-body-gutenberg-block/) (required)
- [Toggle Post Filter – Text Search](https://taxopress.com/docs/toggle-post-filter-text-search-gutenberg-block/) (optional)
- [Toggle Post Filter – Slider Button](https://taxopress.com/docs/toggle-post-filter-slider-button-gutenberg-block/) (optional, only for the slider layouts)
- [Toggle Post Filter – Order menu](https://taxopress.com/docs/toggle-post-filter-order-menu-gutenberg-block/) (optional)
- Toggle Post Filter – Reset Button (optional)
- Toggle Post Filter – Message Field (optional)

Please make sure you don’t use the “legacy” menu block. This block is still functional but its options have been migrated to the posts block.

---

## Block Options – Menu

The following options appear in the editor side panel after you selected a block. Some of them appear only when you activated the corresponding function. For example, you can set the title of the search field only after you activated text search.

You find post-related options in the [post (body) block](https://taxopress.com/docs/toggle-post-filter-body-gutenberg-block/).

---

## Tags and Taxonomies

#### Include taxonomies

Use only tags from selected taxonomies (“tag types”). Available are only taxonomies that have been enabled in the Settings. If you leave this option empty, we use all enabled taxonomies.

#### Include tags

Restricts the tags that should be used. If you leave this option empty, we use all tags of selected groups and taxonomies.

#### Exclude tags

Restricts the tags that should be excluded.

#### Logic operator

The operator determines how selected tags and groups should be logically connected when searching for matching posts. Possible values are:

- **any tag matches** (“IN”/”OR”): At least one of the selected tags must be among the post tags for a post to be displayed.
- **all tags match** (“AND”): All selected tags across all groups must be among the post tags of the same group.
- **at least one tag matches from each group** (“IN AND”): At least one selected tag of each group must be among the post tags of the same group.
- **exact match of all selected tags** (“EXACT”): The selection of tags must be identical to the post tags of that same group, not more and not less. (Note: If you upgraded from a version before 1.39.0, go to the settings, Troubleshooting and run the maintenance.)

Groups where no tags are selected won’t be considered. If you use AND or IN AND on five groups and a visitors selects only tags from the first two groups, they may already see posts. The unused other three groups don’t count in.

If you need more precise control with different operators per group, you need to transform the block into a shortcode and then use the parameter operator.

#### Order tags by

Lets you determine the order of the tags (terms).

#### Tag order

Whether to sort the tags in ascending or descending order.

#### Hide unused tags

Hide tags that are not being used in (public) posts.

#### Preset tags

Lets you initialize the filter with a selected toggle set to on.

#### Static taxonomy

Optionally filter also by terms of an additional taxonomy (not necessarily one of the taxonomies used for tag groups). You can, for example, show only posts that belong to a particular category.

#### Static terms

See **static taxonomy** above. Here you select the terms (tags, categories).

---

## Groups

#### Include groups

Select tag groups that will be shown to visitors. By default all your groups will appear.

#### Groups where only one tag can be selected

Please note that more tags might still be selected if this selection is carried over by the persistent filter setting from another page.

---

## Text

#### Text search

Adds a text search field at the beginning of the menu. The entered word can be prepended with a minus so that it will be excluded. The logic connection with other search criteria is always AND, which means that the text search can narrow down the list of posts that was determined by the other search criteria.

Options:

- **off:** no text field appears
- **on enter:** Search begins when you press ‘enter’.
- **on enter or timed:** Search begins when you press ‘enter’ or when you pause typing.

---

## Caching and Performance

#### Caching time

Time in minutes that the selection of posts that match the search criteria should remain available for faster access on the server.

#### Remember selected filter and post (persistent filter)

The Toggle Post Filter can optionally remember the selection of groups and tags so that your visitors who clicked on an article and then return to this page will see the same list of articles again. If no post has been clicked, the page will scroll to the group selection menu.

This option requires that visitors accept cookies in their browsers. If you are using this filter more than once on your site, you should use different values for div_id so that each filter uses a different cookie.

#### Timeout before search

We try to avoid search requests each time a visitor toggles a button or types a letter in the text field because the search should be launched only when the visitor is done selecting tags and typing text. We achieve this through a timeout of inactivity before the request is sent to the server. This timeout is by default 1000ms (= 1 second) and we dynamically increase it (plus up to 2 seconds) when we assume that a visitor needs more time selecting menu options. We reset this increased timeout when the posts load.

You can set here the (minimum) timeout to find a good balance between user experience (with a responsive search) and database load. Factors to be considered are the habits and needs of typical visitors, the number of visitors who simultaneously search, the size of your database (posts and tags) and the power of your database engine.

### Labels and Messages

#### Title for text search

Title above the text search field.

#### Placeholder for search field

Placeholder message for the text search field.

---

## Layout and Theme

#### Menu layout

Layout of the **menu part**, containing the toggles.

- **classic:** The menu items appear vertically stacked in a narrow container. Posts display on the right side. If you select “classic” for the menu, also the body part with the posts should use the “classic” layout.
- **buttons:** Like the classic layout, but instead of toggles we use buttons. Optionally show an icon on active buttons.
- **classic with tags:** The menu is arranged like the “classic” layout. Tags appear in a tag shape and line up in rows (like in tag clouds).
- **wide:** Groups are lined up horizontally. Posts should display below the menu. If you select “wide”, the post layout can be any of wide, boxed, columns, columns-avoid-break and masonry.
- **wide with buttons:** Like the “wide” layout, but instead of toggles we use buttons. Optionally show an icon on active buttons.
- **wide with tags:** The menu is arranged like the wide layout. Tags appear in a tag shape and line up in rows (like in tag clouds).
- **slider left:** The menu slides in from the left side, covering the contents of the page. The slider remains open while you click on the buttons so that you scroll through the search results while the menu remains open. Consider composing the page in a way that the slider doesn’t cover the posts.
You close the menu by clicking on the X or outside the slider. For the slider you will also need the button to open the slider. The slider uses buttons with optional icons.
- **slider left with tags:** The menu is arranged like the “slider left” layout. Tags appear in a tag shape and line up in rows (like in tag clouds).
- **slider right:** The same as the left slider, opening from the right.
- **slider right with tags:** The menu is arranged like the “slider right” layout. Tags appear in a tag shape and line up in rows (like in tag clouds).

#### Icon

Place an icon on active buttons. (Not available with toggles.) Some common icons are available as buttons. For other icons you need to convert the block to a shortcode.

#### Slider width

Set the width of the slider menu in pixels. Only available with the “slider left with tags” and the “slider right with tags” menu layouts.((In the other slider layouts the width is fixed.))

#### Tag color

Set the background color of the tags. Only available with the “slider left with tags” and the “slider right with tags” menu layouts.

#### Selected tag color

Set the background color of the tags that are toggled *on* in the filter. Only available with the “classic with tags”, “wide with tags”, “slider left with tags” and the “slider right with tags” menu layouts.

#### Theme

The plugin comes with two default themes, light and dark.

#### Hide toggles in an accordion

Display each group as an accordion where toggles are hidden under the group label. If you use the option “Remember selected filter and post”, all groups that contain active toggles will be open.

Please note that also hidden toggle switches are effective.

---

## Advanced Styling

You can set here classes to be referred to in CSS. You need some knowledge of CSS to create your own theme.(

#### div_class

Define a class for the <div>.

#### div_id

Define an ID for the enclosing <div>.

---

## Toggle Post Filter – Overview

**Source:** [https://taxopress.com/docs/the-dynamic-post-filter-with-toggles/](https://taxopress.com/docs/the-dynamic-post-filter-with-toggles/)

The Toggle Post Filter is a frontend feature in the Tag Groups plugin. Visitors can select tags and see a list of posts that match their search criteria. You can use either shortcodes or Gutenberg blocks for this feature.

- [Click here to see demos of the Toggle Post Filter feature](https://demo.taxopress.com/tag-list/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/tag-list-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/tag-list-parameters/).

Here’s a screenshot of the Toggle Post Filter feature from [our demo site](https://demo.taxopress.com). This display is showing two groups of tags. Results show if the photo is linked to at least one selected tag.

---

## Instructions

To insert the Toggle Post Filter into a page, you can use either shortcodes or Gutenberg blocks. If you don’t feel comfortable with searching and configuring shortcode parameters, Gutenberg is the recommended path to follow.

For this tool you need to insert *at least two* blocks or shortcodes: One for the **filter menu** and one for the **post block** (body). Optionally you can also insert one for **messages** about how many posts were found, a pull-down menu to change the **sort order** and a **reset button**. If you use the slider layout, you also need a **button to open the slider**. Keeping these blocks separate makes it possible to freely arrange the components in your page layout.

The menu and the body parts of the vertical (“classic”) layout can be placed in columns side by side.

If groups become too long or have a different height in wide layout, try if the accordion option makes sense here.

Please make sure that you have **published posts** that use the tags that you see in the menu. If you still don’t see the posts, you may need to use the First Aid buttons in the Troubleshooting menu.

---

## Settings and Parameters

For all available options, see

- the settings of the Gutenberg block
- the list of shortcode parameters

### Common Settings

- **included taxonomies:** Most sites show default WordPress posts. If you want to show products or gallery items or other post types, you will need to select the corresponding taxonomy here: product_tag, xyz_tag
- **logic operator:** Select here how matching posts should be determined from the tags. A more fine-grained configuration per group is available in the shortcode.
- **included groups:** Narrow down the tag groups that should be used.
- **select only one tag:** It is possible to have one or more groups where visitors can select only one tag.
- **text search:** Optionally show a text search field. The search term will be connected with the other search criteria using the logic operator AND (refine the results). Search is triggered on pressing enter, optionally also after you stopped typing. Use a dash in front of the search term to exclude it (AND NOT).
- **caching:** Speed up complex searches by caching the results on your server. You can also save the selected search criteria for each visitor with the “persistent filter” option. When they click through to a post and then return to the list, they continue where they left off.
- **initially show all posts:** This option lets you show all posts when no toggle is set, rather than showing an empty box with a placeholder message. This provides a “filter” experience, rather than searching.
- **pager:** Shows arrows to load more or go back or a pagination by page numbers. Without a pager the rest of the list will be cut off. You can also set the number of posts per page.
- **total amount:** Optionally show a message about the total amount. You can use the extra block or shortcode for the message or display it in a an overlay (popup). This text can be customized for singular and plural.
- **layout:** There are several layouts for the menu part and for the post part. The menu can also be configured to hide tags in an accordion under each group. Hidden toggle switches are also effective.
- **themes:** Two out-of-the-box themes are available, light and dark. You set them with the “theme” parameter.
- **post template:** Here you can configure what every post should element look like. You can also edit the HTML for the posts in the Tag Groups settings (go to Front End, Post Filter).
- **hide toggles in an accordion:** If you use many tags in a group, the list of toggles might become very long. The accordion option lets you show only group labels and hide all toggles in “drawers”.

---

## Further Notes

- Toggles (tags) can be sorted by name, slug, ID, description or post count.
- Use include tags (terms) and exclude tags (terms) to fine-tune the available tags.
- With knowledge of CSS you can create your own themes. Toggle switches are HTML checkboxes.
- This post filter can only be used *once* on each page (including widgets), and it cannot be used together with the shortcode or block of the Dynamic Post Filter.
- If you sort posts randomly, you should disable the pager since for each page the order of all posts across all pages is randomized again.

---

## Performance

Please note that it is unavoidable that complex queries take some time to process in the database. That is particularly the case if many tags are selected in multiple groups. The search, including tags and text, makes use of default WordPress post queries, which are already optimized for use on busy websites.

There are several ways how to improve performance:

1. **Utilize server caching:** With server caching we avoid executing the full database request multiple times for identical searches. In the Gutenberg block you set the caching time under *Caching and Performance*, in the shortcode with caching_time.
2. **Optimize the database:** The speed of database queries can greatly be improved by adding an index to the postmeta table. For this solution you might need the help of your system administrator who can run SQL queries on your database. [See here for more details](https://taxopress.com/docs/how-to-improve-the-performance-of-the-toggle-post-filter-dynamic-post-filter/).
3. **Reduce redundant queries:** Visitors often want to search for a combination of tags and text and we don’t need to kick off that search until they are done making their selection. We achieved this through a timeout (by default one second) of inactivity before we send the query to the server. We dynamically increase this timeout if we notice that a visitor selects many tags or doesn’t seem to be sure which options to choose.((since version 1.40.1)) If you still see too many premature server queries you can increase the value for the timeout (in the block under *Caching and Performance*, in the shortcode use timeout).((since version 1.40.1)) Try to find a good balance between a responsive search for a good user experience and a reduction of redundant requests to the server.
4. **Optimize images:** When posts are rendered, the browser also retrieves the images from the web. In the post templates try to use only image formats as large as it makes sense. Furthermore it is recommended to optimize image files for smaller size without compromising on quality.((There are free plugins that let you do that.))

---

## Preset Tags

Sometimes it comes in handy to preset tags for new visitors arriving at that page. Visitors will see the corresponding posts and can then change the filter.

There are two ways how to preset these initial tags: in the block/shortcode and via a URL parameter. In both cases you use the tag slug, which you find for each tag on the tags page. Multiple tags can be added in a comma-separated list.

In the Gutenberg block you select the tags in “Preset tags”.

In the shortcode for the menu part you enter:

```
[tag_groups_dpf_toggle_menu preset_tags="tag-slug-1,tag-slug-2"]
```

Or you add the URL-Parameter to the URL of the page where you show the Toggle Post Filter:

```
www.example.com/page-with-dynamic-post-filter/?presettags=tag-slug-1,tag-slug-2
```

If both the block/shortcode parameter and the URL parameter are set, we will use only the latter one.

Please note that preset tags are only effective when someone visits the page **for the first time**. When later returning to this page, some browsers keep the previous selection of toggles in the cache.

In the case that you also use the persistent filter (which is by default on – disable it with persistent_filter=0), the saved filter also takes priority over the preset tags. This means that visitors who made a selection and head over to a post will see their own selection when returning, rather than the preset tags. While you are testing the page, it might therefore help to temporarily disable the persistent filter or set it to a very low value.

If you preset a tag, this tag is effective for *all* groups where it appears. It is not possible to turn on the toggle only in one group while the same tag would be off in another group.

---

## Alternatives

If you don’t want your visitors to select tags with a toggle (on-off) switch but to enter them into a tag field, you could take a look at the Dynamic Post Filter.

If you don’t need the interactivity of a filter where posts respond live to search criteria, you may want to check out the Post List.

You can also use one of the tag clouds. They are highly customizable so that you can, for example, display all tags in the same size or prepend to each the same character. With the tag clouds, however, visitors don’t see immediately the list of matching posts. Instead, a click on the tag takes them to another page, where all posts are listed that use this tag.

---

## Common Issues and Solutions

If no tags or no posts appear, please make sure that

- you have selected the correct taxonomy. If you need something else than the default post_tag, use the *taxonomy* parameter;
- you have assigned your tags to groups;
- you use these tags in *published* posts.

If that still doesn’t help, you may want to try the buttons on the Troubleshooting page (particularly if you installed the plugin on a site with existing content and the meta data has not yet been generated).

---

## Toggle Post Filter – Shortcodes Overview

**Source:** [https://taxopress.com/docs/toggle-post-filter-parameters/](https://taxopress.com/docs/toggle-post-filter-parameters/)

This guide shows you how to use and customize all the shortcodes for the Toggle Post Filter feature in the Tag Groups plugin.

---

## Shortcodes

This feature consists of several shortcodes that you can place at different locations of the page, including widgets. The main parts create the menu and the body (for the posts). [Click here for more on the menu shortcode](https://taxopress.com/docs/toggle-post-filter-menu-shortcode-parameters/) and [click here for more on the posts shortcode](https://taxopress.com/docs/toggle-post-filter-posts-body-shortcode-parameters/).

```
function tagGroupsTPFInit(){
    if ( tagGroupsTPFInitDone ) {
      return;
    }

    const options = {
      accordion: 0,
      ajaxLink: 'https://taxopress.com/wp-admin/admin-ajax.php',
      cacheKey: 'feec22e63d00be48f7b634d25ffea738',
      cachingTime: 10,
      debug: false,
      defaultShowPosts: false,
      displayAmount: 2,
      divId: 'tg_filter_box_toggle',
      groupIds: [0],
      isSlider: false,
      legacyMenu: false,
      messageAmountPl: '{count} posts found.',
      messageAmountSg: '1 post found.',
      messageGoBack: 'Go back',
      messageLoadMore: 'Load more',
      messageNothingFound: 'Nothing found.',
      operator: 'IN',
      order: 'DESC',
      orderBy: '',
      pager: 0,
      persistentFilter: 30,
      postsPerPage: 5,
      postsPlaceholder: 'Please select a tag.',
      presetTermSlugs: [],
      staticTaxonomy: '',
      staticTerms: '',
      taxonomy: 'post_tag',
      template: ``,
      textSearch: 0,
      timeout: 1000,
      transition: 'fade',
    };

    if (
      typeof TagGroupsTogglePostFilter !== 'undefined'
      && jQuery !== 'undefined'
      && (!options.accordion || typeof jQuery.ui.accordion !== 'undefined')
      && (typeof tagGroupsTPFBodyOptions !== 'undefined' &&typeof tagGroupsTPFBodyOptions.layout !== 'undefined' && !(tagGroupsTPFBodyOptions.layout === 'masonry' || tagGroupsTPFBodyOptions.layout === 'masonry-small' || tagGroupsTPFBodyOptions.layout === 'masonry-large') || typeof jQuery.fn.masonry !== 'undefined' && typeof jQuery.fn.imagesLoaded !== 'undefined')
      && (options.displayAmount < 2 || typeof jQuery.fn.jnoty !== 'undefined')
    ) {
      TagGroupsTogglePostFilter.load(options);
    } else {
      jQuery(document).ready(function(){
        setTimeout(function(){TagGroupsTogglePostFilter.load(options)}, 500);
      });
    }
    tagGroupsTPFInitDone = true;
  }

  
                  
        not assigned
        
                      
              
                WordPress Search
              
              
                
                  
                  
                
              
            
                                            
              
                WordPress Categories
              
              
                
                  
                  
                
              
            
                                            
              
                WordPress API
              
              
                
                  
                  
                
              
            
                                            
              
                WooCommerce Product Tags
              
              
                
                  
                  
                
              
            
                                            
              
                WooCommerce Product Categories
              
              
                
                  
                  
                
              
            
                                            
              
                WooCommerce
              
              
                
                  
                  
                
              
            
                                            
              
                Understanding Content
              
              
                
                  
                  
                
              
            
                                            
              
                Uncategorized category
              
              
                
                  
                  
                
              
            
                                            
              
                Terms Screen
              
              
                
                  
                  
                
              
            
                                            
              
                Terms for Current Post
              
              
                
                  
                  
                
              
            
                                            
              
                Terms Display
              
              
                
                  
                  
                
              
            
                                            
              
                Term Slugs
              
              
                
                  
                  
                
              
            
                                            
              
                Term Order
              
              
                
                  
                  
                
              
            
                                            
              
                Term Meta
              
              
                
                  
                  
                
              
            
                                            
              
                Term Description
              
              
                
                  
                  
                
              
            
                                            
              
                TaxoPress Pro
              
              
                
                  
                  
                
              
            
                                            
              
                TaxoPress
              
              
                
                  
                  
                
              
            
                                            
              
                Taxonomy Archives
              
              
                
                  
                  
                
              
            
                                            
              
                Tags
              
              
                
                  
                  
                
              
            
                                            
              
                Tag Groups
              
              
                
                  
                  
                
              
            
                                            
              
                Tag Cloud
              
              
                
                  
                  
                
              
            
                                            
              
                Synonyms
              
              
                
                  
                  
                
              
            
                                            
              
                Suggest Terms
              
              
                
                  
                  
                
              
            
                                            
              
                Simple Tags
              
              
                
                  
                  
                
              
            
                                            
              
                Schedule Auto Terms
              
              
                
                  
                  
                
              
            
                                            
              
                Rename Terms
              
              
                
                  
                  
                
              
            
                                            
              
                Remove Terms
              
              
                
                  
                  
                
              
            
                                            
              
                Related Posts
              
              
                
                  
                  
                
              
            
                                            
              
                Private Taxonomies
              
              
                
                  
                  
                
              
            
                                            
              
                Posts Screen
              
              
                
                  
                  
                
              
            
                                            
              
                Post List
              
              
                
                  
                  
                
              
            
                                            
              
                Post Filter
              
              
                
                  
                  
                
              
            
                                            
              
                Parent Categories
              
              
                
                  
                  
                
              
            
                                            
              
                OpenAI
              
              
                
                  
                  
                
              
            
                                            
              
                Open Calais
              
              
                
                  
                  
                
              
            
                                            
              
                Merge Terms
              
              
                
                  
                  
                
              
            
                                            
              
                Media Tags
              
              
                
                  
                  
                
              
            
                                            
              
                Manage Terms
              
              
                
                  
                  
                
              
            
                                            
              
                Linked Terms
              
              
                
                  
                  
                
              
            
                                            
              
                IBM Watson
              
              
                
                  
                  
                
              
            
                                            
              
                Hidden Terms
              
              
                
                  
                  
                
              
            
                                            
              
                Gutenberg
              
              
                
                  
                  
                
              
            
                                            
              
                Display
              
              
                
                  
                  
                
              
            
                                            
              
                Delete Unused Terms
              
              
                
                  
                  
                
              
            
                                            
              
                Delete Terms
              
              
                
                  
                  
                
              
            
                                            
              
                default category
              
              
                
                  
                  
                
              
            
                                            
              
                Dandelion API
              
              
                
                  
                  
                
              
            
                                            
              
                Custom URL
              
              
                
                  
                  
                
              
            
                                            
              
                Custom Taxonomies
              
              
                
                  
                  
                
              
            
                                            
              
                Current Post
              
              
                
                  
                  
                
              
            
                                            
              
                Create Terms
              
              
                
                  
                  
                
              
            
                                            
              
                Categories
              
              
                
                  
                  
                
              
            
                                            
              
                bbPress Topics
              
              
                
                  
                  
                
              
            
                                            
              
                Auto Terms
              
              
                
                  
                  
                
              
            
                                            
              
                Auto Links
              
              
                
                  
                  
                
              
            
                                            
              
                Artificial Intelligence
              
              
                
                  
                  
                
              
            
                                            
              
                Alphabetical Tag Index
              
              
                
                  
                  
                
              
            
                                            
              
                Alphabetical Tag Cloud
              
              
                
                  
                  
                
              
            
                                            
              
                Alphabetical List
              
              
                
                  
                  
                
              
            
                                            
              
                Add Terms
              
              
                
                  
                  
                
              
            
                                            
              
                Accordion Tag Cloud
              
              
                
                  
                  
                
              
            
                                        
      
          

    var tagGroupsTPFInitDone = false;

    jQuery(document).ready(function() {
        tagGroupsTPFInit();
        jQuery('.tag_groups_dpf_toggle_body').css('min-height', jQuery('#tg_filter_box_toggle').height());
    });

    window.addEventListener( 'pageshow', tagGroupsTPFInit, false );
```

```
var tagGroupsTPFBodyOptions = {
    defaultImageSrc: '',
    defaultShowPosts: false,
    displayAmount: 2,
    layout: 'classic',
    legacyBody: false,
    messageAmountPl: '{count} posts found.',
    messageAmountSg: '1 post found.',
    messageGoBack: 'Go back',
    messageLoadMore: 'Load more',
    messageNothingFound: 'Nothing found.',
    order: 'DESC',
    orderBy: '',
    pager: 0,
    pagerPosition: 'bottom',
    postsPerPage: 5,
    postsPlaceholder: 'Please select a tag.',
    template: ``,
    transition: 'fade',
  }
```

There are also optional shortcodes:

1. A field for messages that tell you how many posts were found. You can omit it and use only the notes that appear for some seconds in the top right corner.

This shortcode doesn’t have any parameters.

2. [A reset button](https://taxopress.com/docs/toggle-post-filter-reset-button-shortcode-parameters/):

```
Reset filter
```

3. [A menu to select the sort order](https://taxopress.com/docs/toggle-post-filter-order-menu-shortcode-parameters/):

```
Order by:
  
      
        date    
            
        author    
            
        title    
          

  Order:
  
      
            ↓    
                        
            ↑    
                      

      
      if (typeof jQuery !== 'undefined' && typeof SumoSelect !== 'undefined') {
        jQuery('.tg_tpf_orderby_select,.tg_tpf_order_select').SumoSelect();
      } else {
        jQuery(document).ready(function(){
          setTimeout(function(){jQuery('.tg_tpf_orderby_select,.tg_tpf_order_select').SumoSelect();}, 500);
        });
      }
    
        
  
    .SumoSelect {
      width: auto;
    }
```

4. [A button to open the slider menu](https://taxopress.com/docs/toggle-post-filter-slider-button-shortcode-parameters/):

```
Filter
```

5. [An additional text search field](https://taxopress.com/docs/toggle-post-filter-text-search-shortcode-parameters/).

```
if ( typeof tagGroupsSeparateTextSearch === 'undefined' ) {
  var tagGroupsSeparateTextSearch = 2;
} else {
  tagGroupsSeparateTextSearch = Math.max( 2, tagGroupsSeparateTextSearch );
}
```

Note: Old shortcodes with the pattern tg_dpf_toggle_… still remain functional.

---

## Example

```
Here comes the filter part:

  function tagGroupsTPFInit(){
    if ( tagGroupsTPFInitDone ) {
      return;
    }

    const options = {
      accordion: 0,
      ajaxLink: 'https://taxopress.com/wp-admin/admin-ajax.php',
      cacheKey: '69929e51aed6b7ec97492d6e7fea0299',
      cachingTime: 60,
      debug: false,
      defaultShowPosts: false,
      displayAmount: 2,
      divId: 'tg_filter_box_toggle',
      groupIds: [0],
      isSlider: false,
      legacyMenu: false,
      messageAmountPl: '{count} posts found.',
      messageAmountSg: '1 post found.',
      messageGoBack: 'Go back',
      messageLoadMore: 'Load more',
      messageNothingFound: 'Nothing found.',
      operator: 'IN AND',
      order: 'DESC',
      orderBy: '',
      pager: 1,
      persistentFilter: 60,
      postsPerPage: 5,
      postsPlaceholder: 'Please select a tag.',
      presetTermSlugs: [],
      staticTaxonomy: '',
      staticTerms: '',
      taxonomy: 'post_tag',
      template: ``,
      textSearch: 0,
      timeout: 1000,
      transition: 'fade',
    };

    if (
      typeof TagGroupsTogglePostFilter !== 'undefined'
      && jQuery !== 'undefined'
      && (!options.accordion || typeof jQuery.ui.accordion !== 'undefined')
      && (typeof tagGroupsTPFBodyOptions !== 'undefined' &&typeof tagGroupsTPFBodyOptions.layout !== 'undefined' && !(tagGroupsTPFBodyOptions.layout === 'masonry' || tagGroupsTPFBodyOptions.layout === 'masonry-small' || tagGroupsTPFBodyOptions.layout === 'masonry-large') || typeof jQuery.fn.masonry !== 'undefined' && typeof jQuery.fn.imagesLoaded !== 'undefined')
      && (options.displayAmount < 2 || typeof jQuery.fn.jnoty !== 'undefined')
    ) {
      TagGroupsTogglePostFilter.load(options);
    } else {
      jQuery(document).ready(function(){
        setTimeout(function(){TagGroupsTogglePostFilter.load(options)}, 500);
      });
    }
    tagGroupsTPFInitDone = true;
  }

  
                  
        not assigned
        
        
                      
            
                WordPress Search            
            
            
                                            
            
                WordPress Categories            
            
            
                                            
            
                WordPress API            
            
            
                                            
            
                WooCommerce Product Tags            
            
            
                                            
            
                WooCommerce Product Categories            
            
            
                                            
            
                WooCommerce            
            
            
                                            
            
                Understanding Content            
            
            
                                            
            
                Uncategorized category            
            
            
                                            
            
                Terms Screen            
            
            
                                            
            
                Terms for Current Post            
            
            
                                            
            
                Terms Display            
            
            
                                            
            
                Term Slugs            
            
            
                                            
            
                Term Order            
            
            
                                            
            
                Term Meta            
            
            
                                            
            
                Term Description            
            
            
                                            
            
                TaxoPress Pro            
            
            
                                            
            
                TaxoPress            
            
            
                                            
            
                Taxonomy Archives            
            
            
                                            
            
                Tags            
            
            
                                            
            
                Tag Groups            
            
            
                                            
            
                Tag Cloud            
            
            
                                            
            
                Synonyms            
            
            
                                            
            
                Suggest Terms            
            
            
                                            
            
                Simple Tags            
            
            
                                            
            
                Schedule Auto Terms            
            
            
                                            
            
                Rename Terms            
            
            
                                            
            
                Remove Terms            
            
            
                                            
            
                Related Posts            
            
            
                                            
            
                Private Taxonomies            
            
            
                                            
            
                Posts Screen            
            
            
                                            
            
                Post List            
            
            
                                            
            
                Post Filter            
            
            
                                            
            
                Parent Categories            
            
            
                                            
            
                OpenAI            
            
            
                                            
            
                Open Calais            
            
            
                                            
            
                Merge Terms            
            
            
                                            
            
                Media Tags            
            
            
                                            
            
                Manage Terms            
            
            
                                            
            
                Linked Terms            
            
            
                                            
            
                IBM Watson            
            
            
                                            
            
                Hidden Terms            
            
            
                                            
            
                Gutenberg            
            
            
                                            
            
                Display            
            
            
                                            
            
                Delete Unused Terms            
            
            
                                            
            
                Delete Terms            
            
            
                                            
            
                default category            
            
            
                                            
            
                Dandelion API            
            
            
                                            
            
                Custom URL            
            
            
                                            
            
                Custom Taxonomies            
            
            
                                            
            
                Current Post            
            
            
                                            
            
                Create Terms            
            
            
                                            
            
                Categories            
            
            
                                            
            
                bbPress Topics            
            
            
                                            
            
                Auto Terms            
            
            
                                            
            
                Auto Links            
            
            
                                            
            
                Artificial Intelligence            
            
            
                                            
            
                Alphabetical Tag Index            
            
            
                                            
            
                Alphabetical Tag Cloud            
            
            
                                            
            
                Alphabetical List            
            
            
                                            
            
                Add Terms            
            
            
                                            
            
                Accordion Tag Cloud            
            
            
                                          
        
      
            
  

  jQuery('.tg_group_dpf_toggle_term').on('change', function(){
      tagGroupsTPFSetTagState(this);
      return false;
    });

    function tagGroupsTPFAllTagsSetTagState() {
      jQuery('.tg_group_dpf_toggle_term').each(function(){
        tagGroupsTPFSetTagState(this);
    });
    }

  function tagGroupsTPFSetTagState(element) {
    var termId = jQuery(element).attr('data-termid');
    var groupId = jQuery(element).attr('data-groupid');
    if (jQuery(element).prop('checked')) {
        jQuery('.tag_groups_tpf_tag[data-termid="'+termId+'"][data-groupid="'+groupId+'"]').addClass('tag_groups_tpf_tag_selected');
      } else {
        jQuery('.tag_groups_tpf_tag[data-termid="'+termId+'"][data-groupid="'+groupId+'"]').removeClass('tag_groups_tpf_tag_selected');
      }
  }

  // window.addEventListener('pageshow', tagGroupsTPFAllTagsSetTagState, false); // for Firefox when returning to a page

.tag_groups_tpf_tag {
  background: #ddd;
}
.tag_groups_tpf_tag:before {
  border-color: transparent #ddd transparent transparent;
}
.tag_groups_tpf_tag_selected {
  background: #e05500;
  color: #fff;
}
.tag_groups_tpf_tag_selected:before {
  border-color: transparent #e05500 transparent transparent;
}
.tag_groups_tpf_tag_selected:after {
  -moz-box-shadow: -1px -1px 2px #333;
  -webkit-box-shadow: -1px -1px 2px #333;
  box-shadow: -1px -1px 2px #333;
}

    var tagGroupsTPFInitDone = false;

    jQuery(document).ready( tagGroupsTPFInit );

    window.addEventListener( 'pageshow', tagGroupsTPFInit, false );

How many posts we found:

  
    
    

And the posts go to a place that is sufficiently large:

  
  
  
  
  
  
  

  var tagGroupsTPFBodyOptions = {
    defaultImageSrc: '',
    defaultShowPosts: false,
    displayAmount: 2,
    layout: 'masonry',
    legacyBody: false,
    messageAmountPl: '{count} posts found.',
    messageAmountSg: '1 post found.',
    messageGoBack: 'Go back',
    messageLoadMore: 'Load more',
    messageNothingFound: 'Nothing found.',
    order: 'DESC',
    orderBy: '',
    pager: 0,
    pagerPosition: 'bottom',
    postsPerPage: 5,
    postsPlaceholder: 'Please select a tag.',
    template: ``,
    transition: 'fade',
  }
```

---

