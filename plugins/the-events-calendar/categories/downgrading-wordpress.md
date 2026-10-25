# Downgrading Wordpress

*Category from The Events Calendar documentation*

---

## Downgrading WordPress

**Source:** [https://docs.nexcess.com/software/the-events-calendar/downgrading-wordpress/](https://docs.nexcess.com/software/the-events-calendar/downgrading-wordpress/)

This article explains how to update WordPress to the latest version, and how to go back to an earlier version if an update causes a compatibility problem with your plugins or theme. Whichever you’re doing, take a full backup of your site first. Downgrading is a short-term fix, so plan to move back to the latest version once the problem is solved.

Note

				

If your site is hosted with Nexcess, see [WordPress Upgrade and Downgrade](https://docs.nexcess.com/hosting/cms/wordpress/troubleshooting/wordpress-upgrade-and-downgrade/) in our hosting docs for options specific to your hosting plan.

## Before You Start

- **Back up your whole site**, including the database and all files.
- **Test on a staging site** if you can, so you can see the result before changing your live site.
- **Check what your plugins need.** Each plugin has a minimum WordPress version. If you downgrade below it, that plugin may stop working, so check the requirements of your plugins and theme before choosing a version.

## How Do I Update WordPress?

1. In your WordPress dashboard, go to **Dashboard > Updates**.
2. Click **Update to version** followed by the version number.
3. If you see **Database Update Required** afterwards, click **Update WordPress Database**.

## How Do I Downgrade WordPress?

Warning

				

Running an older version of WordPress can leave your site open to security issues that newer versions fix. Only downgrade to solve a specific problem, and update again as soon as you can.

If you have a backup from before the update, restoring it is often the cleanest option, because it also brings back your database exactly as it was. The two methods below change only the WordPress files, and they can’t undo changes the newer version made to your database.

### Option 1: Use a Plugin

The free [WP Downgrade | Specific Core Version](https://wordpress.org/plugins/wp-downgrade/) plugin downloads the WordPress version you choose and installs it the same way as a normal update.

1. Install and activate the plugin.
2. Go to **Settings > WP Downgrade** and enter the version number you want.
3. Go to **Dashboard > Updates** and run the update.

### Option 2: Downgrade Manually

You’ll need access to your site’s files, through FTP, SFTP or your host’s file manager.

1. Download the version you need from the [WordPress Release Archive](https://wordpress.org/download/releases/) and unzip it on your computer.
2. Deactivate your plugins.
3. On your site, delete the WordPress core files and folders, but keep 
```
wp-config.php
```

, the 
```
wp-content
```

 folder, and your 
```
.htaccess
```

 and 
```
robots.txt
```

 files if you have them.
4. Upload the files from the unzipped 
```
wordpress
```

 folder, except its 
```
wp-content
```

 folder, so your themes, plugins and uploads aren’t touched.
5. Log in to your dashboard. If you see **Database Update Required**, click **Update WordPress Database**.
6. Reactivate your plugins one at a time, checking your site after each one.

For more detail on replacing WordPress files by hand, see [Upgrading WordPress](https://developer.wordpress.org/advanced-administration/upgrade/upgrading/) in the WordPress documentation.

## Related Articles

- [How to Test for Plugin Conflicts](https://docs.nexcess.com/software/general/how-to-test-for-plugin-conflicts/): find out whether a plugin or your theme is causing a problem after an update.
- [Download Plugin and Theme Files](https://docs.nexcess.com/software/accounts-licensing/download-plugin-and-theme-files/): download earlier versions of our plugins and themes.
- [Changelogs](https://docs.nexcess.com/software/changelogs/): release notes for every product, by brand.

---

