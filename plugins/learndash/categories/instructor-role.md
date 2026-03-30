# Instructor Role

*Category from LearnDash documentation*

---

## Setup PayPal Payouts for Instructors

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/setup-paypal-payouts-for-instructors/](https://learndash.com/support/kb/add-ons/instructor-role/setup-paypal-payouts-for-instructors/)

Using PayPal Payouts you can pay your instructor their commissions directly from your website instantly. Setting up PayPal Payouts for Instructors in the Instructor Role Plugin can be a simple process if you have the necessary prerequisites in place. Before you can use this feature, there are certain things you need to ensure are in place. In this article, well guide you through the prerequisites needed to set up PayPal Payouts for Instructors in Instructor Role Plugin.

The payout functionality for instructors in the Instructor Role plugin only works if you have a PayPal business account and Paypal Payouts is activated on your PayPal business account.

## Prerequisites for using PayPal Payouts

To use PayPal Payouts, you will need to have the following:

- A PayPal business account
To use PayPal Payouts, youll need a PayPal business account. If you don’t have one, you can sign up for one at [https://www.paypal.com/us/webapps/mpp/merchant](https://www.paypal.com/us/webapps/mpp/merchant).
- Access to PayPal Payouts
You will also need access to PayPal Payouts. You can request access by visiting [https://www.paypal.com/payoutsweb/landing](https://www.paypal.com/payoutsweb/landing).
- A confirmed identity, email, and bank account linked to your PayPal business account
You must confirm your identity, email, and bank account linked to your PayPal business account before you can use PayPal Payouts.
- Sufficient funds in your PayPal business account
Before you can send payouts to your instructors, you must have sufficient funds in your PayPal business account.

## How to request access to PayPal Payouts

To request access to PayPal Payouts, follow these steps:

1. Visit the PayPal Payouts landing page at [https://www.paypal.com/payoutsweb/landing](https://www.paypal.com/payoutsweb/landing).
2. Click on the Get Startedbutton.
3. Provide information about your business needs to ensure the solution is a good fit for you.
4. Submit your application.

PayPal will review your application and email you with a decision. In the meantime, you can set up and test your integration in your sandbox accounts.

## Activating Payouts

Activating payouts is a crucial step in the setup process. PayPals terms and conditions have recently changed, and if payouts are not activated, the feature wont work. Activating payouts is something controlled by PayPal itself. So, we request you to get in touch with PayPal support if you are facing issues activating this.

To activate payouts, follow these steps:

1. Log in to your PayPal business account.
2. Click on Settings in the top right corner.
3. Click on Payment settings from the dropdown menu.
4. Click on Manage payouts in the Payouts section.
5. Follow the instructions to activate payouts.

Once you have completed these steps, you can now start using PayPal Payouts for your instructors in Instructor Role Plugin.

Setting up PayPal Payouts for Instructors in Instructor Role Plugin requires you to have a PayPal business account, access to PayPal Payouts, a confirmed identity, email, and bank account linked to your PayPal business account, and sufficient funds in your PayPal business account. Once you have these prerequisites in place, you can request access to PayPal Payouts and activate payouts. By following these steps, you can start using PayPal Payouts to pay your instructors.

## Creating a new API Application

You will be using PayPals Payouts API to send money to your instructors. To do that you will need to first create an API Application. Log in to PayPal using your normal credentials and then visit [My Apps](https://developer.paypal.com/developer/applications) of the PayPal Developer portal to create a new API Application.

Don’t worry, you do not need to be a developer to create the application. It is simply a set of credentials that will help the plugin send payment requests to PayPal on your behalf. When you visit the My Apps and Credentials screen you will see the following screen.

![PayPal My Apps Screenshot](https://learndash.com/support/wp-content/uploads/2024/05/payouts.png)PayPal My Apps

Click on “Create App” under the REST API apps section to create a new app. You can start with a Sandbox account to test how the application works.

![Create App PayPal](https://learndash.com/support/wp-content/uploads/2024/05/payouts-create-app.webp)Create New App

Enter Instructor Role Payouts as the App name and either keep the default sandbox account selected or select another one if you have and then click on Create App. Once you have created the App you can click on its name anytime to view its details.

Once you are done with your sandbox testing you can follow the same procedure for creating a live API application. Simply toggle to Live instead of Sandbox in the first step. As a last step, you will need to enable Live Payouts permission from the My Account page on your PayPal Developer Dashboard.

![](https://learndash.com/support/wp-content/uploads/2024/05/My_Account_PayPal_Developer.png)

## Configuring Instructor Payout Settings

Now that the API application is set up on your PayPal account, login to your website as admin and visit LearnDash LMS Instructor PayPal Payouts.

![nstructor Payout Setting](https://learndash.com/support/wp-content/uploads/2024/05/Instructor_‹_Instructor_Role_Dev_—_WordPress.png)Instructor Payout Settings

Configure all the necessary settings and click on save to save them. Instructors need to save their PayPal email addresses from the Instructor Dashboard by accessing the Profile section.

![Instructor PayPal Email Settings](https://learndash.com/support/wp-content/uploads/2024/05/Annotate-a-local-image.png)Instructor PayPal Email Settings

## Features: Pay Instructor Commissions using Payouts

Once all the settings are configured and saved, the admin can pay instructor commissions using PayPal payouts from the LearnDash LMS Instructor Commission Report Page. Select an instructor and click on submit to view their commission report. If there are any commissions to be paid, you will see a Pay button next to the unpaid earnings section.

Click on the Pay button to open the transaction popup box. You will see there is a new Payment method setting added which can be used to select the type of the commission transaction. Select Paypal Payout as the Payout Method and you will see the PayPal Payout email address of the instructor to whom the payment will be sent. The Payout email address is fetched from the configuration saved by the instructor.

![Instructor Commission PayPal Payout Transaction](https://learndash.com/support/wp-content/uploads/2024/05/PayPal-payout.png)Instructor Commission PayPal Payout Transaction

Enter the amount you wish to pay and then click on Pay to complete the transaction. You will get a success message if the payout completes successfully and an error if there are any problems while making the transaction.

**NOTE**: For sandbox transactions, the actual commission details will not be updated.

## Important Notes

To send payouts, you’ll need:

1. A PayPal business account
2. Access to PayPal Payouts
3. A confirmed identity, email, and bank account linked to your PayPal business account
4. Sufficient funds in your PayPal business account
5. Every payout carries a transaction fee which you will have to pay in order to make the payouts

---

## Elementor Compatibility

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/elementor-compatibility/](https://learndash.com/support/kb/add-ons/instructor-role/elementor-compatibility/)

The Frontend Course Creator with Elementor Support is a powerful feature that allows administrators and Instructors to access the Elementor Editor directly from the frontend of the course creation platform. This feature provides a seamless and user-friendly way to create, edit, and manage course content while limiting backend access and still providing full Elementor support.

## Editing Course Content

You can edit your course content, including topics, quizzes, and lessons, easily with this feature. On the Frontend Course Creator page, just click **Edit with Elementor**, and the Elementor Editor opens in a new tab, so you can make your edits conveniently and directly on the page.

## Switching Back to Normal WordPress Editor

After creating or editing content with Elementor, you can easily switch back to the normal WordPress editor for further modifications.

Click on the “Switch to default editor” button on the Frontend Course Creator to return to the normal editor.

This flexibility allows you to take advantage of both Elementor’s intuitive visual editor and the traditional WordPress editor.

---

## Introducing Frontend Dashboard

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/introducing-frontend-dashboard/](https://learndash.com/support/kb/add-ons/instructor-role/introducing-frontend-dashboard/)

Presenting the Frontend Dashboard, exclusively designed for Instructors and Admins! Now your instructors and admin will be able to access LearnDash and other Instructor Role plugin features right from the frontend of your website. Instead of using our access restricted backend(WP) Instructors dashboard embrace the complete frontend experience.

With a visually appealing interface and an intuitive user experience, the Frontend Dashboard ensures high security and boosts instructors productivity. The frontend dashboard is fully customizable and extendable so that you can tailor it to deliver an exceptional Instructor experience that fits your business needs perfectly. Say hello to simplified course management and unlock a world of possibilities!

### Frontend Dashboard

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/10/Overview.png)

The new frontend dashboard is a Gutenberg block-based dashboard that comes with a powerful dashboard builder block making it fully customizable and extendable. Dont worry even if you have disabled the Gutenberg Editor you can still use our [global settings](https://wisdmlabs.com/docs/?post_type=ht_kb&p=5797&preview=true#if-gutenberg-editor-is-disabled) to customize the frontend dashboard.

At present, the frontend dashboard offers eight primary tabs and other remaining Instructor functionalities available in the Instructor role plugin are coming very soon to the frontend dashboard

### Instructor Frontend Dashboard Tabs

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/final.png)

Overview: Get a comprehensive view of your Courses and Learners, along with their submissions, all at a glance.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Shrinked-2-971x1024.png)

Courses: Explore a user-friendly listing of courses and utilize our Frontend Course Creator to effortlessly create or edit courses.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Shrinked-1-982x1024.png)

Quizzes: A quizzes listing through which you can create new Quizzes or edit new quizzes using our Frontend Course Creator

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/09/image-1024x442.png)

Products: The Products tab offers instructors and administrators a fresh tab view for their WooCommerce products within the Frontend Dashboard.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/09/image-3-1024x454.png)

Commissions: The Commissions tab for Instructors gives a detailed view of the instructor commissions and payout logs and their earnings.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Assignments-Screen-1-1024x950.jpg)

Assignments: The Assignments Block provides a unique and simpler view for your assignment submissions to help you manage them with ease.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Essays-Screen-1-1024x956.jpg)

Essays: The Essays Block provides a unique and simpler view for your student essay submissions to help the admin and instructor manage essay submissions better.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Comments.jpg)

Comments: The Comments block allows users to efficiently manage and navigate comments across courses, lessons, topics, quizzes, essays, and assignments.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/QUiz-Attempts.jpg)

Quiz Attempts: The Quiz Attempts block allows user to
( instructors or administrators) easily access and review all student quiz attempts directly.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/course-reports-870x1024.png)

Course Reports: Instructors can view course and learner-specific reports for their courses and students.

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/01/image-2-1024x467.png)

Groups: Instructors can manage groups and view groups dashboard for their groups and students.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Shrinked-3-720x1024.png)

Settings: Instructors can take charge of their profile information, manage email notifications and Paypal details for efficient payouts in this dedicated tab.

All the other LearnDash and Instructor Role functionalities for Instructors are coming soon to the frontend dashboard. We are continually working to enhance the frontend dashboard by adding all other LearnDash and Instructor Role functionalities, ensuring it becomes the go-to solution for course creators. Our goal is to empower you to effortlessly create, maintain, and manage courses and content without having to access the Backend(WP) Instructor dashboard.

### Frontend Instructor experience to create and manage courses:

Say farewell to the traditional backend setup and embrace the simplicity and convenience of managing your courses directly from the frontend of your website. With the Frontend Dashboard, Frontend course creator, you can create, edit, and organize your courses effortlessly, without the need to navigate through complicated backend screens.

### Completely block access to the Backend

With the Frontend Dashboard, you can provide instructors with a seamless frontend experience while completely blocking access to the backend /wp-admin/ area. Instructors can focus on creating and managing their courses without being exposed to the complexities of the backend. This ensures a hassle-free experience for instructors while maintaining the integrity and security of your website.

### Personalize the dashboard to match your Brand and Sites look and feel

Make the Frontend Dashboard your own by customizing its appearance to match your branding and style. With a wide range of customization options, you can easily tailor the layout, color schemes, and typography to create a unique and visually appealing dashboard that reflects your organizations identity.

Frontend dashboard can be customized through Gutenberg editor, even if Gutenberg editor is disabled, you can customize the dashboard via global settings.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/color-settings.png)

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/font.png)

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/template.png)

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/button.png)

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/show-hide.png)

### Customize and Extend the Frontend Dashboard to create a dashboard tailored to your business needs

The Frontend Dashboard is a Gutenberg block-based modular dashboard empowering you with all the flexibility to customize and extend the dashboard tailored to your business needs

The Gutenberg editor along with the Dashboard builder block enables you to enhance the dashboards capabilities by removing / adding/ rearranging content and features & functionalities. Whether you wish to include additional information, integrate external tools, or improve existing functions, allows your frontend dashboard to evolve with your needs. Learn about how to customize the frontend dashboard.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Dashboard-Editor-Final-1024x432.png)

With the complete frontend experience for instructors offered by the simplified and intuitive Frontend Instructor Dashboard, administrators can confidently let instructors manage and oversee the course on their sites.

The Frontend Dashboard offers unparalleled customization flexibility, granting admins full control over instructor access and the ability to tailor the dashboard to meet unique business needs. With this powerful tool, administrators and business owners can efficiently manage instructors, elevating the overall quality of their e-learning experience. Say goodbye to limitations and embrace a new era of simplified course management and enhanced productivity.

---

## How to disable the WordPress admin page for Instructors

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/how-to-disable-the-backend-dashboard-for-instructors/](https://learndash.com/support/kb/add-ons/instructor-role/how-to-disable-the-backend-dashboard-for-instructors/)

The instructor dashboard serves as a dedicated space exclusively designed for instructors on your website. Before introducing the Frontend Dashboard for Instructors, the Instructor dashboard was simply the WP admin dashboard that was simplified and modified to provide a dedicated space for Instructors on your website.

Normally, this Instructor dashboard was accessible in the same way as the default WordPress Admin area at 
```
www.your-site-name/wp-admin
```

 (may vary based on your site settings and plugins).

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/image-9-1024x935.png)Screenshot for Backend Instructor Dashboard

