# In App Purchases

*Category from LearnDash documentation*

---

## How to Configure iOS In-App Products

**Source:** [https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-configure-ios-in-app-products/](https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-configure-ios-in-app-products/)

## Introduction

Setting up in-app purchases for iOS enables you to monetize courses and memberships directly in your Learndash App.

This guide walks you through configuring agreements, creating non-consumable and subscription products, localizing product information, setting up server notifications, and syncing your products with the Learndash App.

## Complete Agreements, Tax, and Banking Setup

1. Log in to App Store Connect.
2. Click **Business**, then select your **Legal Entity Name**.
3. Under the **Agreements** tab:

- Agree to all terms.
- Click **Set Up Tax, Banking, and Contacts** under **Paid Apps**.
4. Click **Add Bank Account** to receive app sales revenue.
5. Click **Complete Tax Forms** and fill out the required business information.
6. Under **Contacts**, add your contacts for all required roles.

**Apple Commission Overview:**

- **15%** for annual sales up to $1M
- **30%** for sales beyond $1M
- **Subscriptions:** Drop to 15% after the first renewal year

## Create a New In-App Purchase Product

If this is your first product, it must be submitted with a new app version. Future products can be submitted individually.

1. In App Store Connect, go to **Apps > [Your App]**.
2. In the sidebar, click:

- **In-App Purchases** (for Non-Consumable items)
- **Subscriptions** (for Auto-Renewable or Non-Renewing Subscriptions)

### Choose a Product Type

- **Non-Consumable:** One-time purchase (e.g., lifetime course access)
- **Auto-Renewable Subscription:** Ongoing access billed monthly or yearly (e.g., membership plans)
- **Non-Renewing Subscription:** Time-limited access that doesn’t renew automatically

### Add Your Product

1. Click the **+** icon or **Create**.
2. Enter a **Reference Name** (internal only).
3. Enter a **Product ID** (e.g., com.domain.course_name).
4. For subscriptions:

- Choose a **Subscription Duration**.
- Select a **Subscription Group** or create one if needed.

## Add Pricing and Localization

1. Under **Subscription Prices**, click **+**, choose your main currency, and select a price.
2. Under **Localizations**, click **+**:

- Select your app’s main language
- Enter a **Display Name** and **Description**
- Click **Save******
3. Optionally add more languages.

## Complete Review Information

1. Upload a screenshot (640 × 920 px):

- For a **course**: show the course screen in the app
- For a **membership**: show exclusive content
2. Add **Review Notes** describing:

- What the product is
- What it unlocks in the app
- How to access it (e.g., “Log in > More > Products”)
3. Click **Save**. The product status should now be **Ready to Submit**.

Only products marked **Ready to Submit** can be selected in Learndash App settings.

## Add Subscription Group Localization (if applicable)

1. In App Store Connect, go to **Subscriptions > [Your Group]**.
2. Click **+** next to **App Store Localizations**.
3. Complete the required fields and click **Add**.

## Configure App Store Server Notifications

App Store notifications inform your server of subscription events (renewals, cancellations, refunds, etc.).

1. In App Store Connect, go to **My Apps > [Your App] > App Information**.
2. Scroll to **URL for App Store Server Notifications**.
3. Use the following format:

- **Production URL:** https://yourdomain.com?ios_s2s_notification=1
- **Sandbox URL:** https://yourdomain.com?ios_s2s_notification=2
4. Select **Version 2** for the notifications version.
5. Click **Save**.

## Troubleshooting and FAQs

**Q: My new product isn’t listed in the Learndash App plugin.****** A: Make sure the product is in **Ready to Submit** status, then click **Sync with Apple** and relaunch the app.

**Q: I can’t assign a subscription group.****** A: Create the group in App Store Connect first, then replicate its name under **Learndash App > In-App Purchases > Subscription Groups**.

**Q: Apple rejected my product.****** A: Double-check that all localizations are complete, the review screenshot is 640 × 920 px, and your review notes clearly explain the product and access path.

**Q: Price changes aren’t reflected in the app.****** A: Sync the product again from the plugin and force-close the app to reload metadata.

---

## How to Configure Subscription Groups

**Source:** [https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-configure-subscription-groups/](https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-configure-subscription-groups/)

