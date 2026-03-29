# Events

*Category from WP Fusion documentation*

---

## WP Travel Engine

**Source:** [https://wpfusion.com/documentation/events/wp-travel-engine/](https://wpfusion.com/documentation/events/wp-travel-engine/)

### Overview

WP Fusion integrates with WP Travel Engine to allow you to add event attendees as contacts to your CRM of choice when they book a tour or activity. You can also optionally apply CRM tags based on the event the person registered for.

### Syncing contacts and custom fields

By default WP Fusion will sync each new event registration to your CRM as a contact, with the person’s name and email address provided at registration. If a contact already exists with the same email address they will be updated.

#### Syncing booking fields

WP Fusion also makes available some fields related to the booking for syncing to your CRM. These can also be found in the Contact Fields list in the WP Fusion settings.

If any of these fields are enabled then WP Fusion will load the values from the event in WordPress and sync it along with the registration data to your CRM. You can then merge the values into emails, or use them in automations (for example to send a reminder a day before an event).

### Applying tags

You can configure tags to be applied in your CRM on a per-trip basis by using the WP Fusion meta box when editing any trip.

---

## BookingPress

**Source:** [https://wpfusion.com/documentation/events/bookingpress/](https://wpfusion.com/documentation/events/bookingpress/)

### Overview

WP Fusion includes an integration with BookingPress to sync event and appointment bookings to any one of 50+ supported CRMs and marketing automation platforms, and apply tags and lists based on booked services and events.

You can use this data to create segments in your marketing lists or to trigger automations to follow up with customers before and after their appointment time.

### Syncing bookings

To create (and update) contacts in your CRM whenever someone makes a booking in BookingPress, enable the WP Fusion integration from BookingPress » Settings » Opt-Ins » WP Fusion.

For each field in your CRM, select a corresponding field in BookingPress to enable the field for sync.

You can also optionally apply tags and/or lists (if supported) in your CRM to everyone who makes a booking.

### Tagging customers

You can also configure tags when editing any BookingPress service. Select one or more tags (or lists) under the WP Fusion Integration header.

If you have configured tags on a service and have not enabled WP Fusion in the Opt-Ins settings, then contacts will only be created in your CRM for people who book that specific service, as opposed to all bookings.

### Custom fields

WP Fusion makes several BookingPress fields available for sync from the Contact Fields tab in the WP Fusion settings.

The fields are:

- Appointment Date / Time: The date and time of the customer’s booking.
- Appointment Status: Either Approved, Pending, Cancelled, Rejected, No-Show, or Completed
- Payment Status: Either Paid, Pending, Refunded, Partially Paid, or Partially Refunded
- Appointment Amount: The total amount paid
- Appointment Note: Any notes provided by the customer
- Service Name: The name of the booked service
- Service Duration: The duration of the service
- Service Price: The price of the booked service
- Service Category: The service category

For each, select a corresponding custom field in your connected CRM to enable it for sync.

When an appointment or event is booked any enabled fields will be synced to the customer’s contact record in your CRM.

---

## LatePoint

**Source:** [https://wpfusion.com/documentation/events/latepoint/](https://wpfusion.com/documentation/events/latepoint/)

### Overview

WP Fusion includes an integration with LatePoint to sync appointment bookings to any one of 50+ supported CRMs and marketing automation platforms, and apply tags based on booked services.

You can use this data to create segments in your marketing lists, or to trigger automations to follow up with customers before and after their appointment time.

### Syncing bookings and custom fields

WP Fusion makes several LatePoint fields available for sync from the Contact Fields tab in the WP Fusion settings.

The fields include the booking details (like start and end date, duration, and price), the booked service, and agent details.

If you are using the Custom Fields addon, any custom fields will also be listed.

For each field, select a corresponding custom field in your connected CRM to enable it for sync.

When an appointment is booked any enabled fields will be synced to the customer’s contact record in your CRM.

### Tagging customers

WP Fusion provides a few tagging options for Latepoint. These can be found at the bottom of the settings list when editing any individual service.

The options are:

- Apply Tags – Booked: These tags will be applied in your CRM when someone books the service.
- Apply Tags – Cancelled: These tags will be applied when someone cancels their booking to the service.
- Apply Tags – Completed: These tags will be applied when a booking to the service is marked completed.

---

## Amelia

**Source:** [https://wpfusion.com/documentation/events/amelia/](https://wpfusion.com/documentation/events/amelia/)

### Overview

WP Fusion includes an integration with Amelia to sync event and appointment bookings to any one of 50+ supported CRMs and marketing automation platforms, and apply tags based on booked services and events.

You can use this data to create segments in your marketing lists or to trigger automations to follow up with customers before and after their appointment time.

### Syncing bookings and custom fields

WP Fusion makes several Amelia fields available for sync from the Contact Fields tab in the WP Fusion settings.

The fields are:

- Service Name: The service the customer booked. Will be updated with each booking.
- Appointment Date / Time: The date and time of the customer’s booking.
- Event Name: The name of the event the customer registered for.
- Event Date / Time: The start date and time of the event.
- Any custom fields created in Amelia.

For each, select a corresponding custom field in your connected CRM to enable it for sync.

When an appointment or event is booked any enabled fields will be synced to the customer’s contact record in your CRM.

### Tagging customers

WP Fusion provides a few general settings for Amelia. These can be found at Amelia » WP Fusion in your WordPress admin.

WP Fusion’s Amelia integration allows you to apply tags in your CRM when customers book appointments or register for events.
The options are:

- Sync Guests: This setting is enabled by default— anyone who makes an appointment booking via Amelia will have a contact record created (or updated) in your CRM. You can disable Sync Guests if you only want to sync the appointment details for registered users.
- Apply Tags for Services: For each service, you can select one or more tags to apply in your CRM when that service is booked.
- Apply Tags for Events: For each event, you can select one or more tags to apply in your CRM when an attendee registers for that event.

---

## FluentBooking

**Source:** [https://wpfusion.com/documentation/events/fluentbooking/](https://wpfusion.com/documentation/events/fluentbooking/)

### Overview

WP Fusion integrates with FluentBooking to allow you to sync bookings to contact records in any one of 50+ CRMs and email marketing platforms.

You can also apply tags or lists in your CRM based on the booking form that was used, as well as when bookings are created, completed, and canceled.

### Syncing booking details

After creating a booking type in FluentBooking, click on the Integrations tab, and choose WP Fusion from the Add New Integration dropdown.

WP Fusion’s FluentBooking integration allows you to sync booking details with any one of 50+ CRMs and email marketing tools.
Under the Map Primary Fields section will be the required fields in your CRM (in most cases just Email Address). For each required field, select the corresponding field on your booking form from the dropdown at the right.

Under Other Fields you can optionally map custom fields on your booking form with fields in your CRM, as well as additional metadata like the event name, calendar name, event start and end time, and meeting URL.

For Tags, type in one or more tags in your CRM, followed by commas.

If your CRM supports Lists in addition to tags, you will see an option to select lists to add contacts to when they make a booking.

For the Event Trigger select which events should trigger the feed. You can create multiple feeds which apply different tags depending on the trigger— for example apply one tag when a booking is created, and another when it’s cancelled.

You can create multiple WP Fusion feeds to handle different booking statuses.
That’s it! When someone makes a booking, a contact record will be created (or updated) in your CRM, and any specified tags or lists will be applied.

---

## YITH WooCommerce Booking

**Source:** [https://wpfusion.com/documentation/events/yith-woocommerce-booking/](https://wpfusion.com/documentation/events/yith-woocommerce-booking/)

### Overview

WP Fusion includes an integration with YITH WooCommerce Booking that allows you to sync a customer’s booking date to a custom field in your CRM.

You can then use this to send emails and other automated engagements before and after a customer’s booking date.

### Setup

Setup is straightforward, when YITH WooCommerce Booking is active, the fields Booking Start Date and Booking End Date will appear for sync on the Contact Fields tab in the WP Fusion settings.

When either field is enabled for sync, the customer’s booking date (and time) will be synced to the selected custom field in your CRM after checkout.

For applying tags based on the purchased product and other settings, see the WooCommerce integration documentation.

---

## WP Booking System

**Source:** [https://wpfusion.com/documentation/events/wp-booking-system/](https://wpfusion.com/documentation/events/wp-booking-system/)

### Overview

WP Fusion integrates with WP Booking System to allow you sync event bookings to contact records in your CRM of choice.

You can also apply CRM tags and lists based on the booking form used.

WP Fusion supports both the free and premium versions of the plugin.

### Syncing bookings

First create a calendar and a booking form, and add some fields to the form. Then navigate to Form Options » WP Fusion.

For each field on your form, select a corresponding custom field in your CRM. You can optionally select one or more tags (or lists) to be applied when the form is submitted.

### How it works

When the booking form is submitted, WP Fusion will sync the form entry to a contact record in your CRM. If a contact already exists with the same email address, it will be updated. If no contact exists, a new contact record will be created. The contact will be tagged with any tags you’ve selected on the form configuration.

---

## Simply Schedule Appointments

**Source:** [https://wpfusion.com/documentation/events/simply-schedule-appointments/](https://wpfusion.com/documentation/events/simply-schedule-appointments/)

### Overview

WP Fusion includes an integration with Simply Schedule Appointments to sync appointment bookings to any one of 50+ supported CRMs and marketing automation platforms, and apply tags based on appointment status.

You can use this data to create segments in your marketing lists, or to trigger automations to follow up with customers before and after their appointment time.

### Syncing bookings and custom fields

WP Fusion makes several Simply Schedule fields available for sync from the Contact Fields tab in the WP Fusion settings.

For each, select a corresponding custom field in your connected CRM to enable it for sync.

When an appointment is booked (or an appointment status is changed) any enabled fields will be synced to the customer’s contact record in your CRM.

### Tagging customers

WP Fusion provides a few general settings for Simply Schedule Appointments. These can be found at Settings » WP Fusion » Integrations » Simply Schedule Appointments Integration.

The options are:

- Sync Guests: This setting is enabled by default— anyone who makes an appointment booking via Simply Schedule Appointments will have a contact record created (or updated) in your CRM. You can disable Sync Guests if you only want to sync the appointment details for registered users.
- Apply Tags – Bookings: These tags will be applied in your CRM when someone books an appointment.
- Apply Tags – Rescheduled: These tags will be applied in your CRM when someone reschedules an appointment.
- Apply Tags – Cancelled: These tags will be applied in your CRM when someone cancels an appointment.

---

## EventON

**Source:** [https://wpfusion.com/documentation/events/eventon/](https://wpfusion.com/documentation/events/eventon/)

### Overview

WP Fusion integrates with EventON to allow you to add event attendees as contacts to your CRM of choice when they purchase a ticket using the Event Tickets addon.

You can also sync event details to custom fields in your CRM, and apply CRM tags based on the event ticket purchased (via the WooCommerce integration).

### Syncing custom fields

WP Fusion registers a few EventON custom fields for sync. These can be found on the Contact Fields tab in the WP Fusion settings.

When someone registers for an event, any enabled fields will be synced to the corresponding custom fields on their contact record in your CRM.

The available fields are:

- Event Name: The name of the event the person registered for.
- Event Start Date: The start date of the event.
- Event Start Time: The start time of the event.
- Event End Date: The end date of the event.
- Event End Time: The end time of the event.
- Event Check-in: This field will be synced as true (i.e. to update a checkbox field) when an attendee is checked in to an event.
- Event Check-in Event Name: This field will sync the event name of the event the attendee was checked in to.

### Tagging contacts

Because the Event Tickets addon uses WooCommerce to sell tickets, these settings are configured via WP Fusion’s WooCommerce integration.

After creating your EventON ticketed event, head to WooCommerce » Products in the WordPress admin, and click Edit on the corresponding ticket product.

In the WP Fusion tab of the WooCommerce settings metabox you can configure tags to apply in your CRM when a ticket is purchased for that event. For more information, see the WooCommerce documentation.

In the EventON section of the WooCommerce panel there are two options:

- Add attendees: By default only the customer who purchased the ticket will be synced to your CRM. Enable this setting to sync each event attendee to your CRM as a separate contact record. Note that you must enable Additional Guest Checkout fields from Settings » EventON » Tickets.
- Apply tags to event attendees: Used with the Add attendees option, this allows you to select tags to apply to each event attendee.

---

## Tickera

**Source:** [https://wpfusion.com/documentation/events/tickera/](https://wpfusion.com/documentation/events/tickera/)

### Overview

WP Fusion integrates with the Tickera event ticketing system to allow you to sync event attendees to your CRM of choice when they purchase a ticket.

You can also optionally apply CRM tags based on the ticket that was purchased, and apply tags when an attendee is checked in to an event.

### Adding contacts

By default WP Fusion will sync any event registrations to your CRM as contact records, with the name and email address provided at registration.

If a contact already exists with the same email address they will be updated.

### Syncing custom fields

WP Fusion makes a few Tickera custom fields available for sync with your CRM. These can be found on the Contact Fields tab in the WP Fusion settings.

When someone purchases a ticket, any enabled fields will be synced to the corresponding custom fields on their contact record in your CRM.

The available fields are:

- Event Name: The name of the event the person registered for
- Event Location: The name of the event location
- Event Start Date and Time: The start date and time of the event
- Event End Date and Time: The end date and time of the event
- Ticket Name: The name of the ticket that was purchased
- Event Time: The start time of the event
- Ticket Checkin Availability From Date: The start date and time of the ticket checkin window
- Ticket Checkin Availability To Date: The end date and time of the ticket checkin window

### Tagging contacts

WP Fusion adds a meta box to the bottom of any Ticket post type. Here you can specify tags to be applied in your CRM when someone registers for that event.

There are two settings:

- The tags specified for Apply Tags will be applied in your CRM when someone purchases the ticket.
- The tags specified for Apply Tags – Checked In will be applied to the ticket buyer when they are checked in to the event.

---

## WooCommerce Bookings

**Source:** [https://wpfusion.com/documentation/events/woocommerce-bookings/](https://wpfusion.com/documentation/events/woocommerce-bookings/)

### Overview

WP Fusion includes a basic integration with WooCommerce Bookings that allows you to sync a customer’s booking date and time to a custom field in your CRM.

You can then use this to send emails and other automated engagements before and after a customer’s booking date.

### Setup

Setup is straightforward, when WooCommerce Bookings is active, a Booking Date field will appear for sync on the Contact Fields tab in the WP Fusion settings.

When this field is enabled for sync, the customer’s booking date and time will be synced to the selected custom field in your CRM after checkout.

For applying tags based on the purchased product and other settings, see the WooCommerce integration documentation.

---

## Modern Events Calendar

**Source:** [https://wpfusion.com/documentation/events/modern-events-calendar/](https://wpfusion.com/documentation/events/modern-events-calendar/)

### Overview

WP Fusion includes an integration with Modern Events Calendar to sync event attendees with any one of 50+ supported CRMs and marketing automation systems, as well as apply tags based on bookings, RSVPs, and event check-ins.

### Ticket Setup

When editing any ticket in Modern Events Calendar, you’ll see two options added by WP Fusion. Note that if you’ve just created a new ticket you’ll need to save the event before the settings appear.

The settings are:

- Apply Tags: These tags will be applied in your CRM when someone purchases the ticket.
- Add Attendees: By default WP Fusion will just sync the first attendee to your CRM at checkout. Check this box to create a contact record and apply the selected tags for every attendee.

#### RSVPs

If you’re using the RSVP addon for Modern Events Calendar, you will see a WP Fusion settings tab in the RSVP configuration metabox.

Here you can select tags to apply to people who RSVP for events. You can also optionally choose to sync each RSVP to a separate contact record in your CRM.

#### Event Check-ins

The Ticket and Invoice Addon for Modern Events Calendar allows attendees to be checked into events, either via a QR code or by an admin.

When this addon is active you will see an additional setting on the ticket form for Apply Tags – Check In

Any tags selected here will be applied in your CRM when an attendee is checked in to the event.

In addition to applying tags, you also have the option to update custom fields in your CRM when someone is checked in to an event.

The two fields are:

- Event Check-in: This is a true / false field that will be updated when someone is checked in to an event. It can populate a checkbox in your CRM.
- Event Check-in – Event Name: This field will sync the name of the event when anyone is checked in to an event

### Syncing Event Details

WP Fusion adds a few pseudo-fields related to the event, which can be synced to the contact record of the event attendee in your CRM. These can be enabled at Settings » WP Fusion » Contact Fields.

When someone registers for an event, the enabled fields will be synced to the corresponding custom fields in your CRM.

#### Zoom

If you’re using the Zoom Integration addon for Modern Events Calendar, WP Fusion allows you to sync the Zoom meeting details with custom fields in your CRM.

The available fields are:

- Zoom Meeting ID: The ID of the Zoom meeting.
- Zoom Meeting URL: The URL to join the Zoom meeting.
- Zoom Meeting Password: The password to join the Zoom meeting (if applicable).

Any enabled fields will be synced to your CRM when a new booking is made to an event.

---

## WooCommerce Appointments (BookingWP)

**Source:** [https://wpfusion.com/documentation/events/woocommerce-appointments/](https://wpfusion.com/documentation/events/woocommerce-appointments/)

### Overview

WP Fusion integrates with the WooCommerce Appointments extension by BookingWP to apply tags in your CRM based on changes to a customer’s appointment status.

This functionality is in addition to the WooCommerce integration.

### Product Setup

When editing any Appointable product in WooCommerce, additional tagging options will appear on the WP Fusion settings panel.

The settings in the top section come from WP Fusion’s WooCommerce integration, and relate to the purchase of the product. The settings in the lower section relate to the status of the appointment.

### How it works

When a customer’s appointment status is changed, the tags specified for the appointment status will be applied to the customer’s contact record your CRM.

If no contact record exists yet (for example because the order is still Pending Payment), WP Fusion will automatically create a contact record before trying to apply any tags.

### Syncing appointment fields

WP Fusion supports syncing the date and time of a customer’s appointment to a custom field on their contact record in your CRM.

To enable this head to Settings » WP Fusion » Contact Fields, and enable the Appointment Date field under the WooCommerce Appointments header by selecting a corresponding custom field in your CRM.

When an appointment is made, the appointment date and time will be synced, and you can then use this data in your campaigns and automations (for example to send a reminder email or followup email).

---

## Events Manager

**Source:** [https://wpfusion.com/documentation/events/events-manager/](https://wpfusion.com/documentation/events/events-manager/)

### Overview

WP Fusion integrates with Events Manager to allow you to add event attendees as contacts to your CRM of choice when they register for an event. You can also optionally apply CRM tags based on the event the person registered for.

### Adding contacts

By default WP Fusion will sync any event registrations to your CRM as contacts, with the name and email address provided at registration. If a contact already exists with the same email address they will be updated.

### Syncing custom fields

WP Fusion registers a few Events Manager custom fields for sync. These can be found on the Contact Fields tab in the WP Fusion settings.

When someone registers for an event, any enabled fields will be synced to the corresponding custom fields on their contact record in your CRM.

The available fields are:

- Event Name: The name of the event the person registered for
- Event Date: The date of the event
- Event Time: The start time of the event
- Event Location Name: The name of the event location
- Event Location Address: The full address of the event location

WP Fusion will also detect any custom fields on your booking forms, and these will show up in the Contact Fields list, where they can be mapped to custom fields in your CRM.

### Tagging attendees

WP Fusion adds a meta box to the bottom of any Event post type. Here you can specify tags to be applied in your CRM when someone registers for that event.

There are four options here:

- Apply Tags: These tags will be applied in your CRM when someone registers for the event, regardless of their approval status.
- Remove Tags: If this box is checked, the tags specified in Apply Tags will be automatically removed if a booking is cancelled, rejected, or deleted.
- Apply Tags – Approved: These tags will be applied to the attendee when a booking is approved by an admin, or if a booking is automatically approved as a part of registration.
- Apply Tags – Cancelled: These tags will be applied to the attendee when their booking is cancelled, rejected, or deleted.

### Exporting registrations

WP Fusion includes a batch export tool for Events Manager that can retroactively sync event bookings to your CRM from before you installed WP Fusion.

This can be found at Settings » WP Fusion » Advanced » Batch Operations.

Select the Events Manager bookings option and click the Create Background Task button to start the export.

WP Fusion will go through every event booking in Events Manager and create/update contact records in your CRM for each event attendee, as well as sync any enabled custom fields. Any tags configured on the corresponding events will also be applied.

---

## WP Event Manager

**Source:** [https://wpfusion.com/documentation/events/wp-event-manager/](https://wpfusion.com/documentation/events/wp-event-manager/)

### Overview

WP Fusion integrates with WP Event Manager to allow you to add event attendees as contacts to your CRM of choice when they register for an event. You can also optionally apply CRM tags based on the event the person registered for.

WP Fusion’s integration is designed to work with the Registrations Addon for WP Event Manager. It also supports the Sell Tickets Addon.

### Syncing contacts and custom fields

By default WP Fusion will sync each new event registration to your CRM as a contact, with the buyer’s name and email address provided at registration. If a contact already exists with the same email address they will be updated.

#### Custom registration fields

If you’ve created custom registration fields, these will appear under the WP Event Manager section in the Contact Fields tab of the WP Fusion settings.

For each custom field you can specify a corresponding custom field in your CRM where the data should be synced.

#### Syncing event fields

WP Fusion also makes available some fields related to the event for syncing to your CRM. These can also be found in the Contact Fields list in the WP Fusion settings.

If any of these fields are enabled then WP Fusion will load the values from the event in WordPress and sync it along with the registration data to your CRM. You can then merge the values into emails, or use them in automations (for example to send a reminder a day before an event).

### Applying tags

If the Registrations Addon is active, WP Fusion adds a meta box to the bottom of any Event post type. Here you can specify tags to be applied in your CRM when someone registers for that event.

If you are using the Sell Tickets Addon, you can also configure tags on the associated WooCommerce product.

In this case the tags configured on the product will be applied to the customer (the person who pays for the tickets), and the tags configured on the event will be applied to each event attendee.

---

## Salon Booking

**Source:** [https://wpfusion.com/documentation/events/salon-booking/](https://wpfusion.com/documentation/events/salon-booking/)

### Overview

WP Fusion integrates with Salon Booking to add customers to your CRM of choice when they make a reservation, and apply tags based on the services booked.

#### Customer Data

With WP Fusion active all new customers will have their name and email address synced to your CRM when they make a new booking.

You can also optionally sync their address and phone number to custom fields by enabling these fields for sync under the Salon Booking header in the WP Fusion settings.

#### Applying Tags

When editing any Salon Booking service or assistant, you’ll see a meta box where you can specify tags to be applied in your CRM when a booking is made for that service or assistant.

---

## FooEvents

**Source:** [https://wpfusion.com/documentation/events/fooevents/](https://wpfusion.com/documentation/events/fooevents/)

### Overview

WP Fusion integrates with FooEvents to allow you to add event attendees as contacts to your CRM of choice.

You can also apply tags based on the event ticket purchased, and sync event details to custom fields in your CRM, such as Event Date, Venue, and Booking Time.

### Applying tags to customers

WP Fusion allows you to apply tags in your CRM when someone purchases an event, including support for variable event products.

Because FooEvents is based on WooCommerce, please see our WooCommerce documentation for all the options regarding applying tags to customers and syncing customer data with FooEvents.

### Syncing customer and attendee details

By default WP Fusion will add the person who purchases the tickets to your CRM (via the WooCommerce integration).

To add event attendees as separate contacts, navigate to the WP Fusion tab in the WooCommerce product and check the box for Add attendees.

You can also specify tags to be applied just to event attendees.

If an order is later refunded, any tags applied to the event attendees at checkout will be automatically removed.

With variable products, tags for event attendees can be configured when editing each individual variation.
With variable products, tags for event attendees can be configured when editing each individual variation.

#### Syncing attendee meta

If you have enabled Add attendees in the WP Fusion settings, and you have enabled Capture attendee full name and email address? in the FooEvents settings for the event, WP Fusion can sync each of your event attendees to separate contact records in your CRM.

To enable this, enable at least the Attendee Email Address field for sync from the Contact Fields list in the WP Fusion settings.

You can optionally enable additional attendee fields for sync.

If you are using the Custom Attendee Fields addon, any custom fields you’ve added to the checkout will also appear alongside the other attendee fields, and can be enabled for sync by selecting a custom field in your CRM.

#### Syncing event details

WP Fusion also lets you sync the event date, time, and venue name from your events to the customer’s contact record in your CRM, so this data can be merged into emails.

The available fields are:

- Event Name: The name of the event.
- Event Start Date: The start date of the event.
- Event Start Time: The start time of the event.
- Event Venue Name: The name of the event venue.
- Zoom Meeting ID: If your event is a Zoom event, this will sync the Zoom meeting ID.
- Zoom Join URL: If your event is a Zoom event, this will sync the URL to join the Zoom meeting.
- Event Check-in: This field will be updated when an attendee is checked in to an event. The possible values are: Not Checked In, Checked In, Cancelled, and Unpaid.
- Event Check-in Event Name: This field will sync the event name of the event the attendee was checked in to.

If Add attendees is enabled, the event custom fields will also be synced to each attendee’s contact record as well.

#### Bookings

If the FooEvents Bookings extension is active, you will also see two addition fields under the FooEvents header in the Contact Fields list, Booking Date and Booking Time.

When someone makes a booking via a bookable event, their selected date and time will be synced to the corresponding custom fields in your CRM.

You can then use this data in automations in your CRM to send pre-event and/or followup reminder emails and SMSs to your event attendees.

#### Event check-ins

FooEvents allows you to check in attendees to an event by editing the Ticket Status field on a ticket.

To track event attendance you can enable the event_checkin field for sync from the WP Fusion contact fields list.

When the check-in status is updated on a ticket, the status will be synced to the selected custom field in your CRM. The possible values are: Not Checked In, Checked In, Cancelled, and Unpaid.

#### Zoom

WP Fusion allows you to sync the Zoom meeting ID and join URL to custom fields in your CRM when an attendee registers for a Zoom event. You can enable the fields Zoom Meeting ID and Zoom Join URL from the FooEvents section of the Contact Fields settings.

When an attendee buys a ticket or registers for an event that includes a Zoom meeting, the corresponding custom fields will be updated in your CRM.

### Exporting tickets

If you already have an existing FooEvents store, you can use WP Fusion to sync all historical tickets to your CRM.

First configure your event products with any tags you’d like to be applied at registration, and enable any fields for sync. Then navigate to Settings » WP Fusion » Advanced and scroll down to the Batch Operations section.

Select “FooEvents tickets” from the list of options, and click Create Background Task.

WP Fusion will go through all of your tickets (from oldest to newest), adding or updating contacts in your CRM, and tagging them based on the event. A status bar will appear at the top of the page indicating the progress.

By default, WP Fusion will only export tickets that weren’t already successfully processed by WP Fusion.

If you un-check Skip already processed orders, WP Fusion will export all of the tickets on your site, regardless of whether they’ve already been synced.

---

## Event Espresso

**Source:** [https://wpfusion.com/documentation/events/event-espresso/](https://wpfusion.com/documentation/events/event-espresso/)

### Overview

WP Fusion integrates with Event Espresso to allow you to add contacts to your CRM of choice when they register for an event. You can also optionally apply tags based on the ticket used at registration.

### Syncing contact records

To sync new event registrations to your CRM, head to Settings » WP Fusion and scroll down to the Event Espresso section on the Contact Fields tab.

For each Event Espresso field you can select a corresponding field in your CRM in which to store the data.

WP Fusion will detect any custom questions on your registration forms, and these can be synced to custom fields in your CRM as well.

If there are multiple attendees entered on the same registration form, these will be added as separate contacts.

#### Event Fields

In addition to the attendee fields, WP Fusion can sync several “pseudo” fields related to the event and venue to the attendee’s contact record in your CRM.

This data can then be used in your CRM to create segments of your event attendees, trigger automations, or be merged into followup emails.

Those fields are:

- Event Name
- Event Start Date
- Event Start Time
- Venue Name
- Venue Address
- Venue City
- Venue State
- Venue Country
- Venue Postal Code

#### Other fields

WP Fusion can sync the purchased ticket name to a custom field in your CRM, by enabling the Ticket Name field. This can be used to create segments of attendees based on the name of the purchased ticket.

By enabling the Registration Status field, WP Fusion will sync the attendee’s registration status to your CRM when the registration is created, and each time the registration status is updated. This can be used to trigger automations based on the status of someone’s registration, for example Wait List or Approved.

### Ticket Settings

WP Fusion includes a few options for applying CRM tags to your Event Espresso registrants and attendees. These can be accessed by clicking the Advanced Settings button (the gear icon) on any Event Espresso ticket.

**Note:** WP Fusion is not currently compatible with the Event Espresso Advanced Editor. To access the WP Fusion ticket settings, you will need to make sure Legacy Editor is selected under Events » Default Settings.

#### Multiple Attendees

By default WP Fusion will sync just the customer who purchased the ticket to your CRM. To sync each event attendee as a separate contact, enable the checkbox for Add Attendees.

Each event attendee will be synced to your CRM with the details provided for that attendee at checkout, and any tags specified on the ticket settings will be applied to the event attendees as well as the person who purchased the tickets.

#### Registration tagging

The ticket settings panel also includes options for applying tags in your CRM based on the status of an event registration.

There are two settings:

- Apply Tags – Pending: These tags will be applied to the attendee after they’ve submitted their details but before a payment has been made.
- Apply Tags – Approved: These tags will be applied when a payment has been received or an attendee is manually approved.

#### Event check-ins

WP Fusion can also detect when an attendee is checked in our checked out of an event in Event Espresso, and apply tags in your CRM. This setting is found on with the other WP Fusion settings when editing an event ticket.

When you manually mark an event attendee as checked-in or checked-out of an event, these tags will be applied to that attendee’s contact record in your CRM.

### General Settings

WP Fusion includes some general settings for Event Espresso. These can be found at Settings » WP Fusion » Integrations » Event Espresso.

For each registration status you can select tags to be applied in your CRM.

When a registration is created or a registration status changes, the specified tags will be applied to the registrant’s contact record in your CRM.

### Enhanced Ecommerce

WP Fusion’s Enhanced Ecommerce addon (available to Plus and Professional license holders) can sync Event Espresso transactions to supported CRMs and email marketing platforms.

The Event Espresso transaction synced to HubSpot as a deal, including the contact who made the registration, and a line item (in the right sidebar) indicating the ticket purchased.
With Event Espresso, the Ecommerce Addon will send enhanced ecommerce data for all purchases of tickets in Event Espresso.

In CRMs that have Products as separate entities from Orders, you can associate your Event Espresso tickets with CRM products by selecting them from the product dropdown while editing the ticket.

		The CRMs supported by Enhanced Ecommerce are listed below. Click on each to learn more about the capabilities of the integration.

- ActiveCampaign
- AgileCRM
- Brevo
- Drip
- Groundhogg
- HighLevel
- HubSpot
- Infusionsoft / Keap
- MailerLite
- NationBuilder
- Ontraport
- Salesforce
		

### Exporting Registrations

WP Fusion includes a batch exporter tool for Event Espresso registrations. This can be found under Settings » WP Fusion » Advanced.

Running the Event Espresso registrations operation will find any “Approved” Event Espresso registrations that have not yet been processed by WP Fusion, and sync them to your CRM as if they just happened. This will create / update contact records based on the provided registration data, and apply any tags you’ve configured for your events.

You can choose Skip already processed to ignore registrations that were already processed by WP Fusion.

---

## The Events Calendar / Event Tickets

**Source:** [https://wpfusion.com/documentation/events/the-events-calendar-event-tickets/](https://wpfusion.com/documentation/events/the-events-calendar-event-tickets/)

### Overview

WP Fusion integrates with The Events Calendar and Event Tickets by Modern Tribe, letting you add contacts to any one of 50+ supported CRMs and marketing automation platforms, and apply tags when attendees register for events or purchase tickets.

You can also track event attendance by syncing check-in data for attendees to a custom field on their contact record in your CRM.

### Event Tickets

When adding or editing any event ticket, you’ll see several WP Fusion settings:

- Apply tags: These tags will be applied in your CRM when someone RSVPs or purchases this ticket.
- Apply tags – Deleted: These tags will be applied in your CRM when an attendee is deleted from an event.
- Apply tags – Check-in: These tags will be applied when someone checks in to an event (with Event Tickets Plus)
- Add attendees: When this box is checked, each attendee will be synced to a separate contact record in your CRM (and tagged). This requires Individual Attendee Collection to be enabled in the Event Tickets settings.

#### Ticket blocks

If you are using the new Event Tickets block editor mode, the WP Fusion settings for each ticket or RSVP can be accessed from the sidebar after creating the ticket.

WP Fusion’s settings appear in the sidebar when editing an event in the block editor.

#### Managing attendees

When viewing the attendees list in Event Tickets, the WP Fusion status column will show whether or not the attendee was successfully synced to your CRM, as well as their contact ID.

You can also click on any attendee to see if they were synced to your CRM, and their contact ID.

A link to view the attendee in your connected CRM appears on the attendee modal when viewing attendee details in Event Tickets.
Clicking the contact ID will open the attendee’s contact record in your CRM.

#### Editing attendees

If you edit an attendee’s details in the admin, or attendees edit their own information on the frontend of the site, their updated details will automatically be synced to your CRM.

In some cases, you may want to create a new contact record in your CRM when an email address is changed on a ticket. To enable this, go to Settings » WP Fusion » Integrations » Event Tickets and enable the setting for Create New Attendees on Edit.

When this setting is enabled, if an attendee’s email address changes, a new contact record will be created in your CRM, and any tags configured on the event will be applied to the new contact.

The new contact will then be linked with the existing ticket for purposes of check-ins and future updates.

WP Fusion includes the option to automatically create new contact records in your CRM when attendees are edited in Event Tickets.
In the admin, the dialog will show if the update was successful, with a link to view the new contact record in your CRM.

#### Moving tickets

With Event Tickets, attendees can be moved from one event to another. If this happens, the tags from the original event will be removed, and the tags for the new event will be applied. Any enabled event or venue fields will also be synced to the CRM with the values for the new ticket.

#### Syncing event details

WP Fusion also lets you sync the event date, time, and location to the contact record, so this data can be merged into emails. See below for an example.

If you’re using The Events Calendar Pro, you have the option to create custom fields for your events. Any custom fields you’ve created for events will also show up on the Contact Fields list in the WP Fusion settings, and they will be synced when an attendee RSVPs for an event or purchases a ticket.

### Event Tickets Plus

Event Tickets Plus allows for even more flexibility with creating events. You can sell tickets to events using Easy Digital Downloads or WooCommerce, and collect additional information about attendees during the registration process by adding custom fields to the ticket settings.

Any custom fields added to an event will show up under the Contact Fields section in the WP Fusion settings page. You can then map these to fields in your CRM and record relevant attendee information.

#### Event check-ins

Event Tickets Plus allows you to check-in attendees to an event, either via the WordPress admin or using the Event Tickets Plus QR scanning app.

To track event attendance you can enable the event_checkin and/or event_checkin_event fields for sync.

Track event check-ins in custom fields in your CRM
Both fields will be synced when someone is checked in to an event. The event_checkin field will contain a boolean true value and works best when updating a checkbox field in your CRM.

The event_checkin_event field will contain the name of the event the attendee was checked in to.

### Virtual events

If you’re using the Virtual Events addon for The Events Calendar, WP Fusion allows you to sync the Zoom meeting details with custom fields in your CRM.

The available fields are:

- Zoom Meeting ID: The ID of the Zoom meeting.
- Zoom Meeting URL: The URL to join the Zoom meeting.
- Zoom Meeting Password: The password to join the Zoom meeting (if applicable).

### Video

Watch this video from WPLaunchify about connecting Ontraport to Event Tickets / WooCommerce with WP Fusion.

### Exporting attendees

WP Fusion includes a batch export tool for Event Tickets that can retroactively sync event attendees to your CRM from before you installed WP Fusion.

This can be found at Settings » WP Fusion » Advanced » Batch Operations.

Select the Event Ticket attendees option and click the Create Background Task button to start the export.

You can optionally choose to only export attendees that haven’t yet been processed by WP Fusion. Or you can un-check Skip already processed attendees to re-sync all attendees to your CRM.

For each attendee, any enabled custom fields will be synced. Any tags configured on the corresponding events and tickets will also be applied.

---

