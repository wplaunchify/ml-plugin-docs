# Social Chat

*Category from WP Social Ninja documentation*

---

## Social Chat Overview ​

**Source:** [https://docs.wpsocialninja.com/guide/social-chat/](https://docs.wpsocialninja.com/guide/social-chat/)

# Social Chat Overview ​

The **Social Chat** feature in **WP Social Ninja** allows you to add a live chat widget to your WordPress website. This makes it easy for your visitors to contact you directly using their favorite messaging apps.

Instead of a single "live chat" system, you can connect multiple social channels into one powerful, all-in-one chat button.

## Key Features Overview ​

**Connect 15+ Chat Channels:** You can add many popular messaging apps to your widget, including:

- Messenger
- WhatsApp
- Telegram
- Instagram
- Slack
- ...and many more.

**Create Multiple Chat Widgets:** You are not limited to just one widget. You can create different chat widgets for different purposes or pages on your site.

**Customize Your Widget:** You have full control over the chat widget's design and behavior. You can:

- Choose a layout style (like a chat box or just icons).
- Customize all the colors to match your brand.
- Set your available (online) and offline hours.
- Write custom welcome and greeting messages.
- Choose which pages the widget appears on.

### How it Works ​

1. **Go to Platforms:** First, you go to **WP Social Ninja → Platforms→Social Chat** to connect the channels you want to use (like adding your WhatsApp number or Messenger username).
2. **Go to Templates:** Next, you go to **WP Social Ninja →Chat Widgets** to create a new [template](./chat-widget-configuration).
3. **Build Your Widget:** In the template editor, you add your connected channels, customize the [style](./chat-styling), and set your online [hours](./chat-settings).
4. **Embed (No Shortcode Needed):** Unlike feeds, the chat widget is often enabled globally. You can set its display rules (like "show on all pages") directly from the template editor.

---

## Add a Custom Button Chat Widget to Your Website ​

**Source:** [https://docs.wpsocialninja.com/guide/social-chat/add-custom-button-chat-widget.html](https://docs.wpsocialninja.com/guide/social-chat/add-custom-button-chat-widget.html)

# Add a Custom Button Chat Widget to Your Website ​

Want to open your WP Social Ninja chat widget from a "Contact Us" button or a special link on your page? While the floating bubble is great, this powerful feature lets you trigger the chat window from any button, anywhere on your site.

This gives you full control to integrate your chat support directly into your site's design and content. Let's see how to set it up.

NOTE

Before you begin, you must have your Chat Widget set up and your channels (like Messenger, WhatsApp, etc.) already configured in WP Social Ninja. This custom button will trigger your existing, active widget.
## Step 1: Go to Your Page ​

First, go to your WordPress dashboard. Navigate to **Pages → Add Page** to create a new page, or simply edit an existing page where you want to place your button.

## Step 2: Add a Button Block ​

Inside the WordPress editor, click the plus icon (**+**) to add a new block. In the search bar, type "Button" and select the **Buttons** block.

Once added, you can customize the button's text (e.g., "Hello," "Chat With Us," or "Get Support").

## Step 3: Add the Custom CSS Class ​

This is the most important step.

Click on the button you just added to select it. On the right-hand sidebar, make sure the **Block** settings tab is selected. Scroll down and click on the **Advanced** section to open it.

Find the field labeled **Additional CSS class(es)**. In this field, type (or copy and paste) the following class exactly: 
```
wpsn_chat_opener
```

## Step 4: Update and Test ​

Click the **Update** or **Publish** button in the top-right corner to save your changes.

Now, visit the live page on your website and click your new button. Your chat widget will pop open, ready for your visitors to start a conversation!

---

## Chat Widget Settings (General) ​

**Source:** [https://docs.wpsocialninja.com/guide/social-chat/chat-settings.html](https://docs.wpsocialninja.com/guide/social-chat/chat-settings.html)

# Chat Widget Settings (General) ​

The General tab for your Chat Widget allows you to control the appearance, content, and display rules for your chat box. These settings are broken down into several sections.

## Access the Chat widget settings ​

To access the chat widget settings from your website, go to the **WP Social Ninja dashboard**. Click on the **Chat Widget** from the top menu bar. Then, click any [chat widget](./chat-widget-configuration) that you configure before.

After clicking the chat widget, select the **General** tab, and you will see all the availableble general settings. Now you can customize your general and global setting for this Chat Widget.

## Template ​

The Template section allows you to choose the overall layout and visual style of your chat widget.

- **Layout Type:** Choose the primary layout for your chat widget. The default is **Chat Box**, which provides a full chat interface. Also, you can select the **Only Icon** option from the dropdown, and it shows only the chat icon.
- **Select a Template:** Pick a pre-made design. You can choose **General**, **Support**, or **Feedback** to get a different color scheme and layout right from the start.

## Chat Header ​

The Chat Header section allows you to customize the top area of the chat widget that users see, building brand identity and trust.

- **Profile/Page Name:** Enter the name you want to display at the top of the chat header, such as your business name or a support agent's name.
- **Caption:** Set a short text that appears below the name. This is often used to set expectations (e.g., "Typically replies within an hour").
- **Profile Picture/Page Logo:** Upload an image to be used as the avatar or logo in the chat header, making your widget easily recognizable.

## Welcome Message ​

This is the first message a visitor sees inside the chat window.

- **Greeting Message:** Use the rich text editor to create a friendly, inviting message. You can format the text (bold, italics, etc.) and use emojis to personalize the greeting that appears above your channel buttons.

## Channel Buttons ​

The **Channel Buttons** section allows you to customize the call-to-action options and prefilled message settings for your chat widget.

- **Display Chat Icon:** A main toggle switch to turn the display of the channel chat icon on or off.
- **Chat Button Text:** Enter call-to-action text that appears alongside your channel button (e.g., "Start Chat with:").

### Prefilled Message ​

When a visitor initiates a conversation from a specific page or product listing, enabling the **Prefilled Message** feature automatically attaches context to the chat so your team gets all the details right away.

- **Prefilled Message Toggle:** Switch this feature **ON** or **OFF** to control whether contextual information is automatically added to the chat.
- **Prefilled Input Placeholder Text:** Customize the placeholder text shown inside the input box before a user sends a message (e.g., "Type a message").
- **WhatsApp Message Context:** Choose a preset context template from the dropdown menu:

- **None:** Disables automated context.
- **Page title and link:** Attaches the current page's title and URL.
- **WooCommerce product details:** Automatically pulls and inserts details from the active WooCommerce product page.
- **FluentCart product details:** Automatically pulls and inserts details from the active FluentCart product page.
- **Custom format:** Enables a custom text template using dynamic placeholders.

### Using Custom Format ​

When **Custom format** is selected, a **Custom Format** input field appears. You can build your own personalized message template using any of the following supported placeholders:

- ```
{page_title}
```

 — Inserts the title of the current page.
- ```
{page_url}
```

 — Inserts the direct URL of the current page.
- ```
{product_title}
```

 — Inserts the product name.
- ```
{product_price}
```

 — Inserts the product price.
- ```
{product_sku}
```

 — Inserts the product SKU.
- ```
{product_stock}
```

 — Inserts the current product stock status.
- ```
{product_url}
```

 — Inserts the direct product URL.

## Chat Bubble Button ​

The Chat Bubble Button section lets you customize the floating button on your website that users click to open the chat widget. You can adjust your Chat Bubble Position in four different ways, from Bottom Right to Bottom Left and Top Left to Top Right.

- **Select Bubble Icon:** Choose from a gallery of pre-set icons (like a message bubble, calendar, or question mark) to find the one that best fits your site.
- **Or Upload Custom Icon:** Upload your own branded or custom icon for a unique look.
- **Bubble Text:** Add optional text that appears next to the bubble icon to encourage users to click (e.g., "Chat with us!").

## Settings ​

This is the most important section. It controls where and how your chat widget appears.

- **Chat Bubble Position:** Choose which corner of the screen the chat bubble will appear on (e.g., "Bottom Right" or "Bottom Left").
- **Chat Language:** Select the display language for the widget's built-in text elements. Click the dropdown option, and you will find many languages to select.

The chat widget automatically inherits the site’s language settings. This means it will function correctly only when the widget language matches the site language configured in WordPress. If the two languages are different, the chat widget may not display or operate as intended.

For websites that need to support more than one language, a multilingual plugin (such as WPML, Polylang, or TranslatePress) must be installed and configured. These plugins allow you to define multiple site languages and ensure the chat widget adapts accordingly, providing a seamless experience for users in their preferred language.
- **Include Pages to Display Chat:** Control where the chat widget appears from the dropdown options.

- **Everywhere:** Shows the widget on all pages (default).
- **Specific Pages/Posts:** Lets you select individual pages, posts, or custom post types where the widget should be visible.
- **Exclude Pages to Hide Chat:** Select specific pages where you do not want the chat widget to appear, even if it's set to show everywhere else.
- **Or Display by Post Type:** Choose to show the widget only on certain post types (e.g., "Posts," "Pages," or "Products").
- **Show Label (Works on chat box):** Toggle to display an additional label on the chat box.
- **Hide Chat on Desktop:** Enable this to hide the chat widget from all users on desktop computers.
- **Hide Chat on Mobile:** Enable this to hide the chat widget from all users on mobile devices.
- **Show Chat Popup:** Toggle to make the chat window pop up automatically after a set time to proactively engage visitors.
- **Chat Open in Popup Window:** Enable this to have the chat open in a new, separate browser window instead of an embedded widget on the page.
- **Show Online/Offline:** Toggle to display your availability status, which can be configured based on your schedule.

## Priority ​

The Priority section helps you manage which chat widget to display if you have created multiple widgets with conflicting display conditions. This setting is only for advanced use.

- **Priority for this Stream:** Set a numerical value. If you have created multiple chat widgets and they are both set to appear on the same page, the widget with the highest priority number will be the one that is shown.

It’s always this easy with WP Social Ninja.

---

## Chat Widget: Style Settings ​

**Source:** [https://docs.wpsocialninja.com/guide/social-chat/chat-styling.html](https://docs.wpsocialninja.com/guide/social-chat/chat-styling.html)

# Chat Widget: Style Settings ​

Want to make your chat widget perfectly match your website's brand? The **Style** tab gives you full control over the colors, helping you create a seamless and professional look for your visitors.

Customizing the appearance is simple. From your [chat widget editor](./chat-widget-configuration), just click the **Style** tab (located next to "General" and "Channels") to access all the color settings. You can also configure [chat settings](./chat-settings) from the General tab.

## Customizing Your Widget's Colors ​

This section allows you to change the color of every part of your chat widget, from the header to the floating bubble button.

To change a color, simply click the color swatch next to any setting. A color picker will pop up, allowing you to select your exact brand color or choose from the palette.

- **Header Background Color:** This changes the background color for the entire header section (the very top bar) of your chat window.
- **Header Title Color:** This sets the text color for the main title (your Profile/Page Name) in the header.
- **Header Caption Color:** This sets the text color for the smaller caption text (like "Typically replies in an hour") right below the title.
- **Channel Icon Background Color:** This controls the background color of the buttons for your individual chat channels (like WhatsApp, Messenger, etc.).
- **Bubble Button Background Color:** This changes the background color of the floating bubble button that appears on your website.
- **Close Button Color:** This sets the color of the 'X' (close) icon within the chat window header.

By adjusting these settings, you can ensure your chat widget doesn't just feel like a third-party tool, but a fully integrated part of your site.

---

## Social Chat Configuration ​

**Source:** [https://docs.wpsocialninja.com/guide/social-chat/chat-widget-configuration.html](https://docs.wpsocialninja.com/guide/social-chat/chat-widget-configuration.html)

# Social Chat Configuration ​

Have you ever wanted to add Messenger, WhatsApp, or any other social chat platform directly to your WordPress website? With **WP Social Ninja’s Social Chat** feature, you can connect multiple chat channels in just a few clicks. It helps you communicate with visitors instantly and improve customer engagement.

This powerful feature allows you to integrate **popular chat platforms** like Messenger, WhatsApp, Telegram, Instagram, Twitter, Slack, and many more. The setup is secure, privacy-friendly, and designed to keep your communication seamless.

The video below shows the setup process using Viber as an example. The same steps apply to all other channels covered in this guide.

## Create a Widget & Add Channels ​

You can create a widget and add a channel in two ways. Both ways are explained below:

### Option 1 ​

To get started, you first create a new chat widget template.

From your WordPress dashboard, navigate to **WP Social Ninja → Chat Widgets**. Click the **Click Here Create a Chat Widget** button. This will take you to the chat template editor.

Inside the editor, select the **Channels** options and click the **+Add New Channel** button.

A pop-up will appear showing all available chat platforms. You can now select a channel from the list to configure it.

### Option 2 ​

You can access this chat widget section directly from your WP Social Ninja dashboard. For this, click on the [Platforms](../getting-started/all-platforms-of-wp-social-ninja). Next, select the **Social Chats** and click on the **Choose Channel** button.

Here, a pop-up will appear showing all available chat platforms. You can now select a channel from the list to configure it.

## Configuring Your Chat Channels ​

Here is how to set up each available channel.

### Messenger ​

Select **Messenger** from the "Add Channel" list. In the **Facebook ID/username or Link** field, enter your Facebook Page ID, Group ID, or personal username. Click the **Save** button.

#### How to Find Your Facebook ID or Username ​

Go to your Facebook Page, Group, or Profile. Look at the URL in your browser:

> For a Page: facebook.com/YourPageNameFor a User: facebook.com/your.username

Copy the text that comes after 
```
facebook.com/
```

 and paste it into the field in the WP Social Ninja configuration field. If you want to customize the **Label Name**, enter your preferred name in the **Label** field. Finally, click the **Save** button to apply your changes.

NOTE

You can also connect your Facebook Chat Widget using your Page ID or Group ID.Once connected, your Messenger chat widget will appear successfully. You can edit or delete it at any time by clicking the Edit or Delete icon.

### WhatsApp Configuration ​

You can add your WhatsApp chat easily by clicking a few times. It helps your business to reach. Adding a WhatsApp chat widget to your site is a great way to connect directly with your customers. To do this, click the **Add New Channel** button and select the **WhatsApp** icon.

In the pop-up, enter your phone number, including your country code. If you want to customize the **Label Name**, enter your preferred name in the **Label** field. Then, click on the **Save** button.

Once connected, a WhatsApp icon will appear on your website. You can edit or delete it at any time by clicking the **Edit** or **Delete** icon.

When visitors click the icon, they will be redirected straight to a WhatsApp chat with you. This makes communication quick and convenient for both you and your customers.

#### Prefilled Message & Context (Pro) ​

Picture this: a visitor messages you on WhatsApp from a product page, and all you see is a blank chat. You don't know which product they're looking at or what they need. The **Prefilled Message** feature fixes that by automatically starting the conversation with the right context.

In your WhatsApp channel settings, turn on the **Prefilled Message** toggle. This adds a small "type a message" input to the button and lets you choose what context is added automatically.

Next, choose a **Message context** format from the dropdown:

- **None** – A plain message with no extra context.
- **Page title and link** – Adds the title and URL of the page the visitor is on.
- **WooCommerce product details** – Adds the current WooCommerce product's details (title, price, SKU, stock, and link).
- **FluentCart product details** – Adds the current FluentCart product's details.

So a shopper browsing a $49 hoodie opens WhatsApp with a message that already says exactly that — instead of a blank box.

Want to write your own template? Choose the **Custom format** option and build the message yourself using these placeholders:

| Placeholder | What it inserts |
| --- | --- |
| {page_title} | The current page's title |
| {page_url} | The current page's URL |
| {product_title} | The product name |
| {product_price} | The product price |
| {product_sku} | The product SKU |
| {product_stock} | The product's stock status |
| {product_url} | The product's URL |

You can also customize the **placeholder text** shown inside the message input (for example, "Type a message"). When you're happy with your settings, click **Save**.

NOTE

Prefilled message context is a **Pro** feature — on the free version, the context stays set to **None**. The **WooCommerce** and **FluentCart** product options require the matching plugin to be active. This same feature is also available on the [SMS](#sms-pro-configuration) channel.
### Telegram Configuration ​

If you want to communicate through Telegram, you can easily add it to your chat widget. First, click **Add New Channel** and select the **Telegram** icon.

Then, enter your **Telegram User ID or Profile Link** in the input field. If you want to customize the **Label Name**, enter your preferred name in the **Label** field and click **Save**.

After saving, your Telegram chat button will appear on the website, allowing visitors to contact you directly through the Telegram app. You can edit or delete it at any time by clicking the Edit or Delete icon.

### Instagram Page Configuration ​

You can also add your Instagram profile to your chat widget, allowing visitors to connect with you on this popular platform. First, click **Add New Channel** and select the **Instagram** icon.

Then, enter your **Instagram Username or Profile Link** in the input field. If you want to customize the **Label Name**, enter your preferred name in the **Label** field and click **Save**.

After saving, your Instagram chat button will appear on the website, allowing visitors to see your profile or contact you directly. You can edit or delete it at any time by clicking the Edit or Delete icon.

### Instagram DM (Pro) Configuration ​

For a more direct line of communication, you can add Instagram Direct Message (DM) to your chat widget. This Pro feature lets customers message you privately. First, click **Add New Channel** and select the **Instagram DM** icon.

Then, enter your **Instagram Username or Profile Link** in the input field. If you want to customize the **Label Name**, enter your preferred name in the **Label** field and click **Save**.

After saving, your Instagram DM chat button will appear on the website, allowing visitors to send you a direct message through the Instagram app. You can edit or delete it at any time by clicking the **Edit** or **Delete** icon.

### Twitter Configuration ​

Connect your Twitter account to let visitors start a conversation or follow you directly from the chat widget. First, click **Add New Channel** and select the **Twitter** icon.

Then, enter your **Twitter Username or Profile Link** in the input field. If you want to customize the **Label Name**, enter your preferred name in the **Label** field and click **Save**.

After saving, your Twitter chat button will appear on the website, allowing visitors to contact you directly on Twitter. You can edit or delete it at any time by clicking the Edit or Delete icon.

### Slack Configuration ​

If your team uses Slack, you can add it to your chat widget to receive messages from visitors directly. First, click **Add New Channel** and select the **Slack** icon.

Then, enter your **Slack Username or Link** in the input field. If you want to customize the **Label Name**, enter your preferred name in the **Label** field and click **Save**.

After saving, your Slack chat button will appear on the website, allowing visitors to contact you directly through the Slack app. You can edit or delete it at any time by clicking the Edit or Delete icon.

### Microsoft Teams Configuration ​

You can add your Microsoft Teams account to your website to communicate with customers or colleagues. First, click **Add New Channel** and select the **Microsoft Teams** icon.

Then, enter your **Microsoft Teams URL** in the input field. If you want to customize the **Label Name**, enter your preferred name in the **Label** field and click **Save**.

After saving, your Microsoft Teams chat button will appear on the website, allowing visitors to contact you directly. You can edit or delete it at any time by clicking the Edit or Delete icon.

### Phone Configuration ​

Add a direct call button to your chat widget, allowing visitors to call you with a single click. First, click **Add New Channel** and select the **Phone** icon.

In the pop-up, enter your **Phone number**, including your country code. If you want to customize the **Label Name**, enter your preferred name in the **Label** field. Then, click on the **Save** button.

After saving, your Phone icon will appear on the website. When visitors click the icon, it will prompt them to start a phone call with you. You can edit or delete it at any time by clicking the **Edit** or **Delete** icon.

### SMS (Pro) Configuration ​

You can add an SMS chat widget to your site, allowing customers to send you a text message directly. To do this, click the **Add New Channel** button and select the **SMS** icon.

In the pop-up, enter the phone number where you want to receive messages, including your country code. If you want to customize the **Label Name**, enter your preferred name in the **Label** field. Then, click on the **Save** button.

Once connected, an SMS icon will appear on your website. When visitors click the icon, it will open their phone's default messaging app, ready to send you a text. You can edit or delete it at any time by clicking the **Edit or Delete** icon.

TIP

Just like WhatsApp, the SMS channel supports the **Prefilled Message & Context** options (Pro), so texts can open pre-filled with the current page or product details. See [Prefilled Message & Context](#prefilled-message-context-pro) above for the full list of formats and placeholders.
### Email Configuration ​

Add an Email channel to let visitors quickly send you a message directly to your inbox. First, click **Add New Channel** and select the **Email** icon.

Then, enter your **Email Address** in the input field. If you want to customize the **Label Name**, enter your preferred name in the **Label** field and click **Save**.

After saving, your Email chat button will appear on the website. When clicked, it will open the visitor's default email client with your email address pre-filled. You can edit or delete it at any time by clicking the Edit or Delete icon.

### WeChat Configuration ​

If you want to communicate through WeChat, you can easily add it to your chat widget. First, click **Add New Channel** and select the **WeChat** icon.

Then, enter your **WeChat User ID** in the input field. If you want to customize the **Label Name**, enter your preferred name in the **Label** field and click **Save**.

After saving, your WeChat chat button will appear on the website, allowing visitors to contact you directly through the WeChat app. You can edit or delete it at any time by clicking the **Edit or Delete** icon.

### Line Configuration ​

If you want to communicate through Line, you can easily add it to your chat widget. First, click **Add New Channel** and select the **Line** icon.

Then, enter your **Line ID or Link** in the input field. If you want to customize the **Label Name**, enter your preferred name in the **Label** field and click **Save**.

After saving, your Line chat button will appear on the website, allowing visitors to contact you directly through the Line app. You can edit or delete it at any time by clicking the **Edit or Delete** icon.

### Snapchat Configuration ​

Connect your Snapchat account to let visitors add you or send you a message directly from the chat widget. First, click **Add New Channel** and select the **Snapchat** icon.

Then, enter your **Snapchat Username** in the input field. If you want to customize the **Label Name**, enter your preferred name in the **Label** field and click **Save**.

After saving, your Snapchat chat button will appear on the website, allowing visitors to connect with you on Snapchat. You can edit or delete it at any-time by clicking the **Edit or Delete** icon.

### LinkedIn Configuration ​

To configure LinkedIn, you can easily add it to your chat widget to help build your professional network. First, click **Add New Channel** and select the **LinkedIn** icon.

Then, enter your **LinkedIn username or Profile Link** in the input field. If you want to customize the **Label Name**, enter your preferred name in the **Label** field and click **Save**.

After saving, your LinkedIn chat button will appear on the website, allowing visitors to view your profile and connect. You can edit or delete it at any time by clicking the **Edit or Delete** icon.

### Viber Configuration ​

You can add your Viber chat easily, helping your business reach customers on this platform. To do this, click the **Add New Channel** button and select the **Viber** icon.

In the pop-up, enter your **Viber mobile number**, including your country code. If you want to customize the **Label Name**, enter your preferred name in the **Label** field. Then, click on the **Save** button.

Once connected, a Viber icon will appear on your website. When visitors click the icon, they will be redirected straight to a Viber chat with you. You can edit or delete it at any time by clicking the Edit or Delete icon.

### Fluent Forms Configuration ​

You can embed a contact form directly into your chat widget using the Fluent Forms integration. This allows you to collect visitor information right from the chat box.

First, you must have the **Fluent Forms** plugin installed and have already created a form.

In your Fluent Forms plugin settings, find the form you want to use and copy its **Shortcode** (e.g., 
```
[fluentform id="3"]
```

).

NOTE

In Fluent Forms Pro, you will find the Social Ninja Ratings field, which you can select for your website review.Now, go to WP Social Ninja chat editor, click **Add New Channel**, and select the **Fluent Forms** icon.

In the pop-up, paste your copied Fluent Form shortcode into the input field. If you want to customize the **Label Name** (e.g., "Contact Us"), enter your preferred name in the **Label** field. Then, click the **Save** button.

After saving, a Fluent Forms icon will appear in your chat widget. When a visitor clicks it, the form will open directly inside the chat box, allowing them to send you a message. You can edit or delete it at any time by clicking the **Edit or Delete** icon.

Now let’s look at how it looks on the front end if you pick Chatbox Layout Type. When you click on Chat Icon, a Chat Box will pop up. After that, when you click on the Fluent Forms icon, you will see a pop-up box named **Contact Us**.

Now, if you choose **Only Icon** Layout Type, you can only see the Chat Icon on the frontend. But once you click the **Fluent Forms Icon**, a **Contact Us** box will pop up.

This is how easy it is to configure all the Social Chat platforms with just a few clicks!

---

