# Zapier Endpoints

*Category from The Events Calendar documentation*

---

## Managing Your Zapier Endpoints

**Source:** [https://docs.nexcess.com/software/the-events-calendar/zapier-endpoints/](https://docs.nexcess.com/software/the-events-calendar/zapier-endpoints/)

Do you have a lot of zaps going on?

If so, you will probably want to monitor access to your Zapier endpoints (aka triggers and actions). And, in the unlikely event that something goes wrong, wouldn’t it be nice to be able to clear an endpoint’s queue or disable that endpoint altogether?

No worries, we’ve got you covered, thanks to the Zapier Endpoint Dashboard.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Zapier-endpoint-dashboard-1.jpg)

### How to get there

1. Head over to Events > Settings > Integrations
2. Scroll down until you see the Zapier Endpoint Dashboard

### How it works

The Dashboard showcases all existing endpoints for The Events Calendar and Event Tickets Zapier Apps. Each endpoint corresponds to the name of a trigger or action in Zapier for The Events Calendar or Event Tickets, as you can see in the screenshot above.

For each of those endpoints, you get:

- **Name:** The name of the endpoint.
- **Last Access:** The app that most recently accessed the endpoint, along with the date and time.
- **Queue:** There are two possible values here:
- *None:* Indicates an empty queue.
- *Ready:* Implies there are records in the queue, awaiting consumption by Zaps.
- **Actions:**
- *Clear Queue:* As the name suggests, wipes the queue for that endpoint clean so that it’s all nice and empty.
- *Disable/Enable:* It allows you to enable or disable a specific endpoint (e.g. to prevent misuse/access to an endpoint that you are not using or as a makeshift “panic button”)

#### ‘Always Available queue’

Our Zapier integration now features an ‘always available’ queue system. This enhancement ensures that data remains in the queue, ready to be consumed by webhooks.

This approach is particularly beneficial if you have multiple Zaps triggered by the same action on TEC. All Zaps can efficiently hit the endpoint and access the correct data while it’s readily available in the queue.

By default, the queue holds up to 15 items. This number can be increased if there is a strong reason to do so, but you have to be careful to avoid performance issues.

To adjust the queue capacity for all Zapier endpoints, utilize the following filter:**tec_event_automator_zapier_max_queue_items**

Like this:

```
add_filter( 'tec_event_automator_zapier_max_queue_items', function($max_items) { return 20; }, 10, 1 );
```

For targeting specific endpoints, apply the filter with the relevant endpoint appended. **tec_event_automator_zapier_max_queue_items_{endpoint}**

You can substitute {endpoint} with any of the following options:

- attendees
- canceled_events
- checkin
- new_events
- orders
- refunded_orders
- updated_attendees
- updated_events

Here is an example for the attendees endpoint:

```
add_filter( 'tec_event_automator_zapier_max_queue_items_attendees', function($max_items) { return 20; }, 10, 1 );
```

---

