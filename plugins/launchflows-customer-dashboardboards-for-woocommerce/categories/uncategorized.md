# Uncategorized

*Category from LaunchFlows Customer Dashboardboards For WooCommerce documentation*

---

## Hide Out Of Stock & Back Ordered Products

**Source:** [https://launchflows.com/documentation/hide-out-of-stock-back-ordered-products/](https://launchflows.com/documentation/hide-out-of-stock-back-ordered-products/)

### Why This Is Done

When offering a product directly via a single product page, WooCommerce will notify a user that a product is not in stock by hiding the add-to-cart button and triggering a warning notice.

This prevents a buyer from attempting to place things into the cart that are not available to purchase at this time.

### What This Does

LaunchFlows provides a similar logic and level of notification for all the other places in a Sales Funnel where someone can now attempt to purchase. This includes [Order Bumps](https://launchflows.com/documentation/bumps-variations/), [Always In Checkout](https://launchflows.com/documentation/five-methods-for-selling/#always-in-checkout), and [Order Upsells](https://launchflows.com/documentation/upsells-downsells/).

### How It Works

If a product is offered for sale via any of the above LaunchFlows components, but the product is currently Out Of Stock or Back Ordered in WooCommerce, then two things will happen:

1) The product will be removed from the cart if it currently is present, and will be hidden from view so that the buyer cannot try to add it again to the checkout.

2) The admin will be presented with an onscreen notification that the product is in a sales funnel but is not available for buyers to purchase.

This provides a way to ensure that buyers are able to proceed with next steps (in most cases), but even if not, that the administrator can immediately check the available checkout processes to ensure that everything is working properly.

### Details

1) **Order Bumps –**The order bump component is hidden for any product not in stock

2) **Always In Cart –**The always in cart component is hidden from view and the product will no longer be added automatically to the checkout

3) **Upsells –** The “YES” option to add product will be hidden and replaced by a notification to the buyer that the product is no longer available. A translatable “Click To Proceed” button will be presented instead.

### Example Buyer View

