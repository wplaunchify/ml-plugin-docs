# Getting Started

*Category from FluentSMTP documentation*

---

## FluentSMTP Settings

**Source:** [https://fluentsmtp.com/docs/fluent-smtp-settings/](https://fluentsmtp.com/docs/fluent-smtp-settings/)

This article will guide you through the process of using the **General Settings** of the main section of the [FluentSMTP](https://fluentsmtp.com/).

## General Settings

To learn how you can get the General Settings option of FluentSMTP, follow the steps with screenshots below –

First, go to the **Settings** section from the **FleuntSMTP Navbar** and you will get all the settings options under the **General Settings** sidebar on the right-hand side.

Once you are done, do not forget to click the **Save Settings** button, otherwise the changes you have made will not save.

![General Settings tab on the right-hand side](https://fluentsmtp.com/wp-content/uploads/2023/02/General-Settings-tab-on-the-right-hand-side-scaled.webp)

**All the options mentioned below inside the General Settings of the FluentSMTP are briefly explained below:**

- **Log Emails**: Whether to Log All Outgoing Emails for Reporting or not.

- **FluentCRM Email Logging**: Whether to Log All FluentCRM Emails for Reporting or not. Since FluentCRM has its own Email Logging. Disabling this option may reduce the Database Size for FluentSMTP.

- **Delete Logs**: The period after the emails sent and logged will be deleted.

- **Default Connection**: The default Delivery Connection is to be used for the whole of WordPress.

- **Fallback Connection**: A Fallback Connection in case of failure using default Delivery Connection.

- **Email Simulation**: You can enable email delivery simulation with this option. All the emails will be simulated but not delivered outside of WordPress. Enabling Email Logging will store the simulated emails under Email Logs and you can check them for further purposes.

- **Add Multi-Part Plain Text for HTML Emails** (**beta):**A multipart MIME message consists of parts with headers and content types (e.g., ‘text/plain’ or ‘image/jpeg’). The message starts with standard email headers and a ‘Content-Type’ header indicating its multipart nature and defining a unique boundary string that separates each section. Each part includes its own headers and body. The message ends with the boundary string followed by two hyphens, signifying the end of the multipart content.

**See the screenshot below as an example of Add Multi-Part Plain Text for HTML Emails** (**beta)** –

![Example of Multi-part plain text for HTML emails (beta)](https://fluentsmtp.com/wp-content/uploads/2023/02/Example-of-Multi-part-plain-text-for-HTML-.webp)

## Settings in a Specific Email Service Provider

Inside a specific email service provider you are already connected to, you will get three more settings options under the Action column. These are:

- **Edit option**: By clicking this **Pencil** icon, you can go to the **Connection** **Provider** page and edit the existing information.

- **Preview option**: By clicking this **Eye** icon, you can preview your Connection Details (e.g., sender email, sender name, force sender name, and token validity).

- **Delete option**: By clicking this **Trash** icon, you can delete the connection anytime for this specific server if needed.

![Three more settings under Action column of a specific email service provider](https://fluentsmtp.com/wp-content/uploads/2023/02/Three-more-settings-under-Action-column-of-a-specific-email-service-provider-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Introduction to FluentSMTP Dashboard

**Source:** [https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/)

## Dashboard Home

FluentSMTP is the fastest and most advanced WordPress Mail SMTP plugin in the market. We crafted this plugin for speed, reliability, and scalability.

- Real-Time Email Delivery
- Email Routing to multiple email connections
- Connect with Any Email Service Providers
- Email Logging and resending features
- Fallback Email Connection
- Resend Any Emails
- In Details Reporting
- Super fast UI powered by VueJS

The FluentSMTP Dashboard shows reports regarding the summary of Sent Emails, Connection Details, etc.

## Settings

This section is the central operating settings of the FluentSMTP. We have in-depth documentation here [FluentSMTP Settings](https://fluentsmtp.com/docs/fluent-smtp-settings/)

## Email Test

This is a very useful feature of the FluentSMTP to confirm the deliverability of any configured Email Connection.

### Send a test email

1. **From:** To send a test email the **From Field** will let you choose the Sender Email based on the configured Email Connection. If nothing is selected the default connection will be used.
2. **Send To:** You should use a free ESP Email Address in the **Send To Field** to get the test email and confirm if the email is received or not.
3. **HTML:** Whether to send the test email in **HTML MIME** or in the **PLAIN TEXT**version.

![](https://fluentsmtp.com/wp-content/uploads/2023/01/fluent-smtp-send-test-email.png)

### Test Email Confirmation

Now once you Send a Test Email from the previous section, if there is no issue in connectivity to the remote mail server and the authentication credentials it will show a successful message as below:

![](https://fluentsmtp.com/wp-content/uploads/2023/01/fluent-smtp-test-email-sent.png)

### Confirm Test Email Deliverability

Now it’s time to check from the Email Client to see if the Test Email is received or not. In our case, we used a Gmail account to receive the test email and it was received successfully as you can see below:

![](https://fluentsmtp.com/wp-content/uploads/2023/01/fluent-smtp-test-email-received.png)

If the test email is not under Inbox Folder, please check for Junk or Spam folder as well since there are thousands of factors regarding Domain, IP, and Delivery Provider reputation that may impact the landing of the email directly under the Inbox Folder.

## Documentation

The last Menu contains documentation for various settings and guides on how to configure and use FluentSMTP.

![](https://fluentsmtp.com/wp-content/uploads/2023/01/fluent-smtp-settings-documentation.png)

That’s all about the FluentSMTP Dashboard and its features. Happy Fluent mailing!

---

## Configurable Email Delivery Providers

**Source:** [https://fluentsmtp.com/docs/configurable-email-delivery-providers/](https://fluentsmtp.com/docs/configurable-email-delivery-providers/)

In the previous guide, we have installed and activated FluentSMTP on our website. And once it is activated, it will ask you to configure your first **Email Delivery Connection** so that your WordPress website can send emails through the desired and configured **Email Delivery Provider**.

![](https://fluentsmtp.com/wp-content/uploads/2021/01/fluent-smtp-configure-new.png)

## Available Email Delivery Methods

Connect as many Email Service Providers as you want and FluentSMTP will route your transactional and marketing emails automatically. This is one of the unique features that FluentSMTP has to offer.

![](https://fluentsmtp.com/wp-content/uploads/2021/01/fluent-smtp-connection-providers.png)

## List of Delivery Providers

There a lot of different Email Delivery Providers can be configured natively via API-based connection as listed below:

1. [Amazon SES API.](https://fluentsmtp.com/docs/set-up-amazon-ses-in-fluent-smtp/)
2. [Mailgun API.](https://fluentsmtp.com/docs/configure-mailgun-in-fluent-smtp-to-send-emails/)
3. [SendGrid API.](https://fluentsmtp.com/docs/set-up-the-sendgrid-driver-in-fluent-smtp/)
4. [Sendinblue API.](https://fluentsmtp.com/docs/setting-up-sendinblue-mailer-in-fluent-smtp/)
5. [SparkPost API.](https://fluentsmtp.com/docs/configure-sparkpost-in-fluent-smtp-to-send-emails/)
6. [Netcore API (formerly Pepipost).](https://fluentsmtp.com/docs/set-up-the-pepipost-mailer-in-fluent-smtp/)
7. [PostMark API.](https://fluentsmtp.com/docs/configure-postmark-in-fluent-smtp-to-send-emails/)
8. [Elastic Mail API.](https://fluentsmtp.com/docs/configure-elastic-email-in-fluent-smtp/)
9. [Gmail & Google Workspace OAuth API.](https://fluentsmtp.com/docs/connect-gmail-or-google-workspace-emails-with-fluentsmtp/)
10. [Outlook OAuth API.](https://fluentsmtp.com/docs/setup-outlook-with-fluentsmtp/)
11. [All Other SMTP.](https://fluentsmtp.com/docs/set-up-fluent-smtp-with-any-host-or-mailer/)

The Other SMTP open a vast area of configurable connections for any Email Delivery Providers that supports SMTP Protocol via Non-Secure, TLS, and SSL security protocols as well.

---

## Install and Activate FluentSMTP

**Source:** [https://fluentsmtp.com/docs/installing-fluent-smtp/](https://fluentsmtp.com/docs/installing-fluent-smtp/)

The FluentSMTP plugin fixes your email delivery issue by connecting WordPress Mail with your email service providers. These integrations are native, so they will send the emails super fast.

This plugin will solve all your email deliverability problems. FluentSMTP is the ultimate WP Mail Plugin that connects with your Email Service Provider natively and makes sure your emails are delivered properly.

## FluentSMTP Requirements

To use FluentSMTP, you need:
– WordPress 4.5 or later
– PHP version 5.6 or later

## Install & Activate the FluentSMTP Plugin from the Dashboard

The very first step to setting up FluentSMTP is to install the plugin on your WordPress website.

To do so, in your WordPress dashboard, select **Plugins > Add New** from the menu. Then type *Fluent SMTP* into the search function. Once the FluentSMTP plugin is displayed, click on **Install Now** button.

![](https://fluentsmtp.com/wp-content/uploads/2021/01/fluent-smtp-install.png)

Once FluentSMTP is installed, then please click on the **Activate** button to make it active on the WordPress website.

![](https://fluentsmtp.com/wp-content/uploads/2021/01/fluent-smtp-activate.png)

## Install & Activate FluentSMTP Manually

> 

FluentSMTP can be installed on your site from the official WordPress plugin repository. You can also download the plugin from [wordpress.org](https://wordpress.org/plugins/fluent-smtp/) and install it on your WordPress site manually.

![](https://fluentsmtp.com/wp-content/uploads/2021/01/fluent-smtp-wordpress.png)

To manually install & activate FluentSMTP you need to download and upload the package to your WordPress and the steps are:

1. Go to [https://wordpress.org/plugins/fluent-smtp/](https://wordpress.org/plugins/fluent-smtp/)
2. Download the plugin by clicking on the **Download** button
3. Go back to your **WordPress Dashboard** → **Add New** → **Upload** Plugin.
4. Select the **.zip** file you just downloaded earlier, and click on **Install Now**.
5. After installing, go ahead and click on the **Activate** button.

![](https://fluentsmtp.com/wp-content/uploads/2021/01/fluent-smtp-install-manually.png)

And once it is activated, it will be listed under your **Active Plugins** as below:

![](https://fluentsmtp.com/wp-content/uploads/2021/01/fluent-smtp-active.png)

That’s all for installing and activating FluentSMTP on your WordPress website. Now please follow and check out more about FluentSMTP documentation to configure your desired Email Delivery Provider and send out emails from your WordPress Website. Please follow [Configurable Email Delivery Providers – FluentSMTP](https://fluentsmtp.com/docs/configurable-email-delivery-providers/) documentation to know how to configure different email delivery providers and which method to use for them.

---

