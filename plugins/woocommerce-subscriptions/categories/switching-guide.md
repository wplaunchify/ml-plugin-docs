# Switching Guide

*Category from WooCommerce Subscriptions documentation*

---

## Store Manager’s Guide to Subscription Switching

**Source:** [https://woocommerce.com/document/subscriptions/switching-guide/](https://woocommerce.com/document/subscriptions/switching-guide/)

# Store Manager’s Guide to Subscription Switching

			Customers can upgrade and downgrade their subscriptions, as well as change the quantity of any items they are subscribed to, when you have the [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) switching feature enabled.

The following documentation covers details of the switching process to help clarify what happens when you allow customers to switch between subscription products and how you can configure the Switch feature for your store’s requirements.

## Switching Subscriptions

[↑ Back to top](#doc-title)

Once enabled, WooCommerce Subscriptions switching feature allows your customers to *upgrade*, *downgrade* or *cross-grade* between different subscription products.

Switching is possible between the subscription plans available on a product, between the variations of a variable product, and between products within a grouped product. It is also possible for shoppers to update the quantity of any product on their subscription.

## Subscription Switching Settings

[↑ Back to top](#doc-title)

Enable and manage the WooCommerce Subscriptions switching features by going to **WooCommerce > Settings > Subscriptions**, and scrolling down to the **Switching**section.

![](https://woocommerce.com/wp-content/uploads/2026/07/switching.png?strip=all&w=704)

### Allow Switching

[↑ Back to top](#doc-title)

Switching is off by defualt, and first needs to be enabled to allow customers to switch between subscriptions by default. Enable the WooCommerce Subscriptions switching feature by following these steps:

1. Go to **WooCommerce >** **Settings > Subscriptions**.
2. Scroll down to the **Switching** section.
3. Select one or more of the product types customers can switch between
4. Click **Save changes**.

The three different kinds of switching options allow your subscribers to:

- Subscription plans – switch between the subscription plans available on a product.
- Subscription variations – switch from one variation to another within the same variable product.
- Grouped subscriptions – switch between products within the same grouped product. Products must be published to be available as switching options.

In either case, products must be **published**to be available as switching options.

A subscription may be switched if it is active but will require payment if it is switched from a free to paid subscription, so future payments can be processed automatically (unless the store has disabled automatic payments). Customers cannot switch subscriptions that are in the on hold or pending cancellation [statuses](https://woocommerce.com/document/subscriptions/statuses/).

**Note:**If you’re using the [WooCommerce Memberships extension integration](https://woocommerce.com/document/woocommerce-memberships-subscriptions-integration/) to grant memberships to users who have active subscriptions, and want to prevent customers from having more than one active plan at a time, but still allow switching between membership plans, in this case enable **Subscription variations** but leave **Grouped subscriptions** unchecked. Then ensure customers can only have one active Subscription for your variable subscription product that’s tied to memberships using the[limit subscriptions setting.](https://woocommerce.com/document/subscriptions/store-manager-guide/#section-7)

### First billing behavior

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/first-billing-behavior.png?strip=all&w=704)

The First billing behavior setting controls how a subscriber is charged at the moment they switch. Choose one:

- **Charge full amount at switch** – The subscriber pays the full recurring price of the new product as soon as they switch, with no credit for the unused portion of their current billing period. Use this when a switch should simply start a fresh billing period.
- **Prorate amount on upgrades** – When a subscriber upgrades to a more expensive product, they’re credited for the unused portion of their current billing period and charged the prorated price of the new product for the time remaining until their next renewal. Downgrades are not prorated.
- **Prorate amount on upgrades and downgrades** – Proration applies in both directions. Whether the subscriber upgrades or downgrades, they’re credited for the unused portion of the current billing period and charged the prorated price of the new product for the remaining time.

When you choose either proration option, an **Apply proration to** setting appears. Select the product types proration should apply to — **Virtual subscription products**, **Physical subscription products**, or both. Any product type you leave unselected won’t be prorated, and at least one must be selected.

[Subscription Switching Process and Costs](https://woocommerce.com/document/subscriptions/switching-guide/switching-process-and-costs/) provides in depth information about how a recurring payment is prorated.

When determining whether proration applies, the current state of the new product is used. For example, if you set Apply proration to to Virtual subscription products only and a customer switches from a physical product to a virtual product, the switch is prorated because the new product is virtual.

### Signup fee behavior

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/signup-fee-behavior.png?strip=all&w=704)

Signup fee behavior controls how sign-up fees are handled when switching. Choose one:

- **Do not charge a sign up fee** – The subscriber isn’t charged a sign-up fee when switching, regardless of whether the new product’s sign-up fee is higher or lower than any fee they’ve already paid. This is the default.
- **Charge the full sign up fee** – The subscriber is charged the full sign-up fee of the new product when switching, with no credit for any sign-up fee already paid on their current subscription. This is useful when the sign-up fee covers the cost of setting up a subscription — for example, shipping items required to use it.
- **Prorate the sign up fee** – The subscriber is only charged the difference when the new product’s sign-up fee is higher than the fee they’ve already paid. If the new sign-up fee is lower, no credit is applied.

If the new subscription’s sign-up fee is lower than the current one, the subscriber is never credited for the difference — regardless of which option you choose.

### Fixed-term behavior

[↑ Back to top](#doc-title)

Fixed-term behavior controls how completed renewals are handled when a subscriber switches to a subscription that is set to expire. Choose one:

- **Do not prorate the subscription renewal count** – The subscriber completes the full number of renewals for the new subscription; previous renewals are not counted. For example, switching to a 12-month subscription schedules 12 further payments regardless of how many were completed on the old subscription.
- **Prorate the subscription renewal count** – The renewals the subscriber has already paid count toward the new subscription, so fewer payments remain. For example, if 4 payments of a 12-month subscription were completed and the subscriber switches to another 12-month subscription, only 8 further payments are scheduled. 

When the renewal count is prorated, choose which product types it applies to under Apply renewals to: **Virtual subscription products** and/or **Physical subscription products**. Product types not selected will not have previous renewals applied. At least one product type must be selected. Proration is based on the number of payments, not elapsed time. Off-schedule payments already processed are counted; skipped or missed payments are not.

Proration is based on the number of payments, not the amount of time between the start of the old subscription and the switch date. If additional payments have been processed off-schedule on the existing subscription, those are counted when prorating the subscription renewal count for the new subscription. Likewise, any payments the customer has skipped or missed are not counted.

### Switch button text

[↑ Back to top](#doc-title)

The  “Switch Button Text” option allows you to customize the text that will be displayed on the button that can be clicked to initiate a switch from your customer’s subscriber view in their account area. “Switch” is displayed by default, but you could change this to “Switch Subscription”, “Change Subscription”, or any other text that suits your store.

![](https://woocommerce.com/wp-content/uploads/2026/07/switch-button-text.png?w=980)

The Switch button is displayed in your customer’s detailed view of their subscription in their account area.

## Questions and support

[↑ Back to top](#doc-title)

**Something missing from this documentation? Still have questions and need assistance?**

- If you have a question about a specific extension or theme you’d like to purchase, [contact us](https://woocommerce.com/contact-us/#sales-form) to get answers.
- If you already purchased this product and need some assistance, get in touch with a Happiness Engineer via our [support page](https://woocommerce.com/my-account/create-a-ticket/) and select this product’s name from the Product dropdown.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to...
				![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.

---

## Subscription Switching with Coupons

**Source:** [https://woocommerce.com/document/subscriptions/switching-guide/subscription-switching-with-coupons/](https://woocommerce.com/document/subscriptions/switching-guide/subscription-switching-with-coupons/)

# Subscription Switching with Coupons

			Subscription switches can be tricky, especially when involving coupons. This section clarifies coupon application during switches, helping you understand available discounts and their usage timing.

## How subscription switching works with coupons

[↑ Back to top](#doc-title)

Switching from one subscription to another uses the normal checkout process. Consequently, coupon application for switches closely mirrors that of standard [subscription purchases](https://woocommerce.com/document/store-manager-guide/#section-2). Let’s take a look at this below:

The only difference is that cart, product, and [signup fee coupons](https://woocommerce.com/document/subscriptions/subscriptions-coupons/) only apply if:

- the new subscription has a **sign up fee**. or;
- the new subscription has a **gap payment**, or;
- the new subscription’s **first recurring payment** is charges at the time of the switch.

This is because these coupons can only be applied to an initial payment. When there is no initial payment, these coupons cannot be applied.

![This image has an empty alt attribute; its file name is coupon-switching.png](https://woocommerce.com/wp-content/uploads/2024/07/image_6e8e97.png?strip=all&w=704)Coupons like sign-up fee coupons will only discount the amount due at switching, not the recurring total.

### Existing Recurring Discount Coupons

[↑ Back to top](#doc-title)

A *Recurring Discount* coupon applied to an existing subscription does not automatically transfer to the new subscription during the switch.

To maintain the discount on the new subscription, the customer needs to apply the same coupon again, or apply a new coupon.

## Questions and support

[↑ Back to top](#doc-title)

**Something missing from this documentation? Still have questions and need assistance?**

- If you have a question about a specific extension or theme you’d like to purchase, [contact us](https://woocommerce.com/contact-us/#sales-form) to get answers.
- If you already purchased this product and need some assistance, get in touch with a Happiness Engineer via our [support page](https://woocommerce.com/my-account/create-a-ticket/) and select this product’s name from the Product dropdown.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to...
				![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.

---

## Subscription Switching Process and Costs

**Source:** [https://woocommerce.com/document/subscriptions/switching-guide/switching-process-and-costs/](https://woocommerce.com/document/subscriptions/switching-guide/switching-process-and-costs/)

# Subscription Switching Process and Costs

			Once the [WooCommerce Subscriptions Switching feature is enabled](https://woocommerce.com/document/subscriptions/switching-guide/#switch-settings), switching is a smooth and flexible process. Whether your customers are looking to upgrade to a more expensive plan, downgrade to a cheaper one, or switch to a plan with the same cost, you’ll want to understand how these changes affect their billing. This guide explains the nuances of the subscription switching process, and how Subscriptions determines switching cost.

## Switching Costs

[↑ Back to top](#doc-title)

A subscription switch can be classified in one of three categories:

- **Upgrade**: changing to a subscription that is more expensive on a daily basis.
- **Downgrade**: changing to a subscription that is cheaper on a daily basis.
- **Cross-grade**: changing to a subscription with the same price per day.

When prorating prices for these categories, two pricing mechanisms adjust any unrealized value of the current subscription:

- **First payment date**: The date the first recurring payment occurs for the new subscription.
- **Gap payment**: The amount due at the time of subscription change, plus any signup fee.

These two pricing mechanisms apply differently, depending on the switch category. The following sections explain how switching between subscriptions in each category affects the two elements of billing terms.

**Note:** Whether a subscription is considered more expensive, cheaper, or the same price is determined by its costs on a daily basis not on an absolute basis. For example, a $2 per day subscription is more expensive than a $300 per year subscription, which costs only $0.82 per day.

### Why does price per day  determine a switch’s classification as an upgrade, downgrade or cross-grade?

[↑ Back to top](#doc-title)

As mentioned in the section on [switching costs](#switching-costs), a switch can be classified as an *upgrade*, *downgrade* or *cross-grade*. This classification is based on comparing the price per day of the existing subscription and the new subscription.

Price per day determines the switching cost because it provides a consistent basis for comparing subscription plans. This approach ensures accuracy even if a customer cancels or switches their subscription before the end of the new billing period.

For example, if a customer switches from a $10 / month subscription to a $15 / year product, the price for the next subscription is higher. As a result, it may appear to be an *upgrade* when considering only the price and ignoring the billing period. However, if the customer only remained subscribed to the $15 / year subscription for one week and then cancelled the subscription or switched to a different subscription, they would have only used around $0.28 cents worth of value for that subscription, which is less than the $2.10 amount of value they would have consumed if they remained subscribed to the subscription with the lower price. As a result, the switch to the new subscription is considered a *downgrade*.

## Switching Process

[↑ Back to top](#doc-title)

To switch subscriptions, your customer completes a checkout process similar to the standard WooCommerce checkout process. Learn more about what a customer experiences during this process in the [Subscriber’s guide to switching subscriptions](https://woocommerce.com/document/subscriptions/customers-view/subscribers-view-switch/).

Let’s look at the different types of switches in more detail below:

### Cross-grades

[↑ Back to top](#doc-title)

Cross-grades are the simplest category of subscription changes. Because the two subscriptions have the same price per day, neither a **gap payment** nor changes to the **first payment date** are necessary.

This table illustrates the prorated value for cross-grades based on billing period of the new subscription.

| New Billing Period | Pricing Mechanism | Prorated Value |
| --- | --- | --- |
| Shorter | First payment date | Existing subscription’s next payment date |
| Gap Payment | None |
| Same | First payment date | Existing subscription’s next payment date |
| Gap Payment | None |
| Longer | First payment date | Existing subscription’s next payment date |
| Gap Payment | None |

### Downgrades

[↑ Back to top](#doc-title)

Subscription downgrades may extend the **first payment date** to credit subscribers for unrealized value from their current subscription period.

This table shows when and why the new subscription’s billing period might necessitate changes to the first payment date:

| New Billing Period | Pricing Mechanism | Prorated Value |
| --- | --- | --- |
| Shorter | First payment date | Based on number of days the customer has pre-paid (i.e. amount of days at the new subscription’s price per day, which the customer receives for the amount paid at the last billing period). |
| Gap Payment | None |
| Same | First payment date | Based on number of days the customer has pre-paid (i.e. amount of days at the new subscription’s price per day, which the customer receives for the amount paid at the last billing period). |
| Gap Payment | None |
| Longer | First payment date | Based on number of days the customer has pre-paid (i.e. amount of days at the new subscription’s price per day, which the customer receives for the amount paid at the last billing period). |
| Gap Payment | None |

**Subscription downgrade example:**

A customer subscribes to a **$10 per month** subscription via your site on **2nd September**. **Twelve (12) days** later, they want to *downgrade* the subscription to bill less frequently.

They  choose to switch to a yearly subscription for **$10 per year**. Notice that although the recurring amount for the new subscription is the same as that of his current subscription, the price per day is cheaper – $0.03 per day for the new subscription vs. $0.33 per day for the current subscription.

The customer switches 12 days into the subscription, completing ⅖ of the billing period. This leaves ⅗ remaining, entitling them to ⅗ of the new billing period. Consequently, the **first payment date** extends to April, about 7 months ahead (⅗ of a year).

After completing [steps 1 and 2 of the switch process](https://woocommerce.com/document/subscriptions/customers-view/subscribers-view-switch/), the checkout page displays order totals to the customer, as shown in the image below:

![](https://woocommerce.com/wp-content/uploads/2013/09/Screen-Shot-2021-07-13-at-14.49.30.jpg?w=715)

Notice that the order total includes the date on which the first payment is charged.

**Downgrade example for a subscription with multiple products:**

A customer subscribes to **four (4) $10 per month** subscriptions and **one (1) $50 per month** subscription via your site on **1st July**. Because these products have the same billing period and were purchased together, they’re grouped in a single subscription. **On the same day of purchase**, they want to *switch* their four (4) $10 per month items to just **two (2) $10 per month** of the same product.

Although the customer is only switching the quantity, the new price per day is cheaper – $0.67 per day for the new subscription vs. $1.34 per day for the current subscription.

Because this customer switched at the start of their subscription and already paid for four (4) $10 per month products, they’re entitled to the full $40 amount at the new price per day. Consequently, the **new Next payment date** is calculated to **1st September** (from 1st August).

Because this customer is switching an item on a subscription with other products, we need to **create a new subscription** with these switched items and the **new Next payment date**. After making this switch, the customer will have two active subscriptions:

1. $50 per month with a next renewal date of 1st August
2. $20 per month with a next renewal date of 1st September

### Upgrades

[↑ Back to top](#doc-title)

Upgrades may require a **gap payment** to account for the remaining number of days on the customer’s existing subscription at the higher price per day of the new subscription. This payment processes when switching the subscription and functions as a signup fee.

Upgrading to a subscription with a *shorter billing cycle* necessitates changing the **first payment date** for the new subscription (which happens automatically). For example, switching from a subscription charged monthly to a subscription charged weekly.

| New Billing Period | Pricing Mechanism | Prorated Value |
| --- | --- | --- |
| Shorter | First payment date | Based on number of days the customer has pre-paid (i.e. amount of days at the new subscription’s price per day, which the customer receives for the amount paid at the last billing period). Can be as early as the time of switch if customer has received more days then they have pre-paid at the new rate. |
| Gap Payment | None |
| Same | First payment date | Gap payment charged immediately, then first renewal date is the old subscription’s next payment date |
| Gap Payment | Days until next payment * ( New Price Per Day – Old Price Per Day ) |
| Longer | First payment date | Gap payment charged immediately, then first renewal date is the old subscription’s next payment date |
| Gap Payment | Days until next payment * ( New Price Per Day – Old Price Per Day ) |

**Changing the first payment date**:

It is important to change the **first payment date** date when upgrading to a subscription with a *shorter* billing period for two reasons. It:

- moves the subscriber to the shorter billing period as soon as possible; and
- prevents charging unnecessary, and potentially unreasonable gap payments.

For example, consider a customer switching from a **$200 per year** subscription to a **$35 per month** subscription with **7 months** remaining. Without changing the date, this would require a $245 gap payment, and the new subscription wouldn’t renew for 7 months. Changing the **first payment date** eliminates the **gap payment** and allows the subscription to renew monthly, starting one month after the switch date.

As a note,  Subscriptions handles this change and not something the Store Owner needs to do.

**Subscription upgrade example:**

A customer subscribes to a **$10 per month** subscription with your site on **2nd September**. **Twelve (12) days** later, she wants to upgrade the subscription.

They first consider switching to a weekly subscription that costs **$7 per week**. Notice that although the recurring amount for the new subscription is lower than that of the current subscription, the price per day is more expensive – $1 per day for the new subscription vs. $0.33 per day for the current subscription.

The new subscription’s shorter billing period (one week vs. one month) eliminates the need for a **gap payment**, but requires changing the **first payment date**.

The customer’s **12-day** use of the old subscription equates to **$12** worth of value at the new subscription’s daily rate. This exhausts the **$10** initial payment for the original subscription, triggering an immediate first payment at checkout. The system then schedules the next renewal payment for 1 week later.

After completing [steps 1 and 2 of the switch process](https://woocommerce.com/document/subscriptions/customers-view/subscribers-view-switch/), the image below displays the order totals for the customer at checkout:

![](https://woocommerce.com/wp-content/uploads/2013/09/Screen-Shot-2021-07-13-at-15.36.44.jpg?w=714)

Before completing the switch, the customer decides she doesn’t actually want to pay weekly, so returns to the product’s page and chooses instead to upgrade to a **$15 per month** subscription.

The new subscription’s matching billing period eliminates the need to change the **first payment date**, but requires a **gap payment**.

**18 days** separate September 14th, when the customer considers switching, and October 2nd, when the first recurring payment occurs. As a result, the **gap payment** is the difference between the price per day of the current subscription and the new subscription multiplied by 18. The new subscription’s price per day is $0.50 and the current subscription’s price per day is $0.33, or more precisely $0.333333333333. Therefore, the **gap payment** is $3.00 (after being rounded to two decimal places).

```
$3.00 = ( $0.50 - $0.33 ) * 18
```

When the customer arrives at checkout, they are presented with totals similar to the image below.

![](https://woocommerce.com/wp-content/uploads/2013/09/gap-payment-1.jpg?w=710)Subscription Upgrade Order Totals, with Gap Payment, on Checkout

### How can I change the upgrade, downgrade or cross-grade text displayed to the customer during a switch?

[↑ Back to top](#doc-title)

When [switching a subscription](https://woocommerce.com/document/subscriptions/customers-view/subscribers-view-switch/), the cart displays an explanation of the switch type next to the item subtotal. For example, switching to a subscription with a higher price per day shows **(Upgrade)** next to the cart item’s subtotal.

To change this text, either to remove it completely or make it display something else, you can use the free[Say What](https://wordpress.org/plugins/say-what/) plugin.

![](https://woocommerce.com/wp-content/uploads/2024/07/image_5b4f80.png?w=980)Subscription Switch Classification in Cart Subtotal

## Questions and support

[↑ Back to top](#doc-title)

**Something missing from this documentation? Still have questions and need assistance?**

- If you have a question about a specific extension or theme you’d like to purchase, [contact us](https://woocommerce.com/contact-us/#sales-form) to get answers.
- If you already purchased this product and need some assistance, get in touch with a Happiness Engineer via our [support page](https://woocommerce.com/my-account/create-a-ticket/) and select this product’s name from the Product dropdown.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.
				![](https://woocommerce.com/wp-content/uploads/2012/05/Shipment_Tracking_icon-marketplace-160x160-2.png)

### Shipment Tracking

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Add shipment tracking information to your orders.

---

## Subscriptions Switching Use Case: Changing Quantities

**Source:** [https://woocommerce.com/document/subscriptions/switching-guide/switching-use-case-change-quantities/](https://woocommerce.com/document/subscriptions/switching-guide/switching-use-case-change-quantities/)

# Subscriptions Switching Use Case: Changing Quantities

			## Changing Quantities

[↑ Back to top](#doc-title)

In addition to switching between different products or variations, it is also possible to switch between different quantities of the same product or variation. This is useful to allow customers to change the quantity of items on their subscription.

For example, a customer subscribed to 2 bags of coffee per month might need more to last the month. They can use the switching process to upgrade their subscription to 3 bags of the same coffee for the next renewal and all future renewals. If they later find 3 bags excessive, they can downgrade to just 1 bag of coffee.

[Switching costs](https://woocommerce.com/document/subscriptions/switching-guide/switching-process-and-costs/#switching-costs) follow the same calculation method as switching between different products. For example, with enabled proration of recurring amounts, increasing the subscription quantity at the time of switch may incur a gap payment. This approach benefits *virtual* products most, where customers receive value daily, rather than physical items providing value at the next renewal.

### Quantity Upgrade Example

[↑ Back to top](#doc-title)

On 15th May, a team leader orders a **$50 per month** product to access electronic course content. They order a quantity of 5 to provide part of their team with access, paying $250 up-front and subscribing at $250 / month thereafter.

After the first 10 days, the team leader decides to upgrade the subscription to enroll another 5 members of his team, for a total quantity of 10. He completes this upgrade on the 25th May, 10 days after the initial sign-up.

Despite the subscription being for the same product, because of the different quantity, the price per day will be different. Specifically, for the $50 / month product, the price per day for the subscription with a quantity of 5 is $8.21. The price per day for a quantity of 10 is $16.42.

With proration enabled in the store, Subscriptions charges the team leader a *gap payment* at the time of the switch. This gap payment is determined using the formula explained in the [Switching Costs & Process document](https://woocommerce.com/document/subscriptions/switching-guide/switching-process-and-costs/#upgrades): 
```
Days until next payment x ( New Price Per Day – Old Price Per Day )
```

.

The switch occurs 10 days after sign-up, leaving just over 20 days in the monthly billing cycle. This results in a formula evaluation of 20.63 x ( 16.42 – 8.21 ).

Using this formula, the total **gap payment will be $169.40**.

After completing [steps 1 and 2 of the switch process](https://woocommerce.com/document/subscriptions/customers-view/subscribers-view-switch/), the image below displays the order totals for the team leader at checkout, including the gap payment.

![](https://woocommerce.com/wp-content/uploads/2013/09/subscription-quantity-upgrade-order-totals.png?strip=all&w=704)Subscription Quantity Upgrade Order Totals on Checkout

## Questions and support

[↑ Back to top](#doc-title)

**Something missing from this documentation? Still have questions and need assistance?**

- If you have a question about a specific extension or theme you’d like to purchase, [contact us](https://woocommerce.com/contact-us/#sales-form) to get answers.
- If you already purchased this product and need some assistance, get in touch with a Happiness Engineer via our [support page](https://woocommerce.com/my-account/create-a-ticket/) and select this product’s name from the Product dropdown.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to...
				![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.

---

## Tracking Switches

**Source:** [https://woocommerce.com/document/subscriptions/switching-guide/tracking-switches/](https://woocommerce.com/document/subscriptions/switching-guide/tracking-switches/)

# Tracking Switches

			When a customer switches a product on a subscription, the way that changes on the subscription depend on a number of factors. This section explains how WooCommerce Subscriptions implements switching under different conditions. It then explains how to keep track of switches by using orders generated at the time of the switch.

### Updating Product Line Items

[↑ Back to top](#doc-title)

After a customer has completed a switch [via the checkout](https://woocommerce.com/document/subscriptions/customers-view/subscribers-view-switch/), Subscriptions will reflect the switch by:

- The removal of the original product line item from the existing subscription, as the customer no longer subscribes to that product

and then:

- Adding the product as a new line item on the existing subscription if the new product is
- on the same billing schedule as the old product (e.g. both products renew every month); or
- on a different billing schedule, but the old product is the only line item on the subscription, and therefore, the subscription’s billing schedule can be changed to reflect the billing schedule of the new product without affecting any other items.

Subscriptions creates a new subscription and adds the product as a line item if neither of those two criteria apply.

This logic, although complicated to follow, helps reduce the number of new subscriptions in your store and makes it easier to manage and track the full lifecycle of a subscription, regardless of specific product items associated with that subscription. Tracking switches requires additional steps because it sometimes involves creating a new subscription and other times updating an existing one.

### Subscription Notes

[↑ Back to top](#doc-title)

Viewing the original product and the new product in the subscription notes after a customer upgrades or downgrades a subscription provides helpful insight.

When the customer completes a switch, Subscriptions logs a note on the subscription. This note includes the old product’s name and the new product’s name, plus attributes for both products so you can keep track of switching between different variations.

The screenshot below displays **Subscription Notes** on the **Edit Subscription** screen, showing a subscription switched from a product with a Length attribute of *Six* to *Twelve*, and then back to *Six*:

![](https://woocommerce.com/wp-content/uploads/2013/09/Screen-Shot-2021-07-13-at-16.19.48.png?strip=all&w=704)

### Switch Orders

[↑ Back to top](#doc-title)

To complete a switch, the customer uses the normal [cart and checkout process](https://woocommerce.com/document/subscriptions/customers-view/subscribers-view-switch/). This results in an order that records switch details, regardless of proration status or switch cost.

These orders provide a way to keep track of switch details not recorded in *Subscription Notes*, such as switching costs and payment methods.

The screenshot below highlights the **Related Orders** meta box on the **Edit Subscription** screen. The related orders box shown below contains two **Switch Orders** that record the customer’s switches.  Clicking the **Order Number** for either order will open the **Edit Order** screen and display full details of the switch.

![](https://woocommerce.com/wp-content/uploads/2013/09/Screen-Shot-2021-07-13-at-16.28.25.png?strip=all&w=704)Switch Orders in a Subscription’s Related Orders Metabox showing

## Questions and support

[↑ Back to top](#doc-title)

**Something missing from this documentation? Still have questions and need assistance?**

- If you have a question about a specific extension or theme you’d like to purchase, [contact us](https://woocommerce.com/contact-us/#sales-form) to get answers.
- If you already purchased this product and need some assistance, get in touch with a Happiness Engineer via our [support page](https://woocommerce.com/my-account/create-a-ticket/) and select this product’s name from the Product dropdown.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to...
				![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.

---

