# Event Tickets Emails

*Category from The Events Calendar documentation*

---

## Configuring Event Tickets Emails

**Source:** [https://docs.nexcess.com/software/the-events-calendar/event-tickets-emails/](https://docs.nexcess.com/software/the-events-calendar/event-tickets-emails/)

[Event Tickets](https://theeventscalendar.com/products/wordpress-event-tickets/) come with several different functionalities to make it easy to sell tickets, collect registrations, and manage attendees for your in-person or virtual events. Emails are configured under Tickets > Settings > Emails.

On the “Emails”, tab you will find a list of emails you can enable and configure separately. Each email listed in this section has its configuration page that can be accessed by clicking on the email title or the pen icon.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/et-settings-june-23-tab-emails.jpg)Tickets → Settings → Emails

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2024-06-17-at-16.04.54.jpg)Tickets → Settings → Emails

You can configure the email settings to change the way emails look and work, and if you need any special customization you can also [customize the templates](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/) directly.

You can also make use of placeholders within the heading, subject and additional content fields. General placeholders to all emails are:

| Placeholder | What it Contains |
| --- | --- |
| {site_title} | The WordPress site title. |
| {site_url} | The WordPress site URL, in https://example.com format. |
| {site_address} | The WordPress site address, in example.com format. |

---

## Ticket Email

The ticket email, is the one that’s delivered with the ticket, once ticket(s) are purchased. You can configure the email settings to change the way it looks and works.

**Ticket Email:** Enable or disable if you want the ticket email to be sent out once ticket(s) have been purchased.

**Subject:** Change the subject for this particular email.

**Heading:** Change the email heading for this particular email.

**Additional Content:** Add any additional content you’d like to include as part of these emails.

**Calendar Links:** This option is only available if you use The Events Calendar and Event Tickets. It’ll allow you to include iCal and Google event links in this email.

**Calendar Invites:** This option is only available if you use The Events Calendar and Event Tickets. It’ll allow you to include the calendar invite (.ics file) in this email.

**Wallet & PDF:** It’ll allow you to include PDF tickets as attachments, or a link within the email for your attendees to get their Apple Wallet passes.

**QR Codes:** This option is only available if you use Event Tickets Plus and Event Tickets. It’ll allow you to choose if you want to display the QR code for this email.

**Attendee Registration Fields:** This option is only available if you use Event Tickets Plus and Event Tickets. It’ll allow you to choose if you want to display the Attendee Registration Fields for this email.

#### Available Placeholders

