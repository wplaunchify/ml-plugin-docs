# Event Import Settings

*Category from The Events Calendar documentation*

---

## Configuring Event Imports

**Source:** [https://docs.nexcess.com/software/the-events-calendar/event-import-settings/](https://docs.nexcess.com/software/the-events-calendar/event-import-settings/)

You can find the full list of settings for Event Aggregator by navigating to **Events** → **Settings** from your WordPress admin’s sidebar, then selecting the **Imports** tab at the top of the page.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Event-Aggregator-Import-Settings.jpg)

All users of The Events Calendar have access to the CSV importer tool and its associated settings. If you have a license for the full Event Aggregator service, you’ll have a more extensive list of settings to allow you optimal control over all of your imports.

This article gives you an in-depth guide to the various settings and how each of them works.

### Event Update Authority

You can make changes to imported events via The Events Calendar and see those changes reflected on your site’s calendar. The owner of the original event source (e.g. the iCalendar feed) might also make changes to their event. The **Event Update Authority** setting controls what happens when an event that has been changed (locally or at the source) is imported again.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-5-1.jpg)

You can choose between three options:

**Option #1: Overwrite my event with any changes from the original source.**Choosing this option means that your events, if re-imported, will always be updated with the latest information from the source, even if that means overwriting changes you’ve made locally.

*Example:* You import a listing for a community picnic from Meetup. After importing, you update the event description with your own content. The next week, you re-import the same event, which now has a new start time on Meetup. The event listing on your calendar updates from the source, which overwrites your content changes with the original event description and automatically updates your listing with the new correct start time.

**Option #2: Do not re-import events. Changes made locally will be preserved.**This option will always keep the changes you make to any imported events. If you re-import from the same source, only new events will be imported–your existing events from that source will not change in any way.

*Example:* You import a listing for a community picnic from Meetup. After importing, you update the event description with your own content. The next week, the Meetup listing updates with a new start time. You do another import from the same source. The community picnic event on your site does not update, maintaining your description and the original start time. However, a new event on the same Meetup page is imported as a new event.

**Option #3: Import events but preserve local changes to event fields.** This option will preserve any changes that are made to your events after importing while still allowing *other* fields to be updated on subsequent imports. If you re-import an event after making any edits, Event Aggregator will omit any fields that have been modified with The Events Calendar, updating only the remaining fields that have changed at the source.

*Example:*You import a listing for a community picnic from Meetup. After import, you update the event description with your own content. The next week, the Meetup listing updates with a new start time, but no changes are made to the original description. You do another import from the same source. Your event listing updates with the new start date and keeps the changes you made to the event description. If the next week the source does update the event’s description and you re-import again, the edited description will be omitted, and the description field will remain unchanged on your site.

### Global Import Settings

The global import settings are options that apply to any import from any source. However, you can override global settings by using any of the source-specific settings below.

For example, you could set *Workshops*as your global default event category, then set the default event category for Meetup imports to *Sports.*Any imports from Meetup would be given the event category *Sports*while all other imports would get *Workshops.*You can also override the event category and status settings on a per-import basis using the options at the bottom of your import preview.

**Default Status –**This setting defines the status of the events, organizer, and venues you import. If you want your imported events to show on your calendar right away, you’ll want to select *Published.*If you’d prefer that imported events are hidden from the front end until you’ve had a chance to look at them, you can choose *Draft*or *Pending Review*.

**Default Event Category –**If you want, you can choose an event category to be given to all your imported events. The event category will be assigned *in addition to*any categories that the event already has from its source, such as the categories included in some iCalendar feeds.

**Show Google Map –**Choose whether or not you want a map to show on the event page. As with the other settings, this can always be adjusted on the individual events page if you change your mind. *Note that this will also impact the Show Google Map setting for new venues created by an import.*

**Import limit type** – This setting allows you to specify a limit type for your manual and scheduled imports, which will cap the number of events that are imported in a single task. Limiting the number of imported events per task reduces the burden that is imposed on slower servers and may positively impact the success of your imports. If you’re noticing a significant number of failed tasks when reviewing your past imports in the *History* tab, it’s worth reviewing your selections for this setting before proceeding with further troubleshooting. You can choose between three options:

- *By date range* – When an import task is performed, all events within a specified period of time from the current date will be imported. You can define the date range for importing new events in the **Import date range limit** field, which appears when selecting this option.
- *By number of events* – When an import task is performed, all events up to a specified number of events will be imported. You can define the number of events that will be imported in the **Import quantity limit** field, which appears when selecting this option.
- *Do not limit (not recommended)* – When an import task is performed, Event Aggregator will attempt to import *all* matching events, with no limitations on date or the number of events. Selecting this option may increase the likelihood of failed imports and is generally not recommended.

