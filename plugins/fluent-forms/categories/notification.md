# Notification

*Category from Fluent Forms documentation*

---

## How to Integrate Telegram with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-telegram-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-telegram-with-fluent-forms/)

**Fluent Forms**allows you to integrate with [Telegram](https://telegram.org/) to send desired information as instant notifications to your Telegram channel or group when a form is submitted. This article will guide you through integrating**Telegram**in **Fluent Forms**on your **WordPress Site**.

> Remember, Telegram is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enabling Telegram Integration

To learn how to enable Telegram integration, follow the steps with the screenshots below –

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Telegram**through the search bar, and get the **Telegram**integration module.

Now, turn on the **Toggle** to enable **Telegram**, and click the **Settings Icon** on the right side.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-Enabled-Telegram-module-scaled.webp)

Once you enable Telegram, you will be asked for the **Bot Token**and****the**Default Channel/Group Chat ID**of your **Telegram Account**.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Telegram-Settings-page-scaled.webp)

### Getting the Bot Token and Chat ID from Telegram

To learn how to get the **Bot Token**and**Chat ID**of****the****Channel/Group****from****Telegram**,**follow the steps with screenshots below –

#### Getting Bot Token

First, log in to your **Telegram Account**, go to the [@Bot](https://t.me/BotFather)[Father](https://t.me/BotFather) chat, and click the **Start** button to start the bot in your Telegram application.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-BotFather-Start-button-scaled.webp)

Then **create a new bot**by sending the**‘/newbot’** command using the help message.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Create-a-new-bot.webp)

Provide a relevant **Name** and a **Username** for your bot (**username** must end with the text **‘Bot’**or**‘bot’**). After finishing these steps, **@BotFather** will provide the **Bot Token**. Simply, copy it.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-Copy-Bot-Token.webp)

#### Getting Channel/Group Chat ID

To get the **Channel/Group Chat ID**, go to any **existing Telegram Channel/Group** or **create a Channel/Group**. For example, I will collect the **Chat ID** from an **existing** **Telegram Group** to show the further process.

First, **add** the **Bot** you created through **@BotFather** in the previous step **as a member of the group** and give your bot **Admin Access (**i.e., simply make the bot an admin of your group chat).

Once you make your Bot Admin, you can see the preview from **View group info** by clicking the **Three-dots icon** on the right side of the**Group page**.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Fluent-Forms-group-view.webp)

Finally, to get the **Chat ID**of your group, add [@GetIdsBot](https://t.me/getidsbot) as a member of the same group.

After adding the**GetIDs Bot as a member**, you will receive a message to the group with the Group **Chat ID**. Simply, copy it.

> Remember, the Chat ID starts with a Minus sign (-), and you would have to copy the code exactly provided by the GetIDs bot.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Copy-Chat-ID.webp)

## Connecting Telegram with Fluent Forms

Return to the **Telegram Settings**page under the**Configure Integrations**tab of the **Global Settings**section from the **Fluent Forms** **Navbar**.

Paste the **Bot Token**and**Chat ID**you copied from **Telegram**into the **Bot Token**and**Default Channel/Group Chat ID**fields, respectively.

Plus, to check whether integration is successful, enter any text in the **Test Message (optional)** field.
Finally, press the **Save Setting**s button, and your **Telegram Integration** module will be enabled.

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-Paste-Bot-Token-and-Chat-ID-scaled.webp)

Here, you can see that the test message has been successfully sent to the Telegram Group, indicating the integration is now functional.

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Preview-of-Test-Message.webp)

Finally, you can see that your Telegram is connected to your **Fluent Forms** successfully!

Now, you can verify/disconnect it anytime by clicking the**Verify Connection Again/Disconnect Telegram**buttons.

