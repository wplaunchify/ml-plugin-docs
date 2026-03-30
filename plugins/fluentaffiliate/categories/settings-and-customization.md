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

![Migrator Settings Overview](/assets/access-migration-settings-1.CFxwZmy2.webp)

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

Data cleanup is irreversible. Always make sure to back up your database before proceeding with a wipe.![Wipe Data Confirmation](/assets/affiliate-manager.Dqz4NWAu.gif)

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

![Migrator Settings Overview](/images/settings-and-customization/migrator/migrator-settings-overview.webp)

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

![Wipe Data Confirmation](/images/settings-and-customization/migrator/wipe-data-confirmation.gif)

### Troubleshooting ​

Here are solutions to common issues you might encounter during migration:

- **Migration Not Starting:** Ensure you have sufficient permissions and that all prerequisites are met.
- **Process Stuck:** Try refreshing the page and starting the process again.
- **Data Not Appearing:** Verify that the migration completed successfully and check your source data.

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

![Default Email Settings](/images/settings-and-customization/email/email-settings-overview.webp)

### Email Branding and Content ​

Customize the look and feel of your emails with a logo and a custom footer.

- **Email Header Logo:** Upload an image to be displayed in the email header.
- **Email Footer:** Customize the email footer text to include your brand or additional information using the rich text editor. To create a dynamic footer, you can use shortcodes like 
```
{{site_name}}
```

. You can also disable the "powered by FluentAffiliate" text from the footer.

![Email Customization](/images/settings-and-customization/email/email-footer.webp)

### Admin Notification Settings ​

Configure where and how often administrators receive email notifications and performance summaries.

- **Admin Email Address:** Set the address where FluentAffiliate will send admin notifications. You can use commas to list multiple email addresses.
- **Performance Summary Email Digest:** Select how often you want to receive the performance summary email. The option shown is "Daily".

![Admin Notifications](/images/settings-and-customization/email/admin-email.webp)

After adjusting your settings, click the **Save Settings** button to apply the changes.

---

## Group Settings ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/group-settings](https://docs.fluentaffiliate.com/guide/settings-and-customization/group-settings)

# Group Settings ​

FluentAffiliate lets you create affiliate groups with different commission rates. You can easily assign a group to any affiliate to apply the group's rate settings. This feature helps you manage different tiers of affiliates with varying commission.

When creating a new affiliate or editing an existing one:

1. Look for the **Affiliate Type** field in their profile
2. Select the desired group from the dropdown
3. The selected group's commission rate will automatically apply to that affiliate commission structures.

## Accessing Affiliate Group Settings ​

To access the Affiliate Group settings, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Affiliate Groups**.

![Group Settings](/images/settings-and-customization/group/group-settings-overview.webp)

### Creating a New Affiliate Group ​

From the Affiliate Groups page, click the **Add New Group** button. You will need to configure the following details:

- **Name:** Enter a name for your affiliate group.
- **Rate Type:** Choose whether the commission will be a: - Flat amount
- Percentage
- **Rate:** Set the commission value (percentage or flat rate per referral).
- **Status:** Select the group's status: - Active
- Inactive
- **Note:** Add optional notes for the group.

Once you have filled in the details, click the **Create** button to save the group.

![Group Creation](/images/settings-and-customization/group/create-new-group.webp)

### Managing Existing Groups ​

After creating a group, it will appear in a list in the Affiliate Groups section. To manage an existing group, find it in the list, click the three-dot menu, and choose to either **Edit** the group settings or **Delete** the group.

![Group Management](/images/settings-and-customization/group/group-management.webp)

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

![Enable Multi Domain](/images/settings-and-customization/multi-domain/multi-domain-manage-1.webp)

1. A pop-up titled "Connect a new site" will appear. It will have a field asking for the child site's 'config JSON'. For now, simply keep this pop-up open on your main site. We need to go get this special code from your child site first.

![Cofig JSON popup](/images/settings-and-customization/multi-domain/multi-domain-manage-2.webp)

### Step 2: Install FluentConnect on Your Child Site ​

Now, open a new browser tab and log in to the WordPress dashboard of the child site you wish to connect. The goal here is to install the helper plugin and generate the unique connection code.

1. On your child site's dashboard, you need to install the **FluentConnect Addon**. This lightweight plugin is designed specifically to create a secure bridge between your child site and your main FluentAffiliate dashboard. You can download this addon by clicking the "[Learn more about this module](https://github.com/WPManageNinja/fluent-affiliate-connector)" link on the main site's Domain Management page. Then, go to **Plugins > Add New**, upload the addon's .zip file, and activate it.

![Installing FluentConnect Addon](/images/settings-and-customization/multi-domain/multi-domain-manage-3.webp)

