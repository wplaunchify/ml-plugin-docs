# Common Questions

*Category from Independent Analytics Pro documentation*

---

## Why You Need to Clear Your Cache

**Source:** [https://independentwp.com/knowledgebase/common-questions/why-clear-cache/](https://independentwp.com/knowledgebase/common-questions/why-clear-cache/)

When a webpage is cached, you can think of it as a saved copy. Instead of the server generating a new copy of the page for each visitor, it gives them the same “saved” copy. This is much more efficient than rebuilding the page over and over again.

When you install Independent Analytics, it automatically adds a tracking script to every page of your website. However, if your site uses caching, then visitors will get the “saved” copies of your pages from before Independent Analytics was installed. This means the tracking script isn’t included in the pages yet, and visitors won’t be tracked.

To solve this issue, you just need to clear your cache. You only need to empty the cache once, and then Independent Analytics will be able to track all of your visitors across all of your pages.

If your site doesn’t use any caching via a plugin, your host, or a CDN, then there is nothing you need to do.

## How to clear your cache

The vast majority of WordPress sites have caching enabled through a plugin like WP Super Cache, LiteSpeed Cache, WP Fastest Cache, etc.

![Caching plugins](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:752/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/04/caching-plugins.png)You probably have one of these plugins installed

While the exact location of this option changes from one plugin to the next, they all include a one-click option to clear the cache. It may say “clear cache,” “empty cache,” or use similar language.

Once the cache has been cleared, Independent Analytics will be able to track all visitors.

---

## Does it Work Well with Large Sites?

**Source:** [https://independentwp.com/knowledgebase/common-questions/work-large-sites/](https://independentwp.com/knowledgebase/common-questions/work-large-sites/)

Let’s start with a distinction in what a “large” site is.

If the site is large in terms of the number of pages it has, that is not an issue. Independent Analytics will run just as quickly for a site with five pages as one with 50,000 pages.

What matters is the volume of traffic the site gets. The analytics won’t slow down your site for visitors, no matter how much traffic you get, but **the Analytics menu itself can get slow**.

We occasionally get users with sites that receive **more than 1 million views per month**, and the analytics reports do not perform well for these sites. We would not recommend using Independent Analytics if your site gets this much traffic.

While it is technically possible to scale your database resources to make the analytics load quickly, even with millions of visitors, WordPress hosting is not typically designed to scale in this way. It scales to serve pages to larger numbers of concurrent visitors, not to handle increasingly large database queries. For this reason, the analytics will likely become sluggish even with great hosting because it hasn’t scaled as needed for the database queries. We put great effort into optimizing Independent Analytics to query data as efficiently and quickly as possible, but at certain scales, a WordPress plugin becomes an inappropriate solution for serving analytics.

Sites that get fewer than 100,000 views per month will not have these issues and will enjoy 2-4 second load times for the analytics. For sites with 100k-1m views per month, there may be a significant delay when loading analytics over longer date ranges, like the past 12 months.

---

## Does it Track Search Engine Keywords and Queries?

**Source:** [https://independentwp.com/knowledgebase/common-questions/track-keywords-search-engines/](https://independentwp.com/knowledgebase/common-questions/track-keywords-search-engines/)

No, Independent Analytics does not include the keywords that visitors entered into a search engine before reaching your site.

This data is proprietary and controlled by the search engines. You can create a [Google Search Console](https://search.google.com/search-console/about) account in order to see some of the keywords that your visitors used before accessing your site. Likewise, you can use [Bing Webmaster Tools](https://www.bing.com/webmasters/about) to review keywords your visitors entered into Bing.

---

## Blog vs Home in Pages Report

**Source:** [https://independentwp.com/knowledgebase/common-questions/blog-vs-home-pages-report/](https://independentwp.com/knowledgebase/common-questions/blog-vs-home-pages-report/)

If your site is displaying a custom page on the homepage, then the Pages report will display that page’s title and give it a **Page Type** of **Page**.

Alternatively, you may be displaying your latest posts on the homepage instead of a custom page, like this:

![Blog set to homepage](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:768/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/03/blog-set-to-homepage.png)

If that’s the case for your website, then the homepage doesn’t have a title defined anywhere, so Independent Analytics gives it the title **Blog**, gives it the **Page Type** of **Blog**, and displays a home icon next to the page type.

![Blog page type](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/03/blog-page-type.png)

If you are displaying a custom page on your homepage and you’ve selected a different page to display your blog, Independent Analytics will use the blog page’s title and will use **Blog** as its **Page Type**, but showing a pencil icon instead.

![Blog page type icon for non-homepage](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/03/blog-page-type-pencil.png)

---

## Are IP Addresses Stored?

**Source:** [https://independentwp.com/knowledgebase/common-questions/are-ip-addresses-stored/](https://independentwp.com/knowledgebase/common-questions/are-ip-addresses-stored/)

No, Independent Analytics does not store the IP addresses of visitors.

Independent Analytics is designed as a privacy-friendly analytics tool, so it does not store personal data of any visitors.

*According to the GDPR, IP addresses are considered personal data.*

---

## Why Do I Have So Much “Direct” Traffic?

**Source:** [https://independentwp.com/knowledgebase/common-questions/direct-traffic/](https://independentwp.com/knowledgebase/common-questions/direct-traffic/)

If you look at your [Referrers report](https://independentwp.com/knowledgebase/dashboard/how-to-referrers-report/), the **Direct** referrer is most likely the top result in the data table.

![Referrers table example](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:473/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/11/referrers-table-example.png)

There are a few reasons why a visitor can be attributed to the **Direct** referrer.

## They visited via their browser address bar

Many, if not most, of these visitors are typing your site’s URL directly into their browser address bar. If they have visited your site before, the browser will auto-suggest it to them after typing even a couple of characters into the address bar, which makes it easy to return.

Likewise, they may have a shortcut to your site on their browser’s homepage if they have recently visited.

These are visitors who truly visited your site directly i.e. they didn’t click on a link on another site. However, the Direct referrer also serves as a catch-all when referrer data has been stripped.

## The referrer data was stripped

Referrer data is sometimes removed for security or privacy purposes.

For starters, most email clients strip the referrer data from all links, so if you send an email newsletter and someone visits your site via a link in the email, it will most likely show up as a **Direct** view.

Next, someone may use a privacy-focused browser or browser extension to automatically strip the referrer data from all links they click on.

Lastly, some sites, including those running WordPress, will automatically append the 
```
noreferrer
```

 attribute to links, which tells the browser not to share the referrer info.

All analytics tools get the referrer data from the browser to find out where a visitor came from. This is the same for Google Analytics, Independent Analytics, and all other website analytics apps.

## Is there anything I can do to get more referrer data?

Yes, you can win back some of this data by using [UTM parameters](https://independentwp.com/knowledgebase/campaigns/what-is-utm-parameter/) when linking to your website, like this:

```
https://mywebsite.com/?utm_source=Mailchimp&utm_medium=Email&utm_campaign=Newsletter
```

If you use a campaign link like this in an email newsletter, you would still see traffic show up as **Direct** in the Referrers report, but you would be able to see exactly how many people clicked on your link via the [Campaigns report](https://independentwp.com/features/campaigns/).

For this reason, it’s a good idea to use UTM parameters whenever you have control over the link.

You can create and track campaign links with the [Campaigns feature](https://independentwp.com/features/campaigns/) in Independent Analytics Pro.

---

## Can I Display the Analytics on the Front-End?

**Source:** [https://independentwp.com/knowledgebase/common-questions/display-analytics-front-end/](https://independentwp.com/knowledgebase/common-questions/display-analytics-front-end/)

No, it’s not currently possible to display the analytics on the front-end. However, you can share back-end analytics access with non-admins and hide the WP admin interface.

## Sharing back-end access

You can [follow this tutorial](https://independentwp.com/knowledgebase/dashboard/give-users-permission-view-analytics/) to learn how to share access with other user roles on your site. You can also [limit their access](https://independentwp.com/knowledgebase/dashboard/post-authors-view-analytics/) to stats for their own content only.

If you give the Subscriber role access, they will only be able to see a simplified Dashboard menu, the Profile menu, and the Analytics menu. You can also create a new custom user role with the [User Role Editor](https://wordpress.org/plugins/user-role-editor/) plugin if you want.

## Hiding the WP menu

If you want to hide the fact that they’re inside the WP admin, you can use the following code to hide the sidebar completely.

```
function hide_admin_sidebar_for_subscribers() {
    if (current_user_can('subscriber')) {
        echo '<style>
            #adminmenumain, #adminmenuwrap, #wpadminbar, #adminmenu {
                display: none !important;
            }
            #wpcontent, #wpbody {
                margin-left: 0 !important;
            }
        </style>';
    }
}
add_action('admin_head', 'hide_admin_sidebar_for_subscribers');
```

This code hides the WP admin sidebar if the user has the Subscriber user role.

Lastly, you can automatically redirect them to the Analytics menu when they login with this code snippet:

```
function redirect_subscribers_after_login($redirect_to, $request, $user) {
  // Check if user is a valid WP_User object and has the 'subscriber' role
  if (isset($user->roles) && is_array($user->roles) && in_array('subscriber', $user->roles)) {
      return admin_url('profile.php'); // or use a custom URL here
  }
  return $redirect_to;
}
add_filter('login_redirect', 'redirect_subscribers_after_login', 10, 3);
```

Again, this will target anyone with the Subscriber user role who logs into the site. They’ll be automatically redirected to the Analytics menu, and with the sidebar hidden, they won’t see any other menus to navigate to.

You can add both snippets to your site using the free [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin.

If you have a dedicated account page on the front-end of your site for members, you can add an **Analytics** link and have it open in a new tab instead of redirecting members when they login.

---

## Can I Add My Data to Looker Studio?

**Source:** [https://independentwp.com/knowledgebase/common-questions/add-data-looker-studio/](https://independentwp.com/knowledgebase/common-questions/add-data-looker-studio/)

Independent Analytics does not have an integration with Looker Studio. However, you can [export any report to CSV](https://independentwp.com/knowledgebase/your-data/import-export-data/), and the CSV can then be imported into Looker Studio.

---

## How Event / Goal Tracking Works

**Source:** [https://independentwp.com/knowledgebase/common-questions/event-goal-tracking-works/](https://independentwp.com/knowledgebase/common-questions/event-goal-tracking-works/)

With Independent Analytics, we approach event tracking differently than other analytics platforms.

In most other analytics tools, you can use a line of JavaScript to trigger an event, giving it a name and a value. This is very flexible, but there are a couple of issues.

First, you have to know where to implement the JavaScript snippet, which can be complicated when trying to track form submissions or eCommerce sales and refunds. Secondly, the way this information can be presented in the Analytics menu is limited because there is no context.

For these reasons, we’ve implemented more user-friendly and context-aware goal-tracking features, including:

1. eCommerce analytics
2. Form submission tracking
3. Click tracking

## eCommerce analytics

Instead of figuring out where to implement a JavaScript code snippet yourself, Independent Analytics Pro will automatically record all sales for you. The only requirement is that you use one of the [supported eCommerce plugins](https://independentwp.com/knowledgebase/woocommerce/supported-ecommerce-plugins/), like WooCommerce, SureCart, or Easy Digital Downloads. There is no other configuration required.

Unlike simple goal tracking, which can only record one goal value, this integration tracks eight different eCommerce metrics, like gross sales, refunds, and conversion rate. This data can be found in the Quick Stats, chart, and data table of every report.

![WooCommerce sales data](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:546/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/woocommerce-sales-data-1.png)Here, you can see orders and net sales in the Referrers report

[Learn more about eCommerce analytics](https://independentwp.com/features/ecommerce-analytics).

## Form submission tracking

Like the eCommerce tracking feature, Independent Analytics Pro integrates with other WordPress plugins to track form submissions automatically.

There are over [20+ supported plugins](https://independentwp.com/knowledgebase/form-tracking/form-plugin-integrations/), including popular options like Contact Form 7, WPForms, and Fluent Forms. As long as your forms are built using one of these plugins, their submissions will be tracked automatically.

You can then find the submission and conversion rate of every form, plus an aggregated value for all forms.

![Mutiple forms available](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:697/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/mutiple-forms-available.png)Stats can be shown for all forms or any individual form

This makes it simple to find out where your leads are coming from and which pages are converting visitors into leads most effectively.

[Learn more about form tracking](https://independentwp.com/features/form-tracking/).

## Click tracking

Independent Analytics Pro uses an innovative “link pattern” system for simple and codeless click-tracking.

From the Click Tracking menu, you can choose exactly which links should be tracked. In a few clicks, you can track all clicks on PDF files or email links on your website. You can also track clicks to external domains and subdirectories or [track individual links with classes](https://independentwp.com/knowledgebase/click-tracking/add-class-editor/).

![Click Tracking menu](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:826/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/10/click-tracking-menu.png)

You can then see how many clicks your tracked links are getting in the Clicks report.

![Clicks report](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:783/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/10/clicks-report.png)

[Learn more about click tracking](https://independentwp.com/features/click-tracking/).

As you can see, the way event tracking is implemented in Independent Analytics Pro is much simpler and more robust than the JavaScript snippet approach of many other analytics tools.

If there is any goal that you need to track that isn’t included here, feel free to [contact support](https://independentwp.com/contact/), and we can help you with a solution.

---

## How to Fix the upload_max_filesize Error

**Source:** [https://independentwp.com/knowledgebase/common-questions/fix-upload-max-filesize-error/](https://independentwp.com/knowledgebase/common-questions/fix-upload-max-filesize-error/)

This tutorial will help you if you get the following error message when uploading Independent Analytics via the **Plugins > Add New** menu:

> The uploaded file exceeds the upload_max_filesize directive in php.ini.

This can happen if the plugin’s zip file is greater than the allowed upload filesize. As of now, Independent Analytics is 8.2MB, but that value is subject to change in the future. For this reason, it would be best to increase your max upload size to at least 10MB.

There are a few easy ways to accomplish this.

## Contact your host

You can simply message your host and ask them to increase your site’s 
```
upload_max_filesize
```

, and they should be able to handle this quickly for you.

## Edit the php.ini file

If your web host uses cPanel, there is a built-in PHP.ini file editor. Open it, look for the 
```
upload_max_filesize
```

 option, and change it to at least 10M.

*Please note that the value should be 10M and not 10MB.*

## Use the MaxUploader plugin

The free [MaxUploader plugin](https://wordpress.org/plugins/wp-maximum-upload-file-size/) can show you your site’s current upload limits, and it includes simple options for increasing these limits from the WP admin dashboard.

## Upload via FTP instead

If, for some reason, you are unable to increase your site’s max upload size, you can upload the plugin via FTP instead. Your hosting account likely includes a file manager, but if not, you can use a standalone FTP client like FileZilla.

In order to upload Independent Analytics to your website, unzip it first so that you have the 
```
independent-analytics
```

 folder. Then, on your server, navigate to the 
```
wp-content/plugins/
```

 folder and upload the 
```
independent-analytics
```

 folder there.

You will then see Independent Analytics in your Plugins menu, where you can activate it to begin use.

---

## How to Fix the Database Prefix Length Error

**Source:** [https://independentwp.com/knowledgebase/common-questions/database-prefix-length-error/](https://independentwp.com/knowledgebase/common-questions/database-prefix-length-error/)

If you install Independent Analytics and see the message below, it means your database prefix is longer than 25 characters.

![Database prefix length warning](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:568/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/07/database-prefix-length-warning.png)

This can cause the tables created by Independent Analytics to exceed the 64-character limit enforced by MySQL. For that reason, it is required to shorten the DB prefix to less than 25 characters before using Independent Analytics.

The good news is that changing your DB prefix doesn’t require any technical skill, thanks to a very helpful plugin called [Brozzme DB Prefix & Tools Addons](https://wordpress.org/plugins/brozzme-db-prefix-change/).

Once you install this free plugin, you’ll find a new settings menu like this:

![Brozzme plugin settings](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/07/brozzme-settings.png)

All you have to do is enter a new prefix into the **New Prefix** field and click the **Change DB Prefix** button.

The prefix can be anything you want, as long as it’s less than 25 characters. It’s also a standard convention to end it with an underscore.

Once the prefix is changed, revisit the Analytics menu and you should see the full dashboard load right away.

---

## Can I Import Data from Google Analytics or Jetpack?

**Source:** [https://independentwp.com/knowledgebase/common-questions/import-data-google-analytics-jetpack/](https://independentwp.com/knowledgebase/common-questions/import-data-google-analytics-jetpack/)

We don’t have a way to import data from Google Analytics or Jetpack at this time.

One strategy we recommend is to run Independent Analytics alongside your current solution for a month to ease the transition. This way, you won’t miss recent data, and you can compare the stats between the tools for a little while before fully switching.

---

## Do You Have an Affiliate Program?

**Source:** [https://independentwp.com/knowledgebase/common-questions/affiliate-program/](https://independentwp.com/knowledgebase/common-questions/affiliate-program/)

Yes, Independent Analytics now offers an affiliate program!

You can earn 30% commissions on every sale of Independent Analytics Pro that you refer. Learn more with the link below:

[Learn more about the affiliate program](https://independentwp.com/affiliate-program/)

---

## Can I Run the Independent Analytics Script Without Installing the Plugin?

**Source:** [https://independentwp.com/knowledgebase/common-questions/run-independent-analytics-without-plugin/](https://independentwp.com/knowledgebase/common-questions/run-independent-analytics-without-plugin/)

Independent Analytics is only available as a WordPress plugin and needs to be installed to run.

Unlike Google Analytics, where the analytics platform is hosted elsewhere, Independent Analytics runs entirely on your site, so tracking can’t be added with only a Javascript snippet.

---

## How to Fix Missing Geographic Data

**Source:** [https://independentwp.com/knowledgebase/common-questions/fix-missing-geographic-data/](https://independentwp.com/knowledgebase/common-questions/fix-missing-geographic-data/)

If you are not seeing city or country data in the Geographic report, here’s how you can fix it quickly.

When Independent Analytics is installed, it adds a file called **iawp-geo-db.mmdb** into the 
```
/wp-content/uploads/
```

 folder of your website.

This file is a type of database that maps IP addresses to physical locations and is used to get visitor location data for the Geographic report.

If you do not see any data in the Geographic report, this means there was an error downloading the **iawp-geo-db.mmdb** file into 
```
/wp-content/uploads/
```

 .

To fix this, start by opening your site’s 
```
/wp-content/uploads/
```

 folder. Your hosting account probably has a “file manager” tool you can use, but if not, you can install the free [File Manager](https://wordpress.org/plugins/wp-file-manager/) plugin.

Inside 
```
/wp-content/uploads/
```

, you may see a file called **iawp-geo-db.zip**. If you see this file, you can simply extract the zip file, and you’ll see the **iawp-geo-db.mmdb** file appear. Geographic tracking will begin working immediately, and you can delete the zip version of the file.

If you do not see **iawp-geo-db.zip**, then please [click here to download](https://assets.independentwp.com/iawp-geo-db-5.mmdb.zip) the file. Upload it to the 
```
/wp-content/uploads/
```

 folder and unzip it, and you will then see country and city data appearing in the Geographic report.

---

## Missing Database Tables: How to Fix this Error

**Source:** [https://independentwp.com/knowledgebase/common-questions/missing-database-tables-error/](https://independentwp.com/knowledgebase/common-questions/missing-database-tables-error/)

When Independent Analytics is installed, it adds a few tables to your database that all begin with “independent_analytics.” These tables are required for the plugin to operate.

If these tables are deleted, you will see the following error screen:

![Missing db tables error](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:675/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/03/missing-db-tables-error.png)

When this occurs, it is usually because Independent Analytics was deleted, the tables were deleted manually or with a database cleaning plugin, and then Independent Analytics was reactivated.

The problem is that while the database tables were deleted, there is still a setting in the **wp_options** table that thinks Independent Analytics is installed. You need to reset this option too, and then the plugin will run properly.

In your WP admin dashboard, there is a hidden Options menu you can visit at this URL: yourwebsite.com/wp-admin/options.php.

There, you can find the option called “**iawp_db_version**” and change it to “**0**.” This will cause Independent Analytics to delete all of the tables and rebuild them from scratch.

If you don’t have access to the Options menu or it won’t save, you can access your site’s database directly via phpMyAdmin. If you login to your hosting account, you should find a link to phpMyAdmin there.

Inside phpMyAdmin, click on your site’s database in the left sidebar, then click on the **wp_options** table. In **wp_options**, search for an option named **iawp_db_version** and change its value to 0. Then, visit the Analytics menu again, and you’ll see the dashboard load right away.

## How to prevent this error in the future

If you need to reset your analytics or if you decide to stop using Independent Analytics in the future, please use the included [feature to delete all data](https://independentwp.com/knowledgebase/your-data/delete-all-data/).

This will ensure that all traces of Independent Analytics are completely removed. This includes the analytics database tables, a few options in **wp_options**, post meta values, and the **iawp-geo-db.mmdb** file that gets added to the wp-content/uploads/ folder.

If you decide to use Independent Analytics again after deleting it in this way, there won’t be any errors upon reactivation.

---

## Does it Include Historical Data?

**Source:** [https://independentwp.com/knowledgebase/common-questions/historical-data/](https://independentwp.com/knowledgebase/common-questions/historical-data/)

Independent Analytics does not include historical data, so you won’t see statistics from before the time of installation.

Once installed, new visitors will begin to show up in the analytics right away. Unlike other analytics tools that refresh at midnight, you can see new visitors in your dashboard immediately after they visit.

---

## Missing Database Permissions: How to Fix this Error Message

**Source:** [https://independentwp.com/knowledgebase/common-questions/missing-database-permissions/](https://independentwp.com/knowledgebase/common-questions/missing-database-permissions/)

Here’s why you’re seeing this error message on your site and how to fix it.

## Why am I seeing this message?

This error message displays if your site is missing one or more of the following database permissions:

- ALTER
- INDEX
- DROP

These are basic database commands that Independent Analytics needs to operate. Without the ability to run these commands, it may crash during an update. For this reason, the error message is shown before an actual error occurs so that the permission can be granted and the analytics can resume operating.

## How to fix the error

If these steps seem too technical for you to fix on your own, please ask your host to enable these permissions for you, or reach out to us, and we can help.

The first step is to access your site’s database. If you login to your hosting account, you should see a tool called **phpMyAdmin** that will allow you to view and edit your database. Your host may call it something like “Database access” instead.

Inside phpMyAdmin, start by selecting your site’s database in the left sidebar, and then click on the **Privileges** tab at the top of the screen.

![Privileges tab](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:489/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/03/privileges-tab.png)

If your sidebar has numerous databases and you’re not sure which one is for your site, check your site’s wp-config.php file. It will include the database name (DB_NAME) at the top of the file. You’ll find the database username right below it, which you’ll need in the next step.

![Db credentials](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:351/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/03/db-credentials.png)

In the Privileges menu, locate your site’s database user and click the **Edit privileges** link.

![Edit privileges](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:619/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/03/edit-privileges.png)

Lastly, check the box next to each privilege Independent Analytics needs, and then press the **Go** button at the bottom to save your changes.

![Required permissions](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:948/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/03/required-permissions.png)

Most likely, you only need to check the box next to ALTER and/or INDEX and then click the **Go** button to save. However, the full required permissions are SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, INDEX, and DROP.

**Please do not disable any permissions that are already selected**. While they may not be needed for Independent Analytics, your host probably has a good reason for enabling them in the first place.

Once this change is made, visit the Analytics menu in your WP website, and you’ll see the error message has gone away.

---

## Why are My Cloudflare Stats So Much Higher?

**Source:** [https://independentwp.com/knowledgebase/common-questions/why-cloudflare-stats-different/](https://independentwp.com/knowledgebase/common-questions/why-cloudflare-stats-different/)

If you use Cloudflare’s web stats, you’ll see that your visitor counts are much higher than those reported in Independent Analytics. This is perfectly normal.

The difference occurs because Cloudflare counts every request as a visitor, including bots and API calls to your site. Additionally, visitors that are blocked by the firewall are still counted. You can think of it more like the number of unique requests to your site than human visitors.

On the other hand, Independent Analytics excludes bots, API calls, and any visitors that get blocked by your firewall. For these reasons, it provides a more accurate measurement of real human activity on your website.

---

## Is it RTL Compatible?

**Source:** [https://independentwp.com/knowledgebase/common-questions/rtl-compatibility/](https://independentwp.com/knowledgebase/common-questions/rtl-compatibility/)

Yes, Independent Analytics is fully compatible with right-to-left languages like Arabic and Hebrew.

Here’s a preview of the dashboard in RTL display:

![RTL interface](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:773/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/02/rtl-interface.png)

---

## Is it Compatible with WPML?

**Source:** [https://independentwp.com/knowledgebase/common-questions/wpml-compatibility/](https://independentwp.com/knowledgebase/common-questions/wpml-compatibility/)

Yes, Independent Analytics is fully compatible with the WPML plugin.

It works with all configurations, so it doesn’t matter whether you use subdomains or subdirectories.

In the Pages report, you’ll see separate stats for each translation of every page on your site.

It is also compatible with the Polylang translation plugin.

---

## How to Set the Local Timezone

**Source:** [https://independentwp.com/knowledgebase/common-questions/what-timezone/](https://independentwp.com/knowledgebase/common-questions/what-timezone/)

Independent Analytics uses the same timezone set here in the **General Settings** menu:

![Timezone setting](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:408/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/11/timezone-setting.png)

If you haven’t configured a timezone there already, make sure to do that now. This will ensure that your analytics match your local time. It’s also important to set your timezone here because it’s used by other plugins and WP features, such as scheduling posts.

While editing the timezone, you can also edit the date and time formats:

![Date and time format settings](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:753/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/11/date-time-format.png)

These formats are both used by Independent Analytics when displaying dates and times.

---

## Data Migration Failed: Fix the “Update Running” Message

**Source:** [https://independentwp.com/knowledgebase/common-questions/help-update-running-message/](https://independentwp.com/knowledgebase/common-questions/help-update-running-message/)

When Independent Analytics updates, it is normal to see the following screen immediately following the update:

![Update is running](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:706/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/11/update-is-running.png)

In some updates, we need to make large changes to the structure of the database tables. For small sites, this takes seconds, but for sites with hundreds of thousands of visitors, it can take a couple of minutes.

**However, if you have seen this screen for much longer than five minutes**, then this means the update process failed. While we do our best to test every update thoroughly, there are times when these changes conflict with a site’s database environment.

**If this has happened to your site, please email us at support@independentwp.com, and we will work with you one-on-one to get it resolved.**

We may need login access (live or staging) in order to fully debug the issue, and then we will be able to fix it. The steps to resolve a failed update are highly technical and often unique to each site, so we are not able to include step-by-step instructions here.

---

## Can I Translate Independent Analytics?

**Source:** [https://independentwp.com/knowledgebase/common-questions/translate-independent-analytics/](https://independentwp.com/knowledgebase/common-questions/translate-independent-analytics/)

Yes, any English text you see in the dashboard can be translated into another language.

The translations are hosted on [translate.wordpress.org](https://translate.wordpress.org/), so if you’d like to work on a translation, please get in touch with us here or on the [support forum](https://wordpress.org/support/plugin/independent-analytics/). **Let us know your wordpress.org username** and we can get you approved as a translation editor for our plugin. The translations you add will be automatically downloaded onto your site and the sites of any other users who share your language.

---

## How to Enable Error Logging

**Source:** [https://independentwp.com/knowledgebase/common-questions/enable-error-logging/](https://independentwp.com/knowledgebase/common-questions/enable-error-logging/)

If you’re experiencing an error on your site, a great first step is to enable error logging so that you can get more info about what’s going wrong.

## Enable via Debug Log Manager Plugin

The easiest way to enable debugging is to install and activate the [Debug Log Manager](https://wordpress.org/plugins/debug-log-manager/) plugin.

![Debug log manager](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:461/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/09/debug-log-manager.png)

After installing and activating this plugin, visit the **Tools > Debug Log Manager** menu. Then, enable the **Error Logging** option at the top of the page.

![Enable error logging](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/09/enable-error-logging.png)

Any error messages that get triggered will now be captured here in the log. Each error will only show up once, which makes the log much easier to read. You can see how many times each error occurred on the right side of the page.

Once you have error logging enabled, try recreating the original error that you are debugging, and this will capture the full PHP error message in the log.

The most recent error messages show up at the top, but there is a search bar you can use to search for “independent-analytics” to find any error messages coming from our plugin.

When you are finished, you can disable error logging and clear the log before deleting the Debug Log Manager plugin.

## Enable via wp-config.php

To enable error logging without installing a new plugin, start by accessing your site via FTP. You can use a standalone app like [FileZilla](https://filezilla-project.org/) if your hosting account doesn’t include a file manager tool.

Once connected, locate and open the **wp-config.php** file. At the bottom of the file, add the following three lines of code:

```
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
```

This code tells WordPress to enable debugging, save errors to the debug log, and not display any error messages on the site.

Once **wp-config.php** is saved, you can recreate the same error as before, and the error message will be saved in the debug log. Then, you can download the log from the following location: **wp-content/debug.log**.

You can use this info to debug the issue yourself or share it with us, and we can help to resolve the error.

After the error is resolved, you can delete the three lines of code added to your **wp-config.php** file.

---

## How to fix the “Missing PDO” error message

**Source:** [https://independentwp.com/knowledgebase/common-questions/pdo-error/](https://independentwp.com/knowledgebase/common-questions/pdo-error/)

If you install Independent Analytics and see the message below, it means your site doesn’t have the PDO PHP extension installed:

![Missing pdo extension](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:525/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/08/missing-pdo-extension.png)

While that may sound very technical, correcting this issue is easy.

Start by logging into your hosting account. If your host is using cPanel (most do), locate the “Select PHP version” tool and click on it. You’ll be taken to this page, where you can enable PHP extensions.

![Php extensions cpanel](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:480/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/08/php-extensions-cpanel.png)

All you have to do is check the 
```
pdo
```

 and 
```
pdo_mysql
```

 checkboxes and save your settings.

Once this is done, Independent Analytics will be able to run on your site.

## I don’t have these options in my hosting account

If your host doesn’t include these options, then contact them and request they enable both the “pdo” and “pdo_mysql” extensions for your site. It will only take them a moment to enable these modules on your behalf.

## It’s still not working

If you’ve enabled both 
```
pdo
```

 and 
```
pdo_mysql
```

 and you still see the same error message in Independent Analytics there are two things you can check.

First, in cPanel, the extensions are enabled for specific versions of PHP. Please make sure that you have enabled both extensions for the same version of PHP that your site is using.

Next, check if your site has the 
```
mysqlnd
```

 extension enabled. If it does, you can disable the 
```
pdo_mysql
```

 extension and enable the 
```
nd_pdo_mysql
```

 extension instead. Then, revisit the Analytics menu, and it should load right away.

---

## Does it Work with Multisite?

**Source:** [https://independentwp.com/knowledgebase/common-questions/multisite-compatibility/](https://independentwp.com/knowledgebase/common-questions/multisite-compatibility/)

Yes, Independent Analytics is fully compatible with multi-site installs.

You can Network Activate it to enable it for all sites on your network, and they will each have their own tracking and analytics dashboard.

## Pro license activation

If you are using Independent Analytics Pro, you can Network Activate it just like the free version. Then, you can visit the **Plugins** menu, scroll to the Independent Analytics Pro, and click on the **Activate License** link. You’ll see a pop-up where you can enter your license key, and there is a box checked by default to activate the license for all sub-sites.

![Activate license multisite](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:678/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/05/activate-license-multisite.png)

**Please note that each subsite counts as a full website, so this will only be possible if your license key has enough activations for all sites in the network.**

If you uncheck the box, you’ll have the option to choose which sub-sites you want to activate the license key on.

![Activate license choose subsites](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:924/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/05/activate-license-choose-subsites.png)

If you want to make a change to which sub-sites are activated in the future, you can visit the **Network Admin > Independent Analytics > Account** menu. You will find a **Sites** section there where you can activate/deactivate the license key on individual sub-sites.

![Manually activate license subsites](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:386/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/05/manually-activate-license-subsites.png)

---

## Why Does Independent Analytics Show Different Stats Than Google Analytics?

**Source:** [https://independentwp.com/knowledgebase/common-questions/independent-analytics-show-more-visitors-than-google-analytics/](https://independentwp.com/knowledgebase/common-questions/independent-analytics-show-more-visitors-than-google-analytics/)

If you run both Independent Analytics and Google Analytics on your site simultaneously, you may notice a significant difference in the stats. There are a few reasons why this can happen.

## Why Independent Analytics may record MORE visitors than Google

If you’re using a cookie consent form, Google Analytics won’t record a visitor until they opt-in. Depending on the design of your consent form, this number can be anywhere from 10-90% of your visitors.

On the other hand, Independent Analytics does not use cookies, nor does it store personally identifiable information, so it does not require visitor consent before tracking. This means that 100% of the visitors get tracked. This can lead to much larger visitor counts than seen with GA.

## Why Independent Analytics may record FEWER visitors than Google

First, Independent Analytics does not track AMP pages, so you will see more visitors in GA if you are using AMP on your site.

Next, make sure that you have cleared your cache after installing IA. The cache needs to be cleared once so that the tracking script can appear on every page of the website.

Lastly, check if the Google Analytics script has been added more than once. It is easy to make this mistake if you end up with multiple plugins or custom scripts adding the tracking code to your site.

Those are the known reasons why you may see a difference between stats in IA vs. GA, but if none of those explanations fit your website, feel free to reach out to  support@independentwp.com, and we can debug your site for any potential tracking issues.

---

## Will My Database Get Bloated?

**Source:** [https://independentwp.com/knowledgebase/common-questions/space-used-in-database/](https://independentwp.com/knowledgebase/common-questions/space-used-in-database/)

When using a WP plugin instead of a SAAS app for analytics, a common concern is that the database will become bloated with data.

While storage varies from site to site, the amount of space Independent Analytics uses in the database is roughly **200-300MB per million sessions**. We find that this volume of data is reasonable for the majority of websites.

If you’d like to limit the amount of data stored in the database, you can enable the option to [automatically delete old data](https://independentwp.com/knowledgebase/your-data/automatically-delete-old-data/).

## Data storage does not affect performance

Sometimes, we get messages from users who are worried that storing analytics data in their database will slow down their site. This is not the case.

**The amount of analytics data stored in your database has no impact on performance outside of the Analytics menu.**

The performance when visitors access your site or when you view menus in your admin dashboard will not be affected because the analytics data is not being queried. It is only when you are viewing the Analytics menu that the data is being queried.

---

## What are Page-Based Analytics?

**Source:** [https://independentwp.com/knowledgebase/common-questions/page-based-analytics/](https://independentwp.com/knowledgebase/common-questions/page-based-analytics/)

Other analytics programs, like Google Analytics, only know about the front end of your site.

That’s why a typical URL-based analytics dashboard gives you a list of URLs along with their metrics:

![](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:576/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/06/google-analytics-example.png)A list of URLs with only metrics in the other columns

Independent Analytics is different because it is integrated with WordPress and tracks your pages, not your URLs.

It reports additional information about your pages, like the author, page type, and post category.

![](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:639/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/06/wordpress-integration-1800.png)A list of pages with both metrics and properties included

Since every column is filterable, you can use the additional properties to find things like podcast episodes published this month or blog posts that have more than 400 views.

![Filtered and unfiltered Quick Stats](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:594/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/12/unfiltered-quick-stats-1024x594.png)

Another major benefit is that you can make changes to your pages and those changes show up retroactively. For instance, you can change the URL of a page or even migrate to a new domain, and the URLs will already be updated when you next view the dashboard.

URL-based tools like Google Analytics don’t understand the concept of pages, so your new URLs will be tracked separately making it hard to see how a page has performed before and after the URL is changed.

One last benefit of using a WordPress-based solution is that your data never leaves your server. This makes Independent Analytics [much faster](https://independentwp.com/knowledgebase/common-questions/will-it-slow-down-my-site/) and [more private](/knowledgebase/common-questions/what-makes-it-gdpr-compliant/) than other analytics solutions.

---

## What Makes it Privacy-Friendly?

**Source:** [https://independentwp.com/knowledgebase/common-questions/what-makes-it-gdpr-compliant/](https://independentwp.com/knowledgebase/common-questions/what-makes-it-gdpr-compliant/)

There are three ways that Independent Analytics addresses user privacy laws, such as the GDPR (DSGVO) and CCPA.

First, Independent Analytics does not communicate with external servers. Unlike third-party apps that save your data on their servers, Independent Analytics is a WordPress plugin that runs entirely on your site. Your analytics data is both created and stored on your server without anyone else ever having access.

Second, Independent Analytics does not store personal data. It uses a visitor’s IP address to get their geolocation, then hashes their IP with their User Agent and a salt token to create a unique ID, which gets saved to the database. This allows Independent Analytics to recognize the same visitor when they return without storing personal data. It’s important to note that this unique ID is created with a one-way hash, not using encryption, so there is no key to revert it to the original contents.

Here is an example of what a visitor ID looks like in the database: **0f267385cf696c7022d463f610a2c20c**

Third and last, Independent Analytics does not use cookies at all.

## Limiting how long visitors are recognized

By default, Independent Analytics will recognize repeat visitors for as long as it can. This is naturally limited due to visitors changing their browser, device, and/or IP address over time.

With that said, if you would like to set a hard limit on how long the same visitor can be recognized, there is a setting to [change the salt refresh rate](https://independentwp.com/knowledgebase/data/refresh-visitor-salt/), allowing Independent Analytics to recognize visitors for no longer than 24 hours.

## HIPAA compliance

Independent Analytics does not have access to or store protected health information (PHI). It also does not store any personal information that could be tied to an individual’s health records. Additionally, it does not communicate with external servers, preventing any disclosure of data to other tracking technologies or vendors.

If you have any further questions about how Independent Analytics handles data privacy, please feel free to get in touch via our [contact page](https://independentwp.com/contact/).

---

## Why Aren’t My Views Showing Up?

**Source:** [https://independentwp.com/knowledgebase/common-questions/views-not-recording/](https://independentwp.com/knowledgebase/common-questions/views-not-recording/)

After installing Independent Analytics, there are a few steps you may need to take to properly track your analytics.

## Clear your cache

Independent Analytics adds a tracking script to your site automatically, but if you have a caching plugin installed, your visitors will see copies of your pages from before you installed Independent Analytics.

**Your cache needs to be emptied so that visitors see the most recent copies of your pages that include the Independent Analytics tracking script.**

You only need to clear your cache once for Independent Analytics to track every future visitor.

If you’re using Cloudflare or another CDN, make sure to empty the cache with your caching plugin first, and then empty the CDN cache.

### How to clear your cache

First, check your Plugins menu for a caching plugin. Popular caching plugins include:

- WP Super Cache
- W3 Total Cache
- WP Rocket
- LiteSpeed Cache
- WP Fastest Cache
- SiteGround Optimizer

Regardless of which plugin you use, there will be an option to “clear” or “empty” the cache.

If your host includes caching, you will also want to empty your site’s cache through your host. If you use a CDN like Cloudflare, you will need to empty the CDN cache too. Make sure to empty the CDN cache after emptying the cache created by a plugin.

## Log out if you’re testing for views

Independent Analytics doesn’t track logged-in visitors by default, so you won’t see your own views get recorded unless you log out or visit your site in a private browser window.

It is possible to [enable tracking of logged-in visitors](/knowledgebase/tracking/how-to-track-logged-in-visitors/), and you can [block IP addresses](/knowledgebase/tracking/block-ip-addresses/) as well.

## Enable the REST API

For most users, clearing the cache will ensure data tracking works.

However, if data is still not showing up in the dashboard, it’s most likely because your site has disabled the REST API. There are some security and performance plugins that do this, such as All In One WP Security and Perfmatters.

Since Independent Analytics requires the REST API to track views, it needs to be enabled. If you are concerned about security implications from enabling the REST API, it is possible to leave it disabled for all routes except for the one used by IA: [Read the tutorial](/knowledgebase/tracking/secure-rest-api/).

## Still having trouble?

If these solutions don’t help, please [contact us](https://independentwp.com/contact/), and we will assist you right away.

---

## Do I Need to Use a Cookie Popup?

**Source:** [https://independentwp.com/knowledgebase/common-questions/cookie-popup/](https://independentwp.com/knowledgebase/common-questions/cookie-popup/)

No, Independent Analytics does not use cookies, so there is no need to use a cookie popup with it to comply with GDPR regulations.

Even better, this means that 100% of your visitors are recorded, unlike solutions like Google Analytics which will only record visitors that accept your cookie policy.

---

## Can I Use Both Independent Analytics & Google Analytics?

**Source:** [https://independentwp.com/knowledgebase/common-questions/use-with-google-analytics/](https://independentwp.com/knowledgebase/common-questions/use-with-google-analytics/)

Yes, that’s not a problem.

If your site is running Google Analytics, you can add the Independent Analytics plugin without causing any kind of conflict or issue.

In fact, it may be a good idea to run them both for a while so you can compare the data collection and ease of use.

Independent Analytics has [virtually zero impact on performance](https://independentwp.com/knowledgebase/common-questions/will-it-slow-down-my-site/), so it won’t make your site any slower while running it in addition to Google Analytics.

---

## Will it Slow Down My Site?

**Source:** [https://independentwp.com/knowledgebase/common-questions/will-it-slow-down-my-site/](https://independentwp.com/knowledgebase/common-questions/will-it-slow-down-my-site/)

Unlike most analytics programs, Independent Analytics will not slow down your site. Here’s why.

## Why it’s so fast

There are two reasons why other analytics programs slow down your site:

- They are loaded externally
- They have a large tracking script

For example, if you use Google Analytics, then your site needs to load the tracking script from their servers. Requests to **external sources always take longer** than requests for files on your site.

Secondly, the time it takes to load a script depends partially on its size. The Google Analytics script is **about 35kb**, and if you have other features like outbound click tracking enabled, there will be additional scripts to load as well.

Since Independent Analytics runs entirely on your site, **there is no external request**. Additionally, the tracking script is **only 12kb,** and it’s **inlined to the page**, so there is no file request at all.

The tracking script uses the WordPress REST API to asynchronously record page views in your database without affecting your site’s load time.

If you measure your performance before and after installing Independent Analytics, you should see no difference, like on the Compete Themes website, which scored 100% on GTMetrix both before and after adding the Independent Analytics plugin.

![GT Metrix](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:387/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/08/gt-metrix.png)

---

