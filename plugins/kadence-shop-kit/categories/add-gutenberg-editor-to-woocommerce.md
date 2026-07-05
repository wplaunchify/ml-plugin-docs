# Add Gutenberg Editor To Woocommerce

*Category from Kadence Shop Kit documentation*

---

## How to Add Gutenberg Editor to WooCommerce

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-shop-kit/add-gutenberg-editor-to-woocommerce/](https://www.kadencewp.com/help-center/docs/kadence-shop-kit/add-gutenberg-editor-to-woocommerce/)

The default WooCommerce product editor is, at the time of this writing, still using the old classic WordPress editor that does not create useful product pages.

The video below from our friends at WPCrafter.com shows you how you can add the blocks editor to create beautiful product layouts for your WooCommerce store.

More screenshots and instructions below if that is your preferred method of learning.

## Product Descriptions without Gutenberg

WooCommerce uses the WordPress classic editor for product descriptions, which leaves a lot to be desired for product display. Site owners are essentially locked into displaying a product title, a product description, and little else in terms of design and layout other than some standard text styling. Unless you find a creative use of bold and italics invigorating, you’re out of luck.

![](https://www.liquidweb.com/wp-content/uploads/2021/12/woocommerce-classic-editor-1024x676.png)*WooCommerce product editing using the classic editor leaves little room for customization with blocks. (WooCommerce version 6.0.0)*However, with a little bit of code, you can turn on the Gutenberg block editor to ensure that your products have all that the block editor, and Kadence Blocks, have to offer.

## How to enable Gutenberg to edit your WooCommerce product descriptions

A small bit of code that you can copy from below will turn your product description area into a block-based wonderland.

```
// enable gutenberg for woocommerce
function activate_gutenberg_product( $can_edit, $post_type ) {
 if ( $post_type == 'product' ) {
        $can_edit = true;
    }
    return $can_edit;
}
add_filter( 'use_block_editor_for_post_type', 'activate_gutenberg_product', 10, 2 );

// enable taxonomy fields for woocommerce with gutenberg on
function enable_taxonomy_rest( $args ) {
    $args['show_in_rest'] = true;
    return $args;
}
add_filter( 'woocommerce_taxonomy_args_product_cat', 'enable_taxonomy_rest' );
add_filter( 'woocommerce_taxonomy_args_product_tag', 'enable_taxonomy_rest' );
```

### Woocommerce Version 7.7.0 – product tab locked

*If you’ve added the code above to your site, but you found that you are unable to add new blocks to your products after updating to WooCommerce Version 7.7.0, you should know WooCommerce added a template to the “product” post type, which might be interfering with your customization.* The template can be removed using a filter like this:

```
add_filter('woocommerce_register_post_type_product', function( $args ) {
    unset( $args['template'] );
    return $args;
});
```

There are two methods of getting this bit of code above into your WordPress installation.

### Code Snippets Plugin

First, you can use the very useful Code Snippets plugin to add this code to your WordPress installation. We’ve outlined how to use Code Snippets in our Knowledge Base article [here](https://www.liquidweb.com/software/kadence/knowledge-base/advanced/how-to-add-a-custom-filter-or-function-with-code-snippets/). You can download the Code Snippets plugin by going to your WordPress admin and clicking **Plugins > Add New**. Then search for Code Snippets.

![](https://www.liquidweb.com/wp-content/uploads/2021/12/code-snippets-1024x647.png)*Install Code Snippets from the WordPress plugin directory.*Once you’ve got Code Snippets installed, simply go to Snippets and create a new snippet, paste in the code above, add a description, and save your snippet. You’ve activated blocks for WooCommerce.

![](https://www.liquidweb.com/wp-content/uploads/2021/12/gutenberg-product-descriptions-1024x698.png)
### Theme Functions File

Alternatively, you can add it to your theme function file. We don’t recommend doing this, as your theme functions file will be overwritten in the future when you update your theme. As well, you can often break your site much more easily when you use the theme functions file. We share this as an option more as a cautionary tale, but it will work. Head to your **Appearance > Theme Editor** and find your active theme’s functions.php file. Paste the code above into the bottom of the functions.php file.

We recommend using a child theme and making a site backup if you choose to use this method of adding the code to your site.

## Convert classic product descriptions to blocks

If you already have some products in your WooCommerce store, you’ll need to convert your existing content to blocks in order to use the block editor for editing that content. You’ll see that your existing product description is listed as “Classic” editor content. Click on **Classic** to see a dialog that will allow you to “**Convert to Blocks**” Save your product description and add to it, customizing with the block editor.

![](https://www.liquidweb.com/wp-content/uploads/2021/12/product-classic-editor-1024x692.png)
## Using the block editor with WooCommerce product design

Once you’ve added the above code to your WordPress site, you now have unlocked all of the features of the block editor for product description design.

It also means that if you’re using Kadence and Kadence Blocks, you can now use any of the features for Kadence Blocks in your WooCommerce product descriptions.

Note that this will only affect the general area where product descriptions are located. But within that space, you can now access any of the Kadence Design Library and add new looks to your product descriptions.

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

