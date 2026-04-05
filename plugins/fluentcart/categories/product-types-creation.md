# Product Types Creation

*Category from FluentCart documentation*

---

## Product Types & Creation ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/](https://docs.fluentcart.com/guide/product-types-creation/)

# Product Types & Creation ​

The **Product Types & Creation** section is the core of setting up your store in FluentCart. Here, you define and manage everything related to the products you sell, including their categories, types, pricing, inventory, and specific configurations for physical, digital, and licensed products.

FluentCart's flexibility allows you to sell a wide variety of items with tailored settings for each.

This section covers the following essential aspects:

- **Creating Physical Products:** A guide to setting up tangible goods that require shipping and inventory tracking.
- **Creating Digital Products:** Learn how to configure downloadable products, including managing their digital assets.
- **Creating Digital Products with Licenses:** Detailed instructions on setting up software or digital goods that require license keys, including activation limits and update management.
- **Managing Product Integrations (Product-Specific):** How to connect individual products with relevant third-party services or FluentCart modules.
- **Defining Upgrade Paths:** Set up seamless upgrade options for your tiered products, particularly for licensed and subscription items.
- **Product List Overview:** Understand how to view, filter, and manage your entire product catalog efficiently.
- **Inventory Management:** Understand how to track and adjust stock levels for your physical and licensed digital products.
- **Creating & Managing Product Categories:** Learn how to organize your products into logical categories for better customer navigation and store management.
- **Creating & Managing Product Brands:** Learn how to create and assign brands to your products, helping customers to shop by brand and improving your store's organization.

By mastering this section, you'll be able to effectively structure your product offerings and manage your store's inventory.

---

## Bulk Product Import ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/bulk-product-import](https://docs.fluentcart.com/guide/product-types-creation/bulk-product-import)

# Bulk Product Import ​

Imagine having to manually type out the titles, descriptions, prices, and SKUs for 500 different products. It would take days! If you are migrating your store from another platform or simply have a massive new inventory catalog to add, FluentCart's Bulk Product Insert feature is your best friend.

This tool allows you to upload hundreds or thousands of products all at once using a simple spreadsheet (CSV file).

What makes FluentCart's importer truly special is the **Staging Table**. Instead of blindly pushing your spreadsheet data live to your store and hoping for the best, FluentCart places everything into a safe, spreadsheet-like interface where you can review, edit, and tweak your data before making it visible to your customers.

Here is a comprehensive, step-by-step guide to mastering the bulk import process.

## Step 1: Access the Bulk Insert Tool ​

First, let's navigate to the right tool in your dashboard.

1. Log in to your **WordPress dashboard**.
2. In the left-hand menu, click on **FluentCart** and then select **Products**.
3. Look at the top right corner of your product list and click on the white **More actions** dropdown button.
4. Select **Bulk Product Insert** from the menu.

