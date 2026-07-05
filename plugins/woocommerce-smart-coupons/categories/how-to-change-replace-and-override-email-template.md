# How To Change Replace And Override Email Template

*Category from WooCommerce Smart Coupons documentation*

---

## How to change, replace and override email template

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-change-replace-and-override-email-template/](https://woocommerce.com/document/smart-coupons/how-to-change-replace-and-override-email-template/)

# How to change, replace and override email template

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

This doc article explains how you can change, replace, and override the coupons’ email template using both no-code-based and code methods.

## Before You Begin

[↑ Back to top](#doc-title)

- Make sure the Smart Coupons plugin is installed and active
- It is recommended to use a child theme if you plan to override templates
- Avoid editing plugin files directly, as your changes will be lost during updates

To change the email layout, there are two methods to do so.

## Method 1: Using Email Customizer Pro (No Code)

[↑ Back to top](#doc-title)

If you prefer a simpler approach without editing code, you can use [Email Customizer Pro for WooCommerce](https://woocommerce.com/products/email-customizer-pro/).

This plugin lets you visually customize WooCommerce and Smart Coupons emails using a live preview editor.

## Method 2: Override Templates via Theme

[↑ Back to top](#doc-title)

WooCommerce allows you to override plugin templates by copying them into your theme.

### Step 1: Locate the Template File

[↑ Back to top](#doc-title)

The Smart Coupons email templates can be found inside the plugin folder.

```
wp-content/plugins/woocommerce-smart-coupons/templates/
```

For example:

- ```
email.php
```
- Other related email templates depending on the email type

### Step 2: Copy the Template to your Theme

[↑ Back to top](#doc-title)

Copy the required template file into your theme using the same folder structure:

```
wp-content/themes/your-theme/woocommerce-smart-coupons/
```

For example:

```
wp-content/themes/your-theme/woocommerce-smart-coupons/email.php
```

The copied file will now override the WooCommerce Smart Coupons default template file.

### Step 3: Customize the Template

[↑ Back to top](#doc-title)

You can now safely edit the copied file. Changes made here will override the default plugin template.

You can modify:

- Email content
- Layout and structure
- Text and messaging
- HTML styling

You can follow this same method for these email templates of the Smart Coupons plugin:

1. ```
combined-email.php
```

 – This email template is used when two or more coupons are sent via a single email. The setting is available under **WooCommerce > Settings > Smart Coupons > Send coupon form > Combine emails**.
2. ```
acknowledgement-email.php
```

 – This email template is used when an email is sent from the store to the purchaser of the coupons, acknowledging that the purchaser has sent some coupons to someone else.
3. ```
gift-card-email.php
```

 – This email template is used when the Gift Card / Gift Certificate has an [image attached](https://woocommerce.com/document/how-to-upload-an-image-for-gift-cards/) to it.
4. ```
expiry-reminder-email.php
```

 – This email template is used when you have enabled [reminder emails](https://woocommerce.com/document/smart-coupons/how-to-set-up-a-reminder-email-for-expiring-coupons/) for coupons that are about to be expired in X number of days.
5. ```
unused-coupon-reminder.php
```

 – This email template is used when coupons are [unused for x number of days](https://woocommerce.com/document/how-to-setup-reminder-email-for-unused-coupons/).

**Important Notes**

1. We recommend using a child theme if you are overriding templates. This ensures your changes are safe during theme updates. Read more here: [Set up and use a child theme](https://developer.woocommerce.com/docs/theming/theme-development/set-up-a-child-theme).
2. Do not edit files inside the plugin directory directly.
3. Always test email changes on a staging site before applying to production.
4. Template overrides may require updates if the plugin changes its structure in future versions.
5. Template overrides and code changes are considered customizations. While guidance can be provided, support cannot cover custom implementations specific to your store. Proceed only if you are comfortable with PHP, debugging, and maintaining custom code.

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