1. Once the addon is activated, a new menu item will appear. Navigate to **Settings → FluentAffiliate Connector** from the left sidebar.
2. This screen is dedicated to the connection process. You will see a large text box labeled **This site config (Copy this code and paste in your main site)**. This JSON code is a unique fingerprint for your child site. Copy this entire code.

![Config JSON](/images/settings-and-customization/multi-domain/multi-domain-manage-4.webp)

### Step 3: Generate the Connection Token on the Main Site ​

With the config JSON copied, return to the browser tab with your main site's dashboard, where the pop-up should still be open.

1. Paste the JSON code you just copied from your child site into the text field labeled "Please provide the child site's config JSON".
2. Click the **Issue New Connect Config** button. Your main site will now securely communicate with your child site using the code you provided.

![Issue New Connect](/images/settings-and-customization/multi-domain/multi-domain-manage-5.webp)

1. After a moment, you will see a **Success** message and a new field will appear containing a secure token. This token is a one-time key to authorize the connection. Click the **Copy** button to copy this server token.

![Server Token](/images/settings-and-customization/multi-domain/multi-domain-manage-6.webp)

### Step 4: Finalize the Connection on the Child Site ​

For the final step, go back to your child site's dashboard to complete the secure handshake.

1. Return to the **FluentAffiliate Connector** page (
```
Settings → FluentAffiliate Connector
```

). Paste the new token you copied from your main site into the field labeled **Connection Token from Main Website**.
2. Click the **Validate Token and Enable Connection** button. The addon will verify the token with your main site.

![Validate Token and Enable Connection](/images/settings-and-customization/multi-domain/multi-domain-manage-7.webp)

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

![Notification](/images/settings-and-customization/email/notification-settings/notification-settings-1.webp)

### Customizing an Email Notification ​

Clicking the pencil icon opens the **Update Email Notification** pop-up, where you can tailor the email's subject and body.

- **Enable this email notification:** At the top of the pop-up, this checkbox allows you to enable or disable the specific email you are editing.
- **Email Subject:** You can customize the subject line of the email. Dynamic information can be added here by using SmartCodes.

![Customize Email Notification](/images/settings-and-customization/email/notification-settings/notification-settings-2.webp)

#### Email Body Type ​

You have two options for the email's content:

- **Default Body:** This option uses a standard, pre-written template for the email notification.
- **Customized Body:** Selecting this option reveals a rich text editor, allowing you to create a completely custom email body from scratch. The editor includes standard formatting tools, an "Add media" button, and "Visual" and "Code" tabs.

![Email Body](/images/settings-and-customization/email/notification-settings/notification-settings-3.webp)

#### Using SmartCodes ​

To create dynamic and personalized emails, you can use SmartCodes to insert information like user names or affiliate stats directly into the Email Subject and the Customized Body.

- Click the **+ SmartCode** or **Add SmartCodes** button to reveal a list of available codes.
- Simply click a SmartCode from the list to insert it into your email content.

![Notification Shortcode](/images/settings-and-customization/email/notification-settings/notification-settings-4.webp)

After you have finished customizing the notification, click the **Save Settings** button to apply your changes.

---

## Permission Management ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/permission-management](https://docs.fluentaffiliate.com/guide/settings-and-customization/permission-management)

# Permission Management ​

Permission Management allows you to securely delegate the administration of your affiliate program to other team members without giving them full WordPress admin privileges. By default, only site administrators have complete control over FluentAffiliate. With this feature, you can appoint specific users as "Managers" and grant them granular access to view or manage different parts of your affiliate system.

Once a manager is assigned permissions, their view of the FluentAffiliate dashboard will be tailored specifically to what they are allowed to access; **they will only see the menus and data corresponding to their granted permissions**.

## Accessing Permission Management ​

To access this feature, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Permission Management**.

![Permission Management](/images/settings-and-customization/permission-management/permission-management-1.webp)

When you first visit the page, you will see a prompt to add your first manager.

1. Click the **“+ Add Manager”** button to begin. This will open the "Add Manager" sidebar.
2. **Select a User:** In the "Select User" field, search for and choose an existing WordPress user on your site that you want to appoint as a manager.
3. **Assign Permissions:** Below the user selection, you will see a list of available permissions. Check the boxes for the specific capabilities you want to grant to this manager. You can assign a combination of read-only and full-access permissions.
4. Once you have configured their access, click the **“Add Manager”** button at the bottom of the sidebar to save. A success message will confirm that the manager has been added.

![Permission Management](/images/settings-and-customization/permission-management/permission-management-2.webp)

### Managing Existing Managers ​

After a manager is added, they will appear in a list on the Permission Management screen. For each manager, you can quickly see their name and all the permissions they currently have, displayed as tags.

To modify a manager’s access, use the icons on the right:

