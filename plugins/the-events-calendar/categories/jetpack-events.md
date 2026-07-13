# Jetpack Events

*Category from The Events Calendar documentation*

---

## Using Jetpack with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/jetpack-events/](https://docs.nexcess.com/software/the-events-calendar/jetpack-events/)

[Jetpack](http://jetpack.me) is an incredibly popular plugin—or rather a set of plugins—that enhances a self-hosted WordPress site with many of the features that come bundled with a site hosted on WordPress.com. 

For the most part, Jetpack and The Events Calendar work very well together. However, there are a few conflicts worth noting and we’ll cover those in this post.

### Jetpack Sharing

This Jetpack feature adds a series of social sharing options to pages and posts. Another awesome thing it does is that it supports custom post types, making it compatible with Events, which are in fact a custom post type, as are the Venues and Organizers included in The Events Calendar PRO.

When setting up Jetpack Sharing, these are the options that will enable the social icons to display on your Events posts.
![kb-jetpack-sharing](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-jetpack-sharing.jpg)

This works just fine on many themes, including default WordPress themes. There are instances though where those social icons may not display for certain themes.

[Here’s a thread](https://wordpress.org/support/topic/cant-see-sharing-buttons-on-my-events-calendarpages) from the Jetpack support forum that resolved an issue where the theme’s default template was not allowing the social icons to display. The plugin author was able to write a snippet that hooked into the template, then recommended some Jetpack settings that enabled the social icons to properly display.

We’ve also [encountered a situation](https://theeventscalendar.com/support/forums/topic/plugin-conflict-with-jetpack-social-sharing/) where Jetpack Sharing may conflict with The Events Calendar’s Google export option when using a Genesis theme. In this case, [adding a snippet](http://pastebin.com/VydyE6Qn) to the theme’s *functions.php* file corrected the issue, though it does move the social icons a bit in the layout.

### Jetpack Widget Visibility

Jetpack Visibility provides more freedom to control which on pages and posts widgets should be displayed. It’s pretty sweet. Set a filter that hides the widget from all Category archives, and the widget will be hidden without having to create a new sidebar.

The first issue is that The Events Calendar does not actually ship with a sidebar area. To get a sidebar in the calendar, we either need to switch the calendar template (under Events > Settings > Display) to use an existing theme page template with a sidebar, or add a sidebar area directly to the calendar’s *default-template.php* file using [a template override](https://theeventscalendar.com/knowledgebase/k/themers-guide/).

There’s also an issue with how Jetpack Widget Visibility views The Event Calendar’s pages and posts. Where Events are a custom post type, Widget Visibility lists them as a page type instead:
![kb-jetpack-widget-event](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-jetpack-widget-event.jpg)

That’s nice because this setting will indeed hide the widget from any individual Event post. However, it’s bad because the other event pages, such as the main calendar, are not included in this list.

To clarify things a bit, the main events calendar and all categories are archives rather than pages. It might sound, then, like we would be able to use the filter that hides the widget from Archives instead:
![kb-jetpack-widget-archive](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-jetpack-widget-archive.jpg)

Not a bad guess, but unfortunately this does not work. For some reason or another, Widget Visibility neither recognizes the main calendar nor event categories as a type of Archive.

There isn’t much we can do about this at the moment. However, one idea might be to [register a new sidebar area](https://codex.wordpress.org/Function_Reference/register_sidebar) in your theme, then use [a template override](https://theeventscalendar.com/knowledgebase/k/themers-guide/) to include the specific widgets you want directly in the calendar’s *default-template.php* file.

### In conclusion

Hopefully, this posts helps clarify some of the outstanding conflicts between The Events Calendar and Jetpack. Please know that we are very interested in making The Events Calendar more compatible with Jetpack and are actively looking into what we can do on our end to make that happen.

In the meantime, please feel free to hit us up at [our helpdesk](https://support.theeventscalendar.com/submit_ticket) if you are bumping into other Jetpack-related conflicts not covered here and we’d be happy to take a look!

---

