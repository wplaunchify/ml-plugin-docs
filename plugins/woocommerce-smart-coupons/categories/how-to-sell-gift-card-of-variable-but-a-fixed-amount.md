# How To Sell Gift Card Of Variable But A Fixed Amount

*Category from WooCommerce Smart Coupons documentation*

---

## How to create gift card denominations in WooCommerce

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-variable-but-a-fixed-amount/](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-variable-but-a-fixed-amount/)

# How to create gift card denominations in WooCommerce

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons and vouchers extending the core functionality of WooCommerce coupons.

This documentation explains how you can sell fixed gift card denominations in WooCommerce – $10, $20, $50, $100…set within a fixed minimum and maximum limit.

Offer a versatile gift card system that allows your customers to select from a list of fixed denominations.

Smart Coupons does not introduce a dedicated product type for gift cards/gift certificates. Instead, it allows you to use Simple or Variable products as a basis for selling gift certificates.

## Steps to create fixed gift card denominations

[↑ Nach oben](#doc-title)

To allow customers to purchase fixed gift card denominations of their choice in quantities, you need to first create a coupon and then a product.

### Creating a gift card coupon

[↑ Nach oben](#doc-title)

1. Go to your **WordPress Admin panel > Marketing > Coupons > Add new coupon**.
2. Click on **Generate coupon code** or enter your own code.
**Important**: Coupon code should not have any spaces.
3. Select ‘**Store Credit/Gift Certificate**’ as the **Discount type** from the drop-down.
**Important**: Leave coupon amount blank.
4. **Enable** the ‘**Coupon Value Same as Product’s Price?**’ option.
5. **Publish** the coupon ![Smart Coupons gift card coupon variable product](https://woocommerce.com/wp-content/uploads/2019/10/smart-coupons-gift-card-coupon-variable-product-1.png?strip=all&w=704)

### Creating a product

[↑ Nach oben](#doc-title)

1. Add a new **Variable product** or edit an existing Variable product.
2. Associate the above-created coupon with this product under **General > Coupons**.![](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-sc-variable-gift-card.png?strip=all&w=704)
3. You need to **create each of your fixed gift card denominations as a product variation**. So add attributes to a variable product as explained [here](https://woocommerce.com/document/variable-product/#section-3). Then create product variations, where each variation has a unique and fixed price, i.e 10, 20, 50, 100.![](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-smart-coupons-variable-gift-card.png?strip=all&w=704)
4. Mark product variations as Virtual to avoid shipping charges.
5. **Publish** / **Update** the product.

That’s it.

**Important**: If you have any coupon in your store that can be used to buy the above gift card/store credit, make sure to set ‘Usage limit per user’ under ‘Usage Limits’ to 1 for that coupon. Otherwise, your customer will get real credit at a discounted rate multiple times, resulting in a loss for you.

![](https://woocommerce.com/wp-content/uploads/2022/10/woocommerce-sc-usage-limit-1.png?strip=all&w=704)

## How can customers purchase gift card denominations?

[↑ Nach oben](#doc-title)

When a customer purchases any product variation, a coupon with the same price as the variation will be created and emailed to them.

1. Customers visit the product page, which allows them to purchase gift certificates in the available denominations.
2. They select the amount and quantity to be purchased.
3. For example, a customer wants to purchase $10 credit in a quantity of five and $20 credit in a quantity of one. They would choose $10 from the dropdown menu and set the quantity to 5 and add them to the cart. Then choose $20 from the dropdown, set the quantity to five, add them to the cart and then proceed to checkout.![](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-smart-coupons-variable-fixed-amount.png?strip=all&w=704)
4. On the checkout page, the customer will have two options to send the coupons – now or schedule them for later. Learn more about [scheduling](https://woocommerce.com/document/smart-coupons/how-to-schedule-delivery-of-coupon/).
5. Once set, the customer will make the payment.

That’s it.

After the payment is completed, the fixed denomination gift certificates are generated and forwarded via email to the recipient(s).

The sender is also informed by an acknowledgment email.

## Other WooCommerce gift card types

[↑ Nach oben](#doc-title)

With Smart Coupons, you can also create other gift card types:

1. **Gift cards of any amount**
2. [Gift cards of a fixed amount](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-a-fixed-amount/)
3. [Physical gift cards](https://woocommerce.com/document/smart-coupons/how-to-print-coupons/)
4. [Gift card at a discount](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-at-less-price/)

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

