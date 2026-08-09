# Post List

*Category from TaxoPress documentation*

---

## Post List – Gutenberg Block

**Source:** [https://taxopress.com/docs/post-list-gutenberg-block/](https://taxopress.com/docs/post-list-gutenberg-block/)

This is a guide to using “Post List” block in the Tag Groups Pro plugin. The following options appear in the editor side panel after you select the block:

---

## Tags and Taxonomies

- **Include taxonomy**: Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.
- **Logic operator**: How the tags should be logically connected. Possible values are “IN” (At least one tag matches.), “AND” (All tags match.) and “IN AND” (At least one tag from each group matches).

---

## Groups

- **Include groups**: Restrict the posts to those having tags in these groups.

---

## Posts

- **Posts per page**: How many posts appear under the filter. Use -1 to show all. Please note that high numbers of posts may impact the performance.
- **Use a pager**: If the pager is enabled then visitors can load the next or previous page or click on a page number. It is also possible to use the cursor keys left and right to flip through pages. Please note that for a random post order the posts will be randomized for each page and the same post might therefore appear on different pages.
- **Pager position**: top, bottom, both
- **Caching time**: Time in minutes that results remain in the cache on the server.
- **Order posts by**: Which field to use for sorting.
- **Sort order**: Whether to sort the posts in ascending or descending order. Ascending order also means from oldest to newest.
- **Display the total amount of posts**: Whether to display a line that shows the total amount of posts. This message appears only if the number is greater than zero.

---

## Post Template

The post template defines how each post is displayed. The default template shows the featured images on the left, the post title and meta on the right and the post excerpt below.

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

#### Default image src

Here you can enter the path to an image that will be used as default, if the post doesn’t have a featured image. Leave empty to use the plugin’s default.

---

## Labels and Messages

- **Message if nothing was found**: Message to show if no posts were found.
- **Link to load more posts**: Label of the link to load more posts, if the pager is active.
- **Link to load previous posts**: Label of the link to go back, if the pager is active.
- **Message for one post in total**: Message if one post was found, if “Display the total amount of posts” is active.
- **Message for {count} posts in total**: Message if many posts were found, if “Display the total amount of posts” is active. May contain the placeholder {count}

---

## Advanced Styling

You can set here classes to be referred to in CSS. You need some knowledge of CSS to use these options.

- **div**id: Define an ID for the <div>.
- **div class**: Define a class for the <div>.
- **article class**: Define a class for the enclosing <article>.

---

## Post List – Overview

**Source:** [https://taxopress.com/docs/the-post-list/](https://taxopress.com/docs/the-post-list/)

The Post List feature in the Tag Groups plugin allows you to show a list of posts with a specific term or in a particular tag group. The list is static and cannot be changed by visitors. There are optional links to the next or previous page.

- [Click here to see demos of the Post List feature](https://demo.taxopress.com/post-list/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/post-list-gutenberg-block/).
- [Click here for the list of shortcode parameters](https://taxopress.com/docs/post-list-parameters/).

Here’s a screenshot of the Post List feature from [our demo site](https://demo.taxopress.com). This example shows posts with a featured image and the publish date.

---

## Post List – Shortcode Parameters

**Source:** [https://taxopress.com/docs/post-list-parameters/](https://taxopress.com/docs/post-list-parameters/)

This is a guide to using shortcodes to display the “[Post List](https://taxopress.com/docs/the-post-list/)” feature in the Tag Groups Pro plugin.

---

## Shortcode

```
What's New at TaxoPress to Start 2026?
  Posted on January 18, 2026 by steveburgerv.  Releases
 
 
  TaxoPress 3.44 is available now. The Free version is available from the WordPress plugin directory and TaxoPress members can download the Pro version from this website. The big new feature to start 2026 involves the "Auto Terms" feature. Auto Terms is popular because it can automatically add relevant terms to your posts. For example, if...
 

        
                    
            
 
  Use TaxoPress to Customize the Order of Tags and Categories
  Posted on October 3, 2025 by steveburgerv.  Releases
 
 
  TaxoPress 3.37 is available now. The Free version is available from the WordPress plugin directory and TaxoPress members can download the Pro version from this website. There is one major new feature, but several helpful improvements in this release. Let me introduce you to the big new feature which allows to choose any order you...
 

        
                    
            
 
  How to Copy WordPress Tags and Categories
  Posted on September 3, 2025 by steveburgerv.  Tutorials
 
 
  WordPress does not have the ability to copy Tags and Categories. However, that is possible with the TaxoPress plugin. In this guide, I'll show you a basic and and advanced way to copy terms. Basic copying of Tags and Categories After installing the TaxoPress plugin, go to the "Terms" screen. You can click the "Copy"...
 

        
                    
            
 
  What's new at TaxoPress in June?
  Posted on June 3, 2025 by steveburgerv.  Releases
 
 
  TaxoPress 3.36 is available now. The Free version is available from the WordPress plugin directory and TaxoPress members can download the Pro version from this website. There are several helpful improvements in this release. All of these features were suggested by TaxoPress users like you. The main feature in this release is live previews of...
 

        
                    
            
 
  TaxoPress Cleans Up Your Rarely-Used Tags and Categories
  Posted on April 9, 2025 by steveburgerv.  Releases
 
 
  TaxoPress 3.33 is available now. The Free version is available from the WordPress plugin directory and TaxoPress members can download the Pro version from this website. The major new feature in this release is called “Hidden Terms". This will clean up terms that are infrequently used. This feature removes low-value terms that are not attached...
```

---

## Example

```
Nothing found.
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

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of taxonomy names | Taxonomies selected in the settings under “Basics”. | taxonomy=post_tag,product_tag |

#### operator

How the tags should be logically connected. Possible values are “OR” (At least one group matches.) or “AND” (All groups match.).

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | OR | operator="AND" |

### Tag Groups

#### include

Tag groups that will be selectable by visitors. In the short code you use the IDs, which you find in the left column in the list of groups. Empty or not used means that all tag groups will be used.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (=all) | include=1,5,9 |

### Posts

#### author

Filter by author.

| accepted values | default | example shortcode |
| --- | --- | --- |
| author ID or comma-separated list of IDs | off | author=1,3 |

#### cat

Filter by category.

| accepted values | default | example shortcode |
| --- | --- | --- |
| category ID | off | cat=5 |

#### caching_time

Time in minutes that results remain in the cache.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 10 | caching_time=10 |

#### posts_per_page

How many posts appear under the filter. Use -1 to show all.

Please note that high numbers of posts may impact the performance.

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

Which field to use for sorting.

| option | description |
| --- | --- |
| author |  |
| date |  |
| modified |  |
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

Whether to display a line that shows the total amount of posts. This message appears only if the number is greater than zero.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | display_amount=1 |

#### search

Filter by a search term

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | search=hello |

#### tag

Filter by a tag slug.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | tag=my-tag |

#### tag__and

Filter by a list of tag IDs. Combine them with “and”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of tag IDs | empty | tag__and=12,45 |

#### tag__in

Filter by a list of tag IDs. Combine them with “or”. (“in” a set of tags)

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of tag IDs | empty | tag__in=12,45 |

#### tag__not_in

Filter by a list of tag IDs. Combine them with “nor”. (“not in” a set of tags)

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of tag IDs | empty | tag__not_in=12,45 |

#### tag_id

Filter by a tag ID.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | empty | tag_id=10 |

#### tag_slug__and

Filter by a list of tag slugs. Combine them with “and”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of tag slugs | empty | tag_slug__and=my-tag,your-tag |

#### tag_slug__in

Filter by a list of tag slugs. Combine them with “or”. (“in” a set of tags)

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of tag slugs | empty | tag_slug__in=my-tag,your-tag |

#### template

HTML code that contains some placeholders. If you use only one template on your entire website, it is recommended to leave this parameter empty and edit the default template in the Front End settings.

In order to prevent that WordPress parses the HTML and adds malformed <p></p> tags, it is recommended to encode it before using it.

Possible placeholders are: {post_id}, {post_title}, {post_guid} (link to the post, {post_excerpt} (automatically generated), {post_date}, {post_author}, {image_src} or {image_src|image size} (followed by the dimensions – will create also width and height attributes), {image_alt}, {post_category}, {post_tags}, {custom_field:<name>}

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | see below | template='JTNDZGl2JTIwY2x' |

Default template:

```
<header class="tg-entry-header">
<img src="{image_src|100x100}" alt="{image_alt}" class="tg-entry-image" />
<h3 class="tg-entry-title"><a href="{post_guid}" rel="bookmark">{post_title}</a></h3>
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

### Labels and Messages

#### message_nothing_found

Message to show if no posts were found.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “Nothing found.” | message_nothing_found="" |

#### message_load_more

Label of the link to load more posts, if the pager is active.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “Load more” | message_load_more="" |

#### message_go_back

Label of the link to go back, if the pager is active.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “Go back” | message_go_back="" |

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

---

## Advanced Styling

You can set here classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_class

Define a class for the <div>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | div_class=“change-pointer” |

#### article_class

Define a class for the enclosing <article>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | tg-post | article_class=“make-it-dark” |

---

