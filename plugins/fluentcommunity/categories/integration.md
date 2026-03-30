# Integration

*Category from FluentCommunity documentation*

---

## Integrating FluentPlayer with FluentCommunity

**Source:** [https://fluentcommunity.co/docs/integrating-fluentplayer-with-fluentcommunity/](https://fluentcommunity.co/docs/integrating-fluentplayer-with-fluentcommunity/)

The **FluentPlayer** integration allows you to transform your FluentCommunity portal into a fully branded, video-enabled experience. Instead of relying on the default look of YouTube or Vimeo embeds, Fluent Player ensures all your video content looks professional, consistent, and perfectly matches your community’s style.

With this integration, you can customize player controls, apply your brand colors, and even allow your members to upload videos directly to your *Spaces*. Also, members can upload videos in popular formats like MP4, M3U8, MPD, WebM, and MOV, and you can play embedded videos from platforms like YouTube, Vimeo, HLS, and DASH.

If a format is not supported, the native player will automatically handle playback to ensure a smooth experience.

> Note: If you do not have Fluent Player installed yet, you can easily install it directly from the community settings. Go to FluentCommunity > Settings > Features & Addons, find the Fluent Player module under Recommended Plugins, and click Install FluentPlayer.

![](https://fluentcommunity.co/wp-content/uploads/2026/02/fluent-player-integration-1-scaled.webp)

### Step 1: Enabling the Integration

Once Fluent Player is installed on your site, you need to activate the connection.

1. Navigate to your WordPress dashboard and go to **FluentCommunity** > **Settings**.
2. Click on the **Features & Addons** tab from the left-hand menu.
3. Locate the **FluentPlayer** module.
4. Click the **Player Settings** button to open the configuration panel.
5. At the top of the slide-in panel, toggle **Enable FluentPlayer** to **ON**.

Once enabled, your community posts will start using Fluent Player, and you will unlock access to appearance, control, and upload settings.

![](https://fluentcommunity.co/wp-content/uploads/2026/02/fluent-player-integration-2-scaled.webp)

### Step 2: Customizing Player Appearance

You can ensure your videos perfectly match your community’s aesthetic by adjusting the player’s look and feel.

- **Select a Player Skin:** Choose from multiple layouts (Modern, Classic, Simple, Floating, or Minimal).
- *Tip: Use ‘Modern’ for a feature-rich look, or ‘Minimal’ for a distraction-free learning environment.*
- **Set Brand Color:** Define your community’s primary hex color. This will instantly apply to the player’s progress bar, button highlights, and active controls.

![](https://fluentcommunity.co/wp-content/uploads/2026/02/fluent-player-integration-3-scaled.webp)

### Configuring Player Controls

This section gives you complete power over how members interact with your videos. You can toggle these specific settings on or off based on your needs:

**Player Controls**

- **Play/Pause:** The standard button allowing members to start or stop the video.
- **Volume:** Allow members to adjust or mute the sound.
- **Fullscreen:** Let members expand the video to fill their entire screen for immersive viewing.
- **Picture in Picture:** Allow the video to pop out into a small floating window so members can keep watching while browsing other areas of your community.
- **Captions Toggle:** Let users turn subtitles on or off (if your video includes caption files).

**Playback Behaviors**

- **Muted Autoplay:** Automatically start playing the video as soon as it loads, but with the sound muted (a great feature for social feed environments!).
- **Save Play Position:** Remember exactly where a member left off, so if they close the page and come back, the video resumes right from that spot.
- **Hide Top Controls:** Remove the top bar of the player interface for a cleaner look.
- **Hide Center Controls:** Hide the large play/pause buttons that appear in the middle of the screen.
- **Hide Bottom Controls:** Remove the timeline and bottom bar completely (useful for background videos or restrictive course environments).

### Managing Video Uploads & Embeds

The most powerful part of this integration is controlling how videos are added to your community.

**1. Enable Video Uploads:** Turn on the **Enable Video Upload** toggle to allow video files to be uploaded directly into community posts.

- *Who Can Upload?* You can restrict this feature to **Admins only**, **Admins and Moderators**, or allow **Everyone**.
- *Important:* If you have a large community, we highly recommend restricting uploads to Admins or Moderators to save your server’s storage space!

**2. Play Embedded Videos With Fluent Player:**

Turn this setting **ON** to force external links (like YouTube or Vimeo) to render using your custom Fluent Player design.

- *Why enable this?* It hides external branding and keeps your community interface looking clean and uniform!

![](https://fluentcommunity.co/wp-content/uploads/2026/02/fluent-player-integration-4-scaled.webp)

Once you have configured all your preferences, don’t forget to click the **Save Settings** button at the bottom of the panel!

---

## FluentSocket with FluentCommunity

**Source:** [https://fluentcommunity.co/docs/fluentsocket-with-fluentcommunity/](https://fluentcommunity.co/docs/fluentsocket-with-fluentcommunity/)

**FluentSocket** is a high-performance socket server built specifically for the Fluent ecosystem. By connecting it to your community, you bypass the limitations of traditional web servers. This ensures that messages and notifications are delivered to your members the exact millisecond they happen no page refreshes required.

This guide will walk you through the simple process of creating a FluentSocket app and connecting it to your community.

### Step 1: Create Your FluentSocket App

To get the credentials needed for the integration, you first need to create an “App” within your FluentSocket account.

1. **Log In**: Sign in to your[FluentSocket account](https://fluentsocket.com/).
2. **Access Apps**: Click on the **Apps** button located in the top navigation bar.
3. **Create New App**: Click the **Create New App** button to open the configuration window.

![](https://fluentcommunity.co/wp-content/uploads/2026/02/fluentsocket-1-scaled.webp)

1. **Configure Your App**:
- **App Name**: Give your app a clear name (e.g., “My Community Chat”).
- **Max Connections**: Set your preferred limit for simultaneous connections.
- **Enable Client Messages**: ⚠️ **Important:** Ensure you check the box for **Enable Client Messages**. This is a recommended setting for real-time chat to function correctly.
2. **Finalize**: Click the **Create App** button.

![](https://fluentcommunity.co/wp-content/uploads/2026/02/fluentsocket-2-scaled.webp)

### Step 2: Collect Your Credentials

Once your app is created, FluentSocket will generate unique keys to secure the connection.

1. Locate your newly created app in the list.
2. Find and copy the following three pieces of information:
- **App ID**
- **App Key**
- **App Secret**

![](https://fluentcommunity.co/wp-content/uploads/2026/02/fluentsocket-3-scaled.webp)

> Note: Keep these credentials private, as they allow your website to communicate securely with the socket server.

### Step 3: Connect FluentSocket to FluentCommunity

Now that you have your credentials, you need to plug them into your WordPress site.

1. **Open Settings**: Go to your WordPress Dashboard and navigate to **FluentCommunity** > **Settings**.
2. **Navigate to Messaging**: Click on **Features & Addons** in the left sidebar.
3. **Access Chat Settings**: Find the **FluentCommunity Chat** module and click the **Messaging Settings** button.
4. **Enable Real-Time Chat**: Locate the **Enable Real-Time Messaging** toggle and turn it **On**.
5. **Configure the Driver**:
- Select **Fluent Socket** as your real-time driver.
- Paste the **App ID**, **App Key**, and **App Secret** into their respective fields.
6. **Save**: Click the **Save Settings** button.

![](https://fluentcommunity.co/wp-content/uploads/2026/02/fluentsocket-4-scaled.webp)

After clicking save, you should see a success notification. Your community is now powered by FluentSocket! You can test this by opening your portal in two different browser windows; messages sent in one should appear instantly in the other without any lag.

---

## FluentCart Integration with FluentCommunity

**Source:** [https://fluentcommunity.co/docs/fluentcart-integration-with-fluentcommunity/](https://fluentcommunity.co/docs/fluentcart-integration-with-fluentcommunity/)

This feature allows you to monetize your hard work by selling access to your premium **Courses** and **Spaces**. It’s powered by a deep and seamless integration with **FluentCart**, our powerful e-commerce solution.

This guide will walk you through every step of the setup. While we will use a **Course** as our main example, please know that the setup process is **absolutely identical** for monetizing a **Space**.

**Prerequisites:** To use the Paywall, you must have both **FluentCommunity** and **FluentCart** installed and activated on your WordPress site.

**How it Works**

You don’t need to be an e-commerce expert. When you link a product to your private course, FluentCommunity automatically creates an integration feed in FluentCart for you. This “feed” is the magic link that grants your customers access to the course immediately after they pay.

You only need to set it up here in your FluentCommunity settings, and all the “e-commerce” parts are handled for you!

The process involves three main stages:

1. **Set Your Content to Private:** This tells FluentCommunity the content is not public.
2. **Link a Product:** This is the product your customers will buy.
3. **Configure the Lock Screen:** This is the beautiful sales page your customers will see.

Let’s begin!

### Step 1: Set Your Course or Space to Private

You can only charge for content that isn’t public. This first step is the “key” that unlocks all the paywall options.

1. Navigate to the Course or Space you want to sell.
- For a **Course,** navigate to it and click the **“Edit info”** link.
- For a **Space,** go to the space and click the “three-dot” menu, then select “Settings.”
2. In the **General Settings** tab, scroll down to the **Access Control** section.
3. Click the **Privacy** dropdown and select **Private** or **Secret**.

![](https://fluentcommunity.co/wp-content/uploads/2025/10/paywall-3-scaled.webp)

Once you set the privacy, you will see new tabs appear at the top of the settings window, including **“Paywalls”** and **“Lock Screen.”**

![](https://fluentcommunity.co/wp-content/uploads/2025/10/paywall-4-scaled.webp)

### Step 2: Link a Product to Your Paywall

Now that your content is private, you need to link a “product” to it. This is the item your customers will add to their cart and purchase.

1. Click on the **Paywalls** tab at the top of the settings window.
2. This screen will show all products that grant access. Since it’s new, it will be empty. Click the **Add Paywall** button.

![](https://fluentcommunity.co/wp-content/uploads/2025/10/paywall-5-scaled.webp)

1. A pop-up window will appear, giving you two easy options:

**Option A: Link an Existing FluentCart Product******If you have already created your product in FluentCart, simply start typing its name in the **“Search Product”** bar. Select it from the list when it appears.

**Option B: Create a New Product On-the-Fly******You can create a new product without ever leaving this screen.

- Click the **+ New** button.
- A form will appear. Enter a **Title** (e.g., “Learn Python Basic Access”) and a **Price**.
- Click the **Create** button.

![](https://fluentcommunity.co/wp-content/uploads/2025/10/paywall-6-scaled.webp)

This will *automatically* create a new, simple product in FluentCart for you and link it.

After adding your product, it will be listed on the “Paywalls” page. You have now successfully linked a purchasable product!

### Step 3: Configure Your Lock Screen

The “Lock Screen” is your sales page. It’s what non-members or logged-out users will see when they try to access your private content. You have two fantastic methods to set this up.

To choose your method, go back to the **General Settings** tab.

#### Method 1: The Easy Way (Default Lock Screen)

This is the quickest way to get your paywall live. It automatically adds a “Buy Now” section to the standard “This content is private” page.

1. In the **General Settings** tab, find the **Access Control** section.
2. Set the **Lock Screen Type** to **Default**.
3. A new checkbox will appear. You must check this box: **“Show Paywalls in the default lock screen”**.

![](https://fluentcommunity.co/wp-content/uploads/2025/10/paywall-2-scaled.webp)

1. That’s it! Click **“Save Changes & Close”**. Your paywall is now active.

#### Method 2: The Custom Builder (Full Visual Control)

This method lets you build a beautiful, custom sales page using a drag-and-drop builder, all without leaving this screen.

1. In the **General Settings** tab, set the **Lock Screen Type** to **Custom**.
2. Now, go to the main **Lock Screen** tab at the top of the settings window.
3. This will open a visual page builder. On the left side, under **Page Blocks**, you will see a block named **“Paywalls”**.
4. Click on the **Eye** icon button with the****Paywalls block from the left sidebar to appear.

![](https://fluentcommunity.co/wp-content/uploads/2025/10/paywall-8-scaled.webp)

1. **Customize Your Paywall:** Now you can click on the **Pencil** icon button of the Paywall to edit its content and design.
- **Content Tab:** Click the **Content** tab on the left to add or edit the description that appears with your product.
- **Design Tab:** Click the **Design** tab. Here you can:
- Change the **Button Label** (e.g., from “Buy Now” to “Join” or “Enroll Today”).
- Choose to **Show/Hide the Paywall Description**.
- Change all the **colors** for the block’s Background Color, Text Color, Button Label (color), and Button Background.

![](https://fluentcommunity.co/wp-content/uploads/2025/10/paywall-9-scaled.webp)

1. When you are finished designing your perfect sales page, click **“Save Changes & Close”**.

### Advanced Customization in FluentCart

Your setup is complete. However, if you are a power user, you can access even more settings for the integration.

1. Go back to the **Paywalls** tab in your Course/Space settings.
2. Click the “three-dot” menu next to your product and select **“Edit Product”**.

![](https://fluentcommunity.co/wp-content/uploads/2025/10/paywall-12-scaled.webp)

1. This will take you directly to the product’s edit page inside FluentCart. Click the **Integrations** tab.

![](https://fluentcommunity.co/wp-content/uploads/2025/10/paywall-13-scaled.webp)

1. You will see the **FluentCommunity Integration** that was automatically created for you. Click the edit icon (a small pencil) to open its settings.

![](https://fluentcommunity.co/wp-content/uploads/2025/10/paywall-15-scaled.webp)

From here, you can add advanced rules, such as:

- **Add to Spaces/Courses:** Automatically add the buyer to *other* spaces or courses when they buy this one.
- **Remove from Spaces/Courses:** Automatically remove the user from the content if they get a **refund** or their **subscription expires**.
- **Mark the community profile as verified:** Give your paying customers a “Verified” checkmark on their profile.
- **Event Trigger:** Change the event that grants access (e.g., from “Order Paid” to “Order Completed”).

This advanced panel gives you full, granular control over the e-commerce automation, but for most users, the automatic setup is all you will ever need.

---

## Configuring BunnyCDN

**Source:** [https://fluentcommunity.co/docs/configuring-bunnycdn/](https://fluentcommunity.co/docs/configuring-bunnycdn/)

FluentCommunity now integrates with BunnyCDN, allowing you to store data online and reduce site storage usage.

This guide covers two ways to configure BunnyCDN with FluentCommunity: through the plugin’s UI or by using the WordPress wp-config.php file.

## Bunny Settings in FluentCommunity

Navigate to FluentCommunity **Settings**, then click on **Features and Addons** from the left sidebar. Find the **Media Module** and click the **Configure** button next to it.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/Features-and-Addon-1-scaled.webp)

A pop-up will appear, showing that you need **API credentials** to connect **FluentCommunity** with **BunnyCDN**. You can find these credentials in your **BunnyCDN account**.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/BunnyCDN-Configure-2-scaled.webp)

### Get API Credentials from BunnyCDN

First, log into your [Bunny account](https://dash.bunny.net/auth/login?pk_buttonlocation=menu), then go to **Storage** from the left sidebar and click on **Add Storage Zone**.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/Bunny-Add-Zone-3-scaled.webp)

A pop-up will appear to set up the **Storage Zone** settings. Choose your preferred **Storage Tier** (we have selected **Standard**). Then, select the **Main Storage Region** based on your users’ location. Finally, click on the **Add Storage Zone** button.

**Note:** Keep track of the **Main Storage Region** you select, as you’ll need this information later when configuring **BunnyCDN** with **FluentCommunity**.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/Bunny-Add-Zone-4-scaled.webp)

### Connect Pull Zone

Go to the **Storage Zone** you just created, then select **Connected Pull Zones** from the left sidebar. Now, click on the **+ Connected Pull Zone** button.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/Add-Pull-Zone-4.5-scaled.webp)

A **Pull Zone setup** pop-up will appear. First, enter a **name** for your Pull Zone. Then, in the **Origin Type**, select **Storage Zone** and choose the **Storage Zone** you created from the dropdown.

Select the **Tier** as per your preference. Finally, click on the **Add Pull Zone** button to save.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/Add-Pull-Zone-5-scaled.webp)

You will now see your **Pull Zone Hostname**. Copy the **Hostname** and save it to your clipboard for later use.

**Note:** This **Hostname** is the **BunnyCDN Public URL** that you’ll need to enter on the FluentCommunity Bunny configuration page.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/Add-Pull-Zone-6-scaled.webp)

### API & Credentials

Go to the **Storage Zone** you just created and click on the **FTP & API Access** tab from the left sidebar. Here, you’ll find the **Username** and **Password**. Copy these two items for later use.

**Note:** The **Username** is the **BunnyCDN Storage Zone Name**, and the **Password** is the **BunnyCDN API Key** that you’ll need for the **Bunny configuration page** in **FluentCommunity**.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/FTP-API-Access-7-scaled.webp)

### Connecting Bunny Using the Plugin UI

Now, go to the **FluentCommunity Bunny Configure** page and paste the credentials into the following fields:

- **BunnyCDN API Key**: Paste the **Password** of your Storage Zone here.
- **BunnyCDN Storage Zone Name**: Paste the **Storage Zone Name** here.
- **Primary Storage Region**: Select the **Primary Storage Region** you previously chose for your Storage Zone in the **Main Storage Region**.
- **BunnyCDN Public URL**: Paste the **Hostname** of the Pull Zone here, making sure to add **https://** at the beginning.

Finally, click the **Save Settings** button to save your changes.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/Features-Settings-10-scaled.webp)

### Preview

Now, post anything in your **FluentCommunity** and attach a media file.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/Preview-8-scaled.webp)

You will see that the file is automatically stored on **BunnyCDN** storage.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/Preview-9-scaled.webp)

## Using wp-config.php

Add the following definitions to your 
```
wp-config.php
```

 file, adjusting the values according to your Amazon S3 setup:

```
// Amazon BunnyCDN Configuration
define('FLUENT_COMMUNITY_CLOUD_STORAGE', 'bunny_cdn');
define('FLUENT_COMMUNITY_CLOUD_STORAGE_S3_REGION', 'storage.bunnycdn.com'); //  change with your region.check the next section
define('FLUENT_COMMUNITY_CLOUD_STORAGE_ACCESS_KEY', 'PASSWORD'); // Your Storage Zone Password
define('FLUENT_COMMUNITY_CLOUD_STORAGE_BUCKET', 'STORAGE_ZONE_NAME'); // Your Storage Zone Name
define('FLUENT_COMMUNITY_CLOUD_STORAGE_PUBLIC_URL', 'https://PULL_ZONE.b-cdn.net'); // Your BunnyCDN Public URL
```

**Maps for FLUENT_COMMUNITY_CLOUD_STORAGE_S3_REGION**

Please use the value for 
```
FLUENT_COMMUNITY_CLOUD_STORAGE_S3_REGION
```

 based on the region you selected when creating your Storage Zone:

- Falkenstein, DE => 
```
storage.bunnycdn.com
```
- London, UK => 
```
uk.storage.bunnycdn.com
```
- New York, US => 
```
ny.storage.bunnycdn.com
```
- Los Angeles, US => 
```
la.storage.bunnycdn.com
```
- Singapore, SG => 
```
sg.storage.bunnycdn.com
```
- Stockholm, SE => 
```
se.storage.bunnycdn.com
```
- São Paulo, BR => 
```
br.storage.bunnycdn.com
```
- Johannesburg, SA => 
```
jh.storage.bunnycdn.com
```
- Sydney, SYD => 
```
syd.storage.bunnycdn.com
```

#### Notes

- If you use both methods, the wp-config.php settings will take precedence over the UI settings.
- The UI method is more user-friendly and doesn’t require direct file access to your WordPress installation.
- The wp-config.php method is more secure as it keeps sensitive information out of the database.
- Ensure that all the credentials are correctly entered, regardless of the method you choose.

#### Limitations

As BunnyCDN is not a full S3 compatible storage and does not support ACL. If you use the Document upload feature, then the full URL will still be served via the CDN.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Paymattic Integration with FluentCommunity

**Source:** [https://fluentcommunity.co/docs/paymattic-integration-with-fluentcommunity/](https://fluentcommunity.co/docs/paymattic-integration-with-fluentcommunity/)

[FluentCommunity](https://fluentcommunity.co/) integrates with [Paymattic](https://paymattic.com/), allowing you to **collect payments** and **add members**from the **Paid Course**and**VIP Spaces** of**FluentCommunity**directly through **Paymattic’s** [Payment Forms](https://paymattic.com/docs/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic/) or [Subscriptions Forms](https://paymattic.com/docs/how-to-add-susbcription-payment-item-fields-in-paymattic/#:~:text=WordPress%20with%20Paymattic%3F-,How%20to%20Add%20Subscription%20Payment%20Item%20Fields%20in%20Paymattic%3F,-How%20to%20Add).

This article will guide you through **integrating** **FluentCommunity** **with** **Paymattic** and make the most of your community features.

> Remember, before starting the process, make sure you install and activate the FluentCommunity Pro Plugin on your WordPress Site to set up this integration.

## Connecting Paymattic with FluentCommunity

First, go to **Settings** of **FluentCommunity** from the below-left corner.

Open the **Features & Addons** tab from the left sidebar and scroll down to the **Recommended Plugins and Addons** section.

Click the **Activate Paymattic**button to automatically set up the **Paymattic (free** **version)** plugin with your **FluentCommunity.**

> Remember, you need to install and activate the Paymattic Pro Plugin to perform all the tasks (e.g., using conditional logics, adding the user dashboard, etc.) for FluentCommunity.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/1.-Activate-Paymattic-plugin-scaled.webp)

Now, click the **View Settings** button and it redirects you to the**Paymattic Dashboard.**

![](https://fluentcommunity.co/wp-content/uploads/2024/12/2.-View-Settings-button.webp)

## Enabling FluentCommunity Module in Paymattic

By default, the **FluentCommunity** module will be enabled in your **Paymattic**.

If not, go to the **Integrations** section and manually **Enable** the**FluentCommunity** module by toggling the switch to get access to the **FluentCommunity Integration Feed.**

![](https://fluentcommunity.co/wp-content/uploads/2024/12/3.-Enabled-Fluent-Community-scaled.webp)

#### FluentCommunity Integration Feed

Now, go to **All Forms**, open an existing form by clicking the **Pencil/Edit Icon,**or create a new form by clicking the **+ Add New Form** button to integrate FluentCommunity.

> To learn the detailed process of creating a new form to collect payments, read this Payment Form or Subscriptions Form documentation.

For example, I used an existing payment form to show you the integration process.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/4.-open-desired-form-scaled.webp)

Once you are on the **Editor** page of your desired form, go to the **Integrations** tab, open the **Add New Integration** dropdown list, and select the **FluentCommunity Integration** option.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/5.-adding-Fluent-Community-Integration-feed-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring FluentCommunity.

**All the settings options mentioned in the screenshot below are briefly explained:**

**A. Name**: Here, you can set a name according to your preference for your feed

**B. Select Spaces or Courses to Enroll**: Here, you can select your desired or all **Space/s**and **Course/s** to set where your users will add as members/students immediately after form submission.

**C. Email Address**: In this field, you need to select the Email Address.

**D. Full Name (Only for new users)**: Here, use the {input.customer_name} shortcode by clicking the ShortCode Icon.

**E. Password (Only for new users)**: Here, you can set a fixed password for every new user. Or, you can keep it empty to automatically generate a new password for each user.

**F. Allow the user login automatically after Form submission**: Enable this option and your user will be directly logged into your Paymattic User Dashboard after submitting the form.

**G. Send default WordPress welcome email to a user after registration**: Enable this option to send a welcome email notification to your users with login details including a password reset option.

**H. Join/Enroll space/course on payment success only**: Check this option if you want your users to **Join/Enroll** in a **Space/Course** only when the payment is successful. If you keep it unchecked, users can get access to the space/course without payment succeed.

**I. Remove from space/course if payment refunded**: Checking this option will allow you to remove users automatically from space/course if payment is refunded.

**J. Remove from space/course if subscription canceled**: Checking this option will allow you to remove users automatically from space/course if they cancel their subscriptions.

**K. Enable conditional logic**: Enable this toggle if you want to set any conditions on this form submission. To learn the details use of this Conditional Logic, read this [Documentation](https://paymattic.com/docs/how-to-use-conditional-logic-in-form-fields-with-paymattic/). Plus, to get access to this feature, you need the [Paymattic Pro Plugin](https://paymattic.com/docs/how-to-install-and-activate-paymattic-in-wordpress/#1-toc-title).

Once you set up the page, click the**Create FluentCommunity Feed** button and the feed will be added.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/6.-All-options-of-Fluent-Community-Integration-Feed-.webp)

Now you will see that your **FluentCommunity Integration Feed** has been added here.

You can modify your **FluentCommunity Feed** anytime by clicking the **Pencil Icon** and delete it from here by clicking the **Trash Icon**.

Also, you can disable or enable this feed anytime by clicking the **Toggle** button if needed.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/7.-Added-Fluent-Community-integration-feed-scaled.webp)

#### Displaying Form into Front End

To display your **FluentCommunity Form**on the front end of your desired **WordPress Site**, **Copy** the **Shortcode** of your desired Form.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/8.-Copy-ShortCode-scaled.webp)

Then, paste the shortcode to the **Page/Post** where you want to display your **FluentCommunity Form.**

For example, I pasted the **ShortCode** to the default **Paymattic Dashboard** **Page**.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/9.-Paste-the-ShortCode-in-default-Paymattic-Dashboard-scaled.webp)

Now in your front end, you will see your **FluentCommunity Form** like the screenshot below. Here, your user needs to fill up the form for logging into the FluentCommunity Portal.

Plus, the **Paymattic Form User** will automatically be added to the **Members** list of selected **Spaces** and **Courses** of **FluentCommunity**.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/10.-Preview-of-the-Fluent-Community-Form.webp)

## Paymattic User Dashboard

After completing the integration, **Paymattic** users or **FluentCommunity** members who access the **Community** through **Paymattic** will see a dedicated section called “**Spaces & Courses**” in their **User Dashboard**.

This section provides an overview of their community activities, such as the spaces they have joined and the courses they are enrolled in.

Also, they can manage and see the payment history of their subscriptions through this dashboard.

> To learn more details about the Paymattic User Dashboard, read this Documentation. Plus, to get access to this feature, you need the Paymattic Pro Plugin.

Once your users fill in the form, the user dashboard will look like the screenshot below.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/11.-Paymattic-User-Dashboard.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Fluent Forms Integration with FluentCommunity

**Source:** [https://fluentcommunity.co/docs/fluentforms-integration-with-fluentcommunity/](https://fluentcommunity.co/docs/fluentforms-integration-with-fluentcommunity/)

Fluent Forms integrates with FluentCommunity, making it easy to add members to your Spaces or Courses. Plus, you can effortlessly collect payments for your Spaces and Courses using this integration. In this guide, we’ll show you how to integrate and make the most of your community features.

> Make sure to install the free version of Fluent Forms to set up this integration.

## FluentCommunity Module in Fluent Forms

To access the **FluentCommunity Integration Feed** in your forms, you must activate the **FluentCommunity module** in Fluent Forms. Here’s how:

Go to the Fluent Forms dashboard and click on **Integration** in the navigation bar. Now locate the FluentCommunity module and enable it by toggling the switch.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/FluentCommunity-Module-scaled.webp)

#### FluentCommunity Integration Feed

Go to your Fluent Forms and Create a New Form or use any existing form to integrate. To create a new form click on the **Add New Form** button.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/ff-1-scaled.webp)

Edit and add the fields in your form as you need for your members and go to **Settings and Integration** of the form.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/ff-2-scaled.webp)

From the left sidebar click on the **Configure Integration** button and then click on the **Add New Integration** button. Now from the dropdown select the **FluentCommunity Integration Feed**.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/FFIntegration-1-scaled.webp)

Now you’ll see the **FluentCommunity Integration Feed**. Here’s how to configure it step-by-step:

- **Name**: Provide a name for your FluentCommunity Integration Feed to easily identify it later.

- **Select Space or Course** **to Enroll:** Use the dropdown to select the **Space** or **Course** where members will be added. Also, both **Secret Spaces** and **Secret Courses** will appear in the list for selection.

**Map Fields**

- **Email Address**: Select the email field from the dropdown to map users’ email addresses.

**For New Users Outside WordPress**

- **Full Name**: Map the name field for new users. You can also use shortcodes for mapping.
- **Password**: Link the password field from the form to allow users to set a login password for your community.  can also use shortcodes for mapping password.

**Additional Options**

- **Allow the user to login automatically after form submission**: Check this box to allow users to log in automatically after form submission.
- **Send Welcome Emails**: Check this box to send WordPress’s default welcome email to new users after registration.

Click the **Save Feed** button to save your configuration.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/FFIntegration-2-scaled.webp)

Publish the form to start adding members to your community spaces or courses directly.

> To monetize your Spaces and Courses with Fluent Forms, you can create a payment form to collect payments for membership access. To set this up, make sure to install Fluent Forms Pro, as it’s required for creating payment forms. 
> 
> 
> 
> For more details on monetizing Spaces and Courses, check out these docs:
> 
> 
> 
> Course Monetization
> 
> 
> 
> Space Monetization

That is how the Fluent Forms Integration works with the FluentCommunity. If you have any questions about it, please contact [us](https://wpmanageninja.com/support-tickets/).

---

## Configuring Amazon S3

**Source:** [https://fluentcommunity.co/docs/configuring-amazon-s3/](https://fluentcommunity.co/docs/configuring-amazon-s3/)

You can integrate your Amazon S3 bucket with FluentCommunity to store media files externally, reducing your site’s load and maintaining its storage health.

This guide will walk you through the easy steps to set up Amazon S3 with FluentCommunity.

## Steps to Configure Amazon S3

First, navigate to the **Settings** of your FluentCommunity. From the left sidebar, click on **Features & Addons**, then select **Media Module Settings**.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Features-and-Addons-01-scaled.webp)

Next, you’ll see all the available cloud storage options. Click on **Amazon S3** from the menu, and the required fields to connect FluentCommunity with Amazon S3 will appear.

To set up the connection, you’ll need the following credentials:

- **Amazon S3 Access Key******
- **Amazon S3 Secret Key******
- **Amazon S3 Bucket Name******
- **Amazon S3 Location******
- **Bucket Sub Folder** (Optional)

You can find these credentials in your Amazon S3 account. In the next section, we’ll walk you through how to retrieve them step by step.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Features-and-Addons-02-scaled.webp)

## Get the Credentials

### Creating S3 Bucket

Log in to your **Amazon AWS** [account](https://aws.amazon.com/) to get the necessary credentials.

From the **Dashboard**, click on **All Services** in the left sidebar. A full list of AWS services will appear—scroll down to the **Storage** section and select **S3** to proceed.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-03-scaled.webp)

Before creating your bucket, you need to select a region. Amazon S3 creates each bucket in the region you choose, which can help optimize performance, reduce latency, lower costs, or meet data compliance requirements.

For instance, if you’re based in Europe, it’s often best to choose a region like **EU (Ireland)** or **EU (Frankfurt)**.

To select a region, click the **Region name** at the top of your AWS console and choose your preferred region from the dropdown list. For a full list of available AWS S3 regions, check this [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html).

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-04-scaled.webp)

Now it’s time to create a bucket where all your FluentCommunity media files will be stored.

To do this, simply click the **Create Bucket** button. This will start the setup process for your new storage bucket.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-05-scaled.webp)

You’ll now be redirected to the bucket creation page. Here’s how to fill out the form and set the correct permissions:

- **AWS Region**: Make sure the region matches the one you selected earlier.
- **Bucket Name**: Enter a unique name for your bucket.
- **Object Ownership**:

- Select **ACLs enabled**.
- Then choose **Object writer** under Object Ownership.
- **Block Public Access Settings for this Bucket**:

- Disable **Block All Public Access**permissions.
- Check the box saying **I acknowledge that the current settings might result in this bucket and the objects within becoming public.****
- **Other Settings**: You can customize them based on your needs or keep the defaults.

Finally, click the **Create Bucket** button to complete the process.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-06-scaled.webp)

Once your bucket is successfully created, you’ll see a confirmation message, and the bucket will appear in your list.****

> Make sure to copy the Bucket Name and Region—you’ll need these to fill in the Bucket Name and Location fields in your FluentCommunity settings.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-07-scaled.webp)

### Creating IAM User for Access

Click the **Services** dropdown in the AWS navbar or search for **IAM**. Select **IAM** to begin creating a new IAM user for access.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-08-scaled.webp)

Once you’re on the IAM dashboard, click **Users** from the left sidebar. Then hit the **Create User** button to start setting up a new IAM user.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-09-scaled.webp)

On the **Create User** page, start by entering your desired **User name**.

Next, leave the**Provide user access to the AWS Management Console (optional)**option unchecked, as it’s not needed for FluentCommunity integration.

Then, click the **Next** button to proceed to the permissions setup.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-10-scaled.webp)

In the **Set Permissions** step, select **Attach policies directly**. Then, search for **AmazonS3FullAccess** in the search bar, select the policy, and click the **Next** button to proceed.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-11-scaled.webp)

