# Invoices

*Category from WooCommerce Checkout Manager documentation*

---

## Invoices

**Source:** [https://quadlayers.com/documentation/woocommerce-checkout-manager/invoices/](https://quadlayers.com/documentation/woocommerce-checkout-manager/invoices/)

WooCommerce Checkout Manager is compatible with three of the most popular PDF invoices plugins for WooCommerce.

**Notice:** Only fields with price will be included.

- [Print Invoice & Delivery Notes for WooCommerce](https://wordpress.org/plugins/woocommerce-delivery-notes/)
- [PDF Invoice](https://docs.woocommerce.com/documentation/plugins/woocommerce/woocommerce-extensions/pdf-invoice/)
- [WooCommerce PDF Invoices & Packing Slips](https://wordpress.org/plugins/woocommerce-pdf-invoices-packing-slips/)

## I use other plugin

We currently don’t offer support for other PDF Invoice plugins for WooCommerce. If this is your case, contact the plugin support and share this code with them.

```
function get_wooccm_fields( $fields, $order ) {

	$billing = WOOCCM()->billing->get_fields();
	if ( count( $billing ) ) {
		foreach ( $billing as $field_id => $field ) {
			if ( ! in_array( $field['name'], WOOCCM()->billing->get_defaults(), true ) ) {
				$value = $order->get_meta( sprintf( '_%s', $field['key'] ), true );
				if ( $value ) {
					$fields[ $field['key'] ] = array(
						'label' => $field['label'],
						'value' => $value,
					);
				}
			}
		}
	}

	$shipping = WOOCCM()->shipping->get_fields();
	if ( count( $shipping ) ) {
		foreach ( $shipping as $field_id => $field ) {
			if ( ! in_array( $field['name'], WOOCCM()->shipping->get_defaults(), true ) ) {
				$value = $order->get_meta( sprintf( '_%s', $field['key'] ), true );
				if ( $value ) {
					$fields[ $field['key'] ] = array(
						'label' => $field['label'],
						'value' => $value,
					);
				}
			}
		}
	}

	$additional = WOOCCM()->additional->get_fields();
	if ( count( $additional ) ) {
		foreach ( $additional as $field_id => $field ) {
			if ( ! in_array( $field['name'], WOOCCM()->additional->get_defaults(), true ) ) {
				$value = $order->get_meta( sprintf( '_%s', $field['key'] ), true );
				if ( $value ) {
					$fields[ $field['key'] ] = array(
						'label' => $field['label'],
						'value' => $value,
					);
				}
			}
		}
	}

	return $fields;
}
```

---

