# How To Sell Gift Card Of Any Amount

*Category from WooCommerce Smart Coupons documentation*

---

## How to create and sell gift cards in WooCommerce

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-any-amount/](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-any-amount/)

# How to create and sell gift cards in WooCommerce

			WooCommerce has no built-in way to sell gift cards. If a customer wants to buy store credit for someone else, there’s nothing native to handle it.

This doc covers how to sell gift cards of any amount, let customers schedule delivery to a recipient, and set up other gift card types like fixed amounts, fixed denominations, discounted cards, and physical cards.

[Smart Coupons](https://woocommerce.com/products/smart-coupons/) adds gift cards by treating them as real credit which is similar to a prepaid card rather than a typical percentage-off coupon.

## What is a gift card / store credit?

[↑ Back to top](#doc-title)

A store credit or gift certificate is a monetary value assigned as a credit to the customer. The customer can use that credit all at once or across multiple purchases until it’s exhausted or expires. If the available balance is less than the total order amount, the remaining amount can be paid with another payment method.

In Smart Coupons, a store credit/gift certificate is available as a discount type coupon. If you want customers to redeem credit multiple times until it runs out, don’t set a usage limit on it.

## How gift cards work in Smart Coupons

[↑ Back to top](#doc-title)

Gift cards don’t introduce a dedicated product type. Instead, a Simple or Variable product is used as the basis for selling them. Gift card products are Virtual, so the extension can issue e-gift cards or digital gift card tokens only.

These are also advanced e-gift cards. You can apply restrictions like geolocation, payment method, or email address on top of the gift card type you choose.

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
9. The customer then makes the payment. ![Send Gift Card form](https://woocommerce.com/wp-content/uploads/2019/10/smart-coupons-send-coupon-to-form-checkout.png?strip=all&w=704)

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

Beyond any-amount gift cards, Smart Coupons supports a few other formats depending on how you want to sell them:

### Fixed amount gift card

[↑ Back to top](#doc-title)

Useful for smaller stores that want to sell only a limited set of amounts, like $9, $19, and $29. The steps are the same as creating an any-amount gift card, except you enter the value under the ‘Regular price’ field.

Refer to the [steps for creating a fixed amount gift card](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-a-fixed-amount/).

### Fixed denomination gift cards

[↑ Back to top](#doc-title)

Customers purchase gift certificates within set limits, like $10, $20, $50, and $100. Unlike any-amount and fixed-amount cards (Simple products), each denomination is created as a product variation with its own price.

Refer to the [steps for creating fixed denomination gift cards](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-of-variable-but-a-fixed-amount/).

### Discounted gift card

[↑ Back to top](#doc-title)

Sell a gift card for less than its value, e.g., a $20 gift card for $15 (a 25% discount). Both fixed amount and fixed denomination gift cards can be discounted.

Create a gift card coupon and product as usual, enter the Regular price and Sale price, and enable ‘Sell store credit at less price?’.

Refer to [the steps for creating a discounted gift card](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-at-less-price/).

### Physical gift card

[↑ Back to top](#doc-title)

This can be used to delight loved ones on their birthdays, Christmas or any other occasion.

Print the gift card voucher or coupon. After printing, decorate it on your own, and then deliver it to the respective person.

Refer to the [steps for creating a physical gift card](https://woocommerce.com/document/smart-coupons/how-to-print-coupons/).

[← WooCommerce Smart Coupons Documentation](https://woocommerce.com/document/smart-coupons/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce/)

WooCommerce Subscriptions is a WooCommerce extension that lets customers subscribe to your products or...
				![](https://woocommerce.com/wp-content/uploads/2012/07/Table_Rate_Shipping_icon-marketplace-160x160-2.png)

### Table Rate Shipping

	
			by [Woo](https://woocommerce.com/vendor/woocommerce/)

Advanced, flexible shipping. Define multiple shipping rates based on location, price, weight, shipping class...

---