You can skip the **Review and Create** step and click on the **Create User** button to create the new user.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-12-scaled.webp)

Your user is created successfully. In the **Users** section, you will now see the newly created user. Click on the **User Name** to view the details.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-13-scaled.webp)

Now, go to the **Security Credentials** tab from the User Details page. Under this tab, you will find the **Access Keys** section. Click on the **Create Access Key** button to generate new access credentials for the user.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-14-scaled.webp)

The steps to create Access Keys will appear. In the **Access Key Best Practices & Alternatives** step, select the **Other** option and click on the **Next** button to proceed.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-15-scaled.webp)

You can simply skip this step and click on the **Create Access Key** button to generate the access key.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-16-scaled.webp)

Your Access Keys are created now. You can see the Access Key and Secret Key here. Copy these credentials to your clipboard for later use or download them as a CSV file by clicking on the **Download CSV File** button.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Amazon-S3-17-scaled.webp)

### Configuring Amazon S3

Now, go to the FluentCommunity Media Storage Settings and select **Amazon S3**. Paste the credentials you collected from your Amazon AWS account:

- **Amazon S3 Access Key**: Paste the Access Key from the IAM User.
- **Amazon S3 Secret Key**: Paste the Secret Key from the IAM User.
- **Amazon S3 Bucket Name**: Enter the Bucket Name you created in Amazon S3.
- **Amazon S3 Location**: Select the region from the dropdown that matches the one you used when creating your bucket.
- **Bucket Sub Folder (Optional)**: If you created a subfolder for file uploads, provide its name. Otherwise, leave it empty.

