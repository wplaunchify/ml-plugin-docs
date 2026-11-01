# Rsvp Migration

*Category from The Events Calendar documentation*

---

## RSVP Migration

**Source:** [https://docs.nexcess.com/software/the-events-calendar/rsvp-migration/](https://docs.nexcess.com/software/the-events-calendar/rsvp-migration/)

Event Tickets 5.30.0 has changed the way RSVP data is stored under the hood. To move your existing RSVPs and tickets onto the new structure, a brief one-time migration is required after you update.

On most sites the migration takes only a few seconds. While it runs, RSVPs and tickets are temporarily unavailable on the front end and cannot be edited in the WordPress admin. Once it completes, everything returns to normal automatically.

## What’s Changing

Most of the changes are internal and won’t be visible day to day. A few things you will notice:

- **Individual Attendee Registration for RSVPs (Event Tickets Plus).** RSVPs now support [Individual Attendee Registration](https://docs.nexcess.com/software/the-events-calendar/attendee-registration/#h-what-is-individual-attendee-collection-iac), so you can collect information from each attendee. This includes a new front-end interface for entering additional attendee details.
- **A dedicated RSVP metabox in the classic editor.** RSVPs now have their own metabox when editing an event in the classic editor
- **Tickets Commerce is always enabled.**Even if you sell tickets with WooCommerce, Tickets Commerce will be active on your site to support RSVP functionality. This will not change how your customers pay for tickets.

If you have customized the classic editor ticket UI or the front-end ticket purchase process (for example, with template overrides or custom code), we recommend running the update and migration on a staging or test site first to confirm your customizations still work as expected.

## Migration Steps

1. Update to the latest versions of The Events Calendar, Event Tickets, and Event Tickets Plus.
2. Optional but recommended: [Back up your site](https://docs.nexcess.com/software/the-events-calendar/creating-site-backups/) before running the migration.
3. In your WordPress admin, go to Tickets > Settings and open the new *Migrations* tab. Click Start.
If your site has a large number of RSVPs or receives a lot of purchase traffic, consider running the migration during a low-traffic period. RSVPs and ticket purchases are temporarily disabled while it runs.
4. The migration status will show as Scheduled, then begin running. When it finishes, the status will read Completed successfully! RSVPs and tickets are available again at this point.

![](https://docs.nexcess.com/wp-content/uploads/2026/09/Screenshot-2026-09-14-at-10.03.10-AM-1024x452.png)

## Troubleshooting

### Migration stays at “Scheduled” and never runs

The migration is run by Action Scheduler. Go to Tools > Scheduled Actions and check the Past Due tab. If the migration action is listed there, your site’s cron may not be firing reliably; you can run the action manually from that screen.

### Revert the migration

You can return to the pre-migration state at any time by clicking the Rollback button under Tickets > Settings > Migrations.

### Force migration to stop

If the migration stops making progress and Rollback isn’t an option, use the following snippet to cancel it:

```
add_action( 'stellarwp_migrations_tec_before_up_batch_processed', function( $migration ) {
    if ( $migration->get_id() === 'rsvp-to-tc' ) {
        throw new \Exception( 'Stopped by site owner (circuit breaker).' );
    }
 } , 10, 1 );
```

---

