# Global Settings

*Category from FluentCRM documentation*

---

## Abandoned Cart Settings

**Source:** [https://fluentcrm.com/docs/abandoned-cart-settings/](https://fluentcrm.com/docs/abandoned-cart-settings/)

With FluentCRM, you can automate the process of managing WooCommerce product [abandoned carts](https://fluentcrm.com/what-is-abandoned-cart/). This article will guide you through the settings for the Abandoned Cart feature. To use this feature, ensure that WooCommerce is installed on your site.

To access the Abandoned Cart settings, follow these steps:

Go to FluentCRM and click on **Settings** from the navbar. In the left sidebar, select **Abandoned Cart Settings**.

To enable the Abandoned Cart feature, check the box labeled **Enable Abandoned Cart Tracking for WooCommerce**.

![abandon cart settings fluentcrm 1](https://fluentcrm.com/wp-content/uploads/2024/08/Abandon-Cart-Settings-FluentCRM-1-scaled.webp)

## Abandoned Cart Settings

In the Abandoned Cart Settings you will get some options for the Abandoned Automation.

**Cart Abandoned Cut-off Time:** Cart Abandoned Cut-off Time refers to the specific period after which a shopping cart is considered abandoned if the customer has not completed the purchase.

**Mark as Lost After:**In abandoned cart this setting refers to the duration after which an abandoned cart is considered lost if the customer has not completed the purchase within that time frame.

**Cool-off Period:**The Cool-off period for abandoned cart tracking defines how many days customers who have made a purchase will be excluded from abandoned cart follow-ups. This prevents them from receiving such emails for the specified number of days after their purchase.

**Status for New Contacts:** In the FluentCRM plugin’s abandoned settings, Status for New Contacts refers to the default status assigned to new contacts who are added to your CRM system when they abandon a cart. This status helps categorize and manage these contacts for follow-up and marketing activities.

![abandon cart settings fluentcrm 2](https://fluentcrm.com/wp-content/uploads/2024/08/Abandon-Cart-Settings-FluentCRM-2-scaled.webp)

The option **Mark Cart as Recovered when WooCommerce Order Status Changes to***Pending Payment, On hold, Processing, Completed,*and*Draft* specifies the conditions under which an abandoned cart will be considered recovered.

This means that when the status of an order in WooCommerce changes to any of the listed statuses (Pending Payment, On hold, Processing, Completed, or Draft), FluentCRM will mark the previously abandoned cart as recovered. This helps in tracking successful recoveries and stops further recovery actions for that cart.

![abandon cart settings fluentcrm 3](https://fluentcrm.com/wp-content/uploads/2024/08/Abandon-Cart-Settings-FluentCRM-3.webp)

The **GDPR Consent** option ensures compliance with GDPR by informing customers that their email and cart data will be saved and used to send abandoned cart reminders. This helps maintain transparency and obtain consent for data usage. Also, you can set a GDPR consent message for the users from here.

![abandon cart settings fluentcrm 4](https://fluentcrm.com/wp-content/uploads/2024/08/Abandon-Cart-Settings-FluentCRM-4.webp)

**Disable Tracking for User Roles** allows you to exclude certain user roles from being tracked for abandoned cart activities. This means that users with specified roles (e.g., administrators, editors) will not have their cart actions monitored or recorded for abandoned cart purposes.

![abandon cart settings fluentcrm](https://fluentcrm.com/wp-content/uploads/2024/08/Abandon-Cart-Settings-FluentCRM.webp)

**Contact Tagging – Cart Abandoned** refers to the process of automatically assigning a specific tag & list to contacts who have abandoned their carts. This tagging helps in organizing and segmenting contacts for targeted follow-up actions and marketing campaigns.

![abandon cart settings fluentcrm 6](https://fluentcrm.com/wp-content/uploads/2024/08/Abandon-Cart-Settings-FluentCRM-6.webp)

Click the **Save Settings** button to apply all the changes you’ve made.

> The Abandoned Cart feature works with the WooCommerce Classic Cart.

If you have any questions about the Abandoned Cart settings, please feel free to [contact us](https://wpmanageninja.com/support-tickets/).

---

## Advanced Features Settings

**Source:** [https://fluentcrm.com/docs/advanced-features-settings/](https://fluentcrm.com/docs/advanced-features-settings/)

[FluentCRM](https://fluentcrm.com/) offers another **Advanced Features Configuration** under the **Global Settings** tab where you will find different advanced settings that you can **enable** or **disable** anytime as per your needs. This article will guide you through the process of using this Advanced Features Configuration.

## Advanced Features Configuration

To learn how to use **Advanced Feature Configuration**, follow the steps with screenshots below accordingly **–**

First, go to **Settings**from the top right corner of the**FluentCRM Navbar** and click the **Advanced Feature Config** settings option.

You will now get the advanced settings options inside the **Advanced Features Settings** page. These are:

- Quick Contact Navigation
- Campaign Archives
- Date & Time Format
- Navigation
- Company Module
- Disable AI?
- Multi-Threading Email Sending
- System Log

![advanced features configuration settings fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/03/Advanced-Features-Configuration-Settings-FluentCRM-scaled.webp)

**A detailed explanation of the Settings mentioned above is given below –**

### Quick Contact Navigation

It’s a little navigation bar at the bottom of your contacts. You can make a direct call or mail from this navigation bar. Also, you can go to the next and the previous contacts from here.

To activate it, simply enable the **Quick Contact Navigation** checkbox inside the **Advanced Features Settings** page. 
Then, you must click the **Update Settings** button to save the changes you’ve made.

![quick contact navigation](https://fluentcrm.com/wp-content/uploads/2023/03/Quick-Contact-Navigation.webp)

Here is the **Preview** of **Quick Contact Navigation**.

![preview of quick contact navigation](https://fluentcrm.com/wp-content/uploads/2023/03/Preview-of-Quick-contact-navigation.webp)

### Campaign Archives

The Campaign Archives feature in FluentCRM allows you to display your past email campaigns on any page of your website. This is an excellent way to showcase your newsletters and create an accessible archive for your audience. You can display your campaigns by enabling the global archive settings or by using a flexible shortcode for more specific control.

### Enabling the Global Campaign Archive

To get started with the basic archive functionality, you first need to enable it in the FluentCRM settings.

1. Navigate to your WordPress dashboard, go to **FluentCRM > Settings > Advanced Features**. You can also enable the **Campaign Archives** feature using the **Addons** section from your FluentCRM sidebar.
2. Find the **Enable** **Campaign Archive Frontend Feature** and check the box to enable it.
3. Upon enabling, a popup will appear with a general shortcode and settings.
4. From here, you can configure the global display settings:
- **List the campaigns if the title match the provided keyword:** You can filter campaigns by keywords that appear in the campaign title.
- **Select Campaigns:** Select the campaigns you want to show from the dropdown.
- **Filter by Status:** Choose which types of campaigns you want to display (e.g., Archived, Published).
- **Max Campaigns to list:** Set a limit for how many campaigns will be displayed on the archive page. The maximum is 50.
5. Click the **Update Settings** button to save your changes.

![fluentcrm campaign archive](https://fluentcrm.com/wp-content/uploads/2023/03/FluentCRM-Campaign-archive-scaled.webp)

### Use this shortcode in a page/post to list past campaigns

Use this Shortcode into a Page/Post where you want to show your archived emails. You will see the results on your desired web page or you can preview them to see the result.

![campaign archives](https://fluentcrm.com/wp-content/uploads/2023/03/Campaign-Archives.webp)

Now, **paste** the **Shortcode** into a **Page/Post** where you want to show your archived emails. You will see the results on your desired web page or you can preview them to see the result.

![campaign archives shortcode in a page](https://fluentcrm.com/wp-content/uploads/2023/03/Campaign-Archives-Shortcode-in-a-Page.webp)

### Advanced Campaign Archives with Shortcodes

For more granular control, you can use a powerful shortcode to display specific and multiple campaign archives. This method allows you to override the global settings on a case-by-case basis.

The shortcode format is as follows:

```
[[fluent_crm_campaign_archives ids="1101,5,1100" status="all" search="Summer" limit="10"]]
```

#### Shortcode Parameters:

You can customize the archive display by using the following parameters within the shortcode:

- ids: (Optional) Specify the exact campaign IDs you want to display, separated by commas. If you use this parameter, only the campaigns with these IDs will be shown.
- status: (Optional) Filter the campaigns by their status. If this parameter is omitted, the status from your global settings will be used. Available statuses are:
- all
- draft
- pending
- archived
- incomplete
- purged
- processing
- pending-scheduled
- scheduled
- search: (Optional) Display only the campaigns whose titles match a specific keyword.
- limit: (Optional) Set the maximum number of campaigns to display for this specific archive. The maximum limit is 50.

**Important Note:** If any of the parameters (ids, status, search, or limit) are not included in the shortcode, FluentCRM will automatically use the values you have configured in the global Campaign Archive settings. This allows for a flexible system where you can have a default archive and create custom ones as needed.

### Date & Time Format

This setting allows you to select the date and time format for the CRM plugin according to your needs. There are two formats for FluentCRM to view time in WordPress. These are:

1. **Date Time difference**: It will show your FluentCRM campaign, contact, and other times format like (EG: 1 hour ago)
2. **WordPress Default**: It will show the exact time of your FluentCRM activity. (EG: 5 January 2023, 14:15)

Once you select the desired date and time format, click the **Update Settings** button to save the changes you’ve made.

![date & time format](https://fluentcrm.com/wp-content/uploads/2023/03/Date-Time-Format.webp)

It will show up on your FluentCRM email campaign, contacts, and other places like this.

![preview of date & time format](https://fluentcrm.com/wp-content/uploads/2023/03/Preview-of-Date-Time-format-scaled.webp)

### Navigation

By enabling this option you will get a full Navigation for this CRM plugin in the left sidebar when you will click on the Fluent CRM from the WordPress Admin Panel.

Once you are done, click the **Update Settings** button to save the changes you’ve made.

![navigation](https://fluentcrm.com/wp-content/uploads/2023/03/Navigation.webp)

Here is the **Preview** of the **Navigation** Settings option.

![preview of navigation](https://fluentcrm.com/wp-content/uploads/2023/03/Preview-of-Navigation.webp)

### Company Module

Enabling the Company Module option allows you to add it to your **Contacts** section dropdown of the **Fluent CRM Navbar**. Also, fetch the company logo automatically by providing the website URL of the company.

> You can also enable the Company Module feature through the Addons section from the Fluent CRM Sidebar.To learn the process in detail, click here.

Once you are done, click the **Update Settings** button to save the changes you’ve made.

![company module](https://fluentcrm.com/wp-content/uploads/2023/03/Company-Module.webp)

Here is the **Preview** of added **Company module**into the**Contacts** section dropdown and the **Company Logo** that is fetched automatically through the Website URL.

![preview of company module](https://fluentcrm.com/wp-content/uploads/2023/03/Preview-of-Company-Module-scaled.webp)

### Disable AI?

**Fluent CRM** has an **AI** **Prompts** feature inside the **Email Template** option for only **Image Generation**. You will find this option is already enabled which you can **Disable** anytime by clicking the checkbox.

Once you are done, click the **Update Settings** button to save the changes you’ve made.

![disable ai](https://fluentcrm.com/wp-content/uploads/2023/03/Disable-AI.webp)

Here is the **Preview** of the Image generating AI option which you can disable by clicking the **Disable AI** checkbox.

![preview of disable ai](https://fluentcrm.com/wp-content/uploads/2023/03/Preview-of-Disable-AI-scaled.webp)

### Multi-Threading Email Sending?

This setting option allows you to send the emails in a different process which will also make the sending speed around 2X.

To use this feature, ensure your server meets the requirements mentioned in the screenshot for optimal performance.
Once you are done, click the **Update Settings** button to save the changes you’ve made.

![multi threading email sending](https://fluentcrm.com/wp-content/uploads/2023/03/Multi-threading-email-sending.webp)

### System Log

Enable this option, if you want to add the System Log in your left sidebar under Settings. This System Logs are useful for debugging purposes.

Once you are done, click the **Update Settings** button to save the changes you’ve made.

![system log](https://fluentcrm.com/wp-content/uploads/2023/03/System-Log.webp)

Here is the **Preview** of the **System Logs** settings option.

![preview of system logs](https://fluentcrm.com/wp-content/uploads/2023/03/Preview-of-System-logs.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## FluentCRM Global Settings

**Source:** [https://fluentcrm.com/docs/fluentcrm-global-settings/](https://fluentcrm.com/docs/fluentcrm-global-settings/)

The FluentCRM Global Settings panel within the WordPress admin area is where you can set a variety of global options. To navigate to the global settings panel, click on “FluentCRM” in your WordPress admin sidebar, and choose “Global Settings”. If you do not have a FluentCRM panel in the sidebar of the dashboard, then you will need to install FluentCRM first and make sure it has been activated.

**Settings**:

1. [Business Settings](https://fluentcrm.com/docs/global-business-settings/)
2. [Email Settings](https://fluentcrm.com/docs/global-email-settings/)
3. [General Settings](https://fluentcrm.com/docs/global-general-settings/)
4. [Custom Contact Fields](https://fluentcrm.com/docs/global-custom-contact-fields/)
5. [Smart Links](https://fluentcrm.com/docs/global-smartlinks-settings/)
6. [Integration Settings](https://fluentcrm.com/docs/global-integration-settings/)
7. [Double Opt-in Settings](https://fluentcrm.com/docs/global-double-opt-in-settings/)
8. [Incoming Webhooks](https://fluentcrm.com/docs/global-incoming-webhooks/)
9. [Managers](https://fluentcrm.com/docs/global-managers-settings/)
10. [REST API](https://fluentcrm.com/docs/global-rest-api-settings/)
11. [Tools](https://fluentcrm.com/docs/fluentcrm-tools-settings/)
12. [Compliance](https://fluentcrm.com/docs/global-compliance-settings/)
13. [SMTP/Email Sending Service Settings](https://fluentcrm.com/docs/smtp-bounce-handlers-settings/)

---

## Managers

**Source:** [https://fluentcrm.com/docs/global-managers-settings/](https://fluentcrm.com/docs/global-managers-settings/)

## Prerequisites

Efficient management leads to better economic production which helps in turn to increase the welfare of the Business. Managers alongside the Administrators are responsible to manage the FluentCRM dashboard. In this tutorial, we will learn about Fluent CRM Managers and their permissions.

FluentCRM managers are WordPress users that will get permissions defined by the Administrator of the FluentCRM which is generally the WordPress Administrator. Users with any user role like subscribers can be a Manager of FluentCRM.

First of all, get the user email address for the user to whom you want to allow access or add as a Manager of FluentCRM.

![crm add manger users list 1](https://fluentcrm.com/wp-content/uploads/2022/08/crm_add_manger_users_list-1.png)

## New Manager & Permissions

Now Go to **FluentCRM Dashboard** ➜ **Managers** ➜ **Add New Manager**

![crm add manager](https://fluentcrm.com/wp-content/uploads/2022/07/crm_add_manager.png)

This will open a popup and now input the email address which we collected from the previous step. In the next section, there are a lot of permissions available to be assigned to the user or the new manager.

![crm create manager](https://fluentcrm.com/wp-content/uploads/2022/07/crm_create_manager.png)

The available permissions are:

1. **CRM Dashboard:** Access to FluentCRM dashboard. When any other plugin like Woocommerce is activated, it forces you to log in to Woocommerce My Account only instead of the **/wp-admin/** area for the **Subscriber**user role. This type of access will work without any issues for REST API Management. But if you want the user to log in to the Admin area then you need to escalate the FluentCRM Manager User role such as a **Contributor**. This permission will only let a Manager see the statistics available in the Dashboard.
2. **Contacts Read:** This permission will grant the Manager to view all the contacts and their details. But the Manager will not be able to Edit, Delete or Update any contact details or contacts.
3. **Contacts Edit/Update/Delete:** This will grant the Manager to Edit, Delete or Update any contact details or contacts.
4. **Contact Tags/List/Segment Manage:** This permission will let the Manager access all the Lists, Tags, and Dynamic Segments along with editing and updating them.
5. **Emails Read:** This permission will let the Manager view all Email Campaigns, Sequences, and All Email Activities. Also, the Manager will not be able to send or resend any emails.
6. **Emails Write/Send/Delete:** This will allow the Manager to Duplicate, Delete, Send, or Resend Email Campaigns, Sequences, and Email Activities.
7. **Email Templates Manage:** This will grant a Manager to Manage Email Templates.
8. **Manage Forms:** A Manager will be able to Manage Fluent Forms connected to FluentCRM.
9. **Automation Read:** A Manager will be able to view Automations and their reports.
10. **Automation Write/Edit/Delete:** This will grant a Manager to manage automation.
11. **Settings Manage:** This will let a manager access the Global Settings of the FluentCRM which is generally an Admin area.

![crm managers list](https://fluentcrm.com/wp-content/uploads/2022/07/crm_managers_list.png)

When you are done with adding the new manager you will see them listed as CRM Managers along with their assigned permissions. If any user does not have sufficient permission granted he/ she will see an error message like the below:

![crm manager permission not granted](https://fluentcrm.com/wp-content/uploads/2022/08/crm_manager_permission_not_granted.png)

**Note:** All the permissions are set or allowed or accessed globally. For example, a manager will have access to all the lists, tags, and contacts depending on the permission granted.

.

---

## SMTP/Email & Bounce Handlers

**Source:** [https://fluentcrm.com/docs/smtp-bounce-handlers-settings/](https://fluentcrm.com/docs/smtp-bounce-handlers-settings/)

FluentCRM uses the wp_mail() function to broadcast all the emails that are PHP-based mailers. There are various ways to deliver emails from WordPress. The SMTP Protocol, API-based 3rd party delivery providers, and direct PHP-based sending require SMTP Port 25 to be opened from the WordPress hosting server. Below is a screenshot of when no SMTP plugins are used on the website.

![crm smtp initial](https://fluentcrm.com/wp-content/uploads/2022/07/crm_smtp_initial.png)

SMTP Plugins like **FluentSMTP** improves your WordPress mail by intercepting the wp_mail and then connecting with your email service providers to ensure deliverability. It allows sending emails directly via SMTP. API-based providers like Google Workplace, Office365, Sendgrid, AWS SES, etc. When you install the FluentSMTP plugin on your website and configure email delivery connections you will see them listed in the FluentCRM SMTP Dashboard like the below screenshot.

## FluentSMTP Settings

![crm smtp](https://fluentcrm.com/wp-content/uploads/2022/07/crm_smtp.png)

## Bounce Handlers

Bounce handlers allow you to manage bounced contacts without manual intervention. Generally, all your bounced emails are only reported within the service platform you’re using however, the ideal way to deal with bounced emails is to sync them with FluentCRM. This is why we recommend setting up bounce handlers.

To configure Bounce Handlers for available services please check each relevant documentation:

1. [Amazon SES](https://fluentcrm.com/docs/bounce-handler-with-amazon-ses/)
2. [Mailgun](https://fluentcrm.com/docs/bounce-handling-with-mailgun/)
3. [SendGrid](https://fluentcrm.com/docs/bounce-handling-with-sendgrid/)
4. [Pepipost](https://fluentcrm.com/docs/bounce-handling-with-pepipost/)
5. [PostMark](https://fluentcrm.com/docs/bounce-handling-with-postmark/)
6. [Sparkpost](https://fluentcrm.com/docs/bounce-handling-with-sparkpost/)
7. [SendGrid](https://fluentcrm.com/docs/bounce-handling-with-sendgrid/)
8. [Elastic Email](https://fluentcrm.com/docs/bounce-handling-with-elastic-email/)
9. [Postal Server](https://fluentcrm.com/docs/bounce-handling-with-postal-server/)
10. [SMTP2Go](https://fluentcrm.com/docs/bounce-handling-with-smtp2go/)
11. [Brevo (ex Sendinblue)](https://fluentcrm.com/docs/bounce-handling-with-brevo/)

For now, we only have these services integrated with our bounce handling system. More will be added in the future.

---

## Compliance

**Source:** [https://fluentcrm.com/docs/global-compliance-settings/](https://fluentcrm.com/docs/global-compliance-settings/)

[FluentCRM](https://fluentcrm.com/) helps you with data protection and other compliance issues by offering specific settings to add to your Privacy Policy. This article will guide you through the process of using the Compliance settings option in Fluent CRM.

## Compliance Settings

To learn how to use **Compliance** settings, follow the steps along with a screenshot below –

First, go to **Settings**from the top right corner of the **Fluent CRM Navbar** and click the **Compliance** settings option. You will now get the compliance settings options inside the **Compliance Settings** page. These are:

- Anonymize IP Address for associate contact data
- Delete connected contact when a user gets deleted
- Include Contact Info in Personal Data export by WP
- Enable one-click unsubscribe (if enabled then no feedback will be asked)

![compliance settings option under settings section of fluentcrm](https://fluentcrm.com/wp-content/uploads/2022/07/Compliance-Settings-option-under-Settings-section-of-FluentCRM-scaled.webp)

**A brief explanation of each Setting mentioned above is given below –**

- **Anonymize IP Address for associate contact data**: This option allows you to anonymize the IP address when capturing customer data through forms (e.g., [Fluent Forms](https://fluentforms.com/) can capture the user’s IP address).
- **Delete connected contact when a user gets deleted**: By selecting this option, you can remove a user from FluentCRM when the user is deleted from the WordPress user base.
- **Include Contact Info in Personal Data export by WP**: Use this option to include Contact Data from FluentCRM in the WordPress data export.
- **Enable one-click unsubscribe (if enabled then no feedback will be asked)**: If this option is enabled, no feedback will be requested upon unsubscribing.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Tools

**Source:** [https://fluentcrm.com/docs/fluentcrm-tools-settings/](https://fluentcrm.com/docs/fluentcrm-tools-settings/)

## REST API & Cron Job Status

The WordPress REST API **provides REST endpoints (URLs) representing the posts, pages, taxonomies, and other built-in WordPress data types**. Your application can send JSON data to these endpoints to query, modify and create content on your site.

FluentCRM uses WordPress REST API to process data; it is very important that the API is working. Without REST API FluentCRM will not work. There are 4 API Methods that need to be working and they are **GET**, **POST**, **PUT**, and **DELETE**.

You can check the REST API status from the tools. To check the REST API status, Go to **FluentCRM Dashboard** ➜ **Tools** ➜ **REST API Status**

![crm tools rest api status](https://fluentcrm.com/wp-content/uploads/2022/07/crm_tools_REST_API_status.png)

The above screenshot represents a successful working REST API Status.

Another extremely important part of FluentCRM is the Cron Job. Cron is a Linux utility that schedules a command or script on your server to run automatically at a specified time and date. A cron job is **the scheduled task itself**. Cron jobs can be very useful to automate repetitive tasks.

Like any other Email Marketing Application (EMA) FluentCRM also processes data periodically, sends emails, checks for email clicks & email opens, and also cleans data. This is by default handled by WordPress PHP-based Scheduled Jobs is unreliable and prone to miss running at a specific time or fail due to numerous factors. There are 3 types of scheduled jobs that FluentCRM operates:

1. **Scheduled Email Sending:** This job processes the email sending and it should be running **every minute**.
2. **Scheduled Email Processing:** This job runs every **5 Minutes** and it processes other tasks as Email opens, Email clicks, etc.
3. **Scheduled Automation Tasks:** This is a job that runs **Hourly** and it also processes a **Weekly** event that cleans up FluentCRM like logs and other data.

![crm tools cron job](https://fluentcrm.com/wp-content/uploads/2022/07/crm_tools_Cron_job.png)

It is strongly recommended that you replace your default WordPress cron that runs by PHP script with a server-side Cron Job. We have a guide on how to do this on various platforms here: [Server Side Cron Job Replacement](https://fluentcrm.com/docs/replace-wordpress-cron-with-a-real-cron-job/). This will ensure that scheduled events are running timely and properly and FluentCRM also runs smoothly and do not miss any events.

## Reset FluentCRM Data

If you want to delete all your FluentCRM data (Contacts, Campaigns, Settings, Emails) then you can utilize this feature to Reset the data of the FluentCRM. This will only work with FluentCRM database tables. But to use this feature you also need to add a configuration directive in your **wp-config.php** file.

![crm tools danger zone](https://fluentcrm.com/wp-content/uploads/2022/07/crm_tools_danger_zone.png)

Open your wp-config.php with any editor from the Hosting Control Panel like cPanel, or Plesk or download it using FTP and update it and reupload and overwrite it.

Add **define(‘FLUENTCRM_IS_DEV_FEATURES’, true);** **before**the line says **/* That’s all, stop editing! Happy publishing. */**

![crm tools debug wp config](https://fluentcrm.com/wp-content/uploads/2022/07/crm_tools_debug_wp_config.png)

## FluentCRM Data Cleanup

In some cases, you might not want to delete all of your contacts, maybe you just want to reset the logs. You can do it inside the **Data Cleanup** section. FluentCRM allows you to delete Email History Logs, Email Click Logs, and Email Open Logs older than your specified period in days.

![crm tools data cleanup](https://fluentcrm.com/wp-content/uploads/2022/07/crm_tools_data_cleanup.png)

Select the Logs you want to delete, give the amount in days, and click on the **Preview Log Summary** button.

![crm tools data cleanup min 7days](https://fluentcrm.com/wp-content/uploads/2022/07/crm_tools_data_cleanup_min_7days.png)

This period should be at least **7 days** or you will see an error like the above screenshot.

![crm tools data cleanup preview logs](https://fluentcrm.com/wp-content/uploads/2022/07/crm_tools_data_cleanup_preview_logs.png)

Review the summary and click on the **Yes, I want to delete the Old Logs** button only if you know what you are doing. If you still want to keep the logs you leave the page or click on the **Never Mind, I changed my mind** button.

---

## REST API

**Source:** [https://fluentcrm.com/docs/global-rest-api-settings/](https://fluentcrm.com/docs/global-rest-api-settings/)

## Adding New REST API Key

A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services. FluentCRM provides REST API to manage various kinds of tasks and access FluentCRM data as well. In this tutorial, we will learn about Fluent CRM REST API Management.

Go to **FluentCRM Dashboard** ➜ **REST API** ➜ **Add New Key**

![crm rest api add new key](https://fluentcrm.com/wp-content/uploads/2022/07/crm_REST_API_add_new_key.png)

If this is a fresh installation of FluentCRM or you did not add any managers yet you will see a popup saying create a manager similar to below screenshot:

![crm rest api add new key add manager](https://fluentcrm.com/wp-content/uploads/2022/07/crm_REST_API_add_new_key_add_manager.png)

To Add New Manager please visit this documentation: [Add a New Manager](https://fluentcrm.com/docs/global-managers-settings/)

Now When you are done adding a FluentCRM Manager and note the email address and then Add a New Key by providing the name of the key and then associating the FluentCRM Manager to it.

![crm add rest api key](https://fluentcrm.com/wp-content/uploads/2022/07/crm_add_REST_API_key.png)

After clicking on the **Create** Button you will be provided with an **API Username**and an **API Password**like the below screenshot:

![crm rest api created](https://fluentcrm.com/wp-content/uploads/2022/07/crm_REST_API_created.png)

Please keep note of this which will be needed to use the REST API as credentials.

## Testing API

Now we will be testing this REST API access and a few methods below.

We will use a free tool Postman for this testing. Firstly, we need to add authorization and the type is **Basic Auth** for the authorization where we will be providing the **Username**and **Password**generated while creating the REST API key.

![crm rest api test postman](https://fluentcrm.com/wp-content/uploads/2022/07/crm_REST_API_test_PostMan.png)

Now are ready to go ahead and test our FluentCRM REST API. The **API Base URL:** **https://yourdomain.com/wp-json/fluent-crm/v2**

Now we will be listing all the contacts of the FluentCRM by the HTTP Request: **GET https://yourdomain.com/wp-json/fluent-crm/v2/subscribers**

Now Clicking on Send or requesting the data will send JSON formatted response data like the below screenshot. You will see a status code of 200 OK for a successful request.

![crm rest api get result](https://fluentcrm.com/wp-content/uploads/2022/07/crm_REST_API_GET_Result.png)

Now we will be adding a contact into the FluentCRM by the HTTP Request: **https://yourdomain.com/wp-json/fluent-crm/v2/subscribers?first_name=Ibrahim&last_name=Sharif&email=ibrahim@gmail.com&status=subscribed** which provides a few parameters regarding the information of the contact.

This also sends a JSON formatted response giving a message saying that “**Successfully added the subscriber.**“

![crm rest api post result](https://fluentcrm.com/wp-content/uploads/2022/07/crm_REST_API_POST_result.png)

To learn more and deep about FluentCRM REST API please visit: [https://rest-api.fluentcrm.com/](https://rest-api.fluentcrm.com/)

---

## Incoming Webhooks

**Source:** [https://fluentcrm.com/docs/global-incoming-webhooks/](https://fluentcrm.com/docs/global-incoming-webhooks/)

## Configuration

As we use various platforms, services, or even plugins inside our WordPress website we may need to process data from outside of the FluentCRM and also run Email Campaigns or Automation we may need to capture data from those external services or sources. Receive data from any third-party or external services with the feature of **FluentCRM Incoming Webhook** without writing code or running servers.

Go to **Global Settings** and select **Incoming Web Hooks** from the left sidebar and click on **Create Webhook.**

![crm webhook create](https://fluentcrm.com/wp-content/uploads/2022/07/crm_webhook_create.png)

A pop-up will appear and you will need to provide the required details. Give the WebHook a **Name** as an identifier first, Choose **lists** and **tags** for the user who will subscribe through the webhook, and finally give a **subscription status**to the user. Generally, you want to give the Subscribed status.

![crm incoming webhook](https://fluentcrm.com/wp-content/uploads/2022/07/crm_incoming_webhook.png)

When you are done with the required information click on the Create button. You will be provided a webhook URL that will listen to any incoming request. You will also get the required keys for all available fields to map with. The available General Keys are:

| Contact Field | Key |
| --- | --- |
| Name Prefix | prefix |
| First Name | first_name |
| Last Name | last_name |
| Full Name | full_name |
| Email | email |
| TImezone | timezone |
| Address Line 1 | address_line_1 |
| Address Line 2 | address_line_2 |
| City | city |
| State | state |
| Postal Code | postal_code |
| Country | country |
| IP Address | ip |
| Phone | phone |
| Source | source |
| Date of Birth (Y-m-d Format only) | date_of_birth |

**Custom Contact Fields**
You may also use these custom contact fields. Copy the keys in the right column and paste them into the app just like other contact fields.

![crm incoming webhook copy link](https://fluentcrm.com/wp-content/uploads/2022/07/crm_incoming_webhook_copy_link.png)

When you are done with setting up the details, please click on the **Copy Button** to copy the webhook URL to use from your external services or sources to send supported available data to FluentCRM.

## Application

Please check the below details that are important to work with the FluentCRM Webhook.

| Method | POST |
| --- | --- |
| Data Format | JSON |
| JSON Nesting | Not Supported |
| Minimum Field | email |

---

## Double Opt-in Settings

**Source:** [https://fluentcrm.com/docs/global-double-opt-in-settings/](https://fluentcrm.com/docs/global-double-opt-in-settings/)

## Email Subject & Body

The double opt-in email feature of FluentCRM acts as an extra layer of confirmation to verify each email address is a verified user and FluentCRM can add the email address to your contact list. Contacts that are added via form submissions, automation funnels, or by selecting the WooCommmerce subscription checkbox will automatically receive a double opt-in email to confirm their subscription if this setting is enabled.

![crm double opt in email body](https://fluentcrm.com/wp-content/uploads/2022/07/crm_double_opt_in_email_body.png)

- **Email Subject:** Give an appropriate subject for the email to the recipient.
- **Email Body:** Write the email body for the double opt-in email. There will be a default one. You can customize it as you want. Use the SmartCode from the dropdown to create a customized one. But using the SmartCode **#activate_link#** for a **Plain Text Email** or **{{crm.activate_button|Confirm Subscription}}**for **HTML Email**with a button to click for the subscription is mandatory because it contains the activation URL.

## Design Template

Select the email Design Template for this double-opt-in email. You can choose from four different options.

![crm double opt in email body design template](https://fluentcrm.com/wp-content/uploads/2022/07/crm_double_opt_in_email_body_design_template.png)

## After Confirmation Actions

### Show Message

Select the confirmation message for the user. When they will click on the subscription confirmation button they will land on this page.

![crm double opt in after confirmation show message](https://fluentcrm.com/wp-content/uploads/2022/07/crm_double_opt_in_after_confirmation_show_message.png)

***Note:** If you’re using Fluent Forms, leave the **Enable Double Opt-in Confirmation before the Form Data Processing** option( **Form -> Form Settings**) unchecked to send the above double opt-in email template to your contacts. If you enable both Fluent Forms and FluentCRM double opt-in, your system will send the Fluent Forms double opt-in email template to your contacts.

### Redirect to an URL

If you want to redirect your user to a specific URL then you can use this option to confirm the subscription and immediately automatically redirect to your desired URL, Landing Page, or anywhere you want.

![crm double opt in after confirmation redirect](https://fluentcrm.com/wp-content/uploads/2022/07/crm_double_opt_in_after_confirmation_redirect.png)

Below is an example screenshot of what the Double Opt-in Emails look like in the recipient’s mailbox.

![crm double opt in email](https://fluentcrm.com/wp-content/uploads/2022/07/crm_double_opt_in_email.png)

And when the user clicks on the **Subscription Confirmation Button**and you configure it to**show a message after confirmation** they will see a message like the****below:

![crm double opt in confirmed](https://fluentcrm.com/wp-content/uploads/2022/07/crm_double_opt_in_confirmed.png)

That’s all for Double Opt-in Confirmation Email Settings!

---

## Custom Contact Fields

**Source:** [https://fluentcrm.com/docs/global-custom-contact-fields/](https://fluentcrm.com/docs/global-custom-contact-fields/)

## Adding Custom Contact Field

When you need additional fields to gather information for your business, you can create new **Custom Fields**. From your FluentCRM dashboard, click on the **Settings** in the top right corner of the main navigation bar. Now from the left sidebar menu, navigate to **Custom Contact Fields** and click on the “**Add** **Field**“.

![FluentCRM Custom Contact Fields](https://fluentcrm.com/wp-content/uploads/2022/07/crm_custom_contact_field-1.png)

A popup form will appear, and you will see the available Field Types.

![crm custom contact fields add new ](https://fluentcrm.com/wp-content/uploads/2022/07/crm_custom_contact_fields_addNew-1.png)

You can choose from the various field types listed in the below screenshot. After choosing the field type, give the field a **Label**. Based on the field type you might need to enter some more info. For example, if you select the type “**Radio Choice**” you will also need to enter the options. For Radio Input type of fields such as **Radio Choice**, **Select Choice**, **Multiple Select Choice**, and **Checkboxes** when you add options, enter the option value and press **Enter** on the **Keyboard**when you are done with the input.

## Rearranging Custom Contact Fields

Now when you add multiple **Custom Contact Fields**they will be arranged or organized in the **Custom Profile Data**serially as you added them. But if you want them to be organized according to your own requirements you can do so by using the **Up**and **Down Arrows**as in the below screenshot. If you want to **Edit**or **Delete**any of the Custom Contact Fields you can do so by clicking on the Edit or Delete buttons.

Also, you can sort custom fields by going to **Custom Contact Fields** and clicking on the labels to access the sorting options.

![custom fields fluentcrm 02 24 2025 06 24 pm](https://fluentcrm.com/wp-content/uploads/2022/07/Custom-Fields-FluentCRM-02-24-2025_06_24_PM-scaled.webp)

## Update Custom Fields Using Bulk Actions

You can add custom fields to your users using the **Bulk Action** feature in FluentCRM. To do this, go to the **Contacts** section and select the contacts you want to update. Now, click on the **Select Action** dropdown, where you’ll see the **Update Custom Field** option—select it.

![contacts fluent](https://fluentcrm.com/wp-content/uploads/2022/07/Contacts-Fluent.png)

After that, another dropdown will appear, allowing you to choose the custom field you want to add. Once selected, click the **Update Field** button to save the changes.

![contacts f](https://fluentcrm.com/wp-content/uploads/2022/07/Contacts-F.png)

## Preview

After Adding the Field Type, you can see the added Custom Contact Fields on your Contact Information Under the **Custom Profile Section.**

![crm contact custom fields](https://fluentcrm.com/wp-content/uploads/2022/07/crm_contact_Custom_fields.png)

.

---

## General Settings

**Source:** [https://fluentcrm.com/docs/global-general-settings/](https://fluentcrm.com/docs/global-general-settings/)

## Auto Sync User Data and Contact Data

The option **Enable Sync between WP User Data and Fluent CRM Contact Data** lets you Automatically sync your FluentCRM and WordPress users along with supported data bi-directionally.

![crm general autosync](https://fluentcrm.com/wp-content/uploads/2022/07/crm_general_autoSync.png)

Below is an example screenshot of the WordPress users list that will be synced by this option.

![crm add manger users list 1](https://fluentcrm.com/wp-content/uploads/2022/08/crm_add_manger_users_list-1.png)

Also, you can choose to delete the FluentCRM contact associated with the WordPress contact when it is deleted from WordPress by checking the option **Delete FluentCRM contact on WP User delete**.

## User Signup Optin Settings

By enabling **Enable Create new contacts in FluentCRM when users register in WordPress**, you can automatically add your new WordPress user signups as subscribers in FluentCRM. Whenever a user signs up to your website they will be imported automatically as a subscriber in FluentCRM. By assigning a single **List & Tags** or Multiple Lists & Tags according to your needs you will let you identify the user later in the Campaign, Automation, and other places in the FluentCRM.

![crm general optin](https://fluentcrm.com/wp-content/uploads/2022/07/crm_general_optin.png)

**Double Opt-in**:

To maintain GDPR policy or make sure that the contact is valid or confirm extra steps to ensure that the user is real, you may turn on **Enable Double-Optin Email Confirmation** so that when a WordPress signs up and FluentCRM creates a new user inside FluentCRM, FluentCRM will send an Opt-in confirmation email which Email Body and Contents are defined in the Double Opt-in Settings and guided here: [Double Opt-in Settings – FluentCRM](https://fluentcrm.com/docs/global-double-opt-in-settings/). Below is an example email of such an Opt-in confirmation email sent to the user.

![crm double opt in email](https://fluentcrm.com/wp-content/uploads/2022/07/crm_double_opt_in_email.png)

## WP User Role Based Tag Mapping

This **Enable Role Based Tag Mapping** option lets you add or remove tags to contacts whenever a user’s role changes in WordPress. By default, a fresh WordPress system has **Administrator**, **Editor**, **Author**, **Contributor**, and **Subscriber** User Role. Plugins like Woocommerce adds a **Shop Manager** and a **Customer** user role. So if you want to assign an **Administrator** Tag to an **Administrator** user you can select the Tag in this setting and also if you want to remove other tags like **Subscriber**, or **Author**type Tags for that user, you may select them in the **Tags to be removed** column as well.

![crm general role mappings](https://fluentcrm.com/wp-content/uploads/2022/07/crm_general_role_mappings.png)

## Comment Form Subscription Settings

The **Enable Create new contacts in FluentCRM when a visitor adds a comment in your comment form** option automatically adds your site commenter as a subscriber in FluentCRM by adding a checkbox after the comment box. You can set the Text in **Label Settings**that is shown to the user and **Assign the user to a List or Tags**.

![crm general comment](https://fluentcrm.com/wp-content/uploads/2022/07/crm_general_comment.png)

Below is an example of how the Checkbox is shown to the user.

![crm general comment subscription](https://fluentcrm.com/wp-content/uploads/2022/07/crm_general_comment_subscription.png)

The other available options are described below:

- **Enable auto-checked** status on Comment Form subscription: Enable the checkbox automatically for the commenter.
- **Do not show the checkbox if the current user already subscribed state:** Hide the checkbox for the commenter if he is already added to the FluentCRM contact list.
- **Enable Double-Optin Email Confirmation**: Same as User Signup Opt-in Settings you can also enable [Double Opt-in email](#double-optin) confirmation for the contacts.

## Woocommerce Checkout Subscription Field

The **Enable Subscription Checkbox to WooCommerce Checkout Page** option lets you add a subscription box to the **WooCommerce Checkout** form. You can set the Text in the **Label Settings**that is shown to the user and **Assign the user to a List or Tags**. Whenever a user places an order from WooCommerce, they will be imported automatically as subscribers in the FluentCRM.

![crm general woocommerce checkout](https://fluentcrm.com/wp-content/uploads/2022/07/crm_general_woocommerce_checkout.png)

Below is an example of how the Checkbox is shown to the user at checkout.

![crm checkout field](https://fluentcrm.com/wp-content/uploads/2022/07/crm_checkout_field.png)

The other available options are described below:

- **Enable auto-checked** status on Comment Form subscription: Enable the checkbox automatically for the commenter.
- **Do not show the checkbox if the current user already subscribed state:**Hide the checkbox for the commenter if he is already added to the FluentCRM contact list.
- **Enable Double-Optin Email Confirmation**: Same as User Signup Opt-in Settings you can also enable [Double Opt-in email](#double-optin) confirmation for the contacts.

That’s all! Enjoy FluentCRM in your Business automation and email marketing campaigns.

---

## Integration Settings

**Source:** [https://fluentcrm.com/docs/global-integration-settings/](https://fluentcrm.com/docs/global-integration-settings/)

Using the deep integration settings for **Woocommerce**, **Easy Digital Downloads**, **LifterLMS**, and **LearnDash**, you can sync the data from these plugins into FluentCRM. While syncing the data, you can also assign certain List and Tag to the contacts.

![crm integrations](https://fluentcrm.com/wp-content/uploads/2022/07/crm_integrations.png)

The relevant Product/Plugin Specific Integration Settings are documented below:

**Ecommerce:**

1. Woocommerce
2. Easy Digital Downloads

**Learning Management Systems:**

1. LifterLMS
2. LearnDash
3. TutorLMS

**Membership Integrations:**

1. Paid Membership Pro
2. MemberPress
3. Wishlist Members
4. Restrict Content Pro

**WordPress Automations:**

1. WPFusion

**Form Integrations:**

1. Fluent Forms
2. Elementor Pro Form
3. Divi Bloom
4. ThriveArchitect

**Page Builders:**

1. Thrive Themes
2. Elementor Page Builder
3. Default Gutenberg Editor & Conditional Blocks
4. Oxygen Builder

---

## Business Settings

**Source:** [https://fluentcrm.com/docs/global-business-settings/](https://fluentcrm.com/docs/global-business-settings/)

As an Email Marketing Application, It is necessary to have business details and a logo of the business company that is used in emails, prints, and communications in FluentCRM.

Setup your “**Business Name**“, “**Business Full Address**” and “**Logo**“. This Business Name, Address & Logo will be used in Emails, Unsubscribe Pages, and some other places.

![Business settings fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/Settings-FluentCRM.png)

You can use these details without typing or copying them again in emails and use them globally by FluentCRM smart codes. The smart code for Business Name is *{{crm.business_name}}*, smart code for Business Address is *{{crm.business_address}}*.

Below is an example of how these smart codes can be used in Email Footer Settings later.

![email settings fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/Email-Settings-FluentCRM.png)

Below is a preview of the above-used smart codes and relevant information.

![test email fluentcrm](https://fluentcrm.com/wp-content/uploads/2023/08/Test-Email-FluentCRM.png)

---

## Email Settings

**Source:** [https://fluentcrm.com/docs/global-email-settings/](https://fluentcrm.com/docs/global-email-settings/)

The Email Settings define the default Mail From email address and Names that will be visible to the recipients of the Fluent CRM communication emails sent. Available options are discussed below:

## Default Settings

![crm email settings default](https://fluentcrm.com/wp-content/uploads/2022/07/crm_email_settings_default.png)

| Option Name | Description |
| --- | --- |
| From Name | The Name that is visible to the recipient as Sender Name. When you send marketing emails to your subscribers, the “From Name” (also known as the email Sender name) tells the recipients who sent them the email. It is very important and a determining factor for the email you will send whether your email will be opened, or get ignored by the recipients. Often it is the company name, or perhaps the product name or service name people have signed up to learn about. |
| From Email Address | The Name that is visible to the recipient is Sender’s Email Address. This is limited to the number of available configured connections in SMTP Plugins if installed like FluentSMTP. This is the email address the user will see when they open the email. There are a number of things to follow when choosing the “From Email” address. Always avoid using free webmail addresses, and also avoid the no-reply address. Use a valid email address that also matches your SMTP email address or this will cause an email delivery issue. |
| Reply to Name | The Name that identifies the Name of the entity that will receive the reply to the sent email. |
| Reply to Email | The email that will receive the reply of the sent email. |
| Maximum Email Limit Per Second | The maximum number of emails attempted per second. It can be lower due to a lot of factors like site performance, security or firewall limits, rules, the number of connections allowed from the remote mail server that delivers the emails, or by default WordPress hosting if no SMTP plugin is installed and configured. |

The above settings will only apply if there is no SMTP Plugin installed and uses the default mailing system. If an SMTP plugin is installed like FluentSMTP and that does not force the Sender Name and Email Address as below then the above settings will be in effect.

![crm smtp email default settings](https://fluentcrm.com/wp-content/uploads/2022/07/crm_smtp_email_default_settings.png)

But if you have any SMTP plugin installed on your website which takes over the email delivery of the website then you will be able to select your configured email addresses or connections or delivery method from **From Email Address** option as below:

![crm email settings dropdwon address](https://fluentcrm.com/wp-content/uploads/2022/07/crm_email_settings_dropdwon_address.png)

Below is an example of the **From Name** and **From Email Address** shown in Gmail Web Client.

![crm email defaults preview](https://fluentcrm.com/wp-content/uploads/2022/07/crm_email_defaults_preview.png)**An example email sent from FluentCRM to show you how the From Name & From Email will show in the inbox.**

## Email Footer Settings

![crm business settings email footer](https://fluentcrm.com/wp-content/uploads/2022/07/crm_business_settings_email_footer.png)

**Email Footer Text**: The footer section usually contains information about the sender’s unsubscribe link or forward the email. You should provide your business address {{crm.business_address}} and manage the subscription/unsubscribe URL for the best user experience.

**Smartcode in Footer:** {{crm.business_name}}, {{crm.business_address}}, ##crm.manage_subscription_url##, ##crm.unsubscribe_url## will be replaced with dynamic values. It is recommended to keep the texts as default aligned. Your provided email design template will align the texts.

### Available SmartCodes:

#### Contact

![crm email settigns smartcodes contact](https://fluentcrm.com/wp-content/uploads/2022/07/crm_email_settigns_SmartCodes_contact.png)

| Data Field Name | Smart Code |
| --- | --- |
| Full Name | {{contact.full_name}} |
| Name Prefix | {{contact.prefix}} |
| First Name | {{contact.first_name}} |
| Last Name | {{contact.last_name}} |
| Contact Email | {{contact.email}} |
| Contact ID | {{contact.id}} |
| User ID | {{contact.user_id}} |
| Address Line 1 | {{contact.address_line_1}} |
| Address Line 2 | {{contact.address_line_2}} |
| City | {{contact.city}} |
| State | {{contact.state}} |
| Postal Code | {{contact.postal_code}} |
| Country | {{contact.country}} |
| Phone | {{contact.phone}} |
| Status | {{contact.status}} |
| Date of Birth | {{contact.date_of_birth}} |

#### Custom Fields

![crm email settigns smartcodes customfields](https://fluentcrm.com/wp-content/uploads/2022/07/crm_email_settigns_SmartCodes_customFields.png)

Custom Fields are dependent on the FLuentCRM Settings. You can add as many Custom Fields as you want and then they will be available here. The generic **Data Field Name** will be as you set in the **Label** while creation and **SmartCode**will recognize the **slug**value of the custom field as below:

![custom fields fluentcrm datetime 1](https://fluentcrm.com/wp-content/uploads/2022/07/Custom-Fields-FluentCRM__DateTime-1.png)

The above example screenshot will represent **Data Field Name** as “**Date and Time**” & **SmartCode** would be **{{contact.custom.date_time}}**

#### General

![crm email settigns smartcodes general](https://fluentcrm.com/wp-content/uploads/2022/07/crm_email_settigns_SmartCodes_general.png)

| Data Field Name | Smart Code |
| --- | --- |
| Business Name | {{crm.business_name}} |
| Business Address | {{crm.business_address}} |
| Admin Email | {{wp.admin_email}} |
| Site URL | {{wp.url}} |
| Dynamic Date (example: +2Days from Now) | {{other.date.+2 days}} |
| Unsubscribe URL | ##crm.unsubscribe_url## |
| Manage Subscription URL | ##crm.manage_subscription_url## |
| View on Browser URL | ##web_preview_url## |
| Unsubscribe | {{crm.unsubscribe_html|Unsubscribe}} |
| Manage Subscription Hyperlink HTML | {{crm.manage_subscription_html|Manage Preference}} |

## Email Preference Settings

Using The  **##crm.manage_subscription_url##**  SmartCode lets the user manage their subscriptions along with the Lists if defined in **Email Preference Settings**.

![crm email settings manage subscriptions email](https://fluentcrm.com/wp-content/uploads/2022/07/crm_email_settings_manage_subscriptions_email.png)

Below is an example email of using this SmartCode where the user will see a link saying **Manage Email Subscriptions** and this will take the user to a page similar to the below screenshot.

![crm email settings manage subscriptions](https://fluentcrm.com/wp-content/uploads/2022/07/crm_email_settings_manage_subscriptions.png)

The screenshot below represents the available options of the preferences:

![crm settings email preference](https://fluentcrm.com/wp-content/uploads/2022/08/crm_settings_email_preference.png)

### List Subscriptions

| Option Name | Description |
| --- | --- |
| No, Contact can not manage list subscriptions | Default Option. This will not let the user manage their list subscription or do not offer any lists to select. |
| Contact only see and manage the following list of subscriptions | This will allow admins to select specific lists for users to manage their list subscriptions. It can be all lists or a number of lists. |
| Contact can see all lists and manage subscriptions | This will allow the user to see all the lists and select any or all of the list’s subscriptions. |

### Email Preference Shortcode

Please use the shortcode **** to show the form for your subscribers to let them manage these options themselves:

1. Name Prefix
2. First Name
3. Last Name
4. Phone
5. Date of Birth
6. Address Field
7. Lists that they are allowed to manage their subscription.

The above shortcode renders the management form on a page as below screenshot:

![crm email preference page](https://fluentcrm.com/wp-content/uploads/2022/08/crm_email_preference_Page.png)

#### Adding on a Page

![crm email preference page add](https://fluentcrm.com/wp-content/uploads/2022/08/crm_email_preference_Page_Add.png)

#### Adding on a Fluent Forms Notification

This can also be used in a Fluent Forms Form Submission Notification as below:

![crm form confirmation email preference](https://fluentcrm.com/wp-content/uploads/2022/08/crm_form_confirmation_email_preference.png)

---

## Smart Links

**Source:** [https://fluentcrm.com/docs/global-smartlinks-settings/](https://fluentcrm.com/docs/global-smartlinks-settings/)

If you ever used any affiliate link tracking or URL redirect then you are already familiar with this feature. Smart Links allow you to redirect your users or traffic to your target URL and in the process of redirecting FluentCRM will be able to apply Tag & List actions against your subscribers when they click on the FluentCRM Smart Link from an email, direct, on your site or from anywhere!

## Configuration

To get started on a fresh FluentCRM installation you will see the dashboard as in the screenshot below and click on  **Start Using SmartLinks** or on the regular option **Add New Smart Link.**

![](https://fluentcrm.com/wp-content/uploads/2020/09/Smart-Links.png)

Clicking on the Start Using Smart Links button will open a popup.

The available options for Smart Link are described below:

- **Link Title:**Your link title so you do not forget it.
- **Target Full URL:** Insert a valid URL that this link will direct to. Simply the redirect URL.
- **Apply Tags when clicked:** These tags will be applied to the contact whenever this link is clicked.
- **Apply Lists when clicked (optional):** These Lists will be applied to a contact whenever this link is clicked.
- **Remove Tags when clicked(optional)**: With this, you can remove tags on click.
- **Remove Lists when clicked(optional)**: These lists will be removed whenever this link is clicked.
- **Auto Login:** Enable auto login for Smart Links in emails, allowing automatic WordPress user login and redirection to specified URLs upon link click.
- **Note (Optional):** Feel free to add a note regarding this URL.

Now click on the **Create Smart Link** button and it will show a link.

![smart links fluentcrm 1](https://fluentcrm.com/wp-content/uploads/2024/04/Smart-Links-FluentCRM-1.webp)

Now use or place that Smart Link anywhere you want and when a user clicks a link in an email, on your site,****or anywhere and your user will be applied with the tags and lists actions.

![smart links fluent 1](https://fluentcrm.com/wp-content/uploads/2024/04/Smart-Links-Fluent-1.webp)

If you create a Smart Link and forget to copy the link you can anytime come back to the Smart Links Dashboard and click on the copy button to copy the FluentCRM-generated Smart Link. You can also Edit the existing Smart Link or Delete it using the Edit and Delete buttons.

![settings fluentcrm link copy 1](https://fluentcrm.com/wp-content/uploads/2024/04/Settings-FluentCRM-link-copy-1.webp)

Expanding the Smartlink clicking the arrow right side of the Title of the Smartlink will show you some statistics. The **Subscriber Clicks**indicate the click came from the logged-in user and the **Public User Click** will count all the clicks for non-logged-in user clicks or anonymous clicks.

![settings fluentcrm stat 1](https://fluentcrm.com/wp-content/uploads/2024/04/Settings-FluentCRM-stat-1.webp)

## Auto Login with Smart Links

Enable this feature for any smart links in emails. When a smart link is clicked, it logs in to the WordPress user and directs them to the target URL. This ensures security and privacy:

- Higher level users (with publish_post Permission) will not be auto login.
- Smart links need to be clicked from the email campaign as each link is signed and unique for each contact.

![settings fluentcrm auto login](https://fluentcrm.com/wp-content/uploads/2024/04/Settings-FluentCRM-Auto-Login.webp)

That’s all about configuring a Smart Link. You can now place this link anywhere to get the benefits of this Smart Feature of the FluentCRM.

---