![](https://fluentforms.com/wp-content/uploads/2025/01/10.-Verify-or-Disconnect-button-scaled.webp)

## Integrating Telegram with Forms

To learn how to integrate Telegram into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select**the**Desired Form**where you want to****integrate your**Telegram,**and****click the**Settings** button.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/11.-Open-desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Telegram Integration** feed****from the dropdown list.

![](https://fluentforms.com/wp-content/uploads/2025/01/12.-Add-new-integration-button-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring Telegram.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. **Name**: Here, you can set a name according to your preference for your feed. This field is required to be filled in.

1. **Message to Send**: Here, you can set the texts and information you want to send to the Telegram channel/group as a notification. Also, you can use the **Shortcode** button to set the user data from form entries that you want to send to your Telegram Group/Channel.

1. **Custom Chat/Channel ID**: Use this field if you want to integrate a form-specific telegram group/channel. Otherwise, keep it empty.

1. **Conditional Logics**: This option allows Telegram integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

1. **Enable This Feed**: Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, click the **Save Feed** button, and your Telegram will be integrated into this specific form!

![](https://fluentforms.com/wp-content/uploads/2025/01/13.-Save-Feed-button-scaled.webp)

After successful Integration, you will see that your **Telegram Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**. Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](https://fluentforms.com/wp-content/uploads/2025/01/14.-Added-Telegram-Integration-Feed-scaled.webp)

## Preview of Integrated Telegram

Here, you can see the preview of added Telegram Notifications through the Form Entries based on the Integration.

**For example**, you can see two new**Form Submissions** under the **Entries** tab on this particular form.

![](https://fluentforms.com/wp-content/uploads/2025/01/15.-Entries-tab-scaled.webp)

Now, go to the **Telegram Group** you integrated and you can see the preview of the notification messages of Telegram through the Form entries.

![](https://fluentforms.com/wp-content/uploads/2025/01/16.-Preview-of-added-notification.webp)

This way, you can easily integrate Telegram with Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Slack with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-slack-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-slack-with-fluent-forms/)

**Fluent Forms** allows you to integrate with [Slack](http://slack.com) to send preferred information as instant notifications to your Slack channel when a form is submitted. This article will guide you through integrating**Slack**in **Fluent Forms**on your **WordPress Site**.

> Remember, Slack is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enabling Slack Integration

To learn how to enable Slack integration, follow the steps with the screenshots below –

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Slack**through the search bar, and enable the **Slack**integration module by turning on the **Toggle**.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-enabled-Slack-module-scaled.webp)

## Integrating Slack with Forms

To learn how to integrate **Slack** into any specific **Form** in **Fluent** **Forms**, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select**the**Desired Form**where you want to****integrate your**Slack,**and****click the**Settings** button.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Open-desired-Form-Settings-1-scaled.webp)

Once you are on **Settings & Integrations**, go to **Slack**from the left menu, and turn on the**Integrate Slack Toggle**.

**Now, the settings options will appear to integrate Slack with Fluent Forms. These are:**

**A. Slack Title**: Here you can set the text and information to add as a notification title for sending to the desired Slack channel.

**B. Webhook URL**: Here, you need to provide the desired **Slack channel’s Webhook URL** where you want to send the notification. To learn how to get the **Webhook URL**, [click here](https://fluentforms.com/docs/how-to-integrate-slack-with-fluent-forms/#2-toc-title) and follow the steps accordingly.

**C. Select Fields**: Here, you can also select which input fields’ information you want to send to the Slack Channel by checking the box/es. Also, you can select all the fields at once by clicking the **Check All**box.

**D. Slack Footer message**: Here you can set the texts and information you want to add as a footer for your notification.

Once the setup is done, click the **Save Feed** button, and your Slack will be integrated into this specific form!

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Save-Feed-button-scaled.webp)

### Getting Webhook URL from Slack

To learn how to get the Webhook URL, follow the steps with screenshots below –

First, you need to create an App on your Slack to get the Webhook URL. To create an app, go to the [Slack API page](https://api.slack.com/apps?new_app=1) and click on the **Create an App**button.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Creat-an-app-scaled.webp)

Select the **From Scratch** option.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-From-Scratch.webp)

Give your **app a Name** to easily find it later, **choose your Workspace** from the dropdown list, and click the **Create App** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-App-Name-Create-app-button.webp)

Once you create the app, open the **Incoming Webhooks** page and enable the **Toggle** button to activate it.

Now, scroll down to the **Webhook URLs for Your Workspac**e section and click the **Add New Webhook to Workspace** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Incoming-Webhooks-scaled.webp)

Now, select your desired Slack **Channel** from the dropdown list where you want to send the notifications, and click the **Allow** button

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-Select-desired-channel-Allow-button.webp)

Once you hit the Allow button, you will be redirected to the **Incoming Webhooks** page, where you will get your desired **Webhook URL**, copy it by clicking the **Copy** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Copy-Webhook-URL-1.webp)

## Preview of Integrated Slack

Here, you can see the preview of added Slack Notifications through the Form Entries based on the Integration.

