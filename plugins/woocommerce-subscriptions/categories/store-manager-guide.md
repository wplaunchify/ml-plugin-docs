# Store Manager Guide

*Category from WooCommerce Subscriptions documentation*

---

## Subscriptions General Settings

**Source:** [https://woocommerce.com/document/subscriptions/store-manager-guide/](https://woocommerce.com/document/subscriptions/store-manager-guide/)

# Subscriptions General Settings

			Once installed, WooCommerce Subscription extension settings can be found and set at **WooCommerce > Settings > Subscriptions**. This guide explains each section of settings and what it controls:

- [Button Text Settings](#button-text-settings)
- [Role Settings](https://woocommerce.com/document/subscriptions/store-manager-guide/#role-settings)
- [Miscellaneous Settings](https://woocommerce.com/document/subscriptions/store-manager-guide/#misc-settings)
- [Renewals Settings](https://woocommerce.com/document/subscriptions/store-manager-guide/#renewals-settings)
- [Gifting Settings](#gifting-settings)
- [Downloads Settings](#downloads-settings)
- [Synchronized Renewals Settings](https://woocommerce.com/document/subscriptions/store-manager-guide/#synchronization-settings)
- [Switch Settings](https://woocommerce.com/document/subscriptions/store-manager-guide/#switch-settings)
- [Subscriptions Shortcode](https://woocommerce.com/document/subscriptions/store-manager-guide/#subscription-shortcode)

![](https://woocommerce.com/wp-content/uploads/2025/12/woodocs-2292.subscription-settings-screen.png?strip=all&w=704)Woo Subscriptions Settings Screen

## Button Text Settings

[↑ Back to top](#doc-title)

“Add-to-Cart” and “Place Order” buttons include the default text “Sign-Up Now” when a subscription product is being added to the cart or purchased. You can customize this text by using the boxes in this section to change the text that displays to your custom text. Here is where each of them appear:

- **Add to Cart Button Text** – on the store page and individual product page for subscription products.
- **Place Order Button Text** – at the bottom of the checkout page when the cart contains a subscription.

## Role Settings

[↑ Back to top](#doc-title)

Unlike non-subscription orders, a user **must**create an account on your store when signing up for a subscription. This is regardless of what is set in the [general WooCommerce Settings](https://woocommerce.com/document/configuring-woocommerce-settings/accounts-and-privacy/#guest-checkout-and-accounts). This is because a subscription is an [agreement between the store and the customer for future transactions](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/#subscriptions), therefore the customer’s information needs to be stored in an account on your store.

![WooCommerce Subscriptions Roles Settings](https://woocommerce.com/wp-content/uploads/2024/07/subscription-settings-roles.webp?strip=all&w=704)Role Settings

- **Subscriber Default Role** – choose the role assigned to customers when they create a subscription. By default, this is WordPress’ built-in *Subscriber* role.
- **Inactive Subscriber Role** – choose the role assigned to subscribers when their subscription expires, is canceled, or is suspended (by you, the payment gateway or the customer). By default, this is WooCommerce’s built-in *Customer* role.

If you sell memberships and want to add a “member” role, [WooCommerce Memberships](https://woocommerce.com/products/woocommerce-memberships/) may be a good option for you.  Memberships also allows setting different per-product permissions for users.

## Miscellaneous Settings

[↑ Back to top](#doc-title)

Miscellaneous settings is a group of options that adjusts various specialized behavior of Subscriptions. Let’s take a look at each:

![Miscellaneous Subscription Settings](https://woocommerce.com/wp-content/uploads/2024/07/subscription-settings-miscellaneous.webp?strip=all&w=704)Miscellaneous Subscription Settings

### $0 Initial Checkout

[↑ Back to top](#doc-title)

This allows for a subscription product with a $0 initial payment to be purchased **without** providing a payment method. This is helpful if you offer a free trial on a subscription product and don’t want to force your customers to add a payment method right away. At the end of a free trial period, customers will need to add a payment method to continue their subscription.

### Drip Downloadable Content

[↑ Back to top](#doc-title)

By default, after a customer has purchased a downloadable subscription product, they will be able to download any files associated with that product from their *My Account* page for as long as the [subscription is active](https://woocommerce.com/document/faq/#section-39). However, you may also wish to provide existing subscribers with access to new files.

**Woo Subscriptions provides two options to handle this situation:**

- **Default Setting:**This requires no change in settings. Adding files to a downloadable subscription product gives existing customers access to those files immediately.
- **Drip Downloadable Content:** With this setting activated (**checked tick**box), existing customers only receive access to new downloadable content after the next renewal is processed (know as *dripping*).

### Customer Suspensions

[↑ Back to top](#doc-title)

This setting either allows or limits the amount of [customer suspensions](https://woocommerce.com/document/subscriptions/customers-view/suspend-cancel-or-remove-an-item/) on a given subscription. You have three options, setting a maximum number of suspensions allowed, setting to unlimited, or deactivating the option entirely:

- **Maximum Number of Suspensions:** Set a maximum number of times a customer can suspend their account for each billing period. For example, with a subscription billed yearly, a value of 3 would mean that once a subscriber suspends their account 3 times that year, they cannot suspend their account again until the next billing year.
- **Unlimited:**Instead of a number, set the amount to the word “unlimited” to allow any number of customer suspension during the billing period.
- **Deactivate:**By default, customer suspensions are set to 0, which turns off the customer suspension feature completely (no suspensions allowed).

Store managers can **always** suspend an active subscription. If you’re a store manager looking at a test subscription on your *My Account* page and wondering why you still see the **Suspend** button, it’s because you’re an administrator. Users with a customer or other role will not see this button.

### Mixed Checkout

[↑ Back to top](#doc-title)

Activate **Mixed Checkout** to allow a subscription product to be purchased with other products in the same transaction. It includes simple, variable and other non-subscription products as well as[multiple different subscription products](https://woocommerce.com/document/subscriptions/multiple-subscriptions/).

Activating this feature makes it easier for customers to buy more from your store, and to include subscription products in bundles created with extensions such as[Product Bundles](https://woocommerce.com/products/product-bundles/). Because of this, it is on by default and is only disabled if manually unchecked.

With the default setting enabled, here’s how a mixture of products would appear on the cart and checkout pages:

**Cart page:**

![](https://woocommerce.com/wp-content/uploads/2024/07/MixedCheckoutCart.png?strip=all&w=704)

Subscriptions and no-subscriptions in cart with mixed checkout enabled.

**Checkout page:**

![](https://woocommerce.com/wp-content/uploads/2024/07/mixedcheckout.png?strip=all&w=704)

**Displaying a Notice to Customers when Mixed Checkout is Deactivated**:

When [Mixed Checkout is disabled](https://woocommerce.com/document/subscriptions/store-manager-guide/#mixed-checkout), if a customer adds a subscription product to the cart and the cart already contains a non-subscription product or products, the subscription products will be removed.

As the customer is redirected immediately to the cart, no notice will be displayed.

The following code will add a message on checkout to indicate to the customer that a product or products have been removed. To use the code, you can install and activate it as a [plugin](http://codex.wordpress.org/Managing_Plugins) on your site.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  | /** |
|  | * Plugin Name: WooCommerce Subscriptions Product Removed Message |
|  | * Description: Display a notice on checkout when a product was removed from the cart after a subscription was added. |
|  | * Author: Gerhard Potgieter & Brent Shepherd |
|  | * Author URI: |
|  | * Version: 1.1 |
|  | * License: GPL v2 |
|  | */ |
|  |  |
|  | /** |
|  | * Set a flag to indicate that the error message needs to be displayed. We can add the message to the $woocommerce global |
|  | * yet because it will be removed by Subscriptions later on the 'add_to_cart_redirect' hook. |
|  | */ |
|  | function eg_set_product_removed_message( $valid, $product_id, $quantity ) { |
|  | global $woocommerce, $eg_set_product_removed_message; |
|  |  |
|  | if ( $woocommerce->cart->get_cart_contents_count() > 0 && WC_Subscriptions_Product::is_subscription( $product_id ) ) { |
|  | $eg_set_product_removed_message = $woocommerce->cart->get_cart_contents_count(); |
|  | } |
|  |  |
|  | return $valid; |
|  | } |
|  | add_filter( 'woocommerce_add_to_cart_validation', 'eg_set_product_removed_message', 9, 3 ); |
|  |  |
|  | /** |
|  | * If the product removed flag is set, now we can add the message. |
|  | */ |
|  | function eg_show_product_removed_message( $url ) { |
|  | global $woocommerce, $eg_set_product_removed_message; |
|  |  |
|  | if ( isset( $eg_set_product_removed_message ) && is_numeric( $eg_set_product_removed_message ) ) { |
|  | wc_add_notice( sprintf( _n( '%s product has been removed from your cart. Products and subscriptions can not be purchased at the same time.', '%s products have been removed from your cart. Products and subscriptions can not be purchased at the same time.', $eg_set_product_removed_message, 'wcsprm' ), $eg_set_product_removed_message ), 'error' ); |
|  | } |
|  |  |
|  | return $url; |
|  | } |
|  | add_filter( 'add_to_cart_redirect', 'eg_show_product_removed_message', 11, 1 ); |
      [view raw](https://gist.github.com/thenbrent/7254185/raw/19ce767cf9f1e5724df69e5c07fe3819ec1c8de3/wcs-product-removed-error-message.php)
        [wcs-product-removed-error-message.php](https://gist.github.com/thenbrent/7254185#file-wcs-product-removed-error-message-php)
        hosted with ❤ by [GitHub](https://github.com)

The notice will be displayed on checkout as shown here (*using the Storefront theme*):

![Product Removed Notice](https://woocommerce.com/wp-content/uploads/2012/06/faq_product_removed.png?strip=all&w=704)Product Removed Notice

### Retry Failed Payments

[↑ Back to top](#doc-title)

Disabled by default, toggling the setting to on activates [Failed Recurring Payment Retry System](https://woocommerce.com/document/subscriptions/failed-payment-retry/). The setting applies from that point onwards and does not affect payments that have already failed.

## Renewals Settings

[↑ Back to top](#doc-title)

The Renewals section of Subscription settings is home to options that govern key aspects of the renewal process.

The[subscription renewal process](https://woocommerce.com/document/subscriptions/renewal-process/) is a fundamental component of Woo Subscriptions. To understand the intricacies of how renewal settings affect subscriptions and subscription payments, see [Subscription Renewal Process](https://woocommerce.com/document/subscriptions/renewal-process/).

Let’s take a look at the different settings:

![Subscription Renewal Settings](https://woocommerce.com/wp-content/uploads/2024/07/subscription-settings-renewals.webp?strip=all&w=704)Subscription Renewal Settings

### Manual Renewal Payments

[↑ Back to top](#doc-title)

It’s possible to accept subscription payments via payment gateways that do not support [automatic recurring payments](https://woocommerce.com/document/subscriptions/renewal-process/#section-3).

If you enable the “Accept Manual Renewals” setting, it offers all active payment gateways as a payment option when purchasing a subscription. Not just gateways that support Subscriptions. If a customer chooses to pay via a payment gateway that does not support[automatic payments](https://woocommerce.com/document/subscriptions/payment-gateways/), then the subscription will use the[manual renewal process](https://woocommerce.com/document/subscriptions/renewal-process/#section-4).

To accept manual payments:

1. **Go**to **WooCommerce > Settings > Subscriptions**.
2. **Tick** the **Accept Manual Renewals** option.

For a list of payment gateways that support automatic and manual payments, see [Subscription Payment Gateways](https://woocommerce.com/document/subscriptions/payment-gateways/). For more information about the difference between automatic and manual renewal payments, see[Subscription Renewal Process](https://woocommerce.com/document/subscriptions/renewal-process/).

After turning on manual renewals, the setting only applies to new orders. Existing orders with an automatic payment system setup will continue to have renewal payments charged automatically.

### Turn off automatic payments

[↑ Back to top](#doc-title)

By default,[manual renewals](https://woocommerce.com/document/subscriptions/renewal-process/) are only used for payment gateways that cannot process automatic payments.

If you do not want new customers to be automatically charged for a subscription renewal payment, even when the payment gateway used to purchase the subscription can process automatic payments, you can deactivate automatic payments.

To turn off automatic payments:

1. Go to **WooCommerce > Settings > Subscriptions**.
2. Select **Accept Manual Renewals**.
3. Select**Turn off Automatic Payments** when it appears.
4. **Save changes**.

![](https://woocommerce.com/wp-content/uploads/2024/07/subscription-settings-renewals-turn-off-automatic-payments.webp?strip=all&w=704)Turn off automatic payments

After turning off automatic payments, manual renewal will only apply to new subscriptions. Any existing subscriptions using automatic payments will continue to have renewal payments charged automatically. Similarly, if automatic payments are disabled but then enabled, existing subscriptions using manual renewals will continue rather than switch to automatic renewal. To change a subscription’s payment method, see[Changing a subscription from automatic to manual renewal payments](https://woocommerce.com/document/change-subscription-from-automatic-to-manual-payments/).

### Auto Renewal Toggle

[↑ Back to top](#doc-title)

By default, Subscriptions via a[payment gateway that allows automatic renewals](https://woocommerce.com/document/subscriptions/payment-gateways/) is set to automatically renew, unless automatic payments are deactivated. The “Auto Renew” toggle allows subscribers to easily turn off the auto-renewals and switch to manual renewals from their My Account page.

To enable the toggle switch:

1. Go to **WooCommerce > Settings > Subscriptions**.
2. Enable the **Display the auto renewal toggle** setting.
3. **Save changes**.

### Early Renewal

[↑ Back to top](#doc-title)

**Accept early renewal payments setting** – Enables a customer to manually renew a subscription ahead of schedule. The normal renewal interval remains unaffected. For example, if a monthly subscription renews on the 15th of every month, and a customer renews it on the 7th instead, next month it will renew on the 15th again.  If a subscription as no expiry set, a customer would be able to renew (and extend) a subscription indefinately.

**Accept Early Renewal Payments via a Modal** – When check in addition to the above, a modal overlay opens the **My Account > View Subscriptions** page and allows a customer to renew the subscription without the need to go through the full checkout process.

![A view of the renewals modal that bypasses the default checkout page](https://woocommerce.com/wp-content/uploads/2024/07/subscription-settings-renewals-overlay.webp?strip=all&w=704)A view of the renewals modal that bypasses the default checkout page

Once payment is completed, the modal closes and message is displayed at the top of the screen. The customer stays in the My Account area.

![The appearance of a subscription that was successfully renewed via the modal overlay](https://woocommerce.com/wp-content/uploads/2024/07/subscription-settings-renewals-overlay-success.webp?strip=all&w=704)The appearance of a subscription that was successfully renewed via the modal overlay

## Gifting Settings

[↑ Back to top](#doc-title)

The gifting feature makes it possible for one person to purchase a subscription product for someone else. It then shares the subscription between the purchaser and recipient for the rest of its life-cycle. Customers can choose to purchase subscriptions for others by entering the recipient’s email address on the single product page, cart, or checkout pages.

After a subscription has been purchased, Gifting will manage onboarding the recipient to set up an account with the store.

### Global Settings

[↑ Back to top](#doc-title)

![Subscription Gifting Settings](https://woocommerce.com/wp-content/uploads/2020/07/woocommerce-subscriptions-gifting-settings.png?strip=all&w=704)

You can enable Subscription Gifting globally from your store’s WP Admin dashboard, by navigating to *WooCommerce > Settings > Subscriptions* and:

1. Scroll down to **Gifting Subscriptions**.
2. Enable gifting by checking the *Allow shoppers to gift a subscription* checkbox.
3. You can choose for it to be **Enabled for all products** or **Disabled for all products** by default. The option can be [overridden for each product](https://woocommerce.com/document/subscriptions/creating-subscription-products/#gifting).
4. Enter text into the **Gifting Checkbox Text** field. This label text is displayed next to the checkbox on the Single Product, Cart, and Checkout pages. By default, the label text is “This is a gift”, but you may change this to a phrase that suits your store.
5. Optional: Tick the **Downloadable Products** checkbox to allow both the purchaser and recipient access to downloadable subscription products. Learn more about this setting in the [Gifting Downloadable Products](#downloadable-products) section.
6. Click **Save changes**.

### Gifting Downloadable products

[↑ Back to top](#doc-title)

WooCommerce Subscriptions includes special handling for downloadable products purchased as a gift.

When a downloadable product is purchased for a recipient, by default, the recipient is granted the permissions to download the files attached to that product. It is also possible to grant download permissions to both the recipient and the purchaser.

To enable dual permissions:

1. Go to the *WooCommerce > Settings > Subscriptions* administration screen
2. Scroll down to the **Gifting Subscriptions** section
3. Click **Downloadable Products** to enable or disable dual permissions

Similar to the normal process for downloading files, recipients can download the files they have been granted access to from the **My Account** page and the *My Account > View Subscription* page.

## Downloads Settings

[↑ Back to top](#doc-title)

WooCommerce Subscription Downloads enables you to offer downloadable products to your subscribers, while maintaining individual listings for each of your downloadable products, having them sold individually via your store, as well as via the subscription.

It adds one new field to your downloadable products, in the **Product Data** meta box. Once your subscription product is in place, you can search for it in the new Subscriptions field that appears when adding your **Downloadable** product.

You can also connect a downloadable product to multiple subscriptions in your store.

### Enable Downloadable File Sharing

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/03/wcs-download-settings-1_3b5290.jpg?strip=all&w=704)

You can enable downloadable file sharing in the Subscriptions settings by navigating to *WooCommerce > Settings > Subscriptions* and:

1. Scroll down to the **Downloads** section.
2. Enable this feature by checking the **Enable downloadable file sharing** checkbox.
3. Click **Save changes**.

### Show Shared Downloadable Products in Subscription Details

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/03/wcs-download-settings-2.jpg?strip=all&w=704)

This setting controls whether linked downloadable products appear as free line items within subscription details.

When enabled, shared downloadable products appear as free items to you and the subscriber on a subscription. Disable to improve the performance of subscription-related processes and pages, especially if you have multiple downloadable products linked to a subscription product.

When **disabled**, linked downloadable products are **not** added as line items. However:

- Download permissions are still granted via the permissions table
- Downloads remain visible in the Downloads section of the subscription view page
- Customers can still access their downloads from My Account > Downloads

## Synchronization Settings

[↑ Back to top](#doc-title)

To align subscription renewal dates to a specific day of the week, month or year, enable **Synchronize Renewals**. Much like the settings to switch subscriptions, Subscription Synchronization has specific criteria and options that require its own guide – [Renewal Synchronization](https://woocommerce.com/document/subscriptions/renewal-synchronisation/).

## Switch Settings

[↑ Back to top](#doc-title)

Customers are able to switch between variable subscription options or grouped subscription products if this setting is enabled. This process has a its own set of nuances that are best explained in a separate guide – [Store Manager’s Guide to Subscription Switching](https://woocommerce.com/document/subscriptions/switching-guide/#section-2).

## Subscriptions shortcode

[↑ Back to top](#doc-title)

To display a list of subscriptions on pages other than the customer **My Account** page, add the 
```
[subscriptions]
```

 [shortcode](https://codex.wordpress.org/Shortcode) to a page or post.

### Shortcode Arguments

[↑ Back to top](#doc-title)

Optional Subscriptions shortcode arguments:

- ```
user_id
```

: show only subscriptions owned by a user with this ID (default: 
```
0
```

, the currently logged in user).
- ```
status
```

: show only subscriptions with this status. Can be 
```
active
```

, 
```
on-hold
```

, 
```
cancelled
```

, 
```
switched
```

 or 
```
all
```

 (default: active).

### Example usage

[↑ Back to top](#doc-title)

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | [[subscriptions]] |
| --- | --- |
|  | [[subscriptions user_id="33"]] |
|  | [[subscriptions status="all"]] |
|  | [[subscriptions user_id="42" status="all"]] |
      [view raw](https://gist.github.com/raicem/c82dc395e22cd882ec871bf31ea0b5eb/raw/1abd9a56f60f00657328eac89df68d1e162e51e8/subscriptions-shortcode-examples.php)
        [subscriptions-shortcode-examples.php](https://gist.github.com/raicem/c82dc395e22cd882ec871bf31ea0b5eb#file-subscriptions-shortcode-examples-php)
        hosted with ❤ by [GitHub](https://github.com)

More at: [How to Use Shortcodes](https://woocommerce.com/document/woocommerce-shortcodes/#how-to-use-shortcodes).

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

## Subscription Reports

**Source:** [https://woocommerce.com/document/subscriptions/store-manager-guide/reports/](https://woocommerce.com/document/subscriptions/store-manager-guide/reports/)

# Subscription Reports

			With the release of WooCommerce 4.0 in March 2020, the [WooCommerce Reports](https://woocommerce.com/document/reports/) administration screen is deprecated and won’t receive further updates. For more advanced Subscription Reporting, a tool like [Metorik](https://metorik.com/features/subscriptions) can be used.

[Woo Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) adds a subscription Reports section to the [WooCommerce Reports](https://woocommerce.com/document/reports/) administration screen. Reports in this section provide a number of insights about your subscription store that cannot be easily found in other sources.

This guide provides an overview of the Subscriptions Reports feature. It is intended to provide store managers with non-technical details about reports, details how the report derives insight, and why the report is useful.

## Viewing Reports

[↑ Back to top](#doc-title)
To view the Subscriptions Reports:

1. Go to **WooCommerce > Reports**.
2. Click the **Subscriptions** tab.
3. Click the name of the report you wish to view from the list.

## Subscription Events by Date Report

[↑ Back to top](#doc-title)
The Subscription Events by Date report displays aggregated data for the most important events that occur during the lifecycle of your subscriptions, like sign-ups, renewals and cancellations. This data can be displayed over a number of predefined durations, like current year, current month, last month or last 7 days. They can also be displayed over a custom date range.

The following data is displayed in the Subscription Events by Date report:

- **Sign-up Revenue**: the total value for orders placed to purchase subscription products during the period (subscription parent orders). The order totals can include sign-up fees, recurring amounts charged at sign-up, as well as amounts for other items, fees, taxes and shipping. Only orders with a paid status, like *processing*, *completed* or *on-hold*, are taken into account.
- **Renewal Revenue**: the total value of automatic or manual renewal orders created for subscriptions. The order totals can include fees, taxes and shipping. Only orders with a paid status, like *processing*, *completed* or *on-hold*, are taken into account.
- **Resubscribe Revenue**: the total value for orders placed to [resubscribe](https://woocommerce.com/document/subscriptions/renewal-process/#section-9) to existing subscriptions during the period. The order totals can include other items, fees, taxes and shipping. Only orders with a paid status, like *processing*, *completed* or *on-hold*, are taken into account.
- **New Subscription**: the number of new subscriptions created during this period, either by being [manually created by a store manager](http://docs.woothemes.com/document/subscriptions/add-or-modify-a-subscription/), [bulk imported](https://github.com/Prospress/woocommerce-subscriptions-importer-exporter) or a customer placing an order via the store.
- **Subscription Signups**: the number of new subscriptions created during this period by customers placing an order in the store, which now have a paid order status. This does not include subscriptions [manually created by a store manager](http://docs.woothemes.com/document/subscriptions/add-or-modify-a-subscription/).
- **Subscription Resubscribes**: the number of [resubscribe orders](https://woocommerce.com/document/subscriptions/renewal-process/#section-9) created during this period by customers placing an order in the store, which now have a paid order status.
- **Subscription Renewals**: the number of automatic or manual renewal orders created for a subscription with a paid status, like *processing*, *completed* or *on-hold*.
- **Subscription Switches**: the number of [upgrade, downgrade or cross-grade](https://docs.woothemes.com/document/subscriptions/switching-guide/) events recorded by a customer placing an order in the store. Only orders with a paid order status are taken into account.
- **Subscription Cancellations**: the number of subscriptions cancelled by the customer or store manager. The subscriptions may not have actually ended yet, as the pre-paid term may continue into the future, which is why the cancellation count may differ to the ended count.
- **Subscription Ended**: the number of subscriptions which have either the *expired* or *cancelled* status.
- **Current Subscriptions**: the number of subscriptions that have not ended for the given period. This is all subscriptions with an end date after the current period’s date and a status other than *pending* or *trashed*. For example, if a chart shows 3 periods: January 1st, 2nd and 3rd, and the store has 10 subscriptions on the 1st of January with status of active, then 5 of those end on the 3rd of January, there will be 10 *Current Subscriptions* on the 1st and 2nd January and 5 on the 3rd of January. The number shown in the report’s legend is the total at the end of the chart’s period.
- **Net Gain/Loss**: the difference between the unended subscriptions at the start and end of a given period. This provides a measure for your store’s *churn*.

This report makes it possible to review historical trends across many different metrics for the subscription component of the store.

![Subscription Report Screenshot: Subscription Events by Date ](https://woocommerce.com/wp-content/uploads/2016/09/report-subscription-events-by-date.png?w=950)Subscription Events by Date Report
## Upcoming Recurring Revenue Report

[↑ Back to top](#doc-title)
The Upcoming Recurring Revenue report provides a basic forecast for your subscription revenue.

The report determines the number of renewal events that will occur during a given period of time in the future. It does this by looking at the next payment date, billing period and interval for each of your active subscriptions and determining how many payments will occur before the end of the report’s duration, or the subscription’s end date, whichever comes first.

It’s important to note that:

- only currently *active* subscriptions are used in these calculations, no attempt is made to forecast new sign-ups based on the store’s growth rate;
- the calculations assume all scheduled future payments will be processed without failure; and
- the calculations assume that the subscription will not be *cancelled* or *suspended* to prevent any scheduled payments being processed.

For these reasons, the upcoming recurring revenue forecasts should be treated as a guide only and not used as the basis for important business decisions.

![Subscription Report Screenshot: Upcoming Recurring Revenue Report](https://woocommerce.com/wp-content/uploads/2016/09/report-upcoming-recurring-revenue.png?w=950)Upcoming Recurring Revenue Report
For this report, the report’s time period covers the future, whereas other WooCommerce and Subscription reports cover the past.
## Retention Rate Report

[↑ Back to top](#doc-title)
> Retention is the foundation of growth; without keeping your existing users, you’re always filling a leaky bucket.

The Subscription Events by Date report displays churn over time. However, it does not provide any insight into the average length of your subscriptions.

The Retention Rate report fills this gap by displaying the current lifespan for the subscriptions in your store.

This report is very helpful for revealing hotspots for churn. For example, you may see a large drop after 6 months. Identifying these churn hotspots makes it possible to proactively address them. For example, an email could be sent during the 5th month before that 6 month drop to open a conversation with subscribers before they decide to cancel.

Unlike other Subscription reports, the Retention Rate report does not provide a way to customise the timespan. Instead, it will always use the entire lifetime of all subscriptions in your store.

![Subscriber Retention Rate Report](https://woocommerce.com/wp-content/uploads/2016/09/report-retention-rate.png?w=950)Subscriber Retention Rate Report
### Subscription Lifespan

[↑ Back to top](#doc-title)
The *lifespan* for a subscription is the total time between when it is first created and when it ends, either by cancellation or expiration. Subscriptions doesn’t take into consideration how long the subscription is *active* or *on-hold* during these two points. It does not record that data.

For example, a subscription that is created on 1st January 2016 and expires on 1st January 2017 has a lifespan of 12 months, regardless of whether it is *on-hold* for some of those months.

The lifespan also accounts for how the subscription ended. If the subscription was canceled, the cancellation date is used as the end of its lifespan. This is usually before the subscription’s actual *end date*, but it is a more accurate representation of retention, as it indicates when the customer decided to end the subscription, not when the prepaid term came to an end.

For example, an annual subscription created on 1st January 2016 and cancelled on 2nd July has a lifespan of 6 months, even though the end date is 1st January 2017, the end of the prepaid term.

### Retention Period for X-Axis

[↑ Back to top](#doc-title)
The period used to plot the lifespan of your subscriptions on the x-axis depends on the length of the longest subscription lifespan in your store.

If any subscription in your store has a lifespan over one year, the chart will plot retention by month. If a subscription has a lifespan of more than 6 months but not more than a year, it will plot it using weeks, otherwise, it will use days.

### Unended Base Point

[↑ Back to top](#doc-title)
The Retention Rate chart uses the number of subscriptions that have not yet ended as the base point for the y-axis, rather than a 0 base. This helps to exaggerate changes in the chart.

## Subscriptions by Product Report

[↑ Back to top](#doc-title)
The Subscriptions by Product report provides an overview of the popularity and revenue for your subscription products and subscription product variations. Specifically, this report details:

- **Subscription Counts by Product**: Number of subscriptions that include this product as a line item and have a status other than pending or trashed.
- **Average Recurring Line Total by Product**: Average line total for this product on each subscription.
- **Average Lifetime Value for each Product**: Average line total for this product line item across subscription orders. This is determined by combining the line total for this product on both renewal and initial orders then dividing by the total number of non-pending subscriptions for that product.

Revenue from subscription products is based on the line total for each product on each order: both sign-up orders and renewal orders. It does not include shipping, fees or other amounts recorded in order totals.

Subscription product variations are also included in the*‘Subscription Product’*column. Variations can be identified by a leading hyphen and will be located directly below the corresponding parent product.

![Subscriptions by Product Report](https://woocommerce.com/wp-content/uploads/2016/09/product_reports.png?strip=all&w=704)Subscriptions by Product Report
If you’re unfamiliar with differences between a subscription and subscription product, refer to the [Subscription Product vs Subscription](https://docs.woothemes.com/document/subscriptions/subscription-product-vs-subscription/) guide.
## Subscriptions by Customer Report

[↑ Back to top](#doc-title)
The Subscriptions by Customer report provides an overview of your most loyal and valuable customers.

This report provides a breakdown of:

- **Active Subscriptions**: Number of subscriptions this customer has with a status of active or pending cancellation.
- **Total Subscriptions**: Number of subscriptions this customer has with a status other than pending or trashed.
- **Total Subscription Orders**: Number of signup, switch and renewal orders this customer placed at your store with a paid status (i.e. processing or complete).
- **Average Lifetime Value**: Total value of this customer’s signup, switch and renewal orders. This includes fees, tax and shipping line items on those orders.

![Subscriptions by Customer Report](https://woocommerce.com/wp-content/uploads/2016/09/report-subscriptions-by-customer1.png?w=950)Subscriptions by Customer Report
## Failed Payment Retries Report

[↑ Back to top](#doc-title)
The Failed Payment Retries report provides an overview of the attempts to automatically retry recurring payments that previously failed via the [Subscriptions’ Retry System](https://woocommerce.com/document/subscriptions/failed-payment-retry/).

This report details:

- **Recovered Renewal Revenue**: Total revenue, including tax and shipping, recovered with the failed payment retry system by successfully processing payment on a renewal order that previously failed.
- **Renewal Orders**: Number of renewal orders with a failed payment and then managed by the retry system to attempt to recover revenue for this order.
- **Successful Retry Attempts**: Number of retry attempts to process a payment that previously failed.
- **Failed Retry Attempts**: Number of retry attempts for this period that did not result in successful payment. Default retry rules include 5 retry attempts for each failed payment, so it is common for this number to be larger than the number of renewal orders and successful retry attempts.
- **Pending Retry Attempts**: Number of retry attempts not yet processed. For any pending retries to be displayed in this report, you need to choose a custom date range and include a date in the future as pending retries are only ever in the future.

![Recurring Failed Payment Retries Report](https://woocommerce.com/wp-content/uploads/2016/09/report-failed-payment-retries.png?w=950)Recurring Failed Payment Retries Report
This report is only available when the [Failed Payment Retry System](https://woocommerce.com/document/subscriptions/failed-payment-retry/) is enabled.
## WooCommerce Status Widget

[↑ Back to top](#doc-title)
In addition to data on the **WooCommerce > Reports** administration screens, Subscriptions also adds data about subscription related events to the **WooCommerce Status** widget on the main [WordPress Dashboard](https://codex.wordpress.org/Dashboard_Screen).

Data in this widget includes the following for current calendar month:

- **Signup count**: New subscriptions purchased by customers placing an order in the store.
- **Renewal count**: Number of manual and automatic renewal orders created and currently with the status of *completed*, *processing*, *on-hold* or *refunded*.

![WooCommerce Status Widget with Subscription Signups and Renewals](https://woocommerce.com/wp-content/uploads/2016/09/woocommerce-status-widget-with-subscription-signup-and-renewals.png?w=950)WooCommerce Status Widget with Subscription Signups and Renewals
## FAQ

[↑ Back to top](#doc-title)
### How is report data cached?

[↑ Back to top](#doc-title)
Report data is cached to speed up the load time of the Reports. Report data is cached in the background to avoid slowing down page load times for your customers or other administrators. These requests are initiated via [WordPress’s Cron system](https://developer.wordpress.org/plugins/cron/). When and exactly how the report data is cached depends on the size of your site’s database.

On small sites with less than 3,000 subscriptions and 25,000 orders, the process to update the cache for report data is scheduled to be 5 minutes after any event that would invalidate the existing cache. The update process for each report is then separated 5 minutes to avoid running the resource intensive queries on your site’s database at the same time. This means the cache of report data may fall out-of-sync by up to 30 minutes with the site’s current data.

On sites with more than 3,000 subscriptions or 25,000 orders, the cache is only updated once per day. This update begins at 4am in your site’s timezone. The cache update process for each report is separated 15 minutes to avoid running all the resource intensive queries on your site’s database, which can potentially lead to the database being inaccessible via other requests. This means report data may be as much as 24 hours out-of-date on larger sites.

If your site is using the later method, a notice indicating this will be displayed at the top of the Report page.

![Subscriptions Reports Cache Update Notice](https://woocommerce.com/wp-content/uploads/2016/09/subscriptions-report-cache-update-notice.png?w=950)Subscriptions Reports Cache Update Notice
### How can I disable report cache updates?

[↑ Back to top](#doc-title)
On larger sites with over a hundred thousand rows in the posts table, which generally means over 100,000 orders, subscriptions or other WordPress post types, like blog posts or pages, the report queries may lead to MySQL errors, often seen by 502 Bad Gateway HTTP errors.

To avoid these errors without having to fine tune MySQL, you can [disable report cache updates](https://github.com/Prospress/woocommerce-subscriptions-disable-report-cache-updates) using the free plugin [here](https://github.com/Prospress/woocommerce-subscriptions-disable-report-cache-updates). This prevents the queries running automatically in the background to update the report data. The database queries will still run when loading the Reports page to generate the data.

These queries will be rewritten once WooCommerce and Subscriptions move to custom database tables to avoid having issues until having much larger databases.

### What is a “cache invalidating” event?

[↑ Back to top](#doc-title)
Cache updates are only run after a *cache invalidating* event. These are events which add, remove or modify some piece of data that is included in a report.

The events which invalidate the cache vary depending on the report. Example events are a new renewal payment, subscription status change or subscription upgrade/downgrade.

### Why do reports on custom time periods load more slowly than default time periods?

[↑ Back to top](#doc-title)
When loading reports for pre-defined time periods, like *Last Month*, cached data is used. However, when loading reports for customer time periods, like 18th January to 13th November, the report data must be generated. It is not feasible to cache report data for all possible time periods. This means viewing a report for a custom time period will often be slower than viewing a report for a pre-defined period.

### How do I get more advanced reporting?

[↑ Back to top](#doc-title)
To get access to additional reports or more fine grained control over reports, there are two options:

1. Use [Metorik reports for Woo Subscriptions](https://metorik.com/subscriptions). Connecting your store to Metorik provides reports for historical data, not just events which occur after connecting to Metorik.
2. Request the new reports or modifications to existing reports via the [Woo Subscriptions Ideas Board](https://woocommerce.com/feature-requests/woocommerce-subscriptions/). Features that get over 200 votes are added to the roadmap.

[← Woo Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

