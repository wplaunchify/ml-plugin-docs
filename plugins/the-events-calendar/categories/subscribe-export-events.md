# Subscribe Export Events

*Category from The Events Calendar documentation*

---

## Subscribing to and Exporting Events

**Source:** [https://docs.nexcess.com/software/the-events-calendar/subscribe-export-events/](https://docs.nexcess.com/software/the-events-calendar/subscribe-export-events/)

Having a calendar of events on your WordPress site is great. Wouldn’t it be super awesome if you could get those events into a personal calendar as well?

You’re in luck. The Events Calendar includes a nifty option for you and your visitors to export the events or subscribe to the calendar on your website in a flash. Visit your calendar and you’ll notice a button at the bottom.

![Subscribe to calendar on calendar page](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-07-08-at-6.38.54-AM.jpg)

Click on **Google Calendar** and you’ll be redirected to your Google Calendar, where you’ll be prompted to add events directly to your Google Calendar. It might take Google some time to get the events; they might not show up immediately. Also, if you choose this option, Google Calendar will update with any event changes from the website every **24 hours** (this time frame is created by Google Calendar).

Use the **iCalendar** option to subscribe to the calendar in your iCalendar application. The frequency with which this calendar syncs with iCalendar will depend upon your iCalendar settings.

The **Export .ics file** option will download an .ics file for you to add events to any other application that you’d like. Once exported, this will not change, so you’ll need to export a new .ics file every time new events are added or modified.

**Note:** Access to the .ics file must be set to public, otherwise it will not display for your users.

If you’re wondering what the heck an .ics file is, it allows you to import events into a calendar application, like Apple’s iCal or Google Calendar. For example, here are [the step-by-step instructions](https://support.google.com/calendar/answer/37118?hl=en) for importing an .ics file into a Google Calendar.

There are also links on individual event pages, so your customers can choose to add a specific event to their personal calendar. Note that when using the *Add to*link for Google Calendar, any updates to the event will not be synced to the user’s personal calendar.

![Add to calendar buttons on single event page](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-07-08-at-6.37.37-AM.jpg)

## Syncing vs Exporting Differences

**Note: There is a major difference between exporting events from your website calendar and subscribing to the calendar.**  If you use the Google Calendar and iCalendar options, you’ll be able to subscribe to the calendar. This means that all new events and event updates will automatically appear on your personal calendar. Subscribing to events will always create a new calendar in your app.

With the export .ics option, you download a snapshot of the event(s) as they show on the site now. You can then import the event(s) into your personal calendar. If the events are updated on the source calendar, the updates will *not*show on your personal calendar. Similarly, new events added to the source calendar won’t be added to your personal calendar–unless you go back and download a new .ics file. When you add events from an .ics file, they can be added to your existing calendars in the app.

There you have it! You are now fully versed in exporting and syncing your calendar’s events and importing them into another application.

## Subscribing to and Exporting Events from Mobile

If you try subscribing from a mobile phone, you might encounter a different behavior. iOS devices will have the same subscription options as desktop devices. On Android, however, things work a little differently.

On **Android devices**, when you click an 
```
iCal
```

 or 
```
Google Calendar
```

 link, the system doesn’t automatically open the **Google Calendar** app. Instead, Android tries to open those links in the default web browser. That means instead of adding the subscription to the Calendar app directly, the user ends up on a webpage that often doesn’t complete the subscription correctly. This creates confusion and sometimes leaves users thinking the feature is broken.

On the other hand, the **iCalendar**option is designed specifically for iOS and macOS devices. It doesn’t work reliably on Android.

Because of these limitations, our developers decided to hide Google Calendar and iCalendar subscription links on Android****to prevent users from running into dead ends or confusing behavior.

If you’d rather display these options, you can bring them back by using the CSS snippet below. Just place it in Dashboard > Appearance > Customize > Additional CSS.

```
.tec-is-android.post-type-archive-tribe_events .tribe-events-c-subscribe-dropdown__list-item { display: list-item; }
```

Note: The limitation only applies to the calendar feed. Subscribing to a single event will display all available options.

## Customizing the Subscribe and Export Options

See our focused customizing articles:

- [Customizing Subscribe and Export Display](https://docs.nexcess.com/software/the-events-calendar/customize-subscribe-export/)
- [Customizing the Calendar Export Functionality](https://docs.nexcess.com/software/the-events-calendar/customize-export-function/)

---

