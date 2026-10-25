# Customize Search

*Category from The Events Calendar documentation*

---

## Customizing Search for Events and Tickets

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-search/](https://docs.nexcess.com/software/the-events-calendar/customize-search/)

The Events Calendar and Event Tickets interact with search in two separate places: the main WordPress search on your site, and the event search bar that appears on calendar pages. This article covers snippets for customizing both.

## Exclude Events from Site Search

By default, events created with The Events Calendar and Events Calendar Pro appear in the WordPress search results on your website. However, the situation may arise where you’d like to exclude events from the WordPress search results instead. For example, perhaps you’d only like users to see your blog posts there.

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

Past events can crowd the search results. Use the following code snippet to hide events that are completely over. A recurring event stays in the results as long as it has at least one upcoming date.

```
add_action( 'pre_get_posts', function( $query ) {
	if ( is_admin() || ! $query->is_main_query() || ! $query->is_search() ) {
		return;
	}

	// Recurring events are listed by their series, so convert each occurrence back to its event ID.
	$normalize = [ \TEC\Events\Custom_Tables\V1\Models\Occurrence::class, 'normalize_id' ];
	$past      = array_map( $normalize, tribe_events()->where( 'ends_before', 'now' )->per_page( -1 )->get_ids() );
	$upcoming  = array_map( $normalize, tribe_events()->where( 'ends_after', 'now' )->per_page( -1 )->get_ids() );

	// An event with any upcoming date stays in the results; only events that are completely over are hidden.
	$hide = array_values( array_diff( $past, $upcoming ) );

	if ( $hide ) {
		$query->set( 'post__not_in', array_merge( (array) $query->get( 'post__not_in' ), $hide ) );
	}
} );
```

## Exclude Tickets from Site Search

Tickets created with Event Tickets Plus and WooCommerce are WooCommerce products, but Event Tickets Plus sets the catalog visibility of every new ticket to Hidden, so WooCommerce already keeps tickets out of the WordPress search results. You do not need a snippet for this. If an older ticket still shows up in the search results, open it under WooCommerce > Products and set Catalog visibility to Hidden.

## Narrow the Event Calendar Search Bar to Titles Only

The event search bar at the top of every calendar page lets visitors search through your events. By default, that search looks for the given string within the event title, the description, and the excerpt. If you’d like to adjust this search functionality so that the search only happens in event titles, the following snippet can help. It will exclude both the content and the excerpt from the search.

```
add_filter( 'post_search_columns', function( $search_columns, $search, $wp_query ) {
	// Only change searches for events, and leave the admin Events list alone.
	if ( is_admin() || 'tribe_events' !== $wp_query->get( 'post_type' ) ) {
		return $search_columns;
	}

	return [ 'post_title' ];
}, 10, 3 );
```

---

*Snippets reviewed and updated October 2026*

---

