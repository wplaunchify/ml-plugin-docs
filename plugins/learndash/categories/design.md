# Design

*Category from LearnDash documentation*

---

## Widgets

**Source:** [https://learndash.com/support/kb/core/design/widgets/](https://learndash.com/support/kb/core/design/widgets/)

Similar to [blocks and shortcodes](https://learndash.com/support/docs/core/shortcodes-blocks/), LearnDash widgets provide another way to add dynamic content to your LearnDash site. This article will explain the various ways you can insert widgets, as well as what each LearnDash widget displays.

## How to Insert LearnDash Widgets

In WordPress, there are a few ways to add widgets to your site. While LearnDash provides several widgets for you to use, please keep in mind that your theme determines WHERE they can be inserted.

In the following examples, your WordPress admin screens might look slightly different, depending on which theme you’re using and the widgetized areas they have made available to you.

### The Customizer

The WordPress Customizer is the preferred way to add LearnDash widgets to your site. You’ll be able to see a preview of the widgets before you make them live.

![Add LearnDash widgets in Customizer](https://learndash.com/support/wp-content/uploads/2019/05/learndash-add-widgets-customizer-animation.gif)

1. Navigate to A**ppearance > Customize**
2. Click the Widgets panel
3. Click on the name of the widgetized area in which you’d like to add a widget
4. Click the + **Add a Widget**button
5. Search for a widget (try “LearnDash” or “course” to easily find LearnDash widgets)
6. Click on the widget you’d like to add
7. Add a title and/or set widget options
8. Be sure to click Publish at the top when you’re finished

### Appearance > Widgets

The other way to add widgets is directly from the widgets screen. You won’t see a preview of your widgets this way, but all the same widgets are available to you, and they have the same options.

![LearnDash widgets admin screen](https://learndash.com/support/wp-content/uploads/2019/05/learndash-widgets-screen-admin.jpg)

1. Navigate to **Appearance > Widgets**
2. Locate the widgetized area in which you’d like to add a widget
3. Then look for the widget you want to add
4. Click, hold & drag the widget inside the widgetized area
5. Add a title and/or set widget options
6. Click the Save button at the bottom

### Page Builders

![ LearnDash Elementor Widgets](https://learndash.com/support/wp-content/uploads/2019/05/learndash-elementor-widgets.jpg)

Some page builders also make WordPress widgets available to use within the page-building interface, and this includes all LearnDash widgets. The free version of Elementor is one such example, but there could be others. Check with your page builder’s documentation to see if they allow you to insert WordPress widgets.

**DEVELOPERS**
You can also add widgets directly to theme/template files using [the_widget() function](https://developer.wordpress.org/reference/functions/the_widget/)

The remainder of this article will discuss each LearnDash widget, what information it displays, and its optional settings.

## Course Navigation

![LearnDash course navigation widget](https://learndash.com/support/wp-content/uploads/2019/05/learndash-course-navigation-widget-frontend-example.jpg)

The Course Navigation widget automatically detects which course is currently being viewed, and it displays all the Sections, Lessons, Topics, and Quizzes associated with that course, along with status indicators for the current user.

By default, topics are hidden within an expandable container, but can be revealed for each lesson or globally using the Expand All link at the top.

The Course Navigation widget displays:

- Link to go back to the course page
- **Expand All** link that reveals all Topics and Quizzes
- All Sections, Lessons, Topics, and Quizzes related to the current course being viewed
- The number of Topics and/or Quizzes within a Lesson
- Status indicators for whether or not a course step has been completed

The following options are available:

- Show/Hide course quizzes
- Show/Hide lesson quizzes
- Show/Hide topic quizzes

**NOTE**: This widget will only appear on Course, Lesson, Topic and Quiz pages.

## Course Progress Bar

![LearnDash course progress, frontend example](https://learndash.com/support/wp-content/uploads/2018/09/learndash-course-progress-frontend-example.jpg)

The Course Progress Bar widget displays three pieces of information, all related to the current user and the current course being viewed (which is automatically detected by LearnDash).

- A horizontal progress bar, indicating the user’s progress in the course
- The percentage of the course that has been completed thus far
- The date of the user’s last activity

**NOTE**: This widget will only appear on course, lesson, topic & quiz pages.

## User Status

**NOTE**: This widget was introduced in LearnDash 3.0, and requires the LearnDash 3.0 theme. It is not available when using the “Legacy” theme. [Learn more about LearnDash 3.0 vs. Legacy](https://learndash.com/support/docs/core/settings/general-settings/#design_content_elements).

![LearnDash user status widget](https://learndash.com/support/wp-content/uploads/2019/05/learndash-user-status-frontend-example.jpg)

The User Status widget displays the following information:

- The courses in which the user is registered
- A status indicator for each course, along with completion percentage & number of steps completed
- The user’s enrollment date, if applicable

The following options are available:

- Number of courses shown per page (before pagination appears)
- Course order and order by options

**NOTE**: This widget is only displayed to logged-in users.

## Course Information

The Course Information widget displays the following information:

- The courses in which the user is registered
- Course progress details (not started, in progress, completed, as well as the number of steps completed)
- Quiz information (quiz title, status, score, points awarded, date taken
- A list of the quizzes the user has taken

The following options are available:

- Show/Hide course thumbnail
- Number of courses shown per page (before pagination appears)
- Course order & order by options
- Number of courses shown per page, in the progress details section
- Course order & order by options for progress details section
- Number of quizzes shown per page (before pagination appears)
- Quiz order & order by options

**NOTE**: This widget is only displayed to logged-in users.

## Course

The [Course](https://learndash.com/support/glossary/course/) widget simply displays a list of all the courses on your site. Only the [Course](https://learndash.com/support/glossary/course/) title is displayed, and there are no additional options. The list will be displayed on every page for all users, regardless of whether they are logged in to the site.

## Lesson

The Lesson widget simply displays a list of all the lessons for the current course that is being viewed. Only the lesson title is displayed (no status indicators), and there are no additional options. This list is only shown on course, lesson, topic & quiz pages, and will automatically detect the current course being viewed.

## Quiz

The Quiz widget simply displays a list of all the quizzes on your site, regardless of whether they are assigned to a [Course](https://learndash.com/support/glossary/course/), [Lesson](https://learndash.com/support/glossary/lesson/), or [Topic](https://learndash.com/support/glossary/topic/). Only the quiz title is displayed, and no additional options are available. The list will be shown on every page, to all users, regardless of whether or not they are logged in.

---

## Additional Resources

In addition to using widgets in the ways above, here are a few additional things you can try:

- Convert widgets into shortcodes using the [AMR Shortcode Any Widget plugin](https://wordpress.org/plugins/amr-shortcode-any-widget/)
- Create new widgetized areas for your theme using the [Content Aware Sidebars plugin](https://wordpress.org/plugins/content-aware-sidebars/)
- Customize your widget logic, design, visibility & more using the [Widget Options plugin](https://wordpress.org/plugins/widget-options/)

---

