# Social Feeds

*Category from WP Social Ninja documentation*

---

## Social Feeds ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/](https://docs.wpsocialninja.com/guide/social-feeds/)

# Social Feeds ​

**WP Social Ninja** has multiple **Social Feeds**, especially the most extensive and useful Feeds to offer.

Just like [Business Reviews](../business-reviews/), **Social Feeds** can also fetch feeds from your social networking site within a few seconds. For instance, **Social Feeds** like [Instagram Feeds](./instagram-configuration), [YouTube Feeds](./youtube-configuration), [Facebook Feeds](./facebook-integration), [Twitter Feeds](./twitter-configuration), and [TikTok Feeds](./tiktok-feed-configuration) will automatically enhance your business if you add them to your WordPress site.

**WP Social Ninja** has **Five Social Feeds currently:** Twitter, Instagram, Facebook, YouTube, and TikTok.

Also, check out the -

- [Instagram Feed](./instagram-configuration)
- [Facebook Feed](./facebook-integration)
- [TikTok Feed](./tiktok-feed-configuration)
- [YouTube Feed](./youtube-configuration)
- [X (Twitter) Feed](./twitter-configuration)

---

## Convert Your Instagram Personal Account into Professional/Creator Account ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/convert-your-instagram-personal-account-into-professional-account.html](https://docs.wpsocialninja.com/guide/social-feeds/convert-your-instagram-personal-account-into-professional-account.html)

# Convert Your Instagram Personal Account into Professional/Creator Account ​

Switching from a **Personal Account** to a **Professional Account** is now required to keep your **Instagram Feeds** working on your **WordPress Site** using the **WP Social Ninja** plugin.

Based on your needs, you can convert your account to a **Business** or **Creator** account. Both types function properly with our plugin and offer specific features.

This article will guide you through the process of converting a Personal Instagram Account into a Professional Account.

## Converting Personal Account ​

To convert your personal account into a professional account, follow the steps below accordingly.

