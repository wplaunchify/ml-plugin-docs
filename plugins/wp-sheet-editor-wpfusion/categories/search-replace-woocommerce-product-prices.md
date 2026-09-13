# Search Replace Woocommerce Product Prices

*Category from WP Sheet Editor - WPFusion documentation*

---

## How to Search and Replace WooCommerce Prices in Bulk

**Source:** [https://wpsheeteditor.com/search-replace-woocommerce-product-prices/](https://wpsheeteditor.com/search-replace-woocommerce-product-prices/)

You can search and replace WooCommerce prices in bulk using **WP Sheet Editor – WooCommerce Products**. Instead of opening products one by one, you can find the products you need and update their prices directly from a spreadsheet.

You can download the plugin here:

[Download WooCommerce Products Spreadsheet Plugin](https://wpsheeteditor.com/buy-extension/?extension_id=778&utm_source=website&utm_medium=blog&utm_campaign=search-replace-woocommerce-product-prices#buy) - or - [Check the features](https://wpsheeteditor.com/extensions/woocommerce-spreadsheet/?utm_source=website&utm_medium=blog&utm_campaign=search-replace-woocommerce-product-prices)
The process has two steps:

1. Filter your store catalog to find products with a specific price.
2. Use the bulk editor to replace that price with a new value for all the matching products.

## Step 1: Search for products by price

First, open the **WP Sheet Editor** spreadsheet from your WordPress dashboard by going to **WP Sheet Editor > Edit Products**.

![spreadsheet to search and replace woocommerce prices](https://media.wpsheeteditor.com/wp-content/uploads/2026/09/07205813/woocommerce-products-spreadsheet-bulk-edit-prices.png)

Next, click the **Search** tool in the top toolbar.

![woocommerce search products missing price](https://media.wpsheeteditor.com/wp-content/uploads/2019/04/31142216/wc-search-products-missing-price-3.png)

This tool allows you find the products you want to update based on their current price.

In the search panel, configure the following options:

- Tick the **Enable advanced filters** checkbox.
- **Field:** Select Regular price (
```
_regular_price
```

) or Sale price (
```
_sale_price
```

), depending on which type of price you want to find.
- **Operator:** Select 
```
=
```

 (equals). You can also use operators such as 
```
>
```

 or 
```
<
```

 when you want to find products above or below a particular price.
- **Value:** Enter the price you want to find, such as 
```
45
```

.
- Click **Run search**.

The spreadsheet will refresh and show only the simple products and variation rows that match the price you searched for.

![Search WooCommerce products by regular price in WP Sheet Editor](https://media.wpsheeteditor.com/wp-content/uploads/2026/09/07214459/search-prices-to-replace.jpg)

## Step 2: Replace the old price with the new price

After filtering the products, click **Bulk Edit** in the top toolbar. Enter the following settings:

- **Select the rows that you want to update:** Choose Edit all the rows from my current search. This ensures that the change is applied only to the products returned by the search in Step 1.
- **What field do you want to edit:** Select **Regular price** or **Sale price**, depending on the price you searched for.
- **Select type of edit:** Choose Set value.
- **Replace existing value with this value:** Enter the new price, such as 
```
15.99
```

. This value will replace the old price on the selected products.
- **Select what you will edit:** Choose the product level you want to update based on how your catalog is set up:
- **Edit only parent products**
- **Edit only variations**
- Click **Execute Now**.

![Bulk update regular price for filtered WooCommerce products in WP Sheet Editor](https://media.wpsheeteditor.com/wp-content/uploads/2026/09/07212414/set-same-regular-price-to-all-products.jpg)

WP Sheet Editor processes the updates in batches to avoid timeouts. Once the process finishes, the new prices will be reflected on your WooCommerce products.

### Do you need help?

		You can receive instant help in the live chat during business hours, or [you can contact us](https://wpsheeteditor.com/company/contact/) and we will help you via email.

---

