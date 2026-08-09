# Code Snippets

*Category from WooCommerce Smart Coupons documentation*

---

## Code Snippets

**Source:** [https://woocommerce.com/document/smart-coupons/code-snippets/](https://woocommerce.com/document/smart-coupons/code-snippets/)

# Code Snippets

			Smart Coupons provide a powerful, “all-in-one” solution for gift certificates, store credits, discount coupons, and vouchers.

The below code snippets help you customize and tailor Smart Coupons according to your needs. You can try formatting the coupon code to generate only numerical values and avoid certain characters. You can also try small tweaks to the “Send coupons to…” form on the checkout page, and much more.

**Note**: This is a Developer level doc. If you are unfamiliar with code/templates and are resolving potential conflicts, you may need to hire a developer for assistance.

Here are some code snippets listed to make your task easier with the [Smart Coupons](https://woocommerce.com/products/smart-coupons/) plugin. To safely add code snippets, you can follow the blog [here](https://woocommerce.com/posts/properly-add-woocommerce-custom-code/).

## 1. Exclude characters from Auto generated coupon codes / Gift Cards / Gift Certificates

[↑ Back to top](#doc-title)

There would be instances where users would not be able to apply the coupon code properly due to distinguishing certain alphabets and numbers. Using the following code snippet, you can remove certain alphabets and numbers that could be avoided when auto generating coupons using the Smart Coupons plugin. Insert the following code snippet into your store to exclude characters such as ‘i’, ‘I’, ‘l’, ‘L’, ‘o’, ‘O’, ‘0’, 0.

```
/**
 * Function to modify the allowed characters for code that Smart Coupons is generating
 * 
 * @author StoreApps (https://woocommerce.com/my-account/create-a-ticket/)
 *
 * @param array $chars The allowed characters.
 * @param mixed $args Additional arguments.
 * @return array
 */
function storeapps_coupon_code_allowed_characters( $chars = '', $args = array() ) {
    $chars = array_values( array_filter( $chars, function ( $char ) {
        return ( ! in_array( $char, array( 'i', 'I', 'l', 'L', 'o', 'O', '0', 0 ), true ) );
    } ) );
    return $chars;
}
function storeapps_handle_smart_coupons_hooks() {
    add_filter( 'wc_sc_coupon_code_allowed_characters', 'storeapps_coupon_code_allowed_characters', 11, 2 );
}
add_action( 'wp_loaded', 'storeapps_handle_smart_coupons_hooks' );
```

## 2. Auto generate codes / Gift Cards / Gift Certificates with only numericals

[↑ Back to top](#doc-title)

If you are looking for auto generating coupons with only numericals and avoiding alphabets, then the following code snippet allows you to auto generate only numbers on the coupon code that gets generated.

```
/**
 * Function to modify the allowed characters for code that Smart Coupons is generating
 * 
 * @author StoreApps (https://woocommerce.com/my-account/create-a-ticket/)
 *
 * @param array $chars The allowed characters.
 * @param mixed $args Additional arguments.
 * @return array
 */
function storeapps_coupon_code_allow_numbers( $chars = array(), $args = array() ) {
    return range( 0, 9 );
}
function storeapps_handle_smart_coupons_hooks() {
    add_filter( 'wc_sc_coupon_code_allowed_characters', 'storeapps_coupon_code_allow_numbers', 11, 2 );
}
add_action( 'wp_loaded', 'storeapps_handle_smart_coupons_hooks' );
```

## 3. Hide “Send to me” from the “Send Coupon to…” form on the checkout page

[↑ Back to top](#doc-title)

When customers purchase a gift card or any product that gives a coupon for the next purchase, they will receive options to send the coupon to themself or to someone else. The following code snippet allows to hide the “Send to me” option from the “Send Coupons to…” form on the checkout page.

```
/**
 * Hide 'Send to me' option from coupon receiver detail form on the Checkout page
 * 
 * @author StoreApps (https://woocommerce.com/my-account/create-a-ticket/)
 */
function storeapps_hide_send_to_me_option() {
	if ( is_checkout() ) {?>
		<script type="text/javascript">
			jQuery('#hide_form').parent().hide();
			jQuery('#show_form').prop("checked", true);
			jQuery('.single_multi_list').css('display','block');
			jQuery('.wc_sc_schedule_gift_sending_wrapper').addClass('show');
			jQuery('.gift-certificate-receiver-detail-form').css('display','block');
		</script>
		<?php
	}
}
add_action( 'wp_footer', 'storeapps_hide_send_to_me_option' );
```

## 4. Modify the purchase limit of the Gift Card

[↑ Back to top](#doc-title)

When selling gift cards/gift vouchers through the WooCommerce store using the Smart Coupons plugin, Gift card of any amount could have a maximum limit cap set so that gift cards cannot be purchased more than this limit. This code helps you set a maximum purchase limit for a gift card of any amount.

```
/**
 * Function to modify input element for purchase credit
 * 
 * @author StoreApps (https://woocommerce.com/my-account/create-a-ticket/)
 *
 * @param array $input The input element.
 * @param mixed $args Additional arguments.
 * @return array
 */
function storeapps_wc_sc_call_for_credit_template_input( $input = array(), $args = array() ) {
    $input['max'] = '2000'; //adjust this number according to your need
    return $input;
}
add_filter( 'wc_sc_call_for_credit_template_input', 'storeapps_wc_sc_call_for_credit_template_input', 99, 2 );
```

To set a minimum purchase limit, you can replace the line 
```
$input['max'] = '2000';
```

 with 
```
$input['min'] = '10'
```

;

## 5. Modify the URL of the coupons received by email

[↑ Back to top](#doc-title)

After the purchase of a Gift card/Gift voucher, a coupon code is generated and sent to the email so that a user can click on it and be directed to your WooCommerce store. By default, this takes the user to the shop page, but if you would like to direct them to one of your custom pages, such as a product page, then this code will help you modify the URL of the coupon that you have received in your email.

```
/**
 * Function to change coupon url landing page
 * 
 * @author StoreApps (https://woocommerce.com/my-account/create-a-ticket/)
 * 
 * @param array $coupon_target Current URL.
 * @param mixed $coupon The coupon object.
 * @return string
 */
function storeapps_sc_coupon_url_in_email( $coupon_target = '', $coupon = null ) {
    $url           = remove_query_arg( array( 'coupon-code', 'sc-page' ), $coupon_target );
    $coupon_code   = ( is_object( $coupon ) && is_callable( array( $coupon, 'get_code' ) ) ) ? $coupon->get_code() : '';
    $page_id       = '<enter the page id here>';
    $coupon_target = add_query_arg( array( 'coupon-code' => $coupon_code, 'sc-page' => $page_id ), $url );
    return $coupon_target;
}
add_filter( 'sc_coupon_url_in_email', 'storeapps_sc_coupon_url_in_email', 99, 2 );
```

## 6. Remove the store credit balance from the order email

[↑ Back to top](#doc-title)

If a store credit or gift voucher is used in an order and there is a remaining balance on that voucher, it will be shown as a balance on the order email. This code will help you remove the store credit balance from the order email.

```
/**
 * Function to remove store credit balance from order email
 * 
 * @author StoreApps (https://woocommerce.com/my-account/create-a-ticket/)
 */
function storeapps_handle_smart_coupons_hooks() {
    if ( ! class_exists( 'WC_SC_Order_Fields' ) && file_exists( WP_PLUGIN_DIR . '/woocommerce-smart-coupons/includes/class-wc-sc-order-fields.php' ) ) {
        include_once WP_PLUGIN_DIR . '/woocommerce-smart-coupons/includes/class-wc-sc-order-fields.php';
    }
    if ( class_exists( 'WC_SC_Order_Fields' ) ) {
        $wc_sc_order_fields = WC_SC_Order_Fields::get_instance();
        if ( has_action( 'woocommerce_email_after_order_table', array( $wc_sc_order_fields, 'show_store_credit_balance' ) ) ) {
            remove_action( 'woocommerce_email_after_order_table', array( $wc_sc_order_fields, 'show_store_credit_balance' ) );
        }
    }
}
add_action( 'wp_loaded', 'storeapps_handle_smart_coupons_hooks', 9999 );
```

## 7. Validate custom order status to Auto generate or validate coupons

[↑ Back to top](#doc-title)

WooCommerce order statuses can be grouped into 2 categories: **Paid order statuses (Processing & Completed)** & **Unpaid order statuses (On-hold, Failed, Refunded, Cancelled, Draft, Pending payment)**.

By default, Smart Coupons looks into the Paid order statuses, such as **Processing & Completed** for auto-generation of coupons & validation in case of a new user coupon.

Here are a few cases where this code could be useful for you. The new user only feature validates orders that are in Paid statuses and considers any other custom status not valid and hence applies the coupon if there are any prior orders with any custom statuses.

Another case would be auto generating coupons for custom order statuses such as shipped or delivered status of the order.

```
add_filter('woocommerce_order_is_paid_statuses', 'add_sc_valid_order_status_');
function add_sc_valid_order_status_( $valid_paid_status = array() ){
	$valid_status = array_merge($valid_paid_status, array('shipped', 'delivered')); // add your custom order statuses that can be considered as paid statuses, here
	return $valid_status;
}
```

Once you have added the above code snippet, navigate to your “**WordPress Dashboard > WooCommerce > Settings > Smart Coupons** tab: **Valid order status for auto-generating coupon**” search for the custom order statuses and add it there. **Save** the settings.

After this, the support for custom order statuses with Smart Coupons will be completed.

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

