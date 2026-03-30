# Assignments

*Category from LearnDash documentation*

---

## Enable Assignments

**Source:** [https://learndash.com/support/kb/core/assignments/enable-assignments/](https://learndash.com/support/kb/core/assignments/enable-assignments/)

Assignments may be enabled for each individual lesson and/or topic within your course. They are completely optional, but provide an additional way to monitor the user’s comprehension of course material.

This article will explain how to enable assignment uploads so that users can submit assignments for you to review. If you’ve already done this, check out our article on [managing assignments](https://learndash.com/support/docs/core/assignments/manage-assignments/).

## Overview

Since assignment uploads are enabled on a lesson-by-lesson and topic-by-topic basis, you first need to navigate to the lesson or topic in which you’d like to ask for an assignment to be submitted.

For the rest of this article, we’ll use a lesson as the example, but the same instructions apply for topics.

![Enable assignment uploads in LearnDash](https://learndash.com/support/wp-content/uploads/2019/04/enable-lesson-assignments-animation.gif)

1. Navigate to LearnDash LMS > Lessons
2. Click on the lesson you’d like to enable assignment uploads for
3. Click the Settings tab
4. Under Display and Content Options, enable the Assignment Uploads setting

**NOTE**: Assignment uploads can only be enabled if both video progression and lesson timer are disabled.

### What the User Sees

When you enable assignment uploads, a new box will appear at the bottom of the lesson page, below any page content you’ve added. This way you can include specific instructions for the assignment, and explain any requirements you have, before the user is presented with the upload form.

![LearnDash assignments, example on the frontend](https://learndash.com/support/wp-content/uploads/2019/04/learndash-assignments-frontend-example-everything.jpg)

The assignments section of the page will contain:

- an upload form (browse for a file on their device and upload it)
- a list of all uploaded assignments
- the assignment’s status (approved or not)
- the points awarded for each assignment (optional; shown if enabled)
- the ability to download previously uploaded assignments
- the ability to upload additional assignments (only up to the number you specify)
- the ability to delete assignments (only if they have not been approved yet)

## Additional Settings

### File extensions

You can specify exactly which file types may be uploaded.

If you leave this field blank, all [default WordPress allowed file types](https://codex.wordpress.org/Uploading_Files#About_Uploading_Files_on_Dashboard) will be accepted. To allow only certain file types:

- Enter each allowed file type in the box (without the leading 
```
.
```

)
- Separate multiple file types with a comma
- Capitalization doesn’t affect the files allowed to be uploaded, but capitalization is reflected to the user on the front-end

![LearnDash assignment uploads, allowed file types](https://learndash.com/support/wp-content/uploads/2019/04/learndash-assignments-allowed-file-types-animation.gif)

Your specified file type(s) will be listed to the user in the assignment upload area.

![LearnDash assignments, upload size & file types messages to users](https://learndash.com/support/wp-content/uploads/2019/04/learndash-assignment-upload-size-file-types-message.jpg)

For example, enter the following to allow only Microsoft Word, Excel & PowerPoint files:

- ```
doc, docx, xls, xlsx, ppt, pptx
```

[Here’s a list of common file extensions ┬╗](https://fileinfo.com/filetypes/common)

### File size limit

In addition to the type of file, you can also specify the maximum file size allowed to be uploaded.

- Enter a number, followed by 
```
M
```

 (for megabytes)

For example, to limit uploads to 5 megabytes, enter 
```
5M
```

.

Your specified file size limit will be displayed to the user in the assignment upload area.

**NOTE**: Your [web host](https://learndash.com/support/docs/getting-started/hosting/) also sets a maximum file size limit. The lower limit will always be used. If you’re having trouble receiving assignment uploads, you can contact your host and ask them to increase your maximum file upload size.

### Points

Points are an optional way to grade, or gamify, your assignments. You can set the total available points a user can receive, and then choose to either:

- manually approve the assignment and enter a specific amount of points, or
- automatically approve the assignment as soon as it’s uploaded, and award the total available points

If you’d like to award points to a user when they submit an assignment:

1. Next to Points, turn the setting on
2. Enter the total number of possible points that can be earned for a submitted assignment

### Grading Type

There are two options for how assignments are graded:

- **Auto-approve** (default) – No grading or approval is needed. The assignment will be automatically approved & full points will be awarded.
- **Manually approve** – An admin or group leader must approve the assignment. The lesson cannot be completed until the assignment is approved.

If you choose to manually approve an assignment, you have additional options:

#### Limit number of uploaded assignments

By default, a user can upload an unlimited number of files. Enter a number in the box to specify the maximum number of files a user can upload for this assignment.

- Leave blank for unlimited (default)

Once this limit is reached, the upload form will be removed and the user cannot upload any more files.

#### Allow file deletion

Enable this option to allow the user to delete their own uploaded files. The user will be presented with a delete icon next to the assignment.

- This is only possible up until the assignment has been approved
- Clicking that icon will instantly & permanently delete the file

---

## Manage Assignments

**Source:** [https://learndash.com/support/kb/core/assignments/manage-assignments/](https://learndash.com/support/kb/core/assignments/manage-assignments/)

This article will walk you through all the ways in which you can manage uploaded assignments. If you have not yet read our article on [how to enable assignments](https://learndash.com/support/docs/core/assignments/enable-assignments/), we recommend reviewing that first.

## Viewing Assignments

By default, admins with the Administrator role will be able to fully manage all uploaded assignments, and Group Leaders can manage assignments uploaded by users who are part of the group that they administer. However, there are user management plugins that allow you to expand these capabilities to other users and user roles.

### Where to Find Them

1. Navigate to LearnDash LMS > Assignments
2. You’ll immediately land on the All Assignments screen, where you can see all uploaded assignments

A few things to keep in mind when viewing assignments.

- By default, you’ll see a maximum of 20 assignments per page
- Assignments are sorted in reverse chronological order (the most recently uploaded assignment appears first, at the top)
- Use the navigation arrows at the top and bottom of the table to locate the rest of your assignments (if you have more than 20)

### Assignments Per Page

If you’d like to view more than 20 assignments at a time:

- Click the Screen Options tab at the top of the page
- In the Number of Items Per Page box, enter your desired number of assignments
- Click the Apply button

**NOTE**: The higher the number you set, the longer it will take this admin page to load. In most cases, we don’t recommend you go much higher than 100 per page.

### Filter Assignments

If you have hundreds or thousands of assignments, viewing all assignments on one page based on when they were uploaded might not be the most helpful. You can filter assignments based on the following criteria:

- Date uploaded
- Course uploaded to
- Lesson uploaded to
- Approval status

![How to filter LearnDash assignments in the admin](https://learndash.com/support/wp-content/uploads/2019/04/learndash-assignment-filtering-animation.gif)

To filter assignments:

1. Locate the filter bar near the top of the screen
2. Click the dropdown menu for the criteria you want to filter by
3. Choose a date, course, lesson, or approval status
4. Click the Filter button

You can use multiple filters at once. For example, you can filter by assignments uploaded in 
```
March 2019
```

, to 
```
Course A
```

, which are 
```
Not Approved
```

.

### Search Assignments

Another way to locate a specific assignment is to search for it.

- You can only search the Title column, which is equal to the file name. You cannot search by author or user’s name.
- If you plan to utilize the search feature while managing assignments, you might want to ask your users to name their files in a specific way so they are easier for you to find.

![How to search LearnDash assignments in the admin](https://learndash.com/support/wp-content/uploads/2019/04/learndash-assignment-search-animation.gif)

If you allow multiple file types to be uploaded, you can use the file extension to find all assignments of the same file type. For example:

- Search 
```
pdf
```

 to find all PDF files
- Search 
```
mp3
```

 to find all MP3 audio files

## Download Assignments

There are two ways to download a user’s assignment.

From the “All Assignments” screen (easiest):

1. Hover over the row that contains the assignment you want to download
2. Click the Download link

!["Download Assignment" link in the WordPress admin](https://learndash.com/support/wp-content/uploads/2019/04/learndash-download-assignment-admin.jpg)

From the single assignment view:

1. From the All Assignments screen, click on an assignment to edit it
2. Locate the box titled Assignments
3. At the bottom, next to Actions, click the Download button

![LearnDash single assignment download button](https://learndash.com/support/wp-content/uploads/2019/04/learndash-single-assignment-download-button.jpg)

## Approve Assignments

**WARNING**: Once you’ve approved an assignment, you cannot unapprove it.

You can approve an assignment from the All Assignments screen or on any individual assignment.

From the “All Assignments” screen:

1. Under the Status column, simply click the Approve button

![Quickly approve LearnDash assignment from admin](https://learndash.com/support/wp-content/uploads/2019/04/learndash-quick-approve-assignment-admin.jpg)

**When viewing an individual assignment:**

1. Scroll down to the Assignments box
2. Next to Points, click the Update and Approve button
*(adjust the points first, if necessary)*

![LearnDash single assignment, update & approve button](https://learndash.com/support/wp-content/uploads/2019/04/learndash-single-assignment-update-approve-button.jpg)

### What the User Sees

When assignments are pending approval, the user will see a note explaining that they have assignments awaiting approval.

![LearnDash assignments awaiting approval message](https://learndash.com/support/wp-content/uploads/2019/04/learndash-assignments-awaiting-approval-message.jpg)

## Award/Adjust Points

If you’ve enabled points for an assignment upload, you can adjust them at any time.

From the “All Assignments” screen:

You can only adjust points on this screen if the assignment has not been approved yet.

1. In the Points column, enter the number of points you’d like to award
2. In the Status column, click the Approve button

![Add points to a LearnDash assignment](https://learndash.com/support/wp-content/uploads/2019/04/learndash-assignment-add-points-admin-animation.gif)

If the assignment has already been approved, you can adjust points from the individual assignment page.

1. Click on the assignment you’d like to adjust points for
2. Scroll down to the Assignments box
3. Next to Points, enter the points you’d like to award
4. Click the Update and Approve button

**NOTE**: Adjusting points is always available, even after you’ve approved an assignment. There is no limit to the amount of times you can adjust the points.

### What the User Sees

When viewing a lesson or topic to which they’ve uploaded an assignment, the user will see how many points were awarded for each assignment.

## Provide Feedback/Comments

As a course administrator, you have the ability to provide feedback (or comments) on assignments.

**NOTE**: Make sure you’ve enabled comments in your [Global Assignment settings](https://learndash.com/support/docs/core/assignments/assignment-settings/).

1. From the All Assignments screen, click on the assignment you’d like to provide feedback on
2. Scroll down to the Comments box
3. Click the Add Comment button
4. Type in your feedback
5. Click the Add Comment button once more

![Add comments to LearnDash assignments](https://learndash.com/support/wp-content/uploads/2019/04/learndash-assignment-add-comment-admin-animation.gif)

When your users view the lesson or topic that they uploaded assignments to, they’ll be able to see that you’ve posted a comment.

- They can click on the comment icon to be taken to the individual assignment page where all comments are listed.
- They’ll be able to respond with their own comments, as well.

## Delete Assignments

Many course administrators choose to keep all assignments so they can be referred back to. However, you might want to delete your assignments (when a course is over, if the user is no longer a student in the course, etc.).

To delete an assignment:

1. From the All Assignments screen, hover over the row for the assignment that you want to delete
2. Click the red Trash link

![Trash a LearnDash assignment in the admin](https://learndash.com/support/wp-content/uploads/2019/04/learndash-assignment-admin-trash-link.jpg)

The assignment will immediately disappear from the lesson/topic page, and the user will no longer be able to see it. However, as an admin, the assignment is placed in a trash bin. It can be recovered for up to 30 days, at which point it will then be permanently deleted.

## Notifications

It’s also possible to send and receive notifications about activity on assignments, to both administrators and users. The following options are available:

- When a user has uploaded an assignment
- When an assignment is approved

For instructions on how to set this up, please reference our documentation for the [Notifications Add-On](https://learndash.com/support/docs/add-ons/notifications/).

---

## Global Assignment Settings

**Source:** [https://learndash.com/support/kb/core/assignments/assignment-settings/](https://learndash.com/support/kb/core/assignments/assignment-settings/)

There are a few global settings that apply to all assignments. We recommend adjusting these settings before allowing users to upload assignments.

To access your global assignment settings:

1. Navigate to **LearnDash LMS > Assignments**
2. Click the Settings tab

## Search

Enable this setting if you want assignments to be included in search results when using the default WordPress search form on the front-end of your site.

**NOTE**: Search has nothing to do with Google search results. Google will index your assignments (if you’ve made them publicly viewable) regardless of this setting.

## Publicly Viewable

This is part of the WordPress Custom Post Type logic, which means the assignment can be displayed on the front-end, similar to other post types.

If you plan to make comments on users’ assignments and want them to be viewable on your site, you’ll want to enable this setting.

When you turn this setting on, a unique page will be accessible for each and every assignment that is uploaded. The primary reason this page exists is to keep track of feedback and comments on the assignment.

**NOTE**: When this setting is enabled, assignment posts are only viewable by the admin, group leader, and student who uploaded the assignment.

## Comments Enabled

This setting must be enabled in order for you to provide comments on uploaded assignments. Turning it on will enable WordPress’ default commenting system, so you’ll be able to provide feedback on a user’s assignment. The user will be able to respond with comments of their own.

---

## Assignments

**Source:** [https://learndash.com/support/kb/core/assignments/assignments/](https://learndash.com/support/kb/core/assignments/assignments/)

Assignments allow learners to submit files as part of a course. They support deeper engagement by allowing users to upload work such as essays, worksheets, images, or videos to a **Lesson** or **Topic**. This can help instructors assess comprehension, creativity, and practical application.

Think of assignments as digital take-home tasks ideal for encouraging critical thinking and real-world demonstration of learning.

**Ideal For:**

- Uploads of workbooks, slide decks, or spreadsheets
- Creative projects like photos, videos, or designs
- Demonstration of skills in practical formats

Assignments bring a human touch to online learning, helping learners feel seen and supported.

## How Assignments Work

When enabled on a **Lesson** or **Topic**, an assignment upload field appears for the learner. Once a file is submitted, the instructor or group leader can:

- Download and review the submission
- Leave a personalized comment
- Approve or reject the work
- Assign points (optional, for grading or gamification)

**Note:** Assignments require manual review. This ensures every learner receives attention and feedback that supports their growth.

## Understanding Assignment Tools in LearnDash

LearnDash provides a set of tools that support how assignments are set up, submitted, and reviewed across your site:

### Key Features

- [Global Settings](https://learndash.com/support/docs/core/assignments/assignment-settings/) – Applied to all assignments throughout your entire site
- [Enable Assignment Uploads](https://learndash.com/support/docs/core/assignments/enable-assignments/)Configure assignment settings directly within each **Lesson** or **Topic**. You’ll decide what file types learners can upload, whether submissions need approval, and if instructors can leave comments.
- [Manage Assignments](https://learndash.com/support/docs/core/assignments/manage-assignments/)Go to **LearnDash LMS > Assignments** to view, search, and filter submissions across all courses. From here, instructors can:
- Approve or delete files
- Leave comments and award points
- Track submission activity
- Get notified when new assignments are submitted
- Designed for File Uploads

Assignments are best used when learners need to submit files like documents, images, or spreadsheets.

You can use assignments within a Lesson / Topic alongside quizzes and progression rules to create a rich, layered learning experience.

## Conclusion

Assignments offer a meaningful way to connect with learners and evaluate their understanding beyond multiple-choice quizzes or automated assessments. By enabling file submissions, instructors can encourage deeper thinking, creativity, and skill development. With flexible settings and centralized management, LearnDash assignments can be tailored to fit a wide range of teaching styles and course goals. For best results, combine assignments with quizzes, lesson timers, and instructor feedback to create a well-rounded learning experience.

---

