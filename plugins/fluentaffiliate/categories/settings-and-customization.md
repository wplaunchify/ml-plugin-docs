# Settings And Customization

*Category from FluentAffiliate documentation*

---

## Affiliate Manager Migration ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/affiliate-manager-migration](https://docs.fluentaffiliate.com/guide/settings-and-customization/affiliate-manager-migration)

# Affiliate Manager Migration ​

The Affiliate Manager Migration tool in FluentAffiliate helps you move your existing affiliate data from **Affiliate Manager** into **FluentAffiliate**. It also allows you to clean up old or unnecessary data during the process.

FluentAffiliate includes a built-in migration option for Affiliate Manager. This guide will walk you through the available options and the migration process.

## Accessing Migrator Settings ​

To access the Migrator Settings, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Migrator Settings**.

## Migrating from Affiliate Manager ​

### Migration Using WP CLI (Recommended) ​

We recommend using WordPress CLI to migrate from Affiliate Manager for better performance.

**To start the migration, run the following WP CLI command on your site:**

bash
```
wp fluent_affiliate migrate_from_affiliate_manager
```NOTE

This CLI migration will remove all existing data from FluentAffiliate before starting the migration. This command will migrate all of your Affiliate Manager data, including affiliates, referrals, payouts, and visits, to FluentAffiliate.
---

### Migration Using Web UI ​

FluentAffiliate provides a streamlined Web UI to move your data from Affiliate Manager with just a few clicks.

#### Step 1: Select Migration Source ​

On the Migrator Settings page, you will see a dropdown menu under "**Please select an option**". Click the dropdown and select **Affiliate Manager**.

#### Step 2: Initialize Migration ​

Click the **Migrate** button to begin. A pop-up will appear displaying an overview of the data available for migration, including:

- Total Affiliates
- Total Referrals
- Total Payouts
- Total Visits
- Total Customers

You also have the option to check **Reset Current Migration** if you need to restart a previous attempt. Click **Confirm** to proceed.

#### Step 3: Confirm and Monitor ​

A final confirmation box will appear, warning you that this action cannot be undone. Click **Yes, Migrate**.

- **Monitor Progress:** A progress window will show the status of each data type (Affiliates, Referrals, Customers, Payouts, and Visits) as they are moved to FluentAffiliate.
- **Completion:** Once finished, a "**Migration Completed**" message will display a summary of the total metrics migrated. Click **Close** to return to the dashboard.

### Data Cleanup ​

If you need to start fresh or resolve conflicts before migrating, you can use the **Wipe Existing Data** tool.

1. Click the three-dot (vertical ellipsis) menu in the top-right corner of the Migration Settings card.
2. Select **Wipe Existing Data**.
3. A pop-up will show the total data currently stored in FluentAffiliate.
4. Click **Confirm** to permanently remove the data.

WARNING

Data cleanup is irreversible. Always make sure to back up your database before proceeding with a wipe.
### Troubleshooting ​

Here are solutions to common issues you might encounter during the migration process:

- **Migration Not Starting:** Ensure you have sufficient administrative permissions and that the Affiliate Manager plugin is still installed on your site.
- **Process Stuck:** If the progress bar stops, try refreshing the page and starting the process again.
- **Data Not Appearing:** Verify that the migration summary showed successful numbers and check your Affiliates or Referrals tabs to see the imported records.

---

## AffiliateWP Migration ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/affiliatewp-migration](https://docs.fluentaffiliate.com/guide/settings-and-customization/affiliatewp-migration)

# AffiliateWP Migration ​

The AffiliateWP Migration Settings in FluentAffiliate allow you to easily import data from other affiliate plugins and perform cleanup tasks. Currently, FluentAffiliate supports migration from **AffiliateWP**. This guide will walk you through the available options.

## Accessing Migrator Settings ​

To access the Migrator Settings, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Migrator Settings**.

## Migrating from AffiliateWP ​

## Migration Using WP CLI (Recommended) ​

We recommend to use WordPress CLI to migrate from AffiliateWP for better performance.

**To start the migration just run the following WP CLI command on your site:**

bash
```
wp fluent_affiliate migrate_from_affiliatewp
```NOTE

This CLI migration will remove all existing data from FluentAffiliate before starting the migration. This command will migrate all of your AffiliateWP data, including affiliates, referrals, payouts, and visits, to FluentAffiliate.
---

## Migration Using Web UI ​

FluentAffiliate provides a streamlined Web UI to move your data from Affiliate Manager with just a few clicks.

#### Step 1: Select Migration Source ​

On the Migrator Settings page, you will see a dropdown menu under "Please select an option". Click the dropdown and select AffiliateWP.

#### Step 2: Initialize Migration ​

Click the **Migrate** button to begin. A pop-up will appear displaying an overview of the data available for migration, including:

- Total Affiliates
- Total Referrals
- Total Payouts
- Total Visits
- Total Customers

