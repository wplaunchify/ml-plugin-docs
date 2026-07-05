# Maintenance And Optimization

*Category from TaxoPress documentation*

---

## How to Reduce the Number of Loaded Scripts for Better Speed and SEO

**Source:** [https://taxopress.com/docs/how-to-reduce-the-number-of-loaded-scripts-for-better-speed-and-seo/](https://taxopress.com/docs/how-to-reduce-the-number-of-loaded-scripts-for-better-speed-and-seo/)

Most scripts in WordPress, and therefore in the Tag Groups plugin are provided in separate files. They load automatically in the background when a visitor views a page. Scripts are necessary for functionality (mainly JavaScript) and styling (CSS).

Since loading these files takes time and extra requests from the browser, we try to reduce their number and size. The tricky part is to identify which scripts are required on which pages. Sometimes we can figure this out automatically, but considering all the cases with various themes, widgets and other plugins that add their own modifications it is unavoidable that you optimize your site manually.

---

## Try to load scripts only where you need them

Deselect the option “Always load shortcode scripts.” in the Tag Groups settings -> Front End. Then empty the cache (if you use a plugin or service for caching) and reload all pages where you use Tag Groups features.

With this option deactivated, the plugin tries to automatically identify the posts and pages where scripts need to be loaded. For that to work, however, the shortcode or block must be present in the *content* part of this page or post. If you insert it in a widget or if your theme adds them later, you need to keep this option activated. The only way to find out is by trying.

If you have to keep this option activated, you could then try a plugin such as [Asset CleanUp: Page Speed Booster](https://wordpress.org/plugins/wp-asset-clean-up/) to load only required scripts per page. For all tabs and accordions you will need the jQuery UI scripts and 
```
.../frontent.min.css
```

. Otherwise you have to identify the minimal required set of scripts by successively allowing scripts and checking the page. The file names of the scripts often give hints where they are needed. The [JavaScript console](https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers#77337) on the public page should not report any errors.

---

## Combine and defer scripts

There are plugins like [Autoptimize](https://wordpress.org/plugins/autoptimize/) that let you combine JavaScript or CSS files and change the time when they are loaded. Make sure to exclude jQuery so that it always loads early. Autoptimize lets you exclude certain patterns – add there: 
```
js/jquery/jquery.min.js,js/jquery/jquery.js
```

If you load the pages [with your JavaScript console open](https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers#77337), you can identify errors caused by dependencies – when one script needs another one, which should be loaded earlier.

---

## 3. Bonus hint: Deactivate debugging mode on your live site

If you don’t use your site in [debugging mode](https://taxopress.com/docs/how-to-use-the-debug-log/), the Tag Groups plugin always uses minimized scripts. You can identify them in the HTML code by their extensions .min.js and .min.css. By default, debugging mode is off.

---

## How to Improve the Performance of the Toggle Post Filter/Dynamic Post Filter

**Source:** [https://taxopress.com/docs/how-to-improve-the-performance-of-the-toggle-post-filter-dynamic-post-filter/](https://taxopress.com/docs/how-to-improve-the-performance-of-the-toggle-post-filter-dynamic-post-filter/)

When searching for matching posts in the post filters we make use of the WP_Query class. Usually it performs well, but for larger amounts of posts and complex searches the database may run into memory or performance issues.

To improve performance you can add an index to the postmeta table of your database. This is a common way how WordPress site admins manage to increase performance.

Since this solution changes the structure of the WordPress database, we don’t apply it through the plugin. That means that you need a way how to execute queries on your database – for example with phpMyAdmin.

**These queries are for advanced users. Use them at your own risk!**

---

## How to add an index to the postmeta table

Before you start, **create a complete backup** of your database that would allow you to restore it if something goes wrong.

Then go to the database that corresponds to your WordPress installation and execute the query below.

Make sure to **replace “wp_postmeta”** with the table name that holds the postmeta. It has a name like abc_postmeta. On multisite installations there may also additionally be abc_1_postmeta, abc_2_postmeta and so on.

```
CREATE INDEX id_key_val ON wp_postmeta (post_id,meta_key,meta_value(255));
```

You should be able to see the result when you view the structure of the postmeta table.

---

## Alternative index structure

Alternatively you can try the following query. Please be aware that this one does not only add an index but also *modifies the existing indexes* that may be required somewhere else.

```
ALTER TABLE wp_postmeta
DROP PRIMARY KEY,
DROP INDEX post_id,
ADD PRIMARY KEY(post_id, meta_key, meta_id),
ADD INDEX(meta_id);
```

---

## Running Maintenance

**Source:** [https://taxopress.com/docs/running-maintenance/](https://taxopress.com/docs/running-maintenance/)

While Tag Groups Pro tries to keep track of all changes to posts, tags, groups or taxonomies, it may occasionally happen that some changes happen unnoticed. Also, activating posts or taxonomies or manipulating with languages on multilingual sites can lead to inconsistencies.

In that case, you can run several maintenance scripts that execute the following tasks:

- Remove from post meta non-existing groups, non-existing terms, terms in wrong groups and groups without tags.
- Remove from term meta non-existing groups.
- Empty the transient cache and schedules the rebuilding of post counts.

You find the “Maintenance” button in the “Troubleshooting” section of the Settings, under the “First Aid” tab.

Similarly you can run the [Migration procedures](https://taxopress.com/docs/migrating-your-tags-and-posts/) that give posts and tags the full capacity to deal with groups, particularly filtering. Usually the migration happens automatically, but in some cases it can miss out on some posts.

**It is safe to press all buttons under “First Aid”.** Processing may take a few minutes and rendering the tag clouds may be slower than usual while the cache is being rebuilt.

---

## How to Improve the Speed of Tag Groups

**Source:** [https://taxopress.com/docs/improving-the-speed-of-tag-clouds/](https://taxopress.com/docs/improving-the-speed-of-tag-clouds/)

By default in WordPress, terms and posts are processed every time a page is loaded. Tag Groups Pro avoids this problem by using caching on various levels. That means that once it has finished processing, the result is stored for the next time so that it doesn’t need to do all the work again.

Some forms of caching are always active. In order to benefit from the maximum speed increase, please make sure that also object caching is enabled in the Tag Groups settings.

The speed improvement should be noticeable starting from the *second* time you load the page after saving the settings.

By default, we empty the cache automatically when you make changes that require to rebuild the cache. If you prefer to do it manually after a series of changes, go to the Tag Groups settings, Front End, Cache and deactivate “Automatically clear cache when needed”. Now you will see a message whenever it is recommended to clear the object cache.

---

## Migrating your Tags and Posts to Tag Groups

**Source:** [https://taxopress.com/docs/migrating-your-tags-and-posts/](https://taxopress.com/docs/migrating-your-tags-and-posts/)

The Tag Groups Pro plugin adds further information to tags and posts and tracks any changes to them, if necessary. When you activate the Tag Groups plugin, tags and posts are migrated automatically. Since no existing data was removed or changed, your posts and tags still work with other plugins and themes. Even after removing Tag Groups Pro everything will be functional, although without the additional features.

However, sometimes you may experience that filters on the front or back end don’t show all posts. You can normally fix it with the “Migrate” button in the Settings: Search in the “Troubleshooting” section under the “First Aid” tab.

Running [Maintenance](https://taxopress.com/docs/running-maintenance/) also solves common issues.

---

