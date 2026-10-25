# Fix 404 Errors

*Category from The Events Calendar documentation*

---

## Fixing HTTP 404 Errors

**Source:** [https://docs.nexcess.com/software/the-events-calendar/fix-404-errors/](https://docs.nexcess.com/software/the-events-calendar/fix-404-errors/)

If you’re seeing 404 errors related to The Events Calendar, the right solution depends on what kind of 404 you’re dealing with. This article covers three distinct situations:

- Event pages that are broken and returning 404 errors to real visitors
- 404 errors appearing after importing events with WP All Import
- 404 and soft 404 flags appearing in Google Search Console or other SEO tools

👋 If your entire site is returning 404 errors — not just event pages — contact your hosting provider. That’s a server-level issue outside the scope of this article.

---

## Fixing 404 Errors on Event Pages

If visitors to your site are seeing 404 – Not Found when they try to view event pages, work through the steps below in order. Most people are back up and running after step one.

#### 1. Flush Your Permalinks

This resolves the vast majority of event page 404 errors. Re-saving your permalink settings forces WordPress to regenerate its URL rewrite rules, which TEC depends on.

1. Log in to your WordPress admin area.
2. Go to **Settings → Permalinks**.
3. Select the **Post Name** option (or any non-default option if you’re already using one).
4. Click **Save Changes**.

Visit your main events page and check that event pages, calendar views, and single event pages all load correctly. If so, you’re done.

#### 2. Re-Save the Affected Event

Open the event in the WordPress editor, make a minor change, and click **Update**. This can regenerate missing slug or metadata that’s causing the 404. If it’s a recurring event, select *Save for all events* when prompted.

#### 3. Check Your Custom Tables Health

Event data is stored in custom database tables. A failed or incomplete migration can cause 404 errors on event pages. In your WordPress dashboard, go to **Events → Troubleshooting** and check that the Custom Tables Health Check shows a **Good!** status.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/001-1024x341-1.jpg)

#### 4. Check That the View Is Enabled

If the 404 is on a specific calendar view, such as /events/photo/ or /events/week/, that view may be turned off. Go to **Events → Settings → Display** and make sure the view is enabled. The Events Calendar returns a 404 for the URL of any view that is turned off. If you would rather have those URLs redirect to your default view, go to **Events → Settings → Display**, find **SEO & URL Handling**, and turn off “Return 404 for disabled view URLs”.

#### 5. Test for Plugin or Theme Conflicts

Another plugin or your active theme may be interfering with TEC’s URL routing. Follow the steps in our [Testing for Conflicts guide](https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/), then re-save your permalinks once you’ve completed it.

#### Still Not Fixed?

If none of the above resolved the issue, gather the following before contacting support:

- Try switching your permalink structure to the default setting. Does that clear the 404s? Note this when you open a ticket.
- [Open a support ticket](https://theeventscalendar.com/support/) and include your System Information from **Events → Troubleshooting**.

---

## 404 Flags in Google Search Console and SEO Tools

If you use Google Search Console or a similar SEO tool and are seeing 404-related flags on your calendar pages, this is a different situation from a broken event page. In most cases, nothing is wrong with your site — but it helps to understand what you’re actually looking at.

### Hard 404s vs. Soft 404s

There are two things Google Search Console can flag as a “404,” and they have very different causes and implications.

A **hard 404** is a genuine not-found error: the page doesn’t exist, and your server returns a 404 HTTP status code. If your event pages are returning hard 404s in Search Console, follow the troubleshooting steps in the first section of this article.

A **soft 404** is different. It’s a page that returns a 200 (success) HTTP status code — so the page technically exists and loads — but Google has judged the content to be too thin or empty to be worth indexing. According to [Google’s own definition](https://developers.google.com/search/docs/advanced/crawling/http-network-errors#soft-404-errors), a soft 404 occurs when “a URL returns a page telling the user that the page does not exist and also a 200 (success) status code.” Crucially, you cannot cause or prevent a soft 404 from your end — it exists only within Google’s own logic, and the exact criteria change over time.

### Why Event and Calendar Pages Get Flagged

**Venue and organizer pages with no upcoming events.** When you create a venue or organizer in TEC, an archive page is automatically generated for them. If that venue or organizer has no events currently assigned — either because none have been added yet, or because all their events are in the past — the page exists but contains very little content. Google may flag these as soft 404s. This is not an error on your site. Once you add events for those venues and organizers, the pages will have enough content and the flags will resolve on their own.

**Dates outside your range of events.** Day, Month and List View URLs with a date before your earliest event or after your latest event return a hard 404 by design. For example, 
```
/events/2031-01-05/
```

 returns a 404 when your last event is in 2027. This keeps search engines from indexing an endless run of empty calendar pages. Days and months inside your range of events that simply have no events load normally with a 200 status. Google may flag the out-of-range URLs.

### What to Do About It

For **soft 404s on venue and organizer pages**: in most cases, nothing immediate is required. Adding events for those venues and organizers is the natural resolution. If you want to be proactive, you can use an SEO plugin such as Yoast or Rank Math to set individual venue or organizer pages to 
```
noindex
```

, which tells Google not to crawl them. Keep in mind that you’ll need to remove the noindex setting once those pages have enough content and you want them indexed again.

For **404s on dates outside your range of events**: in most cases nothing needs to be done, because this is the intended behavior. If you would rather serve List View URLs that carry a date with a 200 status and a noindex directive, go to **Events → Settings → Display**, find **SEO & URL Handling**, and set “Out-of-range date URL behavior” to “Return HTTP 200 with a noindex directive”. This setting applies to List View URLs with a date; Day and Month View URLs outside your range still return a 404.

We do not recommend forcing a 200 status on every empty page with custom code. It also turns real missing pages, such as a deleted event, venue or category, into soft 404s, which is worse for search engines. A long list of 404 flags in Search Console looks alarming, but its real-world impact on rankings is often minimal. Search engines are generally good at distinguishing between broken pages and intentionally empty archive pages.

---

