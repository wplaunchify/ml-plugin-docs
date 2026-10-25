# Wp Cli

*Category from The Events Calendar documentation*

---

## Using WP-CLI with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/wp-cli/](https://docs.nexcess.com/software/the-events-calendar/wp-cli/)

If you’re managing a site powered by our calendar and tickets plugin, using WP-CLI ([WordPress Command Line Interface](https://developer.wordpress.org/cli/commands/)) can save you significant time when managing events and running imports. Below is a quick guide on the available WP-CLI commands offered by our plugins and how to use them effectively.

> The wp tribe commands below need the TEC CLI Plugin installed and active on your website. The wp event-aggregator commands are built into The Events Calendar and do not need it.

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

## Event Aggregator

#### Import Events from External Source

```
wp event-aggregator import-from ical https://example.com/events.ics
```

The first value is the import origin (ical, gcal, csv, ics, facebook, meetup or url) and the second is the address or file path of the source. Importing from an external source requires an Event Aggregator license.

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

At least one WooCommerce payment method must be turned on, or the command stops with an error.

#### Reset WooCommerce Orders

```
wp tribe event-tickets-plus reset-wc-orders <event-id>
```

## Final Thoughts

WP-CLI support makes The Events Calendar even more powerful for developers and site managers. Whether you’re bulk-generating test events or running Event Aggregator imports, these commands can streamline your workflows.

For more details, you can check the official The Events Calendar CLI documentation here: [https://github.com/the-events-calendar/tec-cli](https://github.com/the-events-calendar/tec-cli)

If you’d like help running any of these commands or troubleshooting specific scenarios, feel free to [reach out](https://theeventscalendar.com/support/)!

---

