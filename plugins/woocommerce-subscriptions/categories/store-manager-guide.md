# Store Manager Guide

*Category from WooCommerce Subscriptions documentation*

---

## Subscriptions General Settings

**Source:** [https://woocommerce.com/document/subscriptions/store-manager-guide/](https://woocommerce.com/document/subscriptions/store-manager-guide/)

# Subscriptions General Settings

			Once installed and activated, WooCommerce Subscription extension settings can be found and set at **WooCommerce > Settings > Subscriptions**. This document explains each section of settings and what it controls.

## Storewide Subscription Plans

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/storewide-subscription-plans.png?strip=all&w=704)

Storewide subscription plans are a set of reusable plans that can be added to simple, variable, product bundle, and composite products across your store. You can also add custom subscription plans directly within individual product settings. Plans are configured under **WooCommerce > Settings > Subscriptions** in the **Storewide Subscription Plans** section.

### Add a plan

[↑ Back to top](#doc-title)

To add a new plan, click **+ Add subscription plan**. A dialog will open with the following fields:

- **Frequency:**Set the billing interval using a number input and a period dropdown (Day, Week, Month, Year). For example, “three months” means the customer is billed every three months. The combination cannot exceed ten years.
- **Align Renewal:** Optionally select a day to align renewal dates for all subscribers on this plan. When set to “Do not align,” renewals are based on each subscriber’s purchase date. See the [Billing Date Alignment documentation](https://woocommerce.com/document/subscriptions/billing-date-alignment) for details.
- **Discount:** Optionally apply a discount to offer subscribers a lower price. Percentage or fixed amount discounts are supported.
- **Expire subscription after a set number of payments**: When enabled, a “Total number of payments” field appears, letting you specify how many payments (including the initial purchase) occur before the subscription expires.
- **Signup Fee:** Add a one-time fee that customers pay when they first subscribe.
- **Free Trial:** Offer a free trial by setting its duration using the number and period fields (Days, Weeks, Months, Years).

Click **Save** to add the plan.

![](https://woocommerce.com/wp-content/uploads/2026/07/add-subscription-plan-1.png?strip=all&w=704)

### Manage existing plans

[↑ Back to top](#doc-title)

Once you’ve created plans, you can manage them from the table:

- **Reorder:** Drag the handle on the left of a row to change the order in which plans appear.
- **Edit, Duplicate, or Delete:** Click the three-dot (⋮) menu in the **Actions** column to edit a plan, duplicate it as a starting point for a new plan, or delete it.

## Renewals

[↑ Back to top](#doc-title)

Configure renewal payment options for subscribers. These settings govern key aspects of the renewal process.

![](https://woocommerce.com/wp-content/uploads/2026/07/Renewals.png?strip=all&w=704)

The subscription renewal process is a fundamental component of Woo Subscriptions. To understand the intricacies of how renewal settings impact subscriptions and subscription payments, see [Subscription Renewal Process](https://woocommerce.com/document/subscriptions/renewal-process/).

### Allow early renewal payments

[↑ Back to top](#doc-title)

Enable **Allow early renewal payments** to let subscribers renew their subscriptions before their next scheduled renewal. The normal renewal interval remains unaffected. For example, if a monthly subscription renews on the 15th of every month and a customer renews on the 7th instead, next month it will still renew on the 15th. If a subscription has no expiry set, a customer can renew (and extend) it indefinitely. For more information, see the [Subscriptions Early Renewal Guide](https://woocommerce.com/document/subscriptions/early-renewal/).

**Allow early renewal payments via My Account** – This option appears once early renewal payments are enabled. When checked, subscribers can bypass the checkout and renew their subscriptions early directly from their My Account page.

### Allow manual renewals at checkout

[↑ Back to top](#doc-title)

Enable **Allow manual renewals at checkout** to accept subscription payments via payment gateways that do not support [automatic recurring payments](https://woocommerce.com/document/subscriptions/renewal-process/#section-3). When enabled, all active payment gateways are offered as a payment option when purchasing a subscription — not just gateways that support Subscriptions. If a customer pays via a gateway that does not support automatic payments, the subscription uses the [manual renewal process](https://woocommerce.com/document/subscriptions/renewal-process/#manual-recurring-payments), and will be placed on hold until the subscriber logs in and pays for the renewal.

For a list of payment gateways that support automatic and manual payments, see [Subscription Payment Gateways](https://woocommerce.com/document/subscriptions/payment-gateways/). For more information about the difference between automatic and manual renewal payments, see[Subscription Renewal Process](https://woocommerce.com/document/subscriptions/renewal-process/#manual-vs-automatic-renewals).

After turning on manual renewals, the setting only applies to new orders. Existing orders with an automatic payment system setup will continue to have renewal payments charged automatically.

**Turn off automatic payments** — This option appears once manual renewals are enabled. Check it to prevent automatic payment processing for new subscriptions, even when the gateway supports automatic payments.

![](https://woocommerce.com/wp-content/uploads/2026/07/turn-off-automatic-payments.png?strip=all&w=704)

Any existing subscriptions using automatic payments will continue to have renewal payments charged automatically. Similarly, if automatic payments are disabled but then enabled, existing subscriptions using manual renewals will continue rather than switch to automatic renewal. To change a subscription’s payment method, see [Changing a subscription from automatic to manual renewal payments](https://woocommerce.com/document/change-subscription-from-automatic-to-manual-payments/).

### Allow subscribers to change their renewal mode via My Account

[↑ Back to top](#doc-title)

Enable this setting to display a toggle that allows customers to enable and disable automatic renewals from their subscription details page. By default, subscriptions paid via a [gateway that supports automatic renewals](https://woocommerce.com/document/subscriptions/payment-gateways/) will auto-renew (unless automatic payments are turned off). This toggle lets subscribers easily switch to manual renewals themselves from the **My Account** page.

## Checkout options

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/checkout-options.png?strip=all&w=704)

### Allow $0 initial checkout without a payment method

[↑ Back to top](#doc-title)

This allows for a subscription product with a $0 initial payment to be purchased **without** providing a payment method. This is helpful if you offer a free trial on a subscription product and don’t want to force your customers to add a payment method right away. At the end of a free trial period, customers will need to add a payment method to continue their subscription.

### Allow mixed cart checkouts

[↑ Back to top](#doc-title)

Enable this setting to let customers purchase subscription products and one-time (non-subscription) products in the same transaction. This includes simple, variable, and other non-subscription products, as well as [multiple different subscription products](https://woocommerce.com/document/subscriptions/multiple-subscriptions/).

Mixed cart checkouts make it easier for customers to buy more from your store and to include subscription products in bundles created with extensions such as [Product Bundles](https://woocommerce.com/products/product-bundles/). Because of this, it’s on by default and is only disabled if manually unchecked.

With the setting enabled, here’s how a mixture of products appears on the cart and checkout pages:

**Cart page:**

![Cart page showing a mixed checkout with a subscription product and standard products.](https://woocommerce.com/wp-content/uploads/2026/06/mixed-checkout-cart-sample-block@2x.png?strip=all&w=704)Subscription and one-time products in the cart with mixed cart checkouts enabled.

**Checkout page:**

![Checkout page showing a mixed checkout with a subscription product and standard products.](https://woocommerce.com/wp-content/uploads/2026/06/mixed-checkout-checkout-sample-block@2x.png?strip=all&w=704)

## Payment recovery

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/payment-recovery.png?strip=all&w=704)

Automatically retry failed recurring payments when a subscriber’s payment method is temporarily declined. For example, if a customer’s credit card has reached its limit when a recurring payment is attempted and the bank declines the charge, Subscriptions can successfully process it a few days later once the balance is paid off.

Enable automatic retry of failed recurring payments

This setting is off by default. When enabled, it activates the Failed Recurring Payment Retry System. The setting applies from that point onwards and does not affect payments that have already failed.

For a full explanation of retry rules, statuses, and emails, see the [Failed Recurring Payment Retry System guide](https://woocommerce.com/document/subscriptions/failed-payment-retry/).

## Switching

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/switching-1.png?strip=all&w=704)

Allow subscribers to switch their subscription to a different product, variation, or plan — upgrading, downgrading, or cross-grading between eligible options from their **My Account** page.

For a full explanation of the switching process and costs, see the [Store Manager’s Guide to Subscription Switching](https://woocommerce.com/document/subscriptions/switching-guide/).

## Add to Subscription

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/add-to-subscription-1.png?strip=all&w=704)

Allow subscribers to add products to their existing subscription instead of creating a new one at checkout. Enable one or both options below; each has its own **Eligible products** setting.

**Add individual products from the product page** – Lets customers add a single product to one of their existing subscriptions directly from that product’s page.

Under **Eligible products**, choose:

- **Only subscription products** – Only products with subscription plans can be added to existing subscriptions.
- **Any product** – Any product can be added to an existing subscription, including products without subscription plans. These products will inherit the subscription’s billing schedule.

**Add cart contents from the cart page** – Lets customers add the current contents of their cart to one of their existing subscriptions from the cart page. **This option only works with the classic (shortcode) Cart — it isn’t available when the store uses the block-based Cart, and won’t appear in settings in that case.**

Under **Eligible products**, choose:

- **Only subscription products** – The cart can only be added to an existing subscription when every product in it has subscription plans.
- **Any product** – The cart can be added to an existing subscription even when it holds products without subscription plans. These products will inherit the subscription’s billing schedule.

Subscriptions with signup fees cannot be added to an existing subscription using this feature.

## Suspensions

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/suspensions.png?strip=all&w=704)

Allow subscribers to suspend their subscription.

**Enable subscriber suspensions** – When enabled, subscribers can suspend their own active subscriptions from their My Account page. When disabled, subscribers cannot suspend their subscriptions.

When enabled, two further options become available:

- **Limit the number of times a subscriber can suspend their subscription** – When left unchecked, subscribers can suspend their subscription an unlimited number of times. When checked, the **Suspensions per billing period** field appears.
- **Suspensions per billing period** – Set the maximum number of times a subscriber can suspend their subscription within each billing period. For example, on a subscription billed yearly, a value of 3 means that once the subscriber has suspended 3 times in that year, they cannot suspend again until the next billing year.

Note: Store managers can always suspend an active subscription, regardless of this setting. If you see a **Suspend** button on a test subscription in your own My Account page, it’s because you’re an administrator — customers and other roles won’t see it.

## Gifting

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/gifting.png?strip=all&w=704)

Allow shoppers to purchase subscriptions as gifts for others. When a subscription is gifted, it’s shared between the purchaser and the recipient for the rest of its life cycle, and the purchaser selects a recipient by entering their email address. For the full customer and store-manager workflow, see [Gifting a Subscription](https://woocommerce.com/document/subscriptions/customers-view/gifting-a-subscription/).

**Enable gifting for subscriptions** – Turn this on to let shoppers buy a subscription for someone else. When enabled, the following options appear:

- **Gift option text** – The label shown next to the gift option on the product and cart pages. The default is “This is a gift” — change it to a phrase that suits your store.
- **Allow gift purchasers to download files** – When checked, both the purchaser and the recipient can access downloadable files from the subscription. When unchecked, only the recipient is granted download permissions. Recipients can download the files they’ve been granted access to from the **My Account** page and the **My Account > View Subscription** page.

## Billing date alignment

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/billing-date-alignment.png?strip=all&w=704)

Choose how the first charge is handled for subscription products with aligned billing dates. Set the **First billing behavior** to one of the following:

- **Charge full amount at sign-up** (default) – Customers are charged the full recurring amount when they subscribe. A **Sign-up cutoff window** field appears: customers who subscribe within that many days of the next billing date aren’t charged until the next billing date (set to 0 to disable).
- **Charge on the next billing date** – Customers aren’t charged at sign-up; their first recurring charge occurs on the next billing date.
- **Prorate until the next billing date** – Customers are charged a prorated amount based on the days remaining until the next billing date, then the full amount on the next billing date. An **Apply proration to** option appears to choose which product types are prorated (**Virtual** and/or **Physical** subscription products; at least one required).

For detailed examples and how proration is calculated, see the [Guide to Billing Date Alignment](https://woocommerce.com/document/subscriptions/billing-date-alignment/).

## Downloadable content

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/downloadable-content.png?strip=all&w=704)

These settings determine how downloadable products are delivered to your subscribers over the life of a subscription—whether new files are released gradually at renewal, and whether standalone downloadable products can be attached to subscriptions.

- **Release new downloadable files after each renewal**—When you sell a downloadable subscription product, you may add more files to it over time. By default, any new file you add becomes available to all existing subscribers immediately. Enable this setting to instead hold new files back until each subscriber’s next renewal is processed.
- **Enable downloadable product sharing**—Turn this on to link standalone downloadable products to your subscription products, so subscribers can access those downloads through their subscription. This lets you keep selling a downloadable product on its own while also bundling it into a subscription, and a single downloadable product can be linked to more than one subscription. When this is enabled, a further option appears:
- **Show shared downloadable products in subscription details**—With this on, the downloadable products you’ve linked appear as free line items in the subscription’s details, visible to both you and the subscriber. If a subscription has many linked downloadable products, listing them all can slow down subscription-related pages and background processes. Turning this off stops them from being added as line items. Even when off, subscribers keep their download access and can still reach their files from the subscription’s Downloads section and from My Account > Downloads.

## Subscription notifications

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/subscription-notifications-1.png?strip=all&w=704)

These settings let you send subscribers reminder emails ahead of key subscription events — an upcoming renewal, an expiring subscription, or the end of a free trial. These are advance “heads-up” reminders sent *before* an event, separate from the standard subscription emails that are sent automatically when an event occurs. For the full list of notification types and how to customize each one, see the [Subscription Notifications guide](https://woocommerce.com/document/subscriptions/subscriptions-notifications/).

**Send reminder emails to subscribers** – Turn this on to send those reminders automatically. It acts as the master switch for the feature: once enabled, reminders are scheduled in the background for all eligible subscriptions, and disabling it unschedules them. You still control each reminder email individually — to enable, disable, or edit the wording of a specific notification, go to **WooCommerce > Settings > Emails**. For a reminder to send, both this switch and that individual email must be enabled.

When enabled, a further option appears:

**Reminder timing** – Set how far before each subscription event the reminder is sent, using the number field and the unit dropdown (days, weeks, or months). The latest a reminder can be sent is 1 day before the event, and reminders aren’t scheduled for subscriptions shorter than 3 days.

Reminder emails are only sent on live (production) sites — they’re automatically disabled on staging and other non-production environments.

## Purchase text

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/purchase-text.png?strip=all&w=704)

Customize the text that appears on your product and checkout pages for subscription purchases. Three fields are available:

**Purchase option text** – Sets the text shown above the subscription purchase options on a product page (default: “Choose a subscription plan:”).

**Add to cart button** – Sets the label of the Add to Cart button on an individual product page when a subscription product is selected.

**Place order button** – Sets the label of the Place Order button on the checkout page when the order contains a subscription.

## Subscriber roles

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/subscriber-roles.png?strip=all&w=704)

Because a subscription is an ongoing agreement between you and the customer, every subscriber **must** have an account on your store — regardless of your [general WooCommerce account settings](https://woocommerce.com/document/configuring-woocommerce-settings/accounts-and-privacy/#guest-checkout-and-accounts). These settings control which user role a customer holds depending on whether they currently have an active subscription.

**Subscriber default role** – The role assigned to a customer while they have one or more active subscriptions. By default, this is WordPresss’ built-in **Subscriber** role.

**Inactive subscriber role** – The role assigned to a customer once they have no active subscriptions — for example when their subscription expires, is cancelled, or is suspended (by you, the payment gateway, or the customer). By default this is WooCommerce’s built-in **Customer** role.

If you sell memberships and want to add a “member” role, [WooCommerce Memberships](https://woocommerce.com/products/woocommerce-memberships/) may be a good option for you.  Memberships also allows setting different per-product permissions for users.

## Subscription product creation

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/subscription-product-creation.png?strip=all&w=704)

These settings control whether the dedicated subscription product types — Simple Subscription and Variable Subscription — are available when creating products. Enable each type independently under **Enable subscription product types**:

- **Simple subscription**
- **Variable subscription**

When a type is enabled, it appears as an option in the product type drop-down as you create a new product. When disabled, that option no longer appears for new products.

When dedicated subscription product types are disabled, changing an existing simple or variable subscription product to another product type and saving it removes the subscription options from that product’s dropdown.

As of WooCommerce Subscriptions 9.0, we recommend using [subscription plans](https://woocommerce.com/document/subscriptions/creating-subscription-products/#purchase-options) on simple, variable, bundle, and composite products instead. The dedicated Simple and Variable Subscription product types are retained for backward compatibility and use cases that are not yet supported by subscription plans.

Disabling the dedicated subscription product types **will not affect existing products**—they will continue to work as expected.

## Subscriptions health check

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/subscriptions-health-check.png?strip=all&w=704)

The Subscriptions Health Check scans your store for subscriptions that may need attention — for example, subscriptions set to manual renewal that could be renewing automatically based on the customer’s payment method, or subscriptions with missing or overdue renewal dates.

**Enable nightly health check scans on your subscriptions** – When enabled, WooCommerce Subscriptions runs a health check scan automatically each night. To view a scan’s results or run one manually at any time, go to **WooCommerce > Status > Subscriptions**.

The health check never changes a subscription on its own — any suggested fix is applied only when you review it and confirm.

For more detail, see the [Subscriptions Health Check guide](https://woocommerce.com/document/woocommerce-subscriptions-health-check/).

## Processing reliability

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2026/07/processing-reliability.png?strip=all&w=704)

Renewals, status changes, and other subscription events run in the background on your store as [scheduled actions](https://woocommerce.com/document/understanding-the-woocommerce-system-status-report/scheduled-actions/). These settings help ensure those processes run consistently and reduce the risk of missed or delayed subscription events.

**Run scheduled subscription events in a dedicated batch** – When enabled, subscription renewals and other events (retries, trial ends, expirations) run in a dedicated batch, reducing delays caused by other scheduled actions on your site. This is especially useful on busy stores where many plugins share the same job queue.

**Allow a web cron service to run pending subscription events** – When enabled, an external web cron service can run pending subscription events, and a unique **Web cron URL** is generated for you to add to that service. Treat this URL like a password — keep it private and don’t share it publicly. To replace an existing URL, click **Generate a new URL**; any external service still using the old URL will need to be updated.

## Subscriptions shortcode

[↑ Back to top](#doc-title)

To display a list of subscriptions on pages apart from the customer **My Account** page, add the 
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

, the currently logged-in user).
- ```
status
```

: show only subscriptions with this status. It can be, 
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

```
[[subscriptions]]
[[subscriptions user_id="33"]]
[[subscriptions status="all"]]
[[subscriptions user_id="42" status="all"]]
```

More at: [How to Use Shortcodes](https://woocommerce.com/document/woocommerce-shortcodes/#how-to-use-shortcodes).

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

Power your membership association, online magazine, elearning sites, and more with access control to...
				![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.

---

