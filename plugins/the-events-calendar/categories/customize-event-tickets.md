# Customize Event Tickets

*Category from The Events Calendar documentation*

---

## Customizing Event Tickets

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-event-tickets/](https://docs.nexcess.com/software/the-events-calendar/customize-event-tickets/)

Many sites want to tweak how tickets and RSVPs look or behave on event pages. This article collects a range of common customizations — from small visual adjustments on the event page to filter hooks that change how tickets are presented across your calendar.

**See also:**

- [Customizing Event RSVPs](https://docs.nexcess.com/software/the-events-calendar/customize-rsvp/)
- [Customizing Tickets Commerce Purchases](https://docs.nexcess.com/software/the-events-calendar/customize-tickets-commerce/)
- [Customizing Ticket Emails](https://docs.nexcess.com/software/the-events-calendar/customize-ticket-emails/)

## Hide Number of People Attending from Event Pages

If you’d like to remove the number of attendees for your events, you can easily do so by adding a simple CSS snippet to your WordPress site. Follow the instructions below to hide the number of people who are attending the event from being displayed on your event pages. This can help create a more streamlined and focused presentation for your audience.

Copy the below code into your (child) theme’s *style.css* file, or add it to *Appearance > Customize > Additional CSS* box (or wherever you usually put custom styling).

```
.single-tribe_events .tribe-tickets__rsvp-attendance {
display: none !important;
}
```

Another way to achieve this is a snippet that can be added to your theme’s functions.php file or with a plugin like [Code Snippets](https://wordpress.org/plugins/code-snippets/).

```
add_filter( 'tribe_template_done', function ($show, $name) { 
return 'v2/rsvp/details/attendance' === $name ? '' : $show; 
}, 10, 2 );
```

## Display Ticket Description on Mobile View

**Is your ticket description not showing on mobile?** If you’re facing an issue where the ticket description is not visible on mobile devices, this simple fix will ensure that the ticket details are displayed correctly.

#### Add Custom CSS

To resolve this, you need to add a few lines of CSS to your WordPress site. Follow these steps:

Navigate to **Appearance > Customize > Additional CSS** in your WordPress dashboard.

Insert the following CSS code:

```
@media (max-width: 768px){
.event-tickets .tribe-tickets__tickets-item-details-content {
   display: block !important;
}

.event-tickets .tribe-tickets__tickets-item-extra{
 grid-row: 4 !important;
}

.event-tickets .tribe-tickets__tickets-item-details-content{
     grid-row: 2 !important;
}
}
```

Click **Publish** to save your changes.

**What This Does**

- Forces the ticket description to be visible on mobile screens.
- Adjusts the grid structure to ensure proper alignment of ticket details.
- Enhances the user experience by making ticket descriptions more accessible.

Once you apply this CSS, the ticket description will now appear correctly in the mobile view, ensuring that users can easily see all relevant details when booking tickets.

**Before:**

![](https://docs.nexcess.com/wp-content/uploads/2026/06/b-1024x453-1.jpg)

**After:**

![](https://docs.nexcess.com/wp-content/uploads/2026/06/a-1024x549-1.jpg)

## Display Attendee Names in Public Attendee List

The [Public Attendee List](https://docs.nexcess.com/software/the-events-calendar/public-attendee-list/) feature in [Event Tickets](https://theeventscalendar.com/products/wordpress-event-tickets/) makes it easy to showcase the attendees of your events right on the single event pages. By default, it only shows the attendee avatars, which is handy but might leave your users wanting a bit more. Imagine how wonderful it would be to enhance that list by adding names next to the avatars. This simple change can make your event feel more connected and inviting for everyone involved. In this article, we’ll walk you through the steps to customize template files and make that happen!

Follow these steps to override and customize the template file and show attendee names along with their avatars in the attendee list:

**1- Make a Copy of the Template File**

Navigate to the following file within the Event Tickets plugin:

```
/wp-content/plugins/event-tickets/src/views/blocks/attendees/gravatar.php
```

Copy the 
```
gravatar.php
```

 file from this location.

**2- Paste the File in Your Theme Directory**

Paste the copied file into your active theme’s directory. If the necessary folders don’t exist, create them. Match the following path:

```
/wp-content/themes/[your-theme]/tribe/tickets/blocks/attendees/gravatar.php
```

**3- Add Attendee Names**

Open the newly added file and append the following line of code at the end:

```
echo $attendee['purchaser_name'];
```

**4- Save Your Changes and Test**

Save the changes to the file. Navigate to an event page where the Public Attendee List is displayed. Ensure that attendee names are now displayed with avatars.

Following these simple steps, you can easily personalize the attendee list to display names alongside avatars. This makes your event pages more informative and engaging for everyone involved. Just a quick tip: When you add these attendee names, you may want to sprinkle some CSS to ensure the list is visually appealing and fits perfectly with your site’s design.

## Emphasizing the Sale Price

Let’s say you want to customize the original price to draw attention to the sale. Maybe that’s making the price red instead of black.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2024-04-05-at-12.51.08-1024x481-1.jpg)

The 
```
.tribe-tickets__item__extra__price .tribe-tickets__original_price
```

 class is what you’ll want to use in your theme’s CSS, or on the Additional CSS section at *wp-admin > Appearance > Customizer > Additional CSS.*

Here’s an example:

```
.tribe-tickets__tickets-original-price span {
  color: red;
  font-size: 1.5rem;
  font-weight: bolder;
  padding-right: 1rem;
 }
```

## Disable Free Tickets

This filter allows you to completely disable the Free Ticket feature. Once you apply this filter, all the tickets created need to have their price higher than 0 (zero).

```
/**** This Filter allows user to completely disable the Free Tickets featur* * @filter: tec_tickets_commerce_is_free_ticket_allowed* @path: /event-tickets/src/Tickets/Commerce/Hooks.php:138* @article: https://theeventscalendar.com/knowledgebase/making-tickets/ * */add_filter( 'tec_tickets_commerce_is_free_ticket_allowed', '__return_false' );
```

## Modifying the Default Message for Tickets Not Yet Available

Occasionally, you may add an event to your calendar before tickets become available. In this case, the ticket block on the frontend will display the message, “Tickets will be available on 
```
[date]
```

.”

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-10-1.jpg)

If you’d like to customize this default text, you can use the PHP snippet below.

```
add_filter( 'event_tickets_unvailable_message', function( $message, $tickets ) {
	return "Your custom text";
}, 10, 2 );
```

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-11-1.jpg)

## Enable Public Attendees List for All Events

The public attendees list is a feature of the [Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/) plugin that shows a list of attendees for public events. This can enhance the user experience by allowing potential guests to see who else is attending, thus encouraging them to join in. However, as stated, it is deactivated by default and requires each event to be modified individually to enable this setting.

This can become tedious, especially for event managers with numerous upcoming events. Instead of manually activating the feature for each event, you can use a code snippet to apply the changes universally.

```
<?php //Do not copy this line

add_filter( 'tribe_tickets_hide_attendees_list', function ( $hidden, $post ) {
	if ( function_exists( 'tribe_is_event' ) && tribe_is_event( $post ) ) {
		return false;
	}

	return $hidden;
}, 10, 2 );
```

Utilizing this code snippet is an efficient way to streamline the process of activating the public attendees list for all your events. Rather than activating the feature one event at a time, you can easily ensure that all events display a list of attendees to enhance participation and engagement.

#### For Developers

- [tribe_tickets_hide_attendees_list](https://docs.theeventscalendar.com/reference/hooks/tribe_tickets_hide_attendees_list/)
- [tribe_is_event](https://docs.theeventscalendar.com/reference/functions/tribe_is_event/)

## Changing the Number of Events Shown in the Event Tickets Plus App

By default, the Event Tickets Plus app limits the number of events displayed per page to 50. However, you can easily override this limit by adding a small PHP snippet to your site.

#### 📘 How to Increase the Event Limit

To customize the number of events displayed, add the following code snippet:

```
add_filter( 'tribe_rest_event_max_per_page', function( $per_page ) {
    return 100; // Or whatever limit you need
}, 10, 1 );
```

Replace 
```
100
```

 with your desired number of events.

#### ⚠️ Important Note

Avoid setting this value too high. Increasing the number of events significantly can impact your server’s performance and resource usage, especially on sites with large datasets or limited hosting resources.

## Hide Remaining Ticket Quantity

Use the CSS snippet below to hide the available ticket quantity shown in the ticket or RSVP.

```
/* list view */
.tribe-events .tribe-events-c-small-cta__stock {
    display: none !important;
}
 
/* single view */
.tribe-common-b3.tribe-tickets__tickets-item-extra-available {
    display: none;
}
```

## Change the “Get Tickets” Link Text on Calendar Views

With [Event Tickets and Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/), events with tickets have a “Get Tickets” link that appears by default in certain places on the calendar, like list view:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/get-tickets-v2-1024x615-1.png)

There’s one in the event view as well:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/get-tickets-v2-kb-single-1024x456-1.png)

Let’s say we want that to say something else, like “Register Now!” or something. Here’s a snippet that you can use to change the link text to whatever works best for your site:

```
/**
 * Change the Get Tickets on List View and Single Events
 *
 * @param string $translation The translated text.
 * @param string $text        The text to translate.
 * @param string $context     The option context string.
 * @param string $domain      The domain slug of the translated text.
 *
 * @return string The translated text or the custom text.
 */

add_filter( 'gettext_with_context', 'tribe_change_get_tickets', 20, 4 );
function tribe_change_get_tickets( string $translation, string $text, string $context, string $domain ): string {

	if (
		$domain != 'default'
		&& ! str_starts_with( $domain, 'event-' )
	) {
		return $translation;
	}

	$ticket_text = [
		// Get Tickets on List View
		'Get %s'      => 'Register Now!',
		// Get Tickets Form - Single View
		'Get Tickets' => 'Register Now!',
	];

	// If we don't have replacement text, bail.
	if ( empty( $ticket_text[ $text ] ) ) {
		return $translation;
	}

	return $ticket_text[ $text ];
}
```

Note, 
```
$context
```

 and 
```
$domain
```

 parameters are not used in the above example, so they can be omitted. If so, remember to change the number of parameters from 4 to 2 when applying the filter.

## Redirecting Ticket Buyers to a Custom Login Page

Using **Event Tickets**, we have an option for requiring users to log into their accounts for registering for an event. When this option is enabled, a button for notifying users will be displayed in the ticket/RSVP block.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-46.jpg)

By default, this button will take users to the default WordPress login page.

Often, you might find this unsuitable, and you may rather send users to a custom login page; the good news is that it would be possible with a bit of customization.

As the first step, you need to install and activate a plugin for creating a custom login/registration page. You can find the list of recommended plugins [here](https://www.wpbeginner.com/plugins/best-wordpress-login-page-plugins/).

Most plugins provide a shortcode for creating a custom login page, or at least have a predefined URL/page for it. 

Once you know the custom login page URL, it’s time to add a snippet to do the trick:

```
<?php //Do not copy this line

add_filter( 'tribe_tickets_ticket_login_url', function ( $login_url ) {
	$login_page = '/new_login_page';

	return site_url() . $login_page . '?redirect_to=' . urlencode( tribe_get_event()->permalink );
} );
```

All you need to do is replace 
```
/new_login_page
```

 with the actual URL. After logging in, users will be redirected back to the event page where they started.

## Display Ticket Sale Start Time

By default, Event Tickets does not show the ticket sale start time if tickets aren’t yet available. This tweak ensures that this crucial information is always visible to visitors.

**What it does:** Allows inclusion of ticket start sale time in unavailability message

```
add_filter( 'tribe_tickets_unvailable_message_time', '__return_true' );
```

**Result:**

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2025-06-30-at-23.28.31-1024x271-1.jpg)

**Ref:** [tribe_tickets_unvailable_message_time](https://docs.theeventscalendar.com/reference/hooks/tribe_tickets_unvailable_message_time/)

---

