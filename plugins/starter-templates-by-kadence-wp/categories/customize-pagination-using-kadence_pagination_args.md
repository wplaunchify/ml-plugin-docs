# Customize Pagination Using Kadence_pagination_args

*Category from Starter Templates by Kadence WP documentation*

---

## Customize Pagination in Kadence Theme Using kadence_pagination_args

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/customize-pagination-using-kadence_pagination_args/](https://www.kadencewp.com/help-center/docs/kadence-theme/customize-pagination-using-kadence_pagination_args/)

The **kadence_pagination_args** filter allows developers to **customize the pagination settings** used in the Kadence Theme when displaying lists of posts (e.g., on blog archive pages, category archives, or search results).

This filter modifies the arguments passed to the native WordPress function [the_posts_pagination()](https://developer.wordpress.org/reference/functions/the_posts_pagination/), giving you full control over pagination appearance and behavior.

Examples

Add Next and Previous Text

```
add_filter( 'kadence_pagination_args', function( $args ) {
    $args['prev_text'] = '<span class="screen-reader-text">' . __( 'Previous Page', 'kadence' ) . '</span>Previous ' . Kadencekadence()->get_icon( 'arrow-left', _x( 'Previous', 'previous set of archive results', 'kadence' ) );
    $args['next_text'] = '<span class="screen-reader-text">' . __( 'Next Page', 'kadence' ) . '</span>Next ' . Kadencekadence()->get_icon( 'arrow-right', _x( 'Next', 'next set of archive results', 'kadence' ) );
    return $args;
});
```

Adjust Number of Page Links

```
add_filter( 'kadence_pagination_args', function( $args ) {
    $args['mid_size'] = 1; // Show fewer page numbers
    return $args;
});
```

Change Screen Reader Text

```
add_filter( 'kadence_pagination_args', function( $args ) {
    $args['screen_reader_text'] = __( 'Browse through blog pages', 'kadence' );
    return $args;
});
```

Add the PHP code snippets using a plugin. Refer to our guide here: **How to add a custom filter or function with Code Snippets**

---

