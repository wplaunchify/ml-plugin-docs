# Diagnose And Fix Common Google Ads Issues

*Category from Starter Templates by Kadence WP documentation*

---

## How to Diagnose and Fix Common Google Ads Issues on your site

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/diagnose-and-fix-common-google-ads-issues/](https://www.kadencewp.com/help-center/docs/kadence-theme/diagnose-and-fix-common-google-ads-issues/)

Addressing Google Ads issues on a WordPress site can involve various troubleshooting steps depending on the specific problem.

This guide will walk you through common steps to troubleshoot Google Ads issues on a WordPress site.

**Please note that it is generally recommended to reach out to Google Ads support for this, as they are better suited to help you on the problem. This guide provides limited insights to troubleshooting Google Ad-related issues.*

Check the basics

Begin with these simple checks, as they often resolve the most common issues.

- **Disable browser ad blockers:** View your site in an incognito window or on a different browser to ensure an ad-blocking extension is not interfering with the display of ads.
- **Clear your cache:** Caching plugins (like LiteSpeed, W3 Total Cache, or WP Super Cache) and services (like Cloudflare) can serve outdated versions of your site. [Clear all website and browser caches to ensure you are seeing the latest version.](https://docs.nexcess.com/software/kadence/clear-website-cache/)
- **Wait 48 hours for new ads:** If you have just created new ads or a new AdSense account, it can take 24–48 hours (or sometimes longer) for the ads to appear.

Check your Google Ads and AdSense accounts

The issue may not be with your WordPress site but with your Google account.

- **Verify your ad and campaign status:** Log into your Google Ads account to confirm that your campaigns and ads are active, not paused, or disapproved. Disapprovals are often due to policy violations.
- **Fix policy violations:** If your ads are disapproved, check the policy violation details in your Google Ads account. You may need to edit your ad copy or improve the quality of your landing pages to resolve the issue.
- **Check for account holds:** Confirm that your payment information is up-to-date and there are no holds on your account.
- **Use the Ad Preview and Diagnosis tool:** This tool in your Google Ads account allows you to safely check if your ads are running for your target audience without generating false impressions.

Use the Google Site Kit plugin

If you are manually adding code, using Google’s official plugin can simplify the process and reduce errors.

1. Go to your WordPress dashboard.
2. Navigate to **Plugins** > **Add New**.
3. Search for “**Site Kit by Google**” and click **Install Now**, then **Activate**.
4. Follow the setup steps to connect your Google account and link your AdSense service.

Manually debug your ad code

If you prefer not to use the Site Kit plugin, you can manually check your ad implementation.

1. **Check for an ads.txt error:** Log into your AdSense account and look for a banner notification about an 
```
ads.txt
```

 file. You can fix this by copying the provided code and creating a file named 
```
ads.txt
```

 in your website’s root directory.
2. **Inspect with browser developer tools:**
- Open your website and right-click to select **Inspect**.
- Go to the **Console** tab and look for JavaScript errors related to ads.
- Navigate to the **Network** tab, reload the page, and search for “doubleclick.” Look for any ad requests that failed to load.

Address WordPress-specific conflicts

Other elements of your WordPress site may be blocking your ads.

- **Use a staging site:** Before making significant changes, use a staging environment to test potential solutions without risking your live website.
- **Identify plugin conflicts:**
- [Deactivate all plugins](https://docs.nexcess.com/software/kadence/temporarily-deactivate-plugins/) except for your Google Ads-related one. If the ads reappear, reactivate your plugins one by one until you find the conflicting one.
- Plugins known to cause conflicts with ad code include optimization plugins (that minify or delay JavaScript), security plugins, and other ad management plugins.
- **Check for theme conflicts:** If deactivating all plugins doesn’t solve the issue, switch to a default WordPress theme (like Twenty Twenty-Four) to see if the theme is the problem.
- **Scan for malware:** Your ads may be disapproved if Google detects malicious code. Scan your site with a security plugin like Sucuri or Wordfence, or ask your hosting provider to scan it for you.
- **Ensure your site is public:** Confirm that your site is not in “maintenance mode” or password-protected, which would prevent Google from crawling and serving ads.

If the problem persists

**Contact Google Ads Support:** If you have gone through all the steps and cannot resolve the issue, [contact Google Ads support](https://support.google.com/google-ads/gethelp) for further assistance.

---

