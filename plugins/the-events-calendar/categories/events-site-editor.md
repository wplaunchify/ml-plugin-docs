# Events Site Editor

*Category from The Events Calendar documentation*

---

## Using WordPress Site Editor with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/events-site-editor/](https://docs.nexcess.com/software/the-events-calendar/events-site-editor/)

The [Site Editor](https://evnt.is/1b2p) is a relatively new feature from the WordPress core developers.  Site Editor allows you to use the block editor for every part of your website, rather than just posts and pages.

In order to utilize the Site Editor, your site needs to use a theme that supports it, such as [Kadence](https://wordpress.org/themes/kadence/) or [Twenty Twenty-Four](https://wordpress.org/themes/twentytwentyfour/).

## Integration with Site Editor

The Site Editor integration with our plugins is a large-scale project that we have been working on in phases. You can use The Events Calendar with a Site Editor theme with some limitations:

- You can create Site Editor templates for
- Events archive (calendar views)
- Single events
- Single venue
- Single organizer
- While you can’t use Site Editor to design the inner content of calendar components, you can still control the header, footer, and columns fully.
- You can create Site Editor templates for:
- Single venue
- Single organizer
- For now, you cannot create Site Editor templates for:
- Event category
- Event tag
- Events widgets are not available through the Site Editor widget admin. See the workaround below: using widget shortcodes.

Keep an eye on our [Release Notes](https://theeventscalendar.com/category/release-notes/) for future updates to Site Editor compatibility.

## Event Widgets

As mentioned above, you won’t yet see Events widgets in the widget admin. However, our premium users can get around that by using our [calendar widget shortcodes](https://theeventscalendar.com/knowledgebase/k/events-calendar-pro-widget-shortcodes-overview/) with the Shortcode block.

One popular shortcode you can use is [tribe_mini_calendar]. Perhaps you want a small calendar to show up in your footer? With Site Editor, you can easily edit your footer using the Gutenberg blocks. Add a Shortcode block and paste in the [[tribe_mini_calendar]](https://theeventscalendar.com/knowledgebase/k/events-calendar-pro-widget-shortcodes-overview/#mini-cal-shortcode) shortcode, and voila! You now have a mini calendar in your footer!

- Click **Edit Site**in the admin bar (if you don’t see **Edit Site**in the admin bar, then your theme doesn’t support the Site Editor)
![](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-edit-site.jpg)
- Scroll down and click on the **Footer** to edit it
- From here, you can add blocks just like you would on a post or page. Click the + sign and select the **Shortcode block**![](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-find-shortcode.jpg)
- Type in the shortcode you wish to add. In this example I added **[tribe_mini_calendar]**
![](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-insert-shortcode-optimized.jpg)
![](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-preview-shortcode.jpg)

## The Navigation Block

Part of the Site Editor is the ability to add items to your menu right from the front end, using the same **Edit Site** feature we just utilized above.

- To add a link to an event, click on **Edit Site** in the Admin bar
![](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-edit-site.jpg)
- Press Ctrl / **⌘**+K or open up the command window, then type the Header.
![](https://docs.nexcess.com/wp-content/uploads/2026/06/Open-header-section.jpg)
- If you hover over the menu, you should see a + sign that you can click on to add a link
![](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-add-menu-item.jpg)
- Start typing the name of the event you want to add a link to and select it when it pops up.
![](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-add-event-link.jpg)

That’s it! Now you have a link to the event in your navigation, and it was much easier than tracking down the URL and adding a custom link.

---

