# Forms

*Category from FluentCRM documentation*

---

## Capturing Leads Remotely from Fluent Forms

**Source:** [https://fluentcrm.com/docs/capturing-leads-through-fluent-forms-webhook/](https://fluentcrm.com/docs/capturing-leads-through-fluent-forms-webhook/)

As we have seen that Fluent Forms and FluentCRM work greatly together to manage Subscriptions and Contacts from [Opt-in Forms (Fluent Forms) Basic Configuration](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/) and [Fluent Forms Advanced Configuration](https://fluentcrm.com/docs/opt-in-forms-advanced-configuration/). But the case was that both of the plugins were installed on the same website.

In this tutorial, we will be learning how to collect leads from different websites or domains and centralize them within your FluentCRM dashboard. We will be collecting leads or data from only one remote Fluent FormWebsite. The same way can be followed to collect leads from as many remote or different Fluent Forms as you want.

For this purpose, we will utilize the feature of [Fluent Forms webhook integration](https://wpmanageninja.com/docs/fluent-form/integrations-available-in-wp-fluent-form/webhook-integration/) and Fluent CRM [Incoming Webhooks](https://fluentcrm.com/docs/global-incoming-webhooks/).

## Background

![crm form webhook remote](https://fluentcrm.com/wp-content/uploads/2021/06/crm_form_webhook_remote.png)

As you can see in the above diagram we have installed FluentCRM on website1.com and Fluent Forms on website2.com. Please follow the below guide carefully to connect your FluentCRM with remote Fluent Forms.

## FluentCRM

### Create Incoming Webhook

From your FluentCRM dashboard, navigate to the [FluentCRM Global Settings](https://fluentcrm.com/docs/fluentcrm-global-settings/) and select [Incoming Webhooks](https://fluentcrm.com/docs/global-incoming-webhooks/). From there, click the **Create WebHook**button as below.

![crm create incoming webhook](https://fluentcrm.com/wp-content/uploads/2021/06/crm_create_incoming_webhook.png)

Give a name for your webhook and select the lists and tags you want to assign to contacts through the webhook integration. Based on your preference, you can also set the [FluentCRM Contacts Status](https://fluentcrm.com/docs/fluentcrm-contacts-status/) to either Pending or Subscribed. The pending status will send a [Double Opt-in Confirmation Email](https://fluentcrm.com/docs/global-double-opt-in-settings/).

![crm create incoming webhook map](https://fluentcrm.com/wp-content/uploads/2021/06/crm_create_incoming_webhook_map.png)

***Note**: It is recommended to set up opt-in confirmation before sending marketing emails to your contacts. So if you haven’t acquired subscription confirmation from your contacts, you need to set contact status to **Pending** so that FluentCRM can send an opt-in email to your contacts. Customize the [Double Opt-in Settings](https://fluentcrm.com/docs/global-double-opt-in-settings/) if you want.

Click **Create** to save the webhook. Upon creating the webhook, FluentCRM will automatically map the contact fields and show you the details. You can also add or change the selected list, tags, or status here.

### Data Properties or Field Keys

![crm create incoming webhook url](https://fluentcrm.com/wp-content/uploads/2021/06/crm_create_incoming_webhook_URL-1.png)

Upon successful creation, you will see a success message on the top right corner and you will also see a newly generated URL that will be used to send data to FluentCRM and a section that will provide a list of Fields with Keys to be used to Map the Data. You can check [Contacts in SmartCode](https://fluentcrm.com/docs/smartcodes-in-fluentcrm-email-editor/#Contacts) to see the available Keys (**leave {{}} part while using in webhook**).

Close the pop-up to get you your webhook request URL. To copy the URL, simply click the copy button. If you want to change the webhook configuration or delete it, you can also do it here by editing the webhook.

![crm create incoming webhook list](https://fluentcrm.com/wp-content/uploads/2021/06/crm_create_incoming_webhook_list.png)

## Sending Data

Now it’s time to send the data from Fluent Forms to FluentCRM using Webhook.

### Enable Fluent Forms Webhook

At first, enable the webhook module in Fluent Forms. Go to **Fluent Forms** > **Integrations** and enable the **WebHooks** module.

![crm form enable webhook](https://fluentcrm.com/wp-content/uploads/2021/06/crm_form_enable_webhook.png)

### Create Webhook

Please check [How to Create a Form with Fluent Forms](https://wpmanageninja.com/docs/fluent-form/how-to-use-wp-fluent-form/create-fluent-form/) to create a new FLuent Forms. And after enabling the WebHook module as the above step now go to the settings of the form you created and you will see the WebHook option in the left sidebar where click on the +Add New button to create a new webhook in the Fluent Forms as below.

![crm form add webhook](https://fluentcrm.com/wp-content/uploads/2021/06/crm_form_add_webhook.png)

### Mapping Data

Now you will see a few options to Map and Configure the settings. Please check the below table to see the minimum recommended required settings to send the data to FluentCRM.

| Option | Value |
| --- | --- |
| 1. Name | Provide a name for the webhook as an identifier. |
| 2. Request URL | The FluentCRM WebHook URL we created earlier. |
| 3. Request Method | Set it to POST |
| 4. Request Format | Set it to JSON |
| 5. Request Header | Set it to No Headers |
| 6. Request Body | Selected Fields because we need to map the Keys and Values as we saw earlier. |
| 7. Request Fields | The minimum required field to send the data is the Email Address and the key is email |

FluentCRM required webhook parameters

#### General Fields

The general fields are the contact properties referred to SmartCode earlier.

#### Additional Fields

![crm form webhook configure custom (1)](https://fluentcrm.com/wp-content/uploads/2021/06/crm_form_webhook_configure_custom-1.png)

The additional fields can be the [Custom Contact Fields](https://fluentcrm.com/docs/global-custom-contact-fields/) that you configure as you want and those are also able to be mapped in the webhook.

#### Conditional Logic

![crm form webhook configure conditional](https://fluentcrm.com/wp-content/uploads/2021/06/crm_form_webhook_configure_conditional.png)

Another powerful feature of the Fluent Forms is the [Conditional Logic in Fluent Forms](https://wpmanageninja.com/docs/fluent-form/advanced-features-functionalities-in-wp-fluent-form/conditional-logic-fluent-form/). You can use this feature here and in the above screenshot, we put a condition that we will send the Webhook data only from the Country containing Bangladesh. Otherwise, we will not send any data from Fluent Forms to FluentCRM. Configure this feature as per your requirements or leave it process all the data.

Once you’re done configuring the webhook feed, click **Create WebHook Feed**.

## Form Submission

![crm form webhook preview](https://fluentcrm.com/wp-content/uploads/2021/06/crm_form_webhook_preview.png)

Let’s test the form with a test data submission. As we put a condition we are selecting the Country as Bangladesh in test.

### Form Entry Data

![crm form webhook entry nofeed](https://fluentcrm.com/wp-content/uploads/2021/06/crm_form_webhook_entry_noFeed-1.png)

As we have seen in the [Feed Status](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/#Feed-Status) of [Basic Configuration](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration) this might be confusing as the submission log will not show the webhook data processing in the General Section. The WebHook is a part of API Calls.

### Feed Inspection

To see the Webhook data submission please click on the API Calls tab. Here you will find the submission log and can investigate in the future if you find any unwanted behavior or failure.

![crm form webhook entry apicalls](https://fluentcrm.com/wp-content/uploads/2021/06/crm_form_webhook_entry_APICalls.png)

### Contact Data

Now let’s check the contact data in the FluentCRM on website1.com as we saw the submission was successful from the Fluent Forms on website2.com.

![crm form webhook contact overview](https://fluentcrm.com/wp-content/uploads/2021/06/crm_form_webhook_contact_overview.png)

We will see that on First Name, Last Name & Email Address data is available and all other fields are empty. This is because in the [Mapping Section](#Mapping-Data) we only mapped these 3 fields.

In this way, you can create as many WebHooks as required and collect leads from various domains using this feature.

.

---

## Fluent Forms Advanced Configuration

**Source:** [https://fluentcrm.com/docs/opt-in-forms-advanced-configuration/](https://fluentcrm.com/docs/opt-in-forms-advanced-configuration/)

As we have configured our first subscription form with Fluent Forms in the previous [Opt-in Forms (Fluent Forms) Basic Configuration](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/) guide, we are already familiar with [Creating Subscription Forms](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/#Create-Subscription-Form), [Mapping List & Tags](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/#Mapping-List-Tags). [Form Actions](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/#Form-Actions), [Embedding Subscription Form](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/#Embedding-Subscription-Form). In this tutorial, we will be extending the form we have created in that guide.

## Fluent Forms

Fluent Forms is also a popular WordPress plugin that is highly customizable with respect to features and designs. The full documentation of Fluent Forms is here: [Fluent Forms (wpmanageninja.com)](https://wpmanageninja.com/docs/fluent-form/)

### Adding New Fields

From the [basic configuration guide](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/), we saw the Edit Form buttons from both of FluentCRM and Fluent Forms. Now we are going to [Edit the Form](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/#Edit-Form) we want.

Aside from the pre-made templates, You can also add other input fields in the Opt-in forms and feed them to FluentCRM. A more in-depth guide is on the [How to Add Fields to Fluent Forms](https://wpmanageninja.com/docs/fluent-form/how-to-use-wp-fluent-form/how-to-create-a-form-with-wp-fluent-form-wordpress-plugin/) page. Below we have added a new Custom HTML section to just show a message and an Address Field that contains a few address-related information which we will be storing in FluentCRM contacts as well.

![crm form add new field](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_add_new_field.png)

### Preview Form

Now to preview the newly added fields, please click on the **Save button in** the top right corner and then click on the **Preview & Design**button that will redirect us to a new tab previewing the new changes to the subscription form. Our customized form will look like the below screenshot:

![crm form preview](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_preview.png)

### Form Settings

Now we will be checking the Fluent Forms settings. To enter into the settings of Fluent Forms, please****click on the **Settings & Integrations**tab in the top section.

To learn more about Fluent Forms settings please visit [Advanced Features & Functionalities in Fluent Forms](https://wpmanageninja.com/docs/fluent-form/advanced-features-functionalities-in-wp-fluent-form/). Here we will be reviewing [Double Opt-in emails in Fluent Forms](https://wpmanageninja.com/docs/fluent-form/advanced-features-functionalities-in-wp-fluent-form/set-up-double-opt-in-emails-in-wp-fluent-forms-2/) and [Advanced Form Validation in Fluent Forms](https://wpmanageninja.com/docs/fluent-form/advanced-features-functionalities-in-wp-fluent-form/advanced-form-validation-in-wp-fluent-forms-wordpress-plugin/).

#### Double Opt-in Confirmation

![crm form double opt in](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_double_opt_in.png)

If you came here reviewing FluentCRM global settings you already have seen [Double Opt-in Settings](https://fluentcrm.com/docs/global-double-opt-in-settings/) and know how it works. Fluent Forms also offers a double opt-in confirmation process for form submission that enables the admin to ensure the entries submitted are not done by robots or any automated sources and also protects the configured feeds not being bloated as well. Enabling this option will send a form submission confirmation email to the user.

After the user confirms the submission by confirming the URL in the Email, the form submission will be processed and FluentCRM data will be processed. If you have enabled double opt-in confirmation for users then now the user will get another email asking to confirm the FluentCRM Email Marketing & Newsletter subscription.

You can additionally **Disable Double Optin for Logged in users**, **Disable Double Optin if the contact email is subscribed in FluentCRM** by checking the options, and also customize the Form Subscription Double Opt-in confirmation email.

#### Advanced Validation

![crm form advanced validation](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_advanced_validation.png)

The conditions can be set either to fail the submissions or to process the submissions.

As we work with the email addresses of the users in FluentCRM is also very important that we avoid temporary emails. We can achieve something like that in the very first place by enabling Advanced Validation and setting conditions as the above including a Submission Failure Message.

That is just a single-use case. This feature is possible to use in various conditions and use-cases like placing a passcode and providing only to known users that passcode to use while submitting the form. Otherwise, the form submission will not even initiate.

## FluentCRM Feed

Now let’s configure the FluentCRM Integration Feed by going to Marketing & CRM Integration from the left side. Since we already created this in the earlier tutorial an existing feed is already there. **But if you create a Fluent Form manually and later want to connect to FluentCRM then please follow the next steps.**

To add a **New Feed**please hover over **Add New Integration**and click on the **FluentCRM Integration**from the options.

![crm form crm feed](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_crm_feed.png)

Now we need to configure and map some options between Fluent Form Fields and FluentCRM contact data as below.

### Primary Mapping

The very important or minimum required fields that need to be selected or mapped are the **FluentCRM List**that will be assigned to the form submitted contact and the **Contact Email Address**.

![crm form crm feed primary](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_crm_feed_primary.png)

Other Primary Options are:

1. **Feed Name:** Required Name for the Feed as an Identifier.
2. **First Name:** First Name of the contact.
3. **Last Name:** Last Name of the contact.
4. **Full Name:**  Full Name of the contact.

### Custom Fields Mapping

All the other FluentCRM fields including the FluentCRM [Custom Contact Fields](https://fluentcrm.com/docs/global-custom-contact-fields/) will be available for mapping below the basic field mapping. The left side labeling **Field Label** is the FluentCRM contact fields name and the right side labeling Field Value is being submitted from the user through the subscription form.

![crm form crm feed other](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_crm_feed_other.png)

Here we have added a few address fields in the form and mapped those fields according to FluentCRM contact data properties.

### Dynamic Tags

If you have multiple tags in the FluentCRM and you have fields that can take various inputs from the user, then you can assign Tags dynamically based on the input. Below we have assigned tags dynamically based on the **Country** from the Address fields.

![crm form crm feed dynamic tags](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_crm_feed_dynamic_tags.png)

### Conditional Logic

Another useful advanced feature of Fluent Forms Integration Feed is that you can also apply conditional logic based on input and decide if **All**or **Any**of the configured conditions. Below we have decided that Submissions from the contacts in the United States, United Kingdom, and Bangladesh are allowed.

![crm form crm feed conditional logic](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_crm_feed_conditional_logic.png)

#### Multiple Feeds based on Conditional Logic

In cases, where you want the user to select the Lists they will subscribe to or any other options that are predefined in the FluentCRM already, you may use this Conditional Logic and create multiple Feeds. For example, you let the user select from 3 Lists from the dropdown, radio input, or checkbox. Then create 3 separate FluentCRM feeds and enable conditional logic and set conditions for each list. This way depending on the list selection from the user either of the 3 feeds will be activated and processed.

### Miscellaneous

Other available options in the Feed Settings will allow you to

1. **Skip the Feed Submission if the contact already exists in FluentCRM,**
2. **Enable Double Opt-in for new contacts,**
3. **Enable Force Subscribe if contact is not in subscribed status (Existing contact only),**
4. **Remove Contact Tags and**
5. **Enable or Disable the Feed.**

## Form Submission

As we have followed instructions in the [Form Submission](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/#Form-Submission) of the [Opt-in Forms (Fluent Forms) Basic Configuration](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/) we can now [Embed Subscription Form](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/#Embedding-Subscription-Form), check [Entry in Fluent Forms](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/#Entry-in-Fluent-Forms), check the [Feed Status](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/#Feed-Status), and also check the [Contact in FluentCRM](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/#Contact-in-FluentCRM)as well to confirm that we have followed and configured every step carefully and everything works!

![crm form advanced submission](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_advanced_submission.png)

To test out the conditions we just set in an advanced way, The form is submitted with the Country set to Bangladesh with a logged-in user. So

1. **The Form is submitted for the contact in Bangladesh,**
2. **Double Opt-in for Form Submission processing was not done as the submitter is already logged in to the website,**
3. **Data fed to FluentCRM matching conditional logic,**
4. **Tag Assigned with Bangladesh,**
5. **Address Information that was mapped stored the submitted address information.**

![crm form advanced submission overiview](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_advanced_submission_overiview.png)

That’s all for advanced and extended configuration of Fluent Forms Subscriptions with FluentCRM.

---

## Opt-in Forms (Fluent Forms) Basic Configuration

**Source:** [https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/](https://fluentcrm.com/docs/opt-in-forms-fluent-forms-basic-configuration/)

You might wonder if it is possible to integrate with FluentCRM and manage those users and run automation, email campaigns, email sequences, etc. Below you will see 2 examples of subscription forms that can connect with FluentCRM.

![crm form2](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form2.png)

![crm form3](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form3.png)

One of the best features of FluentCRM is that it has native integration with [Fluent Forms](https://wordpress.org/plugins/fluentform/) which is also a popular Subscriptions and Payment Form Plugin for WordPress. FluentCRM uses this plugin to handle the default subscriptions of Contacts in FluentCRM.

![form wp](https://fluentcrm.com/wp-content/uploads/2020/09/form_wp.png)

The good news is you can customize the Subscriptions as you want in Fluent Forms and connect the form with FluentCRM. If you want to add more people to your marketing campaign, you can create a landing page including a form. Your audience can fill up the form and they will get a double opt-in email and register as a contact for your email marketing campaigns.

## Activating Fluent Forms

To get started with Subscription Forms in FluentCRM, go to the FluentCRM **Dashboard ➜ Forms**, Click on the **Activate Fluent Forms Integration** button, and wait for the confirmation. This will install the Fluent Forms plugin in the background.

![crm form activate](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_activate.png)

## Create Subscription Form

Once the plugin is installed, you will see a success message on the top right corner of the dashboard as shown in the below screenshot.

![crm form activated new](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_activated_new.png)

Now you can create your first subscription form by clicking on the red button saying **Create Your First Form**or the blue **Create a New Form** button. A popup will appear, and you will see a list of templates ready for you, pick any template you wish.

![crm form select template](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_select_template.png)

### Templates

The templates offered while creating the form look like below:

![crm form 1](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_1.png)Template 1

![crm form 2](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_2.png)Template 2

![crm form 3](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_3.png)Template 3

You might want to use the 3rd template as it is a regular and common use case for subscription forms that include both Name & Email.

### Mapping List & Tags

Now it’s time to fill in the Form Title, Select the **List** and **Tags** you want to map with FluentCRM. It is required to create the List and tags before creating the form. Check the checkbox **Enable Double Opt-in Confirmation**for new contacts so that FluentCRM will send a double opt-in email to the user as soon as the form is submitted to confirm their subscription. Now click on the **Create Form** button.

You will also see a message saying “*This form will be created in Fluent Forms and you can customize it*anytime” which means the form is customizable and you can design and configure settings later at any time. We made a dedicated guide on that in [Fluent Forms Advanced Configuration](https://fluentcrm.com/docs/opt-in-forms-advanced-configuration/)

![crm form create new](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_create_new.png)

The form will be created with an active feed with FluentCRM, all the submitted entries will be added to your assigned [Lists](https://fluentcrm.com/docs/segment-your-audience/#Lists) and [T](https://fluentcrm.com/docs/segment-your-audience/#1-toc-title)[ags.](https://fluentcrm.com/docs/segment-your-audience/#Tags)

## Form Actions

Once the form is created you will a success message on the top right corner of the dashboard. Now you can **Preview the Form**, **Edit the Form** and also **Edit the Connection with FluentCRM** feed by clicking on each link.

![crm form created](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_created.png)

### Preview

When the form is created you will be provided with a shortcode of Fluent Forms to use the form on any Page or Post. To Preview the Form how it looks like click on the **Preview The Form** Button.

### Edit Form

You can also Edit the Form Fields, and add more fields from various types of fields. This will take you to the Fluent Forms Editor directly.

### Edit Connection

This is the FluentCRM Feed Integration settings that connect the Fluent Form with FluentCRM. More about this is discussed in [Fluent Forms Advanced Configuration](https://fluentcrm.com/docs/opt-in-forms-advanced-configuration/).

If you close the popup window, you can anytime do these actions from the Forms Dashboard as shown in the below screenshot.

![crm form list](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_list.png)

### Actions from Fluent Forms

The above options are the exact same from the Fluent Forms dashboard as below:

![form actions](https://fluentcrm.com/wp-content/uploads/2020/09/form_actions.png)

## Form Submission

Now it is time to add the form to a Page or Post and then test the submission.

### Embedding Subscription Form

To use the form we need to use the shortcode or even a Gutenberg Editor Block that will let us select the Fluent Form on any page or post. In this tutorial we will be adding the form on a new page as below:

![crm form embed (1)](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_embed-1.png)

After publishing the page with the form only we will see a page similar to the screenshot below:

![crm form on page](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_on_page.png)

We could also create a page and add the form’s shortcode to the page in a paragraph or shortcode block, or use the shortcode in the sidebar widget or within a post.

### Entry in Fluent Forms

Now let’s test our form by submitting a test name and an email address and then Go to **Fluent Forms >**either **All entries**or the **Form specific Entries**and check the entry that is submitted.

![crm form submitted](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_submitted.png)

After submitting the form with test details check the entry in the Fluent Forms dashboard. You will see the entry details as shown below:

![crm form entry feed](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_entry_feed.png)

#### Feed Status

**Important:** The **Submission Logs** section is very important working with any feeds like FluentCRM in this case. If you ever see any unwanted behavior or the form does not submit the contact to FluentCRM, please check the entry if it is submitted and then this section to check if it shows a *success* message or not. It will also log the reason if it fails to submit the contact into FluentCRM.

### Contact in FluentCRM

Since the entry shows a success message for the FluentCRM feed, let’s check the FluentCRM contacts to see if our test form submission successfully added the contact or not. Go to **FluentCRM  ➜ Contacts** or the [Contacts Dashboard](https://fluentcrm.com/docs/contacts-dashboard/) and you should see the contact as shown in the below screenshot.

![crm form contact entered](https://fluentcrm.com/wp-content/uploads/2020/09/crm_form_contact_entered.png)

That’s all for the Subscription Form and collecting contact information into FluentCRM. To go beyond please check [Fluent Forms Advanced Configuration](https://fluentcrm.com/docs/opt-in-forms-advanced-configuration/) for further and advanced configuration.

---

