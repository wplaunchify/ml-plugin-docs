# Developers

*Category from WooCommerce Checkout Manager documentation*

---

## Developers

**Source:** [https://quadlayers.com/documentation/woocommerce-checkout-manager/developers/](https://quadlayers.com/documentation/woocommerce-checkout-manager/developers/)

Here we will review some code snippets that allow you to override the default behavior of WooCommerce Checkout Manager by hooking into the plugin code.

#### 6. 1. Add a month and year dropdown to the date-picker field

---

You can extend the behaviour of the default DatePicker Checkout Field in WooCommerce Checkout Manager by hooking into our exposed WordPress Filters. In the below example we add a year and month dropdown to the DatePicker Checkout Field.

Add the following PHP snippets to your current WordPress Theme’s functions.php

**Billing Section**

```
function custom_wooccm_js_datepicker_billing_args() {
echo 'changeMonth: true, changeYear: true';
}
add_action( 'wooccm_js_datepicker_billing_args', custom_wooccm_js_datepicker_billing_args' );
```

**Shipping Section**

```
function custom_wooccm_js_datepicker_shipping_args() {
echo 'changeMonth: true, changeYear: true';
}
add_action( 'wooccm_js_datepicker_shipping_args', 'custom_wooccm_js_datepicker_shipping_args' );
```

**Additional Section**

```
function custom_wooccm_js_datepicker_additional_args() {
echo 'changeMonth: true, changeYear: true';
}
add_action( 'wooccm_js_datepicker_additional_args', 'custom_wooccm_js_datepicker_additional_args' );
```

#### 6.2. Restrict the allowed dates for the date-picker field

---

You can limit the allowed dates for the DatePicker Field Type so that only specific dates are accepted (e.g. today’s date onward, or up to 3 months from today).

Add the following PHP snippets to your current WordPress Theme’s functions.php file to limit the DatePicker Field to only accept dates from today’s date forward.

You can apply other [DatePicker rules (jQuery UI)](https://jqueryui.com/datepicker/#min-max) using the below method.

```
function custom_wooccm_js_datepicker_additional_args() {
    echo 'minDate: 0';
}
add_action( 'wooccm_js_datepicker_additional_args', 'custom_wooccm_js_datepicker_additional_args' );
```

#### 6.3. Show 24-hour time format in the time-picker

---

You can limit the allowed dates for the DatePicker Field Type so that only specific dates are accepted (e.g. today’s date onward, or up to 3 months from today).

Add the following PHP snippets to your current WordPress Theme’s functions.php file to limit the DatePicker Field to only accept dates from today’s date forward.

```
function custom_wooccm_timepicker_jquery_args( $args, $btn ) {
	$args = '
showPeriod: false,
showPeriodLabels: false,
showSecond: false,
timeFormat: "HH:mm:ss",
ampm: false';
	return $args;

}
add_filter( 'wooccm_timepicker_jquery_args', 'custom_wooccm_timepicker_jquery_args', 10, 2 );
```

---

