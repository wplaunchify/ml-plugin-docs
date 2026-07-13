# Power Automate

*Category from The Events Calendar documentation*

---

## Automating Events and Tickets with Microsoft Power Automate

**Source:** [https://docs.nexcess.com/software/the-events-calendar/power-automate/](https://docs.nexcess.com/software/the-events-calendar/power-automate/)

Now you can use [Microsoft Power Automate (MSPA)](https://powerautomate.microsoft.com/) to combine [The Events Calendar Pro](https://theeventscalendar.com/products/wordpress-events-calendar/) and [Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/) with many of your favorite third-party apps and tools. MSPA allows you to integrate our plugins by using what they call “flows”. A flow is a workflow that sets up an automation between two different apps.

**Useful Links:**

- [Microsoft Learn](https://learn.microsoft.com/en-us/training/powerplatform/power-automate)
- [List of connectors](https://learn.microsoft.com/en-us/connectors/connector-reference/connector-reference-powerautomate-connectors)
- Go through the first 2 sections of [Get started with Power Automate](https://learn.microsoft.com/en-us/training/modules/get-started-flows/) (18 minutes)
- Take the [Assessment](https://powerautomate.microsoft.com/en-gb/automation-solutions/) to get recommendations of helpful flows

To explain how this works, we’ll be creating an actual automation! In this example, every time you publish an event (trigger), an email will be sent to someone using Gmail.

**Related Articles:**

- [Managing Your Power Automate Endpoints](https://docs.nexcess.com/software/the-events-calendar/power-automate-endpoints/)
- [Triggers, Actions & Data Fields for Power Automate with The Events Calendar](https://docs.nexcess.com/software/the-events-calendar/power-automate-triggers/)

## Creating Flows

- Click on *My Flows*
![](https://docs.nexcess.com/wp-content/uploads/2026/06/powerautomate-my-flows.jpg)
- Click on *+ New flow*
![](https://docs.nexcess.com/wp-content/uploads/2026/06/powerautomate-new-flow.jpg)
- Select *Automated cloud flow*
![](https://docs.nexcess.com/wp-content/uploads/2026/06/powerautomate-automatic-cloud-flow.jpg)

A pop-up will now appear to build your flow:

![](https://lh6.googleusercontent.com/0xcG14Uj0wUvPe93jx9bAjR1mGar0GsniPSrQvYNAgMAWGeMaHvH5_6RzyEXzxlYeQvs8zASFKH7lKHfQqGJFTY4AjRLd3nHvF76kG8h3I4r0qmN9G7APXBs6PTdpZut50m1lsj2k1DtSh0yftaNn-w)

- If you are not an advanced user, click on *Skip* and jump to the next section
- For advanced users:
1. Name your flow (recommended, but not required)
2. Choose your flow’s trigger
- Use the search field to narrow down your selection
- i.e.: When an event is created on your website
3. Click on *Create*

### Choosing a Trigger

1. Click on *Add a trigger*
2. Search for the Connector of the app you want to use as a Trigger (e.g.: The Events Calendar)
3. Click on the desired *Trigger* button

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-4-1024x561-1.jpg)

Your trigger is set.

**Pro tip:** Advanced users can customize the trigger configuration, but its default configuration should be fine.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-5.jpg)

The rest of us should move on and add an action (a.k.a. operation)

- Click on the + icon to Add a New Step

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-7.jpg)

### Choosing An Action

- Choose your flow’s action from your preferred connector
- Use the search field to narrow down your selection
- Example: 

- Enter “*Gmail”*in the search bar

- Select *Send Email* under the Gmail connector

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-8-1024x368-1.jpg)

- Depending on the action and connector selected, it might be necessary to:
- Sign in the desired applications (if not previously done)
- Grant permissions to the desired applications
- Provide more information (e.g.: Location, File, and Table for Excel Online)
- Etc..

### Mapping Dynamic Fields

The trigger and the operation connectors are now linked. But we are not done! We need to teach the action app how to use the trigger app’s data. This needs to be done one field at a time. For a full reference of every available trigger, action, and dynamic field, see [this article](#).

In the action app’s connector (Gmail in this example):

- Review every field available under the *Parameters* tab to see if they require mapping 
- You might need to click on a *Show All* link to see them

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-9.jpg)

- For each field you review:
1. Ask yourself if that field needs to receive information from your trigger (The Events Calendar)
2. When you find a field needing information from your trigger, click on it to select it.
3. Click on the lightning bolt icon that appears to display the available dynamic fields from the trigger

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-10.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-11-1024x519-1.jpg)

1. Repeat this process for every available field until you are satisfied

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-12.jpg)

Okay! You are almost there.

1. Save the Flow
2. Run the Flow checker
3. Take it for a test run

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-14-2.png)

Your flow is ready to go and your process is now automated!

In our example, a chosen email address will receive an email every time you create a new event on your calendar.

**Important:** always keep an eye on new flows #safetyfirst

**Pro Tip:** you can turn the flow on or off at any given point by using the *My Flows*menu on all platforms (online, mobile app, or desktop app)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-15-1024x345-1.jpg)

---

