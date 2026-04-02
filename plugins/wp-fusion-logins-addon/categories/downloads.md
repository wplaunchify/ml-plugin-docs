# Downloads

*Category from WP Fusion - Logins Addon documentation*

---

## Web Host Compatibility

**Source:** [https://wpfusion.com/documentation/downloads/web-host-compatibility/](https://wpfusion.com/documentation/downloads/web-host-compatibility/)

### Overview

The Downloads Addon for WP Fusion works out of the box with almost all hosts running Apache servers without any extra setup or configuration.

However, due to some specific set up of certain hosting platforms, there are some considerations and configurations listed below.

#### Siteground

There is a known issue with SiteGround static and dynamic caching:

- Protected files including documents and images will always be cached immediately upon access from an authorized WordPress user. As a result, they will then be accessible to all of your visitors, which stops our access rules from working properly.
- Static content such as documents and images cannot be excluded via the Dynamic cache exclude feature (SG Optimizer plugin). This feature allows you to exclude dynamic web pages only.

Since it’s a limitation from SiteGround affecting protection of files with WP Fusion, we recommend disabling Dynamic (and Static) cache, but keeping SiteGround Memcache enabled, and installing a good cache plugin. We recommend [Cache Enabler](https://wordpress.org/plugins/cache-enabler/).

### NGINX Hosts

Since NGINX does not have .htaccess-type capabilities, WP Fusion and WordPress at large cannot modify and update the server configuration automatically for you.

**Note:** The Downloads Addon is no longer officially supported on NGINX hosts (like WP Engine). The guides below can be used at your own risk.

For more robust file download protection which works on NGINX hosting, we recommend [Prevent Direct Access](https://wpfusion.com/go/prevent-direct-access).

#### WP Engine Setup

1. Log in to your WP Engine User Portal

![](https://wpfusion.com/wp-content/uploads/2019/12/wpengine-sites-domain-prevent-direct-access-1024x387.png)

2. Under your website “Installs”, click on “Redirect rules” then “New redirect rule”

![](https://wpfusion.com/wp-content/uploads/2019/12/WP-Engine-Screenshot2-1024x430-1024x430.png)

3. Enter these details into the popup fields:

- **Domain**: Choose your website domain
- **Redirect name**: Downloads protection
- **Source**: wp-content/uploads(/_wpfd/.*\.\w+)$
- **Destination**: https://www.yourwebsite.com/index.php?wpfd=$1
- **Redirect type**: 301 Permanent

#### Implement Our Nginx Rewrite Rules Manually

This is the recommended method to keep pretty permalinks for your file URLs.

1. Find and open your website’s Nginx config file which is normally located at /etc/nginx/site-available (or /etc/nginx/conf/site-available if you’re using Arch Linux)

2. Put inside the server block:

```
server {

	location / {
		...
	}

	# Put WP Fusion rewrite rule here
	rewrite wp-content/uploads(/_wpfd/.*\.\w+)$ "/index.php?wpfd=$1" last;
}
```

3. Restart your Nginx server. The WP Fusion Downloads Addon should be now working on your website.

---

## Changelog

**Source:** [https://wpfusion.com/documentation/downloads/downloads-changelog/](https://wpfusion.com/documentation/downloads/downloads-changelog/)

#### #1.2.3 - 8/20/2024

- Updated and tested for WordPress 6.6.2
- ⚡️ Improved Downloads Addon scripts will now only be loaded on the attachment and posts pages, to avoid conflicts with other plugins that use the media uploader
- 🔧 Fixed Fixed tags select not being editable on media items after activating protection until saving
- 🔧 Fixed Fixed deprecated jQuery methods

#### #1.2.2 - 7/28/2020

- 🔧 Fixed Fixed crash if activated for WP Fusion Lite
- 404 will now get the theme's 404 template (thanks @Erik)
- Made .htaccess warning dismissible

#### #1.2.1 - 4/28/2020

- 🔧 Fixed Fixed updater

#### #1.2 - 4/27/2020

- ⚡️ Improved Improved support for NGINX servers

#### #1.1.2 - 1/23/2020

- 🔧 Fixed Fixed crash if WP Fusion wasn't active

#### #1.1.1 - 12/27/2019

- 🔧 Fixed Fixed rewrite rules not being set on first install
- Admin style fixes

#### #1.1 - 10/14/2019

- ✨ New Added option to redirect when a restricted file is accessed
- ⚡️ Improved Improved editing settings via single attachment page

#### #1.0.1 - 9/12/2019

- Moved data storage
- Requests with wp-admin referrer will bypass .htaccess rule
- Cosmetic improvements

#### #1.0 - 8/30/2019

- Initial release

---

## Downloads Overview

**Source:** [https://wpfusion.com/documentation/downloads/downloads-overview/](https://wpfusion.com/documentation/downloads/downloads-overview/)

### Overview

The **WP Fusion Downloads Addon** (available for Plus and Professional license holders) allows you to protect files in your site’s media library using a user’s CRM tags.

This addon can be used to prevent your images, PDFs, and other downloadable files from being shared or accessed by unauthorized users.

For more complex requirements involving selling digital files we still recommend either WooCommerce or Easy Digital Downloads.

**Note:** As of June 2020 this addon is being placed in indefinite Beta status. It works on many sites, but because it requires modifying file permissions on your server we can’t guarantee compatibility with all hosts.
For a more robust file protection plugin, check out our integration with [Download Monitor](https://wpfusion.com/documentation/other/download-monitor/).
**Note:** The Downloads Addon does not work on WordPress Multisite.

### Setup

When adding any media item to a page using the Media Library, you’ll see a panel where you can configure content protection for the media file.

![](https://wpfusion.com/wp-content/uploads/2019/09/downloads-addon-1-1-1024x561.jpg)

If you toggle the switch for **Protect this file** the media item will be moved to a protected folder inside of your 
```
/wp-content/uploads/
```

 directory. By default the file will only be accessible to logged-in users.

You can also optionally specify one or more tags that are required to access the file.

#### Usage

Media files can either be embedded into a page (as an image, PDF, or audio file), or delivered via a download link. When a user attempts to access the file WP Fusion will first checked their login status and CRM tags before delivering the file.

### Redirects

By default a 404 error will be given if someone tries to directly access a restricted file and doesn’t have access.

![](https://wpfusion.com/wp-content/uploads/2019/09/downloads-addon-redirect-1024x391.jpg)

To override this and redirect the person to another page you can specify a redirect from the **Addons** tab in the WP Fusion settings.

---