**For example**, you can see three new**Form Submissions** under the **Entries** tab on this particular form.

![](https://fluentforms.com/wp-content/uploads/2025/01/10.-Entries-tab-1-scaled.webp)

Now, go to the **Slack Channel**you integrated and you can see the preview of the notification messages of Slack through the Form entries.

![](https://fluentforms.com/wp-content/uploads/2025/01/11.-Preview-of-added-notifications-1.webp)

This way, you can easily integrate Slack with Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Discord with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-discord-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-discord-with-fluent-forms/)

**Fluent Forms** allows you to integrate with [Discord](http://discord.com) to send desired information as instant notifications to your Discord channel when a form is submitted. This article will guide you through integrating**Discord**in **Fluent Forms**on your **WordPress Site**.

> Remember, Discord is the Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enabling Discord Integration

To learn how to enable Discord integration, follow the steps with the screenshots below –

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **Discord**through the search bar, and enable the **Discord**integration module by turning on the **Toggle**.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-Enabled-Discord-module-scaled.webp)

## Integrating Discord with Forms

To learn how to integrate Discord into any specific Form in Fluent Forms, follow the steps with the screenshots below –

First, go to **Forms** from the **Fluent Forms Navbar**, **select**the**Desired Form**where you want to****integrate your**Discord,**and****click the**Settings** button.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Open-desired-Form-Settings-scaled.webp)

Once you are on the **Settings & Integrations**, go to the **Configuration Integrations** tab, click the **Add New Integration** button, and select **Discord Integration** feed****from the dropdown list.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Add-new-integration-button-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring Discord.

**All the settings options mentioned in the screenshot below are briefly explained:**

1. **Name**: Here, you can set a name according to your preference for your feed. This field is required to be filled in.

1. **Webhook URL**: Here, you need to provide the desired **Discord Channels’ Webhook URL** where you want to send the notification. To learn how to get the **Webhook URL**, [click here](https://fluentforms.com/docs/how-to-integrate-discord-with-fluent-forms/#2-toc-title) and follow the process accordingly.

1. **Description**: Here you can set the texts and information you want to send to the **Discord Channel** as a notification. Also, you can use the **Shortcode** button to set the user data from form entries that you want to send to your **Discord Channel**.

1. **Input Fields**: Here, you can also select which input fields’ information you want to send to the Discord Channel by checking the box.

1. **Footer**: Here you can set the texts and information you want to add as a footer in the notification. Also, you can use the **Shortcode** button to set the user data from form entries that you want to add as a footer to your **Discord Channel**.

1. **Conditional Logics**: This option allows Discord integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

1. **Enable This Feed**: Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, click the **Save Feed** button, and your Discord will be integrated into this specific form!

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Save-Feed-button-scaled.webp)

After successful Integration, you will now see that your **Discord Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Settings Icon** and delete it by clicking the **Trash Icon**.  Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-Added-Discord-Integration-Feed-scaled.webp)

### Getting Webhook URL from Discord

To learn how to get the Webhook URL, follow the steps with screenshots below –

First, go to your **Discord App** or open **Discord** in your browser.  Now, you can create a new server by clicking the **Plus Icon (+)**, or you can use any existing server.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Add-Servar-Plus-Icon.webp)

**For example**, I am using an existing channel to show you the whole process.
First, go to the desired channel settings by clicking the **Settings Icon** on the right side of the channel name.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Settings-of-desired-Servar.webp)

Then, select the **Integrations** from the left sidebar and click the **Create Webhook**button.

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-Create-Webhook.webp)

Finally, click the **Arrow Icon** next to **Captain Hook** to get your desired**Webhook URL** inside the **Copy Webhook URL**button. Simply click it, and your **Webhook URL** will be copied.

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Copy-Webhook-URL.webp)

## Preview of Integrated Discord

Here, you can see the preview of added Discord Notifications through the Form Entries based on the Integration.

**For example**, you can see three new**Form Submissions** under the **Entries** tab on this particular form.

![](https://fluentforms.com/wp-content/uploads/2025/01/10.-Entries-tab-scaled.webp)

Now, go to the **Discord Channel**you integrated and you can see the preview of the notification messages of Discord through the Form entries.

![](https://fluentforms.com/wp-content/uploads/2025/01/11.-Preview-of-added-notifications.webp)

This way, you can easily integrate Discord with Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

