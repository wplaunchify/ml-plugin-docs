# Managing Learndash App

*Category from LearnDash documentation*

---

## How to Configure the Delete Account Settings

**Source:** [https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-configure-the-delete-account-settings/](https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-configure-the-delete-account-settings/)

## Introduction

The **Delete Account** settings allow you to specify where account deletion requests are sent and customize the subject line for these requests.

This guide walks you through setting the **Delete Request Email** and **Email Subject** fields.

## Accessing the Delete Account Section

1. Go to your  **Learndash App > Settings.**

1. Click the **Feedback tab.**

1. Scroll down to the Delete Account Section.

## 

## Setting the Delete Request Email

1. In the **Delete Request Email** field, enter the email address where account deletion requests should be sent.

Note: If you leave this field empty, the **Administration Email Address** from your WordPress settings will be used by default.

## Setting the Email Subject

1. In the **Email Subject** field, enter the subject line you want to appear for all account deletion request emails.
2. Example: **[Hello World] Account Deletion Request**.

## Troubleshooting and FAQs

**Q: What happens if I leave the Delete Request Email field empty?****** A: The system will send account deletion requests to your WordPress **Administration Email Address**.

**Q: Can I use multiple email addresses?****** A: No. Only one email address can be specified in the **Delete Request Email** field.

**Q: Can I change the subject line later?****** A: Yes. You can edit the **Email Subject** at any time, and new deletion requests will use the updated subject line.

---

## How to Configure API CDN

**Source:** [https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-configure-api-cdn/](https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-configure-api-cdn/)

## Introduction

****Using a Content Delivery Network (CDN) to serve your media files such as images, documents, and videos improves app speed and reduces server load by routing traffic through faster, globally distributed edge servers.

This guide walks you through enabling API CDN in your LearnDash App, setting your CDN URL, and optimizing performance through seamless media delivery.

## Enabling the API Performance Component

1. In your WordPress admin, go to **LearnDash App > Components**.

![Screenshot of Components Menu](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-API-CDN-in-Your-Learndash-App-_-1.png)

1. Toggle on **API Performance**.

![Screenshot of toggle to turn on API Performance](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-API-CDN-in-Your-Learndash-App-_-2.png)

1. Click **Save Changes**.

## Configuring Your CDN URL

1. Navigate to **LearnDash App > Settings > API CDN**.

![Screenshot of Settings and API CDN menu](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-API-CDN-in-Your-Learndash-App-_-3.png)

1. Check **Enable API CDN**.

![Screenshot of Enable API CDN toggle](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-API-CDN-in-Your-Learndash-App-_-4.png)

1. Check **Enable API CDN**.
2. Enter your CDN base URL (without a trailing slash).
3. Click **Save Changes**.

**Note:** Use the CDN URL provided by your service (e.g., CloudFront, StackPath, BunnyCDN).

## How the API CDN Works

- **First Request:** The app fetches media from your WordPress site and uploads it to your CDN.
- **Subsequent Requests:** The media is served via your CDN’s domain, reducing latency.
- **Offline Courses:** If LearnDash offline mode is enabled, media downloads come from the CDN as well.

## Integrations & Best Practices

- **Vimeo Integration:** For secure offline LearnDash videos, use the [Vimeo integration] (requires Vimeo Pro).
- **API Caching:** For optimal performance, combine **API CDN** with **API Caching**. See our caching tutorial for configuration steps.

## Troubleshooting and FAQs

**Q: Why is my media still loading from the origin server?****** **A:** Double-check that **Enable API CDN** is toggled on and your CDN URL is correct (no trailing slash).

**Q: My CDN isn’t showing new media files.****** **A:** Clear any plugin/CDN caches, then access the media in the app to trigger syncing.

**Q: I’m getting errors when saving the CDN URL.****** **A:** Make sure the URL uses **HTTPS** and your server can reach the CDN provider.

