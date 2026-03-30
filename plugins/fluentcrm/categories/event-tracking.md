# Event Tracking

*Category from FluentCRM documentation*

---

## Event Tracking Record

**Source:** [https://fluentcrm.com/docs/event-tracking-record/](https://fluentcrm.com/docs/event-tracking-record/)

For Tracking Event Records create an Automation Funnel. Give an Internal Label and select **Tracking Event Recorded** automation Trigger. Click on the **Continue**button after that.

![11](https://fluentcrm.com/wp-content/uploads/2024/11/11.webp)

Here you’ll add your Automation name. You can also edit it.

**Event Key:**Put your Event Keywords.

**Internal description:** Enter a Description of the description of your event.

**Minimum Occurrence:**To set a **Minimum Occurrence** count for the event, click the Plus “+” icon. By default, the count is set to 1.

After that click the **save setting** button to store your Tracking Events Record.

> The minimum occurrence count will only trigger if the contact is on the subscribed list.

![12](https://fluentcrm.com/wp-content/uploads/2024/11/12.webp)

Add an action by clicking the **Add Action/Goal** button.

![13](https://fluentcrm.com/wp-content/uploads/2024/11/13-scaled.webp)

Now opens a new popup on the right side. Here select **Add Event Tracking**action blocks**.**

![14](https://fluentcrm.com/wp-content/uploads/2024/11/14-scaled.webp)

Here appears a new popup and see **Add Event Tracking to contact profile**. Now Enter the **Tracking key**, **Event tracking Title**, and **Event value**. Then click the **Save Settings** button to save the action.

![15 profile](https://fluentcrm.com/wp-content/uploads/2024/11/15-profile.webp)

Now add another action block to actions.

![16](https://fluentcrm.com/wp-content/uploads/2024/11/16-scaled.webp)

Now add **internal Lable**and **Internal Description**. Select the FluentCRM contact that you want to run your Tracking Record. Click the **Save Settings** button.

![17](https://fluentcrm.com/wp-content/uploads/2024/11/17.webp)

Here, See the Event Tracking Record.

![18](https://fluentcrm.com/wp-content/uploads/2024/11/18-1.webp)

## Filter Data Properties

If you want to **Check the Condition** of your contact data then you can set up these data filters. To filter Specific data, click the Plus (+) icon and then the **Conditional Action**.

![19](https://fluentcrm.com/wp-content/uploads/2024/11/19-2-scaled.webp)

Here appears a new popup. Type the**Internal Lable** name and**Internal Description**shown in the screenshot below.

> Specify which contact properties need to be matched. Based on the Condition it will run yes blocks or no blocks

Now Click on the + **Add** icon to add a Data Filter to Specify the Matching Condition Section. Then click**Event Tracking**and click the particular one. Each time you can add multiple data filters.

You can use the**“+OR”** button to add multiple conditions and the **Delete** icon to delete conditions.

After clicking the add button you’ll see **Event Tracking**.

- Event Key
- Event Occurrence Count
- Event Value
- Event Title

![21](https://fluentcrm.com/wp-content/uploads/2024/11/21.webp)

- **Event key:** A filter for **“in”**and**“not in,”** which indicates whether the specified event key should be included or excluded. Enter a keyword that is likely used to match event keys or values for the condition.

*If the event key is the same don’t create a new event it was just created.*

![22](https://fluentcrm.com/wp-content/uploads/2024/11/22.webp)

- **Event Occurrence Count:**The number you provided matches the count of times the selected event has occurred.

![23](https://fluentcrm.com/wp-content/uploads/2024/11/23.webp)

- **Event Value:**The compare value will be matched with the selected event & last recorded value of the selected event key.

![24](https://fluentcrm.com/wp-content/uploads/2024/11/24.webp)

- **Event Title:**Filter by match Title.

![image](https://fluentcrm.com/wp-content/uploads/2024/11/image-1.png)

If you want to track events programmatically, please check out [the developer’s doc here](https://developers.fluentcrm.com/modules/event-tracking/).

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Event Tracking With Rest API

**Source:** [https://fluentcrm.com/docs/event-tracking-with-rest-api/](https://fluentcrm.com/docs/event-tracking-with-rest-api/)

To create Event Tracking with REST API, go to the FluentCRM Settings then Click on the **REST API** from the left sidebar. Now click on the **Add New Key** button.

![rest api 01](https://fluentcrm.com/wp-content/uploads/2024/11/Rest-Api-01-scaled.webp)

A popup will appear for the Add New REST API Key name. Now move into the **Name of this Key** and**Associate FluentCRM Manager**. Click the **Create** button.

To know how to create a Manager please visit this [Documentation](https://fluentcrm.com/docs/global-managers-settings/).

![02](https://fluentcrm.com/wp-content/uploads/2024/11/02-2.webp)

Now another popup will appear to create your REST API. Simply Copy the **API Username** and **API Password**for later use.

![03](https://fluentcrm.com/wp-content/uploads/2024/11/03-1.webp)

Now go to the API platform to Create your API. Here I am using Postman login to your [account](https://www.postman.com/postman-account/).

Now enter this URL:https://your-domain.com/wp-json/fluent-crm/v2/subscribers/track-event

Here only enter your domain name instead of that URL (your-domain.com) after that select**Post** in the screenshot below.

![04](https://fluentcrm.com/wp-content/uploads/2024/11/04-1-scaled.webp)

Now click on the **Authorization** section and choose the **Basic Auth.**

Here paste the API **Username**and **Password** that were copied before.

![05](https://fluentcrm.com/wp-content/uploads/2024/11/05-1-scaled.webp)

After that select the **Body** section and enter the **Event key**, **Title**, and event targeted **Email Address,**etc. Then click on the **Send** button.

Now you’ll see a message saying your **Event has been tracked** in JSON format.

![06](https://fluentcrm.com/wp-content/uploads/2024/11/06-1.webp)

Now to see your tracked event status go to your FluentCRM email Address Contact and find it.

![07](https://fluentcrm.com/wp-content/uploads/2024/11/07-1.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Event Tracking with Action Hooks

**Source:** [https://fluentcrm.com/docs/event-tracking-with-action-hooks/](https://fluentcrm.com/docs/event-tracking-with-action-hooks/)

If you want to run Event Tracking with Action Hook then you will need a snippet plugin. Here we are using the **FluentSnippets** WordPress plugin.

After that navigate the**Fluentsnippets** and click **Create Your First Snippet** or **New Snippet**.

![fluent snippets](https://fluentcrm.com/wp-content/uploads/2024/11/Fluent-Snippets-scaled.webp)

Then copy this**code** and paste it into your Snippets Php code section image below.

```
do_action('fluent_crm/track_event_activity', [

    'event_key' => 'fcrm_event_tested',

    'title'     => 'Testing FluentCRM Event',

    'value'     => 'This is my event value with plain Text',

    'email'     => 'success+3000@simulator.amazonses.com',

    'provider'  => 'woocommerce'

], true);
```

Here change your **event key**, **title**,**value**, **email**, and **provider** name as you want. Then activate this snippet.

![02](https://fluentcrm.com/wp-content/uploads/2024/11/02-1-scaled.webp)

Now to see your event tracked go to FluentCRM contact.

![rjax eventv tracking 03](https://fluentcrm.com/wp-content/uploads/2024/11/Rjax-eventv-tracking-03-scaled.webp)

## Get events of a single contact

If you want to see the event tracking of a single contact, let’s see how you can do that.

API: https://your-domain.com/wp-json/fluent-crm/v2/subscribers/{ID}/tracking-events

Then You will get a response like this:

![single contact event tracking 04](https://fluentcrm.com/wp-content/uploads/2024/11/single-contact-event-tracking-04.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Event Tracking Automation

**Source:** [https://fluentcrm.com/docs/event-tracking-automation/](https://fluentcrm.com/docs/event-tracking-automation/)

Event Tracking in FluentCRM is a powerful tool that helps understand users’ actions and behaviors on your websites. It records these actions and generates automated responses, ensuring your audience receives timely and relevant material.

Also, essential for optimizing marketing strategies and increasing user engagement.

## Enable Event Tracking Module

First, navigate to the FluentCRM Dashboard then click on the **Addons** section from the left WordPress sidebar. Here you’ll see the **Event Tracking Module**. Now click on the **Setting**button****to enable event tracking activity.

![event tracking 01](https://fluentcrm.com/wp-content/uploads/2024/11/event-tracking-01-scaled.webp)

A pop-up will appear, enable****the **Checkbox** and click the **Save Settings**button.

![02](https://fluentcrm.com/wp-content/uploads/2024/11/02-scaled.webp)

## Event Tracking With Automation

Go to your FluentCRM dashboard and navigate to **Automation**. Click on the **New Automation**button.

![03](https://fluentcrm.com/wp-content/uploads/2024/11/03.webp)

A popup will appear. Now enter the **Internal Label** name, select the **Tag Applied** automation trigger and press the **Continue** button to start the automation.

![04](https://fluentcrm.com/wp-content/uploads/2024/11/04.webp)

Now here opens a new popup. Set the Automation name and put a Description in the **Internal Description** boxes. Now select **Tags** for your FluentCRM contact base. You can add multiple Tags from your CRM contacts.

Next, select the **Run When** tag option and tick the radio button. Here you’ll see two options:

1. Contact added in any of the selected tags
2. Contact added in all of the selected tags

If you want to automatically restart the automation multiple times check the conditions checkbox.

Now Click the**Save Settings** button to save it.

![05](https://fluentcrm.com/wp-content/uploads/2024/11/05.webp)

## Event Tracking Action

After that you will see the Automation funnel page, click on the plus button and**Add Action/Goal**for Event Actions.

![06](https://fluentcrm.com/wp-content/uploads/2024/11/06.webp)

Click the **Add Event Tracking** action blocks for your target contact.

![07](https://fluentcrm.com/wp-content/uploads/2024/11/07-scaled.webp)

Here also appears a new popup and see Add Event Tracking to Contact Profile. Now enter the **Event Tracking Key** (example: new_event_key) and Give an **Event Tracking Title**. These two things are **Required**.

Then enter details about this event or numeric value in the **Event Value** section. Click the **Save Settings**button to save it.

![08](https://fluentcrm.com/wp-content/uploads/2024/11/08-scaled.webp)

Now publish the automation by enabling the toggle in the top right corner.

![09](https://fluentcrm.com/wp-content/uploads/2024/11/09.webp)

If you want to see your Event Tracking details, go to your FluentCRM contacts profile.

You will track your event using your contacts subscriber ID or Contacts ID instead of your email address.

![10](https://fluentcrm.com/wp-content/uploads/2024/11/10.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

