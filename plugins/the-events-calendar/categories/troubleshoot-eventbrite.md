# Troubleshoot Eventbrite

*Category from The Events Calendar documentation*

---

## Troubleshooting Eventbrite Tickets

**Source:** [https://docs.nexcess.com/software/the-events-calendar/troubleshoot-eventbrite/](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-eventbrite/)

## “Eventbrite token is not valid” error message

Users may occasionally experience the message error “invalid Eventbrite token” when we are importing events and tickets from our Eventbrite account to our Events Calendar using the Events Aggregator.

The Eventbrite token is used to verify the identity of a user or a system when is connected to other services.

In these cases, we recommend visiting the **Events > Settings > Integrations Tab** section and clicking on the “Refresh your connection to Eventbrite” button.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-25.jpg)

Another thing that could help in some situations is switching the **Import Process System** from “Asynchronous” to “Cron-based” in the **Events > Settings > Imports Tab** section

![](https://docs.nexcess.com/wp-content/uploads/2026/06/ImportProcessSystem.jpg)

However, if the above does not fix it, it could indicate a larger conflict on the site or that something is interfering with the connection.

You can check the Event Aggregator System status page to see if there are any possible issues with our servers, and you can also whitelist the IP address listed [here.](https://theeventscalendar.com/event-aggregator-status/)

If these do not remedy the issue, don’t hesitate to pay us a visit over at [our help desk](https://theeventscalendar.com/support-forums/) if you should have any further questions–we’re more than happy to assist.

---

