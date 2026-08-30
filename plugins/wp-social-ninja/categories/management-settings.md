# Management Settings

*Category from WP Social Ninja documentation*

---

## Advanced Settings ​

**Source:** [https://docs.wpsocialninja.com/guide/management-settings/advanced-settings.html](https://docs.wpsocialninja.com/guide/management-settings/advanced-settings.html)

# Advanced Settings ​

This guide will walk you through all the options on the **Advanced Settings** page. This is the main control center for your entire WP Social Ninja plugin, allowing you to manage global performance (Image Format), privacy (GDPR), and how your data is stored.

You can find this page by navigating to:

**WP Social Ninja → Settings → Advanced Settings**

## Settings ​

Here is a detailed explanation of each feature on this page.

### 1. Image Format for Optimized Images (Recommended) ​

This section controls how the plugin handles images from all your feeds and reviews to make your site load faster.

**Optimize Image Format Type**

- **What it is:** This is a powerful performance feature. It lets you choose the file format that WP Social Ninja will use to save optimized copies of your images (like Instagram photos, Google review avatars, etc.).
- **How it works:** When the plugin fetches an image, it will automatically convert it to the format you select here and save it on your own server. This process (especially with **WebP**) creates much smaller image files, which makes your entire website load significantly faster for your visitors.
- **Our Recommendation:** We strongly recommend selecting the **WebP** format. This is a modern image format created by Google that provides the best balance of high image quality and incredibly small file sizes.

### 2. GDPR Compliance ​

This section provides a simple but powerful tool to help you comply with the GDPR (General Data Protection Regulation), a European privacy law.

**GDPR (Toggle)**

- **What it is:** This is your main privacy switch.
- **How it works:** When you turn this toggle **On**, the plugin will change its behavior to better protect your users' privacy. Instead of loading images directly from external platforms (like Facebook, Google, or Instagram), the plugin will first save copies of those images locally to your own website's server.
- **Why this is important:** This means your visitors' browsers won't have to connect to those external sites just to see an image. This helps you comply with data protection rules by preventing the automatic sharing of a user's data (like their IP address) with those third-party platforms.

### 3. Manage Data ​

This section contains a powerful tool for managing your plugin's data.

**Delete all Platform Data? (Button)**

- **What it is:** This is a "Master Reset" button for your entire WP Social Ninja plugin.
- **Important Warning:** Please be extremely careful with this button. This action is permanent and **cannot be undone**.
- **What it does:** When you press this button, it will permanently and completely erase all data the plugin has saved from all platforms (Facebook, Instagram, X (Twitter) etc.). This includes: - All of your connected accounts (you will have to reconnect every single platform).
- All of your cached feeds (all saved posts, tweets, and videos).
- All of your cached reviews.
- All optimized images that are stored on your server.
- **Use Case:** You should only use this button if you are experiencing a major, unfixable problem and have been instructed by support to "start fresh," or if you are permanently uninstalling the plugin and want to make sure all its data is removed from your database.

---

## Configure Cloudflare Turnstile ​

**Source:** [https://docs.wpsocialninja.com/guide/management-settings/configure-cloudflare-turnstile.html](https://docs.wpsocialninja.com/guide/management-settings/configure-cloudflare-turnstile.html)

# Configure Cloudflare Turnstile ​

WP Social Ninja now supports **Cloudflare Turnstile**, a user-friendly, privacy-focused alternative to traditional CAPTCHAs. This feature ensures your **Native Review Forms** remain protected from spam bots without requiring visitors to solve complex puzzles.

Follow these steps to set up and enable Turnstile on your website.

## Step 1: Generate Keys in Cloudflare ​

Before configuring the plugin, you must obtain your unique API keys from your Cloudflare account.

1. Log in to your [Cloudflare dashboard](https://dash.cloudflare.com/login) and navigate to the **Turnstile** section under **Application Security**.
2. Click **+ Add Widget**.

1. Enter a **Widget Name** to identify it in the future.
2. Click **+ Add Hostnames** and enter your website’s domain (e.g., 
```
crm-test-march08.wp1.site
```

).

1. Click **Add** and then **Add** again to confirm.

1. Select your preferred **Widget Mode**: - **Managed (Recommended):** Cloudflare decides the best verification method based on traffic risk.
- **Non-interactive:** Shows a loading spinner; no user interaction is required.
- **Invisible:** Verification happens silently without any visual indication on the screen.
2. Click **Create** to generate your **Site Key** and **Secret Key** and **Copy** these key.

## Step 2: Configure Turnstile in WP Social Ninja ​

Once you have your keys, you need to validate them within the plugin's global settings.

1. From your WordPress dashboard, go to **WP Social Ninja → Settings → Reviews Platforms → Global Review Settings**.
2. Locate the **Native Form CAPTCHA Settings** section.
3. Paste your **Site Key** and **Secret Key** into the designated fields.
4. Choose the **Theme** (Auto, Light, or Dark) and the **Appearance** (Managed, Always, or Interaction Only) for the widget.
5. Complete the **Validation Preview** challenge to verify the keys are working.
6. Once the status shows **"Turnstile settings validated and saved successfully,"** click **Validate & Save**.

## Step 3: Enable Turnstile on Your Review Form ​

After the global configuration is complete, you must enable the protection on your individual forms.

1. Go to **WP Social Ninja → Review Forms** and open the form you wish to protect.
2. In the right-hand editor panel, navigate to **General → Spam Protection**.
3. Select **Turnstile** from the **CAPTCHA** dropdown menu.
4. You will see a note confirming that **"Turnstile keys are managed from Global Review Settings"**.
5. Click the **Save** button at the top right of the form builder to apply the changes.

NOTE

If you ever need to update your keys or change providers, you can click the **Turnstile Settings** link within the form builder to jump directly back to the global configuration page.

---

## Manager Settings (Granting User Permissions) ​

**Source:** [https://docs.wpsocialninja.com/guide/management-settings/manager.html](https://docs.wpsocialninja.com/guide/management-settings/manager.html)

# Manager Settings (Granting User Permissions) ​

This guide will show you how to use WP Social Ninja's powerful **Manager** settings.

By default, only the website **Administrator** can see and access the WP Social Ninja plugin. This is for security. However, you might want a staff member, a store manager, or a blog editor to be able to create or manage your social feeds without giving them full admin access to your entire website.

The Manager feature allows you to give specific permissions to specific users on your site, giving you full control over who can do what.

> Use Case: You have an "Editor" who manages your website's blog. You want them to be able to create new X (Twitter) feed templates, but you don't want them to be able to change your plugin's global settings or connect new accounts.With this feature, you can add them as a Manager, enter their email, and check only the "Manage Templates" box. Now, that user can log in and create templates, but they won't even see the "Platforms" or "Settings" pages.

## How to Add a New Manager ​

Follow these simple steps to add a new manager and set their permissions.

### Step 1: Go to Manager Settings ​

First, go to your WordPress dashboard. In the left-hand menu, click on **WP Social Ninja**, and then select the **Settings** sub-menu.

In the Settings sidebar, expand **General Settings** and click **Managers**. This will take you to the main "Managers" page.

### Step 2: Click "New Manager" ​

To add a new person, click the **+ New Manager** button located in the top-right corner of the page.

### Step 3: Enter the Manager's Email ​

A pop-up window titled **"Add New Manager"** will appear.

In the **User Email** field, enter the email address of the person you want to add.

> Important Note: The email address you enter must be registered as a user on your WordPress website (e.g., as an "Editor," "Author," or "Subscriber"). You cannot add an email for someone who does not have an existing user account on your site.

### Step 4: Assign Specific Permissions ​

Once you enter their email, a list of **Permissions** will appear in the pop-up. This is where you decide exactly what this manager is allowed to do.

Click the checkbox next to each permission you want to grant.

You can choose any combination. For example, you can give a user permission to "Manage Templates" but not "Manage Platforms" or "Manage Settings."

#### What Each Permission Grants ​

- **Full Access:** Everything below. Use sparingly.
- **Manage Platforms:** Connect, disconnect and sync your social and review accounts.
- **Manage Reviews:** View, edit, approve and delete reviews.
- **Manage Testimonials:** View, edit and delete testimonials.
- **Manage Templates:** Create and edit feed and review templates.
- **Manage Notification Popup:** Create and edit notification popups.
- **Manage Chat Widgets:** Create and edit social chat widgets.
- **Manage QR Codes:** Create QR codes and open the QR code section of Advanced Settings.
- **Manage Feeds Platforms Settings:** Change the global settings for your social feeds.
- **Manage Reviews Platforms Settings:** Change the global settings for your review platforms.
- **Manage Shoppable Settings:** Change your shoppable feed settings.
- **Manage Translation Settings:** Edit the plugin's front-end wording.
- **Manage License Settings:** View and change your licence key.
- **Manage Advanced Settings:** Change advanced options, including the option to delete all plugin data.

Each permission gives access only to its assigned screen

Each permission allows access only to the screen it is assigned to. For example, **Manage Translation Settings** gives access to the Translation screen only. It does not provide access to the License Key, Advanced Settings, or other platform settings.

The **Settings** sidebar also shows only the screens available to the user based on their permissions.WARNING

**Manage Advanced Settings** includes the option that deletes all plugin data. Grant it only to people you would trust with that.TIP

Reviews and Testimonials have separate permissions. If a user needs access to both, or needs to manage the shared [Categories](/guide/business-reviews/organize-reviews-with-categories), make sure you grant both permissions.
### Step 5: Confirm and Add the Manager ​

After you have selected the permissions, click the **Confirm** button.

The pop-up will close, and you will see your new manager has been added to the **Managers List** on the main "Manager" page.

## Edit or Delete an Existing Manager ​

Once a manager is added, you can easily change their permissions or remove them at any time.

Each manager's row shows their granted permissions as small tags, with a **+N** tag if there are more than fit on the row.

1. Go to **WP Social Ninja → Settings**, expand **General Settings**, and click **Managers**.
2. Find the manager you want to edit or delete in the **Managers** list.
3. On the right side of their row, click the **three-dot menu (...)** button.
4. A small dropdown menu will appear with two options: **Edit Manager** and **Delete Manager**. - If you click **"Edit Manager"**: The pop-up will re-open, allowing you to add or remove permissions by checking/unchecking the boxes. Click **Confirm** to save your changes.
- If you click **"Delete Manager"**: The manager will be instantly removed from the list, and they will no longer have any special access to the WP Social Ninja plugin.

---

## How to use a Shortcode ​

**Source:** [https://docs.wpsocialninja.com/guide/management-settings/shortcode-usage.html](https://docs.wpsocialninja.com/guide/management-settings/shortcode-usage.html)

# How to use a Shortcode ​

You need to use **Shortcodes** in order to display your reviews on your website.

After configuring reviews / recommendations, you need to embed them on your website. Your **Shortcodes** will allow you to put them anywhere, on any page, and edit accordingly.

## How to use Shortcode ​

Let’s look at how we can use shortcodes to display reviews on the website.

- To use your Shortcode, first, go to [Templates](../getting-started/templates-overview).

*List of Shortcode*

- Here, you can see all the **Shortcodes**.
- You can **Click** to copy the shortcode or **Edit** your previous Templates. The best part is you don't have to create a new **Shortcode** again.

*Edit button*

## Where to put Shortcodes ​

- You can keep your **Shortcode** anywhere, like any page, page builder, post, or maybe on the sidebar.

*Place Shortcode*

- Here, click on **Pages, select New Page,** and paste your Shortcode as shown in the screenshot above.

And then you're all set!

---

## Translate Settings ​

**Source:** [https://docs.wpsocialninja.com/guide/management-settings/translation.html](https://docs.wpsocialninja.com/guide/management-settings/translation.html)

# Translate Settings ​

This guide will show you how to use WP Social Ninja's built-in **Translation** settings.

This feature makes it incredibly easy to change the default English text on your feeds (like "Load More", "View on X", or "See More") to any other language you want. Instead of needing complex translation files, you can just type in your preferred words, and the plugin will automatically display them on your website's front-end.

> Use Case: Imagine your website is in Spanish. You don't want your buttons to say "Load More." Using this feature, you can go to the "Load More" string and type in "Cargar Más". After saving, all your "Load More" buttons will automatically show "Cargar Más," making your social feeds blend in perfectly with the rest of your site's language.

## How to Translate Your Strings ​

Follow these simple steps to translate your feed's text.

### Step 1: Go to General Settings ​

First, go to your WordPress dashboard. In the left-hand menu, click on **WP Social Ninja**, and then select the **Settings**.

### Step 2: Find the Translation Section ​

On the **General Settings** tab (it's the default tab). You find the section titled **Translation**.

### Step 3: Enter Your Translated Words ​

Here, you will see a list of default English "Strings" on the left (like "See More", "Load More", "View on TikTok", etc.).

On the right side of each string is an empty text field. Simply type your new, translated word into the field that matches the string you want to change.

**Example:**

- Next to the **Load More** string, you could type "Cargar Más" (for Spanish).
- Next to the **View on Instagram** string, you could type "Voir sur Instagram" (for French).
- Next to the **See More** string, you could type "Mehr sehen" (for German).

You only need to fill in the fields you want to change. You can leave any others blank, and they will keep their default English text.

### Step 4: Save Your Settings ​

Once you have entered all your translations, scroll to the bottom of the page and click the blue **Save Settings** button.

## Your Changes Are Now Live! ​

That's all it takes! The changes are instant. Now, when a visitor views your social feeds on your website, they will see the translated words you just entered instead of the English defaults. Your "Load More" button will now say "Cargar Más," providing a fully native language experience for your audience.

---

