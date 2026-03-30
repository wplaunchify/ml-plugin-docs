# Topics

*Category from LearnDash documentation*

---

## Topic Display & Content Settings

**Source:** [https://learndash.com/support/kb/core/topics/topic-display-content-settings/](https://learndash.com/support/kb/core/topics/topic-display-content-settings/)

The topic content and display settings provide a way for you to use additional content in your topic, as well as make it a little more interactive. You can include additional topic materials, add some helpful logic to your video playback, allow users to upload assignments, and include a topic timer.

## Locating Topic Display & Content Settings

1. Navigate to LearnDash LMS > Topics
2. Click on the topic you want to edit
3. Click on the Settings tab at the top of the page
4. Locate the section titled Display & Content Options

## Topic Materials

Topic materials are supplemental materials needed for the topic. It is most common to include PDF files or other downloadable files in this area, but you can include anything you’d like (PDFs, images, downloadable audio files, links to other websites, etc.).

1. Next to Topic Materials, turn the setting on
2. Add your materials in the box (HTML is supported)

Topic materials are displayed to your users in a separate tab, alongside your main topic content.

**NOTE**: Between video progression, assignment uploads and topic timer, **only one of the three can be enabled at a time**. Enabling one of these options will make the other two inaccessible.

## Video Progression

Video progression is a way to require users to watch the entirety of a video before they can complete the topic. Please see our [full guide on video progression](https://learndash.com/support/docs/guides/video-progression/).

## Assignment Uploads

**NOTE**: Assignment uploads cannot be enabled if either video progression or topic timer are enabled.

![LearnDash upload assignment frontend example](https://learndash.com/support/wp-content/uploads/2019/04/learndash-upload-assignment-frontend-example.jpg)

To allow users to upload assignments to the topic, enable the Assignment Uploads option on Your LearnDash Topic Page > Settings > Display and Content Options. You’ll be presented with a few additional options:

![Edit Topic The Power of Effective Content](https://learndash.com/support/wp-content/uploads/2024/02/Edit_Topic_The_Power_Of_Effective_Content_‹_0cfdcb92c7_nxcli_net_—_WordPress.jpg)Enable the Assignment Uploads Option

### File extensions

You can specify exactly which file types may be uploaded.

- Enter each allowed file type in the box (without the leading
```
.
```

)
- Separate multiple file types with a comma
- Leave blank to allow any file type to be uploaded

For example, enter the following to allow only Microsoft Word, Excel and PowerPoint files:

- ```
doc, docx, xls, xlsx, ppt, pptx
```

[Here’s a list of common file extensions](https://fileinfo.com/filetypes/common) for your review.

### File size limit

You can specify the maximum file size allowed to be uploaded.

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

**NOTE**: Your [host](https://learndash.com/support/docs/getting-started/hosting/) also sets a maximum file size limit. The lower limit will always be used. If you’re having trouble receiving assignment uploads, you can contact your host and ask them to increase your maximum file upload size.

### Points

If you’d like to award points to a user when they submit an assignment:

1. Next to Points, turn the setting on
2. Enter the number of points to be awarded for a submitted assignment

### Grading Type

There are two options for how assignments are graded:

- **Auto-approve** (default): No grading or approval is needed. The assignment will be automatically approved and full points will be awarded.
- **Manually approve**: An admin or group leader must approve the assignment. The topic cannot be completed until the assignment is approved.

If you choose to manually approve an assignment, you have additional options:

#### Limit number of uploaded assignments

Enter a number in the box to specify the maximum number of files a user can upload for this assignment.

- Leave blank for unlimited (default)

#### Allow file deletion

Enable this option to allow the user to delete their own uploaded files. This is only possible up until the assignment has been approved.

## Topic Timer

Enabling a topic timer will require the user to spend a certain amount of time on the topic page before they can mark it complete. The topic cannot be completed until the set time has elapsed.

1. Next to Topic Timer, turn the setting on
2. Enter the time in the following format:
- ```
HH
```

 : 
```
MM
```

 : 
```
SS
```

 (hours : minutes : seconds)

![LearnDash forced lesson timer example](https://learndash.com/support/wp-content/uploads/2019/04/learndash-forced-lesson-timer-example-animation.gif)

## Topic Access Settings

These settings determines how the topics are accessed by the user. You may opt to associate your topics to a course, a lesson, and create a release schedule to drip feed your content.

![Topic Access Settings](https://learndash.com/support/wp-content/uploads/2024/02/Edit_Topic_The_Power_Of_Effective_Content_‹_LD_Dev_1_—_WordPress.png)Topic Access Settings

### Associated Course

This setting allows you to associate/link your topic to a specific course. You can also do this using the course builder, but if you created a topic outside of a course, you can update this setting to associate it. The topic will reflect on the course builder.

1. Next to Associated Course**,**click inside the drop-down
2. Search for and select the name of the course
3. Click on the course to associate your current topic with the course

### Associated Lesson

This setting allows you to associated/link your topic to a specific lesson. You can do this while building the course and lessons, but if you created the topic outside of a course or lesson, you can update this setting to associate it. The topic will reflect on the course builder.

1. Next to Associated Lesson**,** click inside the drop-down
2. Search for and select the name of the lesson
3. Click on the lesson to associate your current topic with the course

Any changes in the association that you make on the course builder on the specific course or lesson, for this topic will also reflect the changes here.

### Topic Release Schedule

#### You can drip feed your topics to your users using this option. You have three choices:

- **Immediately** – The topic is made available upon course enrollment
- **Specific date** – The topic will be available on a specified date
- **Enrollment-based** – The topic will be available x-number of days after the user has enrolled in the course.

The **External Topic** option is applicable when you offer Blended Learning. It is when you teach an online-based curriculum but have a requirement (from either the government or for regulatory reasons) for an in-person exam or classroom-based learning.

![Blended Learning | External Topic option](https://learndash.com/support/wp-content/uploads/2024/02/external-topic-course-content.png)Blended Learning External Topic option

#### Enabling this option gives you the following:

- Ability to mark a topic as Virtual or In-Person
- Ability to bypass the attendance requirement of a topic, either Virtual or In-Person
- Ability to mark a student as “attended” in their user profile by an admin or a group leader

### How To Use This Feature?

![](https://learndash.com/support/wp-content/uploads/2024/02/external-topic-settings.png)

1. In the topic settings page, toggle the **External** Topic switch to **On**.
2. Under Type, select Virtual if the topic takes place in a virtual setting, e.g., Zoom or In-Person if the topic takes place in-person.
3. Under Require Attendance, select **Yes** if attendance is required or **No** if it is not required.
- When set to **Yes**, the student cannot continue to the next course step (applies to Linear Course Progression) unless an admin or a group leader has marked them that they have attended the virtual or in-person topic. The Mark Complete button will not be available on the topic page. The admin or group leader must mark the topic as completed from the User Profile page in the backend.
- When set to **No**, attendance is not required to be able to continue on the course. The Skip Event button is available for the student to click to proceed to the next step of the course. This is equivalent to the Mark Complete button.

---

## Topic Page Content

**Source:** [https://learndash.com/support/kb/core/topics/topic-page/](https://learndash.com/support/kb/core/topics/topic-page/)

The topic page content is where you have full control over adding whatever content you’d like to your topic. If you’ve added a quiz to your topic, LearnDash will automatically list it at the bottom of the topic page.

The topic page content you add here is your own custom information that will be displayed above any associated [Quizzes](https://learndash.com/support/docs/core/quizzes/).

![LearnDash topic page content overview](https://learndash.com/support/wp-content/uploads/2019/04/learndash-topic-page-content-overview.jpg)

## Where to Add Topic Page Content

1. Navigate to LearnDash LMS > Topics
2. Click on the Topic you’d like to edit -or- Click the Add New button
3. You will automatically land on the Topic page tab
4. You can immediately start adding your content

### Gutenberg vs. Classic Editor

This article assumes you are using WordPress 5.0 or greater, which includes the new WordPress editing experience. If you’re using the [Classic Editor plugin](https://wordpress.org/plugins/classic-editor/), your experience will be different.

### Page Builders

If you’ve chosen to use a page builder plugin (Elementor, Beaver Builder, Divi, WPBakery, etc.) to edit your topic content, you should refer to the page builder’s documentation on adding content.

## Topic Title

Your topic title is the first thing you’ll see at the top of the editing screen. Look for a placeholder that says Add Topic Title. Most themes display the topic title near the top of the page, below your header and/or global navigation.

## Topic URL

When you click inside of the Add Topic Title box, you’ll see an area appear above, labeled Permalink. This is your topic URL.

The first two parts of the URL are not editable. They are determined by your site’s domain name and the topic slug you have chosen (which will be 
```
/topic/
```

, unless you’ve customized your [LearnDash permalinks](https://learndash.com/support/docs/core/settings/permalinks/)).

You can edit the third part of the URL:

```
https://yoursite.com/topic/your-topic-permalink/
```

**NOTE**
If your URL looks different than above, it’s because you’ve enabled Shared Course Steps. You can still edit the final part of the URL. [Learn more about shared course steps](https://learndash.com/support/docs/core/courses/shared-course-steps/)

In most cases, the permalink should be a reflection of your topic title.

1. Click the “Edit” button next to the permalink
2. Type your new permalink
3. Hit Enter, or click the Save button

![Updating a LearnDash course URL in Gutenberg](https://learndash.com/support/wp-content/uploads/2019/04/learndash-update-course-url-gutenberg-animation.gif)This shows a course URL but topic URLs are edited the same way.

## Topic Content

Everything below the topic title is a blank canvas for you to add your content. This is powered by the same WordPress editor used for pages, blog posts and other content types in WordPress.

Add text, insert images, embed videos or other multimedia content, link to PDFs or audio files… the possibilities are endless. You have full control over the type of learning experience you deliver to your users.

For more information on how to use the WordPress editor, please see the [official WordPress Editor documentation](https://wordpress.org/support/article/wordpress-editor/).

## Featured Image

The featured image is the main image associated with your topic. Most WordPress themes will display this image near the top of your topic page. It’s also the image we’ll display if you’re using the [course grid add-on](https://learndash.com/support/docs/add-ons/course-grid/) with the 
```
[ld_topic_list]
```

 shortcode.

1. Look for the Featured Image panel in the sidebar
2. If it’s not already open, click on it to open it
3. Click Set Featured Image
4. Choose an image from your Media Library, or upload a new one
5. Click the Select button at the bottom

![LearnDash set featured image](https://learndash.com/support/wp-content/uploads/2019/04/learndash-set-featured-image-animation.gif)This shows a course image but topic images work the same way.

**NOTE**: Where and how your topic title, content & featured image are displayed is heavily dependent on your [WordPress theme](https://learndash.com/support/docs/getting-started/themes/). If you’re experiencing layout issues with this content, please contact your theme developer.

---

## Topic Display and Content Settings

**Source:** [https://learndash.com/support/kb/core/topics/topic-display-content/](https://learndash.com/support/kb/core/topics/topic-display-content/)

The Topic Content and Display settings provide a way for you to use additional content in your topic, as well as make it a little more interactive. You can include additional topic materials, add some helpful logic to your video playback, allow users to upload assignments, and include a topic timer.

## Locating Topic Display and Content Settings

1. Navigate to LearnDash LMS > Topics
2. Click on the Topic you want to edit
3. Click on the Settings tab at the top of the page
4. Locate the section titled Display and Content Options

## Topic Materials

Topic materials are supplemental materials needed for the topic. It is most common to include PDF files or other downloadable files in this area, but you can include anything you’d like (PDFs, images, downloadable audio files, links to other websites, etc.).

1. Next to Topic Materials, turn the setting on
2. Add your materials in the box (HTML is supported)

Topic materials are displayed to your users in a separate tab, alongside your main topic content.

**NOTE**: Between video progression, assignment uploads & topic timer, only one of the three can be enabled at a time. Enabling one of these options will make the other two inaccessible.

## Video Progression

Video progression is a way to require users to watch the entirety of a video before they can complete the topic. Please see our [full guide on Video Progression](https://learndash.com/support/docs/guides/video-progression/).

## Assignment Uploads

**NOTE**: Assignment uploads cannot be enabled if either video progression or topic timer are enabled.

![LearnDash upload assignment frontend example](https://learndash.com/support/wp-content/uploads/2019/04/learndash-upload-assignment-frontend-example.jpg)

To allow users to upload assignments to the topic, enable the Assignment Uploads option on Your LearnDash Topic Page > Settings > Display and Content Options. You’ll be presented with a few additional options.

### File extensions

You can specify exactly which file types may be uploaded.

- Enter each allowed file type in the box (without the leading 
```
.
```

)
- Separate multiple file types with a comma
- Leave blank to allow any file type to be uploaded

For example, enter the following to allow only Microsoft Word, Excel & PowerPoint files:

- ```
doc, docx, xls, xlsx, ppt, pptx
```

[Here’s a list of common file extensions](https://fileinfo.com/filetypes/common)

### File size limit

You can specify the maximum file size allowed to be uploaded. Enter a number, followed by 
```
M
```

 (for megabytes)

For example, to limit uploads to 5 megabytes, enter 
```
5M
```

.

**NOTE**: Your [host](https://learndash.com/support/docs/getting-started/hosting/) also sets a maximum file size limit. The lower limit will always be used. If you’re having trouble receiving assignment uploads, you can contact your host and ask them to increase your maximum file upload size.

### Points

If you’d like to award points to a user when they submit an assignment:

1. Next to Points, turn the setting on
2. Enter the number of points to be awarded for a submitted assignment

### Grading Type

There are two options for how assignments are graded:

- **Auto-approve** (default) – No grading or approval is needed. The assignment will be automatically approved & full points will be awarded.
- **Manually approve** – An admin or group leader must approve the assignment. The topic cannot be completed until the assignment is approved.

If you choose to manually approve an assignment, you have additional options:

#### Limit number of uploaded assignments

Enter a number in the box to specify the maximum number of files a user can upload for this assignment.

- Leave blank for unlimited (default)

#### Allow file deletion

Enable this option to allow the user to delete their own uploaded files. This is only possible up until the assignment has been approved.

## Topic Timer

Enabling a topic timer will require the user to spend a certain amount of time on the topic page before they can mark it complete. The topic cannot be completed until the set time has elapsed.

1. Next to Topic Timer, turn the setting on
2. Enter the time in the following format:
- ```
HH
```

 : 
```
MM
```

 : 
```
SS
```

 (hours : minutes : seconds)

![LearnDash forced lesson timer example](https://learndash.com/support/wp-content/uploads/2019/04/learndash-forced-lesson-timer-example-animation.gif)

## Topic Access Settings

These settings determines how the topics are accessed by the user. You may opt to associate your topics to a course, a lesson, and create a release schedule to drip feed your content.

### Associated Course

This setting allows you to associate/link your topic to a specific course. You can also do this using the course builder, but if you created a topic outside of a course, you can update this setting to associate it. The topic will reflect on the course builder.

1. Next to Associated Course**,** click inside the drop-down
2. Search for and select the name of the Course
3. Click on the course to associate your current Topic with the Course

### Associated Lesson

This setting allows you to associated/link your topic to a specific lesson. You can do this while building the course and lessons, but if you created the topic outside of a course or lesson, you can update this setting to associate it. The topic will reflect on the course builder.

1. Next to Associated Lesson**,** click inside the drop-down
2. Search for and select the name of the lesson
3. Click on the lesson to associate your current topic with the course

Any changes in the association that you make on the course builder on the specific course or lesson, for this topic will also reflect the changes here.

### Topic Release Schedule

You can drip feed your topics to your users using this option. You have three choices:

- **Immediately** – The topic is made available upon course enrollment
- **Enrollment-based**– The topic will be available x-number of days after the user has enrolled in the course.
- **Specific date** – The topic will be available on a specified date

---

## Global Topic Settings

**Source:** [https://learndash.com/support/kb/core/topics/topic-settings/](https://learndash.com/support/kb/core/topics/topic-settings/)

The LearnDash topic settings screen is where you can set global options that will apply to **all** topics on your site. Topic settings are organized into a few sections, outlined below.

To access your global topic settings:

1. In the WordPress dashboard, go to LearnDash LMS > Topics
2. Click the Settings tab

![LearnDash global topic settings navigation](https://learndash.com/support/wp-content/uploads/2019/04/learndash-topic-settings-navigation.jpg)

## Topic Taxonomies (Categories and Tags)

This is where you decide how to organize your topics. You have four options:

![](https://learndash.com/support/wp-content/uploads/2019/04/Topic-Taxonimies.png)

Using topic taxonomies is completely optional, but they provide an additional way to organize your topics. Go ahead andenable the ones that make sense for your course structure. This will help you group similar topics together and make navigation easier for your students.

- **LearnDash Topics Categories:** These allowyou to organize your topics into custom categories that are only available for LearnDash topics.
- **LearnDash Topics Tags:** These allowyou to organize your topics using custom tags that are only available for LearnDash topics.
- **WP Post Categories:** These allowyou to organize your topics using WordPress default category management system. These categories can be viewedandmanaged in the WordPressdashboardunder POSTS > CATEGORIES. You can share thembetweenboth the PostsandTopics post types.
- **WP Post Tags:** These allow you to organize your topics using WordPress default tag management system. These tags can be viewed and managed in the WordPress dashboard under POSTS > TAGS. You can share them amongst both the Posts and Topics post types.

### Managing Categories and Tags

You can manage (add, edit, or delete) the WordPress and LearnDash Categories and Tags via theActionsmenu:

- Go to LearnDash LMS > Topics
- Select the Actions dropdown menu
- Select your desired menu option

![](https://learndash.com/support/wp-content/uploads/2019/04/manage_learndash_topic_categories_and_tags.png)

## Custom Post Type Options

![Topic Custom Post Types](https://learndash.com/support/wp-content/uploads/2019/04/Topic-Custom-Post-Types.png)

- **Search:** Enable this setting if you want topics to be included in search results when using the default WordPress search form on the front-end of your site. You can further customize this by enabling either Logged-in User only o rEnrolled Only.
- **Archive Page:** Enable this setting if you want to enable the front-end archive page where all the topics are listed. Once enabled, for this to take effect, you must re-save your site permalinks. You can also further enable the RSS/Atom Feed when you turn this setting on.
- **Editor Supported Settings:** Select these settings to allow WordPress supported settings within the editor and theme such as the featured images, comments, custom fields and revisions.

**NOTE**: Search has nothing to do with Google search results. Google will index your topic pages regardless of this setting.

---

## Topics

**Source:** [https://learndash.com/support/kb/core/topics/topics/](https://learndash.com/support/kb/core/topics/topics/)

If you’ve got a lot of content, you can use topics to create even more hierarchy in your course. Some course admins might only create [Section Headings](https://learndash.com/support/docs/guides/course-sections/), and add [Lessons](https://learndash.com/support/docs/core/lessons/) to each section, but topics give you one additional level of organization.

**NOTE**: Topics must be added to lessons. You cannot have a course with only topics. If your course only requires one level of hierarchy, simply use lessons instead.

Just like lessons, you can add many different types of course material to your topics, text, images, video, PDFs, presentation slides and more. You’ve also got a few additional display settings for topics. There are a few distinct differences between lessons and topics, all of which we’ll cover in this section.

- **Global Topic Settings:** Settings applied to all topics on your site
- **Display & Content Settings:** Add materials, configure video settings, control assignment uploads and topic timers
- **Create Topic Content:** Add text and images, insert videos, embed interactive content, etc.

## Lessons vs. Topics

In LearnDash, there are a lot of similarities between lessons and topics, but there are a few important distinctions. If you are unsure about the difference between lessons vs. topics, let’s clear things up.

- Lessons are listed above topics in the course hierarchy
- You can have a course with only lessons, but you cannot have a course with only topics. Topics can only be added beneath lessons.
- You can offer sample lessons but not sample topics
- Topics can now also be drip-fed the same way as lessons.
- Also, topics do inherit the schedule of their parent lesson. If a lesson is scheduled for January 1, 2020, all the associated topics will be released on January 1 as well.

Sections are very different from lessons and topics. To learn more, see our [article explaining Course sections](https://learndash.com/support/docs/guides/course-sections/).

Here’s a visual overview of the lessons and topics compared.

| Title | Lessons | Topics |
| --- | --- | --- |
| Add ContentText, images, video, links, PDFs, slides & more | YES | YES |
| Video Progression | YES | YES |
| Add Materials | YES | YES |
| Upload Assignments | YES | YES |
| Force Minimum Required Time | YES | YES |
| Sample Content | YES | NO |
| Schedule for Future AccessTopics inherit the parent lesson’s schedule | YES | YES |

---