Now,with the introduction of the Frontend Dashboard, you may not need the Backend Instructor Dashboard if the current Frontend Dashboard functionalities ([Frontend Dashboard installation guide](https://wisdmlabs.com/docs/article/wisdm-instructor-role/ir-features/frontend-dashboard-installation-guide/)) completely satisfy your needs.

Follow the steps below to disable the backend dashboard (WP) for Instructors and completely restrict Instructor access to the /wp-admin/ area.

### Disabling Backend Access:

Starting from Instructor Role v5.0.0, a new setting has been introduced under the general settings tab called Disable Backend (WP) Dashboard. Enabling this setting will effectively disable access to the Instructor Dashboard located in the WordPress administrative area (www.your-site-name.com/wp-admin)

1. Go to the WordPress Dashboard > LearnDash LMS > Instructors > General Settings
2. Select the check box that says Disable Backend (WP) Dashboard as shown in the below image.
3. 

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/image-10-1024x373.png)Screenshot for Disable Backend Dashboard Setting

When an instructor attempts to access the default Instructor Dashboard in the WordPress administrative area, they will automatically be redirected to the frontend of the website. This ensures a smooth transition and provides a seamless experience for instructors.

### Instructor Dashboard Link:

If your site has the Instructor Dashboard Link setting enabled along with the Disable Backend Dashboard option, the Instructor Dashboard menu added to your sites primary menu will direct users to the frontend dashboard page instead of the default Backend Instructor Dashboard.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Instructor-Dashboard-link-1024x346.jpg)

By utilizing the Disable Backend Dashboard setting, you can effortlessly control instructor access and seamlessly guide them to the frontend dashboard. This user-friendly setup ensures a secure and convenient experience for instructors, streamlining their workflow and promoting efficient course management.

---

## How to Customize the Frontend Dashboard

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/how-to-customize-the-frontend-dashboard-gutenberg-editor-and-global-settings/](https://learndash.com/support/kb/add-ons/instructor-role/how-to-customize-the-frontend-dashboard-gutenberg-editor-and-global-settings/)

The Frontend Dashboard plugin offers a range of simplified settings to help you tailor the dashboard according to your preferences. Explore how you can make the Frontend Dashboard truly your own by customizing it through Gutenberg editor.

## Customizing the Frontend Dashboard via Gutenberg Editor

Since the Frontend Dashboard is made up of Gutenberg blocks you have all flexibility and power of the Gutenberg block editor to customize the Frontend Dashboard page.

The dashboard blocks for Instructors consist of a powerful dashboard builder block, through which all the content is arranged in dashboard tabs. This block also includes settings to style your dashboard based on your unique needs.

In addition to the Dashboard blocks, you can include other content using Gutenberg blocks. This allows you to provide Instructors with relevant information to enhance their user experience and productivity on the site. For example, you can create how-to guides, or dashboard header/ footer banners to keep important information in focus. You also have the option to extend the dashboard’s functionality by granting Instructors access to various features through Gutenberg blocks or shortcodes.

## Configuring a Page Template

#### Page Template Settings help you configure the page layout for the frontend dashboard page.

1. **Access the Settings Sidebar:** In the Page Settings sidebar on the right-hand side of the page editor, locate the Template section.
2. **The Dashboard Template:** The Dashboard template designed specially for a full width dashboard layout will be set as the default choice. If needed, you can easily change the template selection using the available options.
3. **Select other Templates:** Instead of using the Dashboard Template you can use your theme’s templates by selecting one. The Frontend Dashboard is compatible with all themes, and specifically with BuddyBoss, eLumine, Astra and Kadence themes, which are commonly used for creating a LearnDash based eLearning site

## Dashboard Tab Settings

The Dashboard Tabs block enables you to add, remove, and arrange tabs on your dashboard. You can design the content for each tab using any blocks available in your block editor.

Whether adding text, images, videos, or providing Instructors access to specific functionalities through blocks or shortcodes, the possibilities are endless. Additionally, you have the option to choose an icon for your dashboard tab to add a visual touch.

![Dashboard Editor](https://learndash.com/support/wp-content/uploads/2024/04/Dashboard-Editor-Final-1024x432-1.webp)Dashboard Tab Settings

### Adding Content Above or Below the Dashboard Block

In addition to adding content in the dashboard tabs, you can also add blocks above and below the dashboard block to further enrich your frontend dashboard.

For example, if you want to add a footer below the dashboard block, simply click the plus sign in the bottom right corner of the block. Then, design the content by selecting relevant block from the list of available blocks.

![Above Dashboard](https://learndash.com/support/wp-content/uploads/2024/04/above-dashboard.png)

### Typography and Color Settings

#### Font Settings:

1. To access Font Settings, select the Dashboard Tabs Block on your Frontend Dashboard.
2. Within the block, you’ll find a range of typography settings available for customization.
3. By default the theme font is applied to the dashboard, but you also have other font choices available.
4. Manage the font size to achieve the desired look and feel, ranging from small to large font sizes presets.

#### Color Settings:

Within the Dashboard Tabs Block, you’ll also have access to extensive color scheme options for further customization. You can choose from five predefined color palettes, each thoughtfully designed to complement various design preferences.

If you’re looking for a more tailored approach, you can create a custom color palette, allowing you to use colors that perfectly match your brands aesthetics. Customize the visual appeal of your Frontend Dashboard by choosing the color scheme that best represents your brand.

![](https://learndash.com/support/wp-content/uploads/2024/04/image-16-1.png)Screenshot for block color scheme options

### Page Speed Settings

The Page Speed settings is an advanced setting for the Frontend Dashboard. It provides a One-Time Asset Loading feature toggle, which when enabled, gives the best experience to the user in terms of page load time and performance. This feature is only compatible with a dashboard created using blocks.

![Page Speed Settings](https://learndash.com/support/wp-content/uploads/2024/04/page-speed-settings.webp)Page Speed Settings

### Primary CTA option

On the left sidebar of the Dashboard, you have theoption to add a prominent button at the top of the Tabs Menu. This button puts important and frequently-used actions right at the Instructors’ fingertips.

By default, the button is set as the Create New Course button, which can be confirmed by enabling the “Use this button to create a new course” checkbox. However, it can be customized to suit specific requirements by changing its title and URL in the block settings.

![Primary CTA](https://learndash.com/support/wp-content/uploads/2024/04/primary_CTA_.webp)Create new course using sidebar button setting

## Instructor Overview block settings

The Instructor Overview block provides a list of settings to control the visibility of sections on the overview page. By toggling the different counter and card display settings, you can choose which sections are visible to Instructors on the Frontend Overview Dashboard page.

## Global Settings

Global Settings are designed for sites that do not utilize the Gutenberg block editor, such as those still using the Classic Editor, or add-ons to disable the block editor. By default, Global Settings are disabled if your site has Gutenberg Editor enabled.

**IMPORTANT**: When using global settings, please refrain from directly editing or updating the dashboard page from the edit page screen. Instead, use the provided Global Settings to make any updates to the Frontend Dashboard.

### Frontend Dashboard Page Settings

When using Global Settings, all the different settings are applied to the page configured in the Frontend Dashboard Page setting. You can also create a new Frontend Dashboard page by clicking on the Create a New Dashboard Page link. This will update the selected Frontend Dashboard page to a newly created one.

![Frontend Dashboard Page Settings](https://learndash.com/support/wp-content/uploads/2024/04/Frontend-Dashboard-Page-Settings.png)Frontend Dashboard Page Settings

### Menu Settings

Menu Settings allow you to enable or disable the different tabs and content displayed on the Frontend Dashboard. If a tab is disabled, it will be removed from the Frontend Dashboard and Instructors won’t have any access to the content or the functionality available in that respective tab. By default, all tabs are enabled, but you have the flexibility to hide specific tabs by disabling the corresponding toggle and saving the settings.

![Menu Settings](https://learndash.com/support/wp-content/uploads/2024/04/menu-settings.png)

### Overview Page Settings

Overview Page Settings allow you to enable or disable the counters and card sections displayed on the Frontend Dashboard’s overview page. By toggling the specific setting toggles, you can control which counters or card sections are visible to instructors.

![Overview Page Settings](https://learndash.com/support/wp-content/uploads/2024/04/overview-page-settings-800x492.png)Overview Page Settings

### Appearance Settings

Appearance Settings provide options to modify the color and typography settings used on the Frontend Dashboard. Similar to the Gutenberg editor settings, you have access to predefined color palettes, as well as a custom color palette to personalize the colors used on your Frontend Dashboard.

The font setting offers a selection of fonts for your Frontend Instructor Dashboard. The font size setting allows you to manage the font size, ranging from small to larger, to suit your preferences.

![Appearance Screen](https://learndash.com/support/wp-content/uploads/2024/04/appearance-screen.png)Appearance Screen

![Font Settings](https://learndash.com/support/wp-content/uploads/2024/04/font-settings.png)

With these powerful customization options, you can make the Frontend Dashboard your own, aligning it with your unique brand identity and preferences. Enjoy the flexibility to create a customized and visually appealing Frontend Dashboard for an enhanced user experience.

## Recreating the Frontend Dashboard

If the Frontend Dashboard has been accidentally deleted, you can easily recreate it by referring to the [Frontend Dashboard installation documentation](https://learndash.com/support/kb/add-ons/instructor-role/frontend-dashboard-installation-guide).

---

## Frontend Dashboard for Instructors: Gutenberg Blocks List

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/frontend-dashboard-for-instructors-gutenberg-blocks-list/](https://learndash.com/support/kb/add-ons/instructor-role/frontend-dashboard-for-instructors-gutenberg-blocks-list/)

The Frontend Dashboard for Instructors and admin is made up of Gutenberg block making the dashboard fully customizable or extendable. These blocks can be used individually or in combination to create a seamless frontend dashboard for managing courses with ease.

## Dashboard Tabs

The Dashboard Tabs block is essentially a versatile dashboard builder that allows you to create custom dashboards for any of your needs or for any kind of users, not just a Frontend Instructors Dashboard. With this block, you can create any kind of dashboard by adding add tabs to your page and add any blocks under each tab. These tabs act as intuitive sections, allowing you to categorize and present information in a structured manner.

## How it Works:

Add Tabs: Using the Dashboard Tabs block, you can create tabs that act as headers for different content sections. Each tab title and icon can be customized to suit your needs.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/tabs-block-1024x256.png)

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/new-tab-1024x514.jpg)

Add Primary action button:You can add a primary action button at the top of the dashboard sidebar tabs menu. By default this button is configured for creating a new course. You can customize this button by changing the button text and button URL.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/New-tabs-1024x406.jpg)

Add content /blocks / Shortcodes:Under each tab you can add and arrange any kind of available blocks. Add blocks such as text, images, videos or provide instructors access to any functionality by adding the relevant blocks or short code. This ensures that related information is neatly grouped together for a seamless reading experience.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/new-tab-2-1024x446.jpg)

Easy Sorting:The tab titles can be easily sorted and rearranged to suit your preferred order, providing flexibility in how you organize your content. Click the tabs to enable rearrange as shown in the picture

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/rearange-1024x515.jpg)

Dashboard page template: When visitors access your page, they will find the tab titles neatly aligned on the left side, while the corresponding content appears on the right-hand side. This user-friendly layout enhances the overall readability of your page.

You can choose between different layouts by changing the page template. By default, the page template selected is the Dashboard template. You can choose any other template provided by your theme also.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Templates-1024x459.jpg)

Customize the look and feel

Under the Dashboard Tabs Block settings you will find the color and font setting to customize the look and feel of your dashboard

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/font-and-colour-1024x455.jpg)

## Instructor Overview for LearnDash

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Overview-Dashboard-expanded-1-920x1024.png)

The Instructor Overview for LearnDash block brings the instructor overview page directly to the frontend. This block offers a range of valuable features, including:

- Counts of active courses, enrolled students, assignments or essay submissions, and quiz attempts.
- A list of top courses based on the number of enrolled students.
- Earnings report to track commissions.
- Course progess reports presented as a pie chart, showcasing student progress categorized as not started, in progress, or completed.
- Latest assignment and essay submissions made by students for easy access and review.

### Courses for LearnDash

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Filters-777x1024.png)

The Courses for LearnDash block enables instructors and administrators to display a dynamic LearnDash course listing page with various features, including:

- Keyword search to filter courses based on specific terms.
- Filters for course status, allowing Instructors to view courses under pending review or shared courses.
- Advanced filters based on date, price types, course categories, and tags.
- The ability to create new courses using the New Course button.
- Trash courses individually or in bulk for efficient management.

### Quizzes for LearnDash

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Normal-771x1024.png)

The Quizzes for LearnDash block offers a dynamic LearnDash quiz listing page that simplifies quiz management for instructors and administrators. Key features include:

- Keyword search to filter quizzes based on specific terms.
- Filters based on Quiz status for easy organization.
- Advanced filters to narrow down quizzes based on date, course, lesson, topic, quiz categories, and tags.
- The option to create new quizzes using the New Quiz button.
- Efficiently trash quizzes individually or in bulk.

### Instructor Settings for LearnDash

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Settings-616x1024.png)

The Settings for LearnDash block provides instructors with a dedicated section to configure common user settings. This includes managing profile details, setting up PayPal payouts email, and managing passwords.

With the Frontend Dashboard Gutenberg blocks, instructors can effortlessly navigate and manage their courses directly from the frontend, enhancing their teaching experience and streamlining their workflows.

### Products For LearnDash

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/09/image-1024x442.png)Products List Screen

