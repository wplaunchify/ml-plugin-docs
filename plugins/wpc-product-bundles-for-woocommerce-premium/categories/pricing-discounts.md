# Pricing Discounts

*Category from WPC Product Bundles for WooCommerce (Premium) documentation*

---

## Pricing & Discounts

**Source:** [https://doc.wpclever.net/woosb/pricing-discounts/](https://doc.wpclever.net/woosb/pricing-discounts/)

### Articles

- [Pricing method](https://doc.wpclever.net/woosb/pricing-discounts/pricing-method/)
- [Discounting methods](https://doc.wpclever.net/woosb/pricing-discounts/discounting-methods/)
- [Saved Text](https://doc.wpclever.net/woosb/pricing-discounts/saved-text/)
- [Price Display](https://doc.wpclever.net/woosb/pricing-discounts/price-display/)

---

## Discounting methods

**Source:** [https://doc.wpclever.net/woosb/pricing-discounts/discounting-methods/](https://doc.wpclever.net/woosb/pricing-discounts/discounting-methods/)

## Discounting methods

Choose either of the following options to enter in the Discount box:

- Using a *discounting percentage* (for example 10% off -> fill “10” in the first box)
- Using *an amount* to be directly deducted (fill “49” in the second box for deducting $49 from the bundle total)

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-plugin-settings-discount.png)

Kindly note that the mechanism of discounting on Product Bundles is to apply **a flat rate** on every bundled product, whether it is by the percentage or by an amount.

⨯You **CANNOT** set different discounts for bundled items.

⨯You **CANNOT** set discount rules based on the quantity accumulation (10% off for 10 units, 20% for 20 units, etc.) or user roles (10% for unregistered buyers, 20% for VIP customers, etc.)

When both the percentage and amount boxes are filled with a number, the **amount** discount will be applied.

---

## Price Display

**Source:** [https://doc.wpclever.net/woosb/pricing-discounts/price-display/](https://doc.wpclever.net/woosb/pricing-discounts/price-display/)

# Price Display

#### 1/ Bundle price display on the shop page:

To set a universal price format display for all bundles on the shop archive page, please go to **WPClever >> Product Bundles >> Price formats**, choose a type then press **Update options**.

#### 2/ Custom price display for each bundle:

To set a custom price display for each bundle, go to the bundle page and fill in the box next to the “Custom display price” option. This price will override the universal price format in the plugin settings.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-pricing-price-display-2.png)

The custom display price located under the product title in the bundle page is called the **starting price**, and by default, this price won’t change according to product choice or quantity change. The price that always changes based on the changes in products or variations is the **subtotal** that lies above the Add to Cart button.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-custom-display-price.png)

If you want the starting price to change synchronously with the subtotal when buyers make any changes in product choice or quantity, please go to **WPClever >> Product Bundles >> Change price**, choose “Yes”. If you want to customize how it displays, please choose “Yes, custom selector” **>> Update options**.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-saved-text.png)

#### 3/ Price display for bundled products on bundle page:

In **WPClever >> Product Bundles >>** find the “Show price” option and choose 1 of the following options:

- *Price:*show unit price per bundled product.
- **Subtotal:** show unit price x quantity per bundled product. If the Custom quantity option is enabled, the subtotal will be updated upon changing the quantity.
- *No:* hide the price of bundled products. Only the quantity is shown.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-default-interface.png)Show price: Price (unit price of each bundled item)

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-spcstore-subtotal.png)Show price: Subtotal (unit price x quantity of each bundled item)

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-subtotal-plus-minus.gif)Show price: Subtotal (unit price x quantity of each bundled item) / Plus/minus button enabled

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-hidden-price.png)Show price: No (prices of bundled items are hidden)

---

## Pricing method

**Source:** [https://doc.wpclever.net/woosb/pricing-discounts/pricing-method/](https://doc.wpclever.net/woosb/pricing-discounts/pricing-method/)

## Pricing methods

There are two kinds of prices you can use for bundles:

- Auto-calculated price
- Manual price

#### 1/ Auto-calculated price:

The plugin will automatically calculate the price of the bundle based on the sum of all bundled products’ prices.

#### 2/ Manual price:

Put a check on “Disable auto-calculated price”.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-7-2.png)

Then go to the *General* tab, fill in a new price (Regular or Sale price) as you normally do with the simple or variable products.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-7-3.png)

#### 3/ Bundled pricing method:

Bundled pricing method refers to how prices of bundled products will be calculated. The discount entered on the Bundled products tab will be applied to the regular or the sale price of bundled items.

By default, WPC Product Bundles takes the sale price of bundled items into account. If you want to calculate discounts/ new prices from the regular price instead to avoid double discounting on sale items, please go to **WPClever >> Product Bundles** find “Calculated bundled prices” option >> choose “from Regular price”.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-pricing-calculate-prices.png)

For example, with the below bundle:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-back-end-pricing.png)

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-from-regular-price.png)From Regular price method

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-from-sale-price.png)From Sale price method (default)

#### 4/ Total Limits:

From version 6.5.0, a new option has been added to allow users configure a minimum and maximum limit for the bundle’s total. In the *Bundled products* tab, users can find the Total Limits option.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/Total-Limit.png)

---

## Saved Text

**Source:** [https://doc.wpclever.net/woosb/pricing-discounts/saved-text/](https://doc.wpclever.net/woosb/pricing-discounts/saved-text/)

When you use the **auto-calculated price** for your bundle and enter a *percentage* or an **amount** in the “Discount” option, then the applied discount will be displayed in the “Saved text”.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-discount.png)

In the front-end, the saved text will display the type of discount you have set:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-plugin-settings-saved-text-frontend.png)Percentage discount on auto-calculated price bundles

#### 

#### 1/ Individual bundles’ saved text:

Either a saved percentage or a saved amount will be displayed based on your choice of discounting method.

When both types are filled (ie. both “10%” & “$50” are entered for a bundle, the *amount discount* will be prioritized and displayed in the saved text; while the percentage is ignored.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-saved-text.png)

Each bundle can have a different saved text, based on the type of discount applied to it.

#### 2/ Bulk edit the Saved text:

You can change this saved text in the Product Bundles plugin setting, on the “Saved text” option. ALWAYS keep **“[d]”** to display the discounted percentage or amount applied.

For example:

- Back-end: (saved up to [d]) => Front-end: (saved up to $5) (with amount discount)
- Back-end: (saved up to [d]) => Front-end: (saved up to 10%) (with percentage discount)
- Back-end: (save up to 50% now) => Front-end: (save up to 50% now) (same for all bundles)

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-plugin-settings-saved-text.png)

Without this symbol “[d]”, the text will be the same for all bundles on your store, and no number is displayed in the front-end. Saved text is always displayed next to the subtotal of each bundle.

If you’d like to display the *saved text in the starting price* of your bundle as well, go to **WPClever >> Product Bundles >>** choose “Yes” for the “Change price” option.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-change-price.png)

In the front-end, both starting price and total text will be added with a saved text:

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-custom-saved-text.png)

---

