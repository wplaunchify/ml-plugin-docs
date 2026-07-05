# Settings

*Category from TaxoPress documentation*

---

## Control Who Can Edit the Tag Groups

**Source:** [https://taxopress.com/docs/how-can-i-use-permissions-to-restrict-editing-of-tag-groups/](https://taxopress.com/docs/how-can-i-use-permissions-to-restrict-editing-of-tag-groups/)

It is possible to control who can edit groups in the Tag Groups plugin. You find the relevant settings in the “Back End” section under the “Permissions” tab. This menu appears only in the Pro version of Tag Groups.

### Who should be allowed to edit tag groups?

This option lets you hide the page where you can create, rename, delete and sort tag groups for certain user roles. The administrator always has access. The minimum user role to access this page can be administrator, editor or author.

### Who should be allowed to change the groups on the tags page?

Here you can set the minimum role of users who can assign tags to groups or change the groups of tags. It is effective only on the tag page (where you create and edit tags).

This option is usually only relevant to restrict the permissions of the user role “editor”.((By default authors cannot edit tags. For some custom taxonomies, however, it might be different.)) It complements the following one.

### Who should be allowed to override restrictions to add new tags and change tags in the meta box?

This option makes only sense if you use the settings in the Meta Box tab to restrict the creation of tags or shifting tags to another group. Here you can set a user role that is able to override this restriction. Available is administrator, editor or author.

This permission applies only to the meta box. Editors will still see the tags page and can change the groups there, unless you use the option mentioned above.

### What happens if users try to do something that is not allowed for their role?

- If a user tries to add a new tag in the Meta Box, it will be refused with a message.
- If a user tries to move a tag in the Meta Box to a different group, it will be refused with a message.
- If a user adds a new tag in the default tag input box or through Quick Edit on the post listing, the tag will be added but remains unassigned to any group. A user who has the required permissions will then be able to assign it to a group.
- If users are not allowed to edit tag groups, they won’t even see the corresponding page and any attempt would be refused.
- If users are not allowed to edit the groups of tags, they won’t even see the corresponding menus and any attempt would be refused.

---

## Back End Settings in Tag Groups

**Source:** [https://taxopress.com/docs/back-end/](https://taxopress.com/docs/back-end/)

This guide explained how to use the settings in the “Back End” area of the Tag Groups plugin.

---

## Filters

Two filters are available for the back end:

- A post filter can filter the list of posts by the tag groups that their tags belong to.
- A tag filter can filter tags by tag groups.

The post filter is not available for categories.

In rare cases the filters conflict with filters of other plugins. In that case you can disable them here.

---

## Gutenberg

This menu appears only if the Gutenberg editor is enabled.

At this place you can disable Gutenberg block previews.

---

## Multilingual

This menu appears only if the WPML plugin is enabled. Some options may also work with the Polylang plugin.

Here you can decide if you want to sync all groups of a tag across its translations when you save this tag. In most cases all language variations will use the same groups but you also may want to assign them independently.

---

## Tag Meta Box

This menu appears only in the Pro version of Tag Groups. Here you can choose for which of your active Taxonomies the Tag Meta Box will appear. The Tag Meta Box works only for one taxonomy per post type and only for non-hierarchical taxonomies, such as Tags (post_tag) or Product Tags (product_tag).

You also have four options regarding the way how tags can be entered:

- You can automatically open all groups that contain tags of the post that you start editing.
- You can hide the default tag box so that you will work only with tags that are assigned to groups.
- You can restrict the tags entered in the Tag Meta Box to existing tags. That option might be useful if you want to set up a pool of allowed tags and your post authors should not be able to add new tags.
- You can prevent tags from being moved to a new group. Otherwise authors would be able to enter a tag that already exists in another group, that way moving it to a new group.

Optionally select the groups that should be available and remove the menu. That makes it possible to present your authors only a certain selection of groups.

**Note 1:**Since tags are separated in the input field by comma (“,”) or semicolon (“;”), **tag names cannot contain these characters** in order to work with the Tag Meta Box.

**Note 2:**The Tag Meta Box works only correctly if tag names are **unique**. It is not sufficient if tags with identical names are differentiated by their “slugs” (piece of the link).

---

## Permissions

This menu appears only in the Pro version of Tag Groups. On the Permissions screen, you can determine who is allowed to edit tag groups. That way you can prevent that authors make changes to the groups, while they are still allowed to use them.

Here you can also allow exceptions to the rule that prevents the creation of new tags, or moving tags to another group in the Tag Meta Box.

[Read more about the available permissions and their effects](https://taxopress.com/docs/how-can-i-use-permissions-to-restrict-editing-of-tag-groups/).

---

## Default Groups

This menu appears only in the Pro version of Tag Groups. By default, all new tags are unassigned. In the Default Groups settings, however, you can define groups that will be automatically assigned to all new tags that were created without assigning any groups. On the post edit screen you enter them in the default tag field or in the “not assigned” tag field.

Default groups will also be effective for users who actually don’t have the permission to assign tags to groups.

Naturally, when you now want to create a tag that is *not* assigned to any group, you need to go one more step and remove the groups manually.

Default groups cannot be applied retroactively. For that purpose you can use bulk assignment of groups on the Tags page.

---

## Troubleshooting

**Source:** [https://taxopress.com/docs/troubleshooting/](https://taxopress.com/docs/troubleshooting/)

## FAQ and Common Issues

In this section you find answers and solutions to common issues.

## Documentation

Here you find links to the most relevant topics of the the online documentation for fast access.

## First Aid

Some issues can be solved with these helpers. It is safe to use them on your live site, but some of them may cause it to slow down for a minute.

- **Migrate:** The plugin automatically migrates posts and tags to the latest format (which supports multiple tags per groups) and tries to keep track of changes. There may, however, be cases where other components made unnoticed changes. In that case you need to migrate your posts and tags manually.
You might also need to manually migrate them after you enabled a taxonomy that already contained untracked posts and tags.
- **Maintenance:** This function searches the meta data of posts and tags for inconsistencies and any changes that went unnoticed.
- **Rebuild Post Counts:** If the post counts of tags are incorrect, you can fix it here.
- **Reset Tag Filter:** If you don’t see your tags on the tags page in the backend, the reason can be that the tag filter is active but an error caused by another plugin prevents the filter menu from showing. Here you can reset this filter.
- **Purge Cache:** The cache speeds up various processes by saving their results for reuse. The plugin takes care to purge it when it makes sense, or you see a message that recommends you to do it manually. Purging the cache clears not only the object cache (which holds the tag clouds if it is enabled) but also automatic caches on several intermediate levels.
After purging the cache, the data needs to be regenerated. That mostly happens when you first time request the data (or tag cloud) again, but in some cases automatic regeneration in the background is scheduled a few seconds after purging.

On larger websites you will need a longer PHP execution time limit. Usually all functions are finished within seconds.

The same buttons reside also at other locations of the settings for convenient access.

## System Information

This information can help us understand the causes of possible issues.

If you are having trouble with the Tag Group administration page (groups are not loading) then check the **Ajax Test** on this page.

The Cache Benchmark can help you decide which type of cache is the fastest.

---

## The Home Screen in Tag Groups

**Source:** [https://taxopress.com/docs/home/](https://taxopress.com/docs/home/)

The Home screen of the Tag Groups plugin shows you an overview of all enabled taxonomies. You can unfold each of them to see an overview of the groups and the number of tags for each of them.

Behind each taxonomy you also find a link to the corresponding page where you can create and edit tag groups.

---

## Tools

**Source:** [https://taxopress.com/docs/tools/](https://taxopress.com/docs/tools/)

## Export/Import

If you want to move the settings to another website or just back them up separately, you can use this tool. All information is part of the standard WordPress database and can be backed up also with the usual backup plugins.

The export will result in two files: the settings, including the tag groups, and the tags. You will need to download these files by right-clicking (or ctrl-clicking) on the links that appear after the export is completed.

If you want to import both to another website, we recommend to start with the settings.

Please note that this export doesn’t replace a proper, regular backup of your database.

## Reset

On this screen you have the possibility to remove your tag groups and reset all tag assignments.

### Delete Settings and Groups

This option determines whether the plugin will clean up all settings, groups and options when you remove it (that is delete, not just deactivate). It is recommended to keep it unchecked, unless you plan to wipe these items.

## Maintenance

This tool checks for inconsistencies and outdated or invalid meta data. Running the maintenance can solve issues that you encounter during filtering by tag groups.

---

## Front End Settings

**Source:** [https://taxopress.com/docs/front-end/](https://taxopress.com/docs/front-end/)

This guide explains the settings in the “Front End” area of the Tag Groups Pro plugin. You can see the “Front End” tabs in this screenshot below.

---

## Shortcodes

At this place you find a list of shortcodes that display tag clouds, menus or information about tag groups.

### Enable shortcode in sidebar widgets

Depending on your theme and other plugins, shortcodes may already work in text widgets. If they still display on the front end in square brackets, you can enable them here for widgets.

### Always load shortcode scripts

If you uncheck this option, then all scripts that are required for the particular feature will only be loaded if a block or shortcode can be found in the post or page content. This can help reduce the loading time of your pages where you don’t use shortcodes.

Since we cannot parse widgets and other places in your theme, you need to check this option if you use shortcodes in widgets (or shortcodes that were hard-coded into your theme).

---

## Themes and Appearance

Here you can choose between three standard themes or set your own theme. This theme will be applied only to the tabs of the Tabbed Tag Cloud and the header elements of the Accordion Tag Cloud (i.e. the labels and the frames).

### Further Options

Most of the options can also be set via shortcode parameters or in Gutenberg blocks. “Allow HTML in tag description” may be interesting if you use formatted tag descriptions, which is rarely the case.

---

## Tag Colors

Starting from version 1.29.0, you find here a tool to design your tags. It creats the CSS that you can use in your theme or the WordPress Customizer (menu Appearance -> Customize). Just follow the steps on the screen from top to bottom.

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg==)

---

## Post Template

The Toggle Post Filter and the Dynamic Post Filter are mainly configured through shortcode parameters or Gutenberg block options. Since entering the template for post output makes this a bit troublesome, you have the option to compose and test it on this page.

In order to apply later on a page what you saved here in the settings, you need to keep the “template” parameter in the shortcode or Gutenberg block empty.

Please note that the preview is only approximate, as it is not aware of the frontend styling.

---

## Cache

Caching helps your server speed up the generation of tag clouds and other front-end objects by saving the finished output and reusing it for some time, instead of recalculating everything again. In the settings you can turn it off or choose the location where the output will be saved (database or file system).

The options are:

- off: Tag clouds will be recreated every time the page is generated. If you use a third-party plugin for caching pages, the page won’t be generated but used from that plugin’s cache. This option is useful while you develop your site and don’t have visitors.
- database: The objects will be saved in the WordPress database. This method is usually very fast but on some systems you may need to avoid the additional burden on your database server. In that case it is recommended to use the WordPress object cache (see below) with an additional 3rd party component, such as [Redis](https://redis.io/).
- other: The default WordPress object cache will be used. This kind of cache is not persistent, unless you install a third-party plugin for object caching. Read more about it [here](https://codex.wordpress.org/Class_Reference/WP_Object_Cache#Persistent_Caching).

If you are unsure what to use, is recommended to try “off” while fine-tuning your website and then switch to “database”.

You can compare on the page Troubleshooting -> System Information -> Benchmarks the speed of the various cache options. The speed test will also reveal if a (session-persistent) WP object cache is working.

### Automatically clear cache when needed. Show a notification if turned off.

Normally you want to keep this option on. Only on busy websites where you often modify posts you may switch to manual purging.

---

## Post Tags

Once your posts use tags that are organized in groups, you may want to display them together with these groups under your posts. While displaying tags in posts and pages requires the modification of theme templates, the Tag Groups Pro plugin can insert the post tags at the bottom of the post content.

Post tags and their groups appear under the post in default styling, together with content added by other plugins, such as sharing buttons and related posts.

In the settings you can specify:

- A title. The default is “Tags”. It is possible to leave it empty.
- The groups that should be included under posts.
- The page types where you want the tags to appear, if your theme allows.((Please also note that some – like feeds – might not render the table properly.))
- A number for the “priority” that determines the position among other blocks of content that is inserted by plugins. The lower the number, the higher the position. If another plugin already uses the smallest priority 1 then it might be impossible to place the tags above it.
- Try to remove the default (ungrouped) tags. Depending on your theme, there might still remain a title or empty box.
- Show also parent groups if you use them.

The appearance of the title and table can be adjusted with CSS (for advanced users). Developers can also use the filter “tag_groups_post_terms” to modify the HTML output before rendering.

---

## WooCommerce

If you have WooCommerce installed and activated, you find a new tab “WooCommerce” with the following options:

- One lets you add tag groups and their tags to the attributes section (“Additional Information”) of the product. Of course, we display only groups and tags that you use with that particular product.
- The second one removes the “Tags: …” part from the single product view so that the tags don’t appear twice. Your product categories will still be in place, but tags are used only as additional attribute values.
- Lastly, you can set a separator that appears between the tags and attribute values.

---

---

## Taxonomies and the Tag Groups Plugin

**Source:** [https://taxopress.com/docs/taxonomies/](https://taxopress.com/docs/taxonomies/)

Taxonomies are *types* of tags. By default, WordPress post uses **post_tag** (these are the standard tags) and **category** but other plugins can add their own taxonomies.

Before working with the Tag Groups plugin, decide which taxonomies you want to use. Activated taxonomies will have a “Tag Groups” submenu under the menu where you find their posts.

The list shows also taxonomies that are not visible. Activate only those where you need the group functionality.

- The Tag Groups plugin works best with post tags and other flat custom tags.
- It is not recommended to activate more than one taxonomy per post type.
- Some features won’t work with hierarchical taxonomies, such as categories.

---

