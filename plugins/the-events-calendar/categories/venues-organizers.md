# Venues Organizers

*Category from The Events Calendar documentation*

---

## Working with Venues and Organizers

**Source:** [https://docs.nexcess.com/software/the-events-calendar/venues-organizers/](https://docs.nexcess.com/software/the-events-calendar/venues-organizers/)

Venues and Organizers are two bits of handy information that can be added to an Events post. They give additional context for the event: where the event is happening and who is in charge of it.

With **Events Calendar Pro**, Venues and Organizers also have their own pages. This guide will outline creating Venues and Organizers and using the front-end pages.

From a WordPress point of view, Venue and Organizer are custom post types, just like Event. If you’re unfamiliar with the concept of [post types in WordPress](https://wordpress.org/documentation/article/taxonomies/), don’t worry.

Post types are simply tools to help you group different content according to its own purposes, and establish relationships between them.

## Creating Venues

When organizing events, providing accurate and detailed **location** information is crucial for attendees’ convenience.

The Events Calendar plugin for WordPress simplifies this process by allowing you to add Venues to your events, which automatically includes the “location” schema markup field in the Events schema markup. This ensures that your event listings are not only informative but also optimized for search engines, making it easier for potential attendees to find and participate in your events.

In this guide, we’ll walk you through the steps to create Venues in the Events Calendar plugin, ensuring your events are properly categorized and accessible.

You can create a Venue by heading over to Events → Venues → Add New. When you get there,  you are given an editing screen that allows you to:

- Name the venue (e.g. My House)
- Add a description (the main editing area)
- Supply information about the venue (address, city, state, ZIP, phone and website)
- Set options to display a Google Map for the venue
- Enter latitude and longitude as needed

![This screen allows users to create a venue and provide information for it](https://docs.nexcess.com/wp-content/uploads/2026/06/CreatingVenuesScreen.jpg)

You can include as much or as little information of the above information as you like, as long as the venue has a name.

One thing to note is to make sure the address or latitude/longitude is accurate in order for Google Maps to work. A common error occurs when Google is unable to locate the address based on what is provided and either fails to display the location or displays a pin in an entirely different location.

You can view all your saved venues by going to Events → Venues and manage them like you would any default WordPress content. That means you can edit the information, change the status, or delete them from this screen.

You can also create a venue (or an organizer) straight from the Add Event page by importing the same information outlined above as you make the event. Either way, any created venues (or organizers) will be able to be reused in the future from the Add Event page.

For more information on creating events, we encourage you to check out our knowledgebase article on [Creating Events](https://docs.nexcess.com/software/the-events-calendar/create-event/).

## Creating Organizers

Organizers are created in a very similar fashion to Venues. To create a new Organizer, head over to Events → Organizers → Add New. Once you are there, you will have the following options:

- Name the organizer (e.g. Ted Mosby)
- Add a description (the main editing area)
- Supply additional information about the organizer (phone, website and email)

![This page is where users create organizers and add information about them](https://docs.nexcess.com/wp-content/uploads/2026/06/CreatingOrganizersPage.jpg)

You can view all your saved venues by going to Events → Organizers and manage them like you would any default WordPress content. That means you can edit the information, change the status, or delete them from this screen.

## Venue and Organizer Pages

Venues and Organizers also get their own pages on your site. These pages are a pretty slick way to show off information about your venues and organizers as well as the events that are associated with them. Pretty sweet, right?

You can find these pages at the following URLs:

- The URL for Venues will look like this: 
```
[your-site]/venue/[venue-name]
```
- The URL for organizers will look like this: 
```
[your-site]/organizer/[organizer-name]
```

You can also access these pages from the admin screen for each taxonomy. For example, go to Events → Venues, then hover over one of the items and click the “View” link to see the page for that venue.

![This image show a list of event venues that have been created](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2023-08-16-at-5.52.37-PM.jpg)

#### What can I expect to see on these pages?

Venue pages can have a lot of handy information, including:

- Address
- Phone number
- Website
- Embedded Google Map and/or link to Google Maps, if enabled
- A description of the venue (if provided) including images
- A list of upcoming events associated with the venue

You can see an example of a Venue page on [our demo site](https://demo.theeventscalendar.com/). Please note that some themes can hide fields for these, in particular the description. If you have entered a description and it is not showing on the front end, try switching your theme or doing some customizing to have it show.

You can expect a lot of great information on Organizer pages as well:

- Phone number
- Website
- Email address
- A description of the organizer (if provided), including images
- A list of upcoming events associated with the organizer

#### Featured Images

Venue and Organizer pages allow you to add a featured image for all venue and organizer pages, mirroring the appearance of single event pages. Adding a featured image to these pages can improve the way the page looks and the SEO.

To add a featured image to an organizer, browse to Events → Organizers and select the organizer. Look for the Featured Image meta box on the right-hand side and click the Set Featured Image link. We recommend using an image that is a 16:9 aspect ratio.

![This page shows options for adding detailed information for an organizer. Including an area to add a featured image.](https://docs.nexcess.com/wp-content/uploads/2026/06/CleanShot-2023-08-16-at-19.00.17@2x.jpg)

Here is an example of an organizer’s Featured Image in action.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2023-08-16-at-7.14.46-PM-1024x401-1.jpg)

To add a Featured Image to a venue, browse to Events → Venues and select a venue. Look for the Featured Image meta box on the right-hand side and click the Set Featured Image link. Again, we recommend using images that have a 16:9 aspect ratio.

![This page shows options for adding details for a venue such as a description, or a featured image](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2023-08-16-at-7.23.43-PM.jpg)

### Locating the Pages

All Venue and Organizer pages will be automatically linked to any event they are associated with. For example, head over to any single event. You should see a box below the event content that contains additional details about the event. It will look something like this:

![This image shows additional details about an event in the WordPress block editor. Details such as the venue, phone number, map, email, and organizer are displayed.](https://docs.nexcess.com/wp-content/uploads/2026/06/CleanShot-2023-08-16-at-17.56.06@2x.jpg)Venue and Organizer in the WordPress Block Editor

The links are highlighted in red. You don’t have to do anything to make these links appear — the plugin does all the work by adding them for you.

### Linking to the Pages

Many people find it useful to add Venues and Organizers to the main menu of the site, so let’s walk through how that works.

We tried to make it very simple to add these to a menu, and we did that by making them standard options in the Menu Settings screen (Appearance → Menus). Head over there, and you will see both Venues and Organizers are listed as options in the left menu. Select from any venue and organizer you have already created, add them to the menu and save your work. Presto! They are now on your main menu.

![kb-venues_organizers-add_menu](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-venues_organizers-add_menu.gif)

If you do not see Venus or Organizers on the left-hand side, make sure to click on the Screen Options button located on the top-right of the page and check the Events, Organizers, and Venues boxes. This will add these items to the menu builder, enabling you to place them in a menu.

![This image shows items that can be selected by check marking boxes that will be shown in the menu editor. ](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2023-08-17-at-11.14.52-AM.jpg)

---

