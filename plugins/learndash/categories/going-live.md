# Going Live

*Category from LearnDash documentation*

---

## How to Publish Your LearnDash App to the Apple App Store

**Source:** [https://learndash.com/support/kb/learndash-app/going-live/how-to-publish-your-learndash-app-to-the-apple-app-store/](https://learndash.com/support/kb/learndash-app/going-live/how-to-publish-your-learndash-app-to-the-apple-app-store/)

## Introduction

Publishing your iOS app to the Apple App Store is straightforward with the Publishing Service. The team ensures your app meets Apple’s App Store guidelines, manages the submission process, and publishes it using your developer account.

**This guide walks you through**downloading your IPA file, uploading it to App Store Connect, submitting it for review, handling rejections, and publishing updates.

## Before You Begin

- Complete all steps in the **Apple App Store Publishing Checklist**.
- Finalize all app customizations.
- Generate the required app screenshots for your white-label app.

## Download the IPA File

1. In your WordPress Dashboard, go to **LearnDash App > Builds**.
2. Locate the build you want to publish and click **Download IPA File**.
3. Save the IPA file to your computer.

## Upload the Build to App Store Connect

You must upload your build to the **TestFlight** section of App Store Connect before submitting it for review.

1. In WordPress, go to **LearnDash App > Upload > Apple App Store**.a

![Screenshot of Build History menu](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Publish-Your-Learndash-App-to-the-Apple-App-Store-_-1.png)

1. Select the **iOS Release App** build to upload.

- Only builds already in App Store Connect can be uploaded.
- The build version and code must be higher than any existing build in App Store Connect.
2. Click **Upload Build**.
3. Allow up to 15 minutes for the upload to complete. Check progress in **Upload History**.

## Submit to Apple for Review

1. Log into App Store Connect.
2. Go to **My Apps** and select your app.
3. In the sidebar, click the app version prepared during your publishing checklist.
4. In the **Build** section, click the **+** icon.
5. Select the Release App build and click **Done**.
6. Click **Add for Review** in the top-right corner.
7. If prompted, review and confirm updated app information.
8. Respond to export compliance questions and upload any required encryption documentation.
9. In **App Review**, click **Submit to App Review**.

- The status will change to **Waiting for Review** and later to **In Review**.

## Respond to Apple Rejections

If Apple rejects your submission:

1. Log into **App Store Connect** and go to **My Apps**.

![](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Publish-Your-Learndash-App-to-the-Apple-App-Store-_-2.png)Screenshot of App Store Connect

1. Click the unresolved issues link at the top.
2. In **In Progress**, click **Resolve** next to the rejected submission.
3. Click **Reply to App Review** and provide your response.
4. Attach any necessary screenshots or supporting documents.
5. Click **Reply** to send your response.

**Notes:**

- If the rejection is due to **metadata issues** (e.g., screenshots, descriptions), you can fix the details and resubmit without uploading a new build.
- For **functional issues**, you must upload a new build and resubmit.

## After Approval by Apple

- **Automatic release:** App goes live within 24 hours.
- **Scheduled release:** App will be published on the specified date.
- **Manual release:** Log into App Store Connect to publish manually.

## Submitting New Versions of Your App

1. In App Store Connect, create a new version under the existing app record.
2. Upload your new build.
3. Submit the new version to Apple for review.

## Troubleshooting and FAQs

**Q: Why can’t I see my uploaded build in App Store Connect?****** A: Apple may take 15–30 minutes to process a new build. Refresh the page after some time.

**Q: My build version shows an error. What should I check?****** A: Ensure the build version and code are higher than your last uploaded build.

**Q: How long does Apple take to review an app?****** A: Most reviews take 24–48 hours. More complex apps may take longer.

**Q: Can I resubmit the same build if rejected?****** A: Yes, for metadata-related rejections. For functional issues, submit a new build.

**Q: How do I answer export compliance questions?****** A: If your app uses encryption (e.g., HTTPS), declare it as required. For most apps, selecting “Yes” with standard encryption is acceptable.

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

## How to Configure Google Play Store Closed Testing

**Source:** [https://learndash.com/support/kb/learndash-app/going-live/how-to-configure-google-play-store-closed-testing/](https://learndash.com/support/kb/learndash-app/going-live/how-to-configure-google-play-store-closed-testing/)

## Introduction

****As of **November 13, 2023**, Google requires all **new Individual Google Developer Accounts** to complete a **closed testing phase** before publishing apps to the Production track in the Play Store. This process includes having at least **12 internal testers** use the app for a minimum of **14 days** before you can unlock production access.

This requirement does not apply if your Google Developer Account was registered before November 13, 2023, or if you are using an **Organization Account**.

## Create a Closed Testing Track

1. Log into the **Google Play Console** and select your app.
2. In the left sidebar, go to **Release > Testing > Closed Testing**.
3. Choose from your active tracks:

- If an existing track is available, click **Manage Track**.
- To create a new one, click **Create Track**.
4. Enter a **Track Name** and click **Create Track**.

- If this is your first time uploading a build to a test track, you may need to accept Google’s terms and conditions.
5. Go to the **Countries/Regions** tab and select where your app should be available for testing.

- To enable testing globally, check the box to select all countries.

## Add Testers to Your Closed Test

1. Go to the **Testers** tab.
2. Select an existing email list or click **Create Email List**.
3. Enter a **List Name** and add at least **12 email addresses**.
4. Click **Save Changes**, then **Create**.
5. Add a **Feedback URL** or email address so testers can send feedback. Click **Save**.
6. Click **Go to Overview** when prompted.

**Important:**

- Google requires a minimum of **12 testers** to opt in to your closed test.
- The **Copy Link** option for the test will only appear after Google approves your release.

## Create a New Release for Closed Testing

1. In your closed testing track, click **Create New Release**.
2. Under **App Bundles**, upload your **.aab** file or select one from your library.
3. Click **Add to Release**.
4. In **Release Details**, confirm the auto-filled version number and add **Release Notes**.
5. Click **Next**, then **Save**.
6. In the popup, click **Go to Overview**.
7. Click **Send Changes for Review**, then confirm again.

Google typically reviews a closed test release in **3–5 days**. Once approved, you’ll receive a **Test Link** to share with testers.

## Configure License Testing

While waiting for approval:

1. From the left sidebar, return to **All Apps**.
2. Under **Setup**, click **License Testing**.
3. Add license testers from your email lists and click **Save Changes**.

License Testing ensures only authorized testers can install and access the app.

## Run the 14-Day Closed Testing Period

Once your closed test release is approved:

1. Share the **Test Link** with your 12+ testers.
2. Testers must opt in and use the app for at least **14 days**.
3. Collect feedback to improve the app before production release.

## Apply for Production Access

After meeting the closed testing requirements:

1. In your app’s **Dashboard**, click **Apply for Production**.
2. Answer questions about:

- Your closed test process.
- Your app/game details.
- Production readiness.
3. Submit your request for review.

**Review Timeline:**

- Usually **7 days or less**.
- Once approved, the **Production** tab will be unlocked so you can upload your final build for public release.

## After Gaining Production Access

1. Create a release in the **Production** track.
2. Upload your final app build.
3. In WordPress, go to **Learndash App > Publishing Service > Google Play Store**.
4. Submit a publishing request.
5. The Publishing Team will manage the app submission and provide updates via email.

## Troubleshooting and FAQs

**Q: Do I need closed testing if I have an Organization Developer Account?****** A: No, this applies only to **new Individual Developer Accounts**.

**Q: Can I skip the 14-day testing period?****** A: No, Google enforces this for all new individual accounts.

**Q: What happens if I add fewer than 12 testers?****** A: You will not meet Google’s requirement, and production access will remain locked.

**Q: When can I share the test link?****** A: Only after Google approves your closed test release.

**Q: How long does Google take to review a closed test release?****** A: Usually **3–5 days**, but it can take longer in some cases.

**Q: How long does production access review take?****** A: Normally **7 days or less** after you apply for production.

---

## How to Publish an Unlisted Learndash App to the Apple App Store

**Source:** [https://learndash.com/support/kb/learndash-app/going-live/how-to-publish-an-unlisted-learndash-app-to-the-apple-app-store/](https://learndash.com/support/kb/learndash-app/going-live/how-to-publish-an-unlisted-learndash-app-to-the-apple-app-store/)

## Introduction

Unlisted apps allow you to distribute private or specialized applications such as internal employee tools, event-specific apps, or research study apps without making them discoverable in the public App Store. These apps never appear in search results, charts, or categories and can only be accessed via a direct link or through Apple Business Manager/Apple School Manager.

This guide explains how to request unlisted distribution in App Store Connect and share your app once approved.

## What Are Unlisted Apps?

Unlisted apps:

- Do not appear in App Store search, recommendations, charts, or categories.
- Are accessible only via a **direct link**.
- Can be distributed through Apple Business Manager or Apple School Manager.
- Are ideal for:

- Organization-specific tools
- Event-related applications
- Research or study apps
- Internal sales resources

## Requesting Unlisted Distribution

Before starting, check your app’s current status in App Store Connect.

**Eligibility Requirements:**

- **If your app has never been reviewed** or is already **approved for public download** > Complete the Unlisted App Request form directly.
- **If your app is approved for private distribution** in Apple Business Manager or School Manager > Create a **new app record** in App Store Connect, upload your binary, set the distribution method to **Public**, then complete the request form.

**Steps to Submit a Request:**

1. In App Store Connect, open the **Unlisted App Request** form.
2. Enter:

- **App Name******
- **App ID******
3. Describe:

- The business problem your app solves
- Why you want unlisted distribution
- Your target audience size
4. Mark:

- The audience category
- Applicable regions
5. Accept the **terms and conditions**.
6. Click **Submit**.

**Note:****** You’ll receive a confirmation email once approved. If rejected, review Apple’s feedback, update your submission, and reapply.

## Distributing an Unlisted App

Once approved:

1. In App Store Connect, go to **General > Pricing and Availability > App Distribution Methods**.
2. Locate your **unlisted distribution link**.
3. Share this link **only** with your intended audience. it will not appear elsewhere in the App Store.

## Tips for a Smooth Process

- Wait for approval before resubmitting the app for review.
- Mention in **App Review Information** that you are requesting unlisted distribution.
- Avoid posting the unlisted link publicly to prevent unauthorized access.

## Troubleshooting & FAQs

**Q: I don’t see the Unlisted App Request form in App Store Connect.****** **A:** Ensure your app is eligible either as a new app record or already public. Then check under **Apps > App Information**.

**Q: My unlisted link still shows in search results.****** **A:** Allow up to 24 hours for Apple’s index to update. Clearing local App Store cache can help.

**Q: How long does approval take?****** **A:** Typically 6–48 hours. You’ll be notified via email once approved or if Apple needs more details.

**Q: My testers can’t access the link.****** **A:** Verify you’ve shared the exact URL from **Pricing and Availability > App Distribution Methods**, and ensure testers are in the approved regions.

**Q: Do I need to repeat the request for new builds?****** **A:** No. Once marked unlisted, all future builds for the same App ID remain unlisted automatically unless you create a new app record.

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

## How to Use the Learndash App Publishing Service

**Source:** [https://learndash.com/support/kb/learndash-app/going-live/how-to-use-the-learndash-app-publishing-service/](https://learndash.com/support/kb/learndash-app/going-live/how-to-use-the-learndash-app-publishing-service/)

## Introduction

The Publishing Service streamlines the process of getting your mobile app live on the Apple App Store and Google Play Store. A dedicated Publishing Team member reviews your app and store listing to ensure compliance with strict app store guidelines, manages all communications with Apple and Google, and handles the submission on your behalf.

This guide walks you through preparing your iOS and Android apps, submitting a publish request, responding to recommended changes, and understanding how the Publishing Team supports you until your app is approved.

## Before You Begin

- Finalize all app customizations.
- Complete the **Apple App Store Publishing Checklist** or **Google Play Store Publishing Checklist** depending on the platform.
- Generate the required app screenshots for your white-label app.
- Avoid making changes to app store records during the publishing process to prevent delays.

## Publishing Your iOS App

1. **Complete the Apple App Store Publishing Checklist****** Ensure every step in the checklist is complete before proceeding.
2. **Access the Publishing Service******
- In WordPress, go to **Learndash App > Publishing Service > Apple App Store**.
3. **Submit Your Publish Request******
- Complete the Publishing Checklist questionnaire and confirm all required steps.
- Select the **Release App** build you wish to publish and click **Confirm Build**.
- Review and confirm the App Store Version.
- Choose whether the Publishing Team will respond to Apple on your behalf or if you will respond directly.
- Click **Submit for Review**.

## Publishing Your Android App

1. **Complete the Google Play Store Publishing Checklist****** Ensure every step in the checklist is complete before proceeding.
2. **Access the Publishing Service******
- In WordPress, go to **Learndash App > Publishing Service > Google Play Store**.
3. **Submit Your Publish Request******
- Complete the Publishing Checklist questionnaire and confirm all required steps.
- Select the **Release App** build you wish to publish and click **Confirm Build**.
- Enter your Google Developer Account ID from **Google Play Console > Settings > Developer account > Account details**.
- Confirm your Release Name and Release Notes.
- Choose whether the Publishing Team will respond to Google on your behalf or if you will respond directly.
- Click **Submit for Review**.

## Responding to Recommended Changes

If the Publishing Team identifies changes needed for app store approval:

1. In WordPress, go to **Learndash App > Publish > Apple App Store** or **Learndash App > Publish > Google Play Store**.
2. Under **Have you made the recommended changes?**, select:

- **Yes** – The team will review your updates before resubmitting.
- **No** – The app will be submitted as-is, increasing the risk of rejection.
3. Under **Do you want to change the build version?**, select:

- **Yes** – Choose the new build to use.
- **No** – Continue with the same build.
4. Click **Submit Response**.

## Responding to Apple and Google

If Apple or Google rejects your app:

- You’ll receive an email outlining the reason(s) for rejection.
- If you opted for the Publishing Team to manage communications, they will respond and guide you through the required changes until approval.
- If you manage communications yourself, respond directly in the respective console and make the necessary updates before resubmitting.

## Troubleshooting and FAQs

**Q: Why is my publish request delayed?****** A: This is usually due to incomplete information, pending checklist items, or extended Apple/Google review times.

**Q: Can I change app details while the Publishing Team is reviewing my request?****** A: No. Any changes during the review may cause delays or rejection.

**Q: I selected the wrong build. What should I do?****** A: Submit a new publish request with the correct build.

**Q: Why was my app rejected?****** A: Common reasons include guideline violations, missing privacy policies, incomplete metadata, or functional issues in the build.

**Q: Do all changes require a new build?****** A: Only functional or design changes require a new build. Metadata-only changes can be submitted without generating a new build.

---

