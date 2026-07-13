# How To Fix The Wordpress White Screen Of Death Wsod

*Category from The Events Calendar documentation*

---

## How to Fix the WordPress White Screen of Death (WSOD)

**Source:** [https://docs.nexcess.com/software/the-events-calendar/how-to-fix-the-wordpress-white-screen-of-death-wsod/](https://docs.nexcess.com/software/the-events-calendar/how-to-fix-the-wordpress-white-screen-of-death-wsod/)

The **White Screen of Death (WSOD)** is a common WordPress issue where your website displays a blank white screen instead of loading properly. This can be caused by various factors, including plugin conflicts, theme errors, or server issues. This guide will walk you through the steps to troubleshoot and resolve the problem.

#### Enable WordPress Debugging

Enabling debugging can help identify the root cause of the issue by displaying error messages.

**Steps to Fix:**

1. Access your website files via **FTP** or your hosting provider’s **File Manager**.
2. Locate the 
```
wp-config.php
```

 file in the root directory of your WordPress installation.
3. Open the file in a text editor and find the line:

```
define('WP_DEBUG', false);
```
4. Change it to:

```
define('WP_DEBUG', true); define('WP_DEBUG_LOG', true); define('WP_DEBUG_DISPLAY', false);
```
5. Save the file and refresh your website.
6. Check the 
```
wp-content/debug.log
```

 file for error messages.

For a detailed guide on enabling debugging, check out this article:
🔍[How to Enable Debugging in WordPress](https://docs.nexcess.com/software/the-events-calendar/how-to-enable-debugging-in-wordpress/)

**Analyze the Debug Log**

After enabling WP Debug mode and refreshing the page, follow the steps below depending on the error you encounter:

- **Plugin-related errors**: Proceed to **Check for Plugin Conflicts**.
- **Theme-related errors**: Proceed to **Check for Theme Issues**.
- **Memory errors**: Proceed to **Increase PHP Memory Limit**.
- **Missing file errors**: Continue to **Check for Corrupted Core Files**.
- **Unclear or persistent issues**: Proceed to **Contact Your Hosting Provider**.

#### Check for Plugin Conflicts

A faulty or conflicting plugin is a common cause of the White Screen of Death. If you are seeing errors pertaining to plugins, you can continue with the steps below.

**Steps to Fix:**

1. Access your website files via FTP or File Manager.
2. Navigate to the 
```
wp-content/plugins
```

 directory.
3. Rename the 
```
plugins
```

 folder to 
```
plugins_deactivated
```

.
4. Refresh your website. If it loads, the issue is plugin-related.
5. Rename the folder back to 
```
plugins
```

 and deactivate all plugins via FTP by renaming individual plugin folders.
6. Reactivate plugins one by one to identify the problematic plugin.

#### Check for Theme Issues

A corrupted or incompatible theme can also cause the WSOD.

**Steps to Fix:**

1. Access your website files via FTP or File Manager.
2. Navigate to the 
```
wp-content/themes
```

 directory.
3. Rename your active theme folder (e.g., 
```
your-theme
```

 to 
```
your-theme_deactivated
```

).
4. WordPress will automatically switch to a default theme (e.g., Twenty Twenty-Three).
5. Refresh your website. If it loads, the issue is theme-related.
6. Reupload a fresh copy of your theme or switch to a different theme.

For a detailed guide on testing plugin/theme conflicts, please check our article:
🔍[Testing For Conflicts](https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/)

#### Increase PHP Memory Limit

If you encounter memory-related errors, such as:

```
Fatal error: Allowed memory size of 33554432 bytes exhausted (tried to allocate 2348617 bytes) in /home4/xxx/public_html/wp-includes/plugin.php on line xxx
```

Insufficient PHP memory can lead to the White Screen of Death. Depending on the number of plugins installed on your site, you may need to adjust the **WP_MEMORY_LIMIT** value to ensure optimal performance.

**Steps to Fix:**

1. Open your 
```
wp-config.php
```

 file via FTP or File Manager.
2. Add the following line:

```
define('WP_MEMORY_LIMIT', '512M');
```
3. Save the file and refresh your website.

#### Check for Corrupted Core Files

Missing or corrupted WordPress core files can trigger the White Screen of Death (WSOD), often due to incomplete updates or accidental modifications. If you see an error like the one below, reinstalling WordPress core files or restoring from a backup can help resolve the issue:

```
Fatal error: require(): Failed opening required '/home/user/public_html/***'
```

```
⚠️ Note: If the path in the error points to a plugin file, the issue may lie within the plugin. In that case, reinstall the plugin instead of WordPress core.
```

**Steps to Fix:**

1. Download a fresh copy of WordPress from [wordpress.org](https://wordpress.org/download/).
2. Extract the files and upload them to your server via FTP, excluding the 
```
wp-content
```

 folder and 
```
wp-config.php
```

 file.
3. Overwrite existing files when prompted.

#### Contact Your Hosting Provider

If none of the above steps work, your hosting provider may be able to help.

**Steps to Fix:**

1. Contact your hosting provider’s support team.
2. Provide them with details of the issue and steps you’ve already taken.
3. Follow their instructions to resolve the issue.

By following these steps, you should be able to resolve the White Screen of Death issue on your WordPress website. Thank you for reading!

---

