# Common Wordpress Plugin Installation Errors And How To Fix Them

*Category from The Events Calendar documentation*

---

## Common WordPress Plugin Installation Errors and How to Fix Them

**Source:** [https://docs.nexcess.com/software/the-events-calendar/common-wordpress-plugin-installation-errors-and-how-to-fix-them/](https://docs.nexcess.com/software/the-events-calendar/common-wordpress-plugin-installation-errors-and-how-to-fix-them/)

Installing plugins in WordPress is usually a straightforward process, but sometimes you might encounter errors. Understanding the most common issues can help you troubleshoot and get your plugin installed quickly. Below are some popular plugin installation errors and how to resolve them.

### 1. “The uploaded file exceeds the upload_max_filesize directive in php.ini”

This error occurs when the plugin file you’re trying to upload is bigger than your server’s allowed upload size.

**How to fix it:**

- **Increase PHP upload limits via php.ini:**

```
upload_max_filesize = 128M
post_max_size = 128M
```

- **Contact your hosting provider:** Most hosts can adjust these settings for you quickly if you’re not comfortable editing server files.

### 2. “Fatal error: Maximum execution time of X seconds exceeded”

This error means a PHP script, like the one used during plugin installation or activation, took too long to execute and was stopped by the server.

**How to Fix It:**

- **Increase execution time via php.ini:**

```
max_execution_time = 300
```

- **Contact Your Hosting Provider:** If you’re unsure about editing the file or the problem persists, reach out to your hosting support. They can quickly adjust this server setting for you.

### 3. “Allowed memory size of X bytes exhausted”

This error indicates that a PHP script used more memory than the server allows. It often occurs during large plugin installs or activations.

**How to Fix It:**

- **Increase PHP memory limit** via 
```
php.ini
```

:

```
memory_limit = 256M
```

- **Contact Your Hosting Provider:** If you’re not comfortable editing the file or the problem persists, your hosting provider can adjust the 
```
memory_limit
```

 for you.

### 4. “Destination folder already exists”

This happens when the plugin folder already exists in 
```
/wp-content/plugins/
```

, often due to a failed or previous installation.

**How to fix it:**

Manually delete the existing plugin folder:

- Access your site via FTP or File Manager.
- Navigate to 
```
/wp-content/plugins/
```

.
- Delete the folder with the plugin’s name.
- After that, try installing the plugin again.

We also have a [dedicated article](https://docs.nexcess.com/software/the-events-calendar/destination-folder-already-exists-resolved/) that walks you through this process step-by-step.

### 5. “PCLZIP_ERR_BAD_FORMAT (-10) : Unable to find End of Central Dir Record signature”

This error usually means the 
```
.zip
```

 file is corrupted, not a valid archive, or the server lacks memory to unzip it.

**How to fix it:**

- **Re-download the plugin** from the official source.
- **Ensure you’re uploading a .zip file**, not 
```
.tar.gz
```

 or other formats.
- **Increase server memory** if the issue persists.
- **Contact your hosting provider** if needed.

### 6. “Are You Sure You Want to Do This?”

This generic WordPress message appears when something fails but WordPress can’t show a specific error. It’s often tied to PHP limits or security configurations.

**Possible causes:**

- **Low PHP max_execution_time or memory_limit:** (see Sections 2 and 3).
- **File Permissions Issues:** Incorrect permissions can prevent WordPress from writing files.
- **WordPress Security Settings:** Some security plugins or server configurations might interfere.

**How to Fix It:**

- **Increase PHP Limits:** Start by increasing your 
```
max_execution_time
```

 (Section 2) and 
```
memory_limit
```

 (Section 3). This resolves this error in most cases.
- **Check File Permissions:** Ensure your 
```
wp-content
```

 folder and its subfolders (
```
plugins
```

, 
```
uploads
```

, 
```
themes
```

) have correct permissions (typically 755 for folders and 644 for files). You can check and modify these via FTP or your hosting File Manager.
- **Temporarily Disable Security Plugins:** If you have a security plugin active, try deactivating it temporarily and then attempting the plugin installation again.
- **Contact Your Hosting Provider:** If none of the above work, your host can review server logs for more specific error details.

### 7. “Add New Plugin” Option Is Missing

If you don’t see the **Add New** button under **Plugins** in your dashboard, the issue is often tied to your site’s configuration or user role.

**Possible causes:**

- Your **user role** doesn’t have plugin installation **permissions**.
- You’re on a **WordPress.com** plan that restricts plugin installation.
- You’re using **WordPress Multisite**, and only the **Super Admin** can install plugins.
- Core **WordPress files** may be **corrupted**.

**How to Fix It:**

- Ensure your user role is **Administrator**.
- **On WordPress.com?** You cannot install plugins on a WordPress.com site using the free or personal plans. This limitation is due to the hosting environment of WordPress.com, which restricts plugin installation to their Business and eCommerce plans.
- **On a Multisite network?**Request the network super administrator to install the necessary plugin or grant you super administrator permissions.
- **Suspect file corruption?** Try reinstalling WordPress via Dashboard > Updates > Reinstall Now.

---

