# Scheduled Action Errors

*Category from WooCommerce Subscriptions documentation*

---

## Subscriptions Scheduled Action Errors

**Source:** [https://woocommerce.com/document/subscriptions/scheduled-action-errors/](https://woocommerce.com/document/subscriptions/scheduled-action-errors/)

# Subscriptions Scheduled Action Errors

			[WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) uses a feature of WooCommerce called [Action Scheduler](https://actionscheduler.org/) to process scheduled events, like subscription renewals and expiration.

If an error occurs when processing such an event, a notice appears in the WordPress admin dashboard that alerts store managers of the error.

This scheduled actions errors guide explains why the notice displays, the likely causes of the issue, steps to diagnose the cause, and how to fix the problem or get help.

## Past-due Scheduled Actions

[↑ Back to top](#doc-title)

Past-due scheduled actions are tasks that missed their scheduled dates. It’s worth noting that due to how WP Cron works, it’s not uncommon to have some past-due actions in your system. If you come across multiple past-due actions that are more than a day old, it could indicate a potential issue with WP Cron. This may result in issues related to missing orders, subscriptions, or data within the WooCommerce Analytics.

Our [guide on scheduled events for subscriptions](https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/) offers a deeper understanding of WP Cron’s role in managing Scheduled Actions, and how to troubleshoot related issues.

## Scheduled Action Timeout Notice

[↑ Back to top](#doc-title)

When a subscription-related action fails due to a timeout, a notice displays in the admin dashboard.

A “timeout” is when an action has been “running” for more than five minutes, at which point Subscriptions considers it failed, and is marks it accordingly. This is because if an action has been running for that length of time, it is likely not running at all.

![Scheduled Action Error Notice](https://woocommerce.com/wp-content/uploads/2019/01/SA1_error_notice_update.png?strip=all&w=704)Scheduled Action Error Notice

## Diagnosing and Fixing Affected Subscriptions

[↑ Back to top](#doc-title)

To fix an affected subscription, follow the steps below.

### 1. Find Affected Subscriptions

[↑ Back to top](#doc-title)

The notice that appears after an action timeout contains a note with the subscription number and a link to the edit subscription page for that subscription. Use this to investigate if there are issues with the last renewal payment for the subscription that you need to address manually.

### 2. Track the Payment Process

[↑ Back to top](#doc-title)

Next, see if the payment was actually affected. This can be done by tracking when the payment process was affected by looking the subscription’s notes and logs.

#### Track the Renewal Process

For a renewal order, each stage of the renewal process is documented in the Subscription’s Order notes. To view this process:

1. Go to the**WooCommerce > Subscriptions > Edit Subscription**screen.
2. View the Subscription’s **Order notes**.

![WooCommerce Edit Subscription - Notes](https://woocommerce.com/wp-content/uploads/2019/01/edit-subscription-order-notes.webp?strip=all&w=704)WooCommerce Edit Subscription – Notes

The normal [process for a renewal](https://woocommerce.com/document/subscriptions/renewal-process/) is:

1. A renewal is due; the **subscription** moves to an **On-hold** status.
2. Subscription creates an **order**  to record the renewal and process payment.
3. If the **subscription** renews automatically, the **order** attempts to process payment and, if successful, the **order** moves to **Complete** status.
4. The **subscription** moves to **Active** status.

![Subscription notes successful renewal](https://woocommerce.com/wp-content/uploads/2019/01/SA3_subscription_notes_renewal.png?w=329)Subscription Notes – Successful Renewal

Each step above records the date and time at which it was processed. Comparisons can be made between the payment process and the failed action in order to find out when the process timed out.

#### Failure Before Payment

If the renewal order was created but the payment was not marked complete, the process may have stalled before payment was processed. This can be indicated if the time of failure of the action, as found above, is close to the time of the creation of the renewal order.

To make sure that the payment was not captured, there are a couple steps to take.

1. Go to the created order, linked to in the Subscription’s notes.
2. Check the **Order notes** on the order to see if the status changed and the payment was processed

![order notes payment complete](https://woocommerce.com/wp-content/uploads/2019/01/SA4_order_notes_payment_complete.png?strip=all&w=704)Order Notes – Payment Complete

1. Log in to the chosen payment gateway’s store account and check if the charge was captured for that order.
2. If there is no charge, then the process stalled before payment was taken.

#### Failure After Payment

If payment was captured but the order was not marked **Processing** or **Complete** or the subscription was not transitioned to an **Active** status, then the process stalled after payment. This can be indicated if the time of failure of the action, as found above, occurs after the payment was marked complete.

### 3. Fix Affected Subscriptions and Orders

[↑ Back to top](#doc-title)

#### Payment was not taken

If payment was not captured:

1. Check if there’s a**renewal** **order** (pending or failed) present for the affected subscription. If yes, change its status to**Cancelled**and**Update**. (Note: Please ensure you are only canceling the renewal order, not the entire subscription. Canceling a subscription will prevent it from being switched to active later.)
2. Set the subscription status to**Active**and**Update**.
3. Choose**Process renewal**from the subscription option dropdown.
4. This will then create a new renewal order, which should process as normal.

#### Payment was taken

If payment was captured but the order and subscription were not updated:

1. If the renewal order was not marked**Processing**or**Complete**, change the status to the appropriate status.
2. This will also update the subscription to**Active**.
3. If only the subscriptiondid not change to active, set the subscription status to**Active**.

## Diagnosing the Cause

[↑ Back to top](#doc-title)

It’s impossible to programmatically identify the cause of a timeout. Instead, they always require manual investigation, which is why this notice displays. There are a number of possible causes (outlined below), which should be explored to find the cause of the timeout.

### Subscriptions Version

[↑ Back to top](#doc-title)

Timeouts, and thus the error notices, are extremely rare occurrences in recent versions of Subscriptions. The first step after seeing an error notice is to update to the most recent version of [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) if it’s not up-to-date on your store.

If WooCommerce Subscriptions is up-to-date, you should still check the version of Subscriptions **at the time** of the error. It’s possible that the error occurred before a recent update.

Follow these steps to check the version of Subscriptions running when the error occurred:

1. Go to **WooCommerce > Status > Logs**.
2. Review the [WCS Upgrade log](https://woocommerce.com/document/subscriptions/logs-2/#general-upgrade-notes-logs) and the [Failed Scheduled Actions log](https://woocommerce.com/document/subscriptions/logs-2/#failed-scheduled-action-logs).
3. Compare the error time in the Failed Scheduled Actions log to the WooCommerce Subscriptions version currently running, as found in the WCS Upgrade log.

If you were running a much older version of Subscriptions when the error occurred, and you have since updated Subscriptions, it has likely resolved the underlying issue

Otherwise, you’ll want to investigate other potential causes.

### PHP Time Limit

[↑ Back to top](#doc-title)

The **PHP time limit** is the amount of time the server will spend on a single process before it automatically cancels the process execution. A time limit that is too short can cause processes to timeout, meaning it stops before fully completing. A common default value is 30 seconds, but many managed hosts provide a longer timeout period.

Follow these steps to find the PHP time limit for your site’s server:

1. Go to **WooCommerce > Status** to view the system status.
2. Scroll down to the **Server environment section**.
3. View the **PHP time limit**value.

![The site server's PHP time limit as per the site's Status Report](https://woocommerce.com/wp-content/uploads/2019/01/status-server-environment-php-time-limit.webp?strip=all&w=704)The site server’s PHP time limit as per the site’s Status Report

If this limit is below 30 seconds, we recommend increasing it to avoid scheduled action timeouts.

To change this limit, contact your hosting provider and discuss with them the best way to change the time limit.

### Large Number of Timeouts

[↑ Back to top](#doc-title)

This kind of notice and timeout should be an infrequent occurrence. In sites where there are dozens of timeouts or more, there is likely a critical underlying problem causing the timeouts that needs  investigating and a solution.

To check the number of timeouts, review the [Failed Scheduled Actions log](https://woocommerce.com/document/subscriptions/logs-2/#failed-scheduled-action-logs).

If there are many timeouts, please log into your WooCommerce.com account, ensure WooCommerce Subscriptions subscription is active, and [open a support ticket](https://woocommerce.com/my-account/create-a-ticket).

### Fatal Errors

[↑ Back to top](#doc-title)

Fatal errors can cause code processes to stop running and contribute to failed scheduled actions. To identify the causes of fatal errors, refer to the [Finding PHP Error Logs guide](https://woocommerce.com/document/finding-php-error-logs).

## Questions and support

[↑ Back to top](#doc-title)

**Something missing from this documentation? Still have questions and need assistance?**

- If you have a question about a specific extension or theme you’d like to purchase, [contact us](https://woocommerce.com/contact-us/#sales-form) to get answers.
- If you already purchased this product and need some assistance, get in touch with a Happiness Engineer via our [support page](https://woocommerce.com/my-account/create-a-ticket/) and select this product’s name from the Product dropdown.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to content/products and member discounts.
				![](https://woocommerce.com/wp-content/uploads/2019/03/All_Products_Woo_Subscriptions_icon-marketplace-160x160-2.png)

### All Products for WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer your existing products on subscription, with this powerful add-on for WooCommerce Subscriptions.

---

