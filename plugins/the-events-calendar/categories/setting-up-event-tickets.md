# Setting Up Event Tickets

*Category from The Events Calendar documentation*

---

## Setting up Event Tickets

**Source:** [https://docs.nexcess.com/software/the-events-calendar/setting-up-event-tickets/](https://docs.nexcess.com/software/the-events-calendar/setting-up-event-tickets/)

Event Tickets lets you sell tickets and collect RSVPs on any WordPress post, page, or event. This guide takes you from install to your first published ticket. Each step links to a detailed article.

## Before You Start

- **Event Tickets** is free and includes Tickets Commerce, which supports PayPal, Stripe, and Square.
- **Event Tickets Plus** adds attendee registration forms, Apple Wallet and PDF tickets, QR check-in, and WooCommerce ticketing. It also removes the 2% commission Event Tickets charges on Stripe and Square sales.
- **The Events Calendar** is optional. Install it if you want tickets attached to calendar events.

## 1. Install Your Plugins

[Install Event Tickets](https://docs.nexcess.com/software/the-events-calendar/downloading-and-installing-the-plugin/). If you have Event Tickets Plus, install and activate it as well. Add The Events Calendar if you want calendar events.

If you bought through Nexcess, your products are managed under **Settings → Nexcess Licensing**. Otherwise, see [Finding and Inputting Your License Key](https://docs.nexcess.com/software/the-events-calendar/finding-and-inputting-your-license-key/).

## 2. Configure Event Tickets Settings

Go to **Tickets → Settings**. Choose which post types can have tickets, set any login requirements, and configure your ticket emails. See [Configuring Event Tickets Settings](https://docs.nexcess.com/software/the-events-calendar/event-tickets-settings/).

## 3. Choose How You’ll Get Paid

### Tickets Commerce (Event Tickets)

1. Go to **Tickets → Settings → Payments** and connect PayPal, Stripe, or Square.
2. Create Checkout and Success pages using the 
```
[tec_tickets_checkout]
```

 and 
```
[tec_tickets_success]
```

 shortcodes, then assign them in the same settings screen.
3. Leave test mode on until you’ve [tested a purchase](https://docs.nexcess.com/software/the-events-calendar/test-purchases/).

See [Sell Event Tickets with Tickets Commerce](https://docs.nexcess.com/software/the-events-calendar/tickets-commerce/).

### WooCommerce (Event Tickets Plus)

Install and configure WooCommerce first, then follow [Sell Event Tickets with WooCommerce](https://docs.nexcess.com/software/the-events-calendar/woocommerce-tickets/). Choose this if you need offline payment methods, VAT or tax handling, or inventory management.

## 4. Create Your First Ticket or RSVP

Edit an event, post, or page, then add a ticket. See [Creating Event Tickets](https://docs.nexcess.com/software/the-events-calendar/create-tickets/). For free events, use [RSVPs](https://docs.nexcess.com/software/the-events-calendar/event-rsvps/).

## 5. Add Optional Features

- [Attendee registration forms](https://docs.nexcess.com/software/the-events-calendar/attendee-registration/) (Event Tickets Plus)
- [Assigned seating](https://docs.nexcess.com/software/the-events-calendar/getting-started-with-seating/)
- [Coupons](https://docs.nexcess.com/software/the-events-calendar/event-tickets-coupons/) and [fees](https://docs.nexcess.com/software/the-events-calendar/event-tickets-fees/)
- [Digital wallets and PDF tickets](https://docs.nexcess.com/software/the-events-calendar/wallets-tickets/) (Event Tickets Plus)
- [QR check-in with the Event Tickets Plus app](https://docs.nexcess.com/software/the-events-calendar/ticket-qr-codes/)

## 6. Manage Sales

Learn to [manage orders](https://docs.nexcess.com/software/the-events-calendar/ticket-orders/), [manage attendees](https://docs.nexcess.com/software/the-events-calendar/event-attendees/), and [issue refunds](https://docs.nexcess.com/software/the-events-calendar/ticket-refunds/).

## Need Help?

See [Troubleshooting Event Tickets](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-event-tickets/) or [Troubleshooting Payments and Checkout with Tickets Commerce](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-tickets-purchases/). Event Tickets users can also post in the [WordPress.org support forum](https://wordpress.org/support/plugin/event-tickets/).

---

