# Community Shortcodes

*Category from The Events Calendar documentation*

---

## How to Use Community Events Shortcodes

**Source:** [https://docs.nexcess.com/software/the-events-calendar/community-shortcodes/](https://docs.nexcess.com/software/the-events-calendar/community-shortcodes/)

Community adds pages to your site where people submitting events can access the form to submit or edit, and manage attendees and orders. But sometimes you might want to provide front-end access to these settings and tools to logged-in approved users or even use one of your own pages or posts instead of what Community provides out of the box.

That’s what we’re going to walk through in this tutorial. In fact, Community provides a set of shortcodes you can use to embed forms and event editing functionality within other WordPress pages and posts.

## How the Shortcodes Work

Community has two shortcodes. Each one shows a different screen depending on the *view* you add to it.

- ```
[tribe_community_events]
```

 shows the forms and lists for submitting and editing events, venues, and organizers.
- ```
[tribe_community_tickets]
```

 shows the attendees and sales reports for an event.

Some views also need an 
```
id
```

. This is the ID of the event, venue, or organizer you want to show. It is not the ID of a Community page. The sections below that need an ID explain how to find it.

If the ID doesn’t match a real event, venue, or organizer, the shortcode shows an error message on the page instead of the form or report.

---

## Show the Event Submission Form

This shows the form that allows users to submit events to your calendar. It provides all of the necessary fields and information needed to create an event. It does not need an 
```
id
```

.

```
[tribe_community_events]
```

This does the same thing as adding the view yourself:

```
[tribe_community_events view="submission_form"]
```

## Show a Logged-In User’s Submitted Events

This shows a list of the events that the currently logged-in user has submitted to the calendar. It does not need an 
```
id
```

.

```
[tribe_community_events view="my_events"]
```

## Edit an Existing Event

This shows the editing screen for one particular event. Replace 
```
123
```

 with the event’s ID.

```
[tribe_community_events view="edit_event" id="123"]
```

To find the event ID:

1. In your WordPress dashboard, go to Events → All Events.
2. Hover over the event’s title and click Edit.
3. Look at the address bar in your browser. The URL looks like this: 
```
https://example.com/wp-admin/post.php?post=167&action=edit
```
4. The number after 
```
post=
```

 is the event ID. In this example, the event ID is 
```
167
```

.

## Edit an Existing Venue

This shows the editing screen for one particular venue. Replace 
```
123
```

 with the venue’s ID.

```
[tribe_community_events view="edit_venue" id="123"]
```

To find the venue ID:

1. In your WordPress dashboard, go to Events → Venues.
2. Hover over the venue’s name and click Edit.
3. Look at the address bar in your browser. The URL looks like this: 
```
https://example.com/wp-admin/post.php?post=167&action=edit
```
4. The number after 
```
post=
```

 is the venue ID. In this example, the venue ID is 
```
167
```

.

## Edit an Existing Organizer

This shows the editing screen for one particular organizer. Replace 
```
123
```

 with the organizer’s ID.

```
[tribe_community_events view="edit_organizer" id="123"]
```

To find the organizer ID:

1. In your WordPress dashboard, go to Events → Organizers.
2. Hover over the organizer’s name and click Edit.
3. Look at the address bar in your browser. The URL looks like this: 
```
https://example.com/wp-admin/post.php?post=167&action=edit
```
4. The number after 
```
post=
```

 is the organizer ID. In this example, the organizer ID is 
```
167
```

.

## Change Where the Add New Button Goes

By default, the Add New button sends people to the submission form that Community provides. Add 
```
new_event_url
```

 to send them to a different page instead, such as one of your own pages that has the submission form shortcode on it.

In this example, the list of a user’s submitted events shows an Add New button that goes to your own URL. Replace the URL with the address of the page where you’ve added the submission form shortcode.

```
[tribe_community_events new_event_url="https://example.com/submit-an-event/" view="my_events"]
```

## Change Where the View Your Submitted Events Button Goes

By default, the View Your Submitted Events button sends people to the list of events that Community provides. Add 
```
event_list_url
```

 to send them to a different page instead, such as one of your own pages that has the submitted events list shortcode on it.

In this example, the submission form shows a View Your Submitted Events button that goes to your own URL. Replace the URL with the address of the page where you’ve added the submitted events list shortcode.

```
[tribe_community_events event_list_url="https://example.com/my-events/" view="submission_form"]
```

---

## Show the Attendees for an Event

If you’d like to display a report of attendees who have registered for a particular event that a user has submitted to the calendar, this shortcode will display that on any post or page. It also provides the user with updated information about the names and emails of registered attendees. Replace 
```
your_event_id
```

 with the event’s ID. [Here’s how to find the event ID](#edit-event).

```
[tribe_community_tickets view="attendees_report" id="your_event_id"]
```

People need to be logged in and have permission to edit that event to see the report. Anyone else sees a login form or a permission message instead.

## Show Ticket Sales for an Event

With this shortcode, you can display a ticket sales report for a particular event that a user has submitted to the calendar, providing the number of tickets sold and the revenue from sales. Replace 
```
your_event_id
```

 with the event’s ID. [Here’s how to find the event ID](#edit-event).

```
[tribe_community_tickets view="sales_report" id="your_event_id"]
```

As with the attendees report, people need to be logged in and have permission to edit that event to see the report.

---

