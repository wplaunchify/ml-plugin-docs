# Troubleshoot Tickets Qr Codes

*Category from The Events Calendar documentation*

---

## Troubleshooting PDF Tickets and Ticket QR Codes

**Source:** [https://docs.nexcess.com/software/the-events-calendar/troubleshoot-tickets-qr-codes/](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-tickets-qr-codes/)

This article includes explanations and solutions for some of the more common issues encountered with PDF tickets and generating Ticket QR codes.

## Fixing “???” or Garbled Text

If some text in your Event Tickets Plus PDF tickets appears as boxes or question marks (???), or is missing, it’s usually a font issue. The PDF uses the FreeSans font, which covers Latin (including accented letters), Cyrillic and Greek, but not Chinese, Japanese or Korean. Here are the steps to follow in that case.

#### 1. Update the PDF Template to Use a Font That Supports Your Language

Adjust the template used to generate the PDFs (see [Customizing Template Files)](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/):

1. Copy this file from the plugin: 
```
wp-content/plugins/event-tickets-plus/src/views/tickets-wallet-plus/pdf/pass/styles.php
```
2. Paste it into your theme (or child theme) here: 
```
wp-content/themes/[your-theme]/tribe/tickets-plus/tickets-wallet-plus/pdf/pass/styles.php
```
3. Open the copied file and replace both instances of 
```
font-family: freesans;
```

 with the font for your language:
- ```
stsongstdlight
```

: Simplified Chinese
- ```
msungstdlight
```

: Traditional Chinese
- ```
cid0jp
```

: Japanese
- ```
hysmyeongjostdmedium
```

: Korean

These fonts are meant for their own language, so accented Latin letters or Cyrillic text may not display with them. Only use one if your attendee names are written in that language.

#### 2. Test the Changes

After saving your updates, regenerate a sample ticket and download the PDF. The text should now render correctly instead of showing 
```
???
```

.

#### Additional Tips

- Make sure your WordPress and database use **UTF-8 encoding**, which ensures proper handling of extended characters.
- If the issue persists, it may be caused by custom fonts or third-party plugins overriding font settings in the PDF generator.

**Still having trouble?**
If characters are still not displaying correctly, please share a sample PDF and your site’s [system information](https://docs.nexcess.com/software/the-events-calendar/sharing-your-system-information/) with our support team so we can take a closer look.

## QR Code Not Generated Due to Server

The QR code feature in **Event Tickets Plus** relies on your server’s ability to dynamically generate images. To function properly, your server must have the **GD PHP extension** installed and enabled. This is a standard PHP library responsible for image processing tasks.

If the GD extension is missing or disabled, QR codes will not be generated, and you may see a broken image or an error where the QR code should appear. This is a server-side requirement, not something controlled directly by WordPress or our plugin.

Most hosting providers include this extension by default. However, if you experience issues with QR codes not displaying, we recommend checking your server’s PHP configuration on *wp-admin > Tools > Site Health*. The Status tab shows a critical issue section if the GD library is not installed.

If that’s your case, please contact your hosting provider and let them know that **WordPress** requires the **GD library installed and active**.

For reference, the WordPress Hosting Team maintains a list of recommended PHP extensions here: [WordPress Server Environment Requirements](https://make.wordpress.org/hosting/handbook/handbook/server-environment/#php-extensions)

## Resolving the “Error During Status Transition” Error

When creating PDF tickets with Event Tickets and Event Tickets Plus, you may see the following error message: 
```
Error during status transition. DirectoryIterator::__construct(/tmp/): failed to open dir: Permission denied
```

This error message indicates that PHP does not have access to the temporary folder it needs to create the PDF for your tickets.

As we mentioned, the above error indicates that you don’t have access to the 
```
/tmp
```

 directory on your server: either the 
```
/tmp
```

 directory doesn’t exist (it usually resides in the root folder of your server), or you don’t have privileges to write to this directory. With permissions 755, you should be able to work with this folder so the plugin can generate and save the QR codes for the ticket emails.

As a first step, we recommend reaching out to your web host to see if they can provide you with access to this directory and/or change the permissions on the directory for your website.

If the issue persists, ask your host to point PHP’s temporary folder to a folder it can write to. This is the sys_temp_dir setting in php.ini (or the TMPDIR environment variable on the server). Choose a private folder outside your public web directory.

## QR Codes Missing When ModSecurity is Enabled

You may have the [ModSecurity](https://modsecurity.org/) module enabled on your hosting as a preventive and security measure for your website. While this shouldn’t affect the proper functioning of our plugins, there are some cases where unexpected behavior occurs, such as the QR code not appearing on PDF-generated tickets.

In Event Tickets Plus 6.11.1 and later this no longer happens: the QR code is built into the PDF instead of being loaded from your site’s web address, so there is nothing for ModSecurity to block. If your QR codes are missing, update Event Tickets Plus to the latest version.

## Fixing TCPDF Errors

In Event Tickets Plus 6.11.1 and later, the QR code is built into the PDF instead of being loaded from your site’s web address, and a ticket image that cannot be loaded no longer causes a critical error at checkout. If you see the error below, update Event Tickets Plus first.

If you encounter a critical error during checkout and are unable to complete the purchase, inspect your server’s log file. Look for an error message similar to:

```
TCPDF ERROR: [Image] Unable to get the size of the image: https://.../qr_xxx.png
```

This error indicates that TCPDF, the library responsible for generating PDF tickets, cannot retrieve the QR code image from the specified URL. This is often due to server configurations that prevent functions like 
```
file_get_contents()
```

, 
```
getimagesize()
```

, or cURL from accessing remote resources.

#### Common Causes

Several server settings can lead to this issue:

- **Disabled PHP Functions**: The 
```
allow_url_fopen
```

 or 
```
allow_url_include
```

 directives may be turned off in your PHP configuration, preventing PHP from accessing remote files.
- **cURL Configuration Issues**: The cURL extension might be missing, misconfigured, or blocked by server firewalls.
- **Firewall or SSL Restrictions**: Outbound HTTP(S) requests could be blocked, or SSL certificates might be invalid or untrusted.

In case of receiveing this error, reach out to your hosting provider and provide them with this information. Request that they verify the TCPDF error and implement the necessary modifications to resolve the issue.

#### Recommended Actions

To resolve this issue, consider the following steps:

1. **Verify Remote Image Accessibility**: Use SSH to test if your server can access the image URL:

```
curl -v https://your-site.com/path/to/qr.png
```

A successful response should include an HTTP 200 status code. If the request fails, it may indicate a network or firewall issue.
2. **Check PHP Configuration**: Ensure that the following settings are enabled in your 
```
php.ini
```

 file:

```
allow_url_fopen = Onallow_url_include = On
```

If you don’t have access to 
```
php.ini
```

, you can try adding the following lines to your 
```
.htaccess
```

 file:

```
php_value allow_url_fopen Onphp_value allow_url_include On
```

Note: Some hosting providers may restrict these settings for security reasons.
3. **Contact Your Hosting Provider**: If the above steps don’t resolve the issue, reach out to your hosting provider. Provide them with the error details and request assistance in configuring the server to allow TCPDF to access remote images.

By following these steps, you should be able to resolve the TCPDF image size error and ensure that PDF tickets are generated correctly.

---

*Snippets reviewed and updated October 2026*

---

