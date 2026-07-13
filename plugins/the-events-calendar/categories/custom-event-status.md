# Custom Event Status

*Category from The Events Calendar documentation*

---

## Adding a Custom Event Status

**Source:** [https://docs.nexcess.com/software/the-events-calendar/custom-event-status/](https://docs.nexcess.com/software/the-events-calendar/custom-event-status/)

Events created with The Events Calendar can have 3 statuses out of the box, which is also supported by the Schema.org [event schema](https://schema.org/Event).

- Scheduled – *this is the default status*
- Canceled
- Postponed

## Adding a Custom Status

If you would like to add your own custom status, then you can do it with the help of the following snippet.

```
add_filter( 'tec_event_statuses', 'my_custom_statuses', 20, 2 );
 
function my_custom_statuses( $statuses, $current_status ) {
	$custom_statuses = custom_statuses();

	foreach ( $custom_statuses as $custom_status ) {
		$statuses[] = [
			'text'     => $custom_status[ 'name' ],
			'id'       => $custom_status[ 'value' ],
			'value'    => $custom_status[ 'value' ],
			'selected' => $custom_status[ 'value' ] === $current_status ? true : false,
		];
	}

	return $statuses;
}

function custom_statuses() {
	$statuses = [
		'rescheduled'     => [
			'name'   => 'Rescheduled',
			'value'  => 'rescheduled',
			'schema' => 'EventRecheduled',
		],
		'suspended'       => [
			'name'   => 'Suspended',
			'value'  => 'suspended',
			'schema' => '',
		],
	];

	return $statuses;
}
```

Note, that the above snippet will not change the event status that is shown in the event schema. If a custom status is chosen for the event, then it will show up as 
```
EventScheduled
```

 in the event schema.

## Adding the Custom Status to the Event Schema

To modify the event schema, we will need another snippet.

```
add_filter( "tribe_json_ld_event_object", 'tec_custom_event_schema', 30, 3 );

function tec_custom_event_schema( $data, $args, $post ) {
	$custom_statuses = $this->custom_statuses();

	$event_status = get_post_meta( $post->ID, '_tribe_events_status', true );

	if ( array_key_exists( $event_status, $custom_statuses ) ) {
		if ( $custom_statuses[ $event_status ][ 'schema' ] === '' ) {
			unset( $data->eventStatus );
		} else {
			$data->eventStatus = $custom_statuses[ $event_status ][ 'schema' ];
		}
	}

	return $data;
}
```

Please note, that [https://schema.org](https://schema.org/) only supports a handful of event statuses, which you can find [here](https://schema.org/EventStatusType).

If you’re adding a custom status to your dropdown that is not supported by Schema.org (for example, to use it on the front-end only, you can leave the event status in the schema as the default “scheduled” using 
```
$data->eventStatus = 'https://schema.org/EventScheduled';
```

 inside the conditional test, or you can completely remove it like this:

```
add_filter( "tribe_json_ld_event_object", 'tec_custom_event_schema', 30, 3 );

function tec_custom_event_schema( $data, $args, $post ) {
	$event = tribe_get_event( $post );

	if ( 'my_other_status === $event->event_status ) {
		unset( $data->eventStatus );
	}

	return $data;
}
```

Making the custom status show up on the calendar and event pages will require some [customization](https://docs.nexcess.com/software/the-events-calendar/customization/).

## Showing the Custom Event Status on the Single Event Page

### Classic Editor

Making the custom event status show up on the single event page is easiest with the following snippet.

Make note of the following in case you want to use a different status than “Suspended”:

- Checking against the status slug on line 4
- Adding the right slug in the class on line 7
- Showing the right label on line 10

```
add_filter( 'tribe_events_single_event_title_html', 'tec_custom_status_on_single_classic', 10, 2 );

function tec_custom_status_on_single_classic( $title, $event_id ) {
	$statuses = [
		'suspended' => 'Suspended',
		'custom'    => 'Custom',
	];
	$event_status = get_post_meta( $event_id, '_tribe_events_status', true );

	if ( array_key_exists( $event_status, $statuses ) ) {
		$status = '
        <div class="tribe-common-b2 tribe-events-status-single-notice">
            <div class="tribe-events-status-single tribe-events-status-single--' . $event_status . '">
                <div class="tribe-events-status-single__header">
                    <div class="tribe-events-status-single__header tribe-events-status-single__header--bold tribe-events-status-single__header--alert-icon">
                        ' . $statuses[ $event_status ] . '
                    </div>';
		if ( get_post_meta( $event_id, '_tribe_events_status_reason', true ) ) {
			$status .= '
                        <div class="tribe-events-status-single__description">' .
			           wp_kses_post( get_post_meta( $event_id, '_tribe_events_status_reason', true ) ) .
			           '</div>';
		}
		$status .= '
                </div>
            </div>
        </div>
        ';

		$title = $status . $title;
	}

	return $title;
}
```

---

