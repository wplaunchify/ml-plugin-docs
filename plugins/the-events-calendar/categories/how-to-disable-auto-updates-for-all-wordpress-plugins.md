# How To Disable Auto Updates For All Wordpress Plugins

*Category from The Events Calendar documentation*

---

## How to Disable Auto-updates for All WordPress Plugins

**Source:** [https://docs.nexcess.com/software/the-events-calendar/how-to-disable-auto-updates-for-all-wordpress-plugins/](https://docs.nexcess.com/software/the-events-calendar/how-to-disable-auto-updates-for-all-wordpress-plugins/)

In recent versions of WordPress, it is possible to select which plugins will have an Auto-update feature (In the **Plugins > Installed Plugin** section of the WordPress Dashboard), to avoid the task of doing it manually, especially for plugins that have new releases frequently.

![Enable Auto Updates](https://docs.nexcess.com/wp-content/uploads/2026/06/EnableAutoUpdates.jpg)

But it is advisable to test the plugin update on a **staging site** to make sure it doesn’t cause any issues, and then proceed to update it on the production site, so disabling Auto-update for certain plugins can be quite useful.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/DisableAutoUpdates-1024x342-1.jpg)

However, there are times when we need to disable or enable the Auto-updates feature for **all plugins**, so that none of them update automatically and no one can change it. To do this, we can insert the following PHP piece of code at the end of the *functions.php* theme file (ensure not to overwrite any existing code there) or by using the [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin:

```
add_filter( 'auto_update_plugin', '__return_false' );
```

After this, the Auto-updates features will be disabled for all plugins:

![Auto Updates disabled](https://docs.nexcess.com/wp-content/uploads/2026/06/AutoUpdatesDisabled-1024x412-1.jpg)

In this way, we will ensure that our website can undergo unexpected changes with the automatic update of plugins.

But please remember that keeping your WordPress plugins updated is crucial for **security and performance**, so, in this case, we should always be careful to update them manually and consistently, testing it on a staging site as mentioned above.

---

