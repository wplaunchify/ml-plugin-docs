# Settings Configuration

*Category from FluentCart documentation*

---

## Settings & Configuration ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/](https://docs.fluentcart.com/guide/settings-configuration/)

# Settings & Configuration ​

The **Settings & Configuration** section in FluentCart is your control panel for customizing nearly every aspect of your online store. From fundamental store details and payment processing to email notifications and user permissions, this area allows you to tailor FluentCart to meet your specific business needs.

Properly configuring these settings ensures your store operates efficiently, securely, and aligns with your branding and operational requirements.

This section covers the following critical areas:

- **General Settings (Store Setup):** Configure your basic store information, including name, logo, address, and currency settings.
- **Pages Setup:** Assign essential FluentCart functionalities (like shop, cart, and checkout) to specific WordPress pages using shortcodes.
- **Single Product & Order Setup:** Customize how individual products are displayed and manage general order-related settings.
- **Additional Info Settings:** Configure various optional settings related to cart display, checkout requirements, and address fields.
- **Payment Settings Overview:** A general overview of available payment gateways and links to their detailed setup guides.
- **Email Notifications:** Manage and customize automated email communications sent to both administrators and customers.
- **Roles & Permissions:** Define and assign different user roles with specific access levels within your FluentCart store.
- **Storage Settings:** Configure where your digital product files and other assets are stored, including local and cloud (S3) options.
- **Licensing Settings (FluentCart Product License):** Activate your FluentCart plugin license key to ensure regular updates and access to premium features.

By thoroughly configuring these settings, you can ensure your FluentCart store runs exactly as you intend.

---

## Cart & Checkout Settings ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/cart-checkout-settings](https://docs.fluentcart.com/guide/settings-configuration/cart-checkout-settings)

# Cart & Checkout Settings ​

The **Cart & Checkout** settings are fundamental to shaping your customer's journey, from the moment they add a product to their cart to the final confirmation of their purchase. Optimizing these options is key to reducing friction, increasing conversions, and creating a seamless buying experience.

This section controls the visibility of the cart, how user accounts are created, and the format of your official receipts.

## Accessing Cart & Checkout Settings ​

1. From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
2. Click on the **Store Settings** tab.
3. From the sub-menu, select **Cart & Checkout**.

