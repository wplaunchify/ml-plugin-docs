# Miscellaneous

*Category from FluentAffiliate documentation*

---

## Affiliate Landing Page with Shortcode ​

**Source:** [https://docs.fluentaffiliate.com/guide/miscellaneous/affiliate-landing-page](https://docs.fluentaffiliate.com/guide/miscellaneous/affiliate-landing-page)

# Affiliate Landing Page with Shortcode ​

While standard affiliate links (
```
yoursite.com/?ref=123
```

) are effective, you can offer your top affiliates a more professional and branded way to promote your products. FluentAffiliate provides a powerful shortcode that allows you to create dedicated, custom landing pages for each of your affiliates.

This feature lets you transform a standard referral link into a clean, memorable URL (e.g., 
```
yoursite.com/partner/alex
```

), enhancing trust and boosting conversions while ensuring all referrals are tracked perfectly.

## How It Works ​

The magic happens behind the scenes. When a visitor arrives on a page that contains the custom landing page shortcode, FluentAffiliate instantly recognizes the affiliate ID or username specified within it (e.g., 
```
ref="X"
```

).

It then sets the necessary tracking cookie in the visitor's browser, linking them to that affiliate. Any purchase or conversion made during their session will be automatically credited to that affiliate, just as if they had used a standard referral link.

## Step-by-Step Implementation Guide ​

Setting up a custom landing page is a straightforward process:

1. **Create a New Page:** From your WordPress dashboard, navigate to **Pages → Add New**. Give your page a title and a clean, memorable URL slug that relates to the affiliate (e.g., 
```
/partner/john-doe
```

).
2. **Add the Shortcode:** In the page content editor, add the following shortcode:

```
[fluent_aff_custom_landing ref="X"]
```
3. **Set the Affiliate ID or Username:** This is the most important step. Replace 
```
X
```

 with the affiliate's unique identifier.

- **By ID:** For affiliate John Doe with ID **2**, the shortcode would be:```
[fluent_aff_custom_landing ref="2"]
```
- **By Username (Optional):** You can also use the affiliate's WordPress username. This will only work if you have set the [Default Referral Format](/guide/settings-and-customization/referral-settings) to "WordPress username" in FluentAffiliate's main settings. If John Doe's username is 
```
johndoe
```

, the shortcode would be:```
[fluent_aff_custom_landing ref="johndoe"]
```
4. **Publish and Share:** Publish the page. You can now share the new, professional URL (e.g., 
```
yoursite.com/partner/john-doe
```

) directly with your affiliate.

### Benefits of Using Custom Landing Pages ​

- **Professional, Branded Links:** Affiliates can promote a clean URL (
```
yoursite.com/partner/john
```

) instead of a generic one with a query parameter. This looks more professional and builds brand credibility.
- **Enhanced Trust and Conversions:** A custom URL is often perceived as more trustworthy by potential customers, which can lead to higher click-through rates and better conversion rates.
- **Personalized Content:** You can tailor the content of each landing page for a specific affiliate. Imagine adding their photo, a personal welcome message from them, a testimonial about your product, or even a special discount exclusive to their audience.

### Important Notes ​

- Each custom landing page can only be assigned to **one affiliate**.
- The 
```
ref
```

 attribute in the shortcode can accept either the affiliate's numeric **ID** or their WordPress **username** (if enabled in settings).
- You can create an **unlimited number of landing pages** for as many different affiliates as you wish.

---

## Affiliate Profile ​

**Source:** [https://docs.fluentaffiliate.com/guide/miscellaneous/affiliate-profile](https://docs.fluentaffiliate.com/guide/miscellaneous/affiliate-profile)

# Affiliate Profile ​

FluentAffiliate creates a dedicated profile for each affiliate, allowing you to view and manage their performance, referrals, visits, and payouts all in one place.

## Accessing an Affiliate's Profile ​

To access an affiliate’s profile, first navigate to the main **Affiliates** page from your FluentAffiliate dashboard. From the list, click on the name of the affiliate whose profile you wish to view.

![Affiliate Profile](https://docs.fluentaffiliate.com/images/miscellaneous/affiliate-profile/affiliate-profile-1.webp)

## Profile Overview Tab ​

When you open a profile, you will land on the **Overview** tab. This tab provides a comprehensive summary of the affiliate's performance.

- **Affiliate Info:** A box on the right side displays the affiliate's core information, including their name, join date, commission rate, status, payment email, and website. An 
```
edit icon
```

 button is also available to modify this information.
- **All-time Stats:** This section shows key performance indicators for the affiliate: - Total Paid
- Total Unpaid
- Total Order Value
- Conversion Rate
- Total Visits
- Total Referrals
- **Activity Overview:** A graph visualizes the affiliate's referrals and visits over a specific period. You can adjust the time frame using the date range filter.

![Affiliate Profile](https://docs.fluentaffiliate.com/images/miscellaneous/affiliate-profile/affiliate-profile-2.webp)

## Referrals Tab ​

The **Referrals** tab lists every referral generated by this specific affiliate. You can filter this list by status, including All, Paid, Unpaid, Pending, and Rejected. The table provides details such as the commission amount, description, reference, status, type, and date for each referral.

![Affiliate Profile Referrals](https://docs.fluentaffiliate.com/images/miscellaneous/affiliate-profile/affiliate-profile-3.webp)

## Visits Tab ​

The **Visits** tab tracks every click generated from the affiliate's links. You can filter the visits by 
```
All
```

, 
```
Converted
```

, and 
```
Not Converted
```

. This table shows details for each visit, including the URL, referrer, related referral, UTM parameters, and date.

![Affiliate Profile Visit](https://docs.fluentaffiliate.com/images/miscellaneous/affiliate-profile/affiliate-profile-4.webp)

## Payouts Tab ​

The **Payouts** tab displays a complete history of all payments made to the affiliate. You can filter the payout list by 
```
All
```

, 
```
Paid
```

, and 
```
Processing
```

. The table shows the Payout Reference, Amount, Date, Status, Method, and the number of Referrals included in that payout.

![Affiliate Profile Payout](https://docs.fluentaffiliate.com/images/miscellaneous/affiliate-profile/affiliate-profile-5.webp)

---

## Track Referrals without Integration ​

**Source:** [https://docs.fluentaffiliate.com/guide/miscellaneous/non-integrated-referrals](https://docs.fluentaffiliate.com/guide/miscellaneous/non-integrated-referrals)

# Track Referrals without Integration ​

While FluentAffiliate offers many direct integrations, you may need to award a commission for a sale made through a system that isn't automatically connected. This guide explains how to track referrals for any plugin or payment gateway that doesn't have a direct integration, ensuring no referral is ever missed.

FluentAffiliate provide a powerful method to handle these situations:

- An automated method using a shortcode for plugins that have a "Thank You" or success page.

## Automated Tracking with the Conversion Shortcode ​

This is the best choice when your other plugin or system automatically redirects users to a specific "Thank You" or "Success" page after a completed purchase.

### How It Works ​

The process is simple and runs in the background:

1. A customer clicks an affiliate's unique referral link.
2. They complete a purchase through your non-integrated system.
3. After payment, they are redirected to your success page.
4. A special shortcode on that page automatically tells FluentAffiliate to find the correct affiliate and create a referral for them.

### Implementation ​

To set this up, simply place the following shortcode on the page that users are redirected to after a successful payment:

```
[fluent_aff_conversion_script]
```
### Customizing with Optional Parameters ​

For more detailed and accurate tracking, you can enhance the shortcode with optional parameters. This is especially useful if your payment system cannot automatically pass transaction details to FluentAffiliate.

| Parameter | Description | Example |
| --- | --- | --- |
| amount | Sets the exact purchase amount that the commission will be calculated on. | amount="99.50" |
| reference | Adds a unique Order ID or Transaction ID to the referral log. | reference="ORD-1001" |
| description | A short note about the referral for your records. | description="Custom Checkout" |
| status | Sets the initial status of the referral. Options are pending, unpaid, paid, rejected. | status="pending" |
| type | Defines the type of conversion. Options include sale, lead, signup. | type="sale" |

**Example shortcode with parameters:**

```
[fluent_aff_conversion_script 
amount="10.00" 
description="Product Purchase" 
provider="custom_provider" 
provider_id="123" 
provider_sub_id="456" 
status="unpaid/pending" 
type="sale"]
```Whether you use the automated shortcode for unsupported platforms or add a referral manually for special cases, FluentAffiliate provides the flexibility to ensure every affiliate is rewarded accurately for their efforts.

---

## Promo Materials ​

**Source:** [https://docs.fluentaffiliate.com/guide/miscellaneous/promo-materials](https://docs.fluentaffiliate.com/guide/miscellaneous/promo-materials)

# Promo Materials ​

The **Promo Materials** feature is like a toolbox where you can store all the promotional items you want to give to your affiliates. Instead of sending things like banners, ads, or links to each person one by one, you just add them to this single spot.

When your affiliates log in, they can find these ready-made items. They just need to copy a text link, an image, or a QR code to share with their audience. We automatically include their special tracking link, so you'll always know they get credit for any sales they send your way.

## Accessing Promo Materials ​

You can find this new feature right in your FluentAffiliate settings.

1. Go to your WordPress dashboard.
2. Navigate to **FluentAffiliate → Settings**.
3. Click on **Promo Materials** from the left-hand menu.

Here, you'll see a dashboard where all your created assets will be listed.

![Access Accessing Promo Materials](https://docs.fluentaffiliate.com/images/miscellaneous/promo-materials/accessing-promo-materials-1.webp)

## Creating a New Promo Material ​

To get started, simply click the **+ New Promo Material** button. A form will slide in from the right where you can set up your new promotional material.

Here’s a breakdown of the fields:

- **Name**: Give your creative a clear, recognizable name (e.g., "Summer Sale - Text Link" or "Ebook Launch QR Code").
- **Description**: Add a short description to let your affiliates know what this creative is for.
- **Type**: Choose the kind of creative you want to make. You can select from the dropdown options like Image, Text, or QR Code.

### Image Type ​

When you select **Image**, a couple of new options will appear:

- **Image**: Click here to upload your banner or promotional graphic from your media library.
- **Alt Text**: Describe the image. This is important for accessibility and helps search engines understand what the image is about.

![Image Type](https://docs.fluentaffiliate.com/images/miscellaneous/promo-materials/image-type-2.webp)

### Text Type ​

Under **Type**, select **Text** from the dropdown menu. A new **Text** field will appear. Here, you can enter the text you want the link to display, for example, "Summer Sale".

![Text Type](https://docs.fluentaffiliate.com/images/miscellaneous/promo-materials/text-type-3.webp)

### QR Code Type ​

From the **Type** dropdown menu, select **QR Code**. As soon as you do, a QR code will be instantly generated for you.

Next, you can customize its appearance to match your brand:

- **QR Code Color**: Click the color plate to open a color picker and change the color of the QR code itself.
- **Background Color**: Click this plate to change the background color.

![QR Code Type](https://docs.fluentaffiliate.com/images/miscellaneous/promo-materials/qr-code-type-4.webp)

---

- **URL**: Enter the destination link. This is the webpage where customers will land after clicking or scanning the creative.
- **Privacy**: This is a key setting that controls who can see and use this creative. You have two options:

- **Public**: The promo will be available to all of your affiliates.
- **Private**: The promo will only be visible to specific affiliates or to affiliates within a selected group. When you choose ‘**Private**,’ new fields will appear where you can **select the group** or **individual affiliates** you want to share it with.
- **Status**: Set the creative to **Active** to make it available, or **Inactive** to hide it.
- **Schedule Your Promo Materials**: Do you have a special promotion that runs for a limited time, such as a holiday sale or a product launch? You can schedule your promos to become active and inactive on specific dates automatically. This helps ensure your affiliates are only promoting offers that are currently available. To set a schedule for a promo, follow these simple steps:

- **Set the Status:** First, find the **Status** dropdown menu and select the **Scheduled** option.
- **Choose a Start Date & Time:** Once you select "Scheduled," a Start Date & Time field will appear. Click on it to open a calendar and choose the exact date and time you want the creative to become visible to your affiliates.
- **Choose an End Date & Time:** Next, click on the End Date & Time field. This is when the promo will automatically be hidden from your affiliates' dashboards.

![Schedule Your Promo Materials](https://docs.fluentaffiliate.com/images/miscellaneous/promo-materials/schedule-our-promo-materials-5.webp)

- **Internal Notes**: Add any private notes for yourself or other admins. These are not visible to affiliates.

Once you’ve filled everything out, click the **Create** button to save it.

## Managing Your Promo Materials ​

After you create items, they will appear in a list on the main **Promo Materials** page. From this table, you can see all your assets at a glance, including their **ID**, **Name**, **URL**, **Privacy**, **Type**, **Status**, and a **Preview**.

- **Edit or Delete**: To make changes or remove an item, click on the three dots at the end of the row and select **Edit** or **Delete**.

![Promo Materials](https://docs.fluentaffiliate.com/images/miscellaneous/promo-materials/promo-affiliate-6.webp)

## Viewing and Using Promo Materials (Affiliate View) ​

As an affiliate, you have access to ready-to-use materials prepared by the site owner.

- **Go to the Promo Materials Section:** Log in to your affiliate account in the **Affiliate Area** and click on the **Promo Materials** tab.
- **Choose an Item:** On this page, you will see a list of available materials with a Preview, Name, Type, and when it was Last Updated.
- **Get the Code or Image:** Click on the name or preview of the material you want to use.

![Viewing Creatives](https://docs.fluentaffiliate.com/images/miscellaneous/promo-materials/view-creatives-7.webp)

**For Image Materials::**

When you click on an image, you'll be taken to a new page showing a full preview.

- **HTML Code:** Below the preview, you will find a box labeled **HTML Code**. This code includes both the image and your unique affiliate tracking link. Click the **Copy** button and paste this code directly into your website or blog. When a visitor clicks this image on your site, you get affiliate for the sale!
- **Download Image:** You can also click the **Download Image** button to save the image to your computer.
- **For QR Code Materials:**

Using a QR code is even simpler. Just click on the **QR code** creative from the list and download the image. You can then share this QR code anywhere, on flyers, social media posts, or even in person. Anyone who scans it will be directed to the site through your affiliate link.

![HTML Code](https://docs.fluentaffiliate.com/images/miscellaneous/promo-materials/html-code-8.webp)

This makes it simple to keep track of all the promotional materials you've provided to your affiliates.

---

## Social Media Share for Affiliates ​

**Source:** [https://docs.fluentaffiliate.com/guide/miscellaneous/social-share](https://docs.fluentaffiliate.com/guide/miscellaneous/social-share)

# Social Media Share for Affiliates ​

Promotion just got a whole lot easier for your affiliates.

With the Social Media Share feature, affiliates can quickly share their referral links directly to popular social platforms without leaving their dashboard. Instead of manually copying and pasting links, they can now promote your products with just a few clicks.

By reducing friction in the promotion process, this feature helps affiliates share more often, driving increased referral traffic and better engagement for your brand.

This guide will show you how to enable and configure the social sharing options for your affiliates.

## How to Enable Social Media Share ​

As the site administrator, you have full control over whether this feature is active and which specific social platforms your affiliates are allowed to use.

### Step 1: Navigate to Features & Addons ​

From your WordPress dashboard, go to **FluentAffiliate → Settings**. On the left-hand menu, click on **Features & Addons**. Under the "Advanced Features" section, locate **Social Media Share** and click the **Settings** button next to it.

![Social Share](https://docs.fluentaffiliate.com/images/miscellaneous/social-share/social-share-1.webp)

### Step 2: Enable the Feature ​

On the next screen, check the box labeled **Enable Social Media Share for Affiliates**.

![Social Share](https://docs.fluentaffiliate.com/images/miscellaneous/social-share/social-share-2.webp)

### Step 3: Configure Your Platforms ​

Once the feature is enabled, a list of **Social Media Platforms** will appear.

- **Turn Platforms On/Off:** Use the toggle switches on the right side to decide which platforms (like Facebook, X/Twitter, LinkedIn, WhatsApp, etc.) should be available to your affiliates.
- **Reorder the List:** You can change the display order of the icons by clicking and dragging the arrows on the left side of any platform name.
- **Save:** When you are happy with your selection, don't forget to click the **Save Settings** button at the bottom of the screen.

![Social Share](https://docs.fluentaffiliate.com/images/miscellaneous/social-share/social-share-3.webp)

## Add Custom Social Platforms (Developer-Friendly Option) ​

If you want to show additional social networks in the Affiliate Portal (or rename/remove existing ones), you can do that using the 
```
fluent_affiliate/social_media_links
```

 filter.

This is useful when you want to:

- Add a new platform (for example, YouTube)
- Rename existing labels (for example, Twitter to X)
- Hide any platform you do not want to show

### Recommended: Use FluentSnippets ​

To add custom PHP code safely, we recommend using **FluentSnippets** instead of editing your theme files directly.

**Steps:**

1. Install and activate FluentSnippets on your WordPress site.
2. Create a new PHP snippet.
3. Paste the code below.
4. Save and activate the snippet.

php
```
add_filter('fluent_affiliate/social_media_links', function ($links) {
    // Ensure we are working with an array.
    if (!is_array($links)) {
        $links = [];
    }

    // Add a new custom network.
    $links['youtube'] = [
        'label'       => __('YouTube', 'fluent-affiliate'),
        'placeholder' => 'https://youtube.com/@yourchannel',
        'icon'        => 'fab fa-youtube'
    ];

    // Rename an existing label (if present).
    if (!empty($links['twitter'])) {
        $links['twitter']['label'] = __('X (Twitter)', 'fluent-affiliate');
    }

    // Remove a network if you do not want to expose it.
    unset($links['tiktok']);

    return $links;
});
```
### What This Snippet Does ​

- Adds a new **YouTube** option for affiliates. You can also add any if you want.
- Renames **Twitter** to **X (Twitter)**.
- Removes **TikTok** from the available share list.

After activating the snippet, ask affiliates to refresh their Affiliate Portal page to see the updated options.

## How Affiliates Use the Share Feature ​

Once you have enabled and saved your settings, the social sharing options will instantly become available in the Affiliate Portal.

When an affiliate logs into their account and navigates to their **Dashboard** (or the **Links** tab), they will see their unique referral link. Right beneath the link field, a row of social media icons will now be visible.

![Social Share](https://docs.fluentaffiliate.com/images/miscellaneous/social-share/social-share-4.webp)

To share their link, the affiliate simply clicks on their preferred platform's icon. This will automatically open a new window to that specific social network, pre-filling a post with their unique referral link ready to be shared with their audience.

---

