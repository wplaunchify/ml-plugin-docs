# Maintenance And Troubleshooting

*Category from TaxoPress documentation*

---

## “Error loading block: The response is not a valid JSON response.”

**Source:** [https://taxopress.com/docs/error-loading-block-the-response-is-not-a-valid-json-response/](https://taxopress.com/docs/error-loading-block-the-response-is-not-a-valid-json-response/)

If you see this message inside a Gutenberg block then your web server sent a response that cannot be understood by the editor.

Advanced users can check the developer tools in their browser. You may find there a message that gives you a hint. A common cause is a firewall on your server that gives a false positive:

If you cannot change the firewall settings, you could try the preview button if your post or page still renders properly.((Since the front end doesn’t transfer the data the same way as the editor, it most likely won’t be blocked by a firewall.)) You can also go to the Tag Groups settings -> Back End -> Gutenberg and disable the block preview.

---

## Tag Groups Shortcodes in Widgets

**Source:** [https://taxopress.com/docs/tag-groups-widgets/](https://taxopress.com/docs/tag-groups-widgets/)

WordPress widgets do not always work correctly with shortcodes. However, we have made efforts in the Tag Groups plugin to support shortcodes in widgets.

## The Original Shortcode Appears

If you add a Tag Groups shortcode to a widget and only see the shortcode on the front of your site, try this:

- Go to “Tag Groups”, then “Front End”, and look at the “Shortcodes” tab.
- Try enabling the “Enable shortcode in sidebar widgets” option.

## If You Don’t See Tabs or Accordions

If you add test Tag Groups in widgets and can see some formats, but don’t see Tab or Accordion displays, try this:

- Go to “Tag Groups”, then “Front End”, and look at the “Shortcodes” tab.
- Make sure that “Always load shortcode scripts.” is activated.

If some tag clouds work, but others don’t, it’s also worth checking [this article](https://taxopress.com/docs/i-cannot-use-multiple-tag-clouds-on-the-same-page/).

---

## I Cannot Use Multiple Tag Clouds on the Same Page

**Source:** [https://taxopress.com/docs/i-cannot-use-multiple-tag-clouds-on-the-same-page/](https://taxopress.com/docs/i-cannot-use-multiple-tag-clouds-on-the-same-page/)

Please make sure that the shortcode parameter div_id (or table_id) or the corresponding field in the block is either omitted or empty or, if you choose to use it, to enter something different for each tag cloud on a page, including those in widgets.

---

## I Don’t See All Tags in the Tag Meta Box

**Source:** [https://taxopress.com/docs/i-dont-see-all-tags-in-the-tag-meta-box/](https://taxopress.com/docs/i-dont-see-all-tags-in-the-tag-meta-box/)

If a post has tags that you see on the front end, but you can’t see them in the Meta Box on the post edit screen, please follow these steps:

1. Go to the Tag Groups Settings > Back End.
2. Find the “Meta Box” tab and make sure that all groups are selected to display in the Meta Box.
3. Save and return to the post edit screen.
4. Go to the Tag Groups > Settings > Troubleshooting.
5. Find the “First Aid” tab.
6. Click all the buttons, from top to bottom.

---

## How To Use The Debug Log in Tag Groups

**Source:** [https://taxopress.com/docs/how-to-use-the-debug-log/](https://taxopress.com/docs/how-to-use-the-debug-log/)

WordPress provides a debug mode that lets you see notices, warnings and error messages. The Tag Groups plugin integrates with this mode so that it’s easy to see debug messages for our plugin.

## Activate debugging

You activate it by setting the flags [WP_DEBUG](https://wordpress.org/support/article/debugging-in-wordpress/#wp_debug) and [WP_DEBUG_LOG](https://wordpress.org/support/article/debugging-in-wordpress/#wp_debug_log) in the wp-config.php.

To save you the trouble of editing the wp-config.php file, you can use the plugin [WP Debugging](https://wordpress.org/plugins/wp-debugging/). After installation, go to the plugin screen under the Tools menu and select “Set WP_DEBUG to true”.

The plugin also lets you install the [Debug Bar](https://wordpress.org/plugins/debug-bar/) plugin that adds a menu entry “Debug Quick Look” where you can see the debug messages.

## Identify messages from Tag Groups

The Tag Groups plugin adds its own messages that appear in the debug.log file prepended by 
```
[Tag Groups]
```

 or 
```
[Tag Groups Pro]
```

.

## Verbose logging

By default these messages inform you only about serious issues. If you turn on **verbose logging**, however, you will also receive details about deprecated shortcodes, caching, locale settings that cannot be provided by the operating system, processing of meta etc.. This information can help you understand what is going on under the hood.

Activate verbose logging on the page Troubleshooting -> Debugging

or add to wp-config.php:

```
define( 'CM_DEBUG', 'verbose' );
```

The additional messages will also appear in the file debug.log and can be viewed with the [Debug Bar](https://wordpress.org/plugins/debug-bar/) plugin.

---

## Instead of the Tag Cloud There’s An Empty Space

**Source:** [https://taxopress.com/docs/instead-of-the-tag-cloud-the-page-just-renders-an-empty-space-2/](https://taxopress.com/docs/instead-of-the-tag-cloud-the-page-just-renders-an-empty-space-2/)

This is usually the result of a JavaScript error on that page. It can be caused by any active plugin or theme on your site. It might also happens if you use a very unusual location for the tag cloud, for example in a menu or inside another widget.

Try first if it helps to turn off the delay for revealing the tag cloud. In the Gutenberg block you find a setting under Tabs or Panels where you can turn off the delay. In the shortcode you add the parameter delay=0.

Example for a shortcode

```
[tag_groups_cloud ... delay=0]
```

## Find out what causes the error

Please try the following:

- Check if you use plugins that minimize or combine JavaScript (Autoptimize, Total Cache and others). Make sure that jQuery is loaded early or even excluded from the processed JavaScript libraries. Turn off all processing of JavaScript, clear the cache and reload the page.
- [Open the Console in your browser](https://webmasters.stackexchange.com/a/77337), reload the page and check for error messages that give a hint about where the error was caused.
- Disable other plugins and check, if the tag cloud now renders correctly. If yes, enable the plugins again one-by-one and keep reloading the page in order to find out where it breaks.

---

## Can Not Save HTML in the Tag Description

**Source:** [https://taxopress.com/docs/i-cannot-save-html-in-the-tag-description/](https://taxopress.com/docs/i-cannot-save-html-in-the-tag-description/)

By default, WordPress doesn’t let you save HTML in the tag description field because a malicious user could post code that compromises your site’s security. Some plugins, however, remove this restriction and let you use images and formatting in the tag description.

The Tag Groups plugin allows HTML only if the user has [the unfiltered_html permission](https://publishpress.com/knowledge-base/unfiltered_html/). By default, only administrators have this permission but you can use a plugin to create new user roles and change user permissions in order to grant the unfiltered_html permission to all users you trust.

If you are sure that you can trust *all* users of your site, you can also activate “Allow HTML in tag description” in the “Front End” settings, under the “Themes and Appearance” tab.

---

## Tags Not Visible in the WordPress Admin After Installing Tag Groups

**Source:** [https://taxopress.com/docs/where-are-my-tags/](https://taxopress.com/docs/where-are-my-tags/)

If you activate the Tag Groups plugin and don’t see your tags in the WordPress admin area, you don’t need to worry. The tags are still there, they are just not visible. Follow these four steps to make your tags appear again.

---

## Option #1: Check the filter menu

This problem is normally caused by the filter menu on top of the “Tags” screen. Try selecting “Filter Off” and click “Apply”.

---

## Option #2: Disable the filter menus

You can also try going to “Tag Groups”, then “Back End” tab and disabling the filters.

---

## Option #3: Reset the filters

You can also go to “Tag Groups”, then “Tools”, then the “First Aid” tab. Click the “Reset Tag Filter” button. That may bring the tags back.

---

## Option #4: Test for plugin conflicts

Finally, test for plugin conflicts. Deactivate all other plugin one-by-one and ccheck if now the filter appeared on top of the tag lists. The filter might fail to show because another plugin is causing an error on that page.

To get more details on the plugin causing issues, open the console in your browser, as described [here](https://documentation.concrete5.org/tutorials/how-open-browser-console-view-errors). Then reload the tags page and check for error messages in the console. The messages usually point to the plugin that is causing the error.

---

## Tag Cloud: When I Click on a Tag, the Posts Don’t Differentiate by Groups

**Source:** [https://taxopress.com/docs/tag-cloud-when-i-click-on-a-tag-the-posts-dont-differentiate-by-groups/](https://taxopress.com/docs/tag-cloud-when-i-click-on-a-tag-the-posts-dont-differentiate-by-groups/)

If you use the same tag in *more than one* group, clicking on the *same* tag in a tag cloud should show *different* posts, depending on the group where you clicked. That means that the list of posts must be filtered by group.

Here is an example: Imagine you use the tag “Charlie Chaplin” under two groups: “Actors” and “Directors”. By default, clicking on the tag “Charlie Chaplin” will show all movies where he was involved as actor or as director. In some cases, however, you want to differentiate between acting and directing.

For this case you need to turn on an additional filter.

If all your tags show the correct posts, you won’t have to use this feature.

## Shortcode

Add an additional parameter to the shortcode:

```
add_premium_filter=1
```

## Gutenberg Block

Turning on the option **“Add filter to tags for multiple groups.”** in the Gutenberg block.

---

## Debugging a WordPress Ajax Error

**Source:** [https://taxopress.com/docs/debugging-a-wordpress-ajax-error/](https://taxopress.com/docs/debugging-a-wordpress-ajax-error/)

You probably arrived here because you came across an error message in the diagnostic tool.

Ajax is required for several functions in the Tag Groups plugin, including the group administration page. In contrast to normal web pages, the communication via Ajax can break when your WordPress site displays a harmless notice that would otherwise disappear in the HTML code.

---

## Find Out The Cause

Any plugin or theme installed on your web site can cause Ajax to break.

There are several things that you can try. Some of them just require you to be the site administrator. For others you need access to the WordPress files.

Go to the “Tag Groups”, then “Tools”, then “System Information”.

If you click on the button “Show the response”m you may see some text that comes before the 
```
{"data":"...
```

 part. Try to figure out, which theme or plugin has caused these messages. The plugin’s (or theme’s) name is often somewhere hidden in the path – look at the piece directly after “/plugins/” or “themes”. Here’s an example:

```
Warning: Illegal string offset ‘ms_dos’ in /homepages/1/abc1234/htdocs/mystore/wp-content/plugins/hello-bully/class-admin.php on line 111
```

### Check the browser console

[Open the JavaScript Console in your browser](https://webmasters.stackexchange.com/a/77337), reload that page that doesn’t work and check the error messages below for anything that gives a hint about the cause. If you see an error mentioning JSON, XML, Ajax etc., you could try to click there to see the response that came from the server. Often it contains some lines that shouldn’t be there.

### Search for the breaking point

Deactivate all other plugins and switch to a default theme. Then run the test again (or reload the page where you encountered the problem). If now all seems OK, re-activate them one by one to identify the one where things break.

### Enable debugging

Add to your wp-config.php file the following lines:

```
define( 'WP_DEBUG', true ); define( 'WP_DEBUG_LOG', true );
```

Then run the test again (or reload the page where you encountered the problem) and afterwards check the content of the *debug.log* file in the *wp-content* folder of your site if there is any error message that matches the time when you ran the test.

When you’re done, don’t forget to set the *true* values back to *false*, or just delete the lines. It is also recommended to delete the file *debug.log* since it might reveal information about your server.

---

## Fix The Problem

The issue can often be solved only by the author of the plugin or theme that has caused these messages. Alternatively you can hire a developer.

In some cases it may, however, already help to change the PHP version on your server, to [turn off WordPress debugging](https://codex.wordpress.org/WP_DEBUG) or to update, deactivate or replace an outdated or faulty plugin or theme.

---

