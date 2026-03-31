# Renewal Process

*Category from WooCommerce Subscriptions documentation*

---

## Subscription Renewal Process

**Source:** [https://woocommerce.com/document/subscriptions/renewal-process/](https://woocommerce.com/document/subscriptions/renewal-process/)

# Subscription Renewal Process

			This page provides details about how WooCommerce Subscriptions handles recurring payments through the subscription renewal process.

## Recurring Payments & the Renewal Process

[↑ Back to top](#doc-title)

A key feature of a subscription is a recurring payment — a payment due at a regular interval over time (ex. monthly). These payments are the foundation block of a larger *renewal* process in WooCommerce Subscriptions.

Subscriptions performs a number of tasks as part of renewal, including generating an order to record payment, emailing both you and the customer via email of the renewal and sometimes, processing the payment. The renewal method determines the order of these tasks and what triggers them and how Subscriptions performs them.

**Subscriptions offers two methods for handling renewals:**

- **Automatic renewal** – recurring payments process without customer intervention.
- **Manual renewal** – recurring payments require that the customer logs into the store and makes the payment for each payment interval.

## Manual vs. Automatic Renewals

[↑ Back to top](#doc-title)

When you activate both manual and automatic renewals in your store, it’s helpful to understand how WooCommerce processes each type of renewal and how customers experience them differently. The table below is a quick reference guide to the differences:

|  | Manual Renewals | Automatic Renewals |
| --- | --- | --- |
| Customer Involvement | Customer must log into your store and pay to renew the subscription. | No action required by the customer to renew the subscription. |
| Coupons | Customer can use product and cart coupons to reduce price of renewal because customer completes renewal via normal checkout process. | Only recurring coupons applied at the start of subscription will discount renewal payments since renewal payments are processed automatically. |
| Taxes | Tax charged for each renewal payment is calculated at time the payment is processed because customer completes renewal via normal checkout process. Taxes on a pending renewal order reflect the tax line items on the subscription prior to checkout. | Taxes calculated at time of sign-up are applied for all renewal payments. If you need to change recurring taxes, you need to manually change recurring tax line items for the subscription. |
| Payment Method | All payment gateway extensions can be used to process manual renewal payments. Customer can choose a different payment method for each renewal payment. | Some payment gateways support automatic renewals( see Subscription Payment Gateway Guide for more details). The same payment method is used for all renewal payments (unless payment fails). |
| Shipping Method | Customer can choose a different shipping method for each renewal payment. | Same shipping method is used for all renewal payments (unless payment fails). |
| Changing Address | Customer can enter a different billing and/or shipping address for each renewal. | Same billing and shipping address (from parent order) is used for each renewal. Customers can update an address for future renewal orders. |
| Email Notifications | If enabled, the Customer Renewal Invoice is emailed to the customer to prompt them to log in and pay to renew subscription. After payment is complete, the customer receives the Processing/Completed Renewal Order email, and the store manager receives the  New Renewal Order notification. | If enabled, the Processing or Completed Renewal Order email is sent to the customer as a record of automatic payment. Store Manager receives New Renewal Order notification immediately. |

## Automatic Recurring Payments

[↑ Back to top](#doc-title)

With automatic payments, Subscriptions charges recurring payments without needing customer or store manager involvement. WooCommerce Subscriptions handles the payment through the payment gateway used for the initial purchase, making it the most convenient option for you and your customers.

For a payment gateway extension to provide automatic payments, the extension developer must [integrate their extension with Subscriptions](https://woocommerce.com/document/payment-gateway-integration-guide/). You can find a current list of payment gateways that support automatic payments at: [Subscription Payment Gateways](https://woocommerce.com/document/payment-gateways/). The [Payment Gateways section](https://woocommerce.com/document/subscriptions/store-manager-guide/#payment-gateway-settings)of Subscriptions’ Settings on your site also lists payment gateways that support automatic recurring payments.

Automatic payments are **on** by default. To turn *off* automatic payments, tick the [Turn Off Automatic Payments](https://woocommerce.com/document/store-manager-guide/#turn-off-automatic-payments) checkbox at Subscriptions settings.

## Manual Recurring Payments

[↑ Back to top](#doc-title)

With manual payments, a subscription has a status of  [on-hold](https://woocommerce.com/document/subscriptions/statuses/#on-hold-subscription-status) until the customer logs into your store and pays to renew it.

For example, if a subscription costs $100/year, 1 year after the customer first signed up, Subscriptions puts the subscription on-hold and generates a new order for the $100 renewal (and emails it to the customer if your store has enabled the *Customer Renewal Invoice* email). Once the customer logs into your store and pays $100, Subscriptions reactivates the subscription for another year.

The manual renewal payment process uses the standard WooCommerce checkout flow. A customer pays for renewal in much the same way a customer would purchase a product or new subscription. A walkthrough of the manual renewal payment process is available in [Subscriber’s View](https://woocommerce.com/document/subscriptions/customers-view/pay-for-renewal/#manual-payment-for-a-subscription-renewal).

When a subscription accepts manual renewal payments, the customer can choose a *different* payment method for *each* renewal payment. Any payment method active on your store is available for use as an option. We don’t recommend manual renewal payments for subscriptions that renew frequently (more than once per year) because they require customers to take action to continue their subscriptions; this could result in less customers renewing since it requires an additional step.

Manual renewal payments are off by default. To accept manual payments, you must enable *Accept Manual Renewals*.

You can also choose whether to send the customer an email to remind them to log into the store and make the renewal payment by enabling or disabling the **Customer Renewal Invoice** email.

More info on the impact of manual payments on payment gateways at [Subscription Payment Gateways](https://woocommerce.com/document/payment-gateways/).

The *early renewal* process is very similar to the manual renewal process. The [Early Renewal Guide](https://woocommerce.com/document/subscriptions/early-renewal/) explains this in more detail.

### Time Limit on Manual Payments

[↑ Back to top](#doc-title)

WooCommerce includes a [Hold stock setting](https://woocommerce.com/document/configuring-woocommerce-settings/products/#inventory). This allows you to set a time limit for how long a customer has to make a manual payment for an order, after which Subscriptions cancels any unpaid, pending **parent** order. **This does not apply to pending renewal orders, which remain pending indefinitely.**

To provide subscribers with a more generous payment period, Subscriptions sets the default time limit to 10080 minutes (one week). You can leave the value blank to disable it completely.

![](https://woocommerce.com/wp-content/uploads/2013/07/hold-stock.png?strip=all&w=704)Hold Stock

## The Renewal Process

[↑ Back to top](#doc-title)

The recurring payment process is complex. The flow chart below maps out the most important actions performed to handle a subscription renewal. Follow each flow and see which steps WooCommerce Subscriptions performs for both the automatic and manual renewal methods.

![](https://woocommerce.com/wp-content/uploads/2013/07/Renewal-Process-Flowchart-Scheduled-Renewal.png?strip=all&w=704)*Subscription Renewal Process Flow Chart*

### Early Renewal

[↑ Back to top](#doc-title)

The **early renewal** process is a sort of hybrid of manual and automatic renewal processes. While Subscriptions offers early renewal on both automatic and manual renewal subscriptions, once the process begins, the customer either needs to go [through the checkout process or pay via a early renewal modal](https://woocommerce.com/document/subscriptions/store-manager-guide/#early-renewal).  Doing this, however, does not change an automatic renewal to manual or vice versa. You can read more about the specifics in the [Early Renewal Guide](https://woocommerce.com/document/subscriptions/early-renewal/).

### How Subscriptions calculates the “new renewal” payment date

[↑ Back to top](#doc-title)

In general, Subscriptions calculates the next renewal date based on the last payment date, not the scheduled date. For example, if a customer pays a late renewal on March 3rd, Subscriptions sets the next renewal for April 3rd. This is to ensure the subscriber receives access to the subscription for the full period of each renewal.

However, for [synchronized subscription](https://woocommerce.com/document/subscriptions/renewal-synchronisation/) products, Subscriptions **maintains** the scheduled date regardless of late payments. If a subscription synchronized to the 1st of each month has a late payment on March 3rd, Subscriptions still sets the next renewal for April 1st. **This approach preserves synchronized renewal dates.**

To **always** calculate the next payment date from the last scheduled payment date (regardless of if the subscription is synchronized or not), either install the free [WooCommerce Subscriptions – Preserve Billing Schedule](https://github.com/Prospress/woocommerce-subscriptions-preserve-billing-schedule) plugin or add the [following snippet](https://woocommerce.com/document/customizing-woocommerce-best-practices/#section-4):

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | /* |
|  | * By default, WooCommerce Subscriptions will calculate the next payment date for a subscription from the time of the last payment. |
|  | * This snippet changes it to calculate the next payment date from the scheduled payment date, not the time the payment was actually processed. |
|  | */ |
|  |  |
|  | add_filter( 'wcs_calculate_next_payment_from_last_payment', '__return_false' ); |
      [view raw](https://gist.github.com/woogists/be588ba8766179e722ae3a9f1c38bc0d/raw/4ca88838a2d1db1005458915abe0ef53cb6e63e0/woocommerce-subscriptions-preserve-billing-schedule.php)
        [woocommerce-subscriptions-preserve-billing-schedule.php](https://gist.github.com/woogists/be588ba8766179e722ae3a9f1c38bc0d#file-woocommerce-subscriptions-preserve-billing-schedule-php)
        hosted with ❤ by [GitHub](https://github.com)

### Testing the renewal process

[↑ Back to top](#doc-title)

To test the renewal process, follow steps outlined in [processing a renewal for an active subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/update-an-existing-subscription/#process-a-renewal). This triggers all normal automatic or manual renewal process steps.

To use this process, you need to purchase a test subscription with a gateway that requires either:

- manual renewal payments (e.g. Cheque, Bank transfer); or
- a payment gateway that supports [modifications to the renewal date](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features).

### Custom fields/meta data copied to renewal orders

[↑ Back to top](#doc-title)

WooCommerce Subscriptions copies all [custom fields](http://codex.wordpress.org/Custom_Fields) (i.e. metadata) set on an order during checkout to the subscription(s) created for that order during checkout. When the subscription renews, Subscriptions will then copy that data to the renewal order.

If you add any additional [custom fields to the subscription manually](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/), Subscriptions copies that data to all future renewal orders.

**For Developers:** Subscriptions offers a way to exclude specific meta-data from copying to renewal orders. Developers can use the 
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

When you deactivate the payment gateway plugin/extension currently handling automatic recurring payments for subscriptions, the subscriptions using that payment method will switch to Manual Renewal. The following explains what happens regardless of whether you have enabled **Accept Manual Renewals** or not under the Subscription setting:

Once you deactivate the payment plugin/extension (under **Plugins** in WordPress Admin):

- The user will need to manually renew their subscription using a different payment method.  Additionally, the payment method will no longer be available as an option to the customer.

- The **Payment Method** in the subscription info (**WooCommerce > Subscriptions** > **Edit Subscription** )  will read as  **Manual Renewal**.

![](https://woocommerce.com/wp-content/uploads/2022/08/before-stripe-disabled.png?w=620)Before Stripe gateway disabled

![](https://woocommerce.com/wp-content/uploads/2022/08/stripe-after-disabled.png?w=650)After Stripe gateway disabled

- When the subscription’s scheduled renewal is due and a scheduled subscription payment is triggered ( 
```
woocommerce_scheduled_subscription_payment
```

 event  in Action Scheduler)  a renewal order is created with **Pending payment** status.

- The order note on the renewal order will read: **Manual renewal order awaiting customer payment**:

![](https://woocommerce.com/wp-content/uploads/2022/08/manual-renewal-after-disabled.png?strip=all&w=704)A renewal order switching to manual payment method

**Note:** This only occurs when you deactivate the payment gateway plugin entirely. If you turn off a payment method from **WooCommerce > Settings > Payments**, Subscriptions continues to process automatic recurring payments for active subscriptions that use the payment gateway as normal, but new subscribers or those that manually renew will not see that payment option at checkout.

### Reactivating a payment gateway associated with a subscription

[↑ Back to top](#doc-title)

If you *reactivate* your payment gateway plugin, then your subscriptions should automatically revert back to automatic recurring payments. This has been tested with WooPayments, Stripe and PayPal Payments, however, we cannot guarantee the same behavior when reactivating for third party payment gateways.

## Failed Payment Handling

[↑ Back to top](#doc-title)

As seen in the [Renewal Process flow chart](https://woocommerce.com/document/subscriptions/renewal-process/#the-renewal-process), the default behavior when a recurring payment fails is:

1. To leave the subscription *on-hold* i.e., do not reactivate it.
2. Subscriptions sends an email to the customer to notify them of payment failure (if *Customer Renewal Invoice* is activated).
3. Customer logs in and click [the “Pay” button next to the failed order in My Account or My Account > View Subscription page](https://woocommerce.com/document/subscriptions/customers-view/pay-for-renewal/) to pay for failed renewal and reactivate the subscription.

When paying for a failed renewal order, Subscriptions displays only gateways that [support payment method changes](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features) by the customer. This enables WooCommerce Subscriptions to resume the subscription and process future automatic recurring payments with the new payment method chosen.

### Automatic Retry of Failed Recurring Payments

[↑ Back to top](#doc-title)

WooCommerce Subscriptions provides an automatic retry system for failed (automatic) recurring payments. You can [activate this](https://woocommerce.com/document/subscriptions/store-manager-guide/#retry-failed-payments) to retry payments multiple times and email customers to complete the payment. For more details, see [Failed Recurring Payment Retry System](https://woocommerce.com/document/subscriptions/failed-payment-retry/). This differs from the [default approach](https://woocommerce.com/document/subscriptions/renewal-process/#failed-payment-handling) when a customer would receive an email and need to take action to renew their subscription.

The flow chart outlines how this process works:

![](https://woocommerce.com/wp-content/uploads/2013/07/Renewal-Process-Flowchart-Automatic-Retries.png?strip=all&w=704)*Automatic Renewal Retry Process*

## Resubscribe Process

[↑ Back to top](#doc-title)

Another type of renewal not included in the guide above is resubscribing. After a customer’s subscription has *expired* or Subscriptions has *cancelled* it, the customer can create a *new* subscription that extends the old subscription’s terms [by using the resubscribe button](https://woocommerce.com/document/subscriptions/customers-view/subscribers-resubscribe-guide/) on the **My Account** page.

Resubscribing to a subscription that ended will create a new subscription for the same product or products; but it does not have the same behavior as purchasing a new subscription, or renewing a subscription. The [Resubscribe Guide](https://woocommerce.com/document/subscriptions/resubscribe/) explains these behaviors in more detail.

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

## Turning Automatic Renewals On/Off

**Source:** [https://woocommerce.com/document/subscriptions/renewal-process/auto-renewal-toggle/](https://woocommerce.com/document/subscriptions/renewal-process/auto-renewal-toggle/)

# Turning Automatic Renewals On/Off

			WooCommerce Subscriptions includes an optional feature, the *auto renewal toggle*, that allows stores to accept both[manual and automatic payments](https://woocommerce.com/document/subscriptions/store-manager-guide/#renewal-settings) for subscriptions.  When activated, it lets your customers switch between automatic and manual renewals whenever they choose.

## Activating the Auto Renewal Toggle

[↑ Back to top](#doc-title)

By default, the auto-renewal toggle is not turned on in the Subscriptions settings. Follow these steps to activate the toggle:

1. **Go** to the **WooCommerce > Settings > Subscriptions** screen.
2. **Scroll** down to the *Renewals* section.
3. **Check** the option to *Display the auto renewal toggle*.
4. Save.

![](https://woocommerce.com/wp-content/uploads/2019/02/2-5_4_features_settings.png?strip=all&w=704)*Auto Renewal Toggle Setting – Activated*

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

	
	
	![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to content/products and member discounts.
				![](https://woocommerce.com/wp-content/uploads/2019/03/All_Products_Woo_Subscriptions_icon-marketplace-160x160-2.png)

### All Products for WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer your existing products on subscription, with this powerful add-on for WooCommerce Subscriptions.

---

## Minimum Periods for WooCommerce Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/renewal-process/minimum-periods-for-woocommerce-subscriptions/](https://woocommerce.com/document/subscriptions/renewal-process/minimum-periods-for-woocommerce-subscriptions/)

# Minimum Periods for WooCommerce Subscriptions

			**Big News!** 🎉 Coming soon in [Elementor Connector:](https://woocommerce.com/products/elementor-connector/) Unlock the **Minimum Periods for WooCommerce Subscriptions** Elementor widget! Show subscription minimum periods in Elementor anywhere you’d like.

## Overview of Minimum Periods

[↑ Back to top](#doc-title)

[Minimum Periods for WooCommerce Subscriptions](https://woocommerce.com/products/minimum-periods-for-woocommerce-subscriptions) is an extension for WooCommerce that allows shop owners & administrators to restrict the display of the “Cancel” button for active subscriptions on the customer’s account page. Shop owners & administrators can provide access to that button by configuring the number of minimum payments/renewals that should be made before the “Cancel” button is available.

## Installation

[↑ Back to top](#doc-title)

Once you’ve [purchased Minimum Periods for WooCommerce Subscriptions](https://woocommerce.com/products/minimum-periods-for-woocommerce-subscriptions), you can download the plugin from your confirmation email or [WooCommerce account](https://woocommerce.com/my-account/downloads/). To install it, follow these steps:

1. Go to **Plugins > Add New > Upload**
2. Select the ZIP file you just downloaded
3. Click Install Now, and then Activate

Once you’ve installed and activated the plugin, navigate to **WooCommerce > Settings > SubScriptions > Cancelling** to configure the plugin.

More information at: [Installing and Managing Plugins](https://wordpress.org/support/article/managing-plugins/#installing-plugins).

---

## Setup and Configuration

[↑ Back to top](#doc-title)

### Storewide Settings

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2023/11/mpws-ss1.png?strip=all&w=704)

To configure minimum periods for *all* subscriptions products, navigate to **WooCommerce > Settings > SubScriptions > Cancelling**:

- **Enable Cancelling:** Enable to allow customers to cancel their active subscriptions. Disabling this means that no subscription on your website can be cancelled.
- **Minimum Period(s):** Set the minimum number payments/terms (also known as payments) that a customer needs to have completed *before* the cancellation button is visible in the account page on the front-end. A payment is counted when the order status is set to 
```
Completed
```

.
- **Show in Product Pages**: Enable to show the number of periods/terms that need to be completed before cancellation is possible. This section will show above the add-to-cart button on the single product page.
- **Show in Cart/Checkout**: Enable to show the number of periods/terms that need to be completed as part of the subscription meta. This section will show as line-item meta information on the cart and checkout page.
- **Show Paid Periods:** Enable to show the number of paid periods/terms that have already been completed. This field will only be shown on the my-account page for your customer.
- **Show in Account Page:**Enable to show the number of periods/terms that need to be completed before cancellation is possible. This field will only be shown on the my-account page for your customer.
- **Show as Subscription Meta:**Enable to show the number of periods/terms that need to be completed as part of the subscription meta. This field will be shown on the checkout confirmation page, on the my-account page and in the order-confirmation emails.

Setting the number of **Minimum Period(s)** to 
```
0
```

 will result in customers being able to cancel their subscriptions immediately.

### Per Subscription Settings

[↑ Back to top](#doc-title)

![Minimum period settings on a per-subscription product basis.](https://woocommerce.com/wp-content/uploads/2020/08/mp-screenshot-2.png?strip=all&w=704)

To configure minimum periods on a *per-product* basis, navigate to **Products > All Products > Your Subscription Product > Product Data > General > Cancelling:**

1. Select **Override storewide settings** to overide the default store settings outlined in the previous section
2. Enter the number of **Minimum Period(s)** (also known as payments) that a customer needs to have completed for **this subscription****product** *before* the cancellation button is visible in the account page on the front-end.

### Per Variable Subscription Settings

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2020/08/mp-screenshot-3-1.png?strip=all&w=704)

Since version 1.1, minimum periods can also be configured on a per variable subscription basis. To configure minimum periods *per variation*, navigate to **Products > All Products > Your Subscription Product > Product Data > Variations > Your Variation Cancelling:**

1. Select **Override storewide settings** to overide the default store settings outlined in the previous section
2. Enter the number of **Minimum Period(s)** that a customer needs to have completed for **this variation** *before* the cancellation button is visible in the account page on the front-end.

---

## Usage

[↑ Back to top](#doc-title)

On the customer’s account page under **My-Account > Subscriptions**, the customer will see the “Cancel” button if any of the following conditions are met:

1. The **Allow Cancelling** checkbox is selected under **WooCommerce > Settings > SubScriptions > Cancelling**
2. The **Minimum Period(s)**have been reached as configured in either the storewide settings or on the per-product settings

![](https://woocommerce.com/wp-content/uploads/2020/08/mp-screenshot-4a.png?strip=all&w=704)

In instances where the **Allow Cancelling** checkbox is *not* selected or the **Minimum Periods** have *not* been reached, customers will only see the details of the subscription without having an option to cancel.

![Hiding the cancel button when minimum periods have not been reached.](https://woocommerce.com/wp-content/uploads/2020/08/mp-screenshot-3.png?strip=all&w=704)

---

## Shortcodes

[↑ Back to top](#doc-title)

**Minimum Periods for WooCommerce Subscriptions** provides two powerful shortcodes that allow you to display minimum period information anywhere on your website. Below are the details and usage instructions for each shortcode.

### 1. [mpws_minimum_period]

[↑ Back to top](#doc-title)

This shortcode displays the minimum number of periods/terms that need to be completed before a customer can cancel their subscription. This shortcode is versatile and can be used on any page or post to inform customers about the cancellation policy.

**Attributes:**

- ```
id
```

 (optional):
- **Description:** The Product ID or Variation ID for which you want to display the minimum period.
- **Default:** If not provided, and the shortcode is used on a product page, it will automatically use the current product’s ID.
- **Example:** 
```
id="123"
```

 or 
```
id="456"
```

**Usage Examples:**

1. **Basic Usage (Within a Product Page):**If you place the shortcode on a product page without specifying an ID, it will automatically display the minimum period for that product. 
```
[mpws_minimum_period]
```
2. **Specifying a Product ID:**To display the minimum period for a specific product, provide the 
```
id
```

 attribute. 
```
[mpws_minimum_period id="123"]
```
3. **Specifying a Variation ID:**For variable subscriptions, you can specify a variation ID. 
```
[mpws_minimum_period id="456"]
```

### 2. [mpws_minimum_period_table]

[↑ Back to top](#doc-title)

This shortcode displays a table of subscription variations along with their respective minimum periods. This is especially useful for variable subscription products where each variation may have different minimum period requirements

**Attributes:**

- ```
id
```

 (optional):
- **Description:** The Product ID for which you want to display the variations table.
- **Default:** If not provided, and the shortcode is used on a product page, it will automatically use the current product’s ID.
- **Example:** 
```
id="123"
```

**Usage Examples:**

1. **Basic Usage (Within a Variable Subscription Product Page):** If you place the shortcode on a variable subscription product page without specifying an ID, it will automatically display the variations table for that product. 
```
[mpws_minimum_period_table]
```
2. **Specifying a Product ID:**To display the variations table for a specific product, provide the 
```
id
```

 attribute.
```
[mpws_minimum_period_table id="123"]
```

**Notes:**

- The 
```
[mpws_minimum_period_table]
```

 shortcode is primarily designed for **Variable Subscription** products. If used with a **Simple Subscription** product, it will display the minimum period for that single product.
- Ensure that the product ID or variation ID provided in the shortcode corresponds to a valid subscription product to avoid empty outputs.

---

## Frequently Asked Questions

[↑ Back to top](#doc-title)

#### Will the cancel button be hidden immediately upon activation of the extension?

Yes – As soon as the extension is activated, the “Cancel” button will be hidden on the customer’s account page on the front-end.

---

#### How are minimum periods calculated?

Minimum periods are based on the number of completed orders that have been placed (a new order is created for each renewal). This also includes the initial order of the subscription product. As an example: If a subscription can only be cancelled after the **first renewal**, the minimum period to set is 
```
2
```

. This includes the original order *and* the first renewal.

---

#### Can I configure minimum periods for variable subscriptions?

Yes – Since version 1.1, minimum periods can be configured for both simple subscriptions and variable subscriptions.

---

#### Is it legal to hide a subscription cancellation button?

This varies between countries. Before disabling the “Cancel” button, we recommend discussing potential implications with a legal professional.

---

#### Will minimum periods apply to current subscriptions or only to new subscriptions?

It will apply to all current and future active subscriptions. Deactivating the extension also means that the cancellation button will be visible for all subscriptions.

---

#### Does minimum periods disable the “Suspend” button as well?

No – At the moment, Minimum Periods for WooCommerce Subscriptions will only remove the “Cancel” button. To hide the “Suspend” button for all subscription products, configure the settings under *WooCommerce > Settings > Subscriptions > Customer Suspensions* to 
```
0
```

.

---

#### Can customers cancel during a free trial?

Yes – Free trials by their very nature mean that no payments have taken place yet and that they’ll only have the product for a trial period (unless cancelled or the subscription is processed). During the trial period, subscriptions can be cancelled regardless of the minimum period that is configured.

---

#### Is it possible to show the number of paid terms/periods on the my-account page?

Yes – Version 1.4 allows store owners/manager to configure settings under **WooCommerce > Settings > Subscriptions > Cancelling > Show Paid Periods** to optionally display the number if paid terms/periods on the my-account page. If enabled, the my-account page will look as follows:

![](https://woocommerce.com/wp-content/uploads/2020/08/mp-screenshot-faq-1.png?strip=all&w=704)

---

#### Is it possible to show the minimum terms/periods for the subscription on the my-account page?

Yes – Version 1.4 allows store owners/manager to configure settings under **WooCommerce > Settings > Subscriptions > Cancelling > Show in Account Page** to optionally display the number if minimum periods on the my-account page.

When configured correctly, the subscription overview on the front-end under the my-account page will appear as follows:

![](https://woocommerce.com/wp-content/uploads/2020/08/mp-screenshot-faq-2.png?strip=all&w=704)

---

#### Is it possible to show the minium terms/periods for the subscription on order confirmation emails?

Yes – Version 1.5 allows store owners/managers to configure settings under **WooCommerce > Settings > Subscriptions > Cancelling > Show in Subscription Meta** to optionally display this informatio.

When configured correctly, the subscription meta information containing the minimum periods will look as follows:

![](https://woocommerce.com/wp-content/uploads/2021/12/mp-screenshot-faq-3.png?w=650)

---

#### Does Minimum Periods work with other product types?

Not by default – It is possible to add other product types (e.g. simple, external etc.) to show minimum periods meta information on the following pages:

- The order confirmation page after successful payment
- The orders page on the customer’s my-account area
- The subscription page on the customer’s my-account area

Note: The minimum periods for these product types cannot be set on a per-product basis. Instead, it will use the global settings found under **WooCommerce > Settings > Subscriptions > Cancelling > Default Minimum Period(s).**

---

#### Does Minimum Periods work with All Products for WooCommerce Subscriptions?

Yes and no – [All Products for WooCommerce Subscriptions](https://woocommerce.com/products/all-products-for-woocommerce-subscriptions/) adds subscription functionality to non-subscription products (e.g. simple, variation, bundle). At the moment, our plugin does not add extra options to configure minimum periods on a per-product basis for non-subscription products.

It is, however, possible to use the global minimum periods (as configured under **WooCommerce > Settings > Subscriptions > Cancelling > Default Minimum Periods**) for non-subscription products that have a subscription plan (powered by All Products for WooCommerce Subscriptions). To show the minimum / paid period(s), please use the following code snippet:

```
add_filter( 'mpws_product_types', 'mpws_add_product_types', 5, 1 );

function mpws_add_product_types( $mpws_allowable_product_types ) {
	$mpws_allowable_product_types[] = "simple";
	return $mpws_allowable_product_types;
}
```

You can change 
```
simple
```

 in the code above to match the product types you’d like to see minimum periods for. For a list of pages where these minimum periods are shown, please refer to the question above.

---

#### Is it possible to show the minium terms/periods for the subscription on the single product page?

Yes – Version 2.3 allows shop owners/managers to display the period to be show on the single product page. To enable this, ensure the checkbox found under  **WooCommerce > Settings > Subscriptions > Cancelling > Show in Product Pages** are selected.

Please note the following limitations:

- The minimum periods will only be shown for 
```
Simple Subscription
```

 products. At the moment, 
```
Variable Subscription
```

 products are not supported.
- The minimum periods will show about up above the add-to-cart button on the single product page.

---

#### Is it possible to show the minium periods for the subscription on the cart/checkout pages?

Yes – Version 2.3 allows shop owners/managers to display the periods for each subscription product as line-item meta information on the cart/checkout page. This information is visible below the product title on order overview section.

---

#### Is this compatible with HPOS (High Performance Order Storage)?

Yes – Version 2.2 declares compatibility with HPOS.

---

#### Is this compatible with the new Cart / Checkout Block for Gutenberg?

Yes – Version 2.3 adds support for both the new cart / checkout block experience in WooCommerce while maintaining support for the traditional shortcode method.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis.
				![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to content/products and member discounts.

---

