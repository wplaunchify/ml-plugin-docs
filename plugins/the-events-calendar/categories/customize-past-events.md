# Customize Past Events

*Category from The Events Calendar documentation*

---

## Customizing Past Events

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-past-events/](https://docs.nexcess.com/software/the-events-calendar/customize-past-events/)

Past events on your calendar may warrant their own treatment — different ordering, different styling, or visual cues that distinguish them from upcoming events. This article collects customizations for controlling how past events appear across your calendar.

## Showing Past Events in Reverse Order

The calendar’s list and photo views show past events in chronological order by default. That means the oldest events are displayed first and get newer as you go. If you like to show the events in reverse order, where the newest events are displayed first, you can use this snippet.

Add this to your theme’s 
```
functions.php
```

 file or by using the [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin. You will then see events showing in reverse chronological order, with the most recent past event at the top of the page in the calendar’s list and photo views.

```
/**
 * Changes Past Event Reverse Chronological Order
 *
 * @param array $template_vars An array of variables used to display the current view.
 *
 * @return array Same as above. 
 */
function tribe_past_reverse_chronological_v2( $template_vars ) {

  if ( ! empty( $template_vars['is_past'] ) ) {
    $template_vars['events'] = array_reverse( $template_vars['events'] );
  }

  return $template_vars;
}
// Change List View to Past Event Reverse Chronological Order 
add_filter( 'tribe_events_views_v2_view_list_template_vars', 'tribe_past_reverse_chronological_v2', 100 );
// Change Photo View to Past Event Reverse Chronological Order
add_filter( 'tribe_events_views_v2_view_photo_template_vars', 'tribe_past_reverse_chronological_v2', 100 );
```

## Show Past Events in Reverse Order with a Shortcode

If you are using a shortcode to display your events and would like to show the past events in reverse order there as well, you can use the following snippet.

```
<?php

add_filter(
	'tribe_events_views_v2_view_template_vars',
	function( $template_vars, $view ) {
	  	$context = $view->get_context();
   
		// Not doing a shortcode - bail.
		if ( empty( $context->get( 'shortcode' ) ) ) {
			return $template_vars;
		}
	   
		// Get the date set for the shortcode and today's date
		$targetDate = strtotime($template_vars['request_date']->format( 'Y-m-d' ));
		$currentDate = strtotime(date("Y-m-d"));

		// If the date set in the past set is_past true
		if ($targetDate < $currentDate) {
			$template_vars['is_past'] = true;
		}

		// reverse order if is_past true
		if ( !empty( $template_vars['is_past'] ) ) {
			$template_vars['events'] = array_reverse( $template_vars['events'] );
		}
   
	  	return $template_vars;
	},
	8,
	2
);
```

## Custom CSS Classes for Past vs. Upcoming Events

When styling your website, you may want the single page view for a past event to look visually different from an upcoming event. For example, you might want to gray out past event content to visually signify that the event has already concluded.

This guide provides a code snippet that automatically adds a specific CSS class—either **past-event** or **upcoming-event**—to the HTML **<body>** tag of a single event page. This custom class allows you to target and style virtually any element on the page using CSS or JavaScript.

The following code uses the standard WordPress 
```
body_class
```

 filter. It checks if the current page is a single event (
```
tribe_events
```

), compares the event’s end date with the current time, and then appends the appropriate class to the body.

```
/**
 * Add 'past-event' or 'upcoming-event' class to the body on a single event page.
 */
add_filter( 'body_class', function( $classes ) {
	if ( function_exists( 'tribe_get_end_date' ) && is_singular( 'tribe_events' ) ) {
		$event_id   = get_the_ID();
		// Get the event end date as a Unix timestamp
		$event_end  = tribe_get_end_date( $event_id, true, 'U' );
		$current    = current_time( 'timestamp' );

		if ( $event_end < $current ) {
			// Event has ended
			$classes[] = 'past-event';
		} else {
			// Event is upcoming or currently running
			$classes[] = 'upcoming-event';
		}
	}
	return $classes;
});
```

#### How to Use the Code

To implement this customization:

1. Add the snippet to your site’s **functions.php** file (recommended only if using a child theme).
2. **Or**, preferably, use a dedicated plugin like [Code Snippets](https://wordpress.org/plugins/code-snippets/) to manage your custom code.

Once the code is added, the HTML 
```
<body>
```

 tag on single event pages will contain the new class, like this:

```
<body class="tribe-events-single tribe-events past-event ...">
<body class="tribe-events-single tribe-events upcoming-event ...">
```

#### Example Use Case (Styling)

With the custom class applied to the body, you can use simple CSS to differentiate past events.

For example, to gray out the event title on past event pages:

```
body.past-event .tribe-events-single-event-title {
    opacity: 0.5;
    color: #666; /* Optionally change the color */
}
```

You can target any element on the page, such as the event details, venue information, or even apply a subtle overlay to the page background using the new body class as the main selector.

This simple customization provides endless possibilities for styling your single event pages based on their status.

---

