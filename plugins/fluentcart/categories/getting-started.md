# Getting Started

*Category from FluentCart documentation*

---

## Dashboard Overview ​

**Source:** [https://docs.fluentcart.com/guide/getting-started/dashboard-overview](https://docs.fluentcart.com/guide/getting-started/dashboard-overview)

# Dashboard Overview ​

This section provides an overview of the FluentCart **Admin Dashboard**, which is your control center for managing your e-commerce store.

INFO

For information on what your **customers** see when they log into their accounts, please refer to our [Customer Dashboard Overview](/guide/customer-dashboard/) documentation.The FluentCart Dashboard is the first screen you see when you log into your WordPress admin area and navigate to FluentCart. It provides a quick, at-a-glance overview of your store's performance and recent activities, helping you stay informed about your business operations.

### Quick Access Controls (Top Right) ​

In the top-right corner of the FluentCart dashboard, you’ll find three helpful shortcuts:

- **Search (⌘K / Ctrl+K)**
 When someone clicks on the search panel, a popup will appear allowing them to search for products, orders, customers, or settings across FluentCart.
- **Theme Toggle**
 Switch between **Light**, **Dark**, or **System** mode to match your preference.
- **Settings Shortcut**
 Click the gear icon to go directly to FluentCart’s settings page for configuring store preferences, payments, emails, and more.

## Key Dashboard Sections ​

The dashboard is designed to give you instant insights into your store's health.

### 1. Welcome & Quick Actions ​

At the top of the main dashboard area, you'll find a welcome message and quick action buttons.

- **Add Product Button:** A quick-access button to create a new product, allowing you to quickly expand your inventory.

### 2. Getting Started ​

On the right side of the FluentCart dashboard, you’ll see the **Getting Started** panel. This helps you quickly set up your store by walking through the essential first steps. The panel is shown to administrators only.

The checklist includes:

- **Add Details to Store**
 Add your store name and upload a store logo under **Settings > Store Setup**. The step is ticked off once both are saved.
- **Add Your First Product**
 Create a product using the **Products → Add New** option to make your first item available for sale.
- **Setup Pages**
 Generate key pages like Checkout, Cart, and Account in the settings.
- **Setup Payment Methods**
 Turn on Stripe, PayPal, cash on delivery, or another gateway so you can start accepting payments.

#### Page Builder Steps ​

Up to three more steps appear only when they apply to your site, so you'll see them only if you build pages with one of the supported builders:

- **Install Bricks Addon**
 Appears when the **Bricks** theme is active. It points you to the add-on that brings extra FluentCart elements into the Bricks editor, and ticks itself off once that add-on is installed. See [Customize Store with Bricks](/guide/customization-and-themes/customize-store-with-bricks).
- **Install Elementor Addon**
 Appears when **Elementor** is active, and works the same way for FluentCart's Elementor widgets. See [Using Elementor Widgets](/guide/customization-and-themes/using-elementor-widgets).
- **Install Divi Addon**
 Appears when a **Divi** theme is active, and works the same way for FluentCart's Divi modules. See [FluentCart Divi Modules](/guide/customization-and-themes/fluentcart-divi-modules).

INFO

As you complete each step, FluentCart will mark it off automatically. This guide disappears once your setup is complete.
### 3. Store Key Metrics ​

This section of the dashboard provides a simple, at-a-glance overview of your store's most important performance indicators. It's designed to give you a quick snapshot of your business health every time you log in. The stats, the chart, **Recent Orders**, **Top Sold Products**, and the heat map are shown only to users with report access.

A small **Last 30 Days** label above the cards tells you the period. **Total Products** counts every product that isn't in the trash. **Orders**, **Revenue**, and **Refund** cover orders created in the last 30 days, leaving out on-hold and failed orders:

- **Orders:** The number of orders.
- **Revenue:** What you were paid, less refunds and tax.
- **Refund:** The total amount refunded on those orders.

Amounts are shown in your base currency.

### 4. Sales Growth Chart ​

This chart provides a clear, visual representation of your store's performance over time, helping you to spot trends, track growth, and understand your sales patterns.

By default, the chart displays two key metrics:

- **Revenue:** The total monetary value of sales for each day.
- **Orders:** The total number of orders received each day.

You can hover your mouse over any point on the chart to see a detailed breakdown of the exact Revenue and Order count for that specific day. This makes it easy to analyze your performance and see how your sales are progressing.

### 5. Recent Activities ​

This log sits in the right-hand sidebar, under the **Getting Started** panel. It shows a list of the newest important things that happened in your store, such as order updates, payments, and refunds, and serves as a quick audit trail for recent operations.

- **Example Activities:** Order Created, Payment Paid, Order Status Updated, Order Refunded, Shipping Status Updated, License Upgrade.

### 6. Recent Orders ​

A snapshot of your most recent customer orders, allowing for quick review.

- Displays the Order ID, Creation Date, Customer Name, Number of Items, and Total Amount for each order.
- Includes a **View All** link to navigate to the full [Orders Management](/guide/store-management/orders-management/) screen for detailed management.

### 7. Top Sold Products ​

This widget highlights your current best-sellers, helping you to instantly see which products are most popular with your customers. It's a valuable tool for understanding product trends and making decisions about inventory and marketing.

- Click the **View All** link to navigate to the **Products** section for more details of your products.

### 8. Order Heat Map ​

A world map that shades each country from **Low** to **High** by its number of orders. Hover over a country to see its order count.

The dashboard gives you a daily snapshot of your store, so you can spot what needs attention the moment you log in.

---

## Glossary ​

**Source:** [https://docs.fluentcart.com/guide/getting-started/fluentcart-glossary](https://docs.fluentcart.com/guide/getting-started/fluentcart-glossary)

# Glossary ​

This glossary defines common terms used throughout the FluentCart documentation to help you understand key features and concepts.

**A**

- **Abandoned Cart:** A shopping cart where a customer has added products but has not completed the checkout process. FluentCart doesn't run cart recovery on its own. If you use FluentCRM, its **Abandoned Cart** feature can track FluentCart carts and send recovery emails.
- **Activation Limit:** The maximum number of times a **License Key** can be used to activate a software product. This is set per **Variation** (e.g., a "Single Site" license has an activation limit of 1).
- **Add-on:** A separate plugin that adds a feature to FluentCart, such as an extra payment gateway, Elementor, Bricks, or Divi elements, or the Migrator. You can install most add-ons from **Settings > Features & addon**. Subscriptions are built into the free plugin; licensing is part of FluentCart Pro.
- **Advanced Filters:** A set of powerful tools in the admin dashboard for searching and segmenting records like orders or customers based on specific, detailed criteria.
- **Advanced Inventory:** A Pro module that adds a central **Inventory** screen for viewing low and out-of-stock items, updating stock in bulk, and reviewing a history of every stock change.
- **Advanced Variations:** A pricing method for products built from reusable **Attributes** such as Color, Size, or Material. You pick the option dimensions and their values, and FluentCart automatically generates every possible combination as a **Variation**. To learn more, read the [Advanced Variations](/guide/product-types-creation/advanced-variations) documentation.
- **Applied Coupon:** A record that tracks the use of a specific **Coupon** on an order, detailing the discount amount that was applied.
- **Attribute:** A reusable option dimension used to build product variations, such as Color or Size. Each attribute is made up of **Attribute Terms** (its individual values) and is managed globally under **Products > Attributes**.
- **AWS S3 (Amazon Simple Storage Service):** A secure cloud storage service used by FluentCart for delivering digital products. This ensures that large files are delivered quickly and that access is controlled and secure.

**B**

- **Billing Address:** The address associated with a customer's payment method. It is used for payment verification and generating invoices.

**C**

- **Checkout:** The final stage of a purchase where customers provide payment information, shipping details, and confirm their order.
- **Compare at price:** An optional, higher price shown with a strikethrough next to the actual selling price. This is used to visually indicate a sale or discount.
- **Coupon:** A promotional code that customers can enter at checkout to receive a discount, such as a fixed amount or a percentage off their order total.
- **Dynamic Pricing:** A FluentCart Pro feature that automatically applies discounts or fees at checkout when a cart meets conditions you set, such as quantity, subtotal, customer, or payment method. Rules can apply to line items, the checkout total, or shipping, and can be scheduled.
- **Currency Settings:** The global settings that define the store's primary currency, symbol, formatting, and decimal precision for all product prices and reports.
- **Customer:** An individual who has made a purchase from your store. FluentCart creates and maintains a profile for each customer, tracking their contact information and order history.
- **Customer Lifetime Value (CLV):** A key metric available in FluentCart's analytics that shows the total revenue a business can reasonably expect from a single customer account throughout their entire relationship with your store.

**D**

- **Digital Product:** Any item sold as a downloadable file, such as an e-book, software, or template.

**E**

- **Email Notification:** Automated emails sent from your store to customers or administrators to confirm actions like order placement, payment, or refunds.

**F**

- **Feed:** Short for **Integration Feed**. See **Integration Feed**.

**G**

- **GDPR (General Data Protection Regulation):** A comprehensive data privacy regulation. FluentCart is built to be GDPR-compliant, ensuring that your customers' personal data is handled securely and with their consent.

**H**

- **Hybrid Product:** A single product listing that offers multiple types of the same item. For example, offering a book as a physical hardcover, a digital e-book, and a subscription to related content, all from one product page.
- **Headless Commerce:** An advanced setup where the front-end of your store (the "head," like a custom website or mobile app) is separate from the back-end (FluentCart). Developers use the **REST API** to connect the two, allowing for highly custom and high-performance storefronts while FluentCart manages all the e-commerce logic (products, orders, payments) in the background.

**I**

- **Integration Feed:** A rule that runs when an order or subscription event happens (for example, an order is paid or refunded) and sends data to another service, such as adding the customer to a FluentCRM list. Feeds can be global or set on a single product. Also referred to as a **Feed**.
- **Inventory Management:** The process of tracking stock levels for **Physical Products**, including available quantities, units on hold for pending orders, and fulfilled units.

**L**

- **Labels:** Custom markers or tags that can be applied to orders or customers for internal organization. Labels help you filter and manage records efficiently (e.g., "VIP," "Follow-up Required").
- **License Activations:** The count of how many times a specific **License Key** has been used to activate a product. This is tracked against the **Activation Limit**.
- **License Key:** A unique code generated and sold with a **Licensed Product** to verify a customer's purchase and control its usage according to the **Activation Limit** and validity period.
- **Licensed Product:** A type of **Digital Product** (usually software or a plugin) that requires a **License Key** for activation and use.
- **Logs:** A system-generated record of important actions, events, and errors within FluentCart. Logs are essential for troubleshooting and debugging issues.

**M**

- **Manual Order:** An order created directly from the admin dashboard by a store administrator on behalf of a customer.

**O**

- **Order:** A formal record of a customer's transaction. It includes all details of the purchase, such as products, pricing, customer information, and payment status.
- **Order Status:** The current stage of an **Order** in the fulfillment process (e.g., Processing, Completed, On Hold, Canceled). Payment progress, such as Pending, Paid, or Refunded, is tracked separately as the **Payment Status**. Statuses can be updated manually or automatically by payment events.
- **Order Bump:** An Order Bump is a last-minute offer presented to customers on the checkout page, in the cart drawer, or on the cart page, just before they complete their purchase. It's designed to increase the average order value by allowing customers to add a complementary or discounted product to their order with a single click. Order Bumps are a FluentCart Pro feature.

**P**

- **Payment Gateway:** A third-party service that processes customer payment information to authorize and complete transactions. The free plugin includes Stripe, PayPal, and cash on delivery. FluentCart Pro adds Paddle, Mollie, and Authorize.net, and add-ons connect more gateways such as Square and Razorpay.
- **Physical Product:** A tangible item that must be physically shipped to a customer. Requires inventory tracking and shipping settings.
- **Product:** Any item, service, or download that you offer for sale in your store.
- **Product Category:** A method for organizing similar products into public-facing groups to help customers browse your store (e.g., "Men's Clothing," "Software," "Home Decor").
- **Product Status:** The current visibility and availability of a product in your store's backend.

- **Published:** The product is live and available for purchase on your storefront.
- **Draft:** The product is not visible to the public and is still being worked on.
- **Scheduled:** The product is published automatically at a date you set.
- **Product Type:** Whether a product is **Physical** (shipped) or **Digital** (downloaded). To group products your own way, use **Categories** and **Brands**.
- **Purchases:** A record of a completed transaction where a customer has successfully bought one or more products from your store.

**R**

- **Receipt Template:** A customizable layout for the email receipts sent to customers after a purchase. You can modify its structure and content to match your brand.
- **Refund:** The action of returning a partial or full payment amount to a customer. Refunds are processed directly from the **Order** details page.
- **Renewals:** The process by which a customer extends their subscription or license for another term, either manually or through an automatic recurring payment.
- **Roles & Permissions:** Settings within WordPress that control which user roles (e.g., Administrator, Shop Manager) have access to view or manage specific FluentCart features and data.
- **REST API (Representational State Transfer Application Programming Interface):** An interface that allows developers to interact with your store's data (like products, orders, and customers) programmatically. It is the core technology that enables **Headless Commerce** and custom integrations.

**S**

- **Shipping Address:** The physical address where a customer's order will be delivered. This is only required for **Physical Products**.
- **Shipping Class:** A way to group products with similar shipping characteristics (e.g., "Heavy Items," "Fragile") in order to apply specific shipping cost adjustments.
- **Shipping Method:** The specific service used to deliver physical products, such as Flat Rate, Free Shipping, or Local Pickup. Methods are applied to different **Shipping Zones**.
- **Shipping Zone:** A specific geographic region (e.g., a country, state, or group of zip codes) to which a unique set of **Shipping Methods** and rates apply.
- **Shortcode:** A small placeholder in double curly braces (for example, 
```
{{order.id}}
```

), used in email and document templates. FluentCart automatically replaces it with the corresponding dynamic information, such as a customer's name or order number.
- **Simple Pricing:** A pricing method used for products that have only one version and a single price. To learn more, read the price configuring documentation.
- **Simple Variations:** A pricing method for products that come in multiple versions. This allows each **Variation** to have its own unique price, image, stock level, or license rules. To learn more, read the price configuring documentation.
- **SKU (Stock Keeping Unit):** A unique alphanumeric code assigned to a specific product or product variation in your store. It serves as an internal tracking identifier to help you organize, locate, and manage your inventory accurately.

**T**

- **Tax:** A tax is a charge imposed by a government on the sale of goods and services. In FluentCart, this refers to the sales tax, VAT (Value Added Tax), or GST (Goods and Services Tax) that you are required to collect from customers. You can manage these charges through **Tax Classes** (for grouping products with similar tax rules) and **Tax Rates** (for defining the specific tax percentages for different regions).
- **Term (Attribute Term):** An individual value inside an **Attribute**, for example Red inside Color, or Large inside Size. The terms you assign to a product become the building blocks FluentCart uses to generate its **Advanced Variations**.

---

## Initial Setup Wizard ​

**Source:** [https://docs.fluentcart.com/guide/getting-started/initial-setup-wizard](https://docs.fluentcart.com/guide/getting-started/initial-setup-wizard)

# Initial Setup Wizard ​

After successfully installing and activating FluentCart, a setup wizard appears automatically to walk you through the foundational settings of your store. The wizard is four short steps and covers your store details, tax collection, core pages, and starter products.

First-Time Setup

The wizard is designed to make your initial configuration smooth. If you skip it, you can configure these settings later from the FluentCart **Settings** menu. Most steps also expose a **Skip for now** or **Skip All** action in the footer if you want to defer them.
## Steps of the Initial Setup Wizard ​

A progress bar runs along the top of every step (**Step N of 4**) so you always know how far through you are. **Go Back** moves you to the previous step, **Continue** advances, and the final step replaces Continue with a **Save** button (keyboard shortcut **Cmd+S** on macOS, **Ctrl+S** on Windows/Linux).

### 1. Store Details ​

The first step captures the basics about your store so FluentCart can pre-fill currency, address, and locale defaults across the rest of the admin.

- **Store Country:** Pick the country where your business is based. The selection feeds the next step's tax setup and your default shipping calculations.
- **Shop Name:** The public name of your online store. Appears in receipts, emails, and the storefront header.
- **Store Currency:** The primary currency your products are priced in. Defaults to **United States Dollar**; change it before you start adding products.
- **Shop Image/Logo:** Click **Upload** to add your brand's logo. Accepted formats: HEIC, WEBP, SVG, PNG, or JPG. Recommended width: 512 pixels minimum.

Click **Continue** to proceed to the next step.

Where to find later?

These settings can be accessed and modified anytime from **FluentCart → Settings → Store Settings → Store Setup**.
### 2. Set Up Tax Collection ​

The second step turns tax collection on or off and captures the high-level tax behaviour for your store. The card pre-fills your **Store country** from Step 1, so make sure that's right before continuing.

- **Collect taxes for my store:** Master toggle. FluentCart pre-sets it, and picks **Prices include tax** or **Add tax at checkout**, based on the store country you chose. Check both before you continue. Switch the toggle off to sell without any tax calculations.
- **How do you display your prices?** Pick one: - **Prices include tax:** the price on a product already contains tax. FluentCart splits the tax out for reporting, and the customer pays the listed number.
- **Add tax at checkout:** the listed price excludes tax. Tax is shown separately and added to the subtotal.
- **Cross-border compliance** *(EU stores only)*: If your store country is in the EU, choose how you charge VAT to customers in other EU countries: - **OSS (One Stop Shop):** Charge each EU customer their own country's VAT rate. This is the default.
- **Home Country Only:** Charge all EU customers your home country's rate.
- **Only for [your country]:** Only collect VAT from customers in your own country.
- **Tax ID / VAT Number** *(optional)*: Your registration number, printed on invoices. For EU stores the label follows your choice above: **OSS VAT Number**, **Home VAT Number**, or **[Country] VAT Number**.

An advisory at the bottom of the card explains what happens next. For most countries, a standard tax class is created for your store country and you add rates later under **Tax → Tax Rates**. For EU stores, standard EU VAT rates are imported automatically for all EU countries.

Click **Continue** to proceed. You can also choose **Skip for now** to leave tax disabled (configure it later) or **Skip All** to jump straight past the remaining wizard steps.

Where to find later?

These settings can be accessed and modified anytime from **FluentCart → Settings → Tax Settings → Configuration**, and per-region rates from **Tax Settings → Rates**. See [Tax Configuration](/guide/tax-&-duties/configuration-and-classes) and [Setting Up Tax Rates](/guide/tax-&-duties/tax-rates) for the full walkthroughs.
### 3. Setup Your Pages ​

The third step assigns FluentCart's core storefront functions (Checkout, Cart, Receipt, Shop, Customer Profile) to actual WordPress pages on your site. This is what makes the cart icon, the checkout form, and the customer dashboard reachable from the front-end.

You have three ways to fill in the page slots:

- **Pick an existing WordPress page** from each dropdown (the dropdown shows page titles followed by their ID, for example 
```
Checkout( 159 )
```

).
- **Click the + icon** next to a slot to create a fresh WordPress page wired up for that role with the correct shortcode embedded.
- **Click Generate All Pages** at the top of the list to create all five pages in one shot, each with the right shortcode and assigned automatically.

Shortcodes powering each page

Every page must carry the matching FluentCart shortcode for its function to work. Using **Generate All Pages** or the per-slot 
```
+
```

 icon handles this automatically:

- Shop Page: 
```
[fluent_cart_products]
```
- Customer Profile Page: 
```
[fluent_cart_customer_profile]
```
- Cart Page: 
```
[fluent_cart_cart]
```
- Receipt Page: 
```
[fluent_cart_receipt]
```
- Checkout Page: 
```
[fluent_cart_checkout]
```Where to find later?

These settings can be accessed and modified anytime from **FluentCart → Settings → Store Settings → Pages Setup**.
### 4. Setup Your Products ​

The final step gets your store off zero by either letting you start fresh or seeding it with sample content you can iterate on.

You have two paths:

- **Start From scratch:** Pick this if you'd rather build the catalogue yourself, one product at a time, after the wizard closes.
- **Generate dummy content (Men's Shoes, Menswear, etc.):** Pick one of the sample bundles to import a ready-made set of products, categories, and media. Useful for evaluating layouts, themes, and reports without typing in your own data first. A checkmark on a tile indicates it's selected.

Sample content uploads in the background and may take a few seconds depending on your network. You might need to reload the page once or twice for the imported items to show up in your product list and reports.

Click **Save** (or press **Cmd+S** / **Ctrl+S**) to finalize the wizard.

## Completing the Wizard and Next Steps for Your Business ​

Once you've gone through all four steps, the wizard confirms the setup and drops you onto your FluentCart Dashboard.

The wizard gets you to a working baseline, but a production-ready store needs a few more touches:

- **Set up Payment Gateways:** Connect Stripe, PayPal, Cash on Delivery, or any of the supported gateways under [Payment Settings](/guide/settings-configuration/payment-settings).
- **Add Your Products:** Start creating [physical products](/guide/product-types-creation/creating-physical-products), [digital products](/guide/product-types-creation/creating-digital-products), or [licensed digital products](/guide/product-types-creation/creating-digital-products-with-licenses).
- **Review Email Notifications:** Customize the [email templates](/guide/settings-configuration/email-configuration/index) so customers receive branded, informative updates.
- **Explore Reports:** Use the [Reporting & Analytics](/guide/reporting-analytics/) section to monitor store performance.
- **Configure Integrations:** Connect FluentCart to your CRM, marketing tools, and other business systems.

---

## Installation & Activation ​

**Source:** [https://docs.fluentcart.com/guide/getting-started/installation-activation](https://docs.fluentcart.com/guide/getting-started/installation-activation)

# Installation & Activation ​

This guide will show you how to install and activate the FluentCart plugin on your WordPress website. It will also explain how to activate your license so you can receive all updates and access premium features.

#### Server & Hosting Requirements ​

Before you install FluentCart, make sure your hosting environment meets the following requirements. This ensures that the plugin runs smoothly and delivers the best performance for your store.

Minimum Requirements [​](#minimum-requirements)- **WordPress Version:** 6.7 or higher
- **PHP Version:** 7.4 or higher
- **Database:** MySQL or MariaDB. FluentCart does not run on SQLite.
- **FluentCart Pro:** Keep FluentCart and FluentCart Pro on the same version. FluentCart 2.2.0 needs FluentCart Pro 2.2.0 or later, and Pro 2.2.0 needs FluentCart 2.2.0 or later.

## 1. Installing FluentCart (Free Version) ​

This is the standard method for installing the core FluentCart plugin, which is free and available from the WordPress Plugin Directory.

1. Navigate to your WordPress dashboard.
2. Go to **Plugins > Add New**.
3. In the search bar, type "FluentCart" and press Enter.
4. Locate the "FluentCart" plugin in the search results and click **"Install Now"**.
5. Once installed, click **"Activate"**. You can now use the FluentCart plugin.

## 2. Installing FluentCart Pro (Requires Base Plugin) ​

If you have purchased FluentCart Pro for advanced features, you will need to upload and activate it. Ensure the Free Base Plugin (from step 1) is already installed and active before proceeding with FluentCart Pro.

1. Download the FluentCart Pro 
```
.zip
```

 file from [FluentCart](https://fluentcart.com/).

1. Navigate to your WordPress dashboard.
2. Go to **Plugins > Add New**.
3. At the top of the page, click the **"Upload Plugin"** button.
4. Click **"Choose File"**, then select the FluentCart Pro 
```
.zip
```

 file you downloaded.
5. Click **"Install Now"**.
6. Once the installation is complete, click **"Activate Plugin"**.

## 3. Activating Your FluentCart Pro License ​

After installing FluentCart Pro, you will need to activate your license key. This is essential to receive automatic updates, bug fixes, new features, and access to our support for FluentCart Pro.

1. When you turn on FluentCart Pro, you might see an activation notice directly in your WordPress dashboard. You can click on this notice to start the activation process.
2. Alternatively, navigate to the FluentCart Dashboard in your WordPress admin area.
3. In the left sidebar, go to **FluentCart Pro > Settings**.
4. Click on the **"License Settings"** tab.
5. In the "License Key" field, enter the unique license key you received upon purchasing FluentCart Pro from the [site](https://fluentcart.com/account/).

1. Click the **"Verify License"** button. - If successful, you will see a confirmation message, and your license status will be marked as active.
- If you encounter an error, please double-check your license key for any typos or ensure your site can connect to the licensing server.

Need a License Key?

If you don't have a FluentCart Pro license key yet, you can purchase one directly from [FluentCart](https://fluentcart.com/).

---

## Introduction to FluentCart ​

**Source:** [https://docs.fluentcart.com/guide/getting-started/introduction-fluentcart](https://docs.fluentcart.com/guide/getting-started/introduction-fluentcart)

# Introduction to FluentCart ​

FluentCart is a complete e-commerce plugin for WordPress. It turns your site into a working online store, managing your products, checkout, payments, taxes, shipping, and customer records from inside your WordPress dashboard.

It is built for anyone who sells through WordPress: shop owners with physical inventory, creators selling downloads, course builders, and software makers distributing licensed products.

## What You Can Sell ​

FluentCart supports several product types, and you can mix them freely in the same store:

- **Physical products:** Tangible goods that need stock tracking and shipping.
- **Digital downloads:** Files your customers receive as soon as payment clears.
- **Subscriptions:** Recurring plans billed on a schedule you set.
- **Licensed software:** Products that issue license keys and track site activations.
- **Bundles:** Several products sold together as a single package.

Every type supports variations, so one product can carry different sizes, formats, or pricing tiers.

## What FluentCart Handles for You ​

Once your products are in place, these systems run the store day to day:

- **Payments:** Take payments with Stripe, PayPal, and cash on delivery in the free plugin. FluentCart Pro adds Paddle, Mollie, and Authorize.net, and add-ons connect gateways such as Square, Razorpay, Paystack, Flutterwave, Mercado Pago, Airwallex, and SSLCommerz.
- **Tax and VAT:** Apply country-specific rates and tax classes, including EU VAT with OSS, home country, or per-country registrations.
- **Shipping:** Build the zones, methods, classes, and packages that match how you actually ship.
- **Inventory:** Track stock for each product or variation, with a low-stock view and bulk import in FluentCart Pro's Advanced Inventory.
- **Reports:** Follow sales, revenue, refunds, subscriptions, cohorts, and retention from one dashboard.
- **Customer accounts:** Give buyers their own area for orders, downloads, licenses, subscriptions, and saved payment methods.

## Choose Your Starting Point ​

Where you begin depends on what you already have.

### Setting Up a New Store ​

Start here if this is your first store on the site.

1. [Install and activate](/guide/getting-started/installation-activation) FluentCart.
2. Run the [Initial Setup Wizard](/guide/getting-started/initial-setup-wizard) to set your store details, tax collection, and storefront pages.
3. Add your first item from the [Product Types & Creation](/guide/product-types-creation/) guides.

### Moving From Another Platform ​

If you already sell somewhere else, the [Migration](/guide/migration/) tool brings your products, customers, orders, subscriptions, and licenses across in one coordinated pass. Your old store keeps running while you migrate. The Migrator only reads your orders, customers, and settings; the one thing it writes is a small reference field on each source product so it can match it to the new FluentCart product.

FluentCart currently migrates from **Easy Digital Downloads** and **WooCommerce**.

### Extending a Store You Already Run ​

- Connect your store to other tools through [Integrations](/guide/integrations/integration-overview), including FluentCRM, FluentCommunity, and LearnDash.
- Design your storefront with blocks and widgets for Gutenberg, Elementor, Bricks, or Divi.
- Deliver large files from [cloud storage](/guide/storage/) such as Amazon S3 or Cloudflare R2.
- Let an [AI assistant](/guide/settings-configuration/mcp) read and act on your store data over MCP.

INFO

Not sure what a term means? The [FluentCart Glossary](/guide/getting-started/fluentcart-glossary) explains the vocabulary used throughout these guides.Whichever path you take, you will end up with a store that handles selling, billing, compliance, and customer records in one place, without leaving WordPress.

---

