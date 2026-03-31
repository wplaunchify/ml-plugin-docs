# Statuses

*Category from WooCommerce Subscriptions documentation*

---

## Subscriptions Status Guide

**Source:** [https://woocommerce.com/document/subscriptions/statuses/](https://woocommerce.com/document/subscriptions/statuses/)

# Subscriptions Status Guide

			In the same way that WooCommerce applies an [order status](https://woocommerce.com/document/managing-orders/order-statuses) to indicate the current state of an order during its life-cycle, WooCommerce Subscriptions applies a status to a [subscription](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/).

This guide details each status, explains when it is applied, and what it represents.

## Pending Subscription Status

[↑ Back to top](#doc-title)

When a subscription is first created, it will have the *Pending* status.

The status is best observed when a [store owner manually adds a subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/), and indicates that the system has created the subscription, but has not processed any payments on it.

In theory, the status also applies when a customer creates a subscription, but it’s only visible for the second or two between when payment is submitted and confirmation is received.

## Active Subscription Status

[↑ Back to top](#doc-title)

After the initial subscription payment processes (if it requires payment), the subscription transitions to *Active*.

This status indicates the subscription will [renew](https://woocommerce.com/document/subscriptions/renewal-process/) or expire at a given time in the future. When a subscription is *Active*, the user connected with it receives the [default subscriber role](https://woocommerce.com/document/subscriptions/store-manager-guide/#role-settings) and may gain special access through other extensions, like [WooCommerce Memberships](https://woocommerce.com/products/woocommerce-memberships/). When a subscription is activated, Subscriptions also calculates the next payment date if it’s not already set.

## On-Hold Subscription Status

[↑ Back to top](#doc-title)

A subscription displays as *On-Hold* when an associated order is awaiting payment, or when the store owner or customer manually suspends it.

A subscription can remain *On-Hold* indefinitely. If manually suspended, the subscription requires manual reactivation. If suspended while awaiting payment, it automatically reactivates once the payment processes.

When a subscription is*On-Hold*, WooCommerce assigns the user associated with it the default inactive role, and other extensions, like [WooCommerce Memberships](https://woocommerce.com/products/woocommerce-memberships/), may no longer grant them special access.

## Pending-Cancellation Subscription Status

[↑ Back to top](#doc-title)

When a customer manually cancels a subscription, its status typically does not immediately transition to *Cancelled*. If the subscription has a pre-paid term that has not yet been fulfilled, it’s assigned *Pending-Cancellation*.

During this time, the user associated with the subscription retains the [subscriber role](https://woocommerce.com/document/subscriptions/store-manager-guide/#role-settings) and may still receive special access from other extensions, such as WooCommerce Memberships.

When the pre-paid term ends, the subscription’s status transitions to *Cancelled*.

## Cancelled Subscription Status

[↑ Back to top](#doc-title)

Subscriptions that reach the end of their pre-paid term (if applicable) transition to *Cancelled*. Once *cancelled* the user associated with the subscriptions moves to the default inactive user role and other extensions, like WooCommerce Memberships, may no longer grant special access. Neither customers nor store managers can reactivate cancelled subscriptions. Instead, customers need to manually create a new subscription or repurchase the subscription product.

## Expired Subscription Status

[↑ Back to top](#doc-title)

WooCommerce assigns the *Expired* status when a subscription reaches its [end date](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#set-a-billing-schedule). This end date may come from the product’s [defined subscription length](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#set-a-billing-schedule) or from [manual settings](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#modifying-an-existing-subscription) on the subscription itself. When a subscription expires, the system assigns the default inactive role to the associated user. Additionally, other extensions like [WooCommerce Memberships](https://woocommerce.com/products/woocommerce-memberships/) may revoke their special access.

You cannot reactivate subscriptions with the *Expired* status. Customers must [manually create a new subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/) or repurchase the subscription product to regain access.

##

					
		
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

