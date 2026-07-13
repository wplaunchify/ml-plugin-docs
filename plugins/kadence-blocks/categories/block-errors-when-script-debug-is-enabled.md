# Block Errors When Script Debug Is Enabled

*Category from Kadence Blocks documentation*

---

## Kadence Blocks Errors when SCRIPT_DEBUG is Enabled

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/block-errors-when-script-debug-is-enabled/](https://www.kadencewp.com/help-center/docs/kadence-blocks/block-errors-when-script-debug-is-enabled/)

Some users have reported encountering issues with **Kadence Blocks** when the 
```
SCRIPT_DEBUG
```

 constant is enabled in their WordPress configuration. This document outlines the common symptoms, the cause, and a confirmed workaround.

## Common Symptoms

These issues typically occur while editing pages or posts whenever 
```
SCRIPT_DEBUG
```

 is enabled:

- **Blocks fail to render** or display as generic “HTML” blocks.
- **JavaScript errors** appear in the browser console (*check our guide on how to see the console errors here)*, such as:
- ```
Uncaught TypeError
```
- ```
Cannot read properties of undefined
```
- **“This block has encountered an error and cannot be previewed”** message.
- Errors appear when limiting posts by taxonomy in blocks like the **Post Grid/Carousel**.
- Row Layout block generates more than the selected number of columns. Example: Selecting 1 column will generate 3 columns instead.

## Cause

The 
```
SCRIPT_DEBUG
```

 constant tells WordPress to use **unminified (development)** versions of core and plugin JavaScript and CSS files instead of the optimized/minified versions.

> Important: Enabling SCRIPT_DEBUG is generally not recommended on live or production websites. It can expose development assets, reduce performance, and cause compatibility issues like the symptoms above.

## Solution/Workaround

To resolve the issue, set 
```
SCRIPT_DEBUG
```

 to 
```
false
```

 in the 
```
wp-config.php
```

 file:

```
define( 'SCRIPT_DEBUG', false );
```

Since this requires access to site files, it is recommended to contact your hosting provider if you’re not comfortable making this change yourself.

**Additional Troubleshooting Steps:**

- **Kadence Troubleshooting Guide**– This guide goes over general troubleshooting steps.
- **How to view Console Logged Errors** – Console errors in your browser can help identify what’s causing the white screen or failed editor load.
- [How to enable the WordPress Error Logs](https://docs.nexcess.com/software/kadence/enable-wordpress-error-logs/) – WordPress error logs can reveal PHP errors or warnings that may be causing issues behind the scenes.
- **Support** – Feel free to contact our support team for further assistance.
- **Free Support**
- **Premium Support**

---