You also have the option to check **Reset Current Migration** if you need to restart a previous attempt. Click **Confirm** to proceed.

#### Step 3: Confirm and Monitor ​

A final confirmation box will appear, warning you that this action cannot be undone. Click **Yes, Migrate**.

- **Monitor Progress:** A progress window will show the status of each data type (Affiliates, Referrals, Customers, Payouts, and Visits) as they are moved to FluentAffiliate.
- **Completion:** Once finished, a "**Migration Completed**" message will display a summary of the total metrics migrated. Click **Close** to return to the dashboard.

### Data Cleanup ​

This section also includes a **Wipe Data** tool to clean up your FluentAffiliate data. To use it, select the data you wish to remove, confirm your choice, and wait for the process to finish.

> Warning: Data cleanup is irreversible. Always make sure to back up your data before proceeding.

### Troubleshooting ​

Here are solutions to common issues you might encounter during migration:

- **Migration Not Starting:** Ensure you have sufficient permissions and that all prerequisites are met.
- **Process Stuck:** Try refreshing the page and starting the process again.
- **Data Not Appearing:** Verify that the migration completed successfully and check your source data.

---

## Captcha Settings ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/captcha-settings](https://docs.fluentaffiliate.com/guide/settings-and-customization/captcha-settings)

# Captcha Settings ​

Are fake bot accounts cluttering your affiliate program? Dealing with spam sign-ups is a huge pain for any site owner. FluentAffiliate gives you a simple way to protect your affiliate registration form from spam and bot sign-ups by using a captcha challenge. This keeps the bots out and ensures only real people join your team.

## Accessing Captcha Settings ​

To find these security options, go to your WordPress dashboard. From the FluentAffiliate menu, click on **Settings**, open the **Registration Settings** dropdown on the left sidebar, and select **Captcha**.

## How to Configure Your Captcha ​

Setting up your captcha only takes a few minutes. Here is a breakdown of exactly what you need to fill out on this page:

