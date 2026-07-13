# Customize Event Imports

*Category from The Events Calendar documentation*

---

## Customizing Event Imports

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-event-imports/](https://docs.nexcess.com/software/the-events-calendar/customize-event-imports/)

Event Aggregator is a great tool to fill your calendar with events from different sources. Event data is transferred from one site (the source) to the other (the destination) in the form of structured data in JSON format. The data structure follows the iCalendar specification.

There is a predefined way how the data is handled and saved in the calendar, which suits most needs. But there can also be scenarios where altering the data or adding additional data is needed. A lot of this can be done through action and filter hooks available in Event Aggregator.

This article follows a blocked approach. You can choose the frame and you can fill it with different blocks of code with different functionality. Here are a few examples, you can pick the ones you like or need and assemble your own custom code as if you were playing with Lego bricks.

## The Hooks

There are three filter hooks and one action hook that can be used. (You can find more information about hooks and filters in general [here](https://developer.wordpress.org/plugins/hooks/).)

#### tribe_aggregator_before_save_event

This filter hook allows you to modify the event data **before it is saved** in the database. This is for both when saving and updating events.

*Location: the-events-calendar/src/Tribe/Aggregator/Record/Abstract.php:2059*

```
$event = apply_filters( 'tribe_aggregator_before_save_event', $event, $this );
```

It accepts two parameters.

1. ```
$event
```

 is an array of the event data to be saved. This is the one we can modify.
2. ```
$this
```

 is the *Importer record*, an object, which contains a lot of contextual data, for example, the source URL and the origin (Google, Meetup, etc.) of the import. Note, when hooking into the filter you cannot use 
```
$this
```

 as the parameter name; you will need to use a different name.

#### tribe_aggregator_before_update_event

This filter hook allows you to modify the event data **before it is updated**. (It’s almost the same as the first one, but works only when updating events.)

*Location: the-events-calendar/src/Tribe/Aggregator/Record/Abstract.php:2074*

```
$event = apply_filters( 'tribe_aggregator_before_update_event', $event, $this );
```

Parameters like above.

#### tribe_aggregator_before_insert_event

This filter hook allows you to modify the event data **before it is inserted** into the database. (It’s almost the same as the first one, but works only when saving new events.)

*Location: the-events-calendar/src/Tribe/Aggregator/Record/Abstract.php:2110*

```
$event = apply_filters( 'tribe_aggregator_before_insert_event', $event, $this );
```

Parameters like above.

#### tribe_aggregator_after_insert_post

As the name suggests, this action hook runs after an event has been saved in the database. It allows you to do something extra after an event is saved, for example, changing the featured image.

*Location: the-events-calendar/src/Tribe/Aggregator/Record/Abstract.php:2231*

```
do_action( 'tribe_aggregator_after_insert_post', $event, $item, $this );
```

It accepts three parameters:

- ```
$event
```

 an array of the event data that was sent and saved.
- ```
$item
```

 is an array, the raw version of the event data that was sent to the site.
- ```
$this
```

 is the *Importer record*, the object, like above.

## The Parameters

#### $event

The event data to be saved in an array. In your snippet, you can access them like 
```
$event['post_title']
```

. Here are the array keys:

- post_title
- post_content
- post_excerpt
- EventStartDate – in YYYY-MM-DD format
- EventStartHour – integer
- EventStartMinute – with leading zero
- EventStartMeridian – uppercase AM or PM)
- EventEndDate – in YYYY-MM-DD format
- EventEndHour – integer
- EventEndMinute – with leading zero
- EventEndMeridian – uppercase AM or PM
- EventTimezone – e.g. America/Detroit
- EventURL
- EventAllDay – boolean
- categories – array of strings
- tags – array of strings
- EventOriginalID – post ID on the source site; only for Other URL source
- EventCurrencySymbol
- EventCurrencyPosition
- EventCost
- hide_from_listings – boolean; only for Other URL source
- sticky – boolean; only for Other URL source
- Venue (array of strings)
- EventVenueID – post ID of the venue, if found on the site
- Organizer – array
- OrganizerID – array of strings
- post_type – “tribe_events”
- ID – the post ID
- image – the URL of the image that is to be imported as a featured image

#### $this

The importer record, an object. In your snippet the parameter name cannot be 
```
$this
```

; you can use 
```
$data
```

 instead, like in the examples below.

The 
```
post
```

 attribute contains information about the current import record. You can access these values like 
```
$data->post['key']
```

. The more important items are:

- ID – the post ID of the import record
- post_author – the ID of the user who set up the current import
- post_date – time when the import was created
- post_date_gmt – time when the import was created
- post_title – the type of import: manual/scheduled and the source type
- post_status – custom status. During the import, it’s usually “tribe_ea_pending”.
- post_type – “tribe-ea-record”

The 
```
meta
```

 attribute contains information about the current import process. (This will likely be more useful.) You can access its values like 
```
$data->meta['key']
```

. Most of these items can be found and set before previewing the import. The more important items are:

- import_name – The name of the import, if set
- origin – the origin type; Can be: gcal, ical, url, meetup, eventbrite, ics, csv
- type – scheduled or manual
- keywords – the keywords used
- start – unix timestamp; events after this time are imported
- end – unix timestamp; events before this time are imported
- source – the URL where events are imported from
- post_status – the post status set for the imported events

#### $item

The raw version of the event data that was sent to the site. The existence of some of these values depends on what the source site supports.

- title – the event title
- description – the event description, sanitized.
- start_date – in YYYY-MM-DD format
- end_date – in YYYY-MM-DD format
- start_hour – integer
- end_hour – integer
- start_minute – with leading zero
- end_minute – with leading zero
- timezone – e.g. America/Detroit
- uid – unique ID, if provided by the source calendar
- unsafe_title – the event title, not sanitized
- unsafe_description – the event description, not sanitized
- venue – array of strings, depending on the source
- venue – venue name
- description
- excerpt
- address
- city
- stateprovince
- country
- zip
- phone
- website
- image
- latitude
- longitude
- organizer – array of strings, depending on the source
- organizer – organizer name
- description
- excerpt
- slug
- phone
- email
- website
- image
- show_map – boolean, the “Show Map” checkbox value; for Other URL source
- show_map_link – boolean, the “Show Map Link” checkbox value; for Other URL source
- sticky – boolean, Sticky on month view; for Other URL source
- featured – boolean; for Other URL source
- currency_symbol
- currency_position
- cost
- categories – array of strings
- tags – array of strings

Let’s see how we can make all of this work.

## The Frame of the Snippet

The frame looks just like the frame of most custom snippets.

For the filter hooks:

(Change the hook name in the last line if you want to use a different one.)

```
/**
 * @param array  $event  Event data to save.
 * @param object $data   Importer record.
 *
 * @return array
 */
function my_custom_ea_filter( $event, $data ){
	// Code comes here

    // Return the event data to be saved.
    return $event;
}

add_filter( 'tribe_aggregator_before_save_event', 'my_custom_ea_filter', 10, 2 );
```

For the action hook:

```
/**
 * @param array  $event  Which Event data was sent.
 * @param array  $item   Raw version of the data sent from EA.
 * @param object $data   The record we are dealing with.
 */
function my_custom_ea_action( $event, $item, $data ){
	// Code comes here

}

add_action( 'tribe_aggregator_after_insert_post', 'my_custom_ea_action', 10, 3 );
```

Note, there is no 
```
return
```

 here, because this is an action hook, not a filter.

Depending on whether you want to change event data before saving/updating or do something after event data has been saved, choose your frame and fill it with code that does what you need.

Now let’s look at some sample blocks of code.

#### Limit Code to a Specific Origin

Event Aggregator supports imports from the following sources:

- Google Calendar (gcal)
- iCalendar (ical)
- Meetup (meetup)
- Eventbrite (eventbrite)
- Other URL (another website running The Events Calendar) (url)
- .ics file (ics)
- .csv file (csv)

Scenario: you’re importing events from 2 different Google calendars, from a Meetup URL, and from an iCalendar feed. You want to do something with events that are imported from the Google calendars and from Meetup.

Use with: both hooks. It’s best to use this at the beginning.

```
/* START origin validation */

// Get the origin of the current import.
$current_origin = $data->meta['origin'];

// Define what origins the code should run on.
$valid_origins = [
	'gcal',
	'meetup',
];

// Bail, if the import is not from a valid origin.
if ( ! in_array( $current_origin, $valid_origins ) ) {
	return $event;
	// OR in case of the action hook:
	// return;
}

/* END origin validation */
```

#### Limit Code to a Specific Source URL

Scenario: you’re importing events from 3 different calendars. You want to do something with events that are imported from two of them.

Use with: both hooks. It’s best to use this at the beginning.

```
/* START source validation */

// Get the source of the current import.
$current_source = $data->meta['source'];

// Define what sources the code should run on.
$valid_sources = [
	'https://awesomeevents.com/ical-event-calendar.php',
	'https://fantasticevents.com/calendar.ics',
];

// Bail, if the import is not from a valid souce,
if ( ! in_array( $current_source, $valid_sources ) ) {
	return $event;
	// OR in case of the action hook:
	// return;
}

/* END source validation */
```

## Code Block Samples

You can pick and choose from the below code samples and assemble your own custom import-modifying supersnippet. These are working examples and can be easily used as templates for your own needs.

### Add Tags

Scenario: you want to apply a tag to the imported events.

Use with: 
```
tribe_aggregator_after_insert_post
```

 (because this doesn’t change the event content).

```
/* START apply tags */

// Define the tags. Can be an array of tags ...
$tags = [
	'Imported Events',
	'External',
];

// OR ... a string of tags separated by commas.
$tags = 'Imported Events, External';

// Add the tags.
wp_add_post_tags( $event['ID'], $tags );

/* END apply tags */
```

#### Add Tags Based on Source

Scenario: you are importing events from different sources and you would like to apply different tags depending on the source.

Use with: 
```
tribe_aggregator_after_insert_post
```

 (because this doesn’t change the event content).

```
/* START apply tags */

// Get the source of the current import.
$current_source = $data->meta['source'];

// Define what tags should be added to the events from the different sources.
$sources_and_tags = [
	'https://awesomeevents.com/ical-event-calendar.php' => 'One tag',
	'https://fantasticevents.com/calendar.ics'          => [ 'First tag', 'Second tag', ],
];

// Add the tags based on the source.
if ( array_key_exists( $current_source, $sources_and_tags ) ) {
	wp_add_post_tags( $event['ID'], $sources_and_tags[ $current_source ] );
}

/* END apply tags */
```

### Assign a Venue

Scenario: You are importing events from a source that doesn’t provide consistent information about the event venues.

Use with: 
```
tribe_aggregator_after_insert_post
```

 (because this doesn’t change the event content).

```
/* START add venue */

// Get the venue of the event
$venue_id = tribe_get_venue_id( $event['ID'] );

// If there is already a venue, then skip.
if ( ! empty( $venue_id ) ) {
	return;
}

// Define the venue ID you want to add to the event.
$venue_id = 999;

// Add the defined venue ID to the event.
update_post_meta( $event_id, '_EventVenueID', $venue_id );

/* END add venue */
```

### Set a Featured Image

Scenario: You would like to set the same featured image (6697) for all events having “Coffee Hour” in their title. You want to set a different featured image (6575) for events with the exact title “Game Time”. And you want to set a generic featured image (2816) to everything else.

Use with: 
```
tribe_aggregator_after_insert_post
```

 (because this doesn’t change the event content).

```
/* START set featured image */

// Default featured image ID.
$featured_image_id = 2816;

// Partial match with title.
if ( is_int( strpos( $item->title, "Coffee Hour" ) ) ) {
	$featured_image_id = 6697;
}

// Exact match with title.
if ( $item->title == 'Game Time' ) {
	$featured_image_id = 6575;
}

// Set the featured image.
set_post_thumbnail( $event['ID'], $featured_image_id );

/* END set featured image */
```

### Remove Taxonomies

Scenario: You would like to categorize the imported events differently, than they are categorized on the source site, so you don’t want to import categories and tags.

Use with: 
```
tribe_aggregator_before_save_event
```

 (because this changes event data).

```
/* START remove taxonomies */

// Remove categories.
unset( $event['categories'] );

// Remove tags.
unset( $event['tags'] );

/* END remove taxonomies */
```

### Remove Event URL

By default, when importing an event, and there is no website URL set up for the event, Event Aggregator will add the source URL as the website URL.

Scenario: you don’t want your events to link back to the source site.

Use with: 
```
tribe_aggregator_before_save_event
```

 (because this changes event data).

```
/* START remove event URL */

// Get the source of the current import.
$current_source = $data->meta['source'];

// If the event URL matches the source URL, remove it.
if ( $event['EventURL'] == $data->meta['source'] ) {
	$event['EventURL'] = '';
}

/* END remove event URL */
```

### A Full Example

Scenario: I’m importing events from several different sources.

- I want to tag events that are coming from any Google Calendar with “Fun”.
- I want to remove the event URL from all imported events.
- I want to set a featured image to all events with the title “Reading Time” regardless of the source.

The first two can be done before the event is saved in the database so I can use the 
```
tribe_aggregator_before_save_event
```

 filter hook.

For the third one, we need to use the 
```
tribe_aggregator_after_insert_post
```

 action hook.

```
/**
 * @param array  $event  Event data to save.
 * @param object $data   Importer record.
 *
 * @return array
 */
function my_custom_ea_filter( $event, $data ){
	// Get the source of the current import.
	$current_source = $data->meta['source'];

	// Get the origin of the current import.
	$current_origin = $data->meta['origin'];

	// Define what tags should be added to the events from the different origins.
	$origins_and_tags = [
		'gcal' => 'Fun',
	];

	// Add the tags based on the origin.
	if ( array_key_exists( $current_origin, $origins_and_tags ) ) {
		wp_add_post_tags( $event['ID'], $origins_and_tags[ $current_origin ] );
	}

	// If the event URL matches the source URL, remove it.
	if ( $event['EventURL'] == $data->meta['source'] ) {
    	$event['EventURL'] = '';
	}

	// Return the event data to be saved.
	return $event;
}
 
add_filter( 'tribe_aggregator_before_save_event', 'my_custom_ea_filter', 10, 2 );

/**
 * @param array  $event  Which Event data was sent.
 * @param array  $item   Raw version of the data sent from EA.
 * @param object $data   The record we are dealing with.
 */
function my_custom_ea_action( $event, $item, $data ){
	// If there is an exact match with title, set the featured image.
	if ( $item->title == 'Reading Time' ) {
		$featured_image_id = 6575;

		// Set the featured image.
		set_post_thumbnail( $event['ID'], $featured_image_id );
	}
}
 
add_action( 'tribe_aggregator_after_insert_post', 'my_custom_ea_action', 10, 3 );
```

## Customizing CSV Imports

### Customizing the Separator Character

By default, the separator character recognized for CSV files is the comma. To use a different character (for example, a pipe), use the following filter:

```
add_filter( 'tribe_events_csv_import_file_parameters', function( $params ) {
    $params['delimiter'] = '|';
    return $params;
} );
```

### Adding Custom Columns to CSV Imports

If you have custom data that isn’t covered by the built-in fields — for example, post meta stored by another plugin, or your own custom meta keys — you can add those columns to the importer using the following snippet.

Define your custom fields in the 
```
$custom_import_data
```

 array: the array key is the meta key that will be saved to the database, and the value is the label that will appear in the importer’s column mapping dropdown. The snippet handles registration, processing, and saving automatically.

```
class TEC_CSV_Import_Custom_Metadata {
    /**
     * Define your custom data here.
     * key   => the meta key that will be used to save the data
     * value => the label shown in the column mapping dropdown
     *
     * @var string[]
     */
    public $custom_import_data = [
        '_tribe_events_status' => 'Event Status',
        'meta_key_1'           => 'Meta Data 1',
        'meta_key_2'           => 'Meta Data 2',
    ];

    public function __construct() {
        add_filter( 'tribe_events_importer_event_column_names', [ $this, 'add_column_name' ] );
        add_filter( 'tribe_events_csv_import_event_additional_fields', [ $this, 'process_custom_data' ] );
        add_action( 'tribe_events_update_meta', [ $this, 'save_custom_data' ], 10, 3 );
    }

    public function add_column_name( $column_names ) {
        foreach ( $this->custom_import_data as $key => $value ) {
            $column_names[ $key ] = $value;
        }
        return $column_names;
    }

    public function process_custom_data() {
        $extra_fields['tec_import_event_status'] = 'tec_import_event_status';
        foreach ( $this->custom_import_data as $key => $value ) {
            $extra_fields[ $key ] = $key;
        }
        return $extra_fields;
    }

    public function save_custom_data( $event_id, $data, $event ) {
        foreach ( $this->custom_import_data as $key => $value ) {
            if ( isset( $data[ $key ] ) && $data[ $key ] != '' ) {
                update_post_meta( $event_id, $key, esc_html( $data[ $key ] ) );
            }
        }
    }
}

new TEC_CSV_Import_Custom_Metadata();
```

The 
```
_tribe_events_status
```

 key in the example above maps to TEC’s built-in event status field, which supports three statuses out of the box (also defined by [schema.org](https://schema.org/EventStatusType)):

- Scheduled (default)
- Canceled
- Postponed

To define your own custom event statuses, see [Adding a Custom Event Status](https://docs.nexcess.com/software/the-events-calendar/custom-event-status/).

---

