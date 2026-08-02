# Different Ways To Restrict Gift Cards

*Category from WooCommerce Smart Coupons documentation*

---

## Different ways to restrict gift cards

**Source:** [https://woocommerce.com/document/smart-coupons/different-ways-to-restrict-gift-cards/](https://woocommerce.com/document/smart-coupons/different-ways-to-restrict-gift-cards/)

# Different ways to restrict gift cards

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers, extending the core functionality of WooCommerce coupons.

This document explains the different ways a gift card can be restricted.

## Create gift cards for order status

[↑ Back to top](#doc-title)

Imagine you want to generate the gift card only when the order status has been completed. Then you can achieve this by navigating to your **WordPress Dashboard > WooCommerce > Settings > Smart Coupons** tab: “**Valid order status for auto-generating coupon**”. Add your valid order status on which you want the gift card to be generated and emailed to the customer.

![](https://woocommerce.com/wp-content/uploads/2023/10/smart-coupons-order-status.png?strip=all&w=704)

## Calculate the tax before or after applying the Gift Card

[↑ Back to top](#doc-title)

By default, the WooCommerce core coupons will be applied only to the cart subtotal, whereas the discount type ‘**Store Credit / Gift Certificate**‘ (which is added by Smart Coupons) will be applied to the order total (cart subtotal + tax + shipping). If you want to apply the store credit before applying tax, you can use the ‘Apply before tax’ setting. To enable this setting, you can follow [this article](https://woocommerce.com/document/smart-coupons/using-apply-before-tax/#section-1).

![](https://woocommerce.com/wp-content/uploads/2023/10/smart-coupons-apply-before-tax.png?strip=all&w=704)

## Disable Gift Cards from being used with other discount coupons

[↑ Back to top](#doc-title)

To create a gift card, you would have to follow the following documentation and its steps:

1. [Gift Card of any amount](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-any-amount/)
2. [Gift Card of variable but fixed amount](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-variable-but-a-fixed-amount/)
3. [Gift Card of a fixed amount](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-a-fixed-amount/)

When following the above steps, you would have created a coupon and assigned this coupon to the product. We call it the parent coupon that is being attached to the Gift Card Product. In that parent coupon, kindly navigate to the **Usage restriction** tab -> enable “**Individual Use only**” and save/update the coupon.

**(Note: This will only update the setting for the future generated Gift cards and not for the earlier Gift cards that were generated.)**

![](https://woocommerce.com/wp-content/uploads/2023/10/smart-coupons-individual-use-only-1.png?strip=all&w=704)

## Adding an expiration date to the Gift Card

[↑ Back to top](#doc-title)

To add an expiry date to the auto-generated Gift Card, you need to navigate to the parent coupon that is assigned to the product, and in the General tab, make sure you select the “**Valid for**” field and the appropriate drop down.

![](https://woocommerce.com/wp-content/uploads/2023/10/smart-coupons-valid-for-years.png?strip=all&w=704)

## Enable users to schedule sending Gift Cards

[↑ Back to top](#doc-title)

To allow users to schedule Gift Cards for Birthdays/Anniversaries or any special occasions, you need to enable the settings under **WordPress Dashboard > WooCommerce > Settings > Smart Coupons** tab: “**Allow schedule sending of coupons?**”

![](https://woocommerce.com/wp-content/uploads/2023/10/smart-coupons-setting-scheduled-coupons.png?strip=all&w=704)

## Conditions when Gift Cards can be used

[↑ Back to top](#doc-title)

You can limit the auto-generated Gift Card coupon to users based on the Minimum/Maximum spend amounts, Product and Product category restrictions, location, payment gateway, and product attributes. For this, you need to make sure you add the restrictions in the Usage restriction tab of the Parent coupon that has been assigned to the Gift Card Product.

![](https://woocommerce.com/wp-content/uploads/2023/10/smart-coupons-gift-card-restrictions.png?strip=all&w=704)

## Winding up

[↑ Back to top](#doc-title)

The above restrictions are examples of how a Gift Card or Gift Certificate product can be restricted based on your day-to-day life and would make life easier for store owners while limiting accessibility to customers.

[← WooCommerce Smart Coupons Documentation](https://woocommerce.com/document/smart-coupons/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis.
				![](https://woocommerce.com/wp-content/uploads/2012/07/Table_Rate_Shipping_icon-marketplace-160x160-2.png)

### Table Rate Shipping

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Advanced, flexible shipping. Define multiple shipping rates based on location, price, weight, shipping class or item count.

---

