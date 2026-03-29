# Ecommerce

*Category from WP Fusion documentation*

---

## FluentCart

**Source:** [https://wpfusion.com/documentation/ecommerce/fluentcart/](https://wpfusion.com/documentation/ecommerce/fluentcart/)

## Overview

WP Fusion’s FluentCart integration connects FluentCart orders, customers, and subscriptions to your CRM/marketing automation tool. It lets you:

- Apply or remove tags in your CRM when FluentCart events occur (e.g. order paid, refunded, subscription cancelled).
- Create or update contacts in your CRM when customers check out, even if they don’t have a WordPress account.
- Sync order and customer meta (billing/shipping details, totals, payment info) into WP Fusion fields and onward into your CRM.
- Sync subscription meta (status, next billing date, recurring amount) to your CRM.
- Batch export historical FluentCart orders to your CRM (backfill).
- Manually reprocess a specific order from the FluentCart admin screen if needed.

> At a glance: You’ll configure product‑level “feeds” in FluentCart to define which events trigger which tags and (optionally) custom‑field sync via WP Fusion.

## Requirements

- WordPress + FluentCart active.
- WP Fusion 3.47.0+ (integration introduced in October 2025).
- Your CRM connection is configured in WP Fusion → Settings → Setup.

> Tip: Keep all plugins updated for best compatibility and performance.

## How it works

### 3.1 Product‑level feeds in FluentCart

The integration registers WP Fusion as a FluentCart product‑level integration. For each product you can create one or more feeds:

- Feed Title — your internal label (e.g. “Apply tags on Purchase”).
- Apply Tags — tags to add in your CRM when selected events occur.
- Remove Tags — tags to remove when selected events occur (useful for state changes, e.g. cancelled/refunded).
- Sync Custom Fields — toggle to push order/customer meta to CRM when the feed runs.

> Scope: The integration is restricted to product scope in FluentCart. Global‑level actions are intentionally disabled — manage strategy per product for precision.

### Events (triggers)

WP Fusion reads FluentCart’s event triggers list and exposes them in the feed UI. Common examples include:

- Order created / order paid
- Order status changes (e.g. completed, refunded, failed, cancelled)
- Subscription created / renewed / expired / cancelled

> Note: The exact event names shown come from FluentCart’s internal trigger list. Choose the ones that match your automation needs.

### Contact handling

When an event fires for an order, WP Fusion will:

1. Find the contact by WordPress user ID (if present) or by order email.
2. Create the contact if none exists (email, first name, last name), then continue.
3. Apply/Remove tags as configured in the feed.
4. If Sync Custom Fields = Yes, push the mapped order/customer fields (see §4) to the contact.

“Revoke” events (refunds/cancellations) trigger tag removals as configured in the feed.

## Field mapping (what data can sync)

The integration registers a FluentCart field group in WP Fusion so you can map these to CRM fields. Highlights include:

### Customer, billing & shipping

- billing_address_1, billing_address_2, billing_city, billing_state, billing_country, billing_postcode
- shipping_address_1, shipping_address_2, shipping_city, shipping_state, shipping_country, shipping_postcode
- phone

### Order & payment meta

- customer_id (FluentCart customer record ID)
- order_date
- payment_method, payment_method_title, payment_status
- order_status, order_type
- subtotal, discount_total, tax_total, shipping_total, shipping_tax, discount_tax
- manual_discount_total, coupon_discount_total
- total_amount, total_paid, total_refund
- receipt_number, invoice_no
- mode (test/live)

### Fulfillment & shipping

- fulfillment_type, shipping_status, shipping_required
- shipping_method

### Subscription meta (if enabled in FluentCart)

- subscription_status
- next_billing_date
- recurring_amount

> Notes
> 
> Some entries are marked “pseudo” in WP Fusion (calculated/derived values) but still sync to CRM as simple text/number fields.
> Subscription tagging is handled by the main integration feeds; the subscription meta above is synced via a subscription‑specific helper for field updates.

## Setup — step by step

### Step 1: Connect your CRM in WP Fusion

WP Fusion → Settings → Setup. Authenticate your CRM and confirm tags are loading in Available Tags.

### Step 2: Enable the FluentCart integration

WP Fusion → Settings → Integrations → enable FluentCart. Save.

### Step 3: Map fields (optional but recommended)

WP Fusion → Contact Fields. Locate the FluentCart field group and map any fields you want to store in your CRM (e.g. total_amount → “Last Order Total”). Save.

### Step 4: Create product‑level feeds in FluentCart

FluentCart → Products → (Edit a product) → Integrations (WP Fusion):

1. Add Feed
2. Set Feed Title (e.g. “Apply tags on Order Paid”).
3. Choose your Events (e.g. Order Paid and Order Completed).
4. Select Apply Tags (e.g. Purchased • {Product}) and optional Remove Tags.
5. Toggle Sync Custom Fields = Yes to push order/customer meta when this feed runs.
6. Save. Repeat per product as needed.

### Step 5: Test

- Place a test order (use your gateway’s sandbox).
- In WP Fusion Logs, confirm the event, tags applied/removed, and any field sync.
- In your CRM, verify the contact, tags, and mapped fields.

## Recipes (common automations)

### A) First‑purchase onboarding

- Event: Order Paid
- Apply Tags: Customer, Purchased • {Product}
- Automation: CRM sends onboarding + request for review after 7 days.

### B) Refund / cancellation clean‑up

- Event: Order Refunded / Cancelled (revoke)
- Remove Tags: Active Customer, Purchased • {Product}
- Apply Tags: Refunded
- Automation: CRM triggers re‑engagement sequence.

### C) Subscription lifecycle

- Event: Subscription Renewed
- Apply Tags: Subscription • Active
- Fields: subscription_status = active, next_billing_date updated
- Automation: CRM postpones renewal reminders, sends usage tips.

### D) VIP / high‑value segmentation

- Event: Order Paid (field sync on)
- Fields: Update total_amount, increment total_paid, maintain lifetime_spend (in CRM logic)
- Automation: When lifetime spend > threshold → apply VIP tag.

## Admin tools

### 7.1 Manual reprocess (single order)

From the FluentCart order admin screen, use WP Fusion → Reprocess to re‑run the integration for that order (helpful after changing tag rules or field mappings).

### 7.2 Batch export (historical backfill)

Use WP Fusion’s FluentCart Batch tool to process past orders and send data to your CRM. Recommended before going live so segments are accurate from day one.

## Troubleshooting

Tags not applied

- Ensure the product has at least one WP Fusion feed with the relevant event selected.
- Confirm the CRM connection status in WP Fusion settings.
- Check WP Fusion → Logs for the corresponding order event.

Fields didn’t sync

- In the product feed, set Sync Custom Fields = Yes.
- Verify field mappings in WP Fusion → Contact Fields.
- Confirm the order actually contains the data (e.g. shipping not present for digital goods).

Wrong contact matched

- WP Fusion prefers WordPress user → else looks up by email. Ensure emails are unique and consistent across orders and CRM.

Subscription tags OK, but fields aren’t updating

- Tagging is event‑based (feeds). Subscription fields (subscription_status, next_billing_date, recurring_amount) are synced by a separate subscription updater; confirm subscriptions are enabled and events are firing.

Need to remove tags on refund

- Add a feed on the same product for Refunded/Cancelled events and configure Remove Tags accordingly.

## Reference — available fields

> Map these in WP Fusion → Contact Fields under the FluentCart group.

Customer & contact
customer_id, phone

Billing
billing_address_1, billing_address_2, billing_city, billing_state, billing_country, billing_postcode

Shipping
shipping_address_1, shipping_address_2, shipping_city, shipping_state, shipping_country, shipping_postcode, shipping_required, shipping_status, shipping_method, fulfillment_type

Order & payment
order_date, order_type, order_status, payment_status, payment_method, payment_method_title, mode, receipt_number, invoice_no

Totals
subtotal, discount_total, manual_discount_total, coupon_discount_total, tax_total, shipping_total, shipping_tax, discount_tax, total_amount, total_paid, total_refund

Subscriptions
subscription_status, next_billing_date, recurring_amount

## FAQ

Q: Where do I configure when tags apply?
A: Per‑product, in FluentCart’s Integrations (WP Fusion) tab. Create one or more feeds and select the event(s) that should trigger tagging and (optionally) field sync.

Q: Can I run actions globally across all products?
A: The integration is designed for product scope (more control). Create feeds on the specific products you want to automate.

Q: Can WP Fusion create contacts for guest checkouts?
A: Yes. If no WordPress user is found, WP Fusion will create a new contact by order email and name.

Q: Does it support refunds/cancellations?
A: Yes. Configure a feed for the appropriate revoke events and use Remove Tags and/or alternate Apply Tags like Refunded.

Q: Which subscription fields are available?
A: subscription_status, next_billing_date, and recurring_amount. Tagging for subscription start/renewal/cancel is handled by your feeds.

---

## Cancellation Survey for Woo Subscriptions

**Source:** [https://wpfusion.com/documentation/ecommerce/cancellation-survey-for-woocommerce-subscriptions/](https://wpfusion.com/documentation/ecommerce/cancellation-survey-for-woocommerce-subscriptions/)

### Overview

Cancellation Survey and Offers for Woo Subscriptions is a free plugin that allows you to show a cancellation survey and special offers in a popup when a user cancels a WooCommerce Subscriptions subscription.

WP Fusion’s integration allows you to sync cancellation reasons with custom fields in your CRM, and apply tags when cancelation forms are submitted.

### Setup

WP Fusion provides several fields that can be enabled from the Contact Fields list in the WP Fusion settings.

There are three fields:

- Cancellation Survey Reason: contains the selected cancellation reason (like, “I no longer need the product”).
- Cancellation Survey Comments: contains any additional comments entered by the user (if you’ve enabled the Ask for details in the text field option).
- Retention Offer Title: If the customer accepts a retention offer, this will sync the title of the retention offer.

To apply tags when a cancellation survey is submitted, select one or more tags in the WP Fusion meta box when editing any survey.

You can also apply tags when a user accepts a retention offer.

You can use these tags to automatically follow up with customers who have submitted a survey response, create an internal task to review the customer’s survey response, and trigger other automations in your CRM.

---

## WP Software License

**Source:** [https://wpfusion.com/documentation/ecommerce/wp-software-license/](https://wpfusion.com/documentation/ecommerce/wp-software-license/)

### Overview

WP Fusion integrates with WP Software License for WooCommerce to allow you to sync automatically generated license keys to custom fields in your CRM.

### Setup

Head to the Contact Fields list in the WP Fusion settings and scroll down to the WooCommerce section.

Enable the License Key field for sync by selecting a corresponding custom field in your CRM.

When customers check out, or new license keys are generated, they will automatically be synced to the selected custom field on the customer’s contact record.

You can also export license keys for historical orders by running a WooCommerce Orders batch operation.

---

## Subscriptions for WooCommerce

**Source:** [https://wpfusion.com/documentation/ecommerce/subscriptions-for-woocommerce/](https://wpfusion.com/documentation/ecommerce/subscriptions-for-woocommerce/)

### Overview

Subscriptions for WooCommerce is a free alternative to WooCommerce Subscriptions.

For the most comprehensive integration with WP Fusion and your CRM, we recommend the official WooCommerce Subscriptions plugin. However, for simple stores, Subscriptions for WooCommerce may be sufficient.

### Setup

While editing any WooCommerce product, check the Subscription checkbox to enable the subscription settings.

On the WP Fusion tab, this adds two options:

- Remove tags: When this is checked, the tags specified in Apply tags when purchased will be removed if the subscription is cancelled.
- Cancelled: These tags will be applied in your CRM when the subscription is cancelled.

---

## WooCommerce Product Options

**Source:** [https://wpfusion.com/documentation/ecommerce/woocommerce-product-options/](https://wpfusion.com/documentation/ecommerce/woocommerce-product-options/)

### Overview

WP Fusion includes an integration with the WooCommerce Product Options addon by Barn2 Plugins.

This extension allows you to collect additional product information from your customers, such as desired sizes, colors, engravings, etc.

WooCommerce Product Options lets you collect additional options or preferences from your customers before they add a product to their cart.
WP Fusion’s integration can sync selected product options to custom fields in any one of 50+ CRMs and marketing automation systems.

You can then use these values in your emails, marketing, and as conditions in your automations.

In this example a customer’s request for a product customization creates a task, and sends a notification email + SMS (with [ActiveCampaign](https://wpfusion.com/go/activecampaign)).
For general information on syncing WooCommerce orders and customers with your CRM, see the WooCommerce documentation.

### Syncing addon values to your CRM

If you are collecting additional information from the customer in the form of text, date, checkbox, or dropdown addons, these fields will show up for sync under the WooCommerce Product Options header on the Contact Fields tab of the WP Fusion settings.

You can enable each field for sync by selecting a custom field in your CRM to store the data.

When a customer checks out on your WooCommerce store, the selected options will be synced to the selected custom fields in your CRM or email marketing tool.

---

## WooCommerce Gravity Forms Product Add-ons

**Source:** [https://wpfusion.com/documentation/ecommerce/woocommerce-gravity-forms-product-add-ons/](https://wpfusion.com/documentation/ecommerce/woocommerce-gravity-forms-product-add-ons/)

### Overview

Using WP Fusion and the Gravity Forms Product Add-ons extension for WooCommerce, you can collect custom product data and sync it to any one of 50+ supported CRMs and marketing automation systems.

### Setup

Setup is simple. First create your product addon forms and associate them with your products. Then go to the WP Fusion Contact Fields settings and scroll down to the WooCommerce Gravity Forms Addons section.

Enable any fields you’d like to sync by selecting a custom field in your CRM from the dropdown in the right column.

When a customer checks out, any enabled custom addon fields will be synced to their corresponding custom fields in your CRM.

---

## SureCart

**Source:** [https://wpfusion.com/documentation/ecommerce/surecart/](https://wpfusion.com/documentation/ecommerce/surecart/)

### Overview

WP Fusion includes an integration with SureCart to sync your customers with contact records in any one of 50+ CRMs and marketing automation tools.

You can also apply tags (or lists) to your customers based on product purchases.

### Setup

When editing any SureCart product, and then press Add New Integration to add a new integration.

From the dropdown, select either Apply Tags or Remove Tags.

Select the tag (or list, group, segment, etc.) you’d like to apply or remove.

WP Fusion’s SureCart integration can apply and remove tags specific to pricing plans and product variants.
Finally (optionally), select the payment plan and product variant this tag should apply to. You can set different tags for different plan / variation combinations by adding a new Integration for each one.

You can associate tags with specific prices or subscription plans.
That’s it! When a customer checks out on your SureCart store, a contact record will be created in your CRM, and the selected tags will be applied or removed.

### Refunds and subscription cancellations

If a product purchase is later revoked (either due to refund, or subscription cancelation) any tags applied at checkout will automatically be removed.

In the case of subscription cancelations, this happens at the end of the current subscription cycle, when access to the purchased product (like a course or membership) is revoked by SureCart. If you wish to revoke access to purchased products immediately, this can be changed in the SureCart settings by setting Cancellations Happen to Immediately.

Any tags removed at checkout will not be automatically re-applied.

For additional triggers, such as applying a tag when a subscription is cancelled, you can use SureTriggers in combination with WP Fusion’s Apply Tags action.

### Upgrades and downgrades

WP Fusion follows SureCart’s configured logic for subscription upgrades and downgrades. By default, an upgrade will be processed immediately, and the tags for the new subscription plan will be applied right away.

Downgrades are processed at the end of the current billing cycle, in this scenario the tags from the previous level will be removed and the tags for the new subscription plan will be applied at that time. This behavior can be modified in the SureCart subscriptions settings.

### Enhanced Ecommerce

WP Fusion’s Enhanced Ecommerce addon (available to Plus and Professional license holders) can sync SureCart orders to supported CRMs and email marketing platforms.

Deep Data from SureCart showing on the contact record in ActiveCampaign
With SureCart, the Ecommerce Addon will automatically send enhanced ecommerce data for all orders, including support for products, product variants, quantities, discounts, shipping, taxes, and recurring payments.

After processing, orders will be updated to indicate the time they were synced to your CRM, and the corresponding invoice or deal ID.

#### Products

In CRMs that have Products as separate entities from Orders, you can associate your SureCart products with CRM products by selecting them in the Integrations settings of each SureCart product.

WP Fusion’s Enhanced Ecommerce integration allows you to link SureCart products with products in your CRM, in this case [Ontraport](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/).
If you do not manually associate your products, WP Fusion will automatically create a new product in your CRM at checkout based on the product name in SureCart.

A SureCart order synced to [HubSpot](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/) contains line items for the products purchased as well as the order title and total.

#### Refunds

If an order is refunded in SureCart, it will automatically be marked as refunded in your CRM.

#### Supported platforms

		The CRMs supported by Enhanced Ecommerce are listed below. Click on each to learn more about the capabilities of the integration.

- ActiveCampaign
- AgileCRM
- Brevo
- Drip
- Groundhogg
- HighLevel
- HubSpot
- Infusionsoft / Keap
- MailerLite
- NationBuilder
- Ontraport
- Salesforce
		

#### Syncing historical orders

WP Fusion’s Enhanced Ecommerce addon has the ability to export your historical SureCart orders to your CRM. To start an export, head to Settings » WP Fusion » Advanced and select the SureCart orders (Ecommerce addon) operation from the Batch Operations menu.

You can optionally check Skip already processed orders to ignore any orders that have already been processed by WP Fusion.

Click Create Background Task to start the operation. A progress bar will appear at the top of the screen showing you how many orders are remaining to be processed.

For more information see the exporting data documentation.

---

## Studiocart

**Source:** [https://wpfusion.com/documentation/ecommerce/studiocart/](https://wpfusion.com/documentation/ecommerce/studiocart/)

### Overview

WP Fusion includes an integration with Studiocart to sync your customers with contact records in any one of 50+ CRMs and marketing automation tools.

You can also apply tags (or lists) to your customers based on product purchases, as well as events like payment failures and subscription cancellations.

### Setup

When editing any Studiocart product, in the Product Settings meta box click on the Integrations tab, and then press Add New to add a new integration.

From the Service dropdown, select either WP Fusion – Apply Tags or WP Fusion – Remove Tags.

Next, select your triggers. The available triggers are:

- Product Purchased
- Subscription Active
- Product Refunded
- COD Order Created
- Installment Plan Completed
- Subscription Canceled
- Subscription Paused
- Subscription Renewal Charged
- Subscription Renewal Failed

For each trigger, you can select one or more tags to be applied or removed in your connected CRM.

---

## WooCommerce Payments

**Source:** [https://wpfusion.com/documentation/ecommerce/woocommerce-payments/](https://wpfusion.com/documentation/ecommerce/woocommerce-payments/)

### Overview

WP Fusion supports WooCommerce Payments to allow you to segment customers in your CRM or marketing automation platform based on subscription status, as well sync subscription fields to custom fields on contact records in your CRM.

The WP Fusion settings appear under the WP Fusion panel tab when editing any WooCommerce product.
The options when using WooCommerce payments are the same as WP Fusion’s WooCommerce Subscriptions integration.

For full details, see the WooCommerce Subscriptions documentation.

---

## Paymattic

**Source:** [https://wpfusion.com/documentation/ecommerce/paymattic/](https://wpfusion.com/documentation/ecommerce/paymattic/)

### Overview

WP Fusion includes an integration with Paymattic to sync your customers with contact records in any one of 50+ CRMs and marketing automation tools.

You can also apply tags in your CRM based on the payment form used, as well as payment status and subscription cancellations. (with Paymattic Pro).

### Setup

To enable the integration, first head to Paymattic » Settings » Integrations and enable the toggle for WP Fusion.

There is nothing else to configure in the global settings— WP Fusion will use your API credentials you entered during the setup process.

#### Feed setup

To enable WP Fusion on a single payment form, first add some fields to your form, and then click on the Form Integrations tab.

Click Add New Integration, and select WP Fusion from the dropdown. A WP Fusion feed will be added to your form.

The default feed settings are:

- Map Fields: For each field on your form, select a corresponding custom field in your CRM to store the data.
- Apply Tags – Form Submission: These tags will be applied in your CRM whenever anyone submits the form.

If your form has a payment field, two additional options will appear:

- Apply Tags – Payment Received: These tags will be applied when a payment is successfully processed for the form.
- Apply Tags – Payment Failed: These tags will be applied when a payment fails for the form. If you’re selling subscriptions, these tags will also be applied when a scheduled renewal payment fails.

If you’re selling subscriptions with Paymattic Pro, an additional option will appear:

- Apply Tags – Subscription Cancelled: These tags will be applied in your CRM when a subscription is cancelled.

Note that for tagging to work correctly with the Subscription Cancelled status, your Stripe account must be configured to send the customer.subscription.deleted webhook. For more information on webhooks with Paymattic Pro, see this doc.

### How it works

When a customer submits a Paymattic form, any configured WP Fusion feeds will run.

A contact record will be created or updated (based on email address) in your connected CRM, including any custom fields.

The tags specified for the Form Submission setting will be applied right away.

Then, based on the result of the payment (if it’s a payment form), the Payment Received or Payment Failed tags will be applied.

The WP Fusion logs show Paymattic submissions being synced with your CRM, and any tags that are applied.
You can view the data being synced to your CRM in the WP Fusion logs. If there are any errors or issues with the sync, they will also be recorded in the logs.

After the submission has been processed, a note will be added to the entry containing a link to the customer’s contact record in your CRM.

The Paymattic entry notes show the contact ID that was created, with a link to view the contact in your CRM.
If there are any errors with the sync with your CRM, they will also be added as a note to the entry (in addition to the WP Fusion logs).

---

## WooCommerce Payment Plans

**Source:** [https://wpfusion.com/documentation/ecommerce/woocommerce-payment-plans/](https://wpfusion.com/documentation/ecommerce/woocommerce-payment-plans/)

### Overview

WP Fusion integrates with WooCommerce Payment Plans plugin allow you to tag customers in your CRM or marketing automation platform when a product has been purchased using a payment plan, as well as when the payment plan has been fully paid.

This functionality is addition to WP Fusion’s WooCommerce and WooCommerce Subscriptions integrations.

### Product setup

When editing any WooCommerce product, the payment plan settings will appear on the WP Fusion settings panel, underneath the Payment Plans heading.

Because WooCommerce Payment Plans uses WooCommerce Subscriptions for processing the payments, the settings here are tied to changes in subscription status.

- The tags specified for Partially Paid will be applied when a new active subscription (aka payment plan) is created for the product.
- The tags specified for Fully Paid will be applied when the subscription status is set to expired, which happens automatically once all payments have been made for the payment plan.

---

## RestroPress

**Source:** [https://wpfusion.com/documentation/ecommerce/restropress/](https://wpfusion.com/documentation/ecommerce/restropress/)

### Overview

WP Fusion integrates with the RestroPress food ordering plugin to sync customers with any one of 40+ supported CRMs and marketing automation platforms, and apply tags based on the products purchased.

### Syncing customers

By default, when a customer checks out in RestroPress, they will be synced to your connected CRM with their name and email address.

You can configure the field mapping between additional RestroPress customer fields and custom fields in your CRM in WP Fusion’s Contact Fields settings.

In addition to the phone and address fields, there are several “pseudo” fields that can be used to sync details about a customer’s most recent order with your CRM:

- Order Date: The date of the customer’s most recent order
- Order ID: The ID of the customer’s most recent order.
- Order Total: The total amount of the customer’s most recent order.
- Order Notes: The delivery notes from the customer’s most recent order.
- Order Discount Value: The total discount value of the customer’s most recent order (if applicable).

### Product settings

When editing any RestroPress food item, you can click on the WP Fusion settings panel to access WP Fusion’s product options.

Any tags specified in the Apply Tags settings will be applied to the customer’s contact record in your CRM when this food item is purchased.

### General settings

WP Fusion includes one global setting for RestroPress, at Settings » WP Fusion » Integrations » RestroPress.

Any tags specified in the Apply Tags to Customers setting will be applied to all RestroPress customers after their purchase is complete.

### Syncing historical orders

If you already have an existing RestroPress store, you can use WP Fusion to sync all historical orders to your CRM.

First configure your products with any tags you’d like to be applied when purchased. Then navigate to Settings » WP Fusion » Advanced and scroll down to the Batch Operations section.

Select “RestroPress Orders” from the list of options, and click Create Background Task.

WP Fusion will go through all of your orders, adding / updating contacts as necessary in your CRM, and tagging them based on the products purchased. A status bar will appear at the top of the page indicating the progress.

After each order is processed it will be locked by WP Fusion so it can’t be exported again, to prevent duplicate data from going to your CRM.

---

## Upsell Plugin

**Source:** [https://wpfusion.com/documentation/ecommerce/upsell-plugin/](https://wpfusion.com/documentation/ecommerce/upsell-plugin/)

### Overview

WP Fusion includes an integration with Upsell Plugin to sync your customers with any one of 40+ CRMs and marketing automation tools.

You can also apply tags in your CRM based on product purchases, coupon usage, and subscription status changes.

### Syncing customer data and custom fields

By default, all new customers who purchase via Upsell will be synced to contact records in your CRM, including their name and email address.

You can enable additional Upsell fields for sync on the Contact Fields tab in the WP Fusion settings.

In addition to the billing and shipping fields, WP Fusion also allows you to sync several pseudo fields relating to a customer’s subscription. These are:

- Subscription ID: The ID of the customer’s subscription.
- Subscription Product Name: The name of the product the customer is subscribed to.
- Subscription Start Date: The start date of the subscription.
- Subscription End Date: The end date of the subscription.
- Next Payment Date: The date of the next scheduled subscription payment.

### Tagging customers

When editing any Upsell product, you can click on the WP Fusion settings tab to configure the integration with your CRM.

The two default settings are:

- Apply tags when purchased: These tags will be applied in your CRM when someone purchases the product.
- Apply tags when refunded: These tags will be applied if the purchase is refunded. The tags specified in the Apply tags when purchased setting will be automatically removed in the case of a refund.

If your product is a subscription product, you will see several additional settings:

- Apply tags – Subscription active: These tags will be applied when someone purchases the subscription product, as well as when a subscription status changes to Active.
- Remove tags: By checking Remove tags you can remove the tags applied at purchase when a subscription is cancelled, put on hold or expires. This is useful for revoking access to protected content when a subscription is cancelled.
- Apply tags – Subscription cancelled: These tags will be applied as soon as the subscription is cancelled. They will be removed if the subscription is later reactivated.
- Apply tags – Subscription payment failed: These tags will be applied when a subscription status changes to failed. They will be removed if the subscription is later reactivated.
- Apply tags – Subscription expired: These tags will be applied when a subscription status changes to expired. They will be removed if the subscription is later reactivated.

#### Subscription status changes

WP Fusion will apply and remove tags depending on changes in a user’s subscription status. That logic works like:

- If an active subscription is either put on hold, cancelled, or expires, and Remove Tags is checked the tags applied with the original purchase will be removed. The original tags will not be removed if a subscription is in the Pending Cancel status.
- If a subscription is in any status other than Active (cancelled, on-hold, etc.) and the status becomes Active again, the tags for all the other statuses will be removed. The tags applied with the original purchase will be re-applied if the user doesn’t already have those tags.
- If a subscription changes between any two statuses that aren’t Active, the tags will be applied for the new status, but no tags will be removed.

#### Coupons

When editing any coupon, you have the option to select tags in your CRM to be applied if the coupon is used.

### General settings

WP Fusion has one general setting for Upsell, at Settings » WP Fusion » Integrations.

Any tags specified in the Apply Tags to Customers setting will be applied to all Upsell customers at the time of checkout.

### Batch operations

WP Fusion includes three batch operations for Upsell, these can be found under Settings » WP Fusion » Advanced » Batch Operations.

These can be used to apply tags and update custom fields in your CRM in bulk for existing customers and subscribers.

The options are:

- Upsell Orders: Finds Upsell orders that have not been processed by WP Fusion, and adds/updates contacts while applying tags based on the products purchased.
- Upsell Subscriptions statuses: Updates user tags for all subscriptions based on current subscription status. Does not sync any custom fields.
- Upsell Subscriptions meta: Syncs the subscription product name, start date, status, and next renewal dates for all subscriptions. Does not modify any tags.

---

## FunnelKit

**Source:** [https://wpfusion.com/documentation/ecommerce/woofunnels/](https://wpfusion.com/documentation/ecommerce/woofunnels/)

### Overview

WP Fusion includes an integration with FunnelKit to sync your optins and customers to contact records in any one of 50+ CRMs and marketing automation tools.

You can also apply tags in your CRM based on the optin form that was submitted, as well as acceptance or rejection of an upsell.

Because FunnelKit uses WooCommerce for checkout, all of WP Fusion’s WooCommerce features work automatically with FunnelKit.

You can also use WP Fusion’s Abandoned Cart addon to track and recover carts abandoned from FunnelKit checkout pages.

### Custom Checkout Fields

Any custom fields you’ve added to your FunnelKit checkout pages can be mapped to custom fields in your CRM via the Contact Fields tab on the WP Fusion settings page.

The fields will appear beneath the rest of the WooCommerce fields, under the FunnelKit header.

When a customer makes a purchase, any enabled fields will be synced to their corresponding custom fields in your CRM.

### Optins

To enable the integration, click the WP Fusion tab under the Actions menu on your FunnelKit optin, and select Yes for Enable Integration.

When the optin form is filled out, a contact record will be added to your connected CRM. You can also optionally apply tags to the contact.

### Upsells

When configuring your FunnelKit upsells, you have the option to apply tags in your connected CRM when an upsell is accepted or rejected.

These two settings can be found beneath each Offer item when editing any Upsell step in your funnel.

### General Settings

WP Fusion has one general setting for FunnelKit, at Settings » WP Fusion » Integrations.

When you enable Run on Primary Order Accepted, WP Fusion will kick in and send data to your CRM when the WooCommerce order status becomes Primary Order Accepted instead of waiting for the Completed status.

To figure out whether or not you need this enabled, some context:

- By default WP Fusion doesn’t send any data to your CRM until an order status is Processing or Completed in WooCommerce.
- With FunnelKit, if you have an upsell, the order status is set to a custom “Primary Order Accepted” status while the upsell is shown to the customer.
- If the customer either accepts or rejects the upsell, the order status is set to Completed, and WP Fusion will run.
- However, if the customer leaves the upsell page, the order status stays as Primary Order Accepted for 15 minutes until it automatically converts to Completed.
- This could result in WP Fusion not sending any data to your CRM for 15 minutes while FunnelKit waits for a response to the upsell. Enabling Run on Primary Order Accepted helps make sure that the data is sent to your CRM regardless of whether or not the customer responds to the upsell.

If you need to enable Run on Primary Order Accepted, we recommend running a test checkout to make sure it works properly with your setup.

Note: If Run on Primary Order Accepted is enabled, tags configured on upsell products will not be applied (since the order has already been synced and marked complete).

If you need to apply tags based on upsell products, either leave the Run on Primary Order Accepted setting off, or configure the tags directly on the funnel steps using the Apply Tags – Offer Accepted setting (see above).

Another option is to shorten the amount of time FunnelKit takes to mark the order complete. You can manage this time interval from Global Settings > One Click Upsells > Order Statuses.

---

## WooCommerce Shipment Tracking

**Source:** [https://wpfusion.com/documentation/ecommerce/woocommerce-shipment-tracking/](https://wpfusion.com/documentation/ecommerce/woocommerce-shipment-tracking/)

### Overview

In addition to supporting WooCommerce, WP Fusion also includes an integration with the  WooCommerce Shipment Tracking extension.

Using this integration you can automatically sync shipment tracking links from WooCommerce to custom fields on contact records in your connected CRM.

Then you can send automated emails to customers containing their order details and shipment tracking information.

### Setup

Setup is simple, head to Settings » WP Fusion » Contact Fields » WooCommerce, and enable the Shipment Tracking Link field for sync by selecting a corresponding custom field in your CRM.

When a shipment tracking link is generated for an order, WP Fusion will automatically sync the link to the selected custom field on the customer’s contact record in your CRM.

---

## YITH WooCommerce Multi Vendor

**Source:** [https://wpfusion.com/documentation/ecommerce/yith-woocommerce-multi-vendor/](https://wpfusion.com/documentation/ecommerce/yith-woocommerce-multi-vendor/)

### Overview

WP Fusion includes an integration with the YITH WooCommerce Multi Vendor plugin for syncing vendor information between your WordPress site and connected CRM or marketing automation tool.

### Syncing Vendor Information

When a vendor registers a new account on your site, WP Fusion will automatically create a contact record in your CRM.

You can sync additional vendor information with custom fields in your CRM by enabling the fields for sync at Settings » WP Fusion » Contact Fields » YITH Vendors.

Any enabled fields will be synced when a vendor registers, or is approved. For more information, see the documentation on Syncing Contact Fields.

### Global Settings

At Settings » WP Fusion » Integrations » YITH Vendors Integration, there are two global options for YITH Vendors.

The two options are:

- Defer Until Activation: With this option checked, no data will be sent to your CRM until a vendor’s application has been approved by an admin.
- Apply Tags: The tags specified here will be applied in your CRM when a vendor’s application is approved.

---

## LaunchFlows

**Source:** [https://wpfusion.com/documentation/ecommerce/launchflows/](https://wpfusion.com/documentation/ecommerce/launchflows/)

### Overview

WP Fusion includes an integration with LaunchFlows for applying tags to customers in your CRM based on Sales Funnel choices viewed, clicked, or purchased

Because LaunchFlows uses WooCommerce for checkout, all of WP Fusion’s WooCommerce features work seamlessly with LaunchFlows.

You can also use WP Fusion’s Abandoned Cart addon to track and recover abandoned carts in LaunchFlows.

### Upsells

WP Fusion allows you to apply tags in your CRM when an upsell is either accepted or rejected by a customer.

These settings can be found in the LaunchFlows Upsell Widget while editing any offer.

### Custom Fields

LaunchFlows uses the free Checkout Field Editor plugin for managing custom checkout fields. WP Fusion will detect any custom checkout fields with that plugin, and they will will appear under the WooCommerce header in Settings » WP Fusion » Contact Fields.

### Apply Tags When Viewing

WP Fusion will automatically apply tags whenever a logged-in visitor views a specific Section or Column containing the LaunchFlows Apply Tags Widget versus an entire page or post.

This is most useful with a LaunchFlows Dynamic Backup Offer, where the primary offer product is replaced if it has already been purchased or is already in the cart.

In the example below, LaunchFlows will display either the Upsell product or the Upsell Backup product, but not both. WP Fusion will then apply the tag for whichever product was actually viewed.

#### Remove Tags

Similarly, WP Fusion will automatically remove tags whenever a logged-in visitor views a Section or Column containing the LaunchFlows Remove Tags Widget versus an entire page or post.

#### Debug Mode

LaunchFlows provides a convenient way to verify which tags will be applied or removed by WP Fusion. Slide the Debug Mode switch of either Widget to “on” and a convenient notice will be displayed on the front end of your site.

---

## WP Crowdfunding

**Source:** [https://wpfusion.com/documentation/ecommerce/wp-crowdfunding/](https://wpfusion.com/documentation/ecommerce/wp-crowdfunding/)

### Overview

WP Fusion includes an integration with the WP Crowdfunding plugin to allow syncing additional customer data to your CRM when someone makes a crowdfunding pledge via WooCommerce.

When WP Crowdfunding is active, an additional section will appear on the Contact Fields list in the WP Fusion settings where you can associate Crowdfunding-specific fields with custom fields in your CRM.

When a customer checks out the selected order meta data will be synced to the contact record for the customer in your CRM.

---

## WooCommerce All Products for Subscriptions

**Source:** [https://wpfusion.com/documentation/ecommerce/woocommerce-all-products-for-subscriptions/](https://wpfusion.com/documentation/ecommerce/woocommerce-all-products-for-subscriptions/)

### Overview

When using the All Products for WooCommerce Subscriptions extension, WP Fusion adds an additional section to the settings panel while editing your products.

Any tags specified under Apply tags when subscribed will be applied in addition to the main purchase tags only when the product is purchased as a subscription.

As well, the normal WP Fusion tagging options for subscription statuses will be visible beneath this. Any settings configured there will also only apply if the product is purchased as a subscription.

---

## Gifting for WooCommerce Subscriptions

**Source:** [https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/)

### Overview

In addition to supporting WooCommerce Subscriptions, WP Fusion also includes support for the Gifting for WooCommerce Subscriptions extension.

With this integration you can apply tags in your CRM to the recipient of a gifted WooCommerce subscription.

### Tagging

When this extension is active, additional options will appear on the WP Fusion tab when editing your subscription products.

These settings are:

- Apply tags to recipient: Any tags specified here will be applied just to the recipient of the gifted subscription.
- Remove tags: If selected, the Apply tags to recipient tags applied at purchase will be removed when the subscription is cancelled, put on hold, expired, or is switched.
- Remove tags from customer: You can check this box to remove any tags specified in Apply tags to recipient from the customer who made the original purchase. This is useful if you’re using tags to grant access to content and only want the gift recipient to get access. Note that the tags will not be removed from the customer if that customer already has a separate active subscription to the same product.

For more information on how WP Fusion handles subscription statuses see the WooCommerce Subscriptions documentation.

### Usage

This integration is a complicated by the fact that a WooCommerce checkout with a gifted subscription creates two users on your site:

1. The customer who purchased the subscription, and who is responsible for managing the billing
2. The gift recipient, who receives access to the purchased product

As such, two contact records will be created in your CRM, and both of them will be tagged.

#### The customer

These tags are applied to the customer who made the purchase
The tags configured at the top of the settings are applied to the customer who made the purchase. If there is a payment failure on the subscription, the original customer would be tagged Payment Failed, and you could use that to send an email like “Your gifted subscription had a payment failure”.

#### The gift recipient

These are the only tags that are applied to the gift recipient
After checkout, the gift recipient will only be tagged with the tags specified in the Apply tags to recipient setting. The gift recipient will not be tagged based on changes in the subscription status, since they aren’t responsible for billing.

If you are granting access to content using a tag, you can check Remove tags from customer, this will remove any tags that were applied to the gift recipient from the customer who made the purchase.

In our screenshots above, that means the customer who made the purchase would be tagged Subscription Purchased at checkout, and then this tag would be removed because the subscription was purchased as a gift. The gift recipient would then be tagged Gift Recipient and Subscription Purchased.

You can use this to ensure that only the gift recipient gets access to the purchased content, protected in this example by the Subscription Purchased tag.

#### Gift recipient fields

By default, the only information WooCommerce collects about the gift recipient is their email address. WP Fusion will use this email address to create a contact record in your CRM, with no name or other details.

WooCommerce then sends the gift recipient an email asking them to complete their profile and shipping address, and WP Fusion will sync the updated profile information to the gift recipient’s contact record in your CRM at that time.

If you’d like to collect gift recipient details at checkout, you can prompt your customers to fill in shipping details for the gift recipient. By default this says “Ship to a different address?”, but this can be customized with a checkout editor plugin, for example to read “Address of the recipient“.

You can use a checkout editor plugin to prompt customers to enter the gift recipient’s details in the Shipping Address part of checkout.
In this case, the name and address entered in the Shipping Details section will be synced to the gift recipient’s contact record in your CRM.

---

## WP Simple Pay

**Source:** [https://wpfusion.com/documentation/ecommerce/wp-simple-pay/](https://wpfusion.com/documentation/ecommerce/wp-simple-pay/)

### Overview

WP Fusion includes an integration with WP Simple Pay to sync your customers to contact records in any one of 40+ CRMs and marketing automation tools.

You can also apply tags in your CRM based on the order form used, and changes in subscription status (with WP Simple Pay Pro).

### Setup

To enable the integration, click the WP Fusion tab on any of your Simple Pay order forms, and check the Enable box.

Anyone who makes a purchase with the form will be added to your selected CRM with their name and email address. You can also optionally specify tags to be applied to the new contact record.

**Note:** For tagging to work correctly with SEPA payments, you must enable the 
```
payment_intent.processing
```

 webhook event in your [Stripe webhooks settings](https://dashboard.stripe.com/webhooks).

#### Webhooks

For the best reliability, you should have WP Simple Pay Pro configured to use webhooks to notify your site of successful payments.

If you are using WP Simple Pay Lite, or webhooks aren’t working on your site, WP Fusion will attempt to automatically detect this, and will display a notice at the top of the payment form settings tab.

When in fallback mode, WP Fusion will sync data to your CRM on the Payment Confirmation page, (the page with the [simpay_payment_receipt] shortcode).

If the Payment Confirmation page is not configured, and webhooks aren’t enabled, no data will be synced with your CRM. For more information on configuring the Payment Confirmation page, see the Simple Pay documentation.

#### Subscriptions

If you’re selling subscriptions with WP Simple Pay Pro, you have a few options to apply tags based on subscription status.

- Apply Tags – Payment Failed: These tags will be applied in your CRM when a recurring payment fails. They will be removed automatically if a subsequent recurring payment succeeds.
- Apply Tags – Subscription Cancelled: These tags will be applied in your CRM when a subscription’s status in Stripe is changed to Cancelled. If you have Stripe or WP Simple Pay set to Cancel at end of billing period then the tags won’t be applied until the end of the billing period.
- Remove Tags: If this box is checked then the tags specified in the Apply Tags setting will be removed when a subscription is cancelled. This can be used to revoke access to a course, membership, or other content protected by WP Fusion.

Note that for tagging to work correctly with the Subscription Cancelled status, your Stripe account must be configured to send the customer.subscription.deleted webhook. For more information on webhooks with WP Simple Pay, see this doc.

---

## WP Ultimo

**Source:** [https://wpfusion.com/documentation/ecommerce/wp-ultimo/](https://wpfusion.com/documentation/ecommerce/wp-ultimo/)

### Overview

WP Fusion integrates with WP Ultimo to add customers to your CRM of choice when they purchase a plan. You can also apply tags in your CRM based on the plan purchased and sync site details to custom fields.

**Note:** As of May 2025, WP Ultimo appears to be abandoned by their creators. While WP Fusion’s integration will still work in theory for existing WP Ultimo users, we suggest finding an alternate plugin for WaaS management.

### Tagging

When editing any plan in WP Ultimo, you can click on the WP Fusion tab to configure tags that should be applied in your CRM when that plan is purchased.

### Syncing custom fields

At Settings » WP Fusion » Contact Fields » WP Ultimo, there are two custom fields that can be synced to your CRM when someone creates a new site via WP Ultimo.

- Site Title: This is the title for the new site that the customer entered in the setup wizard
- Site URL: This is the URL for the new site (the “blogname”) that the customer entered in the setup wizard. For example if their website is at https://mycoolsite.example.com, the Site URL would be synced as “mycoolsite”

---

## WPPizza

**Source:** [https://wpfusion.com/documentation/ecommerce/wppizza/](https://wpfusion.com/documentation/ecommerce/wppizza/)

### Overview

WP Fusion integrates with WPPizza for adding new customers to your CRM and tagging them based on products purchased.

When a customer places an order via WPPizza they will be added to your selected CRM as a contact.

### Syncing customer fields

WP Fusion will automatically detect your WPPizza order form fields, and they will be listed under Settings » WP Fusion » Contact Fields.

For each order form field you can select a corresponding field in your CRM. When a customer places an order the enabled fields will be synced.

### Tagging

You can optionally tag your customers based on items they order.

The Apply Tags setting can be found in the WPPizza meta box while editing any menu item.

---

## EDD Software Licensing

**Source:** [https://wpfusion.com/documentation/ecommerce/edd-software-licensing/](https://wpfusion.com/documentation/ecommerce/edd-software-licensing/)

### Overview

WP Fusion integrates with the Easy Digital Downloads Software Licensing addon to synchronize customer license data to your CRM or marketing automation system.

With WP Fusion you can

- Track license statuses in your CRM
- Track license expiration dates in your CRM
- Apply tags to customers when licenses expire

### Field Syncing

Under Settings » WP Fusion » Contact Fields you will find a new section for EDD Software Licensing.

Here you can enable any license fields for sync. The available fields are:

- License ID
- License Key
- License Status
- License Expiration
- License Renewal URL

When these values are updated for a license the data will be sent to the customer’s contact record in your CRM.

### Tagging

When editing any download there is an additional option to specify tags for License Expiration.

When a license expires these tags will be applied to the customer. If the license is later reactivated, the tags will be removed.

### Event Tracking

Using the Event Tracking addon, you can track Easy Digital Downloads Software Licensing statuses and data as events in supported CRMs.

Events can be configured in two places. On an individual product, on the WP Fusion metabox:

Event tracking can be configured on the WP Fusion metabox when editing any Easy Downloads product.
Or in the Event Tracking global settings:

Event tracking can also be configured globally at Settings » Event Tracking.
The available triggers for event tracking with EDD Software Licensing are:

- License Activated: Triggered whenever a license key is activated on a site.
- License Deactivated: Triggered whenever a license key is deactivated on a site.
- Installed Update: Triggered when a plugin update is downloaded onto the remote site.

### Syncing Historical Data

Under the Batch Operations header under Settings » WP Fusion » Advanced there is an option to process historical licenses for your customers.

Running this process will go through all licenses and sync their status and expiration date to your CRM. If tags have been specified for license expiration these will also be applied at this time.

---

## CartFlows

**Source:** [https://wpfusion.com/documentation/ecommerce/cartflows/](https://wpfusion.com/documentation/ecommerce/cartflows/)

### Overview

WP Fusion integrates with CartFlows for syncing your customers with any one of 50+ supported CRMs and marketing automation platforms, as well as applying tags based on product purchases, and responses to upsell offers.

Because CartFlows uses WooCommerce for checkout, all of WP Fusion’s WooCommerce features work automatically with CartFlows.

You can also use WP Fusion’s Abandoned Cart addon to track and recover abandoned carts in CartFlows.

### Checkouts

In addition to WP Fusion’s normal features for tagging customers at checkout, you can also configure tags on individual checkout steps in your CartFlows flows.

This is found at Checkout » Settings » WP Fusion. A tag specified here will be applied to customers when they check out using this checkout step. It can be used to track the effectiveness of your flows and checkout layouts.

### Upsells

WP Fusion allows you to apply tags in your CRM when an upsell is either accepted or rejected by a customer.

The WP Fusion settings appear on each step’s Settings panel in the new CartFlows UI
These settings can be found on the WP Fusion tab while editing any offer.

### Custom Fields

WP Fusion will automatically detect any custom fields added to the CartFlows checkouts or optin forms.

These will appear under the WooCommerce header in Settings » WP Fusion » Contact Fields. You can enable any CartFlows custom fields for sync to a custom field in your CRM.

### General Settings

WP Fusion has one global setting for CartFlows, found at Settings » WP Fusion » Integrations » CartFlows.

When you enable Run on Main Order Accepted, WP Fusion will kick in and send data to your CRM when the WooCommerce order status becomes Main Order Accepted instead of waiting for the Completed status.

To figure out whether or not you need this enabled, some context:

- By default WP Fusion doesn’t send any data to your CRM until an order status is Processing or Completed in WooCommerce.
- With CartFlows, if you have an upsell, the order status is set to a custom “Main Order Accepted” status while the upsell is shown to the customer.
- If the customer either accepts or rejects the upsell, the order status is set to Completed, and WP Fusion will run.
- However, if the customer leaves the upsell page, the order status stays as Main Order Accepted for 15 minutes until it automatically converts to Completed.
- This could result in WP Fusion not sending any data to your CRM for 15 minutes while CartFlows waits for a response to the upsell. Enabling Run on Main Order Accepted helps make sure that the data is sent to your CRM regardless of whether or not the customer responds to the upsell.

If you need to enable Run on Main Order Accepted, we recommend running a test checkout to make sure it works properly with your setup.

Due to trying to sync the order details and the upsell details in two stages, it may result in tags being applied twice, which (depending on your CRM) could trigger duplicate emails.

---

## GiveWP

**Source:** [https://wpfusion.com/documentation/ecommerce/give/](https://wpfusion.com/documentation/ecommerce/give/)

### Overview

WP Fusion integrates with the GiveWP donation plugin to sync donors with any one of 40+ supported CRMs and marketing automation platforms, and apply tags and/or lists based on their donation level and subscription status.

Using WP Fusion’s Enhanced Ecommerce addon, you can also sync GiveWP donations as invoices or deals to sales pipelines in supported CRMs.

### Visual form builder settings

WP Fusion includes an integration with GiveWP’s new Visual Form Builder, you can configure tags by clicking on the WP Fusion tab from the settings panel.

#### Donation level settings

If your form is a multi-level donation form, WP Fusion can also apply tags in your CRM based on the donation level.

WP Fusion’s Give integration allows you to apply tags in your CRM based on the level of donation.
These settings are accessed by clicking on the Donation Amount block and expanding the WP Fusion dropdown in the sidebar.

### Classic form builder settings

With WP Fusion active, a new pane will appear when editing the settings for any donation form.

Here you can specify whether or not contacts should be added to your CRM after they make a donation. You can also specify any tags to apply.

#### Donation level settings

From the Donation Options tab you can create multiple donation levels. Here you can also tag contacts by level, allowing you to segment donors by their donation amount in your CRM.

#### Offline donations

If you accept offline donations, an option will appear on the Offline Donation tab to apply tags (or lists) in your CRM specifically when an offline donation is given.

You can then use these tags to trigger automated processes or emails specific to offline donors.

### Syncing donors

You can configure the field mapping between your Give donor fields and custom fields in your CRM in WP Fusion’s Contact Fields settings.

For each field in Give, you can select a corresponding field in your CRM. When a donation is made, the enabled fields will be synced to your CRM.

In addition to the standard Give fields, you’ll also see three “pseudo” fields:

- Donations Count: This will be updated each time a donation is made, and will be a number indicating how many donations have been given by the donor.
- Last Donation Date: The last donation date of the donor.
- Total Donated: This will be updated each time a donation is made, and will be a number indicating the total amount ever donated by the donor.

#### Custom Fields

If you’re using the Form Field Manager addon for Give, you can add custom fields to your donation forms, and WP Fusion supports syncing these fields to custom fields in your CRM.

Any custom fields you’ve added to your donation forms will show up under the Give header at Settings » WP Fusion » Contact Fields. From here you can choose a corresponding custom field in your CRM to store the collected data.

#### Gift Aid

If you’re using the Gift Aid addon for Give, you can sync the Gift Aid address provided by the donor to custom fields in your CRM.

These Gift Aid fields will appear beneath the main GiveWP fields in the Contact Fields list when the Gift Aid plugin is active.

#### Video – GiveWP General Settings and Donation Level Settings

### Email Optins

WP Fusion includes an option to add an email optin checkbox to your GiveWP donation forms.

This can be enabled by checking the box for Email Optin at Settings » WP Fusion » Integrations » GiveWP.

You can customize the message that’s displayed, as well as the tags that are applied when the checkbox is checked.

As an alternative to applying tags, you can also sync the value of the optin checkbox to a custom field in your CRM, by enabling the give_email_optin field for sync at Settings » WP Fusion » Contact Fields » GiveWP.

When enabled the optin checkbox will be displayed at the bottom of the GiveWP donation form.

If the optin checkbox is checked, it will sync a true value to your CRM (works best with checkboxes or email consent fields, but can be used in text fields as well).

If the opt-in checkbox is unchecked, it will be saved to the order record, but nothing will be synced. This is to avoid unsubscribing people who had previously opted in to marketing.

### Recurring Donations

If you have the Recurring Donations addon for Give active, two additional settings will appear on the WP Fusion panel.

Those options are:

- Apply Tags – Recurring: These tags will be applied in your CRM in addition to the “Apply Tags” tags, when a donor makes a recurring donation.
- Apply Tags – Cancelled: These tags will be applied in your CRM when a recurring donation is cancelled, either by an admin, the user, or the gateway.
- Apply Tags – Failed:  These tags will be applied in your CRM when a recurring donation payment fails.

#### Video – GiveWP Recurring Donations

### Funds & Designations

WP Fusion also supports the Funds & Designations extension, allowing you to apply tags in your CRM when a donation is made to a specific fund.

The settings for this are found at Settings » WP Fusion » Integrations » Give Funds.

In addition to applying tags, you can also sync a donor’s selected fund to a custom field in your CRM. This can be turned on by enabling the Selected Fund field for sync from the Contact Fields settings.

#### Video – GiveWP Custom Fields

### Event Tracking

Using the Event Tracking addon, you can track Give donations as real-time events in supported CRMs.

Events can be configured in the main Event Tracking settings page.

WP Fusion’s event tracking features for Give let you track events in real time in your CRM or email marketing system.
The available triggers for event tracking with Give are:

- New Donation: Triggered each time a new donation is made.

For more information on event tracking and the supported platforms, see the Event Tracking Overview.

### Enhanced Ecommerce

WP Fusion’s Enhanced Ecommerce addon (available to Plus and Professional license holders) can sync GiveWP donations to supported CRMs and email marketing platforms.

		The CRMs supported by Enhanced Ecommerce are listed below. Click on each to learn more about the capabilities of the integration.

- ActiveCampaign
- AgileCRM
- Brevo
- Drip
- Groundhogg
- HighLevel
- HubSpot
- Infusionsoft / Keap
- MailerLite
- NationBuilder
- Ontraport
- Salesforce
		
Donations are displayed on the NationBuilder Person details view
With GiveWP, the Ecommerce Addon will automatically send enhanced ecommerce data for all donations as long as Create Contacts is enabled on the donation form.

In CRMs that have Products as separate entities from Orders, you can associate your Give donation levels with CRM products by selecting them from the product dropdown while editing the donation level.

### Batch Operations

WP Fusion provides two batch operations for GiveWP data, to allow you to sync historical donor and payment data to your CRM. These can be found under Settings » WP Fusion » Advanced » Batch Operations in the WP Admin.

The two options are:

- Give donations: This operation goes through all of your Give donations (payments) in order from oldest to newest. For each payment it will create or update the donor’s contact record in your CRM, and apply any tags configured for that donation form. If the donation is a recurring donation, tags will be applied based on the donor’s current subscription status.
- Give donors: This operation goes through all of your Give donors, and for each it will create or update the donor’s contact record in your CRM. If you’ve enabled the Total Donated or Donations Count fields for sync, these will also be updated. This operation does not modify any tags.

#### Enhanced Ecommerce

If you’re using WP Fusion’s Enhanced Ecommerce addon, you’ll also see a third option:

- Give donations (Ecommerce addon): This operation looks for Give payments that have already been processed by the core WP Fusion (contact records were created and tags were applied), but that haven’t yet been processed by the Enhanced Ecommerce addon.You would only need to run this operation if you’d already been using WP Fusion with Give for some time, and you’ve just installed the Enhanced Ecommerce addon and now need to sync the ecommerce data to your CRM as well.

---

## Product Add-Ons for WooCommerce

**Source:** [https://wpfusion.com/documentation/ecommerce/woocommerce-addons/](https://wpfusion.com/documentation/ecommerce/woocommerce-addons/)

### Overview

WP Fusion includes additional support for the Product Add-Ons for WooCommerce extension. This extension allows you to collect additional product information from your customers, such as desired sizes, colors, engravings, etc.

For general information on syncing WooCommerce orders and customers with your CRM, see the WooCommerce documentation.

WP Fusion can then sync these selected addons and attributes to custom fields in your CRM, and apply tags based on addons selected.

### Syncing addon values to your CRM

If you are collecting additional information from the customer in the form of text, checkbox, or dropdown addons, these fields will show up for sync under the WooCommerce Addons header on the Contact Fields tab of the WP Fusion settings.

At the top of the list will appear your global addons. Beneath that will be the addons associated with specified products. These are identified by numeric keys comprised of the product ID and addon ID.

With Checkboxes-type addons, which have multiple options, WP Fusion provides two methods for syncing data.

The addon name will show as a mutiselect type field. This syncs all of the selected options into a single field in your CRM, for example a multi-checkboxes or list box field (in CRMs that support it).

Each one of the checkbox options will also show as a checkbox type field. This allows syncing the values of each individual option as true / false into a single CRM field. This is helpful for CRMs that don’t have a multi-checkbox custom field type, or if you want to track the checkbox values in separate custom fields.

### Applying Tags

When editing addons for an individual product, you’ll see a new column where you can specify tags to be applied if this addon is selected.

---

## EDD Recurring Payments

**Source:** [https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/)

### Overview

If you’re using the EDD Recurring Payments extension, WP Fusion provides additional options for applying tags based on changes in a user’s subscription status.

You can then use these tags to trigger automation sequences in your CRM to remind users to update their credit card information, offer discounts on subscription renewals, or anything else you like.

This functionality is in addition to the main Easy Digital Downloads integration.

### Product setup

WP Fusion adds a new settings metabox to all Easy Digital Downloads products where you can configure tags to be applied at purchase and based on subscription status.

WP Fusion provides several options for tracking and engaging with recurring payments subscribers in your CRM.
The tags specified in the Apply Tags setting will be applied when someone purchases the subscription product, as well as when a subscription status changes to Active.

By checking Remove Tags you can remove the tags applied at purchase when a subscription is cancelled, completed, or expired. This is useful for revoking access to protected content when a subscription is cancelled.

If you allow free trials, the tags specified in Subscription in Trial will be applied when a new trial is created, in addition to the Apply Tags tags. If the subscription later converts to a paid subscription (the status changes from trialling to active) the tags specified in Trial Converted will be applied.

You can also apply additional tags based on a change in the subscription status, allowing you to trigger followup sequences in your CRM when customers’ subscriptions are cancelled, put on hold, or expire:

- Subscription Completed: These tags will be applied when a recurring subscription is “completed”, i.e. the number of payments matches the Times field.
- Subscription Failing: These tags will be applied when a subscription has a failed payment. They will automatically be removed again once a payment is successful.
- Subscription Expired: These tags will be applied when a subscription status changes to Expired: either due to multiple failed payments, when it’s manually marked expired, or when a cancelled subscription reaches its expiration date.
- Subscription Cancelled: These tags will be applied immediately when a subscription is cancelled, either by an admin or a user.

#### Tags for price variations

For more granular control, WP Fusion also lets you apply tags when a subscription status changes for a specific price variation. See the screenshot below for an example.

### Syncing subscription fields

WP Fusion also lets you sync certain details about a customer’s active subscription to custom fields on their contact record.

This can be configured globally (i.e. a single set of fields for all products) at Settings » WP Fusion » Contact Fields.

WP Fusion can sync data from EDD subscriptions to custom fields or properties on contact records in your CRM
This can also be configured on individual downloads, for example if your customers have multiple concurrent subscriptions and you need to track the details in different custom fields.

When editing any recurring download product in EDD, you can map subscription details with custom fields in your CRM.
Those settings are visible in the WP Fusion meta box when editing any recurring download product.

The available fields are:

- Subscription ID: The ID of the subscription
- Subscription Status: The status of the subscription (‘pending’, ‘active’, ‘expired’, or ‘cancelled’)
- Subscription Download Name: The name of the product the customer has subscribed to (in cases of multiple products it will be the first product on the order)
- Subscription Start Date: The date the subscription started
- Subscription End Date: The date the subscription will end
- Subscription Trial End Date: The date the subscription’s trial period is scheduled to end (if applicable)
- Next Payment Date: The date of the next scheduled renewal payment (will be updated with each successful renewal)

Any enabled fields will be synced to your CRM when a subscription is created, or a subscription status changes.

If the Next Payment Date or Order Date are enabled, these will also be synced with each renewal payment.

### Cancellation surveys

The EDD Cancellation Survey plugin allows you to collect additional information from your customers when they cancel their subscription.

WP Fusion can sync the cancellation reasons to the customer’s contact record in your CRM, so you can run reports or trigger additional automations (such as offering a reactivation discount, or notifying an admin).

To enable, simply enable the Cancellation Reason field for sync from the Contact Fields list in the WP Fusion settings.

### How it works

#### Subscription status changes

WP Fusion will apply and remove tags depending on changes in a user’s subscription status. That logic works like:

- If an active subscription is either set to Completed, Failing, or Expired, and Remove Tags is checked, the tags applied with the original purchase will be removed. This includes the tags applied for the price ID (if applicable).
- If a subscription is in any non-active status (Completed, Failing, Expired etc.) and the status becomes Active again, the tags for all the other statuses will be removed. The tags applied with the original purchase will be re-applied if the user doesn’t already have those tags.
- If a subscription changes between any two statuses that aren’t Active, the tags will be applied for the new status, but no tags will be removed.

#### Tracking cancellations

Unlike WooCommerce Subscriptions, Easy Digital Downloads does not have a specific status for pending cancellation (i.e. a customer has cancelled their subscription, but still has time left before the next scheduled renewal).

WP Fusion’s functionality with subscription cancellations works as follows:

- When a customer cancels their subscription, the tags specified for Subscription Cancelled will be applied immediately.

If Remove Tags is checked, the tags applied at checkout will not be removed.
- Once the subscription’s next scheduled payment date passes (i.e. the subscription is fully cancelled and expired), the Subscription Expired tags will be applied.

If Remove Tags is checked, the tags applied at checkout will also be removed at this time.

This way you can use WP Fusion’s EDD Recurring Payments integration to grant access to content protected by CRM tags, without revoking access as soon as a customer cancels their subscription.

### Batch operations

WP Fusion includes two batch operations for EDD Recurring Payments, these can be found under Settings » WP Fusion » Advanced » Batch Operations.

These can be used to apply tags and update custom fields in your CRM in bulk for existing subscribers.

There are two options:

- EDD Recurring Payments statuses: This operation applies tags in your CRM for every subscriber based on the tags configured for your download products, and the customer’s current subscription status. It does not sync any fields.
- EDD Recurring Payments meta: Syncs the subscription product name, start date, status, and next renewal dates for all subscriptions. Does not modify any tags.

### Event Tracking

Using the Event Tracking addon, you can track Easy Digital Downloads product purchases and subscription status changes as events in supported CRMs.

Events can be configured in two places. On an individual download, in the WP Fusion metabox:

Or in the Event Tracking global settings:

The available triggers for event tracking with Easy Download Digitals are:

- Purchased Download: Triggered each time a single download is purchased.
- Downloaded Download: Triggered whenever a file from this download is downloaded.

When Recurring Payments is active, an additional trigger is available:

- Subscription Status Changed: Triggered when a customer’s subscription status changes.

---

## WooCommerce Smart Coupons

**Source:** [https://wpfusion.com/documentation/ecommerce/woocommerce-smart-coupons/](https://wpfusion.com/documentation/ecommerce/woocommerce-smart-coupons/)

WP Fusion works with WooCommerce Smart Coupons to allow you to sync automatically generated coupon codes to a customer’s contact record in your CRM.

When WooCommerce Smart Coupons is active, an additional field will appear in the Contact Fields list, under the WooCommerce section. To enable coupon syncing, simply select a corresponding field in your CRM, and check the box to turn it on.

---

## WooCommerce Deposits

**Source:** [https://wpfusion.com/documentation/ecommerce/woocommerce-deposits/](https://wpfusion.com/documentation/ecommerce/woocommerce-deposits/)

WP Fusion works with WooCommerce Deposits to allow you to tag customers when a deposit has been paid, in addition to our other WooCommerce functionality.

When WooCommerce Deposits is active, an additional tag select box will appear in the WP Fusion tab while editing the product. You can specify any additional tags here that you’d like to be applied when an order with a deposit has been completely paid.

---

## Easy Digital Downloads

**Source:** [https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/)

### Overview

WP Fusion integrates Easy Digital Downloads (as well as EDD Software Licensing and EDD Recurring Payments) with any one of over 40 supported CRMs and marketing automation platforms.

### Syncing customer data and custom fields

When customers check out with Easy Digital Downloads, WP Fusion will automatically save their customer data to your CRM as a contact record, with their name and email address (enabled by default).

You can enable additional fields for sync from the Contact Fields tab in the WP Fusion settings, such as billing address, customer ID, and last order date.

#### Custom fields

If you’re using the EDD Checkout Field Manager extension, any custom fields you’ve added to your checkout or profile forms will appear underneath the default EDD fields in the Contact Fields list.

You can enable any desired fields, and they will be synced to your CRM when a customer checks out or updates their profile.

### Tagging customers

When editing any Download product, the WP Fusion settings tab will contain options for applying tags in your CRM when a download is purchased or refunded.

These tags can then unlock content on your site or trigger followup email sequences and other automations from your CRM.

WP Fusion’s settings when editing an Easy Digital Downloads product
If you have EDD Recurring Payments active, you’ll see additional options for applying tags based on subscription status.

If you have the Abandoned Cart addon active, you’ll also see an option to select tags that should be applied when a cart with this download in it is abandoned.

#### Variable pricing

You can also configure tags to be applied at purchase (or after a refund) for pricing variations.

If variable pricing is enabled, you can configure WP Fusion settings for each price ID independently. The options appear in the price settings panel, and are:

- Apply tags when purchased: These tags will be applied in your CRM when someone purchases the download at this price ID
- Apply tags when refunded: These tags will be refunded when an order for a product at this price ID is refunded
- Restrict access tags: This setting allows you to hide the price ID unless the user is already logged in and has at least one of the specified tags. This can be used to create unique pricing or upgrade offers for existing customers.

#### Order statuses

You can also apply tags based on changes in order status. This can be configured in the WP Fusion general settings under the Integrations tab.

For each status you can select one or more tags in your CRM. When the order is changed to the status, the selected tags will be applied.

### General settings

The general settings for Easy Digital Downloads can be found at Settings » WP Fusion » Integrations.

The settings are:

- Apply Tags to Customers: These tags will be applied to anyone who makes a purchase via EDD.
- Apply Tags – Left Review: If you are using the Reviews addon for EDD, this setting lets you apply tags to anyone who leaves a review.
- Asynchronous Checkout: Normally WP Fusion syncs data to your CRM as the order is created in EDD. Enable Asynchronous Checkout to sync the order data after the payment receipt page is displayed, which speeds up the checkout for the customer.

#### Email optins

WP Fusion includes an option to add an email optin checkbox to the Easy Digital Downloads checkout. This can be enabled by checking the box for Email Optin at Settings » WP Fusion » Integrations » Easy Digital Downloads.

The settings are:

- Email Optin: This enables the email optin checkbox on the checkout form.
- Hide If Consented: When this is checked, the email optin checkbox will be hidden from any customers who have already consented to marketing.
- Email Optin Message: This is the message displayed with the email optin checkbox.
- Email Optin Default: Whether the optin checkbox defaults to Checked or Un-checked.
- Email Optin Tags: You can select one or more tags to be applied in your CRM when the email optin box is checked.

As an alternative to applying tags, you can also sync the value of the optin checkbox to a custom field in your CRM, by enabling the edd_email_optin field for sync at Settings » WP Fusion » Contact Fields » Easy Digital Downloads.

When enabled the optin checkbox will be displayed at the bottom of the Personal Details section of the EDD checkout.

In the Contact Fields settings, you can set the field type for the email optin field to either checkbox or date. The default is checkbox.

When set to checkbox, if the optin checkbox is checked, it will sync a true value to your CRM (works best with checkboxes or email consent fields, but can be used in text fields as well).

If the field format is set to date, it will sync the current date and time to your CRM. This works best with date or datetime fields.

Note: If the opt-in checkbox is unchecked, it will be saved to the order record, but nothing will be synced, and customers will not be unsubscribed from marketing.

This is by design and relates to the EU GDPR’s position that inaction should not be seen as a conscious decision.

### Discounts

WP Fusion adds several settings to the Edit Discount screen with Easy Digital Downloads.

The options are:

- Required Tags: If specified, the user must be logged in and have at least one of the selected tags to use the discount.
- Auto-apply Tags: If the user has any one of these tags, this discount will automatically be applied to the cart (see below).
- Discount Label: Used with the Auto-apply Tags setting, this gives you the option to hide the discount code on the checkout in favor of a custom label (see below).
- Apply Tags: These tags will be applied in your CRM when this discount is used.

#### Auto-applied Discounts

WP Fusion has the ability to automatically apply a discount to a customer’s EDD cart based on their tags in your CRM. This can be used to offer discounts to existing customers or members, or with abandoned cart recovery campaigns.

The discount will be applied if the customer has at least one of the required tags and:

- is logged in to your site
- or, is in an auto login session
- or, has visited a WP Fusion cart recovery URL

By default, Easy Digital Downloads shows the discount code in use on the cart and checkout screens. Since the discount has been automatically applied, you may want to hide the discount code.

The **Discount Label** setting can be used to customize how the auto-applied discount appears on the checkout page.
Text entered into the Discount Label setting will replace the discount code on the cart and checkout pages.

### Refunds

When an order is refunded in Easy Digital Downloads, the original tags applied at purchase will be removed, including the tags from price variations. You have the option to apply additional tags when an order is refunded.

### Order management

WP Fusion adds a meta box to the sidebar of each EDD payment showing some additional data related to the sync with your CRM.

If the Enhanced Ecommerce addon is active, you’ll also see a status indication for whether or not an invoice was synced to your CRM, and the invoice ID.

If you have email optins enabled, the customer’s optin status will be shown.

To re-sync a single payment to your CRM, press the Process WP Fusion actions again button.

#### Order notes

The order notes in the order details meta box will show when an order was processed by WP Fusion, and also any corresponding invoices created by the Enhanced Ecommerce addon.

In cases where there were errors during checkout, these will also be recorded to the order notes, as well as the WP Fusion activity logs.

#### Order status column

WP Fusion adds a status column to the main Easy Digital Downloads payments table. Hovering over the icon will display a tooltip which tells you when the order was processed by WP Fusion, and the associated contact ID.

The icon can change colors depending on the status of the sync with your CRM:

- If the icon is orange, the order was fully processed by WP Fusion.
- If the icon is grey, the order was not processed by WP Fusion
- If the icon is half-filled, this means that a contact record was created, but the Enhanced Ecommerce addon didn’t successfully process the order.

### Abandoned cart tracking

WP Fusion’s Abandoned Cart addon (available to Plus and Professional license holders) can capture customer details on the Easy Digital Downloads checkout form and sync them to your CRM before checkout has been completed.

For logged-in users or identified visitors, the addon can even trigger abandoned cart sequences when a product is added to the cart, even if the customer never visits the checkout.

You can then use tags and automations in your connected CRM to follow up with customers who started but didn’t complete checkout.

With Easy Digital Downloads cart abandonment tags can be set on the main WP Fusion meta box for each download.

You can also specify cart abandonment tags for individual price IDs when editing a price ID.

For more information on tracking abandoned carts with WooCommerce, see the Abandoned Cart Tracking Overview.

### Enhanced Ecommerce

WP Fusion’s Enhanced Ecommerce addon (available to Plus and Professional license holders) can sync Easy Digital Downloads orders to supported CRMs and email marketing platforms.

Deep Data from Easy Digital Downloads showing on the contact record in ActiveCampaign
With Easy Digital Downloads, the Ecommerce Addon will send enhanced ecommerce data for all orders, including support for downloads, download price IDs, discounts, and taxes.

In CRMs that have Products as separate entities from Orders, you can associate your EDD products with CRM products by selecting them from the product dropdown.

The CRMs supported by Enhanced Ecommerce are listed below. Click on each to learn more about the capabilities of the integration.

- ActiveCampaign
- AgileCRM
- Brevo
- Drip
- Groundhogg
- HighLevel
- HubSpot
- Infusionsoft / Keap
- MailerLite
- NationBuilder
- Ontraport
- Salesforce
		

### Event Tracking

Using the Event Tracking addon, you can track Easy Digital Downloads product purchases as events in supported CRMs.

The Event Tracking Addon also supports EDD Software Licensing and EDD Recurring Payments. For more information, see the EDD Software Licensing documentation and EDD Recurring Payments documentation.

Events can be configured in two places. On an individual product, on the WP Fusion metabox:

Event tracking can be configured on the WP Fusion metabox when editing any Easy Downloads product.
Or in the Event Tracking global settings:

Event tracking can also be configured globally at Settings » Event Tracking.
The available triggers for event tracking with Easy Download Digitals are:

- Completed Purchase: Triggered each time a payment is completed.
- Downloaded Download: Triggered whenever a file is downloaded.

### Syncing historical orders

If you already have an existing EDD store, you can use WP Fusion to sync all historical orders to your CRM.

First configure your products with any tags you’d like to be applied when purchased. Then navigate to Settings » WP Fusion » Advanced and scroll down to the Batch Operations section.

Select “Easy Digital Downloads orders” from the list of options, and click Create Background Task.

WP Fusion will go through all of your orders, adding / updating contacts as necessary, and tagging them based on the products purchased. A status bar will appear at the top of the page indicating the progress.

After each order is processed it will be locked by WP Fusion so it can’t be exported again, to prevent duplicate data from going to your CRM.

---

## WooCommerce Subscriptions

**Source:** [https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/)

### Overview

WP Fusion works with WooCommerce subscriptions to allow you to automatically tag customers in your CRM at purchase, and based on changes in their subscription status.

WP Fusion can also update custom fields on contact records in your CRM with details from their active subscriptions, such as product name, subscription start date, and renewal date.

For more information about the options available with WooCommerce in general, see the WooCommerce documentation.

### Product setup

WP Fusion adds a new settings panel to all WooCommerce products where you can configure tags to be applied at purchase and based on subscription status:

The tags specified in the Apply tags when purchased setting will be applied when someone purchases the subscription product, as well as when a subscription status changes to Active.

By checking Remove tags you can remove the tags applied at purchase when a subscription is cancelled, put on hold, expires, or is switched. This is useful for revoking access to protected content when a subscription is cancelled.

You can also apply additional tags based on a change in the subscription state, allowing you to trigger followup sequences in your CRM when customers’ subscriptions are cancelled, put on hold, or expire.

**Note:** For tracking failed payments it’s preferable to use the “Payment Failed” setting instead of “Put on hold”, since subscriptions will temporarily be put on hold as part of the renewal process.

#### Variable Subscriptions

The Apply tags when purchased setting on product variations mirrors the behavior of the Apply tags when purchased setting on the main WP Fusion tab:

- Any tags specified in that setting will be applied when the product is purchased, as well as when a subscription status changes to active.
- If Remove tags is enabled on the main settings tab, then the subscription variation tags will also be removed when the subscription is cancelled, put on hold, expires, or is switched.

### Subscription status changes

WP Fusion will apply and remove tags depending on changes in a user’s subscription status. That logic works like:

- If a subscription is put on hold as part of an automatic renewal, and the renewal payment is successful, WP Fusion will not modify any tags.
- If an active subscription is either put on hold, cancelled, or expires, and Remove Tags is checked the tags applied with the original purchase will be removed. The original tags will not be removed if a subscription is in the Pending Cancel status.
- If a subscription is cancelled by the user and still has time left on it, the Pending Cancel tags will be applied. When the term of the subscription is over and the subscription status changes to Cancelled, the Cancelled tags will be applied. If Remove Tags is checked, then the original tags applied at purchase will be removed at this time (once the subscription is fully cancelled).
- If a subscription is in any status other than Active (cancelled, on-hold, etc.) and the status becomes Active again, the tags for all the other statuses will be removed. The tags applied with the original purchase will be re-applied if the user doesn’t already have those tags.
- If a subscription renewal payment fails, the Payment Failed tags will be applied. These tags will be removed if a subsequent retry payment succeeds.
- If a subscription changes between any two statuses that aren’t Active, the tags will be applied for the new status, but no tags will be removed.

#### Concurrent subscriptions

To prevent a customer from potentially losing access to purchased products, WP Fusion handles concurrent subscriptions in two ways:

1. If a customer’s subscription is canceled, put on hold, or expired, and they still have another active subscription to the same product, the status change will be ignored.
2. If a customer’s subscription is canceled, put on hold, or expired, and Remove Tags is checked on the subscription product, WP Fusion will first check their other active subscription products to see if they apply the same tags. Any tags applied by products where the customer still has an active subscription will not be removed.

If a customer’s subscription is put on hold and they still have another active subscription to a product which applies the same tags, those tags will not be removed.

### Syncing subscription fields

WP Fusion also lets you sync certain details about a customer’s active subscription to custom fields on their contact record.

This can be configured globally (i.e. a single set of fields for all products) at Settings » WP Fusion » Contact Fields.

WP Fusion can sync data from WooCommerce subscriptions to custom fields or properties on contact records in your CRM
This can also be configured on individual subscription products, for example if your customers have multiple concurrent subscriptions and you need to track the details in different custom fields.

When editing any subscription product in WooCommerce, you can map subscription details with custom fields in your CRM.
Those settings are visible on the WP Fusion tab when editing any subscription product.

The available fields are:

- Subscription ID: The ID of the subscription
- Subscription Status: The status of the subscription (‘pending’, ‘active’, ‘on-hold’, ‘expired’, ‘cancelled’, or ‘pending-cancel’)
- Product Name(s): The name or names of the products the customer has subscribed to. By default this is sent as a comma-separated string, but you can change the field type to multiselect to populate a picklist or other multiselect compatible CRM field.
- Product SKU(s): The SKUs of the products the customer has subscribed to. As with Product Name this can be sent as text or multiselect.
- Subscription Start Date: The date the subscription started
- Subscription End Date: The date the subscription will end
- Subscription Trial End Date: The date the subscription’s trial period is scheduled to end (if applicable)
- Next Payment Date: The date of the next scheduled renewal payment (will be updated with each successful renewal)
- Next Payment Value: The amount the customer will be charged for their next subscription payment
- Last Order Type: This will either be normal, parent, renewal, or resubscribe depending on the status of the order

Any enabled fields will be synced to your CRM when a subscription is created, or a subscription status changes.

### Subscription management

When editing any WooCommerce subscription in the admin, you will see a meta box indicating that subscription’s status with WP Fusion.

The meta box will show whether or not the subscription’s parent order was processed by WP Fusion, and if so, include a link to view the customer’s contact record in your CRM.

You can click the Process WP Fusion actions again button to manually trigger WP Fusion to process the subscription. This will sync any enabled subscription fields to your CRM, as well as apply any tags you’ve configured based on the current subscription status.

### Event Tracking

Using the Event Tracking addon, you can track subscription activity as events in supported CRMs. This lets you view customer activity in real time in your CRM’s activity feed.

Events can be configured in the global Event Tracking settings page, at Settings » Event Tracking.

The available triggers are:

- Renewal Payment Received: Triggered each time a renewal payment is received.
- Subscription Status Changed: Triggered each time a subscription status changes.

You can also configure event tracking on individual subscription products. These settings are found at the bottom of the WP Fusion settings panel when editing any subscription product.

### Batch operations

WP Fusion includes two batch operations for WooCommerce Subscriptions, these can be found under Settings » WP Fusion » Advanced » Batch Operations.

These can be used to apply tags and update custom fields in your CRM in bulk for existing subscribers.

There are two options:

- WooCommerce Subscriptions statuses: This operation applies tags in your CRM for every subscriber based on the tags configured for your subscription products, and the customer’s current subscription status. It does not sync any fields.
- WooCommerce Subscriptions meta: Syncs the subscription product name, start date, status, and next renewal dates for all subscriptions. Does not modify any tags.

### Developers

WP Fusion’s WooCommerce integration is very developer friendly. If you open the integration file in /wp-fusion/includes/integrations/class-woocommerce-subscriptions.php you’ll find several actions and filters that allow you to modify what data is synced with your CRM (and when).

#### Actions

WP Fusion includes the following action hooks for WooCommerce Subscriptions:

- wpf_woocommerce_product_subscription_inactive
- wpf_woocommerce_product_subscription_active

#### Filters

WP Fusion includes the following filter hooks for WooCommerce Subscriptions:

- wpf_woocommerce_subscription_status_apply_tags
- wpf_woocommerce_subscription_status_remove_tags
- wpf_woocommerce_subscription_sync_fields

---

## WooCommerce

**Source:** [https://wpfusion.com/documentation/ecommerce/woocommerce/](https://wpfusion.com/documentation/ecommerce/woocommerce/)

### Overview

WP Fusion integrates with WooCommerce to add customers to your CRM when they make a purchase on your site, and tag them based on products purchased.

You can also use WP Fusion to restrict access to products and product variations, as well as track coupon usage, and auto-apply coupons based on CRM tags.

With supported platforms, WP Fusion’s Enhanced Ecommerce addon can also sync revenue data, deals, and/or invoices from WooCommerce to your CRM’s ecommerce system.

And WP Fusion’s Abandoned Cart addon can track abandoned WooCommerce carts, allowing you to follow up with customers using automated sequences in your CRM.

Having trouble with WP Fusion’s WooCommerce integration? Check out our [troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubelshooting/).

### Syncing customer data and custom fields

By default, when a customer checks out on your store, a new contact will be created in your CRM with their first name, last name, and email.

You can enable additional fields for sync from the Contact Fields tab in the WP Fusion settings.

By default all of the billing and shipping fields will be available for sync. If you’re using a custom checkout field editor plugin such as WooCommerce Checkout Field Editor, those fields will also be displayed.

There are three special fields at the end of the list:

- Email Optin: If you are using WP Fusion’s email optin feature to collect marketing consent at checkout, this will sync the value of the checkbox to a custom field as true or false, for updating checkbox and boolean fields in your CRM. You can optionally change the field type to date to sync the date and time that the customer gave marketing consent.
- Total Order Count: This will be updated each time a customer places an order, it will reflect the total count of orders for that customer on your store.
- Total Lifetime Value: This will be updated each time a customer places an order, with their total lifetime value (i.e. the total of all their non-refunded orders) on your store.

#### Order fields

WP Fusion has the ability to sync some details about the customer’s most recent order to custom fields in your CRM. Those can be enabled under the WooCommerce Order heading in the contact fields list.

WP Fusion supports syncing details about a customer’s most recent order to custom fields or properties in your CRM
The available fields are:

- Last Order Total: The total order value
- Order Notes: Any notes added by the customer to the order at checkout
- Last Order Date: The date of the customer’s most recent order
- Last Coupon Used: The coupon code used at checkout
- Last Order ID: The ID of the order
- Last Order Status: The order status, for example processing or refunded. Note: the pending status will not be synced to avoid duplicate order syncs at checkout
- Last Order Payment Method: The title of the payment method used, for example “Stripe”, “PayPal”
- Last Order Shipping Method: The title of the shipping method used, for example “Flat Rate”, “UPS Express”, etc

#### Attribute fields

If you’re selling variable products, WP Fusion also supports syncing selected attributes to custom fields in your CRM.

Under the WooCommerce Attributes header you’ll see all of the available attributes from your products. When a customer checks out the selected attribute will be stored in the corresponding custom field.

### General settings

WP Fusion has some general settings for WooCommerce. These can be found on the Integrations tab in the WP Fusion settings.

Those options are:

- Apply Tags to Customers: The tags specified here will be applied to all WooCommerce customers, when an order is placed.
- Hide Restricted Products: If you’ve configured access rules on an individual product, turning on this option lets you completely hide products from your store if the user doesn’t have the required tags.
- Restricted Product Error Message: The message here will be displayed when someone tries to add a restricted product to their cart.
- Asynchronous Checkout: When this is enabled WP Fusion runs WooCommerce order actions in the background, after the checkout has completed. This makes the checkout process faster, but it can sometimes have problems with caching or security plugins.
- Hide Coupon Field: If you’re using automatic discounts, enabling this option lets you hide the coupon input field on the checkout.
- Apply Tags – Left Review: The tags specified here will be applied when a user leaves a review on a product.

#### Automatic tagging

With some CRMs WP Fusion supports automatically generating and applying tags based on certain variables when someone makes a purchase in WooCommerce.

If your CRM supports this feature, these settings will appear on the Integrations tab in the WP Fusion settings:

The Tag Prefix will be appended to any of the automatically generated tags. This field also accepts the shortcode [status] to dynamically insert the status of the order.

For example if someone purchases a product Widget and the order status is Processing, you could set the Tag Prefix field to

Purchased – [status] –

This would apply the tag Purchased – Processing – Widget.

Automatic tags will be applied when an order is originally placed, but unlike tags configured on individual products, they will not be removed if the order is later refunded or cancelled, or if a subscription is cancelled. They are only applied, not removed.

#### Order status tagging

WP Fusion also includes an option where you can apply tags to a customer in your CRM when their order status changes in WooCommerce. For example if you manually mark an order as “Shipped”, an automated email could be sent through your CRM to customers.

The tags in this section will be applied to the customer when their order status is changed. These tags are not automatically removed. For example the tags for On Hold will not be removed if the order is later changed to Completed.

If you’d like to remove the tags you can do so via an automation in your CRM.

Warning: It is recommended not to sync Pending payment customers with your CRM. When this is enabled, WP Fusion needs to create a contact record and apply a tag as soon as the pending order is created in WooCommerce, and then update it and apply additional tags less than a second later when the payment is processed.

This slows down your checkout with many duplicate API calls and in most cases isn’t necessary.

A more performant method of tracking incomplete payments is to use Abandoned Cart Tracking.

### Email Optins

WP Fusion includes an option to add an email optin checkbox to the WooCommerce checkout.

**Note:** The email opt-in checkbox is not compatible with [the new WooCommerce checkout block](https://woo.com/document/cart-checkout-blocks-status/#section-6). To collect email optin consent via WP Fusion you will need to use the 
```
[woocommerce_checkout]
```

 [shortcode](https://woo.com/document/woocommerce-shortcodes/#checkout).
This can be enabled by checking the box for Email Optin in the main WP Fusion settings, under the Integrations tab.

The settings are:

- Email Optin: This enables the email optin checkbox on the checkout form.
- Hide If Consented: When this is checked, the email optin checkbox will be hidden from any customers who have already consented to marketing.
- Email Optin Message: This is the message displayed with the email optin checkbox.
- Email Optin Default: Whether the optin checkbox defaults to Checked or Un-checked.
- Email Optin Tags: You can select one or more tags to be applied in your CRM when the email optin box is checked.

As an alternative to applying tags, you can also sync the value of the optin checkbox to a custom field in your CRM, by enabling the email_optin field for sync at Settings » WP Fusion » Contact Fields » WooCommerce Customer.

When enabled the optin checkbox will be displayed next to the Place Order button on the checkout.

In the Contact Fields settings, you can set the field type for the email optin field to either checkbox or date. The default is checkbox.

When set to checkbox, if the optin checkbox is checked, it will sync a true value to your CRM (works best with checkboxes or email consent fields, but can be used in text fields as well).

If the field format is set to date, it will sync the current date and time to your CRM. This works best with date or datetime fields.

Note: If the opt-in checkbox is unchecked, it will be saved to the order record, but nothing will be synced, and customers will not be unsubscribed from marketing.

This is by design and relates to the EU GDPR’s position that inaction should not be seen as a conscious decision.
For more control over the checkout fields, we recommend WooCommerce Checkout Field Editor.

#### Only sync confirmed customers

Because WP Fusion uses tags applied at checkout to unlock content, enroll users into courses, and otherwise deliver access to purchased products— all customers will be synced with your CRM, regardless of whether or not they’ve consented to marketing.

It’s then up to you to use the tag and/or custom field value in your campaigns and automations to exclude contacts from marketing if they haven’t opted in.

On some simple stores, you may want to completely disable the sync of customers with your CRM if they haven’t opted in to marketing. This can be achieved with the following filter, added to your functions.php file:

```
function do_not_sync_unconfirmed_customers( $customer_data ) {

	if ( empty( $customer_data['email_optin'] ) ) {
		return false;
	}

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'do_not_sync_unconfirmed_customers' );
```

In this case no data will be sent to your CRM unless the customer opts in to marketing on the checkout form. You will not be able to apply tags to them, and they will not be able to access any content protected by WP Fusion.

### Order management

When editing any WooCommerce order in the admin, you will see a meta box indicating that order’s status with WP Fusion.

The meta box will show whether or not the order was processed by WP Fusion, and the customer’s contact ID in your CRM.

If you have email optins enabled, the customer’s optin status will be shown.

If you’re using the Enhanced Ecommerce addon you will also see the corresponding invoice ID (or order ID) in your CRM’s sales pipeline.

To manually process an order again (for example to fix an invalid field value), click the Process WP Fusion actions again button.

#### Order notes

The order notes in the order sidebar will show when an order was processed by WP Fusion, and also any corresponding invoices created by the Enhanced Ecommerce addon. In cases where there were errors during checkout, these will also be recorded to the order notes, as well as the WP Fusion activity logs.

#### Order status column

WP Fusion adds a status column to the main WooCommerce orders table. Hovering over the icon will display a tooltip which tells you when the order was processed by WP Fusion, and also gives you a link to view the customer’s contact record in your CRM.

The icon can change colors depending on the status of the sync with your CRM:

- If the icon is orange, the order was fully processed by WP Fusion.
- If the icon is grey, the order was not processed by WP Fusion
- If the icon is half-filled, this means that a contact record was created, but the Enhanced Ecommerce addon didn’t successfully process the order.

If you don’t want to see order sync statuses in the orders table, you can disable it by un-checking the WP Fusion Status checkbox in the Screen Options menu at the top of the page.

#### Process orders in bulk

WP Fusion’s batch operations for WooCommerce allow you to export all of your historical orders to your CRM at once.

For syncing individual orders in bulk, you can select orders using the checkboxes on the Orders list, and select Process with WP Fusion from the bulk actions dropdown.

A status indicator will appear at the top of the page showing the progress. WP Fusion will work through the selected orders one at a time, creating and updating contacts in your CRM, and applying any configured tags.

If you are using Enhanced Ecommerce, invoices will also be created (or updated) for the selected orders.

### Tagging customers

WP Fusion gives you a variety of ways to tag your WooCommerce customers in your CRM. The simplest method is to tag based on the product purchased, but you can also apply tags to all customers as a global setting, or based on product categories.

**Note:** Most CRMs that WP Fusion supports use “tags” to segment contact records, but the interfaces may vary depending on what your platform uses for segments. For example with HubSpot and Brevo you’ll see “lists”, or with MailerLite you’ll see “groups”. This is just a label difference and the end functionality is the same.

#### Product setup

When WP Fusion is active, you’ll see a new tab on the WooCommerce product settings where you can specify tags to be applied when that product is purchased, refunded, or when an initial transaction fails.

The standard settings are:

- Apply tags when purchased:  These tags will be applied in the CRM when the product is purchased. They will be removed automatically if the order is refunded or cancelled.
- Apply tags when refunded: These tags will be applied in the CRM when an order is refunded.
- Apply tags when transaction failed: These tags will be applied when an initial payment fails, or when an order status changes to Failed. They will be removed when a successful payment is received.

You may see additional fields for Subscriptions or Deposits if you are using those plugins.

If the Abandoned Cart Addon is active you can also configure tags to be applied when the product is left in an abandoned cart.

#### Variable products

If you’re using variable products, you can also specify tags to be applied at purchase per-variation. These are visible when editing the variation, alongside the price and other details.

WP Fusion also gives you the option to only show specific variations to users based on their tags. This can be used to offer special products or pricing to existing members.

#### Category tagging

You can also specify tags to be applied at the category level. To do this click Edit on any product category, and you’ll see a setting where you can specify tags to be applied.

#### Bulk editing

There may be situations where you need to bulk edit the tags that are configured on your WooCommerce products. For bulk editing, we recommend Setary.

Setary connects to your WooCommerce store (or multiple stores) and allows you to edit WooCommerce product details in bulk, in an intuitive spreadsheet interface.

Setary’s WP Fusion integration allows you to configure the settings for Apply Tags, Apply Tags – Refunded, and Apply Tags – Failed for all of your products.

![Edit WP Fusion tags in bulk](https://setary.com/wp-content/uploads/2023/08/setary-wp-fusion-columns-1024x250.png)Setary’s WP Fusion integration lets you configure tags for your products in bulk, even across multiple WooCommerce stores.
For more information, see the Setary documentation.

As an alternative to Setary, WPSheetEditor also provides a free WP Fusion addon to customers of their WooCommerce Products Spreadsheet plugin.

Quickly set up WP Fusion for many products using WPSheetEditor
You can read a tutorial on bulk editing WP Fusion tag rules with WPSheetEditor here.

### Refunds

If an order is marked Refunded or Cancelled in WooCommerce, the tags specified in Apply tags when purchased will automatically be removed. You can also optionally specify tags to be applied when an order is refunded using the Apply tags when refunded setting.

If there are tags you do not want removed during a refund, you can include these tags in the Apply tags when refunded setting. In this case a notice will show in the logs when the refund is processed, and the tags will not be modified.

You can prevent tags from being removed during a refund by adding them to the *Apply tags when refunded* setting.
Note that if you refund a WooCommerce Subscriptions renewal payment and the user’s subscription is still active, no tags will be modified. This is to help in cases where a user might have signed up or been charged twice and you need to refund the duplicate order, without revoking access.

If you want access to be revoked when refunding a renewal payment, it’s best to cancel the subscription first. You can also automatically remove tags when a subscription is cancelled by checking the Remove Tags box. For more information see the WooCommerce Subscriptions documentation.

### Coupons and Discounts

While editing any coupon, you can specify tags to be applied to the customer if the coupon is used.

#### Restricting access to coupons

You can require a user to be logged in and to have a specific tag to use a coupon code. This can be set from the Required Tags setting on the Usage Restriction tab in the coupon settings.

Using WP Fusion you can restrict access to coupons based on a user’s tags in your CRM.

#### Auto-applying discounts

You can also automatically grant coupons to customers based on their tags in your CRM.

If the user has any one of the specified tags, the discount will be applied when they add a product to their cart. This feature also works with our auto-login links.

In cases where the user has more than one tag linked to a discount, the discount with the highest amount will be applied first. If the cart value has already been discounted to zero, no additional automatic discounts will be applied.

#### Discount labels

You can optionally override the coupon labels shown on the cart and at checkout. The Discount label is displayed in the order summary.

![](https://wpfusion.com/wp-content/uploads/2016/01/woo-coupons-discount-label-300x204.jpg)Custom discount label in the order summary.
By default this will be the coupon code of the applied coupon, but here we’ve overridden it to say “Discount”. You could set this to say something like “Member Discount” or “Loyalty Program”.

The Discount message is shown at the top of the cart or checkout when the coupon is applied.

By default this will say “Coupon code applied successfully.” Here we’ve overridden it to say “You received a discount!”

### Product Availability

You have the option to restrict access to a product unless a user has a certain tag applied to their account.

This is a great way to offer up-sell products or add-ons for your existing users. For more information on restricting content, see the documentation on meta box setup.

You can restrict access to WooCommerce products using tags or lists in your connected CRM.
If you specify a redirect in the WP Fusion meta box, customers who attempt to view the product will be redirected to the page or URL you’ve specified.

If you don’t specify a redirect, the product will be visible, but the Add To Cart button will be disabled. Customers who attempt to add the product to the cart will be shown the message set in the General settings in the Restricted Product Error Message option.

If a WooCommerce product is protected by a tag and no redirect is set, the Add To Cart button will be disabled.
You can similarly restrict access just to individual product variations via the variation settings.

### Abandoned cart tracking

WP Fusion’s Abandoned Cart addon (available to Plus and Professional license holders) can capture customer details on the WooCommerce checkout form and sync them to your CRM before checkout has been completed.

For logged-in users or identified visitors, the addon can even trigger abandoned cart sequences when a product is added to the cart, even if the customer never visits the checkout.

You can then use tags and automations in your connected CRM to follow up with customers who started but didn’t complete checkout.

With WooCommerce you can specify product-specific abandoned cart tags from the WP Fusion panel while editing any product.

WP Fusion allows you to apply tags in your CRM when a customer begins to check out with any WooCommerce product or variation.
You can also specify variation-specific tags when editing any variation.

For more information on tracking abandoned carts with WooCommerce, see the Abandoned Cart Tracking Overview.

### Enhanced Ecommerce

WP Fusion’s Enhanced Ecommerce addon (available to Plus and Professional license holders) can sync WooCommerce orders to supported CRMs and email marketing platforms.

Deep Data from WooCommerce showing on the contact record in ActiveCampaign
With WooCommerce, the Ecommerce Addon will send enhanced ecommerce data for all orders, including support for products, variations, quantities, discounts, shipping, and taxes.

#### Products

In CRMs that have Products as separate entities from Orders, you can associate your WooCommerce products with CRM products by selecting them from the product dropdowns.

Variable products can be associated within the individual variations.

#### Sales pipelines

With CRMs that support sales pipelines, like Brevo, HighLevel, HubSpot and Zoho, you can also map WooCommerce order statuses with individual pipelines and stages.

This can be found under the Enhanced Ecommerce settings.

Map WooCommerce order statuses to HubSpot pipelines with WP Fusion.
When the order status is updated in WooCommerce, the deal stage will be updated in your CRM.

Warning: It is recommended not to sync Pending payment orders with your CRM. When this is enabled, WP Fusion needs to create a contact record and a deal in the CRM as soon as the pending order is created in WooCommerce, and then update it less than a second later when the payment is processed.

This slows down your checkout with many duplicate API calls and in most cases isn’t necessary. A more performant method of tracking incomplete payments is to use Abandoned Cart Tracking.

#### Supported platforms

		The CRMs supported by Enhanced Ecommerce are listed below. Click on each to learn more about the capabilities of the integration.

- ActiveCampaign
- AgileCRM
- Brevo
- Drip
- Groundhogg
- HighLevel
- HubSpot
- Infusionsoft / Keap
- MailerLite
- NationBuilder
- Ontraport
- Salesforce
		

### Event Tracking

Using the Event Tracking addon, you can track WooCommerce product purchases as events in supported CRMs.

Events can be configured in two places. On an individual product, on the WP Fusion settings tab:

Event tracking can be configured on the WP Fusion tab when editing any WooCommerce product.
Or in the Event Tracking global settings:

Event tracking can also be configured globally at Settings » Event Tracking.
The available triggers for event tracking with WooCommerce are:

Purchased Product

Triggered each time a single product is purchased. If the customer’s order has multiple products, it will sync individual events for each product, regardless of the quantity. For example, if a customer purchases 2 items of Product1 and 3 items of Product2, only one event per product (Product1 and Product2) will be synced.

This trigger is used for tracking the performance of individual products, since the product details aren’t available in the Order Placed trigger.

Order Placed

Triggered each time a WooCommerce order is placed. This event is triggered each time a WooCommerce order is placed, but only for orders with a status of “completed” or “processing“.

Order Status Changed

Triggered when a WooCommerce order status changes. This event is triggered whenever the status of a WooCommerce order is changed. By default, WooCommerce sets the initial order status to “pending” and then will change it to “processing“, “completed“, or “failed“. This status change will trigger this event.

### Syncing historical orders

If you already have an existing WooCommerce store, you can use WP Fusion to sync all historical orders to your CRM.

First configure your products with any tags you’d like to be applied when purchased. Then navigate to Settings » WP Fusion » Advanced and scroll down to the Batch Operations section.

Select “WooCommerce orders” from the list of options, and click Create Background Task.

WP Fusion will go through all of your orders (from oldest to newest), adding or updating contacts in your CRM as necessary, and tagging them based on the products purchased. A status bar will appear at the top of the page indicating the progress.

By default, WP Fusion will only export orders that weren’t already successfully processed by WP Fusion.

If you un-check Skip already processed orders, WP Fusion will export all of the orders on your site, regardless of whether they’ve already been synced.

In the case of refunded or cancelled orders, any tags configured in the Apply tags when refunded setting will be applied.

If you want to customize the export, such as limiting it to a certain date range or order status, see the documentation and example for the wpf_batch_woocommerce_init action.

### Developers

WP Fusion’s WooCommerce integration is very developer friendly. If you open the integration file in /wp-fusion/includes/integrations/class-woocommerce.php you’ll find many actions and filters that allow you to modify what data is synced with your CRM (and when).

Some general notes:

#### HPOS

WP Fusion and the Enhanced Ecommerce addon both support WooCommerce High Performance Order Storage.

#### Order statuses

By default WP Fusion processes a WooCommerce order when its status is changed to either processing or completed. When an order is “processed”, a contact record is created in your CRM, and any tags configured on the products (and elsewhere) are applied.

There may be situations in which you need to process an order at a different status. For example maybe you want to apply tags that grant access to content while an order is still in pending status (i.e. before a payment has been received).

#### Register additional statuses for sync

You can register additional statuses by hooking into the woocommerce_order_status_{$status} action and calling wp_fusion()->integrations->woocommerce->process_order( $order_id ).

```
function wpf_add_custom_order_status() {

	// Process "pending" status orders
	add_action( 'woocommerce_order_status_pending', array( wp_fusion()->integrations->woocommerce, 'process_order' ) );

	// OR, alternatively, on a custom order status "tbh-unpaid"
	// add_action( 'woocommerce_order_status_tbh-unpaid', array( wp_fusion()->integrations->woocommerce, 'process_order' ) );

}

add_action( 'wp_fusion_init', 'wpf_add_custom_order_status' );
```

Note that the woocommerce_order_status_* hooks are triggered when an order status is changed to that status.

If you wish to register additional orders for export (using the order exporter), you can use the wpf_order_statuses filter:

#### Register additional order statuses for export

This example causes WP Fusion to treat the pending and failed order statuses as valid for export by the WooCommerce Orders batch operation.

```
add_filter( 'wpf_woocommerce_order_statuses', function( $statuses ) {

	$statuses[] = 'pending';
	$statuses[] = 'failed';

	return $statuses;

} );
```

#### Exclude order statuses from syncing

Or, maybe you want to prevent WP Fusion from running on a particular status. This example causes WP Fusion to ignore the processing status and only run on the completed status.

```
add_filter( 'wpf_woocommerce_order_statuses', function( $statuses ) {

	$ignore_statuses = array( 'processing' );
	return array_diff( $statuses, $ignore_statuses );

} );
```

#### Actions

WP Fusion includes the following action hooks for WooCommerce:

- wpf_guest_contact_created
- wpf_guest_contact_updated
- wpf_woocommerce_payment_complete
- wpf_woocommerce_panel
- wpf_woocommerce_variation_panel
- wpf_woocommerce_coupon_panel

#### Filters

WP Fusion includes the following filter hooks for WooCommerce:

- wpf_woocommerce_customer_data
- wpf_woocommerce_order_statuses
- wpf_woocommerce_billing_email
- wpf_woocommerce_user_id
- wpf_woocommerce_apply_tags_checkout
- wpf_auto_apply_coupon_for_user

---

