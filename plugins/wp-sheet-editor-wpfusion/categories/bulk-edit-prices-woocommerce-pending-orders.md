# Bulk Edit Prices Woocommerce Pending Orders

*Category from WP Sheet Editor - WPFusion documentation*

---

## Bulk Increase or Decrease Prices in WooCommerce Pending Orders

**Source:** [https://wpsheeteditor.com/bulk-edit-prices-woocommerce-pending-orders/](https://wpsheeteditor.com/bulk-edit-prices-woocommerce-pending-orders/)

To bulk increase or decrease product prices in WooCommerce pending orders, install the **WP Sheet Editor – WooCommerce Orders** plugin, filter your orders by status “Pending payment” using the **Search** tool, then apply the **Bulk Edit** tool to raise or lower prices by a fixed number or by percentage across every filtered order at once. This updates the price of every product line item inside the selected pending orders in a single action, without editing each order individually.

Table of Contents

## Quick Summary

| Task | Tool Used | Method | Result |
| --- | --- | --- | --- |
| Filter pending orders | Search tool (advanced filters) | Field: Status, Operator: =, Value: Pending payment | Only pending payment orders are displayed on the spreadsheet |
| Decrease prices | Bulk Edit tool | Decrease product prices by percentage or by number | All product prices in the filtered orders are reduced at once |
| Increase prices | Bulk Edit tool | Increase product prices by percentage or by number | All product prices in the filtered orders are raised at once |

Managing pricing on pending orders is a common task for WooCommerce store owners. Prices sometimes need to be lowered because of a miscalculation, a discount code that was applied incorrectly, a limited-time offer that needs to be honored after the fact, or a customer support decision made to resolve a complaint. On the other side, prices sometimes need to be raised on pending orders because of a supplier cost increase, a shipping surcharge that was missed at checkout, a currency fluctuation, or a correction to an order that was placed before a scheduled price update went live.

Doing this manually inside the default WooCommerce orders screen means opening each order, editing each line item, and saving the changes one order at a time. But when a store has dozens or hundreds of pending orders that need the same adjustment, this becomes slow and error-prone.

The **WP Sheet Editor – WooCommerce Orders** plugin solves this by displaying all WooCommerce orders in a spreadsheet, where every row is an order and every column is a field. From that spreadsheet you can search, filter, and bulk edit hundreds of orders at once, including increasing or decreasing prices by percentage or by a fixed amount. The plugin also supports advanced searches and lets you export or import orders using CSV files.

You can download the plugin here:

[Download WooCommerce Orders Spreadsheet Plugin](https://wpsheeteditor.com/buy-extension/?extension_id=5416&utm_source=website&utm_medium=blog&utm_campaign=bulk-edit-prices-woocommerce-pending-orders#buy) - or - [Check the features](https://wpsheeteditor.com/extensions/woocommerce-orders-spreadsheet/?utm_source=website&utm_medium=blog&utm_campaign=bulk-edit-prices-woocommerce-pending-orders)

## Video Guides

### Video: Bulk Decrease Prices in Pending Orders

### Video: Bulk Increase Prices in Pending Orders

## Getting Started: Open the Orders Spreadsheet

After installing and activating the plugin, go to **Sheet Editor > Edit Orders**. This opens the orders spreadsheet, where every row represents one order and every column represents a field on that order, including status, customer, products, and prices.

![woocommerce orders displayed in wp sheet editor spreadsheet](https://media.wpsheeteditor.com/wp-content/uploads/2022/01/30200732/woocommerce-orders-spreadeheet.png)

From here, the next step is the same whether you plan to raise or lower prices: filter the spreadsheet down to only your pending orders.

## 1. How to Search for WooCommerce Pending Orders

Open the **Search** tool on the plugin’s toolbar. This tool lets you find orders using several filters, including order status.

![search tool in wp sheet editor for woocommerce pending orders](https://media.wpsheeteditor.com/wp-content/uploads/2022/01/30200814/search-for-pending-orders-01.png)

Select the following values to filter all orders with the “pending payment” status:

- Tick the **Enable advanced filters** checkbox
- **Field:** Status
- **Operator:** =
- **Value:** Pending payment
- Click on **Run search**

![search filter values for woocommerce pending orders](https://media.wpsheeteditor.com/wp-content/uploads/2022/01/30200934/search-for-pending-orders-02.png)

Once you run the search, the spreadsheet updates to display only your pending payment orders, and the active filters are shown above the spreadsheet.

![filtered woocommerce pending orders in spreadsheet](https://media.wpsheeteditor.com/wp-content/uploads/2022/01/30213125/decrease-product-prices-pending-orders.png)

With the pending orders filtered, you’re ready to bulk edit prices. The steps differ slightly depending on whether you need to decrease or increase prices, covered separately below.

## 2. How to Bulk Decrease Prices on Pending Orders

Hover over the **Bulk Edit** tool to see the available one-click bulk changes. For lowering prices, you have two options:

- Decrease product prices by percentage
- Decrease product prices by number

![decrease product prices options in woocommerce pending orders](https://media.wpsheeteditor.com/wp-content/uploads/2022/01/30222211/decrease-product-prices-pending-orders-03.png)

Select these values to complete the decrease:

- **Select the rows that you want to update:** Edit all the rows from my current search
- **Select type of edit:** “Decrease product prices by percentage” or “Decrease product prices by number”
- **Decrease by:** Enter the number or percentage to decrease
- Click **Execute Now**

![bulk decrease product prices form in woocommerce pending orders](https://media.wpsheeteditor.com/wp-content/uploads/2022/01/30213205/decrease-product-prices-pending-orders-02.png)

Once applied, the product prices on every order included in your search are decreased in one pass.

## 3. How to Bulk Increase Prices on Pending Orders

The process for raising prices uses the same **Bulk Edit** tool, with the increase options instead:

- Increase product prices by percentage
- Increase product prices by number

![increase product prices options in woocommerce pending orders](https://media.wpsheeteditor.com/wp-content/uploads/2022/01/30201730/increase-product-prices-on-pending-orders-01.png)

Select these values to complete the increase:

- **Select the rows that you want to update:** Edit all the rows from my current search
- **Select type of edit:** “Increase product prices by percentage” or “Increase product prices by number”
- **Increase by:** Enter the number or percentage to increase
- Click **Execute Now**

![bulk increase product prices form in woocommerce pending orders](https://media.wpsheeteditor.com/wp-content/uploads/2022/01/30201658/increase-product-prices-on-pending-orders-02.png)

Once applied, the product prices on every order included in your search are increased in one pass.

## Should You Increase or Decrease Prices?

| Situation | Recommended Action |
| --- | --- |
| A discount code was applied incorrectly or should have applied but didn’t | Decrease prices to match the intended discount |
| Prices were miscalculated at checkout | Decrease or increase, depending on the direction of the error |
| A limited-time offer needs to be honored after the order was placed | Decrease prices to reflect the promotional rate |
| Customer support agreed to a price adjustment as a resolution | Decrease prices for the affected orders |
| Supplier or shipping costs increased after the order was placed | Increase prices to cover the added cost |
| A scheduled price update should have applied but the order was placed just before it went live | Increase prices to match the new pricing |
| Currency conversion or exchange rate changes affected the order total | Increase or decrease, depending on the direction of the rate change |

## Frequently Asked Questions

### Can I bulk edit prices on orders with a status other than pending?

Yes. The Search tool filters by any order status, including processing, on-hold, completed, or cancelled. Change the Value field in the search filter from “Pending payment” to the status you need, then run the same Bulk Edit steps.

### What’s the difference between decreasing by percentage and decreasing by number?

Decreasing by percentage reduces each product’s price proportionally, so a product priced at $100 with a 10% decrease becomes $90, while a product priced at $50 becomes $45. Decreasing by number subtracts a fixed amount from every product price regardless of its original price, so a $5 decrease makes a $100 product $95 and a $50 product $45. The same logic applies to increases.

### Does this bulk edit change the price of the product itself, or just the price on the order?

The Bulk Edit tool for pending orders updates the price recorded on the order’s line items, not the product’s base price in your store catalog. To change the product’s catalog price instead, use the products spreadsheet in WP Sheet Editor rather than the orders spreadsheet.

### Can I combine a price change with other bulk edits on the same orders?

Yes. Once you’ve filtered your pending orders, you can run multiple Bulk Edit actions in sequence on the same filtered set, such as updating order status, adding order notes, or editing shipping costs, in addition to adjusting prices.

## Conclusion

Whether you need to lower prices to resolve a customer issue or raise them to reflect increased costs, the process starts the same way: filter your WooCommerce orders down to “Pending payment” status using the Search tool, then apply the Increase or Decrease option in the Bulk Edit tool by percentage or by a fixed number. This lets you update pricing across dozens or hundreds of pending orders in a single action instead of editing each order by hand, keeping your store’s pricing accurate and your customers taken care of.

You can download the plugin here:

[Download WooCommerce Orders Spreadsheet Plugin](https://wpsheeteditor.com/buy-extension/?extension_id=5416&utm_source=website&utm_medium=blog&utm_campaign=bulk-edit-prices-woocommerce-pending-orders#buy) - or - [Check the features](https://wpsheeteditor.com/extensions/woocommerce-orders-spreadsheet/?utm_source=website&utm_medium=blog&utm_campaign=bulk-edit-prices-woocommerce-pending-orders)

### Do you need help?

		You can receive instant help in the live chat during business hours, or [you can contact us](https://wpsheeteditor.com/company/contact/) and we will help you via email.

---

