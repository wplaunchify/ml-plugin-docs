# Calendar Templates

*Category from The Events Calendar documentation*

---

## The Events Calendar Template Files

**Source:** [https://docs.nexcess.com/software/the-events-calendar/calendar-templates/](https://docs.nexcess.com/software/the-events-calendar/calendar-templates/)

Looking for **Event Tickets Emails** template files? You can find them [here](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/)!

The Events Calendar and Events Calendar Pro come with a number of template files that determine how the plugins look and behave. We call these templates **views** because they create the pages that you see on your site.

Each template can be copied and [customized in your theme folder](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/). The following is an outline of all of the available templates that come included with The Events Calendar.

## The Events Calendar Template Files

The following templates are included with The Events Calendar. If you have Events Calendar Pro installed, additional templates specific to Pro views can be found in the [Events Calendar Pro section](#h-events-calendar-pro-template-files) below.

### Core view templates

The following templates are containers for other templates. They are located at 
```
/wp-content/plugins/the-events-calendar/src/views/v2
```

.

| Template | What it does |
| --- | --- |
| day.php | Wrapper for the day view template, including the events bar, top bar, and the events in the day view. |
| default-template.php | The basic wrapper template for all the views when the “Default Events Template” is used in the plugin’s Display settings. |
| embed.php | The post embed base template. |
| list.php | Wrapper for the list view template, includes the events bar, top bar, and the events in the list view. |
| month.php | Wrapper for the month view template, includes the events bar, top bar, and the events in the month view. |
| silence.php | A blank template. |
| single-event-blocks.php* | Wrapper for individual events created with blocks. |
| single-event.php* | Wrapper for individual events. |

* This file is located at:  
```
/wp-content/plugins/the-events-calendar/src/views/
```

![banner-ad-tec-demo-site](https://docs.nexcess.com/wp-content/uploads/2026/06/banner-ad-tec-demo-site.png)

### Day view

The following templates are located at: 
```
/wp-content/plugins/the-events-calendar/src/views/v2/day/
```

 except for the main 
```
day.php
```

 template, which is one level up.

| Template | What it Does |
| --- | --- |
| day/event.php | Template for a single event in day view. |
| day/nav.php | Template for the day view navigation, with the next and previous links. |
| day/time-separator.php | Template for the time separator in day view. |
| day/top-bar.php | Template for the day view top bar. |
| day/type-separator.php | Template for all day and multiday separators. |
| day/event/cost.php | Template for the event cost. |
| day/event/date.php | Template for the event date. |
| day/event/description.php | Template for the event description. |
| day/event/featured-image.php | Template for the event featured image. |
| day/event/title.php | Template for the event title. |
| day/event/venue.php | Template for the event venue. |
| day/event/date/meta.php | Template for the event date meta. |
| day/nav/next-disabled.php | Template for the disabled Next button in the day view navigation. |
| day/nav/next.php | Template for the Next button in the day view navigation. |
| day/nav/prev-disabled.php | Template for the disabled Previous button in the day view navigation. |
| day/nav/prev.php | Template for the Previous button in the day view navigation. |
| day/top-bar/datepicker.php | Template for the day view top bar datepicker field. |

### List view

The following templates are located at: 
```
/wp-content/plugins/the-events-calendar/src/views/v2/list/
```

.

| Template | What it Does |
| --- | --- |
| list/event.php | Template for a single event in list view. |
| list/month-separator.php | Template for the month separator. |
| list/nav.php | Template for the list view navigation, with the next, previous, and today links. |
| list/top-bar.php | Template for the list view top bar. |
| list/event/cost.php | Template for the event cost. |
| list/event/date-tag.php | Template for the event date tag with weekday and day number. |
| list/event/date.php | Template for the event date. |
| list/event/description.php | Template for the event description. |
| list/event/featured-image.php | Template for the event featured image. |
| list/event/title.php | Template for the event title. |
| list/event/venue.php | Template for the event venue. |
| list/event/date/meta.php | Template for the event date meta. |
| list/nav/next-disabled.php | Template for the navigation disabled next button. |
| list/nav/next.php | Template for the navigation next button. |
| list/nav/prev-disabled.php | Template for the navigation disabled previous button. |
| list/nav/prev.php | Template for the navigation previous button. |
| list/nav/today.php | Template for the navigation today button. |
| list/top-bar/datepicker.php | Template for the list view top bar datepicker. |

### Month view

The following templates are located at: 
```
/wp-content/plugins/the-events-calendar/src/views/v2/month/
```

.

| Template | What it Does |
| --- | --- |
| month/calendar-body.php | Template for the month view calendar body. |
| month/calendar-header.php | Template for the month view calendar header. |
| month/mobile-events.php | Template for the wrapper for mobile events. |
| month/top-bar.php | Template for the month view top bar. |
| month/calendar-body/day.php | Template for a day in the calendar grid. |
| month/calendar-body/day/calendar-events.php | Template for the wrapper for calendar events in a day. |
| month/calendar-body/day/more-events.php | Template for the more events link in a day. |
| month/calendar-body/day/multiday-events.php | Template for the multiday events wrapper in a day. |
| month/calendar-body/day/calendar-events/calendar-event.php | Template for a calendar event. |
| month/calendar-body/day/calendar-events/calendar-event/date.php | Template for the calendar event date. |
| month/calendar-body/day/calendar-events/calendar-event/featured-image.php | Template for the calendar event featured image. |
| month/calendar-body/day/calendar-events/calendar-event/title.php | Template for the calendar event title. |
| month/calendar-body/day/calendar-events/calendar-event/tooltip.php | Template for the calendar event tooltip. |
| month/calendar-body/day/calendar-events/calendar-event/date/meta.php | Template for the calendar event date meta. |
| month/calendar-body/day/calendar-events/calendar-event/tooltip/cost.php | Template for the calendar event tooltip cost. |
| month/calendar-body/day/calendar-events/calendar-event/tooltip/date.php | Template for the calendar event tooltip date. |
| month/calendar-body/day/calendar-events/calendar-event/tooltip/description.php | Template for the calendar event tooltip description. |
| month/calendar-body/day/calendar-events/calendar-event/tooltip/featured-image.php | Template for the calendar event tooltip featured image. |
| month/calendar-body/day/calendar-events/calendar-event/title.php | Template for the calendar event tooltip title. |
| month/calendar-body/day/calendar-events/calendar-event/tooltip/date/meta.php | Template for the calendar event tooltip date meta. |
| month/calendar-body/day/multiday-event-spacer.php | Template for a multiday event spacer. |
| month/calendar-body/day/multiday-events.php | Template for a multiday event. |
| month/mobile-events/mobile-day.php | Template for a day in the mobile events wrapper. |
| month/mobile-events/nav.php | Template for the mobile events navigation, with the next, previous, and today links. |
| month/mobile-events/mobile-day/day-marker.php | Template for the mobile events day marker. |
| month/mobile-events/mobile-day/mobile-event.php | Template for a mobile event in a day. |
| month/mobile-events/mobile-day/more-events.php | Template for the mobile events more events link for a day. |
| month/mobile-events/mobile-day/mobile-event/cost.php | Template for the mobile event cost. |
| month/mobile-events/mobile-day/mobile-event/date.php | Template for the mobile event date. |
| month/mobile-events/mobile-day/mobile-event/featured-image.php | Template for the mobile event featured image. |
| month/mobile-events/mobile-day/mobile-event/title.php | Template for the mobile event title. |
| month/mobile-events/mobile-day/mobile-event/date/meta.php | Template for the mobile event date meta. |
| month/mobile-events/nav/next-disabled.php | Template for the mobile events navigation disabled next button. |
| month/mobile-events/nav/next.php | Template for the mobile events navigation next button. |
| month/mobile-events/nav/prev-disabled.php | Template for the mobile events navigation disabled previous button. |
| month/mobile-events/nav/prev.php | Template for the mobile events navigation previous button. |
| month/mobile-events/nav/today.php | Template for the mobile events navigation today button. |
| month/top-bar/datepicker.php | Template for the month view top bar datepicker. |

### Modules

The following templates are located at 
```
wp-content/plugins/the-events-calendar/src/views/modules
```

.

| Template | What it does |
| --- | --- |
| modules/address.php | Displays the venue address on an event single. |
| modules/bar.php | Renders the events navigation bar used across views. |
| modules/map-basic.php | Used for maps embedded in single events and venues when the site is using The Events Calendar’s default Google Maps API key. |
| modules/map.php | Used for maps embedded within single events and venues. |
| modules/meta.php | The container for meta information about the event. |
| modules/meta/details.php | Displays the event’s details in the meta section of the event single. |
| modules/meta/map.php | Displays the embedded map in the meta section of the event single. |
| modules/meta/organizer.php | Displays the event’s organizer information in the meta section of the event single. |
| modules/meta/venue.php | Displays the event’s venue information in the meta section of the event single. |

### Embedded events

The following templates are located at: 
```
/wp-content/plugins/the-events-calendar/src/views/embed/
```

.

| Template | What it does |
| --- | --- |
| embed/content.php | The template that displays the content for the embed view |
| embed/cost.php | Shows the cost in an embedded event |
| embed/footer.php | The footer template for the embed view |
| embed/image.php | Displays the featured image of an embedded event |
| embed/meta.php | The wrapper for displaying content, such as date and time for an embedded event |
| embed/schedule.php | Displays the schedule information for an embedded event |
| embed/venue.php | Displays information about the venue for an embedded event |

### Widgets

The following templates are located at: 
```
/wp-content/plugins/the-events-calendar/src/views/widgets/
```

.

| Template | What it Does |
| --- | --- |
| widgets/calendar-widget.php | Deprecated |
| widgets/list-widget.php | Displays the list widget. |

### Components

The following templates are located at: 
```
/wp-content/plugins/the-events-calendar/src/views/v2/components/
```

.

| Template | What it Does |
| --- | --- |
| components/after.php | Template for custom HTML after the view. This is applied to all views. |
| components/before.php | Template for custom HTML before the view. This is applied to all views. |
| components/breadcrumbs.php | Template for breadcrumbs in the view header. This is applied to category archive, featured archive, all view, organizer view, and venue view. |
| components/breakpoints.php | Holds the script tag containing the calendar’s various breakpoints for responsive layouts. |
| components/data.php | Template for the view data. This is applied to all views. It is highly recommended to not make any changes to this template. |
| components/events-bar.php | Template for the events bar. This is applied to all views. |
| components/filter-bar.php | Template placeholder for the Filter Bar. This is applied to all views. The Filter Bar is injected after this via template hooks, so removing calls to this will prevent the Filter Bar from showing up. Any custom content added to this template will show up immediately above the Filter Bar. |
| components/ical-link.php | Template for iCal link. This is applied to all views. |
| components/loader.php | Template for the loader overlay during ajax requests. This is applied to all views. |
| components/json-ld-data.php | Template that injects structured data in JSON-LD format for enhanced SEO. |
| components/messages.php | Template for messages. This is applied to all views. |
| components/read-more.php | Template for the “Read More” link. This is only applied to events on the Twenty Seventeen theme. |
| components/breadcrumbs/breadcrumb.php | Template for a non-linked breadcrumb. |
| components/breadcrumbs/linked-breadcrumb.php | Template for a linked breadcrumb. |
| components/events-bar/search.php | Template for the events bar search form. |
| components/events-bar/search-button.php | Template for the events bar mobile search button. |
| components/events-bar/views.php | Template for the events bar views selector. |
| components/events-bar/search/keyword.php | Template for the events bar search form keyword input. |
| components/events-bar/search/submit.php | Template for the events bar search form submit button. |
| components/events-bar/search-button/icon.php | Template for the events bar search button icon. |
| components/events-bar/views/list.php | Template for the events bar views selector list. |
| components/events-bar/views/list/item.php | Template for the events bar views selector list item. |
| components/top-bar/actions.php | Template for the top bar actions. |
| components/top-bar/today.php | Template for the top bar “Today” link. |
| components/top-bar/actions/content.php | Template for the top bar actions content. |

### Blocks

This is a list of templates for events that are created using the WordPress block editor. The templates are located at: 
```
/wp-content/plugins/the-events-calendar/src/views/blocks/
```

.

Note that these templates go into a different folder in your theme if you plan on overriding them. Instead of creating a 
```
tribe-events
```

 folder in your theme, these blocks will go into a 
```
/tribe/events/
```

 folder.

| Template | What it Does |
| --- | --- |
| /blocks/classic-event-details.php | The wrapper for the event’s details, including meta information, venue, and organizer. |
| /blocks/event-category.php | Displays the event category |
| /blocks/event-datetime.php | Displays the date and time of the event |
| /blocks/event-links.php | Displays the event export options |
| /blocks/event-organizer.php | Displays the event organizer |
| /blocks/event-price.php | Displays the cost of the event |
| /blocks/event-tags.php | Displays the event’s tags |
| /blocks/event-venue.php | Displays the venue where the event takes place |
| /blocks/event-website.php | Displays the website link for the event |
| /blocks/featured-image.php | Displays the event’s featured image |
| /blocks/parts/details.php | Displays event details in the classic event details block, including date, time, categories, tags, price and website |
| /blocks/parts/map.php | Displays the embedded Google Map in the event venue block |
| /blocks/parts/organizer.php | Displays organizer information in the classic event details block |
| /blocks/parts/venue.php | Displays the venue information in the classic event details block |

## Events Calendar Pro Template Files

Events Calendar Pro enhances The Events Calendar by adding premium features when installed and activated alongside The Events Calendar. Events Calendar Pro comes with a number of template files that determine how the plugin looks and behaves. We call these templates **views** because they create the pages you see on your site.

### List View

Events Calendar Pro adds the following template to the calendar list view when enabled. The following template is located at: 
```
/wp-content/plugins/events-calendar-pro/src/views/v2/list/event/
```

.

| Template | What it Does |
| --- | --- |
| recurring.php | Displays the icon for an event in a series in the calendar list view |

### Month View

Events Calendar Pro features additional templates that are added to the calendar month view when enabled. The following templates are located at: 
```
/wp-content/plugins/events-calendar-pro/src/views/v2/month/
```

.

| Template | What it Does |
| --- | --- |
| recurring.php | Displays the icon for a series event in month view |
| tooltip/recurring.php | Displays the icon for a series event in a month view tooltip when an event is hovered |
| mobile-event/recurring.php | Displays the icon for a series event in month view on small screens |

### Map View

The following templates are located at: 
```
/wp-content/plugins/events-calendar-pro/src/views/v2/map/
```

.

| Template | What it Does |
| --- | --- |
| map.php | The main container for the view. |
| event-cards.php | The main wrapper for the list of individual events in map view |
| event-cards/event-card.php | The wrapper for an individual event in map view |
| event-cards/event-card/actions.php | Imports actions for single events in map view |
| event-cards/event-card/actions/cost-spacer.php | Adds spacing around the event cost element |
| event-cards/event-card/actions/cost.php | Displays the event cost |
| event-cards/event-card/actions/details-spacer.php | Adds pacing around the details element |
| event-cards/event-card/actions/details.php | Displays the event details |
| event-cards/event-card/actions/directions-spacer.php | Adds spacing around the event directions |
| event-cards/event-card/actions/directions.php | Displays the link to event directions |
| event-cards/event-card/event.php | The wrapper for the content of a single event in the map view list of events |
| event-cards/event-card/event/date-time.php | Displays the event date and time |
| event-cards/event-card/event/distance.php | Displays the distance to the event location |
| event-cards/event-card/event/featured-image.php | Displays the featured image of the event post |
| event-cards/event-card/event/title.php | Displays the event title |
| event-cards/event-card/event/venue.php | Displays the event venue |
| event-cards/event-card/tooltip.php | Displays the tooltip when an individual event is hovered in map view |
| event-cards/event-card/tooltip/cost.php | Displays the event cost in the tooltip |
| event-cards/event-card/tooltip/date-time.php | Displays the event date and time in the tooltip |
| event-cards/event-card/tooltip/navigation.php | Displays the next and previous buttons in the tooltip |
| event-cards/event-card/tooltip/title.php | Displays the event title in the tooltip |
| event-cards/event-card/tooltip/venue.php | Displays the event venue in the tooltip |
| event-cards/event-card/date-tag.php | Displays the month and date range for the list of events currently in view |
| event-cards/nav.php | The wrapper for navigation in map view |
| event-cards/nav/next-disabled.php | Controls the disabled state of the “next” navigation when no more upcoming events are available |
| event-cards/nav/next.php | Displays the button to paginate forward in map view |
| event-cards/nav/prev-disabled.php | Controls the disabled state of the “previous” navigation when no more upcoming events are available |
| event-cards/nav/prev.php | Displays the button to navigate backwards in map view |
| event-cards/nav/today.php | Displays the button to return to the current day in map view |
| map/google-maps.php | The container that holds the Google Maps embed |
| map/google-maps/default.php | Renders Google Maps using the default API key provided by the plugin |
| map/google-maps/premium.php | Renders Google Maps using a custom API key |
| top-bar.php | Displays the area containing navigation for the view |
| top-bar/nav/prev.php | Displays the previous navigation link |
| top-bar/nav/next-disabled.php | Controls the next page navigation link when there are no more pages with upcoming events |
| top-bar/nav.php | Displays the navigation inside the top bar |
| top-bar/today.php | Displays the “Today” button in the top bar |
| top-bar/datepicker.php | Displays the date picker input in the top bar |

### Photo View

The following templates are located at: 
```
/wp-content/plugins/events-calendar-pro/src/views/v2/photo/
```

.

| Template | What it Does |
| --- | --- |
| photo.php | The main container for photo view |
| event.php | The container for an individual event in photo view |
| event/cost.php | Displays the event cost |
| event/date-tag.php | Displays the month and day number for an event |
| event/date-time.php | Displays the event date and time |
| event/featured-image.php | Displays the featured image for an event post |
| event/title.php | Display the event title |
| nav.php | The container for photo view navigation |
| nav/next-disabled.php | Disabled the next navigation link when no upcoming events are available |
| nav/next.php | Displays the next navigation link when upcoming events are available |
| nav/prev-disabled.php | Disabled the previous navigation link when no earlier events are available |
| nav/prev.php | Displays the previous navigation link when earlier events are available |
| nav/datepicker.php | Displays the date picker input in the view navigation |
| nav/today.php | Displays the button to return to the current day |
| top-bar.php | Displays the area above the view |
| top-bar/nav.php | Displays the navigation for the next and previous links inside the top bar |
| top-bar/nav/next-disabled.php | Disables the next navigation link in the top bar when no upcoming events are available |
| top-bar/nav/next.php | The link in the top bar when more upcoming events are available |
| top-bar/nav/prev-disabled.php | Disables the next navigation link in the top bar when no previous events are available |
| top-bar/nav/prev.php | Disabled the previous navigation link in the top bar when previous events are available |
| top-bar/today.php | Displays the “Today” button in the top bar |
| top-bar/datepicker.php | Displays the date picker input in the top bar |

### Week View

The following templates are located at: 
```
/wp-content/plugins/events-calendar-pro/src/views/v2/week/
```

.

| Template | What it Does |
| --- | --- |
| week.php | The main wrapper for week view |
| day-selector.php | The container for selecting dates in the view |
| day-selector/days.php | The list of days in the date selector |
| day-selector/days/day.php | Displays an individual date in the day selector |
| day-selector/nav.php | Contains the previous and next navigation links in the day selector |
| day-selector/nav/prev.php | Displays a previous navigation link in the day select |
| day-selector/nav/next.php | Displays a next navigation link in the day select |
| grid-body.php | The container for the grid of dates in week view |
| grid-body/events-day.php | The container for an individual date in week view |
| grid-body/events-day/event.php | The container for an event in a week view date column |
| grid-body/events-day/event/date.php | Displays the event date for an event in week view |
| grid-body/events-day/event/featured-image.php | Displays the featured event for an event displayed in week view |
| grid-body/events-day/event/title.php | Displays the title of an event in week view |
| grid-body/events-day/event/tooltip.php | The container for a tooltip when an event is hovered in week view |
| grid-body/events-day/event/tooltip/cost.php | Displays the event cost in the tooltip that displays when an event is hovered in week view |
| grid-body/events-day/event/tooltip/date.php | Displays the event date in the tooltip that displays when an event is hovered in week view |
| grid-body/events-day/event/tooltip/description.php | Displays the event description in the tooltip that displays when an event is hovered in week view |
| grid-body/events-day/event/tooltip/featured-image.php | Displays the event featured image in the tooltip that displays when an event is hovered in week view |
| grid-body/events-day/event/tooltip/title.php | Displays the event title in the tooltip that displays when an event is hovered in week view |
| grid-body/events-day/multiday-events-day/more-events.php | Displays the links when more events are available to view than what is currently displayed |
| grid-body/events-day/multiday-event-spacer.php | Adds spacing around multi-day events in week view |
| grid-body/events-day/multiday-event.php | Displays multi-day events in week view |
| grid-body/events-row-header.php | The container for the week view grid header |
| grid-body/multiday-events-row-header.php | The container for the week view grid header when multi-day events are displayed |
| grid-body/multiday-events-row-header/multiday-events-row-header-toggle.php | Contains the toggle control for displaying the row of multi-day events in week view |
| grid-header.php | The container for the header row of the week view grid of displayed dates |
| grid-header/header-column.php | The content for the header row of the week view grid of displayed dates |
| mobile-events.php | The container for events when displayed on small screens |
| mobile-events/day.php | The container for a day in week view when viewed on small screens |
| mobile-events/day/event.php | The container for an event on a date in week view when viewed on small screens |
| mobile-events/day/event/cost.php | Displays the event cost in week view when viewed on small screens |
| mobile-events/day/event/date.php | Displays the event date in week view when viewed on small screens |
| mobile-events/day/event/featured-image.php | Displays the event featured image in week view when viewed on small screens |
| mobile-events/day/title.php | Displays the event title in week view when viewed on small screens |
| mobile-events/day/venue.php | Displays the event venue in week view when viewed on small screens |
| mobile-events/day/time-separator.php | Displays a separator between the date and time in week view when viewed on small screens |
| mobile-events/day/type-separator.php | Displays a separator between the event time and the whether the event type is all-day or ongoing |
| mobile-events/nav.php | The navigation for week view when displayed on small screens |
| mobile-events/nav/next-disabled.php | Disables the button to view more upcoming events in week view when viewed on small screens and no upcoming events are available |
| mobile-events/nav/next.php | Displays the button to view more upcoming events in week view when viewed on small screens |
| mobile-events/nav/prev-disabled.php | Disables the button to view previous events in week view when viewed on small screens and no previous events are available |
| mobile-events/nav/prev.php | Displays the button to view previous events in week view when viewed on small screens |
| mobile-events/nav/today.php | Displays the button to return to the current date when week view is viewed on small screens |
| top-bar.php | Displays the area above the view |
| top-bar/datepicker.php | Displays the date picker input in the top bar |
| top-bar/nav.php | The container holding the previous and next links in the top bar. |
| top-bar/nav/next-disabled.php | Displays the disabled next navigation link when no upcoming events are available |
| top-bar/nav/next.php | Displays the next navigation link when upcoming events are available |
| top-bar/nav/prev-disabled.php | Disabled the disabled previous navigation link when no earlier events are available |
| top-bar/nav/prev.php | Displays the the previous navigation link when earlier events are available |

### Summary View

The following templates are located at: 
```
/wp-content/plugins/events-calendar-pro/src/views/v2/summary/
```

.

| Template | What it Does |
| --- | --- |
| summary.php | This is the main template for summary view – it is found at /wp-content/plugins/events-calendar-pro/src/views/v2/summary.php. It contains the main structure and calls all the following templates. |
| date-group.php | The container and structure for a single displayed day |
| date-group/date-tag.php | The date tag for a single day |
| date-group/event.php | A single event |
| date-group/event/cost.php | The cost for a single event |
| date-group/event/date.php | The structure and logic for the date of a single event |
| date-group/event/date/all-day.php | The date for an all-day event. Also for “middle” days of a multi-day event |
| date-group/event/date/meta.php | The date for event date meta (currently empty) |
| date-group/event/date/multiday-end.php | The date for the last day of a multi-day event |
| date-group/event/date/multiday-start.php | The date for the first day of a multi-day event |
| date-group/event/date/recurring.php | The series icon for series events |
| date-group/event/date/single.php | The start and end times for an event |
| date-group/event/title.php | The title for a single event |
| date-group/event/title/featured.php | The featured icon for featured events |
| date-separator.php | The separator for displayed days – a horizontal line. |
| month-separator.php | The separator for displayed months – a date and a horizontal line. |
| nav.php | The container for summary view navigation (at the bottom of the view) |
| nav/next-disabled.php | Controls the disabled state of the “next” navigation when no more upcoming events are available |
| nav/next.php | Displays the button to paginate forward in summary view |
| nav/prev-disabled.php | Controls the disabled state of the “previous” navigation when no more upcoming events are available |
| nav/prev.php | Displays the button to paginate backward in summary view |
| nav/today.php | Displays the button to return to the current time period for summary view |
| top-bar.php | Displays the area above the view, including datepicker and navigation |
| top-bar/datepicker.php | Displays the date picker input in the top bar |
| top-bar/nav.php | The container holding the previous and next links in the top bar. |
| top-bar/nav/next.php | Displays the next navigation link when more upcoming events are available |
| top-bar/nav/next-disabled.php | Displays the disabled next navigation link when no more upcoming events are available |
| top-bar/nav/prev.php | Displays the previous navigation link when earlier events are available |
| top-bar/nav/prev-disabled.php | Displays the disabled previous navigation link when no earlier events are available |

### Single Events

The following templates are located at: 
```
/wp-content/plugins/events-calendar-pro/src/views/pro/
```

.

| Template | What it does |
| --- | --- |
| modules/meta/additional-fields.php | Displays additional (custom) fields to the single event meta section |
| related-events.php | Displays related events in the event single. |

### Organizers

The following template is located at: 
```
/wp-content/plugins/events-calendar-pro/src/views/v2/organizer/
```

.

| Template | What it Does |
| --- | --- |
| meta.php | The wrapper for organizer information |
| meta/content.php | Displays the content for an organizer post |
| meta/details/details.php | Contains the details of an organizer post |
| meta/details/email.php | Displays the email address in the organizer details |
| meta/details/phone.php | Displays the phone number in the organizer details |
| meta/details/website.php | Displays the website address in the organizer details |
| meta/title.php | Displays the organizer title |

### Venues

The following template is located at: 
```
/wp-content/plugins/events-calendar-pro/src/views/v2/venue/
```

.

| Template | What it Does |
| --- | --- |
| meta.php | The wrapper for venue information |
| meta/content.php | Displays the content for a venue post |
| meta/details/details.php | Contains the details of a venue post |
| meta/details/address.php | Displays the venue address in the venue details |
| meta/details/phone.php | Displays the venue phone number in the venue details |
| meta/details/website.php | Displays the venue website address in the venue details |
| meta/title.php | Displays the venue title |

### Settings

The following template is located at: 
```
/wp-content/plugins/events-calendar-pro/src/views/v2/recurrence/
```

.

| Template | What it Does |
| --- | --- |
| hide-recurring.php | Renders the “Condense Events Series” option in calendar views. |

### Location Search

The following template is located at: 
```
/wp-content/plugins/events-calendar-pro/src/views/v2/location/
```

.

| Template | What it Does |
| --- | --- |
| form-field.php | Adds a location option to the calendar search. |

### Blocks

This is a list of templates for events that are created using the WordPress block editor and located at: 
```
/wp-content/plugins/events-calendar-pro/src/views/blocks/
```

. Note that these templates go into a different folder in your theme if you plan on overriding them. Instead of creating a 
```
tribe-events
```

 folder in your theme, these blocks will go into a 
```
/tribe/events-pro/blocks/
```

 folder.

| Template | What it Does |
| --- | --- |
| additional-fields/checkbox.php | The block for adding a custom checkbox input to an event |
| additional-fields/dropdown.php | The block for adding a custom select input to an event |
| additional-fields/radio.php | The block for adding a custom radio input to an event |
| additional-fields/text.php | The block for adding a custom text input to an event |
| additional-fields/textarea.php | The block for adding a custom textarea field to an event |
| additional-fields/url.php | The block for adding a custom URL input to an event |
| related-events.php | The container for related events |
| related-events/event-info.php | Displays the content for a related event |
| related-events/event-thumbnail.php | Displays the event thumbnail for a related event |
| related-events/event.php | The container for a related event |
| related-events/title.php | Displays the title of a related event |

---

