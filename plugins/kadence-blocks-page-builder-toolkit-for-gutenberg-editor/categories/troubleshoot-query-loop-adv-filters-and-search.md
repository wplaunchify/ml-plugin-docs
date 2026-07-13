# Troubleshoot Query Loop Adv Filters And Search

*Category from Kadence Blocks — Page Builder Toolkit for Gutenberg Editor documentation*

---

## Troubleshooting Query Loop (Adv) Blocks, Filters, and Search issues

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/troubleshoot-query-loop-adv-filters-and-search/](https://www.kadencewp.com/help-center/docs/kadence-blocks/troubleshoot-query-loop-adv-filters-and-search/)

The Query Loop (Advanced) block relies heavily on the WordPress REST API to dynamically load and filter content without refreshing the entire page. When the block stops working, it’s often due to issues blocking or interfering with REST API requests. This guide provides troubleshooting tips to help you identify and resolve common causes, including caching conflicts, security plugin restrictions, and firewall or hosting-level issues.

Page Caching & Optimization Issues

Page caching solutions, including third-party services such as Cloudflare, can sometimes cache content in a way that prevents Query Loop (Adv) filters and search from functioning correctly. In particular, overly aggressive caching may ignore URL parameters, causing search queries and filter selections to be disregarded. To resolve this, consider whitelisting the Query Loop URL parameters (i.e., do not cache) or adding the Query Loop page to your cache exclusions. For detailed instructions, please refer to the documentation for your specific caching solution.

For example, when viewing a page containing a Query Loop, the URL might look something like:  

```
https://my-test-site.com/query-loop/?author=1&category=32
```

 
where **author** and **category** would be the URL parameters you’ll want to whitelist.

JavaScript Exclusions

If you are using heavy JavaScript optimization options, such as delaying or deferring JavaScript, you may need to exclude the Query Loop JavaScript file from optimization. 

The following file can be excluded from intense forms of JavaScript optimization:

```
/wp-content/plugins/kadence-blocks-pro/dist/query.js
```

Force Reindex

Sometimes, things like taxonomies or custom fields might not show up the way you expect. You may also, in rare cases, run into general issues with filter terms and the application of filters. Normally, Kadence takes care of this automatically in the background. But if your query results or filtering aren’t working quite right, [reindexing your queries](https://docs.nexcess.com/software/kadence/blocks/force-reindex-advanced-queries/) may fix the issue.

To do that, head to your **WordPress Dashboard → Kadence → Queries**, then click **Force Reindex** at the top of the page.

![Force Reindex](https://docs.nexcess.com/wp-content/uploads/2026/06/Force-Reindex.jpg)

Security & Firewall Related Issues

The Query Loop (Adv) block relies extensively on the WordPress REST API.  Anything that interferes with the proper functioning of the REST API can cause the Query Loop to fail.

Plugins

Many security plugins, such as All-in-One Security, Wordfence, or Solid Security, include settings that can block or disable REST API requests. Adjusting these settings to allow REST API access, or whitelisting the Kadence Query Loop (Advanced) REST API endpoint, can often resolve the issue.  Check with your security plugin documentation or support to learn how to adjust these settings.

Kadence Query Loop (Adv) REST API Endpoint:  
```
/wp-json/wp/v2/kadence_query/query
```

Hosting

Some hosting providers include additional security measures or firewall rules to protect WordPress sites. In certain cases, these safeguards can inadvertently restrict access to essential services such as the REST API. If you suspect this may be the cause, contact your hosting provider for assistance with reviewing and adjusting these settings.

Web Application Firewall (WAF)

Web Application Firewalls (WAFs), such as Cloudflare and Sucuri, help protect your site by filtering and blocking potentially harmful traffic. Unfortunately, WAF rules can sometimes mistakenly block legitimate REST API requests used by the Query Loop (Adv) block. If you suspect a WAF rule is interfering, review your WAF logs for blocked REST API calls, and consider whitelisting the Query Loop (Adv) endpoint or specific Query Loop URLs mentioned in the logs. Contact your WAF support for assistance with these configurations.

Troubleshooting Checklist

Check Your Browser Console

- Press **F12** (or right-click → Inspect → Console).
- Look for red error messages when loading the page or clicking on query filters.
- Share these errors with your developer or Kadence Support.

Check if the REST API is Working

- Go to: https://yoursite.com/wp-json/ in your browser.
- If you see a page of text with { and }, it’s working.
- If you see “Error 403,” “Not Found,” or “Internal Server Error,” something is blocking the REST API.

Check Your Security Plugins

- Plugins like All-in-One Security, Wordfence, or Solid Security can block REST API requests.
- Check their settings for anything that disables the REST API or blocks users who are not logged in.
- If you find such a setting, turn it off or whitelist the REST API address.

Check Your Firewall or CDN

- Services like **Cloudflare** or **Sucuri** can block or filter requests.
- Make sure they allow access to any address starting with:  
```
yoursite.com/wp-json/
```

Test With Caching Disabled

- Temporarily disable page caching for your caching plugin or CDN.
- For Cloudflare, temporarily enable Develop Mode.
- If the Query Loop starts working, configure cache exclusions for REST API routes or pages using Query Loop.

Test With Plugins Deactivated

- If you’re on a development site, try deactivating all non-Kadence plugins.
- For live sites, test using the [Health Check & Troubleshooting](https://docs.nexcess.com/software/kadence/temporarily-deactivate-plugins/) plugin.
- Once the Query Loop is working, re-enable plugins one at a time to find the cause.

**CORS and Content Security Policy (CSP) Errors**

- Use your browser’s developer console to check for CORS or CSP errors that might block REST API calls.
- Report any errors to your hosting provider.

Conclusion

By systematically reviewing caching settings, security plugin configurations, firewall rules, and hosting restrictions, you can identify and resolve most issues affecting the Query Loop (Adv) block. If problems persist after following this guide, consider reaching out to Kadence support for further assistance.

---

