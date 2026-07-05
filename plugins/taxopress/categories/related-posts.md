# Related Posts

*Category from TaxoPress documentation*

---

## Add CSS to Your Related Posts

**Source:** [https://taxopress.com/docs/add-css-related-posts/](https://taxopress.com/docs/add-css-related-posts/)

In TaxoPress you can [change the format of your Related Posts](https://taxopress.com/docs/change-the-format-of-related-posts/). You can also add your CSS to the display of your related posts.

Go to TaxoPress > Related Posts > Advanced and you can add your CSS to the whole div or to specific links. You can do this using the settings below:

Here is an example of adding classes to these fields:

You can then add the CSS for those classes to my theme, or to the “Customize” feature of WordPress.

In this example below, we’ve added the CSS code from above, and then [loaded Related Posts with a widget](https://taxopress.com/docs/where-to-display-related-posts/). The result is very colorful!

---

## Options for Related Posts

**Source:** [https://taxopress.com/docs/options-for-related-posts/](https://taxopress.com/docs/options-for-related-posts/)

There are detailed options that you can customize for the display or your Related Posts. You will find these options by going to TaxoPress > Related Posts.

---

## General

On the first tab called “General”, you can change key settings for each related posts display:

- Title
- Title header
- Taxonomy
- Display format

edit related posts

---

## Design

These settings allow you to customize design aspects of your display.

related posts design

---

## Layout

The Layout tab allows you to choose from several default designs for your Related Posts design.

related posts layout

---

## Options

If you click the “Options” tab, you’ll get more settings:

- **Text to display before posts list**: Text that should be displayed before the posts list.
- **Text to display after posts list**: Text that should be displayed after the posts list.
- **Limit related posts based on timeframe**: This allows you to show related posts only if they fit within a timeframe.
- **Related Posts Order**: This controls how posts are ordered when displayed to visitors.
- **Text to show when there is no related post**: You can leave this empty to hide this feature when it does not apply to a post.
- **Hide output if no related post is found?**: This will hide the whole Related Posts feature if nothing relevant can be displayed.

related posts options

---

## Change the Format of Related Posts

**Source:** [https://taxopress.com/docs/format-related-posts/](https://taxopress.com/docs/format-related-posts/)

The Related Posts feature in TaxoPress shows posts in a list format. You can modify the information shown for each post link. You can see the default format in the screenshot below:

related posts five

This format is controlled by the “Term link format” setting in TaxoPress > Related Posts > Advanced:

term link format

For example, you can change this display by adding “LINK” to the “Term link format, as in this screenshot below:

term link format changed

This next screenshot shows the result of those changes:

related posts five changed

Here is the code that TaxoPress provides by default:

```
<a href="%post_permalink%" title="%post_title% (%post_date%)">%post_title%</a>
```

Here are the items you can see inside that code:

- ```
%post_permalink%
```

 The URL of the post
- ```
%post_title%
```

 The title of the post
- ```
%post_date%
```

The date of the post (this shows inside a tooltip)

Here are other items you can choose to include:

- ```
%post_tagcount%
```

 The number of tags used by both posts
- ```
%post_comment%
```

 The number of comments on the post
- ```
%post_id%
```

 The ID of the post
- ```
%post_relatedtags%
```

 A list of tags used by both the current post and the related posts
- ```
%post_excerpt%
```

 The post excerpt
- ```
%post_content%
```

 The post content
- ```
%post_thumb_url%
```

 The URL of the post’s featured image.
- ```
%post_category%
```

 The categories attached to the posts.
- ```
%post_relatedtags%
```

 The tags attached to the posts.
- ```
%tag_description%
```

 The description of the term

---

## Where to Display Related Posts

**Source:** [https://taxopress.com/docs/where-to-display-related-posts/](https://taxopress.com/docs/where-to-display-related-posts/)

The Related Posts feature in TaxoPress provides you with several options for displaying the list of related content. You have three ways to display related posts:

1. Use the shortcode provided in TaxoPress > Related Posts.
2. Use the “Related Posts” widget.
3. Use the automatic display.

Take these steps to use the automatic display option:

- Go to TaxoPress > Related Posts.
- Edit one group of related posts.
- You will see the settings in the screenshot below.

Below the screenshot, we’ll explain what these options mean.

---

## Homepage

This option will only show the related posts on your homepage. This will be located at a URL like this:

```
https://taxopress.com/
```

---

## Blog display

This option will only show the related posts on your blog layouts. This will be located at a URL like this:

```
https://taxopress.com/blog
```

---

## Posts, Pages etc.

This option will only show the related posts on Posts, Pages, and other content types. This will be located at URLs like these:

```
https://taxopress.com/category/blog
https://taxopress.com/page
```

---

## Show Related Posts Using PHP

**Source:** [https://taxopress.com/docs/st_related_posts/](https://taxopress.com/docs/st_related_posts/)

It is possible to add the “Related Posts” output directly into your site’s PHP files.

The best approach is to use the PHP to include the shortcode inside a PHP snippet, as in this example below.

```
<?php echo do_shortcode("[taxopress_relatedposts id="1"]"); ?>
```

---

## Legacy PHP Code

There is also a legacy option allows you to make choices directly in the PHP code. This is the basic code snippet:

```
<?php st_related_posts(); ?>
```

Here are examples of how you can customize that basic code with more details:

```
'number' => 5,
'order' => 'count-desc',
'format' => 'list',
'include_page' => 'true',
'exclude_posts' => '',
'exclude_tags' => '',
'post_id' => '',
'except_wrap' => '55',
'limit_days' => '0',
'title' => __('<h4>Related posts</h4>', 'simpletags'),
'nopoststext' => __('No related posts.', 'simpletags'),
'dateformat' => $this->dateformat,
'xformat' => __('<a href="%post_permalink%" title="%post_title% (%post_date%)">%post_title%</a> (%post_comment%)', 'simpletags')
```

Here is an example of that legacy code in use. We want to show the first 10 related post without title, without pages and without comments count.

```
<?php st_related_posts('number=10&title=&include_page=false&xformat=<a href="%permalink%" title="%title% (%date%)">%title%</a>'); ?>
```

Here are all the legacy code parameters:

- number
- (integer) Number of posts to show
- order
- (string) Order posts sorting. Valid values are :
- count-desc – (default) by number of common tags (most relevance)
- count-asc – by number of common tags (less relevance)
- date-desc – by publication’s date descending
- date-asc – by publication’s date ascending
- name-asc – by title ascending
- name-desc – by title descending
- random – random
- format
- (string) show tags as non ordered list UL/LI
- flat – (Default) posts are separated with spaces
- list – posts are inside non ordered lists containing class=’related_posts’
- array -posts are inside a PHP array (use it with st_get_related_posts())
- include_page
- (boolean) “true” to add pages, “false” only for posts
- exclude_posts
- (string) Separate posts ID to exclude with commas
- exclude_tags
- (string) Separate tags ID to exclude with commas
- post_id
- (integer) Specified post ID for display related posts
- except_wrap
- (integer) Words number for excerpt.
- limit_days
- (string) Limit result with a max days
- title
- (string) Specify the positioned title before the list
- nopoststext
- (string) Specify the text to show when there is no related post
- dateformat
- (string) Specify the date format. Same format as PHP date function
- xformat
- (string) Extended links format. Available Markups :
- post_date – Replaced by the date of the post
- post_permalink – Replaced by the permalink of the link
- post_title – Replaced by the title of the post
- post_comment – Replaced by the comments count of the post
- post_tagcount – Replaced by the number of common tags
- post_id – Replaced by the ID of the post
- post_relatedtags – Replaced by common tag list
- post_excerpt – Replaced by post excerpt

---

## Introduction to Related Posts

**Source:** [https://taxopress.com/docs/introduction-to-related-posts/](https://taxopress.com/docs/introduction-to-related-posts/)

The Related Posts feature in TaxoPress allows you to show content that is related to the current post.

This feature works by checking for shared taxonomy terms. So if your post has the terms “Vegetables” and “Food”, then this feature will likely display other posts that also have the terms “Vegetables” and “Food”. The more terms that are shared, the more likely a post is to show in the “Related Posts” feature.

---

## Example of Related Posts

This screenshot below shows an example of “Related posts” area below a post:

related posts frontend

---

## Edit or Add New Related Terms

On the “Related Posts” screen, you’ll see all your displays. You can click the title or the “Edit” link to edit the settings for this existing display.

related posts screen

This feature requires the Pro version of the TaxoPress plugin

On the “Related Posts” screen in the Pro version of TaxoPress Pro, you can click “Add New” and add your own display.

---

## Editing Related Posts

Inside each display you will find a preview, and a large number of customization options, as shown in this screenshot below.

edit related posts

The following guides have more details on how you can control the appearance of this Related Posts area:

- [Where to display Related Posts](https://taxopress.com/docs/where-to-display-related-posts/)
- [Change the format of Related Posts](https://taxopress.com/docs/change-the-format-of-related-posts/)
- [Options for Related Posts](https://taxopress.com/docs/options-for-related-posts/)

---

