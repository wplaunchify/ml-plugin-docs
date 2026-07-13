# Understanding Php Deprecated Notices On Your Site

*Category from Kadence Theme documentation*

---

## Understanding PHP Deprecated Notices on Your Site

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/understanding-php-deprecated-notices-on-your-site/](https://www.kadencewp.com/help-center/docs/kadence-theme/understanding-php-deprecated-notices-on-your-site/)

If you’ve noticed one or multiple **PHP Deprecated Notices** on your WordPress website, there’s no need to worry. These messages aren’t errors caused by your Kadence theme or plugins. Your site is still working just fine. These are warning messages intended for developers. This document will provide an overview of what *PHP Deprecated Notices* are, why they occur, and how you can remove them from showing up on your WordPress website.

What are PHP Deprecated Notices

As PHP (the programming language used within WordPress) continues to evolve, some older code functions get marked as “deprecated.” This is considered a warning and not a true error.

To better understand PHP Deprecated Notices, take note of the key details below.

- **It’s a notice for developers.** These messages are intended to let developers know it’s time to update the code so it’s ready for future versions of PHP. These are not user-facing errors.
- **Everything still works right now.** Nothing is broken, and your site is running normally. These are warnings for the future.
- **They’ll be removed eventually.** Deprecated functions are set to be phased out in a future PHP update. Developers will work on replacing deprecated functions before the official support is removed. In return, when PHP updates to the next version, product developers are responsible for ensuring deprecated functions are properly replaced or accounted for.

Why You May See These Notices

You’re seeing these messages because WordPress debug mode is enabled on your site. When debug mode is on, WordPress displays all kinds of messages, like PHP Deprecated Notices, both on the **front** **end** and **in** **error** **logs**. These messages are meant for developers and don’t appear on live sites unless debugging has been manually turned on.

How to remove PHP Deprecated Notices

While it might seem alarming, these notices don’t need to be reported to support. They’re not critical errors and won’t affect your site’s performance or functionality. Instead, here’s what you can do to remove or hide these errors.

- **Turn off debugging on live sites**. For any live or production site, debugging should be disabled. This keeps *PHP notices* (including deprecated warnings) from showing up to visitors. [Click here](https://docs.nexcess.com/software/kadence/enable-wordpress-error-logs/#disabling-debugging-after-use) to learn how.
- **Keep your Kadence products up to date.** Kadence regularly releases updates to ensure compatibility with the latest WordPress-supported PHP versions. Updating your theme and plugins helps ensure everything stays smooth and secure.
- **Stick with a supported PHP version.**Even if newer versions display more notices, it’s still best to use a PHP version that WordPress officially supports. [Click here](https://wordpress.org/about/requirements/) to see the current WordPress requirements.

---

