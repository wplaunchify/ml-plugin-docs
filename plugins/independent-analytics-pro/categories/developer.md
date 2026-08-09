# Developer

*Category from Independent Analytics Pro documentation*

---

## How to Programmatically Output the Analytics Script

**Source:** [https://independentwp.com/knowledgebase/developer/programmatically-output-analytics-script/](https://independentwp.com/knowledgebase/developer/programmatically-output-analytics-script/)

Independent Analytics watches the 
```
iawp_output_tracking_script
```

 hook, which you can use to output the script wherever you want.

Here is how you can use this hook:

```
do_action('iawp_output_tracking_script');
```

The script will be output on the page wherever you call that action hook.

Independent Analytics outputs the script via 
```
wp_footer
```

 already, so make sure you aren’t adding it a second time by accident. Additionally, the script is only going to function on pages where WP is loaded, so this method cannot be used to output the script on non-WP pages.

---

## How to Exclude the Analytics Script From a Page

**Source:** [https://independentwp.com/knowledgebase/developer/exclude-analytics-script-page/](https://independentwp.com/knowledgebase/developer/exclude-analytics-script-page/)

Independent Analytics includes a filter called 
```
iawp_user_excluded_posts
```

 you can use to exclude the analytics script from specific pages.

Here is an example of how the filter can be used:

```
add_filter( 'iawp_user_excluded_posts', function ( $ids ) {
  $ids[] = 1;
  return $ids;
});
```

It takes a single argument, which is an array of integers. Each integer is the ID of a page you want to exclude the tracking script on. In the example above, this would prevent Independent Analytics from tracking a page with an ID of 1.

---

## Programmatically Editing User Role Capabilities for Analytics Access

**Source:** [https://independentwp.com/knowledgebase/developer/edit-user-roles-programmatically/](https://independentwp.com/knowledgebase/developer/edit-user-roles-programmatically/)

If you are using Independent Analytics on a large number of sites and don’t want to manually configure which user roles have access to the analytics, you can do so programmatically instead.

Independent Analytics uses the WordPress capabilities system and restricts access based on these three permissions:

- ```
iawp_read_only_authored_access
```

 – view stats for own content only
- ```
iawp_read_only_access
```

 – view all stats
- ```
iawp_full_access
```

 – view all stats and edit the settings

As an example, here’s how you could give editors access to view the analytics, but not edit the settings:

```
function iawp_grant_editor_access() {
    $role = get_role( 'editor' );

    if ( $role && ! $role->has_cap( 'iawp_read_only_access' ) ) {
        $role->add_cap( 'iawp_read_only_access' );
    }
}
add_action( 'admin_init', 'iawp_grant_editor_access' );
```

---

## Temporary solution for “Implicitly marking parameter” deprecation notices

**Source:** [https://independentwp.com/knowledgebase/developer/deprecation-notices/](https://independentwp.com/knowledgebase/developer/deprecation-notices/)

If your site is running PHP 8.4, you will see deprecation notices like this in your debug log:

```
PHP Deprecated: IAWPSCOPED\Illuminate\Support\Str::createUuidsUsing(): Implicitly marking parameter $factory as nullable is deprecated, the explicit nullable type must be used instead in /homepages/34/d4299524784/htdocs/se/wp-content/plugins/independent-analytics-pro/vendor/illuminate/support/Str.php on line 852
```

We are not able to resolve these notices at this time for sites running PHP 8.4. Normally, an application targets a single PHP version, but with WordPress plugins, we face the unique challenge of supporting a wide range of PHP versions. If we update the Illuminate library to address these deprecation notices, it will also remove support for PHP 7 altogether. We still have 10,000+ users on PHP 7, so this is not an option for us. It means that we have to deal with the deprecation notices until nearly all our users are on PHP 8.

With that said, these are not errors or warnings; they are only notices meant to give devs feedback on their code. In order to maintain a cleaner and more relevant debug log, you could suppress deprecation notices from showing up by adding the following code to your **wp-config.php** file (below enabling the debug log):

```
error_reporting(E_ALL & ~E_DEPRECATED & ~E_USER_DEPRECATED);
```

If this doesn’t work properly, then you may have to set this via your php.ini file instead.

Alternatively, you could use the [Debug Log Manager](https://wordpress.org/plugins/debug-log-manager/) plugin to view your debug messages. The advantage of using this plugin is that it collapses identical messages into a single row and has an option to view specific types of messages e.g. fatal, warning, deprecated, etc.

If you are seeing these messages show up publicly on your site, it is because you have enabled the public output of error messages. You can disable this by opening the **wp-config.php** file, locating the line that says 
```
define('WP_DEBUG', true)
```

, and changing 
```
true
```

 to 
```
false
```

.

---

## How to Remove the mmdb File by Disabling Geotracking

**Source:** [https://independentwp.com/knowledgebase/developer/remove-mmdb-file/](https://independentwp.com/knowledgebase/developer/remove-mmdb-file/)

When Independent Analytics is installed, it downloads a file called 
```
iawp-geo-db.mmdb
```

 into the 
```
wp-content/uploads
```

 folder. This file is needed to map IP addresses to their associated regions, enabling the Geographic report to function.

The 
```
iawp-geo-db.mmdb
```

 file is 113 MB. For most sites, this is not a major concern, but if you are managing sites with limited disk space available, it is possible to disable geotracking. This will delete the MMDB file from the site and prevent it from getting re-downloaded. The trade-off is that new data will not be recorded in the Geographic reports once geotracking is disabled.

You can add the following line of code to your **wp-config.php** file to disable geotracking:

```
define('IAWP_DISABLE_GEO_TRACKING', true);
```

Once this is added, the 
```
iawp-geo-db.mmdb
```

 file will be deleted immediately.

If you’re using multi-site, the MMDB file is only installed once on the parent site, so all child sites reference the single copy of the file there.

---

## How to Create Your Own Popular Posts Widget

**Source:** [https://independentwp.com/knowledgebase/developer/popular-posts-widget/](https://independentwp.com/knowledgebase/developer/popular-posts-widget/)

We plan on adding a popular posts widget in a future update, but for now, here are a few ways you can make one yourself.

Independent Analytics stores the number of views each page has in a meta field called  
```
iawp_total_views
```

. This makes it possible to sort your posts by this field in order to get a list of posts sorted by popularity.

You can use this meta field with a plugin or in a solution you code yourself.

## Using a plugin

- [Ultimate Posts Widget](https://wordpress.org/plugins/ultimate-posts-widget/) – this is a good option if you want a classic widget. Order the posts by a custom field and then enter 
```
iawp_total_views
```

 as the field to sort by.
- [Advanced Query Loop](https://wordpress.org/plugins/advanced-query-loop/) – this plugin provides a more customizable version of the built-in Query Loop block. Choose this plugin if you are using the block editor and want to list your popular posts inside the post/page content.

## Coding it yourself

There are two different approaches to programming the widget.

### Using iawp_top_posts()

The [developer API](https://independentwp.com/knowledgebase/developer/developer-api/) has a function called 
```
iawp_top_posts()
```

 that is made for getting popular posts. You can choose any post type and decide the exact date range to use. For instance, you could use this function to get the most popular posts from the past 30 days or from last month.

Here’s an example of how you can create a simple list of popular posts using this function:

```
$posts = iawp_top_posts([
	'post_type' => 'posts', 
	'limit' => 10, 
	'from' => new DateTime('-30 days'), 
	'to' => new DateTime('now'), 
	'sort_by' => 'visitors'
]);

<div>
  <ul>
    <?php foreach($posts as $post) {
      echo '<li>';
      echo '<a href="'. get_permalink($post->id) .'">'. $post->title .'</a>';
      echo ' ('. $post->views .' Views)';
      echo '</li>';
    } ?>
  </ul>
</div>
```

**Note:** The 
```
iawp_top_posts()
```

 function also accepts a 
```
category
```

 argument, which allows you to pass in the ID of a single category to fetch the posts from.

### Using iawp_total_views

Since each page has its total view count stored in 
```
iawp_total_views
```

, you can use it with 
```
WP_Query
```

 to get an ordered list of posts. For example, here’s an example of how to get a list of the 10 most popular posts and output the title of each one:

```
$args = array(
    'post_type'      => 'post',
    'posts_per_page' => 10,
    'meta_key'       => 'iawp_total_views',
    'orderby'        => 'meta_value_num',
    'order'          => 'DESC',
);

$query = new WP_Query($args);

if ($query->have_posts()) {
    while ($query->have_posts()) {
        $query->the_post();
        echo '<h2>' . get_the_title() . '</h2>';
        echo '<p>Views: ' . get_post_meta(get_the_ID(), 'iawp_total_views', true) . '</p>';
    }
} 

wp_reset_postdata();
```

If you’re already familiar with using 
```
WP_Query
```

 and post meta fields, then this might be the best option for your site. The trade-off is that it doesn’t let you specify a date range, so you can only find the all-time most-viewed pages this way.

## Next steps

If you are developing your own plugin or child theme, then you can wrap either code snippet in your own function or shortcode to output wherever needed.

Otherwise, you can put the code snippet into a plugin like [WPCode](https://wordpress.org/plugins/insert-headers-and-footers/), which can also create a shortcode for you. Then, you can add the shortcode anywhere you want to see the list of popular posts.

---

## Detecting IP Addresses with Custom Headers

**Source:** [https://independentwp.com/knowledgebase/developer/detect-ip-address-custom-headers/](https://independentwp.com/knowledgebase/developer/detect-ip-address-custom-headers/)

Independent Analytics uses the visitor’s IP address to get their geolocation and create a unique, anonymous ID to recognize repeat visits.

The following headers are checked to get the IP address from the client:

```
$headers = [
  'HTTP_X_FORWARDED_FOR',
  'HTTP_X_FORWARDED',
  'HTTP_FORWARDED_FOR',
  'HTTP_FORWARDED',
  'REMOTE_ADDR',
  'HTTP_CF_CONNECTING_IP',
  'HTTP_CLIENT_IP',
  'HTTP_INCAP_CLIENT_IP',
  'HTTP_CF_CONNECTING_IP'
];
```

While unusual, some hosting configurations may not share the IP address in any of these headers. If your site shares the IP address in a unique header, you can add it to the list of headers checked using this filter function:

```
add_filter('iawp_header_with_ip_address', function () {
  return 'CUSTOM_HEADER_NAME';
});
```

Replace “CUSTOM_HEADER_NAME” with the name of the header that contains the visitor’s IP, and  Independent Analytics will then be able to recognize their geolocation and create an anonymous ID.

---

## How to Use the Developer API

**Source:** [https://independentwp.com/knowledgebase/developer/developer-api/](https://independentwp.com/knowledgebase/developer/developer-api/)

Independent Analytics includes a simple developer API for anyone who wants to access their data outside of the analytics dashboard.

As of now, the API includes two simple functions, as documented below.

## iawp_analytics(DateTime $from, DateTime $to)

Gets analytics data from the given date range. Includes views, visitors, and sessions.

**Parameters**

- **$from**
- **Type:** DateTime
- **Required**
- **Description:**This is the starting date for your selected date range.
- **$to**
- **Type:** DateTime
- **Required**
- **Description:**This is the ending date for your selected date range.

**Return**

Returns an **IAWP\Public_API\Analytics** object with three properties: views, visitors, and sessions.

```
IAWP\Public_API\Analytics {
  views: 800,
  visitors: 325,
  sessions: 355
}
```

**Example**

Here’s how you would get data from the past three days and output the number of views:

```
$analytics = iawp_analytics(new DateTime('-3 days'), new DateTime());
echo $analytics->views;
```

## iawp_singular_analytics(int $singular_id, DateTime $from, DateTime $to)

Gets analytics data from the given date range for a specific page. Includes views, visitors, and sessions.

**Parameters**

- **$singular_id**
- **Type:** int
- **Required**
- **Description:**This is the ID of the page you want to get stats for.
- **$from**
- **Type:** DateTime
- **Required**
- **Description:**This is the starting date for your selected date range.
- **$to**
- **Type:** DateTime
- **Required**
- **Description:**This is the ending date for your selected date range.

**Return**

Returns an **IAWP\Public_API\Singular_Analytics** object with the three properties: views, visitors, and sessions.

```
IAWP\Public_API\Singular_Analytics {
  views: 400,
  visitors: 125,
  sessions: 255
}
```

**Example**

Here’s how you would get data from the last seven days for a page with an ID of “60” and output the sessions:

```
$singular_analytics = iawp_singular_analytics(60, new DateTime('-7 days'), new DateTime());
echo $singular_analytics->sessions;
```

## iawp_top_posts(array $arguments)

This function gets the top posts by view count. It returns each post’s ID, title, views, visitors, and sessions.

**Arguments**:

- **post_type**
- **Type:** string
- **Optional**
- **Default:** post
- **Description:**The post type you want to fetch, such as 
```
post
```

 or 
```
page
```

.
- **category**
- **Type:** ?int
- **Optional**
- **Default:** null
- **Description:** Choose one category to fetch the posts from.
- **limit**
- **Type:** int
- **Optional**
- **Default:** 10
- **Description:**The maximum number of posts to fetch.
- **from**
- **Type:** DateTime
- **Optional**
- **Default:** 30 days ago
- **Description:**The starting date to check from.
- **to**
- **Type:** DateTime
- **Optional**
- **Default:** today
- **Description:** The ending date to check up to
- **sort_by**
- **Type:** string
- **Optional**
- **Default:** views
- **Description**: acceptable values are 
```
views
```

, 
```
visitors
```

, or 
```
sessions
```

**Return**

Returns an array of objects, each representing one post. Each object includes the ID, title, views, visitors, and sessions.

```
array(2) {  [0]=>  object(stdClass)#774 (5) {    ["id"]=>    int(1270)    ["title"]=>    string(14) "This is a Post"    ["views"]=>    int(215)    ["visitors"]=>    int(172)    ["sessions"]=>    int(186)  }  [1]=>  object(stdClass)#776 (5) {    ["id"]=>    int(1272)    ["title"]=>    string(17) "Another test post"    ["views"]=>    int(199)    ["visitors"]=>    int(140)    ["sessions"]=>    int(153)  }}
```

**Example**

Here’s how you could get the top 10 posts in a category with the ID 5, sorted by visitors from the last 30 days. Then, create a simple clickable list from them:

```
$posts = iawp_top_posts([
	'post_type' => 'posts',
        'category' => 5,
	'limit' => 10, 
	'from' => new DateTime('-30 days'), 
	'to' => new DateTime('now'), 
	'sort_by' => 'visitors'
]);

<div>
  <ul>
    <?php foreach($posts as $post) {
      echo '<li>';
      echo '<a href="'. get_permalink($post->id) .'">'. $post->title .'</a>';
      echo ' ('. $post->views .' Views)';
      echo '</li>';
    } ?>
  </ul>
</div>
```

---

## Fix for BladeOne Error (moving the temp folder)

**Source:** [https://independentwp.com/knowledgebase/developer/pantheon-compatibility-fix-bladeone-error/](https://independentwp.com/knowledgebase/developer/pantheon-compatibility-fix-bladeone-error/)

If your server doesn’t allow writes to the /wp-content/plugins/ folder, you’ll see an error message like this when you first install Independent Analytics:

```
BladeOne Error [Compiling]:
Unable to save the file [/code/wp-content/plugins/independent-analytics-pro/temp/template-cache/partials.report-header_4f3062d1c7ff949f2bb7ee5fc8c000f4f591cf45.bladec].
```

This error occurs because Independent Analytics creates a handful of files for caching purposes inside a folder called “temp” in the plugin folder, and this directory is not writable in the environment.

For this reason, we have provided a filter that will let you modify where the caching files are written. Here’s how it is used:

```
add_filter('iawp_temp_directory_path', function ($value) {  return '/your-path/wp-content/uploads/iawp/';});
```

This example would place the “iawp” folder inside the uploads folder instead. Replace “your-path” with the path on your server that points to wp-content.

Alternatively, you can define the path using the IAWP_TEMP_DIR constant in your wp-config.php file, like this:

```
define('IAWP_TEMP_DIR', '/your-path/wp-content/uploads/iawp/');
```

Independent Analytics will create a “temp” folder that contains two folders named **template-cache** and **device-data-cache** at the target path you provide.

The examples above use the **uploads** folder, but you can choose any directory path you want.

The nature of these cache files is to speed up the analytics dashboard and user device recognition on the front end.

---

