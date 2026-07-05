# How To Enable Curl Extension In Php

*Category from WP File Manager documentation*

---

## How to enable cURL extension in PHP? < File Manager Pro

**Source:** [https://filemanagerpro.io/article/how-to-enable-curl-extension-in-php/](https://filemanagerpro.io/article/how-to-enable-curl-extension-in-php/)

![](https://filemanagerpro.io/wp-content/uploads/2020/04/How-to-enable-cURL-extension-in-PHP-300x152-1.jpg)

**Step 1: Ensure cURL extension for PHP is installed**
On Windows, people often use WAMP (Windows, Apache, MySQL, PHP) bundles for local development. Fortunately, the cURL extension is pre-installed with those bundles, so you can proceed to Step 2.

On Linux, it depends on which Linux distro the server is installed with, so you might need to run the appropriate command.

For example, with Ubuntu/Debian server, you need to run this command:

```
sudo apt-get install php5-curl
```

After that, restart the Apache server:

```
sudo /etc/init.d/apache2 restart
```

After the Apache server has restarted, the extension should be enabled by default.

**Step 2: Enable cURL extension in the “php.ini” file**
Load the **“php.ini”** file located into your favorite text editor (if you are using Windows, we suggest Notepad++), then search for **“php_curl”**. At this point, you need to uncomment the line by removing the semicolon at the beginning of the line, as below.

![Editing php.ini file to enable curl](https://filemanagerpro.io/wp-content/uploads/2020/04/curl-enable-line.png)Editing php.ini file to enable curl

After saving the file, restart the Apache server.

---

