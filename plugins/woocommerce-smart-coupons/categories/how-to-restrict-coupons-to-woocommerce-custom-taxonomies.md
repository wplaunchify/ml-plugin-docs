# How To Restrict Coupons To Woocommerce Custom Taxonomies

*Category from WooCommerce Smart Coupons documentation*

---

## How to restrict coupons to WooCommerce custom taxonomies

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-restrict-coupons-to-woocommerce-custom-taxonomies/](https://woocommerce.com/document/smart-coupons/how-to-restrict-coupons-to-woocommerce-custom-taxonomies/)

# How to restrict coupons to WooCommerce custom taxonomies

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

If you want to exclude all your popular subscription products from coupon discounts, or include discounts on all products sharing the common tag and other product-related use cases, the coupon [taxonomy restriction](https://woocommerce.com/document/smart-coupons/how-to-restrict-coupons-by-product-taxonomy/) feature can help you achieve it.

In this document, you can find ways to restrict coupons to the custom taxonomies that you have created.

## How to create custom taxonomies

[↑ Back to top](#doc-title)

To create a custom taxonomy such as Material, Warranty, Occasion, or Style, you can find plugins that are available on the wordpress.org/plugins page that is available by searching with “woocommerce custom taxonomy”.

A free plugin that can be used to create custom taxonomies is [https://wordpress.org/plugins/custom-post-type-ui/](https://wordpress.org/plugins/custom-post-type-ui/)

If you are familiar with custom codes, you can utilize the code available below:

```
// Register 'Collection' Custom Taxonomy for WooCommerce Products
function register_product_collection_taxonomy() {
    $labels = array(
        'name'              => _x( 'Collections', 'taxonomy general name', 'textdomain' ),
        'singular_name'     => _x( 'Collection', 'taxonomy singular name', 'textdomain' ),
        'search_items'      => __( 'Search Collections', 'textdomain' ),
        'all_items'         => __( 'All Collections', 'textdomain' ),
        'parent_item'       => __( 'Parent Collection', 'textdomain' ),
        'parent_item_colon' => __( 'Parent Collection:', 'textdomain' ),
        'edit_item'         => __( 'Edit Collection', 'textdomain' ),
        'update_item'       => __( 'Update Collection', 'textdomain' ),
        'add_new_item'      => __( 'Add New Collection', 'textdomain' ),
        'new_item_name'     => __( 'New Collection Name', 'textdomain' ),
        'menu_name'         => __( 'Collections', 'textdomain' ),
    );

    $args = array(
        'hierarchical'      => true, // Like categories
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'rewrite'           => array( 'slug' => 'collection' ),
        'show_in_rest'      => true, // To make it visible in Gutenberg and REST API
    );

    register_taxonomy( 'product_collection', array( 'product' ), $args );
}
add_action( 'init', 'register_product_collection_taxonomy' );
```

![](https://woocommerce.com/wp-content/uploads/2025/05/smart-coupons-product-custom-taxonomy.png?strip=all&w=704)

To know more about the above snippet, you can check the WordPress documentation [here](https://developer.wordpress.org/reference/functions/register_taxonomy/). To safely add code snippets, you can follow the documentation [here](https://www.storeapps.org/docs/wordpress-code-snippets/).

## How to restrict custom taxonomies with Smart Coupons

[↑ Back to top](#doc-title)

To restrict coupons to custom taxonomies, follow the steps below:

1. Navigate to **Marketing > Coupons**.
2. Create a new coupon or edit an existing coupon.
3. Navigate to “**Usage restriction tab > Smart Coupon Restrictions:**” Select “**Taxonomy**” from the dropdown and click on the “**+**” symbol.
4. In the Taxonomy dropdown, you can find the custom taxonomy you created. In our case it is “**Collections**“.
5. Update the coupon.

That’s it!

![](https://woocommerce.com/wp-content/uploads/2025/05/smart-coupons-custom-taxonomy.png?strip=all&w=704)

[← WooCommerce Smart Coupons Documentation](https://woocommerce.com/document/smart-coupons/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

WooCommerce Subscriptions is a WooCommerce extension that lets customers subscribe to your products or services and pay on a weekly,...
				![](https://woocommerce.com/wp-content/uploads/2012/07/Table_Rate_Shipping_icon-marketplace-160x160-2.png)

### Table Rate Shipping

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Advanced, flexible shipping. Define multiple shipping rates based on location, price, weight, shipping class or item count.

---

