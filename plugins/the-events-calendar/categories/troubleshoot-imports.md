# Troubleshoot Imports

*Category from The Events Calendar documentation*

---

## Troubleshooting Event Imports

**Source:** [https://docs.nexcess.com/software/the-events-calendar/troubleshoot-imports/](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-imports/)

Importing events with Event Aggregator is usually painless — but when something goes wrong, the failure mode matters. This article covers the most common import problems: duplicate events multiplying on your calendar, events that silently fail to import, and the error messages you may see when importing from another site’s REST API.

## How Event Aggregator Matches Events

iCalendar feeds and ICS files contain information about events in a [standardized format](https://icalendar.org/), which allows those events to be imported to other platforms. Part of the information that is included for each event is a unique identifier, or UID.

When you import events from an iCalendar feed or an ICS file, Event Aggregator uses an event’s UID to determine whether an event is new and needs to be created or has already been imported. If it finds an event on your site with the same UID, that event will be updated on your site or ignored, depending on your Event Update Authority settings under **Events → Settings → Imports**. If it doesn’t see an event on your site with that UID, it creates a new one.

## Preventing Duplicate Imports

A few habits go a long way toward keeping duplicates out of your calendar in the first place:

- **Use sources that provide stable unique identifiers.** Each event should have a unique ID, URL, or UID (for iCal feeds). If your source feed doesn’t provide stable unique IDs, duplicates become much more likely — see the next section for specifics on which sources have this problem.
- **Stick with one source per calendar.** Import from the same feed or file consistently. Switching sources mid-stream can cause Event Aggregator to misidentify the same event coming from two places and import it twice.
- **Don’t over-schedule imports.** Frequent runs can amplify duplicate issues if event data changes between runs. A daily or weekly schedule usually hits the right balance.
- **Review your import settings.** If you install the [Event Aggregator: Additional Options](https://theeventscalendar.com/extensions/ea-additional-options/) extension, you’ll get an added option under **Events → Settings → Imports** for how previously imported events should be handled — overwrite, preserve, or skip.

## Why Duplicates Still Happen

Typically, a UID remains the same in the source calendar, and each time you run an import, Event Aggregator sees a matching ID for events already imported. However, the UID doesn’t always stay stable. There are a few cases where it changes, which makes Event Aggregator see the event as new.

#### Some Sources Change the UID

In some cases, the source calendar provides a different UID each time the calendar is updated. When that happens, Event Aggregator sees the new UID and creates a new event. Outlook calendars are one such source — the UID changes regularly, so Event Aggregator can’t reliably detect changes.

#### Recurring Events in a Google Calendar

Google Calendars don’t change the UID when single events are modified, but recurring events are a different story. Say you create a recurring event in your Google Calendar that recurs daily, weekly, monthly, or yearly. In the iCalendar feed Google creates, this produces one event entry with a recurrence rule that looks like this:

```
RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20190704T035959Z;BYDAY=WE
```

Event Aggregator reads this and creates single events on your site using the recurrence information. However, if you modify one instance of that event, a new entry with a separate UID is generated in the iCalendar feed. Because the feed doesn’t include any data indicating that this new event is “linked” to the original, Event Aggregator sees two separate UIDs and creates a new event for the modified instance.

Since recurring events import as single events, you can use the *series* feature included with Events Calendar Pro 6.0 and above to group related events together. Head to **Events → Series → Add New**, select the events you’d like to group, and you’ll have a dedicated event page for everything in the series.

## Cleaning Up Duplicates

If duplicates have already made it onto your site, you have three options for cleanup depending on scale.

#### Quick Fix: Hide a Single Duplicate

For a handful of duplicates, the simplest option is to [hide the old version](https://theeventscalendar.com/knowledgebase/ignored-events/) of each event, which prevents it from showing up anywhere on the front end.

#### Snippet Cleanup for Many Duplicates

For a larger cleanup, use the following snippet-based process:

1. Install the free [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin.
2. In your dashboard, go to **Snippets → Add New**. Copy [this snippet](https://d.pr/n/QkE2LD) and paste it into the field.
3. Under the snippet field, select *Only run in administration area* ([screenshot](https://d.pr/i/aY3YCe)).
4. Click the *Save changes and activate* button.
5. From the Dashboard menu, click **Events**. The snippet will start to run and the page will take longer than usual to load. Stay on the page until it loads, and you’ll see the duplicates have been moved to *Ignored* status. This may take a while depending on how many duplicates there are.
6. Go back to **Snippets → All Snippets**. Again, the page will take longer than expected to load. During this time the *Ignored* events will be permanently deleted.
7. Deactivate or delete the snippet.

#### Batched Cleanup for Thousands of Duplicates

If you’ve got a huge number of duplicate events, processing them all at once can time out. In that case, use this batched variant — each run processes up to 1,000 events, and you repeat until you’re done.

1. Install the free [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin.
2. In your dashboard, go to **Snippets → Add New**. Copy [this snippet](https://d.pr/n/hTdF3P) and paste it into the field.
3. Optional: adjust the limit in line 6 to set how many events will be processed per batch.
4. Under the snippet field, select *Only run in administration area* ([screenshot](https://d.pr/i/aY3YCe)).
5. Click the *Save changes and activate* button.
6. From the Dashboard menu, click **Events**. Stay on the page until it loads, and you’ll see some duplicates moved to *Ignored* status. Reload the page and another batch will process.
7. Refresh the page as many times as you need until the duplicate events are fully removed and you no longer see them under *Ignored*.
8. Go back to **Snippets → All Snippets** and deactivate or delete the snippet.

#### The Event Aggregator: Additional Options Extension

For ongoing automation rather than one-time cleanup, the [Event Aggregator: Additional Options](https://theeventscalendar.com/extensions/ea-additional-options/) extension adds a **Delete Duplicate/Removed Events for Scheduled Imports** feature. When scheduled imports run, the extension checks for any current or future events from previous imports (from the same source). If those events aren’t present in the new import, it can take one of three actions based on your configuration:

- Do not delete duplicate/removed events
- Send them to trash
- Permanently delete them

**💡 Note:** This extension currently does not have the ability to delete upcoming events *prior* to the import running.

## When Imports Silently Skip Events

Sometimes specific events just don’t show up after an import. You check your feed settings, API limits, date ranges, and everything else — and still nothing. Yet the import logs look clean, with no errors. A common cause is a naming conflict with events in your **Ignored** or **Trash** folders.

When an event name matches one already in Trash or Ignored, Event Aggregator and Eventbrite Tickets treat it as already accounted for — deliberately excluded — and skip the import. Even a trashed event can block a re-import until it’s cleared out or restored.

#### Diagnosing the Silent Skip

1. **Identify which events are missing.** Make a list of the events you expected to import but don’t see on your calendar. Note their names, dates, and any unique details.
2. **Check the Ignored folder.** In your WordPress dashboard, go to **Events → Ignored**. Search by event name — a match here may be blocking the import.
3. **Check the Trash folder.** Go to **Events → Trash** and search again. Even a trashed event can cause the system to treat the incoming event as a duplicate and refuse to reimport.

![Ignored and Trash folders in the Events menu](https://docs.nexcess.com/wp-content/uploads/2026/06/Image-2025-01-12-at-9.37.40-AM.jpg)

#### Clearing the Conflict

Once you locate the conflicting entry in Ignored or Trash, you have two options:

- **Delete permanently.** Empty the trash or permanently remove the ignored entry. This clears the name conflict so the import can treat the incoming event as new.
- **Restore it.** Restore the existing entry to Published or Draft status. The event then already exists, and the import logic may update it rather than skip it (depending on your import update settings).

After clearing or restoring the conflicting event, re-run the import manually or let the next scheduled run execute. Watch the preview or logs to confirm the formerly missing event now appears in the list to be imported or updated, and check your calendar to verify it shows up.

## Fixing the “Sorry, this file type is not permitted” Error

If you see an error saying *“Sorry, this file type is not permitted for security reasons”* when uploading a CSV, add the following snippet to your theme’s 
```
functions.php
```

 file:

<?php
add_filter( ‘upload_mimes’, function( $types ) {
    $types[‘csv’] = ‘text/csv’;
    return $types;
} );

## “Other URL” Import Errors

The “Other URL” import source lets you fetch events from another website running The Events Calendar. When that import fails, you’ll typically see one of the following error messages. Each one points at a slightly different problem.

#### REST API Not Supported

*“Events could not be imported. The requested URL does not support The Events Calendar REST API.”*

**Cause:** The site you’re trying to pull events from is on an older version of WordPress or has disabled the WP REST API infrastructure.

#### REST API Disabled

*“Events could not be imported. The Events Calendar REST API is disabled on the requested URL.”*

**Cause:** The site you’re trying to pull events from supports The Events Calendar REST API but has disabled it.

#### Malformed Data

*“Events could not be imported. The URL provided could be reached and has The Events Calendar REST API enabled, but returned malformed data.”*

**Cause:** The site provided data that is malformed and differs to varying degrees from the expected format. This could be due to a communication error between the EA service and the source site, or due to a custom modification of The Events Calendar REST API that provides a response in a format we can read.

#### Archive Control Data Error

*“Events could not be imported. The URL provided could be reached and has The Events Calendar REST API enabled, but there was an error while fetching the archive control data.”*

**Cause:** Similar to the Malformed Data error above, this happens when the archive page the EA service is trying to fetch provides inconsistent or bad data regarding page number, totals, or format. This could be due to a communication error between the EA service and the source site, or due to a custom modification of The Events Calendar REST API that provides a response in a format we can read.

#### Total Event Count Error

*“Events could not be imported. The URL provided could be reached and has The Events Calendar REST API enabled, but there was an error while fetching the total number of events.”*

**Cause:** The EA service needs to know how many events exist matching a criteria. If the source site doesn’t provide that information, events can’t be pulled from it. This could be due to a communication error or a custom REST API modification that provides a response in a format we can read.

#### Non-Numeric Event Count

*“Events could not be imported. The URL provided could be reached and has The Events Calendar REST API enabled, but returned malformed data in regard to the total number of events.”*

**Cause:** The EA service needs to know how many events exist matching a criteria. If the source site provides that information but it’s not a number, events can’t be pulled from it. This could be due to a communication error or a custom REST API modification that provides a response in a format we can read.

#### Archive Page Fetch Error

*“Events could not be imported. The URL provided could be reached and has The Events Calendar REST API enabled, but there was an error while fetching an archive page.”*

**Cause:** The data returned for an archive page the EA service requested was malformed or inconsistent. This could be due to a communication error or a custom REST API modification that provides a response in a format we can read.

#### Empty Archive Page

*“Events could not be imported. The URL provided could be reached and has The Events Calendar REST API enabled, but returned an empty archive page.”*

**Cause:** The EA service knows when an archive page is going to be empty, but that knowledge depends on data the source site provides. If the reported data and the reality don’t align, the EA service can run into an empty archive page. This could be due to a communication error or a custom REST API modification that provides a response in a format we can read.

#### Event Data Fetch Error

*“Events could not be imported. The URL provided could be reached and has The Events Calendar REST API enabled, but there was an error while fetching the event data.”*

**Cause:** The EA service could find the requested event but received inconsistent or malformed data when trying to fetch it. This could be due to a communication error or a custom REST API modification that provides a response in a format we can read.

#### Empty Event Data

*“Events could not be imported. The URL provided could be reached and has The Events Calendar REST API enabled, but returned empty event data.”*

**Cause:** The EA service could find the requested event but received empty data when trying to fetch it. This could be due to a communication error or a custom REST API modification that provides a response in a format we can read.

#### Site Not Compatible

*“ERROR: Event Aggregator cannot import events from this site.”*

**Cause:** The website may be one of the following:

- Not a WordPress website
- A WordPress website without the latest The Events Calendar plugin installed or activated
- A WordPress website on an older WP version that doesn’t support the REST API

#### Connection Not Completed

*“ERROR: There was an error fetching the results from your import: The connection was not completed correctly. This means the connection is having problems to complete — try with a smaller number of events or check if your connection is active.”*

**Cause:** This can happen when the data source is not supported — for example, RSS feeds.

---

