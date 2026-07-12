# Customization

*Category from WooCommerce Stripe Gateway documentation*

---

## Customizing the Stripe extension

**Source:** [https://woocommerce.com/document/stripe/customization/](https://woocommerce.com/document/stripe/customization/)

# Customizing the Stripe extension

			While we strive to make the Stripe extension easy to use, we also want to ensure you can modify the extension to meet the unique needs of your store and customers.

If you’re looking to customize the Stripe extension, we’ve compiled common developer-level requests on this page.

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

## Common customization topics

[↑ Back to top](#doc-title)

We have individual pages that answer some of these common questions:

- [Can I change the style of the payment form?](https://woocommerce.com/document/stripe/customization/style-payment-form/)
- [How do I change the OCS payment methods list name?](https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/#changing-name)
- [Can I change the display order of payment methods?](https://woocommerce.com/document/stripe/setup-and-configuration/additional-payment-methods/#change-display-order)
- [How do I translate the payment form placeholder text?](https://woocommerce.com/document/stripe/customization/translate-placeholders/)
- [How do I change which payment icons are used?](https://woocommerce.com/document/stripe/customization/payment-icons/)
- [How can I send product data to Stripe as metadata?](https://woocommerce.com/document/stripe/customization/products-as-metadata/)
- [How can I clean up the database after changing my Stripe account?](https://woocommerce.com/document/stripe/customization/database-cleanup/)

## Customization resources

[↑ Back to top](#doc-title)

If you want to see all of the actions and filters that are available in the Stripe extension, you can find them listed [here](https://woocommerce.com/document/stripe/customization/hooks-and-filters/).

If you’re not familiar with how to customize a WordPress plugin using code, we suggest consulting resources such as [our developer blog](https://developer.woocommerce.com/) and [developer docs](https://developer.woocommerce.com/docs/).

You can also find the Stripe extension source code [on GitHub](https://github.com/woocommerce/woocommerce-gateway-stripe).

					
		
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

## How can I clean up the database after changing my Stripe account?

**Source:** [https://woocommerce.com/document/stripe/customization/database-cleanup/](https://woocommerce.com/document/stripe/customization/database-cleanup/)

# How can I clean up the database after changing my Stripe account?

			In order to properly link local data to the data in Stripe’s systems, our Stripe extension stores various identifiers (for customers, cards, and so on) in your database. However, that data is specific to a single Stripe account.

For that reason, if you’re replacing a previous Stripe account with a new one, a database cleanup may be required. If you do not perform this cleanup, purchases could fail.

Before proceeding with the cleanup, however, please [contact Stripe](https://support.stripe.com/) to check whether the existing data can be transferred over to your new account. If it can, this procedure may not be necessary.

**NOTE:**We are unable to provide support for customizations under [our Support Policy](https://woocommerce.com/support-policy/#customization). If you need assistance with custom code, we highly recommend [Codeable](https://www.codeable.io/partners/woocommerce/?ref=OaWImk) or a [Certified WooExpert](https://partners.woocommerce.com/English/marketplace/).

## Cleaning up the database on a single site

[↑ Voltar Para o Topo](#doc-title)

This is an example SQL query you might run on a single site installation of WordPress. Replace the 
```
wp_
```

 value with your site’s database table prefix.

```
DELETE FROM 
  `wp_usermeta` 
WHERE 
  meta_key IN (
    '_stripe_customer_id', '_stripe_source_id', 
    '_stripe_card_id'
  );
DELETE tokenmeta 
FROM 
  `wp_woocommerce_payment_tokenmeta` tokenmeta 
  INNER JOIN `wp_woocommerce_payment_tokens` ON `wp_woocommerce_payment_tokens`.`token_id` = tokenmeta.`payment_token_id` 
WHERE 
  `wp_woocommerce_payment_tokens`.`gateway_id` = 'stripe';
DELETE FROM 
  `wp_woocommerce_payment_tokens` 
WHERE 
  gateway_id = 'stripe';
```

## Cleaning up the database on a multisite

[↑ Voltar Para o Topo](#doc-title)

This is an example SQL query you might run on a single site installation of WordPress. Replace the 
```
wp_
```

 value with your site’s database table prefix.

This is an example SQL query you might run on a multisite installation of WordPress. Replace 
```
wp_999_
```

 with the site prefix (or 
```
wp_
```

 if cleaning up the database for the main site of the network, as it does not use a number in the prefix).

```
DELETE FROM 
  `wp_usermeta` 
WHERE 
  meta_key IN (
    '_stripe_customer_id', '_stripe_source_id', 
    '_stripe_card_id', 'wp_999__stripe_customer_id'
  );
DELETE tokenmeta 
FROM 
  `wp_999_woocommerce_payment_tokenmeta` tokenmeta 
  INNER JOIN `wp_999_woocommerce_payment_tokens` ON `wp_999_woocommerce_payment_tokens`.`token_id` = tokenmeta.`payment_token_id` 
WHERE 
  `wp_999_woocommerce_payment_tokens`.`gateway_id` = 'stripe';
DELETE FROM 
  `wp_999_woocommerce_payment_tokens` 
WHERE 
  gateway_id = 'stripe';
```

					
		
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

## How do I change which payment icons are used?

**Source:** [https://woocommerce.com/document/stripe/customization/payment-icons/](https://woocommerce.com/document/stripe/customization/payment-icons/)

# How do I change which payment icons are used?

			The Stripe extension [includes some assets](https://github.com/woocommerce/woocommerce-gateway-stripe/tree/develop/assets/images) to display payment method icons. When using the standard checkout experience, you can use the 
```
wc_stripe_payment_icons
```

 filter to use different icons than the ones included in the extension by default.

For example, to replace the existing Visa icon, you could use this snippet:

```
add_filter( 'wc_stripe_payment_icons', 'ah_change_stripe_icons' );

function ah_change_stripe_icons( $icons ) {
	// Use var_dump( $icons ); to show all possible icons.
	$icons['visa'] = '<img src="https://www.example.com/images/visa.svg" />';
	return $icons;
}
```

**NOTE:**We are unable to provide support for custom code under [our Support Policy](https://woocommerce.com/support-policy/#customization). If you need to customize a snippet further or extend its functionality, we highly recommend [Codeable](https://www.codeable.io/partners/woocommerce/?ref=OaWImk) or a [Certified WooExpert](https://partners.woocommerce.com/English/marketplace/).

					
		
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

## How can I send product details to Stripe as metadata?

**Source:** [https://woocommerce.com/document/stripe/customization/products-as-metadata/](https://woocommerce.com/document/stripe/customization/products-as-metadata/)

# How can I send product details to Stripe as metadata?

			When a customer places an order via the Stripe extension, you may want to send additional details to Stripe as metadata.

To do this, you can use the 
```
wc_stripe_intent_metadata
```

 filter via some custom PHP code in your theme’s 
```
functions.php
```

 file or a plugin like [Code Snippets](https://wordpress.org/plugins/code-snippets/).

Here’s an example snippet:

```
add_filter( 'wc_stripe_intent_metadata', 'add_my_custom_stripe_metadata', 10, 2 );

function add_my_custom_stripe_metadata( $metadata, $order, $prepared_source = null ) {

	// Add name, quantity, and price for each line item.
	$count = 1;
	foreach ( $order->get_items() as $item_id => $line_item ) {
		$product = $line_item->get_product();
		$product_name = $product->get_title();
		$item_quantity = $line_item->get_quantity();
		$item_total = $line_item->get_total();
		$metadata[ 'Line Item ' . $count ] = 'Product name: ' . $product_name . ' | Quantity: ' . $item_quantity . ' | Item total: ' . number_format( $item_total, 2 );
		$count += 1;
	}

	// Add whatever custom key/value pair you want. :)
	$metadata['my_custom_key'] = 'An example custom value.';

	return $metadata;
}
```

Here’s how the metadata from that snippet appears in the Stripe dashboard:

![](https://woocommerce.com/wp-content/uploads/2024/06/Screenshot-taken-on-2024-06-05-at-18.56.48-UTC@2x.png?w=980)

**NOTE:**We are unable to provide support for custom code under [our Support Policy](https://woocommerce.com/support-policy/#customization). If you need to customize a snippet further or extend its functionality, we highly recommend [Codeable](https://www.codeable.io/partners/woocommerce/?ref=OaWImk) or a [Certified WooExpert](https://partners.woocommerce.com/English/marketplace/).

					
		
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

## How can I change the style of the payment form?

**Source:** [https://woocommerce.com/document/stripe/customization/style-payment-form/](https://woocommerce.com/document/stripe/customization/style-payment-form/)

# How can I change the style of the payment form?

			The payment form that our Stripe extension generates and places on the checkout page is actually [hosted on a separate PCI-compliant server](https://woocommerce.com/document/stripe/troubleshooting/pci-compliance/). As such, applying styles to the payment form using [custom CSS](https://wordpress.org/documentation/article/css/) will not work as expected.

To modify the styling of the payment fields, you will need to insert some custom PHP code using your theme’s 
```
functions.php
```

 file or a plugin like [Code Snippets](https://wordpress.org/plugins/code-snippets/).

**NOTE:** We are unable to provide support for customizations under our [Support Policy](http://woocommerce.com/support-policy/). If you need to customize a snippet beyond what is shown on this page, we suggest [Codeable](https://codeable.io/?ref=z4Hnp) or a [Certified WooExpert](https://woocommerce.com/experts/).

## Clearing transients

[↑ Back to top](#doc-title)

Our Stripe extension uses [transients](https://developer.wordpress.org/apis/transients/) to cache the payment form styles. For that reason, if you make adjustments to the styling, you will need to clear those transients afterward in order to actually see your changes on the frontend.

You can force the transients to clear by executing the following PHP:

```
// Shortcode checkout
delete_transient( 'wc_stripe_appearance' );

// Block checkout
delete_transient( 'wc_stripe_blocks_appearance' );
```

You can do this using the Code Snippets plugin like so:

![](https://woocommerce.com/wp-content/uploads/2024/01/Screenshot-taken-on-2025-09-19-at-13.10.33-UTC@2x.png?strip=all&w=704)

## The Elements Appearance API

[↑ Back to top](#doc-title)

As noted above, the form fields shown by our Stripe extension are actually embedded from Stripe’s servers. You’ll need to use their [Elements Appearance API](https://docs.stripe.com/elements/appearance-api) to alter the styling of the fields. This API is implemented via the 
```
wc_stripe_upe_params
```

 filter.

There are three levels of customization available:

- **Themes**: Three basic, pre-built styles that may suit your website immediately.
- **Variables:** Allows you to control the appearance of many components at once.
- **Rules:** These provide complete control over every individual component.

Themes are the easiest to implement in a brief snippet, but they may not match the exact look and feel of your site. To do that, you will likely need to use rules, although doing so involves a higher degree of complexity.

**NOTE:** If you want to use a custom font, you’ll also need to whitelist the domain it’s hosted via the 
```
wc_stripe_upe_permitted_font_domains
```

 filter.

### Themes

[↑ Back to top](#doc-title)

Stripe’s [Elements Appearance API](https://docs.stripe.com/elements/appearance-api) provides three pre-built themes as shown near the top of that page: 
```
stripe
```

, 
```
night
```

, and 
```
flat
```

. These are good for quickly altering the appearance of the entire form.

For example, if your site has a darker background color, the 
```
night
```

 theme might work pretty well without further customization needed.

```
add_filter( 'wc_stripe_upe_params', function ( $stripe_params ) {

	// Affects block checkout
	$stripe_params['blocksAppearance'] = (object) [ 'theme' => 'night' ];

	// Affects shortcode checkout
	$stripe_params['appearance'] = (object) [ 'theme' => 'night'	];
	
	return $stripe_params;
} );
```

Here’s what that would look like:

![](https://woocommerce.com/wp-content/uploads/2024/01/Screenshot-taken-on-2024-12-09-at-18.40.38-UTC@2x.png?strip=all&w=704)

### Variables

[↑ Back to top](#doc-title)

Variables affect the appearance of many components at once.

As an example, consider the following snippet, which changes all fonts to monospace.

```
add_filter( 'wc_stripe_upe_params', function ( $stripe_params ) {

	// Block checkout
	$stripe_params['blocksAppearance'] = (object) [
		'variables' => (object) [
			'fontFamily' => 'monospace',
		],
	];

	// Shortcode checkout
	$stripe_params['appearance'] = (object) [
		'variables' => (object) [
			'fontFamily' => 'monospace',
		],
	];

	return $stripe_params;
} );
```

The result is as you’d expect:

![](https://woocommerce.com/wp-content/uploads/2024/01/Screenshot-taken-on-2024-12-09-at-18.43.28-UTC@2x.png?strip=all&w=704)

### Rules

[↑ Back to top](#doc-title)

The rules method is very similar to CSS, in that you need to assign [properties](https://docs.stripe.com/elements/appearance-api#supported-css-properties) to certain selectors (form components, in this case) to achieve the desired outcome. This allows for very granular customization.

Once you have determined which component you want to modify, you can use the following snippet as a template for your own code. Simply replace 
```
COMPONENT
```

, 
```
PROPERTY
```

, and 
```
VALUE
```

 with your desired modifications.

```
add_filter( 'wc_stripe_upe_params', function ( $stripe_params ) {
	$stripe_params['blocksAppearance'] = (object) [
		'rules' => (object) [
			'.COMPONENT' => (object) [
				'PROPERTY' => 'VALUE',
			]
		],
	];
	return $stripe_params;
} );
```

For example, this snippet changes the color and weight of the label fonts:

```
add_filter( 'wc_stripe_upe_params', function ( $stripe_params ) {
	
	// Block checkout only
	$stripe_params['blocksAppearance'] = (object) [
		'rules' => (object) [
			'.Label' => (object) [
				'fontWeight' => 'bold',
				'color' => 'blue'
			]
		],
	];
	
	return $stripe_params;
} );
```

The result is like so:

![](https://woocommerce.com/wp-content/uploads/2024/01/Screenshot-taken-on-2024-12-09-at-18.50.09-UTC@2x.png?strip=all&w=704)

You can expand on that by using the states, pseudo-classes, and pseudo-elements shown [in Stripe’s documentation](https://docs.stripe.com/elements/appearance-api#rules). They also have a list of [available properties](https://docs.stripe.com/elements/appearance-api#supported-css-properties).

For example, to change the border of an invalid input, you could use this:

```
add_filter( 'wc_stripe_upe_params', function ( $stripe_params ) {
	$stripe_params['blocksAppearance'] = (object) [
		'rules' => (object) [
			'.Input--invalid' => (object) [
				'border' => 'thick double',			]
		],
	];
	return $stripe_params;
} );
```

The result being:

![](https://woocommerce.com/wp-content/uploads/2024/01/Screenshot-taken-on-2024-12-09-at-18.54.45-UTC@2x.png?strip=all&w=704)

### Other options

[↑ Back to top](#doc-title)

There are two additional options you can set that affect the behavior of the form fields: 
```
labels
```

 and 
```
disableAnimations
```

.

- ```
labels
```

: either 
```
above
```

 or 
```
floating
```

- ```
above
```

 shows the field labels (e.g. “Card number”) above the field
- ```
floating
```

 shows the field labels inside the field itself
- ```
disableAnimations
```

: either 
```
true
```

 or 
```
false
```

- ```
false
```

 does exactly what it sounds like: turns off instances of animated movement in the payment form.

---

## How do I translate the payment form placeholder text?

**Source:** [https://woocommerce.com/document/stripe/customization/translate-placeholders/](https://woocommerce.com/document/stripe/customization/translate-placeholders/)

# How do I translate the payment form placeholder text?

			The Stripe extension payment form has placeholder values that are automatically translated by Stripe. By default, the language used is based on the visitor’s browser locale.

![](https://woocommerce.com/wp-content/uploads/2023/11/Screenshot-taken-on-2024-08-12-at-15.01.57-UTC-1.png?w=980)The payment form translated into German.

These placeholders cannot be translated via [the usual methods](https://woocommerce.com/document/woocommerce-localization/) because the form is loaded in an 
```
iframe
```

.

					
		
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

