# Gamification

*Category from WP Fusion - Downloads Addon documentation*

---

## GamiPress

**Source:** [https://wpfusion.com/documentation/gamification/gamipress/](https://wpfusion.com/documentation/gamification/gamipress/)

### Overview

[GamiPress](https://wpfusion.com/go/gamipress) lets you “gamify” your WordPress site by granting achievements based on a wide variety of triggers.

WP Fusion integrates with GamiPress to allow you to apply tags [in your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when achievements and ranks are earned, as well as to sync points and ranks to custom fields in your CRM, which can be used to drive your marketing campaigns.

### Achievements

The WP Fusion settings can be found at the bottom of the Achievement Data box while editing an Achievement (note that to use achievements with GamiPress you need to first create an achievement post type at GamiPress » Achievement Types).

![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-1-1024x397.jpg)

There are two options:

- **Apply tags:** These tags will be applied in your CRM when the achievement or badge is earned.
- **Link with tag:** This allows you to automatically grant an achievement by applying a tag. The tag is “linked” to the achievement, and if the tag is removed, the achievement will likewise be revoked.

### Ranks

WP Fusion also integrates with the Ranks system in GamiPress. The settings are found when editing any single rank.

![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-ranks-1024x357.jpg)

There are two options

- **Apply tags:**The tags specified here will be applied in your CRM when a user earns this rank.
- **Link with tag:**This setting allows you to select a tag which is “linked” to the rank. The tag will be applied when the rank is earned. Likewise, if this tag is applied in your CRM the rank will be automatically granted. If this tag is removed, the rank will be revoked and the default rank will be assigned.

### Requirements

When editing any Points Type, Achievement, or Rank, you can use tags being applied or removed in your CRM as a condition.

For example when a *Profile Complete* tag is applied by WP Fusion, grant the user 10 points.

![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-automatic-points-1024x358.jpg)

To set this up, in the condition dropdown under the WP Fusion header, select either *CRM tag applied* or *CRM tag removed*. Then you will be able to select the tag from the next dropdown that appears.

When the specified tag is applied or removed, the requirement will be met, and the Points, Achievement, or Rank will be awarded.

### Syncing points and ranks

WP Fusion also allows you to sync a user’s earned GamiPress points and ranks to your CRM.

Head to the [Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings, and scroll down to the GamiPress section.

![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-points-1024x168.jpg)

For each point type and rank type on your site, you’ll be able to select a corresponding custom field in your CRM.

- When points are earned the new point value will be synced to the selected custom field in your CRM
- When a rank is earned, the title of the new rank will be synced to the selected custom field in your CRM

The sync with points and ranks is bidirectional, meaning you can update a user’s points or ranks in your CRM and the data will automatically be updated in WordPress.

This can also be used to keep GamiPress points and ranks in sync across multiple sites, as long as they are all connected to your CRM with WP Fusion.

### Event Tracking

Using the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/), you can track GamiPress activity as events in supported CRMs. This lets you view member activity in real time in your CRM’s activity feed.

Events can be configured in the global Event Tracking settings page, at Settings » Event Tracking.

![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-event-tracking-global-1024x481.jpg)

The available triggers are:

- **Points Earned:**Triggered each time a user earns points.
- **Rank Earned:**Triggered each time a rank is earned.
- **Achievement Earned:**Triggered each time a new achievement is earned.
- **Achievement Revoked:**Triggered each time an achievement is revoked.

You can also configure event tracking on individual ranks and achievements, via the WP Fusion Event Tracking metabox.

![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-event-tracking-single-1024x263.jpg)

Events configured for single ranks or achievements will take priority over any globally configured events for that trigger (i.e. achieving a rank won’t send two events simultaneously).

#### How it looks

![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-how-it-looks-1024x612.jpg)GamiPress event tracking in ActiveCampaign
As users earn points, ranks, and achievements, events will be synced to your CRM in real time. Events will appear on each contact’s activity feed, and can also be used as triggers or conditions in automations.

For more information see the [Event Tracking documentation](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/).

---

## myCRED

**Source:** [https://wpfusion.com/documentation/gamification/mycred/](https://wpfusion.com/documentation/gamification/mycred/)

### Overview

[myCRED](https://wordpress.org/plugins/mycred/) is a points management system that gives you a lot of flexibility in “gamifying” your site using points, badges, and other rewards. WP Fusion integrates with myCRED to let you link CRM tags with badges and ranks for tracking and granting user achievements.

### Badges

The WP Fusion settings can be found at the bottom of the Edit Badge screen. When a badge is earned, the selected tag will be applied in your CRM.

![](https://wpfusion.com/wp-content/uploads/2017/08/badgeos-1024x256.jpg)

#### Linking Badges

By linking a badge with a tag, you can also automatically grant badges to users based on automations in your CRM. When the selected tag is applied to the contact, the user will be awarded the badge. When the tag is removed, the badge will be removed from the user.

### Ranks

The WP Fusion settings can be found at the bottom of the Edit Rank screen.

![](https://wpfusion.com/wp-content/uploads/2018/01/mycred-ranks-1-1024x411.jpg)

There are two settings:

- **Apply tags:**Here you can specify any number of tags to be applied in your CRM when the rank is earned
- **Link with tag:**By linking a rank with a tag, you can automatically grant ranks to users based on automations in your CRM. When the selected tag is applied to the contact, the user will be assigned the linked rank.

---

## BadgeOS

**Source:** [https://wpfusion.com/documentation/gamification/badgeos/](https://wpfusion.com/documentation/gamification/badgeos/)

Using WP Fusion with [BadgeOS](http://badgeos.org/), you can tag users when they earn a badge, allowing you to segment contacts in your CRM by earned achievements, as well as letting you trigger automated followup sequences when an achievement is earned.

![](https://wpfusion.com/wp-content/uploads/2017/08/badgeos-1024x256.jpg)

#### Linking Badges

By linking a badge with a tag, you can also automatically grant badges to users based on automations in your CRM. When the selected tag is applied to the contact, the user will be awarded the badge. Likewise, when the tag is removed, the badge will be removed.

#### Syncing Points

WP Fusion also lets you sync a user’s earned points to your CRM. You can find the field “_badgeos_points” in the Contact Fields list. Just select a field in your CRM, and any changes to a user’s points will be synced automatically.

![](https://wpfusion.com/wp-content/uploads/2017/08/badgeos-points-1024x85.jpg)

#### Supercharge BadgeOS

This opens up countless new possibilities for making your user engagement system that more engaging: using conditions and rules in your CRM’s automation tools, you can award badges based on a customer’s total revenue, number of completed surveys, engagement with your media (using our [Media Tools Addon](https://wpfusion.com/documentation/media-tools/media-tools-overview/)) and so much more.

---

