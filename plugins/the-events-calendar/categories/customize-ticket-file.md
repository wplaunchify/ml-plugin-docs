# Customize Ticket File

*Category from The Events Calendar documentation*

---

## Customizing the PDF Ticket File Name

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-ticket-file/](https://docs.nexcess.com/software/the-events-calendar/customize-ticket-file/)

When a customer purchases a ticket using Event Tickets Plus with the PDF Tickets feature enabled, they receive an email with their ticket attached as a PDF file. The filename of the PDF file can be generic (i.e., 
```
ticket.pdf
```

), and for customers purchasing tickets for multiple attendees and/or events, this can lead to confusion. This guide will show you how to use a filter hook to programmatically change this file name to something more descriptive, such as including the event name, ticket title, etc.

**See also:**[Customizing PDF Ticket Content & Styles](https://docs.nexcess.com/software/the-events-calendar/customize-pdf-tickets/)

To implement the change, you need to add the code snippet to your WordPress site, in a location where it will be executed. (see [Using Custom Code Snippets](https://docs.nexcess.com/software/the-events-calendar/code-snippets/)). Ensure to purge your site’s cache after saving the changes.

## The Filter Hook

To customize the file name, we will use a dedicated filter hook provided by the Event Tickets Plus plugin: 
```
tec_tickets_wallet_plus_pdf_pass_filename
```

.

This filter allows you to intercept the default file name and change it before the PDF is generated and attached to the email. It provides two useful pieces of information to your custom function:

- **$filename** (string): The default file name (e.g., ‘ticket.pdf’).
- **$attendee_id** (int): The WordPress Post ID of the attendee.

## Custom Descriptive File Name

The following code snippet provides a practical example. It changes the file name from a generic one to to a more descriptive format like the 
```
{event title}-{ticket name}-{purchaser name}-{attendee ID}.pdf
```

.

Feel free to copy the code below and modify its logic to create any file name structure you need.

```
add_filter( 'tec_tickets_wallet_plus_pdf_pass_filename', function ( $filename, $attendee_id ) {
    $data_api = tribe( 'tickets.data_api' );
 
    // Get provider and attendee data in one go
    $provider = $data_api->get_ticket_provider( $attendee_id );
 
    if ( ! $provider ) {
        return array( 'event_id' => null, 'ticket_id' => null );
    }
 
    $attendee_data = $provider->get_attendee( $attendee_id );
 
    // Get the relevant post IDs.
    $event_id  = $attendee_data['event_id'];
    $ticket_id = $attendee_data['product_id'];
 
    // Get the event title and ticket name.
    $event_title    = get_the_title( $event_id );
    $ticket_name    = get_the_title( $ticket_id );
    $purchaser_name = $attendee_data['purchaser_name'];
 
    // Compose the filename.
    $filename = implode(
        '-',
        [
            $event_title,
            $ticket_name,
            $purchaser_name,
            $attendee_id
        ]
    );
 
 
    // Return the filename without extension.
    return $filename;
}, 10, 2 );
```

## Custom File Name with Attendee Name

This snippet transforms the filename structure into a more informative format 
```
[attendee name]-ticket-[attendee ID].pdf
```

```
<?php //Do not copy this line

add_filter( 'tec_tickets_wallet_plus_pdf_pass_filename', function ( $filename, $attendee_id ) {
	// Get attendee using the ID
	$attendees = tribe_tickets_get_attendees( $attendee_id );

	// Early return if no attendees found
	if ( empty( $attendees ) || ! is_array( $attendees ) ) {
		return $filename;
	}

	// Get the specific attendee we need (should be only one)
	$attendee = reset( $attendees );

	// Try to use holder name first, then purchaser name
	$name_to_use = '';
	if ( ! empty( $attendee['holder_name'] ) ) {
		$name_to_use = $attendee['holder_name'];
	} elseif ( ! empty( $attendee['purchaser_name'] ) ) {
		$name_to_use = $attendee['purchaser_name'];
	}

	// If we have a name, sanitize and prepend to filename
	if ( ! empty( $name_to_use ) ) {
		$sanitized_name = sanitize_title( $name_to_use );
		$filename       = $sanitized_name . '-' . $filename;
	}

	return $filename;
}, 10, 2 );
```

---

