# Wp Cli

*Category from The Events Calendar documentation*

---

## Using WP-CLI with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/wp-cli/](https://docs.nexcess.com/software/the-events-calendar/wp-cli/)

If you’re managing a site powered by our calendar and tickets plugin, using WP-CLI ([WordPress Command Line Interface](https://developer.wordpress.org/cli/commands/)) can save you significant time when managing events, running imports, or diagnosing performance issues. Below is a quick guide on the available WP-CLI commands offered by our plugins and how to use them effectively.

> To execute the below commands, you will need to first download and install the TEC CLI Plugin on your website.

## Event Management

#### Generate Dummy Events

Create sample events to test your calendar:

```
wp tribe events-generator generate --count=1000
```

#### Reset Events

Remove all test events, organizers, and venues:

```
wp tribe events-generator reset
```

> Requires The Events Calendar version 4.5.4 or higher.

## Event Aggregator

#### Import Events from External Source

```
wp event-aggregator import-from --origin=ical --source=https://example.com/events.ics
```

Additional options:

- ```
--keywords=
```

 Filter events by keyword
- ```
--location=
```

 Filter by location
- ```
--radius=
```

 Define location radius

#### Run Scheduled Import

```
wp event-aggregator run-import <import-id>
```

Optional:

- ```
--timeout=
```

 Set timeout duration (seconds)
- ```
--format=
```

 Specify output format

### Testing & Diagnostics

#### Generate Load Test Events

Create events between two dates:

```
wp tec-load-test 2024-01-01 2024-01-15 30
```

(Generates 30 events per day in that date range.)

#### Check MySQL Max Packet Size

```
wp tec-mysql-packet-size
```

#### Count Events

All events:

```
wp tec-count
```

Published events:

```
wp tec-count --status=publish
```

## Tickets & Attendees

#### Generate RSVP Attendees

```
wp tribe event-tickets generate-rsvp-attendees <event-id> --count=50
```

#### Reset RSVP Attendees

```
wp tribe event-tickets reset-rsvp-attendees <event-id>
```

#### Generate WooCommerce Orders

```
wp tribe event-tickets-plus generate-wc-orders <event-id> --count=10
```

#### Reset WooCommerce Orders

```
wp tribe event-tickets-plus reset-wc-orders <event-id>
```

## Final Thoughts

WP-CLI support makes The Events Calendar even more powerful for developers and site managers. Whether you’re bulk-generating events or diagnosing database performance, these commands can streamline your workflows.

For more details, you can check the official The Events Calendar CLI documentation here: [https://github.com/the-events-calendar/tec-cli](https://github.com/the-events-calendar/tec-cli)

If you’d like help running any of these commands or troubleshooting specific scenarios, feel free to [reach out](https://theeventscalendar.com/support/)!

---

