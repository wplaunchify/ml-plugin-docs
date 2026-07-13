# Troubleshoot Empty Calendar

*Category from The Events Calendar documentation*

---

## Fixing an Empty Events Calendar After Switching Hosts

**Source:** [https://docs.nexcess.com/software/the-events-calendar/troubleshoot-empty-calendar/](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-empty-calendar/)

This issue often arises after migrating a website to a new host, which can result in missing database tables or problems with the API path used to load events. A quick way to diagnose this is by adding a new event and checking if it appears on your calendar. If it doesn’t, here are some common causes and possible solutions.

## Missing Event Tables

Technically, the issue starts when the following calendar tables are missing after the website migration.

- *your_table_prefix_here*_tec_events
- *your_table_prefix_here*_tec_occurrences
- *your_table_prefix_here*_tec_series_relationships

To verify this, you need to check the WordPress Dashboard → Events → Settings → Troubleshooting and look for this information 
```
Custom Table Health Check
```

. If this returns:

```
Missing `Event` Table Data | Missing `Occurrences` Table Data | `Event` Table Missing | `Occurrences` Table Missing
```

This means that the three tables above are not yet introduced on the new site.

## Trigger the Schema Scripts

You can start by deactivating and reactivating our calendar plugins. This process triggers the table schema scripts, which should automatically add the missing table to your new site’s database.

If that does not fix the issue then you can try to manually trigger the command to create the missing tables by adding this snippet. It is recommended to set this up with a plugin like [Code Snippets](https://wordpress.org/plugins/code-snippets/) and to save it as a “Run once” snippet to make sure the code runs only once:

```
add_action( 'admin_init', function() {
	// Array of option names for custom tables.
	$options = [
		'tec_ct1_series_relationship_table_schema_version',
		'tec_ct1_events_table_schema_version',
		'tec_ct1_occurrences_table_schema_version',
		'tec_ct1_events_field_schema_version',
		'tec_ct1_occurrences_field_schema_version',
	];

	// Delete options.
	foreach ( $options as $option ) {
		delete_option( $option );
	}

	// Instantiate Schema Builder
	$tec_schema_builder = tribe( TECEventsCustom_TablesV1Schema_BuilderSchema_Builder::class );

	// Recreate custom tables.
	$tec_schema_builder->up();
});
```

## Blocked API Path

Another possible reason why new events aren’t showing up is that the API path used to fetch event data may be encountering issues. This path holds your calendar’s event information and can be accessed via: 
```
yourdomain.com/wp-json/tribe/events/v1/events
```

.

Try visiting that URL in your browser (replacing 
```
yourdomain.com
```

 with your actual site’s domain). It should return structured event data. If it doesn’t, it’s likely being blocked.![](https://docs.nexcess.com/wp-content/uploads/2026/06/Expected.jpg)

#### Unblock the API Path

Please check if you have any active security plugins or services like Cloudflare, and make sure this path (
```
yourdomain.com/wp-json/tribe/events/v1/events
```

) is excluded from any blocking or filtering rules.

---

