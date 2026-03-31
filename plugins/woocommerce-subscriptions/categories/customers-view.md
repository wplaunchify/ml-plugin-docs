# Customers View

*Category from WooCommerce Subscriptions documentation*

---

## Subscriber’s View

**Source:** [https://woocommerce.com/document/subscriptions/customers-view/](https://woocommerce.com/document/subscriptions/customers-view/)

# Subscriber’s View

			This guide provides an overview of the functionality available to customers who purchase a subscription or [gift a subscription to someone](https://woocommerce.com/document/subscriptions/customers-view/gifting-a-subscription/) in your store via [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/).

For an overview of features for store managers, see the [Subscriptions Store Manager Guide](https://woocommerce.com/document/store-manager-guide/).

## My Account Pages

[↑ Back to top](#doc-title)

After a customer has purchased one or more subscription products with your store, they can view details of their subscriptions on the **My Account** page.

The **My Account** page is a core WooCommerce page and gives customers an area to manage their billing and shipping addresses, order history and other account details. With subscriptions functionality enabled on your store, an additional **Subscriptions** menu item is also added to this page’s navigation bar.

On the **My Account** →**Subscriptions** page, the customer’s subscriptions are listed, along with the subscription’s status, next payment date and links to**View**the subscription, where the customer can view all details and manage each subscription.

![](https://woocommerce.com/wp-content/uploads/2021/10/my-account-subscriptions.png?w=550)Customer’s My Account → Subscriptions Page

If you’d like to customize the My Subscriptions page to better fit your needs, read the developer’s guide to [customizing the My Subscriptions](https://woocommerce.com/document/subscriptions/develop/customizing-the-my-subscriptions-page/)page

## View Subscription Page

[↑ Back to top](#doc-title)

On the “View Subscriptions Page” customers can find the details of individual subscription purchases they’ve made on your store and they can process a number of subscription actions.

Follow these steps to access the full details of a subscription:

1. Go to the **My Account** page.
2. Go to the **Subscriptions** page.
3. Select the **View** button next to the subscription in the **Subscriptions** table; or
4. Click the subscription number under the *Subscription* column.

This takes the customer to the **My Account → View Subscription** page for a single subscription. On this page, the customer can view the subscription’s:

- Status
- Start date, trial end, next payment and end date (if any)
- Line items, including products, shipping, fees and taxes
- The total amount charged each renewal
- Payment method
- Order history, including the original order used to purchase the subscription (if any), renewal orders and orders placed to upgrade or downgrade the subscription
- Contact email and phone number
- Billing and shipping addresses
- Downloadable content attached to the subscription

![](https://woocommerce.com/wp-content/uploads/2021/10/my-account-view-subscription-page.png?w=609)View Subscription Page

## Subscription Management

[↑ Back to top](#doc-title)

On the **View Subscription** page is a set of *action buttons and toggles*. A subscriber can use these buttons/toggles to:

- **Cancel or Suspend** an active subscription or **reactivate**a recently suspended subscription. [Read this page for more information](https://woocommerce.com/document/subscriptions/customers-view/suspend-cancel-or-remove-an-item/) on the process and how to activate this option for your customers.
- **Remove items** from their subscription (if the payment gateway supports it). [Read more about this here](https://woocommerce.com/document/subscriptions/customers-view/suspend-cancel-or-remove-an-item/#remove-a-product-item).
- **Resubscribe** an expired or fully canceled subscription. If you need more information about how resubscribing works for a customer, take a look at our [Subscribers’ Resubscribe Guide.](https://woocommerce.com/document/subscriptions/customers-view/subscribers-resubscribe-guide/)
- **Pay** for a renewal order or when the automatic recurring payment fails or the subscription uses manual renewals. Subscribers can also pay a renewal early if the option is activated in the Subscriptions settings. Both processes are [outlined in more detail here](https://woocommerce.com/document/subscriptions/customers-view/pay-for-renewal/).
- [Change the Payment Method](https://woocommerce.com/document/subscriptions/customers-view/subscriber-payment-methods/) used for automatic recurring payments.
- [Change Shipping/Billing Addresses](https://woocommerce.com/document/subscriptions/customers-view/update-address/) on their subscriptions.
- **Deactivate or Activate automatic recurring payments.**This requires a store manager to activate the [“auto renewal toggle” in the Subscriptions settings](https://woocommerce.com/document/subscriptions/customers-view/activating-deactivating-auto-renew/).
- **Upgrade or downgrade** the subscription line items. Subscription switching is a fairly easy process for your customers but if you are interested in understanding it more from the customer’s perspective, take a look at the [Subscriber’s Subscription Switch Guide](https://woocommerce.com/document/subscriptions/customers-view/subscribers-view-switch/).

![](https://woocommerce.com/wp-content/uploads/2021/10/my-account-view-subscription-action.png?w=950)Action buttons on the View Subscription page

![](https://woocommerce.com/wp-content/uploads/2021/10/view-subscription-upgrade-downgrade-buttons.png?w=950)Upgrade or Downgrade buttons on the View Subscription page

Want to remove a subscription action button? Check out the FAQ on [removing a button from the View Subscription page](https://woocommerce.com/document/subscriptions/develop/remove-an-action-button/).

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

## Activating/Deactivating Auto Renew

**Source:** [https://woocommerce.com/document/subscriptions/customers-view/activating-deactivating-auto-renew/](https://woocommerce.com/document/subscriptions/customers-view/activating-deactivating-auto-renew/)

# Activating/Deactivating Auto Renew

			Enabling the “**Auto Renew Toggle**” setting under **WooCommerce > Settings > Subscriptions**allows subscribers to activate or deactivate their automatic subscription renewal payments at any time. This will only change the subscription’s payment method to [manual renewal](https://woocommerce.com/document/subscriptions/renewal-process/#manual-recurring-payments) but won’t stop the renewal completely or cancel the subscription. This page explains how a subscriber would activate/deactivate auto-renewals.

## Using the Auto Renew Toggle

[↑ Back to top](#doc-title)

If a customer wants todeactivate (or activate)  auto–renewals on their Subscription, they can use the **“Auto Renew”** toggle. This setting is visible when activated by the store administrator under **WooCommerce > Settings > Subscriptions**.

**Requirements** **for using the toggle**:

- Subscription must have a status of “**Active**“.
- Subscription must be using automatic renewals or be eligible for them via a [supported gateway](https://woocommerce.com/document/subscriptions/payment-gateways/).

**How to use:**

Under **My Account > Subscriptions** (click on the specific subscriptions), subscribers click the toggle to either activate or deactivate auto-renewals. The images below show how it looks in both states:

![](https://woocommerce.com/wp-content/uploads/2020/08/user-myaccount-autorenew.png?w=950)Automattic renewals are activated

![](https://woocommerce.com/wp-content/uploads/2020/08/user-myaccount-autorenew-off.png?w=950)Automattic renewals are deactivated

					
		
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

## Gifting a Subscription

**Source:** [https://woocommerce.com/document/subscriptions/customers-view/gifting-a-subscription/](https://woocommerce.com/document/subscriptions/customers-view/gifting-a-subscription/)

# Gifting a Subscription

			This guide explains how a customer would gift a subscription to someone.

## Customer’s View

[↑ Back to top](#doc-title)

### Purchasing a gift

[↑ Back to top](#doc-title)

There are three pages where a customer can choose to purchase a subscription for someone else:

- Single product page
- Cart page
- Checkout page

When purchasing a subscription for a recipient, the customer only needs to enter the recipient’s email address.

#### The single product page

To purchase a subscription for another customer via a product page, the customer can:

1. Go to a subscription product’s *Single Product Page*.
2. Tick the *This is a gift* checkbox.
3. Enter the recipient’s email address.
4. Select **Sign Up Now**.

![](https://woocommerce.com/wp-content/uploads/2025/08/gifting-product-page_469b67.png?strip=all&w=704)

#### The cart page

To gift a subscription via the cart page, the customer can:

1. Add a subscription product to the cart.
2. Go to the Cart page.
3. Click the checkbox **This is a gift**.
4. Type in the recipient’s email address.
5. Click **Update cart**.

![](https://woocommerce.com/wp-content/uploads/2025/08/wcs-gifting-cart-page.png?strip=all&w=704)

#### The checkout page

On the checkout page, the customer can see the recipient’s email address under the product.

![](https://woocommerce.com/wp-content/uploads/2025/08/gifting-checkout-page.png?w=980)

### Recipient account creation

[↑ Back to top](#doc-title)

In the event that a recipient does not have an account with your store at the time of being gifted a subscription, an account will be created for them. This is so they can manage their subscription.

Account details, as well as information about where they can manage their new subscription, is sent to the recipient via email. A link is provided for the recipient so that they can set their password.

![](https://woocommerce.com/wp-content/uploads/2025/08/gifting-new-account.png?strip=all&w=704)

After setting the password, the first time the new recipient logs into their account they will be prompted to enter their shipping address (if applicable).

![](https://woocommerce.com/wp-content/uploads/2025/08/gifting-set-address.png?strip=all&w=704)

### View Subscription page

[↑ Back to top](#doc-title)

The recipient is able to view and manage the subscription they received via the *My Account > View Subscription* page.

Importantly, when visiting the **View Subscription** page, the recipient will not see any product prices or billing information.

![](https://cldup.com/TWynngL5-K.png)

The **View Subscription** page for a purchaser, and non-gifted subscription, displays all the orders related to that subscription, with details on the amount of those orders.

In order to provide a level of privacy between purchaser and recipient and to make sure recipients cannot see prices for the products purchased for them, **recipients cannot visit the subscription’s related orders pages**. The parent order will also be hidden, as that order could contain information about other products purchased in the original order not related to the recipient.

![](https://cldup.com/SQlwLVPxHG.png)

The purchaser’s name will also appear under the related order to indicate that they paid for the order.

### Completing an order with a subscription gift

[↑ Back to top](#doc-title)

Once an order with a subscription gift is placed, customers are given an overview of their order. Here, the purchaser can see which products in their order have been purchased and for who.

![](https://cldup.com/EnyBy9ws1T.png)

## Store Manager’s View

[↑ Back to top](#doc-title)

#### Processing orders with gift recipients

When an order containing a gifted subscription product is created, the **gift recipient email is stored alongside their order line items**. When processing orders, this allows store managers to see which line items in an order are being purchased for a recipient.

![](https://cldup.com/EeFJCxf7tj.png)

**Note:** If the recipient is subsequently deleted, in addition to the behavior already discussed here, the original order and existing renewal orders will maintain this information once the recipient is deleted, however, future renewal orders will no longer hold this information.

#### Add or modify the recipient

Store managers can add and edit a subscription’s recipient from the [Edit Subscription administration screen](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/).

If the recipient does not already have an account with your WordPress site, you should [add the user via the Users > Add New administration screen](https://codex.wordpress.org/Users_Add_New_Screen) before proceeding.

To manually add a recipient to a subscription:

1. Click the **Recipient** select box.
2. Type the first few letters of the name or email for the user.
3. Click the recipient, after a matching account is loaded.
4. Click **Save Subscription**.

![](https://cldup.com/W6nhEU5PVY.png)

Once you have added a recipient to the subscription, enter the recipient’s shipping address to be used for subscription shipments if applicable.

To add these details:

1. Click the pencil icon next to **Shipping Details**.
2. Fill in each shipping address field, entering the recipient’s details.
3. Click **Save Subscription**.

**Note:** The **Load Shipping Details** tool will load the purchaser’s shipping details.

### Shipping address

[↑ Back to top](#doc-title)

When a subscription gift is purchased, the shipping address of the subscription is set to the recipient’s shipping address. This streamlines the process for customers proceeding through the checkout when purchasing subscription products for other users.

If the recipient does not have an account or has not set the shipping address on their account at the time of purchasing the subscription, the subscription’s shipping address will not be set and will display as **N/A**. This will be updated when the recipient logs in and enters their details on the [Account Details page](#recipientaccountcreation).

In order to maintain a gifted subscription’s shipping address when paying for a renewal order through the checkout, the **recipient’s shipping address will automatically be entered into the shipping fields on checkout**.

![](https://cldup.com/SUqkqsuqPf.png)

### Email notifications

[↑ Back to top](#doc-title)

In order to keep recipients up-to-date with their gifted subscriptions, Gifting for WooCommerce Subscriptions sends the following emails:

- **New Recipient Account email:** Sent to a recipient when an account is created for them. This email is sent instead of the WooCommerce Customer New Account email for accounts created for gifted subscription recipients.
- **New Initial Order – Recipient****:** Sent to recipients when an order has been placed which contains subscriptions purchased for them. The email contains the purchaser’s name, email and subscription information including the line items included.
- **Processing Renewal Order email:** Sent to a recipient when payment has been processed for a subscription now awaiting fulfillment for that billing period.
- **Completed Renewal Order email:** Sent to a recipient when the subscription renewal order is marked complete, indicating that an item for the renewal period has been shipped.

As with general [WooCommerce emails](https://woocommerce.com/document/configuring-woocommerce-settings/emails/), you can enable, disable, edit and customize these emails. To edit emails sent by Gifting for WooCommerce Subscriptions, go to *WooCommerce > Settings > Emails*.

## Shared subscription management

[↑ Back to top](#doc-title)

When a subscription product has been purchased for a recipient, both the recipient and purchaser have access to view and manage certain aspects of the subscription over its life-cycle via the *My Account > View Subscription* page.

The table below outlines the actions recipients and purchasers can make on subscriptions:

| Action | Recipient | Purchaser |
| --- | --- | --- |
| View Subscription | ✓ | ✓ |
| Suspend Subscription | ✓ | ✓ |
| Reactivate Subscription | ✓ | ✓ |
| Cancel Subscription | ✓ | ✓ |
| Resubscribe | ✕ | ✓ |
| Change Shipping Address | ✓ | ✓ |
| Change Payment Method | ✕ | ✓ |
| Manually Renew | ✓ | ✓ |
| Switch (upgrade/downgrade) | ✕ | ✓ |
| View Parent Orders | ✕ | ✓ |
| View Renewal Orders | ✕ | ✓ |

## WooCommerce Memberships integration

[↑ Back to top](#doc-title)

Gifting for WooCommerce Subscriptions is also compatible with [WooCommerce Memberships](https://woocommerce.com/products/woocommerce-memberships/).

Purchasing subscription products tied to a membership plan for a recipient will **grant the benefits of the membership to the recipient rather than the purchaser**.

All the features of managing the memberships granted through subscription gifts remain intact – store managers can pause, edit, cancel, and delete memberships granted to recipients just as normal through the *WooCommerce > Memberships* administration screen.

## Downloadable products

[↑ Back to top](#doc-title)

Gifting for WooCommerce Subscriptions includes special handling for downloadable products purchased as a gift.

When a downloadable product is purchased for a recipient, by default the recipient is granted the permissions to download the files attached to that product. It is also possible to grant download permissions to both recipient and purchaser.

To enable dual permissions:

1. Go to the *WooCommerce > Settings* administration screen
2. Click the **Subscriptions** tab
3. Scroll down to the **Gifting Subscriptions** section
4. Click **Downloadable Products** to enable or disable dual permissions

Similar to the normal process for downloading files, recipients can download the files they have been granted access to from the **My Account** page and the *My Account > View Subscription* page.

## FAQs

[↑ Back to top](#doc-title)

### What happens if I delete a recipient’s account in WordPress?

[↑ Back to top](#doc-title)

When a website administrator deletes a recipient’s user account in WordPress, **the recipient will also be removed from any subscription(s) they are associated with**.

A warning message will be displayed outlining which subscriptions the user will be removed from.

It’s important to note that the subscription(s) will not be deleted. The subscription(s) will continue to behave as normal for the purchaser once the subscription recipient has been deleted.

![](https://cldup.com/60PvpsTz7z.png)

### Can I use Gifting for WooCommerce Subscriptions for corporate purchasing?

[↑ Back to top](#doc-title)

If your store is selling corporate products, it’s likely a purchasing officer may wish to buy and manage subscriptions for members of their team.

The [Subscriptions Use Case: Corporate Purchasing](https://woocommerce.com/document/subscriptions/corporate-subscription-purchasing/) steps through this use case in more detail.

					
		
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

## Pay for Renewal

**Source:** [https://woocommerce.com/document/subscriptions/customers-view/pay-for-renewal/](https://woocommerce.com/document/subscriptions/customers-view/pay-for-renewal/)

# Pay for Renewal

			Automatic renewals for subscriptions is the most common payment configurations for merchants using WooCommerce Subscriptions. However, there are situations where merchants may want to implement a “manual renewal” process that would require a customer to pay for their renewal from **My Account > Subscriptions**. Additionally, subscribers would need to manually renew if their automatic renewal payment failed. This guide explains the process customer’s would need to take to pay for a renewal in these two situations.

## Manual Payment for a Subscription Renewal

[↑ Back to top](#doc-title)

If payment is required on the renewal order for a subscription, a **Pay** button is also displayed next to the order under **Recent Orders** of both the **My Account → View Subscription** page and the **My Account** page.

The **Pay** action is only displayed when:

- the order status (**WooCommerce > Orders**) requires payment. By default it is *on-hold* or *pending*, but can be customized;
- subscription (**WooCommerce > Subscriptions**) is *on hold* or *pending*, as this also signifies the subscription has not been manually reactivated by a store manager despite payment not being collected for the renewal order.

![](https://woocommerce.com/wp-content/uploads/2021/10/view-subscription-manual-failed-renewal-pay-action.png?w=950)Pay Action on the View Subscription Page

Clicking the **Pay** button on a subscription will direct the customer through a normal WooCommerce checkout process to pay for the subscription’s renewal. Once payment is completed for the renewal order, the subscription will be reactivated.

If the payment is being made because an automatic renewal payment failed, Subscriptions will attempt to update the payment method on the subscription so that future recurring payments will use the new payment method rather than the failed payment method (**Note:** This is only possible with payment gateways which support [Recurring Payment Method Changes](https://woocommerce.com/document/subscriptions/payment-gateways/)).

## Make an Early Renewal Payment

[↑ Back to top](#doc-title)

If a customer would like to renew their subscription without waiting for the next payment date, that is possible with the[Early Renewal](https://woocommerce.com/document/subscriptions/early-renewal/)feature.

**Requirements for processing an early renewal:**

Early renewal is available under these conditions:

- Early renewal feature must be enabled
- Subscription must have an Active status
- Payment method must support[date changes](https://woocommerce.com/document/subscriptions/payment-gateways/#section-3)
- Subscription must have a recurring price, i.e. it does not have a $0 total
- Subscription does not contain any synchronized products
- Subscription must not currently be in a trial period

**Make an Early Renewal Payment**

Subscribers can process an early renewal by following these steps:

1. Go to**My account > Subscriptions**
2. View chosen subscription
3. In the first table, the **Renew Now** button will appear in the Actions row
4. Click **Renew now** and complete checkout

![](https://woocommerce.com/wp-content/uploads/2018/12/ER_2_button.png?strip=all&w=704)Renew Now Button

**Next Payment Date after Early Renewal**

After an early renewal is processed, the next payment date is extended to accommodate another billing period. For example, if a subscription renews monthly on the 15th and the next payment date is December 15th, then processing an early renewal on November 20th will move the next payment date to January 15th.

![](https://woocommerce.com/wp-content/uploads/2018/12/ER_3_initial_sub.png?strip=all&w=704)Example Subscription – Before Early Renewal

![](https://woocommerce.com/wp-content/uploads/2018/12/ER_4_after_renewal.png?strip=all&w=704)Example Subscription – After Early Renewal

					
		
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

## Manage Payment Methods — Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/customers-view/subscriber-payment-methods/](https://woocommerce.com/document/subscriptions/customers-view/subscriber-payment-methods/)

# Manage Payment Methods — Subscriptions

			Gateways which [support tokenization](https://developer.woocommerce.com/docs/woocommerce-payment-token-api/) allow your customers to save information about their credit card or other payment methods. This communicates with the payment processor for future payments instead of requiring the customer to enter their credit card details again.

**This is a feature of WooCommerce, not the Subscriptions extension.**WooCommerce stores these payment methods on the customer’s account, not just on a subscription. However, when customers use a saved payment method to sign up for subscriptions, WooCommerce copies the payment token to the subscription and stores it there to automatically process future renewal payments. As a result, Subscriptions needs to interact with WooCommerce’s payment method management to avoid tokens falling out of sync between a subscription and the customer’s account.

### Payment Method Management

[↑ Back to top](#doc-title)

The customer can manage saved payment methods from the **My Account > Payment Methods** page. On this page, a customer can:

- set a *default* payment method for future transactions.
- *delete* a payment method from their account.
- *add* a new payment method to their account.

![](https://woocommerce.com/wp-content/uploads/2013/09/my-account-payment-method-page.png?strip=all&w=704)My Account Payment Method Page

### Deleting a Payment Method

[↑ Back to top](#doc-title)

Deleting a saved payment method used for subscription payments causes future renewal payments to fail because the payment method is no longer available.

To prevent this, Subscriptions prevents customers from deleting payment methods used by active subscriptions unless:

- the customer has another payment method, via the same gateway set as their *default*; or
- The customer has one other saved payment method from the same gateway that can serve as an alternative for the subscription.

If a customer’s account meets one of those criteria, and they delete a payment method used by a subscription, the subscription will automatically update to use the alternative token. The customer will be notified of this after deleting the payment method.

![](https://woocommerce.com/wp-content/uploads/2013/09/my-account-payment-method-deleted-notice.png?strip=all&w=704)My Account “Payment Method Deleted” Notice

### Adding a New Payment Method and Setting as Default

[↑ Back to top](#doc-title)

Customers can add new payment methods to their account at any time by going to **My Account > Payment Methods**, clicking the “Add payment method” button, and filling in the information for the new method.

![](https://woocommerce.com/wp-content/uploads/2013/09/Payment_method_added.png?strip=all&w=704)Payment method added

After adding a new payment method, a customer may wish to set this method as the default for future purchases. Customer’s can set the default payment method by clicking the “Make Default” button next to the applicable payment method.

When a customer adds a new payment method and sets it as default, an option appears to update all their existing subscriptions to use that method:

![](https://woocommerce.com/wp-content/uploads/2013/09/payment_method_default_option.png?strip=all&w=704)Customers click “Make Default” to set a default payment method

Choosing “**Yes**” will cause the payment method for the customer’s existing subscriptions to change to the new default method (**Note:** This will only occur for subscriptions using a payment gateway that supports these [advanced features](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features)).

On each of the customer’s subscriptions, an order note will appear to record this change:

![](https://woocommerce.com/wp-content/uploads/2013/09/payment_method_order_note.png?strip=all&w=704)Subscription order note for payment method change

## Change Subscription Payment Method

[↑ Back to top](#doc-title)

The “**Change Payment Method**” button can update the payment method for future recurring payments. For example, when a subscriber’s credit card expires or they want to use a different credit card than the one currently on file.

To change the payment method used for a single subscription, a customer can:

1. Go to **My Account > Subscription**> **Click View** next to the subscription.
2. **Click** the **Change Payment** button.
3. **Enter** the new payment details on the **Checkout** page.
4. **(Optional)**: Click the *Update the payment method used for all of my current subscriptions* checkbox to update **all** subscriptions.
5. **Submit** the **Checkout** form and return to the **My Account > View Subscription** page.

![](https://woocommerce.com/wp-content/uploads/2020/06/woocommerce-subscriptions-change-payment-method-step-1.png?w=867)1 – Customer Clicks Change Payment Method Button

![](https://woocommerce.com/wp-content/uploads/2020/06/woocommerce-subscriptions-change-payment-method-step-2.png?w=819)2 – Customer Enters New Payment Information

![](https://woocommerce.com/wp-content/uploads/2020/06/woocommerce-subscriptions-change-payment-method-step-3.png?w=794)3 – Payment Method Updated

### Why can’t my customer change their recurring payment method?

[↑ Back to top](#doc-title)

It’s not always possible, or necessary, for a customer to be able to change the recurring payment method on a subscription. As a result, WooCommerce displays the **Change** Payment Method button only if a subscription:

- has the status of **active**
- requires [automatic recurring payments](https://woocommerce.com/document/subscriptions/renewal-process/). Changing a payment method for manual renewals is unnecessary, as the customer can choose a method for each recurring payment.
- site is not in [Staging Mode](https://woocommerce.com/document/subscriptions/faq/#section-39). In Staging Mode, WooCommerce treats all subscriptions as requiring manual renewal to avoid duplicate payments.
- uses a payment gateway that supports [canceling the subscription](https://woocommerce.com/document/subscriptions/payment-gateways/)
- has at least one **future automatic payment scheduled**. There is no need to change a payment method if no payments will occur.

					
		
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

## Subscribers’ Resubscribe Guide

**Source:** [https://woocommerce.com/document/subscriptions/customers-view/subscribers-resubscribe-guide/](https://woocommerce.com/document/subscriptions/customers-view/subscribers-resubscribe-guide/)

# Subscribers’ Resubscribe Guide

			**Resubscribe** makes it possible to offer existing subscriptions customers a way to continue existing subscription terms, even after terms have changed.

For example, an existing subscriber can continue to enjoy the old price on their existing subscriptions, even after the product’s price has increased for new subscriptions.

When a customer’s subscription expires or is canceled, they can create a new subscription with the same terms as the original by resubscribing to the inactive subscription from their **My Account > View Subscription** page.

Clicking the *Resubscribe* button takes the customer through the normal WooCommerce checkout process to pay for the subscription’s renewal. Once customers pay, they create a new subscription with the same billing terms as the original.

Resubscribing has a number of differences compared to purchasing the same subscription product from the product page, for example, not charging a sign-up fee again. Considered a “renewal” you can find more information about these orders in the [Renewal Process Guide](https://woocommerce.com/document/subscriptions/renewal-process/).

![](https://woocommerce.com/wp-content/uploads/2024/07/where-customers-see-the-resubscribe-button.webp?strip=all&w=704)Resubscribe Button On View Subscription Page

### Resubscribe Requirements

[↑ Back to top](#doc-title)

It’s not always possible, or necessary, for a customer to be able to resubscribe to a previous subscription. The *Resubscribe* button displays on the *My Account* page when:

- a status set to *expired*, *pending-cancellation*, or *canceled*
- at least one successful payment
- the recurring total is greater than 0. This ensures that prepaid subscriptions cannot be resubscribed to for free, as [sign-up fees](https://woocommerce.com/document/subscriptions/renewal-process/#section-9) are not charged during the resubscribe process.
- product line items that still exist, to avoid errors at checkout when attempting to purchase deleted products
- the subscription does not include products “[limited to one active subscription](https://woocommerce.com/document/subscriptions/creating-subscription-products/#limit-subscriptions)“.
- a customer has not already resubscribed to the same subscription. This prevents customers from resubscribing more than once to the same subscription.

					
		
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

## Subscribers’ Guide to Switching Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/customers-view/subscribers-view-switch/](https://woocommerce.com/document/subscriptions/customers-view/subscribers-view-switch/)

# Subscribers’ Guide to Switching Subscriptions

			If you allow customers to [switch between subscription products](https://woocommerce.com/document/subscriptions/store-manager-guide/#switch-settings) on your site, they will be able to upgrade or downgrade between different subscription products via the **View Subscription** page.

### The Switch Process

[↑ Back to top](#doc-title)

To switch subscriptions, the customer:

1. **Clicks** on **My Account > Subscriptions**, and **View** next to the subscription they want to switch.
2. **Clicks** the **Upgrade or Downgrade** button on the line item they want to switch.
3. **Selects**a new subscription product and clicks **Switch subscription**.
- This adds the subscription to the cart with “(upgrade) or “(downgrade) added to the product’s title. On the checkout page, a **Switch Subscription** button invites the customer to complete the checkout.
4. **Completes** the checkout form for the new subscription.
- This displays the standard **Order Received**page and displays details of any up-front/immediate payments and upcoming recurring payments.
5. (Optional) Can return to the My Account page to view the new subscription line item and the updated recurring totals.

The screenshots below show a customer switching from one subscription variation to another as per the steps above.

![Notice the subscription number, the name of the line item, and the cost. An Upgrade/Downgrade button appears on the line item. ](https://woocommerce.com/wp-content/uploads/2024/07/01-find-the-upgrade-down-grade-button.webp?strip=all&w=704)

![An alternative product is selected and the Switch Subscription button clicked, which adds it to the cart. A noticed is displayed to confirm this.](https://woocommerce.com/wp-content/uploads/2024/07/02-select-new-subscription-product.webp?w=980)

![Both the cart and checkout (pictured) displays the new product and price details. A Switch Subscription button on the checkout page completed the process. ](https://woocommerce.com/wp-content/uploads/2024/07/03-verify-details-and-check-out.webp?w=980)

![Once the switch is completed on the checkout page, the standard Order Received page is displayed.](https://woocommerce.com/wp-content/uploads/2024/07/04-complete-checkout-standard-order-received-page.webp?w=980)

![Back in the customer's account page, the Subscription is updated to reflect the switched state of the relevant subscription.](https://woocommerce.com/wp-content/uploads/2024/07/05-newly-switched-subscription.webp?w=980)

### Switchable Subscriptions

[↑ Back to top](#doc-title)

It’s not always possible, or necessary, for a customer to be able to switch to a new subscription. The **Upgrade or Downgrade** button displays if you allow switching AND the subscription:

- Is a [Variable Subscription product](https://woocommerce.com/document/subscriptions/store-manager-guide/#variable-subscriptions) or the [child of a Grouped Product](https://woocommerce.com/document/managing-products/#section-4), depending on which product type you set when enabling switching
- Uses [manual renewals](https://woocommerce.com/document/subscription-renewal-process/) or automatic renewals with a gateway that supports [recurring amount and payment date changes](https://woocommerce.com/document/payment-gateways/#advanced-features)
- The subscription has an **active** status. Customers must buy a new subscription if their subscription is expired or canceled.
- Has at least one completed payment (this includes manually added subscriptions).

					
		
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

## Suspend, Cancel, or Remove an Item

**Source:** [https://woocommerce.com/document/subscriptions/customers-view/suspend-cancel-or-remove-an-item/](https://woocommerce.com/document/subscriptions/customers-view/suspend-cancel-or-remove-an-item/)

# Suspend, Cancel, or Remove an Item

			This guide explains how, using WooCommerce Subscriptions, a store manager, customer, or both would suspend a subscription, cancel a subscription, or a remove one or more items from a subscription.

## Requirements to Suspend or Cancel Subscriptions

[↑ Back to top](#doc-title)

Active subscriptions display a **Cancel** button by default on the View Subscription page. There is no setting to disable cancellations; [the Cancel button can be removed from the View Subscription page](https://woocommerce.com/document/subscriptions/develop/remove-an-action-button/) only via custom code.

You can optionally enable **Customer Suspensions** in [Subscription Settings](https://woocommerce.com/document/subscriptions/store-manager-guide/#misc-settings), allowing customers to suspend their subscriptions themselves with a **Suspend** button added next to the **Cancel** button. A suspended subscription appears as *on-hold* both to the store manager and the customer.

When a subscription is put *on-hold*, either by you or the customer, a **Reactivate** button is added to the customer’s view, allowing the customer to restart their subscription. However, if the subscription is put *on-hold* because payment is due, then the **Reactivate** button is not displayed. In that case, the customer must [pay for the renewal](https://woocommerce.com/document/subscriptions/customers-view/pay-for-renewal/) before a subscription is reactivated.

The buttons also only display if the relevant action is supported by payment gateway used to purchase the subscription. Find out if your payment gateway supports these features at [Subscription Payment Gateways](https://woocommerce.com/document/subscriptions/payment-gateways/).

**Requirements to Display Suspend Button**

For the *suspend* button to be displayed:

- the [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) plugin must be active
- the payment gateway used to purchase the subscription must support [subscription suspension](https://woocommerce.com/document/subscriptions/payment-gateways/)
- the subscription must currently have a status of *active* or *pending*
- customer suspension is enabled in the [Subscription Settings](https://woocommerce.com/document/store-manager-guide/#misc-settings), or is a viewed as a store admin

**Requirements to Display Cancel Button**

For the *cancel* button to be displayed:

- the payment gateway used to purchase the subscription must support [subscription cancellation](https://woocommerce.com/document/subscriptions/payment-gateways/)
- the subscription must currently have a status other than *cancelled*, *trash*, *expired* or *pending-cancel*
- the subscription must have at least one future payment as there is no need to cancel a subscription that will end before any future payment is processed

![](https://woocommerce.com/wp-content/uploads/2021/10/view-subscription-cancel-and-suspend-actions.png?w=950)Suspend and Cancel Buttons on the View Subscription Page

### How to cancel a subscription as a customer

[↑ Back to top](#doc-title)

Follow these steps as a customer to cancel a subscription:

1. Log in and go to the **My Account** page of the site
2. Click on the **Subscriptions** menu item
3. Click **View** next to the respective subscription
4. Click the **Cancel** action button

### How to cancel a subscription as a store manager

[↑ Back to top](#doc-title)

A store manager can cancel a subscription in 2 ways. Method 1 sets the subscription only to “Pending Cancellation”. Method 2 can either do the same, or cancel it immediately.

**Method 1:**

1. Navigate to **WooCommerce > Subscriptions**
2. Hover the mouse-cursor over the respective subscription to reveal the **context links**
3. Click **Cancel**
4. The subscription’s status changes to **Pending Cancellation**. Subscription benefits continue until the next billing cycle, at which point the status becomes **Cancelled**, ending all subscription benefits.

**Method 2:**

1. Navigate to **WooCommerce > Subscriptions**
2. Click the respective **subscription number** to enter the **Edit Subscription** screen
3. In the **Subscription details** panel select the **Subscription status dropdown**
4. Choose either **Cancelled** to end subscription benefits immediately, or **Pending Cancellation** to let the benefits continue until the next billing cycle.
5. Click **Update** to save the changes.

### How to suspend a subscription as a customer

[↑ Back to top](#doc-title)

To suspend a subscription as a customer:

1. Log in and go to the **My Account** page of the site
2. Click on the **Subscriptions** menu item
3. Click **View** next to the respective subscription
4. Click the **Suspend** action button

### How to suspend a subscription as a store manager

[↑ Back to top](#doc-title)

Similarly to cancelling a subscription, a store manager can suspend a subscription in 2 ways as well. In this case, the different suspend methods lead to the exact same outcome; an “On hold” subscription.

**Method 1:**

1. Navigate to **WooCommerce > Subscriptions**
2. Hover over the respective subscription to reveal the **context links**
3. Select **Suspend**.
4. The subscription’s status changes to **On hold**

**Method 2:**

1. Click the **Subscription number** to enter the **Edit Subscription** screen.
2. In the **Subscription details** panel select the **Subscription status dropdown**
3. Choose **On hold**
4. Click **Update** to save the changes.

## Remove a Product from a Subscription

[↑ Back to top](#doc-title)

If a subscription has more than one product line item, the customer can remove some or all but one of those items from the subscription. This allows customers to remove items they initially subscribed to, but no longer wish to receive on each renewal.

To remove an item, the customer should follow these steps:

1. Go to **My Account** **→** **Subscriptions** page.
2. Select the **View** button next to the subscription they want to modify.
3. Click the cross next to the product they want to remove.
4. Click **OK**.

After the item is removed, the subscription’s totals updates to remove the cost of that product.

![](https://woocommerce.com/wp-content/uploads/2021/10/view-subscription-remove-item-buttons.png?w=950)Remove Subscriptions Buttons on View Subscription Page

					
		
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

## Change Address on Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/customers-view/update-address/](https://woocommerce.com/document/subscriptions/customers-view/update-address/)

# Change Address on Subscriptions

			If a subscriber wants to have their products shipped to a different address, or they move and need to update their billing address, they can update the address(es). Changing the address updates what is used for their subscriptions. Both addresses can be updated from the **My Account** page by clicking the **Addresses** menu items and selecting the **Edit icon**. The shipping address only can be updated from the specific subscription itself, by clicking the **Change Address button**.

Customers will see this button when:

- [shipping enabled](https://woocommerce.com/document/configuring-woocommerce-settings/#shipping) in WooCommerce.
- at least [one shipping method](https://woocommerce.com/document/setting-up-shipping-zones/) is setup in WooCommerce.
- the subscription is a physical product that needs shipping (i.e.: not set to virtual).
- the subscription must be in either **Active** or **On-hold** status.

![Change Subscription Shipping Address Button](https://woocommerce.com/wp-content/uploads/2013/09/change-subscription-shipping-address.png?strip=all&w=704)Change Subscription Shipping Address Button

Customers can use two methods to update their addresses if the subscription meets the above requirements:

1. Update the shipping address for *one subscription*; or
2. Update the shipping and/or billing addresses for *all subscriptions*.

The video below and the rest of this guide explain the process to update shipping and billing addresses for a subscription in more detail.

![](https://fast.wistia.com/embed/medias/ggrhhnw91u/swatch)

### Change Shipping Address on One Subscription

[↑ Back to top](#doc-title)

If a customer only needs to update the shipping address for one subscription they follow these steps:

1. **Go to** **My Account > Subscriptions>  Click View** next to the subscription.
2. Click the **Change Address** button in the “Actions” section of the subscription information.
3. Enter the new address details in the form.
4. Click **Save Address**.

This process updates the shipping address for that subscription only. This also updates the default shipping address that is used for future subscription purchases. If the customer has other subscriptions, they will continue to receive them at the address listed on the view subscription page for those subscriptions. **Note:** Only the shipping address can be changed on a single subscription, billing address **cannot** be altered this way.

![](https://woocommerce.com/wp-content/uploads/2024/07/Shipping-Address-Change-One-Subscription.png?strip=all&w=704)Shipping Address Change form for a single subscription

### Change the Address on All Subscriptions

[↑ Back to top](#doc-title)

Customers should follow these steps when they need to update the shipping address or billing information on their account for all their subscriptions:

1. **Go to** the **My Account** page.
2. **Select** the **Edit** link next to **shipping** or **billing** address at the bottom of the page.
3. **Enter** the new address details in the form.
4. **Tick** the box: *Update the address used for all of my active subscriptions.*
5. **Save Address**.

![Change Address on Account Link](https://woocommerce.com/wp-content/uploads/2013/09/change-addresses-for-all-subscriptions.png?strip=all&w=704)Change Address on Account Lin

![Change Address on Account Form](https://woocommerce.com/wp-content/uploads/2013/09/change-address-for-all-subscriptions-form.png?strip=all&w=704)Change Address on Account Form

					
		
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