**Q: Media for offline courses isn’t downloading.****** **A:** Confirm both **Enable API CDN** and **LearnDash Offline Courses** are active. Also ensure your CDN files are publicly accessible.

**Q: Can I exclude certain file types from the CDN?****** **A:** Not from the app settings. Use your CDN provider’s custom rules or URL patterns to filter asset types.

---

## How to Set Up a Private LearnDash App

**Source:** [https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-set-up-a-private-learndash-app/](https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-set-up-a-private-learndash-app/)

## Introduction

Your Learndash App reflects your public website. This allows visitors to view content without logging in. Enabling **private app access** ensures that only authenticated users can view or interact with any content. This setting improves security, boosts registrations, and keeps your community restricted to approved members.

This guide walks you through enabling the Private app access feature of your Learndash App.

## Enabling Private App Access

1. In your WordPress **Dashboard**, go to **Learndash App > Configure > General**.
2. Scroll to the **Privacy** section.
3. Check the box: **Restrict App Access to Only Logged In Members**.

![Screenshot of menu](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Setup-a-Private-Learndash-App-_1.png)

1. In your WordPress **Dashboard**, go to **Learndash App > Configure > General**.
2. Scroll to the **Privacy** section.
3. Check the box: **Restrict App Access to Only Logged In Members**.

![Screenshot of privacy settings](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Setup-a-Private-Learndash-App-_-2.png)

1. Click **Save Changes**.

## Verifying Private App Behavior

1. Force-quit the Learndash App on your mobile device.
2. Relaunch the app. You should land on the **Login screen**, and the **“Continue Without Logging In”** option should be hidden.
3. Try to tap any content.
4. You should be prompted to **log in before accessing** any content.

## Troubleshooting and FAQs

**Q: I still see public content without logging in.****** A: Clear all caching plugins on your site and save the settings again.

**Q: “Continue Without Logging In” is still visible.****** A: Double-check that you clicked **Save Changes** after enabling the privacy setting.

**Q: Can I restrict only certain content instead of the entire app?****** A: No. This setting applies app-wide. For selective content restriction, adjust visibility settings at the **group, course, or page** level.

---

## How to Enable the “Rate This App” Feature in the LearnDash App

**Source:** [https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-enable-the-rate-this-app-feature-in-the-learndash-app/](https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-enable-the-rate-this-app-feature-in-the-learndash-app/)

## Introduction

Encouraging members to rate your app improves visibility and credibility in the **Apple App Store** and **Google Play Store**.

This guide walks you through enabling the “Rate This App” menu item so users can leave a review directly from the app once it’s live.

## Publishing Prerequisite

Before enabling this feature, ensure your app is **approved and published** in both app stores.
The menu links to live store listings and **won’t work on unpublished or test builds**.

## Retrieve Your App Store IDs

### Apple App ID

