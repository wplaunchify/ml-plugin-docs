# Enable Ico File Uploads

*Category from Kadence Custom Fonts documentation*

---

## Enabling ICO File Uploads in WordPress

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/enable-ico-file-uploads/](https://www.kadencewp.com/help-center/docs/kadence-theme/enable-ico-file-uploads/)

By default, WordPress restricts the upload of certain file types, including 
```
.ico
```

 files, for security reasons. If you’re unable to upload an 
```
.ico
```

 file to your site, you can enable support for it using one of the methods outlined below.

Using a Plugin:

- Install and activate a plugin designed to enable support for additional file types. A common example is “[Enable SVG, WebP, and ICO Upload](https://wordpress.org/plugins/enable-svg-webp-ico-upload/)” or similar plugins.
- After activation, navigate to the plugin’s settings to ensure ICO file uploads are enabled.

Modifying wp-config.php:

- Access your site’s files via FTP or your hosting provider’s CPanel.
- Locate the 
```
wp-config.php
```

 file in the root directory of your WordPress installation.
- Open the file for editing and add the following line of code before the line that says 
```
/* That's all, stop editing!Happy publishing.*/
```

:

```
define( 'ALLOW_UNFILTERED_UPLOADS', true );
```

Adding ICO Support in functions.php (using Code Snippets):

- To enable ICO file uploads in WordPress [using a code snippets plugin](https://docs.nexcess.com/software/kadence/blocks/add-custom-filter-or-function-with-code-snippets/) like “Code Snippets” or “WPCode,”.
- **Install and Activate the Code Snippets Plugin:**
- Navigate to Plugins > Add New in your WordPress dashboard.
- Search for “[Code Snippets](https://docs.nexcess.com/software/kadence/blocks/add-custom-filter-or-function-with-code-snippets/)” or “WPCode” and install and activate the desired plugin.
- **Add a New Snippet:**
- Go to Snippets > Add New (or the equivalent menu item for your chosen plugin).
- Give your new snippet a descriptive title, such as “Allow ICO File Uploads.”
- **Insert the Code:**
- Copy and paste the following PHP code into the snippet content area:
- **Save and Activate the Snippet:**
- Save the snippet.
- Ensure the snippet is activated. Most code snippet plugins have a toggle or checkbox for activation.

```
function my_custom_mime_types( $mimes ) {
        $mimes['ico'] = 'image/vnd.microsoft.icon';
        return $mimes;
    }
    add_filter( 'upload_mimes', 'my_custom_mime_types' );
```

After completing these steps, you should be able to upload 
```
.ico
```

 files through the WordPress Media Library without encountering errors related to file type restrictions.

---

