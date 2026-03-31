# Creating Subscription Products

*Category from WooCommerce Subscriptions documentation*

---

## Creating a Subscription Product

**Source:** [https://woocommerce.com/document/subscriptions/creating-subscription-products/](https://woocommerce.com/document/subscriptions/creating-subscription-products/)

# Creating a Subscription Product

			WooCommerce Subscriptions allows you to add simple subscription products or variable subscription products to your store, much like WooCommerce does for normal products. Much about subscription product creation will be familiar if you’ve made other products in WooCommerce. However, subscription products have some [additional options](#subscription-product-options) to control the subscriber experience.

![](https://fast.wistia.com/embed/medias/b6514xmal0/swatch)

**Use these links to view video guides for creating each type of Subscription Product**:
[Simple Subscription Product](#wistia_b6514xmal0)
[Variable Subscription Product](#wistia_yiww9wlyjy)

---

## Simple Subscriptions

[↑ Back to top](#doc-title)

To create a Simple subscription product:

1. Go to: **Products > Add New.**
2. In the Product data panel, select **Simple subscription** as the product type.
3. Set the terms for the subscription, including **price**, **payment schedule**, **length**, **sign-up fee** and **trial period** (length, sign-up fee and trial period are all optional).
4. Add product details you require, as instructed by [Managing Products](https://woocommerce.com/document/managing-products/).
5. **Publish**.

![Adding a subscription product.](https://woocommerce.com/wp-content/uploads/2024/06/Annotation-on-2024-06-27-at-22-17-06.png?w=980)Adding a subscription product.

## Variable Subscriptions

[↑ Back to top](#doc-title)

Variable subscriptions are similar to [Variable Products](https://woocommerce.com/document/variable-product/).  However, each variation of a Variable Subscription has the additional [subscription product options](#subscription-product-options).

Variable subscriptions are an effective way to build products with different options or tiers that subscribers can switch between. See our [Subscription Switching guide](https://woocommerce.com/document/subscriptions/switching-guide/) for details.

![](https://woocommerce.com/wp-content/uploads/2024/07/Variable-subscription-fields-woocommerce.png?strip=all&w=704)The additional fields added to variable subscription products

For more details on managing variable products, check our [Variable Products documentation](https://woocommerce.com/document/variable-product/).

If you’d like to see how variable products work in a real-world scenario, check out our [Monthly Coffee Subscription](https://woocommerce.com/document/subscriptions-use-case-coffee/) use case for more details.

**Are your subscription variations showing unexpected product data when added to cart?** Ensure that you have all attributes of all variations defined. Check the [advanced topics](https://woocommerce.com/document/variable-product/#variations-with-undefined-attributes) section of our variable products documentation for more details on how WooCommerce handles variations with undefined attributes.

## Subscription Product Options

[↑ Back to top](#doc-title)

Subscription Products have some additional options that Simple and Variable products don’t have. These are:

- **Subscription Price** – The recurring amount that charges at each renewal.
- **Payment Schedule** – Select how often to take the subscription payment in the field located next to the subscription price.
- **Subscription Length** – Optionally set your subscriptions to end after a certain length of time.
- **Sign-up fee** – Optionally charge a one-time fee at checkout when customers subscribe.
- **Free Trial Period** –  Optionally add a free trial period before beginning billing for the subscription.
- [Gifting](#gifting) – Optionally allow customers to purchase a subscription product for someone else.
- **One time Shipping** – Enable this setting under **Product Data > Shipping** if you only need to charge shipping for the first order of a subscription.
- **Limit Subscription** – Adjust this setting under **Product data > Advanced** to limit customers to only one active subscription, or one subscription of any status.
- **Renewal Synchronization** – To make all subscriptions to a particular product renew at once. See our [subscription renewal synchronization guide](https://woocommerce.com/document/subscriptions/renewal-synchronisation/) for details.

Inventory management for subscription products is generally no different than [setting stock](https://woocommerce.com/document/managing-products/product-editor-settings/#inventory-section) for a simple product or variable product. Each product in a subscription reduces stock at each renewal. See **How Subscriptions Manages Stock** for more details and options to alter this behavior if you need.

### Subscription price

[↑ Back to top](#doc-title)

When creating a subscription product, you will need to enter the price that your customers will pay for each billing period. Customers will pay this amount when they first sign up, in addition to any [sign-up fee](#sign-up-fees) unless there is a [free trial period](#free-trial-period). Then, they pay this amount on a recurring basis at beginning of each billing period.

![](https://woocommerce.com/wp-content/uploads/2024/07/woocommerce-subscription-price.png?strip=all&w=704)*Subscription price field on Edit Product Screen*

**Note:** If left empty, the product will not be purchasable. If you intend to create a free subscription, please enter 0 in this field.

### Setting a payment schedule

[↑ Back to top](#doc-title)

Subscriptions gives you a lot of flexibility in scheduling renewals for your subscription products.

Out of the box, you can charge renewal payments using a billing period of **daily**, **weekly**, **monthly** or **annually**, and at **any interval between 1 and 6** (inclusive).

Want to charge a fortnightly payment? Set the price to **every 2nd week**.

Want to bill quarterly? Set the price to**every 3rd month**.

#### What is the exact interval for a monthly subscription, i.e. is it 30 days?

With a daily subscription, payments trigger every 24 hours. A day is always 24 hours, so this is no issue. But what about months, since the number of days differs?

The amount of time between a monthly billing interval is one month. This means 30 days for some months (April, June etc.), 31 days for others, and then 28 or 29 days for February. If a monthly subscription is created on the 15th of February, the next payment will be charged on the 15th March. If the billing interval for a subscription is every 2 months and it is created on the 15th of February, the next payment will be charged on the 15th April.

#### What about subscriptions purchased on the last day of the month?

If a subscription is purchased on the last day of the month, **recurring payments will continue to be charged on the last day of the month**. For example, if a $10 / month subscription is purchased on the 31st December, its next 4 payments will be charged on:

- 31st January
- 28th February (or 29th February for a leap year)
- 31st March
- 30th April

#### What about recurring payments on the 28th, 29th or 30th day of the month?

This system will also be used if the day a payment is normally charged is not the last day of the month, but it is on the 28th, 29th or 30th day of the month, and the next payment is due in February, which has no 30th day (and no 29th day in non-leap years).

For example, if a customer purchases a $10/month subscription on the 29th of December 2012, Subscriptions will charge the next 4 payments on:

- 29th January 2013- not the last day of the month
- 28th February 2013 – notice it has switched to the last day of the month as there is no 29th day in February when it is not a leap year
- 31st March 2013 (last day of the month)
- 30th April 2013 (last day of the month)

This logic ensures that a payment is made every month, and therefore, that one year includes 12 payments.

**Note:**

Subscriptions uses the payment schedule to generate recurring orders (part of the [renewal process](https://woocommerce.com/document/subscriptions/renewal-process/)).  If you are shipping physical goods, use the same payment schedule as your intended shipping schedule (e.g., $5/month for a product shipped monthly, not $60/year for a product shipping monthly). By using the same shipping and billing schedule, you can use recurring orders for each payment to manage shipping. That said, there is a way to have a [different payment schedule and shipping schedule](https://woocommerce.com/document/subscriptions/faq/#section-69).

### Subscription length

[↑ Back to top](#doc-title)

The length of a subscription is controlled by the 
```
Stop renewing after
```

 field. This allows you to end a subscription after a predetermined amount of time. Subscriptions for subscription products with a value in this field have a maximum length, after which they no longer renew and are no longer active.

Subscriptions for subscription products with 
```
Do not stop until cancelled
```

 set in the *Stop renewing after* field can renew indefinitely as long as renewal payments are successful.

For example, consider a six week fitness course, billed weekly, with a fee of $25/week. The length of the subscription would be 6 weeks and the billing period would be one week. In the subscription product details, this would be:

Subscription price: 
```
$25 every week
```

Stop renewing after: 
```
6 Weeks
```

![](https://woocommerce.com/wp-content/uploads/2024/07/subscription-length-woocommerce.png?strip=all&w=704)Setting the subscription length

**Note:**

Subscription length and billing period are not the same thing. The subscription length is the length of the entire subscription from when it starts to when it stops renewing, not a single billing period within that subscription.

### Sign-up fees

[↑ Back to top](#doc-title)

Setting a sign-up fee on a subscription charges customers a one-time amount to sign-up for a subscription.

This sign-up fee is in addition to any recurring amount that you have set for the subscription product. For example, if you create a subscription product for $75 per month with a $200 sign-up fee, the subscription’s initial total during checkout will be $275. Then $75 a month after that.

Sign-up fees always process at the beginning of the subscription, even when the subscription includes a free trial. If the the subscription product has a free trial + a sign up fee, a customer pays the sign-up fee on the initial payment/purchase but not the first recurring total. For example, if you create a subscription product for $75 per month, with a $200 sign-up fee and a 30-day free trial, the customer’s payment at checkout will be $200 (the sign-up fee only).

If you need to charge the sign-up fee *after*a trial period ends, take a look at this use for [Charging a Sign-Up Fee after a Free Trial Period](https://woocommerce.com/document/subscriptions-use-case-charging-one-time-fee-signup-fee-after-the-free-trial-period/). Note that it does require additional extensions.

### Free trial periods

[↑ Back to top](#doc-title)

You can add a free trial period to the beginning of a subscription.

A free trial increases the length of a subscription. For example, if you create a subscription of $5 per month for 6 months with a 1-month free trial period, the subscription will expire after 7 months.

When a subscription has a sign-up fee and no free trial period, the initial payment is the sign-up fee + the recurring payment price. For example, a $5 per month subscription with $10 sign-up fee will charge $15 for the first month. However, if the subscription product includes a free trial, the customer only pays the sign-up fee at checkout ($10).  If there is no sign-up fee, the customer pays nothing at checkout.

If you enable [$0 initial checkout without a payment method](https://woocommerce.com/document/subscriptions/store-manager-guide/#misc-settings)and the product lacks a sign-up fee, subscriptions move to “[On Hold](https://woocommerce.com/document/subscriptions/statuses/#on-hold-subscription-status)” status at the end of the trial period while they await the customer’s first renewal payment.

### Gifting

[↑ Back to top](#doc-title)

If [Gifting is enabled](https://woocommerce.com/document/subscriptions/store-manager-guide/#gifting-settings) in the subscription settings, the option to enable and disable gifting for the product will be visible in the General product settings. If no option is selected, the global settings will apply to the product.

![Gifting Option on Subscription Product Setting](https://woocommerce.com/wp-content/uploads/2025/12/gifting-subscription-1.png?strip=all&w=704)

### Downloadable File Sharing

[↑ Back to top](#doc-title)

If [downloadable file sharing is enabled](https://woocommerce.com/document/subscriptions/store-manager-guide/#downloads-settings), you can view, add, and remove the downloadable products linked to the subscription.

![Subscription Product Setting for Downloadable File Sharing](https://woocommerce.com/wp-content/uploads/2025/12/wcs-downloads-subscription-product-meta-box.png?strip=all&w=704)

You can also connect a downloadable simple or variable product to a subscription using the steps below:

1. Go to: **WooCommerce > Products > Add New.**
2. Set the **Product Type** to be **Simple Product** or **Variable Product** and tick the **Downloadable** checkbox.
3. Scroll down to the **Subscriptions** field in the **General** tab.
4. Search for your subscription product and select the appropriate result.
5. **Publish** in the top-right corner to publish your downloadable product, now linked to your subscription.

![Simple Product Setting for Downloadable File Sharing](https://woocommerce.com/wp-content/uploads/2025/12/wcs-downloads-simple-product-meta-box.png?strip=all&w=704)

When a subscription customer visits **My Account**, they now see a list of the files available for their download, which are attached to the connected **Downloadable** products.

![Any customer subscribing to your subscription product will now see the download links for files in the related downloadable products.](https://woocommerce.com/wp-content/uploads/2014/06/wc-sub-downloads-my-account.png?w=550&h=377)Any customer subscribing to your subscription product will now see the download links for files in the related downloadable products.

**Note:**

When you add a subscription to a downloadable product, anyone with an active subscription will have access to the product’s downloads. So, both users who have already purchased the subscription and any new users who purchase it.

### One time shipping

[↑ Back to top](#doc-title)

Shipping costs for subscription products are normally charged on the initial order *and* all [renewal orders](https://woocommerce.com/document/subscriptions/renewal-process/). However, some products need to ship only once at the start of the subscription, such as mobile phones with a data plan.

Subscriptions products have a **One Time Shipping** option. Use this to only charge shipping once on initial order.

To enable one-time shipping for a product:

1. Go to: **WooCommerce >** **Products > Edit Product** for the select subscription product.
2. Select **Shipping** in the left menu.
3. Tick the **One time shipping** checkbox.
4. **Update** to save.

![](https://woocommerce.com/wp-content/uploads/2013/10/one-time-shipping-img.png?w=550)*One Time Shipping Checkbox on Edit Product Screen*

**Note:**

For shipping to be charged on initial order, the subscription must not have a free trial or be synchronized to a date in the future. The **One-Time Shipping** option will be disabled if your product has a free trial or is synchronized. For One Time Shipping to be possible with these types of subscription products, Subscriptions needs to support a [3-tier price](https://woocommerce.com/document/subscriptions/subscriptions-coupons/limited-payment-coupon-guide/#three-tier-pricing), this is currently not a built-in pricing option.

### Limit subscriptions

[↑ Back to top](#doc-title)

Use the **Limit Subscription** feature to limit a customer to one subscription:

1. Go to: **WooCommerce > Products > Edit Product** for the subscription product you select.
2. Select **Advanced** in the left menu.
3. Go to **Limit Subscription**, and select **No limit**, **Limit to one active subscription**, or **Limit to one of any status**.

![Limit Subscriptions Setting](https://woocommerce.com/wp-content/uploads/2020/07/limit-subscription-setting.png?strip=all&w=704)Limit Subscriptions Setting

When a subscription is limited to *any status* by the **Limit subscriptions** setting under **Product data > Advanced**, a customer can only sign up for the subscription once. If the customer **cancels** the subscription, they need to [resubscribe to the existing subscription](https://woocommerce.com/document/subscriptions/customers-view/subscribers-resubscribe-guide/) by clicking the **Resubscribe** button next to the subscription on the **My Account** page.

The customer cannot purchase that subscription product again unless the existing subscription is **trashed** or **permanently deleted** by a store manager. This feature ensures that each customer account only receives one free trial period to a product.

If you [allow switching](https://woocommerce.com/document/subscriptions/switching-guide/#allow-switching) between subscriptions, a customer can [Upgrade or Downgrade](https://woocommerce.com/document/subscriptions/switching-guide/switching-process-and-costs/#switching-process) a limited subscription. Customers are able to change their subscription while still limiting each customer account to one free trial period.

**Note:**

To limit the initial purchase of a product to one, also check the box for “Sold Individually.” Enable this to only allow one of this item to be bought in a single order in the Inventory section of the edit product page.

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

## How Subscriptions Manages Stock

**Source:** [https://woocommerce.com/document/subscriptions/creating-subscription-products/stock-management/](https://woocommerce.com/document/subscriptions/creating-subscription-products/stock-management/)

# How Subscriptions Manages Stock

			Setting up inventory management for **subscription products** is generally no different than [setting stock](https://woocommerce.com/document/managing-products/product-editor-settings/#inventory-section) for a simple product or variable product. The key difference is the subscription renewal process which, by default, acts as a recurring inventory reduction mechanism. This guide explains how this process works.

## How Subscription Renewal Orders Impact Stock Quantity

[↑ Back to top](#doc-title)

WooCommerce Subscriptions creates an order to [record each renewal payment](https://woocommerce.com/document/subscription-renewal-process/).  Each of these orders includes the subscription product as an item, so when they process the order, they reduce the stock for that item. This method ensures accurate inventory management for physical products that they need to ship each billing period. Let’s take a look at an example:

> If a store has 100 widgets in stock and a customer buys a weekly subscription to those widgets, the store reduces the widget stock by one for the initial purchase, leaving 99 widgets. After the first renewal a week later, the store reduces the stock by one again, leaving 98 widgets. A week later, when the subscription renews a second time, the store reduces the stock again, leaving 97 widgets.

![](https://woocommerce.com/wp-content/uploads/2024/07/Subscription-Stock-Management_d6cc41.png?w=980)Stock management for a subscription product

> 

### What if I don’t want stock to be reduced after each renewal?

[↑ Back to top](#doc-title)

In some cases, you may not want stock to renew on each renewal order. If that’s the case, you can use the free  [Woo Subscriptions – Do Not Reduce Stock on Renewal](https://github.com/Prospress/woocommerce-subscriptions-do-not-reduce-stock-on-renewal) extension to achieve that. If you choose to manage subscription stock this way, please that it applies to **all** subscription products by default and would require customization if you only want this to apply to certain products.

### Will renewals be paused if stock quantity reaches 0?

[↑ Back to top](#doc-title)

No. New renewal orders will continue to process as normal when the stock quantity for a subscription product reaches 0. When this occurs, the stock count will go into the negative. If you wish to stop renewals for out-of-stock products, you need to suspend any subscriptions that contain the out-of-stock product.

**Note:** There is one caveat to this rule – If customers are renewing early or have manual renewal payments configured instead of automatic renewal, they will not be able to process their renewal. This is because manual renewals require the customer to go through the checkout process again and much like customers purchasing a new subscription, this triggers an out-of-stock warning on the product page or in the cart/checkout.

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

