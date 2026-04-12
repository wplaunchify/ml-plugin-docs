# Learning Management

*Category from WP Fusion - Event Tracking Addon documentation*

---

## SureDash

**Source:** [https://wpfusion.com/documentation/learning-management/suredash/](https://wpfusion.com/documentation/learning-management/suredash/)

### Overview

WP Fusion integrates with [SureDash](https://suredash.com/) to connect your community portal with your CRM. When users register via SureDash, they’ll be added to your CRM with all their registration data.

You can also restrict access to SureDash spaces, courses, and lessons based on tags in your CRM, and apply tags when courses or lessons are marked complete.

### Access Control

You can restrict access to SureDash spaces, courses, and lessons based on a user’s CRM tags, and redirect them to another page (like a sales page) if they don’t have the required tags.

![a settings screen for wp fusion shows active membership as a required tag for access. below, membership catalog is selected as the redirect page if access is denied.](https://wpfusion.com/wp-content/uploads/2025/11/suredash-spaces.jpg)Screenshot
For more information on restricting access to content and the main WP Fusion meta box, [see the documentation here](https://wpfusion.com/documentation/getting-started/meta-box/).

### Activity Tagging

WP Fusion can apply tags in your CRM based on course and lesson completions.

#### Courses

When editing any SureDash course, you’ll find a WP Fusion settings panel with an option for **Apply Tags – Marked Complete**. These tags will be applied in your CRM when a user completes the course.

![a settings interface for wp fusion displays fields for required tags, redirect url if access is denied, and tags to apply when a course is completed. tags shown are course a enrolled and course complete.](https://wpfusion.com/wp-content/uploads/2025/11/suredash-course-settings.jpg)

#### Lessons

When editing any SureDash lesson, you can also configure tags to be applied when the lesson is marked complete.

![screenshot of the wp fusion settings panel showing options to require user login, apply tags when content is marked complete, and set required, excluded, or redirected tags for viewing content.](https://wpfusion.com/wp-content/uploads/2025/11/suredash-lessons-1024x916.jpg)

You can use these completion tags to track student progress in your CRM, trigger follow-up automations, or segment students based on what they’ve learned.

---

## MasterStudy

**Source:** [https://wpfusion.com/documentation/learning-management/masterstudy/](https://wpfusion.com/documentation/learning-management/masterstudy/)

### Overview

Using WP Fusion and [MasterStudy](https://wpfusion.com/go/masterstudy) LMS, you can restrict access to your courses and other content based on a user’s tags in your [CRM or email marketing platform](https://wpfusion.com/documentation/faq/crm-compatibility-table/), as well as apply tags based on student progress, and auto-enroll students into courses based on changes in tags.

### Access Control

For more information on controlling access to MasterStudy courses and lessons based on CRM tags, see the documentation on [WP Fusion’s access control features](https://wpfusion.com/documentation/getting-started/meta-box/).

### Courses and Lessons

WP Fusion lets you apply tags when students are enrolled into MasterStudy courses, as well as when courses and lessons are marked complete.

#### Course Settings and Auto-Enrollment

When editing any course, scroll down to the **WP Fusion** meta box to access the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2024/03/masterstudy-lms-course-1024x453.jpg)

The options here are:

- **Apply tags – Enrolled:** These tags will be applied to a user when they are enrolled in the course, either manually, via a free signup, or another plugin integration. They will not be removed if the student is removed from the course, and they do not affect automated enrollments.
- **Link with tag:**Using this setting you can “link” a tag in your CRM with a MasterStudy course. When this tag is applied, the user will automatically be enrolled in the course. If the tag is removed, the user will be un-enrolled. Likewise if the user is enrolled in the course (either manually or via a purchase) the linked tag will be applied, and if a user is removed from the course the linked tag will be removed.
- **Apply Tags – Completed:** These tags will be applied in your CRM when the course is marked complete.

#### Lessons

The WP Fusion settings for each lesson can be found in the **WP Fusion – Lesson Settings** metabox.

![](https://wpfusion.com/wp-content/uploads/2018/03/learnpress-lesson-1024x184.jpg)WP Fusion settings when editing a MasterStudy lesson
Here you can select one or more tags to apply in your CRM when a student marks a lesson complete.

---

## Parent and Student Access For LearnDash

**Source:** [https://wpfusion.com/documentation/learning-management/parent-student-access-for-learndash/](https://wpfusion.com/documentation/learning-management/parent-student-access-for-learndash/)

### Overview

Using WP Fusion with [Parent & Student Access For LearnDash](https://honorswp.com/plugins/parent-and-student-access-for-learndash/) by HonorsWP, you can automatically link student contact records to parent contact records in your [CRM or email marketing system](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

### Setup

Head to the WP Fusion Contact Fields settings, scroll down to the LearnDash section and enable the Parent Email field for sync by selecting a corresponding custom field in your CRM.

![](https://wpfusion.com/wp-content/uploads/2023/10/honorswp-parent-student-1024x389.jpg)

When a new student account is registered (or an existing account is linked to a parent), the email address of the parent will be synced to the student’s contact record in your CRM.

---

## Thrive Apprentice

**Source:** [https://wpfusion.com/documentation/learning-management/thrive-apprentice/](https://wpfusion.com/documentation/learning-management/thrive-apprentice/)

### Overview
WP Fusion integrates with [Thrive Apprentice](https://wpfusion.com/go/thrive-apprentice) to allow you to sync your students with over [50 CRMs and marketing automation platforms](https://wpfusion.com/documentation/faq/crm-compatibility-table/), and apply tags or lists based on product purchases and course progress.

### Setup

This integration requires the [Uncanny Automator plugin](https://wpfusion.com/go/automator).

First, create an automation, and then select your desired trigger— in this case, we’ve selected **A user progresses in Apprentice Course**.

![screenshot of a recipe setup in an online course platform. the recipe, titled apprentice automation, triggers when a user progresses in thrive apprentice. the action adds a tag to the user. recipe details and notes appear on the right.](https://wpfusion.com/wp-content/uploads/2022/09/apprentice_automation-1024x437.png)

From the Actions dropdown, select WP Fusion, and there will be two options:

- **Add a tag to the user:**This action will apply one or more tags (or lists) to the user in your connected CRM.
- **Remove a tag from the user:**This action will remove one or more tags (or lists) from the user in your connected CRM.

For more information on WP Fusion’s Uncanny Automator integration, see the [Uncanny Automator documentation](https://wpfusion.com/documentation/automators/uncanny-automator/).

---

## WISDM Group Registration for LearnDash

**Source:** [https://wpfusion.com/documentation/learning-management/wisdm-group-registration-learndash/](https://wpfusion.com/documentation/learning-management/wisdm-group-registration-learndash/)

### Overview

WP Fusion includes an integration with [WISDM Group Registration for LearnDash](https://wisdmlabs.com/group-registration-for-learndash/) to give you additional options for tagging your students [in your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) based on group enrollments.

![](https://wpfusion.com/wp-content/uploads/2021/04/ld-group-registration-1024x799.jpg)

When editing any product in WooCommerce you’ll see an additional option for *Apply tags when a user is added to this LearnDash group*.

Any tags specified here will be copied to the new LearnDash group created at checkout into the [Apply Tags – Enrolled setting](https://wpfusion.com/documentation/learning-management/learndash/#groups). Then, as users are enrolled into the group, the selected tags will be applied in your CRM.

---

## Memberoni

**Source:** [https://wpfusion.com/documentation/learning-management/memberoni/](https://wpfusion.com/documentation/learning-management/memberoni/)

### Overview

WP Fusion includes an integration with the [Memberoni theme](https://memberoni.membershipacademy.com/) by The Member Site Academy, allowing you to apply tags in your CRM as students progress through courses and lessons.

WP Fusion adds a meta box to each course, lesson, roadmap, and roadmap step where you can specify tags that should be applied when the unit is marked complete.

![](https://wpfusion.com/wp-content/uploads/2019/10/memberoni-1024x257.jpg)

When the course or lesson is marked complete the selected tags will be applied to the student in your CRM.

If a lesson or roadmap step is later marked incomplete by the user, the tags will be automatically removed.

---

## Uncanny LearnDash Groups

**Source:** [https://wpfusion.com/documentation/learning-management/uncanny-learndash-groups/](https://wpfusion.com/documentation/learning-management/uncanny-learndash-groups/)

### Overview

WP Fusion includes an integration with [Uncanny LearnDash Groups](https://www.uncannyowl.com/downloads/uncanny-learndash-groups/) to give you additional options for tagging your students.

![](https://wpfusion.com/wp-content/uploads/2019/08/uncanny-learndash-groups-1-1024x588.jpg)

When editing any LearnDash Group Course type product in WooCommerce you’ll see an additional option for *Apply tags when a user is added to this group course*.

Any tags specified here will be applied to the new user when a group leader adds a new student to the course, or when a group leader adds a user to a group license product which contains this course (see below).

### Pre-configured Group License Products and Subscriptions

Uncanny LearnDash groups also allows you to create [pre-configured group license products](https://www.uncannyowl.com/knowledge-base/creating-pre-configured-learndash-group-licenses/) which can contain multiple group courses.

If you want to apply tags to users when they are added to a group license, independently of the courses in that license (see above), you can also select tags when editing a Group License or Subscription product.

![](https://wpfusion.com/wp-content/uploads/2019/08/uncanny-group-license-1024x629.jpg)

---

## Tutor LMS

**Source:** [https://wpfusion.com/documentation/learning-management/tutor-lms/](https://wpfusion.com/documentation/learning-management/tutor-lms/)

### Overview

Using WP Fusion and [Tutor LMS](https://wordpress.org/plugins/tutor/) you can restrict access to courses based on a user’s tags in your CRM, and apply tags when courses are marked complete.

**Note:** Since Tutor LMS 3.0, you will need to temporarily switch your course into Legacy Mode to edit WP Fusion’s course settings.

![screenshot](https://wpfusion.com/wp-content/uploads/2019/07/tutor-lms-legacy-mode-300x142.jpg)

You can switch back to the course builder after you’ve configured your access rules and tags.

### Content Protection

WP Fusion adds a meta box to every Tutor course where you can restrict access to the course and specify redirects if the user doesn’t have access.

![](https://wpfusion.com/wp-content/uploads/2019/07/tutor-lms-479x1024.jpg)

For more information see the documentation on the [WP Fusion meta box](https://wpfusion.com/documentation/getting-started/meta-box/).

### Tagging

![](https://wpfusion.com/wp-content/uploads/2019/07/tutor-lms-2-1-1024x399.jpg)

WP Fusion also adds a meta box to every course where you can specify tags to be applied in your CRM when the course is marked complete by the student.

#### Auto course enrollment

Using the **Link with tag** setting you can “link” a tag in your CRM with a TutorLMS course. When this tag is applied, the user will automatically be enrolled in the course. If the tag is removed, the user will be un-enrolled.

Likewise if the user is enrolled in the course (either manually or via a purchase) the linked tag will be applied, and if a user is removed from the course the linked tag will be removed.

---

## CoursePress

**Source:** [https://wpfusion.com/documentation/learning-management/coursepress/](https://wpfusion.com/documentation/learning-management/coursepress/)

### Overview

Using WP Fusion and [CoursePress by WPMU Dev](https://premium.wpmudev.org/project/coursepress-pro/), you can automatically add students to your CRM of choice when they register on your site.

You can also restrict access to course content, and apply tags based on progress through courses and units.

#### Settings

To set up tagging based on progress through a course, open the course editor in the admin and scroll to the bottom of the page.

![](https://wpfusion.com/wp-content/uploads/2019/02/coursepress-1024x676.jpg)

Here you will see an option to apply tags in your CRM when a course has been marked completed.

You can also set tags to be applied when any unit is completed. If this section isn’t shown, first create some units and then return to the main course edit page to configure tagging.

---

## WPComplete

**Source:** [https://wpfusion.com/documentation/learning-management/wpcomplete/](https://wpfusion.com/documentation/learning-management/wpcomplete/)

### Overview

Using WP Fusion and [WPComplete](https://wpcomplete.co/) you can apply tags in your CRM when students mark content as completed, or when they complete entire courses.

### Lessons

When WPComplete is active, an additional setting will appear at the bottom of the [WP Fusion meta box](https://wpfusion.com/documentation/getting-started/meta-box/) while editing any post. Here you can specify tags to be applied when all items on the page are marked complete.

![](https://wpfusion.com/wp-content/uploads/2018/11/wp-complete.jpg)

### Courses

WP Fusion also adds an admin menu where you can set up tagging for entire courses.

![](https://wpfusion.com/wp-content/uploads/2018/11/wp-complete-course-1024x397.jpg)

For each WPComplete course you can specify tags to be applied in your CRM when all complete-able items in the course are completed.

---

## AccessAlly

**Source:** [https://wpfusion.com/documentation/membership/accessally/](https://wpfusion.com/documentation/membership/accessally/)

### Overview

While [AccessAlly and ProgressAlly](https://accessally.com/) integrate with several marketing automation systems, they do *not* integrate with any other plugins on your site (for example WooCommerce).

This can put you [in a difficult situation](https://www.rajavanya.com/never-use-accessally-with-woocommerce-and-drip-atleast/) where you need to use a separate plugin to sync customer data to your CRM, and then a webhook to send the data back from your CRM to AccessAlly to grant access to a course or membership.

WP Fusion’s AccessAlly integration works as a “bridge” between WP Fusion’s [100+ plugin integrations](https://wpfusion.com/documentation/#integrations), and AccessAlly’s ecommerce and membership functionality:

1. **Tags applied in your CRM by WP Fusion are immediately communicated to AccessAlly** (for example after a WooCommerce checkout), without requiring a webhook.
2. **Tags applied in your CRM by AccessAlly are immediately communicated to WP Fusion** (for example [to award an achievement](https://wpfusion.com/documentation/gamification/gamipress/#achievements) or [trigger a push notification](https://wpfusion.com/documentation/membership/buddyboss/#push-notifications)), without requiring a webhook.

This opens up many possibilities for integrating AccessAlly with the rest of your site. For example you may want to:

- Sell your memberships with [WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/), but deliver your content with AccessAlly
- Create [a BuddyBoss app](https://wpfusion.com/go/buddyboss-app) for your members and grant access based on AccessAlly tags
- Require a [Gravity Form](https://wpfusion.com/documentation/lead-generation/gravity-forms/) survey submission to unlock the next ProgressAlly module
- Award points or badges in [Gamipress](https://wpfusion.com/documentation/other/gamipress/) when Objectives are completed in ProgressAlly
- Send data and trigger automations in another CRM in addition to AccessAlly

### Setup

With WP Fusion active, you’ll see a new menu option for WP Fusion under the main AccessAlly settings menu.

This page shows you a table of all your AccessAlly tags (in the left column) and available WP Fusion tags (in the right column).

![](https://wpfusion.com/wp-content/uploads/2018/08/accessally-1-1024x795.jpg)

When the “Active” box is checked, the tags become linked between WP Fusion and AccessAlly.

For example, **to sell access to a membership using WooCommerce**, you would configure the WooCommerce product to apply the tag “paid membership member”. When this product is purchased, the user will be able to access any AccessAlly content protected by the “paid membership member” tag.

If you’re selling a subscription, when the subscription is cancelled the “paid membership member” tag will be removed, and the user will no longer be able to access restricted content in AccessAlly.

#### Different CRMs

It’s also possible to have AccessAlly and WP Fusion connected to two different CRMs.

For example you could connect WP Fusion to Intercom or ConvertFox to **deliver on-site messaging when Objectives are completed in ProgressAlly**.

In that case you can configure your AccessAlly objectives to apply the tag “awesome achievement” in Ontraport when they have been completed. This tag will then be simultaneously applied in Intercom, and can trigger an on-site message congratulating the user.

### “AccessAlly Managed” mode

Since [AccessAlly 4.0](https://accessally.com/blog/accessally-4-0/), it’s possible to use AccessAlly without a CRM. In this scenario, you can use AccessAlly as just a membership plugin, and use WP Fusion for the integration between AccessAlly in your CRM.

During setup, select **AccessAlly Managed** for your CRM.

![](https://wpfusion.com/wp-content/uploads/2018/08/accessally-setup-managed-1024x443.jpg)

After completing setup, create some tags at AccessAlly » Settings » Tags. Then head to the WP Fusion settings at AccessAlly » WP Fusion in the admin.

![](https://wpfusion.com/wp-content/uploads/2018/08/accessally-hubspot-mapping-1024x588.jpg)

Here you can map your AccessAlly managed tags (i.e. local tags) with tags or lists in your connected CRM.

In this example we are using AccessAlly to sell memberships and deliver membership content, and WP Fusion is syncing the members to HubSpot and adding them to lists based on their membership level and status.

---

## WPLMS

**Source:** [https://wpfusion.com/documentation/learning-management/wplms/](https://wpfusion.com/documentation/learning-management/wplms/)

Using WP Fusion and [WPLMS](https://wplms.io/) you can restrict access to your courses and other content based on a user’s CRM tags. You can also apply tags to a user when they’ve begun a course, and track student progress by applying tags when courses and units are marked complete.

See the screenshot on the right for an example of the options WP Fusion offers you when configuring a WPLMS course.

In addition to the normal settings, there are two additional options at the bottom of the WPEP course meta box.

- **Apply tags when course begin:**These tags will be applied when a user clicks Start Course
- **Apply tags when marked complete:** These tags will be applied to the user when the course is marked complete
![](https://wpfusion.com/wp-content/uploads/2018/07/wplms-485x1024.jpg)

---

## WP Courseware

**Source:** [https://wpfusion.com/documentation/learning-management/wp-courseware/](https://wpfusion.com/documentation/learning-management/wp-courseware/)

### Overview

WP Fusion integrates with [WP Courseware](https://flyplugins.com/wp-courseware/) to let you automatically enroll students in courses and track student progress using tags.

You can find the settings for WP Fusion under WP Courseware » WP Fusion in your WordPress admin.

![](https://wpfusion.com/wp-content/uploads/2018/03/wp-courseware.jpg)WP Fusion’s integration with WP Courseware, available as a settings page under the WP Courseware header in the WordPress admin menu

#### General Settings

From the settings page, you’ll see each of your courses and modules displayed in a table. For courses, there are three options:

- **Linked Tag:** This allows you to choose one tag that is “linked” with the course. When the tag is applied, the user will automatically be enrolled in the course. When the tag is removed, the user will be removed from the course.
- **Apply Tags – Enrolled:** These tags are applied when a user is enrolled in a course. These will not be applied if you have a course set to auto-enroll all users.
- **Apply Tags – Completed:**These tags are applied when a course is marked complete.

In addition, for each of your modules, you can specify a tag or tags to be applied when the module is marked complete.

#### Unit Settings

Settings for individual units can be configured via the normal WP Fusion meta box at the side of any unit.

![](https://wpfusion.com/wp-content/uploads/2018/03/wp-courseware-units-495x1024.jpg)

In addition to the normal settings for controlling access and setting redirects, there is an option to apply tags when the unit has been marked complete.

---

## LearnPress

**Source:** [https://wpfusion.com/documentation/learning-management/learnpress/](https://wpfusion.com/documentation/learning-management/learnpress/)

### Overview

Using WP Fusion and [LearnPress](https://wpfusion.com/go/learnpress) LMS, you can restrict access to your courses and other content based on a user’s tags in your [connected CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

You can also:

- Apply tags to a user when they’ve begun a course
- Apply tags when lessons and courses are marked complete
- Automatically enroll students into (and out of) courses by applying and removing tags in your CRM

### Access Control

For more information on controlling access to LearnPress courses based on CRM tags, see the documentation on [WP Fusion’s access control features](https://wpfusion.com/documentation/getting-started/meta-box/).

### Courses and Lessons

WP Fusion lets you apply tags when students are enrolled into LearnPress courses, as well as when courses and lessons are marked complete.

#### Course Settings and Auto-Enrollment

When editing any course, click on the **WP Fusion** tab in the main LearnPress course settings metabox to access the WP Fusion settings.

![WP Fusion settings on a LearnPress course](https://wpfusion.com/wp-content/uploads/2018/03/learnpress-course-1-1024x518.jpg)

The options here are:

- **Apply tags – Enrolled:** These tags will be applied to a user when they are enrolled in the course, either manually, via a free signup, or another plugin integration. They will not be removed if the student is removed from the course, and they do not affect automated enrollments.
- **Link with tag:**Using this setting you can “link” a tag in your CRM with a LearnPress course. When this tag is applied, the user will automatically be enrolled in the course. If the tag is removed, the user will be un-enrolled. Likewise if the user is enrolled in the course (either manually or via a purchase) the linked tag will be applied, and if a user is removed from the course the linked tag will be removed.
- **Apply Tags – Completed:** These tags will be applied in your CRM when the course is marked complete.

#### Lessons

The WP Fusion settings for each lesson can be found in the **WP Fusion – Lesson Settings** metabox.

![](https://wpfusion.com/wp-content/uploads/2018/03/learnpress-lesson-1024x184.jpg)WP Fusion settings when editing a LearnPress lesson
Here you can select one or more tags to apply in your CRM when a student marks a lesson complete.

### Syncing Meta Fields

Any custom fields added to your LearnPress registration or profile forms will be automatically detected by WP Fusion and will be listed under the LearnPress section in the [Contact Fields settings](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).

![](https://wpfusion.com/wp-content/uploads/2018/03/learnpress-custom-fields-1024x321.jpg)

When a user registers or updates their profile, any enabled fields will be synced to the selected custom fields in your CRM.

---

## eLearnCommerce

**Source:** [https://wpfusion.com/documentation/learning-management/wpep/](https://wpfusion.com/documentation/learning-management/wpep/)

**Warning:** As of May 2021, eLearnCommerce has pivoted to a service model, and has begun terminating the accounts of their WordPress plugin customers.

Based on our experience with the transition, we’ve decided to discontinue support for eLearnCommerce with WP Fusion, and we’re recommending our customers to consider an alternative LMS solution, such as [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/) or [LearnDash](https://wpfusion.com/documentation/learning-management/learndash/).

### Overview

Using WP Fusion and the [eLearnCommerce](https://wpfusion.com/go/WPEP) LMS by Grow Learn Teach, you can restrict access to your courses, offers, videos, ebooks, and other content based on a user’s CRM tags.

You can also apply tags to a user when they’ve begun a course, and track student progress by applying tags when courses are marked complete.

See the screenshot on the below for an example of the options WP Fusion offers you when configuring eLearnCommerce content.

![](https://wpfusion.com/wp-content/uploads/2017/08/wp-execution-plan-460x1024.jpg)

In addition to the normal settings, there are two additional options at the bottom of the course meta box.

- **Apply tags when marked complete:** These tags will be applied to the user when the course is marked complete
- **Button text to display:**Text entered here will be shown on the course button on your course index page, like in the screenshot below:

![](https://wpfusion.com/wp-content/uploads/2017/08/wpep-restricted-350x280.jpg)

---

## LifterLMS

**Source:** [https://wpfusion.com/documentation/learning-management/lifterlms/](https://wpfusion.com/documentation/learning-management/lifterlms/)

### Overview

Using WP Fusion and [LifterLMS](https://wpfusion.com/go/lifterlms), you can:

- Control access to courses, lessons, and access plans using tags in your CRM
- Automatically save contact details [to your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when a student purchases or registers for a course or membership
- Automatically enroll students into courses and memberships based on tag changes in your CRM
- Apply tags in your CRM when a course, membership, or access plan is purchased
- Apply tags in your CRM based on course or lesson completion
- Track student progress in your CRM using custom fields
- Capture customer information on the LifterLMS checkout and [send abandoned cart reminders](#abandoned-cart-tracking) if they don’t finish checking out

### Access control

You can restrict access to LifterLMS Courses and Lessons based on a user’s tags in your CRM, and redirect them to another page (like a sales page) if they don’t have the required tags.

See the screenshot below for an example of the options WP Fusion offers you when configuring a LifterLMS course or lesson:

![](https://wpfusion.com/wp-content/uploads/2016/09/lifterlms-meta-box-access-401x1024.jpg)

For more information on the WP Fusion meta box options and protecting content based on CRM tags, see the [Restricting Access to Content documentation](https://wpfusion.com/documentation/getting-started/access-control/).

#### Filter Course Steps

WP Fusion has the ability to dynamically filter your course content based on the user’s current tags in your CRM, and the access settings configured on each item in the course.

This can be used to create dynamic learning paths, with courses personalized to each student. For more info and an example, see our post on [Adaptive Learning](https://wpfusion.com/plugin-updates/adaptive-learning-with-wp-fusion-and-learndash-3-4/).

![](https://wpfusion.com/wp-content/uploads/2016/09/lifterlms-course-filter-steps-1024x892.jpg)

To enable this feature, toggle **Filter Steps** on the WP Fusion settings tab when editing any course.

#### Access Plans

You can also restrict the purchase of access plans based on a logged-in users CRM tags (or lists) by using the Required Tag(s) setting on any LifterLMS access plan.

![](https://wpfusion.com/wp-content/uploads/2016/09/lifterlms-access-plans-1-1024x403.jpg)

### Activity Tagging

WP Fusion supports several options for applying tags in your CRM based on LifterLMS activity.

#### Courses

Under the course settings for WP Fusion, there are three options: **Apply tags when course begun**, **Link with Tag**, and **Apply Tags – Completed**.

![](https://wpfusion.com/wp-content/uploads/2016/09/lifterlms-meta-box-course-1-1024x630.jpg)

Tags specified in **Apply tags when course begun** will be applied when a user is enrolled in the course. Note that this *does not* apply to course access that is granted via a Membership.

Tags specified in **Apply – Completed** will be applied when a user marks the course complete.

#### Course Auto-Enrollment

The **Link with Tag** setting lets you automatically enroll users in courses based on a tag in your CRM. When the selected tag is applied the user will be enrolled, and when the tag is removed the user will be unenrolled. This is a good way to automate course access based on automations in your CRM or purchases in other plugins.

**Note:** WP Fusion only allows you to use a single linked tag for auto-enrollment into courses. For more info on this [see the FAQ](https://wpfusion.com/documentation/faq/misc-faq/#why-cant-i-use-multiple-tags-for-auto-enrollments--link-with-tag).

#### Lessons

The settings area for lessons in similar, but only provides the option to apply tags when a lesson is marked complete.

![](https://wpfusion.com/wp-content/uploads/2016/09/lifterlms-meta-box-lesson-1024x399.jpg)

#### Memberships

WP Fusion also supports applying tags to a user when they are added to a membership level. You can configure this from the new WP Fusion tab added to the LifterLMS membership settings page.

![](https://wpfusion.com/wp-content/uploads/2016/09/lifterlms-meta-box-membership-1-1024x554.jpg)

There are three options, **Link with Tag**, **Additional Tags**, and **Remove Tags.**

**Link with Tag**: Linking a membership with a tag lets you automatically set a membership level via an automation in your CRM. By applying a tag in your CRM (“Premium Member” in the example above) and sending a [Webhook or HTTP Post](https://wpfusion.com/documentation/tutorials/webhooks/), the user will automatically be added to the membership level. If this tag is removed, the user will be removed from the membership level.

**Note:** WP Fusion only allows you to use a single linked tag for auto-enrollment into memberships. For more info on this [see the FAQ](https://wpfusion.com/documentation/faq/misc-faq/#why-cant-i-use-multiple-tags-for-auto-enrollments--link-with-tag).
**Additional Tags** are tags that will be applied one-time when a user first purchases or registers for the membership level. You can use these to track and engage with new customers.

**Remove Tags** will automatically remove the tags above if the membership is cancelled or a student is removed from the membership.

#### Access Plans

WP Fusion also allows you to associate tags with LifterLMS Access Plans, so you can tag students based on how they signed up for your courses.

![](https://wpfusion.com/wp-content/uploads/2016/09/lifterlms-access-plans-2-1024x403.jpg)

The settings for WP Fusion appear above the *Description* field when editing an Access Plan. The tags in the **Apply Tags** setting will be applied to a student when they purchase a plan, or sign up for a free plan.

You can optionally restrict access to plans using the **Required Tags** setting. If tags are selected, a user will need to be logged in and have at least one of the specified tags in order to purchase the plan.

If you’re using the [Abandoned Cart addon](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/), you will also see an option to apply tags when a student abandons a cart with this access plan in it.

#### Order statuses

In addition to applying tags based on access plan purchases, you can also apply tags based on other order statuses from the main WP Fusion settings page at Settings » WP Fusion » Integrations » LifterLMS.

![screenshot of the lifterlms order statuses settings page, showing input fields to apply tags for order statuses such as pending, on hold, cancelled, refunded, and payment failed. a blue save changes button is at the bottom.](https://wpfusion.com/wp-content/uploads/2016/09/lifterlms-order-statuses-1024x479.jpg)

The available statuses are Pending, On Hold, Cancelled, Refunded, and Failed.

If a customer’s order or subscription is later changed to active, the tags for any of the failed or non-active states will be automatically removed.

#### Quizzes

WP Fusion supports applying tags when a quiz is attempted in LifterLMS, and when a quiz is passed. To set this up, expand the WP Fusion section while editing any quiz.

![](https://wpfusion.com/wp-content/uploads/2016/09/llms-quizzes-1024x498.jpg)

The **Quiz Attempted** tags will be applied whenever the quiz is attempted. The **Quiz Passed** tags will only be applied if the student receives a passing grade.

#### Engagements

It’s also possible to automatically trigger an Engagement in LifterLMS when a CRM tag is applied to a student. This Engagement can then award an Achievement or a Certificate.

![](https://wpfusion.com/wp-content/uploads/2016/09/llms-engagements-1024x895.jpg)

To set this up, create a new Engagement and for the Triggering Event, select “A tag is applied to a student”. A box will then appear where you can select the tag to be used as the trigger, and you can select the Certificate or Engagement to award.

This is a great way to award Engagements based on events and automations in your CRM. For example you could grant a student a certificate when they’ve been a member of your site for one year.

#### Vouchers

WP Fusion supports applying tags in your CRM when a [LifterLMS voucher](https://lifterlms.com/docs/use-lifterlms-voucher-system/) is used during registration on your site.

To set this up, head to Orders » Vouchers » Edit Voucher, and click on the WP Fusion tab.

![](https://wpfusion.com/wp-content/uploads/2016/09/llms-vouchers-1024x539.jpg)

When a user registers with a voucher they will be synced to your connected CRM as a contact record, and any tags specified in the **Apply Tags** setting will be applied.

#### Groups

WP Fusion includes support for the [LifterLMS Groups extension](https://lifterlms.com/product/groups/), allowing you to apply tags in your CRM when members are added to groups.

To set this up head to Groups » WP Fusion in the WordPress admin.

![](https://wpfusion.com/wp-content/uploads/2016/09/llms-groups-admin-1024x462.jpg)

For each LifterLMS group in the table there are two options:

- **Apply Tags:**The tags selected here will be applied in your CRM when a member joins a group.
- **Remove Tags:**If this box is checked, the tags that were applied during enrollment will be removed when a user is removed from a group.

#### Tracks

WP Fusion includes support for [LifterLMS course tracks](https://lifterlms.com/docs/what-is-a-course-track/).

![](https://wpfusion.com/wp-content/uploads/2016/09/llms-course-tracks-1024x721.jpg)

When editing any track, you can specify tags to be applied in your CRM when all courses in that track are completed.

### Syncing Meta Fields

WP Fusion enables several LifterLMS meta fields for sync to your CRM. These can be found under Settings » WP Fusion » Contact Fields.

![](https://wpfusion.com/wp-content/uploads/2016/09/lifterlms-fields-1024x580.jpg)WP Fusion enables syncing custom fields and progress data between LifterLMS and your CRM.
In addition to the checkout fields WP Fusion adds several “pseudo” fields:

- **Membership Level Name:**This will be synced when a user joins or leaves a membership. If a user joins a membership, it will sync the name of the membership. If a user leaves a membership, the value will be synced as blank.
- **Membership Start Date:**This will sync the current date and time whenever a user joins a membership.
- **Membership Status:**When a user joins a membership, this will be synced as 
```
enrolled
```

. When a user leaves a membership, it will be synced as 
```
unenrolled
```

.
- **Last Lesson Completed:**Each time a lesson is marked complete, this will sync the title of the lesson.
- **Last Course Completed:**Each time a course is marked complete, this will sync the title of the course.

You can use these fields to track progress in your CRM and potentially reduce the number of tags that need to be applied to a contact.

#### Custom Fields

If you’re using the [LifterLMS Custom Fields addon](https://lifterlms.com/product/custom-fields/) to add custom fields to your registration or account forms, these will be detected automatically by WP Fusion and will show up for sync under the LifterLMS header on the contact fields list.

When a user registers or updates their profile, any enabled fields will be synced to the corresponding custom fields in your CRM.

### Abandoned cart tracking

WP Fusion’s [Abandoned Cart addon](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/) (available to Plus and Professional license holders) can capture customer details on the LifterLMS checkout form and sync them to your CRM before checkout has been completed.

You can then use tags and automations in your connected CRM to follow up with customers who started but didn’t complete checkout.

With LifterLMS, cart abandonment tags can be set in the WP Fusion settings section when editing any access plan.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-llms-1024x527.jpg)WP Fusion’s Abandoned Cart addon lets you tag LifterLMS customers in your CRM when they start, but don’t finish, checking out on your store.
When a customer begins to check out with the access plan (or fails to complete checkout), the selected tags will be applied in your CRM or email marketing system, and can be used to trigger followup automations, offer discounts, and in your reports.

For more information on the available options with abandoned cart tracking and LifterLMS, see the [Abandoned Cart Tracking documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

### Enhanced Ecommerce

WP Fusion’s [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) (available to Plus and Professional license holders) can sync LifterLMS orders to supported CRMs and email marketing platforms.

![](https://wpfusion.com/wp-content/uploads/2016/07/ac-deep-data-5-1024x875.jpg)Deep Data from LifterLMS showing on the contact record in ActiveCampaign
With LifterLMS, the Ecommerce Addon will send enhanced ecommerce data for all purchases of access plans, including support for discounts.

In CRMs that have Products as separate entities from Orders, you can associate your LifterLMS access plans with CRM products by selecting them from the product dropdown while editing the access plan.

![](https://wpfusion.com/wp-content/uploads/2016/06/lifterlms-ecommerce-product-1024x303.jpg)

		The CRMs supported by Enhanced Ecommerce are listed below. Click on each to learn more about the capabilities of the integration.

- [ActiveCampaign](https://wpfusion.com/documentation/ecommerce-tracking/activecampaign-ecommerce/)
- [AgileCRM](https://wpfusion.com/documentation/ecommerce-tracking/agilecrm-ecommerce/)
- [Brevo](https://wpfusion.com/documentation/ecommerce-tracking/brevo-enhanced-ecommerce/)
- [Drip](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/)
- [Groundhogg](https://wpfusion.com/documentation/ecommerce-tracking/groundhogg-ecommerce/)
- [HighLevel](https://wpfusion.com/documentation/ecommerce-tracking/highlevel-ecommerce/)
- [HubSpot](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/)
- [Infusionsoft / Keap](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/)
- [MailerLite](https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/)
- [NationBuilder](https://wpfusion.com/documentation/ecommerce-tracking/nationbuilder-ecommerce/)
- [Ontraport](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/)
- [Salesforce](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/)
		

### Event tracking

Using the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/), you can track LifterLMS course progress as events in supported CRMs.

Events can be configured in two places. On an individual course, under the course settings for Event Tracking:

![](https://wpfusion.com/wp-content/uploads/2016/09/event-tracking-lifterlms-1024x631.jpeg)Event tracking can be configured when editing any course under the course settings for Event Tracking.
Or in the Event Tracking global settings:

![](https://wpfusion.com/wp-content/uploads/2016/09/event-tracking-lifterlms-global-settings-1024x728.jpeg)Event tracking can also be configured globally at Settings » Event Tracking.
The available triggers and merge fields for event tracking with LifterLMS are:

- **Course Start:**Triggered when a user enrolls in a course.
- ```
{id}
```

: The course ID.
- ```
{title}
```

: The course title.
- ```
{last_completed_step}
```

: The title of the last lesson or quiz completed in the course.
- ```
{course_progress}
```

: The student’s percentage progress in the course.
- **Course Progress:** Triggered whenever a lesson, topic, or quiz is completed within the course, as well as when the course itself is completed.
- ```
{id}
```

: The course ID.
- ```
{title}
```

: The course title.
- ```
{last_completed_step}
```

: The title of the last lesson or quiz completed in the course.
- ```
{course_progress}
```

: The student’s percentage progress in the course.
- **Quiz Completed:**Triggered whenever a quiz in the course is marked complete.
- ```
{id}
```

: The quiz ID.
- ```
{title}
```

: The quiz title.
- ```
{grade}
```

: The student’s quiz grade.

### Batch Operations

WP Fusion includes a batch processing tool to retroactively apply tags in your CRM based on each user’s current course or membership enrollments in LifterLMS.

This is found at Settings » WP Fusion » Advanced » Batch Tools.

![](https://wpfusion.com/wp-content/uploads/2016/09/lifterlms-batch-operations-1024x517.jpg)

There are two options:

- **LifterLMS course enrollment statuses:**For each user on your site, applies tags in your CRM based on their current LifterLMS course enrollments, using the settings configured on each course. Does not sync any custom fields.
- **LifterLMS memberships statuses:**Applies tags for all LifterLMS members based on the tags configured for their membership level. If memberships have been cancelled, and you’ve selected “Remove tags if membership is cancelled,” the tags will be removed. Does not sync any custom fields.
- **LifterLMS memberships meta:**Syncs any enabled [membership fields](#syncing-meta-fields) (like Level Name, Start Date, and Status) to the corresponding custom fields in your CRM. Does not modify any tags.

---

## Sensei

**Source:** [https://wpfusion.com/documentation/learning-management/sensei/](https://wpfusion.com/documentation/learning-management/sensei/)

Using WP Fusion and the [Sensei addon for WooCommerce](https://www.woothemes.com/products/sensei/), you can restrict access to Lessons, and Topics based on a user’s CRM tags.

You can also apply tags to a user when they’ve begun a lesson, or topic, and likewise when it has been marked complete.

See the screenshot on the right for an example of the options WP Fusion offers you when configuring a Sensei course.
![learndash](https://wpfusion.com/wp-content/uploads/2016/02/learndash-546x1024.jpg)

---

## LearnDash

**Source:** [https://wpfusion.com/documentation/learning-management/learndash/](https://wpfusion.com/documentation/learning-management/learndash/)

### Overview

Using WP Fusion and [LearnDash](https://wpfusion.com/go/learndash), you can automatically add students to [your CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they register on your site.

You also can restrict access to course content using tags in your CRM, apply tags based on progress, and use tags as automated triggers for course and group enrollments.

### Restricting access to content

You can restrict access to Courses, Lessons, and Topics based on a user’s CRM tags, and redirect them to another page (like a sales page) if they don’t have the required tags.

You can also apply tags to a user when they’ve begun a course, lesson, or topic, and likewise when it has been marked complete.

See the screenshot below for an example of the options WP Fusion offers you when configuring a LearnDash lesson or topic:

![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-course-side-metabox-358x1024.jpg)

For more information on restricting access to content and the main WP Fusion meta box, [see the documentation here](https://wpfusion.com/documentation/getting-started/meta-box/).

#### Lesson, topic, and quiz access rules

By default, if a course is protected by WP Fusion, then every lesson, quiz, and topic in that course will inherit the same access rules.

If needed you can override this by configuring the WP Fusion meta box on any lesson (or quiz or topic) individually. If access rules have been specified on any lesson, quiz, or topic, then those rules will take priority over the course settings.

### Course settings and auto-enrollment

WP Fusion also adds some options specific to LearnDash courses. You can find these on the WP Fusion settings panel when editing any course.

![a screenshot of wp fusion course settings in a wordpress dashboard, showing options to apply and remove tags, control course navigation, and set custom fields for enrollment date and expiration date.](https://wpfusion.com/wp-content/uploads/2016/02/learndash-course-settings-new-1008x1024.jpg)

There are nine settings here:

- **Apply tags – Marked Complete:**These tags will be applied in your CRM when a user fully completes the course.
- **Apply tags – Enrolled:** These tags will be applied to a user when they are enrolled in the course, either manually, via a free signup, or another plugin integration. They will not be removed if the student is removed from the course, and they do not affect automated enrollments. They will not be applied if the user is given access to the course as part of a group.
- **Remove Tags:**When this is checked, the tags applied at enrollment will be automatically removed if the user is unenrolled from the course.
- **Link with tag:**Using this setting you can “link” a tag in your CRM with a LearnDash course. When this tag is applied, the user will automatically be enrolled in the course. If the tag is removed, the user will be un-enrolled. Likewise if the user is enrolled in the course (either manually or via a purchase) the linked tag will be applied, and if a user is removed from the course the linked tag will be removed.
- **Unenroll from Course when Linked Tag is Removed:**By default, WP Fusion will unenroll a user from a course when their linked tag is removed. However, if you are using [drip-released content](https://www.learndash.com/blog/why-you-should-use-drip-content-for-your-courses/), this could cause a payment failure to remove the user from the course, and when they re-enroll the content drip will start over from the beginning. Disabling this setting will leave the user enrolled in the course when the linked tag is removed. In this case, it’s recommended to also [protect access to the course with a tag](https://wpfusion.com/documentation/learning-management/learndash/#restricting-access-to-content), so users can’t access the course until they’ve reactivated their subscription.
- **Course Navigation:**This setting controls how WP Fusion handles the display of restricted lessons and other content in the course navigation. The options are:
- **Default:**The course navigation will show all content, regardless of the user’s CRM tags.
- **Lock lessons:**Lessons the user cannot access will show as disabled. You can optionally specify a message to be displayed as a badge on any locked lessons. [See below](#lock-lessons) for more info.
- **Filter Course Steps:** Lessons the user cannot access will be completely removed from the course navigation and progression. This can be used to create personalized courses based on a user’s tags in your CRM (aka “Adaptive Learning”). [See below](#filter-course-steps) for more info.
- **Field – Course Progress:**You can optionally select a custom field in your CRM to be used for course progress tracking. When a user’s course progress is updated, their course completion percentage will be synced to the selected custom field.
- **Field – Course Enrollment Date:**The selected field in your CRM will be updated with the student’s course enrollment date.
- **Field – Course Enrollment Expiration Date:**If your courses are [set to exipre](https://www.learndash.com/support/docs/core/courses/course-access/#course-access-expiration), this field will be updated with the student’s course access expiration date (at the time they enroll in the course).

**Note:** If you use an auto-enrollment tag, you should set the course price type to “Closed” to prevent users from getting automatically enrolled when they register. It’s also not necessary to use “Restrict access to this course” if the course type is Closed.
**Note:** Auto-enrollments are triggered when a user’s tags are modified or loaded from your CRM. Just setting a linked tag on a course will not automatically enroll everyone who has that tag. To trigger a refresh of your users’ tags (and any automated enrollments) you can run a *Resync Tags* operation from Settings » WP Fusion » Advanced » Batch Operations.
**Note:** WP Fusion only allows you to use a single linked tag for auto-enrollment into courses. For more info on this [see the FAQ](https://wpfusion.com/documentation/faq/misc-faq/#why-cant-i-use-multiple-tags-for-auto-enrollments--link-with-tag)

#### Lock lessons

If you’ve protected lessons and topics using CRM tags, you can optionally enable the **Lock Lessons** setting on the course (see [Course Settings](#course-specific-settings), below) to display those lessons as locked in the course navigation.

![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-lock-lessons-buddyboss-theme-1024x659.jpg)Lessons and topics can be shown as disabled in the course navigation using the **Lock Lessons** setting.
![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-lesson-locked-1024x671.jpg)In this screenshot, the second lesson is locked by WP Fusion. This is using the default LearnDash theme.
![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-steps-locked-in-focus-mode-1024x605.jpg)Locked lessons and topics are also disabled in focus mode (using the default LearnDash theme).
The default locked lesson text is “Not Available”. You can override this globally at Settings » WP Fusion » Integrations » LearnDash, or on individual courses by editing the Locked Lesson Text option.

The Locked Lessons feature also works with the [BuddyBoss app](https://wpfusion.com/documentation/membership/buddyboss/). In that case, the lesson will be displayed as disabled.

![](https://wpfusion.com/wp-content/uploads/2016/02/buddyboss-app-locked-lesson-1024x941.jpg)Lessons locked by WP Fusion’s “Lock Lessons” setting are displayed as disabled in the BuddyBoss app.
If someone tries to open it, the Locked Lesson Text will be displayed in a popup.

#### Filter Course Steps

This feature (available in LearnDash v3.4.0+) applies WP Fusion’s [access rules](https://wpfusion.com/documentation/getting-started/access-control/) to each step in the course, (such as lessons, topics, or quizzes). This is the same as enabling [Filter Queries](https://wpfusion.com/documentation/getting-started/access-control/#filter-queries), but it can be enabled for individual courses.

When a user doesn’t have access to the step, based on their CRM tags, the step will be hidden from the course navigation, and won’t be required for course completion.

You can use this to create personalized course experiences and objectives for different users based on their CRM tags. For more info [see this blog post](https://wpfusion.com/plugin-updates/adaptive-learning-with-wp-fusion-and-learndash-3-4/).

**Note:** For best compatibility, it’s recommended to enable [Shared Course Steps](https://www.learndash.com/support/docs/core/courses/shared-course-steps/) in the LearnDash course settings.

With Shared Course Steps disabled, restricted lessons will be hidden, but the course progress tracker and step count may be inaccurate.

#### Strategies for managing course access

There are two common ways to manage LearnDash course access with WP Fusion:

**1. (Recommended) Use LearnDash to manage access to the course content, and WP Fusion to trigger enrollments into the course based on tags in your CRM.**

This is our recommended setup since it has the best compatibility with LearnDash. With this setup you would:

- Leave *Users must be logged in to view this course* un-checked in the WP Fusion meta box
- Set the course access type to Closed
- Set an auto-enrollment tag on the course

With this method, LearnDash handles the display of the course overview page based on whether or not a user is enrolled in the course.

This also works properly with Sample Lessons in LearnDash, and drip-feeding course content.

![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-ld-course-access-1024x679.jpg)In this screenshot you can see a simple course that the user isn’t currently enrolled in. LearnDash shows a course overview, the price, and links to either purchase the course or log in.
By applying a tag in your CRM, a user can automatically be enrolled in the course (see Auto-enrollment above), and the course overview page will update accordingly.

When a user is enrolled in the course it will also properly update the [LearnDash Course Grid](https://www.learndash.com/support/docs/add-ons/course-grid/), the BuddyBoss enrolled courses list, and any other plugins that work with LearnDash.

**For handling course bundles or “all access passes”,** you can also use auto-enrollment tags [with LearnDash groups](#groups). This lets you create different collections of courses that are managed by a single auto-enrollment tag.

**2. (Not recommended) Use WP Fusion to manage access to the course content, bypassing LearnDash’s access rules.**

WP Fusion [adds a meta box](https://wpfusion.com/documentation/getting-started/access-control/) to every post and page on your site that allows you to protect your content using tags in your CRM, and redirect the user to another page if they don’t have the required tags.

Using this meta box you can also protect your LearnDash courses and course content based on CRM tags. With this setup you would:

- Select *Users must be logged in to view this course* in the WP Fusion meta box, and choose some required tags to view the course
- Either select a redirect in the meta box, or leave the redirect blank to display [the restricted content message](https://wpfusion.com/documentation/getting-started/general-settings/#default-restricted-content-message)
- Set the course access type to Open
- Do not set an auto-enrollment tag on the course

With this method, every user on the site is automatically enrolled in the course, but they can only *view* the course content if they have the right tags.

![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-wpf-access-control-1024x432.jpg)In this screenshot you can see a course page that is protected by WP Fusion, using a CRM tag.
The problem with protecting the visibility of the course with a tag is that you lose all of the LearnDash options for customizing the page appearance when people aren’t enrolled. As well, the user will see themselves as enrolled in all courses, even if they don’t have access— which could be confusing for your students.

For that reason it’s recommended to let LearnDash handle protecting your course content by setting the course access type to Closed, and then using an auto-enrollment tag so that WP Fusion can update student enrollments.

### Quizzes

WP Fusion includes a few settings specific to LearnDash quizzes. These will appear in the WP Fusion tab when editing any quiz in the admin.

![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-quiz-settings-1024x713.jpg)

In addition to the [standard access control options](https://wpfusion.com/documentation/getting-started/access-control/), the available quiz options are:

- **Apply these tags when essay submitted:**These tags will be applied in your CRM when a student has submitted an essay. They can be used to trigger an email to the student, or (for example) to create a task for the instructor to grade the essay.
- **Apply these tags when quiz passed:**These tags will be applied in your CRM when a quiz is submitted and the user has a passing score.
- **Apply these tags when quiz failed:**These tags will be applied in your CRM when a quiz is submitted and the user has a failing score.
- **Field – Final Score:**This option allows you to sync a student’s final quiz score (as a percentage) to a custom field in your CRM. It will be updated each time the quiz is submitted.
- **Field – Final Points:**This is the same as the **Sync final score** setting except instead of the quiz score, the total *points* earned by the user will be synced to the selected custom field.
- **Field – Category Scores:**If your quiz has [question categories](https://www.learndash.com/support/docs/core/quizzes/questions/#question_categories), you can sync the score for each question category to a separate custom field in your CRM.

### Quiz questions

![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-quiz-questions-1024x256.jpg)

Using WP Fusion you can sync the answers to individual quiz questions to custom fields in your CRM. This can be configured within the WP Fusion meta box when editing any single quiz question.

### Groups

WP Fusion’s settings for LearnDash groups can be found under Settings » Group Access Settings when editing any group.

![](https://wpfusion.com/wp-content/uploads/2016/02/ld-group-settings-1024x738.jpg)

Similar to Courses, the are four settings here:

- **Apply tags – Enrolled:** These tags will be applied to a user when they are enrolled in the group, either manually, via a free signup, or another plugin integration. They will not be removed if the student is removed from the group, and they do not affect automated enrollments.
- **Remove Tags:**When this is checked, the tags applied at enrollment will be automatically removed if the user is unenrolled from the group.
- **Link with Tag:**Using this setting you can “link” a tag in your CRM with a LearnDash group. When this tag is applied, the user will automatically be enrolled in the group. If the tag is removed, the user will be un-enrolled. Likewise if the user is enrolled in the group (either manually or via a purchase) the linked tag will be applied, and if a user is removed from the group the linked tag will be removed.
- **Link with Tag – Group Leader:**This setting works similarly to Link with Tag, except for group leaders instead of group members. When this tag is applied, the user will automatically be set as the leader of the group. If the tag is removed, the user will be un-enrolled from the group leader position.

### Assignments

WP Fusion allows you to automatically tag students in your CRM when they upload an assignment to a LearnDash lesson.

![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-assignment-uploads-1024x318.jpg)

This setting appears when editing any lesson where assignment uploads are enabled.

### Syncing course progress

In addition to [syncing course progress on individual courses](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment), WP Fusion adds several “pseudo” fields that enable syncing a student’s overall LearnDash progress to custom fields in your CRM. This can be configured under Settings » WP Fusion » Contact Fields.

![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-last-lesson-course-fields-1-1024x317.jpg)

The fields are:

- **Last Course Enrolled:** When a student is enrolled in a course, the name of the course will be synced.
- **Last Lesson Completed:**When a lesson is marked complete, the name of the lesson will be synced.
- **Last Lesson Completed Date:**When a lesson is marked complete, the date and time will be synced.
- **Last Topic Completed:**When a topic is marked complete, the name of the topic will be synced.
- **Last Course Progressed:**Whenever a student completes any content in a course (lesson, topic, quiz, etc.) the name of the course will be synced.
- **Last Course Completed:**When a course is marked complete, the name of the course will be synced.
- **Last Course Completed Date:**When a course is marked complete, the date and time will be synced.

You can use these fields to track progress in your CRM and potentially reduce the number of tags that need to be applied to a contact.

### ThriveCart

Using the [LearnDash + ThriveCart extension](https://www.learndash.com/add-on/thrivecart/) you can automatically enroll new students into LearnDash courses after a successful ThriveCart purchase.

With LearnDash 3.4.0 and higher, WP Fusion can automatically detect new users imported from ThriveCart, and sync their randomly generated password back to your CRM for sending in a welcome email. To enable this, simply turn on the [Return Password setting](https://wpfusion.com/documentation/getting-started/general-settings/#imported-users) from the Webhooks section in the WP Fusion settings.

### Event Tracking

Using the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/), you can track LearnDash course progress as events in supported CRMs.

Events can be configured in two places. On an individual course, in the Settings panel, on the WP Fusion metabox:

![](https://wpfusion.com/wp-content/uploads/2016/02/event-tracking-learndash-1024x415.jpeg)Event tracking can be configured in the Settings panel when editing any course on the WP Fusion metabox.
Or in the Event Tracking global settings:

![](https://wpfusion.com/wp-content/uploads/2016/02/event-tracking-learndash-global-settings-1-1024x738.jpeg")Event tracking can also be configured globally at Settings » Event Tracking.
If your CRM [supports multi-key events](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/#multi-key-events), you will see additional options for syncing event data.

![](https://wpfusion.com/wp-content/uploads/2024/01/event-tracking-learndashuser-957x1024.jpg)WP Fusion’s event tracking with LearnDash supports course progress and quiz attempts.
The available triggers and merge fields for event tracking with LearnDash are:

- **Course Started:**Triggered when a user enrolls in a course.
- ```
{id}
```

: The course ID.
- ```
{title}
```

: The course title.
- ```
{last_completed_step}
```

: The title of the last lesson, topic, or quiz completed in the course.
- ```
{course_progress}
```

: The student’s percentage progress in the course.
- **Course Progress:** Triggered whenever a lesson, topic, or quiz is completed within the course, as well as when the course itself is completed.
- ```
{id}
```

: The course ID.
- ```
{title}
```

: The course title.
- ```
{last_completed_step}
```

: The title of the last lesson, topic, or quiz completed in the course.
- ```
{course_progress}
```

: The student’s percentage progress in the course.
- **Quiz Completed:**Triggered whenever a quiz in this course is marked complete.
- ```
{id}
```

: The quiz ID.
- ```
{title}
```

: The quiz title.
- ```
{percentage}
```

: The student’s quiz score as a percent.
- ```
{points}
```

: The student’s total quiz points.

### Batch operations

WP Fusion includes two batch processing tools to retroactively apply tags in your CRM based on each user’s current course and/or group enrollments in LearnDash.

These are found at Settings » WP Fusion » Advanced » Batch Tools.

![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-batch-operation-1024x480.jpg)

#### Course enrollment statuses

When you run the **LearnDash course enrollment statuses** operation, WP Fusion will check the current course enrollments for each user on your site, and apply any tags configured for that course.

This will not apply any tags if the user is enrolled in a course as part of a LearnDash Group.

This will not update any course or group enrollments (via linked tags), it only applies tags in your CRM.

#### Course progress

The **LearnDash course progress** batch operation will check the course progress for each user on your site, and retroactively apply any tags configured in the *Apply tags when marked complete* setting for every course, lesson, topic, and quiz the user has already completed.

#### Enrollment Date & Expiration

When you have enabled **Course access expiration** to a course, WP Fusion will sync the data a user has enrolled in the course with your CRM when they are added to a course, as well as the date that that user’s enrollment expires.

#### Group enrollment statuses

When you run the **LearnDash group enrollment statuses** operation, WP Fusion will check the current group enrollments for each user on your site, and apply any tags configured for that group (the *Apply Tags – Enrolled* and *Link With Tag*settings).

This will not update any course or group enrollments (via linked tags), it only applies tags in your CRM.

#### Course progress meta

The **LearnDash course progress meta** batch operation syncs any enabled progress [meta fields](#meta-fields) (Last course enrolled, last course completed, last course completed date, course completion percentages, etc.) to the selected custom fields in your CRM. It does not apply any tags or affect enrollments.

#### Quiz results

The **LearnDash quiz results** batch operation syncs any enabled quiz result fields (quiz scores, points, category scores) to your CRM based on each user’s quiz progress. Does not apply any tags or affect enrollments.

---

