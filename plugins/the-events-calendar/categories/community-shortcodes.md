# Community Shortcodes

*Category from The Events Calendar documentation*

---

## How to Use Community Events Shortcodes

**Source:** [https://docs.nexcess.com/software/the-events-calendar/community-shortcodes/](https://docs.nexcess.com/software/the-events-calendar/community-shortcodes/)

[Community](https://docs.nexcess.com/software/the-events-calendar/community-events/) adds pages to your site where people submitting events can access the form to [submit](https://docs.nexcess.com/software/the-events-calendar/community-events/) or [edit](https://docs.nexcess.com/software/the-events-calendar/community-events/), and [manage attendees and orders](https://docs.nexcess.com/software/the-events-calendar/ticket-orders/). But sometimes you might want to provide front-end access to these settings and tools to logged-in approved users or even use one of your own pages or posts instead of what Community provides out of the box.

That’s what we’re going to walk through in this tutorial. In fact, Community provide a set of shortcodes you can use to embed forms and event editing functionality within other WordPress pages and posts. We’ll show you how to use these Community Shortcodes:

- Submission form [[tribe_community_events]](#ce-submit)
- New event URL [[tribe_community_events new_event_url=" "]](#new-event-url)
- Event List [[tribe_community_events event_list_url=" "]](#event-list)
- Edit My Events [[tribe_community_events view="my_events"]](#edit-event-user)
- Edit an Event [[tribe_community_events view="edit_event" id="your_event_id"]](#edit-event)
- Edit Venue [[tribe_community_events view="edit_venue" id="your_venue_id"]](#edit-venue)
- Edit Organizer [[tribe_community_events view="edit_organizer" id="your_organizer_id"]](#edit-organizer)
- Attendees Report [[tribe_community_tickets view="attendees_report" id="your_event_id"]](#ct-ar)
- Sales Report [[tribe_community_tickets view="sales_report" id="your_event_id"]](#ct-sr)

That’s a lot of stuff, so let’s break those down by plugin with examples of what they do and how they work.

## Submission Form Shortcode

This is the form that allows users to submit events to your calendar. It provides all of the necessary fields and information needed to create an event.

For each of the below shortcodes, you’ll use this shortcode as a base: 
```
[tribe_community_events view="[Value]" id="[Post ID]"]
```

Then, you’ll add a *view* that identifies which form you’d like to display on the front end. Lastly, you’ll use your Community Events post ID to identify which Community Events form you’d like to display.

Below are the values that you can choose from with Community Events.

| Value | What it does | Example |
| --- | --- | --- |
| my_events | Displays a list of events that the currently logged-in user has submitted to the calendar. | [tribe_community_events view="my_events"] |
| submission_form | Displays the form to submit an event to the calendar. | [tribe_community_events view="submission_form"] |
| new_event_url | Overrides the Add New button link to go to a custom URL. | [tribe_community_events new_event_url="url where you have entered the CE Submission Form Shortcode" view="my_events"] |
| event_list_url | Overrides the View Your Submitted Events button link to go to a custom URL. | [tribe_community_events event_list_url="url where you have entered the CE Event List Shortcode" view="submission_form"] |
| edit_event | Displays the editing screen for a particular event, when used with the event post ID. | [tribe_community_events view="edit_event" id="123"] |
| edit_venue | Displays the editing screen for a particular venue, when used with the venue post ID. | [tribe_community_events view="edit_venue" id="123"] |
| edit_organizer | Displays the editing screen for a particular organizer, when used with the organizer post ID. | [tribe_community_events view="edit_organizer" id="123"] |

---

## Attendees Report Shortcode

If you’d like to display a report of attendees who have registered for a particular event that a user has submitted to the calendar, this shortcode will display that on any post or page. It also provides the user with updated information about the names and emails of registered attendees. 
```
[tribe_community_tickets view="attendees_report" id="your_event_id"]
```

## Sales Report Shortcode

With this shortcode, you can display a ticket sales report for a particular event that a user has submitted to the calendar, providing the number of tickets sold and the revenue from sales. 
```
[tribe_community_tickets view="sales_report" id="your_event_id"]
```

---

