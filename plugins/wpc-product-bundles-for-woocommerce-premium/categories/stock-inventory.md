# Stock Inventory

*Category from WPC Product Bundles for WooCommerce (Premium) documentation*

---

## Stock & Inventory

**Source:** [https://doc.wpclever.net/woosb/stock-inventory/](https://doc.wpclever.net/woosb/stock-inventory/)

In order to configure the stock for a smart bundle, in the Bundled products tab, put a check on the Enable stock management at bundle level box then press Update:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-stock-management-bundle-level.png)

Next, you can go to the*Inventory*tab, turn on the Enable stock management at product level option (if not enabled) then enter a stock quantity**> > Update**:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-12-2.png)

### 1. Stock management at product level:

For your information, when there is at least one of the bundled products in your bundle has this stock management option enabled in the*Inventory* tab of their single product page, this option will also be automatically enabled for smart bundles that include them.

Hence, in the *Inventory* tab of the Smart bundle page, this option will always be enabled when any of the bundled items have this turned on.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-stock-management-product-level.png)

### 2. Stock management at bundle level:

When stock management at bundle level is checked & press Update, users can go to the Inventory tab, enter a stock quantity for the bundle.

> NOTE: The stock quantity of a bundle must NOT be higher than the available lowest stock of the bundled products.

In case you would like to set up a specific stock quantity for the bundle, **ALL** of your bundled products must be *in stock* and only configured with a stock status instead of a stock quantity. If any of your bundled items has a stock quantity configured, it will tie the smart bundle’s stock to that quantity.

For example:

- Item 1: In Stock
- Item 2: In Stock
- Item 3: In Stock

=> Enable stock management at bundle level, configure stock quantity: 9**>> OK**.

- Item 1: 3 in Stock
- Item 2: In Stock
- Item 3: In Stock

=> Enable stock management at bundle level, configure stock quantity: 9 >> the quantity will always change to 3 after pressing the**Update** button. You can still configure the stock quantity of the bundle to be 2, 1, or 0.

>> Stock management at the product level *is always prioritized*over stock management at the bundle level.

So the only way you can configure a higher stock quantity for your bundle OR disable the stock management at the product level in the *Inventory* tab of the bundle is to make all bundled items use the stock status: *In Stock/ Out of Stock* instead of stock quantity.

### Articles

- [Inventory display](https://doc.wpclever.net/woosb/stock-inventory/inventory-display/)
- [Stock management (1): product level](https://doc.wpclever.net/woosb/stock-inventory/stock-management/)
- [Stock management (2): bundle level](https://doc.wpclever.net/woosb/stock-inventory/stock-management-2-bundle-level/)
- [Stock management (3): variation level](https://doc.wpclever.net/woosb/stock-inventory/stock-management-3-variation-level/)
- [Sold Individually](https://doc.wpclever.net/woosb/stock-inventory/sold-individually/)

---

## Inventory display

**Source:** [https://doc.wpclever.net/woosb/stock-inventory/inventory-display/](https://doc.wpclever.net/woosb/stock-inventory/inventory-display/)

## Inventory display

There are two ways of configuring the stock for bundle:

- Stock status: In stock/Out of stock.
- Stock management: X in stock.

#### 1/ Stock status:

Display a simple **In Stock/ Out of Stock/ On backorder**status.

If you’re using the newer WooCommerce versions, the Inventory tab will be as follows:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/new-inventory.png)

#### 2/ Stock management:

Display the number of products left in stock. By default, the stock status will be used. If you click on the Stock management box to enable that, you can enter a stock quantity underneath.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/new-stock-quantity.png)The new Inventory tab – Stock management
![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-stock.png)For example: “12 in stock”.
*Note:* Stock management at the product level will be automatically enabled for bundles when there is at least one of the bundled products has stock management turned on with a stock quantity. [Read more here.](https://doc.wpclever.net/docs/woosb/stock-inventory/stock-management/)

---

## Sold Individually

**Source:** [https://doc.wpclever.net/woosb/stock-inventory/sold-individually/](https://doc.wpclever.net/woosb/stock-inventory/sold-individually/)

## Sold Individually

In the *Inventory* tab, there is an option to control the universal quantity box for smart bundles, which is “Sold Individually”.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/new-inventory-tab.png)

> When this option is enabled, the universal quantity box next to the Add to Cart button will be hidden. Therefore, one buyer/customer can only add 1 unit of this bundle to the cart and place an order. This option is to make sure each customer can only purchase 1 unit of the chosen bundle per single order.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/10/woosb-wpcstore-sold-individually.gif)

If you want to allow multiple bundles to be purchased in a single order per customer, remember to uncheck/disable this option from the *Inventory* tab of the bundle page.

---

## Stock management (2): bundle level

**Source:** [https://doc.wpclever.net/woosb/stock-inventory/stock-management-2-bundle-level/](https://doc.wpclever.net/woosb/stock-inventory/stock-management-2-bundle-level/)

## 2/ Stock management at the bundle level:

In case you include all bove 5 products in your bundle, the auto-calculated stock is “**5 in stock**”, but you just want to sell 3 bundles only, you can set up the stock at *bundle level* to control this.

In the *Bundled Products* tab, put a check on “Enable stock management at bundle level” **>> Update**. Then go to the Inventory tab and fill in with a stock quantity, in the above example, fill in “3”.

#### How to do

Only when “Enable stock management at bundle level” (1) is turned on then the stock quantity set in the *Inventory* tab is saved to the bundle.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-12-1.png)

In order to put in a stock quantity, you must enable the stock management at bundle level first. Next, open the Inventory tab, put a check on “Track stock for this product” option, then enter a number in the Quantity box underneath.

> So the process is to enable the stock management at bundle level first then at product level (bundle’s page Inventory tab), then set up a stock quantity for the whole bundle.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/new-stock-quantity.png)

If this is disabled/unchecked, no matter whatever number you put in for stock quantity *will not be saved* after pressing the Update button & our plugin will calculate stock on the product level as the above-mentioned cases.

### Out-of-stock Bundles:

When one of the bundled products goes out-of-stock, the whole bundle is out-of-stock. You can make it purchasable again by going to **WPClever >> Product Bundles >>** in the “Cart & Checkout” section, choose “Yes” for “Exclude un-purchasable products”, in the front-end, out-of-stock products will still be visible, but buyers cannot choose or add them to the cart.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-faq-9.png)

For example, this bundle includes an out-of-stock product:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-exclude-unpurchasable-back-end.png)

That out-of-stock item will be removed from the front-end display when Exclude unpurchasable is enabled:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-default-interface.png)