| Placeholder | What it Contains |
| --- | --- |
| {attendee_name} | The attendee name. If there’s more than one ticket it’ll be the first attendee name by default. |
| {attendee_email} | The attendee email. If there’s more than one ticket it’ll be the first attendee email by default. |
| {event_id} | The event ID. Needs The Events Calendar, and the ticket has to be for an event. |
| {event_date} | The event date. Needs The Events Calendar, and the ticket has to be for an event. |
| {event_start_date} | The event start date. Needs The Events Calendar, and the ticket has to be for an event. |
| {event_end_date} | The event end date. Needs The Events Calendar, and the ticket has to be for an event. |
| {event_name} | The event name. Needs The Events Calendar, and the ticket has to be for an event. |
| {event_timezone} | The event timezone. Needs The Events Calendar, and the ticket has to be for an event. |
| {event_url} | The event URL. Needs The Events Calendar, and the ticket has to be for an event. |
| {event_image_url} | The event featured image URL. Needs The Events Calendar, and the ticket has to be for an event. |
| {event_venue_id} | The event venue ID. Needs The Events Calendar, and the ticket has to be for an event, and the event needs to have a designated venue. |
| {event_venue_name} | The event venue name. Needs The Events Calendar, and the ticket has to be for an event, and the event needs to have a designated venue. |
| {event_venue_street_address} | The event venue address. Needs The Events Calendar, and the ticket has to be for an event, and the event needs to have a designated venue. |
| {event_venue_zip} | The ZIP code of the Venue. Needs The Events Calendar, and the ticket has to be for an event, and the event needs to have a designated venue. |
| {event_venue_city} | The event venue city. Needs The Events Calendar, and the ticket has to be for an event, and the event needs to have a designated venue. |
| {event_venue_state_or_province} | The event venue state or province. Needs The Events Calendar, and the ticket has to be for an event, and the event needs to have a designated venue. |
| {event_venue_url} | The event venue URL. Needs The Events Calendar, and the ticket has to be for an event, and the event needs to have a designated venue. |
| {event_organizer_id} | The event organizer ID. Needs The Events Calendar, and the ticket has to be for an event, and the event needs to have a designated organizer. |
| {event_organizer_name} | The event organizer name. Needs The Events Calendar, and the ticket has to be for an event, and the event needs to have a designated organizer. |
| {event_organizer_url} | The event organizer URL. Needs The Events Calendar, and the ticket has to be for an event, and the event needs to have a designated organizer. |
| {event_organizer_email} | The event organizer email. Needs The Events Calendar, and the ticket has to be for an event, and the event needs to have a designated organizer. |
| {event_organizer_website} | The event organizer website. Needs The Events Calendar, and the ticket has to be for an event, and the event needs to have a designated organizer. |
| {event_organizer_phone} | The event organizer phone. Needs The Events Calendar, and the ticket has to be for an event, and the event needs to have a designated organizer. |
| {event_organizers_count} | The number of event organizers for the given event. |
| {event_organizers_names} | Comma separated list of all organizers. |
| {event_organizer:$index:id} | Where $index starts on zero but gives access to all organizer data, if you had 4 organizers, you would be able to use {event_organizer:3:id} |
| {event_organizer:$index:name} | Where $index starts on zero but gives access to all organizer data, if you had 4 organizers, you would be able to use {event_organizer:3:name} |
| {event_organizer:$index:url} | Where $index starts on zero but gives access to all organizer data, if you had 4 organizers, you would be able to use {event_organizer:3:url} |
| {event_organizer:$index:email} | Where $index starts on zero but gives access to all organizer data, if you had 4 organizers, you would be able to use {event_organizer:3:email} |
| {event_organizer:$index:website} | Where $index starts on zero but gives access to all organizer data, if you had 4 organizers, you would be able to use {event_organizer:3:website} |
| {event_organizer:$index:phone} | Where $index starts on zero but gives access to all organizer data, if you had 4 organizers, you would be able to use {event_organizer:3:phone} |

---

**Series Pass Email**

The series pass email is the one that’s delivered with the ticket, once a series pass ticket(s) are purchased. You can configure the email settings to change the way it looks and works.

**Series Pass Email:** Enable or disable if you want the ticket email to be sent out once a series pass ticket(s) have been purchased.

**Subject:** Change the subject for this particular email.

**Heading:** Change the email heading for this particular email.

**Additional Content:** Add any additional content you’d like to include as part of these emails.

**Series Excerpt:** This option includes the series’ excerpt content in Series email.

**Events in Series:**This option shows the next five upcoming Series events in email.

**Wallet & PDF:** It’ll allow you to include PDF tickets as attachments, or a link within the email for your attendees to get their Apple Wallet passes.

**QR Codes:** This option is only available if you use Event Tickets Plus and Event Tickets. It’ll allow you to choose if you want to display the QR code for this email.

**Attendee Registration Fields:** This option is only available if you use Event Tickets Plus and Event Tickets. It’ll allow you to choose if you want to display the Attendee Registration Fields for this email.

#### Available Placeholders

| Placeholder | What it Contains |
| --- | --- |
| {attendee_name} | The attendee name. If there’s more than one ticket it’ll be the first attendee name by default. |
| {attendee_email} | The attendee email. If there’s more than one ticket it’ll be the first attendee email by default. |
| {series_name} | The series name. Needs Events Calendar Pro, and the ticket has to be for a series. |
|  |  |

---

## RSVP Email

The email that’s delivered with the ticket, once RSVP(s) are confirmed.

**RSVP Email:** Enable or disable if you want the RSVP email to be sent out once RSVPs have been confirmed.

**Use Ticket Email:** Choose if you want this email to use the settings and templates of the “Ticket” email. This way you can use the same email if needed.

