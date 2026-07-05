# Change Various Heading Html Tags

*Category from Kadence Theme documentation*

---

## Changing Various Heading HTML Tags

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/change-various-heading-html-tags/](https://www.kadencewp.com/help-center/docs/kadence-theme/change-various-heading-html-tags/)

Changing the markup isn’t always a good idea, you can hurt your accessibility score by changing the [sequentially-descending order](https://web.dev/heading-order/). However, some people want to do this or they want to change the text output. In this tutorial, we will look at changing the headings HTML tag and where applicable the headings text in 4 common areas of interest. Related Posts, Comments, Comments Leave a reply, and Widget titles. This is all done using PHP filters and these are best added by using a [code snippet plugin](https://kadence-theme.com/knowledge-base/advanced/how-to-add-a-custom-filter-or-function-with-code-snippets/).

## How to Change the Similar Posts Title

If you just want to change the heading for “Similar Posts” to use a different html tag, for example an h4 tag, you can use this filter.

```
/**
 * Change the similar posts title output.
 *
 * @param string $html the output html.
 */
function custom_similar_posts_title( $html ) {
    $html = '<h4 class="entry-related-title">' . esc_html__( 'Similar Posts', 'custom-text-domain' ) . '</h4>';
    return $html;
}
add_filter( 'kadence_single_post_similar_posts_title', 'custom_similar_posts_title' );
```

If instead you want to change the text output to read Similar Posts to {post-title} where post title is the current posts title you can use a filter like this.

```
/**
 * Change the similar posts title output.
 *
 * @param string $html the output html.
 */
function custom_similar_posts_title( $html ) {
    $html = '<h2 class="entry-related-title">' . esc_html__( 'Similar Posts to', 'custom-text-domain' ) . ' ' . get_the_title() . '</h2>';
    return $html;
}
add_filter( 'kadence_single_post_similar_posts_title', 'custom_similar_posts_title' );
```

## How to Change the Comments Title

If you just want to change the heading for “One Comment” to use a different html tag, for example an h4 tag, you can use this filter.

```
/**
 * Change the post comments title output.
 *
 * @param string $html the output html.
 */
function custom_post_comments_title( $html ) {
    $html = '<h4 class="comments-title">';
    $comment_count = (int) get_comments_number();
    if ( 1 === $comment_count ) {
        $html .= esc_html__( 'One Comment', 'kadence' );
    } else {
        $html .= sprintf(
            /* translators: 1: comment count number */
            esc_html( _nx( '%1$s Comment', '%1$s Comments', $comment_count, 'comments title', 'kadence' ) ),
            number_format_i18n( $comment_count )
        );
    }
    $html .= '</h4><!-- .comments-title -->';
    return $html;
}
add_filter( 'kadence_single_post_comments_title', 'custom_post_comments_title' );
```

If instead you want to change the text output to read One Comment to {post-title} where post title is the current posts title you can use a filter like this.

```
/**
 * Change the post comments title output.
 *
 * @param string $html the output html.
 */
function custom_post_comments_title( $html ) {
    $html = '<h2 class="comments-title">';
    $comment_count = (int) get_comments_number();
    if ( 1 === $comment_count ) {
        $html .= esc_html__( 'One Comment', 'kadence' );
    } else {
        $html .= sprintf(
            /* translators: 1: comment count number */
            esc_html( _nx( '%1$s Comment', '%1$s Comments', $comment_count, 'comments title', 'kadence' ) ),
            number_format_i18n( $comment_count )
        );
    }
    $html .= ' ' . esc_html__( 'on', 'kadence' ) . ' ' . get_the_title();
    $html .= '</h2><!-- .comments-title -->';
    return $html;
}
add_filter( 'kadence_single_post_comments_title', 'custom_post_comments_title' );
```

## How to Change the Leave a Reply Heading Tag

To change the comments “Leave a Reply” heading tag to use an h4 html tag you can use this filter.

```
/**
 * Change the comment form title HTML tag.
 *
 * @param array $args the comment form args.
 */
function custom_commentform_title_tag( $args ) {
    $args['title_reply_before'] = '<h4 id="reply-title" class="comment-reply-title">';
    $args['title_reply_after']  = '</h4>';
    return $args;
}
add_filter( 'comment_form_defaults', 'custom_commentform_title_tag' );
```

## How to Change the Widget Title Heading Tag

To change the widget title heading html tag to h4 for example you can use this filter:

```
/**
 * Change the widget area title HTML tags.
 *
 * @param array $args the widget area args.
 */
function custom_widget_title_args( $args ) {
  $args['before_title'] = '<h4 class="widget-title">';
  $args['after_title'] = '</h4>';
  return $args;
}
add_filter( 'kadence_widget_area_args', 'custom_widget_title_args' );
```

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

