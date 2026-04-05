# Membership

*Category from WP Fusion - Enhanced Ecommerce Addon documentation*

---

## FluentCommunity

**Source:** [https://wpfusion.com/documentation/membership/fluentcommunity/](https://wpfusion.com/documentation/membership/fluentcommunity/)

### Overview

WP Fusion integrates with [FluentCommunity](https://wpfusion.com/go/fluentcommunity) to sync members with any one of  [50+ CRMs and marketing automation platforms](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they join spaces or courses, apply tags based on course progress, sync course progress with your CRM, and auto-enroll members when tags or lists are updated in your CRM.

### Tags and access control

WP Fusion adds several settings to FluentCommunity, which you can find in the WP Fusion submenu in the WordPress admin, as well as in the WP Fusion settings section when editing any Course or Space.

![screenshot of a wordpress plugin settings page for activecampaign integration with fluentcommunity, displaying options to set required tags and a redirect url for denied access, featuring active membership tag and signup fee subscription redirect selected.](https://wpfusion.com/wp-content/uploads/2024/12/fluentcommunity-settings-1-1024x515.jpg)

- **Required Tags:**Here you can set one or more CRM tags that are required to access your community.
- **Redirect if Denied:**If the user does not have the required tags, they can either be redirected to a page or URL of your choosing, or you can leave the redirect setting blank to use the default access denied features configured in the[FluentCommunity settings](https://fluentcommunity.co/docs/portal-access-settings/).

#### Space settings

![a fluentcommunity settings page displays options for uploading photos and configuring activecampaign integration, including tag application when users join or leave, plus a dropdown to link tags with user actions.](https://wpfusion.com/wp-content/uploads/2024/12/fluent-community-space-settings-1-1024x643.jpg)

For each of your spaces, you have three options:

- **Apply Tags:**These tags will be applied in your CRM when a user joins the space.
- **Remove Tags:**If this box is checked, the tags will automatically be removed if the user leaves the space.
- **Link with Tag:** This setting allows you to select a tag that becomes *linked* with the space. If this tag is applied to a contact, for example via a webhook, they will be automatically added to the space. Likewise if this tag is removed, they will be removed from the space. This lets you automate individual users’ space memberships using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).

If you want to create private spaces for groups of members, you can set individual spaces to Private or Secret in the [FluentCommunity space settings](https://fluentcommunity.co/docs/managing-privacy-of-spaces/). WP Fusion will then automatically add the user to the correct spaces based on their tags in your connected CRM.

#### Course settings

![a fluentcommunity settings page displays options for uploading photos and configuring activecampaign integration, including tag application when users join or leave, plus a dropdown to link tags with user actions.](https://wpfusion.com/wp-content/uploads/2024/12/fluent-community-space-settings-1-1024x643.jpg)

The course settings are similar to the space settings:

- **Apply Tags:**These tags will be applied in your CRM when a user enrolls in the course.
- **Remove Tags:**If this box is checked, the tags will automatically be removed if the user leaves the course.
- **Link with Tag:** This setting allows you to select a tag that becomes *linked* with the course. If this tag is applied to a contact, for example via a webhook, they will be automatically added to the course. Likewise if this tag is removed, they will be removed from the course. This lets you automate individual users’ course enrollments using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).

Likewise, if you want to create private courses for groups of members, you can set individual courses to Private or Secret in the [FluentCommunity course settings](https://fluentcommunity.co/docs/course-privacy/). WP Fusion will then automatically add the user to the correct courses based on their tags in your connected CRM.

### Syncing custom fields

WP Fusion can sync several fields in real-time with your CRM as members interact with your community.

![Screenshot of WP Fusion's FluentCommunity settings](https://wpfusion.com/wp-content/uploads/2024/12/fluent-community-fields-1024x303.jpg)

The fields are:

- **Last Space Joined:**When a member joins a space, the name of the space will be synced.
- **Last Space Joined Date:**When a member joins a space, the current date and time will be synced.
- **Last Course Enrolled:** When a student is enrolled in a course, the name of the course will be synced.
- **Last Course Enrolled Date:** When a student is enrolled in a course, the current date and time will be synced.
- **Last Course Completed:**When a course is marked complete, the name of the course will be synced.
- **Last Course Completed Date:**When a course is marked complete, the date and time will be synced.
- **Last Lesson Completed:**When a lesson is marked complete, the name of the lesson will be synced.
- **Last Lesson Completed Date:**When a lesson is marked complete, the date and time will be synced.

You can use these fields to track progress in your CRM and potentially reduce the number of tags that need to be applied to a contact.

---

## MemberDash

**Source:** [https://wpfusion.com/documentation/membership/memberdash/](https://wpfusion.com/documentation/membership/memberdash/)

### Overview

WP Fusion includes an integration with [MemberDash](https://www.learndash.com/memberdash-plugin/) that allows you to apply tags in any one of [50+ CRMs and marketing automation systems](https://wpfusion.com/documentation/faq/crm-compatibility-table/) based on membership levels, and automatically grant membership levels by applying tags in your CRM.

### Membership settings

When accessing a MemberDash Membership, click on the WP Fusion settings tab to configure any tags you’d like applied when a member is added to the membership.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/memberdash-settings-1024x351.jpg)

There are two settings. **Apply Tags** lets you select one or more tags that will be applied in your CRM when a user is added to the membership.

**Link with Tag** lets you select a tag that becomes “linked” with the membership:

- When a user is added to the membership, the linked tag will be applied
- When a user is removed from the membership, the linked tag will be removed
- When the tag is applied to a user, **they will be added to the membership**
- When the tag is removed from the user (or if the user doesn’t have the tag), they will be removed from the membership

### Batch Operations

WP Fusion also includes a Batch Operation that applies tags to your members based on your configured WP Fusion membership settings. Batch Operations are in the Advanced tab under Settings » WP Fusion.

![memberdash doc ss 2](https://wpfusion.com/wp-content/uploads/2024/07/memberdash-doc-ss-2.png)

---

## Content Control

**Source:** [https://wpfusion.com/documentation/membership/content-control/](https://wpfusion.com/documentation/membership/content-control/)

### Overview

WP Fusion integrates with [Content Control Pro](https://wpfusion.com/go/content-control) to allow you to use tags or lists in your connected CRM as conditions when creating access rules for your content.

### Setup

When editing any restriction in Content Control Pro, choose **Custom** under **User Status** and click the Add Rule button to add a rule.

![](https://wpfusion.com/wp-content/uploads/2024/04/content-control-1024x974.jpg)Screenshot
There are two options:

- **User Has CRM Tags (Any):** Access will be granted if the user is logged in and has at least one of the specified CRM tags or lists.
- **User Does Not Have CRM Tags (Any):** If the user is logged in and has any of the specified tags or lists, access will be denied.

You can create complex access rules by combining rules and rule groups using AND and OR logic.

---

## WP User Manager

**Source:** [https://wpfusion.com/documentation/membership/wp-user-manager/](https://wpfusion.com/documentation/membership/wp-user-manager/)

### Overview

WP Fusion integrates with the [WP User Manager](https://en-ca.wordpress.org/plugins/wp-user-manager/) membership plugin, allowing you to sync user registrations and profile updates to your [CRM or email marketing platform](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

### Syncing custom fields

The primary WP User Manager fields and any fields you’ve created with WP User Manager’s [Custom Contact Fields addon](https://wpusermanager.com/addons/custom-fields/) will appear under Settings » WP Fusion » Contact Fields, under the WP User Manager section header.

From here, you can associate the WP User Manager fields with custom fields in your CRM.

![](https://wpfusion.com/wp-content/uploads/2023/11/wp_user_manager_ss_1.jpg)

When a user registers or updates their profile via WP User Manager, their data will be synced automatically to your CRM.

### Defer until activation

WP User Manager’s [User Verification addon](https://wpusermanager.com/addons/user-verification/) allows you to require approval or email verification for all new users on your site. In some cases you may want to not send any data to your CRM until a new member is approved by an admin, or the user has confirmed their email address.

To enable this, go to Settings » WP Fusion » Integrations, and under the WP User Manager Integration header, check the box for **Defer Until Activation**.

When this is enabled, no data will be sent to your CRM until the new user has been approved by an administrator or confirmed their email.

---

## SureMembers

**Source:** [https://wpfusion.com/documentation/membership/suremembers/](https://wpfusion.com/documentation/membership/suremembers/)

### Overview

WP Fusion includes an integration with [SureMembers](https://wpfusion.com/go/suremembers) to allow you to apply tags in [any one of 50+ CRMs and marketing automation systems](https://wpfusion.com/documentation/faq/crm-compatibility-table/) based on membership levels, as well as automatically grant membership levels by applying tags in your CRM.

### Access Group settings

When editing any SureMembers access plan, you can access the WP Fusion settings from the WP Fusion meta box.

![](https://wpfusion.com/wp-content/uploads/2023/11/suremembers-1024x548.jpg)

There are two settings. **Apply Tags** lets you select one or more tags that will be applied in your CRM when a user is added to the access group.

**Link with Tag** lets you select a tag that becomes “linked” with the group:

- When a user is added to the group, the linked tag will be applied
- When a user is removed from the group, the linked tag will be removed
- When the tag is applied to a user, **they will be added to the group**
- When the tag is removed from the user (or if the user doesn’t have the tag), they will be removed from the group

---

## Blockli Streamer

**Source:** [https://wpfusion.com/documentation/membership/blockli-streamer/](https://wpfusion.com/documentation/membership/blockli-streamer/)

### Overview

WP Fusion provides an integration between Blockli Media Tools and any one of [50+ supported CRMs and marketing automation systems](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

When a user watches one of your Blockli Streamer videos on your WordPress site, your selected tags will be automatically applied to the user on [your CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

WP Fusion supports applying tags in your CRM based on completing a video and starting a video.

### Tagging

When configuring a Blockli video, you can see the WP Fusion tab on the right to configure any tags you’d like applied when a video is started and when a video is finished.

![](https://wpfusion.com/wp-content/uploads/2023/09/blockli-integration-documentation-1.jpg)

---

## UsersWP

**Source:** [https://wpfusion.com/documentation/membership/userswp/](https://wpfusion.com/documentation/membership/userswp/)

### Overview

WP Fusion integrates with [UsersWP](https://userswp.io/) to keep users in sync between your WordPress site and any one of [50+ supported CRMs and marketing automation tools](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

All new users who register via UsersWP will be instantly added to your CRM, with all data provided at registration. Profile updates are also synced.

![](https://wpfusion.com/wp-content/uploads/2023/06/userswp-contactfields-ss-1024x220.jpg)

Any custom fields you add to registration or profile forms will also be detected and will be available for sync [in the WP Fusion settings](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).

---

## ARMember

**Source:** [https://wpfusion.com/documentation/membership/armember/](https://wpfusion.com/documentation/membership/armember/)

### Overview

WP Fusion integrates with [ARMember](https://wpfusion.com/go/armember) to sync new user registrations and profile updates to [your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/), with support for any number of custom fields.

### Syncing custom fields

Any custom fields created on ARMember forms will be displayed in the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) of the WP Fusion settings, under the ARMember heading.

![](https://wpfusion.com/wp-content/uploads/2022/01/armember-fields-1024x256.jpg)

You can then map these fields to fields in your CRM, and the data will be synced whenever a user registers or their ARMember profile is updated.

---

## Members

**Source:** [https://wpfusion.com/documentation/membership/members/](https://wpfusion.com/documentation/membership/members/)

### Overview

WP Fusion includes an integration with the free [Members](https://wordpress.org/plugins/members/) plugin to allow you to apply tags in [your connected CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) based on changes to user roles, as well as automatically assign user roles based on activity in your CRM.

### Role Settings

When editing any Members user role, a WP Fusion metabox will appear in the sidebar.

![](https://wpfusion.com/wp-content/uploads/2021/03/members-edit-role-1024x648.jpg)

Here you can select a tag that becomes “linked” with the role:

- When a user is added to the role, the linked tag will be applied
- When a user is removed from the role, the linked tag will be removed
- When the tag is applied to a user, **they will be granted the role**
- When the tag is removed from the user (or if the user doesn’t have the tag), the role will be removed

### How it looks

![](https://wpfusion.com/wp-content/uploads/2021/03/members-auto-enrollment-1024x750.jpg)In this screenshot a user has been imported via an [Ontraport webhook](https://wpfusion.com/documentation/webhooks/ontraport-webhooks/) and automatically assigned the role Custom Members Role based on the tag “paid membership purchased”

---

## BuddyBoss

**Source:** [https://wpfusion.com/documentation/membership/buddyboss/](https://wpfusion.com/documentation/membership/buddyboss/)

### Overview

WP Fusion automatically syncs your [BuddyBoss](https://wpfusion.com/go/buddyboss) members with leading [CRMs and marketing automation tools](https://wpfusion.com/documentation/faq/crm-compatibility-table/), and allows you to apply tags in your CRM based on member activity, as well as personalize the member experience using tags and automations in your CRM.

- This documentation covers BuddyBoss-specific functionality. For more information on syncing members with CRM contact records and applying tags based on groups and group types, see [the BuddyPress documentation](https://wpfusion.com/documentation/membership/buddypress/).
- For information on WP Fusion’s integration with BuddyBoss Forums, see our [documentation on bbPress](https://wpfusion.com/documentation/forums/bbpress/).

### Profile types auto-assignment

![](https://wpfusion.com/wp-content/uploads/2016/06/buddypress-profile-types-1024x283.jpg)

WP Fusion supports BuddyBoss profile types. You can specify a CRM tag to be “linked” with the profile type.

When the user is given the profile type, the tag will be applied. When the user is removed from the profile type, the tag will be removed.

Likewise, applying this tag to a user in your CRM or from another integration will automatically assign the profile type to the user, and removing the tag will un-assign it.

### Member Access Controls

The [Member Access Controls feature](https://www.buddyboss.com/resources/docs/components/member-access-controls/ref/627/) in the [BuddyBoss Platform Pro](https://wpfusion.com/go/buddyboss) plugin allows you to control which membership components a user can interact with (such as forums, groups, private messaging, etc.) based on their membership level.

WP Fusion integrates with the Member Access Controls system to allow you to use tags (or lists / groups) in your connected CRM to personalize the member experience.

![](https://wpfusion.com/wp-content/uploads/2016/06/buddyboss-access-control-1024x547.jpg)In this example, only users who are on the HubSpot list **Paying Member** can join social groups.
Member access controls are currently available for the Social Groups, Activity Feeds, Media Uploading, and Private Messaging components.

To set up, choose WP Fusion from the dropdown of available access conditions, and then select the required tags (or lists / segments).

![](https://wpfusion.com/wp-content/uploads/2016/06/buddyboss-access-control-messages-1024x774.jpg)In this example, only members with the Infusionsoft tag **Premium Member** can send private messages.
**Notes:**

- The Member Access Controls system for social groups only prevents users from *joining* social groups if they don’t have the correct tag. Removing a tag will not remove anyone from a group or disable their existing group access.
- Due to the way the Messages Access settings are displayed, every available tag in your account has a “specific tags” option with every *other* available tag, which can potentially result in hundreds of thousands of inputs on the page. To protect the stability of your site, WP Fusion will only load the first 100 available tags. If you experience issues saving the Messages Access settings, you may need to [increase your max_input_vars](https://www.a2hosting.com/kb/developer-corner/php/using-php.ini-directives/php-max-input-vars-directive).

### BuddyBoss App

WP Fusion also includes some features specific to the [BuddyBoss App](https://wpfusion.com/go/buddyboss-app).

#### Logins

Using the [Logins Addon](https://wpfusion.com/documentation/logins/overview/) (available to Plus and Professional license holders), you can apply tags when users first log in to your BuddyBoss app, apply tags when users create accounts via [Social Login](https://www.buddyboss.com/resources/docs/components/buddyboss-social-login/), as well as track the last date they logged in to the app in your CRM.

![Screenshot of WP Fusion's Logins addon BuddyBoss settings](https://wpfusion.com/wp-content/uploads/2024/07/logins-buddyboss-integration-1024x419.jpg)WP Fusion’s [Logins Addon](https://wpfusion.com/documentation/logins/overview/) can apply tags in your CRM when users log in to the BuddyBoss app for the first time.
The **Apply Tags – First Login to BuddyBoss App** setting is found at the bottom of the Logins tab in the WP Fusion settings.

![screenshot](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-app-login-tracking-1024x370.jpg)

By enabling the **Last Login – BuddyBoss App** field for sync from the [Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/), you can track the last time users logged into the app in your CRM. This is a great way to get a sense of your most active app users.

#### Access Controls

You can create access rules for app content based on tags in your connected CRM. This allows you to restrict parts of the app or app components based on a user’s tags, or revoke access to the app after a subscription cancellation or payment failure.

To set this up, first make sure that [Access Controls are activated](https://www.buddyboss.com/resources/docs/app/access-controls/activating-access-controls/) at BuddyBoss App » Settings » Labs » Enable Access Controls for the BuddyBoss App.

Then go to BuddyBoss App » Access Controls, and click the blue **Access Groups** button to reach the Access Groups page.

From here, add a new group, and for the condition, choose your CRM— in this example we’re using HubSpot lists:

![](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-app-access-group-1024x659.jpg)

Once you’ve added the access group, BuddyBoss will search for any users on your site that have that tag, and you’ll see a count of them in the Access Groups list.

Then head back to the Access Controls settings page. You can now use the new access group as a condition for who can log into your app, or who can access specific app components.

![](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-app-access-controls-1024x606.jpg)

For more information on access control, [see the BuddyBoss documentation](https://www.buddyboss.com/resources/docs/app/access-controls/).

#### In-App Purchases

You can connect in-app product purchases in the BuddyBoss App to tags (or “lists”, or “groups”) in your connected CRM.

This allows you to apply a tag when an product is purchased in your app, which can unlock content on your site, trigger automated enrollments into courses and memberships, and trigger automations in your marketing automation platform.

To set up, in the WordPress admin, head to BuddyBoss App » In-App Purchases » Products and click Edit Product on your app product.

![](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-iap-1024x585.jpg)WP Fusion’s BuddyBoss app integration allows you to sync in-app purchase data with your CRM or marketing automation tool.
From the **Integration Type** menu, select your CRM, and then in the dropdown below, select the tag that should be applied at purchase.

Now when someone purchases your in-app product, a contact record will be created for them in your connected CRM, and the selected tag will be applied.

If the order is cancelled or refunded, the tag will be removed.

#### Push Notifications

When sending push notifications to your members, you can segment your members using tags in your CRM.

![](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-push-notifications-1024x727.jpg)

After selecting *Filter members,*choose *WP Fusion* from the filters dropdown, and select your CRM.

You can select any number of tags (or lists, groups, or segments, depending on your CRM), and your push notification will only be sent to members who have those tags.

#### What WP Fusion features work with the app?

WP Fusion is generally compatible with the BuddyBoss app because it doesn’t add anything to the frontend of your site— most of the behavior regarding access, enrollments, and personalization happens “behind the scenes”.

**Here are the features we’ve tested and know work with the app:**

- Anything related to syncing data or custom fields bidirectionally with your CRM
- Anything related to an event in another plugin, such as a [WooCommerce purchase](https://wpfusion.com/documentation/ecommerce/woocommerce/) applying a tag, a [LearnDash course completion](https://wpfusion.com/documentation/learning-management/learndash/) applying a tag, a [MemberPress subscription cancellation](https://wpfusion.com/documentation/ecommerce/memberpress/), etc.
- Any “linked tags” or automated enrollments, for example applying a CRM tag to [auto-enroll a user into a social group](https://wpfusion.com/documentation/membership/buddypress/#groups-auto-enrollment), course, or membership level
- Protecting access to content by showing [a restricted content message](https://wpfusion.com/documentation/getting-started/access-control/#restricted-content-message)
- Showing and hiding content [using shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-content-based-on-tags)
- Hiding restricted items using [the Filter Queries tool](https://wpfusion.com/documentation/getting-started/access-control/#filter-queries)
- Personalizing LearnDash course content using the [Filter Course Steps feature](https://wpfusion.com/documentation/learning-management/learndash/#filter-course-steps)
- Locking LearnDash lessons using the [Lock Lessons feature](https://wpfusion.com/documentation/learning-management/learndash/#lock-lessons)
- Tracking login counts and login dates [via the Logins Addon](https://wpfusion.com/documentation/logins/overview/)

![](https://wpfusion.com/wp-content/uploads/2016/02/buddyboss-app-locked-lesson-1024x941.jpg)Lessons locked by WP Fusion’s “[Lock Lessons](https://wpfusion.com/documentation/learning-management/learndash/#lock-lessons)” setting in LearnDash are displayed as disabled in the BuddyBoss app.
**The features that don’t work with the app** are features that rely on a traditional “browser” experience (though they will work on [web fallback pages](https://www.buddyboss.com/resources/docs/app/app-content/web-fallbacks/)):

- Using WP Fusion to redirect a user to another page if access to a piece of content is denied. This is because the app isn’t a web browser, so redirects won’t work
- Redirects *do*work within the app when redirecting from a non-app page (i.e. a regular site URL) to another non-app page
- This applies to both regular URLs and “[deep links](https://www.buddyboss.com/resources/docs/app/app-content/how-to-configure-deep-linking-in-the-buddyboss-app/)“
- Anything requiring JavaScript, like [site tracking](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/), [applying tags when a button is clicked](https://wpfusion.com/documentation/tutorials/link-click-tracking/), or [tracking media player engagement](https://wpfusion.com/documentation/media-tools/media-tools-overview/)
- Login redirects with the [Logins Addon](https://wpfusion.com/documentation/logins/overview/)
- Hiding app menu items based on the access rules for the associated content, using the [Hide From Menus feature](https://wpfusion.com/documentation/learning-management/learndash/#filter-course-steps)
- The [Site Lockout](https://wpfusion.com/documentation/getting-started/general-settings/#site-lockout) feature does not work with the app since it relies on redirects. Instead, you can use [Member Access Controls](#access-controls) to control app access via tags

---

## WP-Members

**Source:** [https://wpfusion.com/documentation/membership/wp-members/](https://wpfusion.com/documentation/membership/wp-members/)

### Overview

WP Fusion includes an integration with the [WP-Members](https://wordpress.org/plugins/wp-members/) membership plugin, allowing you to sync user registrations and profile updates to your CRM.

### Syncing custom fields

Any fields you’ve created on your registration or profile forms will show up under Settings » WP Fusion » Contact Fields, under the WP-Members section header. From here you can associate the WP-Members fields with custom fields in your CRM.

![](https://wpfusion.com/wp-content/uploads/2020/04/wp-members-fields-1024x171.jpg)

When a user registers or updates their profile via WP-Members, their data will be synced automatically to your CRM.

### Defer until activation

WP-Members allows you to require approval for all new users on your site. In some cases you may want to not send any data to your CRM until a new member is approved by an admin, or the user has confirmed their email address using the [email confirmation feature](https://rocketgeek.com/plugins/wp-members/docs/plugin-settings/options/#confirm).

To enable this go to Settings » WP Fusion » Integrations, and under the WP-Members Integration header, check the box for **Defer Until Activation**.

When this is enabled no data will be sent to your CRM until the new user has been approved by an administrator or confirmed their email.

---

## Users Insights

**Source:** [https://wpfusion.com/documentation/membership/users-insights/](https://wpfusion.com/documentation/membership/users-insights/)

### Overview

WP Fusion integrates with [Users Insights](https://usersinsights.com/) to allow you to sync data collected by Users Insights to custom fields [in your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/), as well as search and filter users by CRM tags.

### Syncing custom fields

When Users Insights is active, an additional section will appear on the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2020/04/user_insights-1024x259.png)

This section will list any custom fields you have created with Users Insights. When a user registers or updates their profile, any enabled fields will be synced to your CRM.

### Search and filter by tags

In the main [Users Insights users table](https://usersinsights.com/wordpress-users-smart-filters/), WP Fusion adds a new smart filter for users’ tags in your CRM.

![](https://wpfusion.com/wp-content/uploads/2020/04/users-insights-tag-filter-1024x390.jpg)

You can select *tags includes* or *tags does not include* along with a tag, to show only users who have (or don’t have) the selected tag.

---

## PilotPress

**Source:** [https://wpfusion.com/documentation/membership/pilotpress/](https://wpfusion.com/documentation/membership/pilotpress/)

### Overview

[PilotPress](https://wordpress.org/plugins/pilotpress/) is a membership plugin [created by Ontraport](https://wpfusion.com/go/ontraport), it lets you build a membership site in WordPress, and you can create a portal where customers can manage their Ontraport orders.

PilotPress also allows you to host a partner center in WordPress, where partners can view their earnings and update their personal information.

![](https://wpfusion.com/wp-content/uploads/2020/04/pilotpress-partner-center-1024x921.jpg)The PilotPress partner center page in WordPress
WP Fusion is tested with PilotPress and the two plugins can be used together, but it’s recommended *not to use PilotPress* if you can avoid it.

### Difficulties with PilotPress

The main problem with PilotPress is that it authenticates user logins against the members portal in Ontraport, not WordPress.

This introduces several complications:

- **Someone can log into WordPress, but not be logged in to PilotPress.** They may have to log in a second time to access their customer portal or partner center.
- **PilotPress can only understand user logins via /wp-login.php** or a page with the [login_page] shortcode on it. If someone logs in via WooCommerce or another membership plugin, PilotPress will not recognize them.
- **PilotPress needs to connect to Ontraport to authenticate logins**, meaning if Ontraport is slow or the API is offline your users won’t be able to log in.
- Because passwords are stored in Ontraport, **your users may end up with two different passwords**, one for WordPress and one for PilotPress. This creates some complicated scenarios with passwords that need to be planned for:
- If someone resets their password via WooCommerce or another plugin, and tries to log in via a PilotPress login form, their login will fail.
- If someone resets their password via PilotPress and tries to log in via WooCommerce or another plugin, their login will fail.
- If people have been logging in via PilotPress and you deactivate the PilotPress plugin, WordPress will revert to handling logins. Because their WordPress password is different than their PilotPress password, users may need to reset their passwords before they can log in again.

![](https://wpfusion.com/wp-content/uploads/2020/04/pilotpress-customer-center-1024x942.jpg)A user who logs into WordPress via another plugin may needs to log in again with their Ontraport credentials to access the PilotPress Customer Center

### Using WP Fusion with PilotPress

There are a few strategies for using PilotPress depending on the complexity of your site.

#### Very simple website

If you have a very simple website, i.e. no ecommerce plugins and no membership plugins, you can let PilotPress manage all user accounts. In this scenario you need to make sure that the only page you’re using for login is either the standard /wp-login.php, or a page with PilotPress’ [login_page] shortcode on it.

Anything that customizes the login process (i.e. LoginPress) will likely interfere with PilotPress. Likewise anything that affects login security (i.e. iThemes Security or WordFence), may prevent password resets from working.

In this scenario all logins are handled by PilotPress and passwords are checked against the members center in Ontraport. To reset a user’s password, you need to reset it in Ontraport via the members center, or the user must click the Forgot Password link on the PilotPress login form.

![](https://wpfusion.com/wp-content/uploads/2020/04/ontraport-memberships-portal-1024x555.jpg)

Password resets in the WordPress admin or via a WordPress reset password link will not work.

Once the user is logged in they will be able to access their PilotPress Customer Center or Partner Center.

WP Fusion will still recognize a user who has logged in via PilotPress and can [unlock content using Ontraport tags](https://wpfusion.com/documentation/getting-started/access-control/) and apply tags normally as if it were a real WordPress login.

#### More complex websites

If you’re selling anything on your website via WooCommerce or another ecommerce plugin, delivering courses using an LMS, or running a membership plugin (i.e. BuddyPress) you will probably want to bypass PilotPress’ login process.

The reason is that a user may have one password for PilotPress and another for WordPress. So if they’ve reset their password via the PilotPress [login_page] shortcode and then come back later to make a purchase in WooCommerce, that password won’t allow them to log in to WooCommerce.

They will then reset their password for WooCommerce and the rest of WordPress, but later be unable to log into PilotPress until they reset their password yet another time.

The first question is, **do you need PilotPress at all?**

If you’re not using the PilotPress customer center or partner center, then the best solution is to deactivate PilotPress and let WordPress handle logins.

#### If you do need PilotPress for some features

If you need PilotPress for some features, first you need to establish control over where people are logging in to avoid passwords getting out of sync.

For example if you’re running a WooCommerce store, you can remove the PilotPress login page and block access to /wp-login.php so people can only log in via WooCommerce’s My Account page.

Then if you need PilotPress in order to let your partners access their partner center and see their earnings, you can send your partners directly to the Affiliate Center page on your site, which includes its own PilotPress login form. This reduces the chances of regular users using the wrong login form.

To simplify things further, one solution is to have a separate contact record in Ontraport for each partner with a unique email address (separate from their normal user account on your site).

Then you can tell your partners that to access their portal they can go directly to the Affiliate Center page on your site and log in with the username and password you generated for them in Ontraport. This way your partners have two accounts: one for your affiliate area and one for the rest of your site, and will hopefully reduce confusion about which account to use on which login form.

---

## Teams for WooCommerce Memberships

**Source:** [https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/)

### Overview

In addition to supporting [WooCommerce Memberships](https://woocommerce.com/products/woocommerce-memberships/), WP Fusion also includes support for the [Teams for WooCommerce Memberships](https://wpfusion.com/go/teams-woocommerce-memberships) extension.

### Tagging team members

When this extension is active, an additional **Team Membership**section will appear on the WP Fusion panel when editing your team membership products.

![](https://wpfusion.com/wp-content/uploads/2020/03/woo-memberships-teams-1.jpg)

There are three options:

- **Apply tags to team members:** These tags will be applied in your CRM when a user is added to a team and accepts the invite.
- **Remove tags:** If this option is checked, the team member tags will be removed when members are removed from the team.
- **Remove tags – Cancelled:**If this option is checked, the team member tags will be removed when the team owner’s membership is cancelled.

#### Teams auto-enrollment

When editing any single team, a WP Fusion meta box will appear where you can configure team auto-enrollment.

![](https://wpfusion.com/wp-content/uploads/2020/03/Screenshot-2024-04-23-at-3.32.52-PM.png)

There is one option:

- **Link tag:**This setting allows you to link a tag with team enrollment— when the tag is applied in your CRM, the user is automatically added to the team. If the tag is removed, they will be removed from the team.

### Syncing team membership fields

WP Fusion adds a few “pseudo” fields for sync with Teams for WooCommerce Memberships. These are found at Settings » WP Fusion » Contact Fields » WooCommerce Memberships.

![](https://wpfusion.com/wp-content/uploads/2020/03/woo-memberships-teams-fields-1024x285.jpg)

Those fields are:

- **Memberships for Team Role:** This will contain the role of the member on the team (for example “member” or “owner”), and will be synced when a user joins a team or when their team role is changed.
- **Memberships for Teams Team Name:**This value will be synced whenever a user joins a team, and will contain the name of that team. This can be used to create segments in your CRM based on individual team memberships.

### Syncing historical data

WP Fusion includes two batch export tools for Teams for WooCommerce Memberships that can retroactively sync team information to your CRM and team enrollment from before you installed WP Fusion.

These can be found at Settings » WP Fusion » Advanced » Batch Operations.

Select the **WooCommerce Memberships for Teams team meta** option and click the Create Background Task button to export team data to your CRM. For each member who is part of a team, WP Fusion will sync the team name and that member’s role in the team to the corresponding custom fields in your CRM.

Select the **WooCommerce Memberships for Teams team tags**option and click the Create Background Task button to sync tags configured on your teams. For each member who is part of a team, WP Fusion will sync the tags set on the team to the user.

---

## Toolset User Forms

**Source:** [https://wpfusion.com/documentation/membership/toolset-user-forms/](https://wpfusion.com/documentation/membership/toolset-user-forms/)

### Overview

WP Fusion includes support for [Toolset (CRED) user forms](https://toolset.com/home/cred/).

Any fields you’ve created on your user forms will show up under Settings » WP Fusion » Contact Fields. From here you can associate the Toolset fields with fields in your CRM.

When a user registers or updates their data via a Toolset form, any enabled fields will be synced automatically to your CRM.

---

## Profile Builder Pro

**Source:** [https://wpfusion.com/documentation/membership/profile-builder-pro/](https://wpfusion.com/documentation/membership/profile-builder-pro/)

### Overview

WP Fusion integrates with [Profile Builder Pro](https://www.cozmoslabs.com/wordpress-profile-builder/) to keep users in sync between your WordPress site and your CRM.

All new users who register via Profile Builder Pro will be instantly added to your CRM, with all data provided at registration. Profile updates are also synced.

![](https://wpfusion.com/wp-content/uploads/2018/11/profile-builder-pro-1024x138.jpg)

Any custom fields you add to registration or profile forms will also be detected, and will be available for sync in the WP Fusion settings.

---

## ProfilePress

**Source:** [https://wpfusion.com/documentation/membership/profilepress/](https://wpfusion.com/documentation/membership/profilepress/)

### Overview

WP Fusion integrates with [ProfilePress](https://profilepress.com/) to keep members in sync between your membership site and your CRM.

### Syncing members and custom fields

All new users who register via ProfilePress will be instantly added to your CRM, with all data provided at registration. Profile updates are also synced.

![](https://wpfusion.com/wp-content/uploads/2018/04/propress-1.png)

Any custom fields you add to your ProfilePress user profiles (using the Extended Profiles Add-on) will also be detected and will be available for sync in the WP Fusion settings.

### Registration tagging

In addition, WP Fusion lets you tag and track users based on what registration form they use upon signing up. You can find the settings for WP Fusion under ProfilePress » WP Fusion in your WordPress admin.

![](https://wpfusion.com/wp-content/uploads/2018/04/propress2-2.png)

From the settings page, you’ll see each of your Registration Forms displayed in a table and the option to apply tags to each specific form.

---

## PeepSo

**Source:** [https://wpfusion.com/documentation/membership/peepso/](https://wpfusion.com/documentation/membership/peepso/)

### Overview

WP Fusion integrates with [PeepSo](https://wpfusion.com/go/peepso) to keep members in sync between your membership site and your CRM.

All new users who register via PeepSo will be instantly added to your CRM, with all data provided at registration. Profile updates are also synced.

![](https://wpfusion.com/wp-content/uploads/2018/03/peepso-1024x294.jpg)

Any custom fields you add to your PeepSo user profiles (using the Extended Profiles Add-on) will also be detected and will be available for sync in the WP Fusion settings.

#### Groups

WP Fusion also integrates with the Groups addon for PeepSo. You can access the Groups settings by clicking WP Fusion in the main PeepSo menu.

![](https://wpfusion.com/wp-content/uploads/2018/03/peepso-groups-1024x359.jpg)

For each of your groups, you can select a tag to be “linked” with that group. When the tag is applied, the user will be added to the group. When the tag is removed, the user will be removed from the group.

---

## WishList Member

**Source:** [https://wpfusion.com/documentation/membership/wishlist-member/](https://wpfusion.com/documentation/membership/wishlist-member/)

### Overview

WP Fusion integrates with [WishList Member](https://wpfusion.com/go/wishlistmember) to bring the power of [your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) to your WordPress membership platform.

When a user checks out on your WishList Member site, their contact details will automatically be added to [your CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/). WP Fusion also supports detecting and syncing any custom fields you add to WishList registration  and profile forms.

### Settings

WP Fusion adds a settings page under the main WishList Member menu in the admin, where you can configure tags for each of your membership levels.

![](https://wpfusion.com/wp-content/uploads/2017/12/wishlist-member-1-1024x430.jpg)

For each level, there are three options:

- **Apply Tags:**When the customer purchases a membership, these tags will be applied in your CRM. This is the default behavior.
- **Link with Tag:**Most sites won’t require this, but it is available as an option for those that need it. This setting allows you to select a tag that becomes *linked*with the membership level. If this tag is applied to a user, for example via a webhook, they will be automatically enrolled in the membership. Likewise if this tag is removed, they will be removed from the membership. This lets you automate individual users’ membership levels using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).
- **Apply Tags – Cancelled:**These tags will be applied in your CRM when the membership is cancelled for the user.

### Pay Per Post tagging

When editing any piece of content in the admin, WishList Member adds a metabox where you can configure [Pay Per Post settings](https://help.wishlistproducts.com/knowledge-base/pay-per-post/) for that content.

![](https://wpfusion.com/wp-content/uploads/2017/12/wishlist-member-pay-per-post-1024x301.jpg)

With WP Fusion active, you’ll see an additional tab with the option **Apply tags – Pay Per Post**.

Any tags specified here will be applied to the member in your connected CRM when the content is purchased via Pay Per Post.

### Batch Operations

WP Fusion includes a batch processing tool to retroactively apply tags in your CRM based on each user’s current membership level in WishList Member. This is found at Settings » WP Fusion » Advanced » Batch Tools.

![](https://wpfusion.com/wp-content/uploads/2017/12/wishlist-member-batch-operation-1024x646.jpg)

When you run the **WishList membership statuses** operation, WP Fusion will check the current membership level for each of your users and apply any tags configured for that membership level.

---

## WooCommerce Memberships

**Source:** [https://wpfusion.com/documentation/membership/woocommerce-memberships/](https://wpfusion.com/documentation/membership/woocommerce-memberships/)

### Overview

Using WP Fusion with [WooCommerce Memberships](https://wpfusion.com/go/woocommerce-memberships), you can apply tags in your CRM based on the status of a user’s membership, as well as automate membership level enrollments by applying a tag in your CRM.

**Note:** If you’re using WooCommerce Memberships in conjunction with [WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/), and you’ve already configured tags for the subscription product, then there is no need to specify additional tags on the membership plan, and it may result in unexpected behavior.

### Settings

To configure the settings, navigate to WooCommerce » Memberships » Membership Plans, click Edit on any membership plan, and select the WP Fusion settings panel.

![](https://wpfusion.com/wp-content/uploads/2017/08/woo-memberships-3-966x1024.jpg)

#### Automated enrollment

You can automate enrollments in a membership level by specifying a “linked tag” in the **Link with tag** box.

If this tag is applied to a user, they will automatically be enrolled in the membership. Likewise, if this tag is removed, their membership status will be paused.

When a user is given this membership level, either via a WooCommerce purchase or manual assignment, the selected tag will also be applied.

**Note:**This is only necessary if you are selling membership access via an outside system (like ThriveCart) and wish to automatically set and pause membership levels. If you’re selling access via WooCommerce it’s preferable to configure any tags to be applied via [the WooCommerce product](https://wpfusion.com/documentation/ecommerce/woocommerce/).

#### Active memberships

Any tags specified in the **Apply tags** setting will be applied to the user when a new membership is created, or a membership status is changed to active (either a status of Active, Free Trial, or Complimentary).

![](https://wpfusion.com/wp-content/uploads/2017/08/woo-memberships-active-1-1024x208.jpg)

Optionally you can check the box for **Remove tags** to automatically remove those tags when a membership is paused, expires, or is fully cancelled.

#### Additional statuses

Here you can configure additional tags to be applied based on specific membership statuses. For more details on the meanings of the statuses see [this documentation from WooCommerce](https://docs.woocommerce.com/document/woocommerce-memberships-user-memberships/#section-4).

If a user was tagged as either Cancelled, Expired, or Paused, and their membership is reactivated, the tags for the previous status will be removed.

### Syncing membership fields

WP Fusion also supports syncing a member’s expiration date and current membership status to a custom fields in your CRM.

To set this up go to Settings » WP Fusion » Contact Fields and enable the fields under the **WooCommerce Memberships** header for sync.

![](https://wpfusion.com/wp-content/uploads/2017/08/woo-memberships-fields-1-1024x390.jpg)

- **Membership Status:**When a membership is purchased, manually edited, or the membership status changes the status will be synced to your CRM
- **Membership Expiration Date:**For membership plans with a fixed expiration date, this field will sync the expiration date to your CRM. Note that this is not the member’s next payment date, for syncing the next payment date, enable the [Next Payment Date field](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#syncing-subscription-fields) in the WooCommerce Subscriptions integration.

If you’ve created custom [membership profile fields](https://woocommerce.com/document/woocommerce-memberships-profile-fields/), you can also map them with CRM fields here. They will be synced whenever the member’s profile is updated.

#### Plan-specific field mapping

Membership fields can also be enabled for sync on a per-plan basis. This lets you sync the status and expiration date to separate custom fields in your CRM for situations where members have multiple concurrent memberships.

![screenshot](https://wpfusion.com/wp-content/uploads/2017/08/woocommerce-memberships-plan-fields-1024x215.jpg)Membership fields can be enabled for sync on a per-plan basis by selecting custom fields in your CRM when editing any membership plan.
Membership fields can be enabled for sync on a per-plan basis by selecting custom fields in your CRM at the bottom of the WP Fusion settings panel when editing any membership plan.

### Batch operations

WP Fusion includes two batch processing tool for WooCommerce memberships, under Settings » WP Fusion » Advanced » Batch Operations.

These can be used to sync data to your CRM from before you installed WP Fusion, or to bulk-update tags after you’ve changed the WP Fusion settings on your membership plans.

![](https://wpfusion.com/wp-content/uploads/2017/08/woo-memberships-batch-operation-1024x549.jpg)

The two operations are:

- **WooCommerce Memberships statuses:**For each user membership, WP Fusion apply tags in your CRM based on the membership plan and status, using the settings configured on the membership. This does not create any contact records or sync any fields.
- **WooCommerce Memberships meta:**For each user membership, WP Fusion will sync the membership name, status and expiration date (if applicable) to the selected custom fields in your CRM. This does not create any contact records, or apply any tags.

---

## Simple Membership

**Source:** [https://wpfusion.com/documentation/membership/simple-membership/](https://wpfusion.com/documentation/membership/simple-membership/)

WP Fusion integrates with the [Simple Membership](https://simple-membership-plugin.com/) membership platform to keep members in sync between your membership site and your CRM. All new users who register via Simple Membership or purchase a membership will be instantly added to your CRM, with all data provided at registration.

![](https://wpfusion.com/wp-content/uploads/2017/08/simple-membership-level-edit-1024x698.jpg)

For each membership level, you can also specify tags to be applied to the user at registration. You can use these tags to trigger additional automations like welcome emails, follow up sequences, and much more.

---

## s2Member

**Source:** [https://wpfusion.com/documentation/integrations/s2member/](https://wpfusion.com/documentation/integrations/s2member/)

WP Fusion integrates with the [s2Member](http://s2member.com/) membership platform to keep customers in sync between your membership site and your CRM. All new users who register via s2Member or purchase a membership will be instantly added to your CRM, with all data provided at registration (including support for custom fields).

Future updates to a user’s profile will also automatically be synced, based on the fields configured in the WP Fusion Contact Fields settings.

![s2member-custom-fields](https://wpfusion.com/wp-content/uploads/2016/12/s2member-custom-fields-1024x177.jpg)

WP Fusion also lets you associate s2Member membership levels with tags in your CRM. When a user purchases or signs up for a membership level, the corresponding tags will automatically be applied. You can use these tags to trigger follow up sequences and other automations in your CRM.

![s2member-config](https://wpfusion.com/wp-content/uploads/2016/12/s2member-config-1024x645.jpg)

Tag configurations for membership levels can be accessed under the **Integrations** tab of the WP Fusion settings page.

---

## MemberPress

**Source:** [https://wpfusion.com/documentation/membership/memberpress/](https://wpfusion.com/documentation/membership/memberpress/)

### Overview

WP Fusion provides a bi-drectional integration between [MemberPress](https://wpfusion.com/go/memberpress) and any one of [50+ supported CRMs and marketing automation systems](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

When a user checks out on your MemberPress site, their contact details will automatically be added to [your CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/), including support for custom fields.

WP Fusion also supports applying tags in your CRM based on each member’s membership level and subscription status.

As well, WP Fusion can automatically import users from contact records in your CRM and auto-assign membership levels based on tags.

### Tagging

When configuring a membership level, you can click on the WP Fusion tab to configure any tags you’d like applied when the membership is purchased and when subscription and transaction statuses change.

![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-3-680x1024.jpg)

There are quite a few settings here (twelve in total):

- **Apply Tags:**When the customer purchases a membership, these tags will be applied in your CRM. These tags will also be re-applied when an expired membership becomes active again, or if a renewal payment is received and the user no longer has the tags.
- **Remove Tags:**When this setting is checked, the tags applied at registration will be removed when a membership expires or is changed to a different level. The tags applied at registration will be re-applied if the membership is resumed.
- **Link With Tag:***See below*
- **Apply Tags – Subscription Cancelled:**These tags will be applied immediately when a subscription is cancelled by an admin or a user (even if there is time left in the subscription). They will be removed if the membership is resumed.
- **Apply Tags – Subscription Paused:**These tags will be applied when a subscription is paused. They will be removed when the subscription is reactivated.
- **Apply Tags – Subscription Resumed:**These tags will be applied when a paused subscription is reactivated.
- **Apply Tags – Upgraded:**These tags will be applied when a member upgrades to *this* membership level.
- **Apply Tags – Downgraded:**These tags will be applied when a member downgrades to *this* membership level.
- **Apply Tags – Subscription Payment Failed:**These tags will be applied when a payment fails as part of a recurring transaction. They will be removed if a successful payment is made later.
- **Apply Tags – Trial****:**These tags will be applied when someone signs up for a subscription with a trial period.
- **Apply Tags – Subscription Converted****:**These tags will be applied when a trial converts to a full subscription (i.e. when a transaction is recorded on the subscription after the trial has ended).
- **Apply Tags – Transaction Refunded:**These tags will be applied when a transaction is refunded.
- **Apply Tags – Transaction Expired:**These tags will be applied when a transaction expires, including when a cancelled subscription reaches the end of its billing cycle. They will be removed if the membership is resumed.

#### Link with Tag / Membership Auto-enrollment

Most sites won’t require this, but it is available as an option for those that need it. This setting allows you to select a tag that becomes *linked* with the membership level.

If this tag is applied to a user they will be automatically enrolled in the membership. Likewise if this tag is removed, they will be removed from the membership.

This lets you automate individual users’ membership levels using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).

When WP Fusion detects that the linked tag has been applied, a free transaction will be created in MemberPress in order to grant access to the membership. When the linked tag is removed the original transaction will be deleted.

#### A note on membership level changes

With most of WP Fusion’s membership plugin integrations (like [Paid Memberships Pro](https://wpfusion.com/documentation/membership/paid-memberships-pro/) or [WooCommerce Memberships](https://wpfusion.com/documentation/membership/woocommerce-memberships/)), WP Fusion watches for a membership level change for a user, and applies the specified tags at that time.

MemberPress is a bit different in that by default, it supports [multiple memberships](https://memberpress.com/blog/membership-multiplicity/). That means that a user isn’t “at” one membership level. Instead, when they try to access something, MemberPress looks at their history of transactions and subscriptions and determines in real time whether the member has the necessary permissions.

This gives you a lot more flexibility than a “traditional” membership plugin, but it can make WP Fusion hard to work with because tag changes aren’t necessary tied to membership level changes.

As an example, let’s say a member is a *Premium Member*, and their access expires so they revert to a *Free Member*. In this case, the *Apply Tags – Transaction Expired* tags will be applied for the *Premium Member* level, but no tags from the *Free Member* level will be applied.

That’s because the customer didn’t actually make a purchase, register, or start a new subscription on the *Free Member* membership— it’s just the level they have when no other level is taking priority.

With that in mind, it’s helpful to understand exactly when WP Fusion can apply tags and sync member data:

- When a member signs up for a new account at a membership level
- When a subscription status changes (to/from 
```
active
```

, 
```
cancelled
```

, and 
```
suspended
```

)
- When a recurring transaction fails
- When a transaction expires (usually when a subscription isn’t renewed and the access period ends)
- When a transaction is made to upgrade a subscription
- When a transaction is made to downgrade a subscription

#### Concurrent subscriptions

To prevent a customer from potentially losing access to purchased products, WP Fusion handles concurrent subscriptions in two ways:

- If a customer’s subscription is canceled and they still have another active subscription to the same membership, the status change will be ignored.
- If a customer’s subscription is canceled, put on hold, or expired, and Remove Tags is checked on the membership, WP Fusion will first check their other active memberships to see if they apply the same tags. Any tags applied by memberships where the customer still has an active subscription will not be removed.

#### Corporate Accounts

WP Fusion also supports the [Corporate Accounts addon](https://memberpress.com/add-ons/corporate-accounts/) for MemberPress. When this addon is detected a new setting will appear at the bottom of the WP Fusion settings when editing any membership level.

![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-corporate-accounts-1-1024x512.jpg)

Here you can specify tags to be applied to members who are added as sub-accounts to the corporate account.

You can check the **Remove tags** checkbox to have the selected tags automatically removed from sub-account members if the parent membership is cancelled.

In addition to applying tags, you can also sync the email address of the corporate account parent to the contact record for new sub-accounts, by enabling the **Corporate Account Parent Email** field for sync from the Contact Fields settings.

This can be used to quickly identify the account parent while looking at a sub-account’s contact record in your CRM.

### Transaction management

When editing any MemberPress transaction in the admin, you will see a section indicating that transaction’s status with WP Fusion.

![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-single-transaction-wpf-details-1024x551.jpg)WP Fusion adds a section to your MemberPress transaction details with links to the member’s record in your CRM, and invoice ID (when using Enhanced Ecommerce).
The meta box will show whether or not the transaction was processed by WP Fusion, and the customer’s contact ID in your CRM.

If you’re using the [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) you will also see the corresponding invoice ID (or order ID) in your CRM’s sales pipeline.

To manually process a transaction again (for example to fix an invalid field value), click the **Process WP Fusion actions again** button.

#### Transaction status column

WP Fusion adds a status column to the MemberPress transactions table. Hovering over the icon will display a tooltip which tells you when the order was processed by WP Fusion, and also gives you a link to view the customer’s contact record in your CRM.

![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-transactions-list-1024x499.jpg)

The icon can change colors depending on the status of the sync with your CRM:

- If the icon is orange, the transaction was fully processed by WP Fusion.
- If the icon is grey, the transaction was not processed by WP Fusion
- If the icon is half-filled, this means that a contact record was created, but the [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) didn’t successfully process the order.

If you don’t want to see transaction sync statuses in the table, you can disable it by un-checking the **WP Fusion Status** checkbox in the Screen Options menu at the top of the page.

### Coupons

WP Fusion also allows to to apply tags to the new contact when a specific coupon is used at checkout.

![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-coupons-1024x257.jpg)

You’ll see the new settings box when editing any MemberPress coupon.

### Syncing MemberPress fields

With MemberPress installed, you’ll see additional fields under the MemberPress section in the [Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-fields-1-1024x693.jpg)

Here you will see all of the standard MemberPress registration fields, **as well as any custom registration fields or profile fields**.

**Note:** With multiselect and multi-checkbox custom fields, WP Fusion will sync the selected option labels by default. If your CRM supports multiselect fields with separate label and value properties, you can change the field type to *multiselect (values)* in the field type dropdown in the [Contact Fields settings](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).
Each field can be synced to your CRM by selecting a corresponding custom field in the dropdown in the right column.

In addition to the standard fields, WP Fusion can sync several pseudo-fields relevant to a member’s membership level. Those are:

- **Membership Level Name:**The name of the current membership level (if users have multiple memberships this will be the name of the most recent membership).
- **Membership Status:**This will be either 
```
Active
```

, 
```
Inactive
```

, or 
```
None
```

 based on the member’s current subscriptions and transactions.
- **Subscription Status:**This will be either 
```
pending
```

, 
```
active
```

, 
```
suspended
```

, or 
```
cancelled
```

 and will be synced whenever a subscription’s status changes.
- **Subscription Total:**The recurring subscription total.
- **Transaction Status:**This will be either 
```
pending
```

, 
```
complete
```

, 
```
failed
```

, or 
```
refunded
```

 and will be synced whenever a transaction is created or its status changes.
- **Transaction Number:**The transaction number, for example 
```
mp-txn-64c1239786f80
```

 or 
```
bbapp_3MYV2vH1J3FRLhcC1DGUMHEu
```
- **Transaction Total:**The transaction total.
- **Order Total:**This will be the total amount of the member’s most recent transaction.
- **Registration Date:**The date of the member’s most recent subscription or transaction.
- **Expiration Date:**The membership’s expiration date, or scheduled renewal date in the case of subscriptions. Will be updated with each renewal payment.
- **Trial Duration (days):**If a subscription is purchased with a free trial, the number of days in the trial will be synced.
- **Payment Method:**The name of the payment method used for the member’s most recent transaction.
- **Coupon Used:**If the member signed up with a coupon, the name of the coupon will be synced.
- **Total Spent:**The member’s lifetime value.

By syncing this data to your CRM you can trigger email sequences to follow up with a member as their expiration date is approaching, or create rewards for members who have been with you for a long time.

#### Syncing fields on a per-product basis

You can also map membership-related fields to separate custom fields in your CRM on a per-product basis. This can be configured on the WP Fusion Fields tab when editing any membership product.

![screenshot of a membership options settings page showing fields like membership level, status, registration date, subscription status, transaction total, payment method, and more, with dropdowns for selection under wp fusion fields tab.](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-product-fields-1024x813.jpg)

This feature allows you to keep track of start dates, expiration dates, and other membership details even when users have multiple concurrent memberships.

### MemberPress Courses

WP Fusion supports applying tags to your CRM based on a member’s progress in a course with MemberPress Courses.

While editing any course, lesson, or quiz, you will see the WP Fusion settings alongside the MemberPress access settings for the content.

![](https://wpfusion.com/wp-content/uploads/2023/06/mpcs-screenshot-1.jpg)WP Fusion settings on MemberPress courses.
![](https://wpfusion.com/wp-content/uploads/2023/06/mpcs-lesson-feature-screenshot.jpg)WP Fusion settings on MemberPress lessons.
![](https://wpfusion.com/wp-content/uploads/2023/06/mpcs-quiz-feature-screenshot.jpg)WP Fusion settings on MemberPress quizzes.
The available settings are are:

- **Course Complete:**Applies the selected tag(s) when the course is completed.
- **Lesson Complete:**Applies the selected tag(s) when the lesson is completed.
- **Quiz Pass:**Applies the selected tag(s) when the member scores 50% or higher on the quiz.
- **Quiz Fail:**Applies the selected tag(s) when the member scores less than 50% on the quiz.

### Abandoned cart tracking

WP Fusion’s [Abandoned Cart addon](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/) (available to Plus and Professional license holders) can capture customer details on the MemberPress checkout form and sync them to your CRM before checkout has been completed.

You can then use tags and automations in your connected CRM to follow up with customers who started but didn’t complete checkout.

With MemberPress, cart abandonment tags can be set on the WP Fusion tab when editing any membership level.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-memberpress-1024x634.jpg)

#### General settings

With MemberPress you also have the option to delay WP Fusion’s abandoned cart actions until after the first step of the checkout has been submitted.

This can be enabled by selecting **Trigger on Submit** at Settings » WP Fusion » Addons » Abandoned Cart Tracking.

![](https://wpfusion.com/wp-content/uploads/2016/06/memberpress-abandoned-cart-general-settings-1024x203.jpg)

This is designed to fix situations where a user’s browser might autofill an incorrect email address on the checkout, which then triggers the abandoned cart actions.

### Enhanced Ecommerce

WP Fusion’s [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) (available to Plus and Professional license holders) can sync MemberPress transactions to [supported CRMs and email marketing platforms](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/).

![](https://wpfusion.com/wp-content/uploads/2023/07/MemberPress-transactions-Drip.png)MemberPress transctions are shown in the Drip subscriber’s orders feed
With MemberPress, the Ecommerce Addon will send enhanced ecommerce data for all transactions, including recurring subscription payments.

**Note:** If you wish to disable syncing free transactions with your CRM (for example, a membership that is automatically granted to all users at registration), check the box for **Ignore Free Transactions** at Settings » WP Fusion » Enhanced Ecommerce.

#### Products

In CRMs that have Products as separate entities from Orders, you can associate your MemberPress membership products with CRM products by selecting them from the product dropdown while editing the membership level.

![](https://wpfusion.com/wp-content/uploads/2016/06/memberpress-ecom-1024x549.jpg)

#### Sales pipelines

With CRMs that support sales pipelines, like Brevo, HighLevel, HubSpot and Zoho, you can also map MemberPress transaction statuses with individual pipelines and stages.

This can be found under the [Enhanced Ecommerce settings](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/).

![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-transaction-statuses-1024x463.jpg)Map MemberPress transaction statuses to HubSpot pipelines with WP Fusion.
When the transaction status is updated in MemberPress, the deal stage will be updated in your CRM.

#### Supported platforms

		The CRMs supported by Enhanced Ecommerce are listed below. Click on each to learn more about the capabilities of the integration.

- [ActiveCampaign](https://wpfusion.com/documentation/ecommerce-tracking/activecampaign-ecommerce/)
- [AgileCRM](https://wpfusion.com/documentation/ecommerce-tracking/agilecrm-ecommerce/)
- [Brevo](https://wpfusion.com/documentation/ecommerce-tracking/brevo-enhanced-ecommerce/)
- [Drip](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/)
- [Groundhogg](https://wpfusion.com/documentation/ecommerce-tracking/groundhogg-ecommerce/)
- [HighLevel](https://wpfusion.com/documentation/ecommerce-tracking/highlevel-ecommerce/)
- [HubSpot](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/)
- [Infusionsoft / Keap](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/)
- [MailerLite](https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/)
- [NationBuilder](https://wpfusion.com/documentation/ecommerce-tracking/nationbuilder-ecommerce/)
- [Ontraport](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/)
- [Salesforce](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/)
		

### Batch Operations

WP Fusion includes a few MemberPress-specific batch operations, these can be found on the Advanced tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-batch-ops-1024x521.jpg)

These are useful for syncing member data to your CRM from before you installed WP Fusion, or to retroactively tag all your members based on the current tag configuration.

The available options are:

- **MemberPress subscription data:** Syncs the registration date, expiration date, and membership level name for all existing MemberPress subscriptions. Does not modify tags or create new contact records.
- **MemberPress transaction data:** Syncs the registration date, expiration date, payment method, and membership level name for all existing MemberPress transactions. Does not modify tags or create new contact records.
- **MemberPress memberships statuses:** Updates the tags for all members based on their current membership status. Does not create contact records.
- **MemberPress transactions (Ecommerce addon):**With the [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/#memberpress), this operation syncs historical transactions as orders (or deals, invoices, etc.) to your CRM.

---

## Restrict Content Pro

**Source:** [https://wpfusion.com/documentation/membership/restrict-content-pro/](https://wpfusion.com/documentation/membership/restrict-content-pro/)

### Overview

WP Fusion works with [Restrict Content Pro](https://wpfusion.com/go/restrict-content-pro) to sync customers with [your CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they register or purchase a subscription.

You can sync data collected on your registration form to custom fields in your CRM, and apply tags based on membership level and subscription status.

You can also automatically add users to membership levels by applying “linked tags” in your CRM.

### Membership Tagging

You can apply tags in your CRM based on the RCP membership level purchased, and automatically grant membership levels to users by linking membership levels with a CRM tag.

![](https://wpfusion.com/wp-content/uploads/2016/09/rcp-membership-level-2-1024x351.jpg)

There are three options:

- **Apply Tags:**When the customer purchases a membership, these tags will be applied in your CRM. This is the default behavior.
- **Remove Tags:**When this box is checked, the tags applied at checkout will be removed when a membership expires.
- **Link with Tag:**Most sites won’t require this, but it is available as an option for those that need it. This setting allows you to select a tag that becomes *linked* with the membership level. If this tag is applied to a user, for example via a webhook, they will be automatically enrolled in the membership. Likewise if this tag is removed, they will be removed from the membership. This lets you automate individual users’ membership levels using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).

#### Additional status tagging

WP Fusion also supports applying tags based on specific statuses of memberships. This is in addition to the more general *Apply Tags* setting, and can be used to trigger emails from your CRM based on changes in a member’s status.

![](https://wpfusion.com/wp-content/uploads/2016/09/rcp-status-tagging-1024x839.jpg)

The status tags will generally not be removed, *unless*a member’s status changes back to Active. For example:

- If a customer has a failed renewal payment, and then cancels their membership, they will be tagged with both *Payment Failed* and *Membership Cancelled*
- If a customer has a failed renewal payment, but then has a successful payment and their status comes back to Active again, the *Payment Failed* tag will be removed, and they will only be tagged as *Membership Active*
- If a customer cancels their membership but then resumes it again, the *Membership Cancelled* tag will be removed, and they will only be tagged as *Membership Active*

### Syncing meta fields

WP Fusion makes several meta fields related to Restrict Content Pro memberships available for syncing with your CRM.

![](https://wpfusion.com/wp-content/uploads/2016/09/rcp-fields-1024x363.jpg)

You can find these fields and enable them for sync from the Contact Fields tab in the WP Fusion settings.

### Groups

Using the Restrict Content Pro [Group Accounts add-on](https://restrictcontentpro.com/downloads/group-accounts/) unlocks additional options for tagging your group members in your CRM.

![](https://wpfusion.com/wp-content/uploads/2016/09/rcp-groups-1024x409.jpg)

When a member is added to a group, they will be automatically synced to a contact record in your CRM.

When editing a group, there are two options for tagging group members:

- **Apply Tags:**When a user is enrolled in the group, these tags will be applied in your CRM. This is the default behavior.
- **Link with Tag:**Most sites won’t require this, but it is available as an option for those that need it. This setting allows you to select a tag that becomes *linked* with the group enrollment. If this tag is applied to a user, for example via a webhook, they will be automatically enrolled in the group. Likewise if this tag is removed, they will be removed from the membership. This lets you automate individual users’ group enrollments using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).

#### Group meta fields

WP Fusion adds two additional fields for sync when the Groups Accounts addon is active, Group Leader Email and Group Name.

![](https://wpfusion.com/wp-content/uploads/2016/09/rcp-group-fields-1024x423.jpg)

These fields will be synced to your CRM when a user is added to a group:

- **Group Leader Email:**This field will be set to the email address of the group leader.
- **Group Name:**This field will be set to the name of the group.

### Exporting member data

WP Fusion includes an export utility that can export historical member data to your CRM (for example from before you installed WP Fusion).

![](https://wpfusion.com/wp-content/uploads/2016/09/rcp-export-1024x468.jpg)

This can be found under the Batch Operations heading on the Advanced tab of the WP Fusion settings.

When you run the **Restrict Content Pro members** operation all members will be tagged based on the tag settings for their current membership level. Any custom fields related to their membership and membership status will also be synced to your CRM.

#### Groups

If the Group Accounts addon is active, you will also see a **Restrict Content Pro group memberships** batch operation. Running this operation will apply the configured tags to every user based on their current group enrollments.

---

## BuddyPress

**Source:** [https://wpfusion.com/documentation/membership/buddypress/](https://wpfusion.com/documentation/membership/buddypress/)

### Overview

WP Fusion automatically syncs your [BuddyPress](https://buddypress.org/) members with leading [CRMs and marketing automation tools](https://wpfusion.com/documentation/faq/crm-compatibility-table/), and allows you to apply tags in your CRM based on member activity, as well as personalize the member experience using tags and automations in your CRM.

WP Fusion also supports the [BuddyBoss Platform](https://wpfusion.com/go/buddyboss) with the same features. For information on WP Fusion’s integration with BuddyBoss-specific functionality like the BuddyBoss App, Profile Types, and Member Access Controls, [see the BuddyBoss documentation](https://wpfusion.com/documentation/membership/buddyboss/).

### BuddyPress Themes

While BuddyPress works with most WordPress themes, some themes are specifically designed to enhance the BuddyPress experience:

#### BuddyBoss Theme

The [BuddyBoss theme](https://wpfusion.com/go/buddyboss) is a premium theme designed specifically for BuddyPress communities. It offers advanced styling, mobile responsiveness, and integrated social features that work seamlessly with WP Fusion’s access controls and tagging system.

#### BuddyX Theme

For those looking for an alternative to BuddyBoss, [BuddyX](https://wpfusion.com/go/buddyx) is an excellent choice. BuddyX is a modern, feature-rich BuddyPress theme that offers:

- Full BuddyPress compatibility with all WP Fusion features
- Modern, responsive design
- Customizable layouts and color schemes
- Integration with popular page builders
- Performance optimization
- Regular updates and support

BuddyX works perfectly with all WP Fusion functionality including access controls, automated enrollments, profile field syncing, and event tracking. You can [read our full review of BuddyX and its WP Fusion integration here](https://wpfusion.com/reviews/buddyx-theme-review-and-wp-fusion-integration/).

### Syncing custom fields

Any custom fields created with the BuddyPress XProfile fields editor will show up under the [Contact Fields](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) tab in the WP Fusion settings, and you can map them to any field in your CRM. Once selected, any updates to the user’s profile will automatically be synced.

![](https://wpfusion.com/wp-content/uploads/2016/06/buddypress-fields-1024x356.jpg)

### Groups

WP Fusion includes support for [BuddyPress Groups](https://buddypress.org/about/groups/) (and [BuddyBoss Groups](https://www.buddyboss.com/community/#section_2)). You can control access to groups via tags in your CRM, apply tags based on enrollments into groups, and auto-enroll users into groups based on tag changes.

#### Groups access control

Access control to groups is configured via the normal [WP Fusion access control meta box](https://wpfusion.com/documentation/getting-started/access-control/) in the sidebar when editing any group.

![](https://wpfusion.com/wp-content/uploads/2016/06/buddyboss-groups-inherit-access-rules-554x1024.jpg)

Note that if you are using [hierarchical groups](https://www.buddyboss.com/resources/docs/components/groups/group-hierarchies/), and no access rules are configured on the sub-group, the sub-group will inherit the access rules of the parent group.

#### Groups tagging settings

The settings for applying tags appear in the **WP Fusion – Group Settings** meta box when editing any group.

![](https://wpfusion.com/wp-content/uploads/2016/06/buddypress-groups-2-1024x570.jpg)

#### Groups auto enrollment

Using the **Link with Tag** feature, you can specify a tag to be “linked” to this group. When the user is added to the group, the tag will be applied. When the user is removed from the group, the tag will be removed.

Likewise, applying this tag to a user in your CRM or from another integration will automatically add the user to the group. **Removing the tag in your CRM (or if the user doesn’t have the tag) will remove the user from the group.**

**Note:** If a user removes themself from a group, this will also remove the linked tag (to prevent them from being immediately re-enrolled). For this reason it’s recommended to use a unique tag for groups auto-enrollment, so that the member doesn’t lose access to other content if they leave the group.

#### Group organizer auto-assignment

In addition to auto-enrolling group members, WP Fusion also has the ability to auto-assign group organizers based on a user’s tags in your CRM.

When the tag specified in the **Link with Tag – Group Organizer** setting is applied to a contact in your CRM, the user will be added to the group and promoted to organizer.

When the tag is removed, the user will be demoted from organizer to a regular member.

As well, setting a user as organizer of the group will automatically apply the linked tag in your CRM, and removing a user from the organizer role will also automatically remove the linked tag.

#### Group types

WP Fusion includes an option to apply tags when users are added to a group of a certain group type. This setting is found when editing any group type.

![](https://wpfusion.com/wp-content/uploads/2016/06/bp-group-types-1024x267.jpg)

### Profiles

#### Profile tab visibility

Using the [BuddyPress User Profile Tabs Creator plugin](https://buddydev.com/plugins/buddypress-user-profile-tabs-creator-pro/) you can add custom profile tabs to your BuddyPress or BuddyBoss user profiles.

![](https://wpfusion.com/wp-content/uploads/2016/06/bp-profile-tabs-visibility-1024x628.jpg)

WP Fusion includes an integration to allow you to customize profile tab visibility based on a member’s tags in your CRM.

To enable this, select one or more tags from the *Required tags (any)* input in the **WP Fusion – Profile Tab** meta box in the sidebar when editing any profile tab.

Once enabled, the user must have at least one of the specified tags to be able to see the profile tab. If they do not have any of the tags, the profile tab will be hidden.

### Activity Feeds

BuddyPress has an option to display an [activity feed](https://buddypress.org/about/activity/) of content on your site, such as forum activity, new courses / lessons published, and group activity.

![](https://wpfusion.com/wp-content/uploads/2016/06/BuddyBoss.png)

It’s important to keep in mind that content that’s protected by WP Fusion can still add an entry to the activity feed. For example a new lesson in a restricted course could still show up in a user’s feed.

You can prevent this by enabling [the Filter Queries setting](https://wpfusion.com/documentation/getting-started/access-control/#filter-queries), which will cause WP Fusion to personalize the activity feed based on the current user’s tags.

**However, keep in mind that this requires significant extra resources** in order to check the access rules for every item in the activity feed.

If you’re concerned about performance, it would be better to leave Filter Queries off, and consider [limiting the kinds of items that can appear in the activity feed](https://buddypress.org/about/activity/) in the BuddyPress settings, or [protecting the Activity page itself](https://wpfusion.com/documentation/getting-started/access-control/).

### General settings

Under Settings » WP Fusion » Integrations » BuddyPress you’ll find the global settings for the BuddyPress integration.

![](https://wpfusion.com/wp-content/uploads/2016/06/bp-defer-1-1024x469.jpg)

The options are

- **Defer Until Activation:**By default WP Fusion will sync new users to your connected CRM when they register an account on your site. When **Defer Until Activation** is checked, WP Fusion will not send any data to your CRM until new users are approved (either by an administrator or via email activation).
- **Apply Tags – Profile Complete:**If you’re using the [BuddyBoss profile completion widget](https://www.buddyboss.com/resources/docs/components/profiles/profile-completion-widget/), you can specify tags here to be applied in your CRM when a user’s profile reaches 100% complete.

### Event Tracking

Using the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/), you can track member activity as events in supported CRM. This lets you view engagement data in real time in your CRM’s activity feed.

Events can be configured in the global Event Tracking settings page, at Settings » Event Tracking.

![](https://wpfusion.com/wp-content/uploads/2016/06/buddyboss-event-tracking-global-1024x519.jpg)

The available triggers are:

- **Joined Group:** Triggered when a user joins a social group.
- **Left Group:** Triggered when a user leaves a social group.
- **Updated Profile Photo:**Triggered when a user changes their profile photo.
- **Updated Cover Photo:**Triggered when a user changes their cover photo.
- **Profile Completed:**Triggered when a user’s profile is completed (using the [BuddyBoss profile completion widget](https://www.buddyboss.com/resources/docs/components/profiles/profile-completion-widget/))

You can also configure event tracking on individual social groups via the WP Fusion Event Tracking meta box.

![](https://wpfusion.com/wp-content/uploads/2021/11/event-tracking-buddyboss-1024x961.jpg)Syncing multi-key events from BuddyBoss (with [supported CRMs](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/#multi-key-events)) allows you to send additional details like the forum topic title, content, and group name.
Events configured for single groups will take priority over any globally configured events (i.e. enrolling in a single group won’t trigger two simultaneous events).

### Batch operations

WP Fusion includes two batch processing tool for BuddyPress and BuddyBoss, under Settings » WP Fusion » Advanced » Batch Operations.

These are helpful when you’re setting up WP Fusion on an existing membership site and need to export current Group and Profile Type information to your CRM.

![](https://wpfusion.com/wp-content/uploads/2016/06/buddypress-groups-batch-operation-1024x546.jpg)

The two available operations are:

- **BuddyPress groups statuses:** For each user on your site WP Fusion will apply tags based on the user’s current group (and group type) memberships, using the settings you’ve configured on each group. This does not trigger any automated group enrollments or un-enrollments.
- **BuddyBoss profile type statuses:**For each user on your site WP Fusion will apply tags based on the user’s current profile type assignments, using the settings you’ve configured on each profile type. This does not trigger any automated group enrollments or un-enrollments.

#### Updating roles

You can set or update a user’s BuddyPress role via a [webhook](https://wpfusion.com/documentation/#webhooks) from your CRM. WP Fusion requires the BuddyPress internal role value to be passed for the 
```
?role=
```

 parameter in your webhook. Below are the values for the default BuddyPress roles

- Participant: 
```
bbp_participant
```
- Moderator: 
```
bbp_moderator
```
- Blocked: 
```
bbp_blocked
```
- Spectator: 
```
bbp_spectator
```
- Keymaster: 
```
bbp_keymaster
```

---

## MemberMouse

**Source:** [https://wpfusion.com/documentation/membership/membermouse/](https://wpfusion.com/documentation/membership/membermouse/)

### Overview

WP Fusion integrates with the [MemberMouse](https://wpfusion.com/go/membermouse) membership platform to keep customers in sync between your membership site and your CRM.

All new users who register via MemberMouse or purchase a product will be instantly added to your CRM, with all data provided at registration (including support for custom fields).

**Note:** As of 2020 our MemberMouse integration is deprecated. We will still provide support for it but we will not be adding any new features. We recommend selecting a [more modern membership plugin](https://wpfusion.com/reviews/best-membership-plugins-for-wp-fusion-2020-edition/).

### Tagging

![membermouse](https://wpfusion.com/wp-content/uploads/2016/05/membermouse-1024x434.jpg)

WP Fusion also lets you associate MemberMouse products with tags in your CRM. Above you can see a screenshot where two membership levels have been associated with corresponding tags in the CRM (in this case, Ontraport).

When a user purchases a product, the corresponding tags will automatically be applied. You can use these tags to trigger follow up sequences and other automations in your CRM.

Note that the tags will only be applied when a payment is received, so it doesn’t work with free trials or free memberships. As a workaround, you could redirect free / trial members to a page which is set to [apply a tag when it’s viewed](https://wpfusion.com/documentation/getting-started/tracking-user-activity/#apply-tags).

### Automated Enrollment

WP Fusion also supports automatically granting a membership level when a tag is applied in your CRM. Unfortunately, due to limitations with the MemberMouse platform, this only works for free membership levels.

![](https://wpfusion.com/wp-content/uploads/2016/05/membermouse-link-1024x292.jpg)

Select a tag in the **Link with Tag** box, and when this tag is applied, a member will be created and granted the membership level. When the tag is removed, the membership will be paused.

---

## User Meta

**Source:** [https://wpfusion.com/documentation/membership/user-meta/](https://wpfusion.com/documentation/membership/user-meta/)

### Overview

WP Fusion integrates with [User Meta](https://wordpress.org/plugins/user-meta/) to sync new user registrations and profile updates to [your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/), with support for any number of custom fields.

### Syncing custom fields

![Screen Shot 2016-01-28 at 07.52.00](https://wpfusion.com/wp-content/uploads/2016/01/Screen-Shot-2016-01-28-at-07.52.00-1024x585.png)

Any custom fields created on User Meta forms will be displayed in the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) of the WP Fusion settings.

You can then map these fields to fields in your CRM, and the data will be synced whenever a user registers or profile is updated.

### Global settings

WP Fusion has one global setting for User Meta Pro, which can be found under Settings » WP Fusion » Integrations.

![](https://wpfusion.com/wp-content/uploads/2016/01/user-meta-pro-defer-1024x287.jpg)

When **Defer Until Activation** is checked, no data will be sent to your CRM until after a new user has either verified their email address or been confirmed by an administrator.

---

## UserPro

**Source:** [https://wpfusion.com/documentation/membership/userpro/](https://wpfusion.com/documentation/membership/userpro/)

WP Fusion works along side [Userpro](http://userproplugin.com/userpro/) allowing you to tag users on registration while keeping all fields between Userpro and your CRM in sync with each other.

You can also choose to have WP Fusion update all user data from your CRM before the user’s profile is displayed. To enable option go to **Integrations >> Userpro Integration** and check the box next to “Pull”

![Userpro Pull Integration](https://wpfusion.com/wp-content/uploads/2016/01/userpro-pull-integration.jpg)

WP Fusion also pulls in all Userpro meta data that is standard and custom and allows you to easily map each field with a drop down of fields from your CRM.

![Userpro Field Mapping](https://wpfusion.com/wp-content/uploads/2016/01/userpro-field-mapping.jpg)

---

## Ultimate Member

**Source:** [https://wpfusion.com/documentation/membership/ultimate-member/](https://wpfusion.com/documentation/membership/ultimate-member/)

### Overview

We love [Ultimate Member](https://wordpress.org/plugins/ultimate-member/) as a great (free) solution to create beautiful login and registration pages, as well as searchable member directories.

![](https://wpfusion.com/wp-content/uploads/2016/01/um-profile-1024x743.jpg)

### Sync Custom Fields

WP Fusion will automatically detect any custom fields you’ve created through Ultimate Member and allow you to sync these fields to fields in your CRM when a user registers or a profile is updated.

![](https://wpfusion.com/wp-content/uploads/2016/01/um-fields-1024x475.jpg)

Any fields you’ve added to registration or profile forms will show up under the **Ultimate Member** heading under the Contact Fields list in the WP Fusion settings.

### Tagging

WP Fusion adds a few options specific to Ultimate Member for tagging contact records in your CRM.

#### Tag Users on Registration

You can specify tags to be applied per registration form when a user registers, allowing you to segment users by which registration form they used.

![Screen Shot 2016-01-28 at 08.08.59](https://wpfusion.com/wp-content/uploads/2016/01/Screen-Shot-2016-01-28-at-08.08.59.png)

This setting will appear in the sidebar while editing any Ultimate Member registration form.

#### User Roles

When configuring Ultimate Member user roles, WP Fusion allows you to “link” a user role to a tag. Once a role has been linked to a tag, users will automatically be granted this role when the tag is applied. If the tag is removed, the role will be removed.

![](https://wpfusion.com/wp-content/uploads/2016/01/um-link-role-with-tag-1.jpg)

This setting can be found in the sidebar when editing any Ultimate Member role.

To avoid leaving users with no role, if a linked tag is removed and the user has no other roles, WP Fusion will grant the user the Ultimate Member default registration role. This setting can be found under Ultimate Member » Settings » Appearance » Registration Form.

If the **Profile Completeness**addon is installed, you will also see a setting allowing you to specify tags to apply in your CRM when a user’s profile is completed.

### General Settings

WP Fusion has a few global settings for Ultimate Member. These can be found under Settings » WP Fusion » Integrations.

![](https://wpfusion.com/wp-content/uploads/2016/01/ultimate-member-general-1024x305.jpg)

The settings are:

- **Pull:**Enabling this setting will cause WP Fusion to connect to your CRM and load the user’s latest metadata any time their Ultimate Member profile is loaded. This will slow down the load time of the profile, so the preferred way to send data back to Ultimate Member from your CRM is by setting up [a webhook](https://wpfusion.com/documentation/webhooks/).
- **Defer Until Activation:**Enabling this setting will prevent WP Fusion from sending any data to your CRM (or applying any tags) to new users until their account has been activated. This can either be via the activation email sent by Ultimate Member, or a manual activation by an admin. This is a good way to get members to verify their email addresses before any data is sent to your CRM.
- **Deactivation Tag:**This setting can be used (most commonly with membership sites) to automatically deactivate a member’s account when a tag is applied, for example in the case of a payment failure. When the tag is removed their account will be reactivated.

### A note on webhooks

Using [webhooks from your CRM](https://wpfusion.com/documentation/webhooks/), it’s possible to automatically import CRM contacts as WordPress users.

By setting the 
```
&role=
```

 parameter in the webhook URL to an Ultimate Member role slug, you can automatically assign an Ultimate Member user role to the new user.

When used in conjunction with the **Require Email Activation** option on the Ultimate Member role, you can automatically send the new user an email with a link to activate their account.

![](https://wpfusion.com/wp-content/uploads/2016/01/um-require-activation-1024x481.jpg)

To make this work properly, *omit* the 
```
&send_notification=
```

 parameter from your webhook URL.

For example:

- ```
https://mysite.com/?wpf_action=add&role=um_custom_role
```

: New user will be imported with the role UM Custom Role, and the activation email will be sent from Ultimate Member. The default WordPress welcome email will not be sent.
- ```
https://mysite.com/?wpf_action=add&role=um_custom_role&send_notification=false
```

: New user will be imported with the role UM Custom Role, and *no emails will be sent at all*.
- ```
https://mysite.com/?wpf_action=add&role=um_custom_role&send_notification=true
```

: New user will be imported with the role UM Custom Role, and *both* the WordPress default new user welcome email and the Ultimate Member account activation email will be sent.

---

## Paid Memberships Pro

**Source:** [https://wpfusion.com/documentation/membership/paid-memberships-pro/](https://wpfusion.com/documentation/membership/paid-memberships-pro/)

### Overview

WP Fusion works with [Paid Membership Pro](https://wpfusion.com/go/paidmembershipspro) to sync members with any one of  [50+ CRMs and marketing automation platforms](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they purchase a membership, apply tags based on membership level and subscription status, and auto-enroll members when tags are applied in your CRM.

### Tagging

WP Fusion adds several settings to Paid Memberships Pro, which you can see while editing any membership level.

![](https://wpfusion.com/wp-content/uploads/2016/01/paidmembershipspro-4-1024x526.jpg)

You can apply tags (also known as [groups, lists, or segments](https://wpfusion.com/documentation/getting-started/working-with-tags/#overview)) based on the level of membership purchased, as well as optionally apply tags when a membership is canceled or the period expires.

There are several options:

- **Apply Tags:**When the customer purchases a membership, these tags will be applied in your CRM. This is the default behavior.
- **Remove Tags:**If the membership is canceled, expires, or changed, the tags specified in Apply Tags can automatically be removed.
- **Link with Tag:**Most sites won’t require this, but it is available as an option for those that need it. This setting allows you to select a tag that becomes *linked* with the membership level. If this tag is applied to a contact, for example via a webhook, they will be automatically enrolled in the membership. Likewise if this tag is removed, they will be removed from the membership. This lets you automate individual users’ membership levels using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).
- Linked tags will also be applied and removed if a user is added to / removed from a membership.
- **Apply Tags – Cancelled:**These tags will be applied if a membership is cancelled.
- **Apply Tags – Expired:**For memberships with expiration dates,****this option lets you apply tags when a membership expires, allowing you to trigger additional renewal followup automations.
- **Apply Tags – Payment Failed:**For subscription memberships, you can specify tags to be applied when a recurring payment fails. These tags will be removed if a successful payment is received.

### Approvals

When the [Approvals addon](https://www.paidmembershipspro.com/add-ons/approval-process-membership/) is active, an additional field 
```
pmpro_approval
```

 will be available for sync, and will be listed in the Contact Fields list.

When active, the approval status (either “pending” or “approved”) will be synced to your CRM when a member registers, changes membership level, or when their approval status is changed.

In addition, you can set this field to value “approved” in your CRM, and the member will be approved in Paid Memberships Pro.

This allows you to manage member approvals by editing contact records in your CRM, or even to automate approvals using an automation or workflow.

### Gift memberships

With the Paid Memberships Pro [Gift Membership addon](https://www.paidmembershipspro.com/add-ons/pmpro-gift-levels/), you can configure membership levels as gift memberships, and allow customers to buy memberships for other people.

![](https://wpfusion.com/wp-content/uploads/2016/01/pmpro-gift-memberships-1024x230.jpg)

When a level is configured as a gift membership, a single option for applying tags will be available, allowing you to apply tags to the customer who purchased the gift.

You can then edit the settings on the connected membership to configure which tags to apply to the gift recipient.

When the recipient clicks the link and creates their new gifted account, a contact record will be created in your CRM for the gift recipient, and any tags configured on that membership level will be applied.

As well, any enabled fields, such as **Membership Level** or **Expiration Date** will be synced to the gift recipient’s contact record.

### Syncing member data

WP Fusion can [sync member data provided at checkout to custom fields in your CRM](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/), such as name, address and phone number.

These fields can be enabled at Settings » WP Fusion » Contact Fields » Paid Memberships Pro.

[Custom fields added to your registration forms](https://www.paidmembershipspro.com/documentation/user-fields/) will also automatically be detected and can be enabled for sync from the Contact Fields list in the WP Fusion settings.

### Additional meta fields

WP Fusion allows you to sync certain internal Paid Memberships Pro fields that aren’t normally available as part of the WordPress user record. Under the Paid Memberships Pro section in the Contact Fields tab, you’ll see a few options.

![](https://wpfusion.com/wp-content/uploads/2016/01/pmpro-meta-fields-1024x186.jpg)

- **Membership Level** indicates the title of the member’s current membership level.
- **Membership Status** will either be “active” or “inactive” depending on their status.
- **Payment Method** is synced at checkout and indicates the payment gateway or payment method used to make a purchase.
- **Joined Date**is the start date of the user’s first membership (the date they joined as a member).
- **Membership Start Date**is the start date of the user’s most recent membership.
- **Next Payment Date** is the date of the next scheduled renewal payment. You can use this in in conjunction with date-based triggers in your CRM to automate renewal reminders.
- **Expiration Date**is the date of expiration for the membership (if it has an expiry date).
- **Subscription Price** is the recurring billing amount of the membership.

Membership fields can also be synced on a per-level basis by mapping the fields underneath the WP Fusion tag settings when editing any membership level.

![screenshot of the wp fusion field mapping screen, displaying options for mapping memberships and subscriptions fields such as status, level, start and expiration date, price, next payment date, and approval status to sync with contact records. perfect for paid memberships pro users.](https://wpfusion.com/wp-content/uploads/2016/01/pmpro-level-specific-field-mapping-1024x617.jpg)

### Abandoned cart tracking

WP Fusion’s [Abandoned Cart addon](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/) (available to Plus and Professional license holders) can capture customer details on the Paid Memberships Pro checkout form and sync them to your CRM before checkout has been completed.

You can then use tags and automations in your connected CRM to follow up with customers who started but didn’t complete checkout.

With Paid Memberships Pro, cart abandonment tags can be set in the WP Fusion settings section when editing any membership level.

![](https://wpfusion.com/wp-content/uploads/2016/06/pmpro-abandoned-cart-tracking-1024x379.jpg)

When a customer begins to check out with the membership level (or fails to complete checkout), the selected tags will be applied in your CRM or email marketing system, and can be used to trigger followup automations, offer discounts, and in your reports.

With Paid Memberships Pro you can also sync a **Cart Recovery URL** to take the user back to the checkout page.

For more information on the available options with abandoned cart tracking and Paid Memberships Pro, see the [Abandoned Cart Tracking documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

### Batch operations

For members who registered for your site before you set up WP Fusion, we include a two batch operations tools to bring those historical members up to date.

![](https://wpfusion.com/wp-content/uploads/2016/01/pmpro-batch-1-1024x465.jpg)

The two options are:

- **Paid Memberships Pro membership statuses:**This operation will go through all the members on your site and get each member’s most recent status at each membership level (including cancelled and expired members). It will then apply any tags you’ve configured for that membership level.
- **Paid Memberships Pro membership meta:**This operation will query all the members on your site, and for each it will sync any enabled meta fields for that user’s most recent membership, such as Start Date, Expiration Date, Membership Level, and Status. This operation does not modify any tags.

*Keep in mind this process can take some time to complete on sites with a large number of members. You can leave the page and come back later to check on the status.*

---