**Subject:** Change the subject for this particular email.

**Heading:** Change the email heading for this particular email.

**Additional Content:** Add any additional content you’d like to include as part of these emails.

**Calendar Links:** This option is only available if you use The Events Calendar and Event Tickets. It’ll allow you to include iCal and Google event links in this email.

**Calendar Invites:** This option is only available if you use The Events Calendar and Event Tickets. It’ll allow you to include the calendar invite (.ics file) in this email.

**Wallet & PDF:** It’ll allow to include PDF tickets as attachments, or a link within the email for your attendees to get their Apple Wallet passes.

**QR Codes:** This option is only available if you use Event Tickets Plus and Event Tickets. It’ll allow you to choose if you want to display the QR code for this email.

**Attendee Registration Fields:** This option is only available if you use Event Tickets Plus and Event Tickets. It’ll allow you to choose if you want to display the Attendee Registration Fields for this email.

#### Available Placeholders

The placeholders for the RSVP emails are the same as for the “Tickets” emails.

#### Add custom BCC emails to the RSVP Email

The snippet won’t work if RSVP emails are configured to use the Ticket email template. Disable the **Use Ticket Email**option under **Tickets > Settings > Emails > RSVP Email**.

```
<?php
//* Do NOT include the opening php tag

/**
* BCC custom email on all Event Tickets' RSVP ticket emails
*/

add_filter( 'tec_tickets_emails_dispatcher_rsvp_headers', 'my_add_bcc_email_headers' );

function my_add_bcc_email_headers( $headers ) {
	
	$headers['Bcc'] = 'YOUR NAME <[email protected]>';
	
	return $headers;
}
```

---

Alternatively, if you want the BCC added to all ticket-related emails, regardless of type:

```
<?php
//* Do NOT include the opening php tag

/**
* If you want the BCC added to all ticket-related emails, regardless of type.
* Useful for broader email handling, especially if your organization manages multiple ticket types.
*/

add_filter( 'tribe_tickets_email_headers', function( $headers, $ticket_id ) {
// Add BCC email address
$bcc_email = '[email protected]';
$headers[] = 'Bcc: ' . $bcc_email;
// Optional: log to check headers
error_log( 'BCC added to email headers: ' . print_r( $headers, true ) );

return $headers;
}, 10, 2 );
```

#### BCC Event Organizers on RSVP Emails

```
<?php
//* Do NOT include the opening php tag

add_filter( 'tec_tickets_emails_dispatcher_rsvp_headers', 'my_add_bcc_email_organizers_headers', 10, 2 );

function my_add_bcc_email_organizers_headers( $headers, $dispatcher ) {
	$email   = $dispatcher->get_email();
	$post_id = $email->get( 'post_id' );

	if ( ! $post_id || ! function_exists( 'tribe_get_event' ) )  {
		return $headers;
	}

	$event = tribe_get_event( $post_id );

	if ( empty( $event ) ) {
		return $headers;
	}

	// If the event has organizers set
	if ( ! tribe_has_organizer( $post_id ) ) {
		return $headers;
	}

	// Get the organizers
	$organizers = tribe_get_organizer_ids( $post_id );

	// Loop through the organizers
	foreach ( $organizers as $organizer_id ) {
		// Get the organizer email address
		$organizer_email = stripslashes_deep( html_entity_decode( tribe_get_organizer_email( $organizer_id ), ENT_COMPAT, 'UTF-8' ) );

		// Add the organizer email info to our emails array
		$emails[] = $organizer_email;
	}

	if ( empty( $emails ) ) {
		return $headers;
	}

	$headers['Bcc'] = implode( ",", $emails );

	return $headers;
}
```

The above snippets are for the RSVP ticket emails specifically. To do something similar for other (RSVP and Tickets Commerce) emails you need to use the appropriate version of the 
```
tec_tickets_emails_dispatcher_{$email_slug}_headers
```

 filter, where the 
```
$email_slug
```

 can have the following values:

- rsvp
- rsvp-not-going
- ticket
- completed-order
- purchase-receipt

---

