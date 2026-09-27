# Fix Missing Favicon On Google Search Results

*Category from Kadence Custom Fonts documentation*

---

## Website Favicon is missing on Google Search Results

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/fix-missing-favicon-on-google-search-results/](https://www.kadencewp.com/help-center/docs/kadence-theme/fix-missing-favicon-on-google-search-results/)

A WordPress website favicon may not appear in Google search results for several reasons, including improper image formatting, caching issues, or problems with Google’s indexing process. Unlike a browser tab, where the favicon is cached locally, search results rely on Google’s own crawling to find and display the icon.

**Please note that it is generally recommended to reach out to Google Search Central for help. This guide provides limited insights to troubleshooting favicon issues with Google search results.*

Here are the most common reasons and solutions.

The favicon does not meet Google’s guidelines

If your favicon does not follow Google’s specific requirements, it will not be displayed.

- **Size requirements:** Google requires favicons to be at least **48×48 pixels** and recommends using multiples of 48 (48×48, 96×96, 144×144). While WordPress may suggest larger sizes like 512x512px for mobile homescreens or Progressive Web Apps, the favicon displayed in Google search results should ideally be 48×48 up to 192x192px in 
```
.ico
```

, 
```
.png
```

, or 
```
.svg
```

 format. Google does **not** use 16x16px icons for search results.
- **Visuals and content:** The image must be a visual representation of your brand, and Google will not show any favicon it deems inappropriate.
- **Stable URL:** The URL of your favicon should be stable and not change frequently.

Google has not yet crawled or re-indexed your site

It can take anywhere from a few days to several weeks for Google to recrawl your site and update the favicon in its search results. This is especially true if your site is new or you have recently changed the favicon.

- **Solution:** To speed up the process, you can request a manual re-indexing of your homepage through Google Search Console. Use the “URL Inspection” tool to inspect your homepage URL and click “Request Indexing”.

Your favicon is not accessible to Google

For Google to display your icon, it must be able to crawl the favicon file.

- robots.txt file: Check your robots.txt file to ensure there isn’t a rule blocking Googlebot from accessing the favicon file.

Caching and CDN issues

Your browser may show the favicon correctly, but Google may still have an old, cached version. This is common when using a caching plugin or a Content Delivery Network (CDN).

- **Solution:** [Clear all caches](https://docs.nexcess.com/software/kadence/clear-website-cache/), including your browser’s cache, your WordPress caching plugin’s cache, and any cache from your CDN provider (like Cloudflare).

Plugin conflicts

Sometimes, a plugin can interfere with how your favicon is displayed.

- Try [temporarily deactivating](https://docs.nexcess.com/software/kadence/temporarily-deactivate-plugins/) SEO or image optimization plugins to see if they are the cause of the conflict.

Mixed content errors

If you are using an HTTPS connection but your favicon is being requested over an insecure HTTP connection, a “mixed content error” can occur, blocking the icon from displaying.

- **Solution:** Use a plugin like Really Simple SSL to fix mixed content issues and ensure your site and all its assets are served securely over HTTPS.

If the problem persists

**Contact Google Search Central Support:** If you have gone through all the steps and cannot resolve the issue, contact [Google Search Central Support](https://developers.google.com/search/help)****for further assistance.

---

