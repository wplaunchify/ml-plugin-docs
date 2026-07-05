# How To Customize Coupon Style Smart Coupons

*Category from WooCommerce Smart Coupons documentation*

---

## How to customize coupon styles in Smart Coupons

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-customize-coupon-style-smart-coupons/](https://woocommerce.com/document/smart-coupons/how-to-customize-coupon-style-smart-coupons/)

# How to customize coupon styles in Smart Coupons

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

This doc article explains how you can change coupon style and design coupons to display them on your site and also in the emails.

## Coupon designs/styles location

[↑ Back to top](#doc-title)

Go to your **WordPress Admin panel > WooCommerce > Settings > Smart Coupons**. You will find all the available coupon designs for your website under ‘**Styles**’ and for email under ‘**Style for email**’.

These designs are made keeping in mind the flexibility and the ease they will offer to users. The coupon design system has **two parts**: **Colors** & **Styles**.

![Smart Coupons Styles](https://woocommerce.com/wp-content/uploads/2019/10/smart-coupons-coupon-styles.png?strip=all&w=704)

### Colors

[↑ Back to top](#doc-title)

You get a set of predefined colors/color schemes. Choose one color scheme of your choice from the available options. When you choose one color scheme, you will see the changes immediately on the same page under Styles. This will make it easier to choose a color scheme for coupons for your website.

### Styles

[↑ Back to top](#doc-title)

Same as Colors, a set of predefined Styles are provided for coupons. Choose one style that can match the look of your website.

## Customizing coupon styles

[↑ Back to top](#doc-title)

You can customize both the coupon components: colors & styles.

### Customizing colors

[↑ Back to top](#doc-title)

If the predefined color schemes don’t match your website’s color scheme, you can make one color scheme of your choice under ‘**Customize colors**’. With this setting, you’ll be able to set three colors of your choice.

### Customizing styles

[↑ Back to top](#doc-title)

Sometimes, you may need to remove some part of the coupon that is displayed on your website, add some more details or completely replace the style with your own style. It’s possible to do it with the Smart Coupons 4.9.0 version onwards. Let’s see how it can be done:

1. Select one coupon style from the Styles which is closer to your desired result and Save the settings.
2. Now, we’ll need to find the template file for the selected coupon style that we’ll override. Here’s the list of coupon styles & their respective template file.
 | Coupon style | Template file |
| --- | --- |
|  | basic.php |
|  | clipper.php |
|  | cutout.php |
|  | deal.php |
|  | deliver.php |
|  | festive.php |
|  | flat.php |
|  | promotion.php |
|  | shipment.php |
|  | special.php |
|  | ticket.php |
|  | email-coupon.php |
3. Go to the file path – 
```
wp-content/plugins/woocommerce-smart-coupons/templates/coupon-design/
```

.
4. Find the template for your coupon styles in the mentioned path.
5. Once found, copy that template file & paste at this path – 
```
wp-content/themes/{child-theme}/woocommerce/coupon-design/
```

.
6. If you find any folder missing in the above-mentioned path, you can create those directories.
7. Now open this template file in an editor.
8. Make the changes as per your choice, like removing an element, changing any text, adding more details like CSS, etc
9. Once you’re done with the changes, **save** this file.

That’s it.

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

