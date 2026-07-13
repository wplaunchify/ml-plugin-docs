# Enfold Theme

*Category from The Events Calendar documentation*

---

## Using the Enfold Theme with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/enfold-theme/](https://docs.nexcess.com/software/the-events-calendar/enfold-theme/)

[Enfold](https://enfoldtheme.info/) is a popular premium WordPress theme by [Kreisi](https://kriesi.at/themes/enfold/) that is [available in the Themeforest marketplace](https://themeforest.net/item/enfold-responsive-multipurpose-theme/4519990?irgwc=1&clickid=WC6S9tQ7%3AxyLT96wUx0Mo36YUkB12nwsKRiCQ00&iradid=475676&irpid=1245099&iradtype=BANNER&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1245099&utm_medium=affiliate&utm_source=impact_radius). The theme integrates with The Events Calendar but there are things to consider to make everything work together. This article will help you configure the theme and plugin so you get the most out of your online calendar.

## What you need

- **Enfold:** This is the main theme.
- [The Events Calendar](https://wordpress.org/plugins/the-events-calendar/) (free): This is the base calendar plugin that allows you to publish event posts and display them in a calendar format.
- [Event Tickets](https://wordpress.org/plugins/event-tickets/) (free, optional): This is the base ticketing plugin for The Events Calendar that adds ticket and RSVP functionality to events, pages, and posts.

## Installation

Using Enfold with The Events Calendar is practically the same as integrating The Events Calendar with any other WordPress theme. [Install the theme and plugin](https://docs.nexcess.com/software/the-events-calendar/downloading-and-installing-the-plugin/) and you get a nice-looking calendar right out of the box.

## Setting up the calendar

Whether you are activating The Events Calendar or Enfold for the first time, there are a few things you can do right away to make them play well together.

### Set the calendar as the homepage

The very first thing Enfold does when activating it for the first time is to take you to a settings screen. This is where all of the theme’s options are located, from page layouts to styling.

The very first setting lets you set the front page of the site. By default, Enfold sets this to the main Blog feed.

![Showing the Enfold theme options screen. The general settings are open, including front page settings, logo, favicon and page reloading.](https://docs.nexcess.com/wp-content/uploads/2026/06/enfold-theme-options.jpg)By default, Enfold sets the front page to “blank” which displays the latest blog posts on the homepage.

If your calendar is supposed to be the front page of your site, navigate to **Settings** → **Reading** from the WordPress dashboard and set the homepage to **“Main Events Page”** from the list of options.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/wordpress-admin-settings-reading-front-page-1024x750-1.jpg)Even if your calendar is already set as the homepage, Enfold overrides these settings and they need to be reset.

### Fix the event single layout

Another thing Enfold does by default is use a full-width layout to display blog posts, including events. This results in the post content stretching from the far left edge of the screen to the far right edge.

![Showing an event single post for a Farmer's Market event on June 24, 2021 from 12 to 2:30. The content stretches from one side of the screen to another, including the body content, venue information, venue map, and related events.](https://docs.nexcess.com/wp-content/uploads/2026/06/enfold-tec-single-stretched.jpg)Not exactly a good look.

That’s something you probably want to fix. Open up the Enfold **Theme Options** and click on the **General Layout** section. That’s where you’ll see the layout using a “Stretched Layout.” Change that setting to either “Boxed Layout” or “Fixed Frame” to add breathing room between the event content and the edges of the screen.

![Showing the general layout settings in the Enfold theme options screen. The screen asks whether to use a stretched or boxed layout with a dropdown to select an option. The image shows the stretched layout option selected and highlighted in red.](https://docs.nexcess.com/wp-content/uploads/2026/06/enfold-options-general-layout-stretched.jpg)Enfold provides a preview of your selection above the setting.

We’re closer to a better event layout, but are not done quite yet. You might notice that the content still pushes up against the edge of the content container. Thankfully, Enfold allows you to add custom CSS to the theme directly in the WordPress admin. From the Enfold Theme Options screen, navigate to the **General Styling** section, and add the following snippet to the **Quick CSS** box.

```
.tribe-events-pg-template {
  padding: 50px !important;
}
```

![Showing the event single for a Famrer's Market event on June 24, 2021 from noon to 2:30pm. It takes place at Long Beach State University and displays a Google Map with a marker on the location. Below are options to export the event and three related events.](https://docs.nexcess.com/wp-content/uploads/2026/06/enfold-tec-single-boxed.jpg)Much, much better!

👋 Another way to do this is to use the [WordPress Customizer’s “Custom CSS” setting](https://docs.nexcess.com/software/the-events-calendar/wordpress-customizer-events/). Or, use the snippet in a separate CSS file to [override the plugin’s styles](https://docs.nexcess.com/software/the-events-calendar/customize-css/#Overwriting_CSS_files).

### Add sidebars to the calendar page

Enfold provides an extensive set of options to manage sidebars.

![Showing Enfold theme options for sidebars, including settings for where to display the sidebar for archive pages, the blog page, ingle posts, pages, and separate sidebars for blog and archive pages.](https://docs.nexcess.com/wp-content/uploads/2026/06/enfold-options-sidebars.jpg)

Unfortunately, these settings are not supported by The Events Calendar. However, it only takes a couple of steps to add a sidebar to your calendar:

1. Create a new page called “Events” (or whatever you would like)
2. Add the 
```
[tribe_events]
```

 shortcode to the page.
3. Make sure the page is using the “Default template” option in the Page Attribute settings.

This embeds the calendar on a regular page which is supported by Enfold’s sidebar settings.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/enfold-page-sidebar-tec-shortcode.jpg)Notice that the “Advanced Layout Editor” is now available as well.

### Restore the option to Disable the Event Search Bar

Enfold removes the option from the [Basic Template Settings](https://docs.nexcess.com/software/the-events-calendar/calendar-template-settings/) section to Disable the Event Search Bar from **Events → Settings → Display**.****To restore this option, add this snippet to your theme’s functions.php:

```
remove_action( 'tribe_display_settings_tab_fields', 'avia_events_display_tab', 10 );
```

*Note: This setting might have unexpected results.*

### Creating events

Enfold does not introduce anything new when it comes to creating and editing events. You can expect the same blocks, settings, and fields in the WordPress editor that you would expect to see in a default WordPress theme.

That said, it’s worth noting that the [Advanced Layout Builder](https://kriesi.at/documentation/enfold/intro-to-layout-builder/) that comes bundled with Enfold is not supported by The Events Calendar. Normally, Avia will display an “Advanced Layout Editor” option at the top of the WordPress editor that, when clicked, displays additional options create content columns. This is not the case with events.

The Advanced Layout Builder can be used with the full calendar. [See the previous section for detailed steps.](#h-add-sidebars-to-the-calendar-page)

---