Finally, click the **Save Settings** button. Your Amazon S3 will now be successfully connected with FluentCommunity, and all media files will be stored in Amazon S3.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Features-and-Addons-18-scaled.webp)

## Configure Amazon S3 Using wp-config.php

Add the following definitions to your 
```
wp-config.php
```

 file, adjusting the values according to your Amazon S3 setup.

```
// Amazon S3 Configuration
define('FLUENT_COMMUNITY_CLOUD_STORAGE', 'amazon_s3');
define('FLUENT_COMMUNITY_CLOUD_STORAGE_REGION', 'us-east-1'); // change with your region. If it's global just remove this line or keep it empty
define('FLUENT_COMMUNITY_CLOUD_STORAGE_ACCESS_KEY', '********************');
define('FLUENT_COMMUNITY_CLOUD_STORAGE_SECRET_KEY', '********************');
define('FLUENT_COMMUNITY_CLOUD_STORAGE_BUCKET', 'your-bucket-name'); // change with your bucket name
define('FLUENT_COMMUNITY_CLOUD_STORAGE_SUB_FOLDER', 'site-name'); // optional. If you want to store the files in a subfolder of that bucket
```

Replace the placeholder values with your actual Amazon S3 credentials and information.

#### Notes

- If you use both methods, the wp-config.php settings will take precedence over the UI settings.
- The UI method is more user-friendly and doesn’t require direct file access to your WordPress installation.
- The wp-config.php method is more secure as it keeps sensitive information out of the database.
- Ensure that all the credentials are correctly entered, regardless of the method you choose.
- The sub-folder setting is optional and can be used if you want to organize your files within the bucket.

