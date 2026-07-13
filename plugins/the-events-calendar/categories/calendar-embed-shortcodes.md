# Calendar Embed Shortcodes

*Category from The Events Calendar documentation*

---

## Add the Events Calendar to Pages with Shortcodes

**Source:** [https://docs.nexcess.com/software/the-events-calendar/calendar-embed-shortcodes/](https://docs.nexcess.com/software/the-events-calendar/calendar-embed-shortcodes/)

[Events Calendar Pro](https://theeventscalendar.com/products/wordpress-events-calendar/)‘s calendar shortcode gives you the ability to embed full calendar views in places *other than* the main calendar page. If you have a post or page on your site where shortcodes can be used, you can embed full calendar views there!

The shortcode that powers this functionality is [tribe_events]. In this article, we will cover the usage of this simple but powerful shortcode.

👋 **Note:** The [tribe_events] shortcode is *only* available with [Events Calendar Pro](https://theeventscalendar.com/products/wordpress-events-calendar/). Even for core plugin views that exist in The Events Calendar, you must have Events Calendar Pro activated on your site for the [tribe_events] shortcode to work. 
➡️ [See all shortcode options](https://docs.nexcess.com/software/the-events-calendar/shortcodes/)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/evergreen-ad-events-calendar-1024x384-1.png)

### The Default Shortcode

Once you are running The Events Calendar and Events Calendar Pro, you can add the shortcode [tribe_events] to any post or page on your site.

If you do not specify a view for this shortcode, then the calendar view that will display is the default calendar view from your wp-admin’s **Events → Settings → Display**options panel. On this settings panel, there is an option called Default view. If this is set to Month, for example, then any instance of the [tribe_events] shortcode that does not specify some other view will show the Month-view calendar. If the *Default view* option is set to *List*, then any basic [tribe_events] shortcode would generate an instance of the List View, and so on.

### Specifying Calendar Views

You may want to embed different views in different locations, and indeed one of the most useful things about the shortcode in the first place is the ability to do this—your main /events page could be the Month View grid calendar, but then you can embed List Views and Day Views on other pages as needed.

Specifying views is easy with the [tribe_events] shortcode—you simply use the view attribute.

So if you wanted to embed a List View calendar, you would use the shortcode [tribe_events view="list"]. Here is a full breakdown of the views that come standard with The Events Calendar and Events Calendar Pro:

- Month View → [tribe_events view="month"]
- List View → [tribe_events view="list"]
- Day View → [tribe_events view="day"]
- Photo View → [tribe_events view="photo"]
- Week View → [tribe_events view="week"]
- Map View → [tribe_events view="map"]
- Summary View → [tribe_events view="summary"]

### Common Shortcode Attributes for All Views

Some attributes for the [tribe_events] shortcode can be used across all event views. These are called “common” attributes. Here’s a look at each one:

**category**

- This attribute filters the shortcode view to only show events that are in the specified event category.
- Accepts multiple category slugs. You can find category slugs by heading to Events → Event Categories in your wp-admin, [as shown in this screenshot](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2016-09-09-at-2.46.09-PM.jpg).
- Example: [tribe_events view="list" category="barbecue"]

**exclude-category**

- This attribute removes a selected category from the displayed list of events.
- Requires either an ID or slug, does not accept category name.
- Example: [tribe_events exclude-category="cooking-school"]

**featured**

- This attribute filters the shortcode view to only show [Featured Events](https://docs.nexcess.com/software/the-events-calendar/featured-events/).
- Only accepts “true” or “false” or empty. Defaults to empty which means both will show.
- Example: [tribe_events view="list" tribe-bar="false" featured="true"]

**past**

- This attribute filters the shortcode view to only show Past Events.
- Accepts “yes”, “true”, “no”, or “false”. Defaults to “no” or “false”, which means the calendar will display unfiltered.
- Example: 
```
[tribe_events past="yes"]
```
- When enabled, displays events that have ended before the current date, ordered from newest to oldest using Month view.
- **Note:** It is important to mention, when using the past attribute, it is not possible to use the view attribute with any other view, such as ‘list’, ‘week’, ‘summary, etc., as past events default to the month view by design.

**date**

- By default, shortcode views render showing the “current” time—the current month in Month View, the current week in Week View, and so on.
- This attribute makes the shortcode views load the specified date, so that can you show a specific month, week, or day.
- *Month View*
- Allowed date formats: yyyy-mm-dd or yyyy-mm
- Month View will default to the given month if yyyy-mm-dd is used.
- Example: [tribe_events view="month" date="2016-08"]
- *Day View*
- Allowed date formats: yyyy-mm-dd only!
- If the yyyy-mm format is used, then the first day of the month will be loaded.
- Specific Date Example: [tribe_events view="day" date="2016-08-21"]
- Relative Date Example: [tribe_events view="day" date="today"]. “Now” and “Tomorrow” are also accepted values.
- *Week View*
- Allowed date formats: yyyy-mm-dd or yyyy-mm
- The week that contains the supplied date is what will be loaded.
- If the yyyy-mm format is used, then the week that contains the first day of the month will be loaded.
- Example: [tribe_events view="week" date="2016-08-21"]
- *List View, Photo View, Summary View, and Map View*
- Allowed date formats: yyyy-mm-dd or yyyy-mm
- If the yyyy-mm format is used, then the first day of the month will be loaded.
- Example: [tribe_events view="map" date="2016-08-21"]
- *Past Events*
- Can use the attribute yesterday to display the previous day’s events.
- Will also accept negative date attributes.
- Example: [tribe_events date="-3 days"]

**tribe-bar**

- This attribute turns the “Events Bar” on or off for the generated view. The Events Bar contains the basic search functionality of The Events Calendar views and the view switcher.
- Only accepts “true” or “false”. Defaults to “true”, which adds the Events Bar. “False” hides the bar.
- Example: [tribe_events view="list" tribe-bar="false"]

![Events Bar shortcode](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-04-29-at-9.16.15-AM.jpg)

**filter-bar**

- This attribute adds the Filter Bar to the embedded calendar.  You must have purchased the Filter Bar plugin in order for this option to work.
- By default, this option is set to “false”.  To display the filter bar, you can set this value to “true”.
- Example: [tribe_events filter-bar="true"]
- **Note**: if you use the shortcode parameter to hide the Events Bar, the Filter Bar will not show up, even if you use the shortcode parameter to enable it.

**keyword**

- This attribute adds a keyword argument to the embedded calendar shortcode.
- You can use this attribute to display events that have the keyword stated in the title and/or description of the event.
- Example: [tribe_events keyword="cabbage"]

**tag**

- This attribute filters the shortcode view to only show events that are in the specified tag.
- You can add multiple tags to the shortcode to display multiple tags at once.
- Example: [tribe_events view="list" tag="broccoli"]

**exclude-tag**

- This attribute removes a selected tag from the displayed list of events.
- Requires either an ID or slug, does not accept tag name.
- Example: [tribe_events exclude-tag="private-events"]

**tax-operand**

- This attribute allows for multiple categories and tags to display, either including all listed categories/tags or only including one
- Accepts the attribute AND and OR
- Example: [tribe_events view="list" tags="broccoli, cabbage" tax-operand="AND"] will display only events that have the category of broccoli, **AND** cabbage. Events that have only the category of ‘broccoli’ will not show, neither will events with only the category of  ‘cabbage’.
- Example: [tribe_events view="list" category="broccoli, cabbage" tax-operand="OR"] will display any events that have the category of broccoli, **OR** cabbage.

**author**

- This attribute allows you to filter events by event author
- Accepts the ID or name
- Does not autocomplete when adding the attribute
- Example: [tribe_events author="jaime"]

**venue**

- This attribute allows you to filter events by venue
- Accepts the ID or name
- Does not autocomplete when adding the attribute
- Example: [tribe_events venue="cooking-school"]

**organizer**

- This attribute allows you to filter events by event organizer
- Accepts the ID or name
- Does not autocomplete when adding the attribute
- Example: [tribe_events organizer="bob"]

### Event Display Limit Argument

This argument is available for Month View and all list-style views.

You can use this argument to limit the number of events displayed per day in Month View, which would look something like this:

[tribe_events month_events_per_day="5"]

For list-style views, this argument will control the number of events that display per page.  For example:

[tribe_events events_per_page="6"]

You can also specify the calendar view for this embedded calendar, so it can look something like this:

[tribe_events view="photo" events_per_page="6"]

If you do not specify a number of events to display with the shortcode, the number of events per page and day will honor the General and Display settings.

### A Note About Quotations

There is one important thing to keep in mind when using the [tribe_events] shortcode.

Simply make sure that if you use quotation marks in your shortcodes, they are only “straight quotes” and are not “curly quotes.” If you’re not sure what this means, then the simplest way to see the difference between the quotes is to look at a screenshot like this one:

![tribe_events_shortcode_error](https://docs.nexcess.com/wp-content/uploads/2026/06/tribe_events_shortcode_error.jpg)

☝️ In this screenshot, the top shortcode has a curly quote for its view attribute. This can cause numerous issues, so make sure that your shortcodes look like the bottom shortcode in the screenshot.

---

### Shortcodes and the WordPress Customizer

With the [CSS Custom Properties](https://docs.nexcess.com/software/the-events-calendar/custom-fields/), Customizer styles will impact both widgets and shortcodes. If you prefer to keep the Customizer out of your widget and shortcode styles, you can add [the code in this gist](https://gist.github.com/Camwyn/f18718b9e2514a47f6e6def0607facb3) to the “Additional CSS” section of the Customizer or a separate style sheet you load.

## Customization: Show Only Weekend Events in List View Shortcode

Sometimes you may want your events calendar to focus only on the weekend. For example, maybe you run classes or workshops every Saturday and Sunday, and you want a dedicated page that shows only those events.

With **Events Calendar Pro**, this can be done by modifying the query that powers the List View shortcode. In this guide, we’ll show you how to use the 
```
tribe_events_views_v2_view_repository_args
```

 filter so a **specific List View shortcode** only returns events that start on Saturday or Sunday of the current week.

#### How It Works

The 
```
tribe_events_views_v2_view_repository_args
```

 filter lets you change the arguments used to fetch events for any view in The Events Calendar. By checking the **shortcode ID**, you can apply the customization only to one shortcode and leave the rest of your site unchanged.

The code snippet below calculates the start and end of the current weekend, then restricts the query to only include events that start between **Saturday 00:00:00 and Sunday 23:59:59**. You can add this snippet in your child theme’s **functions.php** or via [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin.

```
/**
 * Show only weekend events (Saturday & Sunday) in a specific List View shortcode.
 */
add_filter( 'tribe_events_views_v2_view_repository_args', 'my_weekend_repo_args', 10, 2 );
function my_weekend_repo_args( $rep_args, $context ) {
	$shortcode_id = '24f53d40'; // Replace with your shortcode ID

	// Only run for the correct shortcode
	if ( empty( $context->get( 'shortcode' ) ) || $context->get( 'shortcode' ) !== $shortcode_id ) {
		return $rep_args;
	}

	// Use site timezone
	$tz = wp_timezone();

	// Calculate weekend range (Saturday 00:00:00 to Sunday 23:59:59 this week)
	$weekend_start = new DateTime( 'saturday this week 00:00:00', $tz );
	$weekend_end   = new DateTime( 'sunday this week 23:59:59', $tz );

	// Apply weekend range to repository arguments
	$rep_args['start_date'] = $weekend_start->format( 'Y-m-d H:i:s' );
	$rep_args['end_date']   = $weekend_end->format( 'Y-m-d H:i:s' );

	// Keep ordering predictable
	$rep_args['orderby'] = 'event_date';
	$rep_args['order']   = 'ASC';

	// Optional: set posts per page if not already defined
	if ( empty( $rep_args['posts_per_page'] ) ) {
		$rep_args['posts_per_page'] = tribe_get_option( 'postsPerPage', 10 );
	}

	return $rep_args;
}
```

#### Finding Your Shortcode ID

Each List View shortcode in The Events Calendar has a unique ID. To find it:

1. Add a List View shortcode to a post or page.
2. Inspect the page source in your browser.
3. Look for the 
```
data-view-shortcode
```

 attribute inside the List View wrapper.
4. Copy that ID and replace 
```
24f53d40
```

 in the code above on line 6 with your shortcode’s ID.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/shortcode_id.png)

#### Example Use Case

- You create a page called **Weekend Events**.
- Add a 
```
[tribe_events view="list"]
```

 shortcode to the page.
- Copy the shortcode’s unique ID and add it to the code snippet.
- Now, that page will only display events that **start on Saturday or Sunday of the current week**.

This creates a clean, dedicated weekend schedule while leaving your main calendar and other shortcodes unaffected.

#### Optional Enhancements

- **Future weekends**: You can adjust the DateTime strings (
```
saturday next week
```

, 
```
sunday next week
```

) if you want to show events from upcoming weekends.
- **Multi-day events**: If you want to include events that overlap the weekend even if they start earlier, you’ll need a slightly different query that checks both start and end dates.

#### Conclusion

By customizing repository arguments with 
```
tribe_events_views_v2_view_repository_args
```

, you can display only weekend events in a specific List View shortcode. This ke

---

