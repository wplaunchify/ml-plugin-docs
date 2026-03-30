# Bounce Handlers

*Category from FluentCRM documentation*

---

## Bounce Handling with Brevo

**Source:** [https://fluentcrm.com/docs/bounce-handling-with-brevo/](https://fluentcrm.com/docs/bounce-handling-with-brevo/)

When an email bounces, it means it wasn’t delivered to the recipient due to issues like an invalid email address or technical problems. Managing bounces helps maintain a clean email list, improving deliverability and engagement.

From FluentCRM you can enable Bounce Handling for the Brevo Mailer system to identify bounced contacts efficiently. This guide will walk you through the process of enabling this feature.

## FluentCRM Settings Configuring

First, go to your FluentCRM and then click on **Settings** from the navbar. Now select the **SMTP/Email Service Settings** from the left sidebar.

Here from **Bounce Handling Settings** select the **Brevo** as your **Email Service Provider** from the dropdown menu.

Now you will get the **Brevo Bounce Handler Webhook URL** copy this Webhook URL in your clipboard for later use.

![fluent crm brevo settings](https://fluentcrm.com/wp-content/uploads/2025/01/Fluent-CRM-Brevo-Settings--scaled.webp)

## Configuring Brevo

You can configure the Bounce Handling webhook in Brevo in two ways. Below, we’ll show you both methods.

#### Method 1: From the Contacts/Campaigns Section

Log in to your [Brevo account](https://login.brevo.com/) and navigate to the **Contacts/Campaigns** section. Then, click on **Settings** from the left sidebar and select **Webhook**.

![brevo bounce handling 1](https://fluentcrm.com/wp-content/uploads/2025/01/Brevo-Bounce-Handling-1-scaled.webp)

You will be redirected to the **Webhook** page. Click on the **Add a New Webhook** button.

![brevo bounce handling 2](https://fluentcrm.com/wp-content/uploads/2025/01/Brevo-Bounce-Handling-2-scaled.webp)

Paste the Webhook URL you copied earlier from the **FluentCRM Bounce Handling Settings**.

Next, check the following checkboxes:

- **Marked as Spam**
- **Hard Bounced**
- **Unsubscribed**
- **Soft Bounced**

Click on the **Add** button to save your webhook.

![brevo bounce handling 3](https://fluentcrm.com/wp-content/uploads/2025/01/Brevo-Bounce-Handling-3-scaled.webp)

You will now see the webhook you created along with the triggers you applied. You can edit or modify it anytime by clicking the **Action** button.

![brevo bounce handling 4](https://fluentcrm.com/wp-content/uploads/2025/01/Brevo-Bounce-Handling-4-scaled.webp)

#### Method 2: From the Transactional Section

You can also set this webhook from the **Transactional** section, where you’ll find additional trigger options for your webhook.

To do this, go to your [Brevo account](https://login.brevo.com/), click on **Transactional** from the left sidebar, and select **Settings**. Then, click on the **Webhook** option.

![brevo bounce handling 5](https://fluentcrm.com/wp-content/uploads/2025/01/Brevo-Bounce-Handling-5-scaled.webp)

You will be redirected to the Webhook creation page. From there, click on the **Add a New Webhook** button.

![brevo bounce handling 6](https://fluentcrm.com/wp-content/uploads/2025/01/Brevo-Bounce-Handling-6-scaled.webp)

A pop-up will appear. Paste the Webhook URL you copied earlier from the **FluentCRM Bounce Handling Settings**.

Here, you can select the following triggers:

- **Soft Bounce**
- **Hard Bounce**
- **Error**
- **Unsubscribe**
- **Blocked**

Click the **Save** button to save your changes. You will then be able to see the webhook you created.

![brevo bounce handling 7](https://fluentcrm.com/wp-content/uploads/2025/01/Brevo-Bounce-Handling-7-scaled.webp)

## Viewing Bounced Contacts

To view bounced contacts in your **FluentCRM**, go to **Contacts**. Then, click on **Filter by Statuses** and check the **Bounced** checkbox.

You will now see all the bounced contacts.

![fluent crm brevo contacts](https://fluentcrm.com/wp-content/uploads/2025/01/Fluent-CRM-Brevo-contacts--scaled.webp)

If you have any further questions, concerns, or suggestions, please feel free to reach out to our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Bounce Handling with SMTP2GO

**Source:** [https://fluentcrm.com/docs/bounce-handling-with-smtp2go/](https://fluentcrm.com/docs/bounce-handling-with-smtp2go/)

SMTP2GO helps ensure reliable email delivery by effectively handling bounces or returned emails. Follow these steps to set up bounce handling with FluentCRM.

## Configure SMTP2GO in FluentCRM

To configure, go to your FluentCRM dashboard, navigate to the **Settings** tab, and click the **SMTP/Email Service Settings** from the left sidebar.

Select your email service provider, **SMTP2GO** Server, from the drop-down menu. Next, copy the SMTP2GO Server Bounce Handler **Webhook URL** for future use.

![copy webhook url(1)](https://fluentcrm.com/wp-content/uploads/2024/11/Copy-webhook-url1-scaled.webp)

## Set Up Webhook in SMTP2GO

Now log in to your account or create a new[SMTP2GO Server](https://app.smtp2go.com/login/). Then navigate to the **Settings>Webhooks settings** section and click **Add Webhook**.

![smtp2go webhooks](https://fluentcrm.com/wp-content/uploads/2024/11/SMTP2GO-Webhooks-scaled.webp)

Here appears a popup **Add New Webhook**. Here you’ll see:

**URL:**Paste the **Webhook URL**that is copied from your FluentCRM Websites.

**Events:**Check the **Bounce**box for bounce handling.

**Headers:**Enter a header that you want to be sent explicitly to event data.

Now,**Save** your webhook settings and use the **Test** button to ensure the setup works.

![paste webhook url 03](https://fluentcrm.com/wp-content/uploads/2024/11/paste-webhook-url-03-scaled.webp)

## Viewing Bounced Contact

To view bounced contacts in FluentCRM, go to **Contacts**, choose **Filter by Status**, and select **Bounced**.

![bounce contact](https://fluentcrm.com/wp-content/uploads/2024/11/Bounce-contact-scaled.webp)

This setup helps you track bounced emails and manage your email campaigns efficiently. If you have any questions, please contact[us](https://wpmanageninja.com/support-tickets/).

---

## Bounce Handling with Postal Server

**Source:** [https://fluentcrm.com/docs/bounce-handling-with-postal-server/](https://fluentcrm.com/docs/bounce-handling-with-postal-server/)

Postal Server is an open source that is ready to run your server. Managing bounced emails is critical for improving the availability of emails. This documentation describes how the Postal handles bounce messages with FluentCRM.

## Setup Bounce Handling

To set up the Postal Server follow this step-by-step guide to bounce handling with FluentCRM.

First, go to your FluentCRM dashboard, navigate to the**Settings** tab, and click the **SMTP/Email Service Settings**from the left sidebar.

Now Select your email service provider**Postal Server** from the drop-down menu. Next copy the Postal Server Bounce Handler **Webhook URL** for later use.

![bounce handling settings 10 15 2024 04 49 pm](https://fluentcrm.com/wp-content/uploads/2024/10/bounce-handling-settings-10-15-2024_04_49_PM.webp)

## Postal Server Webhook Settings

Now log in to your account or create a new [Postal Server](https://github.com/postalserver/postal). Then navigate to the**Webhooks** settings section. Here you’ll see:

**Name:**Enter a name to identify these Webhooks.

**URL:** Paste the **Webhook URL** that you copied from your FluentCRM websites.

**Enabled:**Here you’ll pick **Yes- send requests to this webhook**.

**Events:**In this events section you’ll choose **No-I’ll choose which requests to send**. After that scroll down and select **MessageDeliveryFailed** and **Message Bounced** by tick the boxes.

Now click on the **Save Webhook** to save your webhook settings.

![fluentcrm 2 8 40 multi threaded email sending event monitoring and a lot more ](https://fluentcrm.com/wp-content/uploads/2024/10/FluentCRM-2-8-40-Multi-Threaded-Email-Sending-Event-Monitoring-and-a-Lot-More-.webp)

## Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM Contacts. Then click Filter By Statuses and enable the**Bounced** checkbox.

![bounce handling with sendgrid fluentcrm](https://fluentcrm.com/wp-content/uploads/2024/10/Bounce-Handling-with-SendGrid-FluentCRM.webp)

If you have any further questions about this guide, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/).

---

## Bounce Handling with Elastic Email

**Source:** [https://fluentcrm.com/docs/bounce-handling-with-elastic-email/](https://fluentcrm.com/docs/bounce-handling-with-elastic-email/)

If you use [ElasticEmail](https://elasticemail.com/) email service then use this documentation to set up Bounce handling with FluentCRM.

First copy the Webhook URL at FluentCRM -> Settings -> SMTP/Email Sending Service Settings and Select Elastic from the dropdown and copy the webhook URL.

![image](https://fluentcrm.com/wp-content/uploads/2023/02/image-1024x569.png)

Then Login to your ElasticEmail account then navigate to Settings > Manage Webhooks and click on Create Webhook Button.

![image 1](https://fluentcrm.com/wp-content/uploads/2023/02/image-1-997x1024.png)

Provide the webhook URL copied from FluentCRM and then only select “Unsubscribed”, “Complaints” and “Bounce/Error” Events.

Once you are done click save.

With this integration when an email address got bounced or contact unsubscribe from ElasticEmail, FluentCRM will automatically change the status in your WordPress site’s contact status.

---

## Bounce Handling with Sparkpost

**Source:** [https://fluentcrm.com/docs/bounce-handling-with-sparkpost/](https://fluentcrm.com/docs/bounce-handling-with-sparkpost/)

If you use [SparkPost](https://sparkpost.com) email service then use this documentation to set up Bounce handling with FluentCRM.

First copy the Webhook URL at FluentCRM -> Settings -> SMTP/Email Sending Service Settings and Select SparkPost from the dropdown and copy the webhook URL.

![](https://fluentcrm.com/wp-content/uploads/2021/07/Screenshot-2021-07-20-at-1.10.55-PM-1024x739.png)

Then Login to your SparkPost account then navigate to Webhooks and click on Event Webhook.

![](https://fluentcrm.com/wp-content/uploads/2021/07/Screenshot-2021-07-20-at-1.13.00-PM-1024x591.png)

Then use the following data to setup the webhook

- **Webhook Name** -> Anything you want
- **Target URL**: Paste the Webhook Url copied from FluentCRM
- **Events:** Select Individual Events and then check only **Link Unsubscribe**, **Bouce**and**Spam Complaint**
- **Authentication:** None

![](https://fluentcrm.com/wp-content/uploads/2021/07/Screenshot-2021-07-20-at-1.18.37-PM-1024x786.png)

Then Click “Create Webhook” button

If you set up these two webhook correctly, so whenever an email mark as a complaint or Detected as a bounced, Then FluentCRM will change the contact status accordingly.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM **Contacts**. Then click **Filter By Statuses** and enable the **Bounced** checkbox.

![view bounced contacts in fluentcrm](https://fluentcrm.com/wp-content/uploads/2020/09/Screenshot-2023-08-12-at-3.31.52-PM-1024x529.png)

---

## Bounce Handling with SendGrid

**Source:** [https://fluentcrm.com/docs/bounce-handling-with-sendgrid/](https://fluentcrm.com/docs/bounce-handling-with-sendgrid/)

If you use [SendGrid](https://sendgrid.com/) email service, then use this documentation to set up Bounce handling with FluentCRM.

First copy the Webhook URL at FluentCRM -> Settings -> SMTP/Email Sending Service Settings and Select SendGrid from the dropdown and copy the webhook URL.

![](https://fluentcrm.com/wp-content/uploads/2021/07/Screenshot-2021-07-20-at-1.03.27-PM.png)

Then Login to your SendGrid account then navigate to Settings -> MailSettings and click on Event Webhook

![](https://fluentcrm.com/wp-content/uploads/2021/07/Screenshot-2021-07-20-at-1.02.24-PM.png)

Then use the following data to setup the webhook

- **Authorization Method** -> None
- **HTTP** Post URL: Paste the Webhook URL copied from FluentCRM
- **Events to be POSTed to your URL:** Select **Dropped**, **Bounced, Unsubscribed,**and**Spam Reports**here.
- **Event Webhook Status:** Enabled

Now, click on the **Save** button to save the event.

![Event Webhook](https://fluentcrm.com/wp-content/uploads/2021/07/photo_2025-04-17-16-54-01-04-17-2025_04_55_PM.webp)

If you set up these two webhook correctly, so whenever an email mark as a complaint or Detected as a bounced, Then FluentCRM will change the contact status accordingly.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM **Contacts**. Then click **Filter By Statuses** and enable the **Bounced** checkbox.

![view bounced contacts in fluentcrm](https://fluentcrm.com/wp-content/uploads/2020/09/Screenshot-2023-08-12-at-3.31.52-PM.png)

---

## Bounce Handling with PostMark

**Source:** [https://fluentcrm.com/docs/bounce-handling-with-postmark/](https://fluentcrm.com/docs/bounce-handling-with-postmark/)

If you use the [Postmark](https://postmarkapp.com) email service then use this documentation to set up Bounce handling with FluentCRM.

First, copy the Webhook URL at FluentCRM -> Settings -> SMTP/Email Sending Service Settings Select Postmark from the dropdown and copy the Webhook URL.

![](https://fluentcrm.com/wp-content/uploads/2021/07/Screenshot-2021-07-20-at-12.51.47-PM.png)

Then **Login** to your [Postmark account](https://postmarkapp.com), Select your **Server** and then select the **Default Transactional Stream** from there. Now you will see there is a **Webhook** option select that and click on the **Add Webhook** button.

Then paste the webhook URL and select **Bounce** and **Spam Complaint**. *Please do not check “Include Message Content“*.

![](https://fluentcrm.com/wp-content/uploads/2021/07/Screenshot-2021-07-20-at-12.58.38-PM.png)

Then at the bottom of that page click “**Save Webhook**“.

If you set up these two webhooks correctly, so whenever an email is marked as a complaint or Detected as bounced, FluentCRM will change the contact status accordingly.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM **Contacts**. Then click **Filter By Statuses** and enable the **Bounced** checkbox.

![view bounced contacts in fluentcrm](https://fluentcrm.com/wp-content/uploads/2020/09/Screenshot-2023-08-12-at-3.31.52-PM.png)

---

## Bounce Handling with Pepipost

**Source:** [https://fluentcrm.com/docs/bounce-handling-with-pepipost/](https://fluentcrm.com/docs/bounce-handling-with-pepipost/)

If you use [PepiPost](https://pepipost.com) email service then use this documentation to set up Bounce handling with FluentCRM.

First copy the Webhook URL at FluentCRM -> Settings -> SMTP/Email Sending Service Settings and Select Pepipost from the dropdown

![](https://fluentcrm.com/wp-content/uploads/2021/07/Screenshot-2021-07-20-at-12.35.58-PM-1024x665.png)

Login to your PepiPost account and then navigate to Settings > Webhook -> Custom API then paste the webhook URL to the following inputs and click “Add Webhook” Button

- Unsubscribes
- Drops
- Bounces
- Spam Reports
- Invalids

![](https://fluentcrm.com/wp-content/uploads/2021/07/Screenshot-2021-07-20-at-12.48.58-PM-1024x710.png)

If you set up these two webhook correctly, so whenever an email mark as a complaint or Detected as a permanent Failure, Then FluentCRM will change the contact status accordingly.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM **Contacts**. Then click **Filter By Statuses** and enable the **Bounced** checkbox.

![view bounced contacts in fluentcrm](https://fluentcrm.com/wp-content/uploads/2020/09/Screenshot-2023-08-12-at-3.31.52-PM-1024x529.png)

---

## Bounce Handling with Mailgun

**Source:** [https://fluentcrm.com/docs/bounce-handling-with-mailgun/](https://fluentcrm.com/docs/bounce-handling-with-mailgun/)

If you use Mailgun email service then use this documentation to set up Bounce handling with FluentCRM.

First copy the Webhook URL at FluentCRM -> Settings -> SMTP/Email Sending Service Settings and Select Mailgun from the dropdown

![](https://fluentcrm.com/wp-content/uploads/2021/07/Screenshot-2021-07-20-at-12.29.33-PM-1024x558.png)

Login to your Mailgun account and then navigate to Sending > Webhook then click on the “Add webhook” button

Select the Event type as **Spam Complaints** and then paste the URL that you have copied from FluentCRM for Mailgun

![](https://fluentcrm.com/wp-content/uploads/2021/07/Screenshot-2021-07-20-at-12.27.03-PM-1024x640.png)

Then create another webhook in Mailgun for Permanent Failure

![](https://fluentcrm.com/wp-content/uploads/2021/07/Screenshot-2021-07-20-at-12.26.26-PM-1024x637.png)

If you set up these two webhook correctly, so whenever an email mark as a complaint or Detected as a permanent Failure, Then FluentCRM will change the contact status accordingly.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM **Contacts**. Then click **Filter By Statuses** and enable the **Bounced** checkbox.

![view bounced contacts in fluentcrm](https://fluentcrm.com/wp-content/uploads/2020/09/Screenshot-2023-08-12-at-3.31.52-PM-1024x529.png)

---

## Bounce Handling with Amazon SES

**Source:** [https://fluentcrm.com/docs/bounce-handler-with-amazon-ses/](https://fluentcrm.com/docs/bounce-handler-with-amazon-ses/)

Using Amazon SES, you can track the invalid email and mark them as Bounced. Amazon will track the delivery status of the email and if it failed to reach the recipient’s mail server, it will be marked as Bounced in your audience status so that you can exclude them in the future campaign.

***Tutorial**: [How to Configure Amazon SES with FluentCRM](https://fluentcrm.com/set-up-amazon-ses-with-fluentcrm/)

### Create a topic in Amazon SNS

1. Go to [Amazon SNS console](https://console.aws.amazon.com/sns/home).

![](https://fluentcrm.com/wp-content/uploads/2020/09/1-go-to-SNS.jpg)

2. Choose Create topic.

![](https://fluentcrm.com/wp-content/uploads/2020/09/2-goto-topics.jpg)

3. Select the Type **Standard**enter a name for the Topic, click on **Create topic** button..

![](https://fluentcrm.com/wp-content/uploads/2021/05/Amaon-Simple-Notification-Service-create-topic-1-1024x441.png)

4. From the Topic details of the topic that you created, navigate to Subscriptions, and then choose Create subscription.

![](https://fluentcrm.com/wp-content/uploads/2020/09/4-create-subscription-1024x646.jpg)

5. The topic will be pre-selected, in the **Protocol** select http or https (based on your server’s SSL status).

![](https://fluentcrm.com/wp-content/uploads/2020/09/5-subscription-screen-1024x661.jpg)

In Endpoint, you need to give your FluentCRM’s endpoint, grab the URL from your **FluentCRM dashboard -> Settings -> SMTP/Email Service Settings** section.

![](https://fluentcrm.com/wp-content/uploads/2020/09/6.5-Bounce-Handler-URL-1024x391.png)

After putting the URL in the **Endpoint** field, check **Enable raw message delivery**and click on **Create subscription** button. You should see a success screen like below:

![](https://fluentcrm.com/wp-content/uploads/2020/09/6-success-1024x402.jpg)

### Configure Amazon SES to send bounce information to FluentCRM

1. Go to [Amazon SES console](https://console.aws.amazon.com/ses/home) home, In the navigation pane, choose **Verified Identities**, and click on **Create Identity**.

![aws verified identities](https://fluentcrm.com/wp-content/uploads/2020/09/AWS-verified-identities-1024x496.png)

2. Create two identities, one for **Domain** and another for **Email Address**. You have to verify the domain and email address in order to set up the notification.

![aws create identity](https://fluentcrm.com/wp-content/uploads/2020/09/AWS-Create-Identity-1024x543.png)

3. From the verified Identities list select the domain or email that you have just verified, In the navigation pane, choose **Notifications**, and click on the Edit button from the Feedback notifications section.

![aws notification](https://fluentcrm.com/wp-content/uploads/2020/09/AWS-Notification-1024x584.png)

4. Under SNS Topic Configuration, for **Bounces**, select the SNS topic that you created. Do the same for **Complaints**.

![aws configure bounce](https://fluentcrm.com/wp-content/uploads/2020/09/AWS-configure-bounce-1024x584.png)

Now click on the Save changes button.  Thats it!

You have to repeat the above two steps of adding the SNS topic for both the verified domain and email address separately.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM **Contacts**. Then click **Filter By Statuses** and enable the **Bounced** checkbox.

![view bounced contacts in fluentcrm](https://fluentcrm.com/wp-content/uploads/2020/09/Screenshot-2023-08-12-at-3.31.52-PM-1024x529.png)

---

