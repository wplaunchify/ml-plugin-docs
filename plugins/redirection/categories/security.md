# Security

*Category from Redirection documentation*

---

## Security

**Source:** [https://redirection.me/support/security/](https://redirection.me/support/security/)

A lot of time and care has been spent to make the plugin as secure as possible. As with anything of this nature it is still possible that problems exists.

The plugin is roughly split into two parts:

- The PHP side that handles the actual redirects
- The admin side that handles the management interface

These generally have little cross-over. The admin side is mostly [React](https://reactjs.org/) based and a lot of security issues are implicitly handled by React itself. The PHP side has been carefully checked, and has little that is visible to an administrator that could then cause problems.

#### Your Responsibility

As a user of Redirection you have the potential to inadvertantly create some security issues. The primary route to this is through something called an [open redirect](https://learn.snyk.io/lessons/open-redirect/javascript/). This is where you create a redirect that uses data supplied by the user to affect the redirect destination.

For example, if you use a URL in a query parameter as the target of the redirect.

The issue is that someone can create a link to your site (which people trust), and this then takes them to a bad site (which they weren’t expecting and may not notice).

Most redirects aren’t affected by this issue, and you have to work hard (using regular expressions) to create it.

#### Reporting Security Issues

If you find a security issue then please disclose it responsibly. As per the WordPress security [guidelines](https://developer.wordpress.org/plugins/wordpress-org/plugin-security/reporting-plugin-security-issues/) you should attempt to [contact](https://redirection.me/contact/) us first before then contacting WordPress.org.

We respond to security issues very promptly, and if a fix is needed it will be done shortly after.

If you are using a code scanner then remember that these often report false positives. It is important you have a verifiable problem (preferably with proof of concept), not just one from an automated scanner.

*Please contact us directly before reporting to WordPress.org*.

This prevents a false positive taking the plugin offline, causing concern for many people, and damaging the plugin’s reputation.

---

