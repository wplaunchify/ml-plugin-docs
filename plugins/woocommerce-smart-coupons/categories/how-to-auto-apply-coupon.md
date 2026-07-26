# How To Auto Apply Coupon

*Category from WooCommerce Smart Coupons documentation*

---

## How to auto apply coupons

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-auto-apply-coupon/](https://woocommerce.com/document/smart-coupons/how-to-auto-apply-coupon/)

# How to auto apply coupons

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons and vouchers extending the core functionality of WooCommerce coupons.

This documentation explains how to set up auto apply coupons using the Smart Coupons plugin, eliminating the need for users to enter or copy-paste coupon codes!

Auto apply coupons let you automatically apply a coupon for users, no code entry required. It’s perfect for seasonal sales, special events, loyal customers, or any promotion where you want a smooth checkout experience.

## Turn on auto apply feature

[↑ Back to top](#doc-title)

1. Go to **WooCommerce > Settings > Smart Coupons**
2. Find **Auto apply coupons**.
3. By default, it’ll be enabled. But if it’s not & you want this feature on your store, **enable Auto apply coupons**
4. **Save** the setting. That’s it.

![](https://woocommerce.com/wp-content/uploads/2020/07/Auto-Apply-1.png?strip=all&w=704)

**Note:***If this setting is not available, make sure you’re using the latest version of the Smart Coupons plugin.*

## Steps to create an auto apply coupons

[↑ Back to top](#doc-title)

1. Go to **Marketing > Coupons > Add coupon** (or edit an existing one).
2. Set the discount type, coupon amount, expiry date and time, and other details.
3. Enable the **Auto apply?** option.
4. Add any restrictions (products, user roles, payment methods, etc.) for your auto apply coupon.
5. **Publish/Update** the coupon.

That’s it.

![](https://woocommerce.com/wp-content/uploads/2020/07/Auto-apply-setting.png?w=980)

### Important notes for auto apply coupons

[↑ Back to top](#doc-title)

1. The auto apply feature will trigger only when there’s a product in the cart.
2. Smart Coupons will check the validity and **all the restrictions and limits** set for the coupons before auto applying them.
For example – If you restrict a coupon to **“Customer”** user role and **“Stripe”** payment gateway, the plugin will first verify whether these restrictions are met and then apply the coupon.
3. By default, **up to 5 coupons** can be auto applied at a time, even if more coupons have the **Auto apply?** option enabled. If required, you can extend this limit using the following steps:
1. **Open** your website’s **database**.
2. Go to table ‘**{prefix}options**‘ (e.g. wp_options).
3. Search for a record having option_name like ‘**wc_sc_max_auto_apply_coupons_limit**‘
4. If you find it, set its corresponding option_value as the number of auto apply coupons allowed to be applied.
5. If you don’t find it, insert a record in the same table with **option_name** as ‘**wc_sc_max_auto_apply_coupons_limit**‘ and **option_value** as the **number of auto apply coupons allowed** to be applied. That’s it.
4. Your users can remove any auto applied coupon if they wish to. But if you don’t want them to remove the auto applied coupons, there are 2 methods. You can choose any one method that you’re comfortable with:
1. **Using a custom snippet**: Add the following code snippet to your website:

```
add_filter('wc_sc_is_auto_apply_coupon_removable', function(){ return 'no'; });
```

To safely add any code snippets to your website, you can follow the documentation [here](https://woocommerce.com/posts/properly-add-woocommerce-custom-code/).
2. **Making changes in the database**: Follow these steps:
1. **Open** your website’s **database**.
2. Go to table ‘**{prefix}options**‘ (e.g. wp_options).
3. Search for a record having **option_name** like ‘**wc_sc_auto_apply_coupon_removable**‘
4. If you find it, set its corresponding **option_value** as ‘**no**‘.
5. If you don’t find it, insert a record in the same table with **option_name** as ‘**wc_sc_auto_apply_coupon_removable**‘ and **option_value** as ‘**no**‘. That’s it.
5. You can [bulk generate coupons](https://woocommerce.com/document/smart-coupons/how-to-bulk-generate-coupons/) with the auto apply feature.
6. Auto apply feature works with subscription coupons as well.

### What can’t auto apply

1. Gift cards and store credits **cannot** be auto applied.
2. Auto apply will not be enabled for coupons that are linked to a product. This means that when you issue any coupon with a product purchase, that coupon will need to be manually applied by the users on their next purchase.

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

