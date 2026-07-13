# Event Attendees

*Category from The Events Calendar documentation*

---

## Managing Event Attendees

**Source:** [https://docs.nexcess.com/software/the-events-calendar/event-attendees/](https://docs.nexcess.com/software/the-events-calendar/event-attendees/)

The attendee list is the central reporting view for all ticket purchases and RSVP registrations across your events, pages, or posts. This article covers how to access the attendee list, navigate it, manually add or edit attendees, handle check-ins, export and filter the data, and let attendees edit their own information from the frontend.

For the order lifecycle that generates these attendee records — how orders are created and completed, how to issue refunds, and the full order status reference — see [Managing Orders](https://theeventscalendar.com/knowledgebase/tickets-managing-orders/).

## Accessing the Attendee List

👋 Note: With the [Seating](https://theeventscalendar.com/products/seating/) add-on, you manage attendees on the Attendee list, but you manage seat assignments on the [Seats tab](https://docs.nexcess.com/software/the-events-calendar/assigned-seating-tickets/#h-managing-attendees) for each event.

#### Accessing Attendees Across All Events

The global attendees list is available from **Tickets → Attendees**.

![The global Attendees screen at Tickets → Attendees](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2024-04-17-at-12.49.35.jpg)

#### Accessing Attendees for a Specific Event, Page, or Post

Hover over an event, page, or post in your WordPress admin and click the **Attendees** link:

![The Attendees link when hovering over an event](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2023-12-16-at-12.27.28-PM-1.jpg)

Or click the **Attendees** link in the ticket form of the Block Editor, or the **View Attendees** link in the Classic Editor:

![Accessing attendees in the Block Editor](https://docs.nexcess.com/wp-content/uploads/2026/06/new-blocks-ticket-attendees-link.jpg)

![Accessing attendees in the Classic Editor](https://docs.nexcess.com/wp-content/uploads/2026/06/CleanShot-2023-12-16-at-12.33.54@2x.jpg)

Or click the **Attendees** link in the WordPress admin toolbar when viewing the event on your site:

![The Attendees link in the admin toolbar](https://docs.nexcess.com/wp-content/uploads/2026/06/CleanShot-2023-12-16-at-13.11.53@2x.jpg)

Any of these methods opens the attendee list, showing purchaser name, email, ticket ID, and a unique ticket security code:

![The attendee list for an event](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_20-41-38.jpg)

#### Viewing Attendee Registration Information

To view attendee data, click the attendee’s name in the attendee list:

![The View Attendee Info modal](https://docs.nexcess.com/wp-content/uploads/2026/06/Attendee-Information-Data-Modal-1024x660-1.jpg)

In this example, customers were asked for their phone number, T-shirt size, and whether they require valet service.

#### Filtering the Attendee List

For large events, the filtering options help narrow down the list:

![Filtering options for the attendee list](https://docs.nexcess.com/wp-content/uploads/2026/06/filtering-the-attendees-list.png)

Type a ticket number (or the start of one) and the list filters to matching results. You can also filter by order number, security code, order status, purchaser name, purchaser email, or product ID.

Order Status search requires the exact status slug. See the [Order Status Reference](https://theeventscalendar.com/knowledgebase/tickets-managing-orders/#h-order-status-reference) in Managing Orders for the full list of slugs by provider.

#### Bulk Actions

Like other WordPress admin pages, the attendee list has bulk actions. You can check in many tickets at once, reverse a check-in, delete entries, or move attendees/RSVPs to another event. Check the relevant rows, choose an action from the **Bulk Actions** menu, and click **Apply**.

![The Bulk Actions menu on the attendee list](https://docs.nexcess.com/wp-content/uploads/2026/06/Attendees-list-bulk-actions.jpg)

### Exporting Attendee Data

You can extract attendee data via print, CSV export (easy to import into a spreadsheet), or email. The buttons are at the top and bottom of each attendee list.

![Print, export, and email buttons on the attendee list](https://docs.nexcess.com/wp-content/uploads/2026/06/Attendees-list-actions-1024x94-1.jpg)

## Adding Attendees

Sometimes you need to add an attendee manually — someone who’s having difficulty registering, a comp, or a guest who doesn’t need to go through the registration process at all.

From the attendee list, click the **Add Attendee** button above the list. A modal appears where you can enter the attendee’s details.

#### Adding an Attendee to an RSVP

Fill in Name and Email Address.

![The Add Attendee modal with Name and Email fields](https://docs.nexcess.com/wp-content/uploads/2026/06/attendee-add.png)

👋 Note: “Going” is the only RSVP response available when manually adding an attendee. “Can’t go” is not selectable, even if it’s enabled for the RSVP.

#### Adding an Attendee to a Ticket

Assigning an attendee to a ticket works the same way as an RSVP. The modal also shows how many tickets remain for that specific ticket type.

![The Add Attendee modal for a ticketed event](https://docs.nexcess.com/wp-content/uploads/2026/06/attendee-add-ticket-modal-1.jpg)

👋 Note: Manually-added attendees are *not* charged the ticket price. If you need to collect payment, either complete the registration process for them on your site or handle payment separately.

#### Adding an Attendee to a Seated Ticket

1. Go to the **Attendees** tab and add the attendee there.
2. Navigate to the **Seats** tab to locate the attendee you just added.
3. Click **Assign Seat** and choose a seat from the available options.

👋 Note: Changing an existing seat assignment is done from the Seats tab. See [Using Seating with Event Tickets](https://docs.nexcess.com/software/the-events-calendar/assigned-seating-tickets/#h-managing-attendees) for details.

#### Handling Multiple RSVPs and Tickets

If an event has both an RSVP and a ticket form, or multiple ticket types, the Add Attendee modal lets you select which one the attendee should be added to. Every RSVP and ticket associated with the event appears as an option.

![Selecting a ticket or RSVP when an event has multiple](https://docs.nexcess.com/wp-content/uploads/2026/06/attendee-add-select-ticket.gif)

#### Custom Registration Fields

If you’re using Event Tickets Plus and have created [custom registration fields](https://docs.nexcess.com/software/the-events-calendar/attendee-registration/) for a ticket or RSVP, those fields appear in the Add Attendee modal.

![Custom registration fields in the Add Attendee modal](https://docs.nexcess.com/wp-content/uploads/2026/06/attendee-add-custom-fields.png)

### Overbooking an Event

You can exceed the available ticket or reservation count when manually adding attendees. Event Tickets won’t prevent oversell, but it will warn you before you continue.

![Oversell warning when manually adding an attendee](https://docs.nexcess.com/wp-content/uploads/2026/06/attendee-add-ticket-oversell.png)

## Editing Attendees

To edit an existing attendee, hover over the attendee’s row in the Attendee List and click **Edit**, or use the Edit option in the right-side column. You can modify Name, Email address, and any custom Attendee Registration fields.

![The Edit Attendee Info modal](https://docs.nexcess.com/wp-content/uploads/2026/06/Attendee-Information-Data-Modal-Edit-1024x707-1.jpg)

### Let Attendees Edit Their Information

With Event Tickets Plus, you can let attendees log in to your site and edit their RSVP or ticket information — meal choice, contact details, custom registration fields, and so on.

👋 Note: This feature requires Event Tickets Plus (even for RSVPs) and works only for tickets where [Individual Attendee Collection (IAC)](https://theeventscalendar.com/knowledgebase/enabling-attendee-information-for-tickets/) is required.

#### Step 1: Allow User Registration

If your site doesn’t already have a user account creation process, enable registration at **Settings → General** by checking the [“Allow anyone to register”](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2016-06-03-at-1.15.04-PM.jpg) option. [This WPBeginner article](http://www.wpbeginner.com/beginners-guide/how-to-allow-user-registration-on-your-wordpress-site/) has more details.

If you use WooCommerce, it can create user accounts with the Customer role automatically. To direct folks to the WooCommerce My Account page for login, add this snippet:

```
add_filter( 'tribe_tickets_ticket_login_url', function ( $login_url ) {
    return $login_url = get_site_url() . '/my-account';
}, 20 );
```

#### Step 2: Limit Purchases to Logged-In Users

Go to **Tickets → Settings → General** and locate the **Login** options. See [the Settings Overview](https://docs.nexcess.com/software/the-events-calendar/event-tickets/#login) for details.

![Login requirements under Tickets → Settings → General](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-05-19-at-10.32.10-AM.jpg)

#### Step 3: Let Users RSVP or Buy Tickets Normally

Once configured, customers and visitors can buy tickets and RSVP as usual, as long as they’re logged in. After purchase or RSVP, when they view the event, they’ll see an information box below the venue information and above the ticket purchase form:

![The View Your Tickets information box](https://docs.nexcess.com/wp-content/uploads/2026/06/view-your-tickets.png)

Clicking **View Your RSVPs** (or **View Your Tickets**) takes the user to a page where they can edit:

- RSVP response
- Name and email address associated with the ticket
- [Attendee Information field](https://docs.nexcess.com/software/the-events-calendar/attendee-registration/) responses, if any
- Whether the user wants to appear on the frontend “Who’s Going?” list, if that feature is enabled

![The frontend attendee information edit screen](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2016-12-22-at-3.32.34-PM.jpg)

## Checking In Attendees

The most important column on the attendee screen is **Check in**. When attendees arrive at your event, use this column to confirm their ticket is valid and that a duplicate with the same ID hasn’t already been checked in.

See also: [Ticket QR Codes and the Ticket Check In](https://docs.nexcess.com/software/the-events-calendar/ticket-qr-codes/)

#### QR Code Check-Ins

With Event Tickets Plus, tickets include a QR code. Whether the ticket is on a smartphone screen or printed on paper, scanning the QR code with any supported QR code reader checks in that attendee.

![A ticket with a scannable QR code](https://docs.nexcess.com/wp-content/uploads/2026/06/Ticket-with-QR-Code-1024x995-1.jpg)

See [Using QR Codes with Event Tickets Plus](https://docs.nexcess.com/software/the-events-calendar/ticket-qr-codes/) for full details.

💡 If attendees report that the QR code is showing as a broken image icon, it may be an email client setting. Several email clients default to not downloading images; if images are disabled, the QR code won’t appear. See [Why QR Codes Aren’t Appearing in Emails](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-ticket-emails/).

#### Check-Ins Without QR Codes

You can check in attendees by clicking the **Check-in** button next to each ticket in the event’s Attendees page — no QR codes required. You can also [disable sending the QR code in emailed tickets](https://docs.nexcess.com/software/the-events-calendar/event-tickets/) if you prefer.

For events in locations without reliable internet, you can export and print an attendee report for offline check-ins (see Exporting Attendee Data below). Note that offline check-ins don’t benefit from the “already checked-in” detection, which matters if you’re checking in attendees at multiple locations.

## Re-sending Ticket Emails

If an attendee needs their ticket re-sent, hover over the attendee’s row in the Attendee List to reveal the re-send option.

![The Re-send ticket option on an attendee row](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-06-08-at-1.40.51-PM-1024x140-1.jpg)

When you manually add a new attendee, they automatically receive a ticket email. If you edit an existing attendee’s email address, a checkbox lets you re-send the ticket email to the new address.

👋 Note: Updating an attendee’s email address invalidates their previous QR code and Security code — a new QR code and Security code are generated for the new email, regardless of whether the email is re-sent.

To prevent abuse, there’s a default limit of **2 re-sends** per attendee. You can adjust this limit via the 
```
tribe_tickets_handler_email_max_resend_limit
```

 filter. For example, to allow up to 12 re-sends:

```
/**
 * Customize the maximum number of emails that can be resent to an attendee.
 *
 * Return -1 to remove the limit entirely.
 *
 * @param int          $max_resend_limit The maximum number of emails that can be resent. Default: 2.
 * @param WP_Post|null $ticket           The ticket post object, if available.
 * @param array|null   $attendee         The attendee information, if available.
 */
function my_custom_event_tickets_email_max_resend_limit( $max_resend_limit, $ticket, $attendee ) {
    return 12;
}

add_filter( 'tribe_tickets_handler_email_max_resend_limit', 'my_custom_event_tickets_email_max_resend_limit', 10, 3 );
```

To remove the limit entirely:

```
add_filter( 'tribe_tickets_handler_email_max_resend_limit', static function() {
    return -1;
} );
```

To allow up to 5 re-sends:

```
add_filter( 'tribe_tickets_handler_email_max_resend_limit', static function() {
    return 5;
} );
```

## Public Attendee Information

The public attendee list feature powers the “Who’s Attending” feature on your event page (with [Event Tickets Plus](https://theeventscalendar.com/product/wordpress-event-tickets-plus/)), but it does more than that — it lets you and others see who is attending an event, powered by the public API.

👋 Note: Like all [WordPress APIs](https://developer.wordpress.org/rest-api/), the Public Attendee API is public. User data is publicly accessible unless the user opts to hide their data.

## Related Articles

- [Check In Attendees with QR Codes and the Event Tickets Plus App](https://docs.nexcess.com/software/the-events-calendar/ticket-qr-codes/)
- [Displaying and Managing the Public Attendee List](https://docs.nexcess.com/software/the-events-calendar/public-attendee-list/)
- [Moving Event Tickets and Attendees](https://docs.nexcess.com/software/the-events-calendar/move-tickets-attendees/)
- [Understanding How Event Tickets Calculates Availability](https://docs.nexcess.com/software/the-events-calendar/event-tickets-availability/)

---

