# Add Google Tag Manager With A Child Theme

*Category from Starter Templates by Kadence WP documentation*

---

## Adding Google Tag Manager with a child theme or code snippet plugin

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/add-google-tag-manager-with-a-child-theme/](https://www.kadencewp.com/help-center/docs/kadence-theme/add-google-tag-manager-with-a-child-theme/)

There are a number of ways to add Google Tag Manager code to your WordPress website. If you are using Kadence Pro, you can easily add your Google Tag Manager code snippets to your WordPress site using the WordPress Customizer. We’ve got a [blog post](https://www.liquidweb.com/wordpress/seo/how-to-install-google-analytics/) overview of how to do that available. It’s just one of many reasons that you might consider getting a Kadence Plan.

If you don’t have Kadence Pro, however, it’s still easy to add Google Tag Manager code snippets to your WordPress site. These methods include using a Child Theme and editing the theme files or using a plugin.

## Why should you use Google Tag Manager?

There are a number of reasons why you might want to use Google Tag Manager. Google explains the benefits themselves [here](https://marketingplatform.google.com/about/tag-manager/benefits/). In short, Google Tag Manager gives you the ability to do much more with understanding your audience and how they use your site. You gain the capability to add and update your own tags for conversion tracking, site analytics, remarketing. You can even add specific events that, when they are triggered by a user, specific information is added to your analytics so you can better understand your audience.

It also means that when you add, update, or remove any of this tracking, you don’t need to change anything on your site. All of the changes occur on your [Google Tag Manager](https://tagmanager.google.com/) account, and they even keep a record of all of the changes you make, so that you can easily revert changes or see quickly what changes happened when. This additional version control is something you just can’t see unless you are managing your site code with a repository like GitHub. Google Tag Manager has a number of benefits, and we highly recommend using it to manage your analytics and other marketing initiatives.

## Using a plugin to add Google Tag Manager to your site

For many people who don’t want to look under the hood of WordPress, a plugin to add code snippets is the easiest way to get the same functionality, including adding Google Tag Manager code to your site. There are a number of plugins that will do this for you.

[Google Site Kit](https://wordpress.org/plugins/google-site-kit/). Google Site Kit adds quite a bit of functionality to your WordPress site including the ability to add your Google Tag Manager code.

[Google Analytics and Google Tag Manager Plugin](https://wordpress.org/plugins/wk-google-analytics/). This very simple plugin helps you add your Google Tag Manager code to your site without a lot of fanfare or extra bloat. Simple and easy to use.

[Flying Analytics](https://wordpress.org/plugins/flying-analytics/). This is another easy to use plugin that helps you add your Google Tag Manager codes to your site without much extra functionality.

## Using a Child Theme

If you don’t want to use a plugin or don’t have Kadence Pro to quickly add your Google Tag Manager code to your site, a child theme is an option. This might make the most sense if you already have a child theme in place for other reasons.

Our suggestion would be to add hooks to the top of your page  using the built-in WordPress hooks to ensure your Google Tag Manager code is added to the head tag just after the opening body tag. You can do so by adding functions to your child theme functions.php file. Using the code below, add your GTM codes below the commented line to start using Google Tag Manager for your WordPress site.

```
<?php
/**
 * Add google tag manager code in head tag.
 */
function custom_add_gtm_code() {
?>
<!--  Add your GTM Code below this line -->

<?php
}
add_action( 'wp_head', 'custom_add_gtm_code' );

/**
 * Add google tag manager noscript just after opening body tag.
 */
function custom_add_gtm_code_noscript() {
?>
<!--  Add your GTM noscript Code below this line -->

<?php
}
add_action( 'wp_body_open', 'custom_add_gtm_code_noscript' );
```

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

