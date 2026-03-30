# Ticket Management Using Third Parties

*Category from Fluent Support documentation*

---

## Managing Tickets Using WhatsApp

**Source:** [https://fluentsupport.com/docs/whatsapp-integration-via-twilio/](https://fluentsupport.com/docs/whatsapp-integration-via-twilio/)

[Fluent Support](https://fluentsupport.com/) allows you to manage your tickets using **WhatsApp**. You can see your New Tickets notification in your **WhatsApp** account and reply to your ticket from this. This article will guide you in setting up **WhatsApp** integration with **FluentSupport**.

## Fluent Support Twilio Settings

To learn how to manage your Tickets using Twilio (WhatsApp), follow the steps with the screenshots below –

### Sign Up On Twilio

First, you’ll need a **Twilio** account to get started, go to their [website](https://www.twilio.com/) and **sign up for a free account.**
You will also need an **Email** **Address** and a **verified mobile** **number** to start with their free trial. So make sure to use a number you have access to.

### Get The Account SID And Auth Token From Twilio

Once you finish the signup and all Twilio Console configurations, you will get the **Account SID** and **Auth Token** for the **Twilio account** from the **Console** **page**. Now, copy this to use it later.

![Account SID And Auth Token From Twilio](https://fluentsupport.com/wp-content/uploads/2024/06/Account-SID-and-Auth-Token-scaled.webp)

### Get The WhatsApp Number from Twilio

Once you’re done copying the Twilio Console information, it’s time to get the **WhatsApp number**.

Go to **Messaging** in the left-hand sidebar from the Console, expand the **Try it out** dropdown, and Select**Send a WhatsApp Message.**
After enabling the Sandbox, Twilio provides a **WhatsApp** **Number** and a **Code**.

![WhatsApp Number from Send a WhatsApp message under Twilio](https://fluentsupport.com/wp-content/uploads/2024/06/Get-Whatsapp-number-from-Messaging-tab-under-send-a-whatsapp-message-scaled.webp)

But, before using this number, you have to set up the **WhatsApp Sandbox**. To **learn how to set up** WhatsApp Sandbox, follow the steps with screenshots below –

#### Setup WhatsApp Sandbox

Now, **create** a **WhatsApp contact with this number** and **send** the provided **code** from your desired **WhatsApp** **Account**.
This will **return a notification** to your **Twilio** **WhatsApp** **chat**.

![provided code in whatsApp contact](https://fluentsupport.com/wp-content/uploads/2024/06/Send-provided-code-in-whatsapp-contact-1.webp)

Also, a **message** **received** **notification** will **appear** in the **Sandbox**.

To begin a business-initiated chat, **select** one of our **pre-approved** **templates** from the **Message Template** dropdown list just by clicking the **Arrow Icon**, and after selection click the **Send template message** button.

You can engage your users in business-related dialogue at this phase. The use of pre-approved templates was needed for business-initiated interactions up to the user’s response.

Now, click the  **Next step** and go to the **User-initiated conversation** page.

![Pre-approved templates & next step button](https://fluentsupport.com/wp-content/uploads/2024/06/Pre-approved-templates-next-step-button-1.webp)

And, this will show as another **Message notification**in the**Sandbox**.
But to get the message notification, you should **reply** to the**previously sent template message**from your**WhatsApp account**.

![Send a Reply from Twilio](https://fluentsupport.com/wp-content/uploads/2024/06/Send-A-Reply-from-Twilio-2.webp)

From here, you can also **send** **messages** to **Twilio WhatsApp chat**. 
Now, again click the  **Next step** and go to the **Wrap-up** page.

![User-intended conversation page](https://fluentsupport.com/wp-content/uploads/2024/06/User-intended-conversation-page-2.webp)

On this page, you will see that configuring****your**WhatsApp Sandbox**is done**.**

![Wrap up page](https://fluentsupport.com/wp-content/uploads/2024/06/Wrap-up-page.webp)

## Configure Whatsapp (Twilio) in Fluent Support

Go to **Settings** or **Global Settings** from the **Fluent Support Dashboard** and select **Notification Integrations** from the left sidebar to find the **Twilio** option. Open the **Twilio Integration Settings**page**.**

Now fill in all the fields with the necessary information (**Account SID**, **Auth Token**, and **WhatsApp** **Number**) that you have copied before. You can **enable the checkboxes** if needed.

Once you are done, do not forget to click the **Save Twilio Settings** button.

![Twilio Integration Settings](https://fluentsupport.com/wp-content/uploads/2024/06/Twilio-Integration-Settings-2-scaled.webp)

**A brief explanation of other options mentioned above –**

- **Notification Events:** Using this option, choose for which instances you want to be notified through Twilio. The available notification events are – **Ticket Created**, **Ticket Closed**, **Replied by Customer**, and **Ticket** **Assigned** **To** **Agent**.
- **Enable Twilio Integration:** Enable this option, to get the two other options for enabling replies from WhatsApp through agents.
- **Enable Reply From WhatsApp (Agent can directly reply from Telegram):**You can also enable this option so that your support agents can directly reply from WhatsApp. To **enable this** you need to **copy the provided URL** and paste it to **When a message comes in** field under the **Sandbox Settings** tab in Twilio.
- **Fallback Agent for reply from WhatsApp message:**Using this option, you can select a specific fallback agent from the dropdown list for replies from WhatsApp messages.

## Reply Tickets From WhatsApp

To reply to any tickets direcly from WhatsApp, follow the steps with screenshots below –

Go to****the**Sandbox Settings** tab from this page and **paste the URL** that you have copied before from the **Twilio Integration Settings**page inside the **WHEN A MESSAGE COMES IN** field.

Then, copy the **WhatsApp Number** from the  **Sandbox Participants.**

![Sandbox Settings](https://fluentsupport.com/wp-content/uploads/2024/06/Sanbox-Settings-1.webp)

Now, again go back to **Settings** from **Fluent Support** **Dashboard** and open the **Support Staff**settings option from the left sidebar. Click the **Pencil Icon** of your **desired agent**you want to give access to reply.

![Support Staff](https://fluentsupport.com/wp-content/uploads/2024/06/Support-Staff-1-scaled.webp)

Scroll down to **Twilio Integration** and paste the **WhatsApp Number** you copied before. Then, hit the **Update** button.

Make sure to include the **Country Code** when adding this number. Now you can receive ticket notifications on the Twilio chat in WhatsApp and submit responses by replying to the ticket notifications.

![WhatsApp number field](https://fluentsupport.com/wp-content/uploads/2024/06/WhatsApp-number-field-inside-Twilio-Integration-1.webp)

**Note:**To reply to any specific tickets directly from WhatsApp chat, you’ll have to type in ##Ticket number## before the message. For example, to reply to ticket no. 33 you have to type ##33## and then type your response.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Managing Tickets Using Discord

**Source:** [https://fluentsupport.com/docs/managing-tickets-using-discord/](https://fluentsupport.com/docs/managing-tickets-using-discord/)

**FluentSupport** can send notifications for your Tickets to Discord. This article will guide you through the whole process.

## Fluent Support Discord Settings

To learn how to get Ticket notifications in Discord, follow the steps with screenshots below —

Go to the **Global** **Settings** from the Fluent Support **Dashboard** and select **Notification** **Integrations** from the left sidebar to find the **Discord** option.

You will see the **Discord Integration Settings**page****where****you will see that a **Webhook** **URL** is needed to get the notifications.

Also, you will get the**Notification** **Events** which allow you to choose what kind of notifications you want for your Tickets. Just select the checkbox to enable the notification option.

Once you provide the **Webhook** **URL** and set your **Notifications** **Events**, do not forget to click on **Save** **Discord Settings**.

![Discord Integration Settings ](https://fluentsupport.com/wp-content/uploads/2024/06/Discord-Notification-Settings-scaled.webp)

## Get Discord Webhook URL

To **get the Webhook URL**, first, you need to**create a channel** for your notifications.
**Or**, you can also get the notifications in any existing channel.
Then, go to the **channel settings**by clicking the **settings icon** placed on the **right side of the channel name**.

![Discord Channel settings ](https://fluentsupport.com/wp-content/uploads/2024/06/Discord-channel-for-tickets.webp)

Now select the **Integration** from the left sidebar, select the **Webhooks,** and click on the **New Webhook**button.

![Integrations and Webhook](https://fluentsupport.com/wp-content/uploads/2024/06/Discord-Integration-settigns.webp)

Create a bot here with your relevant name and save it.
Now click on the **Copy Webhook URL** button to copy the Webhook URL.

![Webhook URL](https://fluentsupport.com/wp-content/uploads/2024/06/Discord-Notification-Settings-webhook-scaled.webp)

Now Paste the Webhook URL in your Fluent Support and click on the **Save Discord Settings** button.

![Save Discord Settings](https://fluentsupport.com/wp-content/uploads/2024/06/Discord-Notification-Settings-save-scaled.webp)

## Ticket Notification View in Discord

In your Discord app, you will see your Ticket Notification like this.

![Ticket Notification View in Discord](https://fluentsupport.com/wp-content/uploads/2024/06/Discord-Ticket-Notification.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Managing Tickets using Telegram

**Source:** [https://fluentsupport.com/docs/managing-tickets-using-telegram/](https://fluentsupport.com/docs/managing-tickets-using-telegram/)

**FluentSupport** allows you to manage your tickets using Telegram. You can see your New Tickets Notification in your Telegram groups or a person’s Inbox and can also reply from your Telegram inbox. This article will guide you through how to connect your Fluent Support with Telegram to manage your tickets in Telegram.

## Fluent Support Telegram Settings

To make your **Telegram Integration running**, you need to get the **Bot Token**and**Group Chat ID** from **Telegram**. To learn how to **Manage** your **Tickets** using **Telegram**, follow the guidelines accordingly –

### Get Bot Token

Simply follow the steps to get the **Bot Token**from **Telegram**.

First, send a text to [@BotFather](https://t.me/BotFather) or click the start button to start the bot in your Telegram application.

![Start button](https://fluentsupport.com/wp-content/uploads/2024/06/Start-button.webp)

Then **create a Bot** by sending the **‘/newbot’** command using the help message.

![Newbot command](https://fluentsupport.com/wp-content/uploads/2024/06/Newbot-command.webp)

Provide a **relevant name** for your bot. Next, **choose a username for your bot**that **must end with the text ‘bot’.**
After finishing these steps, **@BotFather** will provide you with the **Bot Token** that you need to complete the next step.

![Get the Bot Token ID](https://fluentsupport.com/wp-content/uploads/2024/06/Get-the-Bot-Token-ID.webp)

### Get Group Chat ID

Now you will need a **Group Chat ID**to send your notification. To do this, first, you need to **Create** a **Group** in **Telegram**.

#### Creating A New Group On Telegram

To create a new group in Telegram, follow the Screenshots & GIF below –

First, click the **New Group** button from the left-side Editor.

![New Group option](https://fluentsupport.com/wp-content/uploads/2024/06/New-Group-option.webp)

Now,****give****a **name** to your group****and**Add** the **Bot** that you **created in the previous**step**as a member** of the group. Press the **Create** button and your group will be created.

![Create new telegram group](https://raw.githubusercontent.com/ab-auth/fs-doc/refs/heads/main/Create%20New%20Group%20GIF%20to%20WebP%20Converter.webp)

Now, give your bot “**Admin Acces**” i.e., simply **make the bot admin** of your group chat.
**Follow the GIF** below, to learn how you can make your Bot Admin of your group.

![Give Admin Access to Your created Bot.gif](https://github.com/ab-auth/fs-doc/blob/main/(Telegram)%20Give%20Admin%20Access%20to%20Your%20created%20Bot.gif?raw=true)

After giving your Bot the **“Admin Access”** you can see the preview from **View group info** by clicking the three-dot from the right-side corner

![Admin Preview](https://fluentsupport.com/wp-content/uploads/2024/06/Admin-Preview-1.webp)

#### Get Group Chat ID

Finally, to get the **Chat ID** of your group, add [@GetIdsBot](https://t.me/getidsbot) as a member of this same newly created group.

To do this follow the Screenshots & GIF below step-by-step –

![Add GetIDs Bot as a Member ](https://github.com/ab-auth/fs-doc/blob/main/(Telegram)%20Add%20GetIDs%20Bot%20as%20a%20Member.gif?raw=true)

After adding the GetIDs Bot as a member, it will send a message to the group with the **Group Chat ID**.

Remember, the **Chat ID starts with a minus sign (-)**, and you would have to **copy the code exactly provided by the GetIDs bot**.

![Get the Group Chat ID code](https://fluentsupport.com/wp-content/uploads/2024/06/Get-the-Group-Chat-ID-code.webp)

## Configure Telegram in Fluent Support

From your **Fluent Support Dashboard**, go to **Global Settings**, and click the **Notification Integrations** from the left sidebar. This will open the **Telegram** **Integration Settings**tab**.**

Then, paste the**Bot Token** & **Group Chat ID** that you have copied before into the **Bot Token**& **Default Channel/Group Chat ID** field. Finally press the **Save Telegram Settings**.

Remember, the **Chat ID starts** **with a minus sign (-)**, and you would **have to copy the code exactly provided** by the **GetIDs** **bot**.

![Configure Telegram Group with FluentSupport](https://fluentsupport.com/wp-content/uploads/2024/06/Configure-Telegram-Group-with-FluentSupport-1-scaled.webp)

A brief explanation of other options mentioned above –

- **Notification Events:** Using this option, choose for which instances you want to be notified through Telegram. The available notification events are – **Ticket Created**, **Ticket Closed**, **Replied by Customer**, and **Agent Assigned To Ticket**.
- **Test Message**: You can also insert any text message to test whether you connected your telegram successfully or not. After you click the **Save Telegram Settings**if****the settings are correct, you will see a message in your Telegram, and the settings will be saved.
- **Enable Telegram Notifications:** Enable this option, to make sure you get the telegram notifications.
- **Enable Reply From Telegram (Agent can directly reply from telegram):**You can also enable this option, so that your support agents can directly reply from Telegram.

## Reply Tickets From Telegram

To reply to any tickets directly from Telegram, follow the steps with screenshots below –

**Note:** If **you** or **your agents** want to**get notifications** in your/their **individual inbox**, **you**or**any agents** must **send** a **test** **message** (e.g., Hi) to the **Bot** that you have **created and added to the group**. This will enable the bot to forward telegram replies to the original tickets in the support portal.

First, you need to add your support agent’s **Telegram Chat ID** to their profile.
To get the Telegram **user chat ID**, send a message to [@GetIdsBot](https://t.me/getidsbot) and it will return the message with the ID. Copy the **Chat id**.

![Get Telegram Chat ID from GetIDs Bot](https://fluentsupport.com/wp-content/uploads/2024/06/Get-Telegram-Chat-ID-from-GetIDs.webp)

Now, go to **Support Staff** under the **Global Settings** from your Fluent Support Dashboard, and click on the **Pencil Icon** of your desired agent/s whom you want to give access to reply tickets directly from telegram.

![Support Staff from Global Settings](https://fluentsupport.com/wp-content/uploads/2024/06/Support-Staff-from-Globl-Settings-1-scaled.webp)

Scroll down to the **Telegram Integration** option, paste the **Chat Id**you have copied before into the Telegram Chat ID field, and click the Update button. Now your chosen agent/agents can reply to tickets from Telegram.

![Telegram Chat ID Field](https://fluentsupport.com/wp-content/uploads/2024/06/Telegram-Chat-Id-Field-1-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Managing Tickets Using Slack

**Source:** [https://fluentsupport.com/docs/managing-tickets-using-slack/](https://fluentsupport.com/docs/managing-tickets-using-slack/)

**FluentSupport** allows you to manage your tickets using Slack. You can see your New Tickets notification in your Slack account and reply to your ticket from Slack. This article will guide you through how to connect your **Fluent Support**with**Slack** to manage your tickets in Slack.

## Fluent Support Slack Settings

To learn how to manage your Tickets using Slack, follow the steps with the screenshots below –

### Slack App

First, go to the [Slack API](https://api.slack.com/) and log in to your account to create an App in Slack. If you don’t have an account in Slack create one.

After logging on to your account click on **Your Apps** from the nav bar and click on the **Manage your apps** button.
You will be redirected to the Slack app creation page.

![Unlock-your-productivity-potential-with-Slack-Platform-Slack](https://fluentsupport.com/wp-content/uploads/2024/06/Unlock-your-productivity-potential-with-Slack-Platform-Slack.webp)

Click on the **Create New App** button here.

![Create-App](https://fluentsupport.com/wp-content/uploads/2024/06/Slack-API-Applications-Slack-Create-App-scaled.webp)

Select **From Scratch** to configure your app.

![From scratch](https://fluentsupport.com/wp-content/uploads/2024/06/Slack-API-Applications-Slack-1.webp)

Give the App name, select **Slack Workspace**, and click the **Create App** button.

![Create App popup](https://fluentsupport.com/wp-content/uploads/2024/06/Slack-API-Applications-Slack-2.webp)

### Configure the Slack App

Now you need to configure your Slack App and create an API token.
So first select the **OAuth & Permission** from the left sidebar.

![OAuth & Permissions](https://fluentsupport.com/wp-content/uploads/2024/06/Slack-API-Applications-New-Workspace-0Auth-token-scaled.webp)

Scroll down, go to the Scopes, and add these four (**channels:history**, **chat:write**, **groups:history**, and **groups:write**) OAuth Scope from the dropdown menu.

![Four options needed to add under Scopes](https://fluentsupport.com/wp-content/uploads/2021/11/Four-Scope-Options-1.webp)

Go to the **OAuth Tokens for Your Workspace** and click the **Install to Workspace** button below.

![Install to Workspace](https://fluentsupport.com/wp-content/uploads/2024/06/Slack-API-Applications-New-Workspace-install.webp)

Now you will get a **Bot User OAuth Token** here. Copy the token for later use.

![Bot User OAuth Token URL](https://fluentsupport.com/wp-content/uploads/2024/06/Slack-API-Applications-New-Workspace-auth-token-copy.webp)

### Add a Channel for Ticket Notifications

Go to your Slack **Workspace**, select **Add Channels,** and **Create a new channel** for Fluent Support Ticket notification.

![Create a new channel](https://fluentsupport.com/wp-content/uploads/2024/06/Threads-WPManageNinja-Slack.webp)

A pop-up will come here, give a name, and click the **Next** button.

![Next button](https://fluentsupport.com/wp-content/uploads/2024/06/Threads-WPManageNinja-Slack-Name.webp)

Then you will be asked for channel visibility keep the channel visibility **Private**.

![Private - Only specific people](https://fluentsupport.com/wp-content/uploads/2024/06/Threads-WPManageNinja-Slack-Private.webp)

Now the channel settings will come. Select the **Integrations** from this settings option.

![Integrations Tab](https://fluentsupport.com/wp-content/uploads/2024/06/Channel-fs-notification-WPManageNinja-Slack-scaled.webp)

Here, you have to Add the Slack App you have created. So click on the **Add an App** button.

![Add an App button](https://fluentsupport.com/wp-content/uploads/2024/06/Channel-fs-notification-WPManageNinja-Slack-app-scaled.webp)

Now you will see here all of your Apps. Select the App you created and click on the **Add** button.

![Add option](https://fluentsupport.com/wp-content/uploads/2024/06/Channel-fs-notification-Slack-app-connect-scaled.webp)

Now simply copy the **Channel Name** and **Channel ID**.

![Channel Name and Channel ID](https://fluentsupport.com/wp-content/uploads/2024/06/Channel-fs-notification-details-Slack-scaled.webp)

### Configuring Slack in Fluent Support

Go to the **Global** **Settings** from the Fluent Support **Dashboard** and select **Notification** **Integrations** from the left sidebar to find the **Slack** option. You will see the **Slack Integration Settings**page**.**

Now fill in all the fields with the necessary information that you have copied before. Also, you can enable the checkboxes if needed. Once you are done, do not forget to click on **Save Slack Settings**.

![Save Slack Settings](https://fluentsupport.com/wp-content/uploads/2024/06/Slack-Notification-Settings-paste-tokens-scaled.webp)

### Slack Reply

You can also send **Reply** for your business Tickets from your Slack channel. You need to follow some simple steps to complete the process.

To send a reply from your Slack channel go to your Slack App settings. Now Search for the **Event Subscriptions** and enable the Event by clicking the **Toggle** button.

![Enable events toggle](https://fluentsupport.com/wp-content/uploads/2024/06/Slack-API-Applications-Slack-enable-event-subscription-scaled.webp)

Now you will need to give a Redirected URL here. You will get this redirected URL in the Fluent Support Slack Configuration page. Get the URL from there and paste it here.

Also, here you need to add some Event bots. So click on the Add Bot User Event button.
Now add these two bot events **message.channels** & **message.groups**.

After all the changes you have been made, click on the **Save** **Changes**.

![Message.channels & Message.groups](https://fluentsupport.com/wp-content/uploads/2024/06/Slack-API-Applications-Reply-event-Slack-scaled.webp)

Now go to your channel and Copy the member ID.

![Member ID](https://fluentsupport.com/wp-content/uploads/2024/06/Channel-fs-notification-member-ID-Slack-scaled.webp)

**Paste** the **member ID** in your Fleunt Support Agents profile.
Click on the **Edit** button of the **Agent profile** you want to connect with Slack for the reply.

![Specific agent profile to connect slack](https://fluentsupport.com/wp-content/uploads/2024/06/Support-Staff-edit-button-scaled.webp)

After going to the Edit option you will find a **Slack User ID field**, now paste your **Slack member ID** here and click on the **Update** button.

![Slack User ID field](https://fluentsupport.com/wp-content/uploads/2024/06/Support-Staff-slack-user-ID-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

