# Certificate Builder Add On

*Category from LearnDash documentation*

---

## Certificate Builder Add-On

**Source:** [https://learndash.com/support/kb/add-ons/certificate-builder-add-on/certificate-builder-add-on/](https://learndash.com/support/kb/add-ons/certificate-builder-add-on/certificate-builder-add-on/)

The LearnDash certificate builder add-on gives you the ability to create and design your certificates easily using the built-in Gutenberg Builder making it simple for those who would like to create certificates using a WYSIWYG editor.

There will be a few options that we will discuss below.

**NOTE**: This add-on requires the LearnDash LMS plugin to function properly.

## Installation

#### Option 1: Add-ons Menu (requires an active LearnDash license)

1. On your WordPress admin area, navigate to LearnDash LMS > Add-Ons
2. Locate the Certificate Builder add-on
3. Click Install – the add-on will be added to the Install list
4. Click the Activate button

#### Option 2: Manual Upload

1. Download the [plugin file](https://account.learndash.com/plugins/) (must be [logged in](https://account.learndash.com/) to download)
2. In WordPress, navigate to Plugins > Add New
3. Click Upload Plugin
4. Browse for the**.zip** file you downloaded in Step 1
5. Click Install – the add-on will be added to the Install list
6. Click the Activate button

## How It Works

In order to use the block editor, you need to click on the “Use Certificate Builder” button on the Certificate Page.

In your WordPress admin area, go to LearnDash LMS > Certificates

1. Click on Add New

.kadence-column4106_aa505d-1f > .kt-inside-inner-col,.kadence-column4106_aa505d-1f > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column4106_aa505d-1f > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4106_aa505d-1f > .kt-inside-inner-col{flex-direction:column;}.kadence-column4106_aa505d-1f > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column4106_aa505d-1f > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column4106_aa505d-1f{position:relative;}@media all and (max-width: 1024px){.kadence-column4106_aa505d-1f > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column4106_aa505d-1f > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
![LearnDash Certificates](https://learndash.com/support/wp-content/uploads/2021/03/LearnDash_Certificates.png)LearnDash Certificates

1. Once you are on the Certificate Page, click on the Use Certificate Builder button in order to enter the Blocks Editor and you can start creating your certificate

![](https://learndash.com/support/wp-content/uploads/2021/03/Use_Certificate_Builder-1.png)

Assuming that you already have courses and quizzes created, you can associate the certificate after creating them to be awarded upon completion of the course, quiz or group.

**NOTE**: If you use it on a working certificate, the content will get replaced with the Gutenberg block. It is recommended to use the builder with a fresh certificate.

### Add A Title

If you plan to reuse this certificate for multiple courses, you may want to keep the title more generic, like Course Certificate. However, if you plan on using this for a specific course or quiz, consider adding a title that includes the course or quiz name. This title is only visible on the back end.

### Add A Background

The first screen is a media uploader screen, where you need to provide a background image to continue. Do note that it is a requirement to add a background to your certificate in order to proceed with using the certificate builder.

![](https://learndash.com/support/wp-content/uploads/2021/03/Add_a_background.png)

After the background image is uploaded, from here, you can use other Gutenberg blocks to lay out the certificate. The blocks will simply fall on top of the existing background image that you choose.

**NOTE**: If you are using any media offloading plugins to replace the normal WP media image URL with something that is not hosted locally, you may see an error message about the background image missing. In this case, you will need to ensure that the background image is hosted locally on your server.

### Adding Content

Just like any other page or content, you are free to use the Gutenberg editor to create and customize your certificate.

You are free to use any type of Gutenberg blocks, even with dynamic content such as the LearnDash Courseinfo, Quiz info, Usermeta and Group info**.** Just look for these blocks from the drop-down on your Blocks Editor.

You can also install plugins that can allow you to use more blocks and shortcodes that are not currently available with the Gutenberg Builder. Blocks such as dynamic current date and time, dynamic images, and other content-related blocks.

### LearnDash Blocks

LearnDash provides four blocks you can use for your certificate.

- **LearnDash Course Info** – shows dynamic data specific to the course (e.g. Course Completion Date, Course Title, Course Points, etc.)
- **LearnDash Quiz Info** – shows dynamic data specific to a quiz (e.g. Quiz Title, Quiz Score, Quiz Timestamp, etc.)
- **LearnDash User Meta** – shows dynamic data specific to an individual user (e.g. User First Name, User Last Name, User Login, etc.)
- **LearnDash Groups Info** – shows dynamic data specific to a group (e.g. Group Title, Group Completed On, Group Completed Percentage, etc.)

**IMPORTANT**: Use the LearnDash Course Info for certificates you plan to associate with a course, and LearnDash Quiz Info for certificates you plan to associate with a quiz. If you associate the certificate that contains the LearnDash Quiz Info block, with a course, that data will not appear.

![certificate builder block options](https://learndash.com/support/wp-content/uploads/2021/03/Screen-Shot-2023-06-08-at-10.23.03-AM.png)

### Fonts

You have the option to use custom fonts for the following blocks:

- Heading
- LearnDash Usermeta
- LearnDash Courseinfo
- LearnDash Groupinfo

You can find these options on the Block Settings section on the right-hand sidebar of your Editor screen.

![](https://learndash.com/support/wp-content/uploads/2021/03/fonts_on_certificate.png)

You can add custom fonts to be used for the certificates on the Fonts section of your certificates page.

.kadence-column4106_07bf25-a4 > .kt-inside-inner-col,.kadence-column4106_07bf25-a4 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column4106_07bf25-a4 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4106_07bf25-a4 > .kt-inside-inner-col{flex-direction:column;}.kadence-column4106_07bf25-a4 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column4106_07bf25-a4 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column4106_07bf25-a4{position:relative;}@media all and (max-width: 1024px){.kadence-column4106_07bf25-a4 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column4106_07bf25-a4 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
1. Go to LearnDash LMS > Certificates > Fonts

![Font Settings](https://learndash.com/support/wp-content/uploads/2021/03/fonts_settings_certificates.png)Font Settings

1. Add a Label to your font.
2. Click Choose File on the specific style that they belong in
3. Browse for the file on your computer
4. Click Save Changes to finish the process

![Upload fonts to customize your certificate](https://learndash.com/support/wp-content/uploads/2021/03/upload_fonts_certificates-1.png)Upload fonts to customize your certificate

**NOTE**: Make sure that if you are using the certificates for commercial purposes, you have acquired the necessary licenses and permissions before using custom fonts.

Once you are done uploading the fonts, you can go back to the certificate builder and choose the font when building your certificate.

You also still have the option to use different font styling options for your certificates.

### Previewing Your Certificate

One other feature of the certificate builder is the ability to preview your certificates in real time with real information.

1. On your Certificate Builder, click on Preview
2. Select Desktop
3. View your certificate in a PDF format

![Preview in New tab certificates](https://learndash.com/support/wp-content/uploads/2021/03/preview_in_new_tab_certificates-1.png)Preview in New tab certificates

**NOTE**: Do note that the previews will need real data when building the certificate, such as the LearnDash Courseinfo. Information about the current user will be pulled when previewing.

**Tip:** Create a test course/quiz and associate this certificate with it. Complete the course/quiz to see exactly what the certificate will look like. Then you can go back to the builder and make edits as needed and click the Preview button to see your edits.

Once you are done, click on Update and associate the certificate that you just created with a course, quiz, or group. You can learn more about certificates on our[Certificates documentation.](https://learndash.com/support/docs/core/certificates/)You can also check out our [Certificate Shortcodes documentation](https://learndash.com/support/docs/core/certificates/certificate-shortcodes/) to learn more about how to properly use shortcodes like 
```
courseinfo
```

, 
```
groupinfo
```

, and 
```
usermeta
```

.

You can also check out this quick video on how to create a certificate using the LearnDash Certificate Builder add-on:

## FAQs

### Why is my certificate background blank?

First, check to ensure you are using the most up to date Certificate Builder add-on version. If so, check to see if you are using any Image Optimization plugins on your site. Some image optimization plugins are known to cause issues with certificate images, especially the SG Optimizer plugin from SiteGround. If you are using any image optimization plugin, you will need to disable image optimization for any image you use for the certificates.

### Why is the Certificate Completion Date not appearing?

You can award certificates in three ways:

1. Upon successful completion of a course
2. Upon the passing of a quiz
3. Upon completing ALL courses associated to a Group

So if you associate the certificate to the course, you would need to use the [courseinfo] shortcode or Block. While if you associate the certificate to the quiz, you would need to use the [quizinto] shortcode or Block. If you use the wrong shortcode type, the dynamic content (i.e. course completion) will not appear.

For example, if the certificate is associated to a course, you would use:
Displays the date the course was completed: 
```
[courseinfo show="completed_on"]
```

If the certificate is associated to a quiz, you would use:
Displays the day/time when the quiz was completed: 
```
[quizinfo show="timestamp"]
```

### How can I preview the certificate?

When using the Certificate Builder, you can preview the certificate by going to Preview > Preview in new tab.

The dynamic content is pulled from the database so if you do not have the certificate associated with a course or quiz first and have not completed the course or quiz, no data will appear.

Before clicking Preview, create a test course or quiz and associate the certificate. Complete the course or quiz and then return to the certificate builder to preview the data.

Here is more information on [Certificate Builder Preview](https://learndash.com/support/docs/add-ons/certificate-builder-add-on/#previewing_your_certificate).

---

