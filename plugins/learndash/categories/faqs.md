# Faqs

*Category from LearnDash documentation*

---

## Your Add-Ons and Plugins are Officially Migrating to LearnDash FAQs

**Source:** [https://learndash.com/support/kb/resources/faqs/your-add-on-and-plugins-are-officially-migrating-to-learndash-faqs/](https://learndash.com/support/kb/resources/faqs/your-add-on-and-plugins-are-officially-migrating-to-learndash-faqs/)

The WordPress ecosystem is as dynamic as when it was first released. We have a multitude of plugins, themes, add-ons, widgets, etc., from a multitude of users and developers. It’s the symbiosis of having users need a particular function to having developers interested and motivated enough to make those functions possible and accessible. That’s the nature of being open-sourced, which WordPress is.

And LearnDash is a part of that ecosystem, and we try to make it a point to be able to provide our users with everything that they need to have a successful learning platform on their website. Even giving extended functionalities beyond our core plugin and installation by using add-ons.

With that said, we, and our parent company StellarWP might also acquire certain plugins and add-ons from other developers. Here’s a quick FAQ on what you should expect if your current plugins or add-ons officially migrate to LearnDash and becomes officially supported by LearnDash.

## What will happen to my account?

You can continue to use your LearnDash add-on as normal. No changes are being made to the functionality at this time.

## What will happen to my data?

Your data will be governed by the[Privacy Policy](https://www.learndash.com/privacy-policy/).

## Will your refund policy remain the same?

Your refund policy going forward will be governed by the LearnDash[Terms and Conditions](https://www.learndash.com/terms-and-conditions/).

## Will I still be able to access support for my add-on?

Support will be available through the original vendor unless otherwise directed until the transfer to learndash.com occurs. After the transition, support will continue through the[support docs](https://learndash.com/support/), and help desk tickets which you may open through[your customer account](https://support.learndash.com/contact-support).

## Are any add-on features being removed?

No. There are no immediate changes to add-on features.

## Will the add-on continue to receive updates?

Yes. updates and improvements will continue with LearnDash, only now there are additional resources committed to future development.

## Will prices go up?

At launch, some minor changes may occur to standardize plans, like shifting from a 5-license plan to a 10-license or adjusting unlimited install pricing. but that will be the exception, not the rule.

## Will my subscription renew at the end of my current subscription period?

Credit card transactions through Stripe, our payment gateway will continue. PayPal subscriptions will be in our e-commerce system but the payment itself will need to be reauthorized. Otherwise, the billing process will remain the same.

## I am an affiliate, what does this mean for me?

The affiliate program from the previous vendor will end at the time of transition unless otherwise directed. Affiliates may continue earning commissions by joining the[LearnDash affiliate program available here](https://www.learndash.com/affiliates/).

## What is happening to the add-on development team?

This will change from team to team based on individual situations. Your previous vendor will likely tell you their plans as they wind down their existing sales. Keep an eye on your inbox for important updates.

---

## Page Builders + LearnDash

**Source:** [https://learndash.com/support/kb/resources/faqs/page-builders-2/](https://learndash.com/support/kb/resources/faqs/page-builders-2/)

One of the most common set of questions our support team gets asked is how LearnDash works with page builders.

- Which page builder plugins are compatible with LearnDash?
- What’s the best page builder to use?
- How do I customize the layout of my LearnDash courses, lessons and topics with a page builder?
- Can I use a free page builder or do I need the pro version?

In this comprehensive guide, we’ll answer all of those questions, as well as walk you through exactly *how* to use specific page builders to best design your LearnDash courses. We’ll focus on three of the most popular WordPress page builders:

- [Elementor Pro](https://learndash.com/elementor)
- [Beaver Builder](https://www.wpbeaverbuilder.com/)
- [Divi](https://www.learndash.com/divi)

**NOTE**: While we can work with the limited features of the free version of these page builders, especially Elementor, there will be certain limitations to the functionality. If you’re experiencing problems or are not seeing any functionality that you need from the below documentation, it’s likely that you need to upgrade to the Pro version. Elementor Pro is recommended if you plan to integrate fully with LearnDash, along with the other pro versions of the other page builders.

Before we dive into the specifics of each, it’s important to understand what a page builder can and cannot do. We’ll also cover some basics that apply to how all page builders interface with LearnDash, no matter which one you choose to use.

**NOTE** This guide assumes you are using the [LearnDash 3.0 active template](https://learndash.com/support/docs/core/settings/general-settings/#active_template). With the exception of Elementor (which requires LearnDash 3.0), most of the concepts also apply to the Legacy template, but there could be some inconsistencies. We’ll also be using the new WordPress editor (aka: Gutenberg). Screenshots will look different if you’re using the Classic Editor plugin.

## How Page Builders Work

An entire book could be written on this topic, but that’s obviously not the focus of this article. However, there are a few basic things you should understand about how page builders work.

- Almost all page builders let you design the main content of a page, post, course, lesson or other custom post type. Essentially, the same content that you would add via the default WordPress editor.This does not include your site’s header, sidebars or footer.
- Most pro versions or premium page builders do let you design your site’s header, sidebars and footer. (Elementor Pro’s Theme Builder, Beaver Themer, etc.)
- All page builders come with their own set of elements that you can use to design and lay out your content (columns, headings, lists, tables, icons, photo galleries, etc.).
- These differ depending on the page builder you’re using, as well as the free vs pro version of that particular builder.

Keeping in mind the type of content a page builder has control over, let’s talk about how LearnDash content is added to your site’s pages.

## How LearnDash Adds Content to the Page

There are several ways LearnDash content gets added to a page. The differences are important to understand, as they directly apply to whether or not they can be controlled or modified via a page builder.

### Dynamic Content

Dynamic content refers to content that you, the site owner, does not directly add in the WordPress editor. Based on the type of page that a user is viewing (course vs. lesson vs. topic), as well as how that course is configured, LearnDash automatically adds content to the page.

Examples of dynamically added LearnDash content include, but are not limited to:

- **On a course page:** For non-enrolled users, the current status, price and get started sections at the top. For enrolled users, the date of last activity, progress bar and status indicator.
- **On a course page:** The course content list at the bottom, which contains all lessons, topics and quizzes assigned to that course
- **On a lesson page:** The list of topics assigned to that lesson
- **On lesson/topic pages:** The assignments area, which provides a way for the user to upload assignments, and lists all uploaded assignments
- **In Focus Mode:** The header, which includes a logo (optional), course progress, navigation buttons, and an avatar with dropdown menu
- **In Focus Mode:** The sidebar, which contains the course title and navigation links

.wp-block-kadence-iconlist.kt-svg-icon-list-items3167_05d7ed-ec:not(.this-stops-third-party-issues){margin-top:0px;margin-bottom:0px;}.wp-block-kadence-iconlist.kt-svg-icon-list-items3167_05d7ed-ec ul.kt-svg-icon-list:not(.this-prevents-issues):not(.this-stops-third-party-issues):not(.tijsloc){margin-top:var(--global-kb-spacing-lg, 3rem);margin-right:0px;margin-bottom:var(--global-kb-spacing-lg, 3rem);margin-left:0px;}.wp-block-kadence-iconlist.kt-svg-icon-list-items3167_05d7ed-ec ul.kt-svg-icon-list{grid-row-gap:18px;}.wp-block-kadence-iconlist.kt-svg-icon-list-items3167_05d7ed-ec .kb-svg-icon-wrap{font-size:27px;color:var(--global-palette1, #3182CE);}.wp-block-kadence-iconlist.kt-svg-icon-list-items3167_05d7ed-ec ul.kt-svg-icon-list .kt-svg-icon-list-item-wrap .kt-svg-icon-list-single{margin-right:18px;}.kt-svg-icon-list-items3167_05d7ed-ec ul.kt-svg-icon-list .kt-svg-icon-list-level-0 .kt-svg-icon-list-single svg{font-size:20px;}
- **You CAN**edit LearnDash dynamic content with Elementor (using our [compatibility integration](https://learndash.com/support/docs/add-ons/compatibility/#elementor_integration))
- **You cannot**edit LearnDash dynamic content with Divi
- **You cannot** edit LearnDash dynamic content with BeaverBuilder

**DEVELOPERS** If you’re comfortable with HTML and PHP, you can override LearnDash template files. This allows you to customize the dynamic content, as well as change where on the page it gets inserted. *Technical experience required.*

### Your Own Course, Lesson, Topic & Quiz Content

This refers to the content which you, the site owner, have direct control over. For all course, lesson, topic and quiz pages, you can freely add and edit whatever content you’d like.

If you’re using a page builder, you can design this content with your page builder of choice.

However, LearnDash determines *where on the page* it will go.

![Your custom content in LearnDash focus mode](https://learndash.com/support/wp-content/uploads/2019/09/learndash-page-builders-your-own-content-2.jpg)

For example, on a lesson page (using [Focus Mode](https://learndash.com/support/docs/guides/focus-mode/)), your own content will always be placed after the breadcrumbs and before the next and previous lesson buttons. If you’ve added materials to the lesson, two tabs will be inserted dynamically:

- Lesson
- Materials

Your own lesson content will be added directly below the “Lesson” tab.

Keep in mind, only your own content, added in this specific area, can be edited with a page builder. All other page elements in Focus Mode are controlled solely by LearnDash (or by using one of two popular third-party LearnDash design plugins, [Design Upgrade Pro](https://escapecreative.com/products/design-upgrade-learndash/) or [Visual Customizer](https://www.learndash.com/customizer)).

### LearnDash Blocks

LearnDash blocks provide a way for you to add specific LearnDash information to the main content area of a page, but only if you’re using the latest version of the WordPress editor (aka: Gutenberg). **Blocks only work within Gutenberg.**

A few examples of LearnDash blocks include:

- LearnDash Profile: displays a user’s profile and registered courses
- LearnDash Course List: displays a list of courses, or a grid if using the Course Grid add-on
- LearnDash Course Progress: displays a progress bar showing the user’s progress in that course

![List of LearnDash blocks in editor](https://learndash.com/support/wp-content/uploads/2018/09/learndash-blocks-list-in-editor.jpg)

When using a page builder, there is no way to add a LearnDash block to your page.

### LearnDash Shortcodes

Every LearnDash block has an accompanying shortcode. A shortcode is a simple piece of text that outputs specific LearnDash information. Many shortcodes come with parameters (or options) that let you customize which information is displayed. See our [complete guide on LearnDash shortcodes](https://learndash.com/support/docs/core/shortcodes-blocks/).

A shortcode looks like this:

```
[ld_profile]
```

This example outputs a user profile, complete with their profile image, name, some basic stats, and a list of courses they’re enrolled in, along with their progress in each.

The big advantage of shortcodes over blocks is that they can be used with all page builders.

Exactly how to use LearnDash shortcodes depends on which page builder you are using, which we’ll go into more detail below.

### LearnDash Widgets

Widgets are a core part of WordPress. They are pieces of functionality that can easily be added to any WordPress sidebar area. LearnDash provides a handful of widgets as well. LearnDash widgets provide the ability to add course navigation, course lists, and other various course elements. We have a [complete guide on widgets here](https://learndash.com/support/docs/core/widgets/).

The following page builders allow the use of LearnDash widgets:

**Elementor:** Free and Pro
**Beaver Builder:** Free and Pro
**Divi:** No (you can add entire sidebar areas but not individual widgets)

### An Exception: Focus Mode

Focus Mode works a bit differently than the rest of the pages on your site. The same ideas for how content is added still apply, but when Focus Mode is enabled, your site’s normal header, sidebar and footer are removed.

- The header is dynamic content, not editable with a page builder
- The sidebar course navigation is dynamic content, not editable with a page builder
- The page title, progress meter and breadcrumbs are dynamic content, not editable with a page builder
- The lesson, topic and quiz content (below the breadcrumbs) is your own content, and this **is** editable by a page builder

### Summary

- Dynamically added by LearnDash is **only**editable with Elementor (using our [compatibility add-on](https://learndash.com/support/docs/add-ons/compatibility/#elementor_integration))
- Focus Mode design elements cannot be edited with page builders
- All content added by you, via the WordPress editor, is editable with page builders
- When designing with a page builder, use LearnDash shortcodes and widgets (not blocks)

## Choosing a Theme

If you want to use a page builder with LearnDash, the theme you choose will have some impact on how you can design your content. Just about all WordPress themes work with page builders (and with LearnDash), but some work *better*.

In general, themes that explicitly provide page builder support will give you more control over the design of your courses. A few popular themes that have been specifically designed for use with page builders are:

- [Astra](https://support.learndash.com/astra-theme)
- [GeneratePress](http://bit.ly/1RPT586)
- [OceanWP](https://oceanwp.org/)

You don’t have to use one of these themes. All WordPress themes (built to the proper standards) work with LearnDash. We just wanted to highlight the ones that give you the most flexibility.

### General Page Layout

Using one of the aforementioned themes provides you with some advantages over other themes, particularly when it comes to using a page builder.

**NOTE**: These settings vary from theme to theme. Not all themes will have these options, but the themes mentioned above have some variation of them.

- **Content width:** Multiple options are typically available for narrow, wide, full-width and/or 100% stretched
- **Sidebars:** You can choose to enable/disable the sidebar on individual pages, or choose which side it should appear (right or left)
- **Disable page title:** This allows you to hide the default page title that is included at the top of the page, and add your own using a page builder
- **Disable featured image:** This allows you to hide the featured image that is usually displayed at the top of your course page

Here are a few examples:

![Astra page settings](https://learndash.com/support/wp-content/uploads/2019/09/astra-page-settings-gutenberg.jpg)

![GeneratePress page settings](https://learndash.com/support/wp-content/uploads/2019/09/generatepress-page-settings-gutenberg.jpg)

![OceanWP page settings](https://learndash.com/support/wp-content/uploads/2019/09/oceanwp-page-settings-gutenberg.jpg)

**NOTE**: If you want to control your layout & spacing completely with a page builder, you probably want to set your page settings to use no sidebar, and a content width of “full” or “stretched.”

Before we get into specific examples with each page builder, let’s make sure your builder is enabled for use with LearnDash.

## Enable Page Builder for LearnDash Post Types

Before you can use a page builder with LearnDash, you need to ensure that you’ve enabled the page builder to work with LearnDash custom post types. If you can’t find a way to edit a piece of LearnDash content using your page builder, try following these steps to enable it.

### Elementor

See [https://learndash.com/support/docs/add-ons/learndash-elementor-addon/](https://learndash.com/support/docs/add-ons/learndash-elementor-addon/) for more information regarding our LearnDash Elementor integration.

### Beaver Builder

1. Navigate to Settings > Beaver Builder
2. Click on  Post Types
3. Check the boxes for Courses, Lesson, Topics and Quizzes (or just select the ones you need)
4. Click  Save Post Types

![Enable LearnDash post types in Beaver Builder](https://learndash.com/support/wp-content/uploads/2019/09/beaver-builder-enable-learndash-post-types.jpg)

### Divi

By default, Divi should be enabled for courses & lessons, but if you want to use it with topics and/or quizzes, you’ll need to enable it.

1. Navigate to DIVI > Plugin Options
2. Click on the  Post Types Integration  tab
3. Click the post types for Topics and Quizzes (or just select the ones you need)
4. Click  Save Settings

![Enable LearnDash post types in Divi](https://learndash.com/support/wp-content/uploads/2019/09/divi-enable-learndash-post-types.jpg)

If using Divi as a theme, please follow the below steps:

- Navigate to **Divi > Theme Options**
- Click on the “Builder” Tab, then go to the “Post Types Integration” tab
- Click to enable the post types for Topics & Quizzes (or just select the ones you need)
- Click “Save Changes”

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcENtza38ePZSpHeU_4HHmoovZXGzwPqWuXGgo_xaiOs237rPCLQhuwGcGoniIGFamx1ofFtBEleEmdMYFmErglNv9mAC5i-zO8c7ollFN69FNMikQw7eSeC1XsKWE1E-ZcHfD3?key=V5tONnbYKhxQNIssE1mLTg)

## Using Shortcodes with Page Builders

Shortcodes are one of two ways you can add LearnDash-specific content using a page builder. Let’s go through exactly how to add use shortcodes in each page builder.

### Elementor

See [https://learndash.com/support/docs/add-ons/learndash-elementor-addon/](https://learndash.com/support/docs/add-ons/learndash-elementor-addon/) for more information regarding our LearnDash Elementor integration.

### Beaver Builder

When you go to edit a piece of LearnDash content, you’ll have a  Launch Beaver Builder  button where your content would normally appear. Click this button to open your content with Beaver Builder.

![Edit LearnDash content with Beaver Builder button](https://learndash.com/support/wp-content/uploads/2019/09/learndash-launch-beaver-builder-button.jpg)

You won’t see any dynamically added LearnDash content in your preview until you publish the course. The content you add will be placed in-between LearnDash’s dynamic content.

To add a shortcode to your page with Beaver Builder:

1. Locate the  HTML  module in the left panel
2. Click, hold and drag the module somewhere on the page
3. In the left panel, type any [LearnDash shortcode](https://learndash.com/support/docs/core/shortcodes-blocks/)
4. Click the  Save  button at the bottom to preview it
5. When you’re finished editing, be sure to click the  Done  button in the top-right corner, and then either  Publish  or  Update  to save your changes

![Add LearnDash shortcode with Beaver Builder](https://learndash.com/support/wp-content/uploads/2019/09/beaver-builder-add-learndash-shortcode-animation-min.gif)

### Divi

When you go to edit a piece of LearnDash content (course, lesson, topic or quiz), you’ll see a  Use The Divi Builder  button at the top. Click this button to open your content with Divi.

![Launch Divi builder on LearnDash content](https://learndash.com/support/wp-content/uploads/2019/09/learndash-launch-divi-button.jpg)

When you first launch Divi, you might be prompted with a few options:

- Build from Scratch
- Choose a Premade Layout
- Clone Existing Page

Choose the option that best meets your needs. You will then be sent to Divi’s visual builder screen.

To add a shortcode to your page with Divi:

1. Click the green **+** icon to add a new row
2. Choose the the layout of your row
3. Then choose the  Code  module *(the Text module will also work)*
4. Type in any LearnDash shortcode
5. Click the green checkmark icon
6. When you’re finished editing, be sure to click the three dots at the bottom of the screen, and then the  Save  button

![Add LearnDash shortcode using Divi](https://learndash.com/support/wp-content/uploads/2019/09/divi-add-learndash-shortcode-animation-min.gif)

## Using Widgets with Page Builders

In addition to shortcodes, widgets are another method of adding LearnDash content via a page builder. Let’s cover the specifics of each page builder that allows for the use of LearnDash widgets.

### Elementor

See [https://learndash.com/support/docs/add-ons/learndash-elementor-addon/](https://learndash.com/support/docs/add-ons/learndash-elementor-addon/) for more information regarding our LearnDash Elementor integration.

### Beaver Builder

The same widgets mentioned above (for Elementor) are also available for Beaver Builder.

To add a LearnDash widget to your page with Beaver Builder:

1. Click, hold and drag the widget somewhere on the page
2. In the left panel, either switch your module group to “WordPress Widgets” or use the search feature
![Locate LearnDash widgets in Beaver Builder](https://learndash.com/support/wp-content/uploads/2019/09/beaver-builder-locate-learndash-widgets-animation-min.gif)
3. *(optional)* In the left panel, give your widget a title and adjust the available settings
4. When you’re finished editing, be sure to click the Done  button in the top-right corner, and then either  Publish  or  Update”  to save your changes.
5. Locate the widget you want to add

![Add LearnDash widget using Beaver Builder](https://learndash.com/support/wp-content/uploads/2019/09/beaver-builder-add-learndash-widget-animation-min.gif)

## Basic Content Editing with Page Builders

Now that you know how to add LearnDash shortcodes and widgets to your favorite page builder, let’s talk about a few basic editing rules that apply to all page builders when you’re working with LearnDash.

### Conditionally Show/Hide Content

LearnDash provides a few shortcodes you can use to show content to a specific type of user:

```
[student] and [/student]
```

- 

– Only visible to someone who **is** registered for the course

```
[visitor] and [/visitor]
```

– Only visible to someone who **is not** registered for the course

These can be especially useful for:

- providing registered students with student-only content on the course page
- displaying a sign-up/purchase message to non-registered users when they’re viewing [sample lessons](https://learndash.com/support/docs/guides/sample-lessons/)
- …or any number of other creative applications

Unlike other LearnDash shortcodes, these cannot be used within a shortcode widget. **They must be used within a text editor or HTML widget.**

- **Elementor:** Use the  Text Editor  or  HTML  widget
- **Beaver Builder:** Use the  Text Editor  or  HTML  widget
- **Divi:** Use the  Text  or  Code  widget

You can place any content you’d like between the shortcodes, just make sure it is all contained within the same element. You **cannot** have an opening 
```
[student]
```

 shortcode in one element, add some content in subsequent elements, and then place your closing 
```
[/student]
```

 shortcode in another element.

**NOTE**:  If you’re using the free Uncanny LearnDash Toolkit, you can also use the [[uo_show] shortcode](https://www.uncannyowl.com/knowledge-base/show-hide-content/) to show content to logged in vs. logged out users (regardless of course enrollment status).

#### Elementor Example

![Elementor student/visitor shortcodes example](https://learndash.com/support/wp-content/uploads/2019/09/elementor-student-visitor-shortcodes-example.jpg)

#### Beaver Builder Example

![Beaver Builder student/visitor shortcode example](https://learndash.com/support/wp-content/uploads/2019/09/beaver-builder-student-visitor-shortcodes-example.jpg)We recommend using the “Text Editor” module in Beaver Builder

#### Divi Example

![Example student/visitor shortcode in Divi](https://learndash.com/support/wp-content/uploads/2019/09/divi-learndash-student-visitor-shortcode-example.jpg)We recommend using the “Text” module in Divi

## FAQ

**I’m using a page builder not mentioned in this article. Can I still use it with my LearnDash-powered site?**
Yes. The same principles mentioned in this article apply to all WordPress page builders. The widgets and modules you use might be named differently, but the concepts are the same.

---

## How can I make email notifications send on time?

**Source:** [https://learndash.com/support/kb/resources/faqs/email-notification-timing/](https://learndash.com/support/kb/resources/faqs/email-notification-timing/)

If you’re using the LearnDash [notifications add-on](https://learndash.com/support/docs/add-ons/notifications/), you might experience a delay in the timing of your email notifications. This is partially a limitation of WordPress, but also depends on the type of [hosting](https://learndash.com/support/docs/getting-started/hosting/) you have.

In some cases, you might need to add a custom cron job on your server. This process differs depending on your host, so please reach out to your host’s support team for help. If you’re using cPanel, you can follow the instructions below:

## Create Cron Job in cPanel

1. Login to cPanel
2. Search for & locate “Cron Jobs” (typically found in the “Advanced” section)
3. Add this command:

```
* * * * * wget -q -O - 'https://yoursite.com/wp-cron.php?doing_wp_cron&cron=true'
```

![Example cron job for LearnDash notifications](https://learndash.com/support/wp-content/uploads/2019/04/learndash-notifications-cron-job-cpanel-command-368x400.png)

**NOTE**: Some shared hosting services will not allow cron jobs to run once per minute. This could mean your notifications will be sent later than intended. Please contact your host about cron job limitations.

## Using WP Crontrol Plugin

You can also manage the notification schedule using the [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/) plugin. This lets you view and adjust WordPress scheduled tasks (cron events) directly from your dashboard.

1. **Go to Tools > Cron Events**
2. **Search for the hook:***Learndash_notifications_cron*. This is the scheduled task that controls when LearnDash email notifications are processed.
3. **Click “Edit” next to the hook**. From here, you can update how frequently this task runs.
4. **Set a more frequent schedule**. Change the recurrence to something like **hourly** instead of the default (usually twice daily) for quicker processing.
5. **Save your changes**. The new schedule will help ensure LearnDash notifications are checked and sent more often.

![WPControl LearnDash notifications](https://learndash.com/support/wp-content/uploads/2019/04/wp-control-learndash-notifications.jpeg)

---

## Can I hide the course content table on the course page?

**Source:** [https://learndash.com/support/kb/resources/faqs/hide-course-content-table/](https://learndash.com/support/kb/resources/faqs/hide-course-content-table/)

Yes. Please see the “Course Content” section of our [Course Display & Content Settings article](https://learndash.com/support/docs/core/courses/course-display/#course_content) for the setting to hide the course content for only those enrolled into the course.

---

## Can I create a unique sidebar for courses, lessons & quizzes?

**Source:** [https://learndash.com/support/kb/resources/faqs/create-unique-sidebar/](https://learndash.com/support/kb/resources/faqs/create-unique-sidebar/)

Different WordPress themes provide different options for sidebars. Thankfully, there are a few plugins that make creating & positioning sidebars easy, regardless of your theme. Try one of the following plugins:

- [Content Aware Sidebars](https://wordpress.org/plugins/content-aware-sidebars/) – allows for the creation of new sidebar areas
- [Widget Options](https://wordpress.org/plugins/widget-options/) – provides a ton of options for widgets that you insert into your sidebars

---

## Can I rename “courses,” “lessons,” “topics,” and “quizzes”?

**Source:** [https://learndash.com/support/kb/resources/faqs/rename-labels/](https://learndash.com/support/kb/resources/faqs/rename-labels/)

Yes, you certainly can.

Go to**LEARNDASH LMS > SETTINGS > ADVANCED > CUSTOM LABELS**to add or update the labels.
![Update LearnDash Labels Here](https://learndash.com/support/wp-content/uploads/2018/09/update-learndash-labels-here.gif)Update LearnDash Labels Here
After you are done adding all custom labels, click **Save** in the **Save Options** box on the right.

![Save Custom Label Options](https://learndash.com/support/wp-content/uploads/2018/09/save-options-box.png)Save Custom Label Options
When you apply custom labels to replace the default labels, all references to those labels will change across the WordPress admin area and on the front end of your site. These changes will be visible to all users, including site administrators.

Adding the **custom labels** will not change the permalinks automatically. Our guide[here explains how to change permalinks](https://learndash.com/support/docs/core/settings/permalinks/).

![Reset Labels Settings to Default](https://learndash.com/support/wp-content/uploads/2018/09/reset-settings.png)Reset Labels Settings to Default
If you would like to revert the labels back to their original versions, click **Reset Settings** at the bottom of the page.

**NOTE:** Any text not included in the Custom Labels section can be modified using the translation files. To do this, you’ll need to edit the current language file and look for the text you want to change to update the label. For detailed steps, please refer to this documentation:[LearnDash Translation Guide](https://learndash.com/support/docs/guides/translation/).

**FOR MORE CUSTOM LABEL INFORMATION:** Please see our [full documentation on custom labels](https://learndash.com/support/docs/core/settings/advanced-options/#custom-labels).

---

## Can I reuse lessons & topics across multiple courses?

**Source:** [https://learndash.com/support/kb/resources/faqs/reuse-lessons-across-courses/](https://learndash.com/support/kb/resources/faqs/reuse-lessons-across-courses/)

Yes. Please see our full documentation on [shared course steps](https://learndash.com/support/docs/core/courses/shared-course-steps/).

---

## Is LearnDash compatible with other plugins?

**Source:** [https://learndash.com/support/kb/resources/faqs/compatible-plugins/](https://learndash.com/support/kb/resources/faqs/compatible-plugins/)

While we certainly try our best to make LearnDash compatible with as many plugins as possible, we are unable to guarantee compatibility with all WordPress plugins.

You can view our list of [officially supported integrations](https://learndash.com/support/docs/add-ons/), or browse a list of [3rd-party add-ons](https://learndash.com/support/docs/add-ons/3rd-party/) created by the LearnDash community.

---

## How do I find the course ID?

**Source:** [https://learndash.com/support/kb/resources/faqs/find-course-id/](https://learndash.com/support/kb/resources/faqs/find-course-id/)

If you’re using a [shortcode](https://learndash.com/support/docs/core/shortcodes-blocks/) that requires the course ID, there are a few ways you can find it.

## Without a Plugin

There are two ways you can find the course ID without a plugin.

1. Navigate to LEARNDASH LMS > COURSES
2. Hover over the course in which you need the ID
3. Look at the bottom of your browser for a URL
4. The number after the 
```
post=
```

 part of the URL is the course ID

![How to find LearnDash course ID](https://learndash.com/support/wp-content/uploads/2018/09/learndash-find-course-id-1-800x666.jpg)

You can also click on the course to edit it. Once on the course edit screen, look at the URL. Once again, the number after 
```
post=
```

 is your course ID.

![How to find Course ID in LearnDash](https://learndash.com/support/wp-content/uploads/2018/09/learndash-find-course-id-2-800x403.jpg)

## With a Plugin

If you’d rather see the course ID more clearly on the Courses screen, there’s a simple plugin you can use.

1. Install & activate the [Reveal IDs plugin](https://wordpress.org/plugins/reveal-ids-for-wp-admin-25/)
2. That’s it! The course ID will magically appear on your Courses listing screen

---

## Known Issues & Conflicts

**Source:** [https://learndash.com/support/kb/resources/faqs/known-issues/](https://learndash.com/support/kb/resources/faqs/known-issues/)

### Randomized Questions on WPEngine Hosting

You can find the Randomize Order feature under Display and Content Options > Custom Question Ordering (or display subset of questions). This feature does not work properly with the default WP Engine settings. The following is needed for it to work properly:

- Navigate to WP ENGINE > GENERAL SETTINGS
- Look for**ORDER_BY_RAND**(which is set to disabled by default)
- Change the setting to enabled

Once this is enabled, the Custom Question Ordering feature should work as expected.

### Timing of Emails Sent by Notifications Add-On

To ensure the notifications function properly and emails are delivered on schedule, youll need to implement a custom cron job on your server. For the notifications to send properly and on time, you will need to add a custom cron job to your server. This is due to the limitations of WordPress mail system. See[this article](https://learndash.com/support/docs/faqs/email-notifications-send-time/)for instructions on how to set up a server cron job to help your notifications send on time.

### Export Quiz To Excel Plugin by WP Plugins For You

Several reports have been raised about this 3rd party plugin causing quiz questions to be removed. If this has occurred on your site, please[contact the plugin vendor](https://www.wppluginsforyou.com/)for assistance in rectifying the issue.

### SG Optimizer by SiteGround Hosting

The SG Optimizer (and other image optimizing plugins) can cause certificate images to be distorted, or contain solid black areas within the image. To mitigate this issue, it is recommended that image optimization be selectively disabled on images used in certificates.

### Blank Settings Pages

This is the result of using LearnDash v3.x.x on any WordPress version prior to 5.0. To address this, upgrading to the latest version of WordPress is recommended. For users who dont want to use the Gutenberg editor, you can still use the[Classic Editor.](https://wordpress.org/plugins/classic-editor/)

### WPML and Quiz Question Answer Options

[WPML](http://wpml.org/)translation capabilities cannot be applied to the available answers in a quiz question. This is being investigated further by development. There is no known workaround at this time.

### Duplicate Page or Cloning Plugins and Quizzes

Quizzes and Questions should not be cloned with third-party plugins. Doing so will result in irreversible issues. The cloned quizzes and questions cannot be used and should be deleted.

If you need to clone your quizzes, use the built-in quiz import/export feature found under LEARNDASH LMS > QUIZZES > ACTIONS > IMPORT/EXPORT.

### Sorting or Matrix Sorting Questions Won’t Auto-scroll While Dragging the Answer to the Bottom of the Page

If you selected the Sorting or Matrix Sorting type of questions with items that are displayed outside of the screen area on the front-end, dragging the items down to the correct option will not move or auto-scroll the screen. You may have to instruct your students or users to scroll using the mouse wheel or zoom the screen view out so that they can drag the items to the correct answers. They can also press the arrow buttons or spacebar on the keyboard while dragging the answer to scroll the screen up or down.

If you are affected by this issue, you can try adding the following CSS to your site (Appearance > Customizer > Additional CSS) as we have found that it works for those having this issue.

.wpProQuiz_content .wpProQuiz_questionList,
.wpProQuiz_content .wpProQuiz_matrixSortString,
.wpProQuiz_content ul.wpProQuiz_maxtrixSortCriterion {
  overflow: hidden;
}
```
.wpProQuiz_content .wpProQuiz_questionList,
.wpProQuiz_content .wpProQuiz_matrixSortString,
.wpProQuiz_content ul.wpProQuiz_maxtrixSortCriterion {
  overflow: hidden;
}
```

### Concatenate JS by JetPack Boost and Quizzes

The **Start Quiz** button and **Autostart** feature may not work when the **Concatenate JS** option is enabled in the **Jetpack Boost** plugin. To avoid this conflict, keep the Concatenate JS feature disabled while using LearnDash quizzes.

![Concatenate JS by JetPack Boost](https://learndash.com/support/wp-content/uploads/2025/07/JetPack-Boost-Concatenate-JS.png)

## Invisible Quiz Answer Text After Astra Theme Update to 4.9.0

A recent update to the Astra theme (v4.9.0) has caused quiz answer text to become invisible in LearnDash quizzes. It altered the default color settings for quiz answer text, resulting in a color that blends with the background. This issue affects users relying on the Astra theme for their LearnDash courses.

Solution: There are two methods to resolve this issue: adjusting the Astra theme’s color settings or using custom CSS.

**Method 1**: Adjusting Astra Theme Color Settings

1. In your WordPress dashboard, navigate to “Astra” and click “Dashboard.”
2. Click the “Color (Customize)” block or button within the “Quick Settings” section.
3. Find the “Global Palette” within the color customization options.
4. Below the “styles” section, you’ll see nine colored circles. Click on the sixth circle (Color 6). This color controls the quiz answer text.
5. Select a color that provides sufficient contrast against the background, such as black or dark blue.
6. Click the “Publish” button at the top of the customization panel to save your changes.

**Note:**Always create a full site backup before making any changes or updates to your website.

**Method 2**: Using Custom CSS

If adjusting the Astra color settings does not resolve the issue, you can use custom CSS to override the theme’s default color settings.

1. From your wp-admin dashboard, navigate to “Appearance” > “Customize” > “Additional CSS.”
2. Paste the following CSS code into the text area:

```
.learndash-wrapper .wpProQuiz_content .wpProQuiz_questionListItem label {

color: black !important;
}
```

*or choose any color that would make the text visible against the background

1. Click the “Publish” button to save your changes.

### Issue with LearnDash “Quiz Saving” and “Check Answer” functionality

There is currently an issue affecting some users’ ability to interact with LearnDash quizzes, particularly around the “Check Answer” and “Quiz Saving” functionality. The most common cause is the “Save quiz progress” setting having an autosave interval that is too short (e.g., 5 seconds), which can cause incomplete data writes, especially under heavy website traffic.

**What you can expect to see with this issue:**

1. The “Check Answer” button not responding
2. Quiz attempts appear locked or unclickable
3. The appearance that quiz answers are saved when they are not

**What can you do to prevent this issue from occurring?**Set your autosave interval to a higher value, between 30 and 60 seconds, to reduce risk on higher-traffic websites.

**Solution**: LearnDash Support can provide a plugin that identifies and removes old metadata, helping to resolve this issue. Please reach out to our support team if you experience this, and we will gladly provide the plugin download and instructions for using it.

---

## FAQs

**Source:** [https://learndash.com/support/kb/resources/faqs/faqs/](https://learndash.com/support/kb/resources/faqs/faqs/)

- - [Can I rename courses, lessons, topics, and quizzes?](https://learndash.com/support/docs/faqs/rename-learndash-labels/)
- [How do I find the course ID?](https://learndash.com/support/docs/faqs/find-course-id/)
- [Can I reuse lessons & topics across multiple courses?](https://learndash.com/support/docs/faqs/reuse-lessons-topics-multiple-courses/)
- [Does LearnDash support Learning Tools Interoperability (LTI)?](https://learndash.com/support/docs/faqs/support-learning-tools-interoperability/)
- [How do I hide post meta data (date, author, comments, etc.)?](https://learndash.com/support/docs/faqs/hide-post-meta-data/)
- [What kind of media can be used in LearnDash courses?](https://learndash.com/support/docs/faqs/media-used-learndash-courses/)
- [Can I create a unique sidebar for courses, lessons & quizzes?](https://learndash.com/support/docs/faqs/create-unique-sidebar/)
- [How do I protect my course files & downloads?](https://learndash.com/support/docs/faqs/protect-files-downloads/)
- [How do I remove the Take This Course button?](https://learndash.com/support/docs/faqs/remove-take-this-course-button/)
- [Can I hide the course content table on the course page?](https://learndash.com/support/docs/faqs/hide-course-content-table/)
- [How can I make email notifications send on time?](https://learndash.com/support/docs/faqs/email-notifications-send-time/)
- [Why is the registration form not showing?](https://learndash.com/support/docs/faqs/why-is-the-registration-form-not-showing/)
- [Why are the license updates and license checks disabled?](https://learndash.com/support/docs/faqs/why-are-the-license-updates-and-license-checks-disabled-on-my-site/)
- [What is the best way to offer course bundles with LearnDash?](https://learndash.com/support/docs/faqs/what-is-the-best-way-for-me-to-bundle-courses-using-learndash/)
- [I’m getting the error “the link you followed has expired” when installing LearnDash.](https://learndash.com/support/kb/resources/faqs/im-getting-the-error-the-link-you-followed-has-expired-when-installing-learndash/)
- [Why am I unable to submit an “Open Support Ticket”?](https://learndash.com/support/kb/resources/faqs/why-am-i-unable-to-submit-an-open-support-ticket/)
- [How do I automatically assign users to courses when they sign up/register on my site?](https://learndash.com/support/kb/core/faqs/how-do-i-automatically-assign-users-to-courses-when-they-sign-up-register-on-my-site/)

---

