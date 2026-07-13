# Fix Content Errors

*Category from The Events Calendar documentation*

---

## Troubleshooting CORS and Mixed Content Errors with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/fix-content-errors/](https://docs.nexcess.com/software/the-events-calendar/fix-content-errors/)

## Mixed Content or HTTPS Issues

If your website is showing a **“Not Secure”** warning or your events page isn’t loading styles or scripts correctly after switching to HTTPS, you’re likely facing a **mixed content** issue. This happens when your site loads some resources (like images, scripts, or stylesheets) over HTTP on a page served over HTTPS..

When a secure (HTTPS) page loads a resource (such as an image, iframe, script, or stylesheet) using an insecure (HTTP) URL, browsers may block those resources or show warnings, breaking functionality or layout.

Open **Developer Tools** in Chrome (F12 or right-click → Inspect), go to the **Console tab**, and refresh the page. Look for errors mentioning 
```
Mixed Content
```

.

### Common Symptoms

- Event pages are missing styles or scripts
- Console errors like:
- ```
Mixed Content: The page was loaded over HTTPS, but requested an insecure resource http://example.com/...
```
- Browser warnings: **“Not Secure”** in the address bar
- Embedded maps or videos fail to load

### How to Fix Mixed Content Issues

1. **Update Site URLs**
Ensure your WordPress and Site URLs use 
```
https://
```

.
Go to:
**WordPress Dashboard → Settings → General**
Update both fields to begin with 
```
https://
```

.
2. **Use a Mixed Content Fixer Plugin**
Install a plugin like [Really Simple SSL](https://wordpress.org/plugins/really-simple-ssl/). It detects mixed content and helps you transition to HTTPS safely.
3. **Replace Old HTTP Links in the Database**
Use a plugin like [Better Search Replace](https://wordpress.org/plugins/better-search-replace/) to scan and update old 
```
http://
```

 URLs in your posts, pages, and settings:
🔍Search for: 
```
http://yourdomain.com
```

👉Replace with: 
```
https://yourdomain.com
```

Run a **dry run first** to preview changes.
4. **Update Theme or Plugin Assets**ot drag-and-drop Elementor building.
If your theme or plugins (including custom code) load scripts or styles using hardcoded HTTP URLs, update those to use 
```
https://
```

 or protocol-relative URLs (
```
//
```

).
5. **Check Embedded Content**
Ensure embedded resources (like maps, iframes, or videos) use HTTPS. For example, if you’re embedding a Google Map, use the HTTPS version of the embed code.

## CORS Errors: ‘No Access-Control-Allow-Origin’

When your browser console shows something like:

```
Access to XMLHttpRequest at 'https://api.example.com/data' from origin 'https://yourwpdomain.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.  
Failed to load resource: net::ERR_FAILED
```

…that means your WordPress frontend (or a plugin/theme script) tried to make an AJAX / fetch / XHR request to another domain (or a different origin: domain, port, or protocol) but the **server that receives the request did not include a response header** telling the browser it’s okay to share the resource with your WP site’s origin. Browsers block access when that header is missing (for security).

### How to Diagnose the Error

**1. Check the Browser Console & Network Tab**

- Look for the failed request(s) and inspect the **Response Headers**.
- If you don’t see 
```
Access-Control-Allow-Origin
```

, that confirms the CORS header is missing.
- Also check the **Request headers / preflight (OPTIONS)**, especially for “complex” requests (custom headers, non-GET/POST).

**2. Identify Which Code / Plugin / Theme Is Making the Cross-Origin Request**

- Maybe a plugin is reaching out to an API on another domain.
- Maybe your theme is loading assets or fonts from another domain.
- If using a headless architecture, your frontend and WP backend may be on separate domains.

**3. Check if the Target Server / Resource Allows CORS**

- If the resource is on external servers you don’t control, you may not be able to add headers there.
- Use tools (curl, Postman) to fetch the same resource and see whether the 
```
Access-Control-Allow-Origin
```

 header is present in responses.

**4. Look at Caching & Proxy Layers**

- Sometimes caching plugins (or server/CDN) strip or don’t pass headers properly.
- If you use a reverse proxy (NGINX, Varnish) or CDN (Cloudflare, etc.), headers may be lost or overridden.

### How to Fix It

Below are approaches you can use *within* WordPress (or its server environment) to add or enable the correct CORS headers.

#### Option A: Add CORS Headers via a plugin

There are some WP plugins designed to handle CORS headers:

- **Enable CORS** — a plugin that lets you specify which origins are allowed.

Activate the plugin, configure allowed origin(s), and then test your cross-origin requests.

**Note:** Some users still report CORS errors even after using a plugin. In those cases, the plugin may conflict with headers added elsewhere or be overridden by server / caching layers.

#### Option B: Server / .htaccess / Web Server Configuration

If you have control over your server (Apache, NGINX, etc.), the more robust way is to configure headers at the server level (so that all responses include the CORS directives). Examples:

In your WordPress root 
```
.htaccess
```

, add:

```
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
  Header set Access-Control-Allow-Methods "GET, POST, OPTIONS, PUT, DELETE"
  Header set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, Authorization"
</IfModule>
```

Important Note: Create a backup of the htaccess file before making any changes.

#### Option C: Use a Proxy / Relay

If the resource you are fetching is on a third-party server and you can’t control its headers, you can enact a **server-side proxy** in WordPress. Workflow:

1. Frontend calls your WP site (same origin).
2. WP code (custom endpoint or plugin) forwards the request to the external server.
3. WP gets the response and returns it to the frontend **with your own CORS headers**.

This circumvents the browser’s CORS restrictions because the browser only sees your domain.

---

