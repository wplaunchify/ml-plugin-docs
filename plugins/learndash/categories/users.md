# Users

*Category from LearnDash documentation*

---

## Extend Access

**Source:** [https://learndash.com/support/kb/core/users/extend-access/](https://learndash.com/support/kb/core/users/extend-access/)

When **Course Access Expiration** is enabled, a user’s access to a course automatically ends after a set number of days. However, there may be cases where you want to give a student or group of students additional time. That’s where the **Extend Access** feature comes in.

This guide walks you through how to extend access for individual users or entire groups.

## Before You Begin

Make sure **Course Access Expiration** is enabled on the course(s) or group(s) you’re working with. This feature must be active in order for Extend Access to function.

## Extend Access for an Individual Course

To extend a user’s access to a single course:

1. Navigate to **LearnDash LMS > Courses**.
2. Click **Edit** on the course you want to modify.
3. Select the **Extended Access** tab.
4. Enter the new expiration date for the course.
5. On the left side, find and highlight the user(s) you want to extend access for.
6. Click the **right arrow** to move the selected user(s) to the affected list.
7. Click the **Update** button at the top of the page.

![](https://learndash.com/support/wp-content/uploads/2023/08/Extended-Access-Individual-Course-1.gif)

**Note:** Even if the course has an existing end date, the extension will override it for the selected users. These users will now have access through the new date you set.

## Extend Access for Multiple Courses in a Group

To extend access across multiple courses for one or more users within a group:

1. Navigate to **LearnDash LMS > Groups**.
2. Click **Edit** on the group you want to modify.
3. Go to the **Extended Access** tab.

You’ll see two tables:

- **Extend Access to Courses** — apply extensions to selected courses.
- **Extend Access to Users** — apply extensions to selected users.

1. Enter the new expiration date.
2. From the right-hand box, highlight the course(s) you want to extend.
3. Click the **right arrow** to move them into the selected list.
4. From the left-hand box, highlight the user(s) you want to grant extended access to.
5. Click the **right arrow** to move them into the selected list.
6. Click the **Update** button at the top of the page.

### Group End Date Behavior

- **Groups without an end date:** The extension applies fully—users can access the selected courses until the new expiration date.
- **Groups with an end date:** The group end date takes priority. Users will only be able to access the courses until the group expires, even if the course expiration was extended.

## View a User’s Course Expiration Date

To check when a user’s course access ends:

1. Go to **Users > All Users**.
2. Click the username of the user you want to check.
3. Scroll down to the **Course Progress Details** section.
4. Look to the right of each course listed to see the expiration date.

![](https://learndash.com/support/wp-content/uploads/2023/08/image1.png)

## FAQ

**Can I extend access to an individual user in a Group?** Absolutely! But there’s a catch. If your group has an end date, you can extend access to the courses, but the student can only access them while the group is still active. You can’t extend access beyond the group end date.
If your group doesn’t have an end date, it’s simpler. The extension will override any course expiry date, and the student can access the course as normal.
Remember, [Extend Access](https://learndash.com/support/docs/users-groups/extend-access/) is all about flexibility. Use it to give your students the time they need to succeed.

---

## User Profiles

**Source:** [https://learndash.com/support/kb/core/users/user-profiles/](https://learndash.com/support/kb/core/users/user-profiles/)

Creating a profile or account page for your users enhances their experience by providing easy access to essential LMS features. Through their profile, students can view all the courses they’re enrolled in, edit their personal information, and pick up right where they left off in any course. They can also keep track of their progress by viewing awarded points and quiz grades, as well as access any certificates they’ve earned, all in one convenient place. This central hub not only simplifies navigation but also ensures students stay engaged and informed throughout their learning journey.

LearnDash does not automatically generate a page to display a user’s profile or course information, but there are several tools you can use to build your own custom profile page. We’ll talk about the main LearnDash Profile block/shortcode, some options if you’re using third-party plugins that collect user information, and a few other tips for building a user profile with LearnDash.

## LearnDash Profile Block/Shortcode

The most commonly used solution for creating a LearnDash profile is to use the block (or shortcode) that comes with LearnDash. No additional plugins are required. You simply create a page on your site, and then insert the block/shortcode where you want the profile information to appear.

### How to Use It

To use the LearnDash Profile block:

![Insert the LearnDash profile block in admin](https://learndash.com/support/wp-content/uploads/2019/05/learndash-profile-insert-block-admin.jpg)

1. Create a new page in WordPress
2. Click the 
```
+
```

 icon to add a new block
3. Search for LearnDash Profile
4. Select the LearnDash Profile block

To use the LearnDash Profile shortcode, simply use this shortcode:

```
[ld_profile]
```

For a full list of available options, please see [the LearnDash Profile section](https://learndash.com/support/docs/core/shortcodes-blocks/#learndash_profile_ld_profile) in our blocks/shortcodes documentation.

### LearnDash 3.0 Template

If you’re using LearnDash 3.0+, and have the LearnDash 3.0 template enabled ([check settings here](https://learndash.com/support/docs/core/settings/general-settings/#design_content_elements)), the LearnDash Profile will display the following information:

- Avatar (profile image)
- Name
- Link to edit profile
- Total number of courses enrolled in, courses completed, certificates awarded and points earned
- List of registered courses, which includes:
- ability to search courses
- course progress indicators
- links to download certificates
- quizzes taken, along with date, scores and statistics

![LearnDash Profile, frontend example](https://learndash.com/support/wp-content/uploads/2019/05/learndash-profile-frontend-example-animation.gif)

### LearnDash Legacy Template

If you’re using the LearnDash Legacy template, your profile will look different, and include the following information:

- Avatar (profile image)
- Name, Username, Email
- Course Points
- Link to edit profile
- List of registered courses, which includes:
- course progress indicators
- links to download certificates
- quizzes taken, along with date, scores and statistics

![LearnDash Profile frontend example in Legacy theme](https://learndash.com/support/wp-content/uploads/2019/05/learndash-profile-legacy-frontend-example.jpg)

## Display Enrolled Courses in a Grid

The LearnDash Profile will display all courses in which the user is enrolled. This might be all you need, but you can also use the [Course Grid add-on](https://learndash.com/support/docs/add-ons/course-grid/) to show enrolled courses in a grid.

First, make sure the Course Grid add-on is installed and activated. Then, if you’re using the latest WordPress editor:

1. Insert the LearnDash Course List block
2. Set the My Courses option to Show Enrolled Courses only

![LearnDash Course List Block, enrolled courses only setting](https://learndash.com/support/wp-content/uploads/2019/05/learndash-course-list-grid-block-enrolled-course-only.jpg)

You can also enable the option to Show Progress Bar, which will display the user’s progress in each course.

If you’re using a page builder, or just prefer to use the shortcode, use the following shortcode to output a user’s enrolled courses, with a progress bar:

```
[ld_course_list mycourses="true" progress_bar="true"]
```

There are several other options you can use to customize the grid. Please see the [Course Grid documentation](https://learndash.com/support/docs/add-ons/course-grid/) for full details.

## Uncanny Toolkit Course Dashboard

**NOTE**: This is a third-party add-on that requires the [Uncanny LearnDash Toolkit Pro plugin](https://www.learndash.com/pro-toolkit).

With the Uncanny Toolkit Pro, you can use the 
```
[uo_dashboard]
```

 shortcode to insert a modified version of the 
```
[ld_profile]
```

 shortcode. It displays similar information, but there are a few key differences. The Course Dashboard:

- **does not** display the user’s profile information (avatar, name, email, etc.)
- also displays lessons & topics within each course (which the LearnDash Profile does not)

You can still expand/collapse each course, quickly view overall course progress, view quiz information, certificates, etc. Here’s what the Toolkit’s Course Dashboard looks like:

![Uncanny LearnDash Toolkit's UO Dashboard shortcode output](https://learndash.com/support/wp-content/uploads/2019/05/learndash-toolkit-uo-dashboard-shortcode-frontend.jpg)

The Uncanny Toolkit Course Dashboard is also available as a Gutenberg block. There are some additional options you can set, as well. Please see [Uncanny Owl’s full documentation](https://www.uncannyowl.com/knowledge-base/learndash-course-dashboard/?ref=2).

## Resume Where You Left Off

Another really helpful tool for LearnDash users is the ability to jump right back to the previous course, lesson or topic that they last worked on. The free version of the Uncanny LearnDash Toolkit provides this feature with their [Resume Button module](https://www.uncannyowl.com/knowledge-base/learndash-resume/?ref=2). When used on a custom profile page, it simply inserts a button that links to the most recently viewed course, lesson or topic for that specific user.

To use this feature:

1. Install and activate the free [Uncanny LearnDash Toolkit plugin](https://wordpress.org/plugins/uncanny-learndash-toolkit/)
2. Navigate to Uncanny Toolkit > Modules
3. Enable the Resume Button module
4. Add the following shortcode to your profile page, a sidebar, or a page builder, where you want the button to appear

```
[uo_learndash_resume]
```

The button defaults to say Resume, but you can customize this text. You also have the option to display the title of the course, lesson or topic that the button is linking to.

The Uncanny Toolkit Resume Button is also available as a Gutenberg block.

## List of All Certificates

Another helpful shortcode provided by the free Uncanny LearnDash Toolkit plugin is the ability to list all certificates earned by the user. Follow the same instructions above to install the plugin and enable the List Certificates module, then use this shortcode to display a user’s earned certificates:

```
[uo_learndash_certificates]
```

The Uncanny Toolkit List Certificates module is also available as a Gutenberg block. A few additional options are detailed in [Uncanny Owl’s documentation](https://www.uncannyowl.com/knowledge-base/show-learndash-certificates/?ref=2).

## WooCommerce Account Page

Many LearnDash users choose WooCommerce as an ecommerce platform to sell their courses (see our [integration guide](https://learndash.com/support/docs/add-ons/woocommerce/)). WooCommerce creates its own account area, complete with account details (name, email, etc.), address information, order history, etc. You can tap into this to include a list of enrolled courses.

![WooCommerce account page with LearnDash Profile](https://learndash.com/support/wp-content/uploads/2019/05/learndash-user-profile-woocommerce-account-section-example.jpg)

If you’re already using WooCommerce, or you’ve gone through the setup wizard, a “My Account” page should have already been created for you. If not…

1. Create a new page in WordPress
2. Insert this shortcode

```
[woocommerce_my_account]
```

**NOTE**: The design of your WooCommerce “My Account” page is heavily dependent on your WordPress theme. If your theme doesn’t offer great support for WooCommerce, you might want to check with your theme developer, or possibly hire someone to help with the design.

On this same page, you can insert any of the tools we highlighted above (LearnDash Profile, Resume Button, List of Certificates, etc.). Whatever you insert onto this page will be displayed on all WooCommerce account sub-pages (dashboard, orders, addresses, account details, etc.). This might not be ideal, in which case you can explore the next section.

![Inserting WooCommerce account & LearnDash profile blocks](https://learndash.com/support/wp-content/uploads/2019/05/learndash-profile-woocommerce-insert-gutenberg-blocks.jpg)

**WARNING**: By default, WooCommerce blocks non-admin users from entering WP Admin, or seeing the WP Admin bar. This includes the WP Profile. [Click here for a workaround.](https://docs.woocommerce.com/document/allowing-customer-access-to-wp-admin-and-enabling-the-admin-bar/)

### Custom Endpoint

**NOTE**: Development experience is highly recommended.

The “My Account” section of WooCommerce operates on what are called “endpoints.” Each endpoint is essentially another page within the My Account section of your website. Endpoints represent the part of the URL that follows your 
```
/my-account/
```

 page. A few examples of built-in WooCommerce endpoints for the My Account area include:

- Orders – 
```
/my-account/orders/
```
- Addresses – 
```
/my-account/addresses/
```
- Edit Account – 
```
/my-account/edit-account/
```

WooCommerce provides the ability for anyone to create their own endpoint. The most obvious way to integrate this with LearnDash would be to create an endpoint for courses. Your endpoint could look something like this:

- Courses – 
```
/my-account/courses/
```

On this new endpoint, you could then insert any type of profile/course information that we highlighted above. This would allow your user’s course information to have it’s own page and URL. You have complete freedom over the type of endpoint(s) you create, and can insert any type of content you’d like.

View [WooCommerce’s documentation on endpoints](https://docs.woocommerce.com/document/woocommerce-endpoints-2-1/) and/or [search the web](https://www.google.com/search?q=woocommerce+custom+endpoints) for how to create a custom endpoint.

## Other Options

### Course Points

If you’re using LearnDash’s built-in points system, you could use the 
```
[ld_user_course_points]
```

 shortcode (or block) to insert the user’s total points onto a custom profile page. That would output this:

> Earned Course Points: 100

## LearnDash User Profiles Webinar

Check out our latest webinar about setting up, building and customizing your user profiles with LearnDash, along with other tips and tricks on how to make it easier for you and your users to update and manage your user profiles.

---

## User Management

**Source:** [https://learndash.com/support/kb/core/users/user-management/](https://learndash.com/support/kb/core/users/user-management/)

LearnDash uses WordPress’s built-in user management system. All LearnDash-related user data is stored and managed within WordPress user profiles.

This article explains:

- How LearnDash assigns and uses user roles
- Where LearnDash user data is stored
- How to view, filter, and update users
- How to manage enrollments, progress, and course data

## The LearnDash User Role

When a user enrolls in a LearnDash course, LearnDash assigns the **Subscriber** role. This is a default WordPress role.

Important details about user roles:

- A user can have more than one role at the same time
- Some plugins add additional roles, such as:
- **WooCommerce** adds the **Customer** role after a purchase
- **bbPress** adds the **Participant** role after forum activity
- **Administrators** and **Group Leaders** may not display the **Subscriber** role, as these roles already include the same permissions plus additional capabilities

For more information about WordPress roles and permissions, refer to the WordPress Roles and Capabilities documentation.

**Note:** To learn more about roles added by third-party plugins, review each plugin’s support documentation.

## Viewing All Users

LearnDash relies on WordPress’s user management interface.

To view all users:

1. Navigate to **Users > All Users**

In addition to standard WordPress columns (Username, Name, Email, Role, Posts), LearnDash adds a column showing **Enrolled Groups/Courses**.

## Filtering Users by Course or Group

Users can be filtered based on course enrollment or group membership.

1. Use the **All Courses** and/or **All Groups** dropdown menus
2. Select a course or group
3. Click **Filter**

Only users enrolled in the selected course or group are displayed.

## User Profiles

Each user has an individual profile page in WordPress. LearnDash adds multiple sections to this page to manage course and group data.

### Accessing a User Profile

1. Navigate to **Users > All Users**
2. Select the username of the user to view

General WordPress user information appears at the top. LearnDash-specific sections appear further down the page.

## User Enrolled in Courses

This section displays all courses in which the user is enrolled. Courses can also be added or removed from this section.

### Enrolling a User in a Course

1. Select a course from the left column
2. Use the right arrow to move the course to **Already Enrolled**
3. Click **Update Profile**

### Removing a User from a Course

1. Select a course from the **Already Enrolled** column
2. Use the left arrow to remove the course
3. Click **Update Profile**

## User Enrolled in Groups

Group management functions the same way as course enrollment.

- **Left column:** Available groups
- **Right column:** Groups the user already belongs to

Use the arrows between columns to add or remove the user from groups.

## MCP Bulk Enrollment (LearnDash 5.0)

LearnDash 5.0 supports bulk enrollment through the Model Context Protocol (MCP).

MCP-enabled AI tools can:

- Enroll or unenroll existing WordPress users in courses and groups
- Process bulk enrollment using CSV files or prompts

MCP cannot create new WordPress users. Users must already exist before enrollment actions are applied.

## Course Information

### Earned Course Points

This section displays the user’s total earned course points. Additional points can be awarded manually.

1. Enter the number of points to add
2. Click **Update Profile**

Course points can be displayed using:

- The **LearnDash Profile** block
- The 
```
[ld_user_course_points]
```

 shortcode (or associated block)

### Course Progress Details

This section lists all enrolled courses and displays:

- Course name (linked to the course page)
- Course status (Not Started, In Progress, Completed)
- Completed steps (X of Y)
- A link to edit the course (based on permissions)
- A **Details** link for additional information

Selecting **Details** displays expanded information about enrollment and progress.

## Enrollment Date

LearnDash records the date and time when a user enrolls in a course. This date is used for:

- Course expiration settings
- Drip-feed scheduling

### Updating the Enrollment Date

1. Select **Details** next to the course
2. Enable **Set Enrollment Date**
3. Update the date
4. Click **Update Profile**

If the course is set to expire after a defined number of days, the new enrollment date takes effect immediately.

**Note:** Enrollment dates cannot be changed for users enrolled through a group.

## Marking Steps Complete or Incomplete

Administrators can manually update lesson, topic, or quiz completion status.

1. Select **Details** next to the course
2. Expand lessons to view topics or quizzes (optional)
3. Check or uncheck completion boxes
4. Click **Update Profile**

Changes apply immediately.

## Quiz Information

Quiz data appears under the section titled **You have taken the following quizzes**.

Available actions include:

- **Remove**: Permanently deletes quiz data and allows a retake
- **Edit**: Opens the quiz editor
- **Statistics**: Displays detailed quiz statistics

Displayed quiz details include:

- Score (percentage and points)
- Completion date and time
- Essay status and feedback (if applicable)

**Note:** Quiz statistics are recorded only if **Quiz Statistics** is enabled in the quiz settings. This setting is not retroactive.

## Permanently Deleting Course Data

**Warning:** This action permanently deletes all LearnDash data for the user and cannot be undone.

To delete course data:

1. Enable the **Permanently delete data** option
2. Click **Update Profile**

## Additional Resources

- Additional reporting solutions may be available depending on site configuration
- **ProPanel** provides advanced reporting and user management tools
- Included with LearnDash Cloud plans
- Available as a separate purchase for LMS-only plans

---

## User Data

**Source:** [https://learndash.com/support/kb/core/users/user-data/](https://learndash.com/support/kb/core/users/user-data/)

The Administrator and Group Leader user roles can export two reports (in CSV format) from LearnDash.

## Standard Reports

**NOTE**
If you are using built-in reporting, you have these reports and more with additional filter options located directly on your Admin Dashboard.

![](https://learndash.com/support/wp-content/uploads/2019/04/user-reports.png)

1. **Course Data:**Displays all students’s course progress, what lesson they are currently on, and if the course has been marked complete. This report can be exported from the Reports menu.
2. **Quiz Data:** Displays all student’s quiz scores, when the quiz was taken, and if the quiz was successfully passed. This report can be exported from the Reports menu.

**NOTE**: These export options are for reporting purposes only. If you want to learn more about exporting courses, lessons, quizzes, etc. check out our **Transferring LearnDash Courses** documentation.

## Quiz Statistics

In addition to these two reports, you can also view quiz statistics right within the WordPress admin area.

![LearnDash actions menu, quiz statistics](https://learndash.com/support/wp-content/uploads/2019/04/learndash-actions-menu-quiz-statistics.jpg)

1. Go to the quiz you’d like to view statistics for
2. Click the Actions dropdown menu in the top corner
3. Click Statistics

This will allow you to view individual answer statistics.

**NOTE**: The Quiz Statistics option must be turned on in order for data to be gathered.

Take note that the Quiz Statistics option is not retroactive. If it has previously been turned off, all of the data captured during the time the setting was off will not be attributed to a specific user. And the user will not be able to view their statistics on their profile or account page.

Also, if you turn off the Quiz Statistics option (since it is on by default) all of the previously stored data will still be available and attributed to a user, meaning they will still be able to see their previous answers and responses on their profile or account page.

![LearnDash actions menu, quiz statistics](https://learndash.com/support/wp-content/uploads/2019/04/learndash-quiz-statistics-toggled-on.jpg)

In addition, the Front-end Profile Display option must be turned on for the Statistics link to be displayed in the User Profiles on the WP Dashboard.

You can switch between the History and Overview buttons to see different reports, and use the options at the top to filter your reports.

![LearnDash quiz stats, history, overview & filter options](https://learndash.com/support/wp-content/uploads/2019/04/learndash-quiz-statistics-history-overview-filter.jpg)

Users with the assigned Group Leader role can also export Course Data and Quiz Data for their respective groups. This is accomplished on the Group Administration page when they are logged into their account.

## Additional Reporting Resources

Interested in additional reporting capabilities? Below are the most popular options for extending LearnDash reports:

- [ProPanel](https://learndash.com/support/kb/add-ons/propanel/propanel/) by LearnDash*(included with LearnDash Cloud plans)*
- [LearnDash User Data](https://usersinsights.com/learndash-search-filter-user-data/) by UsersInsights
- [GrassBlade LRS](https://www.nextsoftwaresolutions.com/grassblade-lrs-experience-api/) by NextSoftwareSolutions
- [Tin Canny Reporting](http://learndash.com/tincanny) by Uncanny Owl
- [Scores & Reports](http://learndash.com/digitalclassrooms) by 24/7 Digital Classrooms

---

## Users and Groups

**Source:** [https://learndash.com/support/kb/core/users/users-groups/](https://learndash.com/support/kb/core/users/users-groups/)

LearnDash provides flexible tools for managing users and organizing them into groups. Groups can be used to control access, track progress, sell memberships, and communicate with learners at scale. This section introduces the core concepts behind users and groups and explains how they work together to support course management and reporting.

## User Management

LearnDash stores all user data within WordPress user profiles.

This area covers:

- Where LearnDash user data is stored
- How to view and edit user profiles
- How to manage course enrollments, progress, and roles

See **User Management** for detailed guidance on accessing and updating user information.

## User Groups

Groups allow administrators to organize users into memberships or cohorts.

Groups can be used to:

- Enroll multiple users into one or more courses
- Sell access to courses as memberships
- Track progress at the group level
- Assign group leaders to help manage learners

See **User Groups** to learn how to create, manage, and sell groups.

## Group Administration

Group leaders and administrators can manage learners within assigned groups.

Group administration tools include:

- Grading assignments and essays
- Exporting user and progress data
- Sending emails to group members
- Viewing group-level reports

See **Group Administration** for details on managing groups and learner activity.

## Extend Access

Course access can be extended for:

- All users enrolled in a course
- Individual users

This is commonly used when learners need additional time to complete course content.

See **Extend Access** for instructions on updating course access dates.

## MCP Automation (LearnDash 5.0)

LearnDash 5.0 introduces MCP-based automation for user and group management.

With MCP, AI tools can:

- Bulk-enroll existing WordPress users into courses and groups
- Update group course assignments
- Manage enrollments through the REST API v2

Important considerations:

- All actions respect LearnDash permissions and require administrator or appropriate group-level access
- MCP cannot create new WordPress users
- Users must already exist before enrollment

---

