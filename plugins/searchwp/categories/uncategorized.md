# Uncategorized

*Category from SearchWP documentation*

---

## Order Product Results by Total Sales

**Source:** [https://searchwp.com/documentation/knowledge-base/order-product-results-by-total-sales/](https://searchwp.com/documentation/knowledge-base/order-product-results-by-total-sales/)

SearchWP ranks search results based on how well they match the search terms. This ranking uses the weight settings you configure in your [engine settings](https://searchwp.com/documentation/setup/engines/) for different content fields. However, for WooCommerce stores, you might want to show products based on how many times they’ve been sold instead of just content matching.

Ordering products by total sales can help increase revenue by showing your most popular products first. This strategy puts products that customers already like at the top of search results.

## Order Results by Total Sales

If you want to show product results ordered by sales numbers, you can use the code below. This method ignores the content matching and shows your best-selling products first, no matter how well they match the search terms.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Order product search results by total sales |
|  | add_filter( 'searchwp\query\mods', function( $mods, $query ) { |
|  | global $wpdb; |
|  |  |
|  | $mod        = new \SearchWP\Mod(); |
|  | $alias      = \SearchWP::$index->get_alias(); |
|  | $meta_alias = 'my_searchwp_sort_products'; |
|  | $meta_key   = 'total_sales'; |
|  |  |
|  | $mod->column_as( $wpdb->prepare( "( |
|  | SELECT meta_value |
|  | FROM {$wpdb->postmeta} |
|  | WHERE |
|  | {$wpdb->postmeta}.post_id = {$alias}.id |
|  | AND {$wpdb->postmeta}.meta_key = %s |
|  | )", $meta_key ), |
|  | $meta_alias ); |
|  | $mod->order_by( "{$meta_alias} + 0", 'DESC', 5 ); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | }, 30, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/cdba67890c5595c199af0b27f7f1b0bb/raw/be89bd5462881407676f8a6332fdff75e1623b8c/searchwp-customisations.php)
        [searchwp-customisations.php](https://gist.github.com/searchwpgists/cdba67890c5595c199af0b27f7f1b0bb#file-searchwp-customisations-php)
        hosted with ❤ by [GitHub](https://github.com)

This code sorts your search results by the number of sales in descending order (highest to lowest). The implementation takes complete precedence over [SearchWP’s relevance algorithm](https://searchwp.com/wordpress-search-results-sorted-by-relevance/), meaning that products will always be ordered by sales volume regardless of how well their content matches the search query.

**Note**: If two or more products have the same number of sales, their order will be determined by a secondary sort based on relevance.

## Boost Popular Products While Keeping Relevance

If you want to keep SearchWP’s normal ranking but give extra points to products that sell well, you can use a different approach. This method keeps the content matching in place but pushes popular products higher in the results.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Boost relevance for WooCommerce products with high total sales |
|  | add_filter( 'searchwp\query\mods', function( $mods, $query ) { |
|  | global $wpdb; |
|  |  |
|  | // Adjustable variables |
|  | $min_total_sales = 100;     // Minimum sales required to qualify |
|  | $bonus_weight    = 99999;    // Base relevance weight |
|  | $sales_multiplier = 100;     // Extra relevance per sale |
|  |  |
|  | $search_term = trim( $query->get_keywords() ); |
|  | if ( empty( $search_term ) ) { |
|  | return $mods; |
|  | } |
|  |  |
|  | $mod = new \SearchWP\Mod(); |
|  | $mod->set_local_table( $wpdb->posts ); |
|  | $mod->on( 'ID', [ 'column' => 'id' ] ); |
|  |  |
|  | $mod->relevance( function( $runtime ) use ( $wpdb, $min_total_sales, $bonus_weight, $sales_multiplier ) { |
|  | $alias = $runtime->get_local_table_alias(); |
|  |  |
|  | return " |
|  | CASE |
|  | WHEN {$alias}.post_type = 'product' |
|  | AND ( |
|  | SELECT CAST(pm.meta_value AS UNSIGNED) |
|  | FROM {$wpdb->postmeta} pm |
|  | WHERE pm.post_id = {$alias}.ID |
|  | AND pm.meta_key = '_total_sales' |
|  | LIMIT 1 |
|  | ) >= {$min_total_sales} |
|  | THEN |
|  | {$bonus_weight} + |
|  | ( |
|  | SELECT CAST(pm.meta_value AS UNSIGNED) |
|  | FROM {$wpdb->postmeta} pm |
|  | WHERE pm.post_id = {$alias}.ID |
|  | AND pm.meta_key = '_total_sales' |
|  | LIMIT 1 |
|  | ) * {$sales_multiplier} |
|  | ELSE 0 |
|  | END |
|  | "; |
|  | }); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/85b00e6b97d8ceb315fcb4e7f1cde8c3/raw/2dc8bdce11b82001f956b2355130c86bb7389fee/searchwp-customisations.php)
        [searchwp-customisations.php](https://gist.github.com/searchwpgists/85b00e6b97d8ceb315fcb4e7f1cde8c3#file-searchwp-customisations-php)
        hosted with ❤ by [GitHub](https://github.com)

This code adds bonus points to products that have sold a certain number of times. The bonus includes a base score plus extra points based on total sales. This means popular products get higher rankings while SearchWP still considers how well products match the search terms.

### Adjusting the Settings

The code includes three settings you can change to control how the boost works:

**Minimum Total Sales (****$min_total_sales****):** Set to 100 by default. This is the number of sales a product needs before it gets the boost. Change this number based on your store’s typical sales.

**Bonus Weight (****$bonus_weight****):** Set to 99999 by default. This is the base score added to products that qualify. Higher numbers give popular products a bigger advantage.

**Sales Multiplier (****$sales_multiplier****):** Set to 100 by default. This number is multiplied by the product’s total sales to add more points. Higher numbers create a bigger difference between moderately popular and very popular products.

## Adding the Code

You can add the custom hooks by using a code snippet plugin like [WPCode](https://wordpress.org/plugins/insert-headers-and-footers/), or by creating a SearchWP customizations plugin as explained in this [SearchWP documentation](https://searchwp.com/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

Once you add and activate the code, SearchWP will start using your new ordering strategy right away. With the boost method, products with enough sales will appear at the top of results, followed by other matching products.

## Track Results with SearchWP Metrics

After you add a sales-based ordering strategy, use the [SearchWP Metrics extension](https://searchwp.com/documentation/extensions/metrics/) to see how it performs over time. Metrics show you how many clicks your best-selling products get compared to other results. This helps you understand if the new ordering is working well.

By looking at click data in Metrics, you can see if customers find what they want faster, or if they’re skipping over good products that don’t sell as much. Use this information to adjust your strategy, change the settings in the code, or try different approaches to find what works best for your store.

---

## How to Include Draft and Private Posts in Admin Searches with SearchWP

**Source:** [https://searchwp.com/documentation/knowledge-base/how-to-include-draft-and-private-posts-in-admin-searches-with-searchwp/](https://searchwp.com/documentation/knowledge-base/how-to-include-draft-and-private-posts-in-admin-searches-with-searchwp/)

SearchWP includes built-in support for improving search results in the WordPress admin area by enabling the **Admin Engine option** in the [Engine Settings](https://searchwp.com/documentation/setup/engines/) on the SearchWP Algorithms page. When this option is enabled, SearchWP enhances searches performed within the WordPress dashboard, such as searches in the Posts or Pages screens. However, by default, SearchWP only indexes and returns **published** content. Draft, private, and scheduled (future) posts are excluded from search results.

This behavior exists because SearchWP is primarily designed to power frontend search experiences, where unpublished content should not be publicly accessible. As a result, non-published post statuses are not indexed unless explicitly included. If you rely on SearchWP to search content in the admin area and need to locate draft, private, or scheduled posts, you can extend SearchWP’s behavior using a custom filter hook.

The following example demonstrates how to include draft, private, and scheduled posts in admin-only searches, while keeping frontend search results unchanged:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Search draft, private, and scheduled posts in admin side only |
|  | add_filter( 'searchwp\post_stati', function ( $post_stati, $args ) { |
|  | $is_search = is_search() || isset( $_REQUEST['s'] ); |
|  | $is_swp_search = isset( $_REQUEST['swps'] ); |
|  | $is_admin  = is_admin() && ! wp_doing_ajax(); |
|  |  |
|  | // Do not modify post statuses on SearchWP results pages and normal frontend searches |
|  | if ( ($is_swp_search || $is_search) && ! $is_admin ) { |
|  | return $post_stati; |
|  | } |
|  |  |
|  | // Include draft, private, and scheduled (future) posts in admin search |
|  | return array_unique( |
|  | array_merge( $post_stati, [ 'draft', 'private', 'future' ] ) |
|  | ); |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/7bff3dbdfb535e61632b879c0f1547f4/raw/ba482a65331543b41a13f2e2f1face022579201f/searchwp-customisations.php)
        [searchwp-customisations.php](https://gist.github.com/searchwpgists/7bff3dbdfb535e61632b879c0f1547f4#file-searchwp-customisations-php)
        hosted with ❤ by [GitHub](https://github.com)

You can add this code using a code snippet plugin such as [WPCode](https://wpcode.com/), or by preparing a [SearchWP Customizations Plugin](https://searchwp.com/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This hook modifies the list of post statuses that SearchWP considers during indexing and searching, but only when the search is performed in the WordPress admin area. As a result, draft, private, and scheduled posts from post types included in your SearchWP engine will become searchable in the dashboard. These posts will not appear in frontend search results, ensuring that unpublished content remains hidden from site visitors.

---

## How to display Post Type label in Search Results

**Source:** [https://searchwp.com/documentation/knowledge-base/how-to-display-post-type-label-in-search-results/](https://searchwp.com/documentation/knowledge-base/how-to-display-post-type-label-in-search-results/)

When using the default WordPress search, the results are displayed through your theme’s built-in search template file (usually named search.php). Most WordPress themes do not include post type information in their search result displays by default, showing only the post title, excerpt, and other standard elements. If you wish to show the post type label (for example, “Post,” “Page,” “Product,” etc.) alongside each search result, you will need to make a small customization either by editing your theme’s search template or by using WordPress hooks.

The first approach is to manually edit your theme’s search template file. Inside the main search loop, you can use the 
```
get_post_type_object()
```

 function to retrieve and display the post type label for each result. This gives you complete control over where and how the post type information appears within the search result layout.Alternatively, you can use a WordPress filter hook to automatically prepend the post type label before the title of each search result. This approach is easier and does not require modifying your theme files. You can add the following snippet by preparing a [SearchWP Customizations Plugin](https://searchwp.com/documentation/knowledge-base/creating-searchwp-customizations-plugin/) or using a code snippet manager like [WPCode](https://wpcode.com/):

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  | // Prepend post type label to title for native main search |
|  | add_filter( 'the_title', function( $title, $post_id ) { |
|  | if ( in_the_loop() && ( is_search() || isset( $_REQUEST['swps'] ) ) ) { |
|  | $post_type_obj = get_post_type_object( get_post_type( $post_id ) ); |
|  | if ( $post_type_obj && ! empty( $post_type_obj->labels->singular_name ) ) { |
|  | $label = esc_html( $post_type_obj->labels->singular_name ); |
|  | $title = sprintf( '<span class="search-post-type">%s:</span> %s', $label, $title ); |
|  | } |
|  | } |
|  | return $title; |
|  | }, 10, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/9c1fa6434dc92ccdfc61f6c915b08db7/raw/ca173660b1237a872e3947cbe178ec4ddc8d4c42/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/9c1fa6434dc92ccdfc61f6c915b08db7#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

This code ensures that whenever a user performs a search, the post type name (such as “Page” or “Product”) is displayed before the title of each result in the search results list. It uses the WordPress 
```
the_title()
```

 filter and checks whether the current loop is part of a search query before applying the modification.

If you are using SearchWP’s custom [Template results](https://searchwp.com/documentation/setup/search-templates/) or [Live Search](https://searchwp.com/documentation/extensions/live-search/), the above hook will not apply automatically because those results are generated differently. Instead, you can use SearchWP’s own filter hooks to modify the output of each result entry. The following example shows how to prepend the post type label before the title for both the SearchWP template and the Live Search results:

Here’s an example using a fallback image:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  | // Display post type label before title for SearchWP template and live search results |
|  | function prepend_post_type_to_title( $data, $result ) { |
|  | if ( $result instanceof \WP_Post ) { |
|  | $post_type_obj = get_post_type_object( get_post_type( $result ) ); |
|  | if ( $post_type_obj && ! empty( $post_type_obj->labels->singular_name ) ) { |
|  | $label = esc_html( $post_type_obj->labels->singular_name ); |
|  | $data['title'] = $label . ' - ' . $data['title']; |
|  | } |
|  | } |
|  | return $data; |
|  | } |
|  |  |
|  | // Hook for SearchWP template |
|  | add_filter( 'searchwp\results\entry\data', function( $data, $result ) { |
|  | return prepend_post_type_to_title( $data, $result ); |
|  | }, 20, 2 ); |
|  |  |
|  | // Hook for SearchWP Live Search |
|  | add_filter( 'searchwp_live_search_results_entry_data', function( $data, $result ) { |
|  | return prepend_post_type_to_title( $data, $result ); |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/974e64eaf917f28ffd33cd8d0f190e2d/raw/6e58348ce0d5f3d2c2758c9481e6d8888597b599/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/974e64eaf917f28ffd33cd8d0f190e2d#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

With this customization in place, SearchWP will automatically display the post type name before the title in both its custom search template results and live search dropdown. This method provides a flexible and code-friendly way to give users additional context about the type of content they’re viewing in search results without directly modifying your theme files.

---

## How to change the default fallback image for Search Results

**Source:** [https://searchwp.com/documentation/knowledge-base/how-to-change-the-default-fallback-image-for-search-results/](https://searchwp.com/documentation/knowledge-base/how-to-change-the-default-fallback-image-for-search-results/)

SearchWP utilizes the featured image field of posts to display thumbnail images in search results. This approach works well for standard post types that have featured images assigned, but some content types may not have featured images or may require different image handling. For these situations, you can implement custom fallback images to ensure consistent visual presentation across all search results.

### Basic Fallback Image Configuration

You can use WordPress’s 
```
post_thumbnail_html
```

 hook to assign alternative images for specific post types that don’t have featured image fields or when you want to override the default thumbnail behavior. This hook provides complete control over thumbnail display and allows you to customize image presentation based on post type, content, or any other criteria you define.

For more information about this hook’s parameters and usage, refer to the WordPress developer documentation [here](https://developer.wordpress.org/reference/hooks/post_thumbnail_html/).

### Media Image Results

When working with media image results in your search, you can modify the 
```
post_thumbnail_html
```

 hook to display the original image thumbnail rather than relying on featured images. The following example demonstrates how to implement this functionality specifically for search results and SearchWP Live Ajax search contexts:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  | // Set image thumbnail for media image results on search page |
|  | add_filter( 'post_thumbnail_html', function( $html, $post_id ) { |
|  | // Check if we're in a search context |
|  | if ( |
|  | ( |
|  | is_search() |
|  | || doing_action( 'wp_ajax_searchwp_live_search' ) |
|  | || doing_action( 'wp_ajax_nopriv_searchwp_live_search' ) |
|  | || isset( $_REQUEST['swps'] ) |
|  | ) |
|  | && 'attachment' === get_post_type( $post_id ) |
|  | ) { |
|  | $mime_type = get_post_mime_type( $post_id ); |
|  |  |
|  | // If it’s an image attachment, use the original thumbnail |
|  | if ( strpos( $mime_type, "image" ) !== false ) { |
|  | $html = wp_get_attachment_image( $post_id, 'thumbnail' ); |
|  | } |
|  | } |
|  |  |
|  |  |
|  | return $html; |
|  | }, 10, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/2ce4efcc02d16470eaeca75d08b6b964/raw/1f4bcea37a46bf8915e4a4525e753e35c0f35dd4/searchwp-customisations.php)
        [searchwp-customisations.php](https://gist.github.com/searchwpgists/2ce4efcc02d16470eaeca75d08b6b964#file-searchwp-customisations-php)
        hosted with ❤ by [GitHub](https://github.com)

Note: All hooks should be added to *your custom* [SearchWP Customizations Plugin](https://searchwp.com/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

### PDF Media Results

For **PDF search results**, you may want to display a placeholder image or use a custom field (like an ACF-uploaded thumbnail).

Here’s an example using a fallback image:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  | // Set default thumbnail for PDF results on search page |
|  | add_filter( 'post_thumbnail_html', function( $html, $post_id ) { |
|  | $mime_type = get_post_mime_type( $post_id ); |
|  |  |
|  | // Target PDF media results only |
|  | if ( 'attachment' === get_post_type( $post_id ) && strpos( $mime_type, "pdf" ) !== false ) { |
|  | $html = "<img src='https://placehold.co/500x500' alt='PDF Thumbnail' />"; |
|  | } |
|  |  |
|  | return $html; |
|  | }, 10, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/161c94b9b3ed137d7200a848deb89615/raw/65ef27d48af60c6c997a0b85fab835aaa29c6147/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/161c94b9b3ed137d7200a848deb89615#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

Note: If you’re using **ACF fields** to assign thumbnails for PDFs, you can replace the placeholder with a dynamic field value.

---

## WordPress Gutenberg Blocks in Search Results

**Source:** [https://searchwp.com/documentation/knowledge-base/wordpress-gutenberg-blocks-in-search-results/](https://searchwp.com/documentation/knowledge-base/wordpress-gutenberg-blocks-in-search-results/)

WordPress version 5.0 introduced a new block editor which is often referred to as Gutenberg. This new editor completely changes how content is created in WordPress.

It also fundamentally changes how the content is stored in the database, which means it affects how native WordPress search works in many ways.

## How Gutenberg stores data

Prior to Gutenberg, WordPress stored plain HTML markup that represented your content, and it was displayed as such on your website. Gutenberg, however, stores content in a serialized format that contains extra content.

*(A couple of line breaks have been added for readability)*

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <!-- wp:paragraph --> |
| --- | --- |
|  | <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus  tincidunt nunc vel |
|  | consequat dapibus. Pellentesque aliquet felis nulla,  sit amet efficitur mauris |
|  | finibus in. </p> |
|  | <!-- /wp:paragraph --> |
|  |  |
|  | <!-- wp:heading --> |
|  | <h2>Lipsum dolor sit</h2> |
|  | <!-- /wp:heading --> |
|  |  |
|  | <!-- wp:list {"ordered":true} --> |
|  | <ol><li>Massa dictum</li><li>Neque vitae</li><li>Porta ut morbi eu</li></ol> |
|  | <!-- /wp:list --> |
|  |  |
|  | <!-- wp:image {"id":47} --> |
|  | <figure class="wp-block-image"> |
|  | <img src="http://site.com/wp-content/uploads/coffee-image.png" alt="" class="wp-image-47"/> |
|  | </figure> |
|  | <!-- /wp:image --> |
|  |  |
|  | <!-- wp:paragraph --> |
|  | <p>Vivamus eleifend, erat eu  scelerisque condimentum, justo dui dictum neque, rutrum ornare |
|  | est leo  vel erat. Donec auctor tempor scelerisque. In dapibus elit velit, vitae  tincidunt |
|  | urna porta ut. Morbi eu euismod massa. </p> |
|  | <!-- /wp:paragraph --> |
      [view raw](https://gist.github.com/searchwpgists/c3aec4a43cd6d246493e926ea0927c5a/raw/55d198556256a2d57b4075d2bd8ffa9d3b728318/gutenberg.html)
        [gutenberg.html](https://gist.github.com/searchwpgists/c3aec4a43cd6d246493e926ea0927c5a#file-gutenberg-html)
        hosted with ❤ by [GitHub](https://github.com)

This content is necessary for Gutenberg to operate in the way it does, but it introduces additional content that is stored in the database and subsequently searched by WordPress native search.

This isn’t *new* to WordPress because of Gutenberg, the problem has always been there, but Gutenberg exacerbates the issue by inserting quite a bit more data than the previous editor.

Further, there is no limit to what blocks you can use, and there are more blocks being created every day, each with their own machine language that’s stored alongside your content.

## Why this is problematic for search

At first glance, the additions to what’s stored in the database don’t seem to affect much. Native WordPress search will check against all of the above content, including terms like “paragraph”, “heading”, “image”, etc.

Each Gutenberg block uses its own storage mechanism, which *can* introduce content that decreases native WordPress search relevance, or content you may not want searched at all.

By contrast, SearchWP processes your content prior to indexing it in an optimal way. That includes removing Gutenberg-generated markup, and indexing what your visitors actually see when they visit your site, not the machine language stored in the database.

This is a known limitation of native WordPress search and flagged as an acceptable circumstance: [WordPress search, unexpected results due to Gutenberg serialization markup](https://github.com/WordPress/gutenberg/issues/3739) 
```
#3739
```

## Additional search complications with Gutenberg

Gutenberg does a great job of empowering editors with many new tools beyond its concept of block editing. There is also a feature called reusable blocks.

Reusable blocks do what it says on the tin; allow you to create blocks that can be reused throughout your site. This is a *fantastic way* to save you time and effort in maintaining and writing content!

Unfortunately, while a reusable block looks like this when adding it to an entry:

![Screenshot of Gutenberg reusable block](https://searchwp.com/wp-content/uploads/gutenberg-reusable-block.png)

that block looks like this in the database (**line 7**) which is what native WordPress search can see:

*(A couple of line breaks have been added for readability)*

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <!-- wp:paragraph --> |
| --- | --- |
|  | <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus |
|  | tincidunt nunc vel consequat dapibus. Pellentesque aliquet felis |
|  | nulla,  sit amet efficitur mauris finibus in. </p> |
|  | <!-- /wp:paragraph --> |
|  |  |
|  | <!-- wp:block {"ref":50} /--> |
|  |  |
|  | <!-- wp:heading --> |
|  | <h2>Lipsum dolor sit</h2> |
|  | <!-- /wp:heading --> |
|  |  |
|  | <!-- wp:list {"ordered":true} --> |
|  | <ol><li>Massa dictum</li><li>Neque vitae</li><li>Porta ut morbi eu</li></ol> |
|  | <!-- /wp:list --> |
|  |  |
|  | <!-- wp:image {"id":47} --> |
|  | <figure class="wp-block-image"> |
|  | <img src="http://mysite.com/wp-content/uploads/coffee-cup.png" alt="" class="wp-image-47"/> |
|  | </figure> |
|  | <!-- /wp:image --> |
|  |  |
|  | <!-- wp:paragraph --> |
|  | <p>Vivamus eleifend, erat eu  scelerisque condimentum, justo dui dictum neque, rutrum |
|  | ornare est leo  vel erat. Donec auctor tempor scelerisque. In dapibus elit velit, vitae |
|  | tincidunt urna porta ut. Morbi eu euismod massa. </p> |
|  | <!-- /wp:paragraph --> |
      [view raw](https://gist.github.com/searchwpgists/44bbc9d41ef211bd33bd2ce41f0669d2/raw/53139156c6d94a34d1bdb59407738b05ff3b0e7d/gutenberg.html)
        [gutenberg.html](https://gist.github.com/searchwpgists/44bbc9d41ef211bd33bd2ce41f0669d2#file-gutenberg-html)
        hosted with ❤ by [GitHub](https://github.com)

Because of the way native WordPress search works, it won’t find the actual content of this reusable block, just the machine language reference to the block used by Gutenberg.

Reusable blocks are fantastic for content management, but do not work with native WordPress search.

This is also a known limitation of native WordPress search: [Reusable block content not visible in search results](https://github.com/WordPress/gutenberg/issues/10307) 
```
#10307
```

SearchWP will parse these blocks and transform them from Gutenberg’s machine code into actual content *prior* to indexing, which makes all of your reusable content block content searchable.

This additional parsing by SearchWP can be customized, fine-tuned, or even disabled if you’d like!

### Fix Gutenberg search with SearchWP

Maintaining a separate search index for WordPress sites allows you to take advantage of everything WordPress has to offer, without the shortcomings of its default search implementation.

---

## Intercept Advanced Custom Fields (ACF) Relationship Field Searches

**Source:** [https://searchwp.com/documentation/knowledge-base/intercept-advanced-custom-fields-acf-relationship-field-searches/](https://searchwp.com/documentation/knowledge-base/intercept-advanced-custom-fields-acf-relationship-field-searches/)

Advanced Custom Fields has the option of adding a search input to Relationship fields:

![ACF Relationship field](https://searchwp.com/wp-content/uploads/acf-relationship.png)

By default SearchWP will not intercept these searches, but using this snippet you can make that happen:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | function my_searchwp_acf_relationship_field_search( $args, $field, $post_id ) { |
|  | if ( empty( $args['s'] ) || ! class_exists( 'SWP_Query' ) ) { |
|  | return $args; |
|  | } |
|  |  |
|  | // Assume that the SearchWP engine to use is the defined admin search engine |
|  | // from SearchWP's engine settings. |
|  | $admin_engine = \SearchWP\Settings::get_admin_engine(); |
|  | $engine_name = ! empty( $admin_engine ) ? $admin_engine : 'default'; |
|  |  |
|  | $engine = new \SearchWP\Engine( $engine_name ); |
|  | $engine_sources = $engine->get_sources(); |
|  |  |
|  | if ( empty( $engine_sources ) ) { |
|  | return array( 0 ); |
|  | } |
|  |  |
|  | // Get Source post types |
|  | $engine_sources = array_map( |
|  | function( $source ) { |
|  | $source_name = $source->get_name(); |
|  | $source_name_parts = explode( SEARCHWP_SEPARATOR, $source_name ); |
|  | return $source_name_parts[1] ?? false; |
|  | }, |
|  | $engine_sources |
|  | ); |
|  |  |
|  | $engine_sources = array_filter( |
|  | $engine_sources, |
|  | function( $source ) { |
|  | return false !== strpos( $source, 'post' . SEARCHWP_SEPARATOR ); |
|  | }, |
|  | ARRAY_FILTER_USE_KEY |
|  | ); |
|  |  |
|  | if ( empty( $engine_sources ) ) { |
|  | return array( 0 ); |
|  | } |
|  |  |
|  | $searchwp_args = array( |
|  | 'engine' => $engine_name,           // The SearchWP engine to use. |
|  | 's'      => $args['s'],             // Pass along the search query. |
|  | 'fields' => 'ids',                  // Return only post IDs. |
|  | ); |
|  |  |
|  | if ( ! empty( $args['taxonomy' ] ) ) { |
|  | $tax_arg = explode( ':', $args['taxonomy'] ); |
|  |  |
|  | $searchwp_args['tax_query'] = array( |
|  | array( |
|  | 'taxonomy' => $tax_arg[0], |
|  | 'field'    => 'slug', |
|  | 'terms'    => $tax_arg[1], |
|  | ), |
|  | ); |
|  | } |
|  |  |
|  | if ( ! empty( $args['post_type'] ) ) { |
|  | $searchwp_args['post_type'] = array_intersect( $args['post_type'], array_values( $engine_sources ) ); |
|  | } |
|  |  |
|  | // Tell SearchWP to NOT log this search. |
|  | add_filter( 'searchwp\statistics\log', '__return_false' ); |
|  |  |
|  | // Retrieve SearchWP results. |
|  | $results = new SWP_Query( $searchwp_args ); |
|  |  |
|  | // If there are no results, we need to force ACF to reflect that. |
|  | if ( empty( $results->posts ) ) { |
|  | $results->posts = array( 0 ); |
|  | } |
|  |  |
|  | // We're going to use SearchWP's results to handle the restrictions as outlined. |
|  | $args['s']        = ''; |
|  | $args['order']    = ''; |
|  | $args['orderby']  = 'post__in'; |
|  | $args['post__in'] = $results->posts; |
|  |  |
|  | return $args; |
|  | } |
|  |  |
|  | // Tell SearchWP to intercept all ACF Relationship field searches. |
|  | add_filter( 'acf/fields/relationship/query', 'my_searchwp_acf_relationship_field_search', 10, 3 ); |
|  |  |
|  | // Tell SearchWP to intercept a single ACF Relationship field search. |
|  | // add_filter( 'acf/fields/relationship/query/name=my_acf_relationship_field_name', 'my_searchwp_acf_relationship_field_search', 10, 3 ); |
      [view raw](https://gist.github.com/searchwpgists/194be0208c3d605117430e107d80f700/raw/6ac697acce5028294e7ff7b3ad46b86b572c4af1/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/194be0208c3d605117430e107d80f700#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

There are a couple of things to note with this snippet:

You can control which Relationship field(s) utilizes SearchWP for searches. Line 85 uses ACF’s hook to apply SearchWP’s results to *all* Relationship field searches.

If instead you want to pick and choose which Relationship fields you’d like SearchWP to work with, comment out line 85 and uncomment line 88 making sure to update 
```
my_acf_relationship_field_name
```

 with the name of one of your Relationship fields. You can repeat the hook (updating the Relationship field name) for each additional field as well.

The second thing to note is that the 
```
my_searchwp_acf_relationship_field_search
```

 callback (which is what actually modifies the ACF search results for this use case) uses the SearchWP engine that you have defined as the Admin search engine on the Advanced tab of the SearchWP settings screen.

If you’d like to override that you can provide the SearchWP engine name to use on line 13 of the snippet.

Once this hook is in place SearchWP will intercept the applicable Advanced Custom Fields Relationship Field searches, returning results from SearchWP itself.

---

## Can SearchWP work on a huge site?

**Source:** [https://searchwp.com/documentation/knowledge-base/can-searchwp-work-on-a-huge-site/](https://searchwp.com/documentation/knowledge-base/can-searchwp-work-on-a-huge-site/)

SearchWP was designed and built to work best on small-to-midsize WordPress sites
	
SearchWP was designed from the get-go to *work best on small-to-midsize sites*. It will work best on a site with anywhere from a few posts to a few thousand. If your website has tens of thousands of posts (e.g. Posts, Pages, Custom Post Types) or even hundreds of thousands **I would not recommend using SearchWP**.

SearchWP was built on a test database consisting of about 20,000 posts in total (that includes Posts, Pages, and a few Custom Post Types). Performance was acceptable at that scale, but I would consider it the upper end of SearchWP’s sweet spot. These were fairly standard content types with some Custom Fields for each, and searches ran very acceptably. If those 20,000 entries were something more complex (e.g. an ecommerce product with a ton of metadata) and the search engine was configured to support a number of taxonomies and post meta, the search queries would have likely taken much longer.

The other thing to consider with a lot of content is the total time it will take to build the initial index. A site with tens of thousands of entries will likely **take multiple days to build the first index**. This is not ideal. That time increases as the overall volume of content increases. There are of course other factors to consider such as the specifications of the server, but the total number of posts can be a good gauge out of the box.

## Alternative solutions to SearchWP for large websites

As WordPress continues to become the platform for extremely large sites, more and more will need an effective search solution. Without getting too technical: the database technology WordPress was built on was not specifically designed for rapid indexing and search. SearchWP adapts to that and works really well on small-to-midsize websites, but for large websites you will want something more fine-tuned.

### Algolia

[Algolia](https://www.algolia.com/) has taken the search world by storm! It’s an amazing product that with some development effort can be a truly fantastic search solution for sites of any size.

### Swiftype

I would recommend checking out a hosted ElasticSearch service that basically replicates the turnkey approach offered by SearchWP, but will allow you to scale up to something much more powerful. [Swiftype](https://swiftype.com/) is a great company that touts excellent integration with WordPress.

### ElasticPress

If you want to get your hands a bit more dirty and set up your own ElasticSearch server (or have access to one that has been set up for you) I would definitely recommend checking out [ElasticPress](https://github.com/10up/ElasticPress) from the folks at [10up](http://10up.com/). ElasticPress integrates your WordPress site with ElasticSearch and can bring all of the benefits of that along with it.

---

## Increasing PHP Memory Usage

**Source:** [https://searchwp.com/documentation/knowledge-base/increasing-php-memory-usage/](https://searchwp.com/documentation/knowledge-base/increasing-php-memory-usage/)

![SearchWP memory limit notice](https://searchwp.com/wp-content/uploads/searchwp-admin-memory-limit-notice.png)

If you are seeing this notice on the Engines tab of your SearchWP settings screen, SearchWP has detected that the memory available on the site could be increased, which will result in better performance not only of SearchWP but WordPress itself.

WordPress has made available more information on [increasing memory allocation](https://wordpress.org/support/article/editing-wp-config-php/#increasing-memory-allocated-to-php).

If you are not able to make this change yourself, please open a support ticket with your host for assistance.

---

## Role of WP-Cron in Background Process

**Source:** [https://searchwp.com/documentation/knowledge-base/wp-cron-background-process/](https://searchwp.com/documentation/knowledge-base/wp-cron-background-process/)

SearchWP’s indexer background process utilizes [WP-Cron](https://developer.wordpress.org/plugins/cron/) to perform periodic health checks on itself.

These health checks help to insure that the background process does not (in many/most cases) catastrophically fail resulting in an incomplete search index.

![Screenshot of WP-Cron notice on SearchWP settings screen](https://searchwp.com/wp-content/uploads/searchwp-wpcron-notice.png)

If you are seeing this following Warning on the Engines tab of your SearchWP settings screen, SearchWP cannot verify that its health checks are running as expected.

## Known false positive

If you know that this is a false positive, you can permanently dismiss the notice with this hook:

```
add_filter( 'searchwp\utils\cron_operational', '__return_true');
```

Please note, however, that if you have purposely disabled WP-Cron in its entirety (as opposed to [setting up a system-level cron handler](https://developer.wordpress.org/plugins/cron/hooking-wp-cron-into-the-system-task-scheduler/)) SearchWP cannot effectively perform background process health checks.

## Resolving issues with WP-Cron

If you are seeing this notice and there is no (to your knowledge) customization of WP-Cron, please open a support ticket with your host to inquire about whether WP-Cron is working as expected on your site.

You can also install a Plugin like [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/) to observe more detail about WP-Cron and the various scheduled tasks that are registered on your site.

---

## Define Secondary Order By Sorting for Results with Matching Relevance

**Source:** [https://searchwp.com/documentation/knowledge-base/define-secondary-order-by-sorting-for-results-with-matching-relevance/](https://searchwp.com/documentation/knowledge-base/define-secondary-order-by-sorting-for-results-with-matching-relevance/)

There will be times when the relevance of multiple search results is exactly the same, leaving it up to MySQL to decide how to sort those results with matching relevance.

Using a [\SearchWP\Mod](https://searchwp.com/documentation/classes/searchwp-mod/) you can instead specify how you want results with matching relevance to be sorted.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Add secondary sort to SearchWP results to sort matching |
|  | // relevance results by Title in ASC order. |
|  | add_filter( 'searchwp\query\mods', function( $mods, $query ) { |
|  | global $wpdb; |
|  |  |
|  | $mod = new \SearchWP\Mod(); |
|  |  |
|  | $mod->set_local_table( $wpdb->posts ); |
|  | $mod->on( 'ID', [ 'column' => 'id' ] ); |
|  | $mod->order_by( function( $mod ) { |
|  | return $mod->get_local_table_alias() . '.post_title'; |
|  | }, 'ASC', 99 ); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | }, 30, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/015e331b08a0e2c320495bd9ff0050f2/raw/e866aecc1c07469ed42d545e85e18616bb515b64/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/015e331b08a0e2c320495bd9ff0050f2#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

Using this snippet we’re telling SearchWP to implement a *secondary* sorting mechanism to sort results with matching relevance scores by their defined post Title in 
```
ASC
```

 order.

This is a *secondary* sorting clause because of the priority set in the 
```
order_by()
```

 method call which is 99. When setting an 
```
order_by()
```

 clause in a 
```
\SearchWP\Mod
```

 each clause is output according to its priority in 
```
ASC
```

 order.

There is a core default order for all SearchWP queries at priority 
```
10
```

 to sort by 
```
relevance
```

 in 
```
DESC
```

 order.

---

## Limiting Results to a Specific Taxonomy Term (Category, Tag, etc)

**Source:** [https://searchwp.com/documentation/knowledge-base/limit-results-taxonomy-term/](https://searchwp.com/documentation/knowledge-base/limit-results-taxonomy-term/)

Table of Contents

		- [Apply to native/default search results page](#basic)
- [Programmatic search query](#arguments)
	

## Apply to native/default search results

If instead of [creating a search form to allow choosing a Category](https://searchwp.com/documentation/knowledge-base/category-select-dropdown/) (or other Taxonomy Term) you would instead like to:

Always limit your native/default search results to a specific Category we can use a [\SearchWP\Mod](https://searchwp.com/documentation/classes/searchwp-mod/) like so:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Limit SearchWP Native/Default results to Category that has 'foobar' slug. |
|  | add_filter( 'searchwp\native\args', function( $args, $query ) { |
|  | if ( ! isset( $args['tax_query'] ) || ! is_array( $args['tax_query'] ) ) { |
|  | $args['tax_query'] = []; |
|  | } |
|  |  |
|  | $args['tax_query'][] = [ |
|  | 'taxonomy' => 'category', |
|  | 'field'    => 'slug', |
|  | 'terms'    => 'foobar', |
|  | ]; |
|  |  |
|  | return $args; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/da0d1621810c1b4e9142faf2016bc5ba/raw/c35ab992801bcbc4069b15595e4d19443a087079/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/da0d1621810c1b4e9142faf2016bc5ba#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

Note that this 
```
\SearchWP\Mod
```

 applies to *all* Native/Default searches.

## Programmatic search query

If instead of [creating a search form to allow choosing a Category](https://searchwp.com/documentation/knowledge-base/category-select-dropdown/) (or other Taxonomy Term) you would instead like to:

*Always limit a search query to a specific Taxonomy Term (in this case Category) programmatically*

We can use the 
```
tax_query
```

 parameter of [SWP_Query](https://searchwp.com/documentation/classes/swp_query/) like so:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Limit SearchWP results to Category that has 'foobar' slug. |
|  | $search = new \SWP_Query( [ |
|  | 's'         => 'coffee', // Search string. |
|  | 'tax_query' => [ [ |
|  | 'taxonomy' => 'category', |
|  | 'field'    => 'slug', |
|  | 'terms'    => 'foobar', |
|  | ] ], |
|  | ] ); |
|  |  |
|  | // Print all results. |
|  | print_r( $search->posts ); |
      [view raw](https://gist.github.com/searchwpgists/5ed26c65f20f209177f6b2b9afd39d85/raw/61c9b410e28ac21965ce181efb5dd90b2b8371c7/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/5ed26c65f20f209177f6b2b9afd39d85#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

The 
```
tax_query
```

 can accommodate multiple conditions in the same way [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/#taxonomy-parameters) works.

---

## Using Divi Visual Page Builder and SearchWP

**Source:** [https://searchwp.com/documentation/knowledge-base/divi/](https://searchwp.com/documentation/knowledge-base/divi/)

Table of Contents

		- [Setup](#setup)
- [Customize Engine](#engine)
	
[Divi](https://www.elegantthemes.com/gallery/divi/) is a market leading visual page builder powering countless WordPress websites.

	![Screenshot of Divi website](https://searchwp.com/wp-content/uploads/searchwp-divi.jpg)
	
Divi not only allows you to visually structure and build your entire website, it allows you to use all of its tools to customize your search results template as well!

Even better: *SearchWP automatically integrates with Divi’s customized search results template*!

	**Note:** You should use Divi’s *Search Form* Module for search forms
	

## Set up Divi Search Results Template

Creating a Search Results Template in Divi follows the same steps as creating other Templates:

	![Screenshot of creating search results template in Divi](https://searchwp.com/wp-content/uploads/searchwp-divi-create-template.png)
	
Once you have created your Search Results Template it will appear alongside any other Templates you’ve created. We can customize the display of search results by clicking **Add Custom Body** in our **Search Results** Template:

	![Screenshot of Add Custom Body to Search Results Template in Divi](https://searchwp.com/wp-content/uploads/searchwp-divi-customize-body.png)
	
	![Screenshot of Divi Start Building](https://searchwp.com/wp-content/uploads/searchwp-divi-start-building.png)
	
You can then use all of the familiar tools in Divi to set up your Search Results Template. In this example we’ve set up:

1. Text Module in a Row
2. Search Module in a Row
3. Blog Module in a Row (**Important:** this is what displays search results!)

The most important part of your Divi Search Results Template is to ensure you are using a **Blog Module** — it is responsible for displaying SearchWP’s results.

Further, **you must** enable **Posts For Current Page**:

	![Divi Blog Module screenshot](https://searchwp.com/wp-content/uploads/searchwp-divi-blog-module-current-page-posts.png)
	
Once your **Blog Module** has been added to your Search Results Template, you can customize it in any way you’d like using the options available in Divi. Here’s an example:

	![Screenshot of Divi Blog Module Search Results Template](https://searchwp.com/wp-content/uploads/searchwp-divi-search-results.png)
	
Once you’ve finished customizing your Search Results Template you can ensure that your [SearchWP Engine is set up](https://searchwp.com/documentation/setup/engines/) how you’d like, and results from SearchWP will be shown in your Divi Search Results Template! ?

### Customize Engine used

By default SearchWP will use its 
```
default
```

 Engine to perform the search. If you’d like to use a supplemental Engine instead you can use this hook:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Use `supplemental` Engine for Divi Search Results Templates. |
|  | // @link https://searchwp.com/documentation/knowledge-base/divi/ |
|  | add_filter( 'searchwp\integration\pagebuilder\engine', function( $engine, $params ) { |
|  | if ( 'divi' === $params['context'] ) { |
|  | $engine = 'supplemental'; |
|  | } |
|  |  |
|  | return $engine; |
|  | }, 10, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/d1b4b1c24290a0e80bc45ed1af210cfd/raw/3854fbf93e051f94de5c920810d80aed99180092/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/d1b4b1c24290a0e80bc45ed1af210cfd#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

---

## Core SearchWP Sources (Posts, Pages, Media, Comments, CPTs)

**Source:** [https://searchwp.com/documentation/knowledge-base/core-searchwp-sources/](https://searchwp.com/documentation/knowledge-base/core-searchwp-sources/)

By default SearchWP will make searchable all post types (e.g. Posts, Pages, Custom Post Types, Media) and Users. In addition to the post types themselves, each post type has a number of Attributes, including:

- Title
- Excerpt
- Slug
- Content
- Custom Fields
- Taxonomies
- Comments

When setting up your Engine(s) you can pick and choose which of these Source Attributes are added to each Engine and SearchWP will index and weight those Source Attributes based on the configuration you specify.

**Note:** All listed Sources in an Engine will be indexed and searchable. All listed Attributes within each Source will be indexed and searchable. You can *remove* any Source or Attribute by un-ticking the checkbox when configuring your Engine(s).

SearchWP can also index additional custom database tables by way of [\SearchWP\Source](https://searchwp.com/documentation/classes/searchwp-source/). There are some officially supported custom Sources available as [Extensions](https://searchwp.com/extensions/) and you can write your own as well.

## Types of Attributes

There are two types of Attributes for SearchWP Sources: standalone Attributes and Attributes with Options. Standalone Attributes include Title, Excerpt, and Slug. Each standalone Attribute can receive a unique relevance weight.

There are also Attributes with Options, which include Custom Fields and Taxonomies. Each Attribute Option (e.g. individual Custom Fields, Taxonomies) can each receive their own unique relevance weight.

### Comments

Comments are treated in a unique way in that they are essentially a sub-Source because they are directly tied to a post type (e.g. Posts).

When Comments are added to an Engine, they can be configured to search Comment-specific Attributes (again each with a unique relevance weight) but the calculated relevance weight will be *transferred* to the parent 
```
WP_Post
```

 (e.g. Post, Page, Custom Post Type).

Comments are managed as a separate Source so as to minimize the work SearchWP has to do to keep the index updated as Comments are added/removed/edited.

Comments are *not* made searchable by default, and until Comments are added to an Engine they **will not be indexed**.

---

## Adjust the Speed of the Indexer

**Source:** [https://searchwp.com/documentation/knowledge-base/adjust-indexer-speed/](https://searchwp.com/documentation/knowledge-base/adjust-indexer-speed/)

By default SearchWP’s indexer is configured to run as fast as it can without causing your site to run slowly. Part of this configuration involves sane defaults and system monitoring (e.g. CPU/RAM usage) when applicable.

If you are confident that your server is more capable than most, there are a number of hooks you can use to forcefully cause SearchWP’s indexer to be more aggressive.

**Note:** there is a checkbox built in to the Advanced tab of the SearchWP settings screen that *decreases* indexer aggressiveness. This article explains how to make the indexer *more aggressive*.

	⚠️ **Note:** Proceed with caution! ⚠️
Making these changes can cause server resources to be fully consumed by the indexing process, interrupting visitor traffic.
	

## Restrict Engine Source Attributes

Before experimenting with the indexing process directly, it is worth evaluating your Engine(s) configuration. The more work the indexer has to do, the longer it will take.

For example: adding *Any Meta Key* to index all Custom Fields is a convenient thing to do, but it also means **all** postmeta will be indexed, including the content you have in mind but also the meta implemented/used by all of the code on your site. Very often metadata is used to store data/content that is completely irrelevant to search, so it is worth reviewing.

Further, if there are any Rules you can apply so as to limit the work the indexer is doing, that will be worth considering as well. The less content SearchWP has to process to build its index, the faster the index will build.

## Increasing indexer batch size

SearchWP’s indexer runs by batching Entries to index. This avoids timeout and potential memory issues. Increasing the number of Entries processed per batch can help SearchWP’s indexer to run a bit faster.

There is a hook available to control the batch size used by SearchWP’s indexer: [searchwp\indexer\batch_size](https://searchwp.com/documentation/hooks/searchwp-indexer-batch_size/)

You can experiment with this batch size to have SearchWP process more data per indexer iteration. Note that increasing the batch size too far can result in indexer process failure.

## Disable indexer throttling

SearchWP will monitor server resource usage when possible. There are a few hooks you can use to adjust how SearchWP reacts to the current CPU load during indexing.

Disable load monitoring entirely
You can completely disable load monitoring with the [searchwp\background_process\load_monitoring](https://searchwp.com/documentation/hooks/searchwp-background_process-load_monitoring/) hook.
Adjust the load maximum
When SearchWP monitors CPU load, it checks to see if a maximum CPU load threshold has been breached. The default for this load is 
```
2
```

 but if your server has many cores, this default may be too aggressive. You can adjust the threshold with the [searchwp\background_process\load_maximum](https://searchwp.com/documentation/hooks/searchwp-background_process-load_maximum/) hook.
Adjust the throttle time when CPU load threshold is breached
When SearchWP has detected that CPU load is too high, it will inject a timeout in seconds. If you’d like to customize the duration of this timeout you can use the [searchwp\background_process\load_throttle](https://searchwp.com/documentation/hooks/searchwp-background_process-load_throttle/) hook.

### Proceed with caution!

Please keep in mind that experimenting with these hooks can cause your server to be fully consumed by SearchWP’s indexing process and potentially interrupt site visitor traffic while the indexer is running. Incrementally adjusting return values for these hooks is recommended.

---

## Using Oxygen Visual Site Builder and SearchWP

**Source:** [https://searchwp.com/documentation/knowledge-base/oxygen-visual-site-builder/](https://searchwp.com/documentation/knowledge-base/oxygen-visual-site-builder/)

[Oxygen](https://oxygenbuilder.com/) is an extremely popular and well built WordPress page builder with fans across the world. The plugin is *very* well built, has a polished user interface, and is powering tons of sites.

	![Screenshot of Oxygen website](https://searchwp.com/wp-content/uploads/oxygen-builder.png)
	
One of its *greatest features* is the **ability to customize your search results page** using all of Oxygen’s features!

Even better: *SearchWP automatically integrates with Oxygen’s search results template*!  ?

	**Note:** You should use Oxygen’s *Search Form* component for your search form
	

## Add Search Results Template to Oxygen

To customize your Oxygen-powered search results template, navigate to **Oxygen > Templates** in your WordPress Admin and click Add New Template:

	![Screenshot of Add New Template button](https://searchwp.com/wp-content/uploads/oxygen-searchwp-add-new-template.png)
	
After giving your template a title (e.g. *Search Results*) you can then tell Oxygen that this is your search results template by toggling **Other** and ticking the checkbox for **Search Results**:

	![Screenshot of Oxygen Add New Theme screen](https://searchwp.com/wp-content/uploads/oxygen-searchwp-set-search-results-template.png)
	
Once published, you can customize your Oxygen-powered search results template by clicking the familiar **Edit with Oxygen** button:

	![Screenshot of edit button in Oxygen](https://searchwp.com/wp-content/uploads/oxygen-searchwp-edit-template.png)
	

## Customizing Oxygen Search Results Template

Now that Oxygen knows which template to use for your search results, let’s add the search results to the template. There are two methods to go about this:

1. Using **Easy Posts** (simple)
2. Using a **Repeater** (full customization)

### Oxygen Easy Posts

The most straightforward way to output SearchWP’s search results in Oxygen’s Search Results template is to use the **Easy Posts** component:

	![Screenshot of Easy Posts component in Oxygen](https://searchwp.com/wp-content/uploads/oxygen-searchwp-easy-posts.png)
	
With that component added to the template, be sure to tell Oxygen (using the 
```
Query
```

 segment of the Easy Posts settings) to use the **default** 
```
WP_Query
```

 and Easy Posts will display search results provided by SearchWP:

	![Screenshot of Easy Posts WP_Query setup in Oxygen](https://searchwp.com/wp-content/uploads/oxygen-searchwp-easy-posts-wp-query.png)
	

### Oxygen Repeater

If you would like more control over the way you SearchWP search results are displayed in Oxygen you can use a **Repeater** component instead of Easy Posts.

	![Screenshot of choosing Repeater component in Oxygen](https://searchwp.com/wp-content/uploads/oxygen-searchwp-repeater-component.png)
	
As is the case with Easy Posts, be sure to click through to the **Query** settings for the Repeater and tell Oxygen to use the default 
```
WP_Query
```

:

	![Screenshot of Query settings for Repeater in Oxygen](https://searchwp.com/wp-content/uploads/oxygen-searchwp-repeater-wp_query.png)
	
You can then proceed to customize your Repeater in any way you’d like, using Oxygen’s powerful tooling to fully customize your search results page.

	![Screenshot of customized Repeater in Oxygen](https://searchwp.com/wp-content/uploads/oxygen-searchwp-repeater-custom.png)

---

## Limit results to Post Type (e.g. Posts, Pages)

**Source:** [https://searchwp.com/documentation/knowledge-base/limit-results-post-type/](https://searchwp.com/documentation/knowledge-base/limit-results-post-type/)

By default SearchWP will return results according to the configuration of the Engine used to perform the search. There are times where you’d like to build a form that allows visitors to limit the results to any number of Sources added to the Engine. Once the form is built, we can use a Mod to limit the results returned by the Engine to those specified by the form.

The basic implementation looks like this:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Limit SearchWP results to Posts and Pages. |
|  | add_filter( 'searchwp\query\mods', function( $mods, $query ) { |
|  | $mod = new \SearchWP\Mod(); |
|  |  |
|  | $mod->set_where( [ [ |
|  | 'column'  => 'source', |
|  | 'value'   => [ |
|  | \SearchWP\Utils::get_post_type_source_name( 'post' ), |
|  | \SearchWP\Utils::get_post_type_source_name( 'page' ) |
|  | ], |
|  | 'compare' => 'IN', |
|  | ] ] ); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | }, 10, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/a14a1d7bd9af92876a8fcbddee635619/raw/ea8ba290bfc75630c85430f904282184763dabba/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/a14a1d7bd9af92876a8fcbddee635619#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

**Note:** This snippet illustrates limiting results to Posts and Pages, without taking into consideration the form input.

We can integrate this Mod with form input (assuming the 
```
$_GET
```

 variable has a name of 
```
sources
```

) like so:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Limit SearchWP results to form field value. |
|  | // `sources` is a GET array of post type names. |
|  | add_filter( 'searchwp\query\mods', function( $mods, $query ) { |
|  | if ( empty( $_GET['sources'] ) ) { |
|  | return $mods; |
|  | } |
|  |  |
|  | $mod = new \SearchWP\Mod(); |
|  |  |
|  | $mod->set_where( [ [ |
|  | 'column'  => 'source', |
|  | 'value'   => array_map( function( $source ) { |
|  | return \SearchWP\Utils::get_post_type_source_name( $source ); |
|  | }, $_GET['sources'] ), |
|  | 'compare' => 'IN', |
|  | ] ] ); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | }, 10, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/248c0bd9a39efc7d085278b8c2420475/raw/a741888c02a72cea9d40cd343b40f234ac1fc4f7/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/248c0bd9a39efc7d085278b8c2420475#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

**Note:** This snippet assumes that your form variable has been set up as checkboxes that build an array of post type names, and that the post type names match those that have been added to the Engine in use, e.g.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>"> |
| --- | --- |
|  | <label> |
|  | <span class="screen-reader-text"><?php echo _x( 'Search for:', 'label' ) ?></span> |
|  | <input type="search" class="search-field" |
|  | placeholder="<?php echo esc_attr_x( 'Search …', 'placeholder' ) ?>" |
|  | value="<?php echo get_search_query() ?>" name="s" |
|  | title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" /> |
|  | </label> |
|  | <p> |
|  | <input type="checkbox" class="search-field" id="source-post" |
|  | value="post" name="sources[]" /> |
|  | <label for="source-post">Posts</label> |
|  | </p> |
|  | <p> |
|  | <input type="checkbox" class="search-field" id="source-page" |
|  | value="post" name="sources[]" /> |
|  | <label for="source-page">Pages</label> |
|  | </p> |
|  | <input type="submit" class="search-submit" |
|  | value="<?php echo esc_attr_x( 'Search', 'submit button' ) ?>" /> |
|  | </form> |
      [view raw](https://gist.github.com/searchwpgists/6d8721f3863f364cb2720f6387c2286c/raw/3368a22f7ca08e4d5b09aa8418fa69c430e8595a/tmp.html)
        [tmp.html](https://gist.github.com/searchwpgists/6d8721f3863f364cb2720f6387c2286c#file-tmp-html)
        hosted with ❤ by [GitHub](https://github.com)

(Specifically lines 9-18)

---

## Have one post type show up above any others

**Source:** [https://searchwp.com/documentation/knowledge-base/post-type-first-top/](https://searchwp.com/documentation/knowledge-base/post-type-first-top/)

By default SearchWP returns results sorted by relevance using the weights as defined in your Engine configuration.

There are some cases where you may want a specific post type to show up first even if its relevance weight is not highest.

We can do that by customizing the way SearchWP calculates relevance, and afford an extraordinary ‘bonus weight’ for any Product that’s returned, causing it to bubble up to the top of the results.

This bonus weight will be applied to all Products, so the sorting of Products will still respect the calculated relevance. Any non-Product result will be sorted by its relevance below any Product that has received the bonus weight.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Give Products extraordinary weight boost to ensure Products show up first. |
|  | // @link https://searchwp.com/documentation/knowledge-base/post-type-first-top/ |
|  | add_filter( 'searchwp\query\mods', function( $mods ) { |
|  |  |
|  | $post_type = 'product'; // Post type name. |
|  |  |
|  | $source = \SearchWP\Utils::get_post_type_source_name( $post_type ); |
|  |  |
|  | $mod = new \SearchWP\Mod( $source ); |
|  | $mod->relevance( function( $runtime ) use ( $source ) { |
|  | global $wpdb; |
|  |  |
|  | return $wpdb->prepare( |
|  | "IF( {$runtime->get_foreign_alias()}.source = %s, '999999999999', '0' )", |
|  | $source |
|  | ); |
|  | } ); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | } ); |
      [view raw](https://gist.github.com/searchwpgists/8dac140387df21375481de34c0002fd2/raw/029f6dae9644331173621edec5940a5f2279dcb2/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/8dac140387df21375481de34c0002fd2#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

**Note** the post type 
```
name
```

 on line 7 can be changed to any registered post type name to achieve the same result.

See also: [Group search results by source (post type) and set their order](https://searchwp.com/documentation/knowledge-base/group-results-by-source-post-type/)

---

## Process ACF Fields to Index Expected Data

**Source:** [https://searchwp.com/documentation/knowledge-base/process-acf-fields-to-index-expected-data/](https://searchwp.com/documentation/knowledge-base/process-acf-fields-to-index-expected-data/)

Sometimes after adding [Advanced Custom Fields](https://www.advancedcustomfields.com) fields to your SearchWP Engine configuration, expected results still don’t show up.

This is likely due to the way ACF has stored the data. For example, let’s review how [Relationship fields](https://www.advancedcustomfields.com/resources/relationship/) work. After setting up the field you’re able to pick and choose any number of entries to select and save alongside your post.

![ACF Relationship field](https://searchwp.com/wp-content/uploads/acf-relationship-1030x361.png)

Based on the interface of ACF it makes sense to expect that all of the entry titles of the chosen entries would then become searchable, but that’s not the case!

ACF stores only the post IDs of the chosen entries and *that’s* what SearchWP is indexing. That’s not very useful for your site visitors however.

Thankfully SearchWP makes it extremely easy to change the way this data is indexed, and instead of storing the post IDs as they appear in the ACF data record, we can tell SearchWP to index the Title (or anything else for that matter!)

Here’s what that looks like in practice:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | /** |
|  | * Tell SearchWP to index the Title from a Relationship ACF field instead of the post ID |
|  | */ |
|  | add_filter( 'searchwp\source\post\attributes\meta', function( $meta_value, $args ) { |
|  | $acf_field_name = 'read_next'; // The ACF Relationship field name. |
|  |  |
|  | // If we're not indexing the Read Next field, return the existing meta value. |
|  | // This logic also works for sub-fields of an ACF field as well. |
|  | if ( $acf_field_name !== substr( $args['meta_key'], strlen( $args['meta_key'] ) - strlen( $acf_field_name ) ) ) { |
|  | return $meta_value; |
|  | } |
|  |  |
|  | // We're going to store all of our Titles together as one string for SearchWP to index. |
|  | $content_to_index = ''; |
|  | if ( is_array( $meta_value ) && ! empty( $meta_value ) ) { |
|  | foreach ( $meta_value[0] as $acf_relationship_item ) { |
|  | if ( is_numeric( $acf_relationship_item ) ) { |
|  | // ACF stores only the post ID but we want the Title. |
|  | $content_to_index .= ' ' . get_the_title( absint( $acf_relationship_item ) ); |
|  |  |
|  | // If you want to index anything else, you can append it to $content_to_index. |
|  | } |
|  | } |
|  | } |
|  |  |
|  | // Return the string of content we want to index instead of the data stored by ACF. |
|  | return $content_to_index; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/34df4838f0f41d8288093fba61fd985d/raw/4e0d6abc5c6c496cae34776f69659a62c7ceaa3c/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/34df4838f0f41d8288093fba61fd985d#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

**When your index is rebuilt** using the Rebuild Index button on the Engines tab of the SearchWP settings screen, SearchWP’s indexer will run the above hook when indexing the ACF field and instead of indexing the post IDs as ACF has stored the data, it will replace those IDs with the Title for each entry.

You can adjust the hook to index any data you’d like, not just the Title!

Another example would be customizing what SearchWP indexes for an ACF Select Field. By default, ACF stores/retrieves only the Select field 
```
value
```

 but you may want to allow your visitors to also search by the field 
```
label
```

. We can use the same hook to do just that:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Tell SearchWP to index both value and label from ACF Select field. |
|  | add_filter( 'searchwp\source\post\attributes\meta', function( $meta_value, $args ) { |
|  | $acf_field_name = 'state'; // ACF Select field name. |
|  |  |
|  | if ( $acf_field_name !== substr( $args['meta_key'], strlen( $args['meta_key'] ) - strlen( $acf_field_name ) ) ) { |
|  | return $meta_value; |
|  | } |
|  |  |
|  | if ( ! is_array( $meta_value ) ) { |
|  | $meta_value = [ $meta_value ]; |
|  | } |
|  |  |
|  | $acf_field_object = get_field_object( $acf_field_name, $args['post_id'] ); |
|  |  |
|  | // Append the Select label to the Select value. |
|  | if ( isset( $acf_field_object['choices'] ) ) { |
|  | foreach ( $meta_value as $key => $val ) { |
|  | if ( isset( $acf_field_object['choices'][ $val ] ) ) { |
|  | $meta_value[ $key ] .= ' ' . (string) $acf_field_object['choices'][ $val ]; |
|  | } |
|  | } |
|  | } |
|  |  |
|  | return $meta_value; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/1873a29d38c2d1dbff050c97e457ad8f/raw/066ec96adf1ef84da7d570e84ab077343b7c5b12/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/1873a29d38c2d1dbff050c97e457ad8f#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

---

## Add a Category Select Dropdown Box to Search Form

**Source:** [https://searchwp.com/documentation/knowledge-base/category-select-dropdown/](https://searchwp.com/documentation/knowledge-base/category-select-dropdown/)

One of the most popular ways to integrate search is to allow visitors to control the results pool on their own. This usually comes in the form of allowing them to choose a specific Category from a dropdown (select box) to go along with their search.

This article will explain how you can accomplish **three different approaches** to adding a Category dropdown to your search form.

1. [Build your own search form with a Categories dropdown](#build-your-own-form)
2. [Customize the Shortcodes Extension to include a Categories dropdown](#shortcodes-extension-category-dropdown)
3. [Customize the default search form to include a Categories select dropdown](#default-search-form-categories-dropdown)

## Building your own search form

Building your own search form involves editing your theme files to include the input fields and buttons we want to include. At a most basic level you can add the following to your theme template file where you would like the form to appear:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>"> |
| --- | --- |
|  | <label> |
|  | <span class="screen-reader-text"><?php echo _x( 'Search for:', 'label' ) ?></span> |
|  | <input type="search" class="search-field" placeholder="Search..." value="<?php echo esc_attr( get_search_query() ); ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label' ); ?>" /> |
|  | </label> |
|  | <?php |
|  | // output all of our Categories |
|  | // for more information see http://codex.wordpress.org/Function_Reference/wp_dropdown_categories |
|  | $swp_cat_dropdown_args = array( |
|  | 'show_option_all'  => __( 'Any Category' ), |
|  | 'name'             => 'swp_category_limiter', |
|  | ); |
|  | wp_dropdown_categories( $swp_cat_dropdown_args ); |
|  | ?> |
|  | <input type="submit" class="search-submit" value="Search" /> |
|  | </form> |
      [view raw](https://gist.github.com/searchwpgists/15cf72692a57403f1c6f02571b6fc0ea/raw/372c5b350d90542cc6834dc8f78052ed05ea8c66/sample.phtml)
        [sample.phtml](https://gist.github.com/searchwpgists/15cf72692a57403f1c6f02571b6fc0ea#file-sample-phtml)
        hosted with ❤ by [GitHub](https://github.com)

Based on the default search form provided by WordPress, this form outputs a field for the search query, a select box containing all of your Categories, and a button to trigger the search. Note the arguments passed to 
```
wp_dropdown_categories()
```

 that define the ‘Any Category’ label and set the 
```
name
```

 of the dropdown as 
```
swp_category_limiter
```

.

With your form in place, the last step is to tell SearchWP to take the submitted dropdown value into consideration when performing searches. To do that we’re going to use a [Mod](https://searchwp.com/documentation/classes/searchwp-mod/). We’re going to use the category ID submitted in the dropdown to limit our search results pool to the chosen category.

**Note:** notice that the variable we’re looking for was the one we used to set the 
```
name
```

 of the 
```
select
```

 which was output by 
```
wp_dropdown_categories()
```

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Limit SearchWP results to chosen Category from dropdown. |
|  | // @link https://searchwp.com/documentation/knowledge-base/category-select-dropdown/ |
|  | add_filter( 'searchwp\query\mods', function( $mods, $query ) { |
|  | global $wpdb; |
|  |  |
|  | // Only proceed if a Category was chosen from the dropdown. |
|  | if ( ! isset( $_GET['swp_category_limiter'] ) || empty( intval( $_GET['swp_category_limiter'] ) ) ) { |
|  | return $mods; |
|  | } |
|  |  |
|  | // Optional: only proceed if we're using a specific Engine. |
|  | // if ( 'default' !== $query->get_engine()->get_name() ) { |
|  | //	return $mods; |
|  | // } |
|  |  |
|  | $alias     = 'swpkbcat'; |
|  | $tax_query = new WP_Tax_Query( [ [ |
|  | 'taxonomy' => 'category', |
|  | 'field'    => 'term_id', |
|  | 'terms'    => absint( $_GET['swp_category_limiter'] ), |
|  | ] ] ); |
|  | $tq_sql    = $tax_query->get_sql( $alias, 'ID' ); |
|  | $mod       = new \SearchWP\Mod(); |
|  |  |
|  | // If the JOIN is empty, WP_Tax_Query assumes we have a JOIN with wp_posts, so let's make that. |
|  | if ( ! empty( $tq_sql['join'] ) ) { |
|  | // Queue the assumed wp_posts JOIN using our alias. |
|  | $mod->raw_join_sql( function( $runtime ) use ( $wpdb, $alias ) { |
|  | return "LEFT JOIN {$wpdb->posts} {$alias} ON {$alias}.ID = {$runtime->get_foreign_alias()}.id"; |
|  | } ); |
|  |  |
|  | // Queue the WP_Tax_Query JOIN which already has our alias. |
|  | $mod->raw_join_sql( $tq_sql['join'] ); |
|  |  |
|  | // Queue the WP_Tax_Query WHERE which already has our alias. |
|  | $mod->raw_where_sql( '1=1 ' . $tq_sql['where'] ); |
|  | } else { |
|  | // There's no JOIN here because WP_Tax_Query assumes a JOIN with wp_posts already |
|  | // exists. We need to rebuild the tax_query SQL to use a functioning alias. The Mod |
|  | // will ensure the JOIN, and we can use that Mod's alias to rebuild our tax_query. |
|  | $mod->set_local_table( $wpdb->posts ); |
|  | $mod->on( 'ID', [ 'column' => 'id' ] ); |
|  |  |
|  | $mod->raw_where_sql( function( $runtime ) use ( $tax_query ) { |
|  | $tq_sql = $tax_query->get_sql( $runtime->get_local_table_alias(), 'ID' ); |
|  |  |
|  | return '1=1 ' . $tq_sql['where']; |
|  | } ); |
|  | } |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/4fe45c9eb46a1abd2e6cc3d7074e5747/raw/4e02e918439db13a0175a41344a9f1dd0843c129/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/4fe45c9eb46a1abd2e6cc3d7074e5747#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

This snippet checks to make sure that a non-empty value was chosen from the dropdown. If so, our 
```
Mod
```

 is built and added to the 
```
Query
```

.

## Use SearchWP’s Shortcodes Extension

SearchWP’s [Shortcodes Extension](https://searchwp.com/extensions/shortcodes/) allows you to easily output search forms and control search results pages using WordPress Shortcodes. Here is an example search form that includes a Categories dropdown to choose from:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // UNCOMMENT THIS IF YOU WANT TO USE SHORTCODES IN WIDGETS |
|  | // add_filter( 'widget_text', 'do_shortcode' ); |
|  |  |
|  | // output the categories dropdown |
|  | function my_searchwp_shortcodes_inject_categories() { |
|  | echo '<p class="searchwp-shortcodes-categories">'; |
|  | // for more information see http://codex.wordpress.org/Function_Reference/wp_dropdown_categories |
|  | $swp_cat_dropdown_args = array( |
|  | 'show_option_all'  => __( 'Any Category' ), |
|  | 'name'             => 'swp_category_limiter', |
|  | ); |
|  | wp_dropdown_categories( $swp_cat_dropdown_args ); |
|  | echo '</p>'; |
|  | } |
|  |  |
|  | add_action( 'searchwp_shortcodes_after_input', 'my_searchwp_shortcodes_inject_categories' ); |
      [view raw](https://gist.github.com/searchwpgists/0257877e06a1bd3527b2673aaaa67a90/raw/5d28004c084bf8755f6fe154943ef03a2f0d3911/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/0257877e06a1bd3527b2673aaaa67a90#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

That takes care of our search form, it will automatically include a dropdown of our Categories between the search field and the submit button. Note that in this snippet we have customized the 
```
name
```

 of the dropdown to be 
```
swp_category_limiter
```

, which we will be using next.

So far we have only set up the form to output a dropdown that will let the visitor define a category for results restriction, we still need to grab that information when the form is submitted and tell SearchWP about it.

To do that we’re going to use a [Mod](https://searchwp.com/documentation/classes/searchwp-mod/). We’re going to use the category ID submitted in the dropdown to limit our search results pool to the chosen category.

**Note:** notice that the variable we’re looking for was the one we used to set the 
```
name
```

 of the 
```
select
```

 which was output by 
```
wp_dropdown_categories()
```

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Limit SearchWP results to chosen Category from dropdown. |
|  | // @link https://searchwp.com/documentation/knowledge-base/category-select-dropdown/ |
|  | add_filter( 'searchwp\query\mods', function( $mods, $query ) { |
|  | global $wpdb; |
|  |  |
|  | // Only proceed if a Category was chosen from the dropdown. |
|  | if ( ! isset( $_GET['swp_category_limiter'] ) || empty( intval( $_GET['swp_category_limiter'] ) ) ) { |
|  | return $mods; |
|  | } |
|  |  |
|  | // Optional: only proceed if we're using a specific Engine. |
|  | // if ( 'default' !== $query->get_engine()->get_name() ) { |
|  | //	return $mods; |
|  | // } |
|  |  |
|  | $alias     = 'swpkbcat'; |
|  | $tax_query = new WP_Tax_Query( [ [ |
|  | 'taxonomy' => 'category', |
|  | 'field'    => 'term_id', |
|  | 'terms'    => absint( $_GET['swp_category_limiter'] ), |
|  | ] ] ); |
|  | $tq_sql    = $tax_query->get_sql( $alias, 'ID' ); |
|  | $mod       = new \SearchWP\Mod(); |
|  |  |
|  | // If the JOIN is empty, WP_Tax_Query assumes we have a JOIN with wp_posts, so let's make that. |
|  | if ( ! empty( $tq_sql['join'] ) ) { |
|  | // Queue the assumed wp_posts JOIN using our alias. |
|  | $mod->raw_join_sql( function( $runtime ) use ( $wpdb, $alias ) { |
|  | return "LEFT JOIN {$wpdb->posts} {$alias} ON {$alias}.ID = {$runtime->get_foreign_alias()}.id"; |
|  | } ); |
|  |  |
|  | // Queue the WP_Tax_Query JOIN which already has our alias. |
|  | $mod->raw_join_sql( $tq_sql['join'] ); |
|  |  |
|  | // Queue the WP_Tax_Query WHERE which already has our alias. |
|  | $mod->raw_where_sql( '1=1 ' . $tq_sql['where'] ); |
|  | } else { |
|  | // There's no JOIN here because WP_Tax_Query assumes a JOIN with wp_posts already |
|  | // exists. We need to rebuild the tax_query SQL to use a functioning alias. The Mod |
|  | // will ensure the JOIN, and we can use that Mod's alias to rebuild our tax_query. |
|  | $mod->set_local_table( $wpdb->posts ); |
|  | $mod->on( 'ID', [ 'column' => 'id' ] ); |
|  |  |
|  | $mod->raw_where_sql( function( $runtime ) use ( $tax_query ) { |
|  | $tq_sql = $tax_query->get_sql( $runtime->get_local_table_alias(), 'ID' ); |
|  |  |
|  | return '1=1 ' . $tq_sql['where']; |
|  | } ); |
|  | } |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/ff63730081ec4eda7142d1981c07b976/raw/929ac082ae07973c0e14b58df71ec348f1b0a340/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/ff63730081ec4eda7142d1981c07b976#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

This snippet checks to make sure that a non-empty value was chosen from the dropdown. If so, our 
```
Mod
```

 is built and added to the 
```
Query
```

.

## Modify the default search form to include a Categories dropdown

WordPress allows us to filter the default search form found in many themes. It’s generated by a call to 
```
get_search_form()
```

 which can be completely customized either by including a file named 
```
searchform.php
```

 in your theme directory, or via the 
```
get_search_form
```

 filter. For this example we will be using the 
```
get_search_form
```

 filter. To use this filter you will be working in your theme’s 
```
functions.php
```

 file.

To include a Categories dropdown in your site’s default search form, use the following snippet:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // adds a Categories dropdown to the search form |
|  | function my_searchwp_get_search_form_with_categories_dropdown( $form ) { |
|  | ob_start(); ?> |
|  | <form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>"> |
|  | <label> |
|  | <span class="screen-reader-text">Search For</span> |
|  | <input type="search" class="search-field" placeholder="Search..." value="<?php echo esc_attr( get_search_query() ); ?>" name="s" title="Search for:" /> |
|  | </label> |
|  | <?php |
|  | // for more information see http://codex.wordpress.org/Function_Reference/wp_dropdown_categories |
|  | $swp_cat_dropdown_args = array( |
|  | 'show_option_all'  => __( 'Any Category' ), |
|  | 'name'             => 'swp_category_limiter', |
|  | ); |
|  | wp_dropdown_categories( $swp_cat_dropdown_args ); |
|  | ?> |
|  | <input type="submit" class="search-submit" value="Search" /> |
|  | </form> |
|  | <?php return ob_get_clean(); |
|  | } |
|  |  |
|  | add_filter( 'get_search_form', 'my_searchwp_get_search_form_with_categories_dropdown' ); |
      [view raw](https://gist.github.com/searchwpgists/ca84430db2944a6e1b58bf45d13e5ca3/raw/33ed87f23a591fa1e2a7f1b9eee2bcbfa20941fd/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/ca84430db2944a6e1b58bf45d13e5ca3#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

The form code used here is based on the default search form that ships with WordPress. There is a chance your theme previously customized the form, and you simply want to add the dropdown to it. You can simply modify the form code to match what shipped with your theme and adding lines 
```
11-18
```

 from that code sample where you want your Categories dropdown to appear.

This snippet only modifies the search form, we still need to capture the value from the dropdown and tell SearchWP to limit results to a specific Category.

To do that we’re going to use a [Mod](https://searchwp.com/documentation/classes/searchwp-mod/). We’re going to use the category ID submitted in the dropdown to limit our search results pool to the chosen category.

**Note:** notice that the variable we’re looking for was the one we used to set the 
```
name
```

 of the 
```
select
```

 which was output by 
```
wp_dropdown_categories()
```

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Limit SearchWP results to chosen Category from dropdown. |
|  | // @link https://searchwp.com/documentation/knowledge-base/category-select-dropdown/ |
|  | add_filter( 'searchwp\query\mods', function( $mods, $query ) { |
|  | global $wpdb; |
|  |  |
|  | // Only proceed if a Category was chosen from the dropdown. |
|  | if ( ! isset( $_GET['swp_category_limiter'] ) || empty( intval( $_GET['swp_category_limiter'] ) ) ) { |
|  | return $mods; |
|  | } |
|  |  |
|  | // Optional: only proceed if we're using a specific Engine. |
|  | // if ( 'default' !== $query->get_engine()->get_name() ) { |
|  | //	return $mods; |
|  | // } |
|  |  |
|  | $alias     = 'swpkbcat'; |
|  | $tax_query = new WP_Tax_Query( [ [ |
|  | 'taxonomy' => 'category', |
|  | 'field'    => 'term_id', |
|  | 'terms'    => absint( $_GET['swp_category_limiter'] ), |
|  | ] ] ); |
|  | $tq_sql    = $tax_query->get_sql( $alias, 'ID' ); |
|  | $mod       = new \SearchWP\Mod(); |
|  |  |
|  | // If the JOIN is empty, WP_Tax_Query assumes we have a JOIN with wp_posts, so let's make that. |
|  | if ( ! empty( $tq_sql['join'] ) ) { |
|  | // Queue the assumed wp_posts JOIN using our alias. |
|  | $mod->raw_join_sql( function( $runtime ) use ( $wpdb, $alias ) { |
|  | return "LEFT JOIN {$wpdb->posts} {$alias} ON {$alias}.ID = {$runtime->get_foreign_alias()}.id"; |
|  | } ); |
|  |  |
|  | // Queue the WP_Tax_Query JOIN which already has our alias. |
|  | $mod->raw_join_sql( $tq_sql['join'] ); |
|  |  |
|  | // Queue the WP_Tax_Query WHERE which already has our alias. |
|  | $mod->raw_where_sql( '1=1 ' . $tq_sql['where'] ); |
|  | } else { |
|  | // There's no JOIN here because WP_Tax_Query assumes a JOIN with wp_posts already |
|  | // exists. We need to rebuild the tax_query SQL to use a functioning alias. The Mod |
|  | // will ensure the JOIN, and we can use that Mod's alias to rebuild our tax_query. |
|  | $mod->set_local_table( $wpdb->posts ); |
|  | $mod->on( 'ID', [ 'column' => 'id' ] ); |
|  |  |
|  | $mod->raw_where_sql( function( $runtime ) use ( $tax_query ) { |
|  | $tq_sql = $tax_query->get_sql( $runtime->get_local_table_alias(), 'ID' ); |
|  |  |
|  | return '1=1 ' . $tq_sql['where']; |
|  | } ); |
|  | } |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/74892d7dfcf952288fc5d6690d9b2f56/raw/b877f1a9442f88f8fa3960d486062263f1de2e0a/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/74892d7dfcf952288fc5d6690d9b2f56#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

This snippet checks to make sure that a non-empty value was chosen from the dropdown. If so, our 
```
Mod
```

 is built and added to the 
```
Query
```

.

---

## Compatibility with JetSmartFilters for Elementor

**Source:** [https://searchwp.com/documentation/knowledge-base/compatibility-with-jetsmartfilters-for-elementor/](https://searchwp.com/documentation/knowledge-base/compatibility-with-jetsmartfilters-for-elementor/)

SearchWP works with [Elementor custom Search Archive templates](https://searchwp.com/documentation/knowledge-base/elementor-searchwp/), but [JetSmartFilters](https://crocoblock.com/plugins/jetsmartfilters/) overrides SearchWP’s results by hijacking archive queries.

## Using JetEngine Listing Grid

To integrate SearchWP’s results when using a JetEngine Listing Grid to display results, you can use this hook:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Integrate SearchWP with JetSmartFilters search using |
|  | // JetEngine Listing Grid to display results. |
|  | // @link https://searchwp.com/documentation/knowledge-base/compatibility-with-jetsmartfilters-for-elementor/ |
|  | add_action( 'pre_get_posts', function( $wp_query ) { |
|  | if ( |
|  | ! isset( $wp_query->query['jet_smart_filters' ] ) |
|  | || empty( $wp_query->query['s'] ) |
|  | ) { |
|  | return; |
|  | } |
|  |  |
|  | $swp_query = new \SWP_Query( array( |
|  | 'engine'   => 'default', |
|  | 's'        => $wp_query->query['s'], |
|  | 'fields'   => 'ids', |
|  | 'nopaging' => true |
|  | ) ); |
|  |  |
|  | $results = ! empty( $swp_query->posts ) ? $swp_query->posts : array( 0 ); |
|  |  |
|  | $wp_query->set( 'post__in', $results ); |
|  | $wp_query->set( 'post_type', 'any' ); |
|  | $wp_query->set( 'post_status', 'any' ); |
|  | $wp_query->set( 'orderby', 'post__in' ); |
|  | $wp_query->set( 'order', 'DESC' ); |
|  | $wp_query->set( 's', false ); |
|  | }, 9999 ); |
      [view raw](https://gist.github.com/searchwpgists/eeca325fe69ff293dd86d46b2b5fca2d/raw/37f8b2476a0b79d79a44e696d37ae70006fa9adb/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/eeca325fe69ff293dd86d46b2b5fca2d#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

## Using Elementor Pro Archive

There are two options if you’re running into this problem. If you are not using JetSmartFilters on any archive pages you can navigate to the following WordPress Admin Menu screen: **Elementor > JetSmartFilters Settings** and un-tick this checkbox:

![](https://searchwp.com/wp-content/uploads/jet-smart-filters-1030x536.png)

Once that is un-ticked you can click the Save button and the issue will be resolved.

If, however, you are using JetSmartFilters on other archive pages, you can instead use this snippet to disable JetSmartFilters on search archive pages, allowing you to use Elementor’s Search Archive Template customization, utilizing the Elementor Archive Posts Widget to display the search results.

It’s a a quick fix; you can add this snippet to your theme’s 
```
functions.php
```

 (or a custom plugin you’ve built) and it will allow SearchWP’s results to be displayed:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Prevents JetSmartFilters from overriding SearchWP's results. |
|  | // @link https://searchwp.com/documentation/knowledge-base/compatibility-with-jetsmartfilters-for-elementor/ |
|  | add_action( 'init', function() { |
|  | add_filter( 'elementor/theme/posts_archive/query_posts/query_vars', function( $query ) { |
|  | if ( is_search() && is_main_query() ) { |
|  | remove_all_filters( 'elementor/theme/posts_archive/query_posts/query_vars' ); |
|  | } |
|  |  |
|  | return $query; |
|  | }, -1 ); |
|  | }, -998 ); |
      [view raw](https://gist.github.com/searchwpgists/26cba3f78854918914bea4dce5eca4ee/raw/eb872a2dab1bbc89afbcdc47d05d419def2b41bc/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/26cba3f78854918914bea4dce5eca4ee#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

The above snippet takes advantage of Jet Smart Filter’s priorities of its internal hooks to prevent it from overriding SearchWP’s results on search results archive pages.

---

## Using Elementor for Supplemental Engines

**Source:** [https://searchwp.com/documentation/knowledge-base/using-elementor-for-supplemental-engines/](https://searchwp.com/documentation/knowledge-base/using-elementor-for-supplemental-engines/)

Using Elementor to design and build Supplemental search forms and results requires a few steps, but it can be done!

## Begin by creating a new Page

While logged into the WordPress Admin, begin by creating a new Page using Elementor.

Drag in a **Search Form** Widget:

![](https://searchwp.com/wp-content/uploads/searchwp-elementor-1-1030x671.png)

**IMPORTANT:** Edit the 
```
CSS ID
```

 in the Advanced pane for the Search Form and give it a unique ID. For this article we will use 
```
searchwp-supplemental-form
```

:

![](https://searchwp.com/wp-content/uploads/searchwp-elementor-3-1030x673.png)

Below the **Search Form** Widget, add a **Posts** Widget:

![](https://searchwp.com/wp-content/uploads/searchwp-elementor-2-1030x671.png)

**IMPORTANT:** A Query ID *must be set* so we can flag it in a hook. Expand the *Query* pane for the Posts Widget and enter a unique Query ID. For this article we will use 
```
searchwp-supplemental
```

:

![](https://searchwp.com/wp-content/uploads/searchwp-elementor-4-1030x672.png)

These two Widgets will facilitate searching your supplemental engine.

## Add the necessary hooks

A few hooks are required to make everything work. You can add these to your theme’s 
```
functions.php
```

:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // @link https://searchwp.com/documentation/knowledge-base/using-elementor-for-supplemental-engines/ |
|  |  |
|  | // We need to flag the search form. |
|  | add_action( 'elementor_pro/search_form/after_input', function( $form ) { |
|  | // Check to see if this is the right Search Form. |
|  | $settings = $form->get_data( 'settings' ); |
|  |  |
|  | if ( isset( $settings['_element_id'] ) && 'searchwp-supplemental-form' == $settings['_element_id'] ) { |
|  | ?> |
|  | <input type="hidden" name="searchwp" value="supplemental" /> |
|  | <?php |
|  | } |
|  | } ); |
|  |  |
|  | // Redirect when applicable. |
|  | add_action( 'template_redirect', function() { |
|  | if ( is_search() && ! empty( $_GET['searchwp'] ) && 'supplemental' === $_GET['searchwp'] ) { |
|  | wp_safe_redirect( add_query_arg( array( |
|  | 'swpquery' => get_search_query(), |
|  | ), get_permalink( 18 ) ) ); |
|  | exit(); |
|  | } |
|  | } ); |
|  |  |
|  | // Provide Search results. |
|  | add_filter( 'elementor/query/query_args', function( $query_vars, $widget ) { |
|  | // Check to see if this is the right Widget. |
|  | $settings = $widget->get_data( 'settings' ); |
|  |  |
|  | if ( is_admin() |
|  | || ! isset( $settings['posts_query_id'] ) |
|  | || ( ! empty( $settings['posts_query_id'] ) && 'searchwp-supplemental' !== $settings['posts_query_id'] ) ) { |
|  | return $query_vars; |
|  | } |
|  |  |
|  | // This form field was set up in Elementor. |
|  | $query = isset( $_GET['swpquery'] ) ? sanitize_text_field( $_GET['swpquery'] ) : ''; |
|  |  |
|  | if ( ! empty( $query ) ) { |
|  | // Perform the search. |
|  | $searchwp = new SWP_Query( array( |
|  | 's'              => $query, |
|  | 'engine'         => 'supplemental', // Engine to search. |
|  | 'fields'         => 'ids', |
|  | 'posts_per_page' => -1, |
|  | ) ); |
|  |  |
|  | if ( empty( $searchwp->posts ) ) { |
|  | $searchwp->posts = array( 0 ); |
|  | } |
|  |  |
|  | // Override the query vars with SearchWP results. |
|  | $query_vars['post__in']    = $searchwp->posts; |
|  | $query_vars['post_type']   = 'any';      // Restricted by post__in. |
|  | $query_vars['post_status'] = 'any';      // Restricted by post__in. |
|  | $query_vars['orderby']     = 'post__in'; // Order by post__in. |
|  | $query_vars['order']       = 'DESC';     // Order descending. |
|  | } else { |
|  | // Force no results. |
|  | $query_vars['post__in'] = array( 0 ); |
|  | } |
|  |  |
|  | return $query_vars; |
|  | }, 10, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/3b2ff03b6e5b894374be1aee99ba2516/raw/f167e4eb0b0a382244b1e6fc144ece8824d268c6/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/3b2ff03b6e5b894374be1aee99ba2516#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

The first hook (lines 7-18) append a hidden 
```
input
```

 to the search form.

The second hook (lines 20-28) look for that hidden 
```
input
```

 and if found it will redirect to our Supplemental engine page.

**NOTE:** The ID of the Page in this article is 
```
18
```

 you *must update* the ID (see line 22) to the ID of your newly created Page that we’re working with.

The third and final hook (lines 30-68) are responsible for overriding the content of the Posts Widget that we added with results from SearchWP.

**NOTE:** The supplemental engine name *must* be updated (see line 45) to match the name of the supplemental engine you would like to search.

---

## Using Elementor and SearchWP

**Source:** [https://searchwp.com/documentation/knowledge-base/elementor-searchwp/](https://searchwp.com/documentation/knowledge-base/elementor-searchwp/)

Table of Contents

		- [Setup](#setup)
- [Customize Engine](#engine)
	
[Elementor](https://elementor.com/) is an amazingly popular WordPress site builder used by *millions* of websites.

	![Screenshot of Elementor website](https://searchwp.com/wp-content/uploads/searchwp-elementor-webiste.jpg)
	
Elementor not only allows you to visually structure and build your entire website, it allows you to use all of its tools to customize your search results template as well!

Even better: *SearchWP automatically integrates with Elementors’s search results templates*! ?

	**Note:** You should use Elementor’s *Search Form* Module for search forms
	

## Set up Elementor Search Results Template

Elementor has a Theme Builder built in, allowing you to quickly set up a custom Search Results template.

You can either use the Theme Builder to build your results template, or click **Add New Search Results** on the **Search Results** tab of the Theme Builder page.

This article will focus on setting up a Search Results template in the Theme Builder.

Instructions for the Search Results tab of the Theme Builder page can be found here: [https://elementor.com/help/customize-the-search-results-archive/](https://elementor.com/help/customize-the-search-results-archive/)

	![Screenshot of Elementor Theme Builder button](https://searchwp.com/wp-content/uploads/searchwp-elementor-use-theme-builder.png)
	
You can then choose Search Results:

	![Screenshot of Elementor Template type picker](https://searchwp.com/wp-content/uploads/searchwp-elementor-theme-builder-search-results-pick.png)
	
You can then begin customizing your Search Results Template using all of the familiar Elementor Widgets.

**Important:** Use the **Archive Posts** Widget to display SearchWP’s results.

	![Screenshot of Elementor Archive Posts Widget](https://searchwp.com/wp-content/uploads/searchwp-elementor-archive-posts.png)
	
Once you are done editing you can Publish your template, making sure that it is set to Include Search Results:

	![Screenshot of Elementor Template Conditions](https://searchwp.com/wp-content/uploads/searchwp-elementor-template-conditions.png)
	

### Index post content built with the Elementor Builder

Some post content built using the Elementor Builder may not be directly indexable by SearchWP, depending on how the data is stored by Elementor or its add-ons. To overcome this limitation, the following code should be used. After adding the code to your site, you should rebuild the SearchWP index for the changes to take effect.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Index post content built with the Elementor Builder |
|  | add_filter( 'searchwp\source\post\attributes\content', function( $content, $args ) { |
|  |  |
|  | if ( class_exists('\Elementor\Plugin' ) ) { |
|  | // We don't want CSS code on the post content while indexing. |
|  | add_filter( 'elementor/frontend/builder_content/before_print_css', '__return_false' ); |
|  |  |
|  | $elementor = new \Elementor\Frontend(); |
|  | $content = $elementor->get_builder_content_for_display( $args['post']->ID ); |
|  |  |
|  | // Remove the filter once we have grabbed the content. |
|  | remove_filter( 'elementor/frontend/builder_content/before_print_css', '__return_false' ); |
|  | } |
|  |  |
|  | return $content; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/35a7cdd8df9eeb39787f9170ce46d650/raw/e26dd4772aae167c38e98e333b8dc97632ffda3f/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/35a7cdd8df9eeb39787f9170ce46d650#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

### Customize Engine used

By default SearchWP will use its 
```
default
```

 Engine to perform the search. If you’d like to use a supplemental Engine instead you can use this hook:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Customize SearchWP Engine used. |
|  | add_filter( 'searchwp\native\args', function( $args, $query ) { |
|  | $args['engine'] = 'supplemental'; |
|  |  |
|  | return $args; |
|  | }, 15, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/6afc8ef280a84eccd852e291468abe38/raw/1321fa82f870e127e9b1504d09e1656c1c9c81c6/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/6afc8ef280a84eccd852e291468abe38#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

---

## Display Custom Sources (e.g. Users) in Live Search Results

**Source:** [https://searchwp.com/documentation/knowledge-base/custom-source-results-live-search/](https://searchwp.com/documentation/knowledge-base/custom-source-results-live-search/)

By default Live Search will utilize your Default Engine which is limited to Sources that are based on 
```
WP_Post
```

 objects (e.g. Posts, Pages, Custom Post Types, etc.)

We can use the [searchwp_live_search_get_search_form_engine](https://searchwp.com/extensions/live-search/#searchwp_live_search_get_search_form_engine) hook to use a Supplemental Engine for Live Search results, but in the same way that we need to use a [custom results template for a Supplemental Engine](https://searchwp.com/documentation/search/supplemental-engine/) we need to use a custom results template for Live Ajax Search if we want to display results from a custom Source.

SearchWP Live Ajax Search has a [template structure](https://searchwp.com/extensions/live-search/#customizing-results) we can utilize to output our custom Source results.

In this example we’ll put together a Live Ajax Search results template that takes into consideration 
```
Users
```

 from our 
```
supplemental
```

 Engine:

	![Screenshot of Engine config](https://searchwp.com/wp-content/uploads/searchwp-custom-sources.png)
	
On this example site we have a User that has a username of ‘coffeefan’ with a display name of ‘Jane Doe’:

	![Screenshot of Users](https://searchwp.com/wp-content/uploads/searchwp-users.png)
	
When we search for 
```
coffee
```

 using Live Ajax Search, our custom results template will include that result and another Post about coffee:

	![User result](https://searchwp.com/wp-content/uploads/searchwp-user-result.png)
	
To implement this custom Live Search results template we can create a folder 
```
searchwp-live-ajax-search
```

 in our theme directory, and inside that folder create a file 
```
search-results.php
```

 with this code:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  | // Execute a search using our supplemental SearchWP Engine. |
|  | // @link https://searchwp.com/documentation/knowledge-base/custom-source-results-live-search/ |
|  | $search_query = isset( $_REQUEST['s'] ) ? sanitize_text_field( $_REQUEST['s'] ) : null; |
|  |  |
|  | $search_results = []; |
|  | if ( ! empty( $search_query ) && class_exists( '\\SearchWP\\Query' ) ) { |
|  | $searchwp_query = new \SearchWP\Query( $search_query, [ |
|  | 'engine' => 'supplemental', // The Engine name. |
|  | 'fields' => 'all',          // Load proper native objects of each result. |
|  | ] ); |
|  |  |
|  | $search_results = $searchwp_query->get_results(); |
|  | } |
|  | ?> |
|  |  |
|  | <?php if ( ! empty( $search_query ) && ! empty( $search_results ) ) : ?> |
|  | <?php foreach ( $search_results as $search_result ) : ?> |
|  | <?php |
|  | switch( get_class( $search_result ) ) { |
|  | case 'WP_Post': |
|  | ?> |
|  | <div class="searchwp-live-search-result" role="option" id="" aria-selected="false"> |
|  | <p><a href="<?php echo esc_url( get_permalink( $search_result->ID ) ); ?>"> |
|  | <?php echo get_the_title( $search_result->ID ); ?> &raquo; |
|  | </a></p> |
|  | </div> |
|  | <?php |
|  | break; |
|  |  |
|  | case 'WP_User': |
|  | ?> |
|  | <div class="searchwp-live-search-result" role="option" id="" aria-selected="false"> |
|  | <p><a href="<?php echo get_author_posts_url( $search_result->data->ID ); ?>"> |
|  | <?php echo esc_html( $search_result->data->display_name ); ?> &raquo; |
|  | </a></p> |
|  | </div> |
|  | <?php |
|  | break; |
|  | } |
|  | ?> |
|  | <?php endforeach; ?> |
|  | <?php else : ?> |
|  | <p class="searchwp-live-search-no-results" role="option"> |
|  | <em><?php esc_html_e( 'No results found.', 'swplas' ); ?></em> |
|  | </p> |
|  | <?php endif; ?> |
      [view raw](https://gist.github.com/searchwpgists/59bfe4e0a5f65e3cc4e03497d4e01444/raw/b4c5efa8c6d6bd89f1c04e943428289ac293e9bb/search-results.php)
        [search-results.php](https://gist.github.com/searchwpgists/59bfe4e0a5f65e3cc4e03497d4e01444#file-search-results-php)
        hosted with ❤ by [GitHub](https://github.com)

This results template can be customized in any way you’d like, outputting various attributes of each result type as determined by the 
```
switch
```

 statement.

---

## Integrating Modal Search Form and Term Archive Priority

**Source:** [https://searchwp.com/documentation/knowledge-base/integrating-modal-search-form-and-term-archive-priority/](https://searchwp.com/documentation/knowledge-base/integrating-modal-search-form-and-term-archive-priority/)

SearchWP’s [Modal Search Form Extension](https://searchwp.com/extensions/modal-form/) allows you to quickly and easily integrate a modal search form on your site.

SearchWP’s [Term Archive Priority Extension](https://searchwp.com/extensions/term-archive-priority/) allows you to include taxonomy term archive links in search results when applicable.

By default, Term Archive Priority **is not** compatible with SearchWP’s Default Engine. That’s because the Default Engine is meant to directly interact with WordPress native search functionality when displaying search results. WordPress *does not expect taxonomy term archives in search results*.

Due to that limitation, a [supplemental SearchWP Engine](https://searchwp.com/documentation/search/supplemental-engine/) must be used when setting up Term Archive Priority.

Additionally, a custom Modal Search Form Template must be used as well. The default Modal Search Form template is set up to utilize the Default Engine, but that won’t work due to the reason outlined above.

## Setup

We’ll start by installing and activating SearchWP, SearchWP Modal Search Form, and SearchWP Term Archive Priority.

	![WordPress Plugins page](https://searchwp.com/wp-content/uploads/searchwp-modal-form-term-priority.png)
	
The next step is to create and configure a [Supplemental Engine](https://searchwp.com/documentation/search/supplemental-engine/).

	![Screenshot of SearchWP Engines tab](https://searchwp.com/wp-content/uploads/searchwp-suppemental-engine.png)
	

## Supplemental Engine results template

Next we’ll follow the [documentation on supplemental Engine results setup](https://searchwp.com/documentation/search/supplemental-engine/#results) to finalize the display of our search results.

The documentation for Term Archive Priority has a working supplemental results template we can (and will!) use here: [https://searchwp.com/extensions/term-archive-priority/#gist105037258](https://searchwp.com/extensions/term-archive-priority/#gist105037258)

That results template can be saved as a file called 
```
template-my-searchwp-supplemental.php
```

 in your theme directory. Doing so will make it available as a Page Template.

As per the Supplemental Engine results docs, we’ll create a new Page on our site using the Page Template we’ve just created.

**Note** the 
```
Template
```

 we’re using is the one we just created. Also **note** the results URL, which we’ll be using in the next steps.

## Creating a working Modal Form template

With our Supplemental Engine results template in place and linked up, the next step is to make sure our Modal Form is set up to trigger our Supplemental Engine and therefore Integrate with Term Archive Priority.

In a similar way to setting up the Supplemental Engine results template, we’re going to create a Modal Form template based on the default Modal Form template [as per the documentation](https://searchwp.com/extensions/modal-form/#templates).

This step is *critical* because it will update the existing modal form we’re using to instead redirect searches to the Supplemental Engine results template we just created.

Using the existing default template as a starting point, we’re going to edit the search form markup to submit the modal form to our Supplemental Engine results page instead of triggering a native WordPress search.

We **also** need to update the 
```
name
```

 of our search field to match what the Supplemental Engine results template expects, in this case we’ve named it 
```
searchwp
```

.

Here’s the full Modal Form template. Pay particular attention to:

- **Line 11** which points to our Supplemental Engine results template
- **Line 14** which establishes our input 
```
name
```

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  | /** |
|  | * SearchWP Modal Form Name: Term Archive |
|  | */ |
|  |  |
|  | // @link https://searchwp.com/documentation/knowledge-base/integrating-modal-search-form-and-term-archive-priority/ |
|  | ?> |
|  |  |
|  | <div class="searchwp-modal-form-default"> |
|  | <div class="searchwp-modal-form__overlay" tabindex="-1" data-searchwp-modal-form-close> |
|  | <div class="searchwp-modal-form__container" role="dialog" aria-modal="true"> |
|  | <main class="searchwp-modal-form__content"> |
|  | <form role="search" method="get" class="search-form" action="/search-results/"> |
|  | <label> |
|  | <span class="screen-reader-text">Search for:</span> |
|  | <input name="searchwp" type="search" class="search-field" placeholder="Search..." value=""> |
|  | </label> |
|  | <input type="submit" class="search-submit screen-reader-text" value="Search"> |
|  | </form> |
|  | </main> |
|  | <footer class="searchwp-modal-form__footer"> |
|  | <button class="searchwp-modal-form__close button" aria-label="Close" data-searchwp-modal-form-close></button> |
|  | </footer> |
|  | </div> |
|  | </div> |
|  | </div> |
|  |  |
|  | <style type="text/css"> |
|  | .searchwp-modal-form-default .searchwp-modal-form__overlay { |
|  | background: rgba(45, 45, 45 ,0.6); |
|  | position: fixed; |
|  | top: 0; |
|  | left: 0; |
|  | right: 0; |
|  | bottom: 0; |
|  | display: flex; |
|  | justify-content: center; |
|  | align-items: center; |
|  | z-index: 9999990; |
|  | } |
|  |  |
|  | .searchwp-modal-form-default .searchwp-modal-form__container { |
|  | width: 100%; |
|  | max-width: 500px; |
|  | max-height: 100vh; |
|  | } |
|  |  |
|  | .searchwp-modal-form-default .searchwp-modal-form__content { |
|  | background-color: #fff; |
|  | padding: 2em; |
|  | border-radius: 2px; |
|  | overflow-y: auto; |
|  | box-sizing: border-box; |
|  | position: relative; |
|  | z-index: 9999998; |
|  | } |
|  |  |
|  | .searchwp-modal-form-default .searchwp-modal-form__content .search-form { |
|  | display: flex; |
|  | align-items: center; |
|  | justify-content: center; |
|  | } |
|  |  |
|  | .searchwp-modal-form-default .searchwp-modal-form__content .search-form label { |
|  | flex: 1; |
|  | padding-right: 0.75em; /* This may cause issues depending on your theme styles. */ |
|  |  |
|  | /* Some common resets */ |
|  | float: none; |
|  | margin: 0; |
|  | width: auto; |
|  | } |
|  |  |
|  | .searchwp-modal-form-default .searchwp-modal-form__content .search-form label input { |
|  | display: block; |
|  | width: 100%; |
|  | margin-left: 0.75em; |
|  |  |
|  | /* Some common resets */ |
|  | float: none; |
|  | margin: 0; |
|  | } |
|  |  |
|  | .searchwp-modal-form-default .searchwp-modal-form__footer { |
|  | padding-top: 1em; |
|  | } |
|  |  |
|  | .searchwp-modal-form-default .searchwp-modal-form__close { |
|  | line-height: 1; |
|  | display: block; |
|  | margin: 0 auto; |
|  | background: transparent; |
|  | border: 0; |
|  | padding: 0.4em 0.5em; |
|  | } |
|  |  |
|  | .searchwp-modal-form-default .searchwp-modal-form__close:before { |
|  | content: "\00d7"; |
|  | font-size: 2em; |
|  | } |
|  |  |
|  | @keyframes searchwpModalFadeIn { |
|  | from { opacity: 0; } |
|  | to { opacity: 1; } |
|  | } |
|  |  |
|  | @keyframes searchwpModalFadeOut { |
|  | from { opacity: 1; } |
|  | to { opacity: 0; } |
|  | } |
|  |  |
|  | @keyframes searchwpModalSlideIn { |
|  | from { transform: translateY(15%); } |
|  | to { transform: translateY(0); } |
|  | } |
|  |  |
|  | @keyframes searchwpModalSlideOut { |
|  | from { transform: translateY(0); } |
|  | to { transform: translateY(-10%); } |
|  | } |
|  |  |
|  | .searchwp-modal-form { |
|  | display: none; |
|  | } |
|  |  |
|  | .searchwp-modal-form.is-open { |
|  | display: block; |
|  | } |
|  |  |
|  | .searchwp-modal-form[aria-hidden="false"] .searchwp-modal-form-default .searchwp-modal-form__overlay { |
|  | animation: searchwpModalFadeIn .3s cubic-bezier(0.0, 0.0, 0.2, 1); |
|  | } |
|  |  |
|  | .searchwp-modal-form[aria-hidden="false"] .searchwp-modal-form-default .searchwp-modal-form__container { |
|  | animation: searchwpModalSlideIn .3s cubic-bezier(0, 0, .2, 1); |
|  | } |
|  |  |
|  | .searchwp-modal-form[aria-hidden="true"] .searchwp-modal-form-default .searchwp-modal-form__overlay { |
|  | animation: searchwpModalFadeOut .3s cubic-bezier(0.0, 0.0, 0.2, 1); |
|  | } |
|  |  |
|  | .searchwp-modal-form[aria-hidden="true"] .searchwp-modal-form-default .searchwp-modal-form__container { |
|  | animation: searchwpModalSlideOut .3s cubic-bezier(0, 0, .2, 1); |
|  | } |
|  |  |
|  | .searchwp-modal-form-default .searchwp-modal-form__container, |
|  | .searchwp-modal-form-default .searchwp-modal-form__overlay { |
|  | will-change: transform; |
|  | } |
|  | </style> |
      [view raw](https://gist.github.com/searchwpgists/b6b231ed013a08111cad3d5b20d31355/raw/76174efcbf6608ab3053d383bc9efeec3dbab920/term-archive.php)
        [term-archive.php](https://gist.github.com/searchwpgists/b6b231ed013a08111cad3d5b20d31355#file-term-archive-php)
        hosted with ❤ by [GitHub](https://github.com)

The rest of the template matches the default template and can be customized in any way you’d like.

## Setting up the Modal Form trigger

In this setup we’re going to use a Menu Item to trigger our Modal Search Form, making sure to use the Supplemental Engine we just created:

	![Modal Form setup](https://searchwp.com/wp-content/uploads/searchwp-term-archive-modal.png)
	
We now have our Modal trigger in the Menu on our site:

	![Animation performing the search](https://searchwp.com/wp-content/uploads/searchwp-modal-term-archive.gif)
	
With our Modal Form template redirecting to our Supplemental Results Page, which in turn has been customized to integrate Term Archive Priority results, we now have a workflow that allows a Modal Form to integrate with Term Archive Priority! ?

---

## Force exact matches for multiple words

**Source:** [https://searchwp.com/documentation/knowledge-base/force-exact-matches-for-multiple-words/](https://searchwp.com/documentation/knowledge-base/force-exact-matches-for-multiple-words/)

SearchWP’s support for quoted/phrase searching produces results that match the submitted multi-word search *exactly*. By default, this requires that the visitor wrap the exact match string in double quotes as is the common practice in other search engines.

If you would like to *force* exact match logic to happen for all multi-word searches, we can use the following hook:

**Note:** you must tick the checkbox to enable quoted search support on the Advanced tab of the SearchWP settings screen.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Force multiple word searches to use quoted search logic if quotes are not added. |
|  | // NOTE: Quoted search must be enabled (checkbox on the Advanced tab) |
|  | add_filter( 'searchwp\query\search_string', function( $search_string, $query ) { |
|  | // If there are already quotes, bail out. |
|  | if ( false !== strpos( $search_string, '"' ) ) { |
|  | return $search_string; |
|  | } |
|  |  |
|  | // If there's only one word, bail out. |
|  | if ( false === strpos( $search_string, ' ') ) { |
|  | return $search_string; |
|  | } |
|  |  |
|  | return '"' . $search_string . '"'; |
|  | }, 30, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/087d5d3d5b47b2e38c8062f80d7ef04f/raw/d195f0bd1ffdb72b91117dffd5b476227b1902b8/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/087d5d3d5b47b2e38c8062f80d7ef04f#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

With this hook in place all multiple word searches will get wrapped in double quotes, producing results as though the original search was wrapped in double quotes.

---

## Customize Stopwords Per Engine

**Source:** [https://searchwp.com/documentation/knowledge-base/customize-stopwords-per-engine/](https://searchwp.com/documentation/knowledge-base/customize-stopwords-per-engine/)

SearchWP uses [stopwords](https://searchwp.com/documentation/setup/settings/#stopwords) (common words that are not helpful when searching, but can bloat the index) to omit words from its index and therefore ignoring those terms when searching as well. Removing stopwords increases relevance and improves performance.

By default SearchWP’s stopwords are global, applying to all Engines. If you have a situation where you would like to customize stopwords per Engine we can take advantage of [SearchWP’s hooks](https://searchwp.com/documentation/hooks/) to do just that.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | /** |
|  | * Customize SearchWP stopwords per Engine. |
|  | */ |
|  |  |
|  | // Optional: remove all Stopwords so you can add only unique Stopwords per Engine. |
|  | add_filter( 'searchwp\stopwords', '__return_empty_array' ); |
|  |  |
|  | // Add unique stopword(s) for a single SearchWP Engine. |
|  | add_filter( 'searchwp\query\search_string', function( $search_string, $query ) { |
|  | // Remove "apple" and "orange" for my_engine searches. |
|  | if ( 'my_engine' === $query->get_engine() ) { |
|  | $search_string = str_replace( [ 'apple', 'orange' ], '', $search_string ); |
|  | } |
|  |  |
|  | return $search_string; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/f4dec5c63e1ae9e0c102e29a01d25fa5/raw/6a0a494651a8049cd977cbfeab7f6c5607e505ec/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/f4dec5c63e1ae9e0c102e29a01d25fa5#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

In this snippet we are first using the 
```
searchwp\stopwords
```

 hook to remove all of SearchWP’s stopwords. We need to work from a blank slate, indexing all content. If we were to store stopwords on the Settings tab of the SearchWP settings screen, those stopwords would be ignored before we had a chance to customize them per Engine.

The second hook 
```
searchwp\query\search_string
```

 applies the logic of stopwords on every search submitted to SearchWP.

In the above snippet we are removing 
```
apple
```

 and 
```
orange
```

 from the search string *only* if the Engine in use is 
```
my_engine
```

.

```
apple
```

 and 
```
orange
```

 *are not* removed if any other Engine is used.

This snippet can be customized for any Engine(s) and any stopwords.

---

## Add WooCommerce Product Variations to Products

**Source:** [https://searchwp.com/documentation/knowledge-base/add-woocommerce-product-variations-to-products/](https://searchwp.com/documentation/knowledge-base/add-woocommerce-product-variations-to-products/)

Table of Contents

		- [Overview](#overview)
- [Automatic Product Variation Permalinks](#permalinks)
	
WooCommerce treats Product Variations differently than Products; they’re separate post types. Products are public and can be utilized in the way we’re used to working with post types, but Product Variations are different in that they’re set up as children of Products, but a different post type.

It’s a neat way to set things up, but we need to use a small bit of custom code to make Product Variations searchable.

The setup will involve teaching SearchWP about Product Variations, and having SearchWP index Product Variations as it is indexing the parent Products themselves. We’ll store the Product Variation data as ‘extra’ metadata for the Products, so when you search for Product Variation data the proper Product will be returned.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Add WooCommerce Product Variation data to parent Products in SearchWP. |
|  | add_filter( 'searchwp\entry\data', function( $data, \SearchWP\Entry $entry ) { |
|  | // If this is not a Product, there's nothing to do. |
|  | if ( 'product' !== get_post_type( $entry->get_id() ) ) { |
|  | return $data; |
|  | } |
|  |  |
|  | $my_extra_meta_key = 'searchwp_product_variations'; |
|  |  |
|  | // Retrieve all Variations. |
|  | $product_variations = get_posts( [ |
|  | 'post_type'      => 'product_variation', |
|  | 'posts_per_page' => -1, |
|  | 'post_parent'    => $entry->get_id(), |
|  | ] ); |
|  |  |
|  | if ( empty( $product_variations ) ) { |
|  | return $data; |
|  | } |
|  |  |
|  | // Customize the data indexed for each Variation. |
|  | $data['meta'][ $my_extra_meta_key ] = array_filter( $product_variations, function( $variation ) { |
|  | $variation->searchwp_variation_data = [ |
|  | 'title'   => get_the_title( $variation->ID ), |
|  | 'content' => $variation->post_content, |
|  | 'sku'     => get_post_meta( $variation->ID, '_sku', true ), |
|  | ]; |
|  |  |
|  | return $variation; |
|  | } ); |
|  |  |
|  | return $data; |
|  | }, 20, 2 ); |
|  |  |
|  | // Add our Extra Meta entry to SearchWP's UI. |
|  | add_filter( 'searchwp\source\attribute\options\special', function( $keys, $args ) { |
|  | if ( $args['attribute'] !== 'meta' ) { |
|  | return $keys; |
|  | } |
|  |  |
|  | // This key is the same as the one used in the searchwp\entry\data hook above, they must be the same. |
|  | $my_extra_meta_key = 'searchwp_product_variations'; |
|  | $option = new \SearchWP\Option( $my_extra_meta_key, 'Product Variations' ); |
|  |  |
|  | // If there's already a match, remove it because we want ours there. |
|  | $keys = array_filter( $keys, function( $option ) use ( $my_extra_meta_key ) { |
|  | return $my_extra_meta_key !== $option->get_value(); |
|  | } ); |
|  |  |
|  | // Add "Product Variations" Option |
|  | $keys[] = $option; |
|  |  |
|  | return $keys; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/90aba5fd28397205a06dede6bc5c54d1/raw/4916dd9209c6d133adb74323326b3da7452966b5/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/90aba5fd28397205a06dede6bc5c54d1#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

Note that the snippet indexes the following for each Product Variation:

- Title
- Content
- SKU

You can add/remove/customize this list of attributes to index any content you would like for each Product Variation, it depends on what you would like to make searchable.

With that snippet in place we can add 
```
Product Variations
```

 to the Custom Fields of our Engine:

	![SearchWP WooCommerce product variations](https://searchwp.com/wp-content/uploads/searchwp-woocommerce-product-variations.png)
	
Once you save your Engines, SearchWP will let you know the index needs to be rebuilt because of this change. The index can be rebuilt using the Rebuild Index button on the Engines tab of the SearchWP settings screen.

As the index rebuilds, SearchWP will pull in all Product Variations as it indexes Products, making all of that Product Variation data searchable and returning the parent Product when a Product Variation match is found.

## Automatic Product Variation Permalinks

We can take things a step further if you’d like. Given the setup above, searching for Product Variation data will return the Product itself as a result. With that result will be a permalink to the parent Product, which in many cases is desirable.

There are times when site visitors are very knowledgeable about your Products and may be searching for specific Product Variation data you’ve taught SearchWP to index.

For example: if you are selling TV’s and you have a parent Product “OLED TV” with a number of Product Variations for each screen size e.g. 
```
60"
```

. If a customer searches for 
```
60" OLED TV
```

 the result would be the OLED TV parent Product.

**Wouldn’t it be great to automatically link to the 60" Product Variation** when that happens? It would, and we can do exactly that!

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // @link https://searchwp.com/documentation/knowledge-base/add-woocommerce-product-variations-to-products/ |
|  |  |
|  | // When using SearchWP it's necessary to disable WooCommerce's insistance on |
|  | // automatically redirecting to a single search result without showing the |
|  | // search results page, when that happens this hook doesn't run! |
|  | // Willing to bet this can be edited to accommodate, tips are welcome! |
|  | add_filter( 'woocommerce_redirect_single_search_result', '__return_false' ); |
|  |  |
|  | add_filter( 'post_type_link', function( $permalink, $post ) { |
|  | if ( ! is_search() || 'product' !== get_post_type( $post ) ) { |
|  | return $permalink; |
|  | } |
|  |  |
|  | $search_query = \SearchWP\Utils::get_string_from( get_search_query() ); |
|  |  |
|  | // If this is a search for a Variation SKU we can bail out early. |
|  | $variation_from_sku = get_posts( [ |
|  | 'post_type'      => 'product_variation', |
|  | 'posts_per_page' => 1, |
|  | 'fields'         => 'ids', |
|  | 'meta_query'     => [ [ |
|  | 'key'     => '_sku', |
|  | 'value'   => $search_query, |
|  | ], ] |
|  | ] ); |
|  |  |
|  | // Make sure (if there is one) the Variation is for the parent Product. |
|  | if ( ! empty( $variation_from_sku ) ) { |
|  | // This is a Variation SKU. |
|  | $variation_id  = absint( $variation_from_sku[0] ); |
|  | $variation_obj = new WC_Product_Variation( $variation_id ); |
|  | $attributes    = $variation_obj->get_variation_attributes(); |
|  |  |
|  | if ( empty( $attributes ) ) { |
|  | return $permalink; |
|  | } |
|  |  |
|  | return add_query_arg( $attributes, $permalink ); |
|  | } |
|  |  |
|  | // Determine if this Product has any Variations. |
|  | $product_variations = get_posts( [ |
|  | 'post_type'       => 'product_variation', |
|  | 'posts_per_page'  => -1, |
|  | 'fields'          => 'ids', |
|  | 'post_parent'     => $post->ID, |
|  | ] ); |
|  |  |
|  | if ( empty( $product_variations ) || ! class_exists( 'WC_Product_Variation' ) ) { |
|  | return $permalink; |
|  | } |
|  |  |
|  | // Check to see if any search terms match any Variation Attributes. |
|  | foreach ( $product_variations as $variation_id ) { |
|  | $variation_obj = new \WC_Product_Variation( $variation_id ); |
|  | $attributes = $variation_obj->get_variation_attributes(); |
|  |  |
|  | if ( empty( $attributes ) ) { |
|  | continue; |
|  | } |
|  |  |
|  | $search_query = \SearchWP\Utils::clean_string( $search_query ); |
|  |  |
|  | foreach ( $attributes as $attribute_tax => $attribute_value ) { |
|  | foreach ( explode( ' ', $attribute_value ) as $value ) { |
|  | $value = \SearchWP\Utils::clean_string( \SearchWP\Utils::get_string_from( $value ) ); |
|  | if ( false !== strpos( $search_query, $value ) ) { |
|  | $permalink = add_query_arg( [ $attribute_tax => urlencode( $attribute_value ) ], $permalink ); |
|  |  |
|  | continue; |
|  | } |
|  | } |
|  | } |
|  | } |
|  |  |
|  | return $permalink; |
|  | }, 99, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/963e64c93a646d7f0b158d9fde2f3401/raw/3015c466ccec5ebdc9f8b4ec21d73c7f9135f5ab/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/963e64c93a646d7f0b158d9fde2f3401#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

With this snippet in place, we’ll check for any Product Variation Attributes that match the search string, and when we get a hit we’ll adjust the permalink to consider that Variation Attribute automatically.

---

## Search WooCommerce Downloadable (PDF) Product Document Content

**Source:** [https://searchwp.com/documentation/knowledge-base/search-woocommerce-downloadable-pdf-product-document-content/](https://searchwp.com/documentation/knowledge-base/search-woocommerce-downloadable-pdf-product-document-content/)

If you’re selling document downloads in your WooCommerce store, it’s possible to have SearchWP index the content of those documents to make it searchable for your customers!

**Note:** this (like all document processing in SearchWP) requires that the WooCommerce Downloadable Product Downloads have been uploaded to the local WordPress Media library.

## Index WooCommerce Document Content

We can take advantage of SearchWP’s ability to parse and make searchable the content from readable documents stored in the WordPress Media library. This can be paired with SearchWP’s powerful ability to index ‘extra’ metadata in its own index, without affecting the data stored in WordPress’ post or postmeta table.

The benefit to this approach will be to index the *content* of the WooCommerce Download(s) without exposing the entire asset.

For a more generalized example of indexing ‘extra’ data have a look at this KB article: [Adding extra data to indexed entries](https://searchwp.com/documentation/knowledge-base/adding-extra-data-to-indexed-entries/)

If you’d like to make your WooCommerce Downloadable content searchable, you can use this hook:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Tell SearchWP to parse WooCommerce Downloadable Product downloads for document content. |
|  | // The content will be extracted from downloadable documents where possible and stored |
|  | // in SearchWP's index as a Custom Field with a label of "SearchWP WooCommerce Download Content" |
|  | add_filter( 'searchwp\entry\data', function( $data, \SearchWP\Entry $entry ) { |
|  | if ( 'post.product' !== $entry->get_source()->get_name() || ! class_exists( 'WC_Product' ) ) { |
|  | return $data; |
|  | } |
|  |  |
|  | $product   = new \WC_Product( $entry->get_id() ); |
|  | $downloads = $product->get_downloads(); |
|  |  |
|  | if ( empty( $downloads ) ) { |
|  | return $data; |
|  | } |
|  |  |
|  | // WooCommerce only stores a hashed ID, the filename, and the URL to the file |
|  | // but we need to retrieve the Media library ID for each downloadble file. |
|  | $download_content = []; |
|  | $upload_dir = wp_upload_dir(); |
|  | foreach ( $downloads as $key => $download ) { |
|  | $relative_file_location = str_replace( trailingslashit( $upload_dir['baseurl'] ), '', $download['data']['file'] ); |
|  |  |
|  | // We can use the relative file location to retrieve the post ID we need to parse the PDFs. |
|  | $file_id = get_posts( [ |
|  | 'post_type'   => 'attachment', |
|  | 'post_status' => 'inherit', |
|  | 'fields'      => 'ids', |
|  | 'meta_query'  => [ [ |
|  | 'key'   => '_wp_attached_file', |
|  | 'value' => $relative_file_location, |
|  | ], ], |
|  | ] ); |
|  |  |
|  | if ( ! empty( $file_id ) ) { |
|  | $download_content[] = \SearchWP\Document::get_content( get_post( $file_id[0] ) ); |
|  | } |
|  | } |
|  |  |
|  | $data['meta']['swp_wc_doc_content'] = \SearchWP\Utils::tokenize( $download_content ); |
|  |  |
|  | return $data; |
|  | }, 20, 2 ); |
|  |  |
|  | // Add "SearchWP WooCommerce Download Content" as available option. |
|  | add_filter( 'searchwp\source\attribute\options', function( $keys, $args ) { |
|  | if ( $args['attribute'] !== 'meta' ) { |
|  | return $keys; |
|  | } |
|  |  |
|  | $content_key = 'swp_wc_doc_content'; |
|  |  |
|  | if ( ! in_array( |
|  | $content_key, |
|  | array_map( function( $option ) { return $option->get_value(); }, $keys ) |
|  | ) ) { |
|  | $keys[] = new \SearchWP\Option( $content_key, 'SearchWP WooCommerce Download Content' ); |
|  | } |
|  |  |
|  | return $keys; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/48cdaab0f3d3734ac0a073beb5ae3b75/raw/7fdf2d3f7c7e4565dd7f10d54bb61c2e0d11b083/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/48cdaab0f3d3734ac0a073beb5ae3b75#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

This hook will tap into SearchWP’s indexing process and when it finds a Product with Downloads it will check those Downloads for document content and when found index that content alongside the Product itself.

This will allow you to search for the Download content and have it return the Product, not the Download, which in turn will allow your customer to make the purchase.

The last step here is to make sure you’ve added this ‘extra’ Custom Field to the Products in your SearchWP Engine, which can be done like so:

	![SearchWP WooCommerce download document content](https://searchwp.com/wp-content/uploads/searchwp-woocommerce-download-document-content.png)
	
**Note:**When using this approach you can (and likely should) *disable* Media from your Engine, since the Download content is being added to the Product.

With the Document content added to Products in your Engine you can click the Save Engines button, rebuild your index, and you’ll be all set!

---

## Group Live Search Results by Category

**Source:** [https://searchwp.com/documentation/knowledge-base/group-live-search-results-by-category/](https://searchwp.com/documentation/knowledge-base/group-live-search-results-by-category/)

[Customizing the results display](https://searchwp.com/extensions/live-search/#customizing-results) for SearchWP’s [Live Search Extension](https://searchwp.com/extensions/live-search/) has been designed to facilitate customization in any way you’d like. If, for example, you’d like to group your results by Post Category, you can use this as a starting point in your **custom** results template:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php if ( ! have_posts() ) : ?> |
| --- | --- |
|  | <p>No results</p> |
|  | <?php return; endif;?> |
|  |  |
|  | <?php |
|  | global $post; |
|  | $grouped_results = []; |
|  | $no_term_results = []; |
|  |  |
|  | while ( have_posts() ) { |
|  | the_post(); |
|  |  |
|  | $categories = get_the_terms( $post, 'category' ); |
|  |  |
|  | // Group by the first Category returned. |
|  | if ( ! empty( $categories ) && isset( $categories[0] ) ) { |
|  | // If this group doesn't exist yet, create it. |
|  | if ( ! array_key_exists( $categories[0]->term_id, $grouped_results ) ) { |
|  | $grouped_results[ $categories[0]->term_id ] = [ |
|  | 'term'    => $categories[0], |
|  | 'results' => [], |
|  | ]; |
|  | } |
|  |  |
|  | // Add this result to the group. |
|  | $grouped_results[ $categories[0]->term_id ]['results'][ $post->ID ] = get_post( $post->ID ); |
|  | } else { |
|  | $no_term_results[ $post->ID ] = get_post( $post->ID ); |
|  | } |
|  | } |
|  |  |
|  | // Output grouped results. |
|  | if ( ! empty( $grouped_results ) ) { |
|  | foreach ( $grouped_results as $grouped_result ) { |
|  | echo '<h3>' . esc_html( $grouped_result['term']->name ) . '</h3>'; |
|  | foreach ( $grouped_result['results'] as $result ) { |
|  | ?> |
|  | <div class="searchwp-live-search-result" role="option" id="" aria-selected="false"> |
|  | <p> |
|  | <a href="<?php echo esc_url( get_permalink( $result->ID ) ); ?>"> |
|  | <?php echo wp_kses_post( get_the_title( $result->ID ) ); ?> &raquo; |
|  | </a> |
|  | </p> |
|  | </div> |
|  | <?php |
|  | } |
|  | } |
|  | } |
|  |  |
|  | // Output ungrouped results. |
|  | if ( ! empty( $no_term_results ) ) { |
|  | foreach ( $no_term_results as $result ) { |
|  | ?> |
|  | <div class="searchwp-live-search-result" role="option" id="" aria-selected="false"> |
|  | <p> |
|  | <a href="<?php echo esc_url( get_permalink( $result->ID ) ); ?>"> |
|  | <?php echo wp_kses_post( get_the_title( $result->ID ) ); ?> &raquo; |
|  | </a> |
|  | </p> |
|  | </div> |
|  | <?php |
|  | } |
|  | } |
      [view raw](https://gist.github.com/searchwpgists/d17c723b9663cddb86b99cde387dbc81/raw/ec0f104bc66f81ffed3e637e8315613b0b6624c9/search-results.php)
        [search-results.php](https://gist.github.com/searchwpgists/d17c723b9663cddb86b99cde387dbc81#file-search-results-php)
        hosted with ❤ by [GitHub](https://github.com)

---

## How to Integrate with Content Imports/Migrations

**Source:** [https://searchwp.com/documentation/knowledge-base/content-imports-migrations/](https://searchwp.com/documentation/knowledge-base/content-imports-migrations/)

SearchWP reacts to certain operations that happen within WordPress. When content is edited, WordPress tells SearchWP about the edit, and SearchWP in turn re-indexes that edited content. This keeps your index up to date over time automatically, without you having to manage anything.

By nature, content import routines (e.g. with [WP All Import](http://www.wpallimport.com/)) make many (sometimes concurrent) edits in a very short timeframe. This can have adverse effects when it comes to SearchWP reacting to all of the signals being sent by WordPress that many edits are taking place.

If the import is big enough and runs fast enough, SearchWP’s indexer can become flooded with edit notifications and eventually the index will be out of sync. This is undesirable as SearchWP can begin cycling through its own index repeatedly or even worse returning inaccurate search results.

## Properly handling content imports

	**NOTE:** As of version 4.1.16 of SearchWP WP All Import processes are handled *automatically*!

[Read more](https://searchwp.com/documentation/hooks/searchwp_integration_wp-all-import/) about SearchWP’s automatic integration,

or continue reading to implement your own
	
It is recommended to at the very least disable the SearchWP indexer when running an import script. This can be done by modifying your own import script, or utilizing the hooks available in your chosen plugin. The pseudocode for what we’ll do is as follows:

```
Pause SearchWP indexer
Tell SearchWP to mark each edited entry for re-indexing
Run import in full
Enable SearchWP indexer
Trigger build of SearchWP index
```

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Disable SearchWP's automatic integration with WP All Import. |
|  | add_filter( 'searchwp\integration\wp-all-import', '__return_false' ); |
|  |  |
|  | add_action( 'pmxi_before_xml_import', function( $import_id ) { |
|  | \SearchWP::$indexer->pause(); |
|  | }, 10 ); |
|  |  |
|  | add_action( 'pmxi_saved_post', function( $post_id ) { |
|  | $source_name = \SearchWP\Utils::get_post_type_source_name( get_post_type( $post_id ) ); |
|  | $source      = \SearchWP::$index->get_source_by_name( $source_name ); |
|  |  |
|  | // Mark this to be dropped after the import has finished. |
|  | \SearchWP::$index->drop( $source, $post_id ); |
|  | }, 10 ); |
|  |  |
|  | add_action( 'pmxi_after_xml_import', function( $import_id ) { |
|  | \SearchWP::$indexer->unpause(); |
|  |  |
|  | // Process all entries marked to be dropped. |
|  | \SearchWP::$index->unpause(); |
|  | \SearchWP::$index->trigger(); |
|  | }, 10 ); |
      [view raw](https://gist.github.com/searchwpgists/1354653ed6f9181dce9da96e23da8d35/raw/f2de584bb10565f3f8257febd6389c0a78b6e7ff/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/1354653ed6f9181dce9da96e23da8d35#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

With this snippet in place SearchWP will better react to your content imports, with an accurate index having been built after the import script has completed. This will also allow for your import to run a bit faster since SearchWP will not be competing for resources as the import is processing.

---

## Quoted (Phrase, Sentence) Search Support

**Source:** [https://searchwp.com/documentation/knowledge-base/quoted-phrase-sentence-search-support/](https://searchwp.com/documentation/knowledge-base/quoted-phrase-sentence-search-support/)

SearchWP supports quoted searches, sometimes called phrase or sentence-based searches. This allows your visitors to add quotes to their searches so as to force exact matches for that quoted string.

For example searching for 
```
coffee mugs
```

 vs. 
```
"coffee mugs"
```

To enable this functionality, tick the appropriate checkbox on the General Settings tab of the SearchWP Settings page:

	![SearchWP's quoted searches setting](https://searchwp.com/wp-content/uploads/searchwp-settings-quoted-searches.png)
	
When enabled, SearchWP will check search queries for terms wrapped in quotes, and attempt to find *exact matches* for the quoted string. Referencing again the earlier example of 
```
coffee mugs
```

 vs. 
```
"coffee mugs"
```

:

**coffee mugs**
In following [how SearchWP works](/documentation/search/#how) SearchWP will first perform a search using 
```
AND
```

 logic, ensuring that all search terms are present. If no results are found in that pass, SearchWP will automatically revert to 
```
OR
```

 logic. This behavior can be customized using [hooks](/documentation/hooks/).
**"coffee mugs"**
Because the search string is wrapped in quotes, SearchWP will attempt to find results that have an exact match of 
```
coffee mugs
```

 (note [caveats](#caveats)) when performing a search. If no results are found that have exact matches, the quotes will be removed and search performed again following that pattern.

## Notes

By nature, quoted searches restrict/refine search results. This can result in no results being returned. With SearchWP, if no results are found with a quoted search, the algorithm will fall back to performing the search without quotes. A notice is automatically output to indicate the change.

	⚠️ Style (CSS) customization is likely required ⚠️
	
![Screenshot of SearchWP's quoted search fallback message](https://searchwp.com/wp-content/uploads/searchwp-quoted-search-fallback-1030x692.png)

The above screenshot outlines the automatic output in [Twenty Nineteen](https://wordpress.org/themes/twentynineteen/), a default WordPress theme. The following CSS can be added to improve its appearance:

**Note:** (You can add Custom CSS to your site by navigating to Appearance > Customize > Additional CSS in your WordPress Dashboard)

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | .searchwp-revised-search-notice { |
| --- | --- |
|  | margin: 0 calc(10% + 60px) 1em; |
|  | padding: 0.6em; |
|  | background: #f7f7f7; |
|  | border: 1px solid #e7e7e7; |
|  | border-radius: 2px; |
|  | } |
|  |  |
|  | .searchwp-suggested-revision-query { |
|  | font-style: italic; |
|  | font-weight: bold; |
|  | } |
      [view raw](https://gist.github.com/searchwpgists/21969d41fccc1f0e762040aff46378cf/raw/174db230e2fa75058d6f2647e3efc879f0e7e6b0/style.css)
        [style.css](https://gist.github.com/searchwpgists/21969d41fccc1f0e762040aff46378cf#file-style-css)
        hosted with ❤ by [GitHub](https://github.com)

Which results in a notification that better matches the site design:

![Screenshot of SearchWP's search correction when styled](https://searchwp.com/wp-content/uploads/searchwp-quoted-search-fallback-styled-1030x692.png)

## Caveats

**There are some limitations to consider** when evaluating SearchWP’s exact match implementation. SearchWP is a token-based search system so by nature SearchWP’s index *does not contain full details* about exact matches throughout its search index. SearchWP’s indexer also allows for content customization during indexing, which can further obscure exact matches in some cases.

As a result, **SearchWP is not able to find exact matches** in the following cases:

- [Shortcode-generated content](/search-shortcode-content/)
- [Extra metadata](/documentation/knowledge-base/adding-extra-data-to-indexed-entries/) (although there is [a workaround](#extra-metadata-workaround))
- Content modified during indexing

Because of these limitations, SearchWP’s quoted search support is an *opt-in* feature, requiring you to enable the functionality either by ticking the checkbox on the Advanced tab of the SearchWP settings screen.

## Workarounds

There are some limited ways to work around the limitations of SearchWP’s quoted search support, as outlined below.

### Extra Metadata Workaround

When SearchWP indexes [Extra metadata](/documentation/knowledge-base/adding-extra-data-to-indexed-entries/) the data is stored *only in SearchWP’s index*, which means the only record of the data is one that has been tokenized by the indexer.

In order to avoid the issue of SearchWP not being able to de-tokenize the content to perform exact match queries, you can customize your hook to make a call to [update_post_meta](https://developer.wordpress.org/reference/functions/update_post_meta/) which will persist the data and enable quoted phrase search support for that record.

**NOTE:** In order to enable quoted search support you will need to add the 
```
meta_key
```

 you’re using to the Custom Fields of each Source you’re working with. SearchWP uses those keys explicitly when performing this action.

This is an **opt-in** behavior, as SearchWP stores Extra Metadata only in its index to keep database usage at a minimum.

---

## Automatic “Did you mean” (search query corrections)

**Source:** [https://searchwp.com/documentation/knowledge-base/did-you-mean/](https://searchwp.com/documentation/knowledge-base/did-you-mean/)

A popular feature of some search engines is their ability to *automatically* apply corrections to search queries when no results are found for the original query.

To enable this functionality in SearchWP, enable the **Closest Match** option on the General Settings page:

	![Screnshot of SearchWP General settings](https://searchwp.com/wp-content/uploads/searchwp-settings-closest-match.png)
	
Alternatively this can be enabled with the [searchwp\query\output_suggested_search](https://searchwp.com/documentation/hooks/searchwp-query-output_suggested_search/) hook.

When this feature is enabled, SearchWP will *automatically* attempt to correct any searches that provide zero results **in addition to** outputting a notice above The Loop of your search results:

	⚠️ Style (CSS) customization is likely required ⚠️
	
![Screenshot of SearchWP's "Did you mean?" automatic output](https://searchwp.com/wp-content/uploads/searchwp-did-you-mean-initial.png)

The above screenshot outlines the automatic output in [Twenty Nineteen](https://wordpress.org/themes/twentynineteen/), a default WordPress theme. The following CSS can be added to improve its appearance:

**Note:** (You can add Custom CSS to your site by navigating to Appearance > Customize > Additional CSS in your WordPress Dashboard)

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | .searchwp-revised-search-notice { |
| --- | --- |
|  | margin: 0 calc(10% + 60px) 1em; |
|  | padding: 0.6em; |
|  | background: #f7f7f7; |
|  | border: 1px solid #e7e7e7; |
|  | border-radius: 2px; |
|  | } |
|  |  |
|  | .searchwp-suggested-revision-query { |
|  | font-style: italic; |
|  | font-weight: bold; |
|  | } |
      [view raw](https://gist.github.com/searchwpgists/21969d41fccc1f0e762040aff46378cf/raw/174db230e2fa75058d6f2647e3efc879f0e7e6b0/style.css)
        [style.css](https://gist.github.com/searchwpgists/21969d41fccc1f0e762040aff46378cf#file-style-css)
        hosted with ❤ by [GitHub](https://github.com)

Which results in a notification that better matches the site design:

![Screenshot of customized styling of SearchWP's "Did you mean?" automatic output](https://searchwp.com/wp-content/uploads/searchwp-did-you-mean-styled.png)

## Interoperability with partial matches

When “Did you mean?” functionality is enabled *and* [partial matching](https://searchwp.com/docs/settings/partial-matches/) is enabled, SearchWP will first attempt to find exact partial matches and utilize partial match functionality.

If no partial matches are found, SearchWP will then utilize its “Did you mean?” functionality, determining the best search correction it can. If no search correction can be determined, SearchWP will show zero results.

---

## Using Apache Tika for Document Processing

**Source:** [https://searchwp.com/documentation/knowledge-base/using-apache-tika-for-document-processing/](https://searchwp.com/documentation/knowledge-base/using-apache-tika-for-document-processing/)

SearchWP has [built in support for document processing](https://searchwp.com/wordpress-search-pdf-office-text-documents/), but there are some cases where alternate methods are preferred. One example is offloading PDF parsing (which can be a resource-intensive job for PHP) to a [purpose built binary like Xpdf](https://searchwp.com/extensions/xpdf-integration/).

Another popular application that is able to parse documents and extract content is [Apache Tika](https://tika.apache.org/). If your server has Tika available, you can tell SearchWP to use it to parse PDF documents like so:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Use Apache Tika to extract PDF content in SearchWP. |
|  | add_filter( 'searchwp\parser\pdf', function( $content, $args ) { |
|  |  |
|  | // Ensure this path is updated to match your Tika installation path! |
|  | $path_to_tika = '/srv/bin/tika-app-1.18.jar'; |
|  |  |
|  | // Execute the command. |
|  | $cmd = "java -jar {$path_to_tika} -t {$args['file']}"; |
|  | @exec( $cmd, $output, $exitCode ); |
|  |  |
|  | // If there was a problem, send the output to the debug log. |
|  | if ( $exitCode ) { |
|  | do_action( 'searchwp\debug\log', 'Error running Tika, exit code: ' . $exitCode ); |
|  | } |
|  |  |
|  | return $output; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/366be4017edd0e0513d0b130493b2f71/raw/3c666be0d90cd0d7337bfcf17ce16f89045edc1d/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/366be4017edd0e0513d0b130493b2f71#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

Apache Tika is a very capable application that can parse additional document types if you’d like. The above snippet will use Tika to parse PDFs, the following filters are available that can be customized in the same way:

- [searchwp\parser\pdf](https://searchwp.com/documentation/hooks/searchwp-parser-pdf/)
- [searchwp\parser\richtext](https://searchwp.com/documentation/hooks/searchwp-parser-richtext/)
- [searchwp\parser\text](https://searchwp.com/documentation/hooks/searchwp-parser-text/)

Apache Tika may also have better support for your Office documents, in which case you can customize the parsed content with the [searchwp\document\content](https://searchwp.com/documentation/hooks/searchwp-document-content/) filter.

---

## Sort Posts, Pages, Custom Post Types by Date

**Source:** [https://searchwp.com/documentation/knowledge-base/sort-posts-pages-custom-post-types-by-date/](https://searchwp.com/documentation/knowledge-base/sort-posts-pages-custom-post-types-by-date/)

By default SearchWP sorts results in order of relevance from most relevant to least. Using a SearchWP 
```
Mode
```

 we can override the sorting of results to instead return in the order they were published, sorted by most recent to older.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Sort SearchWP Post, Page, and Custom Post Type Results by date in DESC order. |
|  | add_filter( 'searchwp\query\mods', function( $mods, $query ) { |
|  | foreach ( $query->get_engine()->get_sources() as $source ) { |
|  | $flag = 'post' . SEARCHWP_SEPARATOR; |
|  | if ( 'post.' !== substr( $source->get_name(), 0, strlen( $flag ) ) ) { |
|  | continue; |
|  | } |
|  |  |
|  | $mod = new \SearchWP\Mod( $source ); |
|  |  |
|  | $mod->order_by( function( $mod ) { |
|  | return $mod->get_local_table_alias() . '.post_date'; |
|  | }, 'DESC', 1 ); |
|  |  |
|  | $mods[] = $mod; |
|  | } |
|  |  |
|  | return $mods; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/4c06f705e344a812870387b34238786b/raw/2222417eacd1ea5444955e77a8a73fbcfb62dc4f/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/4c06f705e344a812870387b34238786b#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

Note that this hook applies only to 
```
WP_Post
```

-based Sources (e.g. Posts, Pages, Custom Post Types) but it can be modified to consider any custom Sources you may be using.

---

## Append Document Content to Parent Post Content

**Source:** [https://searchwp.com/documentation/knowledge-base/append-document-content-to-parent-post-content/](https://searchwp.com/documentation/knowledge-base/append-document-content-to-parent-post-content/)

*This article is an expansion on Adding extra data to indexed entries*

SearchWP has the ability to transfer relevance weight in a number of directions. One direction is particularly applicable to Media in that you can have SearchWP transfer weight for Media entries to their respective ‘Uploaded to’ post. In the database this relationship is established using the 
```
post_parent
```

 column.

When this weight transfer has been set up in the Engine settings (and taking as an example PDFs) when searching for content that appears in a PDF, the result that SearchWP returns will not be the PDF itself but instead be the post to which it has been attached.

Depending on your site and circumstances this can be very beneficial!

There are some edge cases however, and sometimes weight transfer is not something you want to occur in all cases. We can take advantage of SearchWP’s adaptability and customize our implementation to instead:

- Disable Media from the SearchWP Engine entirely
- Hook into SearchWP’s indexer and *retrieve* any ‘child’ PDFs for posts as they’re indexed

This dynamic application allows us to better evaluate the situation on a post-by-post basis.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // @link https://searchwp.com/documentation/knowledge-base/append-document-content-to-parent-post-content/ |
|  | // Retrieve child PDF content and add as 'extra' data to a SearchWP Entry. |
|  | add_filter( 'searchwp\entry\data', function( $data, \SearchWP\Entry $entry ) { |
|  | // Convert the SearchWP Entry into it's native object type. |
|  | $entry = $entry->native(); |
|  |  |
|  | // We only want to consider WP_Post objects. |
|  | if ( ! $entry instanceof \WP_Post ) { |
|  | return $data; |
|  | } |
|  |  |
|  | // Retrieve PDFs that have been uploaded to this Entry. |
|  | $pdfs = get_posts( [ |
|  | 'post_type'      => 'attachment', |
|  | 'post_mime_type' => 'application/pdf', |
|  | 'post_status'    => 'inherit', |
|  | 'nopaging'       => true, |
|  | 'post_parent'    => $entry->ID, |
|  | ] ); |
|  |  |
|  | if ( empty( $pdfs ) ) { |
|  | return $data; |
|  | } |
|  |  |
|  | // Retrieve PDF content for PDFs and store as extra data. |
|  | $data['meta'][ 'searchwp_child_pdf_content' ] = array_map( function( $pdf ) { |
|  | return \SearchWP\Document::get_content( $pdf ); |
|  | }, $pdfs ); |
|  |  |
|  | return $data; |
|  | }, 20, 2 ); |
|  |  |
|  | // Add "Attached PDF Content" as available option to SearchWP Source Attributes. |
|  | add_filter( 'searchwp\source\attribute\options', function( $keys, $args ) { |
|  | if ( $args['attribute'] !== 'meta' ) { |
|  | return $keys; |
|  | } |
|  |  |
|  | // This key is the same as the one used in the searchwp\entry\data hook above, they must be the same. |
|  | $pdf_content_key = 'searchwp_child_pdf_content'; |
|  |  |
|  | // Add "Attached PDF Content" Option if it does not exist already. |
|  | if ( ! in_array( |
|  | $pdf_content_key, |
|  | array_map( function( $option ) { return $option->get_value(); }, $keys ) |
|  | ) ) { |
|  | $keys[] = new \SearchWP\Option( $pdf_content_key, 'Attached PDF Content' ); |
|  | } |
|  |  |
|  | return $keys; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/2c40c9d63b7b21481f8116777ff8518e/raw/57ed7659e6b992717204f77c97e960b22f253c74/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/2c40c9d63b7b21481f8116777ff8518e#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

These hooks tap into SearchWP’s indexing process and for each post (e.g. Posts, Pages, Custom Post Types) and will look for any PDFs that have been ‘uploaded to’ this current post (by utilizing the established 
```
post_parent
```

 relationship) and then parse each of those PDFs for content.

The content of all ‘child’ PDFs will be stored as an extra Custom Field with a name of 
```
searchwp_child_pdf_content
```

. The second hook will add this extra Custom Field to the Custom Fields dropdown when managing post Attributes in your SearchWP Engine and the entry will have a name of *Attached PDF Content* which will allow you to give an individual relevance weight to the extracted PDF content.

**Note:** In order for this change to take effect you will need to *rebuild your index* using the button on the Engines tab of the SearchWP settings screen.

---

## Comparing Index and Source Mods

**Source:** [https://searchwp.com/documentation/knowledge-base/comparing-index-source-mods/](https://searchwp.com/documentation/knowledge-base/comparing-index-source-mods/)

[\SearchWP\Mods](https://searchwp.com/documentation/classes/searchwp-mod/) are purpose built interactions with SearchWP search queries.

There are two primary types of 
```
Mod
```

s:

Index-based
Apply modification to the index as a whole
```
Source
```

-based
Limit the modification to a single [Source](https://searchwp.com/documentation/classes/searchwp-source/)
The primary way of specifying which type of 
```
Mod
```

 you’re implementing is to pass in a 
```
Source
```

 (or 
```
Source
```

 
```
name
```

) when instantiating a 
```
Mod
```

.

*Note: this is a comparison of the two instantiations, note that these Mods don’t actually do anything yet.*

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // @link https://searchwp.com/documentation/knowledge-base/comparing-index-source-mods/ |
|  |  |
|  | // Instantiate an index Mod that applies to the entire index. |
|  | $mod = new \SearchWP\Mod(); |
|  |  |
|  | // Instantiate a Source Mod that applies only to Posts. |
|  | $source = \SearchWP\Utils::get_post_type_source_name( 'post' ); |
|  | $mod    = new \SearchWP\Mod( $source ); |
      [view raw](https://gist.github.com/searchwpgists/16560ad8c5ec3dd24ed8563fbdc59f6b/raw/c1cdb96da03aa3a80d345c70109c8d1a3fa8da20/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/16560ad8c5ec3dd24ed8563fbdc59f6b#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

The first 
```
Mod
```

 has been instantiated in a way that will apply to the Index as a whole when they query runs. By comparison, the second 
```
Mod
```

 will apply only to a single 
```
Source
```

.

## Using an Index-based Mod

An Index-based 
```
Mod
```

 has only the SearchWP Index as its context. Index-based 
```
Mod
```

s should be limited to those that only need that immediate context to perform their job.

While it is certainly possible to perform additional 
```
JOIN
```

s using an Index-based 
```
Mod
```

, doing so may result in increased query times that may not be so prevalent with a 
```
Source
```

-based 
```
Mod
```

.

**For example:** an applicable Index-based 
```
Mod
```

 would be one that adds ‘bonus’ weight to a particular 
```
Source
```

 that is returned as a result.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // @link https://searchwp.com/documentation/knowledge-base/comparing-index-source-mods/ |
|  | // Add relevance weight to a single SearchWP Source (Posts). |
|  | add_filter( 'searchwp\query\mods', function( $mods ) { |
|  | global $wpdb; |
|  |  |
|  | $mod = new \SearchWP\Mod(); |
|  | $source = \SearchWP\Utils::get_post_type_source_name( 'post' ); |
|  | $mod->weight( $wpdb->prepare( "IF(s.source = %s, 9999999, 0)", $source ) ); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | } ); |
      [view raw](https://gist.github.com/searchwpgists/b5bf2c57155fc73bf4a9ba25f6239c9c/raw/63ae0860de9ead950923f6456cc6682c68772d21/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/b5bf2c57155fc73bf4a9ba25f6239c9c#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

With this 
```
Mod
```

 a ‘bonus’ relevance weight of 
```
9999999
```

 will be afforded to all *Posts*. A use case for a hook like this may be that you want Posts to be (nearly) guaranteed to show up above all other 
```
Source
```

s without explicitly *forcing* 
```
Source
```

s to be grouped together.

## Using a Source-based Mod

Source-based 
```
Mod
```

s facilitate query modifications that apply only to a single 
```
Source
```

. In this case there already exists a 
```
JOIN
```

 with the database table that defines the 
```
Source
```

, which opens new possibilities for modification.

**For example:** a Source-based 
```
Mod
```

 can be used to exclude certain Posts from search results if some sort of condition has been met:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  | // @link https://searchwp.com/documentation/knowledge-base/comparing-index-source-mods/ |
|  | add_filter( 'searchwp\query\mods', function( $mods ) { |
|  | if ( ! isset( $_GET['my_mod_trigger'] ) ) { |
|  | return $mods; |
|  | } |
|  |  |
|  | // Exclude Posts 97 and 188 from search results. |
|  | $source = \SearchWP\Utils::get_post_type_source_name( 'post' ); |
|  | $mod    = new \SearchWP\Mod( $source ); |
|  |  |
|  | $mod->set_where( [ [ |
|  | 'column'  => 'ID', |
|  | 'value'   => ['97', '188'], |
|  | 'compare' => 'NOT IN', |
|  | 'type'    => 'NUMERIC' |
|  | ] ] ); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | }, 30, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/0294fcac3cf926476774a4d9f305fc2b/raw/3984aa38b971d3fc3e541bb4874b6d9e50fa0551/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/0294fcac3cf926476774a4d9f305fc2b#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

Using this 
```
Mod
```

 Post 
```
97
```

 and 
```
188
```

 are excluded from search results *only when* 
```
$_GET['my_mod_trigger']
```

 has been defined.

**Another example:** a Source-based 
```
Mod
```

 can be used to exclude Pages with the word coffee in their Title:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  | // @link https://searchwp.com/documentation/knowledge-base/comparing-index-source-mods/ |
|  | add_filter( 'searchwp\query\mods', function( $mods ) { |
|  | // Exclude Pages with 'coffee' in the Title. |
|  | $source = \SearchWP\Utils::get_post_type_source_name( 'page' ); |
|  | $mod    = new \SearchWP\Mod( $source ); |
|  |  |
|  | $mod->set_where( [ [ |
|  | 'column'  => 'post_title', |
|  | 'value'   => 'coffee', |
|  | 'compare' => 'LIKE', |
|  | ] ] ); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | }, 30, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/0681b2e75c93d128fe7bf03ac37274d6/raw/3ecd8757684cb059c2accae91b5e9dd6765507f8/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/0681b2e75c93d128fe7bf03ac37274d6#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

Source-based 
```
Mods
```

 are powerful, programmatic ways to modify the way SearchWP performs its searches.

---

## Search WooCommerce SKUs (and Variation SKUs)

**Source:** [https://searchwp.com/documentation/knowledge-base/search-woocommerce-skus-and-variation-skus/](https://searchwp.com/documentation/knowledge-base/search-woocommerce-skus-and-variation-skus/)

Using a couple of SearchWP’s hooks you can easily incorporate your Product SKUs (including Variation SKUs) into SearchWP searches.

We’re going to take advantage of SearchWP’s ability to absorb ‘extra’ data alongside each entry in its index. WooCommerce Products and Product Variations are each a custom post type. Product Variations are essentially children of their parent Product, so we’ll use a snippet to have all Product Variation SKUs indexed alongside the parent SKU:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Add WooCommerce Product (and Variation) SKUs to SearchWP. |
|  | // @link https://searchwp.com/documentation/knowledge-base/search-woocommerce-skus-and-variation-skus/ |
|  | add_filter( 'searchwp\entry\data', function( $data, \SearchWP\Entry $entry ) { |
|  | // If this is not a Product, there's nothing to do. |
|  | if ( 'product' !== get_post_type( $entry->get_id() ) ) { |
|  | return $data; |
|  | } |
|  |  |
|  | $my_extra_meta_key = 'searchwp_skus'; |
|  |  |
|  | // Retrieve this Product SKU. |
|  | $data['meta'][ $my_extra_meta_key ] = [ |
|  | get_post_meta( $entry->get_id(), '_sku', true ) |
|  | ]; |
|  |  |
|  | // Retrieve all Variations. |
|  | $product_variations = get_posts( [ |
|  | 'post_type'       => 'product_variation', |
|  | 'posts_per_page'  => -1, |
|  | 'fields'          => 'ids', |
|  | 'post_parent'     => $entry->get_id(), |
|  | ] ); |
|  |  |
|  | if ( empty( $product_variations ) ) { |
|  | return $data; |
|  | } |
|  |  |
|  | // Append all Product Variation SKUs. |
|  | foreach ( $product_variations as $product_variation ) { |
|  | $sku = get_post_meta( $product_variation, '_sku', true ); |
|  | $data['meta'][ $my_extra_meta_key ][] = $sku; |
|  | } |
|  |  |
|  | return $data; |
|  | }, 20, 2 ); |
|  |  |
|  |  |
|  | // Add our Extra Meta entry to SearchWP's UI. |
|  | // @link https://searchwp.com/documentation/knowledge-base/search-woocommerce-skus-and-variation-skus/ |
|  | add_filter( 'searchwp\source\attribute\options', function( $keys, $args ) { |
|  | if ( $args['attribute'] !== 'meta' ) { |
|  | return $keys; |
|  | } |
|  |  |
|  | // This key is the same as the one used in the searchwp\entry\data hook above, they must be the same. |
|  | $my_extra_meta_key = 'searchwp_skus'; |
|  | $option = new \SearchWP\Option( $my_extra_meta_key, 'SearchWP WooCommerce SKUs' ); |
|  |  |
|  | // If there's already a match, remove it because we want ours there. |
|  | $keys = array_filter( $keys, function( $option ) use ( $my_extra_meta_key ) { |
|  | return $my_extra_meta_key !== $option->get_value(); |
|  | } ); |
|  |  |
|  | // Add "SearchWP WooCommerce SKUs" Option |
|  | $keys[] = $option; |
|  |  |
|  | return $keys; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/1605fc0555abc8e2cdaf15b19f084102/raw/abce3e22d2cd29e5563d56bec55bf3b8e6554bd4/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/1605fc0555abc8e2cdaf15b19f084102#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

With the snippet in place we can now add *SearchWP WooCommerce SKUs* to our Products Source, making all Product (and Variation) SKUs searchable!

	![SearchWP WooCommerce product SKUs](https://searchwp.com/wp-content/uploads/searchwp-woocommerce-product-skus.png)

---

## Search WooCommerce Orders

**Source:** [https://searchwp.com/documentation/knowledge-base/search-woocommerce-orders/](https://searchwp.com/documentation/knowledge-base/search-woocommerce-orders/)

WooCommerce Orders contain a lot of information and are sometimes difficult to search effectively. SearchWP can be set up to search WooCommerce Orders quickly.

**Note:** You will need SearchWP’s [WooCommerce Integration](https://searchwp.com/extensions/woocommerce-integration/) Extension active for this process.

## Step 1: Make WooCommerce Orders searchable

By default SearchWP will not list WooCommerce Orders as a Source because that particular content type **is not public** by design. WooCommerce Orders *contain sensitive information* and extra care must be taken when making changes like these!

Use the following hooks to add WooCommerce Orders as a SearchWP Source:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Add WooCommerce Orders as a SearchWP Source. |
|  | // @link https://searchwp.com/documentation/knowledge-base/search-woocommerce-orders/ |
|  | add_action( 'plugins_loaded', function() { |
|  | if ( class_exists( 'WooCommerce' ) ) { |
|  | add_filter( 'searchwp\sources', function( $sources ) { |
|  | $sources[] = new \SearchWP\Sources\Post( 'shop_order' ); |
|  |  |
|  | return $sources; |
|  | } ); |
|  |  |
|  | add_filter( 'searchwp\post_stati\shop_order', function( $post_stati ) { |
|  | return array_merge( $post_stati, [ |
|  | 'wc-pending', |
|  | 'wc-processing', |
|  | 'wc-on-hold', |
|  | 'wc-completed', |
|  | 'wc-cancelled', |
|  | 'wc-refunded', |
|  | 'wc-failed', |
|  | ] ); |
|  | } ); |
|  | } |
|  | } ); |
      [view raw](https://gist.github.com/searchwpgists/acd5568e579e695032656140900e2075/raw/e09686ff156b692a0f198541abec13868ce468f5/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/acd5568e579e695032656140900e2075#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

## Step 2: Create a supplemental Engine for Admin searches

Next, create a supplemental SearchWP Engine to use for Admin searches:

	![SearchWP WooCommerce orders engine setup](https://searchwp.com/wp-content/uploads/searchwp-woocommerce-orders-engine-setup-1.gif)
	
**Note:** This Engine will be used for *all* searches in the Admin because that checkbox was ticked in the setup. You can omit any Source(s) from this Engine and SearchWP will skip Admin searches for those Sources, falling back to WordPress’ default.

Here are the steps that were taken to create this Admin search Engine:

1. Click the **Add New** button on the Engines tab of the SearchWP settings screen
2. Click the **Sources & Settings** button for the newly created Engine
3. Enable the applicable Sources for this Engine (making sure to include *Orders*)
4. **Important:** Tick the *Admin Engine* checkbox
5. Click the **Save Engines** button to save the new Engine

## Search WooCommerce Orders

Once the index has processed your existing WooCommerce Orders, they will now be searchable in the WordPress Admin!

**Note:** There are some aspects of WooCommerce Orders that may need further integration:

### Making Order Item data searchable

If you’d like to make Order Item data (e.g. Product SKU numbers for Order Items) you can customize the data indexed for each Order to include any Order Item data you’d like. In this snippet we’ll make the SKU, Product Name, Product Slug, Product Description, Product Short Description, and Product Attributes searchable to return any Orders that match:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Add WooCommerce Order item data to WooCommerce Orders Search in SearchWP. |
|  | // @link https://searchwp.com/documentation/knowledge-base/search-woocommerce-orders/ |
|  | add_filter( 'searchwp\entry\data', function( $data, \SearchWP\Entry $entry ) { |
|  | // The Product data keys to index for each Order item. |
|  | $data_to_index = [ |
|  | 'sku', |
|  | 'name', |
|  | 'slug', |
|  | 'description', |
|  | 'short_description', |
|  | 'attributes', |
|  | ]; |
|  |  |
|  | if ( |
|  | 'post' . SEARCHWP_SEPARATOR . 'shop_order' !== $entry->get_source()->get_name() |
|  | || ! function_exists( 'wc_get_order' ) |
|  | || ! class_exists( 'WC_Order_Item_Product' ) |
|  | || ! method_exists( 'WC_Order_Item_Product', 'get_product' ) |
|  | || ! class_exists( 'WC_Product' ) |
|  | || ! method_exists( 'WC_Product', 'get_data' ) |
|  | ) { |
|  | return $data; |
|  | } |
|  |  |
|  | $order = wc_get_order( $entry->get_id() ); |
|  |  |
|  | $data['meta']['searchwp_wc_order_item_data'] = array_map( function ( $item ) use ( $data_to_index ) { |
|  | $product      = $item->get_product(); |
|  | $product_data = $product->get_data(); |
|  |  |
|  | return array_filter( array_map( function( $item_key, $item_value ) use ( $data_to_index ) { |
|  | return in_array( $item_key, $data_to_index ) ? $item_value : ''; |
|  | }, array_keys( $product_data ), array_values( $product_data ) ) ); |
|  | }, $order->get_items() ); |
|  |  |
|  | // We need to prevent WooCommerce from excluding the order comments from our query. |
|  | remove_filter( 'comments_clauses', array( 'WC_Comments', 'exclude_order_comments' ) ); |
|  |  |
|  | $order_comments = get_comments( array( |
|  | 'post_id' => $order->get_id(), |
|  | 'orderby' => 'comment_ID', |
|  | 'order'   => 'DESC', |
|  | 'status'  => 'any', |
|  | 'type'    => 'order_note', |
|  | ) ); |
|  |  |
|  | add_filter( 'comments_clauses', array( 'WC_Comments', 'exclude_order_comments' ) ); |
|  |  |
|  | $notes = wp_list_pluck( $order_comments, 'comment_content' ); |
|  |  |
|  | $data['meta']['searchwp_wc_order_notes'] = $notes; |
|  |  |
|  | return $data; |
|  | }, 20, 2 ); |
|  |  |
|  | // Prevent WooCommerce from limiting the results to post IDs. |
|  | add_filter( 'searchwp\native\args', function( $args, $query ) { |
|  | if ( |
|  | is_admin() |
|  | && is_search() |
|  | && isset( $_REQUEST['post_type'] ) |
|  | && 'shop_order' == $_REQUEST['post_type'] |
|  | ) { |
|  | $args['post__in'] = []; |
|  | } |
|  | return $args; |
|  |  |
|  | }, 10, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/7a14a454359ed8cb6144bf2fc9f6cd89/raw/4928d8ddfc6632478d036a4296458996c8932511/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/7a14a454359ed8cb6144bf2fc9f6cd89#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

**Note:** Because we added ‘Any Meta Key’ to the Admin Engine we created, we’ll now be able to search by Order Item data as well.

### Integrate with Orders Filters

By default SearchWP *does not* integrate with any Admin filters that have been set up. We can build in support for WooCommerce’s Order Date and Customer filters with this hook:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // @link https://searchwp.com/documentation/knowledge-base/search-woocommerce-orders/ |
|  | // Add support for WooCommerce Admin filters when searching Orders with SearchWP. |
|  | add_filter( 'searchwp\query\mods', function( $mods, $query ) { |
|  | global $wpdb; |
|  |  |
|  | if ( isset( $_GET['_customer_user'] ) && ! empty( $_GET['_customer_user'] ) ) { |
|  | $mod = new \SearchWP\Mod( \SearchWP\Utils::get_post_type_source_name( 'shop_order' ) ); |
|  | $mod->set_local_table( $wpdb->postmeta ); |
|  | $mod->on( 'post_id', [ 'column' => 'id' ] ); |
|  | $mod->on( 'meta_key', [ 'value' => '_customer_user' ] ); |
|  |  |
|  | $mod->raw_where_sql( function( $runtime_mod ) use ( $wpdb ) { |
|  | return $wpdb->prepare( "{$runtime_mod->get_local_table_alias()}.meta_value = %d", absint( $_GET['_customer_user'] ) ); |
|  | } ); |
|  |  |
|  | $mods[] = $mod; |
|  | } |
|  |  |
|  | if ( isset( $_GET['m'] ) && ! empty( $_GET['m'] ) ) { |
|  | $mod = new \SearchWP\Mod( \SearchWP\Utils::get_post_type_source_name( 'shop_order' ) ); |
|  |  |
|  | $mod->raw_where_sql( function( $runtime_mod ) use ( $wpdb ) { |
|  | return $wpdb->prepare( "DATE_FORMAT( {$runtime_mod->get_local_table_alias()}.post_date, \"%Y%m\" ) = %d", absint( $_GET['m'] ) ); |
|  | } ); |
|  |  |
|  | $mods[] = $mod; |
|  | } |
|  |  |
|  | return $mods; |
|  | }, 99, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/d849701d5633eb3ffcb689062721aab6/raw/1e42019469b9409e2aab005bec32f605ceb5e853/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/d849701d5633eb3ffcb689062721aab6#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

With that hook in place, SearchWP will apply the limits as defined by the Order Date and Customer filters when searching WooCommerce Orders.

### Making Order Numbers searchable

Order numbers are Post IDs which are not indexed by default. We can tell SearchWP to index WooCommerce Order Numbers alongside the other Order data with a snippet like this:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Add WooCommerce Order Numbers to WooCommerce Orders. |
|  | // @link https://searchwp.com/documentation/knowledge-base/search-woocommerce-orders/ |
|  | add_filter( 'searchwp\entry\data', function( $data, \SearchWP\Entry $entry ) { |
|  | $my_extra_meta_key = 'searchwp_order_number'; |
|  | $my_extra_meta     = $entry->get_id() . ' order-' . $entry->get_id() . ' o-' . $entry->get_id(); |
|  |  |
|  | $data['meta'][ $my_extra_meta_key ] = $my_extra_meta; |
|  |  |
|  | return $data; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/86eedcf6e66fbb2b2c87636feaef3371/raw/6ed1c40b35731ac71c816f8619517322e262ae92/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/86eedcf6e66fbb2b2c87636feaef3371#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

**Note:** Because we added ‘Any Meta Key’ to the Admin Engine we created, we’ll now be able to search by Order number as well.

### Making Order Notes searchable

If you’ll recall we added ‘Comments’ to the Admin Engine above. WooCommerce uses Comments for Order Notes, but there is an additional restriction put in place by WooCommerce due to the private nature of Order Notes. We can remove this restriction for SearchWP with a snippet like this:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Make WooCommerce Order Notes searchable by SearchWP. |
|  | // @link https://searchwp.com/documentation/knowledge-base/search-woocommerce-orders/ |
|  | add_action( 'searchwp\source\post\attributes\comments', function() { |
|  | if ( did_action( 'searchwp\indexer\batch' ) ) { |
|  | remove_filter( 'comments_clauses', [ 'WC_Comments', 'exclude_order_comments' ] ); |
|  | } |
|  | } ); |
|  |  |
|  | // Add Order Notes to SearchWP's Comments Source. |
|  | add_filter( 'searchwp\source\comment\db_where', function( $db_where, $source ) { |
|  | $db_where[0]['value']   = [ 'comment', 'order_note', ]; |
|  | $db_where[0]['compare'] = 'IN'; |
|  |  |
|  | return $db_where; |
|  | }, 10, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/170dcdf216b60020a8ba106a446eed59/raw/2b0fbf60f5ab5989a0475e204c7ed2c3b8360d65/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/170dcdf216b60020a8ba106a446eed59#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

Once this snippet has been added you’ll need to rebuild your index by clicking the **Rebuild Index** button on the Engines tab of the SearchWP settings screen, and when the index has been rebuilt your WooCommerce Order Notes will be searchable as well.

---

## Adding extra data to indexed entries

**Source:** [https://searchwp.com/documentation/knowledge-base/adding-extra-data-to-indexed-entries/](https://searchwp.com/documentation/knowledge-base/adding-extra-data-to-indexed-entries/)

Many times the content to be indexed is visible/editable on the edit screen for the entries you’re working with, but there are also times where you want to append extra data to entries as SearchWP indexes them so as to make that data searchable as well.

We can use a couple of SearchWP’s hooks to include arbitrary data alongside your entry content when SearchWP’s indexer is running.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // @link https://searchwp.com/documentation/knowledge-base/adding-extra-data-to-indexed-entries/ |
|  | // Adding extra data to indexed entries in SearchWP. |
|  | add_filter( 'searchwp\entry\data', function( $data, \SearchWP\Entry $entry ) { |
|  | $my_extra_meta_key = 'my_extra_meta'; |
|  |  |
|  | // SearchWP can index any data type, array/object values will all be processed. |
|  | // For this example we will use a string: |
|  | $my_extra_meta = 'This content will be searchable!'; |
|  |  |
|  | // Store custom Custom Field along existing postmeta. |
|  | $data['meta'][ $my_extra_meta_key ] = $my_extra_meta; |
|  |  |
|  | return $data; |
|  | }, 20, 2 ); |
|  |  |
|  | // Add 'extra' meta as available option for your Source Attributes. |
|  | add_filter( 'searchwp\source\attribute\options', function( $keys, $args ) { |
|  | if ( $args['attribute'] !== 'meta' ) { |
|  | return $keys; |
|  | } |
|  |  |
|  | // This key is the same as the one used in the searchwp\entry\data hook above, they must be the same. |
|  | $my_extra_meta_key = 'my_extra_meta'; |
|  |  |
|  | // Add "Extra Meta" Option if it does not exist already. |
|  | if ( ! in_array( |
|  | $my_extra_meta_key, |
|  | array_map( function( $option ) { return $option->get_value(); }, $keys ) |
|  | ) ) { |
|  | $keys[] = new \SearchWP\Option( $my_extra_meta_key, 'Extra Meta' ); |
|  | } |
|  |  |
|  | return $keys; |
|  | }, 20, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/122f5a049e55c9366966f9f49dd633be/raw/fc200ed2f4018bf3f016a9699e32f0bbdd7c9390/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/122f5a049e55c9366966f9f49dd633be#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

With those hooks added to your SearchWP Customizations plugin, you’ll see the ‘Extra Meta’ Custom Field show up when you search for *extra* as it matches the custom Option name we created in the snippet above.

![Screenshot of Extra Meta Custom Field](https://searchwp.com/wp-content/uploads/searchwp-extra-meta-data.png)

---

## Group search results by source (post type) and set their order

**Source:** [https://searchwp.com/documentation/knowledge-base/group-results-by-source-post-type/](https://searchwp.com/documentation/knowledge-base/group-results-by-source-post-type/)

By default SearchWP will return results across all Sources within an Engine, ranked by relevance weight in descending order.

In some cases it’s useful to group results by Source and *within each Source group* sort results by relevance.

We can utilize a [\SearchWP\Mod](https://searchwp.com/documentation/search/searchwp-mod/) to do just that.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Group SearchWP results by Source, sort by relevance within each Source group. |
|  | // @link https://searchwp.com/documentation/knowledge-base/group-results-by-source-post-type/ |
|  | add_filter( 'searchwp\query\mods', function( $mods, $query ) { |
|  | $mod = new \SearchWP\Mod(); |
|  | $mod->order_by( function( $mod ) { |
|  | // Search results should be grouped by Sources in this order. |
|  | // NOTE: _ALL_ Engine Sources must be included here! |
|  | $source_order = [ |
|  | 'user', |
|  | \SearchWP\Utils::get_post_type_source_name( 'post' ), |
|  | \SearchWP\Utils::get_post_type_source_name( 'page' ), |
|  | ]; |
|  |  |
|  | return "FIELD({$mod->get_foreign_alias()}.source, " |
|  | . implode( ',', array_filter( array_map( function( $source_name ) { |
|  | global $wpdb; |
|  |  |
|  | return $wpdb->prepare( '%s', $source_name ); |
|  | }, $source_order ) ) ) . ')'; |
|  | }, '', 1 ); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | }, 10, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/49ff05282e0ba8136467222a01c731bb/raw/ee499f263acac8af5ca53502a26eaea81b5b3683/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/49ff05282e0ba8136467222a01c731bb#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

**Note:** In order for this customization to be fully effective, you will need to customize the 
```
$source_order
```

 array with the Source names (in the order you want) and it must include **ALL** of the Engine Sources.

The snippet above references a utility function to retrieve SearchWP’s internal Source name for post types, the Users source is named 
```
user
```

, and any other Source names must be included as well.

If you would like to conditionally apply this sorting, you can examine the 
```
$query
```

 variable to determine whether you want to eject early or apply this [\SearchWP\Mod](https://searchwp.com/documentation/search/searchwp-mod/) by returning it.

See also: [Have one post type show up above any others](https://searchwp.com/documentation/knowledge-base/post-type-first-top/)

---

## Customizing (and verifying) document content

**Source:** [https://searchwp.com/documentation/knowledge-base/customizing-and-verifying-document-content/](https://searchwp.com/documentation/knowledge-base/customizing-and-verifying-document-content/)

When SearchWP’s indexer processes documents, the extracted content is stored and subsequently indexed. You have full access to this content by navigating to the edit screen for any document within the Media library.

There are two views for Media: grid view (default) and list view.

### Grid view

When viewing Media as a grid, locate and select your PDF to bring up the details modal. In the sidebar will be a link titled **Edit more details**.

![2016-06-06 at 2.04 PM](https://searchwp.com/wp-content/uploads/2016-06-06-at-2.04-PM-1030x594.png)

### List view

When using List view, click either the title or the **Edit** link as you would any other post type:

![2016-06-06 at 2.06 PM](https://searchwp.com/wp-content/uploads/2016-06-06-at-2.06-PM.png)

## SearchWP File Content

The indexed file content is displayed in the SearchWP File Content meta box:

![2016-06-06 at 2.10 PM](https://searchwp.com/wp-content/uploads/2016-06-06-at-2.10-PM-1006x1030.png)

You are free to customize this content by hand, and upon updating the post, SearchWP will give your edited version priority over the extracted content. This way you can make any edits you wish and SearchWP’s indexer will index it accordingly.

The content contained in the SearchWP File Content box is the content indexed by and searchable through SearchWP.

## Supported File Formats

SearchWP will extract the text from many common file types including:

- Plain text
- CSV
- Rich text (RTF)
- PDFs (that have readable text*)
- Office Documents (
```
.docx
```

, 
```
.xlsx
```

, 
```
.pptx
```

, **NOT**
```
.doc
```

)
- OpenOffice Documents (
```
.odt, .ods, .odp)
```

** To verify your PDF has readable text, try to copy a sentence to your clipboard and paste it somewhere. If you cannot select or paste it, the PDF does not have readable text.*

---

## Append PDF Content to Search Result Excerpt

**Source:** [https://searchwp.com/documentation/knowledge-base/append-pdf-content-to-search-result-excerpt/](https://searchwp.com/documentation/knowledge-base/append-pdf-content-to-search-result-excerpt/)

One of SearchWP’s most powerful features is the ability to attribute result weight of one post to another.

For example: when you attach WordPress Media to a Post, that Post is the ‘parent’ of that Media file. You can tell SearchWP that when it finds search result weight for Media to **not** link to the Attachment page itself (which not many people use anyway) and instead transfer that search weight to the parent.

![Screenshot of parent weight transfer](https://searchwp.com/wp-content/uploads/searchwp-algorithm-media-transfer.png)

When you’ve configured SearchWP in this way, Media is considered as much as any other post, but Media entries will never be linked directly on search results pages because you’ve transferred all of the keyword weight to the parent.

Depending on your site content this can result in a more natural workflow because your visitor is directed to the post *in which a PDF is linked* instead of the PDF itself.

## Automatically appending contextual PDF snippets to the excerpt

You can take this integration one step further by automatically appending a contextual snippet from each ‘child’ PDF to your post excerpt in search results pages, which will indicate to your visitors (before they have clicked through to the parent post) that there was a hit on a linked PDF within that post.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Add child PDF snippets to SearchWP result excerpt. |
|  | // @link https://searchwp.com/documentation/knowledge-base/append-pdf-content-to-search-result-excerpt/ |
|  | add_filter( 'get_the_excerpt', function( $excerpt ) { |
|  | global $post; |
|  |  |
|  | if ( ! $post instanceof WP_Post || ! is_search() ||  post_password_required() || $post->searchwp_excerpt_found ) { |
|  | return $excerpt; |
|  | } |
|  |  |
|  | $post->searchwp_excerpt_found = true; |
|  |  |
|  | $attached_pdfs = get_attached_media( 'application/pdf', $post->ID ); |
|  |  |
|  | if ( empty( $attached_pdfs ) ) { |
|  | return $excerpt; |
|  | } |
|  |  |
|  | // The number of words to include in PDF excerpt. |
|  | $pdf_excerpt_length = 20; |
|  |  |
|  | foreach ( $attached_pdfs as $attached_pdf ) { |
|  | $source    = \SearchWP\Utils::get_post_type_source_name( 'attachment' ); |
|  | $pdf_entry = new \SearchWP\Entry( $source, $attached_pdf->ID, false, false ); |
|  |  |
|  | $pdf_excerpt = \SearchWP\Sources\Post::get_global_excerpt( |
|  | $pdf_entry, get_search_query(), $pdf_excerpt_length |
|  | ); |
|  |  |
|  | if ( \SearchWP\Settings::get( 'highlighting', 'boolean' ) ) { |
|  | $pdf_excerpt = \SearchWP\Highlighter::apply( $pdf_excerpt, get_search_query() ); |
|  | } |
|  |  |
|  | if ( ! empty( $pdf_excerpt ) ) { |
|  | $pdf_label = get_the_title( $attached_pdf->ID ); |
|  | $excerpt   .= '<br /><br /><strong>' . wp_kses_post( $pdf_label ) |
|  | . '</strong>: ' . wp_kses_post( $pdf_excerpt ); |
|  | } |
|  | } |
|  |  |
|  | return $excerpt; |
|  | } ); |
      [view raw](https://gist.github.com/searchwpgists/c88b753cee11f2b992e538688210a345/raw/3a0b7fb5103f072519e39d9216623cc8f4468bb5/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/c88b753cee11f2b992e538688210a345#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

When this filter is added, your standard excerpt will be shown on search results pages, but if a post has child PDFs that contain search terms those specific PDFs will be called out by title with a supporting contextual excerpt from that PDF including at least one of the search terms as well. These callouts are appended to the original excerpt, so you don’t lose that valuable information in this process.

---

## Using a Custom Field to Prioritize Search Results

**Source:** [https://searchwp.com/documentation/knowledge-base/custom-field-prioritize-results/](https://searchwp.com/documentation/knowledge-base/custom-field-prioritize-results/)

By default, SearchWP returns search results ordered by calculated relevance weight in descending order.

In other words the most relevant results bubble to the top based on the weights you’ve set on the [Engine settings screen](/documentation/setup/engines/#engine-settings) for your search engine(s). Having control over attribute relevance directly facilitates control over how search results rank.

SearchWP’s relevance system can be modified to your liking. This article will outline how to use the **numeric value of a Custom Field** (postmeta) to control the ranking of search results.

This in essence creates a ‘buoy’ that overrides SearchWP’s relevance weight calculation, and will rank results based on their Custom Field value.

With this customization, results with a Custom Field value will rank *above* those without a Custom Field value. Results with the Custom Field value will be sorted first by that Custom Field value and then by SearchWP’s relevance value. Results without the Custom Field value will be sorted by SearchWP’s relevance value.

See also: [Add Relevance Weight to More Recently Published Entries by Date](/documentation/knowledge-base/add-relevance-weight-date/)

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Use a Custom Field as a buoy to supersede SearchWP's relevance weight sorting. |
|  | // @link https://searchwp.com/documentation/knowledge-base/custom-field-prioritize-results/ |
|  | add_filter( 'searchwp\query\mods', function( $mods, $query ) { |
|  | global $wpdb; |
|  |  |
|  | $meta_key = 'my_buoy_meta_key'; |
|  |  |
|  | // Add the buoy to these post types: |
|  | $post_types = [ 'post', 'page', ]; |
|  |  |
|  | foreach ( $post_types as $post_type ) { |
|  | $mod        = new \SearchWP\Mod(); |
|  | $alias      = \SearchWP::$index->get_alias(); |
|  | $meta_alias = 'my_searchwp_sort_' . $post_type; |
|  |  |
|  | $mod->column_as( $wpdb->prepare( "( |
|  | SELECT meta_value |
|  | FROM {$wpdb->postmeta} |
|  | WHERE |
|  | {$wpdb->postmeta}.post_id = {$alias}.id |
|  | AND {$wpdb->postmeta}.meta_key = %s |
|  | )", $meta_key ), |
|  | $meta_alias ); |
|  | $mod->order_by( "{$meta_alias} + 0", 'ASC', 2 ); |
|  |  |
|  | $mods[] = $mod; |
|  | } |
|  |  |
|  | return $mods; |
|  | }, 30, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/e19132cdba9750bd79686258c6544307/raw/73205b872998f5a5cba1a4f6ebb485a90f1bc1a1/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/e19132cdba9750bd79686258c6544307#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

---

## Limiting Search Results to the Active bbPress Forum

**Source:** [https://searchwp.com/documentation/knowledge-base/limiting-search-results-bbpress/](https://searchwp.com/documentation/knowledge-base/limiting-search-results-bbpress/)

Some bbPress forum installs are **huge**. Perhaps you’d like to help out your visitors by limiting the on-page search to the Forum currently being viewed. We can customize the output of 
```
get_search_form()
```

 (which includes the WordPress Search (*not bbPress*) Widget) to only consider the bbPress Forum currently on display when searching:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Customize native WordPress search form to include current bbPress Forum ID if applicable. |
|  | // @link https://searchwp.com/documentation/knowledge-base/limiting-search-results-bbpress/ |
|  | add_filter( 'get_search_form', function( $markup ) { |
|  | if ( ! function_exists( 'bbp_get_forum_id' ) ) { |
|  | return $markup; |
|  | } |
|  |  |
|  | $forum_id = isset( $_REQUEST['swpforumid'] ) ? absint( $_REQUEST['swpforumid'] ) : bbp_get_forum_id(); |
|  |  |
|  | if ( empty( $forum_id ) ) { |
|  | return $markup; |
|  | } |
|  |  |
|  | return str_replace( '</form>', |
|  | '<input type="hidden" name="swpforumid" value="' . esc_attr( $forum_id ) . '" /></form>', |
|  | $markup |
|  | ); |
|  | } ); |
|  |  |
|  | // Limit SearchWP results to the current bbPress Forum when applicable. |
|  | add_filter( 'searchwp\query\mods', function( $mods, $query ) { |
|  | if ( ! isset( $_REQUEST['swpforumid'] ) ) { |
|  | return $mods; |
|  | } |
|  |  |
|  | $mod = new \SearchWP\Mod( |
|  | \SearchWP\Utils::get_post_type_source_name( 'post' ) |
|  | ); |
|  |  |
|  | $mod->set_where( [ [ |
|  | 'column'  => 'id', |
|  | 'value'   => absint( $_REQUEST['swpforumid'] ), |
|  | 'compare' => '=', |
|  | 'type'    => 'NUMERIC', |
|  | ] ] ); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | }, 30, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/90d3ffabb596cb434c807c9bbf489f2a/raw/6095d459090fe38200f6ccc41157696a36585013/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/90d3ffabb596cb434c807c9bbf489f2a#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

---

## Prevent Indexing Segments of Content

**Source:** [https://searchwp.com/documentation/knowledge-base/prevent-indexing-segments-of-content/](https://searchwp.com/documentation/knowledge-base/prevent-indexing-segments-of-content/)

**Note:** Unless supported by additional Sources, this article applies only to SearchWP’s core 
```
\WP_Post
```

-based Sources (e.g. Posts, Pages, Custom Post Types)
	
Using SearchWP’s Shortcode-parsing ability you can control what content *is not* indexed/searchable.

Begin by ensuring that the checkbox to enable Shortcode processing is ticked on the [Advanced tab of the SearchWP settings screen](/documentation/setup/advanced/).

Next we will need to implement a custom [Shortcode](https://codex.wordpress.org/Shortcode_API). For this article we’ll be wrapping the content we want to exclude in 
```
[searchwp_no_index]
```

 
```
[/searchwp_no_index]
```

 tags:

![Screenshot of Shortcodes](https://searchwp.com/wp-content/uploads/searchwp-shortcode-exclude-content-1030x614.gif)

Any content included within our custom Shortcode tags will be *excluded* when indexing (and therefore from searching).

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Add a Shortcode to exclude content from SearchWP's index. |
|  | // @link https://searchwp.com/documentation/knowledge-base/prevent-indexing-segments-of-content/ |
|  | add_shortcode( 'searchwp_no_index', function( $atts, $content = null ) { |
|  | // If the indexer is running do not return anything, |
|  | // else return the content contained in the Shortcode. |
|  | return did_action( 'searchwp\indexer\batch' ) ? '' : $content; |
|  | } ); |
      [view raw](https://gist.github.com/searchwpgists/e65a3c401b1ea5b173780e0f8dcfe69e/raw/c339d302e88d3cfab640e0a94e1fd86e2c2fe3d6/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/e65a3c401b1ea5b173780e0f8dcfe69e#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

**Note:** make sure this hook is in place *before* adding your Shortcodes, when you add the Shortcodes to the content and click Update the post will be automatically purged and reindexed by SearchWP.

---

## Partial Matches, Fuzzy Matches, Spelling Corrections

**Source:** [https://searchwp.com/documentation/knowledge-base/partial-matches-fuzzy-matches-spelling-corrections/](https://searchwp.com/documentation/knowledge-base/partial-matches-fuzzy-matches-spelling-corrections/)

When [partial matching is enabled](/documentation/setup/advanced/), SearchWP will attempt to find partial matches for search terms. Partial matching logic has been implemented in multiple, subsequent levels. This article will explain the internal logic of SearchWP’s partial matching implementation.

## Level 1: LIKE

The first level of partial matches is a standard 
```
LIKE
```

 partial match, where search terms will be used as partial string matches for other content in your search index. You can customize whether prefix or suffix partial matching is implemented using the available hooks, by default **only suffix** partial matching is applied.

**Example:** Searching for 
```
ball
```

 will include results for 
```
balloon
```

 but *not* 
```
baseball
```

Depending on your site content, you can customize whether prefix or suffix matching is skipped with the following hooks:

- [searchwp\query\partial_matches\wildcard_before](/documentation/hooks/searchwp-query-partial_matches-wildcard_before/)
- [searchwp\query\partial_matches\wildcard_after](/documentation/hooks/searchwp-query-partial_matches-wildcard_after/)

Any resulting partial matches at this stage will be returned and SearchWP will include them when finding search results. If results are found, partial matching is concluded at this point by default.

## Level 2: Fuzzy matching

If 
```
LIKE
```

 partial matches are not found, SearchWP will then continue seeking partial matches by implementing rudimentary fuzzy matching. Fuzzy matching will take into account slight spelling issues by scanning the index for terms that linguistically *sound like* the search terms.

For example, fuzzy matching will find results for 
```
soccer
```

 when searching for 
```
socker
```

 because of the linguistic similarity.

Alternatively, fuzzy matching **will not** find results for 
```
soccer
```

 when searching for 
```
sckr
```

 as some other fuzzy matching algorithms operate. This is because the linguistic difference is too far apart. You have control over the threshold of how closely aligned terms need to be to be considered a fuzzy match:

- [searchwp\query\partial_matches\fuzzy\threshold](/documentation/hooks/searchwp-query-partial_matches-fuzzy-threshold/)

**NOTE:** As this threshold is reduced, there is an increased likelihood that unexpected/unwanted fuzzy matches are returned.

Fuzzy matching is used as a last resort when partial matches have been enabled in SearchWP, after 
```
LIKE
```

 matches have not been found. You do have the option of forcing fuzzy matches to be included in results despite 
```
LIKE
```

 matches having been found:

- [searchwp\query\partial_matches\fuzzy\force](/documentation/hooks/searchwp-query-partial_matches-fuzzy-force/)

Please use these hooks with caution as they can have a drastic effect on the relevance of returned results. Before relying heavily on partial matches it is suggested that [Synonyms](/documentation/setup/settings/#synonyms) are used instead.

---

## Keyword Stemming

**Source:** [https://searchwp.com/documentation/knowledge-base/keyword-stemming/](https://searchwp.com/documentation/knowledge-base/keyword-stemming/)

SearchWP has the ability to use keyword [stems](https://en.wikipedia.org/wiki/Stemming) instead of the exact terms entered for search queries. Depending on your preference this can greatly enhance search results on your site.

Keyword stemming can be enabled when [managing the settings for an Engine](/documentation/setup/engines/#engine-settings).

Take for example the verb *run* — if your content has terms such as *running* or *runner* a search for *run* will not return the same results set unless [partial matching](/documentation/knowledge-base/partial-matches-fuzzy-matches-spelling-corrections/) has been enabled.

If you would like the same results set to be returned for *run*, *running*, and *runner* SearchWP’s keyword stemming feature will make that happen.

---

## HTTP Basic Authentication

**Source:** [https://searchwp.com/documentation/knowledge-base/http-basic-authentication/](https://searchwp.com/documentation/knowledge-base/http-basic-authentication/)

SearchWP’s default indexing process is built upon a process that runs in the background on your server. It works by making sequential HTTP requests to itself (loopback connections) which in turn causes the indexer to build its index.

If your server has implemented HTTP Basic Authentication, you will need to provide the login information to SearchWP in order for the indexer to operate successfully. If SearchWP’s indexer cannot function due to HTTP Basic Authentication you will see this notice on the Engines tab of the SearchWP settings screen:

![Basic Authentication Notice](https://searchwp.com/wp-content/uploads/searchwp-basic-authentication-notice.png)

You will need to make use of the [searchwp\background_process\http_basic_auth_credentials](https://searchwp.com/documentation/hooks/searchwp-background_process-http_basic_auth_credentials/) hook to pass along your HTTP Basic Authentication username and password.

Once that hook is in place, the notice will disappear and SearchWP’s indexer will operate as expected.

---

## Alternate Indexer

**Source:** [https://searchwp.com/documentation/knowledge-base/alternate-indexer/](https://searchwp.com/documentation/knowledge-base/alternate-indexer/)

SearchWP’s default indexing process is built upon a process that runs in the background on your server. It works by making sequential HTTP requests to itself (loopback connections) which in turn causes the indexer to build its index.

Depending on your server and/or network configuration, these loopback connections may not work. SearchWP will try to detect this problem and when it does an alternate indexer will be used. When this is happening you’ll see the following notice on the Engines tab of the SearchWP settings screen:

	![Screenshot of alternate indexer notice](https://searchwp.com/wp-content/uploads/searchwp-alternate-indexer-notice.png)
	
When this notice is displayed **you will need to keep your browser window open** in order for the initial index to be built. Because the loopback connections are not functioning, SearchWP’s indexer will utilize your open browser session to build the initial index.

**Note:** Once the initial index has been built you can navigate away from this screen. *Unlike* the default indexer, the alternate indexer will apply delta index updates as they are made, which may increase the time it takes to add or edit content on your site, as the indexer will be processing those updates inline as opposed to in the background.

To enable Alternate Indexer using code, see: [searchwp\indexer\alternate](/documentation/hooks/searchwp-indexer-alternate/)

---

## Link to file (e.g. PDF) instead of Attachment page

**Source:** [https://searchwp.com/documentation/knowledge-base/link-file-pdf/](https://searchwp.com/documentation/knowledge-base/link-file-pdf/)

WordPress by default will link to an Attachment page for any Media returned as a search result. Many themes do not have useful templates for Media and very often it makes sense to link directly to the file itself instead.

This snippet will customize your search results template to link directly to Media files instead of an Attachment page.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Link directly to Media files instead of Attachment pages in search results |
|  | // @link https://searchwp.com/documentation/knowledge-base/link-file-pdf/ |
|  | function my_search_media_direct_link( $permalink, $post = null ) { |
|  | if ( |
|  | ( |
|  | is_search() |
|  | || doing_action( 'wp_ajax_searchwp_live_search' ) |
|  | || doing_action( 'wp_ajax_nopriv_searchwp_live_search' ) |
|  | || isset( $_REQUEST['swps'] ) |
|  | ) |
|  | && 'attachment' === get_post_type( $post ) |
|  | ) { |
|  | $permalink = wp_get_attachment_url( $post ); |
|  | } |
|  |  |
|  | return esc_url( $permalink ); |
|  | } |
|  |  |
|  | add_filter( 'the_permalink',   'my_search_media_direct_link', 99, 2 ); |
|  | add_filter( 'attachment_link', 'my_search_media_direct_link', 99, 2 ); |
      [view raw](https://gist.github.com/searchwpgists/218dc4d69cbe63b0a9b9326ce113bc28/raw/2f8f6835952e465107dc62ce1cadb464588442aa/functions.php)
        [functions.php](https://gist.github.com/searchwpgists/218dc4d69cbe63b0a9b9326ce113bc28#file-functions-php)
        hosted with ❤ by [GitHub](https://github.com)

---

## Add Relevance Weight to More Recently Published Entries by Date

**Source:** [https://searchwp.com/documentation/knowledge-base/add-relevance-weight-date/](https://searchwp.com/documentation/knowledge-base/add-relevance-weight-date/)

By default SearchWP returns results sorted by the total calculated weight based upon the values entered in your engine configuration. There are times when you might want to dynamically influence the ranking of search results by taking into consideration the publish date of each result.

Using SearchWP’s [searchwp\query\mods](https://searchwp.com/documentation/hooks/searchwp-query-mods/) hook, we can do just that! There are three different approaches to cover:

**Note:** This implementation does NOT cause results to be *sorted by date*, instead more recently published entries will simply be given *more weight* as calculated by SearchWP. The more recently an entry was published the more weight it gets.

- [Bonus weight for recently published](#bonus-recent)
- [Bonus weight that decays over time](#decay-over-time)
- [Date stored as Custom Field value](#custom-field-date)
- [Arbitrary multiplier on date as Custom Field value](#arbitrary-multiplier-custom-field-date)

See also: [Using a Custom Field to Prioritize Search Results](#)

### Bonus weight for recently published

To have more recently published entries get a weight boost, add this to your SearchWP Customizations plugin:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Add search weight to more recently published entries in SearchWP. |
|  | // @link https://searchwp.com/documentation/knowledge-base/add-relevance-weight-date/ |
|  | add_filter( 'searchwp\query\mods', function( $mods ) { |
|  | global $wpdb; |
|  |  |
|  | $mod = new \SearchWP\Mod(); |
|  | $mod->set_local_table( $wpdb->posts ); |
|  | $mod->on( 'ID', [ 'column' => 'id' ] ); |
|  | $mod->relevance( function( $runtime ) use ( $wpdb ) { |
|  | return " |
|  | COALESCE( ROUND( ( ( |
|  | UNIX_TIMESTAMP( {$runtime->get_local_table_alias()}.post_date ) |
|  | - ( |
|  | SELECT UNIX_TIMESTAMP( {$wpdb->posts}.post_date ) |
|  | FROM {$wpdb->posts} |
|  | WHERE {$wpdb->posts}.post_status = 'publish' |
|  | ORDER BY {$wpdb->posts}.post_date ASC |
|  | LIMIT 1 |
|  | ) |
|  | ) / 86400 ), 0 ), 0 )"; |
|  | } ); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | } ); |
      [view raw](https://gist.github.com/searchwpgists/928851c351034383509f35ac02df41cd/raw/d4594c49697bfd92166fcef55e296f24bf39a996/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/928851c351034383509f35ac02df41cd#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

### Bonus weight that decays over time

Alternatively, you can use something like this to have the weight influence taper off as publish dates go further back in time. Only recently published posts will get a boost, the published date for older posts will not influence the weight.

This modification is more aggressive in that the influence tapers off over time, but that may be preferential for you!

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Add search weight to more recently published entries in SearchWP. |
|  | // Weight decays over time and eventually will not add bonus weight. |
|  | // @link https://searchwp.com/documentation/knowledge-base/add-relevance-weight-date/ |
|  | add_filter( 'searchwp\query\mods', function( $mods ) { |
|  | global $wpdb; |
|  |  |
|  | $weight_adjust = 15; |
|  |  |
|  | $mod = new \SearchWP\Mod(); |
|  | $mod->set_local_table( $wpdb->posts ); |
|  | $mod->on( 'ID', [ 'column' => 'id' ] ); |
|  | $mod->relevance( function( $runtime_mod ) use ( $weight_adjust ) { |
|  | $alias = $runtime_mod->get_local_table_alias(); |
|  | return " |
|  | ( 100 * EXP( |
|  | ( 1 - ABS( ( |
|  | UNIX_TIMESTAMP( {$alias}.post_date ) |
|  | - UNIX_TIMESTAMP( NOW() ) |
|  | ) / 86400 ) ) / 100 ) |
|  | * {$weight_adjust} )"; |
|  | } ); |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | } ); |
      [view raw](https://gist.github.com/searchwpgists/4991781d47270a2ac473c5f00468a00c/raw/3352a9cba2884226891e1a33c5b1293a4b295149/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/4991781d47270a2ac473c5f00468a00c#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

With either in place, entries with more recent published dates will be given more weight than those with older publish dates.

As referenced in the comment, experiment with line 8 to determine what 
```
$modifier
```

 value works best for you.

### Date stored as Custom Field value

Another example would be to have results sorted by dates stored in a Custom Field. The more recent the date of the Custom Field the more weight the result will receive:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Add bonus weight from Custom Field value in SearchWP. |
|  | // @link https://searchwp.com/documentation/knowledge-base/add-relevance-weight-date/ |
|  | add_filter( 'searchwp\query\mods', function( $mods ) { |
|  | global $wpdb; |
|  |  |
|  | // Custom Field name. Needs to store data as YYYYMMDD (ACF does this already). |
|  | $my_meta_key  = 'date_field'; |
|  |  |
|  | $mod = new \SearchWP\Mod(); |
|  | $mod->set_local_table( $wpdb->postmeta ); |
|  | $mod->on( 'post_id', [ 'column' => 'id' ] ); |
|  | $mod->on( 'meta_key', [ 'value' => $my_meta_key ] ); |
|  | $mod->relevance( function( $runtime ) use ( $wpdb, $my_meta_key ) { return $wpdb->prepare( " |
|  | COALESCE( ROUND( ( ( |
|  | UNIX_TIMESTAMP( {$runtime->get_local_table_alias()}.meta_value ) |
|  | - ( |
|  | SELECT UNIX_TIMESTAMP( meta_value ) |
|  | FROM {$wpdb->postmeta} |
|  | WHERE meta_key = %s |
|  | ORDER BY meta_value ASC |
|  | LIMIT 1 |
|  | ) |
|  | ) / 86400 ), 0 ), 0 )", $my_meta_key ); |
|  | } ); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | } ); |
      [view raw](https://gist.github.com/searchwpgists/58980fa333c66e8113ca2f1ac68dffb5/raw/928da01363cc52f76d3172b6804285d884a9396e/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/58980fa333c66e8113ca2f1ac68dffb5#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

### Arbitrary multiplier on date as Custom Field value

It is also possible to arbitrarily assign a multiplier to the final, calculated weight (relevance) of results. In other words, the weight manipulation will not be dynamic based on the timestamp, but instead *multiplied* by a value you determine.

You can apply different multipliers based on whether the Custom Field date is in the past or the future, reducing the calculated relevance if the Custom Field value is in the past, and increasing calculated relevance if it’s in the future for example:

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Modify SearchWP calculated relevance using multiplier. |
|  | // @link https://searchwp.com/documentation/knowledge-base/add-relevance-weight-date/ |
|  | class My_SearchWP_Date_Modifier { |
|  | private $post_type       = 'post'; |
|  | private $meta_key        = 'event_date'; |
|  | private $modifier_past   = 0.5; |
|  | private $modifier_future = 1.5; |
|  | private $alias           = 'myswpdm'; |
|  |  |
|  | function __construct() { |
|  | global $wpdb; |
|  |  |
|  | // Modify SearchWP calculated relevance using multiplier. |
|  | add_filter( 'searchwp\query', function( $query, $args ) use ( $wpdb ) { |
|  | // Calculate a CUSTOM relevance. |
|  | $query['select'][] = "( SUM(relevance) * {$this->alias}mod ) AS {$this->alias}rel"; |
|  |  |
|  | // Implement a custom weight modifier based on date stored as meta value. |
|  | $query['from']['select'][] = " |
|  | ( |
|  | CASE |
|  | WHEN UNIX_TIMESTAMP( {$this->alias}m.meta_value ) < UNIX_TIMESTAMP( NOW() ) |
|  | THEN {$this->modifier_past} |
|  | WHEN UNIX_TIMESTAMP( {$this->alias}m.meta_value ) > UNIX_TIMESTAMP( NOW() ) |
|  | THEN {$this->modifier_future} |
|  | ELSE 1 |
|  | END |
|  | ) AS {$this->alias}mod |
|  | "; |
|  |  |
|  | // Custom JOINs. |
|  | $query['from']['from'][] = " |
|  | LEFT JOIN {$wpdb->posts} {$this->alias}p |
|  | ON ( {$this->alias}p.ID = {$args['index_alias']}.id |
|  | AND {$this->alias}p.post_type = '{$this->post_type}' ) |
|  | "; |
|  | $query['from']['from'][] = " |
|  | LEFT JOIN {$wpdb->postmeta} {$this->alias}m |
|  | ON ( {$this->alias}m.post_id = {$this->alias}p.ID |
|  | AND {$this->alias}m.meta_key = '{$this->meta_key}' ) |
|  | "; |
|  |  |
|  | // Use our custom relevance to sort results by overriding the default ORDERBY. |
|  | $query['order_by'] = [ "{$this->alias}rel DESC", ]; |
|  |  |
|  | return $query; |
|  | }, 20, 2 ); |
|  | } |
|  | } |
|  |  |
|  | new My_SearchWP_Date_Modifier(); |
      [view raw](https://gist.github.com/searchwpgists/d5c6a48152bbc933ff8cc6affbe1c3f9/raw/1d11b894e6d14a171bde24494fc9511de8ba6fba/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/d5c6a48152bbc933ff8cc6affbe1c3f9#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

The overall implementation of the above snippet is that we’re manipulating SearchWP’s query directly to:

1. Add a new column to the index query to calculate and store our custom relevance calculation
2. Add a modifier calculation based on the 
```
UNIX_TIMESTAMP
```

 of the Custom Field value
3. Include custom 
```
JOIN
```

s to ensure we’re retrieving the proper Custom Field values
4. Override SearchWP’s 
```
ORDERBY
```

 clause to sort results by our custom relevance calculation

By taking this approach we can have full and direct control over how SearchWP’s query runs and in this case adjust the calculated weight for Posts with a Custom Field named 
```
event_date
```

 using a direct multiplier, leaving other post types (or Posts without the Custom Field) unaffected by the multiplier.

---

## Add an Engine Select Dropdown Box to Search Form

**Source:** [https://searchwp.com/documentation/knowledge-base/engine-select-dropdown/](https://searchwp.com/documentation/knowledge-base/engine-select-dropdown/)

One of SearchWP’s most popular features is the ability to create multiple search engines. More often than not multiple engines result in multiple search forms, each with their own search results template. It’s also possible to instead use your default search form and results template for any search engine in SearchWP.

This article will explain how you can accomplish **three different approaches** to adding an Engine dropdown to your search form.

1. [Build your own search form with an Engine dropdown](#build-your-own-form)
2. [Customize the Shortcodes Extension to include an Engine dropdown](#shortcodes-extension-engine-dropdown)
3. [Customize the default search form to include an Engine select dropdown](#default-search-form-engine-dropdown)

## Building your own search form

Building your own search form involves editing your theme files to include the input fields and buttons we want to include. At a most basic level you can add the following to your theme template file where you would like the form to appear:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <!-- https://searchwp.com/documentation/knowledge-base/engine-select-dropdown/ --> |
| --- | --- |
|  | <form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>"> |
|  | <label> |
|  | <span class="screen-reader-text">Search for:</span> |
|  | <input type="search" class="search-field" placeholder="Search..." value="<?php echo esc_attr( get_search_query() ); ?>" name="s" title="Search for:" /> |
|  | </label> |
|  | <?php |
|  | $engines = \SearchWP\Settings::get_engines(); |
|  | $current_engine = isset( $_GET['swpengine'] ) ? esc_attr( $_GET['swpengine'] ) : 'default'; |
|  | ?> |
|  | <select name="swpengine" id="swpengine"> |
|  | <?php foreach ( $engines as $engine_name => $engine ) : ?> |
|  | <option value="<?php echo esc_attr( $engine_name ); ?>" |
|  | <?php selected( $current_engine, $engine_name ); ?>> |
|  | <?php echo esc_html( $engine->get_label() ); ?> |
|  | </option> |
|  | <?php endforeach; ?> |
|  | </select> |
|  | <input type="submit" class="search-submit" value="Search" /> |
|  | </form> |
      [view raw](https://gist.github.com/searchwpgists/b2267bb520519b91d663116be725b108/raw/231e06facabf5b73ca9769e819ed9c6322346d9e/searchform.php)
        [searchform.php](https://gist.github.com/searchwpgists/b2267bb520519b91d663116be725b108#file-searchform-php)
        hosted with ❤ by [GitHub](https://github.com)

**Note:** ‘Default’ is output for the default engine, you can customize that by editing line 14 in that snippet.

This form is structured like the default WordPress search form, but it also includes a 
```
select
```

 containing all of your defined SearchWP Engines.

Once your form has been set up it will redirect to your default search results template, but we also need to tell SearchWP which engine to use for the search.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // @link https://searchwp.com/documentation/knowledge-base/engine-select-dropdown/ |
|  | if ( ! empty( $_GET['swpengine'] ) ) { |
|  | add_filter( 'searchwp\query\args', function( $args ) { |
|  | $args['engine'] = $_GET['swpengine']; |
|  |  |
|  | return $args; |
|  | } ); |
|  | } |
      [view raw](https://gist.github.com/searchwpgists/7022afe45c7c09d21a0c47b3e83b5685/raw/4c7ab4499d636c89c337f6f7b1154f63c6665d3d/functions.php)
        [functions.php](https://gist.github.com/searchwpgists/7022afe45c7c09d21a0c47b3e83b5685#file-functions-php)
        hosted with ❤ by [GitHub](https://github.com)

This snippet is solely responsible for checking to see what was chosen from the Engines dropdown, and using that engine configuration for the search.

## Use SearchWP’s Shortcodes Extension

SearchWP’s [Shortcodes Extension](https://searchwp.com/docs/extensions/shortcodes/) allows you to easily output search forms and control search results pages using WordPress Shortcodes. Here is an example search form that includes a Categories dropdown to choose from:

**Note:** requires Shortcodes **version 1.2.1** or higher

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // @link https://searchwp.com/documentation/knowledge-base/engine-select-dropdown/ |
|  |  |
|  | // ***** UNCOMMENT THIS IF YOU WANT TO USE SHORTCODES IN WIDGETS |
|  | // add_filter( 'widget_text', 'do_shortcode' ); |
|  |  |
|  | // Output a SearchWP Engines dropdown |
|  | function my_searchwp_shortcodes_inject_engines() { ?> |
|  | <p class="searchwp-shortcodes-engines"> |
|  | <?php |
|  | $engines = \SearchWP\Settings::get_engines(); |
|  | $current_engine = isset( $_GET['swpengine'] ) ? esc_attr( $_GET['swpengine'] ) : 'default'; |
|  | ?> |
|  | <select name="swpengine" id="swpengine"> |
|  | <?php foreach ( $engines as $engine_name => $engine ) : ?> |
|  | <option value="<?php echo esc_attr( $engine_name ); ?>" |
|  | <?php selected( $current_engine, $engine_name ); ?>> |
|  | <?php echo esc_html( $engine->get_label() ); ?> |
|  | </option> |
|  | <?php endforeach; ?> |
|  | </select> |
|  | </p><?php |
|  | } |
|  |  |
|  | add_action( 'searchwp_shortcodes_after_input', 'my_searchwp_shortcodes_inject_engines' ); |
      [view raw](https://gist.github.com/searchwpgists/0daf065910eb8ec8dc6bda211fc742b9/raw/4926a7ef4717208348210ceccdb76582a0891bba/functions.php)
        [functions.php](https://gist.github.com/searchwpgists/0daf065910eb8ec8dc6bda211fc742b9#file-functions-php)
        hosted with ❤ by [GitHub](https://github.com)

This will customize the SearchWP Shortcodes form to also include our Engines dropdown. That only handles the dropdown, however. We still need to tell SearchWP which engine to use when performing a search. This can be done by adding the following to your SearchWP Customizations plugin (*not the theme template file where you added the form code*).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // @link https://searchwp.com/documentation/knowledge-base/engine-select-dropdown/ |
|  | if ( ! empty( $_GET['swpengine'] ) ) { |
|  | add_filter( 'searchwp\query\args', function( $args ) { |
|  | $args['engine'] = $_GET['swpengine']; |
|  |  |
|  | return $args; |
|  | } ); |
|  | } |
      [view raw](https://gist.github.com/searchwpgists/7022afe45c7c09d21a0c47b3e83b5685/raw/4c7ab4499d636c89c337f6f7b1154f63c6665d3d/functions.php)
        [functions.php](https://gist.github.com/searchwpgists/7022afe45c7c09d21a0c47b3e83b5685#file-functions-php)
        hosted with ❤ by [GitHub](https://github.com)

That snippet will check the search request to see which engine was chosen from the dropdown and use it for the current search.

## Modify the default search form to include an Engines dropdown

WordPress allows us to filter the default search form found in many themes. It’s generated by a call to 
```
get_search_form()
```

 which can be completely customized either by including a file named 
```
searchform.php
```

 in your theme directory, or via the 
```
get_search_form
```

 filter. For this example we will be using the 
```
get_search_form
```

 filter.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
To include an Engines dropdown in your site’s default search form, add the following to your SearchWP Customizations plugin:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Adds a SearchWP Engines dropdown to the search form |
|  | // @link https://searchwp.com/documentation/knowledge-base/engine-select-dropdown/ |
|  | function my_searchwp_get_search_form_with_engines_dropdown( $form ) { |
|  | ob_start(); ?> |
|  | <form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>"> |
|  | <label> |
|  | <span class="screen-reader-text">Search For</span> |
|  | <input type="search" class="search-field" placeholder="Search..." value="<?php echo esc_attr( get_search_query() ); ?>" name="s" title="Search for:" /> |
|  | </label> |
|  | <?php |
|  | $engines = \SearchWP\Settings::get_engines(); |
|  | $current_engine = isset( $_GET['swpengine'] ) ? esc_attr( $_GET['swpengine'] ) : 'default'; |
|  | ?> |
|  | <select name="swpengine" id="swpengine"> |
|  | <?php foreach ( $engines as $engine_name => $engine ) : ?> |
|  | <option value="<?php echo esc_attr( $engine_name ); ?>" |
|  | <?php selected( $current_engine, $engine_name ); ?>> |
|  | <?php echo esc_html( $engine->get_label() ); ?> |
|  | </option> |
|  | <?php endforeach; ?> |
|  | </select> |
|  | <input type="submit" class="search-submit" value="Search" /> |
|  | </form> |
|  | <?php return ob_get_clean(); |
|  | } |
|  |  |
|  | add_filter( 'get_search_form', 'my_searchwp_get_search_form_with_engines_dropdown' ); |
      [view raw](https://gist.github.com/searchwpgists/fd4e1ef6befb4c50ba6ffa0368332cf4/raw/53aa07b2d00abe779c1da3fb5618ebf48494b7a2/functions.php)
        [functions.php](https://gist.github.com/searchwpgists/fd4e1ef6befb4c50ba6ffa0368332cf4#file-functions-php)
        hosted with ❤ by [GitHub](https://github.com)

The form code used here is based on the default search form that ships with WordPress. There is a chance your theme previously customized the form, and you simply want to add the dropdown to it. You can simply modify the form code to match what shipped with your theme and adding lines 
```
11-22
```

 from that code sample where you want your Engines dropdown to appear.

This snippet only modifies the search form, we still need to capture the value from the dropdown and tell SearchWP to use the chosen Engine for the search. We can do that by adding the following to your SearchWP Customizations plguin (*not the theme template file where you added the form code*).

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // @link https://searchwp.com/documentation/knowledge-base/engine-select-dropdown/ |
|  | if ( ! empty( $_GET['swpengine'] ) ) { |
|  | add_filter( 'searchwp\query\args', function( $args ) { |
|  | $args['engine'] = $_GET['swpengine']; |
|  |  |
|  | return $args; |
|  | } ); |
|  | } |
      [view raw](https://gist.github.com/searchwpgists/7022afe45c7c09d21a0c47b3e83b5685/raw/4c7ab4499d636c89c337f6f7b1154f63c6665d3d/functions.php)
        [functions.php](https://gist.github.com/searchwpgists/7022afe45c7c09d21a0c47b3e83b5685#file-functions-php)
        hosted with ❤ by [GitHub](https://github.com)

---

## Add Weight to Entries (posts) within a Specific Category (taxonomy term)

**Source:** [https://searchwp.com/documentation/knowledge-base/add-weight-category-tag-term/](https://searchwp.com/documentation/knowledge-base/add-weight-category-tag-term/)

By default SearchWP considers the actual content of taxonomy terms when performing searches. Depending on the way you’ve set up your site, you may want to give extra weight to entries regardless of taxonomy term, but instead add the weight to all entries that have been given a specific taxonomy term.

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Add Weight to Entries (posts) within a Specific Category (taxonomy term) in SearchWP. |
|  | // @link https://searchwp.com/documentation/knowledge-base/add-weight-category-tag-term/ |
|  | add_filter( 'searchwp\query\mods', function( $mods ) { |
|  | global $wpdb; |
|  |  |
|  | // Taxonomy bonus weight Mods. |
|  | $bonuses = [ [ |
|  | 'term_id' => 37,  // Term ID to receive extra weight. |
|  | 'weight'  => 100, // How much extra weight for this term. |
|  | ], [ |
|  | 'term_id' => 82,  // Term ID to receive extra weight. |
|  | 'weight'  => 200, // How much extra weight for this term. |
|  | ] ]; |
|  |  |
|  | $term_mods = []; |
|  |  |
|  | foreach ( $bonuses as $bonus ) { |
|  | $mod = new \SearchWP\Mod(); |
|  | $index_alias = $mod->get_foreign_alias(); |
|  | $mod->relevance( "IF(( |
|  | SELECT {$wpdb->prefix}posts.ID |
|  | FROM {$wpdb->prefix}posts |
|  | LEFT JOIN {$wpdb->prefix}term_relationships ON ( |
|  | {$wpdb->prefix}posts.ID = {$wpdb->prefix}term_relationships.object_id |
|  | ) |
|  | WHERE {$wpdb->prefix}posts.ID = {$index_alias}.id |
|  | AND {$wpdb->prefix}term_relationships.term_taxonomy_id = {$bonus['term_id']} |
|  | LIMIT 1 |
|  | ) > 0, {$bonus['weight']}, 0)" ); |
|  |  |
|  | $term_mods[] = $mod; |
|  | } |
|  |  |
|  | $mods = array_merge( $mods, $term_mods ); |
|  |  |
|  | return $mods; |
|  | } ); |
      [view raw](https://gist.github.com/searchwpgists/9300627622e43e459c738faca06b9ff2/raw/12edbd86dac62d2ffd91c994ff5b3a8b46bf4a34/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/9300627622e43e459c738faca06b9ff2#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

---

## Add Relevance Weight to ACF True/False Checkbox Fields

**Source:** [https://searchwp.com/documentation/knowledge-base/add-relevance-acf-checkbox/](https://searchwp.com/documentation/knowledge-base/add-relevance-acf-checkbox/)

[Advanced Custom Fields](https://www.advancedcustomfields.com/) is a terrific plugin that makes customizing your site very easy. Not only does it facilitate content entry, it can also help you make management of other details easier for content managers. Utilizing both [ACF and SearchWP](https://searchwp.com/advanced-custom-fields-acf/) is something many customers take advantage of!

One thing you can do is set up ACF with a checkbox field that controls whether some attribute of the current post is true or false. For example, perhaps some of your posts are considered proprietary and you’d like to ensure that those posts are given more weight when searches are performed.

See also: [Advanced Custom Fields and SearchWP](https://searchwp.com/advanced-custom-fields-acf/)

Using a couple of SearchWP’s hooks that’s easily accomplished!

All hooks should be added to *your custom* [SearchWP Customizations Plugin](/documentation/knowledge-base/creating-searchwp-customizations-plugin/).
Assuming your ACF Checkbox field has a name of 
```
proprietary
```

 a bonus weight of 
```
1000
```

 will be added to any post that has that Advanced Custom Field True/False Checkbox ticked:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  |  |
|  | // Add Relevance Weight to ACF True/False Checkbox Fields in SearchWP. |
|  | // @link https://searchwp.com/documentation/knowledge-base/add-relevance-acf-checkbox/ |
|  | add_filter( 'searchwp\query\mods', function( $mods ) { |
|  |  |
|  | global $wpdb; |
|  |  |
|  | $my_meta_key  = 'proprietary'; // ACF True/False name. |
|  | $bonus_weight = 1000;          // Extra weight to add when checkbox is ticked. |
|  |  |
|  | $mod = new \SearchWP\Mod(); |
|  | $mod->set_local_table( $wpdb->postmeta ); |
|  | $mod->on( 'post_id', [ 'column' => 'id' ] ); |
|  | $mod->on( 'meta_key', [ 'value' => $my_meta_key ] ); |
|  |  |
|  | $mod->weight( function( $runtime_mod ) use ( $bonus_weight ) { |
|  | $local_alias = $runtime_mod->get_local_table_alias(); |
|  |  |
|  | return "IF({$local_alias}.meta_value+0 = 1, {$bonus_weight}, 0)"; |
|  | } ); |
|  |  |
|  | $mods[] = $mod; |
|  |  |
|  | return $mods; |
|  | } ); |
      [view raw](https://gist.github.com/searchwpgists/158c1fe2da44638c7752530ff31c1df3/raw/f498e9a346b59a3168f74bed9f3eab4f95ce1fea/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/158c1fe2da44638c7752530ff31c1df3#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

You can customize the hooks to use any ACF field name by editing line 9 with the applicable field 
```
name
```

, and if you’d like to adjust the bonus weight that’s used you can edit line 10.

---

## How to Create a Clone of your Site for Support

**Source:** [https://searchwp.com/documentation/knowledge-base/clone-site/](https://searchwp.com/documentation/knowledge-base/clone-site/)

From time to time support requests are specific enough to warrant delivering a clone of your site to the support staff so it can be set up in a development environment and the issue can be closely examined away from your production environment. Creating a clone of your site is surprisingly easy, you can use a plugin that walks you through the process, or you can generate a clone manually. This KB article will discuss generating a clone of your site using [Duplicator](https://wordpress.org/plugins/duplicator/).

## Step 1: Install Duplicator

The first step is installing [Duplicator](https://wordpress.org/plugins/duplicator/), a free WordPress plugin that will build a portable copy of your site. You can install Duplicator by navigating to the Plugins > Add New menu entry in your WordPress admin.

![WordPress Add New plugin menu](https://searchwp.com/wp-content/uploads/wordpress-add-new-plugin-1.png)

Search for ‘Duplicator’ in the upper right and hit Enter. After finding the result for Duplicator, click Install Now. Once installed, activate the plugin.![Install Duplicator plugin](https://searchwp.com/wp-content/uploads/wordpress-install-duplicator.png)

## Step 2: Generate Duplicator Clone Package

After activating Duplicator click on Create Your First Package in the Duplicator Welcome page.

![Duplicator Create New Package](https://searchwp.com/wp-content/uploads/duplicator-new-package.png)

This screen allows you to configure settings for the backup package. In order to keep the size of the archive as small as possible, we are going to exclude the uploads and cache directory from the backup and all media and archive files (these files are usually not necessary).

![Duplicator excluded files](https://searchwp.com/wp-content/uploads/duplicator-excluded-files.png)

Wait for Duplicator to make a system scan. If there are no issues with the site scan, click on Build.![Duplicator build package](https://searchwp.com/wp-content/uploads/duplicator-build-package.png)

Duplicator will start to build the package. This may take some time depending on the size of the site.![](https://searchwp.com/wp-content/uploads/duplicator-building-package.png)

## Step 3: Upload Installer and Archive

![Duplicator Package and installer](https://searchwp.com/wp-content/uploads/duplicator-package-installer.png)Duplicator generates two files per package; an Installer and an Archive. Support will need **BOTH** of these files in order to set up the clone in the test environment.

Please upload both installer.php and the Archive to your file provider of choice (e.g. Dropbox, Google Drive) and share the link in your support ticket.

---

## License Activation Problems

**Source:** [https://searchwp.com/documentation/knowledge-base/license-activation-problems/](https://searchwp.com/documentation/knowledge-base/license-activation-problems/)

If you are having trouble activating your license please take the following steps before opening a new ticket.

## Ensure it is the proper license key

Your license key is available in your Account by clicking the Purchases tab, followed by the View Licenses link:

![](https://searchwp.com/wp-content/uploads/searchwp-view-licenses.png)View your license key
You can then click the key icon to display your license key, clicking the license key will highlight the entire key, and you can copy it to your clipboard to be pasted in your license activation field

![](https://searchwp.com/wp-content/uploads/searchwp-license-key.png)Display your license key by clicking the key icon

If you retrieved your license from your payment receipt, please ensure that you are not using your receipt key in place of your license key.

## Confirm active sites

You can manage the active site(s) for your license in your account section: [https://searchwp.com/account/](https://searchwp.com/account/)

Check to make sure that the site(s) on file are accurate.

## Ensure communication is not blocked

In order to activate a license, your site must be able to communicate with the licensing server. This communication takes place via HTTP requests over ports 80 and 443.

Some common causes for communication issues are:

- Your site is on an intranet without access to the Internet
- Your firewall rules are preventing HTTP requests to the licensing server
- You have customized your hosts file
- Your DNS settings are different than your servers

Please check all of these (*if you are not able to check into these please as your server administrator*) before opening a support ticket.

## Your license is not active

If you have verified which site(s) should be active and there are no communication issues that you can see, your license may have expired. Please renew your license to activate your license.

### None of this helped!

If you are continuing to have trouble activating your license please send an email to [support@searchwp.com](mailto:support@searchwp.com) and **include your license key**.

---

## Creating Your SearchWP Customizations Plugin

**Source:** [https://searchwp.com/documentation/knowledge-base/creating-searchwp-customizations-plugin/](https://searchwp.com/documentation/knowledge-base/creating-searchwp-customizations-plugin/)

Using the [available hooks](https://searchwp.com/documentation/hooks/) you can customize the behavior of SearchWP in many ways.

## What are hooks?

‘Hooks’ are functions that integrate with WordPress/SearchWP behavior without needing to edit core files. There are two types of hooks:

**Actions**: Actions are arbitrary points in the execution of the core code that allow you to fire your own functions before the core code continues

**Filters**: Filters send a variable (or multiple variables) out of the core code, allow you to *filter*/change it, and send it back to the core code.

SearchWP uses both Actions and Filters throughout its code base.

## How to add your own hooks

The recommended way to add your own custom hooks is by making use of a custom Plugin that you write and maintain yourself.

This is the recommended method because it will encapsulate all of your SearchWP customizations in a way that is not directly attached to the active theme. You’ll be able to continue using your customizations should you change themes because all of your hooks will be contained in a single, standalone Plugin.

To create your own **SearchWP Customizations** Plugin:

Begin by creating a file named 
```
searchwp-customizations.php
```

 in your plugins folder (which is 
```
~/wp-content/plugins
```

 by default)

Paste the following into the newly created, empty file:

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters](%7B%7B%20revealButtonHref%20%7D%7D)

  |  | <?php |
| --- | --- |
|  | /* |
|  | Plugin Name: SearchWP Customizations |
|  | Description: Customizations for SearchWP |
|  | Version: 1.0.0 |
|  | */ |
|  |  |
|  | // Add all hooks and custom code here. |
      [view raw](https://gist.github.com/searchwpgists/c2a9d26248337b19f7e925631e044aa5/raw/b5c1f1406336404e787489b54e9b70f7e12708cb/searchwp-customizations.php)
        [searchwp-customizations.php](https://gist.github.com/searchwpgists/c2a9d26248337b19f7e925631e044aa5#file-searchwp-customizations-php)
        hosted with ❤ by [GitHub](https://github.com)

Once that file is saved, navigate to the Plugins page of your WordPress installation.

You’ll see a new Plugin available named **SearchWP Customizations. You can then activate that plugin and all of your hooks will be put in place.**

---

