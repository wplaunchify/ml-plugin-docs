# Billing Date Alignment

*Category from WooCommerce Subscriptions documentation*

---

## Guide to Billing Date Alignment

**Source:** [https://woocommerce.com/document/subscriptions/billing-date-alignment/](https://woocommerce.com/document/subscriptions/billing-date-alignment/)

# Guide to Billing Date Alignment

			This guide provides general information about aligning subscription billing dates with the [WooCommerce Subscriptions extension](https://woocommerce.com/products/woocommerce-subscriptions/). If you already have billing date alignment configured on your store and are ready to create an aligned subscription product read: [Creating an Aligned Subscription Product](https://woocommerce.com/document/subscriptions/billing-date-alignment/creating-an-aligned-subscription-product/).

If you’re new to WooCommerce Subscriptions and haven’t read about how the [subscription renewal process](https://woocommerce.com/document/subscriptions/renewal-process/) works, we suggest reading that first to make the information on this page easier to understand.

## What is Billing Date Alignment

[↑ Back to top](#doc-title)

Billing date alignment aligns all subscribers to the same renewal date, regardless of when they sign up. By default, WooCommerce Subscriptions sets each subscriber’s renewal based on their sign-up date. However, some businesses need all renewals to occur on the same day.

Consider a monthly gift box service that ships on the 1st of each month. Without billing date alignment, a customer who signs up on January 20th would renew on February 20th, which is earlier than the shipment date for the product. With billing date alignment, this customer’s first renewal shifts to February 1st, aligning with the shipping date of the monthly gift box.

When editing a [Simple Subscription product](https://woocommerce.com/document/subscriptions/creating-subscription-products/#simple-subscriptions), an **Align billing** drop-down is available in the product’s General tab, allowing you to select a specific renewal day.

![](https://woocommerce.com/wp-content/uploads/2026/04/simple-subscription-align-billing.png?w=980)Billing Date Alignment for Simple Subscription Product Type

For [Variable Subscription products](https://woocommerce.com/document/subscriptions/creating-subscription-products/#variable-subscriptions), this setting is available in the **Variations** tab when editing an individual variation.

![](https://woocommerce.com/wp-content/uploads/2026/04/variable-subscription-align-billing.png?w=980)Billing Date Alignment for Variable Subscription Product Type

When editing a subscription plan for a [supported non-subscription product](https://woocommerce.com/document/subscriptions/creating-subscription-products/#purchase-options-for-non-subscription-product-types), this setting is available within the plan settings for both storewide and custom subscription plans.

![](https://woocommerce.com/wp-content/uploads/2026/04/supported-non-subscription-product-align-billing.png?w=980)Billing Date Alignment for Supported Non-Subscription Product Types

The options depend on the product’s billing interval:

| Billing interval | Align billing options | Example |
| --- | --- | --- |
| Weekly | Day of the week | Monday each week |
| Monthly | Day of the month (1–28) | 1st day of the month |
| Yearly | Month of the year | January each year |

Daily subscriptions do not support billing date alignment, as they already renew every day.

Each product defaults to **Do Not Align**. To enable billing date alignment for a product, select the desired renewal day from the Align billing dropdown.

### Time of Day Renewals Are Processed

[↑ Back to top](#doc-title)

Aligned renewals are scheduled to run at 3:00 a.m. in your site’s time zone. You can set your site’s time zone on the WordPress General Settings administration screen.

**Note:** This schedule is set when customers sign up. Changing your site’s time zone later doesn’t affect existing subscriptions. You may need to manually adjust next payment dates if the time zone was incorrect.

Additionally, the 3:00 a.m. schedule applies to the first renewal only. Subsequent renewals are based on when the last renewal was processed. This becomes important when your store is processing a large number of subscriptions. For example:

On January 15, you start selling a new monthly subscription aligned to the first day of the month. You have 1,200 new subscribers sign up between January 15 and January 31. At 3:00 a.m. on February 1, WooCommerce Subscriptions begins processing renewals. However, it’s not possible to process all 1,200 renewals instantly. Instead, Subscriptions processes them as a queue, meaning the renewal for the thousandth subscriber might not be processed until 4:00 a.m. After it is processed, the renewal for March 1 will be scheduled for 4:00 a.m. rather than 3:00 a.m.

This design helps stagger renewals on stores managing a large queue, which reduces server load.

### Enabling Billing Date Alignment with Existing Subscriptions

[↑ Back to top](#doc-title)

When you enable billing date alignment on a subscription product that already has active subscribers, the existing subscriptions’ next payment dates will not be affected. Only new subscribers will have their renewal schedule aligned.

If you wish to realign the payment dates of existing subscriptions to match the new schedule, you need to manually change their next payment dates to reflect the aligned billing date.

### Manually Changing a Subscription’s Payment Date

[↑ Back to top](#doc-title)

If a store manager [manually changes the next payment date](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-11) for a single subscription, future payments will be processed based on the new payment date selected.

For example, changing a weekly subscription aligned to Mondays to have the next payment processed on Wednesday will mean all future payments are processed on Wednesday. This is because future payments are calculated based on the last renewal payment, and billing date alignment is only calculated and applied to the first payment.

If you wish to realign the payment dates, you need to change the next payment date again after a payment has been processed out of sync.

**Note**: If your store is still using PayPal Standard (sunset in 2021) it doesn’t have the ability to sync annual renewals to a specific date. WooCommerce uses a loophole to emulate similar functionality, but it’s only possible by adding a secondary $0.01 trial period. If you want to avoid that confusion, use [PayPal Payments.](https://woocommerce.com/products/woocommerce-paypal-payments/)

## First Billing Behavior

[↑ Back to top](#doc-title)

When a customer subscribes to a product with an aligned billing date, the sign-up date usually won’t fall on the renewal day. The **First billing behavior** setting determines how customers are charged when they subscribe to products with aligned billing dates.

This setting is found under **WooCommerce > Settings > Subscriptions**, in the **Billing Date Alignment** section.

There are three options:

### Charge Full Amount at Sign-up

[↑ Back to top](#doc-title)

Customers are charged the full recurring amount when they subscribe.

For example, if a customer subscribes to a $30/month product on March 15 and the billing date is aligned to the 1st of the month, they pay $30 at sign-up. Their next charge of $30 occurs on April 1.

This is the default setting.

**Sign-up cutoff window**

When **Charge full amount at sign-up** is selected, an additional field appears: **Sign-up cutoff window**. This lets you specify a number of days before the billing date during which customers will not be charged until the next billing date. Set to zero to disable.

The cutoff window prevents charging customers who sign up close to the renewal date. This is particularly useful for physical subscription boxes. Here’s an example:

- **Product:** Monthly subscription box, renewal/shipping date on the 1st of each month
- **Billing:** Full subscription cost charged at sign-up, with a 15-day cutoff window

**How it affects customers:**

- **Customer A** subscribes on the 10th: They are charged immediately and receive the current month’s box.
- **Customer B** subscribes on the 20th: They are not charged until the 1st of next month and receive next month’s box.

This approach ensures timely shipping for most of the month while preventing late-month orders from creating fulfillment challenges or customer disappointment.

### Charge on the Next Billing Date

[↑ Back to top](#doc-title)

Customers are not charged when they subscribe. Their first recurring charge occurs on the next billing date.

For example, if a customer subscribes to a $30/month product on March 15 and the billing date is aligned to the 1st of the month, they pay nothing at sign-up. Their first charge of $30 occurs on April 1.

### Prorate Until the Next Billing Date

[↑ Back to top](#doc-title)

Customers are charged a prorated amount when they subscribe based on the days remaining until the next billing date. The full recurring amount is charged on the next billing date.

**How proration is calculated**

Proration adjusts the first payment based on the time left in the current billing period. The calculation is:

1. Find the daily price of the subscription.
2. Multiply it by the days remaining until the next renewal date.

Here are two examples using a $100/year subscription aligned to January 1:

**Mid-year sign-up:**

- Customer signs up: July 1
- Days remaining until January 1: 184
- Prorated charge: $50.41 (184 days at $0.27 per day)

**Late-year sign-up:**

- Customer signs up: November 15
- Days remaining until January 1: 47
- Prorated charge: $12.87 (47 days at $0.27 per day)

**Apply proration to**

When **Prorate until the next billing date** is selected, an additional field appears: **Apply proration to**. This lets you choose which product types are prorated:

- **Virtual subscription products**—Prorates digital or virtual subscriptions (checked by default).
- **Physical subscription products**—Prorates subscriptions that involve shipping a physical product.

At least one product type must be selected. Product types not selected will be charged on the next billing date instead.

**Tip:** Proration is most common for virtual products like software access or digital content, where customers receive less value during a partial billing period. Physical products such as subscription boxes are typically not prorated, since the customer receives the full product regardless of when they sign up.

### Comparison

[↑ Back to top](#doc-title)

The following example shows how each option works for a $30/month subscription aligned to the 1st of the month, when a customer subscribes on March 15:

| Option | Charge at sign-up | Charge on April 1st |
| --- | --- | --- |
| Charge full amount at sign-up | $30.00 | $30.00 |
| Charge on the next billing date | $0.00 | $30.00 |
| Prorate until the next billing date | ~$15.48 | $30.00 |

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

## Creating an Aligned Subscription Product

**Source:** [https://woocommerce.com/document/subscriptions/billing-date-alignment/creating-an-aligned-subscription-product/](https://woocommerce.com/document/subscriptions/billing-date-alignment/creating-an-aligned-subscription-product/)

# Creating an Aligned Subscription Product

			With [billing date alignment](https://woocommerce.com/document/subscriptions/billing-date-alignment) enabled on a subscription product, you can align renewal payments for all subscribers to a specific day. This guide explains the process for creating or editing subscription products to align renewal dates, along with important information about how billing date alignment interacts with sign-up fees, free trials, coupons, and order statuses.

For general information about billing date alignment, including how to configure the **First billing behavior** setting and other global options, see the *Guide to Billing Date Alignment*.

## Creating an Aligned Subscription Product

[↑ Back to top](#doc-title)

You can choose to align the renewal schedule to a specific day for a subscription product set to renew weekly, monthly, or yearly. Follow these instructions to create a new aligned subscription product or edit an existing one:

1. Go to **Products**.
2. Create a new subscription product or click **Edit** on the subscription product you want to modify.
3. For Simple Subscription products, in the **Product Data** box, select a day in the **Align billing** drop-down on the **General** tab.

For Variable, this setting is available in the **Variations** tab when editing an individual variation.

For a non-subscription product with the subscription purchase option enabled, the **Align renewal** setting is located within the subscription plan created for the product.
4. Click the **Publish** button to save the product.

![](https://woocommerce.com/wp-content/uploads/2026/04/simple-subscription-align-billing_306138.png?strip=all&w=704)Billing Date Alignment for Simple Subscription Product Type

![](https://woocommerce.com/wp-content/uploads/2026/04/variable-subscription-align-billing_7bb369.png?strip=all&w=704)Billing Date Alignment for Variable Subscription Product Type

![](https://woocommerce.com/wp-content/uploads/2026/04/supported-non-subscription-product-align-billing.png?strip=all&w=704)Billing Date Alignment for Supported Non-Subscription Product Types

**Renewal options for different billing intervals**

The options displayed in the Align billing drop-down depend on the billing interval of the subscription product:

- **Weekly**: You can pick any day of the week, like Monday or Sunday.
- **Monthly**: You can pick a specific day of the month from the 1st to the 27th, or set renewals to process on the last day of the month, which varies: the 28th, 30th, or 31st, depending on the month.
- **Yearly**: You can pick a specific day of the year, like January 18 or May 22.

### How does the sign-up date affect alignment for longer billing intervals?

[↑ Back to top](#doc-title)

When customers sign up for subscriptions with billing intervals greater than **every** week, month, or year, two important things occur:

WooCommerce Subscriptions ignores the longer interval when setting the first aligned date. It always uses the next occurring alignment date, regardless of the billing interval. Here’s an example:

- **Subscription:** $30 every three months, aligned to the 1st of the month
- **Customer signs up:** April 6
- **First renewal date:** May 1 (not July 1)

In this example, WooCommerce Subscriptions ignores the billing interval and makes the first renewal payment on the next available alignment date (the 1st of the next month). This may seem counterintuitive at first, but it ensures consistency across billing intervals. Here’s why:

Monthly intervals are straightforward. For a subscription aligned to the 1st, the next renewal is on the 1st of the following month. Weekly or biweekly intervals are more complex. It’s unclear whether to start from the first week of the year, the current month, or the next month when calculating the alignment date. By always using the next alignment date, the system avoids these complexities and maintains a predictable schedule.

**Note:** If you want subscriptions to consider longer intervals when setting renewal dates, vote for the **Renew on set dates** feature idea.

**Note:**

If you want subscriptions to consider longer intervals when setting renewal dates, vote for the “[renew on set dates](https://woocommerce.com/feature-request/set-specific-renewal-dates-on-certain-dates-for-quarterly-subscriptions/)” feature idea.

## Purchasing an Aligned Subscription

[↑ Back to top](#doc-title)

Customers purchase aligned subscription products the same way they purchase any other subscription product in your store. To differentiate aligned subscriptions, WooCommerce Subscriptions displays the renewal day in the subscription’s price on the product page and in the totals on the cart and checkout pages.

Here are some examples of how different billing intervals display with and without billing date alignment:

| Billing Period | Price without Alignment | Price with Alignment |
| --- | --- | --- |
| Weekly | $12.00 / week | $12.00 every Wednesday |
| Fortnightly | $12.00 every 2 weeks | $12.00 every 2 weeks on Monday |
| Monthly | $5.00 / month | $5.00 on the 1st of each month |
| Quarterly | $5.00 every 3 months | $5.00 on the last day of every 3rd month |
| Yearly | $25.00 / year | $25.00 on January 1st each year |

The first payment date displays in the following locations:

- On the **Product** page for Simple Subscription products. For Variable Subscription products, the first payment date displays once a customer selects a variation, since each variation can have different billing intervals and alignment settings.
- On the **Cart** page, below the cart total.
- On the **Checkout** page, below the order total.

**Note:** If a customer signs up for a subscription on the same day as the aligned renewal date, the first renewal date will be the following renewal period. For example, if you align the subscription to renew on Wednesdays and the customer purchases the subscription on a Wednesday, the first renewal date will be the following Wednesday.

### Order status for an aligned subscription

[↑ Back to top](#doc-title)

By default, if an order records the purchase of a non-prorated aligned subscription and does not contain any other non-aligned products, the order total will be $0. In this case, the order status changes to **Completed**, regardless of whether the subscription is for a physical item. This is because the order is a record of the customer signing up to receive the product on the alignment date.

### How coupons work for aligned subscriptions

[↑ Back to top](#doc-title)

Coupons apply to aligned subscriptions much the same way as they apply to standard purchases. The key difference is that cart, product, and sign-up fee coupons will only be applied if one or both of the following conditions are met:

- The subscription has a sign-up fee.
- The subscription has a prorated payment charged at sign-up.

These coupons only apply to an initial payment. When there is no sign-up fee or prorated gap payment, the coupon won’t apply.

### When are sign-up fees charged for aligned subscriptions?

WooCommerce Subscriptions always charges sign-up fees when a customer signs up for a subscription, regardless of whether they sign up on the renewal date.

Let’s look at a few examples of how this works in different aligned subscription scenarios:

- **No Sign-Up Fee:**
- If there’s no sign-up fee and the subscription charges $10 on the 1st day of each month, a customer signing up on January 20 pays nothing initially. Their first payment of $10 will be on February 1.
- **With Sign-Up Fee:**
- If there’s a $50 sign-up fee along with the $10 monthly charge, a customer signing up on January 20 pays $50 immediately and then $10 on February 1.
- **Same Day Sign-Up:**
- If a customer signs up on the 1st day of the month when the subscription charges $10 and has a $10 sign-up fee, they pay $20 up front.
- **Prorated First Payment:**
- For prorated subscriptions charging $30 monthly with no sign-up fee, a customer signing up on January 20 pays $10.65 initially (the prorated amount). With a $50 sign-up fee, the initial payment on January 20 is $60.65, followed by $30 on February 1.

### How do free trials apply to aligned subscriptions?

Free trials delay the first payment date for aligned subscriptions. WooCommerce Subscriptions calculates the first payment from the end of the free trial period.

Here’s a typical example of how this works:

- **Subscription:** $10/month, aligned to the 1st of each month
- **Free trial:** two weeks
- **Sign-up date:** January 20
- **Free trial ends:** February 3
- **First payment:** March 1

Since the free trial ended on February 3 (after the 1st), the first aligned payment is the 1st of the following month, or March 1.

**Prorated subscriptions after a free trial**

Customers will not pay prorated amounts after a free trial ends. This would require a three-tier pricing structure:

1. Free trial period
2. Prorated amount post-trial
3. Regular recurring amount

Currently, WooCommerce Subscriptions doesn’t support a three-tier pricing system by default. However, there are ways to configure it using [limited subscriptions payment coupons](https://woocommerce.com/document/subscriptions/subscriptions-coupons/limited-payment-coupon-guide/#three-tier-pricing). If you want to implement a more complex system of price changes, you may want to use [AutomateWoo](https://automatewoo.com/?_gl=1*yibpvc*_gcl_au*MTY0NDYwMDgyNi4xNzIwNDUwNzk3*_ga*MTEyNzExNTAzNy4xNjkwOTAyMTQ4*_ga_98K30SHWB2*MTcyMDQ0ODkyNC4yMjAuMS4xNzIwNDY4NjQ0LjAuMC4w) as it has [add/remove coupon](https://woocommerce.com/document/automatewoo/actions/subscription-add-remove-coupon/) and [add/remove product](https://woocommerce.com/document/automatewoo/actions/subscription-add-remove-product/) functionalities that better support a complex pricing system.

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

