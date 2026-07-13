# Customize Woocommerce Settings

*Category from The Events Calendar documentation*

---

## Customizing WooCommerce Settings

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-woocommerce-settings/](https://docs.nexcess.com/software/the-events-calendar/customize-woocommerce-settings/)

When you use WooCommerce as the payment method for Event Tickets Plus, the two systems work together to handle ticket sales and orders. You may want to adjust how that handoff behaves to better fit your workflow. This article collects customizations for WooCommerce settings related to ticket sales.

## Automatically Complete WooCommerce Orders for Tickets

When purchasing tickets with [Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/) with WooCommerce, emails won’t be sent to attendees until the order has been marked as **Complete**. By default, this process needs to be done manually by the administrator.

Here, we’ll show you how to make sure that your attendees receive their emails and how you can set this up automatically.

### The Order Process

When an attendee purchases a ticket, WooCommerce first sets the order to Pending. The payment gateway then attempts to run the payment method, in which case the order status updates to **On-Hold** (or Failed if the payment doesn’t go through). Next, WooCommerce automatically sets the status to **Processing**. And that is where the “automatic” process ends.

As the administrator, you’ll have to set the order to **Completed** for the email to your attendee to be triggered. The following diagram may be helpful to get a sense of the order process:

![WooCommerce order status diagram](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-12-15-at-1.49.28-PM.jpg)

You may also want to reference [this article](https://woocommerce.com/document/managing-orders/) from WooCommerce to see some more detailed information about managing WooCommerce orders.

### Automatically Set to Complete

If you’d like, you can automatically set the order to **Complete** so that an email will be sent to your attendees as soon as their payment method is verified. This will require no further action to complete your ticket orders.

To make this happen, add the following snippet to the site:

```
<?php //Do not copy this line

add_action( 'woocommerce_thankyou', function ( $order_id ) {
	if ( ! $order_id ) {
		return;
	}
	
	if ( ! class_exists( 'Tribe__Tickets_Plus__Main' ) ) {
		return;
	}

	$order = wc_get_order( $order_id );

	if ( $order->get_status() != 'processing' ) {
		return;
	}

	$all_virtual = true;
	$all_tickets = true;

	foreach ( $order->get_items() as $item_id => $item ) {
		$product    = $item->get_product();
		$product_id = $product->get_id();

		if ( ! $product->is_virtual() ) {
			$all_virtual = false;
			break;
		}

		if ( ! function_exists( 'tribe_events_product_is_ticket' ) || ! tribe_events_product_is_ticket( $product_id ) ) {
			$all_tickets = false;
			break;
		}
	}

	if ( $all_virtual && $all_tickets ) {
		$order->update_status( 'completed' );
	}
} );
```

This code snippet first validates the following:

- The Order contains only Ticket products
- All Ticket products are virtual
- Payment has been processed

If all three conditions are met, the order will be marked complete. This rule only applies to orders created for Tickets products using the Event Tickets Plus plugin.

## Make WooCommerce the Default Payment Module

When both payment modules, Tickets Commerce and WooCommerce, are active simultaneously, you have the option to choose between them for each event. However, Tickets Commerce is set as the default ticket provider. This may not always be desirable, especially if WooCommerce is your preferred payment method, and switching between payment modules for each new event becomes cumbersome.

If you have selected WooCommerce as the payment module for your site and want it to be the default for all future events and tickets you create, you can use the following PHP code snippet.

```
<?php //Do not copy this line

add_filter( 'tribe_tickets_get_default_module', function ( $default, $modules ) {
	$woocommerce_module = 'Tribe__Tickets_Plus__Commerce__WooCommerce__Main';

	// WooCommerce available and not default
	if ( in_array( $woocommerce_module, $modules ) && $default !== $woocommerce_module ) {
		return $woocommerce_module;
	}

	return $default;
}, 99, 2 );
```

By adding this code snippet to your site, WooCommerce will automatically be selected as the default payment module for new events, provided that [Event Tickets Plus and WooCommerce](https://docs.nexcess.com/software/the-events-calendar/woocommerce-tickets/) are both active.

## For Developers

Here are some of the key components used in the code snippets

- [woocommerce_thankyou](https://wp-kama.com/plugin/woocommerce/hook/woocommerce_thankyou)
- [Tribe__Tickets_Plus__Main](https://docs.theeventscalendar.com/reference/classes/tribe__tickets_plus__main/)
- [wc_get_order](https://wp-kama.com/plugin/woocommerce/function/wc_get_order)
- [tribe_events_product_is_ticket](https://docs.theeventscalendar.com/reference/functions/tribe_events_product_is_ticket/)
- [tribe_tickets_get_default_module](https://docs.theeventscalendar.com/reference/hooks/tribe_tickets_get_default_module/)

---

