# Forums

*Category from WP Fusion documentation*

---

## wpForo

**Source:** [https://wpfusion.com/documentation/forums/wpforo/](https://wpfusion.com/documentation/forums/wpforo/)

### Overview

WP Fusion integrates with wpForo to sync user registrations and profile updates with any one of 50+ CRMs and marketing automation tools.

As well, WP Fusion allows you protect access to forums on your site by a logged in user’s CRM tags. WP Fusion also allows you to auto-assign usergroups in wpForo forums by applying and removing tags in your CRM.

### Syncing custom fields

Any custom fields added to your wpForo registration or profile forms with the User Custom Fields addon will automatically show up for sync under the wpForo heading in WP Fusion’s Contact Fields settings.

For each wpForo field in the left column, you can select a custom field in your CRM from the dropdown in the right column to enable the field for sync.

When a user registers or updates their profile, the data will be synced to the selected custom field in your CRM.

### Forum access control

To set up forum access control, navigate to Forums » WP Fusion in the WordPress admin.

For each of your forums and categories, you can specify tags that are required to view that forum. If the user does not have any of the specified tags they will be redirected to a the page you select in the dropdown.

You can also check the box for Hide if access is denied to completely hide the restricted forum from the forums list.

### Usergroups

WP Fusion includes the ability to auto-assign usergroups in your forums by applying and removing tags in your CRM. This can also be configured under Forums » WP Fusion in the admin.

For each usergroup in wpForo you can select a tag in your CRM. When this tag is applied to a user they will be added to the associated usergroup. If the tag is removed they will revert to the default wpForo usergroup.

You can set the default usergroup in the wpForo settings under Forums » Usergroups.

---

## bbPress

**Source:** [https://wpfusion.com/documentation/forums/bbpress/](https://wpfusion.com/documentation/forums/bbpress/)

### Overview

Using WP Fusion and bbPress, you can restrict access to forums based on users’ tags in your CRM. If the user does not have access you can either display a restricted content message, or redirect the user to another page on your site.

### Forums access control

When editing any individual forum, you can set access rules for that forum based on a logged-in user’s tags in your CRM.

For more information on the meta box, see the documentation on restricting access to content.

**Note:** WPF adds a class to the form, “wpf-locked”. You can use this to style the form via CSS so that you can indicate which forums are locked.

#### Hiding restricted forums

If you’d like to hide restricted forums from the forums archive, you can turn on Query Filtering for the forums post type.

At Settings » WP Fusion » General » Content Restriction, set Filter Queries to Standard, and from the Post Types dropdown, select forum.

Now any forums that the user doesn’t have access to will be completely hidden from the forums archive, regardless of the visibility setting of the forum.

### Forums activity tracking

At the bottom of the WP Fusion meta box when editing any forum or topic, you will see settings for applying tags when the forum or topic is viewed, as well as when a new topic or reply is posted.

When editing any forum, WP Fusion allows you to select tags to apply when that forum is viewed, as well as when a new topic is posted.
When editing any topic (or *Discussion* with BuddyBoss), WP Fusion allows you to select tags to apply when that topic is viewed, as well as when a new reply is posted.

### Global settings

WP Fusion also has some global settings for bbPress, found at Settings » WP Fusion » Integrations » bbPress.

Here you can optionally restrict access to your forums archive page, or all forums on your site, using a CRM tag.

Note that you must specify a redirect URL for forum archive protection to work.

### Event Tracking

Using the Event Tracking addon, you can track bbPress (and BuddyPress / BuddyBoss) forum activity as events in supported CRMs. This lets you view user forum activity in real time in your CRM’s activity feed.

Events can be configured in the global Event Tracking settings page, at Settings » Event Tracking.

The available triggers are:

- New Topic: Triggered each time a single topic is created in any forum.
- New Reply: Triggered each time someone replies to a topic in any forum.

You can also configure event tracking on individual forums.

In this case the event tracking on the forum will take priority over any globally configured event tracking.

In this example we’ve registered a custom event specifically for when someone creates a new post in the **Introductions** forum

#### How it looks

As people post topics and replies, any configured events will be synced to each user’s contact record in your CRM, in real time.

WP Fusion’s Event Tracking addon sends events from bbPress to contact records in ActiveCampaign and other CRMs in real time.
You can use events to get a better sense of each member’s engagement with your community, to trigger automations, or as conditions (i.e. “only run this automation if contact has triggered at least one New Topic event).

---

