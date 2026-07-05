# Form Notification

*Category from Fluent Forms documentation*

---

## Fluent Forms Not Sending Email Confirmations

**Source:** [https://fluentforms.com/docs/fluent-forms-not-sending-email-confirmations/](https://fluentforms.com/docs/fluent-forms-not-sending-email-confirmations/)

Sometimes, **Fluent Forms** users experience email deliverability issues (i.e., their email is not sending to the destination). This means their form users may not receive confirmation emails or other expected notifications. A couple of factors can contribute to email not sending issues.

This article will guide you through troubleshooting and fixing the email deliverability issue with Fluent Forms notifications, ensuring that emails are sent and received properly.

## Check Email Notification

The very first troubleshooting you can do is check whether your **Email Notification**setting is enabled. To learn how to ensure the email notification is enabled, follow the steps below –

First, go to **Forms** from the **Fluent Forms Navbar** and click the **Settings** of your desired form where you encountered the email deliverability issue.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/02/1.-open-desired-form-settings-scaled.webp)

Once you are on the form’s **Settings & Integrations**page, open the **Email Notifications**tab from the left side, and you will see all of the **Email Notifications** you added.

Now, if your desired email notification is showing **Disabled**, turn on the **Toggle** switch and the notification will be **Enabled**.

> To learn more detail about Email Notification, read this Documentation.

