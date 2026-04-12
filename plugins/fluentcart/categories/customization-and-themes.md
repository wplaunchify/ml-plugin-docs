# Customization And Themes

*Category from FluentCart documentation*

---

## Advanced Customization with CSS Variables ​

**Source:** [https://docs.fluentcart.com/guide/customization-and-themes/advanced-customization-using-css](https://docs.fluentcart.com/guide/customization-and-themes/advanced-customization-using-css)

# Advanced Customization with CSS Variables ​

FluentCart provides a powerful set of CSS variables that let you customize the appearance of your store without writing complex CSS or modifying theme files. Whether you want to change button colors, adjust text styles, or completely transform the look of your checkout, CSS variables make it easy to match your brand.

## Quick Start ​

The fastest way to customize your store is by using the WordPress Customizer:

1. Go to **Appearance → Customize → Additional CSS**
2. Add your custom CSS variables
3. Click **Publish**

For example, to change all primary buttons to blue:

css
```
:root {
  --fct-btn-bg-color: #0066cc;
}
```That's it! All buttons across your store will now use this color.

## How CSS Variables Work ​

CSS variables (also called custom properties) are values you can define once and reuse throughout your site. FluentCart uses variables for colors, spacing, borders, and more. By overriding these variables, you can customize your store's appearance without touching the original code.

### Where to Add CSS Variables ​

You can add CSS variables in three ways:

1. **WordPress Customizer** (Recommended): Appearance → Customize → Additional CSS
2. **Theme CSS File**: Add to your theme's 
```
style.css
```
3. **Page Builders**: Use the Custom CSS section in Elementor, Bricks, or other builders

## Global Color Variables ​

These variables affect multiple pages at once, making them perfect for store-wide changes.

### Button Colors ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-btn-bg-color | #253241 | Primary button background |
| --fct-btn-text-color | #ffffff | Primary button text |
| --fct-btn-border-color | #253241 | Primary button border |

### Text Colors ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-primary-text-color | #2F3448 | Headings and important text |
| --fct-secondary-text-color | #565865 | Descriptions and body text |

### Background Colors ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-border-color | #d6dae1 | Input borders and dividers |
| --fct-primary-bg-color | #4f46e5 | Primary backgrounds |
| --fct-secondary-bg-color | #f9fafb | Secondary backgrounds |

### Input Colors ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-input-bg-color | #ffffff | Input background |
| --fct-input-text-color | #2F3448 | Input text |
| --fct-input-border-color | #d6dae1 | Input border |

**Example: Making all buttons blue**

css
```
:root {
  --fct-btn-bg-color: #0066cc;
  --fct-btn-border-color: #0066cc;
}
```
## Checkout Page Customization ​

The checkout page has its own set of variables for fine-tuned control.

### Checkout Buttons ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-checkout-btn-bg-color | --fct-checkout-primary-bg-color | Place Order button |
| --fct-checkout-btn-text-color | #ffffff | Button text |

### Checkout Form Elements ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-checkout-input-bg-color | #ffffff | Input background |
| --fct-checkout-input-text-color | theme('colors.system.dark') | Input text |
| --fct-checkout-input-border-color | --fct-checkout-border-color | Input border |

### Checkout Sections ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-checkout-summary-bg-color | #ffffff | Order summary background |
| --fct-checkout-payment-method-bg-color | #ffffff | Payment methods background |
| --fct-checkout-shipping-methods-bg | #ffffff | Shipping methods background |

**Example: Green checkout buttons**

css
```
.fct-checkout {
  --fct-checkout-btn-bg-color: #28a745;
}
```
## Product Card Customization ​

Product cards are used in the shop page, related products, and product grids.

### Card Styling ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-card-bg | #ffffff | Card background |
| --fct-card-border-color | #d6dae1 | Card border |

### Card Text ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-card-primary-text-color | #2F3448 | Product title |
| --fct-card-text-color | #565865 | Product description |
| --fct-heading-color | #2F3448 | Card headings |

### Card Buttons ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-card-btn-bg-color | #253241 | View Options button |
| --fct-card-btn-text-color | #ffffff | Button text |

**Example: Custom product card style**

css
```
.fct-product-card {
  --fct-card-bg: #f9f9f9;
  --fct-card-border-color: #e0e0e0;
  --fct-card-btn-bg-color: #0066cc;
}
```
## Product Buttons ​

FluentCart uses different button styles for "Add to Cart" and "Buy Now" actions.

### Add to Cart Button ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-add-to-cart-btn-bg-color | #ffffff | Button background |
| --fct-add-to-cart-btn-text-color | #2f3448 | Button text |
| --fct-add-to-cart-btn-hover-bg-color | #f5f6f7 | Hover background |
| --fct-add-to-cart-btn-border-color | #d6dae1 | Button border |

### Buy Now Button ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-direct-btn-bg-color | #253241 | Button background |
| --fct-direct-btn-text-color | #ffffff | Button text |

**Example: Custom button colors**

css
```
:root {
  --fct-add-to-cart-btn-bg-color: #f0f0f0;
  --fct-add-to-cart-btn-text-color: #333;
  --fct-direct-btn-bg-color: #0066cc;
}
```
## Cart Drawer Customization ​

The cart drawer (slide-out cart) can be customized independently.

### Drawer Colors ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-cart-drawer-bg | #ffffff | Drawer background |
| --fct-cart-drawer-border-color | #d6dae1 | Drawer border |
| --fct-cart-drawer-primary-text-color | #2F3448 | Primary text |
| --fct-cart-drawer-secondary-text-color | #565865 | Secondary text |

### Drawer Buttons ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-cart-drawer-btn-bg-color | #253241 | Action button |
| --fct-cart-drawer-btn-text-color | #ffffff | Button text |
| --fct-cart-drawer-open-btn-bg-color | #253241 | Cart icon button |
| --fct-view-cart-btn-bg-color | #253241 | View Cart button |

### Cart Badge ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-cart-drawer-badge-bg-color | #ef4444 | Badge background |
| --fct-cart-drawer-badge-text-color | #ffffff | Badge text |

**Example: Blue cart drawer**

css
```
.fct-cart-drawer {
  --fct-cart-drawer-btn-bg-color: #0066cc;
  --fct-cart-drawer-badge-bg-color: #ff6b6b;
}
```
## Customer Dashboard Customization ​

The customer dashboard (account page) has its own color scheme.

### Dashboard Text ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-customer-dashboard-primary-text-color | #2F3448 | Primary text |
| --fct-customer-dashboard-secondary-text-color | #565865 | Secondary text |
| --fct-customer-dashboard-title-color | #1f2937 | Page title |
| --fct-customer-dashboard-sub-title-color | #6b7280 | Section title |

### Dashboard Navigation ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-customer-dashboard-nav-text-color | #4b5563 | Nav item text |
| --fct-customer-dashboard-nav-active-text-color | #4f46e5 | Active nav text |
| --fct-customer-dashboard-nav-active-bg-color | #eef2ff | Active nav background |
| --fct-customer-dashboard-nav-active-bar-color | #4f46e5 | Active nav indicator |

### Dashboard Buttons ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-customer-dashboard-btn-bg-color | #4f46e5 | Action button |
| --fct-customer-dashboard-btn-text-color | #ffffff | Button text |
| --fct-customer-dashboard-logout-btn-bg-color | #ef4444 | Logout button |

**Example: Blue dashboard theme**

css
```
.fct-customer-dashboard {
  --fct-customer-dashboard-nav-active-bg-color: #0066cc;
  --fct-customer-dashboard-btn-bg-color: #0066cc;
}
```
## Shop Page Customization ​

Customize the main shop page appearance.

### Shop Text Colors ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-shop-primary-text-color | #2F3448 | Primary text |
| --fct-shop-secondary-text-color | #565865 | Secondary text |

### Shop Backgrounds ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-shop-primary-bg-color | #ffffff | Primary background |
| --fct-shop-secondary-bg-color | #f9fafb | Secondary background |

### Shop Buttons ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-shop-btn-bg-color | #253241 | Filter/Sort buttons |
| --fct-shop-btn-text-color | #ffffff | Button text |

### Shop Pagination ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-shop-paginator-bg | #ffffff | Pagination background |
| --fct-shop-paginator-items-color | #4b5563 | Page number color |
| --fct-shop-paginator-items-active-bg | #4f46e5 | Active page background |
| --fct-shop-paginator-items-active-color | #ffffff | Active page text |
| --fct-shop-paginator-items-hover-bg | #f3f4f6 | Hover background |

**Example: Custom shop theme**

css
```
.fct-shop-app {
  --fct-shop-btn-bg-color: #0066cc;
  --fct-shop-paginator-items-active-bg: #0066cc;
}
```
## Single Product Page Customization ​

Customize individual product pages.

### Product Page Text ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-single-product-primary-text-color | theme('colors.system.dark') | Primary text |
| --fct-single-product-secondary-text-color | theme('colors.system.mid') | Secondary text |

### Product Page Borders ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-single-product-border-color | theme('colors.gray.outline') | Element borders |
| --fct-single-product-active-border-color | theme('colors.primary.500') | Active borders |

### Quantity Selector ​

| Variable | Default Value | Description |
| --- | --- | --- |
| --fct-single-product-qty-bg | #eaecf0 | Quantity input background |
| --fct-single-product-qty-text-color | #2F3448 | Quantity text |

**Example: Custom product page**

css
```
.fct-single-product-page {
  --fct-single-product-qty-bg: #f0f0f0;
  --fct-single-product-border-color: #e0e0e0;
}
```
## Common Customization Examples ​

Here are some frequently requested customizations:

### Change All Buttons to Blue ​

css
```
:root {
  --fct-btn-bg-color: #0066cc;
  --fct-btn-border-color: #0066cc;
}
```
### Update Product Card Style ​

css
```
.fct-product-card {
  --fct-card-bg: #fafafa;
  --fct-card-border-color: #e0e0e0;
  --fct-card-btn-bg-color: #0066cc;
}
```
### Style the Checkout Page ​

css
```
.fct-checkout {
  --fct-checkout-btn-bg-color: #28a745;
  --fct-checkout-primary-bg-color: #28a745;
}
```
### Customize the Cart Drawer ​

css
```
.fct-cart-drawer {
  --fct-cart-drawer-btn-bg-color: #0066cc;
  --fct-cart-drawer-badge-bg-color: #ff6b6b;
}
```
### Update the Customer Dashboard ​

css
```
.fct-customer-dashboard {
  --fct-customer-dashboard-nav-active-bg-color: #0066cc;
  --fct-customer-dashboard-nav-active-text-color: #ffffff;
}
```
## Tips for Best Results ​

1. **Start Global**: Use 
```
:root
```

 for store-wide changes before targeting specific pages
2. **Be Specific**: Target specific pages (like 
```
.fct-checkout
```

) when you need granular control
3. **Test Thoroughly**: Check multiple pages after making changes to ensure consistency
4. **Use Browser DevTools**: Inspect elements to discover which variables affect specific elements
5. **Keep It Simple**: Only override the variables you need—most have sensible defaults

## Important Notes ​

- All CSS variables have fallback values built-in, so your store will still work if a variable is missing
- Variables can inherit from parent variables automatically
- Third-party library variables (like Swiper or Toastify) are not included in this guide
- For the most up-to-date list of variables, check the 
```
/resources/public/
```

 directory in FluentCart

## Getting Help ​

If you need help with CSS variables or encounter issues:

1. Check the [Troubleshooting & Support](/guide/troubleshooting-support/common-issues-faqs) section
2. Use browser DevTools to inspect elements and identify variables
3. Visit our [support forums](https://fluentcart.com/support) for community help
4. Contact our support team for advanced customization assistance

> Note: CSS customizations are theme-independent and will persist even if you switch themes, as long as FluentCart remains active.

---

## Customize Store with Bricks ​

**Source:** [https://docs.fluentcart.com/guide/customization-and-themes/customize-store-with-bricks](https://docs.fluentcart.com/guide/customization-and-themes/customize-store-with-bricks)

# Customize Store with Bricks ​

FluentCart works with the powerful **Bricks** theme & page builder, giving you complete creative control over your store's design. Instead of being limited to standard layouts, this integration adds a full set of FluentCart elements directly into the Bricks editor, allowing you to build everything from custom shop pages to unique single product layouts with a simple drag-and-drop interface.

This guide will show you how to use FluentCart's dedicated elements within Bricks.

## Getting Started ​

The integration is automatic. As long as you have both **FluentCart** and the **Bricks theme** installed and active on your site, you will find the FluentCart elements ready to use inside the Bricks editor.

### Building Your Main Shop Page ​

The easiest way to display your products is by using the main **Products** element.

1. Open any page with the Bricks editor.
2. Click the plus icon (**+**) to add a new element.
3. In the elements panel, scroll down to the **FluentCart** category and click the **Products** element.

![FluentCart Elements in Brick](https://docs.fluentcart.com/assets/bricks-1.B2pCGDOm.webp)

This will instantly add a beautiful, fully functional grid of your products to the page.

#### Customizing the Products Element ​

The real power comes from the customization options. After adding the **Products** element click on the element name in the right-hand panel, you can use the settings in the left-hand panel to control exactly how it looks and what it displays.

- **Content Settings**- **Layout:** Control the number of **Columns**, the **Gap** between products, and how many **Products per page** are shown.
- **Query:** This is a powerful feature that lets you choose which products to display. You can filter by **Product Categories**, or even **Include** or **Exclude** specific products by name. This is perfect for creating custom pages that feature "New Arrivals" or "Best Sellers."
- **Fields:** This allows you to reorder the different parts of the product card. You can drag and drop the fields to change the order of the product image, title, price, and button.
- **Style Settings** Under the **Style** tab, you have full control over the visual design. You can customize the Layout, Typography, Borders, and more to perfectly match the look and feel of your brand.

![Elements options in Brick](https://docs.fluentcart.com/assets/bricks-3.Dje4akbU.webp)

---

## FluentCart Shortcodes ​

**Source:** [https://docs.fluentcart.com/guide/customization-and-themes/fluentcart-shortcode](https://docs.fluentcart.com/guide/customization-and-themes/fluentcart-shortcode)

# FluentCart Shortcodes ​

Shortcodes are like "magic codes" that allow you to display your store's products, buttons, and pages anywhere on your WordPress site. Whether you are using a blog post, a custom landing page, or a sidebar, FluentCart shortcodes give you the flexibility to build your shop exactly how you want it.

### 1. The Product Catalog Shortcode ([fluent_cart_products]) ​

The 
```
[fluent_cart_products]
```

 shortcode is the easiest way to show a grid of products. It's perfect for your main shop page, a "Featured Products" section on your homepage, or a specific category gallery.

#### Basic Usage ​

To show your standard product list with default settings, simply use:

text
```
[fluent_cart_products]
```
#### Filtering by Product IDs ​

You can show specific products by passing one or more product IDs. This is useful when you want to highlight a handpicked selection of items on a landing page or a promotional section.

text
```
// Show a single product
[fluent_cart_products ids="433"]

// Show multiple products
[fluent_cart_products ids="344,346,347"]
```To hide certain products from the list, use the 
```
exclude_ids
```

 parameter:

text
```
// Exclude a single product
[fluent_cart_products exclude_ids="344"]

// Exclude multiple products
[fluent_cart_products exclude_ids="3595,3493"]
```> Note: If you pass an ID that does not exist (e.g., ids="999999"), no products will be displayed.

#### Filtering by Category ​

You can narrow the product list down to one or more categories. Categories can be referenced by their **slug** or their **term ID** — whichever is more convenient.

text
```
// Filter by a single category slug
[fluent_cart_products category="cloths"]

// Filter by multiple category slugs
[fluent_cart_products category="cloths,shoes"]

// Filter by a single category term ID
[fluent_cart_products category_id="9"]

// Filter by multiple category term IDs
[fluent_cart_products category_id="9,12"]

// Combine a slug and an ID together
[fluent_cart_products category="hoodies" category_id="8"]
```Category filters also work seamlessly with pagination. For example, the following shortcode shows two products per page with numbered pagination, and the category filter persists when your visitors navigate between pages:

text
```
[fluent_cart_products category="hoodies" per_page="2" paginator="numbers"]
```> Note: If you pass a category slug that does not exist (e.g., category="nonexistent-category-xyz"), the filter is ignored and all products are shown.

#### Filtering by Product Type & Sale Status ​

Use the 
```
product_type
```

 parameter to display only a specific type of product, or use 
```
on_sale
```

 to showcase discounted items.

text
```
// Simple products only
[fluent_cart_products product_type="simple"]

// Variation products only
[fluent_cart_products product_type="simple_variations"]

// Physical products only
[fluent_cart_products product_type="physical"]

// Digital products only
[fluent_cart_products product_type="digital"]

// Subscription products only
[fluent_cart_products product_type="subscription"]

// Only products currently on sale
[fluent_cart_products on_sale="yes"]
```> Tip: Empty parameter values (e.g., ids="", category="", product_type="") are safely ignored, so you don't have to worry about accidental blank values breaking your page.

#### Sorting Products ​

Control the order in which products appear using the 
```
sort_by
```

 parameter for common presets, or the 
```
orderby
```

 and 
```
order
```

 parameters for more granular control.

text
```
// Sort by price, ascending (using orderby + order)
[fluent_cart_products orderby="price" order="ASC"]

// Price low to high
[fluent_cart_products sort_by="price-low"]

// Price high to low
[fluent_cart_products sort_by="price-high"]

// Alphabetical A–Z
[fluent_cart_products sort_by="name-asc"]

// Newest first
[fluent_cart_products sort_by="date-newest"]

// Oldest first
[fluent_cart_products sort_by="date-oldest"]
```
#### Layout & Display ​

Adjust the number of columns and the view mode to match the look and feel of your page.

text
```
// Show products in a 3-column grid
[fluent_cart_products columns="3"]

// Limit to 6 products in a 3-column grid
[fluent_cart_products limit="6" columns="3"]

// 2-column grid view
[fluent_cart_products columns="2" view_mode="grid"]

// List view with 4 products per page and numbered pagination
[fluent_cart_products per_page="4" view_mode="list" paginator="numbers"]
```
#### Combining Parameters ​

The real power of the shortcode comes from mixing and matching parameters. Here are a few practical combinations:

text
```
// Paginate through specific products, one per page
[fluent_cart_products ids="433,434" per_page="1" paginator="numbers"]

// Specific products in a custom 3-column layout
[fluent_cart_products ids="433,434,435" columns="3" per_page="3"]

// Category products, exclude one, newest first
[fluent_cart_products category="hoodies" exclude_ids="433" sort_by="date-newest"]

// Digital products in 3 columns, sorted by price, 6 per page
[fluent_cart_products product_type="digital" columns="3" sort_by="price-low" per_page="6"]
```
#### Advanced Usage (Filters & Sidebar) ​

You can also enable a sidebar filter and configure it with JSON-based settings. Here is a version that shows 4 products with a sidebar filter:

text
```
[fluent_cart_products 
    per_page=4 
    live_filter='false' 
    enable_filter='true' 
    paginator='numbers' 
    custom_filters='{"enabled":true,"live_filter":true,"taxonomies":"product-categories,product-brands","price_range":"price_range"}' 
    filters='{"enabled":true,"sort_by":"name-desc"}'
]
```
#### Parameter Reference ​

| Parameter | Description | Default | Options |
| --- | --- | --- | --- |
| ids | Show only the products matching these IDs. Accepts a single ID or a comma-separated list. | — | Any valid product ID(s) (e.g., 433 or 344,346,347) |
| exclude_ids | Hide specific products from the list. Accepts a single ID or a comma-separated list. | — | Any valid product ID(s) (e.g., 344 or 3595,3493) |
| category | Filter products by one or more category slugs. | — | Comma-separated slugs (e.g., cloths or cloths,shoes) |
| category_id | Filter products by one or more category term IDs. | — | Comma-separated IDs (e.g., 9 or 9,12) |
| product_type | Show only products of a specific type. | — | simple, simple_variations, physical, digital, subscription |
| on_sale | Show only products that are currently discounted. | — | yes |
| sort_by | A quick preset for sorting products. | — | price-low, price-high, name-asc, date-newest, date-oldest |
| orderby | The field to sort products by (use with order). | — | price, name, date |
| order | Sort direction (use with orderby). | — | ASC, DESC |
| columns | Number of columns in the product grid. | — | Any number (e.g., 2, 3, 4) |
| limit | Maximum number of products to display. | — | Any number (e.g., 6, 10) |
| view_mode | Choose between a grid layout or a list layout. | grid | grid, list |
| per_page | How many products to show on one page. | 12 | Any number (e.g., 4, 8, 20) |
| paginator | The style of the page navigation at the bottom. | numbers | numbers, load_more, scroll, none |
| enable_filter | Show or hide the filter sidebar on the left/right. | true | true, false |
| live_filter | If "true," products update instantly as you click filters. | true | true, false |
| custom_filters | A list of settings to control category and price filters. | — | See JSON guide below |
| filters | Settings for how products are sorted (Name, Price, etc.). | — | See JSON guide below |

#### A Quick Look at Filter Settings (JSON) ​

**custom_filters object:**

- **enabled:** Set to 
```
true
```

 to show your custom category/brand filters.
- **live_filter:** Set to 
```
true
```

 for instant, "no-reload" updates.
- **taxonomies:** Tell the plugin what to show (e.g., 
```
"product-categories,product-brands"
```

).
- **price_range:** Include a price slider by adding 
```
"price_range"
```

.

**filters object:**

- **sort_by:** Choose how products appear first. Options include: 
```
name-asc
```

, 
```
name-desc
```

, 
```
price-asc
```

, 
```
price-desc
```

, or 
```
date-desc
```

.

---

### 2. Checkout Button Shortcode ([fluent_cart_checkout_button]) ​

This shortcode creates a button that sends customers straight to the checkout page or opens a quick "Buy Now" popup. It is perfect for landing pages and promotions where you want to make buying as fast as possible.

#### Basic Usage ​

text
```
[fluent_cart_checkout_button variation_id="113" instant_checkout="yes"]
```
#### Supported Attributes ​

| Attribute | Description |
| --- | --- |
| button_text | Changes what the button says. Example: button_text="Get it Now". (If left empty, it usually says "Checkout".) |
| variation_id | (Very Important) The ID of the specific item or size/color you want to sell. You must use the specific variation ID found in your product settings. |
| target | Decides where the link opens. Use _self for the same tab or _blank to open the checkout in a new window. |
| instant_checkout | If set to yes, the checkout will open in a popup modal. If set to no, it works like a normal link to the checkout page. |

#### Example Variations ​

- **Standard Link to Checkout:** 
```
[fluent_cart_checkout_button button_text="Go to Checkout" target="_self"]
```
- **One-Click "Instant" Purchase:** 
```
[fluent_cart_checkout_button variation_id="113" instant_checkout="yes" button_text="Buy Now"]
```

---

### 3. Add to Cart Button Shortcode ([fluent_cart_add_to_cart_button]) ​

This shortcode puts a simple "Add to Cart" button anywhere you want. Use this if you want customers to stay on the page and keep shopping after they click.

#### Basic Usage ​

text
```
[fluent_cart_add_to_cart_button button_text="Add to Cart" variation_id="113"]
```
#### Supported Attributes ​

| Attribute | Description |
| --- | --- |
| button_text | The text displayed on the button (e.g., "Add to Bag", "Grab One"). |
| variation_id | The ID of the product or specific option you want added to the cart. |

---

### 4. Mini Cart Shortcode ([fluent_cart_mini_cart]) ​

The Mini Cart shortcode allows you to display a small, convenient cart summary. It is perfect for headers or sidebars, letting customers see how many items they have and the total price at a glance.

#### Basic Usage ​

text
```
[fluent_cart_mini_cart cart_icon="bag" show_total_price="true"]
```
#### Supported Attributes ​

| Attribute | Description |
| --- | --- |
| cart_icon | Choose the style of your icon. Options: cart, bag, bag-alt. You can also use a custom SVG URL: cart_icon="https://example.com/icon.svg". |
| show_total_price | Set to true to show the current total amount next to the icon. |
| show_item_count | Decides when to show the number of items: always (shows even if 0), has_items (only when cart has items), never (hides count). |
| icon_color / price_color / product_count_color | Use hex codes to match your site's branding (e.g., icon_color="#cf2e2e"). |
| button_class | Add a custom CSS class if you want to apply your own specific styling to the cart button. |

---

### 5. Product Categories Shortcode ([fluent_cart_product_categories]) ​

This shortcode helps your customers browse your store by showing a list or a dropdown of your product categories.

#### Basic Usage ​

text
```
[fluent_cart_product_categories display_style="list" show_hierarchy="true"]
```
#### Supported Attributes ​

| Attribute | Description |
| --- | --- |
| display_style | Choose how the categories are presented: list (standard bulleted list) or dropdown (space-saving dropdown menu). |
| show_hierarchy | Set to true to show "parent" and "child" categories (indented). |
| show_empty | Set to true if you want to show categories even if they don't have any products yet. |
| show_product_count | Set to true to show the number of products next to each category name. |

### 6. Store Logo Shortcode ([fluent_cart_store_logo]) ​

Use this shortcode to display your store's branding logo anywhere on your site. It allows you to set a custom link and control the size of the image easily.

#### Basic Usage ​

text
```
[fluent_cart_store_logo is_link="true" logo_url="https://yoursite.com/logo.png" max_width="200"]
```
#### Supported Attributes ​

| Attribute | Description |
| --- | --- |
| logo_url | (Required) The direct URL link to your logo image file. |
| is_link | Set to true to make the logo clickable (usually linking to your homepage). Set to false for a static image. |
| link_target | Choose _self to open in the same tab, or _blank to open the link in a new tab. |
| max_width | Sets the maximum width of the logo in pixels (e.g., "300"). |
| max_height | Sets the maximum height of the logo in pixels (e.g., "200"). |

---

### 7. Customer Dashboard Button ([fluent_cart_customer_dashboard_button]) ​

This shortcode adds a button or link that allows logged-in customers to access their "My Profile" or "My Orders" area. It is perfect for your site's header or footer menu.

#### Basic Usage ​

text
```
[fluent_cart_customer_dashboard_button button_text="My Profile" display_type="link"]
```
#### Supported Attributes ​

| Attribute | Description |
| --- | --- |
| button_text | The text displayed on the link or button (e.g., "My Account", "Profile"). |
| display_type | Choose how it looks: link (simple text link) or button (styled button). |
| show_icon | Set to true to display a small user icon next to the text, or false to hide it. |
| link_target | Choose _self (same tab) or _blank (new tab). |

---

### 8. Product Title Shortcode ([fluent_cart_product_title]) ​

This shortcode allows you to display the name of a specific product anywhere on your page. This is extremely useful when building custom landing pages where you want to place the product name separately from the image or description.

#### Basic Usage ​

text
```
[fluent_cart_product_title product_id="123" is_link="true"]
```
#### Supported Attributes ​

| Attribute | Description |
| --- | --- |
| product_id | (Required) The ID of the specific product you want to display the title for. |
| is_link | Set to true to make the title clickable (links to the product page). |
| link_target | Choose _self (same tab) or _blank (new tab). |
| is_default | Set to true to use default styling, or false to inherit the surrounding text style. |

---

### 9. Product Image Shortcode ([fluent_cart_product_image]) ​

Similar to the Product Title shortcode, this lets you display the featured image of a specific product. You can use this to create custom layouts by placing the image in one column and the details in another.

#### Basic Usage ​

text
```
[fluent_cart_product_image product_id="123"]
```
#### Supported Attributes ​

| Attribute | Description |
| --- | --- |
| product_id | (Required) The ID of the specific product you want to display the image for. |
| is_default | Set to false to allow for custom sizing or styling via CSS, or true for standard output. |

---

### How to Implement ​

1. **Copy the code:** Select the shortcode configuration that fits your needs.
2. **Paste into WordPress:** Open any Page or Post in the Block Editor.
3. **Use a Shortcode Block:** Add a **Shortcode** block and paste the code.
4. **Publish:** Update your page to see your custom product grid in action.

> Tip: Use the per_page attribute to create small "Featured Products" sections on your homepage by setting it to a low number like 3 or 4.

---

## Layout and Template Customization (Block Editor) ​

**Source:** [https://docs.fluentcart.com/guide/customization-and-themes/layout-template-customization](https://docs.fluentcart.com/guide/customization-and-themes/layout-template-customization)

# Layout and Template Customization (Block Editor) ​

FluentCart allows for deep customization of your store's design. Whether you are using the native WordPress Block Editor, a Block Theme, or a third-party page builder, you have flexible tools to control exactly how your products appear.

## Advanced Layout Control: A Practical Example ​

The Products block is not just a static grid—it's a flexible container with smaller, nested blocks inside it. This allows you to completely change the layout of your product listings without any code.

### Example: Moving the Price Above the Image ​

Let's say you want to create a unique look for your shop by displaying the price before the product image.

1. Add the Products block to your page.
2. Select the block, and in the toolbar at the top of the editor, click the **List View** icon.
3. In the **List View** panel, expand the Products block to see its nested structure. You will find blocks like **Product Image**, **Product Title**, and **Product Price**.
4. Simply click and drag the **Product Price** block and move it above the **Product Image** block.

Just like that, you have changed the layout for every product in the grid. You can reorder, remove, or customize any of the inner blocks to create the perfect design for your store.

![Screenshot of List View](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/list-view.webp)

## Customizing Core Layouts with Templates (for Block Themes) ​

If you are using a modern, block-based WordPress theme, you can edit FluentCart's core templates directly. This gives you control over the fundamental design of your product and archive pages.

### Accessing FluentCart Templates ​

1. From your WordPress dashboard, go to **Appearance** > **Editor**.
2. In the Site Editor, select **Templates**.
3. Look for the FluentCart templates.

- **Single Product:** This template controls the design of your individual product pages. Edit this to change the layout of the product title, image, description, and price for all products at once.
- **Products by Category:** This template controls the design of your category pages (the pages that list all products in a category).

![Screenshot of FluentCart Templates](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/fluentcart-templates.webp)

## Integrating with Page Builders Bricks ​

FluentCart's blocks are also fully compatible with popular page builder Bricks. This allows you to seamlessly integrate FluentCart's e-commerce power with the advanced design capabilities of Bricks. You can use the FluentCart templates directly within the Bricks editor just as you would in the standard WordPress editor, giving you the best of both worlds.

For other builders that may not have direct block support, FluentCart also provides shortcodes as a flexible way to add product grids and buttons to any design.

TIP

You can always return later to make changes. The Block Editor is flexible, so feel free to experiment without worrying about messing up your layout.
### Save Your Changes ​

When you’re done making changes, click the **Save** button at the top right. Your customized template will now be live on your site.

---

## Theme & Page Builder Compatibility ​

**Source:** [https://docs.fluentcart.com/guide/customization-and-themes/theme-compatibility](https://docs.fluentcart.com/guide/customization-and-themes/theme-compatibility)

# Theme & Page Builder Compatibility ​

FluentCart is designed to be lightweight, flexible, and compatible with the vast majority of modern, well-coded WordPress themes and page builders. Our goal is to give you the freedom to choose the design and tools that you love, without being locked into a specific look.

Because FluentCart leverages native WordPress features like blocks and shortcodes, it integrates seamlessly into most environments.

## Officially Compatible Themes & Page Builders ​

While FluentCart should work well with almost any standard theme, we have officially tested and confirmed full compatibility with the following popular themes and page builders:

#### Popular Page Builders & Frameworks: ​

- Bricks
- Gutenberg

#### Popular Modern & Block-Based Themes: ​

- Divi
- Kadence
- Astra
- GeneratePress
- Blocksy
- Twenty Twenty-Five (and other default WordPress themes)
- Storefront
- OceanWP
- Hello Elementor
- FSE Block Theme

### What If My Theme Isn't on the List? ​

If your theme is not on this list, it is still very likely to be compatible with FluentCart, especially if it follows standard WordPress development practices.

FluentCart is built to be as theme-agnostic as possible. For any theme, you can use our powerful [FluentCart Blocks](/guide/customization-and-themes/using-gutenberg-blocks) in the WordPress editor or place our [shortcodes](/guide/settings-configuration/pages-setup) to display products, checkout forms, and customer dashboards. This ensures that you can build a fully functional and beautiful storefront, no matter which theme you choose.

---

## Translating FluentCart ​

**Source:** [https://docs.fluentcart.com/guide/customization-and-themes/translating-fluentcart](https://docs.fluentcart.com/guide/customization-and-themes/translating-fluentcart)

# Translating FluentCart ​

Making your store available in different languages helps you connect with a wider, global audience and provide a better shopping experience for your customers.

FluentCart is fully translatable, so you can change the button, label, and message to fit your needs. In this guide, we'll use the popular Loco Translate plugin to get this done.

### Step 1. Install the Loco Translate Plugin ​

First, you'll need to install the tool that will help you translate the plugin text.

1. Go to **Plugins → Add New** from your WordPress dashboard.
2. In the search bar, type "Loco Translate".
3. Find the plugin in the search results and click **Install Now**.
4. Once it's installed, click the **Activate** button.

![Activating the Loco Translate plugin from the WordPress plugins page.](https://docs.fluentcart.com/assets/loco-translate-activate.mKKBs23g.webp)

### Step 2. Translate FluentCart and FluentCart Pro ​

Now you are ready to start translating. It's important to translate both the free **FluentCart** plugin and the **FluentCart Pro** add-on for a complete translation.

1. Navigate to the new **Loco Translate** menu in your dashboard sidebar and click on **Plugins**.
2. You will see a list of all your installed plugins. Click on **FluentCart** to begin. (You will repeat these steps for **FluentCart Pro** later.)

![The Loco Translate plugins list](https://docs.fluentcart.com/assets/loco-translate-fluentcart.DgQcjJvu.webp)
3. Click the **+ New language** link to add your translation file.

![Clicking the 'New language' link in Loco Translate.](https://docs.fluentcart.com/assets/new-language.DZkZoE1X.webp)
4. On the next screen, you will need to configure your new language file.

- **Choose a language:** Choose the language that matches your WordPress General Settings language.
- **Choose a location:** Next, you need to decide where to save your translation files. You will see a few options.

INFO

We highly recommend choosing the "**Custom**" location. Files saved here are protected from being overwritten when you update the FluentCart plugin. If you choose the "Author" location, your custom translations could be lost during an update.1. Click the **Start translating** button.

![Select Language Location](https://docs.fluentcart.com/assets/select-language-location.Ddf2QsRi.webp)
2. You will now be on the editor screen. Here you'll see a list of all the English text ("Source text") from the plugin.

- Click on any English string from the list.
- In the box below (e.g., "Spanish translation"), type your translation.
- Click the **Save** button in the top left.
- Repeat this process for all the text you wish to translate.
3. Once you have finished translating the free version, go back to **Loco Translate → Plugins** and repeat the same steps for **FluentCart Pro** to ensure all features are translated.

![Clicking the Save button](https://docs.fluentcart.com/assets/save-button.BCGkDylx.webp)

### Step 3. Set Your WordPress Site Language ​

For your translations to appear, you must tell WordPress which language your website should use.

1. From your WordPress dashboard, navigate to **Settings → General**.
2. Find the **Site Language** dropdown menu.
3. Select your desired language from the list.
4. Scroll to the bottom of the page and click the **Save Changes** button.

![Setting the Site Language in WordPress General Settings](https://docs.fluentcart.com/assets/general-settings.Cvt0rrtN.webp)

### Previewing Your Translations ​

After you save a translation, you can instantly see the changes on your site. There’s no need to log out or refresh anything except the page you’re viewing.

For example, let’s say you translated the helper text for the **Store Name** field as shown below.

Now, go to **FluentCart Pro → Settings → Store Setup**. You’ll notice that the text under the Store Name field now appears in your translated language. You can use this same method to preview any string you translate.

![Viewing the successfully translated helper text in the FluentCart Store Setup settings.](https://docs.fluentcart.com/assets/previewing-translation.B348Tg47.webp)

### Keeping Your Translations Up-to-Date ​

When FluentCart is updated, new text strings might be added. To find and translate these new strings, simply open your language file in Loco Translate and click the **Sync** button. This will automatically add any new text to your list so you can translate it.

### Troubleshooting Common Issues ​

If your translations aren't behaving as expected, here are a few common issues and their solutions.

- **My translations are not showing up.**

- **Check Site Language:** Make sure the language you are translating into in Loco Translate is the *exact same* language you have set as the **Site Language** under **WordPress → Settings → General**.
- **Check File Location:** Ensure you saved your translation file in the **Custom** location (
```
languages/loco/plugins/
```

). If you saved it in the "Author" or "System" location, it may be overwritten or not loaded properly.
- **Clear Your Cache:** Your browser or a caching plugin might be showing an older, untranslated version of your site. Clear all caches and reload the page.
- **Some text is still in English (e.g., on the Checkout page).** This often happens with text that is saved to the database, like the names of payment methods or shipping options. If you set these up when your site was in English, they won't automatically change when you switch the site's language. To fix this, you must translate these items manually in the FluentCart settings where you created them.
- **Untranslatable Characters and Placeholders** You may see strings that contain special characters or codes like 
```
%s
```

, 
```
&
```

, or numbers. These are often dynamic placeholders that the system replaces with a value, like a name, a number, or a date. **Do not translate these placeholders.** Instead, include them in your translated sentence. For example, a source text of 
```
Auto renews on %s
```

 should be translated around the placeholder, like 
```
Se renueva automáticamente el %s
```

.

---

## Using Elementor Widgets ​

**Source:** [https://docs.fluentcart.com/guide/customization-and-themes/using-elementor-widgets](https://docs.fluentcart.com/guide/customization-and-themes/using-elementor-widgets)

# Using Elementor Widgets ​

Making a successful online store needs two things: a great look and the right tools. If you use Elementor to build your website, FluentCart gives you a set of built-in tools (widgets) that fit perfectly with your designs.

With these tools, you can simply drag and drop things like product lists, checkout forms, and buy now buttons anywhere on your site. You get full control over the design without needing to write any code.

## Turn on the Elementor Widgets ​

FluentCart starts with only the basics to keep your site fast. To use the Elementor tools, you need to turn them on first.

1. **Go to Settings:** In your WordPress dashboard, go to **FluentCart > Settings**.
2. **Open Features & Addons:** Click the **Features & addon** tab on the left.
3. **Find Plugin Addons:** Scroll to the bottom of the page to find the **Plugin Addons** section.
4. **Turn it On:** Find the **Elementor Blocks** card and click **Install & Activate**.

![Elementor Widgets](https://docs.fluentcart.com/assets/elementor-widget-1.Cr9nMUd4.webp)

Now, you will see a new "FluentCart" section in your Elementor editor.

## How to Find Your Widgets in the Editor ​

When you are editing a page with Elementor:

1. Open the **Elements panel** (click the grid icon in the top left).
2. Type "FluentCart" in the search bar, or scroll down until you find the **FluentCart** section.

You will see all the widgets listed below. Here is a fast look at all the FluentCart tools you can use in Elementor:

- Products
- Product Carousel
- Mini Cart
- Buy Now Button
- Add to Cart Button
- Product Categories List
- Checkout

![Elementor Widgets](https://docs.fluentcart.com/assets/elementor-widget-2.NxidQ731.webp)

### 1. Products Widget ​

This is the main tool for building your shop pages. It displays your inventory in a professional grid or list layout.

- **Content Tab:** Here you control the data and layout. - **General Settings:** Choose between Grid or List view, set how many products show per page, and pick a pagination style (like Infinite Scroll, Load More button, or standard Numbers).
- **Filter Settings:** You can enable a sidebar filter to let customers sort products by category or price.
- **Shop Layout:** Adjust grid columns and the order products appear in.
- **Product Card Layout:** You can customize your product from here.
- **Style Tab:** Here you change the look. You can customize the typography, change the color of product titles and prices, and adjust the spacing between grid items.
- **Advanced Tab:** Standard Elementor settings to adjust margins, padding, and mobile responsiveness.

![Elementor Widgets](https://docs.fluentcart.com/assets/elementor-widget-product-3.BxiRGm5q.webp)

### 2. Product Carousel ​

Use this to grab attention on your homepage. It creates a sliding row of products that is perfect for "Best Sellers" or "New Arrivals."

- **Content Tab:** Control how the slider behaves. - **Products:** Select your products from here.
- **Carousel Settings:** Set how many slides appear at once, enable Autoplay so it moves automatically, set the speed, and toggle Infinite Loop. Also, you can choose to show arrows or dots so users can swipe through products manually.
- **Card Layout:** From here customize the product card layout.
- **Style Tab:** You can change the size and color of the arrows and pagination dots to match your website's theme.
- **Advanced Tab:** Use this to add entrance animations or hide the slider on mobile devices if needed.

![Elementor Widgets](https://docs.fluentcart.com/assets/elementor-widget-product-carousel-4.DJBk_v24.webp)

### 3. Mini Cart ​

A compact icon usually placed in your website's header. It lets customers check their cart total without leaving the page.

- **Style Tab:** Customize the look under Cart Icon Style. - **States:** Style both Normal and Hover states independently.
- **Typography & Colors:** Full control over Typography, Text Color, and Icon Color.
- **Container Styling:** Set a Background Type (Classic or Gradient), define a Border Type, adjust Border Radius for rounded corners, and add a Box Shadow.
- **Advanced Tab:** Adjust the positioning (Margins/Padding) to align it perfectly with your other header elements.

![Elementor Widgets](https://docs.fluentcart.com/assets/elementor-widget-edit-mini-cart-5.zV2YydcL.webp)

### 4. Buy Now Button ​

A powerful shortcut for landing pages. This button skips the cart page and takes the customer straight to payment.

- **Content Tab:** Set up the link and behavior. - **Select Product Variation:** Search for and select the specific Product Variation (e.g., "Teal Green") you want to link to this button.
- **Button Text:** Enter the custom text you want displayed on the button (e.g., "Buy Now").
- **Enable Modal Checkout:** Toggle this to **Yes** to open the checkout form in a popup window on the same page. If **No**, the button will redirect the user to the standard checkout page.
- **Style Tab:** Style the button to look clickable. Change the background color, text color, typography, border radius, and add hover effects.
- **Advanced Tab:** Add margin or padding to position the button perfectly in your layout.

![Elementor Widgets](https://docs.fluentcart.com/assets/elementor-widget-buy-now-6.Cz63AMYz.webp)

### 5. Add to Cart Button ​

Similar to the Buy Now button, but it adds the item to the cart so the customer can keep shopping.

### 6. Product Categories List ​

Helps users navigate your store by showing a list of your different departments.

- **Content Tab:** Configure the display settings. - **Display Style:** Choose between a standard List or a space-saving Dropdown.
- **Show Product Count:** Toggle this to display the number of products available in each category.
- **Show Hierarchy:** Toggle this to display child categories nested underneath their parent categories.
- **Show Empty Categories:** Toggle this to display categories even if they currently contain no products.
- **Style Tab:** Adjust the list spacing, link colors, and typography for the category names.
- **Advanced Tab:** Standard positioning options.

![Elementor Widgets](https://docs.fluentcart.com/assets/elementor-widget-product-category-list-7.CCL7D2jT.webp)

### 7. Checkout Widget ​

This widget lets you place the checkout form on any page, giving you full design control over your sales funnel.

- **Content Tab:** Structure the form. - **General Settings:**- **Layout:** Choose between a **One Column** layout (great for focused landing pages) or a **Two Column** layout (standard for desktops).
- **Use Default FluentCart Styles:** Toggle this to **Yes** for a quick, clean look matching the plugin, or **No** to unlock full customization options in the Style tab.
- **Form Fields:** Customize the settings for input fields within the checkout form.
- **Order Summary:** Manage the display settings for the product summary and totals section.
- **Layout Options:** Fine-tune the spacing and structure of the checkout container.
- **Style Tab:** (Available if "Use Default FluentCart Styles" is set to **No**) This gives you granular control over the form fields, labels, buttons, and order summary box colors.
- **Advanced Tab:** Adjust the width, spacing, and mobile responsiveness of the checkout section.

![Elementor Widgets](https://docs.fluentcart.com/assets/elementor-widget-edit-checkout-8.CEY0AHL2.webp)

---

## Using Gutenberg Blocks ​

**Source:** [https://docs.fluentcart.com/guide/customization-and-themes/using-gutenberg-blocks](https://docs.fluentcart.com/guide/customization-and-themes/using-gutenberg-blocks)

# Using Gutenberg Blocks ​

FluentCart provides a powerful set of dedicated blocks for the WordPress block editor (Gutenberg), allowing you to build and customize your e-commerce pages with ease. Instead of being limited to predefined layouts, you can use these blocks to create a fully custom shop page, display specific products, and add e-commerce functionalities anywhere on your site.

This guide will walk you through the different methods you can use to design your shop, product, and checkout pages.

## Building with FluentCart Blocks ​

The easiest and most flexible way to build your store is with FluentCart's dedicated blocks. These act like building bricks, allowing you to add e-commerce features to any page or post in the WordPress editor.

### Accessing FluentCart Blocks ​

1. From your WordPress dashboard, open any **page** or **post**.
2. Click the **plus icon (+)** to open the block inserter.
3. Scroll down to find the **FluentCart** and **FluentCart Buttons** categories, or simply search for the block you need.

You will see all the blocks listed below. Here is a fast look at all the FluentCart tools you can use in Gutenberg:

- Products
- Product Title
- Product Description
- Product Search
- Product Carousel
- Customer Dashboard
- Product Card
- Product Image
- Sale Badge
- Product Info
- Price Range
- Mini Cart
- Buy Now Button
- Add to Cart Button
- Buy Section
- Checkout
- Product Categories List
- Excerpt

### 1. Products ​

This is the main tool for building your shop pages using the WordPress block editor. It displays your inventory in a professional grid layout.

- **Paginator:** Choose your pagination style, such as Scroll (for infinite loading) or Numbers (for standard pages). You can also use the slider to set how many products show up per page.
- **Product Grid Options:** Set the View Mode to Grid and pick a Price Format, such as "Starts From" for products with multiple prices. You can also adjust the Product Per Row to decide how many items sit side-by-side.
- **Filter Option:** You can toggle Enable Filter to let customers sort products easily. You can also turn on Default Filter to manage the starting order of your items.
- **Additional CSS Class(es):** Enter custom code here if you want to add unique styling to the product block.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/accessing-fluentcart-blocks.webp)

### 2. Product Title ​

This block displays the name of your product, pulling data automatically to keep your page accurate. It is a standalone tool, allowing you to place and style the title independently in your custom designs. Here you control how your product name behaves in the editor.

- **Settings:** Toggle Make title a link if you want customers to be able to click the product name to visit its specific page. You can also enable Open in new tab so customers don't lose the page they are currently browsing.
- **Typography & Alignment:** Use the block toolbar or sidebar to change the text alignment, adjust the font size, and pick a color that matches your brand.
- **Additional CSS Class(es):** Enter custom code here if you want to add unique styling or specific font effects to the product title.

### 3. Product Description ​

This block is used to display the full, detailed description of your product, providing customers with all the information they need to make a purchase. It pulls data directly from your product settings to ensure your site stays up to date automatically.

**Product Settings:** Use the settings tab (gear icon) to choose which product's details to show.

- **Select Product:** Click this button to search your inventory and pick the specific item whose full description you want to feature on the page.

**Style Tab:** Click the style tab (half-moon icon) to customize the visual look of your text.

- **Color:** You have granular control to set individual colors for the Text, the Background of the description area, and any Links included in the content.
- **Typography:** Adjust the Font Size (from Small to Extra Large) and Line Height to make sure your product details are easy for customers to read.
- **Dimensions:** Use the Padding and Margin sliders to perfectly space the description within your page layout.
- **Border & Shadow:** Add specialized borders or shadow effects to the description container to make the information pop.

**Additional CSS Class(es):** Enter custom code here if you want to add unique styling or specialized formatting to the product description block.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/product-description.webp)

### 4. Product Search ​

The Product Search block helps customers quickly find specific items in your store. Instead of browsing through many products, users can simply type what they’re looking for and get instant results.

You can add this block from the editor by selecting the magnifying glass icon under the FluentCart section.

**Block Settings:** When you click on the search bar in your editor, the right-hand sidebar gives you several options to control how the search behaves:

- **Searchbar Behavior:** Choose whether search results open in a New Tab or the Current Tab.
- **Category Filtering:** Enable this option to allow customers to filter their search by product categories.
- **Link With Shop App:** Turn this on to connect the search bar with your Shop App settings for a more integrated experience.
- **Advanced Settings:** Standard block options for layout and design customization.
- **Additional CSS Class(es):** Add custom CSS classes if you want to modify the search bar’s style, such as colors, borders, or width.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/product-search.webp)

### 5. Product Carousel ​

The Product Carousel block is a dynamic tool for highlighting your best-selling or newest items in an interactive, sliding row. It is perfect for homepages or landing pages where you want to showcase multiple products in a limited space without overwhelming your shoppers.

- **Product Selection:** Click the Select Product button to search for and pick the specific items you want to feature. You can easily manage your choices under the Selected products list.
- **Layout:** Use the Slides per view slider to decide exactly how many products sit side-by-side on the screen at one time (for example, setting it to 4).
- **Behavior:** This section gives you full control over the movement. You can toggle Autoplay for automatic sliding, enable an Infinite loop for continuous scrolling, and choose to Show arrows or Show Pagination (using styles like Fraction or Dots) to help customers navigate through your items.
- **Additional CSS Class(es):** Enter custom code here if you want to add unique styling, like specialized borders or shadow effects, to the carousel container.

> Tip: Use the Product Carousel block at the top of your homepage to highlight your best-selling items with high-quality imagery to grab attention immediately.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/product-carousel.webp)

### 6. Customer Dashboard ​

This block is the "home base" for your customers. It acts as a personalized portal where they can manage every part of their relationship with your store, from viewing past orders to updating their own addresses.

**Settings:** Here you can place the dashboard on any page to give your users instant access to their account.

**Layout:** In the editor, you will see the dashboard organized with a clean sidebar menu that helps customers navigate between different sections like their Purchase History, Licenses, and Downloads.

> Setup Tip: For this block to work correctly, you must ensure you have assigned the Customer Dashboard page under FluentCart Pro > Settings > Pages Setup.

**Key Sections Your Customers Will See:**

- **Purchase History:** A complete list of all past orders including unique identifiers like #INV-6, the date of purchase, and the current status (such as "Completed" or "Processing").
- **Subscription Plans:** A dedicated area where customers can view their active or canceled recurring plans and check upcoming renewal dates.
- **Managing Licenses:** Perfect for digital products, this section lets users see their license keys and how many sites they are currently using them on.
- **Downloads:** A central place for customers to find every digital file they have bought, such as e-books or software updates.
- **Profile & Address Settings:** This allows shoppers to keep their contact information and shipping addresses up-to-date without needing to contact your support team.
- **Additional CSS Class(es):** Use this section to add custom code if you want to change the colors or spacing of the dashboard to match your theme perfectly.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/customer-dashboard.webp)

### 7. Product Card ​

If you want to highlight one specific item on a special page—like a "Deal of the Day"—the Product Card block is the perfect tool. It puts a single product into a beautiful, standalone card that includes the featured image, price, and an "Add to Cart" button all in one neat package.

You can find this block in the FluentCart section of your editor, represented by a small card icon.

**Block Settings:** Here you can control exactly which product shows up and how the card is sized.

- **Product Selection:** Use the Product dropdown to search for and pick the specific item you want to feature.
- **Query type:** This determines how the block pulls information; leaving it on Default is usually best for a single card.
- **Price Format:** You can set the price to show as "Starts From," which is very helpful if the product has different versions with different prices.
- **Card Sizing:** You can fully control the size by choosing Custom Width and using the slider to make the card wider or narrower to fit your layout (e.g., setting it to 216 pixels).
- **Additional CSS Class(es):** Enter custom code here if you want to add unique styling, like special shadows or borders, to your product card.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/product-card.webp)

### 8. Product Image ​

This block allows you to showcase the visual identity of your products anywhere on your site. It renders the featured image of a specific product, making it an essential tool for building custom landing pages or highlighted product sections.

**Settings:** Here you can control which product visual appears in the block.

- **Query type:** Choose how the block identifies which image to display, such as using a Custom selection to pick a specific item.
- **Select Product:** Click this button to open a search and select the exact product whose image you want to feature.
- **Product Title:** This area displays the name of the product you have currently selected (e.g., "Perfume") so you can easily verify you've picked the right one.
- **Additional CSS Class(es):** Enter custom code here if you want to add unique styling, like custom borders, shadows, or hover effects to your product image.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/product-image.webp)

### 9. Sale Badge ​

The Sale Badge block is a must-have for any store looking to boost conversions by highlighting special deals. It automatically displays a label or a discount percentage over your items whenever they are on sale, making it easy for customers to spot a bargain at a glance.

**Badge Settings:** Use the settings tab (gear icon) to control how your promotional labels behave.

- **Badge Text:** Type in your own custom message like "Sale!", "Hot Deal", or "Clearance" to display when you aren't using percentages.
- **Show Discount Percentage:** Toggle this on to let the block do the math for you, showing customers exactly how much they save (e.g., -20%).
- **Percentage Format:** If you use percentages, you can customize their appearance using the {percent} placeholder.
- **Price Source:** Define which price the block should check to determine if a sale is active, such as the Default Variant.
- **Position & Style:** Choose your preferred Badge Style and set the Position to place the badge exactly where you want it on the product image, such as the Top Left.

**Style Settings:** Switch to the style tab (half-moon icon) to make your badges pop.

- **Color:** Manually set the Text and Background colors to match your theme or use a bright color like red to grab attention.
- **Typography:** Adjust the Font Size (ranging from Small to Extra Large) and Line Height for perfect readability.
- **Dimensions:** Use the Padding and Margin sliders to adjust the badge's size and its distance from the product card's edge.
- **Border & Shadow:** Add specialized borders or shadow effects to give your badges a professional, 3D look.
- **Additional CSS Class(es):** Enter custom code here if you want to add unique styling, like custom shapes or pulsing animations, to your sale badges.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/sale-badge.webp)

### 10. Sold Out Badge ​

This block displays a clear visual alert on products that are currently out of stock, helping you manage customer expectations at a glance. It automatically triggers based on your real-time inventory levels, ensuring shoppers always know which items are unavailable before they try to purchase.

**Settings:** Here you control the primary behavior and placement of the badge.

- **Badge Text:** Customize the message displayed when an item is unavailable, such as "Sold Out" or "Out of Stock".
- **Position & Style:** Adjust the placement of the badge on your product image (e.g., Top Left) and choose a visual style that stands out clearly against your product photos.

**Additional CSS Class(es):** Enter custom code here if you want to apply unique styling, such as custom colors or specialized font effects, to the sold-out label.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/sold-out-badge.webp)

### 11. Product Info ​

This block is used to display essential details about your product—such as the title, description, and price—in a clean and organized way. It acts as a central hub for pulling product data directly into your custom layouts or landing pages.

Here you control which product's information the block displays.

- **Query type:** This setting allows you to choose how the block identifies the product. Setting it to **Default** will automatically pull data from the product page it is placed on, while choosing **Custom** allows you to manually search for and select a specific item from your catalog.
- **Select Product:** If you choose a custom query, you can use the selection button in the editor to pick the exact product you want to showcase.
- **Additional CSS Class(es):** Enter custom code here if you want to add unique styling, such as custom borders or specific text colors, to the product information container.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/product-info.webp)

### 12. Price Range ​

This block is designed to showcase the cost of your products with automatic currency formatting. It is especially useful for variable products, as it can dynamically display the full price range (e.g., $5.00 - $8.00) to give customers a clear idea of the cost options.

- **Query type:** This setting determines which product's price is displayed. Using the **Default** setting will automatically pull the price from the product page it is placed on, while choosing **Custom** allows you to manually select a specific product from your inventory.
- **Additional CSS Class(es):** Enter custom code here if you want to add unique styling, such as specific font weights, colors, or spacing, to the price display.

### 13. Mini Cart ​

This block is a compact cart widget designed to let shoppers quickly view their cart items. It allows customers to see their item count and total price at a glance without needing to leave the page they are currently browsing.

**Block Settings:** Here you control the icon style and what information is displayed to the user.

- **Cart Icon:** Choose from three default shopping icons or provide a Custom Icon URL (SVG) to match your store’s unique branding.
- **Display Options:** Toggle the Display total price switch to show or hide the current value of the cart next to the icon.
- **Show Cart Item Count:** Define when the item counter bubble appears. You can set it to display Always, Only if cart has items, or Never.
- **Style Settings:** Switch to the style tab (half-moon icon) to customize the visual look. - **Color:** You have granular control to set individual colors for the Icon, the Price, and the Product Count.
- **Typography:** Adjust the Font Size (Small to Extra Large) and Line Height to ensure the text fits perfectly with your header's design.
- **Dimensions:** Use the Padding and Margin sliders to adjust the spacing around the mini cart for perfect alignment.

**Advanced:** Standard block settings to help with your custom page design.

- **Additional CSS Class(es):** Enter custom code here if you want to add unique styling, such as specialized hover animations or custom border effects.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/minicart-8.webp)

### 14. Buy Now Button ​

The Buy Now button is a powerful shortcut designed for landing pages to trigger an immediate purchase action. Instead of sending customers through the standard cart process, this block can be configured to take them directly to checkout or open a payment window on the same page.

**Product Settings:** Here you control the behavior and target of the button.

- **Enable Instant Modal Checkout:** Toggle this on to open the checkout form in a popup modal instead of navigating the customer to a different page.
- **Product Selection:** You can search for and select a specific product variation (e.g., "Teal Green") that this button will automatically assign to the customer's order.
- **Style Settings:** Switch to the style tab (half-moon icon) to customize the button's appearance.

- **Color:** You have full control over the Text and Background colors of the button.
- **Typography:** Adjust the Font Size (from Small to Extra Large) and Line Height to ensure your call-to-action is clear and readable.
- **Dimensions:** Use the Padding and Margin sliders to adjust the size of the button and its spacing within your layout.
- **Additional CSS Class(es):** Enter custom code here if you want to add unique styling, such as custom hover animations or specialized border effects.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/buy-now-8.webp)

### 15. Add to Cart Button ​

The Add to Cart button is a standalone tool that allows customers to add a specific product or variation to their cart while remaining on the same page. This is ideal for custom landing pages where you want to encourage multi-item shopping.

**Settings:** Use the settings tab (gear icon) to define which item the button targets.

- **Product Selection:** Click the Select Product button to search for and assign a specific product variation to this button.
- **Style Settings:** Switch to the style tab (half-moon icon) to customize the button's appearance.

- **Color:** You can manually set the Text and Background colors to match your brand's palette.
- **Typography:** Control the Font Size (ranging from Small to Extra Large) and Line Height to ensure your call-to-action is prominent.
- **Dimensions:** Use the Padding and Margin sliders to adjust the button's internal spacing and its external position within your design.
- **Border & Shadow:** Add depth to your button by configuring border styles or shadow effects.
- **Additional CSS Class(es):** Enter custom code here if you want to apply unique CSS styling, such as custom hover states or specialized animations.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/add-to-cart-9.webp)

### 16. Buy Section ​

This block acts as the functional hub of your product page. It brings together all the essential purchase elements—like price, quantity, and action buttons—into one convenient area for your customers.

**Settings:** You can control how the block identifies which product to display.

- **Query type:** Set this to **Default** to automatically pull details from the current product page, or choose **Custom** to manually select a specific item from your inventory.
- **Included Elements:** The block automatically renders the product price, a Quantity selector (with plus and minus buttons), and both Buy Now and Add To Cart buttons to provide a complete shopping experience.
- **Additional CSS Class(es):** Enter custom code here if you want to apply unique styling or specialized layout adjustments to the entire buy section container.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/buy-section-10.webp)

### 17. Checkout Page ​

This is the essential block that renders the secure checkout form for completing purchases. It provides a comprehensive, professional layout where customers enter their details and review their items before finalizing their order.

- **Customer Information:** Includes standard fields for Name and Email, plus a toggle for customers to **Create an Account?** while they check out.
- **Address Sections:** Provides organized areas for Billing Address and Shipping Address, complete with fields for street names, apartment details, and phone numbers.
- **Order Summary Sidebar:** Displays a clear breakdown of the purchase, including product variations, subtotals, shipping costs, and tax estimates.
- **Coupons & Terms:** Features a **Have a Coupon?** section for applying manual discounts and a checkbox at the bottom for customers to agree to your terms and conditions.
- **Additional CSS Class(es):** Enter custom code here if you want to apply unique styling to the checkout form, such as custom borders or specific background colors for the form fields.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/checkout-page-11.webp)

### 18. Product Categories List ​

The Product Categories List block helps your customers navigate your store by displaying an organized directory of your different product departments. This is a great way to improve your site's browsing experience and help shoppers find related items quickly.

**Block Settings:** Use the settings tab (gear icon) to configure how the list is structured.

- **Display Style:** Choose between a standard **List** format or a space-saving **Dropdown** menu.
- **Show product count:** Toggle this on to display the number of available products next to each category name (e.g., "Menswear (10)").
- **Show hierarchy:** When enabled, this will display child categories nested underneath their respective parent categories for better organization.
- **Show empty categories:** You can choose whether to hide or display categories that do not currently contain any products.
- **Style Settings:** Switch to the style tab (half-moon icon) to customize the visual appearance of the list.

- **Color:** You have separate controls to set the color for the Text and the clickable Links.
- **Typography:** Adjust the Font Size (ranging from Small to Extra Large) and the Line Height to ensure the list matches your website's design.
- **Additional CSS Class(es):** Enter custom code here if you want to add unique styling, such as custom bullet points or specialized hover effects for the category links.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/product-category-list-12.webp)

### 19. Excerpt ​

The Excerpt block is designed to display a brief summary or snippet of your product's description. It is an ideal tool for building custom shop layouts or landing pages where you want to provide a quick preview of an item without including the full description text.

Here, you can easily control the data source for the snippet.

- **Product Selection:** Use the Product dropdown in the settings panel to search for and pick the specific item whose summary you want to feature.
- **Style Tab:** Here you change the visual look to match your website's design.

- **Color:** You have granular control to set individual colors for both the Text and the Background.
- **Typography:** Adjust the Font Size (ranging from Small to Extra Large) and the Line Height to ensure the text snippet is clear and readable.
- **Dimensions:** Use the Margin slider to adjust the external spacing around the excerpt for perfect placement within your layout.
- **Additional CSS Class(es):** Enter custom code here if you want to apply unique styling, such as specific font weights or text effects, to the product excerpt.

![Screenshot of FluentCart Blocks](https://docs.fluentcart.com/images/customization-and-themes/using-fluentcart-blocks/excerpt.webp)

> Note: Each FluentCart block comes with its own customization settings. After adding a block, check the settings panel on the right to adjust design, alignment, behavior, and visibility.

---

