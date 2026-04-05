# Other

*Category from WP Fusion - Abandoned Cart Addon documentation*

---

## Document Library Pro

**Source:** [https://wpfusion.com/documentation/other/document-library-pro/](https://wpfusion.com/documentation/other/document-library-pro/)

### Overview

Using WP Fusion and [Document Library Pro](https://barn2.com/wordpress-plugins/document-library-pro/) (by Barn2), you can automatically sync lead capture form submissions to your CRM and apply tags on a per-document basis when visitors download documents.

For logged-in WordPress users, the data is synced to their existing CRM contact record. For guests, WP Fusion will look up the email address in your CRM and update the existing contact, or create a new one if no match is found.

### Lead Capture

When a visitor submits a lead capture form in Document Library Pro, WP Fusion will automatically sync the submitted data to your CRM. This includes the visitor’s name, email address, the document title(s) and URL(s) they downloaded, and their privacy consent status.

No additional configuration is needed — as long as lead capture is enabled in Document Library Pro’s settings and WP Fusion is active, submissions will be synced automatically.

### Per-Document Tagging

You can configure tags to be applied in your CRM when a specific document is downloaded via the lead capture form. To set this up, edit any document in Document Library Pro and look for the **WP Fusion – Lead Capture** meta box in the sidebar.

![](https://wpfusion.com/wp-content/uploads/2026/03/Document_Library_Pro_-_Lead_Capture_Meta_Box-1.png)

Tags specified in this meta box will be applied to the contact in your CRM whenever someone submits the lead capture form to download that document.

### Syncing Meta Fields

The following fields are available for sync under the **Document Library Pro** field group in the WP Fusion settings (under **Contact Fields**):

- **Document Title** — The title(s) of the downloaded document(s), comma-separated if multiple.
- **Document URL** — The URL(s) of the downloaded document(s), comma-separated if multiple.
- **Privacy Consent** — The visitor’s privacy consent response from the lead capture form.

These are send-only fields — they are synced to the CRM when the lead capture form is submitted but are not loaded back from the CRM.

### Developer Resources

#### wpf_dlp_lead_capture_data

This filter lets you modify the data that WP Fusion syncs to the CRM when a Document Library Pro lead capture form is submitted.

```
function my_custom_dlp_data( $update_data, $lead_data ) {
	// Add a custom field from the raw lead data.
	$update_data['company'] = ! empty( $lead_data['company'] ) ? sanitize_text_field( $lead_data['company'] ) : '';

	return $update_data;
}

add_filter( 'wpf_dlp_lead_capture_data', 'my_custom_dlp_data', 10, 2 );
```

**Parameters:**

- ```
$update_data
```

 *(array)* — The data to be synced to the CRM. Keys include 
```
first_name
```

, 
```
last_name
```

, 
```
user_email
```

, 
```
dlp_document_title
```

, 
```
dlp_document_url
```

, and 
```
dlp_privacy_consent
```

.
- ```
$lead_data
```

 *(array)* — The raw lead capture data from Document Library Pro, including the 
```
documents
```

 array.

---

## GeoDirectory

**Source:** [https://wpfusion.com/documentation/other/geodirectory/](https://wpfusion.com/documentation/other/geodirectory/)

### Overview

WP Fusion integrates with [GeoDirectory](https://wpgeodirectory.com/) to allow for tagging members in your [CRM or marketing automation tool](https://wpfusion.com/documentation/faq/crm-compatibility-table/) based on their listing status in your directory.

### Settings

WP Fusion’s GeoDirectory settings are found under the Integrations tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2023/10/geodirectory-settings-1024x346.jpg)

There are two options:

- **Apply Tags – Listing Approved:**These tags will be applied in your CRM when a user’s listing is approved (published).
- **Apply Tags – Listing Expired:** These tags will be applied in your CRM when a listing is expired (using the [Pricing Manager extension](https://wpgeodirectory.com/downloads/pricing-manager/))

---

## Object Sync for Salesforce

**Source:** [https://wpfusion.com/documentation/other/object-sync-for-salesforce/](https://wpfusion.com/documentation/other/object-sync-for-salesforce/)

### Overview

WP Fusion includes an integration with the [Object Sync for Salesforce plugin](https://wordpress.org/plugins/object-sync-for-salesforce/) to allow you to use WP Fusion’s API credentials to authorize the connection to Salesforce.

This saves you the step of needing to create a Salesforce app via the developer portal, and authorize it for your instance— which can be technically complex.

### Enabling

If you are installing Object Sync for the first time, the integration is enabled by default. If you head to Settings » Salesforce » Authorize in the WordPress admin, you should see that it is already connected to the API, without requiring an extra step.

![](https://wpfusion.com/wp-content/uploads/2023/03/object-sync-connected-1024x462.jpg)

If you had previously installed Object Sync and connected it via a custom app, WP Fusion will not override that setting.

If you would prefer to have WP Fusion handle the API communication with Salesforce, you can enable it in the WP Fusion settings at Settings » WP Fusion » Integrations » Object Sync for Salesforce.

![](https://wpfusion.com/wp-content/uploads/2023/03/object-sync-salesforce-1024x340.jpg)

Likewise, if you would prefer to use your own Salesforce app and authentication, you can un-check **Enable** to disable the integration.

### How it works

When the integration is active, the Object Sync settings work as normal, but all API calls to Salesforce are sent by WP Fusion. WP Fusion also handles any error responses from the Salesforce API.

![](https://wpfusion.com/wp-content/uploads/2023/03/object-sync-salesforce-errors-1024x597.jpg)

These will be recorded in the [activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/).

---

## HollerBox

**Source:** [https://wpfusion.com/documentation/other/hollerbox/](https://wpfusion.com/documentation/other/hollerbox/)

### Overview

WP Fusion integrates with [HollerBox](https://hollerwp.com/) to allow you to control the targeting of popups based on a logged in user’s tags in your [CRM or marketing automation platform](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

You can use this to personalize popups based on a user’s membership status, course progress, purchase history, or any other of the various tagging options that WP Fusion adds to WordPress.

### Setup

To configure, first create a popup and then open the Display Conditions modal.

![](https://wpfusion.com/wp-content/uploads/2022/08/holler-box-conditions-1024x634.jpg)

WP Fusion adds three options:

- **Show to Logged In or Logged Out users**: You can select if the popup should be shown just to logged in users, or just to guests.
- **Show if user has tags:**You can select one or more tags here and the popup will only be shown if the user is logged in and has at least one of the tags.
- **Hide if user has tags:**You can select one or more tags here and the popup will be *hidden* if the user is logged in and has any of the selected tags.

### Syncing Contacts

If you are collecting opt-ins via your popup, WP Fusion can automatically sync these entries to your connected CRM.

Head to Settings » WP Fusion » Integrations » HollerBox, and enable the setting for **Add Contacts.**

![](https://wpfusion.com/wp-content/uploads/2022/08/holler-box-general-settings-1024x343.jpg)

When the popup form is submitted, the lead’s first name, last name, and email address will be synced to a contact record in your connected CRM.

---

## Presto Player

**Source:** [https://wpfusion.com/documentation/other/presto-player/](https://wpfusion.com/documentation/other/presto-player/)

### Overview

WP Fusion integrates with [Presto Player](https://prestoplayer.com/) to allow for tracking media engagement in your [CRM or marketing automation tool](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

WP Fusion integrates with Presto Player in three ways.

### Sync email capture form submissions

The core WP Fusion plugin (Personal license or higher), can sync [email addresses captured on Presto Player](https://prestoplayer.com/docs/how-to-capture-emails/) videos to your CRM, and apply tags.

To enable this first create a new video preset for Presto Player and enable the email capture field.

![screenshot](https://wpfusion.com/wp-content/uploads/2022/03/presto-player-email-preset-1024x673.jpg)

Then select the new preset for your video by clicking on the Presto Player video block.

![screenshot](https://wpfusion.com/wp-content/uploads/2022/03/presto-player-select-preset-1024x672.jpg)

Finally, in the WP Fusion settings, on the Integrations tab, enable email capture for Presto Player, and select and tags you’d like applied.

![screenshot](https://wpfusion.com/wp-content/uploads/2022/03/presto-player-wpf-settings-1024x309.jpg)

That’s it! Your email submissions will automatically be sent to your connected CRM, and your selected tags or lists will be applied. For more information on enabling email capture and customizing presets, [see the Presto Player documentation](https://prestoplayer.com/docs/how-to-capture-emails/).

### Media Tools

WP Fusion supports applying tags in your CRM based on video plays, progress, and completion with Presto Player.

![](https://wpfusion.com/wp-content/uploads/2022/03/presto-player-block-UI-970x1024.jpg)WP Fusion’s Presto Player integration allows you to apply tags in your CRM based on engagement with videos on your site.
That functionality is enabled via the Media Tools Addon and is [documented here](https://wpfusion.com/documentation/media-tools/presto-player-integration/).

### Event Tracking

Using the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/), you can track media activity as events in supported CRMs. This lets you view engagement in real time in your CRM’s activity feed.

Events can be configured in the global Event Tracking settings page, at Settings » Event Tracking.

![](https://wpfusion.com/wp-content/uploads/2022/03/presto-player-event-tracking-global-1024x426.jpg)

The available triggers are:

- **Video Play:** Triggered when a video is played.
- **Video Complete:** Triggered when a video is completed (progress = 100%).

You can also configure event tracking on individual Presto Player videos in the Media Hub, via the WP Fusion Event Tracking metabox.

![](https://wpfusion.com/wp-content/uploads/2022/03/presto-player-event-tracking-single-1024x776.jpg)

Events configured for single videos will take priority over any globally configured events (i.e. a Video Play event won’t be triggered twice for the same video).

---

## WP Remote Users Sync

**Source:** [https://wpfusion.com/documentation/other/wp-remote-users-sync/](https://wpfusion.com/documentation/other/wp-remote-users-sync/)

### Overview

[WP Remote Users Sync](https://wordpress.org/plugins/wp-remote-users-sync/) is a free plugin that allows you to synchronize WordPress users, user passwords, and login sessions securely between sites.

It is currently [our recommended solution](https://wpfusion.com/documentation/tutorials/sync-user-accounts/) for synchronizing WordPress user accounts.

Using WP Fusion with WP Remote Users sync, your users’ CRM contact IDs and tags are synced directly between any configured sites. In many cases this can reduce the number of webhooks you need to configure in your CRM.

### Setup

WP Fusion automatically configures itself for WP Remote Users sync, and there’s no extra setup required to have users’ contact IDs and CRM tags synced automatically between your connected sites.

![](https://wpfusion.com/wp-content/uploads/2020/11/wprus-config-1024x657.jpg)

In the screenshot above, “*Site B*” at https://test.verygoodplugins.com is configured to connect to “*Site A*” at https://dev.local.

It’s configured to both accept and send actions for Login, Logout, Create, and Update.

### Behavior

When a new user registers on *Site A*, or their profile is updated, WP Remote Users Sync will sync their profile data directly to *Site B*.

When that happens, the WP Fusion logs on *Site A* will show the user’s CRM tags being synced to *Site B* as well. The “Source” column will say wp-remote-users-sync.

![](https://wpfusion.com/wp-content/uploads/2020/11/wprus-outgoing-1024x384.jpg)

Meanwhile on *Site B*, when the *Site A*data is loaded by WP Remote Users Sync, WP Fusion will record a message in the logs indicating the tags that were loaded:

![](https://wpfusion.com/wp-content/uploads/2020/11/wprus-incoming-1024x431.jpg)

#### Why use WP Remote Users Sync

If all this sounds complicated, don’t worry, it should all happen automatically without any extra configuration. As long as WP Remote Users Sync is communicating properly between your sites, WP Fusion will as well.

The benefit of using WP Remote Users Sync is that it removes a lot of the friction that comes from having the customer experience split across two websites.

**Without WPRUS:**

- WooCommerce purchase on *Site A* applies a tag in your CRM via WP Fusion
- The tag triggers an automation which sends a webhook to *Site B*
- The webhook creates a new user, loads their tags, and generates a password
- A welcome email is sent from the CRM with a link to log in to *Site B*

This takes around 5 minutes and there’s a lot of opportunity for a webhook to fail or an email to land in spam.

**With WP Remote Users Sync and WP Fusion:**

- WooCommerce purchase on *Site A* applies a tag in your CRM via WP Fusion
- Simultaneously, WPRUS has created the new user on *Site B* and set the correct login cookies
- The customer clicks a link on the Order Received page and is taken to *Site B,*without having to log in
- The tags applied by WooCommerce in step one are already available, so the customer can immediately access their purchased content

---

## Share Logins Pro

**Source:** [https://wpfusion.com/documentation/other/share-logins-pro/](https://wpfusion.com/documentation/other/share-logins-pro/)

### Overview

[Share Logins](https://codexpert.io/share-logins/) by Codexpert allows you to sync WordPress users and profile updates directly between multiple connected sites, so users can use the same login information across all connected sites.

When WP Fusion detects Share Logins Pro is active, it will automatically register two custom meta keys for sync to other connected sites.

![](https://wpfusion.com/wp-content/uploads/2019/12/share-logins-pro-1024x618.jpg)

This ensures that a user’s cached contact ID and tags are synced automatically.

WP Fusion will also watch for whenever a user’s tags are modified and sync these changes automatically to any other sites you have connected with Share Logins Pro.

---

## WP E Signature

**Source:** [https://wpfusion.com/documentation/other/e-signature/](https://wpfusion.com/documentation/other/e-signature/)

### Overview

WP Fusion integrates with [WP E-Signature](https://www.approveme.com/) to allow you to apply tags in your CRM of choice when a document is signed.

#### Setup

When editing any document, scroll down to the *WP Fusion* meta box. Here you can specify one or more CRM tags.

![](https://wpfusion.com/wp-content/uploads/2019/09/e-signature-1024x380.jpg)

When the document is signed these tags will be applied to the registered user who signed the document.

---

## Ahoy

**Source:** [https://wpfusion.com/documentation/other/ahoy/](https://wpfusion.com/documentation/other/ahoy/)

### Overview

WP Fusion integrates with [Ahoy](https://useahoy.com/) to allow you to control the targeting of messages based on a logged in user’s CRM tags.

You can use this to personalize messages based on a customer’s membership status, course progress, purchase history, or any other of the various tagging options that WP Fusion adds to WordPress plugins.

![](https://wpfusion.com/wp-content/uploads/2019/09/ahoy-1024x597.jpg)

To configure, first create a message and navigate to the Conditions tab. Add a new condition, select User Tags from the dropdown, and specify one or more tags. The popup will now only be shown to logged in users who have at least one of the tags.

To invert the logic, click *Is* to change it to *Is Not*. Now the popup will only be shown to logged in users who *don’t have any of the tags*.

---

## Advanced Ads

**Source:** [https://wpfusion.com/documentation/other/advanced-ads/](https://wpfusion.com/documentation/other/advanced-ads/)

### Overview

WP Fusion integrates with [Advanced Ads](https://wordpress.org/plugins/advanced-ads/) to allow you to control the display of ads on your site based on a logged-in user’s tags.

#### Setup

When editing any ad, scroll down to the *Visitor Conditions* meta box. To add a new WP Fusion condition, select WP Fusion from the *Choose a Condition* dropdown.

![](https://wpfusion.com/wp-content/uploads/2019/01/advanced-ads-1024x502.jpg)

There are two options:

- **User is logged in and has at least one of the tags:**The content will only be shown to logged in users who have at least one of the tags specified in the tags select box.
- **User is logged in and has none of the tags:**The content will only be shown to logged in users who do not have *any* of the tags specified in the tags select box.

---

## Popup Maker

**Source:** [https://wpfusion.com/documentation/other/popup-maker/](https://wpfusion.com/documentation/other/popup-maker/)

### Overview

WP Fusion integrates with [Popup Maker](https://wordpress.org/plugins/popup-maker/) to allow you to control the targeting of popups based on a logged in user’s tags. It also allows you to sync entries from popup subscription forms to your CRM of choice.

### Popup targeting

To configure, first create a popup and navigate to the Targeting tab.

![](https://wpfusion.com/wp-content/uploads/2018/11/popup-maker-1024x370.jpg)

Add a new condition, select User Tags from the dropdown, and specify one or more tags. The popup will now only be shown to logged in users who have at least one of the tags.

To invert the logic, click the ** icon. Now the popup will only be shown to logged in users who *don’t have any of the tags*.

### Subscription forms

By default WP Fusion will sync all entries from Popup Maker subscription forms to your connected CRM. To disable this uncheck the option for **Add Contacts** on the Integrations tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2018/11/popup-maker-2-1024x339.jpg)

---

## WP Job Manager

**Source:** [https://wpfusion.com/documentation/other/wp-job-manager/](https://wpfusion.com/documentation/other/wp-job-manager/)

### Overview

WP Fusion integrates with [WP Job Manager](https://wpfusion.com/go/wpjobmanager) to add contacts to your CRM when they register to post a job.

You can also optionally apply a tags to users when they post a job. These tags will also be applied when a user registers via the WP Job Manager registration form.

![](https://wpfusion.com/wp-content/uploads/2017/02/job-manager-settings-1024x314.jpg)

To configure these tags, in the admin, go to Job Listings » Settings, and select the “Job Submission” tab. You’ll see a new field where you can specify what tags should be applied.

### Job Alerts

If you’re using the Job Alerts addon you can also tag people when they sign up for a job alert of a certain type.

![](https://wpfusion.com/wp-content/uploads/2017/02/wp-job-manager-job-alerts-1024x198.jpg)

To to that, navigate to Job Listings » Job Types and click Edit on any job type. You’ll see a setting like in the screenshot above where you can specify the tags to be applied when an alert is created.

---

