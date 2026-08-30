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
- **Advanced Variations:** Build products from reusable attributes like Color and Size, and let FluentCart generate every variant combination automatically.
- **Managing Product Integrations (Product-Specific):** How to connect individual products with relevant third-party services or FluentCart modules.
- **Defining Upgrade Paths:** Set up seamless upgrade options for your tiered products, particularly for licensed and subscription items.
- **Product List Overview:** Understand how to view, filter, and manage your entire product catalog efficiently.
- **Inventory Management:** Understand how to track and adjust stock levels for your physical and licensed digital products.
- **Advanced Inventory:** A dedicated Pro workspace for central stock management, bulk updates, adjustment history, and export.
- **Creating & Managing Product Categories:** Learn how to organize your products into logical categories for better customer navigation and store management.
- **Creating & Managing Product Brands:** Learn how to create and assign brands to your products, helping customers to shop by brand and improving your store's organization.

By mastering this section, you'll be able to effectively structure your product offerings and manage your store's inventory.

---

## Advanced Inventory ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/advanced-inventory](https://docs.fluentcart.com/guide/product-types-creation/advanced-inventory)

# Advanced Inventory ​

**Advanced Inventory** is a dedicated stock-management workspace for FluentCart Pro stores that need more than per-product stock fields. It gives you a central **Inventory** admin screen with cross-catalog views, bulk updates, an auditable adjustment history, and export — on top of everything the basic [Inventory Management](/guide/product-types-creation/inventory-management) screen already does.

If you're running a physical-goods store, a warehouse, or a mixed channel where stock moves often and needs accountability, this is the module to build on.

---

## What Advanced Inventory Adds ​

On top of basic stock tracking, Advanced Inventory gives you:

- **A central Inventory screen** — every product (and every variation) in one place, with scope filters for *All*, *Low Stock*, and *Out of Stock*.
- **Inline stock edits** — adjust a variant's total stock directly from the list without opening the product.
- **Bulk updates** — update many variants at once in **Add** mode (increment existing stock) or **Set** mode (replace with a new total).
- **Adjustment history** — every change is logged with who made it, when, the old and new values, and a reason.
- **Reasons enum + custom reasons** — categorise stock movements as Restock, Damaged, Shrinkage, Correction, or Other (with a free-text note).
- **Export** — download inventory by scope and state for reporting or handover to a third-party system.
- **Stock stats** — a summary strip showing totals across the catalog, aggregated in SQL so it stays fast on large stores.

---

## Step 1: Enable the Module ​

Advanced Inventory layers on top of the core Stock Management feature, so both toggles must be on.

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2. Click the **Features & Addon** tab from the left-hand menu.
3. Make sure **Stock Management** is enabled.
4. Enable **Advanced Inventory** directly below it.
5. Click **Save Settings**.

Once both features are active, a new **Inventory** submenu appears in the FluentCart admin menu, directly after **Products**.

INFO

If Advanced Inventory is disabled, the Inventory submenu disappears and no new adjustments are recorded to the history. Your existing per-product stock levels are untouched — the basic [Inventory Management](/guide/product-types-creation/inventory-management) screen still works.
---

## Step 2: The Inventory Screen ​

Navigate to **FluentCart > Inventory** to open the Advanced Inventory workspace.

### Scope tabs ​

Across the top of the list you'll see three quick-filter tabs:

- **All** — every tracked product and variant in your store.
- **Low Stock** — items whose Available count has dropped to or below your configured low-stock threshold.
- **Out of Stock** — items with an Available count of 
```
0
```

.

### Advanced Filter ​

Toggle **Advanced Filter** on to refine the list by product, SKU, category, or custom criteria. Useful for large catalogs where you need to focus on a single supplier, brand, or segment.

### Column Reference ​

Each row represents a single product or a single variation of a variable product:

- **Products** — The product or variant name (expand the chevron on variable products to see each version listed individually).
- **SKU** — The variant's Stock Keeping Unit. Shows 
```
No SKU
```

 or 
```
--
```

 when none is assigned.
- **Total Stock** — The complete stock count. Editable inline — type a new value and click the adjuster icon next to the field.
- **Available** — Units currently sellable (Total Stock minus On hold and Delivered).
- **On hold** — Units reserved in pending or processing orders. Not available for sale.
- **Delivered** — Units already fulfilled and shipped.
- **History icon** (right edge) — Opens the adjustment history for that variant.

### Bulk selection ​

Use the checkboxes at the start of each row (or the master checkbox in the header) to select multiple variants and open the bulk actions toolbar.

### Expand All ​

Click **Expand All** at the top right to reveal every variation under every variable product at once — useful before exporting or bulk editing a large catalog.

### Products with many variants ​

A product with a large number of variants doesn't load all of them at once. FluentCart shows the first batch and adds a **Load More** control beneath them; click it to pull in the next batch.

This keeps the Inventory screen responsive on catalogs where a single product might carry hundreds of variants — the screen no longer has to build every row before it can show you anything. Bulk selection still applies to the variants currently loaded, so expand what you need before selecting.

---

## Step 3: Updating Stock ​

### Single Update (inline) ​

1. Find the variant in the list.
2. Click directly inside the **Total Stock** input for that row.
3. Enter the new total, then click the small adjuster icon next to the field.
4. A confirmation modal asks for a **Reason** — pick one from the dropdown, and if you choose **Other**, fill in the required **Custom Reason** field.
5. Click **Apply**. The row updates, the new Available count recalculates, and a new entry is written to the adjustment history.

### Bulk Update ​

1. Select two or more rows using their checkboxes.
2. Click **Bulk Update** in the actions bar.
3. Choose the **Mode**: - **Add** — The value you enter is *added to* each selected variant's existing stock. Use a positive number to increase, a negative number to decrease (e.g., 
```
+50
```

 to restock, 
```
-3
```

 to write off damaged units across all selected items).
- **Set** — The value you enter *replaces* each selected variant's current stock. Use this for end-of-month resets or physical-count reconciliations.
4. Pick a **Reason** from the enum, or select **Other** and enter a **Custom Reason**.
5. Click **Apply**. Every selected variant is updated atomically; each change writes its own entry in the adjustment history.

TIP

Prefer **Add** mode for routine receiving and write-offs — it avoids overwriting stock that might have moved since you loaded the list. Reserve **Set** mode for situations where a physical count has produced a definitive number.
### Adjustment Reasons ​

Every stock change — single or bulk — must carry a reason. FluentCart records one of the following:

| Reason | Typical use |
| --- | --- |
| Restock | New inventory arriving from supplier or production |
| Damaged | Units broken, expired, or unsellable |
| Shrinkage | Missing stock (theft, misplacement, errors) |
| Correction | Reconciliation against a physical count |
| Other | Anything else — requires a Custom Reason free-text note |

Reasons are enforced at the API layer: attempts to save a stock change without a valid reason (or without a custom reason when "Other" is selected) are rejected.

---

## Step 4: Adjustment History ​

Click the **history icon** at the end of any row to open the adjustment log for that variant. The log lists every stock change chronologically, showing:

- **Timestamp** — when the change was made.
- **User** — the WP user who made it.
- **Old Stock → New Stock** — the transition, so deltas are obvious at a glance.
- **Reason** — the reason picked from the enum.
- **Custom Reason** — any free-text note captured when **Other** was selected.

The history is append-only — adjustments cannot be edited or deleted, so the audit trail stays trustworthy. This is the record you reach for when reconciling a discrepancy, responding to a supplier dispute, or investigating a shrinkage pattern.

---

## Step 5: Export ​

For reporting, hand-off, or import into an external inventory system, use the **Export** action at the top of the inventory screen.

- **Scope** — Export the current tab (All, Low Stock, Out of Stock) or a filtered subset.
- **Inventory State** — Narrow further by state (e.g., only Available, only On hold).
- **Format** — CSV is the default, suitable for spreadsheets and most downstream tools.

Exports run against the same optimised SQL query used by the stats strip, so they stay fast even on catalogs with thousands of variants.

---

## Permissions ​

Access to Advanced Inventory follows the standard **Products** capability. Any role that can view and manage products — typically Store Manager and Administrator — can open the Inventory screen and adjust stock. Roles without the products capability do not see the Inventory menu entry at all.

To customise this, see [Roles & Permissions](/guide/settings-configuration/roles-permissions/).

---

## Best Practices ​

- **Always pick a specific reason** — "Other" works, but a typed-out custom reason helps Future You figure out what happened three months later.
- **Prefer Add mode for routine movement** — it's safer when the list view might be slightly stale.
- **Export before large bulk updates** — a CSV snapshot is the cheapest rollback if you need to undo a mistake.
- **Review the history periodically** — patterns in Shrinkage or Damaged reasons often reveal process issues (bad packaging, theft, a warehouse bay with water damage).

---

## Advanced Variations ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/advanced-variations](https://docs.fluentcart.com/guide/product-types-creation/advanced-variations)

# Advanced Variations ​

When a single product comes in many combinations, like a hoodie sold in five colors across four sizes, listing each version by hand quickly becomes tedious. **Advanced Variations** solves this by letting you define the option dimensions once and letting FluentCart build every combination for you. You set up reusable attributes such as Color, Size, or Material, pick the values that apply to a product, and FluentCart generates the full variant matrix automatically.

This guide walks you through the complete journey: understanding how the feature works, setting up your global attributes and terms, creating a new product with Advanced Variations, and switching an existing product over to it.

## Understanding Advanced Variations ​

It helps to know how Advanced Variations differs from Simple Variations before you start.

With **Simple Variations**, you build each variant by hand and name it yourself, such as "Red / Small" or "Blue / Large". This works well for a handful of versions. With **Advanced Variations**, you instead define the dimensions (Color, Size) and their values (Red, Blue, Small, Large), and FluentCart creates every possible combination for you.

Here is what makes Advanced Variations powerful:

- **Attributes are global and reusable.** You set up an attribute like Color once under **Products > Attributes**, then reuse it across as many products as you need. Update it in one place and it stays consistent everywhere.
- **The variant matrix builds itself.** Once you choose your options and values, FluentCart generates every combination automatically, so you never have to type "Red / Small", "Red / Large", "Blue / Small", and so on.
- **Color and image swatches are supported.** Beyond plain text options, you can present values as color swatches or image thumbnails, giving customers a richer way to choose on your storefront.

INFO

Advanced Variations shines when a product has two or more dimensions that combine, like color and size. If your product only has one dimension and a few versions, [Simple Variations](/guide/product-types-creation/creating-physical-products) is quicker to set up.
## Setting Up Attributes and Terms ​

Before a product can use Advanced Variations, the attributes it relies on need to exist. Two building blocks are involved:

- **Attributes** are the option dimensions themselves, such as Color, Size, or Material.
- **Terms** are the individual values inside an attribute, such as Red, Blue, and Green inside Color.

You manage both from one central screen, and anything you create here becomes available to every product in your store.

### Accessing Attributes and Terms ​

First, open the attributes manager from your WordPress dashboard. Navigate to **FluentCart Pro > Products**, then click **Attributes** in the submenu.

This opens the **Attributes & Terms** screen. The left panel lists every attribute group in your store, each showing its type, styling, and term count. Selecting a group loads its terms on the right, where you can review, add, or remove values.

### Creating an Attribute Group ​

To create a new attribute, click the **+** icon next to the **Attributes** heading in the left panel. The **Add new attribute group** modal opens with three fields to fill in.

Here is what each field does:

- **Group Title:** *(Required)* The name of the attribute, such as "Color" or "Size". This label appears in the product editor and on your storefront.
- **Attribute Type:** Sets how the values are represented. Open the dropdown to choose one: - **Options:** Plain text values, ideal for things like Size or Material.
- **Color:** Color swatches, where each term carries a hex color value.
- **Image:** Image thumbnails, where each term carries an image.
- **Styling:** Controls how the values appear on the product page: - **Button:** Values display as clickable buttons (the most common choice).
- **Dropdown:** Values display in a dropdown select menu.

Once all three fields are set, click **Add Group** to save your new attribute.

### Adding Terms to an Attribute Group ​

With your attribute created, the next step is to fill it with terms, the actual values customers will pick from.

Follow these steps to add terms:

1. Click the attribute group in the left panel to select it. Its current terms load on the right.
2. Click **+ Add Terms** at the bottom of the terms list.
3. An inline input row appears. Type the term title, for example "Cotton".
4. Click **+ Add more** to keep adding terms without leaving the panel.
5. Click **Save** in the top right to apply your changes.