1. Open your public app listing in the **Apple App Store** (e.g., https://apps.apple.com/app/idXXXXXXXXX).
2. Copy the **numeric ID** after id (e.g., XXXXXXXXX).

### Android Application ID

1. Open your app’s listing in the **Google Play Store** (e.g., https://play.google.com/store/apps/details?id=com.example.app).
2. Copy the **Application ID** after id= (e.g., com.example.app).

## Enter Store IDs in the Learndash App Plugin

### Apple App ID

1. Go to **LearnDash App > Configure > iOS Settings**.

![Screenshot of Configure iOS Settings Menu](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Enable-the-Rate-This-App-Feature-in-the-Learndash-App-_-1.png)

1. Scroll to **App Information > Apple App ID**.
2. Paste the ID and click **Save Changes**.

### Android Application ID

1. Go to **LearnDash App > Configure > Android Settings**.

![Screenshot of LearnDash App Configure Android Settings Menu](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Enable-the-Rate-This-App-Feature-in-the-Learndash-App-_-2.png)

1. Scroll to **App Information > Application ID**.
2. Paste the ID and click **Save Changes**.

## Enable the Rate This App Menu

1. Navigate to **LearnDash App > Settings > Feedback**.

![Screenshot of LearnDash App Feedback Settings Menu](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Enable-the-Rate-This-App-Feature-in-the-Learndash-App-_-3.png)

1. Scroll to **Rate This App**.
2. Check **Enable Rate This App** for iOS and/or Android.

![Screenshot of where to enable Rate This App for iOS and Android](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd0JjtuQ3f6BQUBAh7Ga5OhgMb4m52fZhhTx4RpAqY7zyf5bDdAbd96EAGGJlkxQfRd1SUXw4y_2yxNW3VTh-eaOA5O7WcmVD3z-f2sTIFiCDTGGe38pGSdl-H01OphjnN2mvJuig?key=m9i9_Fj7SVMAiSXgy9GTRw)

1. Click **Save Changes**.

## Test the Rate This App Menu

1. Force-quit and relaunch your mobile app.
2. Go to **More > Settings > Rate This App**.
3. Tap the option and verify it opens your app listing in the store.

## Troubleshooting and FAQs

**Q: Why isn’t the “Rate This App” menu showing?****** A: Make sure it’s enabled in settings and restart the app after saving.

**Q: Why is it linking to the wrong app?****** A: Double-check that your App ID or Application ID is correct with no typos or extra spaces.

**Q: Why can’t I see the review prompt in the store?****** A: Scroll down the store listing to find the **Ratings & Reviews** section.

**Q: Can I rename the “Rate This App” menu item?****** A: Not through the settings. Custom code is required to change the label.

---

## How to Enable and Use the Report a Bug Feature in the LearnDash App

**Source:** [https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-enable-and-use-the-report-a-bug-feature-in-the-learndash-app/](https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-enable-and-use-the-report-a-bug-feature-in-the-learndash-app/)

## Introduction

****The **Report a Bug** feature allows members to submit detailed bug reports including descriptions, media attachments, and device information directly from the Learndash App.

This guide walks you through enabling the feature and explains how users can submit reports for quicker issue tracking and resolution.

## Enable Bug Reporting

1. In your WordPress **Dashboard**, go to **LearnDash App > Settings > Feedback**.
2. Check the **Report a Bug** box to activate the feature in the app.

![Screenshot of Feedback Settings Menu](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Enable-and-Use-the-Report-a-Bug-Feature-in-the-Learndash-App-_-1.png)

1. In your WordPress **Dashboard**, go to **LearnDash App > Settings > Feedback**.
2. Check the **Report a Bug** box to activate the feature in the app.

![Screenshot of toggle option to enable report a bug menu in the LearnDash App](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Enable-and-Use-the-Report-a-Bug-Feature-in-the-Learndash-App-_-2.png)

## Set the Bug Report Email

1. In the **Bug Report Email** field, enter the email address where bug reports should be sent.

Note: If left blank, the system uses your **Administration Email Address** under **Settings > General**.

1. (Optional) Add a default subject line in the **Email Subject** field.
2. Click **Save Changes**.

## Submit a Bug Report from the App

1. Open the **LearnDash App** on your mobile device.
2. Tap **Settings > Report a Bug**.
3. Enter your **bug description**.
4. (Optional) Tap **Upload Image or Video** to attach screenshots or videos.
5. Tap **Send** to submit.

Bug reports sent to your inbox will include:

- Message content
- Apple ID or Google Account
- Platform (iOS or Android)
- App Version
- OS Version
- Device Model
- User’s Email Address

## Troubleshooting and FAQs

**Q: Why am I not receiving bug report emails?****** A: Make sure the **Bug Report Email** is set and correct. If blank, check the **Administration Email** in WordPress and look in your spam or junk folder.

**Q: Why aren’t image or video attachments included?****** A: Confirm the user tapped **Upload Image or Video** and that file sizes are within your server’s upload limit. You may also need to check PHP upload size settings.

**Q: The “Report a Bug” option is missing in the app.** A: Ensure the feature is enabled under **LearnDash App > Settings > Feedback** and saved. Restart the app to refresh settings.

**Q: Can users report a bug without uploading media?****** A: Yes. Attachments are optional. Users can submit text-only bug descriptions if preferred.

---

## How to Enable “Send Us Feedback” in the LearnDash App

**Source:** [https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-enable-send-us-feedback-in-the-learndash-app/](https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-enable-send-us-feedback-in-the-learndash-app/)

## Introduction

****Collecting feedback from your app users helps you identify issues, improve the experience, and support your community more effectively. The **Send Us Feedback** feature in the LearnDash App allows users to submit comments, media attachments, and device details directly to your inbox.

This guide walks you through enabling the feature and explains how users can submit feedback within the app.

## Configure the Feedback Settings

1. In WordPress, go to **LearnDash App > Settings > Feedback**.

![Screenshot of Feedback Settings Menu](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Enable-Send-Us-Feedback-in-the-Learndash-App-_-1.png)

1. Check **Send Us Feedback** to enable the feature.

![Screenshot of the toggle option to enable the send us feedback menu in app](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Enable-Send-Us-Feedback-in-the-Learndash-App-_-2.png)

1. In **Feedback Email**, enter the address where feedback should be sent.

![Screenshot of where to enter the email to receive submitted feedback](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Enable-Send-Us-Feedback-in-the-Learndash-App-_-3.png)

Note: If left blank, it defaults to the **Administration Email** under **Settings > General**.

1. (Optional) Add a custom **Email Subject** for incoming feedback messages.

![Screenshot of where to add an email subject for the App Feedback Option](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Enable-Send-Us-Feedback-in-the-Learndash-App-_-4.png)

1. Click **Save Changes**.

## Submit Feedback from the LearnDash App

1. Open the LearnDash App on your mobile device.
2. Go to **Settings** (from the **More** menu).
3. Tap **Send Us Feedback**.
4. Enter your message in the feedback box.
5. (Optional) Tap **Upload Image or Video** to attach media.
6. Tap **Send** to submit the feedback.

Submitted emails will include:

- Feedback message
- User’s Apple ID or Google account
- Platform (iOS/Android)
- App and OS version
- Device model
- User’s email address

## Troubleshooting and FAQs

**Q: Why am I not receiving feedback emails?****** A: Check the Feedback Email setting and spam folder. If blank, verify the admin email under Settings > General.

**Q: Why aren’t attachments arriving with the message?****** A: Ensure files were uploaded and are within the server’s size limit.

**Q: Why doesn’t the “Send Us Feedback” option appear in the app?****** A: Confirm the feature is enabled, save changes, and restart the app to refresh the settings.

---

## How to Configure the Smart Banner in the LearnDash App

**Source:** [https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-configure-the-smart-banner-in-the-learndash-app/](https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-configure-the-smart-banner-in-the-learndash-app/)

## Introduction

****The **Smart Banner** feature prompts mobile visitors to download or open your LearnDash App directly from your website. When a visitor accesses your site on a mobile browser, they’ll see a banner with specific options. Either to download the app or open it if already installed.

This guide walks you through setting up the Smart Banner for iOS and Android platforms.

## Retrieve Your App Store IDs

### Apple App ID

1. Visit your app listing on the **Apple App Store** (e.g., https://apps.apple.com/…/id1558004735).
2. Copy the numeric **App ID** after id= (e.g., 1558004735).

### Google Application ID

1. Visit your app listing on the **Google Play Store** (e.g., https://play.google.com/store/apps/details?id=com.ball.ribbon).
2. Copy the value after id= (e.g., com.ball.ribbon).

Save both IDs for use in the configuration steps below.

## Configure the Apple Smart Banner

1. Go to **LearnDash App > Configure > iOS Settings**.

1. Scroll to **App Information**.
2. Paste your **Apple App ID** into the designated field.
3. Click **Save Changes**.

## Configure the Android Smart Banner

1. Go to **LearnDash App > Configure > Android Settings**.

![Screenshot of LearnDash App Configure Android settings menu](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-the-Smart-Banner-in-the-Learndash-App-_-1.png)

1. Confirm your **Application ID** is listed under **App Configuration**.
2. Ensure the box **I have registered this Application ID in Google Developer Account** is checked.
3. Click **Save Changes**.

## Enable the Smart Banner

1. Go to **LearnDash App > Settings > Smart Banner**.

![Screenshot of Smart Banner Settings in LearnDash App Menu](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-the-Smart-Banner-in-the-Learndash-App-_-3.png)

1. Check **Enable on iOS** and/or **Enable on Android**.
2. Click **Save Changes**.

## Troubleshooting and FAQs

**Q: Why can’t I see the Smart Banner settings?****** A: Confirm your **Apple App ID** is saved and the **Application ID** checkbox is enabled in Android settings. Then reload the page.

**Q: Why isn’t the banner showing on iOS devices?****** A: Smart Banners only work in **Safari** on iOS. Test on a physical device and clear any cache.

**Q: Why isn’t the banner appearing on Android?****** A: Ensure you’re using **Chrome**, and that the **Application ID** is correct and the checkbox is enabled.

---

## How to Configure External Link Handling in the LearnDash App

**Source:** [https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-configure-external-link-handling-in-the-learndash-app/](https://learndash.com/support/kb/learndash-app/managing-learndash-app/how-to-configure-external-link-handling-in-the-learndash-app/)

## Introduction

The **External Link Handling** feature lets you control how external URLs open in your LearnDash App, whether from blog posts, course content, or custom menus. You can choose to open links in an **in-app browser**, the device’s **default browser**, or **let users choose** their preference.

This guide walks you through configuring link handling settings and how users can manage their preference in-app.

## Configure Link Handling Options

### Access Compatibility Settings

1. In WordPress, go to **LearnDash App > Settings > Compatibility**.

![Screenshot of LearnDash App Compatibility Settings Menu](https://learndash.com/support/wp-content/uploads/2025/08/How-to-Configure-External-Link-Handling-in-the-Learndash-App-_-1.png)

1. Locate the **Link Handling** dropdown.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXchwdivQnGOIrsPxrxkNqfHvobUytzNvKyuPbi0HrcpJZaQD05UT2olrTZxVvGgtk6KeZFDAI5ztiHBcTQWX8CTKohjwhhepFIxHqgMpkcs6wHTwMrWJPF4GLuw62LCMPA2bepe-w?key=55FT6owzuyjT6S_oyeetPg)

### Use In-App Browser

1. Select **In-App Browser** from the dropdown.
2. Click **Save Changes**.
3. Hard-quit and relaunch the LearnDash App.
4. Tap an external link. It should now open within the app’s built-in browser.

### Use External Browser

1. Go to **Compatibility > Link Handling**.
2. Select **External Browser**.
3. Click **Save Changes**, then restart the app.
4. Tap any link, it should open in your device’s native browser (Safari or Chrome).

### Let Members Choose (“Ask Member”)

1. In the Link Handling dropdown, select **Ask Member**.
2. Click **Save Changes**.
3. Hard-quit and reopen the app.
4. Tap an external link, the app will prompt users to choose between In-App or External Browser.

- The user’s choice is saved for future link taps.

## Change Browser Preference In-App

1. In the LearnDash App, go to **More > Settings > Web Browser**.
2. Toggle between **In-App Browser** and **External Browser**.

Note: This option only appears if **Ask Member** is selected in the plugin settings.

## Troubleshooting and FAQs

**Q: Why are links still opening in the wrong browser?****** A: Restart the app after saving settings. Make sure caching plugins aren’t interfering.

**Q: Why don’t I see the “Web Browser” setting in the app?****** A: This menu appears only if **Ask Member** is enabled under Compatibility settings.

**Q: Can I make certain domains always open in-app?****** A: No. The current setup applies a global setting for all external links.

---

