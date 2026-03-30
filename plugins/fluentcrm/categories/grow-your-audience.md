# Grow Your Audience

*Category from FluentCRM documentation*

---

## Contact Statuses

**Source:** [https://fluentcrm.com/docs/contact-statuses/](https://fluentcrm.com/docs/contact-statuses/)

## Contact Statuses in FluentCRM

FluentCRM offers a robust system for managing contact statuses, allowing you to control and segment your audience effectively. Understanding these statuses is crucial for proper contact management, email marketing, and automation.

In FluentCRM, a contact can have one of the following six statuses:

1. Subscribed
2. Pending
3. Unsubscribed
4. Bounced
5. Complained
6. Transactional

Let’s delve into each status to understand its implications and use cases.

### Subscribed Contacts

**Status: subscribed**

- These are your active and engaged contacts.
- Subscribed contacts have explicitly opted in to receive your communications or you directly added as subscribed.
- You can send all types of emails (promotional and transactional) to these contacts.
- All automation workflows can be run for subscribed contacts.

**Key Points:**

- Ideal for your main email marketing efforts.
- These contacts form the core of your active audience.

### Pending Contacts

**Status: pending**

- Contacts in this status are awaiting confirmation of their subscription.
- Typically, these contacts have signed up through a double opt-in process but haven’t confirmed their subscription yet.
- You cannot send campaign or promotional emails to pending contacts.
- Automation can be run for pending contacts if you enable that in the automation configuration, mainly focused on getting them to confirm their subscription. Please note that no email from the automation will be sent but other actions will run.

**Key Points:**

- Used in double opt-in processes to ensure subscriber intent.
- These contacts need to confirm their subscription to move to ‘subscribed’ status.

### Unsubscribed Contacts

**Status: unsubscribed**

- These contacts have opted out of your communications.
- A contact can become unsubscribed by:

1. Clicking an unsubscribe link in an email.
2. Being manually unsubscribed by an admin.

- You should not send promotional emails to unsubscribed contacts.
- Automation can be run for pending contacts if you enable that in the automation configuration, mainly focused on getting them to confirm their subscription. Please note that no email from the automation will be sent but other actions will run.

**Key Points:**

- Respect this status to maintain a good sender reputation and comply with email regulations.

### Bounced Contacts

**Status: bounced**

- This status is applied to contacts whose email addresses have resulted in hard bounces.
- FluentCRM can automatically mark contacts as bounced when integrated with certain email service providers if you configure the bounce handler with your email-sending service.
- No emails will be sent to these contacts from FluentCRM unless resubscribed.

**Key Points:**

- Regularly clean your list by removing or attempting to update bounced contacts.
- Set up proper bounce handling in your email service provider integration.

### Complained Contacts

**Status: complained**

- Contacts who have marked your emails as spam receive this status.
- This status helps protect your sender’s reputation.
- Avoid sending further communications to these contacts.

**Key Points:**

- Take complaints seriously and review your email practices if you receive many complaints.
- Consider removing these contacts from your list entirely.

### Transactional Contacts

**Status: transactional**

- This status is for contacts who should receive only transactional emails.
- Campaign emails will not be sent but emails from automation will be sent.
- You can set this status manually from bulk action or automation trigger. This is the default status for the WooCommerce Abandon Cart Module in FluentCRM

## Best Practices for Managing Contact Statuses

1. Regularly review and clean your contact list.
2. Set up proper integrations for automatic status updates (especially for bounces and complaints).
3. Respect unsubscribe requests promptly.
4. Use segmentation based on status for targeted and appropriate communication.
5. Implement a re-engagement strategy for unengaged subscribers before they unsubscribe.

By effectively managing these statuses, you can maintain a healthy email list, improve deliverability, and ensure compliance with email marketing best practices and regulations.

---

## Company Module

**Source:** [https://fluentcrm.com/docs/company-module/](https://fluentcrm.com/docs/company-module/)

In [FluentCRM](https://fluentcrm.com/), the Company Module feature organizes contacts to one or more company records. In this company record, you can see company information and the contacts you have added under the company. This article will guide you through the process of using this feature.

> One of the notable features of the Company Module is organizing one or more contacts under a single entity. Additionally, it automatically retrieves company logos from their website using the website URL only.

## Activate/Enable Company Module

You can enable the **Company Module** feature using **Two** different options. These are:

1. **Addons**
2. **Advanced Features Config**

To learn how you can enable this feature using the options mentioned above, follow the steps with the screenshots below –

### Enable Company Module Using Addons

First, go to the **Addons** section in your **Fluent CRM Sidebar**and you will find the **Company** **Module** option under the **Advanced Modules**.

Now click the **Settings** button and a popup will appear where you need to **check the boxes**.

Then, click the **Save Settings** button to unlock the **Company Module** features and fetch the company logo automatically through its website URL.

![enabling company module from addons](https://fluentcrm.com/wp-content/uploads/2023/05/Enabling-Company-Module-from-Addons-scaled.webp)

### Enable Company Module Using Advanced Features Config

First, go to **Settings**from the top right corner of the **Fluent CRM Navbar**, click the **Advanced Feature Config** settings page, scroll down and you will find the **Company Module** option.

Here, you will find two settings options. These are

- **Enable Company Module for Contacts:** Enable this to unlock the **Company Module**feature inside the **Contacts** section dropdown of the **Fluent CRM Navbar**.
- **Try to get company logo automatically from the given website URL**: Enable this to fetch the company logo automatically by providing only the website URL of the company.

![enabling company module from advanced feature config](https://fluentcrm.com/wp-content/uploads/2023/05/Enabling-Company-Module-from-Advanced-feature-config-scaled.webp)

## Adding Companies

To learn how you can **Add** your desired **Companies** in the **Contacts** section, follow the steps with the screenshots below –

After enabling the Company Module feature, go to **Companies** from the **Contacts** section dropdown.

> Remember, you will not get this “Companies” option inside the Contacts section if you do not activate/enable the company module.

![companies option under contacts section](https://fluentcrm.com/wp-content/uploads/2023/05/Companies-option-under-Contacts-section-scaled.webp)

To add company details, simply click the **+ Add Company** button and a pop-up will appear where you can enter the company details.

You can also import company details from a CSV file by clicking the **Import** button.
Or, conveniently export company details to a CSV file by clicking the **Export** button.

![add company, import, and export button](https://fluentcrm.com/wp-content/uploads/2023/05/Add-company-Import-and-Export-button-scaled.webp)

After providing all the necessary information, click the **Create Company**button**.**

![create company popup page](https://fluentcrm.com/wp-content/uploads/2023/05/Create-company-popup-page.webp)

Once you add the company, you will get Three major options. These are:

> Contacts is for adding and organizing the contacts under a single company, and Notes & Activities and Custom Fields for adding the essential information to the company.

- Contacts
- Notes & Activities
- Custom Fields

### Contacts

Now, you can easily add contacts for the added companies. To learn how to add contacts, follow the screenshots below –

Click the **+** **Contacts** button, and a pop-up will appear.

![+ contacts button](https://fluentcrm.com/wp-content/uploads/2023/05/Contacts-button-scaled.webp)

Here, you can add existing contacts or create new ones for the company from the pop-up window.

![add existing or create new button](https://fluentcrm.com/wp-content/uploads/2023/05/Add-Existing-or-Create-New-button-scaled.webp)

### Notes & Activities

You can also add notes and activities for the company using the “**Notes & Activities**” section.

> The data for the Notes & Activities under Companies are independent from the Individual Contacts’ Notes & Activities data.

Click on the **Add New**button to add notes for the company and a pop-up will appear.

![add new button under notes & activities](https://fluentcrm.com/wp-content/uploads/2023/05/Add-New-button-under-Notes-Activities-scaled.webp)

Here, you can add notes for the company from the pop-up window.

![create note popup page](https://fluentcrm.com/wp-content/uploads/2023/05/Create-note-popup-page-scaled.webp)

### Custom Fields

Fluent CRM doesn’t have any designated field for adding additional data to your company details. But you can do it easily with the **Custom Field** feature of Fluent CRM.

> The data for the Custom Fields under Companies are independent from the Individual Contacts’ Custom Fields data.

**To learn how to add Custom Fields in Companies, follow the steps with screenshots below –**

From the left sidebar, click the **Custom Fields** button, and a pop-up page will appear on the right-hand side.

![custom field button](https://fluentcrm.com/wp-content/uploads/2023/05/Custom-Field-button-scaled.webp)

Now, click the **Add Field**button to add the new field for your company.

![custom field popup page](https://fluentcrm.com/wp-content/uploads/2023/05/Custom-Field-popup-page-scaled.webp)

Then, choose the **Field Type**from the dropdown menu that suits your needs and click the **Add** button and a popup page will appear.

You will get the following Field Types from the Dropdown List to add the desired Information:

- **Single Line Text**: Used for adding one-liner entries.
- **Multi-Line Text**: Used for adding descriptive information.
- **Numeric Fields**: Used for adding numerical inputs.
- **Select Choice**: Used for selecting one input as a choice from multiple values.
- **Multiple Select Choice**: Used for selecting multiple inputs as choices.
- **Radio Choice**: Used for adding radio button choices.
- **Checkboxes**: Used for adding multiple/single tick inputs.
- **Date**: Used for adding date information from the calendar.
- **Date and Time**: Used for adding the exact time with the date information.

![add new custom field popup page](https://fluentcrm.com/wp-content/uploads/2023/05/Add-new-custom-field-popup-page.webp)

After selecting the Field Type, configure all the additional information according to your necessity.

> For example, here, I am choosing the Single Line Text field type for adding the custom field. You can choose anyone according to your needs.

You will get the following additional fields for almost each field type –

- **Labels**: Used to name the field for general users in the Fluent CRM interface.
- **Slug (Optional)**: Slugs can be used to call up custom fields in code.
- **Field Group (optional)**: This option is for adding sub-fields under a main field. For example, under the Address field, you can add sub-fields like City, Postcode, and Country.

Once you are done, click the **Add** button and your custom field will be added.

> You can add as many custom fields as you want according to your needs by following the same process.

![final popup page for adding custom field](https://fluentcrm.com/wp-content/uploads/2023/05/Final-popup-page-for-adding-custom-field.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Import from Other Plugins & Integrations

**Source:** [https://fluentcrm.com/docs/import-contacts-to-fluentcrm-from-other-integrations/](https://fluentcrm.com/docs/import-contacts-to-fluentcrm-from-other-integrations/)

The import tool will help you add contacts to FluentCRM from various third-party plugins. During the import process, you can also auto-update the properties of already existing contact at once.

**Things to know before importing the contacts**

- You must have the plugin (WooCommerce, EDD, Learndash, LifterLMS, TutorLMS, Learnpress, Paid Memberships Pro, Restrict Content Pro, or BuddyBoss) from which you want to import the contacts already installed on your site, otherwise, you won’t see the option in the import modal.

**First Step**

Go to the FluentCRM dashboard and choose the Contacts tab from the top and then click the Import button from the top-right.

![contacts fluentcrm 15](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-15.png)

## Import contacts from WooCommerce

After clicking the import button a popup will appear where you need to select the WooCommerce option as the contact source and then click next.

![contacts fluentcrm 1 5](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-1-5.png)

In the second step, you can select the WooCommerce Product based on which the contacts will be segmented. You can also set a FluentCRM Tag to apply while importing the contacts.

![contacts fluentcrm 2 4](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-2-4.png)

## Import contacts from Easy Digital Downloads (EDD)

After clicking the import button a popup will appear where you need to select the Easy Digital Downloads option as the contact source and then click next.

![edd import (1)](https://fluentcrm.com/wp-content/uploads/2021/11/edd_import-1.png)

In the second step, you can select the Easy Digital Downloads Product based on which the contacts will be segmented. You can also set a FluentCRM Tag to apply while importing the contacts.

![edd import page 2 (1)](https://fluentcrm.com/wp-content/uploads/2021/11/Edd-import-page-2-1.png)

## Import contacts from Learndash

After clicking the import button a popup will appear where you need to select the Learndash option as the contact source and then click next.

![learndash integration page 1](https://fluentcrm.com/wp-content/uploads/2021/10/Learndash-integration-page-1.png)

In the second step, you can select if you want to **Import By Courses** or **Import By Member Groups**. Based on the selected option, you can set which FluentCRM Tag to apply while importing the contacts.

![learndash integration page 2](https://fluentcrm.com/wp-content/uploads/2021/10/Learndash-integration-page-2.png)

In the third step, you will see some sample data that will be imported. You can select the List for the imported contacts. You can also Update a subscriber with new data from Learndash if the contact already exists in FluentCRM and set the new subscriber status.

## Import contacts from LifterLMS

After clicking the import button a popup will appear where you need to select the LifterLMS option as the contact source and then click next.

![lifterlms import crm](https://fluentcrm.com/wp-content/uploads/2021/10/LifterLMS-import-crm.png)

In the second step, you can select if you want to **Import By Courses** or **Import By Memberships**. Based on the selected option, you can set which FluentCRM Tag to apply while importing the contacts.

![lifterlms import crm 2](https://fluentcrm.com/wp-content/uploads/2021/10/LifterLMS-import-crm-2.png)

In the third step, you will see some sample data that will be imported. You can select the List for the imported contacts. You can also Update a subscriber with new data from LifterLMS if the contact already exists in FluentCRM and set the new subscriber status.

## Import contacts from TutorLMS

After clicking the import button a popup will appear where you need to select the TutorLMS option as the contact source and then click next.

![tutorlms import crm 1](https://fluentcrm.com/wp-content/uploads/2021/10/TutorLMS-import-crm-1.png)

In the second step, you can select **Import By Courses** and map your courses with FluentCRM Tags that will be applied while importing the contacts.

![tutorlms import crm 2](https://fluentcrm.com/wp-content/uploads/2021/10/TutorLMS-import-crm-2.png)

In the third step, you will see some sample data that will be imported. You can select the List for the imported contacts. You can also Update a subscriber with new data from TutorLMS if the contact already exists in FluentCRM and set the new subscriber status.

## Import contacts from Learnpress

After clicking the import button a popup will appear where you need to select the Learnpress option as the contact source and then click next.

![learnpress import page 1](https://fluentcrm.com/wp-content/uploads/2021/10/Learnpress-import-page-1.png)

In the second step, you can select **Import By Courses** and map your courses with FluentCRM Tags that will be applied while importing the contacts.

![learnpress import page 2](https://fluentcrm.com/wp-content/uploads/2021/10/Learnpress-import-page-2.png)

In the third step, you will see some sample data that will be imported. You can select the List for the imported contacts. You can also Update a subscriber with new data from Learnpress if the contact already exists in FluentCRM and set the new subscriber status.

## Import contacts from Paid Memberships Pro

A popup will appear where you need to select the option – paid Memberships Pro, as the contact source and then click next.

![pmp import crm 2](https://fluentcrm.com/wp-content/uploads/2021/10/PMP-import-CRM-2.png)

In the second step, you can select **Import By Membership Level** and map the Membership levels with FluentCRM Tags that will be applied while importing the contacts.

![pmp import crm 1](https://fluentcrm.com/wp-content/uploads/2021/10/PMP-import-CRM-1.png)

In the third step, you will see some sample data that will be imported. You can select the List for the imported contacts. You can also Update a subscriber with new data from Paid Memberships Pro if the contact already exists in FluentCRM and set the new subscriber status.

## Import contacts from MemberPress

A popup will appear where you need to select the option – MemberPress, as the contact source and then click next.

![memberpress import 1 1](https://fluentcrm.com/wp-content/uploads/2022/05/Memberpress_import-1-1.png)

In the second step, you can select **Import By Membership Level** and map the Membership levels with FluentCRM Tags that will be applied while importing the contacts.

![membership import 2 1](https://fluentcrm.com/wp-content/uploads/2022/05/membership_import_2-1.png)

In the third step, you will see some sample data that will be imported. You can select the List for the imported contacts. You can also Update a subscriber with new data from MemberPress if the contact already exists in FluentCRM and set the new subscriber status.

## Import contacts from Restrict Content Pro

After clicking the import button a popup will appear where you need to select the Restrict Content Pro option as the contact source and then click next.

![rcp import crm 1](https://fluentcrm.com/wp-content/uploads/2021/10/RCP-import-CRM-1.png)

In the second step, you can select **Import By Membership Level** and map the Restrict Content Pro Membership livels with FluentCRM Tags that will be applied while importing the contacts.

![rcp import crm 2](https://fluentcrm.com/wp-content/uploads/2021/10/RCP-import-CRM-2.png)

In the third step, you will see some sample data that will be imported. You can select the List for the imported contacts. You can also Update a subscriber with new data from Restrict Content Pro if the contact already exists in FluentCRM and set the new subscriber status.

---

## Import Contacts into FluentCRM

**Source:** [https://fluentcrm.com/docs/import-contacts-into-fluentcrm/](https://fluentcrm.com/docs/import-contacts-into-fluentcrm/)

FluentCRM offers its users to import contacts from numerous sources and ways to import them. There are 3 types of contact importing processes in FluentCRM which are from the CSV file, WordPress users list from the core and other plugins, and 3rd party or Other CRM services.

## Importing Contacts from CSV File

The CSV import tool will help you add contacts to FluentCRM. You can easily upload contacts into FluentCRM from a valid CSV(**comma-separated value**) file. During the import process, you can also auto-update the properties of already existing contact at once.

### Prerequisites to import contacts from a CSV file

- You already have your contacts in a spreadsheet program like MS Excel or Google Sheets, Now export the contacts as a CSV file.
- The date field must be formatted in a specific way for example the Date of Birth or other Dates must follow the **Y-m-d** format.
- In FluentCRM, you can categorize your contacts based on their [subscription status](https://fluentcrm.com/docs/fluentcrm-contacts-status/), like subscribed or unsubscribed. You can only select one status at a time.
- FluentCRM has no limit to the number of subscribers you can import like other SaaS email marketing providers, so feel free to import all your contacts.
- If you are importing a **Country** for the contacts please use the [Alpha-2 Value [2 Letter] ISO 3166 Country Codes](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes). Example: BD, US, GB, etc.
- The minimum field to import contacts into FluentCRM is the **Email field**.

### Start Importing contacts from the CSV file

Go to the **FluentCRM Dashboard** ➜ **All Contacts** and then click on the **Import** button from the top right corner.

![crm contacts options](https://fluentcrm.com/wp-content/uploads/2022/08/crm_contacts_options.png)

This will open a modal and you will see a few options and select the**CSV file** from the available options.

![contacts fluentcrm 14](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-14.png)

On the next screen, you will be asked to select the **Separator Operator** of the **CSV file**. The most common format is **Comma Separated** and we strongly recommend this format.

![contacts fluentcrm 1 4](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-1-4.png)

Now click to upload or Drag a CSV file that you want to use to import your contacts.

![contacts fluentcrm 2 3](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-2-3.png)

On the next screen, you will be asked to map the CSV fields into FluentCRM fields. Please check and select the fields accordingly.

![contacts fluentcrm 3 3](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-3-3.png)

**The available general fields as of now are:**

1. Name Prefix.
2. First Name.
3. Last Name.
4. Full Name.
5. Email.
6. Timezone.
7. Address Line 1.
8. Address Line 2.
9. City.
10. State.
11. Postal Code.
12. Country.
13. IP Address.
14. Phone.
15. Source.
16. Date of Birth (Y-m-d format)

You will also see a few other additional Custom Fields if you added them to the [Custom Contact Fields.](https://fluentcrm.com/docs/global-custom-contact-fields/)

The Other Options are:

1. **Lists:** Assign the Lists you want to the contacts.
2. **Tags:** Attache Tags to the contact by choosing them from the dropdown.
3. **Update Subscribers:** If any contact is already present you can update new data for them. Otherwise, existing contacts will be skipped.
4. **New Subscriber Status:** Give a status for the contacts.
5. **Do Not Trigger Automations (Tag & List Related Events):** This option asks you if you want the new contacts to be added to automation if the Lists, Tags, or other conditions are triggered.
6. **Force update contact status**. This will update all imported contact statuses regardless of their previous status: If you want to force the Contact Subscription Status to be updated to the one you select now.

## Importing WordPress Users as Contacts

Same as the **CSV Method** selection to import WordPress users this time select **WordPress Users**. This will provide a modal to select the available User Roles to be imported. You can either select **All User Roles**or **Select Specific User Roles**by checking them.

![contacts fluentcrm 4 2](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-4-2.png)

On the next screen, a few of the users will be listed as per your selection in the previous screen.

![contacts fluentcrm 5 2](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-5-2.png)

The options available here to be selected are:

1. **Apply Lists:** Assign the Lists you want to the contacts.
2. **Apply Tags:** Attache Tags to the contact by choosing them from the dropdown.
3. **Update Subscribers:** If any contact is already present you can update new data for them. Otherwise, existing contacts will be skipped.
4. **New Subscriber Status:** Give a status for the contacts.
5. **Do Not Trigger Automations (Tag & List Related Events):** This option asks you if you want the new contacts to be added to automation if the Lists, Tags, or other conditions are triggered.

## Importing Contacts from Other Integrations

FluentCRM allows you to import users from other WordPress plugins into FluentCRM contacts. The relevant importing guides are listed below:

1. **Import contacts from WooCommerce**
2. **Import contacts from Easy Digital Downloads (EDD)**
3. **Import contacts from Learndash**
4. **Import contacts from LifterLMS**
5. **Import contacts from TutorLMS**
6. **Import contacts from Learnpress**
7. **Import contacts from Paid Memberships Pro**
8. **Import contacts from MemberPress**
9. **Import contacts from Restrict Content Pro**

## Importing Contacts from Other CRM

![contacts fluentcrm 6 1](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-6-1.png)

FluentCRM also provides an easy way to import Contacts from Other CRM Services like Mailchimp, ConvertKit, Mailerlite, Drip, and ActiveCampaign.

1. **Importing guidelines for Mailchimp.**
2. **Importing guidelines for ConvertKit.**
3. **Importing guidelines for Mailerlite.**
4. **Importing guidelines for Drip.**
5. **Importing guidelines for ActiveCampaign.**

---

## General & Dynamic Segments

**Source:** [https://fluentcrm.com/docs/segment-your-audience/](https://fluentcrm.com/docs/segment-your-audience/)

FluentCRM is a powerful email marketing & automation application that enables its users to market through emails, run automation based on various triggers, and perform different actions. To do this, FluentCRM admins may need to segment the contacts to identify the contacts later while filtering them out and performing bulk actions, selecting them in the campaign setup, or also assigning the specific contacts in automation as below screenshots.

![contacts fluentcrm 12](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-12.png)Filtering contacts based on Lists, Tags, and Subscription Statuses from the Contacts Dashboard.

![jvjhm campaign fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/jvjhm-Campaign-FluentCRM.png)Filtering contacts based on Lists and tags in the Campaign.

![edit funnel fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/Edit-Funnel-FluentCRM.png)Filtering contacts based on Tags in Automation.

In this tutorial, we will be learning about the General & Dynamic Segmentation of FluentCRM. You can access **All the contacts**, **Lists**, **Tags**, and **Dynamic Segments**by hovering over the **Contacts Menu** from the FluentCRM Dashboard.

![contacts fluentcrm 13](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-13.png)

## General Segments

You can segment your audience or contacts with multiple lists, tags, and/or dynamic segments. The general segmentation is based on static Lists or Tags. Having segments of the contacts are very useful to categorize audiences for better-targeted email campaigns. In this article, we will take a deeper look into the segmentation of contacts with FluentCRM.

### Lists

Lists are one of the segmentation processes of your contacts. You can add lists and assign any contacts to your list for better segmentation. You can also create multiple lists based on your use cases. To add a list Go to **Contacts ➜ Lists** and click on the “Create List” button located in the near top right corner.

![lists fluentcrm l](https://fluentcrm.com/wp-content/uploads/2023/08/Lists-FluentCRM-l.png)

A popup will appear where you need to give the list a **Title** and the list **Slug**will be added automatically based on the list name. Click **Confirm**and the list will be created instantly.

![](https://fluentcrm.com/wp-content/uploads/2021/04/Lists-FluentCR.png)

### Tags

Tags are used to classify your FluentCRM audience in a more meaningful way. Tags are like Lists but more ways to filter your contacts inside a list. A list can have multiple tags, also multiple tags can be assigned to a particular contact. To create a tag Go to **Contacts ➜ Tags** click on the “**Create Tag**” button and a modal window will appear where you will need to give the **Title** and **Slug** (Automatically generated if leave it blank) of your Tag.

![](https://fluentcrm.com/wp-content/uploads/2021/04/Tags-FluentCRM.png)

You can assign a single contact to multiple Lists and Tags.

## Dynamic Segments

FluentCRM audience has a lot of data about the contacts, for example their signup date, how they are added where they are from, their signup source, and how they are interacting with your emails, and e-commerce data such as order quantity, revenue from the contact, and products ordered. Create **Dynamic Segments** using these data and send targeted marketing campaigns. Dynamic Segments is very handy to filter and divide similar contacts for a meaningful purpose.

To create **Dynamic Segments**go to  **Contacts ➜  Segments**. Now click on “**Create Custom Segment**” to add a new Dynamic Segment that will provide a few options. There will be a built-in Dynamic Segment available named **WordPress Users** to identify WordPress Users later. Adding more integrations like Woocommerce will also add more Dynamic Segments such as **WooCommerce Customers** based on their Users Lists.

![dynamic segments fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/Dynamic-Segments-FluentCRM.png)

Please provide a descriptive title name to the Custom Segment. It is shown on internal pages only. Now you’ll need to set **conditions** to filter contacts based on the information available inside **FluentCRM**. You can use the [Advanced Filter](https://fluentcrm.com/docs/advanced-filter/) feature to learn deeply about such data filtering to segment the contacts.

![new dynamic segment fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/New-Dynamic-Segment-FluentCRM.png)

If you do not put any conditions, all of your contacts available in the FluentCRM will be selected for the Dynamic Segment.

Once you are done with the **Data Selection** and **Conditions**please click on **Create Segment** button on the bottom left to preview the contacts based on your filtering. And to finally create**and save** this **Dynamic Segment** please click on the **Create Custom Segment button from the**bottom right corner.

That’s all about segmenting contacts in the FLuentCRM. Especially Dynamic Segments is really a powerful feature that helps select the users dynamically. To utilize this feature and get the most out of it please check the [Advanced Filtering](https://fluentcrm.com/docs/advanced-filter/) guide to put conditions in Dynamic Segmentation.

---

## Export Contacts from FluentCRM

**Source:** [https://fluentcrm.com/docs/export-contacts-from-fluentcrm/](https://fluentcrm.com/docs/export-contacts-from-fluentcrm/)

It is an essential feature of any platform that imports and works with data. FluentCRM also provides easy and customizable export options to Export Contacts along with their data from the dashboard.

> This feature is only available in the Pro Version.

To Export All Contacts please go to the **FluentCRM Dashboard** ➜ **All Contacts**and then click on the **Export**button from the top right corner of the dashboard.

![crm contacts options](https://fluentcrm.com/wp-content/uploads/2022/08/crm_contacts_options.png)

This will open a modal with numerous data fields to choose from and you will be able to select as many fields you want to include in your export file. The custom contact fields will be available based on your settings in the [Custom Contact Fields.](https://fluentcrm.com/docs/global-custom-contact-fields/) There will be other categories of fields depending on the integrations like Woocommerce, LearnDash, EDD, etc.

![contacts fluentcrm 16](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-16.png)

- **Contact Export Limit:** If you want to export a certain amount of contacts, you need to give the value here. If you want to export all contacts, you can leave it blank.
- **Contact Export Offset:**  If you want to exclude several contacts, you can give the amount here. If you provide 5 as the value then 5 contacts from your contact list (From the top in your All Contacts List) will be excluded while exporting.

After providing/selecting all the values, just click on the **Export Contacts** button and your contacts will be exported into a CSV (**Comma Separated Values**) file.

The above method will be applied to all of the contacts of the FluentCRM. Now if you want to export only specific contacts from specific criteria then please follow the [Basic Filtering](https://fluentcrm.com/docs/contacts-dashboard/#Basic-Filters-Pagination) and **Advanced Filtering**guidelines and filter them out first, then you can follow the exact above method to export the filtered contacts into a CSV file.

---

## Integrated Contact Overview

**Source:** [https://fluentcrm.com/docs/additional-integrated-contact-overview/](https://fluentcrm.com/docs/additional-integrated-contact-overview/)

## Purchase History (WooCommerce)

This tab is activated when the WooCommerce plugin is installed & activated on the website.

![Purchase History Woocommerce ](https://fluentcrm.com/wp-content/uploads/2023/08/untitled.png)

### WooCommerce Purchase History

This section contains the **Order ID**, **Date of purchase**, **Status**of the order, **Total value, Item Count for the Order, and**an **Actions**Column containing the Order Details view.

### Customer Summary

This section records and calculates the commerce values like orders, purchase dates, etc. The available fields are:

- **Customer Since:** The starting date when the customer was added to Woocommerce through the order or purchase.
- **Last Order:** The last date when the customer purchased something.
- **Order Count (paid):** The number of Orders. Besides, it will also show a percentage growth rate comparing the last 30 days.
- Lifetime Value: The total value of Orders in the default currency. Besides, it will also show a growth rate in percentage comparing the last 30 days.
- **AOV:** The average Value of Orders in the default currency. Besides, it will also show a growth rate in percentage comparing the last 30 days.

### Purchased Products

This section will let you see the Completed **Purchased Products Name**, **Total Order Value**in the default currency, and the **Date**for the Order when this order was completed.

## Purchase History (Paymattic)

This tab is activated when the **Paymattic**plugin is installed & activated on the website.

**Purchase History** from **Paymattic**will be shown here.

![shajeeb joy contact fluentcrm 1](https://fluentcrm.com/wp-content/uploads/2023/08/shajeeb-joy-Contact-FluentCRM-1.png)

### Paymattic Purchase History

This section contains the **Id**, **Form Title**, **Payment Total**, **Payment Status**, **Payment Method**, **Submitted At**& **Action**Column containing the Order Details viewing.

- **Id**: It displays the **Entry number** of the Paymattic form.
- **Payment Total:**It shows the total amount of payment against the Paymattic Form.
- **Payment Status:** It shows whether your payment is paid, pending, or not.
- **Payment Method:** It displays the payment method you are using, such as Paypal, Stripe, etc, for the Paymattic Form.
- **Submitted At:** it shows that specific date with time  When the Paymattic Form has been submitted,
- **Action:** In the **Action** column, click on **View Submission** & here you will get the full payment details of your payment form.

### Paymattic Payment Details

The **View Submission** link will open the Payment Entry details like below from the **Paymattic** Dashboard:

![entry 5 paymattic](https://fluentcrm.com/wp-content/uploads/2023/08/Entry-5-Paymattic.png)

To know about Payment Details of the Paymattic Form, click **here**.

---

## Contact Overview

**Source:** [https://fluentcrm.com/docs/contact-overview/](https://fluentcrm.com/docs/contact-overview/)

FluentCRM is a Customer Relationship Management and Email Marketing & Automation tool that manages customer contacts, and markets through email and also runs automation based on conditions & activities. In this documentation, we will see and learn how FluentCRM organizes contact data and some actions that are possible from the contact details page.

## Individual Contact Overview

![arabi ahamed contact fluentcrm 1](https://fluentcrm.com/wp-content/uploads/2023/08/Arabi-Ahamed-Contact-FluentCRM-1.png)

### At a glance

This section contains a quick overview of the contact and available details:

1. **Profile Image:** Profile Images come from Gravatar. If no images are available for the user with the email address then a default placeholder image will be shown.
2. **Contact Type:** 2 types of contacts are Customer and Lead. Contacts that come from e-commerce sources are the type of Customers and Leads are those that come from other sources like form submissions.
3. **Subscription Status:** There are 5 types of contact subscriptions and more details are in [FluentCRM Contact Status](https://fluentcrm.com/docs/fluentcrm-contacts-status/).
4. **Activity:** This field shows you when the contact was added in the FluentCRM and the last activity of the email opened or clicked.
5. **Email Stats:** This section contains the number of emails sent to the contact, the ratio of the unique email opens out of the total emails sent in percentage, and the unique email clicks out of the total emails sent in percentage.

### Lists & Tags

This section contains details regarding the Lists and Tags that are assigned to the contact. You can also add or remove the contact from a single or multiple Lists and tags by clicking on the **+** (Plus) icon. Additionally, you can also remove the assigned List or Lists & Tag or Tags by clicking on the **x** (Cross) icon as well.

### Customer Summary

This section is dependent on Woocommercea and provides a quick summary of the commerce values. The available fields are:

- **Customer Since:** The starting date when the customer was added to Woocommerce through the order or purchase.
- **Last Order:** The last date when the customer purchased something.
- **Order Count (paid):** The number of Orders. Besides, it will also show a growth rate in percentage comparing between the last 30 days.
- **Lifetime Value:** The total value of Orders in the default currency. Besides, it will also show a growth rate in percentage comparing between the last 30 days.
- **AOV:** The average Value of Orders in the default currency. Besides, it will also show a growth rate in percentage comparing between the last 30 days.

### Information Groups

This section contains information groups as tabs. Plugins and integrations like Woocommerce, LearnDash LMS, etc. will add more tabs regarding their information. Default tabs are:

1. **Overview:** Contains basic contact information, address details, and customer profile data. More details are available in the [Overview Section](#Individual-Contact-Overview).
2. **Emails:** Information regarding emails sent from Email campaigns, Sequences, and Automation. Detailed in [Emails Section](#Emails).
3. **Form Submissions:** Form Submissions especially Fluent Forms data are present here. Detailed in [Forms Section.](#Form-Submissions)
4. **Notes & Activities:** Additional miscellaneous information is detailed in [Notes & Activities.](#Notes-and-Activities)

### Basic Information

This section contains the very basic information of contact and the available fields are:

1. **Prefix:**Mr, Mrs, and Ms depending on the person’s designation.
2. **First Name:** First Name of the contact.
3. **Last Name:** Last Name of the contact.
4. **Email Address:** Email Address of the contact. This is false the minimum required field to add a contact in the FleuntCRM.
5. **Phone/ Mobile:** Phone or Mobile Number that may contain or not contain the country code depending on how you added the information.
6. **Date of Birth:** Date of Birth in YYY-MM-DD format.

### Address Information

This section contains the address information of the contact and the available fields are:

1. **Address Line 1:** The primary address field and also the minimum or default field to store the address information of the contact.
2. **Address Line 2:** Alternative field to store additional address information.
3. **City:** City of the contact.
4. **State:** State of the contact.
5. **Zip Code:** Postal Code information of the contact.
6. **Country:** Country of the contact.

### Custom Profile Data

This section contains the additional custom information of the contact and the available fields are dependent on the available custom fields added to FluentCRM as guided in the [Custom Fields Settings.](https://fluentcrm.com/docs/global-custom-contact-fields/)

## Emails

This section contains **emails from different campaigns and automation**, contacts added to **Email Sequences,** and **automation**.

![email contact fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/Email-Contact-FluentCRM.png)

### Sending a Test Email

If you want to send a test email to the contact you can do so by Clicking on the **Send Email** button located at the top right corner in the Emails overview tab. **Sending Test**or any other emails will be only available for users with **Subscribed Contact Status**. Once you click on the button a modal will appear asking you to input the **Subject Line**, **Email Pre-Header**, and a **Block Editor**to customize the email content and **Send Email**button to send the **Test Email**.

![test email contact fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/Test-Email-Contact-FluentCRM.png)

### Emails from different campaigns and automation

This section contains **emails from different campaigns and automation**. You will see the **Subject Lines**, **Date**of the emails sent, **Status**, and a **Preview**column where you will be able to view the email content along with links in the email & **resend** the email again as the below screenshot.

![email preview contact fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/Email-preview-Contact-FluentCRM.png)

### Email Sequences

This section contains **emails from email sequences**. You will see the **Sequence Name**, **Started at**, **Next Email**, **Status**, and a **Delete Button**to delete the contact from the sequence as the below screenshot.

![a sojib contact fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/A-Sojib-Contact-FluentCRM.png)

#### Manually Add contacts to an Email Sequence

You can also manually add the contact to an email sequence by clicking on the **Add Sequence**button and then selecting the target Email Sequence from the dropdown as in the below screenshot.

![a sojib contactfluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/A-Sojib-ContactFluentCRM.png)

### Automation

This section contains **emails from all automation**that the contact was added to. You will see the **Automation Name**, **Started at**, **Next Step**, **Status**, and a **Delete Button**to delete the contact from the automation.

#### Manually Add contacts to an Automation

You can also manually add the contact to automation by clicking on the **Add Automation**button and then selecting the target Automation from the dropdown as in the below screenshot.

![Automation contact fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/arabi-ah-Contact-FluentCRM.png)

## Form Submissions

FluentCRM has another great feature to capture leads and other data from users by another great plugin called Fluent Forms which is really an advanced and free plugin to use for most cases. The Form Submissions tab will let you see all the form submissions for the Fluent Forms that are connected to FluentCRM and received data from this contact.

![form submission shajeeb joy contact fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/Form-Submission-shajeeb-joy-Contact-FluentCRM.png)

This section is similar to the **Fluent Forms Entries**Dashboard as the below screenshot.

![entries 1 ‹ demosite — wordpress](https://fluentcrm.com/wp-content/uploads/2023/08/Entries-1-‹-Demosite-—-WordPress.png)

You will be able to see the **Entry ID**, **Form Title**, **Status**, **Form Submission Data with Time**, and an **Action link**to see the full entry inside the Fluent Forms plugin. The **View Submission** link will open up a new page with all the information submitted with the Form as the below screenshot.

![entry 2 fluentform](https://fluentcrm.com/wp-content/uploads/2023/08/Entry-2-Fluentform.png)

## Notes & Activities

FluentCRM also provides a feature to add custom notes for contacts. There are **15 types of Contact Notes** available to be added.

![notes fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/Notes-FluentCRM.png)

### Adding a Contact Note

To add a new custom note please click on the **Add New**button and you will see the options below to select the note **Type**, **Date Time**(keeping blank will record the current time), **Title**for the note, and **Description**as an editor box to add your **Contact Note**. Once the inputs are done click on the **Create**button to finish adding the Note.

![notes fluentcrm 1](https://fluentcrm.com/wp-content/uploads/2023/08/Notes-FluentCRM-1.png)

### Manage Contact Notes

When a Contact Note is added you will see them listed under this Section. You will be able to Edit with the delete(recycle) button and also Edit with the edit button as well.

To export all the contact notes please click on the **Download Button**at the top right corner of the **Notes & Activities**section.

---

## Add and Manage All Contacts

**Source:** [https://fluentcrm.com/docs/manage-contacts/](https://fluentcrm.com/docs/manage-contacts/)

[FluentCRM](https://fluentcrm.com/) provides an excellent [Contacts Dashboard](https://fluentcrm.com/docs/contacts-dashboard/#Contacts-Dashboard) that represents all the necessary summaries of the activities. This article will guide you through the process of **Adding a new contact man**ually and **Managing contacts in bulk** in detail.

## Adding New Contacts

To learn how to add a new contact manually, follow the steps with the screenshots below –

First, go to **All Contacts**from the **Contacts** section of **Fleunt CRM Navbar**.

![All contacts option from contacts section](https://fluentcrm.com/wp-content/uploads/2022/08/All-contacts-option-from-Contacts-section-scaled.webp)

Now, click on the **+ Add Contact**button on the top right corner of the dashboard to add a new contact manually.

> Here you can see the full All Contacts Dashboard. To learn more detail use about it, read this Docmentation.

![+ add contacts button](https://fluentcrm.com/wp-content/uploads/2022/08/Add-Contacts-button-scaled.webp)

Then, a **modal** will appear on the right-hand side with a **few contact fields**for storing information about the contact. These are:

- **Basic Info:** Here, you will get all these fields (Prefix, First Name, Last Name, Email, Phone, Date of Birth, and Company/business) to input the basic information about your contacts.
- **Address Info:** Here, you will get all these fields (Address Line 1, Address Line 2, City, State, Postal Code, Country) to input the address info about your contacts.
- **Add** **Custom Data:** Here you will get all the custom contact fields you have in your FluentCRM plugin to add a few extra customized information about your contacts if needed. To learn how to add custom contact fields in FluentCRM, read this [Documentation](https://fluentcrm.com/docs/global-custom-contact-fields/).
- **Identifiers:** Here you will get all these fields (Lists, Tags, and Status) to sort your contacts by including them in a single or multiple lists, putting a tag, and selecting their [subscription status](https://fluentcrm.com/docs/fluentcrm-contacts-status/).

Once you are done providing and selecting all the necessary information, click on the **Create Contact** or **Create & Add Another** button and your contact will be added.

![add new contact page](https://fluentcrm.com/wp-content/uploads/2022/08/Add-new-contact-page.webp)

## Managing Contacts In Single or Bulk

FluentCRM also provides an easy way to apply various actions against single or multiple contacts upon selection. To learn how to **manage a single contact or multiple contacts in bulk**, follow the steps with the screenshots below –

First, **select** the **desired contact/s** you want to manage, a **Select Action** dropdown field will appear click on it and you will get all the **Actions** for managing your contact/s.

**All the available Actions for Managing your Contact/s mentioned below are briefly explained below:**

- **Add to Tags:** Attach a Tag or multiple Tags to the contact/s.
- **Add to Lists:** Assign a List or multiple Lists to the contact/s.
- **Remove From Tags:** Remove the contact/s from a Tag or multiple Tags.
- **Remove From Lists:** Remove the contact/s from a List or multiple Lists.
- **Change Contact Status:**Change the contact subscription status for contact/s.
- **Change Contact Type**: Change the type (e.g., lead, customer, etc.) for the contact/s.
- **Add to Email Sequence:**Add the contact/s to an Email Sequence.
- **Add to Automation Funnel:**Add the contact/s to an Automation Funnel.
- **Add to Company**: Add the contact/s to a selected company.
- **Remove from Company**: Remove the contact/s from any company.
- **Send Double Opt-in Confirmation:**Once you select contact/s, can send a Double Opt-in Confirmation Email to the pending status contact/s.
- **Delete Contact:**You can also delete a single contact or multiple contacts based on your selection.

> Additionally, you can also Import or Export your FluentCRM contact/s based on your selection.

![select bulk action dropdown field](https://fluentcrm.com/wp-content/uploads/2022/08/Select-Bulk-Action-dropdown-field-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Contacts Dashboard

**Source:** [https://fluentcrm.com/docs/contacts-dashboard/](https://fluentcrm.com/docs/contacts-dashboard/)

## Contacts Dashboard

FluentCRM provides an excellent contacts dashboard that represents all the necessary summaries of the activities. Total Contacts Paginated, Filter by Tags & Lists & Status, Advanced Filter with numerous data, Searchbox, Import & Export of the contacts, Bulk Actions on Contact Selection, and many more on the front page or the Contacts Dashboard.

![contacts fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM.png)

The key points are discussed below:

### 1. Filter By Lists:

This is a dropdown option where you will see all the Lists you have created and if you want you can filter by each or multiple Lists depending on your selection. More on this is discussed in the [Basic Filters & Pagination](#Basic-Filters-Pagination) below.

### 2. Filter By Tags:

This is another dropdown option where you will see all the Tags you have created and if you want you can filter by each or multiple Tags depending on your selection. More on this is discussed in the [Basic Filters & Pagination](#Basic-Filters-Pagination) below.

### 3. Filter By Statuses:

Similar to Lists & Tags if you want you can filter by each or multiple Contact Status depending on your selection. More on this is discussed in the [Basic Filters & Pagination](#Basic-Filters-Pagination) below.

### 4. Add Contact:

FluentCRM provides an easy way to add a new contact with a popup letting you add contact details. More on Adding a new Contact is discussed in [Add New Contact.](https://fluentcrm.com/docs/manage-contacts/#Add-New-Contact)

### 5. Import:

With this option, you can import contacts from different sources like CSV files, WordPress Users, 3rd Party sources like Active Campaign, etc. More on Importing Contacts are discussed in [Import Contacts](https://fluentcrm.com/docs/manage-contacts/#Import-Contacts).

### 6. Export:

To Export all or specific contacts by limits along with data properties selected you can use this FluentCRM option. More on exporting contacts are discussed in [Export Contacts.](https://fluentcrm.com/docs/manage-contacts/#Export-Contacts)

### 7. Advanced Filter:

This is a very advanced filter that provides numerous data types and also puts logical conditions like AND & OR to filter your contacts based on advanced data conditions. More on Advanced Filter are discussed in [Advanced Filter.](https://fluentcrm.com/docs/advanced-filter/)

### 8. Searchbox:

A search box where you will be able to search for contacts by email address or name.

### 9. Columns:

Contacts have numerous data fields and you can customize the view according to your needs by selecting the suitable fields as columns beside the contacts to get an overview quickly.

![contacts fluentcrm 1](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-1.png)

## Basic Filters & Pagination

### Filter By Lists, Tags & Statuses

Filter By Lists, Tags, Statuses & Number of contacts is the basic type of filtering.

If you have multiple Lists, for example, a List named Students contains 60 contacts and another List named Teachers contains 10 contacts then you will be able to filter them out by this filter option. You can select only Students to see all 60 contacts. If you want to include Teachers too then you will be able to add teachers to your selection and you will see 70 contacts in total.

The same goes for Tags as well.

You can also filter by any or multiple contact statuses. To know more about status types and what are they please visit [FluentCRM Contact Status.](https://fluentcrm.com/docs/fluentcrm-contacts-status/)

All the above 3 types of filters work as **AND** conditions in conjunction.

![contacts fluentcrm 2](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-2.png)

### Pagination

And contacts listed can be paginated per 10, 20, 50, 80, 100, 120, 150, 200, 250, 300, 400, and 600 contacts per page from the bottom dropdown option as shown in the below screenshot.

![contacts fluentcrm 3](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-3.png)

### Data Columns

#### Primary Columns

By default, the contacts dashboard shows the contact images coming from Gravatar, Email addresses, Names, Lists, Tags, and Status Columns. You can additionally choose to see more or fewer columns as you wish to see. The available selectable primary contact data columns are:

1. Contact Type
2. Tags
3. Lists
4. Source
5. Phone
6. Country
7. Created At
8. Last Changed Date
9. Last Activity

![contacts fluentcrm 4](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-4.png)

#### Integrations & Custom Fields

These columns are custom and plugin integration dependent. Wocommerce, LearnDash, or any other plugins will activate a few extra columns upon their activation in integration into the website. Custom Fields can empty or as many as you will add as guided in [Custom Fields.](https://fluentcrm.com/docs/global-custom-contact-fields/) The available selectable custom additional contact data columns are:

**Woocommerce:**

1. Lifetime Value
2. Purchase Count
3. Customer Since
4. Last Purchase

**Custom Fields:** Dependent on the available Custom Fields in the FluentCRM.

![contacts fluentcrm 5](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-5.png)

That’s all about an overview of the Contacts Dashboard.

---

## Advanced Filter

**Source:** [https://fluentcrm.com/docs/advanced-filter/](https://fluentcrm.com/docs/advanced-filter/)

As we have seen and learned about the [Contacts Dashboard](https://fluentcrm.com/docs/contacts-dashboard/) and also the [General & Dynamic Segmentation](https://fluentcrm.com/docs/segment-your-audience/) of the FluentCRM contacts, we have noticed that there is an Advanced Filtering option available in the FluentCRM. This option offers powerful filtering by various contact data that are either static or dynamically changed upon Contact and FluentCRM activities. In this tutorial, we will evaluate and demonstrate Advanced Filtering to learn and assimilate this feature. The **No. 7** from the introduction to **Contacts Dashboard** we have seen the Advanced Filter option. **Toggling On** this feature will activate the **Advanced Filtering** and we will see more options similar to the screenshot below.

![contacts fluentcrm 7](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-7.png)

The default options will let you **Add Data Fields**as **AND**& **OR**conditions as you wish to set, **Filter** them if you are confirmed, **Delete Data Fileds** by Delete Button(Recycle bin icon), or **Clear Filters** as well. Now Click on the **+ Add**button to get started. This will provide a few groups of data and we will be exploring them one by one below.

## General Properties

There are 3 types of general properties. 2 of them are contact properties and 1 other property is based on the activities inside the FluentCRM.

### Contact

![contacts fluentcrm 1 1](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-1-1.png)

The available data properties and their short descriptions are:

1. **General Properties:**This is a general searchable filter that will let you filter by **Email**, **First Name**, **Last Name**, **Address Line 1**& **2**, **Postal Code**, **City**, **State**, **Country**, **Phone**, and **Status**with this single parameter.
2. **First Name:** First Name of the contact.
3. **Last Name:** Last Name of the contact.
4. **Email Address:** Email Address of the contact. This is false the minimum required field to add a contact in the FleuntCRM.
5. **Address Line 1:** The primary address field and also the minimum or default field to store the address information of the contact.
6. **Address Line 2:** Alternative field to store additional address information.
7. **City:** City of the contact.
8. **State:** State of the contact.
9. **Postal Code:** Postal Code information of the contact.
10. **Country:** Country of the contact.
11. **Phone/ Mobile:** Phone or Mobile Number that may contain or not contain the country code depending on how you added the information.
12. **WP User ID:** The WordPress User ID of the contact if the contact is present in the WordPress user list.
13. **Name Prefix(Title):** Mr, Mrs, and Ms depending on the person’s designation.
14. **Source:**The source of the contact like Woocommerce, Fluent Forms, or other sources. You can also update or add source information while [importing the user](https://fluentcrm.com/docs/import-contacts-into-fluentcrm/#Importing-Contacts-from-CSV-File). If you are using a [CSV file to import](https://fluentcrm.com/docs/import-contacts-into-fluentcrm/#Importing-Contacts-from-CSV-File)please add a source column in the CSV file.
15. **Last Activity:** The Last Activity field in FluentCRM provides a consolidated view of WordPress user logins and interactions with email campaigns, such as email click activities.
16. **Created At:** The date and time when the user was created in the FluentCRM.

### Contact Segment

![contacts fluentcrm 2 1](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-2-1.png)

The available data properties and their short descriptions are:

1. **Status:** [Subscription Status](https://fluentcrm.com/docs/fluentcrm-contacts-status/) of the contact.
2. **Type:** The contact type of the user is either **Customer** or **Lead**.
3. **Tags:**Tags that are available in the FluentCRM.
4. **Lists:**Lists that are available in the FluentCRM.

### Contact Activities

![contacts fluentcrm 3 1](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-3-1.png)

The available data properties and their short descriptions are:

1. **Last Email Sent:**The last date of the email sent to contacts.
2. **Last Email Open:**The last date when the contacts opened any email sent to them.
3. **Last Email Clicked:**The last date when the contacts clicked any links from emails sent to them.

## Custom Field Properties

![contacts fluentcrm 4 1](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-4-1.png)

This is a user-defined option that is configured in [Custom Contact Fields Settings](https://fluentcrm.com/docs/global-custom-contact-fields/). All the available custom contact fields will be listed in this option to let you apply to filter based on the custom contact field properties.

## Integrated Properties

FluentCRM integrates with popular WordPress plugins like Woocommerce, LearnDash, LifterLMS, Easy Digital Downloads, etc. Plugin Specific Data Properties are discussed below:

### Woocommerce

![contacts fluentcrm](https://fluentcrm.com/wp-content/uploads/2022/01/Contacts-FluentCRM-scaled.webp)

The available data properties and their short descriptions are:

1. **Total Order Count:** Total orders against the customer.
2. **Total Order Value:**Total order value from different orders.
3. **Last Order Date:**The last date when the customer ordered any product.
4. **First Order Date:**The first date when the customer orders any product.
5. **Purchased Products:**All the purchased products against a customer.
6. **Purchased Categories:**All the Product Categories that are assigned to the products and available in the orders for the customer.
7. **Purchased Tags:**Product Tags assigned to purchased products available in the orders against the customer.
8. **Used Coupons:** Any used coupons in the purchased order against the customer.
9. **Purchased Product Variations**: Filter contacts based on their purchased WooCommerce product variations.

### LearnDash

![contacts fluentcrm 8](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-8.png)

The available data properties and their short descriptions are:

1. **Last Enrollment Date:** The last date of enrollment for any courses against the contact.
2. **First Enrollment Date:**The first date of enrollment for any courses against the contact.
3. **Enrollment Courses:**The Courses that are available on the Enrolled List for any contact.
4. **Enrollment Groups:**The Groups that are available on the Enrolled List for any contact.
5. **Enrollment Categories:**The Categories that are available on the Enrolled List for any contact.
6. **Enrollment Tags:**The Tags that are available on the Enrolled List for any contact.

## Filter Conditions

All of the above **Data Properties** can be used to filter out contacts depending on the available data. There are various conditions that can be applied to those available data such as **Equal**, **Does not equal**, **Includes**, **Does not Include**, **Before**, **After**, etc. and they are discussed below:

### Textual Conditions

![contacts fluentcrm 9](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-9.png)

The available conditional properties that can be applied with the filter are:

**Equal:**Give a value, for an item to be displayed in the view, its property value must include the same text that was supplied.

**For example,** if you input “London” then**FluentCRM**will filter the contact or contacts that have or contain “London” against that**Text-based**Contact Field.

**Does not equal:** Give a value, for an item to be displayed in the view, its property value cannot include the precise text that was supplied. There will also be records that have no value for the property.

**For example,** if you input “London” **then FluentCRM**will filter the contact or contacts that don’t contain “London” against that**Text-based**Contact Field.

**Includes:** You’ll see results that correspond to your input and comparable outcomes.

**E.g.:**When you enter “Regular,” all the results that match the word or a particular letter in the term will be shown.

**Does not include:** Doesn’t include means that the word or letter you type will not be shown.

**E.g.:** When you enter “Regular,” neither the matching results nor those that include a letter from the word “Regular” will be displayed.

**Empty:**Empty is for an option that shows the empty field results. **For example,** Your contact text information contains an empty area that will display the outcome of the selected contact or contacts.
**Not Empty:**Not empty will show the result of that field is not empty. **E.g.:** not empty will display the information from the fields that are filled with data.

### Date-Based Conditions

![contacts fluentcrm 1 2](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-1-2.png)

The available conditional properties that can be applied with the filter are:

**Before:** It will filter to be displayed on the previous days of your given date. **E.g.:** When you enter the date 20-Feb-2023, FluentCRM will provide the results of counting the days backward.

**After:**The next days of the specified date will be displayed after filtering.

**In the date:** In this filter, only the matches of your specified day will be shown.

**Before days:** Through this filter, you can see the results before the specified number of days. **E.g.:** FluentCRM will display the outcome of any contacts you made earlier than seven days ago.

**Within days:** This filter will show results for the specified number of days you want to see.

### Choice-Based Conditions

![contacts fluentcrm 2 ](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-2-2.png)

The available conditional properties that can be applied with the filter are:

**Includes in:** This filter will display your inputs as choices, from which you must choose to filter your results.
**Not includes in:** Doesn’t include will not show the result of the option you selected it will show the other results you input in the field.

### Numeric Conditions

![contacts fluentcrm ](https://fluentcrm.com/wp-content/uploads/2023/08/Contacts-FluentCRM-3-2.png)

The available conditional properties that can be applied with the filter are:

**Greater than:** Showing results for numbers more significant than the number you provided.**E.g.:** You have been given the number five thousand now it will show a larger number than five thousand.

**Less than:**Showing results for numbers less than the number you provided. **E.g.:**You have been given the number five thousand now it will show a smaller number than five thousand.

**Equal:** Equal will show you the outcome which is in the same number you have provided.**E.g.:**if****you gave the number input five thousand the outcome only shows the contact or contacts that match this number.

**Does not equal:** Doesn’t equal will display contacts that differ from the number you entered.

**Empty:** Empty is for an option that shows the empty field results.

**Not empty:**Not empty will show the result that the field is not empty.

### Contact Segment – Tag

![contacts fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/03/Contacts-FluentCRM.png)

The available conditional properties that can be applied with the filter are:

**Include:** It will show you the contacts that match your input tags. **For example,** if you have selected the tag “Shirt” it will show you the results of contacts that have the tag “Shirt”.

**Does not Include (In any):**Doesn’t show the result on the tag you have included on your field. **For example,** if you have selected the tag “Student” it will show you the results of contacts that don’t have the tag “Student”.

**Includes of all:**will display the contacts for you according to the tag you entered. **For example,**if you input two tags like “Shirt” and “T-shirt” you will see the contacts that have these two tags.
**Includes none of (Match all):**Includes only the tags you have given and will not show in the result.

### Contact Activities

![contacts fluentcrm ](https://fluentcrm.com/wp-content/uploads/2023/03/Contacts-FluentCRM-2-1.png)

The available conditional properties that can be applied with the filter are:

**Link Clicked:**The link clicked will show the result of those who clicked the link you have been sent with your email.

**Did not clicks:**This filter will show the contacts who didn’t click the link of your email.

**Opened:**It will show the contacts who opened your email.

**Did not open yet:**It will show the contacts who still don’t open your email.

**In (Email Sent):**Show the result of contacts to whom you sent the emails.
**Not in (Regardless of status):**Shows the result of contact or contacts you didn’t send emails to.

### WooCommerce Conditions

The WooCommerce advance filter will only show when the WooCommerce plugin will be activated.

![contacts fluentcrm ](https://fluentcrm.com/wp-content/uploads/2023/03/Contacts-FluentCRM-1.png)

**Include:** It will show you the contacts that match your input tags. **For example,** if you have selected the tag “T-Shirt” it will show you the results of contacts that have the tag “T-Shirt”.

**Does not Include(In any):**Doesn’t show the result on the tag you have included on your field. **For example,** if you have selected the tag “Hoodie” it will show you the results of contacts that don’t have the tag “Hoodie”.

**Includes of all:**will display the contacts for you according to the tag you entered. **For example,**if you input two tags like “Cap” and “T-Shirt” you will see the contacts that have these two tags.

**Includes none of (Match all):**Includes only the tags you have given and will not show in the result.

**Greater than:** Showing results for numbers greater than the number you provided.**E.g.:** You have been given the number five thousand now it will show a larger number than five thousand.

**Less than:**Showing results for numbers less than the number you provided. **E.g.:**You have been given the number five thousand now it will show a smaller number than five thousand.

**Equal:** Equal will show you the outcome which is in the same number you have provided.**E.g.:**if****you gave the number input five thousand the outcome only shows the contact or contacts that match this number.

**Does not equal:** Doesn’t equal will display contacts that differ from the number you entered.

**Before:** It will filter to be displayed on the previous days of your given date. **E.g.:** When you enter the date 05-Feb-2023, FluentCRM will provide the results of counting the days backward.

**After:**The next days of the specified date will be displayed after filtering.

**In the date:** In this filter, only the matches of your specified day will be shown.

**Before days:** Through this filter, you can see the results before the specified number of days. **E.g.:** FluentCRM will display the outcome of any contacts you made earlier than seven days ago.

**Within days:** This filter will show results for the specified number of days you want to see.

**Yes:**This will show the contacts who are customers of Woocommerce.

**No:**This will show the contacts who are not customers of Woocommerce.

### Contact Activities – Automation Activities

**Status Complete:**Contacts whose automation has been finished and who have received emails will be filtered by the status complete.

**Status Active:**This will show you the result of contacts who are subscribed contacts and under the Active automation

**Status Cancelled:**It will show the result of the manually canceled automation contacts.

**Status waiting:**The contacts who aren’t subscribers yet but are under automation.

**In ( Regardless of status):**In this filter, you will see the contacts of automation.

**Not in (Regardless of status):**With this filter, you can find out the contacts who aren’t in the automation.

### Activities – Email Sequence

**Status Completed:**Status Complete will filter the contacts of the completed email sequence and the email that has been sent to them.

**Status Active:**This will only show the active contacts under this email sequence.

**Status Cancelled:**It will show you the contacts who are not in the email sequence.

**In (Regardless of status):**Will show the contacts who were in an email sequence.

**Not in (Regardless of status):**Will show the contact or contacts who aren’t in the email sequence.

## Example Usage

The same exact filtering method can also be applied in the Email Campaign Setup as well as the below screenshot. Below is an example of using 3 different data and using **AND** with **OR** condition to demonstrate how flexible the advanced filtering of FluentCRM.

![crm campaign subscribers advanced filter](https://fluentcrm.com/wp-content/uploads/2022/01/crm_campaign_subscribers_advanced_filter.png)

---

