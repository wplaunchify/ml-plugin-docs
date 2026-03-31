# Subscriptions Handles Staging Sites

*Category from WooCommerce Subscriptions documentation*

---

## How Subscriptions Handles Staging Sites and Migrations

**Source:** [https://woocommerce.com/document/subscriptions/subscriptions-handles-staging-sites/](https://woocommerce.com/document/subscriptions/subscriptions-handles-staging-sites/)

# How Subscriptions Handles Staging Sites and Migrations

			WooCommerce Subscriptions can handle staging sites and site migrations. Many hosts provide an easy way to create a clone of your website for testing changes. This is called a[staging site](https://woocommerce.com/posts/what-is-staging-site-wordpress-how-to-set-one-up/).

To prevent processing duplicate payments on a clone of your site, WooCommerce Subscriptions disables automatic payments and subscription-related emails when it detects that the current site’s URL differs from the URL of the site where you first activated the extension.

## What is Considered a Staging Site?

[↑ Back to top](#doc-title)

WooCommerce Subscriptions will keep a record of the URL of the site where it is first activated. It considers this to be the *live site* and will run in live mode. If the site’s URL then changes, it considers the new site to be a *staging site* and it will run in staging mode.

This means if you first activate Subscriptions on a staging site, **Subscriptions will run in live mode on the staging site because it considers this site to actually be your live site**.

Because of this, if you want to test Subscriptions on a staging site before running it on your live site, we recommend **first activating it on the live site and then creating the staging site from that site’s database**.

**Developer Note:** WooCommerce Subscriptions stores an obscured clone of the WordPress 
```
siteurl
```

 value in an option with the name 
```
wc_subscriptions_siteurl
```

. It compares this value with the 
```
siteurl
```

 value to see if it has changed.

## Duplicate Site Warning

[↑ Back to top](#doc-title)

You will know when the site is in staging mode because Subscriptions will display a warning in the administration area of your site. This notice also shows which URL Subscriptions considers to be the live site.

![The staging site warning states that automatic payments and subscription-related emails are disabled on staging/test environments, and indicates which site is considered the live site.](https://woocommerce.com/wp-content/uploads/2015/05/staging_site_notice.png?strip=all&w=704)Staging Site Notice

Subscriptions will also display a staging badge next to the **WooCommerce > Subscriptions** menu item when a store is in Staging Mode.

### Check if Staging Mode is Enabled

If you are unsure whether you or another administrator on the site has dismissed the notice and want to check if the store is running in Staging mode, you can:

1. Go To **WooCommerce**
2. Check the Subscriptions menu item. A red bubble displaying the word *Staging* indicates the site is in Staging Mode. The absence of any indicator except “Subscriptions” indicates the site is in *Live Mode*.

Whether the store is running in Staging or Live mode also shows on the Status page. Here is how to find it:

1. Go To **WooCommerce > Status**
2. Scroll down to **Subscriptions Mode**
3. Check the value. A red X displaying the word *Staging* indicates the site is in Staging Mode. A tick mark displaying the word *Live* indicates the site is in Live Mode.

You will find a row labeled Subscriptions Live URL below this section. This shows the URL that Subscriptions considers to be the live site.

![A red staging bubble is indicated next to WooCommerce > Subscriptions menu.](https://woocommerce.com/wp-content/uploads/2018/07/subscriptions-duplicate-site-menu-item-badge.png?strip=all&w=704)Subscriptions staging mode indicator

![Staging mode indicator in system status](https://woocommerce.com/wp-content/uploads/2018/07/system-status-entry-for-a-site-in-staging-mode.png?strip=all&w=704)Staging mode indicator in the System Status

![Live site URL in system status](https://woocommerce.com/wp-content/uploads/2015/05/staging_site_status_url.png?strip=all&w=704)Subscriptions Live Site URL

## Manual Renewals in Staging Mode

[↑ Back to top](#doc-title)

In order to prevent collecting duplicate payments from your customers on a staging site, all subscriptions on the staging site will use the[manual renewal process](https://woocommerce.com/document/subscriptions/renewal-process/#manual-recurring-payments). Your live site will continue to take payments as normal. When this occurs, all the subscriptions listed in the **WooCommerce > Subscriptions** admin table will be *Manual Renewal*. To view the “live” payment method, you can hover over the 
```
?
```

 to display the note.

![Staging site subscription's payment method note](https://woocommerce.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-28-at-1.28.18-pm.png?w=950)Staging site subscription’s payment method note

If you edit a subscription while the site is in staging mode, the system sets the payment method in the Billing details to Manual Renewal. You can edit the payment method, and these changes will take effect if/when you switch the site to live mode.

![Manual renewal indicated in Billing details](https://woocommerce.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-28-at-1.50.49-pm.png?w=950)

If you want to take automatic payments on your staging site site, it is possible to[enable automatic payments](#enabling-automatic-payments-on-a-staging-site).

## Enabling Automatic Payments on a Staging Site

[↑ Back to top](#doc-title)

To switch your site from *Staging Mode* to *Live Mode*:

1. Make sure you’re within the WordPress admin area, e.g. 
```
example.com/wp-admin/
```
2. Select the **Enable Automatic Payments** button displayed in the staging site notice.

If at first you chose the **Quit Nagging Me** option, or perhaps this notice is missing, and you want to *enable automatic payments* on the staging site, you can do the following:

1. Go to 
```
example.com/wp-admin/?wcs_display_staging_notice=true
```

 while logged in as an administrator, replacing 
```
example.com
```

 with your site’s URL.

If this doesn’t help, you still have options, but this involves editing and accessing the database directly. We’d recommend backing up your site and database before using this method.

1. Access your database via [PhpMyAdmin](https://codex.wordpress.org/phpMyAdmin) if your host provides it (or install a plugin like WP phpMyAdmin).
2. Search the 
```
wp_options
```

 table for an option with the 
```
option_name
```

 of 
```
'wcs_ignore_duplicate_siteurl_notice'
```

.
3. Change the option value of the 
```
'wcs_ignore_duplicate_siteurl_notice'
```

 option to **“false.”**
4. Save the changes to the option value.

The staging site notice should reappear and you can choose to *Enable automatic payments* from there.

You can also use the [WooCommerce Subscriptions Upstage plugin](https://github.com/woocommerce/woocommerce-subscriptions-upstage) to trigger automatic payments for specific subscription IDs on your staging site.

## Email Behavior in Staging Mode

[↑ Back to top](#doc-title)

Subscriptions in staging modewill not send any[subscription-related emails](https://woocommerce.com/document/subscriptions/store-manager-guide/#subscription-emails). **Any emails sent or managed by WordPress, WooCommerce, or another plugin may still be sent from your staging site.** To block all emails from your site, install a plugin like [Disable Emails](https://wordpress.org/plugins/disable-emails/).

If you want to send subscription-related emails on your staging site, it is possible to enable the feature to [send subscription-relation emails](https://woocommerce.com/document/subscriptions/subscriptions-handles-staging-sites/#enabling-subscriptions-emails-on-a-staging-site).

### Enabling Subscriptions Emails on a Staging Site

[↑ Back to top](#doc-title)

If you would like to enable subscription-related emails on a staging site, you can define the 
```
WCS_FORCE_EMAIL
```

 constant. In order to enable this constant:

1. Go to your site’s 
```
wp-config.php
```

 file
2. Above the line that says 
```
/* That's all, stop editing! Happy blogging. */
```

, add the following code snippet and save the file:

```
// Enable subscription-related emails on a staging site

if ( ! defined( 'WCS_FORCE_EMAIL' ) ) {
define( 'WCS_FORCE_EMAIL', true );
}
```

## Enable Staging Mode for WooCommerce Subscriptions

[↑ Back to top](#doc-title)

It is possible to switch a live site to staging by editing the 
```
wc_subscriptions_siteurl
```

 from within the 
```
_options
```

 table to anything different from the 
```
siteurl
```

 .

If your web host allows it, the value for 
```
wc_subscriptions_siteurl
```

 can be changed from the WP Admin by viewing the options page from */wp-admin/options.php*. To achieve this from within the WP Admin:

1. After logging into your admin area, visit: https://**YOUR-DOMAIN**.com/wp-admin/options.php (*replace YOUR-DOMAIN.com with your site’s domain URL*)
2. Search the options page for 
```
wc_subscriptions_siteurl
```
3. Change the value of that option to anything other than the current site URL ( *Suggestion: add a character to the end of that value.* )

## Database Migration

[↑ Back to top](#doc-title)

When migrating your site’s database from one server to another server, there are additional considerations.

If you have migrated your site’s database and kept the same domain name, the new site will not trigger staging mode. This means Subscriptions will process renewal payments in live mode. To prevent payment processing, even temporarily, you need to:

- [Change the WordPress site URL](https://wordpress.org/support/article/changing-the-site-url/), this will switch that site into staging mode; or
- [Disable Action Scheduler’s default queue runner](https://github.com/woocommerce/action-scheduler-disable-default-runner) to ensure Subscriptions doesn’t trigger renewal events.

## Decommission Your Old Site

[↑ Back to top](#doc-title)

To decommission the old site and avoid any issues with duplicate payments or emails, you must do at least one of the following:

- [Change the site’s URL](https://wordpress.org/support/article/changing-the-site-url/), this will switch that site into staging mode. In some cases, 
```
wc_subscriptions_siteurl
```

 the value might need to be updated as well. You can follow the steps for enabling staging mode for WooCommerce Subscriptions above.
- [Disable Action Scheduler’s default queue runner](https://github.com/woocommerce/action-scheduler-disable-default-runner) to ensure the WooCommerce Subscriptions plugin doesn’t trigger renewal events.

Without completing one of these steps, your old site will continue to process real recurring payments. We also suggest you **block all emails from your duplicate site** to prevent customers from receiving any emails from this old site. To do this, you can use a plugin like [Disable Emails](https://wordpress.org/plugins/disable-emails/) (this plugin is not made by Woo or endorsed by WooCommerce.com).

## Disabling All Scheduled Events

[↑ Back to top](#doc-title)

When Subscriptions is in staging mode, it still triggers [scheduled renewals](https://woocommerce.com/document/subscriptions/renewal-process/) and other scheduled events, like expiration, by default. It won’t attempt any payments or send emails for these events, but it will initiate the event as it would on the live site.

To stop the system from triggering these events, install and activate the free **Action Scheduler – Disable Default Runner** plugin

This plugin disables all events in the scheduling library Subscriptions uses. This library also powers other extensions, like [WooCommerce Memberships](https://woocommerce.com/document/woocommerce-memberships/), so it will also disable any scheduled events for those plugins.

**Note:**

The [Action Scheduler – Disable Default Runner](http://github.com/prospress/action-scheduler-disable-default-runner) plugin does not rely on the [site URL check](https://woocommerce.com/document/subscriptions-handles-staging-sites/#section-2). Once active, it will block scheduled events. As a result, it can also be used on a live site to temporarily disable renewals payments and other scheduled events.

## Why Renewal Payments May Not Process on Live Sites

[↑ Back to top](#doc-title)

When Subscriptions processes a renewal in Staging mode, it adds the following note to the order notes:

> Payment processing skipped – renewal order created on staging site under staging site lock. Live site is at https://example.com/

On occasion, these notes may appear on renewal orders created on the *live site*. This means the live site is accessible via more than one URL. For example, the site may be accessible via both:

- https://www.example.com
- https://example.com

To process renewals correctly, **Subscriptions requires your WordPress site to have only one URL**.

To ensure your site is accessible via only one the URL, you can use [the WordPress Site URL constants](https://codex.wordpress.org/Editing_wp-config.php#WP_SITEURL) in your 
```
wp-config.php
```

 file to set the URL for the site. For example:

```
define( 'WP_SITEURL', 'https://example.com' );
define( 'WP_HOME', 'https://example.com' );
```

You should also make sure your web server software, like Apache, is configured to redirect any requests to other URLs to the canonical URL. WordPress has a guide on [setting up .htaccess file](https://codex.wordpress.org/htaccess) correctly. If you need additional help, please contact your web host.

Serving your site under a single URL is good practice as it has other benefits, most notably for SEO. As [Moz explains](https://moz.com/learn/seo/duplicate-content):

> Duplicate content is content that appears on the Internet in more than one place. That “one place” is defined as a location with a unique website address (URL)
> 
> 
> 
> While not technically a penalty, duplicate content can still sometimes impact search engine rankings. When there are multiple pieces of, as Google calls it, “appreciably similar” content in more than one location on the Internet, it can be difficult for search engines to decide which version is more relevant to a given search query.

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

