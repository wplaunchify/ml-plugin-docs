# Miscellaneous

*Category from Fluent Forms documentation*

---

## How to Transfer a License to a New Domain

**Source:** [https://fluentforms.com/docs/how-to-transfer-a-license-to-a-new-domain/](https://fluentforms.com/docs/how-to-transfer-a-license-to-a-new-domain/)

Sometimes, you need to move your Fluent Forms Pro license from one domain to another. This feature enables you to easily migrate your license, eliminating the need to purchase a new one.

Follow these simple steps to transfer your license efficiently.

## Deactivating Your Current License

To begin, you must first deactivate the license from your existing domain. You can do this directly from your WordPress dashboard.

1. From your WordPress dashboard, navigate to **Fluent Forms** and click on **Global Settings**.
2. Next, select the **License** tab from the left-hand sidebar menu.
3. On this screen, you will see your license status. Click the **Deactivate License** button to remove the license from this domain, as shown in the screenshot below.

![](https://fluentforms.com/wp-content/uploads/2025/08/deactivate-license-scaled.webp)

First, log in to your **WPManageNinja** dashboard. Next, click on the **License** tab. From there, click the **View List** button to see all of your activated domains.

![](https://fluentforms.com/wp-content/uploads/2025/08/WPMN-Account-scaled.webp)

From the list of your activated licenses, click the **Delete** icon next to the domain you wish to deactivate, and then click the **Confirm** button to finalize the action.

![](https://fluentforms.com/wp-content/uploads/2025/08/WPMN-Dashboard-License-activation-scaled.webp)

Once the license is deactivated, it is free to be used on a new domain.

## Activating the License on a New Domain

Now you can activate the license on your new website.

1. First, copy your **license key** from your WPManageNinja account dashboard.
2. On your new website, ensure you have both the free version of Fluent Forms and the **Pro add-on** installed and activated.
3. From your WordPress dashboard, go to **Fluent Forms** and click on the **Global Settings** tab.
4. Select the **License** tab from the sidebar menu.
5. Paste your copied **license key** into the license field and click the **Activate License** button.

![](https://fluentforms.com/wp-content/uploads/2025/08/activate-license-scaled.webp)

A success message will confirm that your license is now active on the new domain. With these steps, you can easily manage and transfer your license between sites with just a few clicks.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Fluent Forms Event Tracking with Google Analytics (GA4) via Google Tag Manager

**Source:** [https://fluentforms.com/docs/fluent-forms-event-tracking-with-google-analytics-ga4-via-google-tag-manager/](https://fluentforms.com/docs/fluent-forms-event-tracking-with-google-analytics-ga4-via-google-tag-manager/)

**Fluent Forms**, one of WordPress’s most powerful form builders, allows seamless integration with **Google Analytics (GA4)** through **Google Tag Manager (GTM)**. This helps track user form engagements and improve conversions.

This document applies to the latest Google Analytics: GA4.

> Notice: This method works for both classic and conversational forms.

#### Overview

This guide will show you how to set up tracking for your website’s forms. The goal is simple: we want to know two main things:

1. **How many people see your form.**
2. **How many people actually fill it out and submit it.**

Knowing this is incredibly helpful because it helps you stop guessing. You can finally get answers to questions like, “Is my contact form too long and complicated?” or “Are people even finding my signup form?”

With this setup, you can:

- **See the real problem:** Find out if a lot of people are viewing a form but then giving up without submitting it.
- **Make smart changes:** Test new ideas, like removing a field or changing your “Submit” button’s text, and see if it actually helps more people finish the form.
- **Get better results:** Use what you learn to get more contacts, signups, or quotes from your website.

**How the Three Tools Work Together**

To make this happen, we use three tools that work together as a team:

1. **Fluent Forms:** This is simply the form on your WordPress site. When someone sees the form or submits it, Fluent Forms sends out a little signal.
2. **Google Tag Manager (GTM):** Think of this as the helpful “middleman” or a post office. Its job is to catch those signals from Fluent Forms. It grabs the important information, like the form’s name and the action (whether it was viewed or submitted).
3. **Google Analytics 4 (GA4):** This is your main dashboard where you see all the results. GTM sends a neat, organized report over to GA4. This allows you to log in and easily see things like, “100 people saw the ‘Request a Quote’ form this week, and 10 people submitted it.”

![](https://fluentforms.com/wp-content/uploads/2025/07/Tag-Manager.webp)

### GTM Elements for Fluent Forms Events

|  | Tags | Triggers | Variables |
| --- | --- | --- | --- |
|  | 2 | 1 | 3 (2 Required, 1 Optional) |
| Type | cHTML,GA 4 Configuration | Custom Event | 2 Data Layer,1 JavaScript |

Types of Tags, Triggers, and Variables:

- **Tags:** Custom HTML, GA4 Configuration
- **Triggers:** Custom Event
- **Variables:** 2 Data Layer Variables, 1 JavaScript Variable

A built-in variable [Event] will be used to identify the type of Fluent Forms events.

## 1. Creating Fluent Forms Variables

> Variables are Data Types to define the properties and their values that come or are pushed from the website.

First, navigate to the **Variables** tab in your Google Tag Manager workspace. From there, find the **User-Defined Variables** area and click the **New** button to create a new variable.

![](https://fluentforms.com/wp-content/uploads/2025/07/Add-gtm-Variable-wpmn.webp)

Your **Variable** properties should be like this:

| Title | FluentFormID |
| --- | --- |
| Variable Type | Data Layer Variable |
| Data Layer Variable Name | FluentFormID |
| Data Layer Version | Version 2 |

![](https://fluentforms.com/wp-content/uploads/2025/07/add-gtm-datalayer-variable-wpmn.webp)

Create **Another Variable** using the following configuration:

| Title | FluentFormEventAction |
| --- | --- |
| Variable Type | Data Layer Variable |
| Data Layer Variable Name | eventAction |
| Data Layer Version | Version 2 |

![](https://fluentforms.com/wp-content/uploads/2025/07/3-1.webp)

[Optional] Create **Another Variable** using the following configuration to display the **Form Page Title**:

![](https://fluentforms.com/wp-content/uploads/2025/07/add-js-gtm-variable-wpmn.webp)

## 2. Creating Fluent Forms Trigger:

In Google Tag Manager, a Trigger defines the specific conditions that cause a Tag to fire. For this setup, we need to create a custom trigger that activates when it detects a Fluent Forms event, such as a form view or submission.

To do this, go to the **Triggers** section in your GTM workspace and click the **New** button to open the trigger editor.

![](https://fluentforms.com/wp-content/uploads/2025/07/add-gtm-trigger-wpmn.webp)

Now follow the data below to create the trigger:

| Title | FluentFormActivitiesEvent |
| --- | --- |
| Event Type | Custom Event |
| Event Name | FluentFormActivities |
| Trigger Fires on | All Custom Events |

![](https://fluentforms.com/wp-content/uploads/2025/07/add-gtm-event-action-trigger-wpmn.webp)

## 3. Creating Fluent Forms Tags:

Now that we have our “when” (the Trigger), it’s time to set up the “what” – the **Tag**. A Tag is the actual task or job that Google Tag Manager performs when a trigger is activated. For this project to work correctly, we will create a team of two different tags that work together.

We will be using a **Google Analytics: GA4 Configuration** type of **Tag** and then pass the form events data from the website using a **Custom JavaScript Snippet** attached to webpages, and also by the Google Tag Manager itself, by another **Custom HTML**type Tag.

Let’s create the **Custom HTML** Tag first as below:

Go to **Tags** and click **New**

![](https://fluentforms.com/wp-content/uploads/2025/07/add-gtm-tags-wpmn.webp)

Then select Tag Type as Custom HTML and put the Custom Code provided below inside the GTM Code Editor with the provided data:

| Title | cHTML – FluentFormsDataPush |
| --- | --- |
| Tag Type | Custom HTML |

📄
                
                                    Custom HTML Tag.js
    
    ```
<script>
(function($){
  var fluentForms = $('.frm-fluent-form');
  fluentForms.each(function() {
    var $form = $(this);
    var formId = $form.attr('data-form_id');
    dataLayer.push({
      'event': 'FluentFormActivities',
      'eventCategory': 'FluentForm',
      'eventAction': 'FormView',
      'FluentFormID' : formId
    });
    $form.on('fluentform_submission_success', function() {
      dataLayer.push({
        'event': 'FluentFormActivities',
        'eventCategory': 'FluentForm',
        'eventAction': 'FormSubmitted',
        'FluentFormID' : formId
      });
    });
  });
})(jQuery);
</script>
```

document.addEventListener('DOMContentLoaded', function() {
    // Initialize copy functionality for this specific snippet
    const snippet = document.getElementById('betterdocs-code-snippet-058feaac');
    if (snippet && window.BetterDocsCodeSnippet) {
        window.BetterDocsCodeSnippet.initCopyButton(snippet);
    }
});

![](https://fluentforms.com/wp-content/uploads/2025/07/add-cHTML-tag-wpmn.webp)

When that code is inserted, please click anywhere inside the Triggering Field and select **Firing Triggers**as **Page View [ All Pages]** as below:

![](https://fluentforms.com/wp-content/uploads/2025/07/add-cHTML-tag-trigger-wpmn-1.webp)

Now we are almost close to achieving our target and need to create one last Tag which will fetch the event data and then forward it to Google Analytics. We will also format the properties that will be sent to Google Analytics.

Again, go**to** **Tags** and select **Google Tag** as below:

![](https://fluentforms.com/wp-content/uploads/2025/07/Google-Tag-Manager-1-scaled.png)

Now, here you have to give **Google Analytics 4 Measurement ID** and then configure the settings variable.

![](https://fluentforms.com/wp-content/uploads/2025/07/2-1-scaled.webp)

| Title | FluentForms – GA4 |
| --- | --- |
| Tag Type | Google Analytics: GA4 Configuration |
| Measurement ID | G-XXXXXXXX [Follow instructions below to grab this code] |

> Fields to Set:

| debug_mode | true | For Debug View |
| --- | --- | --- |
| EventType | {{Event}} | Select as Variable |
| EventAction | {{FluentFormEventAction}} | Select as Variable |
| FormID | {{FluentFormID}} | Select as Variable |
| FormName | {{FluentFormName}} | Select as Variable |

![](https://fluentforms.com/wp-content/uploads/2025/07/Google-Tag-Manager-3-scaled.png)

### Google Analytics 4 Measurement ID

To get the **Google Analytics 4 Measurement ID,** please follow the steps below:

Go to your **Google Analytics Dashboard**and then click on **Admin**(**Gear Icon**on the Bottom Left of the page).

![](https://fluentforms.com/wp-content/uploads/2025/07/gtm-ga4-property-wpmn-1024x535.webp)

Then select the target account or create a new one with your desired details. Also, select an existing Property if you already have one, or create a new one with the desired details. Under the Property Name, the Data Streams option is available, and then click on it.

![](https://fluentforms.com/wp-content/uploads/2025/07/gtm-ga4-add-stream-wpmn-566.png)

Now, create a new **DataStream**as Web if your website is not already configured. Provide an appropriate **URL**without a protocol and a **Stream Name**.

![](https://fluentforms.com/wp-content/uploads/2025/07/gtm-setup-stream-wpmn-67.png)

[Optional] Then, please click on the Gear icon to select the data we will need for Fluent Forms Event tracking only. We will only need Page Views and do not need other types. Those types of data will also bring unnecessary data to Google Analytics, which we will not need for Fluent Forms Events.

![](https://fluentforms.com/wp-content/uploads/2025/07/gtm-ga4-enhanced-option-wpmn77.webp)

Now, after clicking on Save, you will see the Data Stream details, and now copy the **Measurement ID,** which we need to put in **Google Tag Manager**.

![](https://fluentforms.com/wp-content/uploads/2025/07/ga4-measurementID-wpmn-87.webp)

Now, let’s get back to the last Tag we created. When the Google Analytics Setting is also selected, it is time to select the trigger, like we previously did for **Custom HTML**.

> This time, select the Trigger we created previously, named FluentFormActivitiesEvent

![](https://fluentforms.com/wp-content/uploads/2025/07/Google-Tag-Manager-4-97-scaled.webp)

Now we are done with tasks. We can now debug what we just did live in **Preview Mode**or make the settings public by **Publishing** from the **Workspace**.

![](https://fluentforms.com/wp-content/uploads/2025/07/Google-Tag-Manager-1-100-scaled.webp)

Type in a meaningful **Version Name,** which can be anything for future purposes; if anything goes wrong while working in the future, identify work done until now and revert to this stage if we like.

![](https://fluentforms.com/wp-content/uploads/2025/07/gtm-ga4-version-name-wpmn-101.webp)

Since this method is confirmed for Fluent Forms I am going to publish my workspace and then check in Google Analytics by opening a Page that contains a Fluent Form, and then submit the form with some data and check the Events inside Google Analytics.

### 4. Final result in Google Analytics

The sample form, which is being teste,d looks like the below:

![](https://fluentforms.com/wp-content/uploads/2025/07/gtm-ga-test-sample-form-wpmn-102.webp)

After the page loads, even without clicking anything on the page, the form sends an event named FormView to GTM, and then it is triggered by our configuration, and now shows up in **Google Analytics**.

![](https://fluentforms.com/wp-content/uploads/2025/07/gtm-ga4-formview-event-wpmn-103.webp)

Expand the **page_view** Event for further details.

![](https://fluentforms.com/wp-content/uploads/2025/07/gtm-ga4-formview-4events-wpmn-104.png)

Also after submitting the form, we can see there is another event is pushed which is **FormSubmitted**

![](https://fluentforms.com/wp-content/uploads/2025/07/gtm-ga4-form-submission-wpmn-105.webp)

Expand any 4 types of **Event Data**to see more details:

![](https://fluentforms.com/wp-content/uploads/2025/07/gtm-ga4-event-details-wpmn-106.png)

There is a super-advanced feature of Google Analytics 4 that we will explore for our Fluent Forms Events. While configuring our Tag Manager Google Analytics GA4 configuration, we enabled Debug View, and now we can explore that as below:

![](https://fluentforms.com/wp-content/uploads/2025/07/gtm-ga4-debug-view-wpmn-107.png)

That’s it. Now you will get events to Google Analytics for all the Fluent Forms on your website.

Enjoy **Fluent Forms**as the most powerful form plugin for WordPress!

---

## Fluent Forms Global Search

**Source:** [https://fluentforms.com/docs/fluent-forms-global-search/](https://fluentforms.com/docs/fluent-forms-global-search/)

**Fluent Forms** has a **Global Search** feature that lets you search for anything within **Fluent Forms**, making your work super easy. This article will guide you through using the Global Search in Fluent Forms.

## Global Search

To learn how to use this Global Search, follow the steps below –

First, to access this feature, simply go to the**Fluent Forms** plugin from the **WordPress Admin Panel** on the left side.

Once you are on the **Fluent Forms Dashboard**, you will find the Global Search option in the top right corner as shown in the screenshot below.

You will find this search bar under any section (e.g., Forms, Entries, Payments, etc.) or feature in Fluent Forms, allowing you to search for relevant and necessary items.

![](https://fluentforms.com/wp-content/uploads/2025/03/1.-Global-Search-option-scaled.webp)

Now, click on the search button, and a pop-up will appear, showing you all the things you can search for.

Whether it’s Forms, Entries, Support, Integrations, or Global Settings, you can find it all with the Global Search option. So, go ahead, explore, and make the most of this awesome feature in Fluent Forms!

![](https://fluentforms.com/wp-content/uploads/2025/03/2.-Search-Popup-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Fluent Form API Logs

**Source:** [https://fluentforms.com/docs/fluent-form-api-logs/](https://fluentforms.com/docs/fluent-form-api-logs/)

The **API Logs** feature stores all records related to API activities in your forms in one place. It is especially useful for checking whether any particular API actions were successful, failed, or are still in progress. This article will give you a quick overview of the **API Logs** feature under **Fluent Forms**.

## API Logs

To learn where you can find the **API** **Logs** and their functionalities, follow the steps with Screenshots and GIFs below —

> Remember, here you can see only those form entries’ activities that have any Action occurred within them.

First, go to **Tools** from **WordPress Left Sidebar** or **Fluent Forms Navbar**, click the **API** **Logs** option in the left menu, and you can see all the API logs of your forms on this page.

![](https://fluentforms.com/wp-content/uploads/2025/03/1.-Tools-API-Logs-scaled.webp)

### Filter Your API Logs

However, if you want to see activities of a particular form or action, this page has four filtering options with dropdown lists to filter your forms. These are:

1. Form
2. Source
3. Status
4. Date

#### 1. Form

In this dropdown, you will only see those forms that include an integration feed.

**For example**, I selected **Contact Form** (it includes Platformly integration feed) from the dropdown list by clicking the **Arrow Icon**, and the two **Contact Forms** available appeared.

![](https://fluentforms.com/wp-content/uploads/2025/03/2.-Form-filter-option-1-scaled.webp)

#### 2. Source

Here, you can filter your logs based on different integration feeds, and these options you will find based on the integration occurring within the form.

**For example**,  I selected **Zapier Feed**from the dropdown list by clicking the **Arrow Icon**, and all the forms that includes Zapier Integration have appeared.

![](https://fluentforms.com/wp-content/uploads/2025/03/3.-Source-filter-option-1-scaled.webp)

#### 3. Status

You also have the option to filter your API logs based on the **Status** (**Success**, **Failed**, and **Processing**)  of your Forms’ Actions related to integration.

![](https://fluentforms.com/wp-content/uploads/2025/03/4.-Status-filter-option-1-scaled.webp)

#### 4. Date

With this option, you can filter your activities by selected **Dates** to see actions for specific days.

![](https://fluentforms.com/wp-content/uploads/2025/03/5.-Date-filter-option-1-scaled.webp)

**To show the use of all filtering options at a glance, follow the GIF below:**

![](https://fluentforms.com/wp-content/uploads/2025/03/6.-Forms-source-status-date-Drift-video.gif)

### Check Single API Log

If you want to see the API data of a specific form in a brief without checking the individual entries in detail, click on the**Arrow Icon** just before the Submission ID.

![](https://fluentforms.com/wp-content/uploads/2025/03/7.-Single-API-check.webp)

If you wish to view more detailed information for a specific entry, click on the desired **entry** **number** under the **Submission** **ID** column.

![](https://fluentforms.com/wp-content/uploads/2025/03/8.-Detail-API-Log-check.webp)

Here, you can see the overall detailed submission information of a user for this particular **Entry**.

To check specifically the general API Log, scroll down to the **Submission** **Logs**, click the **API Calls**tab, and you will get all the details.

If your action didn’t occur successfully, you can use the **Resend Email Notification** and **Entry Action** button to manually complete the desired action.

![](https://fluentforms.com/wp-content/uploads/2025/03/9.-Submission-Logs-API-Calls-scaled.webp)

### Replay Action for API Logs

If you want to re-run an action (e.g., reprocess the integration for this entry),  you can do it by simply clicking the **Replay** button under the **Action** column.

![](https://fluentforms.com/wp-content/uploads/2025/03/10.-Replay-Action-scaled.webp)

You can also re-run all the API Logs Actions at once by clicking the **Checkbox** placed just before the **ID** column, or you can re-run by **selecting the API logs individually** based on your needs.

Then, click the**Run Selected Actions**button, and all your selected logs will be processed again.

![](https://fluentforms.com/wp-content/uploads/2025/03/11.-Replay-action-in-bulk-scaled.webp)

### Delete API Logs

If you want to delete any API log, you can do it simply by clicking on the **Delete Icon** under the **Action** column.

![](https://fluentforms.com/wp-content/uploads/2025/03/12.-Delete-single-log-scaled.webp)

You can also delete all the API Logs at once by clicking the **Checkbox** placed just before the **ID** column, or you can delete by **selecting the API logs individually** based on your needs.

Then, click the**Delete Selected Logs** button, and all your selected logs will be deleted.

![](https://fluentforms.com/wp-content/uploads/2025/03/13.-Delete-logs-in-bulk-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Fluent Forms Activity Logs

**Source:** [https://fluentforms.com/docs/fluent-forms-activity-logs/](https://fluentforms.com/docs/fluent-forms-activity-logs/)

The **Activity** **Logs** feature keeps a record of actions performed in all your forms created through Fluent Forms in one place, making it easier to find information about specific actions without visiting each Form entry individually. This article will give you a quick overview of the **Activity Logs** in **Fluent Forms**.

## Activity Logs

To learn where you can find the **Activity** **Logs** and their functionalities, follow the steps with Screenshots and GIFs below —

> Remember, here you can see only those form entries’ activities that have any Action occurred within them.

First, go to **Tools** from **WordPress Left Sidebar** or **Fluent Forms Navbar**, click the **Activity** **Logs** option in the left menu, and you can see all the activity logs of your forms on this page.

![](https://fluentforms.com/wp-content/uploads/2025/03/1.-Tools-Activity-Logs-scaled.webp)

### Filter Your Activity Logs

However, if you want to see activities of a particular form or action, this page has four filtering options with dropdown lists to filter your forms. These are:

1. Form
2. Source
3. Status
4. Date

#### 1. Form

Use this filter to view activities of particular forms based on their **Form Title**, and you will get only those forms here that have any actions within them.

**For example**, I selected **Support Form** from the dropdown list by clicking the **Arrow Icon**, and the two **Support Forms** available appeared.

![](https://fluentforms.com/wp-content/uploads/2025/03/2.-Form-filter-option-scaled.webp)

#### 2. Source

Here, you can filter your logs based on different options, which you will find according to the Actions Occurred and the Integration Feed you added within the form. For example —

- Email Notification,
- Payment
- User Registration, etc.

**For example**, if you have any payment issues inside a specific form or want to view payment activities for all forms, select “**Payment**” options from the dropdown list by clicking the **Arrow** **Icon** in the **Source**.

And, you will find all the payment-related activities of your forms which will help you identify the specific issues you want to address. Similarly, you can check any form-related activity based on the **Action** happening in your forms.

![](https://fluentforms.com/wp-content/uploads/2025/03/3.-Source-filter-option-scaled.webp)

#### 3. Status

You also have the option to filter your activity logs based on the **Status** (**Success**, **Info**, and **Failed**) of your forms.

![](https://fluentforms.com/wp-content/uploads/2025/03/4.-Status-filter-option-scaled.webp)

#### 4. Date

With this option, you can filter your activities by selected **Dates** to see actions for specific days.

![](https://fluentforms.com/wp-content/uploads/2025/03/5.-Date-filter-option-scaled.webp)

**To show the use of all filtering options at a glance, follow the GIF below:**

![](https://fluentforms.com/wp-content/uploads/2025/03/6.-Four-filter-dropdowns-Drift-video.gif)

### Check Single Activity Log

If you want to see the activity data of a specific form in a brief without checking the individual entries in detail, click on the**Arrow Icon** just before the Submission ID.

![](https://fluentforms.com/wp-content/uploads/2025/03/7.-Brief-actitivity-check-by-Arrow-Icon.webp)

If you wish to view more detailed information for a specific entry, click on the desired **entry** **number** under the **Submission** **ID** column.

![](https://fluentforms.com/wp-content/uploads/2025/03/8.-Click-the-desired-Submission-Id.webp)

Here, you can see the overall detailed submission information of a user for this particular **Entry**.

To check specifically the general Activity Log, scroll down to the **Submission** **Logs**, click the **General** tab, and you will get all the details.

If your action didn’t occur successfully, you can use the **Resend Email Notification** and **Entry Action** button to manually complete the desired action.

![](https://fluentforms.com/wp-content/uploads/2025/03/9.-Detailed-entry-info-of-a-log-scaled.webp)

### Delete Activity Logs

If you want to delete any activity log, you can do it simply by clicking the **Delete Icon** under the **Action** column.

![](https://fluentforms.com/wp-content/uploads/2025/03/10.-Delete-Single-activity-log-scaled.webp)

You can also delete all the Activity Logs at once by clicking the **Checkbox** placed just before the **ID** column, or you can delete by **selecting the activity logs individually** based on your needs.

Then, click the**Delete Selected Logs** button, and all your selected logs will be deleted.

![](https://fluentforms.com/wp-content/uploads/2025/03/11.-Delete-in-bulk-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Show Fluent Forms Entries in Frontend using Ninja Tables

**Source:** [https://fluentforms.com/docs/show-fluent-forms-entries-in-frontend-using-ninja-tables/](https://fluentforms.com/docs/show-fluent-forms-entries-in-frontend-using-ninja-tables/)

Fluent Forms integrates with [Ninja Tables](http://Ninjatables.com), a table plugin that allows you to display **Fluent** **Forms’** submission **Entries** on the frontend. This article will guide you through integrating **Ninja Table** with**Fluent Forms**.

## Installing & Activating Ninja Tables

> Before starting the process, ensure you install and activate the Ninja Table plugin on your WordPress site.

First, go to **Plugins** in the **WordPress Admin Panel** on the left side, click **Add New Plugin**, search for the **Ninja Table**plugin using the **Search Plugins** option on the right, and the plugin will appear.

Now, click the **Install** button, and your**Ninja Table** plugin will be installed on your site.

![](https://fluentforms.com/wp-content/uploads/2025/03/3.-Install-Ninja-Table-scaled.webp)

Then, click the **Activate** button, and the Ninja Table plugin will be activated and ready to function.

![](https://fluentforms.com/wp-content/uploads/2025/03/4.-Activate-Ninja-Table-scaled.webp)

## Configuring Fluent Forms into Ninja Tables

Now it’s time to configure a desired form in a table to showcase its entries on the frontend.

First, go to **Tables** from **Ninja Tables Left Sidebar** or **All Tables** from **Ninja Tables Navbar,** and click the **Add Table**button in the top right corner.

![](https://fluentforms.com/wp-content/uploads/2025/03/5.-Add-Table-scaled.webp)

Open the **Connect Fluent Forms** option from the left menu of the pop-up page and get the configuration option.

Now, provide a **Title** for the table you are creating. Then select the preferred Fluent Forms’ **Form** you want to configure with this table using the **Arrow Icon**.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one. Plus to learn more details about Form Entries, read this Documentation.

![](https://fluentforms.com/wp-content/uploads/2025/03/6.-Connect-Fluent-Forms-Select-desired-form-scaled.webp)

### Select Form’s Entry Fields

After selecting the form, all fields of that form will appear, where you can choose which field/s you want to showcase in your table by clicking the Checkboxes.

To select all entry fields at once, click the checkbox placed just before the **Select Entry Fields**.

You can also set the number of **Maximum** **Entries** you want to display using the **Max** **Records** field. Plus, you can select the**Entry Type** based on the form’s**Status**.

Once you are done, click the **Save**button, and your table will be created.

![](https://fluentforms.com/wp-content/uploads/2025/03/7.-Save-the-form.webp)

### Edit Table Settings

Here, you can see that all the submission data from the chosen form has been displayed, and all the selected **Entry Fields** are shown as **Table** **Columns**.

You can **edit your table settings** by clicking the Arrow Icon on the top right side if needed.

![](https://fluentforms.com/wp-content/uploads/2025/03/8.-Form-entries-in-Ninja-Table-scaled.webp)

Now, you’ll see a new “**Show current submission only at frontend**” option. **Enable** this option if you want to display only the most recent form submission entries on the frontend.

Always click the **Update** button after making any changes to the settings to save them.

![](https://fluentforms.com/wp-content/uploads/2025/03/9.-Edit-Table-Settings-scaled.webp)

## Embedding the Table into the Frontend

Now, to embed or display the table into the frontend, copy your table’s **Shortcode** from the top.

![](https://fluentforms.com/wp-content/uploads/2025/03/10.-Copy-shortcode-scaled.webp)

Then, **paste** the shortcode into the desired **Page/Post** where you want to display the table.

![](https://fluentforms.com/wp-content/uploads/2025/03/11.-Paste-Shortcode-scaled.webp)

## Preview of Integrated Table

Here is the preview of the added **Table** where the**Form**was integrated.

![](https://fluentforms.com/wp-content/uploads/2025/03/12.-preview-of-Form-Entries-in-a-Page-using-Ninja-Table.webp)

This is how you can Show Entries on the Frontend with Ninja Tables!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Set Scroll Offset of Form Steps

**Source:** [https://fluentforms.com/docs/set-scroll-offset-of-form-steps/](https://fluentforms.com/docs/set-scroll-offset-of-form-steps/)

[ How to Set Scroll Offset ]

If your website contains a sticky header menu. In that case, users may encounter problems where the form is partially obscured under the header when auto-scroll is enabled in a multi-step form. To fix this, you can set a Scroll Offset to adjust the scroll position, ensuring the form is fully visible.

This article will guide you on how to set the Scroll Offset using Fluent Forms.

## Setting Scroll Offset

To set the Scroll Offset, you need to add **Custom CSS, JavaScript**, or **Both**. This script instructs the auto-scroller to allow some space at the top of the page while scrolling, preventing the form from being hidden under the sticky header.

First, open an existing **Form** where you want to set the **Scroll Offset** and go to its **Editor** page.

If you don’t have any existing forms, follow the [Create Blank Form](https://fluentforms.com/docs/how-to-create-a-form-with-fluent-forms/) or [Create Form using the Pre-built Template](https://fluentforms.com/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms/) documentation to create a new one.

Once you are on the **Editor**page of your desired form, go to the **Settings & Integrations**section, and open the **Custom CSS/JS** tab from the left sidebar. Then, enter the **CSS**, **JavaScript**, or **Both** here according to your requirements.

> For example, here, I use the JavaScript only to explaine the process.window.ff_scroll_top_offset = 20;In this script, 20 represents a 20-pixel offset. You can adjust this value according to your needs.
> 
> 
> 
> If 20px does not entirely resolve the problem, experiment with raising or reducing the value until the form scrolls to the required place without being slowed by the sticky header. This change improves the user experience by preventing any elements of your multi-step form from getting lost by a sticky header menu.

Once you are done, press the **Save & JS**button and the Scroll Offset will be set in your desired forms.

![](https://fluentforms.com/wp-content/uploads/2024/12/Custom-CSS-JS-Fluent-Forms-12-06-2024_05_14_PM1-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank You.

---

## Email Validation With ClearOut

**Source:** [https://fluentforms.com/docs/email-validation-with-clearout/](https://fluentforms.com/docs/email-validation-with-clearout/)

Clearout is an advanced platform that provides email validation, helping to filter out fake or disposable emails. First, you will need a ClearOut API key for those validations.

Here’s a step-by-step guide to integrating ClearOut with Fluent Forms for email validation.

## Get ClearOut API Key

To get the Clearout API Key, go to the[ClearOut website](https://clearout.io) and log in to your account.

Now, navigate to **Apps** in the ClearOut dashboard. Then, choose **Server** as the App Type. Provide a name for the app and click the **Create**button.

![](https://fluentforms.com/wp-content/uploads/2025/01/create-app-01-scaled.webp)

Once the app is created, an **API** token will be generated. **Copy**this token for later use.

![](https://fluentforms.com/wp-content/uploads/2025/01/api-token-02-scaled.webp)

## Install the ClearOut Plugin

To install the ClearOut plugin, go to the Plugins section of your WordPress admin dashboard **and click** on the **Add New** button.

Search for the “**ClearOut Email Validator**” plugin or download it directly from[ClearOut’s website](https://www.clearout.io).

After that, **Install** and **activate** the plugin.

![](https://fluentforms.com/wp-content/uploads/2025/01/email-validation-03-scaled.webp)

Now, Configure the plugin with Fluent Forms. After activation, go to the **ClearOut settings** in your WordPress admin panel and click the **ClearOut Email Validation** options.

Here, **Paste** the**API Token** that was copied before from ClearOut.

![](https://fluentforms.com/wp-content/uploads/2025/01/paste-api-token-04-scaled.webp)

Ensure that you choose **Fluent Forms** as the select form option. Click the **Apply** button to save the changes.

This connection ensures all email fields in Fluent Forms are automatically validated by ClearOut’s service.

![](https://fluentforms.com/wp-content/uploads/2025/01/enable-fluent-form-05-scaled.webp)

That’s it. Now, your emails will be validated by ClearOut Services automatically.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Connecting Fluent Forms from one domain with Fluent CRM to another domain

**Source:** [https://fluentforms.com/docs/connecting-fluent-forms-from-one-domain-with-fluent-crm-to-another-domain/](https://fluentforms.com/docs/connecting-fluent-forms-from-one-domain-with-fluent-crm-to-another-domain/)

[FluentCRM](https://fluentcrm.com/) is a self-hosted Email Marketing Automation Plugin for WordPress. Manage your leads and customers, email campaigns, automated email sequencing, monitor user activities, and many more in one place!

FluentCRM’s WebHooks feature allows you to transfer leads collected through Fluent Forms on one domain to FluentCRM on another.

This article will show you how to collect leads of Fluent Forms from one domain with FluentCRM to another domain.

## Create a WebHook in FluentCRM

If you want to collect user information from one domain to another, you can use FluentCRM’s **WebHooks** feature. First, navigate to the domain from which you want to transfer the leads.

Go to the FluentCRM dashboard of the domain where **FluentCRM**is installed. Now, navigate to **Settings**sections and click the **Incoming WebHooks** options.

Then click on **Create Webhook** to make a new WebHook.

![](https://fluentforms.com/wp-content/uploads/2025/01/Webhook-Settings-FluentCRM-01-scaled.webp)

A popup will appear. Now you will fill in the **fields**details-

- **Name**: Assign a descriptive name for the WebHook.
- **List**: Select a subscriber list where the leads will be added.
- **Tags**: Assign tags to categorize these leads.
- **Status**: Set the WebHook status to **Active**.

After That, click on the **Create** button like the example given below. This is how the **WebHook** gets generated.

![](https://fluentforms.com/wp-content/uploads/2025/01/create-weebhook-02-scaled.webp)

After creation, copy the **WebHook URL**. This will be used to link Fluent Forms to FluentCRM.

![](https://fluentforms.com/wp-content/uploads/2025/04/create-weebhook-03-scaled.webp)

## Set Up Fluent Forms on the Source Domain

Now, go to the Fluent Forms dashboard on the domain where the forms are installed. [Create a new form](https://fluentforms.com/docs/how-to-create-a-form-with-fluent-forms/) or use an existing one with fields like **Name** and **Email**.

![](https://fluentforms.com/wp-content/uploads/2025/01/Form-04-scaled.webp)

Then, go to **Integrations** from the Fluent Forms Navbar, search for **Webhook**in the search bar, and download the **Webhook integration module**.

Now, turn on the **Toggle** to enable the **Webhook**module.

![](https://fluentforms.com/wp-content/uploads/2025/01/enable-webhook-module-05-scaled.webp)

Now, go back to the form you’ve created. To configure the **WebHook** Integration, click the **Webhook** options from the **forms** **Settings** tab. Next, click the **Add New** button to set up a new **Webhook**feed.

![](https://fluentforms.com/wp-content/uploads/2025/01/add-webhook-06-scaled.webp)

Here appears a new window. Now you will fill in the details.

**A. Name**: Enter a unique name to the integration setup.

**B. Request URL**: Paste the WebHook URL copied from FluentCRM.

**C. Request Method**: Set to **POST** from the dropdown.

**D. Request Format**: Select **JSON** from the dropdown options.

**E. Request Headers**: Leave as **No Headers** (default).

**F. Request Body:**Choose **Selected Fields** in the Request Body section.

Map the form fields (Name, Email) to the corresponding WebHook keys by copying the key values from FluentCRM and pasting them into the Value field.

**G. Conditional Logic:**If you want to allow **Webhook** integration conditionally based on your submission values, then**Enable Conditional Logic**options. To know more about this conditional logic, read the [article](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

After completing all the fields, click the **Save Feed** button to save the setup.

![](https://fluentforms.com/wp-content/uploads/2025/01/WebHook-Settings-07-scaled.webp)

> Make sure the second domain doesn’t have FluentCRM installed.

Now, enter test data in the form on the source domain and **submit** it.

![](https://fluentforms.com/wp-content/uploads/2025/01/08.webp)

After that**,** go to FluentCRM on the destination domain and refresh the **Contacts** page. The submitted data should now appear in the contacts list.

![](https://fluentforms.com/wp-content/uploads/2025/01/09-scaled.webp)

Using **Fluent Forms** and **WebHooks**, you can create as many WebHooks as required and collect leads from multiple domains into a centralized FluentCRM database**.**

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Phone Field GEO-Location Provider

**Source:** [https://fluentforms.com/docs/phone-field-geo-location-provider/](https://fluentforms.com/docs/phone-field-geo-location-provider/)

Fluent Forms supports **GEO-location detection** for phone number fields, allowing the form to **automatically detect a user’s country** based on their IP address. This improves user experience and ensures more accurate data collection.

Follow this simple step by step process to enable this feature.

## Get an IPinfo Access Token

Fluent Forms used ipinfo.io to verify users’ GEO Locations which just works fine for a general form.

Now login to [ipinfo.io](http://ipinfo.io) account. The free plan includes up to **50,000 validations per month**. If you expect more, consider upgrading to a paid plan.

Once logged in, navigate to the **Token** section in the left sidebar. Now, copy your **Access Token** displayed on the page.

![](https://fluentforms.com/wp-content/uploads/2025/01/Access-token-ipinfo-01-scaled.webp)

### Configure GEO-Location Provider in Fluent Forms

To configure GEO-Location, go to your **Fluent Forms** and click on **Global Settings**. Scroll down to the settings page until you find the **Geo-Location provider** option.

Now, paste the**Access Token**that you copied from the **IPinfo**account and click **Save Settings** to apply the GEO-location functionality.

![](https://fluentforms.com/wp-content/uploads/2025/01/GEO-location-02-scaled.webp)

Once configured, phone fields in your forms will automatically suggest the correct country code based on the user’s IP location.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Translate Datepicker Field of Fluent Forms Plugin

**Source:** [https://fluentforms.com/docs/translate-datepicker-field-of-fluent-forms-plugin/](https://fluentforms.com/docs/translate-datepicker-field-of-fluent-forms-plugin/)

Fluent Forms allows you to **translate the Datepicker UI** (month names, weekdays, AM/PM) by adding custom code to your **theme’s functions.php file**.

This guide walks you through translating the Datepicker into your desired language (e.g., German, French, Spanish, etc.).

## Access the Theme Editor

First, log in to your **WordPress Dashboard**. Then, hover over the **Appearance**and select the **Theme file Editor** options.

Now, open the functions.php file of your theme.

> Use a child theme to avoid losing changes during updates.

![](https://fluentforms.com/wp-content/uploads/2025/01/function.php-file-01-scaled.webp)

### Translate Month Names

To change the name of the months of the date picker, add the code below to your theme’s **functions.php** file. You can paste the code at the end.

```
add_filter('fluentform/date_i18n', function ($strings) {

$strings = array(

    'months'           => [

        'shorthand' => [

            __('Jan', 'fluentform'),

            __('Feb', 'fluentform'),

            __('Mar', 'fluentform'),

            __('Apr', 'fluentform'),

            __('May', 'fluentform'),

            __('Jun', 'fluentform'),

            __('Jul', 'fluentform'),

            __('Aug', 'fluentform'),

            __('Sep', 'fluentform'),

            __('Oct', 'fluentform'),

            __('Nov', 'fluentform'),

            __('Dec', 'fluentform')

        ],

        'longhand'  => [

            __('January', 'fluentform'),

            __('February', 'fluentform'),

            __('March', 'fluentform'),

            __('April', 'fluentform'),

            __('May', 'fluentform'),

            __('June', 'fluentform'),

            __('July', 'fluentform'),

            __('August', 'fluentform'),

            __('September', 'fluentform'),

            __('October', 'fluentform'),

            __('November', 'fluentform'),

            __('December', 'fluentform')

        ]

    ],

);

return $strings;

});
```

You can change the months’ shorthand and longhand as needed. You can also replace the month names ( “January”) with translations in your language.

For example, if you want to translate this into German, you might want to change “October” to “Oktober” for the longhand and “Oct” to**“Okt”** for the shorthand.

### Translate Weekdays

Let’s translate the weekday shorthand and longhand forms. This is identical to changing the months above. Add the code below to your child themes **function.php** file.

```
add_filter('fluentform/date_i18n', function ($strings) {

$strings = array(

    'weekdays'         => [

        'longhand'  => array(

            __('Sunday', 'fluentform'),

            __('Monday', 'fluentform'),

            __('Tuesday', 'fluentform'),

            __('Wednesday', 'fluentform'),

            __('Thursday', 'fluentform'),

            __('Friday', 'fluentform'),

            __('Saturday', 'fluentform')

        ),

        'shorthand' => array(

            __('Sun', 'fluentform'),

            __('Mon', 'fluentform'),

            __('Tue', 'fluentform'),

            __('Wed', 'fluentform'),

            __('Thu', 'fluentform'),

            __('Fri', 'fluentform'),

            __('Sat', 'fluentform')

        )

    ],

);

return $strings;

});
```

Change both shorthand and longhand on the weekdays as needed. So if you want to translate this to German, you might want to change “Thursday” to “Donnerstag” for the longhand and “Sun” as “Don” for the shorthand.

You can also replace the weekday names ( “Sunday”) with translations in your language.

### Translate AM and PM

Let’s take a look at the AM and PM translations. They’re also identical to the months and weekdays translation described earlier. Add the code below to your child themes’ **functions.php** file.

```
add_filter('fluentform/date_i18n', function ($strings) {

$strings = array(

    'amPM'             => [

    __('AM', 'fluentform'),

    __('PM', 'fluentform')

    ],

);

return $strings;

});
```

Now, change the AM and PM to your language as needed. For the German translation, you might want to change “AM” to “Uhr morgens” and “PM” to “Uhr.”

You can replace “AM” and “PM” with your preferred terms ( “Uhr morgens” and “Uhr” in German).

### Combine All Translations

After that, you can combine the above codes into one filter for simplicity. You can use the code below once to translate all of the months, weeks, and AM-PM without using the code for them individually.

```
add_filter('fluentform/date_i18n', function ($strings) {

     $strings = array(

            'months'           => [

                'shorthand' => [

                    __('Jan', 'fluentform'),

                    __('Feb', 'fluentform'),

                    __('Mar', 'fluentform'),

                    __('Apr', 'fluentform'),

                    __('May', 'fluentform'),

                    __('Jun', 'fluentform'),

                    __('Jul', 'fluentform'),

                    __('Aug', 'fluentform'),

                    __('Sep', 'fluentform'),

                    __('Oct', 'fluentform'),

                    __('Nov', 'fluentform'),

                    __('Dec', 'fluentform')

                ],

                'longhand'  => [

                    __('January', 'fluentform'),

                    __('February', 'fluentform'),

                    __('March', 'fluentform'),

                    __('April', 'fluentform'),

                    __('May', 'fluentform'),

                    __('June', 'fluentform'),

                    __('July', 'fluentform'),

                    __('August', 'fluentform'),

                    __('September', 'fluentform'),

                    __('October', 'fluentform'),

                    __('November', 'fluentform'),

                    __('December', 'fluentform')

                ]

            ],

            'weekdays'         => [

                'longhand'  => array(

                    __('Sunday', 'fluentform'),

                    __('Monday', 'fluentform'),

                    __('Tuesday', 'fluentform'),

                    __('Wednesday', 'fluentform'),

                    __('Thursday', 'fluentform'),

                    __('Friday', 'fluentform'),

                    __('Saturday', 'fluentform')

                ),

                'shorthand' => array(

                    __('Sun', 'fluentform'),

                    __('Mon', 'fluentform'),

                    __('Tue', 'fluentform'),

                    __('Wed', 'fluentform'),

                    __('Thu', 'fluentform'),

                    __('Fri', 'fluentform'),

                    __('Sat', 'fluentform')

                )

            ],

            'amPM'             => [

                __('AM', 'fluentform'),

                __('PM', 'fluentform')

            ],

        );

    return $strings;

});
```

When using combined code, you don’t need to write multiple **add_filte**r functions and return statements.

After adding the code, click the **Update file** button to save the **functions.php** file.

Now your Fluent Forms Datepicker will display in your selected language!

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to use CSS Ready Classes

**Source:** [https://fluentforms.com/docs/how-to-use-css-ready-classes/](https://fluentforms.com/docs/how-to-use-css-ready-classes/)

Using the CSS Ready Classes in Fluent Form, you can easily create more advanced alternative layouts for the fields in your forms. You can also to take advantage of pre-defined styles included in the default form stylesheet.

This article will guide you how you can use CSS ready classes in Fluent Forms.

## Add CSS Classes

First, edit your form in the Form Builder and select the field where you want to add the classes.

Now, From the **Advanced Options**tab, you’ll see an input called **Container Class**. Add the **Ready Class** name or names you want to add to the field and click the **Save Form** button.

> This feature does not update live in the form builder.

![](https://fluentforms.com/wp-content/uploads/2025/04/321-scaled.webp)

## Ready Class Names

Here are the Ready Classes built into the Fluent Forms default stylesheet, which you can use immediately without writing your own CSS.

#### Ff_list_2col

This turns a Radio/checkbox list into an equally-spaced 2-column format. It only applies to Radio/checkbox lists and works with any form label position settings.

#### ff_list_3col

This turns a Radio/checkbox list into an equally-spaced 3-column format. This only applies to Radio/checkbox lists and works with any form label position settings.

A Forms preview that without Container Class

![](https://fluentforms.com/wp-content/uploads/2025/01/Preview-02.webp)

A preview Forms with **Container class**.

![](https://fluentforms.com/wp-content/uploads/2025/01/02.webp)

#### ff_list_4col

This turns a Radio/checkbox list into an equally-spaced 4-column format. This only applies to Radio/checkbox lists and works with any of the form label position settings.

#### ff_list_5col

This turns a Radio/checkbox list into an equally-spaced 5-column format. This only applies to Radio/checkbox lists and works with any of the form label position settings.

#### ff_list_inline

This turns a Radio/checkbox list into an inline horizontal list (not evenly spaced columns). This only applies to multiple **Radio/checkbox** lists and works with any of the form label position settings.

#### ff_scrolled_text

This converts an HTML field into a box with a fixed height that will automatically show a scroll bar if there’s a large amount of text.

This is useful if you want to show a large amount of content to the user but don’t want to have to link to it or make the form very long to show it (Terms of Service Agreements, etc.). This class only works on section breaks and with any form label position settings.

![](https://fluentforms.com/wp-content/uploads/2025/01/scroll-text-03-scaled.webp)

#### ff_force_hide

This will hide an input field from being displayed on the front end of the website. This is useful when you want to use an input field in your form to store some values or data but don’t want to display it to the users when they fill up the form.

#### ff_pointer

The cursor will change to a pointer when hovering over an input field.

#### ff-read-only

This class restricts the input fields from being edited; they can only be viewed by the user. Under the “**Advanced Options**” tab, you’ll see an input called Element Class. Add the Ready Class name to the field and save the form.

#### ff-hidden

This will keep the input field hidden, where this field is visible to the admin.

> CSS classes are not compatible with Conversational Forms.

Apply these classes to style your forms effortlessly. If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

