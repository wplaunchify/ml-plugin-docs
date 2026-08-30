# Tag Groups Integrations

*Category from TaxoPress documentation*

---

## Integration with WooCommerce Attributes

**Source:** [https://taxopress.com/docs/integration-with-woocommerce/](https://taxopress.com/docs/integration-with-woocommerce/)

Tag Groups Pro is able to show tags and groups among product attributes. This feature heavily depends on the template and was tested with the default and other themes. It therefore may not work with all themes.

Follow these steps:

1. Go to the **Taxonomies** settings and enable “Product tags”.
2. Go to the **Back End** settings, **Meta Box** tab, and enable the Meta Box for “Product tags”.
3. Go to the **Front End** settings, **WooCommerce** tab and activate “Display tag groups with WooCommerce attributes”.
4. Go to a product and use the Meta Box to add tags in groups.

---

## Does Tag Groups Work with the Polylang Plugin?

**Source:** [https://taxopress.com/docs/does-tag-groups-premium-work-with-the-polylang-plugin/](https://taxopress.com/docs/does-tag-groups-premium-work-with-the-polylang-plugin/)

Tag Groups was developed to work with the [WPML plugin](https://wpml.org/). Since the Polylang plugin tries to emulate some of the WPML functions, users have reported that Tag Groups also works well with Polylang.

Although we try to ensure also the compatibility with Polylang, we are currently only able to ensure the compatibility with WPML.

You can test most of the features that are relevant for translating your website with the free Tag Groups plugin.

---

## Translating Tag Group Names With WPML

**Source:** [https://taxopress.com/docs/wpml/](https://taxopress.com/docs/wpml/)

Translating tag group names in the Tag Groups plugin is possible with the [WordPress Multilingual (WPML) plugin](https://wpml.org).

Before you start, you need to set up WPML with all required languages.

Then you open the Tag Groups admin page where you create and edit tag groups. This page will not look much different from what you are used to. But now you can edit the names of the groups for each language independently.

All you need to do is to switch to another language in the admin bar and edit the names of the tag groups. If you now change the language, you will notice that the group names will change accordingly.

## Where The Translations Show Up

- On all **admin pages**, you see the group names that correspond to the language that you see in the admin bar.
- On the **front end**, the group names match the language of the page.

## Some More Details

- If you create a new group while you use a language that is not your default language, the default language will first receive its group name from that translated language so that it won’t remain empty.
- The order of the groups is the same across all languages.
- The label “not assigned” remains untranslated on your back end. On the front end you can choose the translation in the shortcode or Gutenberg block.
- Each language version of a tag can belong to a different group.((Because WPML internally treats them as different tags.))
- If you create a translation of a tag, the translated tag will receive the groups of the original tag, unless you set different groups during the translation. You can change this behavior in the settings.

This feature is available both with the Free and the Pro version of Tag Groups.

---

