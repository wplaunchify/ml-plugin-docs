# Subscriptions Notifications

*Category from WooCommerce Subscriptions documentation*

---

## Subscription Notifications

**Source:** [https://woocommerce.com/document/subscriptions/subscriptions-notifications/](https://woocommerce.com/document/subscriptions/subscriptions-notifications/)

# Subscription Notifications

			## Introduction

[↑ Back to top](#doc-title)

### Overview

[↑ Back to top](#doc-title)

Subscription Notifications allow you to automatically send timely emails to subscribers to keep them informed about important subscription events, such as upcoming renewals, expirations, and the end of free trials.

The notifications that you can enable and customize are:

1. **Subscription Renewal Notification**, to remind subscribers about upcoming renewals, whether the payment is automatic or requires manual action.
2. **Subscription Expiration Notification**, to inform subscribers that their subscription is nearing its end date.
3. **Subscription Free Trial Expiration Notification**, to inform customers that their free trial period is ending soon.

**Important**: Subscription Notifications feature requires WooCommerce Subscriptions 6.9.0+.

## Getting Started

[↑ Back to top](#doc-title)

### Notification Settings

[↑ Back to top](#doc-title)

To configure subscription notifications:

1. Navigate to **WordPress Admin dashboard > WooCommerce > Settings**.
2. Click on the **Subscriptions** tab at the top of the page.
3. Scroll down to the **Customer Notifications** section. Here, you’ll find settings to enable and customize the subscription notifications.

![](https://woocommerce.com/wp-content/uploads/2024/11/WooCommerce-settings-‹-WordPress-subs.local_-1.png?w=980)

#### Enabling Renewal Reminders

To enable the feature on your store, check the **Enable Renewal Reminders**checkbox and, then click on the **Save changes** button. All notifications are automatically disabled in non-production environments.

After **enabling** subscription reminders, notifications will be **gradually added** to all the relevant subscriptions in the background.

After **disabling** subscription reminders, all notifications will be automatically unscheduled. This includes existing or in-progress notifications.

Individual reminders can be enabled/disabled from **WooCommerce > Settings > Email** screen (see [below](#h-customizing-individual-notifications)).

#### Set Renewal Reminder Timing

In the **Renewal Reminder Timing** field:

- Enter how many days/weeks/months before the subscription event the reminder should be sent.
- Choose the time unit from the dropdown menu (e.g., Day(s), Week(s), Month(s))

After **updating** the reminder **timing**, all the subscription **notifications** will be **automatically** **rescheduled** to the new time offset.

The latest a reminder can be sent is 1 day before the subscription event.

There are no notifications scheduled for subscriptions shorter than 3 days.

### Customizing Individual Notifications

[↑ Back to top](#doc-title)

To enable, disable and customize individual notification emails, use the **WooCommerce > Settings > Emails** settings.

![](https://woocommerce.com/wp-content/uploads/2024/11/image_2c0018.png?strip=all&w=704)

## Notification Types

[↑ Back to top](#doc-title)

### Renewal Notifications

[↑ Back to top](#doc-title)

#### Manual Renewal Notice

The **Manual Renewal Notice** is an email sent to customers with subscriptions that require [manual renewal](https://woocommerce.com/document/subscriptions/renewal-process/#manual-vs-automatic-renewals) to remind them that their subscription is nearing its renewal date.

If the store allows [early renewals](https://woocommerce.com/document/subscriptions/early-renewal/), the email will include a link prompting customers to renew their subscription.

![](https://woocommerce.com/wp-content/uploads/2024/11/image_1a9c69.png?strip=all&w=704)

#### Automated Renewal Notice

The **Automated Renewal Notice** is an email sent to customers to remind them that their subscription is approaching its renewal date and to inform them of the upcoming automatic payment.

![](https://woocommerce.com/wp-content/uploads/2024/11/image_1146a7.png?strip=all&w=704)

### Free Trial Expiration Notifications

[↑ Back to top](#doc-title)

The **Subscription Free Trial Expiration Notification** is an email sent to customers to remind them that their free trial is about to expire and encourage them to continue their subscription.

Subscriptions with a free trial usually have both the next payment date and trial expiry event planned for the same time. Therefore, only the free trial expiry notifications are scheduled. Once the free trial is completed, renewal notifications will get scheduled instead.

#### Automated Payment Notice

The **Automated Free Trial Expiration Notification** is an email sent to customers to remind them that their free trial is about to expire and inform them that their subscription will remain active, with the next payment being charged automatically. It also includes a link to the account dashboard in case customers want to manage their subscriptions.

![](https://woocommerce.com/wp-content/uploads/2024/11/image_3057fa.png?strip=all&w=704)

#### Manual Payment Required

The **Manual Free Trial Expiration Notification** is an email sent to customers to inform them that their free trial is ending soon and prompt them to take action after the trial expires to continue their subscription.

Since [early renewal within the free trial period is not possible in WooCommerce Subscriptions](https://woocommerce.com/document/subscriptions/early-renewal/#early-renewal-requirements), this email serves as a courteous reminder without a call to action.

![](https://woocommerce.com/wp-content/uploads/2024/11/image_8fe76c.png?strip=all&w=704)

### Subscription Expiration Notification

[↑ Back to top](#doc-title)

The **Subscription Expiration Notification** is an email sent to customers to inform them that their subscription will expire soon.

Since [it’s not possible to let customers renew subscription before the point of expiry or resubscribe to a subscription that hasn’t expired yet](https://woocommerce.com/document/subscriptions/customers-extend-subscription-expiration-date/), there is no call to action in this email.

![](https://woocommerce.com/wp-content/uploads/2024/11/image_db82d8.png?strip=all&w=704)

## Subscription Notification Validity

[↑ Back to top](#doc-title)

The following table shows which notification types apply to subscriptions with certain settings and stages of their lifecycle:

| Subscription Type | Time of Scheduling the Notifications | Notifications to Be Scheduled |
| --- | --- | --- |
| Subscription without a trial and expiry date | Any | Renewal Notification (if there’s any next payment planned) |
| Subscription with a free trial | During free trial | Free Trial Expiration Notification |
| Subscription with a free trial | After free trial | Renewal Notification (if there’s any next payment planned) |
| Subscription with an expiry | Any | Renewal Notification (if there’s any next payment planned)Subscription Expiration Notification |
| Subscription with a free trial and expiry | During free trial | Free Trial Expiration NotificationSubscription Expiration Notification |
| Subscription with a free trial and expiry | After free trial | Renewal Notification (if there’s any next payment planned)Subscription Expiration Notification |

Subscription notifications are only scheduled for subscriptions with the following statuses:

- active
- pending-cancel

## Triggering Notifications Manually

[↑ Back to top](#doc-title)

In addition to automatically triggered notifications, there is also the possibility to send notifications manually from the **Edit Subscription** screen. Each subscription will only show notifications that apply to the specific subscription.

![](https://woocommerce.com/wp-content/uploads/2024/11/image_225704.png?strip=all&w=704)

## Troubleshooting

[↑ Back to top](#doc-title)

### Notifications aren’t getting scheduled

[↑ Back to top](#doc-title)

Each subscription notification is represented as a scheduled action within WooCommerce. You can view and manage all the scheduled notifications using the **Tools >** **Scheduled Actions** tool.

If you see that no notifications are getting scheduled, please check the following:

1. **Global Notifications Switch is Set to Enabled**
1. Navigate to **WooCommerce** > **Settings** > **Subscriptions**
2. Find the section **Customer Notifications**
3. Ensure the **Enable Renewal Reminders checkbox**is checked
2. **The Billing Cycle of Your Subscriptions is at Least 3 Days**

#### Viewing Notifications for a Specific Subscription

To view all scheduled notifications for a particular subscription:

1. **Access Scheduled Actions**:
- Navigate to **WooCommerce > Status > Scheduled Actions**.
2. **Search by Subscription ID**:
- In the **Search** field, enter the subscription ID (e.g., 
```
162
```

).
- Click **Search hook, args and claim ID**.
3. **Identify Notification Actions**:
- Check the **Group** column for 
```
wcs_customer_notifications
```

. These actions represent the scheduled notifications for that subscription.

You can trigger the notification from the Scheduled Actions screen, using the `Run` link, but all the notifications can also be triggered manually from the Edit Subscription screen [TODO: link to the other section]

#### Viewing All Scheduled Subscription Notifications

To see all scheduled subscription notifications across all subscriptions:

1. **Access Scheduled Actions**:
- Navigate to **WooCommerce > Status > Scheduled Actions**.
2. **Filter by Notification Hook**:
- In the **Search** field, enter 
```
woocommerce_scheduled_subscription_customer_notification
```

.
- Click **Search hook, args and claim ID**.
- This will display all scheduled actions related to subscription notifications.

### Notifications are scheduled, but no emails are being sent

[↑ Back to top](#doc-title)

For a subscription notification to be sent, the following conditions must be met:

1. **Global Notifications Enabled**:
- The **Enable Renewal Reminders** option under **WooCommerce > Settings > Subscriptions** must be checked.
2. **Specific Notification Enabled**:
- The individual notification must be enabled under **WooCommerce > Settings > Emails**.
3. **Site Environment**:
- The site must be set to a **Production** environment.
- Notifications are not sent if 
```
wp_get_environment_type()
```

 returns any value other than 
```
'production'
```

.
4. **Staging Site Check**:
- The site must not be detected as a staging or duplicate site.
- WooCommerce Subscriptions uses 
```
WCS_Staging::is_duplicate_site()
```

 to determine this.
- For more information, see[How Subscriptions Handles Staging Sites](https://woocommerce.com/document/subscriptions/subscriptions-handles-staging-sites/).

In addition to the above, please ensure your email settings are valid. Please refer to the [general WooCommerce email troubleshooting guide](https://woocommerce.com/document/email-faq/).

### Notifications need to be regenerated

[↑ Back to top](#doc-title)

Normally, all the subscription notifications will be updated automatically when you update the settings (enable/disable, change time offset). In case you need to regenerate the notifications manually to ensure they’re up-to-date, there’s a new tool available for this purpose:

- Navigate to **WooCommerce > Status > Tools**.
- Find **Regenerate subscription notifications** in the list of tools.
- Click the **Regenerate notifications** button.

This will enqueue the 
```
WCS_Notifications_Debug_Tool_Processor
```

 batch processing task that processes all the relevant subscriptions in the background.

#### Automatic Update of Notifications

Notifications are automatically updated by a scheduled action/background task 
```
WCS_Notifications_Batch_Processor
```

 under the following circumstances:

Settings Changes

- Enabling/disabling notifications globally
- Update of time offset for notifications

Subscription Modifications

If a subscription is modified, notifications are re-evaluated and rescheduled based on the new information. The following changes trigger rescheduling:

- Date update
- Status update
- Any update to the subscription after the change of global settings, until all subscriptions have been processed

## FAQ

[↑ Back to top](#doc-title)

### How can I adjust the time offset per subscription?

[↑ Back to top](#doc-title)

All notifications use one setting for time offset irrespective of the subscription billing cycle. To define a different time offset based on the subscription’s billing cycle, you need to use filter 
```
woocommerce_subscription_customer_notification_time_offset
```

, e.g.:

```
add_filter(
	'woocommerce_subscription_customer_notification_time_offset', 
	function( $offset_in_seconds, $subscription, $date_type ) {

		// If it's not a renewal notification, return the default offset.
		if ( 'next_payment' !== $date_type ) {
			return $offset_in_seconds;
		}

		$period   = $subscription->get_billing_period();
		$interval = $subscription->get_billing_interval();

		switch ( $period ) {
			case 'week':
				// Default.
				break;
			case 'month':
				// Default for less than 6 months.
				if ( $interval >= 6 ) {
					$offset_in_seconds = 1 * WEEK_IN_SECONDS;
				}
				break;
			case 'year':
				$offset_in_seconds = 1 * MONTH_IN_SECONDS;
				break;
		}

		return $offset_in_seconds;
	},
	10,
	3
);
```

### Can there be more notifications per subscription event?

[↑ Back to top](#doc-title)

Each event in the subscription lifecycle can only have one notification attached to it, so it’s not possible to have multiple notifications for one renewal or expiration. E.g. a yearly subscription can’t have a renewal notification sent both 1 month prior and 1 week before the renewal date.

### How can I cancel a notification?

[↑ Back to top](#doc-title)

The Scheduled Actions interface allows you to manage individual notification actions.

To cancel a scheduled notification:

1. **Access Scheduled Actions**:
- Navigate to **WooCommerce > Status > Scheduled Actions**.
2. **Find the Notification**:
- Use the **Search** field to find the specific action by subscription ID or hook name, make sure the **Group**is 
```
wcs_customer_notifications
```

.
3. **Cancel the Action**:
- Hover over the action and click **Cancel**.

### How can I send a notification immediately?

[↑ Back to top](#doc-title)

If you want to send the notification email immediately without affecting the scheduled notification,trigger it from the **Edit Subscription** screen.

If you want to activate the scheduled email (i.e. there will be no subsequent scheduled notification for a given subscription event), you need to use the Scheduled Actions interface. Specifically:

1. **Access Scheduled Actions**.
- Navigate to **WooCommerce > Status > Scheduled Actions**.
2. **Find the Notification**.
- Use the **Search** field to find the specific action by subscription ID or hook name, make sure the **Group**is 
```
wcs_customer_notifications
```

.
3. **Run the Action**:
- Hover over the action and click **Run**.

*Use this with caution, as it will send the email immediately to the customer.*

### Missing a Feature?

[↑ Back to top](#doc-title)

Please submit a feature request to our [feature request board](https://woocommerce.com/products/woocommerce-subscriptions/).

---

