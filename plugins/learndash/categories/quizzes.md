# Quizzes

*Category from LearnDash documentation*

---

## XML Quiz Import/Export Guide

**Source:** [https://learndash.com/support/kb/core/quizzes/xml-quiz-import-export-guide/](https://learndash.com/support/kb/core/quizzes/xml-quiz-import-export-guide/)

LearnDash lets you import and export quizzes using an XML file, making it easy to move quizzes between sites. This guide walks you through the process step by step.

## How to Export a Quiz Using XML

1. From the WordPress admin dashboard, navigate to **LearnDash LMS > Quizzes**
2. Click on the **Actions** menu in the header.
3. Select **Import/Export**.
4. On the **Quiz Import/Export** page, click the **Export** button.
5. Choose the quiz or quizzes to export.
6. Select **.xml** as the quiz format.
7. Click **Start Export** to proceed.

![](https://learndash.com/support/wp-content/uploads/2025/04/image-1-800x329.png)

## Importing a Quiz Using XML

1. Navigate to **LearnDash LMS > Quizzes**
2. Locate the newly imported quiz
3. Open the quiz to verify all questions and settings
4. Make any necessary adjustments

## Frequently Asked Questions

### Can I import quizzes from another LMS?

This feature is designed specifically for importing and exporting LearnDash quizzes. If you need to import quizzes from another LMS platform, you can use the [LearnDash Migration](https://learndash.com/support/kb/resources/user-guides/learndash-migration/) add-on instead.

### Can I export multiple quizzes at once?

Yes, you can select multiple quizzes for export, and they will be saved together in a single XML file.

## Related Documentation

- [Quizzes](https://learndash.com/support/kb/core/quizzes/quizzes/)
- [Quiz Builder](https://learndash.com/support/kb/core/quizzes/quiz-builder/)
- [Quiz Display & Content Settings](https://learndash.com/support/kb/core/quizzes/quiz-display/)

This guide helps ensure quizzes are imported and exported successfully, without issues.

---

## Quiz Access & Progression

**Source:** [https://learndash.com/support/kb/core/quizzes/quiz-access-progression/](https://learndash.com/support/kb/core/quizzes/quiz-access-progression/)

This article will discuss the various ways you can prevent user access to a quiz, along with how quizzes affect course progression. You can also award certificates, use time limits, set a passing score, limit quiz retakes and more.

**NOTE:** Quiz access and progression settings are set on a quiz-by-quiz basis. They cannot be set globally.

## Quiz Access Settings

Aside from [course progression](https://learndash.com/support/docs/core/courses/course-progression/), there are two main ways you can restrict access to a [LearnDash quiz](https://learndash.com/support/docs/core/quizzes/).

![LearnDash single quiz settings tab](https://learndash.com/support/wp-content/uploads/2019/05/learndash-single-quiz-settings-tab-admin.jpg)

1. Navigate to **LearnDash LMS > Quizzes**
2. Click on the quiz you’d like to edit
3. Click on the **Settings** tab
4. Locate the **Quiz Access Settings**section

**NOTE:** If Shared Course Steps is enabled, the Associated Course and Associated Lesson settings will not appear. Go to the Course Builder to associate a Quiz with a Course.

### Associated Course

You can associate a quiz with a specific course from this setting. The quiz will reflect on that course’s Builder.

1. Next to Associated Course, click inside the drop-down
2. Search for and select the name of the course
3. Click on the course to associate your current quiz with the course

![Associated course selection](https://learndash.com/support/wp-content/uploads/2019/05/Associated-course-selection_3.gif)

Any changes in the association that you make on the course builder on the specific course for this quiz will also reflect the changes here.

### Associated Lesson

In addition to associating the quiz with a course with the above options, you can also associate the quiz with a lesson or topic. The quiz will reflect on the course’s Builder.

1. Next to Associated Lesson, click inside the drop-down
2. Search for and select the name of the lesson or topic.
3. Click on the lesson or topic to associate your current quiz with the course.

![Associated lesson selection](https://learndash.com/support/wp-content/uploads/2019/05/Associated-lesson-selection_1.gif)

Any changes in the association that you make on the course builder on the specific course, lesson, or topic for this quiz will also reflect the changes here.

### Quiz Release Schedule

You can drip-feed your quizzes to your users using this option. You have three choices:

- Immediately – The quiz is made available upon course enrollment.
- Enrollment-based: The quiz will be available X days after the user enrolls in the course.
**NOTE:**If you set “1 Day”, it means 24 hours, not the next day at midnight. Similarly, 2 days is 48 hours, and so on.
- Specific date – The quiz will be available on a specified date.

## Blended Learning

The External Quiz option is applicable when you offer Blended Learning. It is when you teach an online-based curriculum but have a requirement (from either the government or for regulatory reasons) for an in-person exam or classroom-based learning.

Enabling this option gives you the following:

- Ability to mark a quiz as Virtual or In-Person
- Ability to bypass the attendance requirement of a quiz, either Virtual or In-Person
- Ability to mark a student as “attended” in their user profile by an admin or a group leader

### How To Use This Feature?

1. In the quiz settings page, toggle the External Quiz switch to ON.
2. Under Type, select Virtual if the quiz takes place in a virtual setting, e.g., Zoom, or In-Person if the quiz takes place in-person.
3. Under Require Attendance, select Yes if attendance is required or No if it is not required.
- When set to Yes, the student cannot continue to the next course step. This applies only when Course Progression is set to Linear, and the quiz is attached to a lesson with the Require Attendance setting set to Yes on the lesson settings page. The admin or group leader must mark the lesson as complete from the User Profile page in the backend.
- When set to No, attendance is not required to continue in the course. The Skip Event button is available for the student to click to proceed to the next step of the course. This is equivalent to the Mark Complete button.

### Quiz Prerequisites

You can select one or more quizzes as prerequisites for a quiz. The quiz(zes) you choose must be completed prior to starting this quiz.

1. Next to Quiz Prerequisites, click inside the box
2. Search for and select the name of a quiz
3. Click on that quiz to add it as a prerequisite

![Quiz prerequisites selection](https://learndash.com/support/wp-content/uploads/2019/05/Quiz-prerequisites-selection.gif)

If a user tries to access a quiz before completing the prerequisites, they will see a message on the quiz page listing the name(s) of the quiz(s) that must be completed first.

### Registered Users Only

You can also choose to only allow registered users to access the quiz. Simply check the box to enable this setting. Common uses for this setting include:

- If you’re administering a quiz via shortcode on a non-course page
- If you have a quiz on an “Open” course (see [course access modes](https://learndash.com/support/docs/core/courses/course-access/)), but you only want authenticated users to be able to take the quiz

## Quiz Progression & Restriction Settings

These settings discuss various options for quiz passing percentages, awarding certificates, time limits and retakes.

### Passing Score

The passing score represents the score, as a percentage, that the user must attain before the quiz is considered complete. This will prevent the user from moving forward in the course until they have passed the quiz.

This must be a number between 0 and 100.

**TIP:**Set this value to 0 if you want the user to be able to continue the course as soon as the quiz is submitted, regardless of their score.

### Quiz Certificates

If you’d like to award the user a certificate for this quiz, you can choose one here. You need to [create a certificate first](https://learndash.com/support/docs/core/certificates/create-certificate/).

1. Click the “Search or select a certificate…” dropdown
2. Choose a certificate from the list

After you select a certificate, you have the option to choose a score that the user is required to attain in order to be awarded the certificate. This may differ from the passing score above. For example, a user could pass the quiz with an 80% score, but might be required to attain a 90% score to be awarded a certificate.

### Enable Quiz Saving

This option enables the Quiz Saving feature, which lets users save their quizzes to the server so that when they return later, their progress is preserved and they can continue from where they left off.

Once enabled, specify the time interval at which the quiz’s progress will be saved in the “Save Quiz data to the server” box. The user’s quiz progress will be saved automatically within the specified interval.

**Note**: There is currently an issue affecting some users’ ability to interact with LearnDash quizzes, particularly around the “Check Answer” and “Quiz Saving” functionality. The most common cause is the “Save quiz progress” setting having an autosave interval that is too short (e.g., 5 seconds), which can cause incomplete data writes, especially under heavy website traffic.

**What you can expect to see with this issue:****1. The “Check Answer” button not responding
2. Quiz attempts appear locked or unclickable
3. The appearance that quiz answers are saved when they are not

**What can you do to prevent this issue from occurring?**Set your autosave interval to a higher value, between 30 and 60 seconds, to reduce risk on higher-traffic websites.

**Solution**: LearnDash Support can provide a plugin that identifies and removes old metadata, helping to resolve this issue. Please reach out to our support team if you experience this, and we will gladly provide the plugin download and instructions for using it.

### Quiz Retakes

Here you can control the number of quiz retakes that a user can have. Leave this setting disabled to allow unlimited retakes.

To put a limit on the number of retakes allowed:

1. Enable the toggle to Restrict Quiz Retakes
2. Enter the number of retakes allowed next to Number of Retries Allowed
3. You can set the retake limit to apply to all users, only registered users, or only anonymous users
- (Optional) Check the box to use cookies to track retakes for anonymous (non-logged-in) users

If you want to reset the quiz retakes per user:

1. On your WordPress dashboard, navigate to the Users > All Users
2. Click on the user you want to reset the quiz retakes for
3. Remove the desired quiz under the “You have taken the following quizzes:” section.

After doing that, it will reset the quiz attempts for that specific user.

### Question Completion

Enable this setting to require the user to answer all questions. They will not be able to submit the quiz until all questions are answered.

Leave disabled to allow users to submit the quiz without answering all questions. Questions not answered will be marked incorrect.

### Time Limit

![LearnDash quiz time limit example countdown](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-time-limit-frontend-example.gif)

Enable the Time Limit toggle if you’d like to limit the amount of time a user can spend on the quiz. They can only take the quiz during the specified time duration. The quiz will be automatically submitted after your specified amount of time.

Next to Automatically Submit After, enter a time in the format HH:MM:SS (hours, minutes, seconds). Here’s an example of a 1 hour, 30 minute time limit.

![1 hour, 30 minute quiz time limit example setup](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-time-limit-example-setup.jpg)

Leave this setting disabled for the user to have an unlimited amount of time to complete the quiz.

---

## Quiz AI Builder

**Source:** [https://learndash.com/support/kb/core/quizzes/quiz-ai-builder/](https://learndash.com/support/kb/core/quizzes/quiz-ai-builder/)

Similar to our[Course Outline Builder](https://learndash.com/support/docs/core/courses/course-outline-builder/), utilize the latest in AI technology to create your quiz questions and answers.

![](https://learndash.com/support/wp-content/uploads/2023/08/learndash-quiz-ai-builder.png)

This guide will walk you through the process of creating a quiz using the new feature.

**NOTE**: **An Open API Key is Required** – You can get an API key from: [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys). If you do not already have an account you can sign up for an account on the OpenAI website. A credit card will be required when setting up your Open AI account.

## Creating a Quiz

Creating a quiz is relatively easy. Note that you’ll already need a course setup as the AI uses the course content to build the quiz questions and answers.

**NOTE:** The LearnDash Quiz Builder option (found at **LearnDash LMS > Quizzes > Settings**) must be enabled when using the Quiz Builder AI.

Follow the steps below:

1. The first step is to verify that the Quiz Builder option is enabled at **LearnDash LMS > Quizzes > Settings**. It must be enabled for the AI Builder to appear
2. Navigate to your WordPress admin dashboard
3. Navigate to **LearnDash LMS > Quizzes** and click the **Create Quiz** **from AI** button at the top right
4. Under Associated Course enter the name of the Course you want to add the quiz to
5. (Optional) You can also associate the quiz with either a lesson or a topic within the above course using the Associated Lesson/Topic inputs
6. Select either an existing quiz to add questions to or create a new one
7. Select the question types you’d like to use in the quiz, you can select multiple question types by holding either **Ctrl**or **Shift**while selecting the different types
8. Set the number of questions you’d like to generate for each question type selected in the quiz. Note that if you have 2 question types selected and set this number to 6, you will have12 questions in total
9. Write a quick description of the quiz. This helps the AI generate appropriate questions and answers. An example description could be: “*How to make money selling an online course using LearnDash*“
10. Click the **Create Questions** button

At this point, the quiz will generate the questions and answers. If successful, you will see a confirmation message at the top of the pageupon completion.

## FAQs for the Quiz AI Builder

**Is the Quiz AI Builder free?** No. The builder uses the OpenAI platform to generate the content. You’ll need to sign up for an account at [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys) and buy credits to use. Once you have your credits, enter your OpenAI key in LearnDash LMS by navigating to **Settings > Advanced > AI Integrations**, if you haven’t already done this. **Can I edit or delete the questions after they are generated?** Yes! You can update or delete any of the AI-generated questions. **Can I add questions to an existing Quiz?** Yes! When entering the Quiz Title, you would simply select the existing Quiz. **Is there a limit to the number of questions I can generate at once?** While in theory, you can generate any number of questions/answers. The OpenAI API has limits on the number of tokens that can be returned. Tokens are what make up words in the world of OpenAI. If you run into an issue where you aren’t seeing any questions or answers being generated, try decreasing the overall number of questions you are trying to add.

---

## Manage & Grade Essays

**Source:** [https://learndash.com/support/kb/core/quizzes/essays/](https://learndash.com/support/kb/core/quizzes/essays/)

This article will show you how to manage, grade, download and comment on submitted essays. To learn more about setting up essays within a quiz, please read our article on the [Essay Question Type](https://learndash.com/support/docs/core/quizzes/questions/#essay_open_answer).

## Accessing Submitted Essays

1. Navigate to LearnDash LMS > Quizzes
2. Click on the “Submitted Essay”s tab

![LearnDash submitted essays tab in admin](https://learndash.com/support/wp-content/uploads/2019/05/learndash-admin-submitted-essays-tab.jpg)

This page will list all essays that have been submitted by all users, for all quizzes.

## Filter Essays

You can filter the Submitted Essays list in a few ways:

1. Choose between Graded and Not Graded (shown in pink)
2. Filter by the course, lesson or quiz that the essay is associated with (shown in blue)
1. Choose option(s) from the dropdown menus
2. Click the Filter button

![How to filter LearnDash submitted essays](https://learndash.com/support/wp-content/uploads/2019/05/learndash-essays-screen-filter-options.jpg)

## Grading & Awarding Points

There are two ways to grade essays and award points.

### From the Listing Screen

This is the quick and easy way to grade an essay.

1. From the Submitted Essays listing screen…
2. Enter the number of points you’d like to award
3. Click the Approve button

![Grade a LearnDash essay from listing screen](https://learndash.com/support/wp-content/uploads/2019/05/learndash-essay-grade-list-screen-animation.gif)

The page will reload and you’ll see the status change from “Not Graded” to “Graded,” and the appropriate points will be displayed.

No further adjustments can be made from the listing screen, meaning, you can no longer change the grade from here, but you can open each individual essay if you need to make any changes.

### Individual Essay

![Grade LearnDash essay on individual page in admin](https://learndash.com/support/wp-content/uploads/2019/05/learndash-essay-grade-individually-admin.jpg)

This method is a little more time intensive, but provides more flexibility. You can change an essay from “Graded” to “Not Graded,” as well as adjust the points awarded.

1. From the Submitted Essays listing screen…
2. Click on an essay title to edit it
3. Find the Essay Grading Status section in the sidebar
4. Update the essay status (Graded or Not Graded)
5. Update the points awarded
6. Click the Update button to save your changes

If you previously set the grading of the essay to Not Graded, No Points Awarded, then the status and grade of the quiz will no longer be in Pending status after you award points and indicate that the essay is graded.

If the user did not meet the passing threshold prior to grading, but after the grading of the essay they meet the threshold, then they will be permitted to continue with the course.

## Download an Essay File

If you chose the Upload essay type, your submitted essay will include the file that the user uploaded.

1. From the individual essay screen…
2. Scroll down to the Essay Upload section
3. Click on the file to download it

![LearnDash essay, download file in admin](https://learndash.com/support/wp-content/uploads/2019/05/learndash-essay-download-essay-file-admin.jpg)

## Commenting on Essays

By default, all submitted essays actually have their own page. You can access that page by clicking on the permalink at the top of the individual essay screen in the WordPress admin.

![LearnDash essay permalink in admin](https://learndash.com/support/wp-content/uploads/2019/05/learndash-essay-permalink-admin.jpg)

As an admin, if you’d like to leave a comment for the user:

1. Make sure Allow Comments is checked in the Discussion section
2. In the Comments section, click the Add Comment button
3. Type your comment
4. Click the Add Comment button to save your comment

![Add comments to LearnDash essays in admin](https://learndash.com/support/wp-content/uploads/2019/05/learndash-essays-add-comment-admin.jpg)

Your comment will now appear on the essay page mentioned above.

**NOTE**: The design and layout of the essay page is managed by your [WordPress theme](https://learndash.com/support/docs/getting-started/themes/). Please check with your theme to see the options to customize this page.

---

## Quiz Email Notifications

**Source:** [https://learndash.com/support/kb/core/quizzes/quiz-email-notifications/](https://learndash.com/support/kb/core/quizzes/quiz-email-notifications/)

[LearnDash quizzes](https://learndash.com/support/docs/core/quizzes/) allow both users and administrators to receive email notifications when a quiz is completed. This article will explain how to set up quiz notifications, and the options available.

## Quiz Email Settings

The quiz email settings are where you configure the following settings:

- **From Name:** The sender’s name. Typically, this is your company or website name.
- **From Email Address:** The sender’s email address. This will default to the admin email address listed in Settings > General.
- **Subject:** The email subject line
- **Message:** The contents of the email. Images and custom HTML are supported.
- **Mail To** (for admin notifications only): The recipients of the email. Separate multiple email addresses with commas.

If you insert media or use any HTML in your message, please enable the Allow HTML setting.

![](https://learndash.com/support/wp-content/uploads/2019/05/quiz-email-settings-admin-notifications2.png)

### Access Email Settings

1. Navigate to LearnDash LMS > Quizzes
2. Click on the Settings tab
3. Scroll down to the Quiz Email Settings section

This section is split into two groups:

- **Admin Notifications:** Sent to the admin, [group leader](https://learndash.com/support/docs/users-groups/groups/#assigning_a_group_leader) or other supervisors when a user completes a quiz. You must enable Admin Notification on a per quiz basis.
- **User Notifications:** Sent to the user when a quiz is completed. You must enable User Notification on a per quiz basis.

### Supported Variables

You can use custom variables in your email message. These are dynamic values that change depending on the specific quiz in which the email is being sent for. You can use the following variables in your message:

- ```
$userId
```

 – User ID
- ```
$username
```

– Username
- ```
$userlogin
```

 – User login name
- ```
$quizname
```

 – Quiz title
- ```
$result
```

 – Quiz result (listed as a percentage)
- ```
$points
```

 – Awarded points
- ```
$categories
```

 – Category overview

## Enable Quiz Notifications

In addition to the global settings above, you need to enable the notifications to be sent. This is done on a quiz-by-quiz basis. It canno**t** be set globally for all quizzes.

![How to enable quiz email notifications in admin](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-enable-email-notifications-admin.jpg)

1. Navigate to LearnDash LMS > Quizzes
2. Click on the quiz you’d like to enable notifications for
3. Click on the Settings tab
4. Scroll down to the Administrative and Data Handling Settings section
5. Enable the Email Notifications toggle
6. **Admin:** Enable the toggle to send admin notifications. You can choose to receive notifications when All Users complete the quiz, or Registered Users Only.
7. **User:** Enable the toggle to send user notifications

**NOTE**: If you’re not receiving emails or having other deliverability issues, please read [this section about email deliverability](https://learndash.com/support/docs/add-ons/notifications/#email_deliverability).

---

## Quiz Leaderboard

**Source:** [https://learndash.com/support/kb/core/quizzes/quiz-leaderboard/](https://learndash.com/support/kb/core/quizzes/quiz-leaderboard/)

The **LearnDash Quiz Leaderboard** feature allows quiz scores to be displayed publicly, so students can see how they rank among others. This friendly competition can help boost engagement and motivation to improve performance.

## Before You Begin

- The leaderboard is enabled **individually per quiz**
- To protect against spam, enabling **CAPTCHA** is recommended (see below)

## How to Enable the Leaderboard

To activate the leaderboard for a specific quiz:

1. Navigate to **LearnDash LMS > Quizzes**
2. Click on a quiz to edit
3. Select the **Settings** tab
4. Scroll to the **Administrative and Data Handling Settings** section
5. Toggle on the **Leaderboard** option

## Leaderboard Settings

Once the leaderboard is enabled, several customization options become available.

### Who Can Apply?

Choose which users can appear on the leaderboard:

- **All Users** – Anyone who completes the quiz
- **Registered Users Only** – Only logged-in users are included
- **Anonymous Users Only** – For open-access quizzes ⚠️ Anonymous users must enter a name and email to appear on the leaderboard.

### Multiple Applications Per User

Allow students to submit multiple scores:

- Enable this option only if **Number of Retries Allowed** is greater than one
- Set a **waiting period (in minutes)** between leaderboard submissions

### Automatic User Entry

- Enable to submit scores automatically after quiz completion
- Disable to require students to **click a button** to submit their score

### Number of Displayed Entries

- Set how many leaderboard entries are visible (e.g., top 5, top 10, etc.)

### Sort List By

Choose how leaderboard entries are sorted:

- **Best User (Top Score)**
- **Newest Entry**
- **Oldest Entry**

### Display on Quiz Results Page

Choose how the leaderboard appears after the quiz is completed:

- **Below the Result Text** – Automatically displayed beneath the results
- **In a Button** – A “Show Leaderboard” button is shown; students click to reveal it

## Adding the Leaderboard to a Page or Post

To show the leaderboard outside the quiz results page:

1. Navigate to **LearnDash LMS > Quizzes**
2. Locate the quiz and copy the shortcode from the **Shortcode** column
- Example: 
```
[LDAdvQuiz_toplist 27]
```
3. Paste the shortcode into the content area of any WordPress page or post

## Preventing Spam with CAPTCHA

To protect leaderboard submissions, LearnDash supports CAPTCHA verification.

### How to Enable CAPTCHA

1. Install the **Really Simple CAPTCHA** plugin (available in the WordPress plugin directory)
2. Once installed, CAPTCHA will appear on the leaderboard submission form
3. This ensures that only real users can submit scores

**Note:** CAPTCHA is especially useful when anonymous submissions are allowed.

## What the Student Sees

After completing a quiz:

- Students will either see the leaderboard immediately or have the option to **click a button** to view it, depending on settings
- Anonymous users will be prompted to enter a name and email (if allowed)

![LearnDash quiz leaderboard, frontend example](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-leaderboard-frontend-example.jpg)

## Including Admins in the Leaderboard

By default, users with the **Administrator** role are excluded from quiz reporting and leaderboard rankings.

To include administrators:

1. Navigate to **LearnDash LMS > Settings**
2. On the **General** tab, scroll to **Admin User Settings**
3. Toggle on the **Include in Reports** option

![Admin user settings on LearnDash back end](https://learndash.com/support/wp-content/uploads/2019/05/admin-user-settings_1.jpg)

## Next Steps

Ready to boost learner engagement with a competitive edge? After enabling the leaderboard:

- Review [Quiz Display and Content Settings](https://learndash.com/support/kb/core/quizzes/quiz-display/) to fine-tune grading, retries, and result displays
- Explore [Using Question Categories](https://learndash.com/support/kb/core/questions/questions/#question-categories) to diversify and randomize quiz content
- Want to highlight top performers elsewhere? Use the shortcode to display the leaderboard on a course homepage or sidebar

Leaderboards are a great way to gamify learning and recognize high achievers, just be sure to set the right privacy and entry rules for your audience.

---

## Quiz Custom Fields

**Source:** [https://learndash.com/support/kb/core/quizzes/quiz-custom-fields/](https://learndash.com/support/kb/core/quizzes/quiz-custom-fields/)

**Quiz Custom Fields** allow course creators to collect additional information from learners, either before the quiz begins or just before it ends. These fields are useful for gathering feedback, capturing learner details, or asking custom questions relevant to the course.

**NOTE**: Custom fields are configured on a **per-quiz** basis. There is no option to set them globally for all quizzes.

## Enabling Quiz Custom Fields

To turn on Custom Fields for a quiz:

1. Go to **LearnDash LMS > Quizzes**.
2. Click on the quiz to edit.
3. Open the **Settings** tab.
4. Scroll to the **Administrative and Data Handling Settings** section.
5. Toggle **Custom Fields** to **ON**.

![LearnDash quiz custom fields admin setup](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-custom-fields-admin-setup.jpg)

## Choosing the Display Position

Custom Fields can appear in one of two places:

- **At the start of the quiz**
Shown below any quiz description and **above** the **Start Quiz** button.
- **At the end of the quiz**
Shown **before** the **Finish Quiz** button, after all questions are answered.

Choose the position that best suits the goal of your custom questions.

![Quiz custom field collection before a quiz](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-custom-field-collection-before.jpg)

**NOTE**: If you choose this option, the “Autostart” setting in your [quiz display settings](https://learndash.com/support/docs/core/quizzes/quiz-display/#autostart) is ignored, and a “Start Quiz” button will always be displayed.

## Setting up Custom Fields

![How to use LearnDash quiz custom fields, an animation](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-custom-field-add-move-remove-animation.gif)

## Setting Up Custom Fields

Once Custom Fields are enabled, follow these steps to add and configure them:

1. Click **Add Field**.
2. Complete the field settings:

### Field Name

The label that appears to learners (e.g., “What did you think of this quiz?”).

### Field Type

Choose the type of input:

- **Text** – Single-line text
- **Textarea** – Multi-line text
- **Checkbox** – Multiple selections
- **Drop-Down Menu** – One selection from a list
- **Radio** – One selection, displayed as buttons
- **Number** – Numeric input only
- **Email** – Valid email address required
- **Yes/No** – Simple yes/no choice
- **Date** – Month, day, and year dropdowns

**Tip:** For **Checkbox**, **Radio**, or **Drop-Down**, click **Edit List** to add your custom options.

![Edit a list in a LearnDash quiz custom field](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-custom-field-edit-list-animation.gif)

## Optional Field Settings

- **Required**
Toggle ON to make the field mandatory. Learners must complete it before continuing.
- **Reorder Fields**
Hover over the six dots beside the field name and drag to change the order.
- **Delete Field**
Hover over the row and click **Remove** to delete a field.

## Custom Fields Data Storage

Learner responses to custom fields are saved with quiz results. These can be accessed in two places:

- [LearnDash Profile Block or Shortcode](https://learndash.com/support/kb/core/getting-started-with-learndash/shortcodes-blocks/#h-learndash-profile)
Custom field data appears alongside quiz statistics in the profile block or using the 
```
[ld_profile]
```

 shortcode.
- **WordPress Admin Dashboard**
Visit a user’s profile and click **Statistics** to view their quiz data.

**Note:** The **Quiz Statistics** option must be enabled in the quiz settings to store custom field data.

## Next Steps

Quiz Custom Fields can be a valuable tool for:

- Collecting course feedback
- Asking follow-up questions
- Capturing learner details before final quiz submission

For more quiz customization options, see the [Quiz Builder](https://learndash.com/support/kb/core/quizzes/quiz-builder/) tutorial.

---

## Quiz Results Display

**Source:** [https://learndash.com/support/kb/core/quizzes/quiz-results/](https://learndash.com/support/kb/core/quizzes/quiz-results/)

The quiz results page is where users land immediately after they finish a quiz. There are quite a few elements on this page, and you can control which ones to display.

- Compare the user’s score to the average score for the quiz
- Mark correct and incorrect answers
- Display custom feedback messages
- Display overall score, score by category, 
```
X
```

 of 
```
Y
```

 answers correct, time spent and more

## How to Access Settings

![How to access LearnDash quiz display settings](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-results-page-display-settings-admin.jpg)

1. Navigate to LearnDash LMS > Quizzes
2. Click on the quiz youd like to edit
3. Click on the Settings tab
4. Locate the Results Page Display section

**NOTE**: Quiz results page display settings are set on a quiz-by-quiz basis. They cannot be set globally.

Heres an example of most of the available options. Well cover them all below.

![LearnDash quiz results page settings & options](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-results-page-display-settings-options.jpg)

## Quiz Result Message(s)

This feature, sometimes referred to as graduation levels, allows you to display a custom message to the user on the quiz results page.

- Choose to show just one, universal message to everyone
- Show different messages, based on the score the user received on the quiz
- Add as many levels as you’d like (technically, the maximum is 100)
- For each level, set a minimum score (%) that must be attained in order for the user to see the message

![LearnDash quiz result messages, admin setup](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-result-messages-graduation-setup-admin.jpg)

**To display a quiz result message(s):**

1. Enable the Result Message(s) setting
2. If you want to show the same message to everyone, just enter a message in the first box, and that’s it

Now let’s use a different example with multiple messages:

- Display a “please try again” message to users who score between 
```
0
```

 and 
```
80%
```
- Display a “you passed” message to users who score between 
```
81%
```

 and 
```
89%
```
- Display a “you earned a certificate” message to users who score between 
```
90
```

 and 
```
100%
```

After enabling the Result Message(s) setting:

1. Enter your message for the 
```
0
```

 to 
```
80%
```

 group in the first box
2. Click the**+**Add graduation link at the bottom of the box
3. Enter 
```
81
```

 in the “From ___ % score, display this message:” box
4. Add your message for the 
```
81%
```

 to 
```
89%
```

 group
5. Click the**+**Add graduation link at the bottom of the box
6. Enter 
```
90
```

 in the “From ___ % score, display this message:” box
7. Add your message for the 
```
90%
```

 to 
```
100%
```

 group

Now you have 3 separate messages set up. Every single user will receive a message, but the message will be customized based on their score.

## Restart Quiz Button

Enable this setting to show a Restart Quiz button on the results page, after a user finishes a quiz.

## Custom Results Display

There are several aspects of the quiz results page that you can customize. Choose to show or hide any of the following elements:

![LearnDash quiz results page, frontend example labeled](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-results-page-frontend-labeled.jpg)

- **Average Score:** Displays a bar graph with Your score compared to the Average score of all users who have taken this quiz
- **Category Score:** Displays the score (in percentage) broken down by [question category](https://learndash.com/support/docs/core/quizzes/questions/#question_categories)
- **Overall Score:** Displays the number of points earned, possible points available and percentage score. If [essays](https://learndash.com/support/docs/core/quizzes/essays/) still need to be graded, a message will be shown in this area as well.
- **Number of Correct Answers:** Displays the number of questions answered correctly, out of the total number of questions
- **Time Spent:** Displays the time it took the user to complete the quiz

**NOTE**: If you leave the **Custom Results Display** setting turned off, all elements will be shown.

## Custom Answer Feedback

When enabling custom answer feedback, you can decide what type of feedback to provide to the user at the end of a quiz. Some examples include:

- Only display a final score (hide all questions)
- Show the user which answers were correct and incorrect
- Display a custom message beneath each question

Please familiarize yourself with the following elements. We’ll discuss them below.

![LearnDash quiz results, correct/incorrect marks & messages labeled](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-results-correct-incorrect-marks-frontend-labeled.jpg)

### Correct / Incorrect Messages

Correct or incorrect messages can be shown beneath each quiz question.

- If the answer is correct, the word “Correct” will appear at the top of the message
- If the answer is incorrect, the word “Incorrect” will appear at the top of the message
- Beneath either “Correct” or “Incorrect,” you may add a custom message for each question
- Choose to show one message for correct, and a different one for incorrect, OR
- Choose to display the same message, regardless of correct/incorrect

#### Configure Messages

If you want to display correct/incorrect messages after each question, you need to set them up first.

![LearnDash quiz messages, set up in admin](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-correct-message-setup-admin.jpg)

1. Navigate to LearnDash LMS > Questions
2. Click on the question you’d like to add a message for
3. Scroll down to the “Message with the correct answer” section
4. *(Optional)* Check the “Same text fo**r…**” box if you’d like to only show one message, regardless of correct/incorrect
5. Enter your message in the editor. Images and other HTML are supported.
6. *(Optional)* If you left the box unchecked in step 4, enter a different message for when the user gets the question incorrect

All of this is also available right from within the [quiz builder](https://learndash.com/support/docs/core/quizzes/quiz-builder/).

### Correct / Incorrect Answer Marks

Answer marks provide the user feedback on each question. **Green** is used to indicate correct answers, while **red** is used to indicate incorrect answers. If you allow users to [retake the quiz](https://learndash.com/support/docs/core/quizzes/quiz-access/#quiz_retakes), and you don’t want to give away the answers, you can disable answer marks. They’ll still be able to see the answers they provided, they just won’t know if it was correct or incorrect.

### View Questions Button

If disabled, the View Questions button will not appear on the results page, and users will not be able to review the questions. Only the information you have enabled in the previous section, Custom Results Display, will be shown.

To review the previously mentioned elements, here are the settings responsible to make these possible:

- **View Questions Button** **turned off:** Only display a final score (hide all questions)
- **Correct / Incorrect Answer Marks** **turned on:** Show the user which answers were correct and incorrect
- **Correct / Incorrect Messages turned on:** Display a custom message beneath each question

Depending on your preference, you can have any combination of these settings on or off at the same time. For example, if you want to display a correct/incorrect message and the correct/incorrect answer marks but not give your users the ability to review the questions, turn the View Questions Button off, and the other two on.

**NOTE**: If you leave the Custom Answer Feedback setting turned off, all elements will be enabled and displayed.

---

## Quiz Display & Content Settings

**Source:** [https://learndash.com/support/kb/core/quizzes/quiz-display/](https://learndash.com/support/kb/core/quizzes/quiz-display/)

LearnDash quizzes come with a plethora of display options. You can add materials, show/hide a handful of different elements, autostart quizzes, display numbering, randomize answers and more.

## How to Access Settings

![LearnDash quiz display & content settings access](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-display-content-settings-admin.jpg)

1. Navigate to LearnDash LMS > Quizzes
2. Click on the quiz you’d like to edit
3. Click on the Settings tab
4. Locate the Display and Content Options section

**NOTE**: Quiz display and content settings are set on a quiz-by-quiz basis. They cannot be set globally.

Here’s an example of most of the available options. We’ll cover them all below.

![All available quiz display & content options](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-display-content-options-admin.jpg)

## Quiz Materials

Quiz materials are supplemental materials that you want to provide for the quiz. It is most common to include PDF files or other downloadable files in this area, but you can include anything youd like (PDFs, images, downloadable audio files, links to other websites, etc.).

1. Next to Quiz Materials, toggle the switch on
2. Add your materials in the box (HTML is supported)
[See here for example HTML](https://learndash.com/support/docs/core/courses/course-display/#example_html)

**NOTE**: Quiz materials are shown to any user who has [access to the quiz](https://learndash.com/support/docs/core/quizzes/quiz-access/).

They are displayed to your users in a separate tab, alongside the main quiz content.

![LearnDash quiz materials, frontend example](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-materials-frontend-example.gif)

## Autostart

Enable this setting to automatically load the quiz as soon as the user accesses the quiz page. By default, this setting is disabled, and a “Start Quiz” button must be clicked to start the quiz.

![LearnDash start quiz button on frontend](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-start-quiz-button-frontend.jpg)

Before we cover all the various elements of a quiz, please familiarize yourself with the following terminology. We’ll explain how to show/hide/enable/disable all of the following elements:

![All LearnDash quiz elements labeled](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-elements-labeled-frontend_update3.3-1.jpg)

## Question Display

The question display gives you two main options for how you want to set up your quiz questions:

**1. One question at a time**

![LearnDash quiz, one question at a time example](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-questions-one-at-a-time-example.gif)

- Only one question is shown at a time
- A “Next” button is displayed at the bottom of each question to proceed to the next one

If you choose this option, you have two ways to display results:

1. **At the end only**: All questions are graded together, at the end of the quiz. Choosing this option will allow you to optionally display a “Back” button that allows the user to review the previous question.
2. **After each submitted answer**: Each question is graded one at a time, immediately after it is submitted. The “Back” button is not an option here.

**2. All questions at once**

![LearnDash quiz, all questions on same page example](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-questions-single-page-example.gif)

- All questions are displayed on the page
- You can choose the number of questions to be displayed before pagination appears at the bottom (enter 
```
0
```

 to show all questions)
- No navigation buttons will be shown
- A “Quiz Summary” button is shown at the end, followed by a “Finish Quiz” button to submit your answers

## Question Overview Table

The question overview table displays a table at the top of your quiz.

![Quiz overview sample](https://learndash.com/support/wp-content/uploads/2019/05/Quiz-overview-sample.gif)

- It contains a number for each quiz question that your quiz contains
- Users can click each number to take them to that particular quiz question
- The question that is currently being viewed is marked in blue
- Users can click a “Review question” button to mark a question as “for review”
- Answered questions are marked in green
- A “Quiz summary” button allows user to see how many questions they have answered, and click “Finish quiz” to submit their answers
- The “Skip Question” button is only enabled if the “Display results after each submitted answer” is selected on the Question Display options
- Even with the “Skip Question” disabled, depending on the other settings you set above, the users may still freely go back and forth between questions via the Question Overview Table.

**NOTE**: These colors will depend on the accent and warning colors set on your LearnDash General Settings. By default, they should appear similar to the above screen capture.

## Custom Question Ordering

By default, your quiz questions are displayed in the order they are set in the [Quiz Builder](https://learndash.com/support/docs/core/quizzes/quiz-builder/). If you’d like to change that order, you have a few options:

- **Sort by Category:** This will group all questions within the same category together.
- **Randomize Order:** Just as it implies, this displays quiz questions in a random order. You can apply the randomization to all questions, or only a subset of questions.

## Additional Question Options

There are a handful of other quiz elements that you can choose to show or hide from your users. Enable the toggle to display the following elements:

- **Point Value:** Displays the points in the top-right corner of each question. 
```
10 point(s)
```
- **Question Category:** Displayed just above the question. Only shown for questions that have been assigned a category. 
```
Category: Math
```
- **Question Position:** Displayed at the very top of each question, indicating the current question out of the total questions. 
```
Question 1 of 10
```
- **Question Numbering:** Displayed before each question. 
```
10. Question
```
- **Number Answers:** Displays a number before each answer (only applies to Single Choice and Multiple Choice [question types](https://learndash.com/support/docs/core/quizzes/questions/#quiz_question_types)).
- **Randomize Answers:** Applies to Single Choice, Multiple Choice, Sorting and Matrix Sorting [question types.](https://learndash.com/support/docs/core/quizzes/questions/#quiz_question_types)

## Quiz Title

Enable this setting to output the LearnDash quiz title. This is recommended if you’re displaying the quiz via shortcode, or anywhere other than the default quiz page.

Most [WordPress themes](https://learndash.com/support/docs/getting-started/themes/) already display the main page title, so in many cases, this can be left disabled, otherwise you might see two of the same title on your page.

---

## Global Quiz Settings

**Source:** [https://learndash.com/support/kb/core/quizzes/global-settings/](https://learndash.com/support/kb/core/quizzes/global-settings/)

The LearnDash quiz settings screen is where you can set some global options that will apply to all quizzes on your site. Quiz settings are organized into a few sections, outlined below.

To access your global quiz settings:

1. Navigate to LearnDash LMS > Quizzes
2. Click the Settings tab

![LearnDash global quiz settings tab](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-global-settings-tab.jpg)

## Global Quiz Management & Display Settings

![LearnDash quiz management & display settings](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-management-display-settings.jpg)

### Quiz Builder

The quiz builder is enabled by default. It simplifies quiz creation and can save you a ton of time, especially for more complex quizzes with many questions.

It can be disabled, but we recommend leaving it enabled.

[Learn how to use the quiz builder](https://learndash.com/support/docs/core/quizzes/quiz-builder/)

When the quiz builder is enabled, you have a few additional options:

- **Questions Displayed:** This signifies the number of questions that will appear in the quiz builder, before showing pagination at the bottom. For large quizzes, decreasing this number could make your quizzes easier to manage with the builder.
- **Shared Quiz Questions:** Enable this setting if you want to use the same question across multiple quizzes.

**WARNING**: Once shared quiz questions is enabled, **it should not be disabled without careful consideration**. Any question associated to multiple quizzes will lose its association if the setting is disabled.

### Custom Quiz Time Formats

By default, LearnDash will use your default WordPress date and time format for quiz statistics and the [quiz leaderboard](https://learndash.com/support/docs/core/quizzes/quiz-leaderboard/). Toggle this setting on if you’d like to use a custom date/time format. Once enabled, you’ll have two options:

- Statistic time format
- Leaderboard time format

Each one can be set individually.

### Quiz Template Management

If you are using quiz templates, this section allows you to delete a quiz template, or update an existing template’s title.

1. Choose the quiz template from the dropdown menu
2. **(Optional)**: Edit the template title
3. Click Update to update the title, or Delete to delete that template

## Quiz Email Settings

![LearnDash global quiz email settings](https://learndash.com/support/wp-content/uploads/2019/05/learndash-global-quiz-email-settings.jpg)Set up email notifications for your students when they complete a quiz

Please see our full documentation on [quiz email notifications](https://learndash.com/support/docs/core/quizzes/quiz-email-notifications/)

## Quiz Taxonomies (Categories & Tags)

![LearnDash quiz taxonomy global settings](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-global-taxonomy-settings.jpg)

![Example of LearnDash categories & tags](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-categories-tags-edit-screen.jpg)

Using quiz taxonomies is completely optional, but they provide an additional way to organize your quizzes.

- **LearnDash Quiz Categories:** This enables you to organize your quizzes into custom categories that are only available for LearnDash quizzes.
- **LearnDash Quiz Tags:** This enables you to organize your quizzes using custom tags that are only available for LearnDash quizzes.
- **WordPress Post Categories:** This enables you to organize your quizzes using WordPress default category management system. These categories can be viewed and managed in the WordPress admin under Posts > Catagories.You can share them amongst both the Posts and Quizzes post types.
- **WordPress Post Tags:** This enables you to organize your quizzes using WordPress default tag management system. These tags can be viewed and managed in the WordPress admin under Posts > Tags. You can share them amongst both the Posts and Quizzes post types.

If youve enabled these options, when you go to edit a quiz, youll see each of them in the sidebar of the editing screen. In the above screenshot, WordPress categories and tags are shown in pink, while LearnDash categories and tags are shown in blue.

WordPress has a good article on the [difference between categories and tags](https://en.support.wordpress.com/posts/categories-vs-tags/), and when and how to use each one.

### Managing Categories & Tags

You can manage (add, edit, or delete) the WordPress and LearnDash Categories and Tags via the Actions menu:

1. Navigate to LearnDash LMS > Quizzes
2. Select the Actions dropdown menu
3. Select your desired menu option

![](https://learndash.com/support/wp-content/uploads/2019/05/managing_learndash_quiz_categories_and_tags.png)

## Quiz Custom Post Types

![LearnDash quiz custom post type settings](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-custom-post-type-options.jpg)Settings for Quizz Custo Post Types

These options will apply globally to all LearnDash quizzes on your site:

- **Quiz Search:** Enable this setting if you want quizzes to be included in search results when using the default WordPress search form on the front-end of your site. In most cases, we recommend leaving this disabled.

**NOTE**: **Quiz Search** has nothing to do with Google search results. This setting only applies when using the built-in WordPress search form on your website.

- **Archive Page:** Enable this setting if you want visitors to be able to access the default quiz archive page. When enabled, a preview of the URL is displayed.
- **Note:**The design of this page is controlled by your theme, not by LearnDash.
- You need to re-save your [permalinks](https://learndash.com/support/docs/core/settings/permalinks/) after updating this setting.
- In most cases, we recommend leaving this disabled.
- **RSS/Atom Feed:** Enable this setting if you want to include LearnDash quizzes in the RSS feed of your site.
- **Editor Supported Settings:** You can choose which features of WordPress youd like to enable for the Quiz post type.
- Featured Image
- Comments
- Custom Fields
- Revisions

---

## Quiz Builder

**Source:** [https://learndash.com/support/kb/core/quizzes/quiz-builder/](https://learndash.com/support/kb/core/quizzes/quiz-builder/)

The LearnDash quiz builder provides a quick, intuitive way to add, edit, move and delete all the questions in your quiz. This article explains how to use every aspect of the quiz builder to make creating quizzes and managing [questions](https://learndash.com/support/docs/core/quizzes/questions/) a breeze.

**NOTE**: The quiz builder is enabled by default, but if you don’t see it when editing your quiz, double-check that it’s enabled in your [global quiz settings](https://learndash.com/support/docs/core/quizzes/global-settings/).

## Access the Quiz Builder

There are a few ways you can access the LearnDash quiz builder.

### For Existing Quizzes

If you’ve already created a quiz:

1. Navigate to LearnDash LMS > Quizzes
2. Hover over an existing quiz
3. Click the “Builder” link

![How to access LearnDash quiz builder from list page](https://learndash.com/support/wp-content/uploads/2019/05/learndash-access-quiz-builder-list.jpg)

Alternatively, you can click on the quiz title or “Edit” link to bring up the “Edit Quiz” page. Once there, click the “Builder” tab in the top navigation bar.

![LearnDash quiz builder tab in admin](https://learndash.com/support/wp-content/uploads/2019/05/learndash-access-quiz-builder-tab.jpg)

## Creating Your First Quiz?

![Add new quiz button in LearnDash](https://learndash.com/support/wp-content/uploads/2019/05/learndash-add-new-quiz-button.jpg)

1. Navigate to LearnDash LMS > Quizzes
2. Click the “Add New” button at the top of the page
3. Click the “Builder” tab in the top navigation bar

## Quiz Builder Overview

At the top of the quiz builder, you’ll see:

![LearnDash quiz builder, top bar](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-top-questions-bar.jpg)

- The total number of questions in the quiz
- A link to “Expand All” or “Collapse All” questions
- This allows you to see all questions and answers at a glance, and more quickly rearrange, add or remove questions
- An “Undo” link to undo any unwanted changes you’ve made

Then you’ll see all of your questions. This is where you’ll spend the majority of your time constructing your quiz.

![Main area of the LearnDash quiz builder](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-main-area-admin.jpg)

## Add Questions to Your Quiz

There are multiple ways to add questions with the quiz builder. This will depend on a few things:

- if you’re [sharing questions](https://learndash.com/support/docs/core/quizzes/global-settings/#quiz_builder) across multiple quizzes, and want to add existing ones
- if you’re adding brand new questions
- personal preference

### New Questions

To add a brand new question to a quiz:

1. At the bottom of the quiz builder, click the **+**New Question link
2. Type the name of your question (internal use only)
3. Hit Enter, or click the “Add Question” button

![How to add new question in LearnDash quiz builder admin](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-add-new-question-animation.gif)

### Existing Questions

All of your existing questions can be found in the “Questions” box in the sidebar. By default, your most recent questions are shown, but you can click “View all” to see all questions, or use the search box to find a specific question by its title.

**NOTE**: If you don’t see the questions box depicted below, click the ![settings cog icon](https://learndash.com/support/wp-content/uploads/2019/03/icon-settings-cog.png) icon to display the sidebar.

![LearnDash quiz builder, questions metabox](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-question-metabox.jpg)

There are multiple ways to add existing questions.

Add a single question: Hover over a question in the question box and click the “Add” button. This will add the question to the end of your quiz.

![How to add a single question to a LearnDash quiz](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-metabox-add-question-button.jpg)

Add multiple questions**:** Select the checkbox next to multiple questions, and then click the “Add Selected” button. This will add all selected questions to the end of your quiz.

![Add multiple questions via LearnDash quiz builder](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-add-multiple-questions-metabox.jpg)

Drag and drop**:** If you’d like to add questions to a particular spot in your quiz, you can click and hold down your mouse, drag the question to the quiz builder in the spot you want it, and then release. This will place the question in your specified location in the quiz.

![Drag & drop questions in the LearnDash quiz builder](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-drag-drop-question-animation.gif)

## Edit Questions

Questions have a few different parts to them, so let’s cover each area one at a time.

### Question Title

Like we previously mentioned, the title is only for internal use, but it can be extremely helpful for the admin to find/edit questions on the backend.

![Edit question title in quiz builder](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-edit-question-title-animation.gif)

To edit the question title in the quiz builder:

1. Hover over the question whose title you’d like to edit
2. Click the pencil icon
3. Edit the title
4. Hit Enter, or click the “Save” button

For all other edits to the question, or its answers, you need to expand the question by clicking on the blue down arrow on the right. Alternatively, you can expand all questions at once using the “Expand All” link at the top of the quiz builder.

### Question

![How to edit a question in the LearnDash quiz builder](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-edit-question-animation.gif)

To edit the actual text of the question:

1. Next to the Question, click the pencil icon
2. Edit your question
3. Click the “Save” button

### Answers

Editing answers in the quiz builder will depend on the question type. Different types have different options. As soon as you select the question type, your answer options will update below.

#### Add Answers

The following question types provide the ability for you to add more than one answer:

- single choice
- multiple choice
- sorting
- matrix sorting

![How to add new answer in LearnDash quiz builder](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-add-new-answer-animation.gif)

For these question types, you can add new answers directly in the builder.

1. Click the **+**New Answer link
2. Enter your new answer
3. Click the “Add Answer” button

#### Edit Answers

Editing answers will look different, depending on the question type. However, all answers and answer options can be edited in the quiz builder by clicking the pencil icon.

Here’s an example editing an answer for a single choice question:

![How to edit answers in LearnDash quiz builder](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-edit-answers-animation.gif)

#### Select Correct Answers

For single choice and multiple choice questions, you can select one or more correct answers.

1. To the right of each answer, you’ll see a “Correct” option
2. **For single choice questions**: choose the single radio button that corresponds with the correct answer
3. **For multiple choice questions**: choose each checkbox that corresponds with a correct answer

The correct answer(s) is displayed in **bold** in the quiz builder.

#### Move Answers

The following question types contain answers which can be reordered:

- single choice
- multiple choice
- sorting
- matrix sorting

![How to rearrange/move answers in quiz builder](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-move-answers-animation.gif)

To rearrange the order of answers:

1. Locate the 6 dots to the left of the answer
2. Click, hold down your mouse, and drag the answer to a new location

#### Remove Answers

To remove an answer in the quiz builder:

1. Hover over the answer you’d like to remove
2. Click the red “Remove” link

![How to remove answers in the quiz builder](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-remove-answer-link.jpg)

For all other question types, the answer options vary. Please refer to our [question types documentation](https://learndash.com/support/docs/core/quizzes/questions/#quiz_question_types) to see all available options.

### Points

![How to edit question points in quiz builder](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-edit-points-animation.gif)

You can indicate a different number of points for each question. To edit the amount of available points for a question:

1. Click the pencil icon next to “__ points”
2. Edit available points
3. Hit Enter, or click the “Save” button

You can enable the Different points for each answer in Quiz Builder:

1. From the Question type in the Quiz Builder, click on Question Settings
2. Enable the toggle for Different points for each answer****> Save changes
3. You can now add different points per answer by clicking on the Pencil Icon
4. It should show you an input box to add Points for the Question Answer

![](https://learndash.com/support/wp-content/uploads/2024/04/differentanswerperquestioninquizbuilder.gif)

**NOTE**: Setting up different points for each answer does not support Assessment and Essay/Open Answer question types.

### Question Type

![How to edit question type in LearnDash quiz builder](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-edit-question-type-animation.gif)

To edit the question type:

1. Click on the question type dropdown menu
2. Choose a new question type

The answer options will automatically update as soon as you change the question type. Check out [this documentation on different question types](https://learndash.com/support/docs/core/quizzes/questions/#quiz-question-types) and how they are used.

### Question Settings

Question settings are the same across all question types.

To access question settings in the quiz builder:

- Look for the “Question Settings” link below the answers

![LearnDash quiz builder, question settings](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-question-settings.gif)

Since these settings are also available on the dedicated Edit Question page, please see the following documentation for:

- [Question hints](https://learndash.com/support/docs/core/quizzes/questions/#hints)
- [Custom correct/incorrect messages](https://learndash.com/support/docs/core/quizzes/quiz-results/#configure_messages)

### Question Categories

Currently, these cannot be set within the quiz builder. Please see [this page for instructions](https://learndash.com/support/docs/core/quizzes/questions/#question_categories).

Finally, if you need to open a question’s dedicated edit screen:

1. Hover over a question
2. Click the blue “Edit” link

![Edit & remove links in LearnDash quiz builder](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-edit-remove-links.jpg)

**NOTE**: We recommend opening the question page in a new tab so you don’t lose any unsaved changes to your quiz.

## Remove Questions

To remove a question from your quiz:

1. Hover over the question
2. Click the red “Remove” link

**NOTE**: This only removes the question from this particular quiz. It will still remain in your [full list of questions](https://learndash.com/support/docs/core/quizzes/questions/), and if using it on another quiz, that quiz will not be affected.

## Rearrange Questions

In addition to adding and editing questions, you can also use the quiz builder to move them around. You’ve got two options.

### Drag and Drop

Immediately before each question, you’ll find an icon with 6 dots. When you hover over this icon, your cursor will turn into a hand. This means you can click, hold down, and drag the question to another place within your quiz.

![Drag & drop questions to rearrange them](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-rearrange-questions-drag-drop.gif)

### Arrows

Also located before each question, you’ll find up and down arrows above and below the drag and drop icon. Clicking these arrows will move the question either up or down.

![Move questions in quiz builder using arrows](https://learndash.com/support/wp-content/uploads/2019/05/learndash-quiz-builder-rearrange-questions-arrows.gif)

---

## Quizzes

**Source:** [https://learndash.com/support/kb/core/quizzes/quizzes/](https://learndash.com/support/kb/core/quizzes/quizzes/)

Quizzes provide a way for you to gauge how well your students are grasping your course material. LearnDash quizzes offer quite a few options to customize the experience. This section will cover all of those options in detail.

- [Global Settings](https://learndash.com/support/docs/core/quizzes/global-settings/)– Settings applied to all quizzes on your site
- [Quiz Builder](https://learndash.com/support/docs/core/quizzes/quiz-builder/)– Add, edit, remove, and manage a quiz, and all of its questions – organize your quiz structure
- [Questions & Question Type](https://learndash.com/support/docs/core/quizzes/questions/)– Explore different question types (multiple choice, true/false, essay, etc.)
- [Quiz Access & Progression](https://learndash.com/support/docs/core/quizzes/quiz-access/)– Set access restrictions and control how a user progresses through a quiz – (one question at a time or all at once?)
- [Display & Content Settings](https://learndash.com/support/docs/core/quizzes/quiz-display/) – Customize the quiz appearance, set time limits, question order, and more
- [Display Results](https://learndash.com/support/docs/core/quizzes/quiz-results/)– Provide feedback on answers and provide feedback on answers
- [Custom Fields](https://learndash.com/support/docs/core/quizzes/quiz-custom-fields/)– Gather extra info from quiz takers: Add fields for name, email, or other relevant data
- [Leaderboard](https://learndash.com/support/docs/core/quizzes/quiz-leaderboard/) – Spice things up with some friendly competition: Display top scores and motivate students to improve
- [Email Notifications](https://learndash.com/support/docs/core/quizzes/quiz-email-notifications/)– Set up alerts for quiz completion and notify both students and admins

You may also check out our other documentation about quizzes, such as how to import/export quizzes and other [LearnDash items  here](https://learndash.com/support/docs/core/settings/advanced-options/#import-export).

---

