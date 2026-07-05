# Quantity Settings

*Category from WPC Product Bundles for WooCommerce (Premium) documentation*

---

## Quantity Settings

**Source:** [https://doc.wpclever.net/woosb/quantity-settings/](https://doc.wpclever.net/woosb/quantity-settings/)

### 1/ Default quantity

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb_default_qty_2024.png)

### 2/ Custom quantity

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb_qty_2024.png)

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb_bulk_qty_2024.png)

### Articles

- [Default quantity](https://doc.wpclever.net/woosb/quantity-settings/default-quantity/)
- [Custom quantity](https://doc.wpclever.net/woosb/quantity-settings/custom-quantity/)

---

## Custom quantity

**Source:** [https://doc.wpclever.net/woosb/quantity-settings/custom-quantity/](https://doc.wpclever.net/woosb/quantity-settings/custom-quantity/)

## 

## Custom Quantity

## (Version prior to 8.0.0)

When you enable “Custom quantity” (Put a check on “Buyer can change the quantity of bundled products”), the options for quantity limits will appear.

#### 1/ Each item’s quantity limit:

Min/max quantity limit for each item.

Users can use different Min quantity limits for each bundled item by selecting “Use default quantity as Min?”.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-10-3.png)

If you fill a number in the Min/Max box, this quantity limit will apply to all items equally.

#### 2/ All items’quantity limit:

Min/Max limit for the total quantity of the whole bundle/all bundled items. Customers can choose any combination of item units as long as the total quantity meets the Min/Max. There will be a warning in the front-end for the max items to be chosen.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-10-2.png)

Leave all Min/Max boxes blank or fill in the boxes with **0** if you want customers to freely buy as many as they’d prefer to.

## CUSTOM QUANTITY

## (Version 8.0.0 or later)

Since version 8.0.0 on, the *Custom Quantity* option is now can be enabled or disabled for each subproduct individually. To enable this feature for any subproduct, click on an item then put a check into the box at the beginning of the line. If there should be quantity limits, enter a Min/Max number for each of them.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb_8.0.0.png)

> NOTE: If you are applying the quantity rules from the WPC Product Quantity plugin, the step can still be applicable to subproducts added to smart bundles

Clicking on each subitem in the list will reveal the dropdown for more options. The Custom quantity options won’t appear until you put a check to enable this feature for each item:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb_custom_quantity_expand.jpg)

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-custom-quantity-6.0.0.jpg)

If you would like to keep a fixed default quantity for any item, uncheck the Custom quantity box, the result will be:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-6.0.0.jpg)

To enter a total quantity limit (total Min/Max) for *all items* inside smart bundles, especially when there is any item with the default quantity set to *0* (optional item), enter a limit in the corresponding boxes below:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb_6.0.0_quantity_limits.jpg)

The *Config terms* feature for variable subproducts can be found at the end of the dropdown for each variable subitem.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb_custom_quantity_terms.jpg)

You can learn more about the [Config terms](https://doc.wpclever.net/woosb/bundle-setup/configure-terms-for-variable-products/) feature [here](https://doc.wpclever.net/woosb/bundle-setup/configure-terms-for-variable-products/).

### Bulk actions for subproducts

There’s a list of bulk actions you can set for all subproducts in the list to save time, please pay attention to the Bulk action button on the right:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb_bulk_actions.jpg)

When choosing an action, there will be a warning for the confirmation, please confirm your choice then it’s all set. After using the Bulk actions, users can still configure a different setting for each subproduct to override the bulk settings.

> NOTE: If you enable the “Sold Individually” option for subproducts in their single product page >> Product Data’s section >> Inventory tab, the Min/Max limits of the Custom Quantity option won’t work. The “Sold Individually” option will always change the quantities of subproducts to 1 even after adding them to the cart.

### 3/ Sold Individually: (General quantity box)

To disable the *general quantity box* next to the Add to Cart button, go to *Inventory* tab >> enable “Sold individually”. Turn on this option to limit only one such bundle per order for each customer.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-quantity-settings-3.png)

---

## Default quantity

**Source:** [https://doc.wpclever.net/woosb/quantity-settings/default-quantity/](https://doc.wpclever.net/woosb/quantity-settings/default-quantity/)

## Default quantity

Users can set up different default quantities for bundled products. When a new product is added to the bundle, the default quantity is 1.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-default-quantity.png)

You can use the up/down button to change it or enter a new number in the box. When loading the bundle page, all subproducts will start with the default quantity in the backend. Depending on whether the [Custom quantity](https://doc.wpclever.net/woosb/quantity-settings/custom-quantity/) option is enabled or not, the quantity input might vary.

If you’re using the auto-calculated price, the sum of bundled products’ prices will be multiplied by the default quantities.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-default-interface.png)

> NOTE: If you have configured the Default quantity for each subproduct, but these change back to 1 in the frontend or when the whole bundle is added to the cart, there must be another setting interfering with our plugin.

- Please check if you are using any **quantity controlling** plugin such as [WPC Product Quantity](https://wpclever.net/downloads/product-quantity/) plugin. The min/max/step of the single products can be effective inside smart bundles.
- Please check if you are using any *Dynamic Pricing or Discount Rules* plugin. These can interfere with our plugin. *WPC Product Bundles* is not compatible with these dynamic discount plugins.
- Please check if you enable the *“Sold Individually”* feature in the Inventory tab of the individual subproduct. This will always change the quantity to 1.

---

