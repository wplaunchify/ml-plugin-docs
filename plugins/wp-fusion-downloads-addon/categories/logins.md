# Logins

*Category from WP Fusion - Downloads Addon documentation*

---

## BuddyBoss Logins

**Source:** [https://wpfusion.com/documentation/logins/logins-buddyboss-app/](https://wpfusion.com/documentation/logins/logins-buddyboss-app/)

### Overview

WP Fusion’s [Logins Addon](https://wpfusion.com/documentation/logins/overview/) includes additional login tracking features specific to [BuddyBoss](https://wpfusion.com/documentation/membership/buddyboss/) and the [BuddyBoss App](https://wpfusion.com/documentation/membership/buddyboss/).

You can apply tags when users first log in to your BuddyBoss app, apply tags when they create an account via [Social Login](https://www.buddyboss.com/resources/docs/components/buddyboss-social-login/), as well as track the last date they logged in to the app in your CRM.

![Screenshot of WP Fusion's Logins addon BuddyBoss settings](https://wpfusion.com/wp-content/uploads/2024/07/logins-buddyboss-integration-1024x419.jpg)WP Fusion’s [Logins Addon](https://wpfusion.com/documentation/logins/overview/) can apply tags in your CRM when users log in to the BuddyBoss app for the first time.
The **First Login to BuddyBoss App** and **BuddyBoss Social Login Registration**settings are found at the bottom of the Logins tab in the WP Fusion settings.

![screenshot](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-app-login-tracking-1024x370.jpg)

By enabling the **Last Login – BuddyBoss App** field for sync from the [Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/), you can track the last time users logged into the app in your CRM. This is a great way to get a sense of your most active app users.

### How it works

App login tracking can work two ways, depending on if you’ve selected to track logins “When a user actually logs in” vs. “Once a day on site visit”. For more information see the [Login Count Method](https://wpfusion.com/documentation/logins/overview/#login-count-method).

If set to **Once a day on site visit** WP Fusion will track each user’s interactions with the BuddyBoss app. If there has been no activity on the current day, then the timestamp will be saved to the database, and the last login date will be synced. When the user returns the next day (or any other day), WP Fusion compares the current date to the saved value and only syncs the time to your CRM if it’s a different date.

If set to **When a user logs in**, WP Fusion will track BuddyBoss app logins by looking at each user’s 
```
_bbapp_jwt_jti
```

 meta key, which BuddyBoss uses to track user logins and devices using the app.

When the user’s login date is updated, indicating a new login, WP Fusion will sync the date and time to your CRM.

WP Fusion will only apply the “First Login” tags when the app usermeta key is created for a user the first time, which means you can safely activate the addon on sites with existing BuddyBoss app users, and only new users will be tagged with their first login.

---

## WooCommerce Post-Purchase Redirects

**Source:** [https://wpfusion.com/documentation/logins/logins-woocommerce/](https://wpfusion.com/documentation/logins/logins-woocommerce/)

### Overview

When WooCommerce is active, the Logins addon will bypass any login redirects on the My Account and Checkout pages. This is to prevent people from getting redirected when they’re trying to complete a purchase or update their billing information.

### Order received page redirects

In addition, there is an option added to the Logins tab in the WP Fusion settings for **WooCommerce Redirects.** When enabled, this allows you to run login redirect rules on the Order Received page after someone has finished checking out in your store.

![](https://wpfusion.com/wp-content/uploads/2020/03/logins-woocommerce-1024x242.jpg)

Using this option you can redirect customers to custom pages based on tags applied at checkout.

**Note:** For best results it’s recommended to turn off *Asynchronous Checkout* from the Integrations tab in the WP Fusion settings, so that all tags have been applied by the time any redirects are triggered.

#### Example

Here’s one example configuration, using the login redirect rules editor.

![](https://wpfusion.com/wp-content/uploads/2020/03/logins-woocommerce-example-1024x285.jpg)

In this example:

- If someone has purchased from you and is logged in for the first time, and the *General Membership* tag was applied, they will be redirected to the New Member Welcome page.
- If someone was tagged with *Event Purchaser* they will be redirected to the Event Details page.
- If someone is tagged with *Profile Incomplete* they will be redirected to the Edit Your Profile page.

#### A warning

Note that because the redirect happens before the order received page loads, this will prevent any other plugins or scripts from running on the order received page.

If you’re using Google Analytics or the Facebook pixel to track conversions, you should not redirect people away from the order received page.

---

## Changelog

**Source:** [https://wpfusion.com/documentation/logins/logins-changelog/](https://wpfusion.com/documentation/logins/logins-changelog/)

#### #1.4.1 - 1/13/2025

- ✨ New Added option to apply tags when a user registers via [BuddyBoss social login](https://www.buddyboss.com/resources/docs/components/buddyboss-social-login/)
- ⚡️ Improved If login tracking is set to "Once a day on site visit", the last login date will now also be synced for the BuddyBoss app once per day on app engagement
- 🔧 Fixed Fixed PHP warning 
```
Attempt to read property "ID" on false
```

 if the 
```
wp_login
```

 hook was fired on an invalid username

#### #1.4.0 - 7/31/2024

- ✨ New Added support for [tracking BuddyBoss App logins](https://wpfusion.com/documentation/logins/logins-buddyboss-app/)
- ✨ New Added support for login redirects with Bricks login forms
- ⚡️ Improved Some plugins sloppily trigger 
```
wp_login
```

 twice during a single login. The login count will now only be updated on the first time
- ⚡️ Improved Added 
```
wpf-logins
```

 as the source to the logs for actions triggered by user logins
- 🔧 Fixed Fixed Once A Day On Site Visit setting comparing the user's last login in GMT vs the site's current time in local time, resulting in unnecessary user meta updates
- 🛠️ Dev Added action 
```
wpf_logins_begin_login_actions
```

 at the start of the login process (or the once a day login tracking)
- 🛠️ Dev Last login date will now be stored in UTC instead of local time, to prevent issues with timezone conversion when syncing to the CRM

#### #1.3.3 - 10/10/2022

- 🔧 Fixed Fixed First Login tags not being applied when the user was auto-logged-in as a result of a WooCommerce checkout
- 🔧 Fixed Fixed fatal error "Argument #2 ($timestamp) must be of type int, string given" with PHP 8.1+ when an unexpected 
```
wpf_last_login
```

 date was displayed in the users list

#### #1.3.2 - 8/31/2022

- 🔧 Fixed Fixed login redirects running during REST API requests and breaking the BuddyBoss app login

#### #1.3.1 - 8/25/2022

- 🔧 Fixed Fixed fatal error "Argument #2 ($timestamp) must be of type int, string given" with PHP 8+

#### #1.3.0 - 8/9/2022

- ✨ New Added option to enter either a URL *or* page for the Login Count Redirect Rules setting
- ✨ New Added additional usermeta flag 
```
wpf_stale_account
```

 to prevent stale account tags being applied to all users when the Apply Tags - Stale Account setting was modified
- ⚡️ Improved The daily query for stale user accounts will now only query users whose last login was within 48 hours of the specified number of days
- 🔧 Fixed Fixed login redirects happening on WooCommerce login forms

#### #1.2.5 - 1/14/2022

- ⚡️ Improved When using "once a day on site visit" login tracking, logins will no longer be tracked if switching into another user's account using the User Switching plugin
- Removed v1.2 upgrade logic, was running repeatedly on some sites (reason unknown)

#### #1.2.4 - 4/15/2021

- Stale account tags will now be removed during "Once a day on site visit" daily check, instead of waiting for a wp_login event
- Reduced number of database queries required displaying admin settings panel
- 🔧 Fixed Fixed login redirects running during AJAX requests
- 🔧 Fixed Fixed errors during login if WP Fusion wasn't active

#### #1.2.3 - 11/16/2020

- 🔧 Fixed Fixed login count not updating when login count method was set to "When a user actually logs in"
- "Recovered" account tags will now be removed if the account becomes stale again

#### #1.2.2 - 9/28/2020

- Updated for tags select compatibility with WP Fusion 3.35

#### #1.2.1 - 9/7/2020

- Re-enabled login redirects on WooCommerce's My Account page
- 🔧 Fixed Fixed changed date( 'z' ) to current_time( 'z' ) for determining the current day when using Once A Day on Site Visit login tracking
- 🔧 Fixed Fixed stale account tags only being applied if the cron job was triggered by an admin
- 🔧 Fixed Fixed Uncaught ArgumentCountError during login with WooCommerce on some configs

#### #1.2 - 7/20/2020

- Blocked login redirects from running on WooCommerce checkout / account logins
- Moved last_login usermeta key to wpf_last_login to prevent plugin conflicts
- ✨ New Added .pot file

#### #1.1.3 - 5/12/2020

- Changed time() to current_time() to respect the site's timezone
- 🔧 Fixed Fixed login count rules not respecting required tags

#### #1.1.2 - 4/1/2020

- 🔧 Fixed Fixed login count not updating when someone logged in and count method was set to Daily

#### #1.1.1 - 3/25/2020

- Made daily login check the default
- 🔧 Fixed Fixed login daily check not updating last login date
- Removed use of transients in daily login check

#### #1.1 - 3/17/2020

- ✨ New Added Last Login column to users view
- ✨ New Added WooCommerce checkout redirects
- Stopped setting last_login when users are imported

#### #1.0.1 - 8/27/2019

- 🔧 Fixed Fixed last_login not being tracked for admins
- ✨ New Added catchall redirect

#### #1.0 - 8/6/2019

- Increased limit on number of posts shown in dropdowns
- 🔧 Fixed Fixed Stale Accounts tags not applying

#### #0.9 - 6/2/2019

- Prevented last_login field from loading during a webhook

#### #0.8 - 5/31/2019

- ✨ New Added last login to admin user profile
- 🔧 Fixed Fix for login count field not syncing
- last_login will now be set when a user is imported

#### #0.7 - 5/21/2019

- ✨ New Added recovered stale login tagging
- ✨ New Added compatibility class
- 🔧 Fixed Fixed login count rules not applying tags

#### #0.6 - 5/6/2019

- ⚡️ Improved Improved login redirect method to be better compatible with other plugins
- ✨ New Added login counting
- ✨ New Added login count redirect / tagging rules

#### #0.5 - 3/17/2019

- ✨ New Added last_login field to be available for syncing
- PilotPress compatibility fixes

#### #0.4 - 12/19/2018

- Made redirects more aggressive to prevent being overruled by other plugins
- 🔧 Fixed Fix for redirects to a protected page ignoring current user's tags

#### #0.3 - 10/13/2018

- Compatibility fixes with Ultimate Member
- Made public class publicly accessible

#### #0.2 - 6/12/2018

- 🔧 Fixed Fix for incorrect update notices

#### #0.1 - 6/9/2018

- Initial release

---

## Logins Overview

**Source:** [https://wpfusion.com/documentation/logins/overview/](https://wpfusion.com/documentation/logins/overview/)

### Overview

The Logins addon for WP Fusion gives you tools for tracking user logins on your site, and performing actions if users meet certain criteria.

You can apply tags when a user first logs in, when a user hasn’t logged in for a certain period of time, and perform login redirects based on a user’s tags.

These features give you a better sense of how your users are interacting with your site, and more options for increasing engagement and retaining members and customers.

### General settings

The Logins Addon adds a new Logins tab to the main WP Fusion settings where you will find several options.

![](https://wpfusion.com/wp-content/uploads/2018/06/logins-addon-settings-1-1024x840.jpg)

#### First Login / Stale Accounts

There are four options here for tracking first logins and ongoing engagement with your site:

- **Apply Tags – First Login:**These tags will be applied to a user when they log into your site for the first time. This works for all users who log in for the first time *after* you’ve installed the Logins Addon. WP Fusion won’t apply these tags to existing users.
- **Apply Tags – Stale Accounts:**WP Fusion can track how long it’s been since a user last logged in, and apply tags if they’ve been gone for longer than the specified period. If they log in again after the specified time has passed, the selected tags will be removed.
- **Number of Days:**This is the number of days before an account will be considered “stale”.
- **Apply Tags – Recovered Accounts:**These tags will be applied if someone logs in to an account that was considered “stale”. If the account becomes stale again, these tags will be removed.

**Note:** If you’re using stale account tracking, it’s best to set the **Login Count Method** to **Once a day on site visit**.

By default WordPress will keep a user logged in for two weeks, so even if someone is visiting the site every day, they might only “log in” once every two weeks, which could cause their account to get tagged as stale if you’re only counting logins as **When a user actually logs in**

#### Login Count Method

The Logins Addon includes two options for how to qualify a login:

- **Once a day on site visit:**(Default) This will update the user’s last login date and login count once a day when they visit your site.
- **When a user actually logs in:**This will update the user’s last login date and login count when they actually submit a login form with a username and password and log in to your site.

While **When a user actually logs in**is a more accurate measure of how often people are logging in to your site, it will update less frequently as WordPress sets a cookie for logged in users for two weeks, meaning they may visit the site multiple times during that period even though they only “logged in” once.

#### Login Count Rules

![](https://wpfusion.com/wp-content/uploads/2018/06/logins-count-1024x222.jpg)

Here you can specify rules based on the number of times someone has logged in.

- **On / Every:**Choose “On the Nth login” to have the rule run just once when the number of logins has been reached. Choose “Every N logins” to run the rule each time the number has been reached.
- **Required tags:**You can make the rule only run if the user has the specified tags.
- **Page:**This is the page the user will be redirected to on login.
- **Apply tags:**You can specify any tags to be applied to the user when the condition has been met.
- **Login Count Method:**Here you can specify how logins should be counted: either when a login form has been submitted, or once a day on site visit.

#### Login Redirect Rules

Here you can specify redirects on login based on a user’s tags.

![](https://wpfusion.com/wp-content/uploads/2018/06/logins-redirects-1-1024x172.jpg)

Rules are prioritized from the top down. For each rule, select one or more tags as a trigger. In the redirect dropdown you can either type the name of a page on your site, or enter an external URL.

### Syncing meta fields

The Logins Addon also adds a new section to the field mapping list under the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2018/06/logins-fields-1024x168.jpg)

Here you can specify custom fields in your CRM to store the **Last Login** and **Login Count** fields. These values will be updated in your CRM each time someone logs in.

**Note:** The “Login count” and “Last login date” can only be synced to the CRM and cannot be loaded back. This is to avoid accidentally erasing the login count or loading it from another site.

---

