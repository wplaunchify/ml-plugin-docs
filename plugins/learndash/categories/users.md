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

