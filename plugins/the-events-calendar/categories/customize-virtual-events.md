# Customize Virtual Events

*Category from The Events Calendar documentation*

---

## Customizing Virtual Events

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-virtual-events/](https://docs.nexcess.com/software/the-events-calendar/customize-virtual-events/)

The Virtual Events add-on turns any event into an online or hybrid event, with built-in support for Zoom, Google Meet, Microsoft Teams, and other platforms. You may want to adjust how virtual event information is captured, displayed, or linked across your calendar. This article collects customizations for virtual events.

## Hiding Virtual Event Content After the Event is Over

When hosting virtual events, you will have the option to show livestream links (Zoom, webinar, etc.) on the event page. The content of the page is visible from the time of publishing or from the start of the event until the ends of time.

If you would rather have that part of the content disappear after the event is over, that’s also possible. You need a tiny [template override](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/) for it. In this example, you will see how to hide the content of a Zoom call after the event has passed.

You will need to create a template override for this file:

```
wp-content/plugins/events-pro/src/views/zoom/single/zoom-details.php
```

Take that file and make a copy of it here:

```
wp-content/themes/[your-child-theme]/tribe/events-virtual/zoom/single/zoom-details.php
```

Open up the file for editing, and right before the HTML code starts – before the first 
```
<div
```

 – add this line:

```
<?php if ( ! tribe_is_past_event() ) : ?>
```

The beginning of the file should look something like this now. *(Note, the line numbers are approximate.)*

```
// Remove the query vars from the zoom URL to avoid too long a URL in display.
if ( ! empty( $event->zoom_join_url ) ) {
	$short_zoom_url = implode(
		'',
		array_intersect_key( wp_parse_url( $event->zoom_join_url ), array_flip( [ 'host', 'path' ] ) )
	);
}
?>
<?php if ( ! tribe_is_past_event() ) : ?>
<div class="tribe-events-virtual-single-zoom-details tribe-events-single-section tribe-events-event-meta tribe-clearfix">
```

Now at the very end, after the last 
```
</div>
```

 in the file add this:

```
<?php endif; ?>
```

So the end of the file should look something like this:

```
</ul>
			</div>
		</div>
	<?php endif; ?>
</div>
<?php endif; ?>
```

Save the changes to the file and you should be set.

If you would like to achieve something similar with your embedded video content, then you will need a template override for this file:

```
wp-content/plugins/events-pro/src/views/single/video-embed.php
```

The file for the “Watch” button would be this one:

```
wp-content/plugins/events-pro/src/views/components/link-button.php
```

---

