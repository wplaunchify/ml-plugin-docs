# How To Auto Generate Coupons Using Shortcode

*Category from WooCommerce Smart Coupons documentation*

---

## How to auto-generate coupons (using shortcode)

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-auto-generate-coupons-using-shortcode/](https://woocommerce.com/document/smart-coupons/how-to-auto-generate-coupons-using-shortcode/)

# How to auto-generate coupons (using shortcode)

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

This doc article explains how you can use Smart Coupons shortcode to either display a coupon or auto-generate & display a coupon for logged in users.

Smart Coupons shortcodes have many features from ‘showing a coupon’ to ‘automatically creating and/or showing a coupon for the current user’.

Smart Coupons shortcode won’t work if it is embedded on a page or (custom) post and a guest user is accessing it. **Shortcode will only work for registered and logged in users**.

In order to add a coupon to a page or a post:

1. Go to your WordPress Admin panel. Click on Pages or Posts and click on Add New.
2. Go to the visual editor (**classic editor**), select the coupon icon.
**Note**: Coupon shortcode button is currently not available in Gutenberg editor.![](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-sc-shortcode-generator-icon.png?strip=all&w=704)
3. In the pop-up, type the coupon code or select one from the search result. Then select ‘**Insert Shortcode**’.
4. In the editor, you’ll now see 
```
[smart_coupons]
```

 with a few attributes added.![](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-sc-shortocde-generator-preview.png?strip=all&w=704)

Within the shortcode, several other attributes can be added, most of them correspond with the settings you would normally find when creating a coupon. All of them follow the following order: 
```
attribute="value"
```

. For example, 
```
coupon_amount="20"
```

. These extra attributes are handy if you do not want to create the coupon beforehand.

- ```
coupon_code
```

: if this attribute is set, the plugin will look for the coupon in your store. If found, it’ll simply display it. If not found, it’ll create a new coupon with the provided coupon code. When it tries to create a new coupon, it’ll need a coupon amount and discount type. If an amount is not provided, it’ll create a new coupon with zero amount. If the discount type is not provided, it’ll set the discount type to 
```
smart_coupon
```

 which is nothing but a store credit.
- ```
coupon_style
```

. the styling of the coupon.
- ```
discount_type
```

. default: ‘smart_coupon’
- ```
coupon_amount
```

. the amount of the coupon.
- ```
individual_use
```

. default: ‘no’
- ```
product_ids
```

.
- ```
exclude_product_ids
```

.
- ```
usage_limit
```

.
- ```
usage_limit_per_user
```

.
- ```
limit_usage_to_x_items
```

.
- ```
expiry_date
```

.
- ```
apply_before_tax
```

. default: ‘no’
- ```
free_shipping
```

. default: ‘no’
- ```
product_categories
```

.
- ```
exclude_product_categories
```

.
- ```
minimum_amount
```

.
- ```
maximum_amount
```

.
- ```
exclude_sale_items
```

. default: ‘no’
- ```
auto_generate
```

 default: ‘no’
- ```
coupon_prefix
```

.
- ```
coupon_suffix
```

.
- ```
customer_email
```

.
- ```
disable_email
```

. default: ‘no’
- ```
is_clickable
```

: default: ‘no’. Set to ‘yes’ if you want the coupon to be clickable.
- ```
is_email
```

: default: ‘no’. Set to ‘yes’ if you’re using the shortcode is the part of email content.

## Generating coupon codes

[↑ Back to top](#doc-title)

### Case 1: Generate a unique code for each logged-in user

[↑ Back to top](#doc-title)

Here, you want your registered customer to see a new unique code for coupon / credit, which will be used by this customer only.

- **For credit**: you can enter the following code in the editor of the page or post: **[smart_coupons coupon_amount="12" coupon_style="dashed green medium"]**. This will create a new store credit having amount 12 and will display the code with style. 
**Important**: Above code will keep creating a new store credit on each refresh of that page or post in which it is included.
- **For coupon**: first, create a coupon and make sure that ‘**Auto Generate**’ is **enabled**. Then, go to the page or post and add the coupon with the shortcode. It should look like this: **[smart_coupons coupon_code="50_percent_cart" coupon_style="dashed red medium"]**

### Case 2: Display the same coupon code for all logged-in users

[↑ Back to top](#doc-title)

Here, you want all your registered users to see the same coupon code and it should not be valid for a guest user or visitor. By default, limiting coupons to registered users only is not an option, but it is possible with Smart Coupons.

By adding a shortcode, email restrictions will be added to the coupon automatically and they will only be available for logged-in users.

- **For credit**: not applicable, credit can only be used for unique users.
- **For coupon**: first, create a coupon and make sure that ‘**Auto Generate**’ is **disabled**. Then, go to the page or post and add the coupon with the shortcode.

[← WooCommerce Smart Coupons Documentation](https://woocommerce.com/document/smart-coupons/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis.
				![](https://woocommerce.com/wp-content/uploads/2015/03/Conditional_Shipping_Payments_icon-marketplace-160x160-1.png)

### Conditional Shipping and Payments

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Use conditional logic to restrict the shipping and payment options available on your store.

---

