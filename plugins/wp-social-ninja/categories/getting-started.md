# Getting Started

*Category from WP Social Ninja documentation*

---

## Platforms Overview ​

**Source:** [https://docs.wpsocialninja.com/guide/getting-started/all-platforms-of-wp-social-ninja.html](https://docs.wpsocialninja.com/guide/getting-started/all-platforms-of-wp-social-ninja.html)

# Platforms Overview ​

The **Platforms** page is the central hub for connecting all your social media and business accounts to WP Social Ninja. You must connect a platform here before you can create a template to display its content.

## How to Connect a Platform ​

To connect an account, select the platform you want from the list and click **Connect**. A pop-up will appear asking you to log in and authorize the connection. Once approved, your account will be successfully linked.

## Platform Categories ​

You can filter the list to find a specific type of platform by clicking on the tabs at the top of the page.

### Social Feeds ​

This category includes all platforms for displaying live posts, photos, and videos on your website.

> Examples: Twitter, YouTube, Instagram, and Facebook Feeds.

### Business Reviews ​

This category is for fetching and displaying customer reviews from various business and e-commerce platforms.

> Examples: Google Business Profile, Yelp, Facebook Reviews, Airbnb, Amazon, WooCommerce, Trustpilot, Booking.com, and more.

### Social Chat ​

This category includes all the communication channels you can add to your website's Chat Widget.

> Examples: Messenger, WhatsApp, Telegram, Instagram, Slack, and 15+ other channels.

After you have successfully connected your account (which will display a "Connected" status), your next step is to navigate to the [Templates](./templates-overview) menu. From there, you can create and customize a new template to display the feed, reviews, or chat widget on your site.

---

## Connecting Your Accounts ​

**Source:** [https://docs.wpsocialninja.com/guide/getting-started/connecting-your-accounts.html](https://docs.wpsocialninja.com/guide/getting-started/connecting-your-accounts.html)

# Connecting Your Accounts ​

Keeping your social platforms connected should be something you set up once and forget. That's exactly what WP Social Ninja's **secure connection bridge** is built for.

WP Social Ninja connects to **Google, YouTube, Instagram, Facebook, and TikTok** through one hardened, trusted service instead of a separate connection flow for each platform. The result: more reliable connections, fewer surprise disconnects, and automatic renewals working quietly in the background.

## What is the Connection Bridge? ​

The connection bridge is a secure service that routes your platform connections through one trusted place, rather than every WordPress site talking to Google, Meta, or TikTok independently.

Here's what that means for you:

- **More reliable connections** – Routing through one hardened service means fewer failed connections and fewer unexpected disconnects.
- **Automatic token refresh** – For supported platforms (Google Reviews, YouTube, and TikTok), WP Social Ninja renews your connection in the background, so you spend less time reconnecting.
- **Protected credentials** – Connections are encrypted, and where a platform uses an API key (like YouTube), that key is now encrypted at rest.

NOTE

The connection bridge covers **Google Reviews, YouTube, Instagram, Facebook, and TikTok**. **Twitter/X** connects with your own developer keys and is not part of the bridge — see the [Twitter Configuration](../social-feeds/twitter-configuration) page for that flow.
## How Connecting Works ​

Most platforms connect with a **single click**. Sign in on the platform's screen, approve access, and you're brought right back to WP Social Ninja — connected, with no code to copy:

- [Google Business Profile Reviews](../business-reviews/google-configuration)
- [Instagram](../social-feeds/instagram-configuration) (Business Basic & Business Advanced)
- [Facebook Feed](../social-feeds/facebook-integration) and [Facebook Reviews](../business-reviews/facebook-configuration)
- [TikTok Feed](../social-feeds/tiktok-feed-configuration)
- [YouTube](../social-feeds/youtube-configuration)

TIP

Prefer a more hands-on setup? Some platforms also keep a **manual** connection method for advanced users — a token you generate yourself: Instagram (access token) and Facebook (page token). You'll find these documented in each platform's guide.
## Staying Connected ​

Once you've connected, WP Social Ninja works to keep you connected:

- **Google Reviews, YouTube, and TikTok** refresh automatically in the background — you generally won't need to reconnect.
- **Facebook and Instagram** may occasionally ask you to reconnect when their access expires. If a feed or review stops updating, simply open that platform and reconnect it.

With your accounts connected and kept fresh by the bridge, you're ready to start pulling in feeds and reviews and showing off your social proof.

---

## User Interface ​

**Source:** [https://docs.wpsocialninja.com/guide/getting-started/getting-started-with-the-user-interface-of-wp-social-ninja.html](https://docs.wpsocialninja.com/guide/getting-started/getting-started-with-the-user-interface-of-wp-social-ninja.html)

# User Interface ​

After you install WP Social Ninja, you will manage all your feeds, reviews, and chats from the main plugin dashboard. This guide explains the purpose of each section in the WordPress admin sidebar menu.

## Dark/Light Mode ​

As shown in the image, WP Social Ninja includes a dark and light mode for the plugin dashboard. You can toggle this setting by clicking the sun/moon icon located in the top-right corner of the dashboard to switch to your preferred viewing mode.

## Dashboard ​

This is the main overview page for the plugin. It provides a quick summary of your templates and offers easy access to support and documentation.

## Platforms ​

This is the most important step. Before you can create a template, you must connect your accounts in this section. Go here to add your [Google Business Profile](../business-reviews/google-configuration), [Facebook Page](../social-feeds/facebook-integration), [Instagram account](../social-feeds/instagram-configuration), and any other available platform you want to display.

## Templates ​

This is the main area where you create and manage all your display [templates](./templates-overview). A template is a saved layout and style that you can embed on your site using a [shortcode](../integrations/shortcode-usage).

As shown in the image, this page is organized into tabs:

- **Social Feeds:** All your templates for [Instagram](../social-feeds/instagram-configuration), [Facebook](../social-feeds/facebook-integration), [Twitter](../social-feeds/twitter-configuration), [TikTok](../social-feeds/tiktok-feed-configuration), etc.
- **Business Reviews:** All your templates for [Google](../business-reviews/google-configuration), [Yelp](../business-reviews/yelp-configuration), [Facebook](../business-reviews/facebook-configuration), etc.
- **Chat Widgets:** Your templates for the [social chat widget](../social-chat/chat-widget-configuration).
- **Notification Popup:** Your templates for [review notification popups](../advanced-features/notification-popup).
- **Testimonials:** All your templates for [manually added testimonials](../advanced-features/add-testimonials).

## Quick Builder ​

On the **WordPress Dashboard → Wp Social Ninja**, you will see a **Quick Builder** button. This button launches a simple, 3-step pop-up wizard to help you create a new template for reviews or feeds very quickly, without going through the full, advanced editor.

## Testimonials ​

If you want to display a testimonial, go to this section to add and manage your [testimonials](../advanced-features/add-testimonials). Once you've added them, navigate to **Templates → Testimonials** to create a custom template for displaying them on your site.

## Custom Source (Beta) ​

This section allows you to create a custom feed by manually adding your own content, such as images, videos, and text. This is useful for creating unique testimonial displays or custom galleries that are not pulled from a social media platform.

## Reviews ​

In this section, you'll find all the individual business reviews you've collected from connected platforms like [Google](../business-reviews/google-configuration) or [Yelp](../business-reviews/yelp-configuration). You can view, filter, and manage all your reviews in one organized list for easy access and control.

## Notification Popups ​

This is a shortcut that takes you to the **Templates > Notification Popup** tab. You can create and manage your [pop-up templates](../advanced-features/notification-popup) here.

## Chat Widgets ​

This is a shortcut that takes you to the **Templates > Chat Widgets** tab. Go [chat widget](../social-chat/chat-widget-configuration) to build and customize your website's social chat widget.

## Support ​

This section gives you quick access to helpful resources, including detailed documentation, video tutorials, and direct links to our support team. So, you can get assistance whenever you need it.

## Settings ​

This is the global settings panel for the entire plugin. You can manage your License Key, set plugin-wide settings, configure platform APIs (like the Google API), and control cache settings (auto-sync frequency).

---

## Introduction to WP Social Ninja ​

**Source:** [https://docs.wpsocialninja.com/guide/getting-started/getting-started-with-wp-social-ninja.html](https://docs.wpsocialninja.com/guide/getting-started/getting-started-with-wp-social-ninja.html)

# Introduction to WP Social Ninja ​

WP Social Ninja is a WordPress plugin that connects your social media activity to your website. It automatically fetches and displays your business reviews, social media posts (feeds), and social chat widgets on your site.

Use this plugin to build social proof by showing customer reviews, keep your site content fresh with live social feeds, and make it easy for visitors to contact you with chat.

## What You Can Do with WP Social Ninja ​

This guide will show you how to use all the features. Here are the top things WP Social Ninja can do for you:

### 1. Display Social Feeds ​

This feature allows you to show your live social media posts directly on your website.

- **Connect Major Platforms:** Show feeds from [Instagram](../social-feeds/instagram-configuration), [Facebook](../social-feeds/facebook-integration) (including Timeline, Videos, Photos, Events, and Albums), [Twitter](../social-feeds/twitter-configuration), [YouTube](../social-feeds/youtube-configuration) (Channels, Playlists, Search, or Specific Videos), and [TikTok](../social-feeds/tiktok-feed-configuration).
- **Customize Your Feeds:** Select different Layout Types (like Timeline, Grid, Masonry, or Carousel). You can choose the number of posts to show and filter content by hashtags, keywords, or post types.
- **Make Feeds Interactive:** Add features like pop-up viewers for images and videos, a **Load More** button to show older posts, and **Follow** buttons to grow your audience.

### 2. Showcase Business Reviews ​

This feature allows you to automatically pull reviews from over platforms and display them on your site.

- **Fetch from Multiple Platforms:** Connect [Google Business Profile](../business-reviews/google-configuration), [Facebook](../business-reviews/facebook-configuration), [Yelp](../business-reviews/yelp-configuration), [Airbnb](../business-reviews/airbnb-configuration), [WooCommerce](../business-reviews/woocommerce-reviews), [Trustpilot](../business-reviews/trustpilot-configuration), [Booking.com](../business-reviews/booking-com-configuration), [AliExpress](../business-reviews/aliexpress-configuration), [Tripadvisor](../business-reviews/tripadvisor-configuration), and [Fluent Forms](../business-reviews/fluent-forms-review).
- **Display Beautifully:** Choose from different [Templates](../business-reviews/create-template) (like Grid, Slider, or Masonry) to control the layout and match your website's design.
- **Manage Your Reviews:** You have full control. You can filter reviews by rating, choose to include or exclude specific reviews, and manually approve submissions. You can also add your own [Custom Reviews](../custom-source/manually-add-or-import-custom-reviews) or [testimonials](../advanced-features/add-testimonials).

### 3. Integrate Social Chat ​

This feature adds a [chat widget](../social-chat/chat-widget-configuration) to your site, allowing visitors to contact you through their favorite apps.

- **Connect 15+ Chat Channels:** Offer communication through Messenger, WhatsApp, Telegram, Instagram DM, Slack, Microsoft Teams, SMS, Email, and more.
- **Customize Your Chat Widget:** Choose from a **Chat Box** or simple **Icons** layout. You can set your business's online/offline hours, define display rules (e.g., show only on specific pages, or hide on mobile), and personalize greeting messages.

## Boost Engagement & Improve SEO ​

WP Social Ninja also includes powerful marketing and SEO tools.

- **Notification Popups:** Use this feature to display your best reviews in a small, eye-catching [pop-up](../advanced-features/notification-popup) as visitors browse your site.
- **Shoppable Feeds:** Turn your [Instagram feed](../social-feeds/instagram-shoppable-feed) into a sales tool. This allows you to link your Instagram posts directly to your product pages or any custom URL.
- **Improve SEO (Schema Support):** The plugin has built-in [Schema Snippet](../business-reviews/configure-schema) support. This adds special code that helps Google understand your review data and display your star ratings in search results.
- **Generate QR Codes:** Create simple [QR codes](../business-reviews/generate-qr-code-for-reviews) that link directly to your review platforms (like Google or Yelp). This makes it easy for your customers to leave you new reviews.

## Getting Started ​

If you are new to WP Social Ninja, we recommend starting with the [Business Reviews](../business-reviews/) or [Social Feeds](../social-feeds/) guides to learn how to connect your first platform. From there, you can explore [Social Chat](../social-chat/) and [Template Settings](../getting-started/templates-overview) to customize the appearance and engage with your visitors.

---

## How to Install, Upgrade, and Activate a License ​

**Source:** [https://docs.wpsocialninja.com/guide/getting-started/install-upgrade-activate-license.html](https://docs.wpsocialninja.com/guide/getting-started/install-upgrade-activate-license.html)

# How to Install, Upgrade, and Activate a License ​

This guide will show you how to install the WP Social Ninja plugin on your WordPress website. It covers installing the free version, uploading the Pro version, and activating your license key to unlock all premium features and receive updates.

## Requirements ​

Before you begin, please ensure your WordPress environment meets the following minimum requirements:

- **WordPress Version:** 5.6 or higher
- **PHP Version:** 7.1 or higher

## How to Install WP Social Ninja (Free) ​

You can install the free version directly from your WordPress dashboard.

1. **Step 1: Go to Plugins:** From your WordPress dashboard, navigate to **Plugins** and click on **Add New**.
2. **Step 2: Search for a Plugin:** In the search box in the top-right corner, type "WP Social Ninja".
3. **Step 3: Install and Activate:** The plugin will appear in the search results. Click the **Install Now** button, and then click **Activate**.

## How to Install WP Social Ninja Pro ​

After you purchase the Pro version, you must upload it to your website.

NOTE

You must have the free (core) version of WP Social Ninja (from the steps above) installed and activated before you install the Pro version.1. **Step 1: Download the Pro Plugin:** Log in to your **WPManageNinja Account** and download the WP Social Ninja Pro 
```
.zip
```

 file from your purchase history.

1. **Step 2: Upload Plugin:** From your WordPress dashboard, go to **Plugins > Add New**. At the top of the page, click the **Upload Plugin** button.
2. **Step 3: Install and Activate:** Click **Choose File** and select the 
```
.zip
```

 file you just downloaded. Click **Install Now**. After the plugin finishes installing, click the **Activate Plugin** button.

## How to Activate the License ​

To unlock all pro features and receive automatic updates, you must activate your license key.

1. **Step 1: Go to License Settings:** From your WordPress dashboard, navigate to **WP Social Ninja** and click on **Settings**. Select the **Others** tab, and then click the **License Settings** sub-tab.
2. **Step 2: Enter Your License Key:** Find your license key in your **WPManageNinja Account**. Copy the key and paste it into the **License Key** field.
3. **Step 3: Verify License:** Click the **Verify License** button. If the key is valid, you will see a success message. Your Pro plugin is now active.

## How to Update WP Social Ninja ​

You can update both the Free and Pro versions directly from your WordPress dashboard.

- Go to **Dashboard > Updates**.
- If an update is available, you will see it in the list.
- Select the WP Social Ninja plugins and click **Update Plugins**.

NOTE

To update the Pro version, you must have an active license key. If your license has expired, you can renew it here.
## How to Renew the License ​

WP Social Ninja Pro comes with a licensing option to renew your license. Follow these simple steps to renew the license:

You can start by going to the purchase history from **WPManageNinja Account**. Then you’ll see the ‘**Renewing a license key?**’ link on the checkout cart, and click on that. After entering the license key, click the **Apply License Renewal** button.

Lastly, your license will be activated automatically. Your license key activation process is complete.

Enjoy WP Social Ninja!

---

## Onboarding Setup Wizard ​

**Source:** [https://docs.wpsocialninja.com/guide/getting-started/onboarding-setup-wizard.html](https://docs.wpsocialninja.com/guide/getting-started/onboarding-setup-wizard.html)

# Onboarding Setup Wizard ​

After successfully installing and activating WP Social Ninja, you will see some easy steps to set up the wizard. This guided process is designed to help you configure the foundational settings for your first social platform.

You are always in control. If you prefer to explore the full dashboard first, click the **Skip All onboarding** link at any time.

Let's walk through the setup, step by step.

## Step 1: Select Your Category ​

The first step asks you to choose which **Category** of features you want to start with. As the image shows, your options are:

- **Social Feeds:** To display posts from your social accounts.
- **Business Reviews:** To display business reviews.
- **Social Chat:** To add a chat widget to your website.
- **Notification Popup:** To display notification popups on your website.

Select one and click the "**Continue**" button to proceed to the next step.

NOTE

In this example, the **Social Feed** category is selected. The next steps will be based on this category. If you choose **Business Reviews** instead, the following steps will change according to that category.
## Step 2: Select Your Platform ​

Here, you will select the specific social platform you want to connect.

The list of platforms shown (like Instagram, YouTube, TikTok, Twitter, Google My Business, Yelp, or Facebook Feed) will depend on the category you just selected.

Click on your desired platform and press the **Continue** button for the next step.

## Step 3: Select the Post Type ​

Define the specific type of content you want to display from your chosen platform. For example, if you selected Instagram, your options will include:

- **Timeline Feed:** Embed photos and videos from any Instagram account directly.
- **Hashtag Feed:** Showcase public Instagram posts if they use specific hashtags in their caption.
- **Shoppable Feed:** Connect the shoppable feed to convert visitors from the Instagram feed to websites.

Make your selections and click the **Continue** button.

## Step 4: Choose a Template ​

This step allows you to define the visual style of your feed or reviews before entering the main editor. Every template available for your chosen platform is listed here. You will configure two main settings:

- **Layout Type:** This is the structure (e.g., Grid, Slider, Carousel, or Masonry).
- **Template:** This is the design skin. Review templates carry names like Vega, Sirius and Polaris, while feed templates are named after the layout they draw **Classic Grid**, **Caption Card**, **Overlay Card**, and so on.

Every template available for your chosen platform is listed here, so you can pick your final design in the wizard rather than switching it later in the editor.

## Step 5: Configure Your Template ​

In this final step, you will connect your account and apply basic filters.

- **Configuration:** Click the **Connect...** button (for example, **Connect with Instagram**) to authorize your account. A pop-up will guide you through the login and permission process.
- **Filters:** Once connected, you can apply initial rules using the **Filters** dropdown. For example, if setting up reviews, you can use **Filter by Rating** to ensure only 5-star reviews are displayed.

Click **Save** to complete the wizard. You will then be redirected to the full template editor, where you can further customize your settings or copy the generated **Shortcode** to embed the template on your site.

## Quick Builder ​

If you skipped the initial onboarding wizard, you can easily access a streamlined setup process at any time using the **Quick Builder**. This tool is perfect for rapidly creating a new template without navigating the advanced editor.

To access the Quick Builder:

1. Navigate to the **WP Social Ninja dashboard** from your WordPress left sidebar.
2. Click the **Quick Builder** menu option.
3. This launches a simplified 3-step pop-up wizard, allowing you to quickly select a category, platform, and template to instantly generate and save a new feed or review display.

---

## Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/getting-started/reviews.html](https://docs.wpsocialninja.com/guide/getting-started/reviews.html)

# Reviews ​

The **Reviews** section is your central hub for managing all your business reviews in one place. It gathers feedback from platforms like Google, Yelp, and Facebook into a single, easy-to-use list.

Here, you can see, filter, and organize all your reviews. You can also hide reviews or add your own **Custom Reviews**. Later, you can show these reviews on your site using a **Business Reviews Template**.

To access this dashboard, navigate to **WP Social Ninja → Reviews** from your WordPress sidebar.

## Review Moderation Tabs ​

At the top of the list, you will find several tabs to help you quickly filter your workload:

- **All:** Displays every review fetched by the plugin.
- **Spam:** Shows reviews that have been flagged as spam, either manually or automatically by your settings.
- **Approved:** A list of all reviews currently live and visible on your website templates.
- **Pending:** Reviews waiting for manual approval before they can be displayed.

## Filtering and Sorting Reviews ​

At the top of the page, you will find several dropdown menus to help you organize and find specific reviews:

- **Filter by Platform:** This allows you to see reviews from only one platform (e.g., "Google") or from all platforms at once.
- **Filter by Individuals:** You can filter by individual platforms from the dropdown option.
- **Search Bar:** Type in a reviewer’s name or a specific keyword to find a particular entry instantly.

## Bulk Actions: Mass Moderation ​

Instead of managing reviews one by one, you can use **Bulk Actions** to save time. Simply check the boxes next to multiple reviews and select an action from the dropdown menu:

- **Approve:** Instantly move selected reviews to the "Approved" status so they appear on your site.
- **Disapprove:** Remove selected reviews from your live templates without deleting them.
- **Mark as Spam:** Move unwanted reviews to the **Spam** folder. This is useful for cleaning up your list without permanently deleting entries.
- **Not Spam:** If a review was accidentally flagged, use this to move it back to your main list.
- **Duplicate:** Create copies of selected reviews (primarily used for Custom reviews).
- **Assign Category / Remove Category:** Apply or remove a review category across every selected review in one action.
- **Delete:** Permanently remove the selected reviews from your database.

Click **Apply** after selecting your desired action to execute the changes.

## Organizing Reviews with Categories ​

Once your review list grows, finding a specific set of reviews gets harder. **Review Categories** give you a reusable label you can apply to any review, from any connected platform, so you can group your reviews the way you actually think about your business — by product line, by service, by location, or by campaign.

### Managing Your Categories ​

Click the **Manage Categories** button located above your review list to launch the category management panel. From this modal, you can perform the following actions:

- **Create New Categories:** Type in a custom name to add a new category label.
- **Rename Categories:** Edit existing category names to keep your organization up to date.
- **Delete Categories:** Remove categories you no longer require. Deleting a category removes the tag from all assigned reviews without deleting the reviews themselves.

Each category displays an active review count directly within the list, giving you immediate visibility into which areas have strong social proof and which need more feedback.

NOTE

The **Manage Categories** button is visible only to users with appropriate permission levels. If the button is missing, contact your site administrator to adjust your account permissions.
### Assigning Categories to Reviews ​

Select one or more reviews and use **Assign Category** / **Remove Category** from the **Bulk Actions** dropdown to tag or untag them.

Once your reviews are categorized, use **Filter by Category** in your [review template](../business-reviews/create-template#4-filters) settings to display only the reviews from a specific category.

## Managing Individual Reviews ​

For fine-tuned control, each review has its own set of management options.

#### Status Toggle ​

On the right side of each review, you will see a **Status** toggle. Switch this **ON** to approve a review for your website or **OFF** to hide it. Reviews flagged as **Spam** will display a red "Spam" label instead of a toggle.

#### The Options Menu ​

Click the **three-dot (⋮)** menu on the far right of any review to access specific tools:

- **Approve/Disapprove:** Quickly change the visibility of a single review.
- **Mark as Spam / Not Spam:** Manually flag or unflag a review based on its content.
- **Edit:** Modify the text or details of a review (available for Custom reviews).
- **Duplicate:** Copy a specific review for use elsewhere.
- **Delete:** Remove the individual review permanently.

NOTE

Your moderation workflow is heavily influenced by your Global Review Settings. If you have enabled "Require Approval" or set "[Conditional Publishing Rules](/guide/business-reviews/global-review-settings)," new reviews will automatically land in the Pending or Spam tabs based on your criteria.
## Add Custom Source Review ​

You will also see an **Add Custom Source** button. This feature is for manually adding reviews to your site.

> Use Case: If a customer emails you a positive review or gives you feedback in person, you can use this button to create a Custom Review. You can add the reviewer's name, their text, and a star rating. These custom reviews can then be displayed in your templates alongside your fetched reviews.

After you have fetched and managed your reviews, your next step is to go to the **Templates** section. From there, you can create a new **Business Reviews** template to display them on your website.

---

## Templates Overview ​

**Source:** [https://docs.wpsocialninja.com/guide/getting-started/templates-overview.html](https://docs.wpsocialninja.com/guide/getting-started/templates-overview.html)

# Templates Overview ​

The **Templates** section is where you create and manage all the designs for your feeds, reviews, and widgets. After you connect an account in the [Platforms](./all-platforms-of-wp-social-ninja) section, you can build the template that will display your content here.

To access this page, navigate to **WP Social Ninja → Templates** from your WordPress dashboard.

As shown in the image, this page is organized into tabs for each feature:

- **Social Feeds**
- **Business Reviews**
- **Chat Widgets**
- **Notification Popup**
- **Testimonials**

## Create a New Template ​

To start a new design, click the "**+ Create Template**" button in the top-right corner. This will open the advanced template editor, where you can select your platform, choose a layout, and customize every visual detail to match your brand.

TIP

If you want a faster setup, you can also use the **Quick Builder** feature to open a simple 3-step wizard that helps you create a professional-looking template in seconds.
### Resizing the Editor Sidebar ​

Inside the template editor, all your settings live in a sidebar next to the live preview. To give yourself the perfect amount of working space, that sidebar is now **resizable and collapsible** across the Reviews, Chats, and Feed editors:

- **Drag to resize:** Grab the drag handle on the edge of the sidebar and drag it wider or narrower. It's fully keyboard-accessible too — focus the handle and use the **arrow keys** to adjust in small steps, or **Home** and **End** to jump to the minimum or maximum width.
- **Collapse to focus:** Click the collapse toggle to hide the sidebar entirely and preview your design in full width, then bring it back whenever you need it.

## How to Display Your Templates (Using Shortcodes) ​

Once you save a template, it appears in the list on this page.

To add the template to your website, find the **Shortcode** column. As shown in the image, you can click the shortcode (e.g., 
```
[wp_social_ninja id="123"]
```

) to copy it.

You can then paste this [shortcode](../integrations/shortcode-usage) into any WordPress page, post, or widget area to display your template.

## How to Manage Existing Templates ​

Each template in your list has a **three-dot (⋮)** menu on the far right that provides several management tools:

- **Edit:** Open the full template editor to update your layout, change filters, or modify styling.
- **Duplicate:** Create an identical copy of a template. This is perfect for testing new design ideas without changing your original setup.
- **Clear Cache:** This new feature immediately flushes the stored data for that specific template. Use this if your feed or reviews are not updating as expected to force the plugin to fetch fresh content.
- **Delete:** Permanently remove the template from your website.

### Finding and Filtering Templates ​

If you have many templates, you can use the organization tools at the top of the list:

- **Platform Filter:** Use the All Platforms dropdown to view only templates from a specific source, such as Instagram, Facebook, or YouTube.
- **Search Bar:** Quickly find a template by typing its name in the search box.
- **Bulk Actions:** Select multiple templates using the checkboxes on the left and use the Bulk Action menu to delete them all at once.

---

## WP Social Ninja Glossary ​

**Source:** [https://docs.wpsocialninja.com/guide/getting-started/wp-social-ninja-glossary.html](https://docs.wpsocialninja.com/guide/getting-started/wp-social-ninja-glossary.html)

# WP Social Ninja Glossary ​

This guide defines common terms used in the WP Social Ninja documentation to help you understand key features.

## A ​

**Access Token:** A unique code required to connect to some social media platforms (like Facebook or Instagram). It allows WP Social Ninja to securely fetch data from your account.

**API Key:** A code from a platform (like YouTube or Yelp) that you must add to WP Social Ninja. It gives the plugin permission to access and display data.

**Auto Syncing:** A feature that automatically checks for and downloads new business reviews or feed posts. You can set this to run at specific intervals (e.g., every 6 hours, daily).

## B ​

**Badge Layout (Reviews):** A review template style that displays a small badge with your average rating and total review count. This is often used to link to a full page of reviews.

**Business Account (Instagram):** A professional Instagram profile. This is required to use features like Hashtag Feeds or connect with the Business Advanced method.

## C ​

**Carousel Layout:** A template that displays your posts or reviews in a horizontal slider. Visitors can click arrows to see more content.

**Channel (Social Chat):** A specific messaging platform (like Messenger, WhatsApp, or Telegram) that you can add to your chat widget.

**Chat Widget:** The complete chat box or icon bubble that you place on your site. It holds all the social chat Channels you want to offer.

**Columns:** A setting in Grid or Masonry layouts that controls how many vertical columns your feed or reviews are split into.

**Configuration:** The one-time setup process to connect a platform (like Google Business Profile or Twitter) to WP Social Ninja.

**Custom Review:** A review that you write and add manually in WP Social Ninja. This is useful for adding reviews you received offline or via email.

**Custom Sources:** A powerful feature that lets you create your own "review platforms" inside the plugin. It is used to manually add individual reviews, bulk-import reviews from a CSV file, or connect a Fluent Form to collect new testimonials. These custom-made sources then appear as a new, selectable platform in the template editor.

## D ​

**Dark/Light Mode:** A toggle, usually found in the top bar of the WP Social Ninja admin dashboard, that switches the appearance of the plugin's backend interface between a light and dark theme. This setting is for administrator comfort and does not affect the style of your live feeds or reviews on the website.

## E ​

**Embed:** The action of placing a WP Social Ninja template on your website. You embed content using a Shortcode or a page builder widget.

## F ​

**Feed Type:** The specific kind of content you want to display.

> Examples: For Twitter, this could be your User Timeline or a Hashtag. For YouTube, it could be your Channel, a Playlist, or a Search term. For Facebook, it could be your Timeline, Photos, or Events.

**Filters:** Settings inside a template that let you control which posts or reviews are shown. You can filter by rating, hide posts with certain keywords, or show posts with specific hashtags.

**Fluent Forms Integration:** A connection with the Fluent Forms plugin. This allows you to create a form on your site to collect new Custom Reviews or Testimonials directly from your visitors.

## G ​

**Grid Layout:** A standard template that arranges posts or reviews in a clean, uniform grid with even rows and columns.

## H ​

**Header Settings:** Options to customize the top area of your feed or review template. You can show or hide your profile picture, page name, follower count, and follow buttons.

## L ​

**Layout Type:** The main visual style you choose for your template.

> Examples: Grid, Carousel, Masonry, Slider, or Timeline.

**License Key:** The unique code you get when you buy WP Social Ninja Pro. You must add this in the plugin settings to unlock pro features and get automatic updates.

## M ​

**Masonry Layout:** A template style where posts or reviews are arranged in columns of different heights. This creates a "brick-like" look that fits content together without leaving large empty spaces.

## N ​

**Notification Popup:** A Pro feature that displays individual business reviews (like a recent 5-star Google review) in a small popup box. This appears to visitors as they browse your site.

## O ​

**OAuth 2.0:** A secure connection method used by platforms like Google and Facebook. It lets you authorize WP Social Ninja to access your account without ever sharing your password.

**Optimize Images:** A feature that stores copies of your social media images on your own website server. This can make your feeds load faster.

## P ​

**Pagination:** An option for feeds or reviews with many posts. Instead of showing all posts at once, it adds a "Load More" button or numbered pages at the bottom.

**Platform:** Any social media or review service that connects to WP Social Ninja.

> Examples: Google Business Profile, Instagram, WhatsApp, Facebook, YouTube.

## Q ​

**QR Code Generator:** A Pro feature that creates a QR code. Customers can scan this with their phone to go directly to your review page (like Google or Yelp) and leave new feedback.

**Quick Builder:** A button on the main dashboard that re-opens the initial 3-step setup wizard. It's used to quickly create a new feed or review template without going through the advanced editor.

## S ​

**Schema Snippet:** Special code added to your reviews that is only visible to search engines. This helps Google understand your review data and can result in star ratings appearing next to your website in search results.

**Shortcode:** A small piece of code in brackets (e.g., 
```
[wp_social_ninja id="123"]
```

) that you copy and paste. You use it to embed a specific template onto a WordPress page, post, or sidebar.

**Shoppable Feed (Instagram):** A Pro feature that lets you add custom links to your Instagram posts. This turns your feed into a gallery where visitors can click a post to buy a product or visit a specific page.

**Slider Layout:** A template style, usually for reviews or testimonials, that displays one item at a time in a sliding format.

**Screen Options:** A settings panel, usually accessed from the top-right corner of the dashboard, that lets you customize your workspace. You can use it to show or hide specific platform modules from the "**All Platforms**" page, allowing you to create a cleaner view.

**Search bar:** An admin-side tool, usually found at the top-right of list pages (like "All Platforms," "All Reviews," or "All Templates"). It allows you to quickly find a specific item by typing its name, filtering the list instantly.

**Support:** A dedicated page in the WP Social Ninja admin dashboard that provides help resources. It includes links to contact the support team, report a bug, write a review, and access the full product documentation.

## T ​

**Template:** A saved design that controls how your reviews, feeds, or chat widget looks and functions. You create a template, customize its Layout Type and Filters, and then embed it on your site.

**Testimonial:** A Pro feature similar to a Custom Review. It is used for adding longer, more detailed endorsements that you can manage separately.

**Timeline Layout:** A layout for Facebook or Twitter feeds that arranges posts one after another in a single vertical column, similar to the look on the social media sites themselves.

---