## Introduction

Subscription Groups allow you to organize related subscription products like tiered membership plans or varying billing cycles so users can only hold **one active subscription per group**.

This guide shows you how to create, sync, and assign subscription groups in the Learndash App plugin to deliver a consistent upgrade/downgrade experience across both iOS and Android.

## Why Use Subscription Groups?

- **Tiered Plans:** Offer Bronze, Silver, and Gold memberships without overlap.
- **Duration Options:** Sell monthly, quarterly, or yearly access with a clear structure.
- **Auto-Switching:** Automatically cancel the old subscription when users purchase a new one in the same group.

## Understand Requirements

- **iOS (App Store Connect):** Apple **requires** all **auto-renewable subscriptions** to be assigned to a **Subscription Group**. Other product types cannot be grouped.
- **Android (Google Play):** Google **doesn’t support subscription groups** natively. Learndash App provides group logic so Android users get the same seamless experience.

To ensure consistency, you’ll need to **mirror your iOS subscription groups in WordPress** and manually assign both iOS and Android products.

## Create Subscription Groups in App Store Connect

1. Log into your **App Store Connect** account.
2. Go to **My Apps**, then select your app.
3. Under **In-App Purchases**, click **Subscription Groups**.
4. Make a note of each group name (e.g., “Membership Tiers”, “Monthly Plans”).

## Add Subscription Groups in the Learndash App Plugin

1. In your WordPress Dashboard, go to **Learndash App > In-App Purchases**.
2. Click the **Subscription Groups** tab.
3. For each group name from App Store Connect:

- Click **Add New Subscription Group**.
- Paste the name exactly as it appears.
- Click **Save**.

## Assign Products to Subscription Groups

1. In **Learndash App > In-App Purchases**, switch to the **Products** tab.
2. Click **Add New** or **Edit** next to a subscription product.
3. Ensure:

- **Product Type** is set to **Auto-Renewable Subscription** (iOS) and **Subscription** (Android).
- Under **Subscription Group**, select the correct group name.
4. Click **Update Product**.

## Troubleshooting and FAQs

**Q: Why are my Android subscriptions not grouped?****** A: Android doesn’t support subscription groups natively. Use the plugin to mirror Apple’s groups and assign them manually.

**Q: A user has two subscriptions active at once. What’s wrong?****** A: Check if both products are assigned to the **same Subscription Group**. If not, auto-cancel logic won’t trigger.

**Q: I accidentally added a one-time product to a group. Will that break anything?****** A: Yes. Only subscription-type products can belong to Subscription Groups. Edit the product and remove it from the group.

---

## How to Require In-App Purchases During Registration

**Source:** [https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-require-in-app-purchases-during-registration/](https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-require-in-app-purchases-during-registration/)

## Introduction

****Requiring an in-app purchase during registration lets you convert new signups into paying members before they access your content.

This guide explains how to enable registration gating, choose when to show products, and configure each flow type to streamline onboarding in your Learndash App.

## Enable Registration Purchase Requirement

1. In your WordPress Dashboard, go to **Learndash App > Settings > In-App Purchases**.
2. Check **Require members to purchase an in-app product while registering for an account**.
3. Under **Show Products**, choose when products should be shown:

- **Before Registration******
- **On Registration******
- **After Registration**
4. Click **Save Changes**.

## Understand the Registration Flows

### Before Registration

Members first land on the **Products Screen**. After selecting a product, they proceed to fill out the registration form and complete the purchase to activate their account.

### On Registration

The products appear **beneath the registration form fields**. The **Register** button remains disabled until the member selects and purchases a product.

### After Registration

Members complete the registration form first. They are then prompted to choose and purchase a product to finalize account activation.

## Troubleshooting & FAQs

**Q: Why aren’t the products appearing on the registration screen?****** A: Make sure all in-app products are synced and enabled under **Learndash App > In-App Purchases > Products**, and that your **Show Products** setting matches the desired flow.

**Q: Why does the app crash when I tap a product?****** A: Check that your **Bundle ID** and product identifiers match exactly in App Store Connect or Google Play, and confirm **In-App Purchases** is enabled under **Learndash App > Components**.

**Q: Why is the app showing outdated prices?****** A: Click **Sync with Apple** or **Sync with Google** in each product, then force-close and reopen the app to refresh product data.

