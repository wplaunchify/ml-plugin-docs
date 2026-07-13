# Calendar Performance

*Category from The Events Calendar documentation*

---

## Scaling and Performance for The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/calendar-performance/](https://docs.nexcess.com/software/the-events-calendar/calendar-performance/)

The Events Calendar and its associated plugins can handle large numbers of events and work well even on very high-traffic websites. However, performance is dependent on many environmental factors that the plugin itself is often unable to manage automatically. This article covers the full picture: proactive settings and best practices for keeping your calendar fast, recurring event strategies that protect your database, specific optimizations like month view tooltips, and a step-by-step guide to diagnosing and fixing performance that degrades over time.

We recommend following [WordPress’ recommended server configuration](https://wordpress.org/about/requirements/). If you do not meet their minimums (e.g. PHP 7.4), the suggestions below will likely still fall short.

#### The More Events You Show, the Costlier It Gets

Just like regular blog posts, events are stored in the database. By default, WordPress displays only the latest 10 blog posts on your homepage — that loads quickly. But if you change a setting to show 100 or 10,000 posts on the same page, WordPress must work much harder and consume far more resources.

The same logic applies to events. Take *Month View*, where up to 35 days’ worth of events are displayed at once. If an average day contains 10 events and up to 10 or more are listed per day, that is a large number of records to retrieve and render. Building a view with that configuration is much more costly than one showing only 3 events per day. List-type views like *List View* and *Photo View* can be configured to show as many events as you like — but keep in mind that every event shown has an attached cost in terms of performance.

## Strategies for Scaling

The easiest way to address this is to go to **Events → Settings** and adjust:

- The number of events to show per page (affects list-style views like List View, Photo View, etc.)
- The number of events to show per day in Month View

Reducing these numbers not only improves performance — it also makes it easier for visitors to absorb all the event information on calendar views.

If project requirements force you to keep event counts high, the next avenue to explore is **caching**. Instead of rebuilding each view from scratch every time someone loads it, caching stores the complete view or its building blocks so they can be served faster on subsequent requests. See our [Caching: What, When and How](https://docs.nexcess.com/software/the-events-calendar/calendar-caching/) article for a full explanation of the different types of caching available.

TEC includes a built-in Month View cache option. Go to **Events → Settings → General → Viewing** and enable **Enable the Month View Cache** to help an event-filled calendar load faster for visitors.

![Enable the Month View Cache setting in Events > Settings > General > Viewing](https://docs.nexcess.com/wp-content/uploads/2026/06/image-6-2.jpg)

Depending on your requirements, caching alone may not be a complete solution — you may ultimately need to increase server resources as well.

The Events Calendar also includes two maintenance settings found under **Events → Settings → General → Maintenance**:

![Maintenance settings in Events > Settings > General showing Move to trash and Merge Duplicate options](https://docs.nexcess.com/wp-content/uploads/2026/06/image-7-4.jpg)

- **Move to trash events older than:** Automatically moves past events to trash based on their end date, keeping your database lean.
- **Merge Duplicate Venues & Organizers:** Automatically merges identical venues and organizers to reduce database bloat.

## Recurring Events and Database Load

Recurring events are a powerful feature, but if not managed carefully they can lead to significant performance issues, especially on large sites or those with limited server resources.

When you create a recurring event, each instance is stored as a separate post in your database. Setting up a daily event for a year generates 365 separate event posts, each with its own metadata and relationships. This can quickly snowball into thousands of entries and slow down:

- Event queries and calendar views
- Admin dashboard loading times
- Backup and sync operations

By default, The Events Calendar generates recurring events for 60 months (five years) when “Never” is selected for “Events End.” While practical for some use cases, this can cause performance issues on busy sites. To optimize, reduce the recurrence period to 6 or 12 months using the 
```
tribe_get_option_recurrenceMaxMonthsAfter
```

 filter:

```
function custom_recurrence_max_months( $value ) {
    return 12; // Change to 6 or 12 for better performance
}
add_filter( 'tribe_get_option_recurrenceMaxMonthsAfter', 'custom_recurrence_max_months' );
```

### Best Practices for Recurring Events

#### Limit the Number of Recurrences

Avoid creating long-term recurrence rules. Instead of daily events for multiple years, try weekly or monthly patterns with shorter date ranges and manual renewals.

**Example:** Instead of a daily event for 3 years, create a recurring event for one month at a time.

#### Use Series When Practical (Events Calendar Pro)

If you’re using Events Calendar Pro, consider grouping related events as a [Series](https://docs.nexcess.com/software/the-events-calendar/event-series/) rather than a long recurrence chain. This provides visual and organizational benefits without bloating the database.

#### Avoid Editing Entire Recurrence Sets

Each time you update a recurring event set, it can trigger updates to every event in the series. If you must make changes:

- Use the “This and future events” or “This event only” option when editing
- Avoid repeatedly editing the base event and saving all recurrences

#### Use Weekly Instead of Daily Where Possible

Daily events generate a huge number of posts. Switching to weekly recurrences, where appropriate, significantly reduces post count.

#### Use the “Clean Up Recurring Events After” Setting

This setting removes older recurrences automatically. Choose a value that fits your record-keeping needs while keeping the database lean.

#### Consider Individual Events Instead of Recurrence

If an event happens every week but with different details each time, consider creating individual events instead of using recurrence. This gives you full control over titles, descriptions, and settings without tying everything to a master event.

#### Monitor Your Database

If your calendar is large or long-running:

- Monitor your database size and performance
- Use tools like [Query Monitor](https://wordpress.org/plugins/query-monitor/) or your hosting panel’s resource dashboard
- Regularly review old or expired events and consider archiving or deleting them

## Optimizing Month View Tooltip Images

In Month View, event tooltips load full-size featured images by default. While this ensures maximum quality, it adds unnecessary weight to the page and can slow calendar performance. A simple template override lets you use medium-sized images instead — keeping them sharp while reducing file sizes significantly.

#### Step 1: Locate the Template File

The tooltip’s featured image is controlled by a template inside the plugin. Override it in your theme so plugin updates don’t overwrite your customization. The original file is located at:

```
wp-content/plugins/the-events-calendar/src/views/v2/month/calendar-body/day/calendar-events/calendar-event/tooltip/featured-image.php
```

For more on template overrides, see [Customizing Template Files](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/).

#### Step 2: Copy the File to Your Theme

Copy the file to your theme or child theme at this path:

```
[your-theme]/tribe/events/v2/month/calendar-body/day/calendar-events/calendar-event/tooltip/featured-image.php
```

#### Step 3: Update the Image Size

In your copied file, find the line (around line 29) that defines the 
```
src
```

 attribute of the image and change it to use the **medium** thumbnail size:

```
src="<?php echo esc_url( $event->thumbnail->medium->url ); ?>"
```

#### The Updated HTML

Here is how your updated code should look:

```
<div class="tribe-events-calendar-month__calendar-event-tooltip-featured-image-wrapper">
    <img
        class="tribe-events-calendar-month__calendar-event-tooltip-featured-image"
        src="<?php echo esc_url( $event->thumbnail->medium->url ); ?>"
        <?php if ( ! empty( $event->thumbnail->srcset ) ) : ?>
        <?php endif; ?>
        <?php if ( ! empty( $event->thumbnail->alt ) ) : ?>
            alt="<?php echo esc_attr( $event->thumbnail->alt ); ?>"
        <?php else : ?>
            alt=""
        <?php endif; ?>
    />
</div>
```

By switching from full-size to medium thumbnails, images load faster, tooltip performance improves (especially on slower connections), and visitors still see clear, sharp images. If you want even smaller images, you can change 
```
medium
```

 to another registered size such as 
```
thumbnail
```

 or a custom size defined in your theme.

## Troubleshooting Performance Degradation Over Time

As your site grows with more events, attendees, and tickets, you may notice slower load times, delayed imports, or longer page generation. Performance decline rarely happens suddenly — it is usually the result of cumulative growth or configuration drift. Common causes include:

- A large number of published or past events in the database
- Excessive event recurrence patterns
- Bloated postmeta or transients tables
- Inefficient caching or expired object cache
- Cron or Action Scheduler queues building up
- Third-party plugin conflicts or custom template overrides

Understanding these factors helps narrow down the issue before applying fixes.

#### Step 1: Benchmark Your Site’s Current State

Start by measuring your site’s baseline performance:

- Use **Query Monitor** or **Site Health → Info → Performance**
- Note the **page load time**, **query count**, and **memory usage** for:
- The 
```
/events/
```

 archive
- A single event page
- Your checkout page (if using Event Tickets or Tickets Commerce)

> 💡 Save these metrics — you’ll compare them later to confirm improvements.

#### Step 2: Check Database Growth

The database is often the root of long-term slowdowns.

#### Key Tables to Review

| Table | Common Issue | Fix |
| --- | --- | --- |
| wp_posts | Thousands of past or recurring events | Use TEC’s “Clean up past events” setting |
| wp_postmeta | Excessive metadata for tickets & RSVPs | Clean via WP-Optimize or a database plugin |
| wp_options | Expired transients or cached queries | Clear transients using WP-CLI or a plugin |
| wp_actionscheduler_actions | Failed or pending background jobs | Delete old entries with the Action Scheduler UI |

The Events Calendar and its associated plugins can handle large numbers of events and work well even on very high-traffic websites. However, performance is dependent on many environmental factors that the plugin itself is often unable to manage automatically. This article covers the full picture: proactive settings and best practices for keeping your calendar fast, recurring event strategies that protect your database, specific optimizations like month view tooltips, and a step-by-step guide to diagnosing and fixing performance that degrades over time.

We recommend following [WordPress’ recommended server configuration](https://wordpress.org/about/requirements/). If you do not meet their minimums (e.g. PHP 7.4), the suggestions below will likely still fall short.

---

