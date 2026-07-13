# Events Countdown Widget

*Category from The Events Calendar documentation*

---

## Using the Events Countdown Widget

**Source:** [https://docs.nexcess.com/software/the-events-calendar/events-countdown-widget/](https://docs.nexcess.com/software/the-events-calendar/events-countdown-widget/)

The Events Countdown widget is a handy little widget that allows you to select a published event from your calendar and display a clock that–you guessed it–counts down to the start date of the event. It’s a fun way to build anticipation for an event- and you can drop it into any sidebar.

This widget is a part of The Events Calendar Pro, so make sure that is [installed and activated](https://docs.nexcess.com/software/the-events-calendar/downloading-and-installing-the-plugin/) before we dive into the inner working of the Countdown widget. If you haven’t [gone Pro](https://theeventscalendar.com/product/wordpress-events-calendar-pro/) yet, you’ll need to do that before you can use this widget.

## Adding the Widget to a Sidebar

Now that you have The Events Calendar Pro installed and activated, the power of the Events Countdown widget has been unlocked and you can view it by heading to Appearance > Widgets from the WordPress dashboard. You should see **Events Countdown** as an available option, which you can then drag into any of your available sidebar areas.

And just like that, the Events Countdown widget has been added to the sidebar and can be viewed on the front end of our site.

![kb-widgets-countdown](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-widgets-countdown.jpg)

Pretty sweet for right out of the box, right? Let’s move on to see what settings are available.

## Widget Settings

There are a handful of options at your disposal to fine-tune the Events Countdown widget to suit a variety of needs.

- **Title:** This is an optional field that adds a text heading above the widget.
- **Type:** Choose whether you want the widget to countdown to the next upcoming event or to a specific event. If you select the Next Event option, then the widget will automatically start counting down to the next scheduled event once the first one has been reached.
- **Event:** This is a dropdown of all the published events on your calendar that are available to use in the widget. It might sound obvious, but past events are not listed because, well, there’s nothing to count down to.
- **Show Seconds:** This option allows you to hide the seconds digits from the widget. This is nice if you prefer something that isn’t constantly ticking down, or perhaps an event that is far off in the future.
- **Countdown Completed Text:** This is the text the displays after the countdown time has been reached. “Hooray!” is the default, but you can change that to anything you’d like.

You can see how updating some of these options can have a visual impact on the widget.

![kb-widgets-countdown-comparison](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-widgets-countdown-comparison.jpg)

## Embedding the Widget with a Shortcode

The countdown widget can be embedded with the following shortcode:

```
[tribe_event_countdown id="8192"]
```

Just like the featured venue shortcode, an ID or slug **must** be specified or it will not work. This shortcode optionally allows for two further arguments, the first of which is show seconds:

```
[tribe_event_countdown slug="new-year-2016" show_seconds="yes"]
```

This causes the number of seconds to be displayed. The other argument is the text to show once the event begins and the countdown is complete:

```
[tribe_event_countdown slug="joes-party" complete="Yee hah!"]
```

## Customizing the Widget

### Styling with CSS

You can apply custom CSS to the Events Countdown widget. The widget’s styles are part of 
```
tribe-events-pro.css
```

. To target the widget with your own CSS rules, use the base class:

```
.tribe-events-countdown-widget {
    /* your styles here */
}
```

For guidance on where to add custom CSS and how widget stylesheets work, see our [Customizing CSS](https://docs.nexcess.com/software/the-events-calendar/customize-css/) guide.

### Using Template Overrides

You can override the Events Countdown widget template if you want to customize things a little more. Check out our [Themer’s Guide](https://theeventscalendar.com/knowledgebase/k/themers-guide/) for a more thorough overview of how template overrides work, but here’s a brief example for this widget:

- Make a copy of the Events Countdown widget template. It’s located at */plugins/events-calendar-pro/src/views/v2/widgets/widget-countdown.php* and some specific parts are in the */plugins/events-calendar-pro/src/views/v2/widgets/widget-countdown* folder.
- Make a new folder in the (child-)theme directory called *tribe*
- Make a new folder in that one called *events-pro*
- Make a new folder in that one called *v2*
- Make a new folder in that one called *widgets*
- Drop the copied template file (or one more *widget-countdown* folder and then the file) into that last folder

Now that the template is in the theme files, you can modify it to suit your needs. For example, you can change the labels from Days, Hours, Min and Sec to DD, HH, MM, SS instead. Save the file and that change will take place on the front end.

![kb-widgets-countdown-override](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-widgets-countdown-override.jpg)

****

### Counting Down to the Event End Date

Would you like to count down to the event end date instead of the start date in the Events Countdown Widget? By using the following custom code snippet, you can adjust the countdown timer to point to the event’s end date.

🖥️ For more information on how to implement custom snippets, please visit our [guide](https://docs.nexcess.com/software/the-events-calendar/code-snippets/).

```
/**
 * Modify the event countdown variables to use the event's end date instead of the start date.
 *
 * This function adjusts the countdown variables in The Events Calendar Countdown Widget to count down to
 * the end date of an event instead of the start date. It will not change the variables if there is no event 
 * or if the event has already ended.
 *
 * @param array $vars The original template variables.
 * @return array Modified template variables.
 */
add_filter( 'tribe_events_views_v2_view_template_vars', function ( $vars ) {
    $event = tribe_get_event( get_the_ID() );
    $now = Tribe__Date_Utils::build_date_object( tribe_context()->get( 'now', 'now' ) )->setTimezone( new DateTimeZone( 'UTC' ) );
    $end_date_str = tribe_get_end_date( $event->ID, false, Tribe__Date_Utils::DBDATEFORMAT );
    $end_date = Tribe__Date_Utils::build_date_object( $end_date_str )->setTimezone( new DateTimeZone( 'UTC' ) );

    // Bail if there is no event.
    if ( !$event ) {
        return $vars;
    }

    // Bail if the end date has passed.
    if ( $end_date < $now ) {
        return $vars;
    }

    // Change the variables to point to the event's end date instead of the start date.
    $vars['count_to_date']  = $end_date_str;
    $vars['count_to_stamp'] = Tribe__Date_Utils::time_between( $vars['count_to_date'], $now->format( 'c' ) );
    $vars['event_done'] = 0;

    return $vars;
}, 11 );
```

---

