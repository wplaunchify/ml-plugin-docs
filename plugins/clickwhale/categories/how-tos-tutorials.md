# How Tos Tutorials

*Category from ClickWhale documentation*

---

## How to Add UTM Parameters to ClickWhale Links

**Source:** [https://clickwhale.pro/docs/article/how-to-add-utm-parameters-to-clickwhale-links/](https://clickwhale.pro/docs/article/how-to-add-utm-parameters-to-clickwhale-links/)

UTM parameters help you identify where your website traffic comes from and measure the performance of your marketing campaigns across different platforms, channels, and content.

With ClickWhale, you can add UTM parameters directly to your managed links through the **Link Manager** without manually editing the Target URL. This makes it easier to organize, manage, and track your campaigns while keeping your links centralized.

**Note:** The UTM Parameters feature is available with **ClickWhale Pro**.

## Before You Begin

Before adding UTM parameters to your ClickWhale links, make sure the following requirements are met:

- **ClickWhale Pro** is installed and activated.
- You have **administrator access** to your WordPress dashboard.
- You have an existing ClickWhale link or are ready to create a new one.

If you haven’t created a ClickWhale link yet, see [How-to Shorten Links and Create Redirects](https://clickwhale.pro/docs/article/how-to-shorten-links-and-create-redirects/) before continuing.

## What Are UTM Parameters?

UTM parameters identify campaign traffic, but they do not collect or display analytics by themselves. The destination website must use an analytics platform, such as Google Analytics, to record and report the campaign data.

By using UTM parameters, you can compare the effectiveness of different traffic sources, marketing channels, campaigns, keywords, and content variations. This helps you understand which strategies drive the most visitors and conversions.

Adding UTM parameters does **not** change the content or functionality of the destination page. They simply append tracking information to the Target URL, allowing you to collect campaign data without affecting the visitor’s experience.

## How UTM Parameters Work with the Link Manager

The ClickWhale Link Manager connects your shared ClickWhale link, the Target URL, and the configured UTM parameters. When someone clicks your ClickWhale link, they are redirected to the Target URL with any configured UTM parameters automatically appended.

It’s important to understand how these components work together:

- **ClickWhale Link** – The shortened or branded URL that you share with your audience.
- **Target URL** – The destination webpage where visitors are redirected after clicking the ClickWhale link.
- **UTM Parameters** – Additional tracking values that ClickWhale appends to the Target URL to help analytics tools identify the source and performance of your campaigns.

For example, when someone clicks your ClickWhale link, they are first redirected through ClickWhale and then sent to the Target URL with the configured UTM parameters attached. This allows you to track campaign performance while continuing to share the same ClickWhale link.

## UTM Parameters Available in ClickWhale

The **UTM Parameters** tab contains five optional fields that let you configure campaign tracking for your Target URL. Complete only the fields that apply to your campaign and analytics setup.

![ClickWhale UTM parameters](https://clickwhale.pro/wp-content/uploads/2026/07/ClickWhale-UTM-parameters-1024x382.png)

**UTM Campaign (utm_campaign)**

The **UTM Campaign** field identifies the specific marketing campaign associated with your link. Use a clear and descriptive campaign name so you can easily recognize it in your analytics reports.

**Example:** summer_sale_2026

**UTM Medium (utm_medium)**

The **UTM Medium** field identifies the marketing channel used to share your link. This helps distinguish traffic from different types of campaigns.

**Example:** social

**UTM Source (utm_source)**

The **UTM Source** field identifies where your visitors come from, such as a website, platform, or service.

**Example:** facebook

**UTM Term (utm_term)**

The **UTM Term** field is commonly used to track paid keywords or search terms. You can also use it to organize campaigns based on your own tracking strategy.

**Example:** wordpress_plugins

**UTM Content (utm_content)**

The **UTM Content** field helps differentiate similar links within the same campaign, such as different banners, buttons, or advertisements.

**Example:** blue_banner

## How to Add UTM Parameters to a ClickWhale Link

You can add UTM parameters when creating a new ClickWhale link or editing an existing one. ClickWhale will add the campaign information to the Target URL when someone opens the managed link.

1. Log in to your WordPress dashboard.
2.  Go to **ClickWhale > Links**.
3. Create a new link or select an existing link to edit.

![ClickWhale link manager keywords](https://clickwhale.pro/wp-content/uploads/2026/07/ClickWhale-link-manager-keywords-1024x348.png)

4. Enter or confirm the **Target URL** for the page where you want to send visitors.
5. Open the **UTM Parameters** tab.
6. Enter the campaign values that apply to your link:
– **UTM Campaign**, such as summer_sale_2026
– **UTM Medium**, such as social
– **UTM Source**, such as facebook
– **UTM Term**, such as wordpress_plugins
– **UTM Content**, such as blue_banner

![ClickWhale UTM parameters with values](https://clickwhale.pro/wp-content/uploads/2026/07/ClickWhale-UTM-parameters-with-values-1024x386.png)

7. Save or update the link to apply the UTM parameters.
8. Copy the ClickWhale link and open it in a browser to confirm that it redirects to the correct destination with the UTM parameters included.

## Example UTM Campaign

The following example shows how UTM parameters can be used to track traffic from a Facebook post promoting a product.

**Original Target URL**

```
https://example.com/products/wordpress-plugin
```

**ClickWhale Link:**

```
https://example.com/go/wordpress-plugin
```

**Resulting Destination URL:******

Using the example UTM values above, the resulting destination URL will be:

```
https://example.com/products/wordpress-plugin?utm_campaign=summer_sale_2026&utm_medium=social&utm_source=facebook&utm_term=wordpress_plugins&utm_content=blue_banner
```

When someone clicks your ClickWhale link, they are redirected to the Target URL with the configured UTM parameters appended. Analytics tools can then use these values to attribute traffic to the correct campaign, channel, and content variation.

## How to Test the Link

After adding UTM parameters to your ClickWhale link, it’s important to verify that the link redirects correctly and includes the expected campaign information before sharing it with your audience.

1. Copy your ClickWhale link after saving your changes.
2. Open the link in a new browser tab or window.
3. Confirm that the link redirects to the correct **Target URL**.
4. Check the browser’s address bar to verify that the UTM parameters appear in the destination URL.
5. Review each UTM value to ensure the spelling, capitalization, and naming match your campaign plan.
6. If you find any errors, return to the **UTM Parameters** tab, update the values, save the link, and test it again.

**Tip:** Always test your campaign links before publishing them to ensure the destination URL contains the correct UTM values before sharing the link.

## Best Practices

Follow these best practices to keep your UTM parameters consistent and make your campaign reports easier to understand and analyze.

- Use **lowercase** values for all UTM parameters to maintain consistent reporting across analytics tools.
- Avoid spaces in UTM values. Use **underscores (****_****)** or **hyphens (****–****)** instead to improve readability and prevent inconsistencies.
- Create clear and descriptive campaign names that make it easy to identify the purpose of each campaign.
- Use different UTM values for each marketing channel or content placement to accurately compare campaign performance.
- Maintain a consistent naming convention across your team to keep reports organized and easier to interpret.
- Avoid including sensitive or confidential information in UTM parameter values, as they become part of the destination URL.
- Test every campaign link before publishing or sharing it to ensure the destination URL and UTM parameters are configured correctly.

## FAQs

**What are UTM parameters used for?**

UTM parameters are used to track the performance of your marketing campaigns by identifying where your website traffic comes from. They help analytics tools measure traffic from different sources, mediums, campaigns, keywords, and content variations.

**Do UTM parameters change my ClickWhale link?**

No. UTM parameters do not change your ClickWhale link. They are appended to the **Target URL** during the redirect, while the ClickWhale link itself remains the same.

**Can I add UTM parameters to an existing link?**

Yes. You can edit an existing ClickWhale link, open the **UTM Parameters** tab, update the campaign values, and save your changes.

**Which UTM fields are required?**

The current ClickWhale Pro interface does not indicate that any of the UTM fields are required. You can complete the fields that are relevant to your campaign tracking needs.

**Can I edit the UTM parameters later?**

Yes. You can modify the UTM parameters at any time by editing the ClickWhale link and updating the values in the **UTM Parameters** tab.

**Will editing the UTM parameters change the ClickWhale short URL?**

No. Editing the UTM parameters only changes the tracking information added to the **Target URL**. Your ClickWhale short URL remains the same.

**Where can I view the results of my UTM campaign?**

You can view your campaign results in the analytics platform connected to the destination website, such as Google Analytics. The website must have analytics tracking configured, and you must have access to its reports. ClickWhale does not collect or display UTM campaign reports inside the plugin.

**Is the UTM Parameters feature available in the free version of ClickWhale?**

No. The **UTM Parameters** feature is available exclusively with **ClickWhale Pro**.

---

## How to Use AMZ Connect with Smart Displays

**Source:** [https://clickwhale.pro/docs/article/how-to-use-amz-connect-with-smart-displays/](https://clickwhale.pro/docs/article/how-to-use-amz-connect-with-smart-displays/)

[AMZ Connect](https://amzconnect.io/) allows you to fetch Amazon product information directly into your Smart Displays. Instead of manually entering product details, AMZ Connect automatically imports the product title, image, price, and buy link from Amazon and keeps your product boxes accurate and up to date.

Perfect for:

• Affiliate marketers promoting Amazon products
• Niche websites and review blogs
• Product recommendation articles
• Gift guides and comparison posts

## Before You Start

Before using AMZ Connect, make sure you have:

• ClickWhale Pro installed and activated
• An AMZ Connect account
• Your AMZ Connect API key
• Your Amazon Associates Tracking ID

You can purchase an AMZ Connect subscription and receive your API key at: [https://amzconnect.io/](https://amzconnect.io/)

## Video Tutorial

Prefer to watch instead? Follow the complete walkthrough below.

## Step 1: Connect AMZ Connect to ClickWhale

Navigate to: **ClickWhale → Settings → Integrations**

![AMZ Connect Settings](https://clickwhale.pro/wp-content/uploads/2026/06/AMZ-Connect-Settings-1024x836.png)

Under the AMZ Connect section, configure the following settings.

**API Key**

- To use AMZ Connect, you’ll need an API key. You can purchase an AMZ Connect subscription at: [https://amzconnect.io/](https://amzconnect.io/)
- After purchasing, you’ll receive your API key. Paste the key into the API Key field.
- Once connected successfully, you’ll see the status: **Connected**

**Usage Quota**

- The Usage Quota section shows:
- The number of product fetches used during the current month
- The number of remaining fetches available
- The monthly reset date
- The last time your quota information was updated

- You can also click **Refresh** to retrieve the latest usage information.

**Store**

- Select the Amazon marketplace that you use most often.
- This store will automatically be selected when creating new Smart Displays, although you can change it for each display individually.

![AMZ Connect Amazon Store](https://clickwhale.pro/wp-content/uploads/2026/06/AMZ-Connect-Amazon-Store-1024x811.png)

**Tracking ID**

- Enter your Amazon Associates Tracking ID.
- Example:
- ```
mysite-21
```

- Your tracking ID ensures that sales generated through your Smart Displays are properly attributed to your Amazon Associates account.

**Output Settings**

The Output Settings section lets you control how Amazon product information is displayed inside your Smart Displays.

**Button Text**

- Customize the button text that appears on your Smart Displays.
- Examples:
- Buy on Amazon
- Check Price
- View on Amazon
- Shop Now
- This value can also be overridden for individual Smart Displays.

**Description Bullets**

- Choose how many Amazon bullet points should appear in the product description.
- Examples:
- 3 = Display only the first three bullet points.
- 5 = Display the first five bullet points.
- 0 = Display all available bullet points.
- This setting helps you control the length of your product boxes and create a cleaner layout.

**Long Descriptions**

When a product contains more bullet points than your selected limit, you can choose one of two display options:

- **Truncate**
- Only display the number of bullet points specified in the Description Bullets setting.

- **Show “Show more” Toggle**
- Display the selected number of bullet points and allow visitors to expand the remaining content by clicking a Show More button.
- This option is useful when you want to keep your Smart Displays compact while still giving visitors access to the complete product description.

Once you’ve configured everything, click:

**Save Changes**

## Step 2: Create or Edit a Smart Display

Create a new Smart Display or edit an existing one.

If you’re new to Smart Displays, please refer to our guide:

**How to Create and Use Smart Displays**
[https://clickwhale.pro/docs/article/how-to-create-and-use-smart-displays/](https://clickwhale.pro/docs/article/how-to-create-and-use-smart-displays/)

## Step 3: Import an Amazon Product

Inside the Smart Display editor, locate the **AMZ Connect** panel.

Enter the **Product ASIN** and **Store**, then click **Fetch Product**

![Amzconnect panel](https://clickwhale.pro/wp-content/uploads/2026/06/amzconnect-panel-1024x519.png)

## Step 4: Review the Imported Product Information

AMZ Connect automatically imports:

- Product title
- Product image
- Product description and bullet points
- Product price
- Amazon buy link

The imported description will follow the settings you configured under:

**Description Bullets** and **Long Descriptions**

A live preview will appear inside the Smart Display Preview section so you can immediately see how the product box will look on your website.

![AMZConnect+SmartDisplay](https://clickwhale.pro/wp-content/uploads/2026/06/AMZConnectSmartDisplay-1024x878.png)

## Step 5: Customize Your Display

To keep the product information synced with Amazon, make sure the following **Use Amazon product data** option remains enabled. But if needed, you can still customize the Smart Display by. Just disable the **Use Amazon product data**to do so.

## Step 6: Publish Your Smart Display

Save your Smart Display and insert it anywhere on your website using:

```
[cw-smart-display id="123"]
```

Or add it using the ClickWhale Smart Display Gutenberg block.

![Smart display block](https://clickwhale.pro/wp-content/uploads/2026/06/smart-display-block-1.png)

## Why Use AMZ Connect?

AMZ Connect helps you:

- Build Amazon product boxes in seconds
- Automatically import product information
- Reduce manual data entry
- Keep product information accurate and up to date
- Create more engaging affiliate content

## FAQs

**Where do I get my AMZ Connect API key?**

You will receive your API key after purchasing an AMZ Connect subscription at: [https://amzconnect.io](https://amzconnect.io)

**What is an ASIN?**

ASIN stands for Amazon Standard Identification Number. Every product on Amazon has a unique ASIN that identifies the product.

**Can I use products from different Amazon marketplaces?**

Yes. Each Smart Display can use a different Amazon marketplace.

**Will product prices update automatically?**

AMZ Connect fetches product information directly from Amazon, helping keep your Smart Displays accurate and current.

**Can I limit the number of Amazon description bullet points?**

Yes. The Description Bullets setting allows you to choose how many bullet points are displayed in your Smart Displays. You can also enable the Show More toggle to let visitors expand and view the remaining product information.

---

## How to Create and Use Smart Displays

**Source:** [https://clickwhale.pro/docs/article/how-to-create-and-use-smart-displays/](https://clickwhale.pro/docs/article/how-to-create-and-use-smart-displays/)

Smart Displays allow you to create attractive product boxes directly inside your content. They are ideal for affiliate products, recommended tools, software reviews, service promotions, and resource pages.

Each Smart Display can include:

- Product title
- Product image
- Description
- Price
- Call-to-action button
- ClickWhale link tracking
- Optional clickable title and image

You can insert Smart Displays anywhere on your website using a shortcode or the ClickWhale Gutenberg block.

## Video Tutorial

Prefer to watch instead?

Follow the complete walkthrough below:

## Step 1: Create a New Smart Display

From your WordPress dashboard, navigate to:

**ClickWhale → Smart Displays**

Click **Add New** to create a new Smart Display.

You will see a live preview on the right side of the screen, allowing you to see your Smart Display as you build it.

## Step 2: Enter the Smart Display Details

**Title**

Enter the name of the product, service, or offer you want to promote.

Example:

```
ClickWhale PRO
```

The title will appear prominently inside the Smart Display.

**Image**

Upload or select a product image.

For best results:

- Use a square image
- Recommended ratio: 1:1

The image will be displayed alongside the product information.

**Link**

Select one of your existing ClickWhale links from the dropdown.

This allows you to:

- Track clicks
- Use your existing ClickWhale redirects
- View analytics inside ClickWhale

Example:

```
Buy ClickWhale Pro
```

**Description**

Add information about the product or offer.

You can use the visual editor to format your content.

Example:

```
The #1 Link Shortener & Click Tracker for WordPress.

With ClickWhale, you can easily manage, shorten, and analyze links on your WordPress website while using your own domain.
```

Use this area to highlight key benefits and important selling points.

**Title and Image as Link**

Enable this option if you want visitors to be able to click the title and image.

When enabled:

- Product title becomes clickable
- Product image becomes clickable

Both will use the selected ClickWhale link.

**Primary Button Text**

Enter the text that should appear on the call-to-action button.

Examples:

- View Pricing
- Learn More
- Buy Now
- Get Started
- Visit Website

If left blank, ClickWhale will use the default button text configured in the Smart Display settings.

**Price**

Optionally display pricing information inside the Smart Display.

Example:

```
From €39.50/year
```

Leave this field empty if you do not want to display pricing.

![CW SmartDisplay Dashboard](https://clickwhale.pro/wp-content/uploads/2026/06/CW-SmartDisplay-Dashboard-1024x689.png)

## Step 3: Save Your Smart Display

Once you have completed all fields, click **Save**.

After saving, ClickWhale automatically generates a shortcode for the Smart Display.

Example:

```
[cw_smart_display id="1"]
```

You can copy this shortcode and use it anywhere on your website.

## Step 4: Insert a Smart Display

**Using Shortcode**

Open the post or page where you want to display the product box.

Paste the generated shortcode into:

- Paragraph block
- Shortcode block
- Classic Editor

Example:

```
[cw_smart_display id="1"]
```

Update or publish the page.

Your Smart Display will now appear on the frontend.

![Smart Display shortcode](https://clickwhale.pro/wp-content/uploads/2026/06/Smart-Display-shortcode-1024x474.png)

**Using the Gutenberg Block**

If you are using the WordPress Block Editor:

1. Edit a page or post.
2. Click the “+” button to add a block.
3. Search for **Smart Display**.
4. Select the Smart Display block.
5. Choose the Smart Display you want to display.
6. Save or update the page.

This method eliminates the need to copy and paste shortcodes manually.

![Smart Display Block](https://clickwhale.pro/wp-content/uploads/2026/06/Smart-Display-Block-1024x528.png)

## Configure Global Smart Display Styles

You can configure global settings for all Smart Displays by navigating to:

**ClickWhale → Settings → Smart Displays**

**Disclosure Text**

Add a disclosure notice that will automatically appear on every Smart Display.

Example:

```
This post may contain affiliate links. We may earn a commission at no extra cost to you.
```

This is useful for affiliate marketing compliance.

**Primary Button Styling**

Customize the appearance of your Smart Display buttons:

- Button color
- Hover color
- Border color
- Border radius
- Text color

These settings automatically apply across all Smart Displays.

This helps maintain a consistent brand appearance throughout your website.

## Example Use Cases

**Affiliate Product Reviews**

Display recommended products directly inside review articles.

**Resource Pages**

Show your favorite tools and services in a consistent format.

**Software Recommendations**

Promote software products with pricing and direct call-to-action buttons.

**Service Promotions**

Highlight your own services with a professional product-style layout.

## FAQs

**Can I create multiple Smart Displays?**

Yes. You can create as many Smart Displays as needed.

**Can I use Smart Displays with affiliate links?**

Yes. Smart Displays work with your existing ClickWhale links, allowing you to benefit from click tracking, analytics, and link management.

**Can I customize the button design?**

Yes. Global button styling options are available under the Smart Displays settings.

**Can I use Smart Displays with Gutenberg?**

Yes. Smart Displays can be added using either a Gutenberg block or a shortcode.

**Is Smart Displays available in the free version?**

Yes. Smart Displays are available in the free version of ClickWhale.

**Can I make the image and title clickable?**

Yes. Enable the **Title and Image as Link** option when creating the Smart Display.

---

## How to Bulk Update Target URLs

**Source:** [https://clickwhale.pro/docs/article/how-to-bulk-update-target-url/](https://clickwhale.pro/docs/article/how-to-bulk-update-target-url/)

As your affiliate marketing campaigns grow, you may need to update multiple Target URLs in ClickWhale at the same time.

This often happens when:

- You switch to a new affiliate network
- An affiliate program changes its tracking parameters
- You need to update outdated destination URLs
- You want to replace tracking IDs across multiple links

Instead of editing each ClickWhale link one by one, you can use the [Better Search Replace](https://wordpress.org/plugins/better-search-replace/) plugin to update multiple Target URLs in just a few clicks.

## Video Tutorial

Prefer to watch instead? Follow the complete walkthrough below.

## Before You Start

Before making any bulk changes, we recommend:

- Creating a full database backup
- Having administrator access to your WordPress site
- Installing and activating the Better Search Replace plugin

## Step 1: Open Better Search Replace

From your WordPress dashboard, navigate to:

**Tools → Better Search Replace**

You will see fields for searching and replacing text within your database.

![Better search replace dashboard](https://clickwhale.pro/wp-content/uploads/2026/06/better-search-replace-dashboard.png)better search replace dashboard

## Step 2: Enter the Values to Replace

In the **Search For** field, enter the URL or parameter you want to replace.

Example:

```
?aff_id=922
```

In the **Replace With** field, enter the new value.

Example:

```
?aff_code=demo123
```

Next, select the **wp_clickwhale_links** table.

This ensures that only your ClickWhale links are updated.

## Step 3: Run a Dry Run

Before making any changes, enable the **Run as dry run** option.

A dry run scans your database and shows how many records would be updated without making any actual changes.

Click **Run Search/Replace**.

Review the results to confirm that the correct links have been identified.

![Better search replace dryrun](https://clickwhale.pro/wp-content/uploads/2026/06/better-search-replace-dryrun.png)better search replace dryrun

A Dry Run notice will appear. If the dry run appears to have found a cell to be updated, you can disable the “Run as Dry run” to proceed with updating the links.

![Bsr notice](https://clickwhale.pro/wp-content/uploads/2026/05/bsr-notice.png)

## Step 4: Apply the Changes

If the dry run results look correct:

1. Disable the **Run as dry run** option.
2. Click **Run Search/Replace** again.

Better Search Replace will update all matching ClickWhale links in the selected table.

### Example

#### Before

```
https://example.com/product?aff_id=922
```

![Bsr before](https://clickwhale.pro/wp-content/uploads/2026/05/bsr-before-1024x276.png)

#### After

And here’s after updating the Links with Better Search Replace

```
https://example.com/product?aff_code=demo123
```

![Bsr after](https://clickwhale.pro/wp-content/uploads/2026/05/bsr-after-1024x275.png)

## Why Use Better Search Replace?

Using Better Search Replace allows you to:

- Update multiple ClickWhale Target URLs at once
- Replace affiliate parameters in bulk
- Save time by avoiding manual edits
- Keep your links accurate and up to date

Always perform a dry run before applying changes to verify that the correct links will be updated.

That’s it. Your ClickWhale Target URLs have now been updated in bulk.

## FAQS

### Can I bulk update affiliate IDs in ClickWhale?

Yes. You can use Better Search Replace to replace affiliate IDs, tracking parameters, or destination URLs stored in your ClickWhale links.

### Is it safe to use Better Search Replace?

Yes, but always create a backup and perform a dry run before making changes.

### Which database table should I select?

Select the 
```
wp_clickwhale_links
```

 table to update ClickWhale Target URLs. If your site uses a custom database prefix, the table name may be different.

---

## How to Enable or Disable Link Tracking

**Source:** [https://clickwhale.pro/docs/article/how-to-enable-or-disable-link-tracking/](https://clickwhale.pro/docs/article/how-to-enable-or-disable-link-tracking/)

Link tracking records clicks on your ClickWhale links. This feature helps you understand how users interact with your content and how your links perform.

ClickWhale enables link tracking by default because it provides important performance data. The collected data appears in the Statistics tab of the plugin.

You can disable tracking if you do not want ClickWhale to record link clicks.

Before you begin, make sure that:

- You have administrator access to the WordPress dashboard

## Where to Enable or Disable Link Tracking

You can control link tracking from the ClickWhale settings page.

1. Log in to your WordPress Dashboard.
2. Navigate to ClickWhale > Settings.
3. Open the Tracking tab.
4. Locate the Disable Tracking option.

![ClickWhale link tracking](https://clickwhale.pro/wp-content/uploads/2026/03/clickwhale-link-tracking-1024x581.png)

### Enable Link Tracking

Link tracking remains active when the Disable Tracking option is turned off.

Steps

1. Go to ClickWhale > Settings.
2. Open the Tracking tab.
3. Make sure the Disable Tracking option is not enabled or unchecked.
4. Save your settings if changes were made.

Once enabled, ClickWhale will record every click on your links.

### Disable Link Tracking

If you disable tracking, ClickWhale will stop recording clicks for your links.

Steps

1. Go to ClickWhale > Settings.
2. Open the Tracking tab.
3. Enable the Disable Tracking option by ticking the checkbox.
4. Save your settings.

After disabling this feature, the plugin will no longer record click activity.

## Where to View Link Click Data

To view your click data:

1. Go to your WordPress Dashboard.
2. Navigate to ClickWhale > Statistics.

Here you can review the performance of your tracked links.

## How Link Tracking Works

When a visitor clicks a ClickWhale link, the plugin records the click automatically. These clicks appear in the Statistics tab of the ClickWhale dashboard.

The statistics help you understand how your links perform and how users interact with your content.

![Clickwhale statistics](https://clickwhale.pro/wp-content/uploads/2026/03/clickwhale-statistics-1024x842.png)

Using the statistics, you can:

• Monitor total link clicks
• Measure click through activity
• Identify which links receive the most engagement

This information helps you evaluate campaigns and improve your link strategy.

## FAQs

**Is link tracking enabled by default?**

Yes. ClickWhale enables link tracking by default to record clicks on your links and display the data in the **Statistics** tab.

**What happens if I disable link tracking?**

When link tracking is disabled, ClickWhale stops recording new clicks for your links. As a result, no new click activity will appear in the **Statistics** tab while tracking is disabled.

**Can I enable link tracking again later?**

Yes. You can re-enable link tracking at any time by going to **ClickWhale > Settings > Tracking**, disabling the **Disable Tracking** option, and saving your changes.

**Where can I view my link click statistics?**

You can view recorded click data by going to **ClickWhale > Statistics** in your WordPress dashboard.

**Will disabling link tracking affect my existing ClickWhale links?**

No. Disabling link tracking only stops ClickWhale from recording click activity. Your existing ClickWhale links continue to function and redirect visitors as normal.

---

## How to Create QR codes for Links

**Source:** [https://clickwhale.pro/docs/article/how-to-create-qr-codes-for-links/](https://clickwhale.pro/docs/article/how-to-create-qr-codes-for-links/)

You now have the awesome ability to generate a QR code for any of your ClickWhale links. Easier than ever to share them offline, in print, or anywhere a scan is more convenient than a click.

## What is a QR Code?

A QR code (short for Quick Response code) is a square barcode that can be scanned using a smartphone camera. Once scanned, it instantly directs users to a specific URL—like your ClickWhale short link. It’s perfect for print materials, packaging, posters, event flyers, menus, business cards, and more.

## Why Use QR Codes with ClickWhale Links?

QR codes offer a fast and user-friendly way to:

📱 Let people scan and visit your link instantly—no typing required

🎯 Share links in physical environments (print ads, booths, packaging, etc.)

📈 Track and manage all your traffic through ClickWhale analytics

## QR Codes and the ClickWhale Link Manager

ClickWhale generates a QR code for links saved in the Link Manager. Before creating a QR code, you need to create or import the link you want to share.

If you have not created a link yet, follow our guide on [how to shorten links and create redirects](https://clickwhale.pro/docs/article/how-to-shorten-links-and-create-redirects/).

Once your link is available in ClickWhale, you can generate and download its QR code from the link editor. The QR code directs visitors to your ClickWhale short link, allowing you to update the target URL later without replacing the printed QR code.

## How to Generate a QR Code in ClickWhale

It only takes a few clicks:

1. Log in to your website dashboard
2. Navigate to the ClickWhale > Links tab
3. Edit the link you want to generate a QR code for
4. Click the Generate QR Code button at the upper right corner of the General tab.
5. Download or save the QR code by right-clicking on it.

![Qr code](https://clickwhale.pro/wp-content/uploads/2025/03/qr-code-1024x595.png)

1. 

You can now use your QR code anywhere you’d like to share that link visually—on posters, business cards, social media graphics, product labels, and more.

## Best Practices for Using ClickWhale QR Codes

✅ **Always test before sharing****** Scan your QR code with multiple devices to ensure it directs to the correct link.

🎨 **Maintain high contrast****** ClickWhale QR codes use bold, high-contrast colors (like black on yellow), which are generally very scannable. Just make sure the background where you place it doesn’t interfere—avoid placing it on busy or low-contrast backgrounds.

📏 **Use proper sizing****** For print, your QR code should be at least **2 x 2 cm (0.8 x 0.8 inches)**. For posters or signage, go larger to ensure it can be scanned from a distance.

🖼️ **Give it breathing room****** Leave enough white (or background-colored) space around your QR code—at least 4 modules (the tiny black squares) on each side—to avoid scanning errors.

🖨️ **Print on non-reflective surfaces****** For best results, avoid glossy paper or reflective materials which may interfere with scanning.

## FAQs

**Do I need to create a ClickWhale link before generating a QR code?**

Yes. QR codes are generated from links stored in the **ClickWhale Link Manager**. Create a new link or import an existing one before generating a QR code.

**Can I generate a QR code for an imported link?**

Yes. As long as the link is available in the ClickWhale Link Manager, you can generate and download its QR code.

**What happens if I change the destination URL of my link?**

The QR code continues to work because it points to your ClickWhale short link. If you update the destination URL, visitors scanning the QR code will automatically be redirected to the new destination without needing a new QR code.

**Can I download the QR code again later?**

Yes. Open the link in the **Link Editor** and download the QR code again whenever you need it.

**Where can I use my QR code?**

You can use your QR code on business cards, flyers, posters, brochures, product packaging, menus, presentations, email signatures, and other printed or digital materials.

**Why isn’t my QR code working?**

If your QR code isn’t working as expected, check the following:

- The ClickWhale link has been created or imported successfully.
- The destination URL is valid.
- The QR code wasn’t altered or damaged after downloading.
- You’re scanning the QR code with a compatible QR code reader or mobile device.

**Do I need to generate a new QR code after updating my link?**

No. Because the QR code points to your ClickWhale short link, it will continue to work even if you update the destination URL later. This allows you to reuse the same QR code without reprinting or redistributing it.

---

## How to Use the Keyword Auto Linker

**Source:** [https://clickwhale.pro/docs/article/how-to-use-the-keyword-auto-linker/](https://clickwhale.pro/docs/article/how-to-use-the-keyword-auto-linker/)

**Automatically convert keywords into ClickWhale links across your website.**

The **Keyword Auto Linker** lets you assign keywords to your ClickWhale links and automatically converts matching words or phrases into clickable links on supported areas of your website.

With the Keyword Auto Linker, you can:

- Automatically link keywords in posts, pages, and custom post types.
- Control where keywords are processed, including archive pages and other supported content areas.
- Manage keyword linking without editing your original WordPress content.

**Note:** The Keyword Auto Linker is available with **ClickWhale Pro**.

🎥 **Prefer to watch instead?**
Watch the video tutorial below to learn how to assign keywords, configure the global settings, and see how the Keyword Auto Linker works on your website.

Whether you prefer watching or reading, here’s a complete guide to help you use ClickWhale’s Keyword Auto Linker. 👇

## How the Keyword Auto Linker Works

The **Keyword Auto Linker** works with ClickWhale’s **Link Manager** to automatically convert assigned keywords into clickable links across your website. After you assign keywords to a ClickWhale link, the plugin scans supported content and generates links dynamically when visitors view the page.

The process is simple:

1. Create a ClickWhale link and set its destination URL.
2. Assign one or more keywords to the link.
3. Choose where the Keyword Auto Linker should process those keywords.
4. Visit your website to see the assigned keywords automatically converted into clickable links.

**Note:** The Keyword Auto Linker does not permanently modify your posts or pages. Links are generated dynamically on the frontend, so your original WordPress content remains unchanged.

If you haven’t created a ClickWhale link yet, see our [How-to Shorten Links and Create Redirects](https://clickwhale.pro/docs/article/how-to-shorten-links-and-create-redirects/) guide before continuing.

## Assign Keywords to a Link

Once you’ve created a ClickWhale link, you can assign one or more keywords that will automatically be converted into clickable links across supported areas of your website.

To assign keywords:

1. From your WordPress dashboard, go to **ClickWhale → Links**.
2. Create a new link or edit an existing one.
3. Open the **Keyword Auto Linker** tab.
4. Enter the word or phrase you want ClickWhale to automatically link.
5. Select **Add More** to assign additional keywords, if needed.
6. Click **Save Link** to apply your changes.

**Note:** You can assign up to **10 keywords** to a single ClickWhale link.
**Tip:** Choose keywords that are relevant to your destination page and review the affected content after saving to ensure links appear in the intended locations.

![ClickWhale Keyword Auto Linker Keywords](https://clickwhale.pro/wp-content/uploads/2024/10/ClickWhale-Keyword-Auto-Linker-Keywords-1024x322.png)

## View Assigned Keywords

After assigning keywords to a ClickWhale link, you can quickly review them from the **Links** overview page.

To view the assigned keywords:

1. From your WordPress dashboard, go to **ClickWhale → Links**.
2. Locate the link you want to review.
3. Check the **Keywords** column to see the keywords currently assigned to that link.

If you need to update the assigned keywords, edit the link, open the **Keyword Auto Linker** tab, make your changes, and click **Save Link**.

![ClickWhale links with KW auto linker](https://clickwhale.pro/wp-content/uploads/2024/10/ClickWhale-links-with-KW-auto-linker-1024x156.png)

## Configure the Global Keyword Auto Linker Settings

The global Keyword Auto Linker settings let you control how and where ClickWhale automatically converts assigned keywords into links across your website.

To access these settings:

![Image](https://clickwhale.pro/wp-content/uploads/2024/10/image-20-999x1024.png)

### Available Settings

#### Disable Keyword Auto Linker

Enable or disable the Keyword Auto Linker without removing your assigned keywords. When disabled, ClickWhale will stop automatically converting keywords into links until the feature is enabled again.

#### Replacement Limit

Set the maximum number of keyword replacements allowed on a single page. This helps prevent the same keyword from being linked too many times within the same piece of content.

#### Link Target

Choose whether automatically generated links open in the **same browser tab** or a **new tab**.

#### HTML Headings

Enable or disable keyword replacements within HTML heading tags (H1–H6). Disable this option if you don’t want keywords in headings to become clickable links.

#### Archive Pages

Choose whether the Keyword Auto Linker should process keywords on archive pages, such as category or tag archives.

#### Front Page

Enable keyword linking on your website’s front page.

#### Blog Page

Enable keyword linking on the page assigned to display your latest blog posts.

#### Post Type

Select which post types the Keyword Auto Linker should scan for assigned keywords, including posts, pages, and supported custom post types.

#### ACF Fields

Enable keyword linking within supported content stored in **Advanced Custom Fields (ACF)**.

**Tip:** After saving your settings, visit a page containing one of your assigned keywords to verify that the links appear as expected. If you don’t see the changes immediately, clear your website, server, or CDN cache.

## See the Keyword Auto Linker in Action

Once you’ve assigned keywords and configured the global settings, ClickWhale will automatically convert matching keywords into clickable links when visitors view your website.

For example, if you assign the keyword **“ClickWhale”** to one of your ClickWhale links, any matching occurrences of that keyword within supported content areas can automatically become clickable links on the frontend.

![ClickWhale KW in action](https://clickwhale.pro/wp-content/uploads/2024/10/ClickWhale-KW-in-action.png)

**Note:** The Keyword Auto Linker generates links dynamically when the page is displayed. It does not permanently insert links into the content stored in the WordPress editor or database.

Because these links are generated on the frontend, they won’t appear in your saved post or page content. As a result, the **Link Scanner** cannot detect automatically linked keywords.

If you’d like to learn more, see our guide on [Understanding Link Scanner Results.](https://clickwhale.pro/docs/article/understanding-link-scanner-results/)

## FAQs

**What is the Keyword Auto Linker?**

The Keyword Auto Linker automatically converts assigned words or phrases into ClickWhale links when visitors view your website. The links are generated dynamically on the frontend, so your original WordPress content remains unchanged.

**Do I need to create a ClickWhale link first?**

Yes. Before assigning keywords, you’ll need to create a new ClickWhale link or edit an existing one through the **Link Manager**.

**Does the Keyword Auto Linker modify my content?**

No. The Keyword Auto Linker does not change the content stored in your WordPress editor or database. Instead, it generates links dynamically when the page is displayed to visitors.

**How many keywords can I assign to a single link?**

You can assign up to **10 keywords** to a single ClickWhale link. To add more than one keyword, use the **Add More** option in the Keyword Auto Linker tab.

**Can I limit how many times a keyword is linked?**

Yes. Use the **Replacement Limit** setting to control the maximum number of times assigned keywords are automatically linked on a page

**Can I choose where keywords are automatically linked?**

Yes. The global Keyword Auto Linker settings allow you to choose where keywords are processed, including supported post types, archive pages, the front page, the blog page, HTML headings, and supported ACF fields.

**Can I prevent keywords from being linked inside headings?**

Yes. Disable the **HTML Headings** option in the Keyword Auto Linker settings if you don’t want keywords inside heading tags to be converted into links.

**Can automatically generated links open in a new tab?**

Yes. Configure the **Link Target** setting to choose whether automatically generated links open in the current tab or a new browser tab.

**Why isn’t my keyword being converted into a link?**

If a keyword isn’t being linked, check the following:

- The keyword has been assigned to the correct ClickWhale link.
- You clicked **Save Link** after adding or updating the keyword.
- The Keyword Auto Linker is enabled in the global settings.
- The appropriate post type or content area is enabled.
- The replacement limit has not been reached.
- Your website, server, or CDN cache has been cleared.

**Why doesn’t the Link Scanner detect auto-linked keywords?**

The Link Scanner only checks links stored in your WordPress database. Since the Keyword Auto Linker generates links dynamically on the frontend, those links don’t exist in the saved content and therefore aren’t detected by the scanner.

**Can I temporarily disable the Keyword Auto Linker?**

Yes. Go to **ClickWhale → Settings → Keyword Auto Linker**, disable the feature, and save your changes. Your assigned keywords will remain attached to their ClickWhale links and can be re-enabled at any time.

---

## How to Add Google Tag Manager To WordPress with ClickWhale

**Source:** [https://clickwhale.pro/docs/article/add-google-tag-manager-to-wordpress/](https://clickwhale.pro/docs/article/add-google-tag-manager-to-wordpress/)

Tracking customer behavior and having the right data are vital for your website’s success.

This is because being able to access accurate data will let you **see what your customers do on your website, what they like, and what you should change** to maximize conversions and improve the user experience.

**Google Tag Manager**is one of **the best tools to get this data, offering several benefits:**

- **User behavior tracking.**Track clicks on specific buttons, form submissions, and video views.
- **Event tracking.** Track downloads, scroll depth, and other specific user interactions.
- **Ecommerce tracking.** Monitor product views, cart additions, and purchases.

In this post, you’ll discover everything about adding Google Tag Manager to your WordPress website with ClickWhale. By using ClickWhale you can **skip the long and complicated process of adding it directly to your site’s code.**

## What Is Google Tag Manager?

Google Tag Manager is a free tool that **enables you to install, store, and manage tags** – small snippets of code that track user actions and collect data.

The most common tag you will almost certainly have previously encountered is the one used to install Google Analytics:

![Google Analytics tracking code](https://clickwhale.pro/wp-content/uploads/2023/10/Google-Analytics-tracking-code.png)

Other popular examples include **Google Ads conversion scripts, Meta Pixel code, and remarketing tags.** You need to place such tags in your website code for Google Analytics and other platforms to function and collect data.

## How to Install Google Tag Manager With ClickWhale

The problem with the usual approach to **installing GTM is that it’s complicated and requires some technical knowledge.**

This is because you need to **access your website’s code and add it there directly.**

![accessing your website code](https://clickwhale.pro/wp-content/uploads/2023/10/accessing-your-website-code-1024x285.png)

If you aren’t a very technical person, this might present a great challenge. It also **increases the risk of code not working properly** (if you fail to put it into the right place).

**The ClickWhale approach eliminates all of these issues.**

You don’t need to access your site’s code, nor have any technical knowledge. You just **add the Google Tag Manager to our platform, and we will do everything for you!**

*Let’s now look at the step-by-step process of what to do to add Google Tag Manager to your WordPress site with ClickWhale.*

### #1: Install ClickWhale

Download the free ClickWhale plugin from the ClickWhale website. After confirming your email address, download the plugin as a ZIP file and upload it through **Plugins > Add New Plugin > Upload Plugin** in your WordPress dashboard. **Install and activate**the plugin, then complete the initial setup.

For complete instructions, see our [How to Install ClickWhale](https://clickwhale.pro/docs/article/how-to-install-clickwhale) guide.

### #2: Create a New Google Tag Manager Account / Log In

The next step is to set up your Google Tag Manager account. **Head over to the**[Tag Manager website](https://tagmanager.google.com/#/home)**and click on the ‘Create Account’ button.**

You will then need to **fill in your Account Name, Country, Container Name** (the name of your website inside GTM), and **target platform**.

![Google Tag Manager adding a new account](https://clickwhale.pro/wp-content/uploads/2023/10/Google-Tag-Manager-adding-a-new-account-1024x740.png)

Hit ‘**Create**’, agree with the terms and conditions, and then click the ‘**Yes**’ button.

![Agreeing to GPDR terms when creating a Google Tag Manager account](https://clickwhale.pro/wp-content/uploads/2023/10/Agreeing-to-GPDR-terms-when-creating-a-Google-Tag-Manager-account-1024x715.jpg)

### #3: Get Your GTM Codes

After you finish creating your account, you will see **a pop-up for installing Google Tag Manager on your website.**

![retrieving the code to install Google Tag Manager](https://clickwhale.pro/wp-content/uploads/2023/10/retrieving-the-code-to-install-Google-Tag-Manager.png)

In case you inadvertently close this pop-up, you can always just **head over to Admin and select ‘Install Google Tag Manager’.**

We’re going to paste this code directly into ClickWhale in order to add Google Tag Manager and its functionality to your site.

### #4: Add Google Tag Manager Into ClickWhale

Head over to your site’s WordPress menu, select **ClickWhale**, go to the **‘Tracking Codes’**, and click on the **‘Add New’**button.

![ClickWhale adding a new tracking code](https://clickwhale.pro/wp-content/uploads/2023/10/ClickWhale-adding-a-new-tracking-code-1024x243.png)

You will now need to fill in the following fields:

- **The title.** The name of the tracking code inside ClickWhale.
- **Code.** The actual code you will paste from Google Tag Manager.
- **Code position.** Where you want to add the code.
- **The pages.** Which pages to add the code to.
- **User roles.**The user roles for which the script should **not**be executed *(you don’t want to track behaviors of the website’s admins or you)*.

Let’s now quickly go over how to fill these fields in.

#### Creating The Title

**The title of this tracking code should be ‘Google Tag Manager’.**

![ClickWhale set the title of tracking code](https://clickwhale.pro/wp-content/uploads/2023/10/ClickWhale-set-the-title-of-tracking-code-1024x44.png)

#### Adding The Code

Now it’s time to paste the code from your GTM account.

Head over to your Google Tag Manager page, **copy the first code**, and **paste it into the ‘code’ section inside the ClickWhale plugin**.

![Google Tag Manager tracking code](https://clickwhale.pro/wp-content/uploads/2023/10/Google-Tag-Manager-tracking-code-1024x253.png)

You will now need to **select the position of your code** – which should be**‘Before </head>’**.

![select the position of tracking codes](https://clickwhale.pro/wp-content/uploads/2023/10/select-the-position-of-tracking-codes-1024x37.png)

#### Selecting Pages And User Roles

After that, you will need to **select which pages should run GTM, and which user roles’ behaviors** you’re looking NOT to track.

To select specific pages, **select the ‘Specific Page’ option, and then add pages into the section ‘Include Pages’:**

![ClcikWhale setting what pages should be affected by tracking code](https://clickwhale.pro/wp-content/uploads/2023/10/ClcikWhale-setting-what-pages-should-be-affected-by-tracking-code-2-1024x130.png)

*(If you’re looking to run GTM on your whole site, select the ‘Whole website’ option.)*

You can also **select the user roles you want to exclude from tracking.** As we said earlier, this can be particularly useful to avoid tracking your own behavior, or the behavior of the site’s admins and content creators.

![excluding user roles from tracking in ClickWhale](https://clickwhale.pro/wp-content/uploads/2023/10/excluding-user-roles-from-tracking-in-ClickWhale-1-1024x324.png)

The last step is to **check the ‘Enable Tracking Code’ and hit ‘Save’.**

![enabling tracking codes in ClickWhale](https://clickwhale.pro/wp-content/uploads/2023/10/enabling-tracking-codes-in-ClickWhale.png)

### #5: Adding the “Second Code”

It’s also vital to **add the second code from Google Tag Manager to your website.**

![additional code for Google Tag Manager](https://clickwhale.pro/wp-content/uploads/2023/10/additional-code-for-Google-Tag-Manager-1024x194.png)

You might notice that even though you haven’t added it yet, your GTM still works. However, there are a few rare instances where JavaScript isn’t working.**If you don’t add the second code to your website, GTM won’t work in such instances.**

To add the second code, follow the same process as we did in the previous step. **The only thing that is different is the position of your code.**

![Adding Google Tag Manager in ClickWhale](https://clickwhale.pro/wp-content/uploads/2023/10/Adding-Google-Tag-Manager-in-ClickWhale-1-1024x407.png)

You want to **add this code into the ‘After <body>’ portion of the code.**

The rest should be kept the same.

## That’s It!

You have now successfully added Google Tag Manager to your website.

There are a lot of behaviors you can track with GTM. However, if you’re looking for just basic click tracking, then there may be no need to install Google Tag Manager at all, since **ClickWhale lets you track your clicks on any links on your website.**

Here are a few **additional resources you might find super helpful.**

- [ClickWhale Analytics Data: How to Use It To Make A Profit](https://clickwhale.pro/blog/clickwhale-analytics-data-how-to-use-it-to-make-a-profit/)
- [Why You Might Need a Bio Link Page on Your WordPress Website?](https://clickwhale.pro/blog/bio-link-page-for-wordpress-for-free/)
- [5 Reasons Why You Need to be Using ClickWhale](https://clickwhale.pro/blog/5-reasons-why-you-need-to-be-using-clickwhale/)

If you have any questions or need anything, you can always **reach us**[at our website](https://clickwhale.pro/contact/)**, where we are always happy to help!**

## FAQs

**Do I need to edit my website’s code to add Google Tag Manager with ClickWhale?**

No. ClickWhale lets you add the Google Tag Manager code through its **Tracking Codes** feature, so you don’t need to edit your website’s theme files or source code manually.

**Why do I need to add two Google Tag Manager codes?**

Google Tag Manager provides two code snippets during setup. The first should be added **before </head>**, and the second **after <body>**. Adding both ensures Google Tag Manager works correctly, including in cases where JavaScript is unavailable.

**Can I choose which pages use Google Tag Manager?**

Yes. When creating a tracking code in ClickWhale, you can choose whether to run it on your entire website or only on specific pages by selecting the appropriate page settings.

**Can I exclude certain users from being tracked?**

Yes. ClickWhale lets you exclude specific WordPress user roles, such as administrators or editors, from being tracked by Google Tag Manager.

**Can I use ClickWhale without Google Tag Manager?**

Yes. If you only need basic click tracking for your links, ClickWhale includes built-in click tracking, so Google Tag Manager may not be necessary.

---

## How to Shorten Links & Create Redirects

**Source:** [https://clickwhale.pro/docs/article/how-to-shorten-links-and-create-redirects/](https://clickwhale.pro/docs/article/how-to-shorten-links-and-create-redirects/)

ClickWhale lets you create shortened links using your website’s domain and redirect visitors to any destination URL.

For example:

**Original URL**

![long link example from Amazon](https://clickwhale.pro/wp-content/uploads/2023/10/long-link-example-from-Amazon-1024x183.png)

**ClickWhale Link**

```
https://yourwebsite.com/summer-sale
```

When someone visits the shortened link, ClickWhale automatically redirects them to the destination URL.

This guide explains how to create a shortened link, configure its settings, choose a redirection type, and verify that the redirect works correctly.

## Before You Begin

Before you begin, make sure:

- ClickWhale is installed and activated on your WordPress website.
- You have permission to manage ClickWhale links from the WordPress dashboard.
- **Note:**If you haven’t already, install & activate the [ClickWhale plugin.](https://clickwhale.pro/pricing/)

## Create and Configure a Shortened Link

1. Log in to your WordPress dashboard.
2. Navigate to ClickWhale → Links.
3. Click Add New.

![ClickWhale Import Links](https://clickwhale.pro/wp-content/uploads/2023/10/ClickWhale-Import-Links-1024x579.png)

The Add New Link screen opens, where you can configure the shortened link.

![ClickWhale Link Settings](https://clickwhale.pro/wp-content/uploads/2023/10/ClickWhale-Link-Settings-1-1024x639.png)

**Title (Required**)

Enter a descriptive name to help identify the link in your ClickWhale dashboard.

The title is used only for internal organization and does not appear in the shortened URL.

******Slug (Optional)**

Enter the text you want to appear after your website’s domain.

**For example:** summer-sale

**creates:** https://yourwebsite.com/summer-sale

If the field is left blank, ClickWhale may automatically generate a unique slug.

**Target URL (Required)**

Enter the complete destination URL where visitors should be redirected.

Include the full address, including https://.

**Redirection Type (Required)**

Select the HTTP redirection type for the shortened link.

The available redirect types are explained in the next section.

**Link Target (Optional)**

Choose how the link opens when ClickWhale displays it through supported content or features.

This setting does not change the redirect destination itself. The reviewer specifically recommends clarifying this behavior so readers don’t assume it affects every shortened URL.

**Nofollow (Optional)**

Enable Nofollow to add the **rel=”nofollow”** attribute to the shortened link.

This signals that search engines should not treat the link as a standard editorial endorsement, rather than stating they simply “do not follow” the link.

**Sponsored (Optional)**

Enable Sponsored for affiliate, sponsored, or paid links.

This adds the**rel=”sponsored”** attribute to the link.

**Description (Optional)**

Add an internal description to help identify the purpose of the shortened link.

Visitors cannot see this information.

**Category (Optional)**

Assign the link to one or more categories to organize related links.

Categories help you manage links but do not affect how redirects work.

## Choose a Redirection Type

Now that the user has reached the **Redirection Type** field, this section explains **which option to choose**, rather than repeating what the field is.

ClickWhale supports several HTTP redirection types to accommodate different use cases. Select the option that best matches how you want the shortened link to behave.

![ClickWhale Redirect Type](https://clickwhale.pro/wp-content/uploads/2023/10/ClickWhale-Redirect-Type.png)

**301 – Moved Permanently**

Use a **301** redirect when the destination URL is permanent.

This is the most common option for shortened links that will continue pointing to the same destination.

**302 – Found (Temporary Redirect)**

Use a **302** redirect when the destination is temporary and may change later.

**303 – See Other**

Use a **303** redirect when visitors should be redirected to another page after completing an action, such as submitting a form.

**307 – Temporary Redirect**

Use a **307** redirect when the redirect is temporary and the original request method should be preserved.

**308 – Permanent Redirect**

Use a **308** redirect when the redirect is permanent and the original request method should also be preserved.

## Configure Additional Link Features

After configuring the basic link settings, you can use ClickWhale’s additional features to extend how your shortened link is managed and shared.

Some features are available directly from the link editor, while others become available after the link has been saved.

### QR Codes

Generate a QR code for your shortened link to make it easy to share in printed materials, presentations, product packaging, or other offline content.

After saving your link, open the **QR Code** section to generate and download the QR code.

For detailed instructions, see [How to Create QR Codes for Links](https://clickwhale.pro/docs/article/how-to-create-qr-codes-for-links/).

![Qrcode feature](https://clickwhale.pro/wp-content/uploads/2025/09/qrcode-feature.png)

### Keyword Auto Linker

Use the **Keyword Auto Linker** to automatically connect selected keywords in your WordPress content to this ClickWhale link.

This feature can automatically link keywords to internal, external, or affiliate destinations without manually editing each post.

For complete setup instructions, see [How to Use the Keyword Auto Linker](https://clickwhale.pro/docs/article/how-to-use-the-keyword-auto-linker/).

![ClickWhale Keyword Auto Linker](https://clickwhale.pro/wp-content/uploads/2023/10/ClickWhale-Keyword-Auto-Linker-1024x384.png)

### UTM Parameters

The **UTM Parameters** feature lets you append campaign tracking parameters to your destination URL.

This helps you identify traffic sources and marketing campaigns in analytics platforms.

For more information, see [Create UTM Links with the ClickWhale Link Builder.](https://clickwhale.pro/blog/create-utm-links-with-the-newest-link-builder-from-clickwhale/))

![ClickWhale UTM parameters with values](https://clickwhale.pro/wp-content/uploads/2026/07/ClickWhale-UTM-parameters-with-values-1024x386.png)

### Link Scanner

Use **Link Scanner** to find where manually inserted ClickWhale links appear throughout your WordPress content.

This makes it easier to review, update, or manage existing links across your website.

For more information, see **Understanding Link Scanner Results**.

![ClickWhale Link Scanner](https://clickwhale.pro/wp-content/uploads/2023/10/ClickWhale-Link-Scanner-1024x338.png)

## Save and Test the Link

After reviewing your settings, click **Save Link** to create the shortened link.

![ClickWhale General Save Link](https://clickwhale.pro/wp-content/uploads/2023/10/ClickWhale-General-Save-Link-1024x630.png)

## FAQs

**What is the difference between the slug and the target URL?**

The **slug** is the custom text that appears after your website’s domain in the shortened URL.

For example:

**Slug**: summer-sale

**Shortened URL**: https://yourwebsite.com/summer-sale

The **target URL** is the destination where visitors are redirected after opening the shortened link.

**Which redirection type should I use?**

Choose the redirection type based on how long you expect the destination URL to remain the same.

- **301** – Use for permanent redirects.
- **302** – Use for temporary redirects.
- **303** – Use after actions such as form submissions.
- **307** – Use for temporary redirects that preserve the original request method.
- **308** – Use for permanent redirects that preserve the original request method.

For most shortened links, **301** and **302** are the most commonly used options.

**Can I change the target URL later?**

Yes. You can edit an existing ClickWhale link at any time and update its destination URL.

After making your changes, save the link to apply the updated destination.

**Will changing the target URL affect the shortened link?**

No. Updating the target URL changes only where the shortened link redirects visitors.

The shortened URL remains the same unless you also modify its slug.

**How can I confirm that the redirect works?**

After saving your link:

1. Copy the shortened URL.
2. Open it in a new browser tab or an incognito window.
3. Verify that it redirects to the correct destination page.

If the redirect does not work as expected, review the **Target URL** and **Redirection Type** settings before saving the link again.

**Can I disable click tracking for one specific link?**

Click tracking is currently managed through the global ClickWhale tracking settings rather than individual links.

To change your tracking preferences, navigate to: **ClickWhale → Settings → Tracking**

For more information, see [How to Enable or Disable Link Tracking.](https://clickwhale.pro/docs/article/how-to-enable-or-disable-link-tracking/)

**Can I edit or delete a shortened link?**

Yes. Go to **ClickWhale → Links**, locate the shortened link, and select **Edit** to update its settings or **Delete** to remove it.

Deleting a link permanently removes the redirect, so any existing shortened URLs pointing to that link will no longer work.

---

