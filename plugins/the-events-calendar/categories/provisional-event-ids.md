# Provisional Event Ids

*Category from The Events Calendar documentation*

---

## Understanding Provisional Event IDs in The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/provisional-event-ids/](https://docs.nexcess.com/software/the-events-calendar/provisional-event-ids/)

In The Events Calendar, especially when working with recurring events or the custom tables system, you may encounter an ID that looks like a Post ID but is much larger (e.g., 
```
10000114
```

). This is a **provisional ID**, and it refers to a specific *occurrence* of an event, not the parent event post itself.

This guide explains what these IDs are and how to correctly convert them to their corresponding WordPress 
```
post->ID
```

.

## What is a Provisional ID?

The Events Calendar uses a custom table system (
```
wp_tec_occurrences
```

) to efficiently store and query individual instances of events, particularly for recurring event series. This system generates its own unique IDs for each occurrence to ensure high performance.

A provisional ID is the unique identifier for a single event occurrence within these custom tables. It is **not** the same as the standard WordPress Post ID for the 
```
tribe_events
```

 post type.

You will most likely encounter these IDs when:

- Looking at the URL of a single recurring event instance.
- Querying the 
```
wp_tec_occurrences
```

 database table directly.
- Working with certain hooks and filters related to event occurrences.

## The Problem: Mismatched IDs

Standard WordPress functions like 
```
get_post_meta()
```

, 
```
get_the_title()
```

, or 
```
get_permalink()
```

 require a standard 
```
post->ID
```

. If you pass a provisional ID to these functions, they will fail because there is no post in the 
```
wp_posts
```

 table with that ID.

## The Solution: normalize_id()

The Events Calendar provides a safe, forward-compatible utility function to resolve a provisional ID back to its proper WordPress Post ID.

The function is a static method: 
```
TECEventsCustom_TablesV1ModelsOccurrence::normalize_id()
```

This function accepts an ID (either provisional or a standard Post ID) and will always return the correct, integer-based WordPress Post ID.

## Code Snippet: Basic Usage

Here is a simple example of how to use the function to get the correct Post ID.

```
// The provisional ID you have (e.g., from a URL or database query).
$provisional_id = 10000114;

// Use the normalize_id() method to get the actual WordPress Post ID.
$event_post_id = TECEventsCustom_TablesV1ModelsOccurrence::normalize_id( $provisional_id );

// Always check that you received a valid integer ID before using it.
if ( is_int( $event_post_id ) && $event_post_id > 0 ) {
    
    // Now you can safely use the correct ID with any WordPress function.
    echo 'The title of this event is: ' . get_the_title( $event_post_id );
    
} else {
    
    // The ID could not be resolved.
    echo 'Could not find a valid event for the provided ID.';
    
}
```

## Template customization: Selectively display an event’s featured image in list view

Imagine a use case where you’d like to selectively show an event’s featured image in list view calendar display based on a category that the event is associated to. — In this use case, the [tribe_event_in_category()](https://docs.theeventscalendar.com/reference/functions/tribe_event_in_category/) function would be useful. However, if you have recurring events, this can have undesired effects. Read on for the solution.

## 1. Template customization

In this use case, we’d be interested in customizing the 
```
/wp-content/plugins/the-events-calendar/src/views/v2/list/event.php
```

 file (see [Template Customization Example](https://docs.nexcess.com/software/the-events-calendar/promoter-email-template/)) so make a copy of the file and place it in your site’s 
```
/wp-content/themes/[your-theme]/tribe/events/v2/list/
```

 folder.

## 2. Using the tribe_event_in_category() function

Edit the 
```
/wp-content/themes/[your-theme]/tribe/events/v2/list/event.php
```

 file, and replace its contents with the following:

```
<?php
$container_classes = [ 'tribe-common-g-row', 'tribe-events-calendar-list__event-row' ];
$container_classes['tribe-events-calendar-list__event-row--featured'] = $event->featured;

$event_classes = tribe_get_post_class( [ 'tribe-events-calendar-list__event', 'tribe-common-g-row', 'tribe-common-g-row--gutters' ], $event->ID );

$the_event_id = TECEventsCustom_TablesV1ModelsOccurrence::normalize_id ($event->ID);
?>
<div <?php tec_classes( $container_classes ); ?>>

	<?php $this->template( 'list/event/date-tag', [ 'event' => $event ] ); ?>

	<div class="tribe-events-calendar-list__event-wrapper tribe-common-g-col">
		<article <?php tec_classes( $event_classes ); ?>>
			<?php 
				if (tribe_event_in_category ('generated', $the_event_id)) {
					$this->template( 'list/event/featured-image', [ 'event' => $event ] );
				}
				else {
					echo('<div><p>No featured image to show</p></div>');
				}
			?>

			<div class="tribe-events-calendar-list__event-details tribe-common-g-col">

				<header class="tribe-events-calendar-list__event-header">
					<?php $this->template( 'list/event/date', [ 'event' => $event ] ); ?>
					<?php $this->template( 'list/event/title', [ 'event' => $event ] ); ?>
					<?php $this->template( 'list/event/venue', [ 'event' => $event ] ); ?>
					<?php $this->template( 'list/event/category', [ 'event' => $event ] ); ?>
				</header>

				<?php $this->template( 'list/event/description', [ 'event' => $event ] ); ?>
				<?php $this->template( 'list/event/cost', [ 'event' => $event ] ); ?>

			</div>
		</article>
	</div>

</div>
```

If you compare the above code with the original code, you’ll notice the following changes:

- The addition of 
```
$the_event_id = TECEventsCustom_TablesV1ModelsOccurrence::normalize_id ($event->ID);
```

 code.
- This code is responsible for converting the Provisional ID to the WordPress Post ID as explained earlier.
- The addition of the 
```
if (tribe_event_in_category ('generated', $the_event_id))
```

 conditional.
- This conditional simply means that we only show the event’s featured image if the event to be listed in list view is in the *generated* (category slug).

The above use case opens up a range of other possibilities, so please feel free to adjust your code accordingly.

---

