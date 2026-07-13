# Create Zap

*Category from The Events Calendar documentation*

---

## Creating a Zap with The Events Calendar and Event Tickets

**Source:** [https://docs.nexcess.com/software/the-events-calendar/create-zap/](https://docs.nexcess.com/software/the-events-calendar/create-zap/)

Event Automator allows you to use Zapier to integrate The Events Calendar and Event Tickets with your favorite third-party apps and tools. This is done by creating a “Zap” in Zapier. A zap is the simple “recipe” (instructions) that powers the automation of any of your workflows. Before reading further, make sure you have installed and configured Event Automator as [explained here.](https://docs.nexcess.com/software/the-events-calendar/getting-started-with-event-automator/)

**Related Articles:**

- [Customizing Zaps with The Events Calendar and Event Tickets](https://docs.nexcess.com/software/the-events-calendar/customize-zaps/)
- [Managing Your Zapier Endpoints](https://docs.nexcess.com/software/the-events-calendar/zapier-endpoints/)

## The Events Calendar as a Trigger: Add Event Information to Google Sheets

In this example, we’ll show you how to create a Zap that creates a new Google Sheets row when a new event is added to The Events Calendar on your WordPress site. Please note that the same principles apply to creating a Zap for Event Tickets.

1. In [Zapier,](https://zapier.com/app/login) click on the Zaps on the left side panel, then the + Create button.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap1v1.jpg)

1. Select **The Events Calendar** as a trigger.
![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap2.jpg)

1. Choose **New Event** and click on *Continue*.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap3.jpg)

1. Choose your account, wait until it loads, and click on *Continue*.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap4.jpg)

1. You can now begin testing the trigger from Zapier. Once the testing completed, it will show one or more test records.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap25.jpg)

**Important:**Testing your trigger is a crucial step!

Successfully testing the trigger allows Zapier to “see” all the event fields available on your site.
In other words, if Zapier can’t see the fields on your site, your Zaps will not work.

The event selected to test the trigger should display a list of mappable fields found in your events when selected.

**Caution:**Don’t be fooled by the fact that Zapier has found an event!
Look carefully at the screen. If you are not seeing a list of fields or if the event id displays as *no-new-events*, that event cannot be used to test the trigger.

To fix that, you can:

1. Select another event (if any)
2. Create a new event on your site 
- Refresh the page where you are testing the trigger on zapier.com
- The freshly created event should appear
- Select it and look for those mappable event fields

#### Summary

Selecting an event that lets you see all the mappable fields is necessary for Zapier to “know” what it’s working with. Real event data acts as an available data template for Zapier.

**Pro tip:** the same concept applies to Event Tickets triggers (attendees, tickets, ticket orders). You need to feed Zapier real data so that it connects the dots.

1. Select the action you’d like to create (in this case, it’s Google Sheets).

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap6.jpg)

1. Choose *Create Spreadsheet Row* as an event.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap7.jpg)

1. Select your **Google Sheets account** or Sign in and allow access if necessary.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap8.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap9.jpg)

1. Set the desired **Drive**, **Spreadsheet**, and **Worksheet**, and click on *Continue*.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap101.jpg)

1. Map each desired field to its destination column in the spreadsheet.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap11.jpg)

**Important:**

1. Make sure you have created headers for each of the desired fields in the destination spreadsheet (i.e.: row A should read – ID, Title, Start Date, etc.)
2. Make sure you previously selected a valid event while testing the trigger in [step 6](#important) to be able to map fields.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap11.1.jpg)

1. Click on *Continue*.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap12.jpg)

1. Next, you’ll want to test your Zap.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Kbzap15.jpg)

If it was successfully created, your screen should look like this:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Kbzap16.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzaap17.jpg)

Now you’re ready to publish your Zap.

#### Test your Zap

Now you’re ready to test out your Zap. To do this:

1. Go to your WordPress admin area and create a new event.
2. Wait at least 15 minutes (if you have a free account).
3. Check the selected Google Sheets spreadsheet and worksheet.
4. Refresh the page.

A new row containing the data of the new event should appear.

## The Events Calendar as an Action: Create an Event From Google Sheets

In this example, we’ll show you how to create a Zap that creates a new event in The Events Calendar on your WordPress site when a new Google Sheets row is created.

1. In [Zapier,](https://zapier.com/app/login) click on the *+ Create Zap* button

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap20.jpg)

1. Select **Google Sheets** as a trigger

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap21.jpg)

1. Choose **New Spreadsheet Row** as an event, and click on *Continue*

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap22.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap23.jpg)

1. Set the desired **Drive**, **Spreadsheet**, and **Worksheet**, and click on *Continue*.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap24.jpg)

**Important:** the selected spreadsheet must have [column headers](https://help.zapier.com/hc/en-us/articles/8496276985101#make-sure-the-first-row-is-a-header-row-with-column-names-0-0) for this to work.

Column headers are labels placed in the first row of your spreadsheet that describe the data contained in each column.

## Event Tickets as a Trigger: Add Ticket Orders to Google Sheets

In this example, we’ll show you how to create a Zap that creates a new Google Sheets row when a new ticket order is added to your WordPress site.

1. In [Zapier,](https://zapier.com/app/login) click on the Zaps on the left side panel, then the + Create button.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap1v1.jpg)

1. Select **Event Tickets** as the trigger.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/1.jpg)

1. Choose **New Order** as the Trigger event.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/2-1.jpg)

1. Choose your account, wait until it loads, and click on *Continue*.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/2.1.jpg)

