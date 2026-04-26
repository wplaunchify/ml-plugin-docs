# User Guides

*Category from LearnDash documentation*

---

## Trusted Login

**Source:** [https://learndash.com/support/kb/resources/user-guides/trusted-login/](https://learndash.com/support/kb/resources/user-guides/trusted-login/)

The **Trusted Login** feature allows you to provide easy, quick, and secure Access to your site for the LearnDash Support Team. You no longer need to worry about manually setting up a user account, making sure you have the right email address, creating a secure password, or choosing the right role. This feature takes care of all the little details for you, and more importantly, you no longer need to share a username/password over email for the Support Team to log into your site.

## Setup

1. Ensure that you have an active support ticket open with our team ( [https://account.learndash.com/support](https://account.learndash.com/support) )
2. Visit **LearnDash LMS** > **Help** in your WordPress Admin Dashboard
3. Click on the **Provide Support Access** button
4. Click the **Grant LearnDash Access** button
5. You’ll see a notice about the user account being created, and then a confirmation.
6. Notify the LearnDash Support team in your ticket and share the Site Access Key – that’s it!

After following the setup above, a link is automatically added to your open support ticket that our team will use to access your site. The feature creates an account on your site that provides the LearnDash Support Team with the appropriate role/capabilities needed to perform most actions.

By default, the user account will exist for 1 week, after which Access is automatically removed, and the created user account is deleted.

In the event that we need additional levels of Access to investigate something, you’ll be notified on your support ticket with the information the Support Team needs.

## How do I remove Access?

1. **Visit LearnDash LMS > Help, click on the**Provide Support Access button.
2. Click the **Revoke Access** button.

## How can I extend Access?

1. Visit **LearnDash LMS > Help**, click on the Provide Support Access button
2. Click the **Extend LearnDash Access** button

This will create a new 1-week period of Access using the same account that was initially created.

**Note**: While this mentions extending access, it resets the current access back to 1 week. For example, if the display shows that there are 4 days of access time left, extending access will set the time back to 1 week, and not 11 days.

## What do I do with the Site Access Key?

You will need to share this information with the support team. They will require the **Site Access Key** to use Trusted Login for accessing your site. The **Site Access Key** can only be used within Trusted Login, so it is safe to share it in your support ticket.

---

## Translation

**Source:** [https://learndash.com/support/kb/resources/user-guides/translate-learndash/](https://learndash.com/support/kb/resources/user-guides/translate-learndash/)

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

**Source:** [https://learndash.com/support/kb/resources/user-guides/remove-take-course-button/](https://learndash.com/support/kb/resources/user-guides/remove-take-course-button/)

1. Navigate to LEARNDASH LMS > COURSES
2. Click on the course you’d like to hide the button for
3. Click the **Settings** tab
4. Under “Course Access Settings,” set the [Access Mode](https://learndash.com/support/docs/core/courses/course-access/)to **Closed**and leave the Button URL field blank

![LearnDash closed course with no button URL](https://learndash.com/support/wp-content/uploads/2018/09/learndash-course-access-closed-button-url-blank.jpg)

---

## How do I hide post meta data (date, author, comments, etc.)?

**Source:** [https://learndash.com/support/kb/resources/user-guides/hide-post-meta/](https://learndash.com/support/kb/resources/user-guides/hide-post-meta/)

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

**Source:** [https://learndash.com/support/kb/resources/user-guides/protect-file-downloads/](https://learndash.com/support/kb/resources/user-guides/protect-file-downloads/)

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

