# Site Monitoring

*Category from The Events Calendar documentation*

---

## Site Health and Uptime Monitoring for The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/site-monitoring/](https://docs.nexcess.com/software/the-events-calendar/site-monitoring/)

Keeping your events platform reliable means catching issues before they affect your users. This guide outlines how to set up **monitoring and alerting** for The Events Calendar to detect failures early, improve uptime, and maintain system health across all event-related operations.

## Why Monitoring Matters

Even a well-optimized site can experience intermittent issues such as:

- Failed ticket or RSVP emails
- Broken imports or feed connections
- Checkout or payment gateway errors
- Delayed background tasks (cron or Action Scheduler)
- Plugin conflicts after updates

By setting up proper monitoring and alerting, you can identify and resolve these issues **before** they cause downtime or customer frustration.

## What to Monitor

A good monitoring setup should cover **core site health**, **event processes**, and **integration reliability**.

### 1. Site & Server Health

Track performance and uptime using tools like:

- **UptimeRobot**, **Better Uptime**, or **Pingdom** alerts for downtime or slow response.
- **WordPress Site Health** identifies PHP errors or outdated configurations.
- **Query Monitor** detects [slow database queries](https://docs.nexcess.com/software/the-events-calendar/how-to-find-and-share-slow-database-queries-in-wordpress/) related to event rendering.

If your host supports it, enable **server resource monitoring** (CPU, RAM, and disk I/O) to detect overloads that can slow down large event imports.

### 2. Event & Ticketing Processes

Enable built-in logging under: **Events → Settings → Logging → Enable Logging**

Monitor:

- Failed ticket creation or order syncs
- RSVP responses not being saved
- Event import or aggregation errors

Review the error log regularly to see if there are potential errors.

### 3. Email & Communication Systems

Set up transactional email monitoring for:

- Ticket receipts
- RSVP confirmations
- Event reminders ([Promoter campaigns](https://docs.nexcess.com/software/the-events-calendar/promoter-shortcuts-campaigns/))

Use mail delivery services like **Postmark**, **SendGrid**, or **Amazon SES** with dashboards and alerts for:

- Bounce or failure rates above the threshold
- API key or sender domain issues
- Rate-limiting warnings

### 4. Background Jobs (WP Cron & Action Scheduler)

Background jobs power:

- Ticket email dispatch
- Promoter campaign delivery
- Aggregator imports

Monitor these with:

- Using **WP Crontrol** to review pending or failed cron events
- **Action Scheduler** plugin can inspect failed or stuck actions

### 5. Integrations & APIs

If you use external feeds or connected services:

- Watch for **HTTP 4xx / 5xx** errors from APIs.
- Use **Better Stack Logs** or **Sentry.io** for error tracking.
- Configure retries for transient errors.

---

