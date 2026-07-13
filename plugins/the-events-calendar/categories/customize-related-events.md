# Customize Related Events

*Category from The Events Calendar documentation*

---

## Customizing Related Events

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-related-events/](https://docs.nexcess.com/software/the-events-calendar/customize-related-events/)

The “Related Events” feature in The Events Calendar plugin is a valuable tool that automatically displays a selection of events related to the one currently being viewed. This feature enhances user engagement by suggesting additional events that match the visitor’s interests, thereby increasing the likelihood of prolonged site interaction and event attendance.

Showcasing events with similar themes, categories, or locations helps users discover more of what they are interested in without needing to perform additional searches. Additionally, this feature is beneficial for [internal linking for SEO](https://yoast.com/internal-linking-for-seo-why-and-how/), as it creates more interconnected pages within your site, improving navigation and potentially boosting your site’s search engine rankings.

This improves the user experience and helps event organizers promote a more comprehensive range of events, potentially boosting attendance and participation across the board.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/tec-related-events.jpg)

## Change the Number of Related Events Displayed

By default, the related events section will display three events, but that quantity can be modified by using the following PHP snippet:

```
function tribe_related_posts_args_limiter ( $args = array() ) { 
$args['posts_per_page'] = 5; // Change this to whatever number you'd like. 
return $args; 
} 
add_filter( 'tribe_related_posts_args', 'tribe_related_posts_args_limiter', 10, 1 );
```

The code above customizes the quantity to 5, but you can specify any number.

## Show Related Events at the Same Venue

The Related Events feature of [Events Calendar Pro](https://theeventscalendar.com/product/wordpress-events-calendar-pro/) allows you to display additional upcoming events on your single events pages, based on the [event category](https://docs.nexcess.com/software/the-events-calendar/event-categories-tags/). If you’re not using event categories or simply find it more useful to show your users other events happening at the same venue, this snippet is here to help!

```
function tribe_modify_related_posts_args ( $args ) {
	$venue_id = tribe_get_venue_id();

	if ( $venue_id ) {
		unset( $args['tax_query'] );
		$args['meta_query'] = [
			'relation' => 'AND',
			[
				'key' => '_EventVenueID',
				'value' => $venue_id,
				'compare' => '=',
			]
		];
	}

	return $args;
}
add_filter( 'tribe_related_posts_args', 'tribe_modify_related_posts_args' );
```

Add this to the functions.php file of your child theme, and voila! Your Related Events section will now display upcoming events by venue.

## Exclude Recurring Event Instances from Related Events

When working with recurring events, you might notice that multiple instances of the same event series appear in the **Related Events** section on an individual event page. At first glance, this can feel unexpected, especially if you’re aiming to use the Related Events area to showcase *other* upcoming events that visitors might be interested in.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/ztYleoN80C-1-1024x1000-1.jpg)

For example, if you have a daily recurring event, its other daily instances may fill all the slots, leaving no room for different events from the same category to appear.

Allowing variety in the Related Events section can make your event pages more engaging and useful for visitors. Instead of showing several versions of the same event, you can highlight a mix of upcoming activities, helping visitors discover more of what’s happening on your site and increasing overall event visibility.

Use the following snippet to filter out recurring event instances from the Related Events section, ensuring that only unique events appear instead of multiple dates from the same series.

```
<?php //Do not copy this line

add_filter( 'tribe_related_posts_args', function ( $args ) {
	// Ensure we have a valid post ID
	$post_id = get_the_ID();
	if ( ! $post_id ) {
		return $args;
	}

	// Get the series - bail early if none exists
	$series = tec_series()->where( 'event_post_id', $post_id )->first();
	if ( ! $series || ! isset( $series->ID ) ) {
		return $args;
	}

	// Get all recurring events in the series
	$recurring_events = tribe_events()->where( 'series', $series->ID )->pluck( 'ID' );
	if ( empty( $recurring_events ) ) {
		return $args;
	}

	// Normalize recurring event IDs
	$recurring_ids = array_map(
		[ TECEventsCustom_TablesV1ModelsOccurrence::class, 'normalize_id' ],
		$recurring_events
	);

	// Ensure post__not_in exists and merge the IDs
	if ( ! isset( $args['post__not_in'] ) ) {
		$args['post__not_in'] = array();
	}

	$args['post__not_in'] = array_merge( $args['post__not_in'], $recurring_ids );

	$args['hide_subsequent_recurrences'] = true;

	return $args;
} );
```

With this code in place, your Related Events section will now display a more diverse set of events, rather than multiple instances from the same series.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/bfHwTTKsEV-1024x999-1.jpg)

#### For Developers

- [tribe_related_posts_args](https://docs.theeventscalendar.com/reference/hooks/tribe_related_posts_args/)
- [tec_series()](https://docs.theeventscalendar.com/apis/custom-tables/events/#series)
- [tribe_events()](https://docs.theeventscalendar.com/apis/custom-tables/events/#creating-and-reading-events-using-the-orm)
- [Occurrence::normalize_id()](https://docs.theeventscalendar.com/reference/classes/tec-events-custom_tables-v1-models-occurrence/normalize_id/)

---