#### Troubleshooting

- If you encounter permission issues, review your bucket policy and IAM user permissions.
- Ensure that your S3 bucket is in the correct region and that it’s accessible from your WordPress server.
- Check that your access key and secret key are entered correctly without any extra spaces.

If you have any questions regarding this guideline, please don’t hesitate to reach out to our [support team](https://wpmanageninja.com/support-tickets/). We’re here to assist you!

---

## Configuring CloudFlare R2

**Source:** [https://fluentcommunity.co/docs/configuring-cloudflare-r2/](https://fluentcommunity.co/docs/configuring-cloudflare-r2/)

This comprehensive guide will walk you through the entire process of setting up CloudFlare R2 to work with the FluentCommunity Plugin. We’ll cover how to create and configure an R2 bucket, generate API tokens, and set up the plugin’s settings.

Follow these steps to set up Cloudflare R2 with your FluentCommunity.

## Cloudflare Account ID

First, log in to your **Cloudflare Account**. Navigate to **Storage & Databases** > **R2 Object Storage** > **Overview**. On the right side of the page, you will find the **Account Details** section. Your **Account ID** is displayed here. Click the **copy icon** next to the ID to save it for later use.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/account-api-scaled.webp)

Alternatively, you can find your **Account ID** in the **URL** of your Cloudflare account, as shown in the screenshot below. You can also copy your Account ID from here.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/CF-Account-ID-3.png)

