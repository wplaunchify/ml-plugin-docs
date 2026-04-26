# Migrating Subscribers Woocommerce Subscriptions

*Category from WooCommerce Subscriptions documentation*

---

## Migrating Subscribers to WooCommerce Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/migrating-subscribers-woocommerce-subscriptions/](https://woocommerce.com/document/subscriptions/migrating-subscribers-woocommerce-subscriptions/)

# Migrating Subscribers to WooCommerce Subscriptions

			If you have an existing store that sells products on subscription using another system, you may wish to migrate your customers over to WooCommerce Subscriptions.

Because in WooCommerce Subscriptions, a subscription agreement is linked to a product, customer, payment gateway and potentially one or many orders, migrating a subscription can be rather difficult. This guide will provide an overview of what you’ll need to consider when migrating and some general advice on how to proceed.

Much of this information likewise applies when migrating subscribers from one WooCommerce store to another.

## Add or import manually

[↑ Nach oben](#doc-title)

Woo Subscriptions provides a full featured [Add Subscription interface for manually importing a subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/).

This interface allows you to create subscriptions for any given product and link it to a user account. It even makes it possible to [set up automatic payments](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#set-up-automatic-payments).

**If you need to import less than 100 subscribers, manually adding each subscription using this administration screen is the best way to import the subscribers.**

Although it will be time-consuming initially, using this administration interface helps ensure that data is all setup correctly.

Manually entered subscription data should be added in the following order:

1. Customers,
2. Products,
3. Parent Order,
4. Subscriptions,
5. Historical Renewal Orders, if needed.

The downside of manually importing subscriptions is that it’s time-consuming if you have many subscriptions. There is also no simple way to create/connect *historical* renewal orders for manually imported subscriptions. You may consider saving a reference of prior renewal orders from your prior system if needed.

If you need historical renewal orders added to the subscription in WooCommerce, you can create renewal orders using the “Create pending renewal order” action in the Order actions area of the Edit Subscription page. Then you can [manually edit the order details](https://woocommerce.com/document/managing-orders/view-edit-or-add-an-order/#order-details) as needed.

## Bulk subscription CSV importer

[↑ Nach oben](#doc-title)

A Subscriptions CSV Importer is also available for bulk importing large numbers of subscribers. This extension is currently available free in public beta.

You can learn more, download and test the extension via the [Subscriptions CSV Importer GitHub Repository](https://github.com/Prospress/woocommerce-subscriptions-importer-exporter).

**Note:**Please be aware of the caveats mentioned in the documentation of the importer. 

**Specifically: Woo does not provide services to complete a migration with this extension or support for issues with subscriptions created with this extension.** This means the WooCommerce support team can not help with CSV formatting, fixing broken renewals or other issues with subscriptions imported incorrectly.

For help and support with a migration, please [contact an official Woo agency partner](https://woocommerce.com/development-services/?services=site_migration_platform_integration). For smaller-scale migrations, learn more and consider using [Codeable’s Migration packages here](https://www.codeable.io/partners/woocommerce/migration-packages/).

## Custom import scripts

[↑ Nach oben](#doc-title)

Your specific migration may require a custom import script to be written and used. For example, to only import orders after a certain date or with a non-standard payment gateway would require a custom migration.

**Custom import scripts are not supported by WooCommerce.com**, as these are considered [customizations under our support policy.](https://woocommerce.com/support-policy/)

To get help with a custom import, please contact a [WooExpert](https://woocommerce.com/experts/).

## FAQs

[↑ Nach oben](#doc-title)

### Is it possible to make sure the active subscriptions will still work?

[↑ Nach oben](#doc-title)

If the payment gateways used on your subscriptions supports [payment method changes by the administrator](https://woocommerce.com/document/subscriptions/payment-gateways/#advanced-features) then you can import subscribers using either the **Add Subscription** interface or the CSV importer.

Depending on the payment gateway being used, the information required varies. We are working to add specific guides for different payment gateways on how to find and link this data. For now, you will need to [submit a ticket to WooCommerce.com](https://woocommerce.com/my-account/create-a-ticket/) if you can not find the required data for your import.

### Can subscriptions still be imported with an unsupported payment gateway or missing payment metadata?

[↑ Nach oben](#doc-title)

Yes, but not as easily. There are two possible solutions to for importing these subscriptions:

- Import with [manual renewals](https://woocommerce.com/document/subscriptions/renewal-process/); or
- Allow the customer to pay for the next renewal by forcing it to fail (and therefore, linking their payment data with WooCommerce).

#### Importing with Manual Renewals

Firstly, if you are using a payment gateway that does not support payment method changes by the administrator, subscriptions can still be successfully imported by either of the methods above; however, they will be set to **require manual renewal payments**.

#### Importing with Failed Renewal Payments

If your gateway does not support payment method changes by the administrator, you can not get access to customer payment method metadata, or you want to switch to a different payment gateway, it can be very difficult (often impossible) to import the subscription with an automatic renewal payment method in place. This is because you need customer payment method data, like a credit card token, in order to link the subscription with the payment gateway.

A workaround for this is to use Subscriptions [Failed Payment Handling](https://woocommerce.com/document/subscriptions/renewal-process/#failed-payment-handling) to:

- Email the customer when the first renewal is due; and then
- Link the customer’s payment method with the subscription when they [pay](https://woocommerce.com/document/subscriptions/customers-view/#subscription-management) for the failed renewal.

In order to trigger a failed renewal, you need to create a subscription with invalid data. You can do this by using an invalid customer token for a valid payment gateway. This ensures the first renewal payment after the import will fail and the failed payment handling process is initiated.

Note: make sure the [automatic failed payment retry system](https://woocommerce.com/document/subscriptions/failed-payment-retry/) is not enabled if using this method.

### Can subscriptions with PayPal Standard be imported?

[↑ Nach oben](#doc-title)

No. Unfortunately, PayPal Standard has a [large number of limitations](https://woocommerce.com/document/subscriptions/limitations-of-paypal-standard/) which prevent it being possible to migrate a subscription with PayPal Standard into Woo Subscriptions.

Specifically, PayPal do not consistently allow the IPN URL used for subscription event notifications, like recurring payments, to be updated. Because of this, it is not possible for Woo Subscriptions to keep the subscription in sync with PayPal, or to generate renewal orders for renewal payments.

The WooCommerce Subscriptions team has communicated with multiple PayPal technical representatives about this issue. They have also tested a migration on multiple sites and read up on all available information online about changing the PayPal IPN URL for existing subscriptions. While updating the IPN URL set on the PayPal account will update the IPN URL used for existing subscriptions in some cases, there is no information about when it will work, and it has been confirmed to not work in many other cases.

PayPal Billing Agreements can be imported with Woo Subscriptions and used for [Reference Transactions](https://woocommerce.com/document/paypal-reference-transactions/). But PayPal Standard Subscriptions can not be imported.

### How do I migrate from one payment gateway’s account to another?

[↑ Nach oben](#doc-title)

Please reach out to the gateway’s support directly for assistance with migrating subscriptions from one merchant account to another.

### Can I migrate subscriptions from a third-party Stripe plugin to WooPayments or the Stripe for WooCommerce extension?

[↑ Nach oben](#doc-title)

Yes, but the process depends on how your current plugin stores Stripe customer and payment method information.

WooCommerce Subscriptions use two pieces of data from Stripe:

- **Customer ID** (e.g., 
```
cus_ABC123
```

)
- **Payment Method ID** (e.g., 
```
pm_DEF456
```

)

Different plugins store this information in different ways. [WooPayments](https://woocommerce.com/products/woopayments/) and the [Stripe for WooCommerce](https://woocommerce.com/products/stripe/) extension expect:

- ```
Customer ID
```

 saved under 
```
_stripe_customer_id
```
- ```
Payment Method ID
```

 saved under 
```
_payment_method_id
```

 (WooPayments) or 
```
_stripe_source_id
```

 (Stripe for WooCommerce)

#### How to check

You (or your developer) can look up the metadata for a subscription in your database using a tool like **phpMyAdmin**. You’re looking for:

- A field that contains a value starting with 
```
cus_
```
- A field that contains a value starting with 
```
pm_
```

To find this data with a SQL query, you can run:

```
SELECT
  post_id AS subscription_id, 
  meta_key, 
  meta_value 
FROM wp_postmeta 
WHERE post_id = 955;
```

Replace 
```
955
```

 with the actual [subscription ID](https://woocommerce.com/document/subscriptions/develop/data-structure/#subscription-id).

#### If the format matches

If the format and meta keys match, you can manually move the data:

1. [Edit the subscription](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/update-an-existing-subscription/) from **WooCommerce > Subscriptions**
2. [Change the payment method](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#set-up-automatic-payments) to WooPayments or Stripe for WooCommerce
3. Paste the existing Customer ID and Payment Method ID
4. Save

#### If the format doesn’t match

If your current plugin stores the data differently, you have a few options:

- **Gradual migration**: Keep your old Stripe plugin active for renewals, disable it at checkout, and use WooPayments or Stripe for WooCommerce for new sign-ups.
- **Ask customers to update**: Disable your existing Stripe plugin and ask subscribers to log in and update their payment method.
- **Large-scale migration**: For hundreds of subscriptions, consider working with a developer from [Codeable](https://codeable.io), or using the [Subscriptions Importer/Exporter tool](https://woocommerce.com/document/subscriptions/woocommerce-subscriptions-snippets-and-plugins/#woocommerce-subscriptions-importer-and-exporter).

### I used an order import/export plugin to import subscriptions, but they’re not working correctly.

[↑ Nach oben](#doc-title)

It’s likely the subscription data was not handled correctly during the import process. If you used a third party order import/export plugin to import your subscriptions, we would recommend reaching out to the developers of the plugin you used.

## Questions and support

[↑ Nach oben](#doc-title)

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

