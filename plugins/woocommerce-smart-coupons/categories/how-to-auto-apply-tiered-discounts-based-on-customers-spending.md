# How To Auto Apply Tiered Discounts Based On Customers Spending

*Category from WooCommerce Smart Coupons documentation*

---

## How to auto apply tiered discounts based on customer’s spending

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-auto-apply-tiered-discounts-based-on-customers-spending/](https://woocommerce.com/document/smart-coupons/how-to-auto-apply-tiered-discounts-based-on-customers-spending/)

# How to auto apply tiered discounts based on customer’s spending

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers, extending the core functionality of WooCommerce coupons.

This document provides a step-by-step guide on how to auto apply tiered discounts based on customer’s spending within your WooCommerce store.

## Steps to configure

[↑ Back to top](#doc-title)

### 1. Create three coupons

[↑ Back to top](#doc-title)

To begin, you’ll need to create the three coupons with specific discount values and settings:

1. **Navigate to your WordPress Admin Panel**.
2. Go to **Marketing > Coupons** and click **Add Coupon** to create the first coupon.
3. Enter the **Coupon Name** (e.g., “20percent”) and set the **Discount Type** to **Percentage Discount**.
4. In the **Coupon Amount** field, enter the discount value. For coupon “20percent”, set the amount to **20**.
5. Check the box for **Auto Apply** so the coupon will be automatically applied when its conditions are met. For auto apply you can refer to the documentation [here](https://woocommerce.com/document/smart-coupons/how-to-auto-apply-coupon/).
6. In the **Usage restriction** tab:
1. Set the **Minimum Spend** equal to the **Coupon Amount** (in this case, 20).
2. Check the box for **Individual Use Only** to ensure that only one coupon is applied at a time.
7. **Save and Publish** the coupon.

### 2. Repeat for additional coupons

[↑ Back to top](#doc-title)

Repeat the steps above to create the additional two coupons:

1. Coupon “30percent” with a percentage discount of **30** and a minimum spend of **30**.
2. Coupon “40percent” with a percentage discount of **40** and a minimum spend of **40**.

Make sure the **Auto Apply** and **Usage restriction** settings (Minimum spend and Individual Use Only) are configured the same way for each coupon.

### 3. How auto apply works with tiered coupons

[↑ Back to top](#doc-title)

Since all three coupons have the **Auto Apply** option enabled, WooCommerce will automatically apply the first coupon whose conditions are met by the cart total. Here’s how the system will behave based on the customer’s cart total:

- **If the cart total is exactly $20,** the “**20percent”** coupon will auto-apply.
- **If the cart total is exactly $30**, the “**30percent”** coupon will auto-apply.
- **If the cart total is exactly $40**, the “**40percent”** coupon will auto-apply.

Note: Since **Individual Use Only** is enabled, only one coupon will be applied at a time, ensuring that no stacking of these tiered discounts occurs.

By following these steps, you can set up tiered, auto-applied coupons that adjust based on the customer’s cart value, offering a seamless and engaging discount experience for your customers.

That’s it.

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

