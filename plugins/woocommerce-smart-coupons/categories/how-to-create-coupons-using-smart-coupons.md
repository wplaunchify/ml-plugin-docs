# How To Create Coupons Using Smart Coupons

*Category from WooCommerce Smart Coupons documentation*

---

## How to create smart and advanced WooCommerce coupons

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-create-coupons-using-smart-coupons/](https://woocommerce.com/document/smart-coupons/how-to-create-coupons-using-smart-coupons/)

# How to create smart and advanced WooCommerce coupons

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons and vouchers extending the core functionality of WooCommerce coupons.

Using default WooCommerce coupons, you can create only basic discounts with some restrictions and limits.

But with the Smart Coupons plugin, you can create all the advanced WooCommerce coupons like:

- New user coupons
- Gift cards/store credits
- Schedule coupons
- Buy one get one and Volume discounts
- Auto apply coupons
- URL coupons
- Bulk generation coupons

and more…

This documentation explains how to create these advanced coupons to boost sales and customer loyalty.

## How to create new user WooCommerce coupon codes?

[↑ Back to top](#doc-title)

First, let’s see the steps to create some discount coupon codes for new users. This is a good strategy to acquire new customers by providing a welcome discount.

And these steps will also remain more or less for creating other discount coupons.

1. Go to your **WordPress Admin panel > Marketing > Coupons > Add coupon > General**.
2. **Discount type**: Select from any of the three WooCommerce’s core discount types –
1. Percentage discount
2. Fixed cart discount
3. Fixed product discount
3. **Coupon amount**: Enter the discount value you want to provide to your users.
4. **Allow free shipping**: Enable this option if the coupon grants free shipping.
5. **Coupon expiry date**: Set the coupon expiry date. ![Create new user WooCommerce coupon codes](https://woocommerce.com/wp-content/uploads/2024/06/smart-coupons-new-user-coupons.png?strip=all&w=704)**Note** – The coupon options in the green background are provided by Smart Coupons plugin.
6. **Coupon expiry time**: Set the exact time you want the coupon to get expired. This works in conjunction with the coupon expiry date.
7. **Max discount**: If you want to limit the [maximum discount](https://woocommerce.com/document/smart-coupons/how-to-set-a-max-discount-for-percentage-discount-coupon/) that can be redeemed, enable this option. Say 30% off up to $50. (This option is visible only for the percentage discount coupon)
8. **For new user only?**: When checked, this coupon will be valid for the user’s first order in your store.
9. **Coupon code format**: Set up a prefix and/or suffix if you wish. (This option is visible only for auto-generated coupons)
10. **Valid for**: You can define the expiry date of a coupon in days, weeks, months and years. (This option is visible only for auto-generated coupons)
11. **Auto generate new coupons with each item**: Enable this option to auto generate coupons. Learn more here.
12. **Show on cart, checkout and my account?**: When checked, this coupon will be visible on the cart/checkout page for everyone. (This option will be not be visible for store credit discount type)
13. **Auto apply?**: If you want this coupon to get automatically applied, enable this option.
14. For setting up other usage restrictions and limits, check this [coupon management doc](https://woocommerce.com/document/coupon-management/).
15. **Publish** your coupon.

For setting up advanced restrictions like payment methods, shipping, taxonomy and others, [refer to these docs](https://woocommerce.com/document/smart-coupons/#section-11).

## How to create a gift card/store credit coupon?

[↑ Back to top](#doc-title)

Since this e-gift card is sold as a digital product, you need to first create a coupon and then a product.

Here are the steps to create a gift card of any amount that customers can purchase from your store.

1. Go to WordPress Admin panel > Marketing > Coupons > Add coupon.
2. Give it a name, say Gift Card.
3. Go to the General tab.
4. Under Discount type, select Store Credit/Gift Certificate.
5. **Leave the coupon amount blank**.
6. Enable ‘**Coupon Value Same as Product’s Price**’ option.
7. Set the usage restrictions and limits as required.
8. Publish the coupon.

![Smart Coupons - Set up coupon](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-smart-coupons-store-credit-creation-1.png?strip=all&w=704)

Next, create the product.

1. Go to WooCommerce > Products > Add or edit an existing ‘Simple’ product.
2. Name the product, i.e Gift Card.
3. **Important**: Leave Regular Price & Sale Price fields blank. Mark the product as ‘Virtual’ to let off shipping charges.
4. Under the Coupons option, search for and select the coupon created in the above step, i.e. Gift Card.
5. Publish the product.

![Smart Coupons - Set up product](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-smart-coupons-coupon-field-in-product-admin.png?strip=all&w=704)

**Note** – The coupon amount and product prices are left blank to allow customers purchase a gift card of any amount.

Your customers can now purchase gift cards in quantities as they do for any other product. They also have the option to send the gift card to someone else and [schedule](https://woocommerce.com/document/smart-coupons/how-to-schedule-delivery-of-coupon/) the gift card coupon.

![Smart Coupons - Purchase gift card of any amount](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-create-gift-card.png?strip=all&w=704)

Apart from any amount gift cards, you can also create:

- [Fixed denomination gift cards](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-variable-but-a-fixed-amount/)
- [Fixed amount gift cards](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-a-fixed-amount/)
- [Discounted gift cards](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-at-less-price/)
- [Physical gift cards](https://woocommerce.com/document/smart-coupons/how-to-print-coupons/)

## How to create a buy one get one (BOGO) coupon?

[↑ Back to top](#doc-title)

Consider you want to offer a large-sized red-colored T-shirt when the same product is added to the cart.

1. Go to WordPress Admin panel > Marketing > Coupons > Add coupon.
2. Under the General tab, select **Fixed cart discount** as the discount type and set the Coupon amount to zero. This is to avoid offering the main product at a discount.
3. Under the Usage restriction tab, go to Products. Choose the large-sized red-colored T-shirt on which the BOGO offer will be applicable.![Smart Coupons BOGO product restrictions](https://woocommerce.com/wp-content/uploads/2021/09/smart-coupons-bogo-product-restriction.png?strip=all&w=704)
4. Go to the Actions tab. Under Add products to cart, search and **choose the same product** that you have set at zero discount for the BOGO offer.
5. Since this is a buy one get one free offer, **select 1 under each with quantity** and under with discount of, **enter 100%**. In case you want to offer the product at 50% off, enter the discount amount as 50. It will be a buy one get one at 50% off.![Smart coupons BOGO actions free product](https://woocommerce.com/wp-content/uploads/2021/09/smart-coupons-bogo-actions-free-product.png?strip=all&w=704)
6. Publish your coupon.

![Smart Coupons - BOGO coupon in cart](https://woocommerce.com/wp-content/uploads/2024/06/smart-coupons-free-tshirt-with-cart-notice.png?strip=all&w=704)

**Note** – Not just BOGO, you can also create [quantity discount](https://woocommerce.com/document/smart-coupons/how-to-restrict-coupon-by-product-quantity-in-cart/)coupons to offer buy more get more, buy one get more and other BOGO offer combinations.

## How to create URL coupons?

[↑ Back to top](#doc-title)

With URL coupons, you can add multiple coupon codes to the URL, clicking on which your users will get a discount automatically.

1. Go to WordPress admin panel > Marketing > Coupons > Add coupon
2. Set the coupon code or generate it; set discount type, coupon amount, restrictions & other limits.
3. Tick the Auto-apply? checkbox.
4. Publish the coupon.
5. Once you publish the coupon, you would see a box on the right hand side named **Coupon shareable link**.![URL coupon - Smart Coupons](https://woocommerce.com/wp-content/uploads/2019/10/url-coupon-smart-coupons.png?strip=all&w=704)
6. Click on the button “**Click to copy**” to copy the link & share it wherever you want.

![Smart Coupons - URL coupons](https://woocommerce.com/wp-content/uploads/2024/05/smart-coupons-url-coupons.png?strip=all&w=704)

[More about URL coupons](https://woocommerce.com/document/smart-coupons/how-to-apply-single-or-multiple-coupons-on-click-of-a-link/)

## How to create auto-apply coupons?

[↑ Back to top](#doc-title)

1. Go to your WordPress admin panel. Under Marketing > Coupons, click on Add coupon. You can also modify your existing coupon.
2. Set the discount type, coupon amount, expiry date and time and other details.
3. Look for the ‘**Auto apply?**’ option. Enable it.
4. Set usage limits and other restrictions as per your requirements. You can also set advanced restrictions based on payment methods, product quantity, user roles and more for your auto-apply coupon.
5. Publish/Update the coupon.

[More about auto-apply coupons](https://woocommerce.com/document/smart-coupons/how-to-auto-apply-coupon/)

## How to create bulk coupons (coupon code generator)?

[↑ Back to top](#doc-title)

You can generate thousands of unique coupon codes within seconds. For sharing discount coupons codes with deal sites, affiliates or during Black Friday sale, this is quite a valuable feature.

1. Go to WordPress Admin panel > Marketing > Coupons.
2. Click on the Bulk Generate tab.
3. Choose whether to:
1. Add generated coupons to store
2. Export coupons to CSV (creates a CSV file you can import later)
3. Email the generated coupons to the recipients after adding to store
4. Add the coupon type, discount amount, other restrictions and limits as you wish. You can also generate bulk coupons with categories. [Here’s how](https://woocommerce.com/document/smart-coupons/how-to-bulk-generate-coupons/).
5. Click on Apply.

That’s it.

![Smart Coupons - Bulk generate coupons](https://woocommerce.com/wp-content/uploads/2022/12/woocommerce-smart-coupons-bulk-generate-coupons.png?strip=all&w=704)

## How to create coupons with advanced restrictions?

[↑ Back to top](#doc-title)

Restrict coupons based on payment methods, geolocation, user roles, shipping methods, email addresses, product attributes and product taxonomy.

Refer [here](https://woocommerce.com/document/smart-coupons/#section-11) for the steps to create coupons for the above mentioned restrictions.

## How to set up auto-generating unique coupon codes?

[↑ Back to top](#doc-title)

Any coupon can be used as a template to auto-generate new and unique coupons but with the same attributes as the original. This feature also increases security, as people can’t share coupons since auto-generated coupons are restricted to a customer’s email address.

To set up auto-generating coupons:

1. Go to your WordPress Admin panel > Marketing > Coupons > Add coupon > General.
2. Under the ‘Discount type’, select from any of the three WooCommerce’s core discount types –
1. Percentage discount
2. Fixed cart discount
3. Fixed product discount
3. Enter coupon amount, expiry date and time and other details.
4. Enable the ‘Auto generate new coupons with each item’ option to auto generate coupons.
5. When you enable the above option, the ‘Valid for’ option appears. The feature automatically sets the expiry date of a generated coupon according to the date of the issue. You can define the expiry date of a coupon in days, weeks, months and years. This can be used for both individual and bulk generated coupons.
6. Set up a prefix and/or suffix if you wish under ‘Coupon code format’.

Publish the coupon.

![Smart Coupons - Auto-generate coupons](https://woocommerce.com/wp-content/uploads/2022/06/smart-coupons-create-coupons-to-auto-generate.png?strip=all&w=704)

## How to duplicate coupons?

[↑ Back to top](#doc-title)

1. Go to your WordPress Admin panel > Marketing > Coupons.
2. Search for a coupon you want to duplicate using the Search box. Smart Coupons also provides a feature to filter coupons created for specific users by entering the user’s e-mail ID & “Email: ” as a prefix to the user’s e-mail.
3. Hover on the coupon and click on the ‘Duplicate’ option to duplicate that coupon.

![Smart Coupons - Duplicate coupons](https://woocommerce.com/wp-content/uploads/2022/06/smart-coupons-search-and-duplicate-coupons.png?strip=all&w=704)

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