![Screenshot of Additional Info Settings Tab](https://docs.fluentcart.com/images/settings-configuration/cart-checkout/cart-checkout.webp)

#### Cart Icon in Body ​

Enable this to display a floating cart icon that remains visible on the side of the screen as the user scrolls. This provides a convenient, one-click path for customers to return to their cart from anywhere on your site.

#### User Account Creation Mode ​

This is a crucial setting that defines how customer accounts are handled during checkout. Choosing the right option has a big impact on the user experience.

- **Create User Account Automatically after payment:** An account is automatically and seamlessly created for every customer after they complete their purchase. This is the recommended setting for stores selling subscriptions or licensed products, as it ensures customers have an account to manage their purchases without any extra steps.
- **Give checkbox to create account on checkout page:** This adds an "Create an account?" checkbox to the checkout page. It gives customers the choice, balancing the benefits of account creation with the convenience of a faster checkout.
- **No need to create account for onetime purchases:** This enables a full **"guest checkout"** experience for non-subscription products. It offers the lowest possible friction for new or one-time buyers and can significantly reduce cart abandonment.

#### Hide coupon field on checkout ​

Enable this option to remove the coupon code input field from the checkout page. This can be a strategic move to prevent customers from leaving your site to search for discount codes, a common cause of cart abandonment.

#### Receipt Settings ​

This section allows you to customize the numbering format for your store's official receipts, which helps with branding and organization.

- **Minimum Receipt Number:** Set the starting number for your receipts. Many businesses set this to a higher number (e.g., 1001) to appear more established than a store starting at receipt #1.
- **Next Receipt Number:** This is a non-editable field that conveniently shows you the number that will be assigned to the very next receipt generated by your store.
- **Receipt Prefix:** Enter a custom prefix that will be added before every receipt number (e.g., INV-, FC-). This is excellent for branding and makes your receipts instantly recognizable (e.g., YOURBRAND-1001).

After you have configured these settings to your liking, click the **Save** button to apply the changes to your store.

---

## Checkout Fields Settings ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/checkout-fields](https://docs.fluentcart.com/guide/settings-configuration/checkout-fields)

# Checkout Fields Settings ​

The Checkout Fields screen in **FluentCart** allows you to customize the form customers fill out when they complete a purchase. Here, you can **enable**, **disable**, or make fields **required** to ensure you collect all necessary customer and order details efficiently.

## Accessing Checkout Fields Settings ​

Go to your **WordPress dashboard**, then navigate to **FluentCart > Store Settings** in the side menu, and select the **Checkout Fields** section.

## Configuration Options ​

The settings are organized into three sections, allowing you to control which fields appear during the checkout process.

### 1. Basic Info ​

This section includes essential fields for customer identification.

- **First Name:** You can now enable this as an individual field. Enabling First/Last name will replace the default Full Name.
- **Last Name:** You can enable this field and mark it as mandatory by checking the **Required** box.
- **Email Address:** A system-required field used for order confirmations and communication. This field cannot be disabled.
- **Company:** An optional field for collecting a customer's company name. You can enable it with the toggle and make it mandatory by checking the **Required** box.

### 2. Billing Address ​

This section allows you to define the address fields required for billing purposes.

- **Country**: Displays the country field. It is enabled and required by default.
- **State**: Displays the state/province field. It is enabled and required by default.
- **Street Address:** Displays the primary address line. It is enabled and required by default.
- **Apt, suite, unit:** Displays an optional second address line for apartment numbers or other details.
- **City**: Displays the city field. It is enabled and required by default.
- **Post Code**: Displays the postal/zip code field. It is enabled and required by default.
- **Phone**: An optional field to collect the customer’s phone number.

![Screenshot of Additional Info Settings Tab](https://docs.fluentcart.com/images/settings-configuration/checkout-field/checkout-fields.webp)

### 3. Shipping Address ​

This section lets you configure the fields for the shipping address, which is crucial for physical products.

- **Full Name**: A system-required field to identify the recipient of the order.
- **Country**: Displays the country field for shipping.
- **State**: Displays the state/province field for shipping.
- **Street Address:** Displays the primary shipping address line.
- **Apt, suite, unit:** Displays an optional second shipping address line.
- **City**: Displays the city field for shipping.
- **Post Code**: Displays the postal/zip code field for shipping.
- **Phone**: An optional field to collect the recipient’s phone number for delivery purposes.

![Screenshot of Additional Info Settings Tab](https://docs.fluentcart.com/images/settings-configuration/checkout-field/shipping-address.webp)

### 4. Agree Terms ​

This section allows you to include legal agreements at checkout.

- **Agree Terms and Conditions:** Use the toggle to display a terms agreement checkbox on your checkout page.
- **Required Checkbox:** If enabled, you can make this mandatory so customers must agree before completing their purchase.

## Saving Your Settings ​

After configuring the checkout fields, click the **Save** button at the bottom right of the screen to apply your changes.

## Important: Toggle vs. Required ​

Always understand the two options available for most fields:

- **Toggle Switch**: Use this to make a field visible or **hidden** on your checkout page.
- **Required Checkbox**: If a field is toggled on, checking this box forces the customer to fill it out before completing their purchase. If unchecked, the field is **optional**.

---

## Email Configuration ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/email-configuration/](https://docs.fluentcart.com/guide/settings-configuration/email-configuration/)

# Email Configuration ​

The **Email Configuration** section is the central hub for managing all aspects of the emails your FluentCart store sends to customers and administrators. Properly configuring these settings is essential for maintaining brand consistency, ensuring reliable email delivery, and keeping everyone informed about store activity.

This area is divided into two main sections, each handling a different aspect of your store's email communications.

---

#### Mailing Settings ​

This is where you set the global identity for all outgoing emails. Before customizing individual notifications, it's important to configure these settings to ensure your emails are professional and trustworthy.

In this section, you will learn how to:

- Set the "From Name" and "From Email" that your customers will see.
- Specify a "Reply-to" address to route customer inquiries.
- Create a universal email footer with your business details for compliance.
- Set the email address for receiving admin notifications.

---

#### Notifications ​

This section allows you to manage the content and status of every automated, event-triggered email your store sends. These are the transactional emails that confirm actions for both customers and admins.

In this section, you will learn how to:

- Enable or disable individual email notifications (e.g., "Order Created," "Payment Paid").
- Edit the subject line for any notification.
- Customize the email body with your own text and branding using a rich text editor and shortcodes.

---

## Configuring Email Notifications ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/email-configuration/configuring-email-notification](https://docs.fluentcart.com/guide/settings-configuration/email-configuration/configuring-email-notification)

# Configuring Email Notifications ​

The **Notifications** section in FluentCart is where you manage all the automated transactional emails sent to both your customers and store administrators. Keeping everyone informed about order activity is crucial for a professional e-commerce experience and efficient store management.

This guide will walk you through how to enable, disable, and customize these important email notifications.

---

### Accessing the Notifications Screen ​

1. From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
2. Click on the **Email Configuration** tab.
3. From the sub-menu, select **Notifications**.

### Managing Your Notifications ​

On this screen, you will see a list of all available email notifications. For each one, you can see its **Notification Name**, the intended **Recipient** (Admin or Customer), and a **toggle** to enable or disable it.

#### Available Notifications: ​

- **Send mail to admin after New Order Paid:** Notifies the store admin when a new order has been successfully paid for.
- **Purchase receipt to customer:** Sends a receipt to the customer immediately after their order is placed.
- **Send mail to customer after a subscription renewed:** Confirms to the customer that their subscription renewal payment was successful.
- **Send mail to admin after a subscription renewed:** Alerts the admin that a subscription renewal payment has been made.
- **Send mail to admin after a refund:** Informs the admin that a full or partial refund has been processed.
- **Send mail to customer after a refund:** Notifies the customer that a refund has been issued for their order.
- **Send mail to customer when shipping status changed to shipped:** Informs the customer that their physical order has been shipped.
- **Send mail to customer when shipping status changed to delivered:** Confirms to the customer that their order has been marked as delivered.
- **Send mail to customer after a subscription is cancelled:** Notifies the customer that their subscription has been cancelled and includes the **access end date** so they know exactly when their access ends. This is especially important for stores running courses, memberships, or licensed products where billing and access are tied together.

NOTE

The cancellation email is sent automatically whenever a subscription moves to a cancelled state. The access end date is pulled from the subscription's paid-through period, so customers can see at a glance whether their access ends immediately or continues through the end of the current billing cycle.
#### Enabling or Disabling Notifications ​

To quickly activate or deactivate any notification, simply click the **toggle switch** in the "Enabled" column. The email will only be sent if the toggle is on.

![Email Notification](https://docs.fluentcart.com/images/settings-configuration/email-notifications/email-notification-1.webp)

### Customizing an Email Notification ​

To customize the content of a specific email, click the **pencil icon** on the right-hand side of its row. This will take you to the editor for that specific email template.

- **Enable this email notification!** This toggle at the top right serves the same purpose as the one on the main list, allowing you to activate or deactivate the email from within the editor.

#### Email Subject ​

This field controls the subject line of the email. You can personalize it by clicking the **shortcode icon {;}** on the right to insert dynamic information, such as the customer's name or the order ID.

#### Email Body Type ​

You have two options for the email's main content:

- **Default Body:** This is the standard, pre-written email content provided by FluentCart. It contains all the essential information for that specific notification and is ready to use out of the box.
- **Customized Body:** Select this option to take full control over the email's content. This is perfect for matching the email's design and tone to your brand's voice.

#### Customizing the Email Body ​

If you select **Customized Body**, a full rich text editor will appear.

- **Content Editor:** Use the editor to write your own text, apply formatting (like bold, italics, and lists), and structure the email exactly as you want it.
- **Shortcodes:** Just like with the subject line, you can use the **shortcode icon {;}** above the editor to insert dynamic placeholders for order, customer, and general store details. This allows you to create highly personalized and informative emails.
- **Visual/Code View:** You can switch between the **Visual** editor and the **Code** editor (for HTML) to achieve more advanced customizations.

![Email Notification Customization](https://docs.fluentcart.com/images/settings-configuration/email-notifications/email-notification-body.webp)

#### Package Merge Tags ​

For stores selling physical products, FluentCart exposes the package details of each ordered item as email merge tags. Use these to build custom order confirmations, packing notifications, or warehouse-facing receipts that show shoppers exactly what is shipping — without writing any code.

Place the cursor where the tag should appear, click the **shortcode icon {;}**, and select the tag from the **Package** group. The tag resolves per line item at send time.

| Merge Tag | Renders |
| --- | --- |
| \{\{item.package_name\}\} | The package name assigned to the product (e.g., Gift box, Medium Mailer) |
| \{\{item.package_type\}\} | The package shape - Box, Envelope, or Soft package |
| \{\{item.dimensions\}\} | The package dimensions in L x W x H unit format (e.g., 1 x 1 x 1 in) |
| \{\{item.product_weight\}\} | The product's own weight with its unit (e.g., 5 kg) |
| \{\{item.shipping_weight\}\} | The total shipping weight - product weight plus empty-package weight (e.g., 6 kg) |**Default email body already includes package info**

If the notification uses the **Default Body**, package name, dimensions, product weight, and shipping weight are rendered automatically below each item line — no template changes needed. The values match what the customer saw on the product page and at checkout.

![Screenshot of an order confirmation email showing Package, Dimensions, Weight, and Shipping Weight under the order line](https://docs.fluentcart.com/images/settings-configuration/email-notifications/package-info-email.webp)

**Values are captured at checkout**

When the order is placed, FluentCart snapshots the package data onto the order item itself. The email renderer reads from that snapshot — never re-querying the live product — so even if you rename a package, change dimensions, or adjust weights months later, every historical email (resends, reprints, subscription renewals) still displays the values that were correct when the customer placed the order.

Once you are finished editing, click the **Update** button to save your changes. Your customized email will now be sent whenever its corresponding event is triggered.

---

## Mailing Settings ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/email-configuration/mailing-settings](https://docs.fluentcart.com/guide/settings-configuration/email-configuration/mailing-settings)

# Mailing Settings ​

The **Mailing Settings** section is the central place for managing the global sender identity and email footer for all automated emails sent from your FluentCart store. Configuring these settings correctly ensures your emails look professional, reach your customers' inboxes, and stay compliant.

### Accessing Mailing Settings ​

1. From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
2. Click on the **Email Configuration** tab. The **Mailing Settings** page opens by default.

### Configuration Options ​

![Mailing Settings](https://docs.fluentcart.com/images/settings-configuration/email-notifications/mailing-settings-1.webp)

These settings apply globally to all emails sent from FluentCart, including order confirmations and notifications.

- **From Name:** The name your customers will see as the sender of all store emails. Use your store or brand name here.
- **From Email:** The email address that emails will be sent from. Make sure to use a valid email address that matches your domain or SMTP configuration — this directly affects whether your emails land in the inbox or spam folder.
- **Reply to Name (Optional):** If you want replies to be addressed to a different name than the sender, enter it here.
- **Reply to Email (Optional):** The email address where customer replies to your notification emails will be delivered. If left empty, replies will go to the **From Email** address.
- **Email Footer:** Use the rich text editor to compose a footer that will appear at the bottom of every email sent from your store. You can switch between **Visual** and **Code** views for advanced formatting, and use the **shortcode icon {;}** to insert dynamic values. It is highly recommended to include your business name and physical address in the footer for legal compliance.
- **Enable powered by FluentCart in the email footer:** Check this box to automatically append a "Powered by FluentCart" line to your email footer.
- **Admin Email Address:** The email address where FluentCart will send all administrative notifications. By default, this is pre-filled with ```
{{wp.admin_email}}
```, which automatically pulls the primary administrator email from your WordPress settings. You can replace this with any specific address if needed.

### Saving Your Changes ​

Once you have configured these settings, click the **Save** button in the top-right corner to apply your changes.

---

## PDF Invoice Templates ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/email-configuration/pdf-invoice](https://docs.fluentcart.com/guide/settings-configuration/email-configuration/pdf-invoice)

# PDF Invoice Templates ​

When a customer buys something from your store, sending them a beautiful, branded PDF receipt leaves a lasting professional impression.

With the Fluent PDF feature, you can automatically generate and attach custom-designed PDF documents to your store's emails. Best of all, you don't need to know any code! FluentCart uses the familiar WordPress Block Editor (Gutenberg) to let you drag, drop, and design your PDFs exactly how you want them.

> Important Note: Please keep in mind that these PDF documents (Order Receipt, Renewal Receipt, Refund Notice, and Invoice) are only delivered to your customers via email.

Here is your comprehensive guide to setting up and designing your first custom PDF template.

## Step 1: Install and Activate the Fluent PDF Addon ​

Before you can start designing, you need to turn the feature on. Fluent PDF is a licensed addon, so it ships with the FluentCart Pro one-click installer — there is no ZIP to download or upload.

1. Make sure your FluentCart Pro license is verified on the site. See [Licensing Settings](/guide/settings-configuration/licensing-settings) if you haven't done this yet.
2. Navigate to **FluentCart > Settings** in your WordPress dashboard.
3. In the left-hand menu, click on the **Features & addon** tab.
4. Scroll down to the bottom of the page to find the **Plugin Addons** section.
5. Locate the **Fluent PDF** card and click the dark **Install & Activate** button.

FluentCart will fetch the addon from the licensed update server, install it, and activate it in a single step. The card switches to **Active** as soon as it's ready.

![PDF Invoice](https://docs.fluentcart.com/images/store-management/pdf-invoice/pdf-1.webp)

## Step 2: Install Required Fonts ​

To make sure your PDFs generate perfectly and look great on any device (whether your customer opens it on an iPhone or a Windows PC), the system needs to download some specific font files.

1. After activating the addon, go to **Settings** of Fluent PDF.
2. Click on the **Settings** icon button.

![PDF Invoice](https://docs.fluentcart.com/images/store-management/pdf-invoice/pdf-2.webp)

1. You will see a "Font Setup Required" notice. Click the orange **Setup Fluent PDF** button.

![PDF Invoice](https://docs.fluentcart.com/images/store-management/pdf-invoice/pdf-3.webp)

1. You will be redirected to a setup page with a blue **Install Fonts** button. Click it. *(Don't worry—this is a quick, one-time process! You will never have to do this again).*

![PDF Invoice](https://docs.fluentcart.com/images/store-management/pdf-invoice/pdf-4.webp)

## Step 3: Choose a Template to Edit ​

Once your fonts are ready, navigate back to **Settings > Email Configuration > PDF Templates**.

You will now see four built-in templates ready for your personal touch:

- **Order Receipt:** The classic receipt sent when a customer completes a new purchase.
- **Renewal Receipt:** Sent automatically when a customer's subscription successfully renews.
- **Refund Notice:** Sent as proof of a refund if an order is returned or canceled.
- **Invoice:** A standardized, formal invoice document for business transactions.

Hover your mouse over the template you want to customize (for example, "Order Receipt") and click the blue **Edit Template** button that appears.

![PDF Invoice](https://docs.fluentcart.com/images/store-management/pdf-invoice/pdf-5.webp)

## Step 4: Designing Your PDF (The Fun Part!) ​

Clicking edit will open the template in the standard WordPress Block Editor. If you have ever written a blog post in WordPress, you already know how to use this!

### 1. Drag and Drop Blocks ​

Click the **+ (Add Block)** icon in the top left corner to add new visual elements to your receipt. You can add:

- **Images:** Drag in an Image block to place your store's colorful logo at the top.
- **Headings & Paragraphs:** Add a friendly "Thank you for your purchase!" message at the bottom.
- **Dividers:** Add lines to separate different sections of the receipt neatly.

### 2. Using "Smart Tags" (Dynamic Data) ​

As you look at the default template, you will notice weird text wrapped in curly brackets, like 
```
{{order.invoice_no}}
```

.

These are Smart Tags (or shortcodes). Click the {{:}} button to get these shortcodes. As if you can't type a specific customer's name into a template that goes to everyone, you use these tags as placeholders. When FluentCart creates the PDF, it instantly swaps these tags with the real customer's data!

Here are a few examples of how they work in action:

- **The Logo Tag:** * **What you type:** 
```
{{settings.store_logo}}
```

- **What the customer sees:** Your actual uploaded store image logo.
- **The Order Number Tag:**- **What you type:** Invoice Number: 
```
{{order.invoice_no}}
```
- **What the customer sees:** Invoice Number: #INV-0042
- **The Total Amount Tag:**- **What you type:** You paid a total of 
```
{{order.total_amount_formatted}}
```

 today.
- **What the customer sees:** You paid a total of $45.00 today.
- **The Items Table Tag:** * **What you type:** 
```
{{order.items_table}}
```

- **What the customer sees:** A perfectly formatted, multi-row table showing every single product they bought, the quantity, and the individual prices.

You can freely move these tags around, change their font size, or make them bold just like normal text!

#### Customer VAT Number on Receipts ​

If a customer provides a VAT number at checkout, FluentCart now automatically includes it inside the **billing address block** of every generated PDF (Order Receipt, Renewal Receipt, Refund Notice, and Invoice). You don't need to add a separate smart tag or modify the template — when the address renders, the VAT number is appended right under the customer's address line.

This makes FluentCart receipts drop-in ready for B2B customers in the EU, UK, and other VAT jurisdictions who need a properly formatted receipt for their own bookkeeping. If the customer has not provided a VAT number, the line is omitted automatically — so receipts for B2C buyers continue to look exactly the same.

NOTE

VAT numbers are captured during checkout via the EU VAT field. To learn how to enable and configure VAT collection for your store, see [Configuring European Union (EU) VAT](/guide/tax-&-duties/european-union-vat).![PDF Invoice](https://docs.fluentcart.com/images/store-management/pdf-invoice/pdf-6.webp)

## Step 5: Test and Save Your Masterpiece ​

Before you let this template go live to your real customers, you should always check your work.

1. Look at the bottom right corner of the editor screen.
2. Click the white **Test Download** button.
3. FluentCart will instantly generate a sample PDF and download it to your computer. Open it up and see how your logo, text, and smart tags look!
4. If everything looks perfect and professional, click the dark **Save Template** button next to it. You are done! Your custom-designed PDF is now active. The next time a customer buys something, FluentCart will automatically generate a PDF using your new design and attach it directly to their order email.

---

## Reminders ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/email-configuration/reminders](https://docs.fluentcart.com/guide/settings-configuration/email-configuration/reminders)

# Reminders ​

The **Reminders** section in FluentCart lets you control the automated reminder emails that are sent to customers before key subscription events such as an upcoming renewal or the end of a trial period. This helps reduce unexpected charges and keeps your customers informed ahead of time.

### Accessing Reminders ​

1. From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
2. Click on the **Email Configuration** tab.
3. From the sub-menu, select **Reminders**.

### Enabling Reminder Emails ​

The first thing you will see on this page is the **Reminder Emails** toggle. By default, it is turned off.

![Reminders - Disabled State](https://docs.fluentcart.com/images/settings-configuration/email-notifications/reminders/reminders-1.webp)

Click the toggle to enable it. Once turned on, the full reminder configuration options will appear on the page.

IMPORTANT

Enabling this toggle alone is not enough. For reminder emails to actually be delivered, the individual reminder notifications must also be enabled in **Email Notification Settings** under the **Scheduler / Reminder Actions** section.
### Configuring Subscription Reminders ​

Once Reminder Emails are enabled, you will see the **Subscription Reminders** section with two configurable reminder types.

![Reminders - Enabled with Configuration](https://docs.fluentcart.com/images/settings-configuration/email-notifications/reminders/reminders-2.webp)

#### Trial Ending ​

This reminder notifies customers before their trial period ends and billing begins.

- **Enable:** Check this box to activate the trial-ending reminder.
- **Days before trial ends:** Set how many days in advance the reminder is sent. The accepted range is **Min: 1, Max: 14**. The default is **3 days**.

#### Renewal Reminders ​

This reminder notifies customers before an upcoming subscription renewal charge.

- **Yearly (Recommended):** Check to send a renewal reminder for yearly subscriptions. You can set the number of days before the billing date. The accepted range is **Min: 7, Max: 90**. The default is **30 days**.
- **Half Yearly:** Check to send a renewal reminder for half-yearly subscriptions.
- **Quarterly:** Check to send a renewal reminder for quarterly subscriptions.
- **Monthly:** Check to send a renewal reminder for monthly subscriptions.

You can enable reminders for one or more billing frequencies at the same time, each with its own lead time.

### Saving Your Changes ​

After configuring your reminder preferences, click the **Save** button in the top-right corner to apply your changes.

---

## Features & Addons ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/features-addons](https://docs.fluentcart.com/guide/settings-configuration/features-addons)

# Features & Addons ​

The **Features & Addon** section in FluentCart is the central hub for managing the plugin's modular functionality. This area allows you to activate or deactivate high-level modules, ensuring that your store's backend remains clean and optimized by only running the features you actually need.

## Accessing Features & Addon ​

To manage your store's modules:

1. Log in to your **WordPress Dashboard**.
2. Navigate to **FluentCart > Settings** in the side menu.
3. Select the **Features & Addon** tab from the left-hand sidebar.

![Features & Addons](https://docs.fluentcart.com/images/settings-configuration/feature-addon/features-addons-1.webp)

## Managing Available Modules ​

In this section, you will find toggles for core features. When a feature is toggled on, it will display an **Active** badge; otherwise, it will show as **Inactive**.

### 1. Cloudflare Turnstile ​

This module provides advanced security for your checkout page.

- **Function:** Protects your stores checkout page from spam and malicious bots using Cloudflare’s invisible reCAPTCHA technology.
- **Configuration:** Once enabled, you will be prompted to enter your **Turnstile Site Key** and **Turnstile Secret Key** to complete the integration. See [Cloudflare Turnstile Integration](/guide/integrations/cloudflare-turnstile-integration) for full setup and key configuration.

### 2. Product Licensing ​

This is the cornerstone for digital product sellers and software developers.

- **Function:** Enables the entire software licensing system.
- **When Active:** You can generate, manage, and sell license keys for products like software, plugins, or digital assets. See [Creating Licensed Product](/guide/product-types-creation/creating-digital-products-with-licenses) and [Managing Licenses](/guide/customer-dashboard/licenses) (customer-facing).
- **When Inactive:** All licensing-related fields and settings will be hidden from the product management screens.

### 3. Stock Management ​

Allows you to maintain a clear overview of your physical or limited digital inventory.

- **Function:** Enables inventory tracking tools, allowing you to set stock levels and display "In Stock" or "Out of Stock" messages to customers. For details, see [Inventory Management](/guide/product-types-creation/inventory-management).

### 4. Order Bump ​

A powerful tool for increasing your Average Order Value (AOV).

- **Function:** Allows you to offer relevant add-on products directly on the [checkout](/guide/settings-configuration/cart-checkout-settings) page, encouraging customers to add one more item to their purchase just before they pay. See [Order Bump](/guide/store-management/orders-management/order-bump) for creating and managing order bumps.

### 5. Advanced Inventory ​

A dedicated inventory workspace for stores that need more than per-product stock fields.

- **Function:** Adds a central **Inventory** admin menu (injected next to Products) with cross-catalog stock views, bulk stock updates, an auditable adjustment history, and export. Every stock change is recorded with the user, timestamp, old and new values, and an adjustment reason.
- **Requirements:** **Stock Management** (above) must be enabled first. Advanced Inventory activates only when both toggles are on.
- **When Inactive:** The Inventory admin menu is hidden and no adjustment history is recorded. Per-product stock still works through the basic [Inventory Management](/guide/product-types-creation/inventory-management) screen.
- **When Active:** See [Advanced Inventory](/guide/product-types-creation/advanced-inventory) for the full workflow.

## Saving Your Changes ​

After toggling any feature on or off:

1. Review your selections to ensure they match your store's requirements.
2. Click the **Save Settings** button located at the bottom right of the screen.

> Note: Some features, like Cloudflare Turnstile, may require additional configuration (such as API keys) immediately after activation to function correctly.

## Installing Licensed Addons (One-Click Installer) ​

Below the core feature toggles, the **Features & Addon** page also lists every licensed addon that ships with your FluentCart Pro license — for example, Fluent PDF and other premium extensions. You no longer need to download a ZIP file from your account, upload it through the WordPress plugin uploader, and then activate it. The whole flow has been collapsed into a single click.

### Prerequisites ​

Before the one-click installer becomes available, make sure:

1. You have a valid FluentCart Pro license verified on the site. See [Licensing Settings](/guide/settings-configuration/licensing-settings) for how to verify your license.
2. Your server can make outbound HTTPS requests to the FluentCart update servers (this is the case on virtually every standard WordPress host).

### How to Install an Addon in One Click ​

1. Navigate to **FluentCart Pro > Settings > Features & Addon**.
2. Scroll to the **Plugin Addons** section at the bottom of the page.
3. Find the addon card for the addon you want to install (e.g., Fluent PDF).
4. Click the **Install & Activate** button on the card.

FluentCart will fetch the addon directly from the licensed update server, install it, and activate it automatically. The card's status badge will switch to **Active** as soon as the process finishes — you can use the addon immediately, no page reload or upload needed.

> Note: If the Install & Activate button is greyed out or replaced with a license prompt, your FluentCart Pro license either hasn't been verified or has lapsed. Verify your license from Settings > Licensing and the installer will become available again.

This makes the addon ecosystem feel like a first-class part of FluentCart — installing a premium addon now takes the same amount of effort as flipping a feature toggle.

---

## Managing Global Integrations ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/global-integrations](https://docs.fluentcart.com/guide/settings-configuration/global-integrations)

# Managing Global Integrations ​

The **Global Integrations** section is your central dashboard for managing powerful, event-driven automations that connect your FluentCart store to other essential services. These automations, often called "feeds," are triggered by specific events in your store, such as a new order being created or a subscription being renewed.

## Accessing Global Integrations ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2. Click on the **Global Integrations** tab.

![Screenshot of Checkout Actions Tab](https://docs.fluentcart.com/images/settings-configuration/checkout/checkout-actions-tab.webp)

### The Global Integrations Dashboard ​

This screen provides a comprehensive overview of all the integration feeds you have configured, serving as your command center for all connected services.

- **Integration List:** Displays all your feeds in a table, giving you an at-a-glance view of your automations:

- **Integration:** Shows the icon and name of the integrated service (e.g., FluentCRM), making it easy to identify the platform you are sending data to.
- **Title:** The custom name you gave to the integration feed for your own internal reference, helping you distinguish between different automations for the same service.
- **Triggers:** Lists the specific store event(s) that will trigger this automation. This is crucial for understanding exactly when your data is being sent.
- **Enabled:** Shows the current status of the feed, indicating whether it is active or inactive.
- **Management Actions:** On the right-hand side of each feed, you will find several options for easy management:

- **Enable/Disable Toggle:** Use this switch to quickly activate or deactivate a feed without deleting its configuration. This is perfect for temporarily pausing an automation during testing or promotional periods.
- **Edit (Pencil Icon):** Click this to open the configuration screen and make changes to the feed's settings, such as adding new triggers or modifying data mappings.
- **Delete (Trash Can Icon):** Click this to permanently delete the integration feed. This action cannot be undone.

![Screenshot of Checkout Actions Tab](https://docs.fluentcart.com/images/settings-configuration/checkout/global-integration.webp)

#### Adding a New Integration ​

To create a new automation, you can add a new integration feed. This is the starting point for connecting your store to a new service.

1. From the Global Integrations dashboard, click the **Add Integration** button at the top right.
2. A dropdown menu will appear, listing all the available integrations, here you can configure [Webhook](/guide/integrations/webhook-integration), [FluentCRM](/guide/integrations/fluentcrm-integration) and [FluentCommunity](/guide/integrations/fluentcommunity-integration).
3. Select the integration you wish to add from the list.
4. You will be taken to the dedicated configuration screen for that specific integration. Here, you will set up the specific rules for the automation, such as defining the triggers, mapping data fields, and configuring any service-specific options.

---

## Invoice & Packing Settings ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/invoice-packing-settings](https://docs.fluentcart.com/guide/settings-configuration/invoice-packing-settings)

# Invoice & Packing Settings ​

The **Invoice & Packing** section in FluentCart allows you to customize the templates for various printable documents essential for order fulfillment. This enables you to create branded and consistent documents, such as invoices and packing slips, that accompany your products.

INFO

Please note that the templates on this page are marked as being under active development, so their functionality may evolve.
### Step 1: Navigate to Invoice & Packing Settings ​

To begin customizing your documents, you first need to access the correct settings page.

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2. Click on the **Invoice & Packing** tab from the left-hand menu.

![Screenshot of Invoice & Packaging Page](https://docs.fluentcart.com/images/settings-configuration/Invoice/invoice-packaging.webp)

### Step 2: Understand the Available Templates ​

On this page, you will find a series of editors for different types of fulfillment documents. While the customization process is the same for all, each serves a unique purpose:

- **Invoice Template:** The official bill for the customer, detailing the products purchased and the total cost.
- **Packing Slip Template:** A list of all items included in a shipment, typically placed inside the package for the customer to verify the contents.
- **Delivery Slip Template:** A document that accompanies the shipment, often used by the courier and customer as proof of delivery.
- **Shipping Slip Template:** Contains shipping information and is often used as a simplified address label.
- **Dispatch Slip Template:** An internal document used by your team to confirm that an order has been picked, packed, and sent out for delivery.

### Step 3: Customize a Template ​

The customization process is identical for each of the five templates. Select the template you wish to edit and use the provided tools.

- **Direct Editing:** You can directly type in the editor to add custom messages, format text, or adjust the layout.
- **Advanced Editing:** For precise control, you can switch between the **Visual** editor and the **Code** editor to work directly with the template's HTML.
- **Using Shortcodes:** To automatically include order-specific details like customer names, addresses, or order IDs, use shortcodes.

1. Place your cursor in the editor where you want the information to appear.
2. Click the **Add ShortCodes** dropdown menu.
3. Select the desired placeholder from the list to insert it into the template.

![Screenshot of Invoice & Packaging Page](https://docs.fluentcart.com/images/settings-configuration/Invoice/template-customization.webp)

### Step 4: Save Your Templates ​

After you have finished customizing your templates, you must save your changes.

Scroll to the bottom of the page and click the **Save Settings** button. Your new layouts will now be used when generating these documents for future orders.

### VAT Numbers on Generated PDFs ​

When a customer provides a VAT number at checkout, FluentCart automatically renders it inside the **billing address block** of generated PDF receipts (Order Receipt, Renewal Receipt, Refund Notice, and Invoice). You don't need to edit the template or add a custom shortcode — the VAT line appears under the customer's address only when a VAT number is present, so B2C receipts are unaffected.

This makes the documents compliance-ready for B2B customers in the EU, UK, and other VAT jurisdictions. See [PDF Invoice Templates](/guide/settings-configuration/email-configuration/pdf-invoice) for the full PDF customization workflow.

---

## Licensing Settings ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/licensing-settings](https://docs.fluentcart.com/guide/settings-configuration/licensing-settings)

# Licensing Settings ​

The **Licensing Settings** feature in FluentCart allows you to manage your plugin license and access premium features. This is where you'll enter and verify your license key to unlock all the functionality of FluentCart Pro.

## Accessing Licensing Settings ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings** in the left sidebar.
2. Click on the **"Licensing"** tab.

## Managing Your License ​

1. On the Licensing Settings section, you'll see your current license status and details.
2. To activate or update your license, locate the license key input field.
3. Enter your license key in the provided field.
4. Click the **"Verify License"** button to activate your license.

![Screenshot of Licensing Settings Tab](https://docs.fluentcart.com/images/settings-configuration/license/licensing-settings-tab.webp)

Need a License Key?

If you don't have a FluentCart license key yet, you can purchase one from [FluentCart](https://fluentcart.com/).
## License Status ​

The Licensing Settings section displays important information about your license:

- **License Status:** Shows whether your license is active or expired.
- **Expiration Date:** Displays when your current license will expire.
- **Support Status:** Indicates whether you have access to premium support.
- **Updates Status:** Shows whether you can receive automatic updates.

## Installing Licensed Addons in One Click ​

Once your FluentCart Pro license is verified on this page, every premium addon included with your license becomes installable directly from inside FluentCart — no manual download, ZIP upload, or activation step required.

To install an addon:

1. Go to **FluentCart Pro > Settings > Features & Addon**.
2. Scroll to the **Plugin Addons** section.
3. Click the **Install & Activate** button on the addon card you want to install.

FluentCart pulls the addon directly from the licensed update server and activates it for you in a single step. For the full walkthrough, see [Features & Addons → Installing Licensed Addons](/guide/settings-configuration/features-addons#installing-licensed-addons-one-click-installer).

> Note: If your license expires, the one-click installer is disabled until the license is reverified. The addons you've already installed continue to run, but new installs and updates are paused until you renew.

## Troubleshooting ​

If you encounter any issues with your license:

1. Verify that you've entered the correct license key.
2. Check your internet connection.
3. Ensure your license hasn't expired.
4. Contact [WPManageNinja Support](https://wpmanageninja.com/support) if problems persist.

## Saving Your Settings ​

After making any changes to your license, remember to click the **"Save Settings"** button at the bottom right of the screen to apply your configurations.

---

## Pages Setup ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/pages-setup](https://docs.fluentcart.com/guide/settings-configuration/pages-setup)

# Pages Setup ​

The **Pages Setup** screen in FluentCart lets you connect key store features to specific pages on your WordPress site. This ensures that customers can access the Shop, Cart, Checkout, Customer Profile, and other essential pages correctly.

## Accessing Pages Setup ​

Go to your WordPress dashboard, then go to **FluentCart Pro** > **Settings** in the side menu, and click the **Pages Setup** tab.

## Assigning Core Pages ​

For each core FluentCart functionality, you need to select an existing WordPress page from the dropdown menu. Below each dropdown, FluentCart will display the specific **shortcode** that *must* be added to the content of the selected page for the functionality to work correctly.

- **Select Shop Page:** Assigns the main page where all your products will be displayed.

- **Required Shortcode:** 
```
[fluent_cart_products]
```
- **Select Customer Profile Page:** Assigns the page where customers can view and manage their personal details, orders, and downloads. You can find detailed information on what your customers see and manage in the [Customer Dashboard](/guide/customer-dashboard/index) section.

- **Required Shortcode:** 
```
[fluent_cart_customer_profile]
```
- **Select Cart Page:** Assigns the page that displays the customer's current shopping cart contents.

- **Required Shortcode:** 
```
[fluent_cart_cart]
```
- **Select Receipt Page:** Assigns the page that displays the order summary immediately after a successful purchase.

- **Required Shortcode:** 
```
[fluent_cart_receipt]
```
- **Select Checkout Page:** Assigns the page where customers enter their billing, shipping, and payment information to finalize their purchase.

- **Required Shortcode:** 
```
[fluent_cart_checkout]
```

![Screenshot of Pages Setup Tab](https://docs.fluentcart.com/images/settings-configuration/pages-setup/pages-setup.webp)

## Saving Your Settings ​

After assigning all the necessary pages, remember to click the **"Save Settings"** button at the bottom right of the screen to apply your configurations.

Important: Use Shortcodes!

Always ensure that the specified shortcode is correctly embedded within the content editor of the WordPress page you select. Without the shortcode, the FluentCart functionality will not display on that page.

---

## Payment Settings ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/payment-settings](https://docs.fluentcart.com/guide/settings-configuration/payment-settings)

# Payment Settings ​

The **Payment Settings** screen in FluentCart lets you set up how your store handles payments. You can configure payment gateways, customize checkout options, and manage transaction settings from this section.

## Accessing Payment Settings ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings** in the left sidebar.
2. Click on the **"Payment Settings"** tab.

![Screenshot of Payment Settings Tab](https://docs.fluentcart.com/images/settings-configuration/payment/payment-settings-tab.webp)

## Configuration Options ​

### 1. Payment Gateways ​

- **Enable/Disable Gateways:** Toggle switches to activate or deactivate specific payment gateways.
- **Gateway Settings:** Configure API keys, test modes, and other gateway-specific settings.
- **Available Gateways:**- [Stripe](/guide/payments-checkout/connecting-payment-gateways/stripe-settings)
- [PayPal](/guide/payments-checkout/connecting-payment-gateways/paypal-settings)
- [Paddle](/guide/payments-checkout/connecting-payment-gateways/paddle-settings)
- [Mollie](/guide/payments-checkout/connecting-payment-gateways/mollie-settings)
- [Paystack](/guide/payments-checkout/connecting-payment-gateways/paystack-settings)
- [Razorpay](/guide/payments-checkout/connecting-payment-gateways/razorpay-settings)
- [Mercado Pago](/guide/payments-checkout/connecting-payment-gateways/mercado-pago-settings)
- [Cash on Delivery](/guide/payments-checkout/connecting-payment-gateways/cash-on-delivery-settings)

### 2. Checkout Settings ​

- **Checkout Page:** Select which page will serve as your checkout page.
- **Checkout Fields:** Customize which fields appear during checkout.
- **Order Notes:** Enable/disable customer order notes.
- **Terms & Conditions:** Link to your terms and conditions page.

### 3. Transaction Settings ​

- **Currency:** Set your store's primary currency.
- **Currency Position:** Choose where the currency symbol appears (before or after the amount).
- **Decimal Separator:** Set the character used for decimal points.
- **Thousand Separator:** Set the character used for thousand separators.
- **Number of Decimals:** Set how many decimal places to display.

## Saving Your Settings ​

After making any changes to your Payment Settings, remember to click the **"Save Settings"** button at the bottom right of the screen to apply your configurations.

## Available Payment Gateways ​

On this screen, you will see a list of all available payment gateways. Each gateway is displayed with its activation status and a brief description. You can click the **"Manage"** button next to each to configure its specific settings.

- **Stripe:**- **Description:** Stripe's payments platform lets you accept credit cards, debit cards, and popular payment methods around the world all with a single integration.
- **Status:** Typically shown as "Active" if enabled.
- **Management:** Click "Manage" to access detailed [Stripe Settings](/payments-checkout/connecting-payment-gateways/stripe-settings) for configuration.
- **PayPal:**- **Description:** PayPal is the faster, safer way to send and receive money or make an online payment.
- **Status:** Typically shown as "Active" if enabled.
- **Management:** Click "Manage" to access detailed [PayPal Settings](/guide/payments-checkout/connecting-payment-gateways/paypal-settings) for configuration.
- **Paddle:**- **Description:** Paddle is an all-in-one payment solution that lets you accept credit cards, debit cards, and other popular payment methods worldwide through a single, simple integration.
- **Status:** Typically shown as "Active" if enabled.
- **Management:** Click "Manage" to access detailed [Paddle Settings](/guide/payments-checkout/connecting-payment-gateways/paddle-settings) for configuration.
- **Mollie**- **Description:** Mollie is a popular payment gateway, primarily used in Europe, that allows you to securely accept credit cards, debit cards, and local payment methods like iDEAL and Bancontact.
- **Status:** Typically shown as "Active" if enabled.
- **Management:** Click "Manage" to access detailed [Mollie Settings](/guide/payments-checkout/connecting-payment-gateways/mollie-settings) for configuration.
- **Paystack**- **Description:** Paystack is a modern payment gateway that helps businesses, particularly in Africa, accept payments from anyone, anywhere in the world via credit cards, bank transfers, and mobile money.
- **Status:** Typically shown as "Active" if enabled.
- **Management:** Click "Manage" to access detailed [Paystack Settings](/guide/payments-checkout/connecting-payment-gateways/paystack-settings) for configuration.
- **Razorpay**- **Description:** Razorpay is a leading payment gateway in India that lets you accept credit cards, debit cards, UPI, netbanking, and popular wallets through a single integration.
- **Status:** Typically shown as "Active" if enabled.
- **Management:** Click "Manage" to access detailed [Razorpay Settings](/guide/payments-checkout/connecting-payment-gateways/razorpay-settings) for configuration.
- **Mercado Pago**- **Description:** Mercado Pago is a widely used payment solution in Latin America that allows you to accept credit cards, debit cards, and local payment methods across multiple countries.
- **Status:** Typically shown as "Active" if enabled.
- **Management:** Click "Manage" to access detailed [Mercado Pago Settings](/guide/payments-checkout/connecting-payment-gateways/mercado-pago-settings) for configuration.
- **Cash on Delivery (COD):**- **Description:** Allows customers to pay with cash upon delivery of their order.
- **Status:** Typically shown as "Active" if enabled.
- **Management:** Click "Manage" to access [Cash on Delivery Settings](/guide/payments-checkout/connecting-payment-gateways/cash-on-delivery-settings) for configuration.

Get Started or Create Account

For online payment gateways like Stripe and PayPal, you may need to "Get started or create a merchant account to accept payments" if you don't already have one.

---

## Product Page Settings ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/product-page](https://docs.fluentcart.com/guide/settings-configuration/product-page)

# Product Page Settings ​

The **Single Product & Order Setup** screen in FluentCart allows you to fine-tune how individual product pages are displayed on your storefront and configure certain general settings related to order management.

## Accessing the Product Page Settings ​

1. From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings** in the left sidebar.
2. Click on the **Store Settings** tab.
3. Finally, select the **Product Page** section to see all available options.

## Configuration Options ​

### 1. Product Settings ​

These settings control how additional information is presented on your individual product pages and within product pop-up modals.

- **Show Relevant in Single Page:** When enabled, this will display a section for related products or upsells directly on the single product page. This is a highly effective strategy for encouraging customers to discover other items they might like, potentially leading to larger purchases.
- **Show Relevant in Product Modal:** If your theme uses a product quick-view or modal pop-up, this option will display those same relevant products within that modal view. This provides a seamless cross selling opportunity without requiring the customer to navigate to a new page.

![Screenshot of Single Product & Order Setup Tab](https://docs.fluentcart.com/images/settings-configuration/product-page-settings/single-product-order-setup.webp)

### 2. Image Zooming ​

- **Enable Zoom:** This feature lets customers get a closer look at your product images. When you check this **Enable Zoom** box, customers can hover their mouse over a product picture to see a magnified view. This is perfect for products with fine details, like clothing or electronics.
- **Enable Zoom In Modal:** If you use a product quick-view or pop-up modal, enable this option to activate the same hover-to-zoom functionality within that modal view.

### 3. Variation Display ​

These settings define how your product variations (e.g., different sizes, colors, or license tiers) are presented to customers. The goal is to make the selection process as clear and intuitive as possible.

**Variation View:** Choose how variations are visually presented to customers. You have three options:

- **Image:** Displays only the featured image for each variation. This is ideal for highly visual products where the image is the primary differentiator (e.g., different art prints).
- **Text:** Displays only the name of each variation (e.g., "Small," "Medium," "Large"). This is best for non-visual attributes or when images are not necessary.
- **Image with Text:** Displays both the image and the name for each variation. This is often the most effective option, as it provides clear visual and textual information, which is especially useful for products like clothing where both color and size are important.

**Variation Columns:** Set the column layout for how product variations are displayed within product sections. You can choose a fixed number of columns (**One**, **Two**, **Three**, or **Four**) to create a structured grid.

Alternatively, the **Masonry** option creates a dynamic layout that adjusts to fit the content of each variation, resulting in a clean and organized look.

### 4. Product Slug ​

A "slug" is the user-friendly and URL-valid part of a web address that identifies a specific page. Customizing your product slug is important for both branding and Search Engine Optimization (SEO).

- **Set Product Slug:** Here, you can define the base slug for all your products (e.g., 
```
product
```

, 
```
item
```

, 
```
course
```

). If you set it to 
```
product
```

, a product named "Stylish T-Shirt" would have a URL like 
```
yourstore.com/product/stylish-t-shirt
```

. Choosing a relevant slug can help search engines and users understand what the page is about.

## Saving Your Settings ​

After making any changes to your Single Product & Order Setup, remember to click the **"Save"** button at the bottom right of the screen to apply your configurations.

---

## Roles & Permissions ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/roles-permissions/](https://docs.fluentcart.com/guide/settings-configuration/roles-permissions/)

# Roles & Permissions ​

The **Roles & Permissions** feature in FluentCart allows you to define and manage different user roles within your store's backend. This helps control who can access certain features and perform specific actions, ensuring security and proper task delegation among your team.

## Accessing Roles & Permissions ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings** in the left sidebar.
2. Click on the **"Roles And Permissions"** tab.

## Understanding Roles and Permissions ​

Here displays a list of users and their assigned FluentCart roles.

### 1. Roles List Table ​

The table provides an overview of existing role assignments:

- **User:** Displays the user's name and email address.
- **Role Title:** The name of the FluentCart role assigned to the user.
- **Roles:** A brief description of the permissions granted by that role.
- **Action Icons:** On the far right of each row, you'll see icons that let you quickly "edit" or "delete" roles & permission details.

![Screenshot of Roles and Permissions Tab](https://docs.fluentcart.com/images/settings-configuration/roles-permissions/roles-permissions-tab.webp)

### 2. Adding New Roles ​

You can assign existing WordPress users to predefined **FluentCart** roles directly from this display.

- To add a new role, click the **"+ Add Role"** button at the top right of the screen. This will open a modal to [add a new role](/guide/settings-configuration/roles-permissions/adding-new-roles/index).

Managing roles and permissions this way helps make sure every team member has the right access to your FluentCart store.

---

## Adding New Roles ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/roles-permissions/adding-new-roles/](https://docs.fluentcart.com/guide/settings-configuration/roles-permissions/adding-new-roles/)

# Adding New Roles ​

FluentCart's **Roles and Permissions** system allows you to assign specific access levels to different users within your WordPress site. This guide will walk you through attaching a predefined FluentCart role to an existing WordPress user.

## Steps to Add a New Role ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings > Roles And Permissions**.
2. On the **Roles And Permissions** screen, click the **"+ Add Role"** button at the top right corner.

![Screenshot of Add Role Button](https://docs.fluentcart.com/images/settings-configuration/roles-permissions/add-role-button.webp)
3. An **"Add Role"** modal window will appear.
4. **Select User:**

- Use the dropdown or search field labeled **"Select User"** to find the existing WordPress user you wish to assign a role to.
5. **Select Role:**

- After selecting a user, use the dropdown labeled **"Select Role"** to choose one of the predefined FluentCart roles. Each role comes with a brief description of its permissions: - **Super Admin:** "With All Permissions". This role has complete control over all **FluentCart** functionalities.
- **Manager:** "With All Permissions Except Sensitive Settings". This role can manage most aspects of the store but is restricted from critical configurations.
- **Worker:** "View Access for products, customers, coupons, integretions." It also has "**Manage Access** for Order Statuses". This role is suitable for staff primarily involved in fulfillment and basic order updates.
- **Accountant:** "View Access for products, customers, orders, subscriptions, licenses, coupons, reports and integrations". This role is designed for users who need to view financial and sales data without making operational changes.

![Screenshot of Add Role Modal - Select User](https://docs.fluentcart.com/images/settings-configuration/roles-permissions/add-role-select-user.webp)
6. After selecting both the user and the role, click the **"Attach Role"** button within the modal to confirm the assignment.
7. To cancel the process, click the **"Cancel"** button.

The newly assigned role will now be reflected in the Roles and Permissions list.

---

## Storage Settings ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/storage-settings](https://docs.fluentcart.com/guide/settings-configuration/storage-settings)

# Storage Settings ​

This page has moved

Storage configuration now lives under its own dedicated **Storage** menu in FluentCart, with a sub-menu for each cloud provider.

- [Storage Overview](/guide/storage/)
- [Amazon S3 setup guide](/guide/storage/s3)
- [Cloudflare R2 setup guide](/guide/storage/r2)Please head to the new pages above for the current documentation. The old location is kept here only so existing bookmarks and links keep working.

---

## Store Settings ​

**Source:** [https://docs.fluentcart.com/guide/settings-configuration/store-settings](https://docs.fluentcart.com/guide/settings-configuration/store-settings)

# Store Settings ​

The **Store Settings** screen is where you configure the fundamental information about your FluentCart store. This includes your store's name, logo, physical address, and essential currency settings, all of which are crucial for the basic operation and branding of your online business.

## Accessing General Settings ​

Go to your WordPress dashboard, then go to **FluentCart Pro** > **Settings** in the side menu, and click on the **Pages Setup** tab.

## Configuring Your Store Details ​

### 1. General Information ​

- **Store Name:** Enter the official name of your online store. This name will often appear in various parts of your store, emails, and reports.
- **Store Logo:** You can upload your brand's logo here. This logo may be used in receipts, invoices, or other areas of your store. - Click the **"Remove"** button if you wish to remove an existing logo.

### 2. Store Mode ​

Select your store's current operating mode. This is a critical setting that controls whether your store can process real payments.

- **Live:** This is the standard mode for an active store. In **Live** mode, all transactions are real, and your payment gateways will process actual payments from customers.
- **Test:** This mode is designed for development and setup purposes. When **Test** mode is active, you can place test orders using dummy payment details without any real money being charged.

INFO

This setting is directly linked to your payment gateways. When you set the store to **Live Mode**, your payment methods will also switch to their live settings. When you select **Test Mode**, your payment gateways will automatically use their test or "sandbox" credentials.
### 3. Store Address ​

Provide your physical business address details. This information can be used for PayPal, shipping calculations, tax purposes, and displayed in various store documents.

- **Country:** Select your store's country from the dropdown menu. This is used as the default country for shipping and tax calculations.
- **District:** Enter the district, state, province, or region where your business is located.
- **Street Address:** Provide the primary street name and number for your business location.
- **Apt, suite, unit:** Enter any secondary address information, such as an apartment number, suite, or unit number.
- **City/Town:** Enter the city or town where your business is located.
- **Zip Code:** Provide the postal or zip code for your business address.

![Screenshot of Store Settings - Store Setup Tab](https://docs.fluentcart.com/images/settings-configuration/store-setting/store-settings-setup.webp)

### 4. Currency ​

Configure the currency settings for your store's transactions.

- **Checkout Currency:** Select the primary currency in which your products will be priced and payments will be processed.
- **Number Format:** This setting lets you choose how numbers, especially prices, are shown in your store. It controls whether you use commas or dots to separate thousands and decimals.
- **Currency Position:** Select where the currency symbol should appear relative to the amount.

![Screenshot of Store Settings - Store Setup Tab](https://docs.fluentcart.com/images/settings-configuration/store-setting/store-currency-setup.webp)

### 5. Payment View ​

The Payment View setting allows you choose how payment methods look to your customers on the checkout page. You can pick from a dropdown options:

- **Logo:** This option displays the actual brand picture (logo) for each payment method (e.g., the PayPal logo instead of just the word "PayPal").
- **Radio** This shows payment methods as simple choices you can click, like a small circle next to their name (e.g., "PayPal" as text).

## Saving Your Settings ​

After making any changes to your General Settings, remember to click the **"Save Settings"** button at the bottom right of the screen to apply your configurations.

---

