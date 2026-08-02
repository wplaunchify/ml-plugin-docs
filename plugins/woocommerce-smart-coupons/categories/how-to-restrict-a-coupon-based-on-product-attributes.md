# How To Restrict A Coupon Based On Product Attributes

*Category from WooCommerce Smart Coupons documentation*

---

## How to restrict coupons by product attributes

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-restrict-a-coupon-based-on-product-attributes/](https://woocommerce.com/document/smart-coupons/how-to-restrict-a-coupon-based-on-product-attributes/)

# How to restrict coupons by product attributes

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

Smart Coupons also provides advanced coupon restrictions based on product attributes, [product taxonomy](https://woocommerce.com/document/smart-coupons/how-to-restrict-coupons-by-product-taxonomy/), [user roles](https://woocommerce.com/document/smart-coupons/how-to-restrict-coupon-by-user-roles/) and others.

Earlier, to restrict products based on attributes, you need to add all product variants (hundreds and thousands) which is not the case now. Enter the product attributes and Smart Coupons will handle the rest. This is one of the biggest time-saving features store owners would come across.

This doc article explains how using Smart Coupons, you can validate, show/exclude a coupon based on product attributes.

This means product attribute restrictions can be set in two ways:

1. Product attributes that the coupon will be applied to, or that need to be in the cart for the discount/gift card to be applied.
2. Product attributes that the coupon will not be applied to, or that cannot be in the cart for the discount/gift card to be applied.

## Steps to restrict a coupon based on product attributes

[↑ Back to top](#doc-title)

Consider the following example – You want to offer a flat discount only when the user adds a Red T-shirt to the cart irrespective of other attributes.

1. Navigate to **WordPress Admin Panel > Marketing > Coupons**.
2. Create a coupon or edit an existing coupon. Enter the required details.
3. Navigate to the **Usage restriction** tab. Under the Products field, search and select the desired T-shirt.![Product restriction](https://woocommerce.com/wp-content/uploads/2021/02/sc-product-restrictions.png?strip=all&w=704)
4. Scroll down to find the **Smart Coupons Restrictions** dropdown field, select ‘Product attributes’ option, click on the **Add** button, and select Color as ‘Red.’ ![Restrict to product attributes](https://woocommerce.com/wp-content/uploads/2021/02/sc-product-attributes.png?strip=all&w=704)
5. Here, you need to enter the attributes on which you want to allow the usage of this coupon.
6. Publish/Update the coupon.

Now, whenever a user adds a Red color T-shirt to the cart, the discount coupon will be applied.

If a user adds any other color T-shirt to the cart except red, the coupon won’t be applied.

## Steps to exclude a product attribute from a coupon

[↑ Back to top](#doc-title)

This is exactly the opposite of the above example.

In this case, you want to apply a coupon on all T-shirt colors except for the Red color.

1. Navigate to **WordPress Admin Panel > Marketing > Coupons**.
2. Create a coupon or edit an existing coupon. Enter the required details.
3. Navigate to the **Usage restriction** tab. Under the Products field, search and select the desired T-shirt.
4. Scroll down to find the **Smart Coupons Restrictions** dropdown field, select ‘Exclude attributes’ option, click on the **Add** button, and select Color as ‘Red.’ ![Coupon exclude attributes](https://woocommerce.com/wp-content/uploads/2021/02/sc-exclude-attributes.png?strip=all&w=704)
5. Here, you need to enter the attributes on which you don’t want to allow the usage of this coupon.
6. Publish/Update the coupon.

So, whenever a user adds a black, blue, green, or any other color T-shirt to the cart except red, the discount coupon will be applied.

However, if a user adds a red color T-shirt, the coupon won’t be applied.

**Note**: Specifying a product/products under Usage restriction > Products is not compulsory. If a product is not specified, the attribute restriction will work irrespective of the product.

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