## RSVP “Not Going” Email

The email that’s delivered once a user confirms that they’re not attending an event.

**RSVP “Not Going” Email:** Enable or disable if you want the RSVP “Not going” email to be sent out once someone confirms that’s not going.

**Subject:** Change the subject for this particular email.

**Heading:** Change the email heading for this particular email.

**Additional Content:** Add any additional content you’d like to include as part of these emails.

---

## Purchase Receipt Email

The purchase receipt a buyer gets once buying a ticket via **Tickets Commerce**.

**Purchase Receipt:** Enable or disable if you want the Purchase Receipt email to go out once a user buys a ticket via Tickets Commerce.

**Subject:** Change the subject for this particular email.

**Heading:** Change the email heading for this particular email.

**Additional Content:** Add any additional content you’d like to include as part of these emails.

#### Available Placeholders

| Placeholder | What it Contains |
| --- | --- |
| {order_number} | The order number. |
| {order_id} | The order ID. |

---

## Completed Order Email

The completed order confirmation a site admin gets once a **Tickets Commerce** order was completed.

**Purchase Receipt:** Enable or disable if you want the Purchase Receipt email to go out once a user buys a ticket via Tickets Commerce.

**Recipient(s):** Choose the email address(es) to receive this email. By default it’ll be configured to send this email to the administration email address set for the WordPress site. You can add more than one address, separating them with a comma.

**Subject:** Change the subject for this particular email.

**Heading:** Change the email heading for this particular email.

**Additional Content:** Add any additional content you’d like to include as part of these emails.

#### Available Placeholders

| Placeholder | What it Contains |
| --- | --- |
| {order_number} | The order number. |
| {order_id} | The order ID. |

![](https://docs.nexcess.com/wp-content/uploads/2026/06/et-settings-june-23-tab-emails-2.jpg)Tickets → Settings → Emails

---

## Waitlist Emails

The[Waitlist feature](https://docs.nexcess.com/software/the-events-calendar/attendee-waitlist/) has been available in [Event Tickets Plus since 6.2.0.](https://theeventscalendar.com/products/wordpress-event-tickets/)

Among the existing Ticket Emails, you’ll find those designed specifically to follow up with waitlisted users.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-3.jpg)

Users will first get a confirmation notifying them that they are on the waitlist for a specific event. Once the ticket becomes available, they will get another email with the link to where they can purchase the ticket.

Here is how emails look out of the box. There are placeholders included, but there’s also some generic text that you may want to customize to better fit your event.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Wait-conf.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Spot-available.jpg)

---

## Sender Information Setting

**Sender name:** This is the name that displays in an email inbox. For example, using “Event Tickets” would display that as the email sender name in a user’s inbox.

**Sender email:** The email address used as the sender of all Event Tickets-associated emails.

---

## Email Styling Settings

**Header image:** The email header image.

**Image alignment:** The horizontal alignment for the header image.

**Header/Footer background:** You can select the header and footer background colors from this setting. If you want to fall back to the original color, you can choose 
```
#50B078
```

**Ticket color:** The background color for the ticket section in the Tickets and RSVP emails. The system will adjust the font color of that section to match a contrast color to make the text readable.

**Footer content:** In this setting, you should be able to insert any information you want. The text will be placed in the footer of the email.

**Footer credit:** This setting will be present only if you’re running a site with Event Tickets Plus, and it’ll allow you to remove the “Powered by Event Tickets”.

If you are using only **Event Tickets** (without Event Tickets Plus) and want to remove the “Powered by Event Tickets” credit from the email footer, you will need to override the email template file in your theme at: *event-tickets/src/views/tickets/emails/template-parts/body/footer/credit.php*. You can do a template override by following this guide: [Customizing Template Files](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/). In that file, comment out or remove the following lines to hide the footer credit:

```
<tr>
	<td class="tec-tickets__email-table-main-footer-credit-container" align="right">
		<?php echo wp_kses_post( $credit_html ); ?>
	</td>
</tr>
```

**👋** Having email deliverability issues? Your site emails are not being received? We have an article covering the most common problems. [Learn more](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-ticket-emails/).

---

