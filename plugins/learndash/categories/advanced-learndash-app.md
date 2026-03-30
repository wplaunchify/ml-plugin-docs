# Advanced Learndash App

*Category from LearnDash documentation*

---

## How to Create an APNs Auth Key for Your Learndash iOS App

**Source:** [https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-create-an-apns-auth-key-for-your-learndash-ios-app/](https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-create-an-apns-auth-key-for-your-learndash-ios-app/)

## Introduction

An **APNs (Apple Push Notification service) Auth Key** lets your iOS app send push notifications securely and at scale. Instead of managing multiple certificates, a single reusable **.p8 key** simplifies renewals and supports both **Test** and **Release** builds. This guide walks you through generating your APNs key in **Apple Developer** and configuring your **Learndash App** to use it.

## Generating Your APNs Auth Key

1. Log in to **Apple Developer** and click **Account**.
2. Select **Certificates, Identifiers & Profiles**.
3. In the sidebar, click **Keys**.
4. Click the **+** button to create a new key.
5. Enter a **Key Name**.
6. Under **Key Services**, check **Apple Push Notifications service (APNs)**.
7. Click **Continue**, then **Register**.
8. Click **Download** to save the **.p8 file** and store it securely.

**Note:** You’ll see a **Key ID** next to your new key. You’ll need both the **.p8 file** and **Key ID** in the next step.

## Configuring the Learndash App with Your APNs Key

1. In **WordPress**, go to **Learndash App > Settings > Integrations > iOS Push Notifications**.
2. Click **Upload APNs Key**.
3. Select the downloaded **.p8 file**.
4. Enter your **Key ID** (from Apple Developer) and **Team ID** (found under **Apple Developer > Membership**).
5. Click **Save Changes**.

- **Prerequisite:** Ensure your **Bundle ID** matches the one registered in Apple Developer.

![Screenshot of push notifications ](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Create-an-APNs-Auth-Key-for-Your-Learndash-iOS-App-_-1.png)

## Testing Your APNs Key

1. **Request a Test Notification** – In **WP Admin**, navigate to **Learndash App > Push Notifications** and send a test alert.
2. **Verify Delivery** – Confirm the notification appears on both your iOS **Test** and **Release** app installs.

## Troubleshooting and FAQs

**Q: I get an “Invalid key” error when uploading.****** A: Make sure you uploaded the **.p8 file** (not a certificate) and entered the correct **Key ID** and **Team ID**.

**Q: My test device doesn’t receive notifications.****** A: Verify your app build is signed with a provisioning profile that enables **Push Notifications** and that the device is using the correct **Bundle ID**.

**Q: Do I need separate keys per app build?****** A: No. A single **APNs Auth Key** works for all iOS builds (Test or Release) under your **Team ID**.

**Q: How often do I renew the key?****** A: **APNs Auth Keys** do not expire. Regenerate one only if it’s compromised or deleted.

---

## How to Migrate Require Purchase Functionality in Your Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-migrate-require-purchase-functionality-in-your-learndash-app/](https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-migrate-require-purchase-functionality-in-your-learndash-app/)

## Introduction

The **Require Purchase** setting allows you to restrict your entire app behind a single paywall. With **Access Controls**, you now gain the flexibility to set up granular, rule-based restrictions using memberships, courses, or custom logic.

This guide shows you how to migrate your Require Purchase setup to the new Access Controls system using Access Groups and rules.

**Note:** If you don’t plan to enable Access Controls, your current Require Purchase setup will remain active. No action is required unless you want to migrate.

## Prerequisite: Note Your Existing Setting

Before enabling Access Controls:

1. Go to **Learndash App > Settings > In-App Purchases**.
2. Take note of your **Require Purchase** setting.
3. Once Access Controls is enabled, this toggle will disappear, and its logic must be rebuilt manually using Access Groups.

![Screenshot of turning on access controls within the LD App Components](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Migrate-Require-Purchase-Functionality-in-Your-Learndash-App-_-1.png)

## Activating Access Controls

To begin the migration:

1. Go to **Learndash App > Components.******
2. Check **Activate Access Controls**.
3. Click **Save Changes**.
4. If prompted to migrate Require Purchase, click the migration link to continue.

*Your current paywall logic will now be replicated using Access Groups and rules.*

## Build Matching Access Groups

Recreate your previous gating logic:

1. Go to **Learndash App > Access Controls > Access Groups**.

