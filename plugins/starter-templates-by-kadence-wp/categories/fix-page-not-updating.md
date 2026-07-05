# Fix Page Not Updating

*Category from Starter Templates by Kadence WP documentation*

---

## Troubleshooting the “Updating page failed. You’re probably offline.” Error

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/fix-page-not-updating/](https://www.kadencewp.com/help-center/docs/kadence-theme/fix-page-not-updating/)

This article helps when a person sees the message, **“Updating page failed. You’re probably offline.**“

This message often shows up even when a person is clearly connected to the internet. This usually means there is a problem with how the WordPress site talks to the web server, which stops the site from saving updates or publishing new content. This is often a server-level issue, not a problem with Kadence.

Did You Know?: The connection that lets WordPress save content is called the REST API. When it is blocked, the site cannot save changes.

The most common fixes happen on the hosting company’s side. A site manager should plan to contact their hosting provider as part of this process.

## Step-by-Step Troubleshooting

Here are the most common things to check to solve this error.

## 1. Check Site Health for Server Errors

WordPress has a built-in tool that checks for common issues.

- Go to Tools > Site Health in the WordPress Admin area.
- Select the Status tab.
- Look for any results related to the REST API.
- If errors appear, sharing those details with the hosting provider will help them quickly find the issue.

## 2. Contact the Hosting Provider

Since this is usually a server issue, the fastest solution is often to contact the company that hosts the website. A person should ask the host to check the following:

- **Security Firewall (WAF) Rules:** Ask if any security rules are blocking communication between WordPress and the server. This is often fixed by relaxing or adjusting a rule.
- **Server Configuration:** Ask if the hosting server’s settings, such as a setting called **PCRE** (on Apache servers), are correctly configured to allow updates.
- **Error Logs:** Ask the host to look for any server error logs that happened at the exact time the update failed.

## 3. Temporarily Check for Plugin or Theme Conflicts

Sometimes a plugin or theme can interfere with how WordPress communicates with the server.

- First, temporarily switch the site to a default WordPress theme, like **Twenty Twenty-Four**, in **Appearance > Themes**.
- Next, deactivate all plugins on the site.
- Try updating the page or post again.
- If the update now works, reactivate the plugins one by one, testing the update after each one, until the problem plugin is found.
- *Refer to this guide for a detailed process:* Temporarily Deactivating Plugins. [Temporarily Deactivating Plugins](https://www.liquidweb.com/docs/kadence-theme/temporarily-deactivating-plugins/)

## 4. Clear Caching and Security Layers

Caching layers sometimes prevent WordPress from seeing the most up-to-date information.

- Temporarily disable any caching or firewall plugins on the site.
- If using an outside service like Cloudflare, pause it to test the site.
- It may also help to [clear the browser’s cache and data](https://www.liquidweb.com/docs/kadence-theme/clearing-your-website-cache/).

## 5. Confirm Secure SSL/HTTPS Settings

The entire site must run securely to allow updates.

- A site manager should confirm that the site’s address in the WordPress **Settings** uses 
```
https://
```

 (the secure version).
- The SSL certificate (the thing that makes the site secure) must be valid and up to date. The hosting provider can confirm this.
- If SSL/HTTPS issues appear, you may also see **Mixed Content Errors**. In that case, [refer to this guide](https://www.liquidweb.com/docs/kadence-theme/fixing-mixed-content-errors-in-wordpress/).

## Related Resources

- [Temporarily Deactivating Plugins](https://www.liquidweb.com/docs/kadence-theme/temporarily-deactivating-plugins/)
- [Clearing Your Website Cache](https://www.liquidweb.com/docs/kadence-theme/clearing-your-website-cache/).
- [Clearing Your Browser Data](https://www.liquidweb.com/docs/kadence-general/clearing-your-browser-data/)

## Additional Support

If the error persists after following these steps, reach out to us by submitting a *free or* **premium support ticket**.

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

