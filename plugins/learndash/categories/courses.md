# Courses

*Category from LearnDash documentation*

---

## Course Completion Page

**Source:** [https://learndash.com/support/kb/core/courses/course-completion-page/](https://learndash.com/support/kb/core/courses/course-completion-page/)

The Course Completion Page enriches the user experience by guiding students to a pre-set page after they successfully complete a course. This is designed with flexibility and customization in celebrating student achievements in mind.

The Course Completion Page can be configured at the global and individual course level. You have the ability to establish a default completion page applicable across all courses. This global setting ensures that upon completion, every student is directed to a designated page, providing a celebratory experience at the end of their learning journey.

For a more tailored approach, you also have the option to specify unique completion pages for individual courses. When activated, this setting takes precedence over the global default, allowing course creators to design distinct completion experiences that align closely with the course content or theme.

## Global Course Completion Page Setup:

This feature can be configured at the global and individual course level.

1. In the WordPress Dashboard on the left-hand side, click on Learndash LMS > Cours
2. Click “Settings to navigate to the Global Course Settings.
3. Scroll down until you find the Global Course Completion Page feature.
4. Select a Global Completion Page:
- Click on the dropdown menu.
- Use the Select to Search box to easily find the WordPress page you created.
- Choose the desired page from the list.
5. Click on Save the Global Setting. A confirmation message will appear, indicating that the setting has been saved.

## Individual Course Completion Page Setup:

1. In the WordPress Admin Menu on the left-hand side, click on Learndash LMS > Courses
2. Select an individual course to edit.
3. Navigate to Course Settings, and scroll down to “Display and Content Options”
4. Locate the Course Completion Page setting.
5. Set a Custom Completion Page for the individual course:
- Click on the dropdown menu.
- Use the Select to Search box to easily find the WordPress page you created.
- Choose the desired page from the list.
- Please Note: Setting a custom page here will override the global course completion page for this course.
6. Click Save. A confirmation message will appear, indicating that the setting has ben saved.

By integrating this feature, you can create a more engaging and rewarding end-of-course moment for students, emphasizing the achievement of completing a course.

---

## Course Dashboard

**Source:** [https://learndash.com/support/kb/core/courses/course-dashboard/](https://learndash.com/support/kb/core/courses/course-dashboard/)

The Course Dashboard allows you to get an excellent overview of the success and status of your course all in one place.

![](https://learndash.com/support/wp-content/uploads/2023/09/Course-Dashboard-Screen.png)

## Accessing the dashboard

If you are viewing the course list by navigating to LearnDash LMS > Courses, clicking on a course title will redirect you to the Dashboard tab where the dashboard is displayed.

If you are already inside of a course and on the Settings tab, you should see a Dashboard tab that you can click on

![](https://learndash.com/support/wp-content/uploads/2023/09/Course-Dashboard-Tab.png)

## Course dashboard widgets

### Total Numbers

#### Lifetime Sales

The total amount of sales across the life of the course in the currently selected currency. The following data is calculated:

- Course Price
- Trial Price
- Coupons

The following data is not calculated:

- Refunds
- Recurring payments

#### Enrolled Students

The totalnumberof students that currently have access to the course, including those who have access through a group.

### Content Numbers

The total amount of lessons, topics and quizzes contained within the course.

### Last 7 Days

Find out how many students accessed your course in the past week, whether or not they currently have access. This number can differ from the Enrolled Students widget.

### Students Allocation by Progress Status

The different status progresses of all students currently enrolled into the course

### Newly Joined

A listof your most recentstudents that have or have had access to the course. This list includes students that have access to the course through group enrollment or that have been enrolled into the course but no longer have access.

### Latest Transactions

If you’re selling your course, you’ll see the most recent purchases here.

### Disable Course Dashboard

**Pro Tip:**If you would prefer to not use the course dashboard, you can add the following snippet of code to your themes functions.php file or use something like the Code Snippets ([https://wordpress.org/plugins/code-snippets/](https://wordpress.org/plugins/code-snippets/)) plugin.

```
add_filter(
'learndash_dashboard_is_enabled',
	function() {
		return false;
	}
);
```

#### Remove Dashboard tab from course tabs snippet

```
add_filter(
    'learndash_header_tab_menu', function ($header_tabs, $menu_tab_key, $screen_post_type ) {
        foreach ($header_tabs as $key => $header_tab) {
            if ($header_tab['id'] === 'learndash_' . $screen_post_type . '_dashboard') {
                unset($header_tabs[$key]);
                $header_tabs = array_values($header_tabs);
                break;
            }
        }

        return $header_tabs;
    },
    10,
    3
);
```

```
add_filter(
    'learndash_dashboard_tab_is_default', function () {
        return false;
    }
);
```

---

## Pre-Selling

**Source:** [https://learndash.com/support/kb/core/courses/pre-selling/](https://learndash.com/support/kb/core/courses/pre-selling/)

## Course Creation

Creating a pre-sold course is easy, follow the instructions below:

1. Create a new course under LearnDash LMS > Courses**and click Add New.
2. Set up your desired[start date](https://learndash.com/support/docs/core/courses/course-access/#start_date): Click onthe Settings tab and look for the Course Access Settings. Add your Start Date in the Course Access Settings metabox.
3. Set the course to either Buy Now or Recurring for the Access Mode.
4. [Setup your payment gateway](https://learndash.com/support/docs/core/settings/payments/#default_payments_configurations) if you have not done so already.
5. Publish your course.

## Course Enrollment: What Your Students Will See

When someone buys your pre-sold course, they’ll be enrolled but won’t be able to access the content until the start date. Theyll see the standard course layout and see a “Pre-Order” status on the course which when hovered over will display the start date.

![](https://learndash.com/support/wp-content/uploads/2023/07/learndash-exploring-course-enrolled-800x217.png)

The above image shows the course after the user has made payment. Note that the course status switches to Pre-Order, and the enrollment button is grayed out and no longer accessible.

![](https://learndash.com/support/wp-content/uploads/2023/07/learndash-exploring-course-start-date-800x92.png)

Hovering over the Pre-Order status element displays the course start date.

## Pre-Selling a Group

Creating a pre-sold group is easy, follow the instructions below:

1. Create a new group under LearnDash LMS > Groups
2. Navigate to the Settings tab,[set up a start date](https://learndash.com/support/docs/core/courses/course-access/#start_date)under Start Date in the Group Access Settings metabox
3. Set the group to either Buy Now or Recurring for the Access Mode
4.[Setup your payment gateway](https://learndash.com/support/docs/core/settings/payments/#default_payments_configurations)if you have not already
5. Publish your group

**NOTE:**If one of the groups has a Start/End date, you cannot use the course(s) within that group in another group.

## FAQ

### Can I set the course to free instead of paid?

Yes, as long as the start date is configured, users will enroll into the course but not gain access to the course until the defined start date.

### Where can I see the list of users that are enrolled into the course?

The list ofenrolled studentscan be found under the Settings tab in the course editor under the Course Users metabox.

---

## Course Outline Builder

**Source:** [https://learndash.com/support/kb/core/courses/course-outline-builder/](https://learndash.com/support/kb/core/courses/course-outline-builder/)

The Course Outline Builder introduces AI Integration via OpenAI into LearnDash Core. After connecting your OpenAI API Key, Course Outline Builder allows you tCourse Outline Builder

The **Course Outline Builder** adds AI-assisted course planning to LearnDash by integrating with OpenAI. After connecting an OpenAI API key, this feature allows course creators to quickly generate a structured course outline by automatically creating lesson titles based on a few basic inputs.

The Course Outline Builder is intended to support **course planning and ideation**. It generates lesson titles only and does not create lesson content.

## Requirements

To use the Course Outline Builder, an **OpenAI API key** is required. An API key can be created by visiting the OpenAI platform:

[https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

Creating an OpenAI account requires a valid payment method, as OpenAI charges a small usage-based fee for API requests.

## Using the Course Outline Builder

To generate a course outline using AI:

1. Navigate to **LearnDash LMS > Courses**.
2. Click **Create Course Outline from AI** in the top-right corner.
3. If this is the first time using the feature, click the prompt to **enter an OpenAI API key**.
4. Enter a **Course Title**.
- An existing course can be selected, or a new course can be created.
5. Choose the **number of lessons** to include in the course.
6. Enter a short, clear description in the **Describe Your Course** field.
7. Click **Create Lessons**.

The system will take a short moment to generate the outline. When a green success message appears, the course outline has been created.

Click the **Course Title** link to open the course directly in the Course Builder.

## Generated Content Behavior

The Course Outline Builder generates:

- Lesson titles only

The following content is **not** generated:

- Lesson content
- Topics
- Quizzes
- Assignments

This behavior is intentional. The feature is designed to help structure and plan a course, while leaving instructional content creation to the course author.

## Frequently Asked Questions

### Why is GPT-4 not available?

The Course Outline Builder uses **GPT-3.5-Turbo**. This model provides sufficient capability for outline generation while maintaining lower usage limits and faster response times. More advanced models are not required for generating lesson titles and outlines.

### Why were no lessons generated?

OpenAI enforces limits on the number of tokens returned in a single request. If lesson generation fails, try the following:

- Reduce the number of lessons requested
- Provide a more specific course description
- Avoid extremely short or overly generic prompts

### Is there a cost associated with the Course Outline Builder?

Yes. OpenAI charges a small usage-based fee for API requests.

As an example, generating 10 courses with 10 lessons each resulted in a total charge of approximately **$0.0038**. Actual costs may vary depending on usage and OpenAI pricing.

## Conclusion

The Course Outline Builder provides a fast way to scaffold courses and organize lesson structure using AI assistance. By automating lesson title creation, course creators can focus on refining instructional content and learning outcomes while maintaining full control over course quality and direction.

---

## Course Create Wizard

**Source:** [https://learndash.com/support/kb/core/courses/course-create-wizard/](https://learndash.com/support/kb/core/courses/course-create-wizard/)

The Course Create Wizard allows you to easily create and publish courses using a YouTube Playlist, a Vimeo Showcase, or a Wistia Project URL.

![](https://learndash.com/support/wp-content/uploads/2022/04/course-create-wizard.png)

Simply by entering the playlists URL, the wizard automatically loads all the data that is needed and creates the course with lessons corresponding to the individual videos in the playlist.

## Using the Course Create Wizard

To use the Course Create Wizard:

1. Navigate to LEARNDASH LMS > Courses

2. Click on the **Create from Video Playlist** button at the top right

![](https://learndash.com/support/wp-content/uploads/2022/04/courses.png)

3. Enter the playlist URL, this can either be:

- a YouTube Playlist URL
- a Vimeo Showcase
- a Wistia Project URL

**NOTE:**Make sure you enter the actual playlist URL **not** the individual video URLs.

4. Click the **Load the playlist data** button

From here, you will be presented with options on the course access settings and the course progression.

## Course Access Settings

Once you’re done loading the playlist, you will then be presented with the course access settings. You can select the one that you want to apply to the course:

![](https://learndash.com/support/wp-content/uploads/2022/04/course-access-settings.png)

- **Open** – the course is not protected. Any user can access its content without the need to be logged-in or enrolled.
- **Free** – the course is protected. Registration and enrollment are required in order to access the content.
- **Buy Now** – the course is protected via the LearnDash built-in PayPal and/or Stripe. Users need to purchase the course with a one-time fee in order to gain access. If this option is selected, you must have the payment platform set up, and you must enter the price of the course.
- **Recurring** – the course is protected via the LearnDash built-in PayPal and/or Stripe. Users need to purchase the course with a recurring fee in order to gain access. If this option is selected, you must have the payment platform set up, and you must enter the price of the course.
- **Closed** – the course can only be accessed through admin enrollment (manual), group enrollment, or integration (shopping cart or membership) enrollment.

**NOTE:**For **Buy Now and Recurring**, you must have a payment platform set up (either Stripe or PayPal). Check out our [Payments](https://learndash.com/support/kb/core/settings/payments/) documentation to learn more.

## Course Progression

Course progression refers to how a user can navigate through your course. As the course creator, it’s up to you how you want to let your users navigate through your course. You have two options:

![](https://learndash.com/support/wp-content/uploads/2022/04/course-progression.png)

- **Linear –** requires the user to progress through course steps in the order in which you’ve laid them out. They **cannot** jump around and skip lessons, topics or quizzes. For example: A user must finish the first lesson before they can take the second one.

**NOTE:****Linear Progression** does not apply if the Course [Access mode](https://learndash.com/support/kb/core/courses/course-enrollment-mode-setting/#h-enrollment-mode) is set to “Open”.

**NOTE:**If the **Linear Progression** option is selected, the user must click on “Mark Complete” button on each lesson in order to proceed to the next course.

- **Free Form** – allows the user to move freely through the course without following the course steps in any particular order. For example: A user may take the tenth lesson before completing the first one.

Once you’re done setting the [Course Access](https://learndash.com/support/kb/core/courses/course-create-wizard/#course-access-settings) settings and [Course Progression](https://learndash.com/support/kb/core/courses/course-create-wizard/#course-progression), click on the “Create the course” button to create your course and its lessons. Note that the course and lessons will be automatically set to **Published** status.

![Create the course](https://learndash.com/support/wp-content/uploads/2022/04/Create-the-course.png)

Once the course is created, you’ll be taken back to the Courses page. From here, you can edit and update the courses and lessons that you created.

Each lesson that is created from the course will contain the specific video and a transcript of the video lesson. You can set and update the content of each lesson as you please.

---

## Course Page

**Source:** [https://learndash.com/support/kb/core/courses/course-page/](https://learndash.com/support/kb/core/courses/course-page/)

The course page content area is where you add a course title, description and featured image for your course. This is what people will see before they enroll (or purchase) the course.

LearnDash will automatically add a course content table with a list of lessons, topics and quizzes associated with the course below your course description. Course page content is your own custom information that will be displayed as soon as the page is loaded, immediately underneath the “Course” tab.

![LearnDash course description frontend example](https://learndash.com/support/wp-content/uploads/2019/04/learndash-course-description-frontend-example.jpg)

## Where to Add a Course Page Content

1. Navigate to LearnDash LMS > Course
2. Click on the course you’d like to edit
3. You will automatically land on the Course page tab
4. You can immediately start adding your course description

![LearnDash course page overview](https://learndash.com/support/wp-content/uploads/2019/04/learndash-course-page-overview-labels.jpg)

### Gutenberg vs. Classic Editor

This article assumes you are using WordPress 5.0 or greater, which includes the new WordPress editing experience (aka: Gutenberg). If you’re using the [Classic Editor plugin](https://wordpress.org/plugins/classic-editor/), your experience will be different.

### Page Builders

If you’ve chosen to use a page builder plugin (Elementor, Beaver Builder, Divi, WPBakery, etc.) to edit your course description, you should refer to the page builder’s documentation on adding content.

**NOTE**: The [course content settings](https://learndash.com/support/docs/core/courses/course-display/#course-content) don’t affect the content that you add to the WordPress editor inside the course page. That content will be displayed to everyone.

## Course Title

Your course title is the first thing you’ll see at the top of the editing screen. Look for a placeholder that says “Add Course title.”

Most themes display the course title near the top of the page, below your header and/or global navigation.

## Course URL

When you click inside of the “Add Course title” box, you’ll see an area appear above, labeled “Permalink.” This is your course URL.

![Updating a LearnDash course URL in Gutenberg](https://learndash.com/support/wp-content/uploads/2019/04/learndash-update-course-url-gutenberg-animation.gif)

The first two parts of the URL are not editable. They are determined by your site’s domain name and the course slug you have chosen (which will be 
```
/courses/
```

, unless you’ve customized your [LearnDash permalinks](https://learndash.com/support/docs/core/settings/permalinks/)).

You can edit the third part of the URL:

```
https://yoursite.com/courses/your-course-permalink/
```

In most cases, this should be a reflection of your course title.

1. Click into the “Title” area, as if you were going to change your course title
2. Click the “Edit” button next to the permalink
3. Type your new permalink
4. Hit Enter, or click the Save button

## Course Description

Everything below the course title is a blank canvas for you to add your description. This is powered by the same WordPress editor used for pages, blog posts and other content types in WordPress.

For more information on how to use the new editor, please see the [official WordPress Editor documentation](https://wordpress.org/support/article/wordpress-editor/).

### Shortcodes & Blocks

LearnDash introduces a number of shortcodes & blocks for you to use in this area. You can add a payment button, show or hide content based on a user’s access, insert a course progress bar and more.

For a more detailed look into all of the available options, please read our [shortcode & blocks article](https://learndash.com/support/docs/core/shortcodes-blocks/).

## Featured Image

The featured image is the main image associated with your course. Most WordPress themes will display this image near the top of your course page. It’s also the image we’ll display if you’re using the [course grid add-on](https://learndash.com/support/docs/add-ons/course-grid/). The typical size for the Featured Image is 1200 x 628 pixels, but how it’s displayed is dependent on the container as defined by your WordPress theme or other options.

1. Look for the Featured Image panel in the sidebar (make sure you’re viewing Document settings, not Block settings)
2. If it’s not already open, click on it to open it
3. Click Set featured image
4. Choose an image from your Media Library, or upload a new one
5. Click the Select button at the bottom

![LearnDash set featured image](https://learndash.com/support/wp-content/uploads/2019/04/learndash-set-featured-image-animation.gif)

**NOTE**: Where and how your course title, description and featured image are displayed is heavily dependent on your [WordPress theme](https://learndash.com/support/docs/getting-started/themes/). If you’re experiencing layout issues with this content, please contact your theme developer.

---

## Course Progression

**Source:** [https://learndash.com/support/kb/core/courses/course-progression/](https://learndash.com/support/kb/core/courses/course-progression/)

Course progression determines how learners move through the content in a course. LearnDash offers two modes of progression—**Linear** and **Free form**—allowing course creators to control how structured or flexible the learning path should be.

This article explains how course progression works, where to adjust the settings, and how it affects learners after course completion.

---

## What Is Course Progression?

Course progression refers to the rules that guide how a learner navigates through course content. This includes lessons, topics, and quizzes.

There are two progression options:

- **Linear** (default): Learners must complete each step in order.
- **Free form**: Learners can move through lessons and topics in any order.

## Where to Find Course Progression Settings

To adjust course progression settings:

1. Go to **LearnDash LMS > Courses**
2. Click on the course you want to edit
3. Select the **Settings** tab
4. Scroll to the section titled **Course Navigation Settings**

![LearnDash navigation/progression settings](https://learndash.com/support/wp-content/uploads/2019/04/learndash-course-navigation-progression-settings.jpg)

## Progression Modes Explained

### Linear Progression (Default)

- Learners must complete each course step in the order you’ve set.
- They cannot skip ahead or jump between lessons or topics.
- Each step must be marked complete before the next one becomes available.

**Example:** A learner must finish *Lesson 1* before they can access *Lesson 2*. Similarly, if a topic exists inside a lesson, the topic must be completed before the lesson can be marked complete.

**Notes:**

- Linear progression does not apply if **Course Access Mode** is set to **Open**.
- Course creators can enable a **forced lesson timer** to require learners to spend a specific amount of time on each lesson.
- Learners must click the **Mark Complete** button to move to the next step.

For more details on timers and lesson display, see [Lesson Display and Content Settings](https://learndash.com/support/kb/core/lessons/lesson-display-content/).

### Free Form Progression

- Learners can move through course content in any order.
- All steps are accessible immediately, unless restricted by other settings.
- When using nested steps (e.g., lessons containing topics), sub-steps must still be completed before the parent step can be marked complete.

**Example:** In a lesson with topics, all topics must be completed before the lesson itself is considered complete—even in Free form mode.

## What Happens If You Edit a Completed Course?

If a course has already been completed by a learner, making changes to the lesson structure **does not reset their course status**.

- **Adding lessons**: The course remains marked as complete for that learner. They will not be required to complete the new lessons.
- **Removing lessons**: The course still shows as complete for users who already finished it.

This behavior ensures learners are not penalized for changes made after they complete a course.

## Locating Course Progression Settings

1. Navigate to LearnDash LMS > Courses
2. Click on the course you want to edit
3. Click on the Settings tab at the top of the page
4. Locate the section titled Course Navigation Settings

## Linear vs. Free form

As the course creator, it’s up to you how you want to let your users navigate through your course. You have two options:

- **Linear** (default)
Requires the user to progress through course steps in the order in which you’ve laid them out. They **cannot**jump around and skip lessons, topics or quizzes. For example, a user must finish the first lesson before they can take the second one. Linear Progression does not apply if the[Course Access mode](https://learndash.com/support/docs/core/courses/course-access/#access-mode)is set to Open.
- If theLinear Progressionoption is selected, the user must click Mark Complete on each lesson to proceed to the next course. You can require a user spend time on a specific lesson by adding a time[forced lesson timer](https://learndash.com/support/docs/core/lessons/lesson-display-content/#forced-lesson-timer)on each course. Then each user cannot simply skip through the courses by hitting the Mark Complete button. Check out our documentation on[Lesson Display & Content Settings](https://learndash.com/support/docs/core/lessons/lesson-display-content/)for more information.
- **Free form**
Allows the user to freely move through the course steps and view the content. If there are any steps within a step ( such as Lesson -> Topic ) the topic under the lesson must be completed first before the lesson can be completed.

### Adding and Deleting Lessons After Course Completion

When adding or deleting lessons after a user has already completed the course, the course progression for that user will not be affected. They will still show the course as completed. For instance, if a user completes a course and new lessons are added, the course progression is not affected and it still remains completed. Similarly, this is also what happens when we delete lessons.

## Conclusion

Choosing the right course progression mode helps create a learning experience that matches the goals of the course. Whether enforcing a structured path with Linear progression or offering flexibility with Free form, LearnDash gives course creators full control over how learners interact with content. Once progression settings are in place, course builders can fine-tune the experience further with tools like lesson timers, quizzes, and access controls.

---

## Course Sections

**Source:** [https://learndash.com/support/kb/core/courses/course-sections/](https://learndash.com/support/kb/core/courses/course-sections/)

**NOTE**: This feature was introduced in **LearnDash 3.0**and works with the [LearnDash 3.0 template](https://learndash.com/support/docs/core/settings/general-settings/#design_content_elements). This feature does not work with the Legacy template.

**Course Sections** offer a simple way to group lessons and topics into logical parts within a course. They don’t replace lessons or topics, but they help make long or complex courses easier to follow by breaking content into themed segments.

![Section headings](https://learndash.com/support/wp-content/uploads/2019/04/Section-heading-screenshots.png)

## What Are Course Sections?

A **Course Section** is a heading used to divide course content into meaningful parts. These headings appear in the **Course Builder** and on the **course page**, making it easier for learners to navigate.

Here’s how course structure looks when sections are used:

**Course > Section > Lesson > Topic**

### Key Details:

- **Text-only headings**: Sections do not hold content directly. All learning content still lives inside lessons and topics.
- **Top-level only**: Sections can only be placed above lessons. They cannot be placed inside lessons or topics.
- **Unlimited use**: Add as many sections as needed to organize your course.
- **Course-specific**: Sections are created within a course and cannot be shared between courses.
- **Only visible if used**: Sections only display on the front end if they contain at least one lesson, topic, or quiz.

### When to Use Course Sections

Sections are most helpful for breaking a long course into smaller, more digestible parts. For example:

**Scenario:** A course includes 40 lessons, grouped into four major themes.
**Solution:** Use sections to introduce each theme and group the related lessons beneath them.

**Example Layout:**

- **Theme 1: Introduction to Creative Writing***(Section Heading)*
- Lesson 1
- Lesson 2
- …
- Lesson 10
- **Theme 2: Writing Fiction***(Section Heading)*
- Lesson 11
- …

This structure makes the course easier to navigate and helps learners understand how content is organized.

## How to Use Sections

## How to Add a Course Section

Course sections are created directly in the **Course Builder**.

### To add a section:

1. Open the course in **LearnDash LMS > Courses**
2. Click the **Builder** tab
3. Click **+ New Section Heading**
4. Enter a name for your section
5. Press **Enter** or click **Add Section Heading**

Tip: To place the new section in a specific location, click a lesson to highlight it before adding the section. The section will appear just below the selected lesson.

![Add new section heading in LearnDash](https://learndash.com/support/wp-content/uploads/2019/04/learndash-add-new-section-heading-animation.gif)

## Moving Course Sections

You can move sections just like lessons or topics in the Course Builder.

### To drag and drop a section:

1. Hover over the **six-dot icon** to the left of the section heading
2. Click and hold to drag it to a new position
3. Release to drop it in place

### To move a section one position at a time:

- Use the **up/down arrows** to the left of the section heading

![Move section headings in LearnDash](https://learndash.com/support/wp-content/uploads/2019/04/learndash-move-section-headings-animation.gif)

To move a section up or down one level at a time:

1. Locate the up and down arrows immediately preceding the section heading
2. Click either arrow to move the section in your desired direction

## Removing a Course Section

To delete a section:

1. Hover over the section in the Course Builder
2. Click the **Remove** link in red

Note: Removing a section does not delete any lessons or topics beneath it.

---

## Course Display & Content Settings

**Source:** [https://learndash.com/support/kb/core/courses/course-display-content-settings/](https://learndash.com/support/kb/core/courses/course-display-content-settings/)

Each course includes customizable **Display & Content Options** that control how course information, materials, and navigation appear to learners. This article explains each setting and how it affects the course experience, helping you configure the layout and behavior that best fits your content.

## Locating Course Display Settings

1. Navigate to **LearnDash LMS > Courses**
2. Click the course you want to edit
3. Select the **Settings** tab at the top of the page
4. Locate the **Display & Content Options** section

## Course Materials

Course materials are supplemental resources that support your course content. These may include PDFs, downloadable files, images, audio files, or links to external websites.

To add course materials:

- Toggle **Course Materials** on
- Add your materials in the content box (HTML is supported)

Course materials appear in a **separate tab** on the course page, alongside the main course content.

**Important notes:**

- Course materials are visible to **all users**, including those who are not enrolled
- Use the 
```
[student]
```

 shortcode to display materials to enrolled students only
Click here to learn more.

## Challenge Exam

The **LearnDash Challenge Exam** allows learners to bypass a course by completing an assessment before starting. If the learner passes the exam, the course is automatically marked as complete.

This feature is ideal for:

- Learners with prior knowledge
- Fast-tracking experienced students
- Recognizing existing competency

For full setup instructions, see: **Creating a Challenge Exam**

## Course Certificate

A certificate can be awarded when a student completes a course.

Key points to know:

- Certificates appear in the list only after at least one certificate has been created
- Certificates are available only after all required lessons, topics, and quizzes are completed
- Once earned, a **Download Certificate** button appears on the course page

To assign a certificate, select the certificate you want to associate with the course.

**Note:** Certificates can also be associated with quizzes. Learn how to create a certificate.

## Course Content Visibility

This setting controls who can see the **list of lessons, topics, and quizzes** associated with the course. This does **not** affect content added to the WordPress editor. Editor content is always visible to everyone.

Available options:

- **Always Visible (default)**
Displays the course content list to all visitors
- **Only Visible to Enrollees**
Displays the list only to enrolled students

**Note:** When **Always Visible** is selected, non-enrolled users can see the content list but cannot access it. They will see the message: “You don’t currently have access to this content.”

## Custom Pagination

Pagination controls how many lessons and topics appear at one time. By default, courses use the global pagination settings, but this can be customized per course.

To enable custom pagination:

- Toggle **Custom Pagination** on
- Enter the number of **lessons per page**
- Enter the number of **topics per page**

**Note:**
This setting affects both:

- The course content table on the course page
- The course navigation widget for that course

## Custom Lesson Order

Custom lesson ordering is available **only when the Course Builder is disabled**. If the Course Builder is enabled, it always takes precedence.

### Enable or Disable Course Builder

- The Course Builder is enabled by default
- If it does not appear when editing a course, verify it is enabled in the global course settings

### Configure Custom Lesson Order

1. Toggle **Custom Lesson Order** on
2. Choose a **Sort By** option:
- Date (default)
- Title
- Menu Order
3. Choose an **Order Direction**:
- Descending (default)
- Ascending

Location: **LearnDash LMS > Courses > select a course > Settings**

### How Lesson Order Affects Topics

When lessons include topics, topics follow the same ordering logic **within each lesson**.

Example:

- If lessons are sorted by **Title (Ascending)**, lessons appear alphabetically
- Topics inside each lesson also appear alphabetically, but only relative to that lesson

## Course Completion Page

The **Course Completion Page** redirects learners to a specific page after finishing a course.

Options include:

- A **global completion page** that applies to all courses
- A **course-specific completion page**, which overrides the global setting

This feature is useful for:

- Celebrating completion
- Displaying next steps
- Offering certificates, upsells, or additional resources

---

## Shared Course Steps

**Source:** [https://learndash.com/support/kb/core/courses/shared-course-steps/](https://learndash.com/support/kb/core/courses/shared-course-steps/)

The **Shared Course Steps** feature in LearnDash allows course creators to reuse the same **Lessons**, **Topics**, or **Quizzes** across multiple courses. This eliminates the need to recreate content for each course and offers several benefits:

- Speeds up course creation
- Reduces duplicate content
- Allows edits to a step in one place, applied across all associated courses
- 

**WARNING**: Once **Shared Course Steps** is enabled, it should not be disabled without careful consideration. Disabling this setting will break associations between shared steps and any courses using them.

## Key Considerations

Before enabling Shared Course Steps, here are a few important details to keep in mind:

### LearnDash Course Builder Is Required

This feature only works when the **Course Builder** is enabled, since course steps are no longer linked one-to-one with a single course.

### Permalink/URL Changes

When Shared Course Steps is enabled, LearnDash updates your permalink structure to use **nested URLs**.

- **Without Shared Course Steps:**

```
https://yoursite.com/topic/topic-name/
```
- **With Shared Course Steps:**

```
https://yoursite.com/courses/course-name/lessons/lesson-name/topic/topic-name/
```

### All Courses Listing Page

In the WordPress admin, the **Assigned Course** column will no longer appear on the **Lessons**, **Topics**, or **Quizzes** listing pages.

Use the **Course filter dropdown** to view which steps belong to a specific course.

![LearnDash admin, filter lessons by course](https://learndash.com/support/wp-content/uploads/2019/04/lessons-admin-filter-by-course-animation.gif)

**Important:** Editing a shared step (Lesson, Topic, or Quiz) will affect all courses using that step. To make unique edits, use the **Cloning** feature to create a copy that can be edited independently.

## Course Progression Behavior

Progress is always tracked **per course**, even when steps are shared.

Example: If a student completes a shared quiz in one course, it will **not** be marked complete in another course where that quiz also appears.

## How to Enable Shared Course Steps

- Go to **LearnDash LMS > Courses** in the WordPress admin.
- Click the **Settings** tab.
- Scroll to **Global Course Management and Display Settings**.
- Ensure the **Course Builder** is enabled.
- Toggle on **Shared Course Steps**.
- Click **Save** to apply changes.

![](https://learndash.com/support/wp-content/uploads/2019/04/Shared-course-steps.png)

## Understanding Key Terms

### Primary Association

A **Primary Association** means a step was linked to a course **before** Shared Course Steps was enabled. Each step can have only **one** primary course.

### Secondary Association

A **Secondary Association** is created when a step is added to another course **after** Shared Course Steps is enabled. Steps can have **multiple** secondary associations.

### Bare URL

A **Bare URL** is a standalone URL for a Lesson, Topic, or Quiz **without** a course slug. These are useful for admins when a step is not yet assigned to a course.

- **Example Bare URL:**

```
https://yoursite.com/lessons/lesson-name/
```
- **Example Nested URL:**

```
https://yoursite.com/courses/course-name/lessons/lesson-name/
```

Only administrators can access bare URLs.

## Associated Content and Course Switcher

When editing any Course, Lesson, Topic, or Quiz, a new **Associated Content** box appears in the sidebar.

This section:

- Shows which courses the step is used in
- Provides quick access to edit associated steps
- Displays a **Course Switcher** if the step belongs to more than one course

![LearnDash Associated Content metabox](https://learndash.com/support/wp-content/uploads/2019/04/learndash-associated-content-metabox.jpg)

**Note:** The Associated Content box is **view-only**. To change which courses a step belongs to, always use the **Course Builder**.

When editing a **Course**, the **Associated Content** box in the sidebar displays all connected **Lessons**, **Topics**, and **Quizzes**. Click any listed step to open its edit screen directly.

When editing a **Lesson**, **Topic**, or **Quiz**, the same Associated Content box appears, showing the courses that use this step.

If the step is used in more than one course, a **Course Switcher** dropdown will also appear. This lets admins view how the step is connected in other courses. Use the Course Switcher to quickly review a step’s context across multiple courses—helpful for confirming consistency or spotting variations.

**Note:** To make changes to course-step associations, always use the **Course Builder**.

![LearnDash associated content metabox course switcher](https://learndash.com/support/wp-content/uploads/2019/04/learndash-associated-content-course-switcher-animation.gif)

.kt-accordion-id1141_2f4eab-9c .kt-accordion-inner-wrap{column-gap:var(--global-kb-gap-md, 2rem);row-gap:8px;}.kt-accordion-id1141_2f4eab-9c .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;background:#ffffff;padding-top:var(--global-kb-spacing-sm, 1.5rem);padding-right:var(--global-kb-spacing-sm, 1.5rem);padding-bottom:var(--global-kb-spacing-sm, 1.5rem);padding-left:var(--global-kb-spacing-sm, 1.5rem);}.kt-accordion-id1141_2f4eab-9c > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background:#ffffff;color:#444444;padding-top:14px;padding-right:10px;padding-bottom:6px;padding-left:16px;}.kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}.kt-accordion-id1141_2f4eab-9c > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id1141_2f4eab-9c .kt-blocks-accordion-header:focus-visible{color:#444444;background:#ffffff;border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}.kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion--visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger, body:not(.hide-focus-outline) .kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}.kt-accordion-id1141_2f4eab-9c .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id1141_2f4eab-9c > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{color:#333333;background:#ffffff;border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}.kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#333333;}.kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger{background:#333333;}.kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id1141_2f4eab-9c:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}@media all and (max-width: 1024px){.kt-accordion-id1141_2f4eab-9c .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;}}@media all and (max-width: 1024px){.kt-accordion-id1141_2f4eab-9c > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;}}@media all and (max-width: 1024px){.kt-accordion-id1141_2f4eab-9c > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id1141_2f4eab-9c .kt-blocks-accordion-header:focus-visible{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}}@media all and (max-width: 1024px){.kt-accordion-id1141_2f4eab-9c .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id1141_2f4eab-9c > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}}@media all and (max-width: 767px){.kt-accordion-id1141_2f4eab-9c .kt-accordion-inner-wrap{display:block;}.kt-accordion-id1141_2f4eab-9c .kt-accordion-inner-wrap .kt-accordion-pane:not(:first-child){margin-top:8px;}.kt-accordion-id1141_2f4eab-9c .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;}.kt-accordion-id1141_2f4eab-9c > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;}.kt-accordion-id1141_2f4eab-9c > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id1141_2f4eab-9c .kt-blocks-accordion-header:focus-visible{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}.kt-accordion-id1141_2f4eab-9c .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id1141_2f4eab-9c > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}}
**FAQ and Troubleshooting**.kt-accordion-id1141_4a5e52-84 .kt-accordion-inner-wrap{column-gap:var(--global-kb-gap-md, 2rem);row-gap:8px;}.kt-accordion-id1141_4a5e52-84 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;background:#ffffff;padding-top:var(--global-kb-spacing-sm, 1.5rem);padding-right:var(--global-kb-spacing-sm, 1.5rem);padding-bottom:var(--global-kb-spacing-sm, 1.5rem);padding-left:var(--global-kb-spacing-sm, 1.5rem);}.kt-accordion-id1141_4a5e52-84 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background:#ffffff;color:#444444;padding-top:14px;padding-right:10px;padding-bottom:6px;padding-left:16px;}.kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}.kt-accordion-id1141_4a5e52-84 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id1141_4a5e52-84 .kt-blocks-accordion-header:focus-visible{color:#444444;background:#ffffff;border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}.kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion--visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger, body:not(.hide-focus-outline) .kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}.kt-accordion-id1141_4a5e52-84 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id1141_4a5e52-84 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{color:#333333;background:#ffffff;border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}.kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#333333;}.kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger{background:#333333;}.kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id1141_4a5e52-84:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}@media all and (max-width: 1024px){.kt-accordion-id1141_4a5e52-84 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;}}@media all and (max-width: 1024px){.kt-accordion-id1141_4a5e52-84 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;}}@media all and (max-width: 1024px){.kt-accordion-id1141_4a5e52-84 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id1141_4a5e52-84 .kt-blocks-accordion-header:focus-visible{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}}@media all and (max-width: 1024px){.kt-accordion-id1141_4a5e52-84 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id1141_4a5e52-84 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}}@media all and (max-width: 767px){.kt-accordion-id1141_4a5e52-84 .kt-accordion-inner-wrap{display:block;}.kt-accordion-id1141_4a5e52-84 .kt-accordion-inner-wrap .kt-accordion-pane:not(:first-child){margin-top:8px;}.kt-accordion-id1141_4a5e52-84 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;}.kt-accordion-id1141_4a5e52-84 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;}.kt-accordion-id1141_4a5e52-84 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id1141_4a5e52-84 .kt-blocks-accordion-header:focus-visible{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}.kt-accordion-id1141_4a5e52-84 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id1141_4a5e52-84 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}}
My course content is not associating correctly and redirecting me to the original course of the lessons/topics/quiz.If shared Lessons, Topics, or Quizzes are redirecting to a different course than expected:

Go to **WordPress Dashboard > Settings > Permalinks**
Ensure **Nested URLs** are enabled

---

## Course Enrollment Mode Settings

**Source:** [https://learndash.com/support/kb/core/courses/course-enrollment-mode-setting/](https://learndash.com/support/kb/core/courses/course-enrollment-mode-setting/)

Course Enrollment Mode settings control **how learners gain access to a course**, whether access requires registration, payment, prerequisites, or manual enrollment. These settings also determine how long access lasts and whether enrollment is managed directly in LearnDash or through an external system.

This page explains each enrollment mode and related access settings, along with common use cases and configuration steps.

## Locating Course Enrollment Mode Settings

1. Navigate to **LearnDash LMS > Courses**
2. Select the course to edit
3. Click the **Settings** tab
4. Locate the **Course Enrollment** section

## Enrollment Mode

Enrollment Mode determines how learners access a course. By default, all courses are set to **Free** until another option is selected. LearnDash includes the following enrollment modes:

- Open
- Free
- Buy Now
- Recurring
- Closed

Each option is described below.

## Open

Open courses allow anyone to view course content without enrolling.

### How Open enrollment works

- Course content is publicly available
- No registration, login, or payment is required
- Course progress is tracked only for logged-in users

### Important notes

- The **Mark Complete** button works only for logged-in users
- **Linear Progression** applies only to logged-in users
- Registered users automatically have access to all Open courses

## Free

Free enrollment requires users to register or log in, but does not require payment.

### Rules for Free courses

- Users must be registered and logged in
- No payment is required
- The **Take this Course** button appears for users who are not yet enrolled
- Clicking the button begins the registration or enrollment process

If LearnDash’s custom login and registration system is enabled, the button displays as **Login to Enroll**.

### Common use case

Free enrollment is useful when access should be controlled through registration without charging learners.

## Buy Now

Buy Now enrollment requires a **one-time payment** to access the course.

### Rules for Buy Now courses

- Users must be registered and logged in
- Payment is required for access
- Supported payment gateways include PayPal, Stripe, and Razorpay
- A price must be entered in the **Course Price** field

**Important:** Do not use Buy Now when selling courses through a shopping cart or membership plugin. Use **Closed** enrollment instead.

### Setup steps

1. Select **Buy Now** as the enrollment mode.
2. Enter a price in the **Course Price** field.

**Note:** LearnDash coupons apply only to courses or groups using **Buy Now** access.

Buy Now enrollment also supports purchasing courses with achievement points using the Achievements add-on.

**Note:** Users are automatically enrolled in the course after successful payment.

## Recurring

Recurring enrollment functions similarly to Buy Now, but charges users on a **recurring billing cycle**.

### Rules for Recurring courses

- Users must be registered and logged in
- Payment recurs on a defined schedule
- Supported gateways include PayPal, Stripe, and Razorpay

**Important:** Do not use Recurring with external shopping carts or membership plugins. Use **Closed** enrollment instead.

### Setup steps

1. Select **Recurring**.
2. Enter the recurring price.
3. Define the billing cycle (days, weeks, months, or years).

**Note:** When using days, the value must be between 1 and 90.

### Optional recurring settings

- **Recurring Times**: Limits the number of billing cycles (leave empty for unlimited)
- **Course Trial Price**: Sets a discounted or free trial price
- **Trial Duration**: Defines how long the trial lasts before regular billing begins

## Course Enrollment URL

The **Course Enrollment URL** allows redirecting users after enrollment or registration.

Common use cases include:

- Upselling additional courses
- Providing onboarding instructions
- Offering downloadable materials

This option is available only for **Buy Now** and **Recurring** enrollment modes.

## Closed

Closed enrollment restricts access without applying automatic enrollment rules.

### Rules for Closed courses

- Users must be registered and logged in
- Enrollment is managed externally or manually
- Access can be granted via:
- Ecommerce or membership plugins
- Manual enrollment
- Group enrollment

A **Button URL** field becomes available when Closed mode is selected. This allows redirecting users to a custom sales or checkout page.

### Setup steps

1. Select **Closed**.
2. Enter the URL for the external sales or checkout page.

## Course Prerequisites

Course Prerequisites require learners to complete other courses before accessing the current course.

### Prerequisite options

- **Any Selected** (default): Completion of any one selected course grants access
- **All Selected**: All selected courses must be completed

### Adding prerequisites

1. Toggle **Course Prerequisites** on.
2. Choose **Any Selected** or **All Selected**.
3. Search for and select one or more courses.

To remove a prerequisite, click the **X** next to the course name.

## Course Points

Course points can be used to motivate learners and control access to advanced courses.

### Enabling course points

- Toggle **Course Points** on

### Settings

- **Required for Access**: Number of points required to access the course
- **Awarded on Completion**: Points awarded after completing the course

**Note:** Point values are fully customizable and can be adapted to fit any learning structure.

## Course Access Expiration

Course Access Expiration limits access based on the learner’s enrollment date.

### Configuration

- Toggle **Course Access Expiration** on
- Enter the number of days access should remain active
- Choose whether to delete course and quiz data after expiration

**Warning:** Deleted data cannot be recovered. Backups are recommended before enabling data deletion.

## Start Date and End Date

### Start Date

Allows users to enroll or purchase a course but prevents access until a specified date.

**Note:** Users are considered enrolled even if content access has not yet started.

### End Date

Ends access for all enrolled users on a specific date, regardless of enrollment time.

## Course Pre-Sell

Course Pre-Sell combines **paid enrollment** with a **future start date**, allowing courses to be sold before learners can access the content.

## Student Limit

Student Limit restricts the total number of users who can enroll in a course.

- The limit is displayed on the course page
- Enrollment or purchase is blocked once the limit is reached
- Administrators can still manually enroll users beyond the limit

## Cohorts

Using **Start Date** and **End Date** together allows courses to run in cohorts.

Common examples include seasonal or session-based courses (spring, summer, fall). Courses can be duplicated and assigned new dates for each cohort.

## Course Students

The **Course Students** section displays all users currently enrolled in the course and allows manual enrollment management.

### Enrolling users

1. Select users from the left column.
2. Click the **right arrow** to enroll them.
3. Click **Update**.

### Removing users

1. Select enrolled users from the right column.
2. Click the **left arrow**.
3. Click **Update**.

## Course Access Settings

Use Course Access Settings to fine-tune how learners enroll, access, and progress through a course based on the configuration options described above.

---

## Course Builder

**Source:** [https://learndash.com/support/kb/core/courses/course-builder/](https://learndash.com/support/kb/core/courses/course-builder/)

The LearnDash Course Builder is a visual drag-and-drop tool designed to help you create, structure, and organize your online courses easily. Instead of manually adding[lessons](https://learndash.com/support/glossary/lesson/), [topics,](https://learndash.com/support/glossary/topic/) and [quizzes](https://learndash.com/support/kb/core/quizzes/quizzes/) one by one, the [Course](https://learndash.com/support/glossary/course/) Builder allows you to see your entire course layout in one place and make changes instantly.

With the Course Builder, you can:

- Add, remove, and rearrange [lessons](https://learndash.com/support/glossary/lesson/), [topics](https://learndash.com/support/glossary/topic/), and [quizzes](https://learndash.com/support/kb/core/quizzes/quizzes/) effortlessly.
- Structure your course using sections for better organization.
- Quickly access and modify content without navigating to multiple pages.

This tool is designed to make course creation faster, more intuitive, and accessible—whether you’re an educator, trainer, or business owner.

**NOTE**: The Course Builder is turned on by default. If you don’t see it when editing your course, check your [global course](https://learndash.com/support/kb/core/settings/course-settings/) settings to make sure it’s enabled.

## How to Access the Course Builder

There are a couple of ways you can access the LearnDash course builder.

### For Existing Courses

If you’ve already created a course:

1. Navigate to LEARNDASH LMS > COURSES
2. Hover over an existing course
3. Click the “Builder” link

![LearnDash course builder link on all courses](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-link-all-courses-page.jpg)

Alternatively:

- On the Edit Course page, click the “Builder” tab at the top.
- Click the [course](https://learndash.com/support/glossary/course/) title or the “Edit” link.

![LearnDash course top navigation tab](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-top-nav-label.jpg)

### Creating Your First Course?

1. Navigate to LEARNDASH LMS > COURSES
2. Click the “Add New” button at the top of the page
3. Click the “Builder” tab in the top navigation bar

## Course Builder Overview

At the top of the course builder, you’ll see:

![LearnDash course builder admin, top area](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-admin-top-steps-nav.jpg)

- The total number of steps in the [Course](https://learndash.com/support/glossary/course/), which includes all lessons, topics, and the final quiz.
- An “Undo” link to undo any changes after your first edit.
- A link to “Expand All” or “Collapse All” [Course](https://learndash.com/support/glossary/course/) steps. This helps you quickly view and organize all your course steps, making it easier to add, remove, or rearrange them.

Below this, you’ll find all your [course](https://learndash.com/support/glossary/course/) content, where you’ll spend most of your time building and organizing your course.

![LearnDash course builder admin, main area](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-admin-main-area.jpg)

## Add Content to Your Course

There are multiple ways to add content with the [Course](https://learndash.com/support/glossary/course/) builder, depending on:

- The type of content you want to add (e.g., lessons, topics, quizzes)
- Personal Preference

**IMPORTANT:** All new content created via the Course Builder (i.e. Lessons, Topics, and Quizzes) is automatically published and set to “Public” once the changes are saved for the course. Meaning they will be visible to other users that are visiting or using your website.

### Section Headings

[Section headings](https://learndash.com/support/docs/guides/course-sections/) (requires LearnDash 3.0+) provide a simple way to break your course into sections. **They don’t contain any actual content, and are simply a text-only heading that can be placed between any two lessons.** They work in a similar fashion to chapters in a book.

1. Click on the lesson **before** where you want the section heading to appear
2. Click the “New Section Heading” link
3. Type your heading
4. Hit ENTER, or click the “Add Section Heading” button

![Create LearnDash Section Heading](https://learndash.com/support/wp-content/uploads/2019/03/learndash-create-section-heading.gif)

**To edit a section heading…**

1. Click on its title
2. Make your edits
3. Press ENTER or click the “Save” button

**To remove a section heading…**

1. Hover over the section heading
2. Click the red “Remove” link

![Edit Section Heading in LearnDash course builder](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-edit-section-heading.jpg)

---

For the other content (lessons, topics, and quizzes), you can either:

- Create them first one by one, then use the [Course Builder](https://learndash.com/support/kb/core/courses/course-builder/) to add them to your course,
- Or create them directly in the Course Builder, organize them as you go, and come back to add more content later.

**It all depends on your preference and how you want to set up your course.**

### Lessons

Aside from section headings, [lessons](https://learndash.com/support/docs/core/lessons/) will likely be the first type of content you’ll want to add to your course. You can create brand new lessons directly from the course builder, or add existing lessons that you’ve already created. Let’s take a look at each.

#### Create New Lessons

1. Click the “New Lesson” link
2. Type the name of your lesson
3. Press ENTER, or click the “Add Lesson” button

![Add new lesson in LearnDash course builder](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-add-new-lesson-animation.gif)

#### Add Existing Lessons

To add lessons you’ve already created, find them in the “[Lessons](https://learndash.com/support/glossary/lesson/)” box in the sidebar. By default, your most recent lessons are shown, but you can use the search box to find a specific lesson by title, and click “View all” to see all lessons.

**IMPORTANT**: Make sure [Shared Course Steps](https://learndash.com/support/docs/core/courses/shared-course-steps/) are enabled, or existing lessons, topics, and quizzes won’t be available for selection. If you don’t see the Lessons box, click the gear icon to display the sidebar.

**NOTE** If you don’t see the lessons box depicted below, click the gear icon to display the sidebar.

![Course Builder, lesson metabox](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-lesson-metabox.jpg)

There are multiple ways to add existing lessons.

**Add a single lesson:** Hover over a lesson in the lesson box and click the “Add” button. This will add the lesson to the end of your course.

![LearnDash course builder, add single lesson](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-metabox-lesson-add-button.jpg)

**Add multiple lessons:** Select the checkbox next to multiple lessons, and then click the “Add Selected” button. This will add all selected lessons to the end of your course.

![LearnDash course builder, add multiple lessons](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-metabox-lesson-add-selected.jpg)

**Drag & drop:** If you’d like to add lessons in a particular spot within your course, you can click & hold down your mouse, drag the lesson to the course builder in the spot you want it, and then release. This will place the lesson in your specified location within the course.

![Drag & drop lessons in LearnDash course builder](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-drag-drop-lessons.gif)

#### Edit a Lesson Title

1. Click on the title of the lesson
2. Make your changes
3. Hit ENTER or click the “Save” button

![LearnDash course builder, edit lesson title](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-edit-lesson-title.gif)

#### Edit a Lesson’s Content

Hover over the lesson and click the blue “Edit” link. This will open the “Edit Lesson” page in the same window. Remember to save any changes to your course first before editing the lesson content.

![LearnDash course builder, edit/remove lesson links](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-lesson-edit-remove-links.jpg)

**NOTE**This will open the “Edit Lesson” page in the same window. Be sure to save any edits to your course first.

#### Remove a Lesson

Hover over the lesson you’d like to remove from the course, and click the red “Remove” link.

### Topics

[Topics](https://learndash.com/support/glossary/topic/) are optional but can be helpful for organizing content within a lesson. You need at least one [lesson](https://learndash.com/support/glossary/lesson/) in your [course](https://learndash.com/support/glossary/course/) to add topics. Here’s how you can create and add topics to your course using the Course Builder.

#### Create New Topics

1. Ensure your course has at least one lesson. (Follow the instructions above to add a lesson first.)
2. Expand the lesson by clicking Expand All at the top of the builder or the down arrow next to the lesson.
3. Click the New Topic link.
4. Type the name of your topic.
5. Press Enter or click Add Topic.
6. Hit Enter, or click the Add [Topic](https://learndash.com/support/glossary/topic/) button

![Add new topics in LearnDash course builder](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-add-new-topic-animation.gif)

#### Add Existing Topics

**IMPORTANT**: Make sure [Shared Course Steps](https://learndash.com/support/kb/core/courses/shared-course-steps/) are enabled, or you won’t be able to select existing lessons, topics, or quizzes.

You can find your existing topics in the “Topics” box next to the Course Builder. By default, the most recent topics will show, but you can:

- Use the search box to find a specific topic by its title.
- Click “View All” to see all topics.

![LearnDash topic metabox](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-topic-metabox.jpg)

There are multiple ways to add existing topics.

**NOTE** Before adding topics, you should click on the lesson where you want to insert a topic. This will select the lesson, highlighting it with a grey background & blue border.

Before adding topics, click on the lesson where you want to add them. This will highlight the lesson with a grey background and a blue border.

To add existing topics:

![LearnDash course builder, add a single topic](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-metabox-topic-add-button.jpg)

Add multiple topics: Check the boxes next to the topics you want to add, then click “Add Selected”. This will add all selected topics to the end of the selected lesson.

![LearnDash course builder, edit/remove lesson links](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-metabox-topic-add-selected.jpg)

**Drag & drop:** If you’d like to add topics in a particular spot within your course, you can click & hold down your mouse, drag the topic to the course builder in the spot you want it, and then release. This will place the topic in your specified location within the course.

### Edit a Topic

To edit a topic’s title:

1. Click on the [topic](https://learndash.com/support/glossary/topic/)’s title.
2. Make your changes.
3. Press Enter or click Save.

![Edit LearnDash topic title](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-edit-topic-title.jpg)

#### Edit a Topic’s Content

To edit a topic’s content:

- Hover over the [topic](https://learndash.com/support/glossary/topic/) and click the blue “Edit” link.
- This will open the [topic](https://learndash.com/support/glossary/topic/) in a new tab so you can return to the Course Builder without losing your place.

![LearnDash course builder, edit/remove a topic](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-topic-edit-remove-links.jpg)

**NOTE** You can open this link in a new tab so you can easily return to the course builder without losing your place.

#### Remove a Topic

To remove a topic from your course:

- Hover over the [topic](https://learndash.com/support/glossary/topic/).
- Click the red “Remove” link.

### Quizzes

Quizzes can be added to lessons & topics, or as a final quiz to the course itself. Any combination of these will work. You can create new quizzes directly from the course builder, or pull in existing quizzes you’ve already created.

Course quizzes are located at the bottom of the course builder, under the “FINAL QUIZZES” heading. Lesson & topic quizzes can be found within the lesson/topic that they belong to.

### Quizzes Overview & Setup

Quizzes in LearnDash can be added to [lessons](https://learndash.com/support/glossary/lesson/), [topics](https://learndash.com/support/glossary/topic/), or as a final quiz for an entire course. You can use any combination of these options to assess learners at different stages.

### Where to Find Quizzes in the Course Builder

- Course Quizzes: Located at the bottom of the [Course](https://learndash.com/support/glossary/course/) Builder under the “FINAL QUIZZES” section. These serve as end-of-course assessments.
- Lesson & Topic Quizzes: Found within each Lesson or Topic, allowing you to evaluate learners as they progress through the course.

#### Create New Quizzes

1. Navigate to the lesson/topic where you want to add a quiz (or simply scroll to the “FINAL QUIZZES” section at the bottom)
2. Click the “New Quiz” link
3. Type the name of your quiz
4. Hit Enter, or click the “Add Quiz” button

![Add new quiz in LearnDash course builder](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-add-new-quiz-animation.gif)

#### Add Existing Quizzes

**IMPORTANT** [Shared Course Steps](https://learndash.com/support/docs/core/courses/shared-course-steps/) must be enabled or existing lessons, topics, and quizzes will not be available for selection.

**Adding Existing Quizzes**

You can easily reuse quizzes you’ve already created by adding them to your courses, lessons, or topics using the Course Builder. This helps save time and maintain consistency across your content. Your existing quizzes can be found in the “Quizzes” box in the sidebar. By default, your most recent quizzes are shown, but you can click “View all” to see all quizzes, or use the search box to find a specific quiz by title.

**How to Access Existing Quizzes**

- In the Course Builder, look for the “Quizzes” panel on the right-hand side (sidebar).
- By default, your most recently created quizzes will be shown.
- Click View All to browse everything, or use the search bar to locate a quiz by its title.

There are multiple ways to add existing quizzes.

**Add a single quiz:** Hover over a quiz in the quiz box and click the “Add” button.

![Add single quiz in LearnDash course builder](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-add-single-quiz-metabox.jpg)

**Add multiple quizzes:** Select the checkbox next to multiple quizzes, and then click the “Add Selected” button.

![Add multiple quizzes in LearnDash course builder](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-add-multiple-quizzes-metabox.jpg)

**Drag & drop:** If you’d like to add quizzes in a particular spot within your course, you can click & hold down your mouse, drag the quiz to the course builder in the spot you want it, and then release. This will place the quiz in your desired location within the course.

#### Editing & Managing Quizzes in LearnDash

You can modify quiz titles, settings, questions, or remove quizzes directly from the Course Builder.

#### Edit a Quiz Title

1. Click on the title of the quiz
2. Make your edits
3. Hit Enter or click the “Save” button

#### Edit Quiz Settings & Questions

If you’d like to edit the quiz settings and/or quiz questions, click the blue “Edit” link that appears when you hover over a quiz.

![Quiz edit/remove links](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-quiz-edit-remove-links.jpg)

**NOTE** You can open this link in a new tab so you can easily return to the course builder without losing your place.

Tip: Right-click the “Edit” link and open it in a new tab so you can quickly return to the[Course](https://learndash.com/support/glossary/course/) Builder without losing progress.

### Removing a Quiz from a Course

The quiz will be removed from the [course](https://learndash.com/support/glossary/course/), but it will not be deleted from your LearnDash database—you can add it back anytime if needed.

- Hover over the quiz you want to remove.
- Click the red Remove link.

### Removing a Quiz from a Course

Hover over the quiz you’d like to remove, and click the red “Remove” link.

## Rearrange Course Content

The [Course](https://learndash.com/support/glossary/course/) Builder not only allows you to add lessons, topics, and quizzes—it also gives you full control over the order of your content. You can easily rearrange items to fit the structure and flow of your course.

### Two Ways to Rearrange Content

### Drag & drop

This method offers the most flexibility for reordering any type of [course](https://learndash.com/support/glossary/topic/) content. Each section heading,[lesson](https://learndash.com/support/glossary/lesson/), [topic](https://learndash.com/support/glossary/topic/), and quiz has a 6-dot icon to the left. Hover over the dots until your cursor changes into a hand icon. Click, hold, and drag the item to your desired location within the course structure.

![Drag & drop everything in the LearnDash course builder](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-drag-drop-everything-animation.gif)

### “Move” Arrows(Up/Down)

- Located just above and below the 6-dot icon for section headings and [lessons](https://learndash.com/support/glossary/lesson/).
- Click the up or down arrow to move the selected section or [lesson](https://learndash.com/support/glossary/lesson/)up or down in the sequence.

**NOTE**: The move arrows currently work only for section headings and [lessons](https://learndash.com/support/glossary/lesson/)—they are not available for [topics](https://learndash.com/support/glossary/topic/) or quizzes

![Move LearnDash course content with move arrows](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-builder-move-arrows-animation.gif)

---

## Course Grid

**Source:** [https://learndash.com/support/kb/core/courses/course-grid/](https://learndash.com/support/kb/core/courses/course-grid/)

The **LearnDash Course Grid** feature displays courses in a visual, grid-style layout. This layout helps learners easily browse available courses and works especially well on larger screens.

The Course Grid is built to be user-friendly, with full support for the WordPress Block Editor. It includes customizable visual styles (called *skins*), built-in filtering options, and a variety of display settings. These tools make it easy to tailor the course grid to match the design and goals of any LearnDash site.

This article provides a step-by-step guide to setting up the Course Grid and explores the available options for customizing how courses are displayed.

**NOTE**: The Course Grid can be used to display lessons, topics, or quizzes in a grid, as well.

## Features Included in the Course Grid

The Course Grid feature offers a wide range of options to help display and organize LearnDash courses in a way that fits each site’s goals and branding. From visual styling to filtering tools, these built-in features give course creators the flexibility to create a customized browsing experience for learners.

- Display courses in columns
- Customize number and sort order of courses
- Filter courses by category or tag
- Show only enrolled courses
- Show/hide course image
- Include a video preview
- Include a short description
- Include a call-to-action (CTA) button
- Customize button text
- Include a price ribbon
- Customize ribbon text
- Show/hide course progress bar
- Use on unlimited pages and multiple times per page
- Search courses
- Filter courses
- Change skin

## Using the Course Grid

There are two ways you can add a grid to any page on your LearnDash site:

- **Block:** Best for those using blocks editor such as Gutenberg. This is primarily the main option available for Course Grid 2.0
- **Shortcode:** Best for those using page builder plugins (Elementor, Beaver Builder, Divi, etc.) or the WordPress Classic Editor. The options may be limited while using shortcodes versus the blocks editor version of Course Grid.

**Developers Note**: You can also add the course grid shortcode to your theme files via the [do_shortcode() function](https://developer.wordpress.org/reference/functions/do_shortcode/).

### Block

Blocks are available if you’re using the WordPress Block Editor. You’ll have more features and options than the shortcode provides, and the LearnDash Course Grid block makes it even easier to insert and customize your grid.

![How to add a LearnDash course grid block](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-grid-block-options-animation.gif)

To add a course grid block:

1. Make sure the  LearnDash Course Grid  plugin is installed and activated
2. Click the 
```
+
```

 icon to add a new block
3. Search for “LearnDash Course Grid” and click on the block to insert it
4. Adjust your settings in the Block options panel

### Shortcode

**NOTE**: There are two sets of shortcodes that you will need for the Course Grid. If you are using Course Grid 1.0, proceed with the examples below. For course Grid 2.0, check further down.

**For Course Grid 1.0, you may use these shortcodes and parameters.**The shortcode to insert a course grid looks like this:

[ld_course_list]
```
[ld_course_list]
```

The default options for the course grid will display your courses in 3 columns, and include:

- Featured image (if it exists)
- Course title
- Short description (if it exists)
- Button
- Ribbon

![LearnDash course grid with default options](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-grid-example-default-options.jpg)

Please see the [options table below](#options_parameters) for the many ways in which to customize the course grid.

### Course Grid 2.0 shortcodes and parameters:

#### LearnDash Course Grid

[learndash_course_grid]
```
[learndash_course_grid]
```

#### Accepted attributes:

#### Query

This part handles the posts query part of the shortcode. You can configure how you want to retrieve posts data in your course grid.

1. **Post_type**: any public and queryable registered post type. Default issfwd-courses.
2. **Per_page**: number of posts per page. Default is9.
3. **Orderby**: how the results are ordered by (see[https://developer.wordpress.org/reference/classes/wp_query/#order-orderby-parameters](https://developer.wordpress.org/reference/classes/wp_query/#order-orderby-parameters)). Default isID.
4. **Order**: how the results are ordered. AcceptsASC(Ascending) orDESC****(Descending). Default isDESC.
5. **Taxonomies**: display posts by certain categories. Accepts the following format:taxonomy1: term1, term2; taxonomy2: term1, term2;****taxonomy3: term1, term2;and so on. Default is empty.
6. **Enrollment_status**: acceptsenrolled,not-enrolled, or empty value. Default is empty which means all statuses.
7. **Progress_status**: acceptscompleted,in_progress,not_started, or empty value. Default is empty which means all statuses.

#### Elements

This part is responsible for displayed card elements in your course grid. Most attributes are a toggle that can be switched between on and off for elements in your card design.

To prevent an element from showing, set the parameter for that element as empty. If you want to prevent the thumbnail from showing on the course grid, the shortcode would look like the following:

[learndash_course_grid thumbnail=””]
```
[learndash_course_grid thumbnail=""]
```

Each card has different available elements.

1. **Thumbnail**: accepts
```
"true"
```

 or
```
""
```

. Default is **"true"**.
2. **Thumbnail_size**: any registered image size in the site. Default is 
```
"thumbnail"
```

.
3. **Ribbon**: accepts **"true"**or**""**. Default is**"true"**.
4. **Content**: accepts **"true"**or**""**. Default is**"true"**. Content includes all elements outside of the thumbnail. So if you want to display a thumbnail-only grid you can turn this off.
5. **Title**: accepts **"true"**or**""**. Default is**"true"**.
6. **Title_clickable**: accepts **"true"**or**""**. Default is**"true"**. Whether the title is clickable or not.
7. **Description**: accepts **"true"**or**""**. Default is**"true"**.
8. **Description_char_max**: accepts any positive number. Default is 
```
"120"
```

. Maximum number of characters that will be displayed in the course grid description.
9. **Button**: accepts **"true"**or**""**. Default is**"true"**.
10. **Filter**: accepts **"true"**or**""**. Default is**"true"**. Whether the course grid has filters above it or not.
11. **Pagination**: acceptsbutton(load more button) or****infinite(infinite scrolling). Default is 
```
"button"
```

.
12. **Progress_bar**: accepts **"true"**or**""**. Default is**""**.
13. **Post_meta**: accepts **"true"**or**""**. Default is**"true"**. Meta is any kind of post’s additional information such as author, categories, etc.

#### Template

This part handles the template part of the course grid.

1. **Skin**: accepts skin key registered on the site. By default CG 2.0 comes with 2 skins:grid,masonryandlist. Default is 
```
"grid"
```

.
2. **Card**: accepts card key registered on the site. Each skin can have different cards. By default CG 2.0 comes withgrid-1,grid-2,grid-3cards ( for grid and masonry skin ) andlist-1,list-2cards ( for list skin ). Default is**"grid-1"**.
3. **Columns**: accepts positive numbers. How many columns will be displayed ongridandmasonryskin course grid. Default is**"3"**.
4. **min_column_width**: in pixel. What is the minimum number of column width pixels allowed on the course grid. Default is**"250"**.

#### Styles

This part handles the style aspects of the course grid.

1. **font_family_title**: define font family will be used for the course grid card title. Default is empty and follows the theme font family.
2. **font_size_title**: accepts full font size format such as 18px, or 1.2rem. It defines the font size of the course grid card title. Default is empty and follows the theme font size.
3. **font_color_title**: define font color of the course grid card title. Default is empty and follows the theme font color.
4. **background_color_title**: define background color of the course grid card title. Default is empty and follows the theme background color.
5. **font_family_description**: define font family will be used for the course grid card description. Default is empty and follows the theme font family.
6. **font_size_description**: accepts full font size format such as 18px, or 1.2rem. It defines the font size of the course grid card description. Default is empty and follows the theme font size.
7. **font_color_description**: define font color of the course grid card description. Default is empty and follows the theme font color.
8. **background_color_description**: define background color of the course grid card description. Default is empty and follows the theme background color.

#### Filter

This part is responsible for defining the available filters on the course grid. This part will be used only if thefilterattribute is set totrue.

1. **filter_search**: accepts **"true"**or 
```
""
```

. Default is true. If enabled, search by keyword filter will be available on the course grid.
2. **filter_taxonomies**: accepts taxonomy slugs separated by comma. Default is**"category,post_tag"**. Display filter by taxonomies in the course grid.
3. **filter_price**: accepts **"true"**or 
```
""
```

. Default is true. If enabled, a price filter will be displayed on the course grid. Currently the price filter only supports LearnDash Course and Group by default. It supports other post types via filter hook.
4. **filter_price_min**: accepts a positive number set as minimum price in the price filter slider. Default is**0**.
5. **filter_price_max**: accepts a positive number set as maximum price in the price filter slider. Default is**1000**.

#### Miscellaneous

1. **id**:**Required**. Accepts a random and unique string used for the ID attribute of the course grid. Its required to make custom styling and filter work.
2. **class**: accepts random string added to the course grid. This is optional.

**Example:**

Minimum working shortcode example:

[learndash_course_grid id=cg-1]
```
[learndash_course_grid id=cg-1]
```

LearnDash Course Grid Filter

[learndash_course_grid_filter]
```
[learndash_course_grid_filter]
```

This shortcode is useful if users want to output course grid filter separately from the main course grid. For example users want to display a course grid on a page and display its filter in the sidebar.

### Accepted attributes:

1. **course_grid_id**:**Required**. The value must match the**id**attribute of the learndash_course_grid shortcode attribute to make the filter work properly.
2. **search**: accepts **"true"** or 
```
""
```

. Default is**true**. Whether to display search by keyword filter or not.
3. **taxonomies**: taxonomy slugs separated by comma. Default iscategory, post_tag. Taxonomies that will be displayed as the course grid filter.
4. **price**: accepts **"true"**or
```
""
```

. Default is true. If enabled, a price filter will be displayed on the filter. Currently the price filter only supports LearnDash Course and Group by default. It supports other post types via filter hook.
5. **price_min**: accepts a positive number set as minimum price in the price filter slider. Default is**0**.
6. **price_max**: accepts a positive number set as maximum price in the price filter slider. Default is**1000**.

### Example:

Minimum working shortcode example:

[learndash_course_grid_filter course_grid_id=cg-1]
```
[learndash_course_grid_filter course_grid_id=cg-1]
```

## Options (Blocks Parameters)

The following options are available to customize the output of your LearnDash course grid.

![Add new page](https://learndash.com/support/wp-content/uploads/2019/03/Add_New_Page_course-grid.png)Add new page

### Template

This set of options allows you to customize how your course grid is rendered and formatted on the page. You can select different skins, card styles, and choose the number of columns on each grid.

![Add new page Course Grid template](https://learndash.com/support/wp-content/uploads/2019/03/Add_New_Page_course-grid-template.png)Add new page Course Grid template

#### Skin

With Course Grid 2.0 comes the introduction of different “Skins” to the course grid. You are no longer stuck with just a simple grid style, here you can select:

- Grid
- Masonry
- List

**NOTE**: You can also implement your own “Skin” by modifying the Child Themes. Check out our [Course Grid 2.0 templating guide](https://learndash.com/support/docs/guides/course-grid-2-0-templating/) to learn how.

#### Card

This setting allows you to choose between the different pre-made layouts for each type of skin. Pick one to your liking.

#### Columns

This setting allows you to customize the number of columns your course grid will display the cards in. The default is 3.

#### Min Column Width

This setting allows you to customize the minimum column width of each of the columns. If the column width reaches a value lower than this, the grid columns number will automatically be adjusted on display.

### Query

This set of options allows you to customize which post types and how many are shown on each page of the course grid. This also allows you to customize which order you want them to be displayed.

![](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-grid-query-settings.png)

#### Post Type

With Course Grid 2.0, you can now select a variety of post types to be displayed on the course grid. You have a vast set of options available that depends on your website, as long as the post type can be queried publicly. If not, the Course Grid will not be able to show the posts.

#### Posts Per Page

This setting allows you to indicate how many posts are displayed per page on the Course Grid. You can further customize the pagination options with its own set of options below.

#### Order By

This setting allows you to choose by which order you want the items to appear on the page. You can select by:

- ID
- Title
- Published Date
- Modified Date
- Author
- Menu Order

#### Order

This allows you to choose whether to display the cards in Ascending or Descending order based on the  Order By ” setting above.

#### Taxonomies

Used to display a listing of content based upon configured taxonomies like categories and tags. You can use 
```
ld_course_tag
```

 and 
```
ld_course_category
```

 taxonomies for filtering. For more information about LearnDash categories and tags, please visit this [Knowledge Base document](https://learndash.com/support/docs/core/courses/course-settings/#course-taxonomies-categories-tags).

#### Enrollment Status

Only available when using Courses/Groups as the post type, you can filter the results by whether the user is currently enrolled into the course/group.

### Elements

This next tab allows you to further customize your Course Grid tabs by adding or removing certain elements such as the ribbon, title, etc. These options were previously available as shortcode options on the original Course Grid add-on.

![Course Grid Elements](https://learndash.com/support/wp-content/uploads/2019/03/Add_New_Page_course-grid-elements.png)Course Grid Elements

#### Thumbnail

This setting gives you the option to show or hide the thumbnails of each card. Do note that the thumbnails are based on the featured images on the original Course, Topic, Lesson, etc.

#### Featured Image

The featured image is a standard feature of WordPress. The LearnDash Course Grid add-on will use this image, if youve uploaded one. To set a featured image for your course:

1. Go to LearnDash LMS > Courses
2. Click on the course youd like to add an image to
3. In the sidebar, look for an area titled Featured Image
4. Click Set featured image
5. Choose your image from the Media Library, or upload a new one
6. Click the Select button at the bottom
7. Dont forget to click Update to save the changes

![https://learndash.com/support/wp-content/uploads/2019/04/learndash-set-featured-image-animation.gif](https://learndash.com/support/wp-content/uploads/2019/04/learndash-set-featured-image-animation.gif)

**NOTE**: Most WordPress themes will also display the featured image near the top of your course page. This is solely dependent on your theme, and out of LearnDash’s control. Please contact your theme developer if you have questions regarding images on your individual course page.

#### Thumbnail Size

This setting allows you to choose the thumbnail size of your Course Grid card. The preset sizes are dependent on the available sizes on your WordPress site.

#### Ribbon

A course ribbon is a small piece of information displayed in the top-corner of each course in your grid. Its displayed over top of all other content, and the text it displays depends on

- The specific user viewing your grid, and their enrollment status
- The course access mode for that particular course

If the user viewing the course grid has completed the course, then the ribbon will say Completed.

If the user is enrolled in the course, but has not completed it,then the ribbon will say Enrolled.

If the user is NOT enrolled in the course

- And the Access Mode is set to Open or Closed (no amount entered under the Course Price field), then no ribbon will be displayed.
- And the Access Mode is set to Free, then the word Free will be displayed.
- And the Access Mode is set to Buy Now, Recurring, or Closed, the amount entered in the Course Price field will be displayed.

If no amount is entered in the Course Price field, then no ribbon will be displayed.

See below for [how to customize the ribbon text](https://learndash.com/support/docs/add-ons/course-grid/#ribbon_text).

#### Content

Content includes elements in the area outside of the thumbnail such as:

- Total Students
- Total Quizzes
- Total Lessons
- Title
- Author
- and others…

#### Title

This setting allows you to choose whether or not to show the title of the course.

#### Clickable Title

This setting allows you to choose whether or not to make the title of the course clickable. If you enable this setting the user will be redirected to the respective course page.

#### Description

This setting allows you to choose whether or not to show the description of the course. See below on how to customize the course description.

#### Meta

This setting allows you to choose whether or not to show the meta description of each course on the grid.

#### Button

By default, all courses in your grid will include a CTA button that says, See More. This language remains the same for enrolled users, non-enrolled users, and completed courses.

See below for [how to customize the button text](https://learndash.com/support/docs/add-ons/course-grid/#custom-button-text) on a course-by-course basis.

#### Pagination

This setting allows you to choose the different pagination options for the course grid. If you have more courses, lessons, topics, etc. than you allow to be shown on the “Posts Per Page” option above, then you must select a pagination option to display the rest of the items.

You can choose from:

- Load More Button
- Infinite Scrolling
- Disable

#### Progress Bar

This setting is only available for LearnDash courses and groups. This allows you to choose whether or not to display the progress bar, a visual indicator of a students current progress in each course.

**NOTE**: A progress bar is only shown on courses in which the user is currently enrolled or has completed.

#### Filter

With the launch of Course Grid 2.0, this option was added to allow you to add a filter option on your course grid for your users. If this option is selected the below “Filter” settings are shown and are available for you to customize.

If this option is enabled, a  Filter  button will show on the top-right corner of the user’s screen.

### Filter

This tab allows you to customize the “Filter” option on your Course Grid. You will be able to select different categories that the users can use to filter their courses.

![Course Grid Filter](https://learndash.com/support/wp-content/uploads/2019/03/Add_New_Page_course-grid-filter.png)Course Grid Filter

#### Search

This setting lets you choose whether or not to have a search option on your filter options. If this is enabled, the user will see a search box where they can input keywords in order to filter out your courses on the grid.

#### Taxonomies

This setting allows you to choose different taxonomies that your users can use to filter out your quizzes. As long as these taxonomies are public-facing, then you’ll be able to select them.

To select multiple taxonomies, hold the ctrl or cmd button on your computers.

#### Price

This setting allows you to set the minimum and maximum prices that users can use to filter your courses. If you leave them blank, it will default to the minimum and maximum price of your courses.

### Styles

This tab allows you to further customize your Course Grid by letting you choose from a myriad of style options including changing the fonts and colors of both the heading and the description.

![Course Grid Style](https://learndash.com/support/wp-content/uploads/2019/03/Add_New_Page_style.png)Course Grid Style

#### Equal Grid Height

This setting allows you to choose whether or not to set the grid height to be equal. This will change the layout of your Course Grid based on your selected “Skin” above.

#### Heading

These set of options allows you to change the heading style for your course grid. You can customize the:

- Heading Font family
- Heading Font size
- Heading Font color
- Heading Background color

The color picker is also readily available for you to use when picking colors.

#### Elements

These set of options allows you to pick and change the colors of certain elements in the course grid. These include:

- Ribbon font color
- Ribbon background color
- Icon color
- Icon background color

## Options (Shortcode Parameters Course Grid 1.0)

The following options are available to customize the output of your LearnDash course grid using a shortcode. Multiple parameters can be used at the same time, in any order. Mix and match them to create the perfect course grid for your site. These, and more, parameters and options are available on the blocks mentioned above.

**NOTE**: Most of these shortcodes are not available nor cannot be used with Course Grid 2.0. Please see the note above.

| Feature | Description | Parameter | PossibleValues |
| --- | --- | --- | --- |
| Grid Columns | Number of columns your grid will have on large screens. | col="4" | 1, 2, 3, 4, 5, 6 |
| Progress Bar | A visual indicator of a student’s current progress in each course. | progress_bar="true" | true |
| Number of Courses | How many courses will be displayed in your grid. | num="10" | any integer |
| Course Sorting | How to sort the courses in your grid. | orderby="title" | titleIDdatemodifiedmenu_orderrand…and more |
| Order of Sorting | The sort order for the “orderby” parameter. | order="ASC" | ASCDESC |
| Hide Content | Hide the title, description & button. | show_content="false" | false |
| Hide Thumbnail | Hide the thumbnail image. | show_thumbnail="false" | false |
| My Courses | Shows only the courses in which the current user is enrolled. | mycourses="true" | true |
| Not-Enrolled Courses | Shows only the courses in which the current user is NOT enrolled. | mycourses="not-enrolled" | not-enrolledenrolled |
| Course Status | Shows only the courses in which the current user is enrolled AND completed. NOTE: The mycourses parameter must be set to enrolled for it to show. | status="completed" | completedin_progressnot_started |
| If using LearnDash categories & tags… |
| Course Category ID | Shows only courses in the specified LearnDash category. Use the category ID. | course_cat="10" | any course category ID |
| Course Category Name/Slug | Shows only courses in the specified LearnDash category. Use the category slug. | course_category_name="math" | any course category slug |
| Course Tag ID | Shows only courses tagged with the specified LearnDash tag. Use the tag ID. | course_tag_id="10" | any course tag ID |
| Course Tag Name/Slug | Shows only courses tagged with the specified LearnDash tag. Use the tag slug. | course_tag="math" | any course tag slug |
| Course Category Selector | Adds a dropdown menu to filter the course grid by course category. | course_categoryselector="true" | true |
| If using WordPress categories & tags… |
| WordPress Category ID | Shows only courses in the specified WordPress category. Use the category ID. | cat="10" | any WordPress category ID |
| WordPress Category Name/Slug | Shows only courses in the specified WordPress category. Use the category slug. | category_name="math" | any WordPress category slug |
| WordPress Tag ID | Shows only courses tagged with the specified WordPress tag. Use the tag ID. | tag_id="10" | any WordPress tag ID |
| WordPress Tag Name/Slug | Shows only courses tagged with the specified WordPress tag. Use the tag slug. | tag="math" | any WordPress tag slug |
| WordPress Category Selector | Adds a dropdown menu to filter the course grid by WordPress category. | categoryselector="true" | true |

### Columns

Columns determine the number of columns that will be used to display your courses on larger screens. On smaller screens and mobile devices, fewer columns will be used. This is scaled automatically for you. Default is 3 columns. Maximum is 6 columns.

Example using 4 columns:

[ld_course_list col=”4″]
```
[ld_course_list col="4"]
```

### Progress Bar

By default, no progress bar is shown. To add a progress bar to the courses in your grid:

[ld_course_list progress_bar=”true”]
```
[ld_course_list progress_bar="true"]
```

**NOTE**: A progress bar is only shown on courses in which the user is currently enrolled, or has completed.

![LearnDash course grid with the 3.0 theme applied](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-grid-frontend-example-ld3-theme.jpg)Example showing the course progress in the LearnDash 3.0 theme.

### Number of Courses

This option lets you limit the number of courses shown on the page. If there are more courses than the number you specify, pagination links are shown below the grid, allowing the user to navigate all courses. Default is all courses.

Example showing only 2 courses:

[ld_course_list num=”2″]
```
[ld_course_list num="2"]
```

### Sort Order

You can customize how your courses are sorted within your grid using a combination of the 
```
orderby
```

 and 
```
order
```

 parameters. 
```
orderby
```

 tells LearnDash which piece of information you’d like to sort by, and 
```
order
```

 determines which direction the sort should occur (i.e. forwards or backwards).

Example sorting by the original publish date, most recent to oldest:

[ld_course_list orderby=”date” order=”DESC”]
```
[ld_course_list orderby="date" order="DESC"]
```

See the options table above for a full list of sorting parameters.

### Hide Content or Image

You can choose to show or hide different content for each course in your grid. You have two options:

- ```
show_content="false"
```

 will hide the course title, short description and CTA button
- ```
show_thumbnail="false"
```

 will hide the course image

Example hiding the content, only displaying the course image:

[ld_course_list show_content=”false”]
```
[ld_course_list show_content="false"]
```

### Enrolled or Not-Enrolled Courses

If you’re looking to create a unique profile page for registered users, or a sales page to promote courses to non-enrollees, these options are for you.

- ```
mycourses="true"
```

 will only display the courses in which a user is enrolled
- ```
mycourses="not-enrolled"
```

 will only display the course in which a user is NOT enrolled

Example showing only a user’s registered courses:

[ld_course_list mycourses=”true”]
```
[ld_course_list mycourses="true"]
```

### Dropdown Menu Filter

If you’re using categories to help organize your courses, you can add a dropdown menu to the top of your grid that will filter the courses based on their category. The user can open the dropdown menu and select a category.

If you’re using LearnDash’s categories:

[ld_course_list course_categoryselector=”true”]
```
[ld_course_list course_categoryselector="true"]
```

If you’re using the default WordPress categories:

[ld_course_list categoryselector=”true”]
```
[ld_course_list categoryselector="true"]
```

See below for [more complex examples](#shortcode_examples) on how to combine multiple parameters to customize your course grid.

## Featured Image

The featured image is a standard feature of WordPress. The LearnDash Course Grid add-on will use this image, if you’ve uploaded one. To set a featured image for your course:

1. Navigate to LearnDash LMS > Courses
2. Click on the course you’d like to add an image to
3. In the sidebar, look for an area titled Featured Image
4. Click  Set featured image
5. Choose your image from the Media Library, or upload a new one
6. Click the Select button at the bottom
7. Don’t forget to click Update to save the changes

![LearnDash set featured image](https://learndash.com/support/wp-content/uploads/2019/04/learndash-set-featured-image-animation.gif)

You also have the option to hide the featured image in your course grid. Use the 
```
show_thumbnail
```

 parameter, like this:

[ld_course_list show_thumbnail=”false”]
```
[ld_course_list show_thumbnail="false"]
```

**NOTE**: Most WordPress themes will also display the featured image near the top of your course page. This is solely dependent on your theme, and out of LearnDash’s control. Please contact your theme developer if you have questions regarding images on your individual course page.

## Ribbon

A course ribbon is a small piece of information displayed in the top-corner of each course in your grid. It’s displayed over top of all other content, and the text it displays depends on…

- the specific user viewing your grid, and their enrollment status
- the course access mode for that particular course

If the user viewing the course grid has completed the course, then the ribbon will say Completed.

If the user is enrolled in the course, but has not completed it, then the ribbon will say Enrolled.

**If the user is NOT enrolled in the course…**

- And the Access Mode is set to Open or Closed, then no ribbon will be displayed.
- And the Access Mode is set to  Free,  then the word Free will be displayed.
- And the Access Mode is set to Buy Now or Recurring, the amount entered in the Course Price field will be displayed.

If no amount is entered in the Course Price field, then no ribbon will be displayed.

See below for [how to customize the ribbon text](#ribbon_text).

## Call-to-Action Button

By default, all courses in your grid will include a CTA button that says, “See More…”. This language remains the same for enrolled users, non-enrolled users, and completed courses.

See below for [how to customize the button text](#custom-button-text) on a course-by-course basis.

## Additional Grid Information

The Course Grid add-on allows you to add a few additional pieces of information about your courses that you present to your users in the grid. All of them are optional**.**

1. Go to LearnDash LMS > Courses
2. Click on the course you’d like to edit
3. Click on the Settings tab
4. Scroll down until you see Course Grid Settings
5. Enter as much or as little information as you’d like
6. Be sure to click Update when you’re finished

![Course Grid additional Info](https://learndash.com/support/wp-content/uploads/2019/03/Add_New_Page_additional-info-course-grid.png)

### Short Description

The short description is a brief explanation of the course. It will be displayed immediately below the course title. We recommend no more than 2 sentences and somewhere around 15-25 words.

This works the same for lesson, topic and quiz grids, too.

### Duration

Indicate the number of hour(s) and minute(s) it takes for this course to be completed. This setting does not enforce a time limit or minimum amount of time the user can spend on a course. It just shows the ideal length of time that should be spent on the course.

### Custom Button Text

By default, each course in your grid will include a button that says “See More…”. This button links to your course. If you’d like to change the text on the button to something other than “See More…”, you can do so.

This works the same for lesson, topic and quiz grids, too.

### Ribbon Text

This field allows you to override the default text displayed on the ribbon. Keep in mind, if you use custom ribbon text, it will apply to all user**s**, whether or not they are enrolled, and whether or not they have completed the course.

Ribbons are only displayed on course grids, not on lesson, topic or quiz grids.

### Video Preview

The video preview option allows you to embed a video instead of displaying a course image. This is great for providing a quick introduction to your course, especially if you’re trying to entice users to sign up for or purchase the course.

![LearnDash course grid, enable video preview settings](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-grid-enable-video-preview-settings.jpg)

1. Check the box next to Enable Video Preview
2. Add a Video URL or Embed Code

Paste the direct video URL (or embed code) of the video you want to use in the grid. If you have a video file URL, then you can use the video tag to embed your video like this:

<video controls><source src=”video-file.mp4″ type=”video/mp4″></video>
```
<video controls><source src="video-file.mp4" type="video/mp4"></video>
```

This works the same for lesson, topic and quiz grids, too.

## Lessons, Topics & Quizzes

You can also use the Course Grid add-on to display lessons, topics and/or quizzes in a grid format. Most of the same customization parameters apply, like:

number of columns, sorting and filtering, show/hide image and/or short description, video preview, button text

The following course grid features do not apply when displaying lessons, topics or quizzes in a grid:

- Enrolled courses only
- The progress bar
- The price ribbon

Let’s take a look at how to display each type of content in a grid.

### Lessons

To display a lesson grid, use the following shortcode:

[ld_lesson_list]
```
[ld_lesson_list]
```

To show the lessons in a particular course only, use the 
```
course_id
```

 parameter (not required when using the shortcode on a course page):

[ld_lesson_list course_id=”123″]
```
[ld_lesson_list course_id="123"]
```

Change 
```
123
```

 to the ID of the course in which you want to display lessons.

### Topics

To display a topic grid, use the following shortcode:

[ld_topic_list]
```
[ld_topic_list]
```

To show the topics in a particular course only, use the 
```
course_id
```

 parameter (not required when using the shortcode on a course page):

[ld_topic_list course_id=”123″]
```
[ld_topic_list course_id="123"]
```

Change 
```
123
```

 to the ID of the course in which you want to display topics.

**NOT**E: You cannot filter topics by lesson, only by course.

### Quizzes

To display a grid of quizzes, use the following shortcode:

[ld_quiz_list]
```
[ld_quiz_list]
```

To show the quizzes in a particular course only, use the 
```
course_id
```

 parameter (not required when using the shortcode on a course page):

[ld_quiz_list course_id=”123″]
```
[ld_quiz_list course_id="123"]
```

Change 
```
123
```

 to the ID of the course in which you want to display quizzes.

**NOTE**: You cannot filter quizzes by lesson or topic, only by course. All quizzes assigned at any point during the course (lesson quizzes, topic quizzes, final course quizzes) will be displayed.

## Shortcode Examples

Here are some examples you can use when building out a grid on your site:

Display a progress bar for each course:

[ld_course_list progress_bar=”true”]
```
[ld_course_list progress_bar="true"]
```

Display up to 8 courses in 4 columns (4×2 grid):

[ld_course_list num=”8″ col=”4″]
```
[ld_course_list num="8" col="4"]
```

Display all courses and sort them in alphabetical order, by their title:

[ld_course_list orderby=”title” order=”ASC”]
```
[ld_course_list orderby="title" order="ASC"]
```

Display all courses and order them by the most recently modified course first:

[ld_course_list orderby=”modified” order=”DESC”]
```
[ld_course_list orderby="modified" order="DESC"]
```

A few notes about sort order:

- When ascending (ASC) is chosen for 
```
orderby="title"
```

, your courses would be displayed in alphabetical order from A-Z.
- When using dates (
```
date
```

&
```
modified
```

), ascending will show the oldest content first, while descending will show the most recent content first.
- For
```
ID
```

&
```
menu_order
```

, ascending will show the lowest number first (i.e. 1), while descending will show the highest number first.

Display only the courses that a user is enrolled in:

[ld_course_list mycourses=”true”]
```
[ld_course_list mycourses="true"]
```

Display only the courses that a user is enrolled in, and sort randomly:

[ld_course_list mycourses=”true” orderby=”rand”]
```
[ld_course_list mycourses="true" orderby="rand"]
```

Display a user’s enrolled courses, with a progress bar, and sort by oldest to newest (based on original publish date):

[ld_course_list mycourses=”true” progress_bar=”true” orderby=”date” order=”ASC”]
```
[ld_course_list mycourses="true" progress_bar="true" orderby="date" order="ASC"]
```

Display courses in which the user is NOT enrolled, and only show the featured image (hide the title, button and description):

[ld_course_list mycourses=”not-enrolled” show_content=”false”]
```
[ld_course_list mycourses="not-enrolled" show_content="false"]
```

Display all courses and hide the course image (only show title, button and short description):

[ld_course_list show_thumbnail=”false”]
```
[ld_course_list show_thumbnail="false"]
```

Display 2 courses, in a 2-column grid, with a LearnDash category selector filter:

[ld_course_list num=”2″ col=”2″ course_categoryselector=”true”]
```
[ld_course_list num="2" col="2" course_categoryselector="true"]
```

Display all lessons in the course with an ID of 
```
7
```

, and sort by their order in the course builder:

[ld_lesson_list course_id=”7″ orderby=”menu_order” order=”ASC”]
```
[ld_lesson_list course_id="7" orderby="menu_order" order="ASC"]
```

These are only *some* of the ways you can use the shortcode to customize your grid. Feel free to experiment with your own combination of parameters to create exactly the type of grid you want.

---

## Courses

**Source:** [https://learndash.com/support/kb/core/courses/courses/](https://learndash.com/support/kb/core/courses/courses/)

Courses are the foundation of any learning experience in LearnDash. They define the structure of the curriculum, control learner access, and determine how content is delivered and completed. This section introduces the core tools and settings available for building, managing, and optimizing courses in LearnDash.

## Global Course Settings

Global Course Settings apply site-wide defaults to all courses. These settings help maintain consistency across courses while reducing repetitive configuration.

Global settings can be used to control:

- Default course behavior
- Shared display options
- Common progression rules

## Shared Course Steps

Shared Course Steps allow lessons, topics, and quizzes to be reused across multiple courses.

This feature supports:

- Consistent learning experiences across programs
- Faster course creation
- Easier content updates when shared steps are modified

## The Course Builder

The Course Builder provides a visual interface for organizing course content.

Using the Course Builder, administrators can:

- Add new lessons, topics, and quizzes
- Reorder course steps
- Remove or edit existing content
- Design a structured learning path for learners

## Display and Content Settings

Display and Content Settings control how course content appears to learners.

These settings allow course creators to:

- Add supplemental materials
- Assign certificates
- Control visibility of course elements
- Enhance engagement with structured content presentation

## Configure Course Access

Course Access settings determine how learners enroll in and access a course.

Common access options include:

- Open access
- Login-required access
- Paid enrollment
- Prerequisites and enrollment rules

These settings help guide learners through a defined progression path.

## Course Progression Options

Course Progression options control how learners move through course content.

Progression rules can be used to:

- Require step completion before advancing
- Allow self-paced navigation
- Enforce linear or flexible learning paths

## MCP Support (LearnDash 5.0)

LearnDash 5.0 introduces MCP support for course management.

With MCP, administrators can use AI tools to:

- Create, update, or delete courses
- Apply bulk settings and structural changes
- Manage course data through the REST API v2

MCP operates alongside manual course-building tools and respects LearnDash permissions.

## Course Page

Each course includes a dedicated course page that introduces the course to learners.

Course page settings include:

- Course title and description
- Featured image
- URL and permalink structure

These elements help inform learners and set expectations before enrollment.

## Next Steps

After creating a course, additional content can be added using lessons, topics, and quizzes.

See the following documentation to complete course setup:

- Lessons
- Topics
- Quizzes

---

