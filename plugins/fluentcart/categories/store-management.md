# Store Management

*Category from FluentCart documentation*

---

## Store Management ​

**Source:** [https://docs.fluentcart.com/guide/store-management/](https://docs.fluentcart.com/guide/store-management/)

# Store Management ​

The **Store Management** section in FluentCart is your central hub for managing the daily work of your online store. Here, you can manage customer orders, keep track of your customers, and monitor your inventory. It has all the tools you need to keep your store running smoothly.

This section covers the following key aspects of store management:

- **Orders Management:** Learn how to view, filter, create, edit, refund, and collect payments for all orders.
- **Customers Management:** Discover how to view, search, filter, and manage individual customer profiles and their associated data.
- **Product Reviews:** Collect star ratings and customer feedback on your products, moderate what gets published, and reply to your customers in public.
- **Exporting Your Store Data:** Export orders, customers, subscriptions, and licenses to CSV or JSON straight from your browser.

By mastering the tools within Store Management, you can fulfill orders efficiently, keep customer information accurate, and make sure your product availability is always up-to-date.

---

## Customers Management ​

**Source:** [https://docs.fluentcart.com/guide/store-management/customers-management/](https://docs.fluentcart.com/guide/store-management/customers-management/)

# Customers Management ​

The **Customers Management** section in FluentCart gives you with a centralized database of all your store's customers. This allows you to view their details, track their purchase history, manage their addresses, and perform various customer-centric actions.

Good customer management helps you give great service and know your customers better.

This section covers the following aspects of customer management:

- **Viewing & Searching Customers:** Learn how to navigate the main Customers list and use search functionality to locate specific customer profiles.
- **Using Advanced Customer Filters:** Discover how to segment your customer base using powerful filtering options, such as purchase count and first purchase date.
- **Customer Details Overview:** A comprehensive guide to understanding all the information presented on an individual customer's profile page, including their orders, licenses, and contact details.

By using these customer management tools, you can keep customer records accurate, understand their behavior, and make your interactions more personal.

---

## Customer Details Overview ​

**Source:** [https://docs.fluentcart.com/guide/store-management/customers-management/customer-details-overview](https://docs.fluentcart.com/guide/store-management/customers-management/customer-details-overview)

# Customer Details Overview ​

The individual **Customer Details** screen in FluentCart provides a comprehensive profile for each of your customers. This centralized view allows you to access all relevant information about a customer, including their contact details, addresses, purchase history, and associated licenses.

Customers also have access to their own personalized dashboard where they can manage their profile, view orders, subscriptions, and licenses. For more details on what your customers see and can manage, refer to the [Customer Dashboard Profile Management](/guide/customer-dashboard/profile-management) documentation.

## Accessing Customer Details ​

From your WordPress dashboard, navigate to **FluentCart Pro > Customers**. On the **Customers** list, click on the **Customer Name** next to the customer you wish to inspect.

## Understanding the Customer Details Screen ​

The Customer Details screen is organized into several panels, each providing specific information about the customer.

### 1. Customer Header ​

At the top of the screen, you'll find the customer's primary identification.

- **Customer Name:** The name of the customer.
- **Order Count:** The total number of orders placed by this customer.
- **WP User ID:** The customer's associated WordPress User ID.

### 2. Customer Information Panel ​

This section provides contact details and address management options for the customer.

- **Contact Information:** Displays the customer's email address.
- **Default Addresses:** Shows the customer's default shipping and billing addresses.
- **Action Links:**

- **Edit customer information:** Allows you to modify the customer's core details.
- **Manage shipping address:** Provides access to manage or add shipping addresses for this customer.
- **Manage billing address:** Provides access to manage or add billing addresses for this customer.
- **Labels:** A section for assigning custom labels to the customer.

### 3. Orders Section ​

This table lists all orders placed by this specific customer.

- **Order Details:** Includes columns for Order ID, Created at, Total, Payment Status, Status, and Order Type.
- **Clickable Orders:** Each order ID is clickable, allowing you to quickly navigate to the [individual Order Details screen](/guide/store-management/orders-management/order-details-overview) for that specific transaction.

### 4. License Key Section ​

For customers who have purchased digital products with licenses, this section displays their associated license keys.

- **License Details:** Includes columns for License Key, Product name, Order ID, and Activations.
- **Clickable License Keys:** Each license key is clickable, allowing you to navigate to the [License Details screen](/guide/product-types-creation/creating-digital-products-with-licenses#_7-product-specific-license-settings) for that specific license.

The Customer Details page is an invaluable tool for understanding your customers' interactions with your store and providing personalized support.

---

## Using Advanced Customer Filters ​

**Source:** [https://docs.fluentcart.com/guide/store-management/customers-management/using-advanced-customer-filters](https://docs.fluentcart.com/guide/store-management/customers-management/using-advanced-customer-filters)

# Using Advanced Customer Filters ​

FluentCart's **Advanced Filter** tool on the Customers screen allows you sort your customers into groups and quickly find exact groups of customers by using very specific rules. This is super useful for sending special ads to certain groups, understanding your customers, or doing certain office jobs.

## Accessing and Using the Advanced Filter ​

From your WordPress dashboard, navigate to **FluentCart Pro > Customers**. On the **Customers** page, enable the **"Advanced Filter"** by clicking the **"toggle"** button in the top right corner. The Advanced Filter section will expand, allowing you to define your filtering criteria.

## Defining Filter Criteria ​

The Advanced Filter enables you to combine various properties to create precise customer segments.

- **Order Property:** This allows you to filter customers based on aspects of their orders.

- **By Order Items:** Find customers based on the specific items they bought.
- **Purchase:** Filter customers by the number of purchases they have made (e.g., customers with more than 5 purchases, or exactly 1 purchase).
- **First Purchase Date:** Filter customers based on the date of their very first order. This is useful for identifying new customer cohorts or specific periods of acquisition.
- **Last Purchase Date:** Filter customers based on the date of their most recent order. This is helpful for identifying recent buyers or customers who haven't purchased in a while.
- **Customer Property:** This new feature lets you filter based on customer-specific details.

- **Customer Name:** Find customers by their first or last name.
- **Customer Email:** Search for customers using their email address.
- **Customer LTV:** Filter customers by their Lifetime Value, which is the total amount of money they’ve spent in your store.
- **Labels:** This option allows you to filter your customer list based on the labels you have assigned to them.

- **Label Name:** Select one or more labels to find all customers who have been tagged. This is a great way to view specific customer segments you have created.
- **Adding Multiple Conditions:**

- Click **"+ Add"** to add another rule for filtering. This typically functions as an "AND" condition, meaning all criteria must be met.
- Click the **"+ OR"** button to add an alternative filter condition. This allows you to find customers who meet *either* the previous set of criteria *or* the new one.

## Applying and Resetting Filters ​

1. After setting your desired filter conditions, click the **"Apply"** button to view the filtered list of customers.
2. To clear all applied filters and view the complete customer list again, click the **"Reset"** button.

## Saving Custom Filter Views (New Feature!) ​

If you frequently use the same advanced filters, you can save them as quick-access tabs.

1. **Save your filter:** After setting your desired conditions, click **"+ Save as view"** next to the **Apply** and **Reset** buttons.

1. **Name your view:** Give it a descriptive name (e.g., **"High LTV Customers"** or **"Recent Hoodie Buyers"**) and, optionally, a short description.
2. **Access anytime:** Open the **More views** dropdown beside your default tabs to quickly reuse your saved filters.

1. **Delete a view:** In the **More views** dropdown, click the trash icon next to a view name you no longer need.

Using the Advanced Filter effectively, and saving your most-used views, helps you gain deeper customer insights and manage customers faster.

---

## Viewing & Searching Customers ​

**Source:** [https://docs.fluentcart.com/guide/store-management/customers-management/viewing-searching-customers](https://docs.fluentcart.com/guide/store-management/customers-management/viewing-searching-customers)

# Viewing & Searching Customers ​

The customers list in FluentCart provides an organized overview of all individuals who have interacted with your store. This guide will show you how to navigate this list and effectively use search and filtering options to find specific customer profiles.

## Accessing the Customers List ​

In your WordPress dashboard, go to **FluentCart Pro** > **Customers** from the left-hand menu. This will open the **Customers** page, where you’ll see a table with all your registered customers.

## Understanding the Customers List Table ​

The Customers list table presents key information for each customer at a glance:

- **Customer:** Displays the customer's name and their associated email address.
- **Address:** Shows a summarized address for the customer.
- **Purchases:** The total number of times they've bought something from your store.
- **LTV (Lifetime Value):** This shows the total amount of money a customer has spent in your store over their entire history. It helps you quickly identify your most valuable customers.
- **Last Purchase Date:** Shows the date and time of their most recent purchase.
- **Customer Since:** Displays the date and time when the customer's record was first created in your system.

## Finding Specific Customers ​

Need to find a specific person? The search bar at the top of the page makes it fast and easy.

Simply type what you're looking for into the search bar. You can search by a customer's **ID**, **First Name**, **Last Name**, or **Email Address**. Hit **Enter**, and the list will instantly filter to show you the results.

## Browsing Through Pages ​

If you have a lot of customers, you'll see page controls at the bottom of the table. You can use these to browse through different pages or change how many customers are shown on each page (e.g., 10 per page).

---

## Exporting Your Store Data ​

**Source:** [https://docs.fluentcart.com/guide/store-management/exporting-data](https://docs.fluentcart.com/guide/store-management/exporting-data)

# Exporting Your Store Data ​

Sooner or later you'll need your store data outside of FluentCart: a spreadsheet for your accountant, a customer list for a mail campaign, or a full backup before a big change. FluentCart's **Data Export** tool lets you pull your orders, customers, subscriptions, and licenses into a CSV or JSON file in just a few clicks, without installing anything extra or waiting for an email to arrive.

Exports run right inside your browser. FluentCart fetches your records in small batches and writes each one into the file as it goes, so even a store with tens of thousands of orders exports smoothly without straining your server.

INFO

Data Export requires **FluentCart Pro**. You'll still see the export dialog on the free version, but it shows an upgrade notice in place of the export options.
## What You Can Export ​

FluentCart gives you a dedicated export on each of its four main list screens. What comes out depends on where you start:

- **Orders:** Your order records, and optionally the line items, addresses, transactions, tax rows, and metadata attached to them.
- **Customers:** Customer profiles, and optionally their saved addresses and metadata.
- **Subscriptions:** Subscription records, and optionally their parent orders, transactions, licenses, and metadata.
- **Licenses:** License records, and optionally their activations, activated sites, orders, and metadata.

Products are not part of this tool. If you need to move product data in or out, use the [Bulk Product Import](/guide/product-types-creation/bulk-product-import) feature instead.

## Finding the Export Option ​

Before you export anything, it helps to know where the option lives. There is no standalone Export button on these screens. Every export sits inside the **More actions** dropdown in the top-right corner, and the menu item is named after whatever you're looking at.

From your WordPress dashboard, navigate to **FluentCart Pro** > **Orders**, then click **More actions** and select **Export Orders**.

INFO

If you don't see an export option in the **More actions** menu, your user role probably doesn't have permission to export that record type. See [Controlling Who Can Export](#controlling-who-can-export) further down this page.
## Exporting Your Orders ​

Selecting **Export Orders** opens the export dialog, where you'll make three quick decisions before the file downloads.

### Step 1: Choose Which Records to Export ​

The **Records to export** dropdown at the top decides how much of your data goes into the file:

- **Current page:** Only the records currently visible on screen. The count is shown in the option itself, so you always know what you're getting.
- **All items:** Every record of that type in your store. If you have a filter active, this option reads **(filter applied)** so it's clear the export respects it.
- **Selected:** Only the rows you've ticked in the list. This becomes available once you've selected at least one record.
- **Matching the current view:** Everything your active search or filter matches, not just the page you're looking at. This becomes available once a filter is active.

A little preparation here saves a lot of time. Filtering the list *before* you open the dialog gives you a smaller, more useful file and a much quicker export. If you only need last month's paid orders, filter for them first, then export.

### Step 2: Pick a File Format ​

Next, choose the kind of file you want. Both options are explained right on the cards:

- **CSV file:** Creates one row per record and opens cleanly in Excel, Numbers, and Google Sheets. This is the right choice for spreadsheets, accounting handoffs, and mailing lists.
- **JSON file:** Preserves the underlying data structure, including related records. Choose this for backups, migrations, or when a developer has asked you for the data.

### Step 3: Select Your Columns or Data Modules ​

What you see in this final section depends on the format you picked.

When **CSV file** is selected, you'll see a list of **CSV columns** with a running count at the top, such as *"17 of 21 selected"*. Tick the columns you want in your spreadsheet and untick the ones you don't. The **Select all** checkbox turns everything on or off at once. FluentCart pre-selects a sensible set, so you can often leave this alone.

Orders offer **21 columns** to choose from:

- **Order details:** Order ID, Invoice number, Order status, Payment status, Shipping status, Order type, Order date, Completed date
- **Money:** Currency, Subtotal, Discount total, Shipping total, Tax total, Total amount, Refund total
- **Everything else:** Items count, Payment method, Customer ID, Customer name, Customer email, Mode

When **JSON file** is selected, the list changes to **data modules** instead. Each module is a related group of records you can include or leave out, and every export has one required root module that's always present:

- **Orders** *(required)*: The core order rows.
- **Customers:** The customer linked to each order.
- **Order items:** The individual line items on each order.
- **Order addresses:** Billing and shipping addresses.
- **Transactions:** Payment and refund records.
- **Tax rates:** Tax rows applied to each order.
- **Order metadata:** Any extra data attached to an order.

### Step 4: Start the Export ​

Once you're happy with your choices, click **Export file** at the bottom of the dialog. A progress bar appears so you can watch the export run, and you can cancel at any point if you change your mind. When it finishes, the file lands on your computer.

Keep the browser tab open while an export is running. Closing or refreshing it cancels the export, though nothing in your store is affected and you're free to start again.

## Exporting Your Customers ​

Customer exports work exactly the same way. Navigate to **FluentCart Pro** > **Customers**, click **More actions**, and select **Export Customers**.

The dialog offers **18 columns**, covering who the customer is and what they're worth to your store:

- **Identity:** Customer ID, First name, Last name, Full name, Email, Status
- **Purchase history:** Purchases, Lifetime value, Average order value, First purchase date, Last purchase date, Customer since
- **Location:** Country, State, City, Postcode
- **Linked accounts:** WordPress user ID, Contact ID

Choosing **JSON file** here gives you three modules: **Customers** *(required)*, **Customer addresses**, and **Customer metadata**.

INFO

Pair this with the [Advanced Customer Filters](/guide/store-management/customers-management/using-advanced-customer-filters) to build a precise segment first, then export only those customers. It's the fastest way to get a targeted list out of FluentCart.
## Exporting Your Subscriptions ​

For recurring revenue data, navigate to **FluentCart Pro** > **Subscriptions**, click **More actions**, and select **Export Subscriptions**.

Subscriptions carry the most detail of any export, with **27 columns** available:

- **The subscription:** Subscription ID, Status, Item name, Product ID, Variation ID, Quantity
- **The customer:** Customer ID, Customer name, Customer email, Original order ID
- **Billing terms:** Billing interval, Signup fee, Recurring amount, Recurring tax total, Recurring total, Billing cycles, Completed billings, Trial days
- **How it's collected:** Collection method, Payment method, Gateway subscription ID
- **Dates:** Next billing date, Trial end date, Expiration date, Canceled date, Created date, Updated date

The JSON modules here are **Subscriptions** *(required)*, **Customers**, **Original orders**, **Transactions**, **Subscription metadata**, and **Licenses**.

INFO

**Collection method** is worth including if you're auditing your recurring revenue. It tells you which subscriptions charge a saved card automatically and which ask the customer to pay each invoice. See [Store Billing for Subscriptions](/guide/product-types-creation/store-managed-subscriptions) for what the difference means.
## Exporting Your Licenses ​

If you sell licensed software, navigate to **FluentCart Pro** > **Licenses**, click **More actions**, and select **Export Licenses**.

License exports offer **15 columns**:

- **The license:** License ID, License key, Status, Activation limit, Activation count, Expiration date
- **Who it belongs to:** Customer ID, Customer name, Customer email
- **What it came from:** Order ID, Subscription ID, Product ID, Variation ID
- **Dates:** Created date, Updated date

The JSON modules are **Licenses** *(required)*, **Customers**, **Orders**, **Subscriptions**, **License activations**, **Activated sites**, and **License metadata**.

INFO

The Licenses screen and its export only appear while FluentCart's licensing module is active. If you don't sell licensed products, you won't see this option at all.
## Understanding Your Exported File ​

FluentCart puts real care into making these files safe to open and share, and it's worth knowing what that means in practice.

### CSV files ​

Your CSV arrives ready for a spreadsheet app. Accented characters and non-Latin scripts display correctly, because FluentCart writes the file with the encoding marker spreadsheets look for. Commas, quotes, and line breaks inside your data are escaped properly, so a customer note containing a comma won't shift everything into the wrong column.

There's one protection that matters more than it sounds. Any value starting with 
```
=
```

, 
```
+
```

, 
```
-
```

, or 
```
@
```

 is neutralized before your spreadsheet can treat it as a formula. Without this, a customer name or note beginning with one of those characters would be executed as a formula the moment the file opened.

Amounts are written as normal decimal currency values, so 
```
$103.50
```

 exports as 
```
103.50
```

 and is ready to total up.

### JSON files ​

JSON keeps the shape of your data intact, with each record carrying its root module and only the related modules you selected.

Sensitive material is deliberately left out. Authentication hashes are never written to the file, and nested credentials such as payment tokens and gateway secrets are replaced with 
```
[REDACTED]
```

. You can hand a JSON export to a developer without handing over your store's keys.

INFO

An order or customer export is a complete copy of real customer data, including names, email addresses, and billing addresses. Store the file somewhere secure and delete it once you're finished. Your privacy obligations follow the file wherever it goes.
## Exporting Large Amounts of Data ​

Big exports need no special handling, but a little background helps you plan.

FluentCart requests your records in batches and adjusts the batch size as it goes, based on how quickly your server responds. Each batch is written into the file before the next is requested, which keeps memory use flat whether you're exporting 200 records or 200,000.

Where the file gets written depends on your browser:

- **Chrome, Edge, and other Chromium browsers:** You're asked where to save the file up front, then each batch is written straight to disk. There's no practical size limit.
- **Safari, Firefox, and others:** The file is held in memory until the export finishes, with a limit of **64 MB**. The dialog tells you when you're in this mode.

If you're on Safari or Firefox and expect a very large file, you have two easy options. Either run the export in a Chromium browser, or split the job using filters and export one date range or one order status at a time.

## Controlling Who Can Export ​

Exporting is governed by its own set of permissions, kept separate from simply viewing records. Someone who can read your customer list cannot necessarily download a copy of it, which is exactly how it should be.

Four permissions control this, one per record type:

- **Export Orders**
- **Export Customers**
- **Export Subscriptions**
- **Export Licenses**

You assign them per role under **FluentCart Pro** > **Settings** > **Roles and Permissions**, just like any other permission. When a role doesn't have the matching one, the export option disappears from that screen's **More actions** menu, and the request is refused even if it's issued some other way. Removing the permission genuinely removes the ability, not just the button.

It's worth being deliberate here. Viewing one customer record at a time and downloading your entire customer database are very different levels of access, even for the same person. Grant export permissions only to the roles that truly need them. For the full walkthrough on building roles, see [Roles and Permissions](/guide/settings-configuration/roles-permissions/).

## Troubleshooting ​

A few things occasionally trip people up, and each has a simple fix.

- **There's no export option in the More actions menu:** Your role is missing the matching export permission. Check **Roles and Permissions** first, and make sure you're looking inside **More actions** rather than hunting for a separate button.
- **The dialog shows an upgrade notice:** Data Export is a FluentCart Pro feature. The dialog appears on the free version so you can see what it offers.
- **The export stopped partway through:** Closing or refreshing the tab cancels an export in progress. Just start it again. Exports only read your data, so nothing was changed.
- **The file is much bigger than expected:** JSON grows quickly when several modules are selected, since each one adds related rows for every record. Untick the modules you don't need, or switch to CSV.
- **The export failed with a size error:** A single record carrying an unusually large amount of metadata can exceed the response limit. FluentCart reports this rather than quietly cutting your data short. Untick the metadata module and run the export again.

With Data Export set up and the right permissions in place, your store's records are always a couple of clicks away from a spreadsheet, a backup, or your accountant's inbox.

---

## Orders Management ​

**Source:** [https://docs.fluentcart.com/guide/store-management/orders-management/](https://docs.fluentcart.com/guide/store-management/orders-management/)

# Orders Management ​

The **Orders Management** section in FluentCart is where you handle every sale and customer buy in your store. This powerful interface allows you to track orders from creation to fulfillment, manage payments, and handle refunds efficiently.

This section covers the following aspects of order management:

- **Viewing & Filtering Orders:** Learn how to navigate the main Orders list, use various filters to locate specific orders, and understand the different order statuses.
- **Creating New Orders (Manually):** Steps to manually create an order directly from the backend, useful for phone orders or custom requests.
- **Order Details Overview:** A comprehensive guide to understanding all the information displayed on an individual order's detail page, including items, financial summaries, customer info, and activity logs.
- **Editing Existing Orders:** How to modify an order after it has been placed, including adding/removing products, adjusting quantities, and applying coupons.
- **Processing Refunds:** Detailed steps on how to issue full or partial refunds, with options to cancel associated subscriptions and revoke licenses.
- **Collecting Payments for Modified Orders:** How to collect outstanding balances after an order has been modified, including generating custom payment links and marking payments as received.
- **Changing Order Statuses:** Learn how to update the status of an order (e.g., Processing, Completed, On Hold, Canceled) and manage shipping statuses.

By using these order management tools well, you can ensure smooth order processing, accurate record-keeping, and excellent customer service.

---

## Changing Order Statuses ​

**Source:** [https://docs.fluentcart.com/guide/store-management/orders-management/changing-order-statuses](https://docs.fluentcart.com/guide/store-management/orders-management/changing-order-statuses)

# Changing Order Statuses ​

Managing order statuses is crucial for efficient order fulfillment and clear communication with your customers. FluentCart allows you to easily update the status of individual orders.

## Understanding Order Statuses ​

Orders in FluentCart naturally progress through various statuses, indicating their current state:

- **Processing:** The order has been received and payment is confirmed, but items are still being prepared for fulfillment (e.g., packing, shipping).
- **Completed:** The order has been successfully fulfilled, items shipped (if physical), and payment fully received.
- **On Hold:** The order is temporarily paused, often due to pending payment, stock issues, or customer query.
- **Canceled:** The order has been canceled by the administrator or customer.
- **Refunded:** The order has been refunded.

## How to Change Order Status ​

You can change an order's status and perform other related actions from the **Order Details screen**.

1. Navigate to the **Order Details** screen for the specific order you wish to update.
2. In the top right corner of the screen, click the **"More Actions"** dropdown menu.
3. From the dropdown, you will find several actions to manage the order's status:

- **Change Shipping Status:** This option is primarily for physical products. It allows you to update the shipping status of items within the order, crucial for tracking fulfillment progress.
- **Mark As Complete:** Selecting this option will mark the entire order as completed. This signifies that the order has been fully processed, items shipped (if physical), and payment fully received.
- **Cancel Order:** Selecting this option will mark the entire order as canceled. This often triggers stock adjustments and may be followed by a [refund process](/guide/store-management/orders-management/processing-refunds) if payment was already received.
- **Back to processing:** This action allows you to revert an order's status to "Processing." This is useful if an order was prematurely marked as "Completed" or "On Hold" and still requires further attention or [editing](/guide/store-management/orders-management/editing-existing-orders).
- **Receipt:** This option typically allows you to view or re-send the customer's purchase receipt for the order.

### Using the Activity Log ​

Any changes to an order's status, whether manual or automated, are recorded in the **Activity Log** on the Order Details screen. This provides a clear audit trail of all status transitions for the order.

---

## Collecting Payments for Modified Orders ​

**Source:** [https://docs.fluentcart.com/guide/store-management/orders-management/collecting-payments-modified-orders](https://docs.fluentcart.com/guide/store-management/orders-management/collecting-payments-modified-orders)

# Collecting Payments for Modified Orders ​

When you [edit an existing order](/guide/store-management/orders-management/editing-existing-orders) and add new products or increase quantities, the order's total value will increase. FluentCart gives flexible options to collect the outstanding balance from your customer.

## When to Collect Payment ​

After you have [edited an order](/guide/store-management/orders-management/editing-existing-orders) and are in the process of saving your changes (by clicking "Disable Editing"), if the order's total has increased, you will be prompted to collect the additional payment. The system will indicate a "Total Amount Due" or similar.

## Payment Collection Options ​

To collect the outstanding balance, navigate to the **"Transaction Details"** section on the [Order Details screen](/guide/store-management/orders-management/order-details-overview). You will see a **"Collect Payments"** dropdown menu.

Clicking this dropdown reveals the following options:

### 1. Custom Payment Link ​

This is the most common way to collect an additional payment. It creates a special, secure link that you can send directly to your customer.

1. From the **Collect Payments** dropdown menu, choose the **Custom Payment Link** option.
2. A small pop-up window will appear with a unique link created just for this order's remaining balance.
3. Click the **Copy** button to copy this link to your clipboard. You can now paste it into an email, a chat message, or however you normally communicate with your customer.

When your customer clicks the link, they will be taken to a simple and secure page where they can pay the outstanding amount using your store's available payment methods.

### 2. Mark Order as Paid ​

This option is perfect for when you've already received the payment outside of FluentCart. Maybe the customer paid you the difference in cash, sent a bank transfer, or you charged them directly through your payment processor's website. This feature lets you manually update the order to reflect that payment

1. From the **Collect Payments** dropdown, simply select **Mark order as paid**.
2. That's it! **FluentCart** will instantly update the order's status to show that it's fully paid. The outstanding balance will be cleared, and the transaction will be marked as complete.

---

## Creating New Orders (Manually) ​

**Source:** [https://docs.fluentcart.com/guide/store-management/orders-management/creating-new-orders](https://docs.fluentcart.com/guide/store-management/orders-management/creating-new-orders)

# Creating New Orders (Manually) ​

FluentCart allows you to manually create new orders directly from your WordPress admin dashboard. This feature is particularly useful for taking phone orders, creating custom invoices for clients, or managing specific sales scenarios outside of the standard checkout process.

## Steps to Create a New Order ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Orders** in the left sidebar.
2. On the **Orders** screen, locate and click the **"Create Order"** button in the top right corner.
3. This will open a new order creation interface. You will need to:

- **Customer Information:** Choose an existing customer from your store or you may create new.
- **Products:** Search for and add the products the customer is purchasing. - You can select product variants if applicable.
- Specify the quantity for each product.
- **Have a Coupon:** If a discount coupon applies to this manual order, you can enter and apply it here. Applying a coupon removes any manual discount already added to the order.
- **Add Discount:** If you want to add a discount for the order instead of a coupon, click the **Add Discount** option to enter a discount value and an optional reason. This option is only available when no coupon is applied — see [Manual Discounts and Tax](#manual-discounts-and-tax) below.
- **Add Shipping Cost:** Manually you can add shipping charges for physical products.
- **Review Totals:** Ensure the order subtotal and total amount are correct after adding products and any discounts/shipping.
- **Notes:** Click the **Notes** icon to add any private notes or comments relevant to the order.
- **Labels:** A section for assigning custom labels.
4. **Choose Payment Method:** Select the payment method for this order. This might include:

- Marking the order as "Paid" if payment was received offline (e.g., cash, bank transfer).
- Generating a custom payment link to send to the customer for online payment.
- Processing payment directly if you have integrated payment gateways.
5. **Finalize Order:** Once all details are correct and the payment method is selected, click the **Save** button finalize the order.

## Manual Discounts and Tax ​

A coupon and a manual discount can't be on the same order at the same time: the **Add Discount** option is hidden whenever a coupon is applied, and applying a coupon while a manual discount is set removes that discount.

Coupons and manual discounts also affect the order total differently:

- **Coupons** are applied at the product/line-item level, reducing each affected item's taxable amount before tax is calculated.
- **Manual discounts** are applied as a single order-level amount subtracted from the subtotal. They do not reduce the product taxable base or recalculate product tax — tax stays based on the full product amount.

**Example:**

|  | Amount |
| --- | --- |
| Product Subtotal | €100 |
| Tax | €20 |
| Manual Discount | -€10 |
| Total | €110 |

This is FluentCart's current calculation behavior — the €20 tax isn't reduced by the €10 manual discount, so it's worth accounting for when discounting a taxable order manually.

Manual Order Use Cases

Manual order creation is great for:

- Phone sales or direct sales.
- Creating quotes or invoices for custom services.
- Handling special customer requests or specific payment arrangements.

---

## Editing Existing Orders ​

**Source:** [https://docs.fluentcart.com/guide/store-management/orders-management/editing-existing-orders](https://docs.fluentcart.com/guide/store-management/orders-management/editing-existing-orders)

# Editing Existing Orders ​

FluentCart provides robust functionality to edit an order even after it has been placed. This allows you to make necessary adjustments such as adding or removing products, changing quantities, applying coupons, or modifying shipping costs.

When Editing Is Disabled

The **Edit** button is disabled, with an explanatory tooltip, whenever any of the following is true:

- The order has already been **paid** — *"Order cannot be edited once paid."*
- The order's status is **Completed**, **Archived**, or **Canceled** — *"Order cannot be edited once it is {status}."*
- The order is a **subscription** order — *"Subscription Order cannot be edited."*Returning to Processing Status

If a Completed order needs editing, you can use the "Back to processing" option from the "More Actions" dropdown on the Order Details page to revert its status to Processing. This only reverts the order **status** — it does not change the order's payment status. If the order is already paid, editing stays disabled afterward; this action only restores editability for a completed order that isn't marked as paid.
## Entering Edit Mode ​

1. Navigate to the **Order Details** screen for the specific order you wish to edit.
2. In the top right corner of the Order Details screen, click the **"Edit"** button.
3. The screen will transform into an editable interface, and the "Edit" button will change to **"Disable Editing"**.

## Making Changes to an Order ​

Once in edit mode, you can perform various modifications to the order:

### 1. Adding Products ​

You can add new products to the existing order:

1. In the "Order Items" section, locate the **"Search products"** field and the **"Browse"** button.
2. Use the search field to find the product(s) you wish to add, or click "Browse" to view your product catalog.
3. A modal window will appear, listing your products. Select the desired products and their variations (if applicable) by checking the box next to them.
4. Click **"Add Items"** to add them to the order.

### 2. Modifying Existing Order Items ​

For products already in the order:

- **Adjust Quantity:** Click the **"Adjust Quantity"** link below a product to change the number of units.
- **Remove Item:** Click the **"Remove Item"** link below a product to delete it from the order.

### 3. Applying Coupons ​

You can apply or modify coupon codes for the order:

1. Locate the **"Have a Coupon?"** section in the financial summary area.
2. Enter the coupon code in the provided field.
3. Click **"Apply"**.

Applying a coupon removes any manual discount already added to the order — see [Adding a Manual Discount](#_5-adding-a-manual-discount) below.

### 4. Adding Shipping Costs ​

For physical products, you can manually add or adjust shipping costs:

1. Locate the **"Add Shipping"** option in the financial summary area.
2. Enter the desired shipping amount.

### 5. Adding a Manual Discount ​

You can apply an order-level discount instead of a coupon. This option is only available when no coupon is applied to the order:

1. Locate the **"Add Discount"** option in the financial summary area.
2. In the dialog, enter a **Discount value** and, optionally, a **Reason for discount** — customers can see this reason.
3. Click **"Apply"**. The discount is staged on the order and saved along with your other changes when you click **"Disable Editing"**.

Manual Discounts and Tax

A coupon and a manual discount can't be on the same order at the same time: the **Add Discount** option is hidden whenever a coupon is applied, and applying a coupon while a manual discount is set removes that discount. They also affect tax differently: coupons are applied at the product/line-item level and can reduce that item's taxable amount, while a manual discount is a single order-level amount subtracted from the subtotal — it does not reduce the product taxable base or recalculate product tax. For example, a €100 taxable product with €20 tax and a €10 manual discount still totals €110, with tax unchanged at €20. See [Manual Discounts and Tax](/guide/store-management/orders-management/creating-new-orders#manual-discounts-and-tax) for more detail.
## Saving Your Changes ​

After making all necessary modifications:

1. Click the **"Disable Editing"** button in the top right corner. - This action will save all your changes to the order.
- If the order total has increased, you may be prompted to [collect additional payment](/guide/store-management/orders-management/collecting-payments-modified-orders).

---

## Instant Modal Checkout ​

**Source:** [https://docs.fluentcart.com/guide/store-management/orders-management/instant-modal-checkout](https://docs.fluentcart.com/guide/store-management/orders-management/instant-modal-checkout)

# Instant Modal Checkout ​

FluentCart's **Instant Checkout** feature is designed to help you sell products faster by cutting out the middleman. Instead of forcing customers to go through a "Cart" page and then a "Checkout" page, this feature opens a secure payment window (a popup or "modal") right where the customer is.

By removing these extra steps, you make it much easier for customers to buy, which leads to fewer abandoned carts and more successful sales.

Watch this quick video to see Instant Modal Checkout in action and learn how to set it up:

## How it Works ​

When Instant Checkout is active, clicking a **Buy Now** button won't take the customer to a new page. Instead:

1. **A sleek payment window** pops up instantly.
2. **The customer enters their details** and picks a payment method.
3. **The purchase is completed** without ever leaving the product page.

Before You Start

Instant Checkout requires at least one active payment gateway (like Stripe or PayPal). Verify yours under **FluentCart > Settings > Payment Settings**. The popup cannot process payments without an active gateway.
## Implementation Method 1: Using Custom Code (The Snippet Way) ​

If you want to enable this feature for all the standard **Buy Now** buttons FluentCart renders on your single product pages and product cards, you can use a unified code snippet. You can add this to your theme's 
```
functions.php
```

 file or use a plugin like **FluentSnippets**.

### Configuring the Feature ​

Copy and paste the following code to enable the modal and define your allowed payment methods:

php
```
// 1. Enable the "Modal" (popup) checkout functionality
add_filter('fluent_cart/enable_modal_checkout', '__return_true');

// 2. Define which payment gateways appear in the popup
add_filter('fluent_cart/modal_checkout/filter_active_payment_methods', function($methods) {
    return ['stripe', 'paypal', 'offline_payment'];
}, 10, 1);
```
### Understanding the Parameters ​

- **fluent_cart/enable_modal_checkout**: This filter is the switch for FluentCart's own **Buy Now** buttons (on single product pages and product cards). Returning 
```
true
```

 tells FluentCart to intercept those clicks and open the popup instead of redirecting to the checkout page. Buttons added via the Gutenberg block, shortcode, or page-builder widgets (Methods 2 to 4) have their own per-button toggle and don't need this snippet.
- **fluent_cart/modal_checkout/filter_active_payment_methods**: This filter lets you limit which gateways appear in the popup. It works as an **allow-list**: return an array of the gateway slugs you want to show. If you return an empty array (the default), all of your active gateways are shown.
- **The Return Array ['stripe', 'paypal', 'offline_payment']**: Modify this list to include only the gateways you want. For example, if you only want Stripe, change it to 
```
['stripe']
```

. Other valid slugs include 
```
square
```

, 
```
razorpay
```

, 
```
paystack
```

, 
```
mollie
```

, 
```
paddle
```

, 
```
sslcommerz
```

, 
```
airwallex
```

, 
```
mercado_pago
```

, 
```
flutterwave
```

, and 
```
authorize_dot_net
```

.

Once saved, your shop is ready for instant purchases!

Using Bricks Builder?

FluentCart's [Bricks buttons](/guide/customization-and-themes/fluentcart-bricks-blocks) follow this global snippet. They have no per-button modal toggle, so this method is the only way to enable Instant Checkout for them.
## Implementation Method 2: The Gutenberg Block (The No-Code Way) ​

If you prefer building your pages visually using the WordPress Block Editor (Gutenberg), you can enable Instant Checkout for specific buttons without touching any code. To learn more about the block itself, see the [Gutenberg blocks guide](/guide/customization-and-themes/using-gutenberg-blocks).

### How to set it up: ​

1. **Edit your page**: Open the post or page where you want the button.
2. **Add the Block**: Click the (+) icon and search for FluentCart's **Buy Now** block.
3. **Open Settings**: Click on the button block you just added to select it. On the right side of your screen, you will see the Block Settings panel.
4. **Enable the Checkbox**: Look for the section labeled **Enable Instant Modal Checkout** and simply mark the checkbox.
5. **Select Product**: Select the product for the button by clicking on the **Select Product** button.

This specific button will now trigger the instant checkout popup for the product you've selected.

## Implementation Method 3: The Shortcode ​

If you're placing buttons in a page builder, widget area, or anywhere shortcodes are supported, add the 
```
instant_checkout="yes"
```

 attribute to the checkout button shortcode:

```
[fluent_cart_checkout_button variation_id="113" instant_checkout="yes" button_text="Buy Now"]
```Replace 
```
113
```

 with the variation ID of your product. The 
```
variation_id
```

 attribute is required, and the button won't render without it. The 
```
instant_checkout
```

 attribute also accepts 
```
1
```

, 
```
true
```

, or 
```
on
```

, and you can optionally add 
```
target
```

 and 
```
class
```

 attributes. For all available attributes, see the [FluentCart shortcodes guide](/guide/customization-and-themes/fluentcart-shortcode).

## Implementation Method 4: The Elementor Widget ​

If you build your pages with Elementor, FluentCart's **Buy Now Button** widget can trigger the instant checkout popup as well, no code needed. In the widget's **Content Tab**, set **Enable Modal Checkout** to **Yes**. See the [Elementor widgets guide](/guide/customization-and-themes/using-elementor-widgets) for setup details.

Using **Divi** instead? FluentCart's Buy Now module for Divi has the same **Enable Modal Checkout** option. See the [Divi modules guide](/guide/customization-and-themes/fluentcart-divi-modules) for details.

---

Whichever method you choose, your customers can now complete their purchase in seconds, right where they clicked **Buy Now**.

---

## Order Bump ​

**Source:** [https://docs.fluentcart.com/guide/store-management/orders-management/order-bump](https://docs.fluentcart.com/guide/store-management/orders-management/order-bump)

# Order Bump ​

The **Order Bump** feature in FluentCart allows you to present a last-minute, complementary product offer directly on the checkout page. This simple, high-converting technique encourages customers to add an extra item to their cart before completing their purchase, significantly increasing your average order value (AOV).

## 1. Enabling the Order Bump Feature ​

Before you can create any order bumps, you must first activate the feature in your store settings.

1. Go to **FluentCart Pro** in your WordPress dashboard.
2. Navigate to **Settings** from the left-hand menu.
3. Click on the **Features & Addon** tab.
4. Locate the **Order Bump** toggle and switch it to **Active**.
5. Click the **Save Settings** button to confirm the change.

### 2. Creating a New Order Bump Offer ​

Once the feature is active, you can create and manage your offers.

1. Navigate to the main FluentCart Pro menu.
2. Hover over the **More** menu item in the top navigation bar.
3. Click on **Order Bump**. This will take you to the Order Bumps management screen.
4. Click the **Add New** button on the top right to create a new offer. A pop-up window will appear where you need to define the initial details of your offer.

1. To start creating your new offer, you must first define its core identity:

- **Bump Name:** Enter the main title for your offer. This is the compelling headline that customers will see, so make it attractive.
- **Order Bump Product:** From the dropdown menu, select the product that you want to offer as the order bump.

Click the **Create** button.

After clicking "Create," you will be taken to the main configuration screen to set up the rest of your order bump's rules and design.

### 3. Configuring the Order Bump Details ​

The Order Bump configuration screen is broken down into simple, manageable steps:

#### A. Basic Info ​

- **Enable this Order Bump:** Toggle this switch to instantly turn the offer on or off without deleting the configuration.
- **Bump Title:** This is the headline that captures the customer’s attention at checkout (e.g., "Get this magic offer in 50% discount").
- **Bump Description:** Add a short, exciting description or a compelling reason why the customer should take the offer.

#### B. Promotional Product ​

- **Select Product:** Choose the specific product you want to offer as the bump. This item will be added to the customer's cart if they accept the offer. Both **Published** and **Private** products are now available in this dropdown — so you can offer hidden, customer-specific, or invite-only items as a bump without having to make them publicly visible in your store.

#### C. Discount ​

- **Discount Amount:** Define the savings for this bump product. You can set the discount as a fixed amount or a **Percentage**.
- **Enable Coupon Discount on top of offer discount:** This option determines if other global coupons applied to the main cart can also be stacked on top of the Order Bump discount.
- **Free shipping for this offer item:** If desired, you can enable free shipping specifically for the bump product.

#### D. Display Conditions (Detailed) ​

This is the crucial step where you define exactly when and for whom this offer appears at checkout using conditional logic.

- **Enable Conditions for this Order Bump:** Check this box to activate the conditional logic.
- **Adding Conditions:** You can stack multiple conditions using dropdown menus to create precise rules based on cart content and value: - **Cart Items:** Check if a specific product (**Fleece Jacket**) **Exists** or doesn't exist in the customer's cart.
- **Items Subtotal:** Set a threshold for the cart value (e.g., **Items Subtotal** is **Greater Than $30**).
- **Adding Condition Groups:** The **Add New Condition Group** button allows you to set up separate, alternative sets of rules (OR logic). The bump will display if *any* of the defined groups' conditions are met.

#### E. Priority ​

- **Set Priority:** If you have multiple Order Bumps active with overlapping display conditions, the priority number (e.g., 1, 2, 3) determines which offer will be displayed first. **Lower numbers mean higher priority.**

After configuring all the details, click **Save** (standard practice) to activate your bump offer.

### 4. Managing and Viewing Order Bumps ​

On the main **Order Bumps** screen, you can manage all your existing offers:

- **Status Tags:** Quickly see which offers are **Active**, **Draft** (saved but not enabled), or **All**.
- **Action Menu:** The vertical ellipsis (
```
...
```

) icon provides options to **Delete** an existing bump offer.

- **Checkout View:** Once active, the offers appear on your store's checkout page, clearly labeled (e.g., **Recommended**) with the title, description, and discount, ready for the customer to accept with a single click.

INFO

Some integrations lock the checkout to a single item, for example a booking that must not be swapped or removed. Bumps stay hidden on those locked checkouts unless the integration explicitly opts in to them, in which case the customer can still accept a matching offer alongside the locked item. Developers can find the 
```
fluent_cart/cart/accepts_additional_items
```

 hook that controls this at [dev.fluentcart.com](https://dev.fluentcart.com/).

---

## Order Details Overview ​

**Source:** [https://docs.fluentcart.com/guide/store-management/orders-management/order-details-overview](https://docs.fluentcart.com/guide/store-management/orders-management/order-details-overview)

# Order Details Overview ​

The Order Details screen in FluentCart provides a comprehensive breakdown of each individual customer transaction. This centralized view allows you to review all associated information, track its progress, and perform necessary management actions.

## Accessing Order Details ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Orders**.
2. You will see a list of all the orders your store has received.
3. To open the details for a specific order, simply click on its order number in the first column (labeled # Date).

## Understanding the Order Details Screen ​

The Order Details screen is organized into several panels, each providing specific information about the order.

### 1. Order Header ​

At the top of the screen, you’ll see the main order information and quick action buttons.

- **Receipt Number:** A unique number that identifies the order.
- **Order Status:** Shows the current state of the order (like pending or completed).
- **Refund Button:** Initiates the [refund process](/guide/store-management/orders-management/processing-refunds) for the order.
- **Edit Button:** Allows you to enter [edit mode for the order](/guide/store-management/orders-management/editing-existing-orders).
- **More Actions Dropdown:** Contains additional actions such as "Change Shipping Status", "Cancel Order", Back to Processing, and "Receipt".

### 2. Order Items ​

This section lists all the products included in the order.

- **Product Name:** The name of the purchased product.
- **Quantity:** The number of units purchased.
- **Individual Item Price:** The price of a single unit of the product.
- For physical products, you might see an "Order Items Delivered" button to mark fulfillment for specific items.

### 3. Payment & Financial Summary ​

Provides a summary of the order's financial aspects, including payments received and any outstanding amounts.

- **Payment Status:** At the top of this section, a status like Paid quickly tells you whether the customer has completed their payment.
- **Subtotal:** This is the total cost of all the products in the cart before any other charges, like shipping, are added.
- **Shipping:** This line shows the shipping cost that was added to the order.
- **Total:** This is the final price of the order that the customer was charged (Subtotal + Shipping + Taxes, etc.).
- **Total Paid:** This shows how much money the customer has actually sent for this order.
- **Net Payment:** This is the final amount your store has received after all payments have been processed.

### 4. Transaction Details ​

This table provides a log of all payment transactions related to this specific order, including both payments and refunds.

- **ID:** The transaction ID.
- **Gateway ID:** The unique ID from the payment gateway.
- **Date:** The date and time of the transaction.
- **Payment Method:** The method used for the transaction.
- **Total:** The amount of the individual transaction.
- **Status:** The status of the transaction.
- **Settlement Time:** When the payment actually settled with the provider.

Why settlement time differs from the order date

An order's date is when the customer checked out. That can be days or weeks before the money moves — a payment link paid later, a delayed webhook, or an offline payment confirmed by hand. Settlement time records the moment the payment succeeded, so reconciling FluentCart against a payout statement lines up.

Gateways that report an exact charge time supply it directly. For the rest, FluentCart records the moment the transaction became successful.
### 5. Customer Information ​

Displays key details about the customer who placed the order.

- **Customer Name:** The name of the customer.
- **Contact Information:** The customer's email address.
- **Shipping Address:** The address provided for shipping, if applicable.
- **Billing Address:** The address provided for billing.
- **Labels:** Any custom labels assigned to the customer.
- This panel also offers quick links to [edit customer information](/guide/store-management/customers-management/customer-details-overview#_2-customer-information-panel), [manage shipping address](/guide/store-management/customers-management/customer-details-overview#_2-customer-information-panel), and [manage billing address](/guide/store-management/customers-management/customer-details-overview#_2-customer-information-panel).

### 6. Notes ​

A private field where administrators can add notes or comments related to the order.

### 7. Activity Log ​

A complete, time-ordered record of all important events and changes related to this order. This helps you track how the order has progressed and makes troubleshooting easier.

- **Examples:** Order status updates (e.g., "Order status updated from completed to processing"), payment paid, refunds processed, license upgrades, and order creation events.

### 8. UTM Details ​

This section shows the marketing attribution recorded when the customer placed their order — where they came from, and which campaign brought them.

**UTM parameters**

- **UTM Campaign:** The specific marketing campaign that brought the customer to your store.
- **UTM Source:** Where the traffic came from, such as 
```
google
```

 or 
```
newsletter
```

.
- **UTM Medium:** The type of channel, such as 
```
cpc
```

 or 
```
email
```

.
- **UTM Term:** The keyword, for paid search traffic.
- **UTM Content:** Which variant of an ad or link was clicked.
- **UTM ID:** Your own campaign identifier.

**Ad click identifiers**

When the customer arrived from a paid ad, the platform's click identifier is recorded alongside the UTM values — 
```
gclid
```

, 
```
gbraid
```

, or 
```
wbraid
```

 for Google Ads, 
```
fbclid
```

 for Meta, 
```
msclkid
```

 for Microsoft Advertising, plus 
```
gad_campaignid
```

 and 
```
gad_source
```

 where Google supplies them.

These let you match an individual FluentCart order back to the exact click in your ad platform's reporting, which UTM parameters alone can't do. They also travel on the URL rather than in a cookie, so they survive cases where cookie-based tracking is blocked.

**Referring URL**

If the customer arrived without any UTM tags, FluentCart records the referring URL instead. Referrals from your own domains are ignored, so navigation within your own site never overwrites the real external source.

Attribution is last-touch

Every order records attribution. When a returning visitor arrives through a new tagged link, that newer touch replaces the previous one — so this card credits the campaign that brought them back for the visit where they bought, not the one that first introduced them.

For campaign-level totals across all orders, see the [Order Sources Report](/guide/reporting-analytics/order-sources-report).
### 9. Tax Information ​

This section on the sidebar shows the tax details the customer provided during checkout.

- **Tax ID:** Displays the customer's **Tax Identification** Number. This is especially useful for B2B (business-to-business) sales or for complying with regional tax regulations that require collecting this information. Learn more about [tax configuration and classes](/guide/tax-&-duties/configuration-and-classes).

---

## Processing Refunds ​

**Source:** [https://docs.fluentcart.com/guide/store-management/orders-management/processing-refunds](https://docs.fluentcart.com/guide/store-management/orders-management/processing-refunds)

# Processing Refunds ​

FluentCart provides a straightforward way to process refunds for your orders, whether it's a full refund or a partial amount. You can also manage related subscriptions and licenses during the refund process.

## Steps to Process a Refund ​

1. Navigate to the **Order Details** screen for the specific order you wish to refund.
2. In the top right corner of the Order Details screen, click the **"Refund"** button.
3. A **"Refund Payment"** modal window will appear.
4. Configure the refund details:

- **Refund with transaction:** Use the dropdown to select the specific payment transaction you wish to refund. This is crucial if an order had multiple payments or partial payments.
- **Select Item/s:** This is a crucial step for keeping your records straight. Click this dropdown to choose the specific products the customer is returning. This helps keep your sales reports and inventory accurate, especially for partial returns.
- **Refund amount:** Enter the amount you wish to refunds. - FluentCart displays the **"Max refund amount for this transaction"**, ensuring you don't refund more than was paid in that specific transaction. This allows for **partial refunds**. You can manually adjust the amount if needed.
- **Restock Quantity:** If a customer purchased a simple or variable product (such as a shirt), you’ll see a Restock Quantity section. This option allows you to restore product stock directly while processing a refund. You can specify how many units of each product should be added back to your store’s inventory from the same screen.
- **Reason of refund:** Add a short Description to note the reason for the refund (this helps you remember why this refund).
- **Subscription:** If the order includes a subscription, you will see a checkbox for **"Cancel Subscription (if any)"**. - Checking this box will not only process the refund but also automatically cancel the associated subscription.
- **License:** If the order includes a digital product with a license, you will see a checkbox for **"Revoke License (if any)"**. - Checking this box will revoke the issued license in addition to processing the refund, ensuring proper access control for licensed digital goods.
5. After configuring all options, click the **"Refund"** button at the bottom of the modal (e.g., "Refund $51.3") to confirm and process the refund.

## Post-Refund Status ​

- After a refund is processed, the order's financial summary on the Order Details screen will update to reflect the refund amount (e.g., **"Total Refund Owed"** alert).
- The **Activity Log** for that order will also record the refund event, including details like who processed it and when.

---

## Viewing & Filtering Orders ​

**Source:** [https://docs.fluentcart.com/guide/store-management/orders-management/viewing-filtering-orders](https://docs.fluentcart.com/guide/store-management/orders-management/viewing-filtering-orders)

# Viewing & Filtering Orders ​

The Orders list is your central hub for tracking all transactions and customer purchases in your FluentCart store. This guide will show you how to view your orders and use filters to quickly find the specific orders.

## Accessing the Orders List ​

From your WordPress dashboard, navigate to **FluentCart Pro** > **Orders**. This will take you directly to the main **Orders** screen, where you'll see a list of all the transactions in your store.

## Understanding the Orders List Table ​

Your orders are neatly organized in a table. Each row is a single order, and each column gives you a quick piece of information:

- **Date:** The date and time when the order was placed.
- **Customer:** The name of the customer who placed the order.
- **Items:** The number of distinct product items included in the order.
- **Total:** The total monetary value of the order.
- **Payment Status:** Indicates the current status of the payment.
- **Status:** The current fulfillment or processing status of the order.
- **Order Type:** Differentiates between various types of transactions.
- **Action Icons:** On the far right of each row, you'll see icons that let you quickly print things like order details.

## Customizing Your View & Actions ​

You can change what you see on the Orders page to fit your needs and quickly clean up your data. In the top-right corner, you’ll find a **More actions** dropdown button that gives you a few handy options:

### Showing or Hiding Order Stats ​

If you want a quick "health check" of your store, you can toggle the order stats panel.

Just click the **More actions** button and select **Show Order Stats**. A summary will appear at the top, showing you important numbers like:

- **All Orders:** The total number of orders your store has ever received.
- **Paid Orders:** How many orders have been successfully paid for.
- **Paid Order Items:** The total number of individual items sold.
- **Order value (Paid):** The total amount of money you've earned from paid orders.

*(If you want to hide this summary to get more space on your screen, just click the dropdown again and choose the Hide Order Stats option).*

### Show Bulk Actions ​

Selecting this option from the dropdown will reveal checkboxes and bulk management tools on your orders list. This allows you to select multiple orders at once to change their statuses or perform other actions simultaneously, saving you a lot of time.

Sometimes you need to apply the same action to many orders at once, such as removing old records. That's where bulk actions come in handy: simply select multiple orders and click **Delete Selected** button to remove them all at once.

### Delete Test Orders ​

When you are first setting up your store, you will likely create a few fake orders to test your payment gateways. Instead of deleting them one by one, simply click **Delete Test Orders** from the dropdown to instantly clean up your dashboard and reset your data before going live.

## Filtering Orders ​

FluentCart provides many ways to filter your orders, helping you narrow down the list based on status or other criteria.

### 1. Filtering by Order Status ​

Across the top of the list, you'll see tabs for the most common order statuses. You can click on any of them to instantly filter your orders:

- **All**: Shows every single order in your store.
- **Completed**: Only shows orders that are fully paid and fulfilled.
- **Processing**: Filters for orders that have been paid but are still waiting to be shipped or completed.
- **On Hold**: Shows orders that might be waiting for payment or need some other manual check-up.

For even more filter options, click the **More views** dropdown menu. Here you can find more specific filters like:

- **Paid**: Shows all orders that have been paid for, no matter their fulfillment status.
- **Subscription**: Narrows the list to only the first order a customer made when they signed up for a subscription.
- **Renewal**: Shows only the orders that were automatically created when a subscription renewed.
- **Refunded**: Displays orders that have been fully refunded.
- **Partially Refunded**: Shows orders where you only returned part of the money to the customer.
- **Upgraded From / Upgraded To**: These are helpful for tracking subscription upgrades. One shows the original order, and the other shows the new, upgraded order.

### 2. Using the Advanced Filter ​

For times when you need to get super specific, the **Advanced Filter** is your best friend.

Click the toggle button next to the search bar to turn on the **Advanced Filter**. This opens up a new panel where you can set very detailed rules. Clicking the **+ Add** button reveals several categories to build your filter:

- **Order Property**: Filters related to the order itself, like which product was ordered or the payment method used. For example, you can filter By Order Items, Order Status, Payment Status, Order Type, Payment Method, Order Amount, Order Date.
- **Customer Property**: Filters based on details about the customer, like their name or email address. For example, you can filter by Customer Name, Customer Email.
- **Transactions Property**: Lets you search by specific payment details, such as the Transaction ID, Transaction Status, Card Brand, or the last 4 digits of their card.
- **License Property**: Filters for orders that contain software licenses, based on the license key or status.
- **Labels**: Filters orders based on any custom labels you have assigned.

You can add multiple rules by clicking the **+OR** button to create very powerful and specific searches. When you're done, click **Apply**. To go back to the full list, just click **Reset**.

### 3. Using the Search Bar ​

If you just need to find something fast, the search bar at the top of the page is perfect. You can type in an Order ID, customer name, email, or product name to instantly find what you're looking for.

---

## Product Reviews ​

**Source:** [https://docs.fluentcart.com/guide/store-management/product-reviews/](https://docs.fluentcart.com/guide/store-management/product-reviews/)

# Product Reviews ​

**Product Reviews** let your customers rate your products and share what they thought of them. Star ratings, written feedback, and verified purchase badges appear right on your product pages, so new shoppers can see real opinions before they decide to buy. You stay in full control, because every review passes through your own moderation queue first.

Reviews are built into FluentCart, so there is nothing extra to install. You just turn the feature on and choose the rules that fit your store.

## How Reviews Work ​

Every review follows the same simple path from the customer to your product page:

1. A customer opens one of your products and clicks the **Write a Review** button.
2. A drawer slides in with a short form for a star rating and their written feedback.
3. FluentCart checks whether they are allowed to review that product, based on your settings.
4. The review is saved as either **Approved** or **Pending**, depending on your auto-approval setting.
5. You review it from the **Reviews** screen, where you can approve it, mark it as spam, or throw it away.
6. Once approved, the review appears on the product page and updates the product's average rating.

## Enabling Product Reviews ​

Reviews ship with FluentCart, but the feature has its own switch so you can decide when your store is ready for it.

1. Log in to your **WordPress Dashboard**.
2. Navigate to **FluentCart > Settings** in the side menu.
3. Select **Product Reviews** from the left-hand sidebar.
4. Turn on the **Enable Product Reviews** toggle.
5. Click the **Save** button.

Once the feature is on, a **Reviews** screen appears under the **Products** menu in the FluentCart top bar, next to **All Products** and **Attributes**, and your product pages can start collecting feedback.

INFO

If the feature is turned off, the **Reviews** screen is hidden and no review sections show on your storefront. Any reviews you already collected stay safely in your database and come straight back when you switch the feature on again.
## Turning Reviews Off for a Single Product ​

The setting above controls your whole store. Some products do not suit reviews, though, so each product carries its own checkbox that can opt out of the store-wide setting.

1. Navigate to **FluentCart > Products** and open the product you want to change.
2. Find the **Publishing** card in the right-hand column.
3. Tick **Disable reviews for this product**.
4. Save the product.

The review section disappears from that product's page, while every other product carries on as normal. The checkbox is unticked by default, so new products collect reviews as soon as the feature is on.

## Seeing Ratings at a Glance ​

Your **Products** list carries a **Reviews** column, so you can see how every product is rated without opening anything. Each row shows the average star rating and the number of reviews it is based on.

## What This Section Covers ​

Reviews touch a few different parts of your store, so this section is split into focused guides:

- **Review Settings:** Choose who can leave reviews, whether reviews go live automatically, and how many appear per page.
- **Moderating Reviews:** Approve, filter, and bulk-manage every review from one screen.
- **Displaying Reviews on Your Store:** Use the review blocks, or the reviews shortcode, to place ratings and feedback exactly where you want them.
- **Photo Reviews & Helpful Votes:** Let customers attach photos to their reviews and vote the most useful ones to the top.
- **Product Schema for Search Results:** See how ratings and reviews are shared with search engines for rich results.

With reviews turned on, your product pages start building social proof on their own, and you keep the final say over everything that gets published.

---

## Displaying Reviews on Your Store ​

**Source:** [https://docs.fluentcart.com/guide/store-management/product-reviews/displaying-reviews](https://docs.fluentcart.com/guide/store-management/product-reviews/displaying-reviews)

# Displaying Reviews on Your Store ​

Once reviews are enabled, your product pages start showing customer feedback on their own. If you build your own layouts, FluentCart also gives you six review blocks for the WordPress block editor and a shortcode for pages that are not built from blocks, so you can place the rating, the review list, and the **Write a Review** button exactly where they work best in your design.

## The Default Product Page ​

With the feature turned on, FluentCart adds a review section to your single product template automatically. You do not need to add anything for this to work.

Shoppers get two halves that work together:

- **The rating summary card** on the left shows the average score out of 5, the star row, how many reviews it is based on, and a bar for each star level so the spread is obvious at a glance. The **Write a Review** button sits at the bottom of the card.
- **The review list** on the right shows the reviews themselves, each with the reviewer's name, their star rating, how long ago they posted, a title, and their feedback.

Above the list, shoppers can narrow what they see with the filter chips: **All**, plus one chip per star level from **5** down to **1**. The dropdown on the right sorts the list, with four choices:

- **Newest** (the default)
- **Oldest**
- **Highest Rating**
- **Lowest Rating**

When a product has collected more reviews than your **Reviews Per Page** setting allows, the list pages through the rest.

INFO

FluentCart Pro adds two more filter chips: **With Photos** appears once photo reviews are enabled, and **Verified** narrows the list to purchase-verified reviews. Enabling helpful votes also adds a **Most Helpful** sort option. See [Photo Reviews & Helpful Votes](/guide/store-management/product-reviews/photo-reviews-helpful-votes).
## How Customers Write a Review ​

Clicking **Write a Review** opens a drawer that slides in from the side of the page. By default it shows the whole form at once, so the customer can fill it in from top to bottom:

- **How would you rate this product?:** A star selector *(Required)*. This field is left out entirely if you turned **Enable Star Ratings** off.
- **Review title:** A short summary, up to 80 characters *(Optional)*.
- **Your review:** The feedback itself, up to 1,500 characters *(Required)*.
- **Name and email:** Guests are also asked for their name and email address, and the email is marked private.
- **Photos:** Appears only when photo reviews are enabled, and the customer can leave it empty.

They finish with **Submit review**.

If you would rather walk customers through the form one step at a time, set **Field Layout** to **Steps (one at a time)** on the [Write a Review](#_5-write-a-review) or [Review Form](#_6-review-form) block. The form then shows the rating, the details, and the photos on separate steps, and the customer moves through them with **Back** and **Next**.

Customers can come back and revise what they wrote. The button changes to **Edit your review** for anyone who has already reviewed that product.

INFO

Editing an approved review sends it back to your **Pending** queue, unless **Auto-approve Reviews** is on. This stops a review from being approved as praise and then quietly rewritten into something else.
## The Review Blocks ​

For custom layouts, the block editor gives you smaller pieces you can arrange yourself. This is useful when you want the star rating up next to the product title, or a full review section on your home page.

### Accessing the Review Blocks ​

To add a review block to any page, post, or template:

1. From your WordPress dashboard, open the **page**, **post**, or **template** you want to edit.
2. Click the **plus icon (+)** to open the block inserter.
3. Scroll to the **FluentCart** category, or search for the block by name.
4. Place the block where you want it in your layout.

INFO

The review blocks only exist while the **Reviews** feature is switched on in your [review settings](/guide/store-management/product-reviews/review-settings). The blocks themselves are free. FluentCart Pro unlocks some of the layouts and view modes described below.
### Choosing Which Product a Block Shows ​

Every review block that you place on its own starts with a **Product** panel, and it is the first thing to get right:

- **Query type > Default:** The block picks up whichever product is being viewed. Use this on a single product template, where the block should adapt to each product automatically.
- **Query type > Custom:** The block always shows one specific product. A **Select Product** button appears so you can choose it. Use this on a landing page, your home page, or anywhere outside a product template.

Blocks placed inside a **Product Reviews** container do not show this panel. The container owns the product, and everything inside follows it.

### 1. Product Reviews ​

This is the complete package, and the quickest way to add a full review section to a custom layout. It holds the rating summary, the review list, and the **Write a Review** button, and it follows one product.

The block is a container. Open the **List View** and you will find a **Rating Summary with Review** block and a **Review List** block inside it, so you can restyle either half, move them around, or drop your own blocks in beside them.

In the **Layout** panel, choose a **Layout preset** to rebuild the whole section from a ready-made arrangement. Use the tabs **All layouts**, **List**, **Grid**, **Carousel**, and **Photo** to narrow the choices. Picking a preset replaces whatever is currently arranged inside the container, and the panel shows **Custom layout** whenever you have rearranged the blocks by hand.

| Layout | Type | What it looks like |
| --- | --- | --- |
| Classic | List | The summary card on the left and the list on the right, with the count, filter chips, sorting, and numbered pages. Free. |
| Minimal List | List | One review per row, with no header above the list and no dates. |
| Compact | List | Stars, a couple of lines, and a Read more link. No avatar, date, title, photos, or reply and votes footer. |
| Card Grid | Grid | Two cards to a row, with the filter and sorting above and page numbers like "Page 2 of 7". |
| Masonry | Grid | Three columns, each card as tall as its content. |
| Summary on Top | List | The average rating and star breakdown across the top, with the reviews underneath. |
| Photo Grid | Photo | Three cards to a row, each with the customer's photo across the top. Shows only reviews that have photos. |
| Photo Wall | Photo | Four photos to a row, with the stars, name, and date over the foot of each. Shows only reviews that have photos. |
| Photo Strip | Photo | A slider band of customer photos, each opening in a lightbox. Meant to sit above a full list. |
| Carousel | Carousel | Two reviews at a time, with arrows over the cards and dots below. |
| Testimonials | Carousel | Each review as a quote with the reviewer's face, name, and stars beneath. Three at a time, changing automatically. |

INFO

**Classic** is free. Every other layout needs FluentCart Pro, and choosing one without Pro shows a notice instead of applying it.
### 2. Rating Summary with Review ​

The rating summary card on its own: the average score, the star breakdown, and a **Write a Review** button underneath. Reach for this when you want the summary and the call to action in one place, and the reviews themselves somewhere else on the page.

- **Product:** Choose **Default** to follow the current product, or **Custom** to pin the block to one product.
- **Star Color:** Inside the card sits a **Rating Summary** block with its own **Star Color** panel, so the stars can match your brand instead of the default amber.

### 3. Review List ​

The customer reviews on their own, with filtering, sorting, and pagination but no summary card. Pair it with **Rating Summary with Review** when your design wants the two separated.

The **Layout** panel controls how the reviews are arranged:

- **View Mode:** Choose **List**, **Grid**, **Masonry**, or **Slider**. **List** is free. The other three need FluentCart Pro, and without Pro the list stays a single column.
- **Reviews Per Row** (Grid and Masonry) or **Reviews Per Slide** (Slider): From 2 to 4. Narrow screens always show one at a time.

When you pick **Slider**, an extra **Behavior** panel appears:

- **Autoplay:** **Disabled**, **Always**, or **On Hover**. When autoplay is on, **Autoplay Delay (ms)** sets the time between slides.
- **Show arrows:** Turns the previous and next arrows on or off. **Arrow Size** offers **Small**, **Medium**, and **Large**, and **Arrow Placement** puts them **On the reviews**, **Beside the reviews**, or **Below the reviews**.
- **Show pagination:** Adds slider indicators, with a **Pagination Type** of **Dots**, **Fraction**, **Progress Bar**, or **Segmented**.
- **Infinite loop:** Lets the slider wrap around from the last review to the first.

#### What Each Part of the List Shows ​

The list is built from smaller blocks, so you can remove, reorder, and restyle each part. Open the **List View** to see them:

- **Review Count:** The "N Reviews" heading.
- **Review Filter:** The star filter chips.
- **Review Sorting:** The sort dropdown. Its **Default Sort** can be **Newest**, **Oldest**, **Highest Rating**, or **Lowest Rating**.
- **Review Pagination:** The pager. Choose **Numbers**, **Fraction**, or **Bullets**, and set **Reviews Per Page** from 1 to 50. Use **Use the store setting** to follow your store-wide **Reviews Per Page** setting again.
- **Review Item:** The card that repeats for every review. Its **Minimum rating** setting hides lower-rated reviews from the list entirely, from **All ratings** up to **5 stars only**, and the count and pages follow. Only the first **Review Item** in a list is used.

Inside a **Review Item** you can arrange the individual fields by adding, removing, or moving these blocks: **Review Author Avatar**, **Review Author Name**, **Review Rating**, **Review Verified Badge**, **Review Variation Title**, **Review Date**, **Review Title**, **Review Content**, **Review Photos**, **Review Votes**, and **Review Reply**. A field disappears from the card when you remove its block.

A few of them carry their own settings:

- **Review Rating:** A **Star Color** panel, with **Reset to default** to go back to the store's color.
- **Review Content:** **Words shown**, from 0 to 200. At 0 the whole review shows. Any other number cuts longer reviews down to that many words with a **Read more** link.
- **Review Photos:** An **Attachments** panel. **Attachments Shown** sets how many photos a review displays, and the rest sit behind a **+** that opens them in the lightbox. Choose where the **+** counter sits, then either set an **Attachment Width** and **Attachment Height** for the tiles or switch on **Full Width Attachments** to give each photo its own line. With full width on, the Pro options **Attachment As Card Background** and **Flush To Card Edges** let a photo take over the card.

### 4. Product Rating ​

The star rating on its own, as a compact inline element, with the number of reviews in brackets next to it. Ideal beside a product title, inside a card, or anywhere a full review section would be too much.

- **Product:** Choose **Default** to follow the current product, or **Custom** to pin the block to one product.
- **Minimum Reviews:** Hides the rating until the product has at least this many reviews. Leave it at 0 to always show it, including five empty stars on a product with no reviews.
- **Minimum Average Rating:** Hides the rating unless the product averages at least this many stars. Half stars are allowed, and 0 shows every rating.

### 5. Write a Review ​

A single button that opens the review submission form. Place it anywhere you want to invite feedback.

The **Button Settings** panel decides what happens when a customer clicks it:

- **Open In:** Choose **Drawer (slides in from the side)**, which is the default, or **Modal (centered on the screen)**.
- **Field Layout:** Choose **Inline (all fields at once)**, the default, or **Steps (one at a time)** to walk the reviewer through rating, details, and photos.

The button changes its label depending on who is looking at it, and the **Button Text** panel lets you write all three versions yourself:

- **New Review:** Shown when the visitor has not reviewed this product yet. The default is **Write a Review**.
- **Edit Review:** Shown when the visitor already has a review for this product. The default is **Edit your review**.
- **Logged Out:** Shown when a visitor must log in before reviewing. The default is **Log in to Review**.

INFO

The **Logged Out** label only ever appears if your **Who can leave reviews?** setting requires an account. On a store set to **Anyone**, guests go straight to the review form.
### 6. Review Form ​

The review form printed directly on the page, with no button and no drawer. Use it on a dedicated "leave a review" page, or under your product description when you want the form always in view.

- **Product:** Choose **Default** to follow the current product, or **Custom** to pin the block to one product.
- **Field Layout:** Choose **Inline (all fields at once)** or **Steps (one at a time)**, exactly as on the **Write a Review** block.

## The Reviews Shortcode ​

Pages that are not built from blocks, such as a page made with a page builder or the classic editor, can show the same section with a shortcode. It draws the same reviews as the **Review List** block, so a page built with the shortcode and a page built with blocks look alike.

```
[fluent_cart_product_reviews]
```On a product page, with no attributes, it shows the current product's reviews. Anywhere else, add the product's ID with the 
```
id
```

 attribute, which you can find in the product's list row next to its name:

```
[fluent_cart_product_reviews id="741" view_mode="grid" columns="3" per_page="6"]
```Yes or no values accept 
```
yes
```

, 
```
no
```

, 
```
true
```

, 
```
false
```

, 
```
1
```

, 
```
0
```

, 
```
on
```

, or 
```
off
```

. An unrecognized value is ignored and the default applies.

INFO

Like the blocks, the shortcode only works while the **Reviews** feature is on. The 
```
grid
```

, 
```
masonry
```

, and 
```
slider
```

 view modes and the 
```
media_backdrop
```

 and 
```
media_flush
```

 attributes need FluentCart Pro. Without Pro the shortcode shows a single-column list.
### Product and Layout ​

| Attribute | Values | Default |
| --- | --- | --- |
| id | A published product's ID | The current product |
| view_mode | list, grid, masonry, slider | list |
| columns | 2 to 4, for grid, masonry, and slider | 2 |
| per_page | 1 to 100 | Your store's Reviews Per Page setting |
| pagination | numbers, fraction, bullets (the list pager, not the slider indicators) | numbers |
| max_words | 1 to 500, words shown before Read more | The whole review |
| summary | yes or no, the rating summary card | yes |
| summary_position | side, top, cta (only the Write a Review button) | side |
| count | yes or no, the "N Reviews" line | yes |
| filter | yes or no, the star chips | yes |
| sorting | yes or no, the sort dropdown | yes |
| sort_by | created_at, rating | created_at |
| sort_order | ASC, DESC | DESC |
| photos | only, to list just the reviews that have photos | All reviews |
| star_color | A hex color such as #00009F | #f59e0b |

### What Each Review Shows ​

Each of these takes 
```
yes
```

 or 
```
no
```

 and defaults to 
```
yes
```

.

| Attribute | Shows or hides |
| --- | --- |
| avatar | The reviewer's avatar |
| reviewer_name | The reviewer's name |
| date | The review date |
| title | The review's title |
| text | The review text |
| show_photos | The photos attached to a review |
| variation | The variation chip next to the name |
| meta | The line of details under the name |
| footer | The row holding the store reply and helpful votes |
| replies | The View Reply button |
| verified_badge | The verified badge. When you leave it out, your store-wide Show 'Verified Owner' Badge setting decides. |

Three more attributes rearrange a card, and they default to 
```
no
```

: 
```
photos_first
```

 puts the photos above the text, 
```
rating_first
```

 puts the stars above the name, and 
```
badge_last
```

 moves the verified badge after the variation.

### Photos ​

| Attribute | Values | Default |
| --- | --- | --- |
| media_visible | How many photos to show, with the rest behind a +. Capped at the photo limit per review in your settings | 0 (show all) |
| media_width, media_height | Photo tile size in pixels, from 16 to 400 | 0 (the default tile size) |
| media_full_width | yes or no, one photo per line across the review | no |
| media_more | Where the + counter goes: overlay (on the last photo), tile (beside the photos), or none (hidden) | overlay |
| media_backdrop | yes or no, Pro: the first photo fills the card | no |
| media_flush | yes or no, Pro: the photo becomes the top of the card | no |

### Slider ​

These apply only when 
```
view_mode
```

 is 
```
slider
```

.

| Attribute | Values | Default |
| --- | --- | --- |
| arrows | yes or no | yes |
| arrow_size | sm, md, lg | md |
| arrow_position | overlap, outside, bottom | overlap |
| autoplay | no, yes, hover (not true or 1) | no |
| autoplay_delay | 300 to 10000 milliseconds | 3000 |
| infinite | yes or no | no |
| slider_pagination | yes or no, to show slider indicators | no |
| slider_pagination_type | bullets, fraction, progressbar, segmented | bullets |

## What Shoppers See ​

Only approved reviews ever appear on your storefront. Pending, spam, and trashed reviews stay hidden, and they are left out of the average rating and the star breakdown too. Your replies appear underneath the reviews they answer, so customers can see that you responded.

If you build with Elementor instead, the same pieces are available as [review widgets for Elementor](/guide/customization-and-themes/elementor-review-widgets).

Your reviews are now working for you on the storefront, showing real feedback exactly where shoppers make their decision.

---

## Moderating Reviews ​

**Source:** [https://docs.fluentcart.com/guide/store-management/product-reviews/moderating-reviews](https://docs.fluentcart.com/guide/store-management/product-reviews/moderating-reviews)

# Moderating Reviews ​

The **Reviews** screen is where every piece of customer feedback lands. From this one list you can read new reviews, approve the good ones, and clear out spam. Everything works on single reviews or on a whole batch at once, so a busy store stays manageable.

## Accessing the Reviews Screen ​

To open your review queue:

1. Log in to your **WordPress Dashboard**.
2. Navigate to **FluentCart** in the side menu.
3. Open the **Products** menu in the top navigation bar.
4. Select **Reviews**.

INFO

The **Reviews** option only appears when the feature is switched on and your user role has the **Manage Reviews** permission. If you cannot see it, check your [review settings](/guide/store-management/product-reviews/review-settings) first, then your role permissions.
## Reading the Reviews List ​

Each row gives you everything you need to judge a review without opening it:

- **ID:** The review's reference number, with the name of the product being reviewed beneath it.
- **Reviewer:** The customer's name and email address.
- **Rating:** The star rating they gave.
- **Review:** The review's title, with the opening of the text beneath it.
- **Status:** Whether the review is **Approved**, **Pending**, or in another state.
- **Date:** When the review was submitted.
- **Actions:** The menu for acting on that single review.

At the bottom of the list you can change how many reviews load per page and page through the results.

## Filtering by Status ​

The tabs across the top of the list let you jump straight to the reviews that need you:

- **All:** Every review, whatever its state.
- **Approved:** Live on the product page and counting towards the product's average rating.
- **Pending:** Waiting for your decision. Not visible to shoppers, and not affecting the rating.
- **Spam:** Flagged as junk. Hidden from your storefront but not deleted, so you can restore it if you flagged it by mistake.

**Trash** sits under the **More views** dropdown next to the tabs, since it is the one you need least often.

## Finding a Specific Review ​

When your store starts collecting real volume, search and filters do the heavy lifting.

### Searching ​

Use the search icon at the top right of the list to match against the reviewer's name, their email address, the review title, the review text, or the product name. This is the quickest way to find a review when you already know something about it.

### Using Advanced Filters ​

For narrower questions, such as "show me every one-star review that nobody has replied to yet", switch on **Advanced Filter** at the top right of the list. You can then filter by:

- **Star Rating:** Narrow the list to a specific rating, or use an operator to catch a range such as everything below 3 stars.
- **Verified Purchase:** Show only reviews from customers who actually bought the product, or only those who did not.
- **Has Admin Reply:** Separate the reviews you have already answered from the ones still waiting.
- **Review Date:** Limit the list to a date or a date range.
- **Reviewer Name:** Match reviews by the name the customer submitted.
- **Reviewer Email:** Match reviews by the customer's email address.

You can also sort the list by review ID, submission date, reviewer name, or star rating. Sorting by rating is handy when you want to work through your lowest-rated feedback first.

## Adding a Review Yourself ​

You do not have to wait for a customer to write one. If a shopper sent you feedback by email or on social media, you can enter it as a review yourself.

1. Open the **Reviews** screen.
2. Click the **Add Review** button at the top right.

1. Fill in the form and click **Add Review**.

The form asks for the following:

- **Select Product:** The product being reviewed *(Required)*. Start typing to search.
- **Variation:** Appears once you pick a product that has variations. Leave it on the whole product, or choose the specific variation the reviewer bought.
- **How would you rate this product?:** The star rating. It is required only while **Star Ratings Required** is on in your review settings, and the field is hidden when star ratings are disabled.
- **Review title:** A short summary of the experience *(Optional)*.
- **Your review:** The review text, up to 5,000 characters *(Required)*.
- **Reviewer name:** The name shown on the review *(Required)*.
- **Reviewer email:** The reviewer's email address *(Optional)*.
- **Status:** Whether the review goes live right away as **Approved**, or waits as **Pending**.
- **Verified purchase:** Marks the review with the verified badge.
- **Attachments:** Photos to show with the review. This row appears only while **Photo Reviews** is switched on in your [review settings](/guide/store-management/product-reviews/review-settings#photo-reviews-and-helpful-votes), it needs FluentCart Pro, and the form shows the photo limits you set there.

## Acting on a Single Review ​

Click the three-dot **Actions** menu at the end of any row to deal with that review on the spot.

The menu offers:

- **View:** Open the full review, where you can read all of it and reply to the customer.
- **Approve:** Publish the review on the product page.
- **Pending:** Send the review back to your **Pending** queue, hidden from the storefront until you decide again.
- **Spam:** Flag the review as junk and hide it from your storefront.
- **Trash:** Discard the review without deleting it outright.
- **Delete:** Remove the review permanently.

The menu only shows the states a review is not already in, so an approved review offers **Pending**, **Spam** and **Trash** but not **Approve**. **View** and **Delete** are always there.

## Opening a Full Review ​

Choosing **View** takes you to the review's own page, where you can read all of it and answer the customer.

The breadcrumb at the top tells you which product the review belongs to and who wrote it, with the current status beside the name. The **More Actions** menu at the top right holds every status change, **Approve**, **Mark as Spam**, **Mark as Pending**, and **Move to Trash**, showing only the ones that apply, plus **Delete Permanently**.

The **Review Information** card holds the review itself: the star rating and its numeric score, the reviewer's name, when they posted, the review title, and their feedback. Small tags next to the name tell you who you are dealing with, marking the entry as a **Customer review**, flagging a **Guest** who reviewed without an account, or confirming a **Verified Purchase**.

The **About the Reviews** card beside it gathers the rest of the context and the quick controls:

- **Product:** The product being reviewed, with a link that opens it on your storefront.
- **Customer:** The reviewer, with a link to their customer profile. Guests show as **Guest customer** with a **No account** tag.
- **Verified purchase:** A switch that shows or hides the verified badge on this one review.
- **Actions:** One-click buttons for the status changes, such as **Spam**, **Trash** and **Pending**, so you can decide without leaving the page.

If the review came with photos, a **Review Media** section appears below the text. Click any image to open it full size and step through the rest with **Previous** and **Next**.

If you have **Helpful Votes** enabled, a card beside the review shows how shoppers reacted to it, with the number who found it helpful and the number who did not. See [Photo Reviews & Helpful Votes](/guide/store-management/product-reviews/photo-reviews-helpful-votes) for how voting works.

## Replying to Customers ​

A short reply to a critical review often does more for your store than the review itself costs you. Your replies appear publicly on the product page, directly under the review they answer, signed as the store owner.

To reply, type your response into the message box at the bottom of the **Review Information** card and click **Reply**.

You can also reply to several reviews at once by selecting them in the list and choosing **Reply** from the bulk actions, which is useful when you want to send the same thank-you note to a group of happy customers. Each review holds one store reply. To reword or withdraw it, delete the existing reply first, then write a new one.

INFO

By default customers cannot reply to your answer, so each review stays a single review with one store reply from you.
## Using Bulk Actions ​

When a batch of reviews needs the same treatment, handle them together instead of one by one.

1. Select the reviews you want to act on using the checkboxes in the list.
2. Choose an action from the bulk actions dropdown.
3. Click **Confirm** to run it.

A bar with the bulk actions dropdown appears above the list as soon as you tick a review, and it counts how many items you have selected.

You get six bulk actions: **Approve**, **Pending**, **Mark as Spam**, **Move to Trash**, **Delete Permanently**, and **Reply**.

INFO

Bulk actions run on up to 50 reviews at a time. If you select more than that, work through the list in batches. Product ratings are recalculated once per product after the batch finishes, so even a large clean-up stays fast.
## Ratings Update Automatically ​

You never need to refresh a product's rating by hand. Whenever a review is approved, unapproved, marked as spam, trashed, or deleted, FluentCart recalculates that product's average rating, total review count, and star breakdown for you. This holds true even if the review's status is changed from the standard WordPress comments screen or by another plugin.

With your queue under control, the next step is deciding where those approved reviews show up. See [Displaying Reviews on Your Store](/guide/store-management/product-reviews/displaying-reviews).

---

## Photo Reviews & Helpful Votes ​

**Source:** [https://docs.fluentcart.com/guide/store-management/product-reviews/photo-reviews-helpful-votes](https://docs.fluentcart.com/guide/store-management/product-reviews/photo-reviews-helpful-votes)

# Photo Reviews & Helpful Votes ​

FluentCart Pro adds two upgrades to your reviews. **Photo Reviews** let customers show your product in real life instead of only describing it, and **Helpful Votes** let shoppers push the most useful reviews to the top of the list. Both live at the bottom of your review settings, under the general options.

INFO

These two features require **FluentCart Pro**. With the free plugin their toggles are visible but locked, and an **Upgrade to Pro** link appears beneath them.FluentCart Pro also adds a **Verified** filter chip to your storefront review list once its review features are active, so shoppers can narrow it down to purchase-verified feedback.

## Photo Reviews ​

A photo from a real customer is often the most persuasive thing on a product page. When photo reviews are on, the review form gains a **Photos** area where customers can attach images alongside their written feedback.

### Enabling Photo Reviews ​

To turn photo reviews on:

1. Navigate to **FluentCart > Settings** in your WordPress dashboard.
2. Select **Product Reviews** from the left-hand sidebar.
3. Scroll to the **Photo Reviews** row.
4. Turn on the **Photo Reviews** toggle.
5. Set your upload limits, then click **Save**.

### Photo Review Options ​

These options appear once **Photo Reviews** is enabled:

- **Max Photos Per Review:** How many images a single review can carry. You can set anywhere from 1 to 10, and the default is 5.
- **Max File Size (MB):** The size ceiling for each uploaded image, from 0.1 MB up to 10 MB. The default is 1 MB.
- **Auto-approve Photo Reviews:** Publishes reviews with photos immediately. When off, photo reviews always wait for moderation. Off by default.
- **Allowed File Types:** The image formats customers may upload. You can allow **JPEG**, **PNG**, **GIF**, and **WebP**, and all four are enabled by default.

INFO

**Auto-approve Photo Reviews** is a separate decision from **Auto-approve Reviews**. This setting can only hold photo reviews back, never publish them on its own. With **Auto-approve Reviews** on and this one off, plain text reviews go live instantly while every review with photos waits for you, which is the safer setup for most stores. If **Auto-approve Reviews** is off, photo reviews wait as well, whatever this setting says.
### How Customers Add Photos ​

Photos sit at the bottom of the review form, after the star rating and the written feedback. Customers drop their images in, watch each one upload, and can remove any they change their mind about. Nobody is forced to add one, and the form tells them plainly that skipping is fine. If you set the form to the [Steps layout](/guide/store-management/product-reviews/displaying-reviews#how-customers-write-a-review), photos become the last step instead.

Anyone who is allowed to leave a review can attach photos. Photo uploads follow exactly the same **Who can leave reviews?** rule you set in your [review settings](/guide/store-management/product-reviews/review-settings), so a store limited to verified buyers stays limited to verified buyers here too.

Once reviews with photos start coming in, shoppers get a **With Photos** filter chip above the review list, and clicking any image opens it full size with arrows to step through the rest. You get the same gallery in your admin: open a review with the **View** action and its images appear in a **Review Media** section.

When a review is deleted, its photos are removed with it, so your media library does not fill up with leftovers. Images that a customer uploaded but never submitted are cleaned up automatically the next day.

## Helpful Votes ​

Helpful votes let your customers do some of the curating for you. Shoppers mark a review as **Helpful** or **Not Helpful**, and the review list gains a **Most Helpful** sorting option that surfaces the best feedback first.

### Enabling Helpful Votes ​

To turn voting on:

1. Navigate to **FluentCart > Settings** in your WordPress dashboard.
2. Select **Product Reviews** from the left-hand sidebar.
3. Scroll to the **Helpful Votes** row.
4. Make sure the **Helpful Votes** toggle is on. It is on by default once FluentCart Pro is active.
5. Click **Save**.

### How Voting Works ​

Voting is kept deliberately simple, and a few rules keep it honest:

- **Logged-in customers only:** Guests do not get vote buttons at all, because there is no reliable way to count a guest's vote only once. Asking shoppers to log in keeps the counts meaningful.
- **One vote per review:** Each customer gets a single vote on any given review.
- **Votes can be changed or removed:** Clicking the same button again clears the vote, and clicking the opposite one switches it.
- **No voting on your own review:** Customers cannot vote on reviews they wrote themselves.

### Seeing How Shoppers Reacted ​

You can check the votes on any review from your own admin. Open a review from **FluentCart > Products > Reviews** using the **View** action, and a **Helpful Votes** card sits beside the review showing how shoppers reacted to it.

The green row counts the shoppers who found the review helpful, and the red row counts those who did not. It is a useful signal while you moderate. A review collecting steady not-helpful votes is worth a second look, and a review your customers keep marking helpful is one you may want to reply to.

With photos and votes in place, your product pages carry the kind of proof that helps shoppers commit, and the most useful reviews rise to the top on their own.

---

## Review Settings ​

**Source:** [https://docs.fluentcart.com/guide/store-management/product-reviews/review-settings](https://docs.fluentcart.com/guide/store-management/product-reviews/review-settings)

# Review Settings ​

The **Product Reviews** settings page is where you decide how reviews behave in your store. You choose who is allowed to leave a review, whether new reviews go live straight away or wait for your approval, and how they are presented to shoppers. All of it sits on a single card, and every option takes effect as soon as you save.

## Accessing Review Settings ​

To open the review settings:

1. Log in to your **WordPress Dashboard**.
2. Navigate to **FluentCart > Settings** in the side menu.
3. Select **Product Reviews** from the left-hand sidebar.

## Enable Product Reviews ​

The switch at the top of the card is the master control for the whole feature. The line beneath it tells you what your store is doing right now, either **Customers can leave ratings and reviews on products** or **Customers cannot leave reviews right now**.

- **Enable Product Reviews:** Allow customers to leave ratings and reviews on products. When this is off, the **Reviews** screen is hidden and no review sections appear on your product pages. Existing reviews are kept and return as soon as you switch it back on.

The rest of the settings only appear once this switch is on. Individual products can still opt out while the feature is on. See [turning reviews off for a single product](/guide/store-management/product-reviews/#turning-reviews-off-for-a-single-product).

## General Settings ​

These options control who can review your products and what happens to a review after it is submitted.

### Who Can Leave Reviews? ​

This setting decides which shoppers see the review form. Pick the option that matches how much you trust your audience:

- **Verified buyers only:** Only customers who purchased the product can review it. This is the default, and it gives you the most trustworthy feedback.
- **Logged-in users:** Any logged-in user can leave a review, whether they bought the product or not.
- **Anyone:** Guests can also leave reviews, without creating an account. The review form asks guests for their name and email address, and the email stays private.

INFO

Whichever option you pick, each customer can only leave one review per product. If you reject a review by marking it as spam or moving it to trash, that customer is free to submit a fresh one.
### Display and Approval Options ​

The rest of the general settings shape how reviews look and how quickly they appear:

- **Show 'Verified Owner' Badge:** Displays a **Verified Purchase** badge on reviews from customers who bought the product. Shoppers can tell genuine purchase feedback apart at a glance. On by default.
- **Enable Star Ratings:** Allows customers to rate products with stars, and shows those ratings on your product pages. Turning it off also removes the rating from the review form, leaving a text-only review. On by default.
- **Star Ratings Required:** Makes the star rating mandatory. When it is off, customers can submit text-only reviews without a star rating. This option appears indented under **Enable Star Ratings**, only while that switch is on, and it is on by default.
- **Auto-approve Reviews:** Publishes new reviews immediately, without moderation. Off by default, which means every review waits in your **Pending** queue until you approve it.
- **Reviews Per Page:** How many reviews a product page lists before it starts paging. The default is 10, and you can set anything from 1 to 50.

INFO

Leaving **Auto-approve Reviews** off is the safer choice for most stores. It costs you a moment of moderation per review, but nothing reaches your product pages without your approval.
## Photo Reviews and Helpful Votes ​

The two rows at the bottom of the card, **Photo Reviews** and **Helpful Votes**, need FluentCart Pro. With the free plugin they stay visible but locked, and a note beneath each one reads **This feature is only available in FluentCart Pro**, followed by an **Upgrade to Pro** link.

- **Photo Reviews:** Lets customers attach photos to their reviews. Turning it on reveals its own limits underneath.
- **Helpful Votes:** Lets visitors mark reviews as helpful.

Both options come with their own limits and behavior. For the full setup, see [Photo Reviews & Helpful Votes](/guide/store-management/product-reviews/photo-reviews-helpful-votes).

## Getting Notified About Reviews ​

FluentCart sends three review emails, and all of them are switched on out of the box. You can find them here:

1. Navigate to **FluentCart > Settings** in your WordPress dashboard.
2. Select **Email Configuration** from the left-hand sidebar.
3. Click **Notifications**.
4. Scroll to the **Review Actions** group.

The group holds three notifications:

- **Send mail to admin when a new review is submitted:** Tells you a review is waiting, so nothing sits in your queue unnoticed. It goes to **Admin**.
- **Send mail to the reviewer when their review is approved:** Lets the customer know their review is now live on the product page. It goes to the **Customer**.
- **Send mail to the reviewer when the store replies to their review:** Lets the customer know you answered them. It goes to the **Customer**.

Use each **Enabled** toggle to switch a notification off, or click the pencil icon to rewrite its subject and body. The [email notification](/guide/settings-configuration/email-configuration/configuring-email-notification) editor works the same way here as it does for order and subscription emails.

## Saving Your Changes ​

After adjusting any option:

1. Check that your selections match how you want reviews to work.
2. Click the **Save** button at the top right of the page, or press **Cmd+S** (**Ctrl+S** on Windows).

Your store now follows your own review policy, and you can move on to [moderating the reviews](/guide/store-management/product-reviews/moderating-reviews) as they come in.

---

## Product Schema for Search Results ​

**Source:** [https://docs.fluentcart.com/guide/store-management/product-schema](https://docs.fluentcart.com/guide/store-management/product-schema)

# Product Schema for Search Results ​

FluentCart adds **Product schema** (JSON-LD structured data) to every product page automatically. It is a small block of hidden data that tells search engines like Google the product's name, price, availability, and ratings, so your listings can qualify for rich results such as price and star ratings under the search link.

There is nothing to switch on. The data is added to single product pages only, and it is built fresh each time a page loads, so a price change, a sold-out product, or a newly approved review shows up on the next visit.

## What the Schema Contains ​

Each product page carries one product entry with the details a shopper sees on the page:

- **Basics:** The product name, page link, featured image, and description. When a product has a single variation, its SKU is included too.
- **Offers:** One offer for a single-variation product, or a price range with the lowest price, highest price, and number of options for a product with several variations. Each offer carries the store currency and its stock status, and only active variations are included. Stock status reflects real stock only when Stock Management is enabled. Otherwise every offer is shown as in stock.
- **Aggregate rating:** The average star rating and the number of reviews. This appears once the product has approved reviews.
- **Reviews:** The individual reviews shown on the page, including the reviewer name, date, title, text, and star rating.

INFO

The rating and review parts follow your [review settings](/guide/store-management/product-reviews/review-settings). If **Enable Product Reviews** is off, reviews are disabled for that product, or **Show Reviews In Single Page** is off in your product page settings, only the basics and offers are added.
## What Is Left Out ​

Search engines only accept information a visitor can actually see, so FluentCart holds back anything the page itself hides:

- Draft, pending, and password-protected products get no schema.
- Only approved reviews are included. Pending, spam, and trashed reviews never appear, and neither do store replies.
- Reviews without a star rating are included in the review count but not in the average, and they are not listed one by one.
- The list holds as many reviews as your **Reviews Per Page** setting shows, up to 20.

## Checking Your Product Pages ​

To confirm the schema is working, paste a product page link into Google's Rich Results Test and look for a **Product** entry with **Merchant listings** or **Review snippets**. Search engines decide on their own whether to show rich results, and it can take a while after a page is crawled.

If you use an SEO plugin that also outputs product schema, run the test once to make sure the page doesn't end up with two competing product entries.

---

## FluentCart status Overview ​

**Source:** [https://docs.fluentcart.com/guide/store-management/understanding-statuses](https://docs.fluentcart.com/guide/store-management/understanding-statuses)

# FluentCart status Overview ​

This guide explains the different statuses you'll see throughout FluentCart. Statuses help you quickly understand the current state of your products, orders, payments, subscriptions, and more.

#### 1. Product status ​

These statuses describe the visibility of your products.

| Status | Description |
| --- | --- |
| publish | The product is live and visible. |
| draft | The product is a saved draft. |
| private | The product is live but only visible to specific users. |
| future | The product is scheduled to be published at a future date. |
| trash | The product has been moved to the trash and is not visible. |

#### 2. Order status ​

Order statuses help you follow an order from the time it’s placed until it’s finished.

| Status | Description |
| --- | --- |
| processing | The order is being processed. |
| completed | The order has been fulfilled. |
| on-hold | The order is awaiting payment or action. |
| canceled | The order has been canceled. |
| failed | The order could not be processed, usually due to a failed payment. |

#### 3. Payment status ​

These statuses show the state of a payment transaction.

| Status | Description |
| --- | --- |
| pending | Payment has been initiated but not completed. |
| paid | The payment has been successfully received. |
| partially_paid | A partial payment has been received. |
| failed | The payment attempt was unsuccessful. |
| refunded | The full payment has been returned to the customer. |
| partially_refunded | A portion of the payment has been refunded. |
| authorized | The payment has been approved by the provider but not yet charged (captured). |

#### 4. Transaction status ​

These statuses apply to individual transaction records.

| Status | Description |
| --- | --- |
| succeeded | The transaction was successful. |
| pending | The transaction is in process. |
| refunded | The transaction has been refunded. |
| failed | The transaction failed. |
| dispute_lost | A payment dispute was opened and lost. |

#### 4. Transaction Types ​

These describe the nature of a transaction.

| Status | Description |
| --- | --- |
| charge | A standard payment from a customer. |
| refund | A payment returned to a customer. |
| dispute | A transaction related to a payment dispute. |

#### 5. Subscription status ​

These statuses track the lifecycle of a customer subscription.

| Status | Description |
| --- | --- |
| pending | The subscription is created but waiting for the first payment to become active. |
| intended | An early state before a subscription becomes pending. |
| trialing | The subscription is in a trial period. A subscription also shows as trialing for its first billing cycle when a one-time (non-recurring) coupon was used at checkout, even though the customer has paid. |
| active | The subscription is currently active. |
| canceled | The subscription has been canceled. |
| paused | The subscription is temporarily paused. |
| past_due | A subscription payment is overdue. |
| expired | The subscription has reached its end date and is no longer active. |
| failing | The subscription has a payment issue. |
| expiring | The subscription is nearing its expiration. |
| completed | The subscription has completed its term. |

For store-billed subscriptions, FluentCart drives the move from 
```
active
```

 to 
```
past_due
```

 and finally to 
```
expired
```

 on its own schedule, using a grace period tied to the billing interval. See [Store Billing for Subscriptions](/guide/product-types-creation/store-managed-subscriptions) for how that escalation works.

#### 6. Shipping status ​

These statuses track the fulfillment of physical goods.

| Status | Description |
| --- | --- |
| unshipped | The order has not yet been shipped. |
| shipped | The order has been shipped. |
| delivered | The order has been delivered. |
| unshippable | The order does not require shipping (e.g., a digital product). |

#### Customer status ​

These statuses describe the state of a customer's account.

| Status | Description |
| --- | --- |
| active | The customer is an active user. |
| inactive | The customer is an inactive user. |

#### Stock status ​

These statuses indicate the availability of a product.

| Status | Description |
| --- | --- |
| instock | The product is in stock. |
| outofstock | The product is out of stock. |
| onbackorder | The product is out of stock but can be purchased and will be shipped when available. |

#### Billing Intervals ​

These define the recurring payment schedule for subscriptions.

| Status | Description |
| --- | --- |
| yearly | Yearly billing interval. |
| monthly | Monthly billing interval. |
| weekly | Weekly billing interval. |
| daily | Daily billing interval. |

#### License status ​

These statuses are for products sold with license keys.

| Status | Description |
| --- | --- |
| active | The license is active. |
| disabled | The license is disabled. |
| expired | The license has passed its expiration date. |

#### Fulfillment Types ​

These describe the type of product being sold.

| Status | Description |
| --- | --- |
| physical | A physical product that requires shipping. |
| digital | A downloadable or digital product that does not require shipping. |

#### Order Types ​

These describe the nature of an order.

| Status | Description |
| --- | --- |
| payment | A standard one-time payment order. |
| subscription | An order for a new subscription. |
| renewal | An automatic renewal payment for an existing subscription. |

#### Schedule status ​

These statuses apply to automated or scheduled tasks within FluentCart.

| Status | Description |
| --- | --- |
| pending | A scheduled task is waiting to run. |
| processing | A scheduled task is currently running. |
| completed | A scheduled task has finished. |
| failed | The task did not complete successfully. |

---

