# Add Or Modify A Subscription

*Category from WooCommerce Subscriptions documentation*

---

## Manually Add or Import a Subscription

**Source:** [https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/)

# Manually Add or Import a Subscription

			Just like creating an order manually, WooCommerce Subscriptions also gives store managers the ability to create subscriptions manually. If you’re familiar with creating orders manually in WooCommerce, this process will look familiar but it does have a few distinct differences.

This guide explains the process of manually adding or importing a subscription. If you want to modify an *existing* subscription, you’ll want to read [Updating an Existing Subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/update-an-existing-subscription/) for that process.

## Manually add a subscription

[↑ Back to top](#doc-title)

Manually adding a new subscription for customers is helpful for stores that might need to take orders in person or over the phone. It’s also helpful if something goes wrong at checkout and customers need your help to start a subscription.

If you’ve ever [created an order manually](https://woocommerce.com/document/managing-orders/view-edit-or-add-an-order/#manually-adding-an-order) in WooCommerce, you’ll find the process familiar. The difference is that with subscriptions, you set up an a[greement with your customer for future transactions](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/), whereas an order becomes a past transaction once the customer pays.

**Follow these steps to manually add a subscription:**

1. **Go to** **WooCommerce > Subscriptions**.
2. **Click** the **Add Subscription** button.
3. **Add** a customer to the subscription. More info below in [Add a Subscriber](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#add-a-subscriber) section below.
4. **Add** a billing schedule. More info below in [Set a Billing Schedule](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#set-a-billing-schedule) section below.
5. **Add** products, shipping costs, and fees to the subscription, following the process described in the [Add Line Items](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#add-line-items-products-fees-and-shipping) section below.
6. **Add** taxes, following the process described in the [Add Recurring Taxes](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#add-recurring-taxes) section below.
7. **Recalculate** totals for the line items and taxes, following the process described in the [Calculate Recurring Totals](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#calculate-recurring-totals) section below.
8. **Set** the subscription status, following the process described in the [Set Subscription Status](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#set-subscription-status) section below.
9. Under Subscription actions, click **Update**to start the Subscription.
10. Under Subscription actions, select “Create pending parent order”. This will create a pending parent order associated with the subscription.
11. Go to the pending parent order, from there you can email the customer an invoice with a payment link by selecting “Send order details to customer” in the Order actions dropdown menu.

This creates a subscription that customers can pay by either making [manual renewal payments](https://woocommerce.com/document/subscriptions/renewal-process/#section-4) or using supported [automatic renewal payment gateways](https://woocommerce.com/document/subscriptions/payment-gateways/#extensions-for-automatic-payments) for each billing cycle.

Once a parent order exists, customers can make payment either by following the payment link in the order details email, or log into their account and visit the “My Account” area to pay for the order from the “Orders” or the “Subscriptions” tab.

Once the customer pays the pending parent order, the subscription status switches to “Active,” and the system creates a new renewal order when the next payment is due based on the billing schedule you set in step 4.

Depending on whether the payment gateway extension supports it or not, you can also link a subscription to a payment gateway for [automatic recurring payments](https://woocommerce.com/document/subscriptions/renewal-process/#automatic-recurring-payments). To do that, follow the instructions in [Charging Renewal Payments](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-15).

![](https://woocommerce.com/wp-content/uploads/2022/01/Manually-Create-a-Subscription-WooCommerce-Subscriptions.png?strip=all&w=704)Manually Add a Subscription

Manually adding a subscription does not send out order emails; those need to be sent manually also.

### Add a subscriber

[↑ Back to top](#doc-title)

Each subscription in your store needs to be associated with a WordPress user account for a customer. Therefore, a good first step when creating a subscription is to link the customer account to the subscription.

If the subscriber does not already have a user account with your WordPress site, you should [add the user via the Users → Add New administration screen](https://codex.wordpress.org/Users_Add_New_Screen) before proceeding.

To add the customer to a subscription:

1. Click the **Customer** select box under the subscription details meta box.
2. Type the first few letters of the name or email for the customer.
3. Wait for WooCommerce to find a set of matching accounts.
4. Once a set of accounts is loaded, click the customer.
5. Save the customer on the subscription immediately by clicking the **Create** button (optional).

![Customer drop down](https://woocommerce.com/wp-content/uploads/2013/10/Add_1_customer.png?w=950)Add customer drop-down

Once you add a customer to the subscription, enter the billing and shipping addresses to manage recurring payments and shipments for the subscription. The system can automatically load existing addresses from the customer’s account into the Billing Details or Shipping Details of the Subscription details meta box.

To add these details:

1. Click the pencil icon next to **Billing Details**.
2. Click **Load Billing Details**.
3. Click the pencil icon next to **Shipping Details**to **Load Shipping Details** or **Copy Billing Details**.

You can also add or edit these addresses, if necessary.

### Set a billing schedule

[↑ Back to top](#doc-title)

The cornerstone of a subscription is its billing schedule. This schedule includes dates for important events, such as:

- Date that the subscription’s trial will end (if any)
- End date of subscription itself (if it expires automatically)
- Recurring interval and period on which [renewal orders](https://woocommerce.com/document/subscriptions/renewal-process/) are generated to capture recurring payments and manage shipping of items.

When you manually add or edit a subscription, the billing schedule set on any subscription products added as line items will not automatically apply as the billing schedule for that subscription. Instead, you have complete freedom to set the upcoming dates and recurrence for the line items of that subscription.

**To set a billing schedule on a subscription:**

1. Click the first select box in the **Recurring** section of the **Schedule** meta box and set the **billing interval** for the subscription. By default, this is set to *every*, which means once per day, week, month or year, a renewal order is generated.
2. Click the second select box in the **Recurring** section of the **Schedule** meta box and set the **billing period** for the subscription.
3. Click the **Start Date** text box and enter a date or use the calendar to choose a date. The start date must be in the past.
4. Click the **Trial End Date** text box, and enter a date or use the calendar to choose a date (optional).
5. Click the **Next Payment Date** text box, and enter a date or use the calendar to choose a date.
6. Click the**End Date** text box, and enter a date or use the calendar to choose a date (optional).

![Billing schedule meta box](https://woocommerce.com/wp-content/uploads/2013/10/Add_2_schedule.png?w=950)Set Subscription Billing Schedule

**Note:** The timezone used for these dates is the timezone of the web browser used while editing dates (as displayed at the bottom of the meta box). It is not the timezone of your site or web server. The browser timezone is used to avoid the need to calculate the timezone offset for your WordPress site/WooCommerce store when editing a date from a different timezone to the store. Set the date and time to the time you want it to process in your current local time, Subscriptions then convert this to GMT/UTC timezone to make sure it is processed at that time.

### Add line items: Products, fees and shipping

[↑ Back to top](#doc-title)

Normally, a subscription provides the customer with access to a certain product or products on a recurring basis. That subscription may also have a shipping cost and/or a fee associated with it. These are all called line items on the subscription.

**To add a product line item to a subscription:**

1. Click the **Add item(s)** button in the items meta box.
2. Click the **Add product(s)** button.
3. Click in the text box displaying the placeholder: *Search for a product…*
4. Type the first few letters of the product’s name.
5. Wait for WooCommerce to find a set of matching products.
6. Click the name of the product you wish to add when it loads.
7. Repeat steps 4-6 if you wish to add more products (optional).
8. Click **Add**. The chosen product(s) displays as line items in the items meta box.
9. **Save**.

![Add product button](https://woocommerce.com/wp-content/uploads/2013/10/Add_3_items.png?w=950)Add Product Line Item to a Subscription

#### Add a shipping line item

To add a shipping line item to a subscription:

1. Click the **Add item(s)** button in the items meta box.
2. Click the **Add shipping** button. A generic *Shipping* line item displays as a line item in the items meta box.
3. Click the pencil icon next to the shipping line item.
4. Click in the text box displaying the placeholder: *Shipping Name.*
5. Enter a label for the shipping line item to display to customers viewing the subscription and associated orders.
6. Click the select box next to the *Shipping Name* text box.
7. Select a *Shipping Method* you want to use to determine the cost and taxes of this shipping line item, if any (learn more about shipping methods in the [shipping methods guide](https://woocommerce.com/document/premium-shipping-extension-options/)).
8. Click in the text box under the **Total** column with the placeholder: *0*
9. Enter the amount you want to charge customers for shipping on each renewal.
10. **Save**.

![Add shipping button](https://woocommerce.com/wp-content/uploads/2013/10/Add_5_shipping.png?w=950)Step 2: Add a Shipping Item

![Shipping type drop-down](https://woocommerce.com/wp-content/uploads/2013/10/Add_6_shipping.png?w=950)Step 7: Choose Shipping Line Item Type

![Shipping price](https://woocommerce.com/wp-content/uploads/2013/10/Add_7_shipping.png?w=950)Step 8: Add Shipping Line Item Price

#### Add a fee line item

To add a fee line item to a subscription:

1. Click the **Add item(s)** button in the items meta box.
2. Click the **Add fee** button. A popup will ask for a fee price or percentage you want to charge customers for this fee on each renewal.
3. Click **OK**. A generic *Fee* line item displays as a line item in the items meta box.
4. Click the pencil icon next to the fee line item. (optional)
5. Click in the text box displaying the placeholder: *Fee Name*. (optional)
6. Enter a label for the fee line item to display to customers viewing the subscription and associated orders. (optional)
7. **Save**.

![Add fee button and pop-up](https://woocommerce.com/wp-content/uploads/2013/10/Add_8_fee.png?w=950)Add a Fee Line Item to a Subscription

### Add recurring taxes

[↑ Back to top](#doc-title)

If you want each renewal payment to include taxes, you must add a tax rate or rates to the subscription. Before adding a tax rate to the subscription, you need to [set up tax rates in WooCommerce](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/). After you set up tax rates and [add and save a product](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#add-line-items-products-fees-and-shipping) to the subscription you can add a tax rate.

Follow these instructions to add a tax rate to a subscription:

1. Click the **Add item(s)** button in the items meta box.
2. Click the **Add Tax** button.
3. Click the radio button next to the tax rate you wish to add.
4. Click **Add**.
5. Click **Recalculate**.
6. Repeat for each tax rate you want applied to the subscription.

The system displays a new tax column next to the *Total* column for each line item. Initially, tax values for each line item appear as a dash (-).

**Note:** You can also set tax values manually by editing each line item and clicking the *pencil* icon on that row.

![Add recurring taxes](https://woocommerce.com/wp-content/uploads/2013/10/Add_9_tax.png?w=950)Add Recurring Taxes

### Calculate recurring totals

[↑ Back to top](#doc-title)

After you add line items and/or taxes to include on the subscription, WooCommerce calculates taxes for each line item and the total amount to charge the customer for each renewal.

To calculate taxes and totals, click the **Recalculate** button on the items meta box.

![Recalculate Subscription Totals](https://woocommerce.com/wp-content/uploads/2013/10/Add_10_recalc.png?w=950)Calculate Recurring Totals for Subscription

### Set subscription status

[↑ Back to top](#doc-title)

By default, new subscriptions have the *Pending* status. This means subscriptions will not process any future renewals, and the customer will not receive special access to any products.

However, once the subscription has a customer, billing schedule and line items, and recurring totals calculated, you can change the subscription’s status to *Active*. Please note that changing the status to active does not take payment from the customer. If you need to charge the customer immediately, follow the instructions in [Create a Pending Renewal Order](#create-pending-renewal-order).

To change a subscription’s status:

1. Go to the **Edit Subscription** screen.
2. Click the **Subscription Status** select box in the **Subscription details** meta box.
3. Click the **Subscription status** you want to give the subscription.
4. Click **Update** to save the subscription*.*

Once a subscription is active, the customer is assigned the [default subscriber role](https://woocommerce.com/document/subscriptions/store-manager-guide/#section-5). Subscriptions also schedules the next payment date.

![Subscription Status Drop-down](https://woocommerce.com/wp-content/uploads/2013/10/Add_11_status.png?w=950)Select Subscription Status

## Set up automatic payments

[↑ Back to top](#doc-title)

By default, manually added subscriptions use the **Manual Renewal** payment method.

However, if a payment gateway extension active on the store supports [administrator payment method changes](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features), store managers can choose to change the payment method on subscriptions without customer involvement.

To change a subscription’s payment method:

1. Go to the **WooCommerce > Subscriptions** administration screen.
2. Click the **ID of the subscription** you want to change to open the **Edit Subscriptions** screen.
3. Click the pencil icon next to the **Billing Details** section.
4. Go to the dropdown menu under Billing Details that allows you to change **Payment Method**.

![Edit Subscription - Change Payment Method](https://woocommerce.com/wp-content/uploads/2013/10/subs_change_payment_method.png?strip=all&w=704)Edit Subscription – Change Payment Method

You can also use this feature to migrate a customer from one payment method to another, for example, from PayPal to Stripe.

However, to change the subscription to a new payment method, you need to obtain the meta data required for that payment method. The meta data required varies by gateway and is usually a type of customer or credit card token with the payment gateway.

For example, **the Stripe Source ID shown in the above screenshot is a special card token** provided by Stripe, not a credit card number. This number is created when the customer enters credit card information in checkout and is available to you as the store manager via the Stripe dashboard. *Note: The Stripe Source ID, token beginning with src_, was previously called the Stripe Card ID, token beginning with card_. The old tokens will still work in this field.* Other valid tokens are 
```
card_
```

, and 
```
pm_
```

  . However, *src_* should be preferred.

Note: Adding a manual subscription with automatic renewals is not possible with PayPal Standard unless PayPal Reference Transactions is set up.

## Create a pending renewal order

[↑ Back to top](#doc-title)

If you manually create an order for a customer but would like them to start a subscription with automatic payments, you can use the “Create Pending Renewal Order” action. This will send an invoice to your subscriber

To create an invoice for a customer that they can use to start a subscription with automatic payments:

1. [Create a new subscription](#manually-add-a-subscription) following the instructions above (its status can remain *pending* or you can change it to *active* if needed).
2. Click the dropdown menu in the **Subscriptions Actions** box.
3. Select **Create Pending Renewal Order**.
4. Click **Update** to save the subscription.

![](https://woocommerce.com/wp-content/uploads/2013/10/subscription-actions-create-pending-renewal-order.png?strip=all&w=704)Subscription Actions – Create Pending Renewal Order

Creating a pending renewal order like this:

- Creates a new order connected to the subscription, in the *pending* status
- Places the subscription *on-hold*

You can then use this new order to control activation of the subscription. For example, you could[email the order](https://woocommerce.com/document/managing-orders/paying-for-orders/#pay-for-order-email-link) to the customer using the Order actions. When the customer pays for the [subscription renewal order](https://woocommerce.com/document/subscriptions/customers-view/#view-subscription-page), the subscription activates. You can also change the status of the order to processing or completed to log a payment in your store’s records that the customer may have paid by cheque or over the phone.

## Manually importing a subscription

[↑ Back to top](#doc-title)

To import a subscription created with another subscription management system, [add the subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#manually-add-a-subscription) as outlined above. If you want to charge automatic payments, follow the instructions for [charging renewal payments](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#create-pending-renewal-order). If you’re migrating your customers from another subscription service to WooCommerce Subscriptions, you’ll want to read [Migrating Subscribers to WooCommerce Subscriptions](https://woocommerce.com/document/subscriptions/migrating-subscribers-woocommerce-subscriptions/).

**Payment gateways that don’t support changing recurring payment amounts or dates:** if the subscription uses PayPal Standard or another payment gateway which does not support changing recurring amounts or dates, **be sure to set the billing schedule and totals before changing the subscription’s status from Pending to Active**. Once you activate the subscription, the billing schedule and dates will not be editable and you would need to delete the subscription and start again.

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

## Edit an Existing Subscription

**Source:** [https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/update-an-existing-subscription/](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/update-an-existing-subscription/)

# Edit an Existing Subscription

			WooCommerce Subscriptions allows merchants to modify existing customer subscriptions if the [payment gateway](https://woocommerce.com/document/subscriptions/payment-gateways/#extensions-for-automatic-payments)used supports [changes to billing schedules, line items, and/or recurring totals](https://woocommerce.com/document/subscriptions/payment-gateways/#feature-explanation).

Unlike [orders](https://woocommerce.com/document/managing-orders/view-edit-or-add-an-order/#editing-or-adding-order-items) (a record of a past transaction), Subscriptions are [agreements between a store and its customers](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/#subscriptions) for future payments. Because of this, you can edit/update a subscription [regardless of its status](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/).  **This guide explains how to:**

- Modify the billing schedule and recurring totals.
- Process a renewal for an active subscription.

**Pre-reading:** [Manually Adding or Importing a New Subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/) provides a more in-depth overview of the data changes made when updating an existing subscription. Reading that first will help give the instructions on this page more context.

## Modifying an Existing Subscription

[↑ Back to top](#doc-title)

**Note:** For subscriptions using a payment method that supports [automatic renewals](https://woocommerce.com/document/subscriptions/renewal-process/), some or none of the subscription’s billing schedule and recurring totals may be editable. [Subscription Payment Methods & Gateways](https://woocommerce.com/document/subscriptions/payment-gateways/) provides a table showing features supported by each payment gateway extension.

You first need to open the subscription edit page of the subscription you want to edit. There are two ways to find it:

**From WooCommerce > Subscriptions:**

1. **Go** to **WooCommerce > Subscriptions**.
2. **Locate** the subscription you wish to edit.
3. **Click** the subscription number to access the edit subscription screen.

F**rom a parent or renewal order:**

1. **Scroll down** to the **Related Orders** section.
2. **Locate** the row that says ‘Subscription’ in the ‘Relationship’ column.
3. **Click** the subscription number to access the edit subscription screen.

### Change billing schedule

[↑ Back to top](#doc-title)

The process to update the billing schedule is very similar to the process used to set a billing schedule when manually adding a subscription.  The following instructions are the basic steps to make the changes, if you need additional details see [Set the Billing Schedule](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#set-billing-schedule).

1. Go to **WooCommerce > Subscriptions**.
2. Click the **ID of the subscription** you want to change to open the **Edit Subscriptions**screen.
3. Modify the dates and schedule, as required.
4. **Update**.

![Billing Schedule Meta Box](https://woocommerce.com/wp-content/uploads/2013/10/Add_12_schedule.png?w=950)Change Billing Schedule

### Change recurring totals

[↑ Back to top](#doc-title)

There are a few different recurring totals that you can edit in an active subscription: product pricing/qty, shipping prices, fees, and taxes. Let’s look at how to update them:

1. On the edit subscription screen, **click** the pencil icon next to the item information and/or the shipping information.
2. **Update** the amounts in total box, the tax box, or the shipping box.
3. **Click** Save.

![](https://woocommerce.com/wp-content/uploads/2024/07/UpdateSubscriptions.png?w=980)Fields available for updating in an existing subscription

**You can also add new fees, shipping, and taxes to an existing subscription. Here’s how:**

1. Click the pencil icon next to the item information.
2. Click one of the choices at the bottom of the order information box, under the total: add product(s), add fee, add shipping, or add tax.
3. Enter or select the information needed for that choice.
4. Click “recalculate” if recurring totals are not automatically updated.

Read the following guides for more detailed information about adding [products, fees, shipping](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#add-line-items-products-fees-and-shipping), or [taxes](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#add-recurring-taxes).

**Note:**If you need to add a new subscription product to the subscription agreement, remember that the subscription’s billing schedule will override the subscription product’s billing schedule. You can read more about this topic in [Subscriptions vs. Subscriptions Products](https://woocommerce.com/document/subscriptions/subscription-product-vs-subscription/#billing-schedules).

### Process a renewal for an active subscription

[↑ Back to top](#doc-title)

If a renewal payment fails and you want to retry the payment, a customer wants an additional shipment immediately, or for some other reason you want to manually trigger a renewal payment, you can use the **Process Renewal** action on the **Edit Subscription** page to do this.

Note: Using this tool to process a renewal won’t automatically extend the subscription’s next payment date if it’s currently scheduled in the future. To extend the subscription period, update the next payment date in the [billing schedule section](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#set-a-billing-schedule).

Follow these steps to process a renewal payment:

1. Go to **WooCommerce > Edit Subscription** for the subscription.
2. Click the select box in the **Subscriptions Actions** meta box.
3. Click **Process Renewal**.
4. **Save Subscription**.

**Note:** The process renewal button only displays if:

- The subscription has a status of *active*
- The subscription uses a payment method that supports [payment date changes](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features)

![](https://woocommerce.com/wp-content/uploads/2024/07/Process-Renewal.png?w=980)Process Renewal action in “Order Actions”

You can view the new renewal order by clicking the new order ID in the Subscription Notes on the right side of the screen or by scrolling the bottom of the page and finding the new renewal order in the “related orders” box.

When you process a renewal on a subscription using automatic payments, the subscription goes through the entire [renewal process](https://woocommerce.com/document/subscriptions/renewal-process/#the-renewal-process), including charging the customer’s credit card and emailing the customer.

Tip: View the renewal order by clicking the new order ID in the **Subscription Notes** meta box.

### Cancel or suspend a subscription

[↑ Back to top](#doc-title)

You can cancel, suspend, or reactivate a subscription quickly from **WooCommerce > Subscriptions**by hovering over the subscription you want to change. Here are the actions that display:

- Click **Suspend** to temporarily pause a subscription
- Click **Reactivate** to resume a suspended subscription, .
- Click **Cancel** to permanently stop a subscription.

#### How suspensions  work

When a store manager or customer **suspends** a subscription, all payments stop while in suspension. The user’s role is set to the default [inactive subscriber role](https://woocommerce.com/document/store-manager-guide/#role-settings).

Reactivating a subscription continues the original payment schedule. Suspensions do not change the payment schedule no matter the of the suspension. **For example:**

If a customer buys a monthly subscription product on the 1st of January, then suspends their subscription on February 12th, they will not pay anything until they reactivate it. If the customer reactivates the subscription on May 22nd, Subscriptions will charge the next payment on June 1st, because the subscription originally started on that billing date.

WooCommerce Subscriptions allows you to set a limit on the number of times a subscriber can suspend or reactivate their subscription, or to prevent suspension completely on the [settings page](https://woocommerce.com/document/subscriptions/store-manager-guide/#customer-suspensions).

**Requirements to Display Suspend and Cancel  Buttons:**

- Woo Subscriptions plugin must be active.
- The payment gateway used to purchase the subscription must support subscription suspension.
- The subscription must currently have a status of **active** or **pending** to suspend, and a **status of active**,**pending,** or **on-hold** to cancel.
- Customer suspension is enabled in the Subscription Settings or is a store admin.
- The subscription must have at least one future payment to cancel it.

Note: If an admin cancels a Subscription when the schedule is managed by the payment gateway, they will not be able to reactivate it back when the Subscription goes to Pending Cancellation status.

### Can I bulk-edit recurring totals for subscriptions?

[↑ Back to top](#doc-title)

There is no feature to bulk edit the recurring totals for existing subscriptions. Instead, we recommend using AutomateWoo workflows to [bulk update subscription prices](https://woocommerce.com/document/automatewoo/examples/bulk-update-subscription-prices/).

If you would like a native feature to be able to bulk edit recurring totals for your subscriptions within Woo Subscriptions, please vote on the [open feature request](https://woocommerce.com/forums/133476-woocommerce/suggestions/17552416-bulk-update-subscription-price-when-subscription-p).

[← WooCommerce Subscriptions Documentation](https://woocommerce.com/document/subscriptions/)

					
		
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