![Screenshot of accessing groups within the Access Controls](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Migrate-Require-Purchase-Functionality-in-Your-Learndash-App-_-2.png)

1. Click **Add Group**.

![Screenshot of how to Add new group in Access Controls](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Migrate-Require-Purchase-Functionality-in-Your-Learndash-App-_-3.png)

1. Select the matching condition:
2. Click **Save Group**.
3. Repeat for each membership or course previously required for access.

## Restrict App Login via General Access Rule

Now restrict app access based on your new groups:

1. Go to **Learndash App > Access Controls > General**.
2. Check **Restrict Access** to require login.
3. Under **Access Groups**, select the group(s) you created.
4. Choose a **Restricted Action**:

- **Show Product Screen******
- **Return to Login******
- **Open App Page** (e.g., a custom “Need Access?” screen)
5. Click **Save Changes**.

![screenshot of how to Add new group in Access Controls](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Migrate-Require-Purchase-Functionality-in-Your-Learndash-App-_-4.png)

*To lock the entire app to logged-in users, enable***Private App***under***Learndash App > Settings > General > Privacy***. This hides all content until login or registration.*

## Troubleshooting and FAQs

**Q: My old paywall isn’t showing after migration.****** **A:** Double-check that every gated item has a corresponding Access Group and that those groups are selected in the **General** rule.

**Q: I don’t see my membership plugin under Access Groups.****** **A:** Make sure the plugin (e.g., MemberPress, Restrict Content Pro) is installed and active.

**Q: Can I show a custom page when users are blocked?****** **A:** Yes. Create an App Page and choose **Open App Page** in your General rule to show it to restricted users.

**Q: Can I now gate specific pages, posts, or courses?****** **A:** Absolutely. After setting up your general login rule, use additional rules under **App Pages**, **Pages**, **Posts**, or **Courses** to target individual content.

---

## How to Manage Access Controls in Your Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-manage-access-controls-in-your-learndash-app/](https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-manage-access-controls-in-your-learndash-app/)

## Introduction

****Access Controls help you manage who can see specific app content based on profile type, course enrollment, membership plan, or custom logic.

This guide shows how to enable Access Controls, configure restriction messages, set up access rules, and tailor menus for different user groups in your Learndash App.

## Enabling Access Controls

1. In your WordPress Dashboard, go to **Learndash App > Components**.
2. Find **Access Controls** and click **Activate**.

![Screenshot of App Components ](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Manage-Access-Controls-in-Your-Learndash-App-_-1.png)

If you were using **Require Purchase** to lock content, you’ll be prompted to migrate. Follow the **Require Purchase to Access Controls migration guide** before proceeding.

## Setting the Default Restriction Message

1. Go to **Learndash App > Settings > Access Controls**.
2. Under **Default Restricted Message Content**, enter the text you want users to see when trying to access locked content.

![Screenshot of LearnDash App Control Settings](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Manage-Access-Controls-in-Your-Learndash-App-_-2.png)

## Creating Access Groups and Rules

1. Go to **Learndash App > Access Controls > Access Groups**.

![Screenshot of default restricted message settings](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Manage-Access-Controls-in-Your-Learndash-App-_-3.png)

1. Click **Add Group** (e.g., “Premium Members,” “Course A Students”).

![Screenshot of access controls for groups](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Manage-Access-Controls-in-Your-Learndash-App-_-4.png)

1. Under **Access Rules**, assign the content to restrict:

- App Pages
- WordPress Pages
- Blog Posts
- LearnDash Courses

![Screenshot of menus for access control](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Manage-Access-Controls-in-Your-Learndash-App-_-5.png)

1. Define who gets access based on:

- **Profile Type******
- **Course Enrollment******
- **Membership Plan******
- Or custom logic using the developer API

## Controlling Menus by Access

1. Go to **Learndash App > Menus**.
2. Use Access Controls to set what menu will appear depending on the group:

- **Tab Bar items******
- **More screen menus******

![Screenshot of default access controls](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Manage-Access-Controls-in-Your-Learndash-App-_-6.png)

## Troubleshooting and FAQs

**Q: Why don’t I see the Access Controls option?****** A: Update the Learndash App plugin and enable **Access Controls** under **Learndash App > Components**.

**Q: My old Require Purchase settings aren’t working.****** A: Complete the migration guide to convert them into Access Controls. Then disable the old Require Purchase setting.

**Q: Members can still access restricted content.****** A: Double-check that content is assigned to the correct Access Group and users meet the access conditions. Also, confirm your **Default Restricted Message** is not blank.

