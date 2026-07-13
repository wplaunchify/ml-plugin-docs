# Duplicate Events

*Category from The Events Calendar documentation*

---

## How to Duplicate Events

**Source:** [https://docs.nexcess.com/software/the-events-calendar/duplicate-events/](https://docs.nexcess.com/software/the-events-calendar/duplicate-events/)

Events Calendar Pro allows you to duplicate any event from the WordPress dashboard, creating an exact copy you can then modify before publishing. This is useful when you run similar recurring events that don’t use the built-in recurrence feature, or when you want to reuse an event’s details as a starting point for a new one.

💡 This feature requires [Events Calendar Pro](https://theeventscalendar.com/products/wordpress-events-calendar-pro/).

## How to Duplicate an Event

### From the Admin Events List

Go to **Events** in the WordPress dashboard and hover over the event you want to duplicate. A **Duplicate** link will appear alongside the other row actions.

![The Events admin list with the Duplicate link visible on hover](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-05-06-at-1.05.57-PM.jpg)

Clicking **Duplicate** takes you directly to the editor for the new copy, where you can make changes before publishing.

### From the Event Editor

You can also duplicate an event while editing it. The **Duplicate Event** button appears at the top of the event editor page.

![The Duplicate Event button in the event editor](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-05-06-at-1.13.31-PM-1024x364-1.jpg)

Clicking it opens the duplicated event in a new editor window, where you can adjust details before publishing.

## Important Notes

- This feature is only available with Events Calendar Pro.
- When an event is duplicated, any tickets attached to that event are also duplicated by default. See the section below if you want to prevent this.
- If you duplicate a recurring event, the additional recurrence occurrences won’t be generated until you save the duplicate.
- Having many events with identical or near-identical content can have SEO implications. See [How Recurring Events Can Impact Your SEO Results (And How to Improve That)](https://theeventscalendar.com/blog/tips/how-recurring-events-can-impact-your-seo-results-and-how-to-improve-that/) for guidance.

## Duplicating Events Without Copying Tickets

By default, duplicating an event also duplicates its tickets. If you want to create a copy of the event without copying the tickets — for example, to set up fresh ticket stock for a new date — you can suppress ticket duplication with the following snippet.

Add it to your child theme’s 
```
functions.php
```

 file or via the [Code Snippets](https://docs.nexcess.com/software/the-events-calendar/code-snippets/) plugin:

```
<?php //Do not copy this line

add_action( 'tec_events_pro_custom_tables_v1_after_duplicate_event', function () {
	if ( class_exists( 'TECTicketsIntegrationsPluginsEvents_ProDuplicate_Post' ) ) {
		$duplicate_post_instance = Tribe( TECTicketsIntegrationsPluginsEvents_ProDuplicate_Post::class );
		if ( $duplicate_post_instance ) {
			remove_action( 'tec_events_pro_custom_tables_v1_after_duplicate_event', [
				$duplicate_post_instance,
				'duplicate_tickets_to_new_post'
			] );
		}
	}
}, 9 );
```

---

