# Troubleshoot Tickets Qr Codes

*Category from The Events Calendar documentation*

---

## Troubleshooting PDF Tickets and Ticket QR Codes

**Source:** [https://docs.nexcess.com/software/the-events-calendar/troubleshoot-tickets-qr-codes/](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-tickets-qr-codes/)

This article includes explanations and solutions for some of the more common issues encountered with PDF tickets and generating Ticket QR codes.

## Fixing “???” or Garbled Text

If you notice that some text in your **Event Tickets Plus** PDF tickets appears as question marks (
```
???
```

) or unreadable characters, it’s usually caused by a **font encoding issue**. The default font used in the PDF doesn’t support certain character sets, which can happen with many non-Latin languages or special symbols.Here are the steps to follow in that case.

#### 1. Add a Snippet to Use a Font That Supports More Characters

Add this snippet to your site using a snippets plugin like [Code Snippets](https://wordpress.org/plugins/code-snippets/) or by placing it in your theme’s 
```
functions.php
```

 file.

```
add_filter( 'tec_tickets_wallet_plus_pdf_pass_get_pdf_object', function( $pdf ) {
    // Set FreeSerif font for wider character encoding support
    $pdf->setFont( 'freeserif', '', 10 );
    return $pdf;
});
```

The **FreeSerif** font supports a broad range of Unicode characters, helping resolve most encoding or missing character problems.

#### 2. Update the PDF Template to Match the Font Setting

If the snippet doesn’t fully fix the issue, try adjusting the template used to generate the PDFs (see [Customizing Template Files)](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/):

1. Copy this file from the plugin: 
```
wp-content/plugins/event-tickets-plus/src/views/tickets-wallet-plus/pdf/pass/styles.php
```
2. Paste it into your theme (or child theme) here: 
```
wp-content/themes/[your-theme]/tribe/tickets-plus/tickets-wallet-plus/pdf/pass/styles.php
```
3. Open the copied file and replace all instances of: 
```
font-family: freesans
```

 with: 
```
font-family: freeserif
```

#### 3. Test the Changes

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

This error message indicates that you don’t have access to the directory needed to create the PDF for your tickets. The good news is that we have a snippet to help you override these permissions and get your tickets working as expected in no time!

As we mentioned, the above error indicates that you don’t have access to the 
```
/tmp
```

 directory on your server: either the 
```
/tmp
```

 directory doesn’t exist (it usually resides in the root folder of your server), or you don’t have privileges to write to this directory. With privileges -755, you should be able to work with this folder so the plugin can generate and save the QR codes for the ticket emails.

As a first step, we recommend reaching out to your web host to see if they can provide you with access to this directory and/or change the permissions on the directory for your website.

If the issue persists, you can add the following snippet to your 
```
functions.php
```

 file:

```
<?php

add_filter( 'tribe_ext_pdf_tickets_mpdf_args', function( $args ) {
	$upload_dir = wp_upload_dir();
	$args['tempDir'] = $upload_dir['basedir'] . '/tmp/';
	return $args;
} );
```

## QR Codes Missing When ModSecurity is Enabled

You may have the [ModSecurity](https://modsecurity.org/) module enabled on your hosting as a preventive and security measure for your website. While this shouldn’t affect the proper functioning of our plugins, there are some cases where unexpected behavior occurs, such as the QR code not appearing on PDF-generated tickets.

In cases where this issue occurs, the following code can be added to the **qr-image.php** file to correct this unexpected behavior. You will want to follow our guide on [Template Overrides](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/) to change this.

(File Path: 
```
/wp-content/plugins/event-tickets-plus/src/views/tickets-wallet-plus/pdf/pass/body/ticket-info/attendee-details/qr-image.php
```

)

```
<?php
if ( empty( $qr_enabled ) || empty( $qr_image_url ) ) {
	return;
}

// We convert absolute URL to physical path on the server
$upload_dir = wp_upload_dir();
$qr_path = str_replace( $upload_dir['baseurl'], $upload_dir['basedir'], $qr_image_url );

if ( file_exists( $qr_path ) ) {
	$qr_image_data = base64_encode( file_get_contents( $qr_path ) );
	$mime_type = mime_content_type( $qr_path );
	echo '<td width="120" rowspan="2">';
	echo '<img width="100" src="data:' . $mime_type . ';base64,' . $qr_image_data . '" />';
	echo '</td>';
} else {
	echo '<td width="120" rowspan="2">';
	echo '<p>QR code not accessible</p>';
	echo '<p>' . esc_html( basename( $qr_path ) ) . '</p>';
	echo '</td>';
}
?>
```

**💡Important Notice:** Before proceeding, we strongly recommend [creating a full site backup](https://docs.nexcess.com/software/the-events-calendar/creating-site-backups/) or [testing this process on a staging site first](https://docs.nexcess.com/software/the-events-calendar/how-to-set-up-a-staging-site-for-your-wordpress-website/).

## Fixing TCPDF Errors

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

