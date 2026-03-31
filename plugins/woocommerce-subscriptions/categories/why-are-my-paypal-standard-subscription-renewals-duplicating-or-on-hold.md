# Why Are My Paypal Standard Subscription Renewals Duplicating Or On Hold

*Category from WooCommerce Subscriptions documentation*

---

## Troubleshooting Duplicate PayPal Standard Subscription Renewals

**Source:** [https://woocommerce.com/document/subscriptions/why-are-my-paypal-standard-subscription-renewals-duplicating-or-on-hold/](https://woocommerce.com/document/subscriptions/why-are-my-paypal-standard-subscription-renewals-duplicating-or-on-hold/)

# Troubleshooting Duplicate PayPal Standard Subscription Renewals

			If your site is experiencing duplicate PayPal Standard subscription renewals or renewal orders are appearing as “On Hold” or “Pending Payment,” this guide will help you identify and resolve the most common cause: automatic order completion before payment confirmation. Follow the steps below to diagnose and address this issue.

## Symptoms:

[↑ Back to top](#doc-title)

- A subscription renewal is processed immediately after the subscription is purchased – Parent Order, immediate subscription renewal. This usually appears as duplicate orders.
- The Parent Order status is **Complete**
- The subscription renewal order status is sometimes **Pending Payment****and sometimes **Processing**
- If **Pending Payment***,*the subscription is placed **On Hold**

## Steps:

[↑ Back to top](#doc-title)

- Are the affected subscriptions PayPal Standard? (They almost certainly will be.)
- On the Parent Order, does the order status change to *Completed* **before** payment confirmation arrives back at the site?
- If so, this indicates that auto-complete functionality—**meaning a plugin or other customization that automatically completes orders**—is running on the site. This is likely what’s causing the duplicate order behavior.

Once you’ve diagnosed the problem, the solution is to locate and disable the auto-complete functionality on the site.

## Technical explanation:

PayPal Standard subscriptions work differently than [Action Scheduler-powered subscriptions](https://woocommerce.com/document/subscriptions/troubleshooting-framework/#action-scheduler-powered-subscriptions).

With PayPal Standard, when the IPN confirmation of payment comes through from PayPal, Subscriptions:

- Checks if a Parent Order exists and is marked as paid
- If the Parent Order isn’t marked as paid, it marks it as paid
- If the Parent Order is marked as paid too early, it assumes the payment is a renewal order and triggers the creation of a *new*renewal order…
- But then the payment confirmation is written to the Parent Order, because that’s where it belongs, and the newly created renewal order remains in **Pending Payment**

In general, sites should not alter how subscriptions manages order statuses to avoid unexpected behavior.

If you are still experiencing issues with your PayPal Standard subscriptions, check out our relevant [Troubleshooting Framework](https://woocommerce.com/document/subscriptions/troubleshooting-framework/troubleshooting-framework-for-paypal-standard-subscriptions/).

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

