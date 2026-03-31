# Subscriptions Coupons

*Category from WooCommerce Subscriptions documentation*

---

## Subscriptions Coupons

**Source:** [https://woocommerce.com/document/subscriptions/subscriptions-coupons/](https://woocommerce.com/document/subscriptions/subscriptions-coupons/)

# Subscriptions Coupons

			WooCommerce Subscriptions adds two new coupon discount types to **Marketing > Coupons**; the **recurring** **product discount**and the **sign-up fee** **discount**. These discount types apply specifically to subscriptions and cannot be applied to non-subscription products. Subscription coupons differ from the default **cart** and **product**coupons in WooCommerce core.

The default**cart** and **product** coupons can apply to both subscriptions and non-subscription products. However, these coupons apply only to the first payment of a subscription. In contrast, **recurring product discounts** apply to renewal payments, and **sign-up fee discounts** apply to sign-up fees. Additionally, cart and product discounts do not provide control over their application; they apply to the sign-up fee if present, or to the total of the first payment if no sign-up fee exists.

The rest of this Subscriptions coupon guide explains how to create **recurring product discount**s and a **sign-up fee** **discounts** used with WooCommerce Subscriptions.

A subscription product with a *free trial* period and *no sign-up fee*, or [synchronized renewals](https://woocommerce.com/document/subscriptions/renewal-synchronisation/) and*no sign-up fee*, has no initial payment, so **cart** and **product** coupons do not apply a discount.

## Recurring Product Discount Coupon

[↑ Back to top](#doc-title)

**Recurring Product Discount** or **Recurring Product % Discount**coupons lower the recurring payment amount for a subscription product by a fixed amount or a percentage (%).

For example, creating a $10 recurring product coupon discounts each recurring payment by $10. So, if the subscription renews monthly for $20 and the customer applies a recurring product discount coupon for $10, their monthly pay is $10/month for the life of that subscription.

**Recurring product discount**coupons****will also apply to the first payment of a subscription if they meet the following criteria:

- The subscription product does not have a free trial set.
- The subscription does not have a [synchronized](https://woocommerce.com/document/subscriptions/renewal-synchronisation/) first payment on a date in the future.

Here’s an example how the discount would apply to the subscription product:

> If a subscription product has a $50 sign-up fee and costs $25 per month, applying a Recurring product discount coupon for $10 results in the customer paying the full $50 sign-up fee upfront (since the sign-up fee is not a recurring payment), plus $15 for the first month’s recurring amount. This totals $65 upfront. Subsequent monthly payments for the subscription reduce to $15/month each.

![A basic example of a (fixed) recurring product coupon.](https://woocommerce.com/wp-content/uploads/2024/07/recurring-product-discount.webp?strip=all&w=704)A basic example of a (fixed) recurring product coupon.

**Recurring Product Discount**coupons with a*Minimum Spend*will not work with synced products that have an initial $0 total during checkout. Since the initial amount paid is $0, the minimum spend coupon requirements are not met for the transaction.

**Putting limits on recurring product discounts**

WooCommerce Subscriptions can also **limit a Recurring Discount coupon to a specific number of payments**.

When creating a recurring coupon, a field labeled “*Active for x payments*” will be provided on the *General* tab. The default will be blank, meaning that **the coupon will be active for the duration of the subscription**. Entering a number into that field limits the amount of recurring payments that can use the coupon, including the first payment. The coupon is automatically removed when it reaches the number/limit.

Configuring Limited Coupons is straightforward, yet they can serve various advanced use cases. For more information on how to set up and use **Limited Coupons**, see the [Limited Subscription Payment Coupon guide](https://woocommerce.com/document/subscriptions/limited-payment-coupon-guide/).

**Offer free shipping with recurring product discounts**

To offer a free shipping coupon that will work with a subscription product, you can create a [Recurring Discount coupon](https://woocommerce.com/document/subscriptions/store-manager-guide/#section-8) and enable *free shipping* on it. This is similar to how you would offer free shipping with a standard [non-recurring discount coupon](https://woocommerce.com/document/free-shipping/#section-2). This makes shipping free on **all** recurring payments.

## Sign-up Fee Discounts

[↑ Back to top](#doc-title)

A **Sign-Up Fee Discount** or **Sign-Up Fee % Discount**coupon reduces a fixed amount or a percentage from the subscription product’s sign-up fee. For example, if a subscription product normally requires a $50 sign-up fee and costs $25 per month, applying a **Sign-Up Fee Discount** coupon for $50 allows the customer to subscribe without paying the $50 sign-up fee. They would only need to pay $25 per month for the subscription.

![](https://woocommerce.com/wp-content/uploads/2024/07/sign-up-fee-discount.png?w=980)A basic example of a (fixed) sign-up fee coupon.

**Extending coupon features with AutomateWoo:** Need a way to automatically add a coupon after a customer makes x number of successful recurring payments? AutomateWoo can help with the add or remove coupon action. [Read more about it here](https://woocommerce.com/document/automatewoo/actions/subscription-add-remove-coupon/).

## Initial Discount (Pseudo Coupon)

[↑ Back to top](#doc-title)

When a subscription is initially created on the admin side (from **WooCommerce > Subscriptions > Add Subscription**) and the corresponding order [has a discount manually applied on the subscription product](https://woocommerce.com/document/managing-orders/view-edit-or-add-an-order/#editing-or-adding-order-items) by editing the price rather than using a coupon, the order will have a 
```
discount_initial
```

 coupon applied for the same amount of the manually-discounted price after payment is made.

![`discount_initial` coupon applied to an order from the admin side.](https://woocommerce.com/wp-content/uploads/2024/07/Screenshot-2024-09-05-at-10.57.24.png?strip=all&w=704)

					
		
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

## Limited Subscription Payment Coupons

**Source:** [https://woocommerce.com/document/subscriptions/subscriptions-coupons/limited-payment-coupon-guide/](https://woocommerce.com/document/subscriptions/subscriptions-coupons/limited-payment-coupon-guide/)

# Limited Subscription Payment Coupons

			**WooCommerce Subscriptions** includes an additional coupon discount called “**Recurring Product Discount**” which enhances the [core WooCommerce coupon management functionality](https://woocommerce.com/document/coupon-management/) specifically for subscriptions. This discount also allows store managers to create coupons that apply to a certain number of subscription payments, which we call “Limited Subscription Payment” coupons.

Limited coupons are coupons that will apply a discount for a limited number of payments. For example, if a store manager wants only the first three months of a monthly subscription to be discounted, they could use this feature to create a coupon that applies to three payments.

This guide will outline the features of limited coupons, explain how to setup limited coupons,  and provide some special use cases.

The term “payments” in this document can also include the initial payment for a subscription in addition to renewal payments.

## Store Manager’s View

[↑ Back to top](#doc-title)

### Setting Up a Limited Payment Coupon

[↑ Back to top](#doc-title)

Store Managers can add limited payment discounts by following these instructions:

1. **Navigate** to **Marketing > Coupons**
2. **Choose**either “Recurring Product Discount” or “Recurring Product % Discount” as the **discount type.**
3. **Enter** the number of recurring payments the coupon should be limited to in the “**Active for x payments**” box.

![](https://woocommerce.com/wp-content/uploads/2018/10/coupon.png?strip=all&w=704)

*Edit Coupon Screen – Limited Coupon Specific Field*

If you want the coupon to be unlimited (for the entire duration of the subscription), leave the field blank. Otherwise, enter the number of payments to which it should apply in this field. Remember, the number you enter here indicates how many times it should be applied within this formula: 
```
initial payment + # of renewal payments = active for x payments
```

. For example, to create a coupon that applies to the initial payment (at checkout) and 2 renewal payments,  enter “3” into the “Active for x payments” field:

![](https://woocommerce.com/wp-content/uploads/2018/10/3paydiscount.png?strip=all&w=704)
*Edit Coupon Screen – Coupon Limited to Three Payments*

This coupon, when used on a subscription product, will then apply to the **initial payment**  + **two**following renewals for a total of **three**payment discounts.

#### What counts as a payment on a limited payment coupon?

WooCommerce records how many times it applies a limited coupon to a payment. A payment qualifies for this count if:

- The order ispaid
- The orderisn’t fully refunded
- The coupon has applied a discount to the order

#### What happens if I change the limit on an existing coupon?

If the limit of an existing coupon changes, subscriptions using that coupon won’t reflect the change until after the next renewal. This means the coupon will apply once more, even if subscriptions have already exceeded the new limit. The coupon’s limit check occurs after processing the renewal, which causes this delay.

**The coupon’s removal happens in these steps:**

1. A renewal processes with the coupon applied.
2. The system checks how many times the coupon has been used.
3. If the coupon has reached its new limit, it gets removed.

If a store manager lowers the coupon limit to match or be less than the current number of payments made on a subscription, it won’t immediately remove the coupon. Instead, it will apply to one more renewal.

For example, imagine a subscription using a coupon for five payments that has already renewed three times (using the coupon four times total). If the store manager edits the coupon to apply to only four payments, it applies once more on the next renewal before removal.

### Subscription Administration Screen

[↑ Back to top](#doc-title)

When a limited coupon applies to a subscription, it appears on the WooCommerce > Edit Subscription and WooCommerce > Edit Order administration screens like other coupons.

![](https://woocommerce.com/wp-content/uploads/2018/10/3paydiscount2.png?strip=all&w=704)

*Subscription Screen – Limited Coupon*

### Coupons List

[↑ Back to top](#doc-title)

On the coupons list table, there is a note that indicates that the coupon is a limited coupon. In the “Usage/Limit” column, a limited coupon will have a note that says “Active for x payments.”

![](https://woocommerce.com/wp-content/uploads/2018/10/3paydiscount1.png?strip=all&w=704)

*Coupons List – Limited Coupon Note*

### Automatic Coupon Removal

[↑ Back to top](#doc-title)

Once a limited coupon meets the payment limit, it’s automatically removed from the subscription. On the “Edit Subscription” screen there are three indicators of the removal:

- A subscription note that records the date and time of the coupon removal.
- The coupon no longer appears in the subscription details.
- The subscription total no longer includes the discount.

![](https://woocommerce.com/wp-content/uploads/2018/10/5_limited_coupon_note_redux.png?strip=all&w=704)Subscription note indicating the coupon was removed.

### Manual Coupon Removal

[↑ Back to top](#doc-title)

There may be times when the shop manager needs to remove an active coupon from a **subscription**. Manually remove a limited coupon from a subscription by following these steps:

1. Go to**WooCommerce > Subscriptions**and click on the subscription
2. Click the “x” next to the coupon name in the items meta box

![](https://woocommerce.com/wp-content/uploads/2024/07/removecoupon.png?strip=all&w=704)

**Manually Remove a limited payments coupon from a renewal order**

You can also remove a limited coupon from a renewal order if necessary.  Keep in mind that removing a coupon from a renewal order **does not** remove it from the subscription. That means, that if the coupon still has active payments left the discount applies to the next renewal.Let’s look at an example:

A customer uses a coupon limited to three payments and completes payment for the initial order and one renewal order. The next renewal order is **pending**, and the store manager removes the coupon from this order. When the customer pays for that renewal, they won’t receive a discount because the store manager removed the coupon from the order. However, the coupon remains attached to the subscription and has only been used for twoof threepayments so far. If the store manager takes no further action, the coupon will automatically apply a discount on the subsequent renewal payment, marking its third and final use.

Follow these steps to remove a limited payments coupon from a single order:

1. Go to**WooCommerce > Order**and click on the order
2. Click the “x” next to the coupon name in the items meta box

**Note:** the renewal order must be **unpaid** to remove coupons.

### Re-Adding a Limited Coupon to a Subscription

[↑ Back to top](#doc-title)

When a store manager re-adds a previously used limited coupon to a subscription, it activates for one more use before automatically removing it. For example, if a coupon with a limit of three payments applies to a subscription and is removed after those three payments, re-adding the same coupon allows it to apply to one additional payment before its second removal. This occurs because the payment count check happens in a specific order [as explained earlier](https://woocommerce.com/document/limited-payment-coupon-guide/#change-the-limit-on-an-existing-coupon).

## Subscriber’s View

[↑ Back to top](#doc-title)

### Cart

[↑ Back to top](#doc-title)

Limited payment coupons appear in a customer’s cart just like any other recurring product discount, where the cart will show the discount taken from the initial payment (*due today*) and the recurring payment discount:

![](https://woocommerce.com/wp-content/uploads/2024/07/Limited-Coupon-Cart-Block.png?w=980)Limited Payments Coupon shown to customer in cart (using [cart block](https://woocommerce.com/document/woocommerce-store-editing/customizing-cart-and-checkout/cart-block/#doc-title))

The main exception to this is when a limited payment coupon has a limit of one (**1**) payment set in the “active for x payments” field.  In this case, the customer sees the discount applied to the initial payment (*due today*) but does not see the discount in the recurring payments section of the cart.

## Use Cases for Limited Coupons

[↑ Back to top](#doc-title)

### Discount First Renewal Only

[↑ Back to top](#doc-title)

There are cases when the initial sign-up price for a subscription is different from the recurring price, such as with [synchronized subscriptions](https://woocommerce.com/document/subscriptions/renewal-synchronisation/) or sign-up fees and free trials. By using a limited coupon active for one payment, a discount will apply to the first renewal of a subscription instead of the initial sign-up. Let’s take a look at how this works for Synchronized Subscriptions and subscriptions with free trials and a sign-up fee:

#### Synchronized Subscriptions

When a synchronized subscription has sign-up prorating set to *“never*” charge on signup, a synchronized subscription charges $0 for the initial payment (unless the purchase is on the sync date). This prevents non-recurring cart or product coupons from applying to the initial payment.  If you want to offer a discount on the first payment of the subscription, you can use a limited payments coupon set to **“active for 1 payment”** .  This applies the coupon to the first renewal payment or the first recurring total amount and then removes it for subsequent renewals.  This is what it looks like:

![](https://woocommerce.com/wp-content/uploads/2024/07/firstpaymentdiscount.png?w=980)Limited coupon applied to first payment on synchronized subscription

#### Free Trial with Sign-Up Fee

A similar scenario occurs when there is a product with a free trial and a sign-up fee. The first full recurring price payment will not be until the end of the trial. A non-recurring coupon discounts only the sign-up fee, while a limited coupon active for one payment discounts the first renewal of the subscription—the first payment after the trial. This is how it looks in the customer’s cart:

![](https://woocommerce.com/wp-content/uploads/2024/07/firstpaymentwithSUF.png?w=980)Limited Payment Coupon applied to first payment on a subscription with a free trial and sign-up fee.

### Three-Tier Pricing

[↑ Back to top](#doc-title)

Three-tier pricing is a system where a customer pays three different prices for their subscription. For example, the first payment would be $9.99, the second $19.99, and all payments after that $29.99. Limited coupons allow a store manager to create this system. In order to create three-tier pricing, a store manager can use a subscription product with a sign-up fee and a free trial along with a limited coupon.

Here’s how we set up the three-tiered pricing system in this example:

1. Create a subscription product with:

- Price of $29.99 per month
- 1-month free trial
- Sign-up fee of $9.99

1. Create a recurring product coupon with:

- $10 discount
- active for 1 payment

At checkout, the customer pays the $9.99 sign-up fee, but nothing else. After one month,  first renewal payment with the limited coupon applied for $10.00 processes; the customer’s total is $19.99. The limited coupon meets its 1 active payment limit and is automatically removed from the subscription. The following month, the customer pays the full price of $29.99.

## Special Considerations

[↑ Back to top](#doc-title)

### Payment Gateway Support

[↑ Back to top](#doc-title)

Note that when applying a limited coupon, only [payment gateways](https://woocommerce.com/document/subscriptions/payment-gateways/#section-3) that support recurring amount modifications will display at checkout. Most notably, this means that PayPal Standard (sunset) will*not*be available when using a limited coupon.

### Free Shipping Coupons

[↑ Back to top](#doc-title)

When a customer uses a coupon which grants free shipping, the discount applies to the initial cart and each recurring shipment. For a limited coupon, the discount applied will be removed after x payments, but the *free shipping will remain*. For example, if a 10% recurring discount coupon is active for five payments with free shipping, the discount will be removed after five payments, but subsequent renewals will still have free shipping.

### Refunded Orders

[↑ Back to top](#doc-title)

If an order is refunded by the store manager, then any limited use coupons applied to that order will no longer count against the limit. For example, suppose a customer has used a coupon limited to three payments and has payed for the initial order and one renewal order. This would mean that the coupon can be applied to*one*more payment. However, suppose the store manager then decides to refund the customer’s payment for the renewal order. The coupon can then be applied to*two*more payments rather than only one payment. This is because with the refund, one of the applications of the coupon to a payment has essentially been undone and so it regains an application.

					
		
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

