# Gradebook

*Category from LearnDash documentation*

---

## Gradebook Add-On

**Source:** [https://learndash.com/support/kb/add-ons/gradebook/gradebook-add-on/](https://learndash.com/support/kb/add-ons/gradebook/gradebook-add-on/)

Easily customize, track, and share scores with Gradebook. Explore student progression and scores in simple, flexible gradebook tables, and share individual scores and progress with students and their parents.

## Installation

You can download the Gradebook Add-on plugin from [account.learndash.com](https://account.learndash.com/plugins/). Simply log in to your account, download Gradebook, and follow the instructions below to install.

To Install Gradebook:

1. Go to Plugins > Add New
2. Click Upload Plugin
3. Browse for and select the file that you downloaded after purchase. It will be in a**.zip**format
4. Click Install Now
5. Click Activate Plugin

## How to Create a Gradebook

You will need to create one or more gradebooks to use this plugin. Each gradebook can have customized settings.

![How to Create a Gradebook](https://learndash.com/support/wp-content/uploads/2023/04/Grade-Books-‹-LearnDash-Demo-—-WordPress-1.gif)How to Create a Gradebook

1. Go to LearnDash LMS > Gradebook
2. Click the Manage Gradebooks,then click Add New
3. Give your gradebook a Title
4. Select the Courses you want associated with this gradebook
5. Click Add Component. Give it a Name and select what you would like to be graded

(For example, if you want to award a grade for users who complete a their Assignments, you could create a Component, titled, say, Homework, and select Assignments.)

1. Lastly, customize the settings for the gradebook. Read through the customizations available below

### Customization

There are various settings you will need to customize for each gradebook.

#### Grading

This Gradebook section determines what will go into factoring final user grades.

You must first select one or more Courses to be graded, or you can choose “All Courses.”

You may then add any number of Components. Each Component will have a grade calculated depending on what is inside it. Each Component grade will factor towards the gradebook final grade for each user. Some examples of Components would be Lessons, Quizzes, Semester 1, At Home Projects, etc.

Add any number of Quizzes, Assignments, Lessons, and Topics to each Component. You may also set the All Toggle to active, automatically including all current and future items. Be sure also to give each Component a name.

#### Weighting

Though turned off by default, each gradebook can use a weighted grading system. You can toggle it on by clicking the toggle under “Enable Gradebook Weighting.” Once enabled, you will see a list of all Components you have created (if any) and input to enter a “Weight %.” Enter a percentage out of 100% for each Component so that all Components total 100%. Now each Component’s grade will only count for whatever weight you assign it when computing the final grade.

#### Settings

Completion Grading is a setting you can modify that will determine how Lessons and Topics are graded. By default, this is set to “Only count on completion.” This means that if you have any Lessons and Topics inside any Components, they will only count toward the final grade once completed. At this point, they will receive 100% for each. If you change this setting to “Fail until completion,” each uncompleted Lesson and Topic will count as a failing grade at 0% until the user marks them complete. At this point, they will receive 100% for each. “Mark as Incomplete until completion” will set all Quizzes and Assignments as Incomplete until completion. Incomplete does not impact the Student’s Grade, but it will cause them to show as Incomplete within the Student’s Grades in the gradebook (Under “View/Edit User Grades”) and within the Report Card.

#### Users

This does not contain any settings, but it allows you to search for a user quickly, then click the “View/Edit User Grades” to view or modify a user’s grades for the current gradebook.

### Access and Manage Your Gradebooks

This is where site admins, instructors, or anyone with proper access can view a snapshot of each gradebook’s grades.

To access and manage your gradebooks:

1. Go to LearnDash LMS > Gradebook
2. Under Gradebook, you can **s**elect a specific gradebook to view and edit.

#### Usage

Each row in the table provides information about a single user and their overall grade and any other pre-defined Component grades. When more Components are added to each gradebook, they will show here respectively.

![](https://realbigplugins.com/wp-content/uploads/sites/3/2016/10/Gradebook-e1548766721136.jpg)

#### Sorting

Clicking on any column header will reload the page with all user results sorted by the selected column in ascending order, indicated by an upwards-facing triangle next to the column header. Clicking the same column header will reload the page with the results sorted in*descending*order.

#### Searching Users

Use the user search in the top right to search through all users. This search field works like the default WordPress admin user search. You may enter a user ID, display name, login name, or even a user’s email.

### Groups

The gradebook allows you to filter the results by groups. Suppose you are an administrator of the website. In that case, you will be able to see all users without any group restrictions, and you will be able to view individual groups via the “Showing Gradebook for:” select box in the top left of the screen.

If you are a group leader that only belongs to 1 group, you will not see the dropdown, and you will only see users in your group. You can see a dropdown and switch groups if you are a leader of more than 1 group.

### Disable Sorting by Grades for the Backend Gradebook

If you have a slow-performing website or an extensive user base, and the gradebook will not load, try enabling “Disable Sorting by Grades for the Backend Gradebook” This will turn off some sorting features and grade snapshots within the gradebook, but will load significantly faster and more reliably on larger websites.

The setting for Disabling Sorting by Grades for the Backend Gradebook can be toggled on and off.

Note: If you are unable to even access the Settings page because the GradeBook page wont load, take your site address (lets say 
```
https://example.com
```

), figure out your WordPress admin base (most likely 
```
/wp-admin/
```

), and then append 
```
admin.php?page=learndash-gradebook-settings
```

 (so, in our example, full URL would be 
```
https://example.com/wp-admin/admin.php?page=learndash-gradebook-settings
```

Alternatively, you can add: 
```
define( 'LD_GB_DISABLE_SORTING_BY_GRADES_BACKEND', true );
```

 to your 
```
./wp-config.php file.
```

## Report Card

The Report Card is a presentational tool to give users information about their grades for a gradebook.

![Report Card](https://learndash.com/support/wp-content/uploads/2023/04/Report-Card.jpg)Report Card

### Display

The report card contains information about the users overall grade, individual Component grades, and individual scores on various grade details. Clicking on any Component, or the arrow to the left will expand a breakdown of scores. Scores can be manual grades, quizzes, assignments, lessons, or topics.

### Usage

In order to use the report card, you must use the report card shortcode:[ld_report_card gradebook=”1″]

Copy and paste this shortcode into any text that accepts shortcodes, the most common being the main content of any page or post. Replace the number 1 with the ID of the gradebook you want to show. You can also find the shortcode to copy when editing each gradebook.

![Grade Book Usage](https://learndash.com/support/wp-content/uploads/2023/04/Add_New_Grade_Book_Usage.jpg)Grade Book Usage

If you use the shortcode without a gradebook ID defined like[ld_report_card]then it will attempt to show all relevant gradebooks for the user one after another.

You may also use the shortcode attributeuserto specify a specific user by the user’s ID. This will cause the report card to contain information about whatever user is supplied.

To find a user’s ID, go to the Users page in the WordPress administration area of the site and click on the username of whichever user you want to find the ID of. This will take you to the user edit page. You will see part of the URL that looks like**user_id=107**. The number is the user ID.

If you only want to show the Overall Grade (For instance, as part of a Certificate), you can use the[ld_overall_grade]shortcode alternatively. The arguments are identical to those used in[ld_report_card]; however, for the Overall Grade shortcode, the gradebook ID is required.

## Assignments

LearnDash can set a custom grade for assignments. By default, the grade of an assignment is assumed to be 100% unless modified.

## Manual Grades

Manual grades may be entered for users at any time. They are used to add any grade that a quiz or assignment cannot represent.

### Accessing the Edit Screen

To manage a user’s manual grades, you will need to access the gradebook user edit screen. This can be done either by clicking the View/Edit User Grades” text in the User” column of the gradebook or by searching for a user and clicking “View/Edit User Grades” from the gradebook edit screen.

Each row represents a grade. The icon on the left side represents each grade type. Hovering over the icon will reveal text to help identify it.

- **Pencil:** Manual Grade
- **Question Mark:** Quiz
- **Paper:**  Assignment
- **Writing:** Lesson
- **Folder:** Topic

![](https://learndash.com/support/wp-content/uploads/2019/04/learndash-upload-assignment-frontend-example.jpg)

### Managing Manual Grades

From here you may add, delete, or modify manual grades for the user.

**NOTE:** All changes you make are live immediately, so be cautious.

#### Add a Manual Grade

To add a manual grade, click the “Add Manual Grade” button. This will display a manual grade edit panel. From here, you must:

1. Enter a unique name for the manual grade. This can be anything, but it must be unique to the Type you are adding the grade too. It may be “Crossword Puzzle,” “Attendance,” or anything else.
2. Enter the score for the grade. It can be any number above 0.
3. Optional) Enter a status for the grade.
4. Click the “Add” button.

**NOTE:** By default, there is no special status, but you may set the grade to have a special status. Currently, the only status to select is “Incomplete.” Setting the grade to “Incomplete” will not be factored into the final grade calculations.

#### Remove a Manual Grade

A manual grade may be removed at any time. You must:

1. Hover over any manual grade (manual grades are represented with a pencil icon on the left side)
2. Click the Remove link that appears
3. Confirm deletion

**WARNING:** Manual grades cannot be recovered. You can always add it back yourself but cannot undo it automatically.

#### Edit a Manual Grade

A manual grade may be edited at any time. You must:

1. Hover over any manual grade
2. Click the Edit link that appears
3. Follow the same steps as adding a manual grade, except click the Change button when finished

### Modifying Other Grades

You are also able to modify quiz and assignment grades from here. Currently, the only modifications you can make from here are assigning them a special status. You cannot edit the actual grade score from here.

## Frontend Gradebook

You can include the Frontend Gradebook on any page using the 
```
[ld_gradebook]
```

 shortcode. It provides all the same functionality as the Backend Gradebook on the Frontend for site owners who do not want to grant their Group Leaders/Teachers access to the backend.

![](https://learndash.com/support/wp-content/uploads/2023/04/frontend-gradebook.png)

### Differences from the Backend Gradebook

The Frontend Gradebook operates as a mostly 1:1 replacement for the Backend Gradebook, but there are a couple of key differences:

1. Even when the “Disable Sorting by Grades for the Backend Gradebook” setting is enabled, you will be able to sort by every column. This is due to a difference in how the Frontend Gradebook populates its data.
```
<#disable-sorting-by-grades-for-the-backend-gradebook-1" rel="">
```

 [Read more about “Disable Sorting by Grades for the Backend Gradebook.”](/support/docs/add-ons/gradebook-add-on/#disable-sorting-by-grades-for-the-backend-gradebook-1)
2. Searching, pagination, and even managing a Student’s Grades, are all done on the same page where you place the
```
[ld_gradebook]
```

shortcode without needing to refresh the page. Because of this, if you have many Students in your gradebook, it may take a few seconds for all pages to finish loading.

## Settings

GradeBook for LearnDash provides robust customization over the plugin functionality via settings.

### Accessing the Settings Pages

First access the GradeBook page (as explained above [here](#h-how-to-create-a-gradebook)) and then click the Settings tab at the top of the screen.

From here, use the blue links at the top to move to different Settings sections.

![Gradebook Settings](https://learndash.com/support/wp-content/uploads/2023/04/GradeBook_for_LearnDash_Settings.jpg)Gradebook Settings

### General

You can adjust various general plugin settings from the “General” section of the Settings page.

### Quizzes

Depending on your site setup, users may be able to retake quizzes. If so, you must choose whether the user’s most recent quiz score will be used or the user’s best (highest) score.

### Grade Display Mode

By default, the gradebook uses letters (A, B, D-, C+, etc.) to display grades. If you would rather have the system use percentages (0-100%), change this setting to “Percentage.”

### Grade Rounding Precision

Individual user grade component (assignment, quiz, manual grade) rounding is determined by these settings. This does not impact the rounding of Component grades or the user’s final grade.

The precision determines how many decimal places a grade will be rounded to. 0 will not use decimals and only allow whole numbers (integers). You may set this to any value between (inclusive) 0 and 10.

### Grade Rounding Mode

The rounding mode determines how the number will be rounded. Rounding up will allow rounding the precision point up. Rounding down will round it down. The closest will round up or down based on which it is most relative to (5 rounding up).

### Restart Quickstart Guide

Once you dismiss the QuickStart Guide, you may restart it by clicking the button here. You may also copy and share the link provided to other users to restart the guide (only if they have access).

### Roles

This is where you can make changes to roles and capability aspects of the plugin.

#### View the Gradebook

By default, only Administrators and Group Leaders can view the gradebook. If you want to allow other user roles to view the gradebook, you may add them here.

**DEVELOPER NOTE:** This will add the capability 
```
view_gradebook
```

 to the selected roles. You may add this capability to roles in any method desired, including any role manager plugins and the results will be reflected here.

#### Create and Edit their own Gradebooks

By default, only Administrators can create and edit gradebooks. Add them here to allow other user roles to create and edit their gradebooks. Any user roles you grant this capability to can only manage their gradebooks, but Administrators can manage anyone’s gradebooks.

**DEVELOPER NOTE:** This will add the capabilities 
```
read_gradebook
```

, 
```
read_private_gradebooks
```

, 
```
publish_gradebooks
```

, 
```
edit_gradebook
```

, 
```
edit_gradebooks
```

, 
```
edit_private_gradebooks
```

, 
```
edit_published_gradebooks
```

, 
```
delete_gradebooks
```

, 
```
delete_private_gradebooks
```

, 
```
delete_published_gradebooks
```

, and 
```
delete_gradebook
```

 to the selected roles. You may add these capabilities to roles in any method desired, including any role manager plugins and the results will be reflected here. For the GradeBook menu item to appear, they must also be granted the 
```
view_gradebook
```

 capability.

#### Quickstart Guide Visibility

Only administrators can view the Quickstart Guide. If you want other users to be able to use the guide, add them here. Only user roles with enough capability to access the LearnDash and GradeBook for LearnDash pages will appear here. In a typical setup, this is only the Administrator” role.

### Styles

This is where you can change some styling parts of the plugin.

#### Letter Grade Scale

GradeBook for LearnDash uses a typical letter grade system by default to display user grades. You may edit this in any way you like here. Simply modify the existing values, delete existing values, or even add new letters using the “Add Letter Grade” button at the bottom.

**NOTE:** You cannot change the order of letters, but they are automatically displayed in ascending order by the grade and will be automatically re-sorted after saving changes.

#### Grade Color Scale

You may also edit the color displayed with user grades here. Like the letter grade scale, you may modify what already exists, delete any, and add new values.

#### Note on both scales:

Both scales will function in the following manner: Once a grade has reached the percentage you enter as a minimum, the letter or color will be applied up until the next interval.

### Licensing

This page is where you manage your plugin license. Youmust enter and activate your license as soon as possible. Activating the license on your site gives you access to essential plugin updates, including new features, bug fixes, and potential security patches.

## Developer

### Report Card Template

The Report Card template can be heavily or lightly modified as needed. There are two ways to override an aspect of the report card.

#### Overriding Theme Template Files

The plugin first looks in your theme for template files before loading the plugin template files. If a child theme is active, that will take precedence, then your parent theme, then the plugin. Any number of the template files that make up the report card may be replaced. It is recommended to copy whichever files you need to replace first and then modify from there. The structure of your theme would be as follows:

learndash/report-card/report-card.php
learndash/report-card/title.php
learndash/report-card/overall-grade.php
learndash/report-card/expand-collapse.php
learndash/report-card/component/component.php
learndash/report-card/component/grade.php
learndash/report-card/component/grades-header.php
learndash/report-card/component/title.php
learndash/report-card/component/toggle.php
learndash/report-card/grade/grade.php
learndash/report-card/grade/name.php
learndash/report-card/grade/score.php
learndash/report-card/grade/type.php
```
learndash/report-card/report-card.php
learndash/report-card/title.php
learndash/report-card/overall-grade.php
learndash/report-card/expand-collapse.php
learndash/report-card/component/component.php
learndash/report-card/component/grade.php
learndash/report-card/component/grades-header.php
learndash/report-card/component/title.php
learndash/report-card/component/toggle.php
learndash/report-card/grade/grade.php
learndash/report-card/grade/name.php
learndash/report-card/grade/score.php
learndash/report-card/grade/type.php
```

Take a look at how these files work within the plugin itself. To locate them in the plugin, replace the “learndash directory with the templates directory.

#### Removing or Modifying the Hooks

These files are loaded via action hooks. You can easily remove or replace them to use your own functions to load files. You can get a better look at them and how to use them inside the file in the plugin
```
:
```

includes/shortcodes/class-ld-gb-sc-reportcard.php
```
includes/shortcodes/class-ld-gb-sc-reportcard.php
```

### Frontend Gradebook Template

The Frontend Gradebook template can be heavily or lightly modified as needed. There are two ways to override an aspect of the Frontend Gradebook.

#### Overriding Theme Template Files

The plugin first looks in your theme for template files before loading the plugin template files. If a child theme is active, that will take precedence, then your parent theme, then the plugin. Any number of the template files that make up the frontend gradebook may be replaced. It is recommended to copy whichever files you need to replace first and then modify from there. The structure of your theme would be as follows:

learndash/frontend-gradebook/edit-panel/components/edit-panel-component-grade.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-component-override.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-component.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-components.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-grade-add.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-grade-edit.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-grade-row.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-no-grades.php
learndash/frontend-gradebook/edit-panel/edit-panel-back-to-gradebook.php
learndash/frontend-gradebook/edit-panel/edit-panel-user-grade.php
learndash/frontend-gradebook/edit-panel/edit-panel.php
learndash/frontend-gradebook/errors/dialog.php
learndash/frontend-gradebook/errors/no-access.php
learndash/frontend-gradebook/errors/no-gradebooks.php
learndash/frontend-gradebook/errors/no-groups.php
learndash/frontend-gradebook/export-buttons.php
learndash/frontend-gradebook/frontend-gradebook.php
learndash/frontend-gradebook/gradebook-dropdown.php
learndash/frontend-gradebook/gradebook-results.php
learndash/frontend-gradebook/group-dropdown.php
learndash/frontend-gradebook/table/table-head.php
learndash/frontend-gradebook/table/table-list.php
learndash/frontend-gradebook/table/table-row.php
```
learndash/frontend-gradebook/edit-panel/components/edit-panel-component-grade.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-component-override.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-component.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-components.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-grade-add.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-grade-edit.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-grade-row.php
learndash/frontend-gradebook/edit-panel/components/edit-panel-no-grades.php
learndash/frontend-gradebook/edit-panel/edit-panel-back-to-gradebook.php
learndash/frontend-gradebook/edit-panel/edit-panel-user-grade.php
learndash/frontend-gradebook/edit-panel/edit-panel.php
learndash/frontend-gradebook/errors/dialog.php
learndash/frontend-gradebook/errors/no-access.php
learndash/frontend-gradebook/errors/no-gradebooks.php
learndash/frontend-gradebook/errors/no-groups.php
learndash/frontend-gradebook/export-buttons.php
learndash/frontend-gradebook/frontend-gradebook.php
learndash/frontend-gradebook/gradebook-dropdown.php
learndash/frontend-gradebook/gradebook-results.php
learndash/frontend-gradebook/group-dropdown.php
learndash/frontend-gradebook/table/table-head.php
learndash/frontend-gradebook/table/table-list.php
learndash/frontend-gradebook/table/table-row.php
```

Take a look at how these files work within the plugin itself. To locate them in the plugin, replace the “learndash directory with “templates directory.

#### Removing or Modifying the Hooks

These files are loaded via action hooks. You can easily remove or replace them to use your functions to load files. You can better look at them and how to use them inside the file in the plugin
```
:
```

includes/shortcodes/class-ld-gb-sc-frontendgradebook.php
```
includes/shortcodes/class-ld-gb-sc-frontendgradebook.php
```

### Notifications

Email your students when a Manual Grade is submitted using the Notifications add-on. For this feature to work, you will need both Gradebook and [Notifications add-ons](https://learndash.com/support/docs/add-ons/notifications/) active on your site. Check out our Notifications documentation to learn more.

**NOTE**: This requires LearnDash Notifications v1.6.2 or higher to be installed.

---

