# App Builds

*Category from LearnDash documentation*

---

## How to Configure General App Settings

**Source:** [https://learndash.com/support/kb/learndash-app/app-builds/how-to-configure-general-app-settings/](https://learndash.com/support/kb/learndash-app/app-builds/how-to-configure-general-app-settings/)

## Introduction

Maintaining essential build settings like your app’s connection, icon display name, and minimum allowed version ensures users have a consistent and secure app experience.

This guide shows you how to connect your site, set the App Icon Name, and configure Minimum Build Versions to prompt outdated users to upgrade.

## Connecting Your App

1. In your WordPress admin, go to **Learndash App > Configure > Connect**.
2. Enter your **App ID** and **App Key**, then follow the on-screen prompts to connect your app.

## Configuring Your General Settings

### App Icon Name

1. Go to **Learndash App > Configure > General**.
2. Under **App Icon Name**, enter the text you want displayed below the home screen icon and in push notifications.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe3YPRZZrndW1Ovd3pdBHCo6VpTRq4WD-MSC8-lJOAQ9CpIAZWF1X_fqUVe5mbSRxnFkbmgyMLaWWNTJZUnuZGVzqhPmPfWw6effiVXdQqEfsEtm1O3kpmoScZ2oZA2I2mGzV6qzQ?key=te9Lc2GOiioeyLhfkkOoWQ)

1. Click **Save Settings**.

**Note:** Changing the App Icon Name requires publishing a new build so the update appears on devices.

### Minimum Build Version

1. Still in **Learndash App > Configure > General**, scroll to **Minimum iOS Build Version** and **Minimum Android Build Version**.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdnFDPl9-pnJoLS74voRaA3DQJE5llk2_nCVQUiSw3Gy0g4QmygUaap-NF9a2t1KqYPy2hiQ_M2e1gDphyjmKTZbxtzZMx74dmlH79voiN5vU-OF4y04Z5DOaA4MS8gR701gd2a?key=te9Lc2GOiioeyLhfkkOoWQ)

1. Select the lowest version you want to support.
2. Click **Save Settings**.

**Note:** Members using older versions will be prompted to update before continuing. Only versions already published to the App Store or Play Store will appear in the dropdown.

## Verifying Installed Build Version

1. Open the Learndash App on your mobile device.
2. Tap **Settings > About**.
3. Review the **Version** displayed to confirm which build is currently installed.

## Troubleshooting and FAQs

**Q: Why doesn’t the new App Icon Name show up?****** **A:** You must publish a new build after saving the updated name for it to reflect on devices.

**Q: Members on old builds aren’t being prompted to update.****** **A:** Ensure the selected **Minimum Build Version** is already live. Then ask users to force-close and reopen the app to trigger the prompt.

**Q: I don’t see my latest build in the dropdown.****** **A:** Only published builds are shown. Go to **Learndash App > Builds** and confirm that your target build is published.

**Q: Can I enforce version updates separately for iOS and Android?****** **A:** Yes. The **Minimum Build Version** setting allows platform-specific enforcement.

**Q: Do I need to publish a new build for every General setting change?****** **A:** Only changes affecting the user interface or behavior (like App Icon Name or minimum versions) require a rebuild. Most other settings apply instantly.

---

## How to Generate Android Release Apps

