# Actions

*Category from WP Fusion documentation*

---

## wpf_user_created

**Source:** [https://wpfusion.com/documentation/actions/wpf_user_created/](https://wpfusion.com/documentation/actions/wpf_user_created/)

### Overview

This action is triggered whenever WP Fusion has created a new contact record in your CRM as the result of a user registration.

#### Parameters

- $user_id: The user ID
- $contact_id: The ID of the contact that was created in the CRM
- $user_meta: The metadata that was synced to the CRM

### Examples

#### Generic example

```
function my_function( $user_id, $contact_id, $user_meta ) {
	
	if ( 'Active' == $user_meta['custom_field_key'] ) {
		// Do something here.
		wp_fusion()->user->apply_tags( array( 'Active' ), $user_id );
	}
}

add_action( 'wpf_user_created', 'my_function', 10, 3 );
```

---

## wp_fusion_init_crm

**Source:** [https://wpfusion.com/documentation/actions/wp_fusion_init_crm/](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/)

### Overview

This action is triggered after WP Fusion has loaded the CRM integration module for the active CRM, but before WP Fusion has fully loaded.

It passes the active CRM by reference and allows you to modify properties of the active CRM.

Note: This action will not fire if WP Fusion is not connected to a CRM.

### Examples

#### Whitelabel the CRM

This example renames the active CRM to a custom label.

```
function wpf_whitelabel_crm( &$crm ) {
	$crm->name = 'Custom Name';
}

add_action( 'wp_fusion_init_crm', 'wpf_whitelabel_crm' );
```

#### Change the View in CRM links

This example changes the View in CRM links across the WP Fusion UI. The %s will be replaced by the contact ID of the relevant contact.

```
function wpf_rewrite_view_in_crm_links( &$crm ) {
	$crm->edit_url = 'https://app.mybrand.com/v2/location/' . $crm->location_id . '/contacts/detail/%s';
}
add_action( 'wp_fusion_init_crm', 'wpf_rewrite_view_in_crm_links' );
```

#### Use a custom OAuth app

For swapping out WP Fusion’s built in OAuth client IDs in order to connect to your own OAuth app, see this tutorial.

```
function set_custom_zoho_app( &$crm ) {

	$crm->client_id        = '1000.XXXXXXXXXXXXXXXXXXXXX';
	$crm->client_secret_us = '08dccXXXXXXXXXXXXXXXXXXXXX';

}

add_action( 'wp_fusion_init_crm', 'set_custom_zoho_app' );
```

---

## wpf_forms_post_submission

**Source:** [https://wpfusion.com/documentation/actions/wpf_forms_post_submission/](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/)

### Overview

This action is run when WP Fusion has finished processing a form entry from one of our supported form plugins.

It can be used to perform additional actions with the contact ID that was created in your CRM, for example triggering an event, or updating a note/opportunity.

To use the code examples below, add them to your active theme’s functions.php file.

#### Parameters

- $update_data (array): This is an array of data that was synced to the CRM
- $user_id (int): The user who submitted the form, 0 if a guest
- $contact_id (string): The ID of the contact record created / updated by the form submission
- $form_id (int): The ID of the submitted form

### Examples

#### Redirect an Elementor forms submission to an auto-login URL on another site

This example runs when an Elementor form is submitted and overrides the form’s redirect to https://siteb.com/?cid=Xwhere X is the ID of the contact record that was just created or updated by WP Fusion.

This redirect will then start an auto-login session for that contact on https://siteb.com

```
function wpf_custom_redirect( $update_data, $user_id, $contact_id, $form_id ) {

	if ( wp_doing_ajax() ) {

		$redirect_url = 'https://siteb.com';
		$query_args   = array( 'cid' => $contact_id );

		wp_send_json_success( [
			'message' => 'Success!',
			'data'    => array( 'redirect_url' => add_query_arg( $query_args, $redirect_url ) ),
		] );
	}

}

add_action( 'wpf_forms_post_submission', 'wpf_custom_redirect', 10, 4 );
```

#### Assign points to the contact in Mautic after a form is submitted

This example adds 10 points to a contact in Mautic after they submit any form configured with WP Fusion.

```
function add_points_in_mautic( $update_data, $user_id, $contact_id, $form_id ) {

	$points = 10;

	wp_remote_post(
		wp_fusion()->crm->url . "api/contacts/{$contact_id}/plus/{$points}",
		wp_fusion()->crm->get_params()
	);

}

add_action( 'wpf_forms_post_submission', 'add_points_in_mautic', 10, 4 );
```

---

## wp_fusion_init

**Source:** [https://wpfusion.com/documentation/actions/wp_fusion_init/](https://wpfusion.com/documentation/actions/wp_fusion_init/)

### Overview

This action is triggered after WP Fusion has loaded (specifically on the init hook at priority 0).

It can be used to initialize any functionality that depends on WP Fusion.

Note: This action will not fire if WP Fusion is not connected to a CRM.

### Examples

#### Register an additional order status for sync

This example registers a custom WooCommerce order status tbh-unpaid for sync with your CRM.

```
function wpf_add_custom_order_status() {

	add_action( 'woocommerce_order_status_tbh-unpaid', array( wp_fusion()->integrations->woocommerce, 'process_order' ) );

}

add_action( 'wp_fusion_init', 'wpf_add_custom_order_status' );
```

---

## wpf_pushed_user_meta

**Source:** [https://wpfusion.com/documentation/actions/wpf_pushed_user_meta/](https://wpfusion.com/documentation/actions/wpf_pushed_user_meta/)

### Overview

This action is triggered whenever WP Fusion has synced metadata to the CRM for a user.

#### Parameters

- $user_id: The user ID
- $contact_id: The ID of the contact that was updated in the CRM
- $user_meta: The metadata that was synced to the CRM

### Examples

#### Generic example

```
function generic_function( $user_id, $contact_id, $user_meta ) {
	
	if ( 'Active' == $user_meta['custom_field_key'] ) {
		// Do something here.
	}
}

add_action( 'wpf_pushed_user_meta', 'generic_function', 10, 3 );
```

---

## wpf_woocommerce_payment_complete

**Source:** [https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/](https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/)

### Overview

This action is triggered whenever WP Fusion has completed processing a WooCommerce order

#### Parameters

- $order_id: (int) The order ID
- $contact_id: (string) The contact ID that was created or updated at checkout

### Examples

#### Send a custom field to your CRM

The example below will update a custom field in the CRM (with key order_total) with the order total after an order has been placed.

```
function my_woo_payment_complete( $order_id, $contact_id ) {

	$order = wc_get_order( $order_id );

	$update_data = array( 'order_total' => $order->get_total() );

	wp_fusion()->crm->update_contact( $contact_id, $update_data, false );
	

}

add_action( 'wpf_woocommerce_payment_complete', 'my_woo_payment_complete', 10, 2 );
```

---

## wpf_user_imported

**Source:** [https://wpfusion.com/documentation/actions/wpf_user_imported/](https://wpfusion.com/documentation/actions/wpf_user_imported/)

### Overview

This action is triggered whenever a new user is imported from your CRM (usually via a webhook), and after the user account has been created.

#### Parameters

- $user_id: The user ID of the newly created user
- $user_meta: The meta data imported with the new user

### Examples

#### Send a welcome email

The example below will send a welcome email to the new user containing their generated password.

```
function my_import_notification( $user_id, $user_meta ) {

	$to      = $user_meta['user_email'];
	$subject = 'Welcome to ' . get_bloginfo();
	$message = "You have a new user account on " . get_bloginfo() . ":\n\n";
	$message .= "Username: " . $user_meta['user_email'] . "\n";
	$message .= "Password: " . $user_meta['user_pass'] . "\n";

	wp_mail( $to, $subject, $message );

}

add_action( 'wpf_user_imported', 'my_import_notification', 10, 2 );
```

#### Apply a tag

The example below will apply a tag with ID 123 to any new user after they’ve been successfully imported.

```
function my_import_tag( $user_id, $user_meta ) {

	wp_fusion()->user->apply_tags( array( '123' ), $user_id );

}

add_action( 'wpf_user_imported', 'my_import_tag', 10, 2 );
```

---

## wpf_user_updated

**Source:** [https://wpfusion.com/documentation/actions/wpf_user_updated/](https://wpfusion.com/documentation/actions/wpf_user_updated/)

### Overview

This action is triggered whenever updated meta data is loaded from a CRM contact record for a user.

#### Parameters

- $user_id: The user ID
- $user_meta: An array of meta fields loaded from the CRM

### Examples

#### Update a user’s role based on the value of a custom field

```
function my_set_custom_role( $user_id, $user_meta ) {
	

	if ( 'Active' == $user_meta['custom_field_key'] ) {

		$user = new WP_User( $user_id );
		$user->set_role( 'active-role' );

	}

}

add_action( 'wpf_user_updated', 'my_set_custom_role', 10, 2 );
```

---

## wpf_tags_modified

**Source:** [https://wpfusion.com/documentation/actions/wpf_tags_modified/](https://wpfusion.com/documentation/actions/wpf_tags_modified/)

### Overview

This action is triggered whenever a user’s tags are modified.

#### Parameters

- $user_id: The user ID
- $user_tags: An array of all of the user’s current tags

### See also

- wpf_tags_applied: Triggered whenever tags are added to a user
- wpf_tags_removed: Triggered whenever tags are removed from a user

### Examples

#### Remove a tag when another tag is applied

WP Fusion includes a lot of interfaces for applying tags, but because removing tags is less common most of our integrations don’t include options for removing tags.

This example removes the tag Pending Signup when the tag Profile Complete is applied.

```
function remove_pending_signup_tag( $user_id, $tags_applied ) {

	$tag_to_check  = wpf_get_tag_id( 'Profile Complete' );
	$tag_to_remove = wpf_get_tag_id( 'Pending Signup' );

	if ( in_array( $tag_to_check, $tags_applied ) ) {
		wp_fusion()->user->remove_tags( array( $tag_to_remove ), $user_id );
	}

}

add_action( 'wpf_tags_applied', 'remove_pending_signup_tag', 10, 2 );
```

#### Debug a tag change

This example writes a backtrace to the WP Fusion logs to figure out where a tag change came from.

It can be especially helpful when using a CRM on the same site like FluentCRM or Groundhogg, as you can see what page or automation triggered the tag change.

```
function debug_tags_modified( $user_id, $user_tags ) {

	if ( user_can( $user_id, 'manage_options' ) ) {
		wpf_log( 'notice', $user_id, '<pre>' . print_r( debug_backtrace( DEBUG_BACKTRACE_IGNORE_ARGS, 50 ), true ) . '</pre>' );
	}

}

add_action( 'wpf_tags_modified', 'debug_tags_modified', 10, 2 );
```

This example limits the logging to administrators (users with the manage_options capability), but it could also be adjusted to look for specific user IDs, contact IDs, or tag IDs.

---

