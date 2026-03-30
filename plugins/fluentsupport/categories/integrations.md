# Integrations

*Category from Fluent Support documentation*

---

## FluentCart Integration

**Source:** [https://fluentsupport.com/docs/fluentcart-integration/](https://fluentsupport.com/docs/fluentcart-integration/)

**FluentCart** is a high-performance e-commerce plugin built for **WordPress**, designed to give you full control of your store while keeping things fast, scalable, and simple. The integration with Fluent Support allows agents to view the **purchase history** of any FluentCart user and enables customers to open tickets for issues related to specific FluentCart products or orders.

In this guide, you’ll learn how to integrate FluentCart with Fluent Support, access purchase details directly from the ticket sidebar, create custom fields for FluentCart products and orders, and automate workflows to enhance your support process.

## FluentCart Integration With Fluent Support

To integrate FluentCart into Fluent Support, follow the steps with screenshots below —

Note: You don’t need to perform any integration yourself. It will happen automatically if the **FluentCart** plugin is already installed on your site.

### FluentCart Purchase Widget in Ticket Sidebar

When a customer submits a ticket, the integration automatically displays a **Purchases** widget in the agent’s ticket view sidebar.

You can click on a specific order ID to be taken directly to the full order details page within FluentCart.

![](https://fluentsupport.com/wp-content/uploads/2025/10/FluentCart-Product-information-in-cart-scaled.webp)

This widget shows the customer’s Lifetime Value, purchase count, and a list of their recent purchases from FluentCart.

![](https://fluentsupport.com/wp-content/uploads/2025/10/product-order-details-02-scaled.webp)

## Create Custom Fields for FluentCart

Note: To allow customers to select specific orders or products when submitting a ticket, you must **Create Custom Fields** in your **Fluent Support** site for **FluentCart**.

This feature is essential for collecting detailed information from customers at the moment they submit a ticket. It lets you add a dropdown field to your support form, allowing customers to choose the specific **FluentCart** product or order they need assistance with.

This gives your support agents instant context and helps you create powerful automated workflows based on the customer’s selection.

From the **Fluent Support** Dashboard, go to **Global Settings**, select **Custom Fields**, and click the **+ Add New Field** button.

![](https://fluentsupport.com/wp-content/uploads/2025/10/custome-filed-03-scaled.webp)

Choose the **Field Type** from the dropdown menu that suits your needs (**FluentCart Products** or **FluentCart Orders**) and click the **Add** button.

Note: Make sure your WordPress site has FluentCart installed and activated to proceed.

![](https://fluentsupport.com/wp-content/uploads/2025/10/add-new-custom-field-04-scaled.webp)

Give your **Field Type** a **Public Label** (e.g., “Select Your Product”) and configure additional fields as necessary. Also, you can enable **Conditional logic** if required. To save all the settings, click the **Add** button.

![](https://fluentsupport.com/wp-content/uploads/2025/10/add-new-custom-filed-05-scaled.webp)

A successful confirmation message will appear. Now, you can edit or delete the **custom ticket fields**here.

![](https://fluentsupport.com/wp-content/uploads/2025/10/Custom-Ticket-Fields-06-scaled.webp)

## Workflow Trigger and Actions for FluentCart

You can create automatic workflows that trigger based on the FluentCart product or order selected in a custom field.

From the **Fluent Support** Dashboard, go to **Workflows** and click the **+ Add New Workflow** button.

![](https://fluentsupport.com/wp-content/uploads/2025/10/add-new-workflow-07-scaled.webp)

Give your workflow a name and select the **Automatic** Workflow Type. Automatic workflows run based on selected ticket events. Click **Continue**.

Under **Set Your Trigger & Conditions**, select a **Workflow Trigger**, such as **On Ticket Creation, On Customer Response,**or**On Ticket Closed**.

Next, set the **Conditions**. Select your FluentCart custom field (e.g., **fc_products** or **fct_order**) from the dropdown, choose an operator (like **Equal**), and select the specific product or order that should trigger this workflow.

Next, set the **Conditions**. Select your FluentCart custom field (e.g., **fc_products** or **fct_order**) from the dropdown, choose a conditional****rule (like Equal), and select the specific product or order that should trigger this workflow.

Finally, under **Workflow Actions (Tasks)**, define what should happen when the trigger and conditions are met (e.g., **Assign Agent**, **Add Tag(s)**, or **Add Response**).

Click **Update Workflow** to save and activate your workflow. If you want to make your workflow actions live, be sure to toggle the **Publish** option to enable and publish it.

![](https://fluentsupport.com/wp-content/uploads/2025/10/set-trigger-09.webp)

### Integrate Customer Portal into FluentCart Dashboard

You can also provide a seamless experience for your customers by adding a link to your support portal directly within their FluentCart customer dashboard.

From the **Fluent Support** Dashboard, go to **Global Settings**. Scroll down to the **Agent Time Tracking** section and find the option **Add support link to Fluent Cart account navigation**.

Enable this setting and click **Save Settings**.

![](https://fluentsupport.com/wp-content/uploads/2025/10/Business-Settings-11.png)

Once your custom fields are active and the portal is integrated, customers can navigate to the **Support** tab in their FluentCart account.

![](https://fluentsupport.com/wp-content/uploads/2025/10/Support-portal-10.webp)

### Product and Order Selection in Tickets

Now, click to the **Create Ticket** button to create a new ticket.

On the “Submit a Support Ticket” form, they will now see the new custom fields you created (e.g., **fct_order** and **fc_products**). This allows them to select the specific product or order they need help with.

![](https://fluentsupport.com/wp-content/uploads/2025/10/submit-a-support-ticket-10.webp)

After the ticket is submitted, the selected product or order will be clearly displayed under “Additional Info” inside the ticket view. This gives both the customer and your support agents immediate context about the issue.

This is how the integration of **FluentCart** with **Fluent Support** works!

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our **support team**. Thank you.

---

## FluentCommunity Integration

**Source:** [https://fluentsupport.com/docs/fluent-community-integration/](https://fluentsupport.com/docs/fluent-community-integration/)

Integrating FluentCommunity with Fluent Support creates a more efficient and context-rich support experience. When connected, you can automate ticket routing based on a user’s course and provide your support agents with their community details directly within the ticket view.

> Use Case: A student taking your “Advanced SEO” course submits a support ticket and selects the course from a dropdown. A workflow rule can automatically assigns this ticket to your SEO specialist. When the agent opens the ticket, they instantly see a FluentCommunity Widget confirming the student is on “Lesson 5: Link Building,” giving them full context to resolve the issue quickly and effectively.

### Creating Custom Ticket Fields for FluentCommunity Courses

This first step allows you to add a special field to your support portal, enabling customers to select their specific FluentCommunity course when submitting a ticket.

### Accessing Custom Ticket Fields

Navigate to **Global Settings** within your **Fluent Support** dashboard and choose **Custom Fields** from the side menu. Click the **Add New Field** button to open the settings modal.

![](https://fluentsupport.com/wp-content/uploads/2025/05/Custom-field-1-scaled.webp)

### Configuring the FluentCommunity Course Field

A modal window titled **Add New Custom Field** will appear. In the **Field Type** dropdown menu, you must select **Fluent Community Courses**.

![](https://fluentsupport.com/wp-content/uploads/2025/05/Custom-field-2-scaled.webp)

Now, enter the requirement details below:

- **Filed Type:**This dropdown allows you to select the type of field you want to create. In this case, it’s set to integrate with **Fluent Community Courses**or**Fluent Community User Courses.**
- **Public Label:**This is the label that will be shown to the end users (customers or users filling the form). It should clearly describe the purpose of the field.
- **Admin label (optional):**This label is visible only to admins or support agents.
- **Slug (optional):** This is the unique identifier for the custom field. It’s auto-prefixed with cf_, and once saved, **it cannot be changed**.
- **Placeholder:** Optionally, add **Placeholder** text to guide your users (e.g., “Select your course here”).
- **This is an agent only field:**If you check the This is an agent only field option, the field will only be visible to **support agents**, not to the end user.
- **Enable Conditional Logics:** If checked, the user **must**fill out this field before submitting the form.
- **Required:** Check the **Required** box if you want to make course selection mandatory for ticket submission.

After that, click the green **Add**button at the bottom to save and create the custom field.

![](https://fluentsupport.com/wp-content/uploads/2025/05/Custom-field-3-scaled.webp)

## Creating an Automation Workflow with the Custom Field

With your new custom field, you can now create workflows to automate actions based on the course a customer selects.From your Fluent Support dashboard, navigate to **Workflows**. Click the **Add New Workflow** button.

![](https://fluentsupport.com/wp-content/uploads/2025/05/Workflows-4-scaled.webp)

#### Defining Workflow Details

In the pop-up, provide a **Workflow Name**. Select **Automatic** as the **Workflow Type**. Next, click the **Continue** button.

![](https://fluentsupport.com/wp-content/uploads/2025/05/Workflows-5-scaled.webp)

#### Setting Triggers and Conditions

**Workflow Trigger:** Choose the event that will start the workflow from the dropdown option.

**Conditions:** In the condition section, you can add conditions that refine **when** this workflow should run. The dropdown under **“Select”** will allow you to pick condition types (e.g., ticket category, tag, assigned agent, etc.).

You can add conditional logic by using: **+ OR**  (for alternative conditions) or **+** **AND** (for combining multiple conditions that must all be true).

**Workflow Actions**: You can then define the **Actions** that should run when the conditions are met, such as assigning the ticket to a specific agent from the dropdown option. Also you can add multiple actions by clicking the **Add Another Actions**button.

Once all complete, save the workflow. Don’t forget to enable the Status draft to published.

For additional details regarding workflow functionalities, please refer to this [article](https://fluentsupport.com/docs/workflows-automations/).

![](https://fluentsupport.com/wp-content/uploads/2025/05/Workflows-6-scaled.webp)

## FluentCommunity Widget in the Ticket Section

Once integrated, a dedicated “Fluent Community Courses” widget will be visible to agents within the individual support ticket view.

#### Widget Visibility

When an agent opens a support ticket, the FluentCommunity Widget will appear on the right sidebar, providing immediate context about the customer’s course enrollments.

#### Information Displayed

This widget displays key information related to the customer’s FluentCommunity engagement, including:

- **Course Name:** The title of the enrolled course.
- **Progress:** The customer’s progress within the course.
- **Enrolled At:** The date when the customer enrolled in the course.

![](https://fluentsupport.com/wp-content/uploads/2025/05/Preview-7-scaled.webp)

If you have any further questions about this guideline, feel free to reach out to our [support team](https://wpmanageninja.com/support-tickets)—we’re always here to help!

---

## SureTriggers Integration

**Source:** [https://fluentsupport.com/docs/suretriggers-integration/](https://fluentsupport.com/docs/suretriggers-integration/)

[SureTriggers](https://suretriggers.com/) connects the apps you use for **WordPress Sites**, **E-commerce Stores**, **Email Marketing Campaigns**, **and** **more**, allowing you to create automated workflows. By this **SureTriggers** integration with **Fluent Support**, you can automate various tasks.

SureTriggers integration allows you to create automation with Fluent Support. Especially, it helps to connect Fluent Support with the other WordPress Plugins and SaaS that do not have direct Integrations with it.

This article will guide you through integrating [SureTriggers](https://suretriggers.com/) with [Fluent Support](https://fluentsupport.com/).

## Integrate SureTriggers with Fluent Support

To learn how to integrate Sure Triggers with Fluent Support, follow the steps with the screenshots below —

Before starting the process, ensure you **Installed** and **Activated** the [SureTriggers](https://suretriggers.com/) Plugin on your WordPress site.

### Creating Workflow to Connect Fluent Support

Once you have authorized the account, your **SureTriggers** **Dashboard** will appear on your **WordPress Site**.
Now, go to the **Workflows**, open the **Create Workflow** dropdown, and click the **Create From Scratch** button.

![Sure Triggers - Workflows - Create Workflow - Create From Scratch](https://fluentsupport.com/wp-content/uploads/2024/11/1.-Create-Workflow-button-scaled.webp)

Provide a **Name** for your workflow so you can find it easily later, and click the **Create** button.

![Create](https://fluentsupport.com/wp-content/uploads/2024/11/2.-Create-.webp)

From here, you can add the **Fluent Support Trigger/Actions** to your **SureTriggers** **Automation** according to your needs. To add the Trigger, click the **Add Trigger**button and to add actions click the **Plus Icon**.

![Add Trigger - Plus Icon](https://fluentsupport.com/wp-content/uploads/2024/11/3.-Add-Trigger.webp)

#### Adding Fluent Support Trigger

To learn how you can add Fluent Support Trigger in your SureTriggers Workflow, follow the steps below –

Type **Fluent Support** in the **Search Bar** or select it from the **Dropdown List** by clicking the **Arrow Icon.**

![Fluent Support SureTriggers Integration](https://fluentsupport.com/wp-content/uploads/2024/11/4.-Fluent-Support-Trigger.webp)

Now, select the desired **Event** from the **Dropdown List** by clicking the **Dropdown Arrow**.
Also, select the **Connection** (the **WordPress Site** you want to connect).

Once you select the desired event and connection, click the **Continue** button.

![Select Event and Connection](https://fluentsupport.com/wp-content/uploads/2024/11/8.-Select-Event-and-connection.webp)

Here, select the desired **Mailbox** of **Fluent Support**, and click the **Continue** button.

![Select Mailbox](https://fluentsupport.com/wp-content/uploads/2024/11/9.-Select-Mailbox-.webp)

Once you configure everything, click the **Fetch Data** button.
Finally, click the **Save** button and your **Fluent Support Trigger** will be added to the **Workflow**.

![Fetch Data - Save button - SureTriggers](https://fluentsupport.com/wp-content/uploads/2024/11/10.-Fetch-Data-Save-button.webp)

#### Adding Fluent Support Action

To add the **Fluent Support**action, you must first add your **desired App/Plugin**as a **Trigger** to the workflow.
Then, click the **Plus Icon** right below the added **Trigger** and choose **Fluent Support** as an **Action**.

For example, I added **WooCommerce**as****a**Trigger** and clicked the **Plus Icon** to add the **Fluent Support Action**.

![Added WooCommerce Trigger - plus icon - SureTriggers](https://fluentsupport.com/wp-content/uploads/2024/11/11.-Added-FluentCRM-Trigger-plus-icon-1.webp)

Type **Fluent Support** in the **Search Bar** or select it from the **Dropdown List** by clicking the **Arrow Icon.**

![Fluent Support Action - SureTriggers Integration](https://fluentsupport.com/wp-content/uploads/2024/11/12.-Fluent-Support-Action.webp)

Once you select the action, select the **Event** and **Connection** according to your needs from the dropdown list.
After selecting the desired event and connection, click the **Continue** button.

![Select event & continue under Fluent Support action](https://fluentsupport.com/wp-content/uploads/2024/11/13.-Select-event-continue-under-Fluent-Support-action-1.webp)

Here, select the desired **Mailbox** of **Fluent Support**and****configure all the necessary data to test the action.

![configure necessary information - suretriggers integration](https://fluentsupport.com/wp-content/uploads/2024/11/14.-configure-necessary-information-1.webp)

Once you configure everything, click the **Test Action**button to test whether the action is working.
Finally, click the **Save** button and your **Fluent Support Action**will be added to the **Workflow**.

![Test action - suretriggers](https://fluentsupport.com/wp-content/uploads/2024/11/15.-Test-action-1-1.webp)

Once you create the workflow, click the **Publish** button to make it functional.
Otherwise, click the **Save Draft** button to save it as a draft.

![Publish - Save Draft - Suretriggers integration](https://fluentsupport.com/wp-content/uploads/2024/11/16.-Publish-button-1.webp)

This way you can connect Fluent Support with other plugins through the Workflows of SureTriggers.
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Integration Statuses

**Source:** [https://fluentsupport.com/docs/integration_statuses/](https://fluentsupport.com/docs/integration_statuses/)

[Fluent Support](https://fluentsupport.com/) gives you an amazing opportunity to view all your **Integration** **Statuses** together in one place. This article will guide you through where you can find your integration statuses.

## Integration Statuses

To learn where you can find all the **Integration** **Statuses**, follow the steps with the screenshot below —

Go to **Global** **Settings** from the **Fluent** **Support** **Dashboard** and click on the **Integration** **Statuses** from the left sidebar.

- Now, you can view a list of all **Plugins** and **Third-party Platforms** under the “**Integration Statuses**” option that can be integrated with **Fluent Support** on your **WordPress** site.

- Also, you will see a **Connected** button next to the **plugins/third-party platforms** that you have already integrated with **Fluent Support**on your  **WordPress** site.

- Plus, if you want to know the detailed process of integrating a **Plugin/Third-party Platform** with **Fluent Support**, click the **Learn More** button of the desired plugin and it will redirect you to the relevant documentation.

![Integration Statuses of Fluent Support](https://fluentsupport.com/wp-content/uploads/2024/05/Integration-Logs-Of-Fluent-Support-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## FluentBoards Integrations

**Source:** [https://fluentsupport.com/docs/fluentboards-integrations/](https://fluentsupport.com/docs/fluentboards-integrations/)

**FluentBoards** integration with **Fluent Support** allows you to create a task directly from your Fluent Support **Tickets** (i.e., if any Tickets come in your Fluent Support your support agent can add that Tickect as a task on your Fluent Boards).

This article will guide you through integrating [FluentBoards](https://fluentboards.com/) with [Fluent Support](https://fluentsupport.com/).

> Remember, you do not need to integrate the FluentBoards plugin manually with Fluent Support; it happens automatically if the both plugins are already installed on your site.

## Adding Task from Fluent Support Ticket

To learn how to integrate FluentBoards into Fluent Support, follow the steps with the screenshots below —

Go to the **Tickets** from the **Fluent Support** **Dashboard** and then open the specific ticket you want to add to your **FluentBoards**‘ **Task**. Now, click on **Add Task to Fluent Boards** from the **Three-Dot** button on the top right corner of your ticket.

And, a popup page will appear for adding this ticket to your Fluent Boards!

![Add Ticket directly from Fluent Support to Fluent Boards](https://fluentsupport.com/wp-content/uploads/2024/05/Fluent-Boards-option-inside-a-ticket-scaled.webp)

In the popup page, you’ll find the option to choose the **Board** and **Stage** from the **Dropdown** menu, and the task will automatically be added to the bottom of that stage. Fluent Support Agents can only view the boards to which they have access.

Here, you can set the **Starting** and **Ending Dates** for the task. Also, your **Task Title** will be automatically added from your Tickect’s **Subject** field and the **Task** **Description** from the **Ticket Description**field.

Once you are done, click the **Create** **Task** button and the ticket will be added as a new task in your Fluent Boards.

![Popup page for Adding Task to Fluent Boards](https://fluentsupport.com/wp-content/uploads/2024/05/Fluent-Support-Details--scaled.webp)

If you need to make further changes to the task, simply open it from your **FluentBoards**. From there, you can add assignees, set priorities, add labels, adjust dates, and make any other necessary adjustments.

If the ticket opener is a **FluentCRM** **User**, they’ll be automatically linked to the task as an **Associated** **CRM** contact.

![Preview of newly added task in Fluent Boards](https://fluentsupport.com/wp-content/uploads/2024/05/Task-added-in-Fluent-Boards-1-scaled.webp)

This is how the integration of **FluentBoards** with **Fluent Support** works!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## MemberPress Integration

**Source:** [https://fluentsupport.com/docs/memberpress-integration/](https://fluentsupport.com/docs/memberpress-integration/)

**MemberPress** is a **WordPress** plugin for creating and managing membership sites, ideal for monetizing content or building a website community. Integrating it with **Fluent Support**displays an overview of the **Course Purchase History** of any **User**, including the **User** **Status** and **Course Name** with **Status** (recurring or not) on the **Ticket** **Entries** page.

This article will guide you through integrating [MemberPress](https://memberpress.com/) with [Fluent Support](https://fluentsupport.com/).

## MemberPress Purchase Information In Your Ticket

You will only see **MemberPress** information in a ticket**if the user has enrolled**in any **courses** **from MemberPress**.

You **do not need to integrate** the **MemberPress** plugin **manually** **with** **Fluent** **Support**; it happens automatically if the MemberPress plugin is already installed on your site.

For example, here you can see a user purchased three courses from **MemberPress**, and the overview of course purchase history (User Status and Course Name with Status) automatically appeared on his ticket.

![MemberPress User's purchase related information](https://fluentsupport.com/wp-content/uploads/2024/05/MemberPress-Integration-new-scaled.webp)

This is how the integration of **MemberPress** with **Fluent Support** works!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Dropbox Integration

**Source:** [https://fluentsupport.com/docs/dropbox-integration/](https://fluentsupport.com/docs/dropbox-integration/)

**Dropbox** is a cloud storage platform that enables easy file storage, sharing, and seamless access and collaboration across multiple devices. Integrating it with **Fluent Support** allows automatic ticket attachment uploads, streamlining workflows. This article guides you through this integration process.

## Dropbox Integration With Fluent Support

To integrate Fluent Support with Dropbox, follow the steps with screenshots below —

### Create an app in Dropbox

To **create** or Log in to your **Dropbox**, **click here**. Then, go to your [Dropbox Account](https://www.dropbox.com/) developer section and click the **Create Apps** button to create an app in Dropbox.

![Create an app in Dropbox](https://fluentsupport.com/wp-content/uploads/2024/06/Dropbox-developer-Create-apps-scaled.webp)

In the “**Choose an AP**I” select **Scoped Access** and in the “**Choose the type of access you need**” select **App folder**.
Then, give a name to your app, agree with the **terms and conditions** if you want, and finally click the **Create app** button.

![Create a new app on the DBX Platform popup page](https://fluentsupport.com/wp-content/uploads/2024/06/Create-a-new-app-on-the-DBX-Platform--scaled.webp)

### Configure Dropbox Settings

Your Dropbox App **Settings** page will appear where you must provide an authorized **OAuth2 Redirect URL** and click the **Add** button.

![Dropbox App Settings](https://fluentsupport.com/wp-content/uploads/2024/06/oAuth2-redirect-url-paste-scaled.webp)

To **get this** **OAuth2 Redirect URL**, go to your Fluent Support **Dashboard > Global Settings > File Upload Integration > Dropbox >** **Configure** > copy the **OAuth2 redirect URL.**

![Dropbox Configure option from Fluent Support dashboard](https://fluentsupport.com/wp-content/uploads/2024/06/Fluent-Support-dashboard-global-integration-config-scaled.webp)

![OAuth2 Redirect URL](https://fluentsupport.com/wp-content/uploads/2024/06/Copy-Authorixed-URL-scaled.webp)

### Dropbox App Permissions

Now go to the **Permissions** section of your Dropbox app.
Select these areas **(files.metadata.write, files.content.write, files.content.read, sharing.write, file_requests.write),** and click the **Submit** button.

![Dropbox App Permissions](https://fluentsupport.com/wp-content/uploads/2024/06/Permissions-scaled.webp)

### Obtain App Credentials

To obtain the app’s credentials, copy the **App Key** and **App Secret** from your Dropbox app settings.

![Obtain App Credentials](https://fluentsupport.com/wp-content/uploads/2024/06/Copy-the-Api-Key-API-Secret-scaled.webp)

### Configure Dropbox in Fluent Support

Return to your **Fluent Support Dashboard,** go to **Global Settings,** click the **Configure** under **File Upload Integrations,** and a popup will appear.

![Dropbox Configure option from Fluent Support dashboard](https://fluentsupport.com/wp-content/uploads/2024/06/File-upload-integration-configure.webp)

Then, paste the **App key** & **App Secret** into the **Client ID** & **Client Secret** fields, and click the **Connect to Dropbox** button.

![Client ID, Client Secret and Connect to Dropbox options](https://fluentsupport.com/wp-content/uploads/2024/06/Paste-client-ID-Secret-connect-button-scaled.webp)

This is how you can integrate Dropbox with Fluent Support!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Google Drive Integration

**Source:** [https://fluentsupport.com/docs/google-drive-integration/](https://fluentsupport.com/docs/google-drive-integration/)

Integrating **Google** **Drive** with the[Fluent Support](https://fluentsupport.com/) plugin allows the synchronization of files between the two platforms. This article will guide you through integrating **Google** **Drive** with **Fluent** **Support**.

## Google Drive Integration With Fluent Support

To integrate Fluent Support with Google Drive, follow the steps with screenshots below —

### Accessing Google Cloud Console

First, go to the [Google Cloud Console](https://console.cloud.google.com/) and select **APIs & Services.**

![Accessing Google Cloud Console](https://fluentsupport.com/wp-content/uploads/2024/06/Welcome-–-Google-Cloud-console-scaled.webp)

### Creating New Project

To get the API, create a new project by clicking the **Create Project**.

Or, you can easily select any of your existing projects from the “**Select a Project”** dropdown list by clicking on the **Arrow** **Icon.**

![Select a Project](https://fluentsupport.com/wp-content/uploads/2024/06/Create-project-or-Select-project-scaled.webp)

Give a name to your project (location is optional) and press the **CREATE** button.

![Creating New Project](https://fluentsupport.com/wp-content/uploads/2024/06/Create-button-scaled.webp)

### Enabling Google Drive API

Click on **+ ENABLE APIS AND SERVICES.**

![ENABLE APIS AND SERVICES](https://fluentsupport.com/wp-content/uploads/2024/06/enable-APIs-services-scaled.webp)

Select **Google Drive API**.

![Google Drive API](https://fluentsupport.com/wp-content/uploads/2024/06/Google-Drive-API-scaled.webp)

Now, click on the **ENABLE** button to activate the Google Drive API.

![Active ENABLE button](https://fluentsupport.com/wp-content/uploads/2024/06/Enable-button.webp)

You will see the **CREATE CREDENTIALS** button, click on it.

![CREATE CREDENTIALS button](https://fluentsupport.com/wp-content/uploads/2024/06/Create-credintials-scaled.webp)

**Here, you will find five steps that you need to complete. These are**:

- Credential Type
- OAuth consent screen
- Scopes
- OAuth Client ID
- Your Credentials.

- In **Credential Type** select the **User Data** field and press the **Next** button.

![Credential Type](https://fluentsupport.com/wp-content/uploads/2024/06/User-Data.webp)

- In the **OAuth Consent Screen**, give an App name, User support email, and Developer email. Once you are done, click the **SAVE AND CONTINUE** button.

![OAuth Consent Screen](https://fluentsupport.com/wp-content/uploads/2024/06/Oath-consent-screen.webp)

- As **Scopes** is optional, you can skip it and go to the next step by clicking the **SAVE AND CONTINUE** button.

![Scopes](https://fluentsupport.com/wp-content/uploads/2024/06/Scopes.webp)

- In **OAuth Client ID**,

– In the Application type select Web Application you can give any name here.
– In Authorized Javascript Origins give your domain name without the ‘/’ slash in the last.
– In the Authorized redirect URL paste the OAuth2 redirect URL

![OAuth Client ID](https://fluentsupport.com/wp-content/uploads/2024/06/Oath-Client-ID.webp)

To **get the authorized redirect URLs** go to the Fluent Support Dashboard and **follow the steps below —**
**Global Settings > File Upload Integrations > Google Drive > Configure.**

![Google Drive Configure](https://fluentsupport.com/wp-content/uploads/2024/06/Global-Settings-file-upload-integration-configuration-button-copy.webp)

![Get authorized URL](https://fluentsupport.com/wp-content/uploads/2024/06/Get-Authorized-redirect-URL.webp)

- In the **fifth step**, you will find the **Client ID** you can copy. Now click on the **Done** button and the credential will be ready.

![Your Credentials](https://fluentsupport.com/wp-content/uploads/2024/06/Your-Credentials.webp)

Now this page will come, go to the **CREDENTIALS** section and click on **Web Client 1** under OAuth 2.0 Client IDs.

![CREDENTIALS & Web Client 1](https://fluentsupport.com/wp-content/uploads/2024/06/Credentials-web-client-id-scaled.webp)

After that, the below page will come and you will find the **Client ID** and **Client Secret** here copy these things.

![Client ID and Client Secret](https://fluentsupport.com/wp-content/uploads/2024/06/Client-ID-Client-Secret-scaled.webp)

Now, go to the **OAuth Consent Screen** section and click the **PUBLISH APP** button.

![OAuth Consent Screen and PUBLISH APP ](https://fluentsupport.com/wp-content/uploads/2024/06/Publish-APP-scaled.webp)

### Configure Fluent Support

Go to the **Fluent Support Dashboard >** **Global Settings > Flie Upload Integrations >  Google Drive > Configure**.

![Google Drive Configure option](https://fluentsupport.com/wp-content/uploads/2024/06/Global-Settings-file-upload-integration-configuration-button-copy-1.webp)

Paste the **Client ID** & **Client Secret** here. Click on the **Connect to Google Drive** button.

![Connect to Google Drive ](https://fluentsupport.com/wp-content/uploads/2024/06/Configure-Google-Drive-Settings-connect-google-drive-button.webp)

Now you have to choose an account for drive upload.

![Choose an account](https://fluentsupport.com/wp-content/uploads/2024/06/Choose-an-account-scaled.webp)

Click on **Continue** to complete the drive confirmation process.

![Continue to complete](https://fluentsupport.com/wp-content/uploads/2024/06/Continue-button-scaled.webp)

Click on the **Enable** button to end the integration process for Google Drive upload.

![Enable Google Drive](https://fluentsupport.com/wp-content/uploads/2024/06/Enable-button-final-step.webp)

### For Example

Here, you can see that a file is uploaded with a ticket reply.

![Example of Uploaded file](https://fluentsupport.com/wp-content/uploads/2024/06/Uploaded-attached-file-with-ticket-reply-scaled.webp)

Now, you will find the uploaded file stored in your **Google Drive.**

![Preview of Stored File in Google Drive](https://fluentsupport.com/wp-content/uploads/2024/06/Stored-file-in-Google-Drive-scaled.webp)

This is how you can integrate Google Drive with Fluent Support!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our**@support team**. Thank you.

---

## Google reCAPTCHA Integration

**Source:** [https://fluentsupport.com/docs/google-recaptcha-integration/](https://fluentsupport.com/docs/google-recaptcha-integration/)

**Fluent Support** allows users to integrate with **Google** **ReCaptcha** to protect their websites from spam. This article will guide you through integrating Google ReCapcha with Fluent Support.

## Accessing Google ReCapcha Console

Visit the [Google reCAPCHA](https://www.google.com/recaptcha/about/) website and click on the **v3 Admin Console**. It will take you to the “**Register a new site”** page where you can choose how to add reCaptcha to your website.

![Accessing Google ReCapcha Console](https://fluentsupport.com/wp-content/uploads/2024/06/V3-Admin-Console-scaled.webp)

First, add your **Label** & **Domain** name, select the **Score-based (v3)** or **Challenge (v2)** version, set Google Cloud Project (optional), and finally click the **Submit** button.

- **Label**: Use your **Site URL** that will make it easy to identify the site in the future.
- **Domains:** Avoid using **“https://” or “/”** in your domain name as it won’t work, but you are free to use **.com** if needed.
- **Google Cloud Platform**: You can also choose a G**oogle Cloud Project** where you want to create this reCAPTCHA.

![Register a new site](https://fluentsupport.com/wp-content/uploads/2024/06/Register-a-new-site-page-scaled.webp)

Now you will get a **Copy Site Key** and a **Copy Secret Key**. Copy these keys to use later for integration.

![Copy Site Key and a Copy Secret Key](https://fluentsupport.com/wp-content/uploads/2024/06/Copy-SIte-Key-and-Scret-Key-scaled.webp)

## Configure reCAPCHA into Fluent Support

Go to **Global Settings** from your **Fluent** **Support** **Dashboard,** click on **Recapcha** from the left menu, and press the **Enable** option.

Now, select **ReCaptcha Version (V2 or V3)**, **paste the keys** you’ve copied before under the **Site key** and **Secret key** fields, and choose where to use it (Login or Signup Form).

Finally, click on the **Save Settings.**

![Configure reCAPCHA into Fluent Support](https://fluentsupport.com/wp-content/uploads/2024/06/Global-settings-Recapcha-Save-settings-scaled.webp)

This is how you can integrate your Fluent support with reCAPCHA!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## LearnPress Integration

**Source:** [https://fluentsupport.com/docs/learnpress-integration/](https://fluentsupport.com/docs/learnpress-integration/)

**LearnPress** is also **a WordPress LMS** plugin for e-learning courses; especially, ideal for beginners wanting to launch their first course. **Fluent Support** integrates with **LearnPress** to display an overview of the **Course Purchase History** of any user, including the **Course Nam**e, **Graduation** **Progress**, **Enrollment** **Status**, and **Starting Date** on the **Ticket Entries** page after a user purchases.

This article will guide you through integrating [LearnPress](https://thimpress.com/learnpress/) with [Fluent Support](https://fluentsupport.com/).

## LearnPress Purchase Information In Your Ticket

You do not need to integrate the **LearnPress** plugin manually with **Fluent Support**; it happens automatically if the LearnDash plugin is already installed on your site.

For example, here you can see a user purchased one course from **LearnPress** and the outline of course purchase history (Course Name, Graduation Progress, Enrollment Status, and Starting Date) has automatically appeared on his ticket.

![Preview of LearnPress Integration with Fluent Support](https://fluentsupport.com/wp-content/uploads/2024/06/Learn-Press-Integration.webp)

This is how the integration of **LearnPress** with **Fluent Support** works!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## BetterDocs Integration

**Source:** [https://fluentsupport.com/docs/betterdocs-integration/](https://fluentsupport.com/docs/betterdocs-integration/)

**BetterDocs** is a user-friendly documentation and knowledge base plugin that you can integrate with **Fluent Support**. This will allow you to display relevant **Documentation** to the users when they type their issues in the Subject field of the ticket form under the Support Portal.

This article will guide you through integrating [BetterDocs](https://betterdocs.co/) with [Fluent Support](https://fluentsupport.com/).

## BetterDocs Integration With FluentSupport

To integrate **BetterDocs** into **FluentSupport**, follow the steps with screenshots below —

To ensure the **BetterDocs** integration works, it must be **installed**and**active** on your website.

From the **Fluent Support Dashboard**, go to **Global Settings,** click the  **Ticket Form Config** button and you will find the **Ticket Form Settings.**

![Ticket Form Settings from Fluent Support dashboard](https://fluentsupport.com/wp-content/uploads/2024/06/Global-settings-Ticket-Form-Config-scaled.webp)

Check the **Enable knowledge base suggestion on the ticket creation form** box to link knowledge base suggestions to the Fluent Support ticket form.

After enabling, select **docs** under **Knowledge Base post types for** displaying documentation-style articles and set the **desired number** **of** **suggested articles.**

Make sure your WordPress site has BetterDocs installed and activated to proceed.

![Enable knowledge base suggestion on the ticket creation form box](https://fluentsupport.com/wp-content/uploads/2024/06/Enable-post-type-article-limit.webp)

Once you are done, don’t forget to click on **Save Settings**.

Now, when anyone types related keywords in the ticket forms subject bar, it will show relevant documentation as suggested articles.

![Save settings to make it functional](https://fluentsupport.com/wp-content/uploads/2024/06/Save-Settings.webp)

This is how the integration of **BetterDocs** with **Fluent Support** works!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Incoming Webhook

**Source:** [https://fluentsupport.com/docs/incoming-webhook/](https://fluentsupport.com/docs/incoming-webhook/)

The **Incoming Webhook** feature of [Fluent Support](https://fluentsupport.com/) allows users to create tickets automatically from an external platform or server using a **FORM-type** request format. This article will guide you through the whole process of doing it.

## Incoming Webhook in Fluent Support

To learn the process of using Incoming Webhook, follow the steps with screenshots below —

### Get The Incoming Webhook Link

From the **Fluent Support Dashboard** go to **Global** **Settings**, select **Incoming Webhook** from the left sidebar, and you will see a webhook link on that page. Now select **Business Box** and copy the **Webhook Link** to start using it.

![Incoming WebHook from Global Settings under Fluent Support dashboard](https://fluentsupport.com/wp-content/uploads/2024/06/Global-Settings-Incoming-Webhook-select-business-nox-copy-url--scaled.webp)

### Regenerate The Webhook Link

You can also **Regenerate** the **Webhook** **Link** by clicking on the **Refresh** button. If you regenerate a new URL, you must change all your used webhook links with the new one.

![Regenerate The Webhook Link](https://fluentsupport.com/wp-content/uploads/2024/06/Regenerate-URL-refresh-icon-scaled.webp)

### How To Send Data Using Incoming Webhook

You can use any external platform that suits your needs to send data using the Incoming Webhook feature. E.g., here, I used [Postman](https://www.postman.com/) as an external platform.

To use this Incoming Webhook, choose **Post** as the **Request Method** and **Form-data** as the **Request Format**.
Then, paste the **Webhook Link,** map the **Key** field following the Incoming Webhook’s **Field Key,** and enter the appropriate **Value** that suits your needs. Finally, click on the **Send** button to create the ticket.

![Send Data Using Incoming Webhook](https://fluentsupport.com/wp-content/uploads/2024/06/send-data-using-Incoming-Webhook-postman-platform.webp)

Here, you can see a **ticket** is **created** **automatically** in Fluent Support.

![Automatically created ticket](https://fluentsupport.com/wp-content/uploads/2024/06/Ticket-Created-in-Fluent-Support.webp)

### How To Reply Ticket Using Incoming Webhook

Customers can also reply to a ticket using the incoming webhook. However, some mandatory things are required to reply to a ticket.

This includes the **Customer** **email**, **Ticket** **content**, **Ticket** **title**, and ensuring that the **Ticket** **Title** is the same as the one you used while creating the ticket. Here, you can see a reply is sent to the previously created ticket from **Postman** using **Incoming Webhook.**

![Reply Ticket Using Incoming Webhook](https://fluentsupport.com/wp-content/uploads/2024/06/Reply-ticket-using-Incoming-Webhook-postman.webp)

Here, you can see a **reply is added** to the ticket by a user in Fluent Support.

![Added reply in Fluent Support](https://fluentsupport.com/wp-content/uploads/2024/06/Replied-added-to-Fluent-Support-Portal-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Fluent Forms Integration

**Source:** [https://fluentsupport.com/docs/fluent-form-integration/](https://fluentsupport.com/docs/fluent-form-integration/)

**Fluent Forms** plugin allows you to build beautiful **Forms** for WordPress with less time and effort. You can easily create a Ticket Submission Form by integrating **Fluent Forms** with **Fluent Support**.

This article will guide you through integrating [Fluent Forms](https://fluentforms.com/) with [Fluent Support](https://fluentsupport.com/).

## Fluent Forms Integration With Fluent Support

To learn how to integrate Fluent Support with Fluent Forms, follow the steps with screenshots below —

### Enable Fluent Support Integrations

Before enabling **Fluent Support** Integrations, **Fluent Forms** must be installed and activated on your WordPress Site.

To learn how to install & activate **Fluent Forms** [click here](https://wpmanageninja.com/docs/fluent-form/getting-started-wp-fluent-form/install-wp-fluent-form/), to **create beautiful and responsive online forms with just a few clicks, go through the following steps.**

To enable Fluent Support integration, go to **Integrations** from the **Fluent Forms Dashboard,** search for **FluentSupport**, and click the **Toggle** button**.**

![Enable Fluent Support Integrations
](https://fluentsupport.com/wp-content/uploads/2024/06/Integration-search-bar-enable-scaled.webp)

### Configure Fluent Support Feed Inside A Particular Form

You must enable the **Fluent Support Feed** for a **particular form** to integrate Fluent Support. To do this follow the screenshot & GIF below —

Go to **Forms** on **Fluent Forms Dashboard**, select a specific form, and click on **Settings.**

![Settings of a particular form](https://fluentsupport.com/wp-content/uploads/2024/06/Forms-Particular-form-Settings-scaled.webp)

Click on **Configure Integrations**, press the **Add New Integration** dropdown, and select **FluentSupport Integration.**

![Enable Fluent Support Feed GIF](https://fluentsupport.com/wp-content/uploads/2024/06/Enable-Fluent-Support-Feed-drift-video.gif)

### Map All The FluentSupport Fields

After configuring FluentSupport, you will find various checkboxes and input fields that need to be mapped. To do this follow the Screenshots below —

First, give the **Feed Name** and select your preferred **Business** & **Product** from the dropdown.

![Add New FluentSupport Integration Feed popup page](https://fluentsupport.com/wp-content/uploads/2024/06/Feed-name-Business-Product.webp)

Or, check the **Enable Dynamic Product Section** to select the product based on certain conditions. To add more conditions click on the **Plus** **Icon** and to delete any existing condition click on the **Minus Icon**.

![Enable Dynamic Product Section](https://fluentsupport.com/wp-content/uploads/2024/06/Check-Enable-dynamic-product-selection.webp)

Next, map your **Input fields** with the corresponding **Ticket fields** on the left side by clicking the **Arrow Icon** on the right inside the ticket fields.

If you do not want to choose from the dropdown options, you can enter your own custom value or shortcode.

![Dropdown list for fill in the fields](https://fluentsupport.com/wp-content/uploads/2024/06/Ticket-title-content-attachment-priority.webp)

Once you are done mapping all your fields, click on the **Save Feed** to save all the settings.

![Save Feed](https://fluentsupport.com/wp-content/uploads/2024/06/Save-Feed-button.webp)

### Add That Form On A Page Using Shortcode

To add the integrated form on a specific page of your site, copy the **Shortcode** by clicking on it from the top bar, and then paste it onto the desired page.

![Shortcode to add form on a specific page](https://fluentsupport.com/wp-content/uploads/2024/06/Copy-Shortcode-scaled.webp)

This is how you can integrate Fluent Forms with Fluent Support!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Paid Membership Pro Integration

**Source:** [https://fluentsupport.com/docs/paid-membership-pro-integration/](https://fluentsupport.com/docs/paid-membership-pro-integration/)

**Paid Memberships Pro** is a popular free membership/subscription plugin for **WordPress**. **Fluent Support** integrates with **Paid Memberships Pro** to display an overview of the **Membership** details of a user, including the **Membership Level** and **Membership Starting Date** on the **Ticket Entries** page, who purchases this plugin.

This article will guide you through integrating [Paid Memberships Pro](https://www.paidmembershipspro.com/) with [Fluent Support](https://fluentsupport.com/).

## Paid Memberships PRO Purchase Information In Your Ticket

You do not need to integrate the **Paid Memberships Pro** plugin manually with **Fluent Support**; it happens automatically if the Paid Memberships Pro plugin is already installed on your site.

For example, here you can see a user purchased the **Paid Memberships Pro** plugin, and the outline of his membership details (Membership Level and Membership Starting Date) has automatically appeared on his ticket.

![Preview of Paid-Membership Pro Integration with Fluent Support](https://fluentsupport.com/wp-content/uploads/2024/06/Paid-Membership-Pro-Integration-Fluent-Support.webp)

This is how the integration of **Paid Memberships Pro** with **Fluent Support** works!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Restrict Content Pro Integration

**Source:** [https://fluentsupport.com/docs/restrict-content-pro-integration/](https://fluentsupport.com/docs/restrict-content-pro-integration/)

**Restrict Content Pro** lets you create unlimited subscriptions, manage members, track payments, and more. **Fluent Support** integrates with **WishList Member** to display an overview of the **Membership** details of a user, including the **Membership Level,** **Membership Status,** and **Membership Activation Date** on the **Ticket Entries** page, who purchases this plugin.

This article will guide you through integrating [Restrict Content Pro](https://restrictcontentpro.com/) with [Fluent Support](https://fluentsupport.com/).

## Restrict Connect Pro Purchase Information In Your Ticket

You do not need to integrate the **Restrict Content Pro** plugin manually with **Fluent Support**; it happens automatically if the Restrict Content Pro plugin is already installed on your site.

For example, here you can see a user purchased the **Restrict Connect Pro** plugin and the outline of his membership details (Membership Level, Membership Status, Membership Activation Date) has automatically appeared on his ticket.

![Preview of Restrict Connect Pro Integration with Fluent Support](https://fluentsupport.com/wp-content/uploads/2024/06/Restrict-Content-Pro-Integration-Fluent-Support.webp)

This is how the integration of **Restrict Content Pro** with **Fluent Support** works!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## WishList Member Integration

**Source:** [https://fluentsupport.com/docs/wishlist-member-integration/](https://fluentsupport.com/docs/wishlist-member-integration/)

With the **WishList Member** plugin, you can easily create online courses, launch a monthly membership, sell digital downloads, and many more. **Fluent Support** integrates with **WishList Member** to display an overview of the **Membership** details of a user, including the **Membership Level** and **Membership Status** on the **Ticket Entries** page, who purchases this plugin.

This article will guide you through integrating [WishList Member](https://wishlistmember.com/) with [Fluent Support](https://fluentsupport.com/).

## WishList Member Purchase Information In Your Ticket

You do not need to integrate the **WishList Member** plugin manually with **Fluent Support**; it happens automatically if the WishList Member plugin is already installed on your site.

For example, here you can see a user purchased the **WishList Member** plugin and the outline of his membership details (Membership Level and Membership Status) has automatically appeared on his ticket.

![Preview of WishList Member Integration with Fluent Support](https://fluentsupport.com/wp-content/uploads/2024/06/WishList-Member-Integration-Fluent-Support.webp)

This is how the integration of **WishList** **Member** with **Fluent Support** works!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## BuddyBoss Integration

**Source:** [https://fluentsupport.com/docs/buddyboss-integration/](https://fluentsupport.com/docs/buddyboss-integration/)

BuddyBoss is an open-source solution for building online communities with less time and effort. Fluent Support integrates BuddyBoss to display an overview of a user’s BuddyBoss group information, including **Group Name** and **Joining Date** on the **Ticket Entries** page after a user purchases this plugin.

This article will guide you through integrating [BuddyBoss](https://www.buddyboss.com/) with [Fluent Support](https://fluentsupport.com/).

## BuddyBoss Purchase Information In Your Ticket

You do not need to integrate the **BuddyBoss** plugin manually with **Fluent Support**; it happens automatically if the BuddyBoss plugin is already installed on your site.

For example, here you can see a user purchased the **BuddyBoss** plugin and the outline of his group information (Group Name and Joining Date) has automatically appeared on his ticket.

![Preview of BuddyBoss Integration with Fluent Support](https://fluentsupport.com/wp-content/uploads/2024/06/BuddyBoss-Integration-Fluent-Support-1-5.50.14-PM.webp)

This is how the integration of **BuddyBoss** with **Fluent Support** works!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## TutorLMS Integration

**Source:** [https://fluentsupport.com/docs/tutorlms-integration/](https://fluentsupport.com/docs/tutorlms-integration/)

**TutorLMS** is a great **WordPress** **LMS** free plugin, with all the necessary features to create, manage, and sell e-learning courses. **Fluent Support** integrates with **Tutor LMS** to display an overview of the **Course Purchase History** of any user, including the **Course Name** and **Enrollment Status** on the **Ticket Entries** page after a user purchases.

This article will guide you through integrating [TutorLMS](https://www.themeum.com/product/tutor-lms/) with [Fluent Support](https://fluentsupport.com/).

## Tutor LMS Purchase Information In Your Ticket

You do not need to integrate the **TutorLMS** plugin manually with **Fluent Support**; it happens automatically if the TutorLMS plugin is already installed on your site.

For example, here you can see a user purchased a course from **TutorLMS** and the outline of course purchase history (Course Name and Enrollment Status) has automatically appeared on his ticket.

![Preview of TutorLMS Integration with Fluent Support](https://fluentsupport.com/wp-content/uploads/2024/06/Tutor-LMS-Integration-scaled.webp)

This is how the integration of **Tutor LMS** with **Fluent Support** works!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## WooCommerce Integration

**Source:** [https://fluentsupport.com/docs/woocommerce-integration/](https://fluentsupport.com/docs/woocommerce-integration/)

**WooCommerce** is a customizable, open-source eCommerce platform for **WordPress**that allows support agents to view the **purchase** **history** of any WooCommerce product user and allows customers to open tickets through Fluent Support for issues related to specific WooCommerce products or orders.

This article will guide you through integrating [WooCommerce](https://woocommerce.com/) with [Fluent Support](https://fluentsupport.com/).

## WooCommerce Integration With FluentSupport

To integrate WooCommerce into Fluent Support, follow the steps with screenshots below —

You don’t need to perform any integration yourself. It will happen automatically if the **WooCommerce** plugin is already installed on your site.

### WooCommerce Product Information in your Ticket

If you click on the **Product ID** under a specific ticket, a pop-up will appear that includes all the information about the product purchase.

To get the product information in your tickets as shown in the screenshot below, you must **Create Custom Fields** in your **Fluent Support** site for **WooCommerce**.

![WooCommerce Product Information in your Ticket](https://fluentsupport.com/wp-content/uploads/2024/06/Product-ID-click-scaled.webp)

You will find Billing details, Shipping details, Product details, and Price in this pop-up here.

![Billing, Shipping, Product & Price details](https://fluentsupport.com/wp-content/uploads/2024/06/Billing-Info-scaled.webp)

### Create Custom Fields for WooCommerce

From the **Fluent** **Support** **Dashboard, g**o to **Global Settings**, select **Custom Fields**, and click the **+ Add New Field** button.

![Custom Fields from Global Settings under Fluent Support dashboard](https://fluentsupport.com/wp-content/uploads/2024/06/Global-settings-custom-fields-add-new-field.webp)

Choose the **Field Type** from the dropdown menu that suits your needs (**WooCommerce Products** or **WooCommerce Orders)** and click the **Add** button.

Make sure your WordPress site has WooCommerce installed and activated to proceed.

![Field Type dropdown list](https://fluentsupport.com/wp-content/uploads/2024/06/Field-Type.webp)

Give your **Field Type** a name and configure additional fields as necessary. Also, you can enable the **Conditional logic** if required. To save all the settings, click the **Add** button.

![Add New Custom Field popup page](https://fluentsupport.com/wp-content/uploads/2024/06/Configure-additional-settings-scaled.webp)

Your **WooCommerce custom field** will now be visible on your support portal, as shown below.

![Preview of WooCommerce Custom Field in Support Portal](https://fluentsupport.com/wp-content/uploads/2024/06/Support-portal.webp)

This is how th**e** integration of **WooCommerce** with **Fluent Support** works!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## LearnDash Integration

**Source:** [https://fluentsupport.com/docs/learndash-integration/](https://fluentsupport.com/docs/learndash-integration/)

**LearnDash** is a worldwide trusted **WordPress LMS** plugin for creating (and selling) their online courses. **Fluent Support** integrates with **LearnDash** to display an overview of the **Course Purchase History** of any user, including the **Course Name** and **Enrollment Status** on the **Ticket Entries** page after a user purchases.

This article will guide you through integrating [LearnDash](https://www.learndash.com/learndash-lms/) with [Fluent Support](https://fluentsupport.com/).

## LearnDash Purchase Information In Your Ticket

You do not need to integrate the **LearnDash** plugin manually with **Fluent Support**; it happens automatically if the **LearnDash** plugin is already installed on your site.

For example, here you can see a user purchased three courses from **LearnDash Courses** and the overview of course purchase history (Course Name and Enrollment Status) has automatically appeared on his ticket.

![Preview of LearnDash Integration with Fluent Support](https://fluentsupport.com/wp-content/uploads/2024/06/LearnDash-Integration-scaled.webp)

This is how the integration of **LearnDash** with **Fluent** **Support** works!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## LifterLMS Integration

**Source:** [https://fluentsupport.com/docs/lifterlms-integration/](https://fluentsupport.com/docs/lifterlms-integration/)

**LifterLMS** is a powerful **WordPress LMS** plugin to easily create, sell, and secure engaging online courses and training-based membership websites. **Fluent Support** integrates with **Lifter LMS** to display an overview of the **Course Purchase History** of any user, including the **Course Name** and **Enrollment Status** on the **Ticket Entries** page after a user purchases.

This article will guide you through integrating [LifterLMS](https://lifterlms.com/) with [Fluent Support](https://fluentsupport.com/).

## LifterLMS Purchase Information In Your Ticket

You do not need to integrate the **LifterLMS** plugin manually with **Fluent Support**; it happens automatically if the LifterLMS plugin is already installed on your site.

For example, here you can see a user purchased two courses from **LifterLMS** and the outline of course purchase history (Course Name and Enrollment Status) has automatically appeared on his ticket.

![Preview of LifterLMS Integration with Fluent Support](https://fluentsupport.com/wp-content/uploads/2024/06/LifterLMS-integration-scaled.webp)

This is how the integration of **LifterLMS** with **Fluent Support** works!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Easy Digital Downloads (EDD) Integration

**Source:** [https://fluentsupport.com/docs/edd-integration/](https://fluentsupport.com/docs/edd-integration/)

**Easy Digital Downloads (EDD)** is a platform where you can easily manage store and sell products from WordPress. **Fluent Support** integrates with **EDD** to display a user’s purchase history, including **Product Name, Purchase Status,** and **Product Price** on the **Ticket Entries** page after a user purchases EDD.

This article will guide you through integrating [Easy Digital Downloads](https://easydigitaldownloads.com/) with [Fluent Support](https://fluentsupport.com/).

## EDD Product Information in your Ticket

You don’t need to perform any integration yourself. It will happen automatically if the **Easy Digital Downloads (EDD)** plugin is already installed on your site.

For example, when a support agent clicks on the **Eye Icon** next to the product price, he/she can view the user’s EDD purchase history with detailed information.

![Preview of Easy Digital Downloads (EDD) Integration with Fluent Support  ](https://fluentsupport.com/wp-content/uploads/2024/06/Easy-Digital-Dwnloads.webp)

This is how the integration of **Easy Digital Download** with **Fluent Support** works!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## FluentCRM Integration

**Source:** [https://fluentsupport.com/docs/fluentcrm-integration/](https://fluentsupport.com/docs/fluentcrm-integration/)

Fluent CRM is a self-hosted **Email** M**arketing** A**utomation** plugin for **WordPress** that you can easily integrate with your **Fluent Support**.

This article will guide you through the process of integrating [FluentCRM](https://fluentcrm.com/) into [Fluent Support](https://fluentsupport.com/).

## Fluent CRM Integration With Fluent Support

To learn how to integrate Fluent CRM into Fluent Support, follow the steps with the screenshots below —

Go to **Global Settings** from your **Fluent** **Support** **Dashboard,** click the **FluentCRM Integration** from the left menu, and check the **Enable FluentCRM Integration** option.

Remember to set up the **Fluent** **CRM** integration, you must **Install** **and Activate** the **Fluent** **CRM** plugin in your **WordPress** site first. To learn the process of doing it, read this [Documentation](https://fluentcrm.com/docs/how-to-install-upgrade-and-activate-license/).

![Enable FluentCRM Integration option.](https://fluentsupport.com/wp-content/uploads/2024/06/Fluent-CRM-Settings-enable.webp)

Now, set the default status for new contacts. If you choose **Pending**, a double-opt-in email will be sent to new contacts.

Also, you can add the user to your **FluentCRM** **List** or include your users in various **Tags** using the dropdown menus by clicking the **arrow icon.** Once your integration set-up is complete, click on the **Save Settings** button.

![Fluent CRM Integration Settings options](https://fluentsupport.com/wp-content/uploads/2024/06/Default-status-dropdown-menus-save-settings.webp)

This is how you can complete the FluentCRM integration with Fluent Support!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