Notes:

- Imports performed using the *Other URL* import type will always be limited by date range. You can adjust the preferred date range for these import tasks under [Other URL Import Settings](#other-url-settings).
- Eventbrite Tickets imports are currenly limited to 1 year in the future from the date entered in the *Refine* field.

**Import Process System –**This allows you to select whether you want your imports to be processed Asynchronously or using the cron-based system. **Asynchronous** imports are enabled by default, but might not work correctly in all WordPress installations. In such case, try switching to the **Cron-based** process for maximum compatibility.

**Stop current processes –**Clicking this option will stop and clear all current asynchronous import processes.

### CSV Import Settings

These settings let you specifically control imports made from CSV files. Your options here will override anything you have set in the global settings section.

You can set the default status and default event category for these events in the same way described above. There is no *Show Google Map*setting for CSV imports because that option can be defined for each event in the CSV file itself.

### iCalendar Import Settings

These settings let you specifically control imports made from iCalendar URLs. You have the same three options described [above](#global), but your options here will override anything you have set in the global settings section.

### ICS File Import Settings

These settings let you specifically control imports made from ICS files. You have the same three options described [above](#global), but your options here will override anything you have set in the global settings section.

### Google Calendar Import Settings

These settings let you specifically control imports made from Google Calendar. You have the same three options described [above](#global), but your options here will override anything you have set in the global settings section.

### Meetup Import Settings

These settings let you specifically control imports made from Meetup. You have the same three options described [above](#global), but your options here will override anything you have set in the global settings section.

### Eventbrite Import Settings

These settings let you specifically control imports made from Eventbrite. You have the same three options described [above](#global), but your options here will override anything you have set in the global settings section.

### Other URL Import Settings

These settings let you specifically control imports made from other The Events Calendar sites or Eventbrite using the *Other URL* import type. The first three options here perform the same function as those described [above](#global), but your options here will override anything you have set in the global settings section.

**Import date range** – This setting allows you to specify a range of time for importing new events from sites using The Events Calendar. For example, if the option “One month” is selected, Event Aggregator will attempt to import all matching events occurring up to one month in the future each time an *Other URL* import is performed. Importing events over a large span of time can be taxing on-site servers with limited resources–if you’re noticing a pattern of failed imports when importing from sites using The Events Calendar, you may see benefits from adjusting this setting to a reduced timeframe.

**Import Event Settings** – By default, events imported using the *Other URL* import type will adopt your site’s global event settings. If you’d like to ensure that imported events retain their own individual settings for options such as *Show Google Maps Link*, you can specify that here.

### Can I import from RSS?

RSS is a popular syndication format which is primarily used to help readers subscribe to blogs. Occasionally, we receive questions from users who wish to import event data from RSS feeds — at this time, however, this is not something we support: though a great format in many ways, RSS is not designed with events in mind and isn’t well suited to this task.

### Can I import and schedule from an Office365 account?

Yes absolutely! This will involve locating the Office365 iCal Feed URL, you can do so as follows:

You can now use the “iCalendar” option with the “.ics” URL from the previous step to set up an automated/scheduled import from Outlook.

- Log into Office and open your calendar.
- Click on the “Navigate” tab.
- In the upper left corner of the screen, you will see an option to Share.
- Click the Share hyperlink.
- Enter your email and send the link to yourself.
- In the email you receive, there will be several links. Copy **the last link** that allows you to subscribe to the calendar URL. The link should be the one that ends with “.ics” and not “.html”
- You can now use the “iCalendar” option with the “.ics” URL from the previous step to set up an automated/scheduled import from Outlook.
- In the email you receive, there will be several links. Copy **the last link** that allows you to subscribe to the calendar URL. The link should be the one that ends with “.ics” and not “.html”

### Can I import images with Event Aggregator?

The short answer is yes, you can import images with Event Aggregator! However the types of imports that can handle this are limited. Images can be imported from Eventbrite, Other URLs (Other websites that use none other than The Events Calendar!) and through CSV files. Importing images is not possible when using ICS files, or iCal imports like [Google Calendar](https://www.theeventscalendar.com/knowledgebase/importing-events-from-google-calendar/) or Outlook.

### Event Aggregator Control

There is currently only one option in the *Event Aggregator Control* section of the import settings screen: **Disable Event Aggregator imports**. When checked, this option will totally disable all Event Aggregator imports until it is *unchecked*. Manual imports via CSV will still be possible, but no other import type will work.

**Note:** Disabling Event Aggregator with this option will not affect any actual *events* on your site—it will just stop further imports from happening until the option is unchecked.

---

