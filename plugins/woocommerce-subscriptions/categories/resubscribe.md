# Resubscribe

*Category from WooCommerce Subscriptions documentation*

---

## Subscriptions Resubscribe Guide

**Source:** [https://woocommerce.com/document/subscriptions/resubscribe/](https://woocommerce.com/document/subscriptions/resubscribe/)

# Subscriptions Resubscribe Guide

			WooCommerce Subscriptions includes a feature to allow customers to resubscribe to subscriptions that are *expired* or *cancelled*. A resubscribe is a special type of [subscription renewal](https://woocommerce.com/document/subscriptions/renewal-process/) that applies only to a subscription that has ended.  This guide covers the unique differences that apply to subscriptions which use the resubscribe process.

## How Resubscribes Work

[↑ Back to top](#doc-title)

Resubscribing allows a customer to extend their old subscription’s terms into a new subscription right from their [“My Account” page](https://woocommerce.com/document/subscriptions/customers-view/#my-account-pages).

After a customer’s subscription has *expired* or been *cancelled*, they can create a *new* subscription which extends the old subscription’s terms by [resubscribing from the My Account page](https://woocommerce.com/document/subscriptions/customers-view/#my-account-pages).

Resubscribing to a subscription that ended will create a new subscription for the same product or products; but it does not have the same behavior as purchasing a new subscription, or [renewing a subscription](https://woocommerce.com/document/subscriptions/renewal-process/).

### Free Trials on Resubscribe

[↑ Back to top](#doc-title)

If the subscription has a free trial, the **customer will not receive the free trial again** when resubscribing. If you want to offer your customer’s a second free trial, you could provide them with a [limited payments coupon](https://woocommerce.com/document/subscriptions/subscriptions-coupons/limited-payment-coupon-guide/) to discount the price instead.

### Product Price Changes

[↑ Back to top](#doc-title)

If the prices for any product line items on the subscription have changed, the **customer’s new subscription will continue to have the original, older prices**.

For example, consider a product which had a price of $10/month, but has since had a price increase to $12/month.

If the customer is purchases the product for the first time, the charge is $12 month. However,  if the customer resubscribes to their expired or cancelled subscription, the charge is $10/month.

You can manually modify the prices of existing subscriptions through the [Edit Subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/) page. For [automating price changes](https://woocommerce.com/document/automatewoo/examples/bulk-update-subscription-prices/#bulk-update-resubscribe-prices), you can use the [AutomateWoo](https://woocommerce.com/products/automatewoo/) extension.

### Resubscribing with Coupons

[↑ Back to top](#doc-title)

If the original subscription has coupons applied to discount the recurring cost, those coupons won’t apply automatically upon resubscribing. You can manually apply either the existing coupons or other coupons during the resubscribe process using the normal [Cart -> Checkout process](https://woocommerce.com/document/subscriptions/customers-view/subscribers-resubscribe-guide/).

This prevents issues with applying coupons that have expired or are otherwise restricted, such as reaching their usage limits.

This also provides a better customer experience. It causes less friction for a customer to apply a coupon during checkout or for a store owner to add a discount after sign-up than it is to remove an unintended discount or coupon applied by a customer afterward.

If you want to provide coupons automatically to users when they resubscribe, [AutomateWoo](https://woocommerce.com/products/automatewoo/) might be a good option. Here’s how:

1. Create an automated email that includes [a resubscribe coupon.](https://woocommerce.com/document/automatewoo/variables/personalized-coupons/)
2. Set the email to trigger when a customer resubscribes to a subscription.

### Sign-up Fees on Resubscribe

[↑ Back to top](#doc-title)

If the subscription has a sign-up fee, the customer doesn’t pay the sign-up fee again to resubscribe.

The exception to this is when the subscription has a **$0 recurring total**. Subscriptions assumes you are shipping physical products on a different schedule to the payment schedule and using the sign-up fee to charge the full amount of the subscription up front.

### Billing Schedule after Resubscribing

[↑ Back to top](#doc-title)

If a subscription is *cancelled* or *expired*, the **billing schedule for the new subscription is the date the customer resubscribes**.

For example, a customer has a $10/month subscription renewing on the 1st of the month and it expires after 6 months. If the customer waits until the 5th to resubscribe to the subscription, the next renewal will be process on the 5th of the following month. Each renewal after that will also process on the 5th.

### Billing Schedule for Subscriptions Pending Cancellation

[↑ Back to top](#doc-title)

If the subscription’s status is *pending cancellation*, the **billing schedule for the new subscription is based on the pre-paid term of the existing subscription**.

For example, a customer has a $10/month subscription renewing on the 1st of the month. If they cancel on 15th of the month, the subscription will have the *pending cancellation* status until the 1st of the next month, which is the end of their pre-paid term.

If the customer waits until the 25th of the month to resubscribe to the subscription, **the next renewal will process** **on the 1st day of the following month as that is the end of the prepaid term**. Each renewal after that will also process on the 1st.

If a customer subscribes, cancels, and then decides to resubscribe before the next recurring payment, this doesn’t change the billing schedule.

For example, a customer has a subscription that renews on the 1st of every month. They decide to cancel on 15 July. This will set their subscription status to [pending-cancellation](https://woocommerce.com/document/subscriptions/statuses/#pending-cancellation-subscription-status). This means they remain a subscriber with full benefits until the next recurring payment. When that period ends, they aren’t charged, and their subscription is fully cancelled. But let’s imagine on the 20th they decide to resubscribe. Their next recurring payment would be on the 1st of August.

Further Reading: 

- To learn more about how the old and new subscription are related to the order created to record the resubscribe, refer to the section in the [Subscription Orders document on Resubscribe Orders](https://woocommerce.com/document/subscriptions/orders/#resubscribe-orders).
- To understand what the resubscribe process looks like from your customers’ perspective, refer to the [Subscribers View > Resubscribe](https://woocommerce.com/document/subscriptions/customers-view/) document.

					
		
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

