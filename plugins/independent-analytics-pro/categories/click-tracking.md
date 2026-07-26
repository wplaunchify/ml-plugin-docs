# Click Tracking

*Category from Independent Analytics Pro documentation*

---

## What File Types Can it Track?

**Source:** [https://independentwp.com/knowledgebase/click-tracking/trackable-file-stypes/](https://independentwp.com/knowledgebase/click-tracking/trackable-file-stypes/)

Independent Analytics Pro can automatically track clicks for over 20+ file types.

- **Documents** — 
```
pdf
```

, 
```
doc
```

, 
```
docx
```

, 
```
csv
```

, 
```
xls
```

, 
```
xlsx
```

, 
```
epub
```

, 
```
txt
```

, 
```
rtf
```
- **Archives** — 
```
zip
```

, 
```
gz
```

, 
```
rar
```

, 
```
tar
```
- **Video** — 
```
mp4
```

, 
```
mov
```

, 
```
avi
```

, 
```
wmv
```
- **Audio** — 
```
mp3
```

, 
```
m4a
```

, 
```
aif
```

, 
```
aifc
```

, 
```
aiff
```

, 
```
wav
```

, 
```
aac
```
- **Design files** — 
```
psd
```

, 
```
ai
```

, 
```
eps
```

, 
```
sketch
```
- **Software** — 
```
exe
```

, 
```
dmg
```

, 
```
msi
```
- **Image** — 
```
png
```

, 
```
jpg
```

, 
```
jpeg
```

, 
```
gif
```
- **Presentations** — 
```
ppt
```

, 
```
pptx
```

To track clicks on a link pointing to one of these file types:

1. Visit the **Analytics → Click Tracking** menu
2. Click the **Add Link Pattern** button
3. Choose the **Extension** type
4. Select the file extension you want to track
5. Save the new link pattern

![Track clicks by file extension](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:544/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/track-clicks-by-file-extension.png)

## Tracking clicks on images

Clicks aren’t counted if a visitor clicks on an image. They are counted when someone clicks on a link pointing to an image. This could be a text link or an image link. For instance, if you add an image to your article and link it to the full-size image, clicks on this image link will be tracked.

---

## How to Track Clicks on Add to Cart Buttons

**Source:** [https://independentwp.com/knowledgebase/click-tracking/track-add-to-cart-buttons/](https://independentwp.com/knowledgebase/click-tracking/track-add-to-cart-buttons/)

Independent Analytics Pro does not have “Add to Cart” tracking yet, but we would like to include this in a future update.

For now, you can use the click tracking feature to record how many times visitors click on your site’s Add to Cart buttons. You can use the classes defined below to create new link patterns in your [Click Tracking menu](https://independentwp.com/knowledgebase/click-tracking/click-tracking/).

These are the classes used by default by each eCommerce plugin. If you have built your shop pages using a page builder, they may be different for your site.

## WooCommerce

```
add_to_cart_button
```

 – used in **Add to Cart** buttons on the main shop page and category pages.

```
single_add_to_cart_button
```

 – used in **Add to Cart** buttons in individual product pages.

```
checkout-button
```

 – used in the **Proceed to Checkout** button in the cart.

```
wc-block-components-checkout-place-order-button
```

 – used in the **Place Order** button at checkout if the checkout page is using the checkout block.

```
place_order
```

 – ID used in the **Place Order** button at checkout if using the checkout shortcode. Please use an ID link pattern instead of a Class link pattern for this button.

## Easy Digital Downloads

```
edd-add-to-cart
```

 – used for all **Add to Cart** buttons.

```
edd_go_to_checkout
```

 – used for **Checkout** buttons.

## FluentCart

```
fluent-cart-add-to-cart-button
```

 – used for all **Add to Cart** buttons.

```
fluent-cart-direct-checkout-button
```

 – used for the **Buy Now** button on product pages.

```
checkout-button
```

 – used in the **Checkout** button in the cart.

## SureCart

```
wp-block-surecart-product-buy-button
```

 – used for both the **Add to Cart** and **Buy Now** buttons.

---

## Why the Total Number of Clicks can be Higher in the Table

**Source:** [https://independentwp.com/knowledgebase/click-tracking/clicks-higher-table/](https://independentwp.com/knowledgebase/click-tracking/clicks-higher-table/)

You may see more total clicks show up in the table as compared to the [Quick Stats](https://independentwp.com/knowledgebase/dashboard/quick-stats/), like in the example below:

![More clicks in table](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:327/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/03/more-clicks-in-table.png)

This is not an error in the calculations. It is due to a difference in context between the Quick Stats and the table.

In the Quick Stats, you are seeing the total number of clicks. In the table, you are seeing the number of clicks per link pattern. You can end up with more total clicks in the table when one click matches multiple link patterns.

For instance, the link patterns below track clicks on links that lead to 
```
example.com
```

 or have the class 
```
download-file
```

.

![Link patterns](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:370/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/03/link-patterns.png)

In this example, there is a link with the 
```
download-file
```

 class that also points to 
```
example.com
```

. This link has been clicked twice by visitors, so you see two total clicks in the Quick Stats, and two clicks for each link pattern in the table.

---

## How to Track Links with Redirects

**Source:** [https://independentwp.com/knowledgebase/click-tracking/track-links-with-redirects/](https://independentwp.com/knowledgebase/click-tracking/track-links-with-redirects/)

You may run into a situation where you need to track a link that redirects to another page on your site.

For example, you might have a link that takes customers to their invoice, like this:

mywebsite.com/?invoice=123 → **301 redirect** → mywebsite.com/invoice-123.pdf

Now, imagine you have your link patterns configured like this, to track clicks on PDF files:

![Tracking PDF clicks](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:537/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/02/tracking-pdf-clicks.png)

Clicks on the invoice link would not get tracked because the URL the link points to does not end in .pdf. Instead, it redirects to a PDF file. There is no way the tracking script can know there will be a redirect, let alone where that redirect will lead.

There are two ways you could solve this particular case.

First, if you could remove the redirect and link directly to the PDF file, then it would be tracked with the PDF link pattern.

Alternatively, you could create a new Class link pattern and add the tracked class to the invoice link. Then, it doesn’t matter where the URL leads; when the link is clicked, the class is found, and the click gets recorded.

The important takeaway is that you can’t track a link based on the URL it will be redirected to. You have to track the link based on its URL or by adding a tracked class or ID to it.

If you’re unsure how to add a class to a link, follow this guide next: [How to Add Classes to Your Links](https://independentwp.com/knowledgebase/click-tracking/add-class-editor/)

---

## What is a Click?

**Source:** [https://independentwp.com/knowledgebase/click-tracking/what-is-click/](https://independentwp.com/knowledgebase/click-tracking/what-is-click/)

A click is recorded when a link matching one of the Link Patterns defined in the Click Tracking menu is clicked.

For example, let’s say you are tracking clicks on email links and PDF files only. When you display the Clicks metric in the Pages report table, it will show a count of how many times a link matching one of those two patterns was clicked on that page.

![Clicks metric table column](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2025/04/clicks-table-column.png)In this example, there were 41 tracked clicks on the Homepage

It’s also helpful to know that both left and right mouse button clicks are tracked. Visitors often right-click links to open them in a new tab or download the resource as a file, so it’s important to include these clicks too.

---

## Click Tracking is Not Compatible with GoDaddy’s “Managed WordPress” Hosting

**Source:** [https://independentwp.com/knowledgebase/click-tracking/click-tracking-not-compatible-godaddy/](https://independentwp.com/knowledgebase/click-tracking/click-tracking-not-compatible-godaddy/)

GoDaddy [blocks all PHP execution](https://www.godaddy.com/help/php-execution-limits-41422) outside of WP without the option to whitelist individual files on their Managed WordPress hosting plans, so it is not possible to use the click tracking feature in Independent Analytics Pro with these plans.

You can use a normal “Web Hosting” plan provided by GoDaddy without any issues. This hosting is cheaper and can be used to host a WordPress website. There is only a conflict with their more expensive Managed WordPress hosting plan.

---

## How to Allow PHP Execution in the Plugins Folder

**Source:** [https://independentwp.com/knowledgebase/click-tracking/allow-php-execution-plugins-folder/](https://independentwp.com/knowledgebase/click-tracking/allow-php-execution-plugins-folder/)

In order to track clicks, Independent Analytics Pro uses a PHP endpoint located in 
```
wp-content/plugins/independent-analytics-pro/iawp-click-endpoint.php
```

 .

This endpoint operates without loading WordPress, which makes it dramatically faster. However, there are some security tools that prevent PHP files from being executed without WordPress getting loaded first, and this blocks click tracking from working.

There are three tools that we are currently aware of that block the PHP execution IA Pro requires to track clicks:

- Solid Security
- Cloudways
- Security Optimizer
- Sucuri Security

Here are the steps to resolve each of these conflicts.

## Solid Security

If you are using the Solid Security plugin, you will need to disable the option that blocks PHP execution in the plugins folder.

To do so, visit the **Security > Settings** menu. Then, click on the **Advanced** section and open the **System Tweaks Settings**. Lastly, uncheck the **Disable PHP in Plugins** box and save your settings.

![Solid Security PHP execution setting](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:608/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/solid-security-php-execution.png)

Once saved, the notice warning you about this setting will disappear, and click tracking will resume. You can continue to block PHP execution in both the uploads and themes folders.

## Cloudways

If you’re using Cloudways, it disables all PHP execution by default, so this needs to be enabled for click tracking in IA Pro to work.

In order to enable PHP execution, start by clicking on your server and choosing the site application in Cloudways. Next, click on **Application Settings** and then open the **WordPress Settings** menu. Lastly, enable the **Direct PHP Files Access** option and save your changes.

![Cloudways enable PHP execution](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:719/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/cloudways-enable-php-execution.png)

If you want to limit PHP execution in other folders, you could use Solid Security to lock down the themes folder and uploads folder.

Alternatively, you can upload an .htaccess file to the uploads folder to disable direct PHP access there. Here is a [tutorial on how to do that](https://help.one.com/hc/en-us/articles/360002102258-Disable-file-execution-in-the-WordPress-uploads-folder).

## Security Optimizer

If you’re using the Security Optimizer plugin, there is an option called “Lock and Protect System Folders” that will block PHP execution throughout the site.

In order to get click tracking to work, please toggle that option off and then back on.

![Security Optimizer options](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:610/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/security-optimizer-options.png)

Independent Analytics Pro includes a filter that whitelists the PHP endpoint used for click-tracking. The option in Security Optimizer just needs to be toggled off and on so that it can recreate the .htaccess file, including the whitelist rule defined by IA Pro. Then, your clicks on your site will be tracked.

## Sucuri Security

Start by visiting the **Sucuri Security > Hardening & Prevention** menu. There is a setting called **Block PHP Files in WP-CONTENT Directory** that blocks the click tracking feature in IA Pro. Rather than disabling this feature, you can whitelist the one file that IA Pro needs access to instead.

In the **Allow Blocked PHP Files** section at the bottom of the page, use the dropdown to select the second option ending with “wp-content.” Then, add the following text and submit the form: 
```
/plugins/independent-analytics-pro/iawp-click-endpoint.php
```

This will allow IA Pro to access the PHP file it needs to use so your visitors’ clicks can be tracked.

## Other hosts

If you are using a different host that blocks direct PHP file access, check if there is an option to whitelist a URL. The click-tracking will be able to function properly if you can whitelist the following URL:

```
wp-content/plugins/independent-analytics-pro/iawp-click-endpoint.php
```

## Check your .htaccess files

If the security rule blocking PHP access is not coming from your host or a plugin, then it is most likely a leftover security rule from a previously installed security plugin.

Connect to your site via FTP and open the 
```
wp-content
```

 folder. In this folder, open the 
```
.htaccess
```

 file, and check if it contains code like this:

```
# Block direct access to all PHP files
<FilesMatch "\.(?i:php)$">
    <IfModule !mod_authz_core.c>
        Order allow,deny
        Deny from all
    </IfModule>
    <IfModule mod_authz_core.c>
        Require all denied
    </IfModule>
</FilesMatch>
```

This code will block direct access to all PHP files in the 
```
wp-content
```

 folder. You can either remove it or add the following code to the bottom of the 
```
.htaccess
```

 file to keep direct access blocked, but make an exception for the endpoint that Independent Analytics Pro uses:

```
# Allow access to the click tracking endpoint
<Files iawp-click-endpoint.php>
    <IfModule !mod_authz_core.c>
        Allow from all
    </IfModule>
    <IfModule mod_authz_core.c>
        Require all granted
    </IfModule>
</Files>
```

If you are having trouble following these instructions or making the necessary changes, please reach out to us via the [contact page,](https://independentwp.com/contact/) and we will be happy to assist you.

---

## How to Add Classes to Your Links

**Source:** [https://independentwp.com/knowledgebase/click-tracking/add-class-editor/](https://independentwp.com/knowledgebase/click-tracking/add-class-editor/)

If you’re unsure how to add a class to your link to [track clicks](https://independentwp.com/knowledgebase/click-tracking/click-tracking/), here are a few of the most common techniques.

You’ll learn how to add classes via the:

- [Block Editor](#block-editor)
- [Classic Editor](#classic-editor)
- [Menu Editor](#menu-editor)
- [Elementor](#elementor)
- [HTML](#html)

**Note:**When tracking links with a class, please make sure to use a unique class name that does not show up anywhere else on your website.

## Adding classes with the Block editor

If you want to track clicks on a Button block, start by selecting the button in the editor.

In the right-sidebar, click on the Advanced section, and then enter the class name into the **Additional CSS Class(es)** field.

![Ading class to button](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:591/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/ading-class-to-button.png)

Save your post, and then all clicks on this button will be tracked.

If your link is in another block type, like a paragraph, the steps are the same. However, please note that if you have multiple links within the same paragraph, clicks on all of them will be tracked.

If you have multiple links within a paragraph and you want to track just one, this is possible if you edit the HTML and add the class to the link element itself.

To do this, you would start by selecting the paragraph block. Then, click the **Options** icon in the toolbar and choose the **Edit as HTML** option.

![Editing block html](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:709/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/editing-block-html.png)

Once you’re editing the HTML, you can manually add the class to the link like this:

![Adding class to link](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:291/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/adding-class-to-link.png)

After adding the class, click the **Edit visually** button to return the paragraph to its normal state.

This will allow you to add different classes to links within the same paragraph and track their clicks separately.

## Adding classes with the Classic Editor

If you’re using the Classic Editor plugin, then the first step is to click on the **Text** tab at the top-right of the editor.

![Classic Editor "Text" tab](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:524/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/classic-editor-text-tab.png)

Once you’re viewing the plain text of the article, you can add the class attribute and value into the link element like this:

![Adding a class with the Classic Editor](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:323/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/adding-class-classic-editor.png)

You can use this same technique to add a class to any link when using the Classic Editor. You can also add the class to a parent element, but we recommend adding the class to the link element whenever possible.

## Adding classes to menu items

It’s easy to track clicks on menu items, whether you’re using a classic theme or a block theme.

### Classic themes

For classic theme users, start by visiting the **Appearance > Menus** page. Once there, click on the **Screen Options** tab at the top-right of the screen, and then check the **CSS Classes** box.

![Enable menu classes](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:688/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/enable-menu-classes.png)

Once this field is enabled, you can click on any menu item to open its options and enter the class into the **CSS Classes** field.

![Track menu item clicks](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:596/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/track-menu-item-clicks.png)

### Block themes

If you’re using a block theme, start by clicking on the **Appearance > Editor** menu item.

In the next screen, click on the **Navigation** item. Then, click on the three dots icon to the right of the menu name and click the **Edit** link in the small popup.

![Edit menu link](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:612/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/edit-menu-link.png)

On the next page, click on the menu item you want to edit. Then, in the right-sidebar, click the **Advanced** section and add the class name to the **Additional CSS Classes** section.

![Menu item classes](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/menu-item-classes.png)

## Elementor

If you’re editing your site with Elementor, adding a class to a widget is very easy.

Start by selecting the widget, click the **Advanced** tab at the top, and then add the class into the **CSS Classes** field.

![Elementor add css class](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:530/h:1024/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/elementor-add-css-class.png)

Please note that any links within the widget will be tracked. For most widgets, this won’t be an issue, but if you do end up with a widget that includes multiple links, try splitting the widget into multiple widgets. For example, a toggle widget that includes two buttons could be split into two separate button widgets.

## HTML

If you’re working with HTML, you can manually add a tracked class to a link, like this:

```
<a class="track-pricing-clicks" href="https://mysite.com/pricing>Pricing</a>
```

We recommend adding the trackable class to the 
```
<a>
```

 element, but you can add it to a parent element too. This will work for up to 7 layers of hierarchy. For example, clicks will still get tracked if the class is added like this:

```
<div class="track-pricing-clicks">
  <p>Visit our <a href="https://mysite.com/pricing>Pricing</a> page to buy now.</p>
</div>
```

This allows for more flexibility if, for some reason, it’s difficult to add the class to the link or if you want to quickly track multiple links within one element. Speaking of which, please keep in mind that if there are multiple links within an element, like the 
```
<div>
```

 above, clicks on all of the links will get tracked.

Clicks are counted for the following elements:

- ```
<a>
```
- ```
<button>
```
- ```
<input type="submit">
```
- ```
<input type="button">
```
- ```
<audio>
```
- ```
<video>
```

Please make sure that you are tracking one of these elements, as clicks on other elements, like 
```
<div>
```

 and 
```
<img>
```

 will not be tracked.

---

## How to Use the Clicks Report

**Source:** [https://independentwp.com/knowledgebase/click-tracking/how-to-clicks-report/](https://independentwp.com/knowledgebase/click-tracking/how-to-clicks-report/)

The Click Tracking menu is where you’ll [configure which links](https://independentwp.com/knowledgebase/click-tracking/click-tracking/) you want to track. The Clicks report is where you’ll find the click data for those links.

![Clicks report](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:783/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/10/clicks-report.png)

Like the other reports, the Clicks report includes the Quick Stats, chart, and data table. At this time, there is only one metric available (Clicks), so there isn’t an option to toggle the Quick Stats like in other reports.

In the data table, you’ll find three columns. The Link Name comes from the Click Tracking menu, the Target is the URL the link pointed to, and the last column contains the number of clicks.

## Pre-made reports

There are several pre-made reports in the sidebar that take advantage of the filtering system. For example, if you click on the PDFs report, you’ll see that it has one filter applied that only includes links that match the PDF pattern created in the Click Tracking menu.

![Pdf clicks report](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:731/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/pdf-clicks-report.png)

The filters are the key to getting the most out of the Clicks report, so let’s look more closely at them.

## Using the filters

You can filter your reports by any of the three data columns:

- Link Name
- Target
- Clicks

Filtering by Link Name is extremely useful because it allows you to generate a report for any of the link patterns created in the Click Tracking menu.

For example, let’s say you have the following set of link rules:

![Click Tracking menu](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:826/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/10/click-tracking-menu.png)

You’ll see each of them available when filtering by Link Name:

![Link name filters](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:527/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/link-name-filters.png)

This makes it very easy to see the clicks for one of your link patterns.

Filtering by the link Target is very useful as well. For example, let’s say you are tracking clicks on PDFs and you have multiple links in your data table, like this:

![PDF links click data](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:484/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/pdf-links-click-data.png)

This makes it easy to compare clicks between your PDFs, but what if you want to see click data for just one of them?

If you want to see clicks only on the daily meal plan PDF, for instance, you can add a second condition that says to only include links whose target contains “daily-meal-plan.”

![Filtering PDF links](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:677/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/filtering-pdf-links.png)

With this filter applied, you’ll only see clicks for the PDF file specified.

![Filtering by link target](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:773/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/filtering-by-link-target.png)

After generating a report like this, you can [save it as a custom report](https://independentwp.com/knowledgebase/dashboard/save-reports-revisit-later/) to revisit again in the future.

## Grouping by link pattern

By default, the data table in the Clicks report will show all of the links that have been clicked. This lets you differentiate between links via their Target URLs.

Alternatively, you can update the table to group link patterns together. You can do this by clicking on the **Links** dropdown above the table and changing the value to **Link Patterns**.

![Click grouping button](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:541/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/click-grouping-button.png)

This lets you see the total number of clicks for each link pattern.

![Grouped by link patterns](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:506/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/grouped-by-link-patterns.png)

This can be useful for seeing the total number of clicks for each link pattern and comparing clicks between link patterns.

---

## How to Create an Outbound Clicks Report

**Source:** [https://independentwp.com/knowledgebase/click-tracking/outbound-clicks-report/](https://independentwp.com/knowledgebase/click-tracking/outbound-clicks-report/)

There are two different approaches to tracking outbound clicks with Independent Analytics Pro. You can either track specific domains, or you can simply track clicks on all external domains.

The benefit of tracking individual domains is that the Clicks report will show a targeted list of clicks that you truly care about.

On the other hand, tracking all outbound links can lead to lots of clutter. You will see clicks on links in your articles that are not important to your business. This means you will need to make more use of the [filtering system](https://independentwp.com/knowledgebase/dashboard/how-to-filter-your-data/) to uncover clicks that actually matter to you. With that said, for large content sites with lots of client/sponsored content, there may be hundreds of individual domains that need to be tracked, so tracking all external clicks would be the superior option.

Please keep this in mind when choosing the method you prefer to track outbound clicks.

## Method 1: track specific domains

Let’s say you have an Etsy shop, and you link to your store frequently. If you want to track how many times visitors click on links pointing to your Etsy store, you could do so by adding a new Domain link pattern like this:

![Domain link pattern](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:531/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/domain-link-pattern.png)

The domain link pattern will record every click on links pointing to the specified domain, and you can create as many of these patterns as you need.

Once you’re tracking clicks on all the external domains you want to monitor, it’s time to create the report.

### Creating the report

To create the outbound clicks report, we’ll apply a couple of filters.

Visit the Clicks report, and then add a filter that excludes all links that contain your own domain in the Target URL.

![Exclude domain clicks report](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:424/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/exclude-domain-clicks-report.png)Replace mywebsite.com with your own site’s domain

This condition alone should work well, but you might still see links for email addresses and phone numbers. To exclude them, add two new conditions, each excluding the email and phone number links by name.

![Exclude filters for outbound report](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:614/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/exclude-filters-for-outbound-report.png)

With all three conditions added, apply the filter, and you’ll be left with only clicks on external links.

Lastly, click the **Save As** button to save your customizations as a new report you can revisit in the future.

![Save outbound report](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:692/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/save-outbound-report.png)

Now, you have a report showing only clicks on outbound links that you can customize further whenever needed.

## Method 2: track all external clicks

If you’d prefer to track all external clicks, that can be done very easily with the External link pattern.

Click the **Add Link Pattern** button to add a new pattern, name it “External” or “Outbound,” and choose the **External** type. Then, click **Save** to begin tracking.

![Adding External link pattern](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:530/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/adding-external-link-pattern.png)The External link pattern doesn’t require a value

With this link pattern added, clicks on every link pointing to another website will be tracked.

### Creating the external clicks report

Creating a report with this data is simple. All you have to do is add a filter to show only clicks that match the **External** link pattern, like this:

![External link pattern filter](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:411/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/external-link-pattern-filter.png)

After applying this filter, the data table will only show links that point to external domains.

You can save your results as a new report to quickly revisit your outbound click data in the future.

---

## How to Track Clicks on Your Website

**Source:** [https://independentwp.com/knowledgebase/click-tracking/click-tracking/](https://independentwp.com/knowledgebase/click-tracking/click-tracking/)

Here is a link to the [debugging guide](https://independentwp.com/knowledgebase/click-tracking/clicks-not-tracked/) referenced in the video.

Click tracking in Independent Analytics Pro is controlled via the Click Tracking menu, so that’s where we’ll begin this tutorial.

## How the Click Tracking menu works

The Click Tracking menu displays a list of “link patterns.” Whenever a visitor clicks on a link that matches one of these patterns, the click will be tracked.

![Click Tracking menu](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:826/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/10/click-tracking-menu.png)

For example, the first link pattern is named “Buy Now,” and it will be triggered whenever a link with the class “buy-now” is clicked.

As another example, the second link pattern called “PDF” will be triggered whenever a visitor clicks on a link pointing to a PDF file.

Using this system, you can create link patterns that will track clicks for individual links or hundreds of links at once.

Let’s dive into each of the available link patterns and look at how they’re implemented now.

## Link Patterns

Most of the link patterns start working automatically once configured in the Click Tracking menu.

However, the Class link pattern takes a bit more work, so we’ll cover this one first.

### Class

Tracking links by class is the best strategy if you want to measure clicks on a single link. For example, if you have a signup button on a landing page, you could easily add a tracked class to it.

You can track clicks on the signup button by adding a new Class pattern, like the example below:

![New link tracked by class](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:548/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/new-link-tracked-by-class.png)

The pattern is named “Landing Page Signup Button,” the Class type is selected, and in the value field, the class name given is “track-signup-button.”

If this class is not already on the signup button, then the last step is to add the class to it.

We have a [tutorial here](https://independentwp.com/knowledgebase/click-tracking/add-class-editor/) on adding classes to links via the Block Editor, Classic Editor, Menu Editor, Elementor, and manually with HTML.

Once the class is added, you’ll begin seeing click data enter the Clicks report.

If your clicks aren’t showing up, follow our [click debugging guide](https://independentwp.com/knowledgebase/click-tracking/clicks-not-tracked/) to make sure the class is implemented properly.

### ID

While classes are the recommended way to track clicks on specific buttons and links, you can also use an ID. We recommend using an ID as a fallback option if you can’t add a class.

For example, imagine you add a chat plugin to your site, and it adds a button to the bottom of each page. The button doesn’t have a unique class you can add or a way to edit the HTML, but it does have an ID. In this scenario, you can track the button by using the ID.

![ID link pattern](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:475/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/click-tracking-id-link-pattern.png)

If you’d like to manually add an ID to an element by editing the HTML, here’s how you can do that:

```
<a id="tracked-link-id" href="https://website.com">Click here</a>
```

### Extension

The extension pattern tracks clicks on links pointing to files. For example, if your site has downloadable CSV files and you want to see how often they’re clicked, you could do so like this:

![Track clicks by file extension](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:544/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/track-clicks-by-file-extension.png)

As long as the links point directly to a CSV file, their clicks will be tracked. This works whether the file is hosted on your website or if you’re linking to a file hosted elsewhere.

With just one file extension pattern, you can monitor clicks on hundreds of links across your website.

Since it’s common to track PDF and zip file downloads, Independent Analytics Pro tracks these two file types by default, but you can remove those patterns if you’d like.

### Subdirectory

The subdirectory link pattern is especially useful for tracking affiliate links, which are commonly redirected through a local URL.

For example, imagine you’re linking to a product through this URL: https://yourwebsite.com/go/product-x

You could track these clicks by adding a subdirectory link pattern like this:

![Subdirectory click tracking](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:494/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/10/subdirectory-click-tracking.png)

Now, every time a visitor clicks on a link that goes through your **/go/** subdirectory, it will show up in the Clicks report like this:

![Affiliate link clicks](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:769/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/affiliate-link-clicks.png)This report is filtered to only show the Affiliate Link clicks

The Target URL column in the table lets you distinguish between your links. Using the example above, you could filter the Target URL by links that contain “green-tea,” and then you’d only see stats for the second link in the table.

With this system, you can track all of your affiliate links within a few seconds of configuration and then use filters to dig into your data later.

### Domain

In our experience, tracking all outbound clicks creates a lot of clutter. It’s not helpful to see clicks to Wikipedia and other sites you linked to in your content. That’s why we included the domain pattern.

By using the domain pattern, you can track clicks that point to specific domains only. For example, let’s say you have an Etsy shop, and you frequently link to your store. You could quickly track clicks on all links pointing to Etsy like this:

![Domain link pattern](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:531/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/domain-link-pattern.png)

If there are any links to your store that you want to track separately, you could add a tracked class to those links instead.

When you track a domain, it doesn’t only track links leading to the homepage; it tracks links pointing to any URL on that domain. In other words, you can add this one pattern in a few seconds, and Independent Analytics Pro will record clicks on every link pointing to any page on that domain.

### External

While most sites can stick to tracking a few individual domains, there are times when it makes more sense to track all outbound links.

Tracking all outbound links is easy with the External link pattern.

![Adding External link pattern](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:530/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/adding-external-link-pattern.png)

This link pattern doesn’t require a value to be configured. Just add it to your list of patterns, and all clicks on outbound links will be tracked.

### Protocol

The protocol link pattern lets you track clicks on links with specific protocols. Links to webpages use the “https” protocol, but there are also protocols for links that send emails, make phone calls, and send text messages.

![SMS protocol link pattern](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:644/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/sms-protocol-link-pattern.png)

Tracking for phone and email links is enabled by default, but you can easily [archive and delete](https://independentwp.com/knowledgebase/click-tracking/archive-delete-link-patterns/) these link patterns if you don’t need them. There is also an option to track SMS links that open text messaging when clicked.

If you want to track clicks on WhatsApp links, you can do that with the Domain link pattern rather than tracking a protocol.

## Important notes

To use the click-tracking feature in Independent Analytics Pro successfully, there are a few other things you should be aware of.

### Clear the cache after making changes

Whenever you make a change to your tracked links, please remember to clear your site’s cache so that these updates make it into the tracking script that IA Pro adds to each page of your website.

If you are using a CDN like Cloudflare, you may need to clear your site’s cache via your caching plugin first and then empty the CDN cache.

### Click data is synced every 60s

Click data is [synced once every minute](https://independentwp.com/knowledgebase/click-tracking/click-tracking-update-process/) with the database, so please allow for that delay when testing a new link pattern on your site.

### Archive links if you want to stop tracking

If you no longer want to track clicks for a certain link pattern, you can click the **Archive** link next to it. We have a [tutorial on archiving links here](https://independentwp.com/knowledgebase/click-tracking/archive-delete-link-patterns/) if you want to learn more.

### Right-clicks are tracked too

Both left- and right-clicks are tracked. This is important because a lot of visitors may right-click links and choose to open them in new tabs or right-click a PDF and choose to download it.

### Clicks can be counted multiple times in the table

Let’s say you’re tracking clicks on PDF links, and you’ve also added a tracked class to a link that points to a PDF. When somebody clicks on this link, it will be counted as one click in the Quick Stats and chart, but you’ll see two clicks in the data table. This is because both the tracked class and PDF pattern get credit for the click.

### Drag-and-drop to rearrange link patterns

You can drag and drop the link patterns into a new order by clicking and dragging them anywhere besides the **Edit** and **Archive** buttons.

### Debugging

If you are having trouble getting your clicks to track, please follow all the steps in our [debugging guide](https://independentwp.com/knowledgebase/click-tracking/clicks-not-tracked/).

---

## How (and Why) to Archive & Delete Link Patterns

**Source:** [https://independentwp.com/knowledgebase/click-tracking/archive-delete-link-patterns/](https://independentwp.com/knowledgebase/click-tracking/archive-delete-link-patterns/)

If you no longer need a link pattern, it is a good idea to archive it. Archiving a link pattern will pause tracking while retaining all recorded data.

Archiving is particularly useful if you make changes to your site that render some link patterns irrelevant. Rather than deleting all the data, archiving the link pattern is a good way to reduce clutter in the Click Tracking menu without losing data.

To archive a link pattern, simply click the **Archive** link on the right side.

![Archive link](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:356/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/archive-link.png)

Once archived, the link pattern will be moved to the list below.

You can click on the **Show Archived Links** button to open the full list of archived links.

![Archived links](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:387/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/archived-links.png)

If you change your mind, you can always click the **Resume Tracking** button to start tracking clicks for this link pattern again.

## Deleting links

Once a link is archived, you have the option to delete it via the **Delete** link. This will remove the link pattern entirely and delete all of its click data.

Generally speaking, we recommend retaining data, but if you made a mistake or the data is truly unneeded, then you may delete the link pattern.

---

## My Clicks Aren’t Getting Tracked (Debugging Guide)

**Source:** [https://independentwp.com/knowledgebase/click-tracking/clicks-not-tracked/](https://independentwp.com/knowledgebase/click-tracking/clicks-not-tracked/)

If you’re testing a new link pattern and your clicks aren’t showing up in the Clicks report, here are a few steps to debug the issue.

## Clear the cache

After making changes in the Click Tracking menu, it’s vital that you clear your site’s cache. This allows the new link tracking rules to show up in the tracking script that Independent Analytics adds to every page of your website.

If you are using a CDN like Cloudflare, you may need to clear your site’s cache via your caching plugin first and then empty the CDN cache.

## Use a private browser window

When testing clicks, use a private browser window or another browser altogether. If you are logged in, you’re likely not being tracked, which means your clicks won’t be tracked either.

## Wait for up to 60s

Click data only syncs once every 60s, so you will see a delay between your test clicks and when they show up in the Clicks report. If you have waited for one minute and you don’t see the data, there is no need to wait any longer, and you can continue to the next debugging step.

We have more info on why there is a delay here: [Why the Click Tracking Data Syncs Once Every Minute](https://independentwp.com/knowledgebase/click-tracking/click-tracking-update-process/).

## Make sure the class name is spelled correctly

If you’re using a class to track clicks, double-check that the class is spelled the exact same way in the Click Tracking menu as on the element you added it to.

## Check if PHP execution is disabled

There are some security tools that block PHP execution in the plugins folder, and that blocks the click tracking feature from functioning. As of now, we are aware of this conflict with the Solid Security plugin and Cloudways hosting.

If you are using either product, please [follow the steps here](https://independentwp.com/knowledgebase/click-tracking/allow-php-execution-plugins-folder/) to enable PHP execution.

## Make sure cron events are working

The next thing to check is that the site’s cron events are firing. You can install the excellent [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/) plugin and then visit the **Tools > Cron Events** menu to see all of your site’s upcoming cron events.

They should all have a time scheduled in the future, and you should see an event called 
```
iawp_click_processing
```

 scheduled one minute from now. If there is an issue, you will see a yellow warning sign next to each cron event and the time they were supposed to have been executed. If that is the case, it means your site is not running cron events.

If your site isn’t running cron events, it is most likely because they have been disabled with this line of code in the wp-config.php file: 
```
define('DISABLE_WP_CRON', true);
```

 You can either delete that line to allow WordPress to run its cron system, or you can leave that code and instead configure a cron schedule from your hosting/cPanel account. If you schedule cron events via your host, you can have it run once per minute and hit the following URL (replaced with your own domain): 
```
https://example.com/wp-cron.php?doing_wp_cron
```

Then, wait a minute or two and revisit the **Tools > Cron Events** menu, and you should see that the warnings are all gone. It could take a few minutes if there is a large backlog of delayed cron events.

## Try re-saving your permalinks

While rare, it is possible that the click endpoint is returning a 404 error due to a rule in the site’s .htaccess file. If you visit the **Settings > Permalinks** menu and simply save your existing settings there, it causes WordPress to rewrite the .htaccess file, and this can fix the 404 error.

## Contact support

If you have followed the steps above and your clicks still aren’t getting tracked, please reach out to us via the [Contact](https://independentwp.com/contact/) page or by emailing  support@independentwp.com directly, and we’ll be happy to help.

---

## Why the Click Tracking Data Syncs Once Every Minute

**Source:** [https://independentwp.com/knowledgebase/click-tracking/click-tracking-update-process/](https://independentwp.com/knowledgebase/click-tracking/click-tracking-update-process/)

Every time a visitor clicks on a link, Independent Analytics Pro checks if it matches one of your link rules and saves the click data to a file if there is a match.

If every click were saved to the database immediately, it would create an enormous number of database queries. Instead, the click data is saved to a file in a process that takes only a few milliseconds to complete and doesn’t create a database request.

Once every minute, IA Pro checks the click data file and saves any new clicks to the database. This process is only run when WordPress is already loaded, so there is minimal overhead.

This design allows IA Pro to accurately track clicks without creating a negative performance impact. The only downside is that if you are testing a link to ensure it’s getting tracked, you will have to wait up to 60 seconds to see the click appear in the Clicks report.

## Refreshing the click data faster for testing

If you are testing a new link pattern and want to see your click data faster, you can install the [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/) plugin, which lets you view all of your site’s upcoming cron events.

Inside the **Cron Events** menu, look for an event called 
```
iawp_click_processing
```

. Hover your cursor over it and click the **Run now** link to execute it immediately.

![Run click cron event now](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:626/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/10/run-click-cron-event-now.png)

This will update the Clicks report immediately so you can make sure your new link pattern is getting tracked as expected.

Please note that this is not a requirement and is only a convenient way to update the Clicks report more quickly when testing a new link pattern.

---

