# Troubleshooting

*Category from LearnDash documentation*

---

## Troubleshooting Basics

**Source:** [https://learndash.com/support/kb/resources/troubleshooting/basics/](https://learndash.com/support/kb/resources/troubleshooting/basics/)

LearnDash is designed to be user-friendly and flexible for a wide range of learning environments. However, there may be times when course creators or administrators run into questions about how specific features work or how to troubleshoot unexpected behavior.

This article provides answers to some of the most frequently asked questions from the LearnDash community. Whether it’s about course access settings, quiz behavior, or progress tracking, these FAQs are here to help clarify common sticking points and guide users toward helpful solutions.

## Run a Conflict Test Your Site With a Staging Site

For safer updates and troubleshooting, it’s best to test for plugin or theme conflicts on a staging site rather than your live site. This ensures your live site remains fully operational while you make changes. If any errors occur (like a fatal error) you can fix them in the staging environment first. Once everything works smoothly, you can confidently apply the changes to your live site with little to no downtime.

Most hosting providers offer the option to create a staging site directly from their dashboard. Check with your host to see if this feature is included in your plan. If staging isn’t available, don’t worry, you still have options to set one up easily.

[WP Staging](https://wordpress.org/plugins/wp-staging/) is a free plugin available in the WordPress Plugin Repository that lets you create temporary staging sites on any WordPress installation. It duplicates your entire site and database, allowing you to test updates safely. You can create multiple copies, but keep in mind that each one doubles the space used on your server. When you’re done with a staging site, it’s best to delete it to free up server resources.

## Search the Knowledgebase

Many common LearnDash questions already have answers available right here the[LearnDash knowledgebase](https://learndash.com/support/docs/). In some cases, resolving an issue may be as simple as adjusting a setting, and there may already be documentation that walks through exactly how to do that.

In other situations, users might be searching for a feature that isn’t currently supported, or one that requires a third-party plugin to achieve. The knowledgebase covers many of these topics as well.

## Update WordPress & LearnDash

If an issue is caused by a known bug, there’s a good chance it has already been addressed in a recent LearnDash update. Running the latest version of LearnDash, and any official LearnDash add-ons, is one of the most effective ways to avoid unexpected behavior.

**Important:** Always make sure WordPress is updated to the latest version as well. Compatibility between WordPress, LearnDash, and its add-ons is essential for a smooth experience.

![Check for WordPress updates button](https://learndash.com/support/wp-content/uploads/2019/04/wordpress-check-for-updates.jpg)

To check for updates:

1. Navigate to Dashboard > Updates
2. Click the Check Again button
3. Follow the instructions on screen to update WordPress, LearnDash and any add-ons you might be using

**NOTE**: A valid LearnDash license is required to update the core LearnDash plugin, as well as all official LearnDash add-ons.

## Check Known Issues

Known issues are documented and tracked on the **Known Issues and Conflicts** page. This list includes compatibility concerns with WordPress multisite, certain themes, and specific hosting providers.

Before submitting a support request, review the Known Issues page to see if the problem has already been identified.

## Clear Your Cache

Some LearnDash issues, particularly those related to CSS and design, can be solved by simply clearing your cache. If your problem is design-related, please try clearing your cache.

- **Browser cache:** Applies to everyone. Instructions differ based on the browser you’re using.
- **Server cache:** Depends on your host. Please contact your hosting company if you aren’t sure whether they use server-side caching.
- **Third-party plugin:** If you’re using a performance or optimization plugin, they might have some cache settings as well.
- **Cloudflare:** If you’re using Cloudflare, please clear your Cloudflare cache.

Alternatively, you can access your site using a private browsing window. Most modern browsers have this functionality.

**WARNING**: Before switching themes or disabling plugins, you should either [create a staging site](https://wordpress.org/plugins/wp-staging/) so you aren’t making changes to your live site, or if your site is still in development, make sure you have a full and recent backup.

## Try a Default WordPress Theme

Some LearnDash issues are related to the theme you’re using. Because LearnDash is highly customizable, several themes have implemented custom code to modify how LearnDash looks and functions.

Try switching to one of the default WordPress themes, or another simple, well-built theme without any LearnDash customizations. Here are a few examples of simple, quality themes that all work properly with LearnDash.

- [Twenty Nineteen](https://wordpress.org/themes/twentynineteen/)
- [Twenty Seventeen](https://wordpress.org/themes/twentyseventeen/)
- [Twenty Sixteen](https://wordpress.org/themes/twentysixteen/)
- [GeneratePress](https://wordpress.org/themes/generatepress/)

If your issue is resolved after switching to one of these themes, the problem is likely with the theme and not LearnDash. Please contact your theme developer about the issue.

## Test for Plugin Conflicts

With over 50,000 free plugins in the WordPress ecosystem—and many premium ones as well—plugin conflicts can occasionally impact LearnDash functionality. Although LearnDash is designed for broad compatibility, some plugins may still interfere with course behavior, user access, or other key features.

To troubleshoot:

1. **Temporarily disable all non-LearnDash plugins.**
- Start by disabling any plugins that affect logins, registrations, content access, memberships, or eCommerce.
- For best results, keep only LearnDash and its official add-ons active.
2. **Check if the issue is resolved.**
3. **Re-enable plugins one at a time.**
- After activating each plugin, test to see if the issue returns.
- This helps identify if a specific plugin is causing the conflict.

**Note:** If a particular plugin causes the issue to return, contact that plugin’s developer for further support or possible compatibility updates.

### Performance and Speed Optimization Plugins

These are known to cause issues with quizzes. Please disable all performance-based plugins, clear all cache, and try again in a private browsing window.

## Contact Support

If you’ve tried everything above and you’re still having an issue then please [open a support ticket](https://account.learndash.com/support/)

---