**Source:** [https://learndash.com/support/kb/learndash-app/app-builds/how-to-generate-android-release-apps/](https://learndash.com/support/kb/learndash-app/app-builds/how-to-generate-android-release-apps/)

## Introduction

Android Release Apps allow you to prepare production-ready builds for Google Play submission, real-world testing, and accurate In-App Purchase validation. Built using our cloud-based servers, Release Apps compile your site’s configuration, branding, menus, and any GitHub-connected customizations into an **Android App Bundle (AAB)** file.

While **Test Apps** are ideal for daily QA and rapid development previews, **Release Apps** are required for publishing to Google Play and verifying actual subscription pricing, durations, and purchase flows.

This guide will walk you through creating an Android Release App build, uploading it to a Google Play testing track, inviting testers, and managing build updates.

## Release vs Test Apps

**Test Apps**

- Best for daily QA, stakeholder demos, and custom code previews.
- Installable via QR code without using Google Play.
- Simulate purchases with placeholder pricing (no real transactions).

**Release Apps**

- Required for Google Play Store submission and live testing.
- Generated as AAB files for Google Play upload.
- Display actual pricing, subscription durations, and terms.
- Enable genuine In-App Purchase transactions.

## Creating an Android Release App Build

1. In WordPress Admin, go to **Learndash App > Build**.
2. Click **Request Build**.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd7hr3IxBwMN2e-lwYX0AZjMevJLocMfrqx_KYX6qWMRsCsZN75t45GeQiGcSwjQEt15p6zSDk6UnrcemhbYT2Um-XpCbC5PfYHq-qhpQJSxLB0NK6_7yjQag6df9fgKLvXJANmqQ?key=BBtWRUC0ngh1eQ0be4JFNg)

1. Select **Android** as the Platform and **Release App** as the Build Type.
2. Click **Next Step**, then **Send Build Request**.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc1Gwm_GWJ6NrhB0ZzD3-K05PRVG2bURmAMsXPAg1fyeH-LA37AxAEOOBqDBa61txLQmDrjj493elv-iO97Ui_W9fpiwdcTmB1G8ivJ_4F99f1X3v8dovT0rs5JMIR8y2ebnqsTZA?key=BBtWRUC0ngh1eQ0be4JFNg)

1. Wait for the build to complete.
2. In **Build History**, click **Download AAB File** for the finished release build.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdCXH6CRZaGxz2ODpoHk2AjNr3D-PGJ2bGcmFoQq4IkiFuNuvOHBdS7X1qaqfrOTF3ybRlHglTYKC3Xv7V36JRdJLLm_Ac_D0BdAZgaKTKks9GoBggZESpRplx9UO96Pqqm3B86Fw?key=BBtWRUC0ngh1eQ0be4JFNg)

**Note:** Since August 2021, Google requires AAB uploads. APK uploads are only possible if previously published.

## Uploading Your AAB to a Google Play Testing Track

1. Log in to the Google Play Console.
2. Open your app under **All apps**.
3. Under **Release > Production**, confirm your target countries/regions are set.
4. Go to **Release > Testing** and choose **Closed testing** (recommended for In-App Purchase QA).
5. Click **Manage track** (e.g., Alpha) > **Create new release**.
6. In **App bundles and APKs**, upload your downloaded AAB.
7. Under **Release details**:

- Leave the auto-filled release name as is.
- Paste the Learndash App release notes.
8. Click **Save**, then **Review release**, then **Start rollout to [track name]**.
9. Wait for Google approval (may take minutes to days).

## Inviting Testers to Your Track

1. In Play Console, go to **Release > Testing > Closed testing** and open the **Testers** tab.
2. Under **Email lists**, select or create a new list.
3. Add tester emails (must match their Google Play account) and click **Save Changes**.
4. Scroll to **How testers join your test** and copy the join link.
5. Share the link with testers.

## Configuring License Testing

1. In the sidebar, go to **Settings > License testing**.
2. Add the same tester emails and click **Save Changes**.

Testers can now install your Release App with full In-App Purchase functionality.

## Updating Your Testing Track with New Builds

1. Generate a new Release App build in **Learndash App > Build**.
2. In Play Console, go to **Release > Testing > Closed testing > Manage track**.
3. Click **Create new release**, upload the new AAB, and start the rollout.
4. Testers will see the update in their Play Store testing link.

## Troubleshooting and FAQs

**Q: My testers can’t access the build.****** A: Make sure their exact Google Play account emails are added in **both** the Testers list and License Testing, and that Google has approved the testing track.

**Q: In-App Purchase prices aren’t showing.****** A: Only Release Apps from an approved closed testing track display real pricing. Ensure testers install from the track URL.

**Q: Build upload fails with “AAB version is lower than previous.”****** A: Increase the versionCode in your app’s build.gradle before rebuilding.

