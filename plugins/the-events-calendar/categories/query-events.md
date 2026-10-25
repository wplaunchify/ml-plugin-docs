# Query Events

*Category from The Events Calendar documentation*

---

## Querying Events

**Source:** [https://docs.nexcess.com/software/the-events-calendar/query-events/](https://docs.nexcess.com/software/the-events-calendar/query-events/)

Sometimes it is handy to query for and list events outside of existing views, or in places where widgets and shortcodes are unsuitable. Because events are a custom post type, the usual WordPress paradigms apply — you can use 
```
WP_Query
```

 directly, or use the 
```
tribe_get_events()
```

 helper function that The Events Calendar provides. This article covers both approaches: how 
```
tribe_get_events()
```

 works, how to craft custom queries with date ranges and display types, and how to handle more advanced scenarios like separating single-day events from multi-day ones.

If you are already familiar with the [WP_Query class](https://developer.wordpress.org/reference/classes/wp_query/) or the [get_posts() function](https://developer.wordpress.org/reference/functions/get_posts/) provided by WordPress, working with 
```
tribe_get_events()
```

 should feel very familiar. For anyone who is unfamiliar with those parts of WordPress, reviewing that linked documentation is strongly recommended — especially if you want to do something complex.

## Using tribe_get_events()

#### Basic Usage

When you call 
```
tribe_get_events()
```

 you can expect it to return an array of events (or an empty array if nothing matches). With no arguments at all it returns the oldest events first, past ones included, so to get upcoming events add the 
```
ends_after
```

 argument:

```
tribe_get_events( array( 'ends_after' => 'now' ) );
```

The above retrieves a list of upcoming events. Because no count was specified, it defaults to the value set in **Events → Settings → Display** for the number of events to show per page (10 by default).

There is a very strong link between 
```
tribe_get_events()
```

 and 
```
WP_Query
```

 — you can use most or all of the same query arguments in both. For example, to limit results to 5 upcoming events:

```
// Retrieve the next 5 upcoming events
$events = tribe_get_events( [
   'posts_per_page' => 5,
   'start_date'     => 'now',
] );
```

#### Displaying Events

Once you have retrieved events, the simplest approach is to loop through the array directly:

```
$events = tribe_get_events( [
   'posts_per_page' => 5,
   'start_date'     => 'now',
] );

// Loop through the events, displaying the title and content for each
foreach ( $events as $event ) {
   echo '<h4>' . $event->post_title . '</h4>';
   echo wpautop( $event->post_content );
}
```

This quick approach is fine for inspecting event properties, but to display them properly it is better to do things the WordPress way and use template tags:

```
// Ensure the global $post variable is in scope
global $post;

// Retrieve the next 5 upcoming events
$events = tribe_get_events( [
   'posts_per_page' => 5,
   'start_date'     => 'now',
] );

// Loop through the events: set up each one as
// the current post then use template tags to
// display the title and content
foreach ( $events as $post ) {
   setup_postdata( $post );

   // This time, let's throw in an event-specific
   // template tag to show the date after the title!
   echo '<h4>' . $post->post_title . '</h4>';
   echo ' ' . tribe_get_start_date( $post ) . ' ';
}

// Restore the original post data
wp_reset_postdata();
```

This approach is more readable — you are not constantly referencing the event/post object directly — and you also benefit from all the filters and other good things that WordPress (and The Events Calendar) handle behind the scenes.

## Event Query Arguments

#### Date Arguments

WordPress is built around posts, which have publication and last-modified dates. When querying events, those fields can be useful, but most of the time you are more interested in the actual event dates. The Events Calendar exposes two special arguments for this:

- **start_date** — the start of the date range you are interested in
- **end_date** — the end of the date range you are interested in

#### Recommended Date Formats

The recommended formats for 
```
start_date
```

 and 
```
end_date
```

 values are:

- ```
Y-m-d H:i
```

 (e.g. 
```
2014-12-31 12:00
```

 for noon on December 31st, 2014) when you need to specify a time
- ```
Y-m-d
```

 (e.g. 
```
2015-07-01
```

 for July 1st, 2015) when time precision is not needed

Both arguments also accept any value that the PHP [strtotime()](http://php.net/manual/en/function.date.php) function accepts. Examples:

- ```
now
```

 — the current second
- ```
today
```

 — the first second of today
- ```
last month
```

 — the start of last month
- ```
next monday
```

 — the start of the day on the next Monday

#### Gotchas to Be Aware Of

```
start_date
```

 and 
```
end_date
```

 are used exactly as you give them. A 
```
start_date
```

 in the past returns past events as well as upcoming ones, so use 
```
start_date => 'now'
```

 (or 
```
ends_after => 'now'
```

) when you only want upcoming events.

When using 
```
end_date
```

 to define the final day of a range, be sure to include the time component (e.g. 
```
2014-10-31 23:59
```

) if you want all events on that final day to be included.

#### The eventDisplay Argument

Another event-specific argument is 
```
eventDisplay
```

. This shapes the query in a way that matches a particular calendar view — for example, 
```
month
```

 is used when the visitor opens Month View. Depending on what you are building, this may not need to be set explicitly. However, unless you specifically want the same behavior as an existing view, it is best to set it to 
```
custom
```

 to prevent The Events Calendar from making assumptions about the nature of your query:

```
$events = tribe_get_events( [
   'eventDisplay' => 'custom',
   'start_date'   => 'now',
] );
```

#### Advanced: Taxonomy, Categories, and Meta

You can restrict your query to specific categories, tags, or event metadata using the same arguments you would use with 
```
WP_Query
```

. For full documentation on taxonomy queries and other advanced parameters, refer to the [WP_Query documentation](https://developer.wordpress.org/reference/classes/wp_query/).

#### Examples

All events in a specific date range:

```
// Retrieve all events in October 2014
$events = tribe_get_events( [
   'start_date'   => '2014-10-01 00:01',
   'end_date'     => '2014-10-31 23:59',
] );
```

Events starting on or after a certain date (this includes past events when the date is in the past):

```
// Retrieve any events starting January 1st, 2015, or later (past and upcoming)
$events = tribe_get_events( [
   'start_date'   => '2015-01-01',
] );
```

Next 5 events with a specific tag:

```
// Grab the 5 next "party" events (by tag)
$events = tribe_get_events( [
   'start_date'     => 'now',
   'posts_per_page' => 5,
   'tag'            => 'party' // or whatever the tag name is
] );
```

Next 8 featured events:

```
// Grab the next 8 featured events
$events = tribe_get_events( [
   'start_date'     => 'now',
   'posts_per_page' => 8,
   'featured'       => true,
] );
```

## Querying Single-Day and Multi-Day Events Separately

By default, 
```
tribe_get_events()
```

 returns all upcoming events, including long-running multi-day events. If you need to separate or exclude them, there are a few approaches depending on your needs.

#### Simple Approach: Filtering in the Loop

The simplest method is to skip multi-day events inside the loop using 
```
tribe_event_is_multiday()
```

:

```
$events = tribe_get_events( [ 'start_date' => 'now' ] );
foreach ( $events as $event ) :
  // Skip any multiday events!
  if ( tribe_event_is_multiday( $event->ID ) ) {
    continue;
  }

  // ... Code to print out event details ...
endforeach;
```

The downside of this approach is that if you want to show exactly 10 upcoming events, there is no guarantee that none of those results will be multi-day events — some may be discarded and fewer than 10 will ultimately be shown to the visitor.

#### A Quick Fix: Overshooting the Query

An easy workaround is to request more results than you need:

```
$events = tribe_get_events( [
  'start_date'     => 'now',
  'posts_per_page' => 50,
] );
```

This pulls up to 50 events rather than the default count. It is not the most efficient approach, but it is quick to implement. To ensure you show at most 10 events while fetching 50, combine this with a counter:

```
$counter = 0;
$desired = 10;

$events = tribe_get_events( [
  'start_date'     => 'now',
  'posts_per_page' => 50,
] );

foreach ( $events as $event ) :
  if ( tribe_event_is_multiday( $event->ID ) ) {
    continue;
  }

  if ( ++$counter > $desired ) {
    break;
  }

  // ... Code to print out event details ...
endforeach;
```

#### Advanced: Excluding Multi-Day Events at the Query Level

For a cleaner solution, you can filter multi-day events out at the database query level. The function below wraps 
```
tribe_get_events()
```

 and adds a meta query on the event duration (
```
_EventDuration
```

, in seconds) to exclude any event that lasts 24 hours (86,400 seconds) or longer:

```
/**
 * Gets events that last less than 24 hours (single-day events).
 *
 * @param array $args Arguments for tribe_get_events().
 *
 * @return array The matching events.
 */
function tec_get_single_day_events( $args = [] ) {
	$args['meta_query'][] = [
		'key'     => '_EventDuration',
		'value'   => DAY_IN_SECONDS,
		'compare' => '<',
		'type'    => 'NUMERIC',
	];

	return tribe_get_events( $args );
}
```

#### Usage

Fetch upcoming single-day events:

```
$single_day_events = tec_get_single_day_events( [ 'start_date' => 'now' ] );
```

The normal range of arguments can also be passed. For instance, to get upcoming single-day events in list display mode:

```
$events = tec_get_single_day_events( [ 'start_date' => 'now', 'eventDisplay' => 'list' ] );
```

No multi-day events will be included in the result set. Feel free to adjust the function to better suit your needs — in particular, the 24-hour threshold (
```
DAY_IN_SECONDS
```

) can be changed if your definition of “multi-day” differs.

---

*Reviewed and updated October 2026*

---

