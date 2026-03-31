# Customers Extend Subscription Expiration Date

*Category from WooCommerce Subscriptions documentation*

---

## Managing Expired Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/customers-extend-subscription-expiration-date/](https://woocommerce.com/document/subscriptions/customers-extend-subscription-expiration-date/)

# Managing Expired Subscriptions

			When [creating a subscription product](https://woocommerce.com/document/subscriptions/store-manager-guide/#creating-a-subscription-product), you can set a specific length to the subscription, for example, 12 months, or 2 years. After this defined period of time, the subscription will expire(or end).

When a customer purchases a subscription with a defined length, it will [renew](https://woocommerce.com/document/subscriptions/renewal-process/) until that number of recurring payments has been completed, and then be set to the “*expired*” status. But what if your customer wants their set-length subscription to go on for longer? In this document we address your options.

![](https://woocommerce.com/wp-content/uploads/2024/07/Screenshot-2024-07-10-at-2.09.03 PM.png?strip=all&w=704)

## Resubscribe to the Subscription after expiration

[↑ Back to top](#doc-title)

After their subscription expires, customers can login to your store and [create a new subscription](https://woocommerce.com/document/subscriptions/customers-view/#subscription-management) to that exact product by **resubscribing** from their **My Account** page. This is the simplest way for a customer to extend a subscription with an expiration. After clicking to resubscribe the customer is taken directly to checkout to purchase a new subscription that matches the one that had expired.

![](https://woocommerce.com/wp-content/uploads/2024/07/resubscribe-subscription.png?strip=all&w=704)Resubscribe button on the “My Account” page

## Extend before expiration

Allowing a customer to extend a subscription before it expires is more complicated. The only way for customers to extend a subscription before it expires is to [switch](https://woocommerce.com/document/subscriptions/switching-guide/) their existing subscription to a new subscription with a longer length.

To allow customers to do this, first, you need to set up switching between subscription products. To do this:

1. Go to: **WooCommerce > Settings > Subscriptions** administration screen
2. Scroll down to the [Switch Settings section](https://woocommerce.com/document/subscriptions/switching-guide/#switch-settings) (titled **Switching**)
3. Enable switching by changing the **Allow Switching** select box to anything other than “Never”
4. If you’d like the new subscription to account for payments that have already been made on the current subscription, [enable proration of the expiration](https://woocommerce.com/document/subscriptions/switching-guide/#prorate-length) by changing the **Prorate Subscription Length** to anything other than “Never”. If you leave this set to “Never” the new subscription will start a brand new term based on the length assigned on the product.

![Screenshot of WooCommerce Subscription settings for Switching subscriptions.](https://woocommerce.com/wp-content/uploads/2014/12/extendsubscription2.png?strip=all&w=704)Subscription Switch Settings under **WooCommerce > Settings > Subscriptions**

After you have set up switching, you need to create a product which allows customers to switch to a longer subscription. To do this:

1. Go to: **Products > Add Product** administration screen
2. Select **Variable Subscription** as the product type
3. Click the **Attributes** tab on the **Product Data** metabox to [define the variation attributes](https://woocommerce.com/document/variable-product/#adding-a-variable-product)
4. Add a **Length** attribute (either as a *custom product attribute* if you will only use this on one product, or as a [global product attribute](https://woocommerce.com/document/managing-product-taxonomies/#create-global-attributes) if it will be used on multiple products)
5. Define the lengths you will allow for each variation
6. [Add variations](https://woocommerce.com/document/variable-product/#adding-a-variable-product) for each length defined above

For example, the screenshot below shows 3 variations with 3 different lengths – *1 year*, *2 years* and *3 years*.

![Screenshot of Variable Subscription settings.](https://woocommerce.com/wp-content/uploads/2014/12/extendsubscription3.png?strip=all&w=704)

Customers can then use the [upgrade process](https://woocommerce.com/document/subscriptions/switching-guide/#upgrading-downgrading-subscriptions) to choose a longer subscription.

## What About Altering the Expiration Date?

[↑ Back to top](#doc-title)

Although the two other methods mentioned allow your customers to extend their subscriptions, they both create a *new* subscription with the extended expiration date rather than changing the expiration date of the *existing* subscription.

These are the preferred methods to extend a subscription because not all payment methods support [payment date changes](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features) after a subscription has been created and therefore, WooCommerce Subscriptions can only be assured *all* payment gateways will be able to extend the expiration date by creating a new subscription with the payment gateway.

That said, if your payment gateway supports changing payment dates on existing subscriptions, then you **are** able to extend an existing subscription by changing the **end date** in the [Schedule section](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#set-a-billing-schedule) of the “Edit Subscription” page. Be sure to check whether your payment gateway supports this method of extending subscriptions. There is no customer-facing way to extend a subscription’s end date like this.

![](https://woocommerce.com/wp-content/uploads/2024/07/change-end-date-woocommerce-subscription.png?strip=all&w=704)You can extend a subscription by changing its end date in the schedule area. Not all payment gateways support this.

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

