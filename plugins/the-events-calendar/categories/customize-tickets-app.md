# Customize Tickets App

*Category from The Events Calendar documentation*

---

## Customizing the Event Tickets Plus App

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-tickets-app/](https://docs.nexcess.com/software/the-events-calendar/customize-tickets-app/)

The Event Tickets Plus App communicates with your WordPress site through the REST API. The snippets on this page let you modify what the app receives.

## Hiding Attendee Information in the App

In some scenarios, it’s important not to display attendee information on the scan result or within the Events screen of the app — for privacy reasons, for staff with limited access rights, or to comply with an internal policy. The snippet below filters the REST API responses the app receives, replacing attendee names, emails, and payment details with placeholder values before they reach the app.

```
&lt;?php //* Do NOT include the opening php tag

add_filter(
    'rest_request_after_callbacks',
    'tec_tickets_maybe_hide_attendee_information_for_app',
    10,
    3
);

/**
 * Maybe hide information for the ET+ APP.
 *
 * @param WP_REST_Response|WP_HTTP_Response|WP_Error|mixed $response Result to send to the client.
 * @param array                                            $handler  Route handler used for the request.
 * @param WP_REST_Request                                  $request  Request used to generate the response.
 *
 * @return WP_REST_Response|WP_HTTP_Response|WP_Error|mixed
 */
function tec_tickets_maybe_hide_attendee_information_for_app( $response, array $handler, WP_REST_Request $request ) {
    if ( empty( $request-&gt;get_header( 'App-version' ) ) ) {
        return $response;
    }

    if ( '/tribe/tickets/v1/attendees' === $request-&gt;get_route() ) {
        // Hide the attendee information from the attendee endpoint.
        $response = tec_tickets_hide_attendee_information_attendee_endpoint( $response, $handler, $request );
    }

    if ( '/tribe/tickets/v1/qr' === $request-&gt;get_route() ) {
        // Update QR response, hiding the attendee information.
        $response = tec_tickets_hide_attendee_information_qr_endpoint( $response, $handler, $request );
    }

    if ( '/tribe/events/v1/events' === $request-&gt;get_route() ) {
        // If you want to hide Events for the APP, or do something with this endpoint.
    }

    return $response;
}

/**
 * Hide the attendee information from the attendees endpoint.
 */
function tec_tickets_hide_attendee_information_attendee_endpoint( $response, array $handler, WP_REST_Request $request ) {
    if ( empty( $response-&gt;data['attendees'] ) ) {
        return $response;
    }

    foreach ( $response-&gt;data['attendees'] as &amp;$attendee ) {
        $attendee['title']               = 'Hidden Name';
        $attendee['email']               = '[email protected]';
        $attendee['payment']['currency'] = '';
        $attendee['payment']['date']     = '';
        $attendee['payment']['price']    = 'Unavailable';
        $attendee['information']         = [];
        $attendee['information']['Information'] = 'The attendee information is private. For more information please contact the site administrator.';
    }

    return $response;
}

/**
 * Hide the attendee information from the QR endpoint.
 */
function tec_tickets_hide_attendee_information_qr_endpoint( $response, array $handler, WP_REST_Request $request ) {
    if ( empty( $response-&gt;data['attendee'] ) ) {
        return $response;
    }

    $response-&gt;data['attendee']['title']               = 'Hidden Name';
    $response-&gt;data['attendee']['email']               = '[email protected]';
    $response-&gt;data['attendee']['payment']['currency'] = '';
    $response-&gt;data['attendee']['payment']['date']     = '';
    $response-&gt;data['attendee']['payment']['price']    = 'Unavailable';
    $response-&gt;data['attendee']['information']         = [];
    $response-&gt;data['attendee']['information']['Information'] = 'The attendee information is private. For more information please contact the site administrator.';

    return $response;
}
```

This snippet is also available [on GitHub](https://gist.github.com/juanfra/6ad04fcf9e1a358c5a2e5cca31516cf6).

## Adding the QR Code to the CSV Export

If you want to print badges for your attendees that incorporate the QR code for faster check-in, you can do so with tools like [Avery](https://www.avery.com/software/design-and-print/), [Label.live](https://label.live/), and others. Just make sure you choose an application that can generate QR codes from a CSV file.

The snippet below adds a **QR Data** column to your event’s [Attendees List](https://docs.nexcess.com/software/the-events-calendar/ticket-orders/) and its CSV export. That column contains the URL your badge or label-maker application will use to generate the QR code.

```
add_filter( 'tribe_events_tickets_attendees_csv_export_columns', function( $columns ) {
    $columns_to_add = [
        'qr_data' =&gt; 'QR Data',
    ];
    $columns = array_merge( $columns, $columns_to_add );
    return $columns;
}, 100 );

add_filter( 'tribe_events_tickets_attendees_table_column', function ( $value, $item, $column ) {
    if ( $column == 'qr_data' ) {
        $path = '?event_qr_code=1&amp;ticket_id=' . $item['qr_ticket_id'] .
                '&amp;event_id=' . $item['event_id'] .
                '&amp;security_code=' . $item['security_code'] .
                '&amp;path=' . urlencode( tribe_tickets_rest_url_prefix() . '/qr' );
        $value = get_site_url( null, $path, 'https' );
    }
    return $value;
}, 100, 3 );

add_filter( 'manage_tribe_events_page_tickets-attendees_columns', function ( $column_headers ) {
    $new_columns_to_add = [
        'qr_data' =&gt; 'QR Data',
    ];

    // Add QR Data column immediately after the ticket column.
    $insert_at = array_search( 'ticket', array_keys( $column_headers ) );
    $column_headers = array_merge(
        array_slice( $column_headers, 0, $insert_at, true ),
        $new_columns_to_add,
        array_slice( $column_headers, $insert_at, null, true )
    );

    return $column_headers;
}, 100 );
```

## Disabling the “Events” Functionality on the App

In some cases, you may want to hide the Events list from the app entirely — for example, when the app is only used for scanning and you don’t want check-in staff browsing event details.

The snippet below returns a 404 for the app’s Events endpoint, causing the Events screen in the app to display as empty:

```
&lt;?php //* Do NOT include the opening php tag

add_filter(
    'rest_request_after_callbacks',
    'tec_tickets_maybe_disable_events_for_app',
    10,
    3
);

/**
 * Maybe disable events for the ET+ APP.
 *
 * @param WP_REST_Response|WP_HTTP_Response|WP_Error|mixed $response Result to send to the client.
 * @param array                                            $handler  Route handler used for the request.
 * @param WP_REST_Request                                  $request  Request used to generate the response.
 *
 * @return WP_REST_Response|WP_HTTP_Response|WP_Error|mixed
 */
function tec_tickets_maybe_disable_events_for_app( $response, array $handler, WP_REST_Request $request ) {
    if ( empty( $request-&gt;get_header( 'App-version' ) ) ) {
        return $response;
    }

    if ( '/tribe/events/v1/events' !== $request-&gt;get_route() ) {
        return $response;
    }

    $response = new WP_REST_Response(
        [
            'code'    =&gt; 'rest_no_route',
            'message' =&gt; 'No route was found matching the URL and request method.',
        ]
    );

    $response-&gt;set_status( 404 );

    return $response;
}
```

This snippet is also available [on GitHub](https://gist.github.com/juanfra/a11936a15e1da39c291cb8e92994aa9b).

---

