# Event Booking

*Category from The Events Calendar documentation*

---

## Adding Appointment Booking to Events

**Source:** [https://docs.nexcess.com/software/the-events-calendar/event-booking/](https://docs.nexcess.com/software/the-events-calendar/event-booking/)

Although [The Events Calendar](https://theeventscalendar.com) does not come with appointment booking capabilities, we have an integration with [Simply Schedule Appointments](https://theeventscalendar.com/products/simply-schedule-appointments/) that makes it super simple to [add WordPress booking functionality](https://simplyscheduleappointments.com/guides/the-events-calendar-setup/) to your event pages.

Let’s take a look at how to make that happen on your WordPress site.

## Basic WordPress booking setup

Once you have both plugins installed and activated on your site, you’ll want to head over to **Appointments > Appointment Types** in the WordPress Dashboard in order to set up a new appointment type.

![Appointments > Appointment Types in the WordPress Dashboard.](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-11-12-at-2.37.23-PM.jpg)

From there, simply click **Add New** to create a new type of appointment, which you’ll eventually add to your event page.

![Appointment Types](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-11-12-at-2.38.43-PM.jpg)

You’ll have lots of options to choose from when it comes to creating your new appointment type. We’d recommend referencing [this guide](https://simplyscheduleappointments.com/guides/appointment-type-settings/) from Simply Schedule Appointments for further information on these options.

![Appointment type options with Simply Schedule Appointments](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-11-12-at-2.53.26-PM.jpg)

Now that you’re ready with your new appointment type, you can use the shortcode 
```
[tec_ssa_booking type="slug-here"]
```

to display your booking options on the front end.

To do that, locate your event page and add the shortcode where you’d like it to display on the page. Just make sure you use the slug found under **Appointment Types** so that you show the right one!

In the end, you’ll have something like this:

![Booking appointment](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-11-12-at-2.05.46-PM.jpg)

For more information on setting up one-off events with Simply Schedule Appointments, check out [this guide](https://simplyscheduleappointments.com/guides/single-event-set-up/).

You can even add Simply Schedule Appointments as an Alexa skill. Learn more [here](https://convoworks.com/appointment-scheduling-on-your-wordpress-website-now-with-amazon-alexa-skill/).

---

