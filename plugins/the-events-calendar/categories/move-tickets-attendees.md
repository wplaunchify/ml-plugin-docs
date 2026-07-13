# Move Tickets Attendees

*Category from The Events Calendar documentation*

---

## Moving Event Tickets and Attendees

**Source:** [https://docs.nexcess.com/software/the-events-calendar/move-tickets-attendees/](https://docs.nexcess.com/software/the-events-calendar/move-tickets-attendees/)

With Event Tickets and Event Tickets Plus, you have the ability to move tickets (RSVPs and [e-commerce](https://docs.nexcess.com/software/the-events-calendar/ecommerce/) tickets) to other events and to move attendees to other tickets (in the same event or another event).

## Moving Tickets / RSVPs to Another Event

To move a ticket with the Classic Editor, go to the event, and select the pencil icon at the right to edit the event.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_20-28-29.jpg)Classic Editor – Move Ticket

At the bottom of the ticket editor, select “Move RSVP”

![](https://docs.nexcess.com/wp-content/uploads/2026/06/2023-12-19_17-48-17.jpg)Classic Editor – Move Ticket

To move a ticket with the Block Editor, go to the ticket, and then select **Move Ticket**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_20-31-06.jpg)

**Note**: Tickets with [assigned seating](https://docs.nexcess.com/software/the-events-calendar/assigned-seating-tickets/) and Attendees with seat assignments cannot be moved between events.

### Choose Destination Event

A “Move Ticket” dialogue box will appear. Select the post that you would like to move the ticket to and click “Finish”. You can select to search only events or all post types that have tickets enabled (see **Tickets > Settings > General** to adjust the available post types).

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Move-Tickets-to-Another-Event-2-e1496465181298.jpg)

**Note:** While possible, it is not recommended to move a ticket to an event that already has a ticket using a different e-commerce solution. For example, moving a ticket that sells using Tickets Commerce to an event that already has a ticket that sells using WooCommerce is not recommended.

## Moving Ticket Attendees to Another Ticket or Event

The following ticket transfers are possible:

- Move RSVP attendee to another RSVP ticket on the same event or a different event
- Move paid attendees to another paid ticket on the same event or a different event

**Note:** RSVP attendees cannot be transferred to a paid ticket and vice versa. If you try to move an attendee to an event that doesn’t have any (such as an RSVP attendee ticket to an event that only has paid tickets), you will get a message that no tickets were found. This is also applicable for Tickets created using different e-commerce solutions like moving a Tickets Commerce ticket attendee to a WooCommerce one.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Move-Attendees-1.jpg)

A “Move Ticket” dialogue box will appear where you can choose to move the ticket to a different ticket name within the same event or to a different event entirely. Select your choice and click “Finish!”.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Moving-Attendees-3.jpg)

#### On the Same Event

From the “Move Attendees” dialogue box, select the ticket name you want to move the attendee to and click “Finish!”.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Moving-Attendees-4.jpg)

The attendee will receive an email notifying them that they are now registered with the new ticket name.

You will now need to adjust the ticket stock manually (if you set a limit on the tickets available).

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Moving-Attendees-5.jpg)

#### On a Different Event

From the “Move Attendees” dialogue box, select the event you want to move the attendee to and click “Next”. Note that only events that already have tickets on them will appear as options.
Next, select the ticket name on the new event that you want to move the attendee to.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Move-Tickets-to-Another-Event-2-e1496465181298.jpg)

The attendee will receive an email notifying them that they are now registered for the new event.
You will now need to adjust the ticket stock manually (if you set a limit on the tickets available).

If you would like to **disable the notification email** sent to the attendee, then follow [this article](https://docs.nexcess.com/software/the-events-calendar/customization/).

### Adjusting Ticket Stock

Once an attendee has been moved to another ticket, make sure you adjust the stock levels for both tickets (if you set a limit on available tickets). You will need to reduce the available stock for the ticket you moved the attendee to, and increase the stock for the ticket you moved the attendee from.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Adjusting-Ticket-Stock.jpg)

#### RSVP

Under the Tickets section of the event, click “Edit” on the ticket you want to edit, and manually adjust the stock.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Adjusting-Ticket-Stock-RSVP.jpg)

#### WooCommerce

For paid tickets, hover over the ticket you want to edit, click “Edit in WooCommerce”, and under the Inventory tab, manually adjust the stock.

### Additional Ticket Fields

When moving an attendee with one ticket name to another ticket name, any additional information collected at the time of reservation via custom ticket fields will be transferred along with the attendee. This will remain a part of the transferred ticket under “Other attendee data”, but it will not affect the fields that you have set up on the new ticket name.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Additional-Ticket-Fields-1.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Additional-Ticket-Fields-2.jpg)

## Disable Tickets Email When Moving an Attendee or Ticket

By default, when a ticket or attendee is moved a notification email is automatically sent to the attendee(s) to alert them that a change has been made to their ticket. To disable these notification emails, just add the code snippet below using a [Code Snippets plugin](https://wordpress.org/plugins/code-snippets/) or add the code to your theme’s 
```
functions.php
```

 file.

**To disable the email when moving a ticket:**

```
add_filter( 'tribe_tickets_ticket_type_moved_email_recipient', 'disable_email_when_moving_ticket' );

function disable_email_when_moving_ticket( $email_addr ) {
	if ( $_POST['action'] == 'move_ticket_type' ) {
		return "[email protected]";  // Or empty string
	}

	return $email_addr;
}
```

**To disable the email when moving an attendee:**

```
add_filter( 'tribe_tickets_ticket_moved_email_recipient', '__return_null' );
```

These snippets will remove the recipient’s email address and the email will not be sent.

---

