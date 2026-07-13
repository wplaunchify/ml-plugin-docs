# Multiple Calendars

*Category from The Events Calendar documentation*

---

## Displaying Multiple Calendars by Category

**Source:** [https://docs.nexcess.com/software/the-events-calendar/multiple-calendars/](https://docs.nexcess.com/software/the-events-calendar/multiple-calendars/)

We’re often asked if you can have multiple event calendars on your site. While there isn’t a way to make fully separate calendars on one site, **you can show calendars on multiple pages on your site using Event Calendar Pro’s [tribe_events] shortcode**. To learn how to use this shortcode, check out [the official documentation page](https://docs.nexcess.com/software/the-events-calendar/calendar-embed-shortcodes/).

You can also use our [event widgets](https://docs.nexcess.com/software/the-events-calendar/events-calendar-widgets/) to embed event displays in your site’s sidebar, footer, or pages.

## Displaying separate calendars using event categories

You can approximate the *appearance* of having multiple calendars by using Event Categories and linking to category-filtered calendar views.

As an example, let’s say you’re trying to have one event calendar for events in the “Outdoors” category, and then another calendar for events in the “Indoors” category. To make the illusion of each being its own separate calendar, you would do the following steps:

1. Make all “Outdoors” events belong to the “Outdoors” events category.
2. Make all “Indoors” events belong to the “Indoors” events category.
3. Head to Appearance → Menus.
4. Under *Add menu items*, select *Event Categories.*(If you don’t see that option, make sure it is selected in your Screen Options)
5. Add event category links to the event categories you created.
6. Once you add the appropriate menu links to the event categories, click “Save Menu.”

![](https://docs.nexcess.com/wp-content/uploads/2026/06/event-category-menu-links-example.jpg)

In this example, you will now have two links in the site’s navigation menu. One will link to “Outdoor Events”, which is **the normal calendar view but only with events in the “Outdoors” category showing**. The other will link to “Indoor Events”, and when clicked will link to the same calendar view, but *only* with events in the “Indoors” category showing. So, while still technically *one* calendar, the different category archive pages make it appear that the Indoors events and Outdoors events exist on separate calendars.

Another great alternative is using the [Filter Bar plugin](https://theeventscalendar.com/products/wordpress-calendar-filter-bar/), which lets you have filters in your main calendar page, and then filter events by Event Category.

You can see a demonstration using the Filter bar on our [demo calendar page](https://demo.theeventscalendar.com/), where the Filter bar is present as the left sidebar on the Events page.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/events-page-category-filter-scaled-1.jpg)

---

