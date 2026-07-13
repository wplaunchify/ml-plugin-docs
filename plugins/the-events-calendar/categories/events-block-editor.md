# Events Block Editor

*Category from The Events Calendar documentation*

---

## Using the Block Editor with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/events-block-editor/](https://docs.nexcess.com/software/the-events-calendar/events-block-editor/)

The Events Calendar and Event Tickets include a full set of custom blocks for creating and managing events, tickets, and RSVPs in the WordPress block editor. This article covers what each block does, how to enable the block editor for events, and how to customize the default block template that loads when you create a new event.

## Enabling the Block Editor for Events

The block editor is WordPress’s default editor for posts and pages. For events, it needs to be enabled separately. Go to **Events → Settings → General → Editing** and check the box to activate the block editor for events.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-5-9.jpg)

Once enabled, new events will open in the block editor with the default set of Event blocks pre-loaded. Existing events created in the classic editor will open using the [Event Details Classic block](#h-the-event-details-classic-block), which preserves the original layout. You can keep using that, add individual blocks alongside it, or switch entirely to the newer blocks — it’s up to you.

### Testing Before Switching

If you’ve been using the classic editor and are switching to the block editor for events, it’s worth testing on a [staging site](https://docs.nexcess.com/software/the-events-calendar/creating-and-using-a-wordpress-staging-site/) first. A staging site is a copy of your live site where you can verify that your theme and other plugins behave as expected before making the change in production.

The latest versions of The Events Calendar, Events Calendar Pro, Event Tickets, and Event Tickets Plus are all compatible with the block editor. What varies is how your theme and other plugins handle it — particularly page builder themes, which can behave differently. Our [Testing for Conflicts](https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/) guide can help if you run into issues. If you want to keep using the classic editor for events, see [Using the Classic Editor to Manage Events](https://theeventscalendar.com/knowledgebase/k/using-the-classic-editor-to-manage-events/).

## Event Blocks

The following blocks are added by The Events Calendar and Events Calendar Pro. You’ll find them in the block inserter under the **Events** section.

![The Events section in the WordPress block inserter showing the available event blocks](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2018-12-04-at-8.27.24-PM-e1543984117727-249x300-1.jpg)

#### Event Date Time

The Event Date Time block is required on every event — it’s where you set the date, time, and duration. Click the calendar to pick a date, use the time dropdowns, or type directly into the field at the top. Select **All Day** from the start time dropdown for all-day events. Toggle **multi-day** to set separate start and end dates.

Events Calendar Pro users will see a **Repeat This Event** option in the block panel, which exposes all recurrence rule and exception settings for creating recurring events.

![The Event Date Time block in the editor showing date and time fields](https://docs.nexcess.com/wp-content/uploads/2026/06/KB-The-Event-Date-Time-block.jpg)

![The Event Date Time block configured for an all-day event](https://docs.nexcess.com/wp-content/uploads/2026/06/KB-Creating-an-all-day-event.jpg)

![The Event Date Time block configured for a multi-day event](https://docs.nexcess.com/wp-content/uploads/2026/06/KB-multi-day-event-1024x722-1.png)

![The recurring event options in the Event Date Time block (Events Calendar Pro)](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-05-23-at-7.36.55-AM.jpg)

#### Event Venue

The Event Venue block displays your event’s location. As you start typing, it suggests existing venues or lets you create a new one from within the block. Map display and map link options are available in the block sidebar settings.

![The Event Venue block showing venue search with autocomplete suggestions](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2018-12-04-at-5.14.23-PM.jpg)

![The Event Venue block preview showing the venue name and map link](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2018-12-04-at-8.11.44-PM.jpg)

#### Event Organizer

The Event Organizer block sets and displays the organizer for the event. Like the Venue block, you can select from existing organizers or create a new one inline.

![The Event Organizer block showing organizer selection](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2018-12-04-at-5.19.33-PM-665x305-1.jpg)

#### Event Price

The Event Price block displays the event price and an optional price description. The description field works for non-monetary pricing too — for example, *By Donation*. The preview updates in real time as you type.

![The Event Price block showing price and description fields](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2018-12-04-at-5.22.04-PM-665x256-1.jpg)

#### Event Website

The Event Website block creates a linked button pointing to an external event URL. You can customize the button label.

![The Event Website block showing a URL field and button label field](https://docs.nexcess.com/wp-content/uploads/2026/06/image-17-3.jpg)

#### Event Sharing

The Event Sharing block lets you position and customize the Google Calendar and iCal subscribe buttons. You can change the labels, hide one of the options, or remove the block entirely.

![The Event Sharing block showing the Google Calendar and iCal button options](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-02-18-at-7.27.25-AM.jpg)

#### Event Categories

Event Categories assigned in the Document Settings sidebar can also be displayed in the event content by adding the Event Categories block.

![The Event Categories block showing assigned categories displayed in the event content](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-11-29-at-11.41.12-AM.jpg)

#### Tags

Tags added in the Document Settings sidebar can be displayed in the event content using the Tags block.

#### Related Events (Events Calendar Pro)

The Related Events block displays up to three upcoming events that share the same categories or tags as the current event. If no matching upcoming events exist, nothing is displayed.

#### Additional Fields Blocks (Events Calendar Pro)

When you create custom Additional Fields under **Events → Settings → Additional Fields**, a corresponding block is automatically created for each field. The block takes the title you entered and gives event creators the configured input options.

![The block inserter showing Additional Fields blocks in their own section](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2018-12-04-at-8.33.51-PM.jpg)

![An example Additional Fields block showing a dropdown-type custom field](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2018-12-04-at-8.34.23-PM.jpg)

#### Virtual Event (Events Calendar Pro)

The Virtual Event block acts as a placeholder for virtual event content. Add it to the editor, fill in the virtual event details at the bottom of the page, then move the block to the position you want on the event layout.

![The Virtual Event placeholder block in the editor](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-10-05-at-2.41.17-PM.jpg)

![The virtual event details panel at the bottom of the event editor](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-10-05-at-2.42.41-PM.jpg)

![The Virtual Event block repositioned within the event content layout](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-10-05-at-2.42.19-PM.jpg)

#### Event Details Classic

When you open an event that was originally created in the classic editor, it loads with the Event Details Classic block, which preserves the original event information layout. You can save it as-is, add new blocks alongside it, or replace it entirely with the individual blocks described above.

If you use new blocks alongside the Event Details Classic block, content syncs between them. For example, updating the price in the Event Price block also updates the price in the Event Details Classic block.

![The Event Details Classic block showing event information in the legacy layout](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2018-12-04-at-8.46.27-PM-665x269-1.jpg)

## Ticket and RSVP Blocks

Event Tickets adds its own set of blocks for managing ticket sales and RSVPs. Look for these in the block inserter under the **Tickets** section.

![The Tickets section in the WordPress block inserter showing available ticket blocks](https://docs.nexcess.com/wp-content/uploads/2026/06/new-blocks-inserter-1024x429-1.jpg)

#### Tickets

The Tickets block lets you create and manage tickets directly in the editor. You can create and edit individual tickets, reorder them, and monitor sales from the block. On the front end, visitors see a ticket form for purchasing and checkout.

![The Tickets block in the editor showing the list of tickets and a sales summary](https://docs.nexcess.com/wp-content/uploads/2026/06/new-blocks-ticket-block-1024x554-1.jpg)

![The ticket editing panel within the Tickets block](https://docs.nexcess.com/wp-content/uploads/2026/06/new-blocks-ticket-block-edit-1024x725-1.jpg)

💡 Some features shown in these screenshots require Event Tickets Plus.

#### RSVP

The RSVP block lets attendees indicate whether they’re attending. You set the title, description, capacity, and availability dates. Visitors RSVP directly from the form on the event page.

![The RSVP block in the editor showing the RSVP form configuration](https://docs.nexcess.com/wp-content/uploads/2026/06/new-blocks-rsvp-block-1024x552-1.jpg)

![The RSVP editing panel](https://docs.nexcess.com/wp-content/uploads/2026/06/new-blocks-rsvp-1-911x1024-1.jpg)

#### Attendee List

The Attendee List block displays the gravatars of attendees on the front end of your event. It is powered by the [Public Attendees List](https://docs.nexcess.com/software/the-events-calendar/public-attendee-list/) feature and is available when tickets or RSVPs are active on an event.

![The Attendee List block showing attendee gravatars](https://docs.nexcess.com/wp-content/uploads/2026/06/new-blocks-attendees-1024x435-1.jpg)

For more on creating and managing tickets, see [Making Tickets](https://docs.nexcess.com/software/the-events-calendar/assigned-seating-tickets/).

## Adding Event Blocks to WordPress Pages and Posts

With [The Events Calendar](https://wordpress.org/plugins/the-events-calendar/) and [Events Calendar Pro](https://theeventscalendar.com/products/wordpress-events-calendar/), in addition to adding event blocks to your events using the Block Editor, you can also add any of our available [event blocks](https://docs.nexcess.com/software/the-events-calendar/events-block-editor/) to a WordPress page or post.

To add an event block to a WordPress page, head over to a new page in the Block Editor. Click on the + symbol and search for “event” to see all available event blocks. From there, click on your block of choice to see your event content embedded on your WordPress page.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-6-3.jpg)

### Events List Block

This Pro block is also available with the free The Events Calendar, though it contains limited options. With the Events List block, you’ll find a list of upcoming events. After adding it to your WordPress page, click on the block to change the display of the options that appear.

o your WordPress page, click on the block to change the display of the options that appear.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-01-18-at-6.55.57-AM-1.jpg)The Events Calendar Events List Block

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-01-18-at-6.56.18-AM-1.jpg)The Events Calendar Events List Block

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-01-18-at-6.59.54-AM-1.jpg)Events Calendar Pro Events List Block

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-01-18-at-7.01.21-AM-1.jpg)Events Calendar Pro Events List Block

### Mini Calendar Block

lock for Events Calendar Pro displays a Month View calendar on any WordPress page or post. You’ll find additional options to configure the display of the calendar by clicking on the Mini Calendar block in the Block Editor.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-01-18-at-7.02.43-AM-1.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-01-18-at-7.09.39-AM-1.jpg)

### Featured Venue Block

With this Events Calendar Pro block, you can select a venue to display upcoming events for. Click on the block to choose the venue to feature, along with other options.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-01-18-at-7.07.15-AM-1.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-01-14-at-12.29.31-PM-1.jpg)

### Event Countdown Block

This Pro block displays a countdown until the event of your choice occurs. After selecting the block, you can click on it to choose a countdown for the next upcoming event or choose your specific event from the dropdown menu.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-01-14-at-12.36.01-PM-1.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-01-14-at-12.36.08-PM-1.jpg)

## Customizing the Default Block Template

When you create a new event, the block editor pre-loads a default set of blocks in a specific order. You can customize this template using the 
```
tribe_events_editor_default_template
```

 filter.

The default block order is:

- ```
tribe/event-datetime
```
- ```
core/paragraph
```
- ```
tribe/event-price
```
- ```
tribe/event-organizer
```
- ```
tribe/event-venue
```
- ```
tribe/event-website
```
- ```
tribe/event-links
```

The filter parameters are:

- ```
$template
```

 — array of template blocks to generate
- ```
$post_type
```

 — string; the post type being edited (defaults to 
```
tribe_events
```

)
- ```
$args
```

 — array of arguments used to set up the template

Each block in the template array is itself an array where the first key (
```
0
```

) is the block slug. Add these snippets to your child theme’s 
```
functions.php
```

 file or via a [code snippets plugin](https://docs.nexcess.com/software/the-events-calendar/code-snippets/).

### Remove a Single Block

This example removes the Event Price block from the default template:

```
add_filter( 'tribe_events_editor_default_template', function( $template ) {
    // Collect an array of template block slugs
    $template_search = array_column( $template, 0 );

    // Find the index of tribe/event-price
    $price = array_search( 'tribe/event-price', $template_search );

    // Remove it
    array_splice( $template, $price, 1 );

    return $template;
}, 11, 1 );
```

### Replace the Entire Template

This example replaces the default template with a custom set of blocks:

```
add_filter( 'tribe_events_editor_default_template', function( $template ) {
    $template = [
        [ 'tribe/event-datetime' ],
        [ 'core/paragraph', [
            'placeholder' => __( 'Add Description...', 'the-events-calendar' ),
        ] ],
        [ 'tribe/event-organizer' ],
        [ 'tribe/event-venue' ],
    ];
    return $template;
}, 11, 1 );
```

### Including WordPress Core Blocks

You can include any standard WordPress block in the template alongside TEC blocks. Use the block’s “Name” value from the [WordPress core blocks reference](https://developer.wordpress.org/block-editor/reference-guides/core-blocks/). For example, to add the Featured Image block before the paragraph:

```
add_filter( 'tribe_events_editor_default_template', function( $template ) {
    $template = [
        [ 'tribe/event-datetime' ],
        [ 'core/post-featured-image' ],
        [ 'core/paragraph', [
            'placeholder' => __( 'Add Description...', 'the-events-calendar' ),
        ] ],
        [ 'tribe/event-organizer' ],
        [ 'tribe/event-venue' ],
    ];
    return $template;
}, 11, 1 );
```

### Remove the Related Events Block

```
<?php //Do not copy this line

add_filter( 'tribe_events_editor_default_template', function ( $template ) {
	$template_search = array_column( $template, 0 );
	$block_index     = array_search( 'tribe/related-events', $template_search );

	if ( false !== $block_index ) {
		array_splice( $template, $block_index, 1 );
	}

	return $template;
}, 99 );
```

### Remove RSVP, Tickets, and Attendees Blocks

```
<?php //Do not copy this line

remove_action( 'admin_init', array( tribe( 'tickets.editor' ), 'add_tickets_block_in_editor' ) );
```

---

