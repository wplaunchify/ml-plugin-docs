# Bundle Setup

*Category from WPC Product Bundles for WooCommerce (Premium) documentation*

---

## Steps to Configure Smart Bundles

**Source:** [https://doc.wpclever.net/woosb/bundle-setup/](https://doc.wpclever.net/woosb/bundle-setup/)

In order to create a product bundle, please follow these steps:

#### Step 1: Create a new product

Click on **Products >> Add New.**

#### Step 2: Choose “Smart bundle”

Choose *Smart bundle* from the drop-down of product type.

#### Step 3: Search for product(s)

On *Bundled Products* tab, type in the Search box with keyword(s) to look for products.

#### Step 4: Select product types

Choose an appropriate type then click (+) to add. Notice the marks at the end of each item:

- simple #…: simple product
- variable #…: variable product
- variation #…: a specific variation of the variable product above it.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-marks.png)

> Variable products and variations are only available in the Premium version

If you would like to search for specific produc types only, you can click on the Settings button and hold down the Ctrl button to choose some:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-search-popup.png)

#### Step 5: Re-arrange the items

Use the arrow drag & drop symbol to rearrange the order of items:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-move.png)

#### Step 6: Set default quantity & min/max

Fill in the default quantity box for each item. By default, when a new product is added to the bundle, the default quantity is **1.**

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-default-quantity.png)

If you want your customers to choose the unit of each item to their preferences, put a check in the box “Buyer can change the quantity of bundled products” to enable the Custom quantity feature.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-9.png)

Clicking on the *Custom quantity* box will open up the min/max options. Set up the quantity limit for each item (*Each item’s quantity limit*) or the whole bundle (*All items’ quantity limit*) accordingly.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-10.png)

If you’d like to set *different minimum quantity limits* for bundled items by using the default quantities, put a check on “Use default quantity as min?”.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-10-3.png)

There will be a warning in the front-end to remind customers of how much they can buy per order.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-10-2.png)

#### Step 7: Configure the Pricing method

Initially, the plugin will automatically calculate the sum of all bundled products’ price and use it as the Regular price.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-auto-price-e1629363954505.png)

If you want to manually set the fixed total price for the whole bundle, click on “Disable auto-calculated price”

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-fixed-price.png)

Then press “click here to set price” or go to the *General* tab and fill in with a new price:

#### Step 8: Configure the Discount

Type in a discount on the corresponding box to set it up as **a percentage** or **amount discount.** Note that the Discount option will be disabled when you disable the auto-calculated price and enter a manual total price for the bundle.

If both these boxes are filled, the *amount discount* will be prioritized and applied to sub-products:

#### Step 9: Configure the Total limits

If the package you’re creating has some limits for the total price, you can configure the min/max total limits in the coresponding box:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-total-limit.png)

#### Step 10: Set up the Shipping fee

First, open the *Shipping* tab and choose a Shipping class:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-shipping-tab.png)

Then go back to the Bundled products tab and now you can choose an option for configuring the *Shipping fee.* The Shipping fee will be calculated based on the chosen shipping class and applied to each product individually or for the whole bundle due to this choice.

#### Step 11: Configure Stock

If any of the sub-products in the list has the Stock management enabled, the Stock management for the whole bundle will be enabled as well. This means bundle doesn’t just use “In stock/Out of Stock/ On backorders” as stock status, but now the stock of the whole bundle will be tied with the item that has the lowest stock in the list. You can read more about Stocks [here](https://doc.wpclever.net/woosb/stock-inventory/).

To set up a stock quantity for the whole bundle, put a check to turn on “Enable stock management at bundle level”**>> Update**.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-12-1.png)

Then go to the *Inventory* tab, put a check on “Enable the stock management at product level” and set up stock quantity for the bundle.

#### Step 12: Custom display price

Enter a custom display price if you want to show a price rather than the total or starting price of the bundle. For example: “From $49”.

#### 

> The Custom display price will be visible only if the “Change price” option is disabled. When the Change price is enabled, the custom display price will be displayed on the archive/shop pages only.

#### Step 13: Above/Under text

Customize the *Above/ Under text* for the current bundle in bundle page to encourage buyers.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-14.png)

#### Step 14: Layout

By default, all smart bundles will use the default layout in the plugin setting under **WPClever >> Product Bundles >>** Layouts

You can choose a different layout for the current bundle:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-layout.png)

#### Step 15: Press Publish to finish.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-15.png)

See this video for more information on how to create a new smart bundle.

### Articles

- [Configure Terms for Variable Products](https://doc.wpclever.net/woosb/bundle-setup/configure-terms-for-variable-products/)
- [Headings/ Paragraphs](https://doc.wpclever.net/woosb/bundle-setup/headings-paragraphs/)

---

## Configure Terms for Variable Products

**Source:** [https://doc.wpclever.net/woosb/bundle-setup/configure-terms-for-variable-products/](https://doc.wpclever.net/woosb/bundle-setup/configure-terms-for-variable-products/)

### (Version prior to 8.0.0)

Users can now configure terms for variable products so that certain variations will be enabled for the selection in the frontend. This requires version 7.2.1 or higher of [WPC Product Bundles](https://wpclever.net/downloads/product-bundles/) plugin.

When adding variable products (with the mark “variable #…” at the end) to smart bundles, there is a little button written “Config terms” at the end. Users can click on that and the popup for choosing terms will be opened.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2023/06/woosb-config-terms-button.png)

By default, if any attribute box is left blank, all terms will be used. You can type in and select some terms to be enabled in each box.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2023/06/woosb-config-terms-popup.png)

In the frontend, buyers can only see the selected terms in the drop-down list. You can also use the [WPC Variations Radio Buttons](https://wpclever.net/downloads/variations-radio-buttons/) plugin and show the selected variations in a clearer way:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2023/06/woosb-config-term-radio-buttons.png)

### (Version 8.0.0 or later)

With version 8.0.0, the **Custom quantity** and Config terms features have some changes in the display. Users can configure a different sets of min/max quantity limit for each subproduct. The Config terms feature is located at the end of this dropdown for variable subproduct.  The rules for configuring the terms of attributes are still the same.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb_custom_quantity_terms.jpg)

---

## Headings/ Paragraphs

**Source:** [https://doc.wpclever.net/woosb/bundle-setup/headings-paragraphs/](https://doc.wpclever.net/woosb/bundle-setup/headings-paragraphs/)

### This is a feature for the Premium version only

The Headings/Paragraphs button is available in the Premium version only. Users can add headings at many levels H1, H2, H3, H4, H5, H6 and paragraph, span or none. It’s possible to drag and drop to rearrange their order so that sections of the offer are more outstanding to buyers.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2023/06/woosb-headings-frontend-1.png)Preview of all level headings
![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2023/06/woosb-headings-backend-1.png)The backend button

---