### Create a CloudFlare R2 Bucket (Bucket Name & Public URL)

Navigate to **R2 Object Storage** from the left sidebar, find **Overview** under R2 Object Storage, and click on it. Now click on the **Create Bucket** button to create a bucket.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/create-bucket-scaled.webp)

Enter a name for your bucket that is easy to identify and unique across your projects. Leave the **Location** of the bucket as **Default** unless you have specific storage.

Double-check your settings and click the **Create Bucket**button**.**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe9s_WK4gJmHGpgkxL2iWJ7SV9jjF8UuPF0GzmPTJLeesR4QWA9MTFn6GIBg82Dv-FsYL6Z38Cr3mBnKU8hernf5HgIvE08EyoofoBMo9FE4wCHseoFtShF9PBcSy7c_Dul847dpA?key=G-8YXJrXIV2I2KeWHDJvH7ly)

### Cloudflare Bucket Public URL

You can now see the Bucket Details. Scroll down to the **Public Development URL** section. Here, you need to enable access to this public URL.

Click the **Enable** link, and a pop-up will appear. Type “allow” in the field to grant access to the **Public Development URL.**

![](https://fluentcommunity.co/wp-content/uploads/2024/11/public-development-url-scaled.webp)

A pop-up will appear to **Enable Public Development URL**. Type in ‘allow’ to confirm. Then, press the **Allow** button.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/allow-button-1024x559.webp)

