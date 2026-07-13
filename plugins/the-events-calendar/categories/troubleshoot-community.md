# Troubleshoot Community

*Category from The Events Calendar documentation*

---

## Troubleshooting Community Events

**Source:** [https://docs.nexcess.com/software/the-events-calendar/troubleshoot-community/](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-community/)

## “There was a problem saving your Event, please try again.” Error

You may receive reports from users that they encounter the following error upon submitting events on your site.

```
"There was a problem saving your Event, please try again."
```

When users encounter this error while submitting events via the [Community](https://theeventscalendar.com/products/community/) plugin, it’s often due to caching misconfigurations. Caching plugins or server-side caching can interfere with the submission process, leading to this issue.​

#### Identify and Disable Caching Plugins

Begin by identifying any active caching plugins on your WordPress site, such as:​

- W3 Total Cache
- WP Super Cache
- WP Rocket
- LiteSpeed Cache​

**Steps:**

1. Navigate to **Plugins → Installed Plugins** in your WordPress dashboard.
2. Deactivate any caching plugins.
3. Clear your site’s cache and browser cache.
4. Attempt to submit an event again.

If the error no longer occurs, the caching plugin was likely the culprit.

If you need to keep your caching plugin active, it’s essential to configure it to exclude the Community Events files from being cached. For guidance on setting up exclusions with specific caching plugins, refer to [The Events Calendar’s Caching articles](https://theeventscalendar.com/knowledgebase/tag/caching/). If your caching plugin isn’t listed, you can manually exclude the relevant Community Events files by following the instructions provided in [this article](https://docs.nexcess.com/software/the-events-calendar/calendar-caching/).​

#### Check Server-Side Caching

Some hosting providers implement server-side caching mechanisms. If you’re using a managed WordPress host, check if they offer server-side caching and request them to exclude the Community Events submission page from caching.

#### Test for Plugin and Theme Conflicts

Conflicts with other plugins or themes can also cause this error.​

You can test this by following the steps below:

1. Switch to a default WordPress theme (e.g., Twenty Twenty-One).
2. Deactivate all plugins except [The Events Calendar](https://theeventscalendar.com/products/wordpress-events-calendar/) and **Community Events**.
3. Attempt to submit an event.
4. If successful, reactivate plugins one by one to identify the conflicting plugin.​

This process helps isolate the source of the conflict.

Check out [this article](https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/) for further details.

---

