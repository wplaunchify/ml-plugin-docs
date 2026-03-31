# Early Renewal

*Category from WooCommerce Subscriptions documentation*

---

## Subscriptions Early Renewal Guide

**Source:** [https://woocommerce.com/document/subscriptions/early-renewal/](https://woocommerce.com/document/subscriptions/early-renewal/)

# Subscriptions Early Renewal Guide

			[WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/)allows customers to renew subscriptions early. This means that a customer doesn’t have to wait until the next renewal payment date in order to pay for the next renewal. They can opt to renew early and have the next payment date appropriately adjusted.

## Enable Early Renewal

[↑ Back to top](#doc-title)

Early renewals are an optional feature. It can be enabled or disabled by the store manager.

In order to change the early renewal setting:

1. Go to**WooCommerce > Settings > Subscriptions**
2. Select the checkbox under “Renewals” labeled “Early Renewal”
3. To enable, make sure the box is checked. To disable, make sure the box is empty.

![](https://woocommerce.com/wp-content/uploads/2024/07/early-renewal-woocommerce-subscriptions.png?w=980)Early Renewal Setting – Enabled

**Early Renewal via a Modal** – After enabling early renewal payments, a second checkbox will appear that allows you to enable early renewal payments via a modal. Enabling this setting gives users who have automatic renewal payments enabled, and a current payment method assigned to their subscription, the option to renew in one click from their account area.

Instead of being taken to the checkout to complete their renewal payment, a modal window will appear asking them to confirm their early renewal payment. After confirming the payment, their renewal order will be processed, and a success or failure notification will show in the account area on the same page.

![](https://woocommerce.com/wp-content/uploads/2024/07/early-renewal-modal-woocommerce-subscriptions.png?strip=all&w=704)Early Renewal via a modal in the user’s account area.

## Early Renewal Process

[↑ Back to top](#doc-title)

The flow chart below maps out the most important actions performed to handle an early renewal. Follow each flow and see which steps Woo Subscriptions performs for both the automatic and manual early renewal methods as well as when using the checkout or early renewal modal flow.

![Early Renewal Process Flowchart](https://woocommerce.com/wp-content/uploads/2018/12/Renewal-Process-Flowchart-Early-Renewal.png?w=950)Early Renewal Process Flowchart

The customer can undertake the early renewal process on the [view subscription](https://woocommerce.com/document/subscriptions/customers-view/#section-2) page.

In order to process an early renewal as a [subscriber](https://woocommerce.com/document/subscriptions/customers-view/#section-23):

1. Go to**My account > Subscriptions**
2. View chosen subscription
3. In the first table, the **Renew Now** button will appear in the Actions row
4. Click **Renew Now** and complete checkout or use the modal

![Renew Now Button](https://woocommerce.com/wp-content/uploads/2018/12/ER_2_button.png?strip=all&w=704)Renew Now Button

## Early Renewal Requirements

[↑ Back to top](#doc-title)

The Renew Now button will only appear for those subscriptions which are eligible for early renewal.

In order for the Renew Now button to appear, the following conditions must be met:

- Early renewal feature must be enabled
- Subscription must have an Active status
- Payment method must support[date changes](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features)
- Subscription must have a recurring price, i.e. it does not have a $0 total
- Subscription does not contain any subscriptions products synchronized for renewals
- Subscription must not currently be in a trial period
- The next payment date is approaching the point at which the subscription billing is set to expire

## Next Payment Date After Early Renewal

[↑ Back to top](#doc-title)

After an early renewal is processed, the next payment date is extended to accommodate another billing period.

For example, if a subscription renews monthly on the 15th and the next payment date is December 15th, then processing an early renewal on November 20th will move the next payment date to January 15th.

![Example Subscription - Before Early Renewal](https://woocommerce.com/wp-content/uploads/2018/12/ER_3_initial_sub.png?strip=all&w=704)Example Subscription – Before Early Renewal

![Example Subscription - After Early Renewal](https://woocommerce.com/wp-content/uploads/2018/12/ER_4_after_renewal.png?strip=all&w=704)Example Subscription – After Early Renewal

## Store Manager View

[↑ Back to top](#doc-title)

When a customer renews a subscription early, a series of notes will appear on the [WooCommerce > Edit Subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/) administration screen that the store manager can view. These notes record the process of creating an early renewal order, processing the order, and either the successful renewal or errors associated with the renewal.

To view the early renewal subscription notes:

1. Go to**WooCommerce > Subscriptions**and choose a subscription
2. Locate the **Subscription Notes** box

![Edit Subscription Screen - Notes](https://woocommerce.com/wp-content/uploads/2018/12/ER_5_notes_screen.png?strip=all&w=704)Edit Subscription Screen – Notes

1. View the subscription notes

![Subscription Notes - Early Renewal](https://woocommerce.com/wp-content/uploads/2018/12/ER_6_notes.png?w=256)Subscription Notes – Early Renewal

## FAQ

[↑ Back to top](#doc-title)

### Why doesn’t the “Renew Now” button show up for synchronized subscriptions?

[↑ Back to top](#doc-title)

The **Renew Now** button doesn’t show up for [synchronized subscriptions](https://woocommerce.com/document/subscriptions/renewal-synchronisation/) because synced products are usually created for reasons not suited to early renewal.

There is a filter that can be used to remove this restriction called 
```
'wcs_allow_synced_product_early_renewal'
```

. Below is an example of using this filter to allow all synced products to renew early.

```
add_filter( 'wcs_allow_synced_product_early_renewal', '__return_true', 10 );
```

### Can a customer renew early multiple times?

[↑ Back to top](#doc-title)

Yes, it is possible for customers to renew early, and then renew early again to extend the payment date for another billing cycle.

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