Now from here, you will get the **Cloudflare Bucket Public URL**.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/copy-public-url-scaled.webp)

### Cloudflare Bucket EndPoint

To connect FluentCommunity with Cloudflare R2, you also need the S3 API endpoint for your specific bucket.

1. Navigate to **R2 Object Storage > Overview** from the left sidebar.
2. Click on the specific **Bucket** you created in the previous steps.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/cloudflare-bucket-endpoint.webp)

Once inside the bucket, switch to the **Settings** tab.

Under the **General** section, locate the **S3 API** field. **Copy** this URL (e.g., https://<account-id>.r2.cloudflarestorage.com/base-logs). This URL will be used as your **Endpoint**.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/enpoint-url.webp)

### Cloudflare Access Key & Secret Key

To generate your credentials, go back to the **R2 Object Storage > Overview** page. In the **Account Details** box on the right, click the **{} Manage** button next to **API Tokens**.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/manage-button-scaled.webp)

On the next page, click the **Create API token** button.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/create-account-api-token.webp)

Now, configure your token with the following settings:

1. **Token Name:** Give your token a descriptive name.
2. **Permissions:** Select **Object Read & Write**.
3. **Bucket:** Choose the specific bucket you created from the dropdown menu.

Next, click the **Create Account API token** button at the bottom.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/create-account-api-token-2-scaled.webp)

