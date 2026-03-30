# Notifications Messaging

*Category from FluentCommunity documentation*

---

## Real-Time Chat

**Source:** [https://fluentcommunity.co/docs/real-time-chat/](https://fluentcommunity.co/docs/real-time-chat/)

The **Real-Time Chat** feature is a powerful upgrade for your community’s chat system. It enables instant updates, meaning you and your members will receive messages the exact moment they are sent—no page refreshes or manual loading required. This creates a smooth, modern, and “live” conversation experience that keeps everyone engaged in real-time.

To use this feature, you first need to have the core chat system active, and then you’ll connect it to a “driver” that handles the instant delivery.

### Step 1: Activate the Core Messaging System

Before you can enable real-time updates, the basic messaging system must be active in your community. If you haven’t done this yet, follow these steps:

1. **Navigate to Settings**: Open your WordPress dashboard and go to **FluentCommunity** > **Settings**.
2. **Go to Addons**: Click on **Features & Addons** from the left-hand sidebar menu.
3. **Activate Chat**: Find the **FluentCommunity Chat** module and click the **Activate** button. If it is already activated you will see the **Messaging Settings** button.

![](https://fluentcommunity.co/wp-content/uploads/2026/02/real-time-chat-1-scaled.webp)

Once this is done, a **Message** box will appear for all your members, allowing them to start conversations.

### Step 2: Enable Real-Time Messaging Settings

Now that your community has a working chat, you can turn on the “Real-Time” layer. This is the switch that tells the system to push messages instantly rather than waiting for a page reload.

1. **Open Messaging Settings**: Click on the **Messaging Settings** button from the **Features & Addons** section.
2. **Real-Time Messaging**: Locate the option for **Enable** **Real-Time chat** and check the checkbox.

![](https://fluentcommunity.co/wp-content/uploads/2026/02/real-time-chat-2-scaled.webp)

> Note: Simply enabling this toggle isn’t enough for the system to work. Because WordPress itself doesn’t naturally “push” data to browsers instantly, you need an integration (a driver) to do the heavy lifting.

### Step 3: Connect to a Real-Time Driver (Integration)

To make the “instant” part of real-time messaging actually work, you must integrate FluentCommunity with a real-time delivery service. This service acts as a bridge between your server and your members’ devices.

You can choose one of the following integration methods:

- **FluentSocket Integration**: This is our high-performance, self-hosted solution designed specifically for the Fluent ecosystem. It is ideal if you want more control and want to host the socket server yourself. To connect with it, refer to this [documentation](https://fluentcommunity.co/docs/fluentsocket-with-fluentcommunity/).
- **Pusher Integration**: This is a popular cloud-based service. To use it, you will need to enter your Pusher **App ID**, **Key**, **Secret**, and **Cluster** in the integration settings. To see the integration process follow this [documentation](https://fluentcommunity.co/docs/integrate-pusher-with-fluentcommunity/).
- **Custom App**: If you have a custom-built socket server or personal application for handling real-time data, you can configure the system to use your custom credentials here.

![](https://fluentcommunity.co/wp-content/uploads/2026/02/real-time-chat-5-scaled.webp)

---

## Profile Notification Settings

**Source:** [https://fluentcommunity.co/docs/profile-notification-settings/](https://fluentcommunity.co/docs/profile-notification-settings/)

Admin and Members can personalize their notification options using the Profile Notification Settings. Admin and Members can customize their experience by choosing which notifications they wish to receive.

## Access Notification Settings

To access your profile settings, click on your profile picture in the top-right corner of the Community Dashboard, then select **Your Profile**.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Profile-settings-notification.png)

#### Global Email Notification Settings

Next, click on **Notification Settings** in the menu bar to access the Global Email Notification Settings for your profile. These settings manage notifications for all the groups and spaces you’re a part of. Here are the options available to you:

- **Email me when someone comments on my post:** You’ll get an email when someone comments on one of your posts.
- **Email me when someone replies to my comments:** You’ll get an email when someone replies to your comments.
- **Email me when someone mentions me in a post or comment:** You’ll get an email when someone tags or mentions you.
- **Weekly Digest on Monday:** You can choose to get a summary of activities every Monday.
- **Email Sending Frequency for One-to-One Messages:** This setting appears if the **Email Notification for one-to-one messages** is enabled in the **Messaging Settings**. From here, you can choose your preferred email sending frequency by selecting one of the available options.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Profile-settings-notification-1.png)

#### New Posts Notifications

These settings control notifications for posts in each space:

- **Email Disable:** Turn off email notifications for posts in this space.
- **Notify only for admin posts:** Get notifications only for posts made by admins.
- **Notify for all posts:** Get notifications for all posts in this space.

With these settings, you can control what updates you get from your community, helping you stay informed without too many emails.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/new-posts-notification-03.webp)

#### Unread Notification

You can see all your notifications by clicking the **Notification** icon in the top-right corner of your screen. Notifications help you stay updated with activities in your community. There are three main options:

1. **All:** Shows every type of notification.
2. **Mentions:** This shows only notifications where you were mentioned.
3. **Following:** Shows notifications for posts and users you are following.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/unread-notification-04-scaled.webp)

This system keeps you informed without too many updates, so you can stay connected with your community at a comfortable level.

If you have any further questions about this guide, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/).

---

## FluentCommunity Chat

**Source:** [https://fluentcommunity.co/docs/fluent-community-chat/](https://fluentcommunity.co/docs/fluent-community-chat/)

The FluentCommunity Chat is a real-time chat feature, designed to help members connect and interact easily. Follow this guide to enable and use the chat feature.

## Activating the Community Chat

Go to the **Settings** of your FluentCommunity and select **Features & Addons** from the left sidebar. Find **FluentCommunity Chat** and click the **Active** **FluentCommunity Chat**button to enable the chat.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/chat-scaled.webp)

#### Start a Chat Session

After enabling the chat, click on **Messaging Settings** to customize your message preferences with community members.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Messaging-Settings--scaled.webp)

**Message Settings**

In this section, you can customize your messaging and notification preferences:

- **Send email notification on one-to-one (unread) messages to individual members**: Enable this option to receive an email notification whenever you have an unread one-to-one message.
- **Default email sending frequency for one-to-one messages**: Choose how often members receive these notifications (Hourly, Daily, Weekly, or Per User Choice).
- **Who can initiate a one-to-one message**: Select who can start a conversation: **Any community members** or **Only Moderator and Admins**.
- **Points needed to initiate a new message thread**: Set a specific point requirement for members to start new conversations to help prevent spam.

#### Real-time Chat Configuration

To enable instant message delivery, you can activate **Real-time Chat** and choose one of the available socket providers. For detailed setup instructions, please refer to the [Real-time Chat documentation](https://fluentcommunity.co/docs/real-time-chat/).

Once configured, click **Save Settings** to apply your real-time chat preferences.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/messaging-settings-1-1-scaled.webp)

## Navigating the Chat Interface

To access the chat feature in FluentCommunity, click on the **Messages (speech bubble) icon** in the bottom-right corner.

- **Message List**: Clicking this icon opens the messaging panel, where you can see all your recent conversations.
- **Search Conversations**: Use the search bar at the top of the message list to quickly find existing chats by typing a member’s name.

#### Starts a Conversation

To reach out to a member, click the **“+” (plus icon)** or use the search bar within the messaging panel to initiate a **New message**.

- Type the name or username of the member in the **“To:”** field.
- Select the desired user from the dropdown list to open the chat window.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/starting-a-new-conversation-2.webp)

