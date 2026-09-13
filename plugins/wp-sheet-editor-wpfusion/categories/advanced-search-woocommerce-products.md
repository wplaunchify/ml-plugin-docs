# Advanced Search Woocommerce Products

*Category from WP Sheet Editor - WPFusion documentation*

---

## Advanced Product Search for WooCommerce Management

**Source:** [https://wpsheeteditor.com/advanced-search-woocommerce-products/](https://wpsheeteditor.com/advanced-search-woocommerce-products/)

One of WooCommerce’s limitations is that its standard tools don’t offer many advanced filters for finding specific groups of products to edit or export. For example, combining filters such as category, price range, and SKU prefix in a single search can be difficult. With [WP Sheet Editor](https://wpsheeteditor.com/extensions/woocommerce-spreadsheet/), you can use almost any product field as a search filter, including custom fields and fields added by third-party plugins.

**Unlike storefront search bars designed for shoppers, this guide focuses on how store managers can use advanced product search filters in the WordPress admin dashboard to audit, bulk edit, and export WooCommerce items.**

You can download the plugin here:

[Download WooCommerce Products Spreadsheet Plugin](https://wpsheeteditor.com/buy-extension/?extension_id=778&utm_source=website&utm_medium=blog&utm_campaign=advanced-search-woocommerce-products#buy) - or - [Check the features](https://wpsheeteditor.com/extensions/woocommerce-spreadsheet/?utm_source=website&utm_medium=blog&utm_campaign=advanced-search-woocommerce-products)
The **Search** tool in WP Sheet Editor gives you more control over how you find WooCommerce products. You can filter products by catalog taxonomies, product properties, variation data, and custom database fields, all from the spreadsheet interface.

## Opening the Advanced Product Search tool

To open the search tool in WP Sheet Editor:

1. Go to **WP Sheet Editor > Edit Products** in your WordPress dashboard to open the spreadsheet.
2. Click **Search** on the toolbar.

![Opening the Search tool from the WP Sheet Editor top toolbar in WooCommerce](https://media.wpsheeteditor.com/wp-content/uploads/2026/09/11143856/open-wp-sheet-editor-search-tool.png)

A modal window will open with the standard search options. You’ll also see an **Enable advanced filters** checkbox, which gives you access to more detailed search conditions.

![WP Sheet Editor standard search modal showing fields for keyword, categories, tags, shipping classes, and attributes](https://media.wpsheeteditor.com/wp-content/uploads/2026/09/11144352/wp-sheet-editor-search-tool-simple.png)

## Standard Catalog Fields

The main section of the WooCommerce **Search** tool covers the product information you’re most likely to use when searching your catalog.

### 1. Contains keyword

- **Target:** Searches product titles, short descriptions, and main content descriptions.
- **Matching behavior:** Matches both complete words and partial strings. For example, searching for 
```
hoodie
```

 can return products such as 
```
Blue Hoodie
```

, 
```
Men's Hoodies
```

, and 
```
Hoodie with Pocket
```

.

### 2. Taxonomies and Classifications

You can also narrow your search using different catalog classifications, including:

- **Categories:** Filter products by one or more categories. Selecting a parent category also includes products assigned to its subcategories.
- **Tags:** Find products using one or more catalog tags.
- **Brands:** Filter by native brands or taxonomies created by plugins such as WooCommerce Brands, Perfect Brands for WooCommerce, and YITH WooCommerce Brands.
- **Shipping Classes:** Find products assigned to specific shipping classes, such as 
```
Heavy Items
```

, 
```
Fragile
```

, or 
```
Bulky Freight
```

. This can be useful when checking whether products have the correct shipping rules.
- **Type:** Filter by WooCommerce product type, including Simple, Variable, External/Affiliate, and Grouped products, as well as custom types added by extensions.
- **Visibility:** Filter products according to their catalog visibility status.
- **POS Product Visibility:** Find products that are enabled, disabled, or published exclusively for POS registers.
- **Attributes:** Filter by global attributes configured under **Products > Attributes**, such as 
```
pa_color
```

 or 
```
pa_size
```

. You can also select specific terms, such as 
```
Red
```

 or 
```
Large
```

, to find products using those attribute values.

## Search on Variations

WooCommerce stores variable products as parent products, while their individual variations are saved separately as child records. The standard WordPress admin screens don’t provide a convenient way to search directly through this variation data.

The **Search on variations** checkbox lets you include variation records in your search:

- **When enabled:** WP Sheet Editor searches both parent products and child variations. If a variation matches your criteria, such as a variation SKU, price, or attribute term, the spreadsheet shows the parent product along with the matching variation.
- **When disabled:** The search only checks parent and simple products, leaving child variation data out of the search.

## Advanced product search

When you check **Enable advanced filters**, WP Sheet Editor opens a database query builder that gives you much more control over which products are included in the results.

![WP Sheet Editor advanced search builder showing field, operator, and value rows](https://media.wpsheeteditor.com/wp-content/uploads/2026/09/11153703/advanced-search-wp-sheet-editor.jpg)

Each rule consists of three parts:

- **Field:** Select the database column or meta key you want to search.
- **Operator:** Choose how the field should be compared with the value you enter.
- **Value:** Enter the text, number, or list of terms you want to match.

### Advanced search operators

| Operator | Description & Usage | Example Query |
| --- | --- | --- |
| = | Finds an exact match for a number, text string, or system key. | Regular Price (=) 49.99 |
| != | Excludes exact values from the results. | Category (!=) Men |
| < and <= | Finds numeric values that are less than, or less than or equal to, the specified value. | Stock (<=) 5 |
| > and >= | Finds numeric values that are greater than, or greater than or equal to, the specified value. | Total Sales (>) 100 |
| Any of these values | Matches any value in a list. Separate the values with semicolons (;). | SKU (Any of these values) SKU-01; SKU-02; SKU-03 |
| CONTAINS | Finds a specific string anywhere within a field. | Title (CONTAINS) Cotton |
| NOT CONTAINS | Excludes items containing a specific string. | Title (NOT CONTAINS) Sample |
| STARTS WITH | Finds fields that begin with a specific prefix. | SKU (STARTS WITH) 2026- |
| NOT STARTS WITH | Excludes fields that begin with a specific prefix. | SKU (NOT STARTS WITH) OLD- |
| ENDS WITH | Finds fields that end with a specific suffix. | SKU (ENDS WITH) -XL |
| CHARACTER LENGTH < | Finds fields with fewer characters than the specified length. This can be useful for finding short titles or SEO metadata. | Title (CHARACTER LENGTH <) 20 |
| CHARACTER LENGTH > | Finds fields with more characters than the specified length. This can help identify long descriptions or URLs. | Product Short Description (CHARACTER LENGTH >) 160 |
| REGEXP | Uses a regular expression to find specific patterns in a field. | SKU (REGEXP) ^[A-Z]{3}-[0-9]{4}$ |
| NOT REGEXP | Excludes records that match a regular expression pattern. | SKU (NOT REGEXP) ^[A-Z0-9]+$ |
| Word count > | Finds content fields with more words than the specified number. | Description (Word count >) 300 |
| Word count < | Finds content fields with fewer words than the specified number. This can help you find thin or incomplete product descriptions. | Description (Word count <) 50 |
| Contains duplicate values | Finds records that share the same value in a database column. | SKU (Contains duplicate values) |

### Other advanced search filters

- **Not contains keyword:** Exclude products containing a specific keyword in the title or content.
- **Find these IDs:** Pull a list of specific post IDs into the sheet.
- **Find these URLs:** Filter products by exact URLs or permalink slugs.
- **Date range:** Filter products published within a specific date range using the start and end date pickers.

### Combining Multiple Product Search Rules

You can combine multiple search parameters to narrow your results down to a specific segment of your catalog. WP Sheet Editor uses **AND** logic between conditions, so a product must meet every selected condition to appear in the spreadsheet.

- **Example 1:** A standard filter set to 
```
Product categories: T-Shirts
```

 combined with an advanced filter 
```
Stock = 0
```

 returns only out-of-stock T-shirts.
- **Example 2:** An advanced filter 
```
Manage stock (=) Yes
```

 combined with 
```
Backorders (=) No
```

 finds products that use inventory tracking and don’t allow backorders.

For example, suppose you want to find products that meet all of these conditions:

- **Keyword:** Sprite
- **Category:** Gear
- **Search on variations:** Yes
- **Status:** Published

![Configuring combined search parameters with keyword Sprite, category Gear, published status, and variations enabled](https://media.wpsheeteditor.com/wp-content/uploads/2026/09/11154127/combined-advanced-search.png)

The search then returns only the products and variations that match all of those conditions:

![Spreadsheet grid displaying WooCommerce products and variations matching the combined search criteria](https://media.wpsheeteditor.com/wp-content/uploads/2026/09/11154412/woocomerce-advanced-search-results.png)

## Save searches for one-click access

If you regularly use the same search criteria, you don’t need to configure the filters from scratch every time. WP Sheet Editor lets you [save your search criteria and run the same search again with one click](https://wpsheeteditor.com/how-to-save-personal-and-global-searches-in-wp-sheet-editor/).

![Saved searches popup in WP Sheet Editor for naming and storing recurring filter presets](https://media.wpsheeteditor.com/wp-content/uploads/2026/09/11154655/save-searches.png)

For example, you could save searches for:

- Out-of-stock products
- Products running low on stock
- Products in a specific category
- Products missing SKUs
- Duplicate SKUs
- Products with empty short descriptions
- Products with a specific SKU prefix

Saved searches can include both standard filters and advanced search rules. For example, you can save a combination such as 
```
Category = T-Shirts
```

, 
```
Stock <= 5
```

, and 
```
Manage stock = Yes
```

, then reuse those same conditions whenever you need to check that group of products.

Once a search is saved, you can select it from the saved searches dropdown and run it immediately. This is especially useful for recurring catalog maintenance tasks when you regularly need to check the same products.

## Export search results

After filtering your products, you can open the **Export** tool and download the search results as a CSV or Excel file.

Read our guide on [how to bulk export WooCommerce products with custom fields](https://wpsheeteditor.com/export-woocommerce-products-csv-custom-fields/).

## Bulk edit search results

You can also bulk edit fields for all the products returned by your search.

We have dozens of guides covering [how to bulk update your WooCommerce products](https://wpsheeteditor.com/blog/?s=&vg_tax%5Bfeature%5D=27&vg_tax%5Bplugin%5D=17).

You can download the plugin here:

[Download WooCommerce Products Spreadsheet Plugin](https://wpsheeteditor.com/buy-extension/?extension_id=778&utm_source=website&utm_medium=blog&utm_campaign=advanced-search-woocommerce-products#buy) - or - [Check the features](https://wpsheeteditor.com/extensions/woocommerce-spreadsheet/?utm_source=website&utm_medium=blog&utm_campaign=advanced-search-woocommerce-products)

### Do you need help?

		You can receive instant help in the live chat during business hours, or [you can contact us](https://wpsheeteditor.com/company/contact/) and we will help you via email.

---

