# Featured Events

*Category from The Events Calendar documentation*

---

## Using Featured Events

**Source:** [https://docs.nexcess.com/software/the-events-calendar/featured-events/](https://docs.nexcess.com/software/the-events-calendar/featured-events/)

There’s a setting in The Events Calendar editor that allows you to “feature” an event. Featuring an event gives it a more prominent appearance in the calendar.

For example, here’s a featured event in the calendar’s month view:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/CleanShot-2024-10-09-at-10.16.35@2x-1024x210-1.jpg)A featured event displays the event’s featured image and is marked in blue.

And here it is in list view:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/list-featured-1024x678-1.png)

---

## Featuring an event

Feature an event by selecting the “Feature Event” setting in the Event Options section of the post editor.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/admin-editor-featured-1024x736-1.png)The setting is under “Event Options” in the post editor.

There’s nothing else you need to do to feature the event. Once the post is saved, The Events Calendar will take care of making the event stand out on the calendar.

---

## Styling featured events

When an event is featured, the plugin adds a special CSS class to the event based on the view is in.

For example, in month view, the featured event class is 
```
.tribe-events-calendar-month__calendar-event--feature
```

. This can be used to style featured events that are displayed in month view.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/month-devtools-featured-1024x485-1.png)Notice that the event actually has a lot of classes, with the featured class being among them.

Here are all the classes for featured events and the views they apply to.

| Calendar View | CSS Classname | What it Does |
| --- | --- | --- |
| All Views | .tribe-common-svgicon--featured | Provides the background image for the icon of a featured event. |
| List View | tribe-events-calendar-list__event-row--featured | Styles the parent wrapper of a featured event in the calendar’s list view. |
|  | .tribe-events .tribe-events-calendar-list__calendar-event--featured:before | Provides the blue border of a featured event in list view. |
|  | tribe-events-calendar-list__event-featured-image-wrapper | Styles around the featured image in list view. |
|  | tribe-events-calendar-list__event-featured-image | Styles the featured image of a featured event in list view. |
|  | tribe-events-calendar-list__event-featured-image-link | Styles the link of a featured image for a featured event in list view. |
|  | tribe-events-calendar-list__event-datetime-featured-icon | Positions the icon for a featured event in list view. |
|  | tribe-common-svgicon--featured | Sets the background image that is used for the icon of a featured event. |
|  | tribe-events-calendar-list__event-datetime-featured-text | Sets the text style for the “Featured” label next to the icon of a featured image in list view. |
| Month View | tribe-events-calendar-month__calendar-event--featured | Styles the parent wrapper for a featured event in the calendar’s month view. |
|  | .tribe-events .tribe-events-calendar-month__calendar-event--featured:before | Provides the blue border of a featured event in month view. |
|  | tribe-events-calendar-month__calendar-event-featured-image-wrapper | Styles around the featured image in month view. |
|  | tribe-events-calendar-month__calendar-event-featured-image-link | Styles the link of a featured image for a featured event in month view. |
|  | .tribe-events .tribe-events-calendar-month__calendar-event-featured-image | Styles the featured image of a featured event in the calendar’s month view. |
|  | tribe-events-calendar-month__calendar-event-datetime-featured-icon | Positions the icon of a featured image in month view. |
| Week View | tribe-events-pro-week-grid__event--featured | Styles the parent wrapper of a featured event in the calendar’s week view. |
|  | tribe-events-pro-week-grid__event-featured-image-wrapper | Styles around the featured image of a featured event in week view. |
|  | tribe-events-pro-week-grid__event-featured-image | Styles the featured image of a featured event in week view. |
|  | tribe-events-pro-week-grid__event-datetime-featured-icon | Positions the icon for a featured event in week view. |
| Day View | tribe-events-calendar-day__event--featured | Styles the parent wrapper of a featured event in the calendar’s day view. |
|  | .tribe-events .tribe-events-calendar-day__calendar-event--featured:before | Provides the blue border of a featured event in day view. |
|  | tribe-events-calendar-day__event-featured-image-wrapper | Styles around the featured image in day view. |
|  | tribe-events-calendar-day__event-featured-image-link | Styles the link of a featured image for a featured event in day view. |
|  | tribe-events-calendar-day__event-featured-image | Styles the featured image of a featured event in day view. |
|  | tribe-events-calendar-day__event-datetime-featured-text | Sets the text style for the “Featured” label next to the icon of a featured image in day view. |
| Photo View | tribe-events-pro-photo__event--featured | Styles the parent wrapper of a featured event in the calendar’s photo view. |
|  | tribe-events-pro-photo__event-featured-image-wrapper | Styles around the featured image in photo view. |
|  | tribe-events-pro-photo__event-featured-image-link | Styles the link of a featured image for a featured event in photo view. |
|  | tribe-events-pro-photo__event-featured-image | Styles the featured image of a featured event in photo view. |
|  | tribe-events-pro-photo__event-datetime-featured-icon | Positions the icon for a featured event in photo view. |
|  | tribe-events-pro-photo__event-datetime-featured-text | Sets the text style for the “Featured” label next to the icon of a featured image in photo view. |
| Map View | tribe-events-pro-map__event-card-wrapper--featured | Styles the parent wrapper of a featured event in the calendar’s map view. |
|  | tribe-events-pro-map__event-datetime-featured-icon | Positions the icon of a featured image in month view. |
|  | tribe-events-pro-map__event-datetime-featured-text | Sets the text style for the “Featured” label next to the icon of a featured image in map view. |

Not sure how to use these classes in your theme’s CSS? Check out our [CSS guide](https://docs.nexcess.com/software/the-events-calendar/customize-css/) for more information.

### Featured events in Filter Bar

If you have our Filter Bar add-on installed, then it gives you the option to add a filter for featured events:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/fb-admin-featured-events-1024x758-1.png)Featured events become an available filter when the Filter Bar add-on is installed.

Enabling the filter activates it in the calendar, allowing users to filter the calendar to display only featured events.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-07-02-at-11.00.56-AM-1024x677-1.jpg)

---

