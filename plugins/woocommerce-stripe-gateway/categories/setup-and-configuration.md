# Setup And Configuration

*Category from WooCommerce Stripe Gateway documentation*

---

## Setup and configuration of the Stripe extension

**Source:** [https://woocommerce.com/document/stripe/setup-and-configuration/](https://woocommerce.com/document/stripe/setup-and-configuration/)

# Setup and configuration of the Stripe extension

			The Stripe extension is a versatile way to accept payments on your WooCommerce site. However, in order for it to work properly, it needs to be set up and configured.

## Requirements for the Stripe extension

[↑ Back to top](#doc-title)

First, let’s make sure you have what’s required to ensure a smooth installation:

- Your business must be based in one of Stripe’s [supported countries](https://stripe.com/global/).
- Countries where Stripe is in “Preview” are not supported. (As of January 2025, this means India and Indonesia.)
- PHP, WordPress, and WooCommerce must be on recent versions.
- Your site has [an SSL certificate](https://woocommerce.com/document/ssl-and-https/) and is accessible over HTTPS.

## Installation of the Stripe extension

[↑ Back to top](#doc-title)

The first step to getting started with the Stripe extension is to install it on your WooCommerce site.

You can learn more about how to install the Stripe extension directly from your administrator dashboard in our [installation documentation](https://woocommerce.com/document/stripe/setup-and-configuration/installation/).

### Multisite

[↑ Back to top](#doc-title)

On a [multisite](https://developer.wordpress.org/advanced-administration/multisite/), we recommend installing the Stripe extension on each sub-site individually, and then continuing with the setup process from there.

Although we cannot test every last feature of our extension in a multisite environment, the basics at least should work just fine. Please [contact us](https://woocommerce.com/my-account/contact-support/) if you run into issues with the Stripe extension and multisite.

## Setting up the Stripe extension

[↑ Back to top](#doc-title)

Once you’ve installed the Stripe extension, you’ll want to go through and make sure that it is set up in a way that will allow your store to accept live payments from customers and securely communicate with Stripe’s systems.

To ensure that the Stripe extension is set up properly, you will want to [connect to a Stripe account](https://woocommerce.com/document/stripe/setup-and-configuration/connecting-to-stripe/) and [set up webhooks](https://woocommerce.com/document/stripe/setup-and-configuration/stripe-webhooks/).

## Configuring the Stripe extension

[↑ Back to top](#doc-title)

Once the Stripe extension plugin is set up, you can start taking payments!

However, there are also a number of options available that can help customize the shopper experience and drive increased sales, such as:

- [Adjusting your Stripe plugin settings](https://woocommerce.com/document/stripe/setup-and-configuration/settings-guide/)
- [Enabling additional payment methods](https://woocommerce.com/document/stripe/setup-and-configuration/additional-payment-methods/)
- [Configuring express checkouts](https://woocommerce.com/document/stripe/setup-and-configuration/express-checkouts/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## Additional payment methods

**Source:** [https://woocommerce.com/document/stripe/setup-and-configuration/additional-payment-methods/](https://woocommerce.com/document/stripe/setup-and-configuration/additional-payment-methods/)

# Additional payment methods

			Merchants who use the Stripe extension can accept credit cards, debit cards, and [express payment methods](https://woocommerce.com/document/stripe/setup-and-configuration/express-checkouts/). However, you can also offer additional payment options, in the form of local payment methods, to certain customers.

This guide will cover:

- [Which additional payment methods](#which-apms) are available.
- How to [enable additional payment methods](#enabling).
- [Rearranging](#change-display-order) the additional payment methods.

## Which additional payment methods can I offer?

[↑ Back to top](#doc-title)

The Stripe extension supports the following additional payment methods:

- [ACH](https://docs.stripe.com/payments/ach-direct-debit)
- [Affirm](https://stripe.com/payments/affirm)
- [Afterpay](https://stripe.com/payments/afterpay-clearpay)
- [Alipay](https://stripe.com/payment-method/alipay)
- [BACS](https://stripe.com/payments/bacs-debit)
- [Bancontact](https://stripe.com/payment-method/bancontact)
- [BECS](https://docs.stripe.com/payments/au-becs-debit)
- [BLIK](https://docs.stripe.com/payments/blik)
- [Boleto](https://stripe.com/payment-method/boleto)
- [Canada PADs](https://docs.stripe.com/payments/acss-debit)

- [Cash App Pay](https://stripe.com/payments/cash-app-pay)
- [EPS](https://stripe.com/payment-method/eps)
- [iDEAL | Wero](https://stripe.com/payment-method/ideal)
- [Klarna](https://stripe.com/payments/klarna)
- [Multibanco](https://stripe.com/payment-method/multibanco)
- [OXXO](https://stripe.com/payment-method/oxxo)
- [Przelewy24](https://stripe.com/payment-method/przelewy24)
- [SEPA Direct Debit](https://stripe.com/payments/sepa-direct-debit)
- [WeChat Pay](https://stripe.com/payment-method/wechat-pay)

**NOTE:** Although the Stripe dashboard shows more payment methods, the list above are the ones our Stripe plugin supports. If you enable other methods in the Stripe dashboard, those will not be shown by our Stripe plugin.

## Enabling additional payment methods

[↑ Back to top](#doc-title)

To enable additional payment methods:

1. Navigate to **WooCommerce > Settings > Payments > Stripe > Payment Methods**.
2. Locate the method(s) you’d like to enable under the **Payments methods**section.
3. Check the box associated with the additional payment method(s) you’d like to enable.
4. Click **Save changes**.

Once you’ve enabled the payment methods you want, you’re all done! There are no settings to configure for them, and customers can use them right away.

## Requirements for additional payment methods

[↑ Back to top](#doc-title)

Additional payment methods may have requirements that need to be met before they’ll be shown to customers. For example:

- Your [store currency](https://woocommerce.com/document/shop-currency/) may need to be set to something specific. For example, Bancontact requires that payments be in euros (EUR).
- The [Adaptive Pricing feature](https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/adaptive-pricing/) of the [Optimized Checkout Suite](https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/) may help you work around this requirement though!
- The customer’s country may need to be supported by that method. For example, [Przelewy24](https://docs.stripe.com/payments/p24) requires the billing address to be in Poland.
- Certain product types may not be supported by all methods. For example, some buy now, pay later methods do not support subscription products.
- Stripe may have to approve your usage of the payment method before it becomes available.

In most cases, the Stripe extension will warn you if some requirement is not met:

- ![](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-2025-07-10-at-12.02.49 PM.png?strip=all&w=704)
- ![](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-2025-07-10-at-12.01.42 PM.png?strip=all&w=704)

## Change display order

[↑ Back to top](#doc-title)

You may want to display additional payment methods offered by the Stripe extension in a particular order. To change how these payment methods are arranged:

1. Navigate to **WooCommerce > Settings > Payments > Stripe > Payment Methods**.
2. Select the **Change display order** link at the top of the payment methods list.
3. Drag the payment methods to arrange them in your preferred order.
4. Select **Save display order** when you are finished to save your settings.

![](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-2025-07-10-at-11.59.09 AM.png?strip=all&w=704)

**NOTE:** If the **Change display order** button is missing, you may be using the [Optimized Checkout Suite](https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/), which uses AI to order payment methods.

## Limitations

[↑ Back to top](#doc-title)

Some payment methods have limitations in their functionality. These are listed below.

- BACS will not be offered if the order total is zero.
- Merchants should keep the [Canada PADs email setting](https://dashboard.stripe.com/settings/emails) enabled to remain in compliance with Payments Canada regulations.
- Only [certain payment methods work with automatic renewals](https://woocommerce.com/document/subscriptions/payment-gateways/#stripe) in [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## Connecting to a Stripe account

**Source:** [https://woocommerce.com/document/stripe/setup-and-configuration/connecting-to-stripe/](https://woocommerce.com/document/stripe/setup-and-configuration/connecting-to-stripe/)

# Connecting to a Stripe account

			The Stripe extension lets you connect your Stripe.com account to WooCommerce so that you can process payments securely. This document covers how to make that connection.

## Creating a Stripe account

[↑ Back to top](#doc-title)

If you haven’t already created a Stripe account, you will be given the opportunity to create one during the connection process.

If you do already have a Stripe account, logging into it prior to connecting our Stripe extension will make the connection process easier.

**NOTE:** 

WooCommerce support can help with the Stripe extension on your WooCommerce site (installation, connection, webhooks, and checkout behavior). 

WooCommerce support does not provide support for Stripe account-related queries or for settings inside the Stripe Dashboard. 

If your question is about Stripe account onboarding or verification, business details, compliance requirements, payout settings, or required fields shown during setup in Stripe (for example tax/VAT fields), [please contact Stripe directly](https://support.stripe.com/).

## Connecting to a Stripe account

[↑ Back to top](#doc-title)

Once you’ve [installed the Stripe extension](https://woocommerce.com/document/stripe/setup-and-configuration/installation/), you can connect to Stripe like so:

1. Navigating to **WooCommerce > Settings > Payments** tab.
2. Click the **Complete setup button** for the Stripe payment method.

![](https://woocommerce.com/wp-content/uploads/2024/08/Screenshot-2025-05-19-at-5.19.46 PM.png?strip=all&w=704)

1. Click the **Create or connect an account** button.
- Clicking the **Create or connect a test account** button should only be used if you’re connecting to [a test-only Stripe account](https://woocommerce.com/document/stripe/customer-experience/testing/#test-only-stripe-account).
- You’ll be redirected to connect.stripe.com where you can either connect to an existing Stripe account or create a new one. You’ll complete onboarding on Stripe’s site; any required fields shown there are controlled by Stripe.
2. You’ll be redirected to 
```
connect.stripe.com
```

 where you can either connect to an existing Stripe account or create a new one.

- ![](https://woocommerce.com/wp-content/uploads/2024/08/Screenshot-taken-on-2025-02-14-at-09.02.52-UTC@2x.png?w=980)Connecting to an existing Stripe account (while logged in)
- ![](https://woocommerce.com/wp-content/uploads/2024/08/Screenshot-taken-on-2025-02-14-at-09.04.27-UTC@2x.png?w=980)Creating a new Stripe account (not logged in)

**NOTE:** If you are asked to “Re-use this business to create a new account”, that means that your Stripe account is already connected to a third-party platform. You must first [disconnect it](https://support.stripe.com/questions/disconnect-your-stripe-account-from-a-connected-third-party-platform) from the [Installed Apps settings page](https://dashboard.stripe.com/settings/apps) in the Stripe dashboard before you can use it for our Stripe plugin. Read more in the [Multiple accounts section](#multiple-accounts).

1. Whether you simply connected to an existing account you were already logged into or created a brand new Stripe account, you’ll be redirected back to the WordPress admin dashboard once you’ve connected our Stripe extension.
2. In the *Account details* section, ensure that the statuses of *Payment*, *Payout*, *Webhook*, and *Sync* are all green/”Enabled.”

![](https://woocommerce.com/wp-content/uploads/2024/08/Screenshot-taken-on-2026-05-13-at-17.07.10-UTC@2x.png?w=980)

Once that’s done, you’re all set to start using the Stripe extension!

## Troubleshooting the connection

[↑ Back to top](#doc-title)

### Not a connection problem?

[↑ Back to top](#doc-title)

If the issue is happening in Stripe’s onboarding flow or the Stripe Dashboard (for example a required VAT/Tax ID field, business verification, or account compliance questions), it’s a Stripe account question. Please [contact Stripe Support](https://support.stripe.com/) for these. The troubleshooting below is only for issues that occur while connecting WooCommerce to Stripe.

### “An issue occurred generating a connection to Stripe”

[↑ Back to top](#doc-title)

If you see this error message while trying to connect to your Stripe account:

![](https://woocommerce.com/wp-content/uploads/2024/08/image_e9fba3.png?w=980)

… it could indicate one of a few problems with the connection process:

- Your site may not be served over HTTPS / using an SSL certificate.
- Your site may not be reachable from the Internet, e.g. it’s hosted locally.
- Our systems at WooCommerce.com might be offline temporarily.

If you wait 5 minutes, try again, and it still does not work, [reach out to support](https://woocommerce.com/my-account/contact-support/).

### “Incomplete” account status

[↑ Back to top](#doc-title)

If you ever click the **Configure connection** button and notice that your account status is “Incomplete”, you may need to re-authenticate your Stripe account.

![](https://woocommerce.com/wp-content/uploads/2025/10/Screenshot-taken-on-2025-10-09-at-13.40.37-UTC.png?strip=all&w=704)

## Multiple accounts and sites

[↑ Back to top](#doc-title)

[Stripe requires](https://docs.stripe.com/get-started/account/multiple-accounts) that each website you operate use its own Stripe account, even if it’s possible (via our plugin) to use the same Stripe account on more than one site.

That said, merchants **are** permitted to re-use the same tax ID and business information across multiple accounts if they operate under the same legal entity.

Where Stripe sub-accounts exist but are already used by another integration, the option to “Re-use this business to create a new account” might be offered. If that option is selected, a duplicate subaccount will be created based on the selected account.

- ![](https://woocommerce.com/wp-content/uploads/2024/08/stripe-sub-account-original.png?w=976)A selected account that can be connected to with the button displaying “Connect”
- ![](https://woocommerce.com/wp-content/uploads/2024/08/stripe-sub-account-duplicate.png?w=928)A selected account that cannot be connected to with the button displaying “Create”. A copy of this account will be created, and the connection will be made with the copied account.

It may also sometimes be possible to disconnect an account from an integration from within the Stripe.com dashboard by going to **your Stripe account > Apps**(on the left sidebar)**> Overview > Connect extensions**.

## Going further

[↑ Back to top](#doc-title)

Once you’ve connected our Stripe extension to a Stripe account, you’ll need to adjust some settings to ensure that your site receives all the information it needs to handle payments successfully.

As a next step, we recommend [configuring test mode](https://woocommerce.com/document/stripe/customer-experience/testing/) and [adjusting the settings](https://woocommerce.com/document/stripe/setup-and-configuration/settings-guide/).

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## Enabling express checkouts

**Source:** [https://woocommerce.com/document/stripe/setup-and-configuration/express-checkouts/](https://woocommerce.com/document/stripe/setup-and-configuration/express-checkouts/)

# Enabling express checkouts

			Express checkout methods allow customers to quickly pay for a product or service using pre-filled information from an existing account. The result is a completed purchase with very little “friction,” which can help lead to increased conversion rates.

With the Stripe extension, there are four express checkout methods available:

- [Amazon Pay](https://pay.amazon.com/)
- [Apple Pay](https://www.apple.com/apple-pay/)
- [Google Pay](https://pay.google.com/about/)
- [Link by Stripe](https://link.com/)

This guide will cover the requirements for offering express payment methods and how to enable them on your site.

## Site requirements

[↑ Back to top](#doc-title)

To properly display express payment methods via the Stripe extension:

- Your domain must have [a valid SSL certificate](https://woocommerce.com/document/ssl-and-https/).
- Your **entire site** must be served over HTTPS.

### Additional Apple Pay requirements

[↑ Back to top](#doc-title)

In addition to the site requirements above, Apple Pay also requires that:

- Your server has port 
```
443
```

 open.
- Your server supports [the TLS 1.2 protocol](https://www.cdn77.com/tls-test) or later.
- Your domain is enabled on your Stripe account’s [payment method domains page](https://dashboard.stripe.com/settings/payment_method_domains).

**NOTE:**Apple Pay requires [a domain association file](https://docs.stripe.com/payments/payment-methods/pmd-registration?dashboard-or-api=dashboard#verify-domain-with-apple) to be hosted on your site. The Stripe extension automatically creates this file for you.

### Additional Google Pay requirements

[↑ Back to top](#doc-title)

In addition to the site requirements above, Google Pay also requires that:

- Your domain is enabled on your Stripe account’s [payment method domains page](https://dashboard.stripe.com/settings/payment_method_domains).

### Additional Link by Stripe requirements

[↑ Back to top](#doc-title)

In addition to the site requirements above, Link by Stripe also requires that:

- Your Stripe account is based in one of the following countries: the United States, Canada, Mexico, Japan, Australia, New Zealand, Hong Kong, Singapore, Malaysia, United Arab Emirates, or any European country.

### Additional Amazon Pay requirements

[↑ Back to top](#doc-title)

In addition to the site requirements above, Amazon Pay also requires that:

- The currency your customer is paying in is one of these: USD, AUD, GBP, DKK, EUR, HKD, JPY, NZD, NOK, ZAR, SEK, or CHF.
- Your Stripe account is based in one of the following countries: Austria, Belgium, Cyprus, Denmark, France, Germany, Hungary, Ireland, Italy, Luxembourg, Netherlands, Portugal, Spain, Sweden, Switzerland, United Kingdom, or the U.S.

## Enabling express checkouts

[↑ Back to top](#doc-title)

To enable express payment methods in the Stripe extension:

1. Navigate to **WooCommerce > Settings > Payments > Stripe > Payment Methods**.
2. Scroll down to the **Express checkouts** section.
3. Select which of the express payment methods you’d like to enable.
4. Select the **Save changes** button when you are finished.

**NOTE:** Apple Pay and Google Pay cannot be enabled separately.

## Customizing Apple Pay and Google Pay

[↑ Back to top](#doc-title)

After saving your payment method settings, you can customize how Apple Pay and Google Pay buttons appear on your site by selecting the **Customize**button.

![](https://woocommerce.com/wp-content/uploads/2026/02/Screenshot-taken-on-2026-02-09-at-15.44.54-UTC@2x.png?strip=all&w=704)

When customizing Apple Pay and Google Pay, you can change:

- Which of the following pages these buttons will appear on:
- The checkout page.
- Individual product pages.
- The cart page.
- The change payment method page (if [the Subscriptions plugin](https://woocommerce.com/products/woocommerce-subscriptions/) is active)
- The call to action used in the buttons.
- The size of the buttons.
- The color theme of the buttons.

Amazon Pay only allows you to customize the button locations and button size.

A preview of the buttons is also shown so that you can see how these customizations will appear before saving your changes.

## Compatibility

[↑ Back to top](#doc-title)

Express checkout methods are very similar to card payments. As a result, they work well with most features, such as [test mode](https://woocommerce.com/document/stripe/customer-experience/testing/) and [separate authorize/capture](https://woocommerce.com/document/stripe/admin-experience/authorize-and-capture/).

But there are some cases in which express checkout methods won’t be shown:

- Any non-default product type
- Pre-orders that [charge upon release](https://woocommerce.com/document/pre-orders/#product-settings)
- [Composite products](https://woocommerce.com/document/composite-products/)
- File upload fields
- Free products
- Variable subscriptions where any variation is out of stock
- Products that don’t require shipping, but only if the “[Calculate tax based on](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/#calculate-tax-based-on)” setting is set to the customer billing address. 
- [Learn how to override this behavior.](#Show-Express-Checkout-Buttons-for-Virtual-Products)

Additionally, some extensions add custom fields to the checkout page(s). These extra fields are ignored if:

- They are present on the shortcode checkout page, or..
- They are present on the blocks checkout page, and **not** added using the 
```
woocommerce_register_additional_checkout_field
```

 hook

## Can I use only the express checkout methods and not take card payments?

[↑ Back to top](#doc-title)

Generally not. The credit card/ debit card payment method must be enabled in order to use express checkout methods.

There is one exception: if you are using the [Optimized Checkout Suite](https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/) and have Link by Stripe enabled, Link will show on the checkout page even if you disable card payments.

## Show Express Checkout Buttons for Virtual Products

[↑ Back to top](#doc-title)

**NOTE**: Enabling Express Checkout for digital products may result in inaccurate tax calculation if the store’s tax settings depend on the customer’s billing address—which is not made available to the Express method before they are selected.

By default, Stripe for WooCommerce hides Express Checkout buttons (Apple Pay, Google Pay, Link, etc.) when:

- A product is not shippable (e.g., virtual or downloadable), and
- Taxes are configured to be calculated based on the customer’s billing address

This behavior was introduced to prevent tax mismatches, since WooCommerce doesn’t have the customer’s address until after the payment confirmation button is clicked—making it challenging to calculate tax accurately in advance.

As of Stripe for WooCommerce 9.5.0, developers can override the default behavior.

```
add_filter( 'wc_stripe_should_hide_express_checkout_button_based_on_tax_setup', '__return_false' );
```

**NOTE:** We are unable to provide support for customizations under our [Support Policy](http://woocommerce.com/support-policy/). If you need to customize a snippet beyond what is shown on this page, we suggest [Codeable](https://codeable.io/?ref=z4Hnp) or a [Certified WooExpert](https://woocommerce.com/experts/).

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## Installing the Stripe extension

**Source:** [https://woocommerce.com/document/stripe/setup-and-configuration/installation/](https://woocommerce.com/document/stripe/setup-and-configuration/installation/)

# Installing the Stripe extension

			You can install the Stripe extension in various ways, but the simplest method is to install it directly from your WordPress site’s admin dashboard.

## Checking for the Stripe extension

[↑ Back to top](#doc-title)

Before trying to install the extension, check to see if it’s *already* installed. To do so:

1. Navigate to your WooCommerce site’s administrator dashboard.
2. Go to **Plugins > Installed Plugins**.
3. Check the list of plugins for “WooCommerce Stripe Gateway”.
- If a plugin with that name is installed, great! You already have our extension, and you can start using it by [connecting to your Stripe.com account](https://woocommerce.com/document/stripe/setup-and-configuration/connecting-to-stripe/).
- If it’s not installed, see the section below for instructions on how to install it.

![](https://woocommerce.com/wp-content/uploads/2023/11/Screenshot-2025-02-05-at-9.04.26 AM.png?strip=all&w=704)The Stripe extension when it’s installed on your site

## Installing the Stripe extension

[↑ Back to top](#doc-title)

If you’ve determined that the Stripe extension is *not* already installed on your site, you can install and activate it like so:

1. Go to **Plugins > Add New** in your WordPress dashboard.
2. Type “WooCommerce Stripe Gateway” into the search box.
3. Find the “WooCommerce Stripe Gateway” plugin by WooCommerce in the results.
4. Click **Install Now** to install the plugin.
5. Once it’s installed, the **Install Now** button will change to say **Activate**. Click that.

- ![](https://woocommerce.com/wp-content/uploads/2023/11/Installing-the-Stripe-plugin.png?w=648)Installing the Stripe extension
- ![](https://woocommerce.com/wp-content/uploads/2023/11/Activating-the-Stripe-plugin-after-install.png?w=651)Activating the Stripe extension after install

1. Go to **WooCommerce > Settings > Payments tab > Stripe** to get started.
2. From that page, you’ll need to [connect your Stripe account](https://woocommerce.com/document/stripe/setup-and-configuration/connecting-to-stripe/).

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## Settings Guide

**Source:** [https://woocommerce.com/document/stripe/setup-and-configuration/settings-guide/](https://woocommerce.com/document/stripe/setup-and-configuration/settings-guide/)

# Settings Guide

			After you’ve [connected to Stripe](https://woocommerce.com/document/stripe/setup-and-configuration/connecting-to-stripe/) and [have webhooks working](https://woocommerce.com/document/stripe/setup-and-configuration/stripe-webhooks/), you can begin using the Stripe extension. However, you may also want to adjust some of the settings in order to configure the plugin in a way that best suits your store.

This guide will walk you through the Stripe extension settings, which are shown under **WooCommerce > Settings > Payments > Stripe** in your WordPress dashboard. The page is broken down into five sections:

- [Payment Methods](#payment-methods)
- [General](#general)
- [Account details](#account-details)
- [Payments & transactions](#payments-and-transactions)
- [Advanced settings](#advanced-settings)

**NOTE:** Many settings that pertain to your Stripe account (e.g. [Radar rules](https://docs.stripe.com/radar/rules)) can only be changed in [the Stripe dashboard](https://dashboard.stripe.com/dashboard). Please consult Stripe’s docs for more information on configuring the settings in the dashboard.

## Payment Methods

[↑ Back to top](#doc-title)

The *Payment Methods* tab lists all available payment methods you can use on your site, including cards, [express checkouts](https://woocommerce.com/document/stripe/customer-experience/express-checkouts/), and [buy now pay later](https://woocommerce.com/document/stripe/setup-and-configuration/additional-payment-methods/) options.

To enable a payment method, simply check the box next to its name, scroll to the bottom, and click **Save Changes**.

![](https://woocommerce.com/wp-content/uploads/2025/05/Screenshot-taken-on-2025-05-01-at-18.42.15-UTC@2x.png?strip=all&w=704)

Enabling or disabling a payment method in this list will automatically turn it on or off in the Stripe dashboard as well. To see that, go to [Settings > Payments > Payment methods](https://dashboard.stripe.com/settings/payment_methods) in the Stripe dashboard and click the payment method configuration labeled 
```
WooCommerce Inc. configuration
```

.

![](https://woocommerce.com/wp-content/uploads/2025/05/Screenshot-taken-on-2025-05-01-at-18.45.48-UTC@2x.png?strip=all&w=704)

Similarly, turning a given payment method on or off via the Stripe dashboard will also turn it on or off in the Stripe plugin payment methods list.

However, there are some things to keep in mind:

- Although Apple Pay and Google Pay appear separately in Stripe, they are controlled together. Enabling one in the Stripe dashboard will enable *both* in the Stripe plugin.
- If you enable a method via Stripe, but your site doesn’t [meet the requirements](https://woocommerce.com/document/stripe/setup-and-configuration/additional-payment-methods/#requirements) for it, it will not work until the requirements are met.
- Although the Stripe dashboard shows many payment methods, our Stripe plugin can only support a subset of those. [Here’s the list](https://woocommerce.com/document/stripe/setup-and-configuration/additional-payment-methods/#which-apms) of what our plugin supports.

From the *Payment Methods* tab you can also [change the display order](https://woocommerce.com/document/stripe/setup-and-configuration/additional-payment-methods/#change-display-order) of the methods.

## General

[↑ Back to top](#doc-title)

This section controls if and how the Stripe payment option is presented to customers.

![](https://woocommerce.com/wp-content/uploads/2024/08/Screenshot-taken-on-2024-08-14-at-14.15.45-UTC@2x.png?w=980)

The **Enable Stripe** setting determines whether or not the Stripe extension payment methods are shown in checkout. What this setting does *not* do is disable the Stripe extension. To do that, you can [disable the plugin itself](https://wordpress.org/documentation/article/plugins-screen/#manage-plugins).

The **Enable test mode** box controls [test mode](https://woocommerce.com/document/stripe/customer-experience/testing/). Unless you’re testing payments, refunds, disputes, or other such processes, this should likely be disabled.

## Account details

[↑ Back to top](#doc-title)

This****section shows the status of your Stripe account as well as the status of the connection between that account and the Stripe extension.

![](https://woocommerce.com/wp-content/uploads/2024/08/Screenshot-taken-on-2026-05-13-at-16.34.04-UTC@2x.png?w=980)

Ideally, the *Payment* and *Payout* statuses should be “Enabled.” If they aren’t, then Stripe may have restricted your payments or payouts for some reason. You’ll need to consult [the Stripe dashboard](https://dashboard.stripe.com/account/status) for more information in such cases.

Similarly, the *Webhook* status should also say “Enabled.” If it does not, it means you either have not [connected to Stripe](https://woocommerce.com/document/stripe/setup-and-configuration/connecting-to-stripe/) at all yet, or you connected prior to version 8.6.1, and you still need to re-authenticate.

If *Sync* is “Disabled,” it means that your list of enabled and disabled payment methods will not automatically sync back and forth with the Stripe dashboard. There are several scenarios in which this could be the case:

- Your connection uses manually entered API keys instead of OAuth.
- Your connection uses the Stripe Marketplace App instead of OAuth.
- Your Stripe account does not have a supported [payment method configuration](https://dashboard.stripe.com/settings/payment_methods).
- API calls to Stripe failed, so we disabled sync to keep your store stable.

By clicking the **Configure connection** button, you can see the status of the connection between your Stripe account and the Stripe extension on your site.

![](https://woocommerce.com/wp-content/uploads/2024/08/Screenshot-taken-on-2026-05-13-at-15.18.00-UTC@2x.png?w=980)

If the Stripe extension is properly connected to your Stripe account, the *Account* status should be “Connected” and the *Webhooks* status should be “Configured.” If they say anything else (e.g. “Incomplete”), you may need to re-authenticate your connection.

Note the tabs in the pop: **Live** and **Test**. Using them, you can check the *Account* and *Webhooks* statuses for each mode. Because each mode is configured separately, it’s possible to be connected to live mode but not to test mode, or vice versa.

Lastly, if you’d like to disconnect the Stripe extension from your Stripe account, you can do so by clicking the three dots, and then **Disconnect**.

![](https://woocommerce.com/wp-content/uploads/2024/08/Screenshot-taken-on-2026-05-13-at-17.02.45-UTC@2x.png?strip=all&w=704)

## Payments & transactions

[↑ Back to top](#doc-title)

This section contains settings related to how transactions function on your site, and how they appear to customers in emails, receipts, and bank statements.

![](https://woocommerce.com/wp-content/uploads/2024/08/Screenshot-taken-on-2026-04-24-at-18.33.24-UTC@2x.png?strip=all&w=704)

**Enable saved payment methods**, if checked, allows your customers to securely save their payment information. This lets them check out much faster in the future.

Keep in mind that your site must be configured to [allow for account creation](https://woocommerce.com/document/configuring-woocommerce-settings/accounts-and-privacy/#guest-checkout-and-accounts) in order for this to work. Guest checkouts cannot save their payment information, since of course they do not have an account to save it to.

**NOTE:** The **Enable saved payment methods** setting does *not* need to be enabled to process subscriptions via [the Subscriptions extension](https://woocommerce.com/products/woocommerce-subscriptions/).

The **Enable saved iDEAL | Wero payments for repeat payments** setting allows you to control if customers can save their iDEAL | Wero payment methods for later purchases. (They are saved as SEPA Direct Debit tokens.) The **Enable saved Bancontact payments for repeat payments** setting does the same, but for Bancontact payments.

The **Issue an authorization on checkout, and capture later** setting, if checked, merely [places a hold on customers’ cards](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method) instead of automatically capturing the funds. This allows you to manually capture the charge at a later time, such as when you ship the order. We strongly suggest reading [this page](https://woocommerce.com/document/stripe/admin-experience/authorize-and-capture/) before enabling this setting.

The **Full bank statement** setting shows how transactions with your store will appear on customers’ bank statements or in their online banking systems. This is called a “descriptor”, and it can be changed [in the Stripe dashboard](https://dashboard.stripe.com/settings/update/public/support-details).

The **Add customer order number to the bank statement** setting can be used if you wish to also add the order number to the descriptor. Enabling this will also cause the **Shortened customer bank statement** setting to appear just below.

The **Shortened customer bank statement** setting shows the short form of your descriptor. Because descriptors are limited in length, and because the order number will take up some of that limit, this setting should show a shorter or abbreviated version of the full descriptor. This setting only applies to card and express checkout transactions, and is also managed [in the Stripe dashboard](https://dashboard.stripe.com/settings/update/public/support-details).

Lastly, the *Payments & transactions* section will show a preview of your full-length and shortened bank statement descriptors:

![](https://woocommerce.com/wp-content/uploads/2024/06/Screenshot-taken-on-2024-06-05-at-16.59.54-UTC@2x.png?w=980)

**NOTE:** Cash App Pay charges appear on customers’ bank statements with the 
```
CashApp*
```

 prefix and then the store name. This cannot be changed.

## Advanced settings

[↑ Back to top](#doc-title)

This section shows additional options that you shouldn’t need to change very often.

![](https://woocommerce.com/wp-content/uploads/2024/08/Screenshot-taken-on-2026-05-06-at-09.56.25-UTC@2x.png?strip=all&w=704)

**Debug mode**. If you enable the **Log error messages** setting, the Stripe extension will start logging all activity to [the WooCommerce logger](https://woocommerce.com/document/finding-php-error-logs/). This option should only be enabled if you’re [troubleshooting the Stripe extension](https://woocommerce.com/document/stripe/troubleshooting/).

**Enable Optimized Checkout Suite.** If enabled, the extension will use machine learning to decide the order in which payment methods are displayed to shoppers. (Starting with version 10.2.0, this setting is enabled by default for new merchants.) Enabling OCS also lets you use [the Adaptive Pricing feature](https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/adaptive-pricing/).

The **Layout** option controls how various payment methods are shown in the Optimized Checkout Suite. (This option is only shown if OCS is enabled.)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## Setting up webhooks

**Source:** [https://woocommerce.com/document/stripe/setup-and-configuration/stripe-webhooks/](https://woocommerce.com/document/stripe/setup-and-configuration/stripe-webhooks/)

# Setting up webhooks

			In order for the Stripe extension and Stripe’s systems to work together correctly, they must be able to “talk” back and forth. Our Stripe extension communicates to Stripe via [their API](https://docs.stripe.com/api), but Stripe communicates to the Stripe extension via webhooks.

This document covers how to ensure that your live mode and test mode webhooks are configured correctly.

## Verifying the webhook status

[↑ Back to top](#doc-title)

Since version 8.6.1 of the Stripe extension, webhooks are automatically set up when you [connect to Stripe](https://woocommerce.com/document/stripe/setup-and-configuration/connecting-to-stripe/). Thus, there is no need to configure webhooks separately.

If you are upgrading to 8.6.1 or later from an older version of the Stripe extension, you can reconfigure the webhooks [as detailed below](#reconfiguring).

You can verify that your webhooks are working like so:

1. Navigate to **WooCommerce > Settings > Payments > Stripe > Settings**.
2. In the *Account details* section, click the **Configure connection** button.
3. Verify in the **Live**tab that the webhook status says “Configured.”
4. Also verify in the **Test** tab that the test webhook status is “Configured.”

- ![](https://woocommerce.com/wp-content/uploads/2025/10/Screenshot-taken-on-2025-10-09-at-13.33.16-UTC@2x.png?w=980)Live webhook configured
- ![](https://woocommerce.com/wp-content/uploads/2025/10/Screenshot-taken-on-2025-10-09-at-13.33.52-UTC@2x.png?w=980)Test webhook also configured

If the statuses are both correct, then your webhooks are working.

You can also verify that the webhooks are being processed successfully in the *Account details* section.

![](https://woocommerce.com/wp-content/uploads/2024/08/Screenshot-taken-on-2024-08-08-at-19.43.24-UTC@2x.png?w=980)

## Reconfiguring webhooks

[↑ Back to top](#doc-title)

If the webhooks are ever accidentally deleted [from the Stripe dashboard](https://dashboard.stripe.com/webhooks), or if you’re upgrading to version 8.6.1 or later from an older version, you can recreate them like so:

1. Navigate to **WooCommerce > Settings > Payments > Stripe > Settings**.
2. In the *Account details* section, click the **Configure connection** button.
3. In the **Live** tab, click **Reconfigure webhooks**.
4. In the **Test** tab, click **Reconfigure webhooks**.

This will recreate the correct webhooks in your Stripe account and remove any old ones that were pointing to your site.

## Webhook endpoints

[↑ Back to top](#doc-title)

Note that our Stripe extension only uses webhook endpoints in the following format:

```
https://www.example.com/?wc-api=wc_stripe
```

Any other endpoints you see [in the Stripe dashboard](https://dashboard.stripe.com/workbench/webhooks) likely come from other payment gateways or third-party services that integrate with Stripe.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

