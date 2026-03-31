# Troubleshooting Translation Issues

*Category from WooCommerce Subscriptions documentation*

---

## Translating WooCommerce Subscriptions – Troubleshooting Translation Issues

**Source:** [https://woocommerce.com/document/subscriptions/troubleshooting-translation-issues/](https://woocommerce.com/document/subscriptions/troubleshooting-translation-issues/)

# Translating WooCommerce Subscriptions – Troubleshooting Translation Issues

			Like other extensions sold on WooCommerce.com, WooCommerce Subscriptions is translation-ready. However, in some cases, you may find the translations not working or that you need to create your own. Here are some tips to help troubleshoot your translation of WooCommerce Subscriptions.

We have [an extensive guide on translating WooCommerce extensions](https://woocommerce.com/document/translate-woocommerce-extensions/). Check that out for the basics, and use this page for questions specific to the Subscriptions extension.

## Are translations available for Subscriptions?

[↑ Back to top](#doc-title)

There are [translations for several languages](https://translate.wordpress.com/projects/woocommerce/extensions/woocommerce-subscriptions/) available in the WordPress.org translations that can be added to your site. For any of these languages, here’s how to add the translation:

1. Install the WooCommerce Subscriptions extension on your site (WordPress can only search for translations for installed extensions)
2. Change the language of your site via **Settings > General**
3. Navigate to **Dashboard > Updates**in your site’s admin area.
4. Scroll to the bottom of the page, and select **“Update Translations”** under the **Translations** heading – WordPress will search for existing translations for your site’s language.

## I can’t get the translation to show up on the site

[↑ Back to top](#doc-title)

We have [an extensive guide on translating WooCommerce extensions](https://woocommerce.com/document/translate-woocommerce-extensions/) that includes tips on troubleshooting translations. That’s the best place to start.

## How to create your own translation for the extension

[↑ Back to top](#doc-title)

We have [an extensive guide on translating WooCommerce extensions](https://woocommerce.com/document/translate-woocommerce-extensions/) that includes tips on troubleshooting translations. That’s the best place to start.

We also know of a [community-sourced German translation for Subscriptions](http://Free German translation file:  https://christophrado.de/wordpress/deutsche-sprachdatei-fuer-woocommerce-subscriptions/).

## I can’t get a certain string to translate

[↑ Back to top](#doc-title)

You’ll want to check that the string is available in the translation tool of your choice; see the [guide on translating WooCommerce extensions](https://woocommerce.com/document/translate-woocommerce-extensions/) for an overview.

If you’re having trouble finding a string to translate, it may be because some strings use placeholders such as 
```
%1$s every %2$s
```

. If you are searching for a phrase or sentence that can change depending on the way your subscription product is configured, that’s a good clue that there will be placeholder strings. If you can’t find the exact phrase that you want to translate, search for keywords/phrases instead of the exact phrase.

For Loco Translate, you may also need to press “Sync” to update the strings from the template after updating Woo Subscriptions.

If you’re having trouble with .po files, you’ll see that each string is registered and translated this way

- **msgid”Subscriptions”**: This is the default string (the one that is defined in the code). You don’t need to modify this string. You need to keep it as a reference to the string that you’re translating.
- **msgstr””** : This is where the translation should be added (for example:  **msgstr “Subscripciones”**). If the string was defined with a context, you’ll also see a **msgctxt** line with the context specified in the gettext function. You can translate these .po files editing them in a code editor and providing the proper translations in each **msgstr**line, or you can use a program like [PoEdit](https://href.li/?https://poedit.net/) to translate them in a GUI.

We only support translation of the strings that are included in our code in gettext functions, as described above. Strings inside JavaScript code can be translated, but require the localization of the string and sending the translation of these strings in a variable. Here is a solid explanation and example: [https://developer.wordpress.org/reference/functions/wp_localize_script/](https://href.li/?https://developer.wordpress.org/reference/functions/wp_localize_script/)

## Translations aren’t working after updating the site

[↑ Back to top](#doc-title)

If your translation was working before, but isn’t anymore, it’s likely that a plugin update overwrote your translations. This can happen when you are using your own custom translation (i.e. a custom .mo file). To avoid this, include the translation files in either:

- A languages folder within the Woo Subscriptions plugin’s folder, e.g. 
```
/wp-content/plugins/woocommerce-subscriptions/languages/woocommerce-subscriptions-en_AU.mo
```
- Within the default WordPress languages folder e.g. 
```
/wp-content/languages/plugins/woocommerce-subscriptions-en_AU.mo
```

.

The second of these options helps make your translation upgrade safe by preventing your language files from being deleted each time you upgrade the plugin.

**Note:** the default WordPress languages folder can be changed with the [WP_LANG_DIR constant](https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#language-and-language-directory).

[WPML](http://wpml.org/) or [Loco Translate](https://woocommerce.com/document/woocommerce-localization/#creating-custom-translations-with-Loco-Translate) can be used to manage translations instead of managing translations yourself. See our documentation on [translating WooCommerce](https://woocommerce.com/document/woocommerce-localization/) for more information.

If you are using Loco Translate to manage your translations, and translations aren’t showing on the live site, make sure that you’ve pressed “Sync” to sync the translations. You may also need to clear your browser cache and the Subscriptions cache in WooCommerce > Status > Tools. Loco Translate also has helpful FAQs about translating WooCommerce if you encounter issues.

## My site is hosted on WordPress.com – how do I request a translation string update?

[↑ Back to top](#doc-title)

We maintain these translations internally. Please get in touch with us so that we can make the change on our end.

## Questions and support

[↑ Back to top](#doc-title)

**Something missing from this documentation? Still have questions and need assistance?**

- If you have a question about a specific extension or theme you’d like to purchase, [contact us](https://woocommerce.com/contact-us/#sales-form) to get answers.
- If you already purchased this product and need some assistance, get in touch with a Happiness Engineer via our [support page](https://woocommerce.com/my-account/create-a-ticket/) and select this product’s name from the Product dropdown.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to content/products and member discounts.
				![](https://woocommerce.com/wp-content/uploads/2019/03/All_Products_Woo_Subscriptions_icon-marketplace-160x160-2.png)

### All Products for WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer your existing products on subscription, with this powerful add-on for WooCommerce Subscriptions.

---

