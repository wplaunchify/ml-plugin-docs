# Responsive Templates

*Category from The Events Calendar documentation*

---

## Using Responsive Templates with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/responsive-templates/](https://docs.nexcess.com/software/the-events-calendar/responsive-templates/)

The Events Calendar features a responsive design, which is a fancy way if saying it adjusts its layout according to the size of the screen it is being viewed on, like a smartphone or tablet. While it works smoothly in most cases, there may be situations where you want to adjust the responsiveness, say to accommodate a specific page template in your theme.

The default breakpoint (i.e. the screen width where the layout adjusts) is is 768px. If the screen is narrower than 768px, then the calendar will adjust to a compact layout designed for smaller screens. If the screen is 768pc or wider, then the full-size layout is displayed.

This breakpoint can be customized or completely removed with different filters. Let’s check that out.

#### Breakpoints

The plugin includes three different breakpoints, all of which can be customized:

- ```
xsmall
```

: 500px
- ```
medium
```

: 768px
- ```
full
```

: 960px

To customize these breakpoints, use the following filters:

- **tribe_events_views_v2_view_breakpoints**: Edits the breakpoints for all calendar views
- ```
tribe_events_views_v2_view_{view}_breakpoints
```

: Edits breakpoints for the defined view, where 
```
{view}
```

 is the slug of the view you want to adjust (i.e. 
```
month
```

, 
```
list
```

, etc.)

## Customizing Breakpoints for All Calendar Views

Let’s say we want to customize the 
```
medium
```

 responsive breakpoint from 768px to 600px. Adding this snippet to the theme’s 
```
functions.php
```

 file will do the trick:

```
function customize_tribe_events_v2_medium_breakpoint( $breakpoints ) {
  $breakpoints['medium'] = 600;

  return $breakpoints;
}

add_filter( 'tribe_events_views_v2_view_breakpoints', 'customize_tribe_events_v2_medium_breakpoint' );
```

Now let’s say we want to change the breakpoints for the 
```
xsmall
```

 and 
```
full
```

 breakpoints as well. We can customize all three in the same filter:

```
function customize_tribe_events_v2_breakpoints( $breakpoints ) {
  $breakpoints = [
    'xsmall' => 480,
    'medium' => 600,
    'full'   => 800,
  ];

  return $breakpoints;
}

add_filter( 'tribe_events_views_v2_view_breakpoints', 'customize_tribe_events_v2_breakpoints' );
```

## Customizing Breakpoints for a Specific Calendar View

Removing breakpoints doesn’t have to be an all-or-nothing sort of thing. Each view has a filter for each responsive breakpoint, allowing them to be customized for specific views:

- **List view:** 
```
tribe_events_views_v2_view_list_breakpoints
```
- **Month view:** 
```
tribe_events_views_v2_view_month_breakpoints
```
- **Day view:** 
```
tribe_events_views_v2_view_day_breakpoints
```

```
// Customizes the medium responsive breakpoint for month view from 768px to 600px
function customize_tribe_events_v2_view_month_medium_breakpoint( $breakpoints ) {
    $breakpoints['medium'] = 600;

    return $breakpoints;
}

add_filter( 'tribe_events_views_v2_view_month_breakpoints', 'customize_tribe_events_v2_view_month_medium_breakpoint' );
```

## Removing Responsive Breakpoints

To completely remove all of the breakpoints use this filter in the theme’s 
```
functions.php
```

 file:

```
// Removes all responsive breakpoints in every calendar view
add_filter( 'tribe_events_views_v2_view_breakpoints', '__return_empty_array' );
```

And respectively to completely remove any breakpoints for a specific view, list view in this example:

```
// Removes all responsive breakpoints in the calendar's list view
add_filter( 'tribe_events_views_v2_view_list_breakpoints', '__return_empty_array' );
```

Let’s say you want to customize the responsive breakpoint to be 600px. This following snippet filters the 
```
tribe_events_mobile_breakpoint
```

 function to adjust the breakpoint from 768px to 600px, and can be added to your theme’s 
```
functions.php
```

 file at the end:

```
function customize_tribe_events_breakpoint() {
  return 600;
}

add_filter( 'tribe_events_mobile_breakpoint', 'customize_tribe_events_breakpoint' );
```

Now let’s say you want to remove the responsiveness altogether. That’s where the 
```
tribe_events_kill_responsive
```

 filter comes into play. Add it to your 
```
functions.php
```

 file and pass a value of 
```
__return_true
```

 in there to remove the responsive breakpoint.

```
add_filter( 'tribe_events_kill_responsive', '__return_true' );
```

## Styling Based on Responsiveness

The Events Calendar includes the following CSS classes, which are added to the 
```
<body>
```

 class, giving you control over the appearance of the calendar based on whether it is responsive or being viewed on a small screen.

- **.tribe-is-responsive**: This class is always available, unless the breakpoint has been removed like we saw in the previous section. In other words, this class is removed when responsiveness is disabled.
- **.tribe-mobile**: This class is automatically added when responsiveness is enabled and the calendar is viewed on a small screen, narrower than 768px, or a custom breakpoint, if you set one like we did in the previous section.

So, for example, the following could be added to the theme’s 
```
style.css
```

 file, or by [overriding the calendar’s default styles with a custom stylesheet](https://docs.nexcess.com/software/the-events-calendar/customize-css/#Overwriting_CSS_files).

---

