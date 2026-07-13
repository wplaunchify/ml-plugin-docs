# Event Tickets Availability

*Category from The Events Calendar documentation*

---

## Understanding How Event Tickets Calculates Availability

**Source:** [https://docs.nexcess.com/software/the-events-calendar/event-tickets-availability/](https://docs.nexcess.com/software/the-events-calendar/event-tickets-availability/)

Ticket availability shows how many units are left for a ticket that’s been created for an event. Event Tickets calculates availability from three different data points: **inventory**, **stock**, and/or **capacity**. These numbers are often the same but may be different, so we determine availability based on the lowest of those numbers. That way, if the data points are not the same, there’s way less chance of overselling your event.

Let’s review what each of these terms refers to:

- **Capacity** is set by the admin when creating a ticket. For Event Tickets Plus users, this may also be a [shared or shared capped quantity](https://docs.nexcess.com/software/the-events-calendar/assigned-seating-tickets/#global-stock).
- **Stock** is the lowest number of tickets provided by the e-commerce provider (e.g. WooCommerce or Easy Digital Downloads) *or* the shared stock if it’s active. Stock may be edited manually via the e-commerce provider.
- **Inventory** is the capacity minus the number of generated attendees for that ticket. Inventory is calculated automatically by Event Tickets.

👋 **Note**: When using [Seating](https://theeventscalendar.com/products/seating/) for Event Tickets to sell tickets with assigned seating, ticket capacity is determined by the associated Seat Layout and Seat Type. [Read more](https://docs.nexcess.com/software/the-events-calendar/assigned-seating-tickets/#h-capacity-and-availability-for-seated-tickets)

### Where is availability displayed?

Your visitors will see availability in the ticket display:

![Event ticket availability on the front-end](https://docs.nexcess.com/wp-content/uploads/2026/06/availability.png)Event ticket availability displays under the price of the ticket

As an admin, you will see the availability in a few places within your site. The first is while you are editing an event in the ticket editor.

![Block Editor view of ticket availability](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-01-04_12-04-24.jpg)Block Editor view of ticket availability

![](https://docs.nexcess.com/wp-content/uploads/2026/06/screenshot_2024-01-04_at_9.34.35___am.jpg)Classic Editor view of ticket availability

The [Ticket Orders](https://docs.nexcess.com/software/the-events-calendar/ticket-orders/) screen also shows the current ticket availability:

![Ticket orders screen that shows how many tickets have been sold and are available for the event](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_16-55-37.jpg)

### The difference between Stock and Availability

Let’s say you want to refund a purchase but keep the attendee or comp a ticket. That attendee is still coming to the event (we assume) but the e-commerce provider automatically restocks the ticket as part of the refund. That’s a safe assumption on the e-commerce provider’s part because it usually deals with products that are re-stocked when returned by the customer. As a result, the stock would be one unit higher than the inventory. In this case, availability would use the inventory because it is the smaller of the two numbers and we want to make sure your event does not accidentally oversell.

Another example is if you manually delete an attendee. Doing so would increase the Inventory for that ticket. And that makes sense: a ticket should not be issued to someone who does not exist. But it would not change the Stock. As far as the e-commerce provider knows, the ticket is still issued and, as a result, the stock would be lower than the inventory, So, we use the stock number as the availability in this instance because it is the lowest of the two and helps prevent overselling your event.

### Stock settings

The way that stock works for tickets will depend on your e-commerce provider and the related settings.

If you’re using [Tickets Commerce](https://docs.nexcess.com/software/the-events-calendar/tickets-commerce/) to take payments for tickets, you can choose when ticket stock is decreased at Tickets → Settings → Payments. From here, you can set a decrease in stock, based upon whether the order is pending or completed.

![Stock handling options under Events Settings > Payments](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-01-20-at-11.37.49-AM.jpg)

👋 **Note**: For events with assigned seats, stock will decrease as soon as a user selects their seats. This helps prevent people from trying to book the same seats simultaneously. If something goes wrong with the purchase, you will need to manually [remove that attendee](https://docs.nexcess.com/software/the-events-calendar/assigned-seating-tickets/#h-removing-a-seat-assignment).

In WooCommerce, stock changes occur when an attendee submits the payment or finalizes the checkout process. WooCommerce users have extra settings under Tickets → Settings → General that could impact inventory and stock. Select your preferred options for when attendee records should be generated and when tickets are sent to customers.

For best results with Event Tickets Plus, be sure to enable WooCommerce Stock Management by going to WooCommerce → Settings → Products→ Inventory → Enable stock management.

![Enable stock management with WooCommerce under WooCommerce > Settings > Products](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-01-20-at-11.39.36-AM.jpg)

### Manually changing stock

You can manually edit ticket stock directly in WooCommerce. Manually adjusting stock is not something we recommend doing often, especially if the ticket uses shared capacity. Doing so opens up the possibility of the overall ticket availability mismatching the individual availability of each ticket. But there are times it makes sense to check the product Stock or manually adjust it. From your ticket editor, select the **Edit Ticket in WooCommerce** option.

![Edit ticket in WooCommerce when using the Block Editor](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_17-31-49.jpg)Block Editor – Edit Ticket in WooCommerce

![Edit ticket in WooCommerce when using the Classic Editor](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_17-07-46.jpg)Classic Editor – Edit Ticket in WooCommerce

Scroll down to Product Data → Inventory. The Quantity field is the product Stock.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/CleanShot-2023-12-27-at-16.59.49@2x.jpg)

We hope this takes away any mystery in how ticket availability is calculated in Event Tickets and Event Tickets Plus. But hey, we know it’s a weird thing to wrap your head around, so head to our [support page](https://support.theeventscalendar.com/submit_ticket) if you still have a question and we’d be happy to help!

---

