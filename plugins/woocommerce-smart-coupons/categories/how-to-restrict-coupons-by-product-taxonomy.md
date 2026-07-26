# How To Restrict Coupons By Product Taxonomy

*Category from WooCommerce Smart Coupons documentation*

---

## How to restrict coupons by product taxonomy

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-restrict-coupons-by-product-taxonomy/](https://woocommerce.com/document/smart-coupons/how-to-restrict-coupons-by-product-taxonomy/)

# How to restrict coupons by product taxonomy

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

Smart Coupons also provides advanced coupon restrictions based on product taxonomy, [product attributes](https://woocommerce.com/document/smart-coupons/how-to-restrict-a-coupon-based-on-product-attributes/), [user roles](https://woocommerce.com/document/smart-coupons/how-to-restrict-coupon-by-user-roles/) and others.

If you want to exclude all your popular subscription products from coupon discounts, or include discounts on all products sharing the common tag and other product-related use cases, this coupon taxonomy restriction is a great boon.

One of the best tricks to save time and effort when dealing with a large product portfolio.

Smart Coupons provides full flexibility to include/exclude product taxonomy from the coupon getting applied. The following taxonomies can be included/excluded:

1. Product type
2. Product tags
3. Product visibility
4. Product shipping class

## Steps to restrict coupons by taxonomy

[↑ Back to top](#doc-title)

1. Navigate to the WordPress Admin panel. Click on **Marketing > Coupons**.
2. Create a new coupon or open an existing one. Enter the required details.
3. Click the ‘**Usage restriction**’ tab, scroll down to locate the ‘**Smart Coupons Restrictions**’ option.
4. Select the ‘**Taxonomy**‘ option from the dropdown and click the ‘**Add**‘ button.![Taxonomy restriction](https://woocommerce.com/wp-content/uploads/2021/03/taxonomy-restriction.png?strip=all&w=704)
5. Click the ‘**Add taxonomy restriction**’ button to select any taxonomy.
6. Choose **Include** / **Exclude** from the drop-down.
7. Search and select values.
8. Click on the ‘**+**’ button to add more taxonomy restrictions as required.
9. **Publish/Update** the coupon.

![](https://woocommerce.com/wp-content/uploads/2023/01/woocommerce-smart-coupons-taxonomy-restriction.png?strip=all&w=704)

That’s it. Now the coupon is set up successfully with restrictions based on taxonomy.

**Note** – You can also combine other coupon restrictions in combination with the taxonomy restrictions.

## How taxonomy validation works

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2022/03/smart-coupons-product-taxonomy-restriction-with-multiple-values-and-rules.png?strip=all&w=704)

- All the different taxonomy restrictions that are added to a coupon need to be satisfied in order for the coupon to work. The ‘**AND**’ logic is followed when there are multiple taxonomy restrictions.
- When there are multiple values added in a single taxonomy restriction field, the ‘**OR**’ logic is followed. For example, if we have two different product shipping classes (heavy and fragile) mentioned, then the product in the cart must belong to either one of the heavy or fragile shipping classes for the coupon to get applied.

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

