# Customize Map View

*Category from The Events Calendar documentation*

---

## Customizing Map View

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-map-view/](https://docs.nexcess.com/software/the-events-calendar/customize-map-view/)

Map View in Events Calendar Pro displays your events as an interactive map, pairing geographic visualization with event details. If you’d like to adjust how events appear or how the view behaves, a small snippet can help. This article collects Map View customizations that go beyond what the standard settings allow.

## Changing the Number of Events per Page on Map View

The Map View in [Events Calendar Pro](https://theeventscalendar.com/products/wordpress-events-calendar/) provides an interactive platform to display your events, combining geographical visualization with event details.

By default, the number of events displayed per page in this view is determined by the setting found under **Events > Settings > Display > Calendar tab > Number of events to show per page**. Adjusting this setting allows you to control how many events are listed per page across various views, including the Map View. However, there may be instances where you want the Map View to display a different number of events per page than other views. Adding the following snippet to your site does the exact thing for you:

```
add_filter( 'tribe_events_views_v2_map_view_context', function( $context ) {
	// Change this number to the amount of events you want per page on Map View.
	return $context->alter( [ 'events_per_page' => 4 ] );
} );
```

That’s all. With the code above, Map View loads 4 events per page and paging with Next still reaches every event. Other views keep using the Number of events to show per page setting.

---

*Snippets reviewed and updated October 2026*

---