- First, go to [Instagram.com](https://www.instagram.com/), log in with your account credentials, click on your **Profile Picture** in the top-right corner, and select [Settings and Privacy](https://www.instagram.com/accounts/edit/) from the dropdown menu.
- Then, click on **Account Type and Tools** from the left sidebar, and select **Switch to Professional Account**.
- Now, based on your needs select the **Account Type** for your **Professional Account**. You can choose either a [Business Account](https://help.instagram.com/138925576505882/?helpref=search&query=about%20Business&search_session_id=a1539d704d4e86b0909e490f18d7fe39&sr=3) or a [Creator Account](https://help.instagram.com/1158274571010880?helpref=faq_content).
- It is time to choose a **Category** that suits perfectly to your profile (e.g., **Blogger**, **Artist**, **Local Business**, etc.). Also, you can choose whether to display this **Category Publicly**.
- Then, **Instagram** will ask you to **Add** or **Update Contact Details** (e.g., **email**, **phone number**, or **address**). You can choose whether to make this information **Public**.
- Now complete the remaining prompts to finish the setup. Once you are done, your account will be converted to a Professional account.

**Remember**, after converting your personal profile to a Business or Creator account, you will need to reconnect your Instagram account to the WP Social Ninja plugin. This ensures your feed continues displaying posts seamlessly without any interruptions due to the API change.TIP

Also, if you want to display a Hashtag feed, you’ll need to connect your account as **Business Advanced**, and it must be linked to a Facebook page. You can more details [here](https://help.instagram.com/570895513091465?helpref=faq_content).If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Display Facebook Events Feed with WP Social Ninja ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/display-facebook-events.html](https://docs.wpsocialninja.com/guide/social-feeds/display-facebook-events.html)

# How to Display Facebook Events Feed with WP Social Ninja ​

If you are looking for ways to display your Facebook Events feed on your WordPress website, you are in the right place. In the next part, we'll discuss how to do this.

If you want to show your Events, please follow this **documentation** to generate an Event Access Token.

Let's go through the article to learn how to accomplish it.

- Go to the [Platforms](../getting-started/all-platforms-of-wp-social-ninja) → choose **Facebook Feeds & Reviews**.

- A popup will appear where you need to click on the **Add New Template.**

**Note that, You must create a particular Page Events Access Token, for which we have outlined instructions here.**

- Now, Select your **Feed Type (Events)** from the dropdown.
- Choose which specific Page’s Events you want to display and for which you have created an Event Access Token.
- After that, click on the **Fetch Feeds**.

- After fetching, all of the Events of that specific page will be shown.
- You can also change your [Facebook Feed Settings](./facebook-customization) & [Facebook Layout Settings](./facebook-layout-styling).

---

## Facebook Feed Template: General Settings ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/facebook-customization.html](https://docs.wpsocialninja.com/guide/social-feeds/facebook-customization.html)

# Facebook Feed Template: General Settings ​

Once you have created a new [template](../business-reviews/create-template) for your Facebook feed, you will land in the main **Template Editor**. This is the control center where you can customize every part of your feed's content and appearance.

The editor is organized into two main tabs:

- **General (This Guide):** This tab controls *what* content is shown (your source, filters, text) and *how* the feed functions (layouts, buttons, pagination).
- **Style:** This tab controls the visual design (colors, fonts, borders, spacing). You can customize the [layout and styling](../social-feeds/facebook-layout-styling) here.
- **Connection:** This tab manages the specific API connection for this template. You will use this tab to add or update the required authentication keys, such as the [Facebook Events Access Token](./facebook-events-access-token), to ensure your feed can successfully fetch data from the platform.

This guide will provide a detailed, in-depth look at every single setting in the **General** tab.

**Use Case:** The General Settings allow for powerful combinations.

- A band could use the **Source** settings to only show **Events**.
- A photographer could only show **Photos** and use the **Template** settings to create a beautiful **Masonry** grid.
- A business could show its **Timeline** but use the **Filters** to hide any posts that mention a 
```
#contest
```

 or 
```
#giveaway
```

.

## General Settings ​

Here is a breakdown of each section within the **General** tab.

### 1. Source ​

This is the most important step. The Source settings determine which Facebook Page to connect to and what type of content to pull from it.

- **Feed Type:** This dropdown menu lets you choose the kind of content to display. - **Timeline:** This is the most common option. It shows the standard posts from your Facebook Page's wall, just as visitors would normally see them.
- **All Videos:** This will only pull video posts from your page. This is perfect if you want to create a dedicated video gallery on your website.
- **Specific Video Playlist:** This will only pull the Video Playlist.
- **Photos:** Similar to Videos, this will only pull photo posts, ignoring any text-only or link posts.
- **Events:** This powerful feature will display a feed of your Page's upcoming or past events, including the event date, time, and title.
- **Album:** This allows you to spotlight a single, specific photo album from your Page.
- **Single Album:** This will only show the single album.
- **Total Feed:** This number tells WP Social Ninja the maximum number of posts to fetch (or pull) from Facebook. It's best to set this to a high number, like 50 or 100. (Note: This is different from the number of posts that load on the page initially, which is controlled by **Pagination**.)
- **Select Page(s):** If you have connected multiple Facebook Pages to WP Social Ninja, this dropdown is where you will select which Page you want to display in this specific template.

### 2. Template ​

This section controls the visual structure and arrangement of your posts.

- **Layout Type:** This is the foundational structure of your feed.

- **Timeline:** A classic, single-column feed that looks similar to the Facebook wall.
- **Grid:** A clean, organized, multi-column grid. All post boxes are forced to be the same height, which creates a very neat and symmetrical look.
- **Masonry:** A modern, "Pinterest-style" multi-column grid. Posts have variable heights based on their content (e.g., a long post will be taller, a short one will be shorter) and fit together like bricks.
- **Carousel:** A horizontal slider that lets you show many posts in a small amount of space. Visitors can click or swipe through your posts.
- **Template:** These are pre-designed visual "skins" for your feed. Each one changes the styling of the post boxes, fonts, and layout:

- **Classic Post:** The familiar layout — post text, then media, then the engagement counts underneath.
- **Media First:** Puts the photo or video at the top of the card with the text below it, so image-heavy pages lead with the visual.
- **Profile Card:** *(Pro)* Adds a summary card with your page details and statistics above the posts.
- **Overlay Card:** *(Pro)* A mosaic layout of media tiles. The post text appears over the tile when a visitor hovers or tabs onto it, which keeps the grid clean.
- **Number of Columns:** This is a crucial responsive setting. You can set the number of columns to show on **Desktop**, **Tablet**, and **Mobile** devices.
- **Columns Gap:** This controls the amount of "gutter" or empty space (in pixels) between each post in your feed. Increase this for a more spaced-out, airy look, or decrease it to make the posts tighter.

#### What the Pro Layouts Look Like ​

**Profile Card** puts a summary of your Page profile picture, name and statistics in a card above the posts.

**Overlay Card** arranges your media into a mosaic of tiles of varying sizes, and reveals each post's text over the tile on hover.

#### Sorting and Order ​

Use the Order dropdown to control how your posts are displayed. Along with standard options like **Newest**, **Oldest**, and **Random**. You can also choose **Facebook Event Default** to prioritize posts using Facebook’s native event-ordering logic.

### 3. Filters ​

Filters are how you refine your feed to exclude content you don't want or only show content you do.

- **Number of Feeds to Display:** This is the number of posts a visitor will see when the page first loads. This is directly related to the **Pagination** setting.
- **Post Order:** This lets you sort your posts. - **Descending:** Shows newest posts first (most common).
- **Ascending:** Shows oldest posts first.
- **Random:** Shuffles the posts in a new order every time the page loads.
- **Display Post With:** This feature, found in the Filters section, acts as a content-type filter. It allows you to select exactly which kind of posts you want to show in your feed. By default, it is set to **All**, which shows everything. However, you can select one of the following options from the dropdown menu: - **All:** (Default) This shows all post types from your page.
- **Text:** This will only display posts that are text-only (status updates).
- **Photos:** This will only display posts where the main content is one or more photos.
- **Videos:** This will only display video posts.
- **Links:** This will only display posts that are primarily a shared link.
- **Events:** This will only display your Facebook Event posts.
- **Albums:** This will only display posts that are photo albums.
- **Show/Hide Posts with Keywords/Hashtags:** This is a very powerful filter. You can enter a comma-separated list of words or hashtags to either **only show** posts with those words, or **hide** posts with those words. > Example (Hide): You run many contests. You can enter #contest, #giveaway, win to automatically hide all those posts from your website feed, keeping it focused on company news.
- **Hide Specific Feeds:** This allows you to manually hide one or more specific posts. To get a post's ID, go to the post on Facebook, look at the URL, and copy the long string of numbers. Paste that ID here to hide it.

Date Range [​](#date-range)This is one of the powerful features in the Facebook template editor, allowing you to create time-sensitive feeds that can be either fixed or dynamic. This filter is essential for creating "Recent News" feeds or "Year-in-Review" sections.

You have three options to choose from:

**a. (Default)**

This is the default setting. It simply means no date filter is applied. The feed will display posts based on your other settings (like Post Order).

**b. Specific Date Range**

This option allows you to select a fixed and permanent date range. When you select this, two new fields will appear: **From** and **To**.

- **What it does:** It will only show posts that were published between the two exact dates you select.
- **Use Case:** This is perfect for "archival" feeds. You can create a feed for a specific product launch ("Posts from June 2025"), a past event ("Our 2024 Conference"), or a holiday promotion ("Black Friday 2025 Highlights"). The content in this feed will never change, as it's locked to that specific timeframe.

**c. Relative Date Range**

This option is incredibly powerful because it is dynamic and automatic. When you select this, you can set a timeframe that is relative to the current date.

- **What it does:** It allows you to create feeds like "All posts from the last 30 days" or "All posts from the last 6 months."
- **How it works:** Unlike a Specific Date Range, a Relative one updates itself. If you set it to "Past 30 Days," you can leave it forever. Tomorrow, it will automatically include any posts from today and drop off any posts that are now 31 days old.
- **Use Case:** This is the best way to create a "Recent News" or "What's New" feed on your website. It ensures your feed is always fresh and relevant, showing only the most recent content without you ever having to manually update the filter.

### 4. Feed ​

This section controls the content and links inside each individual post card.

- **Open Post in:** This determines what happens when a visitor clicks on a post in your feed. - **None:** The post is not clickable. It's for display only.
- **Facebook:** The visitor will be taken to the original post on Facebook.com in a new browser tab.
- **Popup / Lightbox:** This is often the best user experience. The post's details (including text and comments) will open in a beautiful pop-up box on your own website, keeping the visitor engaged on your page.
- **Display Author Photo:** A toggle to show or hide your Page's profile picture on each post.
- **Display Author Name:** A toggle to show or hide your Page's name on each post.
- **Display Date:** A toggle to show or hide the date and time the post was published.
- **Display Description:** A toggle to show or hide the text caption for each post.
- **Trim Description Words:** Sets a maximum word count for the post text. If the post is longer, it will be shortened with a "Read More" link.
- **Inherit Site Default Date Format:** When enabled, this matches the date's format (e.g., 
```
mm/dd/yyyy
```

) to your main WordPress settings.
- **Display Platform Icon:** A toggle to show or hide the small Facebook "f" icon on each post.
- **Equal Height:** This toggle is very important for the **Grid** layout. When toggled on, all post boxes are forced to the same height (based on the tallest post), creating a perfect grid. When toggled off, boxes will have different heights, which can look messy in a Grid layout.
- **Display Media in Timeline Feed:** A toggle to show or hide the images or videos in your posts. If turned off, the feed will only display text.
- **Display Likes Count:** A toggle to show or hide the number of likes and reactions for each individual post.
- **Display Comments Count:** A toggle to show or hide the number of comments for each individual post.

### 5. Header ​

This section controls the large banner at the top of your entire feed, which displays your main Page information.

- **Display Header:** This is the master on/off switch for the entire header section. Toggle it off if you want a bare feed with no title.
- **Account to Display:** If your feed is set up to show posts from multiple Pages at once, this setting lets you choose which one Page's info (cover photo, name, etc.) to show in the header.
- **Header Layout:** Choose how much of your Page information the header shows. - **Classic:** The full banner — cover photo, profile picture, page name, description and follower count.
- **Minimal:** A compact single row with just your profile photo and page name. Good when the feed sits inside a sidebar or a narrow column, or when a large banner would compete with the rest of your page.
- **Display Toggles:** These let you show or hide the different parts of the header: - Display Cover Photo (Your Page's large banner image)
- Display Profile Photo (Your Page's square logo/picture)
- Display Page Name
- Display Description (Your Page's "About" info)
- Display Likes Counter (The total number of likes your Page has)
- Display Followers Counter (The total number of followers your Page has)

### 6. Like Button ​

This adds a "Like Page" call-to-action button to your feed, helping you get more Facebook followers from your website traffic.

- **Display Like Button:** Toggles the button on or off.
- **Like Button Position:** You can place the button in the **Header** (at the top of the feed) or the **Footer** (at the bottom).
- **Button Text:** You can customize the text on the button. For example, instead of "Like Page," you could change it to "Follow Us on Facebook."

### 7. Share Button ​

This adds a button that allows your website visitors to easily share your feed with their friends.

- **Display Share Button:** Toggles the button on or off.
- **Share Button Position:** Place it in the **Header** or **Footer**.
- **Button Text:** Customize the call-to-action text, such as "Share This Feed."

### 8. Pagination ​

Pagination controls what happens when a visitor scrolls to the bottom of the initial set of posts (which you set in the **Filters** section).

- **Pagination Type:**- **None:** The feed will only show the "Number of Feeds to Display" and nothing else. There will be no way to load more posts.
- **Load More:** This will add a button at the bottom of your feed. When clicked, it will load the next set of posts. This is the most popular and user-friendly option.
- **Load More Button Text:** You can change the text from "Load More" to something like "See More Posts" or "Show Me More."
- **Feeds Per Page:** This is very important. This number controls how many *new* posts are loaded each time the "Load More" button is clicked.

> Example: You set Number of Feeds to Display (in Filters) to 8. You set Feeds Per Page (here) to 4.Your page loads, and visitors see 8 posts.They click "Load More."4 new posts appear (total of 12).They click "Load More" again.4 more posts appear (total of 16).

## Next Steps ​

Now that you have configured all the General settings, your next step is to make your feed beautiful!

Click on the **Style** tab (as shown in Screenshot 10) to customize the Colors, Fonts, Borders, and Spacing of your header, content, and buttons. Learn more about [Facebook Feed Layout & Styling](./facebook-layout-styling).

When you are finished, click the **Save Template** button at the bottom.

---

## Facebook Events Access Token ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/facebook-events-access-token.html](https://docs.wpsocialninja.com/guide/social-feeds/facebook-events-access-token.html)

# Facebook Events Access Token ​

With WP Social Ninja, adding your Facebook Page events to your WordPress site is quick and simple. In this guide, we'll walk you through how to connect your Facebook Page with WP Social Ninja and display your events directly on your website.

## Facebook Event Access Settings ​

To access the Facebook Event Access settings in WP Social Ninja, navigate to the **Platform** tab from the top menu, then click the **Settings** icon.

A pop-up for Facebook Configuration will now appear. From the dropdown, select **Connect Event Access Token**. You’ll see that both your **Facebook Page ID** and **Event Access Token** are required to connect your Facebook Events.

Now, we'll walk you through how to connect your **Facebook Page Events** with **WP Social Ninja**. To get started, you'll first need to **create a Facebook App** to collect the required credentials.

## Facebook App ​

To create a Facebook App, visit the [Facebook Developer](https://developers.facebook.com/)site. Log in to your account and click on the **My Apps** button from the top menu.

TIP

Note that, You must log in with your personal Facebook profile’s username and password. Businesses cannot register as developers on Facebook; only individuals may do so.Now you’ll see the app creation page. Just click on the **Create App** button to get started.

Give your app a name and enter a contact email. Once you’ve filled those in, click the **Next** button.

In the **Use Cases** section, select **Others**, then proceed to the next step.

Next, select **Business** as your **App Type** and click on the **Next** button to proceed to the next page.

You’ll now see the App details page. Here, you can make any changes if needed, or simply leave the information as it is. Once you're ready, click the **Create App** button to finalize.

A popup will appear asking you to re-enter your Facebook password for security. Type in your password and click the **Submit** button.

## Get the Credentials ​

Go to your[Meta App Developer Account](https://developers.facebook.com/apps/)and click on the App that you have created now.

Now the App development page will appear. From the left sidebar, go to **App Settings** and select **Basic**.

Next, go to the [API Explorer page](https://developers.facebook.com/tools/explorer/). First, choose the Meta **App** you created earlier. Then, in the **User or Page** dropdown, select **User Token** and enable the following permissions:

- page_events
- pages_read_engagement
- pages_read_user_content
- pages_show_list

After setting the permissions, click on the **Generate Access Token** button. Once the token is created, copy it and save it for later use.

## Long Lived Access Token ​

Standard Facebook User Access Tokens expire quickly. To maintain a stable connection for your Facebook Events feed, you should convert your short-lived token into a long-lived one using Facebook's official tool.

Follow these steps to generate your token.

- **Navigate to the Access Token Debugger**

- Go to the [Facebook Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/) and log in to your Facebook account.
- **Debug Your Current Token**

- Paste your existing **User Access Token** into the input field and click the **Debug** button.

- **Extend the Token**- On the results page, scroll to the bottom and click the **Extend Access Token** button.

- **Copy the New Token**- A new, long-lived token will be generated. Copy this new token to use in WP Social Ninja.

- This is your **Event Access Token**, paste it to the required field of the WP Social Ninja dashboard. And to get the **Page ID**, you need to go to the [link](https://wpsocialninja.com/access-token-generator/?id=facebook-feed).
- Now, go to the **Facebook Feed** → click on the **Continue with Facebook** button & then a popup will appear.
- Select Continue as – (your Facebook ID)

## Configure Facebook Page Event with WP Social Ninja ​

Go back to your WP Social Ninja and open the **Facebook Event Access Configuration** settings. Paste the **Page ID and Long Lived Access Token** you copied earlier into the respective fields and click on the **Connect** button.

Next, click on the **Add New Template** button to set up and customize the template as per your preferences.

INFO

Events created by a co-host of the Facebook Page will not appear in your feed. Facebook's API does not share data for events where the connected Page is only a co-host. To ensure an event shows up on your website, it must be created directly by the main Facebook Page itself.This is how you can display your Facebook Page Events on your site. If you have any further questions or need assistance with this configuration, please don’t hesitate to contact [us](https://wpmanageninja.com/support-tickets).

---

## Connecting A Facebook Page Using Access Token ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/facebook-feed-access-token.html](https://docs.wpsocialninja.com/guide/social-feeds/facebook-feed-access-token.html)

# Connecting A Facebook Page Using Access Token ​

If you want to display your Facebook feed on your website with **WP Social Ninja**, it comes up with multiple options for the configuration process. This is to ease your work, and you can get your account processed more specifically.

And if you’re thinking about your privacy policy or account credentials, we have a superb solution that will meet your security satisfaction!

Connecting a Facebook Page Using Access Token by WP Social Ninja won’t require you to give your personal information or won’t ask you for your login details. Rather you will get **Page ID** and an **Access Token** with just a few steps.

You can connect your client's facebook pages without asking them for Facebook personal login credentials. Send your client the WP Social Ninja's own [access token generator](https://wpsocialninja.com/access-token-generator/) page and ask them to provide you with the Facebook feed access token and User ID.

TIP

WP Social Ninja does not store any details provided on this page. It’s a tool to generate Facebook feed access token and authorize WP Social Ninja’s connection through the plugin on your website. WP Social Ninja is a Facebook and Instagram-approved app, so the connection is secure. It uses Facebook and Instagram’s official API and only shares your Access Token and User ID with people you trust.Let’s get into the process

## Manually Connect a Page ​

In the configuration part, if you want to work on only your Facebook feed, select the **Account Manually** from the Credential Type.

- For beginning the Manual process, select the **Account Manually**.

- Now, for connecting your Facebook Feed with a Facebook Feed access token, go to WP Social Ninja’s own access token generator page [access token generator](https://wpsocialninja.com/access-token-generator/).
- For generating access token code, start it with selecting **Continue with Facebook** under the Facebook Feed. After that you will asked for the permisson in FaceBook.

- This will take you to the page where you can get the access **Page ID** and **Access Token**. Copy the **Access Token** from here.

- Lastly, paste the code in the **Access Token** box and finally complete the configuration done with clicking the button **Connect**.

And that’s all! You’re done with connecting a Facebook feed access token.

Your Facebook page is now ready to unbox the WP Social Ninja feed features.

---

## Facebook Feed Settings ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/facebook-feed-settings.html](https://docs.wpsocialninja.com/guide/social-feeds/facebook-feed-settings.html)

# Facebook Feed Settings ​

The Facebook Global Settings feature enables you to manage the default caching and image optimization settings for all your Facebook feeds simultaneously. These settings are located in the main plugin dashboard, not in the individual template editor.

## Access the Feed Settings ​

To find these settings, navigate to **WP Social Ninja → Settings** from your WordPress dashboard. Click on the **Feed Platforms** tab. Then, select **Facebook Settings**. Here, you will find the Feed Settings.

Here is a breakdown of each setting available in this panel.

### Check New Feeds Every ​

This dropdown controls the default auto-sync schedule. It determines how often WP Social Ninja will check Facebook for new posts (e.g., 6 Hours, 1 Day, 1 Week). Setting a longer interval can improve your site's loading speed.

### Clear Cache ​

This button will immediately clear all stored Facebook feed cache from your website.

> Use Case: Click this button if your feeds are not showing new posts and you want to force the plugin to fetch the latest content from Facebook immediately.

### Optimize Images ​

This toggle enables or disables image optimization for your Facebook feeds. This option will generate and store optimized images in multiple sizes using your WordPress local storage for improved performance.

NOTE

To configure GDPR Compliance and Image Format settings, go to **Advanced Settings**.
### Reset Local Images ​

This button will clear all locally stored images associated with the Facebook platform.

> Use Case: You should click this if your images are not updating correctly or if you want to force the plugin to delete all stored images and fetch new ones from Facebook.

If you have any questions or need further assistance, feel free to reach out to our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpsnsite&utm_medium=popup&utm_campaign=spring#/).

---

## Facebook Feed Configuration ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/facebook-integration.html](https://docs.wpsocialninja.com/guide/social-feeds/facebook-integration.html)

# Facebook Feed Configuration ​

WP Social Ninja easily connects with your Facebook account, letting you display your Facebook Page activity on your website. Facebook connects through WP Social Ninja's [secure connection bridge](../getting-started/connecting-your-accounts), so all it takes is logging in and granting permission — no developer app required. This article will guide you on how to connect your Facebook Page events to your site.

## Enable Facebook Feed ​

First, go to WP Social Ninja and select the [Platform](../getting-started/all-platforms-of-wp-social-ninja) from the navbar. Locate **Facebook** and enable it by connecting your Facebook account with the WP Social Ninja Plugin.

Click on the **Settings** icon next to the **Facebook** in your **Platform** section.

A pop-up will appear to configure your Facebook account. Click **Continue with Facebook**. Log in to your Facebook account and give permission to WP Social Ninja to connect with your Facebook account.

Click on the Continue button here to give access to your WP Social Ninja.

You will be redirected to the WP Social Ninja Platform Page, where a pop-up will prompt you to select one or more Facebook Pages to display events on your website.

After selecting the pages, click the **Connect Pages** button.

In the next pop-up, you'll see your Facebook Page has been added. To remove it, simply click the **Remove** icon button next to your Page Name. To connect another account, click the **AddMore Account** button.

To display your Facebook events on your website you can choose some awesome [templates](../social-feeds/facebook-customization) from WP Social Ninja, to do so click the **Add New Template** button and choose a template.

## Facebook Feed Settings ​

WP Social Ninja offers various settings to keep your Facebook Feed updated. To access the **Facebook Feed Settings**, navigate to WP Social Ninja. Click on **Settings** from the top navigation bar. In the left sidebar, select **Feed Platforms**, then choose **Facebook Settings**.

Here’s a breakdown of the available Facebook Feed settings:

**Check New Feeds Every:** Specify the interval (in hours) at which WP Social Ninja will request and retrieve new updates from your Facebook account.

**Clear Cache:** If your latest content isn't appearing in your Facebook Feed, use this option to clear the cache. This action will refresh the feed and display the most recent data.

**Optimize Image:** This feature allows you to optimize Facebook images for your Social Ninja Feed, ensuring faster load times on your website. You can Reset your image optimization anytime by clicking on the Reset button.

TIP

Enabling the Optimize Images option has some limitations. Videos will not play directly in the feed and will redirect to the Facebook page. Additionally, for carousel posts, only the first image will be displayed.
### Troubleshooting: Pages or Accounts Not Appearing? ​

If you have successfully connected your Facebook account but your Pages or accounts are not appearing in the selection list, you may have a previously registered WP Social Ninja app in your Facebook Business Integrations.

To fix this, please remove the old app and then re-integrate WP Social Ninja by following these steps:

- Go to your Facebook **Business Integrations** settings.
- Find and **Remove** the old "WP Social Ninja" app.
- Return to this page and follow the "Enable Facebook Feed" steps again to re-authorize the connection.

TIP

**Important (Meta/Facebook Policy):** Please note that when you delete a registered app, the connected WP Social Ninja access token will be **disconnected from all sites** where it is used. This is a Meta (Facebook) policy, not an issue from our end. You will need to re-authorize the connection on every site where you use this Facebook account.That's how you connect your Facebook account with WP Social Ninja. If you have any questions about this process, please feel free to [contact us](https://wpmanageninja.com/account/dashboard/).

---

## Facebook Feed Template Styling & Connection ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/facebook-layout-styling.html](https://docs.wpsocialninja.com/guide/social-feeds/facebook-layout-styling.html)

# Facebook Feed Template Styling & Connection ​

This guide will walk you through all the options in the **Style** tab of the Facebook Feed template editor.

While the [General Settings](./facebook-customization) tab controls *what* content is shown (e.g., your source, filters, and header), the **Style** tab controls the visual design. This is where you can change all the colors, fonts, spacing, and borders to perfectly match your brand and website's look.

## 1. Feed Header ​

This section controls the complete visual design of the **Header** at the top of your feed. The header is the box that contains your main page information, like your cover photo, page name, description, and likes count.

### User Name ​

These settings control the appearance of your **Page Name** in the header.

- **Text Color:** This opens a color picker that allows you to select the exact color of your Page Name text.
- **Typography:** This opens a full set of font controls for your Page Name. You can change the **Font Family** (e.g., Arial, Roboto, etc.), **Font Size** (in pixels), **Font Weight** (e.g., Light, Regular, Bold), **Line Height**, and **Letter Spacing**.
- **Bottom Spacing:** This controls the amount of empty space (in pixels) directly below your Page Name, pushing the content (like the description) further away from it.

### Description ​

These settings control the appearance of your Page's "About" Text or biography, located in the header.

- **Text Color:** This opens a color picker to set the color of the description text.
- **Typography:** This opens the same set of font controls (Font Family, Size, Weight, etc.) specifically for your description text.
- **Bottom Spacing:** This controls the amount of empty space (in pixels) directly below the description text, pushing the "Likes" count or other elements away from it.

### Likes ​

These settings control the appearance of the **Total Likes Counter** text in the header.

- **Text Color:** This opens a color picker to set the color of the "Likes" text.
- **Typography:** This opens the full set of font controls (Font Family, Size, Weight, etc.) specifically for the "Likes" text.

### Box ​

These settings control the overall container or "box" that holds all the header elements (your profile pic, user name, description, etc.).

- **Background Color:** This allows you to set a background color for the entire header area. By default, it's usually transparent, but you could set it to white, light gray, or any brand color.
- **Padding:** This is the "breathing room" *inside* the header box. It's the empty space between the border of the box and the content (like your profile picture and text). You can set the padding (in pixels) for the **Top**, **Right**, **Bottom**, and **Left** sides individually.
- **Border Type:** This lets you choose the style of the border for the header box. You can select: - Solid
- Dotted
- Dashed
- Double
- None (to have no border)
- **Width:** This setting (which appears if you select a Border Type) lets you control the thickness of the border. You can set the thickness (in pixels) for the **Top**, **Right**, **Bottom**, and **Left** sides individually.
- **Color:** This opens a color picker to set the color of the border itself.

## 2. Content ​

This section of the Style tab controls the appearance of all the text inside each individual post card. This includes who posted it, when it was posted, and the post's main text.

### Author ​

This styles the **Author's Name** (your Page Name) on each post.

- **Text Color:** This opens a color picker to set the color of the Author's Name text.
- **Typography:** This opens a full set of font controls for the Author's Name. You can change the **Font Family**, **Font Size**, **Font Weight**, **Line Height**, and **Letter Spacing**.

### Post Date ​

This styles the **Date** (e.g., "October 30, 2025") on each post.

- **Text Color:** This opens a color picker to set the color of the date text.
- **Typography:** This opens the full set of font controls (Font Family, Size, Weight, etc.) specifically for the date.

### Post Text ​

This styles the main description, or caption, of your Facebook post.

- **Text Color:** This sets the color of the main body of your post's text.
- **Typography:** This opens the full set of font controls for the post text, allowing you to make it larger, smaller, or easier to read.
- **Link Color:** This is a special setting that controls the color of any clickable links inside your post, such as 
```
#hashtags
```

 or 
```
@mentions
```

. This helps them stand out from the rest of the text.
- **Read More Link Color:** This controls the color of the "Read More" link that appears if you have a long post (based on your settings in the General tab).

### Summary Card ​

This section styles the "link preview" box that appears when your Facebook post shares a link to another website. This box typically has a large image, a title, and a short description.

- **Domain Color:** This sets the color of the small text that shows the website's address (e.g., "wpsocialninja.com").
- **Typography (for Domain):** This controls the font settings for the domain text.
- **Bottom Spacing (for Domain):** This adds a bit of empty space (in pixels) below the domain text, pushing it away from the title.
- **Title Color:** This sets the color of the main (and largest) text in the summary card—the title of the article or page.
- **Typography (for Title):** This controls the font settings for the title.
- **Bottom Spacing (for Title):** This adds empty space (in pixels) below the title, pushing it away from the description.
- **Description Color:** This sets the color of the small snippet of text (the description) in the summary card.
- **Typography (for Description):** This controls the font settings for the description text.

## 3. Like & Share Button ​

This section styles the main "Like Page" and "Share" buttons, which you can enable in the General tab. These are the buttons that usually appear in the Header or Footer of your entire feed.

- **Text Color:** This opens a color picker to set the color of the text on the buttons (e.g., "Like Page").
- **Background Color:** This sets the main background color of the buttons themselves.
- **Typography:** This opens the full set of font controls (Font Family, Size, Weight, etc.) for the button text.
- **Padding:** This is the "breathing room" *inside* the button. It is the empty space between the button's text and its border. Increasing the padding makes the button look larger and easier to click.

## 4. Item Box ​

This is a very important section. The **Item Box** is the entire container or "card" that holds each individual post (including the author, text, image, etc.). These settings control the design of that main box.

- **Background Color:** This sets the background color for the entire post card. By default, it's usually white or transparent, but you can set it to a light gray or any other color to match your brand.
- **Padding:** This is the "breathing room" *inside* the post card. It's the empty space between the card's border and the content inside it (like the author's name and the post text). You can set the padding (in pixels) for the **Top**, **Right**, **Bottom**, and **Left** sides individually to get the spacing perfect.
- **Border Type:** This lets you choose the style of the border for the post card. You can select: - Solid
- Dotted
- Dashed
- Double
- None (to have no border)
- **Width:** This setting (which appears if you select a Border Type) lets you control the thickness of the border. You can set the thickness (in pixels) for the **Top**, **Right**, **Bottom**, and **Left** sides individually.
- **Color:** This opens a color picker to set the color of the border itself.

## Connection Settings ​

The **Connection** tab is a simple shortcut. It allows you to connect a new Facebook Page or manually add one using a Page ID and Access Token, right from within the template editor.

> Please Note: The steps to connect a page here are identical to the main Facebook connection process.

For a complete, step-by-step guide on how to use these settings, please see our main [Facebook Feed Configuration](./facebook-customization) documentation.

---

## Facebook Single Album Feed ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/facebook-single-album-feed.html](https://docs.wpsocialninja.com/guide/social-feeds/facebook-single-album-feed.html)

# Facebook Single Album Feed ​

If you want to display a Single Album page on your website, WP Social Ninja makes it simple. In this guide, we’ll walk you through the steps to add a Single Album to your site.

## Add Single Album ​

To add a Single Album, first connect your Facebook Page to WP Social Ninja. Then, click the **Add New Template** button to create a new template.

TIP

To learn how to connect your Facebook Page, follow the step-by-step instructions in this [article](./facebook-integration).From the template settings, go to the **General** section of the Facebook Template, then click on the **Source** option.

**Feed Type:** Select **Single Album** from the dropdown menu.

**Album ID/URL:** Enter the Album URL or just the Album ID. You can find the Album ID in the URL of your single album.

**Choose Page This Album Belongs To:** Pick the Facebook Page the album is linked to from the dropdown list.

**Total Feed:** Set the number of items you want to display in your Single Album template.

Now, click the **Fetch Feeds** button, and your Single Album will be loaded into the template.

You’ll also find additional settings and styling options to customize your Single Album template. Once you're done, click the **Save Template** button to save your changes.

---

## Facebook Specific Video Playlist Feed ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/facebook-specific-video-playlist-feed.html](https://docs.wpsocialninja.com/guide/social-feeds/facebook-specific-video-playlist-feed.html)

# Facebook Specific Video Playlist Feed ​

If you want to display a Specific Video Playlist on your website, WP Social Ninja makes it simple. In this guide, we’ll walk you through the steps to add a Specific Video Playlist to your site.

## Get the Playlist ID ​

To display a specific video playlist from Facebook on your site using WP Social Ninja, you'll need the playlist's ID or URL. First, go to your Facebook Page's video playlist section and open the playlist you want to add. Once it's open, copy the URL or Playlist ID from the address bar for later use.

## Add Specific Video Playlist ​

To add a Video Playlist, first connect your Facebook **Page** to WP Social Ninja. Then, click the **Add New Template** button to create a new template.

To learn how to connect your Facebook Page, follow the step-by-step instructions in this [article](./facebook-integration).

From the template settings, go to the **General** section of the Facebook Template, then click on the **Source** option.

**Feed Type:** Select **Specific Video Playlist** from the dropdown menu.

**Album ID/URL:** Enter the Playlist URL or just the Playlist ID here that you have copied earlier.

**Choose Page This Playlist Belongs To:** Pick the Facebook Page the Playlist is linked to from the dropdown list.

**Total Feed:** Set the number of items you want to display in your template.

Now, click the **Fetch Feeds** button, and your Playlist will be loaded into the template.

You’ll also find additional settings and styling options to customize your Specific Video Playlist template. Once you're done, click the **Save Template** button to save your changes.

## Videos That Can't Be Played on Your Site ​

Facebook does not allow every video to be embedded on another website. Reels, videos with certain privacy or rights settings, and some live recordings are marked as non-embeddable.

When WP Social Ninja meets one of these, it shows the video's thumbnail with a **View on Facebook** link instead of an empty player. Visitors can still get to the video in one click, and your feed does not show a broken box.

TIP

You can change the wording of that link under **Settings → Translation**, if "View on Facebook" doesn't suit your site's tone.If you have any further questions or need assistance, please don’t hesitate to contact [us](https://wpmanageninja.com/support-tickets/).

---

## Instagram API Error Message Reference ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/instagram-api-errors.html](https://docs.wpsocialninja.com/guide/social-feeds/instagram-api-errors.html)

# Instagram API Error Message Reference ​

This possible **API Error** could happen when an API error arises on Instagram. We have tried to discuss the possible reasons and solutions here.

## API error 803: (#803) Some of the aliases you requested do not exist: xxxxxxxxxxxxxxx ​

This error occurs when the Account ID you are using does not match any account on Instagram. One possible reason for this could be recent changes made to your Instagram account, such as changing the password, altering privacy settings, or modifying app permissions.

### Solution: ​

To address this issue, please check your Instagram account for any recent changes and verify the accuracy of the Account ID. If needed, update the Account ID to match the correct Instagram account.

## API error 190: Error validating access token ​

If you encounter this error with your access token, it might be due to a recent password change on your connected Instagram account or other security-related changes. Additionally, this error can occur when the app is removed from the account's business integration.

### Solution: ​

To resolve the error, you can follow these steps:

1. Remove your Instagram account from the **Dashboard > Template**
2. Reconnect your account to the plugin

## Connection Error: http_request_failed – cURL error 7: Failed to connect to api.instagram.com port 443: Connection refused ​

This error occurs when some hosts have restrictions or security settings that prevent remote requests to other websites, including the Instagram API.

### Solution: ​

To resolve this issue, you should contact your host provider and request that they lift the restrictions or modify the security settings to allow connections to the Instagram API.

## Connection Error: http_request_failed – cURL error 28: Resolving timed out after 10000 milliseconds ​

This error indicates that your server may have restrictions on connecting to the Instagram API, and it may be unable to resolve the connection within the allotted time.

### Solution: ​

If you encounter this error, try waiting for a few moments and then attempt to connect again. If the problem persists, contact your hosting provider and inform them about the error you are experiencing when attempting to access the Instagram API.

## API Error: Action Required within 7 Days ​

If the Instagram account is not reconnected within 7 days, all Instagram data associated with your website for this specific account (ID:#) will be automatically deleted. This is in compliance with Facebook data privacy rules.

The possible reason could be admin deauthorized our Facebook app, resulting in the revocation of all permissions, or the Access Token of the connected account(s) to the plugin is no longer valid.

### Solution: ​

To resolve this issue, reconnect your [account](./instagram-configuration).

## API Error: Unexpected Error Occurred ​

When this error occurs, you will see 'An unexpected error has occurred with the API.'

### Solution: ​

There might be a temporary issue with Instagram/Facebook's API. Please follow these steps:

- **Clear Cache:**
- Click on Settings
- Navigate to Feeds Platform> Instagram Settings
- Click "Clear Feed Caches"
- If the issue persists, wait for a few hours and try again. It could be a temporary problem that resolves on its own

We apologize for any inconvenience caused. If you have any questions or require further assistance, please don't hesitate to contact our support team.

---

## Instagram Business Basic ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/instagram-business-basic.html](https://docs.wpsocialninja.com/guide/social-feeds/instagram-business-basic.html)

# Instagram Business Basic ​

As of December 4th, 2024, Instagram no longer supports the [Basic Display API](https://developers.facebook.com/blog/post/2024/09/04/update-on-instagram-basic-display-api/) for Personal Accounts. To continue displaying Instagram Feeds on your WordPress Site, you need to add either your Instagram Business Basic or Business Advanced account.

This article will guide you through the overall details of what you need to know about Instagram Business Basic and how to get started.

## Instagram Business Account ​

To keep your **Instagram Feed** working on your **WordPress site**, **WP Social Ninja** lets you switch from a **Personal Account** and connect to a **Business Account** with **Two Options**. These are:

- **Business Basic Account**: Choosing this connection is ideal for a simple setup that shows posts from a single Instagram account.
- **Business Advanced Account**: Choosing this connection is ideal if you want additional features like hashtags and mention feeds or if you manage multiple Instagram accounts.

### Key Differences of Business Basic and Advanced ​

Now, to avoid confusion in choosing the right connection type that suits your needs and keep the service running smoothly, learn the key differences between **Business Basic** and **Business Advanced** accounts.

**By understanding the following key differences, select the perfect connection for your site:**

#### A. Based on the Connection Method ​

**Business Basic** connects directly through Instagram using your username and password.

On the other hand, **Business Advanced** uses Facebook to establish the connection, allowing more features (requires a Facebook page).

#### B. Based on Displayed Content ​

**Business Basic** displays only basic information like profile data, avatars, and posts. It does not support **Hashtags** or **Mention** feeds.

However, the features like displaying **Hashtags**, make the **Business Advanced** perfect for users who want to show content beyond just their profile posts.

#### C. Based on the Number of Accounts ​

With **Business Basic**, you can connect only a **Single Instagram Account**, while with **Business Advanced**, you can connect **Multiple Instagram Accounts**.

## Convert Personal Profile to Business Account ​

Once you decide which business account to switch to from your personal Instagram account, it's time to convert your **Personal Account** into a **Business Account**, as this is required to ensure proper functioning with our plugin.

Plus, you can choose either a **Business** or **Creator** account based on your needs. Both options work with our plugin.

TIP

To learn the detailed process of how to convert a Personal Instagram Account into a Business Account, read this [Documentation](./convert-your-instagram-personal-account-into-professional-account).If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Instagram Configuration ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/instagram-configuration.html](https://docs.wpsocialninja.com/guide/social-feeds/instagram-configuration.html)

# Instagram Configuration ​

Show your Instagram Business Account feeds on your website with WP Social Ninja. Keep your audience engaged and grow your business by showcasing social media updates. Connecting your Instagram Business Account is quick and easy, requiring just a few clicks.

Instagram connects through WP Social Ninja's [secure connection bridge](../getting-started/connecting-your-accounts), so you can link your account in just a few clicks — no developer app to create. In this guide, we'll walk you through connecting both your Instagram Business Basic and Advanced accounts, plus a manual option for advanced users.

## Instagram Configuration ​

From your WordPress dashboard, navigate to **WP Social Ninja** and click on [Platforms](../getting-started/all-platforms-of-wp-social-ninja) in the navbar. Here, you'll find **Instagram** click on the **Settings** icon to access the configuration settings.

A popup will appear, prompting you to select your Instagram **Account Type**. In the **Account Types** dropdown section, you’ll see three options:

- **Business Basic**
- **Business Advanced**
- **Account Manually**

TIP

To understand the differences between a **Business Basic Account** and a **Business Advanced Account**, read [this article](./instagram-business-basic) for more details.The **Account Manually** option allows you to generate an API token from your Instagram business account and use it to connect your business account with WP Social Ninja.

## Connect Your Business Basic Account ​

To connect your **Business Basic Account** with WP Social Ninja, select the **Business Basic** option and click the **Connect with Instagram** button.

You’ll be redirected to **Instagram**, where you’ll first need to log in to your **Business Account**. After logging in, you’ll see the **Access and Permissions** screen for connecting your account with **WP Social Ninja**. Click the **Allow** button to grant the necessary permissions.

Once connected, your **Instagram Business Account** will be added to **WP Social Ninja**.

- To add another account, click the **Connect More Account** button.
- To create or modify your **Instagram Platform Template**, click the **Add New Template** button. Learn more about [Instagram feed template styling](./instagram-feed-template-styling-connection).

## Connect Your Business Advanced Account ​

To connect your **Instagram Business Account** with **WP Social Ninja**, follow the same steps as before and select **Business Advanced**.

Then, click on the **Connect with Facebook** button.

You will be redirected to **Facebook**, where you'll first need to log in to your **Facebook Account**. After logging in, you'll be prompted with the **Access and Permissions** screen to connect your account with **WP Social Ninja**.

Then, click the **Continue as** button to grant the necessary permissions.

After that, your Business Advanced Account will be added.

## Connect Your Account Manually (Advanced) ​

Prefer to manage your own credentials? You can still connect Instagram with a manually generated access token. Most users won't need this — the one-click **Business Basic** or **Business Advanced** methods above are simpler — but it remains available for advanced setups.

To manually connect your **Business Account**, select the **Account Manually** option from the dropdown menu. You'll then need to enter your **Access Token** and **Instagram User ID**.

To obtain these credentials, click on the **Access Token Generator**.

You will be redirected to the **Access Token Generator** page. From there, select **Instagram Feed** and choose your **Account Type** (Business Basic or Advanced).

Next, you'll be asked to grant the necessary permissions. Click the **Allow** button to proceed.

Once you've granted the permissions, you'll receive your **Access Token** and **User ID**. Be sure to copy them for later use.

Paste the **Access Token** and **User ID** into the respective fields in the WP Social Ninja configuration popup, then click on the **Connect This Account** button.

Your account will now be successfully connected to **WP Social Ninja**. If you want to create or modify your **Instagram Platform Template**, click the **Add New Template** button.

### Troubleshooting: Instagram Accounts Not Appearing? ​

If you have successfully connected your Instagram Business Account (especially using the **Business Advanced** method) but your accounts are not appearing in the selection list, you may have a previously registered WP Social Ninja app in your Facebook Business Integrations.

To fix this, please remove the old app and then re-integrate WP Social Ninja by following these steps:

- Go to your Facebook [Business Integrations](https://www.facebook.com/settings?tab=business_tools) settings.
- Find and **Remove** the old "WP Social Ninja" app.
- Return to this page and follow the connection steps again to re-authorize the connection.

**Important (Meta/Facebook Policy):** Please note that when you delete a registered app, the connected WP Social Ninja access token will be **disconnected from all sites** where it is used. This is a Meta (Facebook) policy, not an issue from our end. You will need to re-authorize the connection on every site where you use this Facebook account.

If you have any further questions about this article, feel free to reach out to our [support team](https://wpmanageninja.com/support-tickets).

---

## Instagram Feed Issue Email Report ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/instagram-email-report.html](https://docs.wpsocialninja.com/guide/social-feeds/instagram-email-report.html)

# Instagram Feed Issue Email Report ​

**Feed Issue Email Report** is a valuable feature that ensures you stay informed about critical issues in your **Instagram Feed** through email.

Once **Feed Issue Email Reports** are enabled, our system will actively monitor your **Instagram Feed** for any critical issues. If such an issue is detected, you will receive an email on the specified day of the week you have been selected. The email will alert you about the nature of the problem and what action is need to take.

During the period when the issue remains unresolved, our system will temporarily replace your **Instagram Feed** with a cached version. This ensures that your visitors still see a functioning feed even when an issue is present. However, it is essential to address the problem within seven days to maintain smooth feed functionality.

## Enabling Feed Issue Email Reports ​

Access the **Settings** of your **WP Social Ninja** dashboard. Now go to **Advanced Settings** and you will find the "**Feed Issue Email Report**" feature toggle to enable it.

Sending Day: Specify the desired day of the week when you wish to receive the issue report via email.

Provide Email Address: Enter the email address where you want to receive the issue reports.

After setting up the email day and providing your email address, don't forget to click on the "**Save Settings**" button to ensure your preferences are saved.

*Feed Issue Email Report*

## SMTP Plugin Configuration ​

To ensure that the email notifications reach your inbox successfully, it's important to configure a third-party SMTP plugin on your WordPress site. [Fluent SMTP](https://fluentsmtp.com/) is an example of a reliable SMTP plugin that can handle email delivery efficiently.

## Dashboard Notifications ​

You will also receive a notification on your **WP Social Ninja** dashboard if any issues arise in your **Instagram Feed**. This provides you with an easy way to stay informed about the status of your feed at a glance.

### Dashboard Notifications ​

We hope this documentation has provided you with a clear understanding of the **Feed Issue Email Report** feature. By enabling this functionality, you can proactively address critical issues and maintain an optimal Instagram Feed experience for your audience.

---

## Instagram Feed Settings ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/instagram-feed-settings.html](https://docs.wpsocialninja.com/guide/social-feeds/instagram-feed-settings.html)

# Instagram Feed Settings ​

The Instagram Global Settings feature allows you to control the default caching and image optimization settings for all of your Instagram feeds at once. These settings are located in the main plugin dashboard, not in the individual template editor.

## Access the Feed Settings ​

To find these settings, from your WordPress dashboard, navigate to **WP Social Ninja → Settings**. Click on the **Feed Platforms** tab. Then, select **Instagram Settings**. Here, you will find the Feed Settings.

Here is a breakdown of each setting available in this panel.

### Check New Feeds Every ​

This dropdown controls the default auto-sync schedule. It determines how often WP Social Ninja will check Instagram for new posts (e.g., 6 Hours, 1 Day, 1 Week). Setting a longer interval can improve your site's loading speed.

### Clear Cache ​

This button will immediately clear all stored Instagram feed cache from your website.

> Use Case: Click this button if your feeds are not showing new posts and you want to force the plugin to fetch the latest content from Instagram immediately.

### Optimize Images ​

This toggle enables or disables image optimization for your Instagram feeds. This option will generate and store optimized images in multiple sizes using your WordPress local storage for improved performance.

NOTE

To configure GDPR Compliance and Image Format settings, go to **Advanced Settings**.If you want to know more about GDPR Compailence, read this [Documentation](/guide/social-feeds/instagram-gdpr-compliance).

### Reset Local Images ​

This button will clear all locally stored images associated with the Instagram platform.

> Use Case: You should click this if your images are not updating correctly or if you want to force the plugin to delete all stored images and fetch new ones from Instagram.

If you have any questions or need further assistance, feel free to reach out to our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpsnsite&utm_medium=popup&utm_campaign=spring#/).

---

## Instagram Feed Template Styling & Connection ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/instagram-feed-template-styling-connection.html](https://docs.wpsocialninja.com/guide/social-feeds/instagram-feed-template-styling-connection.html)

# Instagram Feed Template Styling & Connection ​

This guide will walk you through all the options in the **Style** and **Connection** tabs of the Instagram Feed template editor.

While the **General Settings** tab controls *what* content is shown (e.g., your source, filters, and header), the **Style** tab controls the visual design. This is where you can change all the colors, fonts, spacing, and borders to perfectly match your brand and website's look. Learn more about [Instagram configuration](./instagram-configuration).

## Style Settings ​

The **Style** tab is organized into four sections, each controlling a different part of your feed.

### 1. Header ​

This section controls the complete visual design of the **Header** at the top of your feed. The header is the box that contains your main profile information, like your name, bio, and follower count.

**User Name**

These settings control the appearance of your Instagram Username (e.g., 
```
@wpsocialninja
```

) in the header.

- **Text Color:** This opens a color picker that allows you to select the exact color of your username.
- **Typography:** This opens a full set of font controls for your username. You can change the **Font Family** (e.g., Arial, Roboto, etc.), **Font Size** (in pixels), **Font Weight** (e.g., Light, Regular, Bold), **Line Height**, and **Letter Spacing**.
- **Bottom Spacing:** This controls the amount of empty space (in pixels) directly below your username, pushing the next element (like your Statistics) further away from it.

**Statistics**

These settings control the appearance of your profile's statistics: your **Posts**, **Followers**, and **Following** counts.

- **Number Color:** This sets the color for the number (e.g., the "1,250" in "1,250 Followers").
- **Text Color:** This sets the color for the label (e.g., the word "Followers").
- **Typography:** This opens the full set of font controls (Font Family, Size, Weight, etc.) that will apply to both the number and the text.
- **Spacing Between Item:** This slider controls the amount of empty space (in pixels) between each statistic item (e.g., the space between "Posts" and "Followers").

**Full Name**

These settings control the appearance of your Profile's **Full Name** (the name you set in your Instagram bio).

- **Text Color:** This opens a color picker to set the color of your Full Name text.
- **Typography:** This opens the full set of font controls (Font Family, Size, Weight, etc.) for your Full Name.

**Description**

These settings control the appearance of your **Instagram Bio** (the main description text) in the header.

- **Text Color:** This opens a color picker to set the color of your bio text.
- **Typography:** This opens the full set of font controls for your bio, allowing you to make it larger, smaller, or easier to read.

**Follow Button**

This styles the "Follow" button that you can enable in the General tab.

- **Text Color:** This opens a color picker to set the color of the text inside the button (e.g., "Follow Us").
- **Button Background Color:** This sets the main background color of the button itself.
- **Typography:** This opens the full set of font controls (Font Family, Size, Weight, etc.) for the button text.

**Box**

These settings control the overall container or "box" that holds all the header elements (your profile pic, username, bio, etc.).

- **Background Color:** This allows you to set a background color for the entire header area.
- **Padding:** This is the "breathing room" *inside* the header box. It's the empty space between the border of the box and the content. You can set the padding (in pixels) for the **Top**, **Right**, **Bottom**, and **Left** sides individually.
- **Border Type:** This lets you choose the style of the border for the header box (e.g., **Solid**, **Dotted**, **Dashed**, or **None**).

### 2. Content ​

This section styles the text caption (the description) that appears with each individual post in your feed.

- **Hashtag Color:** This is a special setting that controls the color of any clickable 
```
#hashtags
```

 inside your post's caption. This helps them stand out from the rest of the text.
- **Text Color:** This sets the color of the main body of your caption.
- **Typography:** This opens the full set of font controls for the caption text, allowing you to make it larger, smaller, or easier to read.
- **Padding:** This controls the padding around the text caption only, letting you adjust the space between the caption and the photo above it or the statistics below it.

### 3. Statistics ​

This section styles the **Likes** and **Comments** counts that appear on each individual post (not the header). You must have these enabled in the General tab to see them.

- **Icon Color:** This sets the color of the small "heart" (like) and "speech bubble" (comment) icons.
- **Text Color:** This sets the color of the numbers next to the icons (e.g., the "150" in "150 Likes").
- **Typography:** This opens the full set of font controls (Font Family, Size, Weight, etc.) for the statistics text.
- **Padding:** This controls the padding around the statistics block, letting you adjust the space between it and the content above or the edge of the post.

### 4. Item Box ​

This is a very important section. The **Item Box** is the entire container or "card" that holds each individual post (including the photo, caption, and statistics). These settings control the design of that main box.

- **Background Color:** This sets the background color for the entire post card. By default, it's usually white or transparent, but you can set it to a light gray or any other color to match your brand.
- **Padding:** This is the "breathing room" *inside* the post card. It's the empty space between the card's border and the content inside it (like the photo and text). You can set the padding (in pixels) for the **Top**, **Right**, **Bottom**, and **Left** sides individually to get the spacing perfect.
- **Border Type:** This lets you choose the style of the border for the post card (e.g., **Solid**, **Dotted**, **Dashed**, or **None**).
- **Width:** This setting (which appears if you select a Border Type) lets you control the thickness of the border. You can set the thickness (in pixels) for the **Top**, **Right**, **Bottom**, and **Left** sides individually.
- **Color:** This opens a color picker to set the color of the border itself.

## Connection Settings ​

The **Connection** tab is a simple shortcut. It allows you to connect a new Instagram Account right from within the template editor.

This is very useful if you are building a template and realize you want to include an account you haven't connected yet, or if you want to add multiple accounts to a single feed.

> Please Note: The steps to connect an account here are identical to the main Instagram connection process.

For a complete, step-by-step guide on how to use these settings, please see our main [Instagram Configuration](/guide/social-feeds/instagram-configuration) documentation.

---

## Instagram Feed GDPR Compliance ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/instagram-gdpr-compliance.html](https://docs.wpsocialninja.com/guide/social-feeds/instagram-gdpr-compliance.html)

# Instagram Feed GDPR Compliance ​

WP Social Ninja Instagram Feed allows you to fetch data from your Instagram account and display it on your website. To ensure compliance with the [General Data Protection Regulation (GDPR)](https://wpsocialninja.com/wp-social-ninja-gdpr-compliance/), we have implemented specific settings and features to safeguard your data and provide transparency regarding its transfer and storage.

## GDPR Settings ​

To enable the **GDPR** settings, go to **WP Social Ninja** dashboard then click on "**Settings**" icon button from the navbar. Select "**Advance Settings**" and you will find out the **GDPR Compliance** settings. From here enable the GDPR settings, select **Yes** from the dropdown menu.

### Instagram GDPR Compliance ​

Additionally, please activate **Optimize Images** for GDPR compliance. GDPR compliance is not friendly with third-party media sources. Enabling this feature will store your images locally which will be GDPR friendly.

To activate go to **Settings > Feeds Platforms > Instagram Settings** here you will find out the optimize images enable option like the below screenshot.

### Optimize Images ​

By enabling the GDPR option, some features of our plugin will be limited. These changes are designed to align with GDPR requirements and protect your data privacy. The following modifications will occur when you enable the GDPR option:

### Images ​

Images will no longer be loaded from Instagram's Content Delivery Network (CDN). Instead, only local images will be displayed in the feed.

### Videos ​

Videos will be redirected to your Instagram posts, ensuring that no video data is stored or processed through our plugin.

### Carousel Posts ​

In the lightbox view, only the first image of carousel posts will be shown.

With our GDPR-compliant settings, you can use WP Social Ninja Instagram Feed with confidence, knowing that your data privacy is protected.

If you have any questions or concerns regarding our GDPR implementation or data handling practices, please don't hesitate to reach out to our support team.

---

## Customiz Instagram Feed Template: General Settings ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/instagram-setup.html](https://docs.wpsocialninja.com/guide/social-feeds/instagram-setup.html)

# Customiz Instagram Feed Template: General Settings ​

This is your control center where you can design your Instagram feed to perfectly match your website's style and needs.

When you first open the editor, you'll see three main tabs at the top:

- **General (This Guide):** This tab controls *what* content is shown (your source, filters, text) and *how* the feed functions (layouts, buttons, pagination).
- **Style:** This tab controls the visual design—all the colors, fonts, borders, and spacing.
- **Connection:** This tab is for managing the API connection for this specific template.

This guide will walk you through every single setting in the **General** tab, one by one.

**What can you do with these settings?**

- You could create a feed of only your most recent posts, sorted with the newest first.
- You could create a "portfolio" of your work using a Masonry layout and hiding all the text captions, likes, and comments.
- You could even create a special feed that only shows posts from a public Hashtag (like for a contest or event), displaying them in a sliding Carousel.

## General Settings ​

Let's explore each section in the order you'll find it.

### 1. Accounts ​

This is the most important step. The Accounts settings tell WP Social Ninja from where to get the Instagram posts.

- **Feed Type:** This dropdown menu lets you choose the kind of feed you want to create. - **User Account Feed:** This is the most common choice. It will display the photos and videos from your own Instagram profile that you've connected to the plugin.
- **Hashtag Feed:** This is a powerful feature that lets you display public posts from all over Instagram that use a specific hashtag. For example, you could type in 
```
#MyAwesomeProduct
```

 to show photos from all your customers.
- **Select Account(s):** If you've connected more than one Instagram account to WP Social Ninja, this dropdown is where you'll pick the one you want to use for this template.
- **Fetch Feeds:** This is a refresh button. If you've just made a new post on Instagram and want to see it in the preview right away, click this button to force the plugin to check for new content.

### 2. Layout ​

This section controls the visual structure and arrangement of your posts.

- **Layout Type:** This is the foundational structure of your feed. - **Grid:** This creates a clean, organized, multi-column grid (like the standard Instagram profile). All post boxes are forced to be the same height, which creates a very neat and symmetrical look.
- **Carousel:** This displays your posts in a horizontal slider. Visitors can click or swipe through your posts one by one. This is perfect for saving space on a homepage.
- **Masonry:** This is a "Pinterest-style" multi-column grid. Posts will have different heights based on their content (e.g., if you show the text caption). This creates a modern, stylish look that fits posts together like bricks.
- **Highlights:** A compact row of circular thumbnails, styled after Instagram's own story highlights. Good for a slim strip of recent posts near the top of a page.
- **Template:** These are pre-designed visual "skins" for your feed. Each one changes the styling of the post boxes, fonts, and layout: - **Classic Grid:** Clean image tiles, closest to how your profile looks on Instagram.
- **Caption Card:** Each post sits in a card with its caption printed underneath the image.
- **Overlay Card:** *(Pro)* The caption and engagement counts appear over the image when a visitor hovers or tabs onto it, so the grid stays purely visual until they interact.
- **Pin Card:** *(Pro)* A Pinterest-style card treatment that works especially well with the Masonry layout.
- **Number of Columns:** This is a crucial setting for making your feed look good on all devices. You can set the number of columns you want to show on **Desktops**, **Tablets**, and **Mobile** phones. - *Example: You might choose 4 columns for Desktop, 3 for Tablet, and 2 for Mobile. This ensures your feed always looks great and is easy to read.*
- **Columns Gap:** Pick how much space appears between each post from the dropdown, or leave it at **Default**.

Only three template skins show at first (with a **See All** link for the rest); expand it to see all four, including **Pin Card**.

#### What the Pro Layouts Look Like ​

- **Overlay Card:** The **Overlay Card** layout keeps the focus on your images by displaying posts in a clean visual grid. The caption and engagement information remain hidden until a visitor hovers over an image. When the visitor moves the cursor over a post, the additional information appears as an overlay.

This layout is a good choice when you want your feed to look simple and image focused.

- **Pin Card:** The **Pin Card** layout displays each social media post inside an individual card. The image appears at the top, while the post caption is shown below it. The card automatically adjusts its height based on the amount of content in the caption.

This layout works especially well with the Masonry layout, where cards can have different heights while maintaining an organized appearance.

- **Highlights:** The **Highlights** layout displays your social media posts as a horizontal row of circular thumbnails instead of the standard grid. This layout is useful when you want to show multiple posts in a compact space without taking up much room on the page.

NOTE

The **Highlights** layout does not appear correctly in the editor preview. The preview will continue to show the regular grid layout. After saving your template, open the page on your website to see the actual circular thumbnail layout.
### 3. Filters ​

Filters are how you refine your feed to exclude content you don't want or only show content you do.

- **Number of Feeds to Display:** This is the number of posts a visitor will see when the page first loads. (More posts can be loaded later using the "Pagination" settings).
- **Post Order:** This lets you sort your posts. For example: - **Newest:** Shows newest posts first (this is the most common setting).
- **Oldest:** Shows oldest posts first.
- **Random:** Shuffles the posts in a new order every time the page loads.
- **Show/Hide Posts with Keywords/Hashtags:** This is a very powerful filter. You can enter a comma-separated list of words or hashtags to either **only show** posts with those words, or **hide** posts with those words. - *Example (Hide): You run a lot of giveaways. You could enter #giveaway, #contest, #ad into the "Hide" field to automatically hide all those posts from your website feed.*
- **Hide Specific Feeds:** This allows you to manually hide one or more specific posts by pasting in their unique Post ID (a long string of numbers you can get from the post's URL).

### 4. Post ​

This section controls the content and links inside each individual post card.

- **Image Aspect Ratio:** This setting controls the shape of your images in the feed. You can choose from options like **Original**, **Square (1:1)**, **Landscape (16:9)**, or **Portrait (4:5)**.
- **Open Post In:** This dropdown menu determines what happens when a visitor clicks on an individual post. - **None:** The post is not clickable.
- **Instagram:** The visitor is taken to the original post on Instagram.com.
- **Popup / Lightbox:** The post opens in a pop-up window on your own website, so the visitor never leaves your site.
- **Display Caption:** This is a simple On/Off toggle. When **On**, it will show the text caption (the description) that you wrote for that post on Instagram. When **Off**, only the image will be shown.
- **Trim Caption Words:** This feature lets you set a maximum word count for your post captions. If a caption is longer than the number you set (e.g., 30 words), it will be automatically shortened and a "Read More..." link will appear.
- **Display Likes Count:** This is an On/Off toggle to show or hide the total number of "likes" for each post.
- **Display Comments Count:** This is an On/Off toggle to show or hide the total number of comments for each post.

### 5. Shoppable Feed Settings ​

The Shoppable Feed section turns your Instagram feed into a powerful e-commerce tool. It allows you to add clickable links to your posts, sending visitors directly to your product pages. This is one of the best ways to turn your social proof into direct sales.

- **Enable Shoppable Feed:** This is the main On/Off toggle for the entire feature. You must turn this **On** to activate all other shoppable settings. - **How it works:** When enabled, you can add custom links to your Instagram posts. When a visitor clicks the post, they will be taken to the product page you set, rather than the default "Popup / Lightbox" or "Instagram" action you set in the **Post** section.
- **Include Shoppable by Hashtags:** This enables a powerful, automatic way to create shoppable links. When this is toggled **On**, the plugin will scan your post captions for specific hashtags that you have pre-configured. - **Use Case:** Imagine you have a WooCommerce store. Instead of manually adding a link to every post, you can set up a rule that says: "Any time a post has the hashtag 
```
#blueshirt25
```

, automatically link it to my 'Blue T-Shirt' product page." This is a huge time-saver!
- **Configure Shoppable by Hashtags:** This link is where you set up the "rules" for the feature above. This will likely take you to a Global Settings page in WP Social Ninja. - **How it works:** On this configuration page, you will create your list of hashtag-to-URL mappings.
- **Example:**- Hashtag: 
```
#blueshirt25
```

 → URL: 
```
yourstore.com/products/blue-shirt
```
- Hashtag: 
```
#redhat01
```

 → URL: 
```
yourstore.com/products/red-hat
```
- Once you set this up, the "Include Shoppable by Hashtags" toggle will use these rules to automatically create your links.
- **Display Shoppable Icon:** This is a simple visual toggle. When turned **On**, a small "shopping bag" icon will appear over any post in your feed that has a shoppable link attached to it.

### 6. Header ​

This section controls the large banner at the top of your entire feed, which displays your main Instagram profile information.

- **Display Header:** This is the master on/off switch for the entire header section. Toggle it off if you just want to show the posts and nothing else.
- **Account to Display:** If your feed is showing posts from multiple accounts, this lets you choose which one account's info to show in the header.
- **Header Layout:** Choose how much profile information the header shows. - **Classic:** The full profile block: photo, username, bio, and your post and follower counts.
- **Minimal:** A compact single row with just your profile photo and username. Useful in a sidebar or anywhere a full profile block would take up too much room.
- **Display Toggles:** These let you show or hide the different parts of your profile. This is great for creating a "mini-profile" on your website. - **Display Profile Photo:** Display your profile photo in the feed
- **Display Username** (Your @username)
- **Display Full Name:** Show your full name in the field
- **Display Bio Text** (Your Instagram profile biography)
- **Display Posts Count** (Total posts you've made)
- **Display Followers Count** (How many followers you have)
- **Custom Profile Photo:** Upload a custom image to use as your profile photo in the feed header.
- **Custom Bio Text:** Write custom text to use as your bio in the feed header.

### 7. Follow Button ​

This adds a "Follow" call-to-action button to your feed, helping you get more Instagram followers directly from your website visitors.

- **Display Follow Button:** Toggles the button on or off.
- **Follow Button Position:** You can place the button in the **Header** (at the top of the feed) or the **Footer** (at the bottom, after all the posts).
- **Button Text:** You can customize the text on the button. For example, instead of "Follow," you could change it to "Follow Us on Instagram."

### 8. Pagination ​

Pagination controls what happens when a visitor gets to the bottom of the initial set of posts.

- **Pagination Type:**- **None:** The feed will only show the "Number of Feeds to Display" (from the **Filters** section) and nothing else. There will be no way to load more posts.
- **Load More:** This will add a button at the bottom of your feed. When clicked, it will load the next set of posts. This is the most popular and user-friendly option.
- **Load More Button Text:** You can change the text from "Load More" to something like "See More Posts."
- **Feeds Per Page:** This is very important. This number controls how many *new* posts are loaded each time the "Load More" button is clicked. - **Example:**
- You set **Number of Feeds to Display** (in Filters) to **9**.
- You set **Feeds Per Page** (here) to **3**.
- Your page loads, and visitors see **9** posts.
- They click "Load More."

---

## Instagram Shoppable Feed ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/instagram-shoppable-feed.html](https://docs.wpsocialninja.com/guide/social-feeds/instagram-shoppable-feed.html)

# Instagram Shoppable Feed ​

This guide explains how to use one of WP Social Ninja's most powerful features: the **Shoppable Feed**. This tool turns your Instagram feed into an interactive, shoppable gallery, allowing you to link posts directly to your product pages.

This helps visitors go from "I like that photo" to "I'm buying that product" in just a few clicks.

> Use Case: Imagine a customer sees a photo of your new blue t-shirt on your website's feed. They click a "shopping bag" icon on the post, then click a "Buy Now" button that takes them straight to the product page. This feature turns your social media posts into a direct sales channel.

You can add product links in two ways:

1. **Manual Method:** Add a unique link to each post, one by one. This gives you full control.
2. **Automatic Method:** Set up rules to automatically link posts that contain a specific hashtag. This is a huge time-saver.

## Set Up Your Shoppable Feed ​

You can find all these settings in the **General** tab when you are editing your Instagram Feed template.

### Step 1. Enable the Main Shoppable Feed ​

First, you must turn on the main **Enable Shoppable Feed** toggle. This activates the feature for this template.

Once you turn this on, you will see a new **Add** button appear on every post in your feed preview. This button is how you'll add links manually.

### Step 2. Add Links Manually (Method 1) ​

This is the best method for adding a specific link to a specific post.

1. In the live preview, click the **Add** button on the post you want to make shoppable.
2. The "Add Promotional URL" pop-up will appear.
3. Click the **Select Source** dropdown. You have two choices: - **Posts:** Link the Instagram post to a WordPress blog post.
- **Pages:** Link directly to a specific page on your site (for example, “Shop” or “Sale”).
- **Products:** Connect the post to a product page so customers can buy directly.
- **Custom URL:** Paste any external link — like an affiliate product, Etsy listing, or landing page.
4. In the **Button text** field, type what you want the button to say (e.g., "Buy Now," "Shop This Look," or "Learn More").
5. Click **Apply**. Your post is now shoppable.

### Step 3. Add Links Automatically (Method 2) ​

This method saves you a ton of time by using hashtags to create links.

1. Turn on the **Include Shoppable by Hashtags** toggle.
2. Click the **Configure Shoppable by Hashtags** link. This will open your main settings page for creating your "hashtag rules."
3. On this page, you can create rules that connect a hashtag to a link.

**Example Rule:**

- **Hashtag:** 
```
#bluehat25
```
- **Link:** 
```
yourstore.com/products/blue-hat
```

1. Now, whenever you publish a post on Instagram with the 
```
#bluehat25
```

 hashtag, WP Social Ninja will automatically add the correct product link to that post on your website.

INFO

**Note:** You can use both methods at the same time. If you add a link manually to a post, it will always override any automatic hashtag link for that same post.
### Step 4. Display the Shoppable Icon ​

Finally, turn on the **Display Shoppable Icon** toggle.

This adds a small "shopping bag" icon to every post that has a product link. We highly recommend this, as it gives your customers a clear visual sign that the post is clickable and the item is for sale.

---

## How to Reauthorize Your Facebook & Instagram Connection ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/reauthorize-instagram-facebook.html](https://docs.wpsocialninja.com/guide/social-feeds/reauthorize-instagram-facebook.html)

# How to Reauthorize Your Facebook & Instagram Connection ​

It is sometimes necessary to re-establish the connection between WP Social Ninja and your Facebook or Instagram accounts. Permissions can expire over time, or they can be interrupted by a password change or a Facebook security update.

This guide provides the official "reset" process. It will walk you through safely removing the existing app integration from your Facebook account settings and then reconnecting it in WP Social Ninja to establish a fresh, fully authorized connection.

## Step 1: Log in to Facebook ​

First, log in to the personal Facebook account that is an admin of your Facebook Page and your connected Instagram Business Profile. This must be the same account you used to make the original connection.

## Step 2: Find Your Business Integrations ​

This is the most important step. You need to find the settings page where Facebook manages connected apps.

First, click on your profile picture in the top-right corner of the Facebook screen. From the dropdown menu, select **Settings & privacy** options. On the next menu, click on **Settings**.

A new settings menu will appear on the left side of the screen. Scroll down until you find the "Your activity and permissions" section. Click on **Business Integrations**.

## Step 3: Remove the WP Social Ninja App ​

You will now see a list of all the apps and services connected to your Facebook account.

Find "**WP Social Ninja**" (it may also be listed as just "**Social Ninja**") in the list. Click the "**Remove**" button next to it. Facebook will show a pop-up to confirm. Click "**Remove**" again.

## Step 4: Reconnect the App in WP Social Ninja ​

Now that the old, broken connection is gone, you can make a fresh one.

1. Go back to your WordPress dashboard.
2. Navigate to **WP Social Ninja → Platforms** (or wherever you manage your Facebook/Instagram connection).
3. Click the "**Connect**" or "**Continue with Facebook**" button to add your account again.
4. A Facebook pop-up will appear. Follow the on-screen steps, making sure to grant all requested permissions as if you were connecting for the first time. Check [this documentation](/guide/social-feeds/facebook-integration) for details on connecting the app in WP Social Ninja.

That's it! Your account is now reauthorized with a fresh connection, and your feeds should begin to update.

---

## TikTok Feed Activation ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/tiktok-feed-activation.html](https://docs.wpsocialninja.com/guide/social-feeds/tiktok-feed-activation.html)

# TikTok Feed Activation ​

To activate the TikTok field you need to install and activate **Custom Feed for TikTok** WordPress Plugin. You will get this Plugin in the WordPress plugin inventory. Also, you can easily install and activate this from the WP Social Ninja. Let's show you the process of how you can enable the TikTok feed.

## Installing Custom Feed for TikTok Plugin ​

Go to the **Platforms** from the WP Social Ninja and here you will find the TikTok. Click on the Setting icon button of the TikTok Feeds.

If your site doesn’t contain the **Custom Feed for TikTok** Plugin then here a pop-up will come with the message and a call to action button to install the **Custom Feed for TikTok**. From here you can install the Plugin in *one click*.

After installing the **Custom Feed for Tiktok** plugin, your TikTok platform in WP Social Ninja will be enabled. Now you will get another pop-up for connecting your TikTok account — just click **Continue with TikTok** to authorize the connection.

That's it! Your TikTok Platform is activated now just configure the TikTok platform and you're ready to set the template for your TikTok Feed.

---

## TikTok Feed Configuration ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/tiktok-feed-configuration.html](https://docs.wpsocialninja.com/guide/social-feeds/tiktok-feed-configuration.html)

# TikTok Feed Configuration ​

Social media plays a vital role in growing your business, and TikTok is one of the most engaging platforms out there. If you'd like to showcase your **TikTok Feed** on your website, WP Social Ninja makes connecting quick and simple. Follow this guide to add your TikTok Feed to your site.

TikTok connects through WP Social Ninja's [secure connection bridge](../getting-started/connecting-your-accounts), so there's no access code to copy and paste — just log in, approve, and you're connected.

## Connect Your TikTok Account ​

**First,** go to **WP Social Ninja → Platforms** from your plugin dashboard, find **TikTok**, and click to connect your TikTok account.

**Then,** in the **TikTok Configuration** pop-up, click the **Continue with TikTok** button. As the pop-up says, you'll be securely redirected to authorize the connection.

**Next,** you'll be redirected to the TikTok login page. Log in to your account.

**Then,** review the requested permissions for the WP Social Ninja app and click **Continue** to approve them.

**Finally,** you'll be brought right back to WP Social Ninja with your TikTok account connected. Now add and customize your [template](../getting-started/templates-overview) by clicking the **Add New Template** button.

## TikTok Feed Error ​

TikTok's data privacy rules require your feed source to stay connected. If a TikTok Feed source is not reconnected within **7 days**, you'll receive a **TikTok Feed Error Notification**, and all TikTok Feed data for that connected account will be automatically deleted from your website.

The good news: because TikTok now connects through the secure bridge, WP Social Ninja refreshes your connection automatically in the background, which greatly reduces the chance of hitting this limit. If you ever do see the error, simply reconnect your account to restore your feed.

If you have any further questions about TikTok configuration, feel free to [contact us](https://wpmanageninja.com/support-tickets) — we're happy to help.

---

## TikTok Feed Global Settings ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/tiktok-feed-settings.html](https://docs.wpsocialninja.com/guide/social-feeds/tiktok-feed-settings.html)

# TikTok Feed Global Settings ​

This guide explains the global settings for all your TikTok feeds. These options control how your feeds fetch new videos, how they are "cached" (temporarily stored) for performance, and how images are handled.

## Settings Breakdown ​

You can find this page by navigating to:

**WP Social Ninja → Settings → Feed Platforms → TikTok Settings**

Here is a detailed breakdown of each feature on this page:

- **Check New Feeds Every:** To make your site load faster, WP Social Ninja temporarily saves (caches) your TikTok feed in your website's database. This setting lets you choose how long to keep this saved copy. If you select **1 Hour**, the plugin will clear the cache after that time and retrieve new feeds.
- **Clear Cache:** This is a manual "force refresh" button. If your TikTok feed isn't updating automatically, click this button to clear all the cached feed data and retrieve new feeds again.
- **Optimize Images:** This is a performance feature. When you toggle this **On**, the plugin will generate and save optimized, multiple-sized copies of your video thumbnails to your own website's server ("local storage"), which helps your pages load much faster.
- **Reset Local Images:** This button is the "reset" for the "Optimize Images" feature. Clicking it will clear all the locally-saved images associated with the TikTok platform.

INFO

To configure settings for **GDPR Compliance** and **Image Format**, please navigate to the main **Advanced Settings** tab.

---

## TikTok Feed Template ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/tiktok-feed-template.html](https://docs.wpsocialninja.com/guide/social-feeds/tiktok-feed-template.html)

# TikTok Feed Template ​

This is your creative control center, where you can design a beautiful and functional TikTok feed that perfectly matches your website.

When you first open the editor, you'll see three main tabs at the top of the settings panel on the right:

- **General (This Guide):** This is the most important tab. It controls *what* content is shown (your videos, your profile info, filters) and *how* the feed functions (the layout, buttons, and links).
- **Style:** This tab controls the "look and feel"—all the colors, fonts, and borders.
- **Connection:** This tab is for managing the specific API connection for this template.

This guide will walk you through every single setting in the **General** tab in a simple, step-by-step way.

**What can you build with these settings?**

- **A "Latest Videos" Slider:** Use the **Carousel** layout and set the **Post Order** to "Newest" to show your newest videos on your homepage.
- **A Clean "Portfolio" Gallery:** Use the **Grid** layout, turn on **Equal Height**, and hide the **Description**, **Views**, and **Likes** to create a clean, professional-looking gallery of your work.

## General Settings ​

Here is a detailed breakdown of each section within the **General** tab.

### 1. Source ​

This is the very first and most important step. The Source settings tell WP Social Ninja where to get the TikTok videos from.

- **Feed Type:** This dropdown menu lets you choose the kind of feed you want to create. - **User Account Feed:** This is the most common choice. It will display the most recent videos from your own TikTok profile.
- **Select Account(s):** If you've connected more than one TikTok account to WP Social Ninja, this dropdown is where you'll pick the one you want to use for this template.
- **Fetch Feeds:** This is your manual "Refresh" button. If you've just posted a new video on TikTok and want to see it in your website preview right now, just click this button. It forces the plugin to check for new content immediately.

### 2. Template ​

This section controls the visual structure and arrangement of your videos.

- **Layout Type:** This is the foundational structure of your feed.

- **Grid:** This creates a clean, organized, multi-column grid. All video thumbnails are forced to be the same height, which creates a very neat and symmetrical look.
- **Carousel:** This displays your videos in a horizontal slider. Visitors can click or swipe through your posts. This is perfect for saving space on a homepage.
- **Masonry:** This is a "Pinterest-style" multi-column grid. Videos will have different heights (especially if you show the text caption), and the plugin will intelligently fit them together like bricks in a wall.
- **Template:** These are pre-designed visual "skins" for your feed:

- **Classic Tile:** Clean video thumbnails in even tiles.
- **Caption Card:** *(Pro)* Each video sits in a card with its caption printed below the thumbnail.
- **Overlay Card:** *(Pro)* The caption and view counts appear over the thumbnail when a visitor hovers or tabs onto it, keeping the grid purely visual until then.
- **Spotlight Hero:** *(Pro)* Features your most recent video in a large hero tile with the rest arranged around it. Good for drawing attention to new content.
- **Number of Columns:** This is a crucial setting for making your feed look good on all devices. You can set the number of columns you want to show on **Desktops**, **Tablets**, and **Mobile** phones.

- *Example: You might choose 4 columns for Desktop, 2 for Tablet, and 1 for Mobile. This ensures your feed is always easy to see and interact with, no matter the screen size.*
- **Columns Gap:** This controls the amount of empty space (in pixels) between each video in your feed. Increase this number to give your videos more "breathing room," or set it to 
```
0
```

 to have them all touch.

#### What the Pro Layouts Look Like ​

**Overlay Card**: Keeps your grid clean and visual. The text and view count only appear when a visitor hovers their mouse over the video.

**Spotlight Hero**: Makes your newest video much larger to grab attention, with the rest of your videos arranged neatly around it.

### 3. Filters ​

Filters are how you refine your feed to exclude content you don't want or only show content you do.

- **Number of Feeds to Display:** This is the number of videos a visitor will see when the page first loads. (More videos can be loaded later using the **Pagination** settings, which we'll cover below).
- **Post Order:** This lets you sort your videos. - **Newest:** Shows newest videos first (this is the most common setting).
- **Oldest:** Shows oldest videos first.
- **Most Viewed:** Shows most viewed video.
- **Most Likes:** Shows most liked video.
- **Random:** Shuffles the videos in a new order every time the page loads.
- **Show/Hide Posts with Keywords/Hashtags:** This is a very powerful filter. You can enter a comma-separated list of words or hashtags to either **only show** videos with those words, or **hide** videos with those words. The filter searches each video's caption as well as its title. - *Example: If you want to hide all videos that mention a certain competitor, you could add their name to the "Hide" box.*
- **Hide Specific Feeds:** This allows you to manually hide one or more specific videos. To get a video's ID, open that video on TikTok, and copy the long string of numbers in the URL.

WARNING

TikTok only shares the first **150 characters** of a video caption. A word or hashtag that appears later in a long caption is not visible to the filter, so it will not match.
### 4. Feed ​

This section controls the content and links inside each individual video card.

- **Open Post in:** This determines what happens when a visitor clicks on a video. - **None:** The video is not clickable. This is for a "display-only" gallery.
- **TikTok:** The visitor will be taken to the original video on TikTok.com in a new browser tab.
- **Popup:** This is the best user experience. The video will open in a beautiful pop-up box on your own website, where it will play. This keeps visitors on your site longer.
- **Display Toggles (On/Off Switches):**- **Display Author Photo:** Shows your small, circular profile picture on each video.
- **Display Author Name:** Shows your TikTok username (e.g., @wpsocialninja) on each video.
- **Display Description:** Shows the text caption you wrote for that video.
- **Display Platform Icon:** Shows a small TikTok icon on each video.
- **Display Date:** Show the date with each video.
- **Trim Description Words:** This sets a maximum word count for your video captions. If a caption is longer than this number, it will be cut off with a "Read More..." link. This is the key to keeping your feed looking clean and uniform.
- **Equal Height:** This toggle is very important for the **Grid** layout. When toggled **on**, all video boxes are forced to the same height (based on the tallest one), creating a perfect, uniform grid. You should turn this **Off** if you are using the **Masonry** layout.
- **Display Media:** This is the main switch for showing the actual video thumbnails. You will almost always want to keep this on. If you turn it off, your feed will only show text.

#### Views & Likes ​

This section lets you show or hide the social proof associated with each individual video.

- **Display Views Count:** A simple On/Off toggle to show or hide how many views each video has.
- **Display Likes Count:** A simple On/Off toggle to show or hide how many likes each video has. - *Use Case: For a business, showing high view and like counts is great social proof. For a cleaner, more professional portfolio, you might turn these off.*
- **Display Comment Count:** A simple On/Off toggle to show the comment count in the template feed.

### 5. Header ​

This section controls the large banner at the top of your entire feed, which displays your main TikTok profile information.

- **Display Header:** This is the master On/Off switch for the entire header section. Turn it off if you just want to show the videos.
- **Header Layout:** Choose how much profile information the header shows. - **Classic:** The full profile block — photo, name, description, website link and all your counters.
- **Minimal:** A compact single row with just your profile photo and account name. You can also style a border around the profile photo in this layout.
- **Account to Display:** If your feed is showing videos from multiple accounts, this lets you choose which one account's info to show in the header.
- **Display Toggles (On/Off Switches):** These let you build a "mini-profile" on your website. - **Display Profile Photo** (Your main profile picture)
- **Display Account Name** (Your @username)
- **Display Description** (Your TikTok profile description)
- **Display Website** (The link in your profile)
- **Display Followers Count** (How many followers you have)
- **Display Following Count** (How many people you are following)
- **Display Likes Count:** This is a key TikTok metric. It shows the TOTAL number of likes your entire profile has ever received.

### 6. Follow Button ​

This adds a "Follow" call-to-action button to your feed, helping you get more TikTok followers directly from your website visitors.

- **Display FollowButton:** Toggles the button on or off.
- **Follow Button Position:** You can place the button in the **Header** (at the top of the feed) or the **Footer** (at the bottom, after all the videos).
- **Button Text:** You can customize the text on the button (e.g., "Follow Us on TikTok" or "See More on TikTok").

### 7. Pagination ​

This is the new section you asked about. Pagination controls what happens when a visitor gets to the bottom of the initial set of videos.

- **Pagination Type:** This lets you choose how users load more videos. - **None:** The feed will only show the "Number of Feeds to Display" (from the **Filters** section) and that's it. There will be no way to load more videos.
- **Load More:** This will add a button at the bottom of your feed. When clicked, it will load the next set of videos. This is the most popular and user-friendly option.

## Next Steps ​

Now that you have configured all the General settings, your next step is to make your feed beautiful!

Click on the **Style** tab to customize all the colors, fonts, and borders.

When you are finished, click the **Save Template** button at the bottom.

---

## Twitter Configuration ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/twitter-configuration.html](https://docs.wpsocialninja.com/guide/social-feeds/twitter-configuration.html)

# Twitter Configuration ​

This guide will show you exactly how to connect your X (Twitter) account to WP Social Ninja. This allows you to display your latest tweets and feed activity directly on your website.

To connect your account, you will first open the X (Twitter) settings inside WP Social Ninja. The plugin will ask you for specific "credentials" (like an API Key or Token). We will then show you exactly where to find these keys by creating a simple "App" in the X (Twitter) Developer Portal.

We will walk you through every step.

## Start the Connection in WP Social Ninja ​

This is the first step. You will begin inside your WordPress dashboard to see what information you need to find.

First, go to your WordPress dashboard. In the left-hand menu, click on **WP Social Ninja**, and then select the [Platforms](../getting-started/all-platforms-of-wp-social-ninja). This is your main hub for connecting all your social accounts.

On the "Platforms" page, you will see a list of all available social networks. Find the **X (Twitter)** row and click the **Connect** button (or Settings icon) on the right side.

### See the Connection Methods ​

A pop-up window will appear. This is where you will paste your credentials after you get them. You will see two methods:

- **API V2 (Recommended):** This is the modern, simple method. It only requires a Username and a Bearer Token.
- **API V1 (Advanced):** This is the older method. It is more complex and requires four different keys: API Key, API Key Secret, Access Token, and Access Token Secret.

Now that you know what you need, let's go get those keys! Keep this browser tab open.

## Part 1: Create Your X (Twitter) App (To Get Your Keys) ​

In a new browser tab, you must create an "App" in your X (Twitter) Developer account. This app is what will generate the keys you need.

### Create a New Project (If You Don't Have One) ​

This is a mandatory first step. Before you can create an App, you must have a "Project" to put it in. This Project organizes your work, and it is required for the API V2 Bearer Token to be generated correctly.

- In your developer dashboard, navigate to the **Project & Apps** section in the left-hand sidebar.
- If you do not already have a project, click the **+Add Project** button.
- Follow the prompts from X (Twitter). You will need to provide basic information like a Project Name and Purpose.
- Once your Project is created, you will be taken inside its dashboard.

### Create a New App ​

Log in to your X (Twitter) Developer account. In the dashboard, look for the **Project & Apps** section in the left-hand sidebar. Click on your Project to open it.

Inside your Project, you will see a list of your existing apps. At the bottom of this list, click the **+ Create App** button to start making a new one.

A pop-up will appear asking you to give your app a name. Choose a name you will recognize, for example, "My Website Feed" or "WP Social Ninja Connection."

Click **Next**.

After this step, your app is created! The next page will show you your new keys.

## Part 2: Your Credentials ​

Now we will find the specific keys you need. We'll show you how to get them for both API V2 and API V1.

### Method A: Get Credentials for API V2 (Recommended) ​

This is the fastest and easiest way.

- After you name your app in Part 2, the next screen will immediately show you your credentials.
- Find the **Bearer Token** field.
- Click to copy the long string of characters and save it in a safe place (like a text file). This is the only key you need for this method.

### Method B: Get Credentials for API V1 (Advanced) ​

Use this method if you need to use the older API V1 connection. This requires four separate keys.

- From your new app's dashboard in the X (Twitter) Developer portal, click on the **Keys and Tokens** tab.
- In this page you will find the **Access Token and Secret** section.

- Click the **Regenerate** button.
- A pop-up will appear showing your keys, you will see these keys.
- Copy the **API Key** ( "Consumer Key").
- Copy the **API Key Secret** (or "Consumer Secret").
- Copy the **Access Token**.
- Copy the **Access Token Secret**.

You should now have all four keys for the API V1 method saved in your text file.

## Part 4: Connect Your Account in WP Social Ninja ​

Now for the final, easy step. Go back to your WordPress dashboard.

The pop-up from Part 1 should still be open.

- **If you are using API V2:** Click the **API V2** tab, paste in your **Bearer Token** and **Username**, and click **Connect**.
- **If you are using API V1:** Click the **API V1** tab, carefully paste all four keys (API Key, API Key Secret, Access Token, Access Token Secret) into their matching fields, and click **Connect**.

The pop-up will close, and you will be returned to the Platforms page.

You will now see the X (Twitter) row shows a "Connected" status.

## Next Steps ​

Congratulations! Your X (Twitter) account is fully connected.

- **Connect New Account:** You can click this to add another X (Twitter) account.
- **Add New Template:** Click this button to go to the template editor and start designing how your X (Twitter) feed will look on your website!

---

## X (Twitter) Feed Settings ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/twitter-feed-settings.html](https://docs.wpsocialninja.com/guide/social-feeds/twitter-feed-settings.html)

# X (Twitter) Feed Settings ​

The X (Twitter) Global Settings feature enables you to manage the default caching settings for all your X (Twitter) feeds simultaneously. These settings are located in the main plugin dashboard, not in the individual template editor.

## Access the Feed Settings ​

To find these settings, navigate to **WP Social Ninja → Settings** from your WordPress dashboard. Click on the **Feed Platforms** tab. Then, select **X (Twitter) Settings**. Here, you will find the Feed Settings.

Here is a breakdown of each setting available in this panel.

### Check New Feeds Every ​

This dropdown controls the default auto-sync schedule. It determines how often WP Social Ninja will check X (Twitter) for new posts (e.g., 6 Hours, 1 Day, 1 Week). Setting a longer interval can improve your site's loading speed.

### Clear Cache ​

This button will immediately clear all stored X (Twitter) feed cache from your website.

> Use Case: Click this button if your feeds are not showing new posts and you want to force the plugin to fetch the latest content from X (Twitter) immediately.

### Clear X (Twitter) Cards ​

This button will clear all cached data for links that have X (Twitter) Cards.

> Use Case: Click this button if your feed is displaying outdated link previews (like old images or titles) for URLs shared in your tweets.

If you have any questions or need further assistance, feel free to reach out to our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpsnsite&utm_medium=popup&utm_campaign=spring#/).

---

## X (Twitter) Feed Template Styling & Connection ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/twitter-feed-template-styling-connection.html](https://docs.wpsocialninja.com/guide/social-feeds/twitter-feed-template-styling-connection.html)

# X (Twitter) Feed Template Styling & Connection ​

This guide will walk you through all the options in the **Style** and **Connection** tabs of the X (Twitter) Feed template editor.

While the **General Settings** tab controls *what* content is shown (e.g., your source, filters, and header), the **Style** tab controls the visual design. This is where you can change all the colors, fonts, spacing, and borders to perfectly match your brand and website's look.

## Style Settings ​

The **Style** tab is organized into several sections, each controlling a different part of your feed.

### 1. Heading ​

This section controls the complete visual design of the **Header** at the top of your feed. The header is the main box that contains your profile information, like your cover photo, bio, and follower count.

**Full Name**

This styles your main Display Name (e.g., "WP Social Ninja").

- **Text Color:** Sets the color of the Full Name text.
- **Typography:** Opens a full set of font controls (Font Family, Size, Weight, etc.) for your Full Name.

**User Name**

This styles your Username (e.g., @wpsocialninja).

- **Text Color:** Sets the color of the Username text.
- **Typography:** Opens the full set of font controls for your Username.

**Description**

This styles your Profile Bio text.

- **Text Color:** Sets the color of the bio text.
- **Typography:** Opens the full set of font controls for your bio text.

**Location**

This styles the Location text shown on your profile.

- **Text Color:** Sets the color of the location text.
- **Typography:** Opens the full set of font controls for the location text.

**Statistics Label**

This styles the text label for your stats (e.g., the words "Followers," "Following").

- **Text Color:** Sets the color of the label text.
- **Typography:** Opens the full set of font controls for the label text.

**Statistics Count**

This styles the number for your stats (e.g., "1,250").

- **Text Color:** Sets the color of the count number.
- **Typography:** Opens the full set of font controls for the count number.

**Follow Button**

This styles the "Follow" button located inside the header.

- **Text Color:** Sets the color of the text inside the button (e.g., "Follow Us").
- **Background Color:** Sets the main background color of the button.
- **Typography:** Opens the full set of font controls for the button text.

**Box**

This controls the overall container or "box" that holds all the header elements.

- **Background Color:** Sets a background color for the entire header area.
- **Padding:** This is the "breathing room" *inside* the header box, between the border and the content. You can set the padding (in pixels) for the **Top**, **Right**, **Bottom**, and **Left** sides individually.
- **Border Type:** Lets you choose the style of the border for the header box (e.g., **Solid**, **Dotted**, **Dashed**, or **None**).

### 2. Name ​

This section styles the Author's Name that appears on each individual tweet.

**Author**

- **Text Color:** Sets the color of the Author's name on the tweet.
- **Typography:** Opens the full set of font controls (Font Family, Size, Weight, etc.) for the Author's name.

### 3. Meta ​

This section styles the "meta" information (like the username and date) on each individual tweet.

**Username**

This styles the Author's @username on the tweet.

- **Text Color:** Sets the color of the @username text.
- **Typography:** Opens the full set of font controls for the @username.

**Date**

This styles the Date (e.g., "Nov 7, 2025") on the tweet.

- **Text Color:** Sets the color of the date text.
- **Typography:** Opens the full set of font controls for the date.

### 4. Content ​

This section styles the main body of the tweet itself.

**Text**

This styles the main text content of the tweet.

- **Text Color:** Sets the color of the tweet's text.
- **Typography:** Opens the full set of font controls for the tweet text.
- **Padding:** Controls the "breathing room" around the text block only, letting you adjust the space between the text and other elements in the tweet card.

**Hashtag**

- **Hashtag Color:** This is a special setting that controls the color of any clickable 
```
#hashtags
```

 inside the tweet. This helps them stand out from the rest of the text.

### 5. Action ​

This section styles the "action bar" at the bottom of each tweet, which includes the Reply, Retweet, and Like icons and counts.

**Label**

This styles the count number next to each icon (e.g., the "150" next to the heart).

- **Text Color:** Sets the color of the count text.
- **Typography:** Opens the full set of font controls for the count text.

**Icon**

This styles the icons themselves (the reply, retweet, and like/heart icons).

- **Icon Color:** Sets the color of all three icons.

### 6. Item Box ​

This is a very important section. The **Item Box** is the entire container or "card" that holds each individual tweet. These settings control the design of that main box.

- **Background Color:** This sets the background color for the entire tweet card. By default, it's usually white or transparent, but you can set it to a light gray or any other color to match your brand.
- **Padding:** This is the "breathing room" *inside* the post card. It's the empty space between the card's border and the content inside it (like the author's name and the post text). You can set the padding (in pixels) for the **Top**, **Right**, **Bottom**, and **Left** sides individually to get the spacing perfect.
- **Border Type:** This lets you choose the style of the border for the post card (e..g., **Solid**, **Dotted**, **Dashed**, or **None**).
- **Width:** This setting (which appears if you select a Border Type) lets you control the thickness of the border. You can set the thickness (in pixels) for the **Top**, **Right**, **Bottom**, and **Left** sides individually.
- **Color:** This opens a color picker to set the color of the border itself.

---

## Connection Settings ​

The **Connection** tab is a simple shortcut. It allows you to connect a new X (Twitter) Account right from within the template editor.

This is very useful if you are building a template and realize you want to include an account you haven't connected yet, or if you want to add multiple accounts to a single feed.

**Please Note:** The steps to connect an account here are identical to the main X (Twitter) connection process.

For a complete, step-by-step guide on how to use these settings, please see our main [X (Twitter) Configuration](./twitter-configuration) documentation.

---

## Twitter Template Settings ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/twitter-template-settings.html](https://docs.wpsocialninja.com/guide/social-feeds/twitter-template-settings.html)

# Twitter Template Settings ​

This is your creative control center, where you can design a beautiful and functional feed that perfectly matches your website.

When you first open the editor, you'll see three main tabs at the top of the settings panel on the right:

- **General (This Guide):** This is the most important tab. It controls *what* content is shown (your tweets, your profile info, filters) and *how* the feed functions (the layout, buttons, and links).
- **Style:** This tab controls the "look and feel"—all the colors, fonts, and borders.
- **Connection:** This tab is for managing the specific API connection for this template.

This guide will walk you through every single setting in the **General** tab in a simple, step-by-step way.

**What can you build with these settings?**

- **A "Latest News" Feed:** Use the **User Account** feed type and the **Timeline** layout to show your newest tweets in a classic, single-column feed.
- **A "Brand Mentions" Wall:** Use the **Search** feed type with your brand name (e.g., "WP Social Ninja") to show what people are saying about you.
- **A "Hashtag" Campaign Wall:** Use the **Hashtag** feed type and the **Masonry** layout to create a beautiful wall of all tweets mentioning your event, like 
```
#MyAwesomeConf2025
```

.

## General Settings ​

Here is a detailed breakdown of each section within the **General** tab.

### 1. Source ​

This is the very first and most important step. The Source settings tell WP Social Ninja what kind of content to get from X (Twitter) and which account or topic to get it from.

- **Feed Type:** This is a dropdown menu that lets you choose the kind of feed you want to create. You have three powerful options: - **User Timeline:** This is the most common choice. Select this to display the tweets from your own X (Twitter) profile that you have connected to the plugin.
- **Hashtag:** This feature lets you display public tweets from all over X (Twitter) that use a specific hashtag (e.g., 
```
#WordPress
```

).
- **Home Timeline:** A home timeline (also called a "home feed") is the main, primary feed you see when you log in to X (Twitter).
- **Mention:** Shows only mentions feed.
- **Username:** This will show the X (Twitter) accounts you have connected.
- **Total Feed:** This number tells WP Social Ninja the maximum number of tweets to fetch (or pull) from X (Twitter) when it checks for new content. It's best to set this to a high number, like 50 or 100, to make sure the plugin has plenty of tweets to work with. (This is not the number of tweets that show up on your page at first; that's controlled by **Pagination**).
- **Fetch Feeds:** This is your manual "Refresh" button. If you've just posted a new tweet on X (Twitter) and want to see it in your website preview right now, just click this button. It forces the plugin to check for new content immediately instead of waiting for the next scheduled update.

### 2. Template ​

This section controls the visual structure and arrangement of your tweets.

- **Layout Type:** This is the foundational structure of your feed. - **Timeline:** This creates a classic, single-column feed that looks similar to the X (Twitter) timeline.
- **Grid:** This creates a clean, organized, multi-column grid. All tweet boxes are forced to be the same height, which creates a very neat and symmetrical look.
- **Carousel:** This displays your tweets in a horizontal slider. Visitors can click or swipe through your posts. This is perfect for saving space.
- **Masonry:** This is a "Pinterest-style" multi-column grid. Tweets will have different heights (based on their text length and images), and the plugin will intelligently fit them together like bricks in a wall.
- **Template:** The visual "skin" for your feed. X (Twitter) feeds use the **Classic Tweet** template, which styles each post to look close to a tweet as it appears on X.
- **Number of Columns:** This is a crucial setting for making your feed look good on all devices. You can set the number of columns you want to show on **Desktops**, **Tablets**, and **Mobile** phones.
- **Columns Gap:** This controls the amount of empty space (in pixels) between each tweet in your feed.

### 3. Filters ​

Filters are how you refine your feed to exclude content you don't want or only show content you do.

- **Number of Feeds to Display:** This is the number of tweets a visitor will see when the page first loads. (More tweets can be loaded later using the **Pagination** settings).
- **Post Order:** This lets you sort your tweets. - **Descending:** Shows newest tweets first (this is the most common setting).
- **Ascending:** Shows oldest tweets first.
- **Random:** Shuffles the tweets in a new order every time the page loads.
- **Show/Hide Posts with Keywords/Hashtags:** This is a very powerful filter. You can enter a comma-separated list of words or hashtags to either **only show** tweets with those words, or **hide** tweets with those words. - *Example: If you want to hide all replies from your feed, you could add the @ symbol to the "Hide" box.*
- **Hide Specific Feeds:** This allows you to manually hide one or more specific tweets by pasting in their unique Tweet ID (a long string of numbers you can get from the tweet's URL).

### 4. Feed ​

This section controls the content and links inside each individual tweet card.

- **Open Post in:** This determines what happens when a visitor clicks on a tweet. - **None:** The tweet is not clickable. This is for a "display-only" gallery.
- **X(Twitter):** The visitor will be taken to the original tweet on X.com (Twitter.com) in a new browser tab.
- **Popup / Lightbox:** This is the best user experience. The tweet and its media will open in a beautiful pop-up box on your own website.
- **Display Toggles (On/Off Switches):** These let you show or hide all the metadata on a tweet. - **Display Author Photo:** Shows the user's small, circular profile picture.
- **Display Author Name:** Shows the user's name (e.g., "Elon Musk") and handle (e.g., 
```
@elonmusk
```

).
- **Display Date:** Shows when the tweet was published.
- **Display Description:** Shows the text content of the tweet.
- **Display Platform Icon:** Shows a small X (Twitter) icon.
- **Display Likes Count:** Shows how many likes the tweet has.
- **Display Comments Count:** Shows how many replies the tweet has.
- **Display Retweet Count:** Shows how many times the tweet has been retweeted.
- **Trim Description Words:** This sets a maximum word count for the tweet text. If a tweet is longer than this number, it will be cut off with a "Read More..." link. This is the key to keeping your feed looking clean.
- **Equal Height:** This toggle is very important for the **Grid** layout. When toggled **on**, all tweet boxes are forced to the same height, creating a uniform grid. You should turn this **Off** if you are using the **Masonry** layout.
- **Display Media:** This is the main switch for showing any images or videos attached to the tweet. You will almost always want to keep this on.

### 5. Header ​

This section controls the large banner at the top of your entire feed, which displays your main profile information.

- **Display Header:** This is the master On/Off switch for the entire header section. Turn it off if you just want to show the tweets.
- **Account to Display:** If your feed is showing tweets from multiple accounts, this lets you choose which one account's info to show in the header.
- **Display Toggles (On/Off Switches):** These let you build a "mini-profile" on your website. - **Display Cover Photo** (Your main profile banner image)
- **Display Profile Photo** (Your main profile picture)
- **Display User Name** (Your @username)
- **Display Full Name**
- **Display Description** (Your profile biography)
- **Display Website** (The link in your profile)
- **Display Posts Count** (Total tweets you've made)
- **Display Followers Count** (How many followers you have)
- **Display Following Count** (How many people you are following)

### 6. Follow Button ​

This adds a "Follow" call-to-action button to your feed, helping you get more followers directly from your website visitors.

- **Display Follow Button:** Toggles the button on or off.
- **Follow Button Position:** You can place the button in the **Header** (at the top of the feed) or the **Footer** (at the bottom, after all the tweets).
- **Button Text:** You can customize the text on the button (e.g., "Follow Us on X" or "See More on X").

### 7. Pagination ​

Pagination controls what happens when a visitor gets to the bottom of the initial set of tweets (which you set in the **Filters** section).

- **Pagination Type:** This lets you choose how users load more tweets. - **None:** The feed will only show the "Number of Feeds to Display" (from the **Filters** section) and that's it. There will be no way to load more.
- **Load More:** This will add a button at the bottom of your feed. When clicked, it will load the next set of tweets. This is the most popular and user-friendly option.
- **Load More Button Text:** You can change the text from "Load More" to something like "Show More Tweets" or "See More."
- **Feeds Per Page:** This is very important. This number controls how many *new* tweets are loaded *each time* the "Load More" button is clicked.

## Next Steps ​

Now that you have configured all the General settings, your next step is to make your feed beautiful!

Click on the **Style** tab to customize all the colors, fonts, and borders.

When you are finished, click the **Save Template** button at the bottom.

---

## YouTube Configuration ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/youtube-configuration.html](https://docs.wpsocialninja.com/guide/social-feeds/youtube-configuration.html)

# YouTube Configuration ​

The YouTube Feed feature in WP Social Ninja lets you connect your YouTube channel and display your videos, playlists, and channel details directly on your WordPress website. Once connected, your YouTube content updates automatically, keeping your site fresh and engaging.

There are two ways to connect: the quick **Connect via Google** method, or the **API Key** method (recommended for long-term stability). Both are covered below, and both are secured through WP Social Ninja's [connection bridge](../getting-started/connecting-your-accounts), which keeps your connection reliable and refreshing in the background.

## Configure the YouTube Platform ​

To get started, you'll first configure the YouTube platform.

From your WordPress dashboard, navigate to **WP Social Ninja → Platforms**. Click the **Social Feeds** tab, find **YouTube** in the list, and click the **Connect** button.

A pop-up will appear with two connection types:

- **API Key (Recommended)** — Connect via Token
- **OAuth 2.0 (Deprecated Soon)** — Connect via Google

This guide explains both.

## Connect via Google (Quickest) ​

This is the fastest way to get connected — just sign in with Google, and WP Social Ninja links your channel automatically.

NOTE

In the latest version this option is labeled **"OAuth 2.0 (Deprecated Soon)"**. It still works today, but it will be phased out — so if you want the most future-proof setup, use the **API Key** method further below.**First,** in the **YouTube Configuration** pop-up, select the **OAuth 2.0 (Deprecated Soon)** tab — labeled **Connect via Google**. Then click the **Sign In And Get Google Access Code** button and approve access. As the pop-up notes, it only takes one click.

TIP

**No access codes to copy or paste.** Once you sign in and approve, WP Social Ninja receives everything it needs and connects your YouTube channel automatically.
## API Key (Recommended for Stability) ​

For the most stable, long-term connection, use a free API Key from the Google Cloud Console. It takes a few more steps to set up, but it's the method we recommend keeping in place.

In the **YouTube Configuration** pop-up, select the **API Key (Recommended)** tab — labeled **Connect via Token**. This is where you'll paste your key into the **API Key** field once it's ready. First, let's create that key over in Google.

### Get Your API Key from Google ​

Go to the [Google Cloud Console](https://console.cloud.google.com/) and log in with your Google account. In the top menu, click the **Select a Project** dropdown. When the pop-up appears, click **New Project**.

Enter a **Project name** (e.g., "WP Social Ninja") and click **Create**.

Once the project is created, go to **APIs & Services → Credentials** from the main menu.

Now, click the **+ Create Credentials** button at the top, and select the **API key** option.

Enter a name for your API key and click **Create**.

A pop-up will appear with your new key. Click the **Copy** icon.

To make the key work, you must enable the **YouTube Data API v3** — otherwise the API Key won't function. Click **API Library** from **APIs & Services**.

From the API Library, scroll down and select the **YouTube Data API v3**, then enable it.

### Add the API Key to WP Social Ninja ​

Return to your WordPress dashboard and open the YouTube configuration pop-up. Select the **API Key (Recommended)** option, **paste** your key into the **YouTube API Key** field, and click **Save**. Your YouTube account is now connected.

You'll see a success message like the one below:

TIP

For your security, WP Social Ninja now encrypts stored YouTube API keys at rest, so your credentials stay protected.However you choose to connect, your YouTube content is now ready to display — next, design how it looks with a [YouTube feed template](./youtube-feed-template-general-settings).

---

## YouTube Feed Template: General Settings ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/youtube-feed-template-general-settings.html](https://docs.wpsocialninja.com/guide/social-feeds/youtube-feed-template-general-settings.html)

# YouTube Feed Template: General Settings ​

When you create or edit a new YouTube feed template, you will land in the main Template Editor. This is where you control everything about your feed's content and appearance.

The editor is divided into three tabs:

- **General (This Guide):** This tab controls the feed's content. You set the video source, filter the videos, and adjust functional settings like layout, video player behavior, and buttons.
- **Style:** This tab controls the visual design. You can change colors, fonts, and spacing to match your brand.
- **Connection:** This tab manages the API connection for this template. You can use this to re-authenticate your account or connect a new source if needed.

This guide will walk through every option in the **General** tab. So, let’s get started.

> Use Case: You can use these settings to create powerful, specific feeds.A vlogger can show their Channel feed, use the Template settings to create a Masonry grid, and use the Filters to show only their 5 most recent videos.A musician can create a feed showing only a specific Playlist of their new album.A brand can use the Search type to create a feed of all videos that mention their product's name.

## General Settings ​

Here is a breakdown of each section within the **General** tab.

### 1. Source ​

This section is the most important setting in your template. It controls what content to fetch from YouTube by defining the video source and the total number of videos to retrieve.

- **Feed Type:** This dropdown lets you choose the kind of content to display. - **Channel:** Shows the latest videos from a specific YouTube account.
- **Playlist:** Shows all videos from a single, specific playlist.
- **Search:** Shows videos that match a specific keyword.
- **Specific Videos:** Lets you hand-pick one or more videos by ID.
- **Live Streams:** Shows upcoming, live, or completed live streams from a channel.
- **Channel ID, Handle or Username:** (Appears if "Channel" is selected). You must enter the channel's Handle, ID, or Username. - **Example (Handle):** 
```
https://www.youtube.com/@yourchannel
```
- **Example (ID):** 
```
https://www.youtube.com/channel/UC...
```
- **Example (Username):** 
```
https://www.youtube.com/user/yourname
```
- **Total Feed:** Set the maximum number of videos to fetch from YouTube. The maximum is 200. (Note: This is different from the number of videos shown on first load, which is controlled by the **Number of Videos to Display** setting in the Filters section).

### 2. Template ​

This section controls the foundational layout and visual structure of your YouTube feed. It allows you to set the layout type, choose a pre-designed skin, and define the responsive column structure.

- **Layout Type:** This dropdown lets you choose the main structure for your feed. As shown in the image, the options are:

- **Grid:** A clean, multi-column grid where all video boxes are the same height.
- **Carousel:** A horizontal slider.
- **Template:** These are pre-designed visual "skins" for your feed:

- **Video Grid:** Clean thumbnail tiles with the video title underneath.
- **Hover Overlay:** *(Pro)* The title and video details appear over the thumbnail when a visitor hovers or tabs onto it.
- **List View:** *(Pro)* A single-column list with each thumbnail beside its title and description. Good for a page where visitors are choosing what to watch.
- **Text-Top Card:** *(Pro)* Puts the video title above the thumbnail rather than below it.
- **Player & Playlist:** *(Pro)* A large player with a scrollable playlist of your other videos beside it, so visitors can watch without leaving the page.
- **Number of Columns:** Set the number of columns for Desktop, Tablet, and Mobile.
- **Columns Gap:** Choose a preset spacing amount from the dropdown to control the space between each video.

INFO

**Player & Playlist** builds its own layout, so the Number of Columns and column gap settings do not apply when you choose it.
#### Pro Layouts ​

**Text-Top Card:** Puts the video title above the image instead of underneath it.

**Player & Playlist:** Shows one big video player alongside a scrolling list of your other videos, letting visitors watch everything right on your website.

#### Carousel Settings ​

When you set your Layout Type to **Carousel** in the **Template** section, this new panel appears. It allows you to customize the behavior and controls of the carousel slider.

- **Autoplay:** This toggle enables or disables the automatic sliding of the carousel. Turn it **ON** if you want the carousel to slide automatically.
- **Autoplay Speed:** This field sets the time (in milliseconds) between each automatic slide. For example, 3000 equals 3 seconds.
- **Items To Show:** Use the slider to set how many video items are visible at one time in the carousel viewport (e.g., 3).
- **Items To Scroll:** Use the slider to set how many items the carousel should slide at one time (e.g., 1)
- **Navigation Type:** Displays clickable left/right arrows.

- **Dots:** Displays clickable dots at the bottom.
- **Arrows and Dots:** Displays both.
- **None:** Hides all navigation controls.
- **Space Between:** This slider controls the amount of empty space (in px) between each video slide in the carousel.

### 3. Filters ​

The Filters section helps you control which videos appear in your YouTube feed and how they’re displayed. You can refine, sort, or exclude content to ensure your feed only shows the most relevant videos.

**Options Explained:**

- **Number of Videos to Display:** Set how many videos are shown when the feed first loads. You can increase or decrease the count to adjust the layout.
- **Posts Order:** Choose how your videos are sorted in the feed. - **Newest (Descending):** Displays the latest videos first (default).
- **Oldest (Ascending):** Displays the oldest videos first.
- **Random:** Shuffles video order for a varied feed each time the page loads.
- **Show Posts Containing These Words or Hashtags:** Enter specific keywords or hashtags to only show videos that include them in their title or description. This is useful for focusing on a topic, campaign, or product-related videos.
- **Hide Posts Containing These Words or Hashtags:** Add keywords or hashtags to exclude videos that contain those terms. Perfect for filtering out unrelated or off-topic content.
- **Hide Specific Videos:** Enter the YouTube video IDs of any videos you don’t want displayed in your feed. This gives you precise control over what appears publicly.
- **Cache Settings (Optional):** Set how often the plugin refreshes data from YouTube. You can choose time intervals like 6 hours, 12 hours, or 1 day to balance performance and freshness.

### 4. Video ​

This section controls how individual video posts appear in your YouTube feed. It allows you to customize which video elements are shown and how the videos play when clicked.

**Options Explained:**

- **Play Mode:** Determines how videos are played when a visitor clicks on them. - **Popup:** Opens the video in a pop-up lightbox on your website (default and recommended for the best user experience).
- **In-line:** Plays the video directly inside the feed layout.
- **YouTube Player:** Redirects the visitor to watch the video on YouTube.
- *(Gallery mode available in Pro version)*
- **Play with Fluent Player:** *(Appears if you also use Fluent Player)* Turn this on to play your feed's videos in Fluent Player instead of the default YouTube player.
- **Player Design:** *(Appears if Play with Fluent Player is enabled)* Pick one of your existing Fluent Player designs, and your feed's videos reuse its design and its layers, such as a [call to action](https://docs.fluentplayer.com/cta-and-action-bar) or an [email capture](https://docs.fluentplayer.com/email-capture) form. Defaults to **Default player design**.
- **Show Layers at Video End:** *(Appears if Play with Fluent Player is enabled)* Turn this on to display your chosen Player Design's layers once a video finishes playing.

- **Display Title:** Toggles the visibility of each video’s title.
- **Trim Title Words:** Allows you to limit how many words appear in the video title (helpful for keeping your layout neat).
- **Display Play Icon:** Enables or disables the play button overlay on the video thumbnail.
- **Display Duration:** Shows or hides the video’s total length.
- **Display Date:** Displays the date when the video was published.
- **Display Views Counter:** Shows the total number of views for each video.
- **Display Likes Counter:** Displays the total number of likes *(available in Pro version)*.
- **Display Comments Counter:** Displays the number of comments on the video *(available in Pro version)*.
- **Display Description:** Shows a short text description for each video, if available.
- **Display Channel Name:** Toggles the visibility of the YouTube channel name under each video.
- **Display Call To Action Button:** Adds a “Watch Now” button below the video, encouraging viewers to engage.

INFO

The template editor preview never shows Fluent Player. Check the real page on your site to see the finished result.
### 5. Header ​

This section controls the main banner area that appears at the top of your entire YouTube feed. It allows you to customize how the channel header looks and what information is displayed.

- **Show Header:** This is the main toggle that enables or disables the entire header section. Turn it off to hide the banner, logo, and all channel info.
- **Header Layout:** Choose how much channel information the header shows. - **Classic:** The full header — banner image, logo, channel name, description and all your counters.
- **Minimal:** A compact single row with just your channel logo and name, for when a full banner would dominate the page.
- **Display Banner:** Toggles the large channel banner image at the top of the header. You can also upload a custom banner image if desired.
- **Display Logo:** Enables or disables the channel’s profile image (logo) within the header section.
- **Display Name:** Shows or hides the YouTube channel’s name under the logo.
- **Display Subscriber Counter:** Displays the total number of subscribers for the connected YouTube channel.
- **Display Videos Counter:** Displays the total count of videos available on the channel.
- **Display Views Counter:** Displays the total number of views across the entire channel.
- **Display Description:** Enables the short description or channel bio text (if available).
- **Display Subscribe Button:** Shows or hides a “Subscribe” button within the header, allowing users to subscribe directly from the feed.
- **Upload Custom Banner:** Allows you to manually upload your own banner image to replace the default YouTube channel banner.

### 6. Subscribe Button ​

This adds a "Follow" button at the top or bottom of your feed.

- **Display Subscribe button:** click to the toogle button to show the subscribe button.
- **Subscribe Button Position:** Choose where the button appears from the dropdown options: **Header** **Footer** or **Both**.
- **Button Text:** Customize the text on the button (e.g., "Follow Us on YouTube").

## Next Steps ​

Now that you have configured all the General settings, your next step is to make your feed look great.

Click on the **Style** tab to customize the Colors, Fonts, and Spacing of your header, video posts, and buttons. Learn more about [YouTube configuration](./youtube-configuration).

When you are finished, click the **Save** button.

---

## YouTube Feed Type ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/youtube-feed-types.html](https://docs.wpsocialninja.com/guide/social-feeds/youtube-feed-types.html)

# YouTube Feed Type ​

When you create a YouTube feed template, the most important setting is the **Feed Type**. This option controls what kind of content your feed will display. After you select YouTube as your platform in the template editor, you will see a Feed Type dropdown.

## Feed Type ​

Currently, we have five Feed Types; **Channel**, **Playlist**, **Search**, **Specific Videos**, and **Live Streams**. You can select any Feed Type; for example, if you select **Channel**, then you need a **Channel ID** to fetch the YouTube Channel Feed on your website. Similarly, if you pick **Playlist,** then you need a **Playlist ID**.

## 1.Channel ​

This feed type displays the latest videos from a specific YouTube account.

### How to Find Your Channel ID, Handle, or Username ​

In your web browser, go to [YouTube.com](https://www.youtube.com). Search for the channel you want to display and click on its name to go to its main page. Look at the URL in your browser's address bar. **Copy** the correct part of the URL based on its format:

### Channel Handle ​

To find a Channel Handle:

- **URL:** [https://www.youtube.com/@yourchannel](https://www.youtube.com/@yourchannel)
- **Copy and paste:** @yourchannel

After copying the channel handle, go to your **YouTube Template Source** options and paste the **Channel Handle** that you copied before. Then, click the **Save** button.

### Channel ID ​

To find a Channel ID:

- **URL:** [https://www.youtube.com/channel/UCibcXdeKy8e04hYWf0Gz7ow](https://www.youtube.com/channel/UCibcXdeKy8e04hYWf0Gz7ow)
- **Copy and paste:** UCibcXdeKy8e04hYWf0Gz7ow

Go to any YouTube channel page. Look at the **URL** in your browser. The **ID** is the long string of letters and numbers after youtube.com/channel/.

Example: [https://www.youtube.com/channel/UCiyeXfnGx9e06hXWf0Hz7ow](https://www.youtube.com/channel/UCiyeXfnGx9e06hXWf0Hz7ow). **Copy** this ID.

Now, **paste** it to insert the **Channel URL** and click on the Fetch Videos to fetch the Channel Videos. Then, click the **Save** button. Note that you are to select the URL after the channel, and the ID will look like “**UCiyeXfnGx9e06hXWf0Hz7ow”**.

### Channel Username ​

To find a Username (for older channels):

- **URL:** [https://www.youtube.com/user/your_user_name](https://www.youtube.com/user/your_user_name)
- **Copy and paste:** your_user_name

### 2. Playlist ​

This feed type displays all videos from a single YouTube playlist.

- **Feed Type:** Select Playlist.
- **Playlist ID:** You must paste in the ID of the playlist.
- **Total Feeds:** Set the number of videos you want to retrieve (e.g., "10").

Similar to Channel, to fetch the Playlist, you need the Playlist ID. You can do it in the following two steps:

#### Step 1 ​

To add **Playlist ID** from your Channel, click on your Channel and then click on the **YouTube Studio**.

This will take you to the **Channel Dashboard**. From the left side, click on the **Playlists** to collect the **URL**.

This will take you straight to the **WPManageNinja Channel Playlists**. Next, click the Playlist that you want to display on your website.

Now copy the selected **URL** and insert it on the **Playlist ID**. Next, click on the **Fetch Videos** button.

Make sure you select the URL after the list= and the ID will look like “PLXpD0vT4thWEu4gAkLE0Eq7PRCFp_8j2z”. After you have completed it, don’t forget to click on the **Save** button.

#### Step 2 ​

Go to the YouTube channel and click on the **Playlists** to obtain the **Playlist ID**.

This will take you straight to the **WPManageNinja Channel Playlists**. Next, click the **Playlist** that you want to display on your website.

In the screenshot, you can see the **URL**. Now copy the selected URL and insert it on the **Playlist ID**. Make sure you click on the **Fetch Videos**.

Remember, select the URL after the list= and the ID will look like “**PLXpD0vT4thWF0mLcvKKSbt281wt1bMcfP**”. After that, click to the **Save** button.

### 3. Search Term ​

This feed type displays videos that match a specific search keyword.

- **Feed Type:** Select Search.
- **Search Term:** Enter the keyword you want to search for (e.g., "WordPress Plugins"). The feed will show the top results for this term.

Once you select the **Search Feed, Search Term** will automatically appear. In this field, you need to fill up with the search term in order to fetch the videos to your YouTube feed.

For example, if you put **NinjaTables** on the Search Term and click on the **Fetch Videos**. The search result will display all the Ninjatables related videos. After that, click to the **Save** button.

### 4. Specific Videos ​

This feed type lets you hand-pick one or more specific videos to display.

- **Feed Type:** Select Specific Videos.
- **Video ID:** Paste in the ID of the video you want to show.

#### How to Find a Video ID ​

Now it’s time to select the **Feed Type: Specific Videos**. Similar to Search Feed, once you select the **Specific Videos,** the **Video ID** menu will appear.

In this field, you can select a particular video to fetch on your YouTube feed. To obtain a **Video ID,** go to **YouTube** and select the **Video**.

However, you can also add multiple videos to your Feed. To do that, add more videos after a comma on the **Video ID** section. For example, **nn0q2FOPfUA, rE8j6zFjKac&t=156s.**

For demonstration purposes, we will go with a single **Video ID**.

From the **Video URL,** copy the selected **URL** and paste it to insert it on the **video ID**. After you have pasted the Video ID, click on the **Fetch Videos** to display the videos on the YouTube Feed.

Keep in mind, only select the ID after the **v=** and the Video ID looks like “**nn0q2FOPfUA**”. Click to the **Save** button.

NOTE

To add multiple videos, paste in multiple Video IDs separated by a comma (e.g., nn0q2FOPfUA,rE8j6zFjKac).
### 5. Live Streams ​

This feed type allows you to display upcoming, live, or completed live streams from a specific channel.

- **Feed Type:** Select Live Streams.
- **Channel ID:** **Paste** in the Channel ID of the channel (see the "Channel" section above for how to find this).
- **Event Type:** Choose what you want to show: - **Completed:** Show recently finished live streams.
- **Upcoming:** Show scheduled live streams.
- **Live:** Will only show a video if one is currently live.
- **None:** Will not filter by event type.

After you have configured your feed type, you can continue to the **Filters** and **Settings** tabs to customize the layout. Click the **Save** button when you are finished.

---

## YouTube Feed Settings ​

**Source:** [https://docs.wpsocialninja.com/guide/social-feeds/youtube-settings.html](https://docs.wpsocialninja.com/guide/social-feeds/youtube-settings.html)

# YouTube Feed Settings ​

The **YouTube Global Settings** panel allows you to control the default caching and image optimization settings for all of your YouTube feeds at once. These settings are located in the main plugin dashboard, not in the individual template editor.

## Access the Feed Settings ​

To find these settings, from your WordPress dashboard, navigate to **WP Social Ninja**→**Settings**. Click on the **Feed Platforms** tab. Then, select **YouTube Settings**. Here, you will find the **Feed Settings**.

Here is a breakdown of each setting available in this panel.

## YouTube Settings ​

This section controls the main performance settings for all your YouTube feeds.

### Check New Feeds Every ​

This dropdown controls the default auto-sync schedule. It determines how often WP Social Ninja will check YouTube for new videos (e.g., 6 Hours, 1 Day, 1 Week). Setting a longer interval can improve your site's loading speed.

### Clear Cache ​

This button will immediately clear all stored YouTube feed cache from your website.

**Use Case:** Click this button if your feeds are not showing new videos and you want to force the plugin to fetch the latest content from YouTube immediately.

### Optimize Image ​

This toggle enables or disables image optimization for your YouTube feeds.

NOTE

As the setting explains, if you enable this, your page will load faster. However, videos will not play directly in the feed, and carousel posts will only show the first image.
### Reset Local Images ​

This button will clear all locally stored images associated with the YouTube platform.

**Use Case:** You should click this if your images are not updating correctly or if you want to force the plugin to delete all stored images and fetch new ones from YouTube.

---

