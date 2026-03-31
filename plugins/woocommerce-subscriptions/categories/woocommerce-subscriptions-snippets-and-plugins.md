# Woocommerce Subscriptions Snippets And Plugins

*Category from WooCommerce Subscriptions documentation*

---

## WooCommerce Subscriptions Snippets And Plugins

**Source:** [https://woocommerce.com/document/subscriptions/woocommerce-subscriptions-snippets-and-plugins/](https://woocommerce.com/document/subscriptions/woocommerce-subscriptions-snippets-and-plugins/)

# WooCommerce Subscriptions Snippets And Plugins

			You can use the snippets from this page to customize the appearance and functionality of WooCommerce Subscriptions.

To use a snippet, you can copy the code to your site or download the linked file. We would recommend adding these snippets into a separate [snippet plugin](https://wordpress.org/plugins/search/snippets/) rather than modifying your site’s theme files or functions.php file.

**Scope of support:**

We are unable to provide support for customizations under our**Support Policy**. If you need to customize a snippet or extend its functionality, we recommend working with a [Woo Agency Partner](https://woocommerce.com/development-services/) or a WooCommerce developer on [Codeable](https://www.codeable.io/partners/woocommerce/?ref=qGefA6#tiers).

## Customizing Subscriptions My Account Functionality

[↑ Back to top](#doc-title)

### Add Pay Action

[↑ Back to top](#doc-title)

This code ensures that the Pay button appears directly next to a subscription that is pending payment on the **My Account > View Subscription** page. By doing this, it saves users from having to scroll down to find the corresponding order and makes it easier for them to complete payment.

- [Add Pay Action To A Subscription With A Pending Payment](https://github.com/Prospress/woocommerce-subscriptions-add-pay-action)

### One-Time Confirmation Of Subscription Cancellation

[↑ Back to top](#doc-title)

This snippet adds a confirmation dialog when a customer attempts to cancel their subscription, asking if they’re sure before proceeding. It helps prevent accidental cancellations and can be toggled on or off in **WooCommerce > Settings > Subscriptions**.

- [Add A One-Time Confirmation Of Subscription Cancellation](https://github.com/woocommerce/woocommerce-subscriptions-cancel-subscription-confirmation)

### Delete Payment Method Confirmation

[↑ Back to top](#doc-title)

This snippet shows a confirmation dialog when a customer removes a saved payment method, reminding them that any subscriptions using that method will also need to be updated. It can help reduce failed payments by prompting users to take action before deleting the payment method.

- [Add A Confirmation Dialog For Customers Deleting A Payment Method](https://github.com/woocommerce/woocommerce-subscriptions-delete-payment-method-confirmation)

### Hide The “Payment Methods” Tab From The “My Account” Page

[↑ Back to top](#doc-title)

This snippet removes the Payment Methods tab from the My Account area in WooCommerce. It’s useful when you want to prevent customers from managing saved payment methods directly through their account dashboard.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | add_filter( 'woocommerce_account_menu_items', 'remove_payment_methods_tab_my_account', 999 ); |
|  |  |
|  | function remove_payment_methods_tab_my_account( $items ) { |
|  | unset($items['payment-methods']); |
|  | return $items; |
|  | } |
      [view raw](https://gist.github.com/NickGreen/bd8d3121e3ec2bb5f5fe823a4541bb40/raw/368673a3b24a440f5a639f87eaaf06c950f8abb8/hide-payment-methods-tab.php)
        [hide-payment-methods-tab.php](https://gist.github.com/NickGreen/bd8d3121e3ec2bb5f5fe823a4541bb40#file-hide-payment-methods-tab-php)
        hosted with ❤ by [GitHub](https://github.com)

### Hide The ‘Cancel’ Button From The My Account Page With Subscriptions

[↑ Back to top](#doc-title)

This snippet removes the Cancel button from the actions listed on a subscription in the **My Account > View Subscription** page. It prevents customers from cancelling their own subscriptions while still allowing other actions to be displayed.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function eg_remove_my_subscriptions_button( $actions, $subscription ) { |
|  | foreach ( $actions as $action_key => $action ) { |
|  | switch ( $action_key ) { |
|  | case 'cancel':			// Hide "Cancel" button on subscriptions that are "active" or "on-hold"? |
|  | unset( $actions[ $action_key ] ); |
|  | break; |
|  | default: |
|  | error_log( '– $action = ' . print_r( $action, true ) ); |
|  | break; |
|  | } |
|  | } |
|  | return $actions; |
|  | } |
|  | add_filter( 'wcs_view_subscription_actions', 'eg_remove_my_subscriptions_button', 100, 2 ); |
      [view raw](https://gist.github.com/jrick1229/c40670db94634f1f3e9688e2c4578422/raw/9c5ff262b8a514069cba2ce3d01c5fddf58ca936/hide_cancel_button.php)
        [hide_cancel_button.php](https://gist.github.com/jrick1229/c40670db94634f1f3e9688e2c4578422#file-hide_cancel_button-php)
        hosted with ❤ by [GitHub](https://github.com)

### Add A ‘Change Payment’ Button To The My Account Page With Subscriptions

[↑ Back to top](#doc-title)

This snippet displays a Change Payment button directly on the **My Account > Subscriptions** page if it’s available for the subscription. It makes it easier for customers to update their payment method without navigating into the subscription details.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function wcs_add_change_payment_button_to_subscriptions_page($subscription) { |
|  | $actions = wcs_get_all_user_actions_for_subscription( $subscription, get_current_user_id() ); |
|  | if(!empty($actions)){ |
|  | foreach ( $actions as $key => $action ){ |
|  | if(strtolower($action['name']) == "change payment"){ |
|  | $changePaymentLink = esc_url( $action['url'] ); |
|  | echo "<a href='$changePaymentLink' class='button change_payment_method'>".$action['name']."</a>"; |
|  | } |
|  | } |
|  | } |
|  | } |
|  | add_action( 'woocommerce_my_subscriptions_actions', 'wcs_add_change_payment_button_to_subscriptions_page', 10 ); |
      [view raw](https://gist.github.com/jrick1229/53fa3eef5186a37cea388d61418760e5/raw/5da1c1363ee07a4c6692e9f95bd1609c901b02a0/wcs_add_change_payment_button_to_subscriptions_page.php)
        [wcs_add_change_payment_button_to_subscriptions_page.php](https://gist.github.com/jrick1229/53fa3eef5186a37cea388d61418760e5#file-wcs_add_change_payment_button_to_subscriptions_page-php)
        hosted with ❤ by [GitHub](https://github.com)

### Add A ‘Renew Now’ Button To The My Account Page With Subscriptions

[↑ Back to top](#doc-title)

This adds a Renew Now button directly to the **My Account > Subscriptions** page when early renewal is available. It allows customers to manually renew their subscription without needing to view the subscription details first.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function wcs_add_renew_now_button_to_subscriptions_page($subscription) { |
|  | $actions = wcs_get_all_user_actions_for_subscription( $subscription, get_current_user_id() ); |
|  | if(!empty($actions)){ |
|  | foreach ( $actions as $key => $action ){ |
|  | if(strtolower($action['name']) == "renew now"){ |
|  | $renewNowLink = esc_url( $action['url'] ); |
|  | echo "<a href='$renewNowLink' class='button subscription_renewal_early'>".$action['name']."</a>"; |
|  | } |
|  | } |
|  | } |
|  | } |
|  | add_action( 'woocommerce_my_subscriptions_actions', 'wcs_add_renew_now_button_to_subscriptions_page', 10 ); |
      [view raw](https://gist.github.com/jrick1229/c5b32eb3681248bfc3af7bfcee72bbbf/raw/071743b956926aecd881b4579d5cb4b4e47c4fa8/wcs_add_renew_now_button_to_subscriptions_page.php)
        [wcs_add_renew_now_button_to_subscriptions_page.php](https://gist.github.com/jrick1229/c5b32eb3681248bfc3af7bfcee72bbbf#file-wcs_add_renew_now_button_to_subscriptions_page-php)
        hosted with ❤ by [GitHub](https://github.com)

### Add A ‘Cancel’ Button To The My Account Page

[↑ Back to top](#doc-title)

This snippet adds a Cancel button directly to the **My Account > Subscriptions** page when cancellation is allowed. It gives customers a quicker way to cancel their subscription without needing to open the full subscription details.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function wcs_add_cancel_button_on_subscriptions_page($subscription) { |
|  | $actions = wcs_get_all_user_actions_for_subscription( $subscription, get_current_user_id() ); |
|  | if(!empty($actions)){ |
|  | foreach ( $actions as $key => $action ){ |
|  | if(strtolower($action['name']) == "cancel"){ |
|  | $cancelLink = esc_url( $action['url'] ); |
|  | echo "<a href='$cancelLink' class='button cancel'>".$action['name']."</a>"; |
|  | } |
|  | } |
|  | } |
|  | } |
|  | add_action( 'woocommerce_my_subscriptions_actions', 'wcs_add_cancel_button_on_subscriptions_page', 10 ); |
      [view raw](https://gist.github.com/jrick1229/2c2bc30eaa430e978ebb9ca4a919b736/raw/b3c18465135b7ec248bf67895dc187fc76209f93/wcs_add_cancel_button_on_subscriptions_page.php)
        [wcs_add_cancel_button_on_subscriptions_page.php](https://gist.github.com/jrick1229/2c2bc30eaa430e978ebb9ca4a919b736#file-wcs_add_cancel_button_on_subscriptions_page-php)
        hosted with ❤ by [GitHub](https://github.com)

### Hide Specific Action Buttons Based On Subscription Product

[↑ Back to top](#doc-title)

This snippet conditionally hides selected action buttons (like Change Payment Method) from the **My Account > View Subscription** page, but only for subscriptions that include a specific product (identified by its product ID). For all other subscriptions, the full set of actions remains available.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function eg_remove_my_subscriptions_button( $actions, $subscription ) { |
|  | $product_id = 228; // Update with correct product ID |
|  | if ( $subscription->has_product( $product_id ) ) { |
|  | foreach ( $actions as $action_key => $action ) { |
|  | switch ( $action_key ) { |
|  | case 'change_payment_method':    // Hide |
|  | //		case 'change_address':           // Hide |
|  | //		case 'switch':			 // Hide |
|  | //		case 'resubscribe':		 // Hide |
|  | //		case 'pay':			 // Hide |
|  | //		case 'reactivate':		 // Hide |
|  | //		case 'cancel':			 // Hide |
|  | unset( $actions[ $action_key ] ); |
|  | break; |
|  | default: |
|  | error_log( '– $action = ' . print_r( $action, true ) ); |
|  | break; |
|  | } |
|  | } |
|  | return $actions; |
|  | } else { |
|  | foreach ( $actions as $action_key => $action ) { |
|  | switch ( $action_key ) { |
|  | case 'change_payment_method':    // Show |
|  | case 'change_address':           // Show |
|  | case 'switch':			 // Show |
|  | case 'resubscribe':		 // Show |
|  | case 'pay':			 // Show |
|  | case 'reactivate':		 // Show |
|  | case 'cancel':			 // Show |
|  | // unset( $actions[ $action_key ] ); |
|  | break; |
|  | default: |
|  | error_log( '– $action = ' . print_r( $action, true ) ); |
|  | break; |
|  | } |
|  | } |
|  | return $actions; |
|  | } |
|  | } |
|  | add_filter( 'wcs_view_subscription_actions', 'eg_remove_my_subscriptions_button', 100, 2 ); |
      [view raw](https://gist.github.com/jrick1229/928151c762848c8552b49aa09c67e753/raw/7cffc5c4bca4d30b1059bd533283e652bcee1465/Hide%20action%20buttons%20for%20specific%20product%20ID's)
        [Hide action buttons for specific product ID's](https://gist.github.com/jrick1229/928151c762848c8552b49aa09c67e753#file-hide-action-buttons-for-specific-product-id-s)
        hosted with ❤ by [GitHub](https://github.com)

### Prevent Subscription Suspension Based On Product

[↑ Back to top](#doc-title)

This snippet disables the option for customers to suspend (put on hold) subscriptions that include specific products, based on their product IDs. If a subscription contains any of the listed products, the Suspend action will no longer be available in the **My Account** area.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | function prevent_suspension_per_product( $user_can_suspend, $subscription ) { |
| --- | --- |
|  | if ( ! $user_can_suspend ) { |
|  | return $user_can_suspend; |
|  | } |
|  |  |
|  | $product_ids = array(438,128,2,345); // Change to whatever product ids you want to prevent suspension for |
|  |  |
|  | foreach ( $product_ids as $product_id ) { |
|  | if ( $subscription->has_product( $product_id ) ) { |
|  | $user_can_suspend = false; |
|  | break; |
|  | } |
|  | } |
|  | return $user_can_suspend; |
|  | } |
|  | add_filter( 'wcs_can_user_put_subscription_on_hold', 'prevent_suspension_per_product', 15, 2 ); |
      [view raw](https://gist.github.com/NickGreen/cb015c8d95676903d78108ef67b6cbf4/raw/01ad4fd831efcdfc1df97e5e8fcb81be8f49da98/prevent_suspension_per_product.php)
        [prevent_suspension_per_product.php](https://gist.github.com/NickGreen/cb015c8d95676903d78108ef67b6cbf4#file-prevent_suspension_per_product-php)
        hosted with ❤ by [GitHub](https://github.com)

### Hide The ‘Cancel’ Button During The Trial Period

[↑ Back to top](#doc-title)

This snippet hides the **Cancel** button on the **My Account > View Subscription** page while a subscription is still in its trial period. Once the trial ends, the Cancel button becomes visible again, allowing users to manage their subscription normally.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function wcs_remove_cancel_button_in_trial ( $actions, $subscription ) { |
|  |  |
|  | $current_timestamp = current_time( 'timestamp', true ); |
|  | $trial_end_timestamp  = $subscription->get_time( 'trial_end' ); |
|  |  |
|  | if ( $current_timestamp > $trial_end_timestamp ) { |
|  | return $actions; |
|  | } else { |
|  | // Hide "Cancel" button. |
|  | unset( $actions['cancel'] ); |
|  | return $actions; |
|  | } |
|  |  |
|  | } |
|  | add_filter( 'wcs_view_subscription_actions', 'wcs_remove_cancel_button_in_trial', 100, 2 ); |
      [view raw](https://gist.github.com/jrick1229/94f42e635b313e81bcef28e291e4d6ac/raw/45d6ea7c815dd4528ab88460f73ed030eabe8d1d/wcs_remove_cancel_button_in_trial.php)
        [wcs_remove_cancel_button_in_trial.php](https://gist.github.com/jrick1229/94f42e635b313e81bcef28e291e4d6ac#file-wcs_remove_cancel_button_in_trial-php)
        hosted with ❤ by [GitHub](https://github.com)

### Hide The ‘Cancel’ Button When A Subscription Has An End Date

[↑ Back to top](#doc-title)

This snippet removes the Cancel button from the **My Account > View Subscription** page if the subscription has a set end date and is still active. It helps prevent users from cancelling subscriptions that are already scheduled to end automatically.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | /** |
|  | * Remove the "cancel" button. |
|  | * |
|  | * @param array           $actions      Array of action buttons. |
|  | * @param WC_Subscription $subscription The subscription object. |
|  | * |
|  | * @return array The filtered array of actions. |
|  | */ |
|  |  |
|  | function wcs_remove_cancel_button_end_date ( $actions, $subscription ) { |
|  | if ( $subscription->get_time( 'end' ) === 0 || $next_payment_timestamp > $subscription->get_time( 'end' ) ) { |
|  | return $actions; |
|  | } |
|  | // Hide "Cancel" button. |
|  | unset( $actions['cancel'] ); |
|  | return $actions; |
|  | } |
|  | add_filter( 'wcs_view_subscription_actions', 'wcs_remove_cancel_button_end_date', 100, 2 ); |
      [view raw](https://gist.github.com/jrick1229/22b99e6961566fe26cc61e0b59f6ee0f/raw/64aaeef00daa44ecde1a7dc5d59f2468acd4283f/wcs_remove_cancel_button_end_date.php)
        [wcs_remove_cancel_button_end_date.php](https://gist.github.com/jrick1229/22b99e6961566fe26cc61e0b59f6ee0f#file-wcs_remove_cancel_button_end_date-php)
        hosted with ❤ by [GitHub](https://github.com)

## WooCommerce Subscriptions Frontend Customization

[↑ Back to top](#doc-title)

### Customize Price Strings Displayed For Subscription Products

[↑ Back to top](#doc-title)

This mini-extension for WooCommerce Subscriptions lets you modify the default price text shown on product pages, including for simple, variable, and subscription products. It gives you full control over how prices appear, including “From” prices and those for bookable products.

- [Custom Price String For WooCommerce Subscriptions](https://github.com/woocommerce/woocommerce-subscriptions-custom-price-string)

### Automatically Apply A Coupon To Resubscribe Carts

[↑ Back to top](#doc-title)

This plugin auto-applies a specific coupon to every resubscribe cart by defining it with the 
```
WOOCOMMERCE_SUBSCRIPTIONS_AUTO_RESUBSCRIBE_COUPON
```

 constant. While it’s applied during resubscription, the coupon itself isn’t limited to those carts and can be used elsewhere unless additional restrictions are set.

- [Automatically Apply A Coupon To Resubscribe Carts](https://github.com/woocommerce/woocommerce-subscriptions-auto-add-resubscribe-coupon)

### Hide Products From A Specific Category On The Shop Page

[↑ Back to top](#doc-title)

This snippet prevents products in a designated category (e.g., 
```
not-displayed
```

) from appearing on the main Shop page. It’s useful for keeping certain products visible only through direct links or specific collections, rather than in general browsing.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | /** |
|  | * Exclude products from a particular category on the shop page |
|  | */ |
|  | function wcs_hide_unwanted_category( $q ) { |
|  | $tax_query = (array) $q->get( 'tax_query' ); |
|  | $tax_query[] = array( |
|  | 'taxonomy' => 'product_cat', |
|  | 'field' => 'slug', |
|  | 'terms' => array( 'not-displayed' ), // Don't display products in the clothing category on the shop page. |
|  | 'operator' => 'NOT IN' |
|  | ); |
|  | $q->set( 'tax_query', $tax_query ); |
|  | } |
|  | add_action( 'woocommerce_product_query', 'wcs_hide_unwanted_category' ); |
      [view raw](https://gist.github.com/jrick1229/98fee7a4ff3ceef2b20c708b408f2e0e/raw/87fd1fa199c1015c4ffa7f7ef1623d9779d4a533/wcs_hide_unwanted_category.php)
        [wcs_hide_unwanted_category.php](https://gist.github.com/jrick1229/98fee7a4ff3ceef2b20c708b408f2e0e#file-wcs_hide_unwanted_category-php)
        hosted with ❤ by [GitHub](https://github.com)

### Redirect Subscription Product Add-To-Cart To The Cart Page

[↑ Back to top](#doc-title)

This snippet redirects customers to the **Cart** page immediately after adding a subscription product to their cart. It replaces the default behavior (usually staying on the product page or going to a custom URL) to streamline the checkout process for subscription purchases.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function wcs_redirect_to_cart( $url ) { |
|  | // If product is of the subscription type |
|  | if ( is_numeric( $_REQUEST['add-to-cart'] ) && WC_Subscriptions_Product::is_subscription( (int) $_REQUEST['add-to-cart'] ) ) { |
|  | // Redirect to cart instead |
|  | $url = WC()->cart->get_cart_url(); |
|  | } |
|  | return $url; |
|  | } |
|  | add_filter( 'woocommerce_add_to_cart_redirect', 'wcs_redirect_to_cart', 20 ); |
      [view raw](https://gist.github.com/jrick1229/c766b1d8f8f5829722dd5413a53f2476/raw/a1ea537b622586508c9f7ea1c761600da2b05a95/wcs_redirect_to_cart.php)
        [wcs_redirect_to_cart.php](https://gist.github.com/jrick1229/c766b1d8f8f5829722dd5413a53f2476#file-wcs_redirect_to_cart-php)
        hosted with ❤ by [GitHub](https://github.com)

### Rename Billing Section When No Payment Is Needed At Checkout

[↑ Back to top](#doc-title)

This changes the **Billing Details** heading to **Account Info** on the checkout page, but only when no payment is required (e.g., free trial or free product). It helps tailor the checkout experience to better reflect what’s actually being collected from the customer.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function wcs_free_checkout_fields() { |
|  |  |
|  | // Bail we're not at checkout, or if we're at checkout but payment is needed |
|  | if ( function_exists( 'is_checkout' ) && ( ! is_checkout() || ( is_checkout() && WC()->cart->needs_payment() ) ) ) { |
|  | return; |
|  | } |
|  |  |
|  | // Change string here |
|  | function wc_billing_field_strings( $translated_text, $text, $domain ) { |
|  | switch ( $translated_text ) { |
|  | case 'Billing details' : |
|  | $translated_text = __( 'Account Info', 'woocommerce' ); |
|  | break; |
|  | } |
|  | return $translated_text; |
|  | } |
|  | add_filter( 'gettext', 'wc_billing_field_strings', 20, 3 ); |
|  |  |
|  | } |
|  | add_action( 'wp', 'wcs_free_checkout_fields' ); |
      [view raw](https://gist.github.com/jrick1229/985d4a91f3f41df7855ab0d960429583/raw/0b8e98d2a504a09745f0fb3c3f848616d5c4ad4c/wcs_change_billing_details_string.php)
        [wcs_change_billing_details_string.php](https://gist.github.com/jrick1229/985d4a91f3f41df7855ab0d960429583#file-wcs_change_billing_details_string-php)
        hosted with ❤ by [GitHub](https://github.com)

### Redirect Add-To-Cart To A Custom Page

[↑ Back to top](#doc-title)

This snippet redirects customers to a specific page (by page ID) after they add a product to their cart. It overrides the default WooCommerce add-to-cart redirect and can be used to send users to a custom landing, upsell, or info page.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function custom_a2c( $url ) { |
|  | $url = get_permalink( 121 ); // URL to redirect to (121 is the page ID here) |
|  | return $url; |
|  | } |
|  | add_filter( 'woocommerce_add_to_cart_redirect', 'custom_a2c' ); |
      [view raw](https://gist.github.com/jrick1229/0df43aa406b9d1797ec9135682a75624/raw/b73ff39120a37d506758f9d101f2605fd86eb58c/custom_a2c.php)
        [custom_a2c.php](https://gist.github.com/jrick1229/0df43aa406b9d1797ec9135682a75624#file-custom_a2c-php)
        hosted with ❤ by [GitHub](https://github.com)

### Adjust frequency string in block checkout to remove ordinals

[↑ Back to top](#doc-title)

This snippet changes how the subscription frequency is shown at checkout, from ordinals to a non-ordinal number. This means that a string format including an ordinal such as “Recurring total every 3rd day” becomes instead “Recurring total every 3 days”.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  | /** |
|  | * Plugin Name: Customize Subscriptions Recurring Cost Text (Checkout Block) |
|  | * Description: Example of a single-file plugin, not requiring a build step, that can be used to modify the subtotal price in the checkout page. For example purposes only. |
|  | */ |
|  |  |
|  | add_action( |
|  | 'wp_footer', |
|  | function () { |
|  | global $post; |
|  |  |
|  | // Only run on cart/checkout pages |
|  | if ( ! is_cart() && ! is_checkout() ) { |
|  | return; |
|  | } |
|  |  |
|  | // Check if WooCommerce Blocks is available |
|  | if ( ! function_exists( 'has_block' ) ) { |
|  | return; |
|  | } |
|  |  |
|  | // Verify we have the checkout block. |
|  | if ( ! $post || ( ! has_block( 'woocommerce/cart', $post ) && ! has_block( 'woocommerce/checkout', $post ) ) ) { |
|  | return; |
|  | } |
|  |  |
|  | echo ' |
|  | <script type="text/javascript"> |
|  | ( function () { |
|  | if ( typeof wp === "undefined" || typeof wp.hooks === "undefined" ) { |
|  | return; |
|  | } |
|  |  |
|  | wp.hooks.addFilter( |
|  | "i18n.gettext", |
|  | "my-custom-subscriptions-text", |
|  | function( translation, text, domain ) { |
|  | if ( domain !== "woocommerce-subscriptions" ) { |
|  | return translation; |
|  | } |
|  |  |
|  | return text.indexOf( "Recurring total every" ) === 0 |
|  | ? "Foo bar baz" |
|  | : translation; |
|  | } |
|  | ); |
|  | })(); |
|  | </script> |
|  | '; |
|  | }, |
|  | 100 |
|  | ); |
      [view raw](https://gist.github.com/barryhughes/d452dd5cb6a5e54304b03b31fb250cdb/raw/81f360e7a200eb312361e29bf372b585c4b75c13/woocommerce-subscriptions.block-checkout.customize-string.php)
        [woocommerce-subscriptions.block-checkout.customize-string.php](https://gist.github.com/barryhughes/d452dd5cb6a5e54304b03b31fb250cdb#file-woocommerce-subscriptions-block-checkout-customize-string-php)
        hosted with ❤ by [GitHub](https://github.com)

## Subscription Management For Store Admins

[↑ Back to top](#doc-title)

### Cancel Subscription After All Failed Payment Retry Attempts

[↑ Back to top](#doc-title)

This plugin automatically cancels both the order and its related subscription if all automatic payment retry attempts fail. It goes beyond WooCommerce Subscriptions’ default behavior—where subscriptions are simply placed on-hold – by ensuring they’re fully cancelled after the retry process is exhausted.

- [Cancel Subscription After All Failed Payment Retry Attempts](https://github.com/woocommerce/woocommerce-subscriptions-cancel-after-retry)

### Skip Pending Cancellation Status When Customer Cancels

[↑ Back to top](#doc-title)

This plugin changes the default cancellation flow by immediately setting a subscription’s status to Cancelled when a customer cancels it from their My Account page. It bypasses the usual Pending Cancellation status used by WooCommerce Subscriptions.

- [Skip Pending Cancellation Status When Customer Cancels](https://github.com/woocommerce/woocommerce-subscriptions-skip-pending-cancel)

### Cancel Subscription When Latest Order Is Fully Refunded

[↑ Back to top](#doc-title)

This plugin automatically cancels a subscription if its parent or most recent renewal order is fully refunded. The subscription is immediately set to Cancelled without passing through the Pending Cancellation status. Refunds on older orders will not trigger cancellation.

- [Cancel Subscription When Latest Order Is Fully Refunded](https://github.com/woocommerce/woocommerce-subscriptions-cancel-on-refund)

### Create Coupons That Only Apply To Manual Renewals

[↑ Back to top](#doc-title)

This plugin lets you create discount coupons that are valid only for manual subscription renewals – not for initial sign-ups. Store managers can configure eligible coupon codes via the settings screen, a constant, or a filter, and while they can apply them freely, customers can only use them when paying for a renewal order.

- [Create Coupons That Only Apply To Manual Renewals](https://github.com/woocommerce/woocommerce-subscriptions-renewal-only-coupon)

### Limit Subscription Products To A Fixed Number Of Active Subscriptions

[↑ Back to top](#doc-title)

This plugin restricts subscription products to a set number of active (unended) subscriptions across the site. It’s useful for cases where products should only be subscribed to a limited number of times—such as one-to-one sponsorships or exclusive memberships. Once the limit is reached, the product becomes unpurchasable on the front end, while still allowing manual renewals and failed payment recoveries to proceed normally.

- [Limit Subscription Products To A Fixed Number Of Active Subscriptions](https://github.com/woocommerce/woocommerce-subscriptions-restrict-product)

### Preserve Original Billing Schedule After Late Payments

[↑ Back to top](#doc-title)

This plugin ensures that a subscription’s next renewal date is always based on the original scheduled payment date, not the actual date the payment was made. This keeps the billing cycle consistent – even if a customer pays late – so the subscription always renews on its intended schedule (e.g., the 1st of each month), rather than shifting forward.

- [Preserve Original Billing Schedule After Late Payments](https://github.com/woocommerce/woocommerce-subscriptions-preserve-billing-schedule?tab=readme-ov-file)

### Allow Early Renewal For Synchronized Subscriptions

[↑ Back to top](#doc-title)

This plugin enables early renewal for subscriptions that include synchronized products in WooCommerce Subscriptions. It gives customers the flexibility to renew ahead of schedule, even when their subscription has been aligned to a specific billing date.

- [Allow Early Renewal For Synchronized Subscriptions](https://github.com/woocommerce/woocommerce-subscriptions-allow-synced-products-early-renewal)

### Prevent Stock Reduction On Subscription Renewal Orders

[↑ Back to top](#doc-title)

By default, WooCommerce reduces product stock for both initial purchases and subscription renewals. This plugin disables stock reduction for renewal orders, ensuring inventory is only adjusted on the initial purchase.

- [Prevent Stock Reduction On Subscription Renewal Orders](https://github.com/woocommerce/woocommerce-subscriptions-do-not-reduce-stock-on-renewal)

### Customize Failed Payment Retry Rules And Email Customer Immediately

[↑ Back to top](#doc-title)

This snippet replaces the default WooCommerce Subscriptions retry rules with a custom schedule that includes multiple retry attempts over several days. It sends an email to the customer immediately after the first failed payment, helping prompt quicker action. Each retry keeps the order in pending status and the subscription on-hold throughout the process.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function wcs_my_custom_retry_rules( $default_retry_rules_array ) { |
|  | return array( |
|  | array( |
|  | 'retry_after_interval' => DAY_IN_SECONDS / 2, // how long to wait before retrying |
|  | 'email_template_customer' => 'WCS_Email_Customer_Payment_Retry', // email customer immediately upon first failed payment |
|  | 'email_template_admin' => 'WCS_Email_Payment_Retry', |
|  | 'status_to_apply_to_order' => 'pending', |
|  | 'status_to_apply_to_subscription' => 'on-hold', |
|  | ), |
|  | array( |
|  | 'retry_after_interval' => DAY_IN_SECONDS / 2, |
|  | 'email_template_customer' => 'WCS_Email_Customer_Payment_Retry', |
|  | 'email_template_admin' => 'WCS_Email_Payment_Retry', |
|  | 'status_to_apply_to_order' => 'pending', |
|  | 'status_to_apply_to_subscription' => 'on-hold', |
|  | ), |
|  | array( |
|  | 'retry_after_interval' => DAY_IN_SECONDS, |
|  | 'email_template_customer' => 'WCS_Email_Customer_Payment_Retry', |
|  | 'email_template_admin' => 'WCS_Email_Payment_Retry', |
|  | 'status_to_apply_to_order' => 'pending', |
|  | 'status_to_apply_to_subscription' => 'on-hold', |
|  | ), |
|  | array( |
|  | 'retry_after_interval' => DAY_IN_SECONDS * 2, |
|  | 'email_template_customer' => 'WCS_Email_Customer_Payment_Retry', |
|  | 'email_template_admin' => 'WCS_Email_Payment_Retry', |
|  | 'status_to_apply_to_order' => 'pending', |
|  | 'status_to_apply_to_subscription' => 'on-hold', |
|  | ), |
|  | array( |
|  | 'retry_after_interval' => DAY_IN_SECONDS * 3, |
|  | 'email_template_customer' => 'WCS_Email_Customer_Payment_Retry', |
|  | 'email_template_admin' => 'WCS_Email_Payment_Retry', |
|  | 'status_to_apply_to_order' => 'pending', |
|  | 'status_to_apply_to_subscription' => 'on-hold', |
|  | ), |
|  | ); |
|  | } |
|  | add_filter( 'wcs_default_retry_rules', 'wcs_my_custom_retry_rules' ); |
      [view raw](https://gist.github.com/jrick1229/8564ddff519d420869c75899a9190f05/raw/2edbf20caed31b47834c31a283d3d9f134dcb5a5/wcs_my_custom_retry_rules.php)
        [wcs_my_custom_retry_rules.php](https://gist.github.com/jrick1229/8564ddff519d420869c75899a9190f05#file-wcs_my_custom_retry_rules-php)
        hosted with ❤ by [GitHub](https://github.com)

### Prevent User Role Changes On Subscription Status Updates

[↑ Back to top](#doc-title)

This snippet disables the automatic user role changes that WooCommerce Subscriptions would normally apply when a subscription is activated, cancelled, or expired. It ensures a customer’s WordPress user role remains unchanged regardless of their subscription status.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | add_filter( 'woocommerce_subscriptions_update_users_role', '__return_false', 100 ); |
      [view raw](https://gist.github.com/jrick1229/d82b8fe9af99e53d47c11a3c869f3776/raw/fd56b1a70dc99b5516629f29ea3177569d2b381b/disable_user_role_change.php)
        [disable_user_role_change.php](https://gist.github.com/jrick1229/d82b8fe9af99e53d47c11a3c869f3776#file-disable_user_role_change-php)
        hosted with ❤ by [GitHub](https://github.com)

### Add A Custom Subscription Frequency Interval

[↑ Back to top](#doc-title)

This snippet adds a custom subscription frequency (e.g. every 50 months, weeks, etc.) to the list of available intervals in WooCommerce Subscriptions. Store owners can adjust the 
```
$custom_frequency
```

 value to suit their needs and offer more flexible billing options.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function wcs_custom_frequency( $intervals ) { |
|  | // change the $custom_frequency variable numerical value to what you'd like to add. |
|  | $custom_frequency = 50; |
|  | $intervals[$custom_frequency] = sprintf( __( 'every %s', 'my-text-domain' ), WC_Subscriptions::append_numeral_suffix( $custom_frequency ) ); |
|  | return $intervals; |
|  | } |
|  | add_filter( 'woocommerce_subscription_period_interval_strings', 'wcs_custom_frequency' ); |
      [view raw](https://gist.github.com/jrick1229/02fb7f7bcc1e9e6911c4b74fea08a518/raw/b7b2fd0ec8a416440607a6322cb2285f40b9845f/wcs_custom_frequency.php)
        [wcs_custom_frequency.php](https://gist.github.com/jrick1229/02fb7f7bcc1e9e6911c4b74fea08a518#file-wcs_custom_frequency-php)
        hosted with ❤ by [GitHub](https://github.com)

### Send Cancelled Order Emails To Customers

[↑ Back to top](#doc-title)

This snippet adds the customer’s email address to the recipient list for Cancelled Order email notifications in WooCommerce. It ensures that customers are informed directly when their order is cancelled, alongside the usual admin notification.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | /* |
|  | * Add customer email to Cancelled Order recipient list |
|  | */ |
|  | function wc_cancelled_order_add_customer_email( $recipient, $order ){ |
|  | return $recipient . ',' . $order->billing_email; |
|  | } |
|  | add_filter( 'woocommerce_email_recipient_cancelled_order', 'wc_cancelled_order_add_customer_email', 10, 2 ); |
      [view raw](https://gist.github.com/jrick1229/bffdd524b89f36beb87a8a663cff877b/raw/62e92f08e8d6b7941c5bd1bd5b1596f30b848d5c/wc_cancelled_order_add_customer_email.php)
        [wc_cancelled_order_add_customer_email.php](https://gist.github.com/jrick1229/bffdd524b89f36beb87a8a663cff877b#file-wc_cancelled_order_add_customer_email-php)
        hosted with ❤ by [GitHub](https://github.com)

### Add Custom Subscription Length Options

[↑ Back to top](#doc-title)

This snippet extends the list of available subscription lengths in WooCommerce Subscriptions by adding new options such as 48 months, 10 years, and 20 years. It allows store owners to offer longer-term subscription plans directly from the product settings.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function eg_extend_subscription_expiration_options( $subscription_lengths ) { |
|  | $subscription_lengths['year'][10] = wcs_get_subscription_period_strings( 10, 'year' ); |
|  | $subscription_lengths['year'][20] = wcs_get_subscription_period_strings( 20, 'year' ); |
|  | $subscription_lengths['month'][48] = wcs_get_subscription_period_strings( 48, 'month' ); |
|  | return $subscription_lengths; |
|  | } |
|  |  |
|  | add_filter( 'woocommerce_subscription_lengths', 'eg_extend_subscription_expiration_options' ); |
      [view raw](https://gist.github.com/jrick1229/def3e5700182c44d01eaf6a7f95cb751/raw/55c49a2dd1b04a49652275a0d274b15ed28f8b0e/eg_extend_subscription_expiration_options.php)
        [eg_extend_subscription_expiration_options.php](https://gist.github.com/jrick1229/def3e5700182c44d01eaf6a7f95cb751#file-eg_extend_subscription_expiration_options-php)
        hosted with ❤ by [GitHub](https://github.com)

### Allow Customers To Continue Accessing Downloads After Cancelled Or Expired Subscription

[↑ Back to top](#doc-title)

This snippet allows customers to continue accessing their downloadable files even if their subscription is cancelled or expired. It overrides the default WooCommerce Subscriptions behavior, ensuring downloads remain available regardless of status.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function expand_access_subscription_downloads( $is_download_permitted, $subscription ) { |
|  |  |
|  | if ( $subscription->has_status ( 'cancelled', 'expired' ) ) { |
|  | return true; |
|  | } |
|  | return $is_download_permitted; |
|  | } |
|  |  |
|  | add_filter ( 'woocommerce_order_is_download_permitted', 'expand_access_subscription_downloads', 10, 2 ); |
      [view raw](https://gist.github.com/jessLundie/603d9ef96f6c0d8fc01662fdd1acd3ac/raw/3a64eb97a836359b8ac0384113c924cbb9456863/expand_access_subscription_downloads.php)
        [expand_access_subscription_downloads.php](https://gist.github.com/jessLundie/603d9ef96f6c0d8fc01662fdd1acd3ac#file-expand_access_subscription_downloads-php)
        hosted with ❤ by [GitHub](https://github.com)

### Pause All WooCommerce Subscription Renewals

[↑ Back to top](#doc-title)

This mini-plugin temporarily halts all WooCommerce Subscriptions renewals by preventing key scheduled actions from being claimed by Action Scheduler. It pauses automatic payments, retries, and end-of-term processing—without affecting other scheduled tasks. Once unpaused, any missed actions will run immediately.

**Note**: it only applies to subscriptions managed by WooCommerce Subscriptions, not legacy PayPal Standard or WooPayments subscriptions.

- [Pause All WooCommerce Subscription Renewals](https://github.com/a8cteam51/pause-renewal-actions)

## Other WooCommerce Subscriptions Tools

[↑ Back to top](#doc-title)

### WooCommerce Subscriptions Importer and Exporter

[↑ Back to top](#doc-title)

This free tool helps migrate subscriber data into WooCommerce Subscriptions by importing and exporting subscription records via CSV. While powerful, it requires careful manual formatting and testing. You can find out more about this tool and how to get support with migrating to WooCommerce Subscriptions [here](https://woocommerce.com/document/subscriptions/migrating-subscribers-woocommerce-subscriptions/#bulk-subscription-csv-importer).

- [WooCommerce Subscriptions Importer and Exporter](https://github.com/woocommerce/woocommerce-subscriptions-importer-exporter)

### Disable Automatic Cache Updates For Subscription Reports

[↑ Back to top](#doc-title)

This plugin stops WooCommerce Subscriptions from automatically updating the cache for subscription reports. It can help improve performance or prevent unintended data refreshes in reporting-heavy environments.

- [Disable Automatic Cache Updates For Subscription Reports](https://github.com/woocommerce/woocommerce-subscriptions-disable-report-cache-updates)

### Recalculate Subscription Totals After Tax Setting Changes

[↑ Back to top](#doc-title)

This plugin forces WooCommerce Subscriptions to recalculate totals for all subscriptions, ensuring that any updated tax settings are correctly applied. It’s useful when tax rules change after subscriptions have already been created.

- [Recalculate Subscription Totals After Tax Setting Changes](https://github.com/woocommerce/woocommerce-subscriptions-recalculate-totals)

### Log Renewal Events To Diagnose Failed Automatic Payments

[↑ Back to top](#doc-title)

This plugin helps identify why automatic subscription renewals aren’t being processed, even when using an automatic payment gateway. It logs key details about renewal events to WooCommerce log files, using a filename prefix of 
```
wcs-renewal-log-
```

, making it easier to trace issues and troubleshoot failed payments.

- [Log Renewal Events To Diagnose Failed Automatic Payments](https://github.com/woocommerce/woocommerce-subscriptions-renewal-logger)

### Reset Next Payment Dates To Prevent Duplicate Renewals

[↑ Back to top](#doc-title)

This helper plugin adjusts all subscription next payment dates, and pushing them back by 1 minute. It’s designed to help resolve issues with duplicate renewal payments, which can occur due to timezone discrepancies in WooCommerce Subscriptions.

- [Reset Next Payment Dates To Prevent Duplicate Renewals](https://github.com/woocommerce/woocommerce-subscriptions-reset-next-payment-dates)

### Disable Staging Mode In WooCommerce Subscriptions

[↑ Back to top](#doc-title)

This plugin disables Staging Mode in WooCommerce Subscriptions, which is normally triggered when a site’s URL changes. It’s useful for setups with multiple front-end URLs—such as multilingual sites using WPML—where all environments share a single WordPress instance.

**Note**: it allows live payments to process even on duplicate or staging URLs, so manual care is required when cloning the site.

- [Disable Staging Mode In WooCommerce Subscriptions](https://github.com/woocommerce/woocommerce-subscriptions-backstage)

### Enable Automatic Payments For Specific Subscriptions In Staging Mode

[↑ Back to top](#doc-title)

This plugin allows automatic payments to be processed for selected subscriptions even when WooCommerce Subscriptions is in Staging Mode. It’s ideal for safely testing payment functionality on staging environments without fully disabling the protections that prevent duplicate charges.

- [Enable Automatic Payments For Specific Subscriptions In Staging Mode](https://github.com/woocommerce/woocommerce-subscriptions-upstage)

### Log Start And End Of Renewal Events To Measure Duration

[↑ Back to top](#doc-title)

This plugin logs the start and end times of subscription renewal events to help you monitor how long the renewal process takes. Logs are saved to WooCommerce log files with the prefix 
```
wcs-renewal-log-
```

, which you can view by navigating to **WooCommerce > System Status > Logs**.

- [Log Start And End Of Renewal Events To Measure Duration](https://github.com/woocommerce/woocommerce-subscriptions-renewal-timer)

### Display Subscription Status Notice In Admin Dashboard

[↑ Back to top](#doc-title)

This snippet checks the status of a specific subscription (by ID) and displays an admin notice indicating whether it is **active**, **not active**, or **not found**. It’s useful for debugging or confirming the status of a known subscription directly from the WordPress admin area.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function wcs_is_sub_active_notice() { |
|  |  |
|  | $sub_id = 445; |
|  |  |
|  | if ( wcs_get_subscription( $sub_id ) ) { |
|  | if ( wcs_get_subscription( $sub_id )->get_status() == 'active' ) { |
|  | $class = 'notice notice-error'; |
|  | $message = __( '445 is ACTIVE', 'sample-text-domain' ); |
|  | printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), esc_html( $message ) ); |
|  | } else { |
|  | $class = 'notice notice-error'; |
|  | $message = __( '445 is NOT-ACTIVE', 'sample-text-domain' ); |
|  | printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), esc_html( $message ) ); |
|  | } |
|  | } else { |
|  | $class = 'notice notice-error'; |
|  | $message = __( 'NULL', 'sample-text-domain' ); |
|  | printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), esc_html( $message ) ); |
|  | } |
|  | } |
|  | add_action( 'admin_notices', 'wcs_is_sub_active_notice' ); |
      [view raw](https://gist.github.com/jrick1229/c16f82a4facf29f8f77d8bf0ff2d186d/raw/5946924dff6784bf68f5e510baf5340553f5186c/wcs_is_sub_active_notice.php)
        [wcs_is_sub_active_notice.php](https://gist.github.com/jrick1229/c16f82a4facf29f8f77d8bf0ff2d186d#file-wcs_is_sub_active_notice-php)
        hosted with ❤ by [GitHub](https://github.com)

### Increase Variation Threshold For AJAX Dropdowns

[↑ Back to top](#doc-title)

This snippet raises the variation limit for WooCommerce’s AJAX-powered variation dropdowns to **500**. It ensures product variation options continue to load smoothly via AJAX, even for products with a large number of variations.

This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      [Learn more about bidirectional Unicode characters](https://github.co/hiddenchars)

  [Show hidden characters]({{ revealButtonHref }})

  |  | <?php |
| --- | --- |
|  |  |
|  | function wc_increase_variation_threshold() { |
|  | return 500; |
|  | } |
|  | add_filter( 'woocommerce_ajax_variation_threshold', 'wc_increase_variation_threshold' ); |
      [view raw](https://gist.github.com/jrick1229/abc143604ee122fd3971ec79e56783b8/raw/e4c400a63e81c7e49c2759bd54135222a5d93d40/wc_increase_variation_threshold.php)
        [wc_increase_variation_threshold.php](https://gist.github.com/jrick1229/abc143604ee122fd3971ec79e56783b8#file-wc_increase_variation_threshold-php)
        hosted with ❤ by [GitHub](https://github.com)

## Questions and support

[↑ Back to top](#doc-title)

**Something missing from this documentation? Still have questions and need assistance?**

- If you have a question about a specific extension or theme you’d like to purchase, [contact us](https://woocommerce.com/contact-us/#sales-form) to get answers.
- If you already purchased this product and need some assistance, get in touch with a Happiness Engineer via our [support page](https://woocommerce.com/my-account/create-a-ticket/) and select this product’s name from the Product dropdown.

---

