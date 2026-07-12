# Troubleshooting

*Category from WooCommerce Stripe Gateway documentation*

---

## Troubleshooting the Stripe extension

**Source:** [https://woocommerce.com/document/stripe/troubleshooting/](https://woocommerce.com/document/stripe/troubleshooting/)

# Troubleshooting the Stripe extension

			After the Stripe extension is [set up and configured](https://woocommerce.com/document/stripe/setup-and-configuration/), customers will be able to use it to complete purchases on your site.

Once you begin accepting purchases, you may have additional questions or run into issues related to the Stripe extension. We’ve collected some of the most common issues here.

**Notes:**

We recommend enabling **Log error messages** in the extension’s [Advanced settings](https://woocommerce.com/document/stripe/setup-and-configuration/settings-guide/#advanced-settings) before you start troubleshooting. This will allow errors to be logged while you perform tests. Many issues can be identified either by checking the Stripe logs after an issue has occurred, or reviewing the in-browser JavaScript console for errors during checkout.

## Common issues

[↑ Back to top](#doc-title)

- [Why was a charge successful despite an AVS or CVC mismatch?](https://woocommerce.com/document/stripe/troubleshooting/avs-or-cvc-mismatch/)
- [Is the Stripe extension PCI compliant?](https://woocommerce.com/document/stripe/troubleshooting/pci-compliance/)
- [What version of the Stripe API does the Stripe extension use?](https://woocommerce.com/document/stripe/troubleshooting/api-version/)
- [Why do some customers get an error requesting they enable JavaScript?](https://woocommerce.com/document/stripe/troubleshooting/enable-javascript-error/)
- [Why aren’t Stripe payment methods showing at checkout?](https://woocommerce.com/document/stripe/troubleshooting/stripe-not-showing-at-checkout/)
- [Why are payments failing?](https://woocommerce.com/document/stripe/troubleshooting/understanding-failed-payments/)
- [Why aren’t the credit card fields showing or responding/ why does the checkout page just keep spinning without loading?](https://woocommerce.com/document/stripe/troubleshooting/checkout-not-loading/)
- [How do I prevent and respond to card testing attacks?](https://woocommerce.com/document/how-do-i-prevent-and-respond-to-card-testing-attacks/)

## Stripe API outages

[↑ Back to top](#doc-title)

Sometimes your store may be unable to reach the Stripe API, perhaps due to a Stripe outage or a network glitch. When this happens, you’ll see a notice at the top of your WordPress dashboard letting you know the connection to Stripe is unavailable.

There’s nothing you need to do when you see the notice. The situation almost always resolves on its own within a few minutes, and the notice will automatically be hidden once your site can reach the Stripe API again.

If the notice is displayed for an extended time, that could indicate that [Stripe is having a major outage](https://status.stripe.com/), or that your site’s hosting provider is having network issues.

## Reviewing Stripe Logs

[↑ Back to top](#doc-title)

Often troubleshooting an issue with Stripe payments means reviewing the Stripe logs. With [logging enabled](https://woocommerce.com/document/stripe/setup-and-configuration/settings-guide/#advanced-settings), you’ll find Stripe logs in [the WooCommerce logger](https://woocommerce.com/document/finding-php-error-logs/).

When tracking an issue with a specific order, often the best method is to note the order number and search for that in the log using Cmd+f on Mac, or Ctrl+f on Windows.

In a typical logged card payment attempt you will see the following:

- The WooCommerce order number
- The charge ID (starts with 
```
ch_
```

)
- The payment intent (starts with 
```
pi_
```

)
- The customer ID (starts with 
```
cus_
```

)
- The source ID (starts with 
```
src_
```

)
- The decline reason (if payment was declined)

Stripe has [more details of the error messages](https://href.li/?https://stripe.com/docs/error-codes) you may find in the logs. If you need assistance interpreting logged issues, please [contact support](https://woocommerce.com/my-account/create-a-ticket/).

If you have questions not covered in our documentation, please [contact support](https://woocommerce.com/my-account/create-a-ticket/). Our amazing Happiness Engineers are standing by and ready to answer any questions about the Stripe extension.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.
				![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis.

---

## What version of the Stripe API does the Stripe extension use?

**Source:** [https://woocommerce.com/document/stripe/troubleshooting/api-version/](https://woocommerce.com/document/stripe/troubleshooting/api-version/)

# What version of the Stripe API does the Stripe extension use?

			We try to use the latest version possible, and we’ll update it whenever we can. You can find the version we’re using in the latest release by checking [this code](https://github.com/search?q=repo%3Awoocommerce%2Fwoocommerce-gateway-stripe%20%2Fconst%20STRIPE_API_VERSION%2F&type=code).

**NOTE:** You can generally [update the API version](https://docs.stripe.com/upgrades#perform-the-upgrade) within the Stripe dashboard without affecting the Stripe extension.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.
				![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis.

---

## Why was a charge successful despite an AVS or CVC mismatch?

**Source:** [https://woocommerce.com/document/stripe/troubleshooting/avs-or-cvc-mismatch/](https://woocommerce.com/document/stripe/troubleshooting/avs-or-cvc-mismatch/)

# Why was a charge successful despite an AVS or CVC mismatch?

			The bare minimum of information required to approve a card payment is only:

- The card number, and…
- The card expiration date.

This means that a card payment may be successful even if other information is missing or incorrect. Some cases where this may occur are:

- An [address verification service](https://stripe.com/resources/more/what-is-address-verification-service) (AVS) mismatch. This can occur if the address that the customer entered during checkout does not match the address that the card issuer has on file for the card that the customer used.
- A [card verification code](https://docs.stripe.com/disputes/prevention/verification) (CVC) failure. This happens if the customer enters the wrong 3 or 4-digit code usually found on the back of the card they used during checkout.

If a payment is successful despite one or both of those checks failing, it means that *the customer’s bank approved the charge despite the invalid or missing information*.

You can [modify the Radar rules](https://docs.stripe.com/radar/rules#traditional-bank-checks) on your Stripe account to stop such payments from being processed, even if they might otherwise have been approved by the bank.

Please see [the Stripe documentation](https://support.stripe.com/questions/charge-succeeded-despite-cvc-or-zip-check-mismatch) for more details about this scenario.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.
				![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis.

---

## Why do some customers get an error to enable JavaScript?

**Source:** [https://woocommerce.com/document/stripe/troubleshooting/enable-javascript-error/](https://woocommerce.com/document/stripe/troubleshooting/enable-javascript-error/)

# Why do some customers get an error to enable JavaScript?

			JavaScript is a programming language that allows websites to be dynamically rendered and updated. It’s a vital part of the look and functionality of a WooCommerce site.

Our Stripe extension uses JavaScript to display important parts of the checkout flow to customers, such as payment form fields. If a customer sees an error requesting that they enable JavaScript, it’s likely a result of:

- JavaScript errors occurring on the checkout page, or…
- JavaScript files failing to load on the checkout page

## What can cause these issues?

[↑ Back to top](#doc-title)

The most common reasons for JavaScript errors are:

- An optimization plugin is preventing the JavaScript files from loading properly
- The active theme is missing calls to 
```
wp_head()
```

 and/or 
```
wp_footer()
```
- The active theme is using old, overridden template files
- You can read more about fixing outdated template files [here](https://github.com/woocommerce/woocommerce/blob/trunk/docs/theme-development/fixing-outdated-woocommerce-templates.md)
- The active theme is loading headers and/or footers in a non-standard way. 
- WooCommerce uses the 
```
get_header
```

 action inside of 
```
get_header()
```

 to initialize the checkout and load scripts. If your current theme is *not* utilizing 
```
get_header()
```

, you must either:
- Switch to use 
```
get_header()
```

, or…
- Trigger the 
```
get_header
```

 action manually using 
```
do_action( ‘get_header' );
```

 in your custom header loader.

If you’d like to determine what is causing the JavaScript files to not load properly on your site, you will want to perform a [conflict test](https://woocommerce.com/document/how-to-test-for-conflicts/). You can read more about plugin and theme conflicts in our [Self-Service Guide](https://woocommerce.com/document/woocommerce-self-service-guide/).

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.
				![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis.

---

## Is the Stripe extension PCI compliant?

**Source:** [https://woocommerce.com/document/stripe/troubleshooting/pci-compliance/](https://woocommerce.com/document/stripe/troubleshooting/pci-compliance/)

# Is the Stripe extension PCI compliant?

			Our Stripe extension collects card data using [Stripe Elements](https://docs.stripe.com/payments/elements), which embeds a Stripe-hosted interface on your site via an 
```
iframe
```

. While it may *look like* a customer is entering their card details directly into your site, that data is actually collected by an interface hosted on Stripe’s servers.

This means that Stripe (certified as a [Level 1 Service Provider](https://usa.visa.com/splisting/splistinglearnmore.html)) is the only entity that handles card data. Your site never stores, processes, or transmits it.

Most merchants using the Stripe extension can validate their PCI compliance via [Self-Assessment Questionnaire (SAQ) A](https://www.pcisecuritystandards.org/faq/articles/Frequently_Asked_Question/what-is-a-pci-dss-self-assessment-questionnaire/). However, depending on factors (like your [PCI level](https://stripe.com/guides/pci-compliance#1-know-your-pci-level)), Stripe may require a different SAQ type or ask that your SAQ be signed by a PCI Qualified Security Assessor ([QSA](https://www.pcisecuritystandards.org/assessors_and_solutions/qualified_security_assessors)).

To confirm which validation process applies to your account, [contact Stripe](https://support.stripe.com/).

**NOTE:**Using our Stripe extension reduces the burden of PCI compliance, but merchants are still responsible for other PCI DSS requirements, like [regular vulnerability scans](https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Supporting%20Document/PCI%20SSC%20ASV%20Resource%20Guide.pdf) from an [Approved Scanning Vendor (ASV)](https://www.pcisecuritystandards.org/assessors_and_solutions/approved_scanning_vendors) and [maintaining good security hygiene](https://developer.woocommerce.com/docs/best-practices/security/security-best-practices/) to protect your site and your customers’ data.

For further reading:

- Stripe’s [PCI Compliance Guide](https://stripe.com/guides/pci-compliance)
- Stripe’s [Security Guide](https://docs.stripe.com/security)
- The WooCommerce [PCI Compliance Guide](https://woocommerce.com/document/pci-dss-compliance-and-woocommerce/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.
				![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis.

---

## Why aren’t Stripe payment methods showing at checkout?

**Source:** [https://woocommerce.com/document/stripe/troubleshooting/stripe-not-showing-at-checkout/](https://woocommerce.com/document/stripe/troubleshooting/stripe-not-showing-at-checkout/)

# Why aren’t Stripe payment methods showing at checkout?

			In some cases, Stripe payment methods won’t display at checkout. This is most commonly caused by theme compatibility issues, but can also result from plugin conflicts or site misconfiguration.

## What can cause this issue?

[↑ Back to top](#doc-title)

If you see this happening on your site, we suggest checking the following:

- The checkout form caches the payment methods you have enabled. This cache refreshes every 10 minutes. If you need to manually clear the cache, you can:
- Refresh the **WooCommerce > Settings > Payments > Stripe > Payment Methods** page, or…
- Clear/delete [these two transients](https://github.com/search?q=repo%3Awoocommerce%2Fwoocommerce-gateway-stripe+%2Fwcstripe_%28test%7Clive%29_payment_method_configuration_cache%2F&type=code).
- Review the [Templates section of your site’s System Status Report](https://woocommerce.com/document/understanding-the-woocommerce-system-status-report/#templates) to ensure none of the checkout related templates coming from your theme are outdated.
- Make sure that the site has a working SSL certificate in live mode, or the [Force SSL setting](https://woocommerce.com/document/ssl-and-https/#woocommerce-force-ssl-setting) is enabled (in **WooCommerce > Settings > Advanced**.) The checkout URLs should point to 
```
https
```

. **we highly recommend** running your entire store with 
```
https://
```

 — not just the checkout page.
- After enabling logging in the [Advanced Settings](https://woocommerce.com/document/stripe/setup-and-configuration/settings-guide/#advanced-settings), visit the checkout page, then check your site’s Stripe [logs](https://woocommerce.com/document/finding-php-error-logs/) for any errors.

If none of the above steps reveal the source of the issue, a [conflict test](https://woocommerce.com/document/how-to-test-for-conflicts/) can reveal any conflicting plugins which could be causing the issue.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.
				![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis.

---

