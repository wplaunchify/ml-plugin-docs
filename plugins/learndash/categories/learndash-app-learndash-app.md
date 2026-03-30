# Learndash App Learndash App

*Category from LearnDash documentation*

---

## Hosting Recommendations for the LearnDash App

**Source:** [https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/hosting-recommendations-for-the-learndash-app/](https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/hosting-recommendations-for-the-learndash-app/)

## Introduction

****The LearnDash App (powered by LearnDash App technology) is a highly dynamic mobile application built for real-time user interaction. Because it relies on frequent API calls to your WordPress site, it’s essential to choose optimized hosting that supports scalability, speed, and concurrent users.

## API Caching for App Performance

The app uses native mobile rendering, but its data comes from WordPress via REST API. Performance depends on how quickly your server can deliver API responses.

**API Caching Benefits:**

- Automatically caches most LearnDash API responses.
- Delivers faster load times than the web version.
- Each user has their own cache, updated in real-time.
- Reduces server load by minimizing real-time data generation.

*Enable API caching in the LearnDash App plugin. It works out of the box on most servers.*

## Hardware Requirements

Based on extensive testing with API caching enabled and 100% app-based traffic:

| Concurrent Users | Memory (RAM) | CPU Cores | Storage (Est.) | Bandwidth (Est.) |
| --- | --- | --- | --- | --- |
| Up to 150 users | 16GB+ | 8+ | 50GB+ | 125GB+/month |
| Up to 300 users | 32GB+ | 16+ | 100GB+ | 250GB+/month |
| Up to 600 users | 64GB+ | 32+ | 150GB+ | 500GB+/month |
| Up to 1200 users | 128GB+ | 64+ | 200GB+ | 1TB+/month |

*Resource needs will increase with more plugins, web traffic, or media uploads. Cloud hosting allows scaling without migration.*

## Server Software Requirements

Ask your host to provide:

- **Linux OScore******
- **PHP 8.1******
- **MariaDB 10.1+** *(preferred over MySQL 8.1+)***
- **SSL (HTTPS)******
- **No NGINX******

*MariaDB is recommended for better performance over MySQL.*

## Things to Avoid

Avoid hosting providers that:

- Block API requests from external apps.
- Enforce mandatory server-side caching.
- Disable core WordPress features.

*Many WordPress hosts are optimized for static sites, not real-time applications like the LearnDash App.*

## Recommended Hosting Type

We **strongly recommend cloud hosting** for optimal performance:

- Shared hosting lacks resources.
- VPS/dedicated servers don’t scale easily.
- Cloud servers scale up/down with little or no downtime.

## Ideal Hosting Stack

To fully unlock your app’s performance potential:

- **Infrastructure:** AWS-based cloud setup (or similar high-performance cloud).
- **Server:** LiteSpeed Enterprise Server.
- **Database:** MariaDB (fast and stable for WordPress).
- **Caching:******
- **LiteSpeed Cache******
- **Redis Cache + Relay + LiteSpeedPHP******
- **Object Cache Pro******

*Note: Run benchmarks with tools like WPPerformanceTester to validate your server’s performance.*

## Troubleshooting and FAQs

**Q: My app feels slow even after enabling API caching.****** A: Ensure your server meets the recommended hardware specs and that no other plugin is interfering with the caching process. Clear server-level and app cache, then test again.

**Q: Why is my server load still high with the app?** A: High load may be caused by web traffic, additional plugins, or lack of API caching. Verify caching is enabled and functional in the LearnDash App plugin settings.

**Q: Can I use shared hosting for the LearnDash App?****** A: No. Shared hosting lacks the resources and scalability required to handle real-time API requests and dynamic app traffic.

**Q: Do I need separate hosting for the app and website?****** A: No. The app pulls content from your WordPress site, so both should be hosted on the same optimized server.

**Q: Should I use NGINX for better performance?****** A: No. The LearnDash App is not fully compatible with NGINX. Use **LiteSpeed Enterprise Server** for best results.

**Q: What if my hosting provider blocks API requests?****** A: You’ll experience broken functionality in the app. Contact your host to whitelist external API requests or consider switching to a more compatible provider.

**Q: Is AWS a good option for hosting the app?****** A: Yes, but only if properly configured. We recommend using a managed solution like **Rapyd**, which is optimized for dynamic WordPress apps and built on AWS infrastructure.

---

## How to Connect Your Google Developer Account to the Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-connect-your-google-developer-account-to-the-learndash-app/](https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-connect-your-google-developer-account-to-the-learndash-app/)

## Introduction

Connecting your Google Play Developer account to the **Learndash App** lets you synchronize in-app products and submit your Android builds through our publishing service. In this tutorial, you’ll create a Google Cloud service account, enable the necessary API, grant Play Console permissions, and upload the credentials to your Learndash App plugin.

## Creating your App