- **Edit Manager (Pencil Icon):** Click this to re-open the sidebar for that specific manager. You can then add or remove permissions by checking or unchecking the boxes and saving your changes.
- **Delete Manager (Trash Can Icon):** Click this to remove the user’s manager role. This will revoke all their FluentAffiliate permissions but **will not** delete their WordPress user account.

![Permission Management](/images/settings-and-customization/permission-management/permission-management-3.webp)

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

- **Referral Variable:** Define the variable used in referral links. The example shown is 
```
ref
```

.
- **Default Referral Format:** Choose the default format for how referral links will be generated. Here you will get two options for default referral format "Affiliate ID" and "WordPress Username".
- **Rate:** Set the standard commission rate for referrals, which can be a percentage or a fixed amount. The example value is 20 percent.

![Referral Settings](/images/settings-and-customization/referral/referral-settings-overview.webp)

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

![Recurring Settings](/images/settings-and-customization/referral/recurring-commission-settings.webp)

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

![Cost and Tax Settings](/images/settings-and-customization/referral/recurring-commission-settings.webp)

#### Affiliate Commission on Subscription Renewal ​

This feature allows you to reward affiliates for recurring subscription payments.

NOTE

To use this feature, you need [FluentAffiliate Pro](https://fluentaffiliate.com/discount-deal/). It is available for [FluentCart](https://fluentcart.com/pricing/) users.- **Enable Option:** Check the box to award affiliate commissions for subscription renewals.
- **Renewal Rate:** Set the specific commission rate (Flat or Percentage) for these recurring referrals.
- **Maximum Renewal Referrals:** Set the maximum number of times an affiliate can earn from a single subscription. Enter 0 for unlimited renewal commissions.

After configuring all your settings, click the **Save Settings** button to apply the changes.

![Subscription Renewal](/images/settings-and-customization/referral/comission-Renewal.webp)

---

## Registration Settings ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/registration-settings](https://docs.fluentaffiliate.com/guide/settings-and-customization/registration-settings)

# Registration Settings ​

The Registration Settings section gives you complete control over your affiliate registration form. You can enable or disable registrations, set approval requirements, and customize the form fields to collect the information you need from new affiliates.

## Accessing Registration Settings ​

To configure these options, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Registration Settings**.

### General Registration Options ​

At the top of the page, you will find the two primary settings that control your entire affiliate registration process.

- **Enable Affiliate Registration:** This acts as the master switch for your affiliate program's public registration.

- When this option is **enabled**, the affiliate registration form will be active and accessible, allowing new users to sign up.
- If you **disable** this option, it will prevent any new users from registering as affiliates.
- **Require admin approval for new affiliates:** This setting gives you direct control over your affiliate vetting and approval workflow.

- **When Enabled (Manual Approval):** If you check this box, you have full control over who joins your program. New applicants will have their status set to "pending." You will then need to navigate to their individual affiliate profile to manually review their application and approve them. This is the recommended setting if you want to screen your affiliates before they can start promoting your site.
- **When Disabled (Automatic Approval):** If you leave this box unchecked, the approval process is hands-off. Any user who successfully completes the registration form will instantly become an active affiliate and can begin generating referral links immediately.

![Registration Settings](/images/settings-and-customization/registration-settings/registration-settings.webp)

### Managing Registration Fields ​

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

As noted in the pop-up, some system-defined fields may have limitations, such as only allowing label edits.

After making your customizations, remember to click the **Save Settings** button at the bottom of the page to apply all changes.

---

## Solid Affiliate Migration ​

**Source:** [https://docs.fluentaffiliate.com/guide/settings-and-customization/solid-affiliate-migration](https://docs.fluentaffiliate.com/guide/settings-and-customization/solid-affiliate-migration)

# Solid Affiliate Migration ​

The Solid Affiliate Migration tool in FluentAffiliate helps you move your existing affiliate data from Solid Affiliate into FluentAffiliate. It also allows you to clean up old or unnecessary data during the process.

FluentAffiliate includes a built-in migration option for Solid Affiliate. This guide will walk you through the available options and the migration process.

## Accessing Migrator Settings ​

To access the Migrator Settings, navigate from your WordPress dashboard to **FluentAffiliate → Settings → Migrator Settings**.

![Migrator Settings Overview](/assets/access-migration-settings-1.CFxwZmy2.webp)

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

Data cleanup is irreversible. Always make sure to back up your database before proceeding with a wipe.![Wipe Data Confirmation](/assets/solid-affiliate-migration.CiSl_IEu.gif)

### Troubleshooting ​

Here are solutions to common issues you might encounter during the migration process:

- **Migration Not Starting:** Ensure you have sufficient administrative permissions and that the Solid Affiliate plugin is still installed on your site.
- **Process Stuck:** If the progress bar stops, try refreshing the page and starting the process again.
- **Data Not Appearing:** Verify that the migration summary showed successful numbers and check your Affiliates or Referrals tabs to see the imported records.

---

