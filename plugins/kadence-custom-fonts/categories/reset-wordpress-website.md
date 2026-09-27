# Reset Wordpress Website

*Category from Kadence Custom Fonts documentation*

---

## How to Reset Your WordPress Website for Free

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/reset-wordpress-website/](https://www.kadencewp.com/help-center/docs/kadence-theme/reset-wordpress-website/)

If you want to start fresh with your WordPress site, whether you’re cleaning up a development site or testing a new setup, you may need to restore your database to its default state. This process removes all content and customizations while keeping your media files, plugins, and themes intact. While several plugins are available to reset a WordPress site, this guide goes over using the free WP Reset plugin.

**Important:** Always create a **full website backup** before performing a reset. The WP Reset plugin permanently deletes posts, pages, and settings, and cannot recover them once removed. This document is best followed on a staging or development site, not on a live production site.

In this guide, you’ll learn how to use the **free version of WP Reset** to safely reset your WordPress site. You’ll install the plugin, create a snapshot as a safeguard, and walk through the reset process step by step.

Step 1: Install and activate the WP Reset plugin

1. Log in to your WordPress dashboard.
2. Go to **Plugins > Add New**.
3. Search for “WP Reset”.
4. Click **Install Now** and then **Activate**.

Step 2: Take a database snapshot

A database snapshot allows you to restore your site’s database to its previous state if something goes wrong.

1. Go to **Tools > WP Reset** from your WordPress dashboard.
2. Click the **Snapshots** tab at the top.
3. Type a name for your snapshot and click the **Create Snapshot** button.

Step 3: Choose post-reset options

In the free version, you can control what happens to your themes and plugins after the reset.

1. Return to the **Reset** tab in the WP Reset tool.
2. Scroll down to the “Post-reset actions” section.
3. Use the checkboxes to select your preferences:
- **Reactivate current theme**: Keeps your current theme active.
- **Reactivate WP Reset plugin**: Ensures the plugin is still active after the reset.
- **Reactivate all currently active plugins**: Automatically reactivates all your plugins.

Step 4: Perform the full site reset

1. In the same **Reset** tab, scroll to the bottom “Site Reset” section.
2. In the confirmation field, type the word 
```
reset
```

.
3. Click the **Reset Site** button.
4. A confirmation pop-up will appear. Click the red **Reset WordPress** button to start the process.
5. After the reset, you will be logged out and then automatically logged back into your fresh WordPress dashboard.

What happens in a free reset?

- **Deletes all content**: All posts, pages, comments, users (except for your admin account), and default database tables are erased.
- **Keeps media files**: Your images and other uploads remain on the server in the 
```
/uploads/
```

 folder but are removed from your Media Library.
- **Deactivates themes and plugins**: The files remain on your server, but they are all deactivated.
- **Resets site settings**: All plugin, theme, and WordPress core settings are reset to their default state.

---

