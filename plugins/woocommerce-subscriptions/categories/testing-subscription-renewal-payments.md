# Testing Subscription Renewal Payments

*Category from WooCommerce Subscriptions documentation*

---

## Testing Subscription Renewal Payments

**Source:** [https://woocommerce.com/document/subscriptions/testing-subscription-renewal-payments/](https://woocommerce.com/document/subscriptions/testing-subscription-renewal-payments/)

# Testing Subscription Renewal Payments

			Once you have WooCommerce Subscriptions active on your site, you may want to test an automatic subscription renewal payment using your preferred payment gateway. Here we explain how you can manually trigger the “automatic” payment process, so you won’t have to wait for an entire subscription billing period to see whether or not your payment gateway’s automatic payments are functioning as expected.

**Note:** If you are using *PayPal Standard* or *WorldPay*, which don’t support [payment date changes](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features), and have minimum billing period lengths, this process will not work and you must wait until the payment gateway processes the renewal on the subscription product’s set schedule.

## Purchase a Test Subscription

[↑ Back to top](#doc-title)

If you have not already purchased a subscription to test with, purchase a test subscription on your site using the payment gateway you wish to test. After completing the purchase, take note of the ID number assigned to the created subscription.

## Trigger the Renewal

[↑ Back to top](#doc-title)

Now that you have a test subscription, you can trigger the renewal payment.

There are two options to carry this out:

- The “Process renewal” action in the “Edit Subscription” screen
- Manually triggering the scheduled action that processes the scheduled subscription payment

### “Process Renewal” Admin Action

[↑ Back to top](#doc-title)

The “[Process Renewal](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/update-an-existing-subscription/#process-a-renewal)” action is the simplest method to test a renewal payment. You can take this action on the “edit subscription” screen.

When you process a renewal on a subscription using automatic payments, the subscription goes through the entire [renewal process](https://woocommerce.com/document/subscriptions/renewal-process/#the-renewal-process), including charging the assigned payment method and emailing the subscriber.

**Note:** The process renewal option only displays if:

- The subscription has a status of *active*
- The subscription uses a payment method that supports [payment date changes](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features)

### Subscription Payment Scheduled Action

[↑ Back to top](#doc-title)

A more technical option is to manually run the scheduled action that triggers the subscription payment. To do this:

1. Visit your site’s administration dashboard.
2. Go to **Tools > Scheduled Actions**.
3. In the search box, enter the ID of your test subscription. Click the search button.
4. Find the row with the hook **woocommerce_scheduled_subscription_payment** and the status **pending**.
5. Hover over the row to reveal the options, and click **Run**.

Once you successfully triggered the renewal payment, and it processed correctly with [an automatic renewal method](https://woocommerce.com/document/subscriptions/renewal-process/#manual-vs-automatic-renewals), you will see new pending **woocommerce_scheduled_subscription_payment** action created for the next payment.

![Scheduled Actions admin screen pointing to the `woo_scheduled_subscription_payment` hook.](https://woocommerce.com/wp-content/uploads/2014/05/scheduled-action-administration-screen.png?strip=all&w=704)

## Troubleshooting Issues with Subscription Renewals

[↑ Back to top](#doc-title)

### Automatic Renewal Payments not Starting

[↑ Back to top](#doc-title)

If there are subscriptions that appear to be active but display a renewal date in the past, it is likely due to a Cron issue on your site. These subscriptions will show a “Subscription payment overdue.” warning notice in the admin’s list view at **WooCommerce > Subscriptions**.

![The warning notice appears when you hover your mouse over a red icon that is displayed in the admin view.](https://woocommerce.com/wp-content/uploads/2014/05/overdue-subscription-payment-WooCommerce-Subscriptions.png?strip=all&w=704)Warning in the admin area of overdue subscription payment.

Follow these steps to troubleshoot the problem:

1. Verify that WP Cron is enabled. You can do this by accessing the status report in your WordPress admin area under **WooCommerce > Status > System Status**. If WP Cron is disabled, you need to [re-enable it](https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/#debugging-wp-cron).

![WordPress cron status within the WooCommerce System Status Report](https://woocommerce.com/wp-content/uploads/2023/07/Screenshot-2023-07-13-at-5.17.13-PM.png?w=650)

1. After confirming cron is enabled, and your payment gateway allows changes, try changing the next payment date of the subscription to one hour from now.
2. This triggers a new scheduled action to process a future renewal. If subscription renewals still do not process, please consult the [Complete Guide to Scheduled Events with Subscriptions](https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/) to further troubleshoot WP Cron and scheduled events.

### Diagnosing Stalled Renewal Payments

[↑ Back to top](#doc-title)

A stalled renewal is when an *automatically-renewing* subscription tries to renew but has an error and stalls somewhere in the process, leaving the subscription on hold and the renewal unfinished – sometimes capturing the payment, but not always. Generally what causes this issue is an error during the renewal process that prevents payment from successfully posting, so the subscriptions stay on hold. The error can be with the payment itself, or it can be caused by a plugin or theme conflict in some cases.

When trying to diagnose stalled renewals, it’s best to choose a single example subscription and trace the issue from there.

#### Look for clues

Here’s a list of places to start looking for clues as to where the errors are originating:

- **Order notes:** Check the notes on both the subscription and the renewal order to make sure it isn’t just a normal failed payment due to an issue with the customer’s card or insufficient funds, check if there are unusual notes, any payment gateway error messages, or any notes that seem out of place.
- **WooCommerce Logs:** Go to **WooCommerce > Status > Logs** and check for a WooCommerce fatal error log, or if you had logging enabled for the payment gateway, review those logs to see if any errors are recorded.
- **Failed Scheduled Actions:** Check the comments of failed scheduled actions to see if the error or stack trace was recorded there.
- **Plugins list:** Check for outdated plugins that may interact with the order flow in WooCommerce, or extend the functionality of WooCommerce Subscriptions. Sometimes stalled payments are caused by plugin or theme conflicts.
- **Debug log (if enabled):** If you’d enabled debug logging in WordPress prior to the issue occurring, check 
```
wp-content/debug.log
```

 via FTP or File Manager to see if any errors were recorded during the failed renewal. If your server settings allow, these logs may also be viewable directly in the browser at 
```
yourdomain.com/wp-content/debug.log
```

.
- **PHP Server Logs:** If no clues are found elsewhere, consider checking the server-level PHP error logs. These logs are often accessible through your hosting control panel or may require a request to your hosting provider, and can sometimes reveal issues not captured by WordPress or plugin-level logging.

Depending on the clues you find, your resolution may involve correcting payment gateway settings, asking the customer to update their card information, or performing [a conflict test](https://woocommerce.com/document/how-to-test-for-conflicts/).

**Ideally, perform any conflict testing in a staging environment**. Read here for details about [How WooCommerce Subscriptions handles staging sites](https://woocommerce.com/document/subscriptions-handles-staging-sites/)

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

