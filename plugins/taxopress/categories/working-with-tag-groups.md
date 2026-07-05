# Working With Tag Groups

*Category from TaxoPress documentation*

---

## Organizing Groups with a Parent Level

**Source:** [https://taxopress.com/docs/organizing-groups-with-a-parent-level/](https://taxopress.com/docs/organizing-groups-with-a-parent-level/)

In Tag Groups Pro is it possible to create a parent level for your tag groups.

Having a two–level hierarchy can make it easier to select a cluster of child groups by referring to their parent. It also helps your authors understand which groups belong together.

**Parent groups** can only hold (default) tag groups, but no tags. That means that we can have only a maximum of two group levels – parent groups and their child groups – and then the tags inside the child groups.

```
parent group: cars
  group: color
    tags: red, blue, green, ...
  group: configuration
    tags: air con, 4x4, autopilot, ...
parent group: bicycles
  group: color
    tags: red, blue, green ...
  group: manufacturer
    tags: company A, company B, ...
```

Parent groups don’t appear in frontend post filters (Toggle Post Filter, Dynamic Post Filter) and they have no effect on their logic operations.

---

## Tag Group Administration

On the Tag Group Administration screen you find a text field where you can add a parent group by entering the name.

Just like default groups, you change the order of parent groups by drag and drop or by clicking on the up or down arrow at the end of the row. All default groups that are below a parent group are its children. You can also edit the name or delete a parent group.

It is also possible to use tag groups without a parent level.

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg==)

Note: If you are using parent groups, all groups can have duplicate names. It is still recommended to avoid duplicates, however, because at some places you might confuse groups with identical names.

### Tag and Post Filters

Once you’ve created parent groups, you will find them in the drop-down menus above the lists of tags and posts. If you select a parent group, all of its children will automatically be included in the filtering criteria.

Note: Styling of parent groups in menus depends on browser capabilities.

### Tag Clouds and Lists

Parent groups are not visible on your public web site, but they make your work easier on the back end. You can, for example, include or exclude all children by referring to their parent group. If you use shortcodes, you simply insert the parent group’s ID, exactly how you would use the list of group IDs.

### Post Tags (under Posts)

In the Tag Group settings, under *Front End > Post Tags*, you find an option that lets you show also parent groups in the tags below the post content. Parent groups, default groups and tags are displayed in a table. The precise appearance depends on how your theme displays tables.

### Tag Meta Box (on the Post Edit Screen)

Also the Tag Meta Box on the post edit screen shows your groups sorted under parent groups. This upper level acts only as a visual guidance that helps you organize your groups but it doesn’t change the way how we handle tags.

---

## Filter Tag Groups on the Tags Screen

**Source:** [https://taxopress.com/docs/tag-filter/](https://taxopress.com/docs/tag-filter/)

On the “Tags” screen inside WordPress, you can filter the list of tags by a group to show only tags that belong to that group. Simply select the group under “Filter off” and click “Apply”.

---

## Bulk Actions for Groups on the Tags Screen

**Source:** [https://taxopress.com/docs/bulk-actions/](https://taxopress.com/docs/bulk-actions/)

The Bulk Edit tool from Tag Groups lets you assign multiple tags to one group, or unassign them all at once. This can be done via the “Tags” screen.

Follow these step to quickly assign multiple tags to a group:

1. Go to the “Tags” screen.
2. Select multiple tags using the checkboxes in the left column,
3. Choose a group in the second drop-down menu. You can see this menu is expanded in the screenshot below.
4. Click “Apply”.

---

## Using the Tag Groups Metabox on the Post Edit Screen

**Source:** [https://taxopress.com/docs/using-the-meta-box-on-the-post-edit-screen/](https://taxopress.com/docs/using-the-meta-box-on-the-post-edit-screen/)

This is a feature of Tag Groups Pro.

The default WordPress “Tags” box does not use tag groups. Therefore, the Tag Groups plugin offers a “Tag Meta Box” that helps you edit post tags separated by groups. The default box is disabled when using our plugin.

---

## Introducing the Tag Groups Metabox

This screenshot below shows the metabox provided by the Tag Groups plugin:

On the right of the tag group name you find two buttons: The left one adds all tags of this group, the right one closes this group in the editor.

Depending on the settings, you may also **add new tags** or add a tag that is currently in another group, in order to **move it to this group**. Added and moved tags will be marked green and yellow. If the settings allow you to move tags, you can also move them by drag and drop.

Tags appear in their respective groups, as set on the tags page. If a tag is assigned to more than one group, then all of these groups are available in the meta box, but you can choose to use this tag only with one of these groups in this post. For example, the tag “Leonardo da Vinci” may be assigned to the groups “painters” and “scientists” on the tags page. In a post about his paintings, however, you may want to use it only in the group “painters.”

Nothing is final until you save that post. Until then, no new tags will be created, no tags moved to other groups and no post tags changed.

Only when you save the post, it will receive the new tags and keep the old tags that it had before and that were hidden in groups that you kept close.

Please note that other plugins and themes don’t use tag groups. For them, all tags form just one unsorted group. If you want to display them in groups to your visitors, you need to use the **Gutenberg blocks** or **shortcodes** of this plugin or **modify your theme**. You can also [display post tags under the posts](https://taxopress.com/docs/post-tags/) sorted by groups.

---

## Additional notes and restrictions

**Note 1:**Since tags are separated in the input field by comma (“,”), **tag names cannot contain this character** in order to work with the meta box.

**Note 2:**The meta box works only correctly if tag names are **unique**. It is not sufficient if tags with identical names are differentiated by their “slugs” (piece of the link). Please note that WordPress considers also two tags that differ only by capitalization as duplicates and refuses to accept more than one of each variation.

**Note 3:**If you display both the default tag box and the Tag Meta Box, you should avoid any contradictory or double actions, like adding the same tag to both boxes or renaming a tag in one box and removing the same tag in the second tag box. It is strongly recommended to use only one of the two tag boxes.

**Note 4:**If you add a tag to a post while the **Tag metabox is turned off in the settings**, or if you add it with Quick Edit in the list of posts, then this tag will be added for **all of the groups** that the tag is assigned to. That means that without the Tag Meta Box you won’t be able to fine-tune the groups of a tag for a particular post. If you apply all tags to posts with the same groups that they have on the tags page, then it is perfectly fine to disable the Tag Meta Box.

---

## Creating and Editing Groups

**Source:** [https://taxopress.com/docs/creating-and-editing-groups/](https://taxopress.com/docs/creating-and-editing-groups/)

The Tag Groups plugin allows you to create groups to organize the terms on your site. This guide will help you get started with the groups feature.

The first step in using the Tag Groups plugin is to choose the taxonomies in the “Tag Groups” settings. Once this is done, you can start creating tag groups.

You find the “Tag Groups” submenu next to your chosen taxonomy. For example, if you’re using the plugin with the “Tags” taxonomy, you’ll find the “Tag Groups” submenu next to the “Tags” menu:

This next screenshot shows the main admin screen for Tag Groups. Here you can add new groups, and modify existing groups.

Here are some actions you can take on this screen:

- Create a new group below a row by clicking on the plus icon.
- Click on the trash icon to delete a group.
- Click on an arrow to move a group up or down. The order is relevant for displaying groups in tag clouds.
- Drag and drop a group to a new position.
- Click into a name to edit it.
- Click on the number of tags to go to the list of tags, filtered by the selected group.
- Click on the paper sheets icon to go to the list of posts, filtered by the selected group.

---