The Products for Instructor Block provides instructors and administrators a new tab view for their Woocommerce Products on the Frontend Dashboard.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/09/image-1-1024x480.png)Create New Product Screen

Instructors and Administrators can create new products and/or edit existing products using the products creation and edit screens supported by Gutenberg block.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/09/image-2-1024x502.png)Edit Product Screen

Note: Products created from the Products for Instructors block will be ofCourseproduct type.

### Commissions For LearnDash

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/09/image-3-1024x454.png)Commissions View Screen

The Commission for Instructor Block gives a detailed view of the instructor commissions and payout logs.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/09/image-6-1024x478.png)Commission Orders Table

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/09/image-7-1024x424.png)Payouts transaction history table

Instructors and Administrators can view the earnings graph, commission orders table and Payout Transaction History table related to the instructor commissions.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/09/image-5-1024x472.png)Commission payout modal

Administrators can use the block to view different instructor commission earnings, make manual/PayPal payouts and update manual payout logs.

### Assignments For LearnDash

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/10/Assignments-Screen-1-1-1024x950.jpg)Assignments Screen 1

The Assignments for LearnDash provides a different and simpler way to view the various lessons and topics assignment submissions to the admin and instructors.

The first screen shows a list all the lessons and topics related to submitted assignments which makes it easier to view submissions related to specific lessons or topics.

You can also find related course information as well as sort everything by the latest or not graded submissions first.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/10/Assignments-Screen-2-798x1024.jpg)Assignments Screen 2

On the next screen you get a list of all user submissions made for that specific lesson or topic.

Filter submissions by student name, dates and even by the assignment approval status.

Perform quick actions such as scoring, grading and downloading assignments.

Find relevant topic, lesson and course information for each submission which is very helpful when the shared step settings are enabled.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/10/Assignments-Screen-3-1024x679.jpg)Assignments Screen 3

On the final screen view all the single assignment details along with the scoring, grading and options to download.

View comments for that assignment along with other comment actions.

### Essays For LearnDash

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/10/Essays-Screen-1-1024x956.jpg)Essays Screen 1

The Essays for LearnDash provides a different and simpler way to view all the student quiz Essay submissions for the admin and instructors.

The first screen shows a list all the essay questions related to submitted essays which makes it easier to view submissions related to specific essay question.

You can find related quiz information as well as sort everything by the latest or not graded submissions first.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/Essays-Screen-2-1021x1024.jpg)Essays Screen 2

On the next screen you get a list of all user submissions made for that specific essay question.

Filter the submissions by student name, dates and by whether the essay is graded or not.

Perform quick actions such as scoring, grading and downloading essays if there are attachments.

Find relevant quiz and course information for each submission which is very helpful when the shared step settings are enabled.

### Comments For Learndash

The Comments Screen is a powerful addition designed to enhance the user experience for administrators and instructors. This feature allows users to efficiently manage and navigate comments across courses, lessons, topics, quizzes, essays, and assignments.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/11/Comments-Main-Screen-1024x563.png)Comments Screen 1

On the main screen, administrators and instructors can filter comments using two primary criteria:

- Filter by Course:Users can select a specific course to view comments associated with that course only.
- Filter by Date:Users can filter comments based on the date they were posted.

At the top of the screen, there are dedicated tabs for spam and trash comments, allowing users to easily access and manage comments flagged as spam or those in the trash.

For each comment listed on the main screen, users can perform various actions:

- Reply :Engage in conversation with users by replying to comments.
- Edit: Modify the content of a comment to correct errors or improve clarity.
- Trash: Move a comment to the trash for temporary removal.
- Spam: Mark a comment as spam.
- Unapprove: Temporarily hide a comment from public view until approved.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/11/Comments-Single-screen-1024x394.png)Comments Screen 2

When clicking on a specific comment, users are directed to a detailed view. This view provides comprehensive information about the comment and additional features.

If the comment is associated with a course, a hierarchical tree is displayed. This tree visually represents the steps or components of the associated course, allowing users to navigate through the content efficiently.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/11/Comments-Hierarchical-screen-1024x908.png)Comments Screen 3

### Quiz Attempts For Learndash

Introducing the Quiz Attempts Block to Instructor Role Frontend Dashboard. With this new feature, instructors (or administrators) can easily access and review all student quiz attempts directly. You can filter based on Groups, Courses, Quizzes, or Students, and also refine the results by selecting the desired duration (Ex: Last 7 days, Last 30 days).

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/11/screenshot-test.local-2023.11.20-11_02_11-1024x282.png)Quiz Attempts filters

Upon choosing a quiz, youll not only access detailed user quiz attempts but also review an overview of the quiz, including collective performance insights of all your students attempting that specific quiz.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/11/screenshot-test.local-2023.11.20-11_05_06-1024x636.png)Quiz Summarised information

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/11/screenshot-test.local-2023.11.20-11_06_19-1024x589.png)Quiz Attempts List

In the image above, you can observe the points earned, learners percentage score, the number of attempts made by the user, and their pass/fail status.

You can also sort the results by the date of attempt or by high/low scores. Additionally, you have the option to view only the latest attempt or all attempts by the user. Lastly, you can choose to show or hide anonymous quiz attempts. Clicking on the download icon will download the details of the entire quiz attempt in CSV format.

Selecting the arrow icon directs you to a screen displaying the quiz profile information, summarized data for that attempt, and specific details of each answered question by the user.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/11/screenshot-test.local-2023.11.20-11_12_04-1024x513.png)Quiz Attempt details.

### Course Reports For LearnDash

Using this new feature, administrators and instructors can view course progress reports for all their courses as well as detailed learner specific reports.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/07/course-reports-870x1024.png)Course Reports

### Course Reports

Each course report offers an overview and a learners section.

The overview section gives a high level overview of users enrolled in the course ( either directly or through groups ), course content counts, average course progress information as well as a chart to give a represent the progress of all the students in the course.

The learners section provides detailed information about all the learners enrolled in the course in a table view.

There are also additional options to sort the learners and filter them based on their progress in the course and a date range. One can also filter the data by clicking on the different data tiles in the overview chart section.

### Learner Reports

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/12/image-702x1024.png)Learner Reports

The learner reports provides a complete view of all the courses the learner is enrolled in with their progress. It is divided into the learner progress and course list section.

The learner progress view gives a high level overview of the number of courses the learner is enrolled in along with their latest activity. It also provides a chart to represent the progress of the learner in all the different courses they have enrolled in.

The course list section gives detailed information about the courses the learner is enrolled in as well as their progress along with additional information related to the course.

There are also additional sorting and filtering options to filter the course list based on progress and status of the selected learner in the course.

### Groups For LearnDash

Using this new feature, administrators and instructors can view and manage Learndash groups from the frontend dashboard.

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/01/image-2-1024x467.png)Screenshot for Groups Block

### Group Creation and Editing

Administrators and instructors can create new groups using our the simple quick setup group creation screen.

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/01/image-3-1024x416.png)Create a New Group

Editing the groups is also easier using the edit group screens.

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/01/image-4-1024x417.png)Edit a Group

### Groups Dashboard

The Groups Dashboard provides an in-depth view of all the users and courses in the group and more.

To access the groups dashboard screen, the admin or instructor user can either click on the view dashboard icon on either the group listing screen or the group edit screen.

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/01/image-6.png)View Dashboard from group listing screen

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/01/image-5.png)View dashboard from edit screen

The group dashboard provides information related to the courses, users and an overview of the entire group.

#### Overview

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/01/image-7-1024x329.png)Group Overview Section

The overview section provides information on the course and user statistics as well as the progress of the users in the group.

The overview section also provides group progress and results export features.

#### Courses

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/01/image-8-1024x452.png)Group Course List

The group course list section gives an overview of all the courses added to the group and the course progress of users in that specific course.

Admins and instructors can also manage the group courses using the manage button.

#### Learners

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/01/image-11-1024x509.png)Group Learners Table

The group learners section displays a list of all the users in the group along with their course progress in different courses of the group.

Admins and instructors can also filter course progress to a specific course using the courses filter.

On opening learner accordion to view the different course progress for a learner, the administrator and instructor can edit the course progress for that specific learner by clicking on the details link.

#### Course Progress

On clicking the details link for a specific learner course, the course progress screen is displayed.

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/01/image-12-1024x534.png)User Course Progress Screen

Administrator and instructor can update the user course progress for that user from this screen using the mark complete and not complete links for the different steps in the course.

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/01/image-13.png)View Quiz Atttempts

They can also view quiz attempts for that user by clicking on the view quiz attempt button.

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/01/image-15-839x1024.png)View Quiz Attempt Screen

### Certificates For LearnDash

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/03/image-1024x488.png)

Using this new feature, administrators and instructors can view and manage LearnDash certificates from the frontend dashboard.

The listing page offers quick view to see the number of groups, courses and quizzes the certificate is associated with along with additional filters to filter the certificates as per their status and date.

### Certificate Builder Integration

