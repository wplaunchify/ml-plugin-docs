# Troubleshooting Framework For Paypal Standard Subscriptions

*Category from WooCommerce Subscriptions documentation*

---

## Troubleshooting Framework for PayPal Standard Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/troubleshooting-framework-for-paypal-standard-subscriptions/](https://woocommerce.com/document/subscriptions/troubleshooting-framework-for-paypal-standard-subscriptions/)

# Troubleshooting Framework for PayPal Standard Subscriptions

			Since WooCommerce version 5.5.0, [PayPal Standard is hidden for new installations](https://developer.woocommerce.com/2021/07/12/developer-advisory-paypal-standard-will-be-hidden-on-new-installs/). This change doesn’t affect existing stores. We strongly encourage everyone using PayPal standard to use the recommended [PayPal Payments](https://woocommerce.com/products/woocommerce-paypal-payments/) extension instead, which is our full-stack solution (credit card processing, PayPal checkout, subscriptions, pay later options, etc).

This documentation is for shops still using the legacy [PayPal Standard payment gateway](https://woocommerce.com/document/paypal-standard/) with [WooCommerce Subscriptions](https://woocommerce.com/document/subscriptions/), specifically subscriptions created without [reference transactions](https://woocommerce.com/document/subscriptions/payment-gateways/paypal-standard-subscriptions-guide/paypal-standard-reference-transactions/) enabled on the connected PayPal account. We call these **PayPal Standard subscriptions** throughout this doc.

In contrast, if Reference Transactions are enabled when a subscription is created using PayPal Standard, the resulting subscription is powered by Action Scheduler right on your WooCommerce site. For issues with **Reference Transaction subscriptions** please refer to our [Troubleshooting Framework for WooCommerce Subscriptions](https://woocommerce.com/document/subscriptions/troubleshooting-framework/) for help with this more common type of subscription.

**Still choosing a subscription gateway?**If you are considering which payment gateway to use with WooCommerce Subscriptions, PayPal Standard is **not recommended** due to [significant limitations](https://woocommerce.com/document/limitations-of-paypal-standard/) (even when [reference transactions are enabled)](https://woocommerce.com/document/limitations-of-paypal-standard/#enable-reference-transactions-on-your-paypal-account). We instead recommend checking out [WooPayments](https://woocommerce.com/products/woopayments/), [PayPal Payments](https://woocommerce.com/products/woocommerce-paypal-payments/), and reading our list of [subscription-compatible gateways](https://woocommerce.com/document/subscriptions/payment-gateways/).

### Telling PayPal Standard and Reference Transaction subscriptions apart

[↑ Back to top](#doc-title)

PayPal Standard allows a site to use WooCommerce Subscriptions with or without reference transactions enabled. This means a site using only PayPal Standard may have a mix of subscription types, some using Reference Transactions and others using PayPal Standard billing – each following their own rules. Here is how you can identify which is being used for a particular subscription:

- **Legacy PayPal Standard** **subscriptions** can be identified by an 
```
I-
```

 prefix in the PayPal Subscription ID.
- **Reference Transaction** **subscriptions** can be identified by the 
```
B-
```

 prefix in the PayPal Subscription ID.

## The Three-Step Troubleshooting Process for PayPal Standard Subscriptions

[↑ Back to top](#doc-title)

This process mirrors our [Troubleshooting Framework for WooCommerce Subscriptions](https://woocommerce.com/document/subscriptions/troubleshooting-framework/) but tailored to PayPal Standard subscriptions:

1. **Understand the Anatomy of a PayPal Standard Subscription** – Identify PayPal Standard subscriptions and review how your specific subscription is structured and configured.
2. **Determine What Should Happen** – Establish the expected behavior based on your setup including the expected events in a PayPal Standard subscription initial order and renewal.
3. **Create a Timeline** – Document what actually occurred to identify where things went wrong.

Once you’ve diagnosed and/or resolved the issue, or if you are still having trouble we have further troubleshooting docs specific to PayPal Standard subscriptions which may help:

- Check our [Why aren’t Subscriptions Cancelled or Suspended at PayPal](https://woocommerce.com/document/subscriptions-canceled-suspended-paypal/) page to troubleshoot mismatches between a subscription’s status in WooCommerce and in PayPal.
- Read about [PayPal Standard Subscriptions IPN Issues](https://woocommerce.com/document/debug-subscriptions-paypal-ipn-issues/) to understand and troubleshoot payment notification and confirmation problems.

## Step 1: The Anatomy of a PayPal Standard Subscription

[↑ Back to top](#doc-title)

PayPal Standard subscriptions use [gateway-controlled billing](https://woocommerce.com/document/subscriptions/troubleshooting-framework/#gateway-controlled-subscriptions), which is significantly different than the more flexible [Action Scheduler-powered subscriptions](https://woocommerce.com/document/subscriptions/troubleshooting-framework/#action-scheduler-powered-subscriptions) which are created for virtually all other payment gateways. This means that when troubleshooting PayPal Standard subscriptions, you can ignore most of what you know about how WooCommerce Subscriptions works with other gateways.

The PayPal Standard subscription’s billing schedule and timeline are all controlled from the PayPal side. This means there are some critical differences between a PayPal Standard subscription and an Action Scheduler-controlled, tokenized subscription.

### Here’s what we see with a PayPal Standard subscription:

[↑ Back to top](#doc-title)

![Screenshot of the 'Edit Subscription' screen on a PayPal Standard subscription, with 3 areas highlighted:

- Under the Billing information, the PayPal Subscription ID line shows an ID starting with `I-`.
- The 'Schedule' metabox, which is locked to editing on this type of subscription.
- The Order Items metabox, showing that the line items, tax, and total areas are locked to editing on this type of subscription.](https://subscriptionsuniversity.files.wordpress.com/2022/02/markup-2022-01-17-at-15.36.20.png?w=1024)

1. PayPal Subscription ID beginning with 
```
I-
```
2. Billing schedule box locked to editing
3. Subscription line items, tax, total area locked to editing

#### Subscription notes for initial purchase follow this pattern:

![Screenshot of 4 order notes on a successful initial PayPal Standard subscription purchase, all in the same minute:

- IPN subscription sign up completed.
- IPN subscription payment completed.
- Payment status marked complete.
Status changed from Pending to Active.](https://subscriptionsuniversity.files.wordpress.com/2022/02/screenshot-on-2022-01-17-at-15-53-22.png?w=573)

#### Subscription notes for renewals follow this pattern:

![Screenshot of 5 order notes on a successful PayPal Standard renewal order, all in the same minute:

- Status changes from Active to On hold.
- Order #6478 created to record renewal.
- IPN subscription payment completed.
- Payment status marked complete.
- Status changes from On hold to Active.](https://subscriptionsuniversity.files.wordpress.com/2022/02/screenshot-on-2022-01-17-at-15-55-26.png?w=590)

The Parent Order should be completed via PDT and/or IPN. Renewal Order payments will always be completed via IPN.

## Step 2: Expected PayPal Standard Subscription Behavior

[↑ Back to top](#doc-title)

Here are the basics of how PayPal Standard works with WooCommerce Subscriptions. This process is quite technical, and it helps to have a decent grounding in how both [WooCommerce Subscriptions](https://woocommerce.com/document/subscriptions/) and [PayPal Standard](https://woocommerce.com/document/paypal-standard/) generally work:

1. **When a PayPal Standard subscription is initially purchased**:
1. The initial (parent) order and subscription are created in WooCommerce
2. Payment confirmation for the initial order is returned via either IPN (Instant Payment Notification) or PDT (Payment Data Transfer)
3. Confirmation of the billing agreement (the subscription on the PayPal side) is returned *only via IPN*
2. **When PayPal processes a renewal payment for the subscription**, PayPal sends an IPN confirmation to the site (renewals are always IPN, never PDT)
3. **When Subscriptions receives an IPN confirmation from PayPal, it:**
1. Checks for a matching subscription (via Subscription ID)
2. Checks for a paid Parent Order, previous renewal order, or null (no prior order indicated)
3. If it finds an unpaid Parent Order, it marks it paid
4. If it finds a paid Parent Order, previous renewal order, or null / no prior order, it assumes this payment confirmation is for a new renewal order
5. This triggers the creation of a subscription renewal order, which is then marked as paid
6. The displayed *Next Payment Date* for the subscription is recalculated accordingly

Notice that we don’t mention the Action Scheduler at all since it isn’t involved in PayPal Standard subscriptions. PayPal is entirely controlling the schedule and communicating renewals to the site via IPN confirmations.

**Note:**Other third party payment gateways may be designed to control the billing schedule for a subscription remotely like PayPal Standard can. Developers do this via their own integration coded into the gateway itself, not into the WooCommerce Subscriptions plugin code. If you need help with a different gateway which controls the billing schedule for a subscription this way, reach out to your payment gateway plugin’s developer for support.

## Step 3: Creating a PayPal Standard Subscription Timeline

[↑ Back to top](#doc-title)

When troubleshooting, it is helpful to make a timeline of what happened and compare it to what’s expected. This will often either 1) give you the answer or 2) give you a hint on where to look next for what went wrong.

### Information Sources for Your Timeline

[↑ Back to top](#doc-title)

Gather information from multiple sources to build a complete picture:

**Subscription Notes**
Every significant event in a subscription’s lifecycle is recorded in the subscription notes. These notes include timestamps and detailed descriptions of what occurred.

**Order Notes**
Each related order (parent order and renewal orders) has its own set of notes. These provide additional context about payment processing and order status changes.

**Server Error Logs**
Fatal errors or other technical issues may appear in your server’s error logs. Check your hosting provider’s error logs during the timeframe of the issue.

**WooCommerce Logs**
Check **WooCommerce > Status > Logs** for subscription-related logs, payment gateway logs, and other relevant information.

**PayPal Logs**
Both [transaction history](https://www.paypal.com/us/cshelp/article/how-do-i-view-and-download-statements-and-reports-help145) and [IPN history](https://www.paypal.com/us/cgi-bin/webscr?cmd=_display-ipns-history) are helpful to catch additional details that may not have made it back to your site.

**Note:**With PayPal Standard, you do not need to check Action Scheduler to construct your timeline.

### Building Your Timeline

[↑ Back to top](#doc-title)

Create a chronological record that includes:

**Essential Timeline Elements**

- Exact timestamps for each event
- Clear description of what happened
- Relevant subscription and order IDs
- Customer information (when relevant)
- Any error messages or unusual behavior

**Timeline Format**
Use a simple format that’s easy to follow. For PayPal Standard subscriptions, note where each event was logged helps you note where PayPal events do or don’t correspond with information on your site.

### Healthy PayPal Standard Subscription Timeline Example – monthly renewal:

[↑ Back to top](#doc-title)

PayPal Standard timelines are significantly more complex than a [standard subscription renewal timeline](https://woocommerce.com/document/subscriptions/troubleshooting-framework/#create-a-timeline). You can refer to this sample timeline to help know what to expect.

This is just a sample. Since the series of events may vary slightly based on factors such as PayPal’s processing and site configuration, the best way to get an accurate expected timeline for your own site is to create a test PayPal Standard subscription of your own! Nothing beats direct testing on your site.

| Timestamp | What | Where |
| --- | --- | --- |
| 01/17/2022 – 16:49 | Parent Order Created | Orders |
| 01/17/2022 – 16:50 | IPN subscription payment completed | Subscription notes, PayPal logs |
| 01/17/2022 – 16:50 | Payment status marked complete | Order notes, subscription notes, PayPal logs |
| 01/17/2022 – 16:50 | IPN subscription signup complete | Subscription notes, PayPal logs |
| 01/17/2022 – 16:50 | Subscription Status changed from Pending to Active | Subscription notes |
| 02/17/2022 – 14:13 | Subscription Status changed from Active to On Hold | Subscription notes |
| 02/17/2022 – 14:13 | Renewal order created | Orders, Subscription notes |
| 02/17/2022 – 14:13 | IPN subscription payment completed | Subscription notes, PayPal logs |
| 02/17/2022 – 14:13 | Payment status marked complete | Subscription notes, Order notes and status change |
| 02/17/2022 – 14:13 | Subscription Status changed from Active to On Hold | Subscription notes |

A successful PayPal Standard subscription renewal

**Note about timing:** IPN is *not an instantaneous payment method*. Therefore, you may see a significant delay (5-7 minutes) between creation of the Parent Order and payment confirmation coming back via IPN. Merchants **should not use plugins or custom code to auto-complete subscription orders** to compensate for this delay.

The creation of the renewal order, on the other hand, will appear to be instantaneous because the IPN is what initiates the order creation process. [It may or may not be at the same time of day as the Parent Order.](https://woocommerce.com/document/limitations-of-paypal-standard/#section-11)

### Next steps

[↑ Back to top](#doc-title)

Once your timeline is constructed, you can compare it to an expected timeline to see where things are breaking down. We have consolidated these instructions on our main [Subscriptions troubleshooting framework](https://woocommerce.com/document/subscriptions/troubleshooting-framework/):

- [Analyzing your timeline](https://woocommerce.com/document/subscriptions/troubleshooting-framework/#analyzing-your-timeline)
- [Next Steps After Timeline Analysis](https://woocommerce.com/document/subscriptions/troubleshooting-framework/#next-steps-after-timeline-analysis)
- [Troubleshooting Subscriptions with Payment Gateway-Controlled Billing](https://woocommerce.com/document/subscriptions/troubleshooting-framework/#gateway-controlled-subscriptions) and our additional troubleshooting pages specific to PayPal Standard:
- [Why aren’t Subscriptions Cancelled or Suspended at PayPal](https://woocommerce.com/document/subscriptions-canceled-suspended-paypal/)
- [PayPal Standard Subscriptions IPN Issues](https://woocommerce.com/document/debug-subscriptions-paypal-ipn-issues/)
- [When to seek additional help](https://woocommerce.com/document/subscriptions/troubleshooting-framework/#when-to-seek-additional-help)

This systematic approach to PayPal Standard subscription troubleshooting will help you understand this unique subscription type, diagnose most common issues, and provide valuable information if you need to contact our support team or a developer.

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

