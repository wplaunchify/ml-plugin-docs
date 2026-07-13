# Customize Day View

*Category from The Events Calendar documentation*

---

## Customizing Day View

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-day-view/](https://docs.nexcess.com/software/the-events-calendar/customize-day-view/)

Day View displays all of the events scheduled for a single day. If the default layout doesn’t quite fit your site, small adjustments to the template can change how individual events appear and behave.

## Open Event Links in New Tab

Template file: 
```
/wp-content/plugins/the-events-calendar/src/views/v2/day/event/title.php
```

Override the above file with the following content, which inserts 
```
target="_blank"
```

 after the 
```
href
```

 attribute of the 
```
<a>
```

 element.

```
<h3 class="tribe-events-calendar-day__event-title tribe-common-h6 tribe-common-h4--min-medium">
	<a
		href="<?php echo esc_url( $event->permalink ); ?>"
		target="_blank"
		title="<?php echo esc_attr( $event->title ); ?>"
		rel="bookmark"
		class="tribe-events-calendar-day__event-title-link tribe-common-anchor-thin"
	>
		<?php
		// phpcs:ignore
		echo $event->title;
		?>
	</a>
</h3>
```

---