**Q: Google rejected my build.****** A: Review the rejection email for specific policy violations and address them before resubmitting.

**Q: Can I switch from Closed to Open testing?****** A: Yes. Go to **Release > Testing** and select your preferred testing type.

**Q: My testers see “App not available in your country.”****** A: Verify your target countries are set under **Release > Production** in the Play Console.

---

## How to Generate iOS Release Apps

**Source:** [https://learndash.com/support/kb/learndash-app/app-builds/how-to-generate-ios-release-apps/](https://learndash.com/support/kb/learndash-app/app-builds/how-to-generate-ios-release-apps/)

## Introduction

Creating a Release App for iOS is easy with the Learndash App’s cloud-based build system. Release builds are fully packaged IPAs ready for submission to **TestFlight** and the **Apple App Store**, including your branding, site configuration, and any custom code.

This guide walks you through creating an iOS Release App, uploading it to App Store Connect, inviting testers, and installing it via TestFlight—no Xcode required.

- **Use Test Apps** for daily testing and development.
- **Use Release Apps** for App Store submission and accurate In-App Purchase testing.

## When to Use a Release App vs. Test App

- **Test App****** Ideal for daily QA and development. Installable via QR code. In-App Purchases show placeholder pricing.
- **Release App****** Required for App Store submission and testing real In-App Purchase prices and terms. Apple links these to your Release App’s Bundle ID.

## Creating an iOS Release App Build

1. Go to **WordPress Admin > Learndash App > Builds******
2. Click **Request Build**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfK9v0d7-gtuGNoEX5ri6P0MctJTLEDDPpqVSotYK5eHIkGRwORWIdeiN-mDPYJAp12_MIl_qkZ77I-5bc5w6SVIKyaJDi0IGMxl-oOGR4_reQtX7a4ixYaCPL5gVZYXVSWI7s5ZA?key=cDK-GvY3oSMVXBAORPSfpg)

1. Select **iOS** under Platform and **Release App** for Build Type
2. Click **Next**, review your settings, then click **Send Build Request**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfFVZd96bOLiNpOItI5kwiBWVk7eHxmZaEsalps8akCTpxAlddkljFzV4DkgjTV-tqmuHKZKDpS8DFBQdl5UnJ3jc3MZgvV1EBS5lyvNvbmE1-VVHhA8Wpw_M6IrppDBxR81ptu6w?key=cDK-GvY3oSMVXBAORPSfpg)

1. Wait 15–60 minutes while the build is created (use **Recheck Status Now** to refresh)

## Downloading the IPA File

1. Once complete, go to **Build History******
2. Click **Install on IOS Device >** **Download IPA File** on your new Release build card.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXezN0SwiY1sJYtzdQlqCZzneiMHuHN9lm2NkAbbZ2_UsB-x6li2JQ6tBkPX6RKTuba2PUgH9DUtF9ToEqZ1OfkxyClrCZyYDwTHyfHS-lDPCQnp1iEMMetxyihNSFIBgummQIYGwg?key=cDK-GvY3oSMVXBAORPSfpg)

1. Save the IPA to your computer for upload to App Store Connect

## Uploading to App Store Connect (TestFlight)

1. Go to **Learndash App > Upload > Apple App Store******
2. Choose your generated **Release Build******
3. Click **Upload Build****** *(Make sure this app exists in your App Store Connect account)***
4. After ~15 minutes, your build appears in **TestFlight******

## Adding Testers in TestFlight

1. Log in to **App Store Connect > Users and Access > People******
2. Click **+** to invite each tester by their **Apple ID email******
3. Assign any role (e.g., Developer) and select your app
4. Go to **My Apps > [Your App] > TestFlight > Internal Testing > Testers > +** and add them

## Installing via TestFlight

1. Ask testers to install the **TestFlight** app from the App Store
2. They’ll receive an invitation and see your app listed
3. Tap **Install**, then **Open** to test the Release App

Now they’ll see real In-App Purchase pricing and app behavior as it would appear post-publish.

## Uploading New Release Builds

