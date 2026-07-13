# Creating Site Backups

*Category from The Events Calendar documentation*

---

## Creating Site Backups

**Source:** [https://docs.nexcess.com/software/the-events-calendar/creating-site-backups/](https://docs.nexcess.com/software/the-events-calendar/creating-site-backups/)

Before updating any plugin, theme, or WordPress itself on your site, it’s important to always make a site backup.

### Quick Content Backup

It only takes a few minutes to create a backup of your website’s content using native WordPress export functionality. From wp-admin, go to **Tools > Export**, then choose to export “All Content,” as shown in the following screenshot.

![WordPress native content export function](https://docs.nexcess.com/wp-content/uploads/2026/06/B.1_native_export.jpg)

Select *Download Export File.*  Save this XML file to your computer.  It is a backup of the site content.  If you ever need to restore any of your site’s content, you can simply import that XML file back into your website using the [free official WordPress Importer plugin](https://wordpress.org/plugins/wordpress-importer/).

### Full Site Backup (Recommended)

Using WordPress’ built-in export tool is a quick, efficient method for backing up your site content, but it doesn’t back up the rest of your site. A truly complete backup will save your content and all of your images, user info, plugins, themes, options configurations, and other site data that is just as important as the content itself.

There are several options to make a complete site backup:

#### Web Host

Many web hosts offer backup services—simply drop customer support a line and ask if they can do a full database dump for you. Many will happily follow through in no time.

#### WordPress Plugins and Services

There are many free and premium plugins you can use to get free backups for your site, and some even have paid services that will perform updates automatically in the background. Examples of the former can be found at [the WordPress.org plugins repository](https://wordpress.org/plugins/tags/backup/), while examples of the latter include [VaultPress](https://vaultpress.com/), [UpdraftPlus](http://updraftplus.com), [BackWPup](https://backwpup.com/), and many more.

#### Manual Database Export

If you’re comfortable taking the reins yourself, you can use the WordPress Codex’s excellent guide on [manually backing up your database](https://wordpress.org/support/article/backing-up-your-database/) to download your own copy of your site’s data and content.

---

