# Virtual Instructors

*Category from LearnDash documentation*

---

## Intro to Virtual Instructors

**Source:** [https://learndash.com/support/kb/resources/virtual-instructors/intro-to-virtual-instructors/](https://learndash.com/support/kb/resources/virtual-instructors/intro-to-virtual-instructors/)

**Virtual Instructors** allow you to add an AI-powered assistant to your LearnDash courses that can respond to learner questions as they progress through content. This feature is designed to support instructors by handling common or repetitive questions, giving educators more time to focus on instruction and course design.

This guide walks through enabling Virtual Instructors, configuring global and individual settings, managing language preferences and content restrictions, and understanding how learners interact with the Virtual Instructor on the front end.

## Virtual Instructors

The Virtual Instructors feature helps you create an AI-powered virtual assistant that can answer questions asked by learners while progressing through the Course. Virtual Instructors can share the workload of real-life teachers by responding to common questions, allowing teachers to focus their energy on creating more complex training material.

Please note that we currently do not use contextual AI for Virtual Instructors. This means the virtual assistant works like a real-life classroom teaching assistant who does not have the surrounding context of questions put to them. Off-Topic questions can be answered, but you can restrict the tool from answering certain questions based on a list of banned words.

**Note:** You may need to include various forms of a banned word. For example, if your banned list includes the word “potato” in all lowercase, your learner may still work around the banned list by using “p0t@t0” and substituting numbers or signs for letters. You’ll want to include a variety of forms of your banned word, including using numbers or signs in place of letters, such as in “pot@to”.

## Setting up Virtual Instructors

Virtual Instructors is an experimental feature. To enable Virtual Instructors, go to **LearnDash LMS > Settings > Experiments** and toggle on the switch to enable this feature.

1. Click the toggle to enable Virtual Instructors
2. Click on Save to save your changes
3. Once enabled, you’ll see the Virtual Instructors
4. menu item under LearnDashLMS

Once enabled, a new menu item, **LearnDash LMS > Virtual Instructors,**will be added to the Admin menu.

## Global Configuration

Before you start setting up virtual Instructors, go to **LearnDash LMS > Virtual Instructors**and click Next to save a few global settings. On the next screen, you will be prompted to enter your OpenAI key.

### Creating an OpenAI API key

1. Visit the OpenAI site at the following link and log in to your account or sign up for a new one: [https://platform.openai.com](https://platform.openai.com/)
2. Visit the pricing page to confirm which plan you need: [https://openai.com/pricing](https://openai.com/pricing).
We recommend **GPT-3.5-Turbo**.
3. Go to the billing section and add a credit balance based on the subscription plan you choose: [https://platform.openai.com/account/billing/overview](https://platform.openai.com/account/billing/overview)You can choose to switch on/off auto-recharge for your account, set up a payment method, and save other relevant billing-related information.
4. Next, go to [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys) and create a secret key to connect your site to OpenAI’s services.
Copy over the secret key and save it in the field highlighted in the screenshot above on your site. The OpenAI API key can be later updated on your site from **LearnDash LMS > Settings > Advanced > AI Integrations**.

Save the global configuration, and then you are ready to add a list of comma-separated banned words and the error message that should be shown to users who try to use them.

### The Objective of Setting Banned Words

Due to the wide range of subjects taught and age groups that learners belong to, the banned words list will help site admins protect users from inappropriate content or exclude off-t[opic](https://learndash.com/support/glossary/topic/) questions from being asked. The global banned list can be overridden at the individual [Virtual Instructor](https://learndash.com/support/glossary/virtual-instructor/) level. This will allow you to include more flexibility in the feature.

### Setting up Banned Words

Go to **LearnDash LMS** **> Virtual** [Instructors](https://learndash.com/support/glossary/instructors/) **>** **Settings to set up a banned word list**.

The words added in the field provided should be comma-separated. Below the banned words, field, add the error message that should be displayed to users if they enter any of the banned words in their questions. The default message is “Oops! We can’t help you with that question. Please ask your instructor.”

## Language Support

### Configuring Language Preferences for the Virtual Instructor

To enhance the user experience, the Virtual Instructor can be configured to respond in languages other than English. This customization allows for a more tailored interaction in the user’s preferred language.

### Steps to Configure Language Settings

1. Go to**LearnDash LMS > Virtual Instructors**
2. Select the desired Virtual Instructor to modify its settings
3. In the Virtual Instructor settings, locate the **Custom Instruction** field. Enter the instruction to specify the desired language for responses. For example, you could enter “Please respond in Spanish only” as seen in the illustration below.
![Virtual Instructor Custom Instruction Field](blob:https://learndash.com/36371ad5-ac0f-4321-bb99-afe5878320e7)**You can replace “Spanish” with your preferred language.**
4. Optionally, you can refine your language preferences. For example, you could address specific linguistic preferences, such as excluding jargon or avoiding high-sounding, literary language as in the illustration below:.![Additonal Custom instructions for Virtual Instructor](blob:https://learndash.com/89a22816-3be0-49f8-8215-2ae9f0a8c623)
5. Finally, click the Update button in the Publish box to save your changes.

### Experience on the Front-end

A user conversing with the Virtual Instructor will encounter responses on the following lines.

The **Custom Instruction** saved was Please respond in Spanish only and avoid using technical jargon or high-sounding words. Note how the response in Spanish uses simple words and short sentences.

**Note:** The Virtual Instructor does not automatically detect the site’s current language saved in **Settings > General** in WordPress

## Adding/Modifying Virtual Instructors

After the global settings have been added, go to **LearnDash LMS > Virtual**[Instructors](https://learndash.com/support/glossary/instructors/) to add your first [Virtual Instructor](https://learndash.com/support/glossary/virtual-instructor/).

### Individual Virtual Instructor

Use individual Virtual Instructor settings to customize how a specific Virtual Instructor behaves, what content it supports, and which courses or groups it appears in.

### Accessing Virtual Instructor settings

1. Navigate to **LearnDash LMS → Virtual Instructors**.
2. Click **Edit** next to an existing Virtual Instructor, or click **Add New** to create a new one.
3. (Optional) Click **Select Image** to choose an avatar for the Virtual Instructor.

### Adding custom instructions

Use the **Custom Instructions** field to control how the Virtual Instructor responds to learner questions. These instructions are **not visible to learners** and are used only by the AI when generating responses.

For example, you might instruct the Virtual Instructor to guide learners instead of providing direct answers.

**Example instruction:**
*Don’t give direct answers; instead, provide a clue.*

**Resulting behavior:**

- **Learner asks:** *What is 2 + 2?*
- **Virtual Instructor responds:**
*To find the sum of 2 + 2, you can combine two groups of 2 items each. Think about how you can represent this visually to arrive at the answer.*

Without this instruction, the Virtual Instructor would respond with a direct answer:
*2 + 2 equals 4.*

### Associating courses and groups

Next, choose where this Virtual Instructor should be available:

- **Courses**: Use the toggle to apply the Virtual Instructor to **all courses** or only **specific courses**. If selecting specific courses, type each course name into the **Associated Courses** field and press **Enter**.
- **Groups**: Use the same toggle and selection process to associate the Virtual Instructor with **all groups** or **specific groups**.

### Overriding banned words and error messages

You can override the **global banned words list** for an individual Virtual Instructor by adding a custom list in the fields provided. You can also define a **custom error message** to display when a learner submits a question containing a banned word, replacing the globally configured message.

### Publishing changes

If caching is enabled on your site, click **Purge from cache** in the **Publish** box before clicking **Publish** or **Update** to ensure your changes are applied correctly.

## Using a Virtual Instructor in a Course

The [Virtual Instructor](https://learndash.com/support/glossary/virtual-instructor/) linked to Courses and Groups will appear on the front-end in the bottom right corner of the content pages. Learners can ask questions related to the [Lesson](https://learndash.com/support/glossary/lesson/) or [Topic](https://learndash.com/support/glossary/topic/) content while they study it. If the learner asks a question based on a banned word, the error message you set will be displayed.

## Custom Instructions

### Configuring the Subject Definition

You can limit what the [Virtual Instructor](https://learndash.com/support/glossary/virtual-instructor/) will talk about when asked questions. This, too, will need to be enforced through the Custom Instruction feature.

## Frequently Asked Questions

### A message stating “Error: You didn’t provide an API key” has appeared. What am I missing?

Your OpenAI API key may be invalid or expired. Please visit [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys) to create a new key or add adequate credits to your account to ensure you can use their service. Please refer to the section Creating an OpenAI API key to know more.

### Is Virtual Instructors free?

No. While the code itself is free and open source, as it uses OpenAI to process the questions, you need to add credits to your OpenAI account for it to work.

The OpenAI account owner who sets the key can see the number of tokens (responses sent by the VI) but cannot see the questions being asked, nor the answers being given. For setup instructions, see the section *Creating an OpenAI API key*.

### Can the instructor or Admin view the questions asked by the Students/users

No, the OpenAI account owner who sets the key can see the number of tokens (responses sent by the VI) but cannot see the questions being asked, nor the answers being given.

### If a Course belongs to more than one virtual instructor’s associated courses/groups, which Virtual Instructor setting will be used?

Here is the list of priorities in order:

1. Specific [Course](https://learndash.com/support/glossary/course/) setting
2. Specific group setting
3. Global group setting (Applied to all groups)
4. Global [Course](https://learndash.com/support/glossary/course/) Setting (Applied to all courses)

If a priority level has more than one [Virtual Instructor](https://learndash.com/support/glossary/virtual-instructor/), it will use the most recent one.

### Can I use multiple different OpenAI keys across Instructors?

No, currently we only support a single OpenAI key being used across all created [Instructors](https://learndash.com/support/glossary/instructors/) on a single site.

---

