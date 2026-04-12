# Webhooks

*Category from WP Fusion - Event Tracking Addon documentation*

---

## Omnisend Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/omnisend-webhooks/](https://wpfusion.com/documentation/webhooks/omnisend-webhooks/)

### Overview

You can use webhooks in Omnised to send data back to your WordPress site using WP Fusion. Using these webhooks, you can create new users on your WordPress site, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).
You can use webhooks inside of an automation when you need to send data back to WordPress at specific times, or only under certain conditions. For example you could set up a webhook to generate a new WordPress user whenever a contact is subscribe to marketing.

To set this up go to the Automations page in your Omnisend account and create a new automation. Select a trigger for the workflow, such as when a contact is subscribe to marketing, or when a fields meets certain criteria. In the example below we’ve configured the workflow to be triggered whenever the contact is subscribe to marketing.

![an omnisend workflow automation interface displays a trigger for customer email subscriptions, followed by an action with a url link. side menu options include email, sms, push notification, and webhooks.](https://wpfusion.com/wp-content/uploads/2025/11/Omnisend-Webhooks-Automation-Trigger-1024x405.png)

Add a new messages, and choose “Webhook”.

In the **URL** field, enter your site’s URL along with the **access_key** and **wpf_action** parameters. For example:

https://mydomain.com/?access_key=YOURACCESSKEY&wpf_action=add

You can find your site’s unique access key at the bottom of the main **WP Fusion settings page**, under the **Webhooks** section.

In the **HEADERS**, add the following keys and values:

- **key**: 
```
Accept
```

 | **value**: 
```
application/json
```
- **key**: 
```
Content-Type
```

 | **value**: 
```
application/json
```

In the **BODY**, add:

```
"email": "[[contact.email]]"
```

![a workflow interface shows the “webhook” option selected, integrating omnisend, with settings on the right displaying a url, headers for application/json, and a json body containing an email field using a contact email variable.](https://wpfusion.com/wp-content/uploads/2025/11/Omnisend-Webhooks-Configuration-1024x509.png)

Now when the automation is triggered the contact will be added to WordPress as a new user. There are several options for structuring the webhook URL, as follows:

### Webhook URL structure

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Omnisend for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your Omnisend application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Omnisend contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Omnisend after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Omnisend where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Klaviyo Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/klaviyo-webhooks/](https://wpfusion.com/documentation/webhooks/klaviyo-webhooks/)

### Overview

You can use webhooks in [Klaviyo](https://help.klaviyo.com/hc/en-us/articles/4534329515931) to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on workflows in Klaviyo, or update existing users’ meta data and lists.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Creating webhooks

[Webhooks in Klaviyo](https://help.klaviyo.com/hc/en-us/articles/4534329515931) are managed in Flows. Flows allow you to send webhooks to create or update WordPress users as part of a specific process. For example:

- List “Website Access” is added
- Send webhook to create WordPress user
- Send welcome email
- Wait 3 days
- Apply list “Unlock Course Two”
- Send webhook to update lists

To create a webhook, first create a flow, and then select a trigger. In this example we are triggering the flow for anyone who is added to the *WP Users* list, the webhook will import a new WordPress user based on the Klaviyo subscriber.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/11/klaviyo-webhook-flow-1024x616.jpg)

In addition to the trigger when someone is added to a list, you can also trigger flows when someone is added to a **segment**, or based on a **date field** in a custom profile property.

After adding your trigger, add a Webhook action from the panel on the left.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/11/klaviyo-webhook-setup-1024x647.jpg)

The only setting you need to update is the *Destination URL*. You can find the webhook URL to your site [on the General tab](https://wpfusion.com/documentation/webhooks/about-webhooks/) in the WP Fusion settings.

You have three options for the 
```
wpf_action=
```

 part of the webhook URL: **update**,**update_tags** and **add**(explained below).

After configuring the webhook, make sure to set the *Status* to *Live*, and publish the Flow.

That’s it! When the subscriber reaches the webhook step in the flow, Klaviyo will notify WP Fusion to load their data back into WordPress.

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior:

#### To update a user’s lists

To update an existing WordPress user’s lists from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s lists and meta data

To update a user’s lists and pull any new meta data from Klaviyo for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your Klaviyo application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Klaviyo contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Klaviyo after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Klaviyo where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## KlickTipp Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/klicktipp-webhooks/](https://wpfusion.com/documentation/webhooks/klicktipp-webhooks/)

### Overview

You can use webhooks (aka “outbounds”) in [KlickTipp](https://wpfusion.com/go/klick-tipp) to send data back to your WordPress site using WP Fusion.

Using webhooks you can create new users on your WordPress site based on actions in KlickTipp, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Setup

In your KlickTipp account, head to Automatisierung » Outbounds » [Neuer Outbound](https://app.klicktipp.com/tools/me/outbound/add) to create a new outbound.

![Screenshot of KlickTipp outbound configuration](https://wpfusion.com/wp-content/uploads/2024/08/klick-tipp-webhooks-1024x813.jpg)

Enter a name for your outbound, and select an activation trigger, for example when a tag is applied or a contact is updated.

In the **Activation URL**, enter the URL to your site following the examples below. Make sure to include your access key, which you can find on the general tab in the WP Fusion settings.

For the **Request method**, select *POST*.

Then click **Add fields** and select *Subscriber ID* from the dropdown. The Subscriber ID is the only field required by WP Fusion.

Click *Save and Test* to test your webhook.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/08/klick-tipp-webhook-logs-1024x279.jpg)

In the [WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/) on your site, you should see the incoming webhook, followed by a message that contact ID 12345 was not found. This is normal, since *12345* is not a real contact ID, it’s just used when testing the webhook.

**If you see this message, your webhooks are working.**

If you don’t see any activity in the logs, verify your webhook URL, and then review our [webhook troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/), as it’s possible the webhook is being blocked by a firewall or security rule.

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from KlickTipp for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your KlickTipp application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their KlickTipp contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to KlickTipp after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in KlickTipp where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Encharge Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/encharge-webhooks/](https://wpfusion.com/documentation/webhooks/encharge-webhooks/)

### Overview

You can use webhooks in [Encharge](https://wpfusion.com/go/encharge/) to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on flows in Encharge, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Setup

To create a webhook, first navigate to [Flows](https://app.encharge.io/flows/) in Encharge, and create a new flow. Select your trigger. In this example, we will trigger the webhook when the *Import to WordPress* tag is applied to contact.

![Setting up webhooks in Encharge](https://wpfusion.com/wp-content/uploads/2024/05/encharge-webhooks-1-1024x533.jpg)

Connect the trigger to a*Send Webhook* action, and in the popup, enter the URL to your site, following the [examples below](#webhook-url-parameters).

![Configuring a webhook in Encharge](https://wpfusion.com/wp-content/uploads/2024/05/encharge-webhooks-2-1024x912.jpg)

For the **Method** and **Content Type**, leave the defaults (POST and JSON, respectively).

For the **Webhook Data**, use 
```
id
```

 and 
```
{{ person.id }}
```

 for the properties. This will identify the contact to WP Fusion. Click Save to continue.

![Testing a webhook with Encharge](https://wpfusion.com/wp-content/uploads/2024/05/encharge-webhooks-3-1024x456.jpg)

In the next step, you can select a contact to use to test the webhook. Search for a test contact and click Send Test. You should see the incoming webhook data [in the WP Fusion logs](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#check-the-logs).

The final step will show the data retuned from the webhook. WP Fusion will respond whether or not the webhook was successful, and the user ID of the imported or updated user.

![Handling a webhook response in Encharge](https://wpfusion.com/wp-content/uploads/2024/05/encharge-webhooks-4-1024x648.jpg)

You can (optionally) copy this data into custom contact fields for use in your automations or marketing.

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Encharge for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your Encharge application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Encharge contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Encharge after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Encharge where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Customer.io Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/customer-io-webhooks/](https://wpfusion.com/documentation/webhooks/customer-io-webhooks/)

### Overview

You can use webhooks in [Customer.io](https://customer.io) to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on journeys in Customer.io, or update existing users’ meta data and segments.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Setup

First [create a new journey](https://customer.io/docs/journeys/journeys-overview/) in Customer.io and select a trigger, for example when someone is added to a segment.

![](https://wpfusion.com/wp-content/uploads/2024/01/customer-io-webhook-journey-1024x647.jpg)

In the workflow editor, select **Send and Receive Data** from the side panel, and connect it to your trigger.

![](https://wpfusion.com/wp-content/uploads/2024/01/customer-io-webhook-config-1024x309.jpg)

In the webhook settings, enter the URL to your site following [the examples below](#webhook-url-parameters). For the webhook body, copy and paste the following code:

```
{
    "email": "{{customer.email}}"
}
```

Then click **Send Test** to test the webhook.

![](https://wpfusion.com/wp-content/uploads/2024/01/customer-io-webhook-test-result-1024x669.jpg)

If everything worked correctly, you should see “**Response status: 200 OK”**. You can check the [WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/) on your website to see that the contact and their tags were loaded.

![](https://wpfusion.com/wp-content/uploads/2024/01/customer-io-webhooks-log-1024x331.jpg)The WP Fusion logs show a webhook was successfully received from Customer.io, and the contact’s meta and segments were loaded.
If the webhook is not successful, verify that the URL and access key are correct, and that your site isn’t behind a firewall or “bot protection”. For more information, see the [webhooks troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior:

#### To update a user’s segments

To update an existing WordPress user’s segments from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s segments and meta data

To update a user’s segments and pull any new meta data from Customer.io for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your Customer.io application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Customer.io contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Customer.io after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Customer.io where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## EmailOctopus Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/emailoctopus-webhooks/](https://wpfusion.com/documentation/webhooks/emailoctopus-webhooks/)

### Overview

You can use webhooks in [EmailOctopus](https://wpfusion.com/go/emailoctopus) to automatically send data back to your WP Fusion powered WordPress site.

Using webhooks, you can import new users on your WordPress site based on changes in EmailOctopus.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Setup

In EmailOctopus, Click your name in the top right » Integrations & APIs » Webhooks, and click **Add Endpoint**.

![](https://wpfusion.com/wp-content/uploads/2023/05/emailoctopus-webhooks-1.png)

Enter a name for the webhook, and the url of your website.

For the event action, select which action(s) you’d like to trigger the webhook.

![](https://wpfusion.com/wp-content/uploads/2023/05/emailoctopus-webhooks-2.png)

In this case, we have selected *updated*, to trigger the webhook whenever a Contact is edited.

When you are finished, press the **Add** button.

Keep in mind that EmailOctopus only allows 1 endpoint by default.
Set the **Endpoint URL** following the examples below.

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior. For each you will need to supply your access key, which can be obtained from the bottom of the main settings panel in your WP Fusion settings.

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Pipedrive for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Pipedrive , and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Pipedrive contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Pipedrive after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Pipedrive where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Ortto Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/ortto-webhooks/](https://wpfusion.com/documentation/webhooks/ortto-webhooks/)

### Overview

You can use webhooks in [Ortto](https://wpfusion.com/go/ortto) to automatically send data back to your WP Fusion powered WordPress site.

Using webhooks, you can import new users on your WordPress site based on changes in Ortto, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Setup

In Ortto, head to More » Data Sources and click **New Data Source**.

![](https://wpfusion.com/wp-content/uploads/2023/03/ortto-webhooks-data-sources-1024x571.jpg)

Enter the URL to your site, with the 
```
access_key
```

 and 
```
wpf_action
```

 parameters (see below).

![](https://wpfusion.com/wp-content/uploads/2023/03/ortto-webhooks-1-1024x964.jpg)

You can un-check the setting for *Send activity payload*. Otherwise leave the settings as their defaults.

Finally, head to Campaigns and create a new campaign. Select a trigger, and from the list of actions choose your webhook.

![](https://wpfusion.com/wp-content/uploads/2023/03/ortto-campaign-webhooks-1024x736.jpg)

In this example we’re triggering the campaign when the WordPress User tag is applied to a subscriber. The tag triggers a webhook to import a new WordPress user and generate a password for them.

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior. For each you will need to supply your access key, which can be obtained from the bottom of the main settings panel in your WP Fusion settings.

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Ortto for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Ortto , and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Ortto contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Ortto after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Ortto where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Engage Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/engage-webhooks/](https://wpfusion.com/documentation/webhooks/engage-webhooks/)

### Overview

You can use webhooks in [Engage](https://engage.so/) to automatically send data back to your WP Fusion powered WordPress site.

Using webhooks, you can import new users on your WordPress site based on changes in Engage, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Setup

In Engage, create a new automation, and select a trigger. In this case we are triggering the automation when a subscriber’s email address changes.

![](https://wpfusion.com/wp-content/uploads/2022/12/engage-webhooks-2-1024x613.jpg)

Add a new action, and from the dropdown, choose **Call webhook**.

![](https://wpfusion.com/wp-content/uploads/2022/12/engage-webhooks-1024x562.jpg)

Set the **Webhook URL** following the examples below.

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior. For each you will need to supply your access key, which can be obtained from the bottom of the main settings panel in your WP Fusion settings.

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Engage for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Engage , and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Engage contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Engage after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Engage where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Pipedrive Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/pipedrive-webhooks/](https://wpfusion.com/documentation/webhooks/pipedrive-webhooks/)

### Overview

You can use webhooks in [Pipedrive](https://wpfusion.com/go/pipedrive) to automatically send data back to your WP Fusion powered WordPress site.

Using webhooks, you can import new users on your WordPress site based on changes in Pipedrive, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Automatic Setup (Recommended)

WP Fusion now provides an easier way to configure Pipedrive webhooks directly from your WordPress admin panel. This method automatically creates and manages webhooks for you.

After connecting your Pipedrive account to WP Fusion, navigate to **Settings » WP Fusion » General**, and you’ll see new webhook configuration options:

#### Update Trigger

Enable this option to automatically sync changes from Pipedrive back to WordPress when a person is updated in Pipedrive. This includes changes to custom fields, tags, and other contact data.

#### Add Trigger

Enable this option to automatically create new WordPress users when new persons are added to Pipedrive. This is useful for automatically importing leads or contacts as WordPress users.

#### Enable Notifications

When creating new users via the Add Trigger, you can optionally send them a welcome email containing their username and a password reset link.

When you enable these options, WP Fusion will automatically:

- Create the necessary webhooks in your Pipedrive account
- Configure the correct webhook URLs and parameters
- Handle webhook authentication using your site’s access key
- Clean up webhooks when the options are disabled

**Debugging:** You can view all registered webhooks by clicking the debug link in the webhook settings section. This is helpful for troubleshooting webhook issues.

### Manual Setup

If you prefer to set up webhooks manually, or need more customization, you can still configure webhooks directly in Pipedrive.

In Pipedrive, head to Tools and Integrations » Webhooks, and click **Create new webhook**.

![](https://wpfusion.com/wp-content/uploads/2022/10/pipedrive-webhooks-2-1024x478.jpg)

For the event action, select which action you’d like to trigger the webhook.

![](https://wpfusion.com/wp-content/uploads/2022/10/pipedrive-webhooks-1-1024x555.jpg)

In this case, we have selected *updated*, to trigger the webhook whenever a Contact is edited.

For the **Event object** field, select *person*.

Set the **Endpoint URL** following the examples below.

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior. For each you will need to supply your access key, which can be obtained from the bottom of the main settings panel in your WP Fusion settings.

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Pipedrive for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Pipedrive , and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Pipedrive contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Pipedrive after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Pipedrive where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## About Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/about-webhooks/](https://wpfusion.com/documentation/webhooks/about-webhooks/)

### Overview

WP Fusion [syncs data to your CRM](https://wpfusion.com/videos/tutorials/mapping-and-syncing-contact-fields/) automatically as profiles are updated in WordPress.

However, you may want to trigger an automatic sync of data *back* from your CRM to WordPress. For example if a user’s custom fields or tags have changed, or if you want to import a new WordPress user from a CRM contact record.

**A “webhook” is a small piece of data sent from your CRM to WP Fusion**, letting it know that a contact has been edited and the changes need to be loaded back to WordPress.

Webhooks work with most of our supported platforms, for a full list please see the [CRM compatibility table](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

### How a webhook is structured

A webhook is a URL to your site, followed by several URL parameters. Those are:

- ```
wpf_action
```

 *(required)*: This tells your site that the webhook is meant for WP Fusion. The action can be 
```
update_tags
```

, 
```
update
```

, or 
```
add
```

 (for more details see below).
- ```
access_key
```

 *(required):*This is the access key from the bottom of the General tab in the WP Fusion settings. This authenticates the webhook.
- ```
contact_id
```

 *(sometimes required)*: Depending on your CRM, you may need to include a contact ID in the webhook URL to tell WP Fusion which contact to load. Please refer to the documentation for your CRM (see the sidebar navigation) for an example.
- ```
role
```

 *(optional):*When using the 
```
add
```

 or 
```
update
```

 method, you can specify a role for the user by setting the 
```
role
```

 query parameter.
- ```
send_notification
```

 *(optional):*When using the 
```
add
```

 method, setting 
```
send_notification=true
```

 will send a welcome email to the new user with a link to set their password.

You can test a webhook for a specific content by visiting the URL in your browser. For example 
```
https://mysite.com/?wpf_action=add&access_key=KEY&contact_id=123
```

![](https://wpfusion.com/wp-content/uploads/2022/04/webhooks-add-success-1024x791.jpg)When testing webhooks in the browser, a debug page is shown with the data loaded from your CRM.

### Webhook strategy

While it’s tempting to want to keep everything in sync all the time, it’s also important to keep in mind that processing webhooks requires a fair bit of server resources.

When a webhook is received, WP Fusion needs to connect back to your CRM, load any updated data, save it, and trigger any automated enrollments. This process takes a few seconds to run.

For example, if you’ve configured your webhooks to sync every contact record edit back to WordPress, and you bulk edit a bunch of contacts in your CRM, you can end up temporarily crashing your website while it struggles to deal with all the webhooks.

That’s why we recommend setting up your webhooks so that they run just when data needs to be loaded back into WordPress. For example when a tag is applied that unlocks a new piece of content (as opposed to whenever *any* tag is applied).

#### Duplicate webhooks

WP Fusion will try to detect when two duplicate webhooks are being received at the same time for the same contact, in order to prevent potential data loss. This will be recorded [to the logs](https://wpfusion.com/documentation/getting-started/activity-logs/) with a yellow notice.

If you see messages in the logs regarding duplicate webhooks, please review your webhook setup to make sure that the same webhook can’t be triggered twice for the same contact.

#### Loopback webhooks

It’s important to try to avoid triggering a webhook as a result of something changed by WP Fusion, as this can result in potential data loss.

As an example:

1. A customer checks out via WooCommerce and WP Fusion creates a new contact record in your CRM with the customer’s name and email. The contact doesn’t yet have any tags.
2. You’ve configured a webhook back to WP Fusion for *any* time any contact is edited, and so this new contact meets the condition and the webhook is sent.
3. At the same time, WP Fusion begins to apply the tags that would enroll the new customer into the course they just purchased.
4. The webhook arrives, indicating that a new contact has been updated and has *no tags.*
5. This erases the tags that were applied in Step 3, and the customer loses access to their course.

In this scenario there’s no reason to send a webhook back to WP Fusion telling it a new contact was created— because WP Fusion is what created that contact. As possible solutions you could make your webhook trigger more specific by requiring a tag, or by checking the contact’s creation date.

If you can’t prevent loopback webhooks (for example Gist always sends a webhook whenever WP Fusion applies a tag over the API), you can try this snippet:

This will “lock” a user for one minute every time a tag is applied. While the user is locked, any incoming webhooks will be blocked for that user.

This is still not ideal for performance, since your site is getting hit with redundant webhooks, but it should prevent unexpected data loss.

### Webhook troubleshooting

Webhooks can sometimes get blocked by your web hosting, or security plugins. For more info, see the [Webhooks not being received by WP Fusion documentation](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### How to set up webhooks in your CRM

See the navigation at right for CRM specific tutorials on how to configure webhooks.

---

## MooSend Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/moosend-webhooks/](https://wpfusion.com/documentation/webhooks/moosend-webhooks/)

### Overview

You can use webhooks in MooSend to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on automations in MooSend, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Setup

Navigate to MooSend » Automations and create a new automation to handle the webhook.

Select a trigger (such as a tag being applied), add a new step and click the Actions and select the “Then post a webhook”.

![](https://wpfusion.com/wp-content/uploads/2022/02/moosend-webhook-action-1024x506.jpeg)

Enter the webhook URL:

![](https://wpfusion.com/wp-content/uploads/2022/02/moosend-webhook-url-1024x302.jpeg)

You have three options for the webhook, **update**,**update_tags** and **add**(explained below). For each you will need to supply your access key, which can be obtained from the main panel in your WP Fusion settings.

For the structure of the webhook URL see the examples below:

#### To update a user’s tags

To update an existing WordPress user’s tags from the MooSend subscriber record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from MooSend for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in MooSend, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their MooSend contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to MooSend after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in MooSend where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## HighLevel Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/highlevel-webhooks/](https://wpfusion.com/documentation/webhooks/highlevel-webhooks/)

### Overview

You can use webhooks in [HighLevel](https://wpfusion.com/go/highlevel) to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on automations in HighLevel, or update existing users’ meta data and tags.

There are two ways to manage webhooks in HighLevel, either via a **Workflow**or via a **Trigger**.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Workflow Method

(*Recommended)* The workflow method is best if you need to send a webhook to create or update a WordPress user as part of a specific process. For example:

- Tag “Website Access” is added
- Send webhook to create WordPress user
- Send welcome email
- Wait 3 days
- Apply tag “Unlock Course Two”
- Send webhook to update tags

Using a webhook in an automation lets you easily visualize the entire automation flow, and see where individual contacts are in the process.

![](https://wpfusion.com/wp-content/uploads/2021/11/HighLevel-Webhooks-Workflow.jpeg)

You’ll also be able to visualize where a single contact is in the workflow, when the webhook was sent, and whether or not it was received successfully. Using webhooks in workflow gives you a lot more control and better reporting than using Trigger Webhooks (see below).

To use webhooks in a workflow, first create a workflow and add a webhook to it, like in the example above. You have three options for the webhook, **update**,**update_tags** and **add**(explained below). For each you will need to supply your access key, which can be obtained from the main panel in your WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2021/11/HighLevel-Webhooks-URL-1024x530.jpeg)

When the contact reaches the webhook step in the workflow,  HighLevel will notify WP Fusion to load the contact’s data from HighLevel .

### Trigger Method

*(Advanced)* You can also set up webhooks which are global to your account. This is best if you’re manually editing contact records in HighLevel (outside of a workflow) and need these changes synced to WordPress.

**Note:** It’s not recommended to set up global webhooks with the 
```
add
```

 method, as then every contact in HighLevel will be given a WordPress user account.
To set up a webhook navigate to Automation » Triggers in your HighLevel account, and click Add Trigger to create a new trigger for the webhook.

![](https://wpfusion.com/wp-content/uploads/2021/11/HighLevel-Webhooks-Trigger-1024x240.jpeg)

Keep in mind that, because these webhooks are global to your HighLevel account, bulk editing contacts will trigger webhooks to be sent to your site for every edited contact, which may make your WordPress site temporarily unstable.

**Note:** If you’ve set up global webhooks with the 
```
update
```

 or 
```
update_tags
```

 method it’s not necessary to also include those same webhooks in automations.

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY&contact_id={{contact.id}}
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from HighLevel for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY&contact_id={{contact.id}}
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&contact_id={{contact.id}}
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&contact_id={{contact.id}}&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&contact_id={{contact.id}}&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your HighLevel application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their HighLevel contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to HighLevel after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in HighLevel where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Groundhogg Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/)

### Overview

You can use webhooks in Groundhogg to sync contact data back to WP Fusion installed on another website.

Webhooks can be used to automatically import Groundhogg contacts as new WordPress users, or trigger an update of existing users’ metadata and tags.

**Note:**This tutorial only applies if you are using WP Fusion to connect to Groundhogg on another site, over the REST API. If WP Fusion and Groundhogg are installed on the same site, edits in Groundhogg are synced back to WP Fusion automatically (there’s no need for webhooks).

Webhooks in Groundhogg require the [Advanced Features](https://www.groundhogg.io/downloads/advanced-features/?aff=124) addon.
Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting Started

Open a funnel (or create a new one) and create a new trigger.

For example, to trigger WP Fusion to sync a contact when a tag is applied, choose the Tag Applied trigger. Then add a new step, add a Webhook action.

![a dashboard interface featuring tabs for triggers, actions, logic, and all. in actions, categories such as delay, communications, crm, wordpress, and groundhogg display green icons for automation tasks like “webhooks.”.](https://wpfusion.com/wp-content/uploads/2021/09/Groundhogg-flow-webhook-action.png)

Choose **POST** as Method, and in the **Target URL** field, put the URL to your website.

In the **Payload Format**, select “x-www-form-urlencoded”

![screenshot of groundhogg webhooks settings using the post method to https://mysite.com/. payload format is x www form urlencoded, displaying contact id, wpf action, and access key fields with example values.](https://wpfusion.com/wp-content/uploads/2021/09/Groundhogg-flow-webhook-setting1-1024x647.png)

The values in the **Payload**section depend on the type of webhook you want to send. See below for examples.

For each you will need to supply your access key, which can be obtained from the bottom of the General tab in the WP Fusion settings:

![](https://wpfusion.com/wp-content/uploads/2021/09/Groundhogg-webhook-access-key-1024x367.jpeg)

#### To update a user’s tags

To update an existing WordPress user’s tags from the Groundhogg contact record, under Params, you should have:

```
contact_id = {id}
wpf_action = update_tags
access_key = [your access key]
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Groundhogg for that contact, under Params, you should have:

```
contact_id = {id}
wpf_action = update
access_key = [your access key]
```

#### Create a new user

Using this method, you can register a new user on your website when a contact is created in Groundhogg. Under Params, you should have:

```
contact_id = {id}
wpf_action = add
access_key = [your access key]
```

There are two additional options, which you can leave out if you don’t need them.

```
send_notification = true
role = subscriber
```

If you set 
```
send_notification
```

 to 
```
true
```

, the user will be sent a welcome email with their username, password, and a link to log in on your site.

You can also set the 
```
role
```

 parameter to assign users a specific role on your site. By default users will be imported with the role set in the WordPress’ Settings » General “New User Default Role” field, but sometimes you may want to create users with a different role depending on conditions in your campaign sequence.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Groundhogg, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Groundhogg contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Groundhogg after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Groundhogg where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2021/09/Groundhogg-Return-password.jpeg)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Bento Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/bento-webhooks/](https://wpfusion.com/documentation/webhooks/bento-webhooks/)

### Overview

You can use webhooks inside [Bento](https://bentonow.com/products/automation) automations to automatically send data back to your WP Fusion powered WordPress site.

Using webhooks, you can import new users on your WordPress site based on automations in Bento, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Setup

Navigate to Bento » Automate and create a new workflow to handle the webhook. Select a ‘Trigger’ (such as New Pageview).

![](https://wpfusion.com/wp-content/uploads/2021/08/bento-webhook-trigger-1-1024x453.png)

Add an action and Select **Send Webhook**.

![](https://wpfusion.com/wp-content/uploads/2021/08/bento-webhook-action-1024x467.png)

In the webhook settings, configure the webhook like in the screenshot above:

- **Webhook URL:**This is the URL to your site. For more info on the URL options, see the next section.
- **JSON Payload:**The JSON payload identifies the subscriber to WP Fusion. This needs to be 
```
{"id":"{{visitor.uuid}}", "email":"{{visitor.email}}"}
```

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior. For each you will need to supply your access key, which can be obtained from the bottom of the main settings panel in your WP Fusion settings.

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Bento for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Bento , and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Bento contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Bento after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Bento where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Jetpack CRM Automatic Imports

**Source:** [https://wpfusion.com/documentation/webhooks/jetpack-crm-automatic-imports/](https://wpfusion.com/documentation/webhooks/jetpack-crm-automatic-imports/)

### Overview

Since WP Fusion connects to Jetpack CRM on the same site, it’s not necessary to configure webhooks to enable a bidirectional sync between WP Fusion and Jetpack.

Out of the box WP Fusion will:

- Detect when a Jetpack CRM contact is edited, and sync those changes back to the contact’s WordPress user record (if they have one).
- Detect when tags are modified on a Jetpack CRM contact record, and update the tags for their corresponding user record, including triggering any automated enrollments.

However, WP Fusion does *not* automatically generate a WordPress user account for all of your Jetpack contacts, as there are many situations where a contact in the CRM does not need a login to WordPress.

### Automatic imports

If you want to automatically import Jetpack CRM contacts as WordPress users, you can do so by selecting an import trigger in the WP Fusion settings.

This option is found at the bottom of the General tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2021/08/jetpack-crm-webhooks-1024x709.jpg)

You can select one or more Jetpack CRM tags in the **Import Trigger** setting. When any one of these tags is applied to a Jetpack contact, they will be automatically imported as a new WordPress user. The new user will be kept in sync bidirectionally with their Jetpack CRM contact record going forward.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Jetpack CRM, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Jetpack CRM contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Jetpack CRM after it has been generated.

In the Imported Users section of the General settings tab, check the box for Return Password, and select a field in Jetpack CRM where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## FunnelKit Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/)

### Overview

With [FunnelKit Pro](https://wpfusion.com/go/autonami), you can use webhooks in automations to connect to WP Fusion installed on another site.

Using webhooks you can import new users on your WordPress site based on rules in FunnelKit, or update existing users’ meta data and tags.

For example, you could sell access to a course using WooCommerce and FunnelKit on *Site A*, and using a webhook, WP Fusion on *Site B* can automatically import the new customer and enroll them in the course they purchased.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Setup

Navigate to FunnelKit » Automations and create a new automation to handle the webhook. Select a trigger (such as a tag being applied), and click the Add Direct Action button to add a new action.

![](https://wpfusion.com/wp-content/uploads/2021/08/send-data-http-automation-autonami-1024x730.png)

In the popup that appears, select Send Data, and then HTTP Request.

In the webhook settings, configure the webhook like in the screenshot below.

![](https://wpfusion.com/wp-content/uploads/2021/08/autonami-webhooks-1024x683.jpg)

The settings should be:

- **Enter URL:**This is the URL to the website where WP Fusion is installed.
- **Method:**Either GET or POST, but sometimes POST requests get blocked by security plugins, so we recommend GET.
- **Data:**At minimum you must have:
- **contact_id**: 
```
{{contact_id}}
```

 (this tells WP Fusion which contact to import)
- **access_key**: (the access key from the bottom of the General tab in the WP Fusion settings)
- **wpf_action**: (see below for options)

### Webhook parameters

You can format your webhook parameters in a few different ways to customize the behavior. For each you will need to supply your access key, which can be obtained from the bottom of the main settings panel in your WP Fusion settings.

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the data parameters should be

```
contact_id = {{contact_id}}
wpf_action = update_tags
access_key = [your access key]
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from FunnelKit for that contact, the data parameters for the webhook should look like the following:

```
contact_id = {{contact_id}}
wpf_action = update
access_key = [your access key]
```

#### Create a new user

To create a new user, use the following:

```
contact_id = {{contact_id}}
wpf_action = add
access_key = [your access key]
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
contact_id = {{contact_id}}
wpf_action = update_tags
access_key = [your access key]
send_notification = true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
contact_id = {{contact_id}}
wpf_action = update_tags
access_key = [your access key]
role = customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in FunnelKit, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their FunnelKit contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to FunnelKit after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in FunnelKit where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## FluentCRM Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/fluentcrm-webhooks/](https://wpfusion.com/documentation/webhooks/fluentcrm-webhooks/)

### Overview

With [FluentCRM Pro](https://wpfusion.com/go/fluentcrm) v2.2.0 and higher, you can use webhooks in automations to connect to WP Fusion installed on another site.

Using webhooks you can import new users on your WordPress site based on rules in FluentCRM, or update existing users’ meta data and tags.

For example, you could sell access to a course using WooCommerce and FluentCRM on *Site A*, and using a webhook, WP Fusion on *Site B* can automatically import the new customer and enroll them in the course they purchased.

**Heads up!** This documentation only applies when [connecting to FluentCRM on another site over the REST API](https://wpfusion.com/documentation/installation-guides/how-to-connect-fluentcrm-rest-api-to-wordpress/). If you are connected to FluentCRM on the same site, tag and field changes are synced automatically and in real time without the use of webhooks.
Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Setup

Navigate to your FluentCRM » Automations and create a new automation to handle the webhook. Select a trigger (such as a tag being applied), and click the Add Action button to add a new action.

![](https://wpfusion.com/wp-content/uploads/2021/07/fluentcrm-webhooks-1-1024x824.png)

Select Outgoing Webhook in the popup that appears.

In the webhook settings, configure the webhook like in the screenshot below. For alternate URL parameters see the next section.

![](https://wpfusion.com/wp-content/uploads/2021/07/fluentcrm-webhooks-2-1024x790.jpg)

Other than adding your webhook URL (see below), you can leave the options as the defaults:

- **Request Format:**Send as JSON format
- **Request Body:**Full Subscriber Data (Raw)
- **Request Header:**No Header

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior. For each you will need to supply your access key, which can be obtained from the bottom of the main settings panel in your WP Fusion settings.

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from FluentCRM for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in FluentCRM, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their FluentCRM contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to FluentCRM after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in FluentCRM where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## PulseTechnologyCRM Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/pulsetechnologycrm-webhooks/](https://wpfusion.com/documentation/webhooks/pulsetechnologycrm-webhooks/)

### Overview

You can use webhooks in PulseTechnologyCRM to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on workflow rules in PulseTechnologyCRM, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).
There are two ways to manage webhooks in PulseTechnologyCRM, either via a Workflows or in the Webhooks Settings.

### Workflow Method

*(Recommended)* The workflow method is best if you need to send a webhook to create or update a WordPress user as part of a specific process. For example:

- Tag “Website Access” is added
- Send webhook to create WordPress user
- Send welcome email
- Wait 3 days
- Apply tag “Unlock Course Two”
- Send webhook to update tags

Using a webhook in a workflow lets you easily visualize the entire flow, and see where individual contacts are in the process.

![](https://wpfusion.com/wp-content/uploads/2021/06/PulseTechnologyCRM-Workflow-Method.jpeg)

You’ll also be able to visualize where a single contact is in the workflow, when the webhook was sent, and whether or not it was received successfully. Using webhooks in automations gives you a lot more control and better reporting than using Global Webhooks (see below).

To use webhooks in a workflow, first create a workflow at **Admin » Workflows** and add a webhook to it,  like in the example above. You have three options for the webhook, **update**,**update_tags** and **add**(explained below). For each you will need to supply your access key, which can be obtained from the main panel in your WP Fusion settings.

For this tutorial, we’ll be showing you how to create a new WordPress user when a specific tag is applied to a PulseTechnologyCRM contact. See below for additional options when constructing the URL parameters.

From the Workflow screen, first create a new **Workflow Trigger**:

![](https://wpfusion.com/wp-content/uploads/2021/06/PulseTechnologyCRM-Workflow-Method-Edit-Workflow-1-1024x443.jpeg)

![](https://wpfusion.com/wp-content/uploads/2021/06/PulseTechnologyCRM-Workflow-Method-Wokflow-Trigger-1-1024x542.jpeg)

The next step is to create a new **Sequence**, and within the Sequence, create a **Step**:

![](https://wpfusion.com/wp-content/uploads/2021/06/PulseTechnologyCRM-Workflow-Method-Sequence-Step.jpeg)

The **URL**should be the URL to your WordPress site, followed by 
```
?wpf_action=add
```

 and 
```
&access_key=ACCESSKEY
```

, where 
```
ACCESSKEY
```

 is the access key provided at the bottom of the **General Settings** tab in the WP Fusion settings on your site.

Now go back to the Workflow screen, go to the Sequences section below, and add the HTTP Post Sequence you’ve created.

![](https://wpfusion.com/wp-content/uploads/2021/06/PulseTechnologyCRM-Workflow-Method-Wokflow-Add-Sequence-1024x550.jpeg)

After setting everything up, your Workflow should look like the screenshot above. Go ahead and save the Workflow.

Now, every time the tag **Import to WordPress**  is applied to a contact, a new WordPress user will be created based on their contact data in PulseTechnologyCRM. If the user already exists on the site, they will be updated (no duplicate users will be created).

### Global Webhooks Method

*(Advanced)* You can also set up webhooks which are global to your account. This is best if you’re manually editing contact records in PulseTechnologyCRM (outside of an automation) and need these changes synced to WordPress.

**Note:** It’s not recommended to set up global webhooks with the 
```
add
```

 method, as then every contact in PulseTechnologyCRM will be given a WordPress user account.
To set up a webhook navigate to Tools » Webhooks, and click Add to create a new webhook.

![](https://wpfusion.com/wp-content/uploads/2021/06/PulseTechnologyCRM-Global-Webhooks.jpeg)

Keep in mind that, because these webhooks are global to your PulseTechnologyCRM account, bulk editing contacts will trigger webhooks to be sent to your site for every edited contact, which may make your WordPress site temporarily unstable.

**Note:** If you’ve set up global webhooks with the 
```
update
```

 or 
```
update_tags
```

 method it’s not necessary to also include those same webhooks in automations.

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from PulseTechnologyCRM for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your PulseTechnologyCRM  application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their PulseTechnologyCRM  contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to PulseTechnologyCRM after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in PulseTechnologyCRM where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Emercury Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/emercury-webooks/](https://wpfusion.com/documentation/webhooks/emercury-webooks/)

### Overview

You can use outgoing webhooks in Emercury to send data back to your WordPress site, using WP Fusion. Using webhooks you can create new users on your WordPress site based on updates in Emercury, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting started

Webhooks are managed in Emercury under **Settings » Developer**. If you’re already logged into your Emercury account, you should be able to access this page by [following this link](https://panel.emercury.net/#settings/developer/). For an overview of webhooks with Emercury, [see this doc](http://help.emercury.net/en/articles/4900959-outgoing-webhooks).

For this tutorial, we’ll be showing you how to create a new WordPress user when a contact is added to your Emercury list. See below for additional options when constructing the URL parameters.

From the webhooks screen, first click Add to create a new webhook. In the popup that appears, give the webhook a name, set the status to Active, and enter the URL to your site, following the examples below.

![](https://wpfusion.com/wp-content/uploads/2021/04/emercury-webhooks-1024x657.jpg)

For the Events, select which events should trigger the webhook. In this case, **Added to List**.

Finally, click Save to activate the webhook. Now when a contact is added to your Emercury list, they will automatically be imported as a new WordPress user.

There are several ways to format the webhook URL depending on the desired action:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Emercury for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your Emercury application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Emercury contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Emercury after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Emercury where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## EngageBay Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/engagebay-webhooks/](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/)

### Overview

You can use webhooks in EngageBay to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on automations in EngageBay, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).
There are two ways to manage webhooks in EngageBay, either via an **Automation** or in the **Account Settings.**

### Automation Method

*(Recommended)* The automation method is best if you need to send a webhook to create or update a WordPress user as part of a specific process. For example:

- Tag “Website Access” is added
- Send webhook to create WordPress user
- Send welcome email
- Wait 3 days
- Apply tag “Unlock Course Two”
- Send webhook to update tags

Using a webhook in an automation lets you easily visualize the entire automation flow, and see where individual contacts are in the process.

![](https://wpfusion.com/wp-content/uploads/2020/10/engagebay-webhooks-3-1024x772.jpg)

You’ll also be able to visualize where a single contact is in the automation, when the webhook was sent, and whether or not it was received successfully. Using webhooks in automations gives you a lot more control and better reporting than using Global Webhooks (see below).

To use webhooks in automations first create an automation and add JSON IO node to it, like in the example above. A modal will appear where you can configure your webhook:

![](https://wpfusion.com/wp-content/uploads/2020/10/engagebay-webhooks-648x1024.jpg)

The settings are:

- **Node Name:**This is just a label in the automation builder, you can set it to whatever you want
- **URL:**This is the URL to your WordPress site. See Webhook URL Parameters below for a description of the options. Your access key can be found at the bottom of the General tab in the WP Fusion settings.
- **Type:**GET
- **Parameters:**
```
contact_id
```

 needs to be set to 
```
{{Subscriber.id}}
```

. This identifies the contact to WP Fusion
- **Set output to:**none

Now when the contact reaches the JSON IO step in the automation EngageBay will notify WP Fusion to load the contact’s data.

### Account Settings Method

*(Advanced)* You can also set up webhooks which are global to your account. This is best if you’re manually editing contact records in EngageBay (outside of an automation) and need these changes synced to WordPress.

**Note:** It’s not recommended to set up global webhooks with the 
```
add
```

 method, as then every contact in EngageBay will be given a WordPress user account.
To set up a webhook navigate to Account Settings » Webhooks in your EngageBay admin, and click **Add Webhook** to create a new webhook.

![](https://wpfusion.com/wp-content/uploads/2020/10/engagebay-webhooks-1-1024x553.jpg)

For the Event Type you can select either 
```
contact.update
```

, or 
```
contact.create
```

.

![](https://wpfusion.com/wp-content/uploads/2020/10/engagebay-webhooks-2-1024x722.jpg)

For fields, choose **Select All**.

Keep in mind that, because these webhooks are global to your EngageBay account, bulk editing contacts will trigger webhooks to be sent to your site for every edited contact, which may make your WordPress site temporarily unstable.

**Note:** If you’ve set up global webhooks with the 
```
update
```

 or 
```
update_tags
```

 method it’s not necessary to also include those same webhooks in automations.

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from EngageBay for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your EngageBay application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their EngageBay contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to EngageBay after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in EngageBay where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Customerly Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/customerly-webhooks/](https://wpfusion.com/documentation/webhooks/customerly-webhooks/)

### Overview

You can use webhooks in Customerly to send data back to your WordPress site using WP Fusion. Using these webhooks, you can create new users on your WordPress site, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting started

Webhooks are managed in Customerly by going to **Settings >> Webhooks**. You can create a new webhook and then specify which events should trigger it.

![](https://wpfusion.com/wp-content/uploads/2019/07/customerly-webhooks-1024x439.jpg)

In the example above we have the webhook set to update the WordPress user whenever the contact is tagged or their details are updated in Customerly. For the structure of the webhook URL see the examples below:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Customerly for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Customerly, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Customerly contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Customerly after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Customerly where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Platform.ly Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/platformly-webhooks/](https://wpfusion.com/documentation/webhooks/platformly-webhooks/)

### Overview

You can use webhooks in Platform.ly to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on rules in Platform.ly, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting started

Go to the My Automations page in your Platform.ly account and create a new automation. Select a trigger for the workflow, such as when a contact is given a tag. In the example below we’ve configured the automation to be triggered whenever a contact is tagged “Import Me”.

![](https://wpfusion.com/wp-content/uploads/2019/02/platformly-webhooks-1024x857.jpg)

Add a new action, and choose “Ping A URL” from the Integrations tab. Enter the URL to your site following the examples in the next sections. You can get your site’s unique access key from the bottom of the main WP Fusion settings page.

![](https://wpfusion.com/wp-content/uploads/2019/02/platformly-webhooks-2-1024x439.jpg)

Now when the automation is triggered the contact will be added to WordPress as a new user.

There are several options for structuring the webhook URL, as follows:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Platform.ly for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your Platform.ly application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Platform.ly contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Platform.ly after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Platform.ly where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## NationBuilder Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/nationbuilder-webhooks/](https://wpfusion.com/documentation/webhooks/nationbuilder-webhooks/)

### Overview

**Note:** Currently webhooks are hidden in NationBuilder. To access them, visit https://{{yournation}}.nationbuilder.com/admin/webhooks/new.
You can use webhooks in NationBuilder to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site when people are added in NationBuilder, or update existing users’ meta data and tags when people are modified.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting started

Navigate to Settings » Developer » Webhooks in your NationBuilder admin.

![](https://wpfusion.com/wp-content/uploads/2019/01/nationbuilder-webhooks-1024x638.jpg)

To add a new webhook first select a trigger from the *When to POST*dropdown. In the example above we are sending the webhook whenever the person is changed.

Then enter the URL to your site, following the examples below:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from NationBuilder for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your NationBuilder application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their NationBuilder person record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to NationBuilder after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in NationBuilder where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Gist Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/gist-webhooks/](https://wpfusion.com/documentation/webhooks/gist-webhooks/)

### Overview

You can use webhooks in Gist (with a *Plus* plan) to send data back to your WordPress site using WP Fusion. Using these webhooks, you can create new users on your WordPress site, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting started

Webhooks are managed in Gist by going to **Settings >> Webhooks**. You can create a new webhook and then specify which events should trigger it.

![](https://wpfusion.com/wp-content/uploads/2019/01/Gist-webhooks-setup.jpeg)

In the example above we have the webhook set to update the WordPress user whenever the contact details are updated in Gist. For the structure of the webhook URL see the examples below:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Gist for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Gist, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Gist contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Gist after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Gist where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Copper Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/copper-webhooks/](https://wpfusion.com/documentation/webhooks/copper-webhooks/)

### Overview

Using webhooks with Copper you can create new users on your WordPress site when people are tagged, or automatically update existing users’ meta data and tags when changes happen in Copper.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting Started

The “update” method is very straightforward: check the checkbox next to **Update Trigger**, and any subscriber updates in Copper will automatically be synced back to WordPress.

To automatically add Copper subscribers as WordPress users, first create a tag that designates site members. Then navigate to the Webhooks section on the General settings tab of the WP Fusion settings, and select this tag from the dropdown. Now, whenever a subscriber is added to this tag, they will automatically be imported as a new WordPress user.

![](https://wpfusion.com/wp-content/uploads/2019/01/copper-webhooks-1024x364.jpg)

The import tag method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Copper, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Copper contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Copper after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Copper where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Salesforce Outbound Messages

**Source:** [https://wpfusion.com/documentation/webhooks/salesforce-outbound-messages/](https://wpfusion.com/documentation/webhooks/salesforce-outbound-messages/)

### Overview

You can use Flows and outbound messages in Salesforce to send data back to your WordPress site using WP Fusion. Using outbound messages you can create new users on your WordPress site based on conditions in Salesforce, or update existing users’ metadata and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Getting started

First, head to *Workflow Actions*, in the Salesforce setup and an action of type *Outbound Message*.

![](https://wpfusion.com/wp-content/uploads/2023/05/1.-Salesforce_Outbound_Message-1024x674.png)

For the Endpoint URL put the URL to your site, following the formats [described below](#webhook-url-formats). In this example we’re using the “update” method.

Give your outbound message a name and save it.

Then create a Flow in Salesforce by navigating to *Setup » Process Automation » Flows*.

![](https://wpfusion.com/wp-content/uploads/2023/05/2.-Flow_Trigger-1024x679.png)

In the start conditions, select Contact as the object, and choose when the flow should be triggered.

You can optionally set entry criteria— for example only contacts who have a specific user role, or a picklist value. In this example we will be syncing all contact updates with WordPress.

![](https://wpfusion.com/wp-content/uploads/2023/05/3.-Salesforce_Add_Action.png)

Add an action to your flow, and from the actions menu, select Outbound Message.

![](https://wpfusion.com/wp-content/uploads/2023/05/4.-Salesforce_Flow_Action_Select_Existing_Outbound_Message-1024x749.png)

From the dropdown, select the outbound message you created in the first step. Save and activate the Flow.

That’s it! When a contact is edited in Salesforce (and, optionally, meets the criteria), the outbound message will be triggered to tell WP Fusion to load their latest fields and tags.

You can test this by manually editing any contact, or by using the [Flow debugging tool](https://help.salesforce.com/s/articleView?id=sf.flow_test_debug.htm&type=5).

![](https://wpfusion.com/wp-content/uploads/2018/09/salesforce-flow-debugger-1024x746.jpg)The flow debugging tool lets you test each step in your flow with sample contact edits.

### Webhook URL options

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Salesforce for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Salesforce, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Salesforce contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Salesforce after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Salesforce where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## HubSpot Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/hubspot-webhooks/](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/)

### Overview

You can use [webhooks in HubSpot](https://knowledge.hubspot.com/articles/kcs_article/workflows/how-do-i-use-webhooks-with-hubspot-workflows) to send data back to your WordPress site using WP Fusion. Using these webhooks, you can create new users on your WordPress site, or update existing users’ meta data and lists.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Webhooks in Workflows

Workflows offer a visual way to configure your webhooks, and allow for custom triggers such as list assignment changes. Workflows are available in the following HubSpot editions:

- Marketing Hub Professional
- Marketing Hub Enterprise
- Sales Hub Enterprise

Webhooks are managed in HubSpot by going to **Automation » Workflows**from the top navigation menu.

For this tutorial, we’ll be showing you how to create a new WordPress user when a contact is added to a specific HubSpot list. See below for additional options when configuring the workflow action.

First create a new workflow, and then add an enrollment trigger. Here we’ve set workflow to run whenever someone is added to the static list “Membership Trial.”

![](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-workflow-actions-1-1024x742.jpg)

Click the + symbol to add a new action to the workflow, and from the Actions panel, select **Update WordPress**.

![](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-workflow-actions-2-1024x503.jpg)

A panel will appear where you can configure the webhook to your WordPress site.

![](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-workflow-actions-3-1024x629.jpg)

In this example, we’ve set the action to **Add user**, and disabled the welcome email that is sent to new users.

Now, every time a contact is added to this list, a new WordPress user will be created based on their contact data in HubSpot. If the user already exists on the site, they will be updated (no duplicate users will be created).

The available options in the workflow action are:

**URL to your WordPress site:**This is the URL to the site where you have WP Fusion installed.

**Your access key:**This is the access key from the bottom of the General tab in the WP Fusion settings. This helps to secure your webhook URL.

**Action:**There are three options:

- **Update user’s lists:**If a user already exists on your site for this contact, their lists will be loaded from their HubSpot contact record.
- **Update user’s metadata lists:**If a user already exists on your site for this contact, their lists and custom field values will be loaded from their HubSpot contact record.
- **Add user:**This will import the contact as a new WordPress user. If a user already exists with that contact ID, their lists and custom field values will be loaded from HubSpot.

**Send a welcome email to new users:**If your webhook action is set to Add, you can choose whether or not to send a welcome email to new users. If you select Yes, the default WordPress welcome email will be sent to any newly imported users, containing a link to reset their password.

**Note:**New user accounts will be created with the default user role for the site, which is usually Subscriber. If you want to set a custom role, you can do so by configuring a webhook in a [private app](#webhooks-in-private-apps) and setting the 
```
&role=
```

 parameter.
**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in HubSpot, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their HubSpot contact record.

#### Example – syncing changed email addresses

As an example, to sync changes in a contact’s email address (or any other custom field) back to WordPress automatically, choose **Contact properties** for the trigger filter type, and then choose **Email** and **is known**.

![](https://wpfusion.com/wp-content/uploads/2018/09/hubspt-webhooks-email-changed-1024x548.jpg)

Then click on the **Re-enrollment** tab, and select *Email is known* as a re-enrollment trigger.

![](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-webhooks-re-enrollment.jpg)Finally, add an **Update WordPress** action following the guide above, and select **Update user’s metadata lists**as the webhook action.

Now, any time a contact’s email address is updated, the workflow will be triggered and the new address will be synced back to WordPress automatically.

For more information on re-enrollment triggers and the **is known** condition, [see the HubSpot documentation](https://knowledge.hubspot.com/workflows/add-re-enrollment-triggers-to-a-workflow).

### Webhooks in private apps

Another option for configuring webhooks with WP Fusion is to use a [private app](https://developers.hubspot.com/docs/api/create-and-edit-webhook-subscriptions-in-private-apps). Private apps are supported on all HubSpot plans, though they are less flexible than workflows since they can only be triggered when a contact is created or updated (whereas workflows can use conditional logic, and list-based triggers).

To set up a private app and configure webhooks, navigate to Settings » Integrations » Private Apps and create a new private app.

![Creating a private app in HubSpot](https://wpfusion.com/wp-content/uploads/2018/09/hs-webhooks-private-app-basic-info-1024x535.jpg)Give your app a descriptive name, such as “WP Fusion” and the name of your site.
Give your app a descriptive name, and click on the Scopes tab to add scopes.

![screenshot](https://wpfusion.com/wp-content/uploads/2018/09/hs-webhooks-private-app-scopes-1024x654.jpg)

The only required scope for the webhook is 
```
crm.objects.contacts.read
```

, you can select it from the Scopes list under the CRM header. Then click the Webhooks tab to configure your webhook.

![screenshot](https://wpfusion.com/wp-content/uploads/2018/09/hs-webhooks-private-app-setup-1-1024x665.jpg)

Enter the URL to your site, following the URL parameters guide in the next section. In this example we are using 
```
&wpf_action=update
```

 to update the corresponding WordPress user whenever a contact’s properties are updated in HubSpot.

Click *Create subscription* to select the triggers for the webhook.

![screenshot](https://wpfusion.com/wp-content/uploads/2018/09/hs-webhooks-private-app-subscriptions-1024x547.jpg)The HubSpot webhook subscription settings allow you to choose which updates should trigger the webhook.
For the object type, select **Contact**.

For *Listen for which events?* you can either choose **Contact created** or **Property changed**. In this example we’ve chosen Property changed.

For *Which properties?* select the property updates you’d like to trigger the webhook. In this case we will trigger an update in WordPress when the contact’s address, “checkbox_field”, or “membership_level” are changed.

Save and publish the private app, and then proceed to edit one of the selected properties on one of your contacts.

![screenshot](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-private-app-webhook-logs-1024x681.jpg)The HubSpot webhook logs show whenever a webhook was sent to WP Fusion on your WordPress site.
Under Logs » Webhooks in the private app settings, you should see the outgoing webhooks triggered by your contact property updates.

In the [WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/) on your WordPress site you will see the incoming webhook, as well as the updated data that was loaded from HubSpot.

![screenshot](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-webhooks-logs-1024x580.jpg)The WP Fusion logs show that a webhook was received from HubSpot, as well as the updated properties and lists that were loaded.
That’s it! Contact property updates in HubSpot will now sync back to WordPress automatically 🎉

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior. Your access key can be found in the [Webhooks settings section](https://wpfusion.com/documentation/webhooks/about-webhooks/) on the General tab in the WP Fusion settings.

#### To update a user’s lists

To update an existing WordPress user’s lists from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s lists and meta data

To update a user’s lists and pull any new meta data from HubSpot for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your HubSpot application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their HubSpot contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to HubSpot after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in HubSpot where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Brevo Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/brevo-webhooks/](https://wpfusion.com/documentation/webhooks/brevo-webhooks/)

### Overview

You can use webhooks in Brevo to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on rules in Brevo, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Global Webhooks

Global webhooks aren’t tied to a specific workflow. They run whenever any contact in your Brevo account is updated. These are most useful if you want to automatically sync changes to Brevo contacts back to WordPress.

To set up a global webhook head to Contacts » Settings » Webhooks and click **Add a New Webhook**. A box will appear where you can set up the webhook:

![](https://wpfusion.com/wp-content/uploads/2018/08/sendinblue-webhooks-3-1024x666.jpg)

For the URL, enter the URL to your site, following the examples at the bottom of this article. Then select which events you’d like to trigger the webhook.

In the example above we’ve selected **Added to a list** and **Updated**. This means that whenever a contact is updated or added to a list in Brevo, these changes will be synced back to WordPress automatically.

### Webhooks in Workflows

You can use webhooks inside of a workflow when you need to send data back to WordPress at specific times, or only under certain conditions. For example you could set up a webhook to generate a new WordPress user whenever a contact is added to a specific list.

To set this up go to the Automations page in your Brevo account and create a new workflow. Select a trigger for the workflow, such as when a contact is added to a list, or when an attribute meets certain criteria. In the example below we’ve configured the workflow to be triggered whenever the contact is added to the “Import to WordPress” list.

![](https://wpfusion.com/wp-content/uploads/2018/08/sendinblue-webhooks-2-1024x604.jpg)

Add a new action, and choose “Webhook” from the menu. Enter the URL to your site following the examples in the next sections. You can get your site’s unique access key from the bottom of the main WP Fusion settings page.

![](https://wpfusion.com/wp-content/uploads/2018/08/sendinblue-webhooks-1024x609.jpg)

Make sure to check “*I want to send contact properties to this webhook.*” Now when the workflow is triggered the contact will be added to WordPress as a new user. There are several options for structuring the webhook URL, as follows:

### Webhook URL structure

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Brevo for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your Brevo application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Brevo contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Brevo after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Brevo where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Mailchimp Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/)

### Overview

You can use [webhooks in Mailchimp](https://mailchimp.com/help/set-up-webhooks/) to send data back to your WordPress site using WP Fusion. Using these webhooks, you can create new users on your WordPress site, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).
There are two ways to configure webhooks in Mailchimp, either **globally to your account** (available on all plans), or using the **journey builder** (available with the Standard plan and higher).

### Global webhooks

Global webhooks are managed in Mailchimp by going to your list and clicking **Settings » Webhooks**.

For this tutorial, we’ll be showing you how to create a new WordPress user when a contact is added to your Mailchimp list. See below for additional options when constructing the URL parameters.

First, click **Create New Webhook**. Then enter the URL to your WordPress site, including 
```
?wpf_action=add
```

 and your access key, like in the screenshot below.

![](https://wpfusion.com/wp-content/uploads/2018/08/mailchimp-webhooks-870x1024.jpg)

For the triggers we’ve selected “Subscribes” and “Profile Updates”.

Now, every time a subscriber joins this list, a new WordPress user will be created based on their contact data in Mailchimp. If the user already exists on the site, they will be updated (no duplicate users will be created).

Since we’ve enabled “Profile Updates”, the user in WordPress will also be updated whenever their profile is modified within Mailchimp.

**Note:** The *Profile Updates* trigger will only send a webhook when a subscriber’s fields have been edited, not their tags. To sync tag changes back to WordPress, you will need to create a webhook in a Journey.

### Webhooks in journeys

With a Mailchimp Standard plan or higher, you can add webhooks to [journeys](https://mailchimp.com/help/about-customer-journeys/). This gives you more control over the webhook targeting.

For example you can:

- Import a WordPress user only when a specific tag is applied.
- Only import WordPress users after free trial customers have reached the end of their trial.
- Trigger an update of a WordPress user’s cached tags when a tag is applied in Mailchimp.

First, create a journey, and select your trigger. In this case we are using a *Tag Applied*trigger.

![](https://wpfusion.com/wp-content/uploads/2018/08/mailchimp-journey-overview-1024x590.jpg)

For the next step, add a Webhook action.

![](https://wpfusion.com/wp-content/uploads/2018/08/mailchimp-journey-webhook-overview-1024x741.jpg)

Configure the webhook like so:

- **Webhook name:**Pick any name that will help you remember what the webhook does.
- **URL destination:**Enter the webhook URL to your site, following the examples below. You can also copy/paste your webhook URL out of the Webhooks section on the General tab in the WP Fusion settings.
- **Authentication:**None.
- **Headers:**None.
- **Content:**copy and paste the code below into the **Payload**field:

```
{
  "contact_id": "*|EMAIL|*"
}
```

Finally, save and publish your journey.

Now when the selected tag is applied in Mailchimp, a user will automatically be imported in WordPress.

### Webhook URL methods

WP Fusion supports several URL methods for webhooks:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Mailchimp for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Mailchimp, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Mailchimp contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Mailchimp after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Mailchimp where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Maropost Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/maropost/](https://wpfusion.com/documentation/webhooks/maropost/)

### Overview

You can use webhooks in Maropost to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on rules in Maropost, or update existing users’ meta data and tags.

Webhooks can either be configured globally to your account, or as part of an automation.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Global webhooks

Global webhooks in Maropost are configured by clicking your user name in the top right of the app, and navigating to Settings » HTTP Post URL.

![the screenshot of the marketing cloud interface displays an http post url setup page, prominently featuring a text box for your webhook url. it also includes two options: save changes and a link to learn more about utilizing webhooks within maropost.](https://wpfusion.com/wp-content/uploads/2018/07/maropost-global-webhooks-1024x413.jpg)

Enter the URL to your site, following the examples in [Webhook URL parameters](#webhook-url-parameters) section below.

Every time a contact is added or updated in Maropost, the webhook will be triggered, and their updated data will be synced back to WordPress.

Note that global webhooks should be used with caution— bulk editing contacts could cause hundreds of webhooks to be sent to your site simultaneously, resulting in instability, or even taking your site offline. In many cases it’s more practical to create a webhook in an automation, which is triggered only by a specific tag or property update.

### Webhooks in automations

Webhooks in automations are ideal when you need to trigger an update in WordPress after a specific event in Maropost— for example, applying a tag in Maropost to import a new WordPress user.

To create a webhook in an automation, go to the Manage Automations page by hovering over the Maropost Cloud icon in the upper left-hand corner of your screen and then select Automation from the menu. Click the blue New Journey button to create a new rule. Select a trigger for the rule, such as when a page is visited, a field is modified, or a user is added to a tag.

In the screenshots below we’ve configured the rule to be triggered whenever a user is added to the “Add User to WP” tag.

You can also specify any conditions you’d like to be met, or leave this section blank.

![](https://wpfusion.com/wp-content/uploads/2018/07/maropost-journey-1024x329.png)

![](https://wpfusion.com/wp-content/uploads/2018/07/maropost-tag-event-1024x284.png)

Under “Actions”, choose “HTTP Post” from the menu. Enter the URL to your site following the examples in the next sections. You can get your site’s unique access key from the bottom of the main WP Fusion settings page.

![](https://wpfusion.com/wp-content/uploads/2018/07/maropost-http-post.png)

### Webhook URL parameters

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Maropost for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your Maropost application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Maropost contact record.

---

## Flexie Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/flexie/](https://wpfusion.com/documentation/webhooks/flexie/)

### Overview

You can use webhooks in Flexie to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on rules in Flexie, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting started

Go to the Manage Workflows page under the Flexie’s Workflow menu in the sidebar and create a new rule. Select a trigger for the rule, such as when a page is visited, a field is modified, or a user is added to a list.

![](https://wpfusion.com/wp-content/uploads/2018/07/flexieflow-1024x574.png)

In the screenshot below we’ve configured the rule to be triggered whenever a user is added to the “Add User to WP” list.

You can also specify any conditions you’d like to be met, or leave this section blank.

![](https://wpfusion.com/wp-content/uploads/2018/07/add-list-flexie-1024x393.png)

Under “Actions”, choose “Add Webhook” from the menu. Enter the URL to your site following the examples in the next sections. You can get your site’s unique access key from the bottom of the main WP Fusion settings page. Also, make sure the Request Method is set to Get.

![](https://wpfusion.com/wp-content/uploads/2018/07/webhook-flexie-1024x949.png)

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY&contact_id={{id}}
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Flexie for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY&contact_id={{id}}
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&contact_id={{id}}
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&contact_id={{id}}&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&contact_id={{id}}&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your Flexie application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Flexie contact record.

---

## UserEngage Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/userengage/](https://wpfusion.com/documentation/webhooks/userengage/)

### Overview

You can use webhooks in UserEngage to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on rules in UserEngage, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting started

Go to the Automations page under the Engage menu in the sidebar and create a new rule. Select a trigger for the rule, such as when a page is visited, a field is modified, or a tag is applied. In the screenshot below we’ve configured the rule to be triggered whenever the “Add User to WP” tag is applied.

You can also specify any conditions you’d like to be met, or leave this section blank.

![](https://wpfusion.com/wp-content/uploads/2018/06/userengage-1.png)

Under “Actions”, choose “API Call” from the dropdown menu. Enter the URL to your site following the examples in the next sections. You can get your site’s unique access key from the bottom of the main WP Fusion settings page.

![](https://wpfusion.com/wp-content/uploads/2018/06/apiuser.png)

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from UserEngage for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your UserEngage application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their UserEngage contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to UserEngage after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in UserEngage where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Kartra Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/kartra-webhooks/](https://wpfusion.com/documentation/webhooks/kartra-webhooks/)

### Overview

You can use Kartra’s outbound API to send data back to your WordPress site using WP Fusion. Using these webhooks, you can create new users on your WordPress site based on rules in Kartra, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting started

Webhooks are managed in Kartra under **My Integrations >> API >> API**. If you’re already logged into your Kartra account, you should be able to access this page by [following this link](https://app.kartra.com/integrations/api/key).

For this tutorial, we’ll be showing you how to create a new WordPress user when a specific tag is applied to a Kartra lead. See below for additional options when constructing the URL parameters.

First, select **Yes, activate the outbound API**. Then enter the URL to your WordPress site, including 
```
?wpf_action=add
```

 and your access key, like in the screenshot below.

![](https://wpfusion.com/wp-content/uploads/2018/03/kartra-webhooks-1-1-1024x628.jpg)

Make sure to select 
```
https://
```

 from the dropdown, not 
```
http://
```

.

Finally, set a condition for when this API request should be sent. In this example, we’re sending the API request whenever the tag **Import to WordPress** is applied to a lead. Save your settings, and you’re good go go.

Now, every time the tag **Import to WordPress** is applied to a lead, a new WordPress user will be created based on their contact data in Kartra. If the user already exists on the site, they will be updated (no duplicate users will be created).

Kartra provides a wide variety of options for triggering an Outbound API call. You can send webhooks when tags are applied, when leads are added, when leads are updated, and various other triggers. For a full list of options in structuring the webhook URL, see the sections below:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Kartra for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Kartra, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Kartra contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Kartra after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Kartra where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Zoho Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/zoho-webhooks/](https://wpfusion.com/documentation/webhooks/zoho-webhooks/)

### Overview

You can use webhooks in Zoho to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on workflow rules in Zoho, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting started

Webhooks are managed in Zoho under **Setup >> Workflow Rules**. If you’re already logged into your Zoho account, you should be able to access this page by [following this link](https://crm.zoho.com/crm/ShowSetup.do?tab=automate&subTab=workflow&step=showAllRules).

For this tutorial, we’ll be showing you how to create a new WordPress user when a specific tag is applied to a Zoho contact. See below for additional options when constructing the URL parameters.

From the Workflow Rules screen, first create a new **Workflow Rule**:

![](https://wpfusion.com/wp-content/uploads/2018/03/Zoho-create-workflow-rule.png)

The module should be **Contacts**. You can specify a rule name and description to help organize your Workflow Rules.

![](https://wpfusion.com/wp-content/uploads/2018/03/Zoho-webhook-workflow-trigger-1024x435.png)

The first step, **When**, specifies when the Workflow Rule should apply. Select “Record action”, and choose “Edit” as in the screenshot above.

For the field to be used as the trigger, select “Tag”, and then press **Done** to move on to the next step.

![](https://wpfusion.com/wp-content/uploads/2018/03/Zoho-webhook-workflow-condiion-1024x321.png)

Create a condition, so that the rule is only processed when the desired tag is applied. In this case, we’re using the tag **Import to WordPress**. Then click **Next**.

For the first action, create an action to remove the tag **Import to WordPress**. This will stop the workflow from running multiple times on contacts who have already been imported. Then add a Webhook action:

![](https://wpfusion.com/wp-content/uploads/2018/03/Zoho-webhook-setup2-1024x836.png)

The **URL to Notify** should be the URL to your WordPress site, followed by 
```
?wpf_action=add
```

 and 
```
&access_key=ACCESSKEY
```

, where 
```
ACCESSKEY
```

 is the access key provided at the bottom of the **General Settings** tab in the WP Fusion settings on your site.

Then, under **URL Parameters**add a parameter for contact_id, and select Contacts and Contact Id from the dropdowns to the right. This will send the contact ID of the contact to be imported. Then click **Save and Associate** to continue.

![](https://wpfusion.com/wp-content/uploads/2018/03/Zoho-workflow-setup-1024x587.png)

After setting everything up, your Workflow Rule should look like the screenshot above. Go ahead and save the Workflow Rule.

Now, every time the tag **Import to WordPress** is applied to a contact, a new WordPress user will be created based on their contact data in Zoho. If the user already exists on the site, they will be updated (no duplicate users will be created).

Zoho provides a wide variety of options for triggering a Workflow Rule. You can send webhooks when tags are applied, when contacts are added, when contacts are updated, and using date triggers. For a full list of options in structuring the webhook URL, see the sections below:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Zoho for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your Zoho application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Zoho contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Zoho after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Zoho where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## MailerLite Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/mailerlite-webhooks/](https://wpfusion.com/documentation/webhooks/mailerlite-webhooks/)

### Overview

Using webhooks with MailerLite you can create new users on your WordPress site when subscribers are added to a certain group, or automatically update existing users’ meta data and groups when changes happen in MailerLite.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Setup

The “update” method is very straightforward: check the checkbox next to **Update Trigger**, and any updates to subscribers in MailerLite will automatically be synced back to WordPress. This includes adding and removing subscribers from Groups.

**To automatically add MailerLite subscribers as WordPress users**, first create a group that designates site members. Then navigate to the Webhooks section on the General settings tab of the WP Fusion settings, and select this group from the dropdown. Now, whenever a subscriber is added to this group, they will automatically be imported as a new WordPress user.

![](https://wpfusion.com/wp-content/uploads/2018/02/mailerlite-webhooks-1024x278.jpg)

The import group method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in MailerLite, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their MailerLite contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to MailerLite after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in MailerLite where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

### Debugging webhooks

Occasionally MailerLite webhooks can get messed up— for example if you’ve copied your site to a new URL, or you’ve reset WP Fusion and your access key has changed.

To see which webhooks are registered in MailerLite, you can click the *list all registered webhooks* link under the webhooks heading.

![](https://wpfusion.com/wp-content/uploads/2018/02/ml-webhooks-debug-1024x577.jpg)

The webhooks will be loaded from MailerLite and listed. If you need to reset everything and start over, you can click the next link to delete all webhooks.

---

## Intercom Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/intercom-webhooks/](https://wpfusion.com/documentation/webhooks/intercom-webhooks/)

### Overview

You can use webhooks in Intercom to send data back to your WordPress site when a contact’s record has been modified, or tags have been added or removed.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting started

To use webhooks with Intercom you first need to log into their developer portal, [via this link](https://app.intercom.com/a/apps/_/developer-hub). Then click on your “Access Token App”.

![](https://wpfusion.com/wp-content/uploads/2018/01/intercom-webhooks-2-1024x389.jpg)

Click on **Webhooks**from the left sidebar to set up the webhook.

The webhook URL should follow one of the patterns below, using either “update_tags”, “update” or “add”.

![](https://wpfusion.com/wp-content/uploads/2018/01/intercom-webhooks-3-1024x951.jpg)

In the screenshot above, we’re sending a webhook to update WordPress whenever a user’s tags are modified or their email is updated. You could also send a webhook to register new users on your site when a new user is added in Intercom using 
```
?wpf_action=add
```

 (see below).

You can find your access key at the bottom of the General tab in the WP Fusion settings page.

**Note:**Make sure to use the **user** topics and not **contact** topics.

#### 

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Intercom for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### To create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Intercom, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Intercom subscriber record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Infusionsoft after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Intercom where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Mautic Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/mautic-webhooks/](https://wpfusion.com/documentation/webhooks/mautic-webhooks/)

### Overview

You can use Webhooks in Mautic to automatically send updates back to your WordPress site when a contact’s profile has been updated. You can also automatically generate new WordPress user accounts for Mautic contacts.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).
There are two ways to set up webhooks with Mautic. Either globally, or part of a campaign:

### Global webhooks

Global webhooks apply to all contacts in Mautic. For example you can send data back to WordPress whenever any contact is updated.

Navigate to the webhook settings (accessible via the gear the the top right of your app) and create a new webhook.

![](https://wpfusion.com/wp-content/uploads/2017/11/mautic-webhooks-1024x468.jpg)

Depending on the action you’re trying to perform, there are multiple ways to format the webhook URL. Those are explained further down this page.

### Webhooks in a campaign

You can also add a webhook node to a campaign, so that it only runs on contacts in that campaign. For example this could be used to create new WordPress users only when a contact is tagged when a specific tag.

![](https://wpfusion.com/wp-content/uploads/2017/11/mautic-campaign-webhooks-860x1024.jpg)

- In the URL field, enter the URL to your site
- For the method, select GET
- Under data, add three new rows:
- Name 
```
contact_id
```

, and the value is 
```
{contactfield=id}
```
- Name 
```
access_key
```

, the value is the access key from the bottom of the WP Fusion general settings tab
- Name 
```
wpf_action
```

, which can be either 
```
add
```

, 
```
update
```

, or 
```
update_tags
```

.  See below for more info.

When the contact gets to this point in the campaign, Mautic will ping your webhook URL and merge in the ID of the current contact, so that WP Fusion knows which contact to load the data for.

### Webhook methods

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, set 
```
wpf_action
```

 to 
```
update_tags
```

.

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Mautic for that contact, set 
```
wpf_action
```

 to 
```
update
```

.

#### To create a new user

To create a new user, set 
```
wpf_action
```

 to 
```
add
```

.

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, add an additional row to the data, with name  
```
send_notification
```

 and value 
```
true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use name 
```
role
```

 and value 
```
customer
```

.

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Mautic, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Mautic contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Mautic after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Mautic where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## ConvertKit Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/convertkit-webhooks/](https://wpfusion.com/documentation/webhooks/convertkit-webhooks/)

### Overview

Using webhooks with ConvertKit you can create new users on your WordPress site when tags are applied in ConvertKit, or update existing users’ meta data and tags.

WP Fusion supports two types of webhooks: **update** and **add**. The update webhook will trigger WP Fusion to load the user’s latest meta data and tags from ConvertKit.

Using the add webhook will create a new WordPress user on your site based on a contact in ConvertKit. If you attempt to add a user that already exists, they will just be updated (no duplicate users will be created).

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting Started

Create two tags in ConvertKit, one for triggering user updates, and one for triggering the import of new users. Then go to the General tab of the WP Fusion settings and add these tags to the tag select boxes in the Webhooks section, then save the settings.

![](https://wpfusion.com/wp-content/uploads/2017/04/convertkit-webhooks-2-1-1024x798.jpg)

If you navigate back to your Automation Rules tool in ConvertKit, you should see the two new automation rules listed.

![](https://wpfusion.com/wp-content/uploads/2017/04/convertkit-webhooks-1-1024x359.jpg)

You can now apply these tags as part of other automations to keep subscriber information in sync, and even automatically generate WordPress accounts for ConvertKit subscribers.

The import trigger method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in ConvertKit, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their ConvertKit contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to ConvertKit after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in ConvertKit where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Agile CRM Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/agile-crm-webhooks/](https://wpfusion.com/documentation/webhooks/agile-crm-webhooks/)

### Overview

You can use webhooks in Agile CRM to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on rules in Agile CRM, or update existing users’ meta data and tags.

There are two ways to sync data between AgileCRM and WP Fusion. **Method One** is available on all plans. **Method Two** is available with Enterprise plans, but not the lower pricing tiers.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Method One

In a new or existing campaign, add a JSON IO item to any campaign. This could be triggered by a tag being applied, or part of a larger sequence.

![](https://wpfusion.com/wp-content/uploads/2017/02/agilecrm-webhook-2.jpg)

Click on the JSON IO item and in the window that pops up, configure the parameters like in the screenshot below. Replace the URL field with the URL to the home page of your site, and put your access key (from the main page of the WP Fusion settings) in the 
```
access_key
```

 field.

![](https://wpfusion.com/wp-content/uploads/2017/02/agilecrm-webhook-896x1024.jpg)

#### Method Two

Agile CRM also supports an alternate method of sending webhooks that doesn’t require setting up a campaign sequence. Using this method, WP Fusion will pull the latest data from Agile CRM any time a contact’s details are updated, or a tag is added/removed. For more information on this method, see [Agile CRM’s documentation](https://github.com/agilecrm/webhooks).

To use this method with WP Fusion, create a new webhook and set the URL following the example below.

![](https://wpfusion.com/wp-content/uploads/2017/02/agilecrm-webhook-3-1024x213.jpg)

The URL should be in the format:

```
http://yourwebsite.com/?wpf_action=update&access_key=YOURACCESSKEY
```

Make sure to select “Contact” as the module, and replace ACCESSKEY in the URL with your unique access key (visible on the WP Fusion settings page). Once the webhook is enabled, any changes to contacts in Agile CRM will be reflected on your site immediately.

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from AgileCRM for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, set 
```
wpf_action
```

 to 
```
add
```

.

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, add a parameter 
```
send_notification
```

 and set it to 
```
true
```

.

You can also specify a specific user role to be assigned to the new user, by adding a 
```
role
```

 parameter. For example, to set the new user to the “customer” role, set 
```
role
```

 to 
```
customer
```

.

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

#### Update an existing record only.

If you only want to update an existing contact record to pull any new data from Agile CRM for that contact but NOT create a new user in WordPress, set 
```
wpf_action
```

 to 
```
update
```

.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your Agile CRM application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Agile CRM contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Infusionsoft after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Agile CRM where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Drip Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/drip-webhooks/](https://wpfusion.com/documentation/webhooks/drip-webhooks/)

### Overview

You can use HTTP Posts and Webhooks in Drip to send data back to your WordPress site when a contact’s profile has been modified, or tags have been added or removed. You can also automatically generate new WordPress user accounts for Drip subscribers.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### Webhook types

Drip can trigger webhooks in three ways: via Rules, Workflows, and globally based on account-wide triggers.

#### HTTP Posts in rules

Using an HTTP Post in a Rule in Drip allows you to send data back to WordPress when the rule is triggered.

You can set this up by navigating to the Workflows tab in Drip. Head to the Rules tab and create a new rule.

![](https://wpfusion.com/wp-content/uploads/2017/01/drip-webhooks-1-1024x609.jpg)

First set the criteria which will trigger the rule. In this case, we’re telling Drip to send the HTTP Post whenever the tag “Create WordPress User” is applied to a subscriber.

![](https://wpfusion.com/wp-content/uploads/2017/01/drip-webhooks-2-1024x898.jpg)

In the second panel, select “Send an HTTP post” from the dropdown. For the Endpoint URL, enter the URL to your site.

In this example, we’re triggering the creation of a new WordPress user when the tag is applied. This is achieved by using 
```
wpf_action=add
```

 in the URL. You also need to supply your access key, which can be found from the WP Fusion settings page on your site.

Depending on the action you’re trying to perform, there are several additional parameters you can include in the URL. These can be found at the bottom of this article.

#### HTTP posts in workflows

![](https://wpfusion.com/wp-content/uploads/2017/01/drip-webhooks-automation-1024x694.jpg)

You can also trigger an HTTP Post as part of a workflow. Add a new node to the automation and follow the same steps outlined above.

#### Account-wide webhooks

Another way to configure webhooks in Drip is globally to your account. Head to Settings » Webhooks and click New Webhook to create a webhook.

![](https://wpfusion.com/wp-content/uploads/2017/01/drip-global-webhooks-1024x655.jpg)

Enter the URL to your site, following the examples below. Then select the events that should trigger the webhook.

In the screenshot above we’ve used 
```
wpf_action=update_tags
```

 and set the triggers to *Applied a tag* and *Removed a tag*. This means that any time a tag is added to or removed from a subscriber in Drip, the tag cache will be automatically updates for the corresponding user in WordPress.

**Note:** Because webhooks are global to your account, bulk-editing or bulk-tagging subscribers in Drip could end up sending many hundreds of webhooks to your site at the same time. This may result in temporary slowness, or even your site going offline.

### Webhook URL structure

You can structure the webhook URL differently depending on the desired action. To authenticate the webhook you must add your access key, which can be found at the bottom of the General tab in the WP Fusion settings.

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Drip for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### To create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Drip, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Drip subscriber record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Drip after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Drip where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Ontraport Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/ontraport-webhooks/](https://wpfusion.com/documentation/webhooks/ontraport-webhooks/)

### Overview

You can use webhooks in Ontraport to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on rules in Ontraport, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Using Rules (Ontraport Pro accounts)

Go to the Rules page under the Contacts menu in the sidebar and create a new rule. Select a trigger for the rule, such as when a new contact is added, a field is modified, or a tag is applied. In the screenshot below we’ve configured the rule to be triggered whenever the “Add User to WP” tag is applied.

You can also specify any conditions you’d like to be met, or leave this section blank.

Under “Actions”, choose “Ping a URL” from the dropdown menu. Enter the URL to your site following the examples in the next sections. You can get your site’s unique access key from the bottom of the main WP Fusion settings page.

![](https://wpfusion.com/wp-content/uploads/2016/08/ontraport-webhook-1-1024x961.jpg)

**Note:** The best rule triggers for webhooks are **When Contact is added to a Tag** or **When a field is updated**.

If you use the **Contact is created** trigger then the webhook will send as soon as you click the *Add Contact*button, before you’ve entered any contact details. WP Fusion will then try to import an empty contact, and this will log an error.

#### Inside a Campaign (all accounts)

You can also send a webhook as part of a campaign. The syntax is the same as when using a Rule. To add a webhook to a campaign, click Add New Item and choose *Send A Webhook* from the Advanced pane.

![](https://wpfusion.com/wp-content/uploads/2016/08/ontraport-campaign-webhook-1024x508.jpg)

For the destination URL, enter the URL to your site following the examples given below.

The rest of the fields can be left blank.
![](https://wpfusion.com/wp-content/uploads/2016/08/ontraport-campaign-webhook-2-153x300.jpg)

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY&contact_id=[Contact ID]
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Ontraport for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY&contact_id=[Contact ID]
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&contact_id=[Contact ID]
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&contact_id=[Contact ID]&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&contact_id=[Contact ID]&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your Ontraport application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Ontraport contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Ontraport after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Ontraport where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## ActiveCampaign Webhooks

**Source:** [https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/)

### Overview

You can use webhooks in ActiveCampaign to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on automations in ActiveCampaign, or update existing users’ meta data and tags.

**Note:** SiteGround’s anti-bot captcha system automatically blocks all incoming ActiveCampaign webhooks. If webhooks aren’t working on SiteGround, contact SiteGround support and ask for the bot protection to be turned off for your account.
Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).
There are two ways to manage webhooks in ActiveCampaign, either via an **Automation** or in the **Developer Settings.**

### Automation method

**Note:** Automation webhooks are no longer available on the ActiveCampaign *Starter* plan. To use webhooks in automations you will need to upgrade to the *Plus* plan or higher.
*(Recommended)* The automation method is best if you need to send a webhook to create or update a WordPress user as part of a specific process. For example:

- Tag “Website Access” is added
- Send webhook to create WordPress user
- Send welcome email
- Wait 3 days
- Apply tag “Unlock Course Two”
- Send webhook to update tags

Using a webhook in an automation lets you easily visualize the entire automation flow, and see where individual contacts are in the process.

![](https://wpfusion.com/wp-content/uploads/2016/04/ac-automation-webhook-password-1024x989.jpg)

You’ll also be able to visualize where a single contact is in the automation, when the webhook was sent, and whether or not it was received successfully. Using webhooks in automations gives you a lot more control and better reporting than using Global Webhooks (see below).

To use webhooks in automations first create an automation and add a webhook to it, like in the example above. You have three options for the webhook, **update**,**update_tags** and **add**(explained below). For each you will need to supply your access key, which can be obtained from the main panel in your WP Fusion settings.

![ac-webhook2](https://wpfusion.com/wp-content/uploads/2016/04/ac-webhook2.jpg)

When the contact reaches the webhook step in the automation ActiveCampain will notify WP Fusion to load the contact’s data from ActiveCampaign.

#### A note on “failed” webhooks

When viewing automation reports you may see your webhooks being marked as “failed” by ActiveCampaign, like in the screenshot below.

![](https://wpfusion.com/wp-content/uploads/2016/04/Image-2020-10-22-at-4.02.54-PM.png)

This does *not necessarily mean that the webhook failed*. ActiveCampaign will mark any webhook as failed if your server takes longer than 5 seconds to respond.

Since there’s a fair deal of processing involved in receiving a webhook ([see some average timings here](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#webhook-performance)), it’s not uncommon for your server to take longer than 5 seconds, especially with shared hosting.

For a definitive answer as to whether the webhook was processed, you can [check the WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/).

If you’d prefer not to see the *Failed* symbol in the automation reports, you can also set your webhooks to [run asynchronously](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#the-async-method).

This does not speed up the time required to process the webhook, or make webhooks more reliable, it just means that WP Fusion will immediately respond to ActiveCampaign that every webhook was successful, and then actually process the webhook a few seconds later.

#### Verifying that webhooks worked

There are some cases where a webhook to import a new user might fail— like if your site is briefly unavailable while installing updates, or ActiveCampaign’s API takes too long to load the data for the new user, and times out.

If you’re experiencing unreliable webhooks you may want to set up a notification and/or an automatic retry. Take a look at the example below, or [click here to load the example template into your ActiveCampaign account](https://tplshare.com/L8sbbb9).

![](https://wpfusion.com/wp-content/uploads/2016/04/ac-import-webhook-with-fallback-1024x1011.jpg)This ActiveCampaign automation sends a notification and retries the webhook if a user import fails.
Since we’re generating a password and syncing it back to ActiveCampaign, you can check against the value of this field to see if the webhook worked (you could also check against a tag, or the User ID field).

In this automation we have a 5 minute wait after sending the webhook. If the contact’s Password field is blank, the automation first sends a notification to an admin, and then retries the webhook.

The *User Imported*[goal](https://help.activecampaign.com/hc/en-us/articles/218813777-How-to-use-the-Goal-automation-action) is set up like so:

![](https://wpfusion.com/wp-content/uploads/2016/04/ac-import-webhook-with-fallback-goal-1024x605.jpg)

Using the condition *Password is not blank* means that if any time the contact’s password is updated, they will immediately jump to the goal, and then proceed on to the next step which sends a welcome email.

This means that if everything is running properly, the new user will be imported and a welcome email sent within a few seconds. But if there are any delays or errors, a notification will be sent to an admin within five minutes— you can then investigate the contact to see why they weren’t imported successfully (i.e. an invalid email address) or let the retry cycle run the webhook again.

### Developer settings method

*(Advanced)* You can also set up webhooks which are global to your account. This is best if you’re manually editing contact records in ActiveCampaign (outside of an automation) and need these changes synced to WordPress.

**Note:** It’s not recommended to set up global webhooks with the 
```
add
```

 method, as then every contact in ActiveCampaign will be given a WordPress user account.
To set up a webhook navigate to Developer » Webhooks in your ActiveCampaign admin settings, and click Add to create a new webhook.

![ActiveCampaign webhook modal](https://wpfusion.com/wp-content/uploads/2016/04/activecampaign-webhooks-2023-1024x737.jpg)

For **URL** enter the URL to your site with your access key following the patterns [in the next section](#webhook-url-parameters).

Under **Events** select the events that should trigger the webhook:

- *Contact Updated* will be triggered whenever a contact is edited, as well as when tags are applied or removed.
- *Contact Tag Added* and *Contact Tag Removed* will only be triggered when tags are edited, not when a contact’s custom fields change.

For **Initialize From**, select which types of events should trigger the webhook. ActiveCampaign [has a description of the types here](https://help.activecampaign.com/hc/en-us/articles/115001403484-Working-with-webhooks).

You shouldn’t enable *By the API* as this will send a webhook after WP Fusion sends an API call to apply a tag, which is redundant.

Note that, despite the descriptions in the ActiveCampaign help portal, we have tested and found that tags applied in automations will trigger a global webhook if it is set to **By any user**. If you’re experiencing unexpected webhooks or a high volume of webhooks, it’s recommended to disable that trigger.

**Note:** November 21st, 2023. We have confirmed with ActiveCampaign support that **By any user** is also triggered by API calls. This means it is not currently possible to trigger webhooks based on manual contact edits without also triggering them based on API activity.

This is acknowledged as a bug, but they are only releasing the fix on an account-by-account basis. If you want to sync manual contact edits back to WordPress using global webhooks, you should [contact ActiveCampaign support](https://help.activecampaign.com/hc/en-us/requests/new) and ask for this fix to be enabled on your account— so that **By any user** webhooks are *only* triggered by users and not API activity.
Keep in mind that, because these webhooks are global to your ActiveCampaign account, bulk editing contacts will trigger webhooks to be sent to your site for every edited contact, which may make your WordPress site temporarily unstable.

**Note:** If you’ve set up global webhooks with the 
```
update
```

 or 
```
update_tags
```

 method it’s not necessary to also include those same webhooks in automations.

### Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior:

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from ActiveCampaign for that contact, the URL for the webhook should look like the following:

```
https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY
```

#### Create a new user

To create a new user, use the following URL:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your ActiveCampaign application, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their ActiveCampaign contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to ActiveCampaign after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in ActiveCampaign where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

## Infusionsoft / Keap HTTP Posts

**Source:** [https://wpfusion.com/documentation/webhooks/infusionsoft-http-posts/](https://wpfusion.com/documentation/webhooks/infusionsoft-http-posts/)

### Overview

You can use HTTP Posts in Infusionsoft to send data back to your WordPress site using WP Fusion. Using HTTP Posts you can create new users on your WordPress site based on automations in Infusionsoft, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### Getting Started

Open a campaign in the Campaign Manager (or create a new one) and create a trigger goal. For example, to trigger WP Fusion to sync a contact when a tag is applied, create an Applies A Tag goal. Then connect the goal to a campaign sequence. In the campaign sequence, add a Send HTTP Post action from the Process menu. In the Post URL field, put the URL to your website, like so:

![new-http-post](https://wpfusion.com/wp-content/uploads/2016/01/new-http-post-1024x465.jpg)

There are three methods, **update**, **update_tags** and **add**. For each you will need to supply your access key, which can be obtained from the bottom of the General tab in the WP Fusion settings:

![](https://wpfusion.com/wp-content/uploads/2016/01/webhooks-access-key-1024x312.jpg)

#### To update a user’s tags

To update an existing WordPress user’s tags from the contact record, under Name / Value pairs, you should have:

```
contactId = ~Contact.Id~
wpf_action = update_tags
access_key = [your access key]
```

#### To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Infusionsoft for that contact, under Name / Value pairs, you should have:

```
contactId = ~Contact.Id~
wpf_action = update
access_key = [your access key]
```

#### Create a new user

Using this method, you can register a new user on your website when a contact is created in Infusionsoft. Under Name / Value pairs, you should have:

```
contactId = ~Contact.Id~
wpf_action = add
access_key = [your access key]
```

There are two additional options, which you can leave out if you don’t need them.

```
send_notification = true
role = subscriber
```

If you set 
```
send_notification
```

 to 
```
true
```

, the user will be sent a welcome email with their username, password, and a link to log in on your site.

You can also set the 
```
role
```

 parameter to assign users a specific role on your site. By default users will be imported with the role set in the WordPress’ Settings >> General “New User Default Role” field, but sometimes you may want to create users with a different role depending on conditions in your campaign sequence.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:**By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Infusionsoft, and enabled these fields in WP Fusion for sync with 
```
user_login
```

 and 
```
user_pass
```

 on your website, the new users will be given the usernames and passwords stored in their Infusionsoft contact record.

#### User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Infusionsoft after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Infusionsoft where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

---

