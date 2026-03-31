# Troubleshooting Framework

*Category from WooCommerce Subscriptions documentation*

---

## Troubleshooting Framework for WooCommerce Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/troubleshooting-framework/](https://woocommerce.com/document/subscriptions/troubleshooting-framework/)

# Troubleshooting Framework for WooCommerce Subscriptions

			When subscription issues arise on your store, having a systematic approach to troubleshooting will help you identify and resolve problems quickly. This guide provides a three-step framework that will help you diagnose subscription issues effectively, whether you’re dealing with renewal problems, payment failures, or unexpected subscription behavior.

By following these three steps in order, you’ll gather the information needed to understand what went wrong and how to fix it.

## The three-step troubleshooting process

[↑ Back to top](#doc-title)

1. **Understand the Anatomy of a Subscription** – Review how your specific subscription is structured and configured
2. **Determine What Should Happen** – Establish the expected behavior based on your setup
3. **Create a Timeline** – Document what actually occurred to identify where things went wrong

Once you’ve diagnosed and resolved the issue, if renewal payments have been impacted, see our documentation on [fixing subscriptions that have been affected by action scheduler issues](https://woocommerce.com/document/subscriptions/scheduled-action-errors/#diagonising-and-fixing-affected-subscriptions).

## Understand the anatomy of a subscription

[↑ Back to top](#doc-title)

Before troubleshooting a subscription issue, you’ll want to understand how a subscription works. All subscriptions share common components, but different payment methods and configurations can affect how they behave.

### Key subscription components

[↑ Back to top](#doc-title)

Every subscription contains essential information that determines how it functions. When viewing a subscription in your WordPress admin, you’ll find these critical details:

**Payment Method Information**
The payment method shows you which payment gateway is configured processes the subscription’s payments. Click the Edit (pencil) icon next to Billing Details to see specific payment tokens for tokenized subscriptions (this will depend on your payment gateway).

![](https://woocommerce.com/wp-content/uploads/2025/06/image_e360f7.png?w=980)

**Billing Schedule**
The [Billing Schedule section](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#set-a-billing-schedule) displays how frequently the subscription renews, when the next payment is due, when the subscription ends, and whether it includes a free trial period.

![](https://woocommerce.com/wp-content/uploads/2025/06/image.png?strip=all&w=704)

**Important:**

If you cannot edit the Billing Schedule section, your payment gateway controls the billing schedule rather than WooCommerce Subscriptions. This affects how renewals are processed.

**Subscription Notes**
Like WooCommerce orders, subscription notes contain the complete history of everything that has happened with the subscription. These notes are essential for understanding the subscription’s lifecycle.

![](https://woocommerce.com/wp-content/uploads/2025/06/woo-subscriptions-notes@2x.png?w=980)

**Related Orders**
This section shows all orders associated with the subscription, including the initial purchase and all renewal orders. You can navigate between related orders and the subscription using this section.

![](https://woocommerce.com/wp-content/uploads/2025/06/woo-subscriptions-related-orders@2x.png?w=980)

### Scheduled Actions

[↑ Back to top](#doc-title)

Subscriptions use scheduled actions to automate renewal payments, expirations, and for other lifecycle events. See the [Complete Guide to Scheduled Events with Subscriptions](https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/#scheduled-events-with-woocommerce-subscriptions) for details.

**Viewing Scheduled Actions**
You can view your site’s scheduled actions at **Tools > Scheduled Actions** or **WooCommerce > Status > Scheduled Actions**. Search by subscription ID to see all actions related to a specific subscription.

### Different types of subscriptions

[↑ Back to top](#doc-title)

Not all subscriptions work the same way. The payment method determines many aspects of how your subscription functions:

**Action Scheduler-Powered Subscriptions**
These subscriptions use WordPress scheduled actions and allow you to edit the billing schedule. Most tokenized payment methods work this way.

**Gateway-Controlled Subscriptions**
These subscriptions have their billing schedule controlled by the payment gateway. The gateway tells your site when to create renewal orders rather than your site controlling the timing.

### Advanced: Testing subscription scenarios

[↑ Back to top](#doc-title)

If you’re unsure how a particular subscription setup should behave, create a test scenario on a staging site or test environment. This approach helps you understand expected functionality without affecting live customer subscriptions.

1. Set up the same product configuration as the problematic subscription
2. Use the same payment method
3. Complete a test purchase
4. Observe the subscription behavior and compare it to your live issue

WooCommerce Subscriptions has some built-in behavior around staging sites that is important to understand for testing of automatic payments. See [How Subscriptions Handles Staging Sites and Migrations](https://woocommerce.com/document/subscriptions/subscriptions-handles-staging-sites/).

### How subscriptions work in your database

[↑ Back to top](#doc-title)

You generally will not need to, but in advanced cases understanding how subscription data is stored can help you troubleshoot more complex issues. Subscriptions are stored similarly to WooCommerce orders but with some important differences.

**Basic Structure**

- Subscriptions are a custom WordPress post type called 
```
shop_subscription
```
- Data is stored in your WordPress 
```
_posts
```

 and 
```
_postmeta
```

 tables – this data is tied to the subscription ID.
- Product information is handled the same way as in order item data
- Consistently, you will find 
```
_payment_method
```

, 
```
_payment_method_title
```

 and 
```
_requires_manual_renewal
```

 data for all subscriptions.
- Renewal orders are associated with a subscription via their Order ID.
- Payment method information for the *whole subscription* is stored in the 
```
postmeta
```

 table connected to the subscription ID. Depending on the payment gateway, you will find different things here, but everything is well-named and you can generally tell by the name what you’re looking at.

**Relationship Between Orders and Subscriptions**

It’s important to understand [the relationship between Subscriptions and their Orders](https://woocommerce.com/document/subscriptions/orders/)

- When someone buys a subscription, WordPress creates a parent order first
- The subscription is then created as a copy of that parent order
- Renewal orders are created as copies of the subscription at renewal time
- The subscription is associated with the parent order in the subscription’s 
```
_posts
```

 data. The parent order will be set as the 
```
post_parent
```

 for the subscription.

## Determine what should happen

[↑ Back to top](#doc-title)

Many subscription “issues” turn out to just be misunderstandings about how subscriptions should work. Before diving into complex troubleshooting, establish what is expected to happen in your specific situation.

### Factors that affect expected behavior

[↑ Back to top](#doc-title)

Several factors determine how your subscription should behave. Review this information before proceeding:

**Product Configuration**

- Subscription price and billing period
- Trial period settings
- Sign-up fees
- Product limitations or special settings

**Payment Method**

- Which payment method the subscription is configured to use
- Whether the payment method uses tokenized payments
- Any gateway-specific subscription features

**Additional Plugins**
Some plugins modify subscription behavior:

- Subscription add-ons and extensions
- Any customizations or subscription modifications on your site
- Third-party plugins or integrations that interact with subscriptions

### Subscription creation process

[↑ Back to top](#doc-title)

Understanding how subscriptions are created helps diagnose creation-related issues.

**The Standard Process**

1. Customer completes checkout with a subscription product
2. WordPress creates a parent order
3. A subscription is created as a snapshot of the parent order
4. Future renewal orders are created as snapshots of the subscription

**What This Means**

- The subscription should match the parent order (for subscription products)
- Renewal orders should match the subscription at the time of renewal
- If these don’t match, something unexpected occurred

There are things that can change a subscription after the fact (e.g. subscription switching, admin edits, AutomateWoo workflows, or custom code), but, excepting those things, the subscription should be a match of the parent order as far as the subscription products are concerned.

**Note:**

The [Mixed checkout setting](https://woocommerce.com/document/subscriptions/store-manager-guide/#mixed-checkout) may allow the Parent Order to contain a non-subscription product that is only part of the initial purchase and not copied over to the subscription.

### Renewal process expectations

[↑ Back to top](#doc-title)

Renewal expectations depend heavily on your payment method. See our full documentation on [the subscription renewal process](https://woocommerce.com/document/subscriptions/renewal-process/) for details

### Subscription switching expectations

[↑ Back to top](#doc-title)

Subscription switching (upgrading, downgrading, or changing products) follows specific rules based on pricing. Reference the [Subscription Switching Guide](https://woocommerce.com/document/subscriptions/switching-guide/) for specifics.

**Switch Logs**
Every subscription switch generates a detailed log file. Find these logs at **WooCommerce > Status > Logs** under 
```
wcs-switch-cart-items
```

. These logs contain valuable information about what happened during the switch.

## Create a timeline

[↑ Back to top](#doc-title)

Once you understand your subscription structure and expected behavior, create a chronological timeline of what actually happened. This timeline helps you identify exactly where and when things went wrong.

### Information sources for your timeline

[↑ Back to top](#doc-title)

Gather information from multiple sources to build a complete picture:

**Subscription Notes**
Every significant event in a subscription’s lifecycle is recorded in the subscription notes. These notes include timestamps and detailed descriptions of what occurred.

**Order Notes**
Each related order (parent order and renewal orders) has its own set of notes. These provide additional context about payment processing and order status changes.

**Scheduled Action Logs**
These logs show when automated events were scheduled, executed, or failed.

**Server Error Logs**
Fatal errors or other technical issues may appear in your server’s error logs. Check your hosting provider’s error logs during the timeframe of the issue.

**WooCommerce Logs**
Check **WooCommerce > Status > Logs** for subscription-related logs, payment gateway logs, and other relevant information.

### Building your timeline

[↑ Back to top](#doc-title)

Create a chronological record that includes:

**Essential Timeline Elements**

- Exact timestamps for each event
- Clear description of what happened
- Relevant subscription and order IDs
- Customer information (when relevant)
- Any error messages or unusual behavior

**Timeline Format**
Use a simple format that’s easy to follow:

| Timestamp | Description |
| --- | --- |
| 2025-01-15 10:30:00 | Subscription #1234 created from Order #5678 |
| 2025-01-15 10:31:00 | Payment processed successfully via Stripe |
| 2025-02-15 09:00:00 | Renewal scheduled action triggered |
| 2025-02-15 09:02:00 | Renewal Order #5679 created |
| 2025-02-15 09:03:00 | Payment attempt failed – card declined |

### Analyzing your timeline

[↑ Back to top](#doc-title)

**Look for Gaps**
Missing events in your timeline often indicate where problems occurred. For example, if a renewal was scheduled but no renewal order was created, the issue likely occurred during the order creation process.

**Compare Against Expectations**
Cross-reference your timeline with the expected behavior you determined in Step 2. Identify specific points where actual events diverged from expected events.

**Identify Patterns**
If you’re dealing with multiple affected subscriptions, look for common patterns in your timelines. Similar issues often have similar root causes.

### Next steps after timeline analysis

[↑ Back to top](#doc-title)

**Issue Located**
If your timeline reveals the specific point where things went wrong, you can focus your troubleshooting efforts on that particular process or time period.

**Timeline Matches Expectations**
If your timeline shows everything working as expected, the issue may be a misunderstanding of expected functionality rather than a technical problem.

**Multiple Issues**
If you discover multiple different problems in your timeline, prioritize addressing them in chronological order or tackle the most critical issues first.

## Troubleshooting specific subscription types

[↑ Back to top](#doc-title)

Depending on the payment gateway you’re using, [different subscriptions features will be available](https://woocommerce.com/document/subscriptions/payment-gateways/), which may require different troubleshooting approaches. Along with the three main steps, refer to these specific guidelines based on your whether your payment gateway uses action scheduler for billing, or manages billing via comunication from the payment gateway’s servers.

### Subscriptions with Action Scheduler-powered billing

[↑ Back to top](#doc-title)

These subscriptions use WordPress scheduled actions for renewal payment automation.

**Common Issues**

- Missed renewal actions due to server problems
- Scheduled actions stuck in “pending” status
- Incorrect action scheduling after subscription changes

**Key Troubleshooting Points**

- Verify scheduled actions are running correctly
- Check that your [site’s cron system is functioning](https://woocommerce.com/document/subscriptions/requirements/)
- Ensure Action Scheduler is not [experiencing errors](https://woocommerce.com/document/subscriptions/scheduled-action-errors/)

### Subscriptions with payment gateway-controlled billing

[↑ Back to top](#doc-title)

These subscriptions have locked billing schedules controlled by the payment gateway.

**Common Issues**

- Webhook delivery failures
- Gateway and site subscription status mismatches
- Communication problems between gateway and your site

**Key Troubleshooting Points**

- Verify the subscription exists in your payment gateway’s system
- Check gateway webhook delivery and processing
- Confirm gateway-specific subscription settings

## Common Issues and Error Messages

[↑ Back to top](#doc-title)

Please refer to the [Common Issues and Error Messages](https://woocommerce.com/document/subscriptions/common-issues-and-error-messages-for-woocommerce-subscriptions/) guide.

## When you need additional help

[↑ Back to top](#doc-title)

Some subscription issues may require specialized expertise or access to systems you don’t control.

### Before seeking help

[↑ Back to top](#doc-title)

- Note any error messages or unexpected behavior
- Document your findings clearly
- Gather relevant subscription and order IDs

This systematic approach to subscription troubleshooting will help you resolve most common issues and provide valuable information when our support team or a developer is needed.

### For core WooCommerce Subscriptions issues:

[↑ Back to top](#doc-title)

Contact our support team when the plugin itself behaves unexpectedly. We’re always here to help diagnose and resolve issues within the core functionality.

### For payment gateway or extension issues

[↑ Back to top](#doc-title)

Contact the support team for your specific payment gateway or extension. If you purchased the extension from WooCommerce.com, our contact form will automatically route your request to the right team when you select the product.

### For cron and Action Scheduler issues

[↑ Back to top](#doc-title)

If you find in your System Status Report [that fsockopen/cURL are not enabled](https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/#things-to-check), contact your web host and ask them to enable these on your server.

### For customizations or bespoke integrations

[↑ Back to top](#doc-title)

Work with a developer, ideally the one who created the customization. Our support team are unable to provide support for customizations under our [Support Policy](https://woocommerce.com/support-policy/#customization).

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

