# Renewal Process

*Category from WooCommerce Subscriptions documentation*

---

## Subscription Renewal Process

**Source:** [https://woocommerce.com/document/subscriptions/renewal-process/](https://woocommerce.com/document/subscriptions/renewal-process/)

# Subscription Renewal Process

			This page provides details about how WooCommerce Subscriptions handles recurring payments through the subscription renewal process.

## Recurring Payments & the Renewal Process

[↑ Back to top](#doc-title)

A key feature of a subscription is a recurring payment—a payment due at a regular interval over time (ex. monthly). These payments are the foundational block of a larger *renewal* process in WooCommerce Subscriptions.

Subscriptions perform several tasks as part of renewal, including generating an order to record payment, emailing both you and the customer via email of the renewal, and sometimes, processing the payment. The renewal method determines the order of these tasks and what triggers them and how Subscriptions performs them.

**Subscriptions offers two methods for handling renewals:**

- **Automatic renewal** – recurring payments process without customer intervention.
- **Manual renewal** – recurring payments require that your customers log into the store and make the payment for each payment interval.

## Manual vs. Automatic Renewals

[↑ Back to top](#doc-title)

When you activate both manual and automatic renewals in your store, it’s helpful to understand how WooCommerce processes each type of renewal and how customers experience them differently. The table below is a quick reference guide to the differences:

|  | Manual Renewals | Automatic Renewals |
| --- | --- | --- |
| Customer Involvement | Customer must log into your store and pay to renew the subscription. | No action is required by the customer to renew the subscription. |
| Coupons | Customers can use product and cart coupons to reduce the price of renewal because the customer completes the renewal via the normal checkout process. | Only recurring coupons applied at the start of the subscription will discount renewal payments since renewal payments are processed automatically. |
| Taxes | Tax charged for each renewal payment is calculated at the time the payment is processed because the customer completes the renewal via the normal checkout process. Taxes on a pending renewal order reflect the tax line items on the subscription before checkout. | Taxes calculated at the time of sign-up are applied for all renewal payments. If you need to change recurring taxes, you need to manually change recurring tax line items for the subscription. |
| Payment Method | All payment gateway extensions can be used to process manual renewal payments. The customer can choose a different payment method for each renewal payment. | Some payment gateways support automatic renewals (see Subscription Payment Gateway Guide for more details). The same payment method is used for all renewal payments (unless payment fails). |
| Shipping Method | Customer can pick a different shipping method for each renewal payment. | The same shipping method is used for all renewal payments (unless payment fails). |
| Changing Address | The customer can enter a different billing and/or shipping address for each renewal. | The same billing and shipping address (from the parent order) is used for each renewal. Customers can update an address for future renewal orders. |
| Email Notifications | If enabled, the Customer Renewal Invoice is emailed to the customer to prompt them to log in and pay to renew the subscription. After payment is complete, the customer receives the Processing/Completed Renewal Order email, and the store manager receives the  New Renewal Order notification. | If enabled, the Processing or Completed Renewal Order email is sent to the customer as a record of automatic payment. Store Manager receives New Renewal Order notification immediately. |

## Automatic Recurring Payments

[↑ Back to top](#doc-title)

With automatic payments, Subscriptions charges recurring payments without needing customer or store manager involvement. WooCommerce Subscriptions handles the payment through the payment gateway used for the initial purchase, making it the most convenient option for you and your customers.

For a payment gateway extension to provide automatic payments, the extension developer must [integrate their extension with Subscriptions](https://woocommerce.com/document/payment-gateway-integration-guide/). You can find a current list of payment gateways that support automatic payments at [Subscription Payment Gateways](https://woocommerce.com/document/payment-gateways/). The [Payment Gateways section](https://woocommerce.com/document/subscriptions/store-manager-guide/#payment-gateway-settings)of Subscriptions’ Settings on your site also lists payment gateways that support automatic recurring payments.

Automatic payments are **on** by default. To turn off automatic payments, enable****[Allow manual renewals at checkout](https://woocommerce.com/document/subscriptions/store-manager-guide/#allow-manual-renewals-at-checkout)**,** then tick the **Turn off automatic payments** checkbox that appears in the Subscriptions settings.

## Manual Recurring Payments

[↑ Back to top](#doc-title)

With manual payments, a subscription has a status of  [on-hold](https://woocommerce.com/document/subscriptions/statuses/#on-hold-subscription-status) until the customer logs into your store and pays to renew it.

For example, if a subscription costs $100/year, 1 year after the customer first signed up, Subscriptions puts the subscription on hold and generates a new order for the $100 renewal (and emails it to the customer if your store has enabled the *Customer Renewal Invoice* email). Once the customer logs into your store and pays $100, Subscriptions reactivates the subscription for another year.

The manual renewal payment process uses the standard WooCommerce checkout flow. A customer pays for renewal in much the same way a customer would purchase a product or new subscription. A walkthrough of the manual renewal payment process is available in [Subscriber’s View](https://woocommerce.com/document/subscriptions/customers-view/pay-for-renewal/#manual-payment-for-a-subscription-renewal).

When a subscription accepts manual renewal payments, the customer can choose a *different* payment method for *each* renewal payment. Any payment method active on your store is available for use as an option. We don’t recommend manual renewal payments for subscriptions that renew frequently (more than once per year) because they require customers to take action to continue their subscriptions; this could result in fewer customers renewing since it requires an additional step.

Manual renewal payments are off by default. To accept manual payments, you must [allow manual renewals at checkout.](https://woocommerce.com/document/subscriptions/store-manager-guide/#allow-manual-renewals-at-checkout)

You can also decide whether to send the customer an email to remind them to log into the store and make the renewal payment by enabling or disabling the **Customer Renewal Invoice** email.

More info on the impact of manual payments on payment gateways at [Subscription Payment Gateways](https://woocommerce.com/document/payment-gateways/).

The *early renewal* process is very similar to the manual renewal process. The [Early Renewal Guide](https://woocommerce.com/document/subscriptions/early-renewal/) explains this in more detail.

### Time Limit on Manual Payments

[↑ Back to top](#doc-title)

WooCommerce includes a [Hold stock setting](https://woocommerce.com/document/configuring-woocommerce-settings/products/#inventory). This allows you to set a time limit for how long a customer has to make a manual payment for an order, after which Subscriptions cancels any unpaid, pending **parent** order. **This does not apply to pending renewal orders, which remain pending indefinitely.**

To provide subscribers with a more generous payment period, Subscriptions sets the default time limit to 10080 minutes (one week). You can leave the value blank to disable it completely.

![](https://woocommerce.com/wp-content/uploads/2013/07/hold-stock.png?strip=all&w=704)Hold Stock

## The Renewal Process

[↑ Back to top](#doc-title)

The recurring payment process is complex. The flowchart below maps out the most important actions performed to handle a subscription renewal. Follow each flow and see which steps WooCommerce Subscriptions performs for both the automatic and manual renewal methods.

![](https://woocommerce.com/wp-content/uploads/2013/07/Renewal-Process-Flowchart-Scheduled-Renewal.png?strip=all&w=704)*Subscription Renewal Process Flow Chart*

### Early Renewal

[↑ Back to top](#doc-title)

The **early renewal** process is a sort of hybrid of manual and automatic renewal processes. While Subscriptions offers early renewal on both automatic and manual renewal subscriptions, once the process begins, the customer either needs to go [through the checkout process or pay via an early renewal modal](https://woocommerce.com/document/subscriptions/store-manager-guide/#allow-early-renewal-payments). Doing this, however, does not change an automatic renewal to manual or vice versa. You can read more about the specifics in the [Early Renewal Guide](https://woocommerce.com/document/subscriptions/early-renewal/).

### How Subscriptions calculates the next payment date

[↑ Back to top](#doc-title)

In general, Subscriptions calculates the next renewal date based on the last payment date, not the scheduled date. For example, if a customer pays a late renewal on March 3rd, Subscriptions sets the next renewal for April 3rd. This is to ensure the subscriber receives access to the subscription for the full period of each renewal.

However, for [subscription products with aligned billing dates](https://woocommerce.com/document/subscriptions/billing-date-alignment), Subscriptions **maintains** the scheduled date regardless of late payments. If a subscription **aligned** to the 1st of each month has a late payment on March 3rd, Subscriptions still sets the next renewal for April 1st. **This approach preserves aligned billing dates across all subscribers.**

To **always** calculate the next payment date from the last scheduled payment date (regardless of whether the subscription uses billing date alignment or not), either install the free [WooCommerce Subscriptions – Preserve Billing Schedule](https://github.com/Prospress/woocommerce-subscriptions-preserve-billing-schedule) plugin or add the [following snippet](https://woocommerce.com/document/customizing-woocommerce-best-practices/#section-4):

```
<?php

/* 
 * By default, WooCommerce Subscriptions will calculate the next payment date for a subscription from the time of the last payment. 
 * This snippet changes it to calculate the next payment date from the scheduled payment date, not the time the payment was actually processed.
 */
 
add_filter( 'wcs_calculate_next_payment_from_last_payment', '__return_false' );
```

### Testing the renewal process

[↑ Back to top](#doc-title)

To test the renewal process, follow the steps outlined in [processing a renewal for an active subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/update-an-existing-subscription/#process-a-renewal). This triggers all normal automatic or manual renewal process steps.

To use this process, you need to purchase a test subscription with a gateway that requires either:

- manual renewal payments (e.g., check, bank transfer); or
- a payment gateway that supports [modifications to the renewal date](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features).

### Custom fields/meta data copied to renewal orders

[↑ Back to top](#doc-title)

WooCommerce Subscriptions copies all [custom fields](http://codex.wordpress.org/Custom_Fields) (i.e., metadata) set on an order during checkout to the subscription(s) created for that order during checkout. When the subscription renews, Subscriptions will then copy that data to the renewal order.

If you add any additional [custom fields to the subscription manually](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/), Subscriptions copies that data to all future renewal orders.

**For Developers:** Subscriptions offers a way to exclude specific metadata from copying to renewal orders. Developers can use the 
```
'wcs_renewal_order_meta_query'
```

 and 
```
'wcs_renewal_order_meta'
```

 filters to exclude certain metadata.

### Deactivating a payment gateway associated with a subscription

[↑ Back to top](#doc-title)

When you deactivate the payment gateway plugin/extension currently handling automatic recurring payments for subscriptions, the subscriptions using that payment method will switch to Manual Renewal. The following explains what happens regardless of whether you have enabled **Allow manual renewals at checkout** or not under the Subscription settings:

Once you deactivate the payment plugin/extension (under **Plugins** in WordPress Admin):

- The user will need to manually renew their subscription using a different payment method.  Additionally, the payment method will no longer be available as an option to the customer.

- The **Payment Method** in the subscription info (**WooCommerce > Subscriptions** > **Edit Subscription**) will read as **Manual Renewal**.

![](https://woocommerce.com/wp-content/uploads/2022/08/before-stripe-disabled.png?w=620)Before Stripe gateway disabled

![](https://woocommerce.com/wp-content/uploads/2022/08/stripe-after-disabled.png?w=650)After Stripe gateway disabled

- When the subscription’s scheduled renewal is due and a scheduled subscription payment is triggered ( 
```
woocommerce_scheduled_subscription_payment
```

 event in Action Scheduler), a renewal order is created with **Pending payment** status.

- The order note on the renewal order will read: **Manual renewal order awaiting customer payment**:

![](https://woocommerce.com/wp-content/uploads/2022/08/manual-renewal-after-disabled.png?strip=all&w=704)A renewal order switching to manual payment method

**Note:**

This only occurs when you deactivate the payment gateway plugin entirely. If you turn off a payment method from WooCommerce > Settings > Payments, Subscriptions continues to process automatic recurring payments for active subscriptions that use the payment gateway as normal. However, new subscribers or those that manually renew will not see that payment option at checkout.

### Reactivating a payment gateway associated with a subscription

[↑ Back to top](#doc-title)

If you *reactivate* your payment gateway plugin, then your subscriptions should automatically revert to automatic recurring payments. This has been tested with WooPayments, Stripe, and PayPal Payments; however, we cannot guarantee the same behavior when reactivating for third-party payment gateways.

## Failed Payment Handling

[↑ Back to top](#doc-title)

As seen in the [Renewal Process flow chart](https://woocommerce.com/document/subscriptions/renewal-process/#the-renewal-process), the default behavior when a recurring payment fails is:

1. To leave the subscription *on hold,* i.e., do not reactivate it.
2. Subscriptions sends an email to the customer to notify them of payment failure (if *Customer Renewal Invoice* is activated).
3. Customer logs in and selects [the “Pay” button next to the failed order in My Account](https://woocommerce.com/document/subscriptions/customers-view/pay-for-renewal/) or the [My Account > View Subscription page](https://woocommerce.com/document/subscriptions/customers-view/pay-for-renewal/) to pay for the failed renewal and reactivate the subscription.

When paying for a failed renewal order, Subscriptions displays only gateways that [support payment method changes](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features) by the customer. This enables WooCommerce Subscriptions to resume the subscription and process future automatic recurring payments with the new payment method chosen.

### Automatic Retry of Failed Recurring Payments

[↑ Back to top](#doc-title)

WooCommerce Subscriptions provides an automatic retry system for failed (automatic) recurring payments. You can [activate this](https://woocommerce.com/document/subscriptions/store-manager-guide/#payment-recovery) to retry payments multiple times and email customers to complete the payment. For more details, see [Failed Recurring Payment Retry System](https://woocommerce.com/document/subscriptions/failed-payment-retry/). This differs from the [default approach](https://woocommerce.com/document/subscriptions/renewal-process/#failed-payment-handling) when a customer would receive an email and need to take action to renew their subscription.

Theflowchartt outlines how this process works:

![](https://woocommerce.com/wp-content/uploads/2013/07/Renewal-Process-Flowchart-Automatic-Retries.png?strip=all&w=704)*Automatic Renewal Retry Process*

## Resubscribe Process

[↑ Back to top](#doc-title)

Another type of renewal not included in the guide above is resubscribing. After a customer’s subscription has *expired* or Subscriptions has *cancelled* it, the customer can create a *new* subscription that extends the old subscription’s terms [by using the resubscribe button](https://woocommerce.com/document/subscriptions/customers-view/subscribers-resubscribe-guide/) on the **My Account** page.

Resubscribing to a subscription that ended will create a new subscription for the same product or products, but it does not have the same behavior as purchasing a new subscription or renewing a subscription. The [Resubscribe Guide](https://woocommerce.com/document/subscriptions/resubscribe/) explains these behaviors in more detail.

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

## Turning Automatic Renewals On/Off

**Source:** [https://woocommerce.com/document/subscriptions/renewal-process/auto-renewal-toggle/](https://woocommerce.com/document/subscriptions/renewal-process/auto-renewal-toggle/)

# Turning Automatic Renewals On/Off

			WooCommerce Subscriptions includes an optional feature, the *auto renewal toggle*, that allows stores to accept both[manual and automatic payments](https://woocommerce.com/document/subscriptions/store-manager-guide/#renewals) for subscriptions. When activated, it lets your customers switch between automatic and manual renewals whenever they choose.

## Activating the Auto Renewal Toggle

[↑ Back to top](#doc-title)

By default, the auto-renewal toggle is not turned on in the Subscriptions settings. Follow these steps to activate the toggle:

1. **Go** to the **WooCommerce > Settings > Subscriptions** screen.
2. **Scroll** down to the *Renewals* section.
3. Check the option to **Allow subscribers to change their renewal mode via My Account**.
4. Save.

![](https://woocommerce.com/wp-content/uploads/2026/07/renewal-mode-my-account.png?w=720)*Allow subscribers to change their renewal mode via My Account – Activated*

Enabling this feature will display an auto-renew toggle on the customer’s  **View Subscription**page. Clicking the toggle will switch their subscription between manual and automatic renewals.

If the customer chooses to turn on automatic payments and the subscription doesn’t have an automatic payment method set, the customer will be asked to add one by following the [Add Payment method flow](#section-3). This process is similar to the existing change payment method process.

![](https://woocommerce.com/wp-content/uploads/2019/02/2-5_5_features_toggle.png?strip=all&w=704)*Auto Renewal Toggle – Customer View, Deactivated (Manual Renewal)*

## Changing to Manual Payments from Admin

[↑ Back to top](#doc-title)

It’s possible to change a subscription renewal method from admin by setting a flag on the order used to purchase the subscription.  For more information, see the guide to [changing a Subscription from automatic to manual renewals](https://woocommerce.com/document/change-subscription-from-automatic-to-manual-payments/).

Changing a subscription from manual renewals to automatic payments is more complicated and not all payment gateways support it.  Read the guide to [charging recurring payments for manually added subscriptions](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-8) for information on setting up automatic payments.

Sudden changes in renewal methods on all subscriptions are an indication that there is a problem with the payment gateway. Please ensure the payment gateway plugin is still active and that the subscriptions still include customer and payment tokens to [set up automatic payments](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-8).

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

## Minimum Periods for WooCommerce Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/renewal-process/minimum-periods-for-woocommerce-subscriptions/](https://woocommerce.com/document/subscriptions/renewal-process/minimum-periods-for-woocommerce-subscriptions/)

# Minimum Periods for WooCommerce Subscriptions

			[Minimum Periods for WooCommerce Subscriptions](https://woocommerce.com/products/minimum-periods-for-woocommerce-subscriptions/) holds subscribers to a commitment before they can cancel. You set the number of paid periods required, and the Cancel button stays hidden on the customer’s account page until they get there. You can set that number once for the whole store, per product, or per subscription plan.

## Overview

[↑ Back to top](#doc-title)

**Minimum Periods for WooCommerce Subscriptions** requires a subscriber to pay for a set number of billing periods before the Cancel button appears on their My Account subscription page. The initial order counts as the first paid period, so a value of 2 means the subscription has to renew once before the customer can cancel. You set a store-wide default, and you can override it on an individual product, on an individual variation, or on an individual subscription plan. Optional display settings show the minimum period to customers on the product page, in the cart and checkout, on the account page, and in order emails.

## Requirements

[↑ Back to top](#doc-title)

Before you install, check that your store meets these:

- WordPress 6.5 or higher.
- PHP 7.4 or higher.
- WooCommerce 9.0 or higher.
- WooCommerce Subscriptions, active. Both WooCommerce and WooCommerce Subscriptions are declared as required plugins, so WordPress will not let you activate this extension without them.

Two features have extra requirements:

- Per-plan minimum periods need WooCommerce Subscriptions 9.0 or higher, which is where subscription plans were introduced. On earlier versions everything else works as normal, store-wide and per product.
- The AI assistant abilities need WordPress 6.9 or higher (for the Abilities API) plus a separate plugin that exposes abilities to an assistant.

The extension declares compatibility with High Performance Order Storage (HPOS) and with the cart and checkout blocks, so you do not need to turn either off.

## Usage

[↑ Back to top](#doc-title)

Everything is configured in three places: a store-wide section in the Subscriptions settings, a per-product field on the product edit screen, and a per-plan field inside the subscription plan dialog. The store-wide section is where you start, because it also carries the switches that turn everything else on.

### Store-wide settings

[↑ Back to top](#doc-title)

Go to **WooCommerce > Settings > Subscriptions** and scroll to the **Cancelling** section. You can also get there with the Settings link next to the extension on the Plugins screen.

![](https://woocommerce.com/wp-content/uploads/2020/08/01-storewide-cancelling-settings.png?w=980)

**Enable Cancelling** controls whether subscribers can cancel at all. It is on by default. Turn it off and the Cancel button never appears, no matter how many periods have been paid. Turning it off also hides the rest of the settings in this section, removes the Cancelling fields from your product screens, removes the Min. Period column from the Products list, and stops every customer-facing message this extension adds. The Suspend button is not affected by this setting.

**Default Minimum Period(s)** is the number of paid periods required before a subscriber can cancel, counting the initial order as the first. The default is 1, which means the customer can cancel straight away. Set it to 2 to require one renewal, 3 to require two, and so on. This value applies to every subscription product that does not set its own, and to every subscription plan that follows the product or the store.

The remaining settings are display toggles. All of them are off by default, and none of them changes when a customer can cancel. They only decide where the number is shown.

**Show Paid Periods** adds a row to the subscription details on My Account listing how many periods the customer has paid, per product. The row only appears for products that actually have a minimum period above zero.

**Show in Product Pages** shows the minimum period on the single product page. For a subscription product it appears above the Add to cart button. For a product sold on subscription plans it appears next to each plan option instead, so the customer sees the commitment attached to the plan they are choosing.

![](https://woocommerce.com/wp-content/uploads/2020/08/07-product-page-minimum-period.png?w=980)

**Show in Cart/Checkout** shows the minimum period as line item data in the cart and at checkout. For a product sold on plans, the value shown is the one for the plan the customer selected. A one-time purchase shows nothing, because there is no subscription to cancel.

![](https://woocommerce.com/wp-content/uploads/2020/08/09-cart-minimum-period.png?w=980)

**Show in Account Page** adds a row to the subscription details on My Account showing the minimum period configured for that subscription, per product.

![](https://woocommerce.com/wp-content/uploads/2020/08/10-my-account-subscription.png?w=980)

**Show as Subscription Meta** shows the minimum period as order line item meta. That covers order confirmation emails, the order received page after checkout, and order details on the account page.

![](https://woocommerce.com/wp-content/uploads/2020/08/11-order-details-minimum-period.png?w=980)

**Link Suspensions** applies the same rule to the Suspend button that governs the Cancel button. Leave it off and customers can suspend whenever WooCommerce Subscriptions normally allows. Turn it on and the Suspend button stays hidden until the minimum period is met.

Link Suspensions only matters if WooCommerce Subscriptions’ own Customer Suspensions setting is 1 or more. If that is set to zero, the Suspend button never appears in the first place.

### Per-product settings

[↑ Back to top](#doc-title)

Open a product and look on the General tab of the Product data panel for the Cancelling field. It appears for simple, variable, subscription, and variable subscription products, as long as Enable Cancelling is on store-wide.

![](https://woocommerce.com/wp-content/uploads/2020/08/02-product-cancelling-fields.png?w=980)

**Cancelling** has two options. Use storewide settings means this product follows the store-wide Default Minimum Period(s). Override storewide settings means this product sets its own number.

**Minimum Period(s)** only appears once you choose Override storewide settings. Enter the number of paid periods required for this product, counting the initial order as the first. Zero means the customer can cancel immediately, which is a useful way to exempt one product from a store-wide commitment.

If the product uses its own custom subscription plans, a note appears under these fields reminding you that each plan can set its own minimum period, and that plans set to follow the product use the value here.

### Per-variation settings

[↑ Back to top](#doc-title)

For a variable subscription product, each variation has its own Cancelling and Minimum Period(s) fields under the variation’s pricing options. They work exactly like the product-level ones.

![](https://woocommerce.com/wp-content/uploads/2020/08/03-variation-cancelling-fields.png?w=980)

A variation that does not set its own value falls back to the parent product, and then to the store-wide default.

### Per-plan settings

[↑ Back to top](#doc-title)

If your store runs WooCommerce Subscriptions 9.0 or higher, you can set a minimum period on an individual subscription plan. Use the same dialog you use to add or edit the plan: on the product’s Subscriptions tab for a product’s own plans, or under WooCommerce > Settings > Subscriptions for store-wide plans.

![](https://woocommerce.com/wp-content/uploads/2020/08/04-plan-dialog-minimum-period.png?w=980)

**Minimum period** has two options. Use product / storewide setting means the plan takes the product’s value, and then the store-wide default. Set for this plan reveals a number field where you enter the paid periods required for this plan alone.

The plans table gains a read-only Min. period column. It shows a number for plans that set their own value, and a dash for plans that follow the product or the store.

![](https://woocommerce.com/wp-content/uploads/2020/08/05-plans-table-min-period-column.png?w=980)

### Which value applies

[↑ Back to top](#doc-title)

When several levels are set, the most specific one wins:

1. The subscription plan’s own value, if the plan is set to override.
2. Otherwise the product’s own value, if the product is set to override. A variation with nothing of its own uses its parent’s.
3. Otherwise the store-wide Default Minimum Period(s).

Nothing is blended. Whichever level supplies the value supplies it in full.

Two rules apply on top of that. If a subscription contains more than one product, the largest minimum period among them is the one that gates the buttons. And while a subscription is still inside its free trial, the minimum period counts as met, so a customer in a trial can still cancel.

### The Min. Period column

[↑ Back to top](#doc-title)

Products > All Products gains a Min. Period column just after Price, so you can see your commitments at a glance without opening each product.

![](https://woocommerce.com/wp-content/uploads/2020/08/06-products-list-min-period-column.png?w=980)

What it shows depends on the product:

- A product sold on subscription plans shows the effective minimum across its plans, as a single number when they all agree and as a range when they do not.
- A variable or variable subscription product shows the smallest minimum among its variations.
- Any other subscription product shows the number that applies to it.

The column is empty for products that are not sold on subscription, and the whole column disappears if you turn Enable Cancelling off.

### Shortcodes

[↑ Back to top](#doc-title)

Two shortcodes let you place the minimum period in your own content, such as a landing page or a custom product template.

```
[mpws_minimum_period]
```

 outputs the minimum period for a single product, in the same markup used above the Add to cart button. Add an 
```
id
```

 attribute to name a product, as in 
```
[mpws_minimum_period id="123"]
```

, or leave it off on a single product page to use the product being viewed. It outputs nothing for variable products and nothing while Enable Cancelling is off.

```
[mpws_minimum_period_table]
```

 outputs a two-column table. For a product sold on subscription plans, the rows are the plans. For a variable product, the rows are the variations. For a simple subscription product, there is one row. It accepts the same 
```
id
```

 attribute.

## Use cases

[↑ Back to top](#doc-title)

**A gym membership with a three-month commitment.** Set Default Minimum Period(s) to 3 under WooCommerce > Settings > Subscriptions. Every monthly membership product now requires the initial payment plus two renewals before the Cancel button appears. Turn on Show in Product Pages and Show as Subscription Meta so the commitment is visible before purchase and repeated in the confirmation email.

**A box subscription where the annual plan is cheaper because it commits.** On a product sold with a monthly plan and an annual plan, open each plan in the plan dialog. Set the monthly plan’s Minimum period to Set for this plan with a value of 1, so monthly subscribers can leave at any time. Set the annual plan to Set for this plan with a value of 2. Turn on Show in Product Pages so the difference shows next to each option while the customer chooses.

**One free product in a store that otherwise commits.** Keep the store-wide default at 3, then open the free trial product and set Cancelling to Override storewide settings with Minimum Period(s) of 0. That product can be cancelled immediately while everything else keeps its commitment.

**Tiers with different commitments on a variable subscription.** On a variable subscription with Basic, Plus, and Pro variations, set Cancelling to Override storewide settings on each variation and give Basic 1, Plus 3, and Pro 6. Add 
```
[mpws_minimum_period_table]
```

 to the product description so customers can compare the commitments in one place.

**Stopping subscribers from parking a subscription instead of paying it.** Set your minimum period as usual, then turn on Link Suspensions. Customers now see neither Cancel nor Suspend until they have paid the required periods, which closes the gap where someone suspends a subscription to avoid the commitment. Check that WooCommerce Subscriptions’ Customer Suspensions setting is 1 or more, or the Suspend button was never there to begin with.

## FAQ

[↑ Back to top](#doc-title)

**Does the initial order count toward the minimum period?**

Yes. The first payment is the first period. If you want a customer to renew once before they can cancel, set the minimum period to 2.

**Which value applies if I set more than one?**

The most specific one. A subscription plan’s own value wins. If the plan follows the product, the product’s own value is used. If the product does not set one either, the store-wide default applies.

**Where do I set a minimum period for a subscription plan?**

In the same dialog you use to add or edit the plan: on the product’s Subscriptions tab for a product’s own plans, or under WooCommerce > Settings > Subscriptions for store-wide plans. This needs WooCommerce Subscriptions 9.0 or higher.

**Can I configure minimum periods for variable subscription products?**

Yes. Each variation has its own Cancelling fields under the variation’s pricing options. A variation with nothing set follows the parent product, and then the store-wide default.

**What happens if a customer buys a subscription-plan product as a one-time purchase?**

Nothing. There is no subscription to cancel, so no minimum period is shown in the cart, at checkout, or on the order.

**Will this affect subscriptions that already exist when I activate the extension?**

Yes. The check counts the payments a subscription has already completed, so existing subscriptions are measured against the minimum period you set, just like new ones. A subscription that has already paid enough periods is unaffected.

**What happens during a free trial?**

The minimum period counts as met while the subscription is still in its trial, so a customer can cancel during the trial. Once the trial ends, the normal rule applies.

**What if a subscription contains several products with different minimums?**

The largest minimum among them applies to the whole subscription.

**Does turning off Enable Cancelling remove the minimum periods I set?**

No. The values stay on your products and plans. The setting simply hides the Cancel button for everyone and hides the extension’s fields and messages while it is off. Turn it back on and everything reappears as it was.

**Does hiding the Cancel button stop me from cancelling a subscription as the store owner?**

No. This affects the customer-facing My Account page only. You can still cancel or change any subscription from WP Admin.

**Can I read or change minimum periods from an AI assistant?**

Yes. The extension registers abilities with the WordPress Abilities API on WordPress 6.9 or higher, covering the store-wide settings, per-product and per-plan values, and whether a given subscription may be cancelled yet. Any plugin that consumes the Abilities API can expose them, and which of them an assistant may actually use is controlled in that plugin, not here. Every ability requires the 
```
manage_woocommerce
```

 capability.

**Does uninstalling remove my settings?**

No. The extension leaves its options and product meta in place when you delete it, so reinstalling picks up where you left off.

Version 3.0.0 made edge cases behave consistently across every screen. A product with no Cancelling setting now follows the store-wide minimum everywhere, a missing store-wide option falls back to the settings-screen defaults of cancelling enabled and 1 period, and Link Suspensions uses the same rule as cancelling. If your store relied on a screen-specific quirk before, review your settings after updating.

## Developer documentation

[↑ Back to top](#doc-title)

Resolution logic lives in 
```
Minimum_Periods_For_Woocommerce_Subscriptions_Resolver
```

. Its static methods are the single source of truth for both the admin screens and the customer-facing hooks, so extensions should call them rather than reading meta directly.

Key methods: 
```
Resolver::get_storewide_settings()
```

 returns the typed settings array, 
```
Resolver::resolve_minimum_periods( $product, $plan, $storewide )
```

 returns the effective value plus the level that supplied it, and 
```
Resolver::evaluate_subscription( $subscription )
```

 returns the full evaluation of one subscription, including 
```
payment_count
```

, 
```
minimum_periods
```

, 
```
remaining_periods
```

, 
```
minimum_period_met
```

, 
```
in_free_trial
```

, 
```
can_cancel
```

, and 
```
can_suspend
```

.

### Filter hooks

[↑ Back to top](#doc-title)

```
mpws_product_types
```

Filters the legacy product type slugs treated as subscription products. Defaults to 
```
array( 'subscription', 'subscription_variation', 'variable-subscription' )
```

. Fires inside 
```
Resolver::get_legacy_product_types()
```

, which runs on every eligibility check.

Soft-deprecated in 3.0.0. It is still honored and raises no deprecation notice, but it now only extends the legacy product type list. Products sold on WooCommerce Subscriptions 9.0+ subscription plans are recognized regardless of their type, so adding a type here has no effect on plan products and removing one does not hide them.

```
add_filter(
	'mpws_product_types',
	function ( $types ) {
		$types[] = 'my_custom_subscription_type';
		return $types;
	}
);
```

The extension registers no action hooks of its own.

### Storage

[↑ Back to top](#doc-title)

Store-wide settings are 
```
wp_options
```

 rows, all autoloaded:

| Option | Type | Default |
| --- | --- | --- |
| mpws_allow_cancelling | yes / no | yes |
| mpws_allow_cancelling_periods | integer as string | 1 |
| mpws_show_paid_periods_myaccount | yes / no | no |
| mpws_show_minimum_periods_singleproduct | yes / no | no |
| mpws_show_minimum_periods_checkout | yes / no | no |
| mpws_show_minimum_periods_myaccount | yes / no | no |
| mpws_show_minimum_periods_meta | yes / no | no |
| mpws_link_suspensions | yes / no | no |
| mpws_cleanup_version | version string | absent until an update runs |

Products and variations carry two meta keys, exposed as 
```
Resolver::META_MODE
```

 and 
```
Resolver::META_PERIODS
```

:

- ```
mpws_allow_cancelling
```

, either 
```
use-storewide
```

 or 
```
override-storewide
```

.
- ```
mpws_allow_cancelling_periods
```

, the integer value used when the mode is 
```
override-storewide
```

.

Per-plan values use the same two keys inside the plan arrays WooCommerce Subscriptions persists, in 
```
_wcsatt_schemes
```

 product meta for product plans and the 
```
wcsatt_subscribe_to_cart_schemes
```

 option for store-wide plans. Reusing the keys means the values survive plan copy, reorder, and export or import without extra work.

The plan a line item was bought on is read from 
```
_wcsatt_scheme
```

 item meta, falling back to the legacy 
```
_wcsatt_scheme_id
```

. Plans are matched on either their 
```
id
```

 or the legacy 
```
{interval}_{period}[_{length}]
```

 key, so stores carrying both kinds of data resolve correctly.

The extension creates no database tables. Uninstalling leaves options and meta in place.

### REST API

[↑ Back to top](#doc-title)

The extension does not register routes of its own. It adds two fields to the subscription plan endpoints WooCommerce Subscriptions exposes, through 
```
register_rest_field()
```

 on the 
```
product_subscription_plan
```

 and 
```
subscription_plan
```

 object types:

- ```
mpws_allow_cancelling
```

, string, enum 
```
use-storewide
```

 or 
```
override-storewide
```

.
- ```
mpws_allow_cancelling_periods
```

, integer, minimum 0.

Both are readable and writable in the 
```
view
```

 and 
```
edit
```

 contexts on:

```
POST|PUT /wc/v3/products/{product_id}/subscription-plans[/{plan_id}]
POST|PUT /wc/v3/subscriptions/storewide-plans[/{id}]
```

Because the plan controllers copy a fixed field list out of the request before the save filters run, the request is stashed on 
```
rest_request_before_callbacks
```

 and read back in 
```
wcsatt_processed_scheme_data
```

 and 
```
wcsatt_processed_cart_scheme_data
```

. Responses are decorated on 
```
rest_request_after_callbacks
```

 rather than 
```
rest_post_dispatch
```

, so in-process 
```
rest_do_request()
```

 calls carry the fields too.

### Abilities API

[↑ Back to top](#doc-title)

On WordPress 6.9 or higher the extension registers eight abilities under the 
```
minimum-periods/
```

 namespace, in the 
```
woocommerce
```

 category. Every one uses the same permission callback, which requires 
```
manage_woocommerce
```

, and every one sets 
```
show_in_rest
```

.

| Ability | Annotations | Purpose |
| --- | --- | --- |
| minimum-periods/get-settings | readonly, idempotent | Read the store-wide settings, plus store-wide plans and their values. |
| minimum-periods/update-settings | idempotent | Update store-wide settings. Only supplied fields change. |
| minimum-periods/get-product-minimum-period | readonly, idempotent | Read one product or variation, with its variations or plans expanded. |
| minimum-periods/set-product-minimum-period | idempotent | Set mode and value on a product or variation. |
| minimum-periods/set-plan-minimum-period | idempotent | Set mode and value on a product plan or a store-wide plan. |
| minimum-periods/list-configured-products | readonly, idempotent | List products and variations that override the store-wide value. Paginated, 50 per page maximum. |
| minimum-periods/get-subscription-status | readonly, idempotent | Evaluate one subscription against its minimum period. |
| minimum-periods/list-subscriptions | readonly, idempotent | List subscriptions with their evaluation. Filters: status, customer, product, locked_only. Paginated, 50 per page maximum. |

Registration is consumer-agnostic. The abilities go into the Abilities API whenever WooCommerce and WooCommerce Subscriptions are active, and nothing in the extension knows about any particular MCP plugin. The 
```
woocommerce
```

 ability category is registered by WooCommerce 10.3 and higher; on older stores the extension registers the same slug itself.

### Markup and styling

[↑ Back to top](#doc-title)

The customer-facing markup is generated in one place, 
```
Minimum_Periods_For_Woocommerce_Subscriptions_Messages
```

, and the class names are treated as a stable public surface for theming:

- ```
.mpws_minimum_periods
```

, wrapping 
```
.mpws-label
```

 and 
```
.mpws-product-period
```

, used above the Add to cart button and by 
```
[mpws_minimum_period]
```

.
- ```
.mpws-plan-minimum-period
```

, appended to a subscription plan option on the product page.
- ```
.mpws_minimum_period_table
```

, wrapping the 
```
[mpws_minimum_period_table]
```

 output.

Cart and checkout output goes through 
```
woocommerce_get_item_data
```

, and order line item output through 
```
woocommerce_order_item_meta_start
```

, so both inherit your theme’s styling for those areas.

### Front-end hook points

[↑ Back to top](#doc-title)

The extension attaches to these WooCommerce and WooCommerce Subscriptions hooks. Unhooking any of them disables that piece of behavior.

- ```
wcs_view_subscription_actions
```

, priority 11 removes 
```
cancel
```

, priority 12 removes 
```
suspend
```

.
- ```
woocommerce_subscription_before_actions
```

, priority 99, renders the paid periods and minimum period rows.
- ```
woocommerce_before_add_to_cart_button
```

, renders the product page block.
- ```
wcsatt_single_product_subscription_option_description
```

 and 
```
wcsatt_single_product_options
```

, append the minimum period to plan options in the radio and dropdown layouts.
- ```
woocommerce_get_item_data
```

, adds the cart and checkout line item data.
- ```
woocommerce_order_item_meta_start
```

, adds the order line item meta.

### Plan dialog integration

[↑ Back to top](#doc-title)

WooCommerce Subscriptions renders its plans UI in React and offers no extension point, so the Minimum period field is injected from outside by 
```
admin/js/mpws-subscription-plans.js
```

. A 
```
MutationObserver
```

 injects the field into 
```
.wcsatt-plan-modal
```

 when it opens, an 
```
apiFetch
```

 middleware adds the values to the plan save request and records what the response returns, and the plans tables get the read-only Min. period column.

The script is written to fail quietly. If WooCommerce Subscriptions changes its markup, the field simply does not appear, and per-plan values can still be set through the REST fields or the abilities above.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

WooCommerce Subscriptions is a WooCommerce extension that lets customers subscribe to your products or...
				![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to...

---

