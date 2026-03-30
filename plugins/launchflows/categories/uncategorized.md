# Uncategorized

*Category from LaunchFlows documentation*

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