#### Sending Messages and Media

In the **Type a message…** box at the bottom of the chat, you can:

1. **Upload Media**: Attach images or videos directly within the chat to share content with other members.
2. **Send icon**: Once your message is ready, click the **Send** icon to publish it.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Sending-Messages-and-Media-3.webp)

#### Viewing User Profile Details & Actions

Within a conversation, click the **Details (i)** icon or the member’s name in the header to open the **Details**panel. This area allows you to:

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Viewing-User-Profile-Details-Actions-4.webp)

- **View Profile:** Click this link to visit the member’s full community profile page.
- **Username:** View the specific **@username** of the person you are chatting with.
- **Block User:**Select this option under More Actions to prevent a specific member from sending you further messages.
- **Delete Conversation:**Choose this to permanently remove the chat history with this user from your list.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Delete-Conversation-5.webp)

## Group Chat

You can create a group chat for your Space members, allowing them to have conversations together. To enable this option, go to the specific **Space** for which you want to set up the group chat. Click on the **three-dot** menu and select **Space Settings**.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Group-Chat-1-scaled.webp)

Here, you’ll find the **Group Chat** option. To enable it, check the **Enable Group Chat for this Space Members** box. This will activate group chat for the members of that Space.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Group-Chat-2-scaled.webp)

Now, click on the **Chat** icon from the navbar to open the chat. You’ll find a group chat box with the same name as the Space. Inside this chat, all Space members will be included, allowing seamless group conversations.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Group-Chat-3-scaled.webp)

