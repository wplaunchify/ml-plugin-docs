# Functions

*Category from WP Fusion - Logins Addon documentation*

---

## wpf_get_option()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_option/](https://wpfusion.com/documentation/functions/wpf_get_option/)

### Overview

This function retrieves an option from the WP Fusion settings based on a given settings key.

#### Parameters

```
wpf_get_option( $key, $default = false )
```

- ```
$key
```

 *(string) (Required)*: The settings key to retrieve an option.
- ```
$default
```

 *(string) (Optional)*: The default value to return if no type is found.

#### Return

*(mixed)* The options value.

#### Get the option from a settings key

```
$option = wpf_get_option( $key );
```

#### Get an option from a settings key, but return a boolean variable if none are found

```
$option = wpf_get_option( $key, $default = false );
```

---

## wpf_admin_override()

**Source:** [https://wpfusion.com/documentation/functions/wpf_admin_override-2/](https://wpfusion.com/documentation/functions/wpf_admin_override-2/)

### Overview

This function checks if the current user is an administrator and if administrators are excluded from restrictions.

#### Return

*(bool)* Whether to do an admin override.

#### Checks the current user

```
$can_overrride = wpf_admin_override();
```

---

## wpf_get_datetime_format()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_datetime_format/](https://wpfusion.com/documentation/functions/wpf_get_datetime_format/)

### Overview

This function gets the default date/time format for syncing with the CRM.

#### Return

*(string)* The date/time format.

#### Get the default date/time format

```
$dt_format = wpf_get_datetime_format();
```

---

## doing_wpf_webhook()

**Source:** [https://wpfusion.com/documentation/functions/doing_wpf_webhook/](https://wpfusion.com/documentation/functions/doing_wpf_webhook/)

### Overview

This function checks if WP Fusion is handing a webhook.

#### Return

*(bool)* Whether WP Fusion is currently handing a webhook.

#### Check if WP Fusion is handing a WebHook

```
$handing_webhook = doing_wpf_webhook();
```

---

## doing_wpf_auto_login()

**Source:** [https://wpfusion.com/documentation/functions/doing_wpf_auto_login/](https://wpfusion.com/documentation/functions/doing_wpf_auto_login/)

### Overview

This function checks if the current session is an auto-login session.

#### Return

*(bool)* Whether the session is an auto-login session.

#### Checks if the session is an auto-login session

```
$auto_login_session = doing_wpf_auto_login();
```

---

## wpf_is_staging_mode()

**Source:** [https://wpfusion.com/documentation/functions/wpf_is_staging_mode/](https://wpfusion.com/documentation/functions/wpf_is_staging_mode/)

### Overview

This function checks if WP Fusion is in staging mode, 
```
true
```

 meaning yes.

#### Return

*(bool)* Whether WP Fusion is in staging mode.

#### Checks if WP Fusion is in staging mode

```
$staging = wpf_is_staging_mode();
```

---

## wpf_get_lookup_field()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_lookup_field/](https://wpfusion.com/documentation/functions/wpf_get_lookup_field/)

### Overview

This function retrieves the field name of the primary field that is used for contact record look-ups. This is usually the email address.

#### Return

*(string)* The field name.

#### Get the primary CRM field name

```
$field_label = wpf_get_lookup_field();
```

---

## wpf_is_pseudo_field()

**Source:** [https://wpfusion.com/documentation/functions/wpf_is_pseudo_field/](https://wpfusion.com/documentation/functions/wpf_is_pseudo_field/)

### Overview

This function checks if a WordPress meta key is a pseudo field and should only be sent to the CRM.

#### Parameters

```
wpf_is_pseudo_field( $meta_key )
```

- ```
$meta_key
```

 *(string) (Required)*: The meta key to check.

#### Return

*(bool)* Whether or not the meta key is a pseudo field.

#### Check if a meta key is a pseudo field

```
$pseudo = wpf_is_pseudo_field( $meta_key );
```

---

## wpf_get_field_type()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_field_type/](https://wpfusion.com/documentation/functions/wpf_get_field_type/)

### Overview

This function retrieves the Field Type on the Contact Fields list for a given field.

#### Parameters

```
wpf_get_field_type( $meta_key, $default = 'text' )
```

- ```
$meta_key
```

 *(string) (Required)*: The meta key to retrieve the field type of.
- ```
$default
```

 *(string) (Optional)*: The default value to return if no type is found.

#### Return

*(string)* The field type.

#### Get a fields Field Type.

```
$field_type = wpf_get_field_type( $meta_key );
```

#### Get a fields Field Type, but pass a string if no Field Type is found

```
$field_type = wpf_get_field_type( $meta_key, $default = 'default' );
```

---

## wpf_is_field_active()

**Source:** [https://wpfusion.com/documentation/functions/wpf_is_field_active/](https://wpfusion.com/documentation/functions/wpf_is_field_active/)

### Overview

This function checks if a WordPress meta key is enabled for sync with the CRM.

#### Parameters

```
wpf_is_field_active( $meta_key )
```

- ```
$meta_key
```

 *(array) (Required)*: The meta key to check.

#### Return

*(bool)* Whether or not the field is active.

#### Check if a meta key is enabled

```
$is_enabled = wpf_is_field_active( $meta_key );
```

---

## wpf_get_crm_field()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_crm_field/](https://wpfusion.com/documentation/functions/wpf_get_crm_field/)

### Overview

This function retrieves the CRM field ID for a single WordPress meta key.

#### Parameters

```
wpf_get_crm_field( $meta_key, $default = false )
```

- ```
$meta_key
```

 *(string) (Required)*: The meta key to retrieve the field ID of.
- ```
$default
```

 *(bool) (Optional)*: The default value to return if no key is found.

#### Return

*(mixed)* Returns a 
```
string
```

 of the CRM field or 
```
false
```

 if nothing is found.

#### Get a CRM field ID

```
$field_id = wpf_get_crm_field( $meta_key );
```

#### Get a CRM field ID, but return a boolean value if no ID is found

```
$contact_id = wpf_get_crm_field( $meta_key, $default = false );
```

---

## wpf_get_tag_label()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_tag_label/](https://wpfusion.com/documentation/functions/wpf_get_tag_label/)

### Overview

This function retrieves the tag name of a given tag ID as a string, returning 
```
false
```

 if there is no name.

#### Parameters

```
wpf_get_tag_label( $tag_id )
```

- ```
$tag_id
```

 *(int) (Required)*: The tag id to get the label of.

#### Return

*(mixed)* Returns a 
```
string
```

 of the tag label, or 
```
false
```

 if nothing is found.

#### Get a tag name

```
$tag_label = wpf_get_tag_label( $tag_id );
```

---

## wpf_get_tag_id()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_tag_id/](https://wpfusion.com/documentation/functions/wpf_get_tag_id/)

### Overview

This function retrieves the tag ID of a given tag name as an integer, returning 
```
false
```

 if there is no ID.

#### Parameters

```
wpf_get_tag_id( $tag_name )
```

- ```
$tag_name
```

 *(string) (Required)*: The tag name to search.

#### Return

*(mixed)* Returns a 
```
string
```

 of the tag ID, or 
```
false
```

 if nothing is found.

#### Get a tag ID

```
$tag_id = wpf_get_tag_id( $tag_label );
```

---

## wpf_is_user_logged_in()

**Source:** [https://wpfusion.com/documentation/functions/wpf_is_user_logged_in/](https://wpfusion.com/documentation/functions/wpf_is_user_logged_in/)

### Overview

This function checks if the current user is logged in to an account.

This function also supports auto-logged-in users.

#### Return

*(bool)* Whether the user is logged in.

#### Check if the current user is logged in

```
$logged_in = wpf_is_user_logged_in();
```

---

## wpf_get_users_with_contact_ids()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_users_with_contact_ids/](https://wpfusion.com/documentation/functions/wpf_get_users_with_contact_ids/)

### Overview

This function retrieves an array of WordPress user IDs with a saved CRM contact ID.

#### Return

*(array)* 
```
$user_ids
```

 The user IDs.

#### Get an array of users with contact IDs

```
$user_ids = wpf_get_users_with_contact_ids();
```

---

## wpf_get_user_id()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_user_id/](https://wpfusion.com/documentation/functions/wpf_get_user_id/)

This function retrieves a user’s WordPress user ID based on their CRM contact ID.

This function will return an integer containing the ID, otherwise it will return 
```
false
```

 if there is none.

#### Parameters

```
wpf_get_user_id( $contact_id )
```

- ```
$contact_id
```

 *(string) (Required)*: The contact ID to search by.

#### Return

*(mixed)* An 
```
int
```

 of the user ID, or 
```
false
```

 if nothing is found.

#### Get the current user’s ID

```
$user_id = wpf_get_user_id( $contact_id );
```

---

## wpf_get_current_user_email()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_current_user_email/](https://wpfusion.com/documentation/functions/wpf_get_current_user_email/)

### Overview

This function retrieves the current user’s CRM email address and can also work during [an auto-login session](https://wpfusion.com/documentation/tutorials/auto-login-links/).

#### Return

*(mixed)* A 
```
string
```

 of the users email address or 
```
false
```

 if nothing is found.

#### Get the current user’s Email Address

```
$contact_email = wpf_get_current_user_email();
```

---

## wpf_get_users_with_tag()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_users_with_tag/](https://wpfusion.com/documentation/functions/wpf_get_users_with_tag/)

### Overview

This function returns an array of user IDs that have a specified tag. You can use either a tag ID or a label.

#### Parameters

```
wpf_get_users_with_tag( $tag )
```

- ```
$tag
```

 *(string) (Required)*: The tag to search.

#### Return

*(array)* 
```
$user_ids
```

 the user IDs with the tag.

#### Get all users with the Member tag

```
$user_ids = wpf_get_users_with_tag( 'Member' );
```

#### Get all users with tag ID 123

```
$user_ids = wpf_get_users_with_tag( 123 );
```

---

## wpf_get_current_user()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_current_user/](https://wpfusion.com/documentation/functions/wpf_get_current_user/)

### Overview

This function works similarly to the [wp_get_current_user function](https://developer.wordpress.org/reference/functions/wp_get_current_user/), but it will also work during [an auto-login session](https://wpfusion.com/documentation/tutorials/auto-login-links/).

#### Return

*(WP_User)* Returns a 
```
WP_User
```

 object or 
```
false
```

 if no user is found.

#### Get the current user

```
$user = wpf_get_current_user();
if ( false !== $user ) {
	echo $user->user_email; // The email address of the current user, or temporary auto-login user
}
```

---

## add_object()

**Source:** [https://wpfusion.com/documentation/functions/add_object/](https://wpfusion.com/documentation/functions/add_object/)

### Overview

This helper function is available with Ontraport, Zoho, Salesforce, HubSpot, and other CRMs which use custom objects.

It’s a shortcut / alternative to using the [wpf_crm_object_type filter](https://wpfusion.com/documentation/filters/wpf_crm_object_type/), for cases where you just need to add a custom object one time, without changing the object type used for WP Fusion globally.

### Parameters

- ```
$data
```

: *(array)* An associative array of data to sync to the CRM, using CRM field IDs for the keys
- ```
$object_type
```

: *(string)* The object type you wish to update

### Examples

#### Create a new Lead in Salesforce

```
$data = array(
	'Email'     => 'lead@example.com',
	'FirstName' => 'Jane',
	'LastName'  => 'Doe',
);

$lead_id = wp_fusion()->crm->add_object( $data, 'Lead' );
```

#### Update an Event object in Zoho when an Event post type is updated in WordPress

```
// Runs on any post with post type "event" and updates the "Event" custom object with values Title and EventDate

function create_update_event_object( $post_id, $post, $update ) {
	
	// Don't run if WP Fusion isn't active, otherwise you'll get an error

	if ( ! function_exists( 'wp_fusion' ) ) {
		return;
	}
	
	// This is the data to be sent to the CRM

	$event_data = array(
		'Title'     => $post->post_title,
		'EventDate' => get_post_meta( $post_id, 'event_date', true )
	);
	
	// See if this object has already been synced
	
	$object_id = get_post_meta( $post_id, wp_fusion()->crm->slug . '_event_id', true );

	if ( empty( $object_id ) {

		// New event

		$object_id = wp_fusion()->crm->add_object( $event_data, 'Event' );

		if ( ! is_wp_error( $object_id ) ) {
			
			// Save the ID of the new record for future updates.
			
			update_post_meta( $post_id, wp_fusion()->crm->slug . '_event_id', $object_id );

		} else {
			
			// Error, log it.
		
			wpf_log( 'error', 0, 'Error creating event:' . $object_id->get_error_message() );
			
		}

	} else {

		// Existing event

		wp_fusion()->crm->update_object( $object_id, $event_data, 'Event' );

	}

}
	    
// save_post_event runs whenever an "event" post type is created or updated (see https://developer.wordpress.org/reference/hooks/save_post_post-post_type/)

add_action( 'save_post_event', 'create_update_event_object', 10, 3 );
```

#### Create a custom Car object in HubSpot and associate it with a contact

For more information on working with custom objects in HubSpot, see [Custom Objects with HubSpot](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/).

```
define( 'HUBSPOT_API_KEY', 'xx599590-7888-43ed-a896-5abbc2ef9aa2' );

$properties = array(
	'condition'     => 'used',
	'date_received' => '1582416000000',
	'year'          => '2014',
	'make'          => 'Nissan',
	'model'         => 'Frontier',
	'vin'           => '4Y1SL65848Z411439',
	'color'         => 'White',
	'mileage'       => '80000',
	'price'         => '12000',
	'notes'         => 'Excellent condition. No accidents.',
);

$object_type_id = '2-4370788';

$object_id = wp_fusion()->crm->add_object( $properties, $object_type_id );

if ( is_wp_error( $object_id ) ) {
	wpf_log( 'error', wpf_get_current_user_id(), 'Error adding object: ' . $object_id->get_error_message() );
	return false;
}

// Do what you want with $object_id here.

// For example to associate it with a contact (https://developers.hubspot.com/docs/api/crm/crm-custom-objects).

$contact_id          = '101';
$association_type_id = '3';

$request = "https://api.hubapi.com/crm/v3/objects/{$object_type_id}/{$object_id}/associations/contacts/{$contact_id}/{$association_type_id}/?hapikey=" . HUBSPOT_API_KEY;

$params   = array( 'method' => 'PUT' );
$response = wp_safe_remote_request( $request, $params );

if ( is_wp_error( $response ) ) {
	wpf_log( 'error', wpf_get_current_user_id(), 'Error associating object with contact: ' . $response->get_error_message() );
	return false;
}
```

---

## pull_user_meta()

**Source:** [https://wpfusion.com/documentation/functions/pull_user_meta/](https://wpfusion.com/documentation/functions/pull_user_meta/)

### Overview

This function triggers WP Fusion to load data from your CRM back to the WordPress user record. Any fields enabled for sync on the Contact Fields tab will be loaded.

#### Parameters

- ```
$user_id
```

*(Optional)*: the WordPress user ID to load the metadata for.

#### Returns

- ```
$user_meta
```

: array of key / value pairs of WordPress meta.

### Examples

#### Load a number and increment it

This example loads a custom field from the CRM, adds 1 to it if it’s numeric, and syncs the field value back to the CRM.

```
$user_meta = wp_fusion()->user->pull_user_meta( $user_id );

if ( ! empty( $user_meta['number_field'] ) && is_numeric( $user_meta['number_field'] ) ) {

	$user_meta['number_field']++;

	wp_fusion()->user->push_user_meta( $user_id, array( 'number_field' => $user_meta['number_field'] ) );

}
```

---

## push_user_meta()

**Source:** [https://wpfusion.com/documentation/functions/push_user_meta/](https://wpfusion.com/documentation/functions/push_user_meta/)

### Overview

This function allows you to sync WordPress user metadata to fields in your CRM.

#### Sending specific data

You can send specific fields by providing an array of field names and values.

```
$update_data = array(
	'first_name'   => 'Joe'
	'custom_field' => 'Custom Value'
)

wp_fusion()->user->push_user_meta( $user_id, $update_data );
```

The field keys should be WordPress meta fields keys. WP Fusion will use the field mapping you’ve set on the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) to associate the data with the corresponding fields in your CRM.

#### Parameters

```
push_user_meta( $user_id, $user_meta = false )
```

- ```
$user_id
```

 *(int) (Required)*: The user ID to push meta data to.
- ```
$user_meta
```

 *(int) (Optional)*: The user meta to push.

#### Return

*(bool)* The success status.

#### Sending all user data

You can also omit the array of update data, and WP Fusion will get all of the information it can find about the user from the database and send it to your CRM.

```
wp_fusion()->user->push_user_meta( $user_id );
```

---

## remove_tags()

**Source:** [https://wpfusion.com/documentation/functions/remove_tags/](https://wpfusion.com/documentation/functions/remove_tags/)

### Overview

This function allows you to remove an array of tags (using tag IDs) from a user.

#### Parameters

```
remove_tags( $tags, $user_id = false )
```

- ```
$tags
```

 *(array) (Required)*: The array of tags to remove.
- ```
$user_id
```

 *(int) (Optional)*: The user ID to remove tags from.

#### Return

*(bool)* The success status.

#### Remove tags from the current user

```
$tags = array(123, 456, 789);
wp_fusion()->user->remove_tags( $tags );
```

#### Remove tags from a specific user ID

```
$tags = array(123, 456, 789);
wp_fusion()->user->remove_tags( $tags, $user_id );
```

The function will return 
```
true
```

 if the tags were removed successfully, and 
```
false
```

 if there was a connection error or the user wasn’t found in the CRM. Any errors will be logged to [the WP Fusion Logs](https://wpfusion.com/documentation/getting-started/activity-logs/).

### Examples

#### Remove a tag when another tag is applied

WP Fusion includes a lot of interfaces for applying tags, but because removing tags is less common most of our integrations don’t include options for removing tags.

This example removes the tag *Pending Signup* when the tag *Profile Complete* is applied.

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

---

## apply_tags()

**Source:** [https://wpfusion.com/documentation/functions/apply_tags/](https://wpfusion.com/documentation/functions/apply_tags/)

### Overview

This function allows you to apply an array of tags to a user.

The function expects an array of tag IDs. Some CRM’s, like Infusionsoft, Ontraport, and ConvertKit use internal tag IDs to designate their tags. Other CRMs, like ActiveCampaign, Drip, AgileCRM, and Mautic don’t use tag IDs, and a tag label is sufficient.

If you’re unsure, you can always use 
```
get_tag_id()
```

 to get the appropriate tag ID for this function:

```
$tag_id = wp_fusion()->user->get_tag_id( 'Tag Name' );
```

#### Parameters

```
apply_tags( $tags, $user_id = false )
```

- ```
$tags
```

 *(array) (Required)*: The array of tags to apply to a user.
- ```
$user_id
```

 *(int) (Optional)*: The user ID to apply the tags to.

#### Return

*(bool)* The success status.

#### Apply tags to the current user (Infusionsoft and others which use tag IDs)

```
$tags = array(123, 456, 789);
wp_fusion()->user->apply_tags( $tags );
```

#### Apply tags to the current user (ActiveCampaign and others which don’t use tag IDs)

```
$tags = array('Tag One', 'Tag Two', 'Tag Three');
wp_fusion()->user->apply_tags( $tags );
```

#### Apply tags to a specific user ID

```
$tags = array(123, 456, 789);
wp_fusion()->user->apply_tags( $tags, $user_id );
```

The function will return 
```
true
```

 if the tags were applied successfully, and 
```
false
```

 if there was a connection error or the user wasn’t found in the CRM.

---

## wpf_get_tags()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_tags/](https://wpfusion.com/documentation/functions/wpf_get_tags/)

### Overview

This function retrieves all CRM tags currently associated with the user.

#### Parameters

```
wpf_get_tags( $user_id = false, $force = false )
```

- ```
$user_id
```

 *(int) (Optional)*: The user ID to search.
- ```
$force
```

 *(bool) (Optional)*: Whether to force-refresh the tags.

#### Return

*(array)* 
```
$user_tags
```

 The users tags in the CRM.

#### Get the current user’s tags

```
$tags = wpf_get_tags();
```

#### Get the tags for a different user

```
$tags = wpf_get_tags( $user_id );
```

#### Force an update of the user’s tags by sending an API call to your CRM

In this case the updated tag list will automatically be saved to the local user meta after it’s been retrieved. This example will also force-refresh the user’s contact ID (i.e. it sends two API calls).

```
$tags = wpf_get_tags( $user_id, true );
```

#### Force an update of the user’s tags without verifying the contact ID

If you’re sure the contact ID is correct, you can also force refresh the tags without looking up the contact ID first, by passing 
```
false
```

 as the third parameter.

```
$tags = wpf_get_tags( $user_id, $force_refresh = true, $lookup_contact_id = false );
```

#### Display the current user’s tags in a list

```
$tags = wpf_get_tags();

echo '<ul>';
foreach ( $tags as $tag ) {
	echo '<li>' . wpf_get_tag_label( $tag ) . '</li>';
}
echo '</ul>';
```

### Get all available tags

If you want to get all available tags in your CRM, with their names and IDs, you can do so using 
```
wpf_get_option()
```

```
$available_tags = wpf_get_option( 'available_tags' );
```

---

## wpf_get_contact_id()

**Source:** [https://wpfusion.com/documentation/functions/wpf_get_contact_id/](https://wpfusion.com/documentation/functions/wpf_get_contact_id/)

### Overview

This function retrieves a user’s CRM contact ID based on their WordPress user ID.

#### Parameters

```
wpf_get_contact_id( $user_id = false, $force_update = false )
```

- ```
$user_id
```

 *(int) (Optional)*: The user ID to the contact of.
- ```
$force_update
```

 *(bool) (Optional)*: If the contact ID should be automatically saved.

#### Return

*(mixed)* Returns a 
```
string
```

 of the contact ID, or 
```
false
```

 if nothing is found.

#### Get the current user’s contact ID

```
$contact_id = wpf_get_contact_id();
```

#### Get the contact ID for a different user

```
$contact_id = wpf_get_contact_id( $user_id );
```

#### Force an update of the user’s contact ID by sending an API call to your CRM

In this case the updated contact ID will automatically be saved to the local user meta after it’s been retrieved.

```
$contact_id = wpf_get_contact_id( $user_id, true );
```

---

## wpf_has_tag()

**Source:** [https://wpfusion.com/documentation/functions/wpf_has_tag/](https://wpfusion.com/documentation/functions/wpf_has_tag/)

### Overview

This function determines whether a user has a given tag. A tag ID or label can be provided.

```
if ( wpf_has_tag( 'Paying Customer' ) ) {

	echo "Thanks for your payment!";

}
```

Or more complex conditions can be created by combining calls to 
```
has_tag()
```

, for example:

```
if ( wpf_has_tag( 'New Customer' ) && ! wpf_has_tag( 'Watched Intro Video' )  ) {

	echo "Welcome to our site! Please watch our introduction video here:";

}
```

#### Parameters

```
has_tag( $tags, $user_id = false )
```

- ```
$tags
```

 *(mixed) (Required)*: The tag or tags.
- ```
$user_id
```

 *(int) (Optional)*: The user ID to check the tags of.

#### Return

*(bool)* Whether the user has the tag

### By User ID

To check the tags for a specific user, pass a 
```
$user_id
```

 as the second parameter:

```
if ( wpf_has_tag( 'Paying Customer', $user_id ) ) {

	echo "Thanks for your payment!";

}
```

### Array Syntax

The function also accepts an array of tag names or IDs. If the user has any of the provided tags the function will return 
```
true
```

.

```
if ( wpf_has_tag( array( 'Pending Affiliate', 'Accepted Affiliate' ) ) {

	echo "Thanks for joining our affiliate program!";

}
```

---

## wpf_user_can_access()

**Source:** [https://wpfusion.com/documentation/functions/wpf_user_can_access/](https://wpfusion.com/documentation/functions/wpf_user_can_access/)

### Overview

This function determines whether the a user can access a given post (by ID). It can use the current logged in user, as in the example below, or an alternate user ID can be provided.

#### Basic Usage

The basic usage takes a post ID and tells you whether or not the current user has access to that post, based on the access rules configured in [the WP Fusion meta box](https://wpfusion.com/documentation/getting-started/access-control/), and the current user’s logged-in status and CRM tags.

```
if ( wpf_user_can_access( $post_id ) ) {

	echo "Welcome to the post.";

} else {

	echo "Sorry, but this content is restricted.";

}
```

#### Parameters

```
wpf_user_can_access( $post_id = false, $user_id = false )
```

- ```
$post_id
```

 *(int) (Optional)*: The post ID to check.
- ```
$user_id
```

 *(int) (Optional)*: The user ID to check.

#### Return

*(bool)* Whether the user can access the post.

#### With a user ID

You can also pass in a user ID as the second argument to perform the check on other users. For example, to check by a user’s email address:

```
$user = get_user_by( 'email', 'john@smith.com' );

if ( wpf_user_can_access( $post_id, $user->ID ) ) {

	echo "Welcome to the post.";

}
```

#### Within a loop

When used within a loop, you can omit the 
```
$post_id
```

 and WP Fusion will check the access rules against the current post:

```
if ( wpf_user_can_access() ) {

	echo "Welcome to the post.";

}
```

---

