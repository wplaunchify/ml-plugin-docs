# Faqs

*Category from LearnDash documentation*

---

## How do I automatically assign users to courses when they sign up/register on my site?

**Source:** [https://learndash.com/support/kb/core/faqs/how-do-i-automatically-assign-users-to-courses-when-they-sign-up-register-on-my-site/](https://learndash.com/support/kb/core/faqs/how-do-i-automatically-assign-users-to-courses-when-they-sign-up-register-on-my-site/)

You can use various methods to automatically enroll users in the courses during sign-up or account registration.

## Course Access Mode as Free

When you set up the course **Access Mode** to *Free*, all registered users on your site will have access to all *Free* courses automatically. On the course page, once they’re logged in, they are only required to click the “Take this course” button to enroll in the course.

To learn more about the different **Access Mode** settings, please refer to our documentation here: [Course Enrollment Mode Settings](https://www.learndash.com/support/docs/core/courses/course-access/#access-mode)

## LearnDash Gravity Forms Integration

The LearnDash Gravity Forms integration (requires the Gravity Forms plugin on the Elite license and the Gravity Forms User Registration add-on) allows you to register new users on your site and instantly provide them access to one (or more) of your courses.

To learn more about this, please refer to our documentation here: [Gravity Forms Integration](https://www.learndash.com/support/docs/add-ons/gravity-forms/)

## LearnDash Zapier Integration

Users who sign up or register on your site are automatically added to the courses you’ve set up on your Zap.

To learn more about this, please refer to the documentation here: [Zapier Integration](https://www.learndash.com/support/docs/add-ons/zapier/)

## Custom Snippets

Use any code snippets (whichever applies to your requirements) with the help of the [Code Snippet plugin](https://wordpress.org/plugins/code-snippets/) to enroll a user automatically into a course. Please note that if you’re not comfortable with custom development, we recommend getting in touch with any of our [experts.](https://www.learndash.com/experts/)

- [Enroll new user into multiple courses on registration](https://developers.learndash.com/snippet/enroll-new-user-into-multiple-courses-on-registration/)
- [Enroll new registered user into course and group](https://developers.learndash.com/snippet/enroll-new-registered-user-into-course-and-group/)
- [Enroll user in all free courses upon registration](https://developers.learndash.com/snippet/enroll-user-in-all-free-courses-upon-registration/)

---

## Why Am I Unable to Submit an “Open Support Ticket”?

**Source:** [https://learndash.com/support/kb/resources/faqs/why-am-i-unable-to-submit-an-open-support-ticket/](https://learndash.com/support/kb/resources/faqs/why-am-i-unable-to-submit-an-open-support-ticket/)

If you’re encountering an issue submitting a support ticket, it’s likely due to permission errors or browser-related issues. Here are some steps you can take to troubleshoot:

1. **Check Your Login:**
Ensure you are logged into your LearnDash account. If you’re not logged in, you might not have access to the support ticket form. You can log in via the LearnDash Account Dashboard.
2. **Browser Issues:**
Sometimes, browser extensions or settings can interfere with form submissions. Try clearing your browser cache or disabling extensions, or using a different browser to resolve this issue.
3. **Email Direct Support:**
If you’re still unable to submit a ticket, you can email LearnDash Support directly at [support@learndash.com](mailto:support@learndash.com). Be sure to provide detailed information about the issue you’re facing, and our team will assist you as soon as possible.

If the issue persists, feel free to reach out to the support team via email, and we’ll ensure you get the help you need!

---

## I’m getting the error “the link you followed has expired” when installing LearnDash.

**Source:** [https://learndash.com/support/kb/resources/faqs/im-getting-the-error-the-link-you-followed-has-expired-when-installing-learndash/](https://learndash.com/support/kb/resources/faqs/im-getting-the-error-the-link-you-followed-has-expired-when-installing-learndash/)

**NOTE: Remember to create a full site backup before making any changes or updates to your site.**

The error “*The link you followed has expired*” in WordPress typically occurs when trying to upload a theme or plugin. This issue is usually related to PHP settings in your server configuration, specifically the following:

- upload_max_filesize
- post_max_size
- max_execution_time
- max_input_time

To fix this, you need to update/increase their values to the following:

- upload_max_filesize = 1536M
- post_max_size = 1536M
- max_execution_time = 600
- max_input_time = 300

To update these values, contact your hosting provider’s support team. They can adjust the necessary PHP settings for you.

---

## Questions about MemberDash?

**Source:** [https://learndash.com/support/kb/resources/faqs/questions-about-memberdash/](https://learndash.com/support/kb/resources/faqs/questions-about-memberdash/)

MemberDash is the best way to add membership related features to your online courses with LearnDash. It helps you stay connected with your users, track renewals, and organize events with just a few clicks. With an intuitive dashboard and handy tools, MemberDash saves you time and helps you build stronger relationships with your community. Plus, with customizable features and helpful insights, you can create a better experience and effortlessly engage your users throughout their learning journey.

Below are a few frequently asked questions related to MemberDash:

**Where can I learn more about MemberDash?** You can learn everything about MemberDash at [memberdashwp.com](http://memberdashwp.com) **I already purchased MemberDash. Where can I manage my subscription?** While MemberDash has it’s own website, all purchases and subscriptions for MemberDash are handled via [account.learndash.com](https://account.learndash.com). 
If you have specific questions about your subscription, please reach out to our Account Services team via the contact form here: [learndash.com/help](https://learndash.com/help/)

---

## What steps can I take if a lesson or topic is not marked as complete?

**Source:** [https://learndash.com/support/kb/resources/faqs/what-steps-can-i-take-if-a-lesson-or-topic-is-not-marked-as-complete-2/](https://learndash.com/support/kb/resources/faqs/what-steps-can-i-take-if-a-lesson-or-topic-is-not-marked-as-complete-2/)

### Troubleshooting Steps

1. **Verify Completion Criteria**:
- Go to LearnDash LMS > Lessons (or Topics) in your WordPress admin area.
- Edit the lesson or topic that isn’t being marked as complete.
- Check the Lesson/Topic Options settings to ensure the Forced Lesson/Topic Timer and Lesson/Topic Materials are set correctly.
- Check for any associated quiz that is not yet graded (requires manual grading: [Manage & Grade Essays](https://www.learndash.com/support/docs/core/quizzes/essays/#individual-essay) ) or if the student hasn’t meet the passing score set on the quiz.
2. **Check User Progress**:
- Go to LearnDash LMS > Reports > Export User Course Data.
- Locate the user and the specific course to check their progress.
- Verify if other lessons/topics in the course are marked as complete, which could help identify if the issue is isolated to a particular lesson/topic.
3. **Browser Cache**:
- Clear your browser cache or try accessing the course in an incognito/private browsing window to rule out caching issues.
4. **Conflict with Other Plugins**:
- Deactivate all plugins except LearnDash and see if the issue persists. If the lesson/topic is then marked as complete, reactivate each plugin one by one to identify the conflicting plugin.
5. **Theme Conflict**:
- Temporarily switch to a default WordPress theme (e.g., Twenty Twenty-Four) and check if the issue resolves. If it does, the problem might be related to your theme.

You can use the [Health Check & Troubleshooting](https://wordpress.org/plugins/health-check/) plugin to test for plugin or theme conflict. Your users will not be impacted by your testing at the same time they may be viewing the front end of the website. Per Health Check & Troubleshooting, the plugin:

> Allows you to have a clean WordPress session, where all plugins are disabled, and a default theme is used, but only for your user until you disable it or log out.

---

## Moving Away from LearnDash Cloud

**Source:** [https://learndash.com/support/kb/resources/faqs/moving-away-from-learndash-cloud/](https://learndash.com/support/kb/resources/faqs/moving-away-from-learndash-cloud/)

Saying goodbye is never easy, but we understand that LearnDash Cloud may not suit all business needs. Before you cancel your LearnDash Cloud subscription, there are a few things you should do first:

## Backup and Migrate Your Data

The very first thing you should do before you cancel your LearnDash Cloud subscription is create an offsite backup of your entire site. You can use a plugin like[Solid Backups](https://solidwp.com/backups/)or****[UpdraftPlus](https://updraftplus.com/)to back up your site to cloud storage like Google Drive or even download the complete backup directly to your computer.

If you are moving to a different hosting provider, you can also migrate your site directly to the new one using a plugin like[All-in-One WP Migration](https://wordpress.org/plugins/all-in-one-wp-migration/).

## Update your DNS

If you have attached a custom domain to your LearnDash Cloud site, you will need to update your DNS to point to your new site. Your new hosting provider and domain registrar can help you through that process as each platform can vary.

If you purchased your domain through LearnDash, you will need to contact [Support](https://account.learndash.com/support/) to update your DNS whenever your new site is ready to go live. If you would like to transfer your domain to another registrar where you can manage your DNS, our Support Team can provide a ****[Domain Transfer Code](https://www.namecheap.com/support/knowledgebase/article.aspx/259/8/what-is-an-authepp-code/)to initiate the domain transfer with the new registrar.

## Canceling your LearnDash Cloud Account

There are two ways to cancel your LearnDash Cloud account. You can disable automatic renewals in your LearnDash Account to cancel at the end of the current billing cycle, or you can cancel immediately by [contacting](https://account.learndash.com/support/)****us.

![Disable Auto Renew to Cancel](https://learndash.com/support/wp-content/uploads/2024/10/cloud-disable-auto-renew-to-cancel.png)

Once your account has been flagged for cancellation, you will have 24 hours to migrate any additional content or data away from your site. After that, the account will be canceled, all content will be discarded and the site will be terminated.

---

## What are the different user roles in LearnDash and what permissions do they have?

**Source:** [https://learndash.com/support/kb/resources/faqs/what-are-the-different-user-roles-in-learndash-and-what-permissions-do-they-have/](https://learndash.com/support/kb/resources/faqs/what-are-the-different-user-roles-in-learndash-and-what-permissions-do-they-have/)

LearnDash works directly with WordPress’ built-in user roles and adds a few special roles to help manage courses, lessons, and other learning materials. Heres a clear guide to the different user roles in LearnDash and what each one can do.

### Default WordPress Roles

**1. Administrator**

- Full access to all administrative options and features.
- Can manage all aspects of the site, including installing plugins, managing users, and configuring LearnDash settings.

**2. Editor**

- Can manage and publish posts, including those created by other users.
- Can manage and publish courses, lessons, topics, quizzes, and assignments in LearnDash.

**3. Author**

- Can publish and manage their own posts.
- Can create and manage their own courses, lessons, topics, quizzes, and assignments in LearnDash.

**4. Contributor**

- Can write and manage their own posts but cannot publish them.
- Can create courses, lessons, topics, quizzes, and assignments but cannot publish them.

**5. Subscriber**

- Can only manage their own profile.
- Can enroll in courses and view their progress.

### LearnDash-Specific Roles

**1. Group Leader**

- Can manage and monitor the progress of users within specific groups assigned to them.
- Can view reports and results for their group members.
- Can communicate with group members and manage group assignments.

### LearnDash Specific Permissions Overview

**1. Administrator**

- Full access to LearnDash settings, course management, user management, and reporting.

**2. Editor**

- Create, edit, and publish courses, lessons, topics, quizzes, and assignments.
- Manage all LearnDash content.

**3. Author**

- Create, edit, and publish their own courses, lessons, topics, quizzes, and assignments.
- Manage their own LearnDash content.

**4. Contributor**

- Create and edit courses, lessons, topics, quizzes, and assignments.
- Cannot publish content without approval.

**5. Subscriber**

- Enroll in courses and view their own course progress and results.

**6. Group Leader**

- Manage and monitor users within their assigned groups.
- View reports and communicate with group members.
- Manage group assignments.

### If you’d like to further customize Roles and Capabilities:

You can use plugins like [User Role Editor](https://wordpress.org/plugins/user-role-editor/) if you need more granular control over user roles and permissions. This plugin lets you customize and create new roles with specific abilities that fit your needs

---

## What should I do if my course content is not displaying correctly?

**Source:** [https://learndash.com/support/kb/resources/faqs/what-should-i-do-if-my-course-content-is-not-displaying-correctly/](https://learndash.com/support/kb/resources/faqs/what-should-i-do-if-my-course-content-is-not-displaying-correctly/)

## Here are some steps that should help to identify and resolve the issue:

#### For Users with Elementor Addon –

If you’re using the Elementor addon, the issue might be related to the template configuration. Here’s what you can do:

1. **Check Template Configuration**:
- Ensure that your template contains the appropriate Elementor widgets for LearnDash. To do this, go to Elementor > My Templates in the WordPress admin area.
- Edit the template associated with your course, lesson, or topic.
- Verify that the necessary LearnDash widgets (Course List, Lesson List, Topic List, etc.) are included and configured properly.
2. **Update Elementor and LearnDash**:
- Ensure that both Elementor and LearnDash plugins are up to date. Updates often include fixes and improvements that can resolve display issues.
- Go to Dashboard > Updates to check for and install any available updates.
3. **Check for Conflicts**:
- Deactivate all other plugins except Elementor and LearnDash, then check if the content displays correctly. If it does, reactivate each plugin one by one to identify any conflicts.
- Temporarily switch to a default WordPress theme (Twenty Twenty-Four) to see if the issue persists, which can help determine if your theme is causing the problem.

### For Users Not Using Elementor –

If you’re not using Elementor and still experiencing issues, follow these steps:

1. **Review LearnDash Settings**:
- Go to LearnDash LMS > Settings and review your global settings to ensure everything is configured correctly.
- Check specific course, lesson, or topic settings by navigating to LearnDash LMS > Courses/Lessons/Topics and editing the relevant item. Ensure all required fields and settings are properly filled out and configured.
2. **Permalinks**:
- Go to Settings > Permalinks and click the Save Changes button. This will refresh your permalinks, which can often resolve display issues.
3. **Check Shortcodes**:
- If you’re using shortcodes to display LearnDash content, make sure they are correctly placed and formatted. Refer to the LearnDash documentation for the correct shortcode usage.
4. **Clear Cache**:
- Clear your sites cache if youre using a caching plugin. Also, clear your browser cache or try accessing the site in an incognito/private browsing window.

---

## Is there a way to export an individual course?

**Source:** [https://learndash.com/support/kb/resources/faqs/is-there-a-way-to-export-an-individual-course/](https://learndash.com/support/kb/resources/faqs/is-there-a-way-to-export-an-individual-course/)

By default, LearnDash does not offer a built-in feature to export a single course using the [LearnDash export/import tool](https://learndash.com/support/docs/developers/transferring-learndash-courses/). The tool allows for the export of courses, lessons, topics and quizzes collectively but does not facilitate exporting an individual course directly.

### Workaround Options

1. **Manual Recreation**: If the course is not extensive, you can manually recreate it in the target LearnDash installation.
2. **Database Export**: For a more technical approach, you could access your site’s database and export the specific tables related to that course. This method requires knowledge of database management and should be done with caution.

---

## Is there a shortcode for displaying a single lesson in LearnDash?

**Source:** [https://learndash.com/support/kb/resources/faqs/is-there-a-shortcode-for-displaying-a-single-lesson-in-learndash/](https://learndash.com/support/kb/resources/faqs/is-there-a-shortcode-for-displaying-a-single-lesson-in-learndash/)

Unfortunately, LearnDash doesn’t have a built-in shortcode specifically designed to display a single lesson directly. However, you can easily create a direct link to the lesson by using its permalink. Simply copy the URL from the address bar while viewing the lesson, and then place this link on any page or post you like.Alternatively, if you want to showcase a specific lesson, you can utilize lesson tags or categories with the[ld_lesson_list]shortcode. Here are some examples:

- **Show lessons with a specific tag:******[ld_lesson_list tag=”science”]
- **Show lessons with a specified tag ID:******[ld_lesson_list tag_id=”40″]
- **Show lessons with a specific category ID:******[ld_lesson_list cat=”5″]
- **Show lessons with a specified category slug:******[ld_lesson_list category_name=”science”]

### To manage your WordPress and LearnDash categories and tags, follow these steps:

1. Navigate toLearnDash LMS > Lessons.
2. Select theActionsdropdown menu.

![Manage LearnDash Categories and Tags](https://learndash.com/support/wp-content/uploads/2024/10/manage-learndash-categories-and-tags.png)

Choose your desired option to add, edit, or delete categories and tags.

---

## Can I use the same Stripe Purchase Button on multiple courses?

**Source:** [https://learndash.com/support/kb/resources/faqs/can-i-use-the-same-stripe-purchase-button-on-multiple-courses/](https://learndash.com/support/kb/resources/faqs/can-i-use-the-same-stripe-purchase-button-on-multiple-courses/)

Yes, you can. Since you are using LearnDash’s built-in “Buy Now” or “Recurring” access options, you can use the ```
learndash_payment_buttons
``` shortcode to generate the purchase link.

First, you need to find the Course ID for the course you want to create a purchase link for.

1. Go to LearnDash LMS > Courses:
- Find the course you want to link to and hover over the course name.
- The Course ID will be displayed in the URL at the bottom of your browser. For example: 
```
post=1234
```

.

You can use the 
```
learndash_payment_buttons
```

 shortcode to create a purchase button on any page.

```
[learndash_payment_buttons course_id="1234"]
```

For more information, see: [Shortcodes and Blocks – LearnDash Support](https://learndash.com/support/docs/core/shortcodes-blocks/#learndash_payment_buttons_learndash_payment_buttons)

---

## Do I need a plugin to do drip feeding?

**Source:** [https://learndash.com/support/kb/resources/faqs/do-i-need-a-plugin-to-do-drip-feeding/](https://learndash.com/support/kb/resources/faqs/do-i-need-a-plugin-to-do-drip-feeding/)

You dont need to purchase an additional plugin to enable drip-feeding lessons in LearnDash, as this feature is built directly into LearnDash LMS. You can easily schedule the release of lessons based on time intervals after a student enrolls or set them for specific calendar dates.

To enable lesson drip-feeding, please follow these steps:

- Navigate to LearnDash LMS > Lessons
- Click on the lesson you want to edit.
- Go to the Settings tab at the top of the page.
- Locate the section titled Lesson Access Settings.

### You have the following options:

- **Immediately (default)**: The lesson is made available as soon as the user is enrolled in the course.
- **Enrollment-based**: The lesson will be available X days after the user enrolls in the course.
- **Specific date**: The lesson will be available on a specified date.

**Note**: If you set 1 Day, it means 24 hours from enrollment, not the next day at midnight. Similarly, 2 Days means 48 hours, and so on.

---

## What plugins can be used with LearnDash for math equation editing?

**Source:** [https://learndash.com/support/kb/resources/faqs/what-plugins-can-be-used-with-learndash-for-math-equation-editing/](https://learndash.com/support/kb/resources/faqs/what-plugins-can-be-used-with-learndash-for-math-equation-editing/)

For math equation editing in LearnDash, you can use the following plugin:

**Wooninjas LearnDash Arithmetic Quiz Add-on**: This plugin enables you to create quizzes that include arithmetic-based questions. It can be a helpful tool if you’re looking to integrate math equations into your quizzes.

You can find more information and download the plugin here: [LearnDash Arithmetic Quiz Add-on by Wooninjas](https://wooninjas.com/downloads/learndash-arithmetic-quiz/).

---

## How to Manually Install and Update Plugins from WordPress.org

**Source:** [https://learndash.com/support/kb/resources/faqs/how-to-manually-install-and-update-plugins-from-wordpress-org/](https://learndash.com/support/kb/resources/faqs/how-to-manually-install-and-update-plugins-from-wordpress-org/)

In some cases, server configurations or other issues may prevent automatic plugin updates directly from the WordPress Dashboard. If you find that you are not able to update your free WordPress.org hosted plugin with the standard WordPress update features, this guide will help you do so manually.

This is an example of a WordPress.org timeout error:

![](https://learndash.com/support/wp-content/uploads/2024/09/wp-engine-upload-error-1536x327-1.png)

### Step 1: Create a Backup

Before starting any manual plugin updates, it’s essential to perform a full site backup. While updating plugins should keep all your data intact, it’s always a good practice to have a backup in place to safeguard your site in case anything unexpected happens.

### Step 2: Download the ZIP file from WordPress.org

The first step is to download the latest version of the plugin from WordPress.org.

[Here is the Restrict Content plugin page on WordPress.org](https://wordpress.org/plugins/restrict-content/) as an example.

Once you are there, you’ll see a Download button towards the upper right of the page, below the plugin banner. Click on that to Download the latest version of the plugin you are trying to install.

![](https://learndash.com/support/wp-content/uploads/2024/09/1-rc-in-wp-plugin-repo-1536x815-1.png)

Now you should have a ZIP file in your Downloads folder for the plugin.

**NOTE**: Some browsers (specifically Safari) automatically unzip ZIP files upon download. If you see a folder instead of a ZIP file, youll need to ZIP that folder before proceeding.

### Step 3: Upload the ZIP file to your WordPress Website

Next you need to upload this ZIP file to your WordPress website. The WordPress plugin update system allows you to update a plugin simply by uploading the new ZIP file and it handles the update automatically.

To do this, navigate in your WordPress admin to Plugins > Add New Plugin. From there click on Choose File. That will open your computers file system for you to find the ZIP file you previously downloaded. Choose that and submit.

![](https://learndash.com/support/wp-content/uploads/2024/09/2-rc-upload-new-plugin.png)

Once the file is fully uploaded, you should see a message that WordPress has detected that you already have this plugin installed. It will ask you whether you want to Replace current with uploaded or Cancel and go back. Click Replace current with uploaded to update your plugin.

![](https://learndash.com/support/wp-content/uploads/2024/09/3-replace-old-w-new-rc-3.png)

The system will now update your plugin to the latest version. Thats it!

---

## What is the best way for me to bundle courses using LearnDash?

**Source:** [https://learndash.com/support/kb/resources/faqs/what-is-the-best-way-for-me-to-bundle-courses-using-learndash/](https://learndash.com/support/kb/resources/faqs/what-is-the-best-way-for-me-to-bundle-courses-using-learndash/)

Creating and offering course bundles in LearnDash can be effectively achieved using the built-in User Groups feature. This approach is simple, avoids third-party plugins, and uses LearnDash’s native capabilities. Heres a step-by-step guide:

### Step 1: Set Up User Groups in LearnDash

1. **Create a New User Group:**
- Navigate to LearnDash LMS > Group**s** in your WordPress dashboard.
- Click Add New to create a new group.
- Name your group (e.g., “Course Bundle A”) and save the group.
2. **Add Courses to the Group:**
- In the group editor, locate the Group courses tab.
- Add the courses you want to bundle by selecting them from the list.
3. **Assign Group Leaders (Optional):**
- If you want someone to manage the group, assign a Group Leader under the Group Leaders tab.

### Step 2: Configure Access and Enrollment

1. **Set Enrollment Access:**
- Under the Group Access Settings tab, set the access mode to Buy Now or Recurring depending on your preferred payment model:
- **Buy Now:** Allows users to make a one-time purchase to access the bundle.
- **Recurring:** Sets up a subscription model where users pay periodically (e.g., monthly) for continued access.
- Enter the price for the bundle and configure any additional settings like access duration or subscription intervals.
2. **Payment Integration:**
- Ensure your payment gateway is set up under LearnDash LMS > Settings > PayPal/Stripe to handle transactions seamlessly.

### Step 3: Offer the Bundle

1. **Publish the Group:**
- Once everything is configured, publish the group to make it available for purchase.
2. **Promote the Bundle:**
- Share the bundle on your website, social media, or through email marketing to attract learners.

### Advanced Options with Premium Add-ons

- **Group Registration**: For advanced group management features
- **Groups Plus**: Offers additional features like group-specific certificates, leaderboards, and detailed reporting.

### Resources

- [LearnDash Groups Documentation](https://learndash.com/support/docs/users-groups/groups/)
- [LearnDash Payment Integration Guide](https://learndash.com/support/docs/core/settings/payments/)

By following these steps, you can create and manage course bundles in LearnDash, allowing users to easily purchase and access multiple courses at once.

---

## WisdmLabs Acquisition FAQ

**Source:** [https://learndash.com/support/kb/resources/faqs/wisdmlabs-acquisition-faq/](https://learndash.com/support/kb/resources/faqs/wisdmlabs-acquisition-faq/)

### Who owns WisdmLabs products?

WisdmLabs LearnDash Add-ons are the newest acquisition to join the LearnDash suite of online learning and training solutions.The following Add-ons are now under LearnDash ownership:

- [Instructor Role](https://www.learndash.com/instructor-role/)
- [Ratings, Reviews & Feedback](https://www.learndash.com/ratings-reviews-feedback/)
- [Reports for LearnDash](https://www.learndash.com/reports-for-learndash/)
- [Group Registration](https://www.learndash.com/group-registration/)
- [Content Cloner](https://www.learndash.com/content-cloner/)
- [eLumine Theme](https://www.learndash.com/elumine/)

### What is going to change with the Add-Ons?

No immediate changes will be made. We plan to address issues with the Add-ons that users have identified previously and to improve functionality overall. Our goal is to make products you rely on work even better than before.

### Are any of the products going to be discontinued?

All WisdmLabs Add-ons are fully functional, as you expect them to be, andyou can download them all from your[Accounts dashboard](https://account.learndash.com/plugins/)under the Subscriptions tab.

### Are WisdmLabs Add-ons included in LearnDash Cloud plans?

Currently, the Add-ons are only available for purchase individually.

### Where can I access WisdmLabs Add-ons?

You can access any of your purchased LearnDash Add-ons in your[Accounts dashboard](https://account.learndash.com/plugins/)under the Subscriptions tab.

### How can I access my license?

You can view your licenses by going to your[LearnDash Account page](https://account.learndash.com/)under theSubscriptionstab. You will see all your active and expired licenses.

### What if I purchased WisdmLabs with a different email address?

If you purchased WisdmLabs with a different email address, you will have two accounts and will need to log in to the correct one. Please contact us if you would like to have these merged. You may also reach us directly atsupport@learndash.com.

### My License isnt working, how can I fix this?

Weve had a few licenses that have not transferred over properly but were already working on this. If you are experiencing errors with your licensing please contact our Billing team by logging into your[LearnDash account](https://account.learndash.com/support/)and selecting the Support tab. You can also reach us directly at[billing@learndash.com](mailto:billing@learndash.com).****Please be sure to provide the license and any relevant information.

### Where can I submit a support ticket?

You can submit a support ticket by logging into your LearnDash account and selecting the Support tab. You may also reach us directly atsupport@learndash.com.

---

## Your Add-Ons and Plugins are Officially Migrating to LearnDash FAQs

**Source:** [https://learndash.com/support/kb/resources/faqs/your-add-on-and-plugins-are-officially-migrating-to-learndash-faqs/](https://learndash.com/support/kb/resources/faqs/your-add-on-and-plugins-are-officially-migrating-to-learndash-faqs/)

The WordPress ecosystem is as dynamic as when it was first released. We have a multitude of plugins, themes, add-ons, widgets, etc., from a multitude of users and developers. It’s the symbiosis of having users need a particular function to having developers interested and motivated enough to make those functions possible and accessible. That’s the nature of being open-sourced, which WordPress is.

And LearnDash is a part of that ecosystem, and we try to make it a point to be able to provide our users with everything that they need to have a successful learning platform on their website. Even giving extended functionalities beyond our core plugin and installation by using add-ons.

With that said, we, and our parent company StellarWP might also acquire certain plugins and add-ons from other developers. Here’s a quick FAQ on what you should expect if your current plugins or add-ons officially migrate to LearnDash and becomes officially supported by LearnDash.

## What will happen to my account?

You can continue to use your LearnDash add-on as normal. No changes are being made to the functionality at this time.

## What will happen to my data?

Your data will be governed by the[Privacy Policy](https://www.learndash.com/privacy-policy/).

## Will your refund policy remain the same?

Your refund policy going forward will be governed by the LearnDash[Terms and Conditions](https://www.learndash.com/terms-and-conditions/).

## Will I still be able to access support for my add-on?

Support will be available through the original vendor unless otherwise directed until the transfer to learndash.com occurs. After the transition, support will continue through the[support docs](https://learndash.com/support/), and help desk tickets which you may open through[your customer account](https://support.learndash.com/contact-support).

## Are any add-on features being removed?

No. There are no immediate changes to add-on features.

## Will the add-on continue to receive updates?

Yes. updates and improvements will continue with LearnDash, only now there are additional resources committed to future development.

## Will prices go up?

At launch, some minor changes may occur to standardize plans, like shifting from a 5-license plan to a 10-license or adjusting unlimited install pricing. but that will be the exception, not the rule.

## Will my subscription renew at the end of my current subscription period?

Credit card transactions through Stripe, our payment gateway will continue. PayPal subscriptions will be in our e-commerce system but the payment itself will need to be reauthorized. Otherwise, the billing process will remain the same.

## I am an affiliate, what does this mean for me?

The affiliate program from the previous vendor will end at the time of transition unless otherwise directed. Affiliates may continue earning commissions by joining the[LearnDash affiliate program available here](https://www.learndash.com/affiliates/).

## What is happening to the add-on development team?

This will change from team to team based on individual situations. Your previous vendor will likely tell you their plans as they wind down their existing sales. Keep an eye on your inbox for important updates.

---

## Why are the license updates and license checks disabled?

**Source:** [https://learndash.com/support/kb/resources/faqs/why-are-the-license-updates-and-license-checks-disabled-on-my-site/](https://learndash.com/support/kb/resources/faqs/why-are-the-license-updates-and-license-checks-disabled-on-my-site/)

![](https://learndash.com/support/wp-content/uploads/2020/06/Screenshot-2020-06-23-09.17.41.png)

If you see the above message on your WordPressdashboard, then this indicates that the LearnDash update and license checks have been disabled using the following define (located in the wp-config.php file of your site):

```
// Add the define and the code to your wp-config.php. 
/// Do not add to the theme functions.php because it needs to be set before LearnDash is loaded by WordPress.

// For LearnDash 3.1.8 and higher only this define is needed.
if ( ! defined( 'LEARNDASH_UPDATES_ENABLED' ) ) {
	define( 'LEARNDASH_UPDATES_ENABLED', false );
}

// For LearnDash 3.1.7 and lower the define and snippet ar needed.
if ( ! defined( 'LEARNDASH_ADDONS_UPDATER' ) ) {
	define( 'LEARNDASH_ADDONS_UPDATER', false );
}

if ( ! class_exists( 'LearnDash_Addon_Updater' ) ) {
	class LearnDash_Addon_Updater {
		protected static $instance = null;

		public static function get_instance() {
			if ( ! isset( static::$instance ) ) {
				static::$instance = new static();
			}

			return static::$instance;
		}

		public function __call( $name, $arguments ) {
			return;
		}
	}
}
```

**IMPORTANT:** All snippets are provided as-is without support or guarantees. These snippets are provided as guidelines for advanced users looking to customize LearnDash. For any additional help or support with these snippets, we recommend reaching out to a [LearnDash Expert](https://learndash.com/experts).

To activate update and license checks again, simply remove the above code from your 
```
wp-config.php
```

 file.

**NOTE**: Turning off update and license checks will result in an invalid license and the inability to use the automatic update (or install) feature for the LearnDash plugin, ProPanel, and all other LearnDash add-ons. The Add-ons menu will not be displayed until licensing is validated again. LearnDash may still work but we cannot guarantee compatibility with future versions of WordPress, so we encourage that this setting only be turned off temporarily.

---

## Page Builders + LearnDash

**Source:** [https://learndash.com/support/kb/resources/faqs/page-builders-2/](https://learndash.com/support/kb/resources/faqs/page-builders-2/)

One of the most common set of questions our support team gets asked is how LearnDash works with page builders.

- Which page builder plugins are compatible with LearnDash?
- What’s the best page builder to use?
- How do I customize the layout of my LearnDash courses, lessons and topics with a page builder?
- Can I use a free page builder or do I need the pro version?

In this comprehensive guide, we’ll answer all of those questions, as well as walk you through exactly *how* to use specific page builders to best design your LearnDash courses. We’ll focus on three of the most popular WordPress page builders:

- [Elementor Pro](https://learndash.com/elementor)
- [Beaver Builder](https://www.wpbeaverbuilder.com/)
- [Divi](https://www.learndash.com/divi)

**NOTE**: While we can work with the limited features of the free version of these page builders, especially Elementor, there will be certain limitations to the functionality. If you’re experiencing problems or are not seeing any functionality that you need from the below documentation, it’s likely that you need to upgrade to the Pro version. Elementor Pro is recommended if you plan to integrate fully with LearnDash, along with the other pro versions of the other page builders.

Before we dive into the specifics of each, it’s important to understand what a page builder can and cannot do. We’ll also cover some basics that apply to how all page builders interface with LearnDash, no matter which one you choose to use.

**NOTE** This guide assumes you are using the [LearnDash 3.0 active template](https://learndash.com/support/docs/core/settings/general-settings/#active_template). With the exception of Elementor (which requires LearnDash 3.0), most of the concepts also apply to the Legacy template, but there could be some inconsistencies. We’ll also be using the new WordPress editor (aka: Gutenberg). Screenshots will look different if you’re using the Classic Editor plugin.

## How Page Builders Work

An entire book could be written on this topic, but that’s obviously not the focus of this article. However, there are a few basic things you should understand about how page builders work.

- Almost all page builders let you design the main content of a page, post, course, lesson or other custom post type. Essentially, the same content that you would add via the default WordPress editor.This does not include your site’s header, sidebars or footer.
- Most pro versions or premium page builders do let you design your site’s header, sidebars and footer. (Elementor Pro’s Theme Builder, Beaver Themer, etc.)
- All page builders come with their own set of elements that you can use to design and lay out your content (columns, headings, lists, tables, icons, photo galleries, etc.).
- These differ depending on the page builder you’re using, as well as the free vs pro version of that particular builder.

Keeping in mind the type of content a page builder has control over, let’s talk about how LearnDash content is added to your site’s pages.

## How LearnDash Adds Content to the Page

There are several ways LearnDash content gets added to a page. The differences are important to understand, as they directly apply to whether or not they can be controlled or modified via a page builder.

### Dynamic Content

Dynamic content refers to content that you, the site owner, does not directly add in the WordPress editor. Based on the type of page that a user is viewing (course vs. lesson vs. topic), as well as how that course is configured, LearnDash automatically adds content to the page.

Examples of dynamically added LearnDash content include, but are not limited to:

- **On a course page:** For non-enrolled users, the current status, price and get started sections at the top. For enrolled users, the date of last activity, progress bar and status indicator.
- **On a course page:** The course content list at the bottom, which contains all lessons, topics and quizzes assigned to that course
- **On a lesson page:** The list of topics assigned to that lesson
- **On lesson/topic pages:** The assignments area, which provides a way for the user to upload assignments, and lists all uploaded assignments
- **In Focus Mode:** The header, which includes a logo (optional), course progress, navigation buttons, and an avatar with dropdown menu
- **In Focus Mode:** The sidebar, which contains the course title and navigation links

.wp-block-kadence-iconlist.kt-svg-icon-list-items3167_05d7ed-ec:not(.this-stops-third-party-issues){margin-top:0px;margin-bottom:0px;}.wp-block-kadence-iconlist.kt-svg-icon-list-items3167_05d7ed-ec ul.kt-svg-icon-list:not(.this-prevents-issues):not(.this-stops-third-party-issues):not(.tijsloc){margin-top:var(--global-kb-spacing-lg, 3rem);margin-right:0px;margin-bottom:var(--global-kb-spacing-lg, 3rem);margin-left:0px;}.wp-block-kadence-iconlist.kt-svg-icon-list-items3167_05d7ed-ec ul.kt-svg-icon-list{grid-row-gap:18px;}.wp-block-kadence-iconlist.kt-svg-icon-list-items3167_05d7ed-ec .kb-svg-icon-wrap{font-size:27px;color:var(--global-palette1, #3182CE);}.wp-block-kadence-iconlist.kt-svg-icon-list-items3167_05d7ed-ec ul.kt-svg-icon-list .kt-svg-icon-list-item-wrap .kt-svg-icon-list-single{margin-right:18px;}.kt-svg-icon-list-items3167_05d7ed-ec ul.kt-svg-icon-list .kt-svg-icon-list-level-0 .kt-svg-icon-list-single svg{font-size:20px;}
- **You CAN**edit LearnDash dynamic content with Elementor (using our [compatibility integration](https://learndash.com/support/docs/add-ons/compatibility/#elementor_integration))
- **You cannot**edit LearnDash dynamic content with Divi
- **You cannot** edit LearnDash dynamic content with BeaverBuilder

**DEVELOPERS** If you’re comfortable with HTML and PHP, you can override LearnDash template files. This allows you to customize the dynamic content, as well as change where on the page it gets inserted. *Technical experience required.*

### Your Own Course, Lesson, Topic & Quiz Content

This refers to the content which you, the site owner, have direct control over. For all course, lesson, topic and quiz pages, you can freely add and edit whatever content you’d like.

If you’re using a page builder, you can design this content with your page builder of choice.

However, LearnDash determines *where on the page* it will go.

![Your custom content in LearnDash focus mode](https://learndash.com/support/wp-content/uploads/2019/09/learndash-page-builders-your-own-content-2.jpg)

For example, on a lesson page (using [Focus Mode](https://learndash.com/support/docs/guides/focus-mode/)), your own content will always be placed after the breadcrumbs and before the next and previous lesson buttons. If you’ve added materials to the lesson, two tabs will be inserted dynamically:

- Lesson
- Materials

Your own lesson content will be added directly below the “Lesson” tab.

Keep in mind, only your own content, added in this specific area, can be edited with a page builder. All other page elements in Focus Mode are controlled solely by LearnDash (or by using one of two popular third-party LearnDash design plugins, [Design Upgrade Pro](https://escapecreative.com/products/design-upgrade-learndash/) or [Visual Customizer](https://www.learndash.com/customizer)).

### LearnDash Blocks

LearnDash blocks provide a way for you to add specific LearnDash information to the main content area of a page, but only if you’re using the latest version of the WordPress editor (aka: Gutenberg). **Blocks only work within Gutenberg.**

A few examples of LearnDash blocks include:

- LearnDash Profile: displays a user’s profile and registered courses
- LearnDash Course List: displays a list of courses, or a grid if using the Course Grid add-on
- LearnDash Course Progress: displays a progress bar showing the user’s progress in that course

![List of LearnDash blocks in editor](https://learndash.com/support/wp-content/uploads/2018/09/learndash-blocks-list-in-editor.jpg)

When using a page builder, there is no way to add a LearnDash block to your page.

### LearnDash Shortcodes

Every LearnDash block has an accompanying shortcode. A shortcode is a simple piece of text that outputs specific LearnDash information. Many shortcodes come with parameters (or options) that let you customize which information is displayed. See our [complete guide on LearnDash shortcodes](https://learndash.com/support/docs/core/shortcodes-blocks/).

A shortcode looks like this:

```
[ld_profile]
```

This example outputs a user profile, complete with their profile image, name, some basic stats, and a list of courses they’re enrolled in, along with their progress in each.

The big advantage of shortcodes over blocks is that they can be used with all page builders.

Exactly how to use LearnDash shortcodes depends on which page builder you are using, which we’ll go into more detail below.

### LearnDash Widgets

Widgets are a core part of WordPress. They are pieces of functionality that can easily be added to any WordPress sidebar area. LearnDash provides a handful of widgets as well. LearnDash widgets provide the ability to add course navigation, course lists, and other various course elements. We have a [complete guide on widgets here](https://learndash.com/support/docs/core/widgets/).

The following page builders allow the use of LearnDash widgets:

**Elementor:** Free and Pro
**Beaver Builder:** Free and Pro
**Divi:** No (you can add entire sidebar areas but not individual widgets)

### An Exception: Focus Mode

Focus Mode works a bit differently than the rest of the pages on your site. The same ideas for how content is added still apply, but when Focus Mode is enabled, your site’s normal header, sidebar and footer are removed.

- The header is dynamic content, not editable with a page builder
- The sidebar course navigation is dynamic content, not editable with a page builder
- The page title, progress meter and breadcrumbs are dynamic content, not editable with a page builder
- The lesson, topic and quiz content (below the breadcrumbs) is your own content, and this **is** editable by a page builder

### Summary

- Dynamically added by LearnDash is **only**editable with Elementor (using our [compatibility add-on](https://learndash.com/support/docs/add-ons/compatibility/#elementor_integration))
- Focus Mode design elements cannot be edited with page builders
- All content added by you, via the WordPress editor, is editable with page builders
- When designing with a page builder, use LearnDash shortcodes and widgets (not blocks)

## Choosing a Theme

If you want to use a page builder with LearnDash, the theme you choose will have some impact on how you can design your content. Just about all WordPress themes work with page builders (and with LearnDash), but some work *better*.

In general, themes that explicitly provide page builder support will give you more control over the design of your courses. A few popular themes that have been specifically designed for use with page builders are:

- [Astra](https://support.learndash.com/astra-theme)
- [GeneratePress](http://bit.ly/1RPT586)
- [OceanWP](https://oceanwp.org/)

You don’t have to use one of these themes. All WordPress themes (built to the proper standards) work with LearnDash. We just wanted to highlight the ones that give you the most flexibility.

### General Page Layout

Using one of the aforementioned themes provides you with some advantages over other themes, particularly when it comes to using a page builder.

**NOTE**: These settings vary from theme to theme. Not all themes will have these options, but the themes mentioned above have some variation of them.

- **Content width:** Multiple options are typically available for narrow, wide, full-width and/or 100% stretched
- **Sidebars:** You can choose to enable/disable the sidebar on individual pages, or choose which side it should appear (right or left)
- **Disable page title:** This allows you to hide the default page title that is included at the top of the page, and add your own using a page builder
- **Disable featured image:** This allows you to hide the featured image that is usually displayed at the top of your course page

Here are a few examples:

![Astra page settings](https://learndash.com/support/wp-content/uploads/2019/09/astra-page-settings-gutenberg.jpg)

![GeneratePress page settings](https://learndash.com/support/wp-content/uploads/2019/09/generatepress-page-settings-gutenberg.jpg)

![OceanWP page settings](https://learndash.com/support/wp-content/uploads/2019/09/oceanwp-page-settings-gutenberg.jpg)

**NOTE**: If you want to control your layout & spacing completely with a page builder, you probably want to set your page settings to use no sidebar, and a content width of “full” or “stretched.”

Before we get into specific examples with each page builder, let’s make sure your builder is enabled for use with LearnDash.

## Enable Page Builder for LearnDash Post Types

Before you can use a page builder with LearnDash, you need to ensure that you’ve enabled the page builder to work with LearnDash custom post types. If you can’t find a way to edit a piece of LearnDash content using your page builder, try following these steps to enable it.

### Elementor

See [https://learndash.com/support/docs/add-ons/learndash-elementor-addon/](https://learndash.com/support/docs/add-ons/learndash-elementor-addon/) for more information regarding our LearnDash Elementor integration.

### Beaver Builder

1. Navigate to Settings > Beaver Builder
2. Click on  Post Types
3. Check the boxes for Courses, Lesson, Topics and Quizzes (or just select the ones you need)
4. Click  Save Post Types

![Enable LearnDash post types in Beaver Builder](https://learndash.com/support/wp-content/uploads/2019/09/beaver-builder-enable-learndash-post-types.jpg)

### Divi

By default, Divi should be enabled for courses & lessons, but if you want to use it with topics and/or quizzes, you’ll need to enable it.

1. Navigate to DIVI > Plugin Options
2. Click on the  Post Types Integration  tab
3. Click the post types for Topics and Quizzes (or just select the ones you need)
4. Click  Save Settings

![Enable LearnDash post types in Divi](https://learndash.com/support/wp-content/uploads/2019/09/divi-enable-learndash-post-types.jpg)

If using Divi as a theme, please follow the below steps:

- Navigate to **Divi > Theme Options**
- Click on the “Builder” Tab, then go to the “Post Types Integration” tab
- Click to enable the post types for Topics & Quizzes (or just select the ones you need)
- Click “Save Changes”

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcENtza38ePZSpHeU_4HHmoovZXGzwPqWuXGgo_xaiOs237rPCLQhuwGcGoniIGFamx1ofFtBEleEmdMYFmErglNv9mAC5i-zO8c7ollFN69FNMikQw7eSeC1XsKWE1E-ZcHfD3?key=V5tONnbYKhxQNIssE1mLTg)

## Using Shortcodes with Page Builders

Shortcodes are one of two ways you can add LearnDash-specific content using a page builder. Let’s go through exactly how to add use shortcodes in each page builder.

### Elementor

See [https://learndash.com/support/docs/add-ons/learndash-elementor-addon/](https://learndash.com/support/docs/add-ons/learndash-elementor-addon/) for more information regarding our LearnDash Elementor integration.

### Beaver Builder

When you go to edit a piece of LearnDash content, you’ll have a  Launch Beaver Builder  button where your content would normally appear. Click this button to open your content with Beaver Builder.

![Edit LearnDash content with Beaver Builder button](https://learndash.com/support/wp-content/uploads/2019/09/learndash-launch-beaver-builder-button.jpg)

You won’t see any dynamically added LearnDash content in your preview until you publish the course. The content you add will be placed in-between LearnDash’s dynamic content.

To add a shortcode to your page with Beaver Builder:

1. Locate the  HTML  module in the left panel
2. Click, hold and drag the module somewhere on the page
3. In the left panel, type any [LearnDash shortcode](https://learndash.com/support/docs/core/shortcodes-blocks/)
4. Click the  Save  button at the bottom to preview it
5. When you’re finished editing, be sure to click the  Done  button in the top-right corner, and then either  Publish  or  Update  to save your changes

![Add LearnDash shortcode with Beaver Builder](https://learndash.com/support/wp-content/uploads/2019/09/beaver-builder-add-learndash-shortcode-animation-min.gif)

### Divi

When you go to edit a piece of LearnDash content (course, lesson, topic or quiz), you’ll see a  Use The Divi Builder  button at the top. Click this button to open your content with Divi.

![Launch Divi builder on LearnDash content](https://learndash.com/support/wp-content/uploads/2019/09/learndash-launch-divi-button.jpg)

When you first launch Divi, you might be prompted with a few options:

- Build from Scratch
- Choose a Premade Layout
- Clone Existing Page

Choose the option that best meets your needs. You will then be sent to Divi’s visual builder screen.

To add a shortcode to your page with Divi:

1. Click the green **+** icon to add a new row
2. Choose the the layout of your row
3. Then choose the  Code  module *(the Text module will also work)*
4. Type in any LearnDash shortcode
5. Click the green checkmark icon
6. When you’re finished editing, be sure to click the three dots at the bottom of the screen, and then the  Save  button

![Add LearnDash shortcode using Divi](https://learndash.com/support/wp-content/uploads/2019/09/divi-add-learndash-shortcode-animation-min.gif)

## Using Widgets with Page Builders

In addition to shortcodes, widgets are another method of adding LearnDash content via a page builder. Let’s cover the specifics of each page builder that allows for the use of LearnDash widgets.

### Elementor

See [https://learndash.com/support/docs/add-ons/learndash-elementor-addon/](https://learndash.com/support/docs/add-ons/learndash-elementor-addon/) for more information regarding our LearnDash Elementor integration.

### Beaver Builder

The same widgets mentioned above (for Elementor) are also available for Beaver Builder.

To add a LearnDash widget to your page with Beaver Builder:

1. Click, hold and drag the widget somewhere on the page
2. In the left panel, either switch your module group to “WordPress Widgets” or use the search feature
![Locate LearnDash widgets in Beaver Builder](https://learndash.com/support/wp-content/uploads/2019/09/beaver-builder-locate-learndash-widgets-animation-min.gif)
3. *(optional)* In the left panel, give your widget a title and adjust the available settings
4. When you’re finished editing, be sure to click the Done  button in the top-right corner, and then either  Publish  or  Update”  to save your changes.
5. Locate the widget you want to add

![Add LearnDash widget using Beaver Builder](https://learndash.com/support/wp-content/uploads/2019/09/beaver-builder-add-learndash-widget-animation-min.gif)

## Basic Content Editing with Page Builders

Now that you know how to add LearnDash shortcodes and widgets to your favorite page builder, let’s talk about a few basic editing rules that apply to all page builders when you’re working with LearnDash.

### Conditionally Show/Hide Content

LearnDash provides a few shortcodes you can use to show content to a specific type of user:

```
[student] and [/student]
```

- 

– Only visible to someone who **is** registered for the course

```
[visitor] and [/visitor]
```

– Only visible to someone who **is not** registered for the course

These can be especially useful for:

- providing registered students with student-only content on the course page
- displaying a sign-up/purchase message to non-registered users when they’re viewing [sample lessons](https://learndash.com/support/docs/guides/sample-lessons/)
- …or any number of other creative applications

Unlike other LearnDash shortcodes, these cannot be used within a shortcode widget. **They must be used within a text editor or HTML widget.**

- **Elementor:** Use the  Text Editor  or  HTML  widget
- **Beaver Builder:** Use the  Text Editor  or  HTML  widget
- **Divi:** Use the  Text  or  Code  widget

You can place any content you’d like between the shortcodes, just make sure it is all contained within the same element. You **cannot** have an opening 
```
[student]
```

 shortcode in one element, add some content in subsequent elements, and then place your closing 
```
[/student]
```

 shortcode in another element.

**NOTE**:  If you’re using the free Uncanny LearnDash Toolkit, you can also use the [[uo_show] shortcode](https://www.uncannyowl.com/knowledge-base/show-hide-content/) to show content to logged in vs. logged out users (regardless of course enrollment status).

#### Elementor Example

![Elementor student/visitor shortcodes example](https://learndash.com/support/wp-content/uploads/2019/09/elementor-student-visitor-shortcodes-example.jpg)

#### Beaver Builder Example

![Beaver Builder student/visitor shortcode example](https://learndash.com/support/wp-content/uploads/2019/09/beaver-builder-student-visitor-shortcodes-example.jpg)We recommend using the “Text Editor” module in Beaver Builder

#### Divi Example

![Example student/visitor shortcode in Divi](https://learndash.com/support/wp-content/uploads/2019/09/divi-learndash-student-visitor-shortcode-example.jpg)We recommend using the “Text” module in Divi

## FAQ

**I’m using a page builder not mentioned in this article. Can I still use it with my LearnDash-powered site?**
Yes. The same principles mentioned in this article apply to all WordPress page builders. The widgets and modules you use might be named differently, but the concepts are the same.

---

## Why is the registration form not showing?

**Source:** [https://learndash.com/support/kb/resources/faqs/why-is-the-registration-form-not-showing/](https://learndash.com/support/kb/resources/faqs/why-is-the-registration-form-not-showing/)

If you cant find the registration form on your site, make sure you enable registration for your WordPress site.

1. Navigate to Settings > General in WordPress
2. Select the Anyone can register checkbox next Membership
3. Click Save Changes

![](https://learndash.com/support/wp-content/uploads/2019/06/enable-registration-for-wordpress.png)

Once this is done, if you want to customize the registration process check out these helpful docs:

- [Registration](https://learndash.com/support/docs/core/settings/registration/)
- [The New LD 3.6 Registration Process](https://learndash.com/support/docs/guides/the-new-ld-3-6-registration-process/)
- [LearnDash Login and Registration](https://learndash.com/support/docs/guides/login-registration/learndash/)

---

## How can I make email notifications send on time?

**Source:** [https://learndash.com/support/kb/resources/faqs/email-notifications-send-time/](https://learndash.com/support/kb/resources/faqs/email-notifications-send-time/)

If you’re using the LearnDash [notifications add-on](https://learndash.com/support/docs/add-ons/notifications/), you might experience a delay in the timing of your email notifications. This is partially a limitation of WordPress, but also depends on the type of [hosting](https://learndash.com/support/docs/getting-started/hosting/) you have.

In some cases, you might need to add a custom cron job on your server. This process differs depending on your host, so please reach out to your host’s support team for help. If you’re using cPanel, you can follow the instructions below:

## Create Cron Job in cPanel

1. Login to cPanel
2. Search for & locate “Cron Jobs” (typically found in the “Advanced” section)
3. Add this command:

```
* * * * * wget -q -O - 'https://yoursite.com/wp-cron.php?doing_wp_cron&cron=true'
```

![Example cron job for LearnDash notifications](https://learndash.com/support/wp-content/uploads/2019/04/learndash-notifications-cron-job-cpanel-command-368x400.png)

**NOTE**: Some shared hosting services will not allow cron jobs to run once per minute. This could mean your notifications will be sent later than intended. Please contact your host about cron job limitations.

## Using WP Crontrol Plugin

You can also manage the notification schedule using the [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/) plugin. This lets you view and adjust WordPress scheduled tasks (cron events) directly from your dashboard.

1. **Go to Tools > Cron Events**
2. **Search for the hook:***Learndash_notifications_cron*. This is the scheduled task that controls when LearnDash email notifications are processed.
3. **Click “Edit” next to the hook**. From here, you can update how frequently this task runs.
4. **Set a more frequent schedule**. Change the recurrence to something like **hourly** instead of the default (usually twice daily) for quicker processing.
5. **Save your changes**. The new schedule will help ensure LearnDash notifications are checked and sent more often.

![WPControl LearnDash notifications](https://learndash.com/support/wp-content/uploads/2019/04/wp-control-learndash-notifications.jpeg)

---

## Can I hide the course content table on the course page?

**Source:** [https://learndash.com/support/kb/resources/faqs/hide-course-content-table/](https://learndash.com/support/kb/resources/faqs/hide-course-content-table/)

Yes. Please see the “Course Content” section of our [Course Display & Content Settings article](https://learndash.com/support/docs/core/courses/course-display/#course_content) for the setting to hide the course content for only those enrolled into the course.

---

## Can I create a unique sidebar for courses, lessons & quizzes?

**Source:** [https://learndash.com/support/kb/resources/faqs/create-unique-sidebar/](https://learndash.com/support/kb/resources/faqs/create-unique-sidebar/)

Different WordPress themes provide different options for sidebars. Thankfully, there are a few plugins that make creating & positioning sidebars easy, regardless of your theme. Try one of the following plugins:

- [Content Aware Sidebars](https://wordpress.org/plugins/content-aware-sidebars/) – allows for the creation of new sidebar areas
- [Widget Options](https://wordpress.org/plugins/widget-options/) – provides a ton of options for widgets that you insert into your sidebars

---

## Can I rename “courses,” “lessons,” “topics,” and “quizzes”?

**Source:** [https://learndash.com/support/kb/resources/faqs/rename-learndash-labels/](https://learndash.com/support/kb/resources/faqs/rename-learndash-labels/)

Yes, you certainly can.

Go to**LEARNDASH LMS > SETTINGS > ADVANCED > CUSTOM LABELS**to add or update the labels.
![Update LearnDash Labels Here](https://learndash.com/support/wp-content/uploads/2018/09/update-learndash-labels-here.gif)Update LearnDash Labels Here
After you are done adding all custom labels, click **Save** in the **Save Options** box on the right.

![Save Custom Label Options](https://learndash.com/support/wp-content/uploads/2018/09/save-options-box.png)Save Custom Label Options
When you apply custom labels to replace the default labels, all references to those labels will change across the WordPress admin area and on the front end of your site. These changes will be visible to all users, including site administrators.

Adding the **custom labels** will not change the permalinks automatically. Our guide[here explains how to change permalinks](https://learndash.com/support/docs/core/settings/permalinks/).

![Reset Labels Settings to Default](https://learndash.com/support/wp-content/uploads/2018/09/reset-settings.png)Reset Labels Settings to Default
If you would like to revert the labels back to their original versions, click **Reset Settings** at the bottom of the page.

**NOTE:** Any text not included in the Custom Labels section can be modified using the translation files. To do this, you’ll need to edit the current language file and look for the text you want to change to update the label. For detailed steps, please refer to this documentation:[LearnDash Translation Guide](https://learndash.com/support/docs/guides/translation/).

**FOR MORE CUSTOM LABEL INFORMATION:** Please see our [full documentation on custom labels](https://learndash.com/support/docs/core/settings/advanced-options/#custom-labels).

---

## Can I reuse lessons & topics across multiple courses?

**Source:** [https://learndash.com/support/kb/resources/faqs/reuse-lessons-topics-multiple-courses/](https://learndash.com/support/kb/resources/faqs/reuse-lessons-topics-multiple-courses/)

Yes. Please see our full documentation on [shared course steps](https://learndash.com/support/docs/core/courses/shared-course-steps/).

---

## Is LearnDash compatible with other plugins?

**Source:** [https://learndash.com/support/kb/resources/faqs/learndash-compatible-other-plugins/](https://learndash.com/support/kb/resources/faqs/learndash-compatible-other-plugins/)

While we certainly try our best to make LearnDash compatible with as many plugins as possible, we are unable to guarantee compatibility with all WordPress plugins.

You can view our list of [officially supported integrations](https://learndash.com/support/docs/add-ons/), or browse a list of [3rd-party add-ons](https://learndash.com/support/docs/add-ons/3rd-party/) created by the LearnDash community.

---

## How do I find the course ID?

**Source:** [https://learndash.com/support/kb/resources/faqs/find-course-id/](https://learndash.com/support/kb/resources/faqs/find-course-id/)

If you’re using a [shortcode](https://learndash.com/support/docs/core/shortcodes-blocks/) that requires the course ID, there are a few ways you can find it.

## Without a Plugin

There are two ways you can find the course ID without a plugin.

1. Navigate to LEARNDASH LMS > COURSES
2. Hover over the course in which you need the ID
3. Look at the bottom of your browser for a URL
4. The number after the 
```
post=
```

 part of the URL is the course ID

![How to find LearnDash course ID](https://learndash.com/support/wp-content/uploads/2018/09/learndash-find-course-id-1-800x666.jpg)

You can also click on the course to edit it. Once on the course edit screen, look at the URL. Once again, the number after 
```
post=
```

 is your course ID.

![How to find Course ID in LearnDash](https://learndash.com/support/wp-content/uploads/2018/09/learndash-find-course-id-2-800x403.jpg)

## With a Plugin

If you’d rather see the course ID more clearly on the Courses screen, there’s a simple plugin you can use.

1. Install & activate the [Reveal IDs plugin](https://wordpress.org/plugins/reveal-ids-for-wp-admin-25/)
2. That’s it! The course ID will magically appear on your Courses listing screen

---

## 404 Errors on LearnDash Pages

**Source:** [https://learndash.com/support/kb/resources/faqs/404-errors-learndash-pages/](https://learndash.com/support/kb/resources/faqs/404-errors-learndash-pages/)

There are many reasons why you may be seeing a 404 error. One common reason is when a theme or plugin calls a flush rewrite rule. Here are a couple things you can try:

## Step 1

Try re-saving your WordPress permalinks:

1. Navigate to SETTINGS > PERMALINKS
2. Scroll to the bottom and click**Save Changes**

This performs a hard flush of your rewrite rules and will update your 
```
.htaccess
```

 file. This is a plugin- & theme-agnostic solution that corrects 404 issues the majority of the time.

## Step 2

If you’re still having issues, try to reverse any recent changes you made on your site. Did you update a theme or plugin? If so, try deactivating the new plugin or revert to a prior version of the theme. You should also test with a default WordPress theme, like [Twenty Nineteen](https://wordpress.org/themes/twentynineteen/). After reversing your changes, repeat Step 1.

If you’re still having issues, please [contact support](https://support.learndash.com/contact-support).

---

## Does LearnDash support Learning Tools Interoperability (LTI)?

**Source:** [https://learndash.com/support/kb/resources/faqs/support-learning-tools-interoperability/](https://learndash.com/support/kb/resources/faqs/support-learning-tools-interoperability/)

LearnDash does not include built-in support for Learning Tools Interoperability (LTI). However, several alternative approaches are available depending on the learning environment, integration requirements, and technical resources.

Organizations using LearnDash alongside other learning platforms or external tools can still implement LTI-based or LTI-adjacent solutions through third-party integrations or custom development.

## Alternative Integration Options

### LearnDash Partner Experts

LearnDash Partner Experts specialize in custom integrations and advanced LearnDash implementations. These partners can:

- Review the existing learning ecosystem
- Identify integration requirements
- Recommend an appropriate solution, such as:
- A pre-built third-party integration
- A custom LTI implementation
- A REST API–based integration

This approach is recommended for organizations with complex technical or instructional requirements.

## LearnDash 5.0: MCP Compared to LTI

LearnDash 5.0 introduces support for the **Model Context Protocol (MCP)**, which serves a different purpose than LTI.

### Key Differences

| Feature | LTI | MCP |
| --- | --- | --- |
| Primary Purpose | Embed or launch external learning tools | Automate and manage LearnDash internally |
| Typical Use Case | Single sign-on and external content access | Course creation, user management, grading |
| Access Method | External platform integration | REST API v2 |
| Common Examples | Zoom, Kahoot, external LMS tools | AI-driven course setup or updates |

LTI focuses on connecting LearnDash to external learning tools and platforms. MCP focuses on internal automation and system management through the LearnDash REST API.

These approaches can coexist, as they address different integration needs.

## Additional Resources

LearnDash REST API v2 Documentation

MCP Overview

---

## What kind of media can be used in LearnDash courses?

**Source:** [https://learndash.com/support/kb/resources/faqs/media-used-learndash-courses/](https://learndash.com/support/kb/resources/faqs/media-used-learndash-courses/)

Since LearnDash runs on WordPress, any [WordPress supported media](https://codex.wordpress.org/Uploading_Files#About_Uploading_Files_on_Dashboard) can be used in your courses. This includes, but is not limited to:

- **Images:** 
```
jpg
```

, 
```
jpeg
```

, 
```
png
```

, 
```
gif
```

 (
```
svg
```

 requires [a plugin](https://wordpress.org/plugins/safe-svg/))
- **Documents:** 
```
pdf
```

, 
```
psd
```

 (Adobe Photoshop), all Microsoft Word, PowerPoint & Excel formats
- **Audio:** 
```
mp3
```

, 
```
m4a
```

, 
```
ogg
```

, 
```
wav
```
- **Video:** 
```
mp4
```

, 
```
m4v
```

, 
```
mov
```

, 
```
wmv
```

 (but we typically recommend a video hosting service, like Vimeo, Wistia, Amazon S3, etc. to avoid overloading your host/server.)

Our [automatic video progression feature](https://learndash.com/support/docs/guides/video-progression/)supports the following video platforms:

- Self-hosted videos (uploaded to the Media Library)
- YouTube
- Vimeo
- Wistia
- Amazon S3

HTML5 packages published in programs like [Articulate Storyline & Adobe Captivate](https://learndash.com/support/docs/reporting/scorm-xapi/) can also be inserted into LearnDash content, as well as any third-party media that can be embedded via an 
```
<iframe>
```

 or 
```
<script>
```

.

---

## Known Issues & Conflicts

**Source:** [https://learndash.com/support/kb/resources/faqs/known-issues/](https://learndash.com/support/kb/resources/faqs/known-issues/)

### Randomized Questions on WPEngine Hosting

You can find the Randomize Order feature under Display and Content Options > Custom Question Ordering (or display subset of questions). This feature does not work properly with the default WP Engine settings. The following is needed for it to work properly:

- Navigate to WP ENGINE > GENERAL SETTINGS
- Look for**ORDER_BY_RAND**(which is set to disabled by default)
- Change the setting to enabled

Once this is enabled, the Custom Question Ordering feature should work as expected.

### Timing of Emails Sent by Notifications Add-On

To ensure the notifications function properly and emails are delivered on schedule, youll need to implement a custom cron job on your server. For the notifications to send properly and on time, you will need to add a custom cron job to your server. This is due to the limitations of WordPress mail system. See[this article](https://learndash.com/support/docs/faqs/email-notifications-send-time/)for instructions on how to set up a server cron job to help your notifications send on time.

### Export Quiz To Excel Plugin by WP Plugins For You

Several reports have been raised about this 3rd party plugin causing quiz questions to be removed. If this has occurred on your site, please[contact the plugin vendor](https://www.wppluginsforyou.com/)for assistance in rectifying the issue.

### SG Optimizer by SiteGround Hosting

The SG Optimizer (and other image optimizing plugins) can cause certificate images to be distorted, or contain solid black areas within the image. To mitigate this issue, it is recommended that image optimization be selectively disabled on images used in certificates.

### Blank Settings Pages

This is the result of using LearnDash v3.x.x on any WordPress version prior to 5.0. To address this, upgrading to the latest version of WordPress is recommended. For users who dont want to use the Gutenberg editor, you can still use the[Classic Editor.](https://wordpress.org/plugins/classic-editor/)

### WPML and Quiz Question Answer Options

[WPML](http://wpml.org/)translation capabilities cannot be applied to the available answers in a quiz question. This is being investigated further by development. There is no known workaround at this time.

### Duplicate Page or Cloning Plugins and Quizzes

Quizzes and Questions should not be cloned with third-party plugins. Doing so will result in irreversible issues. The cloned quizzes and questions cannot be used and should be deleted.

If you need to clone your quizzes, use the built-in quiz import/export feature found under LEARNDASH LMS > QUIZZES > ACTIONS > IMPORT/EXPORT.

### Sorting or Matrix Sorting Questions Won’t Auto-scroll While Dragging the Answer to the Bottom of the Page

If you selected the Sorting or Matrix Sorting type of questions with items that are displayed outside of the screen area on the front-end, dragging the items down to the correct option will not move or auto-scroll the screen. You may have to instruct your students or users to scroll using the mouse wheel or zoom the screen view out so that they can drag the items to the correct answers. They can also press the arrow buttons or spacebar on the keyboard while dragging the answer to scroll the screen up or down.

If you are affected by this issue, you can try adding the following CSS to your site (Appearance > Customizer > Additional CSS) as we have found that it works for those having this issue.

.wpProQuiz_content .wpProQuiz_questionList,
.wpProQuiz_content .wpProQuiz_matrixSortString,
.wpProQuiz_content ul.wpProQuiz_maxtrixSortCriterion {
  overflow: hidden;
}
```
.wpProQuiz_content .wpProQuiz_questionList,
.wpProQuiz_content .wpProQuiz_matrixSortString,
.wpProQuiz_content ul.wpProQuiz_maxtrixSortCriterion {
  overflow: hidden;
}
```

### Concatenate JS by JetPack Boost and Quizzes

The **Start Quiz** button and **Autostart** feature may not work when the **Concatenate JS** option is enabled in the **Jetpack Boost** plugin. To avoid this conflict, keep the Concatenate JS feature disabled while using LearnDash quizzes.

![Concatenate JS by JetPack Boost](https://learndash.com/support/wp-content/uploads/2025/07/JetPack-Boost-Concatenate-JS.png)

## Invisible Quiz Answer Text After Astra Theme Update to 4.9.0

A recent update to the Astra theme (v4.9.0) has caused quiz answer text to become invisible in LearnDash quizzes. It altered the default color settings for quiz answer text, resulting in a color that blends with the background. This issue affects users relying on the Astra theme for their LearnDash courses.

Solution: There are two methods to resolve this issue: adjusting the Astra theme’s color settings or using custom CSS.

**Method 1**: Adjusting Astra Theme Color Settings

1. In your WordPress dashboard, navigate to “Astra” and click “Dashboard.”
2. Click the “Color (Customize)” block or button within the “Quick Settings” section.
3. Find the “Global Palette” within the color customization options.
4. Below the “styles” section, you’ll see nine colored circles. Click on the sixth circle (Color 6). This color controls the quiz answer text.
5. Select a color that provides sufficient contrast against the background, such as black or dark blue.
6. Click the “Publish” button at the top of the customization panel to save your changes.

**Note:**Always create a full site backup before making any changes or updates to your website.

**Method 2**: Using Custom CSS

If adjusting the Astra color settings does not resolve the issue, you can use custom CSS to override the theme’s default color settings.

1. From your wp-admin dashboard, navigate to “Appearance” > “Customize” > “Additional CSS.”
2. Paste the following CSS code into the text area:

```
.learndash-wrapper .wpProQuiz_content .wpProQuiz_questionListItem label {

color: black !important;
}
```

*or choose any color that would make the text visible against the background

1. Click the “Publish” button to save your changes.

### Issue with LearnDash “Quiz Saving” and “Check Answer” functionality

There is currently an issue affecting some users’ ability to interact with LearnDash quizzes, particularly around the “Check Answer” and “Quiz Saving” functionality. The most common cause is the “Save quiz progress” setting having an autosave interval that is too short (e.g., 5 seconds), which can cause incomplete data writes, especially under heavy website traffic.

**What you can expect to see with this issue:**

1. The “Check Answer” button not responding
2. Quiz attempts appear locked or unclickable
3. The appearance that quiz answers are saved when they are not

**What can you do to prevent this issue from occurring?**Set your autosave interval to a higher value, between 30 and 60 seconds, to reduce risk on higher-traffic websites.

**Solution**: LearnDash Support can provide a plugin that identifies and removes old metadata, helping to resolve this issue. Please reach out to our support team if you experience this, and we will gladly provide the plugin download and instructions for using it.

---

## Database Info

**Source:** [https://learndash.com/support/kb/resources/faqs/database-info/](https://learndash.com/support/kb/resources/faqs/database-info/)

## Custom Tables

All LearnDash data is stored within the same database used to run WordPress. LearnDash does not store or connect to any external data sources to retrieve or store data about users, courses, quizzes, etc.

## LearnDash Database Tables

LearnDash uses two main database tables to store user course and quiz progress details:

**1. wp_learndash_user_activity**:

- This table records the activity type (course, lesson, topic, or quiz) as well as the started and completed timestamps.
- Keyed byuser_idandpost_id.
- Functions similarly to thewp_poststable

**EXAMPLE:**

```
CREATE TABLE 'wp_learndash_user_activity' (
'activity_id' bigint(20) unsigned NOT NULL AUTO_INCREMENT,
'user_id' bigint(20) unsigned NOT NULL DEFAULT '0',
'post_id' bigint(20) unsigned NOT NULL DEFAULT '0',
'activity_type' varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
'activity_status' tinyint(1) unsigned DEFAULT '0',
'activity_started' int(11) unsigned DEFAULT NULL,
'activity_completed' int(11) unsigned DEFAULT NULL,
'activity_updated' int(11) unsigned DEFAULT NULL,
PRIMARY KEY ('activity_id'),
KEY 'user_id' ('user_id'),
KEY 'post_id' ('post_id'),
KEY 'activity_status' ('activity_status'),
KEY 'activity_type' ('activity_type'),
KEY 'activity_started' ('activity_started'),
KEY 'activity_completed' ('activity_completed'),
KEY 'activity_updated' ('activity_updated')
);
```

**2. wp_learndash_user_activity_meta**:

- This table contains meta information related to the activity records inwp_learndash_user_activity.
- Functions similarly to thewp_postmetatable.
- Uses anactivity_idfield to link to the main activity row.
- Stores key/value pairs such as steps_total,score,points, etc.

**EXAMPLE:**

```
CREATE TABLE `wp_learndash_user_activity_meta` (
`activity_meta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
`activity_id` bigint(20) unsigned NOT NULL DEFAULT '0',
`activity_meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`activity_meta_value` mediumtext COLLATE utf8mb4_unicode_ci,
PRIMARY KEY (`activity_meta_id`),
KEY `activity_id` (`activity_id`),
KEY `activity_meta_key` (`activity_meta_key`(191))
);
```

Data Population Process

When a user completes a lesson, the process of updating their progress involves two steps:

User Meta Update: The user’s meta array item is updated.

Activity Tables Update: The wp_learndash_user_activity and wp_learndash_user_activity_meta tables are updated with the new progress details.

Note: In future versions of LearnDash, there will be a move towards removing dependence on the user meta array completely.

### Other Tables Used by LearnDash

```
wp_postmeta
wp_posts
wp_usermeta
wp_users
```

### Data Management of Deleted Users

**When a user is deleted via WordPress, the following actions occur:**

- All the users meta data is deleted.
- Custom post types such as Assignments and Essays created by that user are removed.
- Quiz-related statistics stored in wp_wp_pro_quiz_statistic and wp_wp_pro_quiz_statistic_ref are also removed.

### Additional Quiz Tables

```
wp_wp_pro_quiz_category
wp_wp_pro_quiz_form
wp_wp_pro_quiz_lock
wp_wp_pro_quiz_master
wp_wp_pro_quiz_prerequisite
wp_wp_pro_quiz_question
wp_wp_pro_quiz_template
wp_wp_pro_quiz_toplist
```

---

## FAQs

**Source:** [https://learndash.com/support/kb/resources/faqs/faqs/](https://learndash.com/support/kb/resources/faqs/faqs/)

- - [Can I rename courses, lessons, topics, and quizzes?](https://learndash.com/support/docs/faqs/rename-learndash-labels/)
- [How do I find the course ID?](https://learndash.com/support/docs/faqs/find-course-id/)
- [Can I reuse lessons & topics across multiple courses?](https://learndash.com/support/docs/faqs/reuse-lessons-topics-multiple-courses/)
- [Does LearnDash support Learning Tools Interoperability (LTI)?](https://learndash.com/support/docs/faqs/support-learning-tools-interoperability/)
- [How do I hide post meta data (date, author, comments, etc.)?](https://learndash.com/support/docs/faqs/hide-post-meta-data/)
- [What kind of media can be used in LearnDash courses?](https://learndash.com/support/docs/faqs/media-used-learndash-courses/)
- [Can I create a unique sidebar for courses, lessons & quizzes?](https://learndash.com/support/docs/faqs/create-unique-sidebar/)
- [How do I protect my course files & downloads?](https://learndash.com/support/docs/faqs/protect-files-downloads/)
- [How do I remove the Take This Course button?](https://learndash.com/support/docs/faqs/remove-take-this-course-button/)
- [Can I hide the course content table on the course page?](https://learndash.com/support/docs/faqs/hide-course-content-table/)
- [How can I make email notifications send on time?](https://learndash.com/support/docs/faqs/email-notifications-send-time/)
- [Why is the registration form not showing?](https://learndash.com/support/docs/faqs/why-is-the-registration-form-not-showing/)
- [Why are the license updates and license checks disabled?](https://learndash.com/support/docs/faqs/why-are-the-license-updates-and-license-checks-disabled-on-my-site/)
- [What is the best way to offer course bundles with LearnDash?](https://learndash.com/support/docs/faqs/what-is-the-best-way-for-me-to-bundle-courses-using-learndash/)
- [I’m getting the error “the link you followed has expired” when installing LearnDash.](https://learndash.com/support/kb/resources/faqs/im-getting-the-error-the-link-you-followed-has-expired-when-installing-learndash/)
- [Why am I unable to submit an “Open Support Ticket”?](https://learndash.com/support/kb/resources/faqs/why-am-i-unable-to-submit-an-open-support-ticket/)
- [How do I automatically assign users to courses when they sign up/register on my site?](https://learndash.com/support/kb/core/faqs/how-do-i-automatically-assign-users-to-courses-when-they-sign-up-register-on-my-site/)

---