If you want to leave the group chat, simply click on the **three-dot** button and select **Leave Space**. This will remove you from the chat group, but you will still remain a member of the Space.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Group-Chat-4-scaled.webp)

To rejoin the chat group, simply click on the **Join Space** button in the chat group box. You’ll be added back to the group chat instantly.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Group-Chat-5-scaled.webp)

The Fluent Community Chat feature makes it easy for members to stay connected, share media, and view profile details, creating a vibrant community space for real-time communication.

If you have any further questions about this guide, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/).

---

## Global Email Notifications

**Source:** [https://fluentcommunity.co/docs/email-notifications/](https://fluentcommunity.co/docs/email-notifications/)

Stay updated on your community activities with **Email Notifications** in **FluentCommunity.** This feature ensures that you receive timely updates and alerts directly in your inbox.

## Setup Email Notifications Globally

> Before starting the process, configure a SMTP plugin in your WordPress website to get Email Notification on your email account.

> To ensure getting email notifications in the easiest, fastest, and most secure way we recommend using the FluentSMTP(Free) plugin. To learn the basic use of the FluentSMTP plugin, check this Documentation.

First, go to the **Settings** and then click on the **Email Settings**from the **left sidebar**.

Now, you will get **Two Major Settings** to set up your mail and email notifications globally. These are:

1. Mailing Settings
2. Email Notification Settings

![](https://fluentcommunity.co/wp-content/uploads/2024/09/1.-Email-Settings-page-scaled.webp)

#### 1. Mail Settings

This will allow you to set the **From** **Name** and **Email**,**Reply Name**and**Email**, and **Email Footer**globally for the**Email Notification.**

**From Name and Email****:**Here, you can specify the sender Name and Email in the **From Name** and **From Email**fields respectively for your notification.

**Reply To Name and Email (Optional)****:**Here, you can specify the receiver’s **Name** and an **Email** address for users to reply to the notification, ensuring you receive their responses. But these fields are optional. If you leave this field blank,

**Email Footer****:**The email footer you set in this field will be used for all emails sent from FluentCommunity. It’s highly recommended to use your **Business** **Name** and Address in the Footer for compliance

> Also, use this {{manage_email_notification_url|Manage Your Email Notifications Preference}} Tag to insert the Dynamic Notification Settings URL. Plus, you can use {{site_name_with_url}} this SmartCode for Site Name with the Permalink.

**Disable powered by FluentCommunity in the email footer****:**If you check this option, the “**Powered by FluentCommunity**” text in the**Email Footer** will be disabled. Leave this option unchecked if you want this text to be visible in the **Email Footer**.

Click on the **Save** **Settings** button after making all the changes.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/2.-Mailing-Settings.webp)

#### 2. Email Notifications Settings

Simply check the boxes for the features below to enable your notifications.

**Email on New Comments****:**In FluentCommunity, you will receive an email notification whenever someone comments on a post you’ve created. This ensures you’re always aware of interactions and discussions happening on your content.

**Email on Comment Reply****:**Sends an email notification when someone replies to a user’s comment, helping users stay updated on conversations they’re involved in.

**Admin and Moderator Tagging Alerts****:**By enabling this option, you will be notified via email whenever an admin or moderator tags you in a post or notification. This helps you stay informed on important updates or mentions that require your attention.

**Email Digest for Unread Notifications**: The Email Digest feature compiles a summary of all your unread notifications and sends them in a single email. Instead of receiving individual emails for every notification, you’ll get one digest at scheduled intervals (daily, weekly, etc.), making it easier to catch up on posts, messages, and updates you may have missed.

Click on the **Save** **Settings** button after making all the changes.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/3.-Email-Notification-Settings.webp)

This streamlined approach helps you stay informed without being overwhelmed by multiple alerts.

If you have any further questions about this guide, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/?utm_source=plugin&utm_medium=site&utm_campaign=pligin_ui).

---

