# Customize Related Posts With Kadence_related_posts_args

*Category from Kadence Theme Kit Pro - Premium addon for the Kadence Theme documentation*

---

## Customizing Kadence Related Posts with kadence_related_posts_args Filter

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/customize-related-posts-with-kadence_related_posts_args/](https://www.kadencewp.com/help-center/docs/kadence-theme/customize-related-posts-with-kadence_related_posts_args/)

When you enable **Related Posts** in Kadence Theme, it will automatically display up to **six related posts** that share similar **categories** or **tags** with the current post.  The current post is excluded, and the results are shown in random order.

If you want to change how many posts appear, what post types are included, or how they are ordered, you can use the **kadence_related_posts_args** filter.

This filter lets you control the query Kadence uses to fetch related posts without editing any theme files.

Examples:

Show only posts from the same custom taxonomy and limit to three posts

```
add_filter( 'kadence_related_posts_args', function( $args ) {
    $args['tax_query'] = array(
        array(
            'taxonomy' => 'topic',
            'field'    => 'slug',
            'terms'    => wp_list_pluck( get_the_terms( get_the_ID(), 'topic' ), 'slug' ),
        ),
    );
    $args['posts_per_page'] = 3;
    $args['orderby'] = 'date';
    $args['order'] = 'DESC';
    return $args;
});
```

Show related posts from the same author

```
add_filter( 'kadence_related_posts_args', function( $args ) {
    $args['author'] = get_post_field( 'post_author', get_the_ID() );
    return $args;
});
```

Include custom post types

```
add_filter( 'kadence_related_posts_args', function( $args ) {
    $args['post_type'] = array( 'post', 'news', 'article' );
    return $args;
});
```

Exclude certain categories

```
add_filter( 'kadence_related_posts_args', function( $args ) {
    $args['category__not_in'] = array( 10, 25 );
    return $args;
});
```

---

