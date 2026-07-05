# How To Change The Coupon Expiry Date Format Displayed On The Website

*Category from WooCommerce Smart Coupons documentation*

---

## How to change the coupon expiry date format displayed on the website

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-change-the-coupon-expiry-date-format-displayed-on-the-website/](https://woocommerce.com/document/smart-coupons/how-to-change-the-coupon-expiry-date-format-displayed-on-the-website/)

# How to change the coupon expiry date format displayed on the website

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

This doc article explains how to change the coupon expiry date format on your WooCommerce store.

Currently, Smart Coupons uses the date format of the website that is set under the menu **Settings > General > Date Format** as the display format of the expiry date.

In this guide, we’ll change the display format of the expiry date to the format other than the date format of the website that is set under the menu **Settings > General > Date Format**.

## Steps to change display format of expiry date

[↑ Back to top](#doc-title)

1. Open the directory of the child theme of your website.
2. Find a file named 
```
functions.php
```

.
3. Open the file in an editor.
4. Copy & paste the following code at the end of 
```
functions.php
```

 file.

```
/**
 * Change the display format of the expiry date of the coupon which is displayed on the website & set it as per the website's setting
 *
 * @author StoreApps.org 
 */
function storeapps_wc_sc_formatted_coupon_expiry_date( $expires_string = '', $args = array() ) {
    $expiry_date = ( ! empty( $args['expiry_date'] ) ) ? $args['expiry_date'] : 0;
    if ( $expiry_date instanceof WC_DateTime ) {
        $expiry_date = $expiry_date->getTimestamp();
    } elseif ( ! is_int( $expiry_date ) ) {
        $expiry_date = strtotime( $expiry_date );
    }
    if ( ! empty( $expiry_date ) ) {
        $expires_string = date_i18n( 'd-M-Y', $expiry_date );
    }
    return $expires_string;
}
add_filter( 'wc_sc_formatted_coupon_expiry_date', 'storeapps_wc_sc_formatted_coupon_expiry_date', 99, 2 );
```
5. Save the file.

That’s it.

### Date format – before applying the code

[↑ Back to top](#doc-title)

![Smart Coupons change display format of expiry date (after)](https://woocommerce.com/wp-content/uploads/2020/12/smart-coupons-change-display-format-of-expiry-date-after.png?strip=all&w=704)

### Date format – after applying the code

[↑ Back to top](#doc-title)

![Smart Coupons change display format of expiry date (before)](https://woocommerce.com/wp-content/uploads/2020/12/smart-coupons-change-display-format-of-expiry-date-before.png?strip=all&w=704)

[← WooCommerce Smart Coupons Documentation](https://woocommerce.com/document/smart-coupons/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis.
				![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to content/products and member discounts.

---

