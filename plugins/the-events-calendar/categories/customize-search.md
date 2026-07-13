# Customize Search

*Category from The Events Calendar documentation*

---

## Customizing Search for Events and Tickets

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-search/](https://docs.nexcess.com/software/the-events-calendar/customize-search/)

The Events Calendar and Event Tickets interact with search in two separate places: the main WordPress search on your site, and the event search bar that appears on calendar pages. This article covers snippets for customizing both.

## Exclude Events from Site Search

By default, events created with [The Events Calendar and Events Calendar Pro](https://theeventscalendar.com/products/wordpress-events-calendar/) appear in the WordPress search results on your website. However, the situation may arise where you’d like to exclude events from the WordPress search results instead. For example, perhaps you’d only like users to see your blog posts there.

```
add_action( 'pre_get_posts', 'my_search_exclude_filter' );
function my_search_exclude_filter( $query ) {
    if ( ! $query->is_admin && $query->is_search && $query->is_main_query() ) {
        $searchable_post_types = get_post_types( array( 'exclude_from_search' => false ) );
        $post_type_to_remove = 'tribe_events';
        if( is_array( $searchable_post_types ) && in_array( $post_type_to_remove, $searchable_post_types ) ) {
            unset( $searchable_post_types[ $post_type_to_remove ] );
            $query->set( 'post_type', $searchable_post_types );
        }
    }
}
```

### Exclude Past Events

If you have a recurring event or multiple recurring events that have already occurred, they can cause the search results to become muddled. Use the following code snippet to prevent past events from appearing in search results.

```
<?php
function filter_search_results( $query ) {
    if ( is_admin() ) {
        return;
    }
    if ( ! $query->is_main_query() ) {
        return;
    }
    if ( ! $query->is_search ) {
        return;
    }
    $meta_query = [
        'relation' => 'or',
        [
             'key'     => '_EventEndDate',
             'value'   => date('Y-m-d').' 00:00:00',
             'compare' => '>=',
             'type'    => 'DATETIME'
        ],
        [
             'key'     => '_EventStartDate',
             'compare' => 'NOT EXISTS',
        ],
   ];
   $query->set( 'meta_query', $meta_query );
}
add_filter('pre_get_posts', 'filter_search_results');
```

## Exclude Tickets from Site Search

By default, tickets created with [Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/) and WooCommerce appear in the WordPress search results on your website. This is because they are created as regular WooCommerce products. However, the situation may arise where you’d like to exclude tickets from the WordPress search results instead. For example, perhaps you’d only like users to see your blog posts there.

The following snippet will remove **all tickets** from the default WordPress search results.

```
add_action( 'pre_get_posts', function ( $query ) {
    if ( ! is_admin() && $query->is_main_query() && $query->is_search() ) {
        // Modify the query to exclude ticket products by checking for '_ticket_end_date'
        $meta_query = [
            [
                'key'     => '_ticket_end_date',
                'compare' => 'NOT EXISTS', // Exclude any products with '_ticket_end_date' field
            ],
        ];
        // Apply the meta_query to exclude ticket products
        $query->set( 'meta_query', $meta_query );
    }
} );
```

### Exclude Past Tickets

If you have a lot of events, and tickets that are past their sell date, they can cause the search results to become muddled. Use the following code snippet to prevent only **past tickets** from appearing in search results.

```
add_action( 'pre_get_posts', function ( $query ) {
	if ( ! is_admin() && $query->is_main_query() && $query->is_search() ) {
		$current_date = current_time( 'mysql' );
		// Modify the query to exclude past tickets
		$meta_query = [
			'relation' => 'OR',
			// Include tickets that haven't expired
			[
				'key'     => '_ticket_end_date',
				'value'   => $current_date,
				'compare' => '>=',
				'type'    => 'DATETIME',
			],
			// Include non ticket products
			[
				'key'     => '_ticket_end_date',
				'compare' => 'NOT EXISTS',
			],
		];
		$query->set( 'meta_query', $meta_query );
	}
} );
```

## Narrow the Event Calendar Search Bar to Titles Only

The event search bar at the top of every calendar page lets visitors search through your events. By default, that search looks for the given string within the event title, the description, and the excerpt. If you’d like to adjust this search functionality so that the search only happens in event titles, the following snippet can help. It will exclude both the content and the excerpt from the search.

```
function tec_search_only_event_title( $search, WP_Query $wp_query ) {
	// Bail when no search term
	if ( empty( $search ) ) {
		return $search;
	}

	// Bail when not searching events
	if ( $wp_query->get( 'post_type' ) !== 'tribe_events' ) {
		return $search;
	}

	global $wpdb;
	$new_search = preg_replace( "/{$wpdb->posts}.post_(content|excerpt) LIKE ('[{}a-zA-Z0-9]+')/", "0", $search );

	return $new_search;
}

add_action( 'posts_search', 'tec_search_only_event_title', 10, 2 );
```

---

