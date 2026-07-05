# Customize Checkout

*Category from Kadence Shop Kit documentation*

---

## Checkout Editor

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-shop-kit/customize-checkout/](https://www.kadencewp.com/help-center/docs/kadence-shop-kit/customize-checkout/)

Kadence Shop Kit adds a checkout manager to WooCommerce. If you wish to add any custom fields to your checkout page, this plugin makes it a breeze.

To get started, be sure that you’ve purchased a Plan with access to Kadence Shop Kit, or have purchased the plugin separately here: [Kadence Shop Kit](https://www.liquidweb.com/help-docs/software/kadence/shop-kit/).

TipWooCommerce checkout pages can use the Checkout block for Gutenberg or the **[woocommerce_checkout]** shortcode. Custom fields created with Kadence Shop Kit will not appear when using the Checkout block. You must add your checkout using the shortcode to see the custom fields you create.1. Navigate to *Dashboard → Shop Kit* and click **Checkout Editor**.

![Shop Kit Checkout Editor](https://p-d0FK22zG.t2.n0.cdn.zight.com/items/P8uKojmL/a180e47a-aae8-40cc-9333-59e9e679902b.jpg?v=90f14e3e53e093f95bca66a2eb62c02b)2. Enable the **Checkout Fields Editor:**

![Enable Checkout Fields Editor](https://p-d0FK22zG.t2.n0.cdn.zight.com/items/o0u1dBPz/99a897cd-40b7-4943-ab02-25380c8ebe2c.jpg?v=b070e8aaa32cb61f59ce38fd84230975)3. Navigate to *WooCommerce> Checkout Manager*

![Shop Kit Checkout Manager](https://p-d0FK22zG.t2.n0.cdn.zight.com/items/nOu4xBRP/18728423-5db2-4473-83c7-ca6cb1a1268f.jpg?v=80e4ec2186f8a7b45cd4d9d529287d13)4. Choose the field set that fits your needs. The options available are *Billing Fields, Shipping Fields, and/or Extra Fields*.

![Checkout Manager Fields](https://p-d0FK22zG.t2.n0.cdn.zight.com/items/QwuyZDne/9904f0a4-54f9-41d3-aaac-f297f9edd844.jpg?v=5f3e7a13e3a3dccf0aa70f382a25505f)5. Then, click on the **+ Add field** button to add new fields to the list. The available field types consist of: *Text, Password, Text Area, Checkbox, Radio, and Select field types.*

For this example, I’m just going to add a simple “Where you heard about us” box with a few options:

![Add/Edit Checkout field](https://p-d0FK22zG.t2.n0.cdn.zight.com/items/geuDGJy9/09151f32-c000-4b77-be68-61b2c8e6c33b.jpg?v=87191cb3d19944996e1a4e27e25f3787)6. Save the changes:

![Save changes](https://p-d0FK22zG.t2.n0.cdn.zight.com/items/RBubj1BW/4e822650-6e2c-4fb3-b060-728a9d8afeb4.jpg?v=84d49bfa9ccbb6575f4aedd5dd83c4a7)7. View your checkout page:

![View checkout page](https://p-d0FK22zG.t2.n0.cdn.zight.com/items/Apuob1vd/52fc5d4e-1567-4cb0-8363-66939f9f31ce.jpg?v=558cd93dea320f6fd5365260bcde1280)
## Naming Guidelines for Custom Checkout Fields

When adding custom fields in Checkout Manager, always include a prefix to ensure proper integration with the checkout system. Use one of the following as a prefix depending on the type of field:

- billing_ for billing information (e.g., billing_tax_number)
- shipping_ for shipping information (e.g., shipping_instructions)
- additional_ for any extra fields (e.g., additional_notes)![Naming custom checkout fields](https://res.cloudinary.com/lwcom/images/w_950,h_832,c_scale/f_auto,q_auto/v1780352024/prod/Checkout-Manager-fields/Checkout-Manager-fields.jpg?_i=AA)WarningIf you do not use the correct prefix, your custom fields may not appear correctly in the checkout, order details, or emails. This can lead to missing or duplicated information, so always follow the prefix naming convention.Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

