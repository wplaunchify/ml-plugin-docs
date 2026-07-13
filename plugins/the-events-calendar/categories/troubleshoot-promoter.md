# Troubleshoot Promoter

*Category from The Events Calendar documentation*

---

## Troubleshooting Promoter

**Source:** [https://docs.nexcess.com/software/the-events-calendar/troubleshoot-promoter/](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-promoter/)

## Connection Issues

Promoter needs to be properly and securely connected to your WordPress site at all times in order to work correctly.

On your end, that means making sure you are meeting all the requirements from our [setup guide](https://docs.nexcess.com/software/the-events-calendar/configure-promoter/), including making sure that both the The Events Calendar and Event Tickets plugins are updated and active on your WordPress site.

On the Promoter side of things, three elements are needed for that to happen:

1. Your user ID
2. Your Promoter license key
3. Your authentication token

If, for whatever reason, one of these three elements is missing, it’s possible that your events, tickets, and attendees will no longer sync with Promoter. In that case, you’ll likely see this notification in your Promoter account:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-2-1024x54-1.png)

Simply click on the “click here” link. This will take you through the Promoter authorization process, exactly the same way you did when first registering your Promoter account.

**Your data will not be lost in this process.**This is a completely safe procedure and all of your content — messages, lists, custom shortcuts, etc. — will be left intact in both Promoter and WordPress.

Once you successfully go through the Promoter authorization process, a success message should display Promoter will continue to sync events, tickets, and attendees with WordPress.

Your events, attendees and tickets will now be able to sync properly once again.

If for some reason, you are still getting an alert that there is an issue, we recommend installing the [Promoter Connection Status extension](https://theeventscalendar.com/extensions/promoter-connection-status/). This will help us to troubleshoot things faster.

You can connect to Promoter with the following server IP address:

```
209.87.149.23
```

### Whitelisting the Promoter IP Address

There might be some cases in which your server or service in your WordPress site cannot access the Promoter service. If this is the case, it is possible that you need to whitelist the Promoter IP in order to be accessible. 

Each service or server will have its particular configuration to whitelist a particular IP. Still, you can learn more about whitelisting in [this article](https://managewp.com/blog/whitelist-ip-addresses) and review a few examples of how to do so.

You can whitelist Promoter using the following server IP address:

```
209.87.149.23
```

If you also encounter the error message:

```
The previous sync request failed. Make sure your site has at least one event with tickets available.
```

Whitelisting the Promoter’s IP address will resolve it.

If you are still unable to fix an issue on your own, please reach out to [our support team](https://support.theeventscalendar.com/) so they can figure out what’s going on and get things back on track.

## Messages Not Sending

If you are unable to send messages, chances are that your account has been placed on hold.

This typically happens if you have exceeded the sending limits of our API or if there was a declined or failed transaction while trying to renew your subscription.

Thankfully, you are still able to access your account when it is placed on hold. Furthermore, your data, including messages you have created, will remain in place.

Please [contact us](https://support.theeventscalendar.com/submit_ticket) if your account is on hold so that we can help unfreeze it.

## Active Events Show as Archived

If your “active” events are appearing as archived in your Promoter dashboard, several factors could be at play. Here are the most common reasons why this happens and how you can resolve them.

#### Common Reasons for Events Being Archived

1. **Events Created with Past Dates**
- When creating an event, its details are fetched by Promoter via the API.
- If the event initially has a past date, Promoter will classify it as a “past” event and move it to the Archived section.
- Even if the event is rescheduled to a future date, it may remain archived until a schedule sync occurs, which might take some time.
2. **Missing Events on the REST API**
- Promoter relies on your website’s REST API to fetch event data.
- All events should be accessible at this URL:
**https://yourwebsite.com/wp-json/tribe/events/v1/events/**
- If an event is missing from this path, Promoter will automatically archive it.
3. **Caching Issues**
- Caching can cause outdated event information to be sent via the REST API.
- This could result in Promoter detecting old data and archiving events incorrectly.

#### How to Fix the Archived Events

Make sure that the affected events are saved with the correct dates. Then you can trigger a [manual sync](https://theeventscalendar.com/knowledgebase/how-to-manually-sync-events-or-tickets-in-promoter-a-step-by-step-guide/) to see if those events are moved to the upcoming section on your Promoter account.

If you have an active [caching](https://docs.nexcess.com/software/the-events-calendar/caching-with-the-events-calendar/), and you were able to set the excluded URL/path, we advise adding this wild carded 
```
https:yourwebsite.com/wp-json/tribe/*
```

 (URL) and 
```
/wp-json/tribe/*
```

 (path) to it.

This will ensure that Promoter will always get the updated information on your events every time it syncs.

By addressing these issues, you can ensure that your events appear correctly as “Upcoming” in your Promoter dashboard. If the problem persists, consider reaching out to Promoter support for further assistance.

## Events Not Appearing in Promoter

Promoter syncs events by scheduling periodic imports from your site’s REST API endpoint at 
```
https://your-site-here.com/wp-json/tribe/events/v1/events
```

. Every time you add or update an event in WordPress, a notification is also sent to Promoter automatically via the REST API.

⚠️ **Promoter will only sync events that have tickets associated with them and at least one attendee.** If a missing event has no tickets or no attendees yet, it won’t appear in Promoter regardless of other settings.

If events that should be syncing are still missing, work through the following checks:

- **Caching plugins or services.** Active caching tools (WP Optimize, W3 Total Cache, Cloudflare, Jetpack, etc.) can prevent Promoter from reading the latest event data. Flush all cached content and check whether the event appears. See the [caching configuration archive](https://theeventscalendar.com/knowledgebase/tag/caching/) for guidance on configuring common tools to work with our products.
- **Outdated plugins.** Ensure you are running the latest versions of [The Events Calendar](https://wordpress.org/plugins/the-events-calendar/) and [Event Tickets](https://wordpress.org/plugins/event-tickets/).
- **Security restrictions.** Security plugins or server-level firewalls may be blocking Promoter’s access to your site. See the [Whitelisting the Promoter IP Address](#h-whitelisting-the-promoter-ip-address) section above.
- **Incomplete setup.** Confirm that the [Promoter setup](https://docs.nexcess.com/software/the-events-calendar/configure-promoter/) has been fully completed.
- **HTTPS configuration.** Verify that your site uses [HTTPS consistently across all pages](https://en.wikipedia.org/wiki/HTTPS). Mixed content or HTTP-only pages can disrupt the sync.
- **Restricted domain names.** Promoter cannot sync events from sites whose domain or subdomain contains 
```
staging
```

, 
```
dev
```

, or 
```
test
```

. See the [setup guide](https://docs.nexcess.com/software/the-events-calendar/configure-promoter/) for the full list of restrictions.
- **WordPress account permissions.** The WordPress account used to authorize Promoter must have administrator-level permissions. See [Promoter Connection Issue](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-promoter/) for re-authorization steps.
- **Membership plugin conflicts.** Membership-type plugins can interfere with Promoter’s access to event data. [Test for conflicts](https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/) by temporarily deactivating them.
- **REST API disabled.** If you are using the [Events Calendar Tweaks](https://theeventscalendar.com/extensions/the-events-calendar-tweaks/) extension, confirm that the “Disable REST API for The Events Calendar” option is turned off.
- **WordPress error logs.** Review your [WordPress error logs](https://www.wpbeginner.com/wp-tutorials/how-to-find-and-access-wordpress-error-logs-step-by-step/) for any errors related to the Promoter API that may point to the underlying cause.

### How to Manually Trigger a Sync

If a specific event is missing from Promoter and you want to force it to sync without waiting for the next automatic import, you can trigger a sync request manually:

1. Go to your WordPress admin dashboard and open the event that is not appearing in Promoter.
2. Make any minor edit to the event — or simply click **Update** without changing anything. Either action sends a fresh sync request to Promoter via the REST API.
3. Wait a few minutes for Promoter to process the request, then check whether the event has appeared.

If the event still doesn’t appear after a manual sync, work through the checks in the [Events Not Appearing in Promoter](#h-events-not-appearing-in-promoter) section above.

---

