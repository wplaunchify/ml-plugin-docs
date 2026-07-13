# Customize Checkout

*Category from Kadence Shop Kit documentation*

---

## Checkout Editor

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-shop-kit/customize-checkout/](https://www.kadencewp.com/help-center/docs/kadence-shop-kit/customize-checkout/)

Kadence Shop Kit adds a checkout manager to WooCommerce. If you wish to add any custom fields to your checkout page, this plugin makes it a breeze.

To get started, be sure that you’ve purchased a Plan with access to Kadence Shop Kit, or have purchased the plugin separately here: [Kadence Shop Kit](https://www.kadencethemes.com/kadence-woocommerce-extras/).

Note: WooCommerce checkout pages can use the Checkout block for Gutenberg or the **[woocommerce_checkout]** shortcode. Custom fields created with Kadence Shop Kit will not appear when using the Checkout block. You must add your checkout using the shortcode to see the custom fields you create.

1. Navigate to *Dashboard > Shop Kit* and click **Checkout Editor**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/a180e47a-aae8-40cc-9333-59e9e679902b.jpg)

2. Enable the **Checkout Fields Editor:**

![](https://docs.nexcess.com/wp-content/uploads/2026/06/99a897cd-40b7-4943-ab02-25380c8ebe2c-scaled.jpg)

3. Navigate to *WooCommerce> Checkout Manager*

![](https://docs.nexcess.com/wp-content/uploads/2026/06/18728423-5db2-4473-83c7-ca6cb1a1268f-scaled.jpg)

4. Choose the field set that fits your needs. The options available are *Billing Fields, Shipping Fields, and/or Extra Fields*.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/9904f0a4-54f9-41d3-aaac-f297f9edd844.jpg)

5. Then, click on the **+Add field** button to add new fields to the list. The available field types consist of: *Text, Password, Text Area, Checkbox, Radio, and Select field types.*

For this example, I’m just going to add a simple “Where you heard about us” box with a few options:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/09151f32-c000-4b77-be68-61b2c8e6c33b-scaled.jpg)

6. Save the changes:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/4e822650-6e2c-4fb3-b060-728a9d8afeb4-scaled.jpg)

7. View your checkout page:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/52fc5d4e-1567-4cb0-8363-66939f9f31ce.jpg)

Naming Guidelines for Custom Checkout Fields

When adding custom fields in Checkout Manager, always include a prefix to ensure proper integration with the checkout system. Use one of the following as a prefix depending on the type of field:

- billing_ for billing information (e.g., billing_tax_number)
- shipping_ for shipping information (e.g., shipping_instructions)
- additional_ for any extra fields (e.g., additional_notes)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Checkout-Manager-fields.jpg)

If you do not use the correct prefix, your custom fields may not appear correctly in the checkout, order details, or emails. This can lead to missing or duplicated information, so always follow the prefix naming convention.

---

