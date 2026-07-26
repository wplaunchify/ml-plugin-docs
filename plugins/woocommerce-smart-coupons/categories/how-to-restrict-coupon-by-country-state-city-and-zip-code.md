# How To Restrict Coupon By Country State City And Zip Code

*Category from WooCommerce Smart Coupons documentation*

---

## How to restrict coupons by location — country, state, city and ZIP code

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-restrict-coupon-by-country-state-city-and-zip-code/](https://woocommerce.com/document/smart-coupons/how-to-restrict-coupon-by-country-state-city-and-zip-code/)

# How to restrict coupons by location — country, state, city and ZIP code

			Smart Coupons provides a powerful, all-in-one solution for gift cards, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

Smart Coupons also provides advanced coupon restrictions based on location, [shipping methods](https://woocommerce.com/document/smart-coupons/how-to-restrict-coupon-by-shipping-method/), [payment methods](https://woocommerce.com/document/smart-coupons/how-to-restrict-coupon-by-payment-method/) and others.

This document explains how you can restrict a coupon to country, state, city or zip code.

Restricting coupons based on location can increase sales as you target your promotions only to specific customers of that region.

## How to configure location-based coupons

[↑ Back to top](#doc-title)

1. Navigate to *Marketing > Coupons* in your store’s WP Admin dashboard.
2. Create a coupon or edit an existing coupon.
3. In the “**General**” tab, select the discount type and add other configurations as required. *(No need to make any changes if editing an existing coupon)*
4. In the **“Usage restriction**” tab, under the **Smart Coupons Restrictions** dropdown field, select “**Allowed locations**” and then click on the “**Add**” button.
5. In the “**Allowed locations**” field, you can set a country, state, city, and zip code.

![Smart Coupons location restrictions](https://woocommerce.com/wp-content/uploads/2019/10/Smart-Coupons-Country.png?strip=all&w=704)

1. Select “**Match for location in**” whether you want to validate the coupon based on the “**Billing**” address or the “**Shipping**” address.
2. Publish or update the coupon.

That’s it. Now, your coupon will only be valid for customers whose addresses match the specified locations.

## What if the country, state, city, and ZIP code is not available?

[↑ Back to top](#doc-title)

By default, in the *Locations* field, you’ll be able to search and select a country. If you don’t find a country, state, city, and ZIP code, type the exact values and hit the ‘Enter’ button from the keyboard. It will be added to the **Locations** field and database as well.

You can add single and multiple custom values.

When you add multiple custom values, make sure that those values are separated by a pipe symbol (
```
|
```

) — for example: 
```
Washington|California|Chicago|New York
```

.

Once you add these custom values, you can search and select them from the next time onwards.

**Note**: At first, the coupon will be applied successfully to the cart. It will be validated for the location on the checkout page only after the customer enters the values for country, state, city, or ZIP code.

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

