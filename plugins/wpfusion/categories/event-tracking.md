# Event Tracking

*Category from WP Fusion documentation*

---

## Encharge Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/encharge-event-tracking/](https://wpfusion.com/documentation/event-tracking/encharge-event-tracking/)

### Overview

Using WP Fusion you can track events from WordPress plugins in Encharge— allowing you to track customer behavior on your site and trigger flows based on purchases, course progress, video engagement, form submissions, and more.

		The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### How it works

You can configure events globally, or on individual courses, forms, and products.

Syncing events from [BuddyBoss](https://wpfusion.com/documentation/membership/buddypress/#event-tracking) allows you to send additional details like the forum topic title, content, and group name (when someone joins a group).
Each event can contain a title, and any number of key/value pairs containing the event data.

In this example [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#event-tracking) product purchases and new orders are configured to send events to Omnisend.
When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s subscriber record in Encharge.

WP Fusion’s [event tracking with LearnDash](https://wpfusion.com/documentation/learning-management/learndash/#event-tracking) supports course progress and quiz attempts.
Tracked events will then show up in that subscribers activity timeline, and can also be used as triggers and conditions in automations.

For more information on events in Encharge, see the Encharge documentation.

### How it looks

Events are displayed in the activity timeline on Encharge subscriber records.

Events from WordPress appear on the subscriber’s activity timeline in real time.
In this case, we’re using the LearnDash integration to sync course progress as events. You can click on any event to expand it and see its properties (for example quiz score, course progress, or last lesson completed).

Events can also be used as triggers in automations.

Events can trigger Flows in Encharge. In this example an email is sent when a user completes the second lesson in the course.
Select the event name, and optionally choose one or more property conditions. When the event is triggered for a contact, the Flow will run.

---

## Omnisend Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/omnisend-event-tracking/](https://wpfusion.com/documentation/event-tracking/omnisend-event-tracking/)

### Overview

Using WP Fusion you can track events from WordPress plugins in Omnisend— allowing you to track customer behavior on your site and trigger automations based on purchases, course progress, video engagement, form submissions, and more.

		The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### How it works

You can configure events globally, or on individual courses, forms, and products.

Syncing events from [BuddyBoss](https://wpfusion.com/documentation/membership/buddypress/#event-tracking) allows you to send additional details like the forum topic title, content, and group name (when someone joins a group).
Each event can contain a title, and any number of key/value pairs containing the event data.

In this example [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#event-tracking) product purchases and new orders are configured to send events to Omnisend.
When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s subscriber record in Omnisend.

WP Fusion’s [event tracking with LearnDash](https://wpfusion.com/documentation/learning-management/learndash/#event-tracking) supports course progress and quiz attempts.
Tracked events will then show up in that subscribers activity timeline, and can also be used as triggers and conditions in automations.

For more information on events in Omnisend, see the Omnisend documentation.

### How it looks

Events are displayed in the activity timeline on Omnisend subscriber records.

Custom events tracked by WP Fusion show up in each subscriber’s [activity feed](https://support.omnisend.com/en/articles/2760491-contact-profile).
You can click on any event to expand it and see its properties.

Clicking Event Details shows the details for a specific event. These values can then be used in automations.
The properties in events can be used in automation triggers, and as conditions.

Custom events can be used as triggers in automations, and event properties can be used as conditions.
In this example, we’ve triggered a Quiz Attempt event whenever a quiz is attempted in LearnDash.

If the quiz score is less than 80 (%), an automatic email is triggered to the student asking if they need additional help.

---

## Customer.io Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/customer-io-event-tracking/](https://wpfusion.com/documentation/event-tracking/customer-io-event-tracking/)

### Overview

Using WP Fusion you can track events from supported plugins in Customer.io.

		The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### How it works

You can configure events globally, or on individual courses, forms, and products.

In this example WooCommerce product purchases and new orders are configured to send events to Bento.
Each event can contain a title, and any number of key/value pairs containing the event data.

When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s contact record in Customer.io.

Tracked events will then show up in that contact’s Activity timeline.

### How it looks

Events are displayed on the Activity timeline on Customer.io person records.

This person’s event log shows their course progress from [LearnDash](https://wpfusion.com/documentation/learning-management/learndash/#event-tracking) or [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#event-tracking) in Customer.io.
You can click on any event to expand it and see its properties.

Events can also be used as campaign triggers.

In this example, the campaign is triggered when a Quiz Attempted event fires with a 
```
score
```

 less than 65%.
And events can be used for campaign goals and conversions.

In this example, the campaign ends when the Course Progress goal is triggered with a 
```
percent
```

 of 
```
100
```

 (i.e. the course is marked complete).

---

## FluentCRM Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/)

### Overview

Using WP Fusion you can track events from supported plugins in FluentCRM, either on the same site, or on a remote site over the REST API.

The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### How it works

When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s contact record in Fluent CRM.

Tracked events will then show up in that contact’s Activity timeline, under the WP Fusion activity type.

#### How it looks

Events are displayed on the Activity timeline on FluentCRM contact records.

Events tracked by WP Fusion are displayed on the subscriber’s activity feed in FluentCRM.
Events can also be used as triggers for automations, including the number of times the event was performed.

This automation is triggered once the 
```
logged-in
```

 event has fired three times.
This makes events ideal for tracking things that can happen multiple times, or over time, such as site logins, course progress, quiz attempts, and subscription status changes.

#### Event names

FluentCRM only stores the latest event for events with the same name. This is a clever implementation that reduces the size of your database for events where you only need to track the most recent activity.

For example if your event was called “User Login”, then each time a user logs in, the event will be updated in FluentCRM and appear at the top of the contact’s timeline, with their most recent login date. Previous logins will not be recorded or displayed.

Adding a unique identifier to the event name will make FluentCRM record a new event every time it’s triggered by WP Fusion.
For example here, we’ve set the event name to Placed order #{order:id}. This will create a new event in FluentCRM for every order, and you will see the customer’s full order history in their event timeline.

Using a non-unique event name will cause FluentCRM to only record the details from the most recent event.
But for order status changes, we don’t necessarily need to see every time it’s changed in the past, we just need the status change from the most recent order to trigger automations. By setting the event name to Order Status Changed, only the most recent event will be displayed on the contact’s activity timeline.

This reduces the size of your FluentCRM database and makes it easier to find important events in your contacts’ activity timeline.

### Setup

To use event tracking, it first needs to be enabled in FluentCRM under the Addons tab. Event tracking is supported in the free FluentCRM as well as FluentCRM Pro.

Once event tracking is enabled, events are configured in WP Fusion. Events can be configured either globally or on specific posts (products, courses, etc).

Each event requires a title, and (optionally) one or more values. Events in FluentCRM are handled slightly differently depending on the number of key/value pairs they have.

#### Single key events

In this example we’ve configured an event for whenever a LearnDash quiz is completed. When only a single key is specified, the “key” will be omitted and only the value will be sent. This appears in FluentCRM like this:

The event value can then be used as a condition in automation triggers.

In this example the automation is triggered when the quiz-attempt event is triggered, if the quiz points are higher than 8.

#### Multi-key events

You can send more data about your events by using multiple keys.

In this example a WooCommerce order is configured to send an event with the order total, payment method, status, and customer note.

With multi-key events, the event details will be sent to FluentCRM JSON-encoded. At the moment, this means you can use the event as an automation trigger, but you can not use the event properties in conditions (i.e. “if total > 100”).

We hope this will be added in a future FluentCRM update.

---

## Klaviyo Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/klaviyo-event-tracking/](https://wpfusion.com/documentation/event-tracking/klaviyo-event-tracking/)

### Overview

Using WP Fusion you can track events from supported plugins in Klaviyo.

		The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### How it works

When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s contact record in Klaviyo.

Tracked events will then show up in that contact’s Metrics events timeline.

### How it looks

Events are displayed on the Metrics timeline on Klaviyo subscriber records.

### Using event tracking for enhanced ecommerce data

Klaviyo uses the events system for tracking orders and ecommerce activity. According to the Klaviyo documentation, to track orders in WooCommerce or another ecommerce plugin, you will need to set up two events:

- Placed Order: This event must be titled Placed Order and contain at minimum a value field set to the total value of the order. In WP Fusion this uses the “Order Placed” trigger.
- Ordered Product: This event must be titled Ordered Product and contain at minimum a value field that represents the total cost of the item. In WP Fusion this uses the “Purchased Product” trigger.

An example of the Event Tracking addon configured to track WooCommerce orders in Klaviyo

---

## Brevo Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/brevo-event-tracking/](https://wpfusion.com/documentation/event-tracking/brevo-event-tracking/)

### Overview

Using WP Fusion you can track events from supported plugins in Brevo.

For an overview of event tracking in Brevo in general, see this link.

		The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### How it works

When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s contact record in Brevo.

Tracked events will then show up in the Brevo automation logs, and can be used as trigger and conditions in automations.

### How it looks

Events are displayed in the Brevo automation logs, under Automation » Logs. You can click on each event to expand it and see the event properties.

Events can also be used as triggers in your automations.

You can use event properties to filter your triggers based on the passed value (for example the order total and status, in the screenshot above).

---

## Intercom Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/intercom-event-tracking/](https://wpfusion.com/documentation/event-tracking/intercom-event-tracking/)

### Overview

Using WP Fusion you can track events from supported plugins in Intercom.

For an overview of event tracking in Intercom in general, see this link.

		The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### How it works

When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s contact record in Intercom.

Tracked events will then show up in that contact’s Recent Events timeline.

### How it looks

Events are displayed on the Recent Events timeline on Intercom contact records.

Events can also be used as a Series’ Entry rule trigger.

---

## Gist Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/gist-event-tracking/](https://wpfusion.com/documentation/event-tracking/gist-event-tracking/)

### Overview

Using WP Fusion you can track events from supported plugins in Gist.

For an overview of event tracking in Gist in general, see this link.

		The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### How it works

When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s contact record in Gist.

Tracked events will then show up in that contact’s Activity timeline.

### How it looks

Events are displayed on the Activity timeline on Gist contact records.

Events can also be used as a Workflow trigger.

And as a trigger to Automation Rules:

---

## ActiveCampaign Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/](https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/)

### Overview

Using WP Fusion you can track events from supported plugins in ActiveCampaign.

For an overview of event tracking in ActiveCampaign in general, see this link.

		The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### Setup

To use event tracking in ActiveCampaign, it must first be enabled in your account.

Event tracking in ActiveCampaign must be enabled before it can be used.
Head to Settings » Tracking, and click the toggle next to Event Tracking to enable it.

**Note:** After enabling Event Tracking, ActiveCampaign will display your Event Key. You don’t need this for WP Fusion, it’s only used when tracking events using custom code.

### How it works

When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s contact record in ActiveCampaign.

Tracked events will then show up in that contact’s Activity timeline, on the right side of their contact record.

Heads up: ActiveCampaign only accepts alphanumeric characters, spaces, dashes, and underscores in event names. Any other special characters will be removed automatically by WP Fusion.

As an example:

- Purchase – Membership = Good ✅
- Purchase: Membership (Gold) = Will be changed to Purchase Membership Gold

### How it looks

Events are displayed on the Recent Activities timeline on the right side of the contact record.

Events tracked by WP Fusion show up in the Activity timeline to the right of the contact record. In this case, we see two Gravity Form submissions.
In this example we can see course progress from a LearnDash course being tracked via events.
Events can also trigger automations. In this case we have an automation that’s triggered when a quiz is passed with a grade of 75% or higher.

Events can be used as automation triggers, optionally with event values
And events can be used as conditions in automations. This is especially powerful because you can perform logic on how many times the event has happened for that contact.

Events can be used in conditions in automations

---

## Mailchimp Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/mailchimp-event-tracking/](https://wpfusion.com/documentation/event-tracking/mailchimp-event-tracking/)

### Overview

Using WP Fusion you can track events from supported plugins in Mailchimp.

For an overview of event tracking in Mailchimp in general, see this link.

		The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### How it works

When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s contact record in Mailchimp.

Tracked events will then show up in that contact’s Activity Feed timeline.

### How it looks

Events are displayed on the Activity Feed timeline on Mailchimp contact records.

Events can also be used as triggers in your automations.

---

## Bento Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/bento-event-tracking/](https://wpfusion.com/documentation/event-tracking/bento-event-tracking/)

### Overview

Using WP Fusion you can track events from supported plugins in Bento.

		The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### How it works

You can configure events globally, or on individual courses, forms, and products.

In this example WooCommerce product purchases and new orders are configured to send events to Bento.
Each event can contain a title, and any number of key/value pairs containing the event data.

When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s contact record in Bento.

Tracked events will then show up in that contact’s Events timeline.

### How it looks

Events are displayed on the Events timeline on Bento contact records.

You can click on any event to expand it and see its properties.

Events can also be used as workflow triggers.

---

## Drip Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/drip-event-tracking/](https://wpfusion.com/documentation/event-tracking/drip-event-tracking/)

### Overview

Using WP Fusion you can track events from supported plugins in Drip.

For an overview of event tracking in Drip in general, see this link.

		The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### How it works

When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s contact record in Drip.

Tracked events will then show up in that contact’s All Activity timeline.

### How it looks

Events are displayed on the Recent Activities timeline on Drip contact records.

Events can also be used as a workflow trigger.

To filter the trigger by the event “value”, you can use the “data” parameter in the filter, like so:

In this case the workflow will only run if Lesson 30 in Course A was completed.

---

## HubSpot Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/hubspot-event-tracking/](https://wpfusion.com/documentation/event-tracking/hubspot-event-tracking/)

### Overview

Using WP Fusion you can track events from supported plugins in HubSpot, as engagements.

For an overview of engagements in HubSpot in general, see this link.

		The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### How it works

When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s contact record in HubSpot as an engagement.

Tracked events will then show up in that contact’s Activity timeline.

### How it looks

Events are displayed on the Recent Activities timeline on HubSpot contact records.

---

## Event Tracking Changelog

**Source:** [https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/)

#### #1.6.5 - 11/5/2025

- ✨ New Added support for default event templates for each trigger
- ✨ New Added validation on the main settings page save to make sure no event keys are empty
- 🔧 Fixed Fixed custom event key formats not being respected (since 1.6.4)
- 🔧 Fixed Fixed deprecated jQuery methods in jquery.repeater library causing console warnings

#### #1.6.4 - 11/4/2025

- ✨ New Added dropdown for default owner for HubSpot notes
- ✨ New Added support for flexible event key formatting depending on the CRM (for example Drip allows spaces in event keys)
- 🔧 Fixed Fixed PHP warning when logging in with a username that doesn't exist
- 🔧 Fixed Fixed undefined array key warning when syncing the license details with EDD Software Licensing
- 🔧 Fixed Fixed events being tracked when users are registered or auto-logged in by WP Remote Users Sync
- 🔧 Fixed Fixed user login events being tracked during WP-Cron

#### #1.6.3 - 3/10/2025

- 🔧 Fixed Fixed PHP warning Undefined array key "user_id" in LearnDash Course Started event

#### #1.6.2 - 1/22/2025

- 🔧 Fixed Fixed missing EDD download merge tags in EDD Recurring integration
- 🔧 Fixed Fixed fatal error loading the Presto Player integration with WP Fusion core 3.44.23

#### #1.6.1 - 10/4/2024

- 🔧 Fixed Fixed WooCommerce order total not rounded to two digits when discounts were applied
- 🔧 Fixed Fixed LearnDash Course Progress trigger not firing when a course was completed by submitting a quiz
- 🔧 Fixed Fixed errors with the LearnDash Quiz Completed trigger when grading courses in the admin

#### #1.6.0 - 8/14/2024

- ✨ New Added an AffiliateWP integration
- ✨ New Added a GiveWP integration
- ✨ New Added a WP Fusion Abandoned Cart addon integration
- 🔧 Fixed Fixed Add Trigger button not working on the global events configuration page with CRMs that don't support multi-key event tracking, since 1.5.1
- 🔧 Fixed Fixed missing list of events configured on single posts in the global settings, since 1.5.0
- 🔧 Fixed Fixed login events not working with WishList Member (moved wp_login priority from 10 to 5)
- 🔧 Fixed Fixed PHP warnings when tracking events after switching from a multi-key to non-multi-key CRM

#### #1.5.1 - 6/21/2024

- ⚡️ Improved Event tracking scripts and styles will now only be loaded on admin pages with event tracking settings on them
- ⚡️ Improved With the Gravity Forms integration, when using the {form:all_fields} merge tag, the event value will now be an array of all the form fields when using multi-key event tracking
- ⚡️ Improved Added a link back to the main settings page from the event tracking settings page
- 🔧 Fixed Fixed misaligned label on WooCommerce product settings
- 🔧 Fixed Fixed missing field label on WooCommerce Subscriptions subscription product events configuration
- 🔧 Fixed Fixed missing event preview on WooCommerce product settings with multi-key event tracking
- 🔧 Fixed Fixed JavaScript conflict with GravityPerks Limit Dates addon
- 🔧 Fixed Fixed global Gravity Forms events running on spam submissions
- 🔧 Fixed Fixed events configured on individual Gravity Forms being triggered twice
- 🔧 Fixed Fixed PHP warning "Attempt to read property "discount" on bool" when editing EDD downloads
- 🛠️ Dev added action wpf_event_tracking_track_event to allow passing events to other services

#### #1.5.0 - 3/26/2024

- ✨ New Added WooCommerce Order Status Changed event
- ✨ New Added subscription ID and parent order ID to WooCommerce Subscriptions events
- 🔧 Fixed Fixed fatal error when replacing merge tags on the User event type, when the user had array values in their meta
- 🔧 Fixed Fixed event test button trimming the last character off the event value
- 🔧 Fixed Fixed empty events sometimes getting sent and creating API errors
- 🔧 Fixed Fixed WooCommerce Subscriptions events syncing the parent order ID and parent order total rather than renewal payment ID and renewal payment total
- 🔧 Fixed Fixed empty event data getting saved to BuddyPress / BuddyBoss groups and blocking global events on those groups

#### #1.4.3 - 11/29/2023

- ✨ New Added payment fields with Easy Digital Downloads
- ✨ New Added overview text to global options page
- 🔧 Fixed Fixed multi-key previews getting appended to every event editor on the page when editing a single post or product
- 🔧 Fixed Fixed "Installed Update" event with Easy Digital Downloads recording the site URL of the last activated site, not necessarily the site where the update was installed

#### #1.4.2 - 10/24/2023

- ✨ New Added Send Test button to event editor
- Refactored admin JavaScript
- 🔧 Fixed Fixed fatal error replacing merge tags with Bento and PHP 8+

#### #1.4.1 - 9/8/2023

- ⚡️ Improved Improved event editor layout on single WooCommerce products
- 🔧 Fixed Fixed missing "Order" event tags on WooCommerce product purchase triggers
- 🔧 Fixed Fixed global Purchased Product trigger (WooCommerce) not working
- 🔧 Fixed Fixed empty multi-key events getting saved to postmeta and showing up under Configured On in the global settings

#### #1.4.0 - 7/31/2023

- ✨ New Added multi-key/value event tracking to supported CRMs (Bento, Brevo, Engage, Gist, Groundhogg, Intercom, Klaviyo, and Mailchimp)
- ✨ New Added Course Start trigger for LearnDash
- ✨ New Added course progress (percentage) merge field for LearnDash
- ✨ New Added Course Start trigger for LifterLMS
- ✨ New Added course progress (percentage) merge field for LifterLMS
- ✨ New Added helper function wpf_track_event( $event_name, $event_data, $email_address );
- ✨ New Added Order Subtotal field with WooCommerce
- ⚡️ Improved Prices synced to Bento will now be multiplied by 100 to properly update lifetime values
- 🔧 Fixed Fixed LifterLMS lesson complete tracking not working
- 🔧 Fixed Fixed fatal error tracking Gamipress "Achievement earned" event

#### #1.3.1 - 12/2/2022

- 🔧 Fixed Fixed PHP warning tracking the EDD subscription status for new customers
- 🔧 Fixed Fixed {download:title} tag not working with EDD

#### #1.3.0 - 11/30/2022

- ✨ New Added EDD Recurring Payments integration
- ⚡️ Improved Added limit of 30 characters to Mailchimp event title field
- ⚡️ Improved Added link to event tracking settings from main WP Fusion settings page
- 🔧 Fixed Fixed LearnDash Course Progress event not firing when a course was completed

#### #1.2.6 - 8/25/2022

- 🔧 Fixed Fixed JavaScript error in the admin "wpfEventData is not defined"

#### #1.2.5 - 8/23/2022

- ✨ New Added a notice when the Event Name with ActiveCampaign exceeds 40 characters
- 🔧 Fixed Fixed fatal error loading settings page if no WP Fusion Gravity Forms feeds had been configured
- 🔧 Fixed Fixed fatal error on PHP 8+ when adding a new Gravity Forms feed
- 🔧 Fixed Fixed special characters being synced as HTML encoded with LearnDash course, lesson, and quiz titles

#### #1.2.4 - 4/7/2022

- ⚡️ Improved Will no longer trigger multiple events for a single LearnDash course progression (fixes issues with Uncanny autocomplete lesson and autocomplete course functionality)
- 🔧 Fixed Fixed fatal error in Presto Player integration (WPF_ET_Presto_Player does not have a method "add_meta_box()")

#### #1.2.3 - 3/8/2022

- 🔧 Fixed Fixed global events not firing if a post had an empty single event configured since 1.2.0
- 🔧 Fixed Fixed missing settings on EDD Downloads when EDD Software Licensing was active since 1.2.0

#### #1.2.1 - 3/8/2022

- 🔧 Fixed Fixed BuddyBoss profile completion widget not showing progress since 1.2.0

#### #1.2.0 - 3/7/2022

- ✨ New Added Gamipress integration
- ✨ New Added BuddyPress / BuddyBoss integration
- ✨ New Added WooCommerce Subscriptions integration
- ✨ New Added bbPress integration
- ✨ New Added Presto Player integration
- ⚡️ Improved If a trigger has an event configured on a single post as well as globally, only the event for the single post will fire (prevents duplicate events)

#### #1.1.2 - 1/19/2022

- ⚡️ Improved Made WooCommerce Purchased Product trigger available globally
- 🔧 Fixed Fixed global events not firing when there were single events bound to the same trigger
- 🔧 Fixed Fixed "Configured On" in global triggers not showing correct posts
- 🛠️ Dev Developers - All merge tags are now passed to the event editor via JavaScript

#### #1.1.1 - 1/5/2022

- UX improvements to the global settings editor
- 🔧 Fixed Fixed current_url and referer fields not syncing
- 🔧 Fixed Fixed first option in global settings dropdown not selectable
- 🔧 Fixed Fixed Uncaught Error: Call to undefined method WPF_ET_WooCommerce::get_user_vars()
- 🛠️ Dev Developers - Refactored the way options (merge tags) are declared for each integration

#### #1.1.0 - 12/31/2021

- Add User integration with Logged In trigger
- ✨ New Added current user merge tags to all triggers
- ✨ New Added global settings for Gravity Forms integration
- ✨ New Added {file:file} merge tag for EDD
- ⚡️ Improved Improved LearnDash progress tracking — no longer running on learndash_update_user_activity hook (was triggering duplicate events)
- ⚡️ Improved Moved LearnDash course settings to new WP Fusion settings tab
- Removed quiz "score" in favor of "percentage" with LearnDash
- 🔧 Fixed Fixed fatal error adding new WooCommerce product
- 🔧 Fixed Fixed occasional empty duplicate events
- 🔧 Fixed Fixed EDD {file:name} merge tag not working
- 🔧 Fixed Fixed Downloaded Download trigger not showing in global settings

#### #1.0.1 - 12/2/2021

- ✨ New Added user merge tags to single course and product settings
- ✨ New Added descriptions beneath each trigger in the global settings
- 🔧 Fixed Fixed previews not loading when editing a single product
- 🔧 Fixed Fixed settings not showing on LifterLMS courses
- 🔧 Fixed Fixed dropdown options getting added multiple times on global settings when changing trigger

#### #1.0.0-beta1 - 11/30/2021

- Initial release

---

## Groundhogg Event Tracking

**Source:** [https://wpfusion.com/documentation/event-tracking/groundhogg-event-tracking/](https://wpfusion.com/documentation/event-tracking/groundhogg-event-tracking/)

### Overview

Using WP Fusion you can track events from supported plugins in Groundhogg, either on the same site, or on a remote site over the REST API.

The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### How it works

When an event is tracked in a supported plugin, it will be recorded to the WP Fusion activity logs, and sent to the corresponding person’s contact record in Groundhogg CRM.

Tracked events will then show up in that contact’s Activity timeline, under the WP Fusion activity type.

#### Using events in benchmarks

Using the Advanced Features addon for Groundhogg, you can trigger benchmarks based on custom events sent by WP Fusion. To set this up, first add a Custom Activity benchmark to your funnel.

For the type of activity, enter wp_fusion.

You can optionally filter the trigger by the event_name and event_value parameters. These will match the Event Name and Event Values you set when configuring your events in the WP Fusion settings.

Custom activity benchmarks triggered by WP Fusion will be displayed in the contact’s timeline.

### How it looks

Events are displayed on the Activity timeline on Groundhogg contact records.

Events tracked by WP Fusion are shown on the Activity timeline on each person’s Groundhogg contact record.
Events can also be used as benchmarks or conditions, including the number of times the event happened, and the time period.

---

## Event Tracking Overview

**Source:** [https://wpfusion.com/documentation/event-tracking/event-tracking-overview/](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/)

### Overview

The Event Tracking addon sends events from supported plugins to CRMs that have an “events” or “activity” component.

The currently supported platforms are:

- ActiveCampaign
- Bento
- Brevo
- Customer.io
- Drip
- Encharge
- FluentCRM
- Gist
- Groundhogg
- HubSpot
- Intercom
- Klaviyo
- Mailchimp
- Omnisend

		The Event Tracking addon currently supports the following plugins:

- AffiliateWP
- bbPress (and BuddyBoss / BuddyPress forums)
- BuddyPress / BuddyBoss
- Easy Digital Downloads
- EDD Software Licensing
- Gamipress
- GiveWP
- Gravity Forms
- LearnDash
- LifterLMS
- Presto Player
- WooCommerce
- WooCommerce Subscriptions
- WP Fusion’s Abandoned Cart addon
		

### What are events?

WP Fusion can track user activity by applying tags in your CRM or marketing automation platform, for example based on a product purchase or course progress.

Tags can then be used to unlock content on your site, trigger automated enrollments, or to trigger automations or email sequences in your CRM.

Tags are a great way to check the state of a customer or member, for example:

- “Active Subscription – Product A”
“Gold Member”
“Opted In”
“License Expired”

These tags all give you an overview of the state of the contact in your CRM.

#### Using tags to track events

Tags are not great at tracking things that happen over time, or in a particular sequence.

For example using tags to track a student’s progress through a course can result in something like this:

Using tags to track progress or page views can clutter up your account.
The student gets a new tag every time they view or complete a lesson, but this results in a bunch of tags with no context as to when each event happened. You also lose the “big picture” information underneath all the activity-tracking tags.

#### Using events to track events

Using events simplifies this greatly. Look at this example from ActiveCampaign.

WP Fusion tracks events in the Recent Activities list in ActiveCampaign, where you can see the full timeline of event activity.
The course progress shows up on the right side of the contact record, alongside purchase and automation activity.

For each event we can see when it happened. In cases where the events have values, like quiz attempts, we can see those as well (i.e. quiz scores).

Just like tags, events can also trigger automations. In this case we have an automation that’s triggered when a quiz is passed with a grade of 75% or higher.

Events can be used as automation triggers, optionally with event values
And events can be used as conditions in automations. This is especially powerful because you can perform logic on how many times the event has happened for that contact.

Events can be used in conditions in automations

### How to configure events

Events can be managed in two places:

1. On the individual post settings (for example a product, form, or course)
2. In the global settings, at Settings » Event Tracking

The global settings interface looks like this:

The Event Tracking global settings provide an overview of every post on your site that is configured to track events, as well as the option to track global events.
For each detected plugin integration, you will see a list of triggers, and their configured events.

If events have been configured on individual posts, they will also be listed under their respective trigger.

You can click Add Trigger to add a new trigger to the integration, and then select the trigger type from the dropdown. By clicking the merge tags button in the input field, you can select dynamic properties that will be merged into the event when it is triggered.

A preview beneath the event inputs will show you what the event will look like, using sample data.

#### Multi-key events

With Bento, Brevo, Customer.io, Engage, FluentCRM, Gist, Groundhogg, Intercom, Klaviyo, Mailchimp, and Omnisend, events can contain any number of key/value pairs.

Syncing multi-key events from [BuddyBoss](https://wpfusion.com/documentation/membership/buddypress/#event-tracking) allows you to send additional details like the forum topic title, content, and group name (when someone joins a group).
This lets you sync more detailed information about each event, and allows you to use multiple data points simultaneously in your triggers and conditions.

If your CRM supports these types of events, the Event Tracking UI will update to allow multiple keys and values for each event.

### General settings

You can find the general settings for event tracking at Settings » WP Fusion » Addons.

There is currently one setting:

- Log Events: By default all events are recorded to the activity logs. If you don’t want to record events to the logs, you can un-check this setting.

### Performance

The Event Tracking addon was designed with performance in mind. Any events that are generated during a page view are saved up, and are sent to your CRM in the footer of the page, after everything else has loaded.

In addition, Event Tracking API calls are sent “non-blocking”, which means the API calls are sent to your CRM without waiting for a response. This means the API calls are sent basically instantly, and shouldn’t cause any noticeable impact on your site’s speed.

---

