# Wp Fusion Events

*Category from The Events Calendar documentation*

---

## Using WP Fusion with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/wp-fusion-events/](https://docs.nexcess.com/software/the-events-calendar/wp-fusion-events/)

[WP Fusion](https://wpfusion.com/) is a service that provides an easy way to connect WordPress to other services. The classic example is using it to sync data about your website visitors to a Customer Relationship Management (CRM) tool, like [Salesforce](https://www.salesforce.com), [Zoho](https://www.zoho.com), [Intercom](https://www.intercom.com), and even email marketing tools, like [Mailchimp](https://mailchimp.com).

What does this have to do with events?

Let’s say you are hosting an event and have published it to your WordPress calendar using [The Events Calendar.](https://theeventscalendar.com/product/wordpress-events-calendar/) Let’s go one step further and say you are selling tickets for that event using our [Event Tickets](https://theeventscalendar.com/product/wordpress-event-tickets/) plugin, and [Event Ticket Plus](https://theeventscalendar.com/product/wordpress-event-tickets-plus/) to sell those tickets with WooCommerce as the e-commerce platform.

Wouldn’t it be nice to capture the information of someone who purchases a ticket for the event? For example, we could open up tons of marketing opportunities by creating events that are available to certain member groups. We could even create automated emails that notify attendees three days before an event.

That’s where WP Fusion comes in. It takes the information captured during the event registration and can send it over to the CRM of your choice to help build campaigns. They even have a nice tutorial of their own that shows [how to sync attendees to Ontraport](https://ontraport.com).

## Example: Mailchimp

We hear from a lot of folks who are interested in using Mailchimp to send emails to people who have registered for an event.

Now, in order to do this, we’re going to put the following plugins to work:

- **The Events Calendar:** This is optional, but allows us to publish an event to a calendar.
- **Event Tickets:**This unlocks the ability to create tickets and RSVPs on any page or post in WordPress.
- [Event Ticket Plus](https://theeventscalendar.com/product/wordpress-event-tickets-plus/)**:** This allows Event Tickets to integrate with WooCommerce so that tickets are registered and sold as products.
- **WooCommerce:** This is the e-commerce platform that provides the cart, checkout, and user account features.
- **WP Fusion:** This is a free, limited version of WP Fusion’s full service [available as a WordPress plugin](https://wordpress.org/plugins/wp-fusion-lite/), but we need the full paid version to demonstrate simple syncing between The Events Calendar and Mailchimp. Upgrading unlocks tons of features, including the ability to integrate with other plugins and plugin fields.

We are also going to need a [Mailchimp account](https://mailchimp.com). You can get one for free, or upgrade for more advanced features.

### First, we need some tags

Mailchimp allows you to create “tags” as a way to assign labels to people in a contact list. They are a great way to segment your list into groups that share the same tag, which opens up the ability to send different emails to different segments.

Let’s create a couple of tags for our subscriber list. This can be done on the Audience → Manage Contacts → Tags screen.

![WP Fusion Audience](https://docs.nexcess.com/wp-content/uploads/2026/06/mailchimp-tags.png)Aw, how sad. I have no subscribers. ?

If we click the Create Tag button, that opens up a modal to name a new tag.

![WP Fusion tags](https://docs.nexcess.com/wp-content/uploads/2026/06/mailchimp-tags-new.png)

I’ve created two tags:

- **2020 Conference:** This is a tag for attendees who purchase tickets for my upcoming conference.
- **Early Bird Purchase:** This is a tag for anyone who purchases a ticket at a reduced early bird rate.

### Next, let’s set up WP Fusion

That gives us something to play with! Let’s hop back over to WordPress and set up WP Fusion. We’re assuming you have an account and have upgraded to the paid version.

The first thing we need to do is tell WP Fusion what CRM we want to connect to. That’s going to be Mailchimp in this case.

![WP Fusion settings in WordPress](https://docs.nexcess.com/wp-content/uploads/2026/06/wpfusion-swttings-crm.png)

The next thing we want to do is provide WP Fusion with an API key from Mailchimp. This is what lets one app talk to the other in a secure, private way. You can create an API key in Mailchimp on the Account → Extras → API Keys screen. Click the Create A Key button to generate a new API key.

![WP Fusion API keys](https://docs.nexcess.com/wp-content/uploads/2026/06/mailchimp-api-keys.png)Your API key field will have numbers and letters in it, of course.

Copy your API key. This is what you will paste into the WP Fusion plugin settings.

![Copy your WP Fusion API key over to WordPress](https://docs.nexcess.com/wp-content/uploads/2026/06/wpfusion-settings-crm-api.png)

Alright, we’ve established a connection between The Events Calendar and Mailchimp using WP Fusion.

### Now, the fun part

Let’s create an event! In this example, we’re using an event called 2020 Conference and it has two tickets: one that goes on sale first that gives attendees a discount if they register by a certain date, and one at a regular general admission price that goes on sale after the discounted rate expires.

![Using WP Fusion with tickets in Event Tickets Plus](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-01-10_16-12-36.jpg)

If we crack open the Early Bird ticket, you’ll notice there’s an Apply Tags field in the ticket settings. WP Fusion adds that for you automatically. It takes the tags we created in Mailchimp and makes them available here so that we can choose which tags to apply to an attendee when purchasing a ticket.

![Editing the Early Bird ticket to see tags applied by WP Fusion and Mailchimp](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_16-49-10.jpg)We’re applying both the “2020 Conference” and “Early Bird Purchase” tags to someone who purchases an early bird ticket for this event.

The same sort of thing applies to the General Admission ticket, where we’re applying only the “2020 Conference” tag to the attendee when a purchase is made.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/2024-02-14_16-51-09.jpg)

All good so far? Now that we’ve established which Mailchimp tags should be assigned to an attendee when purchasing each type of ticket, we can publish the tickets and the event to the calendar.

### Accessing data

This is where you’re probably wondering what happens once someone purchases a ticket. The answer is that the data moves from WordPress to Mailchimp, where the attendee is added to the subscriber list and tagged with the label based on which ticket was purchased.

![When someone purchases a ticket, they are added to WP Fusion's newsletter audience with a tag](https://docs.nexcess.com/wp-content/uploads/2026/06/mailchimp-audience-new.png)Hey, look… my first subscriber! Notice how the tags were properly assigned so I can now use them to create list segments for custom email campaigns.

## Other uses

We just looked at an example of using WP Fusion to sync information between The Events Calendar and Mailchimp and apply tags to people when making a ticket purchase. WP Fusion is capable of so much more, that’s it worth listing a few other ways how it can be used with The Events Calendar:

- Create pages or posts in WordPress that only attendees with a specific tag can access.
- Hide and show certain tickets from users who have a certain tag. This is a great way to reward past attendees with steep discounts on their next purchase.
- Create an automated Mailchimp email that goes out to all attendees three days before the event.
- Send a Mailchimp email to all early bird purchasers from one event to tell them about the early bird rate for the next event.
- Create a special private event that only certain attendees can view based on their tags.

There are probably more things that could be listed here, but you probably get the idea. And, depending on which CRM you use, more possibilities may be available. [WP Fusion has an entire list](https://wpfusion.com/documentation/#integrations) of every integration it supports.

---

