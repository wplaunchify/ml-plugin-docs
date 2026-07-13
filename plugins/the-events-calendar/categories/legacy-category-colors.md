# Legacy Category Colors

*Category from The Events Calendar documentation*

---

## Migrating from the Legacy Category Colors Plugin

**Source:** [https://docs.nexcess.com/software/the-events-calendar/legacy-category-colors/](https://docs.nexcess.com/software/the-events-calendar/legacy-category-colors/)

With the release of **The Events Calendar 6.14.0**, the **Category Colors** plugin is now integrated directly into the core plugin. This guide will help you migrate your existing settings from the standalone Category Colors plugin to the new built-in system.

👋 **Heads up:** With this upcoming migration, you’ll see **significant changes to the User Experience (UX) and User Interface (UI)**. This applies to **both the frontend and backend**. We wanted to let you know beforehand so you’re not surprised when you migrate!

You can preview the new functionality in [this article](https://docs.nexcess.com/software/the-events-calendar/event-category-colors/).

This is a one-time, irreversible migration. Your existing settings will be preserved during the process.

## Before You Begin

Make sure you meet the following requirements:

- You are using **The Events Calendar version 6.11.0.1** or higher
- The **Category Colors plugin** is installed and active
- You have **Administrator** access to your WordPress site
- We strongly recommend creating a **full site backup** before proceeding

## How the Migration Works

Once you update to the latest version of The Events Calendar, the plugin will:

1. Detect if the standalone Category Colors plugin is active
2. Prompt you to migrate your data via an admin notice
3. Automatically transfer your color settings and category priorities into the new system
4. Deactivate the old plugin once migration is complete

## Step-by-Step Migration

#### 1. Update The Events Calendar

Make sure you’re running the latest version of The Events Calendar from your WordPress Plugins page.

#### 2. Watch for the Migration Prompt

If the plugin detects the legacy Category Colors plugin, you’ll see an admin notice:

> “We’ve detected you’re using the Category Colors plugin. This functionality is now included in The Events Calendar! To continue using category colors, migrate your settings.”

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-4-4.jpg)

Click **Start Category Colors Migration** to begin.

#### 3. The Plugin Performs Pre-Migration Checks

Before migrating, the plugin will:

- Check that your existing color data is valid
- Ensure the new system hasn’t already been set up
- Verify your permissions

If everything checks out, the migration will proceed.

#### 4. Category Data is Migrated

Your existing settings—including **primary**, **background**, and **text colors**, along with **category priority**—will be transferred to the new taxonomy meta storage. A custom CSS file will be generated automatically.

#### 5. Migration Complete

After migration:

- You’ll see a success message
- The legacy Category Colors plugin will be **automatically deactivated**
- You’ll be redirected to **Events → Event Categories**, where you can manage your category colors going forward

## Category Colors Settings

After migration, go to: **Events → Event Categories** where you can:

- Set or update your **Primary**, **Background**, and **Font colors**
- Adjust **Category Priority**
- Use the **Quick Edit** option to update colors more efficiently

## Troubleshooting & Rollback

If migration fails, the system rolls back and restores the original settings, allowing you to retry.

Sometimes, even after an hour of waiting, the migration might not be finished. If this occurs, you must take the following actions to complete the migration:

1. Back up your site, files, and database.
2. Download The Events Calendar 6.13.0 from this page: [https://wordpress.org/plugins/the-events-calendar/advanced/](https://wordpress.org/plugins/the-events-calendar/advanced/)
3. Install and activate The Events Calendar 6.13.0.
4. Activate the Legacy Category Colors plugin.
5. Open its settings page and simply make a minor change; this refreshes legacy settings and ensures they’re recognized.
6. Then, update **The Events Calendar** to the latest version.
7. Click the migrate button to run the migration again, allow it to complete, then refresh and verify success.

This method effectively resets the migration workflow and resolves the issue.

Check your site’s error logs or reach out to our [Support Team](https://theeventscalendar.com/support/) if issues persist.

## Frequently Asked Questions

**Will I lose my current color settings?**
No. All existing settings are migrated and preserved.

**Can I continue using the old plugin?**
No. The old Category Colors plugin will be deactivated after migration.

**What happens if I skip the migration?**
You won’t be able to manage category colors until the migration is completed.

**My category isn’t showing on the filter?**
If a category isn’t showing on the filter, this could be due to the category not having a Primary color set. Please follow our [guide here](https://docs.nexcess.com/software/the-events-calendar/event-category-colors/) on editing the categories, and make sure that a Primary color is set.

## Retaining the Legacy Layout after Migration

As part of integrating **Category Colors** into **The Events Calendar**, the original legend layout was removed. But don’t worry, you can still bring it back with some simple custom tweaks.

Please follow the steps below to enable this layout:

1. Connect to your host files using an FTP connection or your hosting panel.
2. Copy the file 
```
category-color-picker.php
```

  from 
```
wp-content/plugins/the-events-calendar/src/views/v2/components/top-bar
```
3. Put the file under 
```
wp-content/themes/[your-theme]/tribe/events/v2/components/top-bar/
```
4. Open the file in the text editor and replace the code with the first one provided [here](https://gist.github.com/andrasguseo/4aced313debb1bf9952e5d9a127d14ef).
5. Enable **Custom CSS** option under **Events > Settings > Display > Category Colors**.
6. Then go to **Appearance > Customize > Additional CSS** and add the CSS code that was given on the same page:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Image-2025-07-08-at-9.00.04-AM.jpg)

If your site has caching enabled, you should see the legacy **Category Colors** layout after clearing the cache.

👋 The CSS in the customizer may not be applicable to certain themes, such as Divi. So it is best to use other methods:

1. A third-party plugin that lets you add CSS, e.g., [Code Snippets](https://wordpress.org/plugins/code-snippets/).
2. The theme’s style.css file, preferably the child theme.
3. If the theme has a specific option to add custom CSS, e.g., **Divi > Theme Options > Custom CSS**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Image-2025-08-17-at-3.42.59-PM.jpeg)

This change applies to calendar shortcodes as well as the main calendar page.

Version 6.14.2 of The Events Calendar was used to test this code.

Review following guides on customizing The Events Calendar:

- [Customizing Template Files](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/)
- [The Events Calendar Template Files](https://docs.nexcess.com/software/the-events-calendar/calendar-templates/)

---

