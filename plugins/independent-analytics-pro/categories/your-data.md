# Your Data

*Category from Independent Analytics Pro documentation*

---

## How to Automatically Delete Old Data

**Source:** [https://independentwp.com/knowledgebase/your-data/automatically-delete-old-data/](https://independentwp.com/knowledgebase/your-data/automatically-delete-old-data/)

If you’re worried about how much analytics data may be stored in your database, you can tell Independent Analytics to automatically delete old data. This will limit the total amount of data stored.

To enable this feature, visit the **Analytics > Settings** menu and scroll down until you see the **Automatically Delete Old Data** section.

![Automatic data deletion](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:323/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/07/automatic-data-deletion.png)

To enable this feature, click on the dropdown that says, “Keep data forever,” and choose how long you’d like to store data.

![Automatic data deletion time period](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:672/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/07/automatic-data-deletion-time-period.png)

Once you’ve selected how long you want to store data, click the **Save** button. You’ll see this popup appear asking you to confirm your selection:

![Confirm automatic data deletion](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:628/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/07/confirm-automatic-data-deletion.png)

**Data older than the time period you selected will be deleted immediately**. This process may take a few seconds or even as long as a minute or two, depending on how much data is being deleted.

Once the deletion is finished, you’ll see this notice informing you that old data will now be deleted routinely at midnight every day. This ensures that you only retain data for the specified time period.

![Automatic data deletion scheduled](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:397/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/07/automatic-data-deletion-scheduled.png)

The available time periods are:

- 30 days
- 60 days
- 90 days
- 180 days
- 1 year
- 2 years
- 3 years
- 4 years

If you leave this setting as “Keep data forever,” none of your data will be deleted.

---

## How to Prevent Data Loss with a Backup Plugin

**Source:** [https://independentwp.com/knowledgebase/your-data/prevent-data-loss-backup/](https://independentwp.com/knowledgebase/your-data/prevent-data-loss-backup/)

Keeping a backup of your website is extremely important. Since the data stored by Independent Analytics is kept inside the WP database, it gets backed up with the rest of your data.

For this reason, you don’t need a special backup solution for your analytics data. It will be included automatically in any site backups you do.

We recommend choosing a host that includes daily backups, first and foremost. This is a great way to back up your site because it’s reliable, the backup is stored off-site, there’s usually a one-click restoration option, and customer support is available if needed. Some hosts that include daily backups are Rocket.net, WP Engine, Nexcess, Flywheel, and WPX.

If switching to a host with daily backups isn’t an option, the next best choice is to install a plugin. While there are lots of backup plugins available, these are a few of our favorites:

- [UpdraftPlus](https://wordpress.org/plugins/updraftplus/)
- [Backup Guard](https://wordpress.org/plugins/backup/)
- [BackupBuddy](https://solidwp.com/backups/)
- [Backup Migration](https://wordpress.org/plugins/backup-backup/)

These plugins have the ability to backup your site on a scheduled basis and make it easy to restore lost data in case of emergency.

If you want to be especially secure, it is a good idea to use a plugin that can save your site’s backup on a cloud service like Dropbox or Google Drive. This adds one extra layer of protection since your backup will be safe if something happens to your site’s server.

If you want to learn more about where your analytics data is stored, check out this tutorial next:

[How Much Data is Stored and Where It’s Stored in the Database](https://independentwp.com/knowledgebase/your-data/how-much-data-stored-and-where/)

---

## How Much Data is Stored and Where It’s Stored in the Database

**Source:** [https://independentwp.com/knowledgebase/your-data/how-much-data-stored-and-where/](https://independentwp.com/knowledgebase/your-data/how-much-data-stored-and-where/)

Independent Analytics runs entirely on your website, which means the data it creates is stored in the WordPress database.

The data stored by Independent Analytics is in tables prefixed with “_independent_analytics,” as pictured below.

![Our database tables](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:594/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/03/our-database-tables.png)

The names and number of tables is subject to change, but they will always begin with the same independent_analytics_ prefix.

Separately, there are a few options saved in the wp_options table, which all begin with “iawp.” These only take a few kb of space and store data about the settings configuration, like whether to track logged-in visitors or use the dark mode theme.

As for the volume of data stored, **Independent Analytics stores about 200-300MB per million sessions**. This value does change from one site to the next, but we find this estimate to be accurate for most websites.

If you’d like to limit the amount of data stored in the database, you can enable the option to [automatically delete old data](https://independentwp.com/knowledgebase/your-data/automatically-delete-old-data/).

---

## How to Opt-Out of Freemius Data Tracking

**Source:** [https://independentwp.com/knowledgebase/your-data/freemius-opt-out/](https://independentwp.com/knowledgebase/your-data/freemius-opt-out/)

Some users have expressed privacy concerns over our use of Freemius, so we’d like to provide more information on how this works and how you can opt out.

We have more information on [why we use Freemius here](/knowledgebase/your-data/why-we-use-freemius/) as well.

While there have been privacy issues with Freemius in the past, they have systematically addressed these concerns, and there are no major outstanding privacy issues as of March 2023. This has been verified by independent analysis ([read more here](https://www.webtng.com/freemius-privacy-issues-what-were-they-what-changed-is-it-enough/)).

One change they’ve made is the ability to completely opt out of tracking even with paid versions of the plugin, and that’s what we’ll cover here.

## How to opt-out of Freemius

If you are using the free version of Independent Analytics, then you were presented with this screen upon activating the plugin:

![Freemius optin](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/05/freemius-optin.png)

If you chose to **Skip** this step, then your site has never shared data with Freemius.

If you agreed to data sharing by accident or you changed your mind, you can visit the **Plugins** menu, locate our plugin, and click the blue **Opt Out** link pictured here:

![Freemius Opt Out link](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/11/freemius-opt-out-link.png)

You’ll see a popup allowing you to opt out of sharing your basic profile info, site info, and themes/plugins installed.

![Freemius Opt Out screen](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:952/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/11/freemius-opt-out-screen.png)

Opting out of these data sharing options won’t have any impact on Independent Analytics ability to run. We use this data primarily in aggregate to see things like the PHP versions that are most popular among our users, and the languages being used.

## Opting Out for PRO users

If you are using Independent Analytics Pro, the steps are almost identical. You will still click the **Opt Out** link in the Plugins menu, but the popup is different in two ways.

![Freemius Pro plugin Opt Out](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:977/h:1024/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/11/freemius-pro-opt-out.png)

The first difference is that you’ll notice there is no option to opt out of basic profile info. This is because this data was collected at checkout and was required to facilitate the sale.

The other difference is the **Required** section at the top, which shows that your site shares data about the license key and the plugin’s state. If you click on the **Opt Out** link there, you’ll see the following warning:

![Freemius Pro licence opt out confirmation](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:648/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/11/freemius-pro-opt-out-confirm.png)

This is letting you know that opting out of sharing licensing data means that your site will no longer receive automatic updates.

It’s perfectly fine to opt out if you would like. You will just have to [login to your account](https://independentwp.com/account/) and download a new copy of the plugin whenever it’s updated. You’ll receive a zip file you can then upload through the **Plugins > Add New** menu to update.

Since you won’t receive update notifications, you can follow us on [Twitter](https://twitter.com/AnalyticsForWP), [Facebook](https://www.facebook.com/people/Independent-Analytics/100086904035609/), or [Reddit](https://www.reddit.com/r/independentanalytics/) to get notified when we release a new update. Alternatively, you can keep the free version installed but deactivated and use that to get update notifications. We keep the free and pro versions in sync, so if you see a new update for the free version, that means there’s a new pro update available for download too.

---

## How to Delete Your Data

**Source:** [https://independentwp.com/knowledgebase/your-data/delete-all-data/](https://independentwp.com/knowledgebase/your-data/delete-all-data/)

If you want to reset your analytics or delete your data before uninstalling the plugin, that’s easy to do via the Settings menu.

Start by visiting your Analytics and clicking on the Settings menu item.

![Settings menu item](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/08/settings-menu-item.png)

Next, scroll to the bottom of the page and locate the **Danger zone** section. You’ll see two options.

![Delete all data](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:285/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/09/delete-all-data.png)

First, you can click the **Reset analytics** button if you want to delete all of your analytics data but continue using the plugin.

If you plan on no longer using Independent Analytics, you should click the **Delete all data & deactivate plugin** button instead. This will remove all traces of the plugin, including:

- All of the independent_analytics tables in the database
- All options saved by Independent Analytics in the wp_options table
- The iawp-geo-db.mmdb file added to /wp-content/uploads/
- The iawp_total_views post meta values

When you click the button, you’ll see a prompt like this clarifying that you want to delete your data:

![Delete data prompt](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:686/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/09/delete-data-prompt.png)

Once you confirm, please wait a few seconds for the deletion process to complete before leaving the page.

Independent Analytics will be deactivated, and you’ll be redirected to your main Dashboard page.

---

## How to Retain Your Analytics Data When Pushing from Staging to Production

**Source:** [https://independentwp.com/knowledgebase/your-data/transfer-data-staging-local-production/](https://independentwp.com/knowledgebase/your-data/transfer-data-staging-local-production/)

**Terminology:** Your **production** website is the one your visitors visit. Your **staging** site is the private copy where you make changes. **Pushing** your staging site to production means you are replacing your production website with your staging site.

A major difference between Independent Analytics and Google Analytics is that your data is stored in your database, not an external one.

This is great for privacy, but it does give you the added responsibility of safeguarding your data.

**If you are not backing up your site regularly, please install a backup plugin or switch to a web host with automated backups immediately!**

This will ensure you always have a backup of your analytics data, not to mention all your posts, pages, etc.

Since your analytics data is stored in your WordPress database, it’s easy to migrate and import/export using existing tools.

## Where the analytics are stored

Independent Analytics adds numerous tables to your database, all beginning with your database prefix followed by “independent_analytics.”

![Independent analytics db tables old](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/12/independent_analytics_db_tables_old.png)These tables are subject to change, but will always include the _independent_analytics_ prefix

Since your analytics data is stored in the WordPress database, it will be transferred by any plugin that migrates data between local/staging/production sites. This makes things easy except for when transferring from a staging site back to production.

## Make sure the plugin versions match

Before you push from your staging site to production, make sure that both sites are running the same version of Independent Analytics. If one is behind, update it right away.

Pushing from staging to production when the sites use different versions of IA can cause errors that pause tracking and require manual intervention.

## Exclude the analytics tables when pushing

The best method is to exclude the analytics tables when pushing from staging to production. This way, you can push all of the files and the entire database, except for the analytics tables. This leaves your analytics untouched on the live website.

The following plugins include the option to choose which database tables you want to migrate:

- [WP Migrate](https://deliciousbrains.com/wp-migrate-db-pro/)
- [Duplicator Pro](https://duplicator.com/)
- [Updraft Migrator](https://teamupdraft.com/updraftplus/wordpress-migration-plugin/)
- [Backup Guard](https://wordpress.org/plugins/backup/)
- [BackupBuddy](https://solidwp.com/backups/)
- [WP Synchro](https://wordpress.org/plugins/wpsynchro/)
- [Backup Migration](https://wordpress.org/plugins/backup-backup/)

If you don’t have a way to create a staging site already, we recommend [Blogvault](https://blogvault.net/) and [WP Stagecoach](https://wpstagecoach.com/), which can create a staging site and have controls for selecting DB tables to migrate.

## What if I can’t exclude tables?

Let’s say your host has a built-in option to create staging sites and push them to production, but they don’t have any options to exclude database tables.

There is a simple workaround you can use in this scenario.

First, make sure Independent Analytics is running the same version on both your staging and production sites. Then, use one of the plugins listed above to push only your analytics database tables from the production site to the staging site.

This way, you can check your analytics on the staging site and make sure they transferred successfully, then you can use your host’s option to push the entire site to production. You’ll have all your changes transferred to the live site while retaining all of your data this way.

We use Rocket.net, which can quickly create staging sites, but pushes the entire site back to production. When we are ready to publish the changes we made on our staging site, we use the WP DB Migrate Pro plugin to push the analytics tables from our live site to the staging site, and then use the option in Rocket.net to push the entire staging site live.

## What if I don’t want to use one of those plugins?

Using one of the recommended plugins to transfer the analytics tables is the easiest solution, but it can be done manually too.

### How to manually export your analytics data

To manually transfer your analytics tables, start by logging into your hosting dashboard and finding the link to phpMyAdmin. Once inside phpMyAdmin, click on your site’s database in the left sidebar. Then, locate the Independent Analytics tables and select them all.

![Select tables](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/12/select-tables.png)

Next, scroll to the bottom of the page and use the **With selected** dropdown to choose the **Export** option.

![Export tables](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/12/export-tables.png)

This will immediately redirect you to the Export menu, where you can click the **Go** button to export the selected tables.

![Complete data export](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:480/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/12/complete-data-export.png)

An SQL file containing the selected tables will begin downloading right away.

### How to import your analytics data

To import the data, you will have to delete all of the analytics tables in the database first. You will get an error message saying the tables exist already if you try to import them without deleting the existing tables first.

Next, visit the Import menu, click the Choose file button, select the SQL file you downloaded, and click the **Go** button to import the tables.

![Import tables](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:972/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/12/import-tables.png)

If your SQL file is large, it may help to compress the file before uploading. You can zip an SQL file like any other file type to compress it.

Remember, you want to export from the production site and import into the staging site. There, you can ensure it worked well before you push the entire staging site to production.

### Downsides of using phpMyAdmin

phpMyAdmin is not that reliable when it comes to exporting and importing data. For small sites, it should work fine, but for sites with larger exports, it can be slow and sometimes fail midway.

Additionally, when you delete the analytics tables, this will cause Independent Analytics to crash until the new tables are imported. This is not a big deal because no one is visiting the staging site, but it’s good to know about this so that you are not concerned if you see PHP errors about missing tables during the manual import process.

For these reasons, it is preferable to use a plugin to migrate the analytics tables for you, which can be faster and more reliable.

## Summary

Independent Analytics adds tables to your WordPress database that are already included in any backups or migrations you perform.

This can be an issue when transferring your database from your staging site to your production site because it can cause your analytics data to get overwritten. When migrating in this way, make sure to update Independent Analytics to the same version on both sites. Then, you can push your staging site to production, excluding the analytics tables. Or, push only the analytics tables from production to staging, so that you can transfer the entire staging site to production.

We hope this answers all of your migration-related questions, but please feel free to get in touch if there is anything else you need to know.

---

## How to Export Your Data to CSV

**Source:** [https://independentwp.com/knowledgebase/your-data/import-export-data/](https://independentwp.com/knowledgebase/your-data/import-export-data/)

One of the best reasons to use Independent Analytics is that all the data it records is YOUR data, and we want that to be available to you in all formats.

There are two different ways you can export your data to CSV.

First, click the **Download Report** button in the toolbar, and you’ll see these options:

![Download options](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:679/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/02/download-options.png)

If you click the **Download Table CSV** button, you’ll receive a CSV that includes the same data currently displayed in the data table. Any changes you make to the table, such as changing the sorting or hiding a column, will be matched in the CSV ([Example CSV](https://independentwp.com/wp-content/uploads/2025/01/table-data.csv)).

Alternatively, you can click the **Download Daily Metrics CSV** button, and that will give you data similar to what you see in the chart. It will include each day as a row with all of the metrics as columns ([Example CSV](https://independentwp.com/wp-content/uploads/2025/01/daily-metrics.csv)).

There is also an option to [export the report to PDF](https://independentwp.com/knowledgebase/dashboard/download-pdf-report/).

## Exporting for backups & migrations

If you’d like to export your analytics for migration or as a backup, take a look at this article instead:

[How to Migrate, Import, and Export Your Data (Staging, Local, Production)](/knowledgebase/your-data/transfer-data-staging-local-production/)

Independent Analytics stores your analytics data in the WordPress database, so it’s compatible with all backup and migration plugins. In other words, if you have a backup plugin, the analytics data is automatically included in the backups.

There are some additional steps you’ll want to take when pushing data from a staging site to a production site, and that is covered in the article above.

---

## Why We Use Freemius

**Source:** [https://independentwp.com/knowledgebase/your-data/why-we-use-freemius/](https://independentwp.com/knowledgebase/your-data/why-we-use-freemius/)

When you first install Independent Analytics, you will see this optin form powered by [Freemius](https://freemius.com/) asking if you’d like to share non-sensitive diagnostic data with us:

![Freemius optin](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:417/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/05/freemius-optin.png)

This data helps us to better understand our users. It is entirely optional, so you don’t have to opt-in if you don’t want to.

The data we receive includes a few basic metrics like versions of PHP, WP, and Independent Analytics that are being run, along with more specific site profile data that can aid us in debugging.

While this data can be useful for us, the larger reason for implementing Freemius is that it gives us a platform for selling Independent Analytics Pro and makes license activation and auto-updates easy for our users.

Freemius doesn’t run on the front-end of your site and does not have access to your analytics data, so there is no impact on your site’s GDPR compliance or the privacy of your users.

---

