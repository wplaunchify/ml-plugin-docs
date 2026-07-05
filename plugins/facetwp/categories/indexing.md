# Indexing

*Category from FacetWP documentation*

---

## Indexing

**Source:** [https://facetwp.com/help-center/indexing/](https://facetwp.com/help-center/indexing/)

During a process called **indexing**, FacetWP analyzes your site and stores facet data into a [custom database table](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#how-it-works) for quick lookups.

## How to run the indexer

![Click the Re-index button to start indexing.](https://facetwp.com/wp-content/uploads/2025/10/indexing_button.png)Click the Re-index button to start indexing.
Whenever [facets](/help-center/facets/) are added or edited, save your changes and then press the **Re-index** button. This completely rebuilds the index table.

If you press the **Stop indexer**button while the indexer is running, the index will remain incomplete until the next time you re-index.

While the indexer is running, you can click the rotating icon to see its progress.

It’s recommended to keep the FacetWP settings screen open while the indexer is running.

In some situations, it may be needed to [trigger indexing programmatically or with a cron schedule](/help-center/indexing/how-to-trigger-the-indexer-programmatically/).

## When to run the indexer

### Automatic indexing

FacetWP has an **automatic indexer** that performs a single re-index when an individual item (a post, page, and category or term name/slug) is edited or saved. This keeps the index up to date automatically without having to worry about it, and without putting the potentially heavy burden of a full re-index on your site. This means **you don’t have to re-index after adding or editing/saving posts or terms**, with [a few exceptions](#when-to-re-index).

It is possible to [temporarily or permanently disable the automatic indexer](#disable-automatic-indexing), which can be useful in certain situations.

### When to re-index

![Click the Re-index button after saving settings.](https://facetwp.com/wp-content/uploads/2025/10/indexing_button_settings_saved.png)Click the Re-index button after saving settings.
In general, FacetWP will let you know when you need to re-index, by displaying a message in the top right corner of the admin screen after you save facet settings.

Re-indexing is only needed:

- when facets are added.
- when facet settings have changed.
- when content is imported programmatically, for example with [WP All Import](/help-center/using-facetwp-with/wp-all-import/) or [WebToffee Import Export for WooCommerce](/help-center/using-facetwp-with/webtoffee-product-import-export-for-woocommerce/).
- when a category or term’s *hierarchy* has changed (e.g. changing to a new parent term).
- when a category or term’s custom field content has changed. (Terms can have custom fields added by [Advanced Custom Fields](/help-center/using-facetwp-with/advanced-custom-fields/#using-a-taxonomy-term-custom-field) or [Pods](/help-center/using-facetwp-with/pods/#using-a-taxonomy-term-custom-field-as-facet-data-source)).
- after adding (or changing) [hooks that influence the indexing process](/help-center/developers/hooks/indexing-hooks/), like 
```
facetwp_index_row
```

.
- after making changes to the [registered post types](#show-indexable-post-types).
- after [purging the index table](#purge-the-index-table).
- when/after solving [indexing issues](/help-center/indexing/common-indexing-issues/).

## Other indexing actions

### Stop indexer

![Click 'Stop indexer' to safely stop a running indexer at any time.](https://facetwp.com/wp-content/uploads/2025/10/indexing_button_stop_indexer.png)Click “Stop indexer” to safely stop a running indexer at any time.
To stop a running indexer at any time in the process, just click “Stop indexer”.

You can stop safely at any time during the running indexing process. Stopping the indexer does **not** leave you with a partial index: FacetWP uses a temporary database table that is copied to the indexing table only after the indexing process has completely finished. Clicking “Stop indexer” just stops the running process and performs a cleanup of the temporary table.

### Show indexer stats

![How to show the indexer stats.](https://facetwp.com/wp-content/uploads/2025/10/indexing_button_show_indexer_stats.png)How to show the indexer stats.

Shows the last time a full re-index has successfully run.

### Show indexable post types

![How to check indexable post types.](https://facetwp.com/wp-content/uploads/2025/10/indexing_button_show_indexable_post_types.png)How to check indexable post types.

Lists all post types that will be indexed. If a desired post type is not in the list, read [this section](/help-center/indexing/common-indexing-issues/#fix-issues-with-indexing-post-types) on how to fix this.

### Purge the index table

![How to purge the index table.](https://facetwp.com/wp-content/uploads/2025/10/indexing_button_purge_the_index_table.png)How to purge the index table.

Deletes and re-creates the 
```
facetwp_index
```

 database table. This can be helpful in resolving database migration issues or sometimes with other issues like a “[The index table is empty](/help-center/indexing/common-indexing-issues/#fix-a-the-index-table-is-empty-error)” error.

Make sure to re-index again after purging the index table.

## How to trigger the indexer programmatically

FacetWP has an **automatic** indexer that performs a single re-index when an individual item (a post, page, and category or term name/slug) is edited or saved. This keeps the index up to date automatically without having to worry about it, and without putting the potentially heavy burden of a full re-index on your site.

There a several scenarios in which it is useful to **programmatically** trigger re-indexing, for individual posts or for all posts. [See this page](/help-center/indexing/how-to-trigger-the-indexer-programmatically/) for all info and ways to do this.

In most of these scenarios, it is recommended to [disable automatic indexing](#disable-automatic-indexing), to prevent interference by multiple indexing processes running at the same time.

## Disable automatic indexing

FacetWP has an automatic indexer that performs a single re-index when an individual item (a post, page, and category or term name/slug) is edited or saved. This keeps the index up to date automatically without having to worry about it, and without putting the potentially heavy burden of a full re-index on your site.

![Disable automatic indexing.](https://facetwp.com/wp-content/uploads/2024/11/disable_automatic_indexing.png)Disable automatic indexing.
Automatic indexing can be temporarily or permanently disabled with the “Enable automatic indexing” setting ([introduced in version 4.3.4](/whats-new-in-facetwp-4-3-4/)). This setting is **enabled by default**, and should be in most situations.

Disabling automatic indexing can be useful if you prefer to re-index manually [with the Re-index button](#how-to-run-the-indexer). Or if you want to [run the indexer programmatically](/help-center/indexing/how-to-trigger-the-indexer-programmatically/), [directly with PHP](/help-center/indexing/how-to-trigger-the-indexer-programmatically/#available-indexing-functions), [with a non-recurring WP-Cron event](/help-center/indexing/how-to-trigger-the-indexer-programmatically/#trigger-one-time-re-indexing-with-wp-cron), [periodically with the Schedule Indexer add-on](/help-center/add-on-features-and-extras/schedule-indexer/) (which works with WP-Cron), or [with WP-CLI/server cron](/help-center/using-facetwp-with/wp-cli/#how-to-trigger-indexing-with-wp-cli). Other reasons could be if you want to (temporarily) pause automatic indexing[when importing content](/help-center/indexing/how-to-trigger-the-indexer-programmatically/#trigger-re-indexing-after-importing-posts-or-products), or if you are testing custom indexing code.

### Using the facetwp_indexer_is_enabled hook

Instead of using [the setting](#disable-automatic-indexing), automatic indexing can also be disabled with [the facetwp_indexer_is_enabled hook](/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled/), by adding the following to your (child) theme’s functions.php. The code does exactly the same as disabling the setting. When this hook is in use, it overrides the setting:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_indexer_is_enabled', '__return_false' );
```

Note that with this hook it is also possible to [disable automatic indexing for certain types of content](/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled#conditionally-disable-automatic-indexing).

When the 
```
facetwp_indexer_is_enabled
```

 hook is used like above, the setting will display a warning, because in this scenario, the setting is ignored:

![The 'Enable automatic indexing' warning when the 'facetwp_indexer_is_enabled' hook is in use.](https://facetwp.com/wp-content/uploads/2025/10/enable_automatic_indexer_warning.png)The ‘Enable automatic indexing’ warning when the 
```
facetwp_indexer_is_enabled
```

 hook is in use.

## Fix indexing issues

FacetWP’s indexer is built to be very fast and reliable. However, indexing issues can occur in specific scenarios. [See this page](/help-center/indexing/common-indexing-issues/) for the most common causes and fixes.

## Improve indexing speed

If your website has a lot of content, indexing can take a long time. If you want to speed up the indexing process, see [this section on our performance page](/help-center/developers/facetwp-performance-speed-limits-and-scalability/#improve-indexing-speed) about what influences the speed and some things you can do.

![How to check indexable post types.](https://facetwp.com/wp-content/uploads/2025/10/indexing_button_show_indexable_post_types.png)How to check indexable post types.

One simple way of speeding things up is to [use the facetwp_indexer_query_args hook](/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/) to limit indexing to the post types you are actually using with FacetWP. To check which post types FacetWP currently indexes, click the “Show indexable post types” button in the settings, as shown in the image on the right.

## Customize what is being indexed

FacetWP has several [indexing hooks](/help-center/developers/hooks/indexing-hooks/) that let you modify how FacetWP interacts with the 
```
facetwp_index
```

 table during the indexing process.

For example, the 
```
facetwp_indexer_query_args
```

 hook lets you [customize which posts and post types get indexed](/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/).

Also check out the powerful 
```
facetwp_index_row
```

 hook, which lets you [modify individual facet values before they are saved into FacetWP’s index table](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/). See [this explanation on the index table and how this works](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#how-it-works).

One application of the 
```
facetwp_index_row
```

 hook is indexing serialized data:

## How to index serialized data

Using the [facetwp_index_row hook](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/), it’s possible to index custom fields stored as a serialized array.

Let’s say you have a facet named 
```
days_of_week
```

 that uses a custom field with the same name. In the database, an example postmeta row looks like this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoa:2:{i:0;s:6:"Monday";i:1;s:8:"Thursday";}
```

To index it, add the following code to your (child) theme’s functions.php, then hit the Re-index button.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infofunction index_serialized_data( $params, $class ) {
  if ( 'days_of_week' == $params['facet_name'] ) {
    $values = (array) $params['facet_value'];
    foreach ( $values as $val ) {
      $params['facet_value'] = $val;
      $params['facet_display_value'] = $val;
      $class->insert( $params );
    }
    return false; // skip default indexing
  }
  return $params;
}
add_filter( 'facetwp_index_row', 'index_serialized_data', 10, 2 );
```

    
## See also

    - [What are facets?](https://facetwp.com/help-center/facets/)
- [How to trigger the indexer programmatically](https://facetwp.com/help-center/indexing/how-to-trigger-the-indexer-programmatically/)
- [Indexing with WP-CLI](https://facetwp.com/help-center/using-facetwp-with/wp-cli/)
- [The Schedule Indexer add-on](https://facetwp.com/help-center/add-on-features-and-extras/schedule-indexer/)
- [Using FacetWP with WP All Import](https://facetwp.com/help-center/using-facetwp-with/wp-all-import/)
- [Using FacetWP with WebToffee Import Export for WooCommerce](https://facetwp.com/help-center/using-facetwp-with/webtoffee-product-import-export-for-woocommerce/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)
- [Indexing hooks](https://facetwp.com/help-center/developers/hooks/indexing-hooks/)
- [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [The facetwp_indexer_is_enabled hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled/)
- [The facetwp_indexer_query_args hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/)
- [FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
- [Common indexing issues](https://facetwp.com/help-center/indexing/common-indexing-issues/)

                    Last updated: October 23, 2025

---

## Common indexing issues

**Source:** [https://facetwp.com/help-center/indexing/common-indexing-issues/](https://facetwp.com/help-center/indexing/common-indexing-issues/)

[FacetWP’s indexer](/help-center/indexing/) is built to be very fast and reliable. However, indexing issues can occur in specific scenarios. Below we list the most common causes and fixes.

## Fix a stalled indexer

FacetWP’s indexer **can** stall temporarily, for several reasons. If this happens, the first thing to do is wait a few minutes. FacetWP includes built-in resume functionality. It *should* resume automatically after a minute or two, if you keep the FacetWP settings screen open.

In specific circumstances, the indexer can get permanently stuck, often around the same percentage. These are the most common causes:

### Fix memory exhaustion

The server running out of memory is the most common cause of a stuck indexer. This can be confirmed in the server’s error log. If you don’t have access to your server’s error log, you can confirm it as follows:

- First [enable WP_DEBUG and WP_DEBUG_LOG](https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/) in your wp-config.php file.
- 
- Then, start a re-index by clicking [the Re-index button](/help-center/indexing/#how-to-run-the-indexer), and wait until the indexer is definitively stuck.
- After that, go to your site’s 
```
wp-content/
```

 directory on your server and find the text file called 
```
debug.log
```

. Open it in a text editor to view your server’s error log.
- The log file can be very large. Check for errors near the bottom, around the time the indexer last got stuck, which is probably the last error logged. Most likely you’ll find a so-called “Fatal error” relating to memory, something like: “PHP Fatal error:  Allowed memory size of {x} bytes exhausted (tried to allocate {x} bytes)”.

If you find there are memory exhaustion errors, the next step is to [give WordPress more memory, while making sure this amount does not exceed the server’s memory limit](/how-to-make-your-website-load-faster/#set-wordpress-and-server-memory-limits).

### Fix a .htpasswd login blocking resuming

To bypass PHP timeout issues, FacetWP’s indexer makes a series of HTTP requests to itself. If your site uses HTTP Basic Authentication (.htpasswd), you’ll need to tell FacetWP how to log in.

Add the following into 
```
functions.php
```

 or into the [Custom Hooks add-on](/help-center/add-on-features-and-extras/custom-hooks/), and add your username/password to the code.

Note:in the snippet below, use the HTTP Auth login, **NOT a WordPress login**

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'http_request_args', function( $args, $url ) {
  if ( 0 === strpos( $url, get_site_url() ) ) {
    $args['headers'] = [
      'Authorization' => 'Basic ' . base64_encode( 'YOUR_USERNAME:YOUR_PASSWORD' ) // Change to your username:password
    ];
  }
  return $args;
}, 10, 2 );
```

### Fix WP Engine settings

If you are hosting your website on [WP Engine](/help-center/using-facetwp-with/wp-engine/) and you are experiencing problems with FacetWP’s indexer stalling or not indexing all your posts, see [the fix below](#fix-indexing-issues-with-wp-engine) to disable WP Engine’s query-limiting 
```
WPE_GOVERNOR
```

 feature.

Other hosts could have similar query-limiting features.

### Other possible reasons

If the above-described fixes for the most-common causes don’t work to get the indexer unstuck, you could look into the following:

- FacetWP uses the 
```
wp_remote_post()
```

 function to post a request to the server to resume the indexer when needed. This request comes from the server to the server instead of the browser to the server. It would be possible that, for some reason, the server rejects this post. This would show up in your site’s access logs rather than the error logs. A server configuration or security rule could be blocking the URL when it comes from itself, while the initial re-index starts fine because the request comes from the browser where you are logged in as an admin.
- 
- Something prevents FacetWP’s 
```
facetwp_indexer_cron
```

 cron task from running, which is needed to resume the indexer after a stall. To check on cron activity, you can use the [WP Crontrol plugin](https://wordpress.org/plugins/wp-crontrol/).
- A specific post is causing an error, and the indexer gets stuck on that post. Normally, that should be showing up as an error in your server’s error log (see [the above instructions](#fix-memory-exhaustion) for using 
```
WP_DEBUG
```

 and 
```
WP_DEBUG_LOG
```

 to display errors in 
```
/wp-content/debug.log
```

). Another way to check this is to see if the 
```
wp_facetwp_temp
```

 database table is stuck at the same 
```
post_id
```

 across several stop and restarts of the indexing process. The lowest 
```
post_id
```

 in the 
```
wp_facetwp_temp
```

 table will be the last indexed. You can also look at the 
```
wp_options
```

 table for the 
```
facetwp_indexing
```

 option. During the indexing process, this array will contain the 
```
post_ids
```

 remaining to be indexed, and the first 
```
post_id
```

 will be next. You could check the last and next post ids to see if there may be some issue with that specific post. To test it, you could temporarily change that post to draft and try re-indexing again to see if it works.
- Incorrectly stored taxonomy term data (like the term parent) is causing an error, and the indexer gets stuck on looking up that term (or its parent). Errors like this should be showing up as an error in your server’s error log (see [the above instructions](#fix-memory-exhaustion) for using 
```
WP_DEBUG
```

 and 
```
WP_DEBUG_LOG
```

 to display errors in 
```
/wp-content/debug.log
```

). The error often mentions the offending array key or term ID, which can help in determining the problematic term. Resaving (or deleting) the term will often fix the issue.

## Fix a “The index table is empty” error

If you see a “The index table is empty” message during indexing, click the Re-index button again to restart the indexer. If that does not solve the issue, [purge the index table](/help-center/indexing/#purge-the-index-table) and then re-index.

If that also does not clear up the error, check if any of the following situations apply:

- The post types you are trying to index [are not searchable](#fix-issues-with-indexing-post-types). FacetWP only indexes searchable post types.
- You have Polylang or WPML installed without FacetWP’s [Multilingual add-on](/help-center/using-facetwp-with/multilingual/). If that is the case, install the add-on and re-index.
- You **only** have one or more of these four facet types: [Search facets](/help-center/facets/facet-types/search/), [Pager facets](/help-center/facets/facet-types/pager/), [Sort facets](/help-center/facets/facet-types/sort/) and [Reset facets](/help-center/facets/facet-types/reset/). These facet types do not require any indexing to work. After indexing, the whole “Rows” column will be empty, and you will get a “The index table is empty” message, which is correct and **expected behavior**, as the index table is indeed empty.
- You have the plugin [Product Filter for WooCommerce by WBW](https://wordpress.org/plugins/woo-product-filter/) installed. This plugin should not be active together with FacetWP.

## Fix issues with indexing post types

If a certain post type is not getting indexed, or if you get a “[The index table is empty](#fix-a-the-index-table-is-empty-error)” error when trying to re-index, the reason can be that this post type is not being indexed by FacetWP.

![How to check indexable post types.](https://facetwp.com/wp-content/uploads/2025/10/indexing_button_show_indexable_post_types.png)How to check indexable post types.

You can check which post types FacetWP indexes with the “Show indexable post types” action of the “Re-index” button in FacetWP’s settings.

The reason for a post type not being included in this list, is that FacetWP by default **only indexes “searchable” post types**.

For a post type to be “searchable”, the 
```
exclude_from_search
```

 argument of the [register_post_type() function](https://developer.wordpress.org/reference/functions/register_post_type/#exclude_from_search) must be set to 
```
false
```

. Post types can be registered with this function in your theme code, in functions.php, or with a custom post type plugin (like [Advanced Custom Fields](/help-center/using-facetwp-with/advanced-custom-fields/#creating-custom-post-types-with-acf)). In that last case, 
```
exclude_from_search
```

 will be a setting (in ACF it is located under: Post Types > Edit Post Type > Advanced Settings > Visibility > Exclude from Search).

As its name implies, the 
```
exclude_from_search
```

 argument also determines whether to exclude posts with this post type from the front-end WordPress search results. Keep this in mind when choosing how to fix this. There are basically three options:

### Ways to fix indexing specific post types

Important: For all options below: make sure to do a full [re-index](/help-center/indexing/#how-to-run-the-indexer) afterward.
The best way to fix indexing for your (custom) post type depends on how it is registered. With the first three options below, be aware that if you apply this, the posts of this post type will show up in the WordPress front-end search results. If you don’t want this, go with option 4.

1. If you are using a plugin to register your custom post type, there will be a setting to disable 
```
exclude_from_search
```

. In [Advanced Custom Fields](/help-center/using-facetwp-with/advanced-custom-fields/#creating-custom-post-types-with-acf) it is located under: Post Types > Edit Post Type > Advanced Settings > Visibility > Exclude from Search:

![Disable the 'Exclude From Search' setting when registering custom post types with ACF.](https://facetwp.com/wp-content/uploads/2023/07/acf_cpt_exclude_from_search.png)Disable the ‘Exclude From Search’ setting when registering custom post types with ACF.
2. If you have access to the code where your post type is registered, set the 
```
exclude_from_search
```

 argument of the 
```
register_post_type()
```

 function to 
```
false
```

. If there is no 
```
exclude_from_search
```

 argument, you can add it:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$args = array(
  //...other arguments
  'public'              => true,
  'exclude_from_search' => false, // add this, or if it already exists, set it to false
  //...other arguments
);
```

1. If you don’t have access to the 
```
register_post_type()
```

 function, you can use a hook to set the 
```
exclude_from_search
```

 argument to 
```
false
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'register_post_type_args', function( $args, $post_type ) {
  if ( 'my_post_type' === $post_type ) { // change 'my_post_type' to your post type
    $args['exclude_from_search'] = false;
  }
  return $args;
}, 10, 2 );
```

1. If you want to index and filter post types that you **don’t** want in your search results, it is also possible to force FacetWP to index **non-searchable** post types, [with the facetwp_indexer_query_args hook](/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/#force-indexing-of-non-searchable-post-types). This hook can also be used to force FacetWP to index posts that have a 
```
post_status
```

 set to something else than 
```
public
```

, like for example [attachments](https://facetwp.com/how-to-filter-wp-attachments-and-draft-pending-or-private-posts/).

## Fix empty row counts

After [indexing](/help-center/indexing/#how-to-run-the-indexer) is complete, in the “Settings > FacetWP > Facets” overview screen’s “Rows” column, you’ll see the number of rows in the 
```
facetwp_index
```

 database table that have been indexed for that facet.

If a particular facet has **no** rows indexed, something has gone wrong while indexing the posts for that facet. Most of the time the solution can be found by checking the facet’s Data Source setting. Make sure that you select a valid data source and check if your posts have (valid) values saved for the selected field. After making corrections, re-index again to see the updated row counts. To check if a facet is working okay in general, you can test with its Data Source set to “Post Type” and re-index.

Note that four facet types will **always** have an empty “Rows” column: [Search facets](/help-center/facets/facet-types/search/), [Pager facets](/help-center/facets/facet-types/pager/), [Sort facets](/help-center/facets/facet-types/sort/) and [Reset facets](/help-center/facets/facet-types/reset/). These facet types do not require any indexing to work. They will also have an empty “Source” column:

![Facet overview screen row counts](https://facetwp.com/wp-content/uploads/2023/03/facet_rows.png)Expected row counts in the Facet overview screen.
This also means that if you have **only** one or more of these four facet types, the whole “Rows” column will be empty, and you will get a “[The index table is empty](#fix-a-the-index-table-is-empty-error)” message, which is correct and **expected behavior**, as the index table is indeed empty.

## Fix indexing issues with WP Engine

If you are hosting your website on [WP Engine](/help-center/using-facetwp-with/wp-engine/) and you are experiencing problems with FacetWP’s indexer stalling or not indexing all your posts, try adding the following line to **wp-config.php** (**not** functions.php):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infodefine( 'WPE_GOVERNOR', false );
```

WP Engine [limits long queries](https://wpengine.com/support/platform-settings/#Long_Query_Governor) (longer than 1024 characters) for performance reasons. The above line in wp-config.php prevents that.

## Fix indexing issues with importing posts/products

If you are using [WP All Import](/help-center/using-facetwp-with/wp-all-import/) or [WebToffee Import Export for WooCommerce](/help-center/using-facetwp-with/webtoffee-product-import-export-for-woocommerce/) to import posts/products, FacetWP’s automatic indexing can cause several issues when it runs during the import. Our recommendation is to disable the indexer temporarily, and then automatically trigger it once the import has finished. See these pages for more info and how to do this:

- [Fix indexing issues with WP All Import](/help-center/using-facetwp-with/wp-all-import/)
- [Fix indexing issues with WebToffee Import Export for WooCommerce](/help-center/using-facetwp-with/webtoffee-product-import-export-for-woocommerce/)

## Fix indexing issues with bulk post editing

When bulk editing posts in the posts list edit screen, FacetWP’s automatic indexer is triggered. Normally this is a good thing. However, because bulk editing happens at a very high frequency, this can lead to 
```
502
```

 errors, caused by the server not being able to handle all necessary processing. This issue can specifically happen in multi-lingual setups with WPML or Polylang and FacetWP’s [Multilingual add-on](/help-center/using-facetwp-with/multilingual/) installed.

![Disable automatic indexing.](https://facetwp.com/wp-content/uploads/2024/11/disable_automatic_indexing.png)Disable automatic indexing.
To prevent these issues, you could temporarily disable FacetWP’s “Enable automatic indexing” setting ([introduced in version 4.3.4](/whats-new-in-facetwp-4-3-4/)) **before** the bulk edit. Make sure to re-enable it when you are finished. To re-index **after** the bulk edit, just [click the Re-index button](/help-center/indexing/#how-to-run-the-indexer).

To automate this, add the following code to your (child) theme’s functions.php. The code prevents the indexer from running **during** the bulk editing process. After the bulk edit has finished, the code schedules a one-time WP-Cron event that starts a full re-index:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_indexer_is_enabled', 'fwp_disable_indexer', 5 );
add_action( 'bulk_edit_posts', 'fwp_schedule_bulk_index' );
add_action( 'facetwp_indexer_cron_bulk_index', 'fwp_bulk_index' );

// Disable the indexer during bulk edit on post lists edit screen
function fwp_disable_indexer( $enabled ) {
  if ( isset( $_REQUEST['action'] ) && $_REQUEST['action'] === 'edit' && isset( $_REQUEST['bulk_edit'] ) ) {
    return false;
  }
  return $enabled;
}

 // Schedule one-time bulk index event
function fwp_schedule_bulk_index( $post_ids ) {
  wp_schedule_single_event( time(), 'facetwp_indexer_cron_bulk_index', array( $post_ids ) );
}

// Index posts after bulk edits
function fwp_bulk_index( $post_ids ) {
  foreach ( $post_ids as $post_id ) {
    FWP()->indexer->index( $post_id );
  }
}
```

Note that this solution uses WP-Cron, which is only triggered when there is front-end activity. Which means it can take time for the re-indexing to start. So if you don’t see it running, visit a front-end page. To check on cron activity, you can use the [WP Crontrol plugin](https://wordpress.org/plugins/wp-crontrol/).

Tip:A way to solve the shortcomings of WP-Cron is to [replace WP-Cron with a server cron](/how-to-make-your-website-load-faster/#replace-wp-cron-with-server-cron). A server (“real”) cron job will always run exactly at the scheduled moment, independent from front-end site activity, like WP‑Cron.

## Fix indexing issues with very high post IDs

In the rare case that you have post IDs that are higher than 
```
4294967295
```

 (
```
2^32-1
```

), these posts will not get indexed properly because post IDs higher than this number [cannot be stored in FacetWP’s indexing database table](/help-center/developers/facetwp-performance-speed-limits-and-scalability/#fix-indexing-issues-with-very-high-post-ids). This will lead to empty facets or facets with choices missing, depending on if all or some post IDs are above this limit.

Fortunately, there is an easy fix. Add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_use_bigint', '__return_true' );
```

Important:After adding the above code, make sure to re-create the indexing table by [purging](/help-center/indexing/#purge-the-index-table) it first, and then performing a full-re-index, by clicking the red “Re-index” button.

## Fix slow indexing

If your website has a lot of content, indexing can take a long time. If you want to speed up the indexing process, see [this section on our performance page](/help-center/developers/facetwp-performance-speed-limits-and-scalability/#improve-indexing-speed) about what influences the speed and some things you can do.

![How to check indexable post types.](https://facetwp.com/wp-content/uploads/2025/10/indexing_button_show_indexable_post_types.png)How to check indexable post types.

One simple way of speeding things up is to [use the facetwp_indexer_query_args hook](/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/) to limit indexing to the post types you are actually using with FacetWP. To check which post types FacetWP currently indexes, click the “Show indexable post types” button in the settings, as shown in the image on the right.

    
## See also

    - [Indexing](https://facetwp.com/help-center/indexing/)
- [The Custom Hooks add-on](https://facetwp.com/help-center/add-on-features-and-extras/custom-hooks/)
- [Using FacetWP with WP Engine](https://facetwp.com/help-center/using-facetwp-with/wp-engine/)
- [Using FacetWP with WPML or Polylang](https://facetwp.com/help-center/using-facetwp-with/multilingual/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)
- [The facetwp_indexer_query_args hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/)
- [How to filter WP attachments and draft, pending or private posts](https://facetwp.com/how-to-filter-wp-attachments-and-draft-pending-or-private-posts/)
- [Using FacetWP with WP All Import](https://facetwp.com/help-center/using-facetwp-with/wp-all-import/)
- [Using FacetWP with WebToffee Import Export for WooCommerce](https://facetwp.com/help-center/using-facetwp-with/webtoffee-product-import-export-for-woocommerce/)
- [FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
- [How to make your website load faster](https://facetwp.com/how-to-make-your-website-load-faster/)
- [Indexing hooks](https://facetwp.com/help-center/developers/hooks/indexing-hooks/)
- [The facetwp_indexer_is_enabled hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled/)
- [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [The Schedule Indexer add-on](https://facetwp.com/help-center/add-on-features-and-extras/schedule-indexer/)

                    Last updated: February 26, 2026

---

## How to trigger the indexer programmatically

**Source:** [https://facetwp.com/help-center/indexing/how-to-trigger-the-indexer-programmatically/](https://facetwp.com/help-center/indexing/how-to-trigger-the-indexer-programmatically/)

FacetWP has an **automatic** [indexer](/help-center/indexing/) that performs a single re-index when an individual item (a post, page, and category or term name/slug) is edited or saved. This keeps the index up to date automatically without having to worry about it, and without putting the potentially heavy burden of a full re-index on your site.

It is also possible to **programmatically** trigger re-indexing, for individual posts or for all posts.

## When to index programmatically?

Triggering the indexer programmatically can be used in the following scenarios:

- [To trigger (re-)indexing in your own custom code, using the available indexing functions](#available-indexing-functions).
- [To create a WP-Cron event that triggers one-time (re-)indexing, at a specified moment](#trigger-one-time-re-indexing-with-wp-cron).
- [To trigger periodic (re-)indexing, at a specified interval, using the Schedule Indexer add-on](#trigger-periodic-re-indexing-with-wp-cron).
- [To trigger (re-)indexing with WP-CLI commands, manually with the command line, or in a server cron job](#trigger-re-indexing-with-wp-cli-and-server-cron).
- [To trigger (re-)indexing after importing posts or products](#trigger-re-indexing-after-importing-posts-or-products).

In most of these scenarios it is recommended to temporarily or permanently [disable the automatic indexer](#disable-automatic-indexing) to prevent interference by multiple indexing processes running at the same time.

## Available indexing functions

The 
```
FWP()->indexer->index()
```

 function can be used to trigger (re-)indexing in your own custom code:

### Re-index all posts

To programmatically do a full re-index, use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoFWP()->indexer->index();
```

### Re-index a single post

To programmatically re-index a single post, set the 
```
$post_id
```

 parameter:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$post_id = 12345; // Must be an integer!
FWP()->indexer->index( $post_id );
```

Note:Make sure 
```
$post_id
```

 is an **integer**, not a (numerical) string.
Note:If you use above the method to trigger indexing within an action hook, for example to run it after an import or sync has finished, you may get the error “Call to a member function index() on null”. This happens if 
```
FWP()
```

 or 
```
FWP()->indexer
```

 is not available yet. Be aware that FacetWP loads on WP’s 
```
init
```

 hook, with priority 
```
20
```

. If your code runs on the 
```
init
```

 hook, make sure to use it with a priority of 
```
21
```

 or later.

### Re-index specific posts

To programmatically re-index multiple post IDs, use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$post_ids = [ 8942, 8943, 8944 ]; // Post IDs to re-index. Use integers.
foreach ( $post_ids as $post_id ) {
    FWP()->indexer->index( $post_id );
}
```

### Re-index specific facets for specific posts

To programmatically re-index only specific facets for specific post IDs, use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$post_ids = [ 8942, 8943, 8944 ]; // Post IDs to re-index. Use integers.

$facet_names = [ 'price', 'stock_status', 'brand' ]; // Facets to re-index.
$facets = [];

foreach ( $facet_names as $name ) {
    $facet = FWP()->helper->get_facet_by_name( $name );
    if ( false !== $facet ) {
        $facets[] = $facet;
    }
}

foreach ( $post_ids as $post_id ) {
    FWP()->indexer->index_post( $post_id, $facets );
}
```

### Re-index specific facets for all posts

To programmatically re-index only specific facets for all post IDs, use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$post_ids = FWP()->indexer->get_post_ids_to_index(); // Get all indexable post IDs.

$facet_names = [ 'price', 'stock_status', 'brand' ]; // Facets to re-index.
$facets = [];

foreach ( $facet_names as $name ) {
    $facet = FWP()->helper->get_facet_by_name( $name );
    if ( false !== $facet ) {
        $facets[] = $facet;
    }
}

foreach ( $post_ids as $post_id ) {
    FWP()->indexer->index_post( $post_id, $facets );
}
```

Warning:Use this cautiously, because re-indexing all post IDs this way can lead to fatal memory errors if your site has a lot of posts. The limit depends on the number of rows to re-index and the amount of memory available.

## Trigger re-indexing with WP-Cron

The [above indexing functions](#available-indexing-functions) can be used in [WP-Cron](https://developer.wordpress.org/plugins/cron/) events, to trigger [one-time](#trigger-one-time-re-indexing-with-wp-cron) or [periodic re-indexing](#trigger-periodic-re-indexing-with-wp-cron).

### Trigger one-time re-indexing with WP-Cron

If you want to trigger a WP-Cron event that **runs only once** at a specific moment, for example after finishing an import, you can use the [wp_schedule_single_event()](https://developer.wordpress.org/reference/functions/wp_schedule_single_event/) function.

The event can be scheduled to run immediately, using 
```
time()
```

 in the first parameter. Or you can  [specify a timestamp to let it run at a specific time later](#specify-a-time-to-run-the-one-time-re-indexing-event).

The following example shows how to schedule an immediate, one-time event that performs a **full re-index** of all posts.

The code needs to be placed in your (child) theme’s functions.php, except the 
```
wp_schedule_single_event()
```

 function, which needs to be placed in your custom code, in a hook or function where you want to initiate re-indexing, for example after finishing an import:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infofunction fwp_single_index( ) {
  FWP()->indexer->index(); // Re-index all posts
}
add_action( 'fwp_single_index', 'fwp_single_index' );

// Place this in a hook or function where you want to initiate indexing, for example after finishing an import.
wp_schedule_single_event( time(), 'fwp_single_index' );
```

To do the same for a **single post**, you can pass its post ID in 
```
wp_schedule_single_event()
```

. Note that it needs to be passed as an array, even though it is a single post ID. Also make sure the post ID is an **integer**, not a numerical string:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infofunction fwp_single_index( $post_id ) {
  FWP()->indexer->index( $post_id ); // Re-index this post
}
add_action( 'fwp_single_index', 'fwp_single_index' );

// Place this in a hook or function where you want to initiate indexing, for example after finishing an import.
wp_schedule_single_event( time(), 'fwp_single_index', array( 456 ); // Re-indexes postID 465. Don't add more than one post ID to the array, that will NOT work. See the next example.
```

If you want to re-index **multiple posts** at once, keep in mind that passing them in an array does not work, because 
```
wp_schedule_single_event()
```

 passes all post IDs in the array to the callback function as separate arguments. The solution is to pass them as a nested array:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infofunction fwp_single_index( $post_id ) {
  foreach ( $post_id as $id ) {
    FWP()->indexer->index( $id ); // Re-index this post
  }
}
add_action( 'fwp_single_index', 'fwp_single_index');

// Place this in a hook or function where you want to initiate indexing, for example after finishing an import.
wp_schedule_single_event( time(), 'fwp_single_index', array ( array ( 123,456,789 )  ) ); // Use a nested array for multiple posts. For a single post ID see the previous example.
```

#### Specify a time to run the one-time re-indexing event

All three examples above schedule the indexing event to run “now”, by setting the first parameter (the UNIX timestamp) of 
```
wp_schedule_single_event()
```

 to 
```
time()
```

. If you need the event to run at a specific time later, you can use a relative format like 
```
time() + 3600
```

 (one hour from now).

Or you can use [PHP’s strtotime function](https://www.php.net/manual/en/function.strtotime.php) with [a relative date-time format](https://www.php.net/manual/en/datetime.formats.php#datetime.formats.relative). The following example schedules the event to index all posts at 01:00 hrs in the upcoming night:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infofunction fwp_single_index( ) {
  FWP()->indexer->index(); // Re-index all posts
}
add_action( 'fwp_single_index', 'fwp_single_index' );

// Place this in a hook or function where you want to initiate indexing, for example after finishing an import.
$timestamp = strtotime('tomorrow 01:00:00'); // Calculate the UNIX timestamp for the upcoming night 01:00 hr.
wp_schedule_single_event( $timestamp, 'fwp_single_index' );
```

#### Testing the one-time re-indexing event

While testing the one-time event, be aware that WP-Cron is only triggered when there is some activity on the site on the front-end. If you don’t see the post(s) being re-indexed, make sure to load a few front-end pages of your site. Also keep in mind that after the front-end is triggered, it takes a minute for the schedule to actually run, and then for the indexer to start running and finishing (which can take a while depending on the number of posts and facets). You can follow the indexing progress by reloading the FacetWP admin page and [clicking the rotating icon](/help-center/indexing/#how-to-run-the-indexer) (or click “[Show indexer stats](/help-center/indexing/#show-indexer-stats)” to see when it has last finished indexing).

While testing, you may want to [disable FacetWP’s automatic indexing](#disable-automatic-indexing) temporarily. Or, if your hook or function triggers the one-time event regularly, disable it permanently.

Note that if you are using 
```
wp_schedule_single_event()
```

 in code that runs on WP’s 
```
init
```

 hook, you need to make sure to use it with a priority of 
```
21
```

 or later ([see the explanation above](#hook-priority)).

### Trigger periodic re-indexing with WP-Cron

![The FacetWP Schedule Indexer add-on](https://facetwp.com/wp-content/themes/fwp4/assets/img/addons/logo-schedule-indexer.svg)
If you need to schedule a **periodic** re-index with [WP-Cron](https://developer.wordpress.org/plugins/cron/), you can use the [Schedule Indexer add-on](/help-center/add-on-features-and-extras/schedule-indexer/). This plugin adds a WP-cron event that runs a full re-index on an 
```
hourly
```

 WP-Cron schedule. You can also choose one of the other built-in schedules (
```
twicedaily
```

, 
```
daily
```

 and 
```
weekly
```

), or [create your own custom schedule](/help-center/add-on-features-and-extras/schedule-indexer/#use-a-custom-indexing-schedule).

Important:If you trigger re-indexing with a recurring WP-Cron schedule, it is important to [disable FacetWP’s automatic indexing](#disable-automatic-indexing).
While testing the indexing schedule you have set with the Schedule Indexer add-on, be aware that WP-Cron is only triggered when there is some activity on the site on the front-end. If you don’t see the post(s) being re-indexed, make sure to load a few front-end pages of your site. If you don’t want the cron schedule to be dependent on this shortcoming of WP-Cron, you can also [trigger re-indexing with a (“real”) server cron](#trigger-re-indexing-with-wp-cli-and-server-cron).

## Trigger re-indexing with WP-CLI and server cron

If you prefer the command line, you can also [use WP-CLI to manually trigger re-indexing](/help-center/using-facetwp-with/wp-cli/#how-to-trigger-indexing-with-wp-cli).

Or, if you want to use a cron schedule to control indexing, you can [use WP-CLI indexing commands in a server cron job](/help-center/using-facetwp-with/wp-cli/#wp-cli-indexing-with-a-cron-job). This can be useful too if you [disabled WP-Cron for performance reasons](/how-to-make-your-website-load-faster/#replace-wp-cron-with-server-cron), preventing you from using the [Schedule Indexer add-on](/help-center/add-on-features-and-extras/schedule-indexer/). Real server cron is also the best approach if you want your cron schedule to always run exactly at the scheduled time, independent of front-end site activity (which is the disadvantage of [using WP-Cron](#trigger-periodic-re-indexing-with-wp-cron)).

With FacetWP’s built-in [WP-CLI indexing command options](/help-center/using-facetwp-with/wp-cli/#wp-cli-indexing-commands) you can also do partial re-indexes of only specific post types, post ID’s and facets, and you can purge the index table, as a whole or partially.

Re-indexing with WP-CLI (optimally triggered by a server cron job) is the recommended approach for indexing high-content sites, or sites with large amounts of content imported regularly. In these cases the automatic indexing process can become problematic. Using WP-CLI will give you full control over what is being indexed, when the indexing process runs exactly, and at which frequency. In this approach, FacetWP’s automatic indexing should be turned off with the [facetwp_indexer_is_enabled hook](/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled/).

## Trigger re-indexing after importing posts or products

If you are using [WP All Import](/help-center/using-facetwp-with/wp-all-import/) or [WebToffee Import Export for WooCommerce](/help-center/using-facetwp-with/webtoffee-product-import-export-for-woocommerce/) to import posts/products, FacetWP’s automatic indexing can cause several issues when it runs during the import. Our recommendation is to disable the indexer temporarily, and then automatically trigger it once the import has finished. See these pages for more info and how to do this:

- [Fix indexing issues with WP All Import](/help-center/using-facetwp-with/wp-all-import/)
- [Fix indexing issues with WebToffee Import Export for WooCommerce](/help-center/using-facetwp-with/webtoffee-product-import-export-for-woocommerce/)

## Disable automatic indexing

FacetWP has an automatic indexer that performs a single re-index when an individual item (a post, page, and category or term name/slug) is edited or saved. This keeps the index up to date automatically without having to worry about it, and without putting the potentially heavy burden of a full re-index on your site.

![Disable automatic indexing.](https://facetwp.com/wp-content/uploads/2024/11/disable_automatic_indexing.png)Disable automatic indexing.
Automatic indexing can be temporarily or permanently disabled with the “Enable automatic indexing” setting ([introduced in version 4.3.4](/whats-new-in-facetwp-4-3-4/)). This setting is **enabled by default**.

This can be useful if you prefer to re-index manually [with the Re-index button](/help-center/indexing/#how-to-run-the-indexer), or if you want to run the indexer programmatically, as described in the [above-mentioned scenarios](#when-to-index-programmatically).

Automatic indexing can also be disabled with [the facetwp_indexer_is_enabled hook](/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled/), by adding the following to your (child) theme’s functions.php. The code does exactly the same as disabling the setting.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_indexer_is_enabled', '__return_false' );
```

Note that with this hook it is also possible to [disable automatic indexing for certain types of content](/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled#conditionally-disable-automatic-indexing).

    
## See also

    - [Indexing](https://facetwp.com/help-center/indexing/)
- [Indexing hooks](https://facetwp.com/help-center/developers/hooks/indexing-hooks/)
- [Common indexing issues](https://facetwp.com/help-center/indexing/common-indexing-issues/)
- [The Schedule Indexer add-on](https://facetwp.com/help-center/add-on-features-and-extras/schedule-indexer/)
- [Indexing with WP-CLI](https://facetwp.com/help-center/using-facetwp-with/wp-cli/)
- [Using FacetWP with WebToffee Import Export for WooCommerce](https://facetwp.com/help-center/using-facetwp-with/webtoffee-product-import-export-for-woocommerce/)
- [Using FacetWP with WP All Import](https://facetwp.com/help-center/using-facetwp-with/wp-all-import/)
- [The facetwp_indexer_is_enabled hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled/)

                    Last updated: December 2, 2024

---

