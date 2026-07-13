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
// Increase/Decrease Events Shown in Map View 
add_filter( 'tribe_events_views_v2_view_map_repository_args', function( $args, $context ) { 
$args['posts_per_page'] = 4 ;// Change this number to your choice 
return $args; 
}, 10, 2);
```

That’s all, by implementing the above code, 4 events per page will be loaded on Map View.

---

