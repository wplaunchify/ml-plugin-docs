# How To Give Access To Menu

*Category from AME Toolbar Editor documentation*

---

## How to Allow Access to an Admin Menu

**Source:** [https://adminmenueditor.com/documentation/how-to-give-access-to-menu/](https://adminmenueditor.com/documentation/how-to-give-access-to-menu/)

# How to Allow Access to an Admin Menu

                    
                    Table of Contents- [How to Give a Role Access to a Menu](#how-to-give-a-role-access-to-a-menu)
- [How to Give a User Access to a Menu](#how-to-give-a-user-access-to-a-menu)
- [How To Change Post Type Permissions](#how-to-change-post-type-permissions)
- [Troubleshooting](#troubleshooting)
- [Related](#related)

## How to Give a Role Access to a Menu

1. Click the name of the role.

![Click the name of a role to select it](https://adminmenueditor.com/wp-content/uploads/2017/12/click-to-select-role-narrow-1.png)
2. Find the item you want to hide. If it’s a submenu, click the parent menu to select it and display the submenu list.

![](https://adminmenueditor.com/wp-content/uploads/2017/12/select-menu-item-to-show.png)
3. Check the box that’s next to the item title.

![](https://adminmenueditor.com/wp-content/uploads/2017/12/check-menu-item.png)

## How to Give a User Access to a Menu

1. Click the “Choose users…” link to open the “Select Visible Users” dialog.

![](https://adminmenueditor.com/wp-content/uploads/2017/12/click-choose-users.png)
2. Find the user in the left column and click the “+” sign. If your site has a lot of users, you can use the search box to search users by username or by display name.

![](https://adminmenueditor.com/wp-content/uploads/2017/12/select-a-user.png)
3. Click “Save Changes”. The selected user will be added to the list at the top of the menu editor.

![](https://adminmenueditor.com/wp-content/uploads/2017/12/save-changes-user-dialog.png)
4. Click the user.

![](https://adminmenueditor.com/wp-content/uploads/2017/12/click-the-user-1.png)
5. Check the menu item that you want to show.

![](https://adminmenueditor.com/wp-content/uploads/2017/12/check-menu-item.png)

## How To Change Post Type Permissions

Post type and taxonomy permissions are more fine-grained than just “visible”/”hidden”. When you check a menu item like “Posts”, the menu editor will automatically give the selected role the capability that’s required to access this menu, but it won’t give them permission to publish posts, edit other users’ posts, and so on. To manage capabilities related to posts, pages and custom post types, use the advanced permissions dialog.

1. Expand the menu properties panel.

![](https://adminmenueditor.com/wp-content/uploads/2017/12/expand-menu-properties.png)
2. Click the “Edit…” button that’s next to the “Permissions” field.

![](https://adminmenueditor.com/wp-content/uploads/2017/12/edit-permissions-button.png)
3. Click the role or user you want to customize.

![](https://adminmenueditor.com/wp-content/uploads/2017/12/advanced-permissions-select-role.png)
4. Check the permissions you want to give to the role or user.Tip: You can switch between human-readable settings and the underlying capability names by clicking the “<>” icon in the top right corner.

![](https://adminmenueditor.com/wp-content/uploads/2017/12/edit-cpt-permissions.png)
5. Save changes.

## Troubleshooting

- Does the user have multiple roles? Try checking the menu item for all of their roles.
- Does the menu item correspond to a custom post type? Sometimes it’s not obvious what is a CPT and what isn’t. Click the “Edit” button that’s next to the “Permissions” field and see if there are any additional permissions that you might need to turn on.
- Take a look at the “Permissions” field. Is the required capability “administrator” or the name of another role? If so, the role name is probably hard-coded in the relevant plugin and can’t be changed without editing plugin source code. See the next point.
- Most likely, the plugin or theme that created the menu item has added more restrictions on top of regular menu permissions. It’s usually not possible to remove such restrictions with Admin Menu Editor Pro or similar tools. Instead, try this:
- Check the settings of the plugin that added the menu. Is there an option to let other roles use the plugin?
- Check the plugin documentation. Is there a code snippet or filter that you could use to override the default permissions? Does a user need a specific capability to access the menu?
- Ask the author of the plugin.

## Related

- [How to Hide a Menu Item](/documentation/how-to-hide-a-menu-item)

---

