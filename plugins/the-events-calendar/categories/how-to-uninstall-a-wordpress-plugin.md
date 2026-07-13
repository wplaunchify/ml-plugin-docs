# How To Uninstall A Wordpress Plugin

*Category from The Events Calendar documentation*

---

## How to Uninstall a WordPress Plugin

**Source:** [https://docs.nexcess.com/software/the-events-calendar/how-to-uninstall-a-wordpress-plugin/](https://docs.nexcess.com/software/the-events-calendar/how-to-uninstall-a-wordpress-plugin/)

Of course, we hope you’ll love using [The Events Calendar](https://theeventscalendar.com/products/wordpress-events-calendar/) and always use our plugin, but we understand that situations come up where you’ll need to uninstall a WordPress plugin.

In this article, we’ll show you how to uninstall any WordPress plugin the right way so that you don’t leftover database entries or plugin files left behind.

## Uninstall a plugin from the WordPress Dashboard

You can uninstall a WordPress plugin in a few different ways. The first way is to head over to the **WordPress Dashboard** **> Plugins > Installed Plugins** and click on **Deactivate** next to the plugin you’d like to uninstall. Then click **Delete**.

![Delete a WordPress plugin from the WordPress Dashboard](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-10-11-at-6.50.44-AM.jpg)

This is the simplest method to uninstall a plugin, although it does not remove any additional data from the plugin.

## Uninstall a plugin via FTP

If you’re comfortable using FTP, you can access your plugin files that way and delete them from there.

To do this, simply [connect to your site via FTP](https://docs.nexcess.com/software/the-events-calendar/using-ftp/). Navigate to your 
```
/wp-content/plugins
```

 folder and locate the plugin you want to delete to remove it from your server.

Like the previous method, this method does not remove any additional data created by the plugin. If you plan never to use the plugin again, you may want to take some extra steps to remove that data.

## Manually clean up tables

The above methods are great for a quick uninstall, but they can leave behind plugin files that can slow down your site’s performance over time.

There are a few different ways to manually clean up database tables left behind. We recommend you [back up your WordPress site](https://docs.nexcess.com/software/the-events-calendar/creating-site-backups/) first, and then you can proceed with one of the following methods.

### Use a plugin

You can use a plugin to remove database tables manually. We recommend [Advanced Database Cleanup](https://wordpress.org/plugins/advanced-database-cleaner/) to help you delete orphaned tables.

### Uses phpMyAdmin

Alternatively, you can log in to phpMyAdmin and search for the plugin files you’d like to delete. Many plugins name their tables similarly to their plugin name, making it easy to find them.

Note: *we highly recommend that you backup your database before you proceed to do this, even if you’ve performed the cleanup that was mentioned above.*

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-14.jpg)

In the image above, notice how the tables that are used by tec contain the keyword “
```
_tec_
```

” in them. Once you’ve run your database cleanup process via one of the plugins mentioned above you may manually log into your phpMyAdmin dashboard and then search for tables as shown above and delete them.

---

