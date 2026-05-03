# Develop

*Category from WooCommerce Subscriptions documentation*

---

## Introduction to Subscriptions Developer Documentation

**Source:** [https://woocommerce.com/document/subscriptions/develop/](https://woocommerce.com/document/subscriptions/develop/)

# Introduction to Subscriptions Developer Documentation

			This documentation is written for WooCommerce developers who want to extend or integrate with the [Woo Subscriptions plugin](https://woocommerce.com/products/woocommerce-subscriptions/). To follow this documentation, you need an advanced understanding of [PHP](https://php.net/) and [WordPress development](https://codex.wordpress.org/Developer_Documentation).

If you intend to support Subscriptions in your payment gateway extension, read this overview and then the [Payment Gateway Integration Guide](https://woocommerce.com/document/subscriptions/develop/payment-gateway-integration/).

If you are looking for a guide to creating and managing subscription products in a WooCommerce store, please refer to the [Store Manager Guide](https://woocommerce.com/document/subscriptions/store-manager-guide/) instead.

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

## API Overview

[↑ Back to top](#doc-title)

Much like WordPress & WooCommerce, the Subscriptions extension can be extended through an API (Application Programming Interface) of actions, filters and functions.

In addition to this API, it also provides a number of new classes which can be used to instantiate and work with subscription data, both for subscription products and subscriptions.

### Actions

[↑ Back to top](#doc-title)

Action hooks are available for important subscription *events*. Examples of subscription events include subscription activation, cancellation, expiration. For the full list of action hooks triggered by Woo Subscriptions, see the [Action Reference](https://woocommerce.com/document/subscriptions/develop/action-reference/).

### Filters

[↑ Back to top](#doc-title)

Filters are available for formatting and customizing data within the Subscriptions extension, like the “Sign Up Now” button text. For a full list of the available filters, see the [Filter Reference](https://woocommerce.com/document/subscriptions/develop/filter-reference/).

### Functions

[↑ Back to top](#doc-title)

A range of functions are available to perform subscription related operations, like activating a subscription, and get subscription related information, like its sign-up fee. The most important of these are documented in the [Function Reference](https://woocommerce.com/document/subscriptions/develop/functions/).

### Subscription Objects

[↑ Back to top](#doc-title)

Subscriptions provides a number of classes for instantiating and working with subscription objects, including:

- ```
WC_Subscription
```

: which extends 
```
WC_Order
```

 to instantiate a subscription object.
- ```
WC_Product_Subscription
```

: which instantiate simple subscription product objects and extends 
```
WC_Product_Simple
```

.
- ```
WC_Product_Variable_Subscription
```

: which instantiates variable subscription product objects and extends 
```
WC_Product_Variable
```

.
- ```
WC_Product_Subscription_Variation
```

: which instantiates subscription variation objects and extends 
```
WC_Product_Variation
```

.

These are discussed in more detail in the [Guide to Subscription Data Structures & Storage](https://woocommerce.com/document/subscriptions/develop/data-structure/).

## Plugin Structure

[↑ Back to top](#doc-title)

Subscriptions is built on a number of classes. The core of the classes is the 
```
WC_Subscriptions
```

 class. This sets up the Subscriptions extension and loads all required files.

The rest of the classes:

- Customize a specific WooCommerce class of a similar name, for example 
```
WC_Subscriptions_Cart
```

 customizes the 
```
WC_Cart
```

 object.
- Provide an imperative API for working with subscription data, like 
```
WC_Subscriptions_Product
```

, which can be used to access subscription product data.
- Instantiate an instance of an object to work with, for example the 
```
WC_Subscription
```

 which instantiates a subscription.
- Implement all the logic associated with a unique subscriptions feature, like 
```
WC_Subscriptions_Switcher
```

 or 
```
WC_Subscriptions_Synchroniser
```

Naming conventions for classes follow the WooCommerce convention. For example, the 
```
WC_Subscriptions_Order
```

 class is located in the file 
```
class-wc-subscriptions-order.php
```

 file in the 
```
/classes/
```

 folder. The difference to WooCommerce is that many of Subscriptions classes use static methods, as each class is created to operate *on* an object, like the 
```
WC_Cart
```

 object, rather than create an instance of an object.

Some classes also exist with the 
```
WCS_
```

 prefix while others have the more verbose 
```
WC_Subscriptions_
```

 prefix. The later of these are a legacy of Subscriptions version 1.n codebase, which used the unfortunately more verbose naming. New classes are almost always use the more concise 
```
WCS_
```

 prefix. That is the only reason for the difference.

## Documentation Contents

[↑ Back to top](#doc-title)

**Technical guides:**

- [Guide to Multiple Subscriptions](https://woocommerce.com/document/subscriptions/develop/multiple-subscriptions/)
- [Guide to Failed Recurring Payment Retry System](https://woocommerce.com/document/subscriptions/develop/failed-payment-retry/)
- [Payment Gateway Integration Guide](https://woocommerce.com/document/subscriptions/develop/payment-gateway-integration/)
- [Admin Change Payment Method Integration Guide](https://woocommerce.com/document/subscriptions/develop/payment-gateway-integration/change-payment-method-admin/)
- [Guide to Cart and Recurring Cart Fees](https://woocommerce.com/document/subscriptions/develop/recurring-cart-fees/)
- [Guide to Scheduled Events with Subscriptions](https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/)

**Technical FAQ answers:**

- [How to Debug Subscriptions PayPal IPN Issues](https://woocommerce.com/document/debug-subscriptions-paypal-ipn-issues/)
- [How Does Subscriptions Handle Staging Sites and Migrations?](https://woocommerce.com/document/subscriptions-handles-staging-sites/)
- [How to Deactivate Core Subscription Features, like Changing Payment Methods](https://woocommerce.com/document/subscriptions/develop/disable-core-subscription-features/)
- [How to Remove an Action Button from View Subscriptions Page](https://woocommerce.com/document/subscriptions/develop/remove-an-action-button/)
- [Stop Subscriptions from Changing User Roles](https://woocommerce.com/document/subscriptions/develop/prevent-role-changes-by-subscriptions/)
- [How to Change Subscriptions to Manual Payments](https://woocommerce.com/document/subscriptions/develop/change-subscription-to-manual-payments/)
- [How to Customize the My Subscriptions Page](https://woocommerce.com/document/subscriptions/develop/customizing-the-my-subscriptions-page/)

**Reference documents:**

- [Data Structure & Storage](https://woocommerce.com/document/subscriptions/develop/data-structure/)
- [Subscription Caches](https://woocommerce.com/document/subscriptions/develop/cache/)
- [Subscription Function Reference](https://woocommerce.com/document/subscriptions/develop/functions/)
- [Subscription Product Function Reference](https://woocommerce.com/document/subscriptions/develop/functions/product-functions/)
- [Subscriptions Management Function Reference](https://woocommerce.com/document/subscriptions/develop/functions/management-functions/)
- [Subscriptions Order & Cart Function Reference](https://woocommerce.com/document/subscriptions/develop/functions/order-cart-functions/)
- [Action Reference](https://woocommerce.com/document/subscriptions/develop/action-reference/)
- [Filter Reference](https://woocommerce.com/document/subscriptions/develop/filter-reference/)
- [Subscription REST API Docs Version 3](https://woocommerce.github.io/subscriptions-rest-api-docs/#introduction)
- [Subscription REST API Docs Version 1](https://woocommerce.github.io/subscriptions-rest-api-docs/v1.html)
- [Legacy Subscription REST API Docs Version 3](https://woocommerce.github.io/subscriptions-rest-api-docs/legacy-v3.html#subscriptions)

These reference guides should not be considered instructive for specific problems, as tutorials, nor exhaustive as they detail only a small subset of the available public API functions and hooks, of which there are many.

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

## Subscriptions Action Reference

**Source:** [https://woocommerce.com/document/subscriptions/develop/action-reference/](https://woocommerce.com/document/subscriptions/develop/action-reference/)

# Subscriptions Action Reference

			If you are looking for a guide to creating and managing subscription products in a WooCommerce store, please refer to the [Store Manager Guide](https://woocommerce.com/document/subscriptions/store-manager-guide/) instead.

This document provides a reference for a few of the more important [action hooks](https://woocommerce.com/document/self-service-dashboard-for-woocommerce-subscriptions-hooks/) triggered by the WooCommerce Subscriptions extension.

It is not an exhaustive list of all actions triggered by Subscriptions, of which there are over 250, nor is it intended to be instructive about when to use these hooks. It is provided as a reference for a few of the more useful hooks you can use to interact with Subscriptions from custom code.

**Note**:

This is a **Developer level** doc. If you are unfamiliar working with code and resolving potential conflicts, we recommend you work with a [Woo Agency Partner](https://woocommerce.com/development-services/) for larger projects, or find a WooCommerce developer on [Codeable](https://codeable.io/?ref=z4Hnp) for smaller customizations. We are unable to provide support for customizations under our**Support Policy**.

## Payment and Renewal Actions

[↑ Back to top](#doc-title)

**Action:** 
```
'woocommerce_scheduled_subscription_payment'
```

**Parameters:** 
```
$subscription_id
```

 Integer The ID of the subscription that will soon have a payment processed.

**Description:** Fired once when a subscription renewal payment should be processed.

This action can be triggered on a schedule, for example, if a subscription is $50 per year, this hook will fire once per year, on the anniversary of the original purchase.

It can also be triggered off-schedule by 3rd party code or store manager actions, like the [action to process a renewal for an active subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-12) from the **Edit Subscription** screen.

---

**Action:** 
```
'woocommerce_scheduled_subscription_payment_{$gateway_id}'
```

**Parameters:**

```
$renewal_total
```

 A 
```
float
```

 value representing the total amount to charge for this renewal payment.

```
$renewal_order
```

 A 
```
WC_Order
```

 object representing the order created to record the renewal.

**Description:** Much like the 
```
'woocommerce_scheduled_subscription_payment'
```

 action, this action is fired once when a renewal payment should be processed.

The main difference being that this hook is gateway specific and intended to be used by payment gateways to actually process a payment. Because of this, the parameters passed to callbacks on this action are also different.

---

**Action:** 
```
'woocommerce_subscription_payment_complete'
```

**Parameters:** 
```
$subscription
```

 A 
```
WC_Subscription
```

 object representing the subscription which has just received a payment.

**Description:** Triggered when a payment is made on a subscription. This can be a payment for the initial order or a renewal order. It is important to note, however, that subscription date changes related to early renewals are processed differently than other renewals, so this action should not be relied upon for capturing the next payment date on a subscription.

---

**Action:** 
```
'woocommerce_subscription_renewal_payment_complete'
```

**Parameters:**

```
$subscription
```

 A 
```
WC_Subscription
```

 object representing the subscription which has just received a renewal payment.

```
$last_order
```

 A 
```
WC_Order
```

 object representing the order created to record the renewal.

**Description:** Triggered when a [renewal payment](http://docs.woothemes.com/document/subscriptions/renewal-process/) is made on a subscription.

Unlike the 
```
'woocommerce_subscription_payment_complete'
```

 hook, this hook is not triggered for payments on the initial order or a [switch order](https://docs.woothemes.com/document/subscriptions/switching-guide/). It is only triggered for payments on renewal orders.

It will be triggered for both automatic and manual renewal payments. It is important to note, however, that subscription date changes related to early renewals are processed differently than other renewals, so this action should not be relied upon for capturing the next payment date on a subscription.

---

**Action:** 
```
'woocommerce_subscription_payment_failed'
```

**Parameters:**

```
$subscription
```

 A 
```
WC_Subscription
```

 object representing the subscription which has just had a payment fail.

```
$new_status
```

 A string representation of the status applied to the subscription on the payment failure. By default, this is the 
```
on-hold
```

 status.

**Description:** Triggered when a payment fails for a subscription. This can be for payment of the initial order, a [switch order](https://docs.woothemes.com/document/subscriptions/switching-guide/) or renewal order.

---

**Action:** 
```
'woocommerce_subscription_renewal_payment_failed'
```

**Parameters:** 
```
$subscription
```

 A 
```
WC_Subscription
```

 object representing the subscription which has just had a renewal payment fail.

**Description:** Triggered when a [renewal payment](http://docs.woothemes.com/document/subscriptions/renewal-process/) fails for a subscription.

Unlike the 
```
'woocommerce_subscription_payment_failed'
```

 hook, this hook is not triggered for failed payments on the initial order or a [switch order](https://docs.woothemes.com/document/subscriptions/switching-guide/). It is only triggered for payments on renewal orders.

## Subscription Status Change Actions

[↑ Back to top](#doc-title)

A subscriptions status can be changed by store owners, subscribers or automatic schedule events, like expiration. The following hooks will always be triggered on status changes, regardless of what initiated the status change.

Furthermore, to provide hooks for subscription status changes, WooCommerce Subscriptions provides both:

1. dynamic hooks where the hook name includes the status, for example, 
```
'woocommerce_subscription_status_active'
```

 and 
```
'woocommerce_subscription_status_pending-cancel_to_cancelled'
```
2. static hook names where the hook name never changes, for example, 
```
'woocommerce_subscription_status_updated'
```

.

In general, you should use the dynamic hook if you only need to attach to a single status change, like activation or cancellation. If your functions code needs to perform different actions depending on different statuses, you should use the static hooks.

**Action:** 
```
'woocommerce_subscription_status_updated'
```

**Parameters:**

```
$subscription
```

 An instance of a [WC_Subscription object](https://woocommerce.com/document/subscriptions/develop/data-structure/#section-3) that just had its status changed.

```
$new_status
```

 The string representation of the new status applied to the subscription.

```
$old_status
```

 The string representation of the subscriptions status before the change was applied.

**Description:** Similar to WooCommerce’s 
```
'woocommerce_order_status_changed'
```

 hook, this action is triggered immediately after a subscription’s status has been changed.

It will be triggered for all [status changes defined by WooCommerce Subscriptions](https://woocommerce.com/document/subscriptions/statuses/), including: 
```
pending
```

, 
```
active
```

, 
```
on-hold
```

, 
```
pending-cancel
```

, 
```
cancelled
```

, or 
```
expired
```

; as well as any custom subscription statuses.

---

**Action:** 
```
'woocommerce_subscription_status_active'
```

**Parameters:** 
```
$subscription
```

 A 
```
WC_Subscription
```

 object representing the subscription that just had its status changed.

**Description:** This action is triggered after the subscription specified with 
```
$subscription
```

 has had its status changed to activated. The subscription’s status may have transitioned from pending to active, or on-hold to active or some other custom status to active.

---

**Action:** 
```
'woocommerce_subscription_status_cancelled'
```

**Parameters:**

```
$subscription
```

 A 
```
WC_Subscription
```

 object representing the subscription that just had its status changed.

**Description:** This action is triggered after the subscription specified with 
```
$subscription
```

 has had its status changed.

The subscription’s status may have transitioned from pending to cancelled, or on-hold to cancelled, pending cancellation to cancelled or some other custom status to cancelled.

Importantly, a subscription’s status will not be transitioned to cancelled immediately when a store manager or [customer cancels the subscription](https://woocommerce.com/document/subscriptions/customers-view/#section-2). Instead, it will be transitioned to 
```
pending-cancel
```

 and then transitioned to cancelled only after the [end of prepaid term](#subscription_end_of_prepaid_term).

---

**Action:** 
```
'woocommerce_subscription_status_expired'
```

**Parameters:** 
```
$subscription
```

 A 
```
WC_Subscription
```

 object representing the subscription that just had its status changed.

**Description:** Triggered when a subscription reaches the end of its term, if a length was set on the subscription product when it was purchased or an end date was otherwise set on a subscription.

This event may be triggered by either WooCommerce Subscriptions, which schedules an event to expire each subscription, or by 3rd party code which can call the 
```
WC_Subscription::update_status()
```

 function directly.

---

**Action:** 
```
'woocommerce_subscription_status_on-hold'
```

**Parameters:** 
```
$subscription
```

 A 
```
WC_Subscription
```

 object representing the subscription that just had its status changed.

**Description:** Triggered when a subscription is put on-hold (suspended). A subscription is put on hold when:

- the store manager has manually suspended the subscription
- the customer has manually suspended the subscription from their My Account page
- a renewal payment is due (subscriptions are suspended temporarily for automatic renewal payments until the payment is processed successfully and indefinitely for manual renewal payments until the customer logs in to the store to pay for the renewal. For more information, see the [subscription renewal guide](https://woocommerce.com/document/subscriptions/renewal-process/)).

## Subscription Life Cycle Actions

[↑ Back to top](#doc-title)

**Action:** 
```
'woocommerce_scheduled_subscription_trial_end'
```

**Parameters:** 
```
$subscription_id
```

 Integer The ID of the subscription that has reached the end of its trial period.

**Description:** Triggered when the trial period for a subscription has reached its end date.

A subscription can have a trial period if a trial length was set on the subscription product at the time it was purchased or a trial end date was otherwise manually set on the subscription.

---

**Action:** 
```
'woocommerce_scheduled_subscription_expiration'
```

**Parameters:** 
```
$subscription_id
```

 Integer The ID of the subscription that has reached the end of its life.

**Description:** Triggered when a subscription has reached its end date, based on the length set on the subscription product at the time it was purchased or an arbitrary end date that was otherwise manually set on the subscription.

---

**Action:** 
```
'woocommerce_scheduled_subscription_end_of_prepaid_term'
```

**Parameters:** 
```
$subscription_id
```

 Integer The ID of the subscription that has reached the end of its prepaid term.

**Description:** Triggered when a subscription that was cancelled by a customer or store owner has reached the and of the term covered by the last payment.

For example, if a customer purchases a monthly subscription on the 1st of March, then cancels the subscription on the 15th of March, the 
```
'woocommerce_subscription_status_pending-cancel'
```

 action will be triggered immediately and the 
```
'woocommerce_scheduled_subscription_end_of_prepaid_term'
```

 action will scheduled to run on the 1st of April to cancel the subscription.

Subscriptions uses the 
```
'woocommerce_scheduled_subscription_end_of_prepaid_term'
```

 hook internally to change a subscription’s status from 
```
pending-cancel
```

 to 
```
cancelled
```

.

---

**Action:** 
```
'woocommerce_checkout_subscription_created'
```

**Parameters:**

```
$subscription
```

 A 
```
WC_Subscription
```

 instance representing the subscription just created on checkout.

```
$order
```

 A 
```
WC_Order
```

 instance representing the order for which subscriptions have been created.

```
$recurring_cart
```

 A 
```
WC_Cart
```

 instance representing the cart which stores the data used for creating this subscription.

**Description:** Triggered when a subscription is created after a customer purchases a subscription product or products.

This hook is triggered after WooCommerce has created an order to record the transaction and it is triggered once for every subscription created with the *pending* status for that order. This occurs before payment payment has been made on an order and subscriptions are activated.

As the cart can contain [mutiple subscriptions products](https://woocommerce.com/document/subscriptions/develop/multiple-subscriptions/), and these products are grouped into special instances of 
```
WC_Cart
```

 used to store the products, shipping, taxes and other data associated with that group of products for recurring payments, the action also passes the recurring cart which lead to this subscription to callbacks.

---

**Action:** 
```
'subscriptions_created_for_order'
```

**Parameters:** 
```
$order
```

 WC_Order The order for which subscriptions have been created.

**Description:** Triggered when the subscriptions in an order are first created with the *pending* status. This occurs before payment payment has been made on an order and subscriptions are activated.

---

**Action:** 
```
'woocommerce_subscriptions_updated_users_role'
```

**Parameters:**

```
$role_new
```

 String The name of the role the user was just assigned.

```
$user
```

 WP_User The user whose role has just been changed.

```
$role_old
```

 String The name of the role the user had before the new role was assigned.

**Description:** When a subscription is activated, suspended, cancelled or expired, the user’s role will also be changed, which triggers the 
```
'woocommerce_subscriptions_updated_users_role'
```

 hook.

---

## Subscription Switching Actions

[↑ Back to top](#doc-title)

**Action:** 
```
'woocommerce_subscriptions_switch_completed'
```

**Parameters:** 
```
$order
```

 WC_Order The order for which subscriptions have been created.

**Description:** Triggered when the switch order status changes to processing or completed and runs after all the switching and updating has happened.

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

## Subscription Caches

**Source:** [https://woocommerce.com/document/subscriptions/develop/cache/](https://woocommerce.com/document/subscriptions/develop/cache/)

# Subscription Caches

			WooCommerce Subscriptions has a persistent caching system to improve performance by avoiding slow database queries. This system speeds up many functions on the WooCommerce Subscriptions extension, including the amount of time it takes to process a renewal payment, load the [My Account > Subscriptions](https://woocommerce.com/document/subscriptions/customers-view/) page, and in some cases, load customer facing product and shop pages.

Subscriptions’ persistent caching system uses a caching layer for:

- a subscription’s related orders
- all the subscriptions for a customer

This guide is designed for developers looking for a technical understanding of the caching system. It explains how the caching system works, what data is cached, why caching is needed as well as answers to other common questions about the system.

## Subscription Related Order Cache

[↑ Back to top](#doc-title)

A subscription can have a variety of [related orders](https://woocommerce.com/document/subscriptions/orders/), including:

- renewal orders
- resubscribe orders
- switch orders

Each of these relationships is recorded in the database by adding a meta key to the post meta table for the given WooCommerce order, which is a custom post type. The value of the meta is the ID of the subscription to which the order relates.

For example, to link an order with ID 456 as a renewal to subscription 123, a row in post meta with the following data would exist:

- ```
post_id
```

: 
```
456
```
- ```
meta_key
```

: 
```
_subscription_renewal
```
- ```
meta_value
```

: 
```
123
```

The persistent cache of related orders is also stored in the post meta table. However, all related order IDs are stored in a single row of post meta against the subscription.

For example, to link renewal orders with IDs 456 and 789 to a subscription with ID 123, a row in post meta with the following data would exist:

- ```
post_id
```

: 
```
123
```
- ```
meta_key
```

: 
```
_subscription_renewal_order_ids_cache
```
- ```
meta_value
```

: 
```
a:2:{i:0;i:456;i:0;i:789;}
```

To find all the renewal orders for a give subscription, a simple 
```
get_post_meta()
```

 call can now be used to query a single row in the meta table.

### Subscription Related Order Cache Meta Keys

[↑ Back to top](#doc-title)

The meta keys use for each related order cache are:

- **Switch Orders**: 
```
_subscription_switch_order_ids_cache
```
- **Renewal Orders:**
```
_subscription_renewal_order_ids_cache
```
- **Resubscribe Orders**: 
```
_subscription_resubscribe_order_ids_cache
```

## Customer’s Subscription Cache

[↑ Back to top](#doc-title)

A subscription’s data is a [superset of a WooCommerce order’s data](https://woocommerce.com/document/subscriptions/orders/). As a result, the way a subscription is linked to a customer is the same as the way an order is linked to a customer, where the 
```
post_author
```

 column in the main posts database table is used.

For example, to link a subscription with ID 456 to a user with ID 123, a row in post meta with the following data would exist:

- ```
post_id
```

: 
```
456
```
- ```
meta_key
```

: 
```
_customer_user
```
- ```
meta_value
```

: 
```
123
```

The persistent cache of a customer’s subscriptions is not stored in the post meta table. Instead, it is stored in the user meta table. All subscription IDs are stored in a single row of user meta against the user’s ID.

For example, to link subscriptions with IDs 456 and 789 to a user with ID 123, a row in post meta with the following data would exist:

- ```
user_id
```

: 
```
123
```
- ```
meta_key
```

: 
```
_wcs_subscription_ids_cache
```
- ```
meta_value
```

: 
```
a:2:{i:0;i:456;i:0;i:789;}
```

To find all subscriptions for a given user, a simple 
```
get_user_meta()
```

 call can now be used to query a single row of data.

## Subscription Cache Management Tools

[↑ Back to top](#doc-title)

To use the subscription cache management tool to create and delete the subscription caches:

1. Go to **WooCommerce > Status**
2. Click the **Tools**tab
3. Scroll down until you find the following subscription cache management tools:
1. **Generate Related Order Cache**
2. **Delete Related Order Cache**
3. **Generate Customer Subscription Cache**
4. **Delete Customer Subscription Cache**
4. Click the button next to the tool you wish to run

![There are 4 WooCommerce Subscriptions cache management tools available under the Tools tab of WooCommerce Status. ](https://woocommerce.com/wp-content/uploads/2024/07/woocommerce-subscriptions-caching-tools.webp?strip=all&w=704)Subscription Cache Management Tools

### Subscription Cache Generation via the Generator Tools

[↑ Back to top](#doc-title)

Cache generation will normally happen just-in-time, meaning the first time it’s required, the data will be pulled from the source and then cached for future use. However, each cache can also be generated via the cache Generate Tools mentioned above.

Cache generation initiated via one of the caching tools is done in the background, over time, in small batches. This means it takes time to generate the cache. It could take minutes, hours, or even days to generate the cache for all subscriptions in your store. On large sites, with 100,000s of subscriptions, we’ve even seen it take over a week.

That’s because the cache tools are designed to generate the cache without interrupting normal site performance, no matter how large a site and how long it takes to generate the cache.

## Cache Data Stores

[↑ Back to top](#doc-title)

To abstract the caching layer, and incorporate it in a way that can easily be extended, swapped or removed, the caching logic is implemented within data store classes for each type of data being cached.

- The 
```
WCS_Related_Order_Store_Cached_CPT
```

 class implements the caching layer for related orders. It extends and falls back to direct queries via the 
```
WCS_Related_Order_Store_CPT
```

 class when no cached value is available.
- The 
```
WCS_Customer_Store_Cached_CPT
```

 class implements the caching layer for a customer’s subscriptions. It extends and falls back to direct queries via the 
```
WCS_Customer_Store_CPT
```

 class when no cached value is available.

Each of these classes are used as the data stores for accessing respective data, and each can be changed using available filters.

### Using a Custom Related Order Data Store

[↑ Back to top](#doc-title)

The 
```
'wcs_related_order_store_class'
```

 filter can be used to change the data store used for accessing a subscription’s related orders. The value returned by this filter should be the name of the class to instantiate.

The class returned by that filter will be the class used via calls to  
```
WCS_Related_Order_Store::instance()
```

 for accessing a subscription’s related orders.

For example, to remove the caching layer on related orders from your site, you could use the following code:

```
add_filter( 'wcs_related_order_store_class', 'wcs_bypass_related_order_cache_layer' );

/**
 * Overrides the related order store class to use the CPT version.
 * This bypasses the cache layer and uses the raw data stored in order meta directly.
 *
 * @param string $class The class to use for the related order store.
 * @return string The class to use for the related order store.
 */
function wcs_bypass_related_order_cache_layer( $class ) {
	return 'WCS_Related_Order_Store_CPT';
}
```

### Using a Custom Customer Subscription Data Store

[↑ Back to top](#doc-title)

The 
```
'wcs_customer_store_class'
```

 filter can be used to change the data store used for accessing a customer’s subscriptions. The value returned by this filter should be the name of the class to instantiate.

The class returned by that filter will be used via 
```
WCS_Customer_Store::instance()
```

 for accessing a user’s subscriptions.

For example, to remove the caching layer from your site, you could use the following code:

```
add_filter( 'wcs_customer_store_class', 'wcs_bypass_customer_subscriptions_cache_layer' );

/**
 * Overrides the customer store class to use the CPT version.
 * This bypasses the cache layer and uses the raw data stored in user meta directly.
 *
 * @param string $class The class to use for the customer store.
 * @return string The class to use for the customer store.
 */
function wcs_bypass_customer_subscriptions_cache_layer( $class ) {
	return 'WCS_Customer_Store_CPT';
}
```

## FAQs

[↑ Back to top](#doc-title)

### Why does subscription data need to be cached?

[↑ Back to top](#doc-title)

WooCommerce Subscriptions builds on [WordPress custom post types](https://wordpress.org/documentation/article/what-is-post-type/) to [store subscription data](https://woocommerce.com/document/subscriptions/develop/data-structure/#subscription-product-data-structure-and-storage). As a result, much of its data is stored in the same database tables as other content types, like blog posts, website pages, WooCommerce orders, and data from other plugins.

It is not uncommon to see subscription meta data in tables with hundreds of thousands or millions of rows of data. This  makes particular queries on that data slow. Especially if it comes from a [meta query](https://developer.wordpress.org/reference/classes/wp_meta_query/) like those generated by [get_posts()](https://developer.wordpress.org/reference/functions/get_posts/), which creates a 
```
JOIN
```

 SQL statement.

For example, a renewal order is linked to a subscription via a field of meta data in this table. To find all the renewal orders for a subscription requires running a query against that data.

To address this, many items of known subscription data will be migrated to separate tables. This is a process that will be in development and testing for a substantial amount of time before being released publicly in the Subscriptions core plugin. In the meantime, Subscriptions can use a persistent cache to prevent slow queries needing to run.

### How does the subscription cache work?

[↑ Back to top](#doc-title)

Normally, to find a piece of data, like the IDs of orders related to a subscription, a database query is run against the source of that data.

The persistent cache on the other hand will store the result of that query when it is first run, and then use that as the source of information in future. **The cache will be updated whenever a cache invalidating even occurs, like a relevant piece of data being created or deleted.**

For example, to link a subscription and a renewal order, a 
```
_subscription_renewal
```

 meta key is added to the post meta table for a WooCommerce order with the meta value set to the subscription’s ID. To find these relationships, rows containing that meta data can be queried.

However, with the persistent cache system, **each time a renewal order is created, and that relationship is stored in the database, the renewal order’s ID will be added to the existing cache.** Similarly, when a renewal order is deleted, its ID will be removed from the cache. This means that cache can be used to find renewal orders in a more performant way than querying 
```
_subscription_renewal
```

 meta key rows.

After updating to Subscriptions 2.3, known slow queries will run just once. From then on, the persistent cache will be used.

### How long does the subscription cache last?

[↑ Back to top](#doc-title)

In some systems, like [WordPress’ transient system](https://developer.wordpress.org/apis/transients/), cached data will expired after a pre-defined period of time.

**Data in Subscription’s persistent cache does not expire**. The cached data will only be cleared when manually deleted, for example by using a cache deletion debug tool.

It is possible to maintain the cache indefinitely by keeping it up-to-date whenever a cache invalidating event occurs, like a new subscription or order being created.

### Why isn’t the Parent Order in the related order cache?

[↑ Back to top](#doc-title)

Parent Orders are linked to a subscription using the 
```
post_parent
```

 column in the posts table. This makes it far more performant to run queries to find both:

- all subscriptions with a given parent order
- the parent order for a given subscription

As a result, it is not necessary cache the parent orders for a subscription.

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

## Developer Guide to Change Subscriptions to Manual Payments

**Source:** [https://woocommerce.com/document/subscriptions/develop/change-subscription-to-manual-payments/](https://woocommerce.com/document/subscriptions/develop/change-subscription-to-manual-payments/)

# Developer Guide to Change Subscriptions to Manual Payments

			If you need to switch a large number of subscriptions to use manual renewals, and you are proficient with PHP and/or MySQL, you can also programmatically change a subscription’s payment method to be manual.

### Change a Subscription to Manual Payments via Database

[↑ Back to top](#doc-title)

To change a customer’s subscription via the database:

1. Find the ID of the subscription – this displays on the [Manage Subscription](https://woocommerce.com/document/subscriptions/store-manager-guide/#section-8) table next to the subscription.
2. Open MySQL editor (like [PhpMyAdmin](http://www.wpbeginner.com/beginners-guide/beginners-guide-to-wordpress-database-management-with-phpmyadmin/)).
3. Search the 
```
wp_postmeta
```

 table for a row where the 
```
post_ID
```

 is the ID found in step 1 and the 
```
meta_key
```

 is 
```
'_requires_manual_renewal'
```

.
4. If a row is found, change the 
```
meta_value
```

 for that row to 
```
true
```

.
5. If a row was not found in step 3, insert a row into the 
```
wp_postmeta
```

 table where the 
```
post_ID
```

 is the ID found in step 1, the 
```
meta_key
```

 is 
```
'_requires_manual_renewal'
```

 and the 
```
meta_value
```

 is 
```
true
```

.

You can also bulk insert or update this meta data via a custom MySQL query for a batch of subscription IDs.

### Change a Subscription to Manual Payments via PHP

[↑ Back to top](#doc-title)

To change a customer’s subscription using PHP:

1. Find the ID of the subscription – this displays on the [Manage Subscription](https://woocommerce.com/document/subscriptions/store-manager-guide/#section-8) table next to the subscription.
2. In you PHP code, instantiate an [instance of that subscription](https://woocommerce.com/document/subscriptions/develop/data-structure/#section-9) using 
```
wcs_get_subscription( $subscription_id )
```
3. Call [update_manual()](https://woocommerce.com/document/subscriptions/develop/functions/#section-12) on the subscription instance with a value of 
```
true
```

 to set the subscription to require manual renewals.

					
		
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

## Complete Guide to Scheduled Events with Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/](https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/)

# Complete Guide to Scheduled Events with Subscriptions

			## Subscriptions Scheduled Events Overview

[↑ Back to top](#doc-title)

Scheduled events are actions that happen at particular times. WP-Cron and Action Scheduler are systems that trigger and run events. Both of these systems run in the background of a WordPress website.

Action Scheduler excels at batch processing, storing the actions, error logging, and providing an interface for interacting with the scheduled events system.

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

### WP-Cron has its limitations

[↑ Back to top](#doc-title)

[WP-Cron](https://developer.wordpress.org/plugins/cron/) is WordPress’s version of cron; a system to run time-based actions in unix systems. WP-Cron makes it so that third-parties don’t have to concern themselves with specific operating system implementations of cron.

By itself, WP-Cron limited by the fact that it’s triggered by page loads that triggers any events that are scheduled for that time, or that are waiting from before that time. This means that, on a site with low traffic, events might not run at their scheduled time. To overcome this issue, low traffic sites may rely on a service that pings the site periodically (triggering a page load), such as the [Jetpack – Downtime / Uptime Monitoring service](https://jetpack.com/features/security/downtime-monitoring/).

All scheduled jobs with WP-Cron are stored in a single row of the 
```
wp_options table
```

. This means that on sites with tens of thousands of scheduled actions the system, all data is being stored in a single column of the database. This creates a number of issues including:

- It’s not possible to query scheduled events via MySQL. It must be done in PHP, slowing down querying scheduled events.
- Modifying a single scheduled event requires saving or updating all events, slowing down database operations.

### Action Scheduler

[↑ Back to top](#doc-title)

[Action Scheduler](https://actionscheduler.org/) was developed to overcome the scaling issues posed by WP-Cron. Action Scheduler creates queues of events that are processed in an orderly manner.

To process this queue, Action Scheduler uses two methods.

- It attempts to process the queue every minute via its own WP-Cron event.
- Once per minute, it also check at the end of each WP Admin request whether there are pending actions.

When either of these methods run, pending events which are due are processed in the background. Action Scheduler can run batches and concurrent queues. On sites with large numbers of actions, this is very helpful.

Action Scheduler also offers an interface to interact with scheduled events and a way to trace event histories.

## Debugging WP-Cron

[↑ Back to top](#doc-title)

### Symptoms of a non-functioning cron

[↑ Back to top](#doc-title)

When WP-Cron is not functioning properly, you might notice several symptoms with WooCommerce Subscriptions that indicate issues with scheduled tasks. Here are some common signs:

- **Overdue Subscription Payments**: Subscriptions are active, but next payment date is in the past.
- **Missed Scheduled Payments**: Renewals are not triggering on time, leading to missed or delayed payments for subscriptions.
- **Past-due Scheduled Actions**: You might see multiple past-due actions in your system, especially if they are more than a day old. Often, past due scheduled actions will be accompanied by the [Scheduled Action Timeout Notice](https://woocommerce.com/document/subscriptions/scheduled-action-errors/#scheduled-action-timeout-notice)

### Things to check when diagnosing WP-Cron issues

[↑ Back to top](#doc-title)

First, open the **WooCommerce** **> Status** page to view your [system status report](https://woocommerce.com/document/understanding-the-woocommerce-system-status-report/). Check the status report and make sure the following items are working as expected:

- **WP-Cron** – Ensure that WP-Cron is enabled. Unless you have specifically set up an alternative, server-level cron that triggers WP-Cron to run scheduled actions.
- **fsockopen/cURL** – Required for WP-Cron to make internal HTTP requests; both should be enabled on the server.
- **Overdue Scheduled Actions** – This can be found under **WooCommerce > Status > Scheduled Actions**Check to make sure that there are no pending actions that are in the past.

If you see overdue scheduled actions, or other signs that events aren’t processing as expected despite WP Cron and fsockopen/cURL being enabled, read on to check whether the issue lies in WP-Cron, or the Action Scheduler.

**Using Cloudflare or another proxy/CDN?** Consider triggering WP-Cron via 
```
localhost
```

 on your server, or setting up real server-level cron job to avoid blocked internal requests which can cause WP-Cron to not trigger, despite the request being sent. Take a look at our [guide on alternative methods to triggering the WP-Cron](https://woocommerce.com/document/subscriptions/faq/#section-21).

*Why is cURL important? WordPress uses cURL to spawn the cron in a separate request, so the site visitor user who “awoke” the cron does not have to wait until the cron is finished. Think of it like creating a process and sending it to the background.*

### Check if WP-Cron or only Action Scheduler stopped

[↑ Back to top](#doc-title)

When events stop running, we need to check whether **WP-Cron itself has stopped** or if it’s the **Action Scheduler** **queue** that’s no longer processing tasks. To determine this, you can look for the **last successful run time** of each system and compare.

To check WP-Cron:

1. Install a plugin that provides a way to view the WP-Cron system, like [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/).
2. Once installed and activated, go to **WP Admin > Tools > Cron events**.
3. In the **Next Run** column, check the date for the top entry.

![The Next Run column on the Cron Event tab.](https://woocommerce.com/wp-content/uploads/2019/08/wp-crontrol-next-run.webp?strip=all&w=704)The Next Run column on the Cron Event tab.

To check Action Scheduler:

1. Go to **Tools > Scheduled Actions**.
2. Choose the **Complete** sub-tab at the top of the screen.
3. Click the **Scheduled Date column’s heading** to sort by most recent.
4. Check the **Scheduled Date column** for the date of the last completed scheduled action.

![](https://woocommerce.com/wp-content/uploads/2019/08/action-scheduler-complete.webp?strip=all&w=704)Scheduled Date of Last Complete Scheduled Action

To determine which system has stopped:

1. Compare the WP-Cron date with the Action Scheduler date.
2. If the WP-Cron date is in the past (it indicates 
```
(now)
```

), is before or coincides with the Action Scheduler date, then WP-Cron has been disabled.
3. if the WP-Cron date is recent, such as in the last few minutes, and after the Action Scheduler date, then Action Scheduler is blocked.

### Subscriptions Scheduled Action Errors

[↑ Back to top](#doc-title)

If an error occurs when processing a scheduled subscription payment, a notice will appear in the admin dashboard to alert store managers of this error. The [Subscriptions Scheduled Action Errors](https://woocommerce.com/document/scheduled-action-errors/) guide explains why a notice is displayed, the likely causes of the issue, steps to diagnose the cause, and how to fix the problem or get help.

### Why has WP-Cron stopped?

[↑ Back to top](#doc-title)

It is possible that there was a job in the WP-Cron queue that could never complete, causing WP-Cron to go through an endless loop and effectively be blocked from processing more actions.

Here is a sequence of possible events that would block the queue:

1. The offending job gets to the top of the queue.
2. WP-Cron runs the offending job.
3. The job causes a fatal error.
4. WP-Cron does not remove that job from the queue, because the job was terminated before it had finished.
5. Return to step 2 and repeat.

To determine the cause of this error, check the [Fatal Errors log](https://woocommerce.com/document/finding-php-error-logs/#woocommerce-fatal-errors-log) in [WooCommerce > Status > Logs](https://woocommerce.com/document/finding-php-error-logs/#woocommerce-fatal-errors-log). Look for a fatal error coinciding with the time WP-Cron was last working.

### How do I get WP-Cron working again?

[↑ Back to top](#doc-title)

Once you identified the source of the problem, that source needs to be fixed for WP-Cron to continue working. In the case of a plugin that produced a fatal error, update the plugin to see if a fix was implemented.

### How will this affect WooCommerce Subscriptions?

[↑ Back to top](#doc-title)

When reinstating WP-Cron, you do not need to clear out or regenerate Subscriptions-related events. Action Scheduler has those events safely stored in a queue waiting to be run. This means that all the actions, such as renewal payments, that might not have processed since WP-Cron stopped working are still waiting to process.

**Be aware of how long WP-Cron has been stalled and what that backup means in terms of the events waiting for you and your customers.**

Keep in mind that actions will still have been processing via WP Admin request so there might be a back log to get through, or maybe no back log at all.

## Scheduled Events with WooCommerce Subscriptions

[↑ Back to top](#doc-title)

### Why does Subscriptions need a working WP-Cron?

[↑ Back to top](#doc-title)

Subscriptions requires a working WP-Cron because Action Scheduler, the system used to process scheduled events, relies on WP-Cron to work at maximum efficiency. Without the initial event triggered by WP-Cron, the events queue in Action Scheduler can only be processed via WP Admin async requests.

### How can I improve the accuracy and reliability of scheduled payments via WP-Cron?

[↑ Back to top](#doc-title)

Because the base WP-Cron system is triggered by a page load, the queue on sites with low traffic may process events well after they were due. For a more reliable processing of the WP-Cron queue, take a look at our [guide on alternative methods to triggering the WP-Cron](https://woocommerce.com/document/subscriptions/faq/#section-21).

### Subscriptions Scheduled Events

[↑ Back to top](#doc-title)

#### woocommerce_scheduled_subscription_payment

**Scheduled**: When a subscription is purchased.

**Rescheduled**: When a subscriptions status is changed to 
```
active
```

. When the next payment date is updated if the subscription has an active status.

**Unscheduled**: When a subscription’s status is changed to 
```
pending-cancel
```

, 
```
cancelled
```

, 
```
switched
```

, 
```
expired
```

 or 
```
trash
```

.

**Run**: At the next payment date.

**Date type**: 
```
next_payment
```

.

**Arguments**: Subscription ID.

#### woocommerce_scheduled_subscription_trial_end

**Scheduled**: When a subscription item with a free trial is purchased.

**Rescheduled**: When a subscriptions status is changed to 
```
active
```

. When the trial end date is updated if the subscription has an active status.

**Unscheduled**: When a subscription’s status is changed to 
```
pending-cancel
```

, 
```
cancelled
```

, 
```
switched
```

, 
```
expired
```

 or 
```
trash
```

.

**Run**: At the end of a free trial.

**Date type**: 
```
trial_end
```

.

**Arguments**: Subscription ID.

#### woocommerce_scheduled_subscription_payment_retry

**Scheduled**: When the 
```
payment_retry
```

 date is updated, after a renewal payment has failed.

**Rescheduled**: When a subscription’s status is changed to 
```
active
```

. When the next payment date is updated.

**Unscheduled**: When a subscription status is changed to 
```
pending-cancel
```

, 
```
cancelled
```

, 
```
switched
```

, 
```
expired
```

 or 
```
trash
```

. When the status changes if the new status is not the same as the retry’s expected status.

**Run**: According to retry rules;[default rules](https://woocommerce.com/document/subscriptions/failed-payment-retry/#section-6)have the first retry 12 hours after failed renewal attempt.

**Date type**: 
```
payment_retry
```

.

**Arguments**: Last renewal order ID.

#### woocommerce_scheduled_subscription_expiration

**Scheduled**: When a subscription is purchased. It will be 0 unless the subscription has an expiration date, i.e. a length.

**Rescheduled**: When a subscription status is changed to 
```
active
```

. When the next payment date is updated if the subscription has an active status.

**Unscheduled**: When a subscription’s status is changed to 
```
pending-cancel
```

, 
```
cancelled
```

, 
```
switched
```

, 
```
expired
```

 or 
```
trash
```

.

**Run**: At the end of the subscription length.

**Date type**: 
```
end
```

.

**Arguments**: Subscription ID.

#### woocommerce_scheduled_subscription_end_of_prepaid_term

**Scheduled**: When a subscription is cancelled and its status is changed to 
```
pending-cancel
```

.

**Rescheduled**: When a subscription’s status is changed to 
```
pending-cancel
```

.

**Unscheduled**: When a subscription’s status is changed to 
```
active
```

, 
```
cancelled
```

, 
```
switched
```

, 
```
expired
```

 or 
```
trash
```

.

**Run**: At the end of the subscription’s prepaid term, when it moves to 
```
cancelled
```

 status.

**Date type**: 
```
end
```

.

**Arguments**: Subscription ID.

#### woocommerce_subscriptions_privacy_anonymize_ended_subscriptions

**Scheduled**: Hooked onto 
```
woocommerce_cleanup_personal_data
```

.

**Run**: Daily.

**Arguments**: None.

**Notes**: This action will not do anything if the setting to cleanup ended subscriptions is not set.

#### woocommerce_subscriptions_privacy_anonymize_subscription_orders

**Scheduled**: For each ended subscription which needs to be anonymized.

**Run**: Immediately when subscription is anonymized.

**Arguments**: Subscription ID.

#### woocommerce_subscriptions_privacy_anonymize_subscription_order

**Scheduled**: For each ended subscription which needs to be anonymized.

**Run**: Immediately when subscription is anonymized.

**Arguments**: Subscription ID.

#### wcs_report_update_cache

**Scheduled**: After a cache-invalidating event and before PHP shutdown.

**Run**: On most sites: 10 minutes after a cache-invalidating event, once every 5 minutes apart for each report type. On large sites: once a day at 4 am site time, 15 minutes apart for each report type.

**Arguments**:  The subscription-related report which needs updating.

## Scaling Action Scheduler with WP-CLI

[↑ Back to top](#doc-title)

Action Scheduler has WP-CLI commands that can be used for processing actions. This can be particularly useful for large sites with long-running tasks, large queues, or many demands on WP-Cron.

More information about using these commands can be found on the Action Scheduler site in the section about [WP-CLI](https://actionscheduler.org/wp-cli/).

					
		
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

## Customizing the My Subscriptions Page

**Source:** [https://woocommerce.com/document/subscriptions/develop/customizing-the-my-subscriptions-page/](https://woocommerce.com/document/subscriptions/develop/customizing-the-my-subscriptions-page/)

# Customizing the My Subscriptions Page

			WooCommerce Subscriptions creates a [My Subscriptions](https://woocommerce.com/document/subscriptions/customers-view/) section in your customer’s **My Account** area. This helps them easily manage their subscriptions. They can pause, cancel, upgrade, change payment methods, etc… as needed. If you want to customize the **My Subscriptions**section, you can modify the template associated with it. You can update the template the same way you override [core WooCommerce templates](https://woocommerce.com/document/template-structure/).

Look for the template named 
```
my-subscriptions.php
```

. It’s located under the 
```
/myaccount/
```

 folder. To override it in your theme, copy the 
```
/templates/myaccount/my-subscriptions.php
```

 file found in the WooCommerce Subscriptions plugin folder to your theme in the location: 
```
/woocommerce/myaccount/my-subscriptions.php
```

. From there, you can follow the process outlined in our developer docs for **Template structure & Overriding templates via a theme** to modify it.

## Adding a confirmation message on the My Account page

[↑ Back to top](#doc-title)

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

By default, when a customer clicks the suspend, cancel, or renew button on their [My Account](https://woocommerce.com/document/subscriptions/customers-view/) page, the action processes immediately without any additional confirmation required from your customer.

If you’d like to add a confirmation message to this process, you can follow a process like the one below to create a template override and add some custom code.

1. Copy the 
```
/woocommerce-subscriptions/vendor/woocommerce/subscriptions-core/templates/myaccount/subscription-details.php
```

 template from the plugin folder into your theme’s folder at the location 
```
/woocommerce/myaccount/subscription-details.php
```

. ([Learn more about overriding WooCommerce templates](https://woocommerce.com/document/template-structure/)).
2. Find the line used to display the link button for each action. Its HTML is shown below, and it is contained within a table with the class 
```
subscription_details
```

.
3. Replace the link text with the new link text included below.

The original link will look like this:

```
<a href="<?php echo esc_url( $action['url'] ); ?>" class="<?php echo esc_attr( trim( implode( ' ', $classes ) ) ); ?>">
<?php echo esc_html( $action['name'] ); ?>
</a>
```

To display a confirmation dialogue, change the link markup to this:

```
<?php if(in_array($key, array('cancel', 'suspend'))) : ?>

					<a href="<?php echo esc_url( $action['url'] ); ?>" class="button <?php echo sanitize_html_class( $key ) ?>" onclick="return confirm('<?php printf( __( 'Are you sure you want to %s this subscription?', 'woocommerce-subscriptions' ), esc_html( $action['name'] ) ); ?>');"><?php echo esc_html( $action['name'] ); ?></a>

					<?php else: ?>

					<a href="<?php echo esc_url( $action['url'] ); ?>" class="button <?php echo sanitize_html_class( $key ) ?>"><?php echo esc_html( $action['name'] ); ?></a>

					<?php endif; ?>
```

With that in place, your customers should see this notice confirming they do want to cancel their subscription. That second confirmation can help reduce any accidental cancelations.

![Cancel Subscription Confirmation Dialogue](https://woocommerce.com/wp-content/uploads/2012/06/faq_action_confirmation.png?strip=all&w=704)Cancel Subscription Confirmation Dialogue

					
		
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

## Subscriptions Data Structures & Storage

**Source:** [https://woocommerce.com/document/subscriptions/develop/data-structure/](https://woocommerce.com/document/subscriptions/develop/data-structure/)

# Subscriptions Data Structures & Storage

			This guide introduces the fundamentals of the data structures used to instantiate and work with subscription data with the [WooCommerce Subscriptions extension](https://woocommerce.com/products/woocommerce-subscriptions/). It is not intended to provide tutorials on how to achieve certain tasks with the subscription object, or as a comprehensive reference of all the subscription properties and methods.

This documentation is written for WooCommerce developers who want to extend or integrate with the WooCommerce Subscriptions plugin. To follow this documentation, you will need an advanced understanding of [PHP](http://php.net/) and [WordPress development](http://codex.wordpress.org/Developer_Documentation).

If you are looking for a guide to creating and managing subscription products in a WooCommerce store, please refer to the [Store Manager Guide](https://woocommerce.com/document/subscriptions/store-manager-guide/) instead.

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

## Subscription Products vs. Subscriptions

[↑ Back to top](#doc-title)

WooCommerce Subscriptions provides two different, but related items:

- Subscription products, which are offered to customers for purchase. These are an extension of [WooCommerce products](https://woocommerce.com/document/managing-products/) and includes simple subscriptions, variable subscriptions or subscription variations.
- Subscriptions, which are an agreement between your store and a customer for future transactions. These are an extension of [WooCommerce orders](https://woocommerce.com/document/subscriptions/orders/).

Learn more about [subscription products vs. subscriptions](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/) or [subscriptions vs. orders](https://woocommerce.com/document/subscriptions/orders/#section-1).

### Subscription Products

[↑ Back to top](#doc-title)

A subscription product is a custom product type that can be selected when [creating a new product](https://woocommerce.com/document/subscriptions/store-manager-guide/#section-1). When referring to a *subscription product* in the WooCommerce Subscriptions code base, 
```
$product
```

 or 
```
$product_id
```

 will be used as the variable name.

Subscription product data is:

- stored with as a 
```
product
```

 or 
```
product_variation
```

 [custom post type](https://codex.wordpress.org/Post_Types) in the database; and
- instantiated as an instance of a child class of 
```
WC_Product
```

 in memory for use at the application level.

### Subscriptions

[↑ Back to top](#doc-title)

Once a customer has purchased a subscription product, it is then stored and accessed as a *subscription*. This is a custom order type, which is referred to in the code base with variable names of 
```
$subscription
```

 or 
```
$subscription_id
```

.

Subscription data is:

**In the WordPress posts storage (legacy):**

- stored with a 
```
shop_subscription
```

 [custom post type](https://codex.wordpress.org/Post_Types) in the database; and
- instantiated as a 
```
WC_Subscription
```

 object in memory for use at the application level.

**in the High-performance order storage (HPOS):**

- stored with a 
```
shop_subscription
```

 type in the 
```
wc_orders
```

  table; and
- instantiated as a 
```
WC_Subscription
```

 object in memory for use at the application level.

For a more indepth, non-technical guide to these two objects, refer to the [Guide to Subscription Products vs. Subscriptions](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/).

## Subscription Product Data Structure and Storage

[↑ Back to top](#doc-title)

As mentioned earlier, subscription product data is stored as a 
```
product
```

 or 
```
product_variation
```

 [custom post type](https://codex.wordpress.org/Post_Types) in the database. These two post types are registered and managed by WooCommerce.

Subscriptions extends these post types using a 
```
subscription
```

 or 
```
variable-subscription
```

 term value for the 
```
product_type
```

 custom taxonomy. The 
```
product_type
```

 taxonomy is registered and managed by WooCommerce. The 
```
subscription
```

 or 
```
variable-subscription
```

 term values are added by Subscriptions to create a *custom product types*.

The database schema for subscription products includes all the same data as the to the schema for WooCommerce corresponding products. Specifically:

- A simple subscription has all the same data as a simple product.
- A variable subscription has all the same data as a variable product.
- A subscription variation has all the same data as a variation.

To make a subscription product unique, they also have additional data, including the following rows store in the post meta table:

- ```
_subscription_price
```

: the recurring price for the subscription product.
- ```
_subscription_sign_up_fee
```

: an optional one-off amount to charge at the time of sign-up.
- ```
_subscription_period
```

: the unit of time for the recurring billing schedule, e.g. week, month or year.
- ```
_subscription_period_interval
```

: the number of units between each renewal for recurring billing schedule, e.g. 
```
2
```

.
- ```
_subscription_length
```

: the number of units of time to wait between sign-up and an automatic expiration date.
- ```
_subscription_trial_period
```

: an optional unit of time to add before the first renewal, e.g. week, month or year.
- ```
_subscription_trial_length
```

: the number of units of time to add before the first renewal, e.g. 
```
2
```

.

This is not an complete list of the additional meta data for subscription products. It includes only the most important and commonly used meta data.

A number of additional piece of meta data are used to store details on other subscription product features like 
```
_subscription_limit
```

 for [limiting subscription purchases](https://woocommerce.com/document/subscriptions/store-manager-guide/#limit-subscription), 
```
_subscription_one_time_shipping
```

 for the [One Time Shipping option](https://woocommerce.com/document/subscriptions/store-manager-guide/#one-time-shipping) and 
```
_subscription_payment_sync_date
```

 for [renewal synchronization](https://woocommerce.com/document/subscriptions/renewal-synchronisation/).

### Subscription Products at the Application Level

[↑ Back to top](#doc-title)

All subscription products are instantiated as an instance of a child class of 
```
WC_Product
```

.

Specifically:

- A simple subscription product is instantiated using 
```
WC_Product_Subscription
```

, which extends 
```
WC_Product_Simple
```
- A variable subscription product is instantiated using 
```
WC_Product_Variable_Subscription
```

, which extends 
```
WC_Product_Variable
```
- A subscription variation is instantiated using 
```
WC_Product_Subscription_Variation
```

, which extends 
```
WC_Product_Variation
```

This means you can use [all the methods of the WC_Product class](https://woocommerce.com/wc-apidocs/class-WC_Product.html) and corresponding parent class on subscription products.

### Working with Subscription Product Data

[↑ Back to top](#doc-title)

Subscription provides an imperative API through the 
```
WC_Subscriptions_Product
```

 which can be used to access subscription data. For example:

- ```
WC_Subscriptions_Product::get_period( $product )
```

: provides the unit of time for a given product’s renewal schedule (the 
```
_subscription_period
```

 post meta mentioned above).
- ```
WC_Subscriptions_Product::get_interval( $product )
```

: provides the number of units of time for a given product’s renewal schedule (the 
```
_subscription_period_interval
```

 post meta mentioned above).
- ```
WC_Subscriptions_Product::get_length( $product )
```

: provides the number of renewals to process before expiring the subscription (the 
```
_subscription_length
```

 post meta mentioned above).

More information on the available functions in 
```
WC_Subscriptions_Product
```

 can be found in the [Subscription Product Function Reference Guide](https://woocommerce.com/document/subscriptions/develop/functions/product-functions/).

It is also possible to access subscription meta data directly via the product properties, but not recommended as it bypasses filters applied to that data. Subscriptions may in the future be changed to use an [object interface](http://php.net/manual/en/language.oop5.interfaces.php) on the subscription product classes for accessing subscription data, but for now, the imperative method is the best option.

## Subscription Data Structure and Storage

[↑ Back to top](#doc-title)

A subscription is almost identical to an order. They differ in their application – a subscription is agreement for transactions in the future, while an order is record of transcations in the past – but their data is very similar. Both have line items, customer details, status etc. Because of this, it makes sense for subscription data to be stored and accessed in the same way as order data.

Fortunately, WooCommerce offers a little known API for doing just that by creating custom order types. This API makes it possible to create orders for use cases other than simply recording purchase transactions. It is used internally by WooCommerce for refunds and used by Subscriptions to create, store and work with subscription data.

**How is the Product linked to someone’s Subscription on the database level?**
- The items in a subscription are stored as 
```
order_items
```
- The 
```
order_id
```

 of a subscription-related 
```
order_item
```

 is actually the ID of a subscription

### Subscription Storage

[↑ Back to top](#doc-title)

Subscription data is stored as a 
```
shop_subscription
```

 [custom post type](https://codex.wordpress.org/Post_Types) in the database. This post type is very similar to the 
```
shop_order
```

 post type and indeed, is even registered by WooCommerce. Subscriptions requests a subscription order type be created and WooCommerce creates the corresponding post type.

The database schema for subscriptions includes all the same data as the schema for orders. Specifically subscriptions and orders both have the following data:

- Customer details: user ID, shipping address, billing address, email, phone number.
- Line items: product, shipping, tax, coupon/discount, fee items.
- Download permissions
- Payment method
- Order notes
- Status

A subscription also has additional data especially for managing renewals, including the following rows stored in the post meta table:

- ```
_schedule_trial_end
```

: a MySQL formatted date/time string in UTC timezone representing the time which the free trial on a subscription ends or ended.
- ```
_schedule_next_payment
```

: a MySQL formatted date/time string in UTC timezone representing the time which the next renewal payment for a subscription will be processed (or in the rare occasion this is in the past, the time it *was* processed).
- ```
_schedule_end
```

: a MySQL formatted date/time string in UTC timezone representing the time which the subscription will expire or end if it is pending cancellation, or the date it has previously ended, if it has expired or was cancelled.
- ```
_requires_manual_renewal
```

: a flag indicating whether a subscription should use the [manual renewal method](https://woocommerce.com/document/subscriptions/renewal-process/#section-1).

This is not an complete list of the extra meta data that may exist on subscriptions. It includes only the most important and commonly used meta data.

A number of additional piece of meta data are used to store details on other subscription product features like 
```
_suspension_count
```

 for keeping track of the number of suspensions. There is also some meta data stored in line item meta data table, like 
```
_has_trial
```

, which is mostly used for internal logic.

**Updating the next payment date for subscriptions?**

Changing the value of 
```
_schedule_next_payment
```

 **does not** re-schedule the scheduled action. If this value is updated directly without **also** rescheduling the scheduled action, the previous value will still be used to process the next renewal order. This can result in multiple renewal orders only a short amount of time apart. Instead, we recommend using the correct function to process these types of changes, in this case: 
```
WC_Subscription::update_dates
```

### Subscriptions at the Application Level

[↑ Back to top](#doc-title)

All subscriptions are instantiated as an instance of a 
```
WC_Subscription
```

. As subscriptions are a custom order type, this class extends the 
```
WC_Order
```

 and inherits [all the methods of WC_Order](https://woocommerce.com/wc-apidocs/class-WC_Order.html) (as well as [WC_Abstract_Order](https://woocommerce.com/wc-apidocs/class-WC_Abstract_Order.html)).

This class also provides a number of subscription specific functions, including:

- ```
WC_Subscription::get_date( $date_type )
```

: gets a specific date, like next payment date.
- ```
WC_Subscription::update_dates( $dates )
```

: sets a specific set of dates, like trial end and next payment date.
- ```
WC_Subscription::calculate_date( $date_type )
```

: calculates a specific date, like next payment date, based on the subscription’s schedule.
- ```
WC_Subscription::get_related_orders( $return_fields, $order_type )
```

: returns orders relating to a subscription, which can be renewal, switch or parent orders.
- ```
WC_Subscription::is_manual()
```

: check whether a subscription is using the [manual renewal method](https://woocommerce.com/document/subscriptions/renewal-process/#section-1).
- ```
WC_Subscription::update_manual( $is_manual )
```

: set whether a subscription should use the manual renewal method or not.

This is just a small sample of the available functions on a 
```
WC_Subscription
```

. More information on the available functions can be found in the [Subscription Function Reference Guide](https://woocommerce.com/document/subscriptions/develop/functions/).

### Subscription ID

[↑ Back to top](#doc-title)

As a subscription is a custom post type, it has a post ID like any other WordPress post type. This is the way to refer to a unique subscription.

This ID can also be used to get the subscription using 
```
wcs_get_subscription()
```

.

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

## How can I deactivate core subscription features, like changing payment methods?

**Source:** [https://woocommerce.com/document/subscriptions/develop/disable-core-subscription-features/](https://woocommerce.com/document/subscriptions/develop/disable-core-subscription-features/)

# How can I deactivate core subscription features, like changing payment methods?

			WooCommerce Subscriptions has a centralized function that checks if specific actions, like changing the payment method or status (e.g., canceling), can be performed on a subscription. This allows WooCommerce developers to disable any action on a subscription as needed.

This guide is for WooCommerce developers who want to extend or integrate with the WooCommerce Subscriptions plugin. To follow this documentation, you will need an advanced understanding of [PHP](http://php.net/) and [WordPress development](https://codex.wordpress.org/Developer_Documentation).

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

You can use the following plugin to switch off any of Subscription’s core features. Uncomment the line with the hook relating to the action you wish to disallow. For example, to no longer allow payment method changes in your store, you should uncomment the line by adding a filter to the 
```
'woocommerce_can_subscription_be_updated_to_new-payment-method'
```

 hook.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  | /** |
|  | * Plugin Name: WooCommerce Subscriptions Disallow Subscription Actions |
|  | * Plugin URI: https://docs.woothemes.com/document/subscriptions/faq/#section-63 |
|  | * Description: Prevent core actions from being carried out on a subscription with the WooCommerce Subscriptions plugin. |
|  | * Author: Brent Shepherd |
|  | * Author URI: |
|  | * Version: 2.0 |
|  | */ |
|  |  |
|  | /** |
|  | * Do not allow any subscriptions to be changed to a new payment method. |
|  | */ |
|  | add_filter( 'woocommerce_can_subscription_be_updated_to_new-payment-method', '__return_false', 100 ); |
|  |  |
|  | /** |
|  | * Do not allow a customer to resubscribe to an expired or cancelled subscription. |
|  | */ |
|  | //add_filter( 'wcs_can_user_resubscribe_to_subscription', '__return_false', 100 ); |
|  |  |
|  | /** |
|  | * Do not allow any subscriptions to switched to a different subscription, regardless of settings (more: http://docs.woothemes.com/document/subscriptions/switching-guide/). |
|  | */ |
|  | //add_filter( 'woocommerce_subscriptions_can_item_be_switched_by_user', '__return_false', 100 ); |
|  | // OR |
|  | //add_filter( 'woocommerce_subscriptions_can_item_be_switched', '__return_false', 100 ); |
|  |  |
|  |  |
|  | /** |
|  | * Subscriptions Status Changes |
|  | **/ |
|  |  |
|  | /** |
|  | * Do not allow any subscriptions to be activated or reactivated (not a good idea). |
|  | */ |
|  | //add_filter( 'woocommerce_can_subscription_be_updated_to_active', '__return_false', 100 ); |
|  |  |
|  | /** |
|  | * Do not allow any subscription to be cancelled, either by the store manager or customer (not a good idea). |
|  | */ |
|  | //add_filter( 'woocommerce_can_subscription_be_updated_to_cancelled', '__return_false', 100 ); |
|  |  |
|  | /** |
|  | * Do not allow any subscription to be suspended, either by the store manager or customer (not a good idea). |
|  | */ |
|  | //add_filter( 'woocommerce_can_subscription_be_updated_to_on-hold', '__return_false', 100 ); |
      [view raw](https://gist.github.com/thenbrent/8851189/raw/7ec3b1cd88793579b03897342cb8089bc7dedb16/wcs-disallow-subscription-actions.php)
        [wcs-disallow-subscription-actions.php](https://gist.github.com/thenbrent/8851189#file-wcs-disallow-subscription-actions-php)
        hosted with ❤ by [GitHub](https://github.com)

					
		
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

## Developer Guide to Failed Recurring Payment Retry System

**Source:** [https://woocommerce.com/document/subscriptions/develop/failed-payment-retry/](https://woocommerce.com/document/subscriptions/develop/failed-payment-retry/)

# Developer Guide to Failed Recurring Payment Retry System

			This page is written for WooCommerce developers who want to extend or integrate with the WooCommerce Subscriptions plugin. You need an advanced understanding of [PHP](http://php.net/) and [WordPress development](http://codex.wordpress.org/Developer_Documentation).

[WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) is a premium plugin, and version 2.1 introduced a new system to automatically retry a recurring payment that previously failed.

This guide provides a technical overview of the Failed Recurring Payment Retry system and is intended for developers looking to customize or otherwise interact with the retry system.

We recommend reading the [Store Owner Guide to the Failed Payment Retry System](https://woocommerce.com/document/subscriptions/failed-payment-retry/) for a non-technical introduction to the retry system.

**Note:** This is a **Developer level** doc. If you are unfamiliar with code/templates and resolving potential conflicts, select a [WooExpert or Developer](https://woocommerce.com/customizations/) for assistance. We are unable to provide support for customizations under our [Support Policy](https://woocommerce.com/support-policy/).

## Retry System Components

[↑ Back to top](#doc-title)

The retry system is made up of a number of different components, each of which implements a distinct aspect of the retry system. These components are:

- **WCS_Retry_Manager**: Manages the entire retry system, from loading all components to hooking into the normal failed payment flow, checking retry rules and applying a rule to retry a failed renewal payment when required.
- **WCS_Retry_Rules**: Sets up the default store-wide rules for retrying failed automatic renewal payments and provides methods for working with rules, like 
```
get_rule()
```

.
- **WCS_Retry_Rule**: Represents instance of a retry rule and provides methods for retrieving and checking a rule’s properties. Used by 
```
WCS_Retry_Rules->get_rule()
```

 and 
```
WCS_Retry->get_rule()
```

.
- **WCS_Retry**: Represents instance of a retry and provides methods for retrieving and checking properties on a retry, like 
```
get_order_id()
```

 and 
```
get_rule()
```

.
- **WCS_Retry_Store**: Provides an extensible interface to store a retry in the database.
- **WCS_Retry_Post_Store**: Implements 
```
WCS_Retry_Store
```

 to store retry details in the WordPress posts table as a [custom post type](https://codex.wordpress.org/Post_Types).
- **WCS_Retry_Database_Store**: Implements 
```
WCS_Retry_Store
```

 to store retry details in the 
```
wcs_payment_retries
```

 custom table.
- **WCS_Retry_Hybrid_Store**: The hybrid store acts as a bridge between the two default stores and migrates retries from the post store to the database store when a retry is retrieved from the post store. This store also extends 
```
WCS_Retry_Store
```

.
- ```
WCS_Retry_Background_Migrator
```

: This class extends the 
```
WCS_Background_Upgrader
```

 class and handles the migration of retries using 
```
WCS_Retry_Migrator
```

 in the background via an Action Scheduler action.
- ```
WCS_Retry_Migrator
```

: The retry migrator contains the logic behind the migration from the post store to the database store.
- **WCS_Retry_Stores**: Managers the two default store interfaces and contains functions to access them. Use 
```
WCS_Retry_Stores::get_post_store()
```

 or 
```
WCS_Retry_Stores::get_database_store()
```

 to get the stores.
- **WCS_Retry_Email**: Manages emails sent as part of the retry process by registering the custom retry email classes and sending emails on relevant hooks.
- **WCS_Email_Payment_Retry**: Controls the email template sent to store owners when an attempt to automatically process a subscription renewal payment has failed and a retry rule has been applied to retry payment in the future.
- **WCS_Email_Customer_Payment_Retry**: Controls the email template sent to the customer/subscriber when an attempt to automatically process a recurring payment has failed and a retry rule has been applied to retry payment in the future.
- **WCS_Retry_Admin**: Sets up the administration UI elements, including the [Automatic Failed Payment Retries meta box](https://woocommerce.com/document/subscriptions/failed-payment-retry/#42-automatic-failed-payment-retries-metabox) and the setting to [Enable the Retry System](https://woocommerce.com/document/subscriptions/failed-payment-retry/#section-1).
- ```
WCS_Retry_Table_Maker
```

: Extends 
```
WCS_Table_Maker
```

, and defines the version and table definition for the retries custom database.

## Retry Process Flow

[↑ Back to top](#doc-title)

The Store Owner Guide provides a non-technical overview of the [Retry Process](https://woocommerce.com/document/subscriptions/failed-payment-retry/#section-2). This section provides a technical guide, including details of hooks involved in the process.

How general retry process proceeds:

1. The 
```
'woocommerce_subscription_renewal_payment_failed'
```

 action is triggered in 
```
WC_Subscription->payment_failed()
```

 after a renewal payment fails.
2. The 
```
WCS_Renewal_Retry_Manager::maybe_apply_retry_rule()
```

 is called, as it’s attached to 
```
'woocommerce_subscription_renewal_payment_failed'
```

.
3. ```
WCS_Renewal_Retry_Manager::maybe_apply_retry_rule()
```

 checks:
- the subscription is manual: 
```
$subscription->is_manual()
```

.
- automatic retry is possible with the payment method on the subscription: 
```
$subscription->payment_method_supports( 'gateway_scheduled_payments' )
```

.
- the last order is a renewal: 
```
wcs_order_contains_renewal( $last_order )
```

.
- there is a retry rule for this stage of the retry process and for this specific order: 
```
WCS_Renewal_Retry_Manager::rules()->has_rule( WCS_Renewal_Retry_Manager::store()->get_retry_count_for_order( $renewal_order->id ), $renewal_order->id )
```

.
4. If all these conditions pass:
- A new pending retry is saved to correspond to the rule: 
```
WCS_Renewal_Retry_Manager::store()->save( $retry )
```

.
- Status of the renewal order is updated according to the rule: 
```
$order->update_status( $new_status )
```

.
- Status of the subscription is updated according to the rule: 
```
$subscription->update_status( $new_status )
```

.
- Interval time defined by the retry rule is then used to set the retry date/time on the subscription: 
```
$subscription->update_dates( array( 'payment_retry' => gmdate( 'Y-m-d H:i:s', gmdate( 'U' ) + $retry_rule->get_retry_interval( $retry_count ) ) ) )
```

.
5. When the scheduled time for the retry event arrives, the 
```
'woocommerce_scheduled_subscription_payment_retry'
```

 action will be triggered passing callbacks the ID of the renewal order to which the retry relates.
6. The 
```
WCS_Renewal_Retry_Manager::maybe_retry_payment()
```

 is called, as it is hooked to 
```
'woocommerce_scheduled_subscription_payment_retry'
```

.
7. ```
WCS_Renewal_Retry_Manager::maybe_retry_payment()
```

 checks:
- Retry still has 
```
pending
```

 status
- Last order still needs payment: 
```
$last_order->needs_payment()
```
8. If these checks fail, the status of the retry is transitioned to 
```
'cancelled'
```

.
9. If they pass, 
```
WCS_Renewal_Retry_Manager::maybe_retry_payment()
```

 will transition the retry to the 
```
'processing'
```

 status and then check:
- Last order still has the status defined by the retry rule applied to it (if a status was defined): 
```
$last_order->has_status( $last_retry->get_rule()->get_status_to_apply( 'order' ) )
```

.
- Subscription still has the status defined by the retry rule applied to it (if a status was defined): 
```
$subscription->has_status( $last_retry->get_rule()->get_status_to_apply( 'subscription' ) )
```

.
10. If these additional checks fail, the status of the retry will be transitioned to 
```
'cancelled'
```
11. If they pass, 
```
WCS_Renewal_Retry_Manager::maybe_retry_payment()
```

 will then:
- Update the subscription status to 
```
on-hold
```

 in preparation for payment (Subscriptions uses this status immediately before payment regardless of status defined by the retry rule to avoid compatibility issues with payment gateways that expect the subscription to have *on-hold*status, as it would for normal recurring payments): 
```
$subscription->update_status( 'on-hold' )
```

.
- Tell the payment gateway on the subscription to process payment for the last order: 
```
WC_Subscriptions_Payment_Gateways::gateway_scheduled_subscription_payment( $subscription )
```

.
12. ```
WCS_Renewal_Retry_Manager::maybe_retry_payment()
```

 will then check the order again and if it does not need payment, the status of retry is transitioned to 
```
'complete'
```

 status as the last payment must have been processed correctly.
13. If the last order still needs payment, the retry is transitioned to 
```
'failed'
```

 status as the last payment did not process correctly.
14. If payment failed, 
```
WC_Subscription->payment_failed()
```

 will trigger 
```
'woocommerce_subscription_renewal_payment_failed'
```

 again and the process repeats from step 1.

## Customizing the Retry Process

[↑ Back to top](#doc-title)

The retry process is based on a set of retry rules, as explained in the [Store Owner Guide to the Failed Payment Retry System](https://woocommerce.com/document/subscriptions/failed-payment-retry/#section-3).

These rules can be customized by changing both the default rule applied to all failed payments in the store and/or one specific rule applied to a given order.

**Please Note:** avoid adding rules that trigger a large number of retry attempts, like dozens or more, or attempt retries very frequently, like multiple times per day, or every day for weeks or months. Some payment gateways may flag your account if they see this type of activity. It can also affect your reputation with the particular bank of the customer’s card. Use automatic retries sparingly and notify the customer of most, if not all retry attempts.

### Rule Data Structure

[↑ Back to top](#doc-title)

Retry rule data can take two forms:

- A *raw* retry rule is an array. This is the form used to store the default rule set in the protected 
```
WCS_Retry_Rules->default_retry_rules
```

 property and to store the rule applied for a specific retry in the database.
- An instance of 
```
WCS_Retry_Rule
```

 (or child class of 
```
WCS_Retry_Rule
```

). This is the form used to work with a specific rule.

#### Raw Rule Data Structure

The raw rule format is an array with the following values:

- ```
retry_after_interval
```

: Amount of time, in seconds, between when the rule is applied and when to reattempt payment. Note: This interval accumulates between rules. For example, consider a store with two rules, the first with an interval of 24 hours and the second with an interval of 48 hours. If the 1st retry attempt fails, the 2nd retry attempt will be run 48 hours after it fails, not 48 hours after the first payment failed. This is 72 hours after first payment failure.
- ```
email_template_customer
```

: Class name of the email template to send the customer when the retry rule is applied (i.e. the payment fails). If empty, no email is sent.
- ```
email_template_admin
```

: Class name of the email template to send the store owner when the retry rule is applied (i.e. the payment fails). If empty, no email is sent.
- ```
status_to_apply_to_order
```

: Status to apply to the renewal order between when payment fails and when it is attempted again. This is **not the status applied after the payment attempt for this retry rule fails**. It is the status applied at the time the retry rule is applied, which happens when the previous payment attempt failed. This can be either the full, internal status name, e.g. 
```
wc-pending
```

 or shorthand status name, e.g. 
```
pending
```

.
- ```
status_to_apply_to_subscription
```

: Status to apply to the subscription between when payment fails and when it is attempted again. This is **not the status applied after the payment attempt for this retry rule fails**. It is the status applied at the time the retry rule is applied, which happens when the previous payment attempt failed. This can be either the full, internal status name, e.g. 
```
wc-on-hold
```

 or shorthand status name, e.g. 
```
on-hold
```

.

This snippet provides an example of rule in the raw, array data structure.

```
array(
    'retry_after_interval'            => DAY_IN_SECONDS,
    'email_template_customer'         => 'WCS_Email_Customer_Payment_Retry',
    'email_template_admin'            => 'WCS_Email_Payment_Retry',
    'status_to_apply_to_order'        => 'pending',
    'status_to_apply_to_subscription' => 'on-hold',
),
```

#### Rule Class Data Structure

The 
```
WCS_Retry_Rule
```

 class is used by default to instantiate retry rule data into the object used in 
```
WCS_Retry_Manager
```

 and elsewhere.

The class used to instantiate rule data can also be customized with the 
```
'wcs_retry_rule_class'
```

 filter. In most cases, this is unnecessary. It is only necessary to achieve behavior not customizable via custom rule filters detailed below.

This snippet provides an example of using a custom rule class.

```
function eg_my_custom_retry_rule_class( $default_retry_class ) {
    return 'EG_Retry_Rule';
}
add_filter( 'wcs_retry_rule_class', 'eg_my_custom_retry_rule_class' );
```

If implementing a custom rule class, either extend WCS_Retry_Rule or be sure to implement all of the methods in WCS_Retry_Rule to avoid errors.

### Custom Storewide Rules

[↑ Back to top](#doc-title)

The retry system uses a default set of rules for managing all failed payments in the store. These rules are defined in 
```
WCS_Retry_Rules::__construct()
```

 and accessed via 
```
WCS_Retry_Rules::get_rule()
```

.

Customizing the default retry rules makes it possible to apply a new set of rules that are better suited to unique requirements for your store. For example, if a store only sells annual subscriptions, you may wish to use retry rules that continue retrying for up to 30 days after the initial payment failed, rather than the much shorter default.

The 
```
'wcs_default_retry_rules'
```

 filter makes it possible to customize the default rules. This filter passes callbacks an array of rules in the raw array rule data structure, and expects to receive the same from callbacks.

**Note:** To apply code to the 
```
'wcs_default_retry_rules'
```

 filter, your 
```
add_filter()
```

 call will need to occur before 
```
WCS_Retry_Rules
```

 is first instantiated, which is attached to the 
```
'woocommerce_subscription_renewal_payment_failed'
```

 and 
```
'woocommerce_scheduled_subscription_payment_retry'
```

 hooks.

#### Example Custom Default Rules

This snippet provides a complete set of custom rules that will:

- Retry a payment 5 times over the course of a month, instead of the default 7 days
- Implement more advanced [dunning](https://en.wikipedia.org/wiki/Dunning_(process)) than the default rules, by sending three different emails to the customer
- Only notify the store owner of the failed payment via email on the first and last retry attempt
- Leave the subscription active for the first 7 days to provide a grace period before blocking access to virtual content linked to the subscription

```
function eg_my_custom_retry_rules( $default_retry_rules_array ) {
    return array(
            array(
                'retry_after_interval'            => 3 * DAY_IN_SECONDS,
                'email_template_customer'         => '',
                'email_template_admin'            => 'WCS_Email_Payment_Retry',
                'status_to_apply_to_order'        => 'pending',
                'status_to_apply_to_subscription' => 'active',
            ),
            array(
                'retry_after_interval'            => 4 * DAY_IN_SECONDS,
                'email_template_customer'         => 'EG_Email_Customer_Payment_Retry_First_Nag', // custom email
                'email_template_admin'            => '',
                'status_to_apply_to_order'        => 'pending',
                'status_to_apply_to_subscription' => 'active',
            ),
            array(
                'retry_after_interval'            => WEEK_IN_SECONDS,
                'email_template_customer'         => '', // avoid spamming the customer by not sending them an email this time either
                'email_template_admin'            => '',
                'status_to_apply_to_order'        => 'pending',
                'status_to_apply_to_subscription' => 'on-hold',
            ),
            array(
                'retry_after_interval'            => WEEK_IN_SECONDS,
                'email_template_customer'         => 'EG_Email_Customer_Payment_Retry_Second_Nag', // custom email
                'email_template_admin'            => '',
                'status_to_apply_to_order'        => 'pending',
                'status_to_apply_to_subscription' => 'on-hold',
            ),
            array(
                'retry_after_interval'            => WEEK_IN_SECONDS,
                'email_template_customer'         => 'EG_Email_Customer_Payment_Retry_Final_Nag', // custom email
                'email_template_admin'            => 'WCS_Email_Payment_Retry',
                'status_to_apply_to_order'        => 'pending',
                'status_to_apply_to_subscription' => 'on-hold',
            ),
        );
}
add_filter( 'wcs_default_retry_rules', 'eg_my_custom_retry_rules' );
```

### Custom Individual Rule

[↑ Back to top](#doc-title)

You may wish to apply different retry rules for different products, billing schedules, payment amounts or other conditions. To do this, you can customize a specific retry rule based on the order ID and its position in the retry queue.

An individual rule can be customized in two ways, depending on the data structure of the rule.

To customize the raw rule in array format, use the 
```
'wcs_get_retry_rule_raw'
```

 filter. To customize the instantiated rule object, use the 
```
'wcs_get_retry_rule'
```

 filter.

Callbacks on both of these filters receive 3 parameters:

1. ```
$rule
```

: this will be:
- an array representing the rule with the array keys described above for 
```
'wcs_get_retry_rule_raw'
```

.
- an instance of 
```
WCS_Retry_Rule
```

 for 
```
'wcs_get_retry_rule'
```

.
- ```
null
```

 if there is no rule for this 
```
$retry_number
```

 and 
```
$order_id
```

.
2. ```
$retry_number
```

: the position in the retry queue, starting at 0. For example, after the first payment failure, there have been no retries, so the 
```
$retry_number
```

 would be 
```
0
```

. If the retry fails after applying this first rule, to get the rule for the 2nd retry, the 
```
$retry_number
```

 would then be 
```
1
```

.
3. ```
$order_id
```

: the ID of the order for which this rule relates.

#### Example Custom Individual Raw Rule

This snippet changes the email template sent to customers for a product with ID 30.

```
function eg_my_custom_retry_rule( $rule_raw, $retry_number, $order_id ) {

    $order       = wc_get_order( $order_id );
    $has_product = false;

    foreach ( $order->get_items() as $line_item ) {
        if ( $line_item['product_id'] == 30 ) {
            $has_product = true;
            break;
        }
    }

    if ( $has_product && ! empty( $rule_raw['email_template_customer'] ) ) {
        $rule_raw['email_template_customer'] = 'EG_Email_Customer_Payment_Retry_Product_Thirty';
    }

    return $rule_raw;
}
add_filter( 'wcs_get_retry_rule_raw', 'eg_my_custom_retry_rule', 10, 3 );
```

#### Example Custom Individual Rule Object

This snippet uses a custom retry rule class and interval for annual subscriptions.

```
function eg_my_custom_retry_rule( $rule, $retry_number, $order_id ) {

    $subscription = wcs_get_subscriptions_for_order( $order, array( 'order_type' => 'renewal' ) );

    if ( ! empty( $subscription ) && 'year' === $subscription->billing_period ) {

        $existing_rule_raw = $rule->get_raw_data();

        if ( ! empty( $existing_rule_raw['retry_after_interval'] ) ) {
            $existing_rule_raw['retry_after_interval'] = WEEK_IN_SECONDS;
            $rule = new EG_Retry_Rule( $rule->get_rule_raw() );
        }
    }

    return $rule;
}
add_filter( 'wcs_get_retry_rule', 'eg_my_custom_retry_rule', 10, 3 );
```

## Testing the Retry System

[↑ Back to top](#doc-title)

After creating custom retry rules, or to check whether your gateway is compatible with the retry system, you can test the retry system with the following process.

### Step 1: Enable the Retry System

[↑ Back to top](#doc-title)

Before testing, ensure that you have [enabled the Retry System](https://woocommerce.com/document/subscriptions/failed-payment-retry/#section-1) in your store.

### Step 2: Trigger a Failed Recurring Payment

[↑ Back to top](#doc-title)

Depending on your gateway, the way to trigger a recurring payment failure will differ. For [Stripe](https://woocommerce.com/products/stripe/) and other payment gateways that support [admin payment method changes](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features) you can:

1. Purchase a subscription using a payment method which supports [payment date changes](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features)
2. Go to: **WooCommerce > Edit Subscription** for that subscription
3. Click the pencil icon next to **Billing Details**
4. Enter dummy payment token meta data so that the payment will fail
5. Click **Save Subscription**
6. After the page has reloaded, click the **Actions** select box in the **Subscription Actions** metabox
7. Click **Process Renewal**
8. Click **Save Subscription**

This creates a renewal order, records the failed payment on that renewal and applies the first retry rule to that order.

### Step 3: Monitor Retries

[↑ Back to top](#doc-title)

At this stage, you can view the details of the *Pending* retry via the interfaces detailed in the [Store Manager guide to Monitoring Retries](https://woocommerce.com/document/subscriptions/failed-payment-retry/#section-4).

If your retry rule worked, you should now be able to see:

- A *Renewal Payment Retry* date on the [WooCommerce > Edit Subscription administration screen](https://woocommerce.com/document/subscriptions/failed-payment-retry/#section-8)
- A *Pending* retry in the [Automatic Failed Payment Retries metabox](https://woocommerce.com/document/subscriptions/failed-payment-retry/#section-9)

### Step 4: Trigger the Retry (Optional)

[↑ Back to top](#doc-title)

If you do not want to wait until the retry is triggered automatically, you can trigger the retry immediately.

To trigger a scheduled payment retry hook immediately:

1. Make sure your store is running in debug mode by setting the [WP_DEBUG constant](https://codex.wordpress.org/WP_DEBUG)
2. Visit your WordPress administration dashboard
3. Go to: **Tools > Scheduled Actions**
4. In the search box, enter the ID of your test order
5. Find the row with the hook 
```
'scheduled_subscription_payment_retry'
```

 and the status *pending*
6. Hover over the row and click **Run**

This immediately triggers the 
```
'scheduled_subscription_payment_retry'
```

 hook.

Subscriptions uses [Action Scheduler](https://actionscheduler.org/) for managing the scheduled retry dates.

![Scheduled Failed Recurring Payment Retry Action Screenshot](https://woocommerce.com/wp-content/uploads/2016/09/retry-scheduled-action.png?w=950)Scheduled Failed Recurring Payment Retry Action

[← WooCommerce Subscriptions Developer Documentation Overview](https://woocommerce.com/document/subscriptions/develop/)

## Retry Migration to Custom Table

[↑ Back to top](#doc-title)

When the retry system was introduced in 2.1, retries were a custom post type and were stored in the WordPress posts and postmeta tables. To improve the performance of the retry system, in version 2.4 we introduced a custom table to store the retry data. With the introduction of this custom table, we needed to migrate the existing data.

Retries are migrated to the custom table in 2 ways:

1. **On the fly**: while retries still exist in the posts table, the 
```
WCS_Retry_Hybrid_Store
```

 is used to act as a bridge between the two data stores. When a retry object is requested (e.g. via 
```
WCS_Retry_Manager::store()->get_retry( $retry_id )
```

), the hybrid store will first check if the retry exists in the post table and if it does, it will migrate the retry data to the new custom table before returning the retry object.
2. **In the background**: when the store upgrades to 2.4, or any version after 2.4, a migration action will be scheduled via the Action Scheduler library. When this action is triggered, the 
```
WCS_Retry_Background_Migrator
```

 class will migrate retries in batches, rescheduling itself every 60 seconds (by default) until all retries have been migrated. 
```
WCS_Retry_Background_Migrator
```

 is initialized by and stored on 
```
WCS_Retry_Manager
```

 as protected variable.

### How do I track the progress of the retry data migration?

[↑ Back to top](#doc-title)

The status of the retry data migration is displayed in the System Status.

1. Go to **WooCommerce > Status**.
2. Scroll down to **Retries Migration Status**.

![](https://woocommerce.com/wp-content/uploads/2016/09/retry-migration-status.png?strip=all&w=704)

### How can I tell how many retries still need to be migrated?

[↑ Back to top](#doc-title)

To see how many retries you still have stored in the posts table:

1. Go to **WooCommerce > Status** and scroll down to the **Post Type Counts** section.
2. The number next to 
```
payment_retry
```

 is the number of retries which haven’t been mirgrated.

If there isn’t any 
```
payment_retry
```

 row displayed in this table, there aren’t any retries still stored in the posts table.

![](https://woocommerce.com/wp-content/uploads/2016/09/payment-retry-post-count.png?strip=all&w=704)

					
		
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

## Subscriptions Filter Reference

**Source:** [https://woocommerce.com/document/subscriptions/develop/filter-reference/](https://woocommerce.com/document/subscriptions/develop/filter-reference/)

# Subscriptions Filter Reference

			This document provides a reference for a few of the more important [filter hooks](https://developer.wordpress.org/plugins/hooks/filters/) triggered by the WooCommerce Subscriptions extension.

If you are looking for a guide to creating and managing subscription products in a WooCommerce store, please refer to the [Store Manager Guide](https://woocommerce.com/document/subscriptions/store-manager-guide/) instead.

This is not an exhaustive list of all filters applied in WooCommerce Subscriptions (there are over 400), nor is it intended to be instructive about when to use these hooks. The guide is provided as a reference for a few of the more useful hooks you can use to interact with WooCommerce Subscriptions from custom code.

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

## Subscription Product Filters

[↑ Back to top](#doc-title)

**Filter:** 
```
'woocommerce_is_subscription'
```

**Parameters:**

```
$is_subscription
```

 A boolean flag (true or false) to indicate whether a given product is a subscription product type.

```
$product_id
```

 The ID of the product to which the 
```
$is_subscription
```

 value relates.

```
$product
```

 An instance of a 
```
WC_Product
```

 to which the 
```
$is_subscription
```

 value relates.

**Description:**
Control whether a given product is seen as a subscription product or not by the rest of WooCommerce Subscriptions. This filter can be used to unlock a range of Subscriptions features for non-subscription products.

---

**Filter:** 
```
'woocommerce_subscriptions_product_price_string'
```

**Parameters:**

```
$subscription_string
```

 String of the form *${price} / {period} for {duration} with a ${price} sign-up fee*. 
```
$product
```

 The 
```
WC_Product
```

 object for which the subscription string should be based on. 
```
$include
```

 An associative array of flags to indicate how to calculate the price and what to include in the string. Possible values:

- ```
'tax_calculation'
```

: 
```
false
```

 to ignore tax, ‘include_tax’ or ‘exclude_tax’ To indicate that tax should be added or excluded respectively
- ```
'subscription_length'
```

: 
```
true
```

 to include subscription’s length (default) or 
```
false
```

 to exclude it
- ```
'sign_up_fee'
```

: 
```
true
```

 to include subscription’s sign up fee (default) or 
```
false
```

 to exclude it
- ```
'price'
```

: a string or int price to use instead of the product’s actual recurring price value

**Description:**
Subscription products have a more complex pricing structure than standard WooCommerce products. Their price includes a billing period, like month, and billing interval, like 2 to bill every 2nd week. The price may also include a total length, like 12 months, and/or sign-up fee.

Wherever a product’s price is displayed, if the product is a subscription, it’s price will be derived from the 
```
WC_Subscriptions_Product::get_subscription_price_string()
```

 function, which passes its return value through this filter.

---

**Filter:** 
```
'woocommerce_subscriptions_product_first_renewal_payment_time'
```

**Parameters:**

```
$first_renewal_timestamp
```

 A unix timestamp representing the date/time in the future in a user specified timezone.

```
$product_id
```

 The ID of the product to which the 
```
$first_renewal_timestamp
```

 value relates.

```
$from_date_param
```

 A MySQL formatted date/time string from which to calculate the date, or empty (default), which will use today’s date/time. Should be in UTC timezone.

```
$timezone
```

 The timezone for the returned date, either ‘site’ for the site’s timezone, or ‘gmt’. Default, ‘site’.

**Description:**
Change when a given product’s first renewal date should be scheduled to occur. This filter can be used to add custom lengths to the initial period of a subscription, for example, for synchronizing payments to a date not possible with the built-in synchronization feature.

The default value is based on the subscription product’s billing period and interval. However, it can be set to any valid date in the future.

## Subscription Product Options Filters

[↑ Back to top](#doc-title)

**Filter:** 
```
'woocommerce_subscription_periods'
```

**Parameters:**

```
$subscription_periods
```

 An associative array of 
```
$period_key => $period_labels
```

 used through out the Subscriptions extension.

**Description:**
The periods used throughout Subscriptions are all passed through this filter. The makes it possible to customise both the periods that are available and the labels associated with these periods.

**Caveats**:
If adding new periods, like bi-weekly or bi-annually, you will also need to ensure that only payment gateways which support these periods are available on the checkout page.

---

**Filter:** 
```
'woocommerce_subscription_lengths'
```

**Parameters:**

```
$subscription_ranges
```

 (array) An associative array of the subscription lengths that can be set on subscription products. The first level of the array is indexed by period keys, i.e. 
```
'day'
```

, 
```
'week'
```

, 
```
'month'
```

 and 
```
'year'
```

. The second level is indexed by an integer representation of the length and 0 for no limit on length.

**Description:** When creating a subscription product, the store manager can optionally set a length on the subscription (e.g $10 / month for 12 months, or $100 every 2 weeks for 52 weeks). This filter can be used to restrict the available lengths for subscription products in the store.

The example below demonstrates how to use this filter to prevent subscriptions with no length.

```
function eg_do_not_allow_all_time_subscriptions( $subscription_lengths ) {

    foreach( $subscription_lengths as $period => $allowed_lengths ) {
        if ( isset( $subscription_lengths[ $period ][0] ) ) {
            unset( $subscription_lengths[ $period ][0] );
        }
    }

    return $subscription_lengths;
}
add_filter( 'woocommerce_subscription_lengths', 'eg_do_not_allow_all_time_subscriptions', 10 );
```

---

**Filter:** 
```
'woocommerce_subscription_period_interval_strings'
```

**Parameters:**

```
$billing_intervals
```

 (array) An array of the billing intervals that can be set on subscription products.

**Description:** When creating a subscription product, the store manager can optionally set a custom billing interval on the product (e.g $10 / month, $10 every 2 months or $10 every 3 months). This filter can be used to restrict the available billing intervals for subscription products in the store.

The example below demonstrates how to use this filter to prevent subscription products with any billing interval other than every day, week or month (i.e. do not allow subscriptions products that renew every 2nd, 3rd, 4th or nth billing period).

```
function eg_do_not_allow_non_single_billing_intervals( $billing_intervals ) {

    array_splice( $billing_intervals, 1 );

    return $billing_intervals;
}
add_filter( 'woocommerce_subscription_period_interval_strings', 'eg_do_not_allow_non_single_billing_intervals', 10 );
```

The default 
```
$billing_intervals
```

 allows up to every 6th period, as seen below:

```
$billing_intervals = Array
(
    [1] => per
    [2] => every 2nd
    [3] => every 3rd
    [4] => every 4th
    [5] => every 5th
    [6] => every 6th
)
```

## Subscriber/User Filters

[↑ Back to top](#doc-title)

**Filter:** 
```
'wcs_get_users_subscriptions'
```

**Parameters:**

```
$subscriptions
```

 The associative array of subscription details for a given user.

```
$user_id
```

 The ID of the user who these subscriptions belong to.

**Description:**
The return value of the 
```
wcs_get_users_subscriptions()
```

 function is passed through this filter. If you wish to dynamically add a subscription to a user, and for whatever reason do not want it stored in the database, perhaps because the subscription is stored on another store, you could use this filter.

---

**Filter:** 
```
'wcs_user_has_subscription'
```

**Parameters:**

```
$has_subscription
```

 A boolen flag (true or false) to indicate whether a given user has a subscription to a certain product.

```
$user_id
```

 The ID of the user the 
```
$has_subscription
```

 value relates to.

```
$product_id
```

 The ID of the product the 
```
$has_subscription
```

 value checked for.

```
$status
```

 A status string to filter the check against only products of a certain status. Default 
```
'any'
```

, which does not apply a status filter.

**Description:**
Indicate whether a given user has a subscription to a given product with an optional status filter.

---

**Filter:** 
```
'wcs_users_change_status_link'
```

**Parameters:**

```
$action_link
```

 A URL based on the current page with status change parameters appended.

```
$subscription_id
```

 The ID of the subscription which the status change relates to.

```
$status
```

 The string representation of the new status that will be applied to the subscription when the user clicks this link.

**Description:**
A store’s [customers can change the status of their subscriptions](https://woocommerce.com/document/subscriptions/customers-view/#section-2) from their **My Account > View Subscription** page using an action button.

The URL for these buttons comes from the 
```
wcs_get_users_change_status_link()
```

 function, which passes its return value through this filter. If the correct URL parameters are set on the link, including a valid status for the 
```
change_subscription_to
```

 parameter, 
```
_wpnonce
```

 & 
```
subscription_id
```

, then the subscription will be changed for the currently logged in user, if it exists and belongs to that user.

---

**Filter:** 
```
'wcs_view_subscription_actions'
```

**Parameters:**

```
$action_link
```

 A URL based on the current page with status change parameters appended.

```
$subscription_id
```

 The ID of the subscription which the status change relates to.

```
$status
```

 The string representation of the new status that will be applied to the subscription when the user clicks this link.

**Description:**
WooCommerce Subscriptions displays a number of buttons on the **My Account > View Subscription** page to allow a store’s [customers to alter their subscriptions](https://woocommerce.com/document/subscriptions/customers-view/).

The values of these buttons comes from the 
```
wcs_get_all_user_actions_for_subscription()
```

 function, which passes its return value through this filter to allow 3rd party code to add additional buttons to this section of the **View Subscription** page.

## Subscription Formatting Filters

[↑ Back to top](#doc-title)

**Filter:** 
```
'woocommerce_subscription_price_string'
```

**Parameters:**

```
$subscription_string
```

 String of the form *${price} up front then ${price} / {period} for {duration}*. 
```
$subscription_details
```

 Array of name => value pairs for the subscription details to include in the string. Available keys:

- ```
'initial_amount'
```

: The upfront payment for the subscription, including sign up fees, as a string from the @see woocommerce_price(). Default empty string (no initial payment)
- ```
'initial_description'
```

: The word after the initial payment amount to describe the amount. Examples include “now” or “initial payment”. Defaults to “up front”.
- ```
'recurring_amount'
```

: The amount charged per period. Default 0 (no recurring payment).
- ```
'subscription_interval'
```

: How regularly the subscription payments are charged. Default 1, meaning each period e.g. per month.
- ```
'subscription_period'
```

: The temporal period of the subscription. Should be one of {day|week|month|year}.
- ```
'subscription_length'
```

: The total number of periods the subscription should continue for. Default 0, meaning continue indefinitely.
- ```
'trial_length'
```

: The total number of periods the subscription trial period should continue for. Default 0, meaning no trial period.
- ```
'trial_period'
```

: The temporal period for the subscription’s trial period. Should be one of {day|week|month|year}.

**Description:**
The price string with billing period, interval, length and sign-up fee is not just required for products. If the cart or an order contains a subscription, those pricing attributes also need to be displayed for the cart and order totals.

Wherever a subtotal or total for the cart or an order containing a subscription is displayed, it’s price will be derived from the 
```
WC_Subscriptions_Manager::get_subscription_price_string()
```

 function, which passes its return value through this filter.

---

## Renewal and Resubscribe Filters

[↑ Back to top](#doc-title)

**Filter:** 
```
'wcs_renewal_order_created'
```

**Parameters:**

```
$renewal_order
```

 An instance of a 
```
WC_Order
```

.

```
$subscription
```

 An instance of a 
```
WC_Subscription
```

 for which the 
```
$renewal_order
```

 was created for.

**Description:**
WooCommerce Subscriptions stores all details of each [subscription renewal](https://woocommerce.com/document/subscriptions/renewal-process/) in a standard WooCommerce order, only with a special meta flag linking it to a subscription.

These orders are always created through the 
```
wcs_create_renewal_order()
```

 function, regardless of whether they are created for a scheduled renewal event, manually via the **WooCommerce > Edit Subscription** administration screen, or via the Subscriptions endpoints for the WooCommerce REST API. Because of this, it’s possible to add, remove or update the value of anything on that renewal order using this filter.

For example, this can be used to add a discount to specific renewal orders, like the 12th order each year. It could also be used to add one-time fee for a certain renewal order, like a special annual extra fee on a monthly subscription.

---

**Filter:** 
```
'wcs_renewal_order_meta_query'
```

**Parameters:**

```
$order_meta_query
```

 (string) The SQL query used to select which post meta data to copy from the original order to the renewal order.

```
$to_order
```

 (int) The order object meta data is being copied to. This will be the renewal order.

```
$from_order
```

 (int) The order object meta data is being copied from. This will be the subscription object.

**Description:** When creating a renewal order, Subscriptions copies almost all of an order’s meta data to renewal orders. The only exceptions are some known meta data added by WooCommerce core or Subscriptions that does not belong on the subscription.

For extensions, Subscriptions follows an **opt-out** policy to determine the meta data which should be copied. This improves compatibly with 3rd party extensions; however, your extension may use meta data which is unique to an order, like a payment token or shipment tracking code.

If your extension does not want certain meta data to be copied from the original order to renewal orders, use this hook to exclude the meta data. The hook requires valid SQL to indicate the meta data which should not be copied.

The example below demonstrates how to use this filter to prevent copying two pieces of custom meta data.

```
function eg_do_not_copy_meta_data( $order_meta_query, $to_order, $from_order ) {

    $order_meta_query .= " AND `meta_key` NOT IN ('_my_extensions_meta_key', '_my_extensions_other_meta_key')";

    return $order_meta_query;
}
add_filter( 'wcs_renewal_order_meta_query', 'eg_do_not_copy_meta_data', 10, 3 );
```

---

**Filter:** 
```
'wcs_can_user_resubscribe_to_subscription'
```

**Parameters:**

```
$can_user_resubscribe
```

 A boolean flag (true or false) to indicate if a given user can [resubscribe to a subscription](https://woocommerce.com/document/subscriptions/resubscribe/).

```
$subscription
```

 A subscription object.

```
$user_id
```

 The user the check was run against. Defaults to currently logged in user, but can be specified as any user.

**Description:** A filter to control whether a given user can can [resubscribe to a subscription](https://woocommerce.com/document/subscriptions/customers-view/#section-7).

By default, for it to be possible to resubscribe to a subscription, it must:

- be inactive (expired or cancelled)
- had at least one payment, to avoid circumventing sign-up fees
- its parent order must not have already been superseded by a renewal order (to prevent displaying “Renew” links on subscriptions that have already been renewed)
- the product to which the subscription was purchase must not have been deleted

This filter can be used to change those requirements.

---

## Subscriptions Administration Filters

[↑ Back to top](#doc-title)

**Filter:** 
```
'woocommerce_subscription_settings'
```

**Parameters:**

```
$settings
```

 An associative array of settings in the format required by the 
```
woocommerce_admin_fields()
```

 function.

**Description:**
This filter can be used to add custom settings to the **WooCommerce > Settings > Subscriptions** administration screen.

The settings for the Subscriptions tab on the WooCommerce settings page are passed through this filter. The settings returned from this filter are used to both output the settings fields, with 
```
woocommerce_admin_fields()
```

 and to save the values of these fields, with 
```
woocommerce_update_options()
```

.

---

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

## Subscription Function & Property Reference

**Source:** [https://woocommerce.com/document/subscriptions/develop/functions/](https://woocommerce.com/document/subscriptions/develop/functions/)

# Subscription Function & Property Reference

			This Subscription Function & Property Reference guide introduces some of the functions available for working with subscription data. It is not intended to provide tutorials on how to achieve certain tasks with a subscription, or as a comprehensive reference of all the subscription methods.

If you have yet, you should read the [Subscription Developer Overview](https://woocommerce.com/document/subscriptions/develop/) and the [Subscription Data Structures and Storage](https://woocommerce.com/document/subscriptions/develop/data-structure/) guides. This guide assumes you are familiar with the WooCommerce Subscriptions plugin architecture and 
```
WC_Subscription
```

 object.

If you are looking for a guide to creating and managing subscription products in a WooCommerce store, please refer to the [Store Manager Guide](https://woocommerce.com/document/subscriptions/store-manager-guide/) instead.

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

## WC_Subscription Function Overview

[↑ Back to top](#doc-title)

The functions provided by 
```
WC_Subscription
```

 class can be split into the following groups:

- methods inherited from [WC_Abstract_Order;](https://woocommerce.github.io/code-reference/classes/WC-Abstract-Order.html)
- methods inherited from [WC_Order;](https://woocommerce.github.io/code-reference/classes/WC-Order.html)
- methods for managing the subscriptions schedule: next payment date, trial end date etc.
- methods for managing renewal payment method;
- methods for working with related orders; and
- other subscription methods

The first of these are documented in the [WooCommerce Code Reference](https://woocommerce.github.io/code-reference/), some of the more important methods in the other groups are documented below.

## Subscription Schedule Functions

[↑ Back to top](#doc-title)

As explained in depth in the [Subscription Product vs Subscription Guide](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/), subscriptions have a billing schedule made up of:

- Start date
- Trial end date
- Next payment date
- End date

To calculate, set and get the values of this schedule, subscriptions provides the following methods.

### WC_Subscription::get_date()

[↑ Back to top](#doc-title)

Get the MySQL formatted date for a specific piece of the subscription’s schedule.

#### Usage

```
<?php WC_Subscription::get_date( $date_type, $timezone ) ?>
```

#### Parameters

```
$date_type
```

 (*string*) (*required*) The type of date to get, can be 
```
'start'
```

, 
```
'trial_end'
```

, 
```
'next_payment'
```

, 
```
'last_payment'
```

 or 
```
'end'
```

. Default: *None* 

```
$timezone
```

 (*string*) (*optional*) The timezone to use for the returned date, either ‘gmt’ or ‘site’. Default ‘gmt’.

#### Return Values

```
(string)
```

 MySQL formatted date/time string.

### WC_Subscription::update_dates()

[↑ Back to top](#doc-title)

Set the dates on the subscription. Because dates are interdependent on each other, this function requires an array of dates, make sure that all dates are valid based on the other dates in the array or stored on the subscription.

#### Usage

```
<?php WC_Subscription::update_dates( $dates, $timezone ) ?>
```

#### Parameters

```
$dates
```

 (*array*) (*required*) Array containing dates with keys: 
```
'start'
```

, 
```
'trial_end'
```

, 
```
'next_payment'
```

, 
```
'last_payment'
```

 or 
```
'end'
```

. Values are MySQL formatted date/time strings.

```
$timezone
```

 (*string*) (*optional*) The timezone to use for the returned date, either ‘gmt’ or ‘site’. Default ‘gmt’.

#### Return Values

```
(null)
```

 No return value.

### WC_Subscription::calculate_date()

[↑ Back to top](#doc-title)

Calculate a given date for the subscription based on its billing interval and period in GMT/UTC timezone.

#### Usage

```
<?php WC_Subscription::calculate_date( $date_type ) ?>
```

#### Parameters

```
$date_type
```

 (*string*) (*required*) The type of date to get, can be 
```
'trial_end'
```

, 
```
'next_payment'
```

, 
```
'end_of_prepaid_term'
```

 or 
```
'end'
```

.

#### Return Values

```
(string)
```

 MySQL formatted date/time string.

### WC_Subscription::can_date_be_updated()

[↑ Back to top](#doc-title)

Check if a given date type can be updated for this subscription.

#### Usage

```
<?php WC_Subscription::can_date_be_updated( $date_type ) ?>
```

#### Parameters

```
$date_type
```

 (*string*) (*required*) The type of date to get, can be 
```
'start'
```

, 
```
'trial_end'
```

, 
```
'next_payment'
```

, 
```
'last_payment'
```

 or 
```
'end'
```

.

#### Return Values

```
(bool)
```

 
```
true
```

 if the date can be updated, 
```
false
```

 if it can not.

### Subscription Billing Period and Interval Properties

[↑ Back to top](#doc-title)

In addition to the function provided by 
```
WC_Subscription
```

, you can also access other aspects of its billing schedule through special properties.

The recurring billing period for an subscription can be found using the 
```
$billing_period
```

 property like so: 
```
$subscription->get_billing_period()
```

 (where 
```
$subscription
```

 is an instance of a 
```
WC_Subscription
```

 object).

The same can be with the 
```
$billing_interval
```

 property: 
```
$subscription->get_billing_interval()
```

.

### Subscription Length and Trial Length

[↑ Back to top](#doc-title)

To get the trial end date for a subscription, it’s possible to use:

```
$subscription->get_date( 'trial_end' );
```

But what about a subscription’s trial length and period?

A 
```
WC_Subscription
```

 has a 
```
$trial_period
```

 property similar to the 
```
$billing_period
```

 property, so you can access a subscriptions trial period via: 
```
$subscription->get_trial_period()
```

.

A subscription has no 
```
$subscription->trial_length
```

 property like a subscription product. Instead, you need to use the trial end date on the subscription.

To do this, use the 
```
wcs_estimate_periods_between()
```

 helper function along with the trial end date and the 
```
$subscription->get_trial_period()
```

 property to find the trial length value:

```
$subscription_trial_length = wcs_estimate_periods_between( $subscription->get_time( 'start' ), $subscription->get_time( 'trial_end' ), $subscription->get_trial_period() );
```

#### Subscription Length

To get the end date or time for a subscription, it’s possible to call:

```
$subscription->get_time( 'end' );
```

If you need to know the number of periods between the start and end of a subscription, you can then use:

```
$subscription_length = wcs_estimate_periods_between( $subscription->get_time( 'start' ), $subscription->get_time( 'end' ), $subscription->get_billing_period() );
```

Alternatively, if you need to know the number of payments for a subscription, you can instead use:

```
if ( WC_Subscriptions_Synchroniser::subscription_contains_synced_product( $subscription->id ) ) {
    $length_from_timestamp = $subscription->get_time( 'next_payment' );
} elseif ( $trial_end_timestamp > 0 ) {
    $length_from_timestamp = $subscription->get_time( 'trial_end' );
} else {
    $length_from_timestamp = $subscription->get_time( 'start' );
}

$subscription_length = wcs_estimate_periods_between( $length_from_timestamp, $subscription->get_time( 'end' ), $subscription->get_billing_period() );
```

Basing the 
```
$length_from_timestamp
```

 on the appropriate date ensures the correct number of payments, instead of the total length of the subscription from sign-up to finish.

## Renewal Payment Method Functions

[↑ Back to top](#doc-title)

Subscriptions can use either [automatic or manual renewal payments](https://woocommerce.com/document/subscriptions/renewal-process/) methods. They can also support a variety a different features, depending on the [payment gateway](https://woocommerce.com/document/subscriptions/payment-gateways/#section-1) used to process payments.

That’s why the 
```
WC_Subscription
```

 object provides a number of functions for access and updating information about a subscription’s payment method.

### WC_Subscription::get_total()

[↑ Back to top](#doc-title)

The 
```
get_total()
```

 method is inherited from [WC_Abstract_Order::get_total()](https://docs.woocommerce.com/wc-apidocs/class-WC_Abstract_Order.html#_get_total).

In the case of a 
```
WC_Subscription
```

, this method returns the recurring total that will be applied to renewal orders by default. From Subscriptions v2.1 onwards, the actual amount charged for renewal payments will be based on the most recent renewal order rather than the 
```
WC_Subscription::get_total()
```

 value to allow 3rd party code to customise the amounts for each renewal; however, the default amount will still be the same as the value returned by 
```
WC_Subscription::get_total()
```

.

#### Usage

```
<?php WC_Subscription::get_total() ?>
```

#### Return Values

```
(float)
```

 The amount total amount that should be charged on future recurring payments.

### WC_Subscription::is_manual()

[↑ Back to top](#doc-title)

Checks if the subscription requires [manual renewal payments](https://woocommerce.com/document/subscriptions/renewal-process/).

#### Usage

```
<?php WC_Subscription::is_manual() ?>
```

#### Return Values

```
(bool)
```

 
```
true
```

 if the subscription requires manual renewal payments, 
```
false
```

 if it is automatic.

### WC_Subscription::set_requires_manual_renewal()

[↑ Back to top](#doc-title)

Set whether a subscription should require [manual renewal payments](https://woocommerce.com/document/subscriptions/renewal-process/).

#### Usage

```
<?php WC_Subscription::set_requires_manual_renewal( $is_manual ) ?>
```

#### Parameters

```
$is_manual
```

 (*bool*) (*required*) Boolean 
```
true
```

 if the subscription should use manual renewal payments, 
```
false
```

 if it should use automatic renewals.

#### Return Values

```
(null)
```

 No return value.

### WC_Subscription::set_payment_method()

[↑ Back to top](#doc-title)

Store a new payment method, and [payment meta data](https://woocommerce.com/document/subscriptions/develop/payment-gateway-integration/change-payment-method-admin/#step-2-declare-your-payment-gateways-meta-data), against a subscription to use for processing future automatic renewal payments.

#### Usage

```
<?php WC_Subscription::set_payment_method( $payment_gateway, $payment_meta ) ?>
```

#### Parameters

```
$payment_gateway
```

 (*WC_Payment_Gateway*) (*required*) An instance of the 
```
WC_Payment_Gateway
```

 object representing the new payment method to store against the subscription. **Note:** although this value has a default value of an empty string, it is still required. The default value is set to comply with the function definition in the parent 
```
WC_Abstract_Order
```

 class 

```
$payment_meta
```

 (*array*) (*optional*) An array of payment meta data, like credit card token or customer token, to use for processing future renewal payments.

#### Return Values

```
(null)
```

 No return value.

### WC_Subscription::payment_method_supports()

[↑ Back to top](#doc-title)

Check if the subscription’s payment method supports a certain [subscription feature](https://woocommerce.com/document/subscriptions/payment-gateways/), like recurring date or amount modifications.

If the subscription uses manual renewals as the payment method, it supports all features. Otherwise, the feature will only be supported if the payment gateway set as the payment method on the subscription supports for the feature.

#### Usage

```
<?php WC_Subscription::payment_method_supports( $payment_gateway_feature ) ?>
```

#### Parameters

```
$payment_gateway_feature
```

 (*string*) (*required*) A [subscription gateway feature](https://woocommerce.com/document/subscriptions/payment-gateways/), like 
```
subscription_suspension
```

, 
```
subscription_reactivation
```

, 
```
subscription_cancellation
```

, 
```
subscription_suspension
```

, 
```
subscription_date_changes
```

 or 
```
subscription_amount_changes
```

.

#### Return Values

```
(bool)
```

 
```
true
```

 if the subscription’s payment method supports the feature or the subscription is using manual renewals, 
```
false
```

 if it does not.

## Related Order Functions

[↑ Back to top](#doc-title)

A subscription can be purchased in an order, have an order created when it renews, and have an order created to record an [upgrade or downgrade](https://woocommerce.com/document/subscriptions/switching-guide/).

To access information about these related orders, the 
```
WC_Subscription
```

 provides a few functions.

### WC_Subscription::get_related_orders()

[↑ Back to top](#doc-title)

Get the orders which have some relationship to the subscription, including renewal orders and the initial order (if any).

#### Usage

```
<?php WC_Subscription::get_related_orders( $return_fields, $order_type ) ?>
```

#### Parameters

```
$return_fields
```

 (*string*) (*optional*) The columns to return, either 
```
'all'
```

 or 
```
'ids'
```

. Default: 
```
'ids'
```

. $order_type (*array|string*) (*optional*) The type of orders to return, either 
```
'parent'
```

, 
```
'renewal'
```

, 
```
'resubscribe'
```

, 
```
'switch'
```

 or 
```
'any'
```

. Multiple order type values can also be provided in an array. Default 
```
array( 'parent', 'renewal' )
```

.

#### Return Values

```
(array)
```

 An array of either the IDs 
```
(int)
```

 of the related orders or 
```
WC_Order
```

 objects.

### WC_Subscription::get_payment_count()

[↑ Back to top](#doc-title)

Get the number of payments completed for a subscription.

Completed payments include all renewal orders and potentially an initial order (if the subscription was created as a result of a purchase from the front end rather than manually by the store manager).

#### Usage

```
<?php WC_Subscription::get_payment_count( $payment_type, $order_types ) ?>
```

#### Parameters

```
$payment_type
```

 (*string*) (*optional*) Type of count (
```
'completed'|'refunded'|'net'
```

). Default completed. $order_types (*array|string*) (*optional*) Type of order relation(s) to count.
```
'parent'
```

 and/or 
```
'renewal'
```

. Multiple order type values can also be provided in an array. Default 
```
array( 'parent', 'renewal' )
```

.

#### Return Values

```
(int)
```

 The total number of related orders marked with a status representing a 
```
'completed'|'refunded'|'net'
```

 payment depending on the first parameter.

### WC_Subscription::get_failed_payment_count()

[↑ Back to top](#doc-title)

Get the number of failed payments completed for a subscription, based on the number of orders with the 
```
wc-failed
```

 status.

#### Usage

```
<?php WC_Subscription::get_failed_payment_count() ?>
```

#### Return Values

```
(float)
```

 The total number of related orders marked with a failed status.

## Other Functions

[↑ Back to top](#doc-title)

### WC_Subscription::is_one_payment()

[↑ Back to top](#doc-title)

Determine if the subscription is for one payment only, for example $100 for 1 year instead of $100 per year.

#### Usage

```
<?php WC_Subscription::is_one_payment() ?>
```

#### Return Values

```
(bool)
```

 
```
true
```

 if the subscription requires only one payment, 
```
false
```

 if it does not.

### WC_Subscription::get_sign_up_fee()

[↑ Back to top](#doc-title)

Get the total sign-up fee amount charged at the outset of the subscription, if any.

#### Usage

```
<?php WC_Subscription::get_sign_up_fee() ?>
```

#### Return Values

```
(float)
```

 The total sign-up fee amount charged at the time of sign-up for the line items on the subscription.

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

## Subscriptions Management Function Reference

**Source:** [https://woocommerce.com/document/subscriptions/develop/functions/management-functions/](https://woocommerce.com/document/subscriptions/develop/functions/management-functions/)

# Subscriptions Management Function Reference

			The 
```
WC_Subscriptions_Manager
```

 class is responsible for managing the subscription across its lifecycle. This involves updating subscription statuses when certain events occur, like order status changes, preparing renewal orders when a scheduled renewal payment is due and deleting subscriptions when a user’s account is deleted.

For example, subscription activation and cancellation functions are hooked directly to order status changes so payment gateways only need to work with WooCommerce APIs to change the status of an order, and a subscriptions status will change automatically.

You can however call the 
```
WC_Subscriptions_Manager
```

 class’s public functions directly if needed. This document provides a reference for some of the functions this class provides that may be useful.

If you are looking for a guide to creating and managing subscription products in a WooCommerce store, please refer to the [Store Manager Guide](https://woocommerce.com/document/subscriptions/store-manager-guide/) instead.

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

## activate_subscriptions_for_order()

[↑ Back to top](#doc-title)

Activates all the subscriptions linked to an order.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Manager::activate_subscriptions_for_order( $order ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

```
$order
```

 (*mixed*) (*required*) A 
```
WC_Order
```

 object or ID of the order for which subscription payments should be marked against. Default: *None*

### Return Values

[↑ Back to top](#doc-title)

```
(void)
```

 This function does not return a value.

## cancel_subscriptions_for_order()

[↑ Back to top](#doc-title)

Marks all subscriptions linked to an order as cancelled. This function is called automatically from the 
```
'woocommerce_order_status_cancelled'
```

 hook, which is triggered when an order’s status is changed to cancelled.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Manager::cancel_subscriptions_for_order( $order ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

```
$order
```

 (*mixed*) (*required*) A 
```
WC_Order
```

 object or ID of the order for which subscription payments should be marked against. Default: *None*

### Return Values

[↑ Back to top](#doc-title)

```
(void)
```

 This function does not return a value.

## process_subscription_payments_on_order()

[↑ Back to top](#doc-title)

Loops over all subscriptions linked to an order and processes payments on those subscriptions.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Manager::process_subscription_payments_on_order( $order ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

```
$order
```

 (*mixed*) (*required*) A 
```
WC_Order
```

 object or ID of the order for which subscription payments should be marked against. Default: *None*

### Return Values

[↑ Back to top](#doc-title)

```
(void)
```

 This function does not return a value.

## process_subscription_payment_failure_on_order()

[↑ Back to top](#doc-title)

Loops over all subscriptions linked to an order and processes failed payments on those subscriptions.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Manager::process_subscription_payment_failure_on_order( $order ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

```
$order
```

 (*mixed*) (*required*) A 
```
WC_Order
```

 object or ID of the order for which subscription payment failures should be marked against. Default: *None*

### Return Values

[↑ Back to top](#doc-title)

```
(void)
```

 This function does not return a value.

## expire_subscriptions_for_order()

[↑ Back to top](#doc-title)

Marks all the subscriptions in an order as expired.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Manager::expire_subscriptions_for_order( $order ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

```
$order
```

 (*mixed*) (*required*) A 
```
WC_Order
```

 object or ID of the order for which subscription payments should be marked against. Default: *None*

### Return Values

[↑ Back to top](#doc-title)

```
(void)
```

 This function does not return a value.

## failed_subscription_sign_ups_for_order()

[↑ Back to top](#doc-title)

When a payment/subscription sign up fails during the payment processing step, this function will process failed payment for all subscriptions linked to the order. This function is called automatically from the 
```
'woocommerce_order_status_failed'
```

 hook, which is triggered when an order’s status is changed to failed.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Manager::failed_subscription_sign_ups_for_order( $order ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

```
$order
```

 (*mixed*) (*required*) A 
```
WC_Order
```

 object or ID of the order for which subscriptions should be marked as failed. Default: *None*

### Return Values

[↑ Back to top](#doc-title)

```
(void)
```

 This function does not return a value.

## cancel_users_subscriptions()

[↑ Back to top](#doc-title)

Takes a user ID and cancels any subscriptions that user has in the store.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Manager::cancel_users_subscriptions( $user_id ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

```
$user_id
```

 (*int*) (*required*) The id of the user whose subscription is to be cancelled. Default: *None*

### Return Values

[↑ Back to top](#doc-title)

```
(void)
```

 This function does not return a value.

## cancel_users_subscriptions_for_network()

[↑ Back to top](#doc-title)

Takes a user ID and cancels any subscriptions that user has in all stores on a multisite network.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Manager::cancel_users_subscriptions_for_network( $user_id ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

```
$user_id
```

 (*int*) (*required*) The id of the user whose subscription should be cancelled. Default: *None*

### Return Values

[↑ Back to top](#doc-title)

```
(void)
```

 This function does not return a value.

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

## Subscription Order & Cart Function Reference

**Source:** [https://woocommerce.com/document/subscriptions/develop/functions/order-cart-functions/](https://woocommerce.com/document/subscriptions/develop/functions/order-cart-functions/)

# Subscription Order & Cart Function Reference

			The Subscription Order & Cart Function Reference guide provides a reference for a few utility functions in the WooCommerce Subscriptions code base, relating to orders and the cart. It is neither exhaustive nor instructive of when to use these functions. It is simply intended as a reference for a few public functions that 3rd party code can use to interact with WooCommerce Subscriptions.

For a more comprehensive source of information in how WooCommerce Subscriptions interacts with WooCommerce orders and the cart, refer to the following source files:

- ```
wcs-order-functions.php
```
- ```
wcs-cart-functions.php
```
- ```
class-wc-subscriptions-order.php
```
- ```
class-wc-subscriptions-cart.php
```

If you are looking for a guide to creating and managing subscription products in a WooCommerce store, please refer to the [Store Manager Guide](https://woocommerce.com/document/subscriptions/store-manager-guide/) instead.

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

## wcs_order_contains_subscription()

[↑ Back to top](#doc-title)

Checks a given order to see if it was used to purchase a 
```
WC_Subscription
```

 object via checkout.

### Usage

[↑ Back to top](#doc-title)

```
<?php wcs_order_contains_subscription( $order, $order_type ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

```
$order
```

 (*mixed*) (*required*) The 
```
WC_Order
```

 object or ID of the order which should be checked. Default: *None*

```
$order_type
```

 (*array|string*) (*optional*) Can include ‘parent’, ‘renewal’, ‘resubscribe’ and/or ‘switch’. Defaults to ‘parent’.

### Return Values

[↑ Back to top](#doc-title)

```
(bool)
```

 
```
True
```

 if the order contains a subscription, otherwise 
```
false
```

.

## wcs_get_subscriptions_for_order()

[↑ Back to top](#doc-title)

Get all of the subscriptions (i.e. 
```
WC_Subscription
```

 objects or a given order.

### Usage

[↑ Back to top](#doc-title)

```
<?php wcs_get_subscriptions_for_order( $order_id, $args ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

```
$order_id
```

 (*mixed*) (*required*) The 
```
WC_Order
```

 object or ID of the order to get the corresponding subscriptions for.

```
$args
```

 (*array*) (*optional*) A set of name value pairs to filter the returned value. Refer to the PHP DocBlock on 
```
wcs_get_subscriptions_for_order()
```

 for available fitlers.

### Return Values

[↑ Back to top](#doc-title)

```
(array)
```

 Set of subscriptions in an array with the form 
```
ID => WC_Subscription
```

 form.

## Cart Functions

[↑ Back to top](#doc-title)

The 
```
WC_Subscriptions_Cart
```

 class is mostly dedicated to overloading its 
```
WC_Cart
```

 counterpart and does not provide many functions intended to be used as public APIs. However, it does have one important function: 
```
WC_Subscriptions_Cart::cart_contains_subscription
```

.

## WC_Subscriptions_Cart::cart_contains_subscription

[↑ Back to top](#doc-title)

Checks the cart to see if it contains a subscription product.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Cart::cart_contains_subscription() ?>
```

### Return Values

[↑ Back to top](#doc-title)

```
(bool)
```

 
```
True
```

 if the cart contains a subscription product, otherwise 
```
false
```

.

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

## Subscription Product Function Reference

**Source:** [https://woocommerce.com/document/subscriptions/develop/functions/product-functions/](https://woocommerce.com/document/subscriptions/develop/functions/product-functions/)

# Subscription Product Function Reference

			The 
```
WC_Subscriptions_Product
```

 class is the Subscription extensions counterpart to the 
```
WC_Product
```

 class. It is used to extend the 
```
WC_Product
```

 class provide an API for accessing details of a subscription product type.

This Subscription Product Function Reference guide is for WooCommerce developers who want to extend or integrate with the WooCommerce Subscriptions plugin. To follow this documentation, you will need an advanced understanding of [PHP](http://php.net/) and [WordPress development](https://codex.wordpress.org/Developer_Documentation).

For a guide to creating and managing subscription products in a WooCommerce store, please refer to the [Store Manager Guide](https://woocommerce.com/document/subscriptions/store-manager-guide/) instead.

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

## WC_Subscriptions_Product::get_price_string

[↑ Back to top](#doc-title)

Returns a string representing the details of the subscription. For example “$20 per Month for 3 Months with a $10 sign-up fee”.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Product::get_price_string( $product ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

```
$product
```

 (*mixed*) (*required*) A 
```
WC_Product
```

 object or product ID which will be checked to see if it is of the subscription type.Default: *None*

### Return Values

[↑ Back to top](#doc-title)

```
(string)
```

 This string representation of a subscription price including period, duration and sign-up fee, if set.

## WC_Subscriptions_Product::get_price

[↑ Back to top](#doc-title)

Returns the price per period for a product if it is a subscription.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Product::get_price( $product ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

```
$product
```

 (*mixed*) (*required*) A 
```
WC_Product
```

 object or product ID.Default: *None*

### Return Values

[↑ Back to top](#doc-title)

```
(mixed)
```

 The price charged per period for the subscription, or an empty string if the product is not a subscription.

## WC_Subscriptions_Product::get_period

[↑ Back to top](#doc-title)

Returns the subscription period for a product, if it’s a subscription.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Product::get_period( $product ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

```
$product
```

 (*mixed*) (*required*) A 
```
WC_Product
```

 object or product ID.Default: *None*

### Return Values

[↑ Back to top](#doc-title)

```
(string)
```

 A string representation of the period, either Day, Week, Month or Year, or an empty string if product is not a subscription.

## WC_Subscriptions_Product::get_length

[↑ Back to top](#doc-title)

Returns the length of the subscription for a product, if it is a subscription.

Length is represented by an integer for the number of periods payment will recur.

For example, for a subscription lasting 6 months, this function would return 6.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Product::get_length( $product ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

$product (*mixed*) (*required*) A 
```
WC_Product
```

 object or product ID.Default: *None*

### Return Values

[↑ Back to top](#doc-title)

(int) An integer representing the length of the subscription, or 0 if the product is not a subscription or the subscription continues for perpetuity.

## WC_Subscriptions_Product::get_expiration_date

[↑ Back to top](#doc-title)

Takes a subscription product’s ID and returns the date on which the subscription product will expire, based on the subscription’s length and calculated from either the 
```
$order_date
```

 if specified, or the current date/time.

### Usage

[↑ Back to top](#doc-title)

```
<?php WC_Subscriptions_Product::get_expiration_date( $product_id, $order_date ) ?>
```

### Parameters

[↑ Back to top](#doc-title)

$product (*int*) (*required*) The ID of the product to determine the expiration date for.Default: *None* $order_date (*string*) (*optional*) A MYSQL formatted date/time string from which to calculate the expiration date. Defaults to use today’s date/time.Default: *Empty (today’s date)*

### Return Values

[↑ Back to top](#doc-title)

(mixed) If the product has a duration, the return is the MYSQL formatted date/time of its expiration from 
```
$order_date
```

. If no expiration is set, the return is 0.

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

## Store Manager Guide to Multiple Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/develop/multiple-subscriptions-2/](https://woocommerce.com/document/subscriptions/develop/multiple-subscriptions-2/)

# Store Manager Guide to Multiple Subscriptions

			[WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) is a premium WooCommerce extension WooCommerce [Subscriptions version 2.0](https://woocommerce.com/document/subscriptions/version-2/) introduced a way to purchase different subscription products in the one transaction. Designing a system for purchasing different subscription products means handling thousands of potential billing schedules, which creates a number of challenges; especially as taxes, shipping, fees and other amounts need to be calculated for each of these billing schedules.

This guide provides an overview of the decisions made to implement multiple subscription handling. It is intended to provide a non-technical overview. For a technical document on how mulitple subscriptions are implemented, refer to the [Developer Guide to Multiple Subscriptions](https://woocommerce.com/document/subscriptions/develop/multiple-subscriptions/).

Before continuing with this guide, it will be helpful to understand the [difference between a subscription product and a subscription](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/) and the [subscription renewal process](https://woocommerce.com/document/subscriptions/renewal-process/).
## Goals for Multiple Subscriptions

[↑ Back to top](#doc-title)
The reasons store managers requested it be possible for customers to purchase different subscription products were:
- to prevent making customers repeat the entire checkout process for each subscription product they wished to purchase;
- to reduce payment gateway fees by processing the sign-up and renewal of multiple products in the one transaction (most payment gateways charge a flat per transaction fee); and
- to consolidate renewals and reduce the number of renewal orders created to avoid having to process multiple orders for the one shipment to a customer.

## Challenges of Multiple Subscriptions

[↑ Back to top](#doc-title)
Designing a system for purchasing products with thousands of possible combinations of billing schedule creates a number of challenges.

The key challenges in designing a system to handle multiple subscriptions were:
- account for shipping calculations, which can be charged per order, per item, per shipping class and any combination of the above.
- present all relevant information about the billing agreements being made between the customer and the store, including recurring taxes and shipping amounts, while avoiding presenting so much information on the checkout page that the customer feels overwhelmed or confused and abandons the checkout.
- create a system that is straight forward for store managers to understand and does not create excessive overhead for managing subscriptions and renewal orders.

## Solution: Grouping Subscriptions

[↑ Back to top](#doc-title)
After examining a number of alternatives, the method chosen to make it possible to purchase different subscription products was to group each subscription product with an equivalent billing schedule into the one subscription.

For example, if a customer purchases 2 x monthly subscriptions and 3 x yearly subscriptions in the one transaction, only 2 x subscriptions would be created – one with two line items for the monthly subscription products and one with three line items for the annual subscription products.

This allows recurring shipping costs to be accurately calculated and displayed during sign-up, while also consolidating renewal orders and reducing payment gateway fees for subscription products purchased in the same transaction.
### Details of Grouping

[↑ Back to top](#doc-title)
WooCommerce Subscriptions will create the minimum number of subscriptions possible. To do this, it will group subscriptions based on each product’s:
- billing interval and period, to make sure the billing schedule for all products is honoured.
- subscription length, to make sure the end date can be set correct for each subscription product.
- first renewal date, to account for products with a free trial or [synchronised renewal date](https://woocommerce.com/document/subscriptions/renewal-synchronisation/).

For example, all of the following subscription products would be grouped together:
- $10 every 2nd month
- $25 every 2nd month with 2 months free trial (because the first renewal date after the free trial is equivalent to the first renewal date of the product without a free trial)
- $30 every 2nd month synchronised to today’s date

On the other hand, none of the following subscription products would be grouped together:
- $10 per month
- $10 per month for 12 months
- $10 per month synchronised to tomorrow’s date
- $10 per month with 2 weeks free trial

### Cart Grouping

[↑ Back to top](#doc-title)
The lifecycle for a subscription product is: **Product > Cart > Checkout > Order > Subscription**.

To support the purchase of multiple subscription products in the one transaction, the cart therefore needs to be able to contain multiple subscription products.

As the products will be grouped into subscriptions after checkout, the products are also grouped in the cart based on billing schedule. This also allows for the recurring totals to be displayed based on the grouped billing schedules, reducing the number of rows that need to be displayed to the customer to accurately present the recurring tax, shipping and total.
### Grouped Recurring Total Display

[↑ Back to top](#doc-title)
Subscriptions v1.5 displayed the recurring totals alongside the order totals on the cart and order review pages. However, by supporting multiple subscriptions in the one transaction, different billing schedules need to be displayed to the customer to fully communicate the commitment of the subscription.

![Subscription v1.5 Recurring Total Display](https://woocommerce.com/wp-content/uploads/2015/09/old-subscription-recurring-total-display.png?strip=all&w=704)Subscription v1.5 Recurring Total Display

A new **Recurring Totals** section was added below the existing order totals section to display this information. Each groups of subscription products will have a row in the **Recurring Totals** section for:
- subtotal
- shipping
- taxes
- discounts
- total

![Subscriptions v2.0 Recurring Total Display](https://woocommerce.com/wp-content/uploads/2015/09/new-subscription-recurring-total-display.png?strip=all&w=704)Subscriptions v2.0 Recurring Total Display
### Order Grouping

[↑ Back to top](#doc-title)
As mentioned above, after purchasing multiple subscription products in the same transaction, the products with the same billing schedule will be grouped together as line items on the one subscription object (as opposed to each subscription having only one product/line item associated with it).

For example, the three screenshots below show:
- an order used to purchase 4 subscription products – it has 4 line items; and
- two subscriptions created to store data for the 4 subscription products – each has 2 line items.

### Issues with Grouping

[↑ Back to top](#doc-title)
No design is perfect, and as such, this implementation did introduce some new issues. These issues and the solutions are:
- a customer could no longer cancel subscriptions to an individual item. This was resolved by adding a [remove item button on the View Subscription page](https://woocommerce.com/document/subscriptions/version-2/#remove-single-item) to allow the customer to remove individual items.
- switching was previously done per subscription, which would not work with a subscription that has multiple line items. As a result, this process has been updated to be [per item](https://woocommerce.com/document/subscriptions/version-2/#section-6), instead of per subscription.
- subscription products purchased separately are not grouped together, which results in extra renewal orders and gateway fees. This issue has not been addressed with v2.0 and instead, may be address in a later version or as a separate extension in the form of a *Add to Subscription* button. This can replace or be displayed alongside the *Add to Cart* button, allowing customers to add new products to an existing subscription, rather than creating a new subscription, while still requiring them to review and agree to the shipping costs of that subscription.

## Alternative Implementation

[↑ Back to top](#doc-title)
Before deciding on Grouping Subscription products, alternative implements were explored, including an implementation which created a separate subscription for each subscription product purchased in the transaction.

For example, if a customer was to purchase 2 x monthly subscriptions and 3 x yearly subscriptions in the one transaction, 5 x subscriptions would be created with each including a single line item for that product.
### Issues with this Design

[↑ Back to top](#doc-title)
This system would be most similar to the existing design, but it did not take full advantage of the flexibility of the changes being introduced in v2.0. It applied the constraints of the previous designs to the new architecture.

Furthermore, to achieve the goal of consolidating renewal orders and reducing payment gateway fees, this system would need a batch processing system to group each subscription’s renewals into the one order.

Batch processing created a major issue: shipping could not accurately be calculated and agreed to on checkout at the time of sign-up. Because some shipping methods charge per order, and subscriptions were batched into renewal orders, any time a customer purchased new subscriptions or cancelled existing subscriptions, the shipping amount would be different at renewal to the time of sign-up. This issue was found unavoidable and would ultimately introduce an unfixable bug. As a result, create a single subscription and batch processing all renewals was not chosen as the final implementation.
## Alternative Recurring Totals Display

[↑ Back to top](#doc-title)
A few options were explored for how to display recurring totals for multiple subscriptions, including:
1. do not display the totals;
2. continue to display recurring totals inside of the order totals section;
3. add a new **Recurring Totals** section below the existing order totals section to display recurring subtotal, shipping, taxes and total.
4. display a complete order table for each subscription below the **Sign Up Now**/**Place Order** button.

The first of these is not legal in many countries so was not seriously considered. The second would make the order totals section very crowded, while the fourth included a lot of duplicated information.

As a result, the **Recurring Totals** section was chosen as it was the most concise method that still provided accurate information for each recurring amount.

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

## Developer Guide to Multiple Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/develop/multiple-subscriptions/](https://woocommerce.com/document/subscriptions/develop/multiple-subscriptions/)

# Developer Guide to Multiple Subscriptions

			This Developer Guide to Multiple Subscriptions provides an overview of the technical implementation of multiple subscription handling for when multiple subscription products are purchased together in the one transaction.

For a more comprehensive overview of the system, including the decisions involved in choosing this implementation, refer to the [Store Manager Guide to Multiple Subscriptions](https://woocommerce.com/document/subscriptions/develop/multiple-subscriptions-2/). If you have not already, you should read that guide before continuing with this document.

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

## Grouping Subscriptions

[↑ Back to top](#doc-title)

The way multiple subscriptions are handled is by grouping each subscription product with the same billing schedule into one subscription product.

For example, if a customer purchases 2 x monthly subscriptions and 3 x yearly subscriptions in the one transaction, only 2 x subscriptions would be created; one with line items for the monthly subscription products, and one with line items for the annual subscription products.

This allows shipping to be accurately calculated and displayed during sign-up, while also consolidating renewal orders, and reducing payment gateway fees for subscription products purchased in the same transaction.

### Cart Grouping

[↑ Back to top](#doc-title)

To support the purchase of multiple subscriptions in the same transaction, the cart (
```
WC_Cart
```

) stores each subscription’s recurring totals in an array of carts (
```
WC_Cart
```

 objects) in a new 
```
WC_Cart::$recurring_carts
```

 property.

The 
```
WC_Cart::$recurring_carts
```

 property includes an instance of 
```
WC_Cart
```

 for each distinct billing schedule. For example, if the cart contains 2 x products renewing each year, and 3 x products which renew each month, the 
```
WC_Cart::WC_Cart::$recurring_carts
```

 property will contain two 
```
WC_Cart
```

 objects; one for the items and totals of the annual products and one for the monthly products.

#### Recurring Cart Key

The grouping of items is handled by creating a key for each subscription product based on its:

- first payment date – this accounts for free trial periods, synchronised renewal dates and any prorated duration that results from switching a subscription.
- billing period and interval – a subscription’s billing period (e.g. month or week) and interval (i.e. every 2nd) is then added to group subscriptions based on their billing schedule.
- length – if a subscription expires at some time in the future, this is taken into account to avoid grouping subscriptions on the same schedule, that do not expire with subscriptions that do expire.

The recurring cart key is created by the method 
```
WC_Subscriptions_Cart::get_recurring_cart_key()
```

.

It can also be modified using the 
```
'woocommerce_subscriptions_recurring_cart_key'
```

 filter.

Recurring Cart Key Examples

If purchasing a subscription on 18 December 2024, that has 1 month free trial and then is $50 / month for 12 months, its recurring cart key will be 
```
'2024_01_18_monthly_for_12_months'
```

.

If purchasing a subscription on 21 December 2024 that has 4 weeks free trial and then is $50 every 2nd week, its recurring cart key will be 
```
'2024_01_18_every_2nd_week'
```

.

### Grouped Recurring Total Display

[↑ Back to top](#doc-title)

By supporting multiple subscriptions in the one transaction, multiple different recurring periods needs to be displayed, so that the customer understands the commitment they are making. This is handled by the **Recurring Totals** section, which is the most concise method that still provides accurate information for each recurring amount.

Each groups of subscription products has a row in the **Recurring Totals** section for:

- subtotal
- shipping
- taxes
- discounts
- total

![Subscriptions v2.0 Recurring Total Display](https://woocommerce.com/wp-content/uploads/2015/09/new-subscription-recurring-total-display.png?strip=all&w=704)Subscriptions v2.0 Recurring Total Display

### Order Grouping

[↑ Back to top](#doc-title)

After purchasing multiple subscription products in the same transaction, the products with the same billing schedule are grouped together as line items on the one subscription object (as opposed to each subscription having only one product/line item associated with it).

For example, the 3 screenshots below show:

- an order used to purchase 4 subscription products – it has 4 line items;
- 2 subscriptions created to store data for the 4 subscription products – each has 2 line items.

![](https://woocommerce.com/wp-content/uploads/2015/09/example-order-for-subscription-products.png?strip=all&w=704)

![](https://woocommerce.com/wp-content/uploads/2015/09/example-subscription-totals-2.png?strip=all&w=704)

![](https://woocommerce.com/wp-content/uploads/2015/09/example-subscription-totals.png?strip=all&w=704)

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

## Subscriptions Payment Gateway Integration Guide

**Source:** [https://woocommerce.com/document/subscriptions/develop/payment-gateway-integration/](https://woocommerce.com/document/subscriptions/develop/payment-gateway-integration/)

# Subscriptions Payment Gateway Integration Guide

			Adding subscription support to your existing payment gateway extension is a great way to attract new customers and provide a sought-after feature for your existing customers. This guide outlines the necessary steps for integrating a payment gateway with WooCommerce Subscriptions.

If you are looking for a guides to creating and managing subscriptions in your store, refer to the [Introduction to Subscriptions](https://woocommerce.com/document/subscriptions/).

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

Subscriptions provides a comprehensive API and takes care of much of the subscription management automatically – you just need to add payment processing.

There are 6 steps to add subscription support:

1. Register Support for Subscriptions
2. Process Subscription Sign-ups
3. Manage Subscriptions
4. Process Failed Payments
5. Handle Recurring Payment Method Changes
6. Show your Support

Before continuing with this guide, you should have read the [Subscriptions’ API overview](https://woocommerce.com/document/subscriptions/develop/). You should also have an in-depth understanding of the [WooCommerce Payment Gateway API](https://woocommerce.com/document/payment-gateway-api/).

Need to upgrade a payment gateway for WooCommerce Subscriptions version 2.0? Check out the [Payment Gateway Upgrade Guide](https://woocommerce.com/document/subscriptions/develop/payment-gateway-integration/upgrade-guide-for-subscriptions-v2-0/).

## Step 1: Registering Support for Subscriptions

[↑ Back to top](#doc-title)

When an order contains a subscription product, the Subscriptions extension filters the available payment gateways to display only those that support recurring payments.

Your gateway must register its support for subscriptions using the 
```
WC_Payment_Gateway::supports()
```

 API (in WooCommerce 1.5.7 and newer). This is done by setting the 
```
supports
```

 property of your gateway to an array containing *‘subscriptions’* (and *‘products’* if your gateway also supports product purchases).

For example, the 
```
__construct()
```

 function of your gateway class should include a line like the following:

```
class WC_Awesome_Gateway extends WC_Payment_Gateway {
     function __construct() {
          ...
          $this->supports = array( 'subscriptions', 'products' );
          ...
     }
     ...
}
```

Now, whenever an order contains a subscription, if your gateway is enabled, it will be displayed as a payment option on the checkout page.

### Step 1.1: Registering Support for Subscription Management Features

[↑ Back to top](#doc-title)

If your payment gateway supports subscription management functions, like cancelling or suspending a subscription, you should also notify Subscriptions that your gateway can handle these functions.

There are a variety of functions Subscriptions will implement if a payment gateway supports it, including:

- subscription cancellation
- subscription suspension
- subscription reactivation (after suspending a subscription)
- subscription amount changes (recurring amount can be changed for the subscription)
- subscription date changes (next payment date can be changed for the subscription)

To register your gateway’s support for these features, you add the relevant flag to your gateway’s 
```
supports
```

 property.

This is an example for a gateway which supports all features:

```
class WC_Awesome_Gateway extends WC_Payment_Gateway {
     function __construct() {
          ...
          $this->supports = array( 
               'products', 
               'subscriptions',
               'subscription_cancellation', 
               'subscription_suspension', 
               'subscription_reactivation',
               'subscription_amount_changes',
               'subscription_date_changes',
               'subscription_payment_method_change'
               'subscription_payment_method_change_customer',
               'subscription_payment_method_change_admin',
               'multiple_subscriptions',
          );
          ...
     }
```

**Note:** If your payment gateway extension is using token based billing and relying on Subscriptions’ scheduled payment hooks to charge each recurring payment, it can support *all* of the available features, so add a flag for every feature.

## Step 2: Processing a Subscription Sign-Up

[↑ Back to top](#doc-title)

Like processing payment for a product, your payment gateway extension will need to process a subscription sign-up in its 
```
process_payment()
```

 function.

Depending on how your gateway processes subscriptions, you may need to know any of the initial payment amount, the subscription’s sign-up fee, price per period, billing period and duration at outset of the subscription.

To obtain these details for an order containing a subscription, use the 
```
WC_Subscriptions_Order
```

 class methods.

### Initial Payment

[↑ Back to top](#doc-title)

If your payment gateway requires one upfront amount for the beginning of the subscription, you can use

```
<?php WC_Subscriptions_Order::get_total_initial_payment( $order ) ?>
```

Where 
```
$order
```

 is a 
```
WC_Order
```

 object.

For more details, see the full [total initial payment function reference](https://woocommerce.com/document/subscriptions/develop/functions/order-cart-functions/#section-9).

### Price Per Period

[↑ Back to top](#doc-title)

If your payment gateway needs to know when creating the subscription how much to charge for each individual billing period, you can use:

```
<?php WC_Subscriptions_Order::get_price_per_period( $order ) ?>
```

For more details, see the full [price per period function reference](https://woocommerce.com/document/subscriptions/develop/functions/order-cart-functions/#section-13).

### Sign-up Fee

[↑ Back to top](#doc-title)

If your payment gateway needs a distinct sign-up fee amount for an order, you can call:

```
<?php WC_Subscriptions_Order::get_sign_up_fee( $order ) ?>
```

For more details, see the full [sign up fee function reference](https://woocommerce.com/document/subscriptions/develop/functions/#section-21).

### Billing Period

[↑ Back to top](#doc-title)

To get the subscription period for an order, call:

```
<?php WC_Subscriptions_Order::get_subscription_period( $order ) ?>
```

For more details, see the full [subscriptions period function reference](https://woocommerce.com/document/subscriptions/develop/functions/order-cart-functions/#section-21).

### Free Trial Period

[↑ Back to top](#doc-title)

Payment gateways typically require one of two methods for setting up a free trial

1. Passing the free trial period and length, like PayPal; or
2. Setting the start date for the subscription, like WorldPay.

To use the first method, get a subscriptions trial details with the following two functions:

```
<?php 

WC_Subscriptions_Order::get_subscription_trial_period( $order );

WC_Subscriptions_Order::get_subscription_trial_length( $order );

?>
```

To use the second method and set the start date, use the following function:

```
<?php WC_Subscriptions_Product::get_trial_expiration_date( $product_id, $order_start_date ); ?>
```

### Subscription Length

[↑ Back to top](#doc-title)

To get the subscription duration for an order, call:

```
<?php WC_Subscriptions_Order::get_subscription_length( $order ) ?>
```

For more details, see the full [subscriptions length function reference](https://woocommerce.com/document/subscriptions/develop/functions/order-cart-functions/#section-29).

### Putting it all Together

[↑ Back to top](#doc-title)

The 
```
paypal_standard_subscription_args()
```

 function within the bundled 
```
WC_PayPal_Standard_Subscriptions
```

 class provides an example of accessing subscription details and combining them into a payment gateway request.

```
extract( self::get_order_id_and_key( $paypal_args ) );

if ( WC_Subscriptions_Order::order_contains_subscription( $order_id ) ) {

    $order = new WC_Order( $order_id );

    $order_items = $order-&gt;get_items();

    // Only one subscription allowed in the cart when PayPal Standard is active
    $product = $order-&gt;get_product_from_item( $order_items[0] );

    // It's a subscription
    $paypal_args['cmd'] = '_xclick-subscriptions';

    if ( count( $order-&gt;get_items() ) &gt; 1 ) {

        foreach ( $order-&gt;get_items() as $item ) {
            if ( $item['qty'] &gt; 1 )
                $item_names[] = $item['qty'] . ' x ' . $item['name'];
            else if ( $item['qty'] &gt; 0 )
                $item_names[] = $item['name'];
        }

        $paypal_args['item_name'] = sprintf( __( 'Order %s', WC_Subscriptions::$text_domain ), $order-&gt;get_order_number() );

    } else {

        $paypal_args['item_name'] = $product-&gt;get_title();

    }

    $unconverted_periods = array(
        'billing_period' =&gt; WC_Subscriptions_Order::get_subscription_period( $order ),
        'trial_period'   =&gt; WC_Subscriptions_Order::get_subscription_trial_period( $order )
    );

    $converted_periods = array();

    // Convert period strings into PayPay's format
    foreach ( $unconverted_periods as $key =&gt; $period ) {
        switch( strtolower( $period ) ) {
            case 'day':
                $converted_periods[$key] = 'D';
                break;
            case 'week':
                $converted_periods[$key] = 'W';
                break;
            case 'year':
                $converted_periods[$key] = 'Y';
                break;
            case 'month':
            default:
                $converted_periods[$key] = 'M';
                break;
        }
    }

    $sign_up_fee = WC_Subscriptions_Order::get_sign_up_fee( $order );

    $initial_payment = WC_Subscriptions_Order::get_total_initial_payment( $order );

    $price_per_period = WC_Subscriptions_Order::get_recurring_total( $order );

    $subscription_interval = WC_Subscriptions_Order::get_subscription_interval( $order );

    $subscription_installments = WC_Subscriptions_Order::get_subscription_length( $order ) / $subscription_interval;

    $subscription_trial_length = WC_Subscriptions_Order::get_subscription_trial_length( $order );

    if ( $subscription_trial_length &gt; 0 ) { // Specify a free trial period

        $paypal_args['a1'] = ( $sign_up_fee &gt; 0 ) ? $sign_up_fee : 0; // Maybe add the sign up fee to the free trial period

        // Trial period length
        $paypal_args['p1'] = $subscription_trial_length;

        // Trial period
        $paypal_args['t1'] = $converted_periods['trial_period'];

    } elseif ( $sign_up_fee &gt; 0 ) { // No trial period, so charge sign up fee and per period price for the first period

        if ( $subscription_installments == 1 )
            $param_number = 3;
        else
            $param_number = 1;

        $paypal_args['a'.$param_number] = $initial_payment;

        // Sign Up interval
        $paypal_args['p'.$param_number] = $subscription_interval;

        // Sign Up unit of duration
        $paypal_args['t'.$param_number] = $converted_periods['billing_period'];

    }

    // We have a recurring payment
    if ( ! isset( $param_number ) || $param_number == 1 ) {

        // Subscription price
        $paypal_args['a3'] = $price_per_period;

        // Subscription duration
        $paypal_args['p3'] = $subscription_interval;

        // Subscription period
        $paypal_args['t3'] = $converted_periods['billing_period'];

    }

    // Recurring payments
    if ( $subscription_installments == 1 || ( $sign_up_fee &gt; 0 &amp;&amp; $subscription_trial_length == 0 &amp;&amp; $subscription_installments == 2 ) ) {

        // Non-recurring payments
        $paypal_args['src'] = 0;

    } else {

        $paypal_args['src'] = 1;

        if ( $subscription_installments &gt; 0 ) {
            if ( $sign_up_fee &gt; 0 &amp;&amp; $subscription_trial_length == 0 ) // An initial period is being used to charge a sign-up fee
                $subscription_installments--;

            $paypal_args['srt'] = $subscription_installments;

        }
    }

    // Force return URL so that order description &amp; instructions display
    $paypal_args['rm'] = 2;

}
```

## Step 3: Subscription Management

[↑ Back to top](#doc-title)

After a subscription has been purchased with your extension, certain aspects of the subscription are managed automatically while others need to be managed by your gateway extension.

### Order Status & Subscription Status Binding

[↑ Back to top](#doc-title)

Subscription status is bound to order status changes, so using the [WooCommerce Payment Gateway API](https://woocommerce.com/document/payment-gateway-api/) to set an order’s status will automatically set the status of a subscription. When an order status changes to processing or complete, a subscription purchased in the order is activated automatically. When an order is cancelled, refunded or marked as failed, the status of a subscription in that order will also be updated to cancelled or failed.

As a result, the bare minimum required to manage a subscription is to use the [WooCommerce Payment Gateway API](https://woocommerce.com/document/payment-gateway-api/) to manage an order’s status.

### Subscription Payment & Status Management

[↑ Back to top](#doc-title)

There is no automatic handling of subscription payments. Either your gateway or your extension will need to handle these payments.

#### Recurring Payments Processed by the Gateway

If your payment gateway can automatically charge recurring payments, like PayPal, your extension can set up the subscription with the gateway and then use the 
```
WC_Subscriptions_Manager::process_subscription_payments_on_order()
```

 function to keep a record of each payment once the gateway has processed the payment.

If your payment gateway also manages the billing schedule, then you should also add the 
```
'gateway_scheduled_payments'
```

 flag when [registering support for Subscriptions](https://woocommerce.com/document/subscriptions/develop/payment-gateway-integration/#section-1). Not adding this flag can cause subscriptions to be incorrectly suspended when the gateway’s schedule does not precede the WooCommerce schedule.

#### Recurring Payments Processed by your Extension

Some payment gateways may have little or no support for recurring payments, but may allow you to charge a stored credit card. These gateways can still be integrated with WC Subscriptions to offer automatic recurring billing.

In fact, this is how the [Stripe extension](https://woocommerce.com/products/stripe/) adds support for Subscriptions, even though the Stripe payment gateway can automatically charge recurring payments.

For each subscription, a 
```
'woocommerce_scheduled_subscription_payment_{payment_gateway_id}'
```

 hook is fired whenever a payment is due for a specific gateway. This hook includes the amount due on the subscription and the renewal order. You can use this hook to process a subscription payment.

For example, the Stripe extension hooks its 
```
`scheduled_subscription_payment()`
```

 function to the 
```
'woocommerce_scheduled_subscription_payment_stripe'
```

 hook to process the payment for each billing period:

```
function scheduled_subscription_payment( $amount_to_charge, $renewal_order ) {

    $result = $this->process_subscription_payment( $amount_to_charge, $renewal_order );

    if ( is_wp_error( $result ) ) {
        WC_Subscriptions_Manager::process_subscription_payment_failure_on_order( $renewal_order );
    } else {
        WC_Subscriptions_Manager::process_subscription_payments_on_order( $renewal_order );
    }
}
```

This is also a good example of using the API functions for success and failure of the payment. More on failed payments later.

Charging payments on the 
```
'woocommerce_scheduled_subscription_payment_{payment_gateway_id}'
```

 hook is only required if your gateway does not automatically charge recurring payments. However, this method can be used in-lieu of your payment gateways recurring billing solution because doing so has a few advantages:

1. You need less code to support subscription payments & subscription features like changing the next payment date because WC Subscriptions core will take care of all of this for you and you just need to hook to 
```
'woocommerce_scheduled_subscription_payment_{payment_gateway_id}'
```

;
2. You have complete flexibility in the billing interval and period, e.g., some payment gateways, like Authorize.net ARB, only support a free trial period of the same billing period as the recurring payments, that is, Authorize.net ARB does not allow a 2 week trial period for a subscription billing every month;
3. You can support *all* Subscription features, regardless of those which your payment gateway’s recurring billing solution provides.

#### Activating a Subscription

```
<?php WC_Subscriptions_Manager::activate_subscriptions_for_order( $order ) ?&gt;
```

As the name suggests, the 
```
activate_subscriptions_for_order()
```

 can be used to mark all subscriptions in an order as *active*.

This function is fired automatically when an order’s status changes to completed or processing, so if you are correctly updating an order’s status, you do not need to call this function.

The function calls the 
```
WC_Subscriptions_Manager::activate_subscription()
```

 function for each subscription item in an order, which for now, will only be one item, but in future, this may be more than one item.

#### Cancelling a Subscription

If your gateway provides an API for cancelling a subscription (or you are manually charging recurring payments), you can add support for subscriptions to be cancelled in the store.

Just like registering support for subscriptions, you notify Subscriptions of your cancellation capability by including a flag in your extensions 
```
supports()
```

 property.

For example, the following is an excerpt from the [PayPal Digital Goods gateway extension](https://woocommerce.com/extension/paypal-digital-goods/):

```
function __construct() { 

    // ...

    $this->supports = array( 'products', 'subscriptions', 'subscription_cancellation' );

    // ...
}
```

Note the 
```
'subscription_cancellation'
```

 flag.

Including this flag will expose the *Cancel* action link on a subscription purchased with your gateway to store managers and subscribers. When this action link is clicked, Subscriptions will cancel the subscription in the store and you need to cancel the subscription with your gateway.

Subscriptions fires a 
```
'cancelled_subscription'
```

 hook whenever a subscription is cancelled, but a better action to hook to use is 
```
'woocommerce_subscription_cancelled_{payment_gateway_id}'
```

. This hook passes the 
```
WC_Order
```

 object and 
```
WC_Product
```

 ID of the subscription product being cancelled. You can use these details to cancel the subscription with your gateway.

Cancellations at the Gateway

If a user can cancel a subscription with the payment gateway directly, you **must** reflect this change in the WooCommerce store by calling:

```
<?php WC_Subscriptions_Manager::cancel_subscriptions_for_order( $order ) ?>
```

This function is automatically called when an order’s status is changed to cancelled, failed or refunded order.

Internally, the function acts as a convenience wrapper function for the 
```
WC_Subscriptions_Manager::cancel_subscription()
```

 function. If you need to cancel just one subscription and no its associated order, you can call the cancel subscription function directly:

```
<?php WC_Subscriptions_Order::cancel_subscription( $user_id, $subscription_key ) ?>
```

Where 
```
$subscription_key
```

 is the key derived from the concatenation of the order ID, an underscore and the subscription product’s ID e.g. 153_12 for product ID 12 purchased on order 153.

#### Expiring a Subscription

The Subscriptions extension schedules a action to set a subscription’s status to *expired* when its expiration date arrives, so you do not need to manually expire a subscription.

However, if your payment gateway provides an expiration notification and you like the security of redundancy, you can call the 
```
WC_Subscriptions_Manager
```

 function directly.

To expire any subscriptions on an order call:

```
<?php WC_Subscriptions_Manager::expire_subscriptions_for_order( $order ) ?>
```

To expire an individual subscription call:

```
<?php WC_Subscriptions_Manager::expire_subscription( $user_id, $subscription_key ) ?>
```

If you’re charging recurring payments manually, you do not need to expire a subscription because the scheduled payment hooks will no longer fire once a subscriptions is cancelled.

#### Recording Payments

A subscription’s status does not change when each payment is received (except potentially for the first payment), however, Subscriptions provides an API to record payments. If your gateway provides a notification system, like the [PayPal IPN](https://developer.paypal.com/api/nvp-soap/ipn/IPNIntro/), it’s a good idea to call the 
```
process_subscription_payments_on_order()
```

 function to keep a record of the payment on the order.

```
<?php WC_Subscriptions_Manager::process_subscription_payments_on_order( $order ) ?>
```

#### Recording Failed Payments

A subscription’s status does not change when a payment fails (unless the total number of failed payments exceeds the number the administrator has set for the store). However, you should still record failed payments. If your gateway provides a notification system, like the [PayPal IPN](https://developer.paypal.com/api/nvp-soap/ipn/IPNIntro/), it’s a good idea to call the 
```
process_subscription_payment_failure_on_order()
```

 function to keep a record of the payment on the order.

```
<?php WC_Subscriptions_Manager::process_subscription_payment_failure_on_order( $order ) ?>
```

### Order API vs Individual Subscription API

[↑ Back to top](#doc-title)

You may have noticed a trend in the API. Subscriptions includes functions for operating both on an order and on an individual subscription. In most cases, you will find it easier to use the function that operates on an order. It is also better to operate on an order other than an individual subscription, because you will need to use less code within your extension.

### Subscription Management Example

[↑ Back to top](#doc-title)

The 
```
process_paypal_ipn_request()
```

 function in the bundled 
```
WC_PayPal_Standard_Subscriptions
```

 class provides an example of manually, and redundantly calling subscription management functions.

This function is hooked to [PayPal IPN](https://developer.paypal.com/api/nvp-soap/ipn/IPNIntro/) requests and checks if the request relates to a subscription. The switch statement, included below, performs subscription management tasks for any subscription related transactions.

```
switch( $transaction_details['txn_type'] ) {
    case 'subscr_signup':

        // Store PayPal Details
        update_post_meta( $order_id, 'Payer PayPal address', $transaction_details['payer_email']);
        update_post_meta( $order_id, 'Payer PayPal first name', $transaction_details['first_name']);
        update_post_meta( $order_id, 'Payer PayPal last name', $transaction_details['last_name']);
        update_post_meta( $order_id, 'PayPal Subscriber ID', $transaction_details['subscr_id']);

        // Payment completed
        $order->add_order_note( __( 'IPN subscription sign up completed.', WC_Subscriptions::$text_domain ) );

        if ( self::$debug )
            self::$log->add( 'paypal', 'IPN subscription sign up completed for order ' . $order_id );

        break;

    case 'subscr_payment':

        if ( 'completed' == strtolower( $transaction_details['payment_status'] ) ) {
            // Store PayPal Details
            update_post_meta( $order_id, 'PayPal Transaction ID', $transaction_details['txn_id'] );
            update_post_meta( $order_id, 'Payer PayPal first name', $transaction_details['first_name'] );
            update_post_meta( $order_id, 'Payer PayPal last name', $transaction_details['last_name'] );
            update_post_meta( $order_id, 'PayPal Payment type', $transaction_details['payment_type'] ); 

            // Subscription Payment completed
            $order->add_order_note( __( 'IPN subscription payment completed.', WC_Subscriptions::$text_domain ) );

            if ( self::$debug ) 
                self::$log->add( 'paypal', 'IPN subscription payment completed for order ' . $order_id );

            $subscriptions_in_order = WC_Subscriptions_Order::get_recurring_items( $order );
            $subscription_item      = array_pop( $subscriptions_in_order );
            $subscription_key       = WC_Subscriptions_Manager::get_subscription_key( $order->id, $subscription_item['id'] );
            $subscription           = WC_Subscriptions_Manager::get_subscription( $subscription_key, $order->customer_user );

            // First payment on order, process payment & activate subscription
            if ( empty( $subscription['completed_payments'] ) ) {

                $order->payment_complete();

                WC_Subscriptions_Manager::activate_subscriptions_for_order( $order );

            } else {

                WC_Subscriptions_Manager::process_subscription_payments_on_order( $order );

            }

        } elseif ( 'failed' == strtolower( $transaction_details['payment_status'] ) ) {

            // Subscription Payment completed
            $order->add_order_note( __( 'IPN subscription payment failed.', WC_Subscriptions::$text_domain ) );

            if ( self::$debug ) 
                self::$log->add( 'paypal', 'IPN subscription payment failed for order ' . $order_id );

            WC_Subscriptions_Manager::process_subscription_payment_failure_on_order( $order );

        } else {

            if ( self::$debug ) 
                self::$log->add( 'paypal', 'IPN subscription payment notification received for order ' . $order_id  . ' with status ' . $transaction_details['payment_status'] );

        }

        break;

    case 'subscr_cancel':

        if ( self::$debug ) 
            self::$log->add( 'paypal', 'IPN subscription cancelled for order ' . $order_id );

        // Subscription Payment completed
        $order->add_order_note( __( 'IPN subscription cancelled for order.', WC_Subscriptions::$text_domain ) );

        WC_Subscriptions_Manager::cancel_subscriptions_for_order( $order );

        break;

    case 'subscr_eot': // Subscription ended, either due to failed payments or expiration

        // PayPal fires the 'subscr_eot' notice immediately if a subscription is only for one billing period, so ignore the request when we only have one billing period
        if ( 1 != WC_Subscriptions_Order::get_subscription_length( $order ) ) {

            if ( self::$debug ) 
                self::$log->add( 'paypal', 'IPN subscription end-of-term for order ' . $order_id );

            // Record subscription ended
            $order->add_order_note( __( 'IPN subscription end-of-term for order.', WC_Subscriptions::$text_domain ) );

            // Ended due to failed payments so cancel the subscription
            if ( time() < strtotime( WC_Subscriptions_Manager::get_subscription_expiration_date( WC_Subscriptions_Manager::get_subscription_key( $order->id ), $order->customer_user ) ) )
                WC_Subscriptions_Manager::cancel_subscriptions_for_order( $order );
            else
                WC_Subscriptions_Manager::expire_subscriptions_for_order( $order );
        }
        break;

    case 'subscr_failed': // Subscription sign up failed

        if ( self::$debug ) 
            self::$log->add( 'paypal', 'IPN subscription sign up failure for order ' . $order_id );

        // Subscription Payment completed
        $order->add_order_note( __( 'IPN subscription sign up failure.', WC_Subscriptions::$text_domain ) );

        WC_Subscriptions_Manager::failed_subscription_sign_ups_for_order( $order );

        break;
}
```

## Step 4: Failed Payments

[↑ Back to top](#doc-title)

Subscriptions also provides an API for handling failed payments, which your extension may or may not need to use depending on whether your payment gateway will process failed payments.

There are two functions available:

```
<?php WC_Subscriptions_Manager::process_subscription_payment_failure_on_order( $order, $product_id ) ?>
```

You should pass the order ID or order object for the order used to purchase the subscription (the *parent* order). The status of this order won’t be changed, instead it will be used to look up the subscription and create a renewal order with the *“failed”* status.

```
<?php WC_Subscriptions_Manager::process_subscription_payment_failure( $user_id, $subscription_key ) ?>
```

The first of these is a convenience wrapper for the second, so you can use either, but not both.

When Subscriptions processes a failed payment, it will put the subscription **on-hold** until the customer has logged in to manually complete payment for the renewal period. The payment method used for making that payment will also be used for future recurring payments, as long you handle recurring payment method changes, as covered in the next section.

If your gateway does not manage failed payments for you, you **must** use one of the failed payments API functions.

## Step 5: Recurring Payment Method Changes

[↑ Back to top](#doc-title)

Subscriptions 1.4 introduced a way for customers to change the payment method used for future payments on their subscription. It also uses this method to update the payment method on a subscription when a recurring payment failed.

To handle recurring payment method changes, your gateway needs to:

1. add 
```
'subscription_payment_method_change'
```

 supports flag so that your gateway is presented as a payment option when the customer is changing the payment; and
2. hook to the 
```
'woocommerce_subscription_failing_payment_method_updated
```

_
```
{your-gateway}'
```

 action to update the payment method when a customer is making a payment in lieu of an automatic renewal payment that previously failed.

### 5.1: Supporting Subscriber Payment Method Changes

[↑ Back to top](#doc-title)

To support [customer initiated payment method changes](https://woocommerce.com/document/subscriptions/customers-view/#section-11), your extension will only need to be able to process subscription orders with a $0 initial total. Subscriptions creates a mock checkout using the original order details and overriding the total to be $0. If your payment gateway extension correctly handles a $0 initial total, as it will need to do to process free trial periods correctly, then it shouldn’t need any additional code to handle payment method changes.

The only time it will need additional code, is if the billing schedule is managed by the Payment Gateway, not by Subscriptions. In this case, you may also need to set the correct first payment date (in a similar fashion to the way you set a free trial on a standard subscription sign-up).

In these cases, you can check if the 
```
$order_id
```

 parameter passed to your gateway’s 
```
process_payment()
```

 method is for a subscription using 
```
wcs_is_subscription( $order_id )
```

. When your gateway’s 
```
process_payment()
```

 is called with the ID of a subscription, it means the request is to change the payment method on the subscription.

### 5.2: Updating the Payment Method After a Failure

[↑ Back to top](#doc-title)

If a subscriber’s automatic payment [fails](https://woocommerce.com/document/subscriptions/renewal-process/#section-7), the subscription will be put on-hold until they log in to complete the payment.

The recurring payment method use for future payments will be updated to the payment method used to complete this payment. As a result, you will need to update any meta data on the original subscription that is required by your payment gateway to handle future automatic payments. **You must update the meta data on the 'woocommerce_subscriptions_changed_failing_payment_method_{your-gateway}' hook**, if you do not, all future automatic payment will continue to fail.

You do not need to update the the payment method or anything else on the original order, Subscriptions will handle that, simply make sure the original order has whatever meta data is required to correctly handle future payments and manage the subscription.

Below is some example code similar to that used in Stripe and Authorize.net CIM to fulfill this requirement. It updates the customer token on the original subscription order by accessing the customer token from the new renewal order.

```
/**
 * Update the customer token IDs for a subscription after a customer used the gateway to successfully complete the payment
 * for an automatic renewal payment which had previously failed.
 *
 * @param WC_Order $original_order The original order in which the subscription was purchased.
 * @param WC_Order $renewal_order The order which recorded the successful payment (to make up for the failed automatic payment).
 * @return void
 */
function yg_update_failing_payment_method( $original_order, $new_renewal_order ) {
    update_post_meta( $original_order->id, '_your_gateway_customer_token_id', get_post_meta( $new_renewal_order->id, '_your_gateway_customer_token_id', true ) );
}
add_action( 'woocommerce_subscriptions_changed_failing_payment_method_your_gateway', 'yg_failing_payment_method', 10, 2 );
```

For payment gateway changes to work, your extension will also need to be able to process subscription orders with a $0 initial total

## Step 6: Testing Renewal Payments

[↑ Back to top](#doc-title)

Once you have everything set-up and working, you may want to test recurring payments.

To test recurring payments, following the instructions in the guide to [triggering subscription renewals](https://woocommerce.com/document/testing-subscription-renewal-payments/).

You can also use this method to test *payment failures*. To do so, delete or modify the meta data that is used to process the payment. For example, you could change the 
```
'_stripe_customer_id'
```

 for [Stripe](http://woothemes.com/products/stripe/) or 
```
'_wc_authorize_net_cim_payment_profile_id'
```

 for [Authorize.net CIM](https://woocommerce.com/products/authorize-net-cim/) as stored in the post meta table against the **original subscription order**. When the payment is processed, it will fail as the customer token is invalid, and therefore, trigger the failed renewal process.

## FAQs

[↑ Back to top](#doc-title)

### How can I debug issues with renewal orders?

[↑ Back to top](#doc-title)

If a renewal payment is being processed correctly at the payment gateway but the renewal order’s status is not being set to **processing** or **completed**, then it is likely a PHP fatal error is occurring during the renewal process. This error may be caused by custom code, plugin conflicts or other server related issues.

To diagnose these issues, it is essential to review the PHP error logs for your website. Unfortunately, there is no standard location for the PHP error log, and it can be set to be stored in a different location depending on your host. To find the PHP error log, you can:

1. Create a file name 
```
phpinfo.php
```

 in the root of your WordPress’s directory
2. Open the 
```
phpinfo.php
```

 file in a text editor
3. Insert the following code into the file: 
```
<?php phpinfo(); ?>
```
4. Open the file on your site, for example, if your site’s URL is example.com, you can open the file by visiting http://example.com/phpinfo.php
5. Search the page for the 
```
error_log
```

 value. The file path listed here is the absolute file path of the PHP error log – visit that address on your server and you should find the PHP error log. If the value is empty, then you need to set a value to log errors on your site.

Once you have a copy of your PHP error log, you can look for entries beginning 
```
PHP Fatal error
```

 around the time of renewal. The error listed here will indicate the cause of the issue.

![Example PHP Info Output](https://woocommerce.com/wp-content/uploads/2012/06/example-php-info-output.png?strip=all&w=704)Example PHP Info Output

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

## Admin Change Payment Method Integration Guide

**Source:** [https://woocommerce.com/document/subscriptions/develop/payment-gateway-integration/change-payment-method-admin/](https://woocommerce.com/document/subscriptions/develop/payment-gateway-integration/change-payment-method-admin/)

# Admin Change Payment Method Integration Guide

			This article provides developer documentation for adding support to a payment gateway extension for [changing a subscription’s payment method](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#set-up-automatic-payments) via the [Edit Subscription screen](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/).

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

If you are a developer of a payment gateway and have not yet provided support for processing subscriptions, please read the [Subscriptions Payment Gateway Integration Guide](https://woocommerce.com/document/subscriptions/develop/payment-gateway-integration/).

## Payment Method Change Overview

[↑ Back to top](#doc-title)

This feature provides a way for payment gateways to allow store managers to add or edit a subscription’s payment method and meta data on the new **Edit Subscription** administration screen.

![The admin change payment method feature provides a way for payment gateways to allow store managers to add or edit a subscription's payment method. ](https://woocommerce.com/wp-content/uploads/2024/07/change-payment-method-overview.webp?strip=all&w=704)Change Recurring Payment Method Fields

Adding support for this feature can be achieved with any payment gateway that uses customer or credit card tokens with the following steps:

1. Add the support flag to your gateway to declare support for store managers to change the payment methods.
2. Allow store managers to change the payment meta data.
3. Validate the new meta data before saving the subscription.

## Step 1. Declare Support for Changing Payment Methods

[↑ Back to top](#doc-title)

By default, Subscriptions does not allow store managers to change or modify the payment gateway on the **Edit Subscription** screen to anything other than the built-in **Manual Renewals** gateway.

To add the support for this feature, you need to declare support by adding 
```
'subscription_payment_method_change_admin'
```

 to your gateway’s 
```
$this->supports
```

 property.

For example, if Stripe wanted to allow administrators to change the payment method, they could achieve this by adding the 
```
'subscription_payment_method_change_admin'
```

 to their 
```
WC_Payment_Gateway->supports
```

 array as follows:

```
$this->supports = array(
    // Other support flags here
    'subscription_payment_method_change_admin',
    // Other support flags here
);
```

Once your gateway declares support, it is included as an option on the **Edit Subscription** page.

![After support was declared for the payment gateway, it can now be selected as an option. ](https://woocommerce.com/wp-content/uploads/2024/07/gateway-declaring-support-option.webp?strip=all&w=704)Choose Payment Method for Subscription

## Step 2: Declare your Payment Gateway’s Meta Data

[↑ Back to top](#doc-title)

To allow store managers to correctly configure automatic payments with your payment gateway via the **Edit Subscription** screen, you also need to tell Subscriptions about the meta data required by your payment gateway for processing automatic payments. This is done using the filter: 
```
'woocommerce_subscription_payment_meta'
```

.

Callbacks on this hook receive an array of meta data for all payment gateways in the store and an instance of the subscription ( 
```
WC_Subscription
```

) to which the meta data relates.

To use this filter correctly, you need to insert information about your payment details using your payment gateway’s ID as the key on the array, i.e. 
```
payment_meta[ YOUR_GATEWAY_ID ]
```

. You should also populate the meta data with the current or default value for the given subscription, which is passed to your callback as the 2nd parameter.

The full structure needs to meet the following format:

```
$payment_meta[ YOUR_GATEWAY_ID ]  = array (
    'table_name' => array (
        'meta_key_1' => array (
            'value' => get_post_meta( $subscription->id, ..., true ),
            'label' => 'Front-end Label to display',
        ),
        'meta_key_2' => array (
            'value' => get_user_meta( $subscription->customer_user, ..., true ),
            'label' => 'Front-end Label to display',
        )
    ),
);
```

Subscriptions uses this information in two ways:

- to display the appropriate fields on the **Edit Subscription** screen, which is why a 
```
'label'
```

 field is required; and
- to save the meta data in the database when the **Edit Subscription** screen is saved, which is why the meta key and table name fields are required.

The 
```
'table_name'
```

 string tells Subscriptions where to store and retrieve the meta data. If the value is either 
```
'post_meta'
```

, 
```
'user_meta'
```

 or 
```
'options'
```

, subscriptions will automatically save the new data to those respective tables with the site’s database prefix (i.e. 
```
wpdb->prefix
```

). If the default table names are not suitable for storing your data, please read the FAQ section for details of alternatives.

Specifically:

- Any data found in 
```
payment_meta[ YOUR_GATEWAY_ID ]['post_meta']
```

 will be stored in the post meta table using 
```
update_post_meta( $subscription, 'meta_key', $new_data)
```

;
- Data found in 
```
payment_meta[ YOUR_GATEWAY_ID ]['user_meta']
```

 will be saved as 
```
update_user_meta( $subscription->customer_user, 'meta_key', $new_data );
```

;
- The data listed under 
```
payment_meta[ YOUR_GATEWAY_ID ]['options']
```

 will be saved to options table using 
```
update_option( 'meta_key', $new_data )
```

.

### Meta Data Declaration Example: Stripe

[↑ Back to top](#doc-title)

Here’s an example of how the Stripe payment gateway uses this filter to allow administrators to change the 
```
'_stripe_customer_id'
```

 meta data found in the post meta table and similarly the 
```
'_stripe_card_id'
```

 meta data.

```
class WC_Gateway_Stripe_Addons extends WC_Gateway_Stripe {

    ...

    /**
     * Include the payment meta data required to process automatic recurring payments so that store managers can
     * manually set up automatic recurring payments for a customer via the Edit Subscriptions screen in 2.0+.
     *
     * @since 2.5
     * @param array $payment_meta associative array of meta data required for automatic payments
     * @param WC_Subscription $subscription An instance of a subscription object
     * @return array
     */
    public function add_subscription_payment_meta( $payment_meta, $subscription ) {

        $payment_meta[ $this->id ] = array(
            'post_meta' => array(
                '_stripe_customer_id' => array(
                    'value' => get_post_meta( $subscription->id, '_stripe_customer_id', true ),
                    'label' => 'Stripe Customer ID',
                ),
                '_stripe_card_id' => array(
                    'value' => get_post_meta( $subscription->id, '_stripe_card_id', true ),
                    'label' => 'Stripe Card ID',
                ),
            ),
        );

        return $payment_meta;
    }

    ...
}
```

## Step 3: Validate Meta Data

[↑ Back to top](#doc-title)

To ensure store managers are inputting correct data, an optional but highly recommended feature you can implement is validation of the data before it is saved to the subscription.

The 
```
'woocommerce_subscription_validate_payment_meta'
```

 filter is available for this purpose. This filter passes 
```
payment_method_id
```

 and 
```
payment_meta
```

 array parameters to callbacks. The 
```
payment_meta
```

 contains all the user’s inputted data in the same format as described in Step 2. Attach a validation function to this filter to validate meta data entered by the store manager.

Any exceptions thrown in your validation function will be caught and the exception message will be displayed on the **Edit Subscription** in an administration notices section (see below). If an exception is caught, all new modifications before saving the subscription will be ignored.

```
function my_validation_function( $payment_method_id, $payment_meta ) {    if ( 'YOUR_GATEWAY_ID' === $payment_method_id ) {        if ( 'example_throw' == $payment_meta['YOUR_GATEWAY_ID']['post_meta']['example_meta_key'] ) {            throw new Exception( 'Error to appear on Edit Subscription in the case of an invalid input' );        }       }}add_action( 'woocommerce_subscription_validate_payment_meta', 'my_validation_function', 10, 2 );
```

### Validation Example: Stripe

[↑ Back to top](#doc-title)

The following codes demonstrate the validation function used by the Stripe Payment Gateway to validate its data.

```
class WC_Gateway_Stripe_Addons extends WC_Gateway_Stripe {

    ...

    /**
     * Validate the payment meta data required to process automatic recurring payments so that store managers can
     * manually set up automatic recurring payments for a customer via the Edit Subscriptions screen in 2.0+.
     *
     * @since 2.5
     * @param string $payment_method_id The ID of the payment method to validate
     * @param array $payment_meta associative array of meta data required for automatic payments
     * @return array
     */
    public function validate_subscription_payment_meta( $payment_method_id, $payment_meta ) {

        if ( $this->id === $payment_method_id ) {

            if ( ! isset( $payment_meta['post_meta']['_stripe_customer_id']['value'] ) || empty( $payment_meta['post_meta']['_stripe_customer_id']['value'] ) ) {
                throw new Exception( 'A "_stripe_customer_id" value is required.' );
            } elseif ( 0 !== strpos( $payment_meta['post_meta']['_stripe_customer_id']['value'], 'cus_' ) ) {
                throw new Exception( 'Invalid customer ID. A valid "_stripe_customer_id" must begin with "cus_".' );
            }

            if ( ! isset( $payment_meta['post_meta']['_stripe_card_id']['value'] ) || empty( $payment_meta['post_meta']['_stripe_card_id']['value'] ) ) {
                throw new Exception( 'A "_stripe_card_id" value is required.' );
            } elseif ( 0 !== strpos( $payment_meta['post_meta']['_stripe_card_id']['value'], 'card_' ) ) {
                throw new Exception( 'Invalid card ID. A valid "_stripe_card_id" must begin with "card_".' );
            }
        }
    }

    ...

}
```

## Full Example: Simplify Commerce

[↑ Back to top](#doc-title)

For a full example, see the code required to add support to Simplify Commerce in WooCommerce core in [this commit](https://github.com/woocommerce/woocommerce/commit/4c8e3788b3b19b8e0f6536616fdf7b74a0f1b2ca). This was submitted as part of the [Simplify Commerce Subscriptions v2.0 compatibility pull request](https://github.com/woocommerce/woocommerce/pull/8657).

## Testing

[↑ Back to top](#doc-title)

Once you have completed the steps above, your gateway should:

1. Be presented as a payment method option on the **Edit Subscription** screen.
2. Display and save meta data required for processing automatic payments with your gateway.
3. Check that the meta data entered by the store manager is valid.

To ensure that automatic recurring payments work with the new meta data:

1. Visit the **WooCommerce > Subscriptions** screen.
2. Click the ID of a subscription to open the **Edit Subscription** screen.
3. Click the *pencil* icon next to the **Billing Details** section.
4. Verify that all the fields required for processing automatic payment are displayed.
5. If they are, enter _invalid_ meta data for each field.
6. Save the subscription.
7. Ensure that correct admin notices are displayed (i.e. your validation function’s exception messages).
8. Repeat the above 3 steps for each field your gateway requires.
9. Enter valid meta data for each field.
10. Save the subscription.
11. [Trigger an early renewal payment](https://woocommerce.com/document/subscriptions/testing-subscription-renewal-payments/) for the subscription.
12. Verify that the renewal payment was processed correctly (i.e. the renewal order’s status is *processing* or *complete*).
13. Verify with your payment gateway that the renewal payment used the new customer or card.

## FAQ

[↑ Back to top](#doc-title)

### I haven’t added support but my gateway is still showing as an option on the Edit Subscription screen?

[↑ Back to top](#doc-title)

If a subscription is purchased via the normal checkout process, the payment method used during checkout will be shown on the **Edit Subscription** screen because the meta data required for automatic payment should have been collected during checkout.

If the store manager changes the payment method for the subscription from your payment gateway to another, it will no longer be displayed as an option.

### How can I save the payment meta data for the subscription using my own custom method?

[↑ Back to top](#doc-title)

We have provided an action hook that will allow you to save the payment meta data wherever you like, but to ensure you stop us from saving the data, you will need to make sure the table_name does not equal post_meta, postmeta, user_meta, usermeta or options. Then, you should make sure your plugin catches the 
```
'wcs_save_other_payment_meta'
```

 action.

The following code example demonstrates how you would go about either storing data in the comments table or attaching some extra information to a value before it is stored in the post meta table.

```
function my_gateway_meta( $payment_details, $subscription ) {
    $payment_details[ YOUR_GATEWAY_ID ]  = array (
            'wc_comments' => array (
                '_gateway_comments' => array (
                    'value' => get_comments_meta( ..., ..., true ),
                    'label' => 'Front-end Label to display',
                )
            ),
            'wc_post_meta' => array (
                'meta_key_1' => array (
                    'value' => get_post_meta( $subscription->id, 'meta_key_1', true ),
                    'label' => 'Front-end Label to display',
                )
            ),
    );
    return $payment_details;
}
add_filter( 'woocommerce_subscription_payment_meta', 'my_gateway_meta', 10, 2 );

function save_meta_in_comments( $subscription, $table, $meta_key, $meta_value ) {
    switch( $table ) {
        case 'wc_comments':
            update_comments_meta( ..., $meta_key, $meta_value );
            break;
        case 'wc_post_meta':
            update_post_meta( $subscription->id, $meta_key, $meta_value . '_edited' );
            break;
    }
}
add_action( 'wcs_save_other_payment_meta', 'save_meta_in_comments', 10, 4 );
```

					
		
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

## How can I stop Subscriptions from changing a user’s role?

**Source:** [https://woocommerce.com/document/subscriptions/develop/prevent-role-changes-by-subscriptions/](https://woocommerce.com/document/subscriptions/develop/prevent-role-changes-by-subscriptions/)

# How can I stop Subscriptions from changing a user’s role?

			WooCommerce Subscriptions changes a user’s role by default, when the status of their subscription or subscriptions change, as explained in the [Role Settings](https://woocommerce.com/document/subscriptions/store-manager-guide/#role-settings) document.

However, it is possible to stop this default behaviour with a small amount of custom code. This setup is helpful when you implement a custom user role or logic on a site and need to keep other user roles assigned when someone subscribes. Below, you’ll find a simple plugin demonstrating how to achieve this.

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  | /** |
|  | * Plugin Name: Stop WooCommerce Subscriptions Changing a User's Role |
|  | * Plugin URI: |
|  | * Description: |
|  | * Author: Brent Shepherd |
|  | * Author URI: |
|  | * Version: 1.0 |
|  | */ |
|  |  |
|  | add_filter( 'woocommerce_subscriptions_update_users_role', '__return_false', 100 ); |
      [view raw](https://gist.github.com/thenbrent/8870062/raw/0e8b2c6d3f77943cb01524fa9590f3987d6e6681/wcs-do-not-update-role.php)
        [wcs-do-not-update-role.php](https://gist.github.com/thenbrent/8870062#file-wcs-do-not-update-role-php)
        hosted with ❤ by [GitHub](https://github.com)

					
		
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

## Developer Guide to Cart and Recurring Cart Fees

**Source:** [https://woocommerce.com/document/subscriptions/develop/recurring-cart-fees/](https://woocommerce.com/document/subscriptions/develop/recurring-cart-fees/)

# Developer Guide to Cart and Recurring Cart Fees

			The following guide is written for developers who want to add fees to the WooCommerce cart and would like to learn about how these fees interact with [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/).

The guide explains how fees added to the cart act by default, and how they can be customized to be applied only to the initial order or recurring orders.

## Understanding Cart Fees

[↑ Back to top](#doc-title)

Unlike cart items, cart fees are non-persistent, this means third-party plugins which add fees need to be constantly hooked into the cart calculations, adding their fees each time the cart totals are calculated.

To do that WooCommerce provides the 
```
woocommerce_cart_calculate_fees
```

 hook, which third parties can use to add their fees.

For example, to add a $10 engraving fee to the cart, you could use the following code snippet:

```
add_filter( 'woocommerce_cart_calculate_fees', 'add_engraving_fees', 10, 1 );

function add_engraving_fees( $cart ) {
     $cart->add_fee( 'Engraving', '10' );
}
```

This fee will appear like this in the cart totals section of the cart page:

![Cart fees displayed on Cart Page](https://woocommerce.com/wp-content/uploads/2018/01/cart-fees.png?strip=all&w=704)Cart fees displayed in Edit Totals section of the Cart Page

WooCommerce Subscriptions’ recurring carts use the same cart calculations and so the code snippet above also applies the fees to any recurring cart. That is to say, **by default, any cart fees added using the woocommerce_cart_calculate_fees hook will be applied both to both the initial order, and any subscriptions created for that transaction**. Those fees are then also applied to subsequent transactions.

So for example, using the same code snippet above, customers purchasing subscriptions would see the following cart totals:

![Recurring Cart Fee shown in Recurring Totals Section of Cart Page](https://woocommerce.com/wp-content/uploads/2018/01/recurring-cart-fees.png?strip=all&w=704)Recurring Cart Fee shown in Recurring Totals Section of Cart Page

## Recurring Only Fees

[↑ Back to top](#doc-title)

As mentioned above, by default, fees applied to the cart are applied to be the initial and recurring carts.

In some cases, you may **require the fee to only apply to the on-going recurring payment for any subscriptions**. To achieve this, you need to tweak the code snippet from above and add a condition to check whether the cart being passed into your callback is a recurring cart, or the standard WooCommerce cart.

Recurring carts have a 
```
$recurring_cart_key
```

 property we can use to determine if the cart is a recurring cart.

For example:

```
add_filter( 'woocommerce_cart_calculate_fees', 'add_recurring_postage_fees', 10, 1 );

function add_recurring_postage_fees( $cart ) {
    if ( ! empty( $cart->recurring_cart_key ) ) {
        $cart->add_fee( 'Postage', 5 );
    }
}
```

![Recurring Only Cart Fees displayed in Cart Totals](https://woocommerce.com/wp-content/uploads/2018/01/recurring-only-cart-fees.png?strip=all&w=704)Recurring Only Cart Fees displayed in Cart Totals

There was a bug with WooCommerce 3.2 where fees were displayed on the initial cart totals even though they were not included in the order’s total. This issue has been fixed with WooCommerce 3.3 via [this pull request](https://github.com/woocommerce/woocommerce/pull/18072). If you encounter this issue, please update WooCommerce to the latest version.

## Initial Order Only Fees

[↑ Back to top](#doc-title)

For situations where fees should only be charged on the initial order when the customer signs up, there are two options to add a fee only to the initial order:

**Option 1: Invert check for recurring cart**

```
add_filter( 'woocommerce_cart_calculate_fees', 'add_administration_fees', 10, 1 );

function add_administration_fees( $cart ) {
    if ( empty( $cart->recurring_cart_key ) ) {
        $cart->add_fee( 'Processing Fee', 2.5 );
    }
}
```

In this example, we’ve reversed the logic from the previous code example. This code now only applies fees to the initial purchase cart.

**Option 2: Apply fee to global cart**

```
add_filter( 'woocommerce_cart_calculate_fees', 'add_administration_fees', 10 );

function add_administration_fees() {
    WC()->cart->add_fee( 'Processing Fee', 2.5 );
}
```

In this example, we’re applying the fee to the global WooCommerce cart object. This is the default cart object and so only applies fees to the initial purchase.

![Fee for Initial Order Only Displayed in Cart Totals](https://woocommerce.com/wp-content/uploads/2018/01/fees-for-initial-order-only.png?strip=all&w=704)Fee for Initial Order Only Displayed in Cart Totals

There was a bug with WooCommerce 3.2 where fees were the fee was applied to both the initial purchase’s order and recurring orders. This issue has been fixed with WooCommerce 3.3 via [this pull request](https://github.com/woocommerce/woocommerce/pull/18072). If you encounter this issue, please update WooCommerce to the latest version.

## The Recurring Fee Filter

[↑ Back to top](#doc-title)

WooCommerce Subscriptions 2.2.16 introduced the 
```
woocommerce_subscriptions_is_recurring_fee
```

 filter. This filter allows developers who have applied fees to the initial cart to also apply the fees to the recurring cart.

For example, if the cart fees have been applied using 
```
WC()->cart->add_fee( 'Fee', '10' );
```

, you could use this filter to also apply it to all recurring carts.

By default, the return value of this filter is set to 
```
false
```

, so that all fees applied using 
```
WC()->cart
```

 are non-recurring fees by default.

```
// All fees are recurring
add_filter( 'woocommerce_subscriptions_is_recurring_fee', '__return_true' );

add_filter( 'woocommerce_cart_calculate_fees', 'add_fees', 10 );

function add_fees() {
    WC()->cart->add_fee( 'Fee', '10' );
}
```

If only certain fees are recurring or you would like to apply more complex conditions, you can use the 
```
$fee
```

 and 
```
$cart
```

 filter arguments.
For example:

```
add_filter( 'woocommerce_cart_calculate_fees', 'add_fees', 10 );

function add_fees() {
    WC()->cart->add_fee( 'Personal Engraving', 10 );
    WC()->cart->add_fee( 'Postage', 5 );
}

add_filter( 'woocommerce_subscriptions_is_recurring_fee', 'apply_recurring_fees', 10, 3 );

function apply_recurring_fees( $is_recurring, $fee, $cart ) {

    // Personal engraving fees should be charged on a recurring basis
    if ( 'personal-engraving' === $fee->id ) {
        $is_recurring = true;
    // Subscriptions with a recurring total less than $30 are required to pay on-going postage charges
    } elseif ( 'postage' === $fee->id && 30 > $cart->get_subtotal() ) {
        $is_recurring = true;
    }

    return $is_recurring;
}
```

					
		
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

## How can I remove an action button from the View Subscriptions page?

**Source:** [https://woocommerce.com/document/subscriptions/develop/remove-an-action-button/](https://woocommerce.com/document/subscriptions/develop/remove-an-action-button/)

# How can I remove an action button from the View Subscriptions page?

			If you want to prevent a customer initiating a given action on a subscription, you can remove the button from the [My Account > View Subscriptions](https://woocommerce.com/document/subscriptions/customers-view/#section-2) page.

Be aware that removing cancellation buttons can have legal implications. For example, [California has an Automatic Renewal Law](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB2863) which requires stores to provide an easy-to-use mechanism for cancelling. Before removing cancellation button, we recommend you discuss potential implications with a legal professional.

The following plugin demonstrates how to remove a button using the 
```
'wcs_view_subscription_actions'
```

 hook. By default, only the **Change Payment Method** button is removed, but you can uncomment additional actions to remove other buttons.

If you want to remove a feature entirely from WooCommerce Subscriptions, you should follow the guide on [disabling core subscription features](https://woocommerce.com/document/subscriptions/faq/#section-66) as removing the button does not disable the feature completely.

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  | /** |
|  | * Plugin Name: Remove Subscription Action Buttons from My Account |
|  | * Plugin URI: https://gist.github.com/thenbrent/8851287/ |
|  | * Description: Remove any given button from the <a href="http://docs.woothemes.com/document/subscriptions/customers-view/#section-2">My Subscriptions</a> table on the My Account page. By default, only the "Change Payment Method" button is removed, but you can uncomment additional actions to remove those buttons also. |
|  | * Author: Brent Shepherd |
|  | * Author URI: |
|  | * Version: 2.0 |
|  | */ |
|  |  |
|  | /** |
|  | * Remove the "Change Payment Method" button from the My Subscriptions table. |
|  | * |
|  | * This isn't actually necessary because @see eg_subscription_payment_method_cannot_be_changed() |
|  | * will prevent the button being displayed, however, it is included here as an example of how to |
|  | * remove just the button but allow the change payment method process. |
|  | */ |
|  | function eg_remove_my_subscriptions_button( $actions, $subscription ) { |
|  |  |
|  | foreach ( $actions as $action_key => $action ) { |
|  | switch ( $action_key ) { |
|  | case 'change_payment_method':	// Hide "Change Payment Method" button? |
|  | //			case 'change_address':		// Hide "Change Address" button? |
|  | //			case 'switch':			// Hide "Switch Subscription" button? |
|  | //			case 'resubscribe':		// Hide "Resubscribe" button from an expired or cancelled subscription? |
|  | //			case 'pay':			// Hide "Pay" button on subscriptions that are "on-hold" as they require payment? |
|  | //			case 'reactivate':		// Hide "Reactive" button on subscriptions that are "on-hold"? |
|  | //			case 'cancel':			// Hide "Cancel" button on subscriptions that are "active" or "on-hold"? |
|  | unset( $actions[ $action_key ] ); |
|  | break; |
|  | default: |
|  | error_log( '— $action = ' . print_r( $action, true ) ); |
|  | break; |
|  | } |
|  | } |
|  |  |
|  | return $actions; |
|  | } |
|  | add_filter( 'wcs_view_subscription_actions', 'eg_remove_my_subscriptions_button', 100, 2 ); |
      [view raw](https://gist.github.com/thenbrent/8851287/raw/83333e7d482362c3055f57f211a07f516a96e98f/wcs-remove-my-subscriptions-buttons.php)
        [wcs-remove-my-subscriptions-buttons.php](https://gist.github.com/thenbrent/8851287#file-wcs-remove-my-subscriptions-buttons-php)
        hosted with ❤ by [GitHub](https://github.com)

					
		
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

## Subscriptions v2.0: Database Upgrade Process for v1.5 to v2.0

**Source:** [https://woocommerce.com/document/subscriptions/develop/version-2/database-upgrade-process/](https://woocommerce.com/document/subscriptions/develop/version-2/database-upgrade-process/)

# Subscriptions v2.0: Database Upgrade Process for v1.5 to v2.0

			To migrate stores using Subscriptions v1.5 to the [new architecture of v2.0](https://woocommerce.com/document/subscriptions/develop/version-2/), Subscriptions uses a database upgrade script.

This script will create a new 
```
'shop_subscription'
```

 post for each subscription on the site and then migrate all meta data relating to a subscription from the original order used to purchase the subscription to the new 
```
'shop_subscription'
```

 post.

As seen the interface screenshot below, this script upgrades all subscriptions on the site in batches of 50 subscriptions at a time via series of synchronous Ajax requests to avoid memory exhaustion or script timeouts on stores with large numbers of subscriptions.

![WooCommerce Subscriptions Database Upgrade Process](https://woocommerce.com/wp-content/uploads/2015/09/woocommerce-subscriptions-database-upgrade-screenshot.png?strip=all&w=704)WooCommerce Subscriptions Database Upgrade Process

The data migrated includes:

- Billing schedule, including recurring interval and period, and trial end, next payment and end dates
- Subscription product line item
- Download permissions for the subscription product
- Order notes which contain any of the words 
```
subscription
```

, 
```
recurring
```

 or 
```
renewal
```

, as these are deemed to relate to the subscription not the original order
- Recurring tax, shipping and coupon order items and their associated meta data
- Switch, renewal and resubscribe meta data linking switch, renewal and resubscribe orders to the new subscription instead of the original order
- All post meta data not excluding with the 
```
'wcs_upgrade_subscription_meta_to_copy'
```

 filter

Specific details of the data upgraded during the process can be seen in the 
```
WCS_Upgrade_2_0
```

 class found in 
```
/includes/upgrades/class-wcs-upgrade-2-0.php
```

 file.

## Excluding of Post Meta Data

[↑ Back to top](#doc-title)

Subscriptions uses an opt-out approach to migrating meta data to the new subscriptions during the upgrade. This is to achieve compatibility by default rather than requiring all developers to opt-in to have their code be compatible.

This is especially important for payment gateways which historically attached billing data, like customer tokens, to the original order. It ensures that this data is copied to the new subscription, which is where we recommend developers store it from v2.0 onwards.

It also allows the data to be relied upon to exist on the subscription for all old and new subscriptions, instead of just new subscriptions. As well as saving 
```
if/else
```

 statements, this ensures the payment method meta data can be [changed by store managers](https://woocommerce.com/document/subscriptions/develop/payment-gateway-integration/change-payment-method-admin/) on both old and new subscriptions if the extension supports this new feature.

However, if your extension attaches meta data to an order that should not be copied to 
```
'shop_subscription'
```

 objects, you can use the 
```
'wcs_upgrade_subscription_meta_to_copy'
```

 filter to prevent it being copied to the subscription. An example of the kind of data may not need to be copied to new subscriptions is a shipment tracking number specific to the original order.

The example below shows how to make sure meta data with the meta key of 
```
'_my_shipment_tracking_code'
```

 is not copied to new subscription on upgrade.

```
function eg_do_not_copy_tracking_code( $order_meta ) {
    if ( isset( $order_meta ) ) {
        unset( $order_meta['_my_shipment_tracking_code'] );
    }
    return $order_meta;
}
add_filter( 'wcs_upgrade_subscription_meta_to_copy', 'eg_do_not_copy_tracking_code' );
```

					
		
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

