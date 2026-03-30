# Tutorials

*Category from WP Fusion documentation*

---

## Double Opt-Ins

**Source:** [https://wpfusion.com/documentation/tutorials/double-opt-ins/](https://wpfusion.com/documentation/tutorials/double-opt-ins/)

### Overview

Using [double opt-in](https://blog.hubspot.com/marketing/double-opt-in) is a great way to make sure only confirmed, high-quality leads sign up to your mailing list. It can also improve your sender reputation by reducing bounce rates and spam complaints.

Each CRM that WP Fusion [supports](https://wpfusion.com/documentation/faq/crm-compatibility-table/) handles double opt-ins in a different way. Here’s how to make use of the features in WP Fusion, as well as the features unique to each CRM.

### Opt-in management in WP Fusion’s plugin integrations

WP Fusion includes features across our various [plugin integrations](https://wpfusion.com/documentation/#integrations) that help to manage opt-ins, marketing consent, and email address verification.

#### Marketing consent checkboxes

With [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#email-optins), [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#email-optins), and [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#email-optins),  WP Fusion includes an option to add a marketing consent checkbox to the checkout fields.

![](https://wpfusion.com/wp-content/uploads/2016/01/woo-email-optin-1024x615.jpg)With WooCommerce, WP Fusion includes the option to add an email marketing opt-in checkbox to the checkout form.
In the settings, you can configure the label text, default checkbox state, and tags to apply when the optin checkbox is checked.

![](https://wpfusion.com/wp-content/uploads/2016/01/woo-email-optin-settings-1-1024x451.jpg)

Even in platforms without a dedicated double opt-in flow, you can use this tag or list to segment your subscribers based on whether or not they have consented to receive marketing.

#### Defer until activation

With BuddyPress / BuddyBoss, Ultimate Member, User Meta, WP Members, and WP User Manager, WP Fusion includes a feature called **Defer Until Activation**.

![](https://wpfusion.com/wp-content/uploads/2016/06/bp-defer-1024x349.jpg)

When this is checked, **no data will be sent to your CRM** until the member’s account is activated— either by clicking a confirmation link in an email, or manually by an admin.

This is a great way to make sure only valid email addresses are synced to your CRM.

### Opt-in management with WP Fusion’s CRM integrations

The features WP Fusion offers for opt-in management also depend on the capabilities of the connected CRM or email marketing platform. The platforms we support are:

#### ActiveCampaign

ActiveCampaign’s marketing consent is [based on your lists](https://help.activecampaign.com/hc/en-us/articles/115000853310-Double-opt-in-vs-single-opt-in). When a contact signs up to a list, they can be [sent a double-opt-in email](https://help.activecampaign.com/hc/en-us/articles/115000853310-Double-opt-in-vs-single-opt-in) to confirm their subscription. When a contact clicks Unsubscribe in a campaign email, [they will be unsubscribed](https://www.activecampaign.com/learn/guides/managing-unsubscribes) from the list that email was sent to.

WP Fusion allows you to subscribe new contacts to one or more lists when they register an account in WordPress, or submit a form. You can also add contacts to lists in ActiveCampaign [using automations](https://help.activecampaign.com/hc/en-us/articles/218788687-Create-a-marketing-automation-from-scratch-in-ActiveCampaign) that are triggered by tags or custom field updates.

By default, **WP Fusion will not re-subscribe a contact to a list they had previously unsubscribed from**.

If you want to re-subscribe unsubscribed contacts, you can select the list name containing “*(resubscribe)”* in the Select List(s) dropdowns.

![](https://wpfusion.com/wp-content/uploads/2024/01/gravity-forms-activecampaign-assign-lists-resubscribe-1024x503.jpg)WP Fusion’s [Gravity Form integration](https://wpfusion.com/documentation/lead-generation/gravity-forms/) allows you to re-subscribe ActiveCampaign contacts to marketing lists.
This will add the contact back to the list and make them eligible for marketing emails again.

Applying lists during form submissions (and resubscribing contacts to lists) is currently supported with:

- [Elementor Forms](https://wpfusion.com/documentation/lead-generation/elementor-forms/)
- [Fluent Forms](https://wpfusion.com/documentation/lead-generation/fluent-forms/)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/)

![WP Fusion's assign list setting for ActiveCampaign](https://wpfusion.com/wp-content/uploads/2024/01/ac-general-settings-list-resubscribe-1024x616.jpg)By selecting a *resubscribe* list in the WP Fusion general settings, existing contacts will be subscribed and resubscribed to the selected lists when they register a new account in WordPress.
You will see the contact’s list status update in ActiveCampaign to “Subscribed”, and the source will show as *via API*.

![](https://wpfusion.com/wp-content/uploads/2024/01/ac-list-resubscribe-1024x532.jpg)Contacts resubscribed by WP Fusion show their subscription source as *via API*.
**Please use with caution:** The form should make it clear that it will re-subscribe the contact to marketing.

Just purchasing a product from you or signing up for a course is not a guarantee that the person wants to receive marketing emails again after unsubscribing. This could lead to your messages getting reported as spam, and damage the sending reputation of your ActiveCampaign account.

#### Brevo

The simplest method to use double opt-in with Brevo is to use the “[automation method](https://help.brevo.com/hc/en-us/articles/211244629).” Essentially, each new subscriber gets added to a Pending or Unconfirmed list. You then use an automation to send them an opt-in confirmation email, and only move them to your main list once they have confirmed their subscription.

This is compatible with all of WP Fusion’s features and integrations.

**For more advanced control you can also use a custom double opt-in template**, connected to a Brevo form. For more information, [see this tutorial](https://help.brevo.com/hc/en-us/articles/360019540880-Create-a-double-opt-in-DOI-confirmation-template-for-Brevo-form).

Once you’ve created your opt-in template and linked it to your form, click *Refresh Available Lists and Fields* in the WP Fusion settings to load the new templates. Then, from the General settings tab, select your opt-in template from the **Double Opt-in Template**dropdown.

![](https://wpfusion.com/wp-content/uploads/2024/01/brevo-double-opt-in-1024x276.jpg)

To use a custom double opt-in template, you will need to enter a redirect URL to take the subscriber after they’ve confirmed their subscription, as well as at least one list to use for all confirmed subscribers.

![](https://wpfusion.com/wp-content/uploads/2024/01/brevo-email-confirmation-1024x562.jpg)Brevo allows you to create a custom template for double opt-in emails.
When WP Fusion creates the new subscriber, they will be added to Brevo in a pending state (they won’t appear under the All Contacts list). The subscriber will receive a confirmation email to verify their address. Once they click the link in the email, they will be redirected back to the **Redirect URL** and they will be added to the selected lists in Brevo.

**Note:** Because the new subscriber is pending in Brevo, it is not possible to assign any lists to them other than the lists selected in the **Opt-in List(s)** setting.

For this reason it’s recommended not to use a custom opt-in template with ecommerce or membership site purchases, since you won’t be able to segment customers based on their products or membership plan.

#### MailerLite

You can configure WP Fusion’s default status for new MailerLite subscribers at Settings » WP Fusion » General » Default Optin Status.

![](https://wpfusion.com/wp-content/uploads/2022/12/mailerlite-default-optin-status-1024x385.jpg)

The options are:

- **Default:**WP Fusion will not specify an opt-in status for new subscribers. This means subscribers will follow the status you’ve configured in MailerLite— either active (by default), or unconfirmed if you’ve enabled [Double opt-in for API and integrations](https://www.mailerlite.com/help/how-to-use-double-opt-in-when-collecting-subscribers#new/enable-double-opt-in-for-api).
- **Active:**All subscribers created by WP Fusion will be set to active.
- **Unconfirmed:**All subscribers created by WP Fusion will be set to unconfirmed, and a double opt-in email will be sent.
- **Unsubscribed:**All subscribers created by WP Fusion will be set to unsubscribed. You can still use groups to [grant access to content](https://wpfusion.com/documentation/getting-started/access-control/) in WordPress, but you will not be able to send emails to the subscribers, and they will not count towards your plan limit.

For more information, see [MailerLite double opt-ins](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/).

#### Drip

Drip doesn’t have any configurable options for double opt-in emails. However, **you can manage a subscriber’s marketing status via WP Fusion, using the Status field**.

You can update the Status field via [the Contact Fields panel](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings, or via any of WP Fusion’s [form integrations](https://wpfusion.com/documentation/#lead-generation).

Syncing a value of of 
```
active
```

 will subscribe the person to marketing. Syncing a value of 
```
unsubscribed
```

 will unsubscribe the person.

For more information, see [Inactive / Unsubscribed People in Drip](https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/).

#### FluentCRM

With FluentCRM (same site and REST API), opt-in status is managed via the Status field. There are two options, 
```
pending
```

 and 
```
subscribed
```

.

In the General tab of the WP Fusion settings, you can set the default status for all new contacts.

![](https://wpfusion.com/wp-content/uploads/2024/01/fluentcrm-optin-settings-1024x387.jpg)

If the status is set to Subscribed, the contact will be marked as confirmed in FluentCRM and can receive marketing emails immediately. If the status is set to Pending, the subscriber will receive a double opt-in confirmation email based on your [FluentCRM settings](https://fluentcrm.com/docs/global-double-opt-in-settings/).

The default status can be overridden by syncing a value to the Status field. For example you could set the default status for the site to Subscribed, but create an opt-in form [in Elementor](https://wpfusion.com/documentation/lead-generation/elementor-forms/) with a hidden field set to 
```
pending
```

. If you map this field with the Status field in FluentCRM, it will send an opt-in confirmation email to anyone who submits that specific form.

#### Groundhogg

With Groundhogg (same site and REST API), you can set a default opt-in status for new contacts from the General tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2024/01/fluentcrm-optin-settings-1-1024x387.jpg)

This can also be overridden on a per-form basis by syncing to the Optin Status field. Groundhogg uses numeric IDs to update a contact’s status, so to update the status by syncing a hidden field, you will need to sync the correct ID. Those IDs are:

- Unconfirmed: 
```
1
```
- Confirmed: 
```
2
```
- Unsubscribed: 
```
3
```
- Weekly: 
```
4
```
- Monthly: 
```
5
```

#### Infusionsoft / Keap

With Infusionsoft and Keap opt-ins are automatic, there are no configurable options.

When a new contact is added by WP Fusion, they will be opted in and set to “Unconfirmed” (i.e. [single opt-in](https://help.keap.com/help/email-status-explained)). If an existing contact registers an account via WP Fusion, and their status is “non-marketable”, their optin status will be updated to “Unconfirmed”, so they can receive marketing emails.

You can set contacts to “Confirmed” by [creating an email confirmation sequence](https://help.keap.com/help/email-confirmation-sequence).

Note: if a contact has previously unsubscribed from marketing (“Unsubscribed”) WP Fusion will not be able to update their status again. You can send individual emails to these email addresses, but cannot send any broadcast, or emails within a sequence to them.

For more information see [Email statuses explained](https://help.keap.com/help/email-status-explained).

#### Klaviyo

By default WP Fusion adds subscribers to Klaviyo lists with the 
```
NEVER_SUBSCRIBED
```

 status. This means subscribers can receive emails, but they will not show as confirmed for marketing.

You can choose to add subscribers to specific lists with marketing consent by selecting the alternate *(opt-in to marketing)*list name in the WP Fusion Select Lists dropdown.

![](https://wpfusion.com/wp-content/uploads/2024/02/klaviyo-marketing-consent-lists-1024x596.jpg)

In this case the subscriber will be added to the list as 
```
SUBSCRIBED
```

. The current timestamp will be used as the date of consent, and the marketing consent source will be recorded as 
```
WP Fusion
```

.

For more information on Klaviyo list statuses see [Klaviyo marketing consent](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/).

#### Klick-Tipp

With Klick-Tipp, you can select a **Double Opt-in Process** from the General tab in the WP Fusion settings.

If you’ve just created a new process, click *Refresh Available Tags and Fields* at the top of the page to update the options in the dropdowns.

#### Mailchimp

With Mailchimp, you can select **Double Optin** from the WP Fusion General settings to automatically send a confirmation email to anyone who is added to your audience.

![](https://wpfusion.com/wp-content/uploads/2024/01/mailchimp-double-opt-in-1024x369.jpg)

---

## Batch Operations / Exporting Data

**Source:** [https://wpfusion.com/documentation/tutorials/batch-operations/](https://wpfusion.com/documentation/tutorials/batch-operations/)

### Overview

WP Fusion includes a series of tools that let you export data in bulk to your CRM. These are found under Settings » WP Fusion » Advanced » Batch Operations.

![](https://wpfusion.com/wp-content/uploads/2020/02/batch-operations-1024x569.jpg)

The options available will depend on which plugins you have active. For each operation you can hover over the tooltip indicator to get a description of what data will be synced or modified.

**Note:** These operations can potentially modify thousands of records in both WordPress and your CRM, and they are irreversible. It’s always recommended to test with a single record before running a batch operation— for example doing a test checkout before exporting orders, or a test registration before exporting users.

### When to use a batch operation

Just because WP Fusion can export a large amount of data to your CRM doesn’t mean it’s always the best tool for the job. WP Fusion needs to respect the API limits of your connected CRM, as well as the resource limits of your server.

For example, to run a **Push User Meta** batch operation to sync 30,000 users’ metadata with Ontraport **would take about 28 hours to process.**

As an alternative, you could use a plugin like [WP All Export](https://wordpress.org/plugins/wp-all-export/) to export all of your user data to a .csv, and upload it into the CRM in only a few minutes.

The batch operations are best for syncing data that can’t be easily exported any other way, for example [applying tags based on MemberPress subscription statuses](https://wpfusion.com/documentation/membership/memberpress/#batch-operations), or [exporting WooCommerce orders](https://wpfusion.com/documentation/ecommerce/woocommerce/#syncing-historical-orders).

### Usage

To run a batch operation, select the operation you’d like to perform from the list of radio buttons and then click **Create Background Task**. A status indicator will appear at the top of the page showing the number of records to be processed and the number remaining.

![](https://wpfusion.com/wp-content/uploads/2020/02/batch-operations-2-1024x347.jpg)

Some notes:

- You can leave the page while the background worker runs and it will continue to process the queue in the background.
- If the background process gets stuck you can refresh the page and it will pick up where it left off.
- It’s recommended to turn on the [activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) so you can see what data is being sent or loaded, as well as any potential errors.

**Note on speed:** Most CRMs have some kind of API limits with regards to the number of API calls you can make in a period of time. WP Fusion pauses in between each step in the background process to avoid exceeding these API limits. How long the pause is depends on your connected CRM.

Depending on the number of records you are processing, this can cause the background worker to take several hours (or even days) to complete. For example exporting 30,000 WooCommerce orders to Drip would take about 18 hours to fully process.

#### Skip already processed

In some cases, you may be asked whether you’d like to **Skip already processed** records.

![](https://wpfusion.com/wp-content/uploads/2020/02/batch-ops-skip-processed-1024x631.jpg)By default the batch exporter will not export the same order to your CRM twice.
By default, WP Fusion will not export an order, payment, or form entry to your CRM if it’s already been successfully exported. This is to prevent creating duplicate records.

If you want to go ahead and create duplicate records anyway (for example after switching CRMs or accounts), you can uncheck the **Skip already processed** box before clicking the start button. This will cause WP Fusion to export all orders, regardless of whether or not they were synced previously.

### Core methods

These operations are part of WP Fusion core and aren’t tied to any particular plugin integration. They are:

#### Resync Contact IDs

Looks up every WordPress user by email address in your CRM, and updates their cached contact ID. This does not modify any tags or other data, or trigger automated enrollments.

**When to use it:**If the cached contact IDs for your WordPress users have gotten out of sync with the contact records in your CRM, this will update that cache, so profile updates and new tags get applied to the correct contact record.

This operation is sometimes preferable to **Resync Contact IDs and Tags** because if you’re using linked tags / auto-enrollment tags into courses or membership levels, you may not want to modify any tags until you’ve confirmed that every user is linked to the correct contact record.

#### Resync Tags

Loads updated tags from your CRM for all WordPress users who already have a saved contact ID. This also triggers any automated enrollments via linked tags.

**When to use it:**If you’ve modified a lot of tags on a lot of contacts in your CRM (or deleted tags), this operation will bring the tags cached in WordPress for your users up to date with what’s in your CRM. This operation is faster than *Resync Contact IDs and Tags* because it doesn’t need to first confirm the contact’s email address.

Also, if you’ve recently changed an auto-enrollment tag on a course or membership (for example [with a LearnDash course](https://wpfusion.com/documentation/learning-management/learndash/#auto-course-enrollment)), you may want to update your users automated enrollments based on their current CRM tags. Running the *Resync Tags*operation will trigger any automated enrollments (and un-enrollments) when the tags are loaded from your CRM.

#### Resync Contact IDs and Tags

All WordPress users will have their contact IDs checked / updated based on email address and tags will be loaded from their CRM contact record. This also triggers any automated enrollments via linked tags.

This operation is the same as running **Resync Contact IDs** and **Resync Tags**, it just does both at the same time.

**When to use it:**When a user registers in WordPress, WP Fusion stores their CRM contact ID on your site so that future updates can properly be synced. But if you manually merge a bunch of contacts (for example to remove duplicates), it’s possible that these IDs will no longer be accurate. Running a *Resync Contact IDs and Tags* operation ensures WP Fusion has all of your WordPress users linked to the correct contact record and has the latest copy of their tags.

#### Export Users

This operation queries any WordPress users who do not have a saved CRM contact ID. For each user, WP Fusion will first look for an existing contact record by email address. If one is found, their contact ID will be saved and tags will be loaded.

If no existing record is found, a new record will be created. Any fields configured on the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) will be synced. Any tags specified for **Assign Tags** [on the General settings tab](https://wpfusion.com/documentation/getting-started/basic-setup/#assign-tags) will be applied.

**When to use it:**If you’re just setting up WP Fusion for the first time, you may have WordPress users that aren’t already in your CRM or marketing automation tool. This tool lets you export those users.

#### Apply registration tags

On [the General tab](https://wpfusion.com/documentation/getting-started/general-settings/) in the WP Fusion settings, there’s an **Assign Tags** option that lets you specify tags to be applied in your CRM when a user registers a new WordPress user account.

![](https://wpfusion.com/wp-content/uploads/2020/02/assign-tags-1024x538.jpg)

These tags are only applied to *new user registrations*, but if you want to retroactively apply the same tags to every user already registered on the site, you can run the **Apply registration tags** operation.

**When to use it:**This operation is useful if you’re trying to reconcile the counts between users on your site and contact records in your CRM. By applying the same tag to every user on your site, you can easily see how many records are missing from your CRM.

#### Push User Meta

All WordPress users with a contact record will have their meta data pushed to your CRM, overriding any data on the contact record with the values from WordPress. Any fields enabled on the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) will be synced.

**When to use it:**This is most commonly used when you’ve just enabled a new field for sync (for example User ID, or Date Registered), and need to export the values from that field to existing contact records in your CRM.

#### Pull User Meta

All WordPress users with a contact record will have their meta data loaded from your CRM, overriding any data in their user record with the values from their contact record. Any fields enabled on the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) will be loaded.

**When to use it:**This operation would be used when you’ve just enabled a new WordPress field for sync with a custom field in your CRM that already contained data. This operation will load that custom field data into WordPress so it can then be [displayed with a shortcode](https://wpfusion.com/documentation/getting-started/shortcodes/) or used by other plugins.

### Troubleshooting

The background worker is a complex process. It’s designed to work across all hosting environments, without affecting the speed or stability of your site.

While it’s generally very reliable, we have encountered issues with both caching and security plugins. The most common issue is that it will process a single batch of records (20 or so) and then not proceed to the next batch until the page is reloaded.

To aid in troubleshooting the background worker, WP Fusion does a status check on it every 5 seconds, and outputs some status information to the JavaScript console in your browser.

![](https://wpfusion.com/wp-content/uploads/2020/02/batch-troubleshooting-1024x525.jpg)

This will output the total list of items in the queue, as well as information about the state of the process in terms of previous action, next action, and resource utilization.

Some things to note are:

- Most servers have a 
```
max_execution_time
```

 of 30 seconds for PHP scripts. To get around this, the background worker will attempt to restart itself when the 
```
total_time
```

 value exceeds 20 (seconds). However, if the 
```
time_last_step
```

 value is greater than 10 (seconds), this could mean that the 30 second 
```
max_execution_time
```

 gets exceeded and the process times out.This most commonly happens on slower hosts when exporting WooCommerce orders, using the [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/). The process of creating a contact record, applying tags, creating products, registering an invoice, and adding the products to the invoice can take a long time for each order. You can speed up this process by first running an *Export Users* operation before exporting your orders. Since the contact records will already exist in your CRM, this reduces the time required to process each order.
- WP Fusion tries to detect the available memory on your host and won’t let the background worker exceed 80% of available memory. However sometimes it’s not able to properly detect the available memory, and so 
```
memory_percent
```

 shows at 100% and the process prevents itself from running. You can disable this check by returning 
```
false
```

 from the 
```
wpf_batch_memory_exceeded
```

 filter.
- Because WP Fusion makes sustained requests to admin-ajax.php over a long period of time, it can sometimes get blocked by security plugins. If you notice the batch status isn’t updating, it’s possible the background request is getting blocked. To see if that’s happening you can check your site’s access logs for any traffic to 
```
/wp-admin/admin-ajax.php?action=wpf_background_process
```

 is being blocked with a 403 (Unauthorized) status. If you’re using WordFence you can also put the plugin into Learning Mode before starting the batch operation to train it to allow this kind of traffic.

#### Rate limiting

Most CRMs have some sort of API rate limiting. For example

- ActiveCampaign: 5 requests per second
- Drip: 3600 requests per hour
- Infusionsoft: 1500 requests per minute
- Ontraport: 3 requests per second
- Zoho: [15000 requests per day](https://www.zoho.com/crm/developer/docs/api/v2/api-limits.html)

During batch operations it’s possible to hit these limits, after which you’ll begin to see error messages in the [WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/).

Because most CRMs reset their rate limiting every 60 seconds, WP Fusion *does not* cancel a batch operation when it it’s a rate-limiting error, it will continue to try to export data, and record errors as applicable.

With CRMs that have lower rate limits (such as Drip), WP Fusion artificially slows down any batch operations to avoid hitting any API limits. That is achieved using the 
```
wpf_batch_sleep_time
```

 filter. Returning a number from that filter causes WP Fusion to 
```
sleep()
```

 for the specified number of seconds before moving on to the next task.

For example, to add a one second pause between each batch step:

```
add_filter( 'wpf_batch_sleep_time', function() {
	return 1;
});
```

#### Changing the timeout limit

By default the batch operations will run for up to 20 seconds per cycle, before stopping and starting a new process.

If you’re still getting timeout errors, you can shorten this using the 
```
wpf_batch_default_time_limit
```

 filter.

```
add_filter( 'wpf_batch_default_time_limit', function() {
	return 15;
});
```

#### Modifying the initial query

In some cases, a corrupted order, deleted user, deleted product, or other unexpected data may be crashing the batch worker before it can start.

You can modify the initial query using the 
```
pre_get_posts
```

 or 
```
pre_get_users
```

 filters (depending on whether the query is for posts or users).

```
function limit_wpf_batch_size_posts( $query ) {

	if ( doing_action( 'wp_ajax_wpf_batch_init' ) ) {

		$query->set( 'posts_per_page', 100 );
		$query->set( 'paged', 1 );

	}

}

add_filter( 'pre_get_posts', 'limit_wpf_batch_size_posts' );
```

This example limits the initial query to 100 posts, and returns the first page of results (rather than trying to query all posts at the same time).

```
function limit_wpf_batch_size_users( $query ) {

	if ( doing_action( 'wp_ajax_wpf_batch_init' ) ) {

		$query->set( 'number', 100 );
		$query->set( 'paged', 1 );
		$query->set( 'orderby', 'registered' );
		$query->set( 'order', 'DESC' );

	}

}

add_filter( 'pre_get_users', 'limit_wpf_batch_size_users' );
```

This example limits the [WP_User_Query](https://developer.wordpress.org/reference/classes/wp_user_query/) to the 100 most recently registered users.

#### Cancelling

Generally, you can click the Cancel button on the batch operation status bar to cancel the current operation. The operation will be terminated at the end of the current cycle (usually within about 20 seconds)

In some situations, for example if the exporter has timed out, it may not be possible to cancel the background worker by clicking the button. In that case you can append 
```
&wpf-cancel-batch
```

 to the WP Fusion settings page URL to force-clear the queue from the database.

For example 
```
https://mysite.com/wp-admin/options-general.php?page=wpf-settings&wpf-cancel-batch
```

. You will see a status message showing the batch IDs that were deleted.

#### Custom batch operations

For additional developer docs and examples, see the article on [Registering Custom Batch Operations](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/).

#### Running batch operations on a schedule

For information on scheduling batch operations, see [Scheduled Synchronization Using Cron](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/).

---

## ThriveCart

**Source:** [https://wpfusion.com/documentation/tutorials/thrivecart/](https://wpfusion.com/documentation/tutorials/thrivecart/)

### Overview

Using WP Fusion with ThriveCart you can create a success URL pointed at your site that will create a new WordPress user and log them in so they can access their purchased content.

**Heads up!** This is an advanced feature. It is one of the more difficult things to set up with WP Fusion. It often requires extra configuration time and doesn’t work reliably on all hosts. If you’re not comfortable debugging webhooks and running multiple tests, then consider selling your products with [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/).

#### Setup

First enable the setting for **ThriveCart Auto Login** from the Advanced settings tab in WP Fusion.

![](https://wpfusion.com/wp-content/uploads/2019/05/thrivecart-1-1024x90.jpg)

Then in ThriveCart on the Fulfillment tab for your product, choose **Send them to a URL** for the *What should happen after purchase?* setting.

![](https://wpfusion.com/wp-content/uploads/2019/05/thrivecart-2-1024x638.jpg)

An example URL will look like 
```
https://mysite.com/?wpf_action=thrivecart&access_key=KEY&apply_tags=Membership%20Tag
```

.

There are a few parts to this

- ```
https://mysite.com
```

: This is the URL to your website. It can be the home page or any other page on your site.
- ```
?wpf_action=thrivecart
```

: This tells WP Fusion to receive the data from ThriveCart, create a new user, and log them in.
- ```
&access_key=
```

: This is the access key from the bottom of the General settings tab in WP Fusion.
- ```
&apply_tags=
```

: Here you can optionally specify tags to be applied for the new user, for example to unlock content or trigger an automated enrollment.
- You can use either tag IDs or tag names, separated by commas. The tags must be URL encoded. You can use [urlencoder.org](https://urlencoder.org) to encode your tags. For example 
```
&apply_tags=Tag%20One%2CTag%20Two
```

For more information on how to use success URLs in ThriveCart, [see this article](https://support.thrivecart.com/help/your-thank-you-success-page/).

#### How it works

When a customer checks out they’ll click the access link to be taken to your site. When WP Fusion detects the ThriveCart link it will create a new user based on the details provided at checkout.

![](https://wpfusion.com/wp-content/uploads/2019/05/thrivecart-access-link-1024x726.jpg)The customer must click the **Click Here to Access** link after checkout, or else no data will be synced.
The new user will be added to your active CRM, and any tags you’ve specified will be applied.

The new user will automatically be logged in and able to access their purchased content.

If a user already exists with the same email then the new tags will be applied and the existing user will be logged in.

**Note:** No data is sent to your site until the customer clicks the access link on the order confirmed page. If the customer doesn’t click the link, they won’t receive a new user account. For that reason it’s recommended to also connect ThriveCart to your CRM [via a behavior rule](https://support.thrivecart.com/help/connecting-an-autoresponder/), and [use a webhook](https://wpfusion.com/documentation/#webhooks) to ensure a user account is always created.

#### Passwords

A random password will be generated for the new user.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

If you’ve enabled the setting for **Return Password** from the WP Fusion settings then this password will be sent back to the specified custom field in your CRM.

You can then send the user a welcome email containing their password.

#### Welcome email

For the best deliverability it’s recommended to send the welcome email containing the new user’s password from your CRM. However if you would prefer WordPress to send the welcome email, you can append 
```
&send_notification=true
```

 to your success URL.

WordPress will then send out the default welcome email inviting the new user to set their password.

#### Cancelations

ThriveCart does not communicate subscription cancelations or payment failures to WP Fusion. To remove a tag when someone cancels, you will need to [connect ThriveCart to your CRM using a behavior rule](https://support.thrivecart.com/help/adding-customers-to-your-autoresponder/).

#### Troubleshooting

The first step in troubleshooting the ThriveCart user creation is to enable the WP Fusion [activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/). When a customer lands on the success URL, the logs will show the data that’s received from ThriveCart.

![](https://wpfusion.com/wp-content/uploads/2019/05/thrivecart-logs-1024x497.jpg)

You will see a message *ThriveCart user creation triggered,* followed by the data that was loaded from ThriveCart. The logs will also show the password that was generated, and any tags that were applied.

If you’re having trouble with ThriveCart success URLs, please [contact our support](https://wpfusion.com/contact/).

#### Video – ThriveCart

---

## Switching CRMs

**Source:** [https://wpfusion.com/documentation/tutorials/switching-crms/](https://wpfusion.com/documentation/tutorials/switching-crms/)

### Overview

The time may come when you need to move from one marketing automation platform to another. Thankfully WP Fusion makes this pretty easy. Here are the steps:

### 1. Move your data

To ensure that no data gets lost in the transfer, the best way to move your contacts over is to do an export of all contacts from your old CRM and import that data into the new CRM.

Make sure that your contacts’ tags get transferred over, as WP Fusion can’t migrate contact tags between platforms.

### 2. Reset WP Fusion

Go to Settings » WP Fusion » Advanced and check the box at the bottom for *Reset Settings*.

![](https://wpfusion.com/wp-content/uploads/2019/04/reset-settings-1024x245.jpg)

It’s also recommended to check the box for *Reset All*. This will delete any WP Fusion settings configured on:

- Posts, pages, and other content (i.e. access rules)
- Memberships
- Courses
- Products
- And everywhere else in the database (currently limited to the 
```
wp_options
```

 and 
```
wp_postmeta
```

 tables)

However, if you are switching between two CRMs that support dynamic tagging (see below), you can elect not to check Reset All, and in this case the tags configured on the rest of your content will be saved and can be used with your new CRM (the only settings that will be reset are the main options page).

### 3. Connect

Select your new CRM from the dropdown, enter your API credentials, and click Test Connection. Once it’s connected save the settings.

WP Fusion will continue to work in the background on matching up your existing users with their new contact IDs in your new CRM, and loading their tags.

### 4. Update your settings

You’ll want to go through those and re-associate any WordPress fields with custom fields in your new CRM, and generally make sure everything is configured how you’d like.

If you are using any of our form integrations, like Gravity Forms, make sure you edit your form feeds to use the new custom fields as well.

The next part depends on what you’re switching from, and what you’re switching to, and has to do with whether the CRM stores tags as IDs (i.e. each tag name has a tag ID), or just as tag names.

- For example in switching from ActiveCampaign to Drip, no additional configuration is required. Your products, membership levels, and courses will all continue to use the same tags from ActiveCampaign.
- If you’re switching from a CRM with numeric tag IDs, like Infusionsoft or Ontraport, to one without, like Drip, then you will need to go through and update all of your tagging settings across all of your content. Until you do you will continue to see numeric IDs applied as tags instead of the new tag names. To troubleshoot any mystery tags being applied we recommend turning on WP Fusion’s [activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/).
- If you’re switching between CRMs with numeric tag IDs, like from Infusionsoft to Ontraport, you will also need to update all your tagging settings.

If you’re unsure if your CRM uses tag IDs, you can inspect the HTML of the 
```
<select>
```

 element next to any of the tag dropdowns, and check the 
```
value=
```

 parameter.

![](https://wpfusion.com/wp-content/uploads/2019/04/crm-with-text-tags-1024x565.jpg)Encharge does not use IDs for tags, and so saved tags will copy over when switching to another CRM that also stores tags as text.
![](https://wpfusion.com/wp-content/uploads/2019/04/crm-with-id-tags-1024x591.jpg)Infusionsoft uses internal IDs for tags, and so saved tags will not copy over when connecting to another CRM.
Switching between any two platforms that use text tag names does not require any additional reconfiguring of your products or access rules— all of your tags will copy over automatically (as long as *Reset All* isn’t selected when doing the reset).

![](https://wpfusion.com/wp-content/uploads/2019/04/error-unknown-tags-1024x450.jpg)Switching between CRMs with incompatible tag types will show a warning message on the *Select tags* dropdown, to help pinpoint any settings that still need to be copied over.
If you are switching between CRMs with tag IDs, like Infusionsoft or HubSpot, then you will need to update your settings to use the new tags. If unknown tags are saved to a setting, the dropdown will be highlighted in red and the data from the database will be displayed in a banner beneath to help in debugging.

#### Switching to a self-hosted CRM

If you are switching from a cloud to a self-hosted CRM like [Groundhogg](https://wpfusion.com/documentation/installation-guides/how-to-connect-groundhogg-to-wordpress/), [FluentCRM](https://wpfusion.com/documentation/installation-guides/how-to-connect-fluentcrm-to-wordpress/), [FunnelKit](https://wpfusion.com/documentation/installation-guides/how-to-connect-funnelkit-to-wordpress/), or [Mautic](https://wpfusion.com/documentation/installation-guides/how-to-connect-mautic-to-wordpress/), you have some extra flexibility when moving your tags and access rules, since you have access to the database.

![](https://wpfusion.com/wp-content/uploads/2019/04/fcrm-tags-1024x399.jpg)In this case, we’ve imported existing Infusionsoft tags directly to the 
```
wp_fc_tags
```

 database table, keeping their original IDs. Since the IDs haven’t changed, there’s nothing that needs to be updated in the WP Fusion settings.
If you can export a list of tag names and their IDs from your source CRM, you can then import these to the tags database table in the destination CRM, preserving the IDs. As long as the tag IDs stay the same, you won’t need to update any WP Fusion settings.

---

## Menu Item Visibility

**Source:** [https://wpfusion.com/documentation/tutorials/menu-item-visibility/](https://wpfusion.com/documentation/tutorials/menu-item-visibility/)

### Automatically Hide Restricted Items

You may want to control visibility of WordPress menu items using CRM tags, with WP Fusion.

For example:

- Only show the *Purchase History* menu item for users who have the *Customer* tag
- Only show the *Courses* menu item for users who have the *Active Membership* tag
- Only show the *My Downloads* menu item for users with the *Free Download Optin* tag

The easiest way to do this is to go to the WP Fusion settings and check the box for **Hide From Menus**.

![](https://wpfusion.com/wp-content/uploads/2018/03/hide-from-menus-1024x339.jpg)

This will automatically hide any menu items that a user doesn’t have access to, based on the [access rules](https://wpfusion.com/documentation/getting-started/access-control/) configured for that page.

We prefer hiding menu items using the **Hide From Menus** setting because there is only only place to configure the access rules, on the post / page itself. If the user doesn’t have access to the post, then it’s automatically hidden from the menu.

However, if you need to configure menu item visibility independently from the access rules from the underlying content, you can use per-item menu visibility.

### Per-Item Menu Visibility

WP Fusion also lets you control the visibility of individual menu items using a user’s CRM tags. These settings can be found in the menu editor in the WordPress admin while editing any single menu item.

![](https://wpfusion.com/wp-content/uploads/2018/03/menu-visibility.jpg)

The *Who can see this menu link?*dropdown has three options:

- **Everyone:**Everyone will be able to see this menu item (bypasses access restrictions).
- **Logged In Users:** Only logged-in users will be able to see the menu item. You can also specify any number of CRM tags that are required to see the item.
- **Logged Out Users:** The menu item will be hidden from logged-in users and only shown to guests.

#### Advanced usage

For more advanced per-item menu visibility controls, install the free [User Menus plugin](https://wordpress.org/plugins/user-menus/).

This will unlock additional options for controlling menu item visibility based on user role, as well as *Required Tags (all)* and *Required Tags (not)*.

![](https://wpfusion.com/wp-content/uploads/2018/03/user-menus-additional-settings-765x1024.jpg)Installing the [User Menus](https://wordpress.org/plugins/user-menus/) plugin unlocks additional options for menu item visibility.
You can also enable the “Required tags (all)” and “Required tags (not)” settings without installing User Menus by adding this line to your functions.php file.

```
add_filter( 'wpf_show_additional_menu_item_settings', '__return_true' );
```

#### Disabling

If the WP Fusion Menu Settings are slowing down the admin menu editor for you, you can disable that feature by un-checking the box for **Menu Item Visibility** at Settings » WP Fusion » Advanced » Interfaces and Settings.

---

## Site Tracking Scripts

**Source:** [https://wpfusion.com/documentation/tutorials/site-tracking-scripts/](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/)

### Overview

For your convenience, WP Fusion includes bundled copies of the site tracking scripts for:

- [ActiveCampaign](#activecampaign)
- [AgileCRM](#agilecrm)
- [Bento](#bento)
- [Brevo](#brevo)
- [Customer.io](#customer-io)
- [Drip](#drip)
- [Emercury](#emercury)
- [Encharge](#encharge)
- [EngageBay](#engagebay)
- [HubSpot](#hubspot)
- [Infusionsoft / Keap](#infusionsoft)
- [Intercom](#intercom)
- [MailerLite](#mailerlite)
- [Mautic](#mautic)
- and [Ontraport](#ontraport)

To enable site tracking, check the box on the main WP Fusion settings page, on the General settings tab.

![](https://wpfusion.com/wp-content/uploads/2018/01/site-tracking-setting-1024x160.jpg)

Once enabled, visitors and users will be tracked using each CRM’s tracking methods, and tracking data will appear on contact records in your CRM.

### How it works

#### ActiveCampaign

![](https://wpfusion.com/wp-content/uploads/2018/01/ac-site-tracking-1024x454.png)Site tracking data shown in the ActiveCampaign contact record.
In addition to loading the ActiveCampaign site tracking script in the footer of your site, WP Fusion will also identify any logged in users to the tracking script by email address. This also works with auto login links and [form auto login](https://wpfusion.com/documentation/tutorials/auto-login-links/#form-auto-login).

In cases where a guest (not logged-in) makes a purchase or fills out a form using a [supported form plugin](https://wpfusion.com/documentation/#lead-generation), WP Fusion will try to set a cookie 
```
wpf_guest
```

, containing the person’s email address.

When this cookie is present, the email address in the cookie will also be passed to the ActiveCampaign site tracking script. This makes it possible to start tracking a site visitor after a guest checkout or form submission, despite them not having a user account on the site,

#### AgileCRM

![](https://wpfusion.com/wp-content/uploads/2018/01/agilecrm-site-tracking-1024x488.jpg)Site tracking data shown in the AgileCRM contact record.
In addition to loading the AgileCRM site tracking script in the footer of your site, WP Fusion will also identify any logged in users to the tracking script by email address. This also works with auto login links and [form auto login](https://wpfusion.com/documentation/tutorials/auto-login-links/#form-auto-login).

#### Bento

![](https://wpfusion.com/wp-content/uploads/2018/01/bento-site-tracking-1024x536.jpg)With Bento site tracking enabled, you’ll be able to see your visitors pageviews in Bento, as well as initial landing page and geo location.
In addition to loading the [Bento](https://wpfusion.com/go/bento) site tracking script in the header of your site, WP Fusion will also identify any logged in users to the tracking script by email address.

This also works with auto login links and [form auto login](https://wpfusion.com/documentation/tutorials/auto-login-links/#form-auto-login).

#### Brevo

To enable Brevo’s site tracking, first check the box for **Site Tracking** in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2018/01/sendinblue-site-tracking-1024x231.jpg)

You will need your client key, which can be found in the [Automation settings of your Brevo account](https://automation.sendinblue.com/parameters).

![](https://wpfusion.com/wp-content/uploads/2018/01/sendinblue-client-key-1024x743.jpg)

Once enabled, WP Fusion will output the Brevo tracking code in the header of every page of your site.

If your users are logged in or otherwise identified to WP Fusion (for example via an [Auto Login Link](https://wpfusion.com/documentation/tutorials/auto-login-links/)) WP Fusion will also pass the user’s email address to the tracking script, which will associate their activity with their corresponding Brevo contact record.

![](https://wpfusion.com/wp-content/uploads/2018/01/sendinblue-site-tracking-contact-1024x533.jpg)Pageviews tracked by the tracking script can be seen in the sidebar when viewing a contact record in Brevo.
![](https://wpfusion.com/wp-content/uploads/2018/01/sendinblue-tracking-logs-1024x502.jpg)Tracking data is also recorded in [the Brevo event logs](https://automation.sendinblue.com/log/events) and can be used in automations.

#### Customer.io

To enable [Customer.io site tracking](https://customer.io/docs/sdk/web/getting-started/), check the box for **Site Tracking** on the General tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2018/01/customer-io-site-tracking-1024x149.jpg)

WP Fusion will automatically output the Customer.io site tracking scripts in the footer of every page on your site.

![](https://wpfusion.com/wp-content/uploads/2018/01/customer-io-site-tracking-history-1024x486.jpg)The user’s page views are shown on their contact record, alongside [events](https://wpfusion.com/documentation/event-tracking/customer-io-event-tracking/) and other activities.
If your users are logged in or otherwise identified to WP Fusion (for example via an [Auto Login Link](https://wpfusion.com/documentation/tutorials/auto-login-links/)) WP Fusion will also [identify the user](https://customer.io/docs/sdk/web/identify/) to the tracking script, and their site activity will be displayed on their Customer.io record.

#### Drip

To enable Drip site tracking, check the box for **Site Tracking**on the General tab in the WP Fusion settings.

WP Fusion will automatically output the [Drip tracking code](https://help.drip.com/hc/en-us/articles/4424702539789-Install-Your-JavaScript-Snippet) in the footer of every page of your site. When someone logs in, makes a purchase, or submits a form, WP Fusion will automatically [identify them](https://help.drip.com/hc/en-us/articles/4424702605453-Identified-People) to the tracking script.

![](https://wpfusion.com/wp-content/uploads/2018/01/drip-website-sessions-1024x508.jpg)Screenshot
Visits to your website will automatically show up on the [Website Sessions tab](https://help.drip.com/hc/en-us/articles/4424702617485-Website-Sessions) on the Drip subscriber record.

#### Emercury

To enable Emercury site tracking, check the box for **Site Tracking**on the General tab in the WP Fusion settings.

Note that you must be on a Pro or Scale plan with Emercury to use site tracking. If site tracking is not available for your account, WP Fusion will display an error message when you attempt to enable site tracking.

For site tracking to work you need to add your site’s domain inside the [site tracking settings](https://panel.emercury.net/#settings/tracking/) of your Emercury account. For more information on how site tracking works with Emercury, [see this guide](http://help.emercury.net/en/articles/5121464-site-event-tracking-in-emercury).

If your users are logged in or otherwise identified to WP Fusion (for example via an [Auto Login Link](https://wpfusion.com/documentation/tutorials/auto-login-links/)) WP Fusion will also pass the user’s email address to the tracking script, which will associate their activity with their corresponding Emercury contact record.

#### Encharge

To enable Encharge’s [site tracking](https://app.encharge.io/settings/site-tracking), first check the box for **Site Tracking** in the WP Fusion settings.

![WP Fusion's Encharge site tracking features](https://wpfusion.com/wp-content/uploads/2018/01/encharge-site-tracking-key-2-1024x232.jpg)

You will need your **Write Key** which can be found [in your Encharge account](https://app.encharge.io/account/info).

![Finding your Encharge site tracking Write Key](https://wpfusion.com/wp-content/uploads/2018/01/encharge-site-tracking-write-key-1024x570.jpg)Your Write Key is required for site tracking, and can be found in your Encharge account.
Once enabled, WP Fusion will output the Encharge tracking scripts in the header of every page on your site.

If your users are logged in or otherwise identified to WP Fusion (for example via an [Auto Login Link](https://wpfusion.com/documentation/tutorials/auto-login-links/) or form submission) WP Fusion will also pass the user’s email address to the tracking script, which will associate their activity with their corresponding Encharge contact record.

#### EngageBay

To enable EngageBay’s site tracking, first check the box for **Site Tracking** in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2018/01/engagebay-site-tracking-1-1024x300.jpg)

You will need your JavaScript API Key, which can be found in your EngageBay account.

![](https://wpfusion.com/wp-content/uploads/2018/01/7c3e9a89-19c8-46ca-bda7-5a3afd5e8dfd-1024x458.png)You can find your EngageBay JavaScript API key in your account under Admin Settings » API and Tracking Code
Once enabled, WP Fusion will output the EngageBay tracking code in the header of every page of your site.

If your users are logged in or otherwise identified to WP Fusion (for example via an [Auto Login Link](https://wpfusion.com/documentation/tutorials/auto-login-links/)) WP Fusion will also pass the user’s email address to the tracking script, which will associate their activity with their corresponding EngageBay contact record.

#### HubSpot

If site tracking is enabled for HubSpot, WP Fusion will load the site tracking scripts into the header of your site. WP Fusion will also identify any logged in users to the tracking script, by email address.

If a guest visitor submits a form or makes a checkout, WP Fusion will also identify the guest to the tracking script by email address, which allows the anonymous tracking data to be merged retroactively with the guest’s contact record.

![](https://wpfusion.com/wp-content/uploads/2018/01/hubspot-site-tracking-1-1024x871.jpg)Site tracking data is shown on a contact’s Activity stream in HubSpot, including pages visited and forms submitted.
![](https://wpfusion.com/wp-content/uploads/2018/01/hubspot-site-tracking-2-1024x739.jpg)The visitor’s page views are tracked and recorded up to the time of submitting the lead form.
HubSpot’s tracking scripts are a little more sophisticated than our other supported CRMs. They will automatically detect when a form is on a page, and try to sync the submitted form values to HubSpot.

![](https://wpfusion.com/wp-content/uploads/2018/01/hubspot-site-tracking-3-1024x781.jpg)Submitted forms on your website are automatically displayed on the contact’s Activity stream.
This generally works quite well, but can sometimes cause problems. For example the WooCommerce “Billing Email” can get synced to HubSpot and overwrite the customer’s account email. To improve the reliability of tracking, WP Fusion will automatically disable the site tracking scripts on the WooCommerce “My Account” page.

However this is not a 100% reliable solution to the problem, as the HubSpot script is always watching all inputs on your site to attempt to detect a profile form and/or email address change.

![](https://wpfusion.com/wp-content/uploads/2018/01/non-hubspot-forms-1024x514.jpg)HubSpot’s **Support for Non-HubSpot Forms** feature can sometimes cause unexpected email address changes for contacts. If you experience issues with unexpected data in HubSpot, you can disable this feature in the HubSpot marketing settings.
If you encounter unexpected property changes in HubSpot, you disable **Support for Non-HubSpot Forms** in your HubSpot account settings, under Settings » Tools » Marketing » Forms.

**Note:** If you’re using the [HubSpot for WordPress plugin](https://wordpress.org/plugins/leadin/), then the tracking scripts are already loaded on your site. In that case you should keep site tracking disabled in WP Fusion.

#### Infusionsoft

![](https://wpfusion.com/wp-content/uploads/2018/01/infusionsoft-CRM-lead-activity-tracking.png)Site tracking data shown in the Web Profile tab for an Infusionsoft contact.

#### Intercom

To enable Intercom’s site tracking, first check the box for **Site Tracking** in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2018/01/intercom-site-tracking-1024x243.jpg)

Once enabled, WP Fusion will output the Intercom tracking code in the footer of every page of your site.

If your users are logged in or otherwise identified to WP Fusion (for example via submitting a form, or visiting an [Auto Login Link](https://wpfusion.com/documentation/tutorials/auto-login-links/)) WP Fusion will also pass the user’s email address to the tracking script, which will associate their activity with their corresponding Intercom contact record.

![](https://wpfusion.com/wp-content/uploads/2018/01/intercom-site-tracking-2-1024x828.jpg)Tracked page views appear on the contact record in Intercom

#### MailerLite

You can enable MailerLite site tracking by checking the box on the General tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2018/01/mailerlite-site-tracking-1024x401.jpg)

When the setting is enabled, the [MailerLite tracking script](https://developers.mailerlite.com/guides/ecommerce.html#e-commerce-campaign-tracking) will be loaded into the header of every page on your site.

The MailerLite tracking script is necessary for tracking ecommerce performance from email campaigns with the [Enhanced Ecommerce Addon for MailerLite](https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/).

![](https://wpfusion.com/wp-content/uploads/2018/01/mailerlite-ecom-showing-campaign-revenue-1024x693.jpg)When the tracking script is enabled, you can view ecommerce performance from your automations and campaigns on subscribers in MailerLite.

#### Mautic

Mautic site tracking is a little more complicated than site tracking with our other supported CRMs.

Set up properly it can be very effective, but it can also cause problems with misidentified contacts, or contact records getting merged.

**Note:** Mautic site tracking will not work if you are currently logged into Mautic as a user with the same email address as your WordPress user email. To test Mautic site tracking always use an incognito browser window.
**Note:** For Mautic site tracking to work correctly, you must have configured [Cross-Origin Resource Sharing (CORS)](https://kb.mautic.org/knowledgebase/installation/configuration#:~:text=Cors%20Settings,the%20%E2%80%9CValid%20Domains%E2%80%9D%20box.).
![](https://wpfusion.com/wp-content/uploads/2018/01/mautic-site-tracking-settings-1024x255.jpg)WP Fusion’s two options for site tracking with Mautic
WP Fusion includes two options for Mautic site tracking:

- **Site Tracking:**Enabling this option includes [the Mautic tracking script](https://docs.mautic.org/en/contacts/manage-contacts/contact-monitoring#javascript-js-tracking) in the footer of your page and sends a 
```
mt('send', 'pageview');
```

 event with each page view. This is the same as if you were using the [WP Mautic plugin](https://wordpress.org/plugins/wp-mautic/), or had added the tracking code manually.
- **Advanced Site Tracking:**Enabling this option activates some additional tracking methods unique to WP Fusion. When **Advanced Site Tracking** is active:
- If an anonymous visitor on your site is being tracked in Mautic, and later registers an account, submits a form, or makes a purchase, WP Fusion will merge the anonymous tracking data with the new contact record. This gives you a more complete picture of the visitor’s history on your site before they provided an email address.
- If a user is logged in to your site, WP Fusion will send a 
```
mt('send', 'pageview', {"email":"EMAILADDRESS"} );
```

 event to Mautic’s tracking script, to track pageviews for logged in users in cases where they default Mautic tracking can’t properly identify them.

Where you need to be careful with **Advanced Site Tracking** is caching.

If *jane@gmail.com* is logged into your site, and the Mautic tracking script is output to the footer of your page with Jane’s email address, then this could become cached.

If *steve@gmail.com* later visits the same cached page, the tracking script would send a 
```
mt('send', 'pageview', {"email":"jane@gmail.com"} );
```

 event.

This would update Steve’s contact ID in Mautic with Jane’s email. Since the email address field in Mautic must be unique, this would merge the two contact records and delete Steve’s data and tags.

![](https://wpfusion.com/wp-content/uploads/2018/01/mautic-site-tracking-1-1024x582.jpg)With Mautic site tracking enabled, anonymous visitors are tracked in Mautic.
![](https://wpfusion.com/wp-content/uploads/2018/01/mautic-site-tracking-2-1024x905.jpg)When a visitor registers an account, makes a purchase, or submits a form, their tracking data is merged into the new contact record (using Advanced Site Tracking).

#### Omnisend

To use site tracking with Omnisend, enable the setting for **Site Tracking** from the General tab in the WP Fusion settings, and enter your Brand ID.

![](https://wpfusion.com/wp-content/uploads/2018/01/omnisend-site-tracking-1024x231.jpg)

Your brand ID can be found in your Omnisend [store settings](https://app.omnisend.com/settings/store/pricing-plan).

![](https://wpfusion.com/wp-content/uploads/2018/01/omnisend-brand-ID-1024x556.jpg)The Omnisend brand ID is found in your Store Settings.
When site tracking is enabled, WP Fusion will automatically output the [Omnisend tracking script](https://api-docs.omnisend.com/reference/javascript-snippet) in the footer of all your pages.

If the current user is logged in, or if a guest submits a form or makes a purchase, WP Fusion will identify them to the tracking script by email address.

For more information on the tracking script, see the [Omnisend documentation](https://api-docs.omnisend.com/reference/javascript-snippet).

#### Ontraport

Ontraport’s site tracking can be enabled by checking the **Site Tracking** checkbox on the General tab in the WP Fusion settings. This will output [the Ontraport site tracking script](https://ontraport.com/university/Getting-started/Set-up/Add-the-Ontraport-tracking-script-to-your-site) in the footer of every page on your site.

### Developers

Site tracking will automatically be disabled when WP Fusion is set to Staging Mode (on the Advanced settings tab).

If needed you can also conditionally load the site tracking scripts via the 
```
wpf_get_setting_site_tracking
```

 filter.

For example, to disable site tracking for logged in administrators:

```
function disable_site_tracking() {

	if ( current_user_can( 'manage_options' ) ) {
		add_filter( 'wpf_get_setting_site_tracking', '__return_false' );
	}

}

add_action( 'init', 'disable_site_tracking' );
```

Or to disable site tracking on a specific page:

```
function disable_site_tracking() {

	if ( is_page( 'login' ) ) {
		add_filter( 'wpf_get_setting_site_tracking', '__return_false' );
	}

}

add_action( 'init', 'disable_site_tracking' );
```

---

## Lead Source Tracking

**Source:** [https://wpfusion.com/documentation/tutorials/lead-source-tracking/](https://wpfusion.com/documentation/tutorials/lead-source-tracking/)

### Overview

WP Fusion includes the ability to detect lead sources in URL parameters, such as those used with Google Analytics.

The system is quite versatile. It can look for a variety of common lead source parameters passed in URLs to your site and store these as a cookie when the user first visits your site.

If a visitor then registers on your site, makes a purchase, or submits a WP Fusion enabled form, the detected lead source parameters can be synced to custom fields in [any one of WP Fusion’s 40+ supported CRMs](https://wpfusion.com/documentation/faq/crm-compatibility-table/) and marketing automation platforms.

The cookie is valid for 90 days. So even if a user leaves your site and comes back later to make a purchase, you can still capture the source that brought them to you in the first place.

#### Google Analytics

If you’re using Google Analytics’ [Campaign URL Builder](https://ga-dev-tools.appspot.com/campaign-url-builder/), Google will generate tracking links to your site that look like 
```
https://mysite.com/?utm_source=facebook&utm_campaign=summer_ad
```

.

![](https://wpfusion.com/wp-content/uploads/2017/04/leadsource-tracking-1024x349.png)

You can enable each of the various Google Analytics tracking variable for sync from the Contact Fields tab in the WP Fusion settings.

**Note:** By default WP Rocket caches URLs with Analytics leadsource variables in them. This will prevent WP Fusion’s lead source tracking from working. You can [follow this tutorial](https://docs.wp-rocket.me/article/1281-customize-query-string-caching) to exclude the Google query string parameters from WP Rocket’s cache, or enable [JS Lead Source Tracking](#caching) from the settings.

#### Custom Lead Source Tracking

![](https://wpfusion.com/wp-content/uploads/2017/04/leadsource-tracking.jpg)To enable custom lead source tracking, locate the 
```
leadsource
```

 field in the Contact Fields list and map it to a field in your CRM. Make sure to check the Sync box to enable the connection.

Structure the URL to your site like 
```
https://mysite.com/?leadsource=custom_leadsource
```

. Anything after the 
```
leadsource
```

 parameter in the URL will be synced. Using this method you can set up your own lead source tracking strategy however you see fit.

#### Referrer, Landing Page and Current Page

The fields *Original Referrer,* *Landing Page*and*Current Page* are a bit different in that they don’t use a URL parameter for tracking.

- **Original Referrer:**This tracks the URL a user followed to get to your site. If this is enabled, the referrer URL will be recorded on their first visit.
- **Landing Page:**This tracks the page the visitor landed on when they came to your site for the first time.
- **Current Page:**This is the page the visitor was on when the form was submitted.

### How it works

When a visitor lands on your site with one of the tracked parameters, WP Fusion will set a cookie, either 
```
wpf_leadsource
```

 (for the UTM and URL parameters) or 
```
wpf_ref
```

 for the Original Referrer and Landing Page.

![](https://wpfusion.com/wp-content/uploads/2017/04/lead-source-tracking-cookies-1024x382.jpg)You can see the cookies set by WP Fusion using your browser’s developer tools. If the cookies aren’t being set, your page is probably cached.
This cookie is valid for 90 days. If any any time during that period, a contact record is created for that visitor by WP Fusion, the tracked values will be extracted from the cookie and merged into the API data sent to create the new contact record.

This works any time WP Fusion creates a contact record— a form submission, abandoned cart, product purchase, or regular registration. It does *not* work when a contact record is added to your CRM by another plugin, since other plugins wouldn’t know to look for cookies set by WP Fusion.

Also note that WP Fusion only sync the lead source data when a *new* contact record is created. It won’t send the data to an existing contact record, to avoid overwriting lead source data you may have already collected for a contact. This can be considered *First Referrer*tracking.

### Caching

Note that the lead source tracking relies on cookies, which often aren’t compatible with caching. To get around this, WP Fusion includes an option to set the lead source tracking cookies via Javascript.

If you find that the tracking cookies aren’t being set, try enabling **JS Lead Source Tracking** from the Advanced tab in the WP Fusion settings.

### Developers

#### Register additional leadsource variables

You may want to register additional URL parameters that should be tracked as leadsource variables. You can do this using the 
```
wpf_leadsource_vars
```

 filter.

For example to register the URL parameter 
```
lang
```

:

```
function my_wpf_custom_leadsource_vars( $vars ) {
	$vars[] = 'lang';
	return $vars;
}

add_filter( 'wpf_leadsource_vars', 'my_wpf_custom_leadsource_vars' );
```

Once the variable is registered it will be detected in the URL when someone visits your site (for example 
```
&lang=en
```

) and saved to the 
```
wpf_contact
```

 cookie.

Any custom leadsource fields added via the 
```
wpf_leadsource_vars
```

 filter will automatically show up on the [Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) for syncing with custom fields in your CRM:

![](https://wpfusion.com/wp-content/uploads/2017/04/leadsource-tracking-custom-1024x414.jpg)

Then, when WP Fusion adds a contact record to your CRM (via a registration, purchase, form submission, or any other source), the custom leadsource values will be synced to the corresponding custom fields in your CRM.

#### Change the cookie name

If needed you can change the name of the cookies that are used for WP Fusion’s lead source tracking. The two filters are 
```
wpf_leadsource_cookie_name
```

 and 
```
wpf_ref_cookie_name
```

.

For example to prefix the two cookie names with an underscore:

```
add_filter( 'wpf_leadsource_cookie_name', function() {
	return '_wpf_leadsource';
} );

add_filter( 'wpf_referral_cookie_name', function() {
	return '_wpf_ref';
} );
```

#### Sync lead source data for existing contacts

By default, lead source data will only be synced when registering a new contact (to avoid potentially overwriting existing lead source data).

This snippet syncs any available lead source data whenever a contact is updated (requires WP Fusion v3.44.7 or higher).

```
add_filter( 'wpf_api_update_contact_args', array( wp_fusion()->lead_source_tracking, 'merge_lead_source' ) );
```

---

## Link Click Tracking

**Source:** [https://wpfusion.com/documentation/tutorials/link-click-tracking/](https://wpfusion.com/documentation/tutorials/link-click-tracking/)

### Overview

WP Fusion’s link click tracking feature lets you apply tags in your [CRM or marketing automation tool](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when links (or other elements) are clicked on your website.

To apply or remove tags when a user visits a specific page on your site, the simplest method is to use our [meta box](https://wpfusion.com/documentation/getting-started/meta-box/) in the page settings to configure the tags to apply / remove.

However, you may want to track engagement with external links, file downloads, or other buttons that don’t qualify as separate pages. You can do so using this feature.

### Setup

First enable the feature from the Advanced section of the general WP Fusion settings tab.

![link-tracking](https://wpfusion.com/wp-content/uploads/2016/11/link-tracking-1024x199.jpg)

When creating your links, switch into the “Text” mode of the editor, and structure your link HTML like the following:

```
<a href="http://externalsite.com/" data-apply-tags="Tag One, Tag Two">Click Me</a>
```

When the link is clicked, the tags will automatically be applied to the user.

To remove tags when a link or button is clicked, use the following:

```
<a href="http://externalsite.com/" data-remove-tags="Tag One, Tag Two">Click Me</a>
```

#### Other Elements

You can also use link click tracking on other elements. For example, to apply a tag when a form is submitted, add the 
```
data-apply-tags
```

 parameter to the submit button like so:

```
<input type="submit" value="Submit" data-apply-tags="123,456">
```

The 
```
data-apply-tags
```

 attribute can be added to any HTML element.

### With Elementor Pro

Elementor Pro allows you to specify data attributes for any element, which means WP Fusion’s tracking can be used to track clicks. This setting can be found on the Advanced tab while editing any element.

![](https://wpfusion.com/wp-content/uploads/2016/11/elementor-click-tracking.jpg)

Just enter 
```
data-apply-tags
```

 followed by a pipe 
```
|
```

 and then a comma-separated list of the tags you’d like applied when the element is clicked. For removing tags, use 
```
data-remove-tags
```

.

### With Gutenberg

With the Gutenberg editor, we recommend the [Attributes for Blocks plugin](https://wordpress.org/plugins/attributes-for-blocks/) for adding the data-apply-tags attribute to buttons or other blocks.

![a wordpress page editor displays a “tell your story” heading, a text block with editing tools, a “learn more” button, and a sidebar highlighting the “data apy tags” text field for easy link click tracking setup.](https://wpfusion.com/wp-content/uploads/2016/11/attributes-for-blocks-1024x505.png)

---

## Auto Login

**Source:** [https://wpfusion.com/documentation/tutorials/auto-login-links/](https://wpfusion.com/documentation/tutorials/auto-login-links/)

### Overview

WP Fusion’s auto-login system can load the CRM tags and meta data for a contact record into a temporary WordPress user account. The site visitor is then tracked with a cookie.

This allows you to personalize site content, pre-fill forms, and track activity (by applying tags) even if the contact doesn’t have a WordPress account.

The auto-login process can either be triggered via a link, or via a form submission.

**Note:** This feature does not work properly on WP Engine or other hosts that don’t let you edit your site’s caching settings.

### Auto Login Links

Auto login links can be used in an email to grant access to restricted content on your site without requiring a user to log in. You can even grant access to contacts in your CRM that don’t have user accounts on your site.

Keep in mind that the **users will only be logged in for the purposes of WP Fusion’s content restriction** and activity tracking features. For security reasons, users will not be able to access or edit their account details, purchase history, or any other sensitive information. For that they will need to log into your site using their username and password. **All other plugins will see the visitor as a guest.**

#### Usage

To use this feature, first enable it from the Advanced section of the WP Fusion general settings tab.

![](https://wpfusion.com/wp-content/uploads/2016/11/auto-login-settings-1-1024x559.jpg)

You can now log a user into your site by passing a contact ID in any URL pointed at your site, for example:

```
https://mysite.com/my-special-content/?cid=1234
```

This sets a cookie and creates a temporary WordPress user with that contact’s tags and other information from your CRM. Any protected content will be accessible if the contact has the correct tags. You can also apply tags and track activity as if the user was logged in.

The auto-login session is valid for 180 days (or until the visitor clears their browser cache). This can be modified with [the wpf_auto_login_cookie_expiration filter](#modifying-the-cookie-expiration).

You can also use WP Fusion’s [user meta shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-user-meta) to display contact data from your CRM.

#### Personalization tags

Here are some of the personalization tags for our more popular CRM integrations. This list will continue to be updated:

- **ActiveCampaign:**
```
https://mysite.com/?cid=%CONTACTID%
```
- **AgileCRM:**
```
https://mysite.com/?cid={{id}}
```
- **Bento:** 
```
https://mysite.com/?cid={{ visitor.uuid }}
```
- **ConvertKit:** 
```
https://mysite.com/?cid={{ subscriber.id }}
```
- **Customer.io:** 
```
https://mysite.com/?cid={{customer.email}}
```
- **Drip:** 
```
https://mysite.com/?cid={{ subscriber.id }}
```
- **Dynamics 365 Marketing:**See below
- **FluentCRM**: 
```
https://mysite.com/?cid={{contact.id}}
```
- **FunnelKit**: 
```
https://mysite.com/?cid={{contact_id}}
```
- **Gist:** *not supported by Gist*
- **Groundhogg:** 
```
https://mysite.com/?cid={id}
```
- **HighLevel:** 
```
https://mysite.com/?cid={{contact.id}}
```
- **HubSpot:** 
```
https://mysite.com/?cid={{ contact.email }}
```
- **Infusionsoft / Keap:** 
```
https://mysite.com/?cid=~Contact.Id~
```
- **Mailchimp:** 
```
https://mysite.com/?cid=*|EMAIL|*
```
- **MailerLite:** 
```
https://mysite.com/?cid={$email}
```
- **Mautic:** 
```
https://mysite.com/?cid={contactfield=id}
```
- **NationBuilder:** 
```
https://mysite.com/?cid={{recipient.id}}
```
- **Ontraport:** 
```
https://mysite.com/?cid=[Contact ID]
```
- **Salesforce:** 
```
https://mysite.com/?cid={{{Recipient.Id}}}
```
- **Brevo:** 
```
https://mysite.com/?cid={{ contact.EMAIL }}
```
- **Zoho:** 
```
https://mysite.com/?cid=${Contacts.Contact Id}
```

**Dynamics 365 Marketing**

With Dynamics 365, you can create an auto-login URL by clicking *Personalization*» *New Dynamic Text,*and choosing *Contact* from the available properties.

![](https://wpfusion.com/wp-content/uploads/2016/11/dynamics-365-dynamic-text-1024x737.jpg)

**Other CRMs**

For other CRMs you can find the merge field for the contact ID from their merge fields documentation.

#### Set Current User

By default auto-logged in users will only be able to access content protected by WP Fusion, and contact data can only be displayed using WP Fusion’s [shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/).

You can enable **Set Current User** to have WP Fusion set the 
```
$current_user
```

 global in WordPress, so other plugins will be tricked into treating the user as logged-in as well.

This works well for pre-filling forms (in plugins like [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/) or [Advanced Custom Fields](https://wpfusion.com/documentation/other/advanced-custom-fields/)) with data from the CRM contact record, allowing you to create profile update forms or subscription preferences forms for your mailing list subscribers.

However this can cause problems with membership plugins (like BuddyBoss) and gamification plugins as they try to trigger notifications or achievements for a non-existent user, and may cause your site to crash when the auto-login link is visited.

If you get a white screen or an error message when visiting an auto-login link, turning off **Set Current User** will likely fix the error.

### Form Auto Login

You can also start an auto-login session when a form is submitted with any one of our [supported form plugins](https://wpfusion.com/documentation/#lead-generation).

This is the same as if the visitor had just followed an auto-login link— a cookie is set and then you can customize the site appearance based on the tags and meta data on their contact record.

![](https://wpfusion.com/wp-content/uploads/2016/11/form-auto-login-1024x196.jpg)

To enable this, check the box for **Form Auto Login** from the Advanced settings tab.

If you’re using Gravity Forms, you also have the option to configure Form Auto Login on individual [form feeds](https://wpfusion.com/documentation/lead-generation/gravity-forms/#https://wpfusion.com/documentation/lead-generation/gravity-forms/#auto-login).

### Ending auto-login sessions

WP Fusion will attempt to end the auto login session in several situations to prevent unexpected behavior on your site:

- When a user logs into the site with a username and password
- When a visitor reaches a page that contains “login” in the URL
- When a visitor reaches a page that contains “register” in the URL
- When a visitor reaches a page that contains “checkout” in the URL

However you may also want to force the auto-login session to end at a different time, for example when a form is submitted. You can do this by appending 
```
?wpf-end-auto-login=true
```

 to any URL.

You can also achieve this in PHP by calling 
```
wp_fusion()->auto_login->end_auto_login();
```

### Troubleshooting Auto Login

The auto login system is still considered experimental and we can’t guarantee that it will work with all plugins.

If you’re using an auto login link and it doesn’t seem to be working, the first thing to check is if the cookie has been set for the auto login session. You can check your browser’s cookie storage to see if the 
```
wpf_contact
```

 cookie is being set. In Chrome this is found in the developer console under Application » Cookies:

![](https://wpfusion.com/wp-content/uploads/2016/11/auto-login-troubleshooting-1024x358.jpg)

If the 
```
wpf_contact
```

 cookie isn’t set, then the auto login URL wasn’t recognized. You should make sure that you’re using a real contact ID in your auto login URL, and that Auto Login is turned on in the WP Fusion settings.

#### Caching

Because auto-login links are visited by guests (people who aren’t logged in), making auto-login links work with caching requires some extra attention.

**Note:** As of v3.38.34 (January 2022), WP Fusion will automatically set a cookie 
```
wordpress_logged_in_wpfusioncachebuster
```

 when an auto-login session is in progress. This should work to automatically bypass caching for mosts hosts and cache plugins, since it looks like the cookie for a regular logged-in user.
For starters, make sure that any URLs with 
```
cid=
```

 in them are excluded from cache. Also add a cookie based cache exclusion for the 
```
wpf_contact
```

 cookie.

Note that URLs with UTM parameters (from Google Analytics) force-enable caching on some hosts. In many cases https://mysite.com/?cid=123 will work, but https://mysite.com/?utm_campaign=FallNewsletter&cid=123 will not, because the 
```
utm_campaign
```

 parameter triggers caching.

Getting around that is different for every host. For example with Cloudways we’ve had to:

1. In the cache exclusion settings in the Breeze plugin, put in a URL exclusion for the landing page being used with auto-login
2. In the Varnish settings in Cloudways, put in a cache exclusion for the landing page being used with auto-login
3. In the Varnish settings in Cloudways, put in a cache exclusion for the 
```
wpf_contact
```

 cookie.

#### Debug Mode

As of WP Fusion v3.37.12, you can enable **Auto Login Debug Mode** from the Advanced tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2016/11/auto-login-debug-mode-1024x508.jpg)

When enabled, details about the current auto-login session will be output to the HTML comments in the header of your site.

You can use this to troubleshoot issues for a particular auto-login user, for example missing or malformed metadata or tags. This will also show if the 
```
wpf_contact
```

 cookie isn’t being set, for example due to caching.

### Developer resources

There are a few filters that allow you to modify the auto-login process.

#### Using an alternate auto-login query variable

Instead of using 
```
?cid=
```

 in your URL, you may want to use another variable,  for example if you’re already passing the contact’s ID to a different plugin. You can register an additional custom query variable using the 
```
wpf_auto_login_query_var
```

 filter.

For example to share the contact ID parameter with RightMessage, you’d use:

```
function alt_auto_login_var( $var ) {
	return 'rm_ac';
}

add_filter( 'wpf_auto_login_query_var', 'alt_auto_login_var' );
```

#### Using an alternate auto-login parameter

By default WP Fusion uses a contact ID in your CRM to identify visitors via an auto-login URL. However you can in theory use any contact field as an auto-login parameter, as long as you can create the logic to convert that parameter into a contact ID.

You can modify the contact ID that’s read out of the URL using the 
```
wpf_auto_login_contact_id
```

 filter.

For example, to use a contact’s email address as the auto login parameter, we can use the 
```
get_contact_id()
```

 method to convert the email address from the URL into a contact ID in the CRM.

```
function use_email_address_as_auto_login_token( $contact_id ) {

	if ( is_email( $contact_id ) ) {
		$contact_id = wp_fusion()->crm->get_contact_id( urldecode( $contact_id ) );
	}

	return $contact_id;

}

add_filter( 'wpf_auto_login_contact_id', 'use_email_address_as_auto_login_token' );
```

#### Ending an auto-login session

You can permanently end an auto-login session and remove any cookies via the 
```
wpf_end_auto_login
```

 filter.

```
function my_end_auto_login( $end, $contact_data ) {

	if ( wp_fusion()->user->has_tag( 'Payment Failed' ) ) {
		$end = true;
	}

	return $end;
}

add_filter( 'wpf_end_auto_login', 'my_end_auto_login', 10, 2 );
```

There is also a helper filter which allows you to end a session based on a partial URL match, 
```
wpf_end_auto_login_request_uris
```

:

```
function my_end_auto_login_uri( $request_uris ) {

	$request_uris[] = 'my-page-slug';

	return $request_uris;
}

add_filter( 'wpf_end_auto_login_request_uris', 'my_end_auto_login_uri' );
```

In this example, if the visitor lands on https://mysite.com/my-page-slug/ (or any URL with my-page-slug in it) the session will end.

#### Skipping an auto-login session

You can skip an auto-login session on a single page via the 
```
wpf_skip_auto_login
```

 filter. The session will be resumed once the visitor navigates to another page.

```
function my_skip_auto_login( $skip, $contact_data ) {

	if ( is_page( 'my-custom-form' ) ) {
		$skip = true;
	}

	return $skip;
}

add_filter( 'wpf_skip_auto_login', 'my_skip_auto_login', 10, 2 );
```

There is also a helper filter which allows you to skip the session based on a partial URL match, 
```
wpf_skip_auto_login_request_uris
```

:

```
function my_skip_auto_login_uri( $request_uris ) {

	$request_uris[] = 'my-page-slug';

	return $request_uris;
}

add_filter( 'wpf_skip_auto_login_request_uris', 'my_skip_auto_login_uri' );
```

In this example, if the visitor lands on https://mysite.com/my-page-slug/ (or any URL with my-page-slug in it) the session will skipped on that page.

#### Modifying the cookie expiration

By default the auto login cookie is set to expire after 180 days. You can modify this with the 
```
wpf_auto_login_cookie_expiration
```

 filter.

```
function change_auto_login_cookie_expiration( $expiration ) {

	return 30 * DAY_IN_SECONDS;

}

add_filter( 'wpf_auto_login_cookie_expiration', 'change_auto_login_cookie_expiration' );
```

#### Pass auto-login data to other scripts

WP Fusion includes a function, [wpf_get_current_user()](https://wpfusion.com/documentation/functions/wpf_get_current_user/), which works the same as the [wp_get_current_user()](https://developer.wordpress.org/reference/functions/wp_get_current_user/) function, except that it also supports auto-login sessions. This can be used to pass data from an auto-login session to a 3rd party tracking script.

Below are two examples, one for [Oribi’s site tracking](https://oribi.io/help/oribi-javascript-api/add-visitors-emails), and one for [Smartlook’s site tracking](https://smartlook.github.io/docs/web/identify-visitor).

```
function custom_wpf_tracking() {

	if ( ! function_exists( 'wp_fusion' ) || ! wpf_is_user_logged_in() ) {
		return; // WP Fusion needs to be active and the user needs to be identified.
	}

	$user       = wpf_get_current_user(); // Get the details about the current user. This lets you use the email via $user->user_email
	$contact_id = wpf_get_contact_id(); // Or, optionally, you can use the contact ID for tracking.

	?>

	<!-- Start WP Fusion + Custom site tracking. -->

	<!-- Example one: Oribi, using the email address. -->
	<script type="text/javascript">
		ORIBI.api('setUserEmail', '<?php echo $user->user_email; ?>' );
	</script>

	<!-- Example two: Smartlook, using the contact ID. -->
	<script type="text/javascript">
		smartlook( 'identify', '<?php echo $contact_id; ?>' );
	</script>

	<!-- End WP Fusion + Custom Site Tracking -->
	<?php

}

add_action( 'wp_footer', 'custom_wpf_tracking' );
```

#### Making auto-login more secure

The basic auto-login implementation with just the 
```
cid=
```

 parameter is the easiest to set up and the most reliable. However this does mean that a visitor could cycle through random contact IDs in the URL, and potentially gain access to another contact’s content or details.

You can further secure the URL by adding a second parameter that has to pass. In this example, the auto-login URL contains an additional 
```
email=
```

 parameter. If the email doesn’t match the email address on the contact record in the CRM, the auto-login session is cancelled.

To work, the URL would need to be formatted like 
```
https://mysite.com/?cid={contact_id}&email={email_address}
```

```
function verify_wpf_auto_login( $end, $contact_data ) {

	if ( isset( $_GET['cid'] ) ) {

		$contact = wp_fusion()->crm->load_contact( intval( $_GET['cid'] ) );

		if ( is_wp_error( $contact ) ) {
			return true;
		}

		// If there's no &email= parameter in the URL, or the email doesn't match
		// the email in the database, end the auto login session

		if ( ! isset( $_GET['email'] ) ) {
			return true;
		}

		if ( urldecode( $_GET['email'] ) != $contact['user_email'] ) {
			return true;
		}
	}

	return $end;

}

add_filter( 'wpf_end_auto_login', 'verify_wpf_auto_login', 10, 2 );
```

#### “True” auto-login

Finally, there are some scenarios where you might need to allow users to log into real (existing) user accounts via a link.

This is not, and never will be, a feature of WP Fusion— because it creates a significant security vulnerability. A determined actor could guess the login URL and steal your real users’ data, or even take over your site.

Please use with caution and make sure you are also protecting your site with a security plugin, and DDoS / brute force protection.

---

## Import Users

**Source:** [https://wpfusion.com/documentation/tutorials/import-users/](https://wpfusion.com/documentation/tutorials/import-users/)

### Overview

WP Fusion includes an import tool that allows you to import existing contacts from your CRM as new WordPress users, and generate passwords for them.

![](https://wpfusion.com/wp-content/uploads/2016/01/import-tool-1024x622.jpg)

To start an import, navigate to the Import Users tab, and select a tag or list in your CRM to use for the import.

With the following platforms, you can also import all contacts without specifying a tag:

- ActiveCampaign
- Drip
- FluentCRM (REST + Same site)
- HighLevel
- HubSpot
- Infusionsoft
- Mailchimp
- Ontraport
- Salesforce

Select a user role for the new users, and click the Import button to begin the import.

**Note:**By default, only new users will be imported. If the contact already has an account on your site, they will be skipped. If you wish to update the tags and metadata for existing users, check the box for **Update Existing Users**.

If the Password field is enabled for sync on the Contact Fields tab, existing passwords can be imported as well. If the password field isn’t selected, a secure password will be automatically generated.

### Managing imports

WP Fusion will keep track of the users who were imported with each operation. If something goes wrong with an import and you want to try again, you click the Delete button next to an import group to delete just those users.

### Import options

#### Welcome emails

If you check the box next to **Enable Notifications**, WordPress will send a simple welcome email to the user with their username, and a link to set the password for the new user account.

You can customize this welcome email by using a plugin like [Welcome Email Editor](https://wordpress.org/plugins/welcome-email-editor/) or [Better Notifications for WordPress](https://wordpress.org/plugins/bnfw/).

#### Generated passwords

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

You can also leave email notifications disabled and send the user’s password back to your CRM after import. Check the box next to **Return Password** on the main WP Fusion settings tab, and select a field in your CRM in which to store the generated passwords.

After each user is imported, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

**Note:** Before importing a large number of users, first do a test import on your own contact record to ensure that all of the information is imported and the welcome emails are sent correctly.
By default WordPress will send a notification email *to the site owner* for every user imported. If you’re importing a large number of users you may wish to temporarily disable this using the [Disable New User Notification Emails](https://wordpress.org/plugins/disable-new-user-notifications/) plugin.

#### Username format

By default WP Fusion will set the username for all newly imported users to the contact’s email address.

You may not want the username to be the email address if you’re using a plugin (such as BuddyPress) which shows usernames on the frontend of the site. In that case you can change the default behavior.

This setting is found at the bottom of Settings » WP Fusion » General, in the **Imported Users** section.

![](https://wpfusion.com/wp-content/uploads/2016/01/imported-users-username-format-1024x408.jpg)

The three **Username Format** options are:

- **Email Address:**Usernames will be set to the contact’s emails address
- **FirstnameLastname:**Usernames will be a combination of the contact’s first name and last name (i.e. JaneDoe)
- **Firstname12345:**Usernames will be the contact’s first name, followed by a 5 digit random number (i.e. Jane36808)

For more control over how the usernames are generated, see [the wpf_import_user filter](https://wpfusion.com/documentation/filters/wpf_import_user/).

### Importing users via .csv

Because WP Fusion’s import tool loads contacts via your CRM’s API, it can be slow if you have a large number of contacts (for example 100,000+).

This is due to WP Fusion respecting your CRM’s API limits, as well as the resources available on your site. In general WP Fusion will import about one user per second.

For large imports, an alternative approach is to export a .csv file of your contacts directly from your CRM.

**You can then use the WP All Import plugin to import the .csv file** and create new WordPress users. To do this you will need to install [WP All Import](https://wordpress.org/plugins/wp-all-import/) and the [Users Addon](https://www.wpallimport.com/import-wordpress-users/).

WP Fusion includes [an integration with WP All Import](https://wpfusion.com/documentation/other/wp-all-import/) so that generated passwords will automatically be synced to your CRM as users are imported, and their tags and contact IDs will be stored against their user record.

This method takes some additional time to set up since it involves working with .csv files, but it can save time if you need to import many thousands of users.

---

## Sync Users Between Sites

**Source:** [https://wpfusion.com/documentation/tutorials/sync-user-accounts/](https://wpfusion.com/documentation/tutorials/sync-user-accounts/)

### Overview

If you have a sales site separate from your learning or membership site, you’ll need to keep users in sync between the two sites. You may also want to keep user passwords in sync, and enable single-sign-on, so users only have to log in once.

Because WP Fusion uses tags in your [CRM or marketing automation platform](https://wpfusion.com/documentation/faq/crm-compatibility-table/) to grant access to content, a tag applied on Site A can unlock content on Site B (or C, D, and E).

For example, a [WooCommerce purchase](https://wpfusion.com/documentation/ecommerce/woocommerce/) applies a tag to the new customer on Site A, which then triggers an [automatic enrollment into a LearnDash course](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment) on Site B.

### Setup and strategy

The main concern with syncing users between sites is keeping their passwords in sync, securely. For that reason we don’t recommend using WP Fusion to sync user passwords with your CRM, since they will be synced in plain text.

![](https://wpfusion.com/wp-content/uploads/2016/01/User-Syncing-Bad@2x-1024x347.png)When you use your WP Fusion to sync users between sites, your user passwords end up stored in your CRM in plain text
Instead, we recommend using a plugin that allows you to sync user data *directly* between the sites, such as [WP Remote Users Sync](https://wordpress.org/plugins/wp-remote-users-sync/) or [Uncanny Automator](https://wpfusion.com/go/automator).

![](https://wpfusion.com/wp-content/uploads/2016/01/User-Syncing-Good@2x-1-1024x540.png)It’s preferable to sync user passwords directly between your sites, and then WP Fusion can sync non-sensitive data such as tags with your CRM
In that scenario, WP Fusion can still connect both sites to your CRM, but it will just be responsible for applying tags and syncing other non-sensitive information.

### Using WP Remote Users Sync

Our recommended solution for syncing users between sites is with the WP Remote Users Sync plugin.

It lets you connect your sites directly to each other, so new user accounts are immediately created on your membership site when a customer registers on your sales site.

![](https://wpfusion.com/wp-content/uploads/2016/01/screenshot-3-1024x616.png)

It also enables single sign on, so customers don’t need to log in a second time on your membership site.

#### Example

For example if you wanted to sell a product with WooCommerce on *Site A*, and deliver access to a course on *Site B*, you would first set up your WooCommerce product to [apply an access tag](https://wpfusion.com/documentation/ecommerce/woocommerce/#tagging-customers) via WP Fusion, and then in your course use that same tag for auto-enrollment (for example with [LearnDash](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment) or [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#course-auto-enrollment)).

You would then connect Site A to Site B using WP Remote Users Sync, and make sure that guest checkout is disabled in the WooCommerce settings.

![](https://wpfusion.com/wp-content/uploads/2016/01/woo-guest-checkout-disabled-1024x454.jpg)Make sure that guest checkout is disabled in the WooCommerce settings on Site A.
Now, when the customer checks out, they will automatically be logged in to their new user account.

WP Remote Users Sync will sync the new user to Site B, along with their tags *and logged-in status*. This means the customer doesn’t have to log in again to access their course on *Site B.*

![](https://wpfusion.com/wp-content/uploads/2016/01/wp-remote-users-sync-loaded-1024x353.jpg)

When the tags are loaded on *Site B,* WP Fusion will automatically enroll the new user into any courses linked to those tags, and record a message [in the logs](https://wpfusion.com/documentation/getting-started/activity-logs/).

For more information on setting up WP Remote Users Sync, [see our documentation](https://wpfusion.com/documentation/other/wp-remote-users-sync/).

### Using Uncanny Automator

[Uncanny Automator](https://wpfusion.com/go/automator) allows you to set up a webhook between two sites which automatically creates a new WordPress user. You can use this to have your checkout on one site which automatically creates a user and enrolls them into a course on a second site.

For more info on using Uncanny Automator to sync users between sites, [see this tutorial](https://automatorplugin.com/connect-multiple-wordpress-sites-together/?ref=90).

### Using WP Fusion

It’s also possible to sync user accounts between multiple websites with WP Fusion, using your CRM to store the data and push it onwards to multiple sites. This method is more advanced and requires additional setup, but doesn’t require installing another plugin.

#### No user account

The simplest way to use WP Fusion to sync user data is to require guest checkout on your sales site. In this case WP Fusion syncs your customer data to your CRM, but no user account is generated on the sales site (so there’s no password that needs to be synced).

Then you can create an automation in your CRM that [sends a webhook](https://wpfusion.com/documentation/#webhooks-and-http-posts) to Site B, with 
```
wpf_action=add
```

 in the webhook URL. This will create a new user account, generate a random password, and enroll the new user in any purchased courses or memberships.

This is quite secure because the password is randomly generated, and relatively easy to manage because once the user account has been created, the user only exists on that one site (you’re not trying to keep passwords and other details in sync on an ongoing basis).

#### Syncing user accounts

Using WP Fusion it’s possible to sync a user’s user name and password to custom fields on their contact record in your CRM.

To do this enable the fields 
```
user_login
```

 and 
```
user_pass
```

 for sync from the Contact Fields tab in the WP Fusion settings, and select corresponding custom fields in your CRM in which to store the data.

You can then set up WP Fusion on a different WordPress site, and use WP Fusion to pull the latest user name and password from your CRM, effectively keeping your customer logins in sync across two or more WordPress sites.

![](https://wpfusion.com/wp-content/uploads/2016/01/Sync-Users-Between-Sites@2x-1024x367.png)

#### Setup

To set up the integration, first navigate to the Contact Fields tab and click the check boxes next to Password and Username to enable them for sync.

![](https://wpfusion.com/wp-content/uploads/2016/01/sync-user-passwords-1024x213.jpg)

Then go to the General Settings tab and make sure the checkbox next to the **Push** option is checked.

**Note:**All data is synchronized with SSL encryption but passwords are stored in your CRM application as plain text. Make sure that everyone who has access to your application is trusted before you choose to synchronize passwords.
Now, when a user creates an account or updates their information, their username and password will be synced to to your CRM. You’ll then want to [configure a webhook](https://wpfusion.com/documentation/#webhooks) to push the information to the other site(s).

---

