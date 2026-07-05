# Common Code Snippets For Kadence Users

*Category from Kadence Theme Kit Pro - Premium addon for the Kadence Theme documentation*

---

## Common Code Snippets for Kadence Users

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/common-code-snippets-for-kadence-users/](https://www.kadencewp.com/help-center/docs/kadence-theme/common-code-snippets-for-kadence-users/)

Are you a Kadence theme user looking to enhance your WordPress site with powerful customizations? Look no further! In this article, we’ve compiled a collection of essential code snippets tailored specifically for Kadence users. Whether you want to customize your admin experience, optimize site performance, or add new functionality without relying on additional plugins, these snippets will help you unlock new possibilities and streamline your workflow. Dive in to discover how you can easily implement these snippets to make the most out of your Kadence-powered website.

You can add PHP code to your site using a plugin like [Code Snippets](https://www.liquidweb.com/help-docs/software/kadence/blocks/add-custom-filter-or-function-with-code-snippets/) or your functions.php file (in a [child theme](https://www.liquidweb.com/help-docs/software/kadence/resources/what-is-child-theme/)).

## Disable the WordPress Admin Bar for All Users Except Administrators

```
if (!current_user_can('administrator')) {
    add_filter('show_admin_bar', '__return_false');
}
```

## Add Google Analytics

```
function add_google_analytics() {
    echo "<script async src='https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID'></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_TRACKING_ID');
    </script>";
}
add_action('wp_head', 'add_google_analytics');
```

## Change the Excerpt Length

```
function custom_excerpt_length($length) {
    return 20; // Change 20 to the number of words you want in the excerpt
}
add_filter('excerpt_length', 'custom_excerpt_length', 999);
```

## Redirect Users After Login

```
function custom_login_redirect($redirect_to, $request, $user) {
    if (isset($user->roles) && is_array($user->roles)) {
        if (in_array('administrator', $user->roles)) {
            return admin_url(); // Redirect administrators to the dashboard
        } else {
            return home_url(); // Redirect other users to the homepage
        }
    }
    return $redirect_to;
}
add_filter('login_redirect', 'custom_login_redirect', 10, 3);
```

## Customize Kadence Logo Redirect Link

```
function custom_kadence_logo_url() {
    return 'https://example.com';
}
add_filter( 'kadence_logo_url', 'custom_kadence_logo_url' );
```

## Customize the Login Page Logo URL

```
function custom_login_logo_url() {
    return home_url();
}
add_filter('login_headerurl', 'custom_login_logo_url');
```

## Custom Login Logo

```
function custom_login_logo() {
    echo '
    <style type="text/css">
        #login h1 a {
            background-image: url(' . get_stylesheet_directory_uri() . '/images/custom-logo.png) !important;
            background-size: contain !important;
            width: 100% !important;
        }
    </style>';
}
add_action('login_head', 'custom_login_logo');
```

## Add Custom Image Sizes

```
function custom_image_sizes() {
    add_image_size('custom-size', 800, 600, true); // Custom size with crop
}
add_action('after_setup_theme', 'custom_image_sizes');
```

## Allow SVG Uploads

```
function custom_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'custom_mime_types');
```

## Add a Custom User Role

```
function add_custom_user_role() {
    add_role('custom_role', 'Custom Role', array(
        'read' => true,
        'edit_posts' => false,
    ));
}
add_action('init', 'add_custom_user_role');
```

## Add Custom Dashboard Message

```
function custom_dashboard_message() {
    echo '<div class="notice notice-success is-dismissible">
        <p>Welcome to your custom WordPress dashboard!</p>
    </div>';
}
add_action('admin_notices', 'custom_dashboard_message');
```

## Customize Footer Text in WordPress Admin

```
function custom_admin_footer() {
    echo 'Your custom footer text here.';
}
add_filter('admin_footer_text', 'custom_admin_footer');
```

## Changes the Kadence theme Next/Previous buttons to only show posts in the same category as the current post

```
// Add a filter to modify the arguments for post navigation
add_filter('kadence_post_navigation_args', function($args) {
    // Set the 'in_same_term' argument to true, ensuring navigation is limited to posts in the same category or taxonomy term
    $args['in_same_term'] = true;
    
    // Return the modified arguments
    return $args;
});
```

## Changes the number of posts per page for the blog archive

```
// Hook into the 'pre_get_posts' action
add_action('pre_get_posts', 'modify_blog_loop_query');
// Function to modify the main query
function modify_blog_loop_query($query) {
    // Check if it is the main query and not an admin page
    if ($query->is_main_query() && !is_admin()) {
        // Check if this is the blog page (home) or an archive page
        if ($query->is_home() || $query->is_archive()) {
            // Set the number of posts to 20
            $query->set('posts_per_page', 20);
        }
    }
}
```

## Creates a custom placeholder for the Kadence WooCommerce Email Designer

```
// Add a filter to modify the WooCommerce email order body text in Kadence
add_filter('kadence_woomail_order_body_text', function($body, $order) {
    // Replace the custom placeholder with specific custom text in the email body
    $body_text = str_replace('{custom_placeholder}', 'Custom text for placeholder.', $body);
    
    // Return the modified email body text
    return $body_text;
}, 15, 2);
```

## Redirect Old URL to New URL

```
function custom_redirect_old_to_new() {
    if (is_page('old-page')) {
        wp_redirect(home_url('/new-page'), 301);
        exit();
    }
}
add_action('template_redirect', 'custom_redirect_old_to_new');
```

## Add Custom Body Class

```
function custom_body_class($classes) {
    if (is_single()) {
        $classes[] = 'custom-single-class';
    }
    return $classes;
}
add_filter('body_class', 'custom_body_class');
```

## Add Categories to Pages

```
function add_categories_to_pages() {
    register_taxonomy_for_object_type( 'category', 'page' );
}
add_action( 'init', 'add_categories_to_pages' );
```

## Add Tags to Pages

```
function add_tags_to_pages() {
    register_taxonomy_for_object_type( 'post_tag', 'page' );
}
add_action( 'init', 'add_tags_to_pages');
```

## Disable Related Posts for specified posts

```
function kt_disable_post_related( $value ) {

    $ids = array( 567, 35, 37 ); //post ID's that you want the related post disabled

    if ( in_array(get_the_ID(), $ids) ) {
        $value = false;
    }

    return $value;
}
add_filter( 'theme_mod_post_related', 'kt_disable_post_related');
```

## Show Related Posts Based Only on Categories Instead of Both Categories and Tags

```
add_filter( 'kadence_related_posts_use_tags', '__return_false' );
```

## Change Breadcrumbs Delimiter

```
add_filter( 'kadence_breadcrumb_delimiter', function( $delimiter ){
$delimiter = '-';
return $delimiter;
});
```

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

