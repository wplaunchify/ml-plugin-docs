# Reports

*Category from LearnDash documentation*

---

## How to disable core reports

**Source:** [https://learndash.com/support/kb/core/reports/how-to-disable-core-reports/](https://learndash.com/support/kb/core/reports/how-to-disable-core-reports/)

ProPanel reports have been merged into LearnDash core and since then there have been some reports of the admin area being slow. If you find that your admin screens are loading very slowly, it might help to disable the core reports.

To disable core reports in LearnDash, simply add the following constant to your 
```
wp-config.php
```

 file. This file is located in your WordPress files at the root. Login to your site via SFTP and navigate to the root of your WordPress install. Open the 
```
wp-config.php
```

 file and you can enter the constant below, right above the line that says 
```
/* That's all, stop editing! Happy blogging. */
```

**Here’s what that should look like:**

```
define( 'LEARNDASH_MODULE_REPORTS_DISABLED', true ); 

/* That's all, stop editing! Happy blogging. */
```

---

## Reporting

**Source:** [https://learndash.com/support/kb/core/reports/reporting-2/](https://learndash.com/support/kb/core/reports/reporting-2/)

LearnDash includes a reports feature. It will give you additional insight into your courses, including completion metrics and the latest learner activity. You can view data for a specific course, user, or group using filters.

**NOTE:**LearnDash uses a system-level setting to determine if “Gained Course Access” activity, such as course or group enrollment, should be included in your reports and widgets. By default, this activity is not included in the reports. This setting is not currently user-configurable, but can be enabled by a developer.

## Dashboard & Widget Overview

There are five reporting widgets available under LearnDash LMS > Reports. By default, Reports will only be visible to Admins and Group Leaders.

- Admins will see all data
- Group Leaders will only see data relating to the groups that they manage

### Reports Overview Widget

Displays the number of students, courses, pending assignments, and pending essays (to be approved by admin or group leader). Each item is a clickable link that will let you view the selected section with more details.

![](https://learndash.com/support/wp-content/uploads/2024/09/Reporting-Overview-Widget.png)

### Activity Widget

This widget displays real-time activity in your courses. Supported activities include course access gained as well as course, lesson, topic, and quiz completion. Associated data, such as timestamps, scores, and steps, will be displayed when applicable.

**NOTE:**This widget will always display the “Gained Course Access” activity by passing query parameter to ensure accurate tracking.

![](https://learndash.com/support/wp-content/uploads/2024/09/Reporting-Activity-Widget.png)

You can export Course and Quiz reports via the buttons at the top of the widget. These reports will include only currently filtered data. Admins will be able to view all user activity, while Group Leaders can only view activity from users in their group(s).

The number of items shown per page depends on the pagination in the LearnDash Report Filters widget.

### Report Filters Widget

The Report Filters Widget lets you filter by course, user, or group. You can use any combination of these filters to narrow down your results. Some examples of filters include:

**User Filter**: Select a user Select a progress status
Generate a list of enrolled courses for a specific user and progress statistics for those courses.

**Course Filter**: Select a course Select a progress status
Generate a list of users enrolled in the selected course and progress statistics for each user.

**Group Filter**: Select a group Select a progress status
Generate a list of users in the selected group and progress statistics for each user.

**Date Filter**: Select a group, course, or user Select progress status Filter by Date
Filter the list of users further based on the selected group, course, or users. Leaving this empty will disregard the filter.

![](https://learndash.com/support/wp-content/uploads/2024/09/Reports-Filters-Widget.png)

**NOTE:**When users filter by **All Groups -> All Courses -> All Statuses**, it will show all the activities for learners on all their lessons and courses. For instance, if a learner is listed 29 times, that is the total number of lessons they have in the classes that they are enrolled in.

#### Additional Options

- **Email**lets you communicate with the users selected in the Filters section. Note thatthe emails will be sent using the default site administration email and site title.However, you can set[Email Sender Settings](https://learndash.com/support/docs/core/settings/emails/#email-sender-settings)under LearnDash LMS > Settings > Emails.
- **Pagination**will control the output of both lists in the Reporting widget and the Activity widget.
- **Full Page**will take you to a full-page view of the Reporting widget for a distraction-free and full-width environment.

### Progress Chart Widget

Set the LearnDash Report Filters Widget to filter by group, course, or user, and two charts will appear.

On the left is the overall**Progress Distribution**chart, which shows the user or course distribution between Not started, In Progress, and Completed course statuses.

![](https://learndash.com/support/wp-content/uploads/2024/09/Reports-Progress-Chart-Widget.png)

On the right is a breakdown of all users or courses that are In Progress in the selected filter (**In Progress Breakdown**). Use the default setting to display the in-progress distribution in 20% increments; 20, 40, 60, 80, and 100. You can change these increments and other items using the filters discussed in the Developer section posted later in this document.

### Reporting Widget

The Reporting Widget displays the status of the users course progress against the filtered course in the progress bar and percentage number. If you hover over the progress bar, it will display the number of completed steps.

You can use the Report Filters widget to filter reports by course, user, group, or completion status and the Reporting widget will display reports accordingly.

**NOTE:**Users who have gained course access through a Group will not be listed while their status is “Not Started” by default. This behavior can be changed with custom development. If you need this, check out our [LearnDash Experts](https://www.learndash.com/experts/) page.

![](https://learndash.com/support/wp-content/uploads/2024/09/Reporting-Widget.png)

## Front-end Display of Reports

When displaying LearnDash reports on the front-end of your website, you have three options: Blocks, Shortcodes, and Templates, each offering unique benefits depending on your needs.

If you prefer a visual, drag-and-drop approach, using **Blocks** in the WordPress block editor is an excellent choice. It allows for easy customization, making it ideal for those who want to create dynamic pages without any coding knowledge.

**Shortcodes** provide a more flexible solution for users who are comfortable with a bit of code. Shortcodes can be inserted into any page, post, or widget, giving you the freedom to place reports exactly where and how you want them.

If you are looking for complete control over layout and design, **Templates** enable users to customize the display and integrate reports directly into the site’s theme.

Each method provides a different level of customization, allowing you to present your LearnDash reports in a way that best suits your site’s design and functionality.

### Blocks

Create custom report templates with LearnDash Reporting blocks by placing them anywhere within the main content of a page or post.

![](https://learndash.com/support/wp-content/uploads/2024/09/LearnDash-Blocks.png)

**NOTE:**This is for the WordPress Gutenberg block editor only and requires LearnDash v4.8.0 or higher to be installed.

To learn more about the block editor, click[here](https://wordpress.org/documentation/article/wordpress-block-editor/)

Follow these steps to add LearnDash Reporting Blocks to your pages or posts.

1. Create/edit a page/post
2. Click the + icon to add a new block
3. Search for LearnDash Report & click on the block you want to insert
4. Adjust your settings in the Block options panel

The following blocks are available for your use:

1. LearnDash Report Filters
2. LearnDash Reports Overview
3. LearnDash Progress Chart
4. LearnDash Activity Report
5. LearnDash Reporting
6. LearnDash Full Report Link

Once you have finished adding the blocks you need, select Publish.

## Additional Reporting

Additional reporting metrics are available using the following tools:

- [User Data](https://learndash.com/support/docs/reporting/user-data/)
- [ProPanel](https://learndash.com/support/docs/reporting/propanel)
- [SCORM and xAPI](https://learndash.com/support/docs/reporting/scorm-xapi/)

## For Developers

If you are customizing LearnDash reporting functionality, ensure that your query logic aligns with this system setting to maintain reporting consistency.

For additional support, refer to the [LearnDash Developer Documentation](https://developers.learndash.com/function/learndash_reports_get_activity/) on activity queries.

```
$activities_with_access_records_even_if_started_or_complete = learndash_reports_get_activity(
	[
		/**
		 * "access" activity only relates to "course" activity, so `always_include_access_results`
		 * will only work for "course" activity.
		 * 
		 * Other activity types can be included here, but at least one must be `course`.
		 * 
		 * Additionally, `activity_status` must either be the default (empty) or include `NOT_STARTED`.
		 */
		'activity_type'                 => [ 'course' ],
		'always_include_access_results' => true,
	]
);
```
```
$activities_with_access_records_even_if_started_or_complete = learndash_reports_get_activity(
	[
		/**
		 * "access" activity only relates to "course" activity, so `always_include_access_results`
		 * will only work for "course" activity.
		 * 
		 * Other activity types can be included here, but at least one must be `course`.
		 * 
		 * Additionally, `activity_status` must either be the default (empty) or include `NOT_STARTED`.
		 */
		'activity_type'                 => [ 'course' ],
		'always_include_access_results' => true,
	]
);
```

## FAQ & Troubleshooting

.kt-accordion-id7092_8128bf-b721 .kt-accordion-inner-wrap{column-gap:var(--global-kb-gap-md, 2rem);row-gap:10px;}.kt-accordion-id7092_8128bf-b721 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;background:#ffffff;padding-top:var(--global-kb-spacing-sm, 1.5rem);padding-right:var(--global-kb-spacing-sm, 1.5rem);padding-bottom:var(--global-kb-spacing-sm, 1.5rem);padding-left:var(--global-kb-spacing-sm, 1.5rem);}.kt-accordion-id7092_8128bf-b721 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:0px solid #f2f2f2;border-left:0px solid #f2f2f2;border-top-left-radius:6px;border-top-right-radius:6px;border-bottom-right-radius:6px;border-bottom-left-radius:6px;background:#f2f2f2;color:#555555;padding-top:14px;padding-right:16px;padding-bottom:14px;padding-left:16px;}.kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:before{background:#555555;}.kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger{background:#555555;}.kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:before{background:#f2f2f2;}.kt-accordion-id7092_8128bf-b721 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id7092_8128bf-b721 .kt-blocks-accordion-header:focus-visible{color:#444444;background:#eeeeee;border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}.kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion--visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger, body:not(.hide-focus-outline) .kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#eeeeee;}.kt-accordion-id7092_8128bf-b721 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id7092_8128bf-b721 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{color:#000000;background:#f2f2f2;border-top-color:#BE530B;border-top-style:solid;border-right-color:#BE530B;border-right-style:solid;border-bottom-color:#BE530B;border-bottom-style:solid;border-left-color:#BE530B;border-left-style:solid;}.kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#000000;}.kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger{background:#000000;}.kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id7092_8128bf-b721:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#f2f2f2;}@media all and (max-width: 1024px){.kt-accordion-id7092_8128bf-b721 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;}}@media all and (max-width: 1024px){.kt-accordion-id7092_8128bf-b721 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:0px solid #f2f2f2;border-left:0px solid #f2f2f2;}}@media all and (max-width: 1024px){.kt-accordion-id7092_8128bf-b721 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id7092_8128bf-b721 .kt-blocks-accordion-header:focus-visible{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}}@media all and (max-width: 1024px){.kt-accordion-id7092_8128bf-b721 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id7092_8128bf-b721 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#BE530B;border-top-style:solid;border-right-color:#BE530B;border-right-style:solid;border-bottom-color:#BE530B;border-bottom-style:solid;border-left-color:#BE530B;border-left-style:solid;}}@media all and (max-width: 767px){.kt-accordion-id7092_8128bf-b721 .kt-accordion-inner-wrap{display:block;}.kt-accordion-id7092_8128bf-b721 .kt-accordion-inner-wrap .kt-accordion-pane:not(:first-child){margin-top:10px;}.kt-accordion-id7092_8128bf-b721 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;}.kt-accordion-id7092_8128bf-b721 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:0px solid #f2f2f2;border-left:0px solid #f2f2f2;}.kt-accordion-id7092_8128bf-b721 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id7092_8128bf-b721 .kt-blocks-accordion-header:focus-visible{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}.kt-accordion-id7092_8128bf-b721 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id7092_8128bf-b721 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#BE530B;border-top-style:solid;border-right-color:#BE530B;border-right-style:solid;border-bottom-color:#BE530B;border-bottom-style:solid;border-left-color:#BE530B;border-left-style:solid;}}
**Why are my reporting widgets empty or not showing any data?**Make sure you are running the latest version of LearnDash. Then, go to **LearnDash LMS > Settings > Upgrade Data** and upgrade the Course and Quiz data.

**When I attempt to export my data, nothing happens. Why can’t I export my course or quiz data?**Check with your hosting provider to see if object caching is enabled. If it is, request to have it disabled, and the reports will be generated.

**My language has special characters that aren’t displaying correctly on the report export. How can I fix this?**Insert the code snippet listed at [https://developers.learndash.com/hook/learndash_csv_object/](https://developers.learndash.com/hook/learndash_csv_object/) into your theme’s functions.php file.

---

## SCORM and xAPI

**Source:** [https://learndash.com/support/kb/core/reports/scorm-xapi/](https://learndash.com/support/kb/core/reports/scorm-xapi/)

SCORM 1.2 and SCORM 2004 are supported for Articulate, iSpring, and Adobe Captivate by using a third-party add-on ([GrassBlade xAPI Companion](https://www.nextsoftwaresolutions.com/grassblade-xapi-companion/) or [Tin Canny add-on by Uncanny Owl](https://www.learndash.com/scorm-tools)). These add-ons allow you to insert the SCORM content into your LearnDash courses.

**NOTE** Content created *within* LearnDash is not SCORM compliant.

If you go the route of [xAPI](http://xapi.com), you’ll need to specify a Learning Record Store (LRS) as well. We recommend one of the following:

- [GrassBlade LRS](https://www.nextsoftwaresolutions.com/grassblade-lrs-experience-api/) *(includes a direct LearnDash integration)*
- [Essentials LRS](https://www.watershedlrs.com/product/pricing/essentials-learning-record-store)

If you don’t need data (as in xAPI data) obtained from the file itself, then you can launch Articulate Storyline or Adobe Captivate in LearnDash using the following free plugin:

> Topic Progression Using Storyline/Captivate for LearnDash

---

