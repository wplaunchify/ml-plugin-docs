# Site Options

*Category from Redirection documentation*

---

## Site Options

**Source:** [https://redirection.me/support/site-options/](https://redirection.me/support/site-options/)

Some Redirection options affect your site as a whole, and can be found on the Site page. This includes:

- **HTTP Headers** – add HTTP headers to your site and redirects
- **Relocate Site** – move the current site to an external domain
- **Site Aliases** – move external domains to the current site
- **Force HTTPS** – redirect any HTTP access
- **Force www** or **remove www** – redirect to a canonical domain
- **Permalink Migration** – redirect old permalink structures

You can access the Site page by clicking Site from the top menu.

#### HTTP Headers

HTTP headers are added by your server to requests made by a client browser. It is possible to add your own headers for specific purposes. For example, to stop bots from following redirects.

A header consists of two parts:

- Header name
- Header value

Headers are configured from the HTTP Headers section.

![](https://i2.wp.com/redirection.me/wp-content/uploads/2020/01/http_headers.png?fit=740%2C259&ssl=1)

Use the button to add a header, or click the arrow to add a security or CORS preset.

![](https://redirection.me/wp-content/uploads/2020/01/header_preset.png)

Your header (or headers if you click a preset) will be added to the list where you can change various aspects of the header. Custom headers give you full control over both the header name and value. Popular headers restrict the available values.

![](https://i0.wp.com/redirection.me/wp-content/uploads/2020/01/header_option.png?fit=740%2C147&ssl=1)

Click the question mark to view information about a particular header.

Headers can be configured to have a ‘site’ or ‘redirect’ location. A site header is applied to every request on your site whereas a redirect header is only applied to redirects.

#### Relocate Site

If you want to move your site to another domain then you use the relocate site option. Enter the new domain in the relocate site box and all requests to URLs on the old site will be redirected to the equivalent URL on the new one (i.e. 
```
http://oldsite.com/path
```

 will become 
```
http://newsite.com/path
```

).

![](https://redirection.me/wp-content/uploads/2020/01/relocate_domain.png)

You will still be able to log in to the old site.

If the protocol changes you will need to specify http or https. Relocating a site will prevent you adding a site alias or changing canonical settings.

If you have specific exclusions then you will need to use a [regular expression](https://redirection.me/support/redirect-regular-expressions/) and manually redirect your site.

#### Site Aliases

A site alias is the opposite to relocating a site and instead of moving your current site to another domain you are redirecting requests to another domain to your current site.

For example, say you have an old domain 
```
myolddomain.com
```

 and you want all requests for this to go to your current site 
```
mynewdomain.com
```

. You could create an alias with 
```
myolddomain.com
```

 and any request for that site will be redirected to the equivalent URL on your current site (i.e. 
```
http://myolddomain.com/path
```

 will become 
```
http://mynewdomain.com/path
```

).

![](https://i2.wp.com/redirection.me/wp-content/uploads/2020/01/site_alias.png?fit=740%2C144&ssl=1)

Note that you will need to own the old domain name and have mapped the DNS to point at your current domain. This is outside the scope of Redirection and this documentation.

#### Canonical Settings

You can configure your canonical, or preferred, domain by enabling canonical settings.

**Force HTTP to HTTPS**

Enabling this option will cause Redirection to force any access to the HTTP version of your site to be redirected to the same URL on HTTPS.

![](https://i2.wp.com/redirection.me/wp-content/uploads/2020/01/force_https.png?fit=740%2C50&ssl=1)

Before you enable this please ensure your site can be accessed via HTTPS, as if enabled without HTTPS access then the plugin will stop working. Follow the instructions about [disabling the plugin](https://redirection.me/support/disable-redirection/) to reset the option.

**Force www or remove www**

This setting is similar to the HTTPS option but applies to the subdomain 
```
www
```

. You can either force it to be removed from requests, or added.

![](https://i2.wp.com/redirection.me/wp-content/uploads/2020/01/preferred_domain.png?fit=740%2C178&ssl=1)

Note that you will need to configure your server to accept requests for the 
```
www
```

 subdomain.

### Permalink Migration

WordPress gives you control over your post URLs via the [permalink settings](https://wordpress.org/support/article/settings-permalinks-screen/). Sometimes you may want to change this, and require everything from your old settings to be redirected.

Sometimes you can create a regular expression, but this is not always possible, and it can be quite complicated.

The simplest solution is to add your old permalink structure to the permalink migration section, and Redirection will automatically perform the redirects for you.

![](https://redirection.me/wp-content/uploads/2021/01/image-2-1024x431.png)

You can migrate multiple permalinks.

Note that this feature is in beta and does not handle every type of permalink. If your permalink is not supported then you will need to use a regular expression, or manually redirect each URL. There is no alternative.

---

