# Calendar Settings

*Category from The Events Calendar documentation*

---

## Configuring The Events Calendar Settings

**Source:** [https://docs.nexcess.com/software/the-events-calendar/calendar-settings/](https://docs.nexcess.com/software/the-events-calendar/calendar-settings/)

You can access the settings for The Events Calendar and Events Calendar Pro from the WordPress Admin by going to **Events → Settings** from your WordPress admin bar or sidebar. The settings offer a lot of cool options to get your calendar looking just the way you want it.

Let’s review what each of the options entails.

**💡** Some of the settings below are specific to Events Calendar Pro and marked as such.

## General

### Viewing

- **Events URL slug:** Determines where on the frontend your events will live; defaults to /events but can be changed to whatever you see fit (so long as it’s lowercase). The link that appears below the field will take you directly to your events page. As of version 4.4 of The Events Calendar, you can set your calendar as the homepage! Learn more [here](https://theeventscalendar.com/knowledgebase/k/how-to-make-your-calendar-your-sites-home-page/).
- **Single event URL slug:** Similar to the Events URL slug, this determines the URL structure for a single event. Note that while you want this to be similar to the Events URL slug, they cannot be identical — notice how if the Events URL slug defaults to plural “events”, the Single Event URL Slug has to be singular “event.” Keep this in mind as you make changes.
- **Include events in main blog loop:** Events will be included on your main page along with regular WordPress posts. They will continue to show in all calendar views. [Read More](https://theeventscalendar.com/knowledgebase/k/order-events-in-main-blog-loop-by-post-date/)
- **Recurring event instances** **(Pro):** When checked it shows only the next instance of each recurring event (only affects list-style views).
- **Front-end recurring event instances toggle (Pro):** When enabled, allows users to decide whether to show all instances of a recurring event on list-style views.
- **Enable Month View Cache:****This setting caches your Month View so that it loads faster for users. [Read More](https://docs.nexcess.com/software/the-events-calendar/customize-month-view/)
- **Show The Events Calendar link:** You will notice this in the large box at the top of this page. It adds a [small link](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2015-02-20-at-12.11.22-PM1.jpg) to the bottom of your calendar pointing to The Events Calendar project.

### Editing

- **Events Manager** **(Pro)**: Check whether to enable the Events Manager as the default page for viewing Events on the Administration page.
- **Activate Block Editor for Events:**When enabled, the Gutenberg Block Editor will be active on the edit screen for events pages.
- **Show Custom Fields metabox:**This option allows you to show or hide the default WordPress “Custom Fields” meta box when editing events within your dashboard. If you aren’t already familiar with using this WordPress feature, you can go ahead and disable it. This will help to clean up the dashboard when creating events.

### Maintenance

- **Move to trash events older than:** This option allows you to automatically move past events to trash based on their end date.
- **Merge** **Duplicate Venues & Organizers:** This option allows you to automatically merge identical venues and organizers.

### Debugging

- **Debug mode:** Turn this checkbox on to log debug information. This is probably not worth enabling unless you have the specific intent of checking for errors with the plugin code.
- **Data share consent**: Enable this option to share usage data with The Events Calendar and StellarWP. This activates access to TEC AI chatbot and in-app priority support for premium users.
- **In-App Notifications:** Enable this option to receive notifications about The Events Calendar, including updates, fixes, and features. This is enabled if you have opted in to Telemetry.

## Display

### Calendar

- **Default stylesheet used for events templates:**You can choose between three different stylesheets depending on how much default styling you want on your calendar. The last two options may be particularly useful if you are wanting to add your own CSS.
- **Tribe Events Styles:** our most comprehensive level of default styling
- **Skeleton Styles:**this is a very minimal level of styling and is ideal for those who wish to roll their sleeves up and build their own custom set of rules
- [Events template](https://docs.nexcess.com/software/the-events-calendar/)*:* This dropdown allows you to change the look and feel of the calendar and how it integrates with your site. The plugin comes with two templating options by default (Default Events Template and Default Page Template); your theme will likely include at least one more. Switch between these if you’re finding the calendar does not look as you want it to on the site — while they may not get you 100% where you want to be, you’ll be able to tell right off the bat which templating option is most compatible with your site and can make additional modifications as needed from there.
- **Enable event views:** Allows you to choose which Views will be available to users on the front end.
- **Default view:**The View selected here will show on your calendar’s initial load. From there users can change to the Views you’ve enabled above. [Watch this video](https://www.youtube.com/watch?v=r-_CmvFOuf0) for a walkthrough.
- **Default mobile view (Pro only):** When Events Calendar Pro is activated, the view selected here will show on your calendar’s initial load when on mobile devices. If you do not specify a view here, it will use the value of the above “Default view” option.
- **Month View events per day:**Controls the number of events listed on each day in Month View. If there are additional events on that day there will be a link to view all events on that day. Showing more events can affect load time, so be sure to review [our article on performance considerations](https://docs.nexcess.com/software/the-events-calendar/calendar-performance/). Note, that multi-day and all-day events are not included in this number.
- **Number of events to show per page:** Defines the number of events showing on each page. This applies to most list-style views: List, Photo, Map, Summary, Venue, and Organizer views. Other events are accessible from Previous/Next Events nav links. Note that this does *not*apply to Day View, which always shows all events on that day regardless.
- **Show Comments:** When enabled, this setting adds WordPress’ basic commenting functions to your event listings. If comments are enabled on a whole they can still be disabled as you see fit on a post-by-post basis.
- **Disable the Event Search Bar:** Check this box to return to the classic header from pre-3.0 versions.
- **Hide related events (Pro only):** Removes the Related Events from the bottom of the single event page.
- **Hide weekends on Week View:**Allows you to show only Monday through Friday on Week View. Other enabled views will not be affected.
- **Display images as a grid on Photo View***:*This setting caches your Month View so that it loads faster for users.

### Organizers

- **Phone number**: Show phone number on Event single/Show phone number on Organizer single
- **Email:** Show email on Event single/Show email on Organizer single

### Date & Time

- **Date with year format:** the format you specify here will be used when showing an event from a past or future year (such as on single event pages and list-style views) and for dates in view headers.
- **Date without year format:** the format here will be used when showing an event from the current year, such as on the single event pages and list-style views.
- **Month and year format:**this format will be used when displaying a date that is just the month and year, such as in the Month View header.
- **Week day format (Pro only):** the format you specify here will be used for the top row of the Week View.
- **Compact date format**: Select the date format used for elements with minimal space, such as in datepickers.
- **Date time separator:**this settings allows you to change the symbol or word that displays between the date and time of an event (for example January 1 @ 9:00 am).
- **Time range separator:**this setting allows you to change the symbol or word that displays between the start and end time of an event (for example 9:00-10:30am).
- **End of day cutoff:** Let’s say you have an event that runs from 6 pm on Friday until 2 am on Saturday; technically, that’s a Friday & Saturday event — but to readers on the frontend, and for all intents & purposes, it’s a Friday night event that runs long. This is where the end of day cutoff comes into play; if you set the dropdown here to 2:30 a.m., for example, your Friday-Saturday event would only show on Friday in relevant views. [Read More](https://theeventscalendar.com/knowledgebase/k/using-the-end-of-day-cutoff-setting/)
- **Show timezone:****Allows you to display the timezone code (e.g. PST or BST) next to event times on the front end.
- **Timezone mode:****Default option is to use the site’s timezone everywhere on the calendar. You can also choose to use local timezones for each event, which are configured on individual event pages. (See also: [Timezones and Daylight Saving Time with The Events Calendar](https://docs.nexcess.com/software/the-events-calendar/calendar-timezone/))

### Currency

- **Default currency symbol:** This allows non-US users to change the currency symbol for Event Cost. The symbol can also be changed on an individual post. Users of Event Tickets may also need to set the currency setting with [Tickets Commerce](https://docs.nexcess.com/software/the-events-calendar/tickets-commerce/) or [WooCommerce](https://docs.nexcess.com/software/the-events-calendar/ecommerce/#WooCommerce).
- **Default currency code:** You can set the default currency ISO-4217 code for event costs with this option. This is a three-letter code and is mainly used for data/SEO purposes.
- **Currency symbol follows value:** Users with a default currency that follows the amount (for example 10 zł) can check this box to have the currency symbol show after the money value.

### Map

- **Enable Google Maps:** This checkbox allows Google Maps integration for single event pages and venue pages. You can then turn maps on or off on individual event pages.
- **Google maps default zoom level:** Defines how the map looks on Venue and Event pages. A low number will show a zoomed-out map, while a high number (max 21) will be completely zoomed in.

### Additional Content

- **Enable the Before HTML on shortcodes:** Check the box to show the Before HTML from the text area below on events displayed via shortcode.
- **Add HTML Before/After Calendar:** These fields allow you to add extra divs (or other HTML) before or after the calendar as it appears on the frontend of the site. You can also use shortcodes here. This can also come in handy for adding sub-heads or announcements to your calendar.
- **Enable the After HTML (below) on shortcodes:** Check the box to show the After HTML from the text area below on events displayed via shortcode.

## Default Content (Pro only)

Default Venues and Organizers are available with Events Calendar Pro. Learn more about using this page in [our Default Content tutorial](https://docs.nexcess.com/software/the-events-calendar/default-event-content/).

## Additional Fields (Pro only)

This is where you add custom event attributes. We thoroughly cover this section of settings in [our guide to Additional Fields](https://docs.nexcess.com/software/the-events-calendar/custom-fields/).

## Licenses

If you have purchased Events Calendar Pro (or any of our other paid add-ons), this is where you’ll go to add your license key. The more premium plugins you have installed, the more fields will appear. You can add as many or as few as you want at a given time; remember that since none of our plugins require the license to work, you’re merely adding them to access support and future updates.

Need help with a license key? Check out [our guide to finding and inputting your license key](https://docs.nexcess.com/software/the-events-calendar/finding-and-inputting-your-license-key/). If you’re using a multisite license, you’ll want to read over [our multisite license guide](https://docs.nexcess.com/software/the-events-calendar/licenses-for-multisites/).

## Integrations

Some features and add-ons require you to enter an API key or log into a third-party website so that The Events Calendar can communicate with an outside source.

The Events Calendar comes with one API field, for Google Maps. While many sites work fine without a Google Maps API key, other sites–particularly those with high traffic or multiple map features–need to have a key in order to properly render maps. For best results, we recommend [getting a Google Maps API key](https://docs.nexcess.com/software/the-events-calendar/google-maps-api/) and entering it in the available field.

Some of our premium plugins require additional API keys to function properly. Check your Integrations settings tab for details.

## Help

We spent a lot of time devising the Help tab so it’d be as valuable as possible to the community. Got an integration question or bug? Go here first. Aside from giving you an overview of our philosophy and how we treat support issues, it’ll direct you to valuable places like our tutorials, documentation, and help desk. We built this plugin to serve you and tried to cram as much information that can help you succeed here as possible (without making it feel like an inundation…we hope).

If you are running Events Calendar Pro, the Help tab will also display a black box labeled *System Information.*Sometimes when we are working with a support issue, we may ask you to share this information so that we can learn more about the site’s specifications. We have a [tutorial to walk you through the process](https://docs.nexcess.com/software/the-events-calendar/sharing-your-system-information/).

---