**Q: How can I apply custom access conditions?****** A: Use the developer API to implement advanced filtering logic.

---

## How to Enable Maintenance Mode in Your Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-enable-maintenance-mode-in-your-learndash-app/](https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-enable-maintenance-mode-in-your-learndash-app/)

## Introduction

**Maintenance Mode** allows you to temporarily pause your mobile app while performing updates, resolving issues, or making backend changes. During this period, your users will see a branded “we’ll be back soon” screen that uses your app’s logo and colors to maintain a professional appearance.

This guide shows you how to activate Maintenance Mode and customize the experience your members see during downtime.

## Enabling Maintenance Mode

To activate Maintenance Mode:

1. Go to **LearnDash App > Configure > General**.

![Screenshot of Configure tab](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Enable-Maintenance-Mode-in-Your-Learndash-App-_-1.png)

1. Scroll to the **Maintenance Mode** section.
2. Check **Enable Maintenance Mode**

![Screenshot of Settings UI for Enabling Maintenance Mode](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Enable-Maintenance-Mode-in-Your-Learndash-App-_-2.png)

1. Click **Save Changes**.

When enabled, users won’t be able to interact with the app until it’s disabled.

## What Users Will See

Once Maintenance Mode is active, members who open the app will see:

- **App Logo** – Pulled from **Learndash App > Branding > Logon Screen > Logo******
- **Background Color** – Matches your setting under **Learndash App > Branding > General Background Color******
- **Default Message** – *“Maintenance Mode is enabled. Please try again later.”***

*The message can be customized via***Learndash App > Translations***by searching for “Maintenance Mode.”*

To resume full access, simply uncheck **Enable Maintenance Mode** and save your changes. The app will return to normal after users reopen it.

## Troubleshooting and FAQs

**Q: How do I change the maintenance message?****** **A:** Go to **Learndash App > Translations**, search for **“Maintenance Mode”**, and update the text to your preferred message.

**Q: Some users still see the regular app content.****** **A:** Ask users to **force-close and reopen** the app. This clears cached data and loads the maintenance screen properly.

---

## How to Create Multiple Versions of App Menus in Your Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-create-multiple-versions-of-app-menus-in-your-learndash-app/](https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-create-multiple-versions-of-app-menus-in-your-learndash-app/)

## Introduction

****Delivering tailored navigation experiences can enhance user engagement and streamline app usage. Multiple Versions of App Menus allow you to customize your Learndash App’s **Tab Bar** and **More Menu** based on login status, access group, membership level, course enrollment, or profile type.

This guide walks you through setting up different menu versions for guests and logged-in users, styling your navigation, and prioritizing menus when a member qualifies for more than one.

## Creating a Menu for Logged-Out Members

To show a simple menu for guests (non-logged-in users):

1. Go to **LearnDash App > Menus > Tab Bar** (or **More Menu**).

![Screenshot of menu bar](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Create-Multiple-Versions-of-App-Menus-in-Your-Learndash-App-_-1.png)

1. Click **Create a new menu**.

![Screenshot of where to click to create a new menu](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Create-Multiple-Versions-of-App-Menus-in-Your-Learndash-App-_-2.png)

1. Under **Login Status**, select **Logged-out Members**.

![screenshot of Option to choose logged in or logged out users for menu](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Create-Multiple-Versions-of-App-Menus-in-Your-Learndash-App-_-3.png)

1. Click **Create Menu**.
2. Add items from **Add Menu Items**.
3. Click **Save Menu**.

*Note: You can only create one Tab Bar and one More Menu for logged-out members. These menus only display if***Private App***is disabled under***Learndash App > Settings > General > Privacy***.*

## Creating Menus for Specific Access Groups

To create custom navigation for different user groups:

1. Go to **Learndash App > Menus > Tab Bar** (or **More Menu**).
2. Click **Create a new menu**.

![screenshot of where to Create a new menu option](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Create-Multiple-Versions-of-App-Menus-in-Your-Learndash-App-_-4.png)

1. Enter a **Menu Name** (e.g., “Gold Members”).
2. Set **Login Status** to **Logged-in Members**.

![Screenshot of Choosing logged in users for menu](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Create-Multiple-Versions-of-App-Menus-in-Your-Learndash-App-_-5.png)

1. Under **Access Group**, select one or more relevant groups.
2. Click **Create Menu**.
3. Add desired items using **Add Menu Items**.
4. Click **Save Menu**.

