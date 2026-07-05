# Tags For Current Post

*Category from TaxoPress documentation*

---

## Add CSS to Terms for Current Post

**Source:** [https://taxopress.com/docs/css-terms-for-current-post/](https://taxopress.com/docs/css-terms-for-current-post/)

In TaxoPress you can [change the format of your Terms for Current Post display](https://taxopress.com/docs/format-tag-clouds/). You can also add your CSS to the display of terms.

Go to TaxoPress > Current Post > Advanced and you can add your CSS to the whole div or to specific links. You can do this using the settings below:

Here is an example of adding classes to these two fields:

I can then add the CSS for those classes to my theme, or to the “Customize” feature of WordPress.

---

## Options for Terms for Current Post

**Source:** [https://taxopress.com/docs/options-for-tags-for-current-post/](https://taxopress.com/docs/options-for-tags-for-current-post/)

The “Current Post” feature in TaxoPress allows you to [change the format of the tags display](https://taxopress.com/docs/format-of-tags-for-current-post/). There are also further options that you can customize.

---

## Choose Terms

The settings under this tab allow you to choose which terms will appear in your display, and how they will be sorted.

The “Method for choosing terms for display” option has an integration with the [Term Order](https://taxopress.com/docs/taxonomies-order/) feature in TaxoPress Pro.

This feature requires the Pro version of the TaxoPress plugin

choose terms current

---

## Layout

The Layout tab allows you to choose from several default designs for your Current Post display.

default displays current

---

## Design

These settings allow you to customize design aspects of your display.

current post design

---

## Options

These settings allow you to customize text aspects of your display.

- **Post term separator string**: This will separate each term that is displayed.
- **Text to display before terms list**: This will appear before all the terms.
- **Text to display after terms list**: This will appear after all the terms.
- **Text to display if no terms found**: This will appear if no terms are available.
- **Hide display output if no terms?**: This will hide the whole “Terms for Current Post” feature if not terms are attached to this post.

current post options

---

## Change the Format of Terms for Current Post

**Source:** [https://taxopress.com/docs/format-terms-current-post/](https://taxopress.com/docs/format-terms-current-post/)

The “Terms for Current Post” feature in TaxoPress shows all the terms for the post you’re viewing. You can see an example in the screenshot below:

This format is controlled by a setting in TaxoPress > Terms for Current Post:

Here is the code that TaxoPress provides by default:

```
<a href="%tag_link%" title="%tag_name%" %tag_rel%>%tag_name%</a>
```

Here are the items you can see inside that code:

- ```
%tag_link%
```

 – The URL of the tag
- ```
%tag_name%
```

 – The name of the tag
- ```
%tag_rel%
```

– This provides rel tag markup (it creates 
```
rel="tag"
```

)

Here are more items you can add to change the format:

- ```
%tag_feed%
```

 – Replaced by the RSS tag link
- ```
%tag_id%
```

 – Replaced by the tag ID
- ```
%tag_description%
```

 – The description of the term
- ```
%tag_name_attribute%
```

 – Replaced by the tag’s name, formatted for attribute HTML

You can also add HTML elements to this formatting. For example, this image below shows the HTML required to make a list with strong text:

The settings you saw in the image above will produce the following output:

---

## Automatically Display Terms for Current Post

**Source:** [https://taxopress.com/docs/display-tags-for-current-post/](https://taxopress.com/docs/display-tags-for-current-post/)

The “Current Post” feature in TaxoPress provides you with several options for displaying the list of tags for a specific post:

1. With the “Terms for Current Post” shortcode.
2. With the “Terms for Current Post” widget.
3. TaxoPress can try and automatically add the terms to your content.

This guide focuses on option #3 and how you can automatically insert terms in your posts:

- Go to TaxoPress > Current Post.
- Click “Display” to edit a display listed on this screen.
- You will see the settings as shown in the screenshot below.

display current post

In this guide, I’ll explain what these options mean. Please note: not all themes will automatically support all these options.

---

## Homepage

This option will only show the tags on your homepage. This will be located at a URL like this:

```
https://taxopress.com/
```

---

## Blog display

This option will only show the tags on your blog layouts. This will be located at URLs like these:

```
https://taxopress.com/blog
```

---

## Post, Pages etc

This option will only show the tags on single items for your post type. TaxoPress will attempt to automatically display terms in this content. It may not be successful for all post types and layouts. The term display will be located at URLs like these:

```
https://taxopress.com/category/my-blog-post
https://taxopress.com/my-page
https://taxopress.com/my-woocommerce-product
```

---

---

## Show Current Post Terms With PHP

**Source:** [https://taxopress.com/docs/st_the_tags/](https://taxopress.com/docs/st_the_tags/)

It is possible to add the “Terms for Current Post” output directly into your site’s PHP files.

---

## Using the Shortcode in PHP

The best approach is to use the PHP to include the shortcode inside a PHP snippet, as in this example below.

```
<?php echo do_shortcode("[taxopress_postterms id="1"]"); ?>
```

---

## Using the Legacy PHP Code

There is also a legacy option allows you to make choices directly in the PHP code. This feature extends WordPress built-in function “the_tags()”. This is the basic code snippet.

```
<?php st_the_tags(); ?>
```

Here are examples of how you can customize that basic code with more details:

```
'before' => __('Tags: ', 'simpletags'),
'separator' => ', ',
'after' => '<br />',
'post_id' => '',
'xformat' => __('<a href="%tag_link%" title="%tag_name%" %tag_rel%>%tag_name%</a>', 'simpletags'),
'notagtext' => __('No tag for this post.', 'simpletags'),
'number' => 0
```

Here are all the legacy code parameters:

- before
- (string) Text to display before the actual tags are displayed. Defaults to Tags:
- separator
- (string) Text or character to display between each tag link. The default is a comma (,) between each tag.
- after
- (string) Text to display after the last tag. The default is to display nothing.
- post_id
- (integer) Specified post ID for display tag posts (outside loop by example)
- xformat
- (string) Extended format of links. You can personalize the formatting of tag’s link. Available markups :
- tag_link – Replaced by the permalink of the tag
- tag_feed – Replaced by the RSS tag link
- tag_id – Replaced by the tag ID
- tag_name – Replaced by the tag’s name
- tag_name_attribute – Replaced by the tag’s name, formatted for attribute HTML
- tag_rel – Replaced by rel tag markup (creates : rel=”tag”)
- tag_technorati – Replaced by Technorati tag link
- tag_flickr – Replaced by Flickr tag link
- tag_delicious – Replaced by Del.ici.ous tag link
- notagtext
- (string) Text to show, if there is no tag.
- number
- (integer) Limit tags output with this max number

---

## Introduction to Terms for Current Post

**Source:** [https://taxopress.com/docs/introduction-to-tags-for-current-post/](https://taxopress.com/docs/introduction-to-tags-for-current-post/)

The “Current Post” feature in TaxoPress allows you to customize the displays of terms for single posts.

You access this feature in your WordPress dashboard by going to TaxoPress > Current Post.

---

## Example of Terms for Current Post

The image below shows an example of Terms for Current Post. This display is separate from any default display of terms in your theme. The image below shows the terms created by the TaxoPress “Current Post” feature on a post.

---

## Edit or Add New Terms for Current Post

On the “Current Post” screen, you’ll see all your displays. You can click the title or the “Edit” link to edit the settings for this existing display.

terms current post

This feature requires the Pro version of the TaxoPress plugin

On the “Current Post” screen in the Pro version of TaxoPress Pro, you can click “Add New” and add your own display.

---

## Editing Terms for Curent Post

Inside each display you will find a preview, and a large number of customization options, as shown in this screenshot below.

manage terms current post

The following guides have more details on how you can control the appearance of this feature:

- [Where to display the Terms for Current Post](https://taxopress.com/docs/display-tags-for-current-post/)
- [Change the format of Terms for Current Post](https://taxopress.com/docs/format-of-tags-for-current-post/)
- [Options for Terms for Current Post](https://taxopress.com/docs/options-for-tags-for-current-post/)

---

