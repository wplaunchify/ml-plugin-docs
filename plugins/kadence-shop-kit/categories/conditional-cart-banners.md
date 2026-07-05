# Conditional Cart Banners

*Category from Kadence Shop Kit documentation*

---

## Conditional Cart Banners

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-shop-kit/conditional-cart-banners/](https://www.kadencewp.com/help-center/docs/kadence-shop-kit/conditional-cart-banners/)

![Conditional Cart Banner Example](https://res.cloudinary.com/lwcom/images/w_1024,h_578,c_scale/f_auto,q_auto/v1779999528/prod/Conditional-Cart-Banner-Example-1/Conditional-Cart-Banner-Example-1.jpeg?_i=AA)Shop Kit’s Conditional Cart Banners feature is excellent for adding banners to your customer’s carts when they meet specific conditions. You can design the banner’s text, button function, and styles. Some of the features allow you to apply coupon codes when particular products are in the cart, to upgrade a product, or to add additional products to the cart at the click of a button. It would help if you had a conditional cart banner to remind your customers to include batteries at a discount for their new product.

## Enable Conditional Cart Banners

After [installing Shop Kit](https://www.liquidweb.com/help-docs/software/kadence/shop-kit/install-activate-kadence-shop-kit/), navigate to the Shop Kit settings. Click on Conditional Cart Banners and activate the switch to Enable Cart Banners. A message tells you to find your Cart Banners under the WooCommerce menu item.

![Enable Conditional Cart Banners](https://res.cloudinary.com/lwcom/images/w_768,h_482,c_scale/f_auto,q_auto/v1779999592/prod/Enable-Conditional-Cart-Banners/Enable-Conditional-Cart-Banners.jpeg?_i=AA)
## Creating a Conditional Cart Banner

A Cart Banner appears above the products the customer wants to purchase on the cart page. For example, this article will explain how to make a cart banner that appears when you add a belt to your cart. The banner will confirm that you added a belt and ask if you want to add sunglasses too. Your customer can press the button, and WooCommerce will add sunglasses to the cart.

![Cart Banner Example](https://res.cloudinary.com/lwcom/images/w_1024,h_457,c_scale/f_auto,q_auto/v1779999585/prod/Cart-Banner-Example/Cart-Banner-Example.jpeg?_i=AA)Navigate to WooCommerce → Cart Banners and click the Add New Cart Notice button.

![Add Cart Banner](https://res.cloudinary.com/lwcom/images/w_767,h_491,c_scale/f_auto,q_auto/v1779999579/prod/Add-Cart-Banner/Add-Cart-Banner.jpeg?_i=AA)When creating a cart banner, there are a few points to consider. There is a Display Type, a Cart Notice Message, and a button. Cart Banners have other options besides these, but these options are instrumental to the function of the banner.

![Cart Banner Main Settings](https://res.cloudinary.com/lwcom/images/w_1024,h_373,c_scale/f_auto,q_auto/v1779999573/prod/Cart-Banner-Main-Settings/Cart-Banner-Main-Settings.jpeg?_i=AA)
### Display Type

The Display Type is essential because it lets Shop Kit know when to show the banner. Options include always showing when a particular product or category is in the cart, when a total cart price is more or less than an amount, or when the total cart weight is more or less than an amount. To make the example I mentioned, I’ll set the Display Type to Show when a specific product is in the cart. Then, a dropdown appears that let me choose a product. I decided on a belt from my product list. Secondary options will occur depending on the Display Type you select.

![Display Type Settings](https://res.cloudinary.com/lwcom/images/w_1023,h_369,c_scale/f_auto,q_auto/v1779999562/prod/Display-Type-Settings/Display-Type-Settings.gif?_i=AA)### Cart Notice Message

This section is where you place the text message you want to show your customers. For example, I wrote: **You have placed a belt in the cart! Do you want to add sunglasses too?**

Two Cart Notice variables can be used to dynamically populate the notice message.

- **{cart_difference}:**Shows the remaining amount needed to reach the target value set in the notice conditions.
- **{cart_total}:**Shows the current total value of the cart.### Cart Notice Button

The Cart Notice Button is a text field that sets the text for the button in the banner. For my banner, I put the text: **Yes! Add Sunglasses!**Your banner can read whatever you want, or you can leave it blank to exclude the button.![Cart Notices Message and Button Text](https://res.cloudinary.com/lwcom/images/w_939,h_207,c_scale/f_auto,q_auto/v1779999542/prod/Cart-Notices-Message-and-Button-Text/Cart-Notices-Message-and-Button-Text.jpeg?_i=AA)
### Button Type

The Button Type option is crucial because it tells Shop Kit what the button does. The button can be a custom link, add coupon code, add a coupon code and a product, upgrade a product, or upgrade a product and add a coupon code. Remember, if you leave the Cart Notice Button text field empty, the banner excludes the button. To continue the example, I selected Add a Product to Cart. Depending on the button type, different options will appear to let you add a URL, pick a product, or a coupon.

![Button Type for Conditional Banner](https://res.cloudinary.com/lwcom/images/w_1024,h_618,c_scale/f_auto,q_auto/v1779999553/prod/Button-Tye-for-Conditional-Banner/Button-Tye-for-Conditional-Banner.gif?_i=AA)
### Cart Notice Expiration

Another great feature of the Cart Notice Settings is the Cart Notice Expiration feature. This setting allows a banner to display only until a date and time you control. An expiration is helpful if you have a sale and only want a coupon code added until the deal ends. If you want to display the banner indefinitely, ignore this setting. Shop Kit does not delete the banner if you pass the expiration date, the banner only stops showing for your customers, and you can always change the time to reenable the banner.

![Cart Notice Expiration Setting](https://res.cloudinary.com/lwcom/images/w_768,h_352,c_scale/f_auto,q_auto/v1779999548/prod/Cart-Notice-Expiration-Setting/Cart-Notice-Expiration-Setting.gif?_i=AA)
### Cart Notice Design Settings

The last section is the Cart Notice Design Settings. These settings allow you to change the design of your message, button, and background. Using these settings, you can make stunning banners to show your customers for different scenarios.

![Cart Notice Design Settings](https://res.cloudinary.com/lwcom/images/w_886,h_836,c_scale/f_auto,q_auto/v1779999538/prod/Cart-Notice-Design-Settings/Cart-Notice-Design-Settings.jpeg?_i=AA)Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

