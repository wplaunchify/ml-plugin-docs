# Taxopress Capabilities

*Category from TaxoPress documentation*

---

## Who Can Create and Add Terms in TaxoPress?

**Source:** [https://taxopress.com/docs/add-terms-capabilities/](https://taxopress.com/docs/add-terms-capabilities/)

It is possible to control who can add terms to posts in TaxoPress. This plugin uses the same capabilities as the WordPress core. So if a user can add terms in WordPress, they can add terms in TaxoPress.

By default, anyone who can edit posts can also do this:

- Add Categories to a post, but not create new Categories.
- Add Tags to a post and create new Tags.

You can use a plugin such as [PublishPress Capabilities](https://wordpress.org/plugins/capability-manager-enhanced/) to control these settings in more detail. Go to “Capabilities” then “Capabilities” in the admin menu. Click the “Taxonomies” tab.

On the this screen you will see the “Manage” column. This will allow users access to main screen for each taxonomy. So if you check the box for “Categories”, users in this role will have the ability to edit, add, delete, and manage all your Categories.

capabilities terms

It is possible to get more detailed control over who can edit your taxonomies. In the sidebar, look for the “Detailed Taxonomy Capabilities” area. Check the boxes for your taxonomies and in the main area you will now see “Edit”, “Assign” and “Delete” boxes.

unique capabilities

One change you can make here is to prevent a user from assigning any terms to your posts. In the screenshot, you are blocking users in the Author role from managing, editing, assigning or deleting terms.

remove term access

If you make the changes shown in the screenshot above, users in that role will have no access to the normal Tags and Categories metaboxes. In the screenshot below, you can see that those boxes are missing.

missing terms boxes

These changes will apply to TaxoPress also. If the TaxoPress metabox is available to users in this role, they will see this message on the “Create Terms” tab: “You do not have the required capabilities to manage any of this post attached taxonomies”

no capabilities permissions

---

## Capabilities / Permissions in TaxoPress

**Source:** [https://taxopress.com/docs/permissions-taxopress/](https://taxopress.com/docs/permissions-taxopress/)

## Capabilities for the TaxoPress Metabox

If you want to control who has access to the TaxoPress metabox underneath each post, you can do with the manage_categories capability. We recommend using the [PublishPress Capabilities](https://wordpress.org/plugins/capability-manager-enhanced/) plugin to assign this permissions.

- Go to the “Capabilities” screen.
- Choose the user role you want to edit in the top-left corner.
- In the “Taxomomies” area, you can see the “manage_categories” option.

---

## Capabilities for the TaxoPress Admin Area

There are two permissions that can give users access to the TaxoPress admin area:

- ```
simple_tags
```

: this will give access to the “Settings” screen.
- ```
admin_simple_tags
```

: this will give access to the screens such as “Taxonomies”, “Related Posts”, “Mass Edit Terms”, “Manage Terms”, and more.

You can use these to customize user access to the TaxoPress plugin screens with the PublishPress Capabilities plugin.

- Go to the “Capabilities” screen.
- Choose the user role you want to edit in the top-left corner.
- In the “TaxoPress” area, you can see the two TaxoPress permissions:

If you give both these permissions to a user in [the Subscriber role](https://publishpress.com/knowledge-base/subscriber/), this next screenshot shows what they will see after logging in.

These permissions are automatically added to your site by the 
```
/inc/class.admin.php
```

 file. These permissions are automatically removed when you uninstall the plugin. This is done by the 
```
uninstall.php
```

 file.

---