## Styling the Tab Bar

Control how the Tab Bar looks across all menus:

1. Go to **Learndash App > Menus > Tab Bar**.

![Screenshot of menu](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Create-Multiple-Versions-of-App-Menus-in-Your-Learndash-App-_-6.png)

1. Toggle **Icon Labels** to show or hide labels below icons.
2. Choose **Tab Bar Icon Style**:

- **Outlined******
- **Boxed**

![LearnDash App Icon Label option for menus](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Create-Multiple-Versions-of-App-Menus-in-Your-Learndash-App-_-7.png)

1. Set **Tab Bar Visibility** to:

- **Show on Tab Bar Menu******
- **Show on All Screens**

![Screenshot of Tab bar visibility options](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Create-Multiple-Versions-of-App-Menus-in-Your-Learndash-App-_-8.png)

1. Click **Save Settings**.

*These style settings apply globally to all Tab Bars.*

## Styling the More Menu

Customize the look of the More Menu:

1. Go to **Learndash App > Menus > More Menu**.
2. Choose a **More Menu Icon Style**:

- **Outlined******
- **Boxed******
3. Click **Save Settings**.

*These style settings also apply globally to all More Menus.*

## Setting Menu Priority

When a member qualifies for multiple menus, Learndash App uses your menu priority to decide which one to show:

1. Go to **Learndash App > Menus > Menu Priority**.
2. Click **Set Menu Priority**.
3. Drag and reorder the menus (highest priority goes to the top).
4. Click **Save Changes**.

*If a member belongs to multiple Access Groups, they’ll see the highest-priority matching menu.*

## Troubleshooting and FAQs

**Q: My logged-out menu isn’t appearing.****** **A:** Make sure **Private App** is disabled under **Learndash App > Settings > General > Privacy**. Logged-out menus won’t load if this setting is enabled.

**Q: A member in two groups sees the wrong menu.****** **A:** Reorder menus under **Menu Priority** and use **Recalculate Members** under **Learndash App > Access Controls > Access Groups** to ensure proper matching.

**Q: Style changes aren’t reflecting.****** **A:** Force-close and reopen the app to clear the cache and fetch the latest menu settings.

**Q: Can I style More Menus differently per group?****** **A:** Styles apply globally, but you can upload custom icons or manually adjust colors for each menu item for a personalized touch.

---

## How to Configure the Default Restricted Message in Your Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-configure-the-default-restricted-message-in-your-learndash-app/](https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-configure-the-default-restricted-message-in-your-learndash-app/)

## Introduction

When content is set to private whether through memberships, course enrollment, or access groups, it’s important to clearly communicate why access is restricted and what the member should do next.

This guide walks you through configuring the Default Restricted Message that appears when members encounter locked content inside your Learndash App. You’ll learn how to customize the title, message, button behavior, and teaser preview to keep the user experience smooth and on-brand.

## Configuring the Default Restricted Message

1. In your WordPress Dashboard, go to **Learndash App > Settings > Access Controls > General**.

![Screenshot of LearnDash App Menu](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-the-Default-Restricted-Message-in-Your-Learndash-App-_-1.png)

1. Under **Default Restricted Message**, fill out the following fields:
2. Click **Save Changes**.

![screenshot of Default restricted message settings](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-the-Default-Restricted-Message-in-Your-Learndash-App-_-2.png)

*Note: Any individual Access Rule can override the default message with its own custom title, message, button, and teaser settings.*

## Troubleshooting and FAQs

**Q: Why isn’t the new default message showing in the app?****** **A:** Force-close and reopen the app to clear its cache and fetch the updated settings.

**Q: Can I set a different message for a specific page or rule?****** **A:** Yes. Go to that Access Rule and enable **Custom restricted message** to override the default.

**Q: Teaser previews aren’t displaying.****** **A:** Ensure **Show Teaser** is enabled in your Default Message settings and that it hasn’t been disabled in the specific Access Rule.

**Q: Can I remove the button entirely?****** **A:** Yes. Select **No Button** under the Button Action field to display only the message.

**Q: Will changing the default message affect existing Access Rules?****** **A:** Only those using the default configuration. Rules with custom messages will remain unchanged.

---

## How to Configure Access Rules in Your Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-configure-access-rules-in-your-learndash-app/](https://learndash.com/support/kb/learndash-app/advanced-learndash-app/how-to-configure-access-rules-in-your-learndash-app/)

