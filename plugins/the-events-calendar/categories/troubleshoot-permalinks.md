# Troubleshoot Permalinks

*Category from The Events Calendar documentation*

---

## Troubleshooting Permalinks and Slugs

**Source:** [https://docs.nexcess.com/software/the-events-calendar/troubleshoot-permalinks/](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-permalinks/)

WordPress has a flexible system of URL slugs, permalinks, custom post types (CPTs), and taxonomies. The Events Calendar (TEC) builds on top of this, adding its own custom post types (
```
tribe_events
```

), taxonomies (event categories, tags, venues, organizers), and options for recurring events, etc. Because of all this complexity, some less common (“edge”) cases often cause URL/permalink problems. Below are many of those, along with diagnoses and fixes.

## Common Edge Cases

- **Slug collisions with other post types or taxonomies**
If you use the same slug (URL base) for a custom post type, taxonomy, page, or even a default WP post type, then WordPress may not know what content to load when that slug is requested. For example, you might have a custom taxonomy “events” and the TEC event post type having “events” as its archive or slug.This can lead to 404s or misrouting because two different things are fighting for the same path.
- **Taxonomy-based slugs conflicting with the event permalink structure**
TEC uses event categories/taxonomies. If the category slug or term slug is too similar (or identical) to the event post type slug or event archive slug, they might conflict. Also, changing taxonomy slugs after content is published often requires flushing rewrite rules; forgetting to do this can leave old links broken.
- **Recurring Event Permalink Structure Complexity**
The recurring events insert date strings into the URL. For full functionality, you must use [pretty permalinks](https://docs.nexcess.com/software/the-events-calendar/event-permalinks/) with The Events Calendar and Event Tickets.
- **Multilingual / Translation slug mismatches**
If you’re using WPML (or any translation plugin), TEC includes [integrations](https://docs.nexcess.com/software/the-events-calendar/wpml/) that attempt to translate taxonomy slugs (for example, the “category” base slug) in different languages. If those translations don’t line up with what your rewrite rules or other parts of your site expect, links may break or give 404s.
- **Numeric slugs & “date vs post name” conflicts**
WordPress has special behavior for numeric slugs when your permalink structure includes date components. If your slug is purely a number (e.g., event title “2025”), WordPress may confuse it for a date archive. This is less specific to TEC, but because TEC builds on post slugs and uses date logic (especially for recurring events), this kind of conflict can manifest for event posts.
- **Permalink / Slug Changing Without Flushing Rewrite Rules**
After changing slugs (event post type settings, event archive base, or taxonomy bases), many users forget to **flush rewrite rules**. Without flushing, WordPress may keep using old rules, causing old slugs or archive URLs to 404, or event permalinks to fail. You can flush permalinks by saving Permalinks Settings under **WP Dashboard > Settings > Permalinks**.
- **Theme / Plugin overriding rewrite rules incorrectly**
Some themes or slug/permalink manipulation plugins (or custom code) override rewrite rules. If they do so without considering TEC’s custom post types or taxonomies, they may inadvertently block or override the event post type routes or event category archive routes.

## Diagnosing These Issues

If you suspect that site visitors are getting 404s or wrong content when accessing event pages, categories, or event archives, here are the steps to investigate:

- **Check the event permalink settings in TEC**: In WordPress settings > Permalinks, be sure to select a pretty permalink structure such as ‘Post name’.
- **Verify taxonomy slugs**: Check all event taxonomies (categories, venues, organizers) and see what their slug bases are. See if any conflict with “events” or other custom post types or pages.
- **Test for duplicate slugs**: Look for pages, posts, or other custom post types that have the same slug as an event or event archive base. Example: a page called “events” may conflict with the event archive base “/events/”.
- **Test multilingual versions**: If you translate category or archive slugs, verify that translated URLs correspond with the site’s rewrite rules and tests in multiple languages.
- **Flush rewrite rules after changes**: Every time you change a slug, taxonomy base, or permalink structure, go to **Settings → Permalinks** and click “Save Changes” (without necessarily changing anything) to force WordPress to regenerate rewrite rules.
- **Check error/server** logs: 404s and rewrite issues may show up in logs. Also, check the browser console to see if redirections or wrong link paths are generated.

## Fixing the “Too Many Redirects” Error

When using **The Events Calendar**on your WordPress site, you might encounter a frustrating message in your browser:

**“This page isn’t working — redirected you too many times.”**

This error, also known as a **redirect loop**, prevents your events pages from loading properly. It can impact both the frontend experience for your visitors and your ability to manage events in the WordPress dashboard.

The good news is that the issue is usually caused by a configuration conflict and can be resolved with a few troubleshooting steps.

#### Common Causes of Redirect Loops

- **Conflicting Permalink Settings**If your permalink structure isn’t aligned with TEC’s event URLs, it can cause a redirect loop
- **Caching or CDN Issues**Over-aggressive caching (at the site, plugin, or server level) can keep outdated redirect rules in place.
- **Plugin or Theme Conflicts**Another plugin or a custom theme function may be interfering with TEC’s URL routing.
- **HTTPS/SSL Misconfiguration**If your site is set to use HTTPS inconsistently, browsers may bounce between HTTP and HTTPS, causing a loop.

#### Solutions

1. Resave Permalinks

- Go to **Settings > Permalinks** in WordPress. For full functionality, you must use [pretty permalinks](https://docs.nexcess.com/software/the-events-calendar/event-permalinks/) with The Events Calendar and Event Tickets.
- Click **Save Changes** without altering anything.
- This refreshes the permalink rules and often resolves redirect issues.

2. Clear Cache and Cookies

- Clear your **browser cache and cookies**.
- If using a [caching plugin](https://docs.nexcess.com/software/the-events-calendar/caching-with-the-events-calendar/) (e.g., WP Super Cache, W3 Total Cache), purge all caches.
- If your host or CDN (like Cloudflare) caches pages, clear those as well.

3. Check for HTTPS/SSL Conflicts

- In **Settings > General**, make sure both:
- **WordPress Address (URL)**
- **Site Address (URL)**
use the same protocol (
```
https://
```

 instead of mixing 
```
http://
```

).
- If your host enforces SSL, ensure there isn’t a plugin adding duplicate redirects.

4. Test for Plugin Conflicts

1. Deactivate all plugins except:
- The Events Calendar
- Events Calendar Pro (if used)
2. Test the events pages.
- If the redirect issue is gone, reactivate plugins one by one.
- Identify which plugin triggers the loop.

Review [this article](https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/) for further details.

5. Switch to a Default Theme

- Temporarily activate a default WordPress theme (e.g., Twenty Twenty-Four).
- If the redirect stops, the issue may be with your theme’s custom code or template overrides.

---