You will now see your **Access Key ID** and **Secret Access Key**. **Copy them immediately**, as the Secret Key will never be shown again for security reasons.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/copy-secret-and-api-key-scaled.webp)

## Configure FluentCommunity

Now access FluentCommunity and go to **Settings > Features & Addons**. Here you will see the **Media Module** section and click on the **Configure** button.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Media-Module-1-1-scaled.webp)

Next, select **Cloudflare R2** and enter the credentials you collected from your Cloudflare account in the earlier steps of this guide.

**Cloudflare** **Account ID:**Input your CloudFlare Account ID.

**Cloudflare** **Access Key:** Paste the Access Key you got earlier from your CloudFlare API token.

**Cloudflare** **Secret Key:**Enter the Secret Key from your CloudFlare API token.

**Cloudflare** **Bucket Name:**Enter the name of the R2 bucket you created.

**Cloudflare** **Bucket** **Public URL:** Provide the Public R2.dev Bucket URL.

**Bucket Sub-Folder (Optional):** If you’d like to organize files within a specific subfolder in your bucket, specify the subfolder name here.

Once all fields are filled in correctly, click the **Save Settings** button to store your configuration.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Media-Module-2-1-scaled.webp)

### Additional Configuration (Optional)

For more advanced setups, you can define your CloudFlare R2 settings in your wp-config.php file. This method provides an extra layer of security and is useful for managing configurations across different environments.

```
// CloudFlare R2 Configuration

define('FLUENT_COMMUNITY_CLOUD_STORAGE', 'cloudflare_r2');

define('FLUENT_COMMUNITY_CLOUD_STORAGE_ACCOUNT_ID', 'YOUR_ACCOUNT_ID'); // Example: 1718cb5a51e65c8f19e8sahdakh763

define('FLUENT_COMMUNITY_CLOUD_STORAGE_ACCESS_KEY', 'YOUR_ACCESS_KEY');

define('FLUENT_COMMUNITY_CLOUD_STORAGE_SECRET_KEY', 'YOUR_SECRET_KEY');

define('FLUENT_COMMUNITY_CLOUD_STORAGE_BUCKET', 'YOUR_BUCKET_NAME');

define('FLUENT_COMMUNITY_CLOUD_STORAGE_PUBLIC_URL', 'https://pub-SOME_RANDOM_STRINGS.r2.dev'); // Custom domain if configured

define('FLUENT_COMMUNITY_CLOUD_STORAGE_SUB_FOLDER', 'your-subfolder-name'); // Optional
```

> Note: Defining these values in wp-config.php will override any settings configured in the FluentCommunity plugin’s admin panel.

#### Troubleshooting Common Issues

1. **API Token Permissions**: Ensure your API token has the correct permissions for R2 access.
2. **Incorrect Bucket or URL**: Double-check that your bucket name and public URL are accurate and correctly configured.
3. **Custom Domain Setup**: If using a custom domain, confirm it is properly configured in CloudFlare to avoid connectivity issues.

