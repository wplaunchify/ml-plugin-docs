# Troubleshoot Date Error

*Category from The Events Calendar documentation*

---

## Fixing Events That Show the Date January 1, 1970

**Source:** [https://docs.nexcess.com/software/the-events-calendar/troubleshoot-date-error/](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-date-error/)

If you’re seeing your event dates appear as **January 1, 1970**, you’re not alone, and you’re definitely not doing anything wrong. This is a common issue that can happen for a few different reasons. In this article, we’ll walk you through why this happens, how to troubleshoot it, and what information to share with our support team if you still need help.

## Why January 1, 1970?

In computing, January 1, 1970, is known as the “[Unix Epoch](https://en.wikipedia.org/wiki/Unix_time)“, the point where time starts for Unix-based systems. When a system can’t correctly read or find a date, it often falls back to this default value, which represents 0 seconds after 00:00:00 UTC on that day. In the case of our calendar plugin, seeing this date usually indicates that the event is missing a valid start or end date.

## Common Causes

There are several reasons why event dates might display incorrectly:

- **Importing Events:** If you [imported events using a CSV file](https://docs.nexcess.com/software/the-events-calendar/import-events-csv/) and the date fields were missing, improperly formatted, or mapped incorrectly, the system may assign a default date of January 1, 1970.
- **Duplicating Events:** If you [duplicated an existing event](https://docs.nexcess.com/software/the-events-calendar/duplicate-events/), but the date fields were not properly carried over or saved during the duplication, the event might revert to the default date.
- **Creating Events Manually:** If an [event was created directly](https://docs.nexcess.com/software/the-events-calendar/create-event/) through the WordPress admin UI, but the date fields were left empty or an error occurred while saving, the date might not be recorded properly.
- **Theme or Plugin Conflicts:** Occasionally, third-party themes or plugins can interfere with how event dates are saved or displayed.
- **Database or Server Issues:** In rare cases, if there are table encoding problems or server misconfigurations, dates may not be saved correctly.

## Troubleshooting Steps

Before reaching out to support, we recommend walking through these steps:

1. **Review the Event’s Date Settings:**
Double-check that both the start and end dates are set correctly in the event editor or on the import source e.g. CSV file.
2. **Check for Formatting Errors in Imported Files:**
If you imported events, [review your CSV file](https://docs.nexcess.com/software/the-events-calendar/import-events-csv/#events)to ensure that the date formats are correct (
```
YYYY-MM-DD
```

 or as required).
3. **Try Creating a Fresh Event:**
Manually create a brand-new event through the WordPress dashboard (without duplicating or importing) and see if the date saves correctly.
4. **Conflict testing:**
Temporarily switch to a default WordPress theme (like Twenty Twenty-Four) and disable other non-calendar plugins to rule out a possible [conflict](https://theeventscalendar.com/knowledgebase/wp/wp-admin/post.php?post=1965033&action=edit).
5. **Check Server and Database Health:**
Make sure your WordPress, PHP version, and database are updated and functioning properly.

## What to Include in Your Support Ticket

If none of the troubleshooting steps resolve the issue, we’re here to help! To speed up the process, please include the following information in your support ticket:

- A detailed description of how the event was created (imported, duplicated, created manually).
- A screenshot of the event edit screen showing the date fields.
- If imported, a sample of the CSV file you used.
- Latest System information

By providing as much information as possible, you’ll help us diagnose the problem faster and get your events displaying correctly again.

---

