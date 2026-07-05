# Safe_mode

*Category from WPCodeBox 2 documentation*

---

## Safe Mode – WPCodeBox Documentation

**Source:** [https://docs.wpcodebox.com/safe_mode](https://docs.wpcodebox.com/safe_mode)

A snippet throws an error
## Dealing with Snippet Errors in WPCodeBox

In most cases, WPCodeBox can detect if a snippet triggers an error and it will disable it automatically. If a snippet is disabled due to an error, it will be colored red in WPCodeBox, and the error message will be displayed above the editor. You can also see the error using [WP Debug Toolkit (opens in a new tab)](https://wpdebugtoolkit.com/), the best tool to handle error logs and troubleshooting. We partnered with them to offer a discount using code **WPCBDOC** on your first purchase.

At this point, you have the option to dismiss the error, fix the issue and re-enable the snippet.

However, in rare cases, a snippet may cause an error that is not caught by WPCodeBox, leading to being locked out of the site. In such cases, you can disable snippet execution by adding the following code to your 
```
wp-config.php
```

 file:

```
define('WPCB_SAFE_MODE', true);
```
️🚫**Important:** Make sure to add this line **before** the /* That's all, stop editing! */ line in the wp-config.php file.
This will disable snippet execution, allowing you to log in and disable the offending snippet.

️🚫**Important:** Make sure to remove this line once you are done troubleshooting the issue. Setting the value to false won't work. You will need to comment or remove the line in your wp-config.php file.

## Disable snippet execution on the WPCodeBox 2 page, using an URL parameter

In WPCodeBox 2.0, you can also add the 
```
safe_mode=1
```

 URL parameter to the WPCodeBox page to enable safe mode. This option should only be used as a last resort when you are unable to log in to your site. The URL with the 
```
safe_mode
```

 parameter would look like this:

```
https://site.com/wp-admin/admin.php?page=wpcodebox2&safe_mode=1
```
By using the 
```
safe_mode
```

 parameter, you can access WPCodeBox with the disabled snippet execution feature, giving you the opportunity to fix the issue and re-enable the snippet.

[How to run your code on a specific WooCommerce hook or action](/woocommerce_hooks_insertion_points)[Cloud snippets won't load](/cant_load_cloud_snippets)

---

