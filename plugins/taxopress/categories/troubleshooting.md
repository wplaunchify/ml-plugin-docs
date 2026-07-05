# Troubleshooting

*Category from TaxoPress documentation*

---

## Characters and Alphabets Supported by TaxoPress

**Source:** [https://taxopress.com/docs/characters/](https://taxopress.com/docs/characters/)

Some of the more advanced features in TaxoPress such as Auto Links and Auto Terms may not work with languages that do not use the the A-Z alphabet.

This happens because of the difficulties involved with parsing and analyzing different alphabets. [We offer a chart that compares language support](https://taxopress.com/docs/comparing-the-ai-integrations/) for some services such as OpenAI, IBM Watson and more.

Please feel free to test these TaxoPress features. However, do so with the understanding that they may not work correctly with content in languages such as Russian, Chinese, Arabic, Japanese, Cyrillic, Thai, Vietnamese, Greek, and Hebrew.

---

## What Happened to the Click Tags Feature?

**Source:** [https://taxopress.com/docs/click-tags/](https://taxopress.com/docs/click-tags/)

In older versions of TaxoPress (when the plugin was called “Simple Tags”) there was a feature called “Click Tags”.

This feature still exists, only it is now called “[Suggest Terms](https://taxopress.com/docs/introduction-to-suggested-tags/)“. The name was changed because this feature now supports more than just the “Tags” taxonomy.

This image below shows how the old “Click Tags” feature appeared:

This next image shows how the new “Suggest Terms” feature appears:

---

## Troubleshooting TaxoPress Screens

**Source:** [https://taxopress.com/docs/troubleshooting-taxopress-screens/](https://taxopress.com/docs/troubleshooting-taxopress-screens/)

If buttons or actions are not working on the frontend or admin area of your TaxoPress site, you may have a conflict with another plugin. Or, you might have found a bug in a TaxoPress plugin.

The best way to debug errors in TaxoPress is to use the tools in your browser.

---

## Debugging with the Chrome browser

- Open Chrome and visit the TaxoPress screen that is having issues.
- Right-click to bring up this toolbar shown in the next image.
- Click “Inspect”:

- You will now see a sidebar in Chrome that looks like this next image.
- Click the “Console” tab:

- Try the action in TaxoPress that’s not working.
- You may now see some errors in the “Console” tab. Copy those errors and report them to our team at [help@taxopress.com](mailto:help@taxopress.com).

---

## Debugging with the Firefox browser

- Open Firefox and visit the TaxoPress screen that is having issues.
- Right-click to bring up this toolbar shown in the next image.
- Click “Inspect element”:

- You will now see a sidebar in Firefox that looks like this next image.
- Click the “Console” tab:

- Try the action in TaxoPress that’s not working.You may now see some errors in the “Console” tab.
- Copy those errors and report them to our team at [help@taxopress.com](mailto:help@taxopress.com).

---

## Functions for Theme Integration

**Source:** [https://taxopress.com/docs/theme-integration/](https://taxopress.com/docs/theme-integration/)

It is possible to integrate TaxoPress outputs into your theme. Here are some of the options available:

- [st_related_posts()](https://taxopress.com/docs/st_related_posts/) : Display a list of related posts.
- [st_tag_cloud()](https://taxopress.com/docs/st_tag_cloud/) : Display a Tag Cloud.
- [st_the_tags()](https://taxopress.com/docs/st_the_tags/) : Display the terms for the current post.

---

## Inline JS Aggregations and Large Cache Sizes

**Source:** [https://taxopress.com/docs/aggregate-inline-js-cache-size-grows/](https://taxopress.com/docs/aggregate-inline-js-cache-size-grows/)

Plugins such as Autoptimize and WP Rocket can collect inline JavaScript. Since some of the Tag Group features need unique IDs for the JavaScript code to connect to the right element, they receive by default random IDs. This results in some code to be cached more often than necessary.

To remedy this, enter this ID manually. In most cases you use the parameter 
```
div_id
```

, for the table 
```
table_id
```

. In the shortcode you add for example

```
div_id="my-tag-cloud-1"
```

or the corresponding value in the Gutenberg block under “Advanced Styling”.

Please make sure that each element (no matter which type) on a page needs a unique ID. Use a string that is unlikely to appear again and add a different number for each element (‘john-doe-tag-cloud-1’, ‘john-doe-tag-cloud-2’). White space should be replaced by dashes (-) or underscores (_).

---

## How To Use The Debug Log

**Source:** [https://taxopress.com/docs/how-to-use-the-debug-log-2/](https://taxopress.com/docs/how-to-use-the-debug-log-2/)

## How to Activate Debugging

WordPress provides a debug mode that lets you see notices, warnings and error messages. You activate it by setting the flags [WP_DEBUG](https://wordpress.org/support/article/debugging-in-wordpress/#wp_debug) and [WP_DEBUG_LOG](https://wordpress.org/support/article/debugging-in-wordpress/#wp_debug_log) in the wp-config.php.

To save you the trouble of editing the wp-config.php file, you can use the plugin [WP Debugging](https://wordpress.org/plugins/wp-debugging/).((This and other 3rd-party plugins are not officially supported. Use at your own risk.)) After installation, go to the plugin screen under the Tools menu and select “Set WP_DEBUG to true”.

The plugin also lets you install the [Debug Bar](https://wordpress.org/plugins/debug-bar/) plugin that adds a menu entry “Debug Quick Look” where you can see the debug messages.

---

## Identify Messages from Tag Groups

The Tag Groups plugin adds its own messages that appear in the debug.log file prepended by 
```
[Tag Groups]
```

.

---

## Verbose logging

By default these messages inform you only about serious issues. If you turn on **verbose logging**, however, you will also receive details about deprecated shortcodes, caching, locale settings that cannot be provided by the operating system, processing of meta etc.. This information can help you understand what is going on under the hood.

Activate verbose logging on the page Troubleshooting -> Debugging

or add to wp-config.php:

```
define( 'CM_DEBUG', 'verbose' );
```

The additional messages will also appear in the file debug.log and can be viewed with the [Debug Bar](https://wordpress.org/plugins/debug-bar/) plugin.

---

## Tag Groups Changes Design Elements in Other Areas of My Site

**Source:** [https://taxopress.com/docs/the-plugin-changes-design-elements-accordions-tabs-sliders-buttons-handles-in-other-places-of-my-site/](https://taxopress.com/docs/the-plugin-changes-design-elements-accordions-tabs-sliders-buttons-handles-in-other-places-of-my-site/)

If your theme also uses jQuery UI themes, some styling may be affected by the jQuery UI themes that come with Tag Groups. The result can be shifted or changed handles, buttons or similar elements that belong to interactive features anywhere on your site.

In that case please try the following:

1. If the issue appears only on pages where you don’t use any of the Tag Groups features, go to the **Tag Groups** settings, **Front End**, **Shortcodes** and turn off “Always load shortcode scripts.”
2. If you cannot use this option, select another theme in the **Tag Groups** settings, **Front End**, **Themes and Appearance** and see if that helps. If your WordPress theme brings its own jQuery UI theme, you can try the option “Don’t load a theme.”

After you make a change, you may have to empty the page and CSS caches (if you use a plugin or CDN for caching) and regenerate minimized CSS (if you use plugins such as WP Total Cache or Autoptimize).

---

## The Tag Groups Plugin Just Shows an Empty Space

**Source:** [https://taxopress.com/docs/instead-of-the-tag-cloud-the-page-just-renders-an-empty-space/](https://taxopress.com/docs/instead-of-the-tag-cloud-the-page-just-renders-an-empty-space/)

If you see an empty space when trying to load a tag cloud, this is usually the result of a JavaScript error on that page.

This can be caused by any active plugin or theme on your site. It might also happens if you use a very unusual location for the tag cloud, for example in a menu or inside another widget.

Please try the following step to debug the error::

- Check if you use plugins that minimize or combine JavaScript (Autoptimize, Total Cache and others). Make sure that jQuery is loaded early or even excluded from the processed JavaScript libraries. Turn off all processing of JavaScript, clear the cache and reload the page.
- [Open the Console in your browser](https://webmasters.stackexchange.com/a/77337), reload the page and check for error messages that give a hint about where the error was caused.
- Disable other plugins and check, if the tag cloud now renders correctly. If yes, enable the plugins again one-by-one and keep reloading the page in order to find out where it breaks.
- Disabe off the delay for revealing the tag cloud. In the Gutenberg block you find a setting under Tabs or Panels where you can turn off the delay. In the shortcode you add the parameter delay=0. Example for a shortcode:

```
[tag_groups_cloud ... delay=0]
```

---

## I have another question

**Source:** [https://taxopress.com/docs/i-have-another-question/](https://taxopress.com/docs/i-have-another-question/)

Please continue to the [forum](https://wordpress.org/support/plugin/tag-groups).

---

## One or more shortcode parameters are not effective

**Source:** [https://taxopress.com/docs/one-or-more-shortcode-parameters-are-not-effective/](https://taxopress.com/docs/one-or-more-shortcode-parameters-are-not-effective/)

Check your shortcode in the editor and make sure that

- quotes are not formatted, i.e. not tilted or curled. It is recommended to re-type them in the editor.
- there is no invisible HTML code inside the shortcode (switch your editor from “Visual” to “Text”)

---

## There is a gray box around the tag cloud or the tabs or accordion are messed up

**Source:** [https://taxopress.com/docs/there-is-a-gray-box-around-the-tag-cloud-or-shortcode-output/](https://taxopress.com/docs/there-is-a-gray-box-around-the-tag-cloud-or-shortcode-output/)

If you are using a shortcode, please check in the editor and make sure that it is formatted as “Paragraph”, not “Preformatted”.

---

## Styling doesn’t seem to be effective

**Source:** [https://taxopress.com/docs/styling-doesnt-seem-to-be-effective/](https://taxopress.com/docs/styling-doesnt-seem-to-be-effective/)

Check if the values for div_id, div_class etc. are valid names for ids and classes. Maybe you also need to purge the cache of your WordPress installation. Use the developer tools of your browser to check if your styling gets overridden by other instructions (try “!important” to enforce yours).

---

## The list on the posts page is messed up

**Source:** [https://taxopress.com/docs/the-list-on-the-posts-page-is-messed-up/](https://taxopress.com/docs/the-list-on-the-posts-page-is-messed-up/)

Some users have reported interference with other plugins that caused the list being messed up, showing wrong content etc. If that happens, turn off the filter in the settings at “filter on post admin”.

---

## The tag cloud doesn’t show in a text widget, instead I see the shortcode

**Source:** [https://taxopress.com/docs/the-tag-cloud-doesnt-show-in-a-text-widget-instead-i-see-the-shortcode/](https://taxopress.com/docs/the-tag-cloud-doesnt-show-in-a-text-widget-instead-i-see-the-shortcode/)

Try “Enable shortcode in sidebar widgets” in the settings.

---

## The Tag Groups Administration Page Doesn’t Load

**Source:** [https://taxopress.com/docs/list-not-loading-tag-groups/](https://taxopress.com/docs/list-not-loading-tag-groups/)

Some users have reported problems loading the list on the Tag Groups admin page. In most cases, this is caused by another plugin. The other plugin causes your site to output a warning or alert that interferes with the data transfer to your browser.

---

## Try disabling other plugins one-by-one

Try disabling other plugins one-by-one.

If you can see the JSON data, that may give you a hint about the plugin causing trouble. Check any text before the opening curly brace. For example: 
```
Warning: xyz in /some-plugin/index.php{"data":"success" ...
```

---

## Try other steps

Go to the “Tag Groups”, then “Tools”, then “System Information”. Check if the “Ajax Test” option shows a green check mark. If you see a red X, [this post has more information where to search](https://taxopress.com/docs/debugging-a-wordpress-ajax-error/).

Alternatively, you can [open the JavaScript Console in your browser](https://webmasters.stackexchange.com/a/77337) on the Tag Groups Administration page. Reload the page and check the error or log messages for anything that gives a hint about the cause.

A final suggestion is to add the following lines to your wp-config.php file. Then reload the Tag Groups Administration page and check the content of the debug.log file in the /wp-content/ folder so see if there is any error message.

```
define( 'WP_DEBUG', true ); define( 'WP_DEBUG_LOG', true );
```

---

