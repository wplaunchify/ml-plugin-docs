# Divi Theme

*Category from The Events Calendar documentation*

---

## Using the Divi Theme with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/divi-theme/](https://docs.nexcess.com/software/the-events-calendar/divi-theme/)

Divi is a popular WordPress theme and page builder by [Elegant Themes](https://www.elegantthemes.com/). It works with The Events Calendar, and this article covers everything from installation and initial setup through styling, compatibility fixes, and advanced customizations.

#### What You Need

- [The Events Calendar](https://wordpress.org/plugins/the-events-calendar/) (free) — the base calendar plugin for publishing and displaying events.
- [Event Tickets](https://wordpress.org/plugins/event-tickets/) (free, optional) — adds ticket and RSVP functionality to events, pages, and posts.
- [Divi from Elegant Themes](https://www.elegantthemes.com/gallery/divi/) — the theme itself.
- [Divi Events Calendar](https://www.peeayecreative.com/product/divi-events-calendar/) by Pee-Aye Creative (optional, third-party) — a premium add-on that provides dedicated Divi modules for event features, enabling tighter integration between the builder and The Events Calendar.

## Installation

Installing Divi alongside The Events Calendar follows the same process as any other WordPress theme and plugin combination. [Install both](https://docs.nexcess.com/software/the-events-calendar/downloading-and-installing-the-plugin/) as you normally would, and you get a working calendar out of the box.

![The default Month View calendar displayed on a site using the Divi theme](https://docs.nexcess.com/wp-content/uploads/2026/06/divi-calendar-month-default.jpg)

The default calendar URL is 
```
/events
```

, which can be changed in the plugin settings.

## Setup and Customizer Settings

The Events Calendar offers extensive [customization options for views and events](https://docs.nexcess.com/software/the-events-calendar/customization/). When Divi is active, some of those options are also controllable via the WordPress Customizer, which Divi integrates with directly.

Divi’s Customizer settings that affect the calendar include:

- **General Settings → Layout:** Enable Boxed Layout
- **General Settings → Typography:**
- Header Text Size
- Header Font
- Body Link Color
- Body Text Color
- Header Text Color

For a full overview of TEC’s own Customizer settings, see [The Events Calendar WordPress Customizer](https://docs.nexcess.com/software/the-events-calendar/wordpress-customizer-events/).

## Styling with Divi

By default, TEC outputs its calendar using its own templates and stylesheets. Styling is controlled primarily through the Customizer and CSS — not through Divi’s visual builder directly. There are two main approaches to styling the calendar in a Divi site.

#### Option 1: Divi Events Calendar Add-On

The [Divi Events Calendar plugin by Pee-Aye Creative](https://www.peeayecreative.com/product/divi-events-calendar/) adds custom Divi modules — including a calendar, event feed, carousel, filters, and single event pages — each with extensive design controls inside the builder. It provides hundreds of styling options: borders, spacing, typography, colors, and layout.

To get started with this add-on:

1. Install and activate Divi Events Calendar after The Events Calendar.
2. Open the Divi Builder and add the desired module (e.g., Events Calendar, Events Feed).
3. Configure the **Content** tab: filter by category, date range, thumbnails, virtual events, and more.
4. Use the **Design** tab to adjust typography, borders, tooltips, hover effects, spacing, and colors.

For single-event page control, use the **Events Page** module with a Divi Theme Builder template. Each event populates dynamically using that layout. [View the demo.](https://divieventscalendar.com/modules/events-page/)

#### Option 2: Custom CSS

Whether you’re using Divi modules or TEC’s default templates, fine-grained appearance adjustments can always be made with CSS. See [Customizing CSS with The Events Calendar](https://docs.nexcess.com/software/the-events-calendar/customize-css/) and [Calendar View CSS Classes](https://theeventscalendar.com/knowledgebase/working-with-view-classes/) for reference.

## Fixing Compatibility Issues

### Use the Classic Editor

For the best compatibility between Divi and The Events Calendar, we recommend using the Classic Editor for events. When the Block Editor is active alongside Divi, some event post settings become unavailable. You can enable the Classic Editor by going to **Events → Settings → General** and making sure the **Activate Block Editor for Events** option is unchecked.

![The Events Calendar General settings screen with the Block Editor option unchecked](https://docs.nexcess.com/wp-content/uploads/2026/06/tec-admin-settings-cgeneral-classic-editor.jpg)

💡 If you use the Divi Events Calendar add-on to build event content in Divi Builder, you don’t need to enable the Classic Editor — you can leave the Block Editor setting as-is and use Divi Builder to create events as you would any other page or post.

### Disable jQuery Compatibility Script

Make sure the **Enqueue jQuery Compatibility Script** setting under **Divi → Theme Options → Performance** is **disabled**.

![The Divi Performance tab showing the jQuery Compatibility Script option that should be disabled](https://docs.nexcess.com/wp-content/uploads/2026/06/image-3-7.jpg)

### Fix Attendee Registration Layout Issues

If you’re experiencing layout problems on the attendee registration page, disable **Dynamic CSS** under **Divi → Theme Options → Performance**.

### Fix Calendar Template Issues

In some cases, the calendar’s default template may not load properly — events appear like regular blog posts rather than in Month or List view format. To resolve this, go to **Divi → Theme Builder**, temporarily disable all current templates, then re-enable them. This flushes Divi’s template hierarchy and reinitializes both Divi’s and TEC’s templates correctly.

## Creating Events

The recommended approach is to use the Classic Editor when creating events in Divi, as described in the compatibility section above. This preserves all available event post settings.

If you prefer to use Divi Builder for event content, the [Divi Events Calendar add-on](https://divieventscalendar.com/modules/events-page/) by Pee-Aye Creative extends the builder with dedicated event modules and elements, removing the need to switch to the Classic Editor.

## Adding an “Add to Calendar” Button

When Divi Builder is used to build single event pages, TEC’s native “Add to Calendar” button doesn’t appear — Divi uses its own template for single events, which doesn’t include it. There are two ways to add the button back.

#### Option 1: Divi Events Calendar Add-On

The [Divi Events Calendar Module by Elegant Themes](https://www.elegantthemes.com/marketplace/divi-events-calendar-module/) provides built-in support for calendar buttons and other event features within the builder.

#### Option 2: Custom Google Calendar Shortcode

If you prefer not to use the add-on, you can create a Google Calendar button manually using a custom shortcode.

**Step 1: Add the Shortcode Function**

Install and activate the [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin, then add and activate the following snippet:

```
function custom_add_to_calendar_button_auto() {
    $event_id = get_the_ID();

    if ( ! $event_id || get_post_type( $event_id ) !== 'tribe_events' ) {
        return '';
    }

    $title       = get_the_title( $event_id );
    $start       = tribe_get_start_date( $event_id, false, 'YmdTHis' );
    $end         = tribe_get_end_date( $event_id, false, 'YmdTHis' );
    $location    = tribe_get_venue( $event_id );
    $description = get_the_excerpt( $event_id );

    $google_calendar_url = "https://calendar.google.com/calendar/render?action=TEMPLATE"
        . "&text="     . urlencode( $title )
        . "&dates="    . $start . "/" . $end
        . "&details="  . urlencode( $description )
        . "&location=" . urlencode( $location )
        . "&sf=true&output=xml";

    ob_start(); ?>
    
        Add to Calendar
```

**Step 2: Add the Shortcode to Your Divi Template**

In your Divi single event template, add a Code module or Text module containing the following shortcode wherever you want the button to appear:

```
[add_to_calendar_auto]
```

This renders a styled “Add to Calendar” link that opens Google Calendar pre-filled with the event’s title, dates, location, and description.

## Post Navigation by Event Date

Divi’s [Post Navigation Module](https://www.elegantthemes.com/modules/post-navigation/) uses the post’s published date to determine previous and next event order. If you publish events out of chronological order (for example, publishing a December event before a November event), the navigation can appear random or out of sequence.

The Events Calendar uses the event’s start date for its own navigation. The following snippet hooks into WordPress’s standard navigation filters to override Divi’s Post Navigation Module, sorting adjacent events by event start date (
```
_EventStartDate
```

) instead of publish date.

```
add_filter( 'get_previous_post_join', 'my_tec_adjacent_events_join', 10, 2 );
add_filter( 'get_next_post_join', 'my_tec_adjacent_events_join', 10, 2 );

/**
 * Join event start date meta for adjacent post queries on events.
 */
function my_tec_adjacent_events_join( $join, $in_same_term ) {
    if ( ! is_singular( 'tribe_events' ) ) {
        return $join;
    }

    global $wpdb;

    $meta_join = " LEFT JOIN {$wpdb->postmeta} AS tec_mt ON (tec_mt.post_id = p.ID AND tec_mt.meta_key = '_EventStartDate') ";

    if ( strpos( $join, "tec_mt.meta_key = '_EventStartDate'" ) !== false ) {
        return $join;
    }

    return $join . $meta_join;
}

add_filter( 'get_previous_post_where', 'my_tec_adjacent_events_where_previous', 10, 2 );

/**
 * Adjust WHERE for previous event based on event start date.
 */
function my_tec_adjacent_events_where_previous( $where, $in_same_term ) {
    if ( ! is_singular( 'tribe_events' ) ) {
        return $where;
    }

    $event_date = get_post_meta( get_the_ID(), '_EventStartDate', true );
    if ( empty( $event_date ) ) {
        return $where;
    }

    $where = preg_replace(
        "/p.post_dates*<s*'[^']*'/",
        "tec_mt.meta_value < '{$event_date}'",
        $where
    );

    if ( strpos( $where, 'tec_mt.meta_value IS NOT NULL' ) === false ) {
        $where .= " AND tec_mt.meta_value IS NOT NULL";
    }

    return $where;
}

add_filter( 'get_next_post_where', 'my_tec_adjacent_events_where_next', 10, 2 );

/**
 * Adjust WHERE for next event based on event start date.
 */
function my_tec_adjacent_events_where_next( $where, $in_same_term ) {
    if ( ! is_singular( 'tribe_events' ) ) {
        return $where;
    }

    $event_date = get_post_meta( get_the_ID(), '_EventStartDate', true );
    if ( empty( $event_date ) ) {
        return $where;
    }

    $where = preg_replace(
        "/p.post_dates*>s*'[^']*'/",
        "tec_mt.meta_value > '{$event_date}'",
        $where
    );

    if ( strpos( $where, 'tec_mt.meta_value IS NOT NULL' ) === false ) {
        $where .= " AND tec_mt.meta_value IS NOT NULL";
    }

    return $where;
}

add_filter( 'get_previous_post_sort', 'my_tec_adjacent_events_sort_previous' );

/**
 * Sort previous event by event start date DESC.
 */
function my_tec_adjacent_events_sort_previous( $sort ) {
    if ( ! is_singular( 'tribe_events' ) ) {
        return $sort;
    }
    return ' ORDER BY tec_mt.meta_value DESC LIMIT 1';
}

add_filter( 'get_next_post_sort', 'my_tec_adjacent_events_sort_next' );

/**
 * Sort next event by event start date ASC.
 */
function my_tec_adjacent_events_sort_next( $sort ) {
    if ( ! is_singular( 'tribe_events' ) ) {
        return $sort;
    }
    return ' ORDER BY tec_mt.meta_value ASC LIMIT 1';
}
```

Add this snippet to your child theme’s 
```
functions.php
```

 file or via a dedicated code snippets plugin. See [Best Practices for Implementing Custom Code Snippets](https://docs.nexcess.com/software/the-events-calendar/code-snippets/) for guidance.

---

