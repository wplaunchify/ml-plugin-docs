# Advanced Developer Tutorials

*Category from WP Fusion - Abandoned Cart Addon documentation*

---

## White Labelling WP Fusion

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/white-labelling-wp-fusion/](https://wpfusion.com/documentation/advanced-developer-tutorials/white-labelling-wp-fusion/)

### Overview

There may be cases where you want to rename WP Fusion in the WordPress admin, for example on a client website or as part of a [WaaS](https://blog.runcloud.io/wordpress-multisite-waas/).

All of WP Fusion’s strings can be modified using the [gettext filter](https://developer.wordpress.org/reference/hooks/gettext/). The texdomain for WP Fusion is 
```
wp-fusion
```

.

The textdomain for the addon plugins can be found at the top of each plugin’s main PHP file (for example 
```
wp-fusion-logins
```

 for the [Logins Addon](https://wpfusion.com/documentation/logins/overview/)).

### Example

In this example we’ve renamed WP Fusion to “CRM Integration”:

![](https://wpfusion.com/wp-content/uploads/2022/09/white-labelled-wp-fusion-1024x532.jpg)

The code snippet is:

```
function white_label_wp_fusion( $translation, $text, $domain ) {

	if ( 'wp-fusion' === $domain ) {
		$translation = str_replace( 'WP Fusion', 'CRM Integration', $translation );
	}

	return $translation;
}

add_filter( 'gettext', 'white_label_wp_fusion', 10, 3 );
```

### White labelling the CRM

It’s also possible to rename the connected CRM, in addition to (or instead of) renaming WP Fusion. This can be achieved with the [wp_fusion_init_crm action](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/).

---

## How to use a custom client ID for authentication

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/)

### Overview

With some CRMs, WP Fusion is registered as an app via those platforms’ developer programs. Because of this, you need an account on our site and a WP Fusion license to complete the initial authentication process with your CRM.

This applies to:

- - BirdSend
- Drift
- Klaviyo
- NationBuilder
- Salesforce
- Zoho

There may be scenarios where you want to use your own client ID or API key for authentication, and not the WP Fusion client ID. For example if you have a created a custom branded app via your CRM’s developer program, or if you don’t have a WP Fusion license.

### Using a custom client ID and authorization URL

The client ID and client secret are public properties on each CRM’s [integration class](https://wpfusion.com/feature-requests/queue-update-requests-before-calling-crm-api/). You can override them by hooking into the 
```
wp_fusion_init_crm
```

 action, which passes the CRM object by reference.

For example with Zoho:

```
function set_custom_zoho_app( &$crm ) {

	$crm->client_id        = '1000.XXXXXXXXXXXXXXXXXXXXX';
	$crm->client_secret_us = '08dccXXXXXXXXXXXXXXXXXXXXX';

}

add_action( 'wp_fusion_init_crm', 'set_custom_zoho_app' );
```

To override the initial authorization request URI for the “Authorize” button in the WP Fusion settings, use the 
```
wpf_{$crm}_auth_url
```

 filter, for example with Zoho:

```
function set_custom_zoho_auth_url() {

	return "https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.users.READ,ZohoCRM.org.READ &response_type=code&access_type=offline&redirect_uri=https%3A%2F%2Fmysite.com%2Fzoho.php&prompt=consent&client_id=XXXX";

}

add_action( 'wpf_zoho_auth_url', 'set_custom_zoho_auth_url' );
```

Note that in this example you must have registered https://mysite.com/zoho.php as the redirect URI for your app, and must have a script running at that location which is capable of listening for the authorization response and redirecting back to the WP Fusion settings page with the 
```
&code=
```

 parameter in the URL.

#### Klaviyo example

The simplest way to connect WP Fusion to a Klaviyo account without using WP Fusion’s app ID is to [create a private API key](https://help.klaviyo.com/hc/en-us/articles/7423954176283).

The required scopes for WP Fusion are 
```
accounts:read
```

, 
```
profiles:read
```

, 
```
profiles:write
```

, 
```
lists:read
```

, 
```
lists:write
```

, 
```
segments:read
```

, 
```
events:write
```

, and 
```
subscriptions:write
```

.

To use your custom API key with WP Fusion, add the following snippet to your theme’s functions.php file, or to a snippet plugin:

```
add_filter( 'wpf_get_setting_klaviyo_key', function( $key ) {
     return 'XYZ';
} );
```

This will replace the OAuth buttons in the settings with a simple input containing your API key, and a Test Connection button.

#### Salesforce example

To set your own custom Salesforce client ID and secret:

```
function set_custom_salesforce_app( &$crm ) {

	$crm->client_id     = '3MVG9CEn_O3jvv0xMf5rhesocm_5czidz9CFtu_qNZ2V0Zw.bmL0LTRRylD5fhkAKYwGxRDDRXXXXXXXXXXXX';
	$crm->client_secret = '9BB0BD5237B1EA6ED8AFE2618053XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

}

add_action( 'wp_fusion_init_crm', 'set_custom_salesforce_app' );
```

To override the initial OAuth authorization URL:

```
function set_custom_salesforce_auth_url() {

	$args = array(
		'client_id'     => wp_fusion()->crm->client_id,
		'redirect_uri'  => admin_url( 'options-general.php?page=wpf-settings&crm=salesforce' ) ),
		'response_type' => 'code',
		'scope'         => 'api refresh_token offline_access',
	);

	$url = add_query_arg( $args, 'https://login.salesforce.com/services/oauth2/token' );

	return $url;

}

add_action( 'wpf_salesforce_auth_url', 'set_custom_salesforce_auth_url' );
```

---

## How To Submit A Job On Codeable For Custom Development

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-submit-a-job-on-codeable-for-custom-development/](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-submit-a-job-on-codeable-for-custom-development/)

### Overview

Looking to expand the functionality of WP Fusion?

We’ve partnered with a team of skilled experts [through Codeable](https://wpfusion.com/go/codeable) to help you with your premium WordPress and WP Fusion development needs.

#### What is Codeable?

[Codeable](https://wpfusion.com/go/codeable) is a trusted 3rd-party provider of vetted WordPress developers who can help you with any of your WordPress development needs. To ensure you’re matched with the right developer, they have a thorough application process to make sure you get the results you want.

### How to submit a job on Codeable for custom development

1. Go to our [custom Codeable link](https://wpfusion.com/go/codeable) and click the Get a Free Estimate button.

![](https://wpfusion.com/wp-content/uploads/2021/06/codeable-home-page-1024x576-1.png)

2. On the next page, you’ll be given two options. You can either Start a Project or Start a Consultation and speak directly with Codeable experts before starting your project.

For the purposes of this doc, we’ll be starting a new project. Click the **Start a Project** button to proceed.

![](https://wpfusion.com/wp-content/uploads/2021/06/submit-a-project-1024x411.png)

3. The next page will allow you to enter the information for your project. First, select the type of project you need help with from the **I need help with:** dropdown.

The next page will allow you to enter the information for your project. First, select the type of project you need help with from the I need help with: dropdown.

![](https://wpfusion.com/wp-content/uploads/2021/06/choose-your-project-1.png)

Next, in the **My:** section, select **Plugin** from the dropdown if you need help customizing WP Fusion. If not, select the help you need.

Once ready, click the **Continue** button.

![](https://wpfusion.com/wp-content/uploads/2021/06/choose-continue-for-your-prohect.png)

4. On the next page, you’ll be able to add details to your project including:

- The project title.
- The project description.
- A URL.
- Files and screenshots for extra information.
- And you’ll be able to indicate if you want a specific expert to work on your project, or not.

![](https://wpfusion.com/wp-content/uploads/2021/06/codeable-1024x779.jpg)

5. Once happy, click **Continue** and move onto the next step.

6. On the next page, you’ll be able to indicate how complex and urgent your project is. Make your selection and you’ll see a rough estimate from Codeable. If you’re happy, click **Continue**.

7. Next, if you don’t already have one, you’ll be asked to create a Codeable account so that you can see the progress of your project and talk to developers.

8. Once ready, click **Publish my Project** and Codeable will get to work matching you with the right developers for the job.

### What happens next?

Once your project is submitted, you’ll be left in the capable hands of Codeable. Here’s some information from them to help:

![](https://wpfusion.com/wp-content/uploads/2021/06/instructions-for-what-happens-next-on-Codeable.png)

Good luck with your project, we hope you get the results you’re looking for!

---

## ActiveCampaign Event Tracking

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/)

### Overview

**Heads up!** This functionality is now included in the [Event Tracking Addon](https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/), which is available for download [in your account](https://wpfusion.com/account/) (for Plus and Professional licenses).
ActiveCampaign includes a feature called [Event Tracking](https://www.activecampaign.com/marketing-automation/site-event-tracking) which can be used in addition to [site tracking](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#activecampaign) to track additional engagement points on your website, for example video plays, course progress, forum activity, etc.

![](https://wpfusion.com/wp-content/uploads/2021/02/event-tracking-hero-mobile-639x1024.png)

WP Fusion’s ActiveCampaign integration includes a helper function to allow you to track events over the ActiveCampaign events API.

To use event tracking with WP Fusion it must first be enabled in your ActiveCampaign account, at Settings » Tracking » Event Tracking.

These examples work with the full version of WP Fusion as well as [WP Fusion Lite](https://wordpress.org/plugins/wp-fusion-lite/).

### Examples

#### Basic example

Events are tracked by making a call to 
```
wp_fusion()->crm->track_event()
```

, for example:

```
wp_fusion()->crm->track_event( 'My event' );
```

You can also optionally pass an event description:

```
wp_fusion()->crm->track_event( 'My event', 'Event description' );
```

#### Track LearnDash course progress as events

Tracking data from other plugins can be achieved by calling the 
```
track_event
```

 function while hooked to other plugins’ actions.

For example to send LearnDash course progress to ActiveCampaign as events:

```
function wpf_track_learndash_events( $data ) {

	if ( doing_action( 'learndash_course_completed' ) ) {
		$post_id = $data['course']->ID;
	} elseif ( doing_action( 'learndash_lesson_completed' ) ) {
		$post_id = $data['lesson']->ID;
	} elseif ( doing_action( 'learndash_topic_completed' ) ) {
		$post_id = $data['topic']->ID;
	} elseif ( doing_action( 'learndash_quiz_completed' ) ) {
		$post_id = $data['quiz']->ID;
	}

	$last_item = get_post( $post_id );

	// Get the post type label

	$post_type = get_post_type_object( $last_item->post_type );
	$label     = $post_type->labels->singular_name;

	wp_fusion()->crm->track_event( 'Completed ' . $label, $last_item->post_title );

	// Quizzes

	if ( isset( $data['quiz'] ) ) {

		if ( true == $data['pass'] ) {
			wp_fusion()->crm->track_event( 'Passed quiz' );
		} else {
			wp_fusion()->crm->track_event( 'Failed quiz' );
		}
	}

}

add_action( 'learndash_course_completed', 'wpf_track_learndash_events', 5 );
add_action( 'learndash_lesson_completed', 'wpf_track_learndash_events', 5 );
add_action( 'learndash_quiz_completed', 'wpf_track_learndash_events', 5 );
add_action( 'learndash_topic_completed', 'wpf_track_learndash_events', 5 );
```

That data then shows up on the student’s contact record in ActiveCampaign like so

![](https://wpfusion.com/wp-content/uploads/2021/02/activecampaign-learndash-lesson-activity-741x1024.jpg)

---

## Contributing integration modules

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/)

### Overview

WP Fusion includes integration modules with about [150 WordPress plugins](https://wpfusion.com/documentation/#integrations). Each module is contained in a single class.

It’s easy to create a new WP Fusion integration for your own plugin, and by doing so enable your plugin to communicate bidirectionally with over [40 CRMs and marketing automation tools](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

For a bootstrap to get you started, download this [example plugin from GitHub](https://github.com/verygoodplugins/wp-fusion-custom-integration).

### Setting up a custom integration module

First [download the starter plugin](https://github.com/verygoodplugins/wp-fusion-custom-integration). Then do a find and replace (case sensitive) on four strings:

- “my-plugin-slug”: This is the slug used to identify your integration.
- “My_Plugin_Name”: This is the class name for the integration.
- “My Plugin Name”: This is the human-readable name for the plugin integration
- “My/PluginDependencyClass”: This is a class name in your plugin. WP Fusion will do a 
```
class_exists()
```

on this string when determining whether or not to load the integration module.

Also make sure to rename /includes/class-my-plugin-slug.php to reflect the new slug.

### Suggested functionality

The hooks used and functionality in your integration module will depend on the type of plugin, but generally:

#### Ecommerce integrations

WP Fusion’s ecommerce integrations generally:

- Sync customers to the CRM at checkout, including their name, email address, billing details, and any custom fields
- Sync guest checkouts to the CRM and attach the guest’s contact ID to the order meta
- Allow the user to configure tags to be applied per product at checkout

For examples in WP Fusion see classes 
```
WPF_EDD
```

, 
```
WPF_Simple_Pay
```

.

#### Membership integrations

WP Fusion’s membership integrations:

- Detect custom fields that have been created for user registration or profiles, and make them available for sync using the 
```
wpf_meta_fields
```

 filter (example provided in [the sample plugin](https://github.com/verygoodplugins/wp-fusion-custom-integration/blob/main/includes/class-example-ecommerce-integration.php#L50))
- Detect a user registration and make sure that any POST’ed custom field values are properly merged into the output from the 
```
wpf_user_register
```

 filter (example provided in [the sample plugin](https://github.com/verygoodplugins/wp-fusion-custom-integration/blob/main/includes/class-example-membership-integration.php#L44))
- Detect a profile update and likewise make sure that any POST’ed custom fields are synced to the CRM with the rest of the data
- (If applicable) Apply tags in the CRM based on membership level and membership status. For example with [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/) or [WooCommerce Memberships](https://wpfusion.com/documentation/membership/woocommerce-memberships/).

For examples in WP Fusion see classes 
```
WPF_User_Meta
```

, 
```
WPF_Simple_Membership
```

, 
```
WPF_Clean_Login
```

.

#### Form integrations

WP Fusion’s form integrations:

- Register a field mapping interface within the form’s settings or form edit screens that allow mapping form fields with CRM fields (see for example the field mapping interfaces in [Ninja Forms](https://wpfusion.com/documentation/lead-generation/ninja-forms/#setup), [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#feed-settings), or [Formidable Forms](https://wpfusion.com/documentation/lead-generation/formidable-forms/#setup).
- Include a setting in the field mapping interface for *Apply Tags*, so the user can specify CRM tags to be applied when the form is submitted
- Detect when a form is submitted and extract the submitted values from the form, passing them to 
```
WPF_Forms_Helper::process_form_data()
```

 (see code examples in integrations mentioned above), and then save the new CRM contact ID to the form entry meta

#### Event integrations

WP Fusion’s event and booking plugin integrations:

- Detect custom fields that have been created for event registration or RSVP forms, and make them available for sync using the 
```
wpf_meta_fields
```

 filter (example provided in [the sample plugin](https://github.com/verygoodplugins/wp-fusion-custom-integration/blob/main/includes/class-example-ecommerce-integration.php#L50))
- Preferably allows syncing “pseudo” event fields such as event date and time, or venue, for example [see FooEvents](https://wpfusion.com/documentation/events/fooevents/#event-time-and-venue)
- Detect an event registration and make sure that any attendee fields and custom event fields are properly synced to the CRM (including from guest registrations)
- Add a meta box or setting input to the event or ticket editor that allows tags to be configured to be applied for event registration, and apply those tags during event registration

For examples in WP Fusion see classes 
```
WPF_FooEvents
```

, 
```
WPF_Events_Manager
```

, 
```
WPF_Modern_Events_Calendar
```

.

**Time zones:** When passing any data to the CRM, for example via [push_user_meta()](https://wpfusion.com/documentation/functions/push_user_meta/), make sure your dates are in UTC and not local time. WP Fusion will automatically convert dates to local time for CRMs that require it.

### Contributing to WP Fusion

We welcome and encourage new submissions for custom integration modules.

To do that first make a fork of the [integration boostrap plugin](https://github.com/verygoodplugins/wp-fusion-custom-integration). Once your integration is finished, [drop us a line](https://wpfusion.com/contact/) with a link to your fork, we’ll review the integration, and (with your permission) include it in future updates of WP Fusion.

#### Some recommendations

**Minimum versions to support:**

- PHP 7.1 and up
- WordPress 5.0 and up
- WooCommerce 3.6 and up (if applicable)

**Code standards:**

- All code should follow the [WordPress PHP code standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/).
- We recommend installing phpcs and the [WordPress-Coding-Standards package](https://github.com/WordPress/WordPress-Coding-Standards) with your editor or IDE. If committed code does not pass phpcs, it will not be accepted.
- Add code must be documented following the [PHP documentation standards](https://developer.wordpress.org/coding-standards/inline-documentation-standards/php/).

For an example of a properly coded and documented integration module, see the [integration bootstrap plugin](https://github.com/verygoodplugins/wp-fusion-custom-integration),  or for a real-world example look at WP Fusion’s [YITH WooCommerce Multi Vendor integration](https://gist.github.com/verygoodplugins/b84cbd49bb0ebcf0203daa54967dc28c).

**Internationalisation:**

All strings should be translatable via gettext. The textdomain for WP Fusion is 
```
wp-fusion
```

.

---

## Registering Custom Batch Operations

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/)

### Overview

WP Fusion includes several [batch tools](https://wpfusion.com/documentation/tutorials/batch-operations/) that allow you to perform operations in bulk, such as importing users, exporting user meta data, and [syncing historical WooCommerce orders](https://wpfusion.com/documentation/ecommerce/woocommerce/#syncing-historical-orders) to your CRM.

The batch system is based on [WP Background Processing](https://github.com/deliciousbrains/wp-background-processing), and it can be modified or extended via the use of filters.

### How it works

The batch system makes use of three filters:

- **wpf_export_options:**Registers the operation title and slug, and adds it to the list of available batch tools on the Advanced settings tab
- **wpf_batch_{slug}_init:**Queries the objects IDs (user IDs, post IDs, etc) to be processed and returns them as an array
- **wpf_batch_{slug}:**Is called on each record in the queue

![](https://wpfusion.com/wp-content/uploads/2021/01/batch-operations-mix-1024x856.jpg)The available batch operations will vary depending on which plugins are active. It’s also possible to register your own batch operations.

### Examples

#### Limit the WooCommerce orders export by date

By default the [WooCommerce orders export](https://wpfusion.com/documentation/ecommerce/woocommerce/#syncing-historical-orders) will query all orders that have yet to be processed by WP Fusion (indicated by the 
```
wpf_complete
```

 postmeta value).

This filter runs on the same operation slug (
```
woocommerce
```

), but at priority 20. This overrides WP Fusion’s built in query, and does a new query only on orders placed since March 1st 2020.

```
function my_custom_export( $order_ids ) {

	$args = array(
		'numberposts' => - 1,
		'post_type'   => 'shop_order',
		'post_status' => array( 'wc-processing', 'wc-completed' ),
		'fields'      => 'ids',
		'order'       => 'ASC',
		'meta_query'  => array(
			array(
				'key'     => 'wpf_complete',
				'compare' => 'NOT EXISTS',
			),
		),
		'date_query'  => array(
			'after' => 'March 1 2020',
		),
	);

	return get_posts( $args );

}

add_filter( 'wpf_batch_woocommerce_init', 'my_custom_export', 20 );
```

#### Export Easy Digital Downloads order date by month

Syncs the order date and time to the connected CRM for all non-recurring EDD payments made in November of the current year.

```
/**
 * Register the export option.
 *
 * @return array Options
 */
function edd_export_options( $options ) {

	$options['edd_orderdate'] = array(
		'label'   => __( 'EDD Order Date', 'wp-fusion' ),
		'title'   => __( 'Orders', 'wp-fusion' ), // 
		'tooltip' => __( 'Custom: Sync order dates for non-recurring orders in the month of November.', 'wp-fusion' ),
	);

	return $options;

}

add_filter( 'wpf_export_options', 'edd_export_options' );

/**
 * Query the payment IDs to be processed.
 *
 * @return array Payment IDs
 */

function edd_batch_init() {

	$args = array(
		'number'      => -1,
		'fields'      => 'ids',
		'monthnum'    => 11,
		'year'        => date( 'Y' ),
		'post_status' => 'publish',
	);

	$payments = edd_get_payments( $args );

	return $payments;

}

add_filter( 'wpf_batch_edd_orderdate_init', 'edd_batch_init' );

/**
 * Sync the order date for each payment
 */

function edd_batch_step( $payment_id ) {

	$payment = new EDD_Payment( $payment_id );

	$update_data = array(
		'order_date' => $payment->get_meta( '_edd_completed_date' ),
	);

	wp_fusion()->user->push_user_meta( $payment->user_id, $update_data );

}

add_action( 'wpf_batch_edd_orderdate', 'edd_batch_step' );
```

#### Pull user meta for users who registered before a specific date

This example limits the Pull User Meta operation just to users who registered after January 1st 2019.

```
function limit_by_user_registered( $user_ids ) {

	// At this point $user_ids is all users with a CRM contact ID

	foreach ( $user_ids as $i => $user_id ) {

		$user = get_userdata( $user_id );

		if ( strtotime( $user->user_registered ) < strtotime( '2019-1-1' ) ) {
			unset( $user_ids[ $i ] );
		}
	}

	// Now all users who registered before 2019 are excluded

	return $user_ids;

}

add_filter( 'wpf_batch_pull_users_meta_init', 'limit_by_user_registered', 20 );
```

#### Resync tags (No Contact ID)

This example resyncs the contact ID and tags only for users that don’t already have one stored in WordPress.

```
/**
 * Adds "No Contact ID" option to batch operations
 *
 * @return array Options
 */

function no_cid_export_options( $options ) {

	$options['no_cid'] = array(
		'label'   => 'Resync Tags (No Contact ID)',
		'title'   => 'Users',
		'tooltip' => 'Resyncs the contact ID and tags just for users that don\'t have a stored contact ID.',
	);

	return $options;

}

add_filter( 'wpf_export_options', 'no_cid_export_options' );

/**
 * No contact ID batch init
 *
 * @return array Users
 */

function no_cid_init() {

	$args = array(
		'fields'     => 'ID',
		'meta_query' => array(
			'relation' => 'OR',
			array(
				'key'     => wp_fusion()->crm->slug . '_contact_id',
				'compare' => 'NOT EXISTS',
			),
			array(
				'key'   => wp_fusion()->crm->slug . '_contact_id',
				'value' => false,
			),
		),
	);

	$users = get_users( $args );

	return $users;

}

add_action( 'wpf_batch_no_cid_init', 'no_cid_init' );

/**
 * No contact ID batch - single step
 *
 * @return void
 */

function no_cid_step( $user_id ) {

	wp_fusion()->user->get_tags( $user_id, true );

}

add_action( 'wpf_batch_no_cid', 'no_cid_step' );
```

---

## Scheduled Synchronization Using Cron

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/)

### Preface

**If you’re reading this page and you’re new to WP Fusion, then you’ve come to the wrong place.**

WP Fusion can automatically sync data bidirectionally with your CRM *without the use of cron jobs*.

That’s achieved by [setting up webhooks](https://wpfusion.com/documentation/#webhooks) in your CRM, so your CRM notifies WP Fusion when a record has been modified, and the updated data is loaded into WordPress at that time.

Webhooks are way more efficient than loading data using a cron job or scheduled action.

### Overview

There may be some scenarios where you need to re-sync or import data on a schedule, outside of webhooks.

For example maybe your CRM doesn’t support webhooks for the trigger you need, or your site is hosted on an internal network and can’t receive data from outside systems.

In that case you can schedule any one of WP Fusion’s [batch operations](https://wpfusion.com/documentation/tutorials/batch-operations/) using WordPress’ cron system.

To do so, you make a call to 
```
wp_fusion()->batch->batch_init( $method );
```

 in your scheduled event callback, where 
```
$method
```

 is the name of the operation you’d like to perform.

You can see the internal batch operation names by inspecting the HTML radio values for the various batch operations on the Advanced tab in the WP Fusion settings.

The operation name will be the 
```
value
```

 parameter on the 
```
<input type="radio">
```

 element.

### Examples

#### Import every contact with a specific tag, daily

This snippet imports every new contact with tag ID 123, once daily.

```
function do_wpf_daily_import() {

	$args = array(
		'tag'    => 123, // The tag ID or list ID (with HubSpot) to import
		'role'   => 'subscriber',
		'notify' => false, // Set to true to send a welcome email
	);

	wp_fusion()->batch->batch_init( 'import_users', $args );

}

add_action( 'wpf_daily_import', 'do_wpf_daily_import' );

if ( ! wp_next_scheduled( 'wpf_daily_import' ) ) {
	wp_schedule_event( time(), 'daily', 'wpf_daily_import' );
}
```

#### Resync tags for all users every Friday

This snippet runs a [Resync Tags operation](https://wpfusion.com/documentation/tutorials/batch-operations/#resync-tags) every Friday.

```
function do_wpf_update_tags() {
	
	if ( date ('l') !== 'Friday' ) {
		return;
	}

	wp_fusion()->batch->batch_init( 'users_tags_sync' );

}

add_action( 'wpf_update_tags_weekly', 'do_wpf_update_tags' );

if ( ! wp_next_scheduled( 'wpf_update_tags_weekly' ) ) {
	wp_schedule_event( time(), 'daily', 'wpf_update_tags_weekly' );
}
```

#### Load metadata for all users, daily

This snippet runs a [Pull User Meta operation](https://wpfusion.com/documentation/tutorials/batch-operations/#pull-user-meta) daily at 5pm UTC.

```
function do_wpf_pull_meta() {

	wp_fusion()->batch->batch_init( 'pull_users_meta' );

}

add_action( 'wpf_pull_meta_daily', 'do_wpf_pull_meta' );

if ( ! wp_next_scheduled( 'wpf_update_tags_daily' ) ) {
	wp_schedule_event( strtotime( '5pm' ), 'daily', 'wpf_pull_meta_daily' );
}
```

#### Sync WooCommerce orders daily

This operation runs daily at mightnight and syncs any WooCommerce orders to your CRM that haven’t yet been synced.

```
function do_wpf_orders_sync() {
	wp_fusion()->batch->batch_init( 'woocommerce', array( 'skip_processed' => true ) );
}

add_action( 'wpf_daily_order_sync', 'do_wpf_orders_sync' );

if ( ! wp_next_scheduled( 'wpf_daily_order_sync' ) ) {
	wp_schedule_event( strtotime( '12am' ), 'daily', 'wpf_daily_order_sync' );
}
```

### Tips

#### Monitoring

We’d recommend using a cron management plugin like [Advanced Cron Manager](https://wordpress.org/plugins/advanced-cron-manager/) or [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/) to ensure that the event has been scheduled, and to test the task.

#### Performance

The background processes works through records sequentially (there are no parallel threads), and is designed to use no more than 80% of your site’s available memory. Generally speaking, the background process should not be able to take your site offline.

However, it can make your site noticeably slower.

**As a rule of thumb, assume that every user / record to be synced requires 5 seconds of processing time.**

That means if you’re running a *Resync Tags* operation on 1,000 users daily, your site will be slowed down for about 80 minutes every day. That’s not the end of the world if you schedule the operation during the middle of the night.

However, if you have 10,000 users, the operation would be running for 13 hours of every day… which would likely cause a noticeable performance decrease. In that case it would be preferable to set the cron schedule so the task only runs once a week instead of once a day.

---

## Detecting and Syncing Additional Fields

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/)

### Overview

If you’re reading this page then you’re probably trying to sync a field value with your CRM that isn’t currently supported by WP Fusion.

While WP Fusion can sync any data from WordPress to contact records in your CRM, it does not work “auto-magically” with every piece of data you see in your WordPress admin. That has to do with where your field data is stored.

**We can break the kinds of data that WP Fusion syncs into three categories:**

1. Data from the normal user tables – Works great with no extra setup
2. User data that’s in a different table – Requires some work
3. Data that’s calculated or not related to a specific user – Can be difficult

### Normal tables

WP Fusion can automatically detect and sync any data found in the 
```
wp_users
```

 and 
```
wp_usermeta
```

 database tables bidirectionally with any fields in your CRM.

![](https://wpfusion.com/wp-content/uploads/2020/12/Works-Well@2x-1-1024x310.png)Syncing data between just two tables (your users and your CRM) is automatic and requires no extra setup
These tables are the standard place where most plugins store data relating to a specific user. So even if WP Fusion doesn’t have a specific integration with a plugin, it’s likely the fields from that plugin will still show up under [the Additional Fields section](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#additional-fields) in the Contact Fields settings, and can be synced with your CRM without any extra work.

**Note:** To build the list of Additional Fields, for performance reasons WP Fusion only scans the usermeta of your own admin user. If you’ve just added a new field and it’s not showing, try saving some data in that field for your own admin user.

### User data that’s in a different table

Some plugins, like BuddyPress, store user profile data in different database tables.

When we talk about WP Fusion having an “integration” with a membership plugin (like [the ones listed here](https://wpfusion.com/documentation/membership/)), that means WP Fusion has additional code to:

- Detect the available fields from that plugin’s custom tables, and list them in the Contact Fields in the settings
- Extract the data from the custom tables and sync it to your CRM
- Detect when data has been loaded from your CRM, and if that data belongs in a custom table, store it there

For example with BuddyPress, let’s say we have a custom XProfile field for *Favorite Color,*in the 
```
wp_bp_xprofile_data
```

 table. How that sync looks visually is something like:

![](https://wpfusion.com/wp-content/uploads/2020/12/Multiple-Tables@2x-1024x557.png)Syncing data between your CRM and multiple WordPress tables can require some extra attention if using a non-supported plugin
And then in the code, that requires three functions:

#### Detect the custom fields and list them for sync

Step one is figuring out which fields are available, and using the [wpf_meta_fields](https://wpfusion.com/documentation/filters/wpf_meta_fields/) filter to register them as available for sync.

With BuddyPress we make use of the 
```
bp_xprofile_get_groups()
```

 function, like

```
function example_prepare_buddypress_fields( $meta_fields ) {

	// Get the field groups

	$groups = bp_xprofile_get_groups( array(
		'fetch_fields' => true,
	) );

	foreach ( $groups as $group ) {

		foreach ( $group->fields as $field ) {

			// Register the field in the list using the ID and label

			$key = 'bbp_field_' . $field->id;

			$meta_fields[ $key ] = array(
				'label' => $field->name,
				'type'  => $field->type,
			);

		}
	}

	return $meta_fields;

}

add_filter( 'wpf_meta_fields', 'example_prepare_buddypress_fields' );
```

Which makes the fields show up for sync in the settings like this:

![](https://wpfusion.com/wp-content/uploads/2016/06/buddypress-fields-1024x356.jpg)

#### Extract the data from the custom table and sync it to the CRM

When a user registers or a [Push User Meta operation](https://wpfusion.com/documentation/tutorials/batch-operations/#push-user-meta) is run, WP Fusion tries to get all of the data it can out of the database for that user.

That data is then passed through the [wpf_get_user_meta](https://wpfusion.com/documentation/filters/wpf_get_user_meta/) filter, which allows us to merge in data from different sources.

For example the code to load and sync the XProfile data would look like:

```
function example_get_buddypress_fields( $user_meta, $user_id ) {

	$profile_data = BP_XProfile_ProfileData::get_all_for_user( $user_id );

	// Get the profile data and merge it into the user_meta

	foreach ( $profile_data as $field ) {
		$key               = 'bbp_field_' . $field['field_id'];
		$user_meta[ $key ] = $field['field_data'];
	}

	return $user_meta;

}

add_filter( 'wpf_get_user_meta', 'example_get_buddypress_fields', 10, 2 );
```

#### Load data from the CRM into the custom tables

Then, going the other direction, we want to make sure that data loaded from the CRM is properly stored in the custom database table, not the 
```
wp_usermeta
```

 table.

For that we make use of the 
```
wpf_set_user_meta
```

 filter. For example with BuddyPress, that code looks like:

```
function example_set_buddypress_fields( $user_meta, $user_id ) {

	foreach ( $user_meta as $key => $value ) {

		if ( strpos( $key, 'bbp_field_' ) === 0 ) { // If the field key starts with bbp_field_

			$field_id = str_replace( 'bbp_field_', '', $key );

			$field        = new BP_XProfile_ProfileData( $field_id, $user_id );
			$field->value = $value;
			$field->save(); // Save the field to the wp_bp_xprofile_data table

			unset( $user_meta[ $key ] ); // unset() the value so it's not saved to wp_usermeta

		}
	}

	return $user_meta;

}

add_filter( 'wpf_set_user_meta', 'example_set_buddypress_fields', 10, 2 );
```

And there you have it. With those three code snippets, you can register and bidirectionally sync a user meta field from a custom database table.

### Data that’s not in a table

There may be some things you’d like to sync with your CRM that *aren’t actually stored in any one place*. Some examples:

- Customer lifetime value
- Most recently commented post
- Most recent quiz score
- Subscription renewal date

With things like this, they aren’t actually stored in any one place in the database that can be directly synced with your CRM, you’d have to write the code to calculate the values.

#### Register the field

For example, let’s say you want to sync a WooCommerce customer’s lifetime value with your CRM. First register the field in the WP Fusion settings.

```
function example_prepare_ltv_field( $meta_fields ) {

	$meta_fields['lifetime_value'] = array(
		'label'  => 'Lifetime Value',
		'group'  => 'woocommerce',
		'pseudo' => true,
	);

	return $meta_fields;

}

add_filter( 'wpf_meta_fields', 'example_prepare_ltv_field' );
```

In this example we’ve set 
```
pseudo
```

 to 
```
true
```

 to indicate that the field doesn’t really exist. This is optional but it stops WP Fusion from loading the value back from your CRM, and filling up your database with unnecessary meta values.

#### Calculate and sync the data

Similar to the BuddyPress example, we’ll use the 
```
wpf_get_user_meta
```

 filter to merge the custom value into the data that’s being sent to the CRM.

```
function example_sync_lifetime_value( $user_meta, $user_id ) {

	$user_meta['lifetime_value'] = 0;

	$customer_orders = get_posts( array(
		'posts_per_page' => -1,
		'post_type'      => 'shop_order',
		'post_status'    => wc_get_is_paid_statuses(),
		'meta_key'       => '_billing_email',
		'meta_value'     => $user_meta['billing_email'],
		'orderby'        => 'ID',
		'order'          => 'DESC',
	));

	if ( ! empty( $customer_orders ) ) {

		foreach ( $customer_orders as $order_id ) {

			$order = wc_get_order( $order_id );

			$order_total = $order->get_total();

			$user_meta['lifetime_value'] += floatval( $order_total );

		}
	}

	return $user_meta;

}

add_filter( 'wpf_get_user_meta', 'example_sync_lifetime_value', 10, 2 );
```

In this case, the code is quite a bit more complicated, since we’re not just pulling the data out from another part of the database. To calculate the lifetime value you first need to search for all orders placed by that customer, and then for each order increment the lifetime value field by that order’s total.

This also can introduce performance problems on stores with a large number of orders. In those cases you might want to cache the value using a transient, or create a separate meta key that tracks the customer’s LTV and is incremented with each new order.

### Examples

#### Sync booking dates from multiple FooEvents products to different date fields in the CRM

#### Sync subscription fields from multiple subscription products to their own fields

This example works with WooCommerce subscriptions, it registers each of your subscription products as a separate field on the contact fields list. For each you can sync the renewal date, status, and start date to a separate custom field in your CRM.

---

## Deleting Users via Webhooks

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/deleting-users-via-webhooks/](https://wpfusion.com/documentation/advanced-developer-tutorials/deleting-users-via-webhooks/)

### Overview

WP Fusion doesn’t include any built in functionality for deleting WordPress users. Since deleted users can’t be recovered, we wouldn’t want to be responsible for any accidental deletion of your data.

However there are some scenarios where you may need to automatically delete WordPress users as part of an automation or field change in your CRM. There are two ways to do that.

#### Via applying a tag

This code runs whenever a user’s tags are loaded from the CRM, either [via a webhook](https://wpfusion.com/documentation/#webhooks) or a Resync Tags [batch operation](https://wpfusion.com/documentation/tutorials/exporting-data/).

If the tag REMOVE USER is applied to the contact in your CRM, the user will be permanently deleted.

#### Via updating a field

If you’re using Salesforce or a CRM that doesn’t make much use of tags, you can also do the same thing by updating a field value.

This code runs when user metadata is loaded from the CRM, and if the “role” field is enabled for sync and the role is “deleted”, the user will be deleted.

---

## Additional Code Examples

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/additional-code-examples/](https://wpfusion.com/documentation/advanced-developer-tutorials/additional-code-examples/)

### Overview

We have a growing library of code examples for WP Fusion [over at GitHub](https://gist.github.com/jack-arturo). Some examples:

### Access Control

#### Add the current user’s tags as classes to the HTML body element:

#### Delete a user in WordPress when a specific tag is applied:

#### Bypass WP Fusion’s content restriction on RSS feed content

#### Unlock any locked content when visited from a Facebook link

#### Bypass WP Fusion’s content protection when someone accesses your site from a specific IP address:

#### Inherit access rules from Memberium

### Tracking user activity

#### Applies a tag when a user has viewed specific posts or pages more than X times

### Syncing Data

#### Sets users imported by webhook to have usernames generated from their first and last names, instead of email address

#### Extends the HTTP timeout to 60 seconds

#### Sends API calls non-blocking during login

### Custom Objects

#### Change CRM object type to Leads for Salesforce

#### Create / update a custom object in Zoho or Salesforce when a post is updated:

---

## Applying and Removing Tags with JavaScript

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/applying-removing-tags-with-javascript/](https://wpfusion.com/documentation/advanced-developer-tutorials/applying-removing-tags-with-javascript/)

### Overview

WP Fusion has a basic JavaScript API that lets you apply and remove tags from the current logged in user.

The AJAX methods are 
```
apply_tags
```

 and 
```
remove_tags
```

, and they accept a comma-separated list of tags.

Note, to make use of the 
```
wpf_ajax.ajaxurl
```

 variable, **Link Click Tracking** should be turned on in the WP Fusion settings, on the Advanced tab. You can also use your own 
```
ajaxurl
```

 variable.

### Examples

#### Apply tags with JavaScript

```
var data = {
	'action' : 'apply_tags',
	'tags'   : 'Tag One, Tag Two'
};

$.post(wpf_ajax.ajaxurl, data);
```

#### Remove tags with JavaScript

```
var data = {
	'action' : 'remove_tags',
	'tags'   : 'Tag One, Tag Two'
};

$.post(wpf_ajax.ajaxurl, data);
```

---

## Creating Custom CRM Modules

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/)

### Overview

WP Fusion can be extended to connect to additional CRMs or other contact databases outside of our [included integrations](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

WP Fusion’s integration modules are standardized across all our supported CRMs. Once the integration module is complete, it allows [100+ of the most popular WordPress plugins](https://wpfusion.com/documentation/#integrations) to communicate bidirectionally with your CRM or marketing automation platform. In most cases this is significantly faster and cheaper than developing custom CRM integrations one plugin at a time.

For a bootstrap to get you started, download this [example plugin from GitHub](https://github.com/verygoodplugins/wp-fusion-custom-crm).

**Not sure where to start?** We recommend [Codeable](https://wpfusion.com/go/codeable).

#### Requirements

While WP Fusion is pretty flexible, it does not work with all platforms.

For WP Fusion to work properly, your CRM or marketing automation tool must at minimum have API methods for:

- Get all available tags (or “segments”, “groups”, “static lists”, aka whatever is going to be used for segmenting contacts)
- Get all available contact custom fields (or “attributes”, “properties”, etc.)
- Search for a contact ID by email address
- Load the tags for a contact, by ID
- Apply tags to a contact, by contact ID
- Remove tags from a contact, by contact ID
- Add a new contact, and return a contact ID
- Update a contact by ID
- Load a contact and all their properties, by contact ID
- (optional) Search for contacts by tag name or ID. This is required for the [Import Tool](https://wpfusion.com/documentation/tutorials/import-users/) to work.

### Setting up a custom CRM module

First [download the starter plugin](https://github.com/verygoodplugins/wp-fusion-custom-crm). Then do a find and replace (case sensitive) on two strings:

- “custom”: This is the slug for the integration. Change it to something like “my_crm_name”
- “Custom”: This is the title for the integration, and is also used for the class names. Change it to something like “My_CRM_Name”

Also change the file names to reflect the new slug.

Then you can go through each of the methods in class-wpf-custom.php and update them with the API calls specific to your integration, [following the guide here](https://wpfusion.com/documentation/advanced-developer-tutorials/how-wp-fusion-interfaces-with-multiple-crms/).

#### File structure

There are three important files:

- **wp-fusion-custom-crm.php:**This is the base plugin file. It defines the plugin name, loads the dependencies, and adds the custom CRM to the dropdown in WP Fusion’s setup tab.
- **class-wpf-custom.php:** This is the base class for custom module. It includes all API calls and methods relating to sending and retrieving data.
- **class-wpf-custom-admin.php:** This file is only loaded in the WordPress admin. It defines the settings required to establish a connection, and contains any additional admin functionality.

#### Notes

```
$supports
```

: This variable declares some CRM-specific features to other aspects of WP Fusion. If the CRM supports “add_tags”, then WP Fusion’s tag dropdowns will support typing in a new tag name on the fly. If the platform uses tag IDs, or requires tags to be registered before they’re used, don’t declare support for “add_tags”.

“add_fields” works similarly to “add_tags”. If the CRM supports “add_fields”, users will be able to enter custom fields on the fly. Don’t use this if the platform requires field IDs.

#### Contribution guidelines

For contribution and style guidelines, [see this doc](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/#contributing-to-wp-fusion).

---

## Sending data to two different CRMs (Intercom Example)

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/)

### Overview

In the last case study, [we explored a solution](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/) for a customer who wanted WP Fusion to segment his site users into two different ActiveCampaign accounts, depending on their user role.

In this article, we’ll be dealing with a slightly different problem. This customer uses both Intercom and ActiveCampaign, with ActiveCampaign as his primary CRM (because of the lack of marketing automation features in Intercom).

To keep WP Fusion easy to learn and configure, we don’t natively support connecting your WordPress site to more than one CRM at a time. In fact it’s generally better for your business if you can keep all of your contact data in one system, instead of having it fragmented across several platforms.

#### The objective

But there are some exceptions to the rule. In this case, the customer would like to **use ActiveCampaign as their primary CRM**, but also be able to simultaneously**tag contacts in Intercom for certain events.**

#### The solution

As we discussed in the [introduction to WP Fusion’s CRM API](https://wpfusion.com/documentation/advanced-developer-tutorials/how-wp-fusion-interfaces-with-multiple-crms/), all communication with your CRM is done via interfacing with the 
```
wp_fusion()->crm
```

 object. In this case, WP Fusion is configured to connect to ActiveCampaign.

But it’s also possible to create and interface with a secondary CRM instance by simply including the appropriate file and passing in your connection details.

You can see the [finished code on GitHub](https://gist.github.com/verygoodplugins/8ac75415dc9528d0ea9df368a67f0f36) here, or continue reading below for a more detailed explanation:

#### Setting things up

```
define( 'INTERCOM_ACCESS_TOKEN', 'aG9tOjyIyZmMxZDc2X2YxMzBfNDBhZV9hOTVjXzRhZDRlNzBiZWMyMzoxOjA=' );

global $intercom;
```

At the top of the file, we have a place to define your Intercom access token. This will be used later when we first set up the Intercom CRM object.

We also declare 
```
$intercom
```

 as a global, so that it can be re-used across functions while only having to be initialized once.

#### Initializing the Intercom CRM object and configuring the connection

```
function wpf_connect_to_intercom() {

	global $intercom;

	if( is_object( $intercom ) ) {
		return $intercom;
	}

	require_once WPF_DIR_PATH . 'includes/crms/intercom/class-intercom.php';

	$intercom = new WPF_Intercom;
	$intercom->get_params( INTERCOM_ACCESS_TOKEN );

	return $intercom;

}
```

This function is responsible for setting up the Intercom CRM object, so it can be used in the other functions. **Here’s how it works:**

- The first thing we do is check the global 
```
$intercom
```

 variable. If it’s already been set up, then nothing more needs to be done.
- If Intercom hasn’t been set up yet, we include WP Fusion’s Intercom integration class, and enable the API connection by providing it with your access token.
- Now the Intercom CRM object is ready to go (it’s that easy!), and you have access to [all the available methods we covered earlier](https://wpfusion.com/documentation/advanced-developer-tutorials/how-wp-fusion-interfaces-with-multiple-crms/) when looking at the WP Fusion CRM API.

#### A helper function to make it easier to deal with Intercom contact IDs

This second function isn’t essential, but since we’ll be applying tags to Intercom contacts, which have their own contact IDs, I’ve included it to help reduce the number of API calls.

By storing the contact IDs for any users with known Intercom contact records, we won’t have to look them up again when we want to apply tags.

```
function wpf_get_intercom_contact_id( $user_id ) {

	$contact_id = get_user_meta( $user_id, 'wpf_intercom_contact_id', true );
	
	if( ! empty( $contact_id ) ) {
		
		return $contact_id;

	} else {

		$intercom = wpf_connect_to_intercom();

		$user = get_user_by( 'id', $user_id );
		$contact_id = $intercom->get_contact_id( $user->user_email );

		if( ! is_wp_error( $contact_id ) && $contact_id != false ) {

			update_user_meta( $user_id, 'wpf_intercom_contact_id', $contact_id );
			return $contact_id;

		} else {

			return false;

		}

	}

}
```

**Here’s what we’re doing:**

- First check the WordPress user’s meta data for an Intercom contact ID. If one is found, we can use it right away.
- If there is no contact ID saved, then use the Intercom API to look up the user based on their email address.
- If there were no errors, and a contact ID was found, then we update the user’s metadata for future usage.
- If no contact exists, return false.

#### Sending new user registrations to Intercom, in addition to ActiveCampaign

This next function shows how you can create new Intercom contacts at user registration, after they’ve been added to ActiveCampaign.

```
function wpf_add_to_intercom( $user_id, $contact_id, $post_data ) {

	// Get the Intercom CRM object
	$intercom = wpf_connect_to_intercom();

	// Check if there's already a contact record in Intercom
	$contact_id = $intercom->get_contact_id( $post_data['user_email'] );

	if( ! is_wp_error( $contact_id ) && $contact_id == false ) {

		// If there's no existing contact, let's create one

		// You have to manually specify Intercom internal fields here
		// since the WPF Settings >> Contact fields tab is configured for ActiveCampaign

		$contact_data = array(
			'email'		=> $post_data['user_email'],
			'name'		=> $post_data['first_name'] . ' ' . $post_data['last_name']
		);

		// "false" in the second parameter tells it not to use the field mapping set up in the WP Fusion settings
		$contact_id = $intercom->add_contact( $contact_data, false );

	}

	// Save the contact ID for later reference
	update_user_meta( $user_id, 'wpf_intercom_contact_id', $contact_id );

	// Now you can apply tags
	$intercom->apply_tags( array( 'Tag One', 'Tag 2' ), $contact_id );

}

add_action( 'wpf_user_created', 'wpf_add_to_intercom', 10, 3 );
```

This function is hooked to the 
```
'wpf_user_created'
```

 action, which is triggered whenever a user registers on your site and a new CRM contact has been created (in this case in ActiveCampaign).

**Here’s what we’re doing:**

- First we get the Intercom CRM object, either by creating it and configuring the access token, or by retrieving the existing CRM object from the global if it already exists.
- Next, we use the 
```
wpf_get_intercom_contact_id()
```

 function (above) to see if we can get a contact ID for the new user. Even though they just registered on the site, they may already be in Intercom… so we check that to avoid creating duplicate contacts.
- If there was no error in looking up the contact ID, and a contact ID doesn’t exist, we proceed to create a new contact:
- Because WP Fusion is configured for ActiveCampaign, the settings under WP Fusion >> Contact Fields won’t be accurate here.
- In this case I’ve used Intercom’s internal 
```
'email'
```

 and 
```
'name'
```

 fields to create the contact. But any contact data can be added in this way.
- See here for a list of [the internal field names for an Intercom contact record](https://developers.intercom.com/v2.0/reference#user-model).
- Finally, we utilize the Intercom CRM object to create the new contact, by calling 
```
$intercom->add_contact( $contact_data, false );
```
- This will return the contact ID of the newly created Intercom contact.
- After the contact has been created, we save the contact ID to their user meta for future use.
- And now, with a contact ID available, you can apply any tags that you’d like to be added at registration.

#### Applying tags in Intercom when they’re applied in ActiveCampaign

This function follows a similar format as the previous one, but this time we’re using the 
```
'wpf_tags_applied'
```

 hook, which is fired whenever a tag has been applied by WP Fusion.

In this case, any tags that have been applied in ActiveCampaign will be applied simultaneously in Intercom.

```
function wpf_apply_tags_in_intercom( $user_id, $tags ) {

	$intercom = wpf_connect_to_intercom();

	$contact_id = wpf_get_intercom_contact_id( $user_id );

	if( $contact_id !== false ) {
		$intercom->apply_tags( $tags, $contact_id );
	}

}

add_action( 'wpf_tags_applied', 'wpf_apply_tags_in_intercom', 10, 2 );
```

**Here’s what we’re doing:**

- As before, we’re either creating or retrieving an existing CRM object to make our requests to.
- We look up the contact ID, using the 
```
wpf_get_intercom_contact_id()
```

 function from earlier.
- If the user does have a contact ID in Intercom, we use the CRM object to apply the relevant tags.

### In summary

Obviously this is a very niche example, and it could be customized to be even more specific. For example, to only add contacts to Intercom when a Gravity Form is submitted, or to only tag contacts in Intercom when a lesson is marked complete.

But it hopefully demonstrates how WP Fusion, as a framework, can be extended to accommodate even the most complex business requirements. And the methods we’ve explored here should serve as a foundation for any more specific scenarios you’d like to implement.

And, importantly, WP Fusion gives you a system where these kinds of complex API operations can be executed with a minimal amount of custom code. If you return to view the full [Gist on GitHub](https://gist.github.com/verygoodplugins/8ac75415dc9528d0ea9df368a67f0f36), you’ll see we did all of this in just 51 lines of code.

We really enjoy coming up with these kinds of solutions for our customers. If you’re interested in discussing implementation ideas for your own project, [send us a message](https://wpfusion.com/support/contact/), we’d love to hear from you!

---

## Connecting to two different ActiveCampaign accounts

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/)

### Overview

This is an case study in how we’ve use the classes and methods discussed earlier in this section to help a customer solve a very unique problem. This customer is using ActiveCampaign as his CRM, and has a very large contact list (over 25,000 contacts).

This customer had two types of WordPress users he needed to track in ActiveCampaign: Customers, and Affiliates. For his small group of affiliates, he needed the pipeline automation and sales attribution features that come with [ActiveCampaign’s Professional plan](https://www.activecampaign.com/pricing/). But a Professional plan for 25,000 contacts would cost $599 a month.

#### The approach

It didn’t make sense to be paying for the Professional package when those features were only needed for a small subset of his contacts. So we proposed **to set up two ActiveCampaign accounts**— one on the Lite plan for his primary list, and a second Professional account for his affiliates and partners.

#### The solution

Out of the box, WP Fusion can only connect to one CRM at a time. But the flexibility of WP Fusion’s framework makes it easy to solve even very complex requirements like this. You can see the [finished plugin file on GitHub](https://gist.github.com/verygoodplugins/39b82f3cc8559c92305e36263620729c) here, or continue reading below for a more detailed explanation.

#### Setting things up

As we discussed in the [introduction to WP Fusion’s CRM API](https://wpfusion.com/documentation/advanced-developer-tutorials/how-wp-fusion-interfaces-with-multiple-crms/), all communication with your CRM is done via interfacing with the 
```
wp_fusion()->crm
```

 object. In this case, it was configured to connect to the main ActiveCampaign account, the one with all of the customers.

**Let’s call that Account A — Customers**

What we want to do is create a new 
```
wp_fusion()->crm
```

 object, this time connected to the AC account for affiliates and partners.

**We’ll call that Account B — Affiliates**

When an affiliate registers or updates their account, we’ll temporarily swap the CRM objects, so the contact data is sent to the right place.

```
define( 'ACCOUNT_TWO_URL', 'https://account2.api-us1.com' );
define( 'ACCOUNT_TWO_KEY', 'APIKEY' );

define( 'WPF_DISABLE_QUEUE', true );

global $wpf_ac_app_swap;
global $wpf_ac_switched;

$wpf_ac_app_swap	= false;
$wpf_ac_switched	= false;
```

In the first lines of the plugin, we’re defining two constants, 
```
ACCOUNT_TWO_URL
```

, and 
```
ACCOUNT_TWO_KEY
```

. This will be used to initialize the connection to the second account.

We also need to disable WP Fusion’s API queue in this case, because it doesn’t play nicely with swapping the active CRM multiple times on a page load.

Finally, we set two globals:

- **$wpf_ac_app_swap**: When we swap the 
```
wp_fusion()->crm
```

 object from Account A to Account B, this global will hold onto Account A until we’re ready to switch back.
- **$wpf_ac_app_switched**: This will provide an easy way to check whether we’re connected to Account A or Account B. When we switch to Account B, 
```
$wpf_ac_switched
```

 is set to “true”. And when we switch back, it’s returned to “false”

#### Determining when to switch

```
function wpf_is_account_two( $user_id ) {

	$roles = array( 'deals_contributor' );
	$user = get_userdata( $user_id );

	if ( affwp_is_affiliate( $user_id ) ) {
		return true;
	}

	foreach ( $roles as $role ) {
		if ( 'deals_contributor' === $user->role ) {
			return true;
		}
	}

	return false;
}
```

In order to know when the accounts need to be switched, we have this helper function at the top of the plugin. It accepts a user ID, and if the user has a role “deals_contributor”, or if they’re a registered AffiliateWP affiliate, then **the user has to go to Account B**.

If the user doesn’t meet those criteria, the function returns false, and **the data is sent to Account A**.

#### Switching from Account A to Account B

We’ve included add_action()’s for every relevant function [in the WPF_User class](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/), and set 
```
wpf_maybe_switch_to_account_two()
```

 as the callback. These actions are triggered at the start of each function, before any data has been sent. We’ll use this to determine if the account needs to be switched.

```
function wpf_maybe_switch_to_account_two( $user_id ) {

	global $wpf_ac_app_swap;
	global $wpf_ac_switched;

	if( wpf_is_account_two( $user_id ) && $wpf_ac_switched == false ) {

		// If user should be sent to second app, and the first app is currently active
		if( $wpf_ac_app_swap == false ) {

			// If apps haven't been swapped yet, move first app into swap variable
			$wpf_ac_app_swap = wp_fusion()->crm->app;

			// And initialize second app connection
			wp_fusion()->crm->connect( ACCOUNT_TWO_URL, ACCOUNT_TWO_KEY, true );

		} else {

			// If second app is already saved in the swap, move it to a temp var
			$temp_second_app = $wpf_ac_app_swap;

			// Store first app in swap
			$wpf_ac_app_swap = wp_fusion()->crm->app;

			// Put second app back into use
			wp_fusion()->crm->app = $temp_second_app;

		}

		// Set $wpf_ac_switched to true to indicate we're using the second app
		$wpf_ac_switched = true;

	}
}

add_action( 'wpf_user_register_start', 'wpf_maybe_switch_to_account_two' );
add_action( 'wpf_get_contact_id_start', 'wpf_maybe_switch_to_account_two' );
add_action( 'wpf_pre_pull_user_meta', 'wpf_maybe_switch_to_account_two' );
add_action( 'wpf_get_tags_start', 'wpf_maybe_switch_to_account_two' );
add_action( 'wpf_apply_tags_start', 'wpf_maybe_switch_to_account_two' );
add_action( 'wpf_remove_tags_start', 'wpf_maybe_switch_to_account_two' );
add_action( 'wpf_push_user_meta_start', 'wpf_maybe_switch_to_account_two' );
```

**This function works as follows:**

- We first load up the globals for 
```
$wpf_ac_app_swap
```

 and 
```
$wpf_ac_switched
```

 so the function is aware of the current state of things.
- The function then checks to see if the user in question should be sent to **Account B**, by calling our 
```
wpf_is_account_two()
```

 function.
- It then confirms that 
```
$wpf_ac_switched
```

 is false. Because if we’ve already switched to **Account B** somewhere else, we don’t want to do it again.
- If the user passes those checks, we check the 
```
$wpf_ac_app_swap
```

 global to see if it’s already been set up and connected to Account B, perhaps because we’ve already swapped the accounts earlier in the registration process.
- If there’s nothing in the 
```
$wpf_ac_app_swap
```

 variable, that means we need to set up the new 
```
wp_fusion()->crm
```

 object and configure it with the **Account B** API credentials.
- But first, we move the currently active **Account A** CRM object into the 
```
$wpf_ac_app_swap
```

 variable, so it can easily be put back later.
- Then we call up 
```
wp_fusion()->crm->connect()
```

 with the **Account B** connection credentials.
- After this point, any data sent to the CRM object will now be directed to **Account B.**
- On the other hand, if 
```
$wpf_ac_app_swap
```

 isn’t empty, then we don’t need to initialize the connection all over again. The **Account B**CRM object is already there waiting for us.
- We first move the Account B CRM object into a temporary variable so it’s not overwritten.
- Then we set the 
```
$wpf_ac_app_swap
```

 to contain the CRM object for **Account A**, so we can put it back it again later.
- And finally we set the **Account B**CRM object we’d stored in the temporary variable.
- And as the very last step, we set 
```
$wpf_ac_switched
```

 to “true” to indicate that WP Fusion is now connected to **Account****B.**

#### Switching from Account B back to Account A

Switching the accounts back follows the same basic logic in the function above, except we’re now using action hooks that fire at the *end* of each function, after the data has been sent. The code looks like this:

```
function wpf_maybe_switch_back( $user_id ) {

	global $wpf_ac_app_swap;
	global $wpf_ac_switched;

	if( $wpf_ac_switched == true ) {

		// If the second app is active, move the first app from the swap to a temp variable
		$temp_first_app = $wpf_ac_app_swap;

		// Store second app in swap
		$wpf_ac_app_swap = wp_fusion()->crm->app;

		// Put first app back into use
		wp_fusion()->crm->app = $temp_first_app;

		// Set $wpf_ac_switched to false
		$wpf_ac_switched = false;

	}
}

add_action( 'wpf_user_created', 'wpf_maybe_switch_back' );
add_action( 'wpf_got_contact_id', 'wpf_maybe_switch_back' );
add_action( 'wpf_user_updated', 'wpf_maybe_switch_back' );
add_action( 'wpf_tags_modified', 'wpf_maybe_switch_back' );
```

This should be pretty clear to follow if you’ve read the more detailed walkthrough above. It’s basically the same process as switching from **Account A** to **Account****B**, but in reverse.

Though the **Account****B**CRM object is no longer needed at this point, we still store it in the 
```
$wpf_ac_app_swap
```

 variable, so it can easily be be accessed in a future process, without having to set up the connection again from scratch.

### In summary

Obviously this is a very niche problem that we’ve solved, and likely only applicable to this one customer.

But it hopefully demonstrates how WP Fusion, as a framework, can be extended to accommodate even the most complex business requirements.

If you view the [Gist on GitHub](https://gist.github.com/verygoodplugins/39b82f3cc8559c92305e36263620729c), you’ll see we did all of this in just 56 lines of code.

We really enjoy coming up with these kinds of solutions for our customers. If you’re interested in discussing implementation ideas for your own project, [send us a message](https://wpfusion.com/support/contact/), we’d love to hear from you!

---

## The WP Fusion User Class

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/)

### Overview

As we discussed in the [first section](https://wpfusion.com/documentation/advanced-developer-tutorials/how-wp-fusion-interfaces-with-multiple-crms/), WP Fusion achieves its flexibility and extensibility by standardizing the way WordPress communicates with different CRM systems.

The first section covered how to interface with your selected CRM directly by utilizing the 
```
wp_fusion()->crm
```

 object. Those methods are “low level”, they require you to already know the contact ID of the contact you want to edit, and do very little in terms of validation of data or redundancy checking.

So while WP Fusion’s CRM class deals with **contacts and contact data**, the **WPF_User class deals with WordPress users and user data**.

This class works like a central dispatch, taking incoming events and data from our various plugin integrations and routing it to the appropriate method in your selected CRM.

#### A basic example of how this all works, using LifterLMS

- When a student completes a lesson in LifterLMS, LifterLMS triggers the 
```
'lifterlms_lesson_completed'
```

 action.
- In our LifterLMS integration file, we have a function attached to this hook. This function checks to see if any tags have been configured to be applied when the lesson is marked complete.
- If there are tags to apply, the function then calls:

```
wp_fusion()->user->apply_tags( $tags, $user_id );
```
- In the 
```
apply_tags()
```

 function, we first check to see if there is a contact ID available for that user. If the user doesn’t have a contact record, then nothing else happens.
- Then we check the user’s current tags and see if the tags being applied are actually new. If the user already has the tag, then we don’t need to send an unnecessary API call.
- Then 
```
apply_tags()
```

 sends the new tags to the [CRM wrapper class](https://wpfusion.com/documentation/advanced-developer-tutorials/how-wp-fusion-interfaces-with-multiple-crms/) (discussed in the previous article), by calling:

```
wp_fusion()->crm->apply_tags( $tags, $contact_id );
```
- It checks the response from the API call, and if there were any errors, these are recorded in WP Fusion’s error log for troubleshooting purposes.
- Finally we update the tags stored in in the usermeta table for that user, at 
```
'{crm_slug}_tags'
```

 so they can be quickly accessed again in the future.

### The available methods in the WPF_User class:

---

#### user_register()

```
wp_fusion()->user->user_register( $user_id, $post_data = null, $force = false );
```

This function is triggered whenever a user registers on your site, from any plugin or other source. It can also be manually called to create a new CRM contact from an existing user ID.

**Parameters:**

- ```
$user_id
```

 *(int) (Required)*The ID of the user you’d like to use to create the new contact
- ```
$post_data
```

 *(array) (Optional)*You can pass in additional data you’d like to be included with the new contact. If this is left blank, WP Fusion will attempt to get as much data as possible out of the database
- ```
$force
```

 *(bool) (Optional)*If you have the setting for “Create Contacts” disabled in the WP Fusion settings, then you can set this argument to true to force creating a new contact.

**Return values:**

- ```
$contact_id
```

 *(int)*The contact ID of the new contact
- ```
false
```

 *(bool)*If there wasn’t enough data available to create a new contact, or if there was an API connection failure

#### get_contact_id()

```
wp_fusion()->user->get_contact_id( $user_id, $force_update = false );
```

Gets the contact ID for a user from their local user meta, or forces an update of the contact ID by looking up their email address in your CRM.

**Parameters:**

- ```
$user_id
```

 *(int) (Required)*The ID of the user you’d like to get the contact ID for
- ```
$force_update
```

 *(bool) (Optional)*If set to true, this will force an update of the saved contact ID for the user by looking up their email address in your CRM

**Return values:**

- ```
$contact_id
```

 *(int)*The contact ID of the user
- ```
false
```

 *(bool)*If the user has no contact ID saved on the site, or if WP Fusion was unable to locate their email address in your CRM

#### get_tags()

```
wp_fusion()->user->get_tags( $user_id, $force_update = false );
```

Gets the tags for a user from their local user meta, or forces an update of their tags by performing an API call.

**Parameters:**

- ```
$user_id
```

 *(int) (Required)*The ID of the user you’d like to get the tags ID for
- ```
$force_update
```

 *(bool) (Optional)*If set to true, this will force an update of the saved tags for the user by force-checking their contact ID and then re-loading the user’s tags from your CRM

**Return values:**

- ```
$user_tags
```

 *(array)*An array of tag IDs applied to the contact. Will be an empty array if no tags were found
- ```
false
```

 *(bool)*If the user has no contact ID saved on the site, or if WP Fusion was unable to locate their email address in your CRM

#### pull_user_meta()

```
wp_fusion()->user->pull_user_meta( $user_id );
```

Loads the latest meta data from the CRM contact record for the specified user, and updates their saved data on your site.

**Parameters:**

- ```
$user_id
```

 *(int) (Required)*The ID of the user you’d like to load from the CRM

**Return values:**

- ```
$user_meta
```

 *(array)*An array of WordPress meta fields and their values that were loaded for the user
- ```
false
```

 *(bool)*If the user has no eligible meta to load, or if there was an error loading their contact record

#### push_user_meta()

```
wp_fusion()->user->push_user_meta( $user_id, $user_meta = false );
```

Pushes meta data for a user from WordPress to your CRM.

**Parameters:**

- ```
$user_id
```

 *(int) (Required)*The ID of the user you’d like to update
- ```
$user_meta
```

 *(array) (Optional)*An associative array of WordPress meta keys and values to update. If left blank, WP Fusion will send all meta data found for that user in the database.

**Return values:**

- ```
true
```

 *(bool)*The contact was successfully updated
- ```
false
```

 *(bool)*If the user has no saved contact ID, or there was no eligible meta data to send

#### apply_tags()

```
wp_fusion()->user->apply_tags( $tags, $user_id = false );
```

Applies an array of tags to a user.

**Parameters:**

- ```
$tags
```

 *(array) (Required)*An array of tag IDs to apply to the user
- ```
$user_id
```

 *(int) (Optional)*The user to apply the tags to. Will use the current logged in user if left blank

**Return values:**

- ```
true
```

 *(bool)*The tags were successfully applied
- ```
false
```

 *(bool)*If no contact ID was found for the user, or if the user already had the specified tags and no API call was needed

#### remove_tags()

```
wp_fusion()->user->remove_tags( $tags, $user_id = false );
```

Removes an array of tags from a user.

**Parameters:**

- ```
$tags
```

 *(array) (Required)*An array of tag IDs to remove from the user
- ```
$user_id
```

 *(int) (Optional)*The user to remove the tags from. Will use the current logged in user if left blank

**Return values:**

- ```
true
```

 *(bool)*The tags were successfully removed
- ```
false
```

 *(bool)*If no contact ID was found for the user, or if the user didn’t have those tags in the first place

#### import_user()

```
wp_fusion()->user->import_user( $contact_id, $send_notification = false, $role = false );
```

This function imports a contact from your CRM, by contact ID, and creates a new WordPress user. If a user already exists with the same contact ID, that user will just be updated.

New users will be given a randomly generated password. If you have enabled “Return Password” in the WP Fusion settings, this password will be stored back to their contact record.

**Parameters:**

- ```
$contact_id
```

 *(int) (Required)*The contact ID to import
- ```
$send_notification
```

 *(bool) (Optional)*Whether to send the new user the default WordPress welcome email
- ```
$role
```

 *(bool / string) (Optional)*If provided, the new user will be given the specified role. Otherwise they will be created with the site default role.

**Return values:**

- ```
$user_id
```

 *(int)*The ID of the new user (or existing user if updated)
- ```
$error
```

 *(WP Error object)*If there was an API error importing the user, or if the loaded contact data didn’t contain an email address

### Utility and helper functions:

#### get_user_id()

```
wp_fusion()->user->get_user_id( $contact_id );
```

Looks up a user by their contact ID.

**Parameters:**

- ```
$contact_id
```

 *(int / string) (Required)*The contact ID to search by

**Return values:**

- ```
$user_id
```

 *(int)*The ID of the user
- ```
false
```

 *(bool)*If no user was found with that contact ID

#### has_tag()

```
wp_fusion()->user->has_tag( $tag, $user_id = false );
```

Checks a given user to see if they have the specified tag.

**Parameters:**

- ```
$tag
```

 *(int / string) (Required)*The tag ID or tag label to check for
- ```
$user_id
```

 *(int) (Optional)*The user ID to check. Will default to the current user ID if left blank

**Return values:**

- ```
true
```

 *(bool)*The user has the tag
- ```
false
```

 *(bool)*The user does not have the tag

#### get_tag_id()

```
wp_fusion()->user->get_tag_id( $tag_label );
```

For CRMs that use internal IDs for their tags (like Infusionsoft), this function will return the tag ID for a given tag label.

**Parameters:**

- ```
$tag_label
```

 *(string) (Required)*The tag label to check for

**Return values:**

- ```
$tag_id
```

 *(int / string)*The internal ID for the supplied tag label
- ```
false
```

 *(bool)*If no tag was found with that label

#### get_tag_label()

```
wp_fusion()->user->get_tag_label( $tag_id );
```

For CRMs that use internal IDs for their tags (like Infusionsoft), this function will return the tag label for a given tag ID.

**Parameters:**

- ```
$tag_id
```

 *( int / string) (Required)*The tag ID to check for

**Return values:**

- ```
$label
```

 *(string)*The tag label for that ID. If no tag is found, it will return “Unknown Tag:” with the tag ID

---

## The WP Fusion CRM API

**Source:** [https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/)

### Overview

WP Fusion takes a completely original approach to connecting WordPress to our supported CRMs and marketing automation systems. There is no other plugin available that is as flexible or extensible.

Normally, with a plugin like Gravity Forms (for example), you would download one of several available add-ons that connect Gravity Forms to your CRM of choice, like the [ActiveCampaign add-on](https://www.gravityforms.com/add-ons/activecampaign/) or [AgileCRM add-on](https://www.gravityforms.com/add-ons/agile-crm/). These are created from scratch and use code unique to the API in question.

Before WP Fusion, many sites would have to use several different plugins to get a basic level of integration with their CRM. An ActiveCampaign user might need ActiveCampaign add-on for Gravity Forms, [ActiveWoo](https://activewoo.com/) to send WooCommerce order data, and the [official ActiveCampaign plugin](https://wordpress.org/plugins/activecampaign-subscription-forms/) to enable site tracking and embedding forms.

This introduces a lot of unnecessary overlap, with the ActiveCampaign SDK being included multiple times, and redundant API calls being sent.

#### How we solved that problem

When designing WP Fusion, we realized that all of these CRM systems offer the same basic functionality: adding new contacts, updating existing contacts, applying and removing tags, and loading contact data from the CRM.

So with that in mind, we created a wrapper class for each CRM, with a standardized set of functions to send and receive data from WordPress, then reformat it according to the rules of each API. Every one of our integrations has at least the following methods:

### connect()

```
wp_fusion()->crm->connect( $auth = null, $test = false );
```

The connect() function is called by all the member functions in the class to initialize the connection to the CRM. It’s not necessary to use this in your code, but it can be used to validate an API key or OAuth token by setting 
```
$test
```

 to 
```
true
```

.

**Parameters:**

- ```
$auth
```

 *(string) (Optional)*The API key or other authorization code required to connect. There may be more than one parameter depending on the CRM. If this is left blank, WP Fusion will use the authentication data you entered on the original setup page.
- ```
$test
```

 *(bool) (Optional)*If set to true, WP Fusion will also verify the connection by attempting to make an API call.

**Return values:**

- ```
true
```

 *(bool)*If the connection was successful
- ```
$error
```

 *(WP_Error object)*If the connection was unsuccessful

### sync_tags()

```
wp_fusion()->crm->sync_tags();
```

Loads all available tags from the CRM and updates the available tags in the tag dropdowns for WP Fusion.

**Return values:**

- ```
$tags
```

 *(array)*An array of tags in the CRM
- ```
$error
```

 *(WP_Error object)*If the API call failed

### sync_crm_fields()

```
wp_fusion()->crm->sync_crm_fields();
```

Loads all available fields and custom fields from the CRM and updates the available fields in the dropdowns for WP Fusion.

**Return values:**

- ```
$crm_fields
```

 *(array)*An array of available fields in the CRM
- ```
$error
```

 *(WP_Error object)*If the API call failed

### get_contact_id()

```
wp_fusion()->crm->get_contact_id( $email_address );
```

Looks up a contact ID in the CRM by their email address.

**Parameters:**

- ```
$email_address
```

 *(string)*The email address to search for a contact by

**Return values:**

- ```
$contact_id
```

 *(int)*A contact ID for that email address
- ```
false
```

 *(bool)*If no contact ID was found with that email address
- ```
$error
```

 *(WP_Error object)*If the API call failed

### get_tags()

```
wp_fusion()->crm->get_tags( $contact_id );
```

Loads a contact’s tags from the CRM.

**Parameters:**

- ```
$contact_id
```

 *(int)*The contact ID to load tags for

**Return values:**

- ```
$tags
```

 *(array)*An array of tag IDs for the contact (or an empty array if no tags were found)
- ```
$error
```

 *(WP_Error object)*If the API call failed

### apply_tags()

```
wp_fusion()->crm->apply_tags( $tags, $contact_id );
```

Applies one or more tags to a contact.

**Parameters:**

- ```
$tags
```

 *(array)*An array of tags to apply
- ```
$contact_id
```

 *(int)*The contact ID to apply the tags to

**Return values:**

- ```
true
```

 *(bool)*The tags were successfully removed
- ```
$error
```

 *(WP_Error object)*If the API call failed

### remove_tags()

```
wp_fusion()->crm->remove_tags( $tags, $contact_id );
```

Removes one or more tags to a contact.

**Parameters:**

- ```
$tags
```

 *(array)*An array of tags to remove
- ```
$contact_id
```

 *(int)*The contact ID to remove the tags from

**Return values:**

- ```
true
```

 *(bool)*The tags were successfully removed
- ```
$error
```

 *(WP_Error object)*If the API call failed

### add_contact()

```
wp_fusion()->crm->add_contact( $contact_data, $map_meta_fields = true );
```

Adds a new contact to the CRM.

**Parameters:**

- ```
$contact_data
```

 *(array)*An associative array containing the data for the new contact, with the WordPress field as the key and the data as the value, like 
```
array( 'user_email' => 'email@example.com' );
```
- ```
$map_meta_fields
```

 *(bool)*If set to true, WP Fusion will convert the field keys from WordPress meta keys into the field names in the CRM. Set to false to bypass this conversion.

**Return values:**

- ```
$contact_id
```

 *(int)*The contact ID for the newly created contact
- ```
$error
```

 *(WP_Error object)*If the API call failed or the data was rejected

### update_contact()

```
wp_fusion()->crm->update_contact( $contact_id, $contact_data, $map_meta_fields = true );
```

Updates a contact in the CRM.

**Parameters:**

- ```
$contact_id
```

 *(int)*The contact ID to update
- ```
$contact_data
```

 *(array)*An associative array containing the update data, in the same format as add_contact();
- ```
$map_meta_fields
```

 *(bool)*If set to true, WP Fusion will convert the field keys from WordPress meta keys into the field names in the CRM. Set to false to bypass this conversion.

**Return values:**

- ```
true
```

 *(bool)*The contact was successfully updated
- ```
$error
```

 *(WP_Error object)*If the API call failed or the data was rejected

### load_contact()

```
wp_fusion()->crm->load_contact( $contact_id );
```

Loads the contact record for a contact ID and returns an associative array of WordPress field / value pairs, based on the WP Fusion “Contact Field” settings.

**Parameters:**

- ```
$contact_id
```

 *(int)*The contact to load

**Return values:**

- ```
$user_meta
```

 *(array)*Array containing the contact data
- ```
$error
```

 *(WP_Error object)*If the API call failed or the contact was not found

### load_contacts()

```
wp_fusion()->crm->load_contacts( $tag_id );
```

Searches the CRM for any contacts with the specified tag and returns an array of contact IDs.

**Parameters:**

- ```
$tag
```

 *(int or string)*The tag to search by

**Return values:**

- ```
$contact_ids
```

 *(array)*Array of contact IDs returned by the search. Will be an empty array if no results were found
- ```
$error
```

 *(WP_Error object)*If the API call failed

See the next section for more information on how to utilize WP Fusion’s core helper functions while interfacing with your CRM.

---

