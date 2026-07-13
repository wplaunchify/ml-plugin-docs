# When Add On Features Of Tec Dont Work

*Category from The Events Calendar documentation*

---

## When Add-On Features of The Events Calendar Don’t Work

**Source:** [https://docs.nexcess.com/software/the-events-calendar/when-add-on-features-of-tec-dont-work/](https://docs.nexcess.com/software/the-events-calendar/when-add-on-features-of-tec-dont-work/)

Add-ons for The Events Calendar unlock powerful features, [community submissions](https://theeventscalendar.com/products/community/), [recurring events](https://theeventscalendar.com/products/wordpress-events-calendar/), [filter bar](https://theeventscalendar.com/products/wordpress-calendar-filter-bar/), etc. But sometimes those add-ons don’t function properly: they may not show at all, behave unexpectedly, or conflict with other themes/plugins. Here’s how to understand and resolve those issues.

## Why Add-On Features Break: Root Causes

Here are common reasons add-ons stop working correctly:

1. **Version Mismatch / Plugin Incompatibility**
When you update The Events Calendar but your add-on hasn’t been updated, or vice versa, some functions or hooks may be deprecated or changed. This leads to features that used to work breaking.
2. **Theme / Template / Block Editor / FSE Conflicts**
Themes (especially FSE or block themes) may not yet fully support The Events Calendar and its add-ons. Overrides, block assets, or template file paths might break. Plugins or settings related to template overrides may stop being applied properly.
3. **Caching or Server Side Optimization Interference**
Sometimes caching (object cache, page cache, etc.) or optimization layers interfere with add-on behavior (filter queries, AJAX calls, REST endpoints). Events may be stored or loaded via new database tables, but caches still holding old logic can return incorrect or missing results.
4. **Scripts / Asset Loading Errors**
If the add-on’s JS or CSS assets fail to enqueue, or are blocked (by theme, plugin, or server rules), UI pieces may be invisible or broken. Sometimes block editor styles or assets are missing in the editor (Gutenberg) when features are activated.

## How to Diagnose the Problem

1. **Check Plugin & Add-On Versions**
Ensure all TEC components (core and add-ons) are updated to compatible versions. Check [changelogs](https://theeventscalendar.com/category/release-notes/) for fixes.
2. **Disable Conflicting Plugins / Themes Temporarily**
Test for [plugin and theme conflict](https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/). Switch to a default WordPress theme (e.g. Twenty Twenty-Three) and disable other plugins except TEC and the problematic add-on. See if the feature starts working, this helps isolate where the conflict is.
3. **Check the Fun­ctions / Template Overrides**
If you have custom theme template overrides for TEC or override files from the add-on, compare them with the latest version of the plugin/add-on. Maybe functions/hook names changed or new required parameters exist.
4. **Inspect Caching & Server Optimizations**
Turn off object caching, page caching, any frontend cache, or server and CDN caching for testing. Confirm whether restoring behavior happens. Also check whether REST/AJAX endpoints the add-on uses are being blocked or returning errors.
5. **Look at Console Errors / Network Activity**
Use the [browser’s developer tools](https://docs.nexcess.com/software/the-events-calendar/how-to-see-a-javascript-console-error-on-your-site/) to see if scripts fail (404 errors, JS errors), or REST / AJAX requests return 4xx/5xx or empty data.

## Solutions & Best Practices

- **Update All Related Plugins / Add-Ons**
Always keep The Events Calendar and all its add-ons updated together. If an add-on hasn’t been updated in a while, check whether it’s still supported.
- **Use Compatible Theme / Avoid Unsupported Overrides Temporarily**
If using a block or FSE theme, try switching temporarily to a non-FSE theme to confirm whether that fixes the issue. Also adjust template overrides to match the plugin’s new version.
- **Clear / Bypass Caching Layers**
Purge all caches: object cache, page cache, CDN cache. For add-on features that rely on dynamic data (filtering, REST endpoints), cache bypass or exclusion rules may be needed. [Here](https://docs.nexcess.com/software/the-events-calendar/calendar-caching/) is a complete guide.
- **Test in Staging First**
Before [upgrading TEC](https://docs.nexcess.com/software/the-events-calendar/manual-updates/) or its add-ons on production, test in a [staging site](https://docs.nexcess.com/software/the-events-calendar/creating-and-using-a-wordpress-staging-site/) to catch breaking changes early.

---

