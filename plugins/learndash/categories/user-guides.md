# User Guides

*Category from LearnDash documentation*

---

## Gamification And Badges In LearnDash

**Source:** [https://learndash.com/support/kb/core/user-guides/gamification-and-badges-in-learndash/](https://learndash.com/support/kb/core/user-guides/gamification-and-badges-in-learndash/)

Gamification adds an extra layer of motivation and fun to online learning. By rewarding learners with badges, points, and achievements, course creators can boost engagement, reinforce progress, and encourage consistent participation. Although LearnDash does not include built-in gamification tools, it integrates seamlessly with popular WordPress plugins like BadgeOS and GamiPress.

This step-by-step guide explains how to set up gamification in LearnDash using either plugin, including how to display rewards and offer learners a sense of accomplishment as they move through a course.

## What Is Gamification?

In an e-learning context, gamification refers to applying game-like rewards to encourage learner participation. This can include:

- Awarding badges for task completion or high scores
- Granting points for engaging with course material
- Unlocking achievements tied to key learning milestones

These features can be especially helpful for:

- Encouraging learners to complete lessons on time
- Recognizing top performers or highly engaged users
- Making repetitive or challenging material more rewarding

Example use cases include giving a badge for passing all quizzes with a high score, awarding points for every lesson completed, or creating an achievement for finishing an entire course.

## Getting Started

LearnDash offers an **Achievements add-on** that allows course creators to award badges for specific learner actions such as completing lessons, passing quizzes, or finishing courses. For users who want a quick way to add gamification without installing third-party plugins, this option is a great starting point.

Alternatively, LearnDash integrates with third-party tools like **GamiPress** and **BadgeOS**.

### What You’ll Need

To use gamification in LearnDash, one of the following setups is required. Each option gives course creators the ability to award badges or achievements when learners complete key actions such as finishing a lesson or passing a quiz.

There are two main paths to choose from:

### Option 1: Use the LearnDash Achievements Add-On

The LearnDash Achievements add-on allows site owners to create badges, award points, and even display leaderboards — all from within LearnDash, without installing third-party plugins.

This option is ideal if you want to keep your site setup simple by using only LearnDash tools.

### Option 2: Use a Third-Party Plugin (GamiPress or BadgeOS)

To use either GamiPress or BadgeOS, you’ll need:

- The **main plugin** (GamiPress or BadgeOS), installed from the WordPress plugin directory
- The **free LearnDash integration add-on** for your chosen plugin (enables LearnDash triggers)

## How to Add Gamification to LearnDash Courses

### Step 1: Install a Gamification Plugin

#### Option 1: Install and Activate the Achievements Add-On

1. In the WordPress dashboard, go to **LearnDash LMS > Add-Ons**.
2. Scroll down to**the Available**section
3. Locate the **LearnDash Achievements** add-on
4. Click the **Download**icon

![](https://learndash.com/support/wp-content/uploads/2026/02/image-1-800x79.png)

1. Scroll up to the **Installed**section
2. Then click the **Activate**icon

![](https://learndash.com/support/wp-content/uploads/2026/02/image-800x57.png)

**Option 2: Install and activate GamiPress or Badge OS and the corresponding Learndash Integration:**

1. Install the GamiPress or Badge OS core plugin
2. Install the GamiPress or Badge OS Learndash Integration by going to **LearnDash LMS > Add-Ons** in the WordPress Dashboard
3. Scroll down to**Available**section
4. Locate the **LearnDash BadgeOS or GamiPress Integration**
5. Click the **Download**icon
6. Scroll up to the **Installed**section
7. Then the **Activate** icon

### Step 2: Create Badges, Points, and Achievements

Once your plugin and add-on are active, it’s time to create gamification elements and link them to LearnDash activities.

#### Creating an Achievement using the Learndash Achievement add-On

1. Click **Add New Achievement**

![](https://learndash.com/support/wp-content/uploads/2026/02/image-2-800x146.png)

1. Enter a **Title** for the achievement
2. Enter a**Message** for the achievement
3. Select from pre-uploaded images or upload a custom image

![](https://learndash.com/support/wp-content/uploads/2026/02/image-3-800x368.png)

1. Select LearnDash-related triggers (this is how students will earn the achievement).

![](https://learndash.com/support/wp-content/uploads/2026/02/image-4-800x115.png)

![](https://learndash.com/support/wp-content/uploads/2026/02/image-9-800x644.png)

1. Set **Conditions** as needed (these will vary based on the trigger you select).

![](https://learndash.com/support/wp-content/uploads/2026/02/image-6-800x302.png)

1. Input how many **Points** they will earn for the achievement
2. Enter the maximum number of **Occurrences** the achievement will be given. Enter 0 for unlimited occurrences.

![](https://learndash.com/support/wp-content/uploads/2026/02/image-7-800x184.png)

1. Click **Publish**.

![](https://learndash.com/support/wp-content/uploads/2026/02/image-8.png)

For more information and full setup details on the LearnDash Achievement add-on, see the official LearnDash guide: [LearnDash Achievements Add-On Documentation](https://learndash.com/support/kb/add-ons/achievements-add-on/achievements-add-on/).

Visit the developer documentation for the process of creating a [BadgeOS badge](https://badgeos.org/docs/) or [GamiPress point or achievement](https://gamipress.com/docs/tutorials/).

### Step 4: Display Rewards on Learner Dashboards

Once achievements, badges, and points are set up, it’s important to make them visible to learners. Displaying rewards helps reinforce motivation, showcases progress, and gives learners a sense of accomplishment.

Each platform handles reward display slightly differently. Below is a quick breakdown of how to show badges, points, and leaderboards using **LearnDash Achievements**, **GamiPress**, or **BadgeOS**.

#### Option 1: Displaying Achievements with the LearnDash Achievements Add-On

The easiest way to display earned achievements in LearnDash is by using the [ld_achievements_leaderboard] shortcode or block. This displays a list of users and their points based on their achievements.

**How to Use the Shortcode or Block:**

1. From the WordPress dashboard, go to **Pages > Add New** or edit an existing page
2. Add a block or content section, and insert the shortcode or block
3. Publish the page

![](https://learndash.com/support/wp-content/uploads/2026/02/image-5-800x596.png)

**Available Shortcodes & Blocks**

- [ld_achievements_leaderboard] displays a list of users and their points based on their achievements.
- [ld_my_achievements] displays a list of a logged-in user’s achievements alongside the achievements icon and its title when you hover over the icon.

View the available LearnDash[Achievements shortcodes and blocks.](https://learndash.com/support/kb/add-ons/achievements-add-on/achievements-add-on/#h-shortcodes-and-blocks)

#### Option 2: Displaying Rewards with GamiPress

GamiPress includes a wide variety of shortcodes and blocks to help display badges, points, ranks, and more. These can be added to any page, sidebar, or course content area.

**Common GamiPress Shortcodes & Blocks:**

- [gamipress_achievement]-Display a single achievement
- [gamipress_achievements] – Displays a list of earned achievements

**How to Add a Rewards Page:**

1. Create a new page in WordPress
2. Add one or more of the above shortcodes to display the desired information
3. Publish the page and test it with a learner account

**Customization Tip:** GamiPress shortcodes offer parameters to filter by type, limit results, or show achievements from specific courses.

**Documentation Resource:**For advanced display options, see the[GamiPress shortcode guide](https://gamipress.com/docs/shortcodes/) and block documentation on the GamiPress website.

#### Option 3: Displaying Badges with BadgeOS

BadgeOS uses WordPress shortcodes and blocks to show earned badges. While it may not offer as many visual features compared to GamiPress, it offers solid integration when configured correctly.

**Common Shortcodes & Blocks:**

- [badgeos_achievements_list] – Displays a list of achievements
- [badgeos_user_earned_points] – list of the points earned by the user

**How to Add a Rewards Page:**

1. Create a new page in WordPress
2. Add one or more of the above shortcodes to display the desired information
3. Publish the page and test it with a learner account

**Documentation Resource:**For a full list of supported shortcodes and layout options, visit the [BadgeOS documentation page.](https://badgeos.org/docs/tutorials/shortcodes/)

### Best Practices for Displaying Rewards

- **Make It Easy to Find:** Add a link to the rewards page in your site’s navigation menu or learner dashboard.
- **Use Visual Hierarchy:** Separate badges, points, and rankings clearly so learners can focus on one type of reward at a time.
- **Check Mobile Layouts:** Make sure achievement displays are responsive and legible on phones and tablets.
- **Test with a Student Account:** Log in as a test learner to verify what displays correctly after earning achievements.

## Badge Design Tips

Visual appeal plays a big role in how learners perceive badges. Strong badge design can help learners feel proud of their achievements.

### Recommended Badge Design Elements

- **Icon or Symbol**: Choose an image that visually represents the action or reward (e.g., checkmark for completion, trophy for excellence).
- **Clear Text or Number**: If using levels or points, make sure the text is easy to read at small sizes.
- **Color Coding**: Use colors to signal badge categories (e.g., blue for quizzes, green for progress, gold for excellence).
- **Shape Consistency**: Use the same shape or layout across all badges to create a unified style.

### Tools for Creating Badges

- [Canva](https://www.canva.com/) – Free design platform with badge templates and drag-and-drop icons
- **Icon Packs** – Use royalty-free icon libraries like[Flaticon](https://www.flaticon.com) or[Noun Project](https://thenounproject.com)

### File Format Tips

- Save badges as PNG files with transparent backgrounds
- Use a square aspect ratio (e.g., 300×300 px or 500×500 px)
- Keep file sizes small to ensure fast page loading

---

## Trusted Login

**Source:** [https://learndash.com/support/kb/resources/user-guides/trusted-login/](https://learndash.com/support/kb/resources/user-guides/trusted-login/)

The **Trusted Login** feature allows you to provide easy, quick, and secure Access to your site for the LearnDash Support Team. You no longer need to worry about manually setting up a user account, making sure you have the right email address, creating a secure password, or choosing the right role. This feature takes care of all the little details for you, and more importantly, you no longer need to share a username/password over email for the Support Team to log into your site.

## Setup

1. Ensure that you have an active support ticket open with our team ( [https://account.learndash.com/support](https://account.learndash.com/support) )
2. Visit LearnDash LMS > Help in your WordPress Admin Dashboard
3. Click on the Provide Support Access button
4. Click the Grant LearnDash Access button
5. You’ll see a notice about the user account being created, and then a confirmation.
6. Notify the LearnDash Support team in your ticket and share the Site Access Key – that’s it!

After following the setup above, a link is automatically added to your open support ticket that our team will use to [Access](https://learndash.com/support/glossary/access/) your site. The feature creates an account on your site that provides the LearnDash Support Team with the appropriate role/capabilities needed to perform most actions.

By default, the user account will exist for 1 week, after which Access is automatically removed, and the created user account is deleted.

In the event that we need additional levels of Access to investigate something, you’ll be notified on your support ticket with the information the Support Team needs.

## How do I remove Access?

1. Visit **LearnDash LMS > Help**, click on the Provide Support Access button.
2. Click the Revoke Access button.

## How can I extend Access?

1. Visit **LearnDash LMS > Help**, click on the Provide Support Access button
2. Click the Extend LearnDash Access button

This will create a new 1-week period of Access using the same account that was initially created.

**Note**: While this mentions extending Access, it resets the current Access back to 1 week. For example, if the display shows that there are 4 days of Access time left, extending Access will set the time back to 1 week, and not 11 days.

## What do I do with the Site Access Key?

You will need to share this information with the support team. They will require the Site Access Key to use Trusted Login for accessing your site. The Site Access Key can only be used within Trusted Login, so it is safe to share it in your support ticket.

---

## How to Install and Activate LearnDash Add-ons

**Source:** [https://learndash.com/support/kb/resources/user-guides/how-to-install-and-activate-learndash-add-ons/](https://learndash.com/support/kb/resources/user-guides/how-to-install-and-activate-learndash-add-ons/)

To make the most of your course website and LearnDash functionality, you will want to leverage some of our powerful add-ons. You can do that directly in your WordPress admin area.

This article will walk you through the general installation instructions and describe our general prerequisites.

## Installing LearnDash Add-ons

**Option 1: Add-ons Menu**

1. Ensure you have purchased the add-on you want to activate and that you have [activated your LearnDash license](https://learndash.com/support/docs/getting-started/installation/#activate-your-license).
2. In your WordPress admin area, navigate to LEARNDASH LMS > ADD-ONS
3. Locate the add-on you have purchased
4. Click **Install Now**
5. Click the **Activate Plugin** button

**Option 2: Manual Upload**

1. [Download the plugin file](https://support.learndash.com/download/26379/) (must be [logged in](https://support.learndash.com/) to download)
2. In WordPress, navigate to PLUGINS > ADD NEW
3. Click **Upload Plugin**
4. Browse for the
```
.zip
```

 file you downloaded in Step 1
5. Click **Install Now**
6. Click **Activate Plugin**

Once installed and activated, you should see all the functionality of your LearnDash add-on immediately.

---

## LearnDash Migration

**Source:** [https://learndash.com/support/kb/resources/user-guides/learndash-migration/](https://learndash.com/support/kb/resources/user-guides/learndash-migration/)

The LearnDash Migration add-on is designed to help you import course content from other learning management systems, such asLearnPress, Tutor LMS, Sensei LMS, or Lifter LMS.

What it is for:

- Migrating lessons
- Migrating topics
- Migrating quizzes
- Migrating questions

What it isn’t for:

- Migrating course progression
- Migrating course meta ( like categories, tags, custom fields, etc )
- Migrating media

Due to the difference between the LMS features and options, we’ve outlined some of the important things below for each LMS when moving over to LearnDash.

## Migration Process

1. Install the Migration plugin from LearnDash LMS > Addons
2. Navigate to LearnDash LMS > Settings > Advanced > Migration
3. Select the LMS you want to migrate from, then select the course you want to migrate
4. Click Migrate Course

## LearnPress

- Sectionswill becomeLessons
- Lessonswill becomeTopics
- Features specific to LearnPress ( requirements, target audience, sale price, featured list, etc )will notget moved over

## Tutor LMS

- Topicswill becomeLessons
- Lessonswill becomeTopics
- Features specific to Tutor LMS ( difficulty level, Q&A, targeted audience, requirements, etc ) will not getmoved over

## Sensei LMS

- Moduleswill becomesection headings
- Sensei Pro question typeswillconvert into single-choice question types
- Be sure toverify course/lesson content after migration due to Sensei-specific blocks

## Lifter LMS

- LifterLMS Courses, Sections, Lessons, Topics, Quizzes, and Questions turn into LearnDash data types with the same name (Ex. Lessons are converted into Lessons)
- Supported LifterLMS question types: True or False, Multiple Choice, Picture Choice
- True or False converts to Single Choice
- Multiple Choice converts to Multiple Choice
- Picture Choice converts to Multiple Choice
- Features specific to LifterLMS ( sale price, tracks, difficulties, engagements, etc) will not get moved over
- Be sure to verify course/lesson content after migration due to LifterLMS-specific blocks

**Note:**We are always looking to improve our products. If you have any suggestions or improvements for the migration plugin, please let us know so we can consider them for a future release.

**Important Reminder:**Double-check your course and lesson content after migration, especially for Sensei LMS and Lifter LMS. Some LMS-specific blocks might not translate perfectly, so it’s worth a quick review.

---

## Transferring LearnDash Courses

**Source:** [https://learndash.com/support/kb/resources/user-guides/transferring-learndash-courses/](https://learndash.com/support/kb/resources/user-guides/transferring-learndash-courses/)

There are two ways to transfer (or move) LearnDash courses from one site to another. The method you use depends on whether or not you need to retain existing user data or just move the course content.

For demo users, you can export your progress and import it when you purchase LearnDash or LearnDash Cloud.

## Transferring Courses Without Data

If you just want to move course content from one site to another, then this can be done using the Export and Import options under the TOOLS menu in WordPress. Use this for all custom post types except for quizzes.

Note that this process will not****retain the associations between courses and lessons; after the import, you will need to connect your lessons to the appropriate courses again, which can easily be done using the [Course Builder](https://learndash.com/support/docs/core/courses/course-builder/).

Note that this process will not****retain the associations between courses and lessons; after the import you will need to connect your lessons to the appropriate courses again, which can easily be done using the [Course Builder](https://learndash.com/support/docs/core/courses/course-builder/).

To export quizzes…

1. Navigate to LearnDash LMS > Quizzes
2. Click on the Actions menu in the header
3. Select Import/Export
4. Select the quizzes you want to move

This is the same process for importing the quizzes onto the new site.

## Transferring Courses With Data

If you want to move a LearnDash course to another site and retain all of the user progress/data, then the process for doing so is more elaborate and should only be done by a capable developer.

WARNING: LearnDash support provides limited assistance for this task and only when using the built-in import/export tool. The team may not be able to help troubleshoot. It is strongly recommended to practice the transfer on a development site first before attempting it on a live site.

### Using the Built-in LearnDash Import/Export

LearnDash has now introduced a new Import/Export feature to allow you to easily import/export your entire LearnDash site, data, configuration, and settings to another site. This is now the recommended option when importing/exporting your existing LearnDash site to another or a new site.

**To use this feature:**

1. Navigate to **LearnDash LMS > Settings**
2. Click on the “Advanced” tab
3. Click on **Import/Export**

![Import/Export page in LearnDash Advanced Settings menu](https://learndash.com/support/wp-content/uploads/2021/11/learndash-import-export-page.png)

#### Exporting

On this page, you can fine-tune what you want to export from your LearnDash site. To export:

![](https://learndash.com/support/wp-content/uploads/2019/05/ld-export-options.png)

1. Select what data you want to export. “Everything” includes all of the data and settings on the site.
2. “I want to select” allows you to pick, choose, and customize the export. You have the option to export:
- Courses
- Lessons
- Topics
- Quizzes
- Questions
- Transactions
- Groups
- Assignments
- Essays
- Certificates
- Coupons
- Users
- Others
3. You can also select to export either just the posts, the settings, or both.
4. Once done, click on the export button.
5. After that, the button will grey out and show “Export in progress”, just wait for this to complete.
6. Once done, you’ll see a link to download the export at the top of the page
![](https://learndash.com/support/wp-content/uploads/2019/05/Advanced_ÔÇ╣_LD_Dev_1_ÔÇö_WordPress2.jpg)
7. Once you click ‘Download’, you’ll receive a .zip file containing all the information you have just selected.

1. Select what data you want to export. “Everything” includes all of the data and settings on the site.
2. “I want to select” allows you to pick, choose, and customize the export. You have the option to export:
- Courses
- Lessons
- Topics
- Quizzes
- Questions
- Transactions
- Groups
- Assignments
- Essays
- Certificates
- Coupons
- Users
- Others
3. You can also select to export just the posts, just the settings, or both.
4. Once done, click on the Export button.
5. After that, the button will grey out and show “Export in progress”, just wait for this to complete.
6. Once done, you’ll see a link to download the export at the top part of the page

.kadence-column2726_9beaa3-4a > .kt-inside-inner-col,.kadence-column2726_9beaa3-4a > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column2726_9beaa3-4a > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column2726_9beaa3-4a > .kt-inside-inner-col{flex-direction:column;}.kadence-column2726_9beaa3-4a > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column2726_9beaa3-4a > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column2726_9beaa3-4a{position:relative;}@media all and (max-width: 1024px){.kadence-column2726_9beaa3-4a > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column2726_9beaa3-4a > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
![](https://learndash.com/support/wp-content/uploads/2021/11/learndash-export-processing.png)

1. Once you click on download, you’ll get a .zip file containing all the information you just selected.

**IMPORTANT NOTE:** By default, LearnDash does not offer a built-in feature to export a single course using the [LearnDash export/import tool](https://learndash.com/support/docs/developers/transferring-learndash-courses/). The tool allows for the export of courses, lessons, topics, and quizzes collectively but does not allow you to export an individual course directly.

**Workaround Options –**

1. **Manual Recreation**: If the course is not extensive, you can manually recreate it in the target LearnDash installation.
2. **Database Export**: For a more technical approach, you could access your site’s database and export the specific tables related to that course. This method requires knowledge of database management and should be done with caution.

#### Importing

You can import the data that you just exported using this feature to another LearnDash site using the import feature.

1. On the **Import/Export** page, under “What do you want to import?”, select the .zip file from a previous export.
2. Once selected, click on Import
3. You will see a message that says “Import is in the processing queue. Please reload this page to see the import status.”
4. Wait for the import to finish. You can refresh the page to see the status.
5. Once done, you will see a message that says “Import completed successfully.”
6. At this point, everything that you’ve exported will have been imported successfully to the new LearnDash site. All the course, lessons, topics, quizzes, and group associations will be kept, and all the settings (if you’ve chosen to export them) will be applied.

### Database Considerations

The course progress LearnDash stores as part of the 
```
user_meta
```

 must****match the post ID number for the related Course, Lesson, Topic and Quiz.

Within the 
```
wp_usermeta
```

 table you have rows related to specific 
```
user_id
```

. These are key/value pairs. Within these various key/value pairs there are a few user by LearnDash to track user Course and Quiz progression.

For the Courses the meta_key will be named 
```
'_sfwd-course_progress'
```

 and the 
```
meta_value
```

 will be a serialized array.

This array when expanded will contain references to the Course ID (matching the course post ID), also Lesson ID, Topic ID, etc. There will also be an indicator to show if the user completed that step in the course.

![LearnDash Database Screenshots](https://learndash.com/support/wp-content/uploads/2019/05/learndash-Database-2.png)

From the screenshot the top-level key 24978 (shown by the red arrow) is the Course ID and must match the existing course post ID. Within each course section you will have sub-sections for ‘lessons’ and ‘topics’.

Take the course 24978 for example. This course has 1 lesson indicated by the 24980 key within the ‘lessons’ sub-section. The ‘1’ on each key indicates the user completed this lesson.

Within the ‘topics’ sub-section, you will see the first tiers 24980, 24982. These are lesson IDs and must match the same lesson ID from the ‘lessons’ sub-section.

Within each ‘topics’ lessons section you will see the topic ID (ex. 25000 and 24988) and the ‘1’ indicating the topic was complete.

Below the ‘lessons’ and ‘topics’ sub-sections, you will also see the keys ‘completed’ and ‘total’. These are the completed steps and total steps of the course.

Outside of this one user meta key/value pair there is another set for user Quiz progress. However, this array structure is very different.

Within the user meta table for each user there are also other key/value pairs user by LearnDash to track the user. These are somewhat less important than the Course ( 
```
_sfwd-course_progress
```

 ) and Quiz ( 
```
_sfwd-quizzes
```

 ) progress items.

**Additional items to consider for the transfer include…**

```
learndash_group_users_XXX
```

 – Used to indicate the user is assigned to a Group. The ‘XXX’ on the key will match the meta_value. A user can be associated with many groups.

```
learndash_course_expired_XXX
```

 – Used to indicate when user’s access to a course has expired.

```
course_completed_XXX
```

 – A secondary record of the course progress. Used to indicate when the user completed the course.

If you would like assistance with this process, then [you can reach out to this firm](https://valet.io). You can also [post the project on Codeable](https://www.learndash.com/codeable) to get a free quote.

---

## Translation

**Source:** [https://learndash.com/support/kb/resources/user-guides/translation/](https://learndash.com/support/kb/resources/user-guides/translation/)

LearnDash is in English and has user-donated translations. Strings in the LearnDash codebase are translatable.

You can use free software like [PoEdit](https://poedit.net/) to create and modify LearnDash translation files for your language. Or a free WordPress plugin like [Loco Translate](https://wordpress.org/plugins/loco-translate/).

## Current Translations

**NOTE:** As the translations are user-donated, they may not be 100% complete for your desired language.

- Arabic (ar)
- Chinese (zh_CN)
- Danish (da_DK)
- Dutch / Nederland (nl_NL)
- French (Canada) (fr_CA)
- French (France) (fr_FR)
- German (de_DE)
- Hebrew (he_IL)
- Italian (it_IT)
- Polish (pl_PL)
- Portuguese (Brazil) (pt_BR)
- Russian (ru_RU)
- Spanish (Spain) (es_ES)
- Swedish (sv_SE)

Right-to-left (RTL) languages are supported.

## Adding (or Modifying) a Translation

If you are creating a new translation, you can reference this helpful [list of WP Locale Codes](https://wpastra.com/docs/complete-list-wordpress-locale-codes/?bsf=835) for file naming conventions.

If you need to update a translation, you can do so by following these steps:

1. Navigate to LEARNDASH LMS > SETTINGS > TRANSLATIONS
2. Download the latest 
```
POT
```

 file by clicking the **POT** download button (it will automatically download)
3. Download the 
```
.po
```

 file by clicking the **PO** download button (it will open in a new tab)
4. Right-click & save the file
5. Open the 
```
.po
```

 file with [PoEdit](https://poedit.net/)
6. Navigate to CATALOG > UPDATE FROM POT and select the downloaded POT file in step 2
7. Make your additions and/or modifications to the translation file
8. Save the 
```
.po
```

 file
9. Regenerate the new 
```
.mo
```

 file via FILE > COMPILE TO MO
10. Using an FTP program or File Manager, add your new 
```
.mo
```

 and 
```
.po
```

 files to the 
```
/wp-content/languages/plugins/
```

 folder

**NOTE:** Verify that the file is named correctly and in the proper directory. If either of these is incorrect, you will encounter issues with the translation and upload.

![LearnDash admin translation settings](https://learndash.com/support/wp-content/uploads/2019/04/learndash-translations-admin-settings-page.jpg)

## Common Issues

### Not Updating from Latest POT File

If you are translating strings such as “Next Lesson” and notice that the translation is not reflected on your site, it is because you are translating from an out-of-date .pot file.

The string in the LearnDash codebase is actually “Next %s”, because the %s acts as a placeholder for your Custom Label (even if you do not use [Custom Labels](https://learndash.com/support/docs/core/settings/custom-labels/)).

This may also be why you notice that all of a sudden, you have “lost” translations of strings like “Next Lesson” and “Previous Course”, as well as other strings that contain a custom label. However, the translation is not necessarily lost. It is no longer used because the codebase is now using placeholders in those strings, not the literal words such as *Lesson* or *Course*.

To resolve, download the latest POT (step #2), then follow steps 6-10 to update from the latest POT, add translations for the new strings as needed, and upload your new .mo/.po files to the right place.

### Translations Set to “Needs Work”

Be mindful of “Needs Work” settings on individual translations. This is typically indicated by an orange color and an orange toggle after selecting the individual translation in poEdit.

![](https://learndash.com/support/wp-content/uploads/2019/04/learndash-needs-work.png)

When “Needs Work” is set on a translation, you are indicating to WordPress that you are unsure whether this is the correct translation. Therefore, WordPress does not display this translation on your site because it thinks the translation “Needs Work” as per your instructions.

To resolve, toggle the “Needs Work” setting off. It should resemble the screenshot below.

![](https://learndash.com/support/wp-content/uploads/2019/04/learndash-doesnt-need-work.png)

Then, save your new .mo/.po files and upload as per step 10 in the above documentation.

### Unexpected Locale

WordPress translations may be localized to a particular region. For example, 
```
es_ES
```

 would be Spanish in Spain, and 
```
es_MX
```

 would be Spanish in Mexico.

As far as WordPress is concerned, these are totally different languages (technically, referred to as “localizations”).

If your WordPress site localization is set to 
```
es_MX
```

, then that setting will not pull any information from your 
```
es_ES
```

 translation files (even though to you, the differences in language may be minor).

### Incorrect Folder

Please ensure that the LearnDash translation files are located in the folder path below, with file names that include the locale code. This should prevent your translation file from being overwritten after a LearnDash software update. For example:

- ```
/wp-content/languages/plugins/learndash-es_ES.po
```
- ```
/wp-content/languages/plugins/learndash-es_ES.mo
```

It is not a good idea to store your customized translation files in the */wp-content/plugins/sfwd-lms/languages/* directory, as they may be overwritten in the event of a plugin update.

### Incorrect File Name

This section highlights the correct file name format, as seen in the above “Incorrect Folder” issue.

```
learndash[hyphen][locale code, underscores used as separators].po
```

Please ensure your hyphens and underscores are in the right places. This is correct:

- ```
learndash-es_ES.po
```

These are not:

- ```
learndash_es_ES.po
```

 (underscore instead of hyphen is incorrectly placed between 
```
learndash
```

 and 
```
es_ES
```

).
- ```
learndash-es-ES.po
```

 (hyphen instead of underscore is incorrectly placed between 
```
es
```

 and 
```
ES
```

).

The 
```
.po
```

 and 
```
.mo
```

 files should be identically named, except for the file extension.

### Not Accounting for All Contexts

Translating a word once does not necessarily change the word in all strings in which that word occurs.

Words used in different contexts may be the same in your language. For example, the word “quiz” can serve as both a verb and a noun in English.

Understand that other languages may use different words depending on the context, and your translation files will need to account for that on a string-by-string basis.

PoEdit and Loco Translate both have search features to ensure that you account for every instance of a word in the translation files.

### Not Considering Strings from Third-Party Code

Not every translatable string displayed on a LearnDash-related page, such as a page containing a [Course Grid](https://learndash.com/support/docs/add-ons/course-grid/) or [Login Form](https://learndash.com/support/docs/guides/login-registration/learndash/), originates from the LearnDash codebase. Therefore, you may not be able to find the word you need to translate in the LearnDash file source text.

Or maybe you do, however, the string output is coincidentally duplicated in third-party code where it is actually being output.

This is especially common with WordPress themes built with LearnDash in mind, such as BuddyBoss, that override template files (or other third-party addons for LearnDash).

For example, the LearnDash source text includes the string “Incorrect username or password. Please try again.”

You change that string in your LearnDash .po file, but notice it is not reflected on your site. Other parts of your LearnDash translation are working as intended.

This may be because the string is actually output by third-party code, and is coincidentally using the same string. You would need to translate it separately from the LearnDash translations.

---

## User Guides

**Source:** [https://learndash.com/support/kb/resources/user-guides/guides/](https://learndash.com/support/kb/resources/user-guides/guides/)

User Guides provide detailed information on popular LearnDash features. Check back often, as this section will continue to grow.

- [Course Sections](https://learndash.com/support/kb/core/courses/course-sections/)
- [Focus Mode](https://learndash.com/support/kb/core/settings/focus-mode/)
- [User Profiles](https://learndash.com/support/kb/core/users/user-profiles/)
- [Login & Registration](https://learndash.com/support/kb/core/settings/login-registration/)
- [Video Progression](https://learndash.com/support/kb/core/lessons/video-progression/)
- [Translation](https://learndash.com/support/kb/resources/user-guides/translation/)
- [Sample (Free) Lessons](https://learndash.com/support/kb/core/lessons/sample-lessons/)
- [Page Builders + LearnDash](https://learndash.com/support/kb/resources/faqs/page-builders-2/)
- [Pre-Selling](https://learndash.com/support/kb/core/courses/pre-selling/)

[Contact support](https://support.learndash.com/contact-support) to suggest a guide you would like us to create.

---

## How do I remove the ‘Take This Course’ button?

**Source:** [https://learndash.com/support/kb/resources/user-guides/remove-take-this-course-button/](https://learndash.com/support/kb/resources/user-guides/remove-take-this-course-button/)

1. Navigate to LEARNDASH LMS > COURSES
2. Click on the course you’d like to hide the button for
3. Click the **Settings** tab
4. Under “Course Access Settings,” set the [Access Mode](https://learndash.com/support/docs/core/courses/course-access/)to **Closed**and leave the Button URL field blank

![LearnDash closed course with no button URL](https://learndash.com/support/wp-content/uploads/2018/09/learndash-course-access-closed-button-url-blank.jpg)

---

## How do I hide post meta data (date, author, comments, etc.)?

**Source:** [https://learndash.com/support/kb/resources/user-guides/hide-post-meta-data/](https://learndash.com/support/kb/resources/user-guides/hide-post-meta-data/)

Post meta data refers to the author’s name, date and/or numbers of comments that you sometimes see below the page title.

**Example:**

Posted in {Category} by {Author Name} – 3 comments

Hiding this information is specific to your theme, so not all solutions listed below will work for everyone.

## Check the Customizer

First, we recommend you check the WordPress Customizer. Sometimes a theme will provide a simple checkbox for you to hide this information.

1. Go to **Appearance > Customize**
2. Check all the panels to see if there’s an option to hide post meta data

Because every WordPress theme is built differently, it’s important to review theme settings carefully. For theme-specific questions, please refer to the theme developer’s documentation or support team.

## Look at your Theme Settings

Some themes have their own settings section that can be either a stand-alone tab or under the **Appearance**tab.

## Custom CSS

If you don’t find anything in the **Customizer**or your theme’s settings, you can use a little custom CSS. Again, this is heavily dependent on your theme, and might not work for everyone.

Hide on ALL LearnDash pages (works for many themes, but not all):

```
.single-sfwd-courses .entry-meta,
.single-sfwd-lessons .entry-meta,
.single-sfwd-topic .entry-meta,
.single-sfwd-quiz .entry-meta,
.single-sfwd-assignment .entry-meta {
	display: none;
}
```

If you’re using the Divi theme, use this instead:

```
.single-sfwd-courses .post-meta,
.single-sfwd-lessons .post-meta,
.single-sfwd-topic .post-meta,
.single-sfwd-quiz .post-meta,
.single-sfwd-assignment .post-meta {
	display: none;
}
```

For all other themes, please contact your theme developer and ask for steps to remove the post meta information.

## Use a Plugin

If none of those options work, some LearnDash users have had success with this plugin:

> WP Author, Date and Meta Remover

---

## How do I protect my course files & downloads?

**Source:** [https://learndash.com/support/kb/resources/user-guides/protect-files-downloads/](https://learndash.com/support/kb/resources/user-guides/protect-files-downloads/)

To protect your course content in LearnDash, it’s essential to leverage the right tools and settings to ensure that only authorized users can access your materials. Here’s a refined guide that focuses on effective content protection:

### 1. Use the LearnDash Integrity Add-On

The [Integrity Add-On](https://www.learndash.com/ld-add-ons/learndash-integrity/) offers several features designed to enhance content protection:

- **Hotlink Protection**: Prevents unauthorized users from accessing your course files by blocking direct links
- **Content Copy Prevention**: Disables right-click and text selection to minimize the risk of content copying.

To set this up:

1. Install and activate the Integrity Add-On via **LearnDash LMS > Add-Ons**.
2. Configure the settings according to your protection needs.

### 2. Host Videos on a Secure Platform

When using videos in your course, consider hosting them on Vimeo, which offers robust security features:

- **Domain-Level Privacy**: Restrict video playback to your domain.

Set up your videos on Vimeo and embed them into your LearnDash courses using the video URL. Please note that these special privacy settings are not available on the free Vimeo plan.

### 3. Control Access to Learning Materials

For downloadable content like PDFs or other resources:

- **Conditionally Display Content with Shortcodes**: Use the

[student] shortcode to ensure that only enrolled users can view or download the materials.

- Example: 
```
[student]Your download link here[/student]
```

```
For more information, refer to the LearnDash Shortcodes & Blocks documentation.

4. Restrict Course Display and Content

Make sure your course content is only visible to enrolled users:

Set the Course Access Mode:

Go to LearnDash LMS > Courses.

Edit the course and select the appropriate access mode (e.g., Buy Now, Recurring, or Closed) to restrict access.

For detailed configuration, see the LearnDash Course Display & Content Settings documentation.

5. Leverage Membership Plugins (Optional)

For advanced content protection, consider integrating with a membership plugin like MemberPress or Restrict Content Pro:

These plugins allow you to create membership levels and assign access to LearnDash courses based on the user's membership status.

By combining these methods, you can effectively protect your LearnDash course content, ensuring that only authorized users can access your materials while maintaining a smooth user experience.
```

---

## Recommended Hosting

**Source:** [https://learndash.com/support/kb/resources/user-guides/hosting/](https://learndash.com/support/kb/resources/user-guides/hosting/)

If you have not yet selected a host for your LearnDash site, or you are not happy with the performance of your current host, then read the article below:

> The Best Hosting For Your LearnDash Course Site

---

## WordPress Themes

**Source:** [https://learndash.com/support/kb/resources/user-guides/themes/](https://learndash.com/support/kb/resources/user-guides/themes/)

**NOTE**

These are only suggestions as LearnDash works with most themes that are coded using WordPress standards.

If you already have a WordPress theme installed, LearnDash will try to adopt your theme’s styling. If you have not yet selected a theme, then you can consider using one of the following…

**FREE**

- [Kadence](https://kadencewp.com)
- [Astra](https://support.learndash.com/astra-theme)
- [GeneratePress](http://bit.ly/1RPT586)

**PREMIUM**

- [BuddyBoss for LearnDash](https://www.buddyboss.com/learndash-lms-theme/ref/692/)
- [Academy Pro](https://my.studiopress.com/themes/academy/)
- [University Course and Event Theme](http://themeforest.net/item/university-education-event-and-course-theme/8412116?ref=jhf12)
- [Invent – Education Course Theme](https://themeforest.net/item/invent-education-course-college-wordpress-theme/9263796)
- [Lincoln – Education Material Theme](http://bit.ly/1ZbKQW4)
- [wOffice – Intranet/Extranet Theme](http://bit.ly/1Lmj8wO)
- [Education Center – Training Courses Theme](http://bit.ly/1PVfy2g)

You can further customize LearnDash to match your current theme using custom CSS, or check out one of the following plugins:

- [Visual Customizer](http://www.learndash.com/customizer) by Snap Orbital
- [Design Upgrade Pro](https://escapecreative.com/products/design-upgrade-learndash/) by Escape Creative
- [Elementor Pro](https://elementor.com/pricing/) by Elementor

---