1. You can now begin testing the trigger from Zapier. Once the testing completed, it will show one or more test records. — Make sure you’re working on the most recent record.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/3.jpg)

**Important:**Testing your trigger is a crucial step!

Successfully testing the trigger allows Zapier to “see” all the order fields available on your site.
In other words, if Zapier can’t see the fields on your site, your Zaps will not work.

The order record selected from the trigger test should display a list of fields that can be mapped along with their values.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/4.jpg)

**Caution:**Don’t be fooled by the fact that Zapier has found an order!
Look carefully at the screen. If you are not seeing a list of fields or if the fields do not contain values, that record cannot be used to test the trigger.

To fix that, you can:

- Select another order record (if any)
- Do another ticket order on your site
- Click again on the Find new records button where you are testing the trigger on Zapier
- The freshly created order should appear
- Select it and the fields and values are present

1. Prepare your Google Spreadsheet with the fields being the column headers in the spreadsheet.

You can check out Zapier’s [How To Parse Keys and Values From Line-Item Arrays Into Zapier Mappable Values](https://community.zapier.com/featured-articles-65/how-to-parse-keys-and-values-from-line-item-arrays-into-zapier-mappable-values-7493) if you need the *Items* field mapped into their own columns in the resulting Google Sheet row.
2. Select the action you’d like to create (in this case, it’s Google Sheets).

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap6.jpg)

1. Choose *Create Spreadsheet Row* as an event.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap7.jpg)

1. Select your **Google Sheets account** or Sign in and allow access if necessary.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap8.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap9.jpg)

1. Set the desired **Drive**, **Spreadsheet**, and **Worksheet**, and click on *Continue*.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap101.jpg)

1. Map each desired field to its destination column in the spreadsheet then click *Continue*.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/5.jpg)

1. 

11. Test and Publish your Zap

## Event Tickets as a Trigger: Add Attendees to Active Campaign

In this example, we’ll show you how to create a Zap that creates a new contact in Active Campaign when a new event attendee is created through a ticket purchase.

1. In [Zapier,](https://zapier.com/app/login) click on the Zaps on the left side panel, then the + Create button.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kbzap1v1.jpg)

1. Select **Event Tickets** as the trigger.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/1.jpg)

1. Choose **Attendees** as the Trigger event.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-1.jpg)

1. Choose your account, wait until it loads, and click on *Continue*.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/2.1.jpg)

1. You can now begin testing the trigger from Zapier. Once the testing completed, it will show one or more test records. — Make sure you’re working on the most recent record.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/3.jpg)

**Important:**Testing your trigger is a crucial step!

Successfully testing the trigger allows Zapier to “see” all the order fields available on your site.
In other words, if Zapier can’t see the fields on your site, your Zaps will not work.

The order record selected from the trigger test should display a list of fields that can be mapped along with their values.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-1-1.jpg)

**Caution:**Don’t be fooled by the fact that Zapier has found an order!
Look carefully at the screen. If you are not seeing a list of fields or if the fields do not contain values, that record cannot be used to test the trigger.

To fix that, you can:

- Select another order record (if any)
- Do another ticket order on your site
- Click again on the Find new records button where you are testing the trigger on Zapier
- The freshly created order should appear
- Select it and the fields and values are present

1. Select the action you’d like to create (in this case, it’s ActiveCampaign).

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-2.jpg)

1. Choose *Create or Update Contact* as the action event.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-5-2.jpg)

1. Select your **ActiveCampaign Account** or connect your account if necessary.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-4.jpg)

1. Map the fields accordingly. In this case I’ve only mapped the Email Address, Full Name, and Tags, then click on *Continue*.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-6-1.jpg)

11. Test and Publish your Zap

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-7-1024x333-1.jpg)

## How to Get WhatsApp Notifications for New Event Attendee Registrations

Beyond standard spreadsheet or CRM integrations, you can use **Event Automator** to receive real-time mobile alerts via WhatsApp whenever a new participant registers.

To set this up, select **Event Tickets** as your trigger and **Attendees** as the trigger event. For the action step, search for the **WhatsApp Notifications** app and select **Send Message** as the action event. When connecting your account, you will be prompted to enter the specific phone number where notifications should be sent.

Follow the standard steps to create a Zap, selecting **Event Tickets** as your trigger and **Attendees** as the trigger event. Once you have successfully tested your trigger and Zapier can “see” your attendee fields, proceed with the following specific steps:

1. **Select the Action:** Search for and select **WhatsApp Notifications** as your action app.

1. 

![](https://docs.nexcess.com/wp-content/uploads/2026/06/WA-1.jpg)

2. **Choose Event:** Select **Send Message** as the action event.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/WA-2.jpg)

3. **Connect Account:** You will be prompted to input the WhatsApp number where you wish to receive notifications. Once you do this, click Continue.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/WA-3.jpg)

4. **Template Selection:** Select the message template you want to use.

- **Note for Free Accounts:** You must map *all* available fields in the template, even those you don’t think you need.
- **Note for Premium Accounts:** If you have a Zapier Premium account, you have the flexibility to edit templates and create fully customized notification messages.

5. **Map Fields:** Align the attendee data (Name, Email, Ticket Type, etc.) from Event Tickets to the corresponding fields in your WhatsApp template.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/WA-4.jpg)

1. 

After mapping the fields, send a test notification to your WhatsApp number. Once confirmed, publish the Zap. You will now receive a real-time WhatsApp message every time a new participant registers for your events.

---

