# Customize Eventbrite Tickets

*Category from The Events Calendar documentation*

---

## Customizing the Eventbrite Tickets Display

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-eventbrite-tickets/](https://docs.nexcess.com/software/the-events-calendar/customize-eventbrite-tickets/)

The Eventbrite ticket form that appears on your single event pages works well at its default size and position for most setups — but sometimes you need to move it or make it taller so all the ticket fields are visible. Both adjustments take a single PHP snippet. Add either one to your theme’s 
```
functions.php
```

 file or use a tool like the free [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin.

## Changing the Ticket Form’s Position

By default, the Eventbrite ticket form is placed just below the event details (“meta”) box. If you’d rather have it higher up — for example, immediately above the meta box so it’s more visible — this snippet moves it:

```
add_action( 'init', 'move_eb_ticket_form' );

function move_eb_ticket_form() {
    if ( class_exists( 'Tribe__Events__Tickets__Eventbrite__Main' ) ) {
        $display_tickets = [ tribe( 'eventbrite.main' ), 'print_ticket_form' ];
        remove_action( 'tribe_events_single_event_after_the_meta', $display_tickets, 9 );
        add_action( 'tribe_events_single_event_before_the_meta', $display_tickets );
    }
}
```

If you want the form somewhere else entirely, change the target action on the last 
```
add_action
```

 line. As the hook name suggests, 
```
tribe_events_single_event_before_the_meta
```

 places it before the meta block. To display it before the event description instead, change that line to:

```
add_action( 'tribe_events_single_event_before_the_content', $display_tickets );
```

Any hook fired on the single event template is a valid target, so you can place the ticket form wherever fits your layout best.

## Adjusting the Form Height

The Eventbrite ticket form is rendered inside an iframe with a default height. When the form contains more fields than that default can accommodate — multiple ticket types, for example — some fields may be hidden or cut off. This snippet increases the iframe height based on how many visible tickets the event has:

```
add_filter( 'tribe_events_eventbrite_iframe_height', function ( $iframe_height, $post_id, $event, $num_visible_tickets ) {
    $intended_height = 400 + 160 * $num_visible_tickets;
    if ( $iframe_height < $intended_height ) {
        $iframe_height = $intended_height;
    }
    return $iframe_height;
}, 100, 4 );
```

Adjust the 
```
$intended_height
```

 calculation if the default (a 400-pixel base plus 160 pixels per visible ticket) doesn’t match how your forms actually render. The snippet only increases the height — if Eventbrite ever returns a taller iframe, the snippet leaves it alone.

#### For Developers

- [tribe_events_eventbrite_iframe_height](https://docs.theeventscalendar.com/reference/hooks/tribe_events_eventbrite_iframe_height/) — filter reference for the iframe height value

---

