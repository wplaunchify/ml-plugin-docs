# Customizing The Kadence Blocks Pro Post Grid Carousel Blocks Query To Show Multiple Post Types

*Category from Kadence Blocks — Page Builder Toolkit for Gutenberg Editor documentation*

---

## Customizing the Kadence Blocks Pro Post Grid/Carousel block’s Query to show multiple post types

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/customizing-the-kadence-blocks-pro-post-grid-carousel-blocks-query-to-show-multiple-post-types/](https://www.kadencewp.com/help-center/docs/kadence-blocks/customizing-the-kadence-blocks-pro-post-grid-carousel-blocks-query-to-show-multiple-post-types/)

The Kadence [Post Grid/Carousel block](https://docs.nexcess.com/software/kadence/post-grid-carousel-block/) has filters and hooks that allow you to customize the output of the block. This guide will explain how to customize the **Kadence Blocks Pro** Posts Grid query using the 
```
kadence_blocks_pro_posts_grid_query_args
```

 filter. This tutorial will demonstrate how to:

- Conditionally modify the query based on the block’s 
```
className
```
- Show **multiple post types**

**Note:**  If you’re not familiar with adding custom PHP snippets to your site, please see [this document](https://docs.nexcess.com/software/kadence/blocks/add-custom-filter-or-function-with-code-snippets/).

Not all Post Grid/Carousel blocks on your site need special query logic. By assigning a custom class, you can **limit the filter to only specific instances** of the block. Add the CSS class by going to the *Advanced block settings > Advanced tab > Additional CSS class(es) option*.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Zight-Recording-2025-08-07-at-07.12.11-AM.gif)

The sample code snippet is:

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

---