For any additional support, feel free to reach out to our [support team](https://wpmanageninja.com/support-tickets/). We’re here to assist you!

---

## FluentCRM Integration with FluentCommunity

**Source:** [https://fluentcommunity.co/docs/fluent-community-integration-with-fluentcrm/](https://fluentcommunity.co/docs/fluent-community-integration-with-fluentcrm/)

**FluentCommunity** integrates with **FluentCRM,** allowing you to run **Email Campaigns**, **Automations**, and **Add/Remove** CRM contacts to Fluent Community members.

This article covers detailed information about **Automation**, **Contacts**, and **Email** **Campaigns** you can manage for **FluentCommunity** using **FluentCRM**.

## Connecting FluentCRM with FluentCommunity

First, go to **Settings** of **FluentCommunity** from the below left corner.

Open the **Features & Addons** tab from the left sidebar and scroll down to the **Recommended Plugins and Addons** section.

Click the **Install FluentCRM** button to automatically set up the **FluentCRM (free** **version)** plugin with your **FluentCommunity.**

> Remember, you don’t require the Pro Version of FluentCRM plugin to perform all the automated tasks for FluentCommunity.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/1.-Enable-FluentCRM-in-Fluent-Community-Settings-scaled.webp)

Now, click the **View Settings** button and it redirects you to the**FluentCRM Dashboard.**

![](https://fluentcommunity.co/wp-content/uploads/2024/11/2.-View-Settings.-button.webp)

From the various options of FluentCRM, we will discuss the necessary three sections. These are:

1. Automations
2. All Contacts
3. Email Campaigns

![](https://fluentcommunity.co/wp-content/uploads/2024/11/3.-Fluent-CRM-Dashboard-scaled.webp)

#### 1. Automations

FluentCRM provides **Triggers** and **Actions** specifically designed for **FluentCommunity** to run automations.

To get all the **Triggers** and **Actions**, go to the **Automations** section from the **FluentCRM Navbar** and click the **+ New Automation**button.

> To learn the detailed process of creating a new automation funnel, read this Documentation.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/4.-New-Automation-button.webp)

Now, a pop-up page will appear with all the Popular Pre-built Funnel Templates for creating automation where the full funnel diagram will be ready automatically.

But, to create your automation funnel from scratch, simply click on the **Create from Scratch**tab (e.g., here, I have created a new automation from scratch).

![](https://fluentcommunity.co/wp-content/uploads/2024/11/5.-Create-from-Scratch-tab.webp)

Triggers for FluentCommunity

Now, go to **Community** from the left sidebar and all the **Triggers** for **FluentCommunity** will appear. These are:

- **Joined in a Space**: If you select this trigger, automation will start when a user joins a space in FluentCommunity.

- **Enrolled in a Course**: If you select this trigger, automation will start when a user enrolls in a course in FluentCommunity.

- **User Level (Leaderboard) Upgraded**: If you select this trigger, automation will start when a user upgrades to a level in the leaderboard of FluentCommunity.

- **Left from a Space**: If you select this trigger, automation will start when a user leaves a Space in FluentCommunity.

- **Unenrolled from a course**:  If you select this trigger, automation will start when a user unenrolls from a course in FluentCommunity.

Once you select your desired **Trigger**, click the **Continue** button.

Also, you can give a **Title** to your Automation in the**Internal Label** field for easy referencing later. But, if you leave it blank, the title will be automatically set based on your chosen trigger.

> Apart from the triggers shown below, FluentCRM also comes with lots of other triggers. To see the full list of triggers, click here.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/6.-All-Triggers-of-Fluent-Community-1.webp)

Actions for FluentCommunity

Once you choose the **Trigger**, you will be redirected to the similar screen below from where you can add the [Actions](https://fluentcrm.com/docs/primary-automation-actions/) for Fluent Community.

Now, click the **Plus Icon**or hover over it and****click the**Add Action / Goal**option to view all the **FluentCommunity Actions**.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/7.-Plus-icon-or-Add-ActionGoal.webp)

Now, a pop-up page will appear with all the primary Action blocks of FluentCRM to choose from. These are:

- **Add to Space**: This action lets you choose the Space where users will be added once the automation starts.

- **Change Space Membership Status**: This action lets you change a user’s **Space** **Membership Status** (**Active**, **Pending**, or **Blocked**) when the automation starts.

- **Remove from Space**: This action lets you select from which **Space** the user will be removed after the automation starts.

- **Remove Courses**: This action allows you to select from which **Course/s** the users will be removed after the automation starts.

- **Enroll to Course**: This action lets you choose the **Course/s** where the users will be added once the automation starts.

- **Add Badge To User**: This action lets you add badges to the user profile of community members once the automation starts.

Apart from the actions shown below, FluentCRM also comes with lots of other actions. To see the full list of triggers, [click here](https://fluentcrm.com/docs/introduction-to-fluentcrm-automation/#primary-actions-of-fluentcrm-automation).

![](https://fluentcommunity.co/wp-content/uploads/2024/11/8.-All-Actions-of-Fluent-Community-1.webp)

#### 2. All Contacts

You can add or remove users directly from the **Contacts** of FluentCRM to the **Spaces** of Fluent Community.

First, go to **All** **Contacts**under the**Contacts**section from the **FluentCRM Navbar**.

Now, select contacts either individually by clicking the checkboxes or all at once by clicking the icon before the Email column.

Then, click the **Dropdown** **Arrow** of the **Select Action** field, and choose the desired actions given for Fluent Community.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/9.-All-Contacts-Bulk-Action.webp)

After selecting the desired action, select the desired **Space/Course** where you want to **Add/Remove** the contacts using the Dropdown list.

Finally, click the **Add to Selected Space** or **Add to Selected Course** button.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/10.-Add-to-selected-Space-button-scaled.webp)

#### 3. Email Campaigns

FluentCRM allows you to run **Email campaigns,** particularly for **FluentCommunity**.

First, go to **All Campaigns** under the **Emails** section from the **FluentCRM Navbar**, and click the **+ Create New Campaign** button.

> To learn the detailed process of creating a new Email Campaign, read this Documentation.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/11.-Create-New-Campaign-button-scaled.webp)

Once you reach the **Recipients** section, you can select the recipients (i.e., **FluentCommunity Users**) for whom you want to run this email campaign in two different ways. These are:

- By List & Tag
- By Advanced Filter

By List & Tag Filter

Use this **By List & Tag** filter to select the email campaign recipients.”

First, you need to add the **FluentCommunity Members/Users**under the desired **List/s and Tag/s** manually through [Automation](https://fluentcrm.com/docs/automation-editor/) (utilizing the appropriate **FluentCommunity Triggers**and applying the [Apply List](https://fluentcrm.com/docs/primary-automation-actions/#apply-list) and [Apply Tag](https://fluentcrm.com/docs/primary-automation-actions/#apply-tag) action).

Then, simply select your desired **List** and **Tag** using the Dropdown Arrow.

Add as many **Lists** or **Tags** as you need by clicking the **Plus Icon** and remove by clicking the **Minus** **Icon**.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/13.-Selecting-Email-Campaigns-Recipients-by-ListTag-Filter-scaled.webp)

By Advanced Filter

> To use this advanced filter to select the email campaign recipients, you need to have the FluentCRM Pro Plugin installed and activated in your WordPress Site.

Now, click on the **+ Add** button to start the filtering where you will get two options **Space Membership** and **Course Enrollment** for **FluentCommunity**.

This allows you to directly select specified **Space/Course** **Members** to include or exclude as recipients using the dropdown arrow.

You can add more filters by clicking the **+Add** button, add filters against the existing filter by clicking the **+ OR**button, and delete any existing filter by clicking the **Trash Icon**.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/12.-Selecting-Email-Campaigns-Recipients-by-Advanced-Filter.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Giphy Integration with FluentCommunity

**Source:** [https://fluentcommunity.co/docs/giphy-integration-with-fluent-community/](https://fluentcommunity.co/docs/giphy-integration-with-fluent-community/)

FluentCommunity offers a Giphy integration to add more fun to your posts, comments, and chats. Follow this guide to enable the Giphy module and bring animated GIFs into your community!

## Enable the Giphy Module

Open the **Settings** in Fluent Community and from the left sidebar, select **Feature and Addon**. Locate the Giphy Module, then click on the **Settings** button along with it.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Giphy-Integration-1-scaled.webp)

In the pop-up window, check the box labeled **Enable Giphy Module**.

Enter your **Giphy API key** in the provided field. (You’ll need to obtain this key from your Giphy Developer account.)

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Giphy-Integration-2.webp)

## Getting Your Giphy API Key

**Log in to Giphy Developer Account**

Go to the [Giphy Developer](https://developers.giphy.com/)page and log in. If you don’t have an account, create a new one.

**Generate an API Key**

Once logged in, click on **API Explorer** in the top navigation bar. On the API Explorer page, select **Create an API Key**.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Giphy-Integration-3.webp)

**Choose API Key Type**

In the pop-up, select **SDK** as the type of API key. Click **Next Step**.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Giphy-Integration-4.webp)

**Provide App Details**

Fill in the following fields:

1. **Your App Name:** Enter a name for your app.
2. **Platform:** Select **Web**.
3. **SDK Type:** Choose **JS/React SDK**.
4. **App Description:** Enter a brief description of your app.
5. Click **Create API Key**.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Giphy-Integration-5.webp)

**Copy Your API Key**

Your new API key will appear. Copy this key to use in your FluentCommunity settings.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Giphy-Integration-6.webp)

#### Finalizing Giphy Integration

**Paste API Key in FluentCommunity**

Go back to the Giphy settings in FluentCommunity and paste the API key in the designated field.

Click **Save** to enable Giphy for posts, comments, and chats.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Giphy-Integration-7.webp)

You should now see the Giphy feature available in posts, comments, and chats, allowing users to add GIFs with ease.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Giphy-Integration-8-scaled.webp)

If you have any questions about this setup, feel free to contact our [support team](https://wpmanageninja.com/support-tickets/).

---

