# Template Filters Hooks Actions

*Category from The Events Calendar documentation*

---

## Using Template Filters, Hooks, and Actions with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/template-filters-hooks-actions/](https://docs.nexcess.com/software/the-events-calendar/template-filters-hooks-actions/)

The Events Calendar’s template system provides several PHP entry points for injecting content into, modifying, or completely bypassing the default calendar templates — without editing the template files themselves. This article covers all three layers: before/after hooks, output filters, and the template hierarchy filter.

All of these techniques work with the [Tribe__Template](https://docs.theeventscalendar.com/reference/classes/Tribe__Template/) class, which handles locating template files, passing context variables, and triggering hooks and filters each time a template is loaded.

## Before and After Hooks

Every calendar view template has a 
```
before
```

 and 
```
after
```

 hook that lets you insert custom HTML either above or below the template without modifying the file. The hook name follows this pattern:

- ```
tribe_template_before_include:events/v2/{template-path}
```
- ```
tribe_template_after_include:events/v2/{template-path}
```

The three arguments passed to the callback are 
```
$file
```

 (the full template path as a string), 
```
$name
```

 (the template name as an array of path parts), and 
```
$template
```

 (the current 
```
Tribe__Template
```

 instance). You won’t need to work with these in most cases.

### Example: Adding Event Author Below the Title

We’ll use 
```
tribe_template_before_include
```

 to display the event author below the title, above the venue information, in List view.

![The List view event showing where the event author will be inserted, below the title and above the venue](https://docs.nexcess.com/wp-content/uploads/2026/06/article-1-version-5-0-image-1-1024x407-1.png)

First, create the following file in your theme: 
```
tribe/events/v2/list/event-author.php
```

```
<div class="tribe-common-b2">
  Author: <?php the_author(); ?>
</div>
```

Then add the action to your theme’s 
```
functions.php
```

:

```
add_action(
  'tribe_template_before_include:events/v2/list/event/venue',
  function ( $file, $name, $template ) {
    $template->template( 'list/event-author' );
  },
  10,
  3
);
```

![The List view after the hook is added, showing the event author displayed below the title](https://docs.nexcess.com/wp-content/uploads/2026/06/article-1-version-5-0-image-2-1024x539-1.png)

Event templates in TEC are set up to work with standard WordPress post functions, so functions like 
```
the_author()
```

 work exactly as you’d expect.

### Example: Marking Events on Christmas Day

This example uses 
```
tribe_template_after_include
```

 to display emojis after the date on events that fall on December 24th or 25th.

Create 
```
tribe/events/v2/list/christmas-marker.php
```

 in your theme:

```
<?php
$event = tribe_get_event( get_the_ID() );
$christmas_days = [ '12-24', '12-25' ];

if ( ! in_array( $event->dates->start->format( 'm-d' ), $christmas_days, true ) ) {
  return;
}
?>
<span>🎄</span>
```

Then add the action to 
```
functions.php
```

:

```
add_action(
  'tribe_template_after_include:events/v2/list/event/date/meta',
  function ( $file, $name, $template ) {
    $template->template( 'list/christmas-marker' );
  },
  10,
  3
);
```

![The List view showing Christmas tree emojis added after the date on events falling on December 24th or 25th](https://docs.nexcess.com/wp-content/uploads/2026/06/article-1-version-5-0-image-3-1024x766-1.png)

This example uses [tribe_get_event()](https://docs.theeventscalendar.com/reference/functions/tribe_get_event/), which returns a 
```
WP_Post
```

-like object tailored for events. The 
```
$event->dates->start
```

 property is a PHP [DateTimeImmutable](https://www.php.net/manual/en/class.datetimeimmutable.php) instance, giving you access to all standard date formatting methods. Using 
```
format_i18n()
```

 instead of 
```
format()
```

 will translate dates where translations are available.

## Output Filters

### Suppressing a Template Part

You can short-circuit the rendering of any template entirely using the 
```
tribe_template_pre_html:$template
```

 filter. This prevents the HTML from being generated at all, which is better for performance than hiding it with CSS.

The following removes the venue from events in Day view only:

```
add_filter( 'tribe_template_pre_html:events/v2/day/event/venue', '__return_false' );
```

The 
```
__return_false
```

 WordPress helper always returns boolean 
```
false
```

, which signals the template engine to skip rendering that file. Note that unlike actions, WordPress filters always require a value to be returned.

### Full Hook and Filter Reference

All view files in TEC are loaded through the 
```
Tribe__Template
```

 class, which triggers the following hooks and filters on every template load. The 
```
:$template
```

 suffix variants allow you to target a specific template file; the unsuffixed variants fire for every template.

**Filters:**

- [tribe_template_pre_html](https://docs.theeventscalendar.com/reference/hooks/tribe_template_pre_html/) — fires before HTML generation for any template
- [tribe_template_pre_html:$template](https://docs.theeventscalendar.com/reference/hooks/tribe_template_pre_htmlhook_name/) — fires before HTML generation for a specific template
- [tribe_template_html](https://docs.theeventscalendar.com/reference/hooks/tribe_template_html/) — fires after HTML generation for any template, allowing output modification
- [tribe_template_html:$template](https://docs.theeventscalendar.com/reference/hooks/tribe_template_htmlhook_name/) — fires after HTML generation for a specific template

**Actions:**

- [tribe_template_before_include](https://docs.theeventscalendar.com/reference/hooks/tribe_template_before_include/) — fires before any template is included
- [tribe_template_before_include:$template](https://docs.theeventscalendar.com/reference/hooks/tribe_template_before_includehook_name/) — fires before a specific template is included
- [tribe_template_after_include](https://docs.theeventscalendar.com/reference/hooks/tribe_template_after_include/) — fires after any template is included
- [tribe_template_after_include:$template](https://docs.theeventscalendar.com/reference/hooks/tribe_template_after_includehook_name/) — fires after a specific template is included

## The Template Hierarchy Filter (Template Hijack)

The techniques above let you inject content into or suppress parts of TEC’s own templates. The Template Hierarchy filter goes further: it bypasses TEC’s template system entirely and tells WordPress to use its standard [template hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/) for events instead. This lets you display calendar content using your existing theme templates, or build completely custom archive and single templates for events.

```
tribe_events_views_v2_use_wp_template_hierarchy
```

![The events archive displayed using the theme's archive template instead of the plugin's calendar template](https://docs.nexcess.com/wp-content/uploads/2026/06/archive-1024x710-1.png)

### Basic Usage

The filter’s primary argument is 
```
$hijack
```

 — a boolean that switches the calendar to WordPress template hierarchy when set to 
```
true
```

. The three additional optional arguments are:

- ```
$template
```

 — the template located by WordPress (e.g. 
```
event-single.php
```

)
- ```
$context
```

 — the immutable global Tribe template context object
- ```
$query
```

 — the global 
```
$wp_query
```

This basic usage applies the hijack to all views except single event pages:

```
add_filter(
  'tribe_events_views_v2_use_wp_template_hierarchy',
  function( $hijack, $template, $context, $query ) {
    if ( ! is_singular() ) {
      $hijack = true;
    }
    return $hijack;
  },
  10,
  4
);
```

To apply it to single event pages only:

```
add_filter(
  'tribe_events_views_v2_use_wp_template_hierarchy',
  function( $hijack, $template, $context, $query ) {
    if ( is_singular() ) {
      $hijack = true;
    }
    return $hijack;
  },
  10,
  4
);
```

To hijack both archive and single at once:

```
add_filter( 'tribe_events_views_v2_use_wp_template_hierarchy', '__return_true' );
```

### Building a Custom Event Archive Template

When the hijack filter is active, the events archive behaves like any other custom post type archive. You can create a dedicated template for it by adding 
```
archive-tribe_events.php
```

 to your theme’s root folder — exactly as you would when [creating an archive template for a custom post type](https://developer.wordpress.org/themes/template-files-section/custom-post-type-template-files/#custom-post-type-templates).

![The events archive displayed with a custom archive-tribe_events.php theme template](https://docs.nexcess.com/wp-content/uploads/2026/06/archive-2-1024x674-1.png)

### Building a Custom Single Event Template

Similarly, create 
```
single-tribe_events.php
```

 in your theme root to build a custom single event template. To access event-specific data (dates, venue, organizer, etc.) that isn’t available in a standard post template, call 
```
tribe_get_event()
```

 at the top of the file:

```
$event = tribe_get_event( get_the_ID() );

get_header();
```

From there, use the 
```
$event
```

 object to access event properties:

```
<h2>
  <?php echo esc_html( $event->title ); ?>
</h2>
```

![A custom single-tribe_events.php template displaying event data retrieved via tribe_get_event()](https://docs.nexcess.com/wp-content/uploads/2026/06/single-altered-910x1024-1.png)

👋 [Download the example files](https://theeventscalendar.com/knowledgebase/wp-content/uploads/2020/10/template-manager-filters.zip) used in this section if you’d like to follow along with a working copy.

With the Template Hierarchy filter you can: use your theme’s existing templates for calendar content, hijack single events, event archives, or both, create dedicated templates for each, and access all event data in those templates. Happy coding!

---

