# For Developers

*Category from TaxoPress documentation*

---

## Tag Groups in the WordPress Database

**Source:** [https://taxopress.com/docs/tag-groups-database/](https://taxopress.com/docs/tag-groups-database/)

This guide will introduce you how data for the Tags Groups plugin is stored in the WordPress database.

On the main “Tag Group Administration” screen you will be able to see the Group ID for each Tag Group. In this example, “My Group” has an ID of 1 and there are 3 tags assigned to this group.

tag groups id

In this screenshow below, I’ve used the [Reveal IDs plugin](https://taxopress.com/ids-tags-posts-categories/) to show the IDs of the tags: 54, 55, and 56.

If you go to the _termmeta table in your database, you will find how the terms are connected to the Tag Groups. The term_ids below are 54, 55, and 56. For each term, there an array called _cm_term_group_array and the Group ID is stored as 1.

tags term meta

The labels for each group are stored together in the _options table. In the screenshot below, “not assigned” has an ID of 0 and “My Group” has an ID of 1.

options table tag groups

---

## Useful Constants for the Tag Groups Plugin

**Source:** [https://taxopress.com/docs/constants/](https://taxopress.com/docs/constants/)

The Tag Groups plugin provides some useful tools to debug or optimize the plugin. Add these lines of code to the wp-config.php file to make changes to how Tag Groups runs on your site.

### CM_DEBUG

Use this constant to enable [verbose logging](https://taxopress.com/docs/how-to-use-the-debug-log/). WordPress error logs must be enabled.

```
define( 'CM_DEBUG', 'verbose' );
```

### TAG_GROUPS_CHUNK_SIZE

Define the number of items that are processed in one chunk (i.e. in one Ajax call) during the troubleshooting routines. The default is 30.

```
define( 'TAG_GROUPS_CHUNK_SIZE', 10 );
```

### TAG_GROUPS_CHUNK_TIMEOUT

Define the maximum time in milliseconds that one chunk is allowed to take. The default is 10 * 1000 (10 seconds).

```
define( 'TAG_GROUPS_CHUNK_TIMEOUT', 20000 );
```

### TAG_GROUPS_TASK_TIMEOUT

Define the maximum time in milliseconds that one task is allowed to take. The default is 5 * 60 * 1000 (5 minutes).

```
define( 'TAG_GROUPS_TASK_TIMEOUT', 500000 );
```

### TAG_GROUPS_REST_API_EDITABLE

By default the REST API is read-only. Set this constant to TRUE to make it editable (experimental).

```
define( 'TAG_GROUPS_REST_API_EDITABLE', TRUE );
```

### TAG_GROUPS_DISABLE_CACHE_REBUILD

By default Tag Groups rebuilds some caches after it has been invalidated by registering a new CRON job. Use this constant to disable this behavior.

```
define( 'TAG_GROUPS_DISABLE_CACHE_REBUILD', TRUE );
```

### TAG_GROUPS_ADDITIONAL_TERM_ARGS

This constant lets you define additional fields that will be whitelisted when saving a term (tag) on the backend.

If you set it to TRUE, the following  fields will be allowed:

```
action
_wp_original_http_referer
_wpnonce
_wp_http_referer
term-group
tag-groups-nonce
tag-groups-taxonomy
```

You can also use an array to set any name and the corresponding sanitation callback:

```
define( 'TAG_GROUPS_ADDITIONAL_TERM_ARGS', array(
    'tag-image' => 'sanitize_text_field'
));
```

Permitted callbacks are:

```
intval
sanitize_email
sanitize_file_name
sanitize_html_class
sanitize_key
sanitize_meta
sanitize_mime_type
sanitize_option
sanitize_sql_orderby
sanitize_text_field
sanitize_textarea_field
sanitize_title
sanitize_title_for_query
sanitize_title_with_dashes
sanitize_user
```

### TAG_GROUPS_ALLOW_ALL_HTML_IN_TERM_DESCRIPTION

If you choose((**Front End** settings, **Themes and Appearance**)) to keep HTML in the tag descriptions, this HTML will be sanitized. That means that only the same HTML tags are allowed that WordPress allows in posts. If you need the unsanitized HTML, set this constant to TRUE. You should only do this if you trust all users that can edit terms/tags.

```
define( 'TAG_GROUPS_ALLOW_ALL_HTML_IN_TERM_DESCRIPTION', TRUE );
```

### TAG_GROUPS_AUTO_POST_COUNTS

If you activate the Tag Meta Box, post counts that are displayed in tag clouds and tag lists are calculated by group. If you want to show general post counts, as provided by WordPress, or if you find that processing the post counts uses too much system resources, you can disable it with a constant.

```
define( 'TAG_GROUPS_AUTO_POST_COUNTS', FALSE );
```

You may have to clear the cache after changing this constant.

---

## Modifying the Post Query

**Source:** [https://taxopress.com/docs/modifying-the-post-query/](https://taxopress.com/docs/modifying-the-post-query/)

This feature is still experimental.

In some cases you may want to modify the post query so that it returns only posts that have tags which belong to certain tag groups. You can use the filters **tag_groups_modify_post_query_args** to modify the post arguments that you pass to [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/) or [get_posts](https://developer.wordpress.org/reference/functions/get_posts/) and **tag_groups_modify_post_query** to modify the post query that you pass to [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/).

---

## 1st Method: Filter the arguments

The filter **tag_groups_modify_post_query_args** accepts up to three arguments:

- The array of arguments for the post query. The element with the key “meta_query” will be overwritten.
- An array or a comma-separated list of group IDs.
- The logic relation between the group IDs (default: OR), alternatively AND.

### Example

In the following example you show only posts with tags that belong to the groups with the IDs 1 or 5:

```
// create the array of query parameters as usual
$args = array( 'author' => 12 );
// apply the filter on it, with additional filter parameters
$args = apply_filters( 'tag_groups_modify_post_query_args', $args, array(1,5), 'OR');
// use the arguments in your query
$posts = get_posts( $args );
```

---

## 2nd Method: Filter the query

The filter **tag_groups_modify_post_query** accepts up to three arguments:

- The WP Query object. The element with the key “meta_query” will be overwritten.
- An array or a comma-separated list of group IDs.
- The logic relation between the group IDs (default: OR), alternatively AND.

### Example

In the following example you show only posts with tags that belong to the groups with the IDs 1 or 5:

```
// instantiate the query object with your query parameters
$post_query = new WP_Query(array( 'author' => 12 ));
// apply the filter on it, with additional filter parameters
$post_query = apply_filters( 'tag_groups_modify_post_query', $post_query, array(1,5), 'OR');
// use the query
```

---

## Modifying the Term Query

**Source:** [https://taxopress.com/docs/modifying-the-term-query/](https://taxopress.com/docs/modifying-the-term-query/)

This feature is still experimental.

In some cases you may want to modify the term query so that it returns only tags that belong to certain tag groups. You can use the filter **tag_groups_modify_term_query_args** to modify the array of arguments that you pass to [WP_Term_Query](https://developer.wordpress.org/reference/classes/wp_term_query/) (or [get_terms](https://developer.wordpress.org/reference/functions/get_terms/)).

It accepts up to three arguments:

- The array of arguments that you will use for the term query. The element with the key “meta_query” will be overwritten.
- An array or a comma-separated list of group IDs.
- The logic relation between the group IDs (default: OR), alternatively AND.

In the following example you show only tags that belong to the groups with the IDs 1 or 5:

```
// define your query parameters as usual
$args = array( 'taxonomy' => 'post_tag' );
// apply the filter on them, with additional filter parameters
$args = apply_filters( 'tag_groups_modify_term_query_args', $args, array(1,5), 'OR');
// use the resulting arguments in your query
$tags = get_terms( $args );
```

---

## Using Tag Groups in Theme Files

**Source:** [https://taxopress.com/docs/theme-modifications/](https://taxopress.com/docs/theme-modifications/)

This guide has advice on how to use the Tag Groups plugin inside the PHP templates files of your theme.

---

## Using shortcodes

You can use the native WordPress function [do_shortcode](https://developer.wordpress.org/reference/functions/do_shortcode/) to execute a shortcode in your plugin or theme. Please note that this doesn’t automatically load the scripts that are needed for some features. Make sure that you activate “Always load scripts” in the Tag Groups settings.

```
echo do_shortcode('

  (function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-tabs-6a9d071bc4b46', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-tabs-6a9d071bc4b46');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);

');
```

---

## Retrieving groups and tags with PHP

By default the function **tag_groups_cloud** returns the html for a tabbed tag cloud. If you want to add the tag cloud directly into your theme, you could do it like this:

```
if ( function_exists( 'tag_groups_cloud' ) ) echo tag_groups_cloud( array( 'amount' => 10 ) );
```

The array can, of course, contain also more parameters:

```
array( 'include' => '1,2,5,6', 'amount' => 10 )
```

If the optional second parameter is set to ‘true’, the function will return a multidimensional array containing tag groups and tags:

```
if ( function_exists( 'tag_groups_cloud' ) ) print_r( tag_groups_cloud( array( 'orderby' => 'count', 'order' => 'DESC' ) , true ) );
```

[Click here for more info about the parameters](https://taxopress.com/docs/tabbed-tag-cloud-shortcode-parameters/).

---

## Other Functions

```
post_in_tag_group( $post_id, $tag_group_id )
```

The function **post_in_tag_group** checks whether the post with the given 
```
$post_id
```

 has at least one tag that is part of the tag group with the given 
```
$tag_group_id
```

. The return value is true or false.

---

## REST API

You can request data through custom endpoints of the REST API. [Click here for more on Tag Groups and the REST API](https://taxopress.com/docs/rest-api/).

---

## Filters and Actions in Tag Groups

**Source:** [https://taxopress.com/docs/filters-and-actions/](https://taxopress.com/docs/filters-and-actions/)

This is a guide to the filter hooks and action hooks of the Tag Groups plugin. If a feature is only in the Pro version of the plugin, the corresponding hooks will also be limited to the Pro version.

---

## Actions

Hook into an action with [add_action()](https://developer.wordpress.org/reference/functions/add_action/). Example:

```
function group_is_gone_message( $group_id ) {
 echo "Group {$group_id} is gone!";
}
add_action( 'term_group_deleted', 'group_is_gone_message' );
```

| Action name | Arguments of callback | Triggered when |
| --- | --- | --- |
| term_group_saved | void | after information about (one or more) term groups was saved |
| term_group_deleted | integer: group ID | after a group has been deleted |
| groups_of_term_saved | integer: term IDinteger or array of integers: tag group IDs | after a term’s assignment to groups was saved |

---

## Filters

Hook into a filter with [add_filter()](https://developer.wordpress.org/reference/functions/add_filter/). Examples:

```
function wrap_as_gift( $html ) {
 return "<div class='wrapping_paper'>" . $html . "</div>";
}
add_filter( 'tag_groups_post_terms', 'wrap_as_gift' );
```

```
function add_my_icon_to_accordion_tag( $html, $id, $font_size, $post_count, $shortcode ) {
 if ('tag_groups_accordion' != $shortcode) {
  return $html;
 }
 return $html . '<img src="https://example.com/my-icon.png" style="height:' . $font_size . 'px"/>';
}
add_filter( 'tag_groups_cloud_tag_append', 'add_my_icon_to_accordion_tag', 10, 5 );
```

### View Filters

Filter the arguments or the final HTML of views (templates) that we use for pages or page fragments on the front and back end.

| Filter name | Arguments of callback | Return data type of callback | Filters what |
| --- | --- | --- | --- |
| tag_groups_view-{$view_slug} | string: content (HTML) | string | filters a string that contains the HTML of a view before output. Find possible view_slugs in the code (in the views folders, use the following folder name, a dash and the part before .view.php; example for a filter name: tag_groups_view-partials-admin_notice) |
| tag_groups_premium_view-{$view_slug} | string: content (HTML) | string | see tag_groups_view-{$view_slug}; These are the views int the /premium/views folder. |
| tag_groups_view_atts | array: attributesstring: slug, see tag_groups_view-{$view_slug} | array, must contain same fields and data types as the attributes | filters the attributes before they are being sent to the view |
| tag_groups_premium_view_atts | array: attributesstring: slug, see tag_groups_view-{$view_slug} | array, must contain same fields and data types as the attributes | filters the attributes before they are being sent to the view (premium part) |

### Term Filters

Filter the terms that were retrieved from the database.

| Filter name | Arguments of callback | Return data type of callback | Filters what |
| --- | --- | --- | --- |
| tag_groups_get_terms | WP_Term[]|int[]|string[]|string|WP_Error: the retrieved terms; The type depends on the fields parameter; your callback should also consider errorsinteger: group ID, if applicablestring|string[]: taxonomiesbool|int: Whether to hide terms with post count zerostring: fields What to return. See WP’s get_terms()int: post_id: This parameter is only relevant if the tags depend on the language of a poststring: orderbystring: orderstring: includestring excludeinteger: threshold | same as the first parameter (terms) | filters the terms (tags); please note that not all parameters are in use, depending on the purpose that these tags are used for (tag clouds, backend) |

### Group Filters

Here you can filter data about tag groups after loading from the database, or before saving it.

| Filter name | Arguments of callback | Return data type of callback | Filters what |
| --- | --- | --- | --- |
| tag_groups_load_group_ids | array of integers | array (same as argument) | filters the group IDs after loading from the database |
| tag_groups_load_group_labels | array; keys are group IDs, values are the labels (names) | array (same as argument) | filters the group labels after loading from the database |
| tag_groups_load_group_positions | array: keys are group IDs, values are the positions (determining the order) | array (same as argument) | filters the group positions after loading from the database |
| tag_groups_save_group_ids | array of integers | array (same as argument) | filters the group IDs before saving to the database |
| tag_groups_save_group_labels | array; keys are group IDs, values are the labels (names) | array (same as argument) | filters the group labels before saving to the database |
| tag_groups_save_group_positions | array: keys are group IDs, values are the positions (determining the order) | array (same as argument) | filters the group positions before saving to the database |

### Filters for Tag Clouds

| Filter name | Arguments of callback | Return data type of callback | Filters what |
| --- | --- | --- | --- |
| tag_groups_cloud_tag_inner | string: contentinteger: term IDstring: shortcode identifier | string | filters all tag names in tag clouds |
| tag_groups_cloud_tag_outer | string: content (HTML)integer: term IDstring: shortcode identifier | string | filters all tag names in tag clouds, including the wrapping <span> element |
| tag_groups_cloud_tag_prepend | string: content (HTML)integer: term IDinteger: font sizeinteger: post count of this tagstring: shortcode identifier | string | filters all HTML prepended to tags in tag clouds, including the <span> element; if nothing is prepended, it filters an empty string so that you have the option to anyway prepend something |
| tag_groups_cloud_tag_append | string: content (HTML)integer: term IDinteger: font sizeinteger: post count of this tagstring: shortcode identifier | string | filters all HTML appended to tags in tag clouds, including the element; if nothing is appended, it filters an empty string so that you have the option to anyway append something |
| tag_groups_cloud_html | string: content (HTML)string: shortcode identifierarray: shortcode parameters | string | filters the complete HTML output of all tag clouds |
| tag_groups_tag_title | string: titlestring: shortcode namestring: tag descriptioninteger: post count | string | filters the HTML title attribute of each tag that appears as tooltip on mouseover |
| tag_groups_custom_title | string: titlestring: shortcode nameinteger: post count | string | Filters the title attribute of a tag before replacing all placeholders |

### Filters for Live Post Filters

| Filter name | Arguments of callback | Return data type of callback | Filters what |
| --- | --- | --- | --- |
| tag_groups_excerpt | object: WP_Post object | string | Use a callback function to create a custom excerpt for the placeholder {post_excerpt} in a post template in the Toggle Post Filter, Dynamic Post Filter or Post List. The function needs to take care of proper encoding and sanitation and it must make sure that HTML is self-consistent and that no tags remain open. |
| excerpt_length | integer | integer | Length of the excerpt in post templates |
| excerpt_more | string | string | Ellipse characters (…) if the excerpt is truncated |
| tag_groups_tpf_before_query | array: WP_Query arguments when searching for posts | array (valid arguments for WP_Query) | This callback filters the post query of the Toggle Post Filter just before posts are retrieved. |
| tag_groups_dpf_before_query | array: WP_Query arguments when searching for posts | array (valid arguments for WP_Query) | This callback filters the post query of the Dynamic Post Filter just before posts are retrieved. |
| tag_groups_before_placeholders | string: The HTML templateobject: WP_Post object (the currently processed post) | HTML for a post with optional placeholders | This callback filters the post template before starting to process the placeholders for a post. It is run for each post that is in the queue for output. This filter can be used to create own placeholders or change the post HTML depending on the post. |

### Post Tags (Under Posts)

| Filter name | Arguments of callback | Return data type of callback | Filters what |
| --- | --- | --- | --- |
| tag_groups_post_terms | string: content (HTML) | string | filters a string containing the table of post tags, in TagGroups_Premium_Post_Terms::get_table() |

### Admin

| Filter name | Arguments of callback | Return data type of callback | Filters what |
| --- | --- | --- | --- |
| tag_groups_allow_duplicate_group_names | boolean | boolean | whether it is allowed to add two groups with identical names; default is false if no parent groups are in use, otherwise true |

---

## Tag Groups and the REST API

**Source:** [https://taxopress.com/docs/rest-api/](https://taxopress.com/docs/rest-api/)

The Tag Groups plugin does integrate with the WordPress REST API, however the features below are still considered experimental and not officially supported.

Please be careful with all operations that change data. There will be no confirmation dialog. To be on the safe side, make a backup of your database before you start and test first with non-critical sample data.

POST and PUT requests are handled by WordPress interchangeably.

If you use a client like Postman or RESTED, send the attributes as URLencoded form data (Header: Content-Type application/x-www-form-urlencoded) and use Basic Auth with your application password, available in WP 5.6+ or via 3rd-party plugins (untested and unsupported).

Permissions to create or edit groups can be changed in the Tag Groups Settings (Pro version only).

Add the routes after your site URL. In GET requests you can simply add the arguments as parameters. Any returned data will be JSON-encoded, if applicable.

---

## Authentication

- POST/PUT/DELETE require authentication. You can not perform any of these action if you’re not logged in and have the require capability)
- READ(GET) doesn’t require authentication as data is for both guests and users consumption

---

## Enabling POST/PUT/DELETE

While all GET (retrieve) operations are available by default, all PUT/POST/DELETE (create, update, delete) operations are opt-in. You enable them by adding to your wp-config.php:

```
define( 'TAG_GROUPS_REST_API_EDITABLE', true );
```

Additionally you may have to authenticate, see below.

---

## Groups

### Retrieve one or more groups

Returns all groups or one group with its ID, label, position and terms.

#### Routes

/wp-json/tag-groups/v1/groups/

/wp-json/tag-groups/v1/groups/{id}/

#### Methods

GET

#### Arguments

| Argument | Values | Default | Description |
| --- | --- | --- | --- |
| taxonomy | comma-separated list | all that are selected for tag groups |  |
| hide_empty | boolean | false |  |
| fields | ids, … | ids |  |
| orderby | name, … | name |  |
| order | ASC, DESC | ASC |  |
| type | all, metabox | all | If you choose ‘metabox’, you see all groups that appear in the Tag Meta Box. (Pro version only) |

### Create or update a group

In order to use this endpoint you will need to authenticate as a user who has sufficient permissions.

For creating a new group you use 0 as ID.

#### Routes

/wp-json/tag-groups/v1/groups/{id}/

#### Methods

PUT, POST

#### Arguments

| Argument | Values | Default | Description |
| --- | --- | --- | --- |
| label | string |  | cannot be empty if you create a new group |
| position | integer > 0 | after last existing | The position among the groups. The new group will be added at the end if you omit this argument. |

### Delete a group

In order to use this endpoint you will need to authenticate as a user who has sufficient permissions.

#### Routes

/wp-json/tag-groups/v1/groups/{id}/

#### Methods

DELETE

#### Arguments

not available

---

## Terms (Tags)

### Retrieve one or more terms (tags)

Returns all terms or one term with its ID, label, position and terms.

#### Routes

/wp-json/tag-groups/v1/terms/

/wp-json/tag-groups/v1/terms/{id}/

#### Methods

GET

#### Arguments

| Argument | Values | Default | Description |
| --- | --- | --- | --- |
| taxonomy | comma-separated list, or keyword “public” | all enabled | This endpoint returns only taxonomies that are enabled in the Tag Groups (Pro) settings. The keyword “public”, however, makes it return all public taxonomies, including those that are not-enabled. |
| hide_empty | boolean | false |  |
| fields |  | ids |  |
| group | ID |  | restrict terms to those belonging to a certain group |
| orderby |  | name |  |
| order |  | ASC |  |

### Update the groups of a term (tag)

In order to use this endpoint you will need to authenticate as a user who has sufficient permissions.

#### Routes

/wp-json/tag-groups/v1/terms/{id}/

#### Methods

PUT, POST

#### Arguments

| Argument | Values | Description |
| --- | --- | --- |
| groups | comma-separated list of group IDs | Please note that groups will not be added but overwrite previous data. |

---

## Taxonomies

### Retrieve enabled taxonomies

Returns all taxonomies (slug and name) that are enabled for tag groups or for the Tag Meta Box (Pro only).

#### Routes

/wp-json/tag-groups/v1/taxonomies/

#### Methods

GET

#### Arguments

| Argument | Values | Default | Description |
| --- | --- | --- | --- |
| type | metabox, enabled | enabled |  |

### Update enabled taxonomies

Updates all taxonomies that are enabled for tag groups or for the Tag Meta Box (Pro only).

In order to use this endpoint you will need to authenticate as a user who has sufficient permissions.

#### Routes

/wp-json/tag-groups/v1/taxonomies/

#### Methods

PUT, POST

#### Arguments

| Argument | Values | Description |
| --- | --- | --- |
| enabled | comma-separated list of taxonomy slugs | taxonomies that are enabled for tag groups |
| metabox | comma-separated list of taxonomy slugs | taxonomies that are enabled for the Tag Meta Box (Pro only) |

---

## Post Tags

Only available in the Pro version.

These endpoints retrieve and update only tags in groups as used by this plugin. If you need to handle other post data you should use the built-in endpoints of WP.

### Retrieve post tags

Only posts will appear that you are allowed to view.

The ID is a post ID. For each post the authenticated user’s (if applicable) permissions will be checked.

#### Routes

/wp-json/tag-groups/v1/post-tags/

/wp-json/tag-groups/v1/post-tags/{id}/

#### Methods

GET

#### Arguments

| Argument | Values | Description |
| --- | --- | --- |
| post_type | string (slug) | usually “post_tag” |

### Update post tags

In order to use this endpoint you will need to authenticate as a user who has sufficient permissions.

The ID is a post ID. For each post the authenticated user’s permissions will be checked.

If you add a tag to a post and this tag is not yet assigned to the submitted group, then this group will be assigned.

#### Routes

/wp-json/tag-groups/v1/post-tags/{id}/

#### Methods

PUT, POST

#### Arguments

| Argument | Values | Description |
| --- | --- | --- |
| terms | JSON-encoded array | JSON-encoded array of group IDs as keys and an array of term IDs as each value. Use group ID 0 for unassigned tags. example: {“0″:[1235],”9”:[147]} |
| taxonomy | taxonomy slug |  |

---

