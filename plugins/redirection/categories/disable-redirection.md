# Disable Redirection

*Category from Redirection documentation*

---

## Disable Redirection

**Source:** [https://redirection.me/support/disable-redirection/](https://redirection.me/support/disable-redirection/)

Redirection provides many powerful options and it is possible to accidentally stop your site working, or prevent yourself from being able to log in.

When this happens you can disable Redirection by creating this empty file in your Redirection directory (
```
wp-content/plugins/redirection
```

):

```
redirection-disable.txt
```

The plugin will continue to run, but all redirects will be disabled. You should now be able to log in and make your modifications.

To re-enable the plugin you can remove the 
```
redirection-disable.txt
```

 file.

You can also disable the plugin by adding:

```
define( 'REDIRECTION_DISABLE', true );
```

To your 
```
wp-config.php
```

 file. This should be added alongside the other 
```
define
```

 statements. If you are unfamiliar with PHP it is simpler to use the 
```
redirection-disable.txt
```

 method.

Note that you may need to clear your browser cache after making this change.

### My site is still broken

If your site is still broken and you suspect Redirection then you can rename the Redirection plugin directory.

```
wp-content/plugins/redirection
```

To

```
wp-content/plugins/redirection.disabled
```

Once you’ve made your changes you can rename it back.

Again, you may need to clear your browser cache.

---

