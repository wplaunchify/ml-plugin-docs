# Faq

*Category from AME Toolbar Editor documentation*

---

## FAQ

**Source:** [https://adminmenueditor.com/documentation/faq/](https://adminmenueditor.com/documentation/faq/)

# FAQ

                    
                    Table of Contents- [Pre-Sales Questions](#pre-sales-questions)- [Does this plugin support Multisite?](#does-this-plugin-support-multisite)
- [Will roles created by other plugins show up in the menu editor?](#will-roles-created-by-other-plugins-show-up-in-the-menu-editor)
- [Can I create multiple admin menu levels, like A -> B -> C?](#can-i-create-multiple-admin-menu-levels-like-a-b-c)
- [Can I upgrade from the free version to Pro without losing my existing settings?](#can-i-upgrade-from-the-free-version-to-pro-without-losing-my-existing-settings)
- [Can I buy a “Personal” license and upgrade to “Business” or “Agency” later?](#can-i-buy-a-personal-license-and-upgrade-to-business-or-agency-later)
- [Is there a discount on renewals, or will I need to pay the full price every year?](#is-there-a-discount-on-renewals-or-will-i-need-to-pay-the-full-price-every-year)
- [What’s the difference between the free and Pro versions?](#whats-the-difference-between-the-free-and-pro-versions)
- [How To…](#how-to)- [How do I make a menu inaccessible to everyone but myself?](#how-do-i-make-a-menu-inaccessible-to-everyone-but-myself)
- [How can I hide an entire top-level menu?](#how-can-i-hide-an-entire-top-level-menu)
- [How do I hide a menu from everyone except the Super Admin?](#how-do-i-hide-a-menu-from-everyone-except-the-super-admin)
- [How to show the number of new items after renaming a menu item?](#how-to-show-the-number-of-new-items-after-renaming-a-menu-item)
- [How to move a sub-menu item to the top level, or the other way around?](#how-to-move-a-sub-menu-item-to-the-top-level-or-the-other-way-around)
- [How do I use shortcodes in the admin menu?](#how-do-i-use-shortcodes-in-the-admin-menu)
- [Troubleshooting](#troubleshooting)- [Chrome: The admin menu is broken. Menu items overlap each other or show up in the wrong place.](#chrome-the-admin-menu-is-broken-menu-items-overlap-each-other-or-show-up-in-the-wrong-place)
- [No menu items show up on the menu editor page. How do I fix this?](#no-menu-items-show-up-on-the-menu-editor-page-how-do-i-fix-this)
- [When I activate Admin Menu Editor, a superfluous “Welcome” or “What’s New” page that belongs to another plugin appears under the “Dashboard” menu item. Why?](#when-i-activate-admin-menu-editor-a-superfluous-welcome-or-whats-new-page-that-belongs-to-another-plugin-appears-under-the-dashboard-menu-item-why)
- [I can’t access menu settings when iThemes Security is active.](#i-cant-access-menu-settings-when-ithemes-security-is-active)
- [PHP Compatibility Checker reports a PHP 7.0 compatibility issue in ParsedownLegacy.php.](#php-compatibility-checker-reports-a-php-7-0-compatibility-issue-in-parsedownlegacy-php)
- [I changed something and now I can no longer access the menu editor. Is there a way to get it back?](#i-changed-something-and-now-i-can-no-longer-access-the-menu-editor-is-there-a-way-to-get-it-back)
- [I get an error message when trying to save the menu.](#i-get-an-error-message-when-trying-to-save-the-menu)
- [Licensing](#licensing)- [I’ve lost my license key, how do I get it back?](#ive-lost-my-license-key-how-do-i-get-it-back)
- [Can I upgrade to a different license?](#can-i-upgrade-to-a-different-license)
- [Does a Multisite installation count as one site or multiple?](#does-a-multisite-installation-count-as-one-site-or-multiple)
- [How does license expiration work?](#how-does-license-expiration-work)
- [Can I activate the license key without having to enter it manually?](#can-i-activate-the-license-key-without-having-to-enter-it-manually)
- [What’s your refund policy?](#whats-your-refund-policy)
- [What is a “Business [Legacy]” license?](#what-is-a-business-legacy-license)

## Pre-Sales Questions

### Does this plugin support Multisite?

Yes. You can either network activate it or install it as a global plugin ([see installation docs](http://adminmenueditor.com/documentation/installation/)). Note that the plugin settings page will not show up in the network admin. Instead, you will need to access it through a sub-site.

By default, any changes that you make on one sub-site will apply to all sites. If you want to use different menu settings on each site, there is also an option for that.

### Will roles created by other plugins show up in the menu editor?

Yes, the menu editor will display all available roles. This includes both built-in roles like “Editor” and custom roles that were added by other plugins.

### Can I create multiple admin menu levels, like A -> B -> C?

This is available as an experimental feature that can be enabled in the “Settings” tab. However, it might not be compatible with other plugins that modify the admin menu, or with custom admin themes.

### Can I upgrade from the free version to Pro without losing my existing settings?

Yes. The Pro version will automatically import existing settings from the free version. Here’s the recommended way to upgrade:

1. Deactivate the free version of Admin Menu Editor.
2. Install and activate the Pro version.
3. Open the menu editor and confirm that your settings have been imported.
4. *(Optional)* Uninstall the free version.

Caution: Do not uninstall the free version before installing Pro – that *would* delete your settings.

### Can I buy a “Personal” license and upgrade to “Business” or “Agency” later?

Yes, you can upgrade to a different plan at any time. Usually, you only need to pay the price difference. If your access to updates and support has expired, you will also need to pay a renewal fee (this is still cheaper than purchasing a new license). [Here’s the upgrade form.](https://adminmenueditor.com/upgrade-license/)

### Is there a discount on renewals, or will I need to pay the full price every year?

Yes, there is a 25% discount on license renewals. For example, let’s say you purchase the “Business” license for $59. After the first year, it would cost you $44.25 to renew it for another year.

### What’s the difference between the free and Pro versions?

The Pro version has these additional features:

- Import/export custom menu configurations.
- Role-based menu permissions.
- Set menu items to open in a new window or IFrame.
- Use shortcodes in menu fields.
- Create menus accessible only to a specific user.

## How To…

### How do I make a menu inaccessible to everyone but myself?

You can configure a menu item to be accessible only to a specific user. To do this, set its capability field to “user:” + user login. For example, if you have a user John Smith with the login “smith”, set the capability field to “user:smith”. Now only this user will be able to see that menu.

### How can I hide an entire top-level menu?

Due to the way WordPress handles menu permissions, a top-level menu will remain visible as long as it has at least one accessible sub-menu, regardless of what permissions you’ve set for the top-level menu itself. To hide an entire top-level menu, update the permissions of each of its sub-menus too.

Sometimes this approach doesn’t work because the menu has a special sub-menu that doesn’t show up for the admin account. You can’t hide or edit menus like that. In that case, click the “Edit” button next to the “Permissions” field and enable this option: “Hide all submenu items when this item is hidden”.

### How do I hide a menu from everyone except the Super Admin?

Open the “Permissions” screen,  un-check every role except Administrator and enter “super_admin” in the “Extra capability” field.

### How to show the number of new items after renaming a menu item?

Menus like “Comments”, “Dashboard -> Updates” and “WooCommerce -> Orders” show the number of new items in a colorful circle. If you rename the menu, the number will no longer show up because it’s not part of the custom menu title. Add the 
```
[ame-count-bubble]
```

 shortcode to the menu title to display the number.

### How to move a sub-menu item to the top level, or the other way around?

- To move a sub-menu item to the top level, drag and drop it to the bottom of the top-level menu list. A yellow rectangle will show up when you’ve dragged it to the right place. You can move it to a different position afterward.
- To move a top-level menu to a sub-menu, click on the sub-menu in question, then drag the top-level menu to the bottom of the sub-menu item list.

You can also move menu items between the top level and the sub-menu by using  the *Cut* and *Paste* buttons – just cut an item from one list and paste it into the other.

### How do I use shortcodes in the admin menu?

You can use the following shortcodes anywhere in your custom menus, including the menu title, URL and so on:

- [wp-wpurl] – WordPress address (e.g. “http://example.com/”).
- [wp-siteurl] – Blog address (e.g. “http://example.com/blog”).
- [wp-admin] – Admin area URL (e.g. “http://example.com/wp-admin/”).
- [wp-name] – Blog title.
- [wp-version] – Current WordPress version.
- [wp-user-login] – Current user’s username.
- [wp-user-display-name] – Current user’s display name.
- [wp-user-first-name] – Current user’s first name.
- [wp-user-last-name] – Current user’s last name.
- [wp-logout-url] – A URL that lets the current user log out.

Additionally, you can also use most shortcodes added by other plugins.

## Troubleshooting

### Chrome: The admin menu is broken. Menu items overlap each other or show up in the wrong place.

That’s a known bug in Google Chrome 45. It’s not related to Admin Menu Editor Pro; the bug can affect even users who are not running any plugins. See [this post](http://wptavern.com/a-bug-in-chrome-45-causes-wordpress-admin-menu-to-break) for more details and a workaround.

### No menu items show up on the menu editor page. How do I fix this?

This problem is usually caused by JavaScript errors. The menu editor interface is mostly generated by JavaScript. If an admin script crashes or doesn’t load properly, some parts of the interface may not show up.

Most often, the source of the error is a plugin or theme conflict. For example, some plugins load their JavaScript on all admin pages instead of just their own, which interferes with other plugins. Check your browser’s [JavaScript console](http://webmasters.stackexchange.com/questions/8525/how-to-open-the-javascript-console-in-different-browsers) for error messages and [contact me](http://adminmenueditor.com/contact/) with the details. I’ll do my best to help.

### When I activate Admin Menu Editor, a superfluous “Welcome” or “What’s New” page that belongs to another plugin appears under the “Dashboard” menu item. Why?

Many plugins have “Welcome”, “Getting Started” or “What’s New” screens that show up when you install the plugin. They are supposed to be temporary and usually disappear after you’ve visited them once. However, some popular plugins hide these pages in a way that’s not fully compatible with Admin Menu Editor Pro. As a result, the menu editor unintentionally makes them visible.

Report menus like that by using [the contact form](http://adminmenueditor.com/contact/). Please include the admin page URL(s) and the name of the plugin that they belong to.

### I can’t access menu settings when iThemes Security is active.

That’s a plugin conflict. To fix it, please deactivate the “Enable safe version of JavaScript” setting in iThemes Security.

### PHP Compatibility Checker reports a PHP 7.0 compatibility issue in ParsedownLegacy.php.

You can safely ignore this warning. The file 
```
ParsedownLegacy.php
```

 is included for backwards-compatibility purposes. It will only be used on sites that are running a very old version of PHP. If you’re running PHP 5.3 or later, the plugin won’t use this file.

### I changed something and now I can no longer access the menu editor. Is there a way to get it back?

You can reset the menu configuration back to the default by going to:

```
http://your-site-here.com/wp-admin/?reset_admin_menu=1
```

You must be logged in as an administrator for this to work.

### I get an error message when trying to save the menu.

This usually means there is a server configuration issue. ModSecurity, a popular application firewall, is the most common culprit.

**Request size limits**

One possibility is that the web server or the firewall have been configured to limit form fields (or HTTP requests in general) to a certain maximum length. Depending on your site and how much customization you’ve done, menu configuration data can get large enough to exceed that limit. This will cause the server to cut off part of the menu data.

The best solution is to update the server configuration and increase the size limit. Something like 300 KB should be more than enough. If you’re not sure how to change these settings on your server or firewall, try asking your hosting provider.

**Excessively strict filters**

Some hosts configure their firewall to block requests that contain specific keywords or characters. If your admin menu happens to contain those keywords (e.g. in menu titles), the firewall will prevent you from saving the menu.

For example, in one case the firewall was set up to filter out any POST fields that contain the keywords “update” and “set”, presumably as a way to prevent SQL injection. Since the admin menu contains items named “**Update**s” and “**Set**tings”, this filter made it impossible to save the menu.

To fix the problem, change or disable the offending firewall rule. The firewall logs can help track down the setting you need to change.

## Licensing

### I’ve lost my license key, how do I get it back?

To retrieve your license key, enter your email address [in this form](http://adminmenueditor.com/resend-details/). The server will email you the key and the download link for the latest plugin version.

### Can I upgrade to a different license?

Yes, you can upgrade your license at any time. An upgrade costs 75% of the full license price. You also get an extra year of updates and support when you upgrade.

Go to [this page](http://adminmenueditor.com/upgrade-license/) and enter your license key in the appropriate field to see the available upgrade options.

### Does a Multisite installation count as one site or multiple?

For licensing purposes, a Multisite installation counts as one “site”. Even if your Multisite network contains hundreds of sub-sites, it will only take up one site slot on your license.

### How does license expiration work?

Each license comes with 1 year of free updates and support. You can [renew your license](http://adminmenueditor.com/upgrade-license/) at any time to extend this by another year.

If you let your license expire, you will no longer receive plugin updates, and you will not be eligible for support. However, you can still keep using the version of the plugin that you have installed – it won’t automatically stop working just because your license has expired.

### Can I activate the license key without having to enter it manually?

Yes, you can do that by adding a line of code to your 
```
wp-config.php
```

 file:

```
define('AME_LICENSE_KEY', 'your-key-here');
```

The plugin will automatically activate the specified key if the site doesn’t already have a license or if the site URL changes.

### What’s your refund policy?

I want you to be happy with your purchase, which is why I offer a no questions asked 60 day money back guarantee. If you are not completely satisfied with the plugin for any reason, just [contact me](http://adminmenueditor.com/contact/) within 60 days for a full refund.

### What is a “Business [Legacy]” license?

If you purchased the plugin a while ago, you may see a special “Business [Legacy]” plan when you go to renew your license. When the licensing model was changed in early 2018, everyone who had an unlimited “Business” license was switched to an equivalent “Business [Legacy]” plan. A “Business [Legacy]” license is essentially the same as an “Agency” license: you can use it on an unlimited number of sites and you have access to all add-ons.

This plan is only available to existing customers who have previously purchased an unlimited “Business” license.

---

