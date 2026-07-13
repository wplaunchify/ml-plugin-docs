# Key Validation Server Is Not Available

*Category from The Events Calendar documentation*

---

## Solved: Key Validation Server is not Available

**Source:** [https://docs.nexcess.com/software/the-events-calendar/key-validation-server-is-not-available/](https://docs.nexcess.com/software/the-events-calendar/key-validation-server-is-not-available/)

On occasion, when you enter your license key under the **Events > Settings > Licenses** tab for one of our plugins, you might get a notification that says:

“Sorry, key validation server is not available.”

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-22.jpg)

This usually happens when something is blocking the communication between your site and our license key validation server. In most cases, this could be caused by a security plugin, a firewall, or a security measure set up by your hosting provider.

If you have a security plugin installed, start by temporarily deactivating it for a short time while you re-check the validation. If the validation succeeds, then you might need to fine-tune the settings of the security plugin to allow communication with our server.

In case you are behind a firewall, try adding the following IP address to the firewall whitelist and see if that helps with the validation. This might be set up by your host, so you can reach out to them for assistance.

```
License Key Validation Server: 192.190.220.23
```

If that doesn’t work, you can try adding 
```
*.theeventscalendar.com
```

 to the WP_ACCESSIBLE_HOSTS constant, along with WP_HTTP_BLOCK_EXTERNAL (true).

To do that add the following code to your wp-config.php file.

```
define( 'WP_ACCESSIBLE_HOSTS', '*.theeventscalendar.com' );
define( 'WP_HTTP_BLOCK_EXTERNAL', true );
```

If, after following these steps, you are still receiving the “Sorry, key validation server is not available.” message, then [our support team](https://theeventscalendar.com/support/) will be happy to assist you further. Please, go through the following steps to gather the information that helps us further:

1. Install and activate the [Log HTTP Requests](https://wordpress.org/plugins/log-http-requests/) plugin.
2. Go to the *Events > Settings > Licenses* page.
3. Enter a valid license key and exit/click away from the field so the validation request is sent.
4. Wait for the response.
5. Go to *Tools > Log HTTP Requests*. There should be a request to 
```
https://pue.theeventscalendar.com/api/plugins/v2/license/validate
```

 (See screenshot below.) Click on it to open the details.
6. Copy-paste the request and the response, and share it with our team.

![Screenshot of the WordPress admin dashboard showing a list of HTTP requests sent from a website](https://docs.nexcess.com/wp-content/uploads/2026/06/http-requests.jpg)A list of HTTP requests sent from a website.

![Screenshot of an HTTP request header and response.](https://docs.nexcess.com/wp-content/uploads/2026/06/http-request-and-response.jpg)The HTTP request header and the response.

---

