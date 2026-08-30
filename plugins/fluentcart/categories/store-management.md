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
- **Have a Coupon:** If a discount coupon applies to this manual order, you can enter and apply it here.
- **Add Discount:** If you want to add a discount for the order, click the Add Discount option.
- **Add Shipping Cost:** Manually you can add shipping charges for physical products.
- **Review Totals:** Ensure the order subtotal and total amount are correct after adding products and any discounts/shipping.
- **Notes:** Click the **Notes** icon to add any private notes or comments relevant to the order.
- **Labels:** A section for assigning custom labels.
4. **Choose Payment Method:** Select the payment method for this order. This might include:

- Marking the order as "Paid" if payment was received offline (e.g., cash, bank transfer).
- Generating a custom payment link to send to the customer for online payment.
- Processing payment directly if you have integrated payment gateways.
5. **Finalize Order:** Once all details are correct and the payment method is selected, click the **Save** button finalize the order.

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

Returning to Processing Status

If an order was marked as "Completed" but needs editing, you can use the "Back to processing" option from the "More Actions" dropdown on the Order Details page to revert its status and enable editing.
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

### 4. Adding Shipping Costs ​

For physical products, you can manually add or adjust shipping costs:

1. Locate the **"Add Shipping"** option in the financial summary area.
2. Enter the desired shipping amount.

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
| trialing | The subscription is in a trial period. |
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