![](https://wisdmlabs.com/docs/wp-content/uploads/2024/03/image-1-1024x488.png)

The block also integrates with the LearnDash certificate builder addon allowing instructors and admins to edit their certificates using the certificate builder.

---

## Frontend Dashboard: Installation Guide

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/frontend-dashboard-installation-guide/](https://learndash.com/support/kb/add-ons/instructor-role/frontend-dashboard-installation-guide/)

The Frontend Dashboard for Instructors (and Admins) allows access to core LearnDash and other related add-on functions from the frontend of your website without the need to provide instructors with backend access. This dashboard serves as an alternative to the previous Instructor dashboard, which was a simplified and access-restricted version of the WordPress dashboard in the backend

The Frontend Dashboard is a Gutenberg block-based dashboard that comes with a powerful dashboard builder block making it fully customizable and extendable. Don’t worry even if you have disabled the Gutenberg Editor, you can still use our [global settings](https://wisdmlabs.com/docs/article/wisdm-instructor-role/ir-features/how-to-customize-the-frontend-dashboard-gutenberg-editor-and-global-settings/#global-settings) to customize the frontend dashboard. The default Frontend Dashboard comes with multiple options:

1. **Overview**: A quick snapshot of your Course List, Students, Submissions and their Quiz attempts. There are also four defined sections: **Earnings**, **Top Courses**, **Course Report**, and **Latest Submissions**.
2. **Course List**: A course list that allows you to create a new course or edit a course using our Frontend Course Creator. You can also view your existing Course List and use the filter options to find specific course List by **Date, Price, Categories or tags**.
3. **Quiz List**: A Quiz List that allows you to create new Quiz List or edit new quiz List using our Frontend Course Creator. You can also view your existing quize List and use the filter options to find specific ones by date, course, lesson, topic, category, or tags.
4. **Products**: A products tab for instructors and administrators gives a fresh tab view for their WooCommerce products. Note: If the **LearnDash WooCommerce add-on** is disabled or inactive, the **Product tab** will be hidden. To enable it, simply activate the **WooCommerce for LearnDash** add-on. You can also filter your products by **category** to quickly find the ones you’re looking for.
5. **Commissions**: A Commission tab for instructors that provides a detailed view of the instructor commissions and payout logs.You can view your earnings, commission summary, orders, and payout transaction history. Additionally, you can download a CSV report for both orders and payout transaction history.
6. **Assignments:** The Assignments block provides a unique and streamlined view of assignment submissions to help you manage them with ease. You can easily search for assignments by lesson or topic. Additionally, you can filter them by course to quickly find the specific assignments you’re looking for.
7. **Essays:** The Essays block provides a unique and streamlined view of student essay submissions to help the admin and instructor manage essay submissions more efficiently. You can easily search for essays and filter them by course or quiz to quickly find the specific ones you’re looking for.
8. Quiz Attempts: The Quiz Attempts block allows instructors and administrators to easily access and review all student quiz attempts directly. You can also filter quizzes by group, course, quiz name, learner, or date of attempt.
9. **Comments**: The Comments block allows users to efficiently manage and navigate comments across courses, lessons, topics, quizzes, essays, and assignments. You can also bulk approve or delete multiple comments at once.
10. Course reports: The course report block allows you to track learner activity, view progress, and analyze the overall effectiveness of your courses. The Course Reports section in the Frontend Dashboard makes it easy to monitor and manage your courses with clear, detailed insights.
11. Groups: The Group block allows you to easily manage and keep track of groups of learners. This is especially helpful for schools, organizations, or training programs where students are divided into groups. It lets you see how well each group is doing, track their progress, and review their overall performance.
12. Certificates: The Certificates block in the Frontend Dashboard is where you can manage and view certificates earned by students. This is particularly useful for tracking which learners have completed their courses or quizzes and earned the certificates. You can also filter the certificate by date and includes the option to bulk delete certificates.
13. **Settings**: A settings tab for instructors to configure their profile info, email notification, and Paypal info for payouts.

## Configuring the Frontend Dashboard using the Onboarding Wizard

### Welcome Screen

Upon installation or updating the plugin, you will be greeted with a dashboard onboarding pop-up to set up your frontend dashboard. Click on the Configure button to proceed.

Even if you close the welcome pop-up, you can still configure Frontend Dashboard by going to LearnDash LMS > Instructor > Dashboard Settings

### Frontend Dashboard Configuration

You will be directed to the Frontend Dashboard Configuration page.

![](blob:https://learndash.com/7c784e04-cd46-46c6-922b-02a768f242be)

Here, you can configure various settings related to the Frontend Dashboard, including:

1. **Adding a link to the frontend dashboard in the primary menu for instructors**: A link titled Instructor Dashboard will be added to the header of your site. It will redirect users to the frontend dashboard if the Backend (WordPress) Instructor Dashboard (refer below) is disabled, or else it will redirect the users to the Backend (WP) Instructor Dashboard
2. **Redirect Instructor to frontend dashboard upon login**: Seamlessly guide instructors to their frontend dashboard upon login, eliminating the need for backend access and ensuring a focused and user-friendly experience
3. **Select Dashboard Option:** You can select any page or choose the default Frontend Dashboard page in this setting.
4. **Disabling the Backend (WP) Instructor Dashboard**: This will completely restrict instructors’ access to the backend of your site. The Instructor will not be able to access their Backend (WordPress) Instructor dashboard and will be redirected to the site’s homepage if they try to access their backend dashboard at: www.your-site-name.com/wp-admin.

**Note:** If you want to change any of these settings later, you can do so by going to the Dashboard Settings page.

Take your time configuring these settings according to your preferences. Once you’re done, click on the **Create Dashboard** button to create a new page for the frontend dashboard. A new page will be created automatically and saved in your draft.

### Customize Frontend Dashboard and publish the page

You will be taken to the next step depending on whether the Gutenberg editor is disabled on your site.

If you have not disabled Gutenberg editor on your site, you can take advantage of the powerful page builder to edit the dashboard page along with accessing all the customization settings provided with our frontend dashboard

Once you click on Create Dashboard, you will be directed to the new dashboard edit page. Here, you will find a default preset Frontend Dashboard Gutenberg Blocks pattern already added to the page

![](blob:https://learndash.com/cfa1ddd4-60a8-46aa-ac0b-450eadbf3fd6)*Before Launching Frontend Dashboard Page*

Feel free to customize the frontend dashboard Gutenberg blocks (Refer here to learn about how to [Customize the dashboard](https://learndash.com/support/kb/add-ons/instructor-role/how-to-customize-the-frontend-dashboard-gutenberg-editor-and-global-settings/) in detail) as per your requirements. Below is a quick overview of different customization settings:

1. The Frontend Dashboard is made of Gutenberg blocks. It consists of a dashboard builder block called Dashboard Tabs which creates the dashboard layout, and all other instructor dashboard tabs in it are made of a Gutenberg block each
2. Rearrange the tabs as required. Create as many custom tabs as needed to share relevant content or provide access to any functionalities to the instructors
3. To change the appearance, explore the typography and color settings under the Dashboard Tabs block settings. Choose from a selection of fonts, color preset, or create a custom color pattern to achieve your desired look.
4. Go to the Instructors overview tab block and hide any of the sections not relevant to your needs
5. Set the page template. By default, a Dashboard template is selected, which is specially designed for a dashboard page. But you can choose any other page template provided in your theme

Once you’re satisfied with the changes, click the **Publish** button to make the frontend dashboard live.

Thats it! After publishing, you will be automatically redirected to your newly created frontend dashboard page. From here, instructors can easily manage their courses and quizzes, providing a seamless and user-friendly experience.

**Note:** If, for some reason you have disabled the Gutenberg Editor, you can still customize the dashboard using the Global settings provided here LearnDash LMS > Instructors > Dashboard Settings.

## Global Settings

The global settings are designed for sites that do not utilize the Gutenberg block editor, such as those still using the Classic Editor or add-ons to disable the block editor. By default, the global settings are disabled if your site has Gutenberg Editor enabled.

![](https://learndash.com/support/wp-content/uploads/2024/04/image-24.png)

If you have Gutenberg editor disabled on your site, you can access the Global settings to customize the Dashboard.

1. The Menu Settings tab provides a setting that allows you to hide any tab on the dashboard, thereby restrictingthe  instructor’s access.

![](https://learndash.com/support/wp-content/uploads/2024/04/image-21-800x505.png)

1. The Overview page settings allow you to hide any of the options on the Overview page of the dashboard

1. The Appearance settings allow you to style the dashboard by either selecting provided color presets or creating your own custom color palette. Additionally, you can set the type font and font size styles for the dashboard. You can also upload and adjust all the settings for the logo, like image upload, alignment, and Background Color.

**Note:** When using global settings, these settings are only applied to the page set as the frontend dashboard page in the Frontend Dashboard Page setting.

## Deleting the Frontend Dashboard Page

You can find the frontend dashboard page created via the above onboarding wizard by going to the WordPress Dashboard > Pages > Instructor Dashboard. You can delete/edit the page from here.

## Creating a new Frontend Dashboard page

If, by chance, you have deleted the Frontend dashboard page initially created with the [onboarding wizard](https://wisdmlabs.com/docs/article/wisdm-instructor-role/ir-features/frontend-dashboard-installation-guide/#how-to-configure-the-frontend-dashboard-using-onboarding-wizard) when you first activated the plugin and want to create a new dashboard page, follow the steps below:

### Quick Link: Create a new dashboard page

You can find the quick setup wizard to create a new dashboard page on the WordPress Admin dashboard > LearnDash LMS > Instructor > Dashboard Settings. Click on the + New Dashboard. It will automatically create a new page with the frontend dashboard configured in it, and you will be redirected to the page in the edit mode

Along with creating this new page, it will automatically be set as the default Frontend Dashboard page for Instructors and Admin.This page is where all the redirection and global customization settings (if Gutenberg editor is disabled) are available in the plugin when applied to.

If you have created multiple dashboard pages and wish to keep other dashboard pages as default, then select the preferred page in the **Select Dashboard** dropdown. Don’t forget to click on **Save Settings** button after all changes are done

### Create the Frontend Dashboard page from scratch using Gutenberg Editor

Let’s see how you can create a new dashboard page without using the [quick setup wizard](https://wisdmlabs.com/docs/article/wisdm-instructor-role/ir-features/frontend-dashboard-installation-guide/#quick-link-create-a-new-dashboard-page) discussed above.

#### Create a new page

1. Go to the WordPress Dashboard > Pages
2. Click on **Add New** to create a new page

#### Add Frontend Dashboard pattern

Once you are on the page editing area, click on the **+** in the top right and go to patterns. You will find the Frontend Dashboard pattern under the Instructor Role category. Click on the pattern, and it will get added to the page.

## Add Instructor Dashboard Blocks Individually

If you prefer to add the Instructor Dashboard Blocks individually instead of using the dashboard pattern mentioned above, follow these steps:

1. **Dashboard Builder block**: Click on the + icon on the top right corner, search for Dashboard Tabs block and add it to the page. This block helps you build any kind of dashboard.
2. **Create Dashboard Tab:** Once you have added the Dashboard tabs block, click on the + icon in the block to create dashboard tabs. Give a name to the tab and select an icon for it.
3. **Add Instructor Blocks:** Once you have created a dashboard tab, you can add any kind of content/Gutenberg blocks to it. To create our Instructor dashboard, add the Instructor Overview block to the overview tab we created earlier. Similarly, you can add all other tabs and add the relevant instructor dashboard blocks

## Set as default Instructor Frontend Dashboard

Once you have configured the dashboard, click on **Publish** to make the page live. Now you need to set this page as your default frontend dashboard for instructors and admin if you want all the redirection settings available in the plugin applied to it. Go to LearnDash LMS > Instructors > Dashboard settings.

In the select frontend dashboard page, choose the page you have created the dashboard on and click on save settings below

Congratulations! You have successfully installed and set up the Frontend Dashboard plugin. Enjoy the convenience and efficiency of managing your courses and learners directly from the frontend of your website. If you have any further questions or need assistance, please refer to our other documentation or reach out to our support team for help. Happy teaching!

---

## Frontend Quiz Creator

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/the-frontend-quiz-creator/](https://learndash.com/support/kb/add-ons/instructor-role/the-frontend-quiz-creator/)

The Frontend Quiz Creator allows theAdministratorsandInstructorsto create and edit LearnDash quizzes on the frontend of the website.

## Activating Frontend Quiz Creator

- The Frontend Quiz Creator depends on the Frontend Course Creation (FCC) setting.
- Admin can activate/deactivate FCC from WP dashboard LearnDash LMS Instructors Frontend Course Creator

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/02/image-1024x496.png)The Frontend Course Creator Settings

**IMPORTANT:** In order for the Frontend Course and Quiz Creator to function, your permalink structure must be set to [pretty permalinks](https://wordpress.org/documentation/article/customize-permalinks/#pretty-permalinks) (i.e anything except plain permalink structure), and you must save the permalink settings again after enabling the Frontend Course Creator.

**NOTE:** In case you already had the Frontend Course Creator settings enabled, you may still have to save your permalinks again after the Frontend Quiz Creator update.

## Settings

### Enable Frontend Course Creator

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/02/image-1.png)Enable FCC setting

Enabling this setting will add anEdit via Frontend Quiz Creatoroption in the quiz edit menu (Image below) and add a buttonAdd new via Frontend Quiz Creator beside LearnDash’s Add New button

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/03/image-1024x374.png)Add new and edit via Frontend Quiz Creator

## Accessing the Frontend Quiz Creator

As per the above-configured settings, the Instructors /Admins can create/edit a quiz

- From the Quiz Listing page
- Theinstructorcan go to theInstructor Dashboard Quizzes Edit Via Frontend Quiz Creator / Add new via Frontend Quiz Creator
- Theadministratorcan go toWP Dashboard Quizzes Edit Via Frontend Quiz Creator / Add new via Frontend Quiz Creator
- From the Frontend Course Creator while creating/editing a course
- Go to the builder tab in the Course creator and click on Add New Quiz or edit existing quizzes added to the course content

## Using the Frontend Quiz Creator

### Create a Quiz

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/03/image-1-1024x502.png)New Quiz using FQC

- To create a new quiz click on theAdd new via Frontend Quiz Creator Buttonon the Quizzes listing page
- This will make a draft quiz and take you to the frontend quiz creator to add all the content and configure the settings to create the quiz.
- As shown below you can also create a new quiz from the Frontend Course Creator while creating/editing a course by clicking on theAdd New QuizButton

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/03/image-2-836x1024.png)Add new Quiz from FCC

- On clicking the button, a new modal will open to enter the name of the Quiz.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/03/image-3-1024x307.png)Add New Quiz Modal

- After clicking onAdd,anew quiz will be added to the builder, and the frontend Quiz Creator will open in a new tab
to edit the new quiz.

### Edit a Quiz

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/03/image-4-1024x502.png)Edit Quiz from FQC

To edit a quiz using the Frontend Quiz Creator you can click theEdit via Frontend Quiz Creator Link by hovering over the quiz title on the quiz listing page.

## Quiz Builder

### The quiz builder allows:

- Organizing the quiz questions
- Adding new questions or using existing questions to create a quiz

Note: Currently, Single choice, Multiplechoice, Fill in the blank, Assessment (survey)  and Essay (open-answer) question types can be created and edited from the Frontend Quiz Builder. All other types of existing questions can be added via the Question library but such questions cannot be created/edited via the Frontend quiz creator as of now.

## Organizing the Quiz questions

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/03/image-5-1024x468.png)Questions Builder Page

You can manage questions from the Quiz Builder Tab and perform the following actions

## Create New Question or Edit the Question

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/03/image-7-1024x614.png)Create New Question Modal Part 1

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/03/image-6-1024x606.png)Create New Question Part 2

- You can create a new question by clicking onAdd New Questionbutton.
- A modal opens up to configure the Question and Answer settings.

---

## Frontend Course Creator

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/the-frontend-course-creator/](https://learndash.com/support/kb/add-ons/instructor-role/the-frontend-course-creator/)

## The Frontend Course Creator
The Frontend Course Creator allows the**Administrators**and**Instructors**to create and edit a LearnDash course on the frontend of the website.

### Activating Frontend Course Creator (FCC)

- Admin can activate/deactivate FCC from WP dashboard LearnDash LMS Instructors Frontend Course Creator
- Frontend Course Creator Setting Tab

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/02/image-1024x496.png)The Frontend Course Creator Settings
**Important:**In order for the Frontend Course Creator to function, your permalink structure must be set to[pretty permalinks](https://wordpress.org/documentation/article/customize-permalinks/#pretty-permalinks)(i.e anything except plain permalink structure), and you must save the permalink settings again after enabling the Frontend Course Creator.

### Settings

#### Enable Frontend Course Creator

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/02/image-1.png)Enable FCC setting

Enabling this setting will add an**Edit via Frontend Course Creator**option in the course edit menu (Image below) and add a button**Add new via Frontend Course Creator**beside the LearnDashs Add New button

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/02/image-2-1024x300.png)Add new and edit via FCC

#### Disable LearnDashs Backend Course Creator for Instructors

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/02/image-3.png)Disable LD course creator for instructors
- Enabling this setting will**Remove the Edit and Add New**option for the default LearnDash Course Builder and**Rename the Frontend Course Creator**actions**as Edit and Add New**
- This setting will appear and be enabled by default when the primary setting (Enable Frontend Course Creator) is enabled.

#### Appearance Settings

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/11/Fcc-appearance-setting-sync-button-1024x476.png)Sync button for FCC and Frontend Dashboard
- The**Sync Button**is a powerful new feature in our product that allows you to*synchronize your frontend dashboards color themes, font size, and font family with the Frontend Course Creator (FCC) color theme*.
- This feature ensures a consistent look and feel for your dashboard, and if enabled, it will automatically apply the synchronization whenever the frontend dashboard is updated or you save your settings on the Frontend Course Creator Settings page.
- When the Sync Button is turned ON, any Color or Font updates made to your Frontend dashboard will trigger automatic synchronization with the Frontend Course Creators color theme, font size, and font family. This ensures that your dashboards color theme remains compliant with Frontend Course Creator without manual changing it.
- This setting will appear and be**enabled by default**when the primary setting (Enable Frontend Course Creator) is enabled.

