# Create Tickets

*Category from The Events Calendar documentation*

---

## Creating Event Tickets

**Source:** [https://docs.nexcess.com/software/the-events-calendar/create-tickets/](https://docs.nexcess.com/software/the-events-calendar/create-tickets/)

Creating tickets with Event Tickets and Event Tickets Plus is easy and fast. This page walks you through the process of making tickets for your site’s posts, pages, or events. Before getting started, make sure you [review your settings](https://docs.nexcess.com/software/the-events-calendar/event-tickets/). The article is divided up into two main parts:

1. **Setting up basic tickets**– creating basic tickets with a specific or unlimited capacity
2. **Shared Capacity**– creating two or more tickets that pull from a shared capacity for the event

You can get a quick overview of using Block Editor with Tickets in [An Introduction to Tickets Blocks](https://docs.nexcess.com/software/the-events-calendar/events-block-editor/).

With Event Tickets and Events Calendar Pro you can also create a pass ticket that gives attendees access to an event [Series](https://docs.nexcess.com/software/the-events-calendar/event-series/) (a group of multiple events). Find out more about this amazing new ticket type, [Series Passes](https://google.com).

## Setting Up Basic Tickets

Tickets can be added to posts, pages, or events. In the Classic Editor, you will find the *Tickets meta box b*elow the main content of the post type*:*

![Classic Editor: Add Ticket or RSVP](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_19-55-36.jpg)Classic Editor: Add Ticket or RSVP

The **Ticket Settings** option provides control over which ecommerce provider is used to manage ticket sales for an event. When your site has multiple ecommerce integrations enabled—such as **WooCommerce**, **Easy Digital Downloads (EDD)**, or others—this button allows you to specify the provider that will handle ticket creation, checkout, and order management for that specific event.

Selecting the appropriate ecommerce provider ensures that tickets are processed using the correct store system, reflecting the settings, payment gateways, and reporting features associated with that integration.

This option is particularly useful for sites that use more than one ecommerce solution, allowing event organizers to manage ticketing flexibly without changing global settings.

![Classic Editor: Ticket Settings Options](https://docs.nexcess.com/wp-content/uploads/2026/06/teckb-1030-01-1024x554-1.jpg)Classic Editor: Ticket Settings Options

When using the Block Editor, the available options become visible upon selecting the ticket creation block.

![Block Editor: Ticket Settings Options](https://docs.nexcess.com/wp-content/uploads/2026/06/teckb-1030-02-1024x519-1.jpg)Block Editor: Ticket Settings Options

If you have another ecommerce solution, you may want to disable Tickets Commerce to prevent accidental ticket sales through it. Tickets Commerce becomes the default ticket ecommerce provider when enabled via **WordPress Dashboard > Tickets > Settings > Payments**.

In the Block Editor, default Ticket blocks or RSVP blocks may appear if you are creating an event.  Otherwise, you can add a Ticket and RSVP blocks to the main content:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_20-01-11.jpg)Block Editor: Add Ticket or RSVP

We’ll create a basic ticket with a capacity for this ticket only for this example. (Using a shared capacity for two or more tickets is discussed in another [section below](#global-stock).)

When clicking on the **+ New ticket** button you will be presented with some additional options:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2023-12-20-at-14-40-51-Add-New-Event-‹-Test-Flexible-Tickets-—-WordPress.jpg)Classic Editor: Add New Ticket

![](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_20-06-41.jpg)Block Editor: Add New Ticket

In this example, we are using [Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/) with WooCommerce. Since we want to make a purchasable ticket, we click **+ New Ticket**. If you want to collect attendee RSVPs without selling tickets, you can click **+ New RSVP** instead – in which case you’ll want to read over [our RSVP tutorial](https://docs.nexcess.com/software/the-events-calendar/event-rsvps/) instead.

If you are using only Event Tickets with [Tickets Commerce](https://docs.nexcess.com/software/the-events-calendar/tickets-commerce/), then you will only see one capacity option as shown on [this screen](https://docs.nexcess.com/wp-content/uploads/2026/06/Event-Tickets-Add-New-Ticket.jpg).

When creating tickets with [Tickets Commerce](https://docs.nexcess.com/software/the-events-calendar/tickets-commerce/), you will also have the option to add a sale price, and the dates for the sale price.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/tickets-commerce-sale-price-1024x794-1.jpg)Adding a sale price of $20 for Tickets Commerce tickets.

Clicking on *Advanced* will show the following additional field.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2023-12-20-at-15-14-31-Add-New-Event-‹-Test-Flexible-Tickets-—-WordPress.jpg)Classic Editor: Event Tickets Plus Advanced Options

![](https://docs.nexcess.com/wp-content/uploads/2026/06/new-blocks-ticket-etp-1024x834-1.jpg)Block Editor: Event Tickets Plus Advanced Options

Many of the fields in the tickets meta box are self-explanatory, but let’s run through each just to be sure.

- **Name**lets you set a unique name for the ticket – which might be something like *Standard, Adult, Concession, etc.*
- **Price**controls the price of each ticket. If the tickets are not going to be sold – but rather you are going to give them away for free – you can leave this field blank or set it to *0.*
- **Sale Price**: This option is only available if you’re using Tickets Commerce
- **Capacity**is the number of tickets that are available: if you leave this blank it is assumed that there is no limit and customers can buy as many as they would like. If you have a limited number of spots for your event, you’ll want to make sure to set this accordingly.

Advanced:

- **Ticket description** is optional, but it’s a good space to add any information customers might be interested in, such as *bring waterproof jackets* or *not recommended for children.*You can choose to show or not in the front-end ticket form.
- **Start sale** dictates when the tickets are available for sale. If you’re making tickets on a post or page, this field is required. If you are making tickets for an event, you don’t need to set this field – by default, sales will start when you publish the event or ticket.
- **End sale** does the reverse – you can set this to a date after which the tickets should no longer be available for customers to buy. As with the start sale field, setting this is optional for events and the default is to stop sales when the event itself starts.
- **SKU**lets you set a unique code to help identify the tickets. This is another optional field and is of most use to merchants with an existing stock-keeping unit system.

By default, the name and contact information of the person buying the tickets is collected during the purchase process. If you want to collect additional information (such as names of all attendees, t-shirt sizes, etc.) then you can implement the [Attendee Information feature](https://docs.nexcess.com/software/the-events-calendar/attendee-registration/) (Available only with Tickets Plus) by clicking + **Attendee Information**. This feature is explored in [another article](https://docs.nexcess.com/software/the-events-calendar/attendee-registration/), and this walkthrough assumes that you do not need to collect additional information.

As soon as you’re ready, simply click on **Save/Update Ticket** and you’re done … and never fear, if you make a mistake you can correct it by clicking on the edit link (pencil icon) later on:

![Classic Editor: Edit tickets](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-05-09-at-9.33.32-AM.jpg)Classic Editor: Edit Tickets

If you’d like to delete a ticket when using the Classic Editor, simply click on the trash icon located below the pencil icon on the right side of your ticket.

You can duplicate a ticket when using the Classic Editor by clicking on the middle rectangle button. This will prompt a copy of the ticket to appear directly below the one you’ve duplicated.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_20-12-49.jpg)Block Editor: Edit Tickets

### Note

If the tickets **are for sale but just sold out**, then the form will still show. But purchasing tickets won’t be possible, and there will be an “Out of Stock!” message as shown in [this screenshot](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2016-06-01-at-3.46.09-PM.jpg).

What about if the tickets are not sold out but are only going to be sold between certain dates, and a website visitor views the event page outside of that time window? **In this case, the ticket form will not show up at all.** A simple “Tickets are not yet available”-type message will be displayed instead, as shown in [this screenshot](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2016-06-01-at-3.37.16-PM.jpg).

## Event Ticket Types

Different ticket types allow you the flexibility to sell tickets to various kinds of events. Users with Event Tickets have access to one ticket type: standard ticket. If you also have Events Calendar Pro, you can also use the [Series Pass](https://evnt.is/-series-passes) ticket type. In the future, we’ll be adding additional ticket types to further expand the functionality ([read more](https://docs.nexcess.com/software/the-events-calendar/recurring-events/)).

### Standard Tickets

Standard tickets are the default option for single events, posts, or pages, granting access to one specific date and time. They can be created directly within the WordPress editor and are ideal for most standalone occurrences. While these support **Assigned Seating** for venue-specific layouts, please note that they cannot currently be added to recurring events.

### Series Passes

Available with **Events Calendar Pro**, a Series Pass grants access to *all* events within a specific Series, including both single and recurring events. These are managed from the Series admin page and can be purchased from the main Series page or any individual event included in that Series. Unlike standard tickets, Series Passes do not support Assigned Seating.

Series Passes can be purchased from the Series page and from any event in that Series. Series Passes are perfect for multi-day events, events with multiple venues or stages, or any time you want to up-sell attendees to more events.

Ready to get started with Series Passes? Learn more in [this article](https://docs.nexcess.com/software/the-events-calendar/series-passes/).

## Shared Capacity and Ticket Settings

The shared capacity feature allows you to create multiple tickets that all come out of one pool of stock. For example, say you have a venue that has 100 seats, and you are selling three different priced tickets for children, adults, and seniors. If you listed the capacity of each ticket at 100, you might accidentally sell over 100 total tickets and run out of seats. Instead, you can set a *Shared Capacity* of 100 for the event. Your attendees can choose to buy any of the three tickets, but only up to 100 individual ticket sales.

To enable the shared capacity for your event, click the **Settings**button in the tickets meta box. A field will appear for *Shared Capacity*. Edit that number to your event capacity. In the example described above, that number would be 100.

![Ticket Settings for an event](https://docs.nexcess.com/wp-content/uploads/2026/06/TER-Ticket-Settings.jpg)Classic Editor: Ticket Settings

![](https://docs.nexcess.com/wp-content/uploads/2026/06/new-blocks-ticket-settings.jpg)Block Editor: Ticket Settings

If you check the *Show attendees list on event page*checkbox in the Classic Editor, attendees who purchase tickets will have their [Gravatar](https://gravatar.com) displayed in a [Who’s Attending feature](https://cloudup.com/cHoh6LrI4H1) on the event page.

If you display attendees on the front of your site, attendees can participate in the [Public Attendees List](https://docs.nexcess.com/software/the-events-calendar/public-attendee-list/). We are excluding users from the Public Attendees List if the attendees are not displayed on the front of your site. If you are displaying attendees, the default option for users is to be excluded (opted-out), to adhere to GDPR regulations.

![Ticket Settings for an event](https://docs.nexcess.com/wp-content/uploads/2026/06/TER-Ticket-Settings.jpg)Classic Editor: Show attendees list

![](https://docs.nexcess.com/wp-content/uploads/2026/06/new-blocks-add.jpg)Block Editor: Add attendees block

![](https://docs.nexcess.com/wp-content/uploads/2026/06/new-blocks-attendees-1.jpg)Block Editor: Attendees block

When you click **+ New Ticket****the new ticket fields will display. In addition to the basic options outlined in the section above, you’ll see the [Capacity](https://docs.nexcess.com/software/the-events-calendar/event-tickets-availability/)options.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_20-16-45.jpg)Classic Editor: Ticket Capacity

![](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_20-21-17.jpg)Block Editor: Ticket Capacity

If you want your ticket to share the capacity for your event but also impose a sales limit on it (for example, if you want to only allow up to 50 children at your event out of your shared capacity of 100 attendees) you can *Sell up to*a certain number of tickets*.*

Once you’ve configured your ticket, hit the **Save Ticket****button and you’re all set. As your tickets start to sell, the stock for all tickets in global stock will decrease accordingly.

**Note:** We recommend running only one e-commerce functionality at a time. If you need to run multiple, we highly recommend that all tickets for one event use the same e-commerce platform, which you can select from the [ticket editor settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Ticket-Editor-Settings-Multiple-commerce.jpg).

Next up we recommend that you learn about [managing ticket orders and attendees](https://docs.nexcess.com/software/the-events-calendar/ticket-orders/) as well as reviewing [How Event Tickets are Calculated](https://docs.nexcess.com/software/the-events-calendar/event-tickets-availability/). If you have any further questions please don’t hesitate to connect with the team via our help desk.

See [Common Stock Issues](https://docs.nexcess.com/software/the-events-calendar/ticket-addons/) for help troubleshooting.

Using Seating with Event Tickets

If you are using our Seating add-on, you can enable assigned seating with tickets. The capacity for each ticket will be defined by your event’s Seat Layout and your ticket’s Seat Type. This tool allows your attendees to choose from a visual seat layout when they’re purchasing tickets, so they can pick their perfect spot and have a specific seat assignment for the event. Read more about [using Seating with Event Tickets](https://docs.nexcess.com/software/the-events-calendar/assigned-seating-tickets/).

## Linking to the Tickets Form

Event Tickets Plus has a built-in anchor link so that you can link users directly to the ticket sales form on a single event page. (⚠ **Please Note:** This is only true for tickets being used on the “event” post type—tickets on “posts”, “pages”, and other post types will not have this anchor link at this time.)

The default link to the ticket form is *yoursite.com/[event-slug]/[event-slug]/#buy-tickets*. For example: *yoursite.com/event/rock-concert/#buy-tickets*.

If you’re not sure how to construct the link, go to your event’s page and add *#buy-tickets* to the URL. Then copy the full text of your browser’s URL field, and that’s the link to the tickets form.

## Related Articles

- [Charging Fees with Event Tickets](https://docs.nexcess.com/software/the-events-calendar/event-tickets-fees/)
- [Creating Coupons for Event Tickets](https://docs.nexcess.com/software/the-events-calendar/event-tickets-coupons/)
- [Using Attendee Registration Forms with Event Tickets](https://docs.nexcess.com/software/the-events-calendar/attendee-registration/)
- [Saving Time with Ticket Presets](https://docs.nexcess.com/software/the-events-calendar/ticket-presets/)
- [Creating Waitlists for Event Tickets](https://docs.nexcess.com/software/the-events-calendar/attendee-waitlist/)
- [Sell Event Tickets with Tickets Commerce](https://docs.nexcess.com/software/the-events-calendar/tickets-commerce/)
- [Sell Event Tickets with WooCommerce](https://docs.nexcess.com/software/the-events-calendar/woocommerce-tickets/)
- [Creating Tickets with Assigned Seating](https://docs.nexcess.com/software/the-events-calendar/assigned-seating-tickets/)

---

