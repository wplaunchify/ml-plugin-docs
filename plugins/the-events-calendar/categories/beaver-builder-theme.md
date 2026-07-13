# Beaver Builder Theme

*Category from The Events Calendar documentation*

---

## Using Beaver Builder with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/beaver-builder-theme/](https://docs.nexcess.com/software/the-events-calendar/beaver-builder-theme/)

The folks at Beaver Builder have rolled out some pretty incredible features for the page builder, including [integration](https://kb.wpbeaverbuilder.com/category/533-the-events-calendar-integration) with The Events Calendar and Event Tickets.

For these features, you’ll need to use [The Events Calendar](https://theeventscalendar.com/products/wordpress-events-calendar/), [Beaver Builder Plugin](https://www.wpbeaverbuilder.com/), and [Beaver Themer](https://www.wpbeaverbuilder.com/beaver-themer/).

If you’d like to make use of Events Calendar Pro shortcodes with Beaver Builder Page Builder, check out our [article to ensure compatibility.](https://theeventscalendar.com/knowledgebase/k/using-shortcodes-with-beaver-builder/)

## Default Event, Organizer, and Venue Layouts

To get a fast start on layouts, you can use the default layouts created by Beaver Builder.  Go to **Beaver Builder → Themer Layouts → Add New**.  Select a **Singular** type with Event for the location and **All Events**. Then **Launch Beaver Builder**.

![Beaver Builder](https://docs.nexcess.com/wp-content/uploads/2026/06/image-2-19.png)

From there, you can delete all the content that displays and add a template layout by going to **+ → Templates → General → Event**.

![Beaver Builder template](https://docs.nexcess.com/wp-content/uploads/2026/06/image-3-9-scaled.png)

This same method will work to quickly create layouts for Venues and Organizers as well. You can use these as a way to layout most of the content for these templates, and customize specific content from there.

## Customizing Single Events

Do you want to rearrange and customize the look of each event listing? For that, we’ll use a singular event layout as well but add each element manually.

![Beaver Builder themer layout settings](https://docs.nexcess.com/wp-content/uploads/2026/06/image-1-21.png)

### Events Widgets

The Event Calendar widgets (in Appearance **→** Widgets) can be added within single event layouts.  Use the Beaver Builder’s **WordPress Widgets** group to drag and drop widgets such as the **Events Countdown** to your event.

![Beaver Builder using WordPress Widgets](https://docs.nexcess.com/wp-content/uploads/2026/06/add-WordPress-widget-to-single-event-layout-scaled.png)

### Themer Events Modules

To lay out each element on the remainder of your single events post, switch over to **Themer Modules** and Scroll down to **The Events Calendar**. Add rows and columns, then start adding in elements for the look you want. If you’ve activated Event Tickets, unique modules for displaying Tickets and RSVPs will display as well.

![Beaver Builder themer modules](https://docs.nexcess.com/wp-content/uploads/2026/06/themer-modules-scaled.png)

## Customizing the Events Page

Let’s say you want to customize what displays on the main **Events**page. For that, you’ll still want to select your [default view](https://theeventscalendar.com/knowledgebase/k/important-settings-for-the-events-calendar-events-calendar-pro/#Setting_the_calendars_default_view). After that, create a new Themer Layout that is an **Archive** with a location of **Event Archive**.

![Beaver Builder Themer Layout Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/image-4-10.png)

From there, use the **Event Calendar** module and style as needed. Beaver Builder has [additional information on adding the Event Calendar module](https://kb.wpbeaverbuilder.com/beaver-themer/integrations/tec/field-connections/) to your custom archive.

![Beaver Builder Event Calendar Archive options](https://docs.nexcess.com/wp-content/uploads/2026/06/add-event-calendar-module-scaled.png)

You can also add other modules as you’d like. In this example, we’ve added a slider previewing upcoming events above the month view.

![Beaver Builder module options](https://docs.nexcess.com/wp-content/uploads/2026/06/events-archive-1024x558-1.png)

## Custom Events Layouts

This is where the more advanced power comes into play.

By using the **Posts** module with a **Masonry**layout, you can customize the content to display **Event** previews. This will work with a variety of layouts and custom content queries.

![Beaver Builder custom query](https://docs.nexcess.com/wp-content/uploads/2026/06/Custom-query-events-scaled.png)

Want to get even more advanced? You can edit the custom layout much further. Add in additional parameters and toggle to the CSS view to style the event post preview as thoroughly as you’d like. See Beaver Builder’s knowledgebase for more resources about [field connections and parameters](https://kb.wpbeaverbuilder.com/article/543-find-the-full-list-of-field-connection-and-parameters-themer).

![Custom events layouts using Beaver Builder](https://docs.nexcess.com/wp-content/uploads/2026/06/Edit-Custom-Post-Layout-scaled.png)

---

## Additional Fields

You can add additional fields to any custom area within the single event page using Beaver Builder and The Events Calendar. Note that you will need both the Beaver Builder and Themer in order for this setup to work properly. Here’s how to do this:

1. Make sure you have a defined [Additional Field](https://docs.nexcess.com/software/the-events-calendar/custom-fields/) in the backend.
![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-9-2.jpg)
2. Drag a Text Editor Beaver Block in the event.
![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-10-3.jpg)
3. Click on the + sign, find the Event Field, and click on “Connect”.
![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-11-4.jpg)
4. Copy and paste the name of the custom field and hit Save.
![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-12-2.jpg)

You should now see the Additional Field appearing on the single event page.

We hope you found this walkthrough useful for getting the most out of The Events Calendar when creating events and pages with Beaver Builder.

## Using Events Shortcodes with Beaver Builder

If you’re using Beaver Builder with Events Calendar Pro and want to integrate [shortcodes](https://docs.nexcess.com/software/the-events-calendar/shortcodes/), you may need a snippet to render the page as expected. Page builders often optimize the loading experience by prerendering code, and then render it again to display the code.  However, [[tribe_events]](https://docs.nexcess.com/software/the-events-calendar/calendar-embed-shortcodes/) can only load once per page.

A way to work around this is to use the snippet below. Add this snippet to either your child theme’s functions.php file or use the [My Custom Functions](https://wordpress.org/plugins/my-custom-functions/) plugin.

Please check out our guides:

- [Best Practices for Implementing Custom Code Snippets](https://docs.nexcess.com/software/the-events-calendar/code-snippets/)
- [Themer’s Guide](https://theeventscalendar.com/knowledgebase/k/themers-guide/)

```
add_action( 'init', function() {
    add_shortcode( 'tribe_events', function( $atts ) {
        $shortcode = new Tribe__Events__Pro__Shortcodes__Tribe_Events( $atts );
        return $shortcode->output();
    } );
}, 100 );
```

---

