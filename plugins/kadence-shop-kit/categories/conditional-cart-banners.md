# Conditional Cart Banners

*Category from Kadence Shop Kit documentation*

---

## Conditional Cart Banners

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-shop-kit/conditional-cart-banners/](https://www.kadencewp.com/help-center/docs/kadence-shop-kit/conditional-cart-banners/)

![Conditional Cart Banner Example](https://docs.nexcess.com/wp-content/uploads/2026/06/Conditional-Cart-Banner-Example-1-1024x578-1.jpeg)Conditional Cart Banner Example

Shop Kit’s Conditional Cart Banners feature is excellent for adding banners to your customer’s carts when they meet specific conditions. You can design the banner’s text, button function, and styles. Some of the features allow you to apply coupon codes when particular products are in the cart, to upgrade a product, or to add additional products to the cart at the click of a button. It would help if you had a conditional cart banner to remind your customers to include batteries at a discount for their new product.

Enable Conditional Cart Banners

After [installing Shop Kit](https://docs.nexcess.com/software/kadence/install-activate-kadence-shop-kit/), navigate to the Shop Kit settings. Click on Conditional Cart Banners and activate the switch to Enable Cart Banners. A message tells you to find your Cart Banners under the WooCommerce menu item.

![Enable Conditional Cart Banners](https://docs.nexcess.com/wp-content/uploads/2026/06/Enable-Conditional-Cart-Banners-768x482-1.jpeg)Enable Conditional Cart Banners

Creating a Conditional Cart Banner

A Cart Banner appears above the products the customer wants to purchase on the cart page. For example, this article will explain how to make a cart banner that appears when you add a belt to your cart. The banner will confirm that you added a belt and ask if you want to add sunglasses too. Your customer can press the button, and WooCommerce will add sunglasses to the cart.

![Cart Banner Example](https://docs.nexcess.com/wp-content/uploads/2026/06/Cart-Banner-Example-1024x457-1.jpeg)Cart Banner Example

Navigate to WooCommerce > Cart Banners and click the Add New Cart Notice button.

![Add Cart Banner](https://docs.nexcess.com/wp-content/uploads/2026/06/Add-Cart-Banner-768x491-1.jpeg)Add Cart Banner

When creating a cart banner, there are a few points to consider. There is a Display Type, a Cart Notice Message, and a button. Cart Banners have other options besides these, but these options are instrumental to the function of the banner.

![Cart Banner Main Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Cart-Banner-Main-Settings-1024x373-1.jpeg)Cart Banner Main Settings

Display Type

The Display Type is essential because it lets Shop Kit know when to show the banner. Options include always showing when a particular product or category is in the cart, when a total cart price is more or less than an amount, or when the total cart weight is more or less than an amount. To make the example I mentioned, I’ll set the Display Type to Show when a specific product is in the cart. Then, a dropdown appears that let me choose a product. I decided on a belt from my product list. Secondary options will occur depending on the Display Type you select.

![Display Type Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Display-Type-Settings.gif)Display Type Settings

Cart Notice Message

This section is where you place the text message you want to show your customers. For example, I wrote: **You have placed a belt in the cart! Do you want to add sunglasses too?**

Two Cart Notice variables can be used to dynamically populate the notice message.

- **{cart_difference}:**Shows the remaining amount needed to reach the target value set in the notice conditions.
- **{cart_total}:**Shows the current total value of the cart.

Cart Notice Button

The Cart Notice Button is a text field that sets the text for the button in the banner. For my banner, I put the text: **Yes! Add Sunglasses!**Your banner can read whatever you want, or you can leave it blank to exclude the button.

![Cart Notices Message and Button Text](https://docs.nexcess.com/wp-content/uploads/2026/06/Cart-Notices-Message-and-Button-Text.jpeg)Cart Notices Message and Button Text

Button Type

The Button Type option is crucial because it tells Shop Kit what the button does. The button can be a custom link, add coupon code, add a coupon code and a product, upgrade a product, or upgrade a product and add a coupon code. Remember, if you leave the Cart Notice Button text field empty, the banner excludes the button. To continue the example, I selected Add a Product to Cart. Depending on the button type, different options will appear to let you add a URL, pick a product, or a coupon.

![Button Tye for Conditional Banner](https://docs.nexcess.com/wp-content/uploads/2026/06/Button-Tye-for-Conditional-Banner.gif)Button Tye for Conditional Banner

Cart Notice Expiration

Another great feature of the Cart Notice Settings is the Cart Notice Expiration feature. This setting allows a banner to display only until a date and time you control. An expiration is helpful if you have a sale and only want a coupon code added until the deal ends. If you want to display the banner indefinitely, ignore this setting. Shop Kit does not delete the banner if you pass the expiration date, the banner only stops showing for your customers, and you can always change the time to reenable the banner.

![Cart Notice Expiration Setting](https://docs.nexcess.com/wp-content/uploads/2026/06/Cart-Notice-Expiration-Setting.gif)Cart Notice Expiration Setting

Cart Notice Design Settings

The last section is the Cart Notice Design Settings. These settings allow you to change the design of your message, button, and background. Using these settings, you can make stunning banners to show your customers for different scenarios.

![Cart Notice Design Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Cart-Notice-Design-Settings.jpeg)Cart Notice Design Settings

---