Any time you update app settings or code:

1. Request a new **Release Build******
2. Upload it again via **Learndash App > Upload Build > Apple App Store******
3. Testers will receive an update notification in TestFlight

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcrezsll5HH98RtK32YqgVsfVkgPqOux8uOCLVTxAbR2K5HCd6gGI1FarY7RD_Wc_6nLP_MWpcsGFHKFHQzAMYIrAcVP2gS2a0GwBQwz5smFzK2EfTVHyPPEQcgQlhbV7p8wDWT0Q?key=cDK-GvY3oSMVXBAORPSfpg)

## Troubleshooting and FAQs

**Q: Why do In-App Purchases still show placeholder prices?****** **A:** You’re likely using a Test App. Only Release Apps via TestFlight show real pricing.

**Q: My Release build isn’t showing in TestFlight.****** **A:** Ensure the build was uploaded to the correct App Store Connect app, and the **build number** is unique.

**Q: Testers can’t see the app in TestFlight.****** **A:** Confirm they’ve accepted your invitation under **Users and Access** and are added under **Internal Testing**.

**Q: I made changes in GitHub—do I need a new build?****** **A:** Yes, request a new Release App build to include the latest customizations.

**Q: Can I use the Release App for both testing and submission?****** **A:** Absolutely. Just make sure it’s properly tested via TestFlight before submitting to Apple.

---

## How to Generate New App Builds

**Source:** [https://learndash.com/support/kb/learndash-app/app-builds/how-to-generate-new-app-builds/](https://learndash.com/support/kb/learndash-app/app-builds/how-to-generate-new-app-builds/)

## Introduction

Creating iOS and Android builds for your Learndash App is fast and code-free with our cloud-based build system.

This guide shows you how to connect your site, prepare your app, and request builds for testing or app store submission.

## How the Build Process Works

Each build compiles your site’s settings—menus, branding, and any GitHub customizations—into installable app files. Test Builds are used for internal QA, while Release Builds are for submission to the App Store and Play Store.

## Complete Pre-Build Setup

Before building, ensure the following are configured:

- **Connect your app** under **Learndash App > Configure > Connect******
- **Register iOS test devices** under **Learndash App > Configure > iOS Devices******
- **Add menus** via **Learndash App > Menus > Tab Bar** and **More Menu******
- **Upload branding assets** under **Learndash App > Branding > Images******

**Note:** Menus can be updated later without a rebuild. However, changes to branding (like app icons or splash screens) require a new build.

## Register iOS Test Devices

1. Go to **Learndash App > Configure > iOS Devices > Add New Device.**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeEv7YVOyUzS7q75eCxifXaBhhaYbj3uydBWRcF_Pm6CXBN4nWUF68oKGqf2YNywB9NovzrYx0uyDHfZLblun-Ykm9iHBVbWN8VCZClala7J30LfXMmR17cLM4b9MxzoeTV_8MBZg?key=jP_icMOt_xmAdH92IYwP0g)

1. Add the device name > Click **Next**.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXds9vywDFFhJs95Dk0b8fxL10lClrTRNiyt97zlEfifJgsts8Su0THV9Wexrz84kZ5ow1MzYobeoF5mJbm4VDy0KfjRYeUULeo2IcvZk9CR3Tr4kMZkDo91JMxD3V8M0Xua97FpaQ?key=jP_icMOt_xmAdH92IYwP0g)

1. Scan the UDID QR code to register your device.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdrVNryrEpnj_tbj6HBT101e6RXMPKD1pdkSZcXTbUAbf2b2LiSB8diKgVvRvJU-rXtT7ZZ6-CdHtQtSu8a6rKanA0_AKlRwdcOjAVPEk7y87ZIB-rzXeMZ_lrhwM_Dblez-0oiqg?key=jP_icMOt_xmAdH92IYwP0g)

**Note:** iOS devices must be registered before installing test apps. Android testing doesn’t require registration.

## Request a Build

