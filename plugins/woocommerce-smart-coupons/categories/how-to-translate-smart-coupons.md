# How To Translate Smart Coupons

*Category from WooCommerce Smart Coupons documentation*

---

## How to translate Smart Coupons

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-translate-smart-coupons/](https://woocommerce.com/document/smart-coupons/how-to-translate-smart-coupons/)

# How to translate Smart Coupons

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

This doc article explains how you can translate texts of the Smart Coupons plugin.

It is possible to translate Smart Coupons texts in your language. There are various methods to translate a plugin. If those methods are not working, you can try following steps, as these steps are tested:

1. Check 
```
wp-config.php
```

 file, whether 
```
WP_LANG_DIR
```

 is already defined. If not, add the following line in your 
```
wp-config.php
```

 file: 

```
define ('WP_LANG_DIR','/home/{user}/public_html/{wordpress_directory}/wp-content/languages');
```
2. Now go to this path: 
```
/home/{user}/public_html/{wordpress_directory}/wp-content/languages
```
3. Create a **new directory** & name it as **woocommerce-smart-coupons**
4. Install & activate a free WordPress plugin: [Loco Translate](https://wordpress.org/plugins/loco-translate/).
5. Navigate to **Loco Translate > Manage translations** from the sidebar admin menu
6. Under Plugins, locate ‘**WooCommerce Smart Coupons**’.
7. Check if a language file for your language already exists. If it exists, click to edit, If not, click New language to add the translation for your language
8. Select your language from the dropdown menu & click Start translating.
9. You’ll see 2 columns: left containing texts from the plugin. Select one of them & add translated text for this from below. Repeat the steps for other texts also.
10. Once done, save it using the Save button. If sufficient permissions for saving are not there, download the PO & MO file.
11. Upload these files to: 
```
/home/{user}/public_html/{wordpress_directory}/wp-content/languages/woocommerce-smart-coupons
```
12. Make sure these files have proper read permission otherwise, texts will not be translated.
13. You can also place these PO & MO files inside the languages directory of the plugin, but it is not recommended, as you’ll lose it when you’ll update the plugin.

Now Smart Coupons should display your texts.

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

