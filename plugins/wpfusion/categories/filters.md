# Filters

*Category from WP Fusion documentation*

---

## wpf_return_after_login_url

**Source:** [https://wpfusion.com/documentation/filters/wpf_return_after_login_url/](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/)

### Overview

This filter is run when redirecting a user back to a piece of restricted content using the Return After Login feature.

It runs after WP Fusion has already confirmed they now have access to the restricted content (to redirect the user if access is still denied, use the wpf_redirect_url filter).

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $url: The URL that the user will be redirected to (typically the permalink of the restricted content).
- $post_id: The ID of the post that was originally restricted.
- $user: The WP_User object of the user who has logged in.

### Examples

#### Redirect to PDF viewer for Download Manager files

The example below will redirect users directly to the PDF viewer for Download Manager files instead of to the download page after login.

```
function wpf_modify_return_after_login_url( $url, $post_id, $user ) {
    
    // Check if this is a Download Manager file
    if ( 'wpdmpro' === get_post_type( $post_id ) ) {
        
        // Instead of returning to the download page, go directly to the PDF viewer
        $pdf_viewer_url = home_url( '/?__wpdm_pdf_viewer=' . $post_id );
        
        return $pdf_viewer_url;
    }
    
    return $url;
}

add_filter( 'wpf_return_after_login_url', 'wpf_modify_return_after_login_url', 10, 3 );
```

#### Role-based redirect after login

Redirect users to different pages based on their WordPress user role after successfully accessing restricted content.

```
function wpf_role_based_return_redirect( $url, $post_id, $user ) {
    
    // Redirect customers to their account page
    if ( in_array( 'customer', $user->roles ) ) {
        return wc_get_page_permalink( 'myaccount' );
    }
    
    // Redirect subscribers to a welcome page
    if ( in_array( 'subscriber', $user->roles ) ) {
        return home_url( '/welcome/' );
    }
    
    // Redirect administrators to the admin dashboard
    if ( in_array( 'administrator', $user->roles ) ) {
        return admin_url();
    }
    
    return $url;
}

add_filter( 'wpf_return_after_login_url', 'wpf_role_based_return_redirect', 10, 3 );
```

#### Add tracking parameters to return URL

Add UTM parameters or other tracking data to the return URL for analytics purposes.

```
function wpf_add_tracking_to_return_url( $url, $post_id, $user ) {
    
    $tracking_params = array(
        'utm_source'   => 'wp_fusion',
        'utm_medium'   => 'return_login',
        'utm_campaign' => 'content_access',
        'user_id'      => $user->ID,
        'post_id'      => $post_id
    );
    
    return add_query_arg( $tracking_params, $url );
}

add_filter( 'wpf_return_after_login_url', 'wpf_add_tracking_to_return_url', 10, 3 );
```

#### Redirect to course overview for LearnDash lessons

When users access a restricted LearnDash lesson, redirect them to the course overview page instead of the individual lesson.

```
function wpf_learndash_course_redirect( $url, $post_id, $user ) {
    
    // Check if this is a LearnDash lesson
    if ( 'sfwd-lessons' === get_post_type( $post_id ) ) {
        
        // Get the associated course
        $course_id = learndash_get_course_id( $post_id );
        
        if ( $course_id ) {
            return get_permalink( $course_id );
        }
    }
    
    return $url;
}

add_filter( 'wpf_return_after_login_url', 'wpf_learndash_course_redirect', 10, 3 );
```

---

## wpf_query_filter_cache_time

**Source:** [https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/)

### Overview

WP Fusion’s Filter Queries option allows you to modify the results of database queries to exclude content that a user can’t access (based on WP Fusion’s access rules).

When used in Advanced mode, Filter Queries will build up a list of posts a user has access to before the main query is run, and add it to the main query via the post__not_in parameter (in order to exclude any restricted posts).

That list of post IDs is then cached for the current user and post type, to avoid running the same query multiple times in quick succession (which can be quite slow).

This uses wp_cache_set() with a default expiration time of one minute. This can work in two ways depending on your server setup:

1. No object caching: If you are not using any object or memory caching (like Redis), the cache will last for the current page load. That means the same query will run at most once per page load.
2. Object caching: If you use Redis, Memcached, or another object caching solution (we use Redis Object Cache), the list of restricted post IDs will be cached in memory for one minute, even across page views.

The wpf_query_filter_cache_time filter lets you modify the length of time until the cache expires

#### Parameters

- $seconds (int): The number of seconds until the cache expires. Default 60.
- $user_id (int): The user ID for whom the posts are being cached
- $post_types (array): The post types used in the query. The first post type is used in the cache key.

### Examples

#### Extend the cache time

This example extends the cache time to one hour. It will result in fewer slow database queries, but it means that if new content becomes unlocked for a user, it could take up to an hour for it to become visible.

```
function extend_query_filter_cache_time( $time ) {
	return HOUR_IN_SECONDS;
}

add_filter( 'wpf_query_filter_cache_time', 'extend_query_filter_cache_time' );
```

#### Disable caching entirely

This example disables caching completely, ensuring that access rules are checked in real-time for every query. Use with caution as this can impact performance.

```
function disable_query_filter_cache( $time ) {
	return 0;
}

add_filter( 'wpf_query_filter_cache_time', 'disable_query_filter_cache' );
```

#### User-specific cache times

Set different cache times based on user roles or specific users. VIP users get real-time updates, while regular users get longer cache times.

```
function user_specific_cache_time( $time, $user_id, $post_types ) {
    
    $user = get_user_by( 'id', $user_id );
    
    if ( ! $user ) {
        return $time;
    }
    
    // VIP users get real-time access updates
    if ( in_array( 'vip', $user->roles ) ) {
        return 0;
    }
    
    // Premium users get 30-second cache
    if ( in_array( 'premium_member', $user->roles ) ) {
        return 30;
    }
    
    // Regular users get 5-minute cache
    return 5 * MINUTE_IN_SECONDS;
}

add_filter( 'wpf_query_filter_cache_time', 'user_specific_cache_time', 10, 3 );
```

#### Post type specific cache times

Set different cache durations based on the content type being queried. Critical content gets shorter cache times.

```
function post_type_specific_cache_time( $time, $user_id, $post_types ) {
    
    $post_type = $post_types[0] ?? '';
    
    switch ( $post_type ) {
        case 'sfwd-courses':
        case 'sfwd-lessons':
            // LearnDash content - 30 seconds
            return 30;
            
        case 'product':
            // WooCommerce products - 2 minutes
            return 2 * MINUTE_IN_SECONDS;
            
        case 'download':
            // EDD downloads - 5 minutes
            return 5 * MINUTE_IN_SECONDS;
            
        default:
            // Default for other content
            return MINUTE_IN_SECONDS;
    }
}

add_filter( 'wpf_query_filter_cache_time', 'post_type_specific_cache_time', 10, 3 );
```

#### Environment-based cache times

Use different cache durations for development, staging, and production environments.

```
function environment_based_cache_time( $time ) {
    
    if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
        // Development - no caching for immediate testing
        return 0;
    }
    
    if ( defined( 'WP_ENVIRONMENT_TYPE' ) ) {
        switch ( WP_ENVIRONMENT_TYPE ) {
            case 'staging':
                // Staging - short cache
                return 30;
                
            case 'production':
                // Production - longer cache for performance
                return 10 * MINUTE_IN_SECONDS;
        }
    }
    
    return $time;
}

add_filter( 'wpf_query_filter_cache_time', 'environment_based_cache_time' );
```

---

## wpf_api_{$method_name}

**Source:** [https://wpfusion.com/documentation/filters/wpf_api_method_name/](https://wpfusion.com/documentation/filters/wpf_api_method_name/)

### Overview

This filter allows you to override calls to any of WP Fusion’s CRM API methods. It’s inspired by the get_{$meta_type}_metadata filter in WordPress core.

If a non-null value is returned from this filter, it will bypass sending any API calls to your CRM, and instead use your custom function to handle the API call.

This can be used to override any of WP Fusion’s CRM API methods with your own custom functionality.

#### Available method names

For more information see the CRM API documentation.

- get_contact_id
- get_tags
- apply_tags
- remove_tags
- add_contact
- update_contact
- load_contact
- load_contacts
- track_event (with Event Tracking)

#### Parameters

- $result (null): Return a non-null value to override the API call in the CRM class.
- $args (array): The array of arguments being passed to the CRM API class. See the CRM API documentation for reference.

### Examples

#### Enhanced contact lookup with name matching

This example overrides the contact ID lookup with ActiveCampaign so the ID is only returned if the email address, first name, and last name match (for registered users).

```
/**
 * Get the Contact ID for a given email address, with an additional search by name
 * for registered users.
 *
 * @param null  $result The result. Return a non-null value to override the API call.
 * @param array $args   The arguments passed to the CRM API function.
 * @return string The Contact ID, if found.
 */
function custom_wpf_get_contact_id( $result = null, $args ) {

	// $email_address is the only parameter passed to wp_fusion()->crm->get_contact_id(), so it's stored at $args[0].
	$email_address = $args[0];

	$request_uri = wp_fusion()->crm->api_url . 'api/3/contacts?email=' . rawurlencode( $email_address );

	$user = get_user_by( 'email', $email_address );

	if ( $user ) {

		// If it's a registered user, let's also search by their name.

		$request_uri .= '&search=' . rawurlencode( $user->first_name . ' ' . $user->last_name );

	}

	// Make the API call.

	$response = wp_safe_remote_get( $request_uri, wp_fusion()->crm->get_params() );

	if ( is_wp_error( $response ) ) {
		return $response;
	}

	$response = json_decode( wp_remote_retrieve_body( $response ) );

	if ( empty( $response->contacts ) ) {
		// No matching contact found.
		return false;
	} else {
		// Return the ID of the contact.
		return $response->contacts[0]->id;
	}
}

add_filter( 'wpf_api_get_contact_id', 'custom_wpf_get_contact_id', 10, 2 );
```

#### Cache contact IDs to improve performance

Cache contact ID lookups to reduce API calls and improve performance on high-traffic sites.

```
function cache_contact_id_lookups( $result = null, $args ) {
    
    $email_address = $args[0];
    $cache_key = 'wpf_contact_id_' . md5( $email_address );
    
    // Check cache first
    $cached_id = wp_cache_get( $cache_key );
    if ( false !== $cached_id ) {
        return $cached_id;
    }
    
    // Let WP Fusion do the normal lookup
    return $result; // null = continue with normal process
}

// Cache the result after normal lookup
function cache_contact_id_result( $contact_id, $email ) {
    if ( $contact_id && ! is_wp_error( $contact_id ) ) {
        $cache_key = 'wpf_contact_id_' . md5( $email );
        wp_cache_set( $cache_key, $contact_id, '', HOUR_IN_SECONDS );
    }
}

add_filter( 'wpf_api_get_contact_id', 'cache_contact_id_lookups', 10, 2 );
add_action( 'wpf_got_contact_id', 'cache_contact_id_result', 10, 2 );
```

#### Log all API calls for debugging

Override API calls to add comprehensive logging while still executing the original functionality.

```
function log_all_api_calls( $result = null, $args ) {
    
    // Get the method name from the current filter
    $current_filter = current_filter();
    $method_name = str_replace( 'wpf_api_', '', $current_filter );
    
    // Log the API call attempt
    if ( function_exists( 'wpf_log' ) ) {
        wpf_log( 'info', 0, "API Call: {$method_name}", array( 
            'meta_array' => array(
                'method' => $method_name,
                'args' => $args,
                'timestamp' => current_time( 'mysql' )
            )
        ));
    }
    
    // Return null to continue with normal processing
    return $result;
}

// Apply to all API methods
$api_methods = array( 'get_contact_id', 'get_tags', 'apply_tags', 'remove_tags', 
                     'add_contact', 'update_contact', 'load_contact' );

foreach ( $api_methods as $method ) {
    add_filter( "wpf_api_{$method}", 'log_all_api_calls', 5, 2 );
}
```

#### Prevent tag application during maintenance

Temporarily disable tag applications during site maintenance or bulk operations.

```
function prevent_tags_during_maintenance( $result = null, $args ) {
    
    // Check if maintenance mode is active
    if ( defined( 'WP_MAINTENANCE_MODE' ) && WP_MAINTENANCE_MODE ) {
        wpf_log( 'notice', 0, 'Tag application blocked - maintenance mode active' );
        return true; // Return success without actually applying tags
    }
    
    // Check for bulk operations
    if ( doing_action( 'wpf_batch_process' ) ) {
        // Allow normal processing during batch operations
        return $result;
    }
    
    // Check if it's during specified maintenance hours (e.g., 2-4 AM)
    $current_hour = (int) date( 'H' );
    if ( $current_hour >= 2 && $current_hour <= 4 ) {
        wpf_log( 'notice', 0, 'Tag application deferred - maintenance window' );
        
        // Queue the tag application for later
        wp_schedule_single_event( time() + HOUR_IN_SECONDS, 'wpf_delayed_apply_tags', $args );
        
        return true;
    }
    
    return $result;
}

add_filter( 'wpf_api_apply_tags', 'prevent_tags_during_maintenance', 10, 2 );
```

---

## wpf_woocommerce_subscription_sync_fields

**Source:** [https://wpfusion.com/documentation/filters/wpf_woocommerce_subscription_sync_fields/](https://wpfusion.com/documentation/filters/wpf_woocommerce_subscription_sync_fields/)

### Overview

This filter is run when a WooCommerce Subscription’s data is synced to your CRM by WP Fusion:

- At checkout
- When a subscription status changes
- During a subscription renewal
- During a WooCommerce Subscriptions meta batch operation

It can be used to modify the subscription data that’s synced to your CRM.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $update_data (array): The data to sync to your CRM.
- $subscription (WC_Subscription): The subscription object.

### Examples

#### Don’t sync the subscription start date during renewal payments

```
/**
 * Filter the subscription data before syncing to CRM to exclude the start date on renewals.
 *
 * @param array            $update_data  The data to be sent to the CRM.
 * @param WC_Subscription  $subscription The subscription object.
 * @return array Modified data array.
 */
function my_custom_wpf_subscription_sync_filter( $update_data, $subscription ) {

	// Check if the order is a renewal order.
	if ( wcs_order_contains_renewal( $subscription->get_last_order() ) ) {

		// Remove the subscription start date for renewals.
		unset( $update_data['sub_start_date'] );

		// Also remove the start date for each product in the subscription.
		foreach ( $subscription->get_items() as $line_item ) {
			$product_id = $line_item->get_product_id();
			unset( $update_data[ 'sub_start_date_' . $product_id ] );
		}
	}

	return $update_data;
}
add_filter( 'wpf_woocommerce_subscription_sync_fields', 'my_custom_wpf_subscription_sync_filter', 10, 2 );
```

---

## wpf_get_user_id

**Source:** [https://wpfusion.com/documentation/filters/wpf_get_user_id_filter/](https://wpfusion.com/documentation/filters/wpf_get_user_id_filter/)

### Overview

There are some cases where WP Fusion needs to convert a CRM contact ID back to a WordPress user ID, for example:

- When processing incoming webhooks
- When initializing an auto-login session
- When recovering an abandoned cart

In this case, WP Fusion uses the wpf_get_user_id() function.

On sites with large usermeta tables (10,000,000+ rows), this can be slow.

This filter runs before the database query and returning a non-false value allows you to either disable the lookup entirely, or write your own custom logic to handle the lookup and/or caching the results.

#### Parameters

- $user_id (bool|int): False by default, return a non-false value to bypass the database query
- $contact_id (string): The contact ID to look up

### Examples

#### Completely disable the lookup of user IDs by contact ID

This code will bypass the database query and always return 0 for a contact’s user ID.

```
add_filter( 'wpf_get_user_id', '__return_zero' );
```

This is the best solution for performance, but it will have some implications on the functionality of the plugin:

1. The update and update_tags webhooks will no longer work (the add webhook will still work)
2. When syncing abandoned cart data, custom fields for existing users that aren’t part of the checkout form will no longer be synced (this should be ok, it’s rare to sync abandoned cart data that’s not part of WooCommerce)
3. API errors in the logs will no longer be associated with the user ID who triggered the error, they will show as “system”
4. If you are using Auto Login Links, and a person with a user account on the site visits the auto login link as a guest, this will no longer update the cache of tags on their user account

There may also be other unexpected side effects depending on your connected CRM and active plugins. We will continue to update this list.

#### Create a cache of user ID to contact ID pairs

If you are using object caching (Redis, Memcached, etc) you can use wp_cache_set() to add records to the object cache. This can speed up performance considerably on sites with large databases, but it may fill up the cache if you have a lot of users.

```
function cache_user_ids( $user_id, $contact_id ) {

	$user_id = wp_cache_get( "wpf_user_id_{$contact_id}" );

	if ( false !== $user_id ) {
		return $user_id;
	}

	// Get the user with the query.

	global $wpdb;

	$query = $wpdb->prepare(
		"SELECT user_id
			FROM {$wpdb->usermeta}
			WHERE meta_key = %s
			AND meta_value = %s
			ORDER BY user_id ASC",
		WPF_CONTACT_ID_META_KEY,
		$contact_id
	);

	$user_id = $wpdb->get_var( $query );

	if ( $user_id > 100000000 || is_null( $user_id ) ) {
		// If the user ID is greater than 100 million, it's an auto-login user ID, not a real user.
		$user_id = 0; // no user found.
	}

	wp_cache_add( "wpf_user_id_{$contact_id}", $user_id, '', DAY_IN_SECONDS * 7 );

	return $user_id;

}

add_filter( 'wpf_get_user_id', 'cache_user_ids', 10, 2 );
```

This example overrides the built in user ID lookup so that all results are cached in the object cache for seven days.

---

## wpf_event_tickets_apply_tags

**Source:** [https://wpfusion.com/documentation/filters/wpf_event_tickets_apply_tags/](https://wpfusion.com/documentation/filters/wpf_event_tickets_apply_tags/)

### Overview

This filter is run during an Event Tickets registration, after WP Fusion has created or updated an attendee in your CRM, and before tags are applied.

It can be used to modify the tags that are applied to an event attendee.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $apply_tags: (array) This is an array of tag IDs to be applied in your CRM.
- $attendee_id: (int) The Event Tickets attendee ID.
- $event_id: (int) The Event Tickets event ID.
- $ticket_id: (int) The Event Tickets ticket ID.

### Examples

#### Apply tags based on event meta

This example checks the date for the event, and if the date is less than one day in the future, applies an additional tag “Late Registration”.

```
function apply_late_registration_tags( $apply_tags, $attendee_id, $event_id, $ticket_id ) {

	$event_date = get_post_meta( $event_id, '_EventStartDate', true );

	if ( strtotime( $event_date ) < ( time() + DAY_IN_SECONDS ) ) {

		$apply_tags[] = wpf_get_tag_id( 'Late Registration' );

	}

	return $apply_tags;

}

add_filter( 'wpf_event_tickets_apply_tags', 'apply_late_registration_tags', 10, 4 );
```

---

## wpf_api_update_contact_args

**Source:** [https://wpfusion.com/documentation/filters/wpf_api_update_contact_args/](https://wpfusion.com/documentation/filters/wpf_api_update_contact_args/)

### Overview

This filter is run before WP Fusion syncs any custom field data to your CRM for an existing contact.

It can be used to modify the field data only in cases where a contact record already exists (as opposed to wpf_user_update which only runs for registered users, or wpf_woocommerce_customer_data, which run for both new and existing contacts).

It runs after user meta keys have been mapped to CRM field keys, and all data has been formatted via the wpf_format_field_value filter.

#### Parameters

- $args (array): The array of arguments being passed to the CRM API class.

0 (string): The CRM contact ID being updated.
1 (array): An associative array of CRM field keys and their values.

### Examples

#### Never update the first name of an existing contact, with ActiveCampaign

Note that in this case first_name is the API field ID for the first name field, with ActiveCampaign. This will be different with each CRM.

For a reference please check your CRM’s API documentation or refer to the “API name” for custom fields in your CRM.

```
function never_update_first_names( $args ) {

	if ( isset( $args[1]['first_name'] ) ) {
		unset( $args[1]['first_name'] );
	}

	return $args;

}
add_filter( 'wpf_api_update_contact_args', 'never_update_first_names' );
```

---

## wpf_admin_override

**Source:** [https://wpfusion.com/documentation/filters/wpf_admin_override/](https://wpfusion.com/documentation/filters/wpf_admin_override/)

### Overview

By default WP Fusion excludes administrators (users with the manage_options capability) from any access restrictions on content.

This can be disabled by unchecking the box for Exclude Administrators on the General settings tab in the WP Fusion settings.

If you need to customize this behavior, for example to target different user roles, or to exclude specific user IDs, you can use the wpf_admin_override filter.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $override: Whether or not to activate the admin override.

### Examples

#### Check a different capability

The example below will treat all users with the edit_others_posts capability as admins for the purposes of WP Fusion.

```
function custom_admin_override( $override ) {
	
	if ( current_user_can( 'edit_others_posts' ) ) {
		$override = true;
	}
	return $override;
}

add_filter( 'wpf_admin_override', 'custom_admin_override' );
```

#### Check a different role

The example below will treat all Editors as admins for the purposes of WP Fusion.

```
function custom_admin_override( $override ) {
	
	if ( current_user_can( 'editor' ) ) {
		$override = true;
	}
	return $override;
}

add_filter( 'wpf_admin_override', 'custom_admin_override' );
```

---

## wpf_ecommerce_order_args

**Source:** [https://wpfusion.com/documentation/filters/wpf_ecommerce_order_args/](https://wpfusion.com/documentation/filters/wpf_ecommerce_order_args/)

### Overview

This filter is run by the Enhanced Ecommerce addon before the order data is passed to the CRM for processing. It can be used to override the order details that are synced to the CRM.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $order_args: An array of order data:

order_label: The label, for example “WooCommerce Order #123”
order_number: The order umber, for example 123
order_edit_link: The link to edit the order in the admin
payment_method: The payment method
products: An array of products and their prices
line_items: An array of line items (discounts, shipping, etc) and their amounts
total: The order total
currency: The order currency
currency_symbol: The order currency symbol
order_date: The order date
provider: The plugin source, for example woocommerce or easy-digital-downloads
status: The order status
user_id: The user ID who placed the order, 0 for guest
user_email: The customer email address
- $order_id: The ecommerce order ID

### Examples

#### Override order label

This example overrides the order label that’s synced to the CRM.

```
function alt_emails_for_attendees( $order_args, $order_id ) {

	$order_args['order_label'] = 'Custom Label, Order #' . $order_args['order_number'];

	return $order_args;

}

add_filter( 'wpf_ecommerce_order_args', 'override_order_label', 10, 2 );
```

---

## wpf_woocommerce_attendee_data

**Source:** [https://wpfusion.com/documentation/filters/wpf_woocommerce_attendee_data/](https://wpfusion.com/documentation/filters/wpf_woocommerce_attendee_data/)

### Overview

This filter is run during a WooCommerce checkout, while WP Fusion is preparing to sync FooEvents event attendees to your CRM. It can be used to modify the data that is synced for each attendee.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $update_data: (array) This is an array of key value pairs representing WordPress meta fields and their corresponding values.
- $attendee: (array) The FooEvents attendee data.
- $order_id: (int) The WooCommerce order ID

### Examples

#### Sync event dates in separate fields

This example syncs the event date in a separate field, identified by the event ID (like event_date_123).

It can be used to store event dates in multiple custom CRM fields when a customer registers for multiple events simultaneously.

```
function sync_booking_dates( $update_data, $attendee, $order_id ) {

	$product_id = $attendee['WooCommerceEventsProductID'];

	$update_data[ 'event_date_' . $product_id ] = get_post_meta( $product_id, 'WooCommerceEventsDate', true );

	return $update_data;

}

add_action( 'wpf_woocommerce_attendee_data', 'sync_booking_dates', 10, 3 );
```

Please note that to sync the data with your CRM, you will still need to manually create a custom field mapping at the bottom of the Contact Fields list in the WP Fusion settings.

So, for example, if your product ID was 123, you would manually add a new field for event_date_123, set the type to date, and then choose the corresponding custom field in your CRM from the dropdown at the right.

---

## wpf_event_tickets_attendee_data

**Source:** [https://wpfusion.com/documentation/filters/wpf_event_tickets_attendee_data/](https://wpfusion.com/documentation/filters/wpf_event_tickets_attendee_data/)

### Overview

This filter is run during an Event Tickets registration, after WP Fusion has collected the event and attendee data. It can be used to sync additional data from an Event Tickets registration to custom fields in your CRM.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $update_data: (array) This is an array of key value pairs representing WordPress meta fields and their corresponding values.
- $attendee_id: (int) The Event Tickets attendee ID
- $event_id: (int) The Event Tickets event ID
- $ticket_id: (int) The Event Tickets ticket ID

### Examples

#### Override attendee emails

This example overrides the email addresses of attendees to include the event name that the attendee registered for.

The email address synced to the CRM will then be formatted like email+{event_name}@domain.com

```
function alt_emails_for_attendees( $update_data, $attendee_id, $event_id, $ticket_id ) {

	$email_parts = explode( '@', $update_data['user_email'] );

	// Convert email@domain.com to email+firstname@domain.com:
	$update_data['user_email'] = $email_parts[0] . '+' . strtolower( $update_data['first_name'] ) . '@' . $email_parts[1];

	// Or, __alternate method__: Convert email@domain.com to email+event_name@domain.com:
	$event_name                = sanitize_title( $update_data['event_name'];
	$update_data['user_email'] = $email_parts[0] . '+' . $event_name . '@' . $email_parts[1];

	return $update_data;

}

add_filter( 'wpf_event_tickets_attendee_data', 'alt_emails_for_attendees', 10, 4 );
```

#### Sync custom event fields

This example registers a custom field for sync in the Contact Fields settings, and then populates that field value based on a postmeta entry attached to the event ID, with field key custom_field_key.

For more information on syncing data beyond the standard usermeta fields, see Detecting and Syncing Additional Fields.

```
// Add the field as available for sync on the Contact Field tab in the WPF settings

function wpf_event_meta_fields( $fields ) {

	$fields['custom_field'] = array(
		'label'  => 'Event Custom Field',
		'type'   => 'string',
		'group'  => 'tribe_events_event',
		'pseudo' => true,
	);

	return $fields;

}

add_filter( 'wpf_meta_fields', 'wpf_event_meta_fields' );

// Merge the custom field data into the attendee data sent to the CRM.
function sync_custom_event_field( $update_data, $attendee_id, $event_id, $ticket_id ) {

	$update_data['custom_field'] = get_post_meta( $event_id, 'custom_field_key', true );

	return $update_data;

}

add_filter( 'wpf_event_tickets_attendee_data', 'sync_custom_event_field', 10, 4 );
```

---

## wpf_query_filter_get_posts_args

**Source:** [https://wpfusion.com/documentation/filters/wpf_query_filter_get_posts_args/](https://wpfusion.com/documentation/filters/wpf_query_filter_get_posts_args/)

### Overview

WP Fusion’s Filter Queries option allows you to modify the results of database queries to exclude content that a user can’t access (based on WP Fusion’s access rules).

When used in Advanced mode, Filter Queries will build up a list of posts a user has access to before the main query is run, and add it to the main query via the post__not_in parameter (in order to exclude any restricted posts).

The wpf_query_filter_get_posts_args filter lets you modify the arguments going into that query.

#### Parameters

- $args (array): WP_Query arguments

### Examples

#### Pre-query more posts

To protect the stability of your site, the pre-query will load at most 200 restricted posts. However if you have more than 200 posts of that post type which are protected by WP Fusion’s access rules, this could cause users to see posts they don’t have access to.

The example below extends the pre-query to check the first 1000 restricted posts.

Note that this can cause multiple thousands of extra database queries per page load, so it should be used with extreme caution.

```
function filter_query_posts_args( $args ) {

	$args['posts_per_page'] = 1000;

	return $args;

}

add_filter( 'wpf_query_filter_get_posts_args', 'filter_query_posts_args' );
```

It’s also possible to extend the `posts_per_page` limit based on the post type being queried.

Here’s an example that runs Filter Queries on 1,000 protected posts only when the post type is a LearnDash lesson. For other post types, the default value of 200 will be used.

```
function filter_query_posts_args( $args ) {

	if ( 'sfwd-lessons' === $args['post_type'] ) {
		$args['posts_per_page'] = 1000;
	}

	return $args;

}

add_filter( 'wpf_query_filter_get_posts_args', 'filter_query_posts_args' );
```

#### Activate Ludicrous Mode

By default, the pre-query only looks at posts that have WP Fusion access rules saved to their postmeta.

This provides improved performance, but it means that posts protected by post type rules or taxonomy term rules will not necessarily be excluded from the results, even in Advanced mode.

This snippet removes the meta_query and also sets the posts_per_page to 5000. Effectively this means that every post of the post type will be pre-checked for access before the query is run.

If you have a lot of posts and/or taxonomy terms, this will almost certainly crash your site. Use with caution.

```
function filter_query_ludicrous_mode( $args ) {

	$args['posts_per_page'] = 5000;
	unset( $args['meta_query'] );

	return $args;

}

add_filter( 'wpf_query_filter_get_posts_args', 'filter_query_ludicrous_mode' );
```

This functionality could be made more performant by running it on a schedule (or as content is published) and building up a cache of the access list for every user on the site, ideally in a custom database table. However that is beyond the scope of this article.

---

## wpf_should_filter_query

**Source:** [https://wpfusion.com/documentation/filters/wpf_should_filter_query/](https://wpfusion.com/documentation/filters/wpf_should_filter_query/)

### Overview

WP Fusion’s Filter Queries option allows you to modify the results of database queries to exclude content that a user can’t access (based on WP Fusion’s access rules).

There are some situations where you may need to bypass query filtering on a specific post type or in a certain context, in that case you can use the wpf_should_filter_query filter.

#### Parameters

- $should_filter (bool): Whether or not to apply query filtering to the query
- $query (WP_Query): The query

### Examples

#### Bypass query filtering on the home page if the post type is an event

This example bypasses query filtering on the The Events Calendar events list if the current page is the home page.

```
function bypass_filter_queries_for_events( $should_filter, $query ) {

	if ( is_front_page() && 'tribe_events' == $query->get( 'post_type' ) ) {
		return false;
	}

	return $should_filter;

}

add_filter( 'wpf_should_filter_query', 'bypass_filter_queries_for_events', 10, 2 );
```

---

## wpf_forms_pre_submission

**Source:** [https://wpfusion.com/documentation/filters/wpf_forms_pre_submission/](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission/)

### Overview

This filter is run when WP Fusion is processing a form submission from one of our supported form plugins.

It is triggered after the initial contact ID lookup in the CRM, but before any data has been synced. It can be used to modify the data that’s sent to the CRM.

To use the code examples below, add them to your active theme’s functions.php file.

#### Alternate filters

For more precise targeting there are two alternate filters with the same arguments:

- wpf_{integration slug}_pre_submission : Where {integration_slug} is the name of the form integration, for example wpf_gform_apply_tags

#### Parameters

- $update_data (array): This is an array of data that will be synced to the CRM. The array keys are the custom field IDs in your CRM.
- $user_id (int): The user who submitted the form, 0 if a guest
- $contact_id (string): The ID of the contact record created / updated by the form submission
- $form_id (int): The ID of the submitted form
- $entry_id (int): The ID of the submitted form entry

### Examples

#### Append to a field instead of overwriting it

In this case, we have a form field mapped to the ContactNotes field in Infusionsoft, but instead of replacing the notes, we’d like to update them.

This example runs when a form is submitted and first loads the contact’s ContactNotes from Infusionsoft. If there are already notes on the contact record, the new notes are appended to the existing notes before being sent back to the CRM.

```
function append_to_notes_field( $update_data, $user_id, $contact_id, $form_id ) {

	if ( ! empty( $update_data['ContactNotes'] ) && false !== $contact_id ) {

		// If we're updating an existing contact and there are notes in the data

		wp_fusion()->crm->connect(); // Set up the Infusionsoft API

		$result = wp_fusion()->crm->app->loadCon( $contact_id, array( 'ContactNotes' ) ); // Load the contact

		if ( ! is_wp_error( $result ) && ! empty( $result['ContactNotes'] ) ) {

			// Append the new notes to the existing notes (PHP_EOL adds a line break)
			$update_data['ContactNotes'] = $result['ContactNotes'] . PHP_EOL . $update_data['ContactNotes'];
		}
	}

	return $update_data;

}

add_filter( 'wpf_forms_pre_submission', 'append_to_notes_field', 10, 4 );
```

#### Include additional entry meta from Gravity Forms

This example runs when a form is submitted and lets you sync additional fields to your CRM from the database, either form entry metadata saved via GFAPI::update_entry_field() or user metadata saved via update_user_meta().

```
function merge_additional_form_data( $update_data, $user_id, $contact_id, $form_id, $entry_id ) {

	$entry = GFAPI::get_entry( $entry_id );

	$update_data['_fieldOne'] = $entry['8'];
	$update_data['_fieldTwo'] = get_user_meta( $user_id, 'custom_field_key', true );

	return $update_data;

}

add_filter( 'wpf_forms_pre_submission', 'merge_additional_form_data', 10, 5 );
```

---

## wpf_event_espresso_customer_data

**Source:** [https://wpfusion.com/documentation/filters/wpf_event_espresso_customer_data/](https://wpfusion.com/documentation/filters/wpf_event_espresso_customer_data/)

### Overview

This filter is run during an Event Espresso registration, after WP Fusion has extracted the customer data from the registration object. It can be used to sync additional data from an Event Espresso registration to custom fields in your CRM.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $order_data: This is an array of key value pairs representing WordPress meta fields and their corresponding values.
- $registration: The Event Espresso registration object

### Examples

#### Override attendee emails

This example overrides the email addresses of attendees to include the event name that the attendee registered for.

The email address synced to the CRM will then be formatted like email+{event_name}@domain.com

```
function alt_emails_for_attendees( $update_data, $registration ) {

	$email_parts = explode( '@', $update_data['user_email'] );

	// Convert email@domain.com to email+firstname@domain.com:
	$update_data['user_email'] = $email_parts[0] . '+' . strtolower( $update_data['first_name'] ) . '@' . $email_parts[1];

	// Or, __alternate method__: Convert email@domain.com to email+event_name@domain.com:
	$event      = $registration->event();
	$event_name = sanitize_title( $event->name() );
	$event_name = str_replace( '-', '_', $event_name );

	$update_data['user_email'] = $email_parts[0] . '+' . $event_name . '@' . $email_parts[1];

	return $update_data;

}

add_filter( 'wpf_event_espresso_customer_data', 'alt_emails_for_attendees', 10, 2 );
```

#### Sync event meta

This example grabs two postmeta keys (custom_field_one and custom_field_two) off the Event Espresso event and merges them into the data synced to the CRM for the attendee. This can be used to sync additional event properties to the attendee’s contact record in the CRM.

To enable the custom fields for sync they must first be enabled for sync and mapped to custom fields in your CRM via the Contact Fields settings.

```
function sync_event_custom_fields( $update_data, $registration ) {

	$event_id = $registration->event_ID();

	$update_data['custom_field_one'] = get_post_meta( $event_id, 'custom_field_one', true );
	$update_data['custom_field_two'] = get_post_meta( $event_id, 'custom_field_two', true );

	return $update_data;

}

add_filter( 'wpf_event_espresso_customer_data', 'sync_event_custom_fields', 10, 2 );
```

---

## wpf_forms_pre_submission_contact_id

**Source:** [https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/)

### Overview

This filter is run when WP Fusion is processing a form submission from one of our supported form plugins.

It is triggered after WP Fusion has attempted to locate a contact ID in the CRM for the form submission, but before a contact record is created / updated, and before any tags are applied.

To use the code examples below, add them to your active theme’s functions.php file.

#### Alternate filters

For more precise targeting there are two alternate filters with the same arguments:

- wpf_{integration slug}_pre_submission_contact_id : Where {integration_slug} is the name of the form integration, for example wpf_gform_pre_submission_contact_id

#### Parameters

- $contact_id (string|false): The contact ID in the CRM to be updated, or false if no match found
- $update_data (array): The data about to be synced to the CRM, in key => value pairs
- $user_id (int): The ID of the registered user who submitted the form, or 0 for guest
- $form_id (int): The ID of the submitted form

### Examples

#### Force all form submissions to create a new contact record

This is a simple example that stops WP Fusion from trying update existing contact records in the CRM from form submissions. All form submissions will create a new contact.

```
add_filter( 'wpf_forms_pre_submission_contact_id', '__return_false' );
```

#### Force all form submissions to create a new contact record by form ID

This is the same as the example above but only runs on form IDs 22 and 29

```
function always_create_new_contacts( $contact_id, $update_data, $user_id, $form_id ) {

	if ( 22 == $form_id || 29 == $form_id ) {
		$contact_id = false;
	}

	return $contact_id;

}

add_filter( 'wpf_forms_pre_submission_contact_id', 'always_create_new_contacts', 10, 4 );
```

#### Use custom lookup logic for contact records – Infusionsoft

By default WP Fusion uses the first email address found on a submitted form when determining whether to create or update a contact record in your CRM.

In some cases you may want to use more complex rules for determining when a new record should be created.

This example for Infusionsoft attempts to match against the Email Address 2 and Email Address 3 fields in addition to the Email Address field. That means that if the form is submitted and the entered email matches the Email Address 3 field on an existing contact, that contact record will be updated (rather than a new contact record being added).

```
function wpf_lookup_additional_emails( $contact_id, $update_data, $user_id, $form_id ) {

	if ( empty( $contact_id ) ) {

		$email = $update_data['Email'];

		wp_fusion()->crm->connect();

		$query  = array( 'EmailAddress2' => $email );
		$result = wp_fusion()->crm->app->dsQuery( 'Contact', 1, 0, $query, array( 'Id' ) );

		if ( isset( $result[0]['Id'] ) ) {

			return $result[0]['Id'];

		}

		$query  = array( 'EmailAddress3' => $email );
		$result = wp_fusion()->crm->app->dsQuery( 'Contact', 1, 0, $query, array( 'Id' ) );

		if ( isset( $result[0]['Id'] ) ) {

			return $result[0]['Id'];

		}
	}

	return $contact_id;

}

add_filter( 'wpf_forms_pre_submission_contact_id', 'wpf_lookup_additional_emails', 10, 4 );
```

#### Use custom lookup logic for contact records – Salesforce

This example for Salesforce only updates an existing contact record if the email address, first name, and last name match. Otherwise a new record will be created.

```
function wpf_forms_name_lookup( $contact_id, $update_data, $user_id, $form_id ) {

	$params = wp_fusion()->crm->get_params(); // get the authentication headers and other API params

	// URL-encode the three lookup fields

	$email_address = urlencode( $update_data['Email'] );
	$first_name    = urlencode( $update_data['FirstName'] );
	$last_name     = urlencode( $update_data['LastName'] );

	// this is the SOQL, Salesforce Object Query Language:

	$query_args = array(
		'q' => "SELECT Id from {wp_fusion()->crm->object_type} WHERE Email = '{$email_address}' AND FirstName = '{$first_name}' AND LastName = '{$last_name}'",
	);

	$request  = add_query_arg( $query_args, wp_fusion()->crm->instance_url . '/services/data/v42.0/query' );
	$response = wp_remote_get( $request, $params );

	if ( is_wp_error( $response ) ) {

		// If an error was encountered, log it
		wpf_log( 'error', $user_id, 'Error looking up Salesforce contact: ' . $response->get_error_message() );
		return false;

	}

	$response = json_decode( wp_remote_retrieve_body( $response ) );

	if ( empty( $response ) || empty( $response->records ) ) {

		// If no match was found, return false so a new contact is created
		return false;

	}

	// Return the ID of the contact that matched the email, first name, and last name
	// It's this contact ID that will be updated by the form submission

	return $response->records[0]->Id;

}

add_filter( 'wpf_forms_pre_submission_contact_id', 'wpf_forms_name_lookup', 10, 4 );
```

---

## wpf_import_user

**Source:** [https://wpfusion.com/documentation/filters/wpf_import_user/](https://wpfusion.com/documentation/filters/wpf_import_user/)

### Overview

This filter runs when a new user is being imported, either via the import tool or a webhook. It allows you to modify a user’s meta data after it’s been loaded from the CRM, but before the new user has been inserted.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $user_meta: Array of user meta data, in the format array('meta_field' => 'value').
- $contact_id: CRM contact ID of the user being imported

### Examples

#### Set imported users to have usernames generated from their first and last names, instead of email address

```
function wpf_use_names_as_logins( $user_meta ) {

	$user_meta['user_login'] = strtolower( $user_meta['first_name'] . $user_meta['last_name'] );

	return $user_meta;

}

add_filter( 'wpf_import_user', 'wpf_use_names_as_logins' );
```

#### Set imported users to have usernames generated from their first name and a random number, instead of email address

```
function wpf_use_names_as_logins( $user_meta ) {

	$user_meta['user_login'] = strtolower( $user_meta['first_name'] ) . rand(10, 1000);
	
	return $user_meta;

}

add_filter( 'wpf_import_user', 'wpf_use_names_as_logins' );
```

---

## wpf_forms_apply_tags

**Source:** [https://wpfusion.com/documentation/filters/wpf_forms_apply_tags/](https://wpfusion.com/documentation/filters/wpf_forms_apply_tags/)

### Overview

This filter is run when WP Fusion is processing a form submission from one of our supported form plugins.

It is triggered after the contact record has been created / updated in the CRM, but before any tags have been applied. It can be used to modify the tags that will be applied as part of the form submission.

To use the code examples below, add them to your active theme’s functions.php file.

#### Alternate filters

For more precise targeting there are two alternate filters with the same arguments:

- wpf_{integration slug}_apply_tags : Where {integration_slug} is the name of the form integration, for example wpf_gform_apply_tags
- wpf_{integration slug}_apply_tags_{form_id} : Where {form_id} is the ID of the submitted form, for example wpf_ninja_forms_apply_tags_1

#### Parameters

- $apply_tags (array): This is an array of tags that will be applied to the person who submitted the form
- $user_id (int): The user who submitted the form, 0 if a guest
- $contact_id (string): The ID of the contact record created / updated by the form submission
- $form_id (int): The ID of the submitted form

### Examples

#### Apply an additional tag based on a cookie

This example checks to see if the person submitting the form came to the site via an AffiliateWP affiliate link, and is being tracked with the affwp_refcookie. If so, the tag Affiliate Tag is applied.

```
function merge_affiliate_tags( $apply_tags, $user_id, $contact_id, $form_id ) {

	if ( isset( $_COOKIE['affwp_ref'] ) ) {
		$apply_tags[] = 'Affiliate Tag';
	}

	return $apply_tags;

}

add_filter( 'wpf_forms_apply_tags', 'merge_affiliate_tags', 10, 4 );
```

#### Use “Round Robin” assignment for leads

This example randomly assigns each lead a tag of either Tag A, Tag B or Tag C. This is similar to the “Round Robin” owner assignment in sales CRMs like Infusionsoft, and can be used to randomly assign leads to a sales rep.

```
function apply_round_robin_tags( $apply_tags ) {

	// To properly randomize the tags we'll do it based on the current time

	$time = date( 's' );

	// $time will be 00 to 59

	if ( $time < 20 ) { $apply_tags[] = 'Tag A'; } elseif ( $time >= 20 && $time < 40 ) {
		$apply_tags[] = 'Tag B';
	} elseif ( $time < 60 ) {
		$apply_tags[] = 'Tag C';
	}

	return $apply_tags;

}

add_filter( 'wpf_forms_apply_tags', 'apply_round_robin_tags' );
```

---

## wpf_salesforce_query_args

**Source:** [https://wpfusion.com/documentation/filters/wpf_salesforce_query_args/](https://wpfusion.com/documentation/filters/wpf_salesforce_query_args/)

### Overview

WP Fusion uses the Salesforce Object Query Language (SOQL) to search for records in your Salesforce account.

For example when searching for a contact record by email address, loading the tags or topics for a contact, and applying / removing tags or topics from a contact.

Before WP Fusion executes any Salesforce query, the query is passed through the wpf_salesforce_query_args filter, which allows you to modify the query before it’s sent.

#### Parameters

- $query_args (array): The query arguments
- $method (string): The API method being performed
- $searchfield (string): The value being searched for

The default query arguments, by method, are:

Method: get_contact_id

```
array( "q" => "SELECT Id from Contact WHERE Email = '{$email_address}'" )
```

Method: get_topics

```
array( "q" => "SELECT TopicId from TopicAssignment WHERE EntityId = '{$contact_id}'" );
```

Method: load_contacts

```
array( "q" => "SELECT EntityId from TopicAssignment WHERE TopicId = '{$topic_id}'" );
```

### Examples

#### Use a custom email field for contact lookups

By default WP Fusion uses the Email field for looking up a contact ID. This example changes that lookup field to a custom field on a custom object type, Email__c:

```
function custom_wpf_query_args( $query_args, $method, $searchfield ) {

	if ( 'get_contact_id' == $method ) {

		// In this case the $searchfield is the email address we're trying to get the contact ID of
		// The default value of wp_fusion()->crm->object_type is Contact

		$query_args['q'] = "SELECT Id from {wp_fusion()->crm->object_type} WHERE Email__c = '{$searchfield}'";

	}

	return $query_args;
}

add_filter( 'wpf_salesforce_query_args', 'custom_wpf_query_args', 10, 3 );
```

---

## wpf_woocommerce_subscription_status_apply_tags

**Source:** [https://wpfusion.com/documentation/filters/wpf_woocommerce_subscription_status_apply_tags/](https://wpfusion.com/documentation/filters/wpf_woocommerce_subscription_status_apply_tags/)

### Overview

This filter is run during a WooCommerce subscription status change, before WP Fusion has applied any tags to the customer.  It can be used to modify the tags that will be applied to the customer.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $apply_tags: This is an array of tags that will be applied to the customer
- $status: The current subscription status (i.e. active, pending-cancel, on-hold)
- $subscription: The subscription object

### Examples

#### Don’t apply any tags when a subscription status changes to active

This is useful if you need to manually approve new orders and you don’t want any tags applied at checkout that would unlock other content.

```
function custom_wpf_status_check( $apply_tags, $status, $subscription ) {

	if ( 'active' == $status ) {
		return false;
	}

	return $apply_tags;

}

add_filter( 'wpf_woocommerce_subscription_status_apply_tags', 'custom_wpf_status_check', 10, 3 );
```

---

## wpf_get_user_meta

**Source:** [https://wpfusion.com/documentation/filters/wpf_get_user_meta/](https://wpfusion.com/documentation/filters/wpf_get_user_meta/)

### Overview

During a user registration or when running a Push User Meta batch operation, WP Fusion gets all of the available metadata for a user out of the wp_usermeta database table, using get_user_meta( $user_id );, and then any enabled fields are synced on to your CRM.

This filter allows you to modify the array of metadata that’s gathered for each user.

It’s most commonly used to include user data found in different database tables, for example data added by a membership plugin.

#### Parameters

- $user_meta: Array of user meta data gathered from the database, in the format array( 'meta_field' => 'value' ).
- $user_id: ID for the user being updated.

### Examples

#### Get an XProfile field value out of the BuddyPress XProfile tables

WP Fusion already includes this code in the BuddyPress / BuddyBoss integration, but we’ll use it here as an example for how wpf_get_user_meta works.

```
function my_wpf_xprofile_data( $user_meta, $user_id ) {
	
	$xprofile_data = BP_XProfile_ProfileData::get_all_for_user( $user_id );

	if ( isset( $xprofile_data['Birthday'] ) ) {
		$user_meta['birthday'] = $xprofile_data['Birthday']['field_data'];
	}

	return $user_meta;

}

add_filter( 'wpf_get_user_meta', 'my_wpf_xprofile_data', 10, 2 );
```

In this example before the data is sent to the CRM, the value for the “Birthday” field is extracted from the XProfile database tables and merged into the array.

---

## wpf_woocommerce_apply_tags_checkout

**Source:** [https://wpfusion.com/documentation/filters/wpf_woocommerce_apply_tags_checkout/](https://wpfusion.com/documentation/filters/wpf_woocommerce_apply_tags_checkout/)

### Overview

This filter is run during a WooCommerce checkout, before WP Fusion has applied any tags to the customer.  It can be used to modify the tags that will be applied to the customer. To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $apply_tags: This is an array of tags that will be applied to the customer
- $order: The WooCommerce order object

### Examples

#### Apply an additional tag if the order value is over $100

```
function high_value_tag( $apply_tags, $order ) {

	if ( $order->get_total() > 100 ) {
		$apply_tags[] = 'High value customer';
	}

	return $apply_tags;

}

add_filter( 'wpf_woocommerce_apply_tags_checkout', 'high_value_tag', 10, 2 );
```

#### Force re-apply tags with every renewal order

By default WP Fusion does not re-apply the tags applied at checkout with every WooCommerce Subscriptions renewal order, because in most cases the tags haven’t changed.

This example forces the tags to be re-applied with every renewal payment.

```
function force_reapply_tags_on_renewal() {
	remove_filter( 'wpf_woocommerce_apply_tags_checkout', array( wp_fusion()->integrations->{'woo-subscriptions'}, 'maybe_skip_tags_on_renewal' ) );
}

add_action( 'wp_fusion_init', 'force_reapply_tags_on_renewal' );
```

---

## wpf_woocommerce_user_id

**Source:** [https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/](https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/)

### Overview

When WP Fusion processes a WooCommerce checkout for a registered user, it uses the current user’s ID to determine the user’s contact record in your CRM.

That way if a user checks out with a different billing email, their original contact record is properly updated— instead of creating a new contact record and fragmenting your data.

Generally this is desirable, but there may be situations where you don’t want orders to be associated with the current user. For example if your WooCommerce checkouts are being made by agents who are purchasing on behalf of their customers. In that case you would want a new contact record to be created for the customer, rather than updating the contact record of the agent.

The wpf_woocommerce_user_id filter allows you to modify the user ID that WP Fusion uses to determine which user should be associated with the checkout. Returning false from the filter will tell WP Fusion to treat the checkout as a guest checkout.

#### Parameters

- $user_id (int): The user ID to be used for the checkout
- $order (object): The WooCommerce order object

### Examples

#### Treat all checkouts as guest checkouts

```
add_filter( 'wpf_woocommerce_user_id', function( $user_id, $order ) {
	return false;
}, 10, 2 );
```

---

## wpf_format_field_value

**Source:** [https://wpfusion.com/documentation/filters/wpf_format_field_value/](https://wpfusion.com/documentation/filters/wpf_format_field_value/)

### Overview

Most of WP Fusion’s supported CRMs support different custom field types in addition to text fields, for example dates, picklists, dropdowns, and radios.

The wpf_format_field_value filter is run on each field value before it’s synced to your CRM, to convert WordPress formatted data into the appropriate format in your CRM.

#### Parameters

- $value: (mixed) The field value that will be synced to the CRM
- $field_type: (string) The field type as shown on the Contact Fields list in the WP Fusion settings
- $field: (string) The field’s API name in your CRM

### How it works in WP Fusion

This happens in two places, at two priorities. In the class WPF_CRM_Base there is a format_field_value() function attached to priority 5 that does some standardized formatting for all CRMs:

- Dates are converted into Unix timestamps
- Array values (like multiselects) are combined into a comma-separated string
- Checkbox values are converted to 1 if they are checked or null if they are un-checked.

Then in each CRM integration module there is a format_field_value() function attached to priority 10, which does additional formatting based on that CRM’s API. For example:

- With ActiveCampaign, multiselect values are separated with pipes || to properly update multiselect fields
- With Infusionsoft dates are converted from their UNIX timestamps into ISO 8601 dates
- With Mautic states and countries are converted into Mautic-compatible state and country abbreviation codes

### Examples

You may sometimes need to change the way field values are formatted before being synced to your CRM in addition to WP Fusion’s default formatting. To use the code examples below, add them to your active theme’s functions.php file.

#### Convert Yes / No strings to checkbox values

This example converts “Yes” and “No” values submitted on a form to boolean values, for updating checkbox-type fields in your CRM.

```
function custom_format_checkbox( $value, $field_type, $field ) {

	if ( 'Yes' == $value ) {
		$value = true;
	} elseif ( 'No' == $value ) {
		$value = null;
	}

	return $value;

}

add_filter( 'wpf_format_field_value', 'custom_format_checkbox', 20, 3 );
```

#### Convert checkbox values to strings

WP Fusion syncs checkbox values to your CRM as boolean true and null, which is the most compatible with updating checkbox and radio type custom fields in your CRM.

However, you may want to see the actual text “Yes” and “No” in your CRM. This example converts those boolean values back to strings.

```
function custom_format_checkbox( $value, $field_type, $field ) {

	if ( 'checkbox' == $field_type ) {

		if ( ! empty( filter_var( $value, FILTER_VALIDATE_BOOLEAN ) ) ) {
			$value = 'Yes';
		} else {
			$value = 'No';
		}
	}

	return $value;

}

add_filter( 'wpf_format_field_value', 'custom_format_checkbox', 20, 3 );
```

#### Prepend a 1 to phone numbers

If your CRM has a phone-type field that enforces a certain length, you may need to prepend a country code to the number for it to sync properly.

```
function custom_format_phone( $value, $field_type, $field ) {

	if ( 'phone' == $field && strlen( (string) $value ) <= 10 ) {

		$value = '1' . $value;

	}

	return $value;

}

add_filter( 'wpf_format_field_value', 'custom_format_phone', 20, 3 );
```

#### Custom formatting for dates

You may want to store a date in a text field in a different format from the default for your CRM.

```
function custom_format_date( $value, $field_type, $field ) {

	if ( $field_type == 'datepicker' || $field_type == 'date' ) {

		$value = date( 'Y-m-d', strtotime( $value ) );

	}

	return $value;

}

add_filter( 'wpf_format_field_value', 'custom_format_date', 20, 3 );
```

#### Force an empty value

By default WP Fusion won’t sync an empty text value to your CRM, to avoid overwriting existing data. You can override this by setting the field’s value to null.

In this example we’ll set WP Fusion to always send a null value any time data isn’t specified for the CRM field with key mycrmfieldkey:

```
function custom_format_empty_fields( $value, $field_type, $field ) {

	if ( 'mycrmfieldkey' == $field && empty( $value ) ) {

		$value = null;

	}

	return $value;

}

add_filter( 'wpf_format_field_value', 'custom_format_empty_fields', 4, 3 );
```

Or, to target based on field type:

```
function custom_format_empty_dates( $value, $field_type, $field ) {

	if ( 'date' === $field_type && empty( $value ) ) {

		$value = null;

	}

	return $value;

}

add_filter( 'wpf_format_field_value', 'custom_format_empty_dates', 4, 3 );
```

Note that the priority on the filters is 4, so it runs before WP Fusion has done any other formatting on the field value.

---

## wpf_woocommerce_customer_data

**Source:** [https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/)

### Overview

This filter is run during a WooCommerce checkout, after WP Fusion has extracted the customer data from the order object. It can be used to sync additional data from a WooCommerce order to custom fields in your CRM.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $customer_data: This is an array of key value pairs representing WordPress meta fields and their corresponding values.
- $order: The WooCommerce order object

### Examples

#### Sync the WooCommerce total order value to a custom field

```
function get_order_total( $customer_data, $order ) {

	$customer_data['order_total'] = $order->get_total();

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'get_order_total', 10, 2 );
```

#### Sync the coupon code used on an order to a custom field

```
// Add the coupon field as available for sync on the Contact Field tab in the WPF settings

function wpf_coupon_meta_fields( $fields ) {

	$fields['wc_coupon'] = array( 'label' => 'Coupon', 'type' => 'text', 'group' => 'woocommerce' );

	return $fields;

}

add_filter( 'wpf_meta_fields', 'wpf_coupon_meta_fields' );

// Get the coupon code of the first coupon used on the order and add it to the order data

function wpf_sync_coupon( $customer_data, $order ) {

	$coupons = $order->get_coupon_codes();

	if( ! empty( $coupons ) ) {
		$customer_data['wc_coupon'] = $coupons[0];
	}

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'wpf_sync_coupon', 10, 2 );
```

#### Get a custom date field off an order product and sync it to the contact record

```
// Add the date field as available for sync on the Contact Field tab in the WPF settings

function wpf_product_meta_fields( $fields ) {

	$fields['course_date'] = array( 'label' => 'Course Date', 'type' => 'date', 'group' => 'woocommerce' );

	return $fields;

}

add_filter( 'wpf_meta_fields', 'wpf_product_meta_fields' );

// Get the date field off the product and merge it into the customer data

function get_product_data( $customer_data, $order ) {

	foreach ( $order->get_items() as $item ) {

		$product_id = $item->get_product_id();

		$meta_value = get_post_meta( $product_id, 'course_date_field_key', true );

		if ( ! empty( $meta_value ) ) {
			$customer_data['course_date'] = $meta_value;
		}
	}

	return $customer_data;

}
add_filter( 'wpf_woocommerce_customer_data', 'get_product_data', 10, 2 );
```

#### Sync the quantity of a specific order item to a custom field

```
// Add the field as available for sync on the Contact Field tab in the WPF settings

function wpf_product_meta_fields( $fields ) {

	$fields['item_quantity'] = array( 'label' => 'Item Quantity', 'type' => 'int', 'group' => 'woocommerce' );

	return $fields;

}

add_filter( 'wpf_meta_fields', 'wpf_product_meta_fields' );

// Get the quantity from the order item with product ID 123 and merge it into the customer data

function get_product_data( $customer_data, $order ) {

	foreach ( $order->get_items() as $item ) {

		if ( 123 === $item->get_product_id() ) {
			$customer_data['item_quantity'] = $item->get_quantity();
		}
	}

	return $customer_data;

}
add_filter( 'wpf_woocommerce_customer_data', 'get_product_data', 10, 2 );
```

#### Sync the customer’s lifetime value to a custom field

```
function wp_fusion_sync_lifetime_value_with_order( $customer_data, $order ) {
    // Fetch orders with WooCommerce HPOS compatibility
    $args = array(
        'limit'    => -1,
        'customer' => $customer_data['billing_email'],
        'status'   => wc_get_is_paid_statuses(),
        'orderby'  => 'ID',
        'order'    => 'DESC',
    );

    // Query orders using wc_get_orders (compatible with HPOS)
    $customer_orders = wc_get_orders( $args );

    // Initialize lifetime value
    $customer_data['lifetime_value'] = 0;

    if ( ! empty( $customer_orders ) ) {
        foreach ( $customer_orders as $customer_order ) {
            // Get the total order amount
            $order_total = $customer_order->get_total();
            $customer_data['lifetime_value'] += floatval( $order_total );
        }
    }

    return $customer_data;
}

add_filter( 'wpf_woocommerce_customer_data', 'wp_fusion_sync_lifetime_value_with_order', 10, 2 );
```

#### Ignore an order

You can return an empty value from the wpf_woocommerce_customer_data filter in order to have WP Fusion ignore a WooCommerce order. In this example we’re going to ignore orders unless their status is completed:

```
function wpf_only_allow_completed( $customer_data, $order ) {

	if ( 'completed' !== $order->get_status() ) {
		return null;
	}

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'wpf_only_allow_completed', 10, 2 );
```

#### Don’t process orders in real time

In this example, we will not sync any orders in real time as customers check out on your store.

This can be used in combination with a scheduled batch operation to sync orders later, when there are more resources available on the site.

```
function wpf_dont_process_orders_in_real_time( $customer_data ) {

	if ( did_action( 'woocommerce_checkout_process' ) ) {
		return null;
	}

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'wpf_dont_process_orders_in_real_time' );
```

#### Only sync existing customers

This example will only sync the order data to your CRM if the customer is a registered WordPress user and already has a CRM contact record. If it’s a new customer or existing user without a CRM contact ID, they will not be synced.

```
function only_sync_existing_contacts( $customer_data, $order ) {

	if ( empty( wpf_get_contact_id( $order->get_user_id() ) ) ) {
		return false;
	}

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'only_sync_existing_contacts', 10, 2 );
```

#### Only sync customers who opt in to marketing

Because WP Fusion uses tags applied at checkout to unlock content, enroll users into courses, and otherwise deliver access to purchased products— all customers will be synced with your CRM, regardless of whether or not they’ve consented to marketing.

It’s then up to you to use the tag and/or custom field value in your campaigns and automations to exclude contacts from marketing if they haven’t opted in.

On some simple stores, you may want to completely disable the sync of customers with your CRM if they haven’t opted in to marketing. This can be achieved with the following filter, added to your functions.php file:

```
function do_not_sync_unconfirmed_customers( $customer_data ) {

	if ( empty( $customer_data['email_optin'] ) ) {
		return false;
	}

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'do_not_sync_unconfirmed_customers' );
```

---

## wpf_elementor_can_access

**Source:** [https://wpfusion.com/documentation/filters/wpf_elementor_can_access/](https://wpfusion.com/documentation/filters/wpf_elementor_can_access/)

### Overview

This filter is similar to the wpf_user_can_access filter, but runs only on Elementor elements, and passes the Elementor widget as an argument to the filter. To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $can_access: This variable represents whether or not the user can access the content. It will either be true or false.
- $element: The Elementor widget

### Examples

#### Require all tags to view an Element

This example changes the logic from the WP Fusion settings on an Element to require all of the specified tags, instead of any one of them.

```
function my_wpf_elementor_access( $can_access, $element ) {

	$widget_tags = $element->get_settings( 'wpf_tags' );

	if ( empty( $widget_tags ) ) {
		return $can_access;
	}

	$user_tags = wp_fusion()->user->get_tags();

	$result = array_intersect( $widget_tags, $user_tags );

	if ( count( $result ) == count( $widget_tags ) ) {
		$can_access = true;
	} else {
		$can_access = false;
	}

	return $can_access;
}

add_filter( 'wpf_elementor_can_access', 'my_wpf_elementor_access', 10, 2 );
```

#### Create a custom access rule for a specific element

This example hides an element with ID fa65gh unless the user has Tag X and does not have Tag Y.

```
function my_wpf_elementor_access_by_id( $can_access, $element ) {

	if ( $element->get_id() == 'fa65gh' ) {

		$can_access = false;

		if ( wp_fusion()->user->has_tag( 'TAG X' ) && ! wp_fusion()->user->has_tag( 'TAG Y' ) ) {

			$can_access = true;

		}

	}

	return $can_access;

}

add_filter( 'wpf_elementor_can_access', 'my_wpf_elementor_access_by_id', 10, 2 );
```

---

## wpf_post_type_rules

**Source:** [https://wpfusion.com/documentation/filters/wpf_post_type_rules/](https://wpfusion.com/documentation/filters/wpf_post_type_rules/)

### Overview

This filter lets you apply WP Fusion’s access controls to an entire post type.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $rules: An array of post types and their access control rules

#### Rule properties

The array properties for the access rules are the same as those saved on an individual post. They are:

- lock_content: (bool) The user must be logged in to access the content
- allow_tags: (array) The user must have at least one of the specified tags to access the content. Tag IDs must be used if the CRM uses tag IDs. If you’re not sure, use wpf_get_tag_id( $name ) to get the ID.
- allow_tags_all: (array) The user must have all of the tags to access the content
- allow_tags_not: (array) The user must have none of the tags to access the content
- redirect: (int) A post ID to redirect the user to if access is denied. Leave blank to display the Restricted Content Message
- redirect_url: (string) Optionally specify a remote URL to redirect the user to if access is denied. Will take priority over redirect

### Examples

The example below will protect a custom post type with slug my_type and redirect the user if they don’t have the required tags.

```
function wpf_post_type_rules( $rules ) {

	$rules['my_type'] = array(
		'lock_content'   => true,
		'allow_tags'     => array( 'Tag One' ),              // Array of required tags (any). Must use tag IDs if the CRM uses tag IDs
		'allow_tags_all' => array( 'Tag Two', 'Tag Three' ), // Array of required tags (all)
		'allow_tags_not' => array( 'Payment Failed' ),       // Array of required tags (not)
		'redirect'       => 123,                             // Post ID to redirect to
		'redirect_url'   => 'https://example.com/',          // OR enter a URL (overrides post ID redirect)
	);

	return $rules;

}

add_filter( 'wpf_post_type_rules', 'wpf_post_type_rules' );
```

---

## wpf_meta_fields

**Source:** [https://wpfusion.com/documentation/filters/wpf_meta_fields/](https://wpfusion.com/documentation/filters/wpf_meta_fields/)

### Overview

This filter lets you register custom meta fields to show up in the Contact Fields list. From there you can map them to a field in your CRM, and sync data either manually using push_user_meta() or automatically by registering the field using wpf_watched_meta_fields.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $fields: An array of fields to add

### Examples

The example below will add a new field for sync with key primary_membership.

```
function add_custom_meta_field( $meta_fields ) {

	$meta_fields['primary_membership'] = array(
		'label' => 'Membership',
		'type'  => 'text',
		'group' => 'wordpress',
	);

	return $meta_fields;

}

add_filter( 'wpf_meta_fields', 'add_custom_meta_field' );
```

---

## wpf_watched_meta_fields

**Source:** [https://wpfusion.com/documentation/filters/wpf_watched_meta_fields/](https://wpfusion.com/documentation/filters/wpf_watched_meta_fields/)

### Overview

This filter lets you register meta fields in the wp_usermeta table that should always be synced whenever they are modified. This is helpful if you’re updating user data in your own code by using the functions add_user_meta() or update_user_meta().

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $fields: An array of fields to watch

### Examples

#### Watch a custom field and sync changes automatically

The example below will watch for changes in the field my_field_name and sync them.

```
function my_watch_meta_field( $fields ) {

	$fields[] = 'my_field_name';
	return $fields;

}

add_filter( 'wpf_watched_meta_fields', 'my_watch_meta_field' );
```

Keep in mind the field must still be associated with a field in your CRM via the Contact Fields tab in the WP Fusion settings.

---

## wpf_crm_object_type

**Source:** [https://wpfusion.com/documentation/filters/wpf_crm_object_type/](https://wpfusion.com/documentation/filters/wpf_crm_object_type/)

### Overview

By default WP Fusion interfaces with Contacts in all of our supported CRM integrations. Some platforms like Salesforce, Ontraport, and Zoho support custom object types in addition to contacts (like Leads).

You can override WP Fusion to interface with a different object type via a filter in your functions.php file.

Changing the object type will also reset the fields available for syncing. After changing the object type, please reload the available fields by going to Settings » WP Fusion » Setup and clicking the blue Resync Available Tags & Fields button.

#### Salesforce

For example, to interface with Salesforce’s “leads” component, you would use the following:

```
add_filter( 'wpf_crm_object_type', function( $object_type ) {
	return 'Lead';
});
```

**Note:** As of WP Fusion 3.41.6, it’s now possible to set the object type for Salesforce without a code snippet. The object type can be set from the Object Type dropdown on the Setup tab in the settings.

#### Zoho

To interface with Zoho’s “leads” component, you would use the following:

```
add_filter( 'wpf_crm_object_type', function( $object_type ) {
	return 'Leads';
});
```

#### Ontraport

Ontraport uses numeric IDs for object types. The default type is 0 for contacts. To override that, pass the ID of your custom object into the filter.

```
add_filter( 'wpf_crm_object_type', function( $object_type ) {
	return 8;
});
```

### Can WP Fusion interface with multiple object types at the same time?

The short answer is no.

That’s because WP Fusion syncs your WordPress users bidirectionally with the selected object type in your CRM.

That’s usually Contacts, but could also be Leads or a custom object type.

If you take a hypothetical scenario where WP Fusion is configured to sync with both Contacts and Leads at the same time:

- A new Lead is created in Zoho CRM
- A webhook syncs the Lead back to a new WordPress user account
- The user updates their profile, which creates a Contact in Zoho
- Now you have two duplicate records, one Lead and one Contact, both linked to the same WordPress user

Or

- Email address is updated on jane@doe.com’s lead record
- The changed email address is loaded to Jane’s WordPress user account
- WP Fusion syncs the changed email address to Jane’s contact record

Obviously it doesn’t do any good to have two separate CRM objects that are kept in sync with eachother, since the records will be identical.

And it will slow down your WordPress site having WP Fusion constantly connecting to your CRM to sync the objects with eachother.

#### Conditionally switching object types

An exception to that is switching the object type temporarily, just for certain operations.

For example maybe you have WP Fusion syncing your users bidirectionally with Contacts in your CRM, but you want all Gravity Form submissions to create a new Lead (with a one-way sync).

```
function my_gform_after_submission( $entry, $form ) {

	if ( ! function_exists( 'wp_fusion' ) ) {
		return false; // Make sure WP Fusion is running
	}

	// Gets the first name and last name from field ID 5, and email from field ID 6
	$contact_data = array(
		'FirstName' => rgar( $entry, '5.3' ),
		'LastName'  => rgar( $entry, '5.6' ),
		'Email'     => rgar( $entry, '6' ),
		'Company'   => 'CompanyName',
	);

	$lead_id = wp_fusion()->crm->add_object( $contact_data, 'Lead' );
}

// Replace "1" with the ID of the form
add_action( 'gform_after_submission_1', 'my_gform_after_submission', 10, 2 );
```

This example runs after a Gravity Form has been submitted and then creates a new lead with the submitted form data, using the add_object() method.

For another example with Salesforce, see this Gist:

#### Alternatives

Implementing a custom object switching solution with WP Fusion is usually a complex project.

In some cases it’s better to use a different plugin for your custom objects, and let WP Fusion focus on the bi-directional sync of your user and customer data.

- For creating or updating additional objects when Contacts are updated, we recommend using Salesforce Flows. See the tutorial here.
- For syncing custom post types with Salesforce objects, we recommend Object Sync for Salesforce.
- For syncing WooCommerce orders with Salesforce orders, we recommend WooCommerce Salesforce Integration by CRM Perks.
- Gravity Forms Salesforce can be installed through the WordPress plugin directory. It is quite powerful, as it can send form submissions from your WordPress site to Salesforce as whatever object you need. It’s important to mention that this works for any form created with the Gravity Forms plugin. It’s also important to mention that this does not sync data back from Salesforce into WordPress.

---

## wpf_user_register

**Source:** [https://wpfusion.com/documentation/filters/wpf_user_register/](https://wpfusion.com/documentation/filters/wpf_user_register/)

### Overview

This filter allows you to modify any user meta data captured at registration, before a new contact record is created in your crm. To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $user_meta: Array of user meta data collected at registration, in the format array('meta_field' => 'value').
- $user_id: ID for the user being updated.

### Examples

#### Correct an invalid input field name on a registration form

Some plugins allow you to add custom fields to registration forms via code, but the “name” value on the input isn’t the same as the meta field in the database (or the meta field enabled for sync in the Contact Fields list).

For example, you may have added the field my_custom_field to the form (i.e. <input type="text" name="my_custom_field">, but in the database (and WP Fusion’s Contact Fields settings) the field is myplugin_my_custom_field.

Since WP Fusion is looking for the meta key value as it’s set in the database, it won’t be detected on the registration form.

To correct this, you can use the wpf_user_register filter like so:

```
function my_wpf_filter_registration( $user_meta, $user_id ) {
	
	if( isset( $user_meta['my_custom_field'] ) ) {
		$user_meta['myplugin_my_custom_field'] = $user_meta['my_custom_field'];
	}

	return $user_meta;

}

add_filter( 'wpf_user_register', 'my_wpf_filter_registration', 10, 2 );
```

#### Preventing a user from being synced to the CRM

If you return null from the wpf_user_register filter, WP Fusion will not create a contact record in your CRM.

In this example we prevent a contact record from being created at registration if the user has the author role:

```
function my_wpf_filter_registration( $user_meta, $user_id ) {
	
	$user = get_userdata( $user_id );

	if ( in_array( 'author', (array) $user->roles ) ) {
		return null;
	}

	return $user_meta;

}

add_filter( 'wpf_user_register', 'my_wpf_filter_registration', 100, 2 );
```

---

## wpf_user_update

**Source:** [https://wpfusion.com/documentation/filters/wpf_user_update/](https://wpfusion.com/documentation/filters/wpf_user_update/)

### Overview

This filter allows you to modify user meta data before it’s sent to your CRM. To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $user_meta: Array of user meta data, in the format array('meta_field' => 'value').
- $user_id: ID for the user being updated.

### Examples

#### Save the full URL to a user’s profile photo

If you’re using Ultimate Member to run your site’s membership platform, and want to save a link to the user’s profile photo in your CRM, you’ll find that just syncing the profile_photo field gives you the name of the file, but not the full URL. Using wpf_user_update, we can modify this so the full URL to the user’s profile is sent.

```
function set_profile_photo_url( $user_meta, $user_id ) {
	
	// Changes "profile_photo.png" to "http://mysite.com/wp-content/uploads/ultimatemember/1/profile_photo.png"
	if( isset( $user_meta['profile_photo'] ) ) {
		$user_meta['profile_photo'] = content_url() . '/uploads/ultimatemember/' . $user_id . '/' . $user_meta['profile_photo'];
	}

	return $user_meta;

}

add_filter( 'wpf_user_update', 'set_profile_photo_url', 10, 2 );
```

#### Sync a role title instead of role slug

This example converts the role slug volunteer_both to “Volunteer” when the role field is being synced to the CRM, either during a profile update or new user registration (via the wpf_user_register filter).

```
function volunteer_role( $user_meta, $user_id ) {

	if ( isset( $user_meta['role'] ) && 'volunteer_both' === $user_meta['role'] ) {
		$user_meta['role'] = 'Volunteer';
	}

	return $user_meta;

}

add_filter( 'wpf_user_register', 'volunteer_role', 10, 2 );
add_filter( 'wpf_user_update', 'volunteer_role', 10, 2 );
```

#### Convert a field value to a tag

With Constant Contact, Customer.io, Encharge, FluentCRM, Groundhogg, HubSpot, Infusionsoft / Keap, and Ontraport, WP Fusion is able to create new tags by sending an API call.

This snippet looks for a custom field value in the user’s submitted data, in the field custom_field_key. If an existing tag is found with that value, the tag will be applied. If not, an API call is sent to the CRM to create the tag, and then the tag is applied.

```
function create_tags_from_field_values( $user_meta, $user_id ) {

	if ( isset( $user_meta['custom_field_key'] ) ) {

		$tag_id = wpf_get_tag_id( $user_meta['custom_field_key'] );

		if ( $tag_id ) {
			wp_fusion()->user->apply_tags( array( $tag_id ), $user_id );
		} else {

			// Try to create the tag.
			wpf_log( 'info', $user_id, 'Creating new tag for field value ' . $user_meta['custom_field_key'] );

			try {
				$tag_id = wp_fusion()->crm->add_tag( $user_meta['custom_field_key'] );
			} catch ( Exception $e ) {
				wpf_log( 'error', $user_id, 'Error creating tag for field value ' . $user_meta['custom_field_key'] . ': ' . $e->getMessage() );
			}
			
			if ( ! is_wp_error( $tag_id ) ) {
				wp_fusion()->user->apply_tags( array( $tag_id ), $user_id );
			}
		}
	}

}

add_filter( 'wpf_user_update', 'create_tags_from_field_values', 10, 2 );
```

---

## wpf_pulled_user_meta

**Source:** [https://wpfusion.com/documentation/filters/wpf_pulled_user_meta/](https://wpfusion.com/documentation/filters/wpf_pulled_user_meta/)

### Overview

This filter allows you to modify a user’s meta data whenever it has been pulled from your CRM, and before it is saved to the database. To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $user_meta: Array of user meta data, in the format array('meta_field' => 'value').
- $user_id: ID of the user being updated

### Examples

#### Update a user’s Display Name based on their first and last name

If you’re using the Display Name field on your site to show post authors, create member directories, or elsewhere in your templates, you may want to automatically update a user’s display name if their name is changed in your CRM.

```
function set_display_name( $user_meta, $user_id ) {
	
	$user_meta['display_name'] = $user_meta['first_name'] . ' ' . $user_meta['last_name'];

	return $user_meta;

}

add_filter( 'wpf_pulled_user_meta', 'set_display_name', 10, 2 );
```

#### Limit the fields that are loaded from the CRM

By default WP Fusion will load any fields from the CRM that are enabled for sync from the Contact Fields tab. This example lets you limit the loaded data to name and email address, while ignoring any other data.

```
function limit_loaded_metadata( $user_meta, $user_id ) {

	$limited_meta = array(
		'first_name' => $user_meta['first_name'],
		'last_name'  => $user_meta['last_name'],
		'user_email' => $user_meta['user_email'],
	);

	return $limited_meta;

}

add_filter( 'wpf_pulled_user_meta', 'limit_loaded_metadata', 10, 2 );
```

#### Convert a role title to a role slug

This example is the inverse of the example on the wpf_user_update documentation page.

When a role “Volunteer” is loaded from the CRM, this converts it to the role slug volunteer_both, so that the role is properly set for the user.

```
function set_volunteer_role( $user_meta, $user_id ) {

	if ( isset( $user_meta['role'] ) && 'Volunteer' === $user_meta['role'] ) {
		$user_meta['role'] = 'volunteer_both';
	}

	return $user_meta;

}

add_filter( 'wpf_pulled_user_meta', 'set_volunteer_role', 10, 2 );
```

---

## wpf_redirect_url

**Source:** [https://wpfusion.com/documentation/filters/wpf_redirect_url/](https://wpfusion.com/documentation/filters/wpf_redirect_url/)

### Overview

This filter is run when a user is redirected from a restricted post or page. It can be used to override the redirect configured in the WP Fusion meta box. To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $redirect: Represents the URL the user will be redirected to.
- $post_id: Post ID for the post being requested.

### Examples

#### Send logged out users to a login page, and send logged-in users to upsell pages based on their applied tags

Say you have a page, “Level 2 Membership Content”. This page has “Restrict Access” checked and requires the “Level 2 Member” tag to view the page. Configure the redirect in the meta box settings on the “Level 2 Membership Content” page to point your login page.

This will redirect all users who either don’t have the “Level 2 Member” tag, or any logged out users, to the login page. However if a user is already logged in, we may want to modify the redirect depending on their membership level.

The code below redirects users who don’t have the tag “Level 1 Member” to the sales page for Level 1 Membership. It redirects users who don’t have the tag “Level 2 Member” to the sales page for Level 2 Membership.

```
function wpf_redirect_users( $redirect, $post_id ) {

	// Go to the default redirect (the login page) for non-logged in users
	if ( ! wpf_is_user_logged_in() ) {
		return $redirect;
	}

	// If they don't have the tag Level 2 Member, go to the Buy Level 2 Membership page
	if ( ! wpf_has_tag( 'Level 2 Member' ) ) {
		return 'http://mysite.com/buy-level-2-membership';
	}

	// If they don't have the tag Level 1 Member, go to the Buy Level 1 Membership page
	if ( ! wpf_has_tag( 'Level 1 Member' ) ) {
		return 'http://mysite.com/buy-level-1-membership';
	}

}

add_filter( 'wpf_redirect_url', 'wpf_redirect_users', 10, 2 );
```

---

## wpf_user_can_access

**Source:** [https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/)

### Overview

This filter is run when determining whether a user can access any piece of content on your site that can be protected by WP Fusion, including:

- Posts
- Pages
- Custom post types
- Widgets
- Content protected by shortcodes
- Gutenberg Blocks
- Page builder modules (like Beaver Builder, Elementor, Oxygen, and Divi)

You can use this filter to create your own dynamic access rules based on criteria that aren’t available through WP Fusion’s meta boxes.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $can_access: This variable represents whether or not the user can access the content, as determined by your existing access rules. It will either be true or false.
- $user_id: ID of the current logged in user. Will be false if the user isn’t logged in.
- $post_id: Post ID for the post being requested. Will be false if the item isn’t a post (for example a Gutenberg block)

### See also

- wpf_user_can_access_post_type: Runs on a post type, in conjunction with wpf_post_type_rules
- wpf_user_can_access_archive: Runs on a taxonomy term ID instead of a post ID, determines if a user has access to a term archive
- wpf_user_can_access_widget: Runs on widgets
- wpf_user_can_access_block: Runs on Gutenberg blocks

### Examples

#### Deny access to posts within a certain category

The example below will allow access to posts in the category “My Category” only to users who have the tag “Special Tag”.

```
function restrict_post_categories( $can_access, $user_id, $post_id ) {
	
	if ( in_category( 'My Category', $post_id ) && ! wp_fusion()->user->has_tag( 'Special Tag', $user_id ) ) {
		return false;
	} else {
		return true;
	}

}

add_filter( 'wpf_user_can_access', 'restrict_post_categories', 10, 3 );
```

#### Restrict past content by registration date

This example denies access to any content that was published before the user’s registration date:

```
function disallow_before_date_published( $can_access, $user_id, $post_id ) {

	$published = get_the_date( 'U', $post_id );
	$userdata  = get_userdata( $user_id );

	if ( strtotime( $userdata->user_registered ) < $published ) {
		$can_access = false;
	}

	return $can_access;

}

add_filter( 'wpf_user_can_access', 'disallow_before_date_published', 10, 3 );
```

#### Restrict past content by date tag applied

As an alternative, you can track the date that a specific tag was applied (for example Paying Member) using the wpf_tags_applied action, and then deny access to any content published before that tag was applied.

This is similar to the functionality with the Restrict Past Content addon by Restrict Content Pro.

```
function disallow_before_date_published_alt( $can_access, $user_id, $post_id ) {

	$published = get_the_date( 'U', $post_id );
	$startdate = get_user_meta( $user_id, 'startdate', true );

	// If the content was published before the user's startdate field, deny access

	if ( empty( $startdate ) || $startdate < $published ) {
		$can_access = false;
	}

	return $can_access;

}

add_filter( 'wpf_user_can_access', 'disallow_before_date_published_alt', 10, 3 );

function update_tag_applied_timestamp( $user_id, $tags ) {

	// When TAGNAME is applied, save the current time to the startdate field

	if ( in_array( 'TAGNAME', $tags ) ) {
		update_user_meta( $user_id, 'startdate', time() );
	}

}

add_action( 'wpf_tags_applied', 'update_tag_applied_timestamp', 10, 2 );
```

#### Restrict content by a user’s age

In this example, any post protected by the tag Adult will require the user to be 18 years old or older to view the post.

For this to work you need to collect the user’s birthday in the date_of_birth usermeta field.

```
function restrict_content_by_age( $can_access, $user_id, $post_id ) {

	$settings = get_post_meta( $post_id, 'wpf-settings', true ); // Get the settings

	if ( false == $settings || empty( $settings['allow_tags'] ) ) {
		return $can_access; // Not protected by WP Fusion
	}

	$tag_to_check = wpf_get_tag_id( 'Adult' );

	if ( in_array( $tag_to_check, $settings['allow_tags'] ) ) {

		// The post is protected by the "Adult" tag, check the user's age

		$age = strtotime( get_user_meta( $user_id, 'date_of_birth', true ) );

		if ( false == $age ) {

			// The user's age is unknown, access is denied
			return false;

		} else {

			$minimum_age = strtotime( '+18 years', $age );

			if ( time() < $minimum_age ) {

				// The user is not 18 or older, access is denied
				return false;

			} else {

				// The user is old enough, access is granted
				return true;

			}
		}
	}

	return $can_access;

}

add_filter( 'wpf_user_can_access', 'restrict_content_by_age', 10, 3 );
```

#### Requiring an onboarding course completion before accessing the rest of the site

This example uses the presence of an Onboarded tag to lock all content on the site until the user has completed a LearnDash course with ID 123.

Configure the LearnDash course to apply the Onboarded tag when it’s marked complete, and the rest of the site content will then be unlocked.

```
function require_onboarding( $can_access, $user_id, $post_id ) {

	if ( false !== $post_id // If the content being accessed is a post...
		&& ! wpf_has_tag( 'Onboarded' ) // and the user doesn't have the tag Onboarded...
		&& 123 != learndash_get_course_id( $post_id ) // and the content isn't part of the course ID 123...
	) {
		return false; //... then access is denied.
	}

	return $can_access; // Otherwise use the default access rules

}

add_filter( 'wpf_user_can_access', 'require_onboarding', 10, 3 );
```

#### Unlock content based on a user role or capability

This example unlocks all content when the user has the capability edit_others_posts. It can also accept a role, for example editor.

```
function allow_access_for_capability( $can_access, $user_id, $post_id ) {

	if ( user_can( $user_id, 'edit_others_posts' ) ) {
		$can_access = true;
	}

	return $can_access;

}

add_filter( 'wpf_user_can_access', 'allow_access_for_capability', 10, 3 );
```

#### Unlock any locked content when visited from a Facebook link

This example bypasses WP Fusion’s access rules when the visitor is coming to the site from a Facebook link.

```
function unlock_for_fb_referral( $can_access, $user_id, $post_id ) {

	if( isset( $_SERVER['HTTP_REFERER'] ) && strpos( $_SERVER['HTTP_REFERER'], 'facebook') !== false ) {
		return true; // http referrer
	} elseif ( isset( $_GET['fbclid'] ) ) {
		return true; // the ?fbclid= URL parameter
	}

	return $can_access;

}

add_filter( 'wpf_user_can_access', 'unlock_for_fb_referral', 10, 3 );
```

#### Bypass query filtering on a specific post

When WP Fusion’s query filtering is enabled, any posts that a user doesn’t have access to will be completely hidden from your site, including all listings, course grids, navigation, archives, etc.

There may be cases when you want to exclude a single post from being hidden. For example you might want to show a restricted course in your course catalog, so that when the user clicks on it they’re redirected to a sales page.

By checking if the pre_get_posts action is currently running, we can tell if WP Fusion is filtering the query results, and exclude specific items from being hidden. In this example the post with ID 123 is excluded if the current user has the tag “Group A”.

```
function bypass_query_filtering( $can_access, $user_id, $post_id ) {

	if ( doing_action( 'pre_get_posts' ) || doing_action( 'the_posts' ) ) {

		if ( wpf_has_tag( 'Group A', $user_id ) && 123 == $post_id ) {
			$can_access = true;
		}
	}

	return $can_access;

}

add_filter( 'wpf_user_can_access', 'bypass_query_filtering', 10, 3 );
```

### Unlock everything

Sometimes you might want to temporarily deactivate WP Fusion’s access controls, either for troubleshooting, or a special “open day” promotion. This code disables all WP Fusion access rules and grants access to everything.

```
add_filter( 'wpf_user_can_access', '__return_true' );
```

---

