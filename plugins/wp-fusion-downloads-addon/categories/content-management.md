# Content Management

*Category from WP Fusion - Downloads Addon documentation*

---

## JetEngine

**Source:** [https://wpfusion.com/documentation/content-management/jetengine/](https://wpfusion.com/documentation/content-management/jetengine/)

### Overview

WP Fusion’s integration with [JetEngine](https://crocoblock.com/plugins/jetengine/) brings the power of your [CRM or email marketing system](https://wpfusion.com/documentation/faq/crm-compatibility-table/) to your content management strategy in WordPress.

WP Fusion’s JetEngine integration works in two ways:

### Post type access rules

In addition to [protecting individual posts and pages](https://wpfusion.com/documentation/getting-started/access-control/) on your site using tags in your CRM, WP Fusion includes a JetEngine integration module to protect entire post types created via JetEngine.

![screenshot of a wordpress jetengine integration settings page. it shows options to restrict access to post types based on user tags. post type is member articles with a required tag active member and redirect action log in.](https://wpfusion.com/wp-content/uploads/2025/03/jetengine-post-types-1024x400.jpg)

First, [create your custom post types with JetEngine](https://crocoblock.com/knowledge-base/jetengine/how-to-create-a-custom-post-type-based-on-jetengine-plugin/).

Then navigate to JetEngine » WP Fusion in the WordPress admin. For each post type you can select one or more CRM tags (or lists) that are required to view posts of that post type.

If the user is not logged in, or does not have one of the specified tags, they will be redirected to the page of your choosing.

### Listing Grid query filters

The JetEngine [Listing Grid](https://crocoblock.com/knowledge-base/features/listing-grid-widget-overview/) is a powerful Elementor widget that lets you list content on your site using complex queries involving post types, taxonomy terms, and custom field values.

WP Fusion extends this functionality by personalizing listing grid items based on [access rules](https://wpfusion.com/documentation/getting-started/access-control/) configured on each post, and the current user’s tags in your CRM.

![screenshot of a dashboard showing the wp fusion plugin interface. on the left, options for setting custom query parameters with posts query and filter queries. on the right, a small structure section labeled listing grid.](https://wpfusion.com/wp-content/uploads/2025/03/jetengine-filter-queries-1024x663.jpg)

To enable this feature, click the toggle for *Filter Queries* under the Posts Query tab when editing the Listing Grid element.

Any content that the user does not have access to will automatically be hidden from the listing grid. This can be used to create personalized listings for each member on your site— for example courses, training resources, or videos.

For more information on Filter Queries, [see the documentation](https://wpfusion.com/documentation/getting-started/access-control/#filter-queries).

---

## Download Manager

**Source:** [https://wpfusion.com/documentation/content-management/download-manager/](https://wpfusion.com/documentation/content-management/download-manager/)

### Overview

WP Fusion integrates with [Download Manager](https://wordpress.org/plugins/download-manager/) to allow you to protect downloadable files using tags or lists in [your connected CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

### Download setup

When editing any Download in the admin, you’ll see the WP Fusion [access control meta box](https://wpfusion.com/documentation/getting-started/access-control/) in the sidebar.

![](https://wpfusion.com/wp-content/uploads/2023/05/download-manager-settings-1024x407.jpg)

By checking **Users must be logged in to download this file**, you can select tags in your CRM that are required to download the file.

If the user is not logged in or does not have the correct tags, they will be redirected to the page you select in the **Redirect if access is denied** dropdown.

If you do not select a redirect, they will be shown [the default restricted content message](https://wpfusion.com/documentation/getting-started/access-control/#restricted-content-message).

---

## WP All Import

**Source:** [https://wpfusion.com/documentation/content-management/wp-all-import/](https://wpfusion.com/documentation/content-management/wp-all-import/)

### Overview

WP Fusion integrates with [WP All Import](https://wordpress.org/plugins/wp-all-import/) and the [Users Addon](https://www.wpallimport.com/import-wordpress-users/) to automatically sync the generated passwords for imported users with your CRM.

### Setup

Before starting your import, head to Settings » WP Fusion » Contact Fields and enable the 
```
user_pass
```

 field for sync by selecting a custom field in your CRM.

Next, head to All Import » New Import in the WordPress admin, and configure your import.

Once your import starts, WP Fusion will begin syncing the imported users to your CRM, along with the password that was generated by WP All Import.

---

## Meta Box

**Source:** [https://wpfusion.com/documentation/content-management/meta-box/](https://wpfusion.com/documentation/content-management/meta-box/)

### Overview

WP Fusion can detect user fields created with [Meta Box](https://metabox.io/) and the [MB User Meta extension](https://metabox.io/plugins/mb-user-meta/), and sync field data to your CRM of choice when a user profile is updated.

The sync of data is bi-directional, so WP Fusion can also load data from your CRM into fields created with Meta Box.

### Setup

Head to Settings » WP Fusion » Contact Fields, and scroll down to the **Meta Box** header:

![](https://wpfusion.com/wp-content/uploads/2022/03/meta-box-fields-1024x308.jpg)

For each user field, you’ll see the field name and field key in your database. In the right column you can select a corresponding field in your CRM from the dropdown.

When the user’s profile is updated, WP Fusion will sync the field value from WordPress to the selected custom field in your CRM.

For more information on syncing contact fields, [see this page](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).

---

## If Menu

**Source:** [https://wpfusion.com/documentation/content-management/if-menu/](https://wpfusion.com/documentation/content-management/if-menu/)

### Overview

WP Fusion integrates with [If Menu](https://wordpress.org/plugins/if-menu/) to allow you to use tags or lists from [your connected CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) as conditions for menu item visibility.

![If Menu WP Fusion settings](https://wpfusion.com/wp-content/uploads/2021/12/if-menu-1024x666.jpg)

When editing any menu item with If Menu, you can select from three WP Fusion conditions:

- **Required Tags (any):**The menu item only be shown if the user is logged in and has at least one of the specified tags
- **Required Tags (all):**The menu item will only be shown if the user is logged in and has *all* of the specified tags
- **Required Tags (not):**The menu item will be shown if the user is logged in and has *none* of the specified tags, or if the user is not logged in.

**Note:** Due to a bug in If Menu, you must first select *Enable Visibility Rules* and save the menu before the WP Fusion tags select box will appear.

---

## Download Monitor

**Source:** [https://wpfusion.com/documentation/content-management/download-monitor/](https://wpfusion.com/documentation/content-management/download-monitor/)

### Overview

WP Fusion integrates with [Download Monitor](https://wordpress.org/plugins/download-monitor/) to allow you to protect downloadable files using tags in [your connected CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

### Download setup

When editing any Download in the admin, you’ll see the WP Fusion [access control meta box](https://wpfusion.com/documentation/getting-started/access-control/) in the sidebar.

![](https://wpfusion.com/wp-content/uploads/2021/09/download-monitor-1024x509.jpg)

By checking **Users must be logged in to download this file**, you can select tags in your CRM that are required to download the file.

If the user is not logged in or does not have the correct tags, they will be redirected to the page you select in the **Redirect if access is denied** dropdown.

If you do not select a redirect, they will be shown [the default restricted content message](https://wpfusion.com/documentation/getting-started/access-control/#restricted-content-message).

### Listing member downloads

Download Monitor includes a 
```
{downloads}
```

 shortcode which [lets you display an HTML list of downloads](https://www.download-monitor.com/kb/shortcode-downloads/).

WP Fusion has the ability to personalize the list of downloads based on the current user’s tags in your CRM.

To enable this, head to Settings » WP Fusion » Integrations » Download Monitor and check the box for **Filter Members Only**.

![](https://wpfusion.com/wp-content/uploads/2021/09/download-monitor-general-1024x442.jpg)

Then, when using the shortcode, like

```
{downloads category="Category" members_only}
```

Any downloads that the user can’t access (based on their tags in your CRM and the settings configured on each download) will be hidden.

This can be used to create personalized lists of downloads unique to each user.

---

## If-So

**Source:** [https://wpfusion.com/documentation/content-management/if-so/](https://wpfusion.com/documentation/content-management/if-so/)

### Overview

WP Fusion integrates with [If-So Dynamic Content](https://wordpress.org/plugins/if-so/) to allow you to use tags or lists from [your connected CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) as conditions in triggers and blocks.

### Triggers

When editing any If-So condition, select **CRM Tags (any)** from the *Select A Condition* dropdown.

![](https://wpfusion.com/wp-content/uploads/2021/08/if-so-1024x693.jpg)

You can then select one or more CRM tags in the Select Tag(s) box, and add your content.

The content will then only be displayed to users who are logged in and have at least one of the specified tags.

### Blocks

When editing any block in the block editor, select *User has tag* as a condition from the If-So conditions panel, and select a tag.

![](https://wpfusion.com/wp-content/uploads/2021/08/if-so-gutenberg-1024x496.jpg)

The block will only be shown if the user is logged in and has the specified tag.

---

## Toolset Types

**Source:** [https://wpfusion.com/documentation/content-management/toolset-types/](https://wpfusion.com/documentation/content-management/toolset-types/)

### Overview

WP Fusion includes an integration with [Toolset Types](https://toolset.com/) to allow controlling access to custom post types based on a user’s tags in your CRM.

### Setup

When editing any custom post type with Toolset Types, a WP Fusion meta box will appear in the sidebar.

![](https://wpfusion.com/wp-content/uploads/2020/09/toolset-types-1024x660.jpg)

Any access rules specified here will take priority over individual posts of this type.

For an overview of the options available in the meta box, [see here](https://wpfusion.com/documentation/getting-started/access-control/#meta-box).

---

## FacetWP

**Source:** [https://wpfusion.com/documentation/content-management/facetwp/](https://wpfusion.com/documentation/content-management/facetwp/)

### Overview

WP Fusion integrates with [FacetWP](https://facetwp.com/) to allow you to filter the results returned in templates using WP Fusion’s access rules. This lets you create personalized FacetWP results templates based on a user’s CRM tags.

![](https://wpfusion.com/wp-content/uploads/2019/12/facetwp-1024x357.jpg)

To enable, head to the FacetWP settings and click on the WP Fusion tab, then switch on the toggle for **Exclude restricted items.**

---

## Advanced Custom Fields

**Source:** [https://wpfusion.com/documentation/content-management/advanced-custom-fields/](https://wpfusion.com/documentation/content-management/advanced-custom-fields/)

### Overview

WP Fusion can detect user fields created with [Advanced Custom Fields Pro](https://www.advancedcustomfields.com/pro/) and sync field data to your CRM of choice when a user profile is updated.

The sync of data is bi-directional, so WP Fusion can also load data from your CRM into fields created with Advanced Custom Fields.

### Setup in Advanced Custom Fields

To create user fields in Advanced Custom Fields, navigate to Custom Fields » Field Groups » Add New. Add your fields, and make sure that the location rules are set to display the fields on **User Form.**

![](https://wpfusion.com/wp-content/uploads/2016/01/acf-1-1024x333.jpg)Your ACF custom fields must be set to display on the User Form to be synced with WP Fusion.
After saving your field group, you should now see your fields when editing any WordPress user in the admin.

![](https://wpfusion.com/wp-content/uploads/2016/01/acf-2-1024x384.jpg)

### Setup in WP Fusion

Head to Settings » WP Fusion » Contact Fields, and scroll down to the **Advanced Custom Fields** header:

![](https://wpfusion.com/wp-content/uploads/2016/01/acf-3-1024x349.jpg)

For each ACF user field, you’ll see the field name and field key in your database. In the right column you can select a corresponding field in your CRM from the dropdown.

When the user’s profile is updated, WP Fusion will sync the field value from WordPress to the selected custom field in your CRM.

For more information on syncing contact fields, [see this page](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).

### Field types

Generally, the field value synced to your CRM is the value you see when editing the field in the admin. There are a few exceptions to this:

- **Dates:** Date fields will always use the “Return Value” format configured on the ACF field.
- **Images:**Image fields will always sync the “Return Value” configured on the field. For best compatibility it’s recommended to use **Image URL**.
- **Relationships:**ACF normally stores relationship fields as an array of post IDs. WP Fusion will automatically run a 
```
get_the_title()
```

 on each ID so that an array of post titles is synced to the CRM.
- **Users:**If you’re using a User field with the *Multiple* option enabled, and the field type is set to *Relationship* in the Contact Fields settings, WP Fusion will convert each of the user IDs to the users’ full names for sync.

#### Repeaters and Flexible Content

None of the CRMs WP Fusion integrate with have a true “repeater”-type field that can be synced directly from ACF. However WP Fusion is still capable of syncing repeater data (or flexible content data) to your CRM in a limited fashion.

For example, here we have a repeater, called 
```
repeater
```

, with a single subfield for 
```
color_option
```

:

![](https://wpfusion.com/wp-content/uploads/2016/01/acf-repeater-setup-1024x615.jpg)

Each subfield in a repeater will show up as a single field for sync in the WP Fusion settings.

The meta key is the repeater name, plus the subfield name. In this case, 
```
repeater_color_option
```

.

The field format will be set to 
```
multiselect
```

 by default.

![](https://wpfusion.com/wp-content/uploads/2016/01/acf-repeaters-in-settings-1024x235.jpg)

Then we can add some colors to the repeater on the admin user profile:

![](https://wpfusion.com/wp-content/uploads/2016/01/acf-repeater-fields-on-user-1024x350.jpg)

When the profile is saved, all of the repeater “rows” for the 
```
color_option
```

 field are combined into a multiselect format and synced as 
```
repeater_color_option
```

.

In [the logs](https://wpfusion.com/documentation/getting-started/activity-logs/) this looks like:

![](https://wpfusion.com/wp-content/uploads/2016/01/acf-repeater-synced-in-logs-1024x400.jpg)

And in the CRM (in this case ActiveCampaign), the multi-checkbox field is updated so that those four colors are selected.

Using this, you can create one custom multi-select (or checkboxes / picklist) field in your CRM for each sub-field in your ACF repeater, and the custom field will be updated with the combined values of the repeater sub-fields when the user’s profile is updated.

### Fontend forms

WP Fusion can also sync ACF user profile updates from forms on the frontend of your site. WP Fusion includes compatibility for the [Advanced Forms Pro](https://hookturn.io/downloads/advanced-forms-pro/) and [ACF Frontend](https://wordpress.org/plugins/acf-frontend-form-element/) plugins.

---

