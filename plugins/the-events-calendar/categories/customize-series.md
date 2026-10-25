# Customize Series

*Category from The Events Calendar documentation*

---

## Customizing Event Series

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-series/](https://docs.nexcess.com/software/the-events-calendar/customize-series/)

Event Series groups related events under a single landing page. When you want to adjust how that page behaves — or how events within a Series link from the calendar — a small snippet can often get you there. This article collects several of the most common Series customizations.

## Changing the Calendar View on the Series Page

By default, the Series page displays events in Summary View on the frontend. If you’d prefer to use a different view, you can do so with a filter. Keep in mind that this filter will change the default view for all Series on your site.

You can adjust the snippet to use a different view by replacing 
```
list
```

**with a different view name.

```
add_filter(
	'tec_events_pro_custom_tables_v1_series_event_view_slug',
	function ( $view ) {
		return 'list';
	}
);
```

If you’d like to use a different template for the Event Series Single, you can use this snippet, making sure to point the call to 
```
locate_template()
```

 to the template you want to use (*/wp-content/themes/your-active-theme/* folder).

```
add_filter(
	'template_include',
	static function ( $template ) {
		if ( is_singular( 'tribe_event_series' ) ) {
			// Point this to the template you want to use.
			$custom_template = locate_template( 'templates/some-template.php' );

			if ( $custom_template ) {
				$template = $custom_template;
			}
		}
		return $template;
	}
);
```

![](https://docs.nexcess.com/wp-content/uploads/2026/06/series-linkfromevent-1024x368-1.png)

## Link Directly to the Series Page from the Calendar

Normally when a user clicks an event title on a calendar view or widget, the link takes them to that event’s page. If you’d like clicks on some events to take the user to the Series landing page instead, where they can view all events in the Series, you can do that with a third-party redirect plugin.

The first thing you’ll want to do is install the [Redirection plugin](https://wordpress.org/plugins/redirection/). Simply [install the plugin](https://docs.nexcess.com/software/the-events-calendar/downloading-and-installing-the-plugin/) as you would any other WordPress plugin. From there, follow the prompts to continue set-up.

![Set up the redirection plugin to redirect recurring events](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-05-11-at-7.19.28-AM.jpg)

Once the plugin is set up, click Add New to create a new redirect.

![Add new redirect](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-05-11-at-7.26.25-AM.jpg)

The **Source URL** is the original location that you’d like to redirect from. In this case, that’s a single event page. Then, add in your **Target URL**: the Series land page.

In the example below, the Source URL is the single event at 
```
example.com/event/kids-camp-friendship-bracelets/
```

 and the Target URL is the Series page at 
```
example.com//series/kids-camp/
```

. Now when someone clicks the Friendship Bracelets event from the calendar, they’ll be sent right to the Series page.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/series-linkfromevent-1-1024x368-1.png)

And that’s it! Now you’re all set up to redirect your events.

## How to Change the Event Series Page Slug

By default, the URL slug for a Series is simply *series,*e.g. 
```
your site.com/series/series-name
```

. This snippet allows you to change the global slug to match your needs. For example, a theater might want to change the slug to *play*so that they can show all the times (events) for a particular play on the Series page with a URL like 
```
example.com/play/my-fair-lady
```

.

Simply place the following snippet in your theme’s functions.php file and replace 
```
new-series-slug
```

 with whatever you’d like the slug to be.

```
add_filter( 'tribe_events_register_series_type_args',
			function ( $args ) {
				$args['rewrite']         = isset( $args['rewrite'] ) ? $args['rewrite'] : [];
				$args['rewrite']['slug'] = 'new-series-slug';
				return $args;
			}
		);
```

After applying the PHP snippet, it’s crucial to flush your WordPress permalinks to avoid potential navigation issues.

You can do this by going to your WordPress dashboard (wp-admin) > Settings > Permalinks, and clicking the ‘Save Changes’ button. This action flushes the permalinks, ensuring it’ll be reinterpreted and that your changes are being applied.

## How to Add “Series” Title to a Series Page

When creating a new Series page, you may have noticed that Series does not have its own template. Because of this, building customizations onto that page doesn’t come from a template override, as do many of the other customizations with The Events Calendar.

The good news is that you can easily append the word “Series” (or anything else) to the Series page, making it easier for your users to identify the page as part of a Series.

To add the word “Series” to the Series page, simply add the following CSS to your stylesheet or through the WordPress Customizer. For the latter, you can add the CSS under Appearance > Customizer > Additional CSS. Here is the snippet you’ll want to add or modify to suit your needs:

```
.tribe_event_series-template-default h1.entry-title:after {
    content: " Series";
}
```

---

*Snippets reviewed and updated October 2026*

---

