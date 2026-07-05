# Show Multiple Post Types Post Grid Carousel Block

*Category from Kadence Blocks - PRO Extension documentation*

---

## Customizing the Kadence Blocks Pro Post Grid/Carousel block’s Query to show multiple post types

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/show-multiple-post-types-post-grid-carousel-block/](https://www.kadencewp.com/help-center/docs/kadence-blocks/show-multiple-post-types-post-grid-carousel-block/)

The Kadence [Post Grid/Carousel block](https://www.liquidweb.com/docs/kadence-blocks/configure-a-blog-list-with-post-grid-carousel-block/) has filters and hooks that allow you to customize the output of the block. This guide will explain how to customize the **Kadence Blocks Pro** Posts Grid query using the 
```
kadence_blocks_pro_posts_grid_query_args
```

 filter. This tutorial will demonstrate how to:

- Conditionally modify the query based on the block’s 
```
className
```
- Show **multiple post types**

**Note:** If you’re not familiar with adding custom PHP snippets to your site, please see [this document](https://www.liquidweb.com/docs/kadence-theme/how-to-add-a-custom-filter-or-function-with-code-snippets/).

Not all Post Grid/Carousel blocks on your site need special query logic. By assigning a custom class, you can **limit the filter to only specific instances** of the block. Add the CSS class by going to the *Advanced block settings > Advanced tab > Additional CSS class(es) option*.

![](https://res.cloudinary.com/lwcom/images/w_1024,h_541,c_scale/f_auto,q_auto/v1780352422/prod/Zight-Recording-2025-08-07-at-07.12.11-AM/Zight-Recording-2025-08-07-at-07.12.11-AM.gif?_i=AA)The sample code snippet is:

```
add_filter('kadence_blocks_pro_posts_grid_query_args', function($args, $attributes) { 

    // Check if block has a specific class
    if ( isset($attributes['className']) && strpos($attributes['className'], 'multiple-postTypes-slider') !== false ) {

        // Define multiple post types to include in the query
        $args['post_type'] = array('post', 'pages');
    }

    return $args; 

}, 20, 2);
```

This code will be applied to all Post Grid/Carousel blocks with a specific CSS class, “
```
multiple-postTypes-slider
```

” and show posts and pages.

If you need further assistance customizing your Post Grid/Carousel block query, we’re here to help! *Submit a Premium Support Ticket Here*.

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

