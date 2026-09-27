# Host Google Fonts Locally

*Category from Starter Templates by Kadence WP documentation*

---

## How to Host Google Fonts Locally

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/host-google-fonts-locally/](https://www.kadencewp.com/help-center/docs/kadence-theme/host-google-fonts-locally/)

Website design plays an important role in user experience, but site performance is equally critical. While the Kadence Theme is performance-oriented, fonts served from Google’s CDN can add extra requests that impact load times and user experience. Hosting Google Fonts locally reduces reliance on Google’s CDN, enhances performance, and can help meet GDPR requirements.

This feature is available as a part of the **Kadence Theme** (FREE).  No other plugins or subscriptions are required.

For more information about adding Google fonts to your site, please see:  [Typography Settings](https://docs.nexcess.com/software/kadence/theme/typography-settings/)

Load Google Fonts Locally

When Google Fonts are used on your site, the browser must send a request to Google’s servers to download the font files every time a page or post is loaded. These external requests can delay rendering of your pages and contribute to layout shifts, which may negatively impact your Cumulative Layout Shift (CLS) score in Google’s Core Web Vitals.

To enable Local Google Fonts, go to **Appearance** → **Customize** and click on **General** and then **Performance**.

Enable Load Google Fonts Locally

Once enabled, this feature will make a one-time request to fetch the theme’s selected Google Fonts and store them locally. All future requests for Google fonts will then be served using the locally stored files.

Preload Local Fonts

After enabling local font files, you can optionally configure them to preload. By default, browsers defer loading font files until the rendering process begins. This behavior can lead to situations where text content is ready to be displayed but must wait for the font to finish downloading. Preloading instructs the browser to fetch the font file earlier in the loading process. This ensures the font is available as soon as text rendering begins, reducing delays and improving overall site performance.

Flush Local Fonts Cache

If your Google Fonts are not displaying correctly, you may need to clear your font cache.  Clicking the **Flush Local Font Files** button will delete the local font files and cause them to be re-downloaded from Google’s server.

![Kadence Customizer - General - Performance - Load Google Fonts Locally](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2025-09-03-at-3.37.07-PM.png)

---

