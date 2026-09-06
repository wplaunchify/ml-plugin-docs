# Testing Subscription Renewal Payments

*Category from WooCommerce Subscriptions documentation*

---

## Testing Subscription Renewal Payments

**Source:** [https://woocommerce.com/document/subscriptions/testing-subscription-renewal-payments/](https://woocommerce.com/document/subscriptions/testing-subscription-renewal-payments/)

# Testing Subscription Renewal Payments

			Use a staging site to test automatic subscription renewal payments before changing a live store. This lets you confirm that the subscription, payment gateway, scheduled action, and customer emails behave as expected without waiting for the next real billing date.

**Note:** Use a payment gateway test mode or another non-production payment method when testing renewals. If a gateway does not support [payment date changes](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features), you may need to wait for the gateway to process the renewal on the subscription product’s schedule.

## Purchase a test subscription

[↑ Nach oben](#doc-title)

If you have not already purchased a subscription to test with, purchase a test subscription on your site using the payment gateway you want to verify. After completing the purchase, note the subscription ID created for the order.

## Trigger the renewal

[↑ Nach oben](#doc-title)

There are two ways to trigger a renewal payment for a test subscription:

- Use the **Process renewal** action on the **Edit Subscription** screen.
- Manually run the scheduled action that processes the subscription payment.

### Process renewal admin action

[↑ Nach oben](#doc-title)

The [Process renewal](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/update-an-existing-subscription/#process-a-renewal) action is the simplest method to test a renewal payment. Open the test subscription, choose **Process renewal** from the **Order actions** panel, and click the arrow button to run the action.

![Order actions panel on the Edit Subscription screen with Process renewal selected.](https://woocommerce.com/wp-content/uploads/2026/08/subscriptions-process-renewal-order-actions.png?strip=all&w=704)The Process renewal action is available from the Order actions panel on an active test subscription.

For an automatically renewing subscription that uses a gateway processed by WooCommerce Subscriptions, processing a renewal runs the full [renewal process](https://woocommerce.com/document/subscriptions/renewal-process/#the-renewal-process), including charging the assigned payment method and emailing the subscriber when emails are enabled. Gateways that manage scheduled payments themselves do not process the charge through this action.

The **Process renewal** action appears when the subscription is active and the payment method supports payment date changes.

### Subscription payment scheduled action

[↑ Nach oben](#doc-title)

A more technical option is to manually run the scheduled action that triggers the subscription payment.

1. Go to **WooCommerce > Status > Scheduled Actions**.
2. Search for the ID of your test subscription.
3. Find the row with the hook **woocommerce_scheduled_subscription_payment** and the status **Pending**.
4. Hover over the row to reveal the available actions, then click **Run**.

![Scheduled Actions table showing a pending woocommerce_scheduled_subscription_payment action for a test subscription.](https://woocommerce.com/wp-content/uploads/2026/08/subscriptions-scheduled-actions-search-result.png?strip=all&w=704)Filtering Scheduled Actions by the subscription ID helps you find the pending subscription payment action to run.

After the renewal payment processes successfully with an [automatic renewal method](https://woocommerce.com/document/subscriptions/renewal-process/#manual-vs-automatic-renewals), a new pending **woocommerce_scheduled_subscription_payment** action is created for the next payment date.

## Troubleshooting issues with subscription renewals

[↑ Nach oben](#doc-title)

### Automatic renewal payments not starting

[↑ Nach oben](#doc-title)

If subscriptions appear active but have a renewal date in the past, there may be a cron issue on the site. These subscriptions can show a **Subscription payment overdue** warning in the subscriptions list at **WooCommerce > Subscriptions**.

Start by verifying that WordPress cron is enabled. Go to **WooCommerce > Status > System status** and check the **WordPress cron** row. If WordPress cron is disabled, [re-enable it](https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/#debugging-wp-cron) before relying on scheduled subscription renewals.

1. After confirming cron is enabled and your payment gateway supports date changes, try changing the next payment date of the subscription to one hour from now.
2. If subscription renewals still do not process, consult the [Complete Guide to Scheduled Events with Subscriptions](https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/) to troubleshoot WP Cron and scheduled events.

### Diagnosing stalled renewal payments

[↑ Nach oben](#doc-title)

A stalled renewal happens when an automatically renewing subscription starts the renewal process but an error prevents the renewal from finishing. The subscription may be left on hold, and the payment may or may not have been captured. The cause can be the payment itself, a payment gateway error, or a plugin or theme conflict.

Choose a single example subscription and trace the issue from there.

#### Look for clues

Start with these places:

- **Order notes:** Check the notes on both the subscription and the renewal order. Look for payment gateway errors, unusual notes, or signs that the issue was a normal failed payment, such as an expired card or insufficient funds.
- **WooCommerce logs:** Go to **WooCommerce > Status > Logs** and check for a WooCommerce fatal error log. If gateway logging was enabled, review those logs too.
- **Failed scheduled actions:** Check failed scheduled actions for recorded errors or stack traces.
- **Plugins list:** Check for outdated plugins that interact with WooCommerce orders, payments, or subscriptions.
- **Debug log:** If WordPress debug logging was enabled before the issue occurred, check 
```
wp-content/debug.log
```

 using SFTP, a file manager, or your hosting tools.
- **PHP server logs:** If no clues are found elsewhere, check your server-level PHP error logs or ask your hosting provider where to find them.

Depending on the clues you find, the resolution may involve correcting payment gateway settings, asking the customer to update their card information, or performing [a conflict test](https://woocommerce.com/document/how-to-test-for-conflicts/).

**Perform conflict testing in a staging environment whenever possible.** See [How WooCommerce Subscriptions handles staging sites](https://woocommerce.com/document/subscriptions-handles-staging-sites/) for details.

## Questions and support

[↑ Nach oben](#doc-title)

**Something missing from this documentation? Still have questions and need assistance?**

- If you have a question about a specific extension or theme you’d like to purchase, [contact us](https://woocommerce.com/contact-us/#sales-form) to get answers.
- If you already purchased this product and need some assistance, get in touch with a Happiness Engineer via our [support page](https://woocommerce.com/my-account/create-a-ticket/) and select this product’s name from the Product dropdown.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to...
				![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.

---

