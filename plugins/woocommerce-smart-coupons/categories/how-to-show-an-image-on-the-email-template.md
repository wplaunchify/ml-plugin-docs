# How To Show An Image On The Email Template

*Category from WooCommerce Smart Coupons documentation*

---

## How to show an image on the email template

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-show-an-image-on-the-email-template/](https://woocommerce.com/document/smart-coupons/how-to-show-an-image-on-the-email-template/)

# How to show an image on the email template

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers, extending the core functionality of WooCommerce coupons.

This doc explains how you can add an image to the auto generated coupon email template using the Smart Coupons plugin. Coupons that are sent using the Smart Coupons plugin can be overridden by simply overriding the email templates.

**Note**: This is a Developer level doc. If you are unfamiliar with code/templates and are resolving potential conflicts, you may need to hire a developer for assistance.

## Steps to add an image to an email via template overriding

[↑ Back to top](#doc-title)

1. Navigate to WordPress admin panel. Go to **WooCommerce > Settings**.
2. Click on the **Emails** tab. You will find all the email templates available.
3. For now, let’s try to add an image to the ‘**Smart Coupons – Auto generated coupon email**’ email template. Click on the ‘**Manage**’ button.
4. You can change the subject and email headings as you like, if needed. Click on the ‘**Copy file to theme**’ button. 
![Smart Coupons - Copy template file to theme](https://woocommerce.com/wp-content/uploads/2024/06/copy-file-to-theme.png?strip=all&w=704)
5. Connect to your hosting environment either using FTP or CPanel. Navigate to the directory 
```
wp-content/themes/{your-theme}/woocommerce/email.php
```

 file. Add an 
```
<img>
```

 tag and source of the image, as shown in the screenshot below. 
![Smart Coupons - Adding image to email template](https://woocommerce.com/wp-content/uploads/2024/06/adding-image-to-email.png?strip=all&w=704)
6. Once you have added the code, you can test this by navigating to the ‘**Marketing > Coupons > Bulk Generate**’ tab.
7. Add the ‘**Number of coupons to generate**’ as **1**. Select ‘**Email to recipients**’. In ‘**Send to**’, add your email address.
8. Click on the “**Preview Email**” button to see a preview of the image on the email template, or you can select a **discount type** and **amount** and hit the **Apply** button.
9. You will receive an email as to how the image looks on your ‘**Coupon email**’ template. 
![Smart Coupons - Image on email template](https://woocommerce.com/wp-content/uploads/2024/06/image-on-email-with-banner.png?strip=all&w=704)

Thats it.

The copied file will now override the WooCommerce Smart Coupons default template files.

You can follow this same method for these email templates of the Smart Coupons plugin:

1. ```
combined-email.php
```

 – This email template is used when the setting under WooCommerce > Settings > Smart Coupons > Combine emails is enabled.
2. ```
acknowledgement-email.php
```

 – This email template is used when an email is sent from the store to the purchaser of the coupon who has sent some coupons to someone else to acknowledge the purchaser of the coupons.

**Tips:**

To know more about overriding email templates and coupon designs, the following docs can help:
1. [How to override email templates.](https://woocommerce.com/document/smart-coupons/how-to-change-replace-and-override-email-template/)
2. [How to override coupon designs.](https://woocommerce.com/document/smart-coupons/how-to-customize-coupon-style-smart-coupons/)

[← WooCommerce Smart Coupons Documentation](https://woocommerce.com/document/smart-coupons/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

WooCommerce Subscriptions is a WooCommerce extension that lets customers subscribe to your products or services and pay on a weekly,...
				![](https://woocommerce.com/wp-content/uploads/2012/07/Table_Rate_Shipping_icon-marketplace-160x160-2.png)

### Table Rate Shipping

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Advanced, flexible shipping. Define multiple shipping rates based on location, price, weight, shipping class or item count.

---

