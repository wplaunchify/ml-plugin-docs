# How To Display Available Coupons On Any Page Using Shortcode

*Category from WooCommerce Smart Coupons documentation*

---

## How to Display Available Coupons on Any Page (Using Shortcode)

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-display-available-coupons-on-any-page-using-shortcode/](https://woocommerce.com/document/smart-coupons/how-to-display-available-coupons-on-any-page-using-shortcode/)

# How to Display Available Coupons on Any Page (Using Shortcode)

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

This doc article explains how you can use a shortcode to display available/usable coupons on any page on your WooCommerce store.

By default, the Smart Coupons plugin displays available/usable coupons on the cart, checkout & My Account pages. But if you want to display those coupons on other pages, you can add the shortcode ‘
```
[wc_sc_available_coupons]
```

’ to the page content.

## Sample usage

[↑ Back to top](#doc-title)

The shortcode 
```
[wc_sc_available_coupons title="Available Coupons (click on a coupon to use it)"]
```

 is used on a page and here’s how it will look:

![](https://woocommerce.com/wp-content/uploads/2022/02/smart-coupons-styles-all.gif)

*Note: In the above screenshot, all predefined coupon styles are showing together. It’s only used to display the available type of coupon style. You can set only one coupon style at a time.*

## Category-specific coupons

[↑ Back to top](#doc-title)

As a store owner, you might have a separate page for different product categories. You may have separate discount coupons for different product categories. In this case, it’s a good strategy to display discount coupons applicable to the product category.

[Version 7.3.0](https://dzv365zjfbd8v.cloudfront.net/changelogs/woocommerce-smart-coupons/changelog.txt) introduces an option for displaying category-specific coupons.

### Syntax

[↑ Back to top](#doc-title)

```
[wc_sc_available_coupons categories="<comma-separated coupon category ids>"]
```

### Example

[↑ Back to top](#doc-title)

You are selling Hoodies for Men & Women from a separate page on your store. But you want to offer different discounts for Men & Women. Additionally, you want to display the applicable coupons for the product category on that page.

For this, create a coupon category **Hoodies**, and create sub-categories **Men** & **Women** under it.

![](https://woocommerce.com/wp-content/uploads/2024/02/coupon-category-in-smart-coupons.png?strip=all&w=704)

Now, create 2 separate coupons, one for Men (let’s say 
```
men10
```

) & another for Women (let’s say 
```
women20
```

). Set sub-category **Men** to coupon 
```
men10
```

 & **Women** to 
```
women20
```

. Set appropriate product categories under **Usage restrictions > Product categories** of each coupon.

You can now use the following shortcode on the page that is created for selling Hoodies for Men & Women.

```
[wc_sc_available_coupons categories="86,87"]
```

## Troubleshooting

[↑ Back to top](#doc-title)

If may happen that coupons may not get displayed using the shortcode. Here are the possible reasons why:

- No coupons are valid for the cart at that moment. You should check usage restrictions & usage limit of the coupons to confirm if it needs to be displayed.
- If the coupon is restricted to an email address, the user should be logged in with the same email address to see the coupon. If the user is a guest user then the coupon might be visible only on the checkout page once the user enters the billing email address.

[← WooCommerce Smart Coupons Documentation](https://woocommerce.com/document/smart-coupons/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

WooCommerce Subscriptions is a WooCommerce extension that lets customers subscribe to your products or...
				![](https://woocommerce.com/wp-content/uploads/2012/07/Table_Rate_Shipping_icon-marketplace-160x160-2.png)

### Table Rate Shipping

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Advanced, flexible shipping. Define multiple shipping rates based on location, price, weight, shipping class or item count.

---

