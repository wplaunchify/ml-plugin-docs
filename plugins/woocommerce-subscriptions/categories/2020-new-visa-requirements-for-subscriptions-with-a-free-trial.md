# 2020 New Visa Requirements For Subscriptions With A Free Trial

*Category from WooCommerce Subscriptions documentation*

---

## 2020 New Visa Requirements for Subscriptions with a Free Trial

**Source:** [https://woocommerce.com/document/subscriptions/2020-new-visa-requirements-for-subscriptions-with-a-free-trial/](https://woocommerce.com/document/subscriptions/2020-new-visa-requirements-for-subscriptions-with-a-free-trial/)

# 2020 New Visa Requirements for Subscriptions with a Free Trial

			Visa is updating their conditions which govern the use of free-trials and introductory offers as part of an ongoing subscription service. We’ve put together this guide to step through what changes you need to make to comply.

## Do these changes apply to me?

The new requirements from Visa apply to your business if you offer subscription products with a free trial and collect credit card information at the time of signup.

These new requirements do not apply to transactions involving:

- Subscription products without a free trial.
- Where the first payment on a subscription product is discounted by the use of a coupon instead of a free trial.
- No credit card information at the time of sign-up.

## What changes do I, as a merchant, need to make?

[↑ Back to top](#doc-title)

The changes are designed to make sure customers are given clear details of the subscription’s billing terms, can more clearly identify free trial transactions and to ensure they can take action on the subscription.

Many of the requirements are already met by WooCommerce Subscriptions. However, there are a couple of changes you will need to make if you offer subscriptions with free trials and collect billing information from the customer at the start of the trial.

### Sign up for free trial without payment details

[↑ Back to top](#doc-title)

WooCommerce Subscriptions has a feature that allows customers who sign up to free trial subscriptions to do so without a credit card. If your store has this enabled, you will meet the requirements of this rule change since no payment details are taken during sign up.

To enable this feature:

1. Go to the **WooCommerce > Settings > Subscriptions** screen.
2. Scroll down to the **Miscellaneous** section.
3. Check the option to **Allow $0 initial checkout without a payment method**.
4. Save.

Learn more about this feature in the [Store Manager Guide](https://woocommerce.com/document/subscriptions/store-manager-guide/#misc-settings).

### Express Consent

[↑ Back to top](#doc-title)

> At the time of enrollment, merchants must require the cardholder to expressly consent to entering an ongoing subscription service for recurring payment. 
> Visa

To meet this requirement you will need to collect expressed consent from the customer before taking payment, consent that they are entering an on-going subscription service with a recurring payment component. In obtaining this consent you will need to provide the following details to the customer:

- Details of the goods and services provided.
- The start and end date of the subscription.
- The length and price of the free or promotional trial period.
- The cost of the subscription after the trial period ends.
- The number of reminders that will be sent prior to billing (note that a trial-ending reminder email is required at least 7 days before the end of a trial period).
- The cancellation policy, including the steps a customer must follow to cancel a subscription.
- The date on which the customer can expect to be billed, for example, if it will be the same date of each month.

### Already Included in WooCommerce Subscriptions Checkout

[↑ Back to top](#doc-title)

During the normal checkout process with WooCommerce Subscriptions, the following are included in the order review section on your store’s checkout page:

- Details of the goods
- The start and end dates of the subscription
- The length and price of the free trial period
- The cost of the subscription after the trial period
- The date on which the customer can expect to be billed

### What You Will Need to Add

[↑ Back to top](#doc-title)

If you are offering subscriptions with a free trial, the two requirements that are not already handled by Subscriptions are:

- The cancellation policy, including the steps a customer must follow to cancel a subscription.
- Reminders sent prior to billing (note that a trial-ending reminder email is required at least 7 days before the end of a trial period).

#### Cancellation Policy

To meet this requirement you will need to include the following in the checkout process so that customers can provide consent:

- Your cancellation policy
- Details about the number of reminders that the customer can expect prior to the recurring billing component starting
- The steps a customer must take to cancel a subscription in your terms and conditions

This can be done by editing your [Terms & Conditions](https://woocommerce.com/document/configuring-woocommerce-settings/advanced/#terms-and-conditions) page, which is included in WooCommerce.

Any subscription that begins with a free trial period must have a mechanism to cancel it before the recurring billing period begins. By default, WooCommerce Subscriptions allows customers to cancel their subscriptions at any time from their My Account page. If you have removed this option, it will need to be reinstated to comply with this condition.

#### Reminders Prior to Billing

To meet this requirement, you must send a notification to customers 7 days prior to the trial end and the payment taking place.

There are a [variety of solutions to notify subscribers](https://woocommerce.com/document/subscriptions/faq/#section-53) before a renewal takes place. One way is to use [AutomateWoo](https://woocommerce.com/products/automatewoo/), which[integrates with WooCommerce Subscriptions](https://woocommerce.com/document/automatewoo/integrations/#woocommerce-subscriptions). Check out more about using [AutomateWoo with Subscriptions](https://woocommerce.com/document/automatewoo/triggers/list/#subscriptions) for info on the integration.

### Enhanced Statement Descriptors

[↑ Back to top](#doc-title)

> Note: Due to COVID-19, Visa have delayed this requirement until April 17, 2021. 
> Visa

To assist customers with identifying free trial transactions, the first transaction description, after the free trial period, will need to include ‘trial end’ or ‘trial over’.

This is the description which appears on the customer’s bank statement, and in mobile banking apps.

This will be handled by your payment gateway extensions. Please be sure to look out for updates to your payment gateway extensions, to comply with this new requirement.

If you are unsure whether your payment gateway plugins meet this requirement, please reach out to them through their support channels.

## Additional Requirements for Stores Operating in the EU

If you sell to customers located in the EU, you will also need to:

- Provide the customer with confirmation of the establishment of the recurring payment agreement, within 2 days of purchase. To meet this requirement, the WooCommerce order processing email sent immediately after the order is paid has been updated to include a note about automatic recurring payments.
- At least 7 days before each recurring transaction, send an email or SMS notification to the customer to remind them about the key features of the recurring payment agreement if:
- A trial period is ending.
- More than 6 months have elapsed since the previous recurring payment.
- The recurring payment agreement has been changed, including the amount of the recurring payment, the date of the recurring payment, or any other terms of the agreement. To meet this requirement, we recommend AutomateWoo as it can process bulk subscription billing updates and has support for notifying customers of those changes. See [AutomateWoo’s guide](https://woocommerce.com/document/automatewoo/examples/bulk-update-subscription-prices/#notify-subscribers) to learn more.

To meet the requirements of more advanced pre-renewal notifications we recommend using one of the plugins and services listed in our [pre-renewal email guide](https://woocommerce.com/document/subscriptions/faq/#section-53).

					
		
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

