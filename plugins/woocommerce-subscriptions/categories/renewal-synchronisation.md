# Renewal Synchronisation

*Category from WooCommerce Subscriptions documentation*

---

## Guide to Synchronized Renewals

**Source:** [https://woocommerce.com/document/subscriptions/renewal-synchronisation/](https://woocommerce.com/document/subscriptions/renewal-synchronisation/)

# Guide to Synchronized Renewals

			This guide provides general information about synchronizing subscription renewals with the[WooCommerce Subscriptions extension](https://woocommerce.com/products/woocommerce-subscriptions/). If you already have subscription synchronization activated on your store and are ready to create a synchronized subscription read: [Creating a Synchronized Subscription Product](https://woocommerce.com/document/subscriptions/renewal-synchronisation/creating-a-synchronized-subscription-product/).

If you’re new to WooCommerce Subscriptions and haven’t read about how the [subscription renewal process](https://woocommerce.com/document/subscriptions/renewal-process/) works, we suggest reading that first to make the information on this page easier to understand.

## What is a Synchronized Renewal?

[↑ Back to top](#doc-title)

A *synchronized renewal*****aligns all subscribers to the same renewal date, regardless of when they sign up. By default, WooCommerce Subscriptions sets each subscriber’s renewal based on their sign-up date. However, some businesses need all renewals to occur on the same day:

Consider a monthly gift box service that ships on the 1st of each month. Without synchronization, a customer who signs up on January 20th would renew on February 20th, which is earlier than the shipment date for the product. With synchronization enabled, this customer’s first renewal shifts to February 1st, aligning with the shipping date of the monthly gift box.

You can activate this feature in **WooCommerce > Settings > Subscriptions**. Once enabled, new subscribers’ renewals will match your chosen synchronization date. This approach ensures all subscribers renew and receive products on the same schedule.

## Renewal Synchronization Activation and Settings

[↑ Back to top](#doc-title)

The Renewal Synchronization feature is deactivated/switched off by default. **Follow these steps to activated synchronized renewals:**

1. Go to: **WooCommerce > Settings > Subscriptions.**
2. Click the **Synchronise Renewals** checkbox.
3. Click the **Save Changes** button.

Once this is activated, you can then go to **Products** and [add new synchronized subscription products](https://woocommerce.com/document/subscriptions/renewal-synchronisation/creating-a-synchronized-subscription-product/) or edit existing subscriptions products to synchronize them.

![Renewal Synchronisation Settings Screenshot](https://woocommerce.com/wp-content/uploads/2014/04/subscriptions-settings-1-5-synchronisation-settings.png?strip=all&w=704)Renewal Synchronization Settings

### Time of day renewals are processed

[↑ Back to top](#doc-title)

Synchronized renewals are scheduled to run at 3:00am in your site’s timezone. You can set your site’s timezone on the WordPress[General Settings](http://codex.wordpress.org/Settings_General_Screen) administration screen.

For example, if based in California set to **Los Angeles** or **UTC -7** so that renewals will be processed at the correct time:

![](https://woocommerce.com/wp-content/uploads/2024/07/SubsTimeZoneSettings.png?strip=all&w=704)WordPress Timezone Settings

**Note:** This schedule is set when customers sign up.  Changing your site’s timezone later doesn’t affect existing subscriptions. You may need to [manually adjust next payment dates](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-11) if timezone was incorrect.

Additionally, this applies to the first renewal only. Subsequent renewals are based on when the last renewal was processed. This becomes important when your store is processing a large amount of subscriptions, **for example**:

On the 15th January, you start selling a new monthly subscription that is synchronized to the first day of the month. You have 1,200 new subscribers sign up between 15th January and 31st January. At 3am on the 1st February, Woo Subscriptions will begin processing renewals; however, it’s not possible to process all 1,200 renewals instantly, instead, Subscriptions will process them as a queue, meaning the renewal for the thousandth subscriber might not be processed until 4:00am. After it is processed, the renewal for the 1st of March will be scheduled for 4:00am, rather than 3:00am.

This design helps stagger renewals on stores managing a large queue, which reduces server load.

### Activating “Synchronise renewals” when there are existing subscription orders

[↑ Back to top](#doc-title)

When you turn on **Synchronise renewals** in the subscription product settings and there are existing subscription orders, the existing live orders’ next payment date **will not** be affected.

Only new subscribers will have their renewal schedule synchronized.

If you wish to re-align the payment dates of the existing live orders and make their schedule similar to the new subscribers with synchronized renewals, you need to manually change their next payment date to reflect the synchronized renewal date.

### Manually changing a subscription’s payment date

[↑ Back to top](#doc-title)

If a store manager[manually changes the next payment date](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-11) for a single subscription, future payments will be processed based on the **new** payment date selected.

For example, changing a weekly subscription synchronized to Mondays to have the next payment processed on Wednesday will mean all future payments will be processed on Wednesday. This is because future payments are calculated based on the last renewal payment and renewal synchronization is only calculated and applied to the first payment.

If you wish to re-align the payment dates, you need to change the next payment date again after a payment has been processed out-of-sync.

Note: If your store is still using PayPal Standard (sunset in 2021) it doesn’t have the ability to sync annual renewals to a specific date. WooCommerce uses a loophole to emulate similar functionality, but it’s only possible by adding a secondary $0.01 trial period. If you want to avoid that confusion, use [PayPal Payments.](https://woocommerce.com/products/woocommerce-paypal-payments/)

## Prorating the first renewal

[↑ Back to top](#doc-title)

After activating renewal synchronization in **WooCommerce > Settings > Subscriptions**, a box, labeled “Prorate First Renewal” appears underneath the synchronize renewal checkbox:

![](https://woocommerce.com/wp-content/uploads/2024/07/prorate-settings.png?strip=all&w=704)Pro-rate settings

You can activate prorating for either virtual subscription products only or all subscription products. Let’s take a look at what prorating means and all the options you can choose from:

### What is Prorating?

Prorating adjusts the first payment based on the time left in the current billing period. We calculate this by:

1. Finding the daily price of the subscription
2. Multiplying it by the days remaining until the next renewal date

Let’s look at two examples of how this works in practice, using a yearly subscription that renews on January 1st each year:

**Mid-Year Sign-up**

- Subscription cost: $100 per year
- Customer signs up: July 1st
- Days remaining until January 1st: 184
- Prorated charge: $50.41 (184 days at $0.27 per day)

**Late-Year Sign-up**

- Same $100 yearly subscription
- Customer signs up: November 15th
- Days remaining until January 1st: 47
- Prorated charge: $12.87 (47 days at $0.27 per day)

### Prorate Settings/Options

**Never (do not charge any recurring amount):**

If the option **Never (do not charge any recurring amount)**is selected, no recurring amount will be charged at the time of purchase (except if there is a subscription sign-up fee). The customer would pay on the first upcoming synchronized date.

**Never (charge full amount at sign-up):**

If the option **Never (charge the full recurring amount at sign-up)** is selected, the full recurring amount will be charged at the time of purchase. An additional field will appear if you choose this option called **Sign-up grace period**. This grace period is the number of days before the synchronized renewal day during which a subscription will not charge the recurring amount at sign-up.

![](https://woocommerce.com/wp-content/uploads/2024/07/signup-grace-period.png?strip=all&w=704)Sign-up grace period box, enter the number. of days for the grace period

The grace period prevents charging customers who sign up close to the renewal date. This feature is particularly useful for physical subscription boxes. Let’s look at an example to illustrate how this works:

**Product:** Monthly subscription box

**Renewal/shipping date:** 1st of each month

**Full subscription cost:** Charged at sign-up

**Grace period:**15 days

**How it affects customers:**

- Customer A orders on the 10th:
- Charged immediately
- Receives current month’s box
- Customer B orders on the 20th:
- Not charged until the 1st of next month
- Receives next month’s box

This approach ensures timely shipping for most of the month while preventing late-month orders from creating fulfillment challenges or customer disappointment.

**For Virtual Subscription Products Only** or **For All Subscription Products**

If the option **For Virtual Subscriptions Only** or**For All Subscription Products**is selected all virtual subscription products will be prorated or all subscription products will be prorated (respectively).

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

## Creating a Synchronized Subscription Product

**Source:** [https://woocommerce.com/document/subscriptions/renewal-synchronisation/creating-a-synchronized-subscription-product/](https://woocommerce.com/document/subscriptions/renewal-synchronisation/creating-a-synchronized-subscription-product/)

# Creating a Synchronized Subscription Product

			With [synchronized renewals](https://woocommerce.com/document/subscriptions/renewal-synchronisation/) activated for your store, you can create synchronized subscriptions products or modify existing subscriptions product to have a synchronized renewal date. This guide explains the process for creating or editing subscription products to synchronize renewal payments for all your customers and a few important pieces of information about how synchronized renewals work for subscription products with sign-up fees or free trials.

## Creating a Synchronized Subscription Product

[↑ Back to top](#doc-title)

You can choose to align the renewal schedule to a specific day for a subscription product set to renew weekly, monthly, or yearly. Follow these instructions to create a new synchronized subscription product or edit an existing one:

1. Go to **Products**
2. Create a new subscription product or click **Edit**or the**Product Name**on the subscription product you want to modify
3. In the **Product Data** box, select a day in the **Synchronize Renewals** field
4. Click the **Publish** button to save the product.

![](https://woocommerce.com/wp-content/uploads/2024/07/syncrenewals_94145a.png?strip=all&w=704)Example of synchronized renewals set to Monday of each week

**Renewal Options for Different Renewal Periods**

The options displayed for synchronizing subscription renewals will depend on the billing interval of the subscription product.

- For products which renew **weekly**, you can choose any day of the week, like *Monday* or *Sunday*.
- For products that renew monthly, you can choose a specific day of the month from the 1st to the 27th, or set renewals to process on the last day of the month, which varies: the 28th, 30th, or 31st, depending on the month.
- For products which renew **yearly**, you can choose a specific day of the year, like January 18th or May 22nd.

### How does customer sign-up date affect sync dates for longer billing intervals (e.g. every 3rd month)?

[↑ Back to top](#doc-title)

When customers sign up for subscriptions with billing intervals greater than “every” week, month, or year, two important things occur:

- WooCommerce Subscriptions ignores the longer interval when setting the **first** sync date.
- It always uses the next occurring sync date, regardless of the billing interval.

**Here is an example of what this looks like in practice:**

1. **Subscription:** $30 every 3 months, synced to the 1st of the month
2. Customer **signs up**on April 6th
3. **First renewal date:** May 1st (not July 1st)

You can see in this example that WooCommerce Subscriptions ignores the billing interval and makes the first renewal payment on the next available sync date ( the 1st of the next month). This may seem counterintuitive at first but it ensures consistency across billing intervals. **Here’s why:**

- Monthly intervals are straightforward. For a subscription synced to the 1st, we can easily set the next renewal to the 1st of the following month.
- Weekly or bi-weekly intervals are more complex. It’s unclear whether to start from the first week of the year, the current month, or the next month when calculating the sync date.

By always using the next sync date, it avoids these complexities and maintains a predictable system .

**Note:** If you want subscriptions to consider longer intervals when setting renewal dates, vote for the “[renew on set dates](https://woocommerce.com/feature-request/set-specific-renewal-dates-on-certain-dates-for-quarterly-subscriptions/)” feature idea.

## Purchasing a Synchronized Subscription

[↑ Back to top](#doc-title)

Customers purchase synchronized subscription products the same way they purchase any other subscription product in your store. To differentiate synchronized subscriptions WooCommerce Subscriptions presents synchronized billing schedules to your customers in the following ways:

- The **renewal day** displays in the subscription’s price on the product page and in the totals displayed on the cart and checkout pages. Here are some examples of how different renewal periods display with and without synchronization:

| Billing Period | Example Price without Synchronization | Example Price with Synchronization |
| --- | --- | --- |
| Weekly | $12.00 / week | $12.00 every Wednesday |
| Fortnightly | $12.00 every 2 weeks | $12.00 every 2 weeks on Monday |
| Monthly | $5.00 / month | $5.00 on the 1st of each month |
| Quarterly | $5.00 every 3 months | $5.00 on the last day of every 3rd month |
| Yearly | $25.00 / year | $25.00 on January 1st each year |

- The **first payment date** displays on the product page for simple subscription products. For variable products, the first payment date displays once a customer selects a variation  since each variation can have different billing intervals and synchronization settings.
- The **first payment date** displays on the cart total on the cart page.
- The **first payment date** displays below the order total on the checkout page.

**Note:** If a customer signs up for a subscription on the same day as the synchronized renewal date, the first renewal date will be the following renewal period. For example, if you synchronize the subscription to renew on Wednesdays and the customer purchases the subscription on a Wednesday, the first renewal date will be the following Wednesday.

### Order status for a synced subscription

[↑ Back to top](#doc-title)

By default, if an order is to keep a record of the purchase of a *non-prorated* synchronized subscription and it does not contain any other non-synchronized products, resulting in an order total of $0, it will change its status to completed, regardless of whether the subscription is for a physical item or not; it is a record of the customer signing up to receive the product on the sync date.

### How coupons work for synced subscriptions

[↑ Back to top](#doc-title)

Coupons apply to synchronized subscriptions much the same way as they apply to standard [purchases](https://woocommerce.com/document/subscriptions/store-manager-guide/#section-5).

The key difference is that cart, product and sign up fee coupons will only be applied if:

1. the subscription has a **sign up fee**; and/or
2. the subscription has a **prorated payment** charged at the outset;

This is because these coupons only apply  to an initial payment. When there is no sign-up fee or prorated gap payment, the coupon won’t apply.

### When are sign up fees charged for synced subscriptions?

WooCommerce Subscriptions **always charges sign-up fees when customer signs up for a subscription**, regardless of whether they sign up on the renewal date or not. Let’s look at a few examples of how this works in different synchronized subscription scenarios:

- **No Sign-Up Fee:**
- If there’s no sign-up fee and the subscription charges $10 on the 1st day of each month, a customer signing up on January 20th pays nothing initially. Their first payment of $10 will be on February 1st.
- **With Sign-Up Fee:**
- If there’s a $50 sign-up fee along with the $10 monthly charge, a customer signing up on January 20th pays $50 immediately and then $10 on February 1st.
- **Same Day Sign-Up:**
- If signing up on the 1st day of the month when the subscription charges $10 and has a $10 sign-up fee, the customer pays $20 upfront.
- **Prorated First Payment:**
- For prorated subscriptions charging $30 monthly and no sign-up fee, signing up on January 20th costs $10.65 initially (prorated amount). With a $50 sign-up fee, the initial payment on January 20th is $60.65, followed by $30 on February 1st.

### How do free trials apply to synchronized subscriptions?

Free trials delay the first payment date for synchronized subscriptions. WooCommerce Subscriptions calculates the first payment from the end of the free trial period.

Here’s a typical example of how this works:

- **Subscription:** $10/month, synchronized to the 1st of each month
- **Free trial:** 2 weeks
- **Sign-up date:** January 20th
- **Free trial ends:** February 3rd
- **First payment:** March 1st

Since the free trial ended on February 3rd (after the 1st), the first synchronized payment is the first of the following month, or March 1st.

**Prorated subscriptions**

Customers will not pay prorate amounts after a free trial ends. This would require a three-tier pricing structure:

1. Free trial period
2. Prorated amount post-trial
3. Regular recurring amount

Currently, WooCommerce Subscriptions doesn’t support three-tier pricing system by default. However, there are ways to configure it using [limited subscriptions payment coupons](https://woocommerce.com/document/subscriptions/subscriptions-coupons/limited-payment-coupon-guide/#three-tier-pricing). If you want to implement a more complex system of price changes, you may want to use [AutomateWoo](https://automatewoo.com/?_gl=1*yibpvc*_gcl_au*MTY0NDYwMDgyNi4xNzIwNDUwNzk3*_ga*MTEyNzExNTAzNy4xNjkwOTAyMTQ4*_ga_98K30SHWB2*MTcyMDQ0ODkyNC4yMjAuMS4xNzIwNDY4NjQ0LjAuMC4w) as it has  [add/remove coupon](https://woocommerce.com/document/automatewoo/actions/subscription-add-remove-coupon/) and [add/remove product](https://woocommerce.com/document/automatewoo/actions/subscription-add-remove-product/) functionalities that better support a complex pricing system.

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

