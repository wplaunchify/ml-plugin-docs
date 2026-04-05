# Detective Mode

*Category from Simple History documentation*

---

## Detective mode

**Source:** [https://simple-history.com/support/detective-mode/](https://simple-history.com/support/detective-mode/)

**Detective Mode** is a setting in Simple History that when enabled adds **detailed debug information** to each logged event.

The Detective mode is enabled under the general settings in *Settings » Simple History*.

![](https://simple-history.com/wp/wp-content/uploads/2024/03/detective-mode-settings-1024x206.png)Screenshot: Settings for Detective mode is available in Settings » Simple History » General.

Normally each logged event stores only the right amount of information needed to show a useful message for that specific event. This changes when Detective mode is enabled: each event will now store way more information. This information includes:

- PHP file executed, i.e. 
```
my-file.php
```
- Request URI used
- Debug backtrace summary
- User browser agent
- Current 
```
$_GET
```

 and
```
$_POST
```

 payload
- An array with all [WordPress filters](https://developer.wordpress.org/plugins/hooks/filters/) fired until the event was logged
- The name of any cron job running
- Result from [php_sapi_name()](https://www.php.net/manual/en/function.php-sapi-name.php), i.e. information about where request was made from: the cli or the web. The result can be many vales, including “apache2handler”, “fpm-fcgi”, “cli-server”, “litespeed”, “cli”.
- WP-CLI command/parameters used

All this information makes it more easy for a developer or security expert to track down exactly where, how, and why something was logged.

Please note that enabling Detective Mode means that all $_GET and $_POST data is logged and that this data can contain sensitive information. The plugin tries to remove common password related data but with the wide range of different plugins and code implementations we can not make sure all is removed.

### Example

Here is a simple example that shows how this information can be useful. Below is a simple message saying that the translations for WooCommerce was updated. A curious person may start to wonder: but how and why was is updated by WP-CLI? With Detective mode enabled a lot of more information that this message has been stored. Let’s klick the date and time of the event to bring up the *context data table view*.

![](https://simple-history.com/wp/wp-content/uploads/2024/03/wp-cli-updated-translations-for-woocommerce.png)

Here in the context data table we have access to *a lot of more information*.

We can now see that WP-CLI was used to run WP-cron from the command line using this command
```
wp cron event run --due-now
```

and in the backtrace info we can follow the progress in details and see all function called, from initiating WP-CLI to running command on the 
```
Language_Pack_Upgrader
```

 class.

![](https://simple-history.com/wp/wp-content/uploads/2024/03/wp-cli-updated-translations-for-woocommerce-context-with-detective-data-1-545x1024.png)

---

