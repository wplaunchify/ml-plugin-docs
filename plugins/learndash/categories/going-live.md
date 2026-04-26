# Going Live

*Category from LearnDash documentation*

---

## Apple App Store Publishing Checklist – How to Prepare Your iOS Learndash App for Publishing on the Apple App Store

**Source:** [https://learndash.com/support/kb/learndash-app/going-live/apple-app-store-publishing-checklist-how-to-prepare-your-ios-learndash-app-for-publishing-on-the-apple-app-store/](https://learndash.com/support/kb/learndash-app/going-live/apple-app-store-publishing-checklist-how-to-prepare-your-ios-learndash-app-for-publishing-on-the-apple-app-store/)

## Introduction

Preparing your iOS app for the Apple App Store starts with the correct configurations in your Learndash App settings. Before setting up your app in App Store Connect, you must complete several essential steps, such as enabling in-app purchases, configuring moderation for user-generated content, and providing account deletion options.

Completing these steps ensures your app meets Apple’s guidelines, reduces the risk of rejection, and streamlines the review process.

This guide walks you through preparing your app in the Learndash App, configuring details in App Store Connect, and getting your app ready for a smooth submission and review.

## Preparing Your App

### Set Up In-App Purchases

1. If you plan to sell content inside your app, enable and configure **In-App Purchases**.
2. If you only sell via your website, do not display order pages inside the app.

- Apple may approve the app as a **reader app**, allowing access to externally purchased content.
- Approval as a reader app is not guaranteed and is at Apple’s discretion.
3. For setup guidance, see the **In-App Purchases tutorial**.

### Generate an iOS Release Build

1. In your WordPress Dashboard, go to **Learndash App > Build**.
2. Generate an **iOS Release App** build.
3. Refer to the **Submitting a New Build** tutorial for detailed steps.

## Configuring Your App in App Store Connect

### Access App Information

1. Log in to App Store Connect.
2. Open your app and go to **App Information** under the **General** section.
3. Confirm and set:

- App name and tagline.
- Primary/secondary category.
- Third-party content rights (if applicable).
- License agreement (Apple’s standard EULA or your own).
- Age rating questionnaire (note: “Made for Kids” cannot be changed later).
4. Click **Save**.

### Pricing and Availability

1. Go to **Monetization > Pricing and Availability**.
2. Choose a price (Free or Paid).

- Paid apps require a **Paid Applications Agreement** (covered in the In-App Purchases tutorial).
3. Select availability (all regions, selected regions, or pre-order).
4. Click **Next** > **Confirm**.

### App Privacy

1. Go to **App Privacy > Trust and Safety**.
2. Enter your **Privacy Policy URL**.
3. Complete the privacy questionnaire, specifying:

- Data collected.
- Purpose of collection.
4. Click **Save**.

### Prepare a New App Version

- For a new app, version **1.0** is created automatically.
- For an update, create a new version.
- Wait for any current review to finish or cancel it before creating a new version.

### Upload Screenshots

1. Under **Previews and Screenshots**, upload at least one screenshot for iPhone 6.5-inch or 6.9-inch displays.
2. Format: JPG/PNG in RGB color space.
3. Required sizes:

- iPhone 6.5-inch: **1242×2688** (portrait) or **2688×1242** (landscape).
- iPhone 6.9-inch: **1290×2796** (portrait) or **2796×1290** (landscape).

### Add App Details

- Promotional text highlighting features.
- Description of functionality.
- Keywords separated by commas.
- Support URL and marketing URL.
- Copyright (e.g., *2025 App Inc.*).
- Update the version number if required.

### App Review Information

1. If sign-in is required, check **Sign-In Required**.
2. Provide valid login credentials for Apple reviewers.
3. Add any reviewer notes or attachments.
4. Provide contact information.

### Release Options

- **Manual release** – publish manually after approval.
- **Automatic release** – publish immediately after approval.
- **Scheduled release** – publish on a set date.
Click **Save** when done.

## Submitting for Review

1. In your WordPress Dashboard, go to **Learndash App > Publishing Service > Apple App Store**.
2. Submit your app version.
3. The Publishing Team will upload your build, prepare the release, and submit it to Apple.
4. You may request a review before submission to improve approval chances.

## Troubleshooting & FAQs

**Q: Can I display website order pages in my app?****** A: No. For reader apps, avoid in-app order pages to prevent rejection.

**Q: Is a Privacy Policy required?****** A: Yes, all apps must have a public Privacy Policy URL.

**Q: Why must I provide login credentials?****** A: Apple needs complete access to test your app’s features.

**Q: Can I change “Made for Kids” later?****** A: No. Once set, it cannot be changed.

**Q: Do screenshots need specific sizes?****** A: Yes, Apple requires exact resolutions for 6.5” and 6.9” devices.

**Q: My app was approved but I can’t see it in the store.****** A: If on manual release, you must publish it in App Store Connect. If scheduled, it will appear on the chosen date.

---

## How to Publish Your Android LearnDash App to the Google Play Store

**Source:** [https://learndash.com/support/kb/learndash-app/going-live/how-to-publish-your-android-learndash-app-to-the-google-play-store/](https://learndash.com/support/kb/learndash-app/going-live/how-to-publish-your-android-learndash-app-to-the-google-play-store/)

## Introduction

If you haven’t published your Android app yet, we recommend using the **Publishing Service**. The Publishing Team will review your app for compliance with Google Play Store guidelines and publish it live under your developer account.

This guide explains the **manual publishing process** that includes the downloading your AAB file, submitting it to a Production release, inviting testers via Testing Tracks, and handling possible rejection, all from within WordPress.

## Before You Begin

- Complete all steps in the **Google Play Store Publishing Checklist**.
- Finalize your app branding, settings, and required screenshots for your white-label app.

## Downloading the AAB File

1. In **WordPress Admin**, go to **LearnDash App > Upload > Google Play Console**.
2. Select the build you want to publish.
3. Choose the file format and click **Download Build**.

![Screenshot of Upload Build - Connect to Google Play Store](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Publish-Your-Android-LearnDash-App-to-the-Google-Play-Store-_-2.png)

**Note:** Since **August 2021**, Google requires **AAB** files for new submissions. If your app was previously published, you can still use APKs for updates.

## Submitting Your App to Google for Review

1. Log in to your **Google Play Console**.
2. From the Home page, click your app to open details.
3. In the sidebar under **Test and release**, select **Production**.
4. Click **Create new release** (or **Edit release** for updates).
5. In **App bundles**, click **Upload** and select your AAB file.
6. Enter a **Release name** and **Release notes** (refer to your checklist).
7. Click **Save as draft** or **Next** to proceed.

## Reviewing and Submitting Your Release

1. Review the release and resolve any **errors** (warnings are optional to address).
2. Click **Start rollout to Production**.
3. Your app’s status changes to **In review**.
4. Track publishing status under your app title and Application ID.

## Handling Google Rejections

If your release is rejected, you’ll receive an email explaining why:

- **Metadata Issues** → Update store listing, privacy policy, or content rating in Play Console, then resubmit.
- **App Issues** → Fix code-level issues, build a new version, and submit again.

## After Approval

- Approved apps go live immediately in your configured regions.
- If **Managed Publishing** is enabled, approve the release from the **Managed Publishing** page before it goes live.

## Publishing New Versions

To update your app:

1. Generate a new build.
2. Upload it to your **Production** track.
3. Submit for review.

## Troubleshooting and FAQs

**Q: Where do I find my AAB file?** **A:** Go to **LearnDash App > Upload > Google Play Console** and click **Download Build** for your selected build.

**Q: Why do I see a “higher version code required” error?** **A:** Increase the **version code** in your plugin so it’s higher than any build in Play Console.

**Q: My release is stuck in “Draft.”****** **A:** You must click **Start rollout to Production.**Drafts don’t publish automatically.

**Q: Testers can’t join my Testing Track.****** **A:** Confirm you copied the correct URL from **Testing > Closed testing > How testers join your test**, and that their emails are listed under both **Testers** and **License testing**.

**Q: Do I need to redo the checklist for minor updates?****** **A:** No. Once published, future builds under the same App ID reuse your configuration. Just upload the new AAB and roll out.

---

## How to Update Your Android Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/going-live/how-to-update-your-android-learndash-app-2/](https://learndash.com/support/kb/learndash-app/going-live/how-to-update-your-android-learndash-app-2/)

## Introduction

Keeping your Android app up to date ensures users always have access to the latest features, bug fixes, and updated In-App Purchase pricing.

This guide walks you through generating a new Android Release build, downloading the AAB, submitting it to Google Play Console, and addressing review feedback.

## Creating a New Android Release App Build

1. In your WordPress admin, go to **Learndash App > Build**.
2. Click **Request Build**.

![Screenshot of Build History Menu](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Update-Your-Android-Learndash-App-_-1.png)

1. Select **Android** as the Platform and **Release App** as the Build Type.

![Screenshot of "Select Platform"](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Update-Your-Android-Learndash-App-_-2-copy.png)

1. Click **Next Step**, then **Send Build Request**.
2. When complete, go to **Build History**.

![Screenshot of App Store Connect](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Update-Your-Android-Learndash-App-_-4.png)

1. When complete, go to **Build History**.
2. Click **Download AAB File** on your new release build.

**Note:** Since August 2021, Google requires **AAB** files for new submissions. Previously published apps may still use APKs.

Save the downloaded AAB file in a secure location. You will need it for your Play Store update.

## Downloading Your Latest Build from WordPress

1. In WordPress admin, go to **Learndash App > Upload > Google Play Console**.
2. Select the **Release** build you want to update and choose the file format.
3. Click **Download Build**.

**Note:** Use **AAB** for new submissions; legacy APKs remain supported if previously published.

## Resubmitting to Google Play Console

1. Log into **Google Play Console**.
2. In **All apps**, select your app.
3. Under **Release > Production**, click **Create new release** (or **Edit release** if one exists).
4. In **App bundles and APKs**, click **Upload** and choose your downloaded AAB.
5. Enter a **Release name** and **Release notes** (as per your Publishing Checklist).
6. Click **Save**, then **Review release**.
7. Resolve any **errors** (required) or **warnings** (recommended).
8. Click **Start rollout to Production** to submit for review.

## Responding to Google Rejections

- **Metadata Issues** – Revise your store listing, privacy policy, or content rating in Play Console, then resubmit the same release.
- **App Issues** – Fix code-level issues, rebuild your AAB, and repeat the **Create new release** process.

You’ll receive detailed emails from Google and can track your submission status in Play Console.

## After Approval by Google

- If **Managed publishing** is OFF – Your app will go live immediately in approved regions.
- If **Managed publishing** is ON – You must manually approve the release before it appears in the store.

## Troubleshooting & FAQs

**Q: Why can’t I upload my AAB?****** A: Ensure the **versionCode** in your build is higher than any previously uploaded version.

**Q: My release remains in “Draft” status.****** A: You must click **Start rollout to Production**; saving alone does not publish the update.

**Q: What if I only changed metadata?****** A: Metadata-only changes still require a **new release** to be created and rolled out.

**Q: Can I revert to a previous version if something breaks?****** A: Yes. Create a new release using the last working AAB and roll it out to Production.

**Q: Do I need to repeat the checklist for every update?****** A: No. Once your app is published, future submissions under the same App ID inherit prior configuration. Just upload the new AAB and roll out.

**Q: My AAB upload fails with a “signing” error.****** A: Ensure the AAB is signed with the same key as previous versions. Changing keys will block updates.

---