1. Go to **Learndash App > Builds** and click **Request Build******
2. Choose the platform(s): **iOS**, **Android**, or both

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeSmk7_cqOxywYIDICmlPvqLRFxH04L7nJmVZ0k5Xu1jOb85Z6Go0rlKnfUCkShinddcbDJlDTAKYQVu1GL_KUTqknR8yUFUZ3uuHDL9K_ITqJJB9lwJQo8fBJxgp2o6fGFOYXtLA?key=jP_icMOt_xmAdH92IYwP0g)

1. Select **Build Type**: **Test** (for sideloading) or **Release** (for app store)
2. Click **Next**, review settings, then click **Send Build Request**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXedQS6_1t_vaqVG8Z_vSrsOdBlERDx4cecu1Z5yc-DttxqrpmBFPS99Us3FsN320v_0h3rbD4lGfzN-l87aKFD3B2gkTSEu-1BsV8W96DqvTqW7F1aui8zJRdRedMhznSkBrOnK?key=jP_icMOt_xmAdH92IYwP0g)

**Note:** Builds typically complete in **15–30 minutes**. Use **Recheck Status Now** to refresh progress.

## After the Build Completes

- **Test Builds**: Install directly using the **Install Test App** button
- **Release Builds**: Download the .ipa or .apk or use the **Publishing Tool** to submit to app stores

**Note:** You can create up to **20 builds per month**. If you need more, contact support.

## Troubleshooting and FAQs

**Q: Why did my build fail?****** **A:** Make sure the **Connect** and **Configure** steps are complete, including App ID, App Key, branding, and iOS device registration.

**Q: Do I need to rebuild for menu changes?****** **A:** No, changes to Tab Bar or More Menus sync automatically.

**Q: How many builds can I create each month?****** **A:** You can create up to 20 builds. Reach out if you need more.

**Q: My iOS Test App won’t install. What’s wrong?****** **A:** Confirm the device is registered under **Configure > iOS Devices**, then request a new Test Build.

**Q: I submitted a Release Build but got rejected.****** **A:** Use the **Publishing Tool** for guided submissions with pre-checks that reduce the chance of rejection.

---

## How to Install Android Test App Builds

**Source:** [https://learndash.com/support/kb/learndash-app/app-builds/how-to-install-android-test-app-builds/](https://learndash.com/support/kb/learndash-app/app-builds/how-to-install-android-test-app-builds/)

## Introduction

Installing Android Test Builds is quick and simple using the Learndash App’s cloud-based build system. Each build includes your site’s configuration, branding, menus, and any custom code from GitHub.

This guide walks you through filtering Android Test Builds, installing via QR code, and troubleshooting common issues.

## Filter for Android Test App Builds

To find the build you want to install:

1. In your WordPress Dashboard, go to **Learndash App > Builds > Build History**.
2. Use the filter options at the top to select:

- **Platform**: Android
- **Build Type**: Test App

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc33LTTgWcSC7dGZ2JVDNji1_5YP9v9DGdpiP-F7_BFaVJfCMLgCQCdXeiZQpZ_51Ye_KAz2wMtcttdq_vgIROkkqMw1b5rKvPug72TYwnkBXvLsEy_9J_OrZk-Sf7_QuBv4UJ1?key=hPn6NAbtk6rXH6eePRMimg)

1. Locate the completed build you want to install.

Each build card displays:

- **Build number******
- **Status** (e.g., Complete, Failed)
- **Platform type** (Android)
- **Build type** (Test or Release)
- **Date******
- **Install Test App** button

## Install the Android Test App

Once you’ve identified your build:

1. Click **Install on Android Device** on the desired build card.
2. Scan the displayed QR code using your Android device’s camera.
3. Tap **Download Application** when redirected.
4. When prompted, tap **Install**, then **Open** the app.

## Troubleshooting and FAQs

**Q: Why doesn’t the QR code scan?****** A: Make sure your QR scanner or camera app has permission to access the camera. Try a different QR app if needed.

**Q: I see “Install blocked” or “Unknown sources” error.****** A: Go to **Settings > Security > Install unknown apps**, then allow installation for your browser.