![upsell-out-of-stock](https://launchflows.com/wp-content/uploads/2022/06/upsell-out-of-stock.jpeg)

### Example Admin View

![upsell-out-of-stock-admin](https://launchflows.com/wp-content/uploads/2022/06/upsell-out-of-stock-admin.jpeg)

---

## Hide Product Thumbnail In Order Review

**Source:** [https://launchflows.com/documentation/hide-product-thumbnail-in-order-review/](https://launchflows.com/documentation/hide-product-thumbnail-in-order-review/)

If you prefer not to view a product thumbnail when using the lf-review component inside any checkout, you can disable the output of the thumbnail using the global option in the LaunchFlows admin dashboard tab “Hide Product Thumbnail In LF Order Review Component”

![](https://launchflows.com/wp-content/uploads/2023/01/launchflows-hide-product-thumbnail.png)

![](https://launchflows.com/wp-content/uploads/2023/01/show-image-order-review.png)Before

![](https://launchflows.com/wp-content/uploads/2023/01/hide-image-order-review.png)After

---

## Remove Product Slug From URL

**Source:** [https://launchflows.com/documentation/remove-product-slug-from-url/](https://launchflows.com/documentation/remove-product-slug-from-url/)

### What?

Sometimes it is useful to remove the “/product” slug from the url structure of your WooCommerce products.

### Why?

This has the benefit of offering a cleaner permalink structure, where a product could be yourdomain.com/product-name instead of yourdomain.com/product/product-name.

WooCommerce does not allow this normally without custom coding.

### How?

Simply go into the LaunchFlows global settings menu and check the box to “Remove Product Slug From Permalink Of All Products”, then click “Save Changes” button on bottom of settings page.

![remove-product-slug-from-url](https://launchflows.com/wp-content/uploads/2022/06/remove-product-slug-from-url.png)

Be sure to go to WordPress Settings/Permalinks and click the “Save Changes” button there one time after enabling this option.

**Note-You can ignore the default permalink structure being shown in the WooCommerce section of that dashboard panel.*

---

## What Is LaunchFlows?

**Source:** [https://launchflows.com/documentation/what-is-launchflows/](https://launchflows.com/documentation/what-is-launchflows/)

### Thanks for choosing LaunchFlows!

The following guide covers basic and advanced features of the LaunchFlows plugin.

If you have questions or come across any problems, please contact our team. We will be happy to assist you.

### What is LaunchFlows?

LaunchFlows is a WordPress plugin that makes it easy to create powerful Sales Funnel features with WooCommerce.

No longer are you limited to a “shop” grid with individual sales pages, cart, and single checkout.

Instead, you can provide a custom user journey through your products or services in a manner that increases conversions and buyer satisfaction.

Best of all, no coding or design skills are required.

You only need to create a product, a checkout and a thank you page to get started!

### How It Works

LaunchFlows provides a fast and lightweight set of accessories to WooCommerce that amplify and improve the behavior of product, checkout and thank you pages, while enabling you full control (if you wish) to fully customize the layouts of all components you wish to display for your sales funnel ideas.

![How LaunchFlows Layouts Work](https://launchflows.com/wp-content/uploads/2020/12/how-launchflows-layouts-work.png)

### The Five Primary Features of LaunchFlows

LaunchFlows amplifies the capability of WooCommerce so you can easily do things that are not otherwise possible.

1) **Instant Registration** – Makes it fast and easy to obtain the Name and Email from every new visitor.

2) **Bumps & Variations** – Offer any combination of products before or at the point of checkout.

3) **Upsells & Downsells** – Offer any combination of products after checkout, to increase revenue per customer.

4) **Donations & Pay Now** – Makes it easy for donors or clients to pay you an exact amount with just one click.

5) **Thank You & Next Step** – Provides your buyers with a customized experience after their checkout is over.

---

## Install LaunchFlows

**Source:** [https://launchflows.com/documentation/how-to-install-launchflows/](https://launchflows.com/documentation/how-to-install-launchflows/)

LaunchFlows is a standard WordPress plugin that pursues the best practices and can be installed like any other plugin on your website. This means that the installation is relatively straightforward, and you are already familiar with it, making it easy for you to get started right away.

Currently, all updates are available via the [My Account](https://launchflows.com/my-account/) page of the LaunchFlows website.

The latest version of LaunchFlows is always available [through your account](https://launchflows.com/my-account/), and when the license is active, the dashboard will show you a notification indicating it requires an update.

.wp-block-kadence-column.kb-section-dir-horizontal > .kt-inside-inner-col > #kt-info-box_1478fc-1e .kt-blocks-info-box-link-wrap{max-width:unset;}#kt-info-box_1478fc-1e .kt-blocks-info-box-link-wrap{padding-top:var(--global-kb-spacing-xs, 1rem);padding-right:var(--global-kb-spacing-xs, 1rem);padding-bottom:var(--global-kb-spacing-xs, 1rem);padding-left:var(--global-kb-spacing-xs, 1rem);}#kt-info-box_1478fc-1e .kadence-info-box-icon-container .kt-info-svg-icon, #kt-info-box_1478fc-1e .kt-info-svg-icon-flip, #kt-info-box_1478fc-1e .kt-blocks-info-box-number{font-size:50px;}#kt-info-box_1478fc-1e .kt-blocks-info-box-media{color:#444444;background:transparent;border-color:#444444;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#kt-info-box_1478fc-1e .kt-blocks-info-box-link-wrap:hover .kt-blocks-info-box-media{color:#444444;background:transparent;border-color:#444444;}#kt-info-box_1478fc-1e .kt-blocks-info-box-learnmore{background:transparent;border-width:0px 0px 0px 0px;padding-top:4px;padding-right:8px;padding-bottom:4px;padding-left:8px;margin-top:10px;margin-right:0px;margin-bottom:10px;margin-left:0px;}
[Note: To streamline future updates, you may wish to install the free Easy Theme & Plugin Upgrades plugin from the WordPress repository. This will allow it to upload the latest copy of LaunchFlows without deactivating or deleting the prior version.](https://wordpress.org/plugins/easy-theme-and-plugin-upgrades/)

![](https://launchflows.com/wp-content/uploads/2020/03/quick-start-download-plugin-1.png)

You can install LaunchFlows on your dashboard by proceeding to Plugins > Add New. However, since LaunchFlows is a premium plugin, it will not be available on the Plugins directory.

![](https://launchflows.com/wp-content/uploads/2022/03/doc1_install-launchflows-1-1024x519.png)

Once you open Plugins > Add New, click on the button that reads Upload Plugin.

Proceed to click on the button that reads Choose file, and from your local environment, click on the zip file you have downloaded from your account, and select it to upload.

![](https://launchflows.com/wp-content/uploads/2022/03/doc2_install-launchflows-1-1024x216.png)

Then you can proceed to click on the button that reads Install Now, and the installation will begin. Typically, it will take a mere few seconds for the process to complete, and you will be able to see the page reloading, asking you to either Activate Plugin or go to Plugin Installer.

Here, please click on the button that reads Activate Plugin so that you can start using LaunchFlows right away.

![](https://launchflows.com/wp-content/uploads/2022/03/doc3_install-launchflows-1024x441.png)

You may access to LaunchFlows by clicking on the menu item on the left sidebar on your dashboard, on its name.

We strongly recommend that you click on the submenu where it reads License first to activate the plugin.

![](https://launchflows.com/wp-content/uploads/2022/03/doc4_install-launchflows-1024x303.png)

Above, you will notice that it displays a notification to either opt or not to allow us to collect non-sensitive diagnostic data and usage information. You may want to read more about the information we collect by clicking on the (what we collect) link.

Again, opting or not is entirely optional.

After activating your license, you may proceed to click on the menu item that reads LaunchFlows. In its turn, it will open the LaunchFlows features, which you can enable according to your specific needs.

To get a better notion of LaunchFlows features, you may want to explore our [Quick Start Guide](https://launchflows.com/documentation/quick-start/).

---

## Quick Start Guide

**Source:** [https://launchflows.com/documentation/quick-start/](https://launchflows.com/documentation/quick-start/)

### Installation

If you have not done so already, please install the following plugins:

- WooCommerce
- LaunchFlows

LaunchFlows offers a few global options you can setup from the main tab in the Admin Menu Bar of WordPress.

We suggest that you setup your LaunchFlows options as shown below:
![LaunchFlows Setup](https://launchflows.com/wp-content/uploads/2020/04/launchflows-setup.jpg)

### Setup WooCommerce Account

Most businesses will want to prevent people from using the Guest Checkout capability of WooCommerce so that tracking and automation are available for every buyer.

This will ensure that every buyer is automatically registered and logged-in to your site upon completing their first free or paid transaction.

To accomplish this, go to the Admin dashboard under the WooCommerce/Settings/Accounts & Privacy tab and check the options as shown in the image below.

![](https://launchflows.com/wp-content/uploads/2020/04/no-guest-checkout.jpg)

### Disable AJAX Add To Cart

Likewise, you will want to uncheck the WooCommerce option for “Enable AJAX add to cart buttons on archives”. This otherwise can result in unpredictable behavior with LaunchFlows and other WooCommerce plugins.

![disable-ajax-add-to-cart](https://launchflows.com/wp-content/uploads/2020/04/disable-ajax-add-to-cart.png)

.wp-block-kadence-advancedheading.kt-adv-heading8492_7ba224-3a, .wp-block-kadence-advancedheading.kt-adv-heading8492_7ba224-3a[data-kb-block="kb-adv-heading8492_7ba224-3a"]{font-style:normal;}.wp-block-kadence-advancedheading.kt-adv-heading8492_7ba224-3a mark.kt-highlight, .wp-block-kadence-advancedheading.kt-adv-heading8492_7ba224-3a[data-kb-block="kb-adv-heading8492_7ba224-3a"] mark.kt-highlight{font-style:normal;color:#f76a0c;-webkit-box-decoration-break:clone;box-decoration-break:clone;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;}.wp-block-kadence-advancedheading.kt-adv-heading8492_7ba224-3a img.kb-inline-image, .wp-block-kadence-advancedheading.kt-adv-heading8492_7ba224-3a[data-kb-block="kb-adv-heading8492_7ba224-3a"] img.kb-inline-image{width:150px;vertical-align:baseline;}

### Set Product Layout Capability

LaunchFlows provides an option to disable the product layout capability in the event you are already using another theme or plugin for this purpose. This will prevent you from having conflicting results on the WooCommerce single product pages. [Learn More Here](https://launchflows.com/documentation/disable-product-layout-capability/)

If you want to disable the LaunchFlows single product layout capability, simply go to the LaunchFlows tab of your admin dashboard, and click the checkbox for “Theme Compatibility” as shown below.

![Theme Compatibility](https://launchflows.com/wp-content/uploads/2022/03/theme-compatibility.jpg)

.wp-block-kadence-advancedheading.kt-adv-heading8492_74760d-6c, .wp-block-kadence-advancedheading.kt-adv-heading8492_74760d-6c[data-kb-block="kb-adv-heading8492_74760d-6c"]{font-style:normal;}.wp-block-kadence-advancedheading.kt-adv-heading8492_74760d-6c mark.kt-highlight, .wp-block-kadence-advancedheading.kt-adv-heading8492_74760d-6c[data-kb-block="kb-adv-heading8492_74760d-6c"] mark.kt-highlight{font-style:normal;color:#f76a0c;-webkit-box-decoration-break:clone;box-decoration-break:clone;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;}.wp-block-kadence-advancedheading.kt-adv-heading8492_74760d-6c img.kb-inline-image, .wp-block-kadence-advancedheading.kt-adv-heading8492_74760d-6c[data-kb-block="kb-adv-heading8492_74760d-6c"] img.kb-inline-image{width:150px;vertical-align:baseline;}

### Three Steps To Sales Funnels

LaunchFlows makes it easy to create unlimited Sales Funnels with this just three steps:

![](https://launchflows.com/wp-content/uploads/2020/11/three-steps.png)

### Step 1 – Create A Product

Click on the “Products / Add New” link in your admin dashboard and choose “Simple Product”.

![](https://launchflows.com/wp-content/uploads/2020/04/launchflows-get-started-new-product.jpg)

1) Give the product a name

2) Add Price Information

3) Click “LaunchFlows” Tab

4) Click the “Select Next Step Page” field.

5) Type the name of the page or post you want a buyer to be directed to after adding this product to the cart.

6) Click the “Select Post Checkout Page” field.

7) Type the name of the page or post you want buyer to be directed to after they have completed purchase (checkout) of this product.

8) Click “Publish”

![](https://colony-recorder.s3.amazonaws.com/files/2022-03-14/36256fb8-61ed-4c46-8bdf-0ca07e53fdbf/stack_animation.webp)

### Step 2 – Create A Checkout

You can create one global checkout template for all of your products or unique templates for each.

Create a new Page, Post, Product Or Lesson to hold your new checkout.

Click the “Add A Checkout To This Post” from the LaunchFlows Checkout Enable Metabox as shown below.

![launchflows add checkout metabox](https://launchflows.com/wp-content/uploads/2020/04/add-checkout-meta.jpg)
This will produce a standard WooCommerce checkout layout.

If you prefer you can [customize your checkout layout](https://launchflows.com/documentation/how-to-style-or-hide-components-with-block-editor/).

.wp-block-kadence-advancedheading.kt-adv-heading8492_39e3be-13, .wp-block-kadence-advancedheading.kt-adv-heading8492_39e3be-13[data-kb-block="kb-adv-heading8492_39e3be-13"]{font-style:normal;}.wp-block-kadence-advancedheading.kt-adv-heading8492_39e3be-13 mark.kt-highlight, .wp-block-kadence-advancedheading.kt-adv-heading8492_39e3be-13[data-kb-block="kb-adv-heading8492_39e3be-13"] mark.kt-highlight{font-style:normal;color:#f76a0c;-webkit-box-decoration-break:clone;box-decoration-break:clone;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;}.wp-block-kadence-advancedheading.kt-adv-heading8492_39e3be-13 img.kb-inline-image, .wp-block-kadence-advancedheading.kt-adv-heading8492_39e3be-13[data-kb-block="kb-adv-heading8492_39e3be-13"] img.kb-inline-image{width:150px;vertical-align:baseline;}

### Step 2a (optional) – Create An Order Pay Page

To ensure that you can have a clean payment option for manually created customer orders (or if customer has an issue paying and wants to come back from their my-account) be sure to create a standard page with WordPress, **with the url slug of “order-pay”.**

Then add the standard WooCommerce checkout shortcode to that page to make sure it will display the simple but required details of an order payment checkout (this is NOT a custom checkout). 

Use this shortcode on the “order-pay” page you create:

```
[woocommerce_checkout]
```

### Step 3 – Create A Thank You

Create a new page with your choice of design.

You may drop the LaunchFlows “Thank You” widget into this layout to show last-order information and more.

In WooCommerce/Settings, choose at least one of your Thank You Pages as the default.

(Note: You may create a custom Thank You page for each product or just use one for all products).

![](https://launchflows.com/wp-content/uploads/2020/04/quick-start-global-thank-you-1.png)

If you use a custom Thank You page for a product, be sure to choose this from the product setup using the “Select Post Checkout Page” dropdown.
![Thank You Page](https://launchflows.com/wp-content/uploads/2020/04/thank-you-page-1024x391.jpg)

### Step 4 – Test Your Checkout

Now test your new checkout by adding your product to the checkout with the **LF-Direct Checkout Link**.

In the sidebar of your product setup you will find a meta-box with the LF-Direct Checkout Link.

Add this link to any button or clickable element and your product will be sent to your checkout, ready to buy. Easy!![](https://launchflows.com/wp-content/uploads/2020/04/quick-start-direct-checkout-link.png)

---

## Shortcodes

**Source:** [https://launchflows.com/documentation/shortcodes/](https://launchflows.com/documentation/shortcodes/)

### When To Use Shortcodes

The best way to use LaunchFlows is with the built-in Gutenberg Block Editor. This is true even if you are using another page builder or theme for your main design.

In some cases, however, you may want/need to use Shortcodes for your sales funnel components. Or you may want to embed other components inside of an Elementor tab or toggle widget.

### Checkout Shortcodes

*Use On Any LaunchFlows Checkout Page*

**Account Fields**

```
[lf-account]
```

**Additional Fields**

```
[lf-additional]
```

**Always In Checkout** (**only product is required*)

```
[lf-always-in product="1234" icon="yes" title="yes" price="yes" shortdesc="yes"]
```

**Billing Fields**

```
[lf-billing]
```

**Apply Tags With WPFusion** (**separate tags with comma. Debug attr. shows message on front for admin.*)

```
[lf-apply-tags tags="123,567" debug="yes"]
```

**Autoclick Checkout**

```
[lf-autoclick]
```

**Bump or Variable Product Display**
(**only product is required.*) Click [here](https://lokesh-coder.github.io/pretty-checkbox/#basic-checkbox) to view optional styles.

```
[lf-bump product="1234" image="yes" title="yes" price="yes" style="p-round" shortdesc="yes"]
```

**Donation & Pay Now**

```
[lf-donate product="1234" field="Donate Big!" button="Do It Now!!"]
```

**Checkout Button (Hide) Display*Note-Add a new button with ID of #lf-checkout-button to replace this function**

```
[lf-checkout-button]
```

**First Product (in cart) Display**

```
[lf-first-product-display]
```

**Empty Cart Button Display**

```
[lf-emptycart]
```

**Empty Cart Via URL (add to end of LF-Direct Checkout link)**

```
&clearcart
```

**Hide Order Comments**

```
[lf-hide-order-comments]
```

**Login Display For WooCommerce**

```
[lf-login]
```

**Notices Display For WooCommerce***(***Be sure to position this in your layout where you would like page to scroll after any changes to the order review or in the event of errors*)

```
[lf-notices]
```

**Payment Fields**

```
[lf-payment]
```

**Redirect**

```
[lf-redirect url=https://xyz.com sec=0]
```

**Registration Form**

```
[lf-registration]
```

**Remove Product From Cart**

```
[lf-remove-product id="1234"]
```

**Remove Tags With WPFusion** (**separate tags with comma*)

```
[lf-remove-tags tags="123,567" debug="false"]
```

**Review Order Fields** (***all attributes are set to “yes” by default, so you can just add any you wish to change to “no”)

```
[lf-review remove="yes" image="yes" height="40px" width="40px" name="yes" quantity="yes"]
```

[Save Stripe Credit Card Automatically](https://launchflows.com/documentation/how-to-save-credit-cards-automatically/)

```
[lf-save-stripe-cc]
```

[Save Square Credit Card Automatically](https://launchflows.com/documentation/how-to-save-credit-cards-automatically/)

```
[lf-save-square-cc]
```

**Scroll To Checkout**

```
[lf-scroll-to-checkout style="button"]
```

**Scripts For LaunchFlows**
*(*Use this on any page where you need LF style or scripts but it is disabled or not otherwise available)*

```
[lf-scripts]
```

**Shipping Fields**

```
[lf-shipping]
```

**Thank You Fields**
(**only lf-thank-you is required to output all fields.*)

```
[lf-thank-you details="no" imagesize="100" image="no" name="no" quantity="no" price="no" desc="no" shortdesc="no" total="no" dividers="no"]
```

**Coupon Fields**
(**only lf-wccoupon is required to output closed coupon.*)

```
[lf-wccoupon closed="no"]
```

**Upsell Product**(**only product is required*)

```
[lf-upsell product="1234" next="5678" accept="Yes, I Want It!" accept_tags="123,456" decline="No Thanks..." image="yes" title="yes" price="yes"]
```

### Product Shortcodes

*Use Only On Single Product Sale Or Checkout Pages*
**Product Direct To Checkout Link**

```
[lf-product-link]
```

**Product Breadcrumb**

```
[lf-product-breadcrumb]
```

**Product Add To Cart Button & Quantity**

```
[lf-product-add-to-cart]
```

**Product Description**

```
[lf-product-description]
```

**Product First Payment Date**

```
[lf-product-firstpayment]
```

**Product Images**

```
[lf-product-images]
```

**Product Meta (Category, Tags, etc.)**

```
[lf-product-meta]
```

**Product Price (Regular or Sale)**

```
[lf-product-price]
```

**Product Related Products**

```
[lf-product-related]
```

**Product Tabs (Reviews, Ratings, etc.)**

```
[lf-product-tabs]
```

**Product Name**

```
[lf-product-name]
```

**Product Breadcrumbs (Kadence Theme Only)**

```
[lf-product-breadcrumbs]
```

**Product Extras (Kadence Theme Only)**

```
[lf-product-extras]
```

**Product Payments Block (Kadence Theme Only)**

```
[lf-product-payments]
```

### Special Checkout Shortcodes

*Use Only For Pages With Dynamic Content Blocks*
**LaunchFlows Checkout Form End**

```
[lf-checkout-form-start]
```

**LaunchFlows Checkout Form End**

```
[lf-checkout-form-end]
```

### Product Toggles

The **LaunchFlows Product Toggles** plugin enhances your WooCommerce store by allowing customers to add or remove products directly from any page using dynamic buttons, links, or checkboxes. This seamless experience keeps customers on the same page, improving user interaction and satisfaction.

#### Features

- **Dynamic Add/Remove Controls**: The interface adapts based on the product’s cart status, displaying “Add to Cart” or “Remove from Cart” accordingly.
- **Multiple Display Styles**: Choose from button, link, or checkbox styles to match your site’s design.
- **Hide Labels**: Optionally hide labels for links, buttons, or checkboxes.
- **Compatibility**: Supports both simple and variable products.
- **Customizable Labels**: Define custom text for add and remove states.
- **Developer-Friendly**: Easily extend functionality with unique CSS classes and custom styles.

---

#### Benefits

- **Enhanced User Experience**: Customers can manage their cart without navigating away from the current page.
- **Flexible Placement**: Insert toggle controls anywhere on your site using the shortcode.
- **Consistent Design**: Customize the appearance to align with your site’s branding.

---

#### Usage

To implement the cart toggle functionality, use the  shortcode with the following attributes:

- **id** (required): The product ID or variation ID to toggle.
- **style** (optional): Display style—
```
"button"
```

 (default), 
```
"link"
```

, or 
```
"checkbox"
```

.
- **add_label** (optional): Text for the “Add to Cart” state.
- **remove_label** (optional): Text for the “Remove from Cart” state.
- **hide_label** (optional): 
```
"yes"
```

 to hide labels or 
```
"no"
```

 (default) to display labels.
- **product_label** (optional): Adds a descriptive label after product name or variation
- **clearcart** (optional): 
```
"yes"
```

 to empty cart before new product is added

---

#### Examples

#### 1. Default Button Style

Displays a button that toggles the product in the cart.

```
[lf_cart_toggle id="123"]
```

#### 2. Custom Labels

Displays a button with custom labels for adding and removing the product.

```
[lf_cart_toggle id="123" add_label="Add Me" remove_label="Remove Me"]
```

#### 3. Link Style

Outputs a text link that toggles the product in the cart.

```
[lf_cart_toggle id="123" style="link"]
```

#### 4. Link Without Label

Outputs a plain link without any label.

```
[lf_cart_toggle id="123" style="link" hide_label="yes"]
```

#### 5. Checkbox Style

Displays a checkbox that dynamically toggles the product in the cart.

```
[lf_cart_toggle id="123" style="checkbox" add_label="Check to Add" remove_label="Uncheck to Remove"]
```

#### 6. Checkbox Without Label

Outputs a plain checkbox without any label.

```
[lf_cart_toggle id="123" style="checkbox" hide_label="yes"]
```

#### 7. Checkbox With A Custom Label In Cart, Checkout, Order Detail

Outputs your custom label after product added to cart

```
[lf_cart_toggle id="123" style="checkbox" hide_label="yes" product_label="Good Choice!"]
```

---

#### Styling

Each control includes specific CSS classes for customization:

- ```
.lf-toggle-button-add
```

: Applied when the product is not in the cart.
- ```
.lf-toggle-button-remove
```

: Applied when the product is in the cart.
- ```
.lf-product-[product_id]
```

: Unique identifier for each product instance.

---

#### Customization Example

To change the background color of the add and remove buttons, you can use the following CSS:

```
.lf-toggle-button-add {
    background-color: #008cba;
    color: #fff;
}

.lf-toggle-button-remove {
    background-color: #e74c3c;
    color: #fff;
}
```

---

#### Developer Notes

- **Extensibility**: Utilize the unique CSS classes and WooCommerce hooks to add custom functionality when controls are activated.
- **Shortcode Functionality**: The 
```
id
```

 attribute is mandatory to specify the product or variation ID. The plugin ensures clean URLs by removing query strings like 
```
add-to-cart
```

 and 
```
lf_remove_product
```

.

---

---

## Recommended Plugins & Services

**Source:** [https://launchflows.com/documentation/recommended-plugins-services/](https://launchflows.com/documentation/recommended-plugins-services/)

### What Are These?

The philosophy of LaunchFlows is to keep things super lightweight and simple, while avoiding any duplication of features already available elsewhere…especially in free plugins or services.

This page is a resource library for anyone using LaunchFlows to learn what we recommend to help achieve the goal of powerful Sales Funnels on WooCommerce.

This list is not comprehensive, only a starting point.

### Plugins

*(*paid vs free)*

[Temporary Admin Without A Password (for us to provide help)](https://wordpress.org/plugins/temporary-login-without-password/)

[Min and Max Quantity For WooCommerce](https://wordpress.org/plugins/minmax-quantity-for-woocommerce/)

[WooCommerce Checkout Fields Manager (recommended)](https://wordpress.org/plugins/woocommerce-checkout-manager/)

[WooCommerce Checkout Field Manager](https://wordpress.org/plugins/n-media-woocommerce-checkout-fields/)

[WooCommerce Checkout Field Editor](https://wordpress.org/plugins/n-media-woocommerce-checkout-fields/)

[*YITH Customize WooCommerce My Account](https://yithemes.com/themes/plugins/yith-woocommerce-customize-myaccount-page/)

[*WPFusion](https://wpfusion.com/)

[Simple Post Redirect](https://wordpress.org/plugins/simple-post-redirect/)

### How To Provide Login To Us For Support

If requested by us, please use this plugin to provide one time admin login via [email](mailto:help@launchflows.com):

[Temporary Admin Login Without Password](https://wordpress.org/plugins/temporary-login-without-password/)

---

## Hide Order Comments

**Source:** [https://launchflows.com/documentation/how-to-hide-order-comments/](https://launchflows.com/documentation/how-to-hide-order-comments/)

### Why?

In any standard checkout, the WooCommerce Additional Fields will be shown and inside of that are the Order Comment fields.

![hide-order-comments](https://launchflows.com/wp-content/uploads/2022/02/hide-order-comments.png)

### How?

If you wish to continue to use and relocate the Additional Fields component, but do not want to show the Order Comment fields inside (because you are adding some other custom fields instead, with the [Checkout Field Editor plugin](https://launchflows.com/documentation/recommended-plugins-services/)), then use this shortcode anywhere in your layout.

This works with any page builder including Gutenberg and Elementor.

### Shortcode

```
[lf-hide-order-comments]
```

**Login Display For WooCommerce**

---

## Customize The Single Product Layout

**Source:** [https://launchflows.com/documentation/customize-the-single-product-layout/](https://launchflows.com/documentation/customize-the-single-product-layout/)

### Why?

If you would like to create custom sales page or alternative layouts for your single products, this is is easy to do with LaunchFlows, using Shortcodes, Gutenberg Blocks or Elementor Widgets.

### When?

First you should decide whether you are already using a theme, plugin or page builder that accomplishes this function for you. If you are, then we advise you should disable the product layout capability with our global option as shown below.

![launchflows-disable-product-layout](https://launchflows.com/wp-content/uploads/2022/04/launchflows-disable-product-layout.png)

After you’ve enabled this global option, the single product data tab will shown a notification within the LaunchFlows submenu, as seen below:

![disabled-product-layout-notice](https://launchflows.com/wp-content/uploads/2022/04/disabled-product-layout-notice.png)

### How?

* First be sure you have NOT disabled the single product layout capability with the global option above

In order to use the single product layout capability, you want to go into the product data tab, in the LaunchFlows submenu, and choose one of the following from the Select Product Template dropdown:

1. Original Template – Displays the default product layout and cannot be changed with LaunchFlows
2. LF Default Template – Starts you with a default product layout page so you can move/hide components
3. LF Blank Template – Starts you with a blank page so you can add components
4. LF Template One (An Experimental Full Page Layout)
5. LF Template Two (A Second Experimental Full Page Layout)

![select-product-dropdown](https://launchflows.com/wp-content/uploads/2022/04/select-product-dropdown.png)

### Watch This Video

---

## Disable Product Layout Capability

**Source:** [https://launchflows.com/documentation/disable-product-layout-capability/](https://launchflows.com/documentation/disable-product-layout-capability/)

### What Does It Do?

This global setting for LaunchFlows provides a way to ensure that certain Themes (such as Thrive Themes) will act as the layout template for your single products instead of using LaunchFlows.

This option disables the ability of LaunchFlows to modify the single product layout, add checkout pages to the single product pages, or to enable the Gutenberg Block Editor (classic will remain active).

### When To Use?

Use this if you have a current theme or other plugin that implements a custom design on to the WooCommerce Single Product Pages.

### How To Use?

Go to the LaunchFlows tab of your admin dashboard, and click the checkbox for “Theme Compatibility” as shown below.

![Theme Compatibility](https://launchflows.com/wp-content/uploads/2022/03/theme-compatibility.jpg)

### Resources

[Watch This Video Demonstration](https://youtu.be/wrej3NjZP7Y)

---

## Send Product Directly To Checkout

**Source:** [https://launchflows.com/documentation/how-to-send-product-directly-to-checkout/](https://launchflows.com/documentation/how-to-send-product-directly-to-checkout/)

### What?

In this video you’ll learn about the LaunchFlows Direct Checkout link feature.

### Why?

This makes it super simple to send any product directly to the custom checkout of your choice from anywhere on the Internet, just by applying the special URL to any clickable element.

---

## One Page Product & Checkout

**Source:** [https://launchflows.com/documentation/how-to-product-sales-checkout-page/](https://launchflows.com/documentation/how-to-product-sales-checkout-page/)

### Who?

This solution is for anyone who has many products and wants to simplify and streamline the checkout of each one with a global sales page and checkout per product.

The side benefit is that marketing automation is easily customized to track the visits and purchase of these products on their own product pages without complicated code or cookies.

### What?

It’s easy to turn any product into it’s own sales page, with or without a custom checkout.

### How

First name the product and publish it so you’ll have the product page in the dropdown options for the next step someone should see after they add this product to the cart.

Then choose this product page from that dropdown.

Finally, setup the page someone should be directed to after checkout is compled.

Optionally, you can customize the layout of the product page with the Instant Clean Sales Page option and/or use one of the custom single product templates to allow you to add your own design and sales copy or to reconfigure the checkout components.

### Click To Watch Video

---

## Instant Simple Product Bundles

**Source:** [https://launchflows.com/documentation/instant-simple-product-bundles/](https://launchflows.com/documentation/instant-simple-product-bundles/)

### Description

To sell more than one product with a single LaunchFlows Checkout Link, simply add the additional products to the end of the ?add-to-cart=xxxx url of the first product, separated with a comma.

Instead of creating complicated variable or grouped products in WooCommerce, it’s far easier to make every product into a simple (one time or subscription) product.

### Use Case

As such, you can then make use of the LaunchFlows features to present and sell any product, at any time, with Marketing Automation.

### Example

Original product (ID# 1234) LaunchFlows Checkout Link (example):

https://yourdomain.com/your-checkout-page/?add-to-cart=1234

To Add Product #2, simple add a comma then the Product #2 (ID# 5678):

https://yourdomain.com/your-checkout-page/?add-to-cart=1234, 5678

### Video Popup

---

## Create Checkout Pages

**Source:** [https://launchflows.com/documentation/create-checkout-pages/](https://launchflows.com/documentation/create-checkout-pages/)

### Why Multiple Checkout Pages?

LaunchFlows makes it easy to turn any page or post type into a checkout page, including lessons, products or even mdia pages.

This provides you with an incredible amount of flexibility for selling products wherever and whenever you want.

### How Many Can I Create?

LaunchFlows allows you to create an unlimited number of checkout pages. This makes it easy to have a unique design or offers on a particular checkout page for a sale or type of buyer.

### Required Steps

1. Navigate to WordPress Admin Dashboard

2. Click Pages “Add New”. You can also create a checkout on any other post type, including posts, products, lessons, media page, etc.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/b6218ee1-b1fb-4015-a155-80f21c946a61/actions/81874cab-1a9d-4c57-895f-ee2737ccce7c/cropped_screenshot_$1637175364.jpeg)

3. Click the “Add title” field and give this checkout page a name. Suggest you use “Checkout” if this is the global default checkout page.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/b6218ee1-b1fb-4015-a155-80f21c946a61/actions/852492b4-6995-428c-83dd-5f098b592431/cropped_screenshot_$1637175366.jpeg)

4. Scroll down right side of page and find the LaunchFlows Checkout Enable option box. Click the checkbox for “Add A Checkout To This Post”.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/b6218ee1-b1fb-4015-a155-80f21c946a61/actions/286e151a-d1a8-4abd-998c-32f54186117d/cropped_screenshot_$1637175367.jpeg)

5. Click “Publish”

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/b6218ee1-b1fb-4015-a155-80f21c946a61/actions/45f3057e-4ba9-490f-b631-8e6689ebb2aa/cropped_screenshot_$1637175368.jpeg)

6. Click “View Page” To Inspect Your New Checkout Page.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/b6218ee1-b1fb-4015-a155-80f21c946a61/actions/0f831b4c-2be5-4c0b-b0b3-b8bb118d99ba/cropped_screenshot_$1637175369.jpeg)

---

## Bricksey Theme

**Source:** [https://launchflows.com/documentation/bricksey-theme/](https://launchflows.com/documentation/bricksey-theme/)

### Watch Video

---

## Divi

**Source:** [https://launchflows.com/documentation/divi/](https://launchflows.com/documentation/divi/)

### Does LaunchFlows Work With Divi?

Yes, it works quite well, and has the advantage of allowing you to “mix and match” between using Divi Theme and custom templates for your overall site, while optionally using Gutenberg Blocks and Patterns from our LaunchFlows pattern library for “one click” simplicity.

### Resources

[Divi Basics Post & Video](https://launchflows.com/woocommerce-sales-funnel-basics-for-divi)

[ElegantThemes](https://www.elegantthemes.com/)

---

## Elementor Style Or Hide

**Source:** [https://launchflows.com/documentation/how-to-style-or-hide-with-elementor/](https://launchflows.com/documentation/how-to-style-or-hide-with-elementor/)

If you prefer to customize your checkout layout, click the “Edit Elementor” button to design or use a new template.

LaunchFlows adds a library of new widgets to Elementor.

![](https://launchflows.com/wp-content/uploads/2020/04/launchflows-widgets.png)

Each widget represents either a **COMPONENT** or custom **FUNCTIONS** that you can freely reposition or restyle.

At a minimum, you should drag the components to your new layout, repositioning and styling each as you wish.

---

## GeneratePress

**Source:** [https://launchflows.com/documentation/generatepress/](https://launchflows.com/documentation/generatepress/)

### Tips

LaunchFlows works great with this theme, but when you are customizing a product page, you may need to add this snippet of CSS to your child theme or Customizer/Custom CSS Box to prevent the theme from hiding the product display area.

```
.theme-generatepress .product {
    display: block;
}

theme-generatepress .inside-article {
    overflow: hidden;
}
```

---

## Oxygen Builder

**Source:** [https://launchflows.com/documentation/oxygen-builder/](https://launchflows.com/documentation/oxygen-builder/)

### How To Setup

LaunchFlows has a native integration with Oxygen Builder that allows you to output the custom checkout layout of your choice from WP Gutenberg to a Code Block in Oxygen.

We recommend this instead of using individual LaunchFlows checkout components directly in Oxygen because it preseves the individual checkout component styling.

### Step One

Create and save a new checkout page in WordPress with the url of your choice.

### Step Two

Open Oxygen builder and add a Code Block to your structure.

### Step Three

Add this snippet to an Oxygen Code Block

#### Step Four (optional but recommended)

Create or import a custom layout of the LaunchFlows checkout components of your choice using Gutenberg blocks. This layout as a whole will be output to the Code Block inside of your Oxygen layout. If you don’t create a custom layout, you will see the default WooCommerce checkout layout.

![LaunchFlows Oxygen Layout With Gutenberg](https://launchflows.com/wp-content/uploads/2021/07/launchflows-oxygen-layout-gutenberg-scaled.jpg) ![Oxygen Code Block Snippet](https://launchflows.com/wp-content/uploads/2021/07/launchflows-oxygen-code-block-snippet-scaled.jpg)

### Click To Watch Video

---

## WPBakery Page Builder

**Source:** [https://launchflows.com/documentation/wpbakery-pagebuilder/](https://launchflows.com/documentation/wpbakery-pagebuilder/)

### How To Use

[WPBakery Page Builder](https://wpbakery.com/) works easily with LaunchFlows shortcodes or by integrating a Gutenberg editor block into a layout.

You may optionally use the [ShortCode Mapper](https://kb.wpbakery.com/docs/learning-more/shortcode-mapper/) to map all [LaunchFlows shortcodes](https://launchflows.com/documentation/shortcodes) to individual WPBakery elements, but as you’ll see in the video, you’re just recreating what already exists.

However, as you can see in the video below, *you may get getter results if you merely use native Gutenberg Blocks for all your Sales Funnel layouts*, even if you still use WPBakery elsewhere.

---

## Five Methods For Selling

**Source:** [https://launchflows.com/documentation/five-methods-for-selling/](https://launchflows.com/documentation/five-methods-for-selling/)

### What Are The Methods?

LaunchFlows provides many unique methods to offer products for sale, whether in a step-by-step sales funnel or single page checkout. Mix and match to create new and creative results for your business.

The **Five Methods** provided by LaunchFlows are:

1. Direct Checkout Link
2. Simple Product Bump
3. Variable Product Bump
4. Always In Checkout
5. Instant Sales Page

### Direct Checkout Link

When using LaunchFlows, each product created in WooCommerce has an option available in Classic & Gutenberg to send the product directly to the checkout page you’ve setup.

![](https://launchflows.com/wp-content/uploads/2021/01/five-ways-to-sell-copy-button.png)

After configuring the product via the LaunchFlows tab, simply click the “Copy” button to grab the Direct Checkout Link and then use it **anywhere you want to offer the product for sale**, such as:

- Multi Step Checkout Pages
- Sales Page Buttons & Links
- Facebook Ads or Groups
- Instagram
- Blog Posts
- Emails

### Simple Product Bump

![](https://launchflows.com/wp-content/uploads/2021/01/five-ways-to-sell-simple-bump.png)

When using LaunchFlows for a single or multi-step checkout experience, the **Single Product Bump** offers a way to add/remove a simple product with one click.

You can use this in combination with our **Return To Checkout** function to allow for placement of the component anywhere in your layout, while allowing page to scroll back to the same spot upon reloading.

Use as many components as you need to offer one or more products where any or all of them may be added or removed from the checkout.

### Solo Checkout Option

![solo-checkout-option](https://launchflows.com/wp-content/uploads/2021/01/solo-checkout-option.png)

This option will allow this product to be added to the cart and will remove ALL OTHER products from the cart that may exist. Use this for an upsell where you want to ensure that nothing else remains but the new upsell product. You could also use the [Empty Cart Shortcode or URL Syntax](https://launchflows.com/documentation/emptycart/#url-string) for a similar result.

### Variable Product Bump

The **Variable Product Bump** is used for situations where you want to only allow ONE variation to be purchased at a time from an array of product options.

It may be used either on the actual checkout page or on a separate sales funnel step prior to checkout.

### Always In Checkout

This component makes it easy to create a unique one-page checkout that ALWAYS has one or more products in the cart, ready to buy.

To make best use of this component, setup the following options as well:

- Create a new checkout page, with a unique url (page slug), so that the URL of the page can be used to directly sell any particular product(s)![](https://launchflows.com/wp-content/uploads/2021/01/custom-checkout-url.jpg)
- Add other optional product bumps/upsell offers to this unique checkout page![](https://launchflows.com/wp-content/uploads/2021/01/five-ways-to-sell-always-plus-bump.png)
- Disable the “remove product” option from the LaunchFlows Review component so buyers understand that product cannot be removed

![](https://launchflows.com/wp-content/uploads/2021/01/five-ways-to-sell-hide-remove-links.png)

### Instant Sales Page

![Instant Salespage](https://launchflows.com/wp-content/uploads/2021/01/instant-salespage.png)

LaunchFlows provides an easy and powerful way for you to use the single product display page as its own Sales Page inside of any funnel.

By checking the option on any product for “Instant Sales Page”, you accomplish the following:

- All unnecessary elements are removed from the Single Product Page, providing a blank canvas on which to customize a Sales Page
- There is no need to create additional pages, because it repurposes the existing single product page and URL that already exist
- For Variable Products, this makes it very easy to use 3rd Party WC plugins to customize the style & selection of options, prior to the checkout page
- Makes it easy to create a multi-step Sales Funnel step that can be daisy-chained into other content, such as a course lesson

![](https://launchflows.com/wp-content/uploads/2021/01/five-ways-to-sell-instant-sales-page-front-end.png)

### View Instant Sales Page Video

### Video Five Ways To Sell Video

---

## Toggle Coupon Redemption Field

**Source:** [https://launchflows.com/documentation/toggle-coupon-redemption-field/](https://launchflows.com/documentation/toggle-coupon-redemption-field/)

### What?

In some sales situations you should show the coupon redemption box in plain view, so that buyers know they need to enter a required code.

![](https://launchflows.com/wp-content/uploads/2022/06/toggled-coupon-field.png)

This is true, for example, with AppSumo type deal sites, such as our example [here](https://patterns.launchflows.com/deal-site-redemption/).

### How?

It’s as easy as using our LaunchFlows WooCommerce Coupon Component [lf-wccoupon] and adding the parameter of closed=”no”

**Coupon Fields**

(**only [lf-wccoupon] is required to output closed coupon.*)

```
[lf-wccoupon closed="no"]
```

### Video

We cover the step by step in this video

---

## Show A Loyalty Notice

**Source:** [https://launchflows.com/documentation/loyalty-notice/](https://launchflows.com/documentation/loyalty-notice/)

### Description

Displays a loyalty notice to any buyer who has made five (5) purchases.

### ShortCode

[lf-loyalty]

### Use Case

Place the [lf-loyalty] shortcode on a thank you page, my-account area page, or anywhere that you’d like to display gratitude to any buyer who has completed five (5) purchases.

The style and message may be customized using .css and .pot methods standard to WordPress.

### Example

Layout Example:

![](https://launchflows.com/wp-content/uploads/2020/02/lf-loyalty-layout-example.jpg)

Result Example:

![](https://launchflows.com/wp-content/uploads/2020/02/lf-loyalty-result-example.jpg)

---

## Sticky Checkout Components

**Source:** [https://launchflows.com/documentation/add-a-sticky-checkout-component/](https://launchflows.com/documentation/add-a-sticky-checkout-component/)

A “sticky” checkout component is an effective way to show a menu of available products to purchase or the order review, because it will always remain visible on the page, even if the rest of the content scrolls down.

### Create Two Columns

While you can do it with one column, this would lead to some content being blocked by the sticky component. Use two columns or more to avoid this issue.

### Add an Inner Section

![](https://launchflows.com/wp-content/uploads/2020/12/sticky-inner-section.png)

Drag an Elementor Inner Section Widget to either column.

![](https://launchflows.com/wp-content/uploads/2020/12/sticky-inner-widget.png)

Delete the second column of the Inner Section.

![](https://launchflows.com/wp-content/uploads/2020/12/sticky-inner-delete-column.png)

Then add a LaunchFlows Component such as Review, Order Bump, or Always In.

![](https://launchflows.com/wp-content/uploads/2020/12/sticky-order-review.png)

Style the Inner Section with a border or drop shadow to help it stand out more.

![](https://launchflows.com/wp-content/uploads/2020/12/sticky-component-border.png)

### Make it Sticky

Select the Inner Section Widget then click on the Advanced Tab of Elementor sidebar and scroll down to Motion Effects, and chooose Sticky and position of Top.

You may want to add an offset of 10px or more to give some space between the Inner Section and your header.

It is usually a good idea to only show this effect on Desktop and Tablet since a mobile device will show both columns as one and you don’t want to block content below the sticky Inner Section.

![](https://launchflows.com/wp-content/uploads/2020/12/sticky-component-motion-effect.png)

Update the Elementor Layout and you’re done!

### Video

---

## Auto Click (One Click) Checkout

**Source:** [https://launchflows.com/documentation/how-to-auto-click-one-click-checkout/](https://launchflows.com/documentation/how-to-auto-click-one-click-checkout/)

### What Is It?

Just like Amazon and other popular shopping sites, you can offer one-click checkout for any buyer unders certain circumstances.

This feature will present the buyer with an attractive overlay that indicates checkout is proceeding without the need for them to further add payment information or click the “Place Order” button.

### How Does It Work?

Simply by adding the shortcode or widget to the TOP of any LaunchFlows checkout page or post, a buyer directed to that page as part of a sales funnel will be prevented from seeing the checkout components below while the component auto-clicks the normal WooCommerce checkout button in the background and initiates a checkout.

![LaunchFlows Autoclick Checkout](https://launchflows.com/wp-content/uploads/2021/08/launchflows-one-click-checkout-display.jpg)

### When To Use?

This option requires that the buyer has already been registered,is currently logged-in to the site, and has a valid payment method on file that is setup as the first choice in WooCommerce payment methods.

Similarly, the product being purchased with this method should be something that is otherwise unique and not offered to buyers who would not meet these three conditions.

In the event that someone is directed to an Auto Click Checkout and the conditions are not met, then after a couple seconds the normal WooCommerce notice will appear to inform buyer that something is missing or needs attention.

While this would still allow the checkout to proceed, it is not an ideal result vs. ensuring that you’ve setup the use of this feature in situations that are most likely to result in success.

### Setup

Simply create a regular LaunchFlows checkout page with the default layout, and then add a new section to the top of that layout with your page builder or Gutenberg.

It is best if you can make this top section with a vertical height of 100vh (full height) so that it fills the screen of the buyer with a blank space.

Then add the shortcode below or use the Elementor widget or Gutenberg block for “lf-autoclick”, as shown in the image below (with Elementor for example)

### Shortcode

```
[lf-autoclick]
```

### Elementor Widget

![LaunchFlows Auto Click Checkout Display](https://launchflows.com/wp-content/uploads/2021/08/launchflows-one-click-checkout-setup-scaled.jpg)

---

## Automatically Save Stripe Card Info

**Source:** [https://launchflows.com/documentation/auto-save-stripe-credit-card-info/](https://launchflows.com/documentation/auto-save-stripe-credit-card-info/)

### What It Does

Easily save the credit card payment method used in any Stripe checkout while simultaneously hiding the option and notice to save.

### Where To Use

Use this on the first paid product you offer to a buyer so that you can instantly and automatically save their preferred credit card. Works any time someone chooses to use a new payment method in Stripe.

### Elementor Setup

SETUP ON CHECKOUT LAYOUT:

First, drag and drop the LaunchFlows Payment Widget into your layout. The controls for auto saving Stripe Credit Card are part of that widget.

If you are not creating a custom layout, then use the Shortcode below, which will not require you to do any further customizing of the default WooCommerce layout you are using.

![Auto Save Stripe Card Info](https://launchflows.com/wp-content/uploads/2020/06/auto-save-stripe-card-info-1.png)

FRONT END RESULT:

![](https://launchflows.com/wp-content/uploads/2020/06/auto-save-cc-front-end.jpg)

### Shortcode

If you don’t have Elementor, use the shortcode below and it will enable the auto-save by default on any page where it is used.

**[lf-save-stripe-cc]**

### Popop Video

---

## Gutenberg & Kadence

**Source:** [https://launchflows.com/documentation/how-to-create-with-gutenberg-kadence/](https://launchflows.com/documentation/how-to-create-with-gutenberg-kadence/)

### What Is Being Created

An example of a single page acting as the sales page and checkout, but built using Gutenberg blocks, along with the free Kadence theme, Kadence Blocks and Kadence Starter Templates.

In this case, instead of using the free Elementor plugin, you can watch how easy it is to use a few shortcode blocks, with the LaunchFlows checkout components you want to display, added to a ready-to-use Kadence Starter template page. Fast, Easy and Amazingly Powerful!

Please see video below:

### Watch Video

---

## Variable Product Links

**Source:** [https://launchflows.com/documentation/how-to-create-checkout-links-for-variable-products/](https://launchflows.com/documentation/how-to-create-checkout-links-for-variable-products/)

### Description

With variable products, the syntax to send any particular variation directly to your custom checkout requires you to change the id from the main product to the variation id instead.

### Use Case

You need to change the id of the main variation product to instead **use the id of the variation** you want to send to the checkout

You can also create an Instant Simple Product Bundle by using multiple variation id’s separated by a comma. [See More Info Here](https://launchflows.com/documentation/instant-simple-product-bundles/).

### Example

*/your-custom-checkout-page/?add-to-cart=xxxx   where “xxxx” equals the***id of the variation**

You may optionally specify an initial quantity as well by adding this to the end of the string.

*/your-custom-checkout-page/?add-to-cart=xxxxx&quantity=2*

---

## Empty The Checkout Cart​

**Source:** [https://launchflows.com/documentation/emptycart/](https://launchflows.com/documentation/emptycart/)

There are four ways to empty a product or a whole cart within a LaunchFlows checkout.

### Remove Product Link

This remove product link is added by the LaunchFlows Order Review component, whether by way of the Widget or Shortcode.

![](https://launchflows.com/wp-content/uploads/2020/02/emptycart-product-remove.png)

If you are using the Widget, you have the option to hide the Product Remove Links.

![](https://launchflows.com/wp-content/uploads/2020/02/emptycart-product-remove-options.png)

### URL String

To empty all products in the cart, add this string to the end of any **LaunchFlows Checkout Page url**.

```
?emptycart=yes   (or use & if following another parameter) ?add-to-cart=1234&emptycart=yes
```

#### Example

```
https://yourdomain.com/custom-checkout/?emptycart=yes
```

### Widget

You may use the LaunchFlows Emptycart Widget within Elementor. Simply drag into your layout and style with the widget controls

![](https://launchflows.com/wp-content/uploads/2020/02/emptycart-widget.png)

![](https://launchflows.com/wp-content/uploads/2020/02/emptycart-widget-setup.png)

### Shortcode

You may use the LaunchFlows Emptycart Shortcode within the WordPress Editor (Classic or Gutenberg).

**Empty Cart Button Display**

```
[lf-emptycart]
```

![](https://launchflows.com/wp-content/uploads/2020/02/emptycart.png)

### Video

---

## Force Redirect To Thank You Page

**Source:** [https://launchflows.com/documentation/how-to-force-thank-you-page/](https://launchflows.com/documentation/how-to-force-thank-you-page/)

### What It Does

Provides a way to force the Thank You Page option for any particular product to override the Global Thank You Page option of LaunchFlows whenever more than one product has been purchased.

### How To Use

Simply check the “Force Thank You” checkbox in the product that has the Thank You Page choice you would like to use whenever that product has been purchased.

*Note – Only use this option on ONE product (variable or simple) in any checkout sales flow. If you use it on more than one, the outcome of which page will depend on what product is first in the checkout and results will be unpredictable.

![Force Thank You Page](https://launchflows.com/wp-content/uploads/2021/04/force-thank-you-page.png)

---

## Hide Any Component

**Source:** [https://launchflows.com/documentation/how-to-hide-any-component/](https://launchflows.com/documentation/how-to-hide-any-component/)

### What Is This?

Sometimes you may wish to hide one or more of the standard checkout or product components from being visible on the front end.

A popular example of this is to hide the “Order Notes” (Additional) checkout fields.

Since LaunchFlows displays all standard components unless you relocate or hide them, use this method to hide any component.

### Hide Blocks

In Gutenberg blocks, you can add “**lf-hide**” (without quotes) to the Advanced/Additional Class(es) box for any widget.

![LF Hide CSS](https://launchflows.com/wp-content/uploads/2021/09/lf-hide-css.jpg)

If you are using the free [Editor Plus](https://wordpress.org/plugins/editorplus/) plugin for Gutenberg:

a) First, click the three dots to the right of your LaunchFlows block and select “Group”, to turn block into a Group Block

![Hide Turn Into A Group Block](https://launchflows.com/wp-content/uploads/2021/09/hide-turn-into-group.jpg)

b) Second, select the block to hide then click the “Extras” tab on right side, and from the dropdown choose Display “None”

![Hide With Editor Plus](https://launchflows.com/wp-content/uploads/2021/09/hide-with-editor-plus.jpg)

c) The component will change colors to light grey to reflect that it is hidden.

![Hide Extras Color](https://launchflows.com/wp-content/uploads/2021/09/hide-extras-color.jpg)

### Hide Shortcodes

To hide any shortcode, simply wrap them with the following syntax:

```
<span style="display:none">[shortcode goes here]</span>
```

### Hide Billing or Order Review Titles

To hide the title of the Billing or Order Review Components in Gutenberg blocks, you can add “**lf-hide-title**” (without quotes) to the Advanced/Additional Class(es) box for any widget.

![lf-hide-title](https://launchflows.com/wp-content/uploads/2021/09/lf-hide-title.jpg)

### Hide Shortcodes Titles (for Billing or Order Review Components Only)

To hide any shortcode, simply wrap them with the following syntax:

```
<span class="lf-hide-title">[shortcode goes here]</span>
```

### Hide Elementor Widgets

Simply slide the option toggle to “hide” any Elementor Component Widget. The component will change colors to red in the editor to reflect it is hidden.

![Hide Elementor Widgets](https://launchflows.com/wp-content/uploads/2021/09/hide-with-elementor-scaled.jpg)

### Resources

[Watch This Video](https://launchflows.com/how-to-hide-any-woocommerce-checkout-component/)

---

## Redirect To Checkout After Login

**Source:** [https://launchflows.com/documentation/how-to-redirect-back-to-checkout-after-login/](https://launchflows.com/documentation/how-to-redirect-back-to-checkout-after-login/)

### What Is Problem?

If you have a custom checkout page and a buyer needs to login, WooCommerce will redirect them to the global checkout page instead of your custom checkout page where they were intending to buy.

### Solution

Install the free [Previous Page Redirect For WooCommerce](https://wordpress.org/plugins/previous-page-redirect-for-woocommerce/) plugin.

This will remember the last (checkout) page the buyer was on and redirect them back there instead of the global checkout page.

### Alternate Code Solution

If you prefer, you can add this function to your child theme functions.php (or snippets plugin) to achieve similar result (don’t use with plugin!)

---

## Relocate The Place Order Button

**Source:** [https://launchflows.com/documentation/how-to-relocate-place-order-button/](https://launchflows.com/documentation/how-to-relocate-place-order-button/)

### Why Do This?

There are times when you would like to relocate (and replace) the default WooCommerce “Place Order” button to relocate it to a different place in your custom checkout layout.

### With Elementor

Go into the LaunchFlows Payment widget and enable the “Hide Default Place Order Button” switch.

![LaunchFlows Hide Default Place Order Button](https://launchflows.com/wp-content/uploads/2020/05/launchflows-hide-default-place-order-button-elementor.jpg)

Next, add a new LaunchFlows Place Order Button widget wherever you desire in your layout. Style the new button to your tastes.

![LaunchFlows Add New Place Order Button](https://launchflows.com/wp-content/uploads/2020/05/launchflows-add-new-place-order-button-elementor.jpg)

### With Shortcodes

Hide the default WooCommerce place order button by adding the following shortcode to the bottom of your layout, so it does not create any unwanted spaces between displayed elements:

```
[lf-checkout-button]
```

![LaunchFlows Add New Place Order Button Shortcode](https://launchflows.com/wp-content/uploads/2020/05/launchflows-hide-default-place-order-button-shortcode.jpg)

Next, add a new button or clickable element to your layout and assign the ID (HTML anchor) of **#lf-checkout-button**

![LaunchFlows Add New Place Order Button Shortcode](https://launchflows.com/wp-content/uploads/2020/05/launchflows-add-new-place-order-button-shortcode.jpg)

This will cause the new button or clickable element to trigger the default checkout process.

---

## Return To Checkout After Add To Cart

**Source:** [https://launchflows.com/documentation/how-to-return-to-checkout/](https://launchflows.com/documentation/how-to-return-to-checkout/)

### What Is Return To Checkout?

After a buyer adds or removes a product from a custom checkout, this component will return them to the same scroll position(desktop)or top of the checkout section(mobile).

### What It Does

This enables the buyer to immediately continue with the checkout after making modifications.

### Setup With Elementor

1. 1. Highlight the section containing your checkout components
2. In the “Advanced” tab, add the CSS ID of “**checkout**“

![](https://launchflows.com/wp-content/uploads/2021/01/return-to-checkout-1.png)

1. 1. Drag the Return Checkout widget to the bottom of your layout

![](https://launchflows.com/wp-content/uploads/2021/01/return-to-checkout-widget.png)

1. Click “Update” to save your work

### Setup With Classic or Gutenberg

1. 1. Add a division or block with the CSS ID of “checkout” to the top of the checkout page layout.

```
<div id="checkout"></div>
```

Or with Gutenberg, add an HTML block and add the same code.

![](https://launchflows.com/wp-content/uploads/2021/01/return-to-checkout-gutenberg.png)

1. 1. Add the following shortcode to the Classic or Gutenberg Editor

```
[lf-return-checkout]
```

1. Click “Update” to save your work

### What To Expect

On Desktop, Return To Checkout will return the browser scroll position to where it was before reloading, on Mobile, it will return to the position of the #checkout ID.

### Click To Watch Video

### Setup With Gutenberg

1. Using the LaunchFlows option to add a checkout page, create a long form sales / checkout page using any post type, including if you wish, a product.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/8364e376-a2ed-4d89-89e9-3e87d906980d/cropped_screenshot_$1637203326.jpeg)

2. Add at least two call to action buttons or text links. The first will be to add the product to the cart for this checkout page. The second will be for scrolling to the #checkout section of the layout.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/2acea6da-dc06-4a39-857a-787377560945/cropped_screenshot_$1637203327.jpeg)

3. For the Buy It Now buttons, copy the LaunchFlows LF-Direct To Checkout link for the product you wish to sell, and paste it to the url for the first button. Be sure the product is configured to have this versy same page as the location for being redirected after the product is added to cart (Next Step option).

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/c628be5d-5f89-4508-b5c5-b62c309311c1/cropped_screenshot_$1637203328.jpeg)

4. Create a second button that will be used for scrolling down to the location of the checkout.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/a119d89d-ad35-4bae-a18b-5b3c05e108f9/cropped_screenshot_$1637203331.jpeg)

5. Use the bookmark link of #checkout for this button.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/9a6a5da4-ed40-4385-b3d4-ca9b86f008f3/cropped_screenshot_$1637203332.jpeg)

6. Add the LaunchFlows block, shortcode or Elementor Widget for “lf-return-checkout”. This is what adds the javascript code to this layout for enabling the return to checkout feature.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/43e8eeaa-bd50-4015-a8e9-fd4cd6f0d540/cropped_screenshot_$1637203335.jpeg)

7. Open up the gutenberg List View so you can convert this block into a group.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/de5a9099-2475-4477-ae99-f17aa4228e76/cropped_screenshot_$1637203337.jpeg)

8. Right click on the lf-return-checkout block and choose “group” so that it becomes a Gutenber group block.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/5eb73dc6-24f7-4a6e-99b2-a08e0168a373/cropped_screenshot_$1637203338.jpeg)

9. After selecting the new Group block, click the “Advanced” option on right side so that you can apply the HTML anchor tag of #checkout.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/3a39598a-24d7-4394-9f76-dc9d33f54a72/cropped_screenshot_$1637203339.jpeg)

10. Click the “HTML anchor” field and type in the word “checkout” without the hashtag (Gutenber will add it by default).

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/7376b276-c438-4634-b38c-3a1179d33e29/cropped_screenshot_$1637203340.jpeg)

11. To hide the WooCommerce coupon component from this layout, first click “LaunchFlows LaunchFlows Woocommerce Coupon”

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/fb3d137b-2000-4717-952a-89de189c6a29/cropped_screenshot_$1637203341.jpeg)

12. Then click the “Additional CSS class(es)” field and type in “lf-hide”. This will cause the component to be hidden from the public side.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/9265e8fb-1159-4e7b-8595-5b3237fbd3f7/cropped_screenshot_$1637203342.jpeg)

13. Repeat this for the Additional Fields component.

![](https://colony-recorder.s3.amazonaws.com/files/2021-11-18/006f78b1-dc08-4623-be84-330596f47716/user_cropped_screenshot.jpeg)

14. Test click the “Buy It Now!” button. The product should be added to the cart.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/59675c38-5d54-43de-9a69-12d4d2d863c7/cropped_screenshot_$1637203346.jpeg)

15. Then click the scroll to checkout button, and you should be taken to the checkout anchor location.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/80a07e0f-b1ee-4cb4-bba6-1f1957b3237e/cropped_screenshot_$1637203347.jpeg)

16. Where you can complete the order with the “Place Order” button.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/8c35be15-d897-40e7-bda8-a143860e207a/cropped_screenshot_$1637203348.jpeg)

17. Test to see what happens when you delete the product from the order review.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/5f3312d1-efe2-4d0b-8cec-d06b9372ca9e/cropped_screenshot_$1637203350.jpeg)

18. The checkout page/post should reload and return to the checkout position.

![](https://colony-recorder.s3.amazonaws.com/scribe_documents/073ae23f-fe8c-4000-ab00-e07a60040003/actions/652d4335-fcf5-4808-815f-662c01a368fa/cropped_screenshot_$1637203352.jpeg)

---

## Save Credit Cards Automatically

**Source:** [https://launchflows.com/documentation/how-to-save-credit-cards-automatically/](https://launchflows.com/documentation/how-to-save-credit-cards-automatically/)

### Why Do This?

For optimal checkout experiences, you don’t want to ask buyer to add their card every time. It is easier and faster to use the AutoClick Checkout option of LaunchFlows.

To ensure that buyer has saved their credit card safely with Stripe or Square, be sure to enable this option in either the Elementor Payment widget or by adding the shortcode below (you don’t want to do both).

### Elementor

When using the LaunchFlows Payment widget, slide the Autosave CC option for the gateway(s) you are using to “yes” as shown below. Do not use the shortcode if you use this method.

![LaunchFlows Hide CC Elementor](https://launchflows.com/wp-content/uploads/2021/07/launchflows-hide-cc-elementor.jpg)

### Shortcode

Depending on which gateways you have enabled, add one or both of the following shortcodes to the bottom of your checkout layout or page so they do not cause any unwanted gaps in the layout spacing.

**Save Stripe Credit Card Automatically**

```
[lf-save-stripe-cc]
```

**Save Square Credit Card Automatically**

```
[lf-save-square-cc]
```

You will find that the checkbox for either option is enabled but that the option is hidden from the buyer, so as to remove any confusion or ability to override the same.

**Before:**

![LaunchFlows Hide CC before](https://launchflows.com/wp-content/uploads/2021/07/launchflows-hide-stripe-cc-before.jpg)

**After:**

![LaunchFlows Hide CC after](https://launchflows.com/wp-content/uploads/2021/07/launchflows-hide-stripe-cc-after.jpg)

---

## Style Or Hide Components With Gutenberg

**Source:** [https://launchflows.com/documentation/how-to-style-or-hide-components-with-block-editor/](https://launchflows.com/documentation/how-to-style-or-hide-components-with-block-editor/)

### Why Do This?

LaunchFlows adds all of the default WooCommerce checkout components to any page, post or lesson where you’ve selected the LaunchFlows Canvas or Full Width Page Layout.

In order to customize the look and feel of each component, as well as relocate it or even hide it from the layout entirely, we first must add a shortcode to tell LaunchFlows we wish to modify that particular component.

### What Will We Need?

We highly recommend the free [Editor Plus](https://wordpress.org/plugins/editorplus/) plugin from the WordPress Respository or any similar plugin that adds additional style and visibility controls to a Gutenberg Block.

You will also want to refer to our [LaunchFlows Shortcode Documentation](https://launchflows.com/documentation/shortcodes/) for each component you would like to style, relocate or hide.

### How Does It Work?

You will have more style and visibility control if you use a paragraph block instead of a shortcode block.

Simply click on the Gutenberg Block Selector (the “+” symbol) and add a new paragraph.

It is more effective if you first add some placeholder content and style choices to this paragraph before adding your shortcode, so type a few characters of placeholder, add some style with the Editor Plus options under “Block” and then click “Update”.

Once you’ve established the new paragraph block, add the shortcode for whichever component you wish to style, relocate or hide, such as [lf-billing], then click “Update”

You will now find that the LaunchFlows checkout component that was previously in the standard layout has been moved to the top of your layout, in whichever column position, and possesses the style or visibility you’ve assigned with Editor Plus.

### To Style A Block

Select any of the Editor Plus style controls, such as in this example we’ve added a blue border around the LaunchFlows Billing Component. You can use any number of layered styles on one block.

![LaunchFlows Style Border Editor Plus](https://launchflows.com/wp-content/uploads/2021/07/launchflows-style-border-editor-plus.jpg)

### To Hide A Block

Sometimes you wish to relocate a checkout component out of the standard layout, such as the Additional Fields, or the coupon, etc.

In order to do this, simply use the Editor Plus Block controls for “Extras” and then from the Display dropdown choose “None” as the option.

This will allow you to see the block on the admin side but will remove it from the LaunchFlows checkout design on the front end of your site.

![LaunchFlows Block Visibility With Editor Plus](https://launchflows.com/wp-content/uploads/2021/07/launchflows-style-visibility-none-editor-plus.jpg)

### Watch This Video

---

## Pre-fill WooCommerce Checkout Fields

**Source:** [https://launchflows.com/documentation/how-to-pre-fill-woocommerce-checkout-fields/](https://launchflows.com/documentation/how-to-pre-fill-woocommerce-checkout-fields/)

Uses any URL variables you send to a WooCommerce checkout page where the visitor is not otherwise registered and logged-in. This function fills in the three fields with the data passed in the URL string.

email= (**Note-this is REQUIRED no matter what*)

fname=

lname=

Use with a LeadMagnet product or when sending a new lead or prospect from another website or social media.

If prospect has already provided their first and last name and email, this eliminates the need for them to add this information again in the WooCommerce checkout.

*Note: after they complete the first transaction on your site (free or paid), their user information is always pre-filled by WooCommerce.

Therefore use this for situations where the visitor is new, rather than returning customer.

https://yourdomain.com/custom-checkout/?**email=**bob@smith.com&**fname=**bob&**lname=**smith

---

## Instant Registration

**Source:** [https://launchflows.com/documentation/instant-registration/](https://launchflows.com/documentation/instant-registration/)

### What Is Instant Registration?

LaunchFlows offers two ways to deliver a fully formatted checkout experience that displays only the minimum fields required to onboard a new user. *First Name, Last Name, Email.*![](https://launchflows.com/wp-content/uploads/2020/12/instant-registration-new-form.png)**

### When To Use

Whenever you need to register **and** log someone immediately as a free user, such as when offering a sample course or free consultation. If you have connected a CRM to your WooCommerce site, this is also a way to provide custom tracking of the user (contact) journey through your sales funnel, even if they have not completed a paid purchase.

### What It Does

Three important goals:

1. **Creates** a new User
2. **Logs-in** this new User
3. *Optionally:* **Tracks** this new User with Marketing Automation

Instant Registration is accomplished by either:

1. **A Registration Shortcode**or
2. **A Free Registration Product**

### Setup A Registration Shortcode

In the event you do not plan to send a visitor down a Sales Funnel immediately and offer other products for sale, **the fastest and easiest way to register and log in a new user to the WooCommerce “My Account” page** is by using the following shortcode or Gutenberg component, within any page or post.

```
[lf-registration]
```

**Note: Anyone logged-in will be redirected to “My Account” page, so view your setup from an incognito window to check the look and feel of registration form.*

### Add Names To Registration Form

LaunchFlows provides a global option to add the user First & Last Name fields to the registration form. The names will appear on both the My Account registration form as well as the LaunchFlows Registration shortcode form.

To add names, simply check the LaunchFlows global option for “Add First & Last Name To Registration Form: When registering new user with WooCommerce.” as shown below:

![add-names-to-registration](https://launchflows.com/wp-content/uploads/2020/12/add-names-to-registration.png)

### Setup A Free Registration Product

1. Create a Simple Product that is “Virtual” and “Downloadable”
2. Set the price to **$0** *(*Important!)*
3. Select any checkout page from the dropdown
4. Check “Instant Registration” and “Solo Checkout”

![](https://launchflows.com/wp-content/uploads/2020/12/instant-registration-create-free-product.png)

![Instant Registration Checkbox](https://launchflows.com/wp-content/uploads/2020/12/instant-registration-checkbox.png)

### Where To Use

Add to any checkout with the LF-Direct Checkout Link or with the “Always In Checkout” component / shortcode.

1. **LF-Direct Checkout Link** – Copy the url from your Instant Registration product and use it within any button or clickable link.![](https://launchflows.com/wp-content/uploads/2020/12/instant-registration-direct-checkout-link.png)
2. **Always In Checkout Component / Shortcode** – Add the Instant Registration product ID to the component or shortcode and add to any 0checkout.![](https://launchflows.com/wp-content/uploads/2020/12/instant-registration-shortcode.png)![](https://launchflows.com/wp-content/uploads/2020/12/instant-registration-widget.png)

### Hide Free Orders & Emails

In most cases you will not want new users to view Instant Registration “orders” in their My-Account area, nor would you want them to receive emails confirming such “orders.”

Likewise, as the administrator, you do not want to litter your order archive with free registrations.

We recommend that you hide both of these, and provide an optional dropdown to view free orders, by checking the highlighted boxes when you visit the main LaunchFlows tab of the admin dashboard:

![](https://launchflows.com/wp-content/uploads/2020/12/launchflows-dash-hide-free-orders-1.png)

As the admin, this is what you will then see in the main orders archive (drop down filter):

![](https://launchflows.com/wp-content/uploads/2020/12/hide-free-orders.png)

---

## Bumps & Variations

**Source:** [https://launchflows.com/documentation/bumps-variations/](https://launchflows.com/documentation/bumps-variations/)

### What are Bumps & Variations?

These provide a way to sell any product or group of products on the checkout page by clicking a checkbox or radio button.

![](https://launchflows.com/wp-content/uploads/2020/12/order-bump-example.png)

### When to use them?

The Order Bump component can be used on any LaunchFlows checkout page or step, as a way to add products to the checkout.

Use this component instead of the normal WooCommerce single product page for choosing specific products or variations.

When using with variations, it makes it easy to break out each variation option into a single radio button by using the variation ID.

### What they accomplish

Three important goals:

1. Allow a buyer to select products directly from any checkout page
2. Offer a primary product alongside additional offers, all on the same page
3. Eliminate the need for multi-step sales funnels, using a one page checkout

### Bump Setup

1. Create a checkout page by selecting either of the LaunchFlows Templates from the Page Attributes dropdown
2. Add the Order Bump Component / Shortcode to this checkout page via Gutenberg, Classic Editor or Elementor

![](https://launchflows.com/wp-content/uploads/2020/12/order-bump-widget.png)

![](https://launchflows.com/wp-content/uploads/2020/12/order-bump-shortcode.png)
3. Add the product ID to the Component / Shortcode, and optionally any additional parameters
4. Setup the style and optionally hide any parts of the Component you do not wish to display

### Variation Setup

If you prefer to offer an array of products, where only **ONE** variation option from product can be added at a time, create a Variable Product instead.

1. Select “Variable Product” instead of “Simple Product” from the WooCommerce product setup.

![](https://launchflows.com/wp-content/uploads/2020/12/order-bump-variable-product.png)
2. In the setup page for the Variable Product, be sure to check the option box for “One Variation” so that a buyer can only add one variation or another, instead of multiple

![](https://launchflows.com/wp-content/uploads/2020/12/one-variation.png)
3. Then add any of the individual variation IDs to separate Order Bump components / shortcodes.

![](https://launchflows.com/wp-content/uploads/2020/12/order-bump-setup.png)
4. Finally, choose the “circle” Checkbox Style option or use the *style=”p-circle”* shortcode parameter to change the square checkbox to a radio button.

### Watch Video

---

## Upsells & Downsells

**Source:** [https://launchflows.com/documentation/upsells-downsells/](https://launchflows.com/documentation/upsells-downsells/)

### What are Upsells & Downsells?

These provide a way to sell an additional product *AFTER* the original checkout has been completed.

![](https://launchflows.com/wp-content/uploads/2020/12/upsell-example-1.png)

### When to use

The Upsell component can be used on any page or post as a way to add a product offer. It does not require a LaunchFlows checkout.

You may also choose to daisy-chain multiple Upsell or Downsell steps together in a row.

For example, if someone declines an Upsell offer, it would be advantageous to offer them a Downsell offer (a less-expensive alternative) immediately thereafter.

### Why to use

1. Offer products for sale AFTER an initial checkout
2. Offer different products in sequence, based on various conditions
3. Increase the total sale amount to any particular buyer during one visit

### How to setup

1. Create a new product to act as your upsell or downsell. It can be any type of product (eg: simple or subscription, etc)
2. Select a new or existing page or post to hold your Upsell or Downsell offer. You do **not** need to select a LaunchFlows template.
3. If you use Elementor for this page, simply add the LaunchFlows Upsell widget to your page/post layout, otherwise use the LaunchFlows shortcode.
4. Add the new upsell/downsell product ID you just created as the “Accept” option or parameter, and the page/post ID for the destination where you’d like someone to be directed if they decline. You may optionally change the text and style and display of the other upsell components such as image, price, title, etc.![](https://launchflows.com/wp-content/uploads/2020/12/upsell-setup-page-1.png)

### Shortcode

If you are not using Elementor, this shortcode will output the Upsell / Downsell component.

```
[[lf-upsell product="1234" next="5678" accept="Yes, I Want It!" accept_tags="123,456" decline="No Thanks..." image="yes" title="yes" price="yes"]]
```

.wp-block-kadence-advancedheading.kt-adv-heading_423b02-e5, .wp-block-kadence-advancedheading.kt-adv-heading_423b02-e5[data-kb-block="kb-adv-heading_423b02-e5"]{font-style:normal;}.wp-block-kadence-advancedheading.kt-adv-heading_423b02-e5 mark.kt-highlight, .wp-block-kadence-advancedheading.kt-adv-heading_423b02-e5[data-kb-block="kb-adv-heading_423b02-e5"] mark.kt-highlight{font-style:normal;color:#f76a0c;-webkit-box-decoration-break:clone;box-decoration-break:clone;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;}.wp-block-kadence-advancedheading.kt-adv-heading_423b02-e5 img.kb-inline-image, .wp-block-kadence-advancedheading.kt-adv-heading_423b02-e5[data-kb-block="kb-adv-heading_423b02-e5"] img.kb-inline-image{width:150px;vertical-align:baseline;}

### How To Redirect To Custom URL

Sometimes you may wish to redirect to a custom URL that is not a page, post or lesson. To do this most easily, use the free [Simple Post Redirect](https://wordpress.org/plugins/simple-post-redirect/) plugin to turn a standard page into a placeholder that you can select from the LaunchFlows product dropdown, but that sends the buyer to another destination.

---

## Donations & Pay Now

**Source:** [https://launchflows.com/documentation/donations-pay-now/](https://launchflows.com/documentation/donations-pay-now/)

### What are Donations & Pay Now?

These make it easy for donors and clients to pay or donate exactly what they want with just one click, using any gateways that work with WooCommerce.

![](https://launchflows.com/wp-content/uploads/2020/12/donation-1.png)

### When to use

Use on any page or post where you want donors or clients to submit a unique donation or payment. A LaunchFlows checkout template is not required.

You may also daisy-chain multiple components together with this to create powerful sales funnels with conditional outcomes based on what was just purchased.

*For example:*

Donation / Pay Now **⇛** Checkout **⇛** Upsell Offer (Course) **⇛** Thank You + Next Step Link **⇛** Course Start Page

### Why to use

1. To allow buyer to set the amount of the donation or payment dynamically
2. To replace complex donation plugins or invoicing software

### Setup: Donation or Payment

1. Create a Simple Product (one time payment) or Subscription Product (recurring payments).
2. Select Checkout Page where this product will be purchased from the Product data/LaunchFlows tab
3. Check the “Solo Checkout” if you would like to ensure this product is the only item purchased (**Optional*)
4. Using Elementor, add the **LaunchFlows Donation Widget**to any page or post.
5. Add the Product ID, Button and Field Text
6. Select the Content and Style options options in the Widget

![](https://launchflows.com/wp-content/uploads/2020/12/donation-product-setup.png)

### Simple Block Pattern Method

![](https://launchflows.com/wp-content/uploads/2020/12/donation-widget-elementor.png)

![](https://launchflows.com/wp-content/uploads/2020/12/donation-widget-setup.png)

### URL Link Method

If you create a custom button or clickable text link, simply use the LF-Direct Checkout link for any product and then add the syntax of “**&donation=xxx**” to the end of the string, where “xxx” is the dollar amount.

For example, where “12345” is the product ID for the donation product, and “checkout” is the url of the checkout, the finished url you would apply to a button or clickable text link for a **25** donation (of your default currency) would be:

```
https://yoursite.com/checkout/?add-to-cart=12345&donation=25
```

### Shortcode Method

The shortcode to add this component is:

```
[lf-donate product="12345"]
```

where “12345” is the product ID for the Donation Product.

You may optionally add either of two other attributes to modify the field text or the button text

```
[lf-donate product="12345" field="Donate Big!" button="Do It Now!!"]
```

### Watch Video One

### Watch Video Two

---

## Remove Products From Cart

**Source:** [https://launchflows.com/documentation/remove-products-from-cart/](https://launchflows.com/documentation/remove-products-from-cart/)

### What Does This Do?

This functionality allows you to remove any specific product from the cart at any step in your sales funnel.

This makes it super easy to create a granular level of control over which product(s) a buyer will have available at the final checkout.

### Shortcode Method

Simply add the following shortcode into any page or post that a buyer will visit prior to the final checkout or on the checkout page itself (either will work).

**Remove Product From Cart**

```
[lf-remove-product id="1234"]
```

### URL String Method

Simply add the following url string, with the unique ID of the product you wish to remove, to any clickable element or redirection you are setting up.

When the buyer arrives at this url with the string at the end, the matching product will be removed from the cart automatically. *(*swap 1234 for your product id)*

![remove-products-from-cart-url-string](https://launchflows.com/wp-content/uploads/2022/03/remove-products-from-cart-url-string.png)

```
?remove-product=1234
```

### Block Or Widget Method

Simply drop the block or widget called “LaunchFlows Remove Product” into any page prior to or including checkout, and add the ID for the product you want automatically removed.

![remove-products-from-cart-elementor](https://launchflows.com/wp-content/uploads/2022/03/remove-products-from-cart-elementor.png)

![remove-products-from-cart-block](https://launchflows.com/wp-content/uploads/2022/03/remove-products-from-cart-block.png)

---