### Accessing the Frontend Course Creator

As per the above-configured settings, the Instructors /Admins can create/edit a course from

- The**instructor**can go to the*Instructor Dashboard Courses Edit Via Frontend Builder / Add new via Frontend Builder*

- The**administrator**can go to*WP Dashboard Course Edit Via Frontend Builder / Add new via Frontend Builder*

### Using the Frontend Course Creator

#### Create a Course

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/02/image-4-1024x606.png)New Course using FCC
- You can create a new course by clicking the**Add new via Frontend Course Creator Button**
- This will make a draft course and take you to the frontend course creator to add all the content and configure the settings to create the course.
- Frontend Course Creator is now[Elementor Compatible](https://wisdmlabs.com/docs/?post_type=ht_kb&p=6254),

that allows administrators and instructors to access the Elementor editor directly from the frontend of your course creation platform. This feature provides a seamless and user-friendly way to create, edit, and manage course content while limiting backend access and still providing full Elementor support.

### Edit a Course

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/02/image-6-1024x733.png)Editing a course using FCC
To edit a course using the Frontend Course Creator you can click the**Edit via Frontend Course Creator**Link by hovering over the course title on the course listing page.

### The Frontend Builder

The Frontend Builder allows

- Organizing the course structure
- Adding new lessons and topics or using existing lessons and topics to create a course
- Adding existing quizzes to the course.
- **Note:**Currently, new quizzes cannot be created directly from the frontend course creator. You will have to create a course using LearnDashs backend Quiz builder and add those later in the course from here

### Organizing the course structure

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/02/image-8-1024x479.png)Manage course steps using FCC

### Adding and Editing Lessons/Topics

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/02/image-7-1024x582.png)Add a new lesson screen using FCC

### Editing existing lessons and topics

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/02/image-9.png)Edit lessons and topics using FCC

### Course Settings

All the LearnDash course settings for configuring a course are available in the Frontend Course Creator. To know more about the setting refer[here](https://learndash.com/support/docs/core/courses/)

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/02/image-10-1024x486.png)Course settings using FCC

### Limitations

All the following limitations will be**resolved in the upcoming release soon!**

- New quizzes and questions cannot be created directly from the frontend course creator, only existing quizzes can be added to the course via the frontend course creator. You will have to first create a Quiz from Learndashs Quiz builder to add it to the course via the frontend course creator
- For Courses, Lessons, and Topics new categories and tags cannot be directly created by the frontend course creator. You can create the course tags and categories from the Courses listing page > Actions
- Multiple Instructors: If the admin is not the course author then they cannot assign multiple instructors for the course via the frontend course creator, only the course authors — be it an admin or the instructor who create the course — will be able to do it.

---

