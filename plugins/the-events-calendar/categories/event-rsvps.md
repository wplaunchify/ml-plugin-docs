# Event Rsvps

*Category from The Events Calendar documentation*

---

## Creating RSVPs with Event Tickets

**Source:** [https://docs.nexcess.com/software/the-events-calendar/event-rsvps/](https://docs.nexcess.com/software/the-events-calendar/event-rsvps/)

Sometimes you may not want to sell tickets and charge a price for an event but would still like to have a list of people who will be attending. The RSVP ticket type in [Event Tickets](https://theeventscalendar.com/products/wordpress-event-tickets/) provides this functionality.

Instead of buying a ticket, entering credit card or PayPal information, or going through any other part of the checkout process, with the RSVP “ticket” option users just:

- Select a quantity for how many spots to RSVP.
- Enter their name and email address to confirm that they will be attending the event.
- Immediately receive a simple ticket confirming their reservation at the email address they entered.

**This article will show you how to enable and use the RSVP features of Event Tickets and Event Tickets Plus.**

**Note:**There is no eCommerce or payment-collection functionality with RSVPs. This article is only about the RSVP feature; to learn about selling tickets with Event Tickets and Event Tickets Plus, check out the [Making a Ticket](https://docs.nexcess.com/software/the-events-calendar/assigned-seating-tickets/) tutorial.

### Enabling RSVP Functionality

If you have The Events Calendar installed and activated on your site, then the Tickets meta box from Event Tickets will be enabled on Events automatically. It will show up in the wp-admin edit screen for the Events post type.

If you do not have The Events Calendar installed or would like to enable tickets on any other post type, first head to **Tickets → Settings** in your wp-admin. Once here, head to the “General” tab and check the boxes for each post type you want to use. [Read more about Event Tickets settings](https://docs.nexcess.com/software/the-events-calendar/event-tickets/).

### Using RSVP Functionality

#### Adding a New RSVP

To add RSVPs, first head to the creation/edit screen for a post type on which Tickets functionality is enabled (e.g. your event or post). Scroll down and you will find the *Tickets meta box*.

If you don’t have any e-commerce functionality enabled to sell tickets, you’ll see a button that says **+ New RSVP**. If you also have enabled Tribe Commerce (legacy), Tickets Commerce, or Event Tickets Plus (alongside an e-commerce plugin), you’ll see the **+ New Ticket** button too.

![RSVP option with Event Tickets Plus activated.](https://docs.nexcess.com/wp-content/uploads/2026/06/1_Tickets_Metabox_Buttons.jpg)The New Ticket and New RSVP buttons when Event Tickets Plus is activated.

#### The RSVP Ticket Fields

Clicking the **+ New RSVP** button will open the Add New RSVP fields. You can then fill out the fields and click *“Save RSVP”*.

![a list of RSVP tickets in the backend of WordPress](https://docs.nexcess.com/wp-content/uploads/2026/06/single-rsvp.png)
Classic Editor New RSVP

![](https://docs.nexcess.com/wp-content/uploads/2026/06/new-blocks-rsvp-911x1024-1.jpg)Block Editor New RSVP

The following shows the fields for RSVPs.

![RSVP ticket fields](https://docs.nexcess.com/wp-content/uploads/2026/06/2_Tickets_Metabox_Add_New_RSVP.jpg)

If you have activated [ticket blocks](https://docs.nexcess.com/software/the-events-calendar/events-block-editor/), the interface for adding an RSVP will look just a little bit different. Click in the default Event RSVP block or add a new RSVP block.

![Screenshot: published of the front-end view of RSVP](https://docs.nexcess.com/wp-content/uploads/2026/06/Event-Tickets-RSVP-1024x405-1.png)

Many of the fields in the tickets meta box are self-explanatory, but let’s run through each just to be sure.

- **Type** lets you set a unique name for the ticket type – which might be something like *Standard, Adult, etc.*
- **Capacity** is the number of tickets that are available: if you leave this blank it is assumed that there is no limit. If you have a limited number of spots for your event, you’ll want to make sure to set this accordingly.

**Advanced fields:**

- **Description** is a good space to add any information attendees might be interested in, such as *bring waterproof jackets* or *not recommended for children.* You can choose to show or not in the front-end ticket form.
- **Start sale** dictates when the RSVP becomes available. If you’re using RSVPs on a post or page, this field is required. If you are making RSVPs on an event, you don’t need to set this field- by default sales will start when you publish the event or ticket.
- **End sale** does the reverse – you can set this to a date after which users cannot RSVP. As with the start sale field, setting this is optional for events and the default is to stop sales when the event itself starts.

If you have Event Tickets Plus, you will also see an option here for **collecting attendee information**. This feature allows you to request additional information beyond the name and email of the person RSVPing. You can learn about this feature in our separate [Attendee Information article](https://docs.nexcess.com/software/the-events-calendar/attendee-registration/).

### Publishing the Content and Accepting RSVPs

Once you’ve entered all your content and have created RSVP tickets, you can now publish your content and let people RSVP for the event.

Once RSVPs are allowed according to the “Start Sale Date” option for your RSVP tickets, users will see something like this at the bottom of your ticketed content:

![Screenshot: published of the front-end view of RSVP](https://docs.nexcess.com/wp-content/uploads/2026/06/Event-Tickets-RSVP-1024x405-1.png)Front-end view of RSVPs

Users can RSVP with those fields and will receive a confirmation over email with their tickets. Here’s a screenshot of the default ticket layout that event attendees will receive over email:

![A screenshot of an RSVP demo](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2015-12-02-at-11.22.19-AM-665x263-1.jpg)

### Letting Attendees Edit RSVPs

Beginning with Event Tickets Plus version 4.2, you can allow users who have made RSVPs for your events to log in and edit their RSVP responses, attendee information, and more. Note that this feature requires attendees to create an account and log in before registering for your events.

![An example of the "View your RSVPs" information box on an event page](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-01-20-at-1.52.02-PM.jpg)An example of the “View your RSVPs” information box on an event page

To learn more about this feature and how to enable it for your users, head on over to [our article on managing ticket orders and attendees](https://docs.nexcess.com/software/the-events-calendar/ticket-orders/#editing-attendee-info).

---

Next up we recommend that you learn about [managing ticket orders and attendees](https://docs.nexcess.com/software/the-events-calendar/ticket-orders/). If you have any further questions please don’t hesitate to connect with the team over at our help desk.

---

