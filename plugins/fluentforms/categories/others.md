# Others

*Category from Fluent Forms documentation*

---

## AffiliateWP Integration with Fluent Forms

**Source:** [https://fluentforms.com/docs/affiliatewp-integration-with-fluent-forms/](https://fluentforms.com/docs/affiliatewp-integration-with-fluent-forms/)

**AffiliateWP** is a powerful affiliate management plugin for WordPress that helps you track and manage your site’s affiliates. By integrating **AffiliateWP** with **Fluent Forms**, you can automatically create referral records whenever a customer visits your site through an affiliate link and makes a submission.

This guide will show you how to connect **AffiliateWP** with **Fluent** **Forms** step by step.

> Remember, AffiliateWP is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enable AffiliateWP Integration

To learn how to enable AffiliateWP integration, follow the steps with the screenshots below –

First, navigate to **Integrations** from the **Fluent Forms** Navbar, search for [AffiliateWP](https://affiliatewp.com/) using the search bar, and get the**AffiliateWP** integration module. Now, **toggle** on the module to enable AffiliateWP.

![](https://fluentforms.com/wp-content/uploads/2025/10/enable-affiliatewp-integration-01-scaled.webp)

### Enable Fluent Forms in AffiliateWP

Now, navigate to your WordPress dashboard and go to AffiliateWP. From the **AffiliateWP settings**under the **Integrations** **Tab**, enable the **Fluent** **Forms** option and click on the **Save** **Changes** button.

![](https://fluentforms.com/wp-content/uploads/2025/10/AffiliateWP-Settings-02.webp)

### Get the Affiliate ID

Now, go to the **AffiliateWP** Plugin from the left menu of the dashboard, and you will see an **Affiliate** option here. Get the **Affiliate** **ID** here.

![](https://fluentforms.com/wp-content/uploads/2025/10/affiliates-id-04-scaled.webp)

### Integrate AffiliateWP into Fluent Forms

To learn how to integrate AffiliateWP into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the Fluent Forms Navbar, select the **Desired Form** where you want to integrate your AffiliateWP, and click the **Settings** button.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/10/Form-Settings-03-scaled.webp)

Once you are on the **Settings & Integrations**, scroll to the **Affiliate** section at the bottom. **Enable** **Allow Referrals** and configure the referral settings from the dropdown as needed.

![](https://fluentforms.com/wp-content/uploads/2025/10/allow-referral-04-scaled.webp)

### Add the Form to a Page

To add the form to a page, first, **copy** your Fluent Form’s **shortcode**. Create a new page (you can open it in an incognito window for testing). **Paste** the shortcode on the page.

Then, add your affiliate link to the URL using this format: **?ref=1** — where **1** is your Affiliate’s unique ID.

For example: **https://yourwebsite.com/form-page/?ref=1**

### Test and View the Referral

Submit the form using the affiliate link. When a customer submits the form, **AffiliateWP will automatically generate a referral** for the corresponding affiliate.

To view the generated referrals, go to **AffiliateWP → Referrals** in your WordPress dashboard.

![](https://fluentforms.com/wp-content/uploads/2025/10/referral-submit-05-scaled.webp)

By following this guide, you can easily integrate AffiliateWP with Fluent Forms!

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Twilio Integration with Fluent Forms

**Source:** [https://fluentforms.com/docs/twilio-integration-with-fluent-forms/](https://fluentforms.com/docs/twilio-integration-with-fluent-forms/)

The integration between Twilio and Fluent Forms allows you to send SMS notifications when a form is submitted in real time. It’s easy and hassle-free. This article will guide you through integrating Twilio with Fluent Forms on your WordPress Site.

> Remember, Twilio is a Premium Feature of the Fluent Forms Plugin. So, to integrate it, you need the Fluent Forms Pro plugin.

## Enabling the Twilio Module

To learn how to enable Twilio integration, follow the steps with the screenshots below –

First, go to **Integrations** from the Fluent Forms Navbar, search for **Twilio**through the search bar, and get the **Twilio**integration module.

Now, turn on the**Toggle**button to enable Twilio**.** Then, you will see the**Settings Icon**on the right side, click on it.

![](https://fluentforms.com/wp-content/uploads/2025/01/enable-twilio-01-scaled.webp)

Once you enable Twilio, you will be asked for the **Twilio Credentials**.

![](https://fluentforms.com/wp-content/uploads/2025/01/02-8-scaled.webp)

### Getting the Twilio Credentials

To learn how to get the **Account SID**and **Auth Token** from Twilio, follow the steps with screenshots below –

Log in to your **Twilio**account dashboard to access the **Account SID** and **Auth Token**.

> If you don’t have an existing account or application registered, click Twilio to register your application.

Now, ​​**copy** the **Account SID** and **Auth Token** to use them later.

![](https://fluentforms.com/wp-content/uploads/2025/01/Twilio-credentials-03-scaled.webp)

## Connecting Twilio with Fluent Forms

Then, return to the **Twilio Settings** page under the **Configure Integration**tab of the **Global Settings**from the **Fluent Forms Navbar**.

Now, paste the **Twilio Access SID**and **Auth Token**I copied**.**Click on the **Save Settings** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/Globql-settings-04-scaled.webp)

Here, you will see a success notice that the Twilio Access Token has been verified successfully.

You can also disconnect the **Twilio API** here by clicking the **Disconnect Twilio** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/Disconnect-Twilio-05-scaled.webp)

## Integrating the Form with Twilio

After setting up the Credentials, go to **All Forms**and select the form you want to integrate with the Twilio account or create a new one.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/settings-form-06-scaled.webp)

Now, go to the particular form’s settings for the entries you want listed in **Twilio**.  Click on **Add New Integration** and select **SMS Notification by Twilio** from the dropdown.

![](https://fluentforms.com/wp-content/uploads/2025/01/sms-notification-by-twilio-07-scaled.webp)

### Configuring Twilio with Fluent Form

**Name:** Enter the Field that specifies the name of the Twilio integration Feed.

**To:** Enter the recipient’s phone number ( the user who submitted the form or a team member).

**SMS Text:**Write the message you want to send. Use dynamic fields to personalize the SMS.

**Conditional Logic:** If you want to allow Twilio integration conditionally based on your submission values, then**Enable Conditional Logic**options. To learn more about this conditional logic, read the [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

**Status:**Enable this feed option to activate the integration.

Once the setup is done, finally, click the **Save Feed** button. Your Twilio will be integrated into this specific form!

![](https://fluentforms.com/wp-content/uploads/2025/01/Add-New-Twilio-Integration-Feed-08-scaled.webp)

After successful Integration, you will see that your Twilio integration Feed has been added here.

You can modify your feed anytime by clicking the **Settings Icon**and **Delete**it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Enable** if needed.

![](https://fluentforms.com/wp-content/uploads/2025/01/Success-twilio-integration-09-scaled.webp)

## Preview of Integrated Twilio

Here, you can preview the added Twilio contacts through the Form entries that I set up during the integration.

You can see form submissions from the **Entries** section of this particular form.

![](https://fluentforms.com/wp-content/uploads/2025/01/entries-10-1-scaled.webp)

> If you have a Trial account on Twilio, you must add and verify your phone number here before you can send a test SMS.

You can seamlessly send real-time SMS notifications for form submissions using Twilio by completing these steps.
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Google Maps with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-google-maps-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-google-maps-with-fluent-forms/)

**Fluent Forms** integrates **Google Maps** to allow your users to **auto-fill** the **Address** **Field** with the help of Google Maps. This article will guide you through integrating**Google Maps**in **Fluent Forms**on your **WordPress Site**.

> Remember, Google Maps is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Integrating Google Maps with Fluent Forms

To learn how to integrate with Google Maps, follow the steps with the screenshots below –

First, go to the**Global Settings**from the **WordPress Left Sidebar** or **Fluent Forms Navbar**, open the **Configure Integrations** tab in the left menu, and click the **Google Maps Integration**.

Once you are on the **Google Maps Integration Settings,**you will be asked for the **Google Maps API Key**from your Google Account. Then, click the **Save Settings**button, and Google Maps will be connected to Fluent Forms.

![](https://fluentforms.com/wp-content/uploads/2025/03/1.-Google-Maps-Integration-Settings-page-scaled.webp)

### Getting the Google Map API Key

To learn how to get the Google Map API Key from Google, follow the steps with screenshots below –

First, go to your [Google Cloud Console](https://console.cloud.google.com/) and select an existing project you want to connect with **Fluent Forms** by clicking the **drop-down** **box******in the top left corner.

![](https://fluentforms.com/wp-content/uploads/2025/03/2.-My-Project-scaled.webp)

Or, to get the API Key, you can create a new project by clicking the **NEW PROJECT** button in the top right corner.

**For example**, I selected an existing project called Google Map Integration to show you the whole process.

![](https://fluentforms.com/wp-content/uploads/2025/03/3.-New-Project-scaled.webp)

After selecting the project, click the **APIs & Services** tab.

![](https://fluentforms.com/wp-content/uploads/2025/03/4.-APIs-Services-scaled.webp)

Now, click the **+ ENABLE APIS AND SERVICES** option at the top.

![](https://fluentforms.com/wp-content/uploads/2025/03/5.-Enable-APIs-and-Services--scaled.webp)

Then, select the **Maps JavaScript API**and **Places API** options respectively, and enable them.

![](https://fluentforms.com/wp-content/uploads/2025/03/6.-Maps-Javascript-Place-API-scaled.webp)

Click the **ENABLE** button of the Maps JavaScript API.

![](https://fluentforms.com/wp-content/uploads/2025/03/7.-Enable-Maps-Javascript-API--scaled.webp)

Click the **ENABLE** button of Places API.

![](https://fluentforms.com/wp-content/uploads/2025/03/8.-Enable-Places-APi-scaled.webp)

Now, return to the **APIs & Services**tab, go to the **Credentials** from the left menu, click the **+ CREATE CREDENTIALS**option at the top, and press the **API key** button.

![](https://fluentforms.com/wp-content/uploads/2025/03/9.-Credentials-API-Key-scaled.webp)

A pop-up box will appear with the Google Map API Key. Simply copy it by clicking the **Copy** **Icon**.

![](https://fluentforms.com/wp-content/uploads/2025/03/10.-copy-Goggle-map-API-key.webp)

### Connecting Google Maps with Fluent Forms

Go back to the **Google Maps Integration Settings**page under the**Configure Integrations**tab of the **Global Settings**section from the **Fluent Forms** **Navbar**.

Paste the **API Key**you copied from **Google**into the **Google Map API Key** field.

Finally, press the **Save Settings**button, and your **Google Map Integration** module will be enabled.

![](https://fluentforms.com/wp-content/uploads/2025/03/11.-Paste-API-Key-scaled.webp)

Now, you can see that the Google Map has been successfully connected to your **Fluent Forms**. You can disconnect it anytime by clicking the**Disconnect Google Map API**button.

![](https://fluentforms.com/wp-content/uploads/2025/03/12.-Disconnect-Google-Map-API-scaled.webp)

## Integrating Google Maps with Address Field

To learn how to integrate Google Maps into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select**a **Form**that has an**Address**field****where you want to****integrate your**Google Maps,**and****click the**Editor**button.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one. Also to learn more detail about the process of adding and customizing the Address Field, read this Documentation.

![](https://fluentforms.com/wp-content/uploads/2025/03/13.-Open-desired-form-Editor-scaled.webp)

Once you are on the form**Editor**, go to the **Address**, hover over it, and click the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer the **Autocomplete Feature** options for integrating Google Maps into this field.

Simply **enable** it by checking the **Enable Autocomplete (Google API)** box, and you will get three more options. These are:

**1. Show Map**: If you want to show the Google Map option on your Form, check the **Enable Map (Google Map)** option.

**2. Save Coordinates**: Enable the **See User Location on Map (Latitude & Longitude)**option to save your users’ location coordinates. You can view these coordinates later in the form entries.

**3. Auto Locate**: Using this option, you can define how you want to display the user’s location if someone accesses the form. Three options are available here: Page Load, On Click & Disable.

- **Page Load:** When you choose this option, the moment the page loads, the user’s location will be immediately detected.

- **On Click**: If you choose this option, a **Click Icon** will be next to the Address box. Users’ location will start to be located once they click on that icon.

- **Disable**: You can select this option if you want to disable the Auto Locate option.

![](https://fluentforms.com/wp-content/uploads/2025/03/14.-Input-Customization-tab-of-Address-field-scaled.webp)

## Embedding Form into Frontend

Once you complete the Integration process, click the **Save** **Form** button to save all your changes.

To embed and display the form in the front end, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. Also, to see the form preview, click the **Preview & Design**button****in the middle.

![](https://fluentforms.com/wp-content/uploads/2025/03/15.-Save-Form-scaled.webp)

## Preview of Integrated Google Maps

Here, you can see the preview of the integrated Google Maps through the Form Entry based on the Integration.

For example, you can see the Address field is empty and the**Click Icon** is in the right corner of the Address box.

![](https://fluentforms.com/wp-content/uploads/2025/03/16.-Form-Preview--scaled.webp)

Once you click the Icon, the address field is filled in automatically and the Google Map location also appears below.

![](https://fluentforms.com/wp-content/uploads/2025/03/17.-Map-preview-scaled.webp)

This way, you can easily integrate Google Maps with Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Notion with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-notion-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-notion-with-fluent-forms/)

Integrating [Notion](http://notion.com) with **Fluent Forms** allows you to automate data collection and organize your Notion workspace. This article will guide you through integrating**Notion**with**Fluent Forms**on your **WordPress Site**.

> Remember, Notion is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enabling Notion Integration

To learn how to enable Notion integration, follow the steps with the screenshots below –

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Notion**through the search bar, and get the **Notion**integration module. Now, turn on the **Toggle** to enable the **Notion** module, and click the **Settings Icon** on the right side.

![](https://fluentforms.com/wp-content/uploads/2025/03/1.-Enable-Notion-scaled.webp)

Once you enable Notion, you will be asked for the **Access Code**of your **Notion Account**.

> Click the Get Notion Code link to collect the Access Code and integrate Notion successfully.

![](https://fluentforms.com/wp-content/uploads/2025/03/2.-Get-Acess-Code-scaled.webp)

### Getting the Notion Access Code

To learn how to get the Notion**Access Code**, follow the steps with screenshots below –

First, [click here](https://api.notion.com/v1/oauth/authorize?client_id=a7d866f8-cdfe-477d-8cce-9e363355c6b2&response_type=code&owner=user&redirect_uri=https://fluentforms.com/gapi), it will redirect to a page where you can specify which **Notion Account** you want to integrate with **Fluent Forms**by clicking the **Arrow Icon** in the top right corner.

Then, click the **Select Pages** button to choose the Notion Pages you want to integrate with Fluent Forms.

![](https://fluentforms.com/wp-content/uploads/2025/03/3.-Select-Pages.webp)

Here, you will see all of your available Notion Pages. Now, **check the box** of those pages that you want to integrate and click the**Allow Access**button.

![](https://fluentforms.com/wp-content/uploads/2025/03/4.-Allow-Access.webp)

Now, a pop-up will come with the **Access Code** of Notion and a picture showing the **Instruction** for providing that code. Simply, copy it from here by clicking the **Copy** button.

![](https://fluentforms.com/wp-content/uploads/2025/03/5.-Copy-access-code.webp)

## Connecting Notion with Fluent Forms

Return to the **Notion Integration**page under the**Configure Integrations**tab of the **Global Settings**section from the **Fluent Forms** **Navbar**.

Now, paste the **Code**you copied from **Notion** into the **Access Code**field.
Finally, press the **Verify Notion**button to make your **Notion Integration** module functional.

![](https://fluentforms.com/wp-content/uploads/2025/03/6.-Paste-access-code-scaled.webp)

You can see that your Notion is connected to your **Fluent Forms** successfully!
You can disconnect it anytime by clicking the**Disconnect Notion**button.

![](https://fluentforms.com/wp-content/uploads/2025/03/7.-Disconnect-Notion-scaled.webp)

## Integrating Notion with Forms

To learn how to integrate Notion into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select**the**Desired Form**where you want to****integrate your**Notion,** and****click the**Settings** button.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/03/8.-Open-desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Notion Integration** feed****from the dropdown list.

![](https://fluentforms.com/wp-content/uploads/2025/03/9.-Add-new-integration-dropdown-scaled.webp)

Once you select the desired table, a pop-up page will appear with various settings options for configuring the Notion.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. **Name**: Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

1. **Notion Database**: Using the **Arrow Icon**, you can select the **Notion Database**where you want to add your form submission information. You can also change this anytime if needed.

Once you select the database, all the columns from your chosen **Notion Database** will appear here as fields (e.g., you can see the Email, Country, and Name fields).**Now,**use all the fields under this option to properly link your **Notion** **Databases**with the **Form Fields**. You can easily select the **value** for the **form fields** based on the **Notion fields** using the **Shortcode** **Arrow**.

1. **Conditional Logics**: This option allows Notion integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

1. **Enable This Feed**: Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, click the **Save Feed** button, and your Notion will be integrated into this specific form!

![](https://fluentforms.com/wp-content/uploads/2025/03/10.-Save-Feed-scaled.webp)

After successful Integration, you will now see that your **Notion Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](https://fluentforms.com/wp-content/uploads/2025/03/11.-Added-Notion-Integration-Feed-scaled.webp)

## Embedding Form into Frontend

Once you complete the Integration process, go to the form’s **Editor** from the top navbar to embed and display the form on a specific Page/Post on your site.

Now**, copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. Also, to see the form preview, click the **Preview & Design**button****in the middle.

Once you are done, click the **Save** **Form** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2025/03/12.-Save-Form-scaled.webp)

## Preview of Integrated Notion

Here, you can see the preview of the added Notion Contacts through the Form Entries based on the Integration.

For example, you can see four new**Six Submissions** under the **Entries** tab on this particular form.

![](https://fluentforms.com/wp-content/uploads/2025/03/13.-form-Entries-scaled.webp)

Now, go to Notion and open the **Database** you configured with**Fluent Forms** from the left sidebar.

Here, you can see that the **users who submitted forms** in **Fluent Forms** are also automatically added to the selected **Notion Database**.

![](https://fluentforms.com/wp-content/uploads/2025/03/14.-Notion-Preview-scaled.webp)

## Connecting Notion Page directly with Fluent Forms

You also have the option to connect any newly created page to Fluent Forms directly from Notion.

To do this, simply open the desired page, click the **Three-Dot Icon** in the top right corner, scroll down to **Connections**, and press the **Fluent Forms** option. Your selected page will be connected to Fluent Forms!

![](https://fluentforms.com/wp-content/uploads/2025/03/15.-Connect-New-Notion-Page-with-Fluent-Forms-scaled.webp)

This way, you can easily integrate Notion with Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate BuddyBoss with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-buddyboss-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-buddyboss-with-fluent-forms/)

Integrating [BuddyBoss](http://buddyboss.com) with **Fluent Forms** allows you to enhance your community engagement on your WordPress site. This allows you to collect and update BuddyBoss profile fields directly through Fluent Forms. This article will guide you through integrating**BuddyBoss**with**Fluent Forms**on your **WordPress Site**.

> Remember, BuddyBoss is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Setting up BuddyBoss in WordPress Site

> Before starting the process, make sure the BuddyBoss plugin (both Free and Pro versions) is installed and activated on your WordPress site.

Now, go to **BuddyBoss** from the **Left Sidebar**, click the **Profiles**, and it will take you to the **Profile Fields** page.

Here, you can **Edit** any of your existing fields or **Add New Field** according to your requirements.

![](https://fluentforms.com/wp-content/uploads/2025/02/1.-Add-New-Field-scaled.webp)

Then go to the **Profile Types** page from the**Top Navbar**. Here, you can **Edit** any of your existing profile types or **Add New**profile types****based on your needs.

![](https://fluentforms.com/wp-content/uploads/2025/02/2.-Add-Profile-Type-scaled.webp)

## Enabling User Registration or Update

To integrate BuddyBoss integration, you **need to enable the User Registration or Update**integration module in your Fluent Forms. Through this integration module, you will be able to integrate BuddyBoss with Fluent Forms.

**To learn how to enable the User Registration or Update module, follow the steps below –**

First, go to **Integrations** from the **WordPress Left Sidebar** or **Fluent Forms Navbar**, search for **User Registration**through the search bar, and get the integration module.

Now, turn on the **Toggle** and the **User Registration or Update**module wil be enabled.

![](https://fluentforms.com/wp-content/uploads/2025/02/3.-Enable-User-Registration-or-Update-module-scaled.webp)

## Integrating BuddyBoss with Forms

To learn how to integrate BuddyBoss into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select**the**Desired Form**where you want to****integrate your**BuddyBoss,** and****click the**Settings** button.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/02/4.-open-desired-forms-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **User Registration or Update Integration** feed****from the dropdown list.

![](https://fluentforms.com/wp-content/uploads/2025/02/5.-Add-New-Integration-dropdown-scaled.webp)

Once you select the list, a pop-up page will appear with various settings options for configuring the User Registration feed.

> To learn the detailed configuration process of User registration or Update integration feed, read this Documentation.

Finally, scroll down to the BuddyBoss Settings section, and you will get the following options to integrate it with the form.

- **Profile Fields**: Use all the fields under this option to properly link your **BuddyBoss** **Fields** with the **Form Fields**. You can easily select the **value** for the **form fields** based on the **BuddyBoss fields** using the **Shortcode** **Arrow**. Plus, you add or delete as many fields as you want by clicking the **Plus** or **Minus** icon on the right side.

- **BuddyBoss Profile Type**: Here, you can directly select your desired BuddyBoss Profile Type from the dropdown list by clicking the **Arrow Icon** on the right side.

Once the configuration is done, click the **Save Feed** button, and your BuddyBoss will be integrated into this specific form!

![](https://fluentforms.com/wp-content/uploads/2025/02/6.-Save-Feed.webp)

After successful Integration, now you will see that your **BuddyBoss**has been integrated through the **User Registration** integration feed here.

You can modify your**BuddyBoss Settings**anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](https://fluentforms.com/wp-content/uploads/2025/02/7.-Added-User-Registration-Integration-scaled.webp)

## Embedding the Form into Frontend

To embed and display the form on a specific Page/Post on your site, go to the **Editor** page from the top navbar.

Now**, copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. Also, to see the form preview, click the **Preview & Design**button****in the middle.

Once you are done, click the **Save** **Form** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2025/02/8.-Save-Form-1-scaled.webp)

This way, you can easily integrate BuddyBoss with Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Google Sheets with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-google-sheets-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-google-sheets-with-fluent-forms/)

**Fluent Forms**allows you to integrate with **Google Sheets** to manage and organize form responses efficiently. This article will guide you through integrating**Google Sheets**in **Fluent Forms**on your **WordPress Site**.

> Remember, Google Sheets is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enabling Google Sheets Integration

To learn how to enable Google Sheets integration, follow the steps with the screenshots below –

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Google Sheets**through the search bar, and get the **Google Sheets**integration module.

Now, turn on the **Toggle** to enable the **Google Sheets** module, and click the **Settings Icon** on the right side.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-Enabled-Google-Sheet-module-scaled.webp)

Once you enable Google Sheets, you will be asked for the **Access Code** from your Google account and the **Verify Code**.

> Get the Access code by clicking the Get Google Sheet Access Code link. To learn the detailed process, keep reading.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Access-Code--scaled.webp)

### Getting the Access Code from Google

To learn how to get the Access Code from Google, follow the steps with screenshots below –

To get the Access Code from Google, [click here](https://accounts.google.com/o/oauth2/auth?access_type=offline&approval_prompt=force&client_id=157785030834-7bkpc1olhgp9kd683c78dclei5elhoku.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ffluentforms.com%2Fgapi%2F&response_type=code&scope=https%3A%2F%2Fspreadsheets.google.com%2Ffeeds%2F), and select the desired **Google Account** where your desired **Google Sheet**exists.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Desired-gmail.webp)

Once you continue with the desired Google Account, it will take you to the **Fluent Forms Server** and generate an **Access Code**. Simply, copy the access code by clicking on the **Copy** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Copy-access-code.webp)

## Connecting Google Sheets with Fluent Forms

Return to the **Google Sheets**settings****page under the**Configure Integrations**tab of the **Global Settings**section from the **Fluent Forms** **Navbar**.

Finally, paste the **access code**you copied from **Google**into the **Access Code** field, press the **Verify Code**button, and your **Google Sheet Integration** module will be enabled.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-Paste-code-scaled.webp)

Now, you can see that the Google Sheet has been successfully connected to your **Fluent Forms**. You can disconnect it anytime by clicking the**Disconnect Google Sheet**button.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Disconnect-Goggle-Sheet-scaled.webp)

## Integrating Google Sheets with Forms

To learn how to integrate Google Sheets into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select**the**Desired Form**where you want to****integrate your**Google Sheets,**and****click the**Settings** button.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Open-desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Google Sheet**integration feed****from the dropdown list.

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-Add-new-integration-button-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring the Google Sheet.
Once you set up the page, click the **Save Feed** button, and the feed will be integrated into your form.

> Remember, to function Google Sheet integration with Form properly, you must provide the Spreadsheet ID and Worksheet Name of your Google Sheets Account and set up the Spreadsheet Fields.

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Save-Feed-button-1-scaled.webp)

**All the settings options mentioned above are briefly explained below:**

### A. Name

Here, you can set a name for your feed according to your preference. This field is required to be filled in.

### B. Spreadsheet ID and Worksheet Name

Here, you need to provide the Spreadsheet ID and Worksheet Name of your Google Sheets Account that you want to integrate with the form, as it’s required to be filled in.

To learn how to get the **Spreadsheet ID**and**Worksheet Name**from Google, follow the steps in the screenshot below –

#### Getting Spreadsheet ID

First, open your Google Sheet where you want to receive the entries of your form.

Now you will get the **Spreadsheet ID** inside the **Spreadsheet URL**. Copy the marked portion as it is the**ID**of this particular **Spreadsheet**.

**For example**, if the spreadsheet URL is “https://docs.google.com/spreadsheets/d/19BXmmGQUB8v_jBNJZydbos-sFIzysSFTgeKmDsh-XLc/edit?gid=0#gid=0”, the **ID** of this spreadsheet will be “**19BXmmGQUB8v_jBNJZydbos-sFIzysSFTgeKmDsh-XLc/edit**”.

#### Worksheet Name

Now, copy the specific **Worksheet Name** where you want to receive the entries of your form.

Feel free to name your **Worksheet**as you like. A single spreadsheet can contain multiple Worksheets, but you should select a specific one and copy only that worksheet’s name to receive the form entries.

![](https://fluentforms.com/wp-content/uploads/2025/01/10.-Copy-Spreadsheet-ID-and-Worsheet-Name-scaled.webp)

### C. Spreadsheet Fields

This field is also required to be filled in to send the form entries to your selected worksheet under the chosen Google spreadsheet.

You can name the field label as you want and map the value according to the field label by using the **Shortcode** button.

**For example**, I just wanted to send the **Name** and **Email** inputs from the form to the sheets. So, I added these fields and values according to the field label.

You can add as many fields as you need by clicking the **Plus Icon**, and delete any field by clicking the**Minus Icon**.

### D. Conditional Logics

This option allows Google Sheets integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

### E. Enable This Feed

Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once you set up everything and click the **Save Feed**button, you can see that your **Google Sheets Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](https://fluentforms.com/wp-content/uploads/2025/01/11.-Added-Google-Sheets-Integration-Feed-scaled.webp)

## Preview of Integrated Google Sheets

Here, you can see the preview of the added Users in Google Sheets through the Form Entries based on the Integration.

For example, you can see four new**Form Submissions** under the **Entries** tab on this particular form.

![](https://fluentforms.com/wp-content/uploads/2025/01/12.-Entries-tab-scaled.webp)

Now, go to the **Google Sheets Channel**you integrated and you can see the preview of the notification messages of Google Sheets through the Form entries.

![](https://fluentforms.com/wp-content/uploads/2025/01/13.-Preview-of-added-entries-scaled.webp)

This way, you can easily integrate Google Sheets with Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Trello with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-trello-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-trello-with-fluent-forms/)

Trello is an integrated email marketing, marketing automation, and small business CRM. Save time while growing your business with sales automation. Use Fluent Forms to collect customer information and automatically add it to your Trello list.

This article will guide you through integrating**Trello**with**Fluent Forms**on your **WordPress Site**.

> Remember, Trello is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enabling Trello Integration

To learn how to enable Trello integration, follow the steps with the screenshots below –

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Trello**through the search bar, and get the **Trello**integration module.

Now, turn on the **Toggle** to enable **Trello**, and click the **Settings Icon** on the right side.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-enabled-Trello-module-scaled.webp)

Once you enable Trello, you will be asked for the **Trello Access Key** of your **Trello Account**.

> If you don’t have an existing account, click the sign up for one here link to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Trello-API-Settings-scaled.webp)

### Getting the Trello API Access Key

To learn how to get the  **Trello API URL**and**Trello API Key**from**Trello**, follow the steps with screenshots below –

To start, click the [Get Access Token](https://trello.com/1/authorize?expiration=never&name=FluentForm%20Pro&scope=read,write,account&response_type=token&key=f79dfb43d0becc887dc488e99bed0687) to authenticate Trello. This will redirect you to Trello’s page, where you need to press the **Allow** button to grant access to your account.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Allow-button.webp)

Once you click allow, Trello will provide the access key. Now, simply copy it.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Copy-API-Key.webp)

## Connecting Trello with Fluent Forms

Return to the **Trello API Settings**page under the**Configure Integrations**tab of the **Global Settings**section from the **Fluent Forms** **Navbar**.

Paste the **Access Key**you copied from **Trello** into the **Trello Access Key** field.
Finally, press the **Save Setting**s button to make your **Trello Integration** functional.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-Paste-API-Key-scaled.webp)

You can see that your Trello is connected to your **Fluent Forms** successfully!

Now, you can verify/disconnect it anytime by clicking the**Verify Connection Again/Disconnect Trello**button.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Verify-or-Disconnect-button-scaled.webp)

## Integrating Trello with Forms

To learn how to integrate Trello into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select**the**Desired Form**where you want to****integrate your**Trello** and****click the**Settings** button.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Open-desired-Form-Settings-1-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Trello Integration** feed****from the dropdown list.

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-Add-New-Integration-button-1-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring Trello.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. **Name**: Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

1. **Trello Configuration**: Using the**Arrow Icon**, you need to select the **Trello** **Board** and  **List/s** where you want to send the submission data of**Fluent Forms**. Also, you can set the color for your newly created **Card Labels** & **Member/s**who can view the cards.

1. **Card Title**: Here, you can specify the title for your newly created cards. You can also use shortcodes to use the dynamic data as the title.

1. **Card Content**: With this option, you can specify the content you want to add to your cards. Here, you can also use shortcodes for your content.

1. **Card Position**: Here, you can set the desired position for your cards.

1. **Conditional Logics**: This option allows Trello integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

1. **Enable This Feed**: Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, click the **Save Feed** button, and your Trello will be integrated into this specific form!

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Save-Feed-button-2-scaled.webp)

After successful Integration, you will now see that your **Trello Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**.
Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](https://fluentforms.com/wp-content/uploads/2025/01/10.-Added-Trello-Integration-Feed-scaled.webp)

## Preview of Integrated Trello

Here, you can see the preview of the added Trello Contacts through the Form Entries based on the Integration.

**For example**, you can see four new**Form Submissions** under the **Entries** tab on this particular form.

![](https://fluentforms.com/wp-content/uploads/2025/01/11.-Entries-tab.webp)

Now, go to the **Trello** **Workspace**section from the left sidebar, open the desired **Board**, and view the desired**List** you integrated with **Fluent Forms**.

Then, you can see that the **users who submitted the forms** in **Fluent Forms** are automatically added to the selected **Trello List**.

![](https://fluentforms.com/wp-content/uploads/2025/01/12.-preview-of-Added-cards-scaled.webp)

You can also see the details of one user by clicking the desired card of that user.

![](https://fluentforms.com/wp-content/uploads/2025/01/13.-Preview-of-details-of-a-specific-card.webp)

This way, you can easily integrate Trello with Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Airtable with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-airtable-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-airtable-with-fluent-forms/)

**Fluent Forms** integrates with [Airtable](http://airtable.com), a cloud-based platform for creating and sharing relational databases to help organize and collaborate on various information about anything, like employee directories, product inventories, and even apartment hunting.

This article will guide you through integrating**Airtable**with**Fluent Forms**on your **WordPress Site**.

> Remember, Airtable is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enabling Airtable Integration

To learn how to enable Airtable integration, follow the steps with the screenshots below –

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Airtable**through the search bar, and get the **Airtable**integration module.

Now, turn on the **Toggle** to enable the **Airtable** module, and click the **Settings Icon** on the right side.

![](https://fluentforms.com/wp-content/uploads/2025/02/1.-Enabled-Airtable-module-scaled.webp)

Once you enable Airtable, you will be asked for the **Airtable Access Token** of your **Airtable Account**.

> Follow the steps given in the note at the beginning to integrate the Airtable successfully.

![](https://fluentforms.com/wp-content/uploads/2025/02/2.-Airtable-Settings-page-scaled.webp)

### Getting the Airtable Access Token

To learn how to get the  **Airtable Access Token**, follow the steps with screenshots below –

First, log in to your [Airtable Account](https://airtable.com/login), go to the **Profile** **Menu** from the top right corner, and click the **Builder Hub**button.

![](https://fluentforms.com/wp-content/uploads/2025/02/3.-Profile-Builder-Hub-option-scaled.webp)

Now, open the **Personal Access tokens** under the **Developers** tab and click the **+Create new token** button.

![](https://fluentforms.com/wp-content/uploads/2025/02/4.-Create-New-Token-scaled.webp)

Now, provide a **Name** for your token. Then, add the following **Scopes**by clicking the **+ Add a scope**button.

- **Data.records:read**
- **Data.records:write**
- **schema.bases:read**)

Also, select the workspace where you want to add from the **Access** section by clicking the **+ Add a base** button. Once you are done, click the **Create token**button.

![](https://fluentforms.com/wp-content/uploads/2025/02/5.-Name-scope-base-Create-Token-button.webp)

Now, a pop-up will come with your access token. Simply, copy it from here.

![](https://fluentforms.com/wp-content/uploads/2025/02/6.-Copy-Token.webp)

## Connecting Airtable with Fluent Forms

Return to the **Airtable Settings**page under the**Configure Integrations**tab of the **Global Settings**section from the **Fluent Forms** **Navbar**.

Paste the **Token**you copied from **Airtable** into the **Airtable Access Token** field.
Finally, press the **Save Setting**s button to make your **Airtable Integration** module functional.

![](https://fluentforms.com/wp-content/uploads/2025/02/7.-Paste-Access-Token-scaled.webp)

You can see your Airtable is connected to your **Fluent Forms** successfully!

Now, you can verify/disconnect it anytime by clicking the**Verify Connection Again/Disconnect Airtable**button.

![](https://fluentforms.com/wp-content/uploads/2025/02/8.-Verify-or-Disconnect-button-scaled.webp)

## Integrating Airtable with Forms

To learn how to integrate Airtable into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select**the**Desired Form**where you want to****integrate your**Airtable,** and****click the**Settings** button.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/02/9.-Open-desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Airtable Integration** feed****from the dropdown list.

![](https://fluentforms.com/wp-content/uploads/2025/02/10.-Add-New-Integration-button-scaled.webp)

Here, you will find a required field to set a **Feed** **Name** for your integration feed according to your preference.

Also, you must select the **Workspace**and**Table**under**Airtable Configuration**from the dropdown where you want to send the submitted form data.

![](https://fluentforms.com/wp-content/uploads/2025/02/11.-Select-Table-scaled.webp)

Once you select the desired table, a pop-up page will appear with various settings options for configuring the Airtable.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. **Name**: Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

1. **Airtable Configuration**: Using the **Arrow Icon**, you can select the **Airtable Mailing List** where you want to add your contacts. You can also change this anytime if needed

1. **Airtable Table Dropdown:**Use all the fields under this option to properly link your **Airtable** **Fields** with the **Form Fields**. You can easily select the **value** for the **form fields** based on the **Airtable fields** using the **Shortcode** **Arrow**.

1. **Enable Instant Responder**: Check this option, and Airtable will send any instant responders set up when the contact is added to the list. This option is not available to users on a free trial.

1. **Conditional Logics**: This option allows Airtable integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

1. **Enable This Feed**: Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, click the **Save Feed** button, and your Airtable will be integrated into this specific form!

![](https://fluentforms.com/wp-content/uploads/2025/02/12.-Save-Feed-button-scaled.webp)

After successful Integration, you will now see that your **Airtable Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. 
Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](https://fluentforms.com/wp-content/uploads/2025/02/13.-Added-Airtable-Integration-Feed-scaled.webp)

## Preview of Integrated Airtable

Here, you can see the preview of the added Airtable Contacts through the Form Entries based on the Integration.

For example, you can see four new**Form Submissions** under the **Entries** tab on this particular form.

![](https://fluentforms.com/wp-content/uploads/2025/02/14.-Entries-tab-scaled.webp)

Now, go to the Airtable **All Workspaces**section from the left sidebar and open the **Desired Workspace**you integrated into **Fluent Forms**.

![](https://fluentforms.com/wp-content/uploads/2025/02/15.-Desired-worspace-scaled.webp)

Here, you can see that the **users who submitted forms** in **Fluent Forms** are also automatically added to the selected **Airtable Table**.

![](https://fluentforms.com/wp-content/uploads/2025/02/16.-Preview-of-added-contacts-scaled.webp)

This way, you can easily integrate Airtable with Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate OpenAI ChatGPT with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-openai-chatgpt-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-openai-chatgpt-with-fluent-forms/)

ChatGPT, developed by OpenAI, is an AI system chatbot trained to follow instructions in a prompt and provide detailed responses for various purposes, such as engaging in conversation, gaining insights, automating tasks, and many more.

Fluent Forms now integrates OpenAI ChatGPT, making it easier for users to create Forms effortlessly with simple commands and set up AI-generated confirmation messages or emails and even PDF feeds for form submissions.

This article will guide you through integrating [OpenAI ChatGPT](https://openai.com/) with [Fluent Forms](https://fluentforms.com/).

## Enabling OpenAI ChatGPT Integration

To learn how to enable OpenAI ChatGPT integration, follow the steps with the screenshots below –

> Before starting the process, ensure you installed and activated the Fluent Forms Pro plugin on your WordPress site.

First, go to **Integrations** from the **WordPress Left Sidebar** or **Fluent Forms Navbar**, search for **OpenAI ChatGPT**through the search bar, and get the **OpenAI ChatGPT**integration module.

Now, turn on the **Toggle** to enable the **OpenAI ChatGPT** module, and click the **Settings Icon** on the right side.

![](https://fluentforms.com/wp-content/uploads/2025/03/1.-Enable-OpenAI-ChatGPT-scaled.webp)

Once you enable OpenAI ChatGPT, you will be asked for the **Access Code**of your **ChatGPT Account**.

> Click the Get OpenAI ChatGPT API Keys link to collect the Access Code and integrate the ChatGPT successfully.

![](https://fluentforms.com/wp-content/uploads/2025/03/2.-Access-Code-scaled.webp)

### Getting the OpenAI ChatGPT Access Code

To learn how to get the OpenAI ChatGPT **Access Code**, follow the steps with screenshots below –

First, [click here](https://platform.openai.com/account/api-keys), it will redirect to a page where you need to **Log in** or **Sign up** for your **OpenAI ChatGPT** **Account** that you want to integrate with Fluent Forms.

![](https://fluentforms.com/wp-content/uploads/2025/03/3.-Login-or-Signup-to-ChatGPT-account-scaled.webp)

Once you are on your account’s **Dashboard**, go to the **API keys** from the left menu, and click the **+ Create new secret key** button in the top right corner.

![](https://fluentforms.com/wp-content/uploads/2025/03/4.-Create-New-Secret-Key-scaled.webp)

Now, a pop-up will appear where you need to fill in all the fields with the necessary information and click the **Create secret key** button.

![](https://fluentforms.com/wp-content/uploads/2025/03/5.-Create-secret-key-button.webp)

Finally, you will get the **OpenAI API key.** Copy it by clicking the **Copy** button to integrate the OpenAI ChatGPT with Fluent Forms.

![](https://fluentforms.com/wp-content/uploads/2025/03/6.-Copy-access-code.webp)

## Connecting OpenAI ChatGPT with Fluent Forms

Return to the **OpenAI ChatGPT Integration**page under the**Configure Integrations**tab of the **Global Settings**section from the **Fluent Forms** **Navbar**. Now, paste the **API Key**you copied from **OpenAI ChatGPT** into the **Access Code**field.

Finally, press the **Verify OpenAI ChatGPT**button to make your **ChatGPT Integration** module functional.

![](https://fluentforms.com/wp-content/uploads/2025/03/7.-Paste-access-code-scaled.webp)

You can see that your **OpenAI ChatGPT** is connected to your **Fluent Forms** successfully!

Now, you can verify/disconnect it anytime by clicking the**Verify Connection Again/Disconnect OpenAI ChatGPT**button.

![](https://fluentforms.com/wp-content/uploads/2025/03/8.-Verify-or-Disconnect-chatgpt-connection-scaled.webp)

## Integrating OpenAI ChatGPT with Forms

To learn how to integrate OpenAI ChatGPT into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select**the**Desired Form**where you want to****integrate your**OpenAI ChatGPT,** and****click the**Settings** button.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/03/9.-Open-desired-form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **OpenAI ChatGPT**integration feed****from the dropdown list.

![](https://fluentforms.com/wp-content/uploads/2025/03/10.-Add-new-integration-dropdown-scaled.webp)

Once you select the desired table, a pop-up page will appear with various settings options for configuring the OpenAI ChatGPT.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. **Name**: Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

1. **Select Role**: Select a role from the dropdown list by clicking the **Arrow Icon** in the right corner as per your needs to set the writing tone of your AI-generated confirmation texts.

1. **Write Query**: Here, provide the proper instructions on how you want ChatGPT to send a confirmation message to your customers after each form submission. You can also use shortcodes to fetch dynamic form data using the **ShortCode** button in the right corner.

1. **Conditional Logics**: This option allows OpenAI ChatGPT integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

1. **Enable This Feed**: Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once you are done, click the **Save Feed** button, and your OpenAI ChatGPT will be integrated into this specific form!

> Remember, never pass any sensitive information on Query instructions given for ChatGPT.

![](https://fluentforms.com/wp-content/uploads/2025/03/11.-Save-Feed-scaled.webp)

After successful Integration, you will now see that your **OpenAI ChatGPT Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Settings Icon,** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](https://fluentforms.com/wp-content/uploads/2025/03/12.-Added-OpenAI-ChatGPT-Integraton-Feed-scaled.webp)

## Adding Shortcode for Submission Confirmation

After integrating the OpenAI ChatGPT Feed, you will receive a shortcode that must be added to ensure the ChatGPT confirmation message is sent after form submission.

> Remember, using the Shortcode of Chat GPT Feed, you can send the Confirmation message after Submission through Email Notification or PDF Feed as well.

To learn how to add Shortcode for Submission Confirmation, follow the steps below –

First, go to **Settings & Integrations** and open the **Confirmation Settings** option under **Settings** from the left menu.

Now, click the **Add Shortcodes** dropdown arrow in the right corner under the **Message to show** the option. Then, select **Chat GPT** and click the **ChatGPT Feed**you created a while ago.

![](https://fluentforms.com/wp-content/uploads/2025/03/13.-Confirmation-Settings-scaled.webp)

Once the shortcode is added under the **Message to Show** option, click the **Save** **Settings** to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2025/03/14.-Save-Settings-scaled.webp)

## Embedding Form into Frontend

Once you complete the Integration process, go to the form’s **Editor** from the top navbar to embed and display the form on a specific Page/Post on your site.

Now**, copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**. Also, to see the form preview, click the **Preview & Design**button****in the middle.

Once you are done, click the **Save** **Form** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2025/03/15.-Save-Form-1-scaled.webp)

## Preview of Integrated OpenAI ChatGPT

Here, you can see the preview of the added form.

![](https://fluentforms.com/wp-content/uploads/2025/03/16.-Form-Preview-scaled.webp)

Now, when a customer orders food and submits the Form, he/she will get the confirmation message as shown below.

![](https://fluentforms.com/wp-content/uploads/2025/03/17.-ChatGPT-response-preview-1024x248.webp)

This way, you can easily integrate OpenAI ChatGPT with Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

