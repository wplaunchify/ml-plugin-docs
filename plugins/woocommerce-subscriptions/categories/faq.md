# Faq

*Category from WooCommerce Subscriptions documentation*

---

## Subscriptions FAQ

**Source:** [https://woocommerce.com/document/subscriptions/faq/](https://woocommerce.com/document/subscriptions/faq/)

# Subscriptions FAQ

			[WooSubscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) is a premium extension, and this page has answers to commonly asked questions.

For technical questions about integrating software with Subscriptions, refer to the [Subscriptions Developer Docs](https://woocommerce.com/documentation/plugins/woocommerce/woocommerce-extensions/subscriptions/developer-docs/).

**Topics**

- **Subscriptions Features**
- **Subscription Product Management**
- **Subscription Management**
- **Orders Related to Subscriptions**
- **Shipping & Coupons**
- **Payment Gateways**
- **PayPal**
- **Store Manager or Administrator**
- **Compatibility**
- **Site Management**
- **Other Questions?**

## Subscriptions Features

[↑ Back to top](#doc-title)

### Can Subscriptions do [insert-feature]?

[↑ Back to top](#doc-title)

There are many great ideas for how to use a subscription to create a novel business model. It is great to see so much variety in the eCommerce world, but as Subscriptions is an off-the-shelf product, it can not possibly support every use case.

If you don’t see a feature discussed in this FAQ or listed in the [store manager guide](https://woocommerce.com/document/store-manager-guide/), then Subscriptions likely does not include that feature.

If you want a feature not already available, post the idea through the [Woo Subscriptions feature request page](https://woocommerce.com/feature-requests/woocommerce-subscriptions/). Once a feature gets enough votes, it will be added to Subscriptions. Features with higher votes are also be given priority.

If the feature you require doesn’t have broad appeal, the good news is, Subscriptions makes it possible for an expert WordPress or WooCommerce developer to add just about any feature. If you need an expert developer to add a feature to Subscriptions, consider working with a [WooExpert](https://woocommerce.com/customizations/).

### How can I ship physical products on a different schedule to the payment schedule?

[↑ Back to top](#doc-title)

To help manage shipping on subscriptions to physical goods, Woo Subscriptions [generates a renewal order](https://woocommerce.com/document/subscriptions/renewal-process/) for each payment. That means if you want to ship a product monthly, you should set the [payment schedule](https://woocommerce.com/document/subscriptions/store-manager-guide/#payment-schedule) to bill monthly.

Billing and shipping on different schedules is possible using the [AutomateWoo](https://woo.com/document/automatewoo/examples/subscription-workflows/pre-paid-subscriptions/) add-on.

Another option using only Subscriptions is to:

- charge the entire subscription’s amount as a sign-up fee
- set a $0 recurring amount
- set the billing period to the shipping interval
- set the length to be the total number of times the product will be shipped

![](https://woocommerce.com/wp-content/uploads/2020/04/faq_separate_billing_shipping.png?w=980)One-Year Subscription Shipping Monthly

There are downsides to this approach, including:

- The subscription price will be displayed as *$0 / month*
- A renewal order will be generated each month, with a *$0* total for the subscription. This order will be visible to the customer on their My Account page and optionally [emailed to the them](https://woocommerce.com/document/subscriptions/store-manager-guide/#section-22) each month (however, both the My Account and Email templates could be [changed to remove this](https://woocommerce.com/document/template-structure/)). Alternatively, you can also use [our mini plugin to disable renewal emails for ‘free’ ($0) renewals](https://gist.github.com/thenbrent/eec1d7a21e30066f6779).
- If [customer suspension is enabled](https://woocommerce.com/document/subscriptions/store-manager-guide/#customer-suspensions) and the customer suspends or cancels a subscription that uses this pricing model, they may not receive items for which they have already paid.
- You may need to [hide the Cancel](https://woocommerce.com/document/subscriptions/develop/remove-an-action-button/) button on the **My Subscriptions** table because if the customer cancels the subscription before the end of the term, no renewal orders will be generated, despite the customer already having paid for those renewals.

Furthermore, there is no method for having a recurring billing schedule that differs to the recurring shipping schedule (for example, a subscription which charges $50 every 3 months but ships every month).

For now, when using Woo Subscriptions, the best method for managing shipping is to **use the same payment schedule as the intended shipping schedule**.

That said, we are aware of this feature request and intend to offer it in a future version. If you need to ship on a different schedule, please [vote on the existing feature request](https://woocommerce.com/feature-request/subscriptions-that-ship-on-a-different-schedule-to-billing-e-g-pay-annually-ship-monthly/).

## Subscription Product Management

[↑ Back to top](#doc-title)

### How can I offer a subscription with a variable billing period?

[↑ Back to top](#doc-title)

To offer customers a choice of billing period on a subscription, you can use either:

- a [Grouped Product](https://woocommerce.com/document/managing-products/#section-4); or
- a [Variable Product](https://woocommerce.com/document/product-variations/)

#### Using a Grouped Product

To use a Grouped product to offer different payment billing schedules:

1. Create multiple *Simple subscription* products, each with different billing period
2. Add each subscription to a grouped product

Here is a screenshot of a grouped product with subscriptions at three different intervals: monthly, every 6 months and yearly.

![](https://woocommerce.com/wp-content/uploads/2020/04/subscriptions-faq-grouped-product.png?w=980)Variable Recurring Billing Periods on a Grouped Product

The [All Products for Woo Subscriptions](https://woocommerce.com/products/all-products-for-woocommerce-subscriptions/) plugin can be used to create a product that has both one time purchase options and subscription options within the same product

### How can I enable customers to add additional services to their subscription?

[↑ Back to top](#doc-title)

We have a use case that explains how to handle this scenario: a [coffee subscription with charitable donation](https://woocommerce.com/document/use-case-coffee-subscription/). This additional service will be included in the subscription and will automatically renew as part of the subscription.

### How can I enable customers to add a one-time addition to their subscription?

[↑ Back to top](#doc-title)

For example, you sell subscriptions for coffee; this month, you’d like to offer the ad-hoc option to add a bag of coffee at an additional price. It would only affect this one renewal of the subscription.

There is no straightforward way to handle this, and it requires customization. We recommend exploring [our development services](https://woocommerce.com/development-services/) to find a partner to assist you with this.

### Why are subscription payments charged late (or early) with PayPal?

[↑ Back to top](#doc-title)

Unfortunately, the above only applies to subscriptions where Woo Subscriptions controls the billing schedule. When creating a subscription with PayPal, PayPal takes control of the schedule for charging recurring payments.

### How is the minimum price for a variable subscription calculated?

[↑ Back to top](#doc-title)

When displaying a variable subscription’s price on the store page, Subscriptions displays a “*From: $x / period*” price. This the lowest possible price at which a customer can access a subscription.

Subscriptions uses a general rule to determine the cheapest variation: the **lowest initial price** for the **longest period**.

For example, if a variable subscription has the following 3 variations:

1. $5 per month
2. $5 every 3 months
3. $5 every 6 months

The 3rd option will be set as the lowest possible price because it is for the longest period.

For another example, if a variable subscription has the following 3 variations:

1. $5 per month
2. $10 per month with 1 week free trial
3. $50 per year with 1 month free trial

Again, the 3rd option will be set as the lowest possible price because it has the cheapest initial price, free, for the longest period, 1 month.

For these examples, this method makes sense, but it might seem confusing when selling variations at different prices and different billing period. For example, with two variations, *$5 / month* and *$20 / year*. In this case, the *$20 / year* subscription is cheaper on a daily basis over a 12 month period. However, the lowest possible price the customer can access the subscription for is *$5 / month*. Furthermore, if a customer only remains subscribed for 3 months, then they will pay a lower total price than the annual amount. As a result, the minimum price would be displayed as *$5 / month*.

#### What about the subscription length for variations?

If multiple variations have exactly the same price and billing period, Subscriptions will think each variation’s price is identical, even if the variations have different lengths.

For example, consider a variable subscription with the following 2 variations:

1. $5 / month for 1 month
2. $5 / month for 3 month

Subscriptions will think these two prices are identical. As a result, it will determine the minimum price based on the last variation which it checked, which is the variation with the highest ID.

So for this example, if the second variation has the higher ID, Subscriptions will display the variable subscription’s price string as *$5 / month*. If the first variation has the higher ID, the variable subscription product’s price would be displayed as *$5 for 1 month*.

### If a customer is subscribed to a downloadable product, do they have access to that product forever?

[↑ Back to top](#doc-title)

If you create a subscription product with downloadable files associated with it, the customer will only have access to the files while their subscription is *active* or *pending-cancel*.

If the subscription has *expired*, is *on-hold* or has been *cancelled*, the customer will not be able to download the files associated with the subscription.

The *Download expiry* field for the product should be left blank, i.e. **“Never”**. Otherwise, if say the Store Owner sets the expiry days to 30, but the Subscription renews every month, there may be some days where customers have an active sub but still cannot download the file.

### How can I create a subscription where customers pay the entire bill up-front?

[↑ Back to top](#doc-title)

To charge the entire subscription amount up-front, there are two options:

1. Create a subscription for 1 billing period, e.g. *$100 for 4 months* or *$120 for 6 months*
2. Make the subscription free for each recurring interval and charge the total amount in the sign up fee. e.g. *$0 / month for 4 months with a $100 sign up fee* or *$0 / month for 6 months with a $120 sign up fee*

The first option is most suitable when wanting to provide access to something (e.g. content) for a certain period of time.

The second option is most suitable when you want to [ship the subscription product each month](https://woocommerce.com/document/subscriptions/faq/#section-69) (so you want an order to be generated to manage shipping).

Combine one of these with a [variable subscription](https://woocommerce.com/document/store-manager-guide/#variable-subscriptions) and a [billing period attribute](https://woocommerce.com/document/faq/#section-12), and you can allow the customer to choose whether they pay up-front or monthly.

A better method to handle this situation is also a [popular feature request](https://woocommerce.com/forums/133476-woocommerce/suggestions/4286694). If you would like to see this added, please vote for that feature.

### How can I charge a payment at a custom interval?

[↑ Back to top](#doc-title)

Note: This is a **Developer level** doc. If you are unfamiliar with code/templates and resolving potential conflicts, select a [WooExpert or Developer](https://woocommerce.com/search/?collections=service) for assistance. We are unable to provide support for customizations under our [Support Policy](https://woocommerce.com/support-policy/).

Out of the box, Subscriptions allows you to charge a recurring payment on a billing interval of 1-6 i.e. every day, every 2nd day, every 3rd day etc.

![](https://woocommerce.com/wp-content/uploads/2020/04/subscriptions_faq_billing_intervals.png?w=980)Default Subscription Billing Intervals

If you want to charge payments on a different billing period, it is also possible to add your own with a little bit of code. For example, the plugin’s code shown below will add a *every 10th* billing interval. You can change the 
```
10
```

 to any number you require and install it as a [plugin](http://codex.wordpress.org/Managing_Plugins) on your site.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  | /** |
|  | * Plugin Name: Extend WooCommerce Subscription Intervals |
|  | * Description: Add a "every 10 weeks" billing interval to WooCommerce Subscriptions |
|  | * Author: Brent Shepherd |
|  | * Author URI: http://brent.io |
|  | * Version: 1.0 |
|  | * License: GPL v2 |
|  | */ |
|  |  |
|  | function eg_extend_subscription_period_intervals( $intervals ) { |
|  |  |
|  | $intervals[10] = sprintf( __( 'every %s', 'my-text-domain' ), WC_Subscriptions::append_numeral_suffix( 10 ) ); |
|  |  |
|  | return $intervals; |
|  | } |
|  | add_filter( 'woocommerce_subscription_period_interval_strings', 'eg_extend_subscription_period_intervals' ); |
      [view raw](https://gist.github.com/thenbrent/7237105/raw/77595558bdaf66429912cbb4184553b82c737f10/extend-subscription-intervals.php)
        [extend-subscription-intervals.php](https://gist.github.com/thenbrent/7237105#file-extend-subscription-intervals-php)
        hosted with ❤ by [GitHub](https://github.com)

### How can I customize subscription price strings?

[↑ Back to top](#doc-title)

There is currently a [free mini-plugin](https://github.com/Prospress/woocommerce-subscriptions-custom-pricestring) that will allow you to customize the price string from the admin area.

The price displayed for a subscription product and order totals for a subscription order can be customized by plugins.

If you are a WordPress developer, you can use the 
```
'woocommerce_subscription_price_string'
```

 and 
```
'woocommerce_subscriptions_product_price_string'
```

 filters along with the parameters passed to those filters, to customize the string.

### How can I offer a longer subscription length?

[↑ Back to top](#doc-title)

Out-of-the-box, Woo Subscriptions allows store managers to sell subscriptions that last only as long as the longest length supported by PayPal Standard. Detailed information for developers on these limitations can be found in the [PayPal developer documentation](https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/Appx_websitestandard_htmlvariables/#recurring-payment-variables).

![](https://woocommerce.com/wp-content/uploads/2020/04/faq-extended-36-months.png?w=980)Custom 36-Month Subscription Length

If you want to offer subscriptions for a different length, and you are not offering PayPal for payments, it may be possible to offer a custom length.

For example, the plugin below includes code that will offer a subscription that lasts for *36 months*. You can change the 
```
36
```

 to any number you require and install it as a [plugin](http://codex.wordpress.org/Managing_Plugins) on your site. However, please be aware, different payment gateways offer different possibilities for length. You will need to test this custom code thoroughly and although it is included here to help make the customization, Woo cannot provide support customizations. This code also requires Woo Subscriptions 1.4.4 or newer.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  | /** |
|  | * Plugin Name: WooCommerce Subscription Length Extender |
|  | * Description: Add a custom 36 month subscription length to WooCommerce Subscriptions (requires WC Subscriptions 1.4.4 or newer) to give the option of having a subscription expire after 36 months. |
|  | * Author: Brent Shepherd |
|  | * Version: 1.0 |
|  | * License: GPL v2 |
|  | */ |
|  |  |
|  | function eg_extend_subscription_expiration_options( $subscription_lengths ) { |
|  |  |
|  | $subscription_lengths['month'][36] = wcs_get_subscription_period_strings( 36, 'month' ); |
|  |  |
|  | return $subscription_lengths; |
|  | } |
|  | add_filter( 'woocommerce_subscription_lengths', 'eg_extend_subscription_expiration_options' ); |
      [view raw](https://gist.github.com/thenbrent/7605796/raw/830c3d8aa1082bb09e003e64577e01f3e5e61c81/extend-subscription-lengths.php)
        [extend-subscription-lengths.php](https://gist.github.com/thenbrent/7605796#file-extend-subscription-lengths-php)
        hosted with ❤ by [GitHub](https://github.com)

### Why can a subscription product not be deleted or have its type changed?

[↑ Back to top](#doc-title)

Subscription products can be trashed, but any subscription product that is associated with an order (i.e. has been purchased by a customer) can not be *permanently deleted* or have its product type changed. This is to prevent causing errors with WooCommerce and other WooCommerce extensions that expect a product to exist and remain a subscription product type when performing some of the operations related to a subscription, like processing renewal payments.

If you need to change a subscription product’s type or permanently delete a subscription product or subscription variation, you must first permanently cancel and delete all subscriptions which include that product as an item as well as any parent and renewal orders associated with that subscription product. If the subscription is already in either a ‘Cancelled’ or ‘Expired’ status, you must *Trash*and then*Permanently Delete* the subscription.

This applies to simple subscriptions, variable subscriptions and subscription variations.

![](https://woocommerce.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-28-at-12.47.04-pm.png?w=950)Subscription product type cannot be changed notice

![](https://woocommerce.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-28-at-12.48.44-pm.png?w=950)Subscription variation cannot be removed notice

## Subscription Management

[↑ Back to top](#doc-title)

### Will a scheduled subscription charge go through even if the order status is “on-hold”?

[↑ Back to top](#doc-title)

Yes, a scheduled subscription charge will still go through even when the [original order](https://woocommerce.com/document/subscriptions/orders/#section-1) used to purchase the subscription has a status of *on-hold*. A store manager needs to put the **subscription** *on-hold* to freeze payments on that subscription. More information about the differences between an order and a subscription can be found in this guide about the differences between [subscriptions and orders](https://woocommerce.com/document/subscriptions/orders/#section-1).

### How can I manually trigger a renewal payment (or a renewal order email)?

[↑ Back to top](#doc-title)

To trigger an off-schedule renewal and therefore trigger each step in the renewal process, like sending renewal order email, follow the steps outlined in the guide for [testing renewal payments using the WCS_DEBUG flag](https://woocommerce.com/document/testing-subscription-renewal-payments/).

### Why are dates displayed incorrectly?

[↑ Back to top](#doc-title)

You may find when viewing the [Manage Subscriptions](https://woocommerce.com/document/subscriptions/store-manager-guide/#section-12) page that some dates are displayed a few hours or more off the actual date. This usually means a plugin or custom code is changing your site’s timezone.

WordPress sets your site’s base timezone to **UTC/GMT** and Subscriptions expects that to be the site’s base timezone for calculating dates. However, on rare occasions, some plugins will change the base timezone.

To find the offending code, search your site’s files for the string: 
```
date_default_timezone_set
```

 and disable the plugin using that function

### How can I stop renewals temporarily?

[↑ Back to top](#doc-title)

If you want to temporarily disable renewals, including recurring payments, from being processed for a certain period of time, for example, while testing upgrades or running other maintenance tasks, use the [DISABLE_WP_CRON constant](http://codex.wordpress.org/Editing_wp-config.php#Disable_Cron_and_Cron_Timeout).

This will not work with **PayPal** or payment gateways which manage the billing schedule. It will work with Stripe, Authorize.net CIM, Braintree and almost all other payment gateways.

### What is the end_of_prepaid_term hook?

[↑ Back to top](#doc-title)

When a subscription is cancelled, either by the store manager or subscriber, its status will be changed immediately and no payments will be charged in the future. However, the customer has already paid for the subscription’s current term. For sites selling virtual subscriptions, like memberships, it’s important to provide access to the virtual good for the entire prepaid term.

The 
```
'scheduled_subscription_end_of_prepaid_term'
```

 hook accounts for that prepaid term. It is used by Subscriptions to assign the customer with [the default cancelled role](https://woocommerce.com/document/subscriptions/store-manager-guide/#role-settings) at the end of the prepaid term (if the customer does not have any other subscriptions). Other plugins like [Groups](https://woocommerce.com/products/groups-woocommerce/) also use it to allow access to memberships and other virtual products until the end of the term for which the customer has already paid.

For example, a customer purchases a monthly subscription on the 15th March. On the 25th of March, they then cancel the subscription. The subscription is cancelled immediately, but they have prepaid for one month of access, until the 15th April. Therefore, the 
```
'scheduled_subscription_end_of_prepaid_term'
```

 hook will be scheduled to run on the 15th of April. When that day arrives, the customer’s role will be changed to the [the default cancelled role](https://woocommerce.com/document/subscriptions/store-manager-guide/#role-settings) and any other plugins can change the customer’s status as required.

### Why are my customers being charged twice when a subscription renews?

[↑ Back to top](#doc-title)

This usually shows up as just one order on the live site, but the customer is billed twice through the payment gateway.

It’s almost always a staging or development site set to live mode. Here’s how to track down the problem:

- Check the duplicate order number to see if it exists on the live site. If it doesn’t, that’s proof that it came from another site.
- Check the links on the email confirmations to confirm the site URLs.
- Check the payment gateway dashboard – it should include a referring URL for the payment.

Alternatively, regenerate the payment gateway API key and update it on the live site. This would invalidate any API calls from the staging site and prevent double billing.

### Why do renewal orders automatically fail and the subscription’s status is changed to cancelled?

[↑ Back to top](#doc-title)

This usually means that manual orders have a time limit that is too short for offline payment gateways to process. If manual renewals are enabled and the store allows offline payments (e.g., with BACS or check), make sure you check the [Hold Stock](https://href.li/?https://docs.woothemes.com/document/subscriptions/renewal-process/#section-7)optio[n, as that will limit the time it takes](https://href.li/?https://docs.woothemes.com/document/subscriptions/renewal-process/#section-7) for the payment to happen.

If this doesn’t help, ensure the original subscription product has not been put into the trash. Removing a Subscription product or a Variable Subscription product’s variation will cause any Subscription renewals based on that Subscription to fail. When the order is created, there will be no item to add.

If you need to hide a subscription product, here’s a good way to handle it:

- On the product, set the 
```
Catalog Visibility
```

 to 
```
Hidden
```

 Instead of removing the product.
- Set the stock to 0 on the product. That way, if someone has a direct link to the product or it’s a variation, they can’t actually order it. But Subscriptions will still renew and set the stock to -1. As long as there is no custom code that configures stock, it will work.

1. 

## Orders Related to Subscriptions

[↑ Back to top](#doc-title)

### Why are subscriptions automatically cancelled after a parent order is cancelled?

[↑ Back to top](#doc-title)

WooCommerce 2.0 introduced a new *Hold stock* setting. This setting allows you to set a time limit, after which an unpaid, pending order will be cancelled. When an order used to purchase subscription products is cancelled, the subscription or subscriptions associated with that order are also cancelled. This means the *Hold stock* setting can lead to unexpected cancellation of subscriptions.

By default, WooCommerce will set the *Hold stock* setting value to 60 minutes. This doesn’t provide much time to pay for a renewal, however, so when installing or upgrading Subscriptions version 1.4 or newer, the default value is changed one week (10080 minutes). If you customer does not pay for the parent order within one week, the renewal order will be cancelled.

If you would like to provide your subscribers with a more or less generous payment period, just increase or decrease the time limit as needed. Or leave the value blank to disable this feature completely.

![Hold Stock Setting](https://woocommerce.com/wp-content/uploads/2012/06/faq_hold_stock.png?strip=all&w=704)Hold Stock Setting

Subscriptions are only cancelled when a *parent* order is cancelled. A subscription will not be cancelled automatically if a *renewal* order is cancelled.

### How do I link a renewal order to a subscription?

[↑ Back to top](#doc-title)

In cases where a site is restored from backup, it is possible that a renewal order is unlinked from the subscription.

To attach the renewal order back to the subscription, you’ll need to make changes in the database.

With Database access, there are two 
```
postmeta
```

 changes that need to be made:

Add a new row in the 
```
postmeta
```

 table with data:

- ```
post_id
```

 = existing order ID
- ```
meta_key
```

 = 
```
_subscription_renewal
```
- ```
meta_value
```

 = existing subscription ID

Then, force the site to regenerate the subscription renewal order cache by deleting the 
```
_subscription_renewal_order_ids_cache
```

 row which belongs to the existing subscription ID.

## Shipping & Coupons

[↑ Back to top](#doc-title)

### How is shipping calculated for physical product subscriptions?

[↑ Back to top](#doc-title)

If you’re selling a subscription to items that need shipping, shipping costs are added to the recurring payment. For example, a $5/month subscription with a $2 shipping fee would be $7/month.

If your subscription includes a free trial, shipping is free for that first period if no other products are purchased in the same transaction. To charge an up-front shipping fee for a subscription with a free trial, you can include a signup fee for the cost of shipping.

This system applies to all the shipping methods included with WooCommerce, including *Local Delivery*, *Local Pickup*, *International Shipping* and *Flat Rate* shipping. It also works for any additional shipping methods created by a WooCommerce extension, as long as the extension uses the appropriate WooCommerce features.

![Subscription Shipping Methods](https://woocommerce.com/wp-content/uploads/2012/06/subscriptionshipping-methods.png?strip=all&w=704)Subscription Shipping Methods

### 

### Why do I see an ‘Invalid recurring shipping method’ error when trying to checkout with my subscription products?

[↑ Back to top](#doc-title)

If you are seeing an “Invalid recurring shipping method” error, the most likely reason is that you have a plugin which isn’t compatible with Woo Subscriptions. Here are some troubleshooting steps you can take to identify the cause of the error:

1. Ensure [shipping is set up correctly on your site](https://woocommerce.com/documentation/plugins/woocommerce/getting-started/shipping/). If you can see shipping options for non-subscription products or when [one-time shipping is enabled](https://woocommerce.com/document/subscriptions/creating-subscription-products/#one-time-shipping), your shipping setup is probably correct.
2. If your shipping is set up properly, you probably have an incompatible plugin or theme feature. Try to isolate the error with a [test for conflicts on your site](https://woocommerce.com/document/how-to-test-for-conflicts/).
3. If you find a particular theme or plugin causing the problem, reach out the to product’s support team. They may be able to advise you on compatibility.
4. If you still are seeing this error even on built-in shipping methods after conflict testing, please [let us know](https://woocommerce.com/my-account/contact-support/) so we can help investigate.
5. 

## Payment Gateways

[↑ Back to top](#doc-title)

### Does Subscriptions support my payment gateway?

[↑ Back to top](#doc-title)

To see a complete overview of the official WooCommerce payment gateways which support Subscriptions, please read over the [Subscription Payment Gateways](https://woocommerce.com/document/payment-gateways/) guide.

If you do not see your payment gateway listed there, it doesn’t necessarily mean it doesn’t support automatic recurring payments (this is just a small handpicked list). You can [test automatic renewals](https://woocommerce.com/document/testing-subscription-renewal-payments/) with your gateway to see how it performs, and it should still be able to handle [manual recurring payments](https://woocommerce.com/document/subscriptions/payment-gateways/#section-4). If you want automatic recurring payments, please follow the advice in the [at the end of the payment gateways document](https://woocommerce.com/document/subscriptions/payment-gateways/#section-6).

### Can I change the account used for a payment gateway?

[↑ Back to top](#doc-title)

Yes, if you want to keep the same payment gateway but you have changed account, for example due to change of ownership, then it is possible to still use the same payment gateway on your site but please contact the gateway themselves and ask about transferring/migrating the customer information to your new account, then update any API keys or credentials in your WooCommerce payment gateway settings.

### Why only one subscription per transaction?

[↑ Back to top](#doc-title)

Woo Subscriptions version 2.0 introduced a [multiple subscriptions](https://woocommerce.com/document/subscriptions/multiple-subscriptions/) feature which allows your customers to purchase more than one subscription product in the same transaction.

However, not all payment methods support this feature. In order to offer this feature to your customers, you must either [enable manual renewals](https://woocommerce.com/document/subscriptions/store-manager-guide/#renewal-settings) or use a payment method which supports multiple subscriptions. You can find a list of all payment methods which support this feature in the [Subscription Payment Gateways guide](https://woocommerce.com/document/subscriptions/payment-gateways/#section-3).

### How can I improve the accuracy and reliability of scheduled payments with Stripe or Authorize.net?

Note: This is a **Developer level** doc. If you are unfamiliar with code/templates and resolving potential conflicts, select a [WooExpert or Developer](https://woocommerce.com/search/?collections=service) for assistance. We are unable to provide support for customizations under our [Support Policy](https://woocommerce.com/support-policy/).

Woo Subscriptions uses Action Scheduler and WordPress’s built-in [WP-Cron](http://codex.wordpress.org/Category:WP-Cron_Functions) scheduling system for processing subscription-related tasks like payments. For popular sites, the accuracy of WP-Cron’s scheduling service is not a problem. However, sites with less traffic may find scheduled payments are charged at an unacceptable length of time after it was due.

To ensure a schedule payment is run within a short interval of the time and date it is due, there are three options:

1. Create a free [UptimeRobot](http://www.uptimerobot.com/) account and point it to your store’s front page. This will ensure WP-Cron fires regularly; ensuring a payment is charged no more than a short interval after it is scheduled. This is the simplest solution.
2. Use the [Jetpack](https://jetpack.com/) plugin and enable downtime monitoring.
3. Create a server-level cron job by following the instructions on this [Envato Tuts+ tutorial](http://wp.tutsplus.com/articles/insights-into-wp-cron-an-introduction-to-scheduling-tasks-in-wordpress/). Set it to trigger every 10 seconds. This is a more reliable and flexible solution, but also more difficult to implement.

Using one of these systems for a more reliable cron is *not* required for payment gateways which use the payment gateway’s own recurring billing system. It is only required for those extensions, like Stripe and Authorize.net CIM, which rely on Subscription’s scheduling for recurring billing.

To learn more about the WP-Cron and Action Scheduler systems take a look at our [Complete Guide to Scheduled Events with Subscriptions](https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/#section-10).

### How can I have all new subscribers use a new payment gateway while allowing existing subscriptions to continue?

[↑ Back to top](#doc-title)

To force all new customer subscriptions to be created with a new payment gateway, while still having existing subscriber’s recurring payments charged correctly in an old payment gateway, you can simply disable the old payment gateway under the WooCommerce Payment Gateway Settings page.

Disabling the old payment gateway will prevent it from being offered as an option on checkout for new customers, but as long as the payment gateway extension is still active as a [WordPress plugin](http://codex.wordpress.org/Managing_Plugins), it will be able to handle recurring payments.

For example, to switch from using Stripe to Authorize.net payment gateways, the Stripe gateway would need to be disabled.

![Disabling the Stripe Gateway](https://woocommerce.com/wp-content/uploads/2012/06/faq_disable_stripe.png?strip=all&w=704)Disabling the Stripe Gateway

Switching **existing** customers to the new method is more complicated and if you wish to do this, it is recommended you have customers follow the process provided to **Change Payment Methods**.

## PayPal

[↑ Back to top](#doc-title)

### What happens if a customer cancels a subscription purchased with PayPal?

[↑ Back to top](#doc-title)

WooCommerce Subscriptions can sync the subscription status between PayPal and your store. To enable this feature, you must configure PayPal as [explained here](https://woocommerce.com/document/subscriptions/store-manager-guide/#section-15).

If you or your customer suspends or cancels a subscription in your WooCommerce store, it will also notify PayPal that the subscription should be suspended or cancelled. This means both you and your customers can manage subscriptions without ever having to log into PayPal.

If a customer suspends or cancels a subscription with PayPal directly, your site will also sync the status change as long as it receives a notification via the [PayPal IPN](https://www.paypal.com/ipn). If subscription statuses are not syncing and you have not configured IPN for your store’s website, please follow PayPal’s [instructions for setting up IPN](https://developer.paypal.com/docs/api-basics/notifications/ipn/IPNSetup/#setting-up-ipn-notifications-on-paypal). You will need to set the notification URL given to the [WooCommerce URL provided here](https://woocommerce.com/document/paypal-standard/#section-6).

### Why does PayPal Standard split the subscription when I add a sign up fee?

[↑ Back to top](#doc-title)

PayPal Standard does not provide a way to charge a sign up fee. As a result, Subscriptions needs to split the initial payment if it includes a sign up fee. It can then apply the initial amount to a separate billing period, which PayPal does support but unfortunately refers to as a *Trial Period*.

This may be confusing to your customers if they look at the subscription details in their PayPal account and see a *Trial Period* charged on a subscription with no free trial. Unfortunately, PayPal Standard does not provide any other method for charging the sign up fee.

This is just one of [PayPal Standard’s limitations](https://woocommerce.com/document/subscriptions/limitations-of-paypal-standard/). If you can, it is recommend you use a more [modern payment gateway](https://woocommerce.com/document/payment-gateways/#section-1), like Stripe.

### Why are subscription payments charged late (or early) with PayPal?

[↑ Back to top](#doc-title)

PayPal batch processes payments, meaning that they do not process payments exactly when they are due. Instead, PayPal will process a payment within 24 hours of when the payment is due.

For example, if a recurring payment is due at 2pm on 1st July, PayPal may charge that payment anytime between 12:00am and 11:59pm on the 1st of July pacific time. This may become more confusing for a subscription created on the last day of the month, as PayPal may actually end up processing the payment on the 1st day of the following month based on your store’s timezone.

### Why does PayPal immediately send a Subscription Expired/Completed email?

Unfortunately, PayPal handles subscriptions for 1 billing period (e.g. 1 year) as if they start and finish immediately. Because the payments are not on-going, PayPal thinks it can end the subscription as soon as it begins. This means PayPal will also send you as the store manager and the customer an email to say the subscription has been cancelled as soon as it was created.

Fortunately, WooCommerce Subscriptions handles the subscription properly – it will expire in your store **only** after the year has passed. But PayPal will still send you as a store manager and your customers a “Profile Cancelled” email as soon as the subscription has been created.

The only thing a store manager can do to prevent these emails from PayPal is to set the subscription length to be “all time”. This means PayPal won’t cancel the subscription immediately, it will be up to store manager or customer to cancel the subscription. Fixing PayPal’s behavior is outside of the control of the developers behind Woo Subscriptions and changing the length is the only workaround available.

### Can a customer use a credit card to pay for subscriptions when using the bundled PayPal Standard gateway?

[↑ Back to top](#doc-title)

Out-of-the-box, PayPal Standard requires customers to already have a PayPal account or to create one when signing up for a subscription.

If you want customers to be able to pay for subscriptions with just a credit card, you can add [Enhanced Recurring Payments for PayPal Standard](https://www.paypal.com/us/webapps/mpp/ua/us-erp-full). This feature costs $19.99 / month and allows your customers to sign up for a subscription even if they don’t have a PayPal account.

If you sign up for Enhanced Recurring Payments, you won’t need to make any changes to your store. Customers will automatically be presented with the option during checkout.

**Note:** PayPal only offers Enhanced Recurring Payments to US based companies. This feature is also only available for PayPal Standard, it is not available for [PayPal Reference Transactions](https://woocommerce.com/document/subscriptions/faq/paypal-reference-transactions/) – PayPal provide [no way to offer guest checkout with subscriptions that use PayPal Reference Transactions](https://woocommerce.com/document/subscriptions/faq/paypal-reference-transactions/#section-11).

### Can I sell a subscription with a sign-up fee and $0 recurring payment through PayPal?

[↑ Back to top](#doc-title)

PayPal does not support subscriptions with a $0 recurring total i.e. subscriptions where the total cost is charged up-front, but an item is still shipped on a regular basis. This is because PayPal Standard requires a subscription price (the [a3 parameter](https://developer.paypal.com/webapps/developer/docs/classic/paypal-payments-standard/integration-guide/Appx_websitestandard_htmlvariables/#recurring-payment-variables)) to be set and to be greater than 0.

WooCommerce Subscriptions will allow you to do this however as it will pass the initial purchase to PayPal as a one-off purchase and then process the renewals on its own. This means however that subscriptions with a $0 total won’t show up in your PayPal account like other subscriptions.

### Do PayPal eChecks work with Subscriptions?

[↑ Back to top](#doc-title)

Woo Subscriptions is able to process automatic subscriptions payments with PayPal using the [eCheck payment method](https://www.paypal.com/us/smarthelp/article/what-is-an-echeck-faq1082).

There are slight differences to how the subscription will be handled with an Instant Payment method, like Credit Card or bank transfer. The way it will work is:

1. After the customer completes the checkout with PayPal, the subscription & original order will remain **on-hold** until the payment clears after 2-3 days (you will need to make sure the [Hold Stock setting](https://woocommerce.com/document/subscriptions/faq/#section-37) is disabled or set to a length of time long enough to allow for this delayed processing) once the eCheck payment is completed, the subscription will be **activated** and order marked as **processing** or **completed**.
2. When the subscription renewal payment is due, the subscription will remain **active** until the eCheck payment clears, then and only then will the renewal order be created (so 2-3 days after the payment was due) for that subscription. If the eCheck payment failed, the failed payment will only be registered and subscription put **on-hold** 2-3 days after payment was due.

### The cancelled date must occur after the last payment date.

[↑ Back to top](#doc-title)

When you see this error, the customer cancelled their subscription, but somehow, it became out of sync with PayPal and is now stuck in Pending Cancellation (or another) status.

The subscription has most likely already been cancelled in PayPal, but you’ll want to double-check that it is cancelled for this customer in the PayPal dashboard.

To fix this in WooCommerce, the Cancelled Date “_schedule_cancelled”, and End Date “_schedule_end” metadata needs to be deleted from the subscription in the database. Then the subscription can be cancelled from the WC dashboard.

Once the subscription is cancelled, the notification can be dismissed. It will return if the problem happens again.

## Compatibility

[↑ Back to top](#doc-title)

### Why are renewals not being processed when W3 Total Cache is installed?

[↑ Back to top](#doc-title)

Woo Subscriptions uses WordPress’s built-in [WP-Cron](http://codex.wordpress.org/Category:WP-Cron_Functions) scheduling system for scheduling recurring payments and other renewal related tasks.

Unfortunately, the [W3 Total Cache](http://wordpress.org/plugins/w3-total-cache/) plugin on occasion breaks WP-Cron (forum reports [here](http://wordpress.org/support/topic/plugin-w3-total-cache-wp-cron-not-executing-via-any-method?replies=2), [here](http://wordpress.org/support/topic/scheduled-database-backups-no-longer-working?replies=35) and [here](http://wordpress.org/support/topic/plugin-w3-total-cache-w3-stops-cronjobs?replies=6)). If you have the W3 Total Cache plugin active and are not seeing subscription renewals processed, please deactivate it. It is an excellent caching solution, but until the WP-Cron issues are properly diagnosed and fixed, it is not always compatible with Subscriptions.

If you you need to use a caching plugin, try a well supported plugin like [WP Rocket](https://wp-rocket.me/). You may also wish to consider switching to a host that handles caching for you, like [Pagely](https://pagely.com/) or [Kinsta](https://kinsta.com/blog/wordpress-caching/).

### What plugins is WooCommerce Subscriptions incompatible with?

[↑ Back to top](#doc-title)

Due to the wide variety of plugins available for WordPress, we’re not able to provide a definitive list of plugins that WooCommerce Subscriptions may be incompatible with. Compatibility can depend on many factors, including specific configurations and use cases.

If you’re using extensions sold on [WooCommerce.com](https://woocommerce.com/) and encounter any issues, we recommend [reaching out to our support team](https://woocommerce.com/my-account/contact-support/) for assistance. For third-party plugins, we suggest testing them in a staging environment before using them on a live site to ensure everything works as expected.

## Site Management

[↑ Back to top](#doc-title)

### Why do I get a 403 error on Internet Explorer when adding a subscription to the cart?

[↑ Back to top](#doc-title)

Under a rare configuration of 
```
mod_security
```

 in Apache, your web server will throw a 403 forbidden error when a customer adds a subscription to a cart. If you encounter this issue, you will need to change the [MULTIPART_STRICT_ERROR](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-(v2.x)#multipart_strict_error) setting in your 
```
mod_security.conf
```

 to either use warnings instead of 
```
MULTIPART_STRICT_ERROR
```

 or only to make sure that 
```
DB %{MULTIPART_DATA_BEFORE}
```

 errors do not result in a 403 error.

Please contact your web host to have this setting changed.

### How many subscriptions can Subscriptions handle? Does Subscriptions scale?

[↑ Back to top](#doc-title)

Yes! Subscriptions has been proven to perform at scale on many sites with large subscriber bases. That said, on any specific WordPress site, there may be a threshold where you begin to see problems, these will be different on different sites. They depend a lot on:

- Quality of hosting and available server resources
- Number of subscriptions, orders, and other post types, like pages, blog posts, etc.
- Other plugins running and how they interact with subscriptions

On some sites, problems start to appear with just a few thousand subscriptions. On others, they haven’t begun to see a problem until exceeding 80,000 subscribers. Read more at: [WooCommerce Scaling FAQs](https://woocommerce.com/document/woocommerce-scaling-faqs/). We’ve worked with sites that have over 100,000 subscriptions which all renew successfully on the same day.

If you’re running into Subscriptions performance issues, please [open a support ticket](http://woocommerce.com/my-account/contact-support/#contact-us) and include the following technical details:

- The specific queries causing problems (when possible)
- A stack trace leading to that query (when possible)

We’re always interested in possible performance improvements, and this information can help us identify whether the issue is in the Subscriptions plugin, or 3rd party code that’s being triggered on Subscriptions related requests, like scheduled subscription payments.

## Questions and support

[↑ Back to top](#doc-title)

**Something missing from this documentation? Still have questions and need assistance?**

- If you have a question about a specific extension or theme you’d like to purchase, [contact us](https://woocommerce.com/contact-us/#sales-form) to get answers.
- If you already purchased this product and need some assistance, get in touch with a Happiness Engineer via our [support page](https://woocommerce.com/my-account/create-a-ticket/) and select this product’s name from the Product dropdown.

ipn

					
		
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

