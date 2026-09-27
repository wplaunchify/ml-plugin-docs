# Track Woocommerce Cart Actions With Javascript

*Category from Kadence Custom Fonts documentation*

---

## How to Track WooCommerce Cart Actions with JavaScript

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/track-woocommerce-cart-actions-with-javascript/](https://www.kadencewp.com/help-center/docs/kadence-theme/track-woocommerce-cart-actions-with-javascript/)

Tracking customer interactions in your WooCommerce store can provide valuable insight into how shoppers engage with your products. Two of the most important actions to monitor are when a customer **adds an item** to the cart and when they **remove an item**. This guide will show you how to capture these events using **JavaScript**, so you can connect them to your analytics, trigger marketing automations, or run custom scripts based on user behavior.

Tracking Add To Cart Events

This script will add a listener for the WooCommerce’s *add_to_cart* event.  In this example, the script simply sends text to the console log.  You’ll want to replace that with your custom functionality.

```
jQuery( function( $ ) {
	$( document.body ).on( 'added_to_cart', function( event, fragments, cart_hash, button ) {
		// Add your custom script here
		console.log('Item added to cart');
	});
});
```

Tracking Remove From Cart Events

Similar to the above example, this script will add a listener for the WooCommerce’s *removed_from_cart* event.  You’ll also want to replace the console.log function with your own custom functionality.

```
jQuery( function( $ ) {
	$( document.body ).on( 'removed_from_cart', function( event, fragments, cart_hash, button ) {
		// Add your custom script here
		console.log('Item removed from cart');
    });
});
```

Conclusion

Tracking add-to-cart and remove-from-cart actions helps you understand how customers interact with your store. With these simple JavaScript events, you can capture key actions and use the data to improve your analytics tracking and marketing efforts.

See Also:

- [How to add scripts in header/footer](https://docs.nexcess.com/software/kadence/theme/add-scripts-in-header-footer/)
- [How to use Custom CSS and Scripts using Kadence](https://docs.nexcess.com/software/kadence/theme/add-custom-css-and-scripts-using-kadence/)
- [How to add a custom filter or function with Code Snippets](https://docs.nexcess.com/software/kadence/blocks/add-custom-filter-or-function-with-code-snippets/)

---

