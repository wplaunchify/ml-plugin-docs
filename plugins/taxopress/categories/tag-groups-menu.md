# Tag Groups Menu

*Category from TaxoPress documentation*

---

## Tag Groups Menu – Overview

**Source:** [https://taxopress.com/docs/tag-groups-menu/](https://taxopress.com/docs/tag-groups-menu/)

The Tag Groups Pro plugin gives you the possibility to filter posts by tag group. The filter is applied by adding a parameter to the URL where you list posts. [You can read more about it here](https://taxopress.com/docs/using-the-post-filter-on-the-front-end/).

Since you don’t want to let your visitors have to modify the URL manually, you can use the URL with that parameter in a menu, a button and so on.

Instead of creating that menu yourself, you can use a shortcode that will display a drop-down menu. Visitors select a group and are then redirected to the list of posts that is filtered by the selected tag group.

Please note that this page where you list your posts must be set in your WordPress Settings under “Reading”. By default it is your front page. If you, however, use a static page as front page, you need to choose another page for your posts.

The default format for this shortcode is:

```
not assigned
```

Parameters allow you to

- show or hide a submit button. If it is hidden, the filtering is triggered by selecting an option from the menu;
- set a taxonomy (such as product_tag);
- search among WooCommerce products; and
- give a custom URL where posts will be listed.

---

## Tag Groups Menu – Shortcode Parameters

**Source:** [https://taxopress.com/docs/tag-groups-menu-parameters/](https://taxopress.com/docs/tag-groups-menu-parameters/)

This guide shows you how to use and customize the shortcode for the Tag Groups Menu feature in the Tag Groups plugin.

---

## Shortcode

```
not assigned
```

---

## Example

```
not assigned
jQuery(document).ready(function(){
  jQuery("#tag-groups-menu-6a781c3da4156 select").on( "change", function(){
    var a = jQuery("#tag-groups-menu-6a781c3da4156_form").submit();
  });
});
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Tags or Terms

#### include

Determines which groups to include.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of group IDs | empty (all enabled) | include=1,5 |

#### taxonomy

Determines the post page where the posts will be filtered. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example shortcode |
| --- | --- | --- |
| one taxonomy name | post_tag | taxonomy=product_tag |

### Menu

#### type

The type of menu.

- “select”: Drop-down menu with a submit button. The posts will only be displayed when the user clicks on the button.
- “autoselect”: Drop-down menu without a button. The posts will be displayed as soon as the user selects an option.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | select | type=select |

### 

### Target Page

#### custom_url

Optional custom URL where you want to display the posts.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | none | custom_url='https://www.example.com/posts/' |

#### shop

If you supply this parameter, then the search will happen on the default product page. This page is determined according to the e-commerce plugin. Currently there is only “wc”, which stands for “WooCommerce”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | shop=wc |

### Labels and Messages

#### submit_label

Text on the submit button, if you use one.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “search” | submit_label="submit" |

#### not_assigned_name

Label of the button for the “not assigned” group.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “not assigned” | not_assigned_name="all the rest" |

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_id

Define an ID for the enclosing <div>.

Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (random value) | div_id=“sidebar_01” |

#### div_class

Define a class for the enclosing <div>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | none | div_class=“make-it-dark” |

---

