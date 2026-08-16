# Woocommerce Subscriptions Bulk Edit Prices

*Category from WP Sheet Editor - WPFusion documentation*

---

## Bulk Edit WooCommerce Subscription Prices (Increase, Decrease)

**Source:** [https://wpsheeteditor.com/woocommerce-subscriptions-bulk-edit-prices/](https://wpsheeteditor.com/woocommerce-subscriptions-bulk-edit-prices/)

*Last updated: August 15, 2026.*

With **WooCommerce Subscriptions**, you can easily create subscriptions with recurring payments. Unfortunately, managing those subscriptions as your business grows is not nearly as easy.

**Note:** If you need to update regular catalog product prices instead of recurring subscription orders, check our complete guide on [how to bulk edit WooCommerce product prices](https://wpsheeteditor.com/woocommerce-bulk-edit-product-prices/).

The native WooCommerce search and editing options are extremely limited. For example, if you want to find all active subscriptions priced at exactly $9.00, or you need to bulk raise prices to keep up with inflation, you usually have to open and edit each order one by one. This manual process is tedious, time-consuming, and prone to errors.

In this tutorial, we will show you how to take full control of your recurring revenue. Using the **WP Sheet Editor – WooCommerce Orders** plugin, you will learn how to filter active subscriptions by total price and bulk increase (or decrease) those prices in a matter of minutes.

You can download the plugin here:

[Download WooCommerce Orders Spreadsheet Plugin](https://wpsheeteditor.com/buy-extension/?extension_id=5416&utm_source=website&utm_medium=blog&utm_campaign=woocommerce-subscriptions-bulk-edit-prices#buy) - or - [Check the features](https://wpsheeteditor.com/extensions/woocommerce-orders-spreadsheet/?utm_source=website&utm_medium=blog&utm_campaign=woocommerce-subscriptions-bulk-edit-prices)

## Step 1: Set Up WooCommerce Subscriptions Spreadsheet

Once you have installed and activated the plugin, the first step is to configure your workspace.

Navigate to **WP Sheet Editor > Setup Spreadsheet** in your WordPress dashboard.

![Selecting data columns in the WP Sheet Editor setup screen](https://media.wpsheeteditor.com/wp-content/uploads/2020/05/15001216/13-4.png)

Here, you can select exactly which columns you want to display in your spreadsheet. If there are data points you don’t need (like shipping dimensions or billing company), simply move them to the **Disabled** side. Click **Save** to generate your custom workspace.

![Saving column preferences for WooCommerce Subscriptions](https://media.wpsheeteditor.com/wp-content/uploads/2020/05/15001237/14-4.png)

You will now see all your WooCommerce subscriptions beautifully organized, with each subscription as a row and its details as columns.

![WooCommerce subscriptions displayed in a spreadsheet format](https://media.wpsheeteditor.com/wp-content/uploads/2020/05/15223835/1-7.png)

## Step 2: Search and Filter Active Subscriptions by Price

Before making any bulk edits, you need to isolate the exact subscriptions you want to target. Click the **Search** tool on the top toolbar to open the advanced filtering options.

![Clicking the Search tool on the WP Sheet Editor toolbar](https://media.wpsheeteditor.com/wp-content/uploads/2020/05/15223901/2-5.png)

You can filter by exact price, find a range of prices, or locate subscriptions above/below a specific threshold. Let’s look at three common scenarios:

### Option A: Search for an Exact Price

Let’s say you want to find all active subscriptions currently priced at exactly $9.00. Tick the **Enable advanced filters** checkbox and apply these parameters:

- **Field:** Subscription Status **| Operator:** = **| Value:** Active

Click **Add New** to enter a second rule:

- **Field:** Order Total **| Operator:** = **| Value:** 9.00

Click **Run Search**. The spreadsheet will refresh to show only active subscriptions totaling $9.00.

![Configuring advanced filters for exact WooCommerce subscription price](https://media.wpsheeteditor.com/wp-content/uploads/2020/05/15235725/13-5.png)

### Option B: Search for Prices Equal To or Greater Than

If you want to target premium subscribers (e.g., anyone paying $5.00 or more), use the “Greater Than or Equal To” operator:

- **Field:** Subscription Status **| Operator:** = **| Value:** Active

Click **Add New**:

- **Field:** Order Total **| Operator:** >= **| Value:** 5.00

![Filtering WooCommerce subscriptions by greater than or equal to a price](https://media.wpsheeteditor.com/wp-content/uploads/2020/05/15235744/15-5.png)

### Option C: Search for Prices Equal To or Less Than

If you need to find lower-tier plans to issue a price increase (e.g., recurring orders under $10.00), use the “Less Than or Equal To” operator:

- **Field:** Subscription Status **| Operator:** = **| Value:** Active

Click **Add New**:

- **Field:** Order Total **| Operator:** <= **| Value:** 10.00

![Filtering WooCommerce subscriptions by less than or equal to a price](https://media.wpsheeteditor.com/wp-content/uploads/2020/05/15235804/17-4.png)

## Step 3: Bulk Increase or Decrease Subscription Prices

Now that you have isolated the specific group of active subscriptions using the search tool, you can easily modify their pricing in bulk.

Hover over the **Bulk Edit** tool in the top toolbar to reveal your editing options. Whether you need to run a temporary discount to reduce churn or raise prices to match inflation, you can adjust the values dynamically:

- **Increase subscription prices by percentage** (e.g., +10%)
- **Increase recurring order prices by number** (e.g., +$5.00)
- **Decrease subscription prices by percentage** (e.g., -15%)
- **Decrease subscription prices by number** (e.g., -$10.00)

![Opening the bulk edit tool to adjust subscription prices](https://media.wpsheeteditor.com/wp-content/uploads/2023/02/17213457/Woocommerce-subscriptions-bulk-increase-product-price.jpg)

In the **Bulk Edit** popup window, configure the tool as follows:

- **Select the rows that you want to update:** Choose *Edit all the rows from my current search*.
- **Select type of edit:** Pick your desired action (e.g., Increase subscriptions by percentage).
- **Increase/Decrease by:** Enter your exact percentage or flat numerical value.
- Click **Execute Now**.

![Configuring bulk edit rules to increase subscription prices](https://media.wpsheeteditor.com/wp-content/uploads/2023/02/17213651/Woocommerce-subscriptions-bulk-increase-product-price-percentage-for-active-subscriptions.jpg)

Once the bulk edit is complete, your spreadsheet will instantly refresh. You can verify the adjustments by looking at the updated totals in the **Line items** column.

## Bonus: Exporting Your Subscription Data

Need to run a report on these pricing changes? If you want to download a list of these updated customers or recurring orders for your accounting team, simply click the **Export** option in the top toolbar to generate a clean CSV file of your filtered data.

By bringing the speed and flexibility of spreadsheets into WordPress, the **WP Sheet Editor – WooCommerce Orders** plugin transforms subscription management from an impossible chore into a two-minute task.

You can download the plugin here:

[Download WooCommerce Orders Spreadsheet Plugin](https://wpsheeteditor.com/buy-extension/?extension_id=5416&utm_source=website&utm_medium=blog&utm_campaign=woocommerce-subscriptions-bulk-edit-prices#buy) - or - [Check the features](https://wpsheeteditor.com/extensions/woocommerce-orders-spreadsheet/?utm_source=website&utm_medium=blog&utm_campaign=woocommerce-subscriptions-bulk-edit-prices)

### Do you need help?

		You can receive instant help in the live chat during business hours, or [you can contact us](https://wpsheeteditor.com/company/contact/) and we will help you via email.

---

