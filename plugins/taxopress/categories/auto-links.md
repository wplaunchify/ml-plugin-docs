# Auto Links

*Category from TaxoPress documentation*

---

## Custom URLs in Auto Links

**Source:** [https://taxopress.com/docs/custom-urls-in-auto-links/](https://taxopress.com/docs/custom-urls-in-auto-links/)

You can choose any URL to use with the Auto Links feature.

By default, Auto Links can automatically add links to your terms when they’re inside posts. These links will go to the archive page for that term. Those archive pages are located at URLs like this: /tag/term/ or /category/wordpress/.

You can override that with any URL you wish. Here’s how to enable that feature.

- Go to Auto Links.
- Edit your configuration.
- Click the “Link Types” tab.
- Enable the Custom URLs option.

custom url

Now you can choose any destination URL you want. Here’s a comparison:

- **Term**: WordPress
- **Default link**: https://taxopress.com/tag/wordpress
- **Custom URL link**: https://wordpress.org

This screenshot shows the “Custom URL” field where you can add your choice of URL.

auto link url

---

## Allow Auto Links to Skip Content Areas

**Source:** [https://taxopress.com/docs/avoid-elements/](https://taxopress.com/docs/avoid-elements/)

When using the Auto Links feature in TaxoPress, you may want to avoid adding links to some areas of your posts. For example, some users don’t want to automatically add links to headings inside their content.

---

## Skip Content Areas in TaxoPress Free

In the Free version of TaxoPress, the Auto Links feature allows you to skip some specified elements such as headings, “script”, “style”, “pre”, and “code”. Here’s how to stop Auto Links from adding links inside these elements:

- Go to TaxoPress > Auto Links.
- Edit an Auto Links entry and click the “Exceptions” tab.
- Check the boxes for any elements you want to avoid.

It is also possible to skip certain parts of your content using the HTML markup:

- Inspect the element on the page. Find the name of the wrapper for your element.
- Add the wrapper name into this field: “Prevent Auto Links inside classes or IDs”.

---

## Skip Content Areas in TaxoPress Pro

This feature requires the Pro version of the TaxoPress plugin

If you are using TaxoPress Pro, you are also able to add your own elements to skip. Look for the “Element tag” box in the screenshot below. Enter the name of the HTML element, without the brackets. For example, enter “blockquote” and click the “Add” button.

skip elements

You will now see your new element added to the list. You can check the box and the Auto Links feature will stop adding links to that element.

skipped element

Finally, TaxoPress Pro has the option to skip specific shortcodes and blocks. Terms inside these shortcodes and blocks will not have Auto Links applied.

exclude blocks

---

## Auto Links Options

**Source:** [https://taxopress.com/docs/auto-links-options/](https://taxopress.com/docs/auto-links-options/)

There are settings available for the Auto Links feature.

Go to “TaxoPress” and then “Auto Links” in your WordPress admin menu. Click “Edit” for one of your existing Auto Links.

auto links screen

---

## General

These are the important settings for each example of Auto Links:

- **Title**: This is only for your use in the WordPress admin area.
- **Taxonomy**: Choose which taxonomy terms will be linked.
- **Auto Link case**: This enables you to be consistent in your use of uppercase and lowercase.
- **Auto Link areas**: Choose which areas of the content will have links.
- **Auto Link title attribute**: This will appear when users hover over links. This is also customizable in TaxoPress Pro for [the Custom URLs feature](https://taxopress.com/docs/custom-urls-in-auto-links/).

---

## Post Types

TaxoPress will attempt to automatically add Auto Links to your chosen content. It may not be successful for all post types and layouts.

---

## Control

These options allow you to set maximum limits for how often Auto Links will appear in your content. It also allows you to choose terms of a minimum and maximum length. On this tab, you can also choose to only add links for whole words, not partial matches.

autolinks control

---

## Exceptions

In this area, you can exclude specific terms from being linked, and you can also stop Auto Links from working inside a wide range of HTML elements. We’ve defined 9 default elements from H1 and H2 to 
```
pre
```

 and 
```
code
```

. You can also add your own custom classes and IDs. [Click here for more on this Exceptions feature](https://taxopress.com/docs/avoid-elements/).

exceptions

This feature requires the Pro version of the TaxoPress plugin

In TaxoPress Pro, you will also have the option to specify new elements that will not be included in Auto Links. In this example below, we have excluded the “Blockquote” element from Auto Links:

shortcodes blocks exclude

---

## Options

Under the “Options” tab, you can use the “Add links for all terms” box to decide if links will be added to all terms, or only those attached to the post. TaxoPress Pro users will also be able to decide if links are added to [synonyms](https://taxopress.com/docs/synonyms/).

---

## Advanced

This area contains more complex options that only need to be modified if Auto Links is not working for you. Here you also will be able to add a CSS class to your term link.

---

## Link Types

This allows you to enable the [Custom URL](https://taxopress.com/docs/custom-urls-in-auto-links/) option and choose any URL to use with the Auto Links feature.

custom url

---

## Introduction to Auto Links

**Source:** [https://taxopress.com/docs/introduction-to-auto-links/](https://taxopress.com/docs/introduction-to-auto-links/)

The Auto Links feature in TaxoPress will automatically add links to keywords your post content.

There are two choices for Auto Links:

- **Default:** For example, if you have a tag called “WordPress”, the Auto Links feature will find any instances of “WordPress” in your content and add links to the archive page for that term. This means that occurrences of “WordPress” will link to /tag/wordpress.
- **Custom Link**: You can override the default link and choose a custom URL.

---

## Why Use Auto Links?

The Auto Links feature is beneficial for at least two reasons:

1. It helps your site visitors find other posts about topics that interest them.
2. It can help increase the search engine ranking of your archive pages. Your archive pages are incredibly valuable for SEO and more links to those pages may help them rank higher. [Click this link for more on the SEO value of archive pages](https://yoast.com/taxonomy-seo-categories-tags/).

You can also choose a Custom URL to replace the link to an archive page.

---

## Enabling Auto Links

The Auto Links feature can be enabled by going to TaxoPress > Auto Links in your WordPress admin menu. On this screen, you will find one default example of “Auto Links”. You can edit this example to match the needs of your site.

This feature requires the Pro version of the TaxoPress plugin

On the “Auto Links” screen in the Pro version of TaxoPress Pro, you can click “Add New” and add your own display.

---

## Using Auto Links

If Auto Links are enabled, they will work automatically. In the image below, my site has Tags called “WordPress” and “CMS”. Those phrases are automatically linked to the appropriate URLs: 
```
/tag/wordpress
```

 and also 
```
/tag/cms
```

. This can be enabled for any taxonomy and any post type.

---

## Set a Custom URL for Auto Links

You can also choose any URL to use with the Auto Links feature.

By default, Auto Links can automatically add links to your terms when they’re inside posts. These links will go to the archive page for that term. Those archive pages are located at URLs like this: /tag/term/ or /category/wordpress/

You can also choose any destination URL you want. Here’s a comparison:

- **Term**: WordPress
- **Default link**: https://taxopress.com/tag/wordpress
- **Custom URL link**: https://wordpress.org

This screenshot shows the “Custom URL” field where you can add your choice of URL.

auto link url

---