## Introduction

****Access Rules give you complete control over who sees what inside your Learndash App. Whether you want to lock premium content for paid members, hide posts from guests, or create unique app flows for different member types, Access Rules let you build a fully personalized experience.

This guide walks you through enabling Access Controls, defining member segments with Access Groups, and applying rules to restrict login access, app pages, blog posts, and LearnDash courses.

## Prerequisite

Make sure **Access Controls** is enabled:

1. In your WordPress Dashboard, go to **Learndash App > Components**.
2. Click **Activate** next to **Access Controls**.
3. Once active, go to **Learndash App > Access Controls** to begin creating rules.

![Screenshot of Access Controls settings menu](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-Access-Rules-in-Your-Learndash-App-_-1.png)

## Configuring General App Access

You can restrict access to the entire app based on login status or membership.

1. Go to **Learndash App > Access Controls > General**.
2. Enable **Restrict Access** to limit app entry.

![Screenshot of checkbox to restrict who can login to the LearnDash App](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-Access-Rules-in-Your-Learndash-App-_-2.png)

1. Under**Access Groups**, set the access rules:

![Screenshot of group settings for restricting logins](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-Access-Rules-in-Your-Learndash-App-_-3.png)

1. Set a **Restricted Action**:
- **Return to Login**
- **Show Product Screen**
- **Show App Page**

![Screenshot of redirect options for restricted logins](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-Access-Rules-in-Your-Learndash-App-_-4.png)

1. Click **Save Changes**.

Note*: To hide the app from all logged-out users, enable***Private App***under***Learndash App > Settings > General > Privacy.**

## Restricting App Pages, WordPress Pages & Blog Posts

You can apply access rules to both native app screens and website content.

1. In **Learndash App > Access Controls**, go to **App Pages**, **Pages**, or **Posts**.

![Screenshot of adding rules to the login restrictions](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-Access-Rules-in-Your-Learndash-App-_-5.png)

1. Click **+ Add Rule** next to the item you want to restrict.

![Screenshot of dropdown option for making a new rule](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-Access-Rules-in-Your-Learndash-App-_-7.png)

1. Select your restriction:
- **All logged-in members******
- **Specific Access Groups******
2. Choose a restriction message type:

- **Default Message******
- **Custom Message** (lets you add a title, custom copy, call-to-action, or content teaser)
3. Click **Save**.

*Note: Logged-out users will always see the login prompt before restricted content.*

## Restricting LearnDash Courses

You can control access to individual courses, categories, tags, or apply a global default rule.

### Restrict a Specific Course

1. Go to **Learndash App > Access Controls > Courses > Courses**.
2. Click **+ Add Rule** next to the course.
3. Choose restriction type:

- **All logged-in members******
- **Specific Access Groups******
4. Click **Save**.

![Screenshot of restricting courses](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-Access-Rules-in-Your-Learndash-App-_-6.png)

### Restrict by Categories or Tags

1. Go to **Learndash App > Access Controls > Courses > Categories & Tags**.
2. Add rules to categories, tags, or custom taxonomies.
3. Set restriction and click **Save**.

![Screenshot of Categories and tags options](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-Access-Rules-in-Your-Learndash-App-_-8.png)

### Set a Global Rule for All Courses

1. Go to **Courses > Default Settings**.
2. Check **Restrict All Courses**.
3. Choose the restriction type and Access Group.
4. Decide whether to **Hide restricted courses** or **Show with limited access**.
5. Click **Save Changes**.

![screenshot of App Access Rules default settings](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-Access-Rules-in-Your-Learndash-App-_-9.png)

## Troubleshooting and FAQs

**Q: Restrict Access isn’t working for some users.****** **A:** Go to **Access Groups**, hover over the group name, and click **Recalculate Members** to refresh the list.

**Q: I don’t see my membership plugin in the dropdown.****** **A:** Make sure the plugin (e.g., **Restrict Content Pro**, **MemberPress**) is installed and active.

**Q: My custom message isn’t showing in the app.****** **A:** Force-close and reopen the app to clear the cache and load the updated rules.

**Q: Can I hide both a page and its menu item?****** **A:** Yes. Add an Access Rule under **Pages** and also configure **Menu Rules** under **Learndash App > Menus** using the same group.

**Q: Why do logged-out users see restricted pages?****** **A:** Check if **Restrict Access** is enabled under **General** and verify your rule is targeting the correct audience.

---

