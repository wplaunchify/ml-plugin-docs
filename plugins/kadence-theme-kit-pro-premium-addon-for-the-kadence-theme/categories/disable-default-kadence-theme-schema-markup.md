# Disable Default Kadence Theme Schema Markup

*Category from Kadence Theme Kit Pro - Premium addon for the Kadence Theme documentation*

---

## Disable Default Kadence Theme Schema Markup

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/disable-default-kadence-theme-schema-markup/](https://www.kadencewp.com/help-center/docs/kadence-theme/disable-default-kadence-theme-schema-markup/)

## What is Microdata?

HTML Microdata is a way to add semantic meaning to your web content by embedding metadata within your HTML elements using a standardized format. This metadata helps search engines and other tools better understand the content of your website, which can improve things like search result visibility.  If you’re interesting in reading more about microdata, see: [Getting started with schema.org using Microdata](https://schema.org/docs/gs.html).

The Kadence Theme adds microdata to various HTML elements by default to help search engines better understand your site’s content.

## How To Disable Kadence Microdata

If you’re using a third-party SEO plugin (such as **Yoast SEO**, **Rank Math**, or **SEOPress**) that handles schema markup, you can easily disable the Kadence microdata and prevent duplicate or conflicting structured data.   You can do this in one of two ways:

### Using the Customizer

Go to **Appearance** → **Customize** and click on **General** and then **Performance**. Turn off the “**Enable Microdata Schema**” option and save your changes.![Customizer Microdata setting](https://res.cloudinary.com/lwcom/images/w_596,h_340,c_scale/f_auto,q_auto/v1780523764/prod/Screenshot-2026-06-03-at-4.55.32-PM/Screenshot-2026-06-03-at-4.55.32-PM.png?_i=AA)
### Adding a PHP Code Snippet

If you prefer to use code snippets, you can add a filter to turn off the Kadence microdata feature. Note that adding this snippet will override the Customizer setting mentioned above. For more information about adding code snippets, see this document: **How to add a custom filter or function with Code Snippets**.

Add the following PHP code snippet:

```
add_filter( 'kadence_microdata', '__return_false' );
```

## How To Test Your Microdata

To test your site’s microdata, there are various online tools that will show how your microdata will appear in search and/or allow you to validate your structured data:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

## Disable Default Kadence Theme Schema Markup

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/disable-default-kadence-theme-schema-markup/](https://www.kadencewp.com/help-center/docs/kadence-theme/disable-default-kadence-theme-schema-markup/)

## What is Microdata?

HTML Microdata is a way to add semantic meaning to your web content by embedding metadata within your HTML elements using a standardized format. This metadata helps search engines and other tools better understand the content of your website, which can improve things like search result visibility.  If you’re interesting in reading more about microdata, see: [Getting started with schema.org using Microdata](https://schema.org/docs/gs.html).

The Kadence Theme adds microdata to various HTML elements by default to help search engines better understand your site’s content.

## How To Disable Kadence Microdata

If you’re using a third-party SEO plugin (such as **Yoast SEO**, **Rank Math**, or **SEOPress**) that handles schema markup, you can easily disable the Kadence microdata and prevent duplicate or conflicting structured data.   You can do this in one of two ways:

### Using the Customizer

Go to **Appearance** → **Customize** and click on **General** and then **Performance**. Turn off the “**Enable Microdata Schema**” option and save your changes.![Customizer Microdata setting](https://res.cloudinary.com/lwcom/images/w_596,h_340,c_scale/f_auto,q_auto/v1780523764/prod/Screenshot-2026-06-03-at-4.55.32-PM/Screenshot-2026-06-03-at-4.55.32-PM.png?_i=AA)
### Adding a PHP Code Snippet

If you prefer to use code snippets, you can add a filter to turn off the Kadence microdata feature. Note that adding this snippet will override the Customizer setting mentioned above. For more information about adding code snippets, see this document: **How to add a custom filter or function with Code Snippets**.

Add the following PHP code snippet:

```
add_filter( 'kadence_microdata', '__return_false' );
```

## How To Test Your Microdata

To test your site’s microdata, there are various online tools that will show how your microdata will appear in search and/or allow you to validate your structured data:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

