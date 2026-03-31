# Subscription Emails

*Category from WooCommerce Subscriptions documentation*

---

## Subscription emails

**Source:** [https://woocommerce.com/document/subscriptions/subscription-emails/](https://woocommerce.com/document/subscriptions/subscription-emails/)

# Subscription emails

			WooCommerce Subscriptions communicates with you and your customers via email about specific subscription-related events. This document explains the emails added too WooCommerce by WooCommerce Subscriptions, and some ways to add additional custom emails if you need.

Similar to [WooCommerce emails](https://woocommerce.com/document/configuring-woocommerce-settings/emails/#email-notifications), you can customize, enable or disable, and configure recipients for subscription related emails. You can customize subscription emails along with the other emails for your WooCommerce store at: **WooCommerce > Settings > Emails**.

WooCommerce Subscriptions includes the following emails:

- [Renewal Order Emails](#renewal-order-emails)
- [Failed Payment Retry Emails](#failed-payment-retry-emails)
- [Subscriptions Status and Switch Emails](#subscription-status-and-switch-emails)

WooCommerce Subscriptions doesn’t have a built-in option to send pre-renewal reminder emails or other custom emails, but many [add-on solutions](#additional-subscription-emails) exist for sending other custom emails related to the subscription lifecycle, like “Upcoming Renewal” reminder emails.

### Renewal order emails

[↑ Back to top](#doc-title)

These emails keep shop managers and subscribers informed about the status of renewal orders.

- **New Renewal Order**: Sent when a subscription renewal payment is processed. Sent to store manager by default, you could also send this email to fulfillment or drop shipping companies.
- **Processing Renewal Order**: Sent to the subscriber when payment has been processed for a subscription now awaiting fulfillment for that billing period. Payment can be a manual payment on a renewal invoice or an automatically charged recurring payment.
- **Completed Renewal Order**: Sent to the subscriber when the subscription renewal order is marked complete, indicating that an item for the renewal period has been shipped.
- **Customer Renewal Invoice**: Sent to the subscriber when their subscription is due for renewal and the renewal requires a manual payment. This can be because the subscription uses manual renewal payments, or if the automatic recurring payment failed. The email contains renewal order information and a link to make payment, similar to the [standard order details email](https://woocommerce.com/document/managing-orders/paying-for-orders/#pay-for-order-email-link).

### Failed payment retry emails

[↑ Back to top](#doc-title)

*These emails are* *only sent when the Failed Recurring Payment Retry System is enabled.*

- **Customer Payment Retry**: Sent to the subscriber when an attempt to automatically process a subscription renewal payment has failed and a [retry rule](https://woocommerce.com/document/subscriptions/failed-payment-retry/#retry-rules) has been applied to retry the payment in the future. The email contains the renewal order information, date of the scheduled retry and payment links to allow the customer to pay for the renewal order manually instead of waiting for the automatic retry.
- **Payment Retry**: Sent when an attempt to automatically process a subscription renewal payment has failed and a retry rule has been applied to [retry the payment](https://woocommerce.com/document/subscriptions/failed-payment-retry/) in the future. Sent to the store manager by default.

### Subscription status and switch emails

[↑ Back to top](#doc-title)

These emails keep shop managers informed about subscriptions being paused, cancelled, reaching their end date, or being [switched](https://woocommerce.com/document/subscriptions/switching-guide/).

- **Suspended Subscription**: Sent when a customer manually suspends their subscription from the **My Account** page. Sent to the store manager by default.
- **Expired Subscription**: Sent when a subscription reaches the end of its term and its status is changed to *expired*. Sent to the store manager by default.
- **Cancelled Subscription**: Sent when a subscription has been canceled by the customer (at the time when they click ‘cancel’) or store manager. Sent to the store manager by default.
- **Subscription Switched**: Sent when a subscriber [switches their subscription](https://woocommerce.com/document/subscriptions/switching-guide/) from the *My Account* page. Sent to the store manager by default.
- **Subscription Switch Complete**: Sent to the subscriber when they successfully [switch a subscription](https://woocommerce.com/document/subscriptions/switching-guide/). Orders that switch subscriptions receive this email instead of the WooCommerce *Completed Order* email.

### Additional subscription emails

[↑ Back to top](#doc-title)

If you want to send other emails, such as a pre-renewal reminder email before a recurring payment will be processed, there are a variety of solutions that can be used to send additional subscription-related emails:

- The [AutomateWoo](https://woocommerce.com/products/automatewoo/) extension: with an action to send an email (or SMS), AutomateWoo’s [Subscriptions’ Integration](https://woocommerce.com/document/automatewoo/integrations/#woocommerce-subscriptions) can be used to notify customers on a variety of subscription related events. Learn more in the AutomateWoo documentation on [subscription triggers](https://woocommerce.com/document/automatewoo/triggers/list/#subscriptions).
- [Metorik](https://metorik.com/): as part of [Engage](https://metorik.com/features/engage), Metorik makes it possible to send many subscription related emails using segmentation. For more information, refer to the documentation on [Engage](https://help.metorik.com/category/57-engage).
- [Enhancer for WooCommerce Subscriptions](https://woocommerce.com/products/enhancer-for-woocommerce-subscriptions/) includes the Auto Renewal Reminder feature which will allow you to send a reminder email before a renewal occurs
- [Renewal Reminders](https://wordpress.org/plugins/subscriptions-renewal-reminders/) is a 3rd-party free plugin which allows you to send your subscribers a Renewal notifications by Emails X days before their subscription ends. This plugin only works with Woo Subscriptions plugin.

Have problems with email not being received? See the [WooCommerce Email Troubleshooting Guide](https://woocommerce.com/document/email-faq/).

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

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

