# Data Processing Notes

*Category from AME Toolbar Editor documentation*

---

## About Data Processing

**Source:** [https://adminmenueditor.com/documentation/data-processing-notes/](https://adminmenueditor.com/documentation/data-processing-notes/)

# About Data Processing

                    
                    This page describes what personal data the plugin collects, where and how long that data is stored, and if/how it is shared. This information applies to the current version of Admin Menu Editor Pro and to its add-ons.

“You” refers to the person who installs and configures the plugin. “We” and “us” refers to IK Gling and/or Jānis Elsts. (Jānis Elsts is me, the guy who made the plugin. IK Gling is my business.)

Table of Contents- [Data Stored Locally](#data-stored-locally)- [Summary](#summary)
- [License Token](#license-token)
- [User Permissions](#user-permissions)
- [“Who can access this plugin” Settings](#who-can-access-this-plugin-settings)
- [Menu and Widget Properties](#menu-and-widget-properties)
- [Data You Enter in Plugin Forms](#data-you-enter-in-plugin-forms)
- [Data Sent to AdminMenuEditor.com](#data-sent-to-adminmenueditor-com)- [License Activation and Deactivation](#license-activation-and-deactivation)
- [Checking for Updates](#checking-for-updates)- [Data Sent](#data-sent)
- [How We Use the Data](#how-we-use-the-data)
- [How Long It’s Stored](#how-long-its-stored)
- [Server Logs](#server-logs)

## Data Stored Locally

In this context, “locally” means “in the WordPress database”. The plugin does not create or modify any files on your server.

### Summary

The plugin does not store any information about unregistered visitors. In its default, out-of-the-box configuration it also does not store any personally identifying information about registered users.

However, depending on how you configure the plugin, it may collect and store some information about registered users or you. This is usually limited to license details, usernames, and user IDs.

Normally, uninstalling the plugin will also delete all of that data.

### License Token

When you activate your license key, the plugin will store a unique, randomly generated token in the database. The token is used to find and validate your license when checking for plugin updates. By itself, the token does not reveal your identity. Only people who have access to our license database can link a token to a specific customer. We do not share that database with anyone, except if required by law.

Typically, the token is stored for as long as the plugin is installed. You can remove it at any time by clicking the “License” link on the “Plugins” page and then clicking the “Remove License” button. You can also contact us to have a specific site/token combination removed from our database. Note that this will prevent that site from downloading plugin updates.

If you migrate your WordPress database from one site or domain to another, the plugin may store license information about both the old and the new site.

### User Permissions

When you use the plugin to hide a menu item, widget, meta box, or another part of the WordPress interface from a specific user, the plugin will store the login and/or ID of that user. To remove that data, reset the permissions for that item to the default.

For settings that don’t have a reset button (like the “Meta Boxes” tab), you might have to reset the entire plugin configuration by reinstalling the plugin.

When you hide users via the “Users” tab, the plugin will store the corresponding user IDs. To remove that data from the database, click the “Remove” link below the user entry and save changes.

### “Who can access this plugin” Settings

When you select the “Only the current user” option, the plugin will store the current user’s ID. To remove that data, change “Who can access this plugin” to any other setting.

Similarly, when you check the box that says “Hide the “Admin Menu Editor Pro” entry on the “Plugins” page from other users”, the plugin will also store the current user’s ID. To remove it from the database, uncheck that box.

### Menu and Widget Properties

The plugin collects and stores a lot of information about the WordPress admin interface. This includes admin menu titles, Toolbar/Admin Bar item titles, menu URLs, required capabilities, icons, dashboard widget titles, meta box titles and so on.

Normally, these properties don’t include any personal data. However, if one your other plugins displays personal information in the aforementioned places, Admin Menu Editor Pro might store that information along with its own settings.

To remove this information, you will first need to configure the relevant plugin or theme so that it no longer displays personal details in the admin menu/Toolbar/etc. Then go to the relevant AME screen, click the “Refresh” button (if applicable), and save the settings.

### Data You Enter in Plugin Forms

As you might expect, when you enter something in the plugin’s settings page(s), the plugin will store it in the database. The plugin doesn’t make any attempt to detect or remove personal data from user input.

## Data Sent to AdminMenuEditor.com

### License Activation and Deactivation

When you activate your license on a site, the plugin sends some information to adminmenueditor.com. This includes the license key and the site URL. To enforce license terms and prevent abuse, we store the URL of each site where you’ve activated your license. We also store the date and time of the activation, and the most recent date and time when the plugin checked for updates.

We retain this information as long as the key is in use and the plugin is active, and for up to 60 days after that.

You can view or remove licensed sites at any time. Here’s how:

1. Go to the “Plugins” page on any site where the plugin is active.
2. Click the “License” link.
3. Switch to the “Manage Sites” tab.
4. Enter your key in the form.

You will get a list of all sites that are currently associated with your license. You can remove an entry by clicking the “Remove License” button. This will prevent that site from downloading updates. Alternatively, you can contact us to have some or all of your site URLs removed from our database. Please include your license key for verification.

Usually, when you uninstall the plugin via the WP admin, it will also delete the licensing data associated with that site.

### Checking for Updates

While the plugin is active, it periodically contacts adminmenueditor.com to check for plugin updates and license changes. When this happens, it sends us some information about the active license and the system environment.

#### Data Sent

- Site URL
- License token or key
- Installed plugin version
- WordPress version
- PHP version
- WordPress locale (e.g. “en_US”)

#### How We Use the Data

- We use the URL and license token/key to verify that the site is licensed and can receive updates.
- We store a “last update check” timestamp. This lets us calculate aggregate statistics like the total number of in-use licenses, and to automatically delete data about sites where the plugin is no longer active.
- For security purposes, we also store an anonymized IP address (the last octet is replaced with a zero).
- In general, version numbers and locale names are not personal data. Still, to minimize risk, we only store the first two segments of a version number (e.g. “4.9.6” becomes “4.9”). We use this information to generate aggregate, anonymous usage statistics, which helps us improve compatibility and decide how to prioritize development tasks.
- We may also use the version numbers to ensure we only send you updates that are compatible with your site.
- We store a truncated hash of the site URL and use that to calculate an approximate number of active installs.

#### How Long It’s Stored

Data about individual requests is stored for up to 60 days.

### Server Logs

Because license activation and update requests are sent over HTTPS, some of the data that’s mentioned above may end up in our web server logs. These logs are retained for a limited time. See our [privacy policy](/privacy-policy/) for more information.

---

