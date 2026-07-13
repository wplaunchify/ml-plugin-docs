# Featured Venue Widget

*Category from The Events Calendar documentation*

---

## Using the Featured Venue Widget

**Source:** [https://docs.nexcess.com/software/the-events-calendar/featured-venue-widget/](https://docs.nexcess.com/software/the-events-calendar/featured-venue-widget/)

The Featured Venue widget shows off a specific saved venue in a sidebar and displays events happening at that venue. In this tutorial we’ll cover the widget settings, and even toss in some tips and tricks for customizations.

## Add the Widget to a Sidebar

The Featured Venue widget is a feature of [The Events Calendar PRO](https://theeventscalendar.com/product/wordpress-events-calendar-pro/), so first make sure that plugin is [installed and activated](https://docs.nexcess.com/software/the-events-calendar/downloading-and-installing-the-plugin/) before getting started. With that done, you’ll find the widget by heading over to Appearance > Widgets from the WordPress dashboard.

Drag the **Events Featured Venue** widget to any sidebar area and you’re good to go.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-02-24-at-5.56.56-PM.png)

Now you can see the widget in all its magnificence on the front end of our website. Here’s how that looks:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-02-24-at-5.56.12-PM.png)

## Widget Settings

There are a few settings available to help you tailor the widget to our needs. Let’s go over those.

- **Title:** This is the heading that sits above the widget. This is empty by default but, in the example above, we changed it to “Featured Venue.”
- **Venue:** This option allows you to select the venue to feature. All the saved venues that can be found in Events > Venues will be listed here and one can be selected per widget.
- **Number of events to show:** This allows you to specify the maximum number of events to show in the widget at any given time. Three is the default, but the number can be any from one to ten.
- **Hide this widget if there are no upcoming events:** If this option is selected, then the widget will automatically hide itself if there are no upcoming events for the selected venue. If the option is unselected, then the widget will continue to display, but a notice will display that there are no upcoming events.

## Embedding the Widget with a Shortcode

When you use the featured venue shortcode you **must** include at least one argument – the ID or slug of the venue that is being featured. Here’s an example using a slug:

```
[tribe_featured_venue slug="the-eiffel-tower"]
```

It is also possible to use the venue’s post ID:

```
[tribe_featured_venue id="4096"]
```

This shortcode optionally accepts one other argument – a limit for the number of events to list for the specified venue:

```
[tribe_featured_venue slug="the-whitehouse" limit="20"]
```

Will show the widget even if no upcoming events are scheduled for the venue:

```
[tribe_featured_venue slug="hollywood-bowl" hide_if_empty=false]
```

## Customizing the Widget

### Styling with CSS

You can apply custom CSS to the Featured Venue widget. The widget’s styles are part of 
```
tribe-events-pro.css
```

. To target the widget with your own CSS rules, use the base class:

```
.tribe-events-venue-widget {
    /* your styles here */
}
```

For guidance on where to add custom CSS and how widget stylesheets work, see our [Customizing CSS](https://docs.nexcess.com/software/the-events-calendar/customize-css/) guide.

### With a Template Override

Let’s say you want to change the content in the widget. We can override the template and modify it there to make some changes with a few steps:

- Make a copy of the template. It is located at */plugins/events-calendar-pro/src/views/pro/widgets/venue-widget.php*.
- Make a new folder in the site’s theme directory and call it *tribe-events*.
- Make a new folder in that one called *pro*.
- Make a new folder in that one called *widgets*.
- Drop the copied *venue-widget.php* file in that last folder.

Now that the widget is in your theme directory, you can modify it to suit your needs. For example, you can add the event excerpt to the widget content by placing the following snippet after the event details:

```
<?php the_excerpt(); ?>
```

Save that and your widget will now display the event post excerpt beneath the event details. Check out our [Customization Archives](https://theeventscalendar.com/knowledgebase/k/themers-guide/) for a more comprehensive overview of how to use template overrides.

---