**Q: The download failed or timed out.****** A: Check your internet connection and try again. If the build is over 30 days old, you’ll need to request a new one.

**Q: Why did the new build replace my old one?****** A: Android apps with the same package name cannot coexist. Uninstall the old version first, or create a build with a unique package name.

---

## How to Install iOS Test Builds

**Source:** [https://learndash.com/support/kb/learndash-app/app-builds/how-to-install-ios-test-builds/](https://learndash.com/support/kb/learndash-app/app-builds/how-to-install-ios-test-builds/)

## Introduction

Installing iOS Test Builds for your Learndash App is simple with our cloud-based build system, no Xcode or manual compilation required.

This guide walks you through connecting your site, registering iOS test devices, requesting a Test Build, and installing it on your iPhone via QR code.

## Registering iOS Test Devices

Before you can install a Test App, your device must be registered.

1. Go to **WordPress Admin > Learndash App > Configure > iOS Devices******
2. Click **Add New Device**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf54qjifADBx25lHnEnFg9GP_uZlWDenoyyw9pkQa1N2JvdyfV3zjctXyQtM5l5dlkJHs9iN4uKlk46vCNJJcFXdtpnMViKzxCDZnbnssG05ehQyLvFy0ysKXOVt6bjY_65eiJVOg?key=V0-iSf9Dgkywv-3OWyQPOA)

1. Enter a **Device Name** (e.g., *Newt’s iPhone*)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcp8QJ7zuzYp1IM0s7wvDC5_fCaNUxRuv64Mvd_CT2un9wV4cfqSte3DaRUsmnV6qm6qzpMQDD56YFwqFmW_OE1F0dZAqQYuE7xlFlM78jhPJ-eJEM-DSpDZyglzYtoZTcUZKqquA?key=V0-iSf9Dgkywv-3OWyQPOA)

1. On your iPhone, scan the **QR code** to install the provisioning profile

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXca8_dMcyoCd4Nsz2N-4kFV5mC7Tb_dDx84dz6O_dBDiW0yfobVsWMqt_31kNNVq7PUkmJYVYcTbNgghG8e-x1oExzyNfoVZ9rm2UrUyYuD8MxWBHfXuP1bBgzs2mOlpdTffPxVPA?key=V0-iSf9Dgkywv-3OWyQPOA)

1. Click **Refresh** to confirm your device appears in the list

**Note:** Apple allows registration of up to 100 devices. Each new device requires a new Test Build.

## Requesting an iOS Test Build

1. Go to **Learndash App > Builds > Request Build**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfkZlhui3ZLxlHH9RTyJLcb9Ed4agwaTa5F4EMtNLAM-NTPjABWj52JkWy6ZE4Oe34letrTkZ5AnzgVBPoK-_Vgs7Ki6Bjp_IlUmx461OOc7MaJtLa176VZn6o1h7uaAkzTAZQ2ag?key=V0-iSf9Dgkywv-3OWyQPOA)

1. Select **iOS** under **Platforms******
2. Choose **Test App** for **Build Type**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcxpEIoqe9OMNqMWgFknvZwPklav3gwJzEZ5cZG8ywIjLDy8OH7R0UkgWMqZjCPkJiZiEj6z-4LmQQpfrjBAfomBYdeiSr2OxACDPKwyfhfxc9v7A0yLg5ZXjFiaEf79NNGgCXVFg?key=V0-iSf9Dgkywv-3OWyQPOA)

1. Click **Next**, review your configuration, then click **Send Build Request******

**Builds typically complete within 15–60 minutes**. Click **Recheck Status Now** to refresh build progress.

## Checking Build Status

To review your builds, visit **Learndash App > Builds**. Each build card includes:

- Build Number
- Build Status (e.g., Queued, In Progress, Completed)
- Platform (iOS or Android)
- Build Type (Test or Release)
- Date and Time
- **Install Test App** button (when ready)

## Installing the Test App

Once the build status is **Completed**:

1. Click **Install Test App** on the iOS build card
2. Scan the **QR code** with your iPhone camera
3. On the download page, tap **Download Application**, then **Install******
4. Open the app and test your configurations

