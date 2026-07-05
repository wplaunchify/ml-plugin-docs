# Troubleshooting

*Category from FacetWP documentation*

---

## Troubleshooting guide

**Source:** [https://facetwp.com/help-center/troubleshooting/](https://facetwp.com/help-center/troubleshooting/)

## 

                
                
                After creating a facet, you'll need to place it on the page by pasting its shortcode into either a widget, a "Shortcode" block (via the WP Editor), or into a PHP template file.
                        [Learn more »](/help-center/facets/)
                    A template is
                        **required**; it's how FacetWP determines which facet choices to display.
                        [Learn more »](/help-center/listing-templates/)
                    After adding facets, click the
                        
```
Re-index
```

 button. Indexing is the process of storing facet data into a custom database table for fast lookups. Without this step, your facets won't display any choices.
                    Your post type needs to be searchable (
```
exclude_from_search = false
```

), otherwise FacetWP will ignore it.
                        [Learn more »](https://developer.wordpress.org/reference/functions/register_post_type/#exclude_from_search)
                    If so, install our
                        [Multilingual add-on](/help-center/using-facetwp-with/multilingual/), then re-index afterwards.
                    If so, add
                        
```
define( 'WPE_GOVERNOR', false );
```

 to your site's wp-config.php file.
                    If so, clear your site cache then (temporarily) disable all relevant plugins. Caching sometimes causes loading issues with javascript, especially if
                        **script deferring** is enabled.

If using Cloudflare,
                        [see this tutorial](/help-center/using-facetwp-with/cloudflare/).
                    One of those errors may be preventing FacetWP from loading properly. Please contact your developer, or
                        [open a support ticket](/help-center/get-support/) mentioning the specific error message you see.
                    To open the console, right click anywhere on your front-end facet page and select "Inspect Element". Then click the "Console" tab if it isn't already active.
                    As a last resort, we need to rule out any possible issues caused by 3rd party plugins. Try (temporarily) disabling all non-essential plugins.

Essential plugins are ones like
                        **ACF, CPT UI, and WooCommerce** (the base plugin). The more plugins you can rule out, the better.
                    If so, FacetWP could be
                        **detecting the wrong query**, so the next step involves using Debug Mode to see which query FacetWP is using.

If the issue happens on
                        **archive** pages and your site has caching enabled, it's also possible that the
                        
```
fwp-loop
```

 HTML comment tag -- which FacetWP requires -- is getting stripped out. Make sure your caching plugin is set to
                        **not** remove HTML comments.
                    If so, FacetWP isn't able to find a suitable query. Make sure you're using a
                        [supported Template](/help-center/listing-templates/).
                    By default, FacetWP does
                        **not** pass authentication data to the server.

If your listing depends on
                        
```
current_user_can()
```

,
                        
```
is_user_logged_in()
```

 or similar authentication checks, you will need to
                        [use this hook](/how-to-pass-authentication-data-through-rest-api-requests/) to include authentication data.
                    To open the console, right click anywhere on your front-end facet page and select "Inspect Element". Then click the "Network" tab and select "XHR".

                        
                        

 Below are some common response codes:

                        
```
200
```

 - Success

```
401
```

 - Unauthorized (maybe due to a site lockdown or .htpasswd?)

                        
```
403
```

 - Forbidden (blocked by a firewall or service like Sucuri?)

                        
```
404
```

 - Not Found (is the REST API disabled?)

                        
```
5XX
```

 - Server errors (often a PHP fatal error or server ran out or memory. check your web server's PHP error log for clues)
                    Make sure you've added
                        
```
"facetwp" => true
```

 to the query arguments.

Also check to see if this is an
                        **archive** page (look for an "archive" class on the <body> tag). For archive pages, we strongly recommend
                        [modifying the archive query](/how-to-customize-wp-archive-queries/), instead of creating your own.
                    Elementor and Beaver Builder are the only builders we
                        **officially** support at this time.
                    Please make sure you've installed our
                        [Elementor integration add-on](/help-center/using-facetwp-with/elementor/), and followed its setup guide.

Also, if you're using Elementor on an archive page, make sure to use the "Archive Posts" module instead of "Posts".
                    Please make sure you've installed our
                        [Beaver Builder integration add-on](/help-center/using-facetwp-with/beaver-builder/), and followed its setup guide.

Also, if you're using Beaver Builder on an archive page, make sure your listing module's
                        
```
Query
```

 setting is set to "Main Query".
                    While we don't yet officially support Oxygen, try manually adding the CSS class
                        
```
facetwp-template
```

 to the container element surrounding your listing grid. According to some customers, this works well when using Oxygen on existing archive pages.
                    Please open a support ticket (Settings > FacetWP > Support, within your site dashboard). Make sure that
                        
```
Debug Mode
```

 is turned ON.
                    **Debug Mode** provides extra helpful information about queries, facets, etc.

FacetWP is likely
                        **not detecting the right query**, and debug mode can help determine
                        **why**. Follow the instructions further down on this page to use debug mode.
                    If everything else works fine, it could be that the
                        
```
facetwp-template
```

 CSS class isn't in the right spot. FacetWP will only modify content
                        **inside** this container element.
                        [Learn more »](/help-center/listing-templates/wp-archive-page/)

If you're using WooCommerce, try
                        [adding this code](https://gist.github.com/djrmom/db61215fb48b0ed6694de2404c3646b0) into your (child) theme's functions.php.
                    If your layout looks different after an
                        **ajax refresh** (but not on hard-refresh), then it could be due to a javascript-based layout or enhancement script, such as Isotope, Masonry, or Lazy Load.

Your options are to either disable the problemetic plugin/feature (e.g. Jetpack's "Lazy Load" feature), or to re-trigger the javascript within a custom
                        [facetwp-loaded](/help-center/developers/javascript-reference/facetwp-loaded/) event.
                        [Learn more »](/help-center/faq/why-is-my-layout-different-and-or-images-missing-after-filtering/)
                

                

	            
## Check the FAQs and Using FacetWP with… pages

The most common issues are covered in [our FAQs](/help-center/#faq). If you experience any issues, make sure to check them out first.

All common indexing issues and fixes for them can be found on [this page](/help-center/indexing/common-indexing-issues/).

For (possible) issues with other plugins, check if we have a dedicated page on it, in the [Using FacetWP with … section](/help-center/using-facetwp-with/). There is also a page with [known plugin/theme incompatibilities](https://facetwp.com/help-center/using-facetwp-with/incompatible-plugins-and-themes/).

## Enable Debug Mode

FacetWP has a special Debug Mode that can [help with diagnosing issues](#using-debug-mode-to-diagnose-issues), by providing low-level information about pages with facets. In our support we use also use Debug Mode, which is why we ask you to enable it before [submitting a ticket](/help-center/get-support/).

To turn on Debug Mode, go to Settings > FacetWP > Settings, enable the “Debug Mode” setting, and then click “Save changes”:

![How to enable Debug Mode in FacetWP's settings.](https://facetwp.com/wp-content/uploads/2023/02/facetwp-how-to-enable-debug-mode.png)How to enable Debug Mode in FacetWP’s settings.
Important:Make sure to **disable Debug Mode when it is not needed anymore for troubleshooting**. Debug Mode exposes some of your settings and can influence loading speeds. When Debug Mode is enabled, FacetWP v4.3.2+ will show a red warning icon in the Settings tab.

## Using Debug Mode to diagnose issues

When [Debug Mode is enabled](#enable-debug-mode), FacetWP adds extra data into the browser Console. To access it, go to a front-end page with facets, open your browser’s inspector, go to the Console tab, and type:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.settings.debug
```

The Console will then show a JavaScript object with a lot of useful debugging data, including the facet and listing template settings, query arguments and SQL. The object can be clicked open to reveal all sub items, which can be further clicked open:

![Using FWP.settings.debug in the browser inspector's Console tab to diagnose issues.](https://i.imgur.com/0rGWRzj.gif)Using FWP.settings.debug in the browser inspector’s Console tab to diagnose issues.
All separate items can also be accessed directly, by typing them into the Console:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.settings.debug; // all debug info

FWP.settings.debug.hooks_used; // the names (and paths) of relevant custom hooks
FWP.settings.debug.query_args; // query arguments
FWP.settings.debug.sql; // the raw SQL
FWP.settings.debug.row_counts; // the number of posts indexed for each facet
FWP.settings.pager; // pager data
FWP.template; // the name of the listing template used
FWP.settings.debug.template; // info about the listing template used
```

A good starting point for debugging is opening or typing:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.settings.pager
```

![How to check post and page counts with FWP.settings.pager in the Console.](https://facetwp.com/wp-content/uploads/2021/01/console-pager.png)How to check post and page counts with FWP.settings.pager in the Console.
This will output information about the post and page counts, looking like the image on the right. Are the counts what you are expecting them to be?

Next, look at the output of:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.settings.debug.query_args
```

![How to check the query arguments with FWP.settings.debug.query_args in the Console.](https://facetwp.com/wp-content/uploads/2021/01/console-query-args.png)How to check the query arguments with FWP.settings.debug.query_args in the Console.
Does the 
```
post_type
```

 match what you’re expecting? Now check the the other query arguments, like 
```
posts_per_page
```

. Is it the same as what you have set in your query arguments or in the Listing Builder’s Query tab settings?

If the post/page counts look wrong, or the query arguments are not what you expect them to be, then FacetWP is likely not using the right query. [See the solution below](#fix-an-incorrectly-detected-query).

To see the exact SQL statement that FacetWP is using for the listing query, type:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.settings.debug.sql
```

Also here, a wrong 
```
post_type
```

 or number of posts per page (the second number in for example 
```
LIMIT 0, 10
```

) are indicators of FacetWP detecting the wrong query. Sometimes the SQL doesn’t match up with the query arguments, hinting at a conflict with another plugin.

## Fix an incorrectly detected query

There can be multiple – often invisible – queries running on a page, added by custom code, your theme, or other plugins. Sometimes it happens that FacetWP’s automatic query detection latches on to the wrong (archive) query.

When this is the case, the results often look okay on initial page load, but are wrong after filtering. You can check if this is happening [by using FacetWP’s Debug Mode](#using-debug-mode-to-diagnose-issues).

There are several ways of fixing this issue:

### Enable “Advanced query detection”

![Enable 'Advanced query detection' in FacetWP's settings.](https://facetwp.com/wp-content/uploads/2025/10/advanced-query-detection.png)Enable “Advanced query detection” in FacetWP’s settings.
FacetWP’s “Advanced query detection” setting (called “Strict query detection” in FacetWP versions older than [v4.5](/help-center/changelog/#4-5)) [prevents FacetWP’s automatic query detection from incorrectly using (invisible) archive queries on the page](/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/#enable-advanced-query-detection). If enabled, this setting uses a stricter way of detecting the right query, which in most cases will solve automatic query detection issues.

The setting is enabled by default in FacetWP versions newer than [v4.2.3](/help-center/changelog/#4-2-3). **Keep this setting enabled** unless you have a specific reason to disable it, or you are instructed to do so in support.

If enabling “Advanced query detection” does not work, you can also force FacetWP to specifically ignore the incorrectly detected query:

### Force FacetWP to ignore a query

Let’s say that [by using FacetWP’s Debug Mode](#using-debug-mode-to-diagnose-issues), you have determined that FacetWP is incorrectly using a query with the 
```
post_type
```

 argument set to 
```
edd_wish_list
```

.

You can force FacetWP to ignore this specific query by using the [facetwp_is_main_query](/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/) filter.

Add the following code to your (child) theme’s functions.php, and replace 
```
edd_wish_list
```

 with the name of your post type that is incorrectly detected as the main query to use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ( 'edd_wish_list' == $query->get( 'post_type' ) ) {
    $is_main_query = false; // ignore this query
  }
  return $is_main_query;
}, 10, 2 );
```

## The “FacetWP was unable to auto-detect the post listing” error

```
FacetWP was unable to auto-detect the post listing
```

If you see this error, FacetWP can’t find a suitable query. This usually happens when you have a [custom WP_Query](/help-center/listing-templates/custom-wp-query/) on a standard WordPress page. To let FacetWP detect the custom query, you have to add 
```
facetwp => true
```

 to the query arguments. See [this section](/help-center/listing-templates/custom-wp-query/#how-to-create-a-custom-query) for more information.

This error can also happen:

- If you are [using the WP External Links plugin](/help-center/using-facetwp-with/wp-external-links/).
- If the 
```
facetwp-template
```

 class exists multiple times on a page. There should only be **one** 
```
facetwp-template
```

 class on a page. Check your page source HTML to see if this is the case. This can happen:
- If you added multiple listings to the page yourself, which does not work. [You can have only one filterable listing on a page](/help-center/faq/can-i-use-multiple-queries-facetwp-templates-on-the-same-page/).
- If you added the 
```
facetwp-template
```

 class manually somewhere on the page, for example on a 
```
<div>
```

 surrounding a [Listing Builder listing](/help-center/listing-templates/listing-builder/). Adding the 
```
facetwp-template
```

 class manually is almost never necessary: all [listing template types](/help-center/listing-templates/) add it automatically. The only reason to add this class manually would be [if FacetWP’s automatic loop detection fails](/help-center/listing-templates/custom-wp-query/#solving-issues-with-facetwps-automatic-post-loop-detection).
- If you are using [the Bricks add-on](/help-center/using-facetwp-with/bricks/) with a [FacetWP-enabled Bricks element](/help-center/using-facetwp-with/bricks/#supported-elements). To fix the issue, go to Bricks > Settings  > Performance and [disable the “Cache query loops” setting](/help-center/using-facetwp-with/bricks/#fix-facetwp-was-unable-to-auto-detect-the-post-listing-error).
- If you are [using Elementor](/help-center/using-facetwp-with/elementor/), with the [Element Caching](https://elementor.com/help/element-caching-help/) feature enabled. Element Caching is incompatible with FacetWP. If you see a “FacetWP was unable to auto-detect the post listing” error, or if your facets are not showing (or disappearing after use), make sure to [disable Element Caching globally or in every FacetWP-related widget](/help-center/using-facetwp-with/elementor/#fix-issues-caused-by-elementors-element-caching-feature).
- If you are [using the AIOSEO plugin](/help-center/using-facetwp-with/all-in-one-seo-pro/) with the “Run Shortcodes” setting enabled. To fix the issue, go to All in One SEO > Search Appearance > Advanced, and [disable the “Run Shortcodes” setting, or exclude FacetWP shortcodes from being parsed](/help-center/using-facetwp-with/all-in-one-seo-pro/#fix-a-facetwp-was-unable-to-auto-detect-the-post-listing-error).
- If you are using an object caching plugin, like [Redis Object Cache](https://wordpress.org/plugins/redis-cache/) or [Object Cache Pro](https://objectcache.pro/). Object caching can interfere with FacetWP’s ability to detect the right query on refresh. Depending on the implementation or plugin used, you may be able to exclude your facet page or its [cache groups](https://objectcache.pro/docs/ignoring-groups/) from being cached. Or you could disable object caching entirely. See [this page](/help-center/using-facetwp-with/object-caching/) for more info.
- If you are hosting your site on WP Engine:
- By [WP Engine caching FacetWP’s API URL](/help-center/using-facetwp-with/wp-engine/#add-facetwps-api-url-to-wp-engines-cache-exclusions).
- Because of [WP Engine’s object cache](/help-center/using-facetwp-with/wp-engine/#disable-wp-engines-object-cache).
- If you are hosting your site on Pressable, because of [Pressable’s object caching](/help-center/using-facetwp-with/pressable/).

## How to enable the Theme File Editor and Plugin File Editor

![WordPress Plugin File Editor](https://facetwp.com/wp-content/uploads/2022/04/pluginfileeditor.png)If you give our support team access to the admin area of your site, you may be asked to enable the Theme- or Plugin File Editor, to see your theme and plugin files. In newer WordPress versions, these are enabled by default, but sometimes they may be disabled.

You can enable both in 
```
wp-config.php
```

. Search for 
```
define('DISALLOW_FILE_EDIT', true);
```

 and replace it with:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infodefine('DISALLOW_FILE_EDIT', false);
```

Note:In classic themes, the Theme File Editor is located in the Appearance menu, and the Plugin File Editor in the Plugins menu. In Full Site Editing themes however, both are located in the Tools menu.
    
## See also

    - [Frequently Asked Questions](https://facetwp.com/help-center/faq/)
- [Using the right query](https://facetwp.com/help-center/troubleshooting/using-the-right-query/)
- [The facetwp_is_main_query hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Using a page builder](https://facetwp.com/help-center/listing-templates/using-a-page-builder/)
- [Using FacetWP with Bricks Builder](https://facetwp.com/help-center/using-facetwp-with/bricks/)
- [Using FacetWP with WP External Links](https://facetwp.com/help-center/using-facetwp-with/wp-external-links/)
- [Using FacetWP with All in One SEO (Pro)](https://facetwp.com/help-center/using-facetwp-with/all-in-one-seo-pro/)
- [Using FacetWP with WP Engine](https://facetwp.com/help-center/using-facetwp-with/wp-engine/)
- [Using FacetWP with Pressable](https://facetwp.com/help-center/using-facetwp-with/pressable/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
- [How to make your website load faster](https://facetwp.com/how-to-make-your-website-load-faster/)
- [How to use Query Monitor to optimize performance](https://facetwp.com/how-to-use-query-monitor-to-optimize-performance/)
- [Using FacetWP with object caching](https://facetwp.com/help-center/using-facetwp-with/object-caching/)

                Last updated: October 29, 2025

---

## Using the right query

**Source:** [https://facetwp.com/help-center/troubleshooting/using-the-right-query/](https://facetwp.com/help-center/troubleshooting/using-the-right-query/)

For all types [listing templates](/help-center/listing-templates/), FacetWP will automatically try to find the right query. This *usually* works great, but sometimes FacetWP needs some extra guidance on which query to use.

## The WordPress loop

FacetWP tries to automatically add a 
```
facetwp-template
```

 CSS class to an element surrounding the Loop. But due to a myriad of circumstances, sometimes it needs to be done manually.

If so, wrap the CSS class around both the 
```
if ( have_posts() )
```

 and 
```
else
```

  statements, as shown below).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info?>
<div class="facetwp-template">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <?php get_template_part( 'content', 'post' ); ?>
    <?php endwhile; else : ?>
        <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
    <?php endif; ?>
</div>
```

The file to edit depends on several factors. As a general rule:

**Search page:** search.php

**Main archive:** archive.php

**Category archive:** category.php

**Blog home:** home.php

**WooCommerce shop:** archive-product.php

See WordPress’ built-in [Template Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/#visual-overview).

## No results

```
FacetWP was unable to auto-detect the post listing
```

If you’re seeing this error it’s because FacetWP can’t find a suitable query. This usually happens when you have a [custom WP_Query](/help-center/listing-templates/custom-wp-query/) on a standard WordPress page. To let FacetWP detect the custom query, you have to add 
```
facetwp => true
```

 to the query arguments. See [this section](/help-center/listing-templates/custom-wp-query/#how-to-create-a-custom-query) for more information.

[This FAQ question](/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/) list more scenarios in which this error can happen.

## Turn on Debug Mode

If FacetWP isn’t filtering correctly, it’s because FacetWP is using the wrong query.

To find which query FacetWP is using, go to 
```
Settings > FacetWP > Settings
```

, and turn on Debug Mode.

Important:Make sure to **disable Debug Mode again when you are finished**. Depending on your site, Debug Mode can sometimes influence loading speeds.

## Finding the query

To find the query FacetWP is using, browse to your facet listing, open your browser’s code inspector, go to the Console tab, and type:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.settings.debug
```

This will return lots of debugging data, including the query arguments and SQL. You can click open each item to get more information:

![debugging](https://i.imgur.com/0rGWRzj.gif)
The quickest way to see if FacetWP is detecting the right query is to compare what you have set in the query arguments of your [listing template](/help-center/listing-templates/) with the SQL that FacetWP is using. You can directly see the used SQL by typing this in the Console:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.settings.debug.sql
```

Things to look for in the SQL are:

- The post type(s) retrieved. Look for 
```
AND wp_posts.post_type =
```

.
- The set order. Check if the
```
ORDER BY
```

 clause is using the right order.
- The posts per page. Check if the 
```
LIMIT
```

 clause is showing the correct posts per page. For example, if you have set 
```
posts_per_page
```

 to 
```
9
```

, the SQL will show as 
```
LIMIT 0, 9
```

.

If anything in the SQL is off, then FacetWP may be detecting the wrong query.

Another handy command in the Console is:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.settings.pager
```

This will show the number posts per page (
```
per_page
```

), total number of pages (
```
total_pages
```

), total number of filtered posts (
```
total_rows
```

), and total number of unfiltered rows (
```
total_rows_unfiltered
```

). If this is not what you expect, FacetWP is likely detecting the wrong query.

![Enable 'Advanced query detection' in FacetWP's settings.](https://facetwp.com/wp-content/uploads/2025/10/advanced-query-detection.png)Enable “Advanced query detection” in FacetWP’s settings.
If you suspect a wrong query being detected, the first thing to check is if FacetWP’s “Advanced query detection” setting is enabled. This setting (called “Strict query detection” in FacetWP versions older than [v4.5](/help-center/changelog/#4-5)) [prevents FacetWP’s automatic query detection from incorrectly using (invisible) archive queries on the page](/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/#enable-advanced-query-detection). If enabled, this setting uses a stricter way of detecting the right query, which in most cases will solve automatic query detection issues.

The setting is enabled by default in FacetWP versions newer than [v4.2.3](/help-center/changelog/#4-2-3). **Keep this setting enabled** unless you have a specific reason to disable it, or you are instructed to do so in support.

If enabling “Advanced query detection” does not work, you can also force FacetWP to specifically ignore the incorrectly detected query:

## Ignore irrelevant queries

Let’s say you’ve determine that FacetWP is incorrectly using a query with 
```
post_type
```

 = 
```
edd_wish_list
```

. We’ll just tell FacetWP to ignore the query, using the 
```
facetwp_is_main_query
```

 filter:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ( 'edd_wish_list' == $query->get( 'post_type' ) ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 10, 2 );
```

See [the facetwp_is_main_query hook page](/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/) for more examples.

    
## See also

    - [Frequently Asked Questions](https://facetwp.com/help-center/faq/)
- [Why am I seeing “FacetWP was unable to auto-detect the post listing”?](https://facetwp.com/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)
- [The facetwp_is_main_query hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/)
- [Why is my facet empty?](https://facetwp.com/help-center/faq/why-is-my-facet-empty/)

                    Last updated: October 29, 2025

---

