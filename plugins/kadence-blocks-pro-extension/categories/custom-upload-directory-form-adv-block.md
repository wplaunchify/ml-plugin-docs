# Custom Upload Directory Form Adv Block

*Category from Kadence Blocks - PRO Extension documentation*

---

## Custom Upload Directory in Kadence Form (Adv) Block

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/custom-upload-directory-form-adv-block/](https://www.kadencewp.com/help-center/docs/kadence-blocks/custom-upload-directory-form-adv-block/)

By default, files uploaded through Kadence Blocks Advanced Form are stored in the WordPress uploads directory under:

```
/wp-content/uploads/kadence_form/
```

These files are also organized into **year** and **month** subfolders, such as:

```
/wp-content/uploads/kadence_form/2025/10/
```

In some cases, you may want to store form uploads in a different location. For example, you might want them all in one single folder, outside of the default uploads directory, or even in a completely private location. This can make your files easier to organize, more secure, and separate from the rest of your WordPress media library.

Kadence provides the filter **kadence_blocks_advanced_form_upload_directory** which lets you override the default upload location.

The filter receives the **$param array** (same format as WordPress’ native **upload_dir** filter). You can modify this array to control the file system path and the URL of where Kadence Form uploads are stored.

The custom code in this tutorial can be added to your site’s 
```
functions.php
```

 file if you are using a child theme. If you are not using a child theme, you should use a plugin such as **Code Snippets** to add custom code safely without editing theme files directly.

Examples

Example 1: Remove Year and Month folder

This example saves all Kadence Form uploads in /wp-content/uploads/kadence_form/ without adding the /year/month subfolders.

```
add_filter('kadence_blocks_advanced_form_upload_directory', function ($param) {
    $subfolder = '/kadence_form';

    $param['url']  = isset($param['baseurl']) ? $param['baseurl'] . $subfolder : $subfolder;
    $param['path'] = isset($param['basedir']) ? $param['basedir'] . $subfolder : $subfolder;

    $param['subdir'] = '';

    return $param;
}, 20, 1);
```

**Result:**

Uploads go to: 
```
/wp-content/uploads/kadence_form/file.pdf
```

Instead of 
```
/wp-content/uploads/kadence_form/2025/10/file.pdf
```

Example 2: Save uploads outside of the default uploads folder

This example saves Kadence Form uploads in a custom folder called /form_uploads located at the root of your WordPress site (same level as wp-config.php).

```
add_filter('kadence_blocks_advanced_form_upload_directory', function ($param) {
    $custom_dir = ABSPATH . 'form_uploads';
    $custom_url = home_url('/form_uploads');

    wp_mkdir_p($custom_dir);

    $param['path']    = $custom_dir;
    $param['url']     = $custom_url;
    $param['subdir']  = '';
    $param['basedir'] = $custom_dir;
    $param['baseurl'] = $custom_url;

    return $param;
}, 20, 1);
```

**Result:**
Uploads go to: 
```
/form_uploads/file.pdf
```

and can be accessed at: 
```
https://example.com/form_uploads/file.pdf
```

---

