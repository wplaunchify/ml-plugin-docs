# Getting Started

*Category from WP Fusion documentation*

---

## Working with Tags

**Source:** [https://wpfusion.com/documentation/getting-started/working-with-tags/](https://wpfusion.com/documentation/getting-started/working-with-tags/)

### Overview

WP Fusion uses tags in your connected CRM to control access to content in WordPress, as well as track user activity and engagement, and trigger automated enrollments into courses and membership levels.

**Note:** Instead of tags, some CRMs call them *lists*, *groups*, or *segments*— but the functionality with WP Fusion is the same.

### Managing tags

When you first connect WP Fusion to your CRM, it will load a list of available tags, and these will be available to select in any of the Select Tag(s) dropdown boxes.

WP Fusion lets you apply tags in your CRM based on events in WordPress— in this case a LearnDash course enrollment.

#### Refreshing the available tags

You can refresh the list of available tags at any time by clicking the Refresh Available Tags and Fields button in the WP Fusion settings.

Or from the admin toolbar.

Depending on your CRM, you may also see a prompt to resync the available tags in the Select Tag(s) dropdown, when no matches are found.

Note that refreshing the list of tags does not update the tags for any individual users, trigger any enrollments, or affect any permissions— it just updates the dropdowns of available tags and fields.

#### Creating new tags

With some CRMs, WP Fusion allows you to create new tags by typing their tag names directly into the dropdowns (for a list, see Create Tags in WordPress in the Compatibility Table).

With many CRMs, WP Fusion allows you to type new tags into the Select Tag(s) dropdown, and they will be created in your CRM.
Note that this generally means the tag will be created when it is next applied— it won’t appear in your CRM as soon as you type in the name.

#### Managing tags on users

You can view each user’s contact ID and tags in the WP Fusion section of their admin profile.

The WP Fusion section of the admin user profile allows you to manage their tags, as well as resync data with your CRM.
If the contact ID is missing or incorrect, or the user’s tags are out of sync with your CRM, you can click Resync Tags to look up the contact by email address and load the latest tags over the API. You can also click Edit Tags to manually add/and remove tags.

When you save the user profile, the updated tags will be synced to your CRM.

### Tags in the admin users list

By default, WP Fusion will display each user’s CRM tags as a column in the All Users list.

The admin All Users list displays each user’s CRM tags, as well as a link to their contact record in your CRM.
If a user does not have a CRM contact ID, you will see (no contact ID).

Each user also has a link to View in CRM, which will take you to their contact record in your CRM.

#### Hiding the WP Fusion columns

If you don’t want to see the CRM Tags column, you can disable it by clicking Screen Options at the top of the page.

#### Filtering users by tag

You can also filter your users by CRM tag by clicking the Filter By Tag dropdown, selecting a tag, and clicking Filter.

The Filter By Tag dropdown allows you to filter your users by tag, or find users with no contact ID or no tags.

#### Sync tags and user meta in bulk

You can resync contact IDs and tags for users in bulk by selecting one or more users, and then running a Resync Contact IDs and Tags operation from the bulk actions dropdown.

WP Fusion allows you to perform bulk actions on users by selecting them in the admin users list.
From here you can also trigger a Push User Meta or Pull User Meta operation for the selected users.

### Syncing tags

Whenever a tag is applied by WP Fusion, it is immediately sent to your CRM over the API, and will appear on the user’s contact record.

Note that if a user already has that tag (based on the list of tags on their admin profile), then an API call will not be sent to reapply the same tag. This is for performance reasons, but it can be disabled by unchecking **Prevent Reapplying Tags**in the WP Fusion Advanced settings tab.
You can see tags being sent to and loaded from your CRM by viewing the activity logs.

If a tag is applied to a contact in your CRM, for example to unlock a piece of content, you’ll want to load it back into WordPress.

There are several ways to do this depending on your content strategy:

#### Webhooks

Webhooks are the simplest method to ensure data is kept in sync bidirectionally (and in real time) with your CRM.

Webhooks allow you to load updated data and tags from your CRM in real time.
When configured correctly, a webhook allows your CRM to tell WP Fusion that data has been modified— for example a field has been edited, or a tag has been applied.

WP Fusion then connects back to your CRM to load the latest data, and it’s already available when the user logs in.

For more information about webhooks, and guides for each CRM, see the webhooks documentation.

#### On login

WP Fusion can load a user’s tags from your CRM each time they log in to your site. To enable this, check the box for Login Tags Sync in the General settings.

There are two potential issues with syncing the tags on login:

1. By default, WordPress users remain logged in for two weeks at a time. This means that a user’s tags might only be updated once every two weeks (unless they log out and back in again).
2. The API calls to load tags can be slow. For example, Ontraport can take up to 20 seconds to load a user’s tags. This means your users could be left waiting for up to 30 seconds while they try to log in to their accounts (depending on your CRM’s API speed).

For these reasons, webhooks are preferable to syncing tags on login, since they happen in the background and only as needed.

#### When access is denied

If you are protecting a piece of content via the WP Fusion meta box, you can check the setting for Refresh tags if access is denied to force-update a user’s tags from your CRM when they are denied access to a piece of content.

#### Via a shortcode

WP Fusion includes a shortcode, [wpf_update_tags] that can update a user’s tags when the page containing that shortcode is viewed. For more information, see the shortcodes documentation.

#### Via a URL

It’s also possible to trigger an update of a user’s tags and/or metadata using a special query parameter in a URL. The parameter is wpf-refresh, it can be used like:

- https://mysite.com/page/?wpf-refresh=all: The user’s tags and metadata will be loaded from your CRM.
- https://mysite.com/page/?wpf-refresh=tags: The user’s tags will be loaded from your CRM.
- https://mysite.com/page/?wpf-refresh=meta: The user’s metadata and custom fields will be loaded from your CRM.

You can add a link to refresh the same page (i.e. the page the user is currently on) by simply using the query string as the destination for the URL. For example

```
<a href="?wpf-refresh=all">Refresh</a>
```

or in a visual editor, like so

Note that the user’s updated tags will be loaded from your CRM *before* their access to the destination page is checked. This means that the user can unlock previously-locked content by clicking the link (as long as they have the correct access tags in your CRM).

### Working with lists

Some CRMs supported by WP Fusion (like ActiveCampaign or FluentCRM) use Lists in addition to Tags as a way of segmenting subscribers.

In this case, lists are usually used like “mailing lists”— they are a way of sending your email newsletters to the correct audience.

With lists, subscribers can manage their own memberships (unlike tags). For example a customer can unsubscribe from one list, but continue receiving emails from another list.

For this reason WP Fusion has limited support for syncing with lists in addition to tags.

Because tags are used administratively, you wouldn’t want customers to be able to unsubscribe from a specific tag— as this might also cause them to lose access to courses, memberships, or other content.

This example [ActiveCampaign](https://wpfusion.com/go/activecampaign) automation updates a subscriber’s list membership when their language preference is changed in [Weglot](https://wpfusion.com/documentation/multilingual/weglot/).
If you want to manage list memberships using WP Fusion, the best solution is to create an automation (or “workflow”, or “rule”) which is triggered when a tag is applied or custom field is updated, and then updates the subscriber’s list memberships accordingly.

---

## Displaying CRM Data in WordPress

**Source:** [https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/)

### Overview

With WP Fusion it’s possible to display data from your CRM in WordPress, allowing you to personalize your site for logged-in users using data from their CRM contact record.

For example:

> Welcome back, your next exam date is 9/9/2020.

Or

> Your assigned advisor is Jim Jones, your learning style is Auditory.

### Shortcodes

Using WP Fusion’s user_meta shortcode, you can display any data in your site’s database for the current user.

You can see all the available meta field keys on the Contact Fields list in the WP Fusion settings.

The keys in the Meta Field column can be used to display a user’s data without any extra steps. For example to display the current user’s first name, the shortcode would be

```
[user_meta field="first_name"]
```

However, you may have data that only exists in your CRM, not in WordPress. To display that data, you’ll first have to create a place to store the data in WordPress, and then use WP Fusion to load the data from your CRM.

**Note:** While it might sound more convenient to load the data from your CRM every time the page is displayed, this actually can introduce performance problems if you have a lot of users on your site, since an API call needs to be made on every page load. For that reason it’s better to use WP Fusion to load the data into WordPress first, where it can be displayed without requiring an external API call.

### Managing custom fields

Before WP Fusion can load a custom field from your CRM, it needs a place to store the data on your site. For an overview on how data is synced between WordPress and your CRM, see the Syncing Contact Fields documentation.

An easy way to create a new field is to use a plugin that lets you manage custom fields for users, such as User Meta Pro, or Advanced Custom Fields. Or if you’re using a membership plugin like BuddyPress or MemberPress, these plugins have options for managing profile fields.

Once you’ve created a field to store your custom data, locate it on the Contact Fields list in the WP Fusion settings, and select a corresponding field in your CRM to enable the field for sync.

In this case, we’ve used User Meta Pro to create a field with key new_user_meta_field, and linked it to the Test Custom Field Two field in ActiveCampaign.

#### Managing custom fields without a plugin

It’s also possible to register a new field in your database using just WP Fusion. Scroll down to the bottom of the Contact Fields list, and in the Additional Fields section, enter a unique key for the new field.

Select a corresponding custom field in your CRM from the dropdown on the right, and save the settings to enable the new field for sync.

### Loading the data

Now that you have the custom field created and linked with the corresponding CRM field, you need to load the data into WordPress. There are a few ways to do this:

- Pull user meta: From the Advanced tab in the WP Fusion settings you can run a Pull User Meta operation, which will load any enabled fields from your CRM into WordPress for all your users. More info on that here.
- Webhooks: If you’re updating the custom field in your CRM over time, you can create an automation that sends a webhook back to WP Fusion when a contact has been modified, using the ?wpf_action=update method. This will load the updated values for that specific contact, and they can be displayed in WordPress. More info on webhooks here.
- User meta shortcode: By using the [user_meta] shortcode with the parameter sync_if_empty="true", WP Fusion will connect to your CRM one time to load updated data for that field in case it encounters an empty value in WordPress.
- Update meta shortcode: The [wpf_update_meta] shortcode can also be used to refresh the current user’s stored metadata from their CRM contact record when a page is viewed. To use the shortcode, put it above any [user_meta] shortcodes on the page so the data has been loaded by the time those shortcodes are executed. Note that the [wpf_update_meta] shortcode will slow down the page load by a few seconds, so it’s recommended to use it sparingly.
- Update meta URL parameter: You can append ?wpf-refresh=meta to any URL on your site to force-load the user’s custom fields from your CRM. For more information, see the shortcodes documentation.
- Login meta sync: You also have an option to load a user’s metadata from your CRM each time they log in, by enabling the option for Login Meta Sync.

### Testing

Whichever method you use to load the data, the WP Fusion logs will show the data being loaded from your CRM into the user’s metadata in WordPress.

In this case, the new_user_meta_field we created earlier has loaded a value of http://test.com from ActiveCampaign.

Now if we use the [user_meta] shortcode, that value can be output on a page. For example

```
Your personalized results can be found at [user_meta field="new_user_meta_field"]
```

Would be output as

> Your personalized results can be found at http://test.com.

---

## Activity Logs

**Source:** [https://wpfusion.com/documentation/getting-started/activity-logs/](https://wpfusion.com/documentation/getting-started/activity-logs/)

### Overview

WP Fusion includes a logging tool, which you can enable from the Advanced tab of the options page.

There are three options:

- Enable Logging: This is the default level of logging for WP Fusion. It’s on by default but can be turned off.
- Only Errors: With this checked, only error level messages (like API errors or timeouts) will be recorded to the logs.
- HTTP API Logging: With most CRMs, WP Fusion utilizes the WordPress HTTP API for API calls. If this setting is available you can turn it on and log the raw API requests and responses from your CRM. Note that this will add a lot of extra data to your logs so it’s recommended to only turn this on temporarily for debugging purposes.

When the logs are enabled, you’ll see a new tab appear at the top of the WP Fusion settings page with a link to the activity logs.

The logs can also be accessed in the main WordPress admin menu under Tools » WP Fusion Logs.

### The logs

The activity log will record any API calls sent by WP Fusion, as well as any webhooks received and auto-enrollments that are triggered.

You can filter the log entries by severity level, source (plugin integration), and related user by using the dropdowns at the top.

You can adjust the number of entries displayed per page by opening the Screen Options panel at the top of the table.

You can link to individual log entries by hovering over the entry row and clicking the blue link icon. Linking to log entries is helpful when submitting a support ticket.

#### Field formatting

When setting up the field sync between WordPress and your CRM in the Contact Fields settings, WP Fusion gives you the option to select a field type for each field.

If a special field type is selected, then the data for that field will pass through a filter before being sent to your connected CRM.

For example many CRMs have require special treatment for date fields, they require the fields to be in a timestamp, and so when a field type is set to “date”, WP Fusion converts the value automatically for you.

In cases where a field value has been modified, the logs will show both the input data and the data that was sent to your CRM.

This can be useful in troubleshooting issues with specific fields not syncing correctly.

### Errors

The logs will also record any API errors encountered. These will vary depending on your connected CRM, but can be caused by several things— like trying to apply a tag that’s been deleted, API quotas exceeded, or malformed data.

If you encounter an error in the logs that you don’t understand, please contact our support team so we can resolve the issue for you.

With most CRMs, error messages will be accompanied with debugging information we can use to aid you in troubleshooting the issue.

#### Retrying API calls

If an API call fails due to a timeout or error in the API server, you can click the blue Retry API call button to send the same API call again.

Note that this will just re-send the original API call, so if there is an issue with your data like an invalid field ID or tag ID, you may see the same error repeated. In that case see the section below for additional troubleshooting steps, or contact our support for assistance.

#### Error notifications

You may want to receive notifications when WP Fusion has an API error. If so, check out our other plugin, Fatal Error Notify.

It can automatically send you an email or ping you on Slack when WP Fusion has an API error.

The Fatal Error Notify plugin can ping you on Slack when WP Fusion encounters an API error
The notification will include the error message, the affected user, and the page the user was on.

### HTTP API logging

With HTTP API Logging enabled, WP Fusion will log the raw requests and responses to your CRM over the WordPress HTTP API. This can be used to troubleshoot more complex issues that aren’t captured at the normal level of logging.

HTTP API logging records the raw HTTP requests and responses from your CRM.
Every API call sent to your CRM will be recorded, and each entry will contain the request URL, the time it took to perform the API call, the request parameters, and the raw response.

### Common Errors

These are some common errors, with steps to resolve them:

#### Notice: Webhook received but no matching user found

When you’re using a webhook with the method ?wpf_action=update or ?wpf_action=update_tags, WP Fusion will only load data from your CRM if there is already a user on your site with a matching contact ID. If there is no user with a matching contact ID, the webhook will be ignored.

This is intended for cases where you have contacts in your CRM that don’t need to have an account in WordPress, and is generally safe to ignore.

However if you need every contact in your CRM to have a user account, you can change your webhook to ?wpf_action=add, which will both update existing users and create new users if they don’t already exist.

#### Notice: No contact ID for user, failed to apply tags

This message is triggered when a plugin integration attempts to apply a tag (for example due to a checkout, page view, or membership level change), but WP Fusion was unable to find a contact ID in your CRM for the user.

This could happen because you’ve deleted or merged contacts in your CRM, and so the contact ID that was previously associated with the user has changed. If that’s the case, run a Resync Contact IDs and Tags operation from the Advanced tab in the WP Fusion settings to refresh the cache of contact IDs.

It could also happen if a user wasn’t synced properly to your CRM at registration— either due to an API error, or that user’s role being excluded from sync. In that case you can run an Export Users batch operation.

It’s also perfectly fine to ignore this notice if the user in question doesn’t need to be tagged in your CRM.

#### Notice: Unable to determine tag ID from tag name

This notice can be logged when you’re applying a tag via AJAX, either via link click tracking, or the Media Tools addon.

In order to send the API call to apply a tag in your CRM, WP Fusion needs to know the ID of the tag to be applied.

WP Fusion will attempt to take the tag name you’ve entered and convert it to a tag ID, but if it can’t find a matching tag ID then this message will be logged and the tag won’t be applied.

If you’re sure the tag name you’ve entered matches exactly the tag name in your CRM, try clicking Resynchronize Available Tags & Fields from the Setup tab in the WP Fusion settings to refresh the cache of available tags.

#### Error: Resource not found / contact not found / 404

For performance reasons WP Fusion keeps a cache of the CRM contact ID for every user on your site.

When WP Fusion goes to update a contact record or apply tags over the API, it uses this cached contact ID rather than having to look up the contact record again by email address.

However, if you have deleted, merged, or de-duplicated contact records in your CRM, the cached contact ID may no longer be valid, and API calls to update contacts or apply tags might return a Resource not found error.

The best way to fix this is to run a Resync Contact IDs operation from the Advanced tab in the WP Fusion settings. This will re-lookup every WordPress user on your site by email address in your CRM and refresh the local cache of contact IDs.

#### Error: cURL error 28 — Operation timed out

Most API calls WP Fusion sends to your CRM should complete within 0.5 to 2 seconds.

However there are situations where your CRM’s API may be offline, in which case WP Fusion includes a built in timeout to avoid breaking the visitor experience on your site. This timeout is set to between 10 and 30 seconds depending on your connected CRM.

If this timeout is reached WP Fusion will give up on waiting for a response from your CRM, a cURL error 28 error will be logged, and the page will continue to load normally.

When your CRMs API comes back online you may want to run one or more batch operations to correct for any data that wasn’t synced or tags that weren’t applied during the outage.

If the problem is happening consistently, you could consider using a code snippet to extend the HTTP API timeout for your site. We have an example here.

### System Errors

To aid in troubleshooting, the activity logs will also record two types of system errors. While these don’t necessarily come from WP Fusion, they can affect the stability of your website as whole.

Those error types are:

#### Out of memory errors

An “Allowed memory size exceeded” error occurs when your site runs out of available memory and stops processing a page load. This can be caused by underpowered hosting, or having too many plugins active.

If an out of memory error happens before WP Fusion has sent data to your CRM, this would prevent any data from being synced. Read some info on fixing this error at WPBeginner.

#### Maximum execution time exceeded errors

Most websites will process a single page load for 30 seconds before timing out, and triggering a “Maximum execution time exceeded” error.

As an example, let’s say you have several WooCommerce extensions active, and a single checkout does the following:

- Creates a new WordPress user
- Sends the order invoice data to Xero
- Sends the order shipping information to ShipStation
- Generates a PDF invoice
- Syncs the customer data to ActiveCampaign (via WP Fusion)

Each of these steps takes a few seconds to process. If your site reaches the 30 second timeout limit while it’s still generating the PDF invoice, then this would prevent WP Fusion from sending any data to your CRM.

Preventing these errors involves either increasing your server resources (so each step processes faster), deactivating some plugins (so there are fewer steps to process), or increasing your server’s max_execution_time variable.

For more info on this error see this guide from WPBeginner.

### Logs performance and misc.

The activity logs are stored in their own database table, {$wpdb->prefix}wpf_logging, so they generally shouldn’t have any performance affect on the rest of your site. In addition the table is limited to 10,000 entries, after which the oldest entries will be automatically begin to be dropped.

You can flush the logs database at any time by clicking the Flush Logs button at the bottom of the logs screen.

#### Errors displaying the logs

There are some cases where your site doesn’t have enough resources to actually display the logs table, if there are a lot of entries. You might see an error like this:

Increasing your available memory will generally fix it, but you can also force clear the logs by appending &flush-logs=true to the URL in your browser, and hitting enter.

#### Logs max entries

If the number of log entries is a recurring problem, you can also limit the total number of log entries using the wpf_log_max_entries filter. For example:

```
add_filter( 'wpf_log_max_entries', function( $max ) {
     return 5000;
} );
```

That code would limit the maximum number of entries to 5,000 instead of the default 10,000.

#### Misc. logs issues

There are some cases where the logs database table can become corrupted. In this case new log entries might not be saved, or it might not be possible to clear the logs.

To fully reset the logs, go to Settings » WP Fusion » Advanced and un-check Enable Logging. Save the settings, then re-enable the option, and save again.

This will delete the logs database table and rebuild, and should fix any issues.

---

## Showing and Hiding Widgets

**Source:** [https://wpfusion.com/documentation/getting-started/showing-and-hiding-widgets/](https://wpfusion.com/documentation/getting-started/showing-and-hiding-widgets/)

**Heads up!** Since WordPress 5.8, widgets are now managed using the block editor. To show and hide widgets based on CRM tags, we recommend the [Block Visibility plugin](https://wordpress.org/plugins/block-visibility/), which includes [an integration with WP Fusion](https://wpfusion.com/documentation/page-builders/gutenberg/). Or, to use the classic widgets editing experience, install the [Classic Widgets plugin](https://wordpress.org/plugins/classic-widgets/).

### Overview

WP Fusion also has the ability to control widget visibility based on a logged-in user’s tags.

By checking the box next to Users must be logged in to see this widget, the widget only be visible to logged in users.

There are two tag select boxes. The first lets you specify a list of tags required  to view the widget. The widget will be hidden from users who don’t have these tags.

The second box lets you hide the widget from people who have certain tags. This might be useful in removing a promotion after the customer has already purchased the product, for example.

### Additional Widget Options

For additional widget visibility options, like logged in vs. logged out, or mobile vs. desktop, check out the free If Widget plugin.

---

## Tracking User Activity

**Source:** [https://wpfusion.com/documentation/getting-started/tracking-user-activity/](https://wpfusion.com/documentation/getting-started/tracking-user-activity/)

### Tracking User Activity

WP Fusion includes many options for tracking user and customer engagement with your site by applying tags in your CRM. Most of those options are available via the various plugin integrations, but there are a few global options as well.

### Meta Box

The WP Fusion meta box that’s added to every post and page on your site includes an option to either apply or remove tags when that page is viewed.

This can be used to confirm when someone has viewed a page (like when a student starts a course), or to gauge interest in a piece of content by applying a tag after a delay— for example if a user looks at a product for longer than 10 seconds.

#### Apply tags

In this example we’ve configured the page to apply the tag Webinar Interest if a user views the page for 10 seconds. This tag could then be used as a trigger to send a followup email from your CRM.

Note that if a page is restricted via WP Fusion, the tags will only be applied if the user has the correct permissions to view the page.

**Note:** The delay before applying tags relies on JavaScript, which means the tags will only be applied if the user *stays on the page* for the specified period of time. If they leave or reload the page, the timer will be reset.

#### Remove tags

There is also an option for Remove tags when a user views this page. An example use case for this might be tagging someone as Profile Incomplete when they register on your site, and then removing that tag when they view their profile page.

#### Delay

You can specify a delay in milliseconds before any tags are applied or removed. In the screenshot above, 10,000 milliseconds equals 10 seconds.

#### Apply tags after X visits

It’s also possible to apply tags only after a visitor has viewed a post a certain number of times.

Because this has the potential to fill up your database with a lot of tracking data, we don’t include it as part of WP Fusion core, but it’s available via our custom snippets library here.

### Category / term settings

In the same way that you can apply tags whenever a single post or page is viewed, you can also set up any taxonomy term on your site to apply tags when a post with that term is viewed. That can be Categories, Post Tags, or a custom taxonomy.

These settings are accessed by editing any individual taxonomy term.

In this example we have a post tag called “News”, and WP Fusion is configured to apply the tag Viewed Post in Category “News” whenever any post with that post tag is viewed.

For more information on the rest of these settings see the access control documentation.

### Click Tracking

WP Fusion includes an option where you can apply tags when a link, button, or any other HTML element is clicked. That’s covered in the Link Click Tracking documentation.

### Advanced Tracking

WP Fusion also includes a JavaScript API that lets you apply tags and sync data to your CRM with your own JavaScript code. Using this you can create more complex setups such as tagging people based on progress in a video player or based on a quiz score. That’s covered in the JavaScript API tutorial.

### Site tracking

With some CRMs that support page view tracking, WP Fusion bundles the scripts required to enable that functionality. When enabled, all page views are synced to your CRM. More info on that in the Site Tracking documentation.

---

## Restricting Access to Content

**Source:** [https://wpfusion.com/documentation/getting-started/access-control/](https://wpfusion.com/documentation/getting-started/access-control/)

### Overview

WP Fusion adds many methods for restricting access to content based on a user’s tags (or “lists” or “segments”) in your connected CRM.

These features can be used to create members-only content, drip-feed access to content, and create personalized listings of posts, pages, courses, and more.

**Not using WP Fusion for access control?** You can completely disable the access control system by un-checking **Restrict Content** in the [General Settings](https://wpfusion.com/documentation/getting-started/general-settings/#content-restriction).

### Meta box

WP Fusion adds a meta box to every post, page, and other piece of content on your site, where you can control the visibility of that content and set up redirects if a user doesn’t have access.

You can also apply and remove tags when a page or post is viewed.

There are a few options in WP Fusion’s content restriction meta box:

- Users must be logged in to view this page: Check this box to require a user to be logged in to view the content.
- Required tags (any): Here you can specify tags that are required to view the content. If the user has at least one of the tags they’ll be able to access it.
- Required tags (all): With this setting the user must have all of the tags in order to access the content. For example “Active Membership” and “Gold Member”.
- Required tags (not): With this setting, if the user is logged in and has any of the specified tags, they will be denied access.
- Redirect if access is denied: Here you can specify a page on your site to redirect to if access is denied, or type in an external URL. Leave blank to show the restricted content message (see below).
- Refresh tags if access is denied: Check this box to force-refresh a user’s tags from your CRM when a logged-in user is denied access to this content.
- Apply tags on view: You can specify any number of tags to be applied when the content is viewed.
- Remove tags on view: You can specify any number of tags to be removed when the content is viewed.
- Delay: Here you can set a delay in ms before the tags are applied. For example enter 5000 for 5 seconds.

#### Restricted content message

The restricted content message will be shown if a page is protected and no redirect is specified. You can edit this from the general WP Fusion settings page.

If you enable the setting for Per Post Messages you’ll be able to set a custom message for every restricted post. This setting will appear at the bottom of the post edit screen.

#### RSS feed content

The restricted content message is automatically applied to the content of all WP Fusion-protected posts in your site’s RSS feeds. However this does not apply to excerpts in RSS feeds, since WP Fusion doesn’t protect excerpts by default.

If you wish to protect RSS feed excerpts as well, you can do so with the following code snippet:

```
add_filter( 'the_excerpt_rss', array( wp_fusion()->access, 'restrict_rss_feed_content' ) );
```

#### Restricted content excerpts

If you use the more tag in your posts (or the more block), WP Fusion will automatically include your custom excerpt above the restricted content message. This can be used to offer teasers of restricted content.

Another way to display excerpts of restricted content is to add the [the_excerpt]shortcode to the restricted content message. This will output an excerpt of the protected post.

You can optionally specify an excerpt length using the length= parameter, for example [the_excerpt length="90"] to display the first 90 characters of the post.

**Note:** If a post has a *more tag* or *more block*, this will take priority over any excerpt added via the [the_excerpt] shortcode.

#### Restricted content message vs redirect

When protecting a piece of content with WP Fusion you can either set a redirect if access is denied, or leave the redirect blank to show a restricted content message.

This works by replacing the “content” area of the page, which works well with normal posts and pages that have a single content area.

The restricted content message on a blog post.
It does not work as well on pages that have multiple content areas or customized templates, for example a product or course page.

The Restricted Content Message isn’t as effective on a product page since the content area is only a small part of the layout.
In cases like that it’s preferable to set a redirect when access is denied.

### Filter Queries

On the General tab of the WP Fusion settings is an option to Filter Queries. When this is enabled WP Fusion will modify any database queries so that posts a user doesn’t have access to are removed from the results.

This can be used to create post grids or course listings of only items a user has access to. It works with all plugins and theme builders.

There are three options:

- Off: No filtering (default).
- Standard: Restricted posts will be removed from the query results after the query is run.
- Advanced: Restricted posts will be excluded from query results before a query is run. This method is slower but works better when using pagination and limits on the number of results.

Generally Standard mode is sufficient. You would only want to use Advanced mode if your restricted items are split across multiple pages (with pagination), or if you’re doing filtering on the items.

For example hiding lessons a user doesn’t have access to in the LearnDash course navigation would work great with Standard mode, but hiding restricted items in the WooCommerce shop catalog or in FacetWP search results would work best with Advanced mode.

Note: Filter Queries is slow. If you have a lot of posts on your site and you haven’t enabled the Filter Queries Post Types setting, it can easily add several seconds to each page load, or even crash your site.

Filter Queries should be used minimally and only when no other method of protecting content will work.

#### Filter Queries Post Types

For best performance, it’s recommended to select the post types you want to use query filtering on from the Post Types dropdown.

If this is left blank then query filtering will be run on every piece of content on your site, which may negatively affect performance.

#### Filter Queries Arguments

When using Filter Queries in “Advanced” mode, by default it will process at most 200 posts in a single query. This is to protect the stability of your site, since each post requires several database queries to calculate the access rules for the current user.

If more than 200 posts are found with WP Fusion access rules, a notice will be logged to the activity logs.

WP Fusion will log a notice if you attempt to process more than 200 posts at a time with Filter Queries in Advanced mode.
Any posts beyond the first 200 will be ignored by Filter Queries, which may result in content being displayed that should be hidden.

You can override this limit using the wpf_query_filter_get_posts_args filter.

However, the higher the limit, the longer the page will take to load, due to the increased number of database queries. This may also result in out of memory errors or timeout errors depending on the available resources of your server.

#### Filter Queries caching

The results of the restricted posts for the current user and post type are cached for one minute to improve performance. This works best with object caching like Redis or Memcached. On our sites we use the Redis Object Cache plugin and it works quite well.

The cache time can be extended using the wpf_query_filter_cache_time filter.

### Apply settings in bulk

You can also apply settings in bulk by selecting multiple posts, pages, or custom post types from the list table in the admin.

Select the items you want to edit, and choose “Edit”, from the Bulk Actions menu.

Access the bulk edit panel from the Bulk Actions dropdown
Inside the panel will be a section where you can bulk-configure the WP Fusion settings for the selected posts.

If you check the box for Merge Changes, your new settings will be merged into the existing settings for each post.

If Merge Changes is unchecked, each post’s content restriction settings will be overwritten by the settings specified in the bulk edit tool.

### Restricting access to archives and categories

You may wish to restrict access to a category or taxonomy archive page. Click “Edit” next to the category or taxonomy term and scroll down to the WP Fusion – Access Settings section.

You can enable Restrict access to archives and select a required tag to protect the archive page for that post type.The access restrictions work the same way they do for pages. Keep in mind that this won’t restrict all content that has the category, tag, or term specified— it will just restrict access to the archive pages for that content.

If you want to restrict access to all content that has the given category or term, check the box next to Restrict access to all. These restrictions will take priority over an individual post’s access rules.

If you want to completely hide the taxonomy term when a user doesn’t have access, check the box for Hide term. This will remove the category / term from all term listings, index pages, search results, and navigation.

### Restricting access to post types

You can restrict access to entire post types in three ways: either visually via the CPT-UI plugin, the WP Fusion Post Types Addon, or in PHP using the wpf_post_type_rules filter.

**Note:** When protecting entire post types or categories / terms, redirect URLs configured on single posts will still take priority over the redirect set on the post type or term.

### Protecting content via CSS

For advanced users, WP Fusion includes an option that lets you write CSS rules to style your site based on the current user’s CRM tags.

This can be enabled by checking the box for Tags as CSS Classes on the Advanced tab in the WP Fusion settings.

The current user’s tags will be added as classes to the HTML <body> element.

Each tag will be prefixed by tag- and the tag name will be sanitized into a valid CSS class. For example the tag “Gold Member” would become tag-gold-member.

You can then style elements on your site based on the user’s tags. For example to hide a sales banner from paying members:

```
body.tag-gold-member #sales-banner { display: none; }
```

### Testing content protection

There are a few ways to review and test your content protection with WP Fusion.

#### Review in the admin

When viewing any table of posts, pages, courses, or other content in the admin, you’ll see a lock icon indicating that an item is protected by WP Fusion.

You can hover over the lock icon to display a tooltip showing the access rules for that piece of content.

#### Preview with tag

The simplest method for testing access rules is to use the Preview With Tag feature in the admin toolbar.

This will let you preview any page on your site as if your user currently had the selected tag. You can also select Lock All or Unlock All from the menu for additional preview options.

#### Testing as a user

The most reliable way to test your site experience is to use an actual user account.

By default your admin user account is excluded from WP Fusion’s content protection rules, but you can disable this by un-checking the box for Exclude Administrators in the WP Fusion settings. Or you can use a test (non administrator) use account.

When testing with a user account, you can see and modify the user’s tags via their admin user profile.

If you’ve just applied a new tag in your CRM, you may need to click Resync Tags to load the updated data into WordPress. To automate this process consider setting up a webhook.

### Developers

There are several methods for using WP Fusion’s access logic in your custom templates and plugins.

For more information, see the documentation pages on wpf_has_tag(), wpf_user_can_access(), wpf_get_tag_id(), and the additional resources in the Developer Guides.

---

## Shortcodes

**Source:** [https://wpfusion.com/documentation/getting-started/shortcodes/](https://wpfusion.com/documentation/getting-started/shortcodes/)

### Overview

WP Fusion includes a few shortcodes that let you display user meta, and show / hide content based on a user’s tags in your CRM. These can be used to personalize the site content based on a user’s custom fields or tags.

### Displaying user meta

You can use shortcodes to display meta data for logged in users. The syntax is pretty simple. For example, to show a user’s first name:

```
[user_meta field="first_name"]
```

Any field listed in the Contact Field tab of WP Fusion’s settings can be accessed in this way. For more information, see the documentation on Displaying CRM Data in WordPress.

You can also display different information for users who haven’t registered yet, or aren’t logged in, like so:

```
Welcome, [user_meta field="first_name"]Guest[/user_meta]!
```

Logged in users will see their first name, while visitors will see “Welcome, Guest!”

#### Sync if empty

The [user_meta] shortcode will display the data stored in the specified field in the database for the current logged in user.

If you are syncing that field with your CRM, and know there is supposed to be a value in your CRM for all users, you can force an update in cases where the value is empty, using the sync_if_empty parameter. As an example:

```
Your instructor is [user_meta field="assigned_instructor" sync_if_empty="true"].
```

This shortcode will display the user’s assigned instructor. If the value is empty, it will connect to your CRM one time to load the updated data for that field.

#### User meta formatting

WP Fusion supports formatting date and time fields using PHP’s date function. For example:

```
[user_meta field="next_bill_date" date-format="Y-m-d"]
```

This will output the date like 2019-03-10.

For escaping text in the date format, use a double backslash. For example:

```
[user_meta field="next_bill_date" date-format="l \\t\\h\\e jS \\o\\f F, Y"]
```

This will output the date like Friday the 22nd of March, 2019. For more information on the syntax see PHP’s date documentation.

#### User meta formatting – timezone offset

WP Fusion syncs dates with most CRMs in UTC. To correct for this, the user_meta shortcode will adjust the date to local time (based on the site’s timezone) before displaying it.

Sometimes this can result in the time being displayed incorrectly, especially if you are entering dates via another plugin and they are already in local time. To manually correct the timezeone conversion, you can use the timezone-offset parameter, for example

```
[user_meta field="date_time" date-format="Y-m-d H:i:sa" timezone-offset="-2"]
```

This will display the date and time, corrected backwards two hours. The timezone-offset parameter accepts any positive or negative number.

#### Video – Displaying user meta

#### Displaying a contact ID

You can display the current user’s contact ID as well. The format is [user_meta field="{crm_slug}_contact_id"]. For example with Infusionsoft the shortcode would be:

```
[user_meta field="infusionsoft_contact_id"]
```

### Displaying content based on tags

You can use these shortcodes to show and hide content based on a user’s logged in status and CRM tags.

Note that WP Fusion also includes support for [Elementor](https://wpfusion.com/documentation/page-builders/elementor/), [Beaver Builder](https://wpfusion.com/documentation/page-builders/beaver-builder/), [Divi](https://wpfusion.com/documentation/page-builders/divi/), [Oxygen](https://wpfusion.com/documentation/page-builders/oxygen/), and the [Gutenberg Editor](https://wpfusion.com/documentation/page-builders/gutenberg/). If you’re using a page builder it may be easier to configure access rules using WP Fusion’s visual interfaces rather than a shortcode.
Note that while you can put *other* shortcodes inside the [wpf] shortcode, you cannot put a [wpf] shortcode inside another [wpf] shortcode.

#### Restricting content based on logged in status

You can use the following two shortcodes to show content based on whether or not a user is logged in, regardless of their tags. This works like:

```
[wpf_loggedin]Only visible to logged in users[/wpf_loggedin]
```

```
[wpf_loggedout]Only visible to logged out visitors[/wpf_loggedout]
```

#### Restricting content based on tags

To restrict content based on a user’s CRM tags, wrap the desired content in the WP Fusion shortcode, using the examples below.

This content will only show if the user is logged in and has the tag “New Customer”:

```
[wpf tag="New Customer"]Restricted Content[/wpf]
```

This content will only show if the user is logged in and has both the tags “New Customer” and “Purchased Course”:

```
[wpf tag="New Customer,Purchased Course"]Restricted Content[/wpf]
```

#### Show the content if a user does not have a tag

To show content only if a user doesn’t have a certain tag, use the following syntax:

```
[wpf not="New Customer"]Restricted Content[/wpf]
```

You can also combine multiple tags for the not parameter, like

```
[wpf not="New Customer, Active Member"]Restricted Content[/wpf]
```

In that case the content will be hidden if the user has any of the tags. So if the user is tagged either New Customer or Active Member, the content will be hidden.

You can also combine parameters for more advanced locking, like so:

```
[wpf tag="New Customer" not="Payment Failed"]Restricted Content[/wpf]
```

#### Requiring any tag, instead of all

By default, WP Fusion will only unlock the content if the user has all of the tags in the list. To make it so that the content will unlock when any of the tags are found, include method="any" in the shortcode, like:

```
[wpf tag="New Customer,Purchased Course" method="any"]Restricted Content[/wpf]
```

#### Else conditions

The [wpf] shortcode also supports an “else” condition. The usage works like:

```
[wpf tag="New Customer"]
Shows only to users with the "New Customer" tag
[else]
Shows to all logged in users who don't have the "New Customer" tag
[/wpf]
```

#### Logged out parameters

By default, content in the shortcode will always be hidden from users who aren’t logged in. You can change this by adding logged_out to the shortcode. For example:

```
[wpf not="New Customer" logged_out]
This will show to everyone who doesn't have the "New Customer" tag, including logged out visitors.
[/wpf]
```

or:

```
[wpf tag="New Customer" logged_out]
Shows only to users with the "New Customer" tag
[else]
Shows to all users who don't have the "New Customer" tag, as well as logged-out visitors.
[/wpf]
```

#### Square brackets in tag names

WordPress does not allow square brackets in shortcode parameters. If your tag names have square brackets in them, you can use parentheses instead and they will be treated as equivalent by WP Fusion.

For example if your tag name is [Customer] Paid Course, your shortcode will work with [wpf tag="(Customer) Paid Course"].

### Displaying content based on page rules

Using the [wpf_user_can_access] shortcode, you can show and hide content based on the access rules configured in the WP Fusion meta box on another post.

For example, this shortcode shows a message only if the current user has permission to access a course with post ID 456.

```
[wpf_user_can_access id="456"]
Thanks for signing up for Awesome Course!
[/wpf_user_can_access]
```

#### Else conditions

This shortcode also accepts an [else] condition:

```
[wpf_user_can_access id="456"]
Thanks for signing up for Awesome Course!
[else]
You might be interested in our Awesome Course
[/wpf_user_can_access]
```

#### Within a loop

If the id= parameter is omitted, the shortcode will use the current post ID. This can be used in a loop or custom template to personalize the results.

For example to alternate the Elementor template displayed based on a user’s permissions:

```
[wpf_user_can_access]

[elementor_template id="14331"] // Enrolled template

[else]

[elementor_template id="53371"] // Unenrolled template

[/wpf_user_can_access]
```

### Displaying content based on user meta values

The [user_meta_if] shortcode can be used to conditionally display content based on user meta values of the current user, similar to Liquid Tags with Shopify or Drip.

**Note:** By their nature, shortcodes are difficult to work with. We recommend making use of these shortcodes sparingly, if at all. One typo in the attributes will make the whole shortcode not work. WP Fusion includes [many PHP filters](https://wpfusion.com/documentation/#filters) to control the visibility of content and these are generally easier to work with.

#### Available attributes

The [user_meta_if] shortcode accepts 5 parameters:

- field= The meta field on the current user to check (any value from the wp_users or wp_usermeta table)
- value= The value to compare the user meta field against
- field_format= The formatting for the user meta field. The allowed functions are:

strtotime
strtolower
strotoupper
strval
abs
ceil
floor
round
- value_format= The formatting for the field to check against. Can be any PHP function.
- compare= The comparison. Default is =, can also be !=, greater, less, IN / NOT IN, or ALL (see below)

#### Simple example

The simplest example is comparing a user meta value to a text value. For example to check a user’s role:

```
[user_meta_if field="role" value="customer"] Welcome back, Customer! [/user_meta_if]
```

Or to check someone’s BuddyPress account status:

```
[user_meta_if field="account_status" value="approved"]Thanks for verifying your email address![/user_meta_if]
```

#### Numeric comparisons

As another example, you can compare numeric values using the compare= attribute, for example with lifetime value:

```
[user_meta_if field="lifetime_value" value="100" compare="greater"] Hey hey, big spender! [/user_meta_if]
```

In that example the content will only be displayed if the user’s lifetime_value field is greater than 100.

Note that you must have a field called lifetime_value for the user in your database. WP Fusion does not track lifetime values.

#### Date comparisons

You can get a little more fancy by making use of the field_format= and value_format= attributes, along with the strtotime() function.

For more info on valid inputs to strtotime() see the PHP manual.

```
[user_meta_if field="next_exam_date" field_format="strtotime" value="-5 days" value_format="strtotime" compare="greater"]
Your exam is coming up soon, take the checklist to make sure you're ready on the big day!
[/user_meta_if]
```

This one is a bit complicated. Let’s break it down:

- field=”next_exam_date” This says we should use the field next_exam_date from the wp_usermeta table. It can be in any date string. For example 2021-01-25 8:15am
- field_format=”strtotime” This converts the exam date into a timestamp for comparison, i.e. 1611558900
- value=”-5 days” This is the value to compare against, “five days ago” relative to now
- value_format=”strtotime” This runs the value through strtotime() which gives us a timestamp for five days ago
- compare="greater"The greater than comparison. The condition will only be met if the student’s next exam date is greater than or equal to 5 days ago.

The end result is that the message will be hidden until five days before the student’s next exam date, at which point it will be shown.

#### IN and NOT IN

WP Fusion can also evaluate against partial matches in a meta value. For this, use either compare="IN" to search for the value inside the user meta field, or compare="NOT IN" to invert the logic.

This works with either strings, or data stored as an array.

For example, let’s say you have a usermeta field called favorite_animals. For the current user, it is set to "Dogs, Horses, Cats". The following would display the content:

```
[user_meta_if field="favorite_animals" value="Cats" compare="IN"] Meow! 😸 [/user_meta_if]
```

The result is the same if favorite_animals is an array, like array( "Dogs", "Horses", "Cats" ).

IN and NOT IN can also evaluate multiple keywords in a string or array separated by commas.

For example, let’s say you have the same usermeta field called favorite_animals. For the current user, it is set to "Dogs, Horses, Cats". The following would also display the content:

```
[user_meta_if field="favorite_animals" value="Cats, Turtles" compare="IN"] Meow! 😸 [/user_meta_if]
```

IN displays the content when one keyword matches the user’s metadata, while NOT IN does the inverse.

#### ALL

WP Fusion can also evaluate against full matches in a meta value. For this, use compare="ALL" to search for the value(s) inside the user meta field.

This works with either strings, or data stored as an array.

For example, let’s say you have a usermeta field called favorite_animals. For the current user, it is set to "Dogs, Horses, Cats". The following would display the content:

```
[user_meta_if field="favorite_animals" value="Cats, Dogs, Horses" compare="ALL"] You like so many animals!🐶 [/user_meta_if]
```

In another example using the usermeta field called favorite_animals and "Dogs, Horses, Cats" is set for the user, this would not display the content:

```
[user_meta_if field="favorite_animals" value="Cats, Dogs" compare="ALL"] You like so many animals!🐶 [/user_meta_if]
```

Because the keywords stored in value do not fully match the user metadata, the content is not displayed.

#### EMPTY and NOT EMPTY

You can also check to see if a field exists at all. For this, use either compare="EMPTY" to display the content if the field is empty, or compare="NOT EMPTY" to display the content if the field has a value in it.

```
[user_meta_if field="webinar_link" compare="NOT EMPTY"] Your webinar link is [user_meta field="webinar_link"] [/user_meta_if]
```

### Updating data

#### Via shortcode

You can insert a shortcode into your pages to force an update of a users tags and/or meta data before the rest of the page is displayed.

This can be used to force a refresh of data from your CRM before displaying content using the [wpf] or [user_meta] shortcodes.

To force an update of the current user’s tags, use:

```
[wpf_update_tags]
```

To force an update of the current user’s meta data, use:

```
[wpf_update_meta]
```

Note that these shortcodes will trigger an API call to your CRM and slow down your page load by several seconds. They should be used sparingly, if at all.

#### Via URL

It’s also possible to trigger an update of a user’s tags and/or metadata using a special query parameter in a URL. The parameter is wpf-refresh, it can be used like:

- https://mysite.com/page/?wpf-refresh=all: The user’s tags and metadata will be loaded from your CRM.
- https://mysite.com/page/?wpf-refresh=tags: The user’s tags will be loaded from your CRM.
- https://mysite.com/page/?wpf-refresh=meta: The user’s metadata and custom fields will be loaded from your CRM.

You can add a link to refresh the same page (i.e. the page the user is currently on) by simply using the query string as the destination for the URL. For example

```
<a href="?wpf-refresh=all">Refresh</a>
```

or in a visual editor, like so

Note that the user’s updated tags will be loaded from your CRM *before* their access to the destination page is checked. This means that the user can unlock previously-locked content by clicking the link (as long as they have the correct access tags in your CRM).

---

## Syncing Contact Fields

**Source:** [https://wpfusion.com/documentation/getting-started/syncing-contact-fields/](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/)

### Overview

In addition to applying tags in your CRM, a core feature of WP Fusion is the ability to sync data bidirectionally between WordPress user records and CRM contact records.

This is managed from the Contact Fields tab in the WP Fusion settings.

In the left column are all the fields that WP Fusion has detected in WordPress. To help finding fields easier these are grouped into collapsable sections based on the plugin that registered the field.

In the right column are dropdowns where you can select a corresponding custom field in your CRM.

**Note:**If you’ve just added a new custom field in your CRM, it may not appear in the dropdown of available fields. Begin typing the name of the new field, and if no matches are found, click the “Resynchronize” link that appears in the dropdown. The new custom field will be loaded from the CRM and you should see it appear once you re-type the name.

### Which fields are available

The fields that are available for sync depend on the plugins you have installed. Each of WP Fusion’s plugin integrations has the ability to detect the fields for that plugin.

The fields WP Fusion can sync with your CRM relate to a specific user on your site, not a custom post type or other related content.

Generally these would be standard fields (like Billing Address with WooCommerce), as well as custom fields (for example custom fields you’ve added to a registration form using Ultimate Member).

In addition to that, WP Fusion will scan the database (the wp_usermeta table) for your own admin user to try and find any other fields that might not have been detected, or might come from a plugin we don’t officially support. These will be listed at the bottom of the Contact Fields list in the Additional Fields section.

**Note:** If you are trying to sync fields from a plugin that WP Fusion doesn’t have an integration with, it’s recommended to enable Push All on the Advanced settings tab. This will tell WP Fusion to directly watch the database for any changes to user meta that might need to be synced.

#### Previous user email

In addition to the core WordPress fields, WP Fusion can sync a user’s previous email address to your CRM when the email address on their account is changed.

To enable this, enable the Previous User Email field for sync by mapping it to a custom field in your CRM.

Do not map the Previous User Email field to the standard Email field in your CRM, or this will prevent email address changes from being synced to your CRM, which could cause your users to lose their tags and access when they change their email address.

The previous email field is useful for sending out automated email address change notifications, as well as creating a task to check for conflicting contact records in your CRM after email address updates.

#### Pseudo-fields

With some plugins, WP Fusion has been designed to sync some pseudo fields with your CRM. These are fields that don’t exist in any one place in your database, but WP Fusion can calculate them and sync them as part of a specific process, for example a checkout or membership level status change.

Some examples:

- WooCommerce order data
- LearnDash course progress
- MemberPress current membership details

If the data you’re trying to sync with your CRM isn’t related to a specific user, or is coming from a plugin not currently supported by WP Fusion, you can also extend WP Fusion to detect and sync additional fields. For more info on that, see this tutorial.

#### Additional Fields

At the bottom of the Contact Fields list is a section called Additional Fields.

This contains any meta fields that were found in your database but aren’t associated with a particular plugin integration.

**Note:** To build the list of Additional Fields, for performance reasons WP Fusion only scans the usermeta of your own admin user. If you’ve just added a new field and it’s not showing, try saving some data in that field for your own admin user.
For the most part you can leave this section alone, but if you’re trying to sync data to your CRM from a plugin that WP Fusion doesn’t have an official integration with, you may find the field keys here.

If you’re not using the Additional Fields you can hide them completely by checking the box for Hide Additional Fields on the Advanced settings tab.

If you’re a developer and are creating custom registration or profile forms, you can also type in new field keys into the Add new field line. The field you enter here should match the input name on your form. When the form is submitted, if WP Fusion detects an input with the matching name, then the value will be synced to the corresponding field in your CRM.

By default any enabled Additional Fields will only be synced if those fields are found on a submitted profile form.

If you find the fields aren’t syncing, you can enable Push All from the Advanced settings tab. This causes WP Fusion to run on the added_user_meta and updated_user_meta hooks, and will also sync the field values any time those keys are updated in the wp_usermeta table.

### How data is synced

WP Fusion can either “push” data from WordPress to your CRM, or “pull” data from your CRM to WordPress.

A “push” happens when someone registers a user account, updates their profile, or a batch operation is run. Any available WordPress fields from the left column are synced to their corresponding CRM custom fields from the right column.

A “pull” can happen in a few scenarios:

- When a webhook is received
- When someone logs in and Login Meta Sync is enabled
- When a page is loaded that has the [[wpf_update_meta]] shortcode on it

When that happens any fields that are enabled in the right column on the Contact Fields list are loaded via an API call and saved to their corresponding WordPress fields in the database.

**Note:**By default WP Fusion will not send an empty field to your CRM, or load an empty field from your CRM into WordPress. This is to avoid overwriting any valid data with a blank value. This can be overridden by setting the field type to 
```
raw
```

 in the dropdown.

#### Field types

For each field there is a Type dropdown where you can tell WP Fusion how to treat the data in that field. These are detected automatically for most plugin integrations and don’t usually need to be changed, but if needed you can click on the type and select a new type from a dropdown to override the defaults.

Generally text type fields are the most compatible. What the other types do depend on your connected CRM. For example:

- If a field type is set to checkbox then the value will be converted to a boolean “true” or “false” when the API call is sent to supported CRMs.
- If a field type is set to multiselect then array-formatted data sent to ActiveCampaign will be separated with pipes || to properly update ActiveCampaign list box and checkbox fields.
- If a field type is set to country then a country abbreviation will be sent to your CRM, which is compatible with the Country dropdowns in Infusionsoft, Mautic, and others. If it’s set to text the full country name will be sent instead.
- If a field type is set to date then a date sent to HubSpot will be converted to a Unix timestamp to properly update a HubSpot datepicker field.
- If a field type is set to raw then WP Fusion will not perform any additional checks or formatting on the field data. Fields set to raw will also be synced to your CRM even if they are empty, which has a potential for data loss.

### Dynamic Tagging

With some platforms, WP Fusion can dynamically convert a user meta value into tags in the CRM. To set this up, select Create tag(s) from value from any Select a field dropdown.

When WP Fusion goes to sync the metadata to your CRM, it will convert the value into a tag. If the value is in an array format (like a multiselect or checkboxes field), then the selected values will be converted into multiple tags.

This should be used with caution as it can result in WP Fusion generating many hundreds or thousands of new tags.

For a list of platforms that support dynamic tagging, see the column Add New Tags in WordPress on the CRM Compatibility Table.

---

## General Settings and Basic Setup

**Source:** [https://wpfusion.com/documentation/getting-started/general-settings/](https://wpfusion.com/documentation/getting-started/general-settings/)

### WP Fusion Settings

Once you’ve connected WP Fusion to your CRM, the settings page will reload and you’ll see the rest of WP Fusion’s settings.

Across the top of the page are several tabs corresponding to different aspects of WP Fusion’s functionality. You may see additional tabs depending on which plugins you have installed or which addons you have enabled.

**Note:** As part of the setup process, WP Fusion sets default settings based on the plugins you have installed and your connected CRM. In many cases it’s not necessary to modify these default settings at all, and in some cases modifying them may lead to unexpected behavior.

### General Settings

The General settings tab lets you configure some global defaults as to when WP Fusion syncs data with your CRM, as well as some content restriction defaults.

### Automatically create contact records for new users

The settings in this section control how WP Fusion handles new users on your site. The default is to sync all new user registrations to your CRM.

The options are:

#### Create Contacts

When this box is checked, new user registrations will be synced to your CRM as contact records. It is strongly recommended to leave this enabled. If it’s disabled, only profile updates from existing users will be synced with your CRM. New users and customers will be ignored.

#### Assign Tags

The tags specified here will be assigned whenever a new user registers and is added to your CRM.

#### Lists, Layout, Owner, etc.

You may see additional options here depending on your connected CRM, like Lists, Default List, Default Contact Owner, or Contact Layout. Any settings you specify here will apply when WP Fusion adds a new contact record to your CRM.

### Synchronize Contact Data

The settings in this section control how WP Fusion sends data to and loads data from your CRM.

The options are:

#### Push

When this box is checked, WP Fusion will watch for user profile updates and sync any enabled fields to the corresponding fields in your CRM, via the field mapping you’ve set on the Contact Fields settings tab.

#### Push All

Turning on this setting causes WP Fusion to watch the wp_usermeta database table for any changes to user meta, and sync those as the fields are changed in the database.

It’s generally not necessary to turn this on unless you’re trying to sync data from a plugin not already supported by WP Fusion. Turning on Push All may result in unexpected behavior with how fields are formatted, since values stored in the database aren’t always the same as the values entered on profile forms.

#### Login Tags Sync

With this setting on WP Fusion will load a user’s updated tags from your CRM when they log in to your site.

#### Login Meta Sync

With this setting on WP Fusion will load a user’s updated metadata from your CRM when they log in to your site.

**Note:** It’s recommended to leave these settings off, as it will slow down your login process by a few seconds. However if your CRM doesn’t support [webhooks](https://wpfusion.com/documentation/webhooks/), you can use this setting to ensure that your users’ data is kept up to date with the corresponding contact record in your CRM.

### Site Tracking

If WP Fusion includes site tracking scripts for your CRM, you’ll see an option to enable them here. This is off by default.

### Content Restriction

The settings in this section establish some default behavior about how WP Fusion protects restricted content on your site.

For more details on restricting access to content see the next section.

The options are:

#### Restrict Content

If you aren’t using WP Fusion for access control, only for syncing data with your CRM, you can simplify the admin UI and potentially improve performance by deactivating the access control system entirely.

If you un-check the setting for Restrict Content, any settings for “Required tags” across the admin will no longer be available, and as people navigate your site your content will no longer be checked for WP Fusion access rules.

This can also be disabled temporarily as a troubleshooting step (no settings are lost when the access control system is disabled).

#### Exclude Administrators

By default WP Fusion excludes site administrators from any content protection rules or redirects. You can un-check this box to have content protection rules apply to administrators as well.

#### Hide From Menus

When this box is checked, WP Fusion will hide any menu items from your site navigation if the user doesn’t have permission to access the associated content, based on the settings configured in the WP Fusion meta box.

This can be used to make personalized menus— for example a list of courses that the user can currently access.

#### Filter Queries

When this is enabled WP Fusion will modify any database queries so that posts a user doesn’t have access to are removed from the results.

This can be used to create post grids or course listings of only items a user has access to. It works with all plugins and theme builders.

There are three options:

- Off: No filtering.
- Standard: Restricted posts will be removed from the query results after the query is run.
- Advanced: Restricted posts will be excluded from query results before a query is run. This method is slower but works better when using pagination and limits on the number of results.

Generally Standard mode is sufficient. You would only want to use Advanced mode if your restricted items are split across multiple pages (with pagination), or if you’re doing filtering on the items.

For example hiding lessons a user doesn’t have access to in the LearnDash course navigation would work great with Standard mode, but hiding restricted items in the WooCommerce shop catalog or in FacetWP search results would work best with Advanced mode.

#### Filter Queries – Post Types

By default query filtering applies to all content on your site. Using this setting you can limit query filtering to just specific post types. This can improve the performance of the query filtering process.

#### Default Not Logged-In Redirect

Here you can specify a URL to redirect users to when they are denied access to a piece of content on your site because they are not logged in (usually a login page).

If set, this takes priority over any redirect configured on an individual post in the WP Fusion access settings.

Normally the **Default Not Logged-In Redirect** would be used to redirect people to a login page if they’re denied access due to not being logged in, while allowing you to have a different redirect (for example to a sales page), if they are logged in but don’t have the required tags.

#### Default Generic Redirect

Here you can specify a URL to redirect users to when they are denied access to a piece of content on your site. This will be used if the user does not have the required tags, or if the user is not logged in and there is Default Not Logged-In Redirect specified.

If a redirect is configured in the WP Fusion meta box on a specific post, it will take priority over the Default Generic Redirect.

If this setting is left blank, WP Fusion will attempt to replace the content of the post with the Default Restricted Content Message, but this does not work 100% of the time with custom post templates (such as WooCommerce products). See this page for more info.

Note that this should be a fully-formed URL, such as https://mysite.com/please-log-in/, not /please-log-in/.

#### Return After Login

If a visitor to your site is denied access to a piece of content protected by WP Fusion, WP Fusion will set a cookie that records the page they tried to access.

If they log into the site within the next five minutes, WP Fusion will attempt to redirect them back to the content they were previously denied access to.

This setting is on by default.

#### Return After Login Priority

Login redirects happen on a “first come, first served” basis. If another plugin does a login redirect, then WP Fusion’s Return After Login feature won’t run. This setting lets you adjust the priority at which WP Fusion’s login redirects run. A lower number means a higher priority.

For example WP Fusion’s Logins Addon runs its login redirects at priority 1, so if you wanted the Return After Login redirects to happen before the Logins Addon redirects, you could set the priority in this setting to 0.

#### Default Restricted Content Message

Here you can set a message to be displayed to users and visitors when they don’t have permission to access a piece of content, and no redirect has been specified.

This works by replacing the “content” area of the page, which works well with normal posts and pages that have a single content area.

The restricted content message on a blog post.
It does not work as well on pages that have multiple content areas or customized templates, for example a product or course page.

The Restricted Content Message isn’t as effective on a product page since the content area is only a small part of the layout.
In cases like that it’s preferable to set a redirect when access is denied, via the WP Fusion meta box.

#### Per Post Messages

Enabling this setting will add a new metabox in the admin for every post and page on your site, where you can enter a restricted content message specific to that piece of content. If no custom message has been entered, the default will be used.

### Site Lockout

Site lockout lets you deny access to your entire website if a user is logged in and has a specific tag.

For example if you had a sales website and a separate course website, a renewal payment failure on the sales site could apply a tag Payment Failed.

If the user logs into the course site and has the Payment Failed tag, they can be redirected back to the sales site to update their billing information.

For making your entire site private (regardless of tags) we recommend the Force Login plugin.

The options are:

- Lockout Tags: If the user is logged in and has any of these tags, the lockout will be activated.
- Lockout Redirect: If the lockout is active, the user will be redirected to the URL specified here. This can either be a page on the same site, or a page on another site (for example a sales site, or a credit card update form at your payment provider’s site).
- Allowed URLs: Here you can optionally enter additional URLs that bypass the lockout feature, for example your contact page or a product page. Enter one URL per line. You can use a wildcard * symbol to partially match a URL, for example https://mysite.com/account* will match the account page and any sub pages.

### SEO

By default your restricted content will be hidden from search engine crawlers and social sharing tools.

Enabling Show Excerpts will allow search engine spiders and other scrapers / crawlers to view an excerpt of your protected content. This applies to:

- Google
- Bing
- Ask
- Yahoo
- Facebook

For example if you wanted to share a link to your protected content on Facebook, enabling Show Excerpts would allow Facebook to extract an excerpt of that content, instead of showing your restricted content message.

You can also optionally override the default Excerpt Length.

### Webhooks

Webhooks enable a bi-directional sync between WP Fusion and your CRM. When a contact is updated or a tag is applied in your CRM, webhooks allow the data to be loaded back into WordPress automatically. Webhooks setup for each of our supported CRMs is covered here.

#### Access Key

Your access key goes in your webhook URL, this authenticates the webhook to WP Fusion. Your access key is generated randomly when you first set up WP Fusion.

If the access key in your webhooks doesn’t match the key shown here, you will see an error message in the WP Fusion logs when a webhook is received.

You can change your access key by editing this field.

#### Webhook Base URL

This is your site’s webhook URL, you can copy and paste it into the webhook builder in your CRM, and add the desired action at the end (either add, update or update_tags). For more information, see the webhooks documentation for your CRM.

#### Test Webhooks

If you click this button, a sample webhook payload will be sent to your site from our servers (on this site), to see if your site accepts or rejects the data.

This is a good way to test if a security plugin or firewall is blocking incoming webhooks, though it’s not an absolute indicator since it’s possible for your site to allow incoming data from https://wpfusion.com, while still blocking data from your CRM.

### Imported Users

These settings affect how WP Fusion handles passwords for newly imported users.

WP Fusion can import users via a webhook, via the built in import tool, or via a ThriveCart success URL.

#### Return Password

When a new user is imported, a random 8 character password is generated for them. Check this box to sync this automatically generated password back to a custom field in your CRM (specified by Return Password Field).

The password will only be synced to your CRM after it has been generated by WP Fusion, future changes to users’ passwords will not be synced.

This is an easy and pretty secure way to send out a welcome email from your CRM containing the login details for a new user on your site.

#### Username Format

By default WP Fusion will set the username for all newly imported users to the contact’s email address.

You may not want the username to be the email address if you’re using a plugin (such as BuddyPress) which shows usernames on the frontend of the site. In that case you can change the default behavior.

The three options are:

- Email Address: Usernames will be set to the contact’s emails address
- FirstnameLastname: Usernames will be a combination of the contact’s first name and last name (i.e. JaneDoe)
- Firstname12345: Usernames will be the contact’s first name, followed by a 5 digit random number (i.e. Jane36808)

For more control over how the usernames are generated, see the wpf_import_user filter.

---

## Installation Guide

**Source:** [https://wpfusion.com/documentation/getting-started/installation-guide/](https://wpfusion.com/documentation/getting-started/installation-guide/)

### General Info

Navigate to Plugins » Add New in your WordPress dashboard and upload the .zip file you received when you purchased WP Fusion.

After you’ve uploaded WP Fusion and activated the plugin, go to Settings » WP Fusion to activate your WP Fusion license key, select your desired CRM, and follow the instructions to configure the initial connection.

Once you click Connect, WP Fusion will validate your API credentials and then load some data from your CRM like your available tags and custom fields.

**Remember:**make sure to activate your license key. A valid license key is required to receive automatic updates, and ensures that your copy of WP Fusion will always be compatible with the latest versions of WordPress and your CRM’s API.
Once that’s finished you can save the settings, and the rest of the WP Fusion options will appear. Proceed to General Settings and Basic Setup for more info.

### Resynchronize Available Tags and Fields

If you later add new tags or fields in your CRM, you can always go back to the Setup tab and click the blue Refresh Available Tags & Fields button to load the latest tags and fields into the dropdowns in WordPress.

This will also update the values for any other dropdowns in WP Fusion’s settings, depending on your connected CRM. For example available products, pipelines, deal stages, owners, and contact layouts.

All data that’s not tied to a specific contact record can be refreshed by clicking Refresh Available Tags and Fields.

### Initial User Sync

After you’ve connected WP Fusion to your CRM and saved the settings page, WP Fusion will go through the users on your site and attempt to match them with contact records in your CRM.

A status bar will appear at the top of the page showing this progress. If a match is found the contact’s ID and tags will be loaded and cached in WordPress for future use.

No data will be sent to your CRM during this process and no user data will be modified.

### CRM Specific Setup Guides

- ActiveCampaign Installation Guide
- AgileCRM Installation Guide
- Bento Installation Guide
- BirdSend Installation Guide
- Brevo Installation Guide
- Capsule Installation Guide
- Constant Contact Installation Guide
- ConvesioConvert Installation Guide
- ConvertKit (aka Kit) Installation Guide
- Customer.io Installation Guide
- Drift Installation Guide
- Drip Installation Guide
- Dynamics 365 Installation Guide
- Encharge Installation Guide
- EngageBay Installation Guide
- EmailOctopus Installation Guide
- FluentCRM Installation Guide
- FluentCRM (REST API) Installation Guide
- FunnelKit Installation Guide
- GetResponse Installation Guide
- Gist Installation Guide
- Groundhogg Installation Guide
- Groundhogg (REST API) Installation Guide
- HubSpot Installation Guide
- HighLevel Installation Guide
- Infusionsoft / Keap Installation Guide
- Intercom Installation Guide
- Kartra Installation Guide
- Klaviyo Installation Guide
- KlickTipp Installation Guide
- MailerLite Installation Guide
- Mailchimp Installation Guide
- MailPoet Installation Guide
- Mautic Installation Guide
- MooSend Installation Guide
- NationBuilder Installation Guide
- Omnisend Installation Guide
- Ontraport Installation Guide
- Ortto Installation Guide
- Pipedrive Installation Guide
- PulseTechnologyCRM Installation Guide
- Salesflare Installation Guide
- Salesforce Installation Guide
- Sender.net Installation Guide
- Sendlane Installation Guide
- Sendlane Installation Guide
- User.com Installation Guide
- Zoho Installation Guide

---

