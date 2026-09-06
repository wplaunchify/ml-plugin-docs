# Smart Coupons Faqs

*Category from WooCommerce Smart Coupons documentation*

---

## Smart Coupons FAQs

**Source:** [https://woocommerce.com/document/smart-coupons/smart-coupons-faqs/](https://woocommerce.com/document/smart-coupons/smart-coupons-faqs/)

# Smart Coupons FAQs

			Smart Coupons provide a powerful, “all-in-one” solution for gift certificates, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

This doc article includes some of the frequently asked questions:

## FAQs

[↑ Back to top](#doc-title)

### When I try to add a coupon, I get an Invalid post type error?

[↑ Back to top](#doc-title)

Check whether the use of Coupon is enabled in your store. If it’s not enabled, enable it. You can find the setting at **WooCommerce > Settings > General > Enable coupons**.

![Enable Coupons in WooCommerce](https://woocommerce.com/wp-content/uploads/2018/07/sc-enable-coupons-in-wc.png?strip=all&w=704)

### Can coupon code have any spaces in the name?

[↑ Back to top](#doc-title)

No. Coupon code should not have any spaces in the name, e.g., Coupon code should be like “gift-certificate” & not “gift certificate”.

### What’s the URL to my coupon, so it’s automatically inserted when visiting?

[↑ Back to top](#doc-title)

```
http://www.mysite.com/?coupon-code=discount5&sc-page=shop
```

Replace www.mysite.com with your own URL then replace discount5 with the generated coupon code.

For more details, read this doc: [Apply coupon via URL](https://woocommerce.com/document/smart-coupons/how-to-apply-single-or-multiple-coupons-on-click-of-a-link/)

### My Store Credit/Gift Certificate is not working (not generating new coupon code).

[↑ Back to top](#doc-title)

Ensure your Store Credit/Gift Certificate coupon code doesn’t have space in it, e.g., Coupon code should be like “gift-certificate” & not “gift certificate”.****

### I have problems with coupons after import.

[↑ Back to top](#doc-title)

If dates are entered in your import file, ensure they are in the proper format. The expiry date format should match the format of WooCommerce, which is: 
```
YYYY-MM-DD
```

. You can find this format used with any WooCommerce coupon. If you are entering a post date, it should match the date format of the post date, which is: 
```
YYYY-MM-DD HH:MM:SS
```

. You can find this format in the posts table of your WordPress database.

### Smart Coupons is not sending emails.

[↑ Back to top](#doc-title)

Smart Coupons sends an email only after the order is marked Completed. Ensure all settings of coupons, products are in place. Check if the order complete email is sending, then only emails from Smart Coupons will send. Also, check by switching your theme.

### How to regenerate and/or resend coupons

[↑ Back to top](#doc-title)

The feature is available from version [8.8.0](https://dzv365zjfbd8v.cloudfront.net/changelogs/woocommerce-smart-coupons/changelog.txt) and up.

Follow these steps:

1. Navigate to your WordPress Dashboard > WooCommerce > Orders.
2. Open an order for editing.
3. Under Order actions on the right, you can select **Regenerate coupons** or **Regenerate & resend coupon emails** or **Resend coupon emails** option (based on your requirement) from the dropdown menu and hit the arrow next to it.

### Does Smart Coupons allow printing of a coupon as Gift Card?

[↑ Back to top](#doc-title)

Yes, please refer it from here: [How to print coupons](https://woocommerce.com/document/smart-coupons/how-to-print-coupons/)

### Can I limit the number of characters in the generated coupon code?

[↑ Back to top](#doc-title)

Yes, from Smart Coupons v3.7.0+ you can. Go to WooCommerce > Settings > Smart Coupons. There you will find a setting named ‘Number of characters in auto-generated coupon code’. Modify it as per your needs.

### Is it possible to remove the Store Credit/Gift Certificate product from a shop page and show it on another page?

[↑ Back to top](#doc-title)

No, currently it is not possible.

### Is it possible to have a coupon for each variation of the variable product?

[↑ Back to top](#doc-title)

From version 4.11.0, you can add/link coupons to product variations as well. This feature is not available in a version lower than 4.11.0

### Can Store Credit be used as a Points system to refer/reward a friend?

[↑ Back to top](#doc-title)

No, Smart Coupons cannot be used as a Points system. Check [WooCommerce Points and Rewards](https://woocommerce.com/products/woocommerce-points-and-rewards/).

### Which should I use for Account Credit/Gift Certificates? Smart Coupons or PDF Product Vouchers?

[↑ Back to top](#doc-title)

Smart Coupons works like account credit and is linked to a specific account from the time you purchase. It works more like a gift card. If you purchase three x $10 credits to your store and link them all to your account email address, you receive 3 credits each of $10. You can gift these to others, but you need their email address, as they are linked to specific accounts.

[PDF Product Vouchers](https://woocommerce.com/products/pdf-product-vouchers/?utm_source=support%20website&utm_medium=woothemes%20referral&utm_campaign=standard%20links&utm_content=/knowledge-base/article/woocommerce/extensions/smart-coupons-vs-pdf-product-vouchers-for-gift-certificatesaccount-credit&utm_term=https://support.woothemes.com/hc/en-us/articles/203518075-Smart-Coupons-vs-PDF-Product-Vouchers-for-Gift-Certificates-Account-Credit) work more like a traditional paper gift certificate (in fact you make regular paper gift certificates with it), in that it gives you a coupon code that is redeemable for a specific amount of credit to your (physical) store. Your customers can purchase these for a friend, or themselves.

If you want something closer to a gift card, where the funds are linked to your online store account automatically and managed for you there, go with Smart Coupons.

If you want something more like a gift certificate, where you can print a few out for your buddies, but they will have to turn in the certificate at the (physical) store, you’re probably going to want [PDF Product Vouchers](https://woocommerce.com/products/pdf-product-vouchers/?utm_source=support%20website&utm_medium=woothemes%20referral&utm_campaign=standard%20links&utm_content=/knowledge-base/article/woocommerce/extensions/smart-coupons-vs-pdf-product-vouchers-for-gift-certificatesaccount-credit&utm_term=https://support.woothemes.com/hc/en-us/articles/203518075-Smart-Coupons-vs-PDF-Product-Vouchers-for-Gift-Certificates-Accohttps://woocommerce.com/products/smart-coupons/unt-Credit).

### What is the setting “Disable email restriction?”? How does it work? What it does?

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2022/11/smart-coupons-disable-email-restrictions-1.png?strip=all&w=704)

By default, any coupon that will be auto-generated (*on purchase of that product in which a coupon is linked under Product data > Coupons*) by the Smart Coupons plugin, the email address of the purchaser or the email address of the coupon receiver will be set under the **Usage restrictions > Allowed emails**.

In some cases, customers might want to disable this default behavior such that anyone having the coupon code can use the coupon. To disable this behavior store managers will have to **enable** “**Usage restrictions > Disable email restriction?**“.

**Note**: Coupon setting “**Disable email restriction?**” will be effective in only those coupons, in which the coupon setting **General > Auto generate new coupons with each item** is **enabled**. In other coupons, this setting will not have any effect even if it’s enabled.

A few problem statements & how to solve them:

#### 1. Smart Coupons plugin is automatically adding an email address to all the auto-generated coupons. How to stop this?

Smart Coupons does this to prevent unauthorized use (misuse) of coupons by someone else. To stop this, you’ll need to **enable** the setting **Disable email restriction?** under **Usage restrictions** tab of the **main/parent coupon** which is **linked with the product**. Enabling this option in the auto-generated (i.e. already generated) coupon will not have any effect.

#### 2. Can a customer send a gift certificate to themselves, to pass on to someone else?

Yes! By default, the coupon is restricted to the email recipient’s address, but you can disable this behavior by enabling the setting “**Usage restrictions > Disable email restriction?**“.

### I’m using WPML & WPML for multi-currency, but Smart Coupons only changes currency symbol and the price value remains the same.

[↑ Back to top](#doc-title)

Currently, Smart Coupons is compatible with [Aelia Currency Switcher for WooCommerce](https://aelia.co/shop/currency-switcher-woocommerce/). But it is not compatible with any other multi-currency plugin or with WPML.

### Is Smart Coupons compatible with WooCommerce Subscriptions?

[↑ Back to top](#doc-title)

Yes, it works with WooCommerce Subscriptions (separate purchase).

### Which features of Smart Coupons work with Subscriptions?

[↑ Back to top](#doc-title)

Give away a discount or credit on signing up a subscription, give away recurring discount or credits, apply credit during sign up, automatic payment for renewals from credit (Note: When using PayPal Standard Gateway, store credit can be applied only during sign up. Automatic payment for renewals by credit will not work for PayPal Standard Gateway).

### How does automatic payment by store credit work with Subscriptions?

[↑ Back to top](#doc-title)

Customers can apply the store credit on a subscription. If the same store credit has sufficient balance, it’ll keep applying it to renewals till the remainder in store credit is higher than the renewal price.

Customers will be able to apply store credit only during signup. They will not get an option to apply store credit in renewals. But if the store credit will not have sufficient balance to pay for the renewals, then the order will go into the pending mode. Now when the customer will go to pay for this renewal order, they’ll get an option to apply store credit again.

To activate the subscription again, the customer will have to pay for the renewals. When the customer is paying for the renewals from his/her account, then in that process he/she can use the same store credit which didn’t have the sufficient balance, again & pay for the remaining amount.

### Is it possible to partially pay for a subscription with store credit and the remainder by another method?

[↑ Back to top](#doc-title)

No, this is possible only in those cases where the subscription amount is more than the store credit’s balance. If store credit’s balance is more than the subscription’s total then your bank account or credit card will not be charged.

### Coupons not showing up?

[↑ Back to top](#doc-title)

Go to WooCommerce > Status > Tools. Locate WooCommerce Smart Coupons Cache and click the ‘Clear Smart Coupons Cache’ button next to it. Then have a check.

### How to set start date & time for a coupon?

[↑ Back to top](#doc-title)

To set a start date & time for a coupon, you can use the “Schedule post” feature of WordPress.

Set start date time for a coupon

### How to migrate gift cards from other WooCommerce Gift Cards plugins to Smart Coupons?

[↑ Back to top](#doc-title)

Export gift card data from other plugins into a CSV file. Reformat that data as per Smart Coupons format as shown in [this sample CSV](https://woocommerce.com/wp-content/uploads/2019/11/sample.csv) file. Once done, [import that CSV data](https://woocommerce.com/document/smart-coupons/how-to-import-coupons-in-bulk-using-a-csv-file/) into Smart Coupons. All your gift card data will be migrated into coupons for the Smart Coupons plugin.

### What is the setting “Disable Email restrictions?”? How does it work? What it does?

[↑ Back to top](#doc-title)

![Smart Coupons: Disable email backend](https://woocommerce.com/wp-content/uploads/2012/08/sc-disable-email-backend.png?strip=all&w=704)

By default, any coupon that will be auto-generated (*on purchase of that product in which a coupon is linked under Product data > Coupons*) by the Smart Coupons plugin, the email address of the purchaser or the email address of the coupon receiver will be set under the **Usage restrictions > Allowed emails**.

In some cases, customers might want to disable this default behavior such that anyone having the coupon code can use the coupon. To disable this behavior store managers will have to **enable** “**Usage restrictions > Disable Email restrictions?**“.

**Note**: Coupon setting “**Disable Email restrictions?**” will be effective in only those coupons, in which the coupon setting **General > Auto generate new coupons with each item** is **enabled**. In other coupons, this setting will not have any effect even if it’s enabled.

## How to increase the number of user roles that need to be checked for a user?

[↑ Back to top](#doc-title)

In WordPress, users can have multiple roles. The Smart Coupons plugin lets you restrict coupons based on user roles. While you can add more than 5 roles, the plugin only checks up to 5 by default during coupon validation. To increase this limit, add the following code snippet.

```
/**
 * Modify the limit of user roles to check
 *
 * @author StoreApps.org
 *
 * @return integer
 */    
add_filter( 'wc_sc_max_user_roles_limit', function() {
    return 10; // You can modify the number 10 to the maximum number of user roles that is assigned to a user.
} );
```

You can add the above code to your site by following either of the methods mentioned in this: [How to properly add WooCommerce custom code](https://woocommerce.com/posts/properly-add-woocommerce-custom-code/).

**Note**:

- This code is not required when you have five or less than five user roles assigned to a user.
- This code will work with Smart Coupons version 7.5.0+

## How can I customize the coupon display on the cart and checkout pages?

[↑ Back to top](#doc-title)

Go to **WordPress Dashboard > WooCommerce > Settings > Smart Coupons > Display Coupons**. Here, you can choose whether to show or hide the available coupons section on the cart and checkout pages. You can also control the default behavior for hiding this section when no coupons are available.

## Does the Store Credit show the used balance on the cart and checkout pages?

[↑ Back to top](#doc-title)

Yes, Store Credit shows the used balance on the cart and checkout page of the individual coupon.

![](https://woocommerce.com/wp-content/uploads/2019/11/Cart-balance.png?w=738)

---

[← WooCommerce Smart Coupons Documentation](https://woocommerce.com/document/smart-coupons/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

WooCommerce Subscriptions is a WooCommerce extension that lets customers subscribe to your products or...
				![](https://woocommerce.com/wp-content/uploads/2012/07/Table_Rate_Shipping_icon-marketplace-160x160-2.png)

### Table Rate Shipping

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Advanced, flexible shipping. Define multiple shipping rates based on location, price, weight, shipping class or item count.

---

