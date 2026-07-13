# Members Only Calendar

*Category from The Events Calendar documentation*

---

## Making a Members-Only Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/members-only-calendar/](https://docs.nexcess.com/software/the-events-calendar/members-only-calendar/)

We are sometimes asked if The Events Calendar allows for the creation of “members-only” or “internal” calendar—a calendar whose events can *only* be seen by logged-in users.

**Currently there is no “out of the box” way to make this sort of calendar—no plugin setting, plugin filter, etc.** But with a bit of custom coding, you can get pretty close.

The methods covered in this article are as follows:

- [Method One: Using a Redirect](#using-a-redirect)
- [Method Two: Using CSS](#using-css)
- [Method Three: Using a Third Party Plugin](#using-a-plugin)

⚠️ **Please Note:** This is not an official feature, so it is not something we can assist with at our help desk. When implementing custom code on your site, please note that you are responsible for maintaining this custom code over time as you update plugins, themes, your site’s version of WordPress, etc.

---

### Method One: Using a Redirect

This method is a stringent, very literal “members-only” calendar. **With this method, there are no events visible to any site visitor who is not logged-in.** If a visitor has not logged in, and tries to access an event view—whether Month View, List View, Photo View, etc.—they are simply redirected to a page of your choosing.

#### The Main Redirect

The main events page redirect is dictated by adding code like the following to your theme’s *functions.php* file, or a custom plugin:

```
add_filter( 'tribe_events_pre_get_posts', 'redirect_from_events' );
function redirect_from_events( $query ) {
	if ( is_user_logged_in() )
		return;

	if ( ! $query->is_main_query() || ! $query->get( 'eventDisplay' ) )
		return;

	// Look for a page with a slug of "logged-in-users-only".
	$target_page = get_posts( [
		'post_type' => 'page',
		'name' => 'logged-in-users-only'
	 ] );

	// Use the target page URL if found, else use the home page URL.
	if ( empty( $target_page ) ) {
		$url = get_home_url();
	} else {
		$target_page = current( $target_page );
		$url = get_permalink( $target_page->ID );
	}
	
	// Redirect!
	wp_safe_redirect( $url );
	exit;
}
```

The above example code “listens” for logged-out users attempting to load event pages. It will send them to a page with a slug of */logged-in-users-only* if that page exists. So, for example, if your site was example.com and you made a page at example.com/logged-in-users-only, a logged-out user would be redirected to that page if it exists. If that page does not exist, they will be redirected to the site’s home page.

#### An Additional Precaution

While the above redirect will prevent any logged-out visitors from viewing an events view like the List View, Month View, etc., you might *also* want to add the following snippet to stop event database queries outright if the current visitor is not logged in. **This will make it so that event widgets are also empty** if the visitor is not logged in.

The extra snippet of code for this added layer of restriction—which, again, is totally optional!—is as follows:

```
add_filter( 'posts_where', 'restrict_events', 100 );
function restrict_events( $where_sql ) {
	global $wpdb;
	if ( is_user_logged_in() || ! class_exists( 'Tribe__Events__Main' ) ) {
		return $where_sql;
	}
	return $wpdb->prepare( " $where_sql AND $wpdb->posts.post_type <> %s ", Tribe__Events__Main::POSTTYPE );
}
```

### Method Two: Using CSS

**With this secondary method, only certain, specified events are hidden from logged-out visitors.** The events that are “internal-only” or “members-only” are categorized as such, and these are the events that logged-out visitors will not see. All other events, though, will remain publicly visible.

This method is fairly simple to implement. First, create an event category that all members-only events will belong to. In the following screenshot, this is exemplified with an event category called “Members Only”:

![A Members-Only Category](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2016-07-19-at-9.41.18-PM.jpg)

An example of adding a members-only category to an event.

As expected, that event will show up, as shown in the Month View in the following screenshot:

![Screen Shot 2016-07-19 at 9.44.57 PM](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2016-07-19-at-9.44.57-PM.jpg)

To hide any event in that members-only category, you can do that by adding CSS like the following to the bottom of your theme’s *style.css* file:

```
.type-tribe_events.tribe-events-category-members-only {
  display: none;
}
```

☝️ That CSS will hide the events in the “Members Only” event category, as shown here:

![Screen Shot 2016-07-19 at 10.02.42 PM](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2016-07-19-at-10.02.42-PM.jpg)

Now you just need to add one extra bit of CSS so that the event *will* be visible if you are logged-in. That extra bit of CSS looks like this:

```
body.logged-in .type-tribe_events.tribe-events-category-members-only {
  display: inline;
}
```

The event will remain hidden from view if you are logged out, but it will show like normal if you are logged in. All other events that are *not* in that “Members Only” category will be visible regardless of whether you are logged in or not.

### Method Three: Using a Third-Party Plugin

Lastly, you can use a third-party plugin to add this feature to your website. Specifically, [Restrict Content Pro](https://restrictcontentpro.com/) can add this functionality to your calendar with The Events Calendar. You can read all about how to integrate with Restrict Content Pro in [our Knowledgebase article](https://theeventscalendar.com/knowledgebase/k/integrating-restrict-content-pro-with-the-events-calendar/).

### Closing Thoughts and Tips

With the above methods, a bit of time, and a bit of tinkering, you should be able to implement a members-only calendar on your site. Since code customization is required, and we will thus **not be able to help with implementing these customizations at our help desk**, here are some resources that may be helpful when implementing a members-only calendar:

- If you want to learn more about the PHP involved in writing functions like those seen in Method One, check out [PHP’s official documentation website](http://php.net/docs.php) and the official WordPress [Codex](https://codex.wordpress.org/) and [Code Reference](http://developer.wordpress.org/reference).
- If you want to make it easier to write the sort of CSS used in Method Two, check out a (free!) tool like [Firebug](http://getfirebug.com/) if you use FireFox, or the Developer Tools for either [Safari](http://developer.apple.com/technologies/tools/) or [Chrome](https://developers.google.com/chrome-developer-tools/docs/overview). They have “Inspector” tools that make it easy to find out what CSS is required to achieve a specific modification.
- If you want to hire a professional developer to assist you, check out a list of highly-rated customizers that we have compiled [here](http://m.tri.be/18k1).
- If you’d like to create members-only tickets, check out [this handy extension](https://theeventscalendar.com/extensions/members-only-tickets/)!

---

