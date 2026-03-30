# Bbpress Add On

*Category from LearnDash documentation*

---

## bbPress Integration

**Source:** [https://learndash.com/support/kb/add-ons/bbpress-add-on/bbpress/](https://learndash.com/support/kb/add-ons/bbpress-add-on/bbpress/)

The LearnDash bbPress integration creates the ability for you to link [bbPress forums](https://wordpress.org/plugins/bbpress/) to LearnDash courses. When you associate a forum with a course, any student who has access to that course will be able to post in the corresponding forum. There are a few options which we’ll discuss below.

**NOTE**: You need to have both the LearnDash and bbPress plugins installed and activated before you can activate the “bbPress for LearnDash” plugin.

## Installation

### Option 1: Add-ons Menu (requires an active LearnDash license)

In your WordPress admin area, go to LearnDash LMS > Add-Ons and locate the bbPress for LearnDash add-on. Click Now and once the installation is complete, click the Activate plugin button.

![bbPress LearnDash integration plugin card](https://learndash.com/support/wp-content/uploads/2019/03/bbpress-learndash-integration-plugin-card.jpg)

### Option 2: Manual Upload

[Download the plugin fil](https://account.learndash.com/plugins/)[e](https://account.learndash.com/plugins/) (remember that you must be [logged](https://account.learndash.com/)[in](https://account.learndash.com/) to download). In your WordPress admin dashboard go to Plugins > Add New and then Click to upload the Gravity Forms for LearnDash plugin. You’ll need to browse for the plugin .zip that you downloaded previously. Once you find it (it may be in your computer’s Downloads folder), click Open, Install Now and finally, click the Activate Plugin button.

## How it Works

Before you can associate a forum with a course, you’ll need to create a new forum in bbPress. If you’ve already done this, you can skip this step.

We’re also assuming you have already created a LearnDash course. You will need at least one course to set up this integration.

### Create a Forum

1. Navigate to Forums > New Forum
2. Give your forum a title
3. *(optional)* Write an intro message and adjust the forum attributes (type, status, visibility, etc.)

### Associate Forums with Courses and Groups

Now it’s time to associate a forum with a course and/or a group.

1. On the Edit Forum page, scroll down to the LearnDash bbPress Settings box
2. Under Associated Course(s), click on a course to associate it with that forum. You can also associate it with a group under the Associated Group(s) section

.kadence-column736_78990b-b4 > .kt-inside-inner-col,.kadence-column736_78990b-b4 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column736_78990b-b4 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column736_78990b-b4 > .kt-inside-inner-col{flex-direction:column;}.kadence-column736_78990b-b4 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column736_78990b-b4 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column736_78990b-b4{position:relative;}@media all and (max-width: 1024px){.kadence-column736_78990b-b4 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column736_78990b-b4 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
**NOTE:** You may select one or more courses/groups. Hold down the CTRL key (CMD on Mac) to select multiple courses.

1. If you select multiple courses/groups by mistake, you can use the “Clear All” button to start over

![](https://learndash.com/support/wp-content/uploads/2019/03/Associated-Groups-and-Courses_ProPanel.png)

Once you’ve selected a course(s) or group(s), be sure to publish or update your forum.

Now any user who has access to that course/group will also have access to the forum. If a user is not part of the course/group, they will not be allowed to view or post in the forum.

That’s all that’s needed to set up the integration, however, let’s take a look at a few additional options.

### Additional Options

#### Post Limit Access

This only applies if you’ve associated more than one course with the forum. There are two ways you can decide who has access to the forum:

- **All (default):** Users must have access to all selected courses in order to post in the forum
- **Any:** Users only need to have access to one of the selected courses in order to post in the forum

![bbPress LearnDash, post limit access option](https://learndash.com/support/wp-content/uploads/2019/03/bbpress-learndash-post-limit-access.jpg)

#### Message Shown to Users with No Access

This is where you can customize the message shown to users who do not have access to the forum. By default, the message reads:

> This forum is restricted to members of the associated course(s).

You can customize this message to include a link to purchase the course, or any other message you’d like. Basic HTML is supported.

#### Forum View

If you’d like for non-enrolled users to view forum threads and topics, but not be able to post replies, check this box.

Enabling this option will disregard the message above. Non-enrolled users will see the forum and all of it’s topics, but will not be able to post or reply.

## Adding Forums to Courses, Pages, and Posts

To add and display forums to Courses, Pages, and Posts, you can use this shortcode: 
```
[bbp-forum-index]
```

. If you want to learn more about shortcodes from bbPress, you can check out [their article here](https://codex.bbpress.org/features/shortcodes/) for the complete list.

## Course Forum Widget

The bbPress LearnDash integration also adds a Course Forum widget that you can use in any sidebar.

![bbPress LearnDash course forum widget](https://learndash.com/support/wp-content/uploads/2019/03/bbpress-learndash-course-forum-widget.jpg)

The widget will automatically detect which course is currently being viewed, and display a link to the associated forum for that course.

- A forum link is also displayed when viewing any lesson, topic or quiz within the associated course
- If no forum has been associated with the course, no link will be displayed

### Add a Course Forum Widget

1. Navigate to Appearance > Widgets, or click on the Widgets panel in the WordPress Customizer
2. Add the Course Forum widget to any sidebar location
3. *(optional)* Give the widget a title
4. Click the Save button

---

