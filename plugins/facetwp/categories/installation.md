# Installation

*Category from FacetWP documentation*

---

## Installation and your account

**Source:** [https://facetwp.com/help-center/installation/](https://facetwp.com/help-center/installation/)

After your [purchase](/pricing/), you’ll receive a license key, and access to [your account](/account/).

In [your account](#using-your-account) you can download the plugin and all [add-ons](/add-ons/), [manage your license key(s)](#manage-your-license-keys), [whitelist sites for your license](#whitelist-your-sites-and-activate-your-license-key), [manage your subscription(s)](#manage-your-subscriptions), and [customize and download invoices](#generate-download-or-customize-your-invoice).

## Download and install the plugin and add-ons

To install FacetWP and its add-ons, log in to [your account](/account/) and download the desired plugins.

Upload the ZIP file(s) into **Plugins > Add Plugin > Upload Plugin**, or manually extract the plugin folder(s) into 
```
/wp-content/plugins/
```

 and upload. Then activate the plugin(s).

Next, whitelist your license key for your site(s) and activate it:

## Manage your license key(s)

### Whitelist your site(s) and activate your license key

To activate your license for your site(s), follow these steps:

1. Browse to **Settings > FacetWP > Settings > General**, paste the license key into the “License key” field, then click the “Activate” button.

You’ll see the message: “Add [domain.com] to your license, via the “Pending” column in facetwp.com/account”:

![Paste the license key and click 'Activate'.](https://facetwp.com/wp-content/uploads/2026/04/activate_license_pending.png)Paste the license key and click “Activate”.
If the system [detects that the site is a staging/development site](#free-use-on-local-staging-and-development-sites), you’ll see an “All done, thanks for activating!” message instead, the license will be activated immediately, and you’re done at this point.
2. To add your site to your license, log in to [your account](/account/).
3. Scroll down to the “Licenses” heading, where you’ll see your active (and expired) license(s). In the “Allowed” column, you’ll see the maximum number of allowed sites for your license plan, and how many sites are currently whitelisted:

![The number of allowed sites for your license plan.](https://facetwp.com/wp-content/uploads/2026/04/activate_license_allowed.png)The number of allowed sites for your license plan.
Note that so-called “grandfathered” licenses will show 
```
999
```

 allowed sites, because these were sold at a time when the number of sites was unlimited.
4. Click on the pencil icon in the “Pending” column. This will show a list of sites that tried to activate the license key (for which the “Activate” button in the site’s FacetWP settings was clicked).

If you see no pending site, add your key to your site and click “Activate”, as described in [step 1](#whitelist-your-sites-and-activate-your-license-key), and refresh the account page.

Click the “Add” button for the pending site(s) you want to add to this license:

![Whitelist a site by clicking the pencil icon in the 'Pending' column, and clicking the 'Add' button for the site.](https://facetwp.com/wp-content/uploads/2026/04/activate_license_pending_add.png)Whitelist a site by clicking the pencil icon in the “Pending” column, and clicking the “Add” button for the site.
5. Refresh the page, and click the pencil icon in the “Allowed” column to see your whitelisted site(s). The first number in the “Allowed” column should reflect the number of whitelisted sites.

![Click the pencil icon in the 'Allowed' column to see all whitelisted sites.](https://facetwp.com/wp-content/uploads/2026/04/activate_license_added.png)Click the pencil icon in the “Allowed” column to see all whitelisted sites.
To remove a site from the license again, just click the red “Remove” button. Note that to stop a site from using the license, this is not enough. See the [explanation below](#remove-a-site-from-a-license).
6. In the site, browse to Settings > FacetWP > Settings > General, and click the “Activate” button again. You should now see “All done, thanks for activating!”. After refreshing the page, the message will show: “Valid until [date]”.

### Activate your license key in wp-config.php or functions.php

If you prefer to keep your license key in code, you can add it to 
```
wp-config.php
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infodefine( 'FACETWP_LICENSE_KEY', 'xxxxxxxxxxxxxxxx' );
```

If you add the key in 
```
wp-config.php
```

 like this, the license key field in **Settings > FacetWP > Settings > General** will be disabled and grayed out. This may be useful if you want to prevent users from changing or deleting the key manually. Note that you could also [entirely hide the license key setting](#hide-the-license-key-setting) in this case.

Alternatively, you can add your key with the 
```
facetwp_license_key
```

 hook in your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_license_key', function( $license_key ) {
    return 'xxxxxxxxxxxxxxxx';
});
```

If you previously activated your license key manually, follow these steps to switch:

### Switch the license key activation method

To switch from using a [manually entered license key](#whitelist-your-sites-and-activate-your-license-key) to a [license key set in wp-config.php or functions.php](#activate-your-license-key-in-wp-config-php-or-functions-php), follow these steps:

1. Go to Settings > FacetWP > Settings > General.
2. Remove the key from the license key field, then click the “Activate” button.
3. Below the field will be the message “The license does not exist”, and the Support tab (after a page reload) will display “Active License Required”.​​​​
4. Add your key​ to your 
```
wp-config.php
```

 or 
```
functions.php
```

, [as explained above](#activate-your-license-key-in-wp-config-php-or-functions-php).
5. Reload the FacetWP Settings page. Now you’ll see the key in the License key field. If you added it in 
```
wp-config.php
```

, it will be grayed out.
6. Click the “Activate” button.

In a [WordPress multi-site setup](/help-center/using-facetwp-with/wordpress-multi-site/), this procedure is the same, except you’ll have to do this for each sub-site, also if you use Network Activation.

### License keys and multi-site

If you are [using FacetWP in a WordPress multi-site setup](/help-center/using-facetwp-with/wordpress-multi-site/), be aware that you have to [activate your license key for each sub-site individually](/help-center/using-facetwp-with/wordpress-multi-site/#multi-site-installation-license-keys-and-activation), also if FacetWP is Network Activated.

Also note that each sub-site counts against your license plan’s [site limit](/pricing/).

### License key restrictions

Depending on your [license plan](/pricing/), you can use your license key on up to 3, 20, 100, or 500 **live** sites.

The allowed number for your license is shown in [your account](/account/). Under the “Licenses” heading, you’ll see your active license(s). In the “Allowed” column, you’ll see the maximum number of allowed sites for your license plan, and how many sites are currently whitelisted:

![The number of allowed sites for your license plan.](https://facetwp.com/wp-content/uploads/2026/04/activate_license_allowed.png)The number of allowed sites for your license plan.
Note that so-called “grandfathered” licenses will show 
```
999
```

 allowed sites, because these were sold at a time when the number of sites was unlimited.

You are allowed to activate your license on as many [local, development or staging sites](#free-use-on-local-staging-and-development-sites) as needed. These kinds of sites do **not** count against the allowed limit of your license plan.

Note that if you are [using FacetWP in a WordPress multi-site setup](/help-center/using-facetwp-with/wordpress-multi-site/), each sub-site counts against your license’s site limit.

#### Free use on local, staging- and development sites

You are allowed to activate your license on as many local, development or staging sites as needed. These kinds of sites do **not** count against your [the allowed limit of your license plan](#license-key-restrictions).

To activate a license on such a site, browse to Settings > FacetWP > Settings > General, add your key to the “License key” field, and click the “Activate” button. These sites will **not** show up in your account and do **not** have to be [whitelisted manually](#whitelist-your-sites-and-activate-your-license-key), like normal/live sites.

To determine if a site is a local/staging/development site, our account system compares the URL to the following URL patterns:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info[
  '.wpengine.com',
  '.wpenginepowered.com',
  '.pantheonsite.io',
  '.flywheelsites.com',
  '.cloudwaysapps.com',
  '.myftpupload.com',
  '.kinsta.cloud',
  '.kinsta.com',
  '.ngrok.io',
  'demo.',
  'dev.',
  'dev-',
  'test-',
  'local.',
  'develop.',
  'stage.',
  'staging',
  'stg.',
  'stg-',
  'sandbox.',
  'alpha.',
  'beta.',
  'test.',
  '.dev',
  '.test',
  '.local',
  '.stage',
  '.vanwp.ca',
  '.sg-host.com',
  '.tempurl.host',
  '.mystagingwebsite.com',
  '.tinydevbox.org',
  '.lndo.site',
  '.vtx'
];
```

If your local/staging/development site’s URL pattern is not in this list, contact us in support, and we’ll consider adding it.

### Remove a site from a license

If you want to remove a site from your license key, follow these steps:

1. Log in to [your account](/account/).
2. Under the “Licenses” heading, you’ll see your active license(s). Click on the pencil icon in the “Allowed” column. This will show all whitelisted sites that are using the license.
3. Click the red “Remove” button to remove a site from your license:

![Click the red 'Remove' button to remove a site from your license.](https://facetwp.com/wp-content/uploads/2026/04/activate_license_remove.png)Click the red “Remove” button to remove a site from your license.
4. In the site, browse to Settings > FacetWP > Settings > General, then clear the “License key” field and click the “Activate” button. There will be a “The license does not exist” message. The site is now removed from the license.

Note:At the time of writing, sites that are removed from your license will keep being listed as “pending” in your account. This will probably be changed in the near future, so sites can be given a “blocked” status. Also, after removing a site, it will immediately lose access to plugin updates. The license key box will temporarily keep showing a valid license, and support access will remain active, but only until there is a plugin update check, which happens often. After that (or after the “Activate” button is clicked) the license key box will show [the “pending” message](#whitelist-your-sites-and-activate-your-license-key), and access to support will be closed.

### Hide the license key setting

If you want to hide the license key setting, for example, to prevent other admin users from copying or re-using it, you can add the following to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_settings_admin', function( $settings ) {
  unset( $settings['general']['fields']['license_key'] );
  return $settings;
});
```

## Using your account

After your purchase, you get access to [your account](/account/), where you can view your license details and purchase history, and where you can [generate, download and customize invoices](#generate-download-or-customize-your-invoice) for every purchase you made.

You can also download the latest plugin version and all [add-ons](/add-ons/).

The account page also shows an overview of all live sites that are using your license key(s), and you can [whitelist sites](#whitelist-your-sites-and-activate-your-license-key), and [remove sites from a license key](#remove-a-site-from-a-license).

### Log in to your account

You can [log into your account](/account/) with the email address that you used when buying your license. After clicking the button, the system will send you an access link that is valid for 8 hours.

If you are not receiving the email with the access link, check your spam filter. Make sure the address 
```
hello@facetwp.com
```

 is whitelisted.

If you’re still not receiving the link and you want us to email you an [access link](#create-and-send-access-links), or add another email address to your account ([as “manager email”](#add-a-manager-email-address)) to receive the login link, [open a support ticket](/help-center/get-support/) from within the plugin settings.

If you have added a [manager email address](#add-a-manager-email-address) that has trouble receiving the access link when trying to log in, you can create an access link for the manager email address [with the “Copy access link” button next to the manager email address](#create-and-send-access-links), and send it to them yourself. Note that access links remain **valid for 8 hours only**. And after using a newly created access link to log in, **any previous access links will no longer work**.

### Retrieve a forgotten account email address

If you forgot which email address you used for [your account](/account/), [open a support ticket](/help-center/get-support/) from within the plugin settings. We can see your account ID in the ticket and can retrieve your email address.

### Regain account access if you lost access to the account email address

If you lost access to the account email address, for example because someone left your company, [open a support ticket](/help-center/get-support/) from within the plugin settings. We can send you an [access link](#create-and-send-access-links) which can be used for 8 hours, to log in and change the main account email address.

### Change your account name and email address

If you want to change your account name or email address, log in to [your account](/account/). At the top of the page, click the pencil icon next to your name or email address to change it.

![How to change your account name and email address.](https://facetwp.com/wp-content/uploads/2026/04/account_change_name_email.png)How to change your account name and email address.
Note that the account name also appears on your invoice.

If you cannot access the current email address to receive the login link, please [open a support ticket](/help-center/get-support/).

### Generate, download, or customize your invoice

To view or download an invoice, log in to [your account](/account/) and scroll down to the “Purchase History” section. Click the “View Invoice” link on the right of the purchase you want to generate an invoice for. This will take you to the invoice, which you can print or download as a PDF with the button at the top.

![How to view and download an invoice for your purchase.](https://facetwp.com/wp-content/uploads/2026/04/account_view_download_invoice.png)How to view and download an invoice for your purchase.
If you want to customize the billing details on the invoice, for example, to add a company name, a billing address, or a tax/VAT number, go to the top of the account page, and click the pencil icon next to “Invoice details”:

![How to change your invoice/billing details.](https://facetwp.com/wp-content/uploads/2026/04/account_change_invoice_details.png)How to change your invoice/billing details.
The saved content will show up in the PDF invoice under your name, under “Bill to”. The invoice name can be changed by clicking the pencil icon [next to your name](#change-your-account-name-and-email-address).

### Add a manager email address

![How to add a manager email address, logged in as the account owner.](https://facetwp.com/wp-content/uploads/2026/04/account_manager_emails.png)How to add a manager email address, logged in as the account owner.
It is possible to add one or more account manager email addresses, so that multiple people can access the same account with their own email address.

To add manager email addresses, log into [your account](/account/) (as account owner, not as manager), scroll down to the “Manager Emails” section at the bottom, fill in the email address, and click the “Add Manager” button.

Each manager email address can be used to log into (or [switch to](#switch-between-accounts)) the account and has full access, except for the account name, email address, and invoice details at the top, which can only be changed if you are logged in as the account owner. Extra manager email addresses can also only be added or removed when logged in as the account owner.

### Switch between accounts

If your account email address has access to multiple accounts (by being added as [manager email](#add-a-manager-email-address) to another account), you’ll see an account switcher to switch between all connected accounts, marked as “(yours)” for your own, or (“managed”) for managed accounts.

![The account switcher, which appears if your account email address has access to other accounts as 'manager email'.](https://facetwp.com/wp-content/uploads/2026/06/managed-account-switcher-new.png)The account switcher, which appears if your account email address has access to other accounts as “[manager email](#add-a-manager-email-address)“.
Note that if you switch to, or are logged in to a [“managed” account](#add-a-manager-email-address), you cannot edit the account name, email address, and invoice details at the top, which can only be changed if you are logged in as the account owner. Extra [manager email addresses](#add-a-manager-email-address) can also only be added or removed when logged in as the account owner.

### Create and send access links

If you want to send yourself or someone else an access link, log in to [your account](/account/) as the owner, and click the blue “Copy access link” button in the account info section. This button is only visible when logged in as the account owner, not as an [account manager](#add-a-manager-email-address).

![How to create an access link, when logged in as the account owner.](https://facetwp.com/wp-content/uploads/2026/06/copy-access-link.png)How to create an access link, when logged in as the account owner.
![How to create access links for manager emails, when logged in as the account owner.](https://facetwp.com/wp-content/uploads/2026/06/copy-access-link-managers.png)How to create access links for manager emails, when logged in as the account owner.
If you have added [manager email addresses](#add-a-manager-email-address), you can also create access links for these email addresses. This can be useful if a manager is not receiving the access link via email when trying to log in, or if he/she does not have access to email at the moment.

Note that access links remain **valid for 8 hours only**. And after using a newly created access link to log in, **any previous access links will no longer work**.

## Manage your subscription(s)

### Renewals

#### Automatic renewals

By default, if you did not [cancel it](#cancel-your-subscription), your subscription will **automatically renew** after one year. A 20% discount on the [normal price](/pricing/) is automatically applied when your subscription is auto-renewed.

You can also [manually renew an active subscription before the expiration date](#renew-an-active-or-expired-subscription).

Some older, legacy accounts did not have auto-renewal and can expire. You’ll have to renew these licenses manually:

#### Renew an active or expired subscription

There are two ways to manually renew an active or expired subscription:

Renew by buying a new license with your license key as discount code
You can manually renew by [buying a new subscription](/pricing/), and **entering your existing license key (active or expired) into the “Discount Code” box during checkout**. The account will then:

1. Apply the 20% renewal discount;
2. Add one extra year to the existing license’s expiration date. If the existing license hasn’t expired, it will add one year to the prior expiration date. If the existing license *has* expired, it will add one year from the date of purchase.

Note that you can only manually renew this way **if the expiration date is less than 60 days away**, or if the license has already expired. If the date of expiration is more than 60 days away, you’ll see the message “Renewal is not yet available for this license.”

Important:For renewals, **the email address must match the original email address** used for the subscription that you intend to renew. Please [open a support ticket](/help-center/get-support/) if you don’t remember the email address, so we can retrieve it for you.
Renew with the “Renew” button in your account
![Manually renew a license with the 'Renew' button, which appears 60 days before the expiration date, and for expired licenses.](https://facetwp.com/wp-content/uploads/2026/05/license_renew_button.png)Manually renew a license with the “Renew” button, which appears 60 days before the expiration date, and for expired licenses.
If your license has expired without having auto-renewed (which can happen for some legacy accounts), or **if the expiration date is less than 60 days away**, you’ll see a “Renew” button next to your license in [your account](/account/). This button can also be used to manually renew your license. It will do the same as the renewal procedure [described above](#renew-by-buying-a-new-license-with-your-license-key-as-discount-code).

Note:Only **active** or **expired** subscriptions can be renewed, not [cancelled ones](#cancel-your-subscription). Once a subscription is cancelled, **it cannot be renewed or revived**. If you accidentally cancel it, or change your mind, you’ll have to [buy a new subscription](/pricing/), and there will be no 20% renewal discount.

### Cancel your subscription

If you want to cancel your subscription, log into [your account](/account/), scroll down to the Subscriptions section and click the red “Cancel …” button beside the active subscription:

![How to cancel a subscription. Note that a cancellation cannot be reversed.](https://facetwp.com/wp-content/uploads/2026/04/account_cancel_subscription.png)How to cancel a subscription. Note that a cancellation cannot be reversed.
Note:Once a subscription is cancelled, **it cannot be renewed or revived**. If you accidentally cancel it, or change your mind, you’ll have to [buy a new subscription](/pricing/), and there will be no 20% renewal discount. Only [expired subscriptions can be renewed](#renew-an-active-or-expired-subscription), with a 20% renewal discount.

### Change your subscription payment

#### Change your Stripe payment gateway or credit card info

If you want to change or update your Stripe payment method/gateway or credit card info, log into [your account](/account/), scroll down to the Subscriptions section, and click the blue “Update Card” button beside the active subscription:

![Click 'Update Card' to change your Stripe payment method or credit card info.](https://facetwp.com/wp-content/uploads/2026/04/account_update_stripe.png)Click “Update Card” to change your Stripe payment method or credit card info.
This will take you to a Stripe page, where you can view the subscription details, change payment methods, and update credit card details.

#### Change PayPal payments

If your subscription currently uses PayPal, any changes to your payment method need to be done directly in your account on [paypal.com](https://www.paypal.com).

### Switch between Stripe and PayPal

To switch your payment method from PayPal to Stripe or vice versa, you need to cancel the subscription before the renewal date. Then [buy a new license](https://facetwp.com/pricing/), and make sure to **enter your existing license key into the “Discount Code” box during checkout**. This will apply the renewal discount and renew your existing (previously cancelled) license. If your license has a grandfathered price, the grandfathered renewal discount will be applied.

### Upgrade to a higher license tier

We currently offer [four license plans](/pricing/): **Basic** (3 sites), **Professional** (20 sites), **Agency** (100 sites), and **Enterprise** (500 sites).

You can upgrade your plan at any time, in [your account](/account/). The system will automatically calculate the prorated upgrade cost for the remainder of the running subscription period. Note that we cannot process downgrades this way.

To upgrade your current license plan to a higher tier, log into [your account](/account/), scroll down to the Subscriptions section, and click the blue “Upgrade…” button beside the active subscription:

![Click 'Upgrade' to upgrade to a higher license tier.](https://facetwp.com/wp-content/uploads/2026/04/account_upgrade_tier.png)Click “Upgrade” to upgrade to a higher license tier.
After selecting the desired plan in the dropdown, you’ll see a pop-up message with the calculated prorated amount, and the amount for future renewals. After confirming, the extra payment will be processed via Stripe ([also if it was PayPal before](#upgrade-a-paypal-subscription)), and your license plan and the allowed number of sites in your account will be updated.

Note that **there is no 20% renewal discount applied when upgrading to a higher tier**, only when an existing subscription [is renewed automatically or manually](#renewals).

Warning:Upgrading an **existing** subscription to a higher tier needs to be done in [your account](/account/), by clicking the “Upgrade…” button for the subscription. **Don’t** try to upgrade via the [pricing/buy](/pricing/) page. That will buy you a **new** subscription.

#### Upgrade a PayPal subscription

The process for upgrading a PayPal subscription is the same as [described above](#upgrade-to-a-higher-license-tier). However, it is impossible to automatically change a running PayPal subscription.

This means that **running PayPal subscriptions will automatically be switched to Stripe when upgrading them to a higher tier**.

When you click the “Upgrade…” button, you’ll see the same pop-up message as when using Stripe, with the calculated prorated amount, and the amount for future renewals. But after confirming, you will be redirected to Stripe to continue and choose a payment gateway. The extra payment (and future renewals) will be processed via Stripe, and your license plan and the allowed number of sites in your account will be updated. **Your PayPal subscription will automatically be cancelled**.

If, for some reason, you don’t want to switch to Stripe when upgrading, the only way is to cancel your license, and buy a new license for the desired plan. However, in this case, you’ll pay the full amount, without any prorated calculations.

## Plugin updates

As long as your license is active, FacetWP will automatically notify you when new updates are available.

When your license expires, FacetWP will continue to work, but you will no longer receive plugin updates or [support](/help-center/get-support/).

### Solve plugin update issues

![Using 'Check again' in Dashboard > Updates to force-check for plugin and WordPress updates.](https://facetwp.com/wp-content/uploads/2024/08/wp_updates_check_again.png)Using “Check again” in Dashboard > Updates to force-check for plugin and WordPress updates.
If updates aren’t appearing, click “Activate” within **Settings > FacetWP > Settings**, then click “Check again” within **Dashboard > Updates**. This clears WP’s updater cache and force-checks for plugin and WordPress updates.

If that doesn’t resolve the issue, check the following:

- Clear *all* caching and optimization plugins (WP Total Cache, WP Rocket, WP Super Cache, Autoptimize, etc).
- Some hosts (Pagely, WP Engine, Siteground, Flywheel, etc) and services (Cloudflare) provide server-side caching that may also need to be cleared.

Note that if you are [using FacetWP in a WordPress multi-site setup](/help-center/using-facetwp-with/wordpress-multi-site/), the update notifications only appear in: My Sites > Network Admin > Plugins.

### Update from (very) old versions

Important:Before updating from old FacetWP versions, make sure to use the [built-in Export function](/help-center/add-on-features-and-extras/back-up-or-move-facets-and-listing-templates/) to get a copy of all of your facets and listing templates. **Copy the exported JSON code to a file elsewhere for backup**.
If you experience (fatal) PHP errors when updating from (very) old plugin versions, try deleting the plugin folder entirely (locally and on your server), then add the new version and upload it.

We’ve specifically seen updating errors with versions older than [v3.8](/help-center/changelog/changelog-old/#3-8) (2021).

### Disable the admin notices to install add-on integrations

Since version 4.1.8 FacetWP displays admin notices when you have certain plugins installed and the necessary [integration add-ons](/add-ons/) are missing.

These notices were added because many users are unaware of the fact that some plugins do not work with FacetWP unless the related add-on is installed. For example, WPML needs the [Multilingual add-on](/help-center/using-facetwp-with/multilingual/) installed to work with FacetWP.

There are certain situations however in which you don’t need the integration add-ons. In these cases you can permanently disable these notices by adding the following code to your (child) theme’s functions.php or [the Custom Hooks add-on](/help-center/add-on-features-and-extras/custom-hooks/):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_dismiss_notices', '__return_true' );
```

    
## See also

    - [FacetWP Add-Ons](https://facetwp.com/add-ons/)
- [Installation and your account](https://facetwp.com/help-center/installation/)
- [FacetWP licenses and pricing](https://facetwp.com/pricing/)
- [Using FacetWP with WordPress multi-site](https://facetwp.com/help-center/using-facetwp-with/wordpress-multi-site/)
- [Why is Wordfence showing an abandoned plugin warning?](https://facetwp.com/help-center/faq/why-is-wordfence-showing-an-abandoned-plugin-warning/)
- [Back up or move facets and listing templates](https://facetwp.com/help-center/add-on-features-and-extras/back-up-or-move-facets-and-listing-templates/)
- [Changelog](https://facetwp.com/help-center/changelog/)
- [Changelog (older versions)](https://facetwp.com/help-center/changelog/changelog-old/)
- [Using FacetWP with WPML or Polylang](https://facetwp.com/help-center/using-facetwp-with/multilingual/)
- [The Custom Hooks add-on](https://facetwp.com/help-center/add-on-features-and-extras/custom-hooks/)

                    Last updated: June 26, 2026

---

