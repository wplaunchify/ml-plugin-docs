# Tag Clouds

*Category from TaxoPress documentation*

---

## Options for Term Displays

**Source:** [https://taxopress.com/docs/options-for-term-displays/](https://taxopress.com/docs/options-for-term-displays/)

The “Current Post” feature in TaxoPress allows you to [change the format of the tags display](https://taxopress.com/docs/format-of-tags-for-current-post/). There are also further options that you can customize.

---

## Choose Terms

The settings under this tab allow you to choose which terms will appear in your display, and how they will be sorted. You can choose from three ways to show terms:

- **Automatic**: This will rely on settings selected under the “General” tab.
- **Custom**: This will display only the specific terms entered in the “Custom terms to display” field.
- **Combined**: This will display automatic terms plus any additional custom terms.

terms display choose

---

## Options

These settings allow you to customize text aspects of your display.

options terms display

---

## Layout

The Layout tab allows you to choose from several default designs for your Terms Display design. There are 7 options available. After choosing a display, click “Save Terms Display” and you’ll see a preview of the new layout.

- Cloud
- Unordered List
- Ordered List
- WordPress Default
- Table List
- Border Cloud
- Parent / Child

choose term display layout

---

## Exceptions

The Exceptions tab allow to hide some terms from display. Enter as many terms as you want, separating each term with a comma.

exceptions terms display

## Design

These settings allow you to customize design aspects of your display. You can choose the number of terms, plus the size and color of the font.

terms display design

---

## Add CSS to Your Terms Display

**Source:** [https://taxopress.com/docs/add-css-to-terms-display/](https://taxopress.com/docs/add-css-to-terms-display/)

TaxoPress allows you to [change the format of your Terms Display](https://taxopress.com/docs/format-tag-clouds/https://taxopress.com/docs/format-tag-clouds/). You can also add your CSS to the display of terms.

Go to TaxoPress > Terms Display > Display Format, and you can add your own CSS class to the whole div or to specific links. You can do this using the settings below:

Here is an example of adding classes to these fields:

I can then add the CSS for those classes to my theme, or to the “Customize” feature of WordPress.

In the image above, I’ve added the CSS code. Then I included t[he “Terms Display” shortcode](https://taxopress.com/docs/tag-cloud-shortcode/) into a post, and the image below shows the very colorful result!

---

## Change the Format of Terms Display

**Source:** [https://taxopress.com/docs/format-tag-clouds/](https://taxopress.com/docs/format-tag-clouds/)

The “Terms Display” feature allows you to show all the terms in one taxonomy.

To manage a format of a terms display, go to TaxoPress > Terms Display > Display Format:

The format you can see in the following image is controlled by a setting in TaxoPress > Terms Display > Display Format:

terms display format

Here is the code that the Display Format area provides for you by default:

```
<a href="%tag_link%" id="tag-link-%tag_id%" class="st-tags t%tag_scale%" title="%tag_count% topics" %tag_rel% style="%tag_size% %tag_color%">%tag_name%</a>
```

Here are the items you can use inside that code:

- ```
%tag_link%
```

 – The URL of the term
- ```
%tag_description%
```

 – The term description
- ```
%tag_id%
```

 – The ID of the term
- ```
t%tag_scale%
```

 – The weighted size of the term in the display
- ```
%tag_count%
```

 – The number of times the term is used
- ```
%tag_rel%
```

 – This provides rel tag markup (it creates rel=”tag”)
- ```
%tag_size%
```

 – The font size for the term
- ```
%tag_color%
```

 – The font color for the term
- ```
%tag_name%
```

 – The name of the term
- ```
%tag_name_attribute%
```

 – The name of the term with any HTML stripped out

---

## Show the Terms Display in a Widget

**Source:** [https://taxopress.com/docs/tag-cloud-widget/](https://taxopress.com/docs/tag-cloud-widget/)

With TaxoPress, you can create a Terms Display layout and show it in a WordPress widget.

Go to Appearance > Widget and look for the “Term Display (TaxoPress Shortcode)” widget. This can be placed in any area that your theme has available.

---

## Show Terms Display Using PHP

**Source:** [https://taxopress.com/docs/st_tag_cloud/](https://taxopress.com/docs/st_tag_cloud/)

It is possible to add the Terms Display output directly into your site’s PHP files.

The best approach is to use the PHP to include the shortcode inside a PHP snippet, as in this example below.

```
<?php echo do_shortcode("[taxopress_termsdisplay id="1"]"); ?>
```

There is also a legacy option allows you to make choices directly in the PHP code. This is the basic code snippet:

```
<?php st_tag_cloud(); ?>
```

Here are examples of how you can customize that basic code with more details:

```
'size' => 'true',
'smallest' => 8,
'largest' => 22,
'unit' => 'pt',
'color' => 'true',
'maxcolor' => '#000000',
'mincolor' => '#CCCCCC',
'number' => 45,
'format' => 'flat',
'cloud_selection' => 'count-desc',
'cloud_sort' => 'random',
'exclude' => '',
'include' => '',
'limit_days' => 0,
'min_usage' => 0,
'notagstext' => __('No tags.', 'simpletags'),
'xformat' => __('<a href="%tag_link%" class="tag-link-%tag_id%" title="%tag_count% topics" %tag_rel% style="%tag_size% %tag_color%">%tag_name%</a>', 'simpletags'),
'title' => __('<h4>Tag Cloud</h4>', 'simpletags'),
'category' => 0,
'taxonomy' => 'post_tag
```

Here is an example of that legacy code in use. In this code, we display randomly the top 100 tags. The max width will be 45px and the min is 12px. The color used for max tags will be red (#FF0000) and for min tags green (#00FF0B).

```
<?php st_tag_cloud('cloud_selection=count-desc&cloud_sort=random&number=100&title=Mon nuage de tags&largest=45&smallest=12&unit=px&maxcolor=#FF0000&mincolor=#00FF0B'); ?
```

Here are all the legacy code parameters:

- size
- (boolean) Active or not dynamic font size generation
- smallest
- (integer) Length of the font to use to show the less used tags
- largest
- (integer) Length of the font to use to show the most used tags
- unit
- (string) Measuring unit of the used font for smallest and largest parameters. Use pt for point
- color
- (boolean) Active or not dynamic color generation. true/false
- maxcolor
- (string) Used color for most popular tags
- mincolor
- (string) Used color for less popular tags
- number
- (integer) Number of tags to show inside the tags cloud (Use ‘0’ to show all of them)
- format
- (string) Tag’s format of posting
- flat – (Default) Tags are separated by spaces
- list – tags are inside a non ordered list (UL) containing class=’st-tag-cloud’
- array – tags are inside a PHP array (use it with st_get_tag_cloud())
- cloud_selection
- (string) Tags selection order. Valid values are :
- count-desc – (default) by number of usage tags (most popular)
- count-asc – by number of usage tags (least used)
- name-asc – by tag name ascending
- name-desc – by tag name descending
- random – random
- cloud_sort
- (string) Tags selection order. Valid values are :
- count-desc – by number of usage tags (most popular)
- count-asc – by number of usage tags (least used)
- name-asc – by tag name ascending
- name-desc – by tag name descending
- random – (default) random
- exclude
- (string) list of tags to exclude, separated by commas (term_id). For example ‘exclude=5,27’ means all tags which contain term_id 5 or 27 will be NOT shown. By default, any tag is excluded.
- include
- (string) list of tags to include, separated by commas (term_id). For example ‘exclude=5,27’ means all tags which contain term_id 5 or 27 will be the alone tags to be shown. By default, all tags are included
- limit_days
- (integer) Number of days to be considered to generated tag cloud.
- min_usage
- (integer) Min number of tag counter for display it into tag cloud
- notagstext
- (string) Text to show, if there is no tag.
- xformat
- (string) Extended format of links. You can personalize the formating of tag’s link. Available markups :
- tag_link – Replaced by the permalink of the tag
- tag_feed – Replaced by the RSS tag link
- tag_id – Replaced by the tag ID
- tag_count – Replaced by the use number (counter) of the tag
- tag_size – Replaced by the size of the tag (creates : font-size:17pt;)
- tag_color – Replaced by the color of the tag (creates : color:#666666;)
- tag_name – Replaced by the tag’s name
- tag_name_attribute – Replaced by the tag’s name, formatted for attribute HTML
- tag_rel – Replaced by rel tag markup (creates : rel=”tag”)
- tag_scale – Replaced by tag scale (between 1 and 10)
- tag_technorati – Replaced by Technorati tag link
- tag_flickr – Replaced by Flickr tag link
- tag_delicious – Replaced by Del.ici.ous tag link
- title
- (string) Specify the positioned title shown before tags cloud
- category
- (string) Restrict tag cloud to a specific category. (or more, separated with comma)
- taxonomy
- (string) Select taxonomy to used for tag cloud

---

## Show the Terms Display with a Shortcode

**Source:** [https://taxopress.com/docs/tag-cloud-shortcode/](https://taxopress.com/docs/tag-cloud-shortcode/)

TaxoPress allows you to show a cloud or list of the terms in a taxonomy. You can show your terms using the shortcode shown on the “Terms Display” screen:

If you are using the block editor in WordPress, you can also add TaxoPress shortcodes using the “Shortcode” block. In the image below, I’ve added a shortcode block:

The image below shows the output from the block above. The cloud appears under the main text of the post:

---

## Introduction to Terms Display

**Source:** [https://taxopress.com/docs/introduction-to-tag-clouds/](https://taxopress.com/docs/introduction-to-tag-clouds/)

The Terms Display feature in TaxoPress allows you to create a customizable display of all the terms in one taxonomy. With such a terms display you can show a cloud or list of the terms used on your site. For example, you can create a “Tag Cloud” showing all your WooCommerce product categories, or you can create a list of all the tags on bbPress topics.

---

## Example of Terms Display

The image below shows an example of Terms Display. The most frequently used terms are shown in a larger, darker font and less popular terms are shown smaller and lighter.

---

## Edit or Add New Term Displays

On the “Terms Display” screen, you’ll see all your term displays. You can click the title or the “Edit” link to edit the settings for this existing display.

terms display add new

This feature requires the Pro version of the TaxoPress plugin

On the “Terms Display” screen in the Pro version of TaxoPress Pro, you can click “Add New” and add your own display.

---

## Editing Term Displays

Inside each display you will find a preview, and a large number of customization options, as shown in this screenshot below.

manage terms display

Every display can be shown in a shortcode, or inside a widget. In this example below, we have WooCommerce on the site and are showing a cloud of the most popular terms in the “Product Tags” category.

---