## Instructor Role Menu Settings

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/menu-settings/](https://learndash.com/support/kb/add-ons/instructor-role/menu-settings/)

With the Instructor Role Menu Settings in LearnDash, you can easily customize what instructors see and access in their dashboard. This helps create a simpler, more focused environment by showing only the tools and features Instructors need. It’s a simple way to enhance the instructor experience and ensure they have everything they need to succeed.

Start by going to your WordPress dashboard > LearnDash LMS > Instructor > Dashboard Settings.

![Instructor Role Menu Settings](https://learndash.com/support/wp-content/uploads/2024/04/Instructor-role-menu-settings.webp)Instructor Role Menu Settings

## Menu Settings

Let’s dive into the details for customizing the Instructor Role Menu. You can reorder, hide, or restrict menu items, as well as add custom links to tailor the sidebar to your instructors’ needs, enhancing usability.

### Default Instructor menu

The Instructor Role Dashboard contains five menus by default:

- LearnDash LMS
- Products (This menu will be only active if dependent plugins are active)
- Profile
- Comments
- Logout

### Instructor menu actions

Menus in the Action Drawer can now be hidden or restricted using the Hide Settings option. When a menu is marked to be hidden, it will no longer appear in the menu, but it will still be accessible via its direct URL. If a menu is hidden, a specific tooltip will appear, indicating its status. If the menu is both hidden and restricted, a different tooltip will be displayed to show that the menu is not accessible.

### Adding a Custom Menu

Custom Menu creation allows you to build a menu with the elements that suit your instructors’ needs best.

#### Menu Title

The Menu Title field is a required field. You’ll want to include a title that helps describe the purpose of the menu.

![Instructor Role Menu Settings](https://learndash.com/support/wp-content/uploads/2024/04/instructor-role-add-new-custom-menu.webp)Instructor Role Menu Settings

#### Menu URL input

The URL field is a required field that needs a valid URL.

![Menu URL can't be empty](https://learndash.com/support/wp-content/uploads/2024/04/menu-url-cant-be-empty.png)Menu URL can’t be empty

#### Menu icon input

You have the option to include dash icons in menus. If this is left blank, the system will use a default embedded dash icon.

#### Default menu dash icons

![Dash Icons](https://learndash.com/support/wp-content/uploads/2024/04/dash-icons.png)

You can refer to the [WordPress documentation for a dash icons reference](https://developer.wordpress.org/resource/dashicons/).

### Updating Custom Menus

Once a custom menu is added to the Menu List it can be edited.

**NOTE:** If you use the URL of a new submenu that matches an existing submenu’s URL, the submenu list of the existing menu will be replaced by the submenu list of the current menu. This means the new submenu will overwrite the previous submenu list under that URL.

### Deleting Custom Menus

To delete custom menus, click the trash button, and a confirmation prompt will appear. Once confirmed, the item will be removed from the menu list. Remember to save your changes for the deletion to be applied and persist in the menu settings.

![](https://learndash.com/support/wp-content/uploads/2024/04/backend-menu-settings.png)

### Submenu settings

Submenus can be customized by setting titles, defining URLs, or by adding new submenus where they are most helpful.

Click the Add Submenu button beneath the highlighted option in the main menu list to create a submenu. The submenu title field and URL field are required and cannot be left blank. Make sure you use a valid URL, just like you would in a Main Menu.

Submenus can be edited in the same way that Menus are edited and updated.

#### Deleting Submenus

![Instructor Dashboard submenus](https://learndash.com/support/wp-content/uploads/2024/04/instructor-dashboard-submenus.png)

#### Deleting a Menu and its Associated Submenus

If a user decides to delete a menu, it will be erased along with all of its sub-menus.

---

## Instructor Role Overview Settings

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/overview-settings/](https://learndash.com/support/kb/add-ons/instructor-role/overview-settings/)

Instructor roles new overview settings enable us to hide and show all the available blocks on the instructor overview page as listed below.

- Course block
- Student block
- Products block
- Earnings block
- Course Reports block
- Submissions block

## All Block Hidden Message settings

What we see below is the default message that is shown when all the blocks are disabled. We provide functionality to edit this default message

![All block hidden message settings](https://learndash.com/support/wp-content/uploads/2024/04/all-block-hidden-message-settings.png)

## Reset settings

By default, if the user desires to reset all of the settings, he will be requested for confirmation, and once confirmed, all data will be returned to defaults.

The default behaviour permits all overview blocks to be active/on, and the default dashboard input message is empty (no content to display in the overview settings).

## Default settings

![](https://wisdmlabs.com/docs/wp-content/uploads/2022/10/Screenshot-2022-10-17-at-4.43.52-PM-1016x1024.png)

---

## Instructor Role Navigation Settings

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/navigation-settings/](https://learndash.com/support/kb/add-ons/instructor-role/navigation-settings/)

After various updates, we have added a bunch of settings in the Instructor Role Menuthat make navigating around the plugin pages easier for both the admin and the Instructor.So, we request you to go through this article below and address the changes the plugin has to offer and how it can benefit each and every one of you.

## The URLs to access

- **Instructor Dashboard:** 
```
{SITE_URL}/instructor/wp-admin/admin.php?page=ir_instructor_overview
```

Example: 
```
https://instructorrole.wisdmlabs.com/wp-admin/admin.php?page=ir_instructor_overview
```
- **Instructor Profile:** 
```
{SITE_URL}/instructor/{user_display_name}
```

Example: 
```
https://instructorrole.wisdmlabs.com/instructor/emma/
```

## Instructor Dashboard Menu

The Instructor Dashboard Menu can be set up from [here](https://wisdmlabs.com/docs/article/wisdm-instructor-role/ir-features/instructor-dashboard-menu/). After the plugin is installed for the first time, the Instructor Role plugin, the Instructor Dashboard Menu, and the Primary Menu of the site will be synchronized and the Instructors will see the Primary Menu of your site on the Instructor Dashboard. This synchronization will take place for the themes listed below:

- Kadence
- BuddyBoss Theme
- Twentwentyone
- Twentytwenty

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5742e900c697917290ddb8d5/images/63f5ccdc0064af3c7159e0fd/file-eWSpdklvSh.png)

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5742e900c697917290ddb8d5/images/63f5cc8b188a9d242a7d5b7e/file-QfgGmn4Amp.png)

## Instructor Login Redirect

The administrator may now choose where the instructor will land after logging in successfully.
This Setting allows theAdminto selectany pageon the site where the Instructor will be redirected post login.When the plugin is first activated and installed, this setting is checked on by default and it will redirect the Instructors automatically to the Dashboard by default.And, If you are handling redirections from another third-party plugin or want the default WordPress login behavior to be followed, you can simply disable the Setting from LearnDash LMS > Instructor > Settings > Instructor Login Redirect.

## Add the Instructor dashboard link to the primary menu

The above image also displays a Setting, Add the Instructor Dashboard Link to the Header Menu.This will display the Instructor Dashboard link on the Primary Header Menu of your site and will be visibleonlyto your Instructors.
The following themes that support this feature are:

- Kadence
- BuddyBoss Theme
- Twentwentyone
- Twentwenty
- eLumine

## Preview Settings for the Admin

The Admin can also Preview the Instructors Dashboards and Profiles right from the WordPress Dashboard. Navigate to LearnDash LMS > Instructor > InstructorsTab and for each Instructor, you will see the 2 links

- **View Instructors Profile**: This will open the respective Instructors Profile in a new tab. So, make sure you switch on the Instructor Profile Setting from the Profile Tab in the same area to make sure the admin can easily preview the Instructors Profile.
- **View Instructors Dashboard**: This will allow Admin to temporarily log in as the Instructor and you can then visit the respective Instructors Dashboard to preview it and check how things are set up. The Admin can also switch back by clicking on the Switch to Admin Link while on the Instructor Dashboard as shown below.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5742e900c697917290ddb8d5/images/63f5ccfe0064af3c7159e0ff/file-Wy3nOgqRVq.png)

## Profile links

The link to the Profile Page of an Instructor is displayed in multiple locations that makes it convenient for both the admin and Instructor to visit the Profile Page.

### As an Admin:

The admin can also view the profile of an Instructor from the Edit User page under Users > All Users > Edit User (for a user who is an Instructor) on the WordPress dashboard and as shown below the Admin can visit both the dashboard and profile of that respective Instructor.

### As an Instructor

The Instructors on your site can also visit their own Profile by clicking on on the Profile Tab on their Instructor Dashboard and link to View their own Profile will be displayed there as shown below.

---

## Commission Logs

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/commission-logs/](https://learndash.com/support/kb/add-ons/instructor-role/commission-logs/)

Commission logs help you as an admin keep track of the payments you have made to your instructors. Along with recording the logs you can also edit, delete and export the commission logs.

## How Commission Logs are recorded

An important note first, the commission logs are only recorded and the below actions are only performed on manual commission recorded. Once an admin records a manual commission payment, the payouts transaction history table shown below will record the commission payment log in the manual tab.

![Manual commission log table](https://learndash.com/support/wp-content/uploads/2024/04/Manual-commission-log-table.png)Manual commission log table

Now, you can also add notes while recording a commission payment.

![Notes for manual commission transactions](https://learndash.com/support/wp-content/uploads/2024/04/Notes-for-manual-commission-transactions.png)Notes for manual commission transactions

The admin will be able to see the notes along with the other details in the manual payouts logs table.

## Edit Commission Logs

The admin can edit an existing commission log entry by clicking on the pencil icon in the actions column against the commission log. This will open a modal where you can edit the date, amount and notes for that specific commission log. Following are the restrictions when adding/editing a commission log:

- The amount cannot be more than what the instructor is owed.
- The note length cannot exceed a character limit of 255 characters.
- You cannot choose any future dates.

![Edit Commission Log Modal](https://learndash.com/support/wp-content/uploads/2024/04/Edit-Commission-Log-Modal.png)Edit Commission Log Modal

After updating the fields click onSubmitto update the commission log.

## Delete Commission Logs

To delete a Commission log entry click on the cross mark in the actions column against the Commission log. This will open a confirm box. To confirm the deletion of the commission log click on OK or click on Cancel to cancel it.

---

## Instructor Role Color Schemes

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/color-schemes/](https://learndash.com/support/kb/add-ons/instructor-role/color-schemes/)

![Instructor dashboard with preset 1 set](https://learndash.com/support/wp-content/uploads/2024/04/preset-1.png)Instructor dashboard with preset 1 set

Instructor Role gives Administrators the ability to set color schemes for their Instructor Dashboard.

The color schemes provide a list of basic presets along with a custom preset giving an option to choose your own colors for certain instructor dashboard areas and elements.

Once you visit the page, you can scroll andTogglethe Color Schemes to enable them

![Color Scheme presets](https://learndash.com/support/wp-content/uploads/2024/04/image-1-1.png)Color Scheme presets

- Select a preset for your instructor dashboard and click on Save.
- Or, Choose your own colors by making use of the custom preset and then set the colors for the different sections and elements on the instructor dashboard.

![Custom Preset options](https://learndash.com/support/wp-content/uploads/2024/04/image-2-1.png)Custom Preset options

### Header Settings

Configure whether or not to display your logo or some text on the instructor dashboard from the header settings section. You have various options to either set the Logo as an Image or Text.

### Setting Image Logo

Select Image as the header type and upload your Logo image

![Setting an image as a logo on Instructor Dashboard](https://learndash.com/support/wp-content/uploads/2024/04/file-LsDznt78ah.png)Setting an image as a logo on Instructor Dashboard

![Instructor Dashboard Settings Menu](https://learndash.com/support/wp-content/uploads/2024/04/image-18-1.png)Instructor Dashboard Settings Menu

- Toggle the Color Schemes to enable them

![Color Scheme presets](https://learndash.com/support/wp-content/uploads/2024/04/Color-Scheme-presets.png)Color Scheme presets

- Select a preset for your instructor dashboard and click on save.
- Choose your own colors by making use of the custom preset and then setting the colors for the different sections and elements on the instructor dashboard.

![Custom Preset options](https://learndash.com/support/wp-content/uploads/2024/04/Custom-Preset-options.png)Custom Preset options

---

## Instructor Dashboard Settings

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/instructor-dashboard-settings/](https://learndash.com/support/kb/add-ons/instructor-role/instructor-dashboard-settings/)

After the major release of v4.0.0+, the Admin Customizer has been removed and replaced with a new and improved Instructor Dashboard layout.

![The new and improved Instructor Dashboard](https://learndash.com/support/wp-content/uploads/2024/04/file-o9UOI9ILyp.png)The new and improved Instructor Dashboard

Additionally, a new menu setting is available in the Appearance menu for Administrators called the Instructor Dashboard Settings

![Under Appearances find the Instructor Dashboard Settings menu](https://learndash.com/support/wp-content/uploads/2024/04/file-yMqyREYCbg.png)Under Appearances find the Instructor Dashboard Settings menu

Admins can use these various settings to customize the Instructor Dashboard view.

---

## Multiple Instructors Shortcode

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/multiple-instructors-shortcode/](https://learndash.com/support/kb/add-ons/instructor-role/multiple-instructors-shortcode/)

### The multiple instructors shortcode is helpful in displaying all the instructors specific information on the course page.

- Displays a list of all course instructors with their avatar and names along with a link to the author profile page: **[all_instructors]**

- Controls whether to display the instructor image or not. If the parameter is not specified it will always display the instructor image: 
```
[all_instructors display_img=0]
```

- Controls the size of the instructor avatar image to be displayed in pixels. If the parameter is not specified it would always display the instructor image of 32 pixels: 
```
[all_instructors size=32]
```

- Controls whether to display the instructor name or not. If the parameter is not specified it would always display the instructor name: **[all_instructors display_name=0]**

- Controls how many instructors to display on the page. If the parameter is not specified it would always display at most 2 instructor details: 
```
[all_instructors visible=3]
```

- If you only wish to display the names of the shared course instructors then set this parameter value to 1. If the parameter is not specified it will display all course instructor details: 
```
[all_instructors exclude_author=1]
```

- To use the shortcode on any other pages, make use of the course_id parameter to specify the relevant course: **[all_instructors course_id=36]**

## Course Page

Add the below shortcode to the course content to display all its related course instructors on the course page.

![Course Edit Page](https://learndash.com/support/wp-content/uploads/2024/04/image-10-1.png)Course Edit Page

![Frontend Instructor List View](https://learndash.com/support/wp-content/uploads/2024/04/image-11.webp)Frontend Instructor List View

## Course Grid

If you are using the [LearnDash Course Grid](https://www.learndash.com/add-on/course-grid/) add-on then you can make use of the following code snippet to display the instructor list on the course list page.

```
if ( ! function_exists( 'ir_custom_add_instructor_details' ) ) {
	/**
	 * Add course instructor details in course list
	 *
	 * @param array $data
	 * @param object $post
	 * @param array $shortcode_atts
	 * @param int $user_id
	 *
	 * @return string
	 */
	function ir_custom_add_instructor_details( $data, $post, $shortcode_atts, $user_id ) {
		if ( learndash_get_post_type_slug('course') == $post->post_type ) {
			$instructor_data = '<div style="padding: 10px;">'.do_shortcode( "[all_instructors course_id='{$post->ID}']") . '</div><div class="caption">';
			$data = str_replace( '<div class="caption">', $instructor_data, $data );
		}
		return $data;
	}
	add_filter( 'learndash_course_grid_html_output', 'ir_custom_add_instructor_details', 10, 4 );
}
```

---

## Student Teacher Communication

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/student-teacher-communication/](https://learndash.com/support/kb/add-ons/instructor-role/student-teacher-communication/)

Do you know what to do when a Student has a course-related question to ask? Yes, the plugin has a new Student-Teacher Communication feature that helps students communicate with a course instructor from the lesson or topic page itself.

## Pre-requisites

Listed below are the prerequisites, you will need to use the student communication feature:

- The [BuddyPress](https://buddypress.org/) plugin should be installed and activated
- The private messaging module must be enabled in Buddypress

If you are using the [BuddyBoss](https://www.buddyboss.com/) theme, then instead of the BuddyPress plugin you need to have the [BuddyBoss Platform](https://www.buddyboss.com/platform/) add-on installed and activated.

## Settings

To enable the student-teacher communication feature, go to LearnDash LMS > Instructor > Settings, check the  Student Communication****checkbox, and save the updated settings.

![Enable student communication setting](https://learndash.com/support/wp-content/uploads/2024/04/file-FFPIrgJct2.png)Enable student communication setting

**NOTE:** The student-teacher communication only works with the **LearnDash 3.0** Template with **Focus mode** enabled so make sure you have them enabled from **LearnDash LMS Settings**.

![LearnDash Active Template Setting
](https://learndash.com/support/wp-content/uploads/2024/04/file-JnWg6B5ffr.png)LearnDash Active Template Setting

### Communicate with Instructors

Once you have all the settings properly configured, the students will be able to communicate with the course instructors for any course lesson or topic from the lesson or topic page itself.

### Sending new Doubts

A user can send a new doubt related to a lesson/topic of a course from the button at the bottom right corner.

![Send new doubt button](https://learndash.com/support/wp-content/uploads/2024/04/file-TjizHJgcK4.png)Send new doubt button

After clicking on the button, click on theSend your doubtsbutton to send a new doubt.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5742e900c697917290ddb8d5/images/63f5c60db7da6b15a7ea196f/file-SaRr2Co5n8.png)Send your doubts button**

This will open up a new pop-up box for students to write the subject and description of their query along with the related lesson and topic. The lesson and/or topic will be pre-selected for the current lesson/topic.

![Send new doubt modal](https://learndash.com/support/wp-content/uploads/2024/04/file-NmYbunYFEW.png)Send new doubt modal

Click on Send to send your doubt to the instructor.

### Replying to Doubts

Instructors will be able to see all the doubts in the Buddypress private message inbox. They can send replies to user doubts from there.

![Buddypress Private Message Inbox](https://learndash.com/support/wp-content/uploads/2024/04/image-5.png)Buddypress Private Message Inbox

Users can then View the instructors reply and continue the conversation from the lesson/topic page itself.

![](https://learndash.com/support/wp-content/uploads/2024/04/image-7.webp)View and reply to instructor doubts from the lesson/topic page.

Students can also have multiple doubts about the same lesson/topic. Clicking on the bottom right button will open a list of all threads for the current lesson/topic. Click on the thread to load the conversation in the pop-up box.

![](https://learndash.com/support/wp-content/uploads/2024/04/image-8.webp)Reply to instructors reply from the pop-up box

### View all Doubts

Users can also see a list of recent doubts across all courses from the header. Clicking on a thread here will take the user to the Buddypress private message inbox.

![](https://learndash.com/support/wp-content/uploads/2024/04/image-9.webp)

---

## Instructor Comments Access

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/instructor-comments-access/](https://learndash.com/support/kb/add-ons/instructor-role/instructor-comments-access/)

Instructors have the ability to view and reply to comments posted by students on their courses, lessons, topics and quizzes. A Comments menu item located in the Instructor Dashboard allows instructors to view all the comments on their course content. Instructors can Approve valid comments, Spam or Trash invalid ones, Edit and Reply to them directly from the Instructor Dashboard itself.

![Comments screen on Instructor Dashboard](https://learndash.com/support/wp-content/uploads/2024/04/file-9yZUkGTNxp.png)Comments screen on Instructor Dashboard

---

## Instructor Groups Access

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/instructor-groups-access/](https://learndash.com/support/kb/add-ons/instructor-role/instructor-groups-access/)

The Instructor Role plugin supports and provides access to various LearnDash groups-related options for instructors like creating courses/lessons and topics and managing their enrolled students.

![Group listing screen on Instructor Dashboard](https://learndash.com/support/wp-content/uploads/2024/04/Group-listing-screen-on-Instructor-Dashboard.png)Group listing screen on Instructor Dashboard

Instructors have the ability to create and manage groups similar to a LearnDash Group Leader.

![](https://learndash.com/support/wp-content/uploads/2024/04/file-GnL60L5bPJ.png)

Instructors can create new groups and add any student enrolled in any courses created by therespective Instructoror shared with that Instructoronly.

![](https://learndash.com/support/wp-content/uploads/2024/04/file-yemJItdrXt.png)

![](https://learndash.com/support/wp-content/uploads/2024/04/file-j4DOM47VG7.png)

Instructors can then also assign themselves or any other group leader as a group leader for their groups.

---

## Review Instructor Course Updates

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/review-instructor-course-updates/](https://learndash.com/support/kb/add-ons/instructor-role/review-instructor-course-updates/)

As a website owner you would like your instructors to not update any live courses or even if they wish to do, the course should be reviewed by you or someone else. The course review feature will help you do just that. Course Reviews allow the site admin to review any changes made to any course or any course step ( i.e. Lesson, Topic or Quiz) by an instructor. Follow the below steps to set it up:

### Enable Course Review

The administrator can enable course reviews from the instructor settings fromLearnDash LMSInstructorunder the Settings Tab.

![Instructor Course Review Settings](https://learndash.com/support/wp-content/uploads/2024/04/Instructor-Course-Review-Settings.png)Instructor Course Review Settings

### Review Process

The review process allows an Instructor to review courses and publish or update content.

### Send Course for Review

Once the Review Course setting is enabled, Instructors would see a notification whenever they try toPublishorUpdatea course from either the dashboard or Frontend Course Builder.

![Course Review Dashboard View](https://learndash.com/support/wp-content/uploads/2024/04/Course-Review-Dashboard-View.png)Course Review Dashboard View

Once a course is sent for review its status is set to Draft and on the course listing page they can see a new column labeled Pending.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5742e900c697917290ddb8d5/images/63f5c1780064af3c7159e0f1/file-F41ic0nbRR.png)

### Approve Changes

To approve a pending course the Admin can see a button at the right side of the course edit page namedApprove Instructor Update.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5742e900c697917290ddb8d5/images/63f5c1f6b7da6b15a7ea196a/file-LcyIlNMxpA.png)Approving Instructor Course

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/05/image-3-1024x348.png)Approving Instructor Course from Frontend Course Builder

If the admin clicks on this button then the changes made by the Instructor in the course will be approved. The approvals can either be made on the course page or the individual lesson, topic and quiz page.

### Review and Approval Notification Emails

Every time a course is sent for review an email notification is sent to the administrator. The administrator email and the email content can be configured from the Email settings tab.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/05/image-4-1024x617.png)Course Review Email Settings

Similarly, when an administrator approves the instructor updates, an email is sent to the instructor.

The approval email content can be configured from the Email settings tab.

![](https://wisdmlabs.com/docs/wp-content/uploads/2023/05/image-5-1024x535.png)Course Approval Email Settings

---

## Instructor Role Email Settings

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/email-settings/](https://learndash.com/support/kb/add-ons/instructor-role/email-settings/)

## Email Settings

There are some settings available that can help set up various email notifications for instructors.

There are different types of email settings to help configure emails to be sent for a course or product reviews, course purchases, and quiz completion.

### Review Emails

The admin can customize the emails to be sent when a course or a product is reviewed from the LearnDash LMS Instructor Emails settings**.**

There are 2 sections for configuring review emails for Courses and Products.

![Instructor Review Email Settings](https://learndash.com/support/wp-content/uploads/2024/04/Instructor-Review-Email-Settings.png)Instructor Review Email Settings

Under each tab, there are settings to configure the review emails with shortcodes that can be used as placeholders for dynamic data related to course, product or instructors which issent to the administrator and instructor automatically.

### Quiz Completion Emails

Instructors can now also receive an email notification for quizzes taken by students. This email is sent to the course author as well as the shared course authors, if any.

To activate this feature login as the admin, go to LearnDash LMS Instructor Settings.

Check the Enable email notification for Instructors on quiz completion option.

![Enable Instructor Quiz Completion Emails](https://learndash.com/support/wp-content/uploads/2024/04/Enable-Instructor-Quiz-Completion-Emails.png)Enable Instructor Quiz Completion Emails

Instructors can also design their own email templates for the email notifications sent.

![Instructor Quiz Completion Email Settings](https://learndash.com/support/wp-content/uploads/2024/04/Instructor-Quiz-Completion-Email-Settings.png)Instructor Quiz Completion Email Settings

To create the email template, Instructors can navigate to LearnDash LMS  Instructor Email under the Quiz Completion from their Dashboard.

If this email is not configured or is empty, the admin can configure the fallback email setting under LearnDash LMS Instructor Email under the Quiz Completion Tab.

![Fallback Quiz Completion Email Settings](https://learndash.com/support/wp-content/uploads/2024/04/Fallback-Quiz-Completion-Email-Settings.png)Fallback Quiz Completion Email Settings

**NOTE:**This email will not be triggered for a specific Instructor if the corresponding email is setup on that Instructors Dashboard.

### Instructor Course Purchase Emails

Instructors can also design and receive an email notification every time their course is purchased through WooCommerce similar to what we have in the Quiz Completion Emails.

To activate this feature login as the admin, go to LearnDash LMSI nstructor Settings.

Check the Enable email notification for Instructors on quiz completion option.

![Enable Instructor Course Purchase Emails](https://learndash.com/support/wp-content/uploads/2024/04/Enable-Instructor-Course-Purchase-Emails.png)Enable Instructor Course Purchase Emails

Once the above setting is enabled, a tab setting is to the instructors under the LearnDash LMS Instructor Instructor Emails menu.

![Instructor Course Purchase Email Settings](https://learndash.com/support/wp-content/uploads/2024/04/Instructor-Course-Purchase-Email-Settings.png)Instructor Course Purchase Email Settings

Instructors can use this to design their own email template for the course purchase email notifications sent.

Also. they can access various course details to be sent in the course purchase emails using the shortcodes(placeholders) mentioned on the page.

If this email is not configured or is empty, the admin can configure the fallback email setting under LearnDash LMS Instructor Email.

![Fallback Course Purchase Email Settings](https://learndash.com/support/wp-content/uploads/2024/04/Fallback-Course-Purchase-Email-Settings.png)Fallback Course Purchase Email Settings

**NOTE:**This email will not be triggered for a specific Instructor if the corresponding email is setup on that Instructors Dashboard.

---

## Instructor Notifications

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/instructor-notifications/](https://learndash.com/support/kb/add-ons/instructor-role/instructor-notifications/)

Instructors can setup notifications using the Learndash Notifications add-on for various triggers.

It will enable various Instructors present on your website to setup custom email notifications for various triggers offered by LearnDash Notifications.

![Notifications menu view on Instructor Dashboard](https://learndash.com/support/wp-content/uploads/2024/04/Notifications-menu-view-on-Instructor-Dashboard.png)Notifications menu view on Instructor Dashboard

After our recent update of version 3.3.0, the Instructor Role plugin now finally provides compatibility with the [LearnDash Notifications](https://www.learndash.com/add-on/learndash-notifications/) Add-on.

First things first, to get the feature working on your website. we request you to make sure you have the following versions of the plugins:

- Instructor Role v3.3.0 or above
- LearnDash Notifications v1.3.0 or above

You can also select various Instructors associated with the course as a recipient for your notifications when setting up a notification.

![Instructor Recipient in Notification Settings](https://learndash.com/support/wp-content/uploads/2024/04/Instructor-Recipient-in-Notification-Settings.png)Instructor Recipient in Notification Settings

---

## Instructor Role Reports

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/reporting-3/](https://learndash.com/support/kb/add-ons/instructor-role/reporting-3/)

## Reporting

Since the Instructors are the ones who design and manage the course. So, they have a provision to check for reports of the courses they are associated with.

### View Course Reports

An instructor can view reports for courses created by going to LearnDash LMS Course Reports.

![](https://learndash.com/support/wp-content/uploads/2024/04/file-UcwVYC0ceB.png)

The report for a course is displayed using a pie chart, and details for each student enrolled for the course are displayed in a tabular format.

### Export Course Reports

The course reports can also be exported as a CSV using the Export Course Data button.

![Export Course Reports](https://learndash.com/support/wp-content/uploads/2024/04/Export-Course-Reports.png)Export Course Reports

---

## Create Learning Content And Quizzes

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/create-learning-content-and-quizzes/](https://learndash.com/support/kb/add-ons/instructor-role/create-learning-content-and-quizzes/)

Once Instructors have been added to the website, they can log in and access the Instructor Dashboard to create new courses and edit them from the Courses menu in the LearnDash LMS menu.

![](https://learndash.com/support/wp-content/uploads/2024/04/file-jacuwdPf7e.png)

Similarly, Instructors have access to and can create Lessons, Topics, Quizzes, and Questions from the Instructor Dashboard. They can also create new certificates and approve assignments from the Instructor Dashboard.

---

## Profile Introduction Sections

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/profile-introduction-sections/](https://learndash.com/support/kb/add-ons/instructor-role/profile-introduction-sections/)

The instructor profile introduction section allows you to add and configure additional data to be displayed on the instructor profile page along with the flexibility to control how the data gets saved and displayed. The profile introduction section is a part of the instructor profile feature.

To configure the profile introduction section navigate to the LearnDash LMS > Instructor > Profile settings page**.**By default, you will find two pre-set configurations for the Instructor Education and Achievements. You can use them, remove and modify them or you can add new sections of your own specific to your need.

### Add New Section

You can add a new section by following the steps below:

- Click on the Add button below the introduction section configuration table. This will open a pop-up box as displayed in the screenshot below.
- Once all the field details are filled properly click on Add again to add the new section to the table.
- Click on Save to save the newly added sections.

![Adding new Introduction Section](https://learndash.com/support/wp-content/uploads/2024/04/Adding-new-Introduction-Section.png)Adding new Introduction Section

### Edit Existing Section

![Editing Introduction Section](https://learndash.com/support/wp-content/uploads/2024/04/Editing-Introduction-Section.png)Editing Introduction Section

- Edit the details you wish to update.
- Click on Save to save the edited sections.

![Edit Section Pop-up Box](https://learndash.com/support/wp-content/uploads/2024/04/Edit-Section-Pop-up-Box.png)

To remove a section, click on the trash icon in the actions column of the section you wish to remove and then click on the Save button.

### Section Configuration Fields

#### Title

This field describes the image to be used in the introduction section. You can either one of the 2 pre-set options or select a custom image for your section. Please note the resolution of the uploaded image to be close to 165 x 170 px for the best experience.

#### Image

This field describes the image to be used in the introduction section. You can either one of the 2 pre-set options or select a custom image for your section. Please note the resolution of the uploaded image to be close to 165 x 170 px for the best experience.

#### Meta Key

This is a unique key used to store this section of data in the database. You cannot use the same meta key for two or more sections. Use the following format to easily create and save meta keys for your sections.

Let’s say if you have a section named certifications to display list of your instructor certifications, you may use the following as its meta key:

```
instructor_certifications_list
```

You can even make it more unique by using a special prefix for all your section meta keys as follows:

```
wisdm_instructor_certifications_list
```

#### Data Type

This field defines the data type to be used to save the section values. It offers 2 options list and a paragraph.

#### Icon

This field describes the icon to be used at the beginning of every item displayed for the section. You can choose from the existing options or choose a custom [dashicon](https://developer.wordpress.org/resource/dashicons/#insert-before)for this.

---

## Instructor Profile

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/instructor-profile/](https://learndash.com/support/kb/add-ons/instructor-role/instructor-profile/)

The **Instructor Profile Page** is a new feature that gives site visitors a complete view of an instructor’s background and activity, right on the front end of the website.

This page includes key details such as:

1. Biography
2. Student and course statistics
3. Average course ratings
4. Instructor social info
5. And more, all in one place.

It helps learners get to know the instructor before enrolling in a course and provides transparency about the instructor’s experience and engagement.

## How to Setup the Profile Page

A few settings must be enabled for the Instructor Profile Page to display correctly on the front end.

1. Enable Pretty Permalinks

The website must use [pretty permalinks](https://wordpress.org/support/article/using-permalinks/) for instructor profile URLs to work.

1. Enable Profile Links

This setting allows visitors to click through to an instructor’s profile from the course archive and course detail pages. To enable:

- Go to LearnDash LMS > Instructor > Instructor Settings
- Scroll to the Profile section, then enable the **Profile Links** option.
- Save changes.

**NOTE:** Make sure that your theme supports displaying the author name and link on the course archive and single pages.

### Additional Profile Information

The Instructor Profile Page can display various details to help visitors learn more about each instructor. Most of this information is managed from the instructor’s WordPress user profile and can be updated by either the instructor or a site administrator.

### Profile Image

The profile image is pulled automatically from the instructor’s **Gravatar**account.

- Use an image with dimensions of **220 x 220 pixels** for best results.
- Make sure the Gravatar account is linked to the **same email address** used for the instructor’s WordPress user account.

To set or change a profile image, visit [gravatar.com](https://gravatar.com/)

### Social Account Links

Instructors can add social media links to display on their profile page. Supported platforms include:

- Facebook
- Twitter
- YouTube

These links are managed from the instructor’s WordPress user profile.

#### Introduction Section

The plugin includes two customizable introduction sections by default. These sections are used to share additional background, such as:

- Professional achievements
- Awards or certifications
- Teaching philosophy

Administrators can modify the content or labels for these sections as needed.

---

## Selling Courses Through WooCommerce

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/selling-courses-through-woocommerce/](https://learndash.com/support/kb/add-ons/instructor-role/selling-courses-through-woocommerce/)

Instructors can now create and sell their own courses directly through your site using **WooCommerce**. By connecting LearnDash with WooCommerce, each course becomes a sellable product—giving instructors the opportunity to earn commissions from their sales.

To enable this functionality, make sure the following plugins are installed and activated.

1. WooCommerce 3.0.x
2.[LearnDash WooCommerce Integration](https://www.learndash.com/integrations/woocommerce/)

### How to Create a WooCommerce Product in The Instructor Dashboard

1. From the Instructor Dashboard, go to Products Add New
2. Enter the Product Title and the Pricing details
3. Do not forget to add a Course
4. Once all the information has been added and you are ready to make the product live, click Publish

![Sell Courses via WooCommerce](https://learndash.com/support/wp-content/uploads/2024/04/Sell-Courses-via-WooCommerce.png)Sell Courses via WooCommerce

### Set up Paypal Payouts for Instructors

With **PayPal Payouts**, site owners can send instructor commissions directly and instantly from their website. This automated process is available through the **Instructor Role plugin**, once the proper setup is complete.

Before enabling this feature, a few prerequisites must be in place. This article outlines what’s needed to successfully set up PayPal Payouts for instructor commissions.

**Important:** PayPal Payouts only works with a **PayPal Business account**, and the **Payouts feature must be activated** by PayPal.

### Prerequisites for using PayPal Payouts

To use PayPal Payouts, you will need to have the following:

- **A PayPal business account:** You can sign up for a PayPal business account at [https://www.paypal.com/us/webapps/mpp/merchant](https://www.paypal.com/us/webapps/mpp/merchant)
- **Access to PayPal Payouts:** You can request access by visiting: [https://www.paypal.com/payoutsweb/landing](https://www.paypal.com/payoutsweb/landing)
- **A confirmed identity, email, and bank account linked to your PayPal business account:**You must confirm your identity, email, and bank account linked to your PayPal business account before you can use PayPal Payouts
- **Sufficient funds in your PayPal business account:** You must have sufficient funds in your PayPal business account

### How to request access to PayPal Payouts

1. Visit the PayPal Payouts landing page at [https://www.paypal.com/payoutsweb/landing](https://www.paypal.com/payoutsweb/landing)
2. Click on the Get Started button
3. Provide information about your business needs to ensure the solution is a good fit for you
4. Submit your application

PayPal will review your application and email you with a decision. In the meantime, you can set up and test your integration in your sandbox accounts.

### Activating Payouts

**Activating PayPal Payouts** is an essential step in the setup process. Without activation, the payouts feature will not function, regardless of other settings.

Due to recent updates in **PayPal’s terms and conditions**, activation is now managed directly by PayPal. If payouts are not yet enabled on the PayPal Business account, site owners must contact **PayPal Support** to request access.

Reach out to PayPal early in the setup process to avoid delays in enabling Instructor payments.

To activate payouts, follow these steps:

1. Log in to your PayPal business account
2. Click on Settings in the top right corner
3. Click on Payment settings from the dropdown menu
4. Click on Manage payouts in the Payouts section
5. Follow the instructions to activate payouts

Once all prerequisites are in place, site owners can begin using **PayPal Payouts** to pay instructors through the **Instructor Role plugin**.

### Creating a new API Application

You will be using PayPals Payouts API to send money to your instructors. First, create an API Application. Log in to PayPal using your credentials and then visit [My Apps](https://developer.paypal.com/developer/applications) in the PayPal Developer portal to create a new API Application.

You do not need to be a developer to create the application, you just need a set of credentials that will help the plugin send payment requests to PayPal on your behalf. When you visit the My Apps and Credentials screen you will see the following screen:

![PayPal My Apps](https://learndash.com/support/wp-content/uploads/2024/04/PayPal-My-Apps-Screenshot.png)PayPal My Apps

Click on **Create App** under the REST API apps section to create a new app. You can start with a Sandbox account to test how the application works.

![Create a New App](https://learndash.com/support/wp-content/uploads/2024/04/Create-a-New-App.png)Create a New App

Enter Instructor Role Payouts****as the App name and either keep the default sandbox account selected or select another one if you have and then click on Create App. Once you have created the App you can click on its name anytime to view its details.

When you are done with your sandbox testing, you can follow the same procedure for creating a live API application. Toggle to Live instead of Sandbox in the first step. Then, you will need to enable Live Payouts permission from the My Account page on your PayPal Developer Dashboard.

![My Account PayPal Developer](https://learndash.com/support/wp-content/uploads/2024/04/My_Account_PayPal_Developer-1024x585-1.png)My Account PayPal Developer

### Configuring Instructor Payout Settings

Now that the API application is set up on your PayPal account, log into your website as admin and visit **LearnDash LMS > Instructor > PayPal Payouts**.

![Instructor Payout Settings](https://learndash.com/support/wp-content/uploads/2024/04/Instructor_‹_Instructor_Role_Dev_—_WordPress-1024x585-1.png)Instructor Payout Settings

Configure all the necessary settings and click on save to save them. Instructors need to save their PayPal email addresses from the Instructor Dashboard by accessing the Profile section.

![Instructor PayPal Email Settings Screenshot](https://learndash.com/support/wp-content/uploads/2024/04/Profile_‹_Instructor_Role_Dev_—_WordPress-1024x585-1.png)Instructor PayPal Email Settings Screenshot

## Subscription Products and Instructor Commissions

Instructor commissions for WooCommerce subscription products are **only paid on the first payment**. This is the intended behavior of the Instructor Role plugin.

- When a customer purchases a subscription product linked to a course, the instructor will receive the commission percentage you set only on the initial payment.
- Subsequent recurring payments on that subscription will not trigger additional commissions automatically.

This design ensures that commissions are calculated on the initial sale rather than for every installment.

---

## Instructor Commissions

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/instructor-commissions/](https://learndash.com/support/kb/add-ons/instructor-role/instructor-commissions/)

Instructor Commissions gives you the power to set a percentage of commissions earned for your instructors, along with a robust reporting system to help manage commissions and payments.

To set instructor commissions, head over to the **LearnDash LMS Instructor** menu.There, you should be able to see a list of all the instructors on your LearnDash e-learning website. You can then set a commission percentage for each instructor and update the changes. An administrator can set a commission percentage for each instructor.

![Instructor Commission Reports](https://learndash.com/support/wp-content/uploads/2024/04/file-8waRp1WC3e.png)Instructor Commission Reports

### Commission Reports

A report accessible by the Admin to view a list of the commission amount earned by the Instructor for each course sold. Select an instructor and click Submit. You should be able to view a list of the commission amount earned by the instructor for each course sold. Instructor commission reports provide you with a summary of instructor commissions earned. To view these reports, go to the LearnDash LMS Instructor Commission Reports menu tab.

![LearnDash LMS Instructor Commission Commission Report](https://learndash.com/support/wp-content/uploads/2024/04/LearnDash-LMS-Instructor-Commission-Commission-Report.png)

You can also export commission reports by heading to LearnDash LMS Instructor Commission Export.

### Disable Commission Reports

There, you should be able to see a list of options, check the Disable Instructor Commission Feature option. To disable Instructor Commissions, head over to LearnDash LMS Instructor Settings.

![Disable Instructor Commission](https://learndash.com/support/wp-content/uploads/2024/04/disable-instructor-commission.png)Disable Instructor Commission

---

## Multiple Instructors

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/multiple-instructors/](https://learndash.com/support/kb/add-ons/instructor-role/multiple-instructors/)

Collaborate with other instructors to create comprehensive, well-rounded LearnDash courses faster.

### Sharing a Course with an Instructor

Are you looking to have more than one Instructor managing a course? This will help you quickly collaborate with other instructors in your team to create your LearnDash courses much more effectively.

![Share Course Metabox on the course edit page](https://learndash.com/support/wp-content/uploads/2024/04/Share-Course-Metabox-course-edit-page.png)Share Course Metabox on the course edit page

To add Multiple Instructors to your website, you can follow the steps below:

- **Edit**a course you wish to share or collaborate on, or create a new one.
- On the course edit page, below the content area, look for the **Share Course**dropdown as shown.
- Once clicked on it, a list of all **Instructors**on the website will be displayed.
- Select the **Instructors**you wish to collaborate on the course with.
- Once the instructors have been selected, **Save**the course.

![Share course with one or more Instructors](https://learndash.com/support/wp-content/uploads/2024/04/Share-course-with-one-or-more-Instructors.png)Share course with one or more Instructors

The course can be either shared by an Admin or an Author with all the other Instructors.

### Accessing a shared course

![Course Listing page on Instructor dashboard](https://learndash.com/support/wp-content/uploads/2024/04/Course-Listing-page-on-instructor-dashboard.png)Course Listing page on Instructor dashboard

Once the course is shared the Instructor can log in and check for the same under their courses tab. The shared courses appear similar to other courses on the listing page, one can differentiate by looking at the author.

![Collaborating on shared courses](https://learndash.com/support/wp-content/uploads/2024/04/Collaborating-on-shared-courses.png)

Co-instructors can create new or edit existing lessons, topics, quizzes, and questions in a shared course and perform all other actions to configure course settings on the course edit page as the owner instructor can, but they are not allowed to trash the course.

Also, Co-instructors are not allowed to further share a shared course with other instructors.

---

## Adding Instructors

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/adding-instructors/](https://learndash.com/support/kb/add-ons/instructor-role/adding-instructors/)

Now that you are familiar with the Dashboard, you have the ability as an Admin to add instructors to your website. You can add instructors to your website in various ways:

1. **Creating New Instructors**: To create an Instructor, create a new user from the WordPress Dashboard and set the users role as Instructor and click save.
2. **Making an existing user an Instructor**: To change an existing user role to Instructor, edit the user’s profile, change the user’s role to Instructor and save the changes made.
3. **Instructor Registration Form**: If you wish to register Instructors on your website using a form, you can check out this [article](https://wisdmlabs.com/docs/article/wisdm-instructor-role/ir-tips-and-tricks/how-to-register-an-instructor-using-a-form-on-the-website/) to learn more about it.

---

## Instructor Overview Page

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/instructor-overview-page/](https://learndash.com/support/kb/add-ons/instructor-role/instructor-overview-page/)

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5742e900c697917290ddb8d5/images/63f5b3e13c396c395ec0ecc0/file-o9UOI9ILyp.png)

An instructor can see all the basic information about their courses at a glance from the Instructor Overview page.

- Number of Courses created by the instructor
- Number of Students registered for the instructors courses
- Earnings calculated based on the commission settings set by the administrator and the courses sold.
- Course-specific report to check student progress.
- Submissions table to check the essay and assignment submissions made by students.

---

## Instructor Dashboard Menu

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/instructor-dashboard-menu/](https://learndash.com/support/kb/add-ons/instructor-role/instructor-dashboard-menu/)

The Instructor Dashboard has a top menu similar to the primary menu displayed on the front end of the website. But you may wish to display a different top menu for the instructors on the Instructor Dashboard menu. You can enable different menus by using the **Instructor Dashboard Menu**setting under the**Appearances****Menu**section as shown below.

![Instructor Dashboard Menu Setting](https://learndash.com/support/wp-content/uploads/2024/04/Instructor-Dashboard-Menu-Setting.png)Instructor Dashboard Menu Setting

**NOTE:** A feature was included in the Instructor Role update v4.2.1 where the Instructor Dashboard Menu will default to the Primary Menu of your site. This is to make sure the Instructor can still navigate to the other pages of the site from within their dashboard.

To revert back to an older menu or create an entirely new menu for your Instructor Dashboard, go to Appearance > Menus > Create New Menu, add the menu items you wish to show on the Instructor Dashboard and then select the display location as Instructor Dashboard Menu as shown in the screenshot above.

---

## Instructor Dashboard

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/instructor-dashboard/](https://learndash.com/support/kb/add-ons/instructor-role/instructor-dashboard/)

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5742e900c697917290ddb8d5/images/63f5b3e13c396c395ec0ecc0/file-o9UOI9ILyp.png)

The Instructor Dashboard is a dedicated dashboard designed for instructors (Teachers). When logged in, instructors are automatically redirected to this dashboard. Whether creating courses, checking reports, approving assignments or customizing quizzes, instructors can find all the tools they need in one place. Each dashboard is instructor-specific, and will only display the data of the courses that individual has created or shared. The URL to access your Instructor Dashboard is the same as your WP Dashboard URL, but is completely secure and restricted to only allow access to instructor-specific pages.

---

## Intro to Instructor Role

**Source:** [https://learndash.com/support/kb/add-ons/instructor-role/intro-to-instructor-role/](https://learndash.com/support/kb/add-ons/instructor-role/intro-to-instructor-role/)

**The **Instructor Role** allows multiple instructors to create and manage LearnDash courses without granting full WordPress admin access. It is designed for teams, guest instructors, and external partners who need access to course creation, reporting, and learner management—while keeping the rest of the site secure.

Instructors see only their own courses and data, making collaboration easier and safer.

## Installation, Activation, and Prerequisites

Before using Instructor Role, ensure the following are installed and activated:

- LearnDash LMS
- Instructor Role add-on
- (Optional) WooCommerce and LearnDash WooCommerce Integration for selling courses

## Instructor Dashboard

The **Instructor Dashboard** is a restricted, instructor-only dashboard. Instructors are redirected here automatically after login and can manage courses, learners, reports, and submissions in one place.

### Instructor Dashboard Capabilities

| What you can do | How to do it |
| --- | --- |
| Access the Instructor Dashboard | Log in as an Instructor. The dashboard loads automatically after login. |
| Restrict backend access | Instructors only see instructor-specific pages; WordPress admin pages are hidden. |
| View instructor-specific data | The dashboard shows only courses created or shared with the instructor. |
| Navigate the site from the dashboard | The dashboard menu mirrors the site’s Primary Menu by default (v4.2.1+). |

## Instructor Dashboard Menu

The Instructor Dashboard can display a different menu than the public site.

| What you can do | How to do it |
| --- | --- |
| Use the site’s Primary Menu | Leave default settings enabled (v4.2.1+ behavior). |
| Create a custom instructor menu | Go to Appearance > Menus, create a new menu, and assign it to Instructor Dashboard Menu. |
| Restore older menu behavior | Assign a different menu to the Instructor Dashboard Menu location. |

## Instructor Overview Page

The **Instructor Overview** page provides a high-level snapshot of instructor activity.

| What you can see | Description |
| --- | --- |
| Courses | Total number of courses created or shared |
| Students | Number of learners enrolled in instructor courses |
| Earnings | Commission-based earnings (if enabled by admin) |
| Reports | Course-level learner progress |
| Submissions | Assignment and essay submissions |

## Adding and Managing Instructors

Admins can add instructors in multiple ways.

| What you can do | How to do it |
| --- | --- |
| Create a new instructor | Go to Users > Add New, create a user, set role to Instructor, then save. |
| Convert an existing user | Edit the user under Users > All Users, change role to Instructor, then save. |
| Register instructors via a form | Use the Instructor Registration Form workflow described in the related documentation. |

## Multiple Instructors (Course Collaboration)

Courses can be shared with multiple instructors for collaboration.

### Sharing a Course

| What you can do | How to do it |
| --- | --- |
| Share a course with other instructors | Edit the course, find Share Course, select instructors, then save. |
| Share as admin or author | Admins and course authors can share courses. |
| Access shared courses | Instructors see shared courses in their course list (check author to differentiate). |

### Co-Instructor Permissions

| Allowed | Not Allowed |
| --- | --- |
| Edit lessons, topics, quizzes, and settings | Trash the course |
| Manage course structure | Share the course with additional instructors |

## Instructor Commissions

Instructor Commissions allow admins to reward instructors for course sales.

### Commission Management

| What you can do | How to do it |
| --- | --- |
| Set commission percentages | Go to LearnDash LMS > Instructor, set a commission % per instructor. |
| View commission reports | Go to LearnDash LMS > Instructor Commission Report, select an instructor, then submit. |
| Mark earnings as paid | Click Pay, enter the paid amount to update records. |
| Export commission data | Go to LearnDash LMS > Instructor Commission Export. |
| Disable commissions | Go to LearnDash LMS > Instructor Settings and disable commissions. |

**Note:** The *Pay* button records payments only; it does not process transactions.

## Selling Courses with WooCommerce (Optional)

Instructors can sell their courses using WooCommerce.

### Requirements

- WooCommerce
- LearnDash WooCommerce Integration

### WooCommerce Actions

| What you can do | How to do it |
| --- | --- |
| Allow instructors to sell courses | Install and activate WooCommerce + LearnDash WooCommerce Integration. |
| Create a product as an instructor | From the Instructor Dashboard, go to Products > Add New, set pricing, associate a course, then publish. |

---

## Student–Instructor Messaging (Doubts)

Students can message instructors directly from lessons and topics.

### Messaging Workflow

| What you can do | How to do it |
| --- | --- |
| Send a doubt | On a lesson/topic page, click the bottom-right button, enter subject and message, then send. |
| Auto-link to content | The lesson or topic is preselected automatically. |
| Reply as an instructor | Open the BuddyPress private message inbox and reply. |
| Continue conversations | Students and instructors can reply from the lesson/topic page. |
| View all doubts | Recent doubts are accessible from the site header. |

## Multiple Instructors Shortcode

Use shortcodes to display instructor information on the front end.

| Purpose | Shortcode |
| --- | --- |
| Display all instructors | [all_instructors] |
| Hide instructor images | [all_instructors display_img=0] |
| Set avatar size | [all_instructors size=32] |
| Hide instructor names | [all_instructors display_name=0] |
| Limit instructors shown | [all_instructors visible=3] |
| Exclude course author | [all_instructors exclude_author=1] |
| Use on non-course pages | [all_instructors course_id=36] |

## Summary

The Instructor Role enables secure collaboration, scalable course creation, and flexible instructor management—without exposing the full WordPress admin area. With dashboards, course sharing, commissions, messaging, and optional frontend tools, it provides everything needed to support multi-instructor LearnDash sites at scale.

---

