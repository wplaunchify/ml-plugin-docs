# How To Increase The Max_input_vars Limit

*Category from WP File Manager documentation*

---

## How to increase the max_input_vars Limit? < File Manager Pro

**Source:** [https://filemanagerpro.io/article/how-to-increase-the-max_input_vars-limit/](https://filemanagerpro.io/article/how-to-increase-the-max_input_vars-limit/)

**PHP Max Input Vars** is the maximum number of variables your server can use for a single function to avoid overloads.

The max_input_vars directive can be set in .htaccess, php.ini , .user.ini or wp-config.php file. To gain access to these files you will need **FTP**credentials. If you do not have these please contact your hosting provider.

1. In your WordPress root installation locate any of these .htaccess, php.ini, .user.ini or wp-config.php.

2. Edit the file and paste the directive code.

3. Once you are done making changes save the file. If you have downloaded the file to make this change, upload it back to your server and override the existing file.

**Directive for .htaccess**

```
php_value max_input_vars 4000
```

**Directive for php.ini or .user.ini**

```
max_input_vars = 4000
```

**Directive for wp-config.php**

```
@ini_set('max_input_vars',4000);
```

The minimum recommended limit is 4000

---