You can rename a term with the pencil icon or remove it with the trash icon beside each row.

> 📝 Note: Drag the handle on the left of any term to reorder it. The order you set here is the order customers see on your storefront.

## Creating a New Product with Advanced Variations ​

With your attributes and terms ready, you can build a product around them. The flow starts from the Products list, exactly like any other product type.

### Step 1: Create the Product ​

First, start a new product and tell FluentCart it will use Advanced Variations.

1. From your WordPress dashboard, navigate to **FluentCart Pro > Products**.
2. Click the **Add Product** button at the top right of the Products screen.

1. In the **Add New Product** modal, enter the **Product Title**.
2. Open the **Variation Type** dropdown and select **Advanced Variations**.
3. Click **Add Product**. FluentCart creates the product and opens its edit screen.

### Step 2: Add Options in the Pricing Panel ​

On the product edit screen, scroll to the **Pricing** panel. Because no options have been assigned yet, it shows "No options added yet" along with a button to get started.

Now add your first option dimension:

1. Click **+ Add options like size or color**. A new option row appears with an **Option name** and **Option values** field.
2. Click **Option name** and either select an existing attribute from the list, or click **+ Create new attribute group** to define one without leaving the page.

1. Click **Option values** and check the terms you want this product to offer. You do not have to include every term from the attribute, just the ones that apply to this product.
2. For a **Color** attribute, a color picker appears when you add a new value. Pick from the preset swatches or enter a hex code directly, then add it.
3. To add another dimension, such as Size alongside Color, click **+ Add more** and repeat the steps above.
4. When your options and values look right, click **Save**. FluentCart generates the full variant matrix automatically.

INFO

After saving, every generated variant appears in the variant editor, where you can set individual prices, upload variation images, manage inventory, and assign SKUs. For a full field-by-field walkthrough, see [Configuring Product Pricing](/guide/product-types-creation/configuring-product-pricing).
## Switching an Existing Product to Advanced Variations ​

You can convert a product that currently uses **Simple** or **Simple Variations** pricing over to **Advanced Variations** at any time. Before you do, understand that this is a permanent, one-way change.

WARNING

Switching to Advanced Variations permanently deletes the product's current pricing setup, whether that is a plain **Simple** price or a set of **Simple Variations**. This cannot be undone, and you cannot switch back afterward.To switch an existing product, follow these steps:

1. Open the product on its edit screen and scroll to the **Pricing** panel.
2. Click the variation type dropdown at the top right of the panel. It currently shows your active type, such as "Simple" or "Simple Variations".
3. Select **Advanced Variations** from the dropdown.
4. A **Confirm Delete!** dialog appears. Read the warning carefully.
5. Type 
```
proceed
```

 exactly into the text field. The confirm button stays disabled until you do.
6. Click **Yes, Delete!** to confirm the switch.

