# Settings

*Category from Autocomplete WooCommerce Orders documentation*

---

## Settings

**Source:** [https://quadlayers.com/documentation/woocommerce-autocomplete-orders/settings/](https://quadlayers.com/documentation/woocommerce-autocomplete-orders/settings/)

The First step to start using Autocomplete Orders’ features is to activate it. To do that, go to WooCommerce > Settings > Autocomplete Orders’ tab.

## Mode

By default, WooCommerce will only automatically complete paid orders with virtual and downloadable products. With this option you can change this behaviour.

- **None**: No orders will be automatically completed.
- **All Orders**: All paid orders, regardless of purchased products, will be automatically completed.
- **Virtual Orders**: Orders that contain only Virtual products will be automatically completed.
- **Virtual & Downloadable Orders**: Only paid orders for products that are *both Virtual and Downloadable* will be automatically completed (default behaviour). This is the plugin’s default setting, which ensures that simply activating the plugin won’t impact order completions until you manually update this setting.

## How it works?

This option will only complete paid orders that call the 
```
woocommerce_payment_complete()
```

 / 
```
$order->payment_complete()
```

 methods. Most payment methods like PayPal and credit cards will all trigger this action.

Since shipping and access to the products shouldn’t happen until payment is received, orders that haven’t been paid won’t be automatically completed.

This means our plugin won’t automatically complete an order if your gateway is unable to recognize when a payment has been received.

That said, this option **will not** auto-complete orders with the following payment methods:

- Check Payments (WooCommerce core)
- Direct Bank Transfer / BACS (WooCommerce core)
- Cash on Delivery (WooCommerce core)
- Other gateways that default to On Hold or Pending Payment instead of Processing

### Paypal Integration

Remember that to make this work; you need to set up PayPal as the payment service and generate PayPal’s Identity Token on the PayPal dashboard.

If you’re not sure how to do it, [check this short step-by-step guide](https://quadlayers.com/documentation/woocommerce-autocomplete-orders/paypal/).

## Core payments methods

As we have mentioned in the previous point, the autocomplete function will not work in the core payment methods. For these cases we have created the following options.

- Direct bank transfer
- Check payments
- Cash on delivery
- Cash on delivery (Downloadable)

---