![Bulk Product Import](https://docs.fluentcart.com/assets/product-import-1.D1m27HmI.webp)

## Step 2: Upload Your CSV File (Your Product Spreadsheet) ​

You will now be looking at a blank Bulk Insert page. This is where you will hand your data over to FluentCart.

1. Click the **Import** button located at the top right of the screen.

![Bulk Product Import](https://docs.fluentcart.com/assets/product-import-2.B352DENt.webp)

1. A popup window will appear asking for your file.
2. Here upload your CSV file that is saved to your computer, simply drag and drop the file into the upload area, or click the **Browse/Upload Files** text to select it.

> Note: FluentCart can handle massive catalogs! The maximum file size allowed is a generous 300 MB.

> Need a template? If you are unsure how to format your spreadsheet, look at the bottom left of this popup and click Download a Sample CSV File. This gives you a perfectly formatted template you can fill out in Excel or Google Sheets!

![Bulk Product Import](https://docs.fluentcart.com/assets/product-import-3.DpMjd8-7.webp)

## Step 3: Map Your Columns (Connecting the Dots) ​

Because every spreadsheet is slightly different, FluentCart needs you to act as a translator. In this step, you are telling FluentCart which column in your spreadsheet matches which setting in your store.

Once your file uploads, the Map Columns screen will automatically appear.

- On the left side ("Products Fields"), you will see what FluentCart calls its settings (e.g., Post Title, Post Name, Post Content).
- On the right side ("CSV Headers"), you will see dropdown menus containing the column names from your uploaded spreadsheet.

Carefully match them up. For example:

- Map **Post Title** to your spreadsheet's **Name** or **Product Name** column.
- Map **Post Name** to your spreadsheet's **SKU** column.
- Map **Post Content** to your spreadsheet's **Description** column.

> Helpful Tip: FluentCart is smart! If your spreadsheet headers have common names (like "Price" or "Name"), the system will automatically try to match them for you. Just double-check its work.

When everything looks correctly matched, click the **Add Products** button at the bottom of the window.

![Bulk Product Import](https://docs.fluentcart.com/assets/product-import-4._3f411OY.webp)

## Step 4: The Staging Table (Your Safe Review Zone) ​

This is where the magic happens. Instead of making your products live immediately, FluentCart loads all your imported data into a massive, interactive table. Do not worry—at this stage, your products are not live in your store yet!

Think of this as a final rehearsal. You can use this table to quickly review and fix any data before it goes public:

- **Lightning-Fast Inline Editing:** Notice a typo in a product name? Want to round up a price? You don't need to open a new page. Just click directly into any cell (like Title, Price, or Stock) and type your correction instantly.
- **Customize Your View:** If the table feels cluttered, click the Columns icon (the small book icon at the top right of the table). A menu will drop down allowing you to check or uncheck the fields you want to see. You can hide things like Interval or Trial Days if you aren't selling subscriptions, and focus on SKU, Price, and Stock.
- **Manage Variations Easily:** If you imported products with different sizes or colors (variable products), you will see them neatly nested under the main product. Forgot a size? Just click the **+ Add Variant** text directly in the table to create a new row for it instantly.
- **Clean Up Mistakes (Row Actions):** If a product got imported by mistake, simply check the box next to its name on the far left, and click the red **Delete** button at the top. You can also use the **Duplicate** button to quickly copy a product setup.
- **Pin Actions:** If you have many columns and need to scroll horizontally, check the **Pin Actions** box at the top right. This freezes your action buttons so they are always visible, no matter how far you scroll.

![Bulk Product Import](https://docs.fluentcart.com/assets/product-import-5.DSFv7UVK.webp)

## Step 5: Save and Publish (Going Live!) ​

Take your time reviewing the staging table. Check that your prices are accurate, your SKUs are in place, and your product types (Physical vs. Digital) are correct.

Once you are 100% satisfied that your data is perfect:

1. Click the dark **Save All Products** button located at the top right of the screen.
2. A progress bar will appear as FluentCart processes the data.

Congratulations! FluentCart has now officially added all of those products and variations to your live store catalog. Your customers can now find and purchase them!

---

> Pro Tip for Future Edits: This tool isn't just for adding new products. If you ever need to make massive changes to products that are already in your store (for example, if you want to drop the price of 50 different t-shirts for a weekend sale), go back to the "More actions" menu and select Bulk Product Edit. It brings up this exact same staging table for your existing catalog, letting you make hundreds of price changes in seconds!

---

## Configuring Product Pricing & Variations ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/configuring-product-pricing](https://docs.fluentcart.com/guide/product-types-creation/configuring-product-pricing)

# Configuring Product Pricing & Variations ​

This guide provides a comprehensive walkthrough of the **Pricing** section in FluentCart. Here, you can define how your products are priced, offering everything from simple one-time payments to complex subscriptions with multiple variations.

To begin, navigate to the product you wish to configure and locate the **Pricing** section. You will need to select a pricing method from the dropdown menu at the top right: **Simple** or **Simple Variations**.

## Option 1: Simple Pricing ​

Choose this method for products that are sold as a single item without any variations like size, color, or license tier. Within Simple Pricing, you can offer two distinct payment terms.

#### A. One-Time Payment ​

Select **One Time** from the "Select Payment Term" dropdown for products that customers will purchase with a single payment.

- **Price:** The required selling price for the product.
- **Compare at price:** (Optional) A higher original price that will be displayed with a strikethrough to indicate a sale.
- **Calculate profit/cost:** (Optional) Enable this toggle to enter the **Cost per item**. FluentCart will use this to automatically calculate and display the **Profit** and **Margin**.

![Screenshot of Product Types List Page](https://docs.fluentcart.com/images/product-types-creation/product-pricing/one-time-payment.webp)

#### B. Subscription Payment ​

Select **Subscription** for products that require recurring payments.

- **Installment Price:** The amount charged for each recurring payment.
- **Compare at price:** (Optional) A higher price to show a discount on each installment.
- **Interval:** The billing frequency (e.g., Yearly, Monthly, Daily).
- **Enable installment payment:** Check this box to set a fixed number of payments.

- **Installment Count:** The total number of payments the customer will make.
- **Total Price:** This field automatically calculates the total cost.
- **Setup fee:** (Optional) Enable this to add a one-time initial fee that is charged at the beginning of the subscription.
- **Calculate profit/cost:** (Optional) Toggle this on to track the cost and profit margin for the subscription.

![Screenshot of Product Types List Page](https://docs.fluentcart.com/images/product-types-creation/product-pricing/subscription-payment.webp)

## Option 2: Simple Variations ​

Choose this method for products that come in multiple versions, such as different sizes for a t-shirt or different license tiers for software. This method allows you to create a table of variations, each with its own unique pricing.

#### Managing Variations in the Table ​

- **Add a Variation:** Click the **+ Add more** button to add a new, blank variation row.
- **Configure a Variation:** Click the **pencil icon** in the "Action" column to open a sidebar where you can configure the pricing for that specific variation.
- **More Actions:** Click the **three-dot icon** to access additional options like **Duplicate**, get a **Direct Checkout** link, **Delete** the variation, or **Skip inventory** option.

![Screenshot of Product Types pricing Page](https://docs.fluentcart.com/images/product-types-creation/product-pricing/simple-variation.webp)

#### Configuring an Individual Variation ​

After clicking the pencil icon, a sidebar appears where you can configure the pricing for that specific version. Just like with Simple Pricing, each variation can be set as either a **One-Time** or **Subscription** payment.

**A. One-Time Payment for a Variation**

- **Title & Type:** Verify the variation's **Title** and **Type**.
- **Select Payment Term:** Choose **One Time**.
- **Price:** Set the unique selling price for this specific variation.
- **Compare at price:** (Optional) Enter a sale price for this variation.
- **Calculate profit/cost:** (Optional) Track the cost and profit for this variation.
- **Image:** Upload a unique image for this variation.

**B. Subscription Payment for a Variation**

- **Title & Type:** Verify the variation's details.
- **Select Payment Term:** Choose **Subscription**.
- **Installment Price:** Set the recurring price for this subscription variation.
- **Compare at price:** (Optional) Set a sale price for the recurring payment.
- **Interval:** Select the billing frequency.
- **Enable installment payment:** (Optional) Check to set a fixed number of payments.
- **Setup fee:** (Optional) Add a one-time initial fee for this subscription variation.
- **Calculate profit/cost:** (Optional) Track the cost and profit.
- **Image:** Upload a unique image for this variation.

![Screenshot of Product Types pricing Page](https://docs.fluentcart.com/images/product-types-creation/product-pricing/configure-indivisual-payment.webp)

After configuring a variation, click the **Update Price** button to save its settings.

---

## Creating Digital Products ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/creating-digital-products](https://docs.fluentcart.com/guide/product-types-creation/creating-digital-products)

# Creating Digital Products ​

This guide provides step-by-step instructions for adding a digital product to your FluentCart store.

A digital product is any file that customers can download after purchase, such as an e-book, software, music, or design template. FluentCart gives you all the tools to set up these items correctly.

In this guide, you will learn how to:

- Add product details and set a price.
- Upload the downloadable file for your customers.
- Manage different product variations if needed.

By the end, you will be able to confidently sell and manage any downloadable item.

## Steps to Create a New Digital Product ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left WordPress sidebar.
2. On the **Products** screen, click the **"Add Product"** button at the top right.

![Screenshot of Add Product Button](https://docs.fluentcart.com/images/product-types-creation/creating-digital-product/Digital-product-1.webp)
3. This will open the **Add New Product** popup from where you have to give the product name and select the product type **Digital Product** then the **Edit Product** page will come.

![Screenshot of Product Edit Screen (Digital Product Example)](https://docs.fluentcart.com/images/product-types-creation/creating-digital-product/Digital-product-3.webp)

### 1. Basic Product Information ​

- **Title:** Enter the main name of your digital product (e.g., "E-Book: Mastering FluentCart").
- **Short description:** Provide a brief, concise summary of the digital product.
- **Long Description:** Use the rich text editor to write a detailed description of your product, including its benefits and content.

### 2. Media ​

This section allows you to manage the visual presentation of your product, ensuring customers get a clear view of what they are buying. You can set a primary image and build a gallery to showcase different angles or use cases.

**Featured Image:** Set a prominent, high-quality image that acts as the primary visual for your digital product, such as a professional book cover or a clean app icon.

**Product Gallery:** By clicking the **Add Media** button, you can build a gallery that gives shoppers a better look at what's inside. You will find two distinct ways to add your visuals:

- **Gallery:** This is your standard option for picking images or videos that are already saved in your WordPress library, or for uploading fresh screenshots directly from your device.
- **Add by URL Tab:** If you have high-quality images hosted on a separate server or a dedicated media site, you can simply paste the direct web address here and click Add to bring them into your gallery without taking up space on your own site.

Once you've picked your files or linked your URLs, just click the **Save** button at the bottom of the modal to update your product's look.

![Screenshot of Add Media](https://docs.fluentcart.com/images/product-types-creation/creating-digital-product/product-image-add-with-url.webp)

### 3. Product Taxonomies ​

Categorize and type your digital product for better structured organization.

- **Product Categories:** Assign the product to relevant categories (e.g., "E-Books", "Software"). Click **"+ Add More Category"** to assign additional categories.
- **Product Brand:** Assign the product to relevant brands. Click to **"+Add Brand”** to assign additional brands.

### 4. Pricing & Variations ​

This section is where you will set the price for your digital product. FluentCart provides two main methods: **Simple** (for products with no variations) and **Simple Variations** (for products with different versions).

First, use the dropdown menu at the top right of the pricing section to select the pricing method that fits your product.

#### Option A: Simple Pricing ​

Choose this option when your product is a single item that does not have different versions. Within Simple Pricing, you can choose between two payment terms.

**1. One-Time Payment**

Select **One Time** from the "Select Payment Term" dropdown for products that customers purchase with a single payment.

- **Price:** Set the required selling price for the product.
- **Compare at price:** (Optional) Enter a higher original price to show a discount.
- **Calculate profit/cost:** (Optional) Toggle this on to enter the item's cost for internal profit tracking.

**2. Subscription Payment**

Select **Subscription** for products that require recurring payments.

- **Installment Price:** The amount for each recurring payment.
- **Compare at price:** (Optional) A higher price to show a discount on each installment.
- **Interval:** The billing frequency, such as monthly or yearly.
- **Enable installment payment:** Check this box to set a fixed number of payments.
- **Installment Count:** The total number of payments the customer will make.
- **Total Price:** This automatically calculates the total cost based on the installment price and count.
- **Setup fee:** (Optional) Toggle this on to add a one-time initial fee.
- **Calculate profit/cost:** (Optional) Toggle this to track your cost and profit margin on the subscription.

## ​

#### Option B: Simple Variations ​

Choose this option when your product has multiple versions, like "Standard" and "Pro". This allows you to create a table of variations, each with its own pricing structure.

**Managing the Variations Table**

- **To Add a New Variation:** Click the 
```
+ Add more
```

 button at the bottom to add a new row to the table.
- **To Change Order:** Use the **six-dot icon** on the left to drag and reorder rows.
- **Quick Edits:** You can edit the **Title**, **Price**, and **Compare** at price directly inside the table rows.
- **To Configure a Variation:** To set the price and other details for a specific variation, click the pencil icon in the "Action" column. This will open a detailed configuration sidebar.

**The Advanced Action Menu (Three-Dot Icon):** Click the **three-dot** icon to access these new time-saving tools:

- **Duplicate:** Quickly copy an existing variation to make a new one.
- **Copy Variation ID:** Get the unique **ID** for developers or shortcodes.
- **Direct Checkout:** Create a link that sends customers straight to the payment page for this version.

**Configuring a Single Variation (Pencil Icon)**

After clicking the pencil icon, a sidebar appears where you can set up the pricing for that specific version. You must choose a payment term: **One Time** or **Subscription**.

**A. One-Time Payment for a Variation**

This option is for a variation that is sold for a single payment.

- **Title:** The name of the specific variation (e.g., "File Manager Pro").
- **Select Payment Term:** Choose **One Time** from the dropdown menu.
- **Price:** Set the selling price for this variation.
- **Compare at price:** An optional higher price to show a discount.
- **Calculate profit/cost:** Toggle this on to enter the **Cost per item** and track the **Profit** and **Margin**.
- **Image:** Upload a specific image for this variation.

**B. Subscription Payment for a Variation**

This option is for a variation that is sold on a recurring payment basis.

- **Select Payment Term:** Choose **Subscription** from the dropdown menu.
- **Price:** The price for each recurring payment.
- **Compare at price:** An optional higher price to show a discount on the recurring payment.
- **Interval:** The billing frequency (e.g., Yearly).
- **Enable installment payment:** Check this to set a fixed number of payments.
- **Setup fee:** Toggle this on to add a one-time initial fee for the subscription.
- **Calculate profit/cost:** Toggle this to track profit and margin.
- **Image:** Upload a unique image for this subscription variation.

![Gif of Digital Product Edit Screen (Simple VAriation)](https://docs.fluentcart.com/images/product-types-creation/creating-digital-product/simple-variation2.gif)

INFO

To learn more about variation pricing setups, see the [Configure Product Pricing](/guide/product-types-creation/configuring-product-pricing) guide.
### 5. Downloadable Asset(s) ​

This crucial section is where you manage the actual digital files customers will receive.

- Initially, you'll see a list of any previously added assets.
- Click **"+ Add Asset"** to upload or link a new downloadable file. ![Screenshot of Add Downloadable Asset(s) Button](https://docs.fluentcart.com/images/product-types-creation/creating-digital-product/Digital-product-5.webp)
- An **"Add Downloadable Asset(s)"** modal will appear.

- **Choose variant:** (Optional) If your digital product has multiple variations, you can select which specific variant(s) this asset applies to. Leave empty for all variants.
- **Choose File:** Click this button to upload a file from your local computer or select from existing files in your FluentCart storage. - This will open a **"Storage Drivers"** modal, showing options like **Local** storage (drag & drop or browse) or **S3** (if configured). ![Screenshot of Choose File Modal (Storage Drivers)](https://docs.fluentcart.com/images/product-types-creation/creating-digital-product/Digital-product-6.webp)
- **File URL:** (Alternative) Provide a URL if your digital asset is hosted externally.
- **File Name:** Enter a display name for the downloaded file. You can [edit this file name](/guide/product-types-creation/creating-digital-products#editing-uploaded-file-names) after upload if needed.
- Click **"Save Asset"** to add the file to your product.

### 6. Digital Product Licensed ​

This is one of the most important features for your store if you sell products like software, plugins, or themes that need a license key for activation. By adding a digital license, you can control how your product is used, how many times it can be activated, and for how long it remains valid. This helps protect your hard work and manage customer access properly.

To learn more, read this documentation of the [Digital Product License](/guide/product-types-creation/creating-digital-products-with-licenses)

### Shipping Class ​

You can assign a **Shipping Class** to any product to apply location-based shipping costs.

To add a shipping class:

1. Scroll to the **Shipping Class** section (right side of the product edit screen).
2. Select or create a shipping class (e.g., *NYC Zone*).
3. The defined shipping cost will automatically apply at checkout for that region.

Shipping classes work with **Shipping Zones** and **Shipping Methods** to control how and where you deliver products.

> Note: Digital products typically don’t require shipping, but you can still assign a class if needed for special handling or hybrid products.

INFO

To learn more about how shipping classes work, see the [Understanding Shipping Classes](/guide/shipping/understanding-shipping-classes) guide.
## Publishing Your Digital Product ​

Once you have configured all the necessary details:

1. Set the **Status** to **"Published"** in the "Publishing" section.
2. Click the **"Update"** (or "Save") button on the top right to make your digital product live in your store.

---

## Creating Digital Products with Licenses ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/creating-digital-products-with-licenses](https://docs.fluentcart.com/guide/product-types-creation/creating-digital-products-with-licenses)

# Creating Digital Products with Licenses ​

This guide provides a complete walkthrough for selling digital products that require a license key, such as software, plugins, or premium content.

Licensing helps you protect your digital items by controlling how they are used. By issuing a unique key to each customer, you can manage how many times your product can be activated and for how long the license is valid.

In this guide, you will learn how to:

- Create different license tiers with unique pricing (e.g., "Single Site License" or "50 Sites Lifetime").
- Attach the main downloadable file that your customers will receive.
- Set specific activation limits and license durations (like yearly or lifetime) for each tier.
- Create customer-friendly upgrade paths to allow moving between different license tiers.

Follow these steps to confidently configure all the necessary settings for your licensed digital products.

## Steps to Create a New Licensed Digital Product ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left WordPress sidebar.
2. On the **Products** screen, click the **"Add Product"** button at the top right.

### 1. Create a Digital Product ​

To create a product with a digital license in FluentCart, you must first create a digital product, then attach the downloadable asset to the product, and Finally, generate a license for it.

NOTE

You can learn more about creating a digital product by following the [Creating Digital Product](/guide/product-types-creation/creating-digital-products) guide. The following sections also cover the basic steps.
### 2. Basic Product Information ​

- **Title:** Enter the main name of your licensed digital product (e.g., "Fluent Forms - 50 Sites Yearly License").
- **Short description:** Provide a brief, concise summary of the product.
- **Long Description:** Use the rich text editor to write a detailed description of your product, including its features and benefits.

### 3. Media ​

This section allows you to manage the visual presentation of your product, ensuring customers get a clear view of what they are buying. You can set a primary image and build a gallery to showcase different angles or use cases.

**Featured Image:** Set a prominent, high-quality image that acts as the primary visual for your digital product, such as a professional book cover or a clean app icon.

**Product Gallery:** By clicking the **Add Media** button, you can build a gallery that gives shoppers a better look at what's inside. You will find two distinct ways to add your visuals:

- **Gallery:** This is your standard option for picking images or videos that are already saved in your WordPress library, or for uploading fresh screenshots directly from your device.
- **Add by URL Tab:** If you have high-quality images hosted on a separate server or a dedicated media site, you can simply paste the direct web address here and click Add to bring them into your gallery without taking up space on your own site.

Once you've picked your files or linked your URLs, just click the **Save** button at the bottom of the modal to update your product's look.

![Screenshot of Add Media](https://docs.fluentcart.com/images/product-types-creation/creating-digital-product-license/product-image-add-with-url.webp)

### 4. Product Taxonomies ​

Categorize and type your product for better organization.

- **Product Categories:** Assign the product to relevant categories (e.g., "Software"). Click **"+ Add More Category"** to assign additional categories.
- **Product Brand:** Assign the product to relevant brands. Click to **"+Add Brand”** to assign additional brands.

### 5. Pricing & Variations ​

This section is crucial for defining the different license tiers and their pricing.

- **Type Selection:** When [configuring product variations](/guide/product-types-creation/creating-digital-products.html#4-pricing-variatio), ensure **"Digital"** and/or **"Subscription"** (if it's a recurring license) is selected as the product type within the pricing modal for your variants.
- **Pricing Table:** You'll define each license tier as a variation (e.g., "Single Site Yearly License", "50 Sites Lifetime License"). - **Image:** You can upload a specific image for each license variant.
- **Title:** The name of the license tier.
- **Price:** The selling price for this specific license variant.
- **Compare at price:** (Optional) A higher, struck-through price.
- **Payment Term:**- **"One Time"** for lifetime licenses.
- **"Yearly"**, **"Monthly"**, **"Weekly"**, or **"Daily"** for subscription-based licenses.
- **Setup Fee:** (Optional) An initial fee for subscriptions.
- **Calculate Profit/Cost:** Enter the **"Cost per item"** for each license variant to track profitability.

### 6. Downloadable Asset(s) ​

This section is where you manage the digital files associated with your licensed product.

- Click **"+ Add Asset"** to upload or link your software package, documentation, or other digital content.
- You can choose to link assets to **specific variants** (e.g., a "pro" version download for a higher-tier license) or leave it empty for all variants.
- See [Adding & Managing Downloadable Assets](/guide/product-types-creation/creating-digital-products#5-downloadable-assets) for detailed steps.

### 7. Product-Specific License Settings ​

This is the most important section for licensed digital products, offering granular control over each license's behavior.

#### Enable License Add-on ​

Before you can set up licenses for a specific product, you need to make sure the main licensing feature is turned on for your entire store. This is a quick, one-time step.

1. Navigate to **FluentCart Pro** > **Settings** from the left WordPress sidebar.
2. Click on the **Features & Add-ons** tab.
3. Locate the **Product Licensing** option and click the **toggle** button to enable it.
4. Click the **Save Settings** button to apply the change.

![Screenshot of Enable License Add-on](https://docs.fluentcart.com/images/product-types-creation/creating-digital-product-license/license-add-on.webp)

#### Configure Product License Settings ​

Once the add-on is enabled, you can configure the license settings for each product. On the Product Edit screen, click the **License Settings** tab.

1. On the Product Edit screen, click the **"License Settings"** tab.

![Screenshot of Product License Settings Tab](https://docs.fluentcart.com/images/product-types-creation/creating-digital-product-license/License-Settings-1.webp)
2. **Enable Licensing for this product:** Ensure this checkbox is enabled to activate licensing for this product.
3. **License Configuration Table (Per Variant):**

- **Activation Limit:** For each license variant (e.g., "Single Site Annual License"), set the number of times the license key can be activated (e.g., 50, 100).
4. **Software/Plugin Specific Information:**

- **Version Number:** Enter the current version of your digital product (e.g., "1.0.1").
- **License Key Prefix:** This adds a short prefix to every license key generated for this product. It's a great way to quickly identify keys from different products. For example, you could use ff- for Fluent Forms.
- **Update File:** This field shows the main downloadable file that will be used for software updates.
- **Changelog Description:** Here, you can write down what's new or what has changed in the latest version of your product. This information will be visible to your users.
5. **Is WP Plugin?:** If the digital product you're selling is a WordPress plugin, check this box. This will reveal a few more fields specific to WordPress plugins.

- **Changelog Page URL:** Enter the web address for your plugin's changelog.
- **Banner URL:** Provide a link to a banner image for your plugin.
- **Icon URL:** Provide a link to an icon image for your plugin.
- **Required PHP Version (optional):** If your plugin needs a minimum version of PHP to work, you can specify it here.
- **Required WP Version (optional):** Similarly, if your plugin requires a minimum WordPress version, enter it here.

After you've configured these settings, just click the **Update Settings** button to save your changes.

### 8. Managing Product Integrations (Product-Specific) ​

On the Product Edit screen, click the **"Integrations"** tab.

- Here you can connect this specific product to other FluentCart modules or third-party services that have a direct impact on its functionality, sales, or fulfillment.
- For example, you might integrate a specific product with **FluentCRM** to add customers who purchase this product to a particular list, or with **FluentForms** if product purchase triggers a form submission.

> To learn more about managing product integrations, see the Managing Product Integrations guide.

### 9. Defining Upgrade Paths ​

On the Product Edit screen, click the **"Upgrade Paths"** tab.

- This powerful feature allows you to create seamless upgrade options for customers holding a license for this product.
- You can define paths from a **"From Plan"** (e.g., "Single Site Yearly License") to a **"To Plan"** (e.g., "5 Sites Yearly License" or "Single Site Lifetime License").
- Specify a **"Discount Amount"** and whether the upgrade is **"Prorated"** (meaning the customer gets credit for unused time on their old plan).

> To learn more about upgrade paths, see the Defining Upgrade Paths guide.

## Publishing Your Licensed Digital Product ​

Once you have configured all the necessary details:

1. Set the **Status** to **"Published"** in the "Publishing" section.
2. Click the **"Update"** (or "Save") button on the top right to make your product live in your store.

---

## Creating & Managing Product Brands ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/creating-managing-product-brand](https://docs.fluentcart.com/guide/product-types-creation/creating-managing-product-brand)

# Creating & Managing Product Brands ​

Product Brands in FluentCart are a great way to group products from the same manufacturer or brand together. This helps with store organization and allows customers to easily find and shop for all products from a brand they like.

Properly assigning brands can significantly improve your store's navigation, enhance the customer's shopping experience, and even provide SEO benefits by creating brand-specific archive pages.

This guide will show you how to create, manage, and assign brands to your products.

## Creating a New Brand ​

To get started, you first need to create your brands. This process is straightforward and allows you to build out your brand library before assigning it to products.

1. From your WordPress dashboard, go to **FluentCart Pro → Brands**.
2. This will take you to the main **Brands** screen. On the left side, you will see the "**Add New Brand**" form.

![Product Brand](https://docs.fluentcart.com/images/product-types-creation/creating-managing-brand/product-brand-1.webp)

Fill in the details for your brand:

- **Name:** Enter the brand's name exactly as you want it to appear to your customers. This is the primary identifier for the brand.
- **Slug:** This is the URL-friendly version of the name, used in the web address for the brand's archive page. It should be all lowercase and contain only letters, numbers, and hyphens. FluentCart will automatically generate this from the name if you leave it blank.
- **Parent Brand:** This feature lets you create and organize brand levels. For example, if you sell a specific product line from a larger company, you could make "Air Jordan" a child of the "Nike" parent brand. For a top-level brand, simply leave this as "None."
- **Description:** Add a short description for the brand. Depending on your website's theme, this description may be displayed on the brand's archive page, providing customers with more context.

Click the **Add New Brand** button to save the brand. It will now appear in the list on the right.

### Managing Existing Brands ​

The table on the right side of the **Brands** screen is your command center for managing all the brands you've created.

This list gives you a quick overview of each brand, showing its **Name**, **Description**, **Slug**, and the **Count** of products assigned to it. The "Count" is a handy way to see which brands are most popular in your store.

To manage your brands:

**Sort the List:** You can organize the list by clicking the small arrows next to a column title, such as "Name" or "Count." This makes it easy to find brands alphabetically or see which ones have the most products. **Edit, Delete, and More:** When you move your mouse over a brand in the list, a set of options will appear right below its name:

- **Edit:** This takes you to a separate screen to change all the brand's details.
- **Quick Edit:** Allows you to make fast changes to the name and slug without leaving the page.
- **Delete:** Permanently removes the brand.
- **View:** Lets you see how the brand's page looks on your live website.

#### Assigning Brands to a Product ​

Once your brands are created, you can assign them to your products.

1. Navigate to the product you want to assign a brand to by going to **FluentCart Pro → Products** and clicking on a product to open its editor.
2. On the product edit page, look for the Brands section on the right-hand side of the screen.
3. In the **Brands** box, you can assign one or more brands to the product by checking the box next to any existing brand in the list.
4. After assigning the brand(s), click the **Update** or **Publish** button at the top right of the page to save your changes. The brand will now be associated with that product.

---

## Creating & Managing Product Categories ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/creating-managing-product-categories/](https://docs.fluentcart.com/guide/product-types-creation/creating-managing-product-categories/)

# Creating & Managing Product Categories ​

Product categories are the primary way to group and organize the products in your store. A well-structured set of categories makes it easy for customers to browse your offerings, find what they're looking for, and discover new items.

### Accessing Product Categories ​

1. From your WordPress dashboard, navigate to **FluentCart**.
2. In the left-hand menu, click on **Categories**.

This will take you to the main Categories screen, where you can add new categories and manage your existing ones.

### How to Add a New Product Category ​

On the left side of the Categories screen, you will find the form for adding a new category.

Here’s a breakdown of the fields:

- **Name:** Enter the name of your category as you want it to appear to customers on your storefront (e.g., "Digital Planners").
- **Slug:** This is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens. FluentCart will automatically create a slug from the name, but you can edit it if needed.
- **Parent Category:** This allows you to create a hierarchy of categories. For example, you could create a "Clothing" category and then create "T-Shirts" and "Hoodies" as child categories underneath it. To create a top-level category, leave this set to "None."
- **Description:** (Optional) You can add a short description for the category. Depending on your theme, this might be displayed at the top of the category page on your storefront.

After filling in the details, click the **Add New Category** button. Your new category will now appear in the list on the right.

![Add New Categories](https://docs.fluentcart.com/assets/Product-Category-1.CaHNodcJ.webp)

### Managing Existing Categories ​

The table on the right side of the screen lists all your existing product categories. From here, you can quickly see the category's **Name, Description, Slug,** and a **Count** of how many products are in it.

To manage a category, hover your mouse over its name, and a set of action links will appear:

- **Edit:** Click this to open a dedicated editor for that category, where you can change its name, slug, parent, or description.
- **Quick Edit:** This allows you to make quick changes to the name and slug without leaving the main screen.
- **Delete:** This will permanently remove the category.
- **View:** This will take you to the public-facing category page on your storefront, showing all the products that belong to it.

You can also use the **Bulk Actions** dropdown menu at the top of the list to delete multiple categories at once.

---

## Creating Physical Products ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/creating-physical-products](https://docs.fluentcart.com/guide/product-types-creation/creating-physical-products)

# Creating Physical Products ​

This guide will walk you through the process of adding a new physical product to your FluentCart store. A physical product is any tangible item that you sell and ship to your customers.

We will cover every essential step to get your product ready for sale. You will learn how to configure all the necessary details, including:

- Product name, description, and images
- Pricing and sales information
- Inventory and stock levels
- Variations such as size or color

By the end of this guide, you will be able to confidently list and manage any physical product in your inventory.

## Steps to Create a New Physical Product ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left sidebar.
2. On the **Products** screen, click the **"Add Product"** button at the top right.

![Screenshot of Add Product Button](https://docs.fluentcart.com/images/product-types-creation/Creating-Physical-Products/physical-product-1.webp)
3. This action will open a new **Add New Product** modal, where you’ll enter the product name and select the product type, either **Physical Product** or **Digital Product**. After making your selection, click on the **Add Product** button and you’ll be redirected to the **Edit Product** page to configure all product details.

![Screenshot of Add New Product Modal)](https://docs.fluentcart.com/images/product-types-creation/Creating-Physical-Products/add-new-product.webp)

### 1. Basic Product Information ​

- **Title:** Enter the main name of your product (e.g., "Purple Air Max Trainers"). This name shows up everywhere: on your shop page, in the cart, and at checkout.
- **Short description:** Write a brief, simple summary of what the product is. This usually shows up quickly near the product picture or price, giving customers a quick, important overview.
- **Long Description:** This is the large area for all the detailed information, like features, materials, and how to use the product. FluentCart offers two great ways to build this content:

**Using the Visual Builder (Recommended for Dynamic Content)** [​](#using-the-visual-builder-recommended-for-dynamic-content)The **Builder** option uses the powerful block editor built into WordPress (Gutenberg). This lets you design rich, visual, and highly effective product pages.

1. Click the **Builder** button, located next to the **Classic Editor** option.
2. Click **Show Content Editor** to open the design screen.
3. This screen gives you the opportunity to create dynamic descriptions by adding any available WordPress content blocks. For example, you can add: - **Images & Videos:** Show extra product media right within the description.
- **Layouts:** Use columns to put text and pictures side-by-side for a clean look.
- **Lists & Tables:** Clearly list specifications or sizes.

By using the **Visual Builder**, you get the power to create beautiful product descriptions that help sell your products better and give customers a great shopping experience.

**Using the Classic Editor** [​](#using-the-classic-editor)The **Classic Editor** gives you a standard, quick writing space. Within this editor, you have two modes:

- **Visual Mode:** This is the standard view where you type your description directly. You'll have formatting options above (like bold, italics, lists) and options to easily add media with your text.
- **Code Mode (HTML):** This view is for advanced users who want to write the long description using raw **HTML codes**.

![Screenshot of Product Edit Screen (Physical Product Example)](https://docs.fluentcart.com/images/product-types-creation/Creating-Physical-Products/eidt-product-1.webp)

### 2. Media ​

This section allows you to manage the visual presentation of your product, ensuring customers get a clear view of what they are buying. You can set a primary image and build a gallery to showcase different angles or use cases.

**Featured Image:**

Set a prominent, high-quality image that will act as the main face of your product on the shop page and in the cart.

**Product Gallery:**

By clicking the **Add Media** button, you open the **Product Gallery** modal, which offers two distinct ways to add visual content to your item:

- **Gallery:** This is the standard method for selecting images or videos already saved in your WordPress media library or uploading new files directly from your computer.
- **Add by URL:** This convenient option allows you to link to an image hosted elsewhere on the web. Simply paste the direct web address of the image into the input field and click the **Add** button to include it in your gallery.

Once you have selected or linked your media, click the **Save** button at the bottom of the modal to update your product's gallery.

![Add Media](https://docs.fluentcart.com/images/product-types-creation/Creating-Physical-Products/product-image-add-with-url.webp)

### 3. Product Taxonomies ​

This section helps you organize and tag your product using WordPress taxonomies for better filtering and presentation on your storefront.

- **Categories:** Assign the product to one or more relevant **Categories** (e.g., "Men's Shoes"). You can select existing categories from the dropdown menu or click **+ Add Category** to create a new one instantly.
- **Brands:** Use this field to associate the product with a specific **Brand**. Select the brand name from the dropdown menu or click **+ Add Brand** if the brand doesn't exist yet in your FluentCart settings.

By using these taxonomies, you ensure customers can easily find and filter your products on your shop pages.

### 4. Pricing & Variations ​

This section is where you will set the price for your product. FluentCart offers two methods, depending on whether the product has different versions (like size or color) or is a single item.

First, use the dropdown menu at the top right of the pricing section to select either **Simple** or **Simple Variations**.

#### Simple (For Products with No Variations) ​

Choose this option when your product is a single item with only one price and configuration. For example, a book or a standard coffee mug.

You will see the following fields:

- **Select Payment Term:** Choose how the customer will be charged. For standard, single purchases, select One Time.
- **Price:** (Required) The main selling price for the product.
- **Compare at price:** (Optional) An original or higher price that will be shown with a strikethrough on your storefront to indicate a sale or discount.
- **Calculate profit/cost:** Toggle this on to enter the base cost of the item. FluentCart will use this to automatically calculate your profit and margin for internal reporting.
- **SKU:** Enter a Stock Keeping Unit. This is a unique internal code used to identify and track this specific item in your inventory. You can also click the "Generate SKU" link to automatically create a unique identifier.
- **Fulfillment Type:** (Required) Select how this product is delivered to the customer. For physical items that require shipping, choose Physical.

![Screenshot of Simple Price](https://docs.fluentcart.com/images/product-types-creation/Creating-Physical-Products/simple-pricing-1.webp)

INFO

To learn more about variation pricing setups, see the [Configure Product Pricing](/guide/product-types-creation/configuring-product-pricing) guide.
#### Simple Variations (For Products with Different Versions) ​

Choose this option when your product comes in different versions, such as t-shirts in various sizes and colors. This allows you to set a different price, image, SKU, and fulfillment type for each specific variation.

This will display a table where each row represents a single variation. You can click **+ Add more** to create a new variation. The main table columns give you a quick overview of the Image, Title, Price, and Compare at price.

#### Managing a Variation (Edit Panel) ​

Clicking the **Edit Icon (Pencil)** in the Action column opens a detailed settings sidebar panel for that specific variation. Here you will configure:

- **Title:** (Required) Name the variation clearly (e.g., "Zipper Hoodie - Red").
- **SKU:** A unique Stock Keeping Unit identifier to track this specific variation in your inventory. You can also click the "Generate SKU" link to automatically create a unique identifier.
- **Fulfillment Type:** (Required) Select how this specific variation is delivered to the customer (e.g., Physical).
- **Select Payment Term:** Choose the billing cycle for this variation (e.g., One Time).
- **Price:** (Required) Set the specific selling price for this individual variation.
- **Compare at price:** (Optional) Set an original or higher price to indicate a sale for this specific variation.
- **Calculate profit/cost:** Toggle this on to enter the base cost of this item to track your profit margins.
- **Image:** Upload a specific image for this variation so customers can see exactly what they are selecting.

![Screenshot of Simple Variation](https://docs.fluentcart.com/images/product-types-creation/Creating-Physical-Products/variation-pricing-2.webp)

To add another version of your product, click the **+ Add more** button to create a new row in the table.

### 5. Inventory Management ​

To track the stock for your product, first, make sure the [Stock Management](/guide/product-types-creation/inventory-management) feature is enabled from the settings section.

An inventory table will then be displayed, with a separate row for each product variation. This table helps you monitor your stock levels at a glance.

#### Understanding the Inventory Table ​

- **Title:** The name of the product or variation.
- **Total Stock:** The total number of units you have for this item, including those available, on hold, or delivered.
- **Available:** The number of units currently available for customers to purchase.
- **On hold:** Units that are part of a pending order but have not yet been shipped.
- **Delivered:** The total number of units that have been successfully sold and fulfilled.

### Downloadable Asset(s) ​

FluentCart allows you to attach digital files to your physical products, which is perfect for selling hybrid items (like a textbook that comes with a PDF guide, or a piece of hardware with its software drivers).

At the very bottom of the product editing page, you will see a checkbox for Downloadable Asset(s).

Check this box to enable the feature. Once enabled, a new section will appear where you can upload and manage the files that customers will be able to download after purchasing the product.

#### How to Adjust Stock Levels ​

To manually update your stock count for any variation:

1. Click the **adjustment icon** located inside the **Total Stock** field.
2. A small window will pop up. - **Adjust by:** Enter a number to change the current stock. Use a positive number (like 
```
50
```

) to add inventory or a negative number (like 
```
-10
```

) to remove it.
- **New Stock:** This field automatically previews the final stock total after your adjustment.
3. Click the **Apply** button to save the new stock level.

### Shipping Class ​

You can assign a **Shipping Class** to any product to apply location-based shipping costs.

To add a shipping class:

1. Scroll to the **Shipping Class** section (right side of the product edit screen).
2. Select or create a shipping class (e.g., *NYC Zone*).
3. The defined shipping cost will automatically apply at checkout for that region.

Shipping classes work with **Shipping Zones** and **Shipping Methods** to control how and where you deliver products.

INFO

To learn more about how shipping classes work, see the [Understanding Shipping Classes](/guide/shipping/understanding-shipping-classes) guide.
### Tax Class ​

The **Tax Class** allows you to apply specific tax rules to your product.

To assign a tax class:

1. Locate the **Tax Class** section on the right side of the screen.
2. Select a pre-configured tax class from the dropdown menu, or click **+ Add** to create a new one. The corresponding tax rate will then be automatically applied to this product during checkout. To learn more about Tax, read this [Documentation](/guide/tax-&-duties/configuration-and-classes/).

## Publishing Settings ​

This section on the right side of the product edit page controls your product's visibility and key purchasing rules.

- **Status:** This sets whether your product is live on your store (Publish) or saved as a hidden Draft.
- **URL Slug:** This is the unique, URL-friendly part of the web address for this product. FluentCart automatically creates one from the title, but you can click it to make edits.
- **Default Variant:** If your product has options (like different sizes or subscription plans), this setting pre-selects one for the customer when they visit the page.
- **Group By:** This organizes how your product variations are displayed. For example, you can group subscription plans by their billing interval (e.g., "Monthly" and "Yearly") to make them easier for customers to compare.
- **Limit purchases to 1 item per order:** Check this box to prevent customers from buying more than one of this specific item in a single transaction. This is useful for things like event tickets or exclusive items.

Once you have configured all the necessary details, click the **"Update"** (or "Save") button on the top right to make your product live in your store. You can also click **"Preview"** to see how the product page will look before publishing.

---

## Creating Product Bundles ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/creating-product-bundles](https://docs.fluentcart.com/guide/product-types-creation/creating-product-bundles)

# Creating Product Bundles ​

The **Bundles** feature in **FluentCart** allows you to group multiple products into a single bundle and sell them together as one offer. You can create bundles using digital products or physical products, making it easy to build starter packs, special deals, or upgrade offers.

Each product in a bundle still works independently, licenses, and fulfillment rules. This means you get the benefits of bundling without losing control over individual products.

In this guide, you’ll learn how to create, configure, and manage bundle products in FluentCart step by step.

## Steps to Create a New Product Bundle ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left sidebar.
2. On the Products screen, click the **"Add Product"** button at the top right.

![Screenshot of Add Product Button](https://docs.fluentcart.com/assets/add-product-1.Fx_878zI.webp)
3. This action will open a new **Add New Product** modal.

- Enter the **Bundle Title**.
- Select the product type, either **Physical Product** or **Digital Product**.
- Check the box labeled **Add as a Bundle** to combine multiple items into one package.
4. Click the **"Add Product"** button, and you will be redirected to the **"Edit Product"** page to configure all details.

![Screenshot of Add as a bundle](https://docs.fluentcart.com/assets/add-as-a-bundle-2.ZkXXfvo-.webp)

### 1. Basic Product Information ​

- **Title:** Enter the main name of your bundle. This name appears on your shop page, in the cart, and at checkout.
- **Short description:** Write a brief summary of what the bundle includes. This provides customers with a quick overview near the product image or price.
- **Long Description:** This is the area for detailed information about the bundle's contents. FluentCart offers two ways to build this content: - **Using the Visual Builder (Recommended):** The Builder option uses the WordPress block editor (Gutenberg) to design rich product pages. Click **Show Content Editor** to add dynamic blocks such as images, videos, columns, and tables.
- **Using the Classic Editor:** Provides a standard writing space with **Visual Mode** for standard typing and **Code Mode (HTML)** for advanced users.

### 2. Map Bundle Items ​

This section is unique to bundles and allows you to link the individual products that make up the package.

1. Scroll down to the **Map bundle items** section.
2. Under **Bundle Items**, use the dropdown to select the existing products you wish to include in this bundle.

NOTE

Each bundled product retains its own identity under the hood, ensuring that reporting, downloads, and licenses continue to work correctly for each item in the bundle.
### 3. Media ​

- **Featured Image:** Set a prominent image that showcases all items included in the bundle.
- **Add Media:** Upload additional images or videos that show the bundled products from different angles or in use.

### 4. Product Taxonomies ​

This section helps you organize and tag your bundle for better storefront filtering.

- **Product Categories:** Assign the bundle to relevant categories (e.g., "Gift Sets"). You can select existing categories or click **+ Add Category** to create one instantly.
- **Product Brand::** Associate the bundle with a specific brand using the dropdown or the **+ Add Brand** button.

![Screenshot of Product Edit Screen (Physical Product Example)](https://docs.fluentcart.com/assets/map-bundle-items-3.CaxILLee.webp)

### 5. Pricing & Variations ​

Set the price for your bundle using one of two methods:

### Simple (No Variations) ​

Choose this if the bundle is a single package with one price. You can set the **Price**, an optional **Compare at price** to show savings, and toggle **Manage profit/cost** for internal tracking.

INFO

To learn more about variation pricing setups, see the [Configure Product Pricing](/guide/product-types-creation/configuring-product-pricing) guide.![Screenshot of Simple Price](https://docs.fluentcart.com/assets/simple-price.DliAvTLH.gif)

#### Simple Variations (For Products with Different Versions) ​

Choose this option when your product comes in different versions, such as t-shirts in various sizes and colors. This will allow you to set a different price, image, and stock level for each variation.

This will display a table where each row is a single variation.

- **Image:** Upload a specific image for each variation (e.g., a photo of the red shirt).
- **Title:** Name the variation clearly.
- **Price:** Set the specific price for this individual variation.
- **Compare at price:** (Optional) Set a sale price for this specific variation.
- **Action:** This column contains icons to manage each variation row. - **Edit Icon (Pencil):** Click this to edit the pricing variation's details.
- **More Options (Three Dots):** Click this to open a menu with more options: - **Skip inventory:** Check this box if you do not want to track stock for this specific variation.
- **Duplicate:** Click this to create an exact copy of this variation row.
- **Direct Checkout:** Get a direct link to purchase this specific variation, bypassing the main product page.

![Screenshot of Simple Variation](https://docs.fluentcart.com/assets/simple-variation.BvWpgyew.gif)

To add another version of your product, click the **+ Add more** button to create a new row in the table.

### 6. Inventory Management ​

To track stock, ensure **Stock Management** is enabled in your settings.

- **Inventory Table:** Displays **Total Stock**, **Available** units, and units **On hold** or **Delivered**.
- **Adjusting Stock:** Click the adjustment icon in the **Total Stock** field to add or remove inventory.

### 7. Shipping and Tax Classes ​

- **Shipping Class:** Assign a class to apply location-based shipping costs at checkout. This works with your defined Shipping Zones and Methods.
- **Tax Class:** Select a pre-configured tax class to automatically apply the correct tax rate to the bundle during checkout.

### 8. Publishing Settings ​

- **Status:** Set the product to **'Publish'** to make it live or **'Draft'** to keep it hidden while editing.
- **URL Slug:** This is the unique web address for the bundle. FluentCart creates this automatically, but you can edit it manually.
- **Limit purchases to 1 item per order:** Check this box if the bundle is an exclusive item or limited offer.

Once all details are configured, click the **"Update"** or **"Save"** button at the top right to make your bundle live.

---

---

## Defining Upgrade Paths ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/defining-upgrade-paths](https://docs.fluentcart.com/guide/product-types-creation/defining-upgrade-paths)

# Defining Upgrade Paths ​

FluentCart's **Upgrade Paths** feature is a powerful tool for managing tiered products, especially for digital products with licenses and subscriptions. It allows you to create seamless and structured pathways for your customers to upgrade from a lower-tier product/license to a higher one, often by paying only the price difference or a prorated amount.

This streamlines the customer experience and encourages upsells, maximizing your store's lifetime value.

## Accessing Upgrade Paths ​

Upgrade path settings are found within the **Edit Product** screen for individual products that support tiered offerings (typically digital products with licenses or subscriptions).

1. Navigate to **FluentCart Pro > Products** in your WordPress dashboard.
2. [Edit an existing product](/guide/product-types-creation/product-list-overview) that has multiple license tiers (e.g., "Fluent Forms").
3. On the **Edit Product** screen, click on the **"Upgrade Paths"** tab.

![Screenshot of Product Upgrade Paths Tab](https://docs.fluentcart.com/images/product-types-creation/define-upgrade-path/Upgrade-Paths-1.webp)

## Understanding and Adding Upgrade Paths ​

The "Upgrade Paths" tab displays a table where you define the upgrade logic.

### 1. Adding a New Upgrade Path ​

1. Click the **"+ Add Path"** button at the bottom of the table.
2. A new row will appear, allowing you to configure the upgrade details:

- **From Plan:** Select the specific product plan or license variation that a customer currently owns and wishes to upgrade *from* (e.g., "Single Site Yearly License").
- **To Plan:** Select the higher-tier product plan or license variation that the customer can upgrade *to* (e.g., "5 Sites Yearly License" or "50 Sites Lifetime License").
- **Discount Amount:** This field specifies the discount applied to the "To Plan" price during the upgrade. This is typically the value of the "From Plan" or a specific monetary discount.
- **Is Prorate:** Select "Yes" or "No". - **Yes (Prorated):** This means the customer will receive credit for the unused portion of their existing "From Plan" license/subscription. This credit is then applied towards the cost of the "To Plan," ensuring they only pay the difference. This is commonly used for subscriptions.
- **No:** The upgrade will simply apply the "Discount Amount" without considering any remaining value from the old plan.
3. After configuring the path, ensure you save your product settings by clicking the **"Save"** button on the bottom of the Edit screen.

![Screenshot of Product Upgrade Paths Tab](https://docs.fluentcart.com/images/product-types-creation/define-upgrade-path/add-Upgrade-Paths.webp)

### 2. Examples of Upgrade Paths ​

The table can display various configured paths, showing the flexibility of the system:

- **Yearly to Yearly:** Upgrade from a "Single Site Yearly License" to a "5 Sites Yearly License".
- **Yearly to Lifetime:** Upgrade from a "Single Site Yearly License" to a "Single Site Lifetime License" (often with prorated options).
- **Tier-to-Tier:** Moving from a lower tier to a higher tier within the same license type (e.g., 5 Sites Yearly to 50 Sites Yearly).

# How Customers Upgrade Their Products ​

Once your upgrade paths are set up in the backend, the actual upgrade process is entirely self-serve and effortless for your customers. Here is exactly what they will see:

- Step 1: Access the Dashboard Your customer logs into their account and clicks on the **Subscription Plans** (or Licenses) tab in their sidebar menu. This brings up a list of all their active purchases.
- Step 2: View Plan Details They select the specific plan they want to upgrade (for example, "Carto App") to see their detailed subscription overview.
- Step 3: Click to Upgrade Right below their current billing terms and payment method, they will easily spot a prominent **Upgrade Plan** button.
- Step 4: Choose a New Package Clicking that button opens a simple "Upgrade Options" popup. Here, they can review the higher-tier plans you've made available, check the new price, and simply click the **Upgrade** button next to the one they want.
- Step 5: Instant Checkout They are immediately taken to the checkout page to finalize the transaction. A friendly notice confirms what they are upgrading to, and the order summary automatically calculates their new cost—applying any prorated discounts instantly!

![Upgrade Path](https://docs.fluentcart.com/assets/customer-upgrade-path.D7rT1KGQ.webp)

Streamlined Customer Experience

Defining clear upgrade paths simplifies the process for your customers, allowing them to easily scale their usage or commitment without complex manual intervention or needing to purchase a new product entirely.

---

## Inventory Management ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/inventory-management](https://docs.fluentcart.com/guide/product-types-creation/inventory-management)

# Inventory Management ​

Proper **inventory management** is essential for any e-commerce store, whether you sell physical goods or digital products with limited licenses. FluentCart's built-in stock management system makes it easy to track your inventory levels, prevent overselling, and get a clear view of how your products are moving.

This guide will show you how to enable and manage inventory for your products.

### Step 1: Enable the Stock Management Feature ​

Before you can manage inventory for individual products, you must first activate the main Stock Management feature for your entire store.

1. From your WordPress dashboard, navigate to **FluentCart** > **Settings**.
2. Click on the **Features & Addon** tab from the left-hand menu.
3. You will see a list of available features. Find **Stock Management** and make sure the toggle next to it is enabled.
4. Click the **Save Settings** button.

![Screenshot of Stock Management Enable](https://docs.fluentcart.com/images/product-types-creation/inventory-management/stock-management.webp)

Once this feature is active, the **Inventory Management** section will become available on the product edit screen for your individual products.

---

### Step 2: Accessing and Managing Inventory for a Product ​

With the main feature enabled, you can now manage stock levels for each of your products.

1. Navigate to **FluentCart** > **Products** in your WordPress dashboard.
2. Find the product you want to manage and click on its name to open the product editor.
3. On the Product Edit screen, scroll down to the **Inventory Management** section.

#### Understanding the Inventory Metrics ​

The **Inventory Management** section gives you a clear, real-time overview of the stock status for each of your product's variations:

- **Title:** The name of the product variant.
- **SKU:** The unique Stock Keeping Unit identifier used to track this specific variation in your inventory.
- **Total Stock:** The total quantity of this variant you have in your inventory.
- **Available:** The number of units that are currently available for customers to purchase.
- **On hold:** The number of units that are currently reserved in pending or processing orders. These units are not available for sale.
- **Delivered:** The total number of units that have been successfully sold and fulfilled.

![Screenshot of Inventory Management Section](https://docs.fluentcart.com/images/product-types-creation/inventory-management/inventory-management-section.webp)

#### Adjusting Stock Levels ​

You can easily add or remove stock manually right from this screen.

1. In the Inventory Management table, find the variant you want to adjust.
2. In the input field under the Title, enter the quantity by which you want to change the stock.
3. Click to **Apply** button for the stock adjustment. The **"Total Stock"** and **"Available"** quantities will update instantly.

![Screenshot of Adjust Stock Section](https://docs.fluentcart.com/images/product-types-creation/inventory-management/inventory-adjust-by.webp)

Stock Management Best Practices

- Regularly check your inventory to prevent overselling or running out of popular products.
- For digital products with licenses, track your "Available" and "On hold" licenses carefully to ensure you have enough to issue.
- Integrate with external inventory systems if needed (though FluentCart provides robust native options).

---

## Managing Product Integrations (Product-Specific) ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/managing-product-integrations](https://docs.fluentcart.com/guide/product-types-creation/managing-product-integrations)

# Managing Product Integrations (Product-Specific) ​

FluentCart allows you to connect individual products with relevant external services or FluentCart modules. This provides a flexible way to extend your product's functionality, streamline workflows, or integrate with third-party platforms directly from the product level.

## Accessing Product-Specific Integrations ​

Product-specific integration settings are found within the **Edit Product** screen for individual products.

1. Navigate to **FluentCart Pro > Products** in your WordPress dashboard.
2. [Edit an existing product](/guide/product-types-creation/product-list-overview) by clicking its name or the "Edit" action.
3. On the **Edit Product** screen, click on the **"Integrations"** tab.

![Screenshot of Product Integrations Tab](https://docs.fluentcart.com/images/product-types-creation/managing-product-integration/Product-Integration.webp)

## Configuring Product Integrations ​

In the **Integrations** tab of a product’s settings, you can set up and manage automation feeds for that product. These feeds allow you to automatically run actions in other modules (like FluentCRM or FluentCommunity) whenever the product is purchased or triggered.

#### Integration Feed Management ​

This section displays a list of all existing automation feeds created for this product.

- **Status:** A simple toggle switch allows you to instantly turn any integration feed **On** or **Off** without deleting the setup.
- **Integration:** You will see the name and icon of the connected module (e.g., **FluentCRM** or **FluentCommunity**).
- **Triggers:** Triggers are specific events in FluentCart that start an automation for this product. You can choose the exact point in the customer journey, like when an order is paid, refunded, shipped, or when a subscription changes status, to run your integration feed.

#### Creating a New Integration Feed ​

Click the **Add Integration** button to set up a new automation rule. You will be given options to connect to installed Fluent products:

- [FluentCRM Integration:](/guide/integrations/fluentcrm-integration) This allows you to automatically manage the customer who buys this product in FluentCRM. You can configure actions such as **Adding a user to a specific list**, **Removing a user from a list**, **Applying a Tag**, or **Removing a Tag**, based on the purchase.
- [FluentCommunity Integration:](/guide/integrations/fluentcommunity-integration) This allows you to automatically manage user access to your community or courses. You can set actions such as **Adding a user to a specific Space** or **Course**, or **Removing a user from a Space** or **Course**.

---

## Managing Subscriptions ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/managing-subscriptions](https://docs.fluentcart.com/guide/product-types-creation/managing-subscriptions)

# Managing Subscriptions ​

For any business selling recurring products or services, the **Subscriptions** dashboard is the central command center for managing your subscriber base and recurring revenue. This dashboard provides a complete, at-a-glance overview of all your subscriptions, allowing you to track their status, view key billing dates, and access detailed information for each customer.

## Accessing the Subscriptions Dashboard ​

1. From your WordPress dashboard, navigate to **FluentCart Pro**.
2. Click on **Subscriptions** in the top menu bar.

![Managing Subscription](https://docs.fluentcart.com/images/product-types-creation/managing-subscription/managing-subscription-1.webp)

This will take you to the main Subscriptions screen, which lists all of your store's active and past subscriptions.

### Understanding the Subscriptions List ​

The main dashboard is a powerful table that gives you a complete overview of every subscription in your store. Understanding these columns is key to effective subscription management.

- **ID:** The unique identification number for each subscription.
- **Customer:** The name of the customer who owns the subscription.
- **Product:** The specific subscription product the customer purchased.
- **Status:** The current state of the subscription. This is a critical indicator of its health (e.g., Active, Trialing, Canceled, Expired).
- **Billing:** The price and billing frequency of the subscription (e.g., "$99.00 per year, until cancel").
- **Created At:** The date the subscription was first initiated.
- **Next Billing Date:** The upcoming date when the next automatic renewal payment is scheduled to be processed.
- **Collection Method:** How payments are processed. Automatic means the payment will be charged to the customer's saved payment method without any action required from them.
- **Bills Count:** The number of successful payments that have been made for this subscription, including the initial purchase.
- **Payment Method:** The payment gateway used for the subscription (e.g., Stripe, PayPal).
- **Order ID:** The ID of the very first order that created this subscription.

### Filtering and Searching Subscriptions ​

As your subscriber base grows, finding specific subscriptions becomes essential. FluentCart provides powerful filtering tools to help you do just that.

#### Quick Status Filters ​

At the top of the list, you will find several tabs to quickly view subscriptions by their most common statuses.

- **Common Filters:** All, Active, Trialing, and Pending.
- **More views:** Click this dropdown to reveal additional status filters, including Intended, Expired, and Canceled. This is useful for quickly finding all customers who have churned.

#### Advanced Filter ​

For even more specific searches, you can use the **Advanced Filter** to build complex queries. Simply click the toggle to open the filter builder. You can add one or more rules to segment your subscriptions based on a wide range of properties, including:

- **Subscription properties**
- **Billing Property**
- **Transaction Property**
- **Products**
- **License Property**
- **Labels**

![Managing Subscription Advance Filter](https://docs.fluentcart.com/images/product-types-creation/managing-subscription/managing-subscription-2.webp)

You can combine multiple rules to create highly targeted lists of your subscribers.

### Viewing Individual Subscription Details ​

To get a complete 360-degree view of a single subscription, simply click on its **ID** or the **customer's name** in the main list. This will take you to the **Subscription Details** page, which provides a wealth of information.

This detailed view is broken down into several key sections:

- **Subscription Details:** This is the core information about the subscription itself, including the product name, billing cycle, start date, and next invoice date. It also includes important reference IDs from the payment gateway (like the subscription ID from Stripe or PayPal), which is crucial for any manual lookups or support requests.
- **Related Orders:** This section provides a complete financial history of the subscription. It lists every order associated with it, from the initial purchase to every successful renewal. You can quickly see the date, total amount, payment status, and type of each order.
- **Customer Information:** This sidebar gives you a quick overview of the customer, including their contact details, their total lifetime value (LTV), and a direct link to their full customer profile.
- **Labels:** Here, you can add internal labels to help you organize and segment your subscribers for your own reference (e.g., "VIP," "Early Adopter"). This is a great way to add internal notes and context to a subscriber's record.

![Managing Subscription Detailed View](https://docs.fluentcart.com/images/product-types-creation/managing-subscription/managing-subscription-3.webp)

---

## Product List Overview ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/product-list-overview](https://docs.fluentcart.com/guide/product-types-creation/product-list-overview)

# Product List Overview ​

The **Products** screen in FluentCart is your central management hub for all items available in your store. Here, you can view your entire product catalog, check their status, type, pricing, and stock, and quickly access options to edit or add new products.

## Accessing the Products List ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left sidebar.
2. This will open the main **Products** screen, displaying a comprehensive table of all your products.

![Screenshot of Products List Page](https://docs.fluentcart.com/images/product-types-creation/product-list/Products-list-1.webp)

## Understanding the Products List Table ​

The Products list table provides key information for each product at a glance:

- **Products:** Displays the product's name and its unique ID (e.g.,"Purple Air Max trainers #33").
- **Type:** Indicates the fundamental nature of the product (e.g., "Digital", "Physical").
- **Variation:** Shows if the product has variations and their type (e.g., "Simple Variations").
- **Price:** Displays the product's selling price or a price range if it has variations.
- **Stock:** Shows the current stock level for the product or its variants.
- **Status:** Indicates the product's publishing status.
- **Date:** The date and time the product was created or last updated.
- **Actions:** (Implied) Typically includes icons or links for editing, viewing, or deleting the product.

## Managing Products from the List ​

From the Products list screen, you have several quick actions:

- **Create Dummy Product:** A button to quickly populate your store with placeholder products for testing or setup.
- **Add Product:** Click this button to [create a new product](/guide/product-types-creation/creating-physical-products) listing from scratch.
- **View Product:** A general link, likely to see a live preview of the product on your storefront.

## Filtering Products ​

FluentCart provides several ways to filter your product list, helping you quickly find specific items.

### 1. Filtering by Product Status & Type ​

At the top of the Products list, you'll find tabs that allow you to quickly filter products:

- **By Status:**- **All:** Displays all products.
- **Published:** Shows only products that are live and visible in your store.
- **Draft:** Displays products that are still in draft mode and not yet published.
- **By Type:**- **Physical:** Filters to show only physical products.
- **Digital:** Filters to show only digital products.
- **Subscribable:** Filters to show only subscription-based products.

### 2. Using the Advanced Filter ​

For more detailed control, use the **Advanced Filter** option:

1. Click the **"Advanced Filter"** button located at the top right of the Products screen.
2. The Advanced Filter section will expand, allowing you to define your filtering criteria, such as:

- **Order Property:** Filter products based on properties related to orders they are part of.
- **Product Variation:** Filter products by their variations, including "Variation Count, Variation, and Variation Type."
- **Taxonomies:** Filter products by their classification, including Product Categories, and Product Brands.
- **Conditional Logic:** Use the **"+ Add"** button for "AND" conditions and the **"+ OR"** button for "OR" conditions to combine multiple criteria.
3. Apply your desired filters by clicking **"Apply"** or **"Reset"** them to view the complete list.

![Screenshot of Product Advanced Filter Button](https://docs.fluentcart.com/images/product-types-creation/product-list/Products-list-2.webp)

## Pagination ​

At the bottom of the product list, pagination controls allow you to navigate through larger product catalogs.

- **Page 1 of X:** Shows your current page out of the total number of pages.
- **X/page:** Allows you to select how many products are displayed per page.
- **Total Y:** Indicates the total number of products in your store.

---

