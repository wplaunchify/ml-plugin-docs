# Troubleshoot Wordpress Errors

*Category from The Events Calendar documentation*

---

## Troubleshooting WordPress Errors on Events

**Source:** [https://docs.nexcess.com/software/the-events-calendar/troubleshoot-wordpress-errors/](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-wordpress-errors/)

Are you getting crazy-looking error messages from The Events Calendar? Here are some of the common errors you might encounter and what they mean. Click the message for more details.

- [wp_debug_display mode is on](#wp_debug)
- [To begin using [Plugin Name], please install the latest version of The Events Calendar](#install_tec)
- [The following plugins are out of date…](#out_of_date)
- [Plugin could not be activated because it triggered a fatal error](#fatal_error)

### wp_debug_display mode is on

This is just a notice that lets you know your site is in debug mode. It’s a handy notice, but in general, it should be turned off on live sites to avoid security risks.

Sometimes, however, our support team will suggest turning on Debug Mode to help troubleshoot an issue you may be experiencing with the plugin. Or, maybe you hired a developer who turned it on for you and forgot to take it off. Either way, turning it off is safe if you’re done troubleshooting the issue, and the notice will go away.

How do you turn off Debug Mode?

- Turn it off in your *wp-config.php* file. Here are [the WordPress Codex instructions](https://wordpress.org/support/article/debugging-in-wordpress/) on how to do that.

### To begin using [Plugin Name], please install the latest version of The Events Calendar

![kb-common_error_messages-latest_version](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-common_error_messages-latest_version.jpg)

This notice lets you know that you have an add-on for The Events Calendar plugins installed and activated, but need to have the actual [The Events Calendar plugin](http://tri.be/shop/wordpress-events-calendar/) itself installed activated as well. Our premium plugins are extensions of the core plugin and require it in order to properly function.

Install and activate The Events Calendar plugin and those little error messages will go away.

### The following plugins are out of date…

![kb-common_error_messages-install_tec](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-common_error_messages-install_tec.jpg)

Since our premium plugins tend to rely on each other, we recommend using the same version number for all of them. For example, version 3.8 of The Events Calendar should be paired with version 3.8 of The Events Calendar Pro which should be paired with version 3.8 of The Filter Bar. And so on.

This notice will display if the plugin versions you are running are out of sync. The plugins will remain installed and active, but you may experience issues with the functionality. [Update](https://docs.nexcess.com/software/the-events-calendar/automatic-updates/) (or downgrade) your plugins to the same common version number and this notice will disappear.

If you are having trouble updating your premium plugins, it’s probably because your license has [expired](https://docs.nexcess.com/software/the-events-calendar/renewing-an-expired-license-subscription/). Once you [renew the license](https://docs.nexcess.com/software/the-events-calendar/renewing-an-expired-license-subscription/), you’ll have access to updates again.

### Plugin could not be activated because it triggered a fatal error

If you’re seeing this message, chances are that you already have another version of the same plugin installed and activated. No worries, though! Make sure all earlier version of the plugin have been deactivated before trying to activate the new one.

---