**Note:** Android Test Apps do not require UDID registration. Just scan and install.

## Switching Sites & Testing Custom Code

Within the Test App:

- Use the **site switcher** to access any connected WordPress site
- To test custom GitHub code, push your changes and **request a new Test Build******

## Troubleshooting and FAQs

**Q: My iPhone didn’t install the Test App.****** **A:** Make sure the provisioning profile is installed via **Settings > General > Device Management**, and your UDID is listed under **iOS Devices**.

**Q: The QR code shows an “Expired” message.****** **A:** Request a new build and click **Recheck Status Now** to generate a fresh QR code.

**Q: My UDID doesn’t appear after scanning.****** **A:** Tap **Refresh** in **iOS Devices**. Ensure the profile installation was successful on your iPhone.

**Q: Can I share the QR code with others?****** **A:** Yes, but only devices registered under **iOS Devices** can install the Test App.

**Q: Can I install the app without scanning the QR code?****** **A:** The QR code is the preferred method. Alternatively, open the installation link directly on Safari using the same device.

---

## How to Update Your Android Learndash App

**Source:** [https://learndash.com/support/kb/learndash-app/app-builds/how-to-update-your-android-learndash-app/](https://learndash.com/support/kb/learndash-app/app-builds/how-to-update-your-android-learndash-app/)

## Introduction

Keeping your Android app updated ensures your users receive the latest features, bug fixes, and accurate In-App Purchase pricing.

This guide walks you through generating a new Android Release build, downloading the AAB file, submitting it to Google Play Console, and addressing any review feedback from Google.

## Creating a New Android Release App Build

1. In WordPress Admin, go to **Learndash App > Build**.
2. Click **Request Build**.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXexKz2uMzf9QdQNa8msY6K7B0qcWfNwlZF_6HIvNGfxhBzmc6RanZnAGch2dVlsBKd7SmStEDdj4oHWapdT3WJkj-BXzqZQe16SQn_lghZBZBE9SXhcGC1_g9yIvxR09G58y66Q?key=SZmIsMLL4-bIzhzWMGLJxw)

1. Select **Android** as the Platform and **Release App** as the Build Type.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeu99Zyx21SUSaNXkE-tpRc4pnJQ2iDHPils6rNXrUqX9IvAlYTYGolg1PlsO_bI31thjgcWt1Ovut9uNSin2eiMpXAIf647M2vev3z93nDMbGAeuPIJl0jjJFWpcBYj993W2rDjQ?key=SZmIsMLL4-bIzhzWMGLJxw)

1. Click **Next Step**, then **Send Build Request**.
2. Once complete, go to **Build History**.
3. Click **Download AAB File** on your new release build.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcgiaazwnkG3C7mwhxbWqoZDspkhO9Qq6nS9UvFUjtKXGtxlLe6Df9EL0W-W3lGURo1wDU-5f7HZMUkvhQKyYlXypADuK31pF96ubMmmdntK-dpjAdqpg55zcROte4y2kFZxmtQ_g?key=SZmIsMLL4-bIzhzWMGLJxw)

**Note:** Since August 2021, Google requires AAB files for new submissions. APK uploads are only possible if previously published.

Save the downloaded AAB file securely, you will need it for the Play Store update.

## Downloading Your Latest Build from WordPress

1. In WordPress Admin, go to **Learndash App > Upload > Google Play Console**.
2. Select the **Release** build you want to update.
3. Choose the file format (**AAB** recommended).
4. Click **Download Build**.

Use **AAB** for new submissions. Legacy **APK** files remain supported if previously published.

## Resubmitting to Google Play Console

1. Log in to Google Play Console.
2. Under **All apps**, select your app.
3. Go to **Release > Production** and click **Create new release** (or **Edit release** if one exists).
4. In **App bundles and APKs**, click **Upload** and select your downloaded AAB.
5. Enter a **Release name** and **Release notes**.
6. Click **Save**, then **Review release**.
7. Resolve any **errors** (required) or **warnings** (recommended).
8. Click **Start rollout to Production** to submit for review.

