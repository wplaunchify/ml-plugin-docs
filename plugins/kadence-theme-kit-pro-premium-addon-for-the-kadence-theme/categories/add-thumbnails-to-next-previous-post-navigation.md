# Add Thumbnails To Next Previous Post Navigation

*Category from Kadence Theme Kit Pro - Premium addon for the Kadence Theme documentation*

---

## Add Thumbnails to Next/Previous Post Navigation

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/add-thumbnails-to-next-previous-post-navigation/](https://www.kadencewp.com/help-center/docs/kadence-theme/add-thumbnails-to-next-previous-post-navigation/)

By default, the Kadence Theme post navigation shows only the post titles with arrows. With this code snippet, you can enhance it by displaying the featured image (thumbnail) of the next and previous posts.

PHP Snippet

```
add_filter( 'kadence_post_navigation_args', function( $args ) {
    $args['prev_text'] = '<div class="post-navigation-sub"><small>' 
        . Kadencekadence()->get_icon( 'arrow-left-alt' ) 
        . esc_html__( 'Previous', 'kadence' ) 
        . '</small></div><div class="post-prev-nav">%thumb%title</div>';

    $args['next_text'] = '<div class="post-navigation-sub"><small>' 
        . esc_html__( 'Next', 'kadence' ) 
        . Kadencekadence()->get_icon( 'arrow-right-alt' ) 
        . '</small></div><div class="post-next-nav">%thumb%title</div>';

    return $args;
});

add_filter( 'previous_post_link', function( $output, $format, $link, $post, $adjacent ) {
    if ( $post && has_post_thumbnail( $post->ID ) ) {
        $img = get_the_post_thumbnail( $post->ID, 'thumbnail', [ 'class' => 'nav-thumb' ] );
        $output = str_replace( '%thumb', $img, $output );
    } else {
        $output = str_replace( '%thumb', '', $output );
    }
    return $output;
}, 20, 5 );

add_filter( 'next_post_link', function( $output, $format, $link, $post, $adjacent ) {
    if ( $post && has_post_thumbnail( $post->ID ) ) {
        $img = get_the_post_thumbnail( $post->ID, 'thumbnail', [ 'class' => 'nav-thumb' ] );
        $output = str_replace( '%thumb', $img, $output );
    } else {
        $output = str_replace( '%thumb', '', $output );
    }
    return $output;
}, 20, 5 );
```

Add the PHP code snippets using a plugin. Refer to our guide here: **How to add a custom filter or function with Code Snippets**

CSS Styling

Add this custom CSS in **Customizer > Additional CSS** or your child theme stylesheet:

```
.post-next-nav img {
    margin-left: auto;
}
.post-prev-nav img {
    margin-right: auto;
}
.nav-thumb {
    max-width: 60px;
    height: auto;
    border-radius: 4px;
}
```

This will display the post thumbnail alongside the **Next** and **Previous** navigation arrows at the bottom of each single post.

Example:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-1024x231-1.png)

---

