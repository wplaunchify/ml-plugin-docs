# Orders

*Category from WooCommerce Subscriptions documentation*

---

## Subscription Orders

**Source:** [https://woocommerce.com/document/subscriptions/orders/](https://woocommerce.com/document/subscriptions/orders/)

# Subscription Orders

			To track the life-cycle of a subscription, the WooCommerce Subscriptions extension creates relationships between [orders](https://woocommerce.com/document/managing-orders/) and subscriptions. This guide provides an overview of each of these relationships and the corresponding order type.

If you haven’t already, you should read the following: [subscription renewal process](https://woocommerce.com/document/subscriptions/renewal-process/), [subscription switching](https://woocommerce.com/document/subscriptions/switching-guide/), [Subscriptions vs. Subscription Products](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/), and [WooCommerce orders](https://woocommerce.com/document/managing-orders/). The information in those documents will help create a broader understanding of the information in this guide.

## Subscriptions vs. Orders

[↑ Back to top](#doc-title)

One of the most important things to keep in mind about Subscriptions is that they are **agreements for transaction in the future**, unlike orders which are [records of transactions](https://woocommerce.com/document/managing-orders/) in the **past**. Because of this, **a subscription can have multiple orders associated with it to record different historical transactions during the subscription’s life-cycle** (*renewals, switches, resubscribes, etc.*). Likewise, an order can also be associated with [multiple subscriptions](https://woocommerce.com/document/subscriptions/store-manager-guide/#mixed-checkout).

Since subscriptions are an extension of orders, they share a lot of the same data. Below, you’ll find a venn diagram that outlines the shared data between the two and what data only exists in a subscription:

![The diagram illustrates the shared data between Orders and Subscriptions as well as the unique additional data exclusive to Subscriptions.](https://woocommerce.com/wp-content/uploads/2018/07/subscription-order-venn-diagram.png?w=550)The data that orders share with subscriptions

**The data that subscriptions and orders both include:**

- ID
- Customer
- Status
- Payment method
- Billing & shipping address
- Product, fee, tax and shipping line items
- Coupons, notes, created date, etc.

**Data that only resides in a subscription:**

- Payment Schedule, including recurring billing period and interval
- Next payment, trial end, and start dates
- Related orders (e.g. renewal).

The reason orders are linked to a subscription is so the subscription can have a record of its past transactions. These transactions may have:

- Created the subscription
- Been part of the subscription’s renewal billing terms; or
- Changed the subscription, for example by [upgrading a product on it](https://woocommerce.com/document/subscriptions/switching-guide/).

Because of this, **a subscription can have multiple orders associated with it to record different historical transactions during its life-cycle**. An order can also be associated with multiple subscriptions.

## Subscription Order Types

[↑ Back to top](#doc-title)

A subscription can have a range of orders linked to it, including:

- Renewal orders
- Resubscribe orders
- Switch orders
- Parent order

Each of these order types are the same as an [order](https://woocommerce.com/document/managing-orders/) created to track a purchase via the normal WooCommerce checkout process. The key difference is these orders link to a subscription to track its life cycle.

### Parent Orders

[↑ Back to top](#doc-title)

The **parent order** for a subscription records the creation of the subscription or, the first payment for the subscription. Typically, customers purchase a [subscription product](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/)via the WooCommerce checkout process, creating the subscription agreement simultaneously with the parent order. The parent order becomes the first order listed in the subscription’s “related orders” (transaction history).

While checkout usually automatically creates Parent Orders, you can also [add them manually](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#manually-add-a-subscription) or via import tools when [migrating subscriptions to WooCommerce](https://woocommerce.com/document/migrating-subscribers-woocommerce-subscriptions/).

**A subscription can have only one Parent Order**. Since you can only create. a subscription once, it requires only one Parent Order. However, a single Parent Order can link to multiple subscriptions if the customer purchases [different subscription products in the same transaction](https://woocommerce.com/document/subscriptions/multiple-subscriptions/).

[Manually creating a subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/) does not automatically generate a parent order. You’ll need to use the “Create pending parent order” option under “Subscription Actions” to create one. Then, use the “email order invoice” action in the order actions for the parent order, to send an invoice to the customer to pay for the transaction.

### Renewal Orders

[↑ Back to top](#doc-title)

Recurring payment (renewal) orders are a key aspect of a subscription. During the renewal process, WooCommerce Subscriptions records each recurring payment in a Renewal Order and adds it to the Related Orders panel of the Edit Subscription screen.

![Renewal Orders in the Related Orders section of the Edit Subscriptions screen. ](https://woocommerce.com/wp-content/uploads/2018/07/renewals-in-related-orders-section.webp?strip=all&w=704)The Related Orders panel shows orders related to the subscription.

Subscriptions usually creates Renewal Orders automatically based on the subscription’s [billing schedule](https://woocommerce.com/document/subscriptions/creating-subscription-products/#payment-schedule). These orders record automatic or manual payments, or no payment for subscriptions with a $0 total.

You can also manually create Renewal Orders via the Edit Subscription page.

A subscription can have multiple Renewal Orders, reflecting the recurring payments over its lifecycle. For example, a monthly subscription active for 12 months will have 11 Renewal Orders in addition to the Parent Order(first payment).

### Resubscribe Orders

[↑ Back to top](#doc-title)

If a customer wants to extend an **expired** subscription, or resume a previously **cancelled** subscription, they can [resubscribe to the subscription](https://woocommerce.com/document/subscriptions/customers-view/#section-17) on the **My Account > View Subscription** page.

The [resubscribe process](https://woocommerce.com/document/subscriptions/resubscribe/) takes the customer through the normal cart and checkout flow to complete sign-up on the subscription.  When customers extend the terms of their previous subscription, WooCommerce Subscriptions needs to create a new subscription or agreement with the customer since the old subscription was cancelled or expired.

Let’s take a look at how each order is recorded for the old subscription and the new one:

- **The New Subscription** – Since the old subscription agreement ended, resubscribing creates a new subscription. The cancelled or expired subscription’s related orders section include an order labeled “*Resubscribed Subscription*“:

![](https://woocommerce.com/wp-content/uploads/2024/07/Resubscribe-Order.png?strip=all&w=704)A new subscription showing as a “Resubscribed Subscription” in the related orders of the cancelled or expired subscription.

**Clicking**on the subscription number will direct you to the new subscription (agreement) and its related orders. You’ll notice that the **resubscribed subscription** record and the **new** subscription have the same order number; it’s because they *are* the same. The resubscribe order is the new subscription.

Once on the new subscription page, you’ll see the related orders box contains the initial cancelled/expired subscription record (to track where the subscription billing terms migrated from), the parent order for the new subscription agreement, and any subsequent renewal orders for the new subscription:

![](https://woocommerce.com/wp-content/uploads/2024/07/related-orders-resubscribe.png?w=980)Related orders section of a new subscription created when a customer resubscribes.

- WooCommerce Subscriptions creates a new parent order to record the first payment of the new subscription.
- All recurring payment orders made after the customer resubscribes will become related orders of the new subscription. No new records will be added to the previous subscription.

### Switch Orders

[↑ Back to top](#doc-title)

When a customer [upgrades or downgrades their subscription](https://woocommerce.com/document/subscriptions/switching-guide/), the switch process takes the customer through the normal cart and checkout flow to complete the transaction.

In this flow, an order is generated to record the upgrade or downgrade transaction. This order, which records the switch transaction, links to the subscription through a relationship known as a **Switch Order**. Often, this order is shown with a $0 amount in the related orders section of a subscription. A switch order updates the terms of a subscription agreement.

![The Related Orders panel displays a Switch Order after a subscription is upgraded or downgraded.](https://woocommerce.com/wp-content/uploads/2024/07/switch-order-in-related-orders-panel.webp?strip=all&w=704)The Related Orders panel displays a Switch Order after a subscription is upgraded or downgraded.

For subscription with multiple products, if the new subscription’s schedule does not align with the existing products on the pre-switch subscription, the *Switch Order* will also be a *Parent Order* for this switched product. This is necessary because a new subscription must be created due to changes in the agreement for future transactions.

Importantly, a **subscription can have multiple Switch Orders associated with it**, as a customer can upgrade or downgrade the same subscription multiple times in different transactions.

## Why are some orders in the related orders table not linking to the order?

[↑ Back to top](#doc-title)

In the related orders table on the [Edit subscription screen](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/), there might be some orders that do not link to an edit order screen. This situation can occur if the order was listed in the subscription’s known related orders but could not be loaded correctly.

Orders which cannot be loaded have either been **deleted directly in the database** or have corrupt data. To preserve the order history, the order ID of the record displays – even if all the data is unavailable.

![Related orders table with unloadable order](https://woocommerce.com/wp-content/uploads/2024/07/subscriptions-related-orders-corrupted.webp?strip=all&w=704)Related orders table with unloadable order

To troubleshoot the cause of the unloadable orders you can follow the steps outlined in the [Plugin and theme conflicts](https://woocommerce.com/document/woocommerce-self-service-guide/#plugin-and-theme-conflicts)to rule out a conflict. If that doesn’t find the cause, you will need to access the database to investigate further.

A related order’s entire entry will be deleted from the subscription’s Related Order section if the order is officially deleted by moving it to the trash via the admin interface.

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

