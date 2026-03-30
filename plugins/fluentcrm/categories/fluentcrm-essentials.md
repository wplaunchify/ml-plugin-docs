# Fluentcrm Essentials

*Category from FluentCRM documentation*

---

## Cron Job: Replace with a Server-side Cron Job (cPanel)

**Source:** [https://fluentcrm.com/docs/replace-wordpress-cron-with-a-real-cron-job/](https://fluentcrm.com/docs/replace-wordpress-cron-with-a-real-cron-job/)

The importance of configuring a Cron Job for a WordPress Website is to ensure that the scheduled jobs run timely and successfully and do not fail the scheduled jobs or events and everything works in order. This includes running FluentCRM Email Processing, Sending, Running Automation, Email Sequences, and other processing tasks.

## Prechecks

Before we begin, please make sure that you have read about the [Cron Job: Basics & Checklist](https://fluentcrm.com/docs/fluentcrm-cron-job-basics-and-checklist/) and event recurrences of FluentCRM and also followed [Disable Default WordPress Cron System](https://fluentcrm.com/docs/fluentcrm-cron-job-basics-and-checklist/#disable-default-wordpress-cron-system) with the code below:

```
/* Add any custom values between this line and the "stop editing" line. */

define('DISABLE_WP_CRON', true );    // Disable the default PHP-based Cron invocation.

/* That's all, stop editing! Happy publishing. */
```

Cron Jobs or Scheduled Jobs can be run or invoked locally and remotely. In this article, we will learn about the recommended and most effective method for configuring a cron job for a WordPress Website. We also have a few articles focused on running cron jobs remotely:

## Configure WordPress Cron Job from cPanel

One of the most used and popular **Web Hosting Control Panels** is **cPanel** and we will be evaluating it in this article.

### Cron Settings

Now please go to the Cron Jobs option as shown below:

![cpanel cron jobs (1)](https://fluentcrm.com/wp-content/uploads/2020/10/cpanel-cron-jobs-1.png)

This will offer some input fields to set the Cron Intervals and the Cron Command as below:

![cron cpanel](https://fluentcrm.com/wp-content/uploads/2023/02/cron-cpanel.png)

Most of cases, the suitable recommended time interval for running the Cron job is per minute. Putting a Star(*) means EVERY. Here all 5 stars mean Every Minute on Every Hour on Every Day on Every Month on Every Weekday.

The command for running WordPress is:

```
wget -q -O - https://testwp.ibrahim.com/wp-cron.php?doing_wp_cron > /dev/null 2>&1
```

The total command including time intervals which is the resulting final output is:

```
* * * * * wget -q -O - https://testwp.ibrahim.com/wp-cron.php?doing_wp_cron > /dev/null 2>&1
```

That’s all for cPanel WordPress Cron Configuration! Thanks and enjoy working with WordPress Scheduled Events.

---

## Troubleshoot: Guidelines on WordPress Error

**Source:** [https://fluentcrm.com/docs/troubleshoot-guidelines-on-wordpress-error/](https://fluentcrm.com/docs/troubleshoot-guidelines-on-wordpress-error/)

FluentCRM is a WordPress Plugin. A typical WordPress contains various Plugins to work with different types of features and may sometimes create issues working with different plugins, hosting environments, Caching Mechanisms, etc.

There are many types of errors that can occur in WordPress, such as:

1. **Compatibility errors:** These occur when a theme or plugin is not compatible with the version of WordPress or other themes/plugins that are installed.
2. **Database errors:** These occur when there is a problem with the database, such as a connection error or table corruption.
3. **Permission errors:** These occur when a file or folder on the server does not have the correct permissions set, preventing WordPress from accessing it.
4. **Caching Errors:** This is a common error that occurs when something causes the PHP code in WordPress to fail, resulting in a blank white screen instead of the expected output.

**For any further assistance with any issues, please reach out to WPManageNinja Support for FluentCRM, Fluent Forms, FluentSMTP, Fluent Support, Ninja Tables, and Paymattic Products.**

[WPManageNinja Support](https://wpmanageninja.com/support-tickets/)

---

## Email Delivery of FluentCRM

**Source:** [https://fluentcrm.com/docs/sending-emails-and-email-deliverability/](https://fluentcrm.com/docs/sending-emails-and-email-deliverability/)

FluentCRM is an Email Marketing & Automation tool. It helps you launch Email Campaigns, Email sequences, and Email Automation to automate your marketing emails.

Using your hosting space for email isn’t a good idea. And using the hosting for sending PHP emails would most likely deplete the hosting resources. Thus, we suggest that you use a separate email service.

To learn more about various Email Delivery Providers and their overview, you may check out some of the blogs below:

## Configure an Email Delivery Service Provider

In order to use an email service, you need to use an SMTP plugin. There are plenty of SMTP plugins in the WordPress repository. But most of them offer slow email sending.

### FluentSMTP to Handle All Email Delivery

That’s why we’ve created a free-for-lifetime SMTP plugin called FluentSMTP. In fact, it is the only SMTP plugin that allows multiple SMTP connections at the same time described here: **Multiple SMTP Connections & Auto Routing.** This means, if you install FluentSMTP, you can use multiple email-sending services to cut down your email-sending costs. Some email services can be a bit costly. So if you have FluentSMTP, you can use the expensive email service for your marketing emails and the less expensive email service for not-so-important WordPress emails.

![fluent smtp wordpress](https://fluentcrm.com/wp-content/uploads/2023/01/fluent-smtp-wordpress.png)

For more about FluentSMTP, Configurations, and features please check the relevant documentation: [Install and Activate FluentSMTP](https://fluentsmtp.com/docs/installing-fluent-smtp/), [Configurable Email Delivery Providers](https://fluentsmtp.com/docs/configurable-email-delivery-providers/), and [Introduction to FluentSMTP Dashboard](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/)

Click the button to install FluentSMTP. Or, you can download and install FluentSMTP on your WordPress by clicking the button below:

[Download FluentSMTP](https://wordpress.org/plugins/fluent-smtp/)

### List of Configurable Delivery Providers

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

### Example of Multiple Email Delivery Connections

Below is an example screenshot of multiple Email Delivery Connections based on various Delivery Providers:

![fluent smtp multiple connections](https://fluentcrm.com/wp-content/uploads/2023/01/fluent-smtp-multiple-connections.png)

## FluentCRM Email Processing

There are different places from where Emails can be sent such as **Test Emails** from [Email Templates](https://fluentcrm.com/docs/email-templates/), [Email Campaigns](https://fluentcrm.com/docs/setting-up-campaign/), [Email Sequences](https://fluentcrm.com/docs/email-sequence/), [Automation Email Actions](https://fluentcrm.com/docs/automation-email-actions/), [Double Opt-in Settings](https://fluentcrm.com/docs/global-double-opt-in-settings/), and [Recurring Campaigns](https://fluentcrm.com/docs/recurring-campaign/).

**Send the emails right now:** Once the scheduling is set to “right now,” the emails will begin processing. This process is a task where FluentCRM starts generating Emails against each subscriber with necessary headers and email content.

**Schedule the emails:** You can set specific dates and times for your email processing.

**Schedule emails within a specified date-time range:** Your emails will start processing between your specified time-date range.

![schedule the emails](https://fluentcrm.com/wp-content/uploads/2023/08/Schedule-the-emails.png)

The next step is to deliver the emails. It can be delivered through wp_mail() directly or if you have a plugin like FluentSMTP. FluentSMTP takes emails from FluentCRM and then relays them to the Email Delivery Provider you configure in settings and used from FluentCRM.

Below is a screenshot of an Email campaign while sending a campaign. Please check the above links for specific features.

![flunetcrm email processing](https://fluentcrm.com/wp-content/uploads/2023/01/flunetcrm-email-processing.png)

## FluentCRM Email Scheduling

The emails can be scheduled or waited until a period of time from different places described below:

### Delay Emails in Automation

Below is an example screenshot of Automation Emails waiting for 1 Day. For more about this please check: [Wait X Days/Hours](https://fluentcrm.com/docs/primary-automation-actions/#wait-x-days-hours)

![crm automation wait](https://fluentcrm.com/wp-content/uploads/2023/01/crm-automation-wait.png)

## Compare Cron Status

FluentCRM Cron Status runs 60 Seconds, 5 Minutes, and 60 Minutes Intervals.

That’s all about Email Sending from FluentCRM! Please read through our guidelines and documentation to learn in-depth knowledge about using and utilizing the features of FluentCRM.

---

## Cron Job: FluentCRM Cron With Cloudways

**Source:** [https://fluentcrm.com/docs/fluentcrm-cron-with-cloudways/](https://fluentcrm.com/docs/fluentcrm-cron-with-cloudways/)

Cloudways provides a comprehensive range of cloud solutions including dedicated servers, cloud VPS hosting, and managed services for enterprises and online businesses.

## Find WordPress Installation Directory

We need to find the WordPress Installation directory first where the Cron Script wp-cron.php file is located and will be needed in the further steps. You can find your WordPress Installation Directory easily by going to **WordPress Dashboard ⮕ Tools ⮕ Site Health ⮕ Info Tab ⮕ Directories and Sizes Section.** More about this can be found here: [Find WordPress Installation Directory](https://fluentcrm.com/docs/fluentcrm-cron-job-basics-and-checklist/#find-wordpress-installation-directory)

![crm get wordpress directory](https://fluentcrm.com/wp-content/uploads/2023/01/crm-get-wordpress-directory.png)

## Cloudways Application Cron Job

Now we need to go to the application inside the Cloudways for which we are going to add the cron job. From the Cloudways dashboard go to the **Application tab** by clicking the Application Menu link.

![cloudways dasboard servers](https://fluentcrm.com/wp-content/uploads/2023/01/cloudways-dasboard-servers.png)

From the Applications, click on the specific Application for which you are going to configure the cron job.

![cloudways dasboard applications](https://fluentcrm.com/wp-content/uploads/2023/01/cloudways-dasboard-applications.png)

### Cloudways Application Overview:

Then you will be redirected to the application overview contains a lot of information and an action list. From the left side menus, click on the **Cron Job Management** menu.

![cloudways dasboard application overview](https://fluentcrm.com/wp-content/uploads/2023/01/cloudways-dasboard-application-overview.png)

### Application Advanced Cron Job

Then you will be redirected to the Cron Job Management page, by default the Basic options will be offered. We need the Advanced option to configure the WordPress Cron Job.

![cloudways dasboard add new cron](https://fluentcrm.com/wp-content/uploads/2023/01/cloudways-dasboard-add-new-cron.png)

### Add New Cron Job

To add a new cron job, please click on the **ADD NEW CRON JOB** button.

![cloudways cron advanced add new](https://fluentcrm.com/wp-content/uploads/2023/01/cloudways-cron-advanced-add-new.png)

From here we will need to select the Time Interval at which period the cron script or the command will be executed.

![crm cloudways advanced cron 2](https://fluentcrm.com/wp-content/uploads/2023/01/crm-cloudways-advanced-cron-2.png)

In a typical Email Marketing Application, the cron time interval is required per minute. Running a per-minute cron job will ensure that any job from WordPress will be executed or invoked every minute and will not be left to wait for longer than it was intended. Now select **Every Minute** from the dropdown below:

![crm cloudways advanced cron 3](https://fluentcrm.com/wp-content/uploads/2023/01/crm-cloudways-advanced-cron-3.png)

In the command field, input **wp-cron.php** which will add this cron script for the application root directory in the following section.

![cloudways add cron every minute](https://fluentcrm.com/wp-content/uploads/2023/01/cloudways-add-cron-every-minute.png)

In the next screen you will see a full cron command will be added as below:

![cloudways job added](https://fluentcrm.com/wp-content/uploads/2023/01/cloudways-job-added.png)

That’s all about Configuring FluentCRM WordPress Cron Job in Cloudways!

---

## Cron Job: FluentCRM Cron with EasyCron

**Source:** [https://fluentcrm.com/docs/fluentcrm-cron-with-easycron/](https://fluentcrm.com/docs/fluentcrm-cron-with-easycron/)

We have seen in [Cron Job: FluentCRM Cron with Cron-job.org](https://fluentcrm.com/docs/fluentcrm-cron-with-cronjob-org/) that an alternative method can be configured to run cron jobs remotely in case we do not have access to the Shell, or features inside the server to configure the cronjob for WordPress. In this article, we will explore another online service to call our WordPress Website’s cron script remotely.

As a reminder, a few warnings for such remote cron invocation are listed again below:

## EasyCron Dashboard

To get started with EasyCorn, go to [Online Cron Service | Webcron – EasyCron.com](https://www.easycron.com/)

![crm easycron home](https://fluentcrm.com/wp-content/uploads/2023/01/crm-easycron-home.png)

Once you are done with finishing the user registration and verification and then go to the EasyCron Dashboard as shown below:

![crm easycron dash](https://fluentcrm.com/wp-content/uploads/2023/01/crm-easycron-dash.png)

## Create EasyCron Cron Job

Once you click on the **+ Cron Job** button from the left side of the Dashboard, you will see a window containing a few options like the below:

### URL & Time

The first section or tab contains the essential settings of the Cron Job.

![crm easycron new](https://fluentcrm.com/wp-content/uploads/2023/01/crm-easycron-new.png)

- **URL to Call:** The URL to the webpage of the WordPress Cron Script including any additional parameters. Please replace with your own domain or subdomain where in our case it is:

```
https://testwp.ibrahim.com/wp-cron.php?doing_wp_cron
```

- **When to Execute:** This should be every minute or per minute. It is required by FluentCRM’s Every Minute Email Sending Schedule.
- **Timezone:** Carefully look for the Timezon in your WordPress General Settings and set it according to that. For Every Minute Execution, you may skip this.

Once you are done with the details, click on the **Create Cron Job** to finally create the cron job.

### Identifier

Now head over to the Identifier tab and set a Cron Job Name that is optional but helps set a name to the cron job for future easy understanding. You can also provide an additional Description.

![crm easycron identifier](https://fluentcrm.com/wp-content/uploads/2023/01/crm-easycron-identifier.png)

### Cron Jobs List

When the cron job is created you will see the cron job listed in the dashboard where a lot of information is available for the Cron Job. Please make sure to confirm it is in Active Status.

![crm easycron list](https://fluentcrm.com/wp-content/uploads/2023/01/crm-easycron-list.png)

## Cron Job Logs & Prediction

We should also check back sometime later if the cron is still running successfully or not from the Cron Job Logs & Prediction. For a successful cron succession the dashboard will be similar to the below screenshot.

![crm easycron logs](https://fluentcrm.com/wp-content/uploads/2023/01/crm-easycron-logs.png)

Once again, Running FluentCRM requires a proper and timely running Cron Job. These types of remote cron jobs may not always work or have problems for higher processing websites.

---

## Cron Job: FluentCRM Cron with Cron-job.org

**Source:** [https://fluentcrm.com/docs/fluentcrm-cron-with-cronjob-org/](https://fluentcrm.com/docs/fluentcrm-cron-with-cronjob-org/)

In this article, we will be exploring how to configure the cron job in other ways, in case we do not have permission, feature, or authorization to configure the cron job the recommended way as in the [Replace WordPress Cron with a Real Cron Job](https://fluentcrm.com/docs/replace-wordpress-cron-with-a-real-cron-job/) guide with PHP Application Binary.

There are a few online services that provide remote service to call a specific script available and public on the web. The recommended setup is to invoke the cron script with PHP Binary itself. We have dedicated documentation regarding the differences between remote and local cron job configurations here: **Cron Job: Differences and Troubleshooting**. In addition, a few key points are listed below:

## Cron-Job Dashboard

To get started with [cron-job.org](http://cronjob.org) please go to their homepage: [Free cronjobs – from minutely to once a year | cron-job.org](https://cron-job.org/en/)
Finish the user registration, and verification and go to the dashboard.

![crm cronjoborg site](https://fluentcrm.com/wp-content/uploads/2023/01/crm-cronjoborg-site.png)

Once you are done with the registration and get to Dashboard, Please click on the **Create Cronjob** button to create a new Remote Cron Job to call your WordPress website’s Cron Script.

![crm cronjoborg creatnew](https://fluentcrm.com/wp-content/uploads/2023/01/crm-cronjoborg-creatnew.png)

## Create Cron Job

The creation window will show a few options and we do not have to worry about all the things. We just need to:

![crm cronjoborg create](https://fluentcrm.com/wp-content/uploads/2023/01/crm-cronjoborg-create.png)

- **Set Title:** Provide a Name for the Cron Job as an Identifier.
- **URL:** This is the main part. The URL to the Cron Invocation via the web page of the WordPress Cron Script. In our case, this is ( Please replace the base URL or domain part with your website domain or subdomain ):

```
https://testwp.ibrahim.com/wp-cron.php?doing_wp_cron
```

- **Enable Job & Save Responses in Job History.**

When the above information is submitted click on the **Create button** to finally create the cron job.

## Cron Job List & History

Once you confirm the test result shows success, create and save the cron job and you will see the cron job listed under All Cronjobs.

### Cronjobs List

![crm cronjoborg list](https://fluentcrm.com/wp-content/uploads/2023/01/crm-cronjoborg-list.png)

### Cronjob History

![crm cronjoborg success history](https://fluentcrm.com/wp-content/uploads/2023/01/crm-cronjoborg-success-history.png)

If everything is okay with the configuration and the test runs successfully, after some time when the cron schedule passes some schedules you will see the cron job history showing success for the next schedules it ran. If the history shows any error you should investigate and troubleshoot the issue.

Once again, Running FluentCRM requires a proper and timely running Cron Job. These types of remote cron jobs may not always work or have problems for higher processing websites.

---

## Cron Job: Basics & Checklist

**Source:** [https://fluentcrm.com/docs/fluentcrm-cron-job-basics-and-checklist/](https://fluentcrm.com/docs/fluentcrm-cron-job-basics-and-checklist/)

[FluentCRM](https://fluentcrm.com/) is a plugin that works continuously in the background to complete and process the tasks that are scheduled every minute like any other Email Marketing Application. This article will guide you through the **Primary Requirements** of **WordPress Cron Job Handover**to either****[Server-side](https://fluentcrm.com/docs/replace-wordpress-cron-with-a-real-cron-job/)****or**Alternative Methods.**

## What Cron Jobs Do?

**Cron jobs** are important because they allow for the automated execution of scripts and programs at specified intervals. This can be useful for tasks such as **scheduling backups**, **sending notifications**, or **updating data**. Cron jobs can also help to automate repetitive tasks and improve the efficiency of a system by removing the need for manual intervention.

## FluentCRM Cron Job Status

**FluentCRM** has a few scheduled events and jobs that run frequently at various intervals. To know where you can find the regular and healthy **Cron Job Status,** follow the steps with screenshots below –

First, go to **Settings** from the **Fluent CRM Navbar**, click the **Tools** settings option from the left sidebar, and you will find all the **CRON JOB Status**of**Fluent CRM.**

**Recommended (We recommend) Intervals for Cron Job Status should be as below**:

- **Scheduled Email Sending**: This should be between 1 second to 60 seconds (1 Minute).
- **Scheduled Email Processing**: This should be between 1 minute to 5 minutes.
- **Scheduled Automation Tasks**: This should be between 1 minute to 60 minutes (1 hour).

![settings tools cron job status](https://fluentcrm.com/wp-content/uploads/2023/01/Settings-Tools_Cron-Job-Status-scaled.webp)

## Disable Default WordPress Cron System

Before we proceed to configure a [Server-side](https://fluentcrm.com/docs/replace-wordpress-cron-with-a-real-cron-job/) cron job, we will need to confirm that the **default PHP-based scheduled job** **running** is **disabled** from the **WordPress Configuration File** (wp-config.php).

To do this please open the wp-config.php file and look for the section below:

```
/* Add any custom values between this line and the "stop editing" line. */

/* That's all, stop editing! Happy publishing. */
```

We need to add a new Configuration Directive for Server-Side invocation within these two lines which is below:

```
define('DISABLE_WP_CRON', true); // Disable Default WordPress Cron System
```

Now the code will look similar as below:

```
/* Add any custom values between this line and the "stop editing" line. */

define('DISABLE_WP_CRON', true);    // Disable the default PHP-based Cron invocation.

/* That's all, stop editing! Happy publishing. */
```

**Now please follow the links relevant to your hosting and preference to configure the server-side cron job:**

- [Cron Job: Replace with a Server-side Cron Job (cPanel)](https://fluentcrm.com/docs/replace-wordpress-cron-with-a-real-cron-job/)
- [Cron Job: FluentCRM Cron With Cloudways](https://fluentcrm.com/docs/fluentcrm-cron-with-cloudways/)
- [Cron Job: FluentCRM Cron with Cron-job.org](https://fluentcrm.com/docs/fluentcrm-cron-with-cronjob-org/)
- [Cron Job: FluentCRM Cron with EasyCron](https://fluentcrm.com/docs/fluentcrm-cron-with-easycron/)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