**Q: How do I test the registration flow without real charges?****** A: Use a **Test App build**. In Test Apps, paid products behave as free, allowing full testing of the in-app purchase flow with no billing.

---

## How to Select an iOS Review Version for In-App Purchases

**Source:** [https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-select-an-ios-review-version-for-in-app-purchases/](https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-select-an-ios-review-version-for-in-app-purchases/)

## Introduction

****To speed up Apple’s approval process, it’s important to display all in-app products that are approved and pending during review.

This guide shows how to select an iOS build in the Learndash App plugin that allows Apple reviewers to access all products without exposing unapproved items to your regular users.

## Accessing the iOS Review Version Setting

1. In your WordPress Dashboard, go to **Learndash App > Settings > In-App Purchases**.
2. Scroll to **iOS Review Version**.

- This dropdown lists all your generated **iOS Release App builds**.

## Choosing the Right Build for Apple Review

- **If your app is already published**:
Select a build with a version number higher than your live App Store version.
- **If you’re submitting in-app purchases for the first time**:
Choose the build that includes your new in-app products.

Regular users will stay on the older public build, while Apple testers access the newer one with all pending products.

## Finalizing and Resetting the Review Build

1. **Submit the selected build** to App Store Connect.

- Apple reviewers will use this version to test your in-app purchases.
2. **After approval**, go back to the **iOS Review Version** dropdown and select **“Select Build”** to clear the field.

- This hides unapproved products from regular users.
3. **Repeat this process** any time you create new in-app products:

- Generate a new build
- Select it in the dropdown
- Resubmit it for Apple review

## Troubleshooting and FAQs

**Q: Why isn’t my build showing in the dropdown?****** A: Only iOS **Release App** builds appear. Go to **Learndash App > Build History** to verify the correct build type.

**Q: Apple can’t see the new products I added.****** A: Ensure the selected build is higher than your current live version and that the exact build was submitted for review.

**Q: Unapproved products are visible to regular users.****** A: Clear the **iOS Review Version** setting to hide pending items from non-admins.

**Q: Apple reviewer doesn’t see any new products.****** A: Generate a new iOS build after adding products, select it in the dropdown, and upload that version for review.

---

## How to Set Up Android In-App Purchases

**Source:** [https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-set-up-android-in-app-purchases/](https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-set-up-android-in-app-purchases/)

## Introduction

Selling courses or memberships through Google Play Billing enables a seamless, compliant checkout experience for your Android users.

This guide walks you through setting up your Google payments profile, creating in-app and subscription products, and linking them to your Learndash App.

## Create a Google Payments Profile

1. Log into **Google Play Console**.
2. Go to **Settings > Developer account > Payment settings**.
3. Click **Create Payments Profile**.
4. Fill in:

- **Business location**, **Account type**, **Address******
- **Primary contact** and **Public business info******
5. Click **Submit**.

You can now begin adding In-App Products and Subscriptions.

## Create an In-App Product (One-Time Purchase)

1. Go to **All Apps** > select your app.
2. In sidebar: **Monetize > Products > In-app products**.
3. Click **Create product**.
4. Enter:

- **Product ID** (e.g., com.animals.cats.siamese)
- **Product name** and **Description**
5. Under **Price**, click **Set price**, enter default price, and click **Apply prices**.
6. Click **Save**, then **Activate**.

## Create a Subscription Product

Note: Subscriptions now support multiple base plans and offers. At least one base plan must be marked as *Backwards Compatible*.

1. In sidebar: **Monetize > Products > Subscriptions**.
2. Click **Create subscription**.
3. Enter:

- **Product ID** (e.g., com.animals.cats.siamese)
- **Name** (visible to users)
4. Under **Subscription Details**:

- Add **Name**, **Description**, and **Benefits**
5. Scroll to **Base Plans and Offers** > click **Add base plan**:

- **Base plan ID******
- **Renewal type**: Auto-renewing or Prepaid
- **Tags**, **Availability**, and **Pricing******
- Mark one plan as **Backwards Compatible******
6. Click **Save**, then **Activate**.

## Link Products to the Learndash App

1. In **WordPress > Learndash App > In-App Purchases > Products**, click **Add New**
2. Fill in:

