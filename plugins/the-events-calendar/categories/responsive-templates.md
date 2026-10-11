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

The Events Calendar’s views (Month, List, Day, and, with Events Calendar Pro, Week, Photo, Map, and Summary) don’t have an on/off switch for responsiveness. Each view’s layout adapts based on its breakpoints, and you can change those breakpoints with a filter. To make a view ignore its breakpoints, set them so they are always met or never met.

A breakpoint is met when the calendar’s own width is at least that number, so 
```
0
```

 is always met and a very large number is never met. Always return all three values (
```
xsmall
```

, 
```
medium
```

, 
```
full
```

). A missing value is never met, and a function that returns nothing breaks the calendar’s JavaScript.

If you used the old 
```
tribe_events_kill_responsive
```

 filter, remove it. It has no effect on the current views.

#### Keep the desktop layout at every screen width

Set all three breakpoints to 
```
0
```

. Add this to your theme’s 
```
functions.php
```

 file:

```
// Keeps the full desktop layout in every calendar view
function customize_tribe_events_v2_force_desktop( $breakpoints ) {
  return [
    'xsmall' => 0,
    'medium' => 0,
    'full'   => 0,
  ];
}

add_filter( 'tribe_events_views_v2_view_breakpoints', 'customize_tribe_events_v2_force_desktop' );
```

This filter applies to every calendar view, including Calendar Embeds and the calendar widgets. On a phone the calendar stays in its desktop layout, so it will be cramped. Buttons and text get small, parts of the search bar can be cut off, and keyboard users on narrow screens may not be able to Tab to the search and navigation controls. Test it on a real phone before you keep it.

#### Keep the desktop layout in one view only

Use the view-specific filter instead. The name ends with the view’s slug (
```
list
```

, 
```
month
```

, 
```
day
```

, and with Events Calendar Pro 
```
week
```

, 
```
photo
```

, 
```
map
```

, and 
```
summary
```

). This example affects List view only:

```
// Keeps the full desktop layout in the calendar's list view
function customize_tribe_events_v2_list_force_desktop( $breakpoints ) {
  return [
    'xsmall' => 0,
    'medium' => 0,
    'full'   => 0,
  ];
}

add_filter( 'tribe_events_views_v2_view_list_breakpoints', 'customize_tribe_events_v2_list_force_desktop' );
```

When both a global and a view-specific filter are set, the view-specific one wins for that view.

#### Keep the compact (mobile) layout at every screen width

Set the breakpoints to a very large number so the calendar always uses its small-screen layout:

```
// Keeps the compact layout in every calendar view
function customize_tribe_events_v2_force_mobile( $breakpoints ) {
  return [
    'xsmall' => 100000,
    'medium' => 100000,
    'full'   => 100000,
  ];
}

add_filter( 'tribe_events_views_v2_view_breakpoints', 'customize_tribe_events_v2_force_mobile' );
```

Use either the “desktop” or the “compact” global snippet, not both.

#### Clear the cache after changing breakpoints

Month View, and Week View if you use Events Calendar Pro, store their generated HTML in a cache, and the breakpoints are part of that HTML. After you add or change a breakpoint filter, those views may keep using the old values until the cache is cleared. The other views, including List and Day, pick up the change right away.

To clear the cache, open any event and click **Update**, or go to **Events > Settings** and click **Save Changes**. Plugin changes and a caching plugin’s “clear cache” also work, and the cache expires on its own after 24 hours. Administrators and visitors see separate cached copies, so test in a private window, logged out.

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

