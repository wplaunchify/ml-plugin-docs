# Showing Events Using The Kadence Post Grid Carousel Block

*Category from Kadence Blocks - PRO Extension documentation*

---

## How to Show Events Using the Kadence Post Grid/Carousel Block

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/showing-events-using-the-kadence-post-grid-carousel-block/](https://www.kadencewp.com/help-center/docs/kadence-blocks/showing-events-using-the-kadence-post-grid-carousel-block/)

The Kadence [Post Grid/Carousel block](https://docs.nexcess.com/software/kadence/post-grid-carousel-block/) has filters and hooks that allow you to customize the output of the block. In this guide, we’ll create a carousel showing **upcoming** **events** that are sorted by date and also customize the block output to show the event date and time. This example uses [The Events Calendar](https://theeventscalendar.com/) plugin.

![Post Grid/Carousel showing upcoming events](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2025-06-16-at-3.41.36-PM-1024x390-1.png)

**Note:**  If you’re not familiar with adding custom PHP snippets to your site, please see [this document](https://docs.nexcess.com/software/kadence/blocks/add-custom-filter-or-function-with-code-snippets/).

Creating a Post Grid/Carousel for Events

Select your settings to show Events:

1. **Select Posts Type** – Select Events.
2. **Select Posts By**–  Select Query.
3. **Order By** – since we’ll be overriding this with our snippet, this setting is irrelevant.
4. **Number of Items** – Select the number of events to display.
5. **Offset Starting Post** – Leave at “0” to start with the most recent event.
6. **Select Taxonomy** – Choose an event taxonomy or leave blank for all events.
7. **Layout Settings** – Choose Grid, Carousel, or Masonry layout. Then, configure the relevant settings for further layout control.

![Post Grid/Carousel settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2025-06-16-at-3.49.18-PM-426x1024-1.png)

![Post Grid/Carousel - Layout Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2025-06-16-at-3.59.18-PM.png)

Sort Events and Only Show Future Events

The following PHP snippet accomplishes two key functions. First, we’ll make sure we only show future events by comparing the event start date with today’s date. Second, we’ll order the events by start date in ascending order.

```
// Custom event order and limit to future events in the Post Grid/Carousel block
add_filter('kadence_blocks_pro_posts_grid_query_args', function( $args, $atts ){
	if ( 'tribe_events' == $args['post_type'] ){
		$args['meta_query'] = array(
			array(
				'key' => '_EventStartDate',
				'compare' => '>=',
				'value' => date('Y-m-d H:i:s'),
				'type' => 'DATETIME',
			),
		);
		$args['meta_key'] = '_EventStartDate';
		$args['orderby'] = 'meta_value';
		$args['order'] = 'ASC';
		$args['meta_type'] = 'DATETIME';
	}
	return $args;
}, 10, 2 );
```

Adding an Event Date to Each Event

To ensure we only add dates to Post Grid/Carousel blocks that are showing events, we’ll add a class to the block.  In the block settings, click on the **Advanced** tab and scroll down to the **Advanced** section.  Under **Additional CSS class(es)**, add the class:  **event-dates**

Next, we’ll add the following PHP snippet. This snippet will check for the **event-dates** class and add the event date, if applicable. Setting the action priority to **25** will output the date immediately following the event title.

```
add_action('kadence_blocks_post_loop_header', function( $atts ) {
	global $post;
	if ( isset($atts['className']) && strpos( $atts['className'], 'event-dates' ) !== false ){
		echo tribe_events_event_schedule_details( $post->ID, '<div>', '</div>' );
	}
}, 25 );
```

---