- **Name**, optional **Tagline**, **Description**, and **Benefits******
- Check **Display on Products Screen******
- Select **Paid** as Product Type
3. Under **Android Store**:

- Check **Enable******
- Click **Sync with Google** and select your product
4. Choose **Integration Type** (LearnDash Course or Membership).
5. Click **Publish**.

Repeat for all products.

## Test Android In-App Purchases

### Using Test App Builds

1. Install the **Test App** on your device.
2. Log in and visit the **Products Screen**.
3. Tap **Purchase** > test builds simulate real purchases at no cost.
4. Verify access to your course or membership.
5. In WordPress, go to **Learndash App > Transactions** to view or **Revoke** test orders.

## Troubleshooting & FAQs

**Q: Price update isn’t reflected in app, what should I do?****** A: Re-sync the product in WordPress and force-close the app.

**Q: What to do if my test purchases don’t reset?****** A: Use the **Revoke** button under **Transactions**, then restart the Test App.

---

## How to Set Up In-App Purchases

**Source:** [https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-set-up-in-app-purchases/](https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-set-up-in-app-purchases/)

## Introduction

In-app purchases let you monetize your content by offering paid courses, memberships, or access tiers directly inside the Learndash App.

This guide walks you through enabling in-app purchases, configuring product settings, syncing with app stores, organizing subscriptions, and testing transactions.

## Enable In-App Purchases in Your Learndash App

1. In your WordPress Dashboard, go to **Learndash App > Components**.
2. Toggle on **In-App Purchases**.
3. Click **Save Changes**.

## Configure In-App Purchase Settings

1. Navigate to **Learndash App > Settings > In-App Purchases**.
2. **Require Purchase** – Check this to block all content until the user purchases a product.
3. Under **Terms of Service** and **Privacy Policy**, select the appropriate WordPress pages.
4. Scroll to **Products Screen** and enter a custom **Sales Message** (e.g., “Choose your plan to unlock access”).
5. Click **Save Changes**.

## Add the Products Screen to Your App Menu

1. Go to **Learndash App > Menus**.
2. Under the Learndash**App**, find **Products**.
3. Click **Add to Menu** under either **Tab Bar Menu** or **More Screen Menu**.
4. Click **Save Menu**.

## Create and Sync In-App Products

1. Navigate to **Learndash App > In-App Purchases > Products**.
2. Click **Add New** and fill in:

- **Product Name** (match the name used in App Store Connect and Google Play Console)
- **Tagline** (optional)
- **Description** (optional)
- **Benefits** – Short bullet points (e.g., ✓ Access to all lessons)
3. **Display on Products Screen** – Check if it should appear in the Products Screen.
4. Under **Product Type**, select **Paid** or **Free**.

### Syncing with Apple

1. Check **Enable** under **iOS Store**, then click **Sync with Apple**.
2. Select your product (must be at least “Ready to Submit”).

### Syncing with Google Play

1. Check **Enable** under **Android Store**, then click **Sync with Google**.
2. Select your product (must be **Active** in Google Play Console).

### Integration Type

Choose one:

- **LearnDash Course** – Only courses marked Closed, Recurring, or Buy Now are eligible.
- **Membership** – Select a supported membership plugin.

1. Click **Publish** to save the product.

## Organize Subscription Groups

1. In **App Store Connect**, create a Subscription Group under **Features > Subscriptions**.
2. Copy the group name.
3. In WordPress, go to **Learndash App > In-App Purchases > Subscription Groups**.
4. Click **Add New**, paste the group name, and click **Save**.
5. Edit each related product and assign it to this subscription group.

## Reorder Products

1. Navigate to **Learndash App > In-App Purchases > Products**.
2. Drag and drop the products to reorder them (e.g., Free > Basic > Premium).
3. This order reflects in the Products Screen and purchase modals.

## Test Purchases in the Test App

1. Install your Test App on a device.
2. Log in with any user (if **Require Purchase** is enabled, they’ll be redirected).
3. Tap **View** on a product – Test Apps treat paid items as free.
4. Confirm access to the linked course or membership.
5. Go to **Transactions** and check for entries marked **(Test App)**.
6. Use **Revoke** to reset access and retest.

