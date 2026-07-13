# Customize Community Pages

*Category from The Events Calendar documentation*

---

## Customizing Community Events Pages

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-community-pages/](https://docs.nexcess.com/software/the-events-calendar/customize-community-pages/)

Community Events adds several front-end pages to your site — the submission form, the “My Events” list, and the confirmation pages users see after submitting. This article walks through ways to tailor those pages to fit your site.

**See also:**

- [Customizing the Community Event Submission Form](https://docs.nexcess.com/software/the-events-calendar/customize-event-submission-form/)
- [Customizing Community Events Submissions](https://docs.nexcess.com/software/the-events-calendar/customize-event-submissions/)

## Adding Content Above or Below Community Events Elements

You may want to include some instructions for your users at the top of the Community Events submission form, or add some notes or sponsor information at the *bottom* of the “My Events” page. But the Community Events submission form and “My Events” pages are not *actual* WordPress pages, so to add content above or below these pages, you’ll need to do some customization. If you want to add content above or below Community Events pages and **only** above these pages, not any other calendar pages, then using template tags may be a great solution.

There are four main template tags that would work well in this situation, which are as follows:

- tribe_events_community_form_before_template
- A template tag for adding content above the Community Events submission page.
- tribe_events_community_form_after_template
- A template tag for adding content below the Community Events submission page.
- tribe_ce_before_event_list_top_buttons
- A template tag for adding content above the “My Events” page.
- tribe_ce_after_event_list_table
- A template tag for adding content below the “My Events” page.

You can use the same callback function a number of times, which will be exemplified as follows: Let’s say you wanted to add a simple bit of text, like “Sponsored by The Events Calendar” at the top the Community Events **submission** page only. You could write a code snippet like this to do just that:

```
function tribe_add_community_sponsor_message() {
    echo 'Sponsored by <a href="https://theeventscalendar.com">The Events Calendar</a>';
}

add_action( 'tribe_events_community_form_before_template', 'tribe_add_community_sponsor_message' );
```

☝️ This would add the sponsor text above the submission page, but no place else.

If you wanted to add this bit of content to **all four** locations, then you would just tie the callback function (which is 
```
tribe_add_community_sponsor_message
```

, in the case of this example) to **all four** template tags, like this:

```
function tribe_add_community_sponsor_message() {
    echo 'Sponsored by <a href="https://theeventscalendar.com">The Events Calendar/a>';
}

// Above the submission page content.
add_action( 'tribe_events_community_form_before_template', 'tribe_add_community_sponsor_message' );

// Below the submission page content.
add_action( 'tribe_events_community_form_after_template', 'tribe_add_community_sponsor_message' );

// Above the "My Events" list page content.
add_action( 'tribe_ce_before_event_list_top_buttons', 'tribe_add_community_sponsor_message' );

// Below the "My Events" list page content.
add_action( 'tribe_ce_after_event_list_table', 'tribe_add_community_sponsor_message' );
```

#### Advanced Option: Custom Theme Templates

For a truly advanced level of control and customization ability, you may want to make custom theme templates for the Community Events templates outright. This would let you heavily customize the layout of these pages to suit your needs, and would allow for the easier addition of things like iFrames, video embeds, inline JavaScript, and complex HTML layouts of content.

## Modifying Community Events Page Titles

One of the most common questions we get from users of the Community Events add-on is, “How do I change the page title on the Community Pages?”  We’ve compiled a couple of scenarios into one post and hopefully some of these code snippets will help you out!  If what you’re needing isn’t here, feel free to open a new topic at our help desk, and we’ll help you out!

**Changing the Event Submission page title**

You can easily change the page title on the submission form using the 
```
tribe_events_community_submit_event_page_title
```

 filter. Just paste the following into your theme’s 
```
functions.php
```

 file:

```
add_filter( 'tribe_events_community_submit_event_page_title', 'change_the_title' );
function change_the_title() {
	return 'Your New Title Goes Here';
}
```

**Changing the My Events page title**

You can also change the page title on the My Events page using the 
```
tribe_events_community_event_list_page_title
```

 filter. Just paste the following into your theme’s 
```
functions.php
```

 file:

```
add_filter( 'tribe_events_community_event_list_page_title', 'change_the_title' );
function change_the_title() {
	return 'Your New Title Goes Here';
}
```

## Displaying All Events Associated with a User in Community: My Events

When using the Community plugin, you might notice that viewing the “My Events” tab only shows events that have been submitted through the frontend Community form, and you may want to change this. Events that have been added through the backend won’t show in “My Events”. This is the intended default behavior, as the plugin was designed to allow users to submit events through the frontend and contribute directly to the calendar.

However, some customers have reached out to us with a need to add events on behalf of their users. They wanted these events to appear in “My Events” so the users could view them. If you would like to achieve the same and have events added through both the frontend and backend to appear in “My Events,” you can use the snippet below to accomplish this.

```
add_filter('tribe_community_events_get_event_query', 'get_events', 15, 3);

/**
 * Retrieves events based on the provided arguments.
 *
 * @param mixed $data Data to filter.
 * @param array $args Query arguments.
 * @param bool  $full Whether to return the full query.
 *
 * @return WP_Query The filtered events query.
 */
function get_events($data, $args, $full): WP_Query {
    unset($args['meta_query']);
    return tribe_get_events($args, $full);
}
```

That’s it! Now you will be able to see all of your events in Community: My Events.

---

