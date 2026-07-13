# Woocommerce Tickets Taxes

*Category from The Events Calendar documentation*

---

## Handling VAT Taxes with WooCommerce and Event Tickets

**Source:** [https://docs.nexcess.com/software/the-events-calendar/woocommerce-tickets-taxes/](https://docs.nexcess.com/software/the-events-calendar/woocommerce-tickets-taxes/)

If you are in a country with VAT taxes there are extra steps you need to take to be compliant. Event Tickets Plus follows what WooCommerce does for regular products without you having to make any modifications, but there are settings you should be familiar with when setting up taxes.

This guide is an overview of those settings. **It is not intended to be used to verify you are compliant with your respective tax laws**. We recommend that you read over the [WooCommerce Tax Documentation](http://docs.woothemes.com/document/setting-up-taxes-in-woocommerce/) and use a plugin such as [WooCommerce EU VAT Compliance](https://wordpress.org/plugins/woocommerce-eu-vat-compliance/).

## Enabling Taxes

To set up taxes in WooCommerce, first go to **WooCommerce → Settings → General** and enable taxes. Then you can access a new **Tax** tab in Settings. From there you can set your tax functionality to meet your needs.

## Cost Display on Events & Tickets

The Events Calendar cost field within the event information or in the headers of events does not display the suffix or handle prices inclusive or exclusive of taxes. However, you could do this through a customization. Check out our [customizations](https://theeventscalendar.com/knowledgebase/k/themers-guide/) recommendations.

Alternatively, instead of customizing the display in the cost field, you could also use the following CSS to hide all the cost fields except in the ticket add to cart form:

```
/*The Events Calendar - Hide All Event Costs*/
.tribe-events-list .tribe-events-event-cost,
.tribe-events-schedule .tribe-events-cost,
.tribe-events-meta-group dl dt:nth-child(5),
.tribe-events-meta-group .tribe-events-event-cost {
    display:none;
}
```

## Disable Taxes on Tickets

With [Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/) and WooCommerce, you can enable taxes on your products and tickets. However, the situation may come up where you’d like to add taxes to your WooCommerce products and disable the taxes on your tickets.

#### Disable Taxes on Tickets Manually

The first way to disable taxes on tickets is to manually select the tickets where you’d like to remove the taxes. This method works well for preexisting tickets that already have this option selected. To do this, head over to the **WooCommerce > Products** and hover over the ticket you’d like to remove taxes on. Then select **Edit**.

![Find ticket that you'd like to disable taxes for under WooCommerce > Products.](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-05-18-at-6.51.59-AM.jpg)

Scroll down to the **Product Data > General** and change the tax status as desired.

![Change tax status to None on product associated with the ticket.](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-05-18-at-7.02.31-AM.jpg)

Alternatively, you could Bulk Edit the tickets and change the tax status to None. Select the tickets that you’d like to edit and click **Apply**.

![Bulk edit the tickets that you'd like to disable taxes for](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-05-18-at-7.08.28-AM.jpg)

Then change the tax status to **None** and click **Update**.

![Change tax status to None under Bulk Edit to disable taxes for multiple tickets](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-05-18-at-7.10.44-AM.jpg)

#### Disable Taxes on New Tickets

If you’d like to disable taxes on all new tickets that haven’t been created yet, you can use a snippet. Simply add the following snippet to your theme’s functions.php file to disable taxes on all of your tickets:

```
<?php

add_action( 'event_tickets_after_save_ticket', 'rt_disable_tax_for_event_tickets', 10, 4 );

function rt_disable_tax_for_event_tickets( $post_id, $ticket, $raw_data, $class_name ) {
	//hardcoded for WooCommerce only
	if ( 'Tribe__Tickets_Plus__Commerce__WooCommerce__Main' != $class_name ) {
		return;
	}

	$product = wc_get_product( $ticket->ID );

	if ( ! is_object( $product ) || ! ($product instanceof WC_Product) ) {
		return;
	}

	//set tax status to none
	$product->set_tax_status( 'none' );
	$product->save();
}
```

If you have further questions about how The Events Calendar displays costs please post to [our Help Desk](https://support.theeventscalendar.com/submit_ticket). For issues related to tax display in WooCommerce, you’ll want to get in touch with [WooCommerce support](https://wordpress.org/support/plugin/woocommerce).

---

