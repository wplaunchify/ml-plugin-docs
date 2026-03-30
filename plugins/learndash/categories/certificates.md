# Certificates

*Category from LearnDash documentation*

---

## Certificate Shortcodes

**Source:** [https://learndash.com/support/kb/core/certificates/certificate-shortcodes/](https://learndash.com/support/kb/core/certificates/certificate-shortcodes/)

Certificate shortcodes are exclusively for creating LearnDash certificates. They allow you to display dynamic information about the user, as well as the course or quiz that you’re awarding the certificate for. You can insert the user’s name, course title, date of completion, quiz grade and much more.

There are 4 main shortcodes, and then each shortcode has a handful of parameters to output various information.

- ```
[usermeta]
```

 displays user info
- ```
[courseinfo]
```

 displays course info (only works with certificates assigned to a course)
- ```
[quizinfo]
```

 displays quiz info (only works with certificates assigned to a quiz)
- ```
[groupinfo]
```

 displays group info (only works with certificates assigned to a group)

All certificate shortcodes are also listed in the WordPress admin area under LearnDash LMS > Certificates. Click on the Shortcodes tab at the top.

![LearnDash certificate shortcodes in admin](https://learndash.com/support/wp-content/uploads/2019/05/learndash-certificate-shortcodes-list-admin.jpg)

Looking for the full list of shortcodes you can use throughout your LearnDash site? [See all shortcodes](https://learndash.com/support/docs/core/shortcodes-blocks/).

## Gradebook Score Shortcode:

You can display the particular Grade book score of a sser on the certificate with the help of a [shortcode](https://learndash.com/support/docs/core/certificates/certificate-shortcodes/). You can use the following shortcode anywhere on the certificate, and it will display the grades of the particular Gradebook for the signed-in user:

```
[ld_overall_grade gradebook="[your ID]"]
```

**To do so, please follow the steps below:**

1. Go to your WordPress Dashboard > LearnDash LMS > Gradebook
2. Manage Gradebooks > Particular Gradebook > Hover your mouse over the name of the Gradebook > You’ll notice the ID at the bottom of your screen:

![](https://learndash.com/support/wp-content/uploads/2019/05/ss5-1.png)

**NOTE:** Please note that the Gradebook ID is required for the shortcode to display the score.

## [usermeta]

The 
```
[usermeta]
```

 shortcode has a handful of options to display user information. Let’s take a look at each one.

- ```
[usermeta field="first_name"]
```

 – Displays a user’s first name
- ```
[usermeta field="last_name"]
```

 – Displays a user’s last name
- ```
[usermeta field="display_name"]
```

 – Displays a user’s full display name, which is often a combination of {first_name} and {last_name}.
- ```
[usermeta field="user_login"]
```

 – Displays a user’s username
- ```
[usermeta field="nickname"]
```

 – Displays a user’s nickname (might not be captured upon user signup)
- ```
[usermeta field="user_email"]
```

 – Displays a user’s email address
- ```
[usermeta field="user_url"]
```

 – Displays a user’s website address(likely not captured upon user signup)
- ```
[usermeta field="description"]
```

 – Displays a user’s bio(likely not captured upon user signup)
- ```
[usermeta field="id"]
```

 – Displays a user’s WordPress assigned unique user id (assigned chronologically by WordPress upon user registration)

The most common 
```
[usermeta]
```

 shortcodes you’ll use are 
```
[usermeta field="first_name"]
```

 and 
```
[usermeta field="last_name"]
```

, as almost all certificates should include the student’s name.

**NOTE**: Not all of these values are collected when a student registers for or purchases a course. Different registration methods collect different info. Check with your ecommerce or checkout solution to see which fields are collected upon signup. You can also check this yourself by going to Users > All Users, and clicking on a user to edit their profile.

## [courseinfo]

The 
```
[courseinfo]
```

 shortcode should only be used for certificates assigned to a course. Let’s quickly define a few terms:

- Aggregate refers to the sum of all quizzes assigned to the course
- Cumulative refers to the average of all quizzes assigned to the course

Here are all the possible values:

- ```
[courseinfo show="course_title"]
```

 – Displays the course title
- ```
[courseinfo show="course_price"]
```

 – Displays the course price (only for one-time payment courses)
- ```
[courseinfo show="course_price_type"]
```

 – Displays the [Access Mode](https://learndash.com/support/docs/core/courses/course-access/) for the given course
- ```
[courseinfo show="course_url"]
```

 – Displays the course URL
- ```
[courseinfo show="course_points"]
```

 – Displays the total available points for the course
- ```
[courseinfo show="user_course_points"]
```

 – Displays the amount of points the user earned for the course
- ```
[courseinfo show="enrolled_on"]
```

 – Displays the course enrollment date (this does not apply to OPEN courses)
- ```
[courseinfo show="completed_on"]
```

 – Displays the date the course was completed
- ```
[courseinfo show="user_course_time"]
```

 – Displays the total time spent on a course
- ```
[courseinfo show="cumulative_score"]
```

 – Displays the average score for all graded parts of the course
- ```
[courseinfo show="cumulative_points"]
```

 – Displays the average points earned
- ```
[courseinfo show="cumulative_total_points"]
```

 – Displays the average points earned
- ```
[courseinfo show="cumulative_percentage"]
```

 – Displays the average percentage of all quizzes taken in the course
- ```
[courseinfo show="cumulative_timespent"]
```

 – Displays the average time spent on each part of the course
- ```
[courseinfo show="aggregate_score"]
```

 – Displays the final score received for the course
- ```
[courseinfo show="aggregate_points"]
```

 – Displays the total points earned for the course
- ```
[courseinfo show="aggregate_total_points"]
```

 – Displays the total points earned for the course
- ```
[courseinfo show="aggregate_percentage"]
```

 – Displays the total percentage score for all quizzes taken as part of the course
- ```
[courseinfo show="aggregate_timespent"]
```

 – Displays the total time spent on quizzes for the course as a whole

When using the 
```
completed_on
```

 parameter, you can also customize the date format. ([See available date formats](https://codex.wordpress.org/Formatting_Date_and_Time))

```
[courseinfo show="completed_on" format="F j, Y"]
```

## [quizinfo]

The 
```
[quizinfo]
```

shortcode should only be used for certificates assigned to a quiz. They will not work if used for a certificate assigned to a course. Here’s a list of all available options to output quiz information on a quiz certificate:

- ```
[quizinfo show="score"]
```

 – Displays the score received for that quiz
- ```
[quizinfo show="count"]
```

 – Displays the number of questions within the quiz
- ```
[quizinfo show="pass"]
```

 – Displays the score required in order to pass the quiz
- ```
[quizinfo show="timestamp"]
```

 – Displays the day/time when the quiz was completed
- ```
[quizinfo show="points"]
```

 – Displays the points received by the user on the quiz
- ```
[quizinfo show="total_points"]
```

 – Displays the total possible points that can be received for a given attempt
- ```
[quizinfo show="percentage"]
```

 – Displays the percentage grade received by the user on the quiz
- ```
[quizinfo show="quiz_title"]
```

 – Displays the name of the quiz
- ```
[quizinfo show="course_title"]
```

 – Displays the name of the course that the quiz is associated with
- ```
[quizinfo show="timespent"]
```

 – Displays the time spent taking the quiz

Again, you can customize the date format when using the timestamp option.

```
[quizinfo show="timestamp" format="F j, Y"]
```

## [groupinfo]

The 
```
[groupinfo]
```

 shortcode should only be used for certificates assigned to a group. They will not work if used for a certificate assigned to a course or a quiz. Here’s a list of all available options to output quiz information on a group certificate:

- ```
[groupinfo show="group_title"]
```

 – Displays the group’s title
- ```
[groupinfo show="group_url"]
```

 – Displays the group’s URL
- ```
[groupinfo show="group_price_type"]
```

 – Displays the group’s Access Mode
- ```
[groupinfo show="group_price"]
```

 – Displays the group’s price
- ```
[groupinfo show="group_users_count"]
```

 – Displays the number of group enrollees
- ```
[groupinfo show="group_courses_count"]
```

 – Displays the number of courses in the group
- ```
[groupinfo show="user_group_status"]
```

 – Displays the group progress status of the user
- ```
[groupinfo show="enrolled_on"]
```

 – Displays the date the user enrolled into the group
- ```
[groupinfo show="completed_on"]
```

 – Displays the date the user completed all courses assigned to the group
- ```
[groupinfo show="percent_completed"]
```

 – Displays the score achieved in the group’s courses

Again, you can customize the date format when using the timestamp option.

```
[groupinfo show="timestamp" format="F j, Y"]
```

---

## Create a Certificate

**Source:** [https://learndash.com/support/kb/core/certificates/create-certificate/](https://learndash.com/support/kb/core/certificates/create-certificate/)

## Using certificates in LearnDash is a 2-step process:

1. Create a certificate
2. Associate the certificate with a course, group, or quiz

This section will explain how to create a certificate. Please see our other docs for associating them with a [course](https://www.learndash.com/support/docs/core/courses/course-display/#course_certificate), [group](https://www.learndash.com/support/docs/users-groups/groups/group-display-content-settings/#group-certificate), or [quiz](https://learndash.com/support/kb/core/quizzes/quiz-access-progression/).

**NOTE**: An easier way to create certificates is using our [Certificate Builder](https://learndash.com/support/docs/add-ons/certificate-builder-add-on/) add-on. You can easily build certificates using the Gutenberg Block Builder using the add-on.

## Add a New Certificate

1. Navigate to LearnDash LMS > Certificates
2. Click the Add New button

![LearnDash add new certificate button in admin](https://learndash.com/support/wp-content/uploads/2019/05/learndash-add-new-certificate-button.jpg)

You’ll be directed to a new screen where you can start creating your certificate. Here’s an overview of each type of information that can be added to your certificate.

![LearnDash certificate admin screen overview](https://learndash.com/support/wp-content/uploads/2019/05/learndash-certificate-admin-screen-annotated.jpg)

## Title

The certificate title is only for internal use. Your users will not see this title, but it will be the name that appears in dropdown menus when you go to apply it to a course, group or quiz. Be sure to name it something you’ll recognize.

![Choosing LearnDash certificate from dropdown](https://learndash.com/support/wp-content/uploads/2019/05/learndash-choosing-course-certificate-dropdown.jpg)

## Featured Image

Adding a featured image is the way in which you apply a design, or style, to your certificate.

- **IMPORTANT:**You must use 
```
.jpg
```

 images, no more than 1MB in size. This also keeps your loading time to a minimum.
- The size of your image should match your page size and orientation (see below). If you’re using an 11″ x 8.5″ US Letter size in landscape orientation, your image should match these dimensions. If you want your certificates to look great when printed, please also use 300 dpi.
- You may include text as part of your image. There are no restrictions to what you include in the image, but keep in mind, it will be shown on all certificates to all users. Text contained within an image is not dynamic and cannot be customized for each user.

To add a featured image:

1. Click the “Set featured image” link
2. Choose an image from your Media Library, or upload a new one
3. Click the Set featured image button

![How to set a LearnDash certificate image](https://learndash.com/support/wp-content/uploads/2019/05/learndash-certificate-set-image-animation.gif)

**KNOWN ISSUES**: Some image optimization plugins are known to cause issues with certificate images, especially the [SG Optimizer plugin](https://wordpress.org/plugins/sg-cachepress/) from SiteGround. If your images are distorted, or contain large areas of all black, please disable image optimization for the images you’re using for certificates.

### How to Create an Image

You can use any image creation or editing program you’d like, hire a designer or use images from a graphics library (please check the license to make sure you have permission). Here are a few suggestions:

- [Canva](https://www.canva.com/) allows you to use pre-made templates for free, and add some customization of your own. Small upgrades are available, and very affordable.
- [Envato Elements](https://elements.envato.com/all-items/certificate) is a premium graphics library with tons of pre-made certificate templates.
- [Creative Market](https://creativemarket.com)****is another premium marketplace where you can find certificate templates, as well as graphics to make your own.
- [Adobe’s Creative Cloud](https://www.adobe.com/creativecloud.html) is also an option for more design-oriented users, or anyone already familiar with their design software (Photoshop, Illustrator, InDesign, etc.). A premium subscription is required.

## Content

Your certificate content will mostly consist of dynamic fields that are generated for each individual user who is awarded a certificate. For example:

- User’s Name
- Course Title
- Date of Completion
- …etc.

These types of dynamic fields are inserted via shortcodes. We have an entire article dedicated to [certificate shortcodes here](https://learndash.com/support/docs/core/certificates/certificate-shortcodes/)

When adding your certificate content, you’ll need to use some HTML & CSS to set up the overall layout, spacing, sizing, etc. We’ll walk you through some common layouts below, and how to achieve various designs.

### Certificate Custom Styles (CSS)

If you know your way around CSS codes and styles, you can add your own custom CSS stylesheet to apply globally to all of your certificates.

You can find it here:

1. Navigate to LearnDash LMS > Certificates
2. Click on the Settings tab
3. Scroll down to the “Custom Styles (CSS)” metabox

![Certificate custom styles](https://learndash.com/support/wp-content/uploads/2019/05/Certificate-custom-styles.png)Certificate with custom styles

By adding your own custom CSS styles, you eliminate the need to constantly re-type and re-style all of the elements that you add to your certificates. You can easily assign classes and IDs to these elements (e.g. paragraphs, shapes, and headings) and then add the styles that will apply globally to all your certificates. This will help you stay on brand.

**NOTE**: The Certificate Custom Styles (CSS) is only applicable to legacy certificates, e.g., certificates created using the method stated above. These styles will not be applied to certificates created using the [Certificate Builder Add-On.](https://learndash.com/support/docs/add-ons/certificate-builder-add-on/)

### Vertical Spacing

You might want to insert the course title at the top of a certificate, the user’s name in the middle, maybe at a completion date at the bottom, etc. One of the best ways to control vertical spacing, and move content up or down on your certificate, is to use the 
```
line-height
```

 property.

Wherever you need to insert some blank vertical space, you can use the following code:

```
<p style="line-height:20px;"></p>
```

This would add 20 pixels of vertical space. You can adjust the 
```
20px
```

 to another value. Since our final certificate uses inches, not pixels, you’ll need to play around with this value to achieve your desired result. (see below for [previewing certificates](#previewing_certificates))

You can insert as many of these spacers as you need throughout the certificate.

### Horizontal Spacing (Indentation)

There are a few ways to go about horizontal spacing.

If you need to center your text in the middle of the certificate, you can use 
```
text-align:center;
```

. Here’s an example of the user’s first name, centered horizontally:

```
<p style="text-align:center;">[usermeta field="first_name"]</p>
```

By default, all text will be aligned to the left edge of the certificate (right edge for RTL languages). If you need to indent something, you can use the 
```
text-indent
```

 property. Here’s an example of the course completion date being pushed vertically towards the bottom of the page, then indented to move it to the far-right corner.

```
<p style="line-height:150px;"></p>
<p style="text-indent:200px;">[courseinfo show="completed_on" format="F j, Y"]</p>
```

You’ll need to adjust the 
```
150px
```

 and 
```
200px
```

 values to match up with your certificate image.

### Font Size

You can also adjust the font size of any text. Let’s say you wanted your user’s first & last name to be quite large (
```
30px
```

), then a small vertical space (
```
10px
```

), and then the course title not quite as large as the name (
```
20px
```

), you could do this:

```
<p style="font-size:30px;">[usermeta field="first_name"] [usermeta field="last_name"]</p>
<p style="line-height:10px;"></p>
<p style="font-size:20px;">[courseinfo show="course_title"]</p>
```

### Font Family

Different computers come pre-installed with different fonts. Some users will have a font installed, and others might not. So there isn’t a ton of flexibility with using custom fonts in certificate creation. However, you can switch between serif and sans-serif fonts, as both should work for most of your users. Here’s an example using a generic serif font:

```
<p style="font-family:serif;"></p>
```

### Color

You can adjust the color of any text on your certificate. If your image has a dark background, you can use the 
```
color
```

 property to make your text white.

```
<p style="color:#ffffff;"></p>
```

You can combine multiple properties at the same time. If you wanted to indent the user’s first and last name, adjust the font size, and change the color to red, it would look like this:

```
<p style="text-indent:20px;font-size:30px;color:red;">[usermeta field="first_name"] [usermeta field="last_name"]</p>
```

## Certificate Options

There are a few additional options you can set for your certificate.

### PDF Page Size

Choose between the following options:

- **US Letter (default):** 8.5″ x 11″
- **A4:** 8.3″ x 11.7″

### PDF Page Orientation

Choose between the following options:

- **Landscape (default):** width is longer than height
- **Portrait:** height is longer than width

## Certificate File Format

When a user earns a certificate, either by completing a course or passing the certificate threshold for a quiz, they’ll be able to download it in PDF format. All LearnDash certificates are provided as a 
```
.PDF
```

 file.

When a user clicks a button to get their certificate, some web browsers will open the PDF file in the browser, and others might download the file to the user’s computer. Whatever the default behavior for that user’s browser is, that’s how LearnDash certificates will behave as well.

## Previewing Certificates

Before applying your certificate to a course or quiz, you’ll want to preview it so you can see how it looks. You can create a quick test quiz that is only used for previewing your certificate.

1. Create your certificate, and make sure you Publish it
2. Then, navigate to LearnDash LMS > Quizzes
3. Click Add New to create a new quiz
4. Give the quiz a title
5. On the Settings tab, next to Quiz Certificate, choose the certificate that you want to preview
6. Add a single choice question to the quiz, with an obvious correct answer
7. Publish the quiz
8. Open the quiz in a new tab
9. Choose the correct answer, and click Finish Quiz
10. Click the Print Your Certificate button

Alternatively, you could create a test course with only one lesson. Then you’d mark that lesson complete, and you’d be able to view your certificate that way.

This will open your certificate in a new tab so you can preview it. Keep this tab open, and each time you make a change to your certificate in the backend, simply refresh this page and the updated version of your certificate will be loaded.

**NOTE**: Don’t forget to delete this quiz (or course) when you’re finished testing your certificate.

## Re-downloading Your Certificates

Users who have earned certificates from courses and quizzes can redownload them by visiting the courses that they took. Upon opening those courses and quizzes, they will see a message that says “You have earned a certificate” and a button to view or download the certificate.

This will also appear on the profile page when you use the shortcode
```
ld-profile
```

.

## Video Tutorial

In this webinar, we demonstrate how to create a certificate from beginning to end. Includes best practice advice and helpful tips for creating dynamic content.

**NOTE**: An easier way to create certificates is using our [Certificate Builder](https://learndash.com/support/docs/add-ons/certificate-builder-add-on/) add-on. You can easily build certificates using the Gutenberg Block Builder using the add-on.

---

## Certificates

**Source:** [https://learndash.com/support/kb/core/certificates/certificates/](https://learndash.com/support/kb/core/certificates/certificates/)

Certificates are a great way to reward your students for a job well done. You might want to offer an official certification, or just give them a tangible way to prove their competence.

You can award certificates in two ways:

- Upon successful completion of a course
- Upon the passing of a quiz

Using certificates in LearnDash is a 2-step process:

1. Create a certificate
2. Associate the certificate with a course or quiz

This section will explain how to create a certificate. Please see our other docs for associating them with [a course](https://learndash.com/support/docs/core/courses/course-display/#course_certificate) or [a quiz](https://learndash.com/support/docs/core/quizzes/quiz-access/#quiz_progression_restriction_settings).

- [Create Certificates](https://learndash.com/support/docs/core/certificates/create-certificate/)

How to design & add text to a certificate
- [Certificate Shortcodes](https://learndash.com/support/docs/core/certificates/certificate-shortcodes/)

Options for displaying dynamic content on a certificate

---

