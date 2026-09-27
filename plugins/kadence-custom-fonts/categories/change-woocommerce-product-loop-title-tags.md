# Change Woocommerce Product Loop Title Tags

*Category from Kadence Custom Fonts documentation*

---

## How to Change the WooCommerce Product Loop Title Tags

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/change-woocommerce-product-loop-title-tags/](https://www.kadencewp.com/help-center/docs/kadence-theme/change-woocommerce-product-loop-title-tags/)

While we don’t suggest you change the title tags from an H2 tag, there may be some reason you want to do this. With the Kadence theme, you will need to use the [Code Snippets plugin](https://kadence-theme.com/knowledge-base/advanced/how-to-add-a-custom-filter-or-function-with-code-snippets/) to add the hooks for this. If you haven’t already used this plugin, install it from your plugin dashboard.

The Code Snippet you need to add is:

```
/**
 * Initiate the product title switch.
 */
function init_custom_woocommerce_product_loop_tags() {
 if ( class_exists( 'KadenceTheme' ) ) {
    $kadence_theme_class = KadenceTheme::instance();
    remove_action( 'woocommerce_shop_loop_item_title', array( $kadence_theme_class->components['woocommerce'], 'archive_title_with_link' ) );
    add_action( 'woocommerce_shop_loop_item_title', 'custom_kadence_archive_title' );
 }
}
add_action( 'init', 'init_custom_woocommerce_product_loop_tags' );

/**
 * Show the product title in the product loop.
 */
function custom_kadence_archive_title() {
 global $product;

 $link = apply_filters( 'woocommerce_loop_product_link', get_the_permalink(), $product );
 echo '<h3 class="' . esc_attr( apply_filters( 'woocommerce_product_loop_title_classes', 'woocommerce-loop-product__title' ) ) . '"><a href="' . esc_url( $link ) . '" class="woocommerce-LoopProduct-link-title woocommerce-loop-product__title_ink">' . get_the_title() . '</a></h3>';
}
```

Shop Kit Affiliate Product Titles

If you use [Kadence Shop Kit](https://docs.nexcess.com/software/kadence/install-activate-kadence-shop-kit/) + the [Affiliate Products feature](https://docs.nexcess.com/software/kadence/open-affiliate-external-products-in-new-tab/), the code above will need some adjustments. In this case, you can use the following Code Snippet instead:

```
/**
 * Initiate the product title switch.
 */
function init_custom_woocommerce_product_loop_tags() {
 if ( class_exists( 'KadenceTheme' ) ) {
    $kadence_theme_class = KadenceTheme::instance();	 
    remove_action( 'woocommerce_shop_loop_item_title', array( $kadence_theme_class->components['woocommerce'], 'archive_title_with_link' ) );	
	if ( class_exists('kt_affiliate_options')) {
	  remove_action( 'woocommerce_shop_loop_item_title', array( $GLOBALS['kt_affiliate_options'], 'wooextras_kadence_archive_title_with_link' ) );	 
  	}
    add_action( 'woocommerce_shop_loop_item_title', 'custom_kadence_archive_title' );
 } 
  
}
add_action( 'init', 'init_custom_woocommerce_product_loop_tags', 999 );

/**
 * Show the product title in the product loop.
 */
function custom_kadence_archive_title() {
 global $product;

 $link = apply_filters( 'woocommerce_loop_product_link', get_the_permalink(), $product );
 echo '<h3 class="' . esc_attr( apply_filters( 'woocommerce_product_loop_title_classes', 'woocommerce-loop-product__title' ) ) . '"><a href="' . esc_url( $link ) . '" class="woocommerce-LoopProduct-link-title woocommerce-loop-product__title_ink">' . get_the_title() . '</a></h3>';
}
```

**Note:** *If you are using Woo Templates, you can use an Advanced Text Block + Dynamic Content to take complete control over Product Titles, voiding the need for the Code Snippet above. The snippet above is ideal for cases where Woo Templates are not in use.*

---