---

## Stock management (3): variation level

**Source:** [https://doc.wpclever.net/woosb/stock-inventory/stock-management-3-variation-level/](https://doc.wpclever.net/woosb/stock-inventory/stock-management-3-variation-level/)

## 3/ Stock management at variation level:

Sometimes, you might want to create a bundle comprised of *all variations* (marked at the end as “variations #123” for example) instead of variables (marked at the end as “variable #120 for example).

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-marks.png)

If the parent variable product just uses simple stock status like “In Stock/ Out of Stock”, when you add those variations to a bundle, remember to enable stock management at variation level by following these steps:

- Find that variable product
- Click on **Edit**
- Navigate to the *Variations* tab
- Put a check on “Manage stock”
- Enter a number in the “Stock quantity” box **>> Update**
- Add it to the bundle, now its stock will be managed as a normal individual product in a bundle.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-variation-stock.png)

A sample bundle with all variations:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-bundle-sample-2.png)

---

## Stock management (1): product level

**Source:** [https://doc.wpclever.net/woosb/stock-inventory/stock-management/](https://doc.wpclever.net/woosb/stock-inventory/stock-management/)

## 1/ Stock management at the product level

In order to manage the stocks of the bundle, you can set it up on different levels:

- Product level
- Bundle level
- Variation level

### 1/ Stock management at the product level:

When any of the bundled products have the stock management enabled, the stock management for the bundle will be automatically enabled (even though the box next to “Enable stock management at product level” option in the *Inventory* tab is unchecked).

If one of the bundled products becomes **Out of stock**, then the whole bundle will be **Out of stock** as well in this case. No matter how hard you try to change the stock quantity by filling with a number or change the stock status to **In Stock,** that bundle will change back to **Out of Stock** after pressing the **Update** button.

Now, we will take this example to discuss how to set up stock management:

We have 5 products with different stocks configured as below:

- *Product A:* use Stock status with *In Stock* displayed.
- *Product B:* use Stock management, stock quantity: **8**
- *Product C:* use Stock status with **Out of Stock** displayed.
- *Product D:* use Stock management, stock quantity: **5**
- *Product E:* use Stock status with **In Stock** displayed.

We add some of them to a bundle, both Stock management at product level and at bundle level options are disabled.

**Case 1:** With 4 products A, B, C, D included, this bundle will always be **Out of Stock** as the bundled product C is **Out of Stock**.

**Case 2:** With only product A & product C included, the whole bundle will always be **Out of Stock**.

**Case 3:** With only product A & product E included then the bundle will be **In Stock** (but no stock quantity displayed since it’s been configured yet).

**Case 4:** With only product A & product B included, in the front-end, the stock will be “**8 in stock**” for the whole bundle based on the stock configured for product B. Similarly, if only product A & product D or product D & product E included, the stock will be “**5 in stock**”.

**Case 5:** With only product B & product D included, the stock will be “**5 in stock**” based on the lowest stock among bundled items.

We can see that any combination that excludes out-of-stock product C is either “**In Stock**” or “**5 In Stock**”. So the *stock management is prioritized over stock status* and the *lowest stock* among bundled products will be used as the stock quantity for the whole bundle.

Even though you don’t check the “Enable stock management at product level” option, when you add any product, which has stock management configured, to your bundle and press **Update**, check back on the *Inventory* tab after saving the changes, you’ll see this option is turned on and the stock quantity is filled with “**5**”.

Therefore, you can rest assured that when a bundle is purchased successfully from your store, the stock will be *automatically reduced* from bundled products if they have stock management enabled with a positive stock quantity.

---

