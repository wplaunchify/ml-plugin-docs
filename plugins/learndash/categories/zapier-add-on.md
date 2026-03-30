# Zapier Add On

*Category from LearnDash documentation*

---

## Zapier Integration

**Source:** [https://learndash.com/support/kb/add-ons/zapier-add-on/zapier/](https://learndash.com/support/kb/add-ons/zapier-add-on/zapier/)

The LearnDash Zapier integration empowers you to automate the learning experience. Using Zapier, you can connect LearnDash with over 1,500 applications, and automatically pass data from LearnDash to another application of your choice.

Data is sent to another app after specific Triggers take place on your LearnDash site. We’ll briefly explain how Zapier works, all of the available Triggers, and walk you through a real-world example from start to finish.

**NOTE**: You need to sign up for a [Zapier account](https://zapier.com/) before you can use this integration. Both free and premium options are available. Note that some Zapier functionality, such as filters, require a paid plan.

## What is a Zap?

A Zap is a connection between two (or more) applications. Zaps consist of one Trigger, followed by one (or several) Actions.

1. **Trigger:** Something occurs in Application 1 to start the process. In this case, Application 1 is LearnDash.
2. Data from Application 1 is sent to Zapier
3. **Filter:** Modify the data in one, or several, ways *(optional, requires premium account)*
4. **Action:** Some, or all, of the data is then sent to Application 2

## Sign Up for a Zapier Account

1. Go to [zapier.com](https://zapier.com/) and click the “Sign Up” button at the top
2. Follow the prompts to create your account

Keep your account open in your browser, as we’ll come back to it shortly.

## Install the Zapier Integration

### Option 1: Add-ons Menu (requires an active LearnDash license)

1. In your WordPress admin area, navigate to LearnDash LMS > Add-Ons
2. Locate the Zapier for LearnDash add-on
3. Click Install Now
4. Click the Activate Plugin button

![LearnDash Zapier add-on plugin card](https://learndash.com/support/wp-content/uploads/2019/03/learndash-zapier-add-on-plugin-card.jpg)

### Option 2: Manual Upload

1. [Download the plugin file](https://account.learndash.com/plugins/) (must be [l](https://support.learndash.com/)[ogged in](https://account.learndash.com/) to download)
2. In WordPress, navigate to Plugins > Add New
3. Click Upload Plugin
4. Browse for the
```
.zip
```

 file you downloaded in Step 1
5. Click Install Now
6. Click Activate Plugin

## Supported Triggers & Actions

As of version 2.0 of the LearnDash Zapier integration, we support the following triggers and actions. Over time, we will look to expand upon these based on feedback.

### Triggers

- Enrolled into course
- Enrolled into a group
- Group completed
- Course completed
- Lesson completed
- Topic completed
- Quiz Taken
- Quiz completed
- Essay submitted

### Actions

- Add user to a course
- Remove user from a course
- Add user to a LearnDash Group
- Remove user from a LearnDash Group

Now it’s time to set up a new zap.

## The Trigger: When This Happens…

1. Login to your [zapier.com](https://zapier.com/) account
2. Click the **Make a Zap!** button in the top-right corner

!["Make a Zap" button on zapier.com](https://learndash.com/support/wp-content/uploads/2019/03/zapier-make-a-zap-button.jpg)“Make a Zap” button on zapier.com

1. Give your Zap a name (for internal use only)

![Type a name for your zap](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-name-zap-animation-min.gif)Type a name for your zap

1. Under Choose App & Event, search for “learndash” and click on the LearnDash app that appears

![Select the "LearnDash" app from the list](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-choose-app-event-learndash.jpg)

1. Under Choose Trigger Event, select one of the triggers from the list, and then click Continue

![Selecting a LearnDash trigger in Zapier](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-choose-trigger-event-animation-min.gif)

1. Click the **Sign in to LearnDash** button

![Sign in to LearnDash button in Zapier](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-sign-in-to-learndash-button.jpg)

1. A popup window will appear, asking you for your site’s URL and an API key
2. Head back to your WordPress dashboard and go to LearnDash LMS > Zapier > Settings, and copy your API key

![Copy Zapier API key in LearnDash settings](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-copy-api-key.jpg)

## The Action: Do This…

1. Go back to the Zapier popup window to enter your site URL and the API key you just copied. Click **Yes, Continue**.

**NOTE:** When entering your site URL, be sure to include the final forward-slash (
```
/
```

) at the end.

![Zapier site URL & API key screen](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-site-url-api-key-screen.jpg)

.kadence-column734_70e783-bc > .kt-inside-inner-col,.kadence-column734_70e783-bc > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column734_70e783-bc > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column734_70e783-bc > .kt-inside-inner-col{flex-direction:column;}.kadence-column734_70e783-bc > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column734_70e783-bc > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column734_70e783-bc{position:relative;}@media all and (max-width: 1024px){.kadence-column734_70e783-bc > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column734_70e783-bc > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
1. Click the large **Continue** button to move onto the next step.

.kadence-column734_95bc0a-c3 > .kt-inside-inner-col,.kadence-column734_95bc0a-c3 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column734_95bc0a-c3 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column734_95bc0a-c3 > .kt-inside-inner-col{flex-direction:column;}.kadence-column734_95bc0a-c3 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column734_95bc0a-c3 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column734_95bc0a-c3{position:relative;}@media all and (max-width: 1024px){.kadence-column734_95bc0a-c3 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column734_95bc0a-c3 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
![](https://learndash.com/support/wp-content/uploads/2019/03/zapier-2-continue-to-step-2.jpg)

.kadence-column734_804d50-af > .kt-inside-inner-col,.kadence-column734_804d50-af > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column734_804d50-af > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column734_804d50-af > .kt-inside-inner-col{flex-direction:column;}.kadence-column734_804d50-af > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column734_804d50-af > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column734_804d50-af{position:relative;}@media all and (max-width: 1024px){.kadence-column734_804d50-af > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column734_804d50-af > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
1. You have three options when it comes to testing your connection and your site’s associated data:

- Skip the test
- Test and review the results
- Test and continue setting up your Zap
![Choose whether or not to test your connection](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-test-learndash-site-connection-800x156.jpg)
- If you test and review, you’ll see an example of your data, based on the trigger event you chose.

1. If your connection has been set up properly, you’ll see a green checkmark next to the trigger.
![Green checkmark indicating successful data connection](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-successful-data-connection-learndash-800x188.jpg)

.kadence-column734_ca1e1f-9c > .kt-inside-inner-col,.kadence-column734_ca1e1f-9c > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column734_ca1e1f-9c > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column734_ca1e1f-9c > .kt-inside-inner-col{flex-direction:column;}.kadence-column734_ca1e1f-9c > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column734_ca1e1f-9c > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column734_ca1e1f-9c{position:relative;}@media all and (max-width: 1024px){.kadence-column734_ca1e1f-9c > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column734_ca1e1f-9c > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
**NOTE:** When entering your site URL, be sure to include the final forward-slash (
```
/
```

) at the end.

1. Click on the **2. Do this …** heading
2. Search for and choose an app from the list
![Choose an app to "do this" with (the action)](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-do-this-choose-app-800x440.jpg)
3. In the **Choose Action Event** dropdown, search for and select an action.
**NOTE:** The actions will vary based on which app you choose.
![Choose an action event for Mailchimp](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-choose-action-event-mailchimp-800x301.jpg)
4. Click Continue
5. You’ll now be asked to sign into your Mailchimp account (or connect to whatever app you chose in step 2 above).
![Connect to Mailchimp in Zapier](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-connect-with-mailchimp-800x389.jpg)
6. Follow the instructions in the popup to login & authorize access to your account.
**NOTE:** This will look different depending on the app you choose to connect with.
![Connecting Zapier to Mailchimp, the login popup window](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-mailchimp-login-popup-400x382.jpg)
7. You should see your connection listed in the dropdown box. Then click the**Continue** button.
![Mailchimp successfully connected. Click continue.](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-mailchimp-connected-continue-button-800x417.jpg)
8. You’ll then be asked to customize the details that will be sent to Mailchimp (or whatever app you choose). This will vary greatly, depending on the app. Here’s an example of the Mailchimp fields:
![Customize subscriber details from Zapier to Mailchimp](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-mailchimp-customize-subscriber-details-800x603.jpg)
9. Fill in all the required fields to take the appropriate action(s) you want to take.
**NOTE:** If you’re sending an email address from LearnDash to another application, be sure to use the dynamic **User Data User Email** field. **Do not** type an email address in the email field.
![Use the dynamic email field in Zapier](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-mailchimp-subscriber-email-example-800x347.jpg)
10. When you’re finished filling in all the fields, click **Continue**.
11. Once again, you have 3 options for testing the data:
- skip the test
- test & review the data
- test & continue with the zap
![Test data for the final action step in Zapier](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-test-data-for-final-action-step-800x495.jpg)
12. If your test is successful, you’ll see a message like this:
![Mailchimp action test successful message](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-action-step-test-successful-800x177.jpg)
You can also check your Mailchimp account and you will see a test subscriber has been added to the audience list you chose.
13. Then click **Done Editing** to finish up your zap.
14. Finally, make sure you turn your zap on. You should see a toggle at the very bottom of the screen. Click the switch to turn it from OFF to ON.
![Toggle zap from off to on](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-turn-zap-on-toggle.gif)
15. The message will disappear and you should see a green ON switch in the top-right corner. Your zap should start to work immediately.
![Zapier's toggle switch turned to ON](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-toggle-switch-on.jpg)

## LearnDash Zaps vs. Webhook Zaps

Any zaps you set up using the older method (webhooks) will continue to work, but we recommend using the official LearnDash app in Zapier moving forward. If you need to distinguish between the two types in your Zapier account, just look at the icon used for the trigger. Old zaps will have red/orange webhook symbol while using the newer method will have the blue “LD” icon.

![LearnDash old method vs. new method of Zapier connection](https://learndash.com/support/wp-content/uploads/2019/11/zapier-2-new-method-vs-old-method.jpg)

## Legacy Zapier Setup (v1.x)

**IMPORTANT:** This is the old way to connect LearnDash to Zapier prior to Version 2.0 of the Zapier add-on. **We do not recommend this method**.

Before we set up any connections in LearnDash, we need to start creating our Zap on the Zapier website.

### Create a Trigger

!["Make a Zap" button on zapier.com](https://learndash.com/support/wp-content/uploads/2019/03/zapier-make-a-zap-button-800x115.jpg)

1. Navigate to [zapier.com](https://zapier.com/)
2. Click the Make a Zap! button in the top-right corner
3. Give your Zap a name (for internal use only)
4. **Choose a Trigger App:** Select  Webhooks
5. Choose the Catch Hook option
6. Click Save**+**Continue

![Creating a trigger in Zapier](https://learndash.com/support/wp-content/uploads/2019/03/zapier-create-trigger-animation.gif)

Copy the Webhook URL to your clipboard. You’ll need it in just a second.

![Zapier Webhook URL, copy to clipboard](https://learndash.com/support/wp-content/uploads/2019/03/zapier-test-trigger-webhook-url.jpg)

### Set Up the Zap in LearnDash

![Set up a Zap in LearnDash](https://learndash.com/support/wp-content/uploads/2019/03/learndash-zapier-create-trigger-animation.gif)

1. Navigate to LearnDash LMS > Zapier
2. Click **Add Trigger**
3. Give your Trigger a name (internal use only)
4. **Trigger Event:** Choose  Enrolled into course
5. **Trigger Course:** Choose a specific course, or leave it set to All Courses
6. **Webhook URL:**  Paste the Webhook URL you copied from Zapier
7. Click **Publish**

**NOTE**: You can choose any of the available Trigger Events from the list. We’re just using  Enrolled into course  for this example.

#### Available LearnDash Event Triggers

You may use any of the following events to initiate an Action step in Zapier:

- User enrolls into a course
- User completes a course
- User completes a lesson
- User completes a topic
- User completes a quiz
- User passes a quiz
- User fails a quiz
- User submits an essay

Zapier also works with WooCommerce, and there are [several WooCommerce Triggers available](https://zapier.com/apps/woocommerce/integrations) as well.

### Send Test Data to Zapier

In order for Zapier to know what data to send to Mailchimp, we need to create a test user, and perform the action of enrolling that user into a course.

**NOTE**: The action that you need to perform on your LearnDash site will depend on the  Trigger Event  that you choose. Whatever event you choose, be sure to perform that specific action.

#### Create a Test Course

Let’s create a simple test course that we can enroll in. You can delete this course after you’ve used it to set up the Zapier integration.

1. Navigate to LearnDash LMS > Courses
2. Click Add New
3. Give your course a title
4. On the Settings tab, set the Access Mode to Free
5. Click Publish

We don’t need to add any lessons or other content. We just need a course that we can easily enroll in.

#### Create a Test User

Now we need a user to enroll in our test course. Since administrators are automatically enrolled in all courses, let’s create a test user. Again, you can delete this test user after you’re finished the setup.

1. Navigate to Users > Add New
2. Fill out the required information
3. Role should be set to Subscriber
4. Click Add New User

Now you’ll need to either logout of your WordPress administrator account or use a private browsing session to **login as this new test user.**

#### Perform the Test Action

1. Navigate to the course page of the test course you just created
2. Click the  Take this Course  button

Now that you are enrolled in the course, you have sent Zapier the information it needs to be able to communicate with Mailchimp.

#### Finalize the Trigger

You just need to confirm with Zapier that it has the correct information.

1. Navigate back to your Zapier account
2. Click the **OK, I did this** button
3. Under **Pick A Sample To Set Up Your Zap**, you should have one example. Select it.

**TIP:** Click the dropdown arrow to reveal the information that Zapier collected about the course & the user. This will confirm that you have the info you need.

1. Click Continue

![Zapier test hook, check information](https://learndash.com/support/wp-content/uploads/2019/03/zapier-test-trigger-select-hook-animation.gif)

.kadence-column734_ca5993-77 > .kt-inside-inner-col,.kadence-column734_ca5993-77 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column734_ca5993-77 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column734_ca5993-77 > .kt-inside-inner-col{flex-direction:column;}.kadence-column734_ca5993-77 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column734_ca5993-77 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column734_ca5993-77{position:relative;}@media all and (max-width: 1024px){.kadence-column734_ca5993-77 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column734_ca5993-77 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}

### Create an Action Step

Now it’s time to tell our Zap what to do once the Trigger has been fired.

![Zapier, create an action, step 1](https://learndash.com/support/wp-content/uploads/2019/03/zapier-select-action-animation-1.gif)Part 1 of creating your Action step

![Zapier, creating an action step, part 2](https://learndash.com/support/wp-content/uploads/2019/03/zapier-select-action-animation-2.gif)Part 2 of creating your Action step

1. If you’re not automatically sent to the  Choose an Action App  screen, click the **+**Add a Step button
2. Click on Action/Search
3. Type “mailchimp” into the search bar, and click on  Mailchimp  when you see it appear
4. **Select Mailchimp Action:** Choose  Add/Update Subscriber
5. Click the **Connect an Account** button. A new window will ask you to sign into your Mailchimp account.
6. Make sure your account is selected, then click Save **+** Continue
7. **Audience** (formerly Lists): Choose the audience in which you’d like to add the new subscriber to
8. **Subscriber Email:** Type “email” to search, and select the option for User[user Email]

**IMPORTANT:** Do not type an actual email address is this field.

1. All other fields are optional, but you may set them up if you’d like
2. Click the Continue button
3. Click the Send Test to Mailchimp button
4. Click Finish
5. Click the toggle to turn on your Zap

## Additional Options

If you have a premium Zapier account, you can add more than 1 Action step. This allows you to filter and reformat a user’s data before adding it to Mailchimp (or another app of your choosing).

Learn more about filtering and advanced options in [Zapier’s help docs](https://help.zapier.com/hc/en-us/articles/8496309697421-Create-Zaps).

## Zap Ideas

Here are just a few ideas for how to use Zapier with LearnDash to better automate your learning experience.

- **Course Enrollment Email List**
When a user enrolls into a course, add them to your email list
- **Course Enrollment CRM**
When a user enrolls into a course, add them to your CRM database
- **Course Enrollment Help Desk Software**
When a user enrolls into a course, create an account for them in your help desk software
- **Quiz Data Spreadsheet**
Keep track of passed and/or failed quizzes by adding them to a spreadsheet (Google Sheets, Microsoft Excel, and others)
- **Completed Lessons/Topics Slack**
Post a message to a Slack channel when users complete lessons/topics
- **Course Completed Email**
Send an email to users and/or admins whenever a course (all courses, or a specific course) is completed
- **Course Completed Tag or Custom Field**
After a user completes a specific course, apply a tag or set a custom field in your CRM
- **WooCommerce Subscription Fails SMS**
If you’re using WooCommerce subscriptions, you can send yourself a text message when a subscription renewal fails

## FAQ

**Can I exclude pre-ordered courses from triggering Enrolled Into Course zaps?**
Yes, you can exclude pre-ordered courses. You’ll want to set the  exclude pre-ordered course(s)  field to “true”.

![Exclude pre-ordered courses](https://learndash.com/support/wp-content/uploads/2019/03/image-20230617-120136.png)

**Will the Enrolled into course Trigger work with course access mode set to Open?**
No. The course access mode cannot be set to Open when using the Enrolled into course Trigger.

**How to Modify Payload Data Before Being Sent to Zapier?**
You can add any additional data such as user meta data, course meta data, etc., to the payload before being sent to Zapier using filter hook 
```
learndash_zapier_api_payload
```

.

Here is an example:

```
add_filter( 'learndash_zapier_api_payload', function( $payload, $subscription, $trigger ) { 
    if ( isset( $payload['user'] ) ) { 
        $payload['user']->custom_data = 'abc123'; 
    } 

    return $payload; 
}, 10, 3 );
```

**I get an authentication error when connecting my LearnDash account to Zapier. What should I do to fix this?**
The authentication error usually comes from a conflict with caching or a security plugin that blocks our URL query endpoint. You can try whitelisting our URL query endpoint at 
```
site.com/?learndash-integration=zapier
```

 in your caching or security plugin settings.

---

