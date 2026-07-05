# Automation

*Category from Fluent Forms documentation*

---

## How to Integrate Platformly with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-platformly-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-platformly-with-fluent-forms/)

**Fluent Forms** integrates with [Platformly](http://platformly.com), an integrated email marketing, marketing automation, and small business CRM tool that helps you grow your business by collecting customer information and automatically adding it to your Platformly through Fluent Forms.

This article will guide you through integrating**Platformly**with**Fluent Forms**on your **WordPress Site**.

> Remember, Platformly is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enable Platformly Integration

To learn how to enable Platformly integration, follow the steps with the screenshots below –

First, go to **Integrations** from the **WordPress Left Sidebar** or **Fluent Forms Navbar**, search for **Platformly**through the search bar, and get the **Platformly**integration module.

Now, turn on the **Toggle** to enable the **Platformly** module, and click the **Settings Icon** on the right side.

![](https://fluentforms.com/wp-content/uploads/2025/03/1.-Enable-Platformly--scaled.webp)

Once you enable Platformly, you will be asked for the **Platformly API Key**and**Platformly Projec ID**of your **Platformly Account**.

> If you don’t have an existing account, click the sign up for one here link to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/03/2.-Platformly-API-Settings-scaled.webp)

### Getting the Platformly API Key

To learn how to get the  **Platformly API Key**from**Platformly**, follow the steps with screenshots below –

First, log into your [Platformly Account](https://www.platform.ly/login.php), go to the**Profile Icon**in the top right corner, open the **Dropdown Arrow**, and click the **APIs and Docs**option.

![](https://fluentforms.com/wp-content/uploads/2025/03/3.-APIs-Docs-Keys-scaled.webp)

Now, to create an API Key, click either the **Plus Icon**on the top right side or the **Add First API Key** button in the middle.

![](https://fluentforms.com/wp-content/uploads/2025/03/4.-Add-frst-API-Key-or-Plus-icon-scaled.webp)

Here, provide a **Name** for the **API Key** you are creating and click the **Submit** button.

![](https://fluentforms.com/wp-content/uploads/2025/03/5.-Name-API-Key-scaled.webp)

Here, your API Key is created! Now, copy this API Key for later use.

Also, you can **Edit/Delete** the API Key anytime by clicking the **Three-Dot Icon** on the right side under the **Action** column.

![](https://fluentforms.com/wp-content/uploads/2025/03/6.-Copy-API-Key-scaled.webp)

### Getting the Platformly Project ID

To learn how to get the  **Platformly Project ID**from**Platformly**, follow the steps with screenshots below –

Again go to the**Profile Icon**in the top right corner, open the **Dropdown Arrow**, and click the **Setup**option.

![](https://fluentforms.com/wp-content/uploads/2025/03/7.-Setup-option-scaled.webp)

Here, you can get your newly created **Project ID** on the left side under the **ID** column. Copy this as well.

You can create new projects by clicking the**Plus Icon**in the top right corner if needed. You can also edit this by clicking the **Three-Dot Icon**under the **Action** column.

![](https://fluentforms.com/wp-content/uploads/2025/03/8.-Copy-Project-ID-scaled.webp)

## Connect Platformly with Fluent Forms

Return to the **Platformly API Settings**page under the**Configure Integrations**tab of the **Global Settings**section from the **Fluent Forms** **Navbar**.

Paste the **API Key**and**Project ID**you copied from **Platformly** into the **Platformly API Key**and**Platformly Project ID**fields respectively.

Finally, press the **Save Setting**s button to make your **Platformly Integration** module functional.

![](https://fluentforms.com/wp-content/uploads/2025/03/9.-Paste-the-API-Key-and-Project-ID-scaled.webp)

You can see that your Platformly is connected to your **Fluent Forms** successfully!

Now, you can verify/disconnect it anytime by clicking the**Verify Connection Again/Disconnect Platformly**buttons.

![](https://fluentforms.com/wp-content/uploads/2025/03/10.-Verify-or-Disconnect-Platformly-scaled.webp)

## Integrate Platformly with Forms

To learn how to integrate Platformly into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select**the**Desired Form**where you want to****integrate your**Platformly,** and****click the**Settings** button.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/03/11.-Open-desired-form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Platformly Integration** feed****from the dropdown list.

![](https://fluentforms.com/wp-content/uploads/2025/03/12.-Add-new-integration-dropdown-scaled.webp)

Here, you will find a required field to set a **Name** for your integration feed according to your preference.

Also, you must select the **Platformly Segment**from the dropdown by clicking the **Arrow Icon**on the right side where you want to send the submitted form data.

![](https://fluentforms.com/wp-content/uploads/2025/03/13.-Select-Platformly-Segment-scaled.webp)

Once you select the segment, a pop-up page will appear with various settings options for configuring the Platformly.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. **Name**: Here, you can see a name is given by default for your integration. You can change the name anytime if needed.

1. **Platformly Segment**: Using the **Arrow Icon**, you can select the **Platformly Segment**where you want to add your contacts. You can also change this anytime if needed

1. **Map Fields:**Use all the fields under this option to properly link your **Platformly** **Fields** with the **Form Fields**. You can easily select the **value** for the **form fields** based on the **Platformly fields** using the **Shortcode** **Arrow**.

1. **Other Fields**: Using this option, you can also add the extra fields and map them to the Fluent Forms fields with their respective Platformly fields. You can easily select the **value** for the **form fields** based on the **Platformly fields** using the **Shortcode** **Arrow**. Also, by clicking the **Plus/Minus** **Icon** in the right corner, you can **Add/Delete** custom fields as per your needs.

1. **Contact Tags**: With this option, you can add tags to your Platformly contacts with a comma-separated list (e.g. new lead, crucial users, web source). Commas within a merge tag value will be created as a single tag. Also, you can use **ShortCodes** as the tag.

**Enable Dynamic Tag Input:**This option allows you to add customized tags for specific Platformly contacts based on your submission values according to your set conditions.

1. **Note**: With this option, you can write a note for the contacts. You can also use **Shortcodes** to send dynamic data to Platformly.

1. **Conditional Logics**: This option allows Platformly integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

1. **Enable This Feed**: Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, click the **Save Feed** button, and your Platformly will be integrated into this specific form!

![](https://fluentforms.com/wp-content/uploads/2025/03/14.-Save-Feed-button-scaled.webp)

After successful Integration, now you will see that your **Platformly Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Settings Icon,** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](https://fluentforms.com/wp-content/uploads/2025/03/15.-Added-Platformly-Integration-Feed-scaled.webp)

## Preview of Integrated Platformly

Here, you can see the preview of the added Platformly Segments through the Form Entries based on the Integration.

For example, you can see three new**Form Submissions** under the **Entries** tab on this particular form.

![](https://fluentforms.com/wp-content/uploads/2025/03/16.-Form-Entries-scaled.webp)

Now, go to the **Platformly Dashboard**, hover over **CRM**from the top navbar, again hover over **Segmentation**, and click the **Segments** option.

Once you are on the**Segments**page, click on the **Number** of the **Contacts** of your integrated **Segment**that you integrated into **Fluent Forms**.

![](https://fluentforms.com/wp-content/uploads/2025/03/17.-Added-contacts-under-the-selected-segment-scaled.webp)

Finally, you can see that the **users who submitted forms** in **Fluent Forms** are also automatically added to the selected **Platformly Segment**.

![](https://fluentforms.com/wp-content/uploads/2025/03/18.-Contacts-preview-scaled.webp)

This way you can easily integrate Platformly with Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Zapier with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-zapier-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-zapier-with-fluent-forms/)

**Fluent Forms** integrates with [Zapier](http://zapier.com), a user-friendly, cloud-based platform that blends the simplicity of spreadsheets with the functionality of a database to help organize and collaborate on various tasks and projects.

This article will guide you through integrating**Zapier**with**Fluent Forms**on your **WordPress Site**.

> Remember, Zapier is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enabling Zapier Integration

To learn how to enable Zapier integration, follow the steps with the screenshots below –

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Zapier**through the search bar, and enable the **Zapier**integration module by turning it on the **Toggle**.

![](https://fluentforms.com/wp-content/uploads/2025/02/1.-enabled-Zapier-module-scaled.webp)

## Integrating Zapier with Forms

To learn how to integrate Zapier into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select**the**Desired Form**where you want to****integrate your**Zapier,** and****click the**Settings** button.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/02/2.-Open-desired-Form-Settings-scaled.webp)

Once you are on **Settings & Integrations**, go to **Zapier**from the left menu, and click the **+ Add Webhook**button.

![](https://fluentforms.com/wp-content/uploads/2025/02/3.-Add-Webhook-button-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring the Zapier.

**All the settings options mentioned in the screenshot below are briefly explained:**

- **Name**: Here, you can set a name according to your preference for your feed. This field is required to be filled in.

- **Webhook URL**: Here,provide the **Zapier Webhook URL** where you want to send the Fluent Forms submission data. Read this [Section](https://fluentforms.com/docs/how-to-integrate-zapier-with-fluent-forms/#2-toc-title) to learn how to get the **Zapier We**bhook URL.

- **Conditional Logics**: This option allows Webhook integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

Once the setup is done, click the **Save Feed** button, and your Zapier will be integrated into this specific form!

![](https://fluentforms.com/wp-content/uploads/2025/02/4.-Zapier-Integration-feed-page-scaled.webp)

### Getting the Webhook URL from Zapier

To learn how to get the Webhook URL from Zapier, follow the steps below –

First, go to your [Zapier account](https://zapier.com/app/dashboard) and log in to the dashboard.
Now, click the **+ Create**button and press the **Zaps** button to create a new Zap.

![](https://fluentforms.com/wp-content/uploads/2025/02/5.-create-Zaps-button-scaled.webp)

#### Adding Webhook Trigger

Click the Trigger button to set the trigger

![](https://fluentforms.com/wp-content/uploads/2025/02/6.-Trigger-button-scaled.webp)

Select **Webhooks**trigger.

![](https://fluentforms.com/wp-content/uploads/2025/02/7.-Webhook-option.webp)

Click on the **Choose an event**field, and a pop-up will appear to select your **Trigger event**. Select **Catch Hook** as a trigger event.

![](https://fluentforms.com/wp-content/uploads/2025/02/8.-Cache-hook-scaled.webp)

Once you are done with the configuration, click the **Continue** button.

![](https://fluentforms.com/wp-content/uploads/2025/02/9.-Continue-button.webp)

And you will****get your**Webhook URL**. Now, simply copy it by clicking the **Copy** button.
You can also test the trigger by clicking the **Test Trigger**button.

![](https://fluentforms.com/wp-content/uploads/2025/02/10.-copy-Webhook-URL.webp)

Now, return to the **Zapier Integration** under the**Settings & Integrations**tab of the desired Form.
Paste the **Webhook URL**you copied from **Zapier**into the **Webhook URL**field.

Finally, press the **Save Feed**button to make your **Zapier Integration** module functional.
You can also test the integration by clicking the **Send Data Sample** button.

![](https://fluentforms.com/wp-content/uploads/2025/02/11.-Paste-Webhook-URL-scaled.webp)

#### Adding Action

Once you have successfully integrated Zapier with Fluent Forms, it is better to test the integration by submitting a demo form.

To test the Zapier Integration successfully, you need to add an action to this app.
Click the **Action** button to set the action for testing the integration.

![](https://fluentforms.com/wp-content/uploads/2025/02/12.-Action-button-scaled.webp)

Select an **App** through which you want to run the action and complete the full configuration process step-by-step.

![](https://fluentforms.com/wp-content/uploads/2025/02/13.-Select-action-scaled.webp)

Once you have added the **Trigger** and **Action**, publish the**Zapier App**by clicking the **Publish** button.

![](https://fluentforms.com/wp-content/uploads/2025/02/14.Publish-app.webp)

## Preview of Integrated Zapier

Here, you can see the preview of the emails sent through the Form entries that I set up during the integration.

![](https://fluentforms.com/wp-content/uploads/2025/02/15.-Preview-of-Zapier-scaled.webp)

This way you can easily integrate Zapier with Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Webhook with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-webhook-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-webhook-with-fluent-forms/)

**Fluent Forms** integrates with **Webhook** which will help you broadcast your **Form Submissions** to any**Web API Endpoint** with the powerful **Webhook** module. This article will guide you through integrating**Webhook**with**Fluent Forms**on your **WordPress Site**.

> Remember, Webhook is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enabling Webhook Integration

To learn how to enable Webhook integration, follow the steps with the screenshots below –

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Webhooks**through the search bar, and enable the **Webhooks**integration module by turning on the **Toggle**.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-Enabled-Webhooks-option-scaled.webp)

## Integrating Webhook with Forms

To learn how to integrate Webhook into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select**the**Desired Form**where you want to****integrate your**Webhook**and****click the**Settings** button.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Open-desired-Form-Settings-2-scaled.webp)

Once you are on **Settings & Integrations**, go to the **WebHook** from the left menu, and click the **+ Add New**button.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Add-New-webhook-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring Webhook.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. **Name**: Here, you can set a name according to your preference for your feed. This field is required to be filled in.

1. **Request URL**: This is also a required field. Here, provide the**URL**where you want to send the Fluent Form Submission data. More specifically, enter the URL  that is provided by the Webhook recipient.

1. **Request Method**: Here you need to select the HTTP method used for the Webhook request. Choose one method among the GET, POST, PUT, PATCH, and DELETE.

1. **Request Format**: Select the data format for the Webhook request. You have to choose one format between JSON and FORM.

1. **Request Header**: Choose whether you want to send any headers with the Webhook request.

1. **Request Body**: Select body if you want to send any specific body text with the webhook request, otherwise, all fields will be sent.

1. **Conditional Logics**: This option allows Webhook integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

Once the setup is done, click the **Save Feed** button, and your Webhook will be integrated into this specific form!

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Webhook-Integration-Feed-scaled.webp)

This way you can easily integrate Webhook with Fluent Forms! 
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

