# Protected Content

*Category from The Events Calendar documentation*

---

## How to Show Event Content Only to Attendees

**Source:** [https://docs.nexcess.com/software/the-events-calendar/protected-content/](https://docs.nexcess.com/software/the-events-calendar/protected-content/)

The Event Tickets Protected Content shortcodes allow you to display content on any WordPress page or post to certain users if they are logged in and whether or not they have registered for a given event, or registered for a specific type of ticket or RSVP.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/etp-shortcode-protected-content-1024x953-1.png)The first shortcode will display for users who are logged in and have registered for the event with ID 123. The second shortcode will display for users who have not registered for the event.

## What it’s good for

There are times when you might want to show content to specific users. For example, let’s say you’re creating a page on your site that promotes one of your events that contains either tickets or RSVPs. Protected content can be useful for many things, including:

- Displaying a livestream video only to users who have registered for the event.
- Sharing links or other resources to users who have registered for the event.
- Showing a promotional video if the user has not registered for the event.
- Providing coupon codes as an incentive for users who have not registered for the event.

## Requirements

Both Event Tickets and the [Event Tickets Plus add-on](https://theeventscalendar.com/wordpress-event-tickets/) are required to use the Ticket and RSVP Protected Content shortcodes.

## Basic usage

For tickets:

```
[tribe_tickets_protected_content post_id="123"]
Your content
[/tribe_tickets_protected_content]
```

For RSVPs:

```
[tribe_tickets_rsvp_protected_content post_id="123"]
Your content
[/tribe_tickets_rsvp_protected_content]
```

## Parameters

Both shortcodes accept the following parameters to control the visibility of content:

- ```
post_id
```

 (Required) – The ID of the event, page or post where the ticket or RSVP is created.
- ```
on
```

 – Sets the date and time that the protected content should start to display. Use 
```
event_start_date
```

 to display the protected content when the event starts. Otherwise, provide the specific date and time in 
```
YYYY-MM-DD HH:MM:SS
```

 format (e.g. 2020-06-01 07:00:00 for June 1, 2020 at 7:00 am). Default = empty.

The 
```
[tribe_tickets_protected_content]
```

shortcode takes three additional parameters:

- ```
ticket_ids
```

 – A comma-separated list of IDs for tickets a user must purchase to see the protected content. If left blank, all tickets for a given event will be displayed.
- ```
not_ticket_ids
```

 – A comma-separated list of IDs for tickets that should be excluded when checking if protected content should be displayed for a user. In other words, this ensures that only attendees who have purchased other tickets for the event will see the protected content. If left blank, no IDs will be evaluated.
- ```
ticketed
```

 – Determines if a user sees protected content based on whether the user is or is not an attendee for the event.- ```
1
```

 (Default) = Checks that the user **is an attendee** before showing the content.
- ```
0
```

 =  Checks that the user **is not an attendee** before showing the content.

The 
```
[tribe_tickets_rsvp_protected_content]
```

shorcode takes three additional parameters that are similar to the ones for tickets:

- ```
rsvp_ids
```

 – A comma-separated list of IDs for RSVPs a user must purchase to see the protected content. If left blank, all RSVPs for a given event will be displayed.
- ```
not_rsvp_ids
```

 – A comma-separated list of RSVP IDs that should be excluded when checking if protected content should be displayed for a user. In other words, this ensures that only attendees who have registered for other RSVP types for the event will see the protected content. If left blank, no IDs will be evaluated.
- ```
rsvpd
```

 – Determines if a user sees protected content based on whether the user is or is not an attendee for the event.- ```
1
```

 (Default) = Checks that the user **is an attendee** before showing the content.
- ```
0
```

 =  Checks that the user **is not an attendee** before showing the content.

## How to find the IDs

![](https://docs.nexcess.com/wp-content/uploads/2026/06/IDs-for-Event-Tickets-Plus-Shortcodes-1024x755-1.png)To find the Post ID needed, visit the attendees page of the event.

## Ticket examples

#### Example 1: Protected content based on any attendee for the current event

```
[tribe_tickets_protected_content]
This content will only show to attendees of the current event this shortcode is embedded on.
[/tribe_tickets_protected_content]
```

#### Example 2: Protected content based on any attendee for a specific event

```
[tribe_tickets_protected_content post_id="123"]
This content will only show to attendees of the event (ID: 123).
[/tribe_tickets_protected_content]
```

Where 123 is the ID of the post/page/event where the tickets were created.

#### Example 3: Protected content based on attendees for specific tickets on a specific event

```
[tribe_tickets_protected_content post_id="123" ticket_ids="32,50,90"]
This content will only show to attendees of the event (ID: 123) who have purchased certain tickets (IDs: 32, 50, or 90).
[/tribe_tickets_protected_content]
```

Where 123 is the ID of the post/page/event where the tickets were created.

#### Example 4: Protected content based on any non-attendee for the current event

```
[tribe_tickets_protected_content ticketed="0"]
This content will only show to people who are NOT attendees of the current event this shortcode is embedded on.
[/tribe_tickets_protected_content]
```

Where 123 is the ID of the post/page/event where the tickets were created.

#### Example 5: Protected content based on any non-attendee for a specific event

```
[tribe_tickets_protected_content post_id="123" ticketed="0"]
This content will only show to people who are NOT attendees of the event (ID: 123).
[/tribe_tickets_protected_content]
```

Where 123 is the ID of the post/page/event where the tickets were created.

#### Example 6: Protected content based on non-attendees for specific tickets on a specific event

```
[tribe_tickets_protected_content post_id="123" ticket_ids="32,50,90" ticketed="0"]
This content will only show to people who are NOT attendees of the event (ID: 123) who have NOT purchased certain tickets (IDs: 32, 50, or 90).
[/tribe_tickets_protected_content]
```

Where 123 is the ID of the post/page/event where the tickets were created.

#### Example 7: Protected content for attendees on a specific event who are not an attendee of specific tickets

```
[tribe_tickets_protected_content post_id="123" not_ticket_ids="32,50,90"]
This content will only show to people who are attendees of the event (ID: 123) who have NOT purchased certain tickets (IDs: 32, 50, or 90).
[/tribe_tickets_protected_content]
```

Where 123 is the ID of the post/page/event where the tickets were created.

#### Example 8: Protected content for attendees that shows up on event start date

```
[tribe_tickets_protected_content post_id="123" on="event_start_date"]
This content will only show to people who are attendees of the event (ID: 123) on/after the event start date.
[/tribe_tickets_protected_content]
```

Where 123 is the ID of the post/page/event where the tickets were created.

#### Example 9: Protected content for attendees that shows up after a specific date

```
[tribe_tickets_protected_content post_id="123" on="2020-05-01 08:00:00"]
This content will only show to people who are attendees of the event (ID: 123) on/after May 1st, 2020 at 8am (according to the site timezone).
[/tribe_tickets_protected_content]
```

Where 123 is the ID of the post/page/event where the tickets were created.

## RSVP examples

#### Example 1: Protected content based on any RSVP attendee for the current event

```
[tribe_tickets_rsvp_protected_content]
This content will only show to RSVP attendees of the current event this shortcode is embedded on.
[/tribe_tickets_rsvp_protected_content]
```

#### Example 2: Protected content based on any RSVP attendee for a specific event

```
[tribe_tickets_rsvp_protected_content post_id="123"]
This content will only show to RSVP attendees of the event (ID: 123).
[/tribe_tickets_rsvp_protected_content]
```

Where 123 is the ID of the post/page/event where the RSVP’s were created.

#### Example 3: Protected content based on RSVP attendees for specific tickets on a specific event

```
[tribe_tickets_rsvp_protected_content post_id="123" ticket_ids="32,50,90"]
This content will only show to RSVP attendees of the event (ID: 123) who have RSVP'd to certain RSVP's (IDs: 32, 50, or 90).
[/tribe_tickets_rsvp_protected_content]
```

Where 123 is the ID of the post/page/event where the RSVP’s were created.

#### Example 4: Protected content based on any RSVP non-attendee for the current event

```
[tribe_tickets_rsvp_protected_content rsvpd="0"]
This content will only show to people who are NOT RSVP attendees of the current event this shortcode is embedded on.
[/tribe_tickets_rsvp_protected_content]
```

Where 123 is the ID of the post/page/event where the RSVP’s were created.

#### Example 5: Protected content based on any RSVP non-attendee for a specific event

```
[tribe_tickets_rsvp_protected_content post_id="123" rsvpd="0"]
This content will only show to people who are NOT RSVP attendees of the event (ID: 123).
[/tribe_tickets_rsvp_protected_content]
```

Where 123 is the ID of the post/page/event where the RSVP’s were created.

#### Example 6: Protected content based on RSVP non-attendees for specific tickets on a specific event

```
[tribe_tickets_rsvp_protected_content post_id="123" ticket_ids="32,50,90" rsvpd="0"]
This content will only show to people who are NOT RSVP attendees of the event (ID: 123) who have NOT RSVP'd to certain RSVP's (IDs: 32, 50, or 90).
[/tribe_tickets_rsvp_protected_content]
```

Where 123 is the ID of the post/page/event where the RSVP’s were created.

#### Example 7: Protected content for RSVP attendees on a specific event who are not an attendee of specific RSVP tickets

```
[tribe_tickets_rsvp_protected_content post_id="123" not_rsvp_ids="32,50,90"]
This content will only show to people who are RSVP attendees of the event (ID: 123) who have NOT RSVP'd to certain RSVP's (IDs: 32, 50, or 90).
[/tribe_tickets_rsvp_protected_content]
```

Where 123 is the ID of the post/page/event where the RSVP’s were created.

#### Example 8: Protected content for RSVP attendees that shows up on event start date

```
[tribe_tickets_rsvp_protected_content post_id="123" on="event_start_date"]
This content will only show to people who are RSVP attendees of the event (ID: 123) on/after the event start date.
[/tribe_tickets_rsvp_protected_content]
```

Where 123 is the ID of the post/page/event where the RSVP’s were created.

#### Example 9: Protected content for RSVP attendees that shows up after a specific date

```
[tribe_tickets_rsvp_protected_content post_id="123" on="2020-05-01 08:00:00"]
This content will only show to people who are RSVP attendees of the event (ID: 123) on/after May 1st, 2020 at 8am (according to the site timezone).
[/tribe_tickets_rsvp_protected_content]
```

Where 123 is the ID of the post/page/event where the RSVP’s were created.

---

