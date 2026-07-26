# Email Report

*Category from Independent Analytics Pro documentation*

---

## How to Debug & Improve Email Deliverability

**Source:** [https://independentwp.com/knowledgebase/email-report/improve-email-deliverability/](https://independentwp.com/knowledgebase/email-report/improve-email-deliverability/)

If you are not receiving the email report, there are a few steps you can take to debug and resolve this issue. We’ll also cover smart techniques for improving deliverability later in this tutorial.

## How to debug the email

Please start by using the **Send test email** button to attempt a delivery of the email report. If you do not receive the email, continue with the following debugging steps.

### Check the spelling of the email address

First, make sure you have the correct email address entered with the proper spelling.

### Check your spam folder

If the email address is spelled correctly, check your spam folder to see if the email arrived there instead of your inbox.

### Check if other emails are being sent by WordPress

Try sending a password reset email to check if any emails are being delivered from your website. You can do this quickly by opening your site in a private browser window and navigating to the login screen.

The password reset email is sent by WordPress core, so if you don’t receive this email, you can rule out any plugin bugs.

### Configure an SMTP plugin

If you didn’t receive the password reset email, then you may need to configure an SMTP plugin in order to deliver emails from your site. We recommend [WP SMTP](https://wordpress.org/plugins/wp-mail-smtp/), which is easy to use.

Using an SMTP plugin is generally a good idea because it will improve the deliverability of all emails sent from your website.

### Install WP Mail Logging

If you configure an SMTP plugin and your site still isn’t sending emails, try installing the [WP Mail Logging](https://wordpress.org/plugins/wp-mail-logging/) plugin. It will track every email sent by your website and will report on any configuration issues. It may highlight an issue with the SMTP configuration that you can quickly solve.

### Check if cron events are working

If the test email works, but the scheduled email isn’t sending, your site might not be firing cron events. You can install the [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/) plugin and then navigate to the **Tools > Cron Events** menu. If the cron system has been disabled, you will see warnings next to every scheduled task, including the **iawp_send_email_report** task that IA uses.

If you see warnings about missed events, then your site has likely disabled the cron system. Check your **wp-config.php** file and delete the following line of code to re-enable it:

```
define('DISABLE_WP_CRON', true);
```

Alternatively, you can leave the cron system disabled and instead enable cron events via your hosting account. This can be more reliable, and we have more notes on how this works further down in this article.

### Contact your host

If you are still not able to get emails sent from your site, please contact your web host, and they should be able to help resolve the issue.

### Enable debugging

If you received the password reset email, then this means there is not a sitewide issue with sending emails. In this case, please [enable error logging](https://independentwp.com/knowledgebase/common-questions/enable-error-logging/) on your website. Then, try sending a test email one more time and check if you see a new error message in the /wp-content/debug.log file. If you see an error pointing to our plugin, please share it with us at support@independentwp.com, and we will help resolve the issue.

## How to further improve deliverability

If your email report is going to the spam folder or sending later than scheduled, there are a few steps you can take to remedy these issues.

The steps below will improve the deliverability of all emails sent by your website.

### Add SPF and DKIM records

Your emails are more likely to end up in the spam folder if your domain doesn’t have SPF and DKIM records configured. This is especially true if you are sending the email report to multiple email addresses.

The SPF and DKIM DNS records help verify the content and sender of the email, improving deliverability. Google has a brief explainer video that sums them up well:

Adding these records will help all of your site’s emails avoid the spam folder, and it also improves protection against phishing attacks.

### Use real cron events

A **cron event** is basically a scheduled task, and it’s the underlying technology used to send the email report. WordPress has a built-in cron system that tons of plugins use, and it makes it easy to schedule upcoming events.

However, the cron system run by WordPress isn’t a true cron system. For WordPress to run a scheduled event, it has to get loaded. For example, if there is an event scheduled for 5pm and nobody loads a page on your site at 5pm, the event won’t get triggered. Instead, if someone visits by 5:02pm, that’s when the event will run.

For this reason, scheduled events may run a few minutes late, but they can sometimes run much later.

If you have a new website with a small amount of traffic and an event is scheduled for 1am, it may not get triggered for hours. When this happens, cron tasks can get backed up, and then some of them may not run at all. This could prevent the email report from getting sent.

While this isn’t as much of an issue for high-traffic sites, it is always better to use a real cron system. Many web hosts will enable true cron events if you request it. Just ask them to disable WP Cron and use real cron events, and they should be able to set it up for you.

If that’s not an option, you can use a service like [Easy Cron](https://www.easycron.com/) instead. It can trigger the site’s cron events every 20 minutes on the free tier, which should be enough to prevent any build-ups. They even [have a plugin](https://wordpress.org/plugins/easycron/) that makes setup easier.

With real cron events configured, the email report will be delivered precisely at the time selected.

---

## How to Send the Automated HTML Email Report

**Source:** [https://independentwp.com/knowledgebase/email-report/email-reports/](https://independentwp.com/knowledgebase/email-report/email-reports/)

Independent Analytics Pro can send an automated HTML email report to numerous recipients.

Here’s what the email report looks like: [View full preview](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/07/html-email-report.png)

As you can see, it includes the Quick Stats, a chart of your daily views, and Top 10 lists for your:

- Pages
- Referrers
- Countries
- Devices
- Campaigns
- Forms
- Link patterns
- Landing pages
- Exit pages

Now, here’s how you can get this report into your own inbox.

## How to enable the email report

First, visit the **Settings** menu and locate the **Email Report** section.

In the **Email Report** section, start by choosing the interval you want the email to be delivered. You can choose between daily, weekly, or monthly delivery.

![Email delivery interval](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:547/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/04/email-delivery-interval.png)

If you choose **Daily**, you’ll receive an email every day showing yesterday’s stats. If you choose **Weekly**, the email will be sent once a week and include the prior week’s data. It will be delivered on the [first day of the week](https://independentwp.com/knowledgebase/dashboard/change-starting-day-week/) as selected in the settings. Lastly, if you choose **Monthly**, you’ll receive an email on the 1st of the month with data from the last month.

Next, you can choose the time of day you want the email to be delivered using the **Delivery Time** setting.

![Email report delivery time](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:768/h:549/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/email-report-delivery-time.png)

To add a recipient, enter your email address into the **Add new email address** input, then click the **Add email** button. Repeat this for as many email addresses as you want, then click the **Save settings** button.

![Email report add email](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:510/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/email-report-add-email.png)

If you enter more than one email address, the additional addresses will be BCC’d, so they’ll see the email as being delivered to the first recipient only.

Once your email address is entered, you can click the **Send test email** button to receive a copy of the email for review. You can send the test email to all of the saved email addresses, or the first email address only.

You’ll also see a notice at the top of the settings confirming the time and date of your next scheduled email.

![Next email notice](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:547/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/04/next-email-notice.png)

### Changing the From address

By default, the email report will use the site’s admin email address configured in the main Settings menu as the From address. However, you can change it to another address if you’d like.

![From email address](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:590/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/from-email-address.png)

If you change the email address, please make sure the email is coming from the same domain as your website. For example, if your website is example.com, you could send the email from hello@example.com. If you use an email address like example@gmail.com, it is likely to get marked as spam and not arrive in your inbox.

### Changing the Reply-To address

You can also set a custom reply-to email address. For most users, this won’t be necessary, but if you’re sending the email report to clients who might respond with questions, you can customize this field with the best email address for them to respond to.

![Reply-To email address](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:590/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/reply-to-email-address.png)

### Customizing the footer text

There is a sentence that appears in the footer of the email, which by default reads, “This email was generated and delivered by …” followed by your website’s URL. This is to confirm that no external servers were ever in contact with your data in the generation and delivery of the email report.

You can customize this text to say whatever you would like by updating the **Email footer text** field.

![Email footer text setting](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:528/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/email-footer-text-setting.png)

Only plain text is allowed at this time (no HTML).

### Pausing email deliverability

If you are sending daily email reports to your team, you may want to pause delivery around the holidays. To do so, you can click the **Pause Emails** button inside the notice with the next scheduled delivery date.

![Pause emails](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:456/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/pause-emails.png)

The notice will update to let you know that email delivery has been paused.

![Resume emails](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:449/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/resume-emails.png)

Emails will not begin sending again until the **Resume Emails** button is clicked.

## Customizing the colors

There are also ten settings available to customize the colors of the email.

![Customize email colors](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/09/customize-email-colors.png)

We recommend using a primary color along with a brighter and darker variation of that color. For the text, use a very light or dark color that will have ample contrast with the background color.

For example, here’s a look at what the email would look like with the purple header and sub-header backgrounds replaced with complementary shades of blue.

![Email with custom colors](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:528/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/email-custom-colored.png)

When customizing the colors, you can click the **Preview email** button to see how the email looks.

![Preview email button](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:565/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/04/preview-email-button.png)

The preview will show up in a pop-up like this:

![Email preview](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:584/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/04/email-preview.png)

This is faster and easier than sending a test email every time you want to preview your color changes.

Once you’re done, make sure to save your settings to finalize your changes.

## Privacy and deliverability

Independent Analytics Pro creates the email with your site’s data and delivers it via your own website. Your data is never shared with any outside sources, and the email does not contain any images or external resources.

If you have issues with the email reaching your inbox, please follow our deliverability guide to debug this issue: [How to Debug & Improve Email Deliverability](https://independentwp.com/knowledgebase/email-report/improve-email-deliverability/)

---

