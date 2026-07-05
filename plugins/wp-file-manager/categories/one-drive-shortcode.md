# One Drive Shortcode

*Category from WP File Manager documentation*

---

## One Drive Shortcode < File Manager Pro

**Source:** [https://filemanagerpro.io/article/one-drive-shortcode/](https://filemanagerpro.io/article/one-drive-shortcode/)

The File Manager OneDrive add-on provides you the ability to edit, delete, upload, download, copy and paste files and folders in OneDrive directly from your WordPress website.

### Please use shortcodes for front end

1. Use type=”id” for Onedrive Folder Id

```
[wp_file_manager_onedrive view="list" lang="en" theme="light" dateformat="d M, Y h:i A" allowed_roles="*" access_folder="2328320331,3272246074,3495374450" type="id" allowed_operations="download"]
```

2.Use type=”folder” for Onedrive Folder

```
[wp_file_manager_onedrive view="list" lang="en" theme="light" dateformat="d M, Y h:i A" allowed_roles="*" access_folder="LTC,Civic Action" type="folder" allowed_operations="download"]
```

![one-drive-shortcode](https://filemanagerpro.io/wp-content/uploads/2018/10/screen-9.jpg)

![one-drive-preview](https://filemanagerpro.io/wp-content/uploads/2018/10/screen-10.jpg)

### Note:

This is standard shortcode, you can make required changes in shortcode according to your need, i.e allowed_operations, allowed_roles, language, themes etc.

---

