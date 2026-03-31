# Subscription Product Vs Subscription

*Category from WooCommerce Subscriptions documentation*

---

## Subscription Products vs Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/)

# Subscription Products vs Subscriptions

			This guide provides a detailed description of both *subscription products* and *subscriptions*. It also provides examples to further illustrate the differences between them.

**Pre-reading:** The information here will be easier to understand if you know how the [subscription renewal process](https://woocommerce.com/document/subscriptions/renewal-process/) works and are familiar with [WooCommerce orders](https://woocommerce.com/document/managing-orders/).

## The Difference Between Subscription Products and Subscriptions

WooCommerce Subscriptions adds two different, but related items to WooCommerce:

- Subscription products
- Subscriptions

The main difference between *subscription products* and *subscriptions* is that customers purchase a subscription product (a monthly gift box, a weekly download, etc.), while a subscription is the agreement between a store and its customers for future transactions (daily, weekly, monthly, yearly, etc.). **Or, more simply** : a *subscription product* is a line item added to a *subscription* (agreement).

Let’s take a look at both of these in more detail:

### Subscription Products

[↑ Back to top](#doc-title)

Subscription products are an extension of [WooCommerce products](https://woocommerce.com/document/managing-products/) which store managers create [via the Edit Product screen](https://woocommerce.com/document/subscriptions/store-manager-guide/#section-1) and display to customers in your store similarly to any other product you create in WooCommerce.  Once purchased, subscription products are added to a subscription.

A subscription product has all the same data as standard WooCommerce products, including:

- price
- sale price
- tax class and status
- virtual and downloadable flags
- attributes (optional)
- inventory (optional)
- shipping weight, dimensions and class

Like any other [WooCommerce product](https://woocommerce.com/document/managing-products/), customers can add subscription products to their cart and purchase them via checkout. This records the purchase of a subscription product in an order and adds the terms for future payments to a new *subscription*.

### Subscriptions

[↑ Back to top](#doc-title)

As mentioned earlier, a  *subscription* is an agreement between a store and its customers for future transactions (managing the renewal process).

Like an [order](https://woocommerce.com/document/managing-orders/), a subscription can contain one or more products as [line items](https://woocommerce.com/document/managing-orders/view-edit-or-add-an-order/#order-items-and-totals). This is how WooCommerce associates subscription products with a subscription However, a single subscription can contain multiple subscription product line items, non-subscription product line items or even [no product line items](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/#manually-create-a-subscription-monthly-service-fee) at all.

**Subscriptions are created when:**

- a customer completes the checkout process and the cart contains subscription products; or
- a store manager [manually creates one via the Add Subscription administration screen](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/).

Subscriptions are an extension of [WooCommerce Orders](https://woocommerce.com/document/managing-orders/). They have all the same data as an order, including:

- status
- customer
- payment method
- billing/shipping address
- downloadable product permissions
- product, fee and shipping [line items](https://woocommerce.com/document/managing-orders/#order-items)
- notes
- totals

As well as subscription specific data like:

- billing interval and period
- next payment date
- trial end date
- end date
- related orders, including the original order used to buy the subscription, [renewal orders](https://woocommerce.com/document/subscriptions/renewal-process/) and [switch orders](https://woocommerce.com/document/subscriptions/switching-guide/#section-6)

The main difference between a subscription and an order is that an [order](https://woocommerce.com/document/managing-orders/) is a record of a transaction in the*past*, whereas a subscription is an agreement for transactions in the *future*. Because of this, a subscription also includes a billing schedule that determines when to process future transactions (which manages the [renewal process](https://woocommerce.com/document/subscriptions/renewal-process/)).

### Examples of Subscriptions vs. Subscription Products

[↑ Back to top](#doc-title)

Now that you have an understanding of the difference between *subscription products* and *subscriptions* here are a few scenarios that better highlight how this works in realistic situations:

#### Purchasing a Monthly Coffee Subscription Product

This example demonstrates how WooCommerce Subscriptions adds a subscription product as a line item to a subscription (agreement) and how it creates and processes each order type (**initial order > the subscription > renewal order**).  Here’s how it works:

1. Customer visits your online store which sells coffee
2. Customer views a coffee bean *subscription product* offered by your store that ships a bag of beans every month
3. Customer adds the coffee bean *subscription product* to their cart
4. Customer proceeds to checkout
5. Customer completes checkout to buy the coffee bean *subscription product*
6. WooCommerce creates an [order](https://woocommerce.com/document/managing-orders/) to record the transaction. The coffee bean *subscription product* is a [line item](https://woocommerce.com/document/managing-orders/view-edit-or-add-an-order/#order-items-and-totals) on that order.
7. WooCommerce Subscriptions creates a *subscription* to record the agreement for future transactions. The coffee bean *subscription product* is also a [line item](https://woocommerce.com/document/managing-orders/view-edit-or-add-an-order/#order-items-and-totals) on that subscription.
8. One month later, the *subscription* will [renew](https://woocommerce.com/document/subscriptions/renewal-process/) according to its [billing schedule](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/#billing-schedules)
9. WooCommerce Subscriptions creates a *renewal order* to record the renewal payment transaction. The coffee bean *subscription product* is  a [line item](https://woocommerce.com/document/managing-orders/#order-items) on that renewal order.

#### Manually Create a Subscription for a Monthly Service Fee

Please note that this example is for**illustrative purposes only.**We **do not** recommend manually creating/adding subscriptions with only fee line items as it won’t be possible to get sales statistics using [WooCommerce Analytics](https://woocommerce.com/document/woocommerce-analytics/), since it only reports information on products. Additionally, Subscriptions requires customers to use the WooCommerce cart for paying orders associated with subscriptions, including renewals. Customers cannot complete the checkout process without products in the cart.

Imagine a store that wants to manage payments for a regular service of $100 / month. The store does not publicly sell this service, so it does not need to create a subscription product to offer it to the public in the store.

Instead, you can  [manually create a subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-4) that does not include any products and charges a $100 fee each month.

To do this, the store manager can:

1. Go to WooCommerce > Subscriptions > Add Subscription screen
2. Add a subscriber/customer information to the subscription
3. Set the billing schedule to renewal each month
4. [Add a fee](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#add-a-fee-line-item) to the subscription for $100 (but do not add [product line items](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-4))
5. Calculate recurring totals
6. Set subscription status to active
7. Save the subscription

This will create a *subscription* that [renews](https://woocommerce.com/document/subscriptions/renewal-process/) each month and creates a renewal order for $100 as a fee line item. It does not include any subscription products.

For more in-depth instructions on manually creating a subscription, refer to the full guide on [How to Manually Add, Import or Modify a Subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-4).

## Billing Schedules

[↑ Back to top](#doc-title)

Both subscription products and subscriptions have a billing schedule. Here’s a brief overview of what each of those billing schedules include:

**Subscription Products:**

A subscription product’s billing schedule includes:

- **Billing interval and period:** This defines how often renewal payments occur for the product, such as every 2 weeks or monthly.
- **Billing length:** This specifies the total number of payments before the subscription ends. For example, a subscription with a billing interval of every 2 weeks and a length of 26 payments will last for one year.
- **Trial period and interval:**This outlines any free trial period at the start of the subscription, this adds time to the length of billing. For instance, a subscription with a weekly billing interval, a length of 52 weeks, and a 2-month free trial will last for one year and two months.
- **Synchronization date (if applicable)**: This is a specific day when payments process,  such as the first of the month. This only applies when r[enewal synchronization](https://woocommerce.com/document/subscriptions/renewal-synchronisation/) is configured.

**Subscriptions:**

A subscription’s billing schedule includes:

- **Billing interval and period:** This defines how often renewal payments occur for the subscription, like every 2 weeks.
- **Trial end date:** This is the date when the subscription’s free trial period ends.
- **Next payment date:** This is when the next renewal payment will  process, calculated based on the last payment date and the billing interval and period.
- **End date:**This is when the subscription expires or is canceled, initially calculated based on the product’s length.

**How they work together:**

The schedule of a *subscription product* displays the billing terms to customers on the product, cart, and checkout pages. It also determines how subscription products are [grouped in the cart](https://woocommerce.com/document/subscriptions/develop/multiple-subscriptions/#grouping-subscriptions). However, the actual subscription’s billing schedule dictates the real renewal schedule and can override the billing schedule set for any products added to that subscription as line items.

To illustrate how a subscription’s billing schedule can override the billing schedule set on individual products added to that subscription as line items, consider the following two items:

- a subscription for $100 / year;
- a subscription product for $25 / month.

Manually adding the $25 / month subscription product as [a line item to the subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-4) will not change its billing schedule. The subscription will continue to renew annually, unless you also [manually change the billing schedule](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-3).

## Advanced Use: Changing Product Line Items Over a Subscription’s Lifecycle

[↑ Back to top](#doc-title)

Using additional plugins, like [AutomateWoo](https://automatewoo.com/) or [All Products for WooCommerce Subscriptions](https://woocommerce.com/products/all-products-for-woocommerce-subscriptions/), it’s also possible for a subscription’s product line items to change over its lifecycle.

For example, with AutomateWoo’s [Add/Remove Product actions](https://woocommerce.com/document/automatewoo/actions/subscription-add-remove-product/) it’s possible to setup monthly magazine subscriptions and have a different product and SKU for each month’s magazine included on each month’s renewal order. This is done by creating a workflow which:

1. Runs after a renewal payment; and
2. [Removes the previous month’s magazine](https://woocommerce.com/document/automatewoo/actions/subscription-add-remove-product/#remove-product-action) as a product line item
3. [Adds the next month’s magazine](https://woocommerce.com/document/automatewoo/actions/subscription-add-remove-product/#add-product-action) as a product line item so that

While the products on the subscription change, no other subscription details, like its billing schedule or shipping address, will change

Each month’s magazine also does not need to be a *subscription product*, it can be a simple product available for one-off purchases in your store.

Similarly, with [All Products for WooCommerce Subscriptions](https://woocommerce.com/products/all-products-for-woocommerce-subscriptions/), it’s possible to add a non-subscription product to an existing subscription. For example, a customer could add a different kind of coffee bean to their existing monthly subscription to another type of coffee bean.

Again, while the products on the subscription change, no other subscription details, like its billing schedule, will be changed when the new product is added.

![A checkbox that a customer ticks to add a product to an existing subscription when All Products for WooCommerce Subscriptions is installed. Located under the quantity box and add to cart button on the product page.](https://woocommerce.com/wp-content/uploads/2015/09/subscribe-all-the-things-add-to-existing-subscription.png?w=950)All Products for WooCommerce Subscriptions “Add to Existing Subscription” feature

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