Once confirmed, the old variations are removed and the Pricing panel resets to the Advanced Variations empty state. From here, follow [Step 2: Add Options in the Pricing Panel](#step-2-add-options-in-the-pricing-panel) to build out your new attribute-based options.

## Bulk Editing Variants (Group Edit) ​

A large variant matrix often needs the same change applied to many variants at once, like raising the price of every Red variant or restocking all Cotton ones. **Group Edit** handles this: instead of opening variants one by one, you edit a whole attribute group in a single pass and choose exactly which variants the change touches.

### Opening Group Edit ​

Group Edit lives inside the variant editing drawer:

1. On the product edit screen, scroll to the **Pricing** panel and click any variant to open the **Pricing** drawer.
2. At the top of the drawer, above the variant list, you'll see one group button per attribute value (for example, one per Color). Each button carries a small edit icon.
3. Click the group you want to edit. The drawer switches to group-edit mode.

### The Editing Group Summary Bar ​

In group-edit mode, a summary bar labeled **Editing group:** appears with the group's name, and it gives you everything you need to scope the update:

- **Inline variant list:** Every variant in the group is listed right in the summary bar by its attribute combination, so you always know exactly what the edit covers.
- **Per-variant checkboxes:** Each listed variant has a checkbox, and all of them start selected. Uncheck any variant to exclude it from the bulk update.
- **Live count:** The hint under the group name reads "Changes will apply to X of Y variants in this group." and updates as you check and uncheck variants.

### Applying the Bulk Update ​

With your variants selected, fill in only the fields you want to change. The group-edit form covers:

- **Price:** The selling price and compare-at price.
- **Inventory:** Stock management fields for the selected variants.
- **Shipping:** Shipping settings that apply per variant.
- **Tax Class:** Visible only when tax is enabled for your store.
- **Payment type and billing:** Switch the selected variants between one-time pricing and subscription pricing, along with the billing details that go with it.

When everything looks right, click **Update X variants** at the bottom of the form. The button always shows how many variants are about to change, and fields you leave untouched keep each variant's existing value.

> 📝 Note: The update needs at least one selected variant and at least one filled-in field. If either is missing, FluentCart shows an error instead of saving, so you cannot accidentally blank out a whole group.

> 📝 Note: Switching the selected variants to subscription pricing requires a valid billing interval in the same update. Without one, FluentCart rejects the whole operation with "A valid billing interval is required for subscription variants." and no variant in the group is changed.

Clicking **Cancel** leaves group-edit mode and returns you to the regular single-variant view without applying anything.

## How Advanced Variations Appear to Customers ​

Once your product is published, all the attributes you configured turn into interactive selectors on the storefront. Each attribute renders in the style you chose, so customers can mix and match options to land on the exact variant they want.

In this example, the **Reglan Tshirt** uses three attributes, and here is how each one behaves for the customer:

- **Images:** An image-type attribute appears as clickable photo swatches, with the selected value named beside the label (for example, "Images : Sand Olive"). Picking a swatch updates the main product image so shoppers see exactly what they are choosing.
- **Material:** An options-type attribute styled as buttons (Cotton, Polyester). The customer taps one to make their selection.
- **Size:** Another button-styled attribute (XS through XXL), letting the customer pick a size in a single click.

A few details work together to keep the experience clear:

- **Price range:** Before a full combination is selected, the product shows a range (for example, 
```
$7.00 - $15.00
```

) that spans your lowest and highest variant prices.
- **Live price update:** As the customer settles on a combination, the displayed price updates to match that specific variant.
- **Add to cart:** Once a valid combination is selected, the customer can set a quantity and use **Buy Now** or **Add To Cart** to purchase that exact variant.

> 📝 Note: The way each attribute looks on the storefront comes straight from its Attribute Type and Styling settings. Revisit Creating an Attribute Group if you want to switch an attribute between buttons, a dropdown, color swatches, or image swatches.

Your product is now running on Advanced Variations, ready for you to assign attributes and let FluentCart generate every combination for you.

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

## Step 2: Upload Your CSV File (Your Product Spreadsheet) ​

You will now be looking at a blank Bulk Insert page. This is where you will hand your data over to FluentCart.

1. Click the **Import** button located at the top right of the screen.

1. A popup window will appear asking for your file.
2. Here upload your CSV file that is saved to your computer, simply drag and drop the file into the upload area, or click the **Browse/Upload Files** text to select it.

> Note: FluentCart can handle massive catalogs! The maximum file size allowed is a generous 300 MB.

> Need a template? If you are unsure how to format your spreadsheet, look at the bottom left of this popup and click Download a Sample CSV File. This gives you a perfectly formatted template you can fill out in Excel or Google Sheets!

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

## Step 4: The Staging Table (Your Safe Review Zone) ​

This is where the magic happens. Instead of making your products live immediately, FluentCart loads all your imported data into a massive, interactive table. Do not worry—at this stage, your products are not live in your store yet!

Think of this as a final rehearsal. You can use this table to quickly review and fix any data before it goes public:

- **Lightning-Fast Inline Editing:** Notice a typo in a product name? Want to round up a price? You don't need to open a new page. Just click directly into any cell (like Title, Price, or Stock) and type your correction instantly.
- **Customize Your View:** If the table feels cluttered, click the Columns icon (the small book icon at the top right of the table). A menu will drop down allowing you to check or uncheck the fields you want to see. You can hide things like Interval or Trial Days if you aren't selling subscriptions, and focus on SKU, Price, and Stock.
- **Manage Variations Easily:** If you imported products with different sizes or colors (variable products), you will see them neatly nested under the main product. Forgot a size? Just click the **+ Add Variant** text directly in the table to create a new row for it instantly.
- **Clean Up Mistakes (Row Actions):** If a product got imported by mistake, simply check the box next to its name on the far left, and click the red **Delete** button at the top. You can also use the **Duplicate** button to quickly copy a product setup.
- **Pin Actions:** If you have many columns and need to scroll horizontally, check the **Pin Actions** box at the top right. This freezes your action buttons so they are always visible, no matter how far you scroll.

## Step 5: Save and Publish (Going Live!) ​

Take your time reviewing the staging table. Check that your prices are accurate, your SKUs are in place, and your product types (Physical vs. Digital) are correct.

> Note on price formats: Prices in your CSV are read using the decimal separator your store is configured for. If your store uses the European convention, a value like 1.299,50 imports correctly — you don't need to reformat your spreadsheet first. Just keep one convention throughout the file.

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

Pricing is one of the most powerful tools in your store — and FluentCart gives you the flexibility to set it up exactly the way your business needs. Whether you're selling a single digital download for a flat fee, a physical hoodie in five colors, or a software subscription with a free trial and installment plan, the **Pricing** section has you covered.

This guide walks you through every field, toggle, and option you'll encounter — from simple one-time pricing to complex subscription variations with per-variation inventory and packaging details. You'll also learn how to configure shipping packages right from the product level, so your carrier rates are always accurate at checkout.

Let's walk through it together, step by step.

## Choosing Your Pricing Method ​

To get started, open any product in edit mode and scroll down to the **Pricing** section. In the top right corner of that panel, you'll find a dropdown that lets you choose your pricing method:

- **Simple** — For products sold as a single item with no variations (one price fits all)
- **Simple Variations** — For products that come in multiple versions, like different colors, sizes, or license tiers, each with its own unique price
- **Advanced Variations** — For products built from reusable attributes (Color, Size, Material), where FluentCart generates every combination automatically. See the [Advanced Variations](/guide/product-types-creation/advanced-variations) guide.

## Option 1: Simple Pricing ​

Choose **Simple** when your product has one version and one price. A single ebook, a standard service, a fixed-rate subscription plan — this is the right mode for all of them.

Once you're in Simple mode, you'll notice a **Subscription** toggle at the top right of the **Pricing** panel. This is how you switch between the two payment modes:

- **Toggle OFF** → One-time purchase
- **Toggle ON** → Recurring subscription

### A. One-Time Payment ​

When the **Subscription** toggle is off, you're setting up a standard single-payment product. Here's what every field does:

#### Pricing Fields ​

**Price** *(Required)* The selling price your customers will pay. This is the number that shows up on your store page, in the cart, and at checkout. Always set this before publishing.

Typing prices with a comma decimal separator

Price fields follow the decimal separator configured in your store settings. If your store uses the European convention — 
```
10.000,59
```

 rather than 
```
10,000.59
```

 — you can type prices that way and FluentCart reads them correctly. The same applies to prices in a CSV you import.

Enter the number the way your store displays it, and don't mix conventions within one value.**Additional display prices** *(Collapsible section)* Click the chevron to expand this section and access the optional display price settings:

- **Compare at price** *(Optional)* — Enter a higher "original" price here and FluentCart will display it with a strikethrough next to your actual selling price. For example, setting **Price** to 
```
$12.90
```

 and **Compare at price** to 
```
$15.00
```

 gives customers a clear visual that they're saving money — a small detail that can meaningfully boost conversions.
- **Calculate profit/cost** *(Toggle — Optional)* — Toggle this on to track your internal profitability. Three fields will appear:

- **Cost per item** — What it actually costs you to produce or source this product
- **Profit** — Automatically calculated (Price minus Cost)
- **Margin** — Your profit as a percentage, also auto-calculated

> 💡 Pro Tip: The profit and cost fields are completely internal — your customers never see them. They're a smart way to make sure you're pricing for actual profit, not just revenue.

---

#### SKU ​

The **SKU** section is collapsible — click it to expand and reveal the tracking field.

**SKU (Stock Keeping Unit)** Enter a short, unique code for tracking this product in your inventory (e.g., 
```
HOO-ZIP-RED
```

). You can type your own or click **Generate SKU** to have FluentCart create one for you automatically. The field accepts up to 30 characters.

> 📝 Note: Assigning SKUs makes inventory tracking, reporting, and order fulfillment significantly easier — especially if you manage stock across multiple platforms or warehouses.

---

#### Shipping ​

The **Shipping** section at the bottom of the pricing panel is where you define how this product gets packaged and weighed for delivery. Getting this right means accurate carrier rates at checkout.

**Physical Product** *(Toggle)* Turn this on if this is a tangible item that needs to be physically shipped to the customer. If it's a digital product, leave this off — FluentCart will skip shipping calculations entirely for that order.

**Package** Select a pre-configured package from the dropdown. This is the box, envelope, or mailer your product ships in, and it helps FluentCart (and your connected shipping carriers) calculate accurate delivery rates based on real dimensions and weight. If no packages have been created yet, you can add one directly from here — see [Adding a New Package](#adding-a-new-package) below.

**Product weight** Enter the weight of this product and choose the unit (**kg** or **lb**) from the dropdown next to the field. Accurate weights are essential for carrier-calculated shipping rates to work correctly.

**Copy Variation ID** *(Action)* Click **Copy Variation ID** to copy the simple product's underlying variant ID to your clipboard. This is the value you'll need when wiring the product into custom code, REST endpoints, automations, or shortcodes that expect a specific variant reference.

**Direct Checkout** *(Link)* This generates a unique URL that takes customers straight to the checkout page with this product pre-loaded — bypassing the product page and cart entirely. It's perfect for email campaigns, social media promotions, or any landing page where you want to reduce the number of steps to purchase.

---

#### Adding a New Package ​

If you haven't set up any packages yet, click the **Package** dropdown and choose the option to add a new one. The **Add package** modal will appear.

Here's what to fill in:

**Package type** Choose the shape that best matches how you ship this product:

- **Box** — A standard rigid rectangular box
- **Envelope** — A flat mailer, padded envelope, or document sleeve
- **Soft package** — A poly mailer, bubble wrap, or any flexible pouch

**Dimensions** Enter the **Length**, **Width**, and **Height** of the package, then select the measurement unit — **in** (inches) or **cm** (centimetres) — from the dropdown next to the fields.

**Weight (empty)** The weight of the empty packaging itself. Enter the value and choose the unit (**kg** or **lb**). This gets added to your product's weight to give carriers an accurate total shipment weight.

**Package name** Give your package a name you'll recognise later (e.g., 
```
Medium Box
```

, 
```
Small Mailer
```

). This is what appears in the **Package** dropdown across all your product pages.

**Use as default package** *(Checkbox)* Check this box to make this package the automatic default when assigning packages to new products. It also becomes the fallback package used in checkout rate calculations.

Once everything looks correct, click **Add package** to save it. Your new package will immediately appear in the **Package** dropdown.

---

### B. Subscription Payment ​

Toggle the **Subscription** switch to the on position and the pricing fields transform to everything you need for a recurring billing setup.

**Installment Price** *(Required)* The amount charged to the customer on each billing cycle. The 
```
x1
```

 indicator next to the field reflects how many times this price is charged per interval — this updates automatically when you configure installments.

**Additional display prices** *(Collapsible section)* Expand this section to access the subscription-specific display and billing options:

- **Compare at price** *(Optional)* — A higher price displayed with a strikethrough, showing customers the value of the subscription rate.
- **Interval** *(Required)* — How frequently the customer is billed. Choose from:

- **Daily**
- **Weekly**
- **Monthly**
- **Quarterly**
- **Half Yearly (Six Month)**
- **Yearly**
- **Trial Days** *(Optional)* — Enter the number of free days before the first billing cycle begins. Set to 
```
0
```

 if you don't want a trial period. For example, 
```
14
```

 gives customers a two-week free trial — a powerful conversion tool for subscription products.

**Enable installment payment** *(Checkbox — Optional)* Check this box if you want to offer the subscription for a fixed number of payments instead of recurring indefinitely. Once checked, two fields appear:

- **Installment Count** — The total number of payments the customer will make (e.g., 
```
3
```

 for a three-month payment plan). This must be **2 or more**. A single installment is just a one-time payment, so if that's what you want, set the payment type to one-time instead
- **Total Price** — Auto-calculated by multiplying **Installment Price** by **Installment Count**

> 💡 Pro Tip: Installment plans are ideal for online courses, coaching programs, or any product where you want customers to pay over time with a clear end date — no cancellation anxiety for them, guaranteed revenue for you.

**Setup fee** *(Toggle — Optional)* Enable this to charge a one-time fee at the very start of the subscription, in addition to the recurring price. When toggled on, two sub-fields appear:

- **Setup fee label** — The name customers see for this charge at checkout (e.g., 
```
Activation Fee
```

, 
```
Enrollment Fee
```

, 
```
One-Time Setup
```

)
- **Setup fee amount** — The dollar amount charged once at signup

> 📝 Note: The setup fee is automatically included as a separate line item on the customer's purchase confirmation page, invoice receipt (PDF), and order confirmation email — so customers always see exactly what they were charged at signup, separate from their recurring subscription amount.

**Calculate profit/cost** *(Toggle — Optional)* Toggle on to track **Cost per item**, **Profit**, and **Margin** for internal reporting on this subscription product.

> 📝 Note: The SKU and Shipping sections work exactly the same way in subscription mode as they do for one-time payments. Enter your product's SKU, select a package, and add the product weight — those details don't change based on billing type.

---

## Option 2: Simple Variations ​

When your product comes in multiple versions — different colors, sizes, storage capacities, or license tiers — **Simple Variations** is the right choice. Instead of one price, you get a table of variations, and each one can have its own price, image, inventory level, SKU, and shipping details.

Select **Simple Variations** from the pricing dropdown to activate this mode.

---

### The Variations Table ​

Once you're in Simple Variations mode, you'll see a clean table listing all your current variations. Each row represents one version of your product.

Here's what each column means:

- **⠿ (Drag handle)** — Click and drag any row to reorder your variations. The order here directly controls how options appear on your product page — put your most popular first.
- **Image** — A thumbnail of this variation's unique photo. Click the image cell to upload or swap it.
- **Title** — The variation name (e.g., 
```
Red
```

, 
```
Large
```

, 
```
Pro License
```

). You can edit this directly in the table.
- **Price** — The selling price for this variation. Editable directly in the table row.
- **Compare at price** — The original "was" price for this variation. Also editable inline.
- **Action** — Two icons: a **pencil icon** to open the full variation editor, and a **three-dot icon** for quick actions.

**To add a new variation**, click the **+ Add more** button at the bottom of the table. A new blank row will appear — fill in the title and price inline, then click the pencil icon to configure the rest.

**The three-dot icon** gives you these quick options:

- **Duplicate** — Instantly copy this variation to use as a starting point for a new one
- **Direct Checkout** — Generate a unique buy-now link for this specific variation
- **Delete** — Permanently remove this variation from the product
- **Skip inventory** — Exclude this variation from stock tracking if needed

> 📝 Note: You can make quick edits to Title, Price, and Compare at price directly in the table rows. For everything else — images, inventory, subscriptions, SKU, and shipping — click the pencil icon to open the full editor.

---

### Editing a Variation ​

Click the **pencil icon** in the Action column of any variation to open the full variation editor. This opens a full-screen panel with two sections:

- **Left panel** — Displays all your variations in a scrollable list, showing the product name, its published status, and the total variant count. Click any variation in this list to jump to editing it without closing the panel — great for quickly moving between variations.
- **Right panel** — The complete configuration area for the currently selected variation (highlighted with a green dot in the left list).

At the bottom of the panel, you'll find three action buttons: **Discard** (undo any unsaved changes to this variation), **Cancel** (close the panel without saving), and **Update** (save all your changes).

---

#### A. One-Time Payment for a Variation (Subscription Toggle OFF) ​

When the **Subscription** toggle in the variation editor is off, you're configuring a standard one-time purchase for this specific version.

**Variation image** Click the image thumbnail at the top left of the right panel to upload a photo specific to this variation. Showing customers exactly what color, size, or version they're selecting builds confidence and reduces returns.

**Variation Title** The name of this specific version (e.g., 
```
White
```

, 
```
XL
```

, 
```
50 Sites License
```

). This is what customers see when browsing or selecting options on your product page.

**Price** *(Required)* The selling price for this specific variation.

**Additional display prices**

- **Compare at price** *(Optional)* — A higher original price displayed with a strikethrough for this variation.
- **Calculate profit/cost** *(Toggle — Optional)* — Toggle on to enter the **Cost per item** and see the auto-calculated **Profit** and **Margin** for this variation.

**Inventory** The **Inventory** toggle lets you manage stock levels right here inside the variation editor — no need to navigate to a separate screen. When turned on, four fields appear:

- **Total Stock** — The total number of units you have for this variation. Click the edit icon next to the number to make an adjustment.
- **Available** — Units currently available for customers to purchase (read-only, auto-calculated)
- **On Hold** — Units reserved in pending or processing orders (read-only)
- **Delivered** — Units that have been fulfilled and shipped (read-only)

> 💡 Pro Tip: Managing inventory at the variation level means you'll never accidentally oversell the Red hoodie just because you still have plenty of Teal ones. Each color stays tracked independently.

**SKU** Expand the collapsible **SKU** section to assign a unique tracking code to this specific variation (e.g., 
```
HOO-WHT-M
```

). Click **Generate SKU** to have FluentCart create one automatically. Accepts up to 30 characters.

**Shipping** Configure the physical shipping details for this specific variation:

- **Physical Product** — Toggle on if this variation requires physical shipment
- **Package** — Select the package type for this variation (different variations can use different package sizes)
- **Product weight** — Enter the weight for this specific variation, with your preferred unit (**kg** or **lb**). Since different sizes or configurations often weigh differently, per-variation weight ensures your carrier rates stay accurate

**Tax** *(visible only when store-level tax is enabled)* Each variation also has its own tax controls — a Tax Inclusion override in the Pricing section, a Charge-tax checkbox, and a per-variation Tax Class. See [Per-Variation Tax Settings](/guide/product-types-creation/per-variation-tax) for the full walkthrough.

When you've finished configuring this variation, click **Update** to save all your changes.

---

#### B. Subscription Payment for a Variation (Subscription Toggle ON) ​

Toggle the **Subscription** switch to the on position inside the variation editor to set this variation up as a recurring subscription — perfect for software license tiers, membership levels, or any product where different versions bill at different rates.

All the same subscription fields are available here as in Simple pricing:

**Price** *(Required)* The recurring charge for each billing cycle of this variation.

**Compare at price** *(Optional)* A higher price shown with a strikethrough to communicate the subscription's value.

**Interval** *(Required)* The billing frequency for this specific variation — choose from **Daily**, **Weekly**, **Monthly**, **Quarterly**, **Half Yearly**, or **Yearly**. Different variations can have different intervals, so you could offer a "Monthly" and a "Yearly" tier side by side.

**Trial Days** *(Optional)* The number of free days before the first charge is made. Set to 
```
0
```

 for no trial. Offering even a 7-day trial on higher-priced tiers can meaningfully improve sign-up rates.

**Enable installment payment** *(Checkbox — Optional)* Limit this variation's subscription to a fixed number of payments. When checked:

- **Installment Count** — Total number of billing cycles before the subscription ends automatically. Must be **2 or more**
- **Total Price** — Auto-calculated total (Installment Price × Count)

**Setup fee** *(Toggle — Optional)* Charge a one-time fee at signup for this variation. When toggled on:

- **Setup fee label** — The customer-facing name for this charge (e.g., 
```
Activation Fee
```

)
- **Setup fee amount** — The one-time charge in dollars

> 📝 Note: Just like with Simple pricing, the variation's setup fee is rendered as its own line item on the purchase confirmation page, invoice receipt (PDF), and order confirmation email — keeping the one-time charge transparent and clearly separated from the recurring billing amount.

**Calculate profit/cost** *(Toggle — Optional)* Track your internal **Cost per item**, **Profit**, and **Margin** for this subscription variation.

**Inventory**, **SKU**, and **Shipping** work exactly the same as described in the one-time variation section — configure stock levels, assign a unique SKU, and set the package and weight specific to this variation.

When everything is set up the way you want, click **Update** to save your subscription variation.

---

## Option 3: Advanced Variations ​

When your product comes in combinations of options, like a shirt offered in several colors across several sizes, **Advanced Variations** saves you from building each version by hand. Instead of naming every variant yourself, you pick reusable attributes (Color, Size, Material) and the values that apply, and FluentCart generates the full variant matrix for you.

This method relies on global **Attributes** and **Terms** that you set up once under **Products > Attributes**, then reuse across any product. Once your options are saved, each generated variant gets its own price, image, inventory, and SKU, exactly like Simple Variations.

Because the setup flow is different, Advanced Variations has its own dedicated walkthrough. See the [Advanced Variations](/guide/product-types-creation/advanced-variations) guide for the complete step-by-step, from creating attributes to switching an existing product over.

---

You've now got the complete picture of how pricing and variations work in FluentCart. Whether you're running a simple one-product store or a rich catalog of subscription tiers with per-variation inventory and packaging, every setting is exactly where you need it.

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
3. This will open the **Add New Product** popup from where you have to give the product name and select the product type **Digital Product** then the **Edit Product** page will come.

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

### 3. Product Taxonomies ​

Categorize and type your digital product for better structured organization.

- **Product Categories:** Assign the product to relevant categories (e.g., "E-Books", "Software"). Click **"+ Add More Category"** to assign additional categories.
- **Product Brand:** Assign the product to relevant brands. Click to **"+Add Brand”** to assign additional brands.

### 4. Pricing & Variations ​

Pricing is where your digital product becomes a real offer — and FluentCart gives you the flexibility to sell it exactly the way your business works. A single ebook for a flat fee, a software tool with a free trial period, or a tiered product with a monthly plan and a discounted yearly plan side by side — this section handles all of it.

Open the **Pricing** panel and look at the dropdown in the top right corner. That's your first decision:

- **Simple** — One product, one price. The right choice for a single item with no variations.
- **Simple Variations** — Multiple versions of the same product (e.g., Standard, Pro, Agency), each with its own price and billing structure.
- **Advanced Variations** — Versions built from reusable attributes like License Tier or Format, where FluentCart generates every combination automatically. See the [Advanced Variations](/guide/product-types-creation/advanced-variations) guide.

Pick the method that matches your product, and the fields below will adapt.

---

#### Option A: Simple Pricing ​

Choose **Simple** when your digital product is a single item — one version, one price. A single ebook, a one-off template pack, a fixed-fee service download — this is the mode for all of them.

Inside the **Pricing** panel you'll notice a **Subscription** toggle in the top right. This is how you switch between the two payment modes:

- **Toggle OFF** → One-time purchase
- **Toggle ON** → Recurring subscription

**1. One-Time Payment**

When the **Subscription** toggle is off, you're setting up a standard single-payment digital product.

**Price** *(Required)* The selling price your customers will pay. This is the number that shows on your store page, in the cart, and at checkout.

**Additional display prices** *(Collapsible section)* Click the chevron to expand this section:

- **Compare at price** *(Optional)* — Enter a higher "original" price here and FluentCart will display it with a strikethrough next to your actual price. Setting **Price** to 
```
$12.90
```

 and **Compare at price** to 
```
$20.00
```

 gives customers a clear visual that they're saving — a reliable conversion boost for digital products.
- **Calculate profit/cost** *(Toggle — Optional)* — Toggle this on to track internal margins. Three fields appear:

- **Cost per item** — What it costs you to create or license this product
- **Profit** — Auto-calculated (Price minus Cost)
- **Margin** — Your profit as a percentage, also auto-calculated

> 💡 Pro Tip: These profit fields are completely invisible to customers. They're a smart way to know whether your pricing is sustainable before you hit publish.

**SKU** *(Collapsible section)* Expand the **SKU** section and enter a unique tracking code (e.g., 
```
EBOOK-MKT-01
```

). Click **Generate SKU** to have FluentCart create one automatically. Accepts up to 30 characters.

**2. Subscription Payment**

Toggle the **Subscription** switch on and the pricing fields transform into everything you need for recurring billing — ideal for software tools, membership content, course access, or any digital product your customers return to over time.

**Installment Price** *(Required)* The amount charged on each billing cycle. The 
```
x1
```

 indicator next to the field reflects how many times this price is charged per interval — it updates automatically when you configure installments.

**Additional display prices** *(Collapsible section)*

- **Compare at price** *(Optional)* — A higher price displayed with a strikethrough, helping customers see the value of your subscription rate.
- **Interval** *(Required)* — How frequently the customer is billed. Choose from:

- **Daily**
- **Weekly**
- **Monthly**
- **Quarterly**
- **Half Yearly (Six Month)**
- **Yearly**
- **Trial Days** *(Optional)* — The number of free days before the first charge. Set to 
```
0
```

 for no trial. Even a 7-day trial on a higher-priced plan can meaningfully improve sign-up rates — it lowers the barrier to committing.

**Enable installment payment** *(Checkbox — Optional)* Check this box to limit the subscription to a fixed number of payments instead of running indefinitely. Two fields appear:

- **Installment Count** — The total number of payments (e.g., 
```
12
```

 for a year-long payment plan)
- **Total Price** — Auto-calculated (Installment Price × Count)

> 💡 Pro Tip: Installment plans work brilliantly for online courses or coaching programs — customers pay over time with a clear end date, eliminating cancellation anxiety while guaranteeing your revenue.

**Setup fee** *(Toggle — Optional)* Enable this to charge a one-time fee at the very start of the subscription, in addition to the recurring price. Two sub-fields appear:

- **Setup fee label** — The name customers see for this charge at checkout (e.g., 
```
Activation Fee
```

, 
```
Enrollment Fee
```

)
- **Setup fee amount** — The one-time amount charged at signup

**Calculate profit/cost** *(Toggle — Optional)* Toggle on to track **Cost per item**, **Profit**, and **Margin** for this subscription for internal reporting.

> 📝 Note: The SKU section works exactly the same in subscription mode as it does for one-time payments. Digital products don't need a shipping package or physical weight — so those fields don't appear here.

---

#### Option B: Simple Variations ​

When your digital product comes in multiple versions — a Standard and a Pro, different license tiers, or a monthly plan alongside a discounted yearly plan — **Simple Variations** is the right choice. Each variation gets its own price, image, and billing structure, completely independent from the others.

Select **Simple Variations** from the pricing dropdown to activate this mode.

**The Variations Table**

You'll see a clean table where each row is one version of your product:

- **⠿ (Drag handle)** — Click and drag to reorder. The order here controls how options appear on your product page — put your most compelling tier first.
- **Image** — A thumbnail for this variation. Click to upload or swap.
- **Title** — The variation name (e.g., 
```
Standard
```

, 
```
Pro
```

, 
```
Agency
```

). Editable directly in the table.
- **Price** — The selling price for this variation. Editable inline.
- **Compare at price** — The "was" price for this variation, shown with a strikethrough. Also editable inline.
- **Action** — A **pencil icon** to open the full variation editor, and a **three-dot icon** for quick options.

Click **+ Add more** at the bottom to add a new variation. A blank row appears — fill in the title and price, then use the pencil icon for everything else.

The **three-dot icon** gives you:

- **Duplicate** — Copy this variation as a starting point for a new one
- **Copy Variation ID** — Get the unique ID for developers or shortcode use
- **Direct Checkout** — Generate a buy-now link for this specific version
- **Delete** — Remove this variation permanently
- **Skip inventory** — Exclude this variation from stock tracking

> 📝 Note: Quick edits to Title, Price, and Compare at price can be made directly in the table rows. For images, subscription configuration, and everything else — click the pencil icon.

**Editing a Variation (Pencil Icon)**

Click the **pencil icon** to open the full variation editor — a full-screen panel with two sides:

- **Left panel** — A scrollable list of all your variations. Click any item to jump to editing it without closing the panel.
- **Right panel** — The complete configuration for the currently selected variation, highlighted with a green dot in the left list.

At the bottom: **Discard** (undo unsaved changes), **Cancel** (close without saving), and **Update** (save all changes).

**A. One-Time Payment for a Variation**

When the **Subscription** toggle in the editor is off, you're setting up a standard single-payment tier.

**Variation image** Click the thumbnail to upload a photo specific to this version — helpful for visually distinguishing tiers on your product page.

**Variation Title** The name of this specific version (e.g., 
```
Standard
```

, 
```
Pro License
```

, 
```
Lifetime Access
```

).

**Price** *(Required)* The selling price for this specific variation.

**Additional display prices**

- **Compare at price** *(Optional)* — A higher "was" price shown with a strikethrough for this variation.
- **Calculate profit/cost** *(Toggle — Optional)* — Track **Cost per item**, **Profit**, and **Margin** for this variation internally.

**B. Subscription Payment for a Variation**

Toggle the **Subscription** switch on inside the variation editor to configure this tier as a recurring plan — perfect for software license tiers or membership levels where different versions bill at different rates.

**Price** *(Required)* The recurring charge for each billing cycle of this variation.

**Compare at price** *(Optional)* A higher price shown with a strikethrough to communicate value.

**Interval** *(Required)* The billing frequency for this specific variation — choose from **Daily**, **Weekly**, **Monthly**, **Quarterly**, **Half Yearly**, or **Yearly**. Different variations can have different intervals, so you can offer a "Monthly" and a "Yearly" tier side by side on the same product page.

**Trial Days** *(Optional)* Free days before the first charge. Set to 
```
0
```

 for no trial. Offering even a short trial on a higher-priced tier can meaningfully improve sign-up rates.

**Enable installment payment** *(Checkbox — Optional)* Limit this variation to a fixed number of billing cycles:

- **Installment Count** — Total payments before the subscription ends automatically
- **Total Price** — Auto-calculated total (Installment Price × Count)

**Setup fee** *(Toggle — Optional)* Charge a one-time fee at signup for this variation:

- **Setup fee label** — The customer-facing name (e.g., 
```
Activation Fee
```

)
- **Setup fee amount** — The one-time amount

**Calculate profit/cost** *(Toggle — Optional)* Track your internal **Cost per item**, **Profit**, and **Margin** for this subscription variation.

INFO

For the complete, field-by-field reference on every pricing option — including the full breakdown of all interval choices, installment plans, setup fees, trial periods, and the Add Package walkthrough — see the [Configuring Product Pricing & Variations](/guide/product-types-creation/configuring-product-pricing) guide.
### 5. Downloadable Asset(s) ​

This is where you attach the actual files your customers will receive after purchase. Toggle the **Downloadable Asset(s)** switch on to enable the section, then click **+ Add** to attach your first file.

The **Add Downloadable Asset(s)** modal opens with the following options:

- **Choose variant** *(Optional)* — If your product has multiple variations, select the specific variant this file belongs to. Leave it empty to make the asset available across all variants.
- **Choose File** — Click this button to open the **Storage Providers** modal and pick or upload your file.

**Storage Providers modal**

The **Storage Providers** modal is where you manage and select the file to attach. The left panel lists your configured providers — **Local** (your WordPress server) and **Cloudflare R2** if you have it connected. Select a provider to load its contents on the right.

Each provider offers two tabs:

- **Select Files** — Browse files already uploaded to that provider. Use the search bar to find a file by name, check the box next to it, and click **Confirm** to attach it.
- **Upload** — Drag and drop a new file directly onto the upload area, or click **Browse/Upload Files** to pick one from your computer. Any file format is accepted, up to **300 MB** per file.

Once you've selected or uploaded your file, click **Confirm** to return to the asset modal, then click **Save Asset** to attach it to your product.

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

### 4. Product Taxonomies ​

Categorize and type your product for better organization.

- **Product Categories:** Assign the product to relevant categories (e.g., "Software"). Click **"+ Add More Category"** to assign additional categories.
- **Product Brand:** Assign the product to relevant brands. Click to **"+Add Brand”** to assign additional brands.

### 5. Pricing & Variations ​

Licensed products live and breathe through their tiers — and this is the section where you bring that structure to life. Each license tier you offer (Single Site, 5 Sites, 50 Sites, Lifetime, Yearly) is defined as its own **variation**, complete with its own price, payment model, and optional setup fee. Think of the Variations table as your tier menu: it's what customers see and choose from when they land on your product page.

Select **Simple Variations** from the pricing dropdown in the top right of the **Pricing** panel. This is the right mode for virtually all licensed products, since each tier needs independent pricing and billing.

**The Variations Table**

Once in Simple Variations mode, you'll see a clean table where each row is one license tier. The columns give you a quick overview at a glance:

- **⠿ (Drag handle)** — Drag to reorder tiers. The order here is the order customers see — put your most popular or recommended plan first.
- **Image** — A thumbnail specific to this tier. Click to upload or swap.
- **Title** — The name of this license tier (e.g., 
```
Single Site Yearly
```

, 
```
5 Sites Lifetime
```

). Editable directly in the table.
- **Price** — The selling price for this tier. Editable inline.
- **Compare at price** — The "was" price shown with a strikethrough for this tier. Also editable inline.
- **Action** — A **pencil icon** to open the full tier editor, and a **three-dot icon** for quick actions (Duplicate, Direct Checkout, Delete).

Click **+ Add more** at the bottom to add a new tier. Fill in the title and price inline, then click the pencil icon to configure the billing details.

> 📝 Note: You can make quick edits to Title, Price, and Compare at price directly in the table. For payment term, subscription settings, setup fee, and SKU — you'll need to open the full editor with the pencil icon.

**Editing a License Tier (Pencil Icon)**

Click the **pencil icon** on any tier row to open the full variation editor. This is where you define exactly how each license tier is paid for.

**Variation image** Upload a visual specific to this tier — helpful if your tiers have distinct branding, like a "Pro" badge or different logo treatment.

**Variation Title** The customer-facing name of this tier (e.g., 
```
Single Site Annual License
```

, 
```
Agency – 50 Sites
```

, 
```
Lifetime Access
```

).

**Price** *(Required)* The selling price for this specific tier.

**Compare at price** *(Optional)* A higher original price shown with a strikethrough — great for communicating annual savings when customers compare your monthly and yearly plans.

**Payment Term — the heart of license pricing** This is where you tell FluentCart *how* this tier is paid for. Your options are:

- **One Time** — For lifetime licenses. The customer pays once and owns access permanently. No recurring billing, no renewal reminders.
- **Subscription** *(toggle ON)* — For renewable licenses. When you switch to subscription mode, the full recurring billing setup becomes available:

- **Interval** *(Required)* — How frequently the license renews: **Daily**, **Weekly**, **Monthly**, **Quarterly**, **Half Yearly**, or **Yearly**. A "Yearly" license renews once per year; a "Monthly" license renews each month.
- **Trial Days** *(Optional)* — Free days before the first charge begins. Set to 
```
0
```

 for no trial. Even a 7-day trial can meaningfully lift conversion rates for higher-priced tiers.
- **Enable installment payment** *(Optional)* — Limit the subscription to a fixed number of payments instead of renewing indefinitely: - **Installment Count** — Total billing cycles before the license ends automatically
- **Total Price** — Auto-calculated (Price × Count)
- **Setup fee** *(Toggle — Optional)* — A one-time charge at the very start of the subscription, in addition to the recurring price: - **Setup fee label** — What customers see at checkout (e.g., 
```
Activation Fee
```

, 
```
Onboarding Fee
```

)
- **Setup fee amount** — The one-time amount

**Calculate profit/cost** *(Toggle — Optional)* Toggle on to enter the **Cost per item** for this tier and track your **Profit** and **Margin** internally. Useful when you factor in support, hosting, or delivery costs per license.

> 💡 Pro Tip: For products with both a "Monthly" and a "Yearly" tier, set up two separate variations — each with its own Interval. Customers can then compare both options side by side on your product page. Set the yearly tier as your default variant and watch the upgrade rate improve.

INFO

For the complete, field-by-field reference on every pricing option — including all subscription interval choices, installment configuration, trial days, and setup fees — see the [Configuring Product Pricing & Variations](/guide/product-types-creation/configuring-product-pricing) guide.
### 6. Downloadable Asset(s) ​

This section is where you manage the digital files associated with your licensed product.

- Click **"+ Add Asset"** to upload or link your software package, documentation, or other digital content.
- You can choose to link assets to **specific variants** (e.g., a "pro" version download for a higher-tier license) or leave it empty for all variants.
- See [Adding & Managing Downloadable Assets](/guide/product-types-creation/creating-digital-products#_5-downloadable-asset-s) for detailed steps.

### 7. Product-Specific License Settings ​

This is the most important section for licensed digital products, offering granular control over each license's behavior.

#### Enable License Add-on ​

Before you can set up licenses for a specific product, you need to make sure the main licensing feature is turned on for your entire store. This is a quick, one-time step.

1. Navigate to **FluentCart Pro** > **Settings** from the left WordPress sidebar.
2. Click on the **Features & Add-ons** tab.
3. Locate the **Product Licensing** option and click the **toggle** button to enable it.
4. Click the **Save Settings** button to apply the change.

#### Configure Product License Settings ​

Once the add-on is enabled, you can configure the license settings for each product. On the Product Edit screen, click the **License Settings** tab.

1. On the Product Edit screen, click the **"License Settings"** tab.
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
6. **Signed Releases (optional):** If you sign your releases, you can publish a signature alongside each version so customer sites can verify a package before installing it.

- **Release Manifest:** The signed manifest for the current release, as a base64 value.
- **Release Signature:** The detached signature for that manifest, also base64.

Both values are stored and served exactly as you enter them. Paste each one as a single unbroken line — a value that gets line-wrapped, re-encoded, or URL-decoded on the way in is still a valid-looking string that will no longer verify, and FluentCart rejects a malformed value rather than silently repairing it.

Off unless you sign your releases

Signed releases are optional and disabled by default. Most vendors don't sign, and nothing about licensing or updates depends on this — leave the fields empty if signing isn't part of your release process.

FluentCart never generates, verifies, or parses these values. The signing key belongs to your release pipeline and should never be stored on your store's server.

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
3. This action will open a new **Add New Product** modal, where you’ll enter the product name and select the product type, either **Physical Product** or **Digital Product**. After making your selection, click on the **Add Product** button and you’ll be redirected to the **Edit Product** page to configure all product details.

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

### 2. Media ​

This section allows you to manage the visual presentation of your product, ensuring customers get a clear view of what they are buying. You can set a primary image and build a gallery to showcase different angles or use cases.

**Featured Image:**

Set a prominent, high-quality image that will act as the main face of your product on the shop page and in the cart.

**Product Gallery:**

By clicking the **Add Media** button, you open the **Product Gallery** modal, which offers two distinct ways to add visual content to your item:

- **Gallery:** This is the standard method for selecting images or videos already saved in your WordPress media library or uploading new files directly from your computer.
- **Add by URL:** This convenient option allows you to link to an image hosted elsewhere on the web. Simply paste the direct web address of the image into the input field and click the **Add** button to include it in your gallery.

Once you have selected or linked your media, click the **Save** button at the bottom of the modal to update your product's gallery.

### 3. Product Taxonomies ​

This section helps you organize and tag your product using WordPress taxonomies for better filtering and presentation on your storefront.

- **Categories:** Assign the product to one or more relevant **Categories** (e.g., "Men's Shoes"). You can select existing categories from the dropdown menu or click **+ Add Category** to create a new one instantly.
- **Brands:** Use this field to associate the product with a specific **Brand**. Select the brand name from the dropdown menu or click **+ Add Brand** if the brand doesn't exist yet in your FluentCart settings.

By using these taxonomies, you ensure customers can easily find and filter your products on your shop pages.

### 4. Pricing & Variations ​

This is where your physical product gets its price tag — and FluentCart gives you the control to set it up exactly how your inventory works. Selling one style at a fixed rate? Or a hoodie that comes in six colorways, each with its own weight and box size? Either way, this section has you covered.

Open the **Pricing** panel and look at the dropdown in the top right corner — that's where everything starts:

- **Simple** — One version, one price. The right choice for any product with no variations.
- **Simple Variations** — Multiple versions of the same product, each with its own price, image, SKU, and shipping details.
- **Advanced Variations** — Versions built from reusable attributes like Color and Size, where FluentCart generates every combination automatically. See the [Advanced Variations](/guide/product-types-creation/advanced-variations) guide.

Pick the method that matches your product structure, and the fields below will adapt accordingly.

---

#### Simple Pricing ​

Choose **Simple** when your physical product is a single item — one style, one size, one price. A standard poster, a single-run tote bag, or a fixed-rate boxed kit — this is the right mode.

In the top right of the **Pricing** panel you'll also see a **Subscription** toggle. Leave it off for a standard one-time purchase, or switch it on if you're selling a recurring physical product like a monthly subscription box.

**One-Time Payment**

**Price** *(Required)* The amount customers will pay. This appears on your product page, in the cart, and at checkout. Always set this before you publish.

**Additional display prices** *(Collapsible section)* Click the chevron to expand and reveal these optional fields:

- **Compare at price** *(Optional)* — Enter a higher "original" price here and FluentCart will display it with a strikethrough next to your actual selling price. Setting **Price** to 
```
$39.00
```

 and **Compare at price** to 
```
$55.00
```

, for example, gives customers a clear visual that they're saving — a small detail that can meaningfully lift conversions.
- **Calculate profit/cost** *(Toggle — Optional)* — Turn this on to track your internal margins. Three fields appear:

- **Cost per item** — What this product actually costs you to source or produce
- **Profit** — Auto-calculated (Price minus Cost)
- **Margin** — Your profit as a percentage, also auto-calculated

> 💡 Pro Tip: Cost and profit fields are entirely internal — your customers will never see them. Use them to make sure you're pricing for real profit, not just revenue.

**SKU** *(Collapsible section)* Click to expand and enter a unique tracking code for this product (e.g., 
```
SHOE-WHT-42
```

). You can type your own or click **Generate SKU** to have FluentCart create one automatically. Accepts up to 30 characters.

> 📝 Note: Assigning SKUs makes inventory tracking, order fulfillment, and reporting significantly easier — especially when you're managing stock across multiple platforms or warehouses.

> 💡 Tip — hide a SKU from the storefront: Leave the SKU field empty and FluentCart shows no SKU line on the product page for that item, so it stays hidden from customers.

**Shipping**

Because this is a physical item, this section is critical. Getting it right means accurate carrier rates at checkout.

- **Physical Product** *(Toggle)* — Make sure this is on. It tells FluentCart to apply shipping calculations to this product at checkout. If you're selling a hybrid product that also includes a digital download, you can still leave this on — just upload the digital asset separately.
- **Package** — Select the pre-configured package this product ships in (the box, mailer, or envelope your carrier will use to calculate delivery rates). If no packages exist yet, click the dropdown and choose the option to add a new one — see [Adding a New Package](/guide/product-types-creation/configuring-product-pricing#adding-a-new-package) in the full pricing guide for a complete step-by-step walkthrough.

---

#### Simple Variations ​

When your physical product comes in multiple versions — different colors, sizes, materials, or configurations — **Simple Variations** is the right choice. Each variation gets its own price, image, SKU, and shipping details, tracked completely independently so you never mix up stock between versions.

Select **Simple Variations** from the pricing dropdown to activate this mode.

**The Variations Table**

You'll see a clean table where each row represents one version of your product:

- **⠿ (Drag handle)** — Click and drag to reorder. The order here is the order customers see on your product page — put your most popular option first.
- **Image** — A thumbnail for this variation. Click to upload or swap it.
- **Title** — The variation name (e.g., 
```
Red
```

, 
```
XL
```

, 
```
Classic Fit
```

). Editable directly in the table.
- **Price** — The selling price for this variation. Editable inline.
- **Compare at price** — The "was" price, shown with a strikethrough. Also editable inline.
- **Action** — A **pencil icon** to open the full variation editor, and a **three-dot icon** for quick options.

Click **+ Add more** at the bottom to create a new variation. A blank row appears — fill in the title and price inline, then use the pencil icon to configure the rest.

The **three-dot icon** gives you these quick actions:

- **Duplicate** — Copy this variation to use as a starting point for a new one
- **Direct Checkout** — Generate a buy-now link for this specific version
- **Delete** — Remove this variation permanently
- **Skip inventory** — Exclude this variation from stock tracking if needed

> 📝 Note: You can make quick edits to Title, Price, and Compare at price directly in the table rows. For everything else — images, inventory, per-variation shipping — click the pencil icon to open the full editor.

**Editing a Variation**

Click the **pencil icon** on any row to open the full variation editor — a panel with two sides:

- **Left panel** — A scrollable list of all your variations, each showing the product name, status, and total variant count. Click any item to jump to editing it without closing the panel.
- **Right panel** — The complete configuration area for the currently selected variation, highlighted with a green dot in the left list.

At the bottom: **Discard** (undo unsaved changes to this variation), **Cancel** (close without saving), and **Update** (save all changes).

Here's what you configure on the right:

**Variation image** Click the thumbnail to upload a photo specific to this version. Showing customers exactly what color, size, or material they're selecting builds confidence and reduces returns.

**Variation Title** The name of this specific version (e.g., 
```
White
```

, 
```
XL
```

, 
```
Slim Fit
```

).

**Price** *(Required)* The selling price for this specific variation.

**Additional display prices**

- **Compare at price** *(Optional)* — A higher "was" price shown with a strikethrough for this variation.
- **Calculate profit/cost** *(Toggle — Optional)* — Track **Cost per item**, **Profit**, and **Margin** for this variation internally.

**Inventory** Toggle **Inventory** on to manage stock directly inside the variation editor — no need to navigate to a separate screen. Four fields appear:

- **Total Stock** — Total units for this variation. Click the edit icon to adjust.
- **Available** — Units available for customers to purchase (read-only, auto-calculated)
- **On Hold** — Units reserved in pending or processing orders (read-only)
- **Delivered** — Units fulfilled and shipped (read-only)

> 💡 Pro Tip: Per-variation inventory means you'll never oversell the Red hoodie just because you still have plenty of Teal ones. Every version stays tracked independently.

**SKU** Expand the collapsible **SKU** section to assign a unique tracking code to this variation (e.g., 
```
HOO-RED-M
```

). Click **Generate SKU** for an auto-generated code. Accepts up to 30 characters.

**Shipping** Because different sizes and colorways often have different weights and dimensions, each variation gets its own shipping configuration:

- **Physical Product** *(Toggle)* — On by default for physical products.
- **Package** — Select the box or mailer for this specific variation. Different sizes can ship in different packages, so a small item and a large item don't have to share the same box.
- **Product weight** — Enter the weight for this variation with your preferred unit (**kg** or **lb**). Per-variation weights keep your carrier rates accurate when sizes genuinely differ.

When you're done, click **Update** to save all your changes.

INFO

For the complete field-by-field reference — including the full subscription setup for physical subscription boxes, installment plans, trial days, setup fees, and a step-by-step walkthrough of the Add Package modal — see the [Configuring Product Pricing & Variations](/guide/product-types-creation/configuring-product-pricing) guide.
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
2. Select a pre-configured tax class from the dropdown menu, or click **+ Add** to create a new one. The corresponding tax rate will then be automatically applied to this product during checkout. Learn more about [tax configuration and classes](/guide/tax-&-duties/configuration-and-classes).

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
3. This action will open a new **Add New Product** modal.

- Enter the **Bundle Title**.
- Select the product type, either **Physical Product** or **Digital Product**.
- Check the box labeled **Add as a Bundle** to combine multiple items into one package.
4. Click the **"Add Product"** button, and you will be redirected to the **"Edit Product"** page to configure all details.

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

### 5. Pricing & Variations ​

A bundle is only as compelling as the deal it represents — and this section is where you make that deal concrete. Whether you're selling a single all-in-one package at one fixed price, or offering multiple tiers of bundles (a Starter Pack, a Professional Pack, and an Ultimate Pack, for instance), FluentCart gives you the same powerful pricing tools here as you'd have on any individual product.

Open the **Pricing** panel and look at the dropdown in the top right corner:

- **Simple** — One bundle, one price. The right choice when your bundle is a single, fixed package with no variations.
- **Simple Variations** — Multiple versions of the bundle, each with its own price, image, and stock level.
- **Advanced Variations** — Bundle tiers built from reusable attributes, where FluentCart generates every combination automatically. See the [Advanced Variations](/guide/product-types-creation/advanced-variations) guide.

---

#### Simple Pricing (One Bundle, One Price) ​

Choose **Simple** when your bundle is a single, non-varying package — everything in the box for one price.

**Price** *(Required)* The amount customers pay for the complete bundle. This is what shows on your store page, in the cart, and at checkout.

**Additional display prices** *(Collapsible section)* Click the chevron to expand:

- **Compare at price** *(Optional)* — Enter the combined individual retail price of all bundled items here. FluentCart will display it with a strikethrough next to your bundle price, immediately showing customers how much they're saving by buying the bundle. This single field can be one of your most powerful conversion tools on a bundle page.
- **Calculate profit/cost** *(Toggle — Optional)* — Toggle on to track the total cost of goods in this bundle against your selling price. Three fields appear:

- **Cost per item** — The combined cost of all items in the bundle
- **Profit** — Auto-calculated (Price minus Cost)
- **Margin** — Your profit as a percentage, also auto-calculated

> 💡 Pro Tip: Use Compare at price to tell the story of the bundle's value instantly. If your bundle includes three products worth $45, $30, and $25 individually, set the Compare at price to $100 and your bundle price to $69 — customers immediately understand the deal without reading a word.

**SKU** *(Collapsible section)* Assign a unique tracking code to this bundle (e.g., 
```
BUNDLE-STARTER-01
```

). Click **Generate SKU** to auto-generate one. Accepts up to 30 characters.

**Direct Checkout** *(Link)* Generates a unique URL that takes customers straight to checkout with this bundle pre-loaded. Great for promotional landing pages, email campaigns, or limited-time offers where you want to reduce every step between interest and purchase.

---

#### Simple Variations (Multiple Bundle Tiers) ​

When you offer different levels of bundling — for example, a Starter Pack (2 items), a Professional Pack (5 items), and an Ultimate Pack (everything) — **Simple Variations** lets you price and manage each tier independently.

Select **Simple Variations** from the pricing dropdown to activate this mode.

**The Variations Table**

Each row in the table represents one bundle tier:

- **⠿ (Drag handle)** — Drag to reorder. Put your best-value or most popular bundle tier at the top.
- **Image** — A thumbnail that represents this specific bundle tier. Click to upload or swap — use a photo that shows exactly what's in the box.
- **Title** — The name of this tier (e.g., 
```
Starter Pack
```

, 
```
Professional Pack
```

, 
```
Ultimate Bundle
```

). Editable directly in the table.
- **Price** — The selling price for this bundle tier. Editable inline.
- **Compare at price** — The combined individual retail price, shown with a strikethrough. Editable inline.
- **Action** — A **pencil icon** to open the full tier editor, and a **three-dot icon** for quick options.

Click **+ Add more** at the bottom to add a new bundle tier. Fill in the title and price inline, then use the pencil icon for the rest.

The **three-dot icon** gives you:

- **Duplicate** — Copy this bundle tier as a starting point for a new one
- **Direct Checkout** — Generate a buy-now link that bypasses the product page entirely, sending customers straight to checkout for this specific tier
- **Delete** — Remove this bundle tier permanently
- **Skip inventory** — Exclude this tier from stock tracking if you don't need to limit how many bundles you sell

> 📝 Note: Quick edits to Title, Price, and Compare at price can be made directly in the table rows. To set up images, inventory tracking, and SKUs per tier — click the pencil icon to open the full editor.

**Editing a Bundle Tier (Pencil Icon)**

Click the **pencil icon** on any tier to open the variation editor — a full-screen panel with a variation list on the left and the configuration area on the right.

Here you can set:

**Variation image** Upload an image specific to this bundle tier — showing the actual items included helps customers decide which tier is right for them.

**Variation Title** The name of this specific tier (e.g., 
```
Starter Pack
```

, 
```
Agency Bundle
```

).

**Price** *(Required)* The selling price for this specific bundle tier.

**Additional display prices**

- **Compare at price** *(Optional)* — The combined retail value of everything in this tier, shown with a strikethrough.
- **Calculate profit/cost** *(Toggle — Optional)* — Track **Cost per item**, **Profit**, and **Margin** for this specific bundle tier.

**Inventory** Toggle **Inventory** on if you want to limit how many of this bundle tier can be sold:

- **Total Stock** — Total units available for this tier. Click the edit icon to adjust.
- **Available** — Units currently available (read-only, auto-calculated)
- **On Hold** — Units reserved in pending orders (read-only)
- **Delivered** — Units fulfilled (read-only)

**SKU** Expand the collapsible **SKU** section to assign a unique tracking code to this bundle tier (e.g., 
```
BUNDLE-PRO-01
```

). Click **Generate SKU** to auto-generate one.

When you're done, click **Update** to save all your changes for this tier.

INFO

For the complete field-by-field reference on every pricing option — including subscription setup, installment plans, trial days, setup fees, and the Add Package walkthrough — see the [Configuring Product Pricing & Variations](/guide/product-types-creation/configuring-product-pricing) guide.
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

### 2. Examples of Upgrade Paths ​

The table can display various configured paths, showing the flexibility of the system:

- **Yearly to Yearly:** Upgrade from a "Single Site Yearly License" to a "5 Sites Yearly License".
- **Yearly to Lifetime:** Upgrade from a "Single Site Yearly License" to a "Single Site Lifetime License" (often with prorated options).
- **Tier-to-Tier:** Moving from a lower tier to a higher tier within the same license type (e.g., 5 Sites Yearly to 50 Sites Yearly).

## How Customers Upgrade Their Products ​

Once your upgrade paths are set up in the backend, the actual upgrade process is entirely self-serve and effortless for your customers. Here is exactly what they will see:

- Step 1: Access the Dashboard Your customer logs into their account and clicks on the **Subscription Plans** (or Licenses) tab in their sidebar menu. This brings up a list of all their active purchases.
- Step 2: View Plan Details They select the specific plan they want to upgrade (for example, "Carto App") to see their detailed subscription overview.
- Step 3: Click to Upgrade Right below their current billing terms and payment method, they will easily spot a prominent **Upgrade Plan** button.
- Step 4: Choose a New Package Clicking that button opens a simple "Upgrade Options" popup. Here, they can review the higher-tier plans you've made available, check the new price, and simply click the **Upgrade** button next to the one they want.
- Step 5: Instant Checkout They are immediately taken to the checkout page to finalize the transaction. A friendly notice confirms what they are upgrading to, and the order summary automatically calculates their new cost—applying any prorated discounts instantly!

Streamlined Customer Experience

Defining clear upgrade paths simplifies the process for your customers, allowing them to easily scale their usage or commitment without complex manual intervention or needing to purchase a new product entirely.

---

## Inventory Management ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/inventory-management](https://docs.fluentcart.com/guide/product-types-creation/inventory-management)

# Inventory Management ​

Proper **inventory management** is essential for any e-commerce store, whether you sell physical goods or digital products with limited licenses. FluentCart's built-in stock management system makes it easy to track your inventory levels, prevent overselling, and get a clear view of how your products are moving.

This guide will show you how to enable and manage inventory for your products.

Need a central stock workspace, bulk updates, or an audit trail?

For a dedicated **Inventory** admin screen with cross-catalog views, bulk stock updates, adjustment history, and exports, enable the **Advanced Inventory** module. See [Advanced Inventory](/guide/product-types-creation/advanced-inventory) for the full guide.
### Step 1: Enable the Stock Management Feature ​

Before you can manage inventory for individual products, you must first activate the main Stock Management feature for your entire store.

1. From your WordPress dashboard, navigate to **FluentCart** > **Settings**.
2. Click on the **Features & Addon** tab from the left-hand menu.
3. You will see a list of available features. Find **Stock Management** and make sure the toggle next to it is enabled.
4. Click the **Save Settings** button.

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

#### Adjusting Stock Levels ​

You can easily add or remove stock manually right from this screen.

1. In the Inventory Management table, find the variant you want to adjust.
2. In the input field under the Title, enter the quantity by which you want to change the stock.
3. Click to **Apply** button for the stock adjustment. The **"Total Stock"** and **"Available"** quantities will update instantly.

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
- **Collection Method:** How payments are processed. **Automatic** means the payment gateway charges the customer's saved payment method on its own schedule without any action required from them. **Manual** means your store owns the billing schedule and the customer pays each renewal through a **Pay Now** link. To learn how store-owned billing works, see [Store Billing for Subscriptions](/guide/product-types-creation/store-managed-subscriptions).
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

You can combine multiple rules to create highly targeted lists of your subscribers.

### Viewing Individual Subscription Details ​

To get a complete 360-degree view of a single subscription, simply click on its **ID** or the **customer's name** in the main list. This will take you to the **Subscription Details** page, which provides a wealth of information.

This detailed view is broken down into several key sections:

- **Subscription Details:** This is the core information about the subscription itself, including the product name, billing cycle, start date, and next invoice date. It also includes important reference IDs from the payment gateway (like the subscription ID from Stripe or PayPal), which is crucial for any manual lookups or support requests.
- **Related Orders:** This section provides a complete financial history of the subscription. It lists every order associated with it, from the initial purchase to every successful renewal. You can quickly see the date, total amount, payment status, and type of each order.
- **Customer Information:** This sidebar gives you a quick overview of the customer, including their contact details, their total lifetime value (LTV), and a direct link to their full customer profile.
- **Labels:** Here, you can add internal labels to help you organize and segment your subscribers for your own reference (e.g., "VIP," "Early Adopter"). This is a great way to add internal notes and context to a subscriber's record.

### Subscription Actions ​

Every subscription carries a badge next to the **Subscription Details** heading telling you who owns its billing, and the actions available to you depend on that answer. Open the **more options** menu at the top right of the Subscription Details card to see everything you can do.

- **Sync from gateway:** Pulls the latest state straight from the payment gateway, with the gateway's name shown in the menu item. Use this when you suspect FluentCart and the gateway have drifted apart.
- **Edit Subscription:** Opens the subscription's terms for editing. See [Editing Subscription Terms](#editing-subscription-terms) below.
- **Pause Subscription:** Temporarily halts billing while keeping the subscription intact.
- **Resume Subscription:** Restarts billing on a paused subscription.
- **Reactivate Subscription:** Brings a cancelled, expired, failing, or past due subscription back to life.
- **Cancel Subscription:** Ends the subscription. The customer receives a cancellation email that includes their access end date.
- **Send Reminder:** Emails the customer a reminder about a pending renewal payment.
- **Create Renewal Now:** Generates the next renewal order ahead of schedule and emails it to the customer with a **Pay Now** link. On a subscription that charges saved payment methods automatically, this item instead reads **Charge Next Renewal Now** and creates the renewal *and* charges it in one step.
- **Skip Next Period:** Pushes the next billing date forward by one full cycle without charging the customer. FluentCart records who skipped it and shows "Billing resumes on the date shown" on the subscription.
- **Charge Now:** Immediately attempts to charge an open renewal against the saved payment method, rather than waiting for the scheduled attempt.
- **Edit Vendor IDs:** Corrects the gateway identifiers stored against the subscription. This one is off by default — see below.

#### Editing Vendor IDs ​

A subscription stores the gateway's own identifiers for itself and for the customer. FluentCart uses them to match renewals, webhooks, and payment methods to the right record.

Occasionally those identifiers need correcting by hand — most often after migrating a store, or when a subscription was rebuilt at the gateway and the stored ID no longer points anywhere. **Edit Vendor IDs** lets an administrator set them directly.

This is an opt-in repair tool, not a routine action

The menu item is hidden unless it has been deliberately enabled, because a wrong vendor ID silently breaks renewals: FluentCart charges or matches against something that isn't your customer's subscription. Nothing warns you — renewals simply stop working, or attach to the wrong record.

Only use it when you know the correct identifier from the gateway's own dashboard, and verify the subscription's next renewal afterwards.INFO

Menu items appear only when they apply. A gateway-billed subscription hides the store-owned actions such as **Skip Next Period** and **Charge Now**, because the gateway owns that schedule rather than your store. To understand which mode a subscription is in, see [Store Billing for Subscriptions](/guide/product-types-creation/store-managed-subscriptions).
#### Editing Subscription Terms ​

Choosing **Edit Subscription** lets you correct the commercial terms of a running subscription without cancelling and recreating it. You can change:

- **Recurring amount:** What the customer is billed each cycle. It cannot be negative.
- **Billing interval:** How often the subscription renews.
- **Billing count:** How many times the subscription bills in total. Leave it at zero for a subscription that runs until cancelled.
- **Next billing date:** When the next renewal is due. Moving this date reschedules the whole cycle from that point.
- **Status:** Set the subscription to Active, Paused, Trialing, Cancelled, Expired, Completed, or Past Due.

> 📝 Note: Editing terms is available for store-billed subscriptions. When the payment gateway owns the billing schedule, the gateway is the source of truth for the amount and dates, so those values are changed on the gateway's side instead.

### Renewal and Payment History ​

The **Related Orders** section on the Subscription Details page is the financial record of the subscription. It lists the original purchase alongside every renewal order FluentCart has generated, so you can trace the full billing history in one place.

For each entry you can see the date, the total amount, the payment status, and the order type, which makes it straightforward to spot a renewal that was never paid. When an automatic charge attempt fails or a renewal is waiting on the customer, FluentCart also surfaces an alert at the top of the Subscription Details card explaining the current charge state.

INFO

If your store has **Saved Payment Methods** enabled, the card a customer marks as their default is what renewals draw on. When a renewal keeps failing, the quickest fix is often for the customer to add a fresh card and set it as their default from [Payment Methods](/guide/customer-dashboard/payment-methods) in their dashboard. A card that is actively paying for a subscription cannot be removed until that subscription is moved to another card, so renewals do not break silently.
### Subscription Cart Rules ​

To keep recurring billing predictable, FluentCart enforces two rules at the cart level whenever a customer tries to purchase a subscription:

- **One subscription per cart.** A customer cannot add more than one subscription to the cart at the same time. If they try to add a second subscription, they'll see the message *"Subscription items can't be combined with other products in the cart."*
- **Quantity is always one.** Subscriptions can't be purchased in bulk in a single transaction. Attempting to set quantity above one returns *"You cannot purchase more than one subscription at a time."*
- **No mixing with one-time products.** A subscription can't share a cart with one-time items, and vice versa. The same "Subscription items can't be combined…" message blocks the conflicting addition.

These rules run automatically — there is nothing for you to configure. Customers who need to buy a subscription **and** a one-time product simply place two separate orders.

### Reactivating a Cancelled Subscription ​

If a customer's subscription has been **cancelled**, **paused**, **expired**, **failing**, or **past due**, you can bring it back to life from the **Subscription Details** page. Look for the **Reactivate** action — when reactivation is available for a subscription, FluentCart shows it inline so you don't have to recreate the subscription from scratch.

Subscriptions that were cancelled because of a refund are **also reactivatable** in v1.3.27 and later. Previously a refund-driven cancellation locked the subscription out of reactivation; now the action is available, and FluentCart correctly recalculates the next billing date based on the most recent successful (non-refunded) charge. If every previous charge has already been fully refunded, the next renewal starts a fresh billing cycle.

When a subscription is reactivated, FluentCart fires the **SubscriptionReactivated** event. Integrations like FluentCRM, FluentCommunity, and email automations all listen for this event so the customer's tags, course access, and notifications resume in lockstep.

### Cancellation Notification to the Customer ​

Whenever a subscription is cancelled — by the customer from their dashboard or by you from the admin — FluentCart automatically sends the customer a cancellation email that includes the **access end date**.

This makes it clear when the customer's access actually ends, instead of leaving them to guess whether cancellation is immediate or runs through the paid period. For stores running memberships, courses, or licensed products, this helps reduce repeat "do I still have access?" support tickets after a cancellation.

You can enable, disable, or customise the body of this email from **FluentCart Pro > Settings > Email Configuration > Notifications**. See [Configuring Email Notifications](/guide/settings-configuration/email-configuration/configuring-email-notification) for details.

---

## Per-Variation Tax Settings ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/per-variation-tax](https://docs.fluentcart.com/guide/product-types-creation/per-variation-tax)

# Per-Variation Tax Settings ​

When your product comes in multiple variations and they don't all share the same tax treatment, FluentCart lets you configure tax **per variation** — so a physical variant taxed at the standard rate can sit alongside a digital variant that's zero-rated, or a sample variant that isn't taxed at all.

The variation editor exposes three independent tax controls. This page walks through what each one does, when to use it, and how they interact.

## When You'll See These Controls ​

These controls are visible **only when store-level tax is enabled** on the [Tax Configuration page](/guide/tax-&-duties/configuration-and-classes#enable-tax). If you have tax turned off globally, FluentCart hides the per-variation tax controls entirely — there's nothing to override.

## Opening the Variation Editor ​

1. Open the product you want to edit.
2. In the **Pricing** section, make sure the pricing method is set to **Simple Variations**.
3. Click the **pencil icon** in the **Action** column of the variation you want to configure.

The variation editor opens as a side panel. The three tax controls are split across two sections: a **Tax** dropdown in **Pricing** (next to the **Price** field) and a **Tax** block further down (below **Shipping**).

## The Three Variation Tax Controls ​

### 1. Tax Inclusion (Pricing section) ​

A **Tax** dropdown next to the **Price** field, with three options:

- **Store default:** inherit the store-level **Prices entered with tax** setting from Tax Configuration. This is the default; use the other options if you collect tax differently for this variation.
- **Tax included:** this variation's price already contains tax. Use when one variation needs the opposite of the store default (e.g. your store ships prices tax-exclusive but this single variation is quoted tax-inclusive on supplier paperwork).
- **Tax excluded:** this variation's price excludes tax; FluentCart adds the applicable tax on top at checkout.

**Use case.** Imagine your store is configured for tax-inclusive pricing across the board. You add a variation sourced from a different supplier whose price sheet is net of tax — set just that variation to **Tax excluded** without flipping your store-wide default.

### 2. Charge Tax on This Variation (Tax section) ​

A checkbox in the dedicated **Tax** section near the bottom of the variation editor.

- **Checked** *(default)* — tax is calculated and added to this variation according to its tax class and the customer's region.
- **Unchecked** — the variation is **tax-exempt**. No tax line appears at checkout, and the variation is excluded from tax reports.

**Use case.** A 
```
Free Sample
```

 variation of a paid product, a complimentary trial unit, or a variation that's explicitly outside your tax obligation. Uncheck and you're done.

### 3. Tax Class (Tax section) ​

When **Charge tax on this variation** is checked, a **Class:** row appears below the checkbox showing the active class (for example, **Standard**). Click the **pencil icon** beside the class name to open a dropdown and pick a different class.

The list includes every tax class configured on your store: **Standard** (default), **Reduced**, **Zero**, and any custom classes you've created. To add or rename classes store-wide, use [Configuring Tax Settings & Classes](/guide/tax-&-duties/configuration-and-classes) or the class tabs on [Tax Rates](/guide/tax-&-duties/tax-rates).

- The selected class determines which rate row applies when an order includes this variation.

**Use case.** A book-set product where one variation is a hardback (Standard) and another is an audiobook (Zero in your jurisdiction). Same product, different class per variation.

## How the Three Controls Interact ​

| Charge Tax | Tax Class | Tax Inclusion | What happens at checkout |
| --- | --- | --- | --- |
| Off | (ignored) | (ignored) | No tax line. Variation is fully exempt. |
| On | Standard | Store default | Standard rate applied; inclusion follows store setting. |
| On | Zero | (any) | 0% applied — the inclusion choice is moot because the tax line is always €0. |
| On | Reduced | Tax excluded | Reduced rate is added on top of the variation price at checkout. |
| On | Custom (e.g. Digital Services) | Tax included | The custom class's rate is split out of the displayed price for reporting; customer pays the displayed number. |

Set the three controls to match how you actually want each variation to behave — they don't have to be consistent across a product.

## Saving ​

Click **Update** at the bottom of the variation editor to save the variation. Repeat for each variation that needs a different tax setup.

## Related Pages ​

- [Configuring Tax Settings & Classes](/guide/tax-&-duties/configuration-and-classes) — store-level tax behaviour and the global Prices-entered-with-tax setting that **Store default** inherits from.
- [Setting Up Tax Rates](/guide/tax-&-duties/tax-rates) — where the rates that get applied to a variation's tax class actually live.
- [Configuring Product Pricing & Variations](/guide/product-types-creation/configuring-product-pricing) — the rest of the variation editor's fields (price, inventory, SKU, shipping).

---

## Product List Overview ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/product-list-overview](https://docs.fluentcart.com/guide/product-types-creation/product-list-overview)

# Product List Overview ​

The **Products** screen in FluentCart is your central management hub for all items available in your store. Here, you can view your entire product catalog, check their status, type, pricing, and stock, and quickly access options to edit or add new products.

## Accessing the Products List ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left sidebar.
2. This will open the main **Products** screen, displaying a comprehensive table of all your products.

## Understanding the Products List Table ​

The Products list table provides key information for each product at a glance:

- **Products:** Displays the product's name and its unique ID (e.g.,"Purple Air Max trainers #33").
- **Type:** Indicates the fundamental nature of the product (e.g., "Digital", "Physical").
- **Variation:** Shows if the product has variations and their type (e.g., "Simple Variations" or "Advanced Variations").
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

## Pagination ​

At the bottom of the product list, pagination controls allow you to navigate through larger product catalogs.

- **Page 1 of X:** Shows your current page out of the total number of pages.
- **X/page:** Allows you to select how many products are displayed per page.
- **Total Y:** Indicates the total number of products in your store.

---

## Store Billing for Subscriptions ​

**Source:** [https://docs.fluentcart.com/guide/product-types-creation/store-managed-subscriptions](https://docs.fluentcart.com/guide/product-types-creation/store-managed-subscriptions)

# Store Billing for Subscriptions ​

With **Store Billing**, your store owns the renewal schedule instead of the payment gateway. FluentCart creates each renewal invoice itself, then either emails the customer a **Pay Now** link or charges their saved card for them.

That makes recurring products work with any gateway you have enabled, including offline methods like bank transfer and cash on delivery, and it lets you change a subscriber's price, dates, or status whenever you need to.

## Two Ways to Bill a Subscription ​

Every subscription answers one question: **who owns the billing schedule?** The answer is set at checkout and decides everything that follows.

- **Gateway Billing:** The gateway owns the schedule. It creates its own recurring subscription and charges the customer each cycle. FluentCart mirrors whatever the gateway reports.
- **Store Billing:** Your store owns the schedule. FluentCart creates a renewal invoice and the customer pays it through a **Pay Now** link.
- **Store Billing with Auto-Charge:** The same store-owned schedule, except FluentCart charges the customer's saved payment method instead of asking them to pay.

|  | Gateway Billing | Store Billing | Store Billing + Auto-Charge |
| --- | --- | --- | --- |
| Who collects the money | The gateway | The customer, from card or an emailed link | Your store, from the saved card |
| Renewal email with Pay Now | No | Yes | Will inform you about the payment |
| If a payment fails | The gateway's retry logic | Reminders, grace period, expiry | Automatic retries, then reminders and expiry |
| You can change the amount | No | Yes | Yes |

INFO

Store Billing and Auto-Charge run on the same engine. Auto-charge only adds a saved payment method and an automatic payment attempt, so everything below about renewals, reminders, grace periods, and expiry applies to both.
## Turning On Store Billing ​

Go to **FluentCart Pro → Settings → Store Settings → Subscriptions**. The **Renewal Billing** panel shows the mode your store is on, when renewal invoices get created, and a **Change** button.

1. Click **Change** and pick a mode:

- **Gateway Billing** *(Recommended)*: Stripe, PayPal, and other subscription-ready gateways charge customers automatically each cycle.
- **Store Billing:** Your store creates a renewal invoice before each due date, and customers pay through a link in the email.
2. Selecting **Store Billing** reveals **Auto-charge saved payment methods**. Leave it off if you want customers to pay each invoice themselves. Turn it on to charge their saved payment method automatically on every due date, which **Stripe** and **PayPal** support. Expand **When are renewal orders created?** to see the schedule.
3. Click **Apply**. The change saves right away, with no separate save step, and the badge updates to **Store Billing**.

With auto-charge on, the badge reads **Store Billing · Auto-Charge** instead.

INFO

**Only new subscriptions are affected.** Existing subscriptions keep the billing method they started with, so you can switch modes without disrupting current subscribers.Your mode and the gateway the customer checks out with together decide how renewals actually get paid:

| Renewal Billing mode | Gateway at checkout | How the renewal gets paid |
| --- | --- | --- |
| Gateway Billing | Stripe, PayPal, Paddle, Mollie, Square, and other subscription-ready gateways | The gateway charges the customer |
| Store Billing, auto-charge off | Any enabled gateway, offline methods included | The customer pays each invoice |
| Store Billing, auto-charge on | Stripe or PayPal | Your store charges the saved payment method |
| Store Billing, auto-charge on | Any other gateway | The customer pays each invoice |

## How a Renewal Works ​

FluentCart checks store-billed subscriptions every hour, so renewals run on their own. You never have to trigger one.

1. **The invoice is created before the due date,** giving the customer time to pay. How early depends on the billing interval.
2. **The customer receives a renewal email** with a **Pay Now** link tied to that invoice.
3. **They pay with any enabled gateway,** not only the one they signed up with.
4. **The next billing date moves forward** and the subscription stays active.

FluentCart never creates a second renewal while an open one is still waiting to be paid.

| Billing interval | Invoice created | Grace period after the due date |
| --- | --- | --- |
| Daily | On the due date | 1 day |
| Weekly | 3 days early | 3 days |
| Monthly | 7 days early | 7 days |
| Quarterly, half-yearly, yearly | 15 days early | 15 days |

### Renewal Reminders ​

Reminder emails are **off by default**. Turn them on to nudge customers around the due date: one reminder on the due date, then overdue reminders **1, 3, and 7 days** after it.

You manage them from **FluentCart Pro → Settings → Email Configuration**. See [Configuring Email Notifications](/guide/settings-configuration/email-configuration/configuring-email-notification) for the full list of subscription emails.

### Past Due and Expiry ​

An unpaid renewal escalates in two stages instead of cancelling straight away:

- **Past Due:** The due date passes and the invoice is still unpaid. The customer keeps access, and reminders keep prompting them.
- **Expired:** The grace period for that interval runs out and the invoice is still unpaid. The subscription stops.

Because these are separate stages, customers always get the full grace window before they lose access. See [Understanding Statuses](/guide/store-management/understanding-statuses) for what each state means.

### A Late Payment Revives the Subscription ​

An expired subscription is not a dead end. If the customer pays the outstanding renewal afterward, FluentCart reactivates the subscription and puts it back on schedule. You do not need to recreate anything.

The next billing date is worked out sensibly too. Pay on or before the due date and the original schedule is kept, so billing dates never drift earlier. Pay late and the next cycle is measured from the payment date.

## When Auto-Charge Is On ​

Auto-charge keeps the whole invoicing flow and simply tries to pay each renewal for the customer first. At checkout, with the customer's consent, FluentCart saves their payment method so it can be reused later. After that, on every renewal:

- The invoice is created on the same schedule as plain Store Billing, but **no Pay Now email goes out**. There is no point asking someone to pay what is about to be charged.
- On the due date, FluentCart charges the saved payment method.
- If it succeeds, the renewal is settled and the subscription continues.
- If it is declined, FluentCart retries automatically within the grace period, sends a charge-failed notification, and falls back to the usual reminders and expiry if every attempt fails.

The charge-failed email defaults to the **first failure only**, so silent retries do not fill the customer's inbox.

You can follow the same story from the admin. The subscription's detail page shows **Automatic charge processing** while the provider confirms an attempt, and **Automatic charge failed** when one is declined, naming the attempt number, the reason, and when the next retry runs. A healthy subscription shows no banner at all.

INFO

**FluentCart never stores your customers' card details.** With the customer's consent, it saves a secure **token** from the payment gateway, such as **Stripe** or **PayPal**, and the gateway is what actually holds the card data. When a renewal is due, FluentCart simply sends that token back to the gateway to charge it. Customers change their card through **Update Payment Method** in their [customer dashboard](/guide/customer-dashboard/subscriptions).INFO

**Auto-charge needs Stripe or PayPal.** If a subscription moves to a gateway that cannot save and charge a payment method, for example when a customer pays a failed renewal with a different gateway, FluentCart quietly drops it back to plain **Store Billing** and resumes the Pay Now email. Manual invoicing is always the floor, and a subscription never switches to gateway billing on its own.
## Managing Subscriptions from the Admin ​

Store billing gives you far more control than gateway billing, because your store owns the schedule. Everything happens on the subscription's detail page. For a general tour of that page, see [Managing Subscriptions](/guide/product-types-creation/managing-subscriptions).

### Opening a Subscription ​

Go to **FluentCart Pro → Subscriptions** and click the one you want.

You can also open it from the order it came from. Under **FluentCart Pro → Orders**, open the order and click the product link in the **Subscription Plan** card on the right.

### Reading the Details Panel ​

A badge beside **Subscription Details** tells you how the subscription is billed:

- **Manual:** Store billing. The customer pays each renewal themselves.
- **System:** Store billing with auto-charge. Your store charges the saved payment method.
- **Automatic:** Gateway billing. The gateway handles everything.

The fields worth knowing:

- **Billing Cycle:** The recurring terms, such as *$103.50 per year until cancel*.
- **Active Payment Gateway:** The gateway currently tied to the subscription.
- **Initial Purchase ID:** The order that started it.
- **Auto-cancellation:** The payment count after which it stops on its own, or 
```
---
```

 when it renews indefinitely.
- **Next renewal:** The amount due and the date it falls due.
- **Vendor Customer ID:** The customer's ID at the gateway, shown when the gateway stores one. Handy when you need to look them up in Stripe or PayPal.

**Related Orders** below lists the original order and every renewal since, with its payment status and order type. All the actions in this section live in the three-dot menu at the top-right, and the menu changes with the subscription's status.

### Editing a Subscription ​

Pick **Edit Subscription** to change the recurring terms. You can do this on store-billed subscriptions because your store, not the gateway, is the source of truth. Changes apply to **all future renewals**, not to invoices already generated.

- **Next Renewal Amount:** What the customer pays from the next renewal onward. Use it to apply a price change or a negotiated rate.
- **Billing Times:** How many payments the subscription runs for. 
```
0
```

 means unlimited; 
```
1
```

 or more stops it after that many payments.
- **Billing Interval:** How often it renews. Changing it also changes how early invoices are created and how long the grace period lasts.
- **Status:** Choose **Active**, **Paused**, **Trialing**, **Past Due**, **Expired**, or **Completed**.
- **Next Billing Date:** The exact date and time the next renewal falls due. Push it out to give someone extra time, or pull it in to bill sooner.

Click **Save Changes** to apply.

INFO

Setting the status by hand overrides FluentCart's own lifecycle handling for that subscription. Use it to correct a state you know is wrong, not as a replacement for the normal renewal flow.
### Creating a Renewal Early ​

**Create Renewal Now** generates the next invoice immediately instead of waiting for the scheduled window. It is handy when a customer asks to pay early or you need to reissue an invoice. FluentCart asks you to confirm first.

Click **Create Renewal**. The invoice appears at the top of **Related Orders** as **Pending / Renewal**, and the renewal email goes out.

### Charging a Renewal on an Auto-Charge Subscription ​

An auto-charge subscription uses the same page with a few differences: the badge reads **System**, a **Vendor Customer ID** appears, and the menu offers **Charge Next Renewal Now** in place of **Create Renewal Now**.

That action does both halves of a renewal at once: it creates the invoice and immediately attempts to charge the saved payment method. FluentCart confirms first and notes that one attempt runs right away, with a decline falling back to the automatic retries.

Click **Create & Charge**. On success the renewal shows as **Paid / Renewal** in **Related Orders**, and **Next renewal** moves forward a full billing cycle.

If the attempt is declined, nothing is lost. The invoice stays open and the normal retry schedule takes over.

### Other Actions in the Menu ​

- **Pause Subscription:** Halt billing temporarily. The menu then offers **Resume Subscription**.
- **Cancel Subscription:** Stop the subscription and its schedule.
- **Reactivate Subscription:** Bring a cancelled, paused, or expired subscription back. It replaces the pause and cancel actions once a subscription is no longer running.
- **Skip Next Period:** Move the next billing date forward one cycle without charging, giving the customer a free period.
- **Send Renewal Reminder:** Email a reminder about the open renewal by hand. On a subscription still in its trial it reads **Send Trial End Reminder**.
- **Charge Now:** On an auto-charge subscription with an invoice already open, run one more attempt straight away. The confirmation names the card it will use.

## What Your Customers See ​

When a renewal is created, the customer gets an email with the renewal summary, the amount, the due date, and a **Pay Now** button. It also tells them they can pay early rather than wait for the due date.

They can also handle it from their [customer dashboard](/guide/customer-dashboard/subscriptions) under **Subscription Plans**, which shows the billing terms, the next charge date, the payment method on file, and every related transaction with a downloadable receipt. **Update Payment Method** and **View Order** sit right below the plan details.

Paying early on an auto-charge subscription cancels the queued charge, so a renewal is never billed twice.

INFO

**A store-billed subscription cannot be switched to the gateway's own billing.** Both would then bill the same periods and double-charge the customer. Customers update the **card on file** instead.

---