- **Enable captcha on registration:** Check this box to turn on the security challenge for your sign-up form.
- **reCAPTCHA Version:** Choose the type of challenge you want your users to experience. You can pick the **v2 Checkbox** (the classic "I'm not a robot" box) or **v3** (which works invisibly in the background based on a score).
- **Site Key & Secret Key:** Paste your specific Google reCAPTCHA keys into these two fields. If you do not have these keys yet, you can easily generate them from the Google reCAPTCHA admin console by visiting [google.com/recaptcha/admin](https://google.com/recaptcha/admin). See the [Google reCAPTCHA Integration](/guide/integrations/google-recaptcha-integration-with-fluentaffiliate) guide for step-by-step instructions.
- **Validate Keys:** Click this handy button to double-check that the Site Key and Secret Key you just entered are correct and working properly.
- **Failure Message:** Type in the text you want users to see if they fail the security check. By default, it will say "Security check failed. Please try again.".

Once you have entered your keys and chosen your settings, make sure to click the **Save Settings** button at the very bottom to apply your changes.

---

## Email Settings ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/email-settings](https://docs.fluentaffiliate.com/guide/settings-and-customization/email-settings)

# Email Settings ​

The Email Settings section allows you to configure the global settings for all emails sent by FluentAffiliate, including sender details, branding, and admin notifications.

## Accessing Email Settings ​

To access this section, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Email Settings**.

### Default Sender Settings ​

These settings control the default identity for all outgoing emails to ensure proper delivery and branding.

- **From Name:** Enter the name that will appear as the sender of outgoing emails.
- **From Email Address:** Enter the email address that will be used as the sender of outgoing emails.
- **Reply to Name:** Enter the name to be used when recipients reply to your emails.
- **Reply to Email:** Enter the email address to be used for replies to your emails.

### Email Branding and Content ​

Customize the look and feel of your emails with a logo and a custom footer.

- **Email Header Logo:** Upload an image to be displayed in the email header.
- **Email Footer:** Customize the email footer text to include your brand or additional information using the rich text editor. To create a dynamic footer, you can use shortcodes like 
```
{{site_name}}
```

. You can also disable the "powered by FluentAffiliate" text from the footer.

### Admin Notification Settings ​

Configure where and how often administrators receive email notifications and performance summaries.

- **Admin Email Address:** Set the address where FluentAffiliate will send admin notifications. You can use commas to list multiple email addresses.
- **Performance Summary Email Digest:** Select how often you want to receive the performance summary email. The option shown is "Daily".

After adjusting your settings, click the **Save Settings** button to apply the changes.

---

## Group Settings ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/group-settings](https://docs.fluentaffiliate.com/guide/settings-and-customization/group-settings)

# Group Settings ​

Managing a growing affiliate program means realizing that not all affiliates are the same. Some partners bring in more sales, while others might be part of a special promotional team. Instead of manually changing commission rates for every single person, you can use Affiliate Groups to keep things organized.

Affiliate Groups let you bundle your partners into tiers - like a VIP tier or an onboarding tier—and give each group its own special commission rules.

## Accessing Affiliate Groups ​

Setting up groups is simple and only takes a few steps from your site's backend:

1. Log in to your **WordPress Dashboard**.
2. Go to **FluentAffiliate → Settings** from the left-hand menu.
3. Click on **Affiliate Groups** from the left sidebar panel.

## Creating a New Affiliate Group ​

If you want to build a new tier for your partners, follow these quick steps:

1. Click the **Add New Group** button on your Affiliate Groups dashboard.
2. A form panel will slide in from the right side of your screen. Fill out the following options:

- **Name:** Enter a clear name for your group so you can recognize it later (e.g., "VIP High Rollers" or "First Group").
- **Rate Type:** Choose how the affiliates in this group will be rewarded. You can pick a **Flat** amount or a **Percentage**.
- **Rate:** Type the numerical commission value based on the rate type you picked (e.g., enter 10 for a flat $10 payout or 10% rate).
- **Status:** Set the starting status of this group. You can choose from **Active, Pending, Cancelled, or Rejected**.

### Custom Lifetime Commissions for Groups ​

If you want members of this specific group to get rewarded for future direct purchases made by customers they originally brought in, scroll down to the custom section:

Check the box for "**Enable custom lifetime commission for this group**".

- **Lifetime Rate:** Set the specific reward value (Percentage or Fixed amount) for any repeat purchases made by their referred customers without a link.
- **Expiration:** Enter the number of days this lifetime relationship should stick around before resetting. If you leave this field empty or type 
```
0
```

, the connection never expires!

Once you are done adjusting all the fields, click the **Create** button to save your new group.

### Managing and Assigning Groups ​

After hitting save, your newly created tier will appear in a neat list on your main Affiliate Groups section.

- **Editing or Deleting Tiers:** If you want to change a group's rate or remove it completely? Just click the **three-dot** action menu next to the group name to select **Edit** or **Delete**.
- **Putting Affiliates Into Groups:** When you are creating a new affiliate profile or editing an existing user, just find the **Affiliate Type** dropdown field and choose your group from the menu. The group's custom payout rules will automatically replace your global site rates for that specific partner!

### Assigning a Group to an Affiliate ​

When creating a new affiliate or editing an existing one, you can assign them to a group:

1. In the affiliate's profile, look for the **Rate Type** field.
2. Select the desired group from the dropdown menu.

The selected group's commission rate will automatically apply to that affiliate.

---

## Multi-Domain Management ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/multi-domain-management](https://docs.fluentaffiliate.com/guide/settings-and-customization/multi-domain-management)

# Multi-Domain Management ​

The **Multi-Domain Management** feature is designed to track affiliate referrals that originate from different websites that you own.

The core principle is straightforward: An affiliate can link to any of your connected "Child Sites" (like a blog), but the final transaction **must** occur on your "Main Site" (your primary store) for a commission to be generated. The system seamlessly tracks the user's journey between these sites.

## How This Works in Practice ​

Let's use two websites for a clear example:

- **siteX.com (Your Main Site):** This is your primary online store where products are sold and payments are processed. The full FluentAffiliate plugin is installed here.
- **siteY.com (Your Child Site):** This is a content blog you own, used to review products or attract new visitors.

Here is the step-by-step customer journey:

1. An affiliate shares their unique link, which points to a helpful article on your blog, 
```
siteY.com
```

.
2. A customer clicks this affiliate link and lands on 
```
siteY.com
```

. At this moment, the system identifies the **visitor** and links them to that specific affiliate.
3. The customer reads the article and clicks a link that takes them to the product page on your main store, 
```
siteX.com
```

.
4. The customer successfully completes their purchase on 
```
siteX.com
```

.

Because the final sale happened on the Main Site (
```
siteX.com
```

), FluentAffiliate correctly attributes the commission to the affiliate who sent the initial click to the Child Site (
```
siteY.com
```

).

### How It Works ​

This system operates on a "hub and spoke" model to ensure all data is managed from one central place.

- **The Main Site (The Hub):** This is the website with the full FluentAffiliate plugin installed. It functions as the central command center, managing all affiliates, tracking sales data, and handling commission payouts. All purchases must be finalized here.
- **Child Sites (The Spokes):** These are your secondary websites. They do not need the full plugin. Instead, they use a simple, free helper plugin called the [FluentConnect Addon](https://github.com/WPManageNinja/fluent-affiliate-connector).

The sole purpose of the **FluentConnect Addon** on a child site is to inform the main site whenever a visitor arrives through an affiliate link. This allows the main site to be aware of the referral and credit the correct affiliate if that visitor later makes a purchase on the main site.

### Step 1: Enable Multi-Domain on Your Main Site ​

Your first step is to enable the multi-domain functionality within your main FluentAffiliate dashboard and prepare it to accept a new connection.

1. To begin, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Domain Management**.
2. Find the **Enable Multi Domain Affiliate** option and click the toggle switch to activate the service. This tells your main site that it's ready to manage other domains.
3. Next, click the **+ Connect a new site** button to begin the process of linking a new child site.

1. A pop-up titled "Connect a new site" will appear. It will have a field asking for the child site's 'config JSON'. For now, simply keep this pop-up open on your main site. We need to go get this special code from your child site first.

### Step 2: Install FluentConnect on Your Child Site ​

Now, open a new browser tab and log in to the WordPress dashboard of the child site you wish to connect. The goal here is to install the helper plugin and generate the unique connection code.

1. On your child site's dashboard, you need to install the **FluentConnect Addon**. This lightweight plugin is designed specifically to create a secure bridge between your child site and your main FluentAffiliate dashboard. You can download this addon by clicking the "[Learn more about this module](https://github.com/WPManageNinja/fluent-affiliate-connector)" link on the main site's Domain Management page. Then, go to **Plugins > Add New**, upload the addon's .zip file, and activate it.

1. Once the addon is activated, a new menu item will appear. Navigate to **Settings → FluentAffiliate Connector** from the left sidebar.
2. This screen is dedicated to the connection process. You will see a large text box labeled **This site config (Copy this code and paste in your main site)**. This JSON code is a unique fingerprint for your child site. Copy this entire code.

### Step 3: Generate the Connection Token on the Main Site ​

With the config JSON copied, return to the browser tab with your main site's dashboard, where the pop-up should still be open.

1. Paste the JSON code you just copied from your child site into the text field labeled "Please provide the child site's config JSON".
2. Click the **Issue New Connect Config** button. Your main site will now securely communicate with your child site using the code you provided.

1. After a moment, you will see a **Success** message and a new field will appear containing a secure token. This token is a one-time key to authorize the connection. Click the **Copy** button to copy this server token.

### Step 4: Finalize the Connection on the Child Site ​

For the final step, go back to your child site's dashboard to complete the secure handshake.

1. Return to the **FluentAffiliate Connector** page (
```
Settings → FluentAffiliate Connector
```

). Paste the new token you copied from your main site into the field labeled **Connection Token from Main Website**.
2. Click the **Validate Token and Enable Connection** button. The addon will verify the token with your main site.

1. Once validated, the page will refresh to confirm the link is active, displaying the message: **Your site is connected with [Main Site Name]**. The connection is now complete!

With the connection finalized, you can return to your main site's **Domain Management** page. You will now see your newly connected child site listed in the **All Connected Sites** table. You can now add a description and logo for the site so that your affiliates can easily identify and promote this new site as well.

---

## Notification Settings ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/notification-settings](https://docs.fluentaffiliate.com/guide/settings-and-customization/notification-settings)

# Notification Settings ​

The Notification Settings section provides granular control over the automated emails sent from FluentAffiliate. Here, you can enable, disable, and fully customize the content of emails for various events that occur within your affiliate program, ensuring both admins and affiliates stay informed.

## Accessing Notification Settings ​

To begin managing your email notifications, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Email Notifications → Notification Settings**.

### Managing the Notification List ​

The main screen displays a list of all available automated emails. The notifications available include:

- New Affiliate Signup Notification Email
- New Sale Notification Email to Admin
- Affiliate Application Pending Notification Email
- Affiliate Account Approved Notification Email
- New Sale Notification Email to Affiliate
- Affiliate Payout Notification Email

For each notification, you can see its **Title**, the intended **Receiver** (either "Site Admin" or "Affiliate"), and an **Enable** toggle to quickly activate or deactivate it.

To modify a specific email, click the **pencil icon** on the right.

### Customizing an Email Notification ​

Clicking the pencil icon opens the **Update Email Notification** pop-up, where you can tailor the email's subject and body.

- **Enable this email notification:** At the top of the pop-up, this checkbox allows you to enable or disable the specific email you are editing.
- **Email Subject:** You can customize the subject line of the email. Dynamic information can be added here by using SmartCodes.

#### Email Body Type ​

You have two options for the email's content:

- **Default Body:** This option uses a standard, pre-written template for the email notification.
- **Customized Body:** Selecting this option reveals a rich text editor, allowing you to create a completely custom email body from scratch. The editor includes standard formatting tools, an "Add media" button, and "Visual" and "Code" tabs.

#### Using SmartCodes ​

To create dynamic and personalized emails, you can use SmartCodes to insert information like user names or affiliate stats directly into the Email Subject and the Customized Body.

- Click the **+ SmartCode** or **Add SmartCodes** button to reveal a list of available codes.
- Simply click a SmartCode from the list to insert it into your email content.

After you have finished customizing the notification, click the **Save Settings** button to apply your changes.

---

## Permission Management ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/permission-management](https://docs.fluentaffiliate.com/guide/settings-and-customization/permission-management)

# Permission Management ​

Permission Management allows you to securely delegate the administration of your affiliate program to other team members without giving them full WordPress admin privileges. By default, only site administrators have complete control over FluentAffiliate. With this feature, you can appoint specific users as "Managers" and grant them granular access to view or manage different parts of your affiliate system.

Once a manager is assigned permissions, their view of the FluentAffiliate dashboard will be tailored specifically to what they are allowed to access; **they will only see the menus and data corresponding to their granted permissions**.

## Accessing Permission Management ​

To access this feature, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Permission Management**.

When you first visit the page, you will see a prompt to add your first manager.

1. Click the **“+ Add Manager”** button to begin. This will open the "Add Manager" sidebar.
2. **Select a User:** In the "Select User" field, search for and choose an existing WordPress user on your site that you want to appoint as a manager.
3. **Assign Permissions:** Below the user selection, you will see a list of available permissions. Check the boxes for the specific capabilities you want to grant to this manager. You can assign a combination of read-only and full-access permissions.
4. Once you have configured their access, click the **“Add Manager”** button at the bottom of the sidebar to save. A success message will confirm that the manager has been added.

### Managing Existing Managers ​

After a manager is added, they will appear in a list on the Permission Management screen. For each manager, you can quickly see their name and all the permissions they currently have, displayed as tags.

To modify a manager’s access, use the icons on the right:

- **Edit Manager (Pencil Icon):** Click this to re-open the sidebar for that specific manager. You can then add or remove permissions by checking or unchecking the boxes and saving your changes.
- **Delete Manager (Trash Can Icon):** Click this to remove the user’s manager role. This will revoke all their FluentAffiliate permissions but **will not** delete their WordPress user account.

#### Understanding the Available Permissions ​

The permissions you assign below directly control which menu items and data a manager can see and interact with inside the FluentAffiliate dashboard.

- **Read Access to All Affiliates:** Allows the manager to view the list of affiliates and their profiles.
- **Read & Write Access to All Affiliates:** Allows the manager to view, edit, approve, and reject affiliates.
- **Read Access to All Referrals:** Allows the manager to view all referral records.
- **Read & Write Access to All Referrals:** Allows the manager to view, edit, approve, and reject referrals.
- **Read Access to All Visits:** Allows the manager to view the affiliate link click/visit logs.
- **Read Access to All Payouts:** Allows the manager to view payout histories.
- **Read & Write Access to All Payouts:** Allows the manager to view, generate, and manage payouts.
- **Manage All Data and Settings:** Grants comprehensive access to all of the above, including FluentAffiliate's global settings.

---

## Referral Settings ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/referral-settings](https://docs.fluentaffiliate.com/guide/settings-and-customization/referral-settings)

# Referral Settings ​

The Referral Settings section allows you to configure the core rules and formats for your affiliate program, including how commissions are calculated, links are structured, and tracking is handled.

## Accessing Referral Settings ​

To access this section, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Referral Settings**.

### Link & Commission Settings ​

These settings define the structure of your affiliate links and the default commission rates.

Watch how to build a commission structure that keeps affiliates motivated:

- **Referral Variable:** Define the variable used in referral links. The example shown is 
```
ref
```

.
- **Default Referral Format:** Choose the default format for how referral links will be generated. Here you will get two options for default referral format "Affiliate ID" and "WordPress Username".
- **Rate:** Set the standard commission rate for referrals, which can be a percentage or a fixed amount. The example value is 20 percent.

### Financial Formatting ​

Configure how monetary values and numbers are displayed across the plugin.

- **Currency:** Select the primary currency for your store's transactions and affiliate payouts. "United States Dollar" is the example shown.
- **Number Format:** Choose the character style for separating thousands in numerical values. Options include US Style (1,000,00.00) and EU Style (1.000,00,00).
- **Currency Symbol Position:** Choose whether the currency symbol appears Before ($10) or After (10$) the amount.
- **Payout Method:** This setting allows you to choose how your affiliates will receive their earnings. You can select your preferred method from the dropdown menu: - **PayPal:** A common method for sending automated or manual payments via email.
- **Bank Transfer:** If you select this option, affiliates will provide their bank details for payouts instead of an email address.

### Tracking & Credit Rules ​

Define the logic for how affiliates are credited for referrals and how long they are tracked.

- **Credit:** Determine which affiliate receives credit for a referral. You can credit the **First Affiliate** or the **Last Affiliate**.
- **Cookie Duration:** Set the duration of the cookie used to track referrals, specified in days. The example shows a duration of 30 days.

### Page, Cost, & Subscription Settings ​

This section allows you to configure page assignments, cost exclusions, and rules for self-referrals and subscriptions.

- **Affiliate Area:** Select the page you want to use for your affiliate portal. You can use the 
```
[fluent_affiliate_portal]
```

 shortcode on this page. Clicking the plus icon will open an "Add Page" pop-up where you can enter a new "Page Title" and click "Add" to create it.
- **Exclude Shipping:** Enable this option to exclude shipping costs from the calculation of referral commissions.
- **Exclude Tax:** Enable this to exclude tax amounts from the calculation of referral commissions.
- **Disable Self Referral:** Enable this to prevent affiliates from earning commissions on their own purchases.

#### Affiliate Commission on Subscription Renewal ​

This feature allows you to reward affiliates for recurring subscription payments.

NOTE

To use this feature, you need [FluentAffiliate Pro](https://fluentaffiliate.com/pricing/).- **Enable Option:** Check the box to award affiliate commissions for subscription renewals.
- **Renewal Rate:** Set the specific commission rate (Flat or Percentage) for these recurring referrals.
- **Maximum Renewal Referrals:** Set the maximum number of times an affiliate can earn from a single subscription. Enter 0 for unlimited renewal commissions.

Once activated, you’ll find this feature available in WooCommerce and FluentCart integration settings.

### Lifetime Commissions ​

The **Lifetime Commissions** feature allows affiliates to continue earning commissions from customers they originally referred. Once a customer is linked to an affiliate, that affiliate will receive commissions on future purchases made by the customer, even if they return and purchase directly without using a referral link.

NOTE

You must have [FluentAffiliate Pro](https://fluentaffiliate.com/pricing/) installed and activated to use this feature.- **Enable Lifetime Commissions:** **Turn** on this option to enable lifetime commissions across your affiliate program. The customer's first purchase will follow your standard commission rules, while future direct purchases will use the lifetime commission settings.
- **Lifetime Rate:** Set a dedicated lifetime commission rate (either a fixed amount or a percentage) applied to future direct purchases.
- **Expiration:** Specify how long the affiliate-customer relationship remains active after the initial referral. Enter the number of days the tracking should remain valid. Leave the field empty or set it to **0** to keep the relationship active indefinitely.

After configuring all your choices, click the **Save Settings** button at the bottom of the screen to apply your changes.

---

## Registration Settings ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/registration-settings](https://docs.fluentaffiliate.com/guide/settings-and-customization/registration-settings)

# Registration Settings ​

The Registration Settings section gives you complete control over your affiliate registration form. You can enable or disable registrations, set approval requirements, and customize the form fields to collect the information you need from new affiliates.

## Accessing Registration Settings ​

To configure these options, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Registration Settings → Registration Fields**.

### General Registration Options ​

At the top of the page, you will find the two primary settings that control your entire affiliate registration process.

- **Enable Affiliate Registration:** This acts as the master switch for your affiliate program's public registration.

- When this option is **enabled**, the affiliate registration form will be active and accessible, allowing new users to sign up.
- If you **disable** this option, it will prevent any new users from registering as affiliates.
- **Require admin approval for new affiliates:** This setting gives you direct control over your affiliate vetting and approval workflow.

- **When Enabled (Manual Approval):** If you check this box, you have full control over who joins your program. New applicants will have their status set to "pending." You will then need to navigate to their individual affiliate profile to manually review their application and approve them. This is the recommended setting if you want to screen your affiliates before they can start promoting your site.
- **When Disabled (Automatic Approval):** If you leave this box unchecked, the approval process is hands-off. Any user who successfully completes the registration form will instantly become an active affiliate and can begin generating referral links immediately.

## Managing Registration Fields ​

This section allows you to customize the registration form that potential affiliates will fill out. You can enable, disable, and edit the fields as needed.

#### Activating or Hiding Fields ​

For many fields, such as "How will you promote us?" or "Website URL," you can simply click the toggle switch to activate (show) or hide the field on the registration form.

#### Editing Fields ​

For core system fields like "Full name" or "Email Address," you can click the **Edit** button to modify their properties. This will open the **Edit Registration Field** pop-up.

In this pop-up, you can modify the following options:

- **Label:** Change the display name of the field.
- **Placeholder:** Set the placeholder text that appears inside the input field.
- **Required:** Choose whether the field is mandatory for the user to fill out.
- **Status:** Use this toggle to enable or disable the field on the form.

NOTE

As noted in the pop-up, some system-defined fields have strict rules and might only allow you to edit their labels or placeholders. Other fields, like the Terms and Conditions agreement, give you a full visual text editor to perfectly format your text.
## Adding Custom Fields (Pro) ​

Every affiliate program asks for something different. Maybe you need a tax ID, a payout preference, an audience size, or the main social channel someone promotes on. Instead of chasing down this information over email after you approve an affiliate, FluentAffiliate allows you to collect it right up front!

You can add your own custom fields directly to the registration form so you get all the details you need immediately.

Here is how to build your custom fields:

1. Scroll to the bottom of the Registration Fields list and click the **+ Add Custom Field** button.

1. A form called **"Add Custom Registration Field"** will slide in from the right side of your screen.
2. First, choose your **Field Type** from the dropdown menu. You have eight options to build the perfect form: - Use **Text**, **Textarea**, **Number**, **Date**, and **URL** for open-ended answers.
- Use **Dropdown**, **Radio**, and **Multi Select** when you want to provide specific choices and keep answers tidy. (These choice fields include an options editor so you control exactly what applicants can pick).
3. Fill in the **Label** (which is required) to name your field.
4. Add a **Placeholder** text and a **Help Message** to guide your affiliates on what they need to enter.
5. Choose if the field is **Required** by selecting the "Yes" or "No" radio button.
6. Ensure the **Status** is checked to "Enable this field".
7. Click the **Save** button.

Whatever an affiliate submits through these custom fields will show up right on their profile in your admin dashboard, inside the **Affiliate Info** panel. This means all their answers live right next to the person they belong to!

> For Developers: New filters allow an add-on to validate submitted values, enrich the admin detail view, and extend the portal settings form. This means custom fields can be wired directly into your own custom workflow!

After making any customizations, remember to click the **Save Settings** button at the bottom of the main page to apply all your changes.

---

## SliceWP Migration ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/slicewp-migration](https://docs.fluentaffiliate.com/guide/settings-and-customization/slicewp-migration)

# SliceWP Migration ​

The Migrator Settings in FluentAffiliate allow you to seamlessly import your entire affiliate program from other affiliate plugins without disruption. Currently, FluentAffiliate supports migration from **SliceWP**, helping you bring over your existing data so you can upgrade to a modern affiliate management experience without losing your historical data. This guide will walk you through the available options.

## Accessing Migrator Settings ​

To access the Migrator Settings, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Migrator Settings**.

## Migrating from SliceWP ​

### Migration Using WP CLI (Recommended) ​

We recommend using WordPress CLI to migrate from SliceWP for better performance.

To start the migration, just run the following WP CLI command on your site:

```
wp fluent_affiliate migrate_from_slicewp
```

> NOTE This CLI migration will remove all existing data from FluentAffiliate before starting the migration. This command will migrate all of your SliceWP data, including affiliates, referrals, commissions, visits, affiliate groups, and creatives, to FluentAffiliate.

### Migration Using Web UI ​

FluentAffiliate provides a streamlined Web UI to move your data from SliceWP with just a few clicks.

**Step 1: Select Migration Source** On the Migrator Settings page, you will see a dropdown menu under "Please select an option". Click the dropdown and select **SliceWP**.

**Step 2: Initialize Migration** Click the **Migrate** button to begin. A pop-up will appear displaying an overview of the data available for migration, including:

- Total Affiliates
- Total Referrals
- Total Payouts
- Total Visits
- Total Customers

You also have the option to check **Reset Current Migration** if you need to restart a previous attempt. Click **Confirm** to proceed.

**Step 3: Confirm and Monitor** A final confirmation box will appear, warning you that this action cannot be undone. Click **Yes, Migrate**.

- **Monitor Progress:** A progress window will show the status of each data type (Affiliates, Referrals, Payout, Visits, and Customers) as they are moved to FluentAffiliate.
- **Completion:** Once finished, a "Migration Completed" message will display a summary of the total metrics migrated. Click **Close** to return to the dashboard.

## Data Cleanup ​

This section also includes a **Wipe Data** tool to clean up your FluentAffiliate data. To use it, select the data you wish to remove, confirm your choice, and wait for the process to finish.

**Warning:** Data cleanup is irreversible. Always make sure to back up your data before proceeding.

---

## Solid Affiliate Migration ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/solid-affiliate-migration](https://docs.fluentaffiliate.com/guide/settings-and-customization/solid-affiliate-migration)

# Solid Affiliate Migration ​

The **Solid Affiliate Migration** feature in FluentAffiliate helps you migrate your existing affiliate data from **Solid Affiliate** to **FluentAffiliate**. If needed, you can also remove your existing FluentAffiliate data before starting a new migration to avoid conflicts.

The migration supports **affiliates, referrals, customers, payouts, visits, affiliate groups, commission rate types**, and **referral product names**. If you're using **FluentAffiliate Pro**, your **marketing creatives** are migrated as well, allowing your affiliates to continue using their existing promotional materials after the migration.

This guide walks you through the available migration options and shows you how to migrate your Solid Affiliate data using either the **Web UI** or **WP-CLI**.

## Accessing Migrator Settings ​

To access the Migrator Settings, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Migrator Settings**.

## Migrating from Solid Affiliate ​

### Migration Using WP CLI (Recommended) ​

We recommend using WordPress CLI to migrate from Solid Affiliate for better performance.

**To start the migration, run the following WP CLI command on your site:**

bash
```
wp fluent_affiliate migrate_from_solid_affiliate
```NOTE

This CLI migration will remove all existing data from FluentAffiliate before starting the migration. This command will migrate all of your Solid Affiliate data, including affiliates, referrals, payouts, and visits, to FluentAffiliate.
---

### Migration Using Web UI ​

FluentAffiliate provides a streamlined Web UI to move your data from Solid Affiliate with just a few clicks.

#### Step 1: Select Migration Source ​

On the Migrator Settings page, you will see a dropdown menu under "**Please select an option**". Click the dropdown and select **Solid Affiliate**.

#### Step 2: Initialize Migration ​

Click the **Migrate** button to begin. A pop-up will appear displaying an overview of the data available for migration, including:

- Total Affiliates
- Total Referrals
- Total Payouts
- Total Visits
- Total Customers

You also have the option to check **Reset Current Migration** if you need to restart a previous attempt. Click **Confirm** to proceed.

#### Step 3: Confirm and Monitor ​

A final confirmation box will appear, warning you that this action cannot be undone. Click **Yes, Migrate**.

- **Monitor Progress:** A progress window will show the status of each data type (Affiliates, Referrals, Customers, Payouts, and Visits) as they are moved to FluentAffiliate.
- **Completion:** Once finished, a "**Migration Completed**" message will display a summary of the total metrics migrated. Click **Close** to return to the dashboard.

### Data Cleanup ​

If you need to start fresh or resolve conflicts before migrating, you can use the **Wipe Existing Data** tool.

1. Click the three-dot (vertical ellipsis) menu in the top-right corner of the Migration Settings card.
2. Select **Wipe Existing Data**.
3. A pop-up will show the total data currently stored in FluentAffiliate.
4. Click **Confirm** to permanently remove the data.

WARNING

Data cleanup is irreversible. Always make sure to back up your database before proceeding with a wipe.
### Troubleshooting ​

Here are solutions to common issues you might encounter during the migration process:

- **Migration Not Starting:** Ensure you have sufficient administrative permissions and that the Solid Affiliate plugin is still installed on your site.
- **Process Stuck:** If the progress bar stops, try refreshing the page and starting the process again.
- **Data Not Appearing:** Verify that the migration summary showed successful numbers and check your Affiliates or Referrals tabs to see the imported records.

---

## Ultimate Affiliate Migration ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/ultimate-affiliate-migration](https://docs.fluentaffiliate.com/guide/settings-and-customization/ultimate-affiliate-migration)

# Ultimate Affiliate Migration ​

The Migrator Settings in FluentAffiliate allow you to seamlessly import your entire affiliate program from other affiliate plugins without disruption. Currently, FluentAffiliate supports migration from **Ultimate Affiliate Pro**, helping you bring over your existing data so you can upgrade to a modern affiliate management experience without losing your historical records.

This guide will walk you through everything you need to transfer your affiliates, referrals, visits, payouts, customers, creatives, and affiliate groups from Ultimate Affiliate Pro directly into FluentAffiliate — quickly, safely, and without any data loss.

## Accessing the Migrator Settings ​

To get started, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Migrator Settings**.

WARNING

If you already have data inside FluentAffiliate, please wipe the current data to avoid any conflicts before you begin your new migration.
## Method 1: Migration Using WP-CLI (Recommended) ​

If you have a large database, we highly recommend using the WordPress CLI for smoother and faster performance.

To start the migration, simply run the following command on your site:

bash
```
wp fluent_affiliate migrate_from_ultimate_affiliate
```NOTE

Running this **CLI** migration will automatically remove all existing data from FluentAffiliate before the import begins. This command will seamlessly migrate all of your Ultimate Affiliate data including affiliates, referrals, payouts, and visits straight into FluentAffiliate.
## Method 2: Migration Using the Web UI ​

If you prefer a guided, visual approach, you can run the migration directly from your dashboard screen.

1. On the Migrator Settings screen, locate the **Please select an option** dropdown.
2. Choose **Ultimate Affiliate** from the list.
3. Click the dark **Migrate** button.
4. A popup window titled **Ultimate Affiliate Migration** will appear. This window gives you a clear snapshot of exactly what will be moved over, including your **Total Affiliate Groups**, **Total Affiliates**, **Total Referrals**, **Total Payouts**, **Total Visits**, **Total Customers**, and **Total Creatives**.
5. If you need to restart a previous migration attempt, you can check the **Reset Current Migration** box.
6. Finally, click the **Confirm** button to start the process.

## Data Cleanup ​

This section also includes a **Wipe Data** tool to clean up your FluentAffiliate data. To use it, select the data you wish to remove, confirm your choice, and wait for the process to finish.

WARNING

Data cleanup is irreversible. Always make sure to back up your data before proceeding.
## Troubleshooting Common Issues ​

If you run into any hiccups during the process, here are a few quick solutions:

- **Migration Not Starting:** Ensure you have sufficient permissions and that all prerequisites are met.
- **Process Stuck:** Try refreshing the page and starting the process again.
- **Data Not Appearing:** Verify that the migration completed successfully and double-check your source data.

---

