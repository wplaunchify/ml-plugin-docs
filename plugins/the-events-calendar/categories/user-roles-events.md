# User Roles Events

*Category from The Events Calendar documentation*

---

## Configuring User Roles and Permissions with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/user-roles-events/](https://docs.nexcess.com/software/the-events-calendar/user-roles-events/)

With WordPress, you can define the roles and permissions assigned to your users in order to give them certain capabilities. These roles and permissions also apply to [The Events Calendar and Events Calendar Pro](https://theeventscalendar.com/products/wordpress-events-calendar/), so as the site owner you can control what users can and cannot do with your events using WordPress’s built-in [user roles](https://wordpress.org/support/article/roles-and-capabilities/#roles).

Below, we’ll walk through the available roles and how they apply to your events, show you how to fine-tune permissions for events specifically, list every capability at your disposal, and cover how to hide the Events menu from certain users.

## Roles and permissions

### Super Admin

This role only applies to [multi-site installations](https://docs.nexcess.com/software/the-events-calendar/licenses-for-multisites/) and encompasses all of the capabilities possible with WordPress. This includes:

- [create_sites](https://wordpress.org/support/article/roles-and-capabilities/#create_sites)
- [delete_sites](https://wordpress.org/support/article/roles-and-capabilities/#delete_sites)
- [manage_network](https://wordpress.org/support/article/roles-and-capabilities/#manage_network)
- [manage_sites](https://wordpress.org/support/article/roles-and-capabilities/#manage_sites)
- [manage_network_users](https://wordpress.org/support/article/roles-and-capabilities/#manage_network_users)
- [manage_network_plugins](https://wordpress.org/support/article/roles-and-capabilities/#manage_network_plugins)
- [manage_network_themes](https://wordpress.org/support/article/roles-and-capabilities/#manage_network_themes)
- [manage_network_options](https://wordpress.org/support/article/roles-and-capabilities/#manage_network_options)
- [upgrade_network](https://wordpress.org/support/article/roles-and-capabilities/#upgrade_network)
- [setup_network](https://wordpress.org/support/article/roles-and-capabilities/#setup_network)

### Administrators

The capabilities of Administrators differ between single site and [Multisite](https://wordpress.org/support/article/glossary/#multisite) WordPress installations. All administrators have the following capabilities:

- [activate_plugins](https://wordpress.org/support/article/roles-and-capabilities/#activate_plugins)
- [delete_others_pages](https://wordpress.org/support/article/roles-and-capabilities/#delete_others_pages)
- [delete_others_posts](https://wordpress.org/support/article/roles-and-capabilities/#delete_others_posts)
- [delete_pages](https://wordpress.org/support/article/roles-and-capabilities/#delete_pages)
- [delete_posts](https://wordpress.org/support/article/roles-and-capabilities/#delete_posts)
- [delete_private_pages](https://wordpress.org/support/article/roles-and-capabilities/#delete_private_pages)
- [delete_private_posts](https://wordpress.org/support/article/roles-and-capabilities/#delete_private_posts)
- [delete_published_pages](https://wordpress.org/support/article/roles-and-capabilities/#delete_published_pages)
- [delete_published_posts](https://wordpress.org/support/article/roles-and-capabilities/#delete_published_posts)
- [edit_dashboard](https://wordpress.org/support/article/roles-and-capabilities/#edit_dashboard)
- [edit_others_pages](https://wordpress.org/support/article/roles-and-capabilities/#edit_others_pages)
- [edit_others_posts](https://wordpress.org/support/article/roles-and-capabilities/#edit_others_posts)
- [edit_pages](https://wordpress.org/support/article/roles-and-capabilities/#edit_pages)
- [edit_posts](https://wordpress.org/support/article/roles-and-capabilities/#edit_posts)
- [edit_private_pages](https://wordpress.org/support/article/roles-and-capabilities/#edit_private_pages)
- [edit_private_posts](https://wordpress.org/support/article/roles-and-capabilities/#edit_private_posts)
- [edit_published_pages](https://wordpress.org/support/article/roles-and-capabilities/#edit_published_pages)
- [edit_published_posts](https://wordpress.org/support/article/roles-and-capabilities/#edit_published_posts)
- [edit_theme_options](https://wordpress.org/support/article/roles-and-capabilities/#edit_theme_options)
- [export](https://wordpress.org/support/article/roles-and-capabilities/#export)
- [import](https://wordpress.org/support/article/roles-and-capabilities/#import)
- [list_users](https://wordpress.org/support/article/roles-and-capabilities/#list_users)
- [manage_categories](https://wordpress.org/support/article/roles-and-capabilities/#manage_categories)
- [manage_links](https://wordpress.org/support/article/roles-and-capabilities/#manage_links)
- [manage_options](https://wordpress.org/support/article/roles-and-capabilities/#manage_options)
- [moderate_comments](https://wordpress.org/support/article/roles-and-capabilities/#moderate_comments)
- [promote_users](https://wordpress.org/support/article/roles-and-capabilities/#promote_users)
- [publish_pages](https://wordpress.org/support/article/roles-and-capabilities/#publish_pages)
- [publish_posts](https://wordpress.org/support/article/roles-and-capabilities/#publish_posts)
- [read_private_pages](https://wordpress.org/support/article/roles-and-capabilities/#read_private_pages)
- [read_private_posts](https://wordpress.org/support/article/roles-and-capabilities/#read_private_posts)
- [read](https://wordpress.org/support/article/roles-and-capabilities/#read)
- create Reusable Blocks
- edit Reusable Blocks
- read Reusable Blocks
- delete Reusable Blocks
- [remove_users](https://wordpress.org/support/article/roles-and-capabilities/#remove_users)
- [switch_themes](https://wordpress.org/support/article/roles-and-capabilities/#switch_themes)
- [upload_files](https://wordpress.org/support/article/roles-and-capabilities/#upload_files)
- [customize](https://wordpress.org/support/article/roles-and-capabilities/#customize)
- [delete_site](https://wordpress.org/support/article/roles-and-capabilities/#delete_site)

For single-site installations, Admins also have the following capabilities:

- [update_core](https://wordpress.org/support/article/roles-and-capabilities/#update_core)
- [update_plugins](https://wordpress.org/support/article/roles-and-capabilities/#update_plugins)
- [update_themes](https://wordpress.org/support/article/roles-and-capabilities/#update_themes)
- [install_plugins](https://wordpress.org/support/article/roles-and-capabilities/#install_plugins)
- [install_themes](https://wordpress.org/support/article/roles-and-capabilities/#install_themes)
- [delete_themes](https://wordpress.org/support/article/roles-and-capabilities/#delete_themes)
- [delete_plugins](https://wordpress.org/support/article/roles-and-capabilities/#delete_plugins)
- [edit_plugins](https://wordpress.org/support/article/roles-and-capabilities/#edit_plugins)
- [edit_themes](https://wordpress.org/support/article/roles-and-capabilities/#edit_themes)
- [edit_files](https://wordpress.org/support/article/roles-and-capabilities/#edit_files)
- [edit_users](https://wordpress.org/support/article/roles-and-capabilities/#edit_users)
- [add_users](https://wordpress.org/support/article/roles-and-capabilities/#add_users)
- [create_users](https://wordpress.org/support/article/roles-and-capabilities/#create_users)
- [delete_users](https://wordpress.org/support/article/roles-and-capabilities/#delete_users)
- [unfiltered_html](https://wordpress.org/support/article/roles-and-capabilities/#unfiltered_html)

It’s worth noting that all of the above capabilities apply to events as well. So Administrators can add their own events, as well as edit and delete all events on the site itself.

### Editor

Editors can modify, read, and delete other post types—including events—and they can add new events by default. Where Editors are limited is in managing the site itself: they can’t add, update, or delete plugins and themes, and they can’t manage other users. Here’s the full list of WordPress capabilities for the Editor role:

- [delete_others_pages](https://wordpress.org/support/article/roles-and-capabilities/#delete_others_pages)
- [delete_others_posts](https://wordpress.org/support/article/roles-and-capabilities/#delete_others_posts)
- [delete_pages](https://wordpress.org/support/article/roles-and-capabilities/#delete_pages)
- [delete_posts](https://wordpress.org/support/article/roles-and-capabilities/#delete_posts)
- [delete_private_pages](https://wordpress.org/support/article/roles-and-capabilities/#delete_private_pages)
- [delete_private_posts](https://wordpress.org/support/article/roles-and-capabilities/#delete_private_posts)
- [delete_published_pages](https://wordpress.org/support/article/roles-and-capabilities/#delete_published_pages)
- [delete_published_posts](https://wordpress.org/support/article/roles-and-capabilities/#delete_published_posts)
- delete Reusable Blocks
- [edit_others_pages](https://wordpress.org/support/article/roles-and-capabilities/#edit_others_pages)
- [edit_others_posts](https://wordpress.org/support/article/roles-and-capabilities/#edit_others_posts)
- [edit_pages](https://wordpress.org/support/article/roles-and-capabilities/#edit_pages)
- [edit_posts](https://wordpress.org/support/article/roles-and-capabilities/#edit_posts)
- [edit_private_pages](https://wordpress.org/support/article/roles-and-capabilities/#edit_private_pages)
- [edit_private_posts](https://wordpress.org/support/article/roles-and-capabilities/#edit_private_posts)
- [edit_published_pages](https://wordpress.org/support/article/roles-and-capabilities/#edit_published_pages)
- [edit_published_posts](https://wordpress.org/support/article/roles-and-capabilities/#edit_published_posts)
- create Reusable Blocks
- edit Reusable Blocks
- [manage_categories](https://wordpress.org/support/article/roles-and-capabilities/#manage_categories)
- [manage_links](https://wordpress.org/support/article/roles-and-capabilities/#manage_links)
- [moderate_comments](https://wordpress.org/support/article/roles-and-capabilities/#moderate_comments)
- [publish_pages](https://wordpress.org/support/article/roles-and-capabilities/#publish_pages)
- [publish_posts](https://wordpress.org/support/article/roles-and-capabilities/#publish_posts)
- [read](https://wordpress.org/support/article/roles-and-capabilities/#read)
- [read_private_pages](https://wordpress.org/support/article/roles-and-capabilities/#read_private_pages)
- [read_private_posts](https://wordpress.org/support/article/roles-and-capabilities/#read_private_posts)
- [unfiltered_html](https://wordpress.org/support/article/roles-and-capabilities/#unfiltered_html) (not with Multisite)
- [upload_files](https://wordpress.org/support/article/roles-and-capabilities/#upload_files)

### Author

Authors can add new events, but can’t modify or delete events created by other users, and they don’t have access to Event Settings. This is a great option if you’d like to let users add new events from the WordPress backend without granting any broader capabilities. The full list of WordPress capabilities for this role:

- [delete_posts](https://wordpress.org/support/article/roles-and-capabilities/#delete_posts)
- [delete_published_posts](https://wordpress.org/support/article/roles-and-capabilities/#delete_published_posts)
- [edit_posts](https://wordpress.org/support/article/roles-and-capabilities/#edit_posts)
- [edit_published_posts](https://wordpress.org/support/article/roles-and-capabilities/#edit_published_posts)
- [publish_posts](https://wordpress.org/support/article/roles-and-capabilities/#publish_posts)
- [read](https://wordpress.org/support/article/roles-and-capabilities/#read)
- [upload_files](https://wordpress.org/support/article/roles-and-capabilities/#upload_files)
- create Reusable Blocks
- read Reusable Blocks
- edit Reusable Blocks (own)
- delete Reusable Blocks (own)

### Contributor

Contributors can create new events and submit them for review by an Editor (or higher) role. This differs from Authors, who can publish their own events without review. Here’s the complete list of WordPress capabilities:

- [delete_posts](https://wordpress.org/support/article/roles-and-capabilities/#delete_posts)
- [edit_posts](https://wordpress.org/support/article/roles-and-capabilities/#edit_posts)
- [read](https://wordpress.org/support/article/roles-and-capabilities/#read)
- read Reusable Blocks

### Subscriber

Subscribers can only read and view events—they can’t add, edit, or delete them. In WordPress, the only capability assigned to this role is [read](https://wordpress.org/support/article/roles-and-capabilities/#read).

## Editing user roles and capabilities

You can also customize user roles to contain exactly the capabilities you want, and the best way to do that is with a [third-party plugin](https://wordpress.org/plugins/members/) like Members or User Role Editor.

Let’s say you want to change the permissions on your site so that Editors can edit and publish posts to your blog, but *not* the events published through The Events Calendar. In general, events follow the same user roles and permissions as any default post in WordPress, so if you remove editing and publishing permissions for Editors on posts, the same will be true for events. So how do you treat events differently?

## Setting permissions for events

We’ve greatly expanded the capabilities available for events so you can customize permissions for events without interfering with other post types. Here’s the catch, though: you’ll need a third-party plugin to activate and assign these capabilities to specific user roles. We recommend the [User Role Editor plugin](https://wordpress.org/plugins/user-role-editor/) if you’re looking for one.

Once you’ve installed and activated the User Role Editor plugin, head over to **Users → Roles → Editor** from the WordPress dashboard. You should see the following permissions:

- ```
edit_tribe_event
```
- ```
edit_tribe_events
```
- ```
read_tribe_venue
```
- ```
read_tribe_event
```
- ```
read_tribe_organizer
```

You can probably gather what these mean from the names alone—they’re the permissions to edit and read events, venues, and organizers. Uncheck all of them and your Editor role will lose the ability to read or edit these posts entirely. Or uncheck just venues and organizers, and Editors will still be able to manage events while being locked out of venues and organizers. Total control!

Wash, rinse, and repeat for other user roles, including custom roles you may have created.

## Full list of capabilities

If you’re wondering just how many capabilities are available for user roles managing content in The Events Calendar, here’s a comprehensive list of everything at your fingertips.

### Events capabilities

- ```
edit_tribe_event
```
- ```
read_tribe_event
```
- ```
delete_tribe_event
```
- ```
delete_tribe_events
```
- ```
edit_tribe_events
```
- ```
edit_others_tribe_events
```
- ```
delete_others_tribe_events
```
- ```
publish_tribe_events
```
- ```
edit_published_tribe_events
```
- ```
delete_published_tribe_events
```
- ```
delete_private_tribe_events
```
- ```
edit_private_tribe_events
```
- ```
read_private_tribe_events
```

### Venues capabilities

- ```
edit_tribe_venue
```
- ```
read_tribe_venue
```
- ```
delete_tribe_venue
```
- ```
delete_tribe_venues
```
- ```
edit_tribe_venues
```
- ```
edit_others_tribe_venues
```
- ```
delete_others_tribe_venues
```
- ```
publish_tribe_venues
```
- ```
edit_published_tribe_venues
```
- ```
delete_published_tribe_venues
```
- ```
delete_private_tribe_venues
```
- ```
edit_private_tribe_venues
```
- ```
read_private_tribe_venues
```

### Organizers capabilities

- ```
edit_tribe_organizer
```
- ```
read_tribe_organizer
```
- ```
delete_tribe_organizer
```
- ```
delete_tribe_organizers
```
- ```
edit_tribe_organizers
```
- ```
edit_others_tribe_organizers
```
- ```
delete_others_tribe_organizers
```
- ```
publish_tribe_organizers
```
- ```
edit_published_tribe_organizers
```
- ```
delete_published_tribe_organizers
```
- ```
delete_private_tribe_organizers
```
- ```
edit_private_tribe_organizers
```
- ```
read_private_tribe_organizers
```

### Ticket capabilities

The following are permissions used in our ticketing plugins and add-ons.

| Permission | What it Does | Plugin |
| --- | --- | --- |
| edit_event_tickets | Provides access to the Classic Editor metabox for tickets. | Event TicketsCommunity Tickets |
| tribe_manage_attendees | Provides access to see attendee data for events, including attendees who have opted out of public display and attendees who are in the process of completing a ticket purchase. | Event Tickets |
| sell_event_tickets | Provides access to sell a ticket when submitting an event to the calendar via the Community Events submission form. This can be overridden to provide access to all users in the Community Tickets add-on settings. | Community Tickets |

### Zoom capabilities

Zoom link creation can be added using the 
```
manage_options
```

 capability. You can filter this capability using: 
```
tribe_events_virtual_zoom_admin_ajax_capability
```

 to another capability.

## Hiding the Events menu from certain users

There are plenty of ways to hide or rearrange elements in the dashboard. We recommend one of these two plugins, both available on the WordPress.org plugin repo:

- [Admin Menu Editor](http://wordpress.org/extend/plugins/admin-menu-editor/)
- [Adminimize](http://wordpress.org/extend/plugins/adminimize/)

Hiding the Events menu takes two steps. We’ll use Adminimize in this example, though Admin Menu Editor also has a PRO version with slightly nicer controls for this task if you’d prefer to go that route.

First, install and activate Adminimize from the link above, then head to *Settings > Adminimize* and deactivate the Events menu for any user groups you want to hide it from. While you’re there, you’ll notice the plugin gives you control over a lot of other dashboard elements as well.

Second, add the snippet below to your theme’s 
```
functions.php
```

 file. This hides the Events admin bar dropdown for non-administrators. You can modify the condition if you need more specific control over which groups see it—see the [documentation for current_user_can](http://codex.wordpress.org/Function_Reference/current_user_can) for details.

```
// show events menu in admin bar only for admins
if (!current_user_can('manage_options')) {
  define('TRIBE_DISABLE_TOOLBAR_ITEMS', true);
}
```

---

