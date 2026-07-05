# Troubleshooting

*Category from WooCommerce Checkout Manager documentation*

---

## Troubleshooting

**Source:** [https://quadlayers.com/documentation/woocommerce-checkout-manager/troubleshooting/](https://quadlayers.com/documentation/woocommerce-checkout-manager/troubleshooting/)

## Roll back to a previous version

Here’s how to roll back to a previous version of WooCommerce Checkout Manager.

1. Open the WordPress Administration of your WooCommerce store.
2. Go to *Plugins*.
3. Deactivate and delete WooCommerce Checkout Manager from the Plugins screen.
4. Open the [Developer tab of the WooCommerce Checkout Manager Page](https://wordpress.org/plugins/woocommerce-checkout-manager/developers/) on wordpress.org.
5. Under the heading Other Versions, choose a previous release of WooCommerce Checkout Manager.
6. Click the version number (e.g. 3.6.8) to download that Plugin release.
7. Open *Plugins > Add New* from the WordPress Administration menu.
8. Click the *Upload Plugin* button.
9. Use the file uploader to select the version of WooCommerce Checkout Manager you have just downloaded.
10. Click **Install Now.**
11. That’s it!

## I can’t add more than twenty fields

If you’re experiencing this issue you can try one of these options to solve it.

Usually, this is due to a limit on the number of POST fields that can be sent to the hosting server in a single submission. For some hosts, this limit is 1000. As a consequence, this limits the number of Checkout fields you can add via the WooCheckout screen.

To add more than 20 checkout fields for a given Section (e.g. Billing, Shipping, Additional) you will need to increase the ‘**max_input_vars**’ PHP option. You can do this globally in all your WordPress sites or on a per-site basis. Apply this change globally by editing your hosting server’s *php.ini* file as follows.

```
max_input_vars = 2000
```

Alternatively, you can apply this on a per-site basis by adding the following code to your WordPress site’s *.htaccess* file.

```
php_value max_input_vars 2000
```

---

