# Testing For Conflicts

*Category from The Events Calendar documentation*

---

## How to Test for Plugin Conflicts

**Source:** [https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/](https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/)

When a feature on your website stops working as expected, such as layout breaks, editor errors, form submission failures, or unexpected display issues, the underlying cause is often a **plugin or theme conflict**.

In WordPress, plugins and themes are created by thousands of different developers. Because they share the same execution environment and hook into the same core scripts, styling rules, and database functions, two pieces of code occasionally run into each other and cause unintended errors.

Conflict testing is the process of systematically isolating your site’s software to identify exactly which plugin or theme is causing the issue.

## Step 1: Prepare Your Website Before Testing

Before making any changes to your site configuration, always complete the following preparatory steps:

- **Update to the Latest Versions:** Ensure WordPress core, your active theme, and all installed plugins are updated to their latest versions. Known bugs and compatibility issues are frequently patched in software releases, so updating first might resolve the issue right away.
- **Create a Full Backup:** Take a complete backup of your website’s database and files using your web host’s backup tool or a reliable backup plugin.
- **Use a Staging Site (Recommended):** If your host provides a staging environment, perform your tests there to prevent downtime or visual disruption for live visitors. You can learn about different ways to set up a staging environment [here](https://docs.nexcess.com/software/troubleshooting/setup-wordpress-staging-site/).
- **Clear Caches:** Clear your browser cache, along with any server-level caching or caching plugins (e.g., Redis, object cache, page cache), to ensure you see real-time changes during testing.

## Step 2: Test for a Theme or Plugin Conflict

The standard manual conflict test involves switching to a default theme and deactivating plugins to isolate the root cause.

### Phase A: Test for a Theme Conflict

1. Go to **Appearance > Themes**.
2. Temporarily activate a standard, uncustomized default WordPress theme (such as **Twenty Twenty** or **Twenty Twenty-Four**).
3. Clear your browser cache and retest the issue.
- **If the issue resolves:** Your active theme is causing the conflict.
- **If the issue remains:** Re-enable your preferred theme and proceed to Phase B.

### Phase B: Test for a Plugin Conflict

1. Go to **Plugins > Installed Plugins**.
2. Select the checkbox next to every plugin **except** the core plugin you are testing (and any essential add-on required for it to run).
3. From the **Bulk Actions** drop-down menu, select **Deactivate**, then click **Apply**.
4. Clear your browser cache and retest your site.
- **If the issue is resolved:** A plugin conflict is present. Proceed to find the specific culprit.
- **If the issue persists:** The problem may be related to server configuration, database errors, or core settings rather than an active plugin conflict.
5. Reactivate your remaining plugins **one by one** (or in groups), retesting your site after each activation.
6. When the issue reappears, the plugin you just activated is the source of the conflict.

## Method 2: Standard Manual Conflict Testing

If you are working on a staging environment, you can perform manual conflict testing directly through your dashboard.

### Phase A: Test for a Theme Conflict

1. Go to **Appearance > Themes**.
2. Temporarily activate a standard, uncustomized default WordPress theme (such as *Twenty Twenty* or *Twenty Twenty-Four*).
3. Clear your browser cache and retest the issue.
- **If the issue resolves:** Your active theme is causing the conflict.
- **If the issue remains:** Re-enable your preferred theme and proceed to Phase B.

### Phase B: Test for a Plugin Conflict

1. Go to **Plugins > Installed Plugins**.
2. Select the checkbox next to every plugin **except** the core plugin you are testing (and its required add-ons).
3. From the **Bulk Actions** drop-down menu, select **Deactivate**, then click **Apply**.
4. Clear your browser cache and retest your site.
- **If the issue is gone:** A plugin conflict is confirmed.
5. Reactivate your plugins **one by one**, retesting your site after each single activation.
6. When the error returns, the plugin you just activated is the source of the conflict.

**Note on Testing Safely on a Live Site:**

If a staging environment is unavailable, the **Health Check & Troubleshooting** plugin (developed by the WordPress Community) can help simplify this process. Using its built-in **Troubleshooting Mode** (*Tools > Site Health > Troubleshooting*), you can temporarily deactivate plugins and switch themes **only for your logged-in session**. Your site visitors will continue to see your live site normally while you test.

## Step 3: Common Troubleshooting Scenarios

If you have isolated a conflict or if the issue persists even with all third-party software disabled. Check these common scenarios:

- **T****heme Overrides:** Custom template files in your child theme folder can become outdated after plugin updates. Try temporarily renaming your custom override folder (e.g., adding -bak to the end of the folder name) to see if older template files are breaking functionality.
- **JavaScript Errors:** Open your browser’s Developer Tools console (**F12** or **Cmd + Option + I**) and refresh the page. Identifying red console errors can provide specific script paths or function names causing issues.
- **404 Page Not Found Errors:** Common after updates or changing custom post type settings. Go to **Settings > Permalinks** in your admin area and click **Save Changes** (without changing settings) to flush rewrite rules.
- **403 Forbidden / API Restrictions:** Caching, security, firewall, or membership plugins may block access to WordPress REST API endpoints (/wp-json/). Temporarily disable endpoint restrictions or whitelist REST API routes to test.
- **Performance / Slow Loading:** Often caused by large database queries resulting from un-indexed data, extensive transient data, or recurring entries without set end dates.

## Reporting Your Findings to Support

If you have confirmed a conflict involving our software and a third-party product, reach out to our support team with the following details so we can assist you quickly:

1. **Conflicting Software Details:** The exact name and version number of the conflicting plugin or theme.
2. **Issue Description:** Step-by-step instructions to reproduce the exact error when both products are active together.
3. **System Information:** Send a copy of your site system status (found under your plugin’s help/tools tab, or via **Tools > Site Health > Info**).

*For conflicts involving unmaintained or third-party software outside our direct codebase, our team is happy to point you in the right direction or suggest alternative compatibility approaches.*

---