## Test Purchases in the Release App

### iOS (TestFlight)

1. Download your **IPA** file from Build History.
2. Upload to TestFlight and invite testers.
3. Test in-app purchases without being charged.

### Android (Internal Testing)

1. Upload the **APK** to a Google Play Console testing track.
2. Invite testers and install using the testing URL.
3. Complete purchase flows using Google’s billing system (no real charges for test users).

## Manage Transactions

Go to **Learndash App > In-App Purchases > Transactions** to:

- View all purchases (Test and Release Apps)
- **Revoke** test purchases (safe to reset access)
- **Revoke** release purchases only if necessary (removes access but doesn’t issue a refund)

Note: Refunds must be issued directly through Apple or Google Play.

## Troubleshooting and FAQs

**Q: Why aren’t my products showing in the app?****** A: Ensure each product is synced and has **Approved** (Apple) or **Active** (Google) status.

**Q: I updated the pricing in the app stores, but it’s not reflected.****** A: Click **Sync** again and force-close the app to refresh product data.

**Q: Revoke isn’t resetting Test App purchases.****** A: Make sure you used the **Revoke** button under **Transactions**, then relaunch the Test App.

**Q: Members are subscribing to multiple plans.****** A: Check that all subscription products are correctly assigned to a **Subscription Group**.

**Q: Can I offer a free product as part of the Products Screen?****** A: Yes. Mark it as **Free** and integrate it with a LearnDash course or membership.

---

## How to Test In-App Purchases

**Source:** [https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-test-in-app-purchases/](https://learndash.com/support/kb/learndash-app/in-app-purchases/how-to-test-in-app-purchases/)

## Introduction

Before going live, it’s essential to test your in-app purchases to ensure users can complete transactions, see accurate pricing, and unlock access correctly.

This guide walks you through testing purchases using both Test Apps and Release builds (TestFlight and Google Internal Testing).

## Prerequisites

Make sure:

- All in-app products are configured and synced in your Apple and Google developer accounts.
- Products are added in **Learndash App > In-App Purchases > Products**.
- Your builds are generated and available for testing.

## Test Purchases in Test App Builds

Test Apps simulate purchases without real store connections.

### What to Expect

- **Free Products**: Display correct labels such as **“Free”** and **“Lifetime”**.
- **Paid Products**: Show generic **“Price”** and note: “Pricing and terms are only available in Release Apps.”

### How It Works

- All purchases are simulated—no real pricing, no charges.
- The app auto-enrolls the user as if the transaction succeeded.

### Use Case

Use the Test App to:

- Confirm products trigger the correct enrollment (course or membership).
- Check transaction logging under **Learndash App > In-App Purchases > Transactions**.
- Test multiple flows without App Store or Play Console delays.

## Test Purchases in Release Builds

Use this to test full UI, local pricing, and actual purchase flows without being charged.

### iOS (TestFlight)

1. **Download IPA** from **Build History**.
2. **Upload to TestFlight** via App Store Connect.
3. **Invite testers** using their Apple ID emails.
4. **Install and test** via TestFlight app.

- Purchases use Apple’s real UI.
- No billing is processed in sandbox mode.

### Android (Internal Testing Track)

1. **Download APK** from **Build History**.
2. **Upload to Play Console** under **Testing > Internal testing**.
3. **Wait for approval**, then invite testers.
4. **Test** using the install link.

- Purchases use Google Play’s native dialogs.
- No actual charges apply in internal testing.

## Troubleshooting and FAQs

**Q: Why don’t I see real prices in the Test App?****** A: Test Apps don’t retrieve store metadata. Placeholder text is shown instead.

**Q: Paid products won’t purchase in the Test App.****** A: Test Apps simulate the flow; the plugin confirms access without native dialogs.

**Q: My Release App still shows price placeholders.****** A: Confirm you’re using the correct build from TestFlight or Play Console. Force-close and reopen the app to clear cache.

**Q: Purchases aren’t appearing in Transactions.****** A: Go to **Learndash App > In-App Purchases > Transactions** and look for “Test App” entries. Use **Revoke** to reset.

**Q: I was billed during testing.****** A: Ensure you’re not using a production install. Only sandbox TestFlight and Google Internal Testing are charge-free.

---

