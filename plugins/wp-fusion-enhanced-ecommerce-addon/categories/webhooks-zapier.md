# Webhooks Zapier

*Category from WP Fusion - Enhanced Ecommerce Addon documentation*

---

## Zapier Guide

**Source:** [https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/](https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/)

### Overview

Using this addon with Zapier allows you to trigger Zaps when users register on your site, update their profile, or when a tag is applied or removed.

For an example we’ll set up a workflow that triggers an on-site message in Intercom when someone completes a course.

### Setup

Navigate to Settings » WP Fusion and click on the webhooks tab to access the webhooks list. Click “Add New” to create a new webhook.

![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-7-1024x773.jpg)

For the trigger select Tags Applied, and in the tag selection box select the tag that will be applied when the course is completed. For the Post Fields you’ll want to enable at least *user_email* so the user can be identified in Intercom.

Then head over to Zapier and create a new Zap. For the trigger select Webhooks.

![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-3-1024x697.jpg)
![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-4-1024x706.jpg)
For the trigger type, select Catch Hook, and click Save + Continue.

![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-5-1024x618.jpg)

Zapier will give you a unique URL to use for your webhook. Copy this URL into the Delivery URL field in the webhook settings, and click the Send Test button. Then switch back to Zapier and click “Ok, I did this”.

On the next page you should see your incoming webhook listed, and you can expand it to see all of the data that was captured. If everything looks right, proceed to the next step.

#### Actions

Now that the data is set up to be captured, you can use that data in any Zapier action. Here we’ve created a “Incoming Message” action in Intercom, which uses the data from the webhook to target the user and personalize the message.

![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-8-1024x677.jpg)

You can use the “Insert A Field” button to insert any dynamic data from the webhook.

![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-6-1024x438.jpg)

Above is another example, sending a direct message in Slack when a webhook has been received. If you use Slack to support your membership community you could use this to automatically congratulate members in a Slack channel when they reach goals on your website.

---

## Overview

**Source:** [https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/)

### Overview

**Note:** This addon plugin is still available but is no longer being actively developed, as in most cases it’s simpler and more effective to connect your CRM or email marketing platform to Zapier or other webhook services directly.
The Webhooks addon (or “Zapier addon”) allows you to ping a third party URL when events happen in WP Fusion, similar to [WooCommerce’s webhooks](https://docs.woocommerce.com/document/webhooks/). This is advanced functionality, so if you’re not sure if you need it, you probably don’t.

We advise you to keep as much of your automation rules and sequences in your CRM as you can, but sometimes that’s not possible and in those cases this addon can fill the gap.

![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-1-1024x669.jpg)

The available triggers are:

- User registered
- Profile updated
- Tags applied (can specify which tags)
- Tags removed (can specify which tags)
- Tags modified
- Form submitted

The available fields are any fields in the 
```
wp_usermeta
```

 table, as well as the user’s contact ID and tags.

When using the *Form Submitted* trigger any data submitted with the form will be included in the webhook payload.

### How it works

When the selected event is triggered, the enabled fields will be extracted from the database and sent to your selected webhook URL.

Note that the only data that can be synced is data attached to the current logged in user in the 
```
wp_usermeta
```

 table of your database.

#### How it works – Form submitted

The Form Submitted trigger is a bit different in that it pings your webhook URL with the same data that WP Fusion has just sent to your connected CRM. This is the only trigger that works with visitors who aren’t logged in to your site.

### Supported services

#### With Zapier

Using this addon allows you to trigger Zaps when users register on your site, update their profile, or when a tag is applied or removed.

An example use case is someone who is using Ontraport as their primary tool for CRM and marketing automation, but wants to trigger an on-site message in Intercom when a course is completed. For a walkthrough on that scenario, check out [our Zapier guide](https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/).

Because the data is sent from WordPress *to* Zapier, the Zaps are processed instantly, which means this tool can be used effectively even with a free Zapier account.

#### With Zoho Flow

Zoho Flow can also capture the incoming data and route it across the various Zoho apps. This lets you update invoices, companies, leads, and other objects in Zoho that would normally be inaccessible to WP Fusion.

#### With other services

This addon can be used with any service that can capture an incoming webhook, like [IFTTT](https://ifttt.com/), [Automate.io](https://automate.io/), or even your own custom script or application.

---

## Changelog

**Source:** [https://wpfusion.com/documentation/webhooks-zapier/webhooks-changelog/](https://wpfusion.com/documentation/webhooks-zapier/webhooks-changelog/)

#### #1.3.1 - 10/24/2019

- Submitted form data will now be included in Register and Update webhooks

#### #1.3 - 8/5/2019

- ✨ New Added "Form Submitted" trigger
- 🔧 Fixed Fixed tag setting box not saving when empty

#### #1.2 - 2/7/2019

- ✨ New Added check all and uncheck all option for Post Fields setting
- 🔧 Fixed Fix for data in wp_users table not being sent

#### #1.1 - 12/22/2018

- 🔧 Fixed Fixed "Send Test" button for unpublished webhooks

#### #1.0 - 12/21/2018

- Initial release

---

