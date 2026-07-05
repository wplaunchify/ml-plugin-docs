# How To Enable And Customize Coupon Banners

*Category from WooCommerce Smart Coupons documentation*

---

## How to enable and customize coupon banners

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-enable-and-customize-coupon-banners/](https://woocommerce.com/document/smart-coupons/how-to-enable-and-customize-coupon-banners/)

# How to enable and customize coupon banners

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers, extending the core functionality of WooCommerce coupons.

This doc article shows how to change and override coupon banners to show up on your website more precisely the way you need them.

## Enable coupon banners

[↑ Back to top](#doc-title)

1. Navigate to **WordPress Dashboard > WooCommerce > Settings > Smart Coupons tab > Display Coupons tab**.
2. In the “**Enable store notice for the coupon**” field, search and select the coupon to show as a coupon banner.
3. In the “**Select style for notice**” option, select the banner design to show on the website.
4. Save the changes.

![](https://woocommerce.com/wp-content/uploads/2025/02/smart-coupons-enable-coupon-banner.png?strip=all&w=704)

## Customize coupon banners

[↑ Back to top](#doc-title)

1. Navigate to the file path – 
```
wp-content/plugins/woocommerce-smart-coupons/templates/store-notice-design
```

.
2. Select the template of the coupon banner to modify. | Banner style | Template file |
| --- | --- |
|  | balloon.php |
|  | gift-box.php |
|  | christmas.php |
|  | notification.php |
3. Once you have selected the coupon banner template, copy the file and place it in 
```
/wp-content/themes/{child-theme}/woocommerce/store-notice-design
```

.
4. If you can’t find any of the above-mentioned directories or folders, you can create them.
5. You can now edit this file using any code file editor and do your customization.
6. Make sure to update the file on the server or hosting after you’ve finished editing.

That’s it!

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

