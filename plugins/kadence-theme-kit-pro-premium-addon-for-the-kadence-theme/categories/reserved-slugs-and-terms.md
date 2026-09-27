# Reserved Slugs And Terms

*Category from Kadence Theme Kit Pro - Premium addon for the Kadence Theme documentation*

---

## Reserved Slugs and Terms

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/reserved-slugs-and-terms/](https://www.kadencewp.com/help-center/docs/kadence-theme/reserved-slugs-and-terms/)

When customizing WordPress, it’s common to add custom post types (CPTs) and taxonomies to extend your site functionality. Additionally, many plugins and themes may register their own content types. Each of these elements is assigned a unique identifier known as a “slug.” Using reserved or previously defined slugs can create unexpected behaviors such as 404 errors, infinite redirects, or failures in functionality.  Ensuring that slugs are unique is essential to avoid conflicts and ensure proper site operation.

WordPress Reserved Slugs and Terms

WordPress has many reserved slugs for post types such as (but not limited to): *post*, *page*, and attachment. Some common taxonomy slugs include: category, post_tag, and nav_menu. In addition, WordPress has many terms that should also be avoided, such as: post_type, taxonomy, term, etc… For a complete list of reserved slugs and terms, please reference the [WordPress Reserved Terms](https://codex.wordpress.org/Reserved_Terms) document.

Kadence Reserved Slugs

Kadence adds several custom post types to WordPress.  Below is a list of the most common slugs:

- Elements: *kadence_element*
- Maintenance Mode Pages: *kadence_adv_page*
- Forms: *kadence_form*
- Kadence Navigation: *kadence_navigation*
- Kadence Header: *kadence_header*
- Custom SVGs: *kadence_custom_svg*
- Query: *kadence_query*
- Query Card: *kadence_query_card*
- Conversion Items: *kadence_conversions*
- A/B Test Campaign: *kadence_ab_test*
- Lottie Animations: *kadence_lottie*
- Vector SVGs: *kadence_vector*
- Custom Fonts: *kt_font*
- Custom Icons: *kb_icon*
- Woo Templates: *kadence_wootemplate*
- Reviews: *kt_reviews*
- Cart Notice: *kt_cart_notice*
- Badge: *kt_woo_badge*
- Product Tabs: *kt_product_tabs*

WooCommerce Reserved Slugs

WooCommerce creates several custom post types and taxonomies.  Here are some of the more common slugs:

WooCommerce Custom Post Types

- Products: *product*
- Variations: *product_variation*
- Orders: *shop_order*
- Refunds: *shop_order_refund*
- Coupons: *shop_coupon*
- Posts: *shop_order_placehold*

WooCommerce Taxonomies

- Product type: *product_type*
- Product visibility: *product_visibility*
- Product categories: *product_cat*
- Product tags: *product_tag*
- Product shipping classes: *product_shipping_class*
- Product Color: *pa_color*
- Product Size: *pa_size*
- Brands: *product_brands*

How Do I Know What Slugs to Avoid?

In addition to the partial list above, it may be necessary to avoid other slugs.  It’s impossible to list all of the possibilities here since every theme and plugin can create their own elements.  One way to find out what slugs are registered on your site is to create a shortcode that displays a list.  This requires adding a custom PHP code snippet.  If you’re not familiar with adding PHP snippets, please see [this document](https://docs.nexcess.com/software/kadence/blocks/add-custom-filter-or-function-with-code-snippets/).

```
add_shortcode('reserved-slugs', function(){
	$output = "";
	$post_types = get_post_types([], 'objects');
	$output .= '<h2>Post Types</h2>';
	$output .= '<ul>';
	foreach ($post_types as $post_type) {
	    $output .= sprintf('<li><strong>%s</strong>: <em>%s</em></li>', esc_html($post_type->label), esc_html($post_type->name) );
	}
	$output .= '</ul>';
	$taxonomies = get_taxonomies([], 'objects');
	$output .= '<h2>Taxonomies</h2>';
	$output .= '<ul>';
	foreach ($taxonomies as $taxonomy) {
		$output .= sprintf('<li><strong>%s</strong>: <em>%s</em></li>', esc_html($taxonomy->label), esc_html($taxonomy->name) );
	}
	$output .= '</ul>';
	return $output;
});
```

After adding the above snippet, simply create a page and insert a shortcode block containing 
```
[reserved-slugs]
```

.  The page will output all of your registered custom post types and taxonomies including the slug for each.

Selecting a Slug for your Custom Post Type or Taxonomy

Choosing a unique and descriptive slug for custom post types and/or taxonomies is critical.  A good practice might be to use a namespaced or prefixed slug to ensure your slug is unique.  You may want to choose a meaningful prefix that is related to the purpose or function of the element.  For example, instead of *events*, you might use *acme-events*.  For a taxonomy, instead of *category*, perhaps *acme-category*.

Allowed Characters

**Allowed characters in WordPress slugs:**

- Lowercase letters (a-z)
- Numbers (0-9)
- Dashes (-)

**What to Avoid:**

- Underscores – technically allowed. Use dashes with public-facing content for better readability and SEO.
- Uppercase letters – WordPress automatically converts them to lowercase.
- Special characters (!, &, /), accented letters (é, ñ, ö), and spaces – WordPress strips or encodes them. Not recommended.

Using Reserved Slugs

In some cases, you may still want to use reserved slugs. To do this, you can filter out post types from the ignored list using the following snippet:

```
add_filter( 'kadence_customizer_post_type_ignore_array', function ( $ignore_post_types ) {
    // List of post types you want to remove
    $remove_post_types = [ 'product', 'course', 'lesson' ];

    // Filter out the unwanted post types
    $ignore_post_types = array_values( array_diff( $ignore_post_types, $remove_post_types ) );

    return $ignore_post_types;
});
```

This allows you to bypass the default restrictions and use specific reserved post type slugs, though caution is advised to avoid conflicts.

---

