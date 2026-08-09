# Using Apply Before Tax

*Category from WooCommerce Smart Coupons documentation*

---

## Using ‘Apply Before Tax’

**Source:** [https://woocommerce.com/document/smart-coupons/using-apply-before-tax/](https://woocommerce.com/document/smart-coupons/using-apply-before-tax/)

# Using ‘Apply Before Tax’

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

This doc article explains how you can use the ‘Apply before tax’ setting in Smart Coupons for store credit/gift certificate.

There are usually three components in the WooCommerce cart.

1. Cart subtotal
2. Tax
3. Shipping

By default, the WooCommerce core coupons will be applied only on the cart subtotal, whereas the discount type ‘**Store Credit / Gift Certificate**‘ (which is added by Smart Coupons) will be applied on the **order total (cart subtotal + tax + shipping)**. If you want to apply the store credit before applying tax, you can use the ‘**Apply before tax**’ setting.

## How to enable ‘Apply before tax’ setting

[↑ Back to top](#doc-title)

Go to **WooCommerce > Settings > Smart Coupons**.

Here two checkboxes would be visible under **Apply before tax**:

1. Deduct credit/gift before doing tax calculations
2. Store credit discounts inclusive of tax

### Deduct credit/gift before doing tax calculations

[↑ Back to top](#doc-title)

Enable ‘**Deduct credit/gift before doing tax calculations**’ option if you want the discount coupon to be applied **only on the cart subtotal**. The discount will not be applied to tax/shipping in this case.

![](https://woocommerce.com/wp-content/uploads/2021/03/Apply-before-tax-setting-1.png?strip=all&w=704)

### Store credit discounts inclusive of tax

[↑ Back to top](#doc-title)

This setting will be visible only when the setting ‘**Yes, I will enter prices inclusive of tax**‘ is **enabled** under **WooCommerce > Settings > Tax > Tax options > Prices entered with tax**.

Enable both settings, i.e ‘**Deduct credit/gift before doing tax calculations**’ and ‘**Store credit discounts inclusive of tax**’ if you want the discount coupon to be applied to ‘**cart subtotal + tax**’. The discount will not be applied to shipping in this case.

![](https://woocommerce.com/wp-content/uploads/2021/03/Apply-before-tax-setting-2.png?strip=all&w=704)

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