1. Navigating [Google Cloud Console](https://play.google.com/console/), click on the Create App button.
2. Fill out the App name and Default language. Select App then select if it’s a Free or paid app.
3. Scroll down to tick the **Developer Program Policies** and US report laws options. Now, hit the **Create App button**.

## Creating Your Google Cloud Project and Service Account

1. Navigate to [Google Cloud Console](https://play.google.com/console/) and sign in with your Google account.
2. Click the project at the top and select **NEW PROJECT**.
3. Enter a **Project Name**, choose your **Organization** and **Location**, then click **Create**.
4. Ensure your new project is selected in the header dropdown.
5. From the sidebar, go to **APIs & Services > Enable API & Services.******
6. Click the **Library**.
7. Search for **Google Play Android Developer API**.
8. Click **ENABLE**.
9. Click **APIs & Services > Credentials**, then click **Create Credentials > Service Account**.
10. Enter a **Service account name** (e.g., “Learndash App”) and click **Create and Continue**.
11. Under **Select a role**, choose **Basic > Owner.******
12. Then click **Continue** and **Done**.
13. In the **Service Accounts** list, click the pencil icon next to your new account.
14. Go to the **Keys** tab.
15. Select **Add Key > Create New Key**.
16. Choose **JSON** and click **Create** the .json file downloads automatically. Store it securely (it can only be downloaded once).
17. Copy the **Service account email** from the list; you’ll use this in the Play Console.

## Granting Play Console Permissions to the Service Account

1. Navigate to [Google Play Console](https://play.google.com/console/) and Go to **Play Console Button**.
2. From the left sidebar, select **Users and permissions**.
3. Click **Invite new users**.
4. Paste the **Service account email** into the Email**address**.
5. Under **App permissions**, click **Add app**, select your app, and click **Apply**.
6. For full access, select **Admin** under **Account permissions** (or tick only the scopes you need), then click **Invite user**.
7. Confirm by clicking **Send invite** in the popup.
8. Verify the service account appears with status **Active** in your users list.

## Uploading Your Service Account Key in your Learndash App

1. In WordPress, go to **Learndash App > Configure > Android Settings**.
2. Click **Upload File**, select the downloaded .json key file, and click **Connect Account**.
3. A green **Connected** indicator confirms your Learndash App is now linked to your Google Developer account.

## Setting Up Internal Testing for Your Android App

### Navigating to Internal Testing

1. In the **Google Play Console**, go to your **Home** page and select your app.
2. From the sidebar, click **Testing > Internal testing**.
3. Click **Create new track** if you haven’t already, then:

- **Select testers** by adding email addresses or Google Groups.
- **Provide a Feedback URL** or email address for testers to submit bug reports.
4. Click **Save**.

### Creating a New Release

1. Still under **Internal testing**, click **Create new release**.
2. Under **App signing**, click **Choose signing key**.
3. Select **Use Google-generated key**, then confirm.

Note: You’ll see a notification that your releases will be signed by Google Play.

### Requesting an AAB Build

1. In WordPress, go to **Learndash App > Build**.
2. Click **Request Build**.
3. Tick **Android** as the platform and **Release App** as the build type.
4. Click **Next**, then **Send Build Request**.
5. Monitor your request under **Build History**, this usually completes in 5–10 minutes.

### Uploading the AAB to the Play Console

1. In the Play Console’s **Create release** screen, scroll to **App bundles** and click **Upload**.
2. Download the AAB from your **Build History** by clicking **Upload to Google Play Console** and selecting **Download build**.
3. Choose the downloaded **.aab** file (required for new submissions since August 2021).
4. Wait for the upload to complete.
5. This is how your uploaded App bundle will look.

### Adding Release Notes and Completing Declarations

1. Scroll down to **Release notes**, enter a brief description of changes or features.
2. Click **Next**.
3. If you encounter a metadata error, click **Complete declaration**.
4. On the **Advertising ID** page, answer **Yes** to “Does your app use advertising ID?” and click **Save**.

1. Return and click **Save** again to finalize the release.

## Troubleshooting and FAQs

**Q: Why can’t I download my JSON key again?****** A: Google Cloud only allows one download per key. Create a new key if you’ve lost the file.

**Q: My service account invite isn’t accepted in Play Console.****** A: Check that the email is correct, resend the invitation, and ensure Admin privileges in the Play Console.

**Q: Uploading the JSON file fails in WordPress.****** A: Verify you’re using the correct .json key file, clear your browser cache, or try another browser.

**Q: I don’t see the Internal testing option.****** A: Ensure you’ve created at least one release in the **Internal testing** track; then the option appears in the sidebar.

---

## How to Set Up Your Apple Developer Account for your Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-set-up-your-apple-developer-account-for-your-learndash-app/](https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-set-up-your-apple-developer-account-for-your-learndash-app/)

## Introduction

Enrolling in the Apple Developer Program is vital for releasing your iOS app on the App Store and managing TestFlight beta distributions. This guide will show you how to create or log in to your Apple ID, start and complete your program enrollment, choose the correct account type, submit any required organization details, accept Apple’s license agreement, finalize your annual membership purchase, and access your App Store Connect dashboard.

## Obtaining and Logging Into Your Apple ID

1. Visit **appleid.apple.com**.
2. Click **Create Your Apple ID** and fill in your name, email address, and security questions.
3. Verify the email Apple sends you.
4. Go to **developer.apple.com** and sign in with your Apple ID, completing any two-factor authentication prompts.

## Starting Your Developer Program Enrollment

1. On **developer.apple.com**, click **Enroll** in the top-right corner.
2. Confirm your Apple ID is active and click **Continue**.

## Choosing Your Enrollment Type

Select the option that matches your needs and click **Continue**:

- **Individual/Sole Proprietor** – Apps appear under your personal name.
- **Company/Organization** – Apps list under your company name and allow you to add team members.

## Entering Organization Information (For Organizations)

If you selected Company/Organization, complete these steps:

1. Obtain your **D-U-N-S Number** via Apple’s lookup tool or request one free from Dun & Bradstreet (allow ~5 days for issuance + 2 days for Apple validation).
2. Enter your Legal Entity Name, D-U-N-S Number, Website URL, and Phone Number in the enrollment form.
3. Confirm you have Legal Binding Authority, complete the CAPTCHA, and click **Continue**.
4. Provide your Work Email Address, verify it, and click **Continue**.

## Reviewing and Agreeing to Apple’s Terms

1. After receiving your **Enrollment ID** via email, sign back in at **developer.apple.com**.
2. Click **Review and Accept** next to your pending enrollment.
3. Read the Developer Program License Agreement, check **I Agree**, and click **Continue**.

## Finalizing Your Developer Program Purchase

1. On the purchase screen, confirm **Membership Type: Apple Developer Program**, your **Enrollment ID**, **Cost (US $99/year)**, and **Duration**.
2. Check the confirmation box and click **Purchase**.
3. If prompted, re-enter your Apple ID password, select a **Payment Method**, and click **Continue to Review**.
4. Verify your details and click **Place Your Order**.

**Note:** Non-profits and accredited educational institutions may qualify for a fee waiver.

## Accessing the App Store Connect Dashboard

1. Allow up to 48 hours for Apple to process your purchase.
2. Go to **appstoreconnect.apple.com** and sign in with your Apple ID.
3. Explore **My Apps**, **Users and Access**, **TestFlight**, and other dashboard features to begin managing your apps.

## Troubleshooting and FAQs

**Q: Why don’t I see the “Enroll” button?****** A: Ensure you’re signed in with the Apple ID you verified. Clear your browser cache or try another browser if the option still doesn’t appear.

**Q: What if I don’t have a D-U-N-S Number yet?****** A: Use Apple’s D-U-N-S lookup tool; if none exists, request one free from Dun & Bradstreet (expect ~5 days for issuance and ~2 days for Apple validation).

**Q: My credit card was declined, what should I do?****** A: Confirm your card allows international transactions and has sufficient funds. Try a different card or contact your bank. If issues persist, contact Apple Support.

**Q: Can I switch from an Individual to an Organization account later?****** A: Yes. After enrollment, contact Apple Developer Support to request an account type conversion.

**Q: My payment still won’t process. Any tips?****** A: Double-check your payment details and retry. If problems continue, reach out to Apple Support for assistance.

---

## How to Configure Access Groups in Your Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-configure-access-groups-in-your-learndash-app/](https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-configure-access-groups-in-your-learndash-app/)

## Introduction

****Access Groups are the foundation of the Learndash App’s Access Controls system. They let you group members dynamically based on profile type, course enrollment, membership plan, or user role.

This guide shows how to create and manage Access Groups so you can control what screens, content, or menus different users see in your app.

## Prerequisite

Before creating groups, make sure Access Controls is enabled:

1. In your WordPress Dashboard, go to **Learndash App > Components**.
2. Click **Activate** next to **Access Controls**.
3. Once enabled, you’ll see **Access Controls** appear in your admin menu.

## Creating an Access Group

1. Go to **LearnDash App > Access Controls > Access Groups**.

![Screenshot of where to Add access group](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-Access-Groups-in-Your-Learndash-App-_-1.png)

1. Click **Add Group**.

![Screenshot of where to Add Group option under access controls](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-Access-Groups-in-Your-Learndash-App-_-2.png)

1. Choose a **Condition Type** from the dropdown (e.g., **LearnDash Course**, **Membership Plan**, **User Role**).

![Screenshot of Selecting the condition type of the add access group](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-Access-Groups-in-Your-Learndash-App-_-3.png)

1. If prompted, select a specific item (e.g., “Advanced CSS” course or “Gold Membership”).
2. Click **Save Group**.

**Note:** Learndash App automatically counts how many members match each group. If your course, role, or membership changes, hover over the group name and click **Recalculate Members** to refresh the count.

## Viewing & Managing Group Members

- **Recalculate Manually**: Hover over a group and click **Recalculate Members**.
- **View Members**: Go to **Tools > Recalculate Access Groups** and click the member count next to any group.

## Troubleshooting and FAQs

**Q: Why does my new group show 0 members?****** A: Click **Recalculate Members** on that group and refresh the page.

**Q: I don’t see my membership plugin listed.****** A: Make sure the plugin (e.g., **WooCommerce Memberships**) is installed, active, and configured before setting up groups.

**Q: Can users belong to multiple access groups?****** A: Yes. Access groups are independent—members can match multiple group conditions.

**Q: My user role or course updates aren’t showing.****** A: Recalculate the relevant group to refresh its membership list.

---

## How to Create Your Google Play Developer Account for your Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-create-your-google-play-developer-account-for-your-learndash-app/](https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-create-your-google-play-developer-account-for-your-learndash-app/)

## Introduction

To publish your Android app on the Google Play Store, you need a Google Play Developer account. This guide walks you through selecting your account type, entering developer and site details, specifying your app intentions, and completing the one-time US$25 registration fee.

## Navigating to the Play Console Signup

1. Go to[https://play.google.com/console/signup](https://play.google.com/console/signup).
2. Choose your account type:

- **Yourself (Personal):** Uses your personal information; ideal if you don’t have a registered business.
- **Organization (Business):** Requires official business details and allows you to add other users.
3. Click **Next**.

![Getting started with Google Play Console Developer. ](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Create-Your-Google-Play-Developer-Account-for-your-Learndash-App-_-1.png)

**Note:** You can start with a Personal account and upgrade later. New Personal accounts must satisfy Google’s recent testing requirements.

## Providing Developer and Site Details

1. In the **About You** section, describe your developer experience or note this is your first app.

![Screenshot of filling out the "About You" in the Google Play Console](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Create-Your-Google-Play-Developer-Account-for-your-Learndash-App-_-2.png)

1. Under **Other Google Accounts**, indicate if you’ve used another account for Play Console.

1. Enter the domain where your LearnDash App is installed.
2. Click **Next**.

## Completing Your Developer Profile

1. Fill in all required fields on the **Developer Account** page:

- Name
- Email
- Phone
- Address
2. Click **Next**.

## Specifying Your App Plans

1. Under **Number of Apps**, enter how many apps you plan to publish (estimate is fine).
2. Select **No** if your app is free.
3. Choose the **App Category** that best fits your app (e.g., Education, Lifestyle).
4. Click **Next**.

## Accepting Terms and Completing Payment

1. Review the **Terms of Service** and check **I agree**.
2. Click **Create Account and Pay**.

1. Click the **+** icon to add your credit or debit card.
2. Enter payment details and complete the US$25 one-time fee.
3. Look for the confirmation: “Your Google Developer Account is now created!”

![Screenshot of Developer Account created](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Create-Your-Google-Play-Developer-Account-for-your-Learndash-App-_-3.png)

## Troubleshooting and FAQs

**Q: I can’t access the signup page, what should I do?****** A: Make sure you’re signed into the correct Google account and go directly to[https://play.google.com/console/signup](https://play.google.com/console/signup).

**Q: Which account type should I choose?****** A: Use **Yourself** if you’re an individual without a registered business; choose **Organization** if you have a legal entity and need multi-user access.

**Q: My payment failed, how can I retry?****** A: Verify your card supports international transactions, re-enter your details, and retry the payment step.

**Q: Can I switch from Personal to Organization later?****** A: Yes, after registration, update your account type in the Play Console settings or contact Google support for assistance.

---

## How to Connect Your Apple Developer Account to your Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-connect-your-apple-developer-account-to-your-learndash-app/](https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-connect-your-apple-developer-account-to-your-learndash-app/)

## Introduction

Linking your Apple Developer account with the Learndash App automates in-app product syncing, certificate and provisioning profile creation, and enables seamless iOS build submissions via our service. Before you begin, make sure you’ve already set up and enrolled in the Apple Developer Program.

## Generating an App Store Connect API Key

1. Sign in at **appstoreconnect.apple.com** with your Apple ID.
2. Go to **Users and Access > Integrations**.

![Screenshot of users and access](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Connect-Your-Apple-Developer-Account-to-your-Learndash-App-_-1.png)

1. Click the **+** button beside the App**Store Connect API**.
2. Provide a **Name** for this key (e.g., “Explorer App”).
3. Under **Access**, choose **Admin** to grant full permissions.
4. Click **Generate**.
5. Select **Download API Key** to save the .p8 file (this can be downloaded only once).
6. Copy the **Issuer ID** from the top of the **Integrations** page.
7. Copy the **Key ID** shown next to your newly created API key.

## Linking Your API Key in the Learndash App

1. In WordPress Admin, navigate to **LearnDash App > Configure > iOS Settings**.

![Screenshot of how to configure iOS Settings](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Connect-Your-Apple-Developer-Account-to-your-Learndash-App-_-2.png)

1. Under **Connect Your Apple Developer Account**, click **Upload** next to **Apple Private Key** and select the .p8 file you downloaded.
2. Paste your **Issuer ID** into the **Issuer ID** field.
3. Enter your **Key ID** into the **Key ID** field.
4. Click **Connect Account**.
5. Look for the green **Connected** indicator to confirm a successful link.

## Managing Your Apple Developer Connection

- To switch API keys or use a different account, click **Disconnect Account**.

![Screenshot of how to connect and disconnect the account. ](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Connect-Your-Apple-Developer-Account-to-your-Learndash-App-_-3.png)

- Then re-upload the new .p8 file and re-enter the corresponding Issuer ID and Key ID under **iOS Settings**, and click **Connect Account** once more.

## Troubleshooting and FAQs

**Q: I don’t see the Integrations tab in App Store Connect.****** A: Ensure you’re on the **Users and Access** page and that your Apple ID has **Admin** privileges.

**Q: The****.p8****file upload fails in WordPress.****** A: Confirm you’re using the exact file downloaded from App Store Connect. Clear your browser cache or switch browsers if the issue persists.

**Q: I get an “Invalid Issuer ID or Key ID” error.****** A: Check for extra spaces when copying both IDs. If the problem continues, generate a new API key in App Store Connect and update both values in your settings.

**Q: How do I verify that the connection is live?****** A: After clicking **Connect Account**, the **Connected** indicator (in green) in **iOS Settings** confirms an active link.

---

## How to Configure your Learndash Android App Links

**Source:** [https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-configure-your-learndash-android-app-links/](https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-configure-your-learndash-android-app-links/)

# Introduction

Android App Links enable deep integration between your **Learndash App**and your website, allowing members to open specific URLs directly in the app rather than a browser. By configuring App Links, you’ll create a seamless mobile experience, improve engagement, and ensure links to your community content always open in the correct context.

## Obtaining Your SHA-256 Certificate Fingerprint

1. Log in to the [Google Play Console](https://play.google.com/console/developers/) with the account used for your Google Developer enrollment.
2. Under **All apps**, select your **App ID**.
3. In the **Release** tab, go to **Setup > App Integrity > App signing**.
4. Copy the **SHA-256 certificate fingerprint** for your App Signing Key. You’ll use this in the Leardash App settings.

## Enabling Android App Links

1. In WordPress, navigate to **Learndash App > Configure > Android Settings > Android App Links**.
2. Tick **Enable Android App Links**.

![Screenshot of Android Pinned Apps.](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-your-Learndash-Android-App-Links-_-1.png)

1. Under **Links to Open**, choose **All** or **Specific** links to open in the app.

*Note:* Android does not support excluding individual URLs.

![Screenshot of option to open all links](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-your-Learndash-Android-App-Links-_-4.png)

1. If you use Google Play App Signing, paste your **SHA-256 certificate fingerprint** into **Google Play Signing Certificate**.

![Screenshot of Android App Links](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-your-Learndash-Android-App-Links-_-3.png)

1. Click **Save Changes**.
2. Request a new Android build in **Learndash App > Build** to apply your App Links configuration.

![Screenshot to configure Android App Settings](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-your-Learndash-Android-App-Links-_-2.png)

## Verifying Your Asset Links JSON

To verify if a valid JSON is served after enabling the Android App Links option, go to the following URL in your browser:

{{your site url}}/.well-known/assetlinks.json/

Confirm the JSON includes an entry with your **SHA-256 certificate fingerprint** and package name.

Note: The file should list all App Signing keys you’ve added.

## Troubleshooting and FAQs

**Q: Links aren’t opening in the app, why?****** A: Make sure you generated a new build and that assetlinks.json is accessible and not cached.

**Q: Getting a certificate mismatch error?****** A: Double-check the SHA-256 from *App Signing*, not the upload key. It must match in both Android settings and assetlinks.json.

**Q: assetlinks.json not found (404)?****** A: Ensure the file exists at /.well-known/, and your server or CDN allows access.

**Q: Can I disable App Links without a new build?****** A: No. Disabling App Links requires saving the setting and creating a new build.

---

## How to Configure Your iOS Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-configure-your-ios-learndash-app/](https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-configure-your-ios-learndash-app/)

## Introduction

Properly configuring your iOS app lays the foundation for generating builds, synchronizing in-app purchases with App Store Connect, and submitting your app for publication. This guide walks you through creating Bundle IDs, automating signing certificates and provisioning profiles, registering your app in App Store Connect, and entering critical credentials into the Learndash App plugin.

## Defining Your Bundle Identifiers

1. Sign in at **developer.apple.com** and open **Certificates, Identifiers & Profiles**.
2. Select **Identifiers** in the sidebar, then click **+**.
3. Choose **App IDs**, click **Continue**, and enter a **Description** (e.g., “Release App”).
4. For **Bundle ID**, use reverse-domain notation (e.g., com.fruit.oranges).
5. Enable **Push Notifications** and **Sign In with Apple**, then click **Continue** and **Register**.
6. Repeat steps 2–5 for your test app, appending .test to the Bundle ID (e.g., com.fruit.oranges.test).

## Automating Signing Certificates

1. In WordPress, navigate to **Learndash App > Configure > iOS Settings**.

![Screenshot of iOS Settings](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Your-iOS-Learndash-App-_-1.png)

1. Scroll to **Signing Certificates** and check **Automatically generate signing certificates**.

![Screenshot of checkbox to automatically generate  signing certificates ](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Your-iOS-Learndash-App-_-2.png)

1. Click **Save Changes**.
2. Verify that both **Release** and **Test** signing certificates appear below.

## Automating Provisioning Profiles

1. On the same **iOS Settings** page, scroll to **Provisioning Profiles**.

![Screenshot of provisioning profiles](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Your-iOS-Learndash-App-_-3-800x129.png)

1. Check **Automatically generate provisioning profiles**.
2. Click **Save Changes**.
3. Confirm that both **Release** and **Test** provisioning profiles are listed.

## Registering Your App in App Store Connect

1. Sign in at **appstoreconnect.apple.com** with your Apple Developer account.
2. Click **My Apps**, then the **+** button and choose **New App**.
3. Select **iOS**, enter your **App Name**, **Primary Language**, and choose the **Release Bundle ID**.
4. Provide a **SKU** (for internal tracking) and set **User Access** (Full or Limited).
5. Click **Create**.

## Importing Bundle IDs into the Learndash App Plugin

1. In WordPress, go to **Learndash App > Configure > iOS Settings**.
2. Click **Refresh Bundle IDs** to pull in your newly created identifiers.
3. From the **Release App Bundle ID** dropdown, select your release ID.
4. From the **Test App Bundle ID** dropdown, select your test ID.
5. Scroll to **App Information**, paste your **Apple App ID** (found under **App Information** in App Store Connect), and click **Save Changes**.

## Generating and Adding Your App-Specific Shared Secret

1. In App Store Connect, open your app’s **My Apps** entry and scroll to **App-Specific Shared Secret**.
2. Click **Manage**, then **Generate App-Specific Shared Secret**, and copy the value.
3. Back in the Learndash App plugin’s **iOS Settings**, paste the secret into **App-Specific Shared Secret**.
4. Click **Save Changes**.

## Troubleshooting and FAQs

**Q: Why don’t my new Bundle IDs appear after refreshing?****** A: Disconnect and reconnect your Apple account under **iOS Settings**, then click **Refresh Bundle IDs** again. Clear any caching plugins if necessary.

**Q: The signing certificates or provisioning profiles failed to generate.****** A: Ensure your Apple account is connected with Admin-level permissions. Toggle the automatic generation options off and back on, then save again.

**Q: I can’t paste my Shared Secret.****** A: Verify you copied the complete alphanumeric string without extra spaces. Clear your browser cache and try again.

**Q: How soon can I request iOS builds?****** A: Automated certificate and profile generation is instantaneous. Once you’ve saved your settings, you may immediately request iOS builds under the **Build** tab in the Learndash App plugin.

---

## How to Configure Your Android Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-configure-your-android-learndash-app/](https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-configure-your-android-learndash-app/)

## Introduction

Before generating Android builds or syncing in-app purchases with your Google Developer account, you must configure three essential components: your Application ID, your KeyStore certificate, and register your Application ID in Google Play. This guide walks you through each step in your WordPress admin and the Google Play Console.

## Setting Your Application ID

Your **Application ID** uniquely identifies your app on Google Play. It must:

- Consist of at least two dot-separated segments (e.g., com.fruit.oranges).
- Start each segment with a letter.
- Contain only letters, numbers, and underscores.
- Be unused by any other app.
- For test builds, append .test (e.g., com.fruit.oranges.test).

1. In WordPress, go to **Learndash App > Configure > Android Settings**.
2. Under **App Configuration**, enter your chosen Application ID.

![Screenshot of configuring Android Settings](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Your-Android-Learndash-App-_-1.png)

1. In WordPress, go to **Learndash App > Configure > Android Settings**.
2. Under **App Configuration**, enter your chosen Application ID.

![Screenshot of Android App Configuration ](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Your-Android-Learndash-App-_-2.png)

1. Click **Save Changes**.

**Note:** To reserve your Application ID and prevent conflicts, register an app in the Google Play Console using a build with that ID (see “Registering Your Application ID” below). Also register the same ID in Firebase (refer to our Firebase setup guide).

## Generating and Importing Your KeyStore Certificate

### Generating a KeyStore

1. In WordPress, navigate to **LearnDash App > Tools > Generate KeyStore**.
2. Enter a **KeyStore Password** and **KeyStore Alias** (leave blank to auto-generate).

![Screenshot of menu tabs  to Generate KeyStore](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Your-Android-Learndash-App-_-3.png)

1. In WordPress, navigate to **LearnDash App > Tools > Generate KeyStore**.
2. Enter a **KeyStore Password** and **KeyStore Alias** (leave blank to auto-generate).

![Screenshot of KeyStore Information](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Your-Android-Learndash-App-_-4.png)

1. Complete the certificate details (First & Last Name required; Organization optional).
2. Click **Generate**.

![Screenshot of Certificate Information](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Your-Android-Learndash-App-_-5.png)

1. Check the confirmation box and click **Download** to save the ZIP containing your KeyStore.
2. Back up this ZIP securely. Lost KeyStores cannot be replaced, and you’ll need it for all future updates.

### Importing Your KeyStore

1. In WordPress, go to **Learndash App > Configure > Android Settings**.
2. Under **KeyStore Information**, click **Import**.

1. Select the ZIP folder you downloaded.
2. Click **Save Changes**.

## Registering Your Application ID with Google Play

Reserving your Application ID prevents others from claiming it. You do this by uploading any release build with that ID.

**Prerequisite:** You’ve already generated a Release App build under **Learndash App > Build**.

1. Log in to the Google Play Console.
2. Go to **All apps**, select your app, then under **Release** choose **Production**.
3. Click **Create new release**.
4. In **App bundles**, click **Upload** and select the AAB file built with your Application ID.
5. Click **Save** to register the ID.

**Note:** Once registered, all future builds must use this exact Application ID.

## Troubleshooting and FAQs

**Q: My new Application ID doesn’t appear in Android Settings.****** A: Click **Refresh Bundle IDs**, reload the page, and ensure no caching plugin is blocking updates.

**Q: The KeyStore import fails with an error.****** A: Confirm you’re uploading the original ZIP generated by the Learndash App tool. Do not extract or modify its contents before import.

**Q: I get “Invalid Application ID” in Google Play Console.****** A: Ensure your AAB build was generated using the exact Application ID you entered in Android Settings.

**Q: How can I reserve my Application ID without publishing live?****** A: Simply upload any Release App AAB in the **Create new release** screen and click **Save**. No need to roll out the release.

**Q: Can I change my Application ID later?****** A: No. Once registered, the Application ID is permanently reserved. To publish a different app, you must choose a new ID.

---

## How to Configure Google Firebase for Your LearnDash App

**Source:** [https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-configure-google-firebase-for-your-learndash-app/](https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-configure-google-firebase-for-your-learndash-app/)

## Introduction

****Google Firebase Cloud Messaging powers push notifications on Android and iOS. Integrating Firebase V1 with your LearnDash App enables real-time alerts for your members. This guide covers creating a Firebase project, enabling the API, generating service keys, registering mobile apps, and uploading config files in WordPress.

## Creating a Firebase Project

1. Log in to the [Google Firebase Console](https://firebase.google.com/).

![Screenshot of where to create a Firebase project](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Google-Firebase-for-your-Learndash-App-_-1.png)

1. Click **Add Project**, enter a name, and click **Continue**.

![Screenshot of naming the Firebase project](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Google-Firebase-for-your-Learndash-App-_-2.png)

1. (Optional) Enable **Google Analytics**, select or accept the default account, and click **Create Project**.
2. Once setup is complete, click **Continue** to open your new project.

## Enabling Firebase Cloud Messaging API (V1)

1. In Firebase, click the **Settings gear > Project settings**.
2. Go to the **Cloud Messaging** tab.
3. If **Firebase Cloud Messaging API (V1)** is not enabled:

- Click the **⋮ menu > Manage API in Google Cloud Console**.
- Click **Enable** on the Cloud Messaging API page.
- Confirm the API status shows **Enabled**.

![Screenshot of Firebase Project of Overview](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Google-Firebase-for-your-Learndash-App-_-3.png)

1. Go to the **Cloud Messaging** tab.
2. If **Firebase Cloud Messaging API (V1)** is not enabled:

- Click the **⋮ menu > Manage API in Google Cloud Console**.
- Click **Enable** on the Cloud Messaging API page.
- Confirm the API status shows **Enabled**.

![Cloud Messaging API Screenshot](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Google-Firebase-for-your-Learndash-App-_-4.png)

## Generating a Firebase Service Account Key

1. In **Project settings > Service accounts**, scroll to **Firebase Admin SDK**.

![Screenshot of Service Accounts Menu](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Google-Firebase-for-your-Learndash-App-_-5.png)

1. Click **Generate new private key**, then click **Generate Key** in the popup.
2. Save the downloaded .json file securely (it can’t be downloaded again).

## Creating Firebase Apps

![Screenshot of Firebase Platforms](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Google-Firebase-for-your-Learndash-App-_-7.png)

**iOS App:**

1. On the Firebase dashboard, click the **iOS icon**.
2. Enter your **Bundle ID** from **LearnDash App > Configure > iOS Settings**.

![Screenshot of Bundle ID configuration ](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Google-Firebase-for-your-Learndash-App-_-8.png)

1. Click **Register App** and download the GoogleService-Info.plist.

**Android App:**

1. Click the **Android icon**.
2. Enter your **Application ID** from **Learndash App > Configure > Android Settings**.
3. Click **Register App** and download google-services.json.
4. Click **Next** through steps 2–4 and finish with **Done**.

![Screenshot of Application ID](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Google-Firebase-for-your-Learndash-App-_-9.png)

## Connecting Firebase to Your Learndash App

1. In WordPress, go to **LearnDash App > Configure > Google Firebase**.
2. Under **Firebase Cloud Messaging API V1**, click **Upload** to add the .json service account file.
3. Upload your platform-specific files:

- GoogleService-Info.plist for iOS
- google-services.json for Android
- (Optional) Test app config files
4. Click **Save Settings**.

*Note: The V1 API supersedes the Legacy Cloud Messaging API.*

## Troubleshooting and FAQs

**Q: Push notifications aren’t working.****** A: Confirm you uploaded the correct service account and config files. Rebuild the app to apply V1 settings.

**Q: “Missing API key” error in Firebase tab.****** A: Ensure the V1 API is enabled in Google Cloud. Re-upload the JSON file and refresh.

**Q: How do I regenerate my service key?****** A: Delete the old key under Service Accounts, then generate and upload a new one.

**Q: Do test builds need separate config files?****** A: Yes. Upload both release and test config files before saving settings.

---

## How to Configure Apple Universal Links for your Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-configure-apple-universal-links-for-your-learndash-app/](https://learndash.com/support/kb/learndash-app/learndash-app-learndash-app/how-to-configure-apple-universal-links-for-your-learndash-app/)

## Introduction

[Apple Universal](https://developer.apple.com/ios/universal-links/) Links let your website URLs open directly in the Learndash App on iOS, eliminating Safari redirects and creating a seamless experience. This guide walks you through enabling Associated Domains in your Apple Developer account, regenerating provisioning profiles, configuring Universal Links in the Learndash App plugin, and verifying your setup.

## Enabling Associated Domains

1. Log in to your Apple Developer account at **appleid.apple.com**, then open **Certificates, Identifiers & Profiles**.
2. Select **Identifiers**, click your App ID.

![Screenshot of Certificates, Identifiers, and Profiles](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Apple-Universal-Links-for-your-Learndash-App-_-1.png)

1. Go to the **Capabilities** tab.
2. Check **Associated Domains** and click **Save**.

**Note:** After toggling this capability, you must regenerate your provisioning profiles.

## Regenerating Provisioning Profiles

1. In WordPress, go to **Learndash App > Configure > iOS Settings** and find **Provisioning Profiles**.
2. Uncheck **Automatically generate provisioning profiles** and click **Save Changes**.

![Screenshot of provisioning profiles](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Apple-Universal-Links-for-your-Learndash-App-_-3.png)

1. Click the **X** next to each existing profile to delete it, then click **Save Changes** again.
2. Re-enable **Automatically generate provisioning profiles** and click **Save Changes** to create fresh profiles.

## Activating Universal Links

1. Navigate to **Learndash App > Configure > iOS Settings > Universal Links**.
2. Check **Enable Universal Links**.

![Screenshot of Universal Links](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-Apple-Universal-Links-for-your-Learndash-App-_-4.png)

1. (Optional) In **Excluded Links**, list any URL patterns you don’t want to open in the app.
2. Click **Save Changes**.

**Note:** You must request a new iOS build whenever you enable or disable Universal Links.

## Verifying Your Association File

Open your browser and visit:

https://<your-site-url>/.well-known/apple-app-site-association

You should see a valid JSON response containing your app identifiers and supported paths.

## Troubleshooting and FAQs

**Q: My build fails after enabling Associated Domains, what should I check?****** A: Ensure you deleted and regenerated your provisioning profiles, then rebuild and upload the new IPA.

**Q: Universal Links aren’t opening the app, why?****** A: Verify your apple-app-site-association file is served over HTTPS without redirects and contains the correct appID and paths arrays.

**Q: How do I exclude certain URLs from Universal Links?****** A: Add them to the **Excluded Paths** field under Universal Links in your Learndash App settings, then save and rebuild.

**Q: I get a 404 when fetching the association file, what’s wrong?****** A: Make sure your server allows access to /.well-known/ and that the apple-app-site-association file resides at /.well-known/apple-app-site-association.

**Q: Will disabling Universal Links break existing deep links?****** A: Yes, URLs will revert to opening in Safari. Re-enable Universal Links in settings and request a new build to restore in-app behavior.

---