![](https://fluentforms.com/wp-content/uploads/2025/02/2.-enable-email-notification-scaled.webp)

## Check Submission Logs

Check the **Submission Logs** (which record all submission activities of a form in one place) for the form experiencing email confirmation issues. This may help you determine why the email was not sent to the destination.

**To learn how to check the form Submission Logs of a Form, follow the steps below:**

Go to **Forms** from the **Fluent Forms Navbar**, click the **Entries**of a chosen form where you faced the issue, and you will get all the submission entries for this particular form.

![](https://fluentforms.com/wp-content/uploads/2025/02/3.-Open-desired-form-entries-scaled.webp)

Now, open the submission entry you want to check by clicking the **Eye Icon** under the **Actions** column. To learn more details about **Form Entries**, read this **Documentation**.

![](https://fluentforms.com/wp-content/uploads/2025/02/4.-open-desired-submission-entry-scaled.webp)

Once you open the desired entry page, scroll down, and you will get your desired **Submission Logs** for this particular form submission.

> To learn more details about submission activity logs and API calls, refer to the Activity Logs and API Logs documentation.

Now, you can see a message as **Email Notification broadcasted** (i.e., the email is successfully triggered, and Fluent Forms is working as it should).

![](https://fluentforms.com/wp-content/uploads/2025/02/5.-Submission-logs-of-a-form-scaled.webp)

If the form fails to trigger an email notification, you will see an error message with a “**Failed**” status under the **Submission Logs**, explaining the reason for the error.

![](https://fluentforms.com/wp-content/uploads/2025/02/6.-Failed-message.webp)

But if the form successfully triggers the email notification and sends it to the destination, you will see a “**Success**” status under the **Submission Logs.**

![](https://fluentforms.com/wp-content/uploads/2025/02/7.-Sucess-message.webp)

## Check SMTP for Emails

We always recommend using an SMTP plugin in your WordPress site for better email deliverability. You can try out [FluentSMTP](https://wordpress.org/plugins/fluent-smtp/), a free SMTP plugin that does not require any license. FluentSMTP ensures real-time email delivery, making sure all emails reach users’ inboxes efficiently. It uses your chosen SMTP server to send emails in batches and can resend emails if they get blocked.

> To learn how to install and activate FluentSMTP in your WordPress Site, read this Documentation.Additionally, to learn how to connect an external server with FluentSMTP, refer to this Documentation.

#### Test your Email Deliverability with FluentSMTP

FluentSMTP includes an “**Email Test**” feature to test if your email connection (SMTP server) is working. This helps you verify your email is functional on your server and confirm the email deliverability. To learn more about email testing, [click here](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/#email-test).

To learn more about using FluentSMTP, refer to the video below.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Conditional Email Routing

**Source:** [https://fluentforms.com/docs/conditional-email-routing/](https://fluentforms.com/docs/conditional-email-routing/)

**Fluent Forms** lets you set up additional **Conditional Email Routing**, similar to [Conditional Email Notifications](https://fluentforms.com/docs/conditional-email-notification-in-fluent-forms/) except it allows you to send emails to different recipients based on user responses or specific events.

This article will guide you through **Configuring** the **Email Routing** with specified conditions to send**Email Notifications**.

## Conditional Email Routing

To learn how to configure conditional email routing, follow the steps below –

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form**by clicking the **Edit** button where you want to set the conditions.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2024/12/1.-desired-Form-Editor-2-scaled.webp)

Now, go to **Settings & Integrations** from the top navbar and open the **Email Notifications**tab.

First, you can **Enable** the default**Admin Notification**by **toggling it on.**Then**,**open its settings using the **Settings Icon** to set conditions based on your needs.

Or, create a new one by clicking the **+ Add Notification** button. To learn how to add a new email notification to a specific form, read this [Documentation](https://fluentforms.com/docs/how-to-setup-admin-user-email-notifications/).

**For example**, I used the existing notification to show you the whole process.

![](https://fluentforms.com/wp-content/uploads/2024/12/2.-Settings-Integration-Email-Notification-Add-new-notification-1-scaled.webp)

### Configuring Email Routing

Once you are on the **Email Notification** settings page of your desired form, select **Configure Routing**from****the**Send to**option, and additional options similar to conditional logic will appear.

#### Setting Condition/s

Once you enable the option, you can specify the different**Email Routes**to send notification, **Parameter**, its **Operator**, and the corresponding **Value**. **Remember**, the selected parameter will trigger the action only if the condition is met.

First, in the “**Send To**” (first field), provide the email address where you want to send email notifications.

Then, in the “**Parameter**” field (second field), select an **input field** that needs to correspond with the value provided in the “**Value**” field (fourth field) and set an option in the “**Operator**” field (third field). The parameter will trigger the action if the condition is met.

> For example, I set two different email routes “admin@gmail.com” and “moderator@gmail.com“, chose “Country” as the parameter, used “Equals” as the operator, and entered “United States” and “Bangladesh” as the corresponding values. As a result, when users from the United States submit the form, a notification will be sent to admin@gmail.com, and for users from Bangladesh, the notification will be sent to moderator@gmail.com.

This way you can add as many conditional logics as you need by clicking the **Plus Icon** and delete any conditions by clicking the **Minus Icon** in the right corner.

Once you complete, click the **Save Settings** button to make the condition/s functional.

![](https://fluentforms.com/wp-content/uploads/2024/12/3.-Configure-Routing-option-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Conditional Email Notification in Fluent Forms

**Source:** [https://fluentforms.com/docs/conditional-email-notification-in-fluent-forms/](https://fluentforms.com/docs/conditional-email-notification-in-fluent-forms/)

**Fluent Forms** offers the “**Conditional Logic**” feature, which sends email notifications to the specified email address after each form submission based on particular action triggers according to set conditions. This article will guide you through setting up the **Conditional Email Notification** in **Fluent Forms**.

## Conditional Email Notification

To learn how to set conditional logic for email notifications, follow the steps below –

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form**by clicking the **Edit** button where you want to set the conditions.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2024/12/1.-desired-Form-Editor-scaled.webp)

Now, go to **Settings & Integrations** from the top navbar and open the **Email Notifications**tab.

First, you can **Enable** the default**Admin Notification**by **toggling it on.**Then**,**open its settings using the **Settings Icon** to set conditions based on your needs.

Or, create a new one by clicking the **+ Add Notification** button. To learn how to add a new email notification to a specific form, read this [Documentation](https://fluentforms.com/docs/how-to-setup-admin-user-email-notifications/).

**For example**, I used the existing notification to show you the whole process.

![](https://fluentforms.com/wp-content/uploads/2024/12/2.-Settings-Integration-Email-Notification-Add-new-notification-scaled.webp)

### Enabling Conditional Logic

Once you are on the**Email Notification**settings page of your desired form, scroll down to the **Conditional Logics** feature, and check the **Enable conditional logic** box.

#### Setting Condition/s

Once you enable the option, you can specify the **Parameter**, its **Operator**, and the corresponding **Value**.

Plus, you can choose whether **All** or **Any** of your conditions should match to trigger the actions. **Remember**, the selected parameter will trigger the action only if the condition is met.

In the “**Parameter**” field (first field), select an **input field** that needs to correspond with the value provided in the “**Value**” field (last field) and set an option in the “**Operator**” field (middle field). The parameter will trigger the action if the condition is met.

> For example, I selected “Email” and “Country” as the parameters, used “Contains” and “Equals” as the operators, and entered “@gmail.com” and “United States” as the corresponding values. As a result, when users from the United States with an email address containing @gmail.com submit the form, a notification will be sent to the specified email address.

This way you can add as many conditional logics as you need by clicking the **Plus Icon** and delete any conditions by clicking the **Minus Icon** in the right corner.

Once you complete, click the **Save Settings** button to make the condition/s functional.

![](https://fluentforms.com/wp-content/uploads/2024/12/3.-Enable-Conditional-Logics-.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Weekly Email Summary

**Source:** [https://fluentforms.com/docs/weekly-email-summary/](https://fluentforms.com/docs/weekly-email-summary/)

**Fluent Forms** allows you to keep track of your form submissions based on a particular day in every week through the **Email Summaries** feature. Also, you can get an overall idea of how your forms are performing.

This article will guide you through the process of setting up **Email Summaries** to **send a weekly report** on **Form Submissions**through **Emails**.

## Email Summaries

To learn how to send a weekly summary report on form submissions through the email notification to the admin/users, follow the steps below –

First, go to **Global Settings**from the **FluentForms Navbar**, open the **General**tab from the left sidebar, and click the **Email Summaries**option.

Now, you can see the **Enable Email Summaries** toggle is turned on by default and the **Site Admin** will get the email every **Monday** by default as well. You can **Disable** it anytime if you want.

1. **Send To**: Here, you can choose where to send the email summaries. To send it to any other email besides **Site** **Admin**, click the **Custom Email** option and provide the Email Address/es where you want to send it. You can also use **Comma** (,) and **add multiple email addresses** where you want to send email summaries.
2. **Get Response On**: Here, you can set the desired day when you want to send the summary email.

1. **Subject Line**: Here you can set a subject for your weekly email summary notification.

Don’t forget to click the **Save Settings**button to make all the setup functional.

![](https://fluentforms.com/wp-content/uploads/2024/12/1.-Email-Summaries-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Setup Form Submission Confirmation Message in Fluent Forms

**Source:** [https://fluentforms.com/docs/setup-form-submission-confirmation-message-in-fluent-forms/](https://fluentforms.com/docs/setup-form-submission-confirmation-message-in-fluent-forms/)

**Fluent Forms** allows you to send a **Default/Customized** **Confirmation Message**after each form submission to let the users know their form was submitted successfully. This article will guide you through setting up the **Confirmation Message** in **Fluent Forms**.

## Confirmation Settings

To set up a customized form submission confirmation message, follow the steps below –

First, go to **Forms** from the top navbar, and open the **Editor** page of your desired form****by clicking the **Edit** button where you want to set the notifications, or you can create a new form.

![](https://fluentforms.com/wp-content/uploads/2024/12/1.-desired-Form-Editor-4-scaled.webp)

Now, go to **Settings & Integrations** from the top navbar and open the **Confirmation Settings**tab under the **Settings** option.

Here, you can see three **Confirmation Types**for setting up the**Confirmation Message**. These are:

1. Same Page
2. To a Page
3. To a Custom URL

Once you complete the setup, click the **Save Settings** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2024/12/2.-Confirmation-Settings-option-scaled.webp)

**All three confirmation types mentioned above are briefly explained below:**

### 1. Same page

This option is selected by default. It enables you to show the confirmation message on the same page where the form is embedded.

**A. Message to show**: Here, you can see a default confirmation message. You can keep it or customize it as per your needs. You can also add **Shortcode/s**and**Media/s** in your confirmation message by using the **Add Media** and**Add Shortcodes** button in the right corner. Also for advanced customization, you can edit the message in **HTML Codes** through the **Text** tab.

**B. After Form Submission**: Here, you can select whether you want to **Hide** or **Reset** the Form after each form submission.

Finally, click the **Save Settings** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2024/12/3.-Same-Page-confirmation-type.webp)

### 2. To a Page

The option allows you to redirect your subscribers to a designated page on your website after they submit the form, enhancing their experience by guiding them to relevant content or further actions. This could be a**Customized Welcome Page**, your **Home Page**, or **Any Other Page** on your site.

**A. Select Page:**Here, choose the desired page you want your subscriber to be redirected to after form submission by clicking the **Arrow Icon**. Here you will find your website’s all pages in this dropdown list.

**B. Redirect Query String**: Enabling this option allows you to pass the field data via a query string (checkbox, currently unchecked). Here also you can redirect queries through **Shortcode** by clicking the **Three-dot Icon**in the right corner.

**C. Redirection Message**: Here, you can customize the message displayed after form submission. You can also add **Shortcode/s**and**Media/s** in your confirmation message by using the **Add Media** and**Add Shortcodes** button in the right corner. Also for advanced customization, you can edit the message in **HTML Codes** through the **Text** tab.

Once you are done, click the **Save Settings** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2024/12/4.-To-a-Page-confirmation-type.webp)

### 3. To a Custom URL

This confirmation type allows you to redirect your subscriber to a page/website that is not in your domain through a custom URL.

**A. Custom URL**: Here, put the desired **Outbound URL** where you want your subscriber redirected after form submission. Here you can also add **Shortcode/s**by clicking the left side **three-dot-icon.**

**B. Redirect Query String**: Enabling this option allows you to pass the field data via a query string (checkbox, currently unchecked). Here also you can redirect queries through **Shortcode** by clicking the **Three-dot Icon**in the right corner.

Suppose you have a form with a field like **Name**. If you enable **Pass Field Data via Query String**, after the form submission, the URL could look like: https://yourwebsite.com/thank-you/?name=JohnDoe

- Here, ‘name=JohnDoe’ is passed through the query string.
- You can then use this information on the next page for personalization or tracking.

**C. Redirect Message**: Here, you can customize the message displayed after form submission. You can also add **Shortcode/s**and**Media/s** in your confirmation message by using the **Add Media** and**Add Shortcodes** button in the right corner. Also for advanced customization, you can edit the message in **HTML Codes** through the **Text** tab.

> If you want to pass data using a query string and automatically populate form fields on the redirected page, follow this documentation.

Once you are done, click the **Save Settings** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2024/12/5.-To-a-Custom-URL-confirmation-Type.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## How to Setup Admin/User Email Notifications

**Source:** [https://fluentforms.com/docs/how-to-setup-admin-user-email-notifications/](https://fluentforms.com/docs/how-to-setup-admin-user-email-notifications/)

**Fluent Forms** allows you to send email notifications to the admin and users every time someone fills out a form. You can also inform others besides admin or users (e.g., team members, support agents, moderators, etc.) when the form is filled out.

This article will guide you through the process of setting up the **Admin/User Email Notification** in **Fluent Forms**.

## Email Notifications for Admin/User

To learn how to set up admin/user email notifications, follow the steps below –

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form**by clicking the **Edit** button where you want to set the Email Notification.

![](https://fluentforms.com/wp-content/uploads/2024/12/1.-desired-Form-Editor-3-scaled.webp)

Now, go to **Settings & Integrations** from the top navbar and open the **Email Notifications**tab.

Here, you can see one **Admin Notification Email** is already created by default. You can use it by **enabling the toggle** button and edit by clicking the **Settings Icon**.

Or, you can **Create** a new one by clicking the **+ Add Notification** button. **For example**, I created a new notification to show you the whole process of adding email notifications for Admin/User.

![](https://fluentforms.com/wp-content/uploads/2024/12/2.-Settings-Integration-Email-Notification-Add-new-notification-2-scaled.webp)

Once you are on the **Email Notifications** page, fill in all the necessary settings as per your needs, click the **Save Notification** button, and your admin/user notification will be set.

![](https://fluentforms.com/wp-content/uploads/2024/12/3.-Email-Notfications-Page-scaled.webp)

**All the settings mentioned above are briefly explained below:**

> Remember, all the settings option functions the same for both the Admin and User email notifications except the “Send To” setting.

### A. Name

Here, provide a name for your email notification to find it easily later.

### B. Send To

Here, you will get three options for setting up the **Email Notification**. These are:

- **Enter Email:**Use this option to set up the email notification for the Admin.
- **Select a Field:**Use this option to set up the email notification for the Users.
- **Configure Routing:** Use this set up additional [Conditional Email Routing](https://fluentforms.com/docs/conditional-email-routing/)**.**

## Setup Admin Notification Using Enter Email

By default, the 
```
{wp.admin_email}
```

 shortcode is available to send emails to the site admin. This shortcode will automatically use the default admin email set in your WordPress settings.

If you prefer to specify a different admin email manually, choose the **Enter Email** option in the **Send To** field and input the desired email address.

You can also send notifications to multiple recipients by separating email addresses with a comma (,).

![](https://fluentforms.com/wp-content/uploads/2025/04/Email-Notifications-Admin-scaled.webp)

## Setup User Notification Using Select a Field

Now, select the **Select a Field** option in the **Send To** field and define an **Email** input field in your form whose value will receive the confirmation email.

You can select the **Email** field by clicking the **drop-down arrow** beside the **Send To Field**.

![](https://fluentforms.com/wp-content/uploads/2024/12/5.-Select-a-Field-option.webp)

### C. Subject

Here, you can set a subject for your email notification. You can also add data from submitted entries through the input fields using the **Three-dot-icon** dropdown list in the right corner.

![](https://fluentforms.com/wp-content/uploads/2024/12/6.-Subject-option.webp)

### D. Email Body

Here, you can set the body for your email according to your requirements.

You can use the **Add Shortcodes**drop-down arrow on the right corner to add dynamic data. 
Also for advanced customization, you can edit the email body in **HTML Codes** through the **Text** tab.

![](https://fluentforms.com/wp-content/uploads/2024/12/7.-Email-Body-option.webp)

#### Send Email as Raw HTML Format

Similar to the **Text** tab, this option lets you send the email body in **HTML format**. Here, click the**Note Icon** in the right corner to add the desired ShortCode/s.

![](https://fluentforms.com/wp-content/uploads/2024/12/8.-Send-email-as-Raw-HTML-Format.webp)

### E. Conditional Logics

Enabling this option allows you to set specific conditions for sending email notifications to the admin, ensuring notifications are sent only when the conditions are met.

> To learn more detail use of this Conditional Logics, read this Documentation.

![](https://fluentforms.com/wp-content/uploads/2024/12/9.-Conditional-Logics.webp)

### F. Media File Attachments

**Fluent Forms**allows you to send **PDF/Image Attachment/s** to the email notification using the **Media File Attachments** option. Also, you can delete any file by clicking the Trash Icon anytime if needed.

> You should use SMTP so send the attachment via email otherwise, It may go to spam.

![](https://fluentforms.com/wp-content/uploads/2024/12/10.-Media-File-Attachments-option.webp)

### G. Advanced

Use this setting if you want to configure someone else who also needs to be notified of an entry submission (your teammates, support staff, etc).

- **From Name & Email:** Here, you can specify the**sender name** and **email** in the **From Name** and **From Email** fields respectively. Plus, you can add different dynamic data by clicking **Shortcode** **Icon**.

- **Reply To**: Here, you can **specify an email address for users to reply to the notification**, ensuring you receive their responses. If you leave this field blank, the user reply will be sent to the Default Email you set for your site.

- **BCC & CC**: Here, you can add an **email address in the CC or BCC** if you want to send a copy of the email to another person. Use a Comma in between each email address to add more than one receiver.

Finally, click the **Save Notification** button when you complete all the setup.

![](https://fluentforms.com/wp-content/uploads/2024/12/11.-Advanced-option.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

