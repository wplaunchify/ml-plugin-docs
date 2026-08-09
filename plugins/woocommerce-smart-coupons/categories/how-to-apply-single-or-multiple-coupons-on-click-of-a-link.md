# How To Apply Single Or Multiple Coupons On Click Of A Link

*Category from WooCommerce Smart Coupons documentation*

---

## ​​URL coupons – how to auto-apply promo coupon codes via a link

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-apply-single-or-multiple-coupons-on-click-of-a-link/](https://woocommerce.com/document/smart-coupons/how-to-apply-single-or-multiple-coupons-on-click-of-a-link/)

# ​​URL coupons – how to auto-apply promo coupon codes via a link

			Smart Coupons provides a powerful, “all-in-one” solution for gift cards, store credits, discount coupons and vouchers extending the core functionality of WooCommerce coupons.

This documentation explains how using the Smart Coupons plugin, you can add unique coupon codes to the URL. When the URL is used or clicked, the coupon(s) gets automatically applied and (optionally) adds products to the customer’s shopping cart, thus boosting sales via URL

You can also **add the coupon code to any custom URL on your site and allow the discount to get automatically applied upon clicking that URL**.

This feature is extremely useful as it eliminates the need for users to manually enter and apply coupon codes. Instead, they simply click on the provided discount link, making the process hassle-free and easy to share.

## Apply a single coupon via a link (Coupon URL)

[↑ Back to top](#doc-title)

1. Go to your WordPress admin panel. Under Marketing > Coupons, click on Add coupon. You can also modify your existing coupon.
2. Set the discount type, coupon amount, expiry date and time, set usage limit and restrictions and other settings as per your requirements. Publish / Update the coupon.
3. Under ‘**Coupon shareable link**’, you’ll find a button ‘**Click to copy**’. The coupon code will automatically be added to the URL.![](https://woocommerce.com/wp-content/uploads/2019/10/URL-Coupons.png?strip=all&w=704)
4. Click on the button to copy the discount link & share it via email, social media, deal sites, etc. You can also find the shareable coupon code link on the Coupons dashboard. [Here’s how](https://woocommerce.com/document/smart-coupons/how-to-get-a-shareable-link-of-a-coupon/)
5. Clicking on the link will activate the discount as the coupon gets auto-applied.

![](https://woocommerce.com/wp-content/uploads/2019/10/URL-link.png?w=980)

For example, if your website URL is [https://demo.storeapps.org/](https://demo.storeapps.org/), then your discount link with coupon code embedded to the URL will look like – 
```
https://demo.storeapps.org/coupon-code/free-gift/sc-page/shop
```

.

**Prettified URL:** 
```
https://demo.storeapps.org/free-gift/shop/
```

## Apply multiple coupons via a link (Coupon URL)

[↑ Back to top](#doc-title)

You can also add multiple coupon codes to the URL and apply multiple coupons via that single URL. Pass a comma-separated list of coupons in the link as shown – 
```
https://demo.storeapps.org/product/trendingwatch/coupon-code/specialsale10,holiday15,exclusivedisc5/sc-page/shop
```

**Prettified URL:**
```
https://demo.storeapps.org/product/trendingwatch/specialsale10,holiday15,exclusivedisc5/shop/
```

**Note** – If the URL contains more than five coupon codes, only the first five will be automatically applied. To apply more than five coupons via URL, the Smart Coupons plugin offers a hook for custom coding.

Here’s a sample code about how you can use the hook to increase the limit to 10. If you want to know about the best way to add a custom code to your website refer to this document: [Customizing WooCommerce: Best Practices](https://woocommerce.com/document/customizing-woocommerce-best-practices/)

```
/**
 * Function to modify the number of coupons allowed to be applied from a URL
 * 
 * @author StoreApps (https://www.storeapps.org/)
 *
 * @param integer $limit The limit.
 * @return integer
 */
function storeapps_wc_sc_max_url_coupons_limit( $limit = 5 ) {
    $limit = 10;
    return $limit;
}
function storeapps_handle_smart_coupons_hooks() {
    add_filter( 'wc_sc_max_url_coupons_limit', 'storeapps_wc_sc_max_url_coupons_limit', 11 );
}
add_action( 'wp_loaded', 'storeapps_handle_smart_coupons_hooks' );
```

## Redirect to a page after coupon is applied

[↑ Back to top](#doc-title)

Smart Coupons provides a URL param ‘sc-page’ for redirecting users to a page after the coupons get applied via URL. By default, the user gets redirected to the shop page. You can also redirect users to other pages after the coupon is applied

### WooCommerce predefined pages

[↑ Back to top](#doc-title)

You can redirect users to either ‘shop’, ‘cart’, ‘checkout’ or ‘my-account’ page.

If the target page is the checkout page, then the link will be like:

```
https://demo.storeapps.org/coupon-code/specialsale10/sc-page/checkout
```

**Prettified URL:** 
```
https://demo.storeapps.org/specialsale10/checkout/
```

### Page ID

[↑ Back to top](#doc-title)

You can use the numeric page ID of the target page to redirect users to that page.

If the page ID of the target page is 
```
123
```

 then the link will be like:

```
https://demo.storeapps.org/coupon-code/holiday15/sc-page/123
```

**Prettified URL:** 
```
https://demo.storeapps.org/holiday15/123/
```

### Page path

[↑ Back to top](#doc-title)

You can also use the path of the target page to redirect users to that landing page of your website.

If the target page is 
```
https://demo.storeapps.org/landing-page/
```

, then the link will be like:

```
https://demo.storeapps.org/coupon-code/exclusivedisc5/sc-page/landing-page
```

**Prettified URL:** 
```
https://demo.storeapps.org/exclusivedisc5/landing-page/
```

[← WooCommerce Smart Coupons Documentation](https://woocommerce.com/document/smart-coupons/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

WooCommerce Subscriptions is a WooCommerce extension that lets customers subscribe to your products or services and pay on a weekly,...
				![](https://woocommerce.com/wp-content/uploads/2012/07/Table_Rate_Shipping_icon-marketplace-160x160-2.png)

### Table Rate Shipping

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Advanced, flexible shipping. Define multiple shipping rates based on location, price, weight, shipping class or item count.

---

