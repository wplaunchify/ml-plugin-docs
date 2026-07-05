# How To Sell Gift Card Of Any Amount

*Category from WooCommerce Smart Coupons documentation*

---

## How to create gift cards in WooCommerce (advanced)

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-any-amount/](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-any-amount/)

# How to create gift cards in WooCommerce (advanced)

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons and vouchers extending the core functionality of WooCommerce coupons.

This documentation explains how you can add/create WooCommerce gift cards or store credits of any amount that your customers can buy from you and also schedule them.

These are advanced e-gift cards because you can set all the required advanced restrictions like geolocation, payment, email address, etc. for the gift cards.

And also, you can create and sell multiple types of WooCommerce gift cards – any amount, fixed amount, fixed denominations, discounted gift cards and physical gift cards.

## About Smart Coupons gift card

[↑ Back to top](#doc-title)

The WooCommerce gift card/store credit functionality of Smart Coupons is different from how normal coupon codes work. A gift card is treated as real credit / money – very much like a prepaid credit card.

Gift cards do not introduce a dedicated product type. Instead, it allows you to use Simple or Variable product as a basis for selling gift cards.

Gift card products are Virtual. You can use the extension to issue only e-gift card or digital gift card tokens.

## What is a gift card / store credit?

[↑ Back to top](#doc-title)

A store credit or gift certificate is a monetary value assigned as a credit to the customer. So the customer can use that credit all at once or multiple times to make purchases until the credit is exhausted or its validity expires. If the available store credit balance is less than the total amount to be paid, the remaining amount can be paid using other payment methods.

In Smart Coupons, a store credit/gift certificate is available as a discount type coupon. So if you want to allow users to use store credit/gift certificate until it has balance, do not set a usage limit for it. This will allow customers to redeem credit multiple times until it is exhausted or is expired.

## How to create a gift card of any amount

[↑ Back to top](#doc-title)

To allow customers to purchase a gift card/store credit of any amount and quantity of their choice, you need to first create a coupon and then a product.

### Creating an e-gift card coupon

[↑ Back to top](#doc-title)

1. Go to your **WordPress Admin panel > Marketing > Coupons > Add new coupon**.
2. Click on ‘Generate coupon code’ or enter your own code.
**Important**: Coupon code should not have any spaces.
3. Select ‘**Store Credit/Gift Certificate**’ as the **Discount type** from the drop-down.
**Important**: Leave coupon amount blank.
4. Enable the ‘**Coupon Value Same as Product’s Price?**’ option.
5. **Publish** the coupon. 
![Smart Coupons gift card of any amount](https://woocommerce.com/wp-content/uploads/2019/10/smart-coupons-gift-card-of-any-amount.png?strip=all&w=704)

### Creating a product

[↑ Back to top](#doc-title)

1. Add or edit an existing Simple product.
2. Name the product, i.e., Store Credit / Gift Certificate.
3. **Important**: Leave the Regular price & Sale price fields blank.
4. If you do not want to charge shipping for this product, mark the product as **Virtual**.
5. Under ‘**Coupons**’, search for and select the coupon created above.
6. **Publish/Update** the product.![Configure product for selling Gift Card](https://woocommerce.com/wp-content/uploads/2019/10/smart-coupons-gift-card-product-with-coupons.png?strip=all&w=704)

That’s it.

You have added a gift card to your WooCommerce store. Your customers can now purchase a store credit/**gift card of any amount** like $9, $21, $45, $60, etc.

**Note**: This feature is compatible with the [Name Your Price](https://woocommerce.com/products/name-your-price/) plugin.

**Important**: If you have any coupon in your store that can be used to buy the above gift card/store credit, make sure to set ‘Usage limit per user’ under ‘Usage Limits’ to 1 for that coupon. Otherwise, your customer will get real credit at a discounted rate multiple times, resulting in a loss for you.

![](https://woocommerce.com/wp-content/uploads/2022/10/woocommerce-sc-usage-limit.png?strip=all&w=704)

## How customers can purchase and schedule gift cards

[↑ Back to top](#doc-title)

1. A customer visits the gift card product page and enters the amount to be purchased.
2. The quantity can be adjusted if they want to purchase more than one gift card. For example, credit for $600 in the form of gifts of $300 each for two people. Customers would enter 300 in the provided box and increase the quantity to 2. ![Selling Gift Card Frontend view](https://woocommerce.com/wp-content/uploads/2019/10/smart-coupons-gift-card-simple-product.png?strip=all&w=704)
3. They go through the normal purchase process: Add to cart > Cart > Checkout > Payment.
4. On the checkout page, the customer will have two options to send the gift card coupon:
1. Send to me
2. Gift to someone else
5. Clicking on ‘Gift to someone else’ will give two more options:
- Send to one person
- Send to different people
6. There’s also a Toggle to send the coupon NOW or LATER.
7. Next is to enter the recipient’s Email address and a message for the recipient(s).
8. If the LATER option is chosen, the date and time need to be selected. [Learn more about scheduling](https://woocommerce.com/document/smart-coupons/how-to-schedule-delivery-of-coupon/).
9. The customer then makes the payment.![Send Gift Card form](https://woocommerce.com/wp-content/uploads/2019/10/smart-coupons-send-coupon-to-form-checkout.png?strip=all&w=704)

That’s it.

## Recipient form on the product page

[↑ Back to top](#doc-title)

The “Send Coupons to” form is available by default on the product page if you are using Smart Coupons version [9.65.0](https://dzv365zjfbd8v.cloudfront.net/changelogs/woocommerce-smart-coupons/changelog.txt) or higher.

![](https://woocommerce.com/wp-content/uploads/2019/10/Gift-card-send-recipient-form-on-product-page.png?strip=all&w=704)

**Note**: Customers can send multiple gift cards to the same or different people at once using the above feature. For example, $5 and $9 gift cards to Martha; $20 gift cards to Marco, Andrew, Lisa…

However, for sending the same value gift card to multiple people, make sure the gift card quantity is equal to the number of people. In the above example, three $20 gift cards are required to send to Marco, Andrew, and Lisa respectively.

After the payment is completed, a gift certificate is generated and forwarded via email to the recipient(s).

![](https://woocommerce.com/wp-content/uploads/2022/10/woocommerce-sc-coupon-email.png?strip=all&w=704)

![](https://woocommerce.com/wp-content/uploads/2022/10/woocommerce-sc-email-coupon.png?strip=all&w=704)

The sender is also notified by an acknowledgment email.

![](https://woocommerce.com/wp-content/uploads/2022/10/woocommerce-sc-coupon-acknowledgement.png?strip=all&w=704)

## Other WooCommerce gift card types

[↑ Back to top](#doc-title)

Why Smart Coupons is a recommended WooCommerce gift card plugin because it provides the flexibility to create other gift card types and get you more sales.

### How to create a fixed amount gift card

[↑ Back to top](#doc-title)

A fixed-amount gift card is useful for small-sized WooCommerce stores that want to sell only a limited amount of gift cards. For example, $9, $19, and $29.

The steps remain similar to creating a gift card of any amount, except that you need to enter the gift card value under the ‘Regular price’ field.

Refer to [creating fixed amount gift cards](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-a-fixed-amount/) doc for more details.

### How to create a fixed denomination gift card

[↑ Back to top](#doc-title)

In fixed denomination gift cards, you allow customers to purchase gift certificates, set within limits. For example, $10, $20, $50, and $100.

Unlike the fixed and any amount gift cards that are created as Simple product types, each fixed denomination gift card is created as a product variation, with a unique price.

Refer to the steps for [creating fixed denomination gift cards](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-variable-but-a-fixed-amount/).

### How to sell gift cards at a discount

[↑ Back to top](#doc-title)

The way you offer a discount on your products, here you offer a discount on your gift card. For example, selling a $20 gift card at $15; which means a 25% discount.
You can discount a fixed amount and a fixed denomination gift card.

You can discount a fixed amount and a fixed denomination gift card.

Create a gift card coupon, create a product, and enter the Regular price and Sale price respectively. You also need to enable one setting ‘Sell store credit at less price?’.

Refer to [creating discounted gift cards](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-at-less-price/) doc for detailed steps.

### How to create physical gift cards

[↑ Back to top](#doc-title)

This can be used to delight loved ones on their birthdays, Christmas or any other occasion.

Print the gift card voucher or coupon. After printing, decorate it on your own, and then deliver it to the respective person.

Refer to the steps for [creating physical gift cards](https://woocommerce.com/document/smart-coupons/how-to-print-coupons/).

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

