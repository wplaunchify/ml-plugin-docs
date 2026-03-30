# Email Management

*Category from Fluent Support documentation*

---

## Change Amazon Lambda Cloud Processing Service for Email Piping

**Source:** [https://fluentsupport.com/docs/change-amazon-lambda-cloud-processing-service-for-email-piping/](https://fluentsupport.com/docs/change-amazon-lambda-cloud-processing-service-for-email-piping/)

This article will help you through the steps required to change your default **Amazon Lambda Cloud Processing** service and implement another one for **Email Piping** in **Fluent Support.**

## How to Change the Amazon Lambda Cloud Processing Service

To learn how to change the **Amazon Lambda Cloud Processing** service and implement your own **Lambda** function for Fluent Support Email Piping, refer to the Repository below —

[https://github.com/WPManageNinja/fluent-support-email-parser](https://github.com/WPManageNinja/fluent-support-email-parser)

Please use this repository. It’s the simplified version of our own implementation, but the mime parser is the same as our hosted one.

Notes:
– You need a bit of JS and serverless knowledge to deploy this function
– You need an extra domain to connect it with Amazon SES’s incoming endpoint. </aside>

If you want to know more details about Email Piping, you can also read this [What is Email Piping and Why?](https://fluentsupport.com/what-is-email-piping-and-why/) 
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our **@support team.** Thank you.

---

## Forward From Microsoft 365 Outlook Web Access (OWA)

**Source:** [https://fluentsupport.com/docs/forward-from-microsoft-365-outlook-web-access-owa/](https://fluentsupport.com/docs/forward-from-microsoft-365-outlook-web-access-owa/)

This article will guide you through the steps required to forward email from **Outlook Web Access** on **Microsoft 365** (formerly known as **Office 365**), also known as **OWA**, to your **Mailbox** of **Fluent Support**.

## Forward from Microsoft 365 Outlook Web Access (OWA)

Before starting the procedure, ensure you have followed the first steps; setting up a new Business Inbox in Fluent Support and your Fluent Support Mailbox Address is ready. 
To know the details of setting up a Business Inbox, check this [Documentation](https://fluentsupport.com/docs/adding-multiple-business-inboxes/).

Now to learn how to set up auto-forwarding from Google Workspace to Fluent Support, follow the steps with the screenshots below —

Log in to your **Microsoft 365 Outlook Web Access** by [clicking here](https://outlook.office365.com/).
Then, click on the **Gear Icon** located in the top right corner, and a Settings pop-up will appear.

![Settings of Microsoft 365 Outlook Web Access](https://fluentsupport.com/wp-content/uploads/2024/06/Gear-Icon-scaled.webp)

From the **Mailbox** **Settings** of your **Outlook** mailbox, select **Email**, then **Forwarding,** and click on the **Enable** **forwarding** toggle.

![Enabling Forwarding](https://fluentsupport.com/wp-content/uploads/2024/06/email-forwarding-enable.webp)

Now, paste the **Mailbox Email Address** you got from the **Email Piping** settings of **Fluent Support** into the ‘**Forward my email to’** field.

Also, we recommend enabling the **Keep a copy of forwarded messages** option.
Don’t forget to press the **Save** button once you’re done.

![Paste masked email address](https://fluentsupport.com/wp-content/uploads/2024/06/paste-the-mail.webp)

That’s it! Your email forwarding is set and the mailbox is activated!
Now, when anyone sends an email to your email address, a new ticket will be created in Fluent Support.

![Mailbox is activated](https://fluentsupport.com/wp-content/uploads/2024/06/Mailbox-activated-scaled.webp)

## If You Face Any Issues Regarding Mailbox activation

If you face any issues regarding the **Activation** of your **Fluent** **Support** **Mailbox**, follow the steps with the screenshots and GIFs below —

Go to the **Mailbox** **Settings** from your **Outlook** mailbox dashboard, select **Email**, then **Rules,** and click the **+ Add new rule.**

![Add rules avoid any issues](https://fluentsupport.com/wp-content/uploads/2024/06/Add-new-Rules.webp)

These are the fields under **Rules** that you need to fill in to add the rule.

![Fields of Rules](https://fluentsupport.com/wp-content/uploads/2024/06/Add-new-rules-first-look.webp)

Refer to the GIF, to see the whole **process of adding new rules** at a glance.

You can also test it to confirm that your mailbox is successfully activated for your users.

![Process of adding new rules](https://github.com/ab-auth/fs-doc/blob/main/Add%20new%20rules%20all%20settings%20-%20drift%20video.gif?raw=true)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Email Piping For Email-Based Support Tickets

**Source:** [https://fluentsupport.com/docs/email-piping-email-based-support-ticket/](https://fluentsupport.com/docs/email-piping-email-based-support-ticket/)

You must set up **Email Piping** first to use the **Business Inboxes** for **Email-based** support channels in **Fluent Support**. This article will guide you through the steps required for **Email Piping**.

## Email Piping Settings

To set up **Email Piping**, you must create a **Business Inbox** with an **Email-Based** support channel. And, to learn how to create this, read this **Documentation**.

To learn how to set up **Email Piping** for an **Email-based** business inbox, follow the steps with the screenshots below —

Go to **View Settings** from your desired email-based business inbox and click **Email Piping**.

![Open desired Business inbox's settings](https://fluentsupport.com/wp-content/uploads/2024/06/Email-Piping-dashboard-drift-vid.gif)

Read the **terms and conditions** before you agree to it and click the **Get Piping Email Details**.

To get the **email piping details**, ensure your **fluent support license key** is **active** as **Email Piping** is a **Pro Feature** of **Fluent Support**. To learn how to get the license key and activate it, read this [Documentation](https://fluentsupport.com/docs/upgrade-to-fluent-support-pro-add-on/#2-toc-title).

![Get piping email details](https://fluentsupport.com/wp-content/uploads/2024/06/get-email-piping-details.webp)

Now, copy the **Mailbox Email** address provided by **Fluent Support** to set up auto-forwarding of your emails from other email addresses.

![Copy Masked Mailbox Email ](https://fluentsupport.com/wp-content/uploads/2024/06/copy-the-mailbox-email-provided-by-fluent-support.webp)

## How to Forward/Redirect From an Email Provider

In this step, you need to set up an email forwarding or redirection from your email provider or host. Depending on your email provider, you can easily set up email forwarding following the instructions provided.

Remember, after setting up Email forwarding, a **verification email** will be sent. So, **check recent tickets**for the verification code.

**To show you the process, we have listed a few examples below –**

### Forward or redirect from an Email Provider

- [Google Workspace (formerly known as G Suite)](https://fluentsupport.com/docs/auto-forward-from-google-workspace-to-fluent-support/)
- [Office 365 Outlook Web Access (OWA)](https://fluentsupport.com/docs/forward-from-microsoft-365-outlook-web-access-owa/)
- [Amazon WorkMail](https://docs.aws.amazon.com/workmail/latest/userguide/email-rules.html)
- [Zoho Mail](https://www.zoho.com/mail/help/email-forwarding.html)
- [Yahoo Mail](https://help.yahoo.com/kb/new-mail-for-desktop/enable-automatic-email-forwarding-yahoo-mail-sln29133.html)

### Forward or redirect from a Host

- [Blue](https://www.bluehost.com/hosting/help/email-forwarders/1000)[host](https://www.bluehost.com/hosting/help/email-forwarders/1000)
- [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/308/2214/how-to-set-up-free-email-forwarding/)
- [cPanel](https://docs.cpanel.net/cpanel/email/forwarders/)
- [GoDaddy](https://www.godaddy.com/en-in/help/forward-incoming-email-to-another-email-address-32282)
- [Dreamhost](https://help.dreamhost.com/hc/en-us/articles/215724207-How-do-I-add-a-forward-only-email-address-)

After you have set an auto-forward, your mailbox will be active. Now, when anyone sends an email to your email address, a new ticket will be created in Fluent Support.

## Collaboration with CC in Fluent Support Tickets

CC is an email feature that allows you to include additional recipients in a message, with CC recipients visible to all.

The Screenshots below show the whole process being demonstrated visually:

When a user sends an email to your business inbox and includes additional CC users in subsequent reply emails, **Fluent Support** automatically designates CC users as sub-customers for that specific ticket. You will see the added CC emails also in your ticket.

Here, you can see the customer-added CC email which you can remove by pressing the **Discard CC** button before replying to it if you want.

![Discard CC](https://fluentsupport.com/wp-content/uploads/2024/06/CC-email-discard.webp)

You can also add one or more CC emails to send your reply to them. To add CC, click on the **Add CC** button.

![Add CC](https://fluentsupport.com/wp-content/uploads/2024/06/Add-CC-.webp)

To reply to the ticket, click on the **Add Reply** button. Your ticket reply will be sent to the primary customer and all the CC recipients.

Replies from CC users are treated as coming from the primary customer i.e., CC users can reply to the agent directly from their mailbox.

![Add Reply](https://fluentsupport.com/wp-content/uploads/2024/06/add-reply-button.webp)

If you want to know more details about Email Piping, you can also read this [What is Email Piping and Why?](https://fluentsupport.com/what-is-email-piping-and-why/)
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Auto-forward From Google Workspace (G Suite) to FluentSupport

**Source:** [https://fluentsupport.com/docs/auto-forward-from-google-workspace-to-fluent-support/](https://fluentsupport.com/docs/auto-forward-from-google-workspace-to-fluent-support/)

This article will provide detailed guidelines on setting up automatic forwarding of all emails from a **Google Workspace** mailbox or **Gmail address** to **Fluent Support.**

## Auto-Forward from Google Workspace to Fluent Support

Before starting the procedure, ensure you have followed the first steps; setting up a new Business Inbox in Fluent Support and your Fluent Support Mailbox Address is ready.
To know the details of setting up a Business Inbox, check this [Documentation](https://fluentsupport.com/docs/adding-multiple-business-inboxes/).

Now to learn how to set up auto-forwarding from Google Workspace to Fluent Support, follow the steps with the screenshots below —

Go to your **Gmail inbox**, click on the **Gear Icon** located in the top right corner, and click on the **See all settings** option from the drop-down menu.

![Open settings of Gmail Inbox](https://fluentsupport.com/wp-content/uploads/2024/06/Gmail-Inbox-Settings.webp)

From **Settings**, click on **Forwarding and POP/IMAP** tab from the top menu.

![Open Forwarding and POP/IMAP tab](https://fluentsupport.com/wp-content/uploads/2024/06/Forwarding.webp)

Click on the **Add a forwarding address** button & a pop-up will appear asking for your forwarding address.

![Enable Add a forwarding address](https://fluentsupport.com/wp-content/uploads/2024/06/Add-forwarding-Address.webp)

Now paste the **Mailbox Email Address** you got from the **Email Piping** settings of **Fluent Support,** and press the **Next** button.

![Add the masked Email address](https://fluentsupport.com/wp-content/uploads/2024/06/Add-address-next-button.webp)

You should receive a confirmation email from **Google** in your **Fluent Support Dashboard’s** **Tickets** section. Click the link to confirm your forwarding address.

![Confirm the email address](https://fluentsupport.com/wp-content/uploads/2024/06/Verification-mail-to-fluent-support-ticket.webp)

Again, go back to **Forwarding and POP/IMAP** tab under **Gmail Settings,** and **enable email forwarding** by selecting the option **Forwarding a copy of incoming mail to**.

Ensure the **dropdown’s forwarding address** is your**Fluent Support Mailbox address**.
And, don’t forget to press the **Save** **Changes** once you’re done editing your forwarding rule.

You can also choose what to do with the messages in your Gmail inbox. We **recommend keeping a copy in the inbox**, but it’s up to you.

![Enable Forwarding a copy of incoming mail to option](https://fluentsupport.com/wp-content/uploads/2024/06/Enable-forward-mail-to.webp)

That’s it! Your email forwarding is set and the mailbox is activated!
Now when anyone sends an email to your email address, a new ticket will be created in Fluent Support

![Mailbox is activated](https://fluentsupport.com/wp-content/uploads/2024/06/Mailbox-Active-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Managing Email Notifications

**Source:** [https://fluentsupport.com/docs/customize-email-notifications/](https://fluentsupport.com/docs/customize-email-notifications/)

With **Fluent Support**, you can set up**Email Notifications** that will send automated emails to customers, admins, or support agents based on certain actions such as a new Ticket created, a Ticket replied to by an agent, a ticket closed by an agent, etc. This article will help you through the steps required to learn the whole process.

## Set & Customize Your Email Notifications

To learn how to set up and customize your email notification, follow the steps with the screenshots below —

From the Fluent Support **Dashboard**, go to **Business Inboxes**, select your desired business inbox, and click on **View Settings**.

![Open the settings of  the desired business inbox](https://fluentsupport.com/wp-content/uploads/2024/06/view-settings-3-scaled.webp)

Here are your **Email Settings** from where you can customize your email notification.

To know the **Detailed** **Functionalities** of **Email Settings**, read this **Documentation**.

![Open Email Settings](https://fluentsupport.com/wp-content/uploads/2024/06/Email-Settings-1.webp)

Choose the**Notification Type**from the list of email notifications that suits your needs.

![Choose from all the Notification Types](https://fluentsupport.com/wp-content/uploads/2024/06/Email-notification-list.webp)

A brief explanation of the Settings of the Above-Mentioned Email Notifications List:

**Ticket Created (To Customer):** When a customer creates a new ticket, they will receive an email notification.
**Replied by Agent (To Customer)**: When an agent replies to a ticket, the customer will receive an email notification.
**Ticket Closed by Agent (To Customer)**: When an agent closes a ticket, the customer will receive an email notification.
**Ticket Created (To Admin):** When a customer submits a new ticket, the admin will receive an email notification.
**Replied by Customer (To Agent/Admin)**: When a customer replies to a ticket, the assigned **Agent or Admin** will receive the email as a notification.
**Ticket Agent Change (To Agent):** When a ticket agent changes, the agent/s will receive an email notification.
**Ticket Created by Agent (To Customer):** When an agent creates a ticket, the customer will receive an email notification.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