## Responding to Google Rejections

- **Metadata issues:** Update your store listing, privacy policy, or content rating in Play Console, then resubmit the same release.
- **App issues:** Fix the reported issues in your code, rebuild the AAB, and follow the **Create new release** process again.

You will receive rejection details by email and can track status under your app in Play Console.

## After Approval by Google

- The update goes live immediately in the approved countries/regions.
- If **Managed publishing** is enabled, manually approve the release in the Managed publishing page for it to go live.

## Troubleshooting and FAQs

**Q: Why can’t I upload my AAB?****** A: Make sure the versionCode in your build is higher than any previous upload in Play Console.

**Q: My release is stuck in “Draft” status.****** A: Click **Start rollout to Production**. Saving alone does not publish your update.

**Q: Can I revert to a previous version?****** A: Yes. Upload the last working AAB as a new release and roll it out to Production.

**Q: Do I need to repeat the Publishing Checklist for each update?****** A: No. Once your app is live, future updates under the same App ID inherit the configuration. You only need to upload the new AAB and roll out.

**Q: My update is taking a long time to appear in the Play Store.****** A: Google’s review time can vary from minutes to several days, depending on the complexity of the update.

**Q: The Play Store says “Not available in your country” after update.****** A: Check that your target countries are still selected under **Release > Production > Countries/regions** in Play Console.

---

## How to Upload Learndash App iOS Builds

**Source:** [https://learndash.com/support/kb/learndash-app/app-builds/how-to-upload-learndash-app-ios-builds/](https://learndash.com/support/kb/learndash-app/app-builds/how-to-upload-learndash-app-ios-builds/)

## Introduction

Uploading iOS builds is seamless using the Learndash App plugin’s built-in uploader. You can push compiled Release App builds directly to App Store Connect without leaving WordPress.

This guide walks you through setting up your Apple credentials, uploading a Release App build, and managing your TestFlight testers.

## Set Up Upload Configuration

To upload a build, you’ll first need to authenticate your Apple developer account.

1. In your WordPress Dashboard, go to **Learndash App > Configure > iOS Settings**.

![](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Configure-Your-iOS-Learndash-App-_-1.png)

1. Scroll down to the **Upload Configuration** section.
2. Under **Apple Account ID**, select the developer account you’ll use.

### Generate an App-Specific Password

1. Visit[appleid.apple.com](https://appleid.apple.com) and sign in.
2. Go to **Security > App-Specific Passwords > Generate Password…**.
3. Enter a label (e.g., “Learndash App”) and click **Create**.
4. Re-enter your main Apple ID password if prompted.
5. Copy the generated password and paste it into the **App-Specific Password** field in the plugin.
6. Click **Save Changes**.

**Note:** If you encounter authentication errors, your app-specific password may have expired or been revoked. Just generate a new one and update it.

## Upload Your Build

Once your upload configuration is set:

1. Go to **Learndash App > Upload > Apple App Store**.
2. Choose the **Release App** build you want to upload.

- Only Release App builds are supported.
- The build version/code must be greater than any existing uploads.

![](https://learndash.com/support/wp-content/uploads/2025/09/How-to-Upload-Learndash-App-iOS-Builds-to-App-Store-Connect-_-1.png)

3. Click **Upload Build**.

After submission, your build should appear in App Store Connect within 15 minutes under **TestFlight** or be ready to assign to an app version.

## Troubleshooting and FAQs

**Q: Why do I see an authentication error when uploading?****** A: Your app-specific password might be expired or incorrect. Generate a new one and update it in **iOS Settings > Upload Configuration**.

**Q: Why isn’t my build available for upload?****** A: Make sure you’re selecting a **Release App** build. Test App builds can’t be uploaded. Also, confirm the version number is higher than the existing version in App Store Connect.

**Q: I changed my Apple ID password. Why do uploads no longer work?****** A: Apple revokes all app-specific passwords when you change your Apple ID password. You’ll need to generate and save a new one.

---

