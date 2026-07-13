# Resolved Your License Validation Request Is Missing A Valid Domain

*Category from The Events Calendar documentation*

---

## Resolved: Your license validation request is missing a valid domain

**Source:** [https://docs.nexcess.com/software/the-events-calendar/resolved-your-license-validation-request-is-missing-a-valid-domain/](https://docs.nexcess.com/software/the-events-calendar/resolved-your-license-validation-request-is-missing-a-valid-domain/)

Are you getting this error message when visiting the Licenses page under **Events → Settings → Licenses**?

!["License validation request is missing a valid domain."](https://docs.nexcess.com/wp-content/uploads/2026/06/license-validation-request.jpg)

When visiting the Licenses page or when entering a new license key for one of our premium products or services, a request is sent to our licensing server in the background to check for its validity. Beside the entered license key the domain of your website is also needed for verification. The domain of your website is the “WordPress Address (URL)” value from the **Settings → General** page.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/wordpress-site-url.jpg)

The domain names, in general can include lowercase and uppercase letters. The web browsers and the DNS servers directing the traffic don’t care about capitalization. For them 
```
MyAwesomeDomain.com
```

 and 
```
myawesomedomain.com
```

 are one and the same.

However, it is not the same for our licensing server and any domain name that is not all lowercase will return the “missing valid domain” error message.

**To successfully validate your license key, make sure that the domain names entered for the “WordPress Address (URL)” and “Site Address (URL)” are all lowercase.**

If the URL fields are greyed out, and you cannot change them through the dashboard, that means that they are probably set in the *wp-config.php* file of your site. You need to log in to the server and open the file for editing. Look for something like this:

```
// Site Address (URL)
define( 'WP_HOME', 'https://myawesomesite.com' );
// WordPress Address (URL)
define( 'WP_SITEURL', 'https://myawesomesite.com' );
```

If your site URLs are defined here, ensure that they are also all lowercase.

---

