# Prevent Direct File Access To Your Plugin Files

*Category from WP File Manager documentation*

---

## Prevent direct file access to your plugin files < File Manager Pro

**Source:** [https://filemanagerpro.io/article/prevent-direct-file-access-to-your-plugin-files/](https://filemanagerpro.io/article/prevent-direct-file-access-to-your-plugin-files/)

Security should be one of the (if not the) most important aspects of your plugin. Ironically it’s also one of the most difficult parts to explain. There’s no ‘quick fix’ to writing a secure plugin. There are so many aspects to writing a secure plugin and on top of that, it’s an ever-changing game. Luckily there are some tips that can help make your plugin more secure and one of them is disabling direct file access to your plugin files. Please note that solely preventing direct access to your files doesn’t make your plugin secure but it does help in making it more secure.

### What is direct file access

Direct file access is when someone directly queries your file. This can be done by simply entering the complete path to the file in the URL bar of the browser but can also be done by doing a POST request directly to the file. For files that only contain a PHP class the risk of something funky happening when directly accessed is pretty small. For files that contain procedural code, functions, and function calls, the chance of security risks is a lot bigger.

### Preventing direct file access

Luckily it’s easy to prevent direct access to your files. In your 
```
wp-config.php
```

 file the constant 
```
ABSPATH
```

 is set. By checking if the constant is set at the top of your plugin file you can check if your 
```
wp-config.php
```

 file was loaded what should mean that WordPress is loaded. If your file is directly accessed this won’t be the case and the script will abort. Adding this code snippet to the top of your files will prevent direct file access to them.

```
<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
?>
```

---

