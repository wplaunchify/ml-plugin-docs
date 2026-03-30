# Settings

*Category from FluentBoards documentation*

---

## Outgoing Webhooks

**Source:** [https://fluentboards.com/docs/outgoing-webhooks/](https://fluentboards.com/docs/outgoing-webhooks/)

The Outgoing Webhooks feature in Fluent Boards provides a powerful way to connect your project management workflow with thousands of other applications and services. By using webhooks, you can send real-time data from your boards to external platforms, enabling automation and integration.

This guide will provide a detailed overview of how to configure and manage Outgoing Webhooks within Fluent Boards.

**Common Use Cases:**

- **Real-time Notifications:** Send a message to a Slack or Discord channel when a new task is assigned.
- **Workflow Automation:** Use services like Zapier or Make to trigger multi-step workflows, such as creating a Google Calendar event when a task’s stage is changed.
- **Data Logging:** Add a new row to a Google Sheet or Airtable base every time a task is completed, creating a log of your team’s accomplishments.
- **Custom Integrations:** Send task data to a custom-built application or a third-party API for advanced processing.

## Configuration Steps

Configuring your webhook is a straightforward process.

#### Step 1: Navigate to the Webhook Settings

1. From your WordPress Admin Dashboard, navigate to **Fluent Boards → Settings**.
2. Select the **Outgoing Webhooks** tab from the left-hand menu.

![screenshot 2025 09 18 at 5.14.58 pm](https://fluentboards.com/wp-content/uploads/2025/09/Screenshot-2025-09-18-at-5.14.58-PM.png)

This screen is your main dashboard for managing all created webhooks. You can view their status, see which events trigger them, and perform actions like editing or deleting them.

#### Step 2: Create a New Webhook

Click the **“+ Add Webhook”** button to open the configuration form. Below is a detailed explanation of each field.

**Status:**This is the main on/off switch for your webhook. Turn it on when you want it to work.

**Name:**Give your webhook a simple name so you remember what it does. For example: Send new tasks to my team.

**Webhook URL:**This is the special link you get from the other app (like Slack or Zapier). Just **copy that link and paste it here**.

**Board:**Choose **which project board** this webhook should watch. It will only pay attention to the board you select.

**Request Method & Request Format:**You can **safely ignore these**. The default settings (POST and JSON) are what you need.

**Request Header:**This is an advanced option for security. Think of the “With Headers” section as adding a secret password or an ID badge to your message so the receiving application knows it’s really you.

- **Header Name:** This is the *type* of ID the other app is looking for. The app will tell you exactly what to enter here, for example, Authorization or X-API-Key.
- **Header Value:** This is your actual *secret key or password*. You will copy this from the other service and paste it here.

**You can usually leave this alone.**

**Events To Trigger:** This is where you choose which actions on your board will send the data. You have two main options:

- **Send everything.:** Select this option if you want the webhook to fire for every single event that happens on the board.
- **Select individual events.:** Select this to choose specific events. Only the events you check will send data.

If you choose **Select individual events**, you can check the box next to the specific actions you want to monitor:

- **Task Created:** Triggers when a new task is made.
- **Task Stage Changed:** Triggers when a task is moved to a different stage.
- **Task Closed:** Triggers when a task is marked as complete.
- **Task Archived:** Triggers when a task is archived.
- **Task Date Changed:** Triggers when a task’s due date is added or updated.
- **Task Priority Changed:** Triggers when a task’s priority is changed.
- **Task Label Added:** Triggers when a label is added to a task.
- **Stage Added:** Triggers when a new stage (column) is created on the board.
- **Comment Added:** Triggers when a new comment is added to a task.
- **Assignee Added:** Triggers when a user is assigned to a task.

![events to trigger](https://fluentboards.com/wp-content/uploads/2025/09/events-to-trigger.webp)

After filling out the form, click **Save**. Your webhook is now configured and, if set to “Active”, will begin monitoring your board for the specified trigger events.

#### Managing Existing Webhooks

Once you have created one or more webhooks, they will be listed on the **Outgoing Webhook Settings** dashboard. This central view allows you to see and manage all of your configured integrations at a glance.

Each row in the list provides a summary of the webhook’s configuration:

- **Name:** The custom name you assigned to the webhook.
- **Request URL:** The destination URL where the data is sent.
- **Triggered Events:** The specific events that will trigger this webhook.
- **Board:** The project board the webhook is associated with.
- **Status:** A label indicating whether the webhook is currently **Active** or **Inactive**.

**Action Buttons**

- **Edit Button:** If you need to make a change, like updating the URL or adding a new trigger, click this button.
- **Delete Button:** If you no longer need a webhook, click this to permanently remove it.

![outgoing webhook 3](https://fluentboards.com/wp-content/uploads/2025/09/outgoing-webhook-3-scaled.webp)

---

## Daily Reminder Settings

**Source:** [https://fluentboards.com/docs/daily-reminder-settings/](https://fluentboards.com/docs/daily-reminder-settings/)

In FluentBoards, the General Settings section allows you to configure task reminders for **Overdue** tasks. This feature sends automatic email notifications to users about their board tasks. Both WordPress Administrators and FluentBoards Admins can enable and manage these reminders to ensure tasks are completed on time.

## General Settings

Navigate to FluentBoards **Settings** from the navbar. Next, click on the **General Settings** tab in the left sidebar. Here, you’ll find the General Settings options.

**Enable Daily Reminder:**First, enable daily reminder by clicking on the **Toggle** button.

**Set Daily Reminder Time:** Next set a daily reminder time. This section works only when you enable daily reminders.

Now click on the **Save** button to save the settings.

![fluentboards](https://fluentboards.com/wp-content/uploads/2024/07/FluentBoards-scaled.webp)

## Run Daily Reminder with Scheduled Action

You can send your Daily Reminder email notification anytime using WordPress Scheduled Action. To do this, go to your WordPress dashboard, hover over **Tools**, and select **Scheduled Actions**.

![scheduled action](https://fluentboards.com/wp-content/uploads/2024/07/Scheduled-Action.webp)

Search for the *fluent_boards/daily_task_reminder*and click on the **Run** button. Your daily task reminder email notification will now be sent to the task assignee.

![scheduled action run daily reminder](https://fluentboards.com/wp-content/uploads/2024/07/Scheduled-Action-Run-Daily-Reminder-scaled.webp)

So, this is how you can set a reminder for your task assignees. If you have any queries then contact our [support](https://wpmanageninja.com/support-tickets/) team.

---

## Creating Tasks via Incoming Webhooks

**Source:** [https://fluentboards.com/docs/incoming-webhook/](https://fluentboards.com/docs/incoming-webhook/)

Webhooks allow you to receive data from third parties without writing code or running a server. FluentBoards provides an incoming webhook feature that enables you to create new tasks on your boards.

With this feature, you can assign tasks, add labels, set dates, and utilize other functionalities to complete your tasks. Additionally, you can associate CRM contacts with tasks, streamlining your workflow and ensuring all relevant information is integrated.

This guideline will show you how to add tasks using the webhook feature in just a few simple steps.

## Adding Webhook

First, go to the **Settings** of your FluentBoards. On the left sidebar, select the **Incoming Webhook** option.

Next, click the **Add Webhook** button to create your webhook.

![fluentboards webhook](https://fluentboards.com/wp-content/uploads/2024/05/FluentBoards-Webhook-scaled.webp)

A pop-up will appear from the right side where you need to enter a **Webhook Name**. Then, select the **Board** where the task will be saved and choose the **Default Stage**. Now, click the **Create** button.

![create new webhook](https://fluentboards.com/wp-content/uploads/2024/05/Create-New-Webhook-scaled.webp)

Your webhook is now created, and you can copy the webhook URL. Copy the keys from the Key column to map your data and send it to the desired contact fields.

![webhook configuration](https://fluentboards.com/wp-content/uploads/2024/05/webhook-configuration-scaled.webp)

Below in the field section, you’ll find the essential **Key** for associating FluentCRM contacts with your task. You can link your CRM contacts by their *ID, email, first name,*and *last name*. Click the Update button to preserve all your modifications.

![crm webhook fluentboards](https://fluentboards.com/wp-content/uploads/2024/05/CRM-Webhook-FluentBoards-scaled.webp)

Within the **Incoming Webhook** feature of your FluentBoards, you’ll find a list of all generated incoming webhooks. To view the details of a specific webhook, simply click on the arrow icon with it.

Additionally, next to each webhook, you’ll find a **Copy** button for copying the webhook and an **Edit** icon button to modify the webhook settings. If you wish to remove a webhook, just click on the **Delete** icon button.

![dashboard webhook fluentboards](https://fluentboards.com/wp-content/uploads/2024/05/Dashboard-Webhook-FluentBoards-scaled.webp)

## Creating a Task using a third-party platform

In this process, we’ll use [Postman](https://web.postman.co/) to generate a task with the webhook. Access your [Postman account](https://web.postman.co/). Paste your webhook URL in the **POST** field here.

Remember, it’s mandatory to include the **Title Key**. Then, add the necessary keys based on your mapping needs. Once all adjustments are made, click on the **Send** button to initiate the task creation.

![postman](https://fluentboards.com/wp-content/uploads/2024/05/POSTMAN-scaled.webp)

Navigate to the board where you’ve designated task creation from the webhook, and you’ll observe the task successfully appended to your boards.

![webhook created post](https://fluentboards.com/wp-content/uploads/2024/05/Webhook-created-Post-scaled.webp)

This method shows how to generate tasks using a webhook.

---

## Setting Up the Frontend Portal

**Source:** [https://fluentboards.com/docs/frontend-portal-settings/](https://fluentboards.com/docs/frontend-portal-settings/)

With FluentBoards, you can establish a frontend portal. This feature enables your board members to log in directly from the frontend of your website using the FluentBoards frontend portal.

### Enable Frontend Portal

Go to the FluentBoards **Settings** and choose **Feature and Modules** from the left sidebar. Within this section, locate the option for the **Frontend Portal**. Click on the **Settings** button next to the Frontend Portal option.

![enable frontend portal](https://fluentboards.com/wp-content/uploads/2024/05/enable-frontend-portal-scaled.webp)

### Frontend Portal Setup

A pop-up will appear. Now, check the **Enable Frontend Portal** checkbox.

Next, under **“Via Shortcode / Dedicated Page?”**, choose how you want to display the portal on your site.

If you select **Show in a standalone Frontend URL**, enter a **URL Slug** for your portal. It will be the custom link visitors use to access the portal. After entering the slug, click the **Save Settings** button.

![frontend url](https://fluentboards.com/wp-content/uploads/2024/05/Frontend-URL-scaled.webp)

If you prefer an existing page, select **Use a pre-defined page via shortcode** from the dropdown option. Then, choose the page you want and add the shortcode **[fluent_boards]**. Once you’ve done this, click the **Save Settings**button.

![via shortcode](https://fluentboards.com/wp-content/uploads/2024/05/Via-Shortcode-scaled.webp)

### Frontend Portal Login

You’ll see a login page on your website where your board members need to log in using their WordPress **User ID** and **Password**.

![portal login](https://fluentboards.com/wp-content/uploads/2024/05/Portal-login.webp)

That’s the process for enabling the Frontend portal for your FluentBoards. If you have any further questions, feel free to [contact us](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Customizing Card View Preferences

**Source:** [https://fluentboards.com/docs/card-view-preference-settings/](https://fluentboards.com/docs/card-view-preference-settings/)

To enhance the effectiveness of your Task Card View, you can personalize the information displayed. Here’s how you can customize your Task Card View:

Go to your FluentBoards Dashboard and click on your **Profile**from the top right corner.

![cardview 1](https://fluentboards.com/wp-content/uploads/2025/02/CardView-1-scaled.webp)

Your profile will appear, now click on **Preference** from the left sidebar. Next, you’ll see the **Card View** option click on it. Here, you’ll find all the settings for viewing your cards. Simply toggle to enable or disable the options as needed. Finally, click the **Save** button to apply your changes.

![cardview 2](https://fluentboards.com/wp-content/uploads/2025/02/CardView-2-scaled.webp)

As an example, we’re displaying a task card below.

![card](https://fluentboards.com/wp-content/uploads/2024/05/Card.webp)

That’s all it takes to personalize your FluentBoards Card View.

---

## Adjusting FluentBoards Position in WordPress

**Source:** [https://fluentboards.com/docs/fluentboards-menu-position-in-wordpress/](https://fluentboards.com/docs/fluentboards-menu-position-in-wordpress/)

You can customize the position of FluentBoards in your WordPress Dashboard. You can Keep your FluentBoards plugin in your WordPress left sidebar also you can keep your project management tool FluentBoards in the FluentCRM menu.

In this guideline, we will show you how you can customize the FluentBoards position.

First, go to your FluentBoards and select **Settings>Feature & Module**. Here the **Menu Position** option is available.

Select the **Settings** of **Menu Position**.

![adjust menu position](https://fluentboards.com/wp-content/uploads/2024/05/Adjust-menu-position-scaled.webp)

## Append In FluentCRM Menu

A popup will appear. If you want to keep your FluentBoards in the FluentCRM plugin menu then select the **Append in FluentCRM Menu**.

![append in fluentcrm](https://fluentboards.com/wp-content/uploads/2024/05/append-in-FluentCRM-scaled.webp)

## Show as Standalone

To show the FluentBoards in your WordPress left sidebar Menu select **Show as Standalone** and select the **Menu** **Position** **Priority**.

![show as standalone](https://fluentboards.com/wp-content/uploads/2024/05/show-as-standalone-scaled.webp)

Lastly, click on the **Save Settings** button to save.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/) team.

---

## Configuring Notification Settings

**Source:** [https://fluentboards.com/docs/notification-settings/](https://fluentboards.com/docs/notification-settings/)

FluentBoards Notification Settings give you control over how and when you receive notifications for your board updates. You can customize notifications to match your workflow, choosing alerts for specific actions like task assignments, comments, or due date changes.

This guide will show you how to configure notification settings for individual tasks and entire boards, helping you stay updated.

## Email Notification Settings

To enable or disable your notification settings, navigate to the **Fluent Boards** dashboard section then click on the **Profile Image**in the navbar to access your **Accounts** settings. Now click on the **Preference** in the left sidebar.

Select the **Notifications** here to see the notification settings. The **Enable All**button allows you to enable or disable all notifications. Toggle the switch for specific notifications and click **Save** to apply your changes.

Here, you’ll find various types of options for receiving notifications, which include:

- **Watch created tasks**: Receive notifications for tasks or cards you create on your board.
- **Watch on commenting**: Receive notifications when you comment or reply to a task.
- **Watch on assigning**: If you enable this, you’ll receive notifications when you assign someone to a task.
- **Comment**: Receive notifications when new comments are added to a task you are watching.
- **Stage Changed**: Receive notifications when the stage of a task you’re watching changes.
- **Assigned to a task**: Receive notifications when assigned a new task.
- **Dates**: Receive notifications when the dates of a task you are watching is updated.
- **Task Archived**: Receive notifications when a task you are watching is archived.
- **Removed from a task**: Receive notifications when you are removed.

![notification settings](https://fluentboards.com/wp-content/uploads/2024/05/Notification-Settings-scaled.webp)

## Board Notification Settings

You have the option to get notifications for specific boards as well. To do this, navigate to the board for which you want to customize notifications. Then, click on the **Board Menu** button in the right corner. Here appears a new popup, select the **Notification Settings** from here.

![marketing board fluentboards 1](https://fluentboards.com/wp-content/uploads/2024/09/Marketing-Board-FluentBoards-1-scaled.webp)

Here also arrives a new popup. You can personalize the notifications for this particular board according to your preferences.

**Comment:**Get alerts when someone leaves a new comment on a task you’re watching.

**Stage Changed:**Get alerts when a task you’re following reaches a new stage.

**Assigned to a task:**Get alerts whenever a new task is given to you.

**Dates:**Get alerts when a task you are following updates in terms of its dates.

**Task Archived:**Get alerts when a task you are following updates regarding its due date.

**Removed from a task:**Get alerts when a task is taken away.

When all the settings are done well then click the **Save** button for notification changes.

![board notification settings](https://fluentboards.com/wp-content/uploads/2024/05/Board-Notification-settings-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/) team.

---

## Managing Member Roles

**Source:** [https://fluentboards.com/docs/member-roles/](https://fluentboards.com/docs/member-roles/)

With FluentBoards you can add Members and manage them for your boards very easily. Follow this documentation to learn everything about team management in your FluentBoards.

## Members Role Global Setting

Go to the **Settings** of your FluentBoards and you will be able to see the **Member Role**. Here you can see all the members of yours. Also, you can add members from here by clicking on the **Add Member** button.

Click on the **Manage** button from the right side of the Members.

![member 1](https://fluentboards.com/wp-content/uploads/2024/05/Member-1-scaled.webp)

A pop-up will appear showing the role of that member in all boards. You can change the role of the member for each board from here. Click on the dropdown button to select the role. To promote a user to FluentBoards Admin, click on the **Promote to FluentBoards Admin** button.

We are describing all the roles within FluentBoards:

**WordPress Administrator:** WordPress Administrators have full access to FluentBoards.

**FluentBoards Admin:** This role has complete access to FluentBoards. WordPress Administrator can set the FluentBoards Admin. FluentBoards Admin can set another WordPress user to FluentBoards Admin and any WordPress user role can be the FluentBoards Admin.

**Admin/Manager:**An Admin or Manager can manage only those boards where they have been designated as Admin or Manager by a WordPress Administrator or FluentBoards Admin. Admin or Manager can be selected from any WordPress user role.

Admin/ Manager can’t create new boards they can only manage their boards where they are assigned as an Admin/ Manager. They also have the ability to delete boards, add members on boards, and add another Admin/Manager on boards.

**Members:** The roles mentioned above (WordPress Administrator, FluentBoards Admin, Admin/Manager) can add any WordPress user as a member to a board. Members have access only to the boards to which they are assigned. Members cannot delete or create boards. They can only manage board tasks and assign members to board tasks.

![member role ](https://fluentboards.com/wp-content/uploads/2024/05/Member-Role-.png)

This is how you can manage your member role. If you have any queries feel free to [contact us](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

