# Administration

*Category from FluentCommunity documentation*

---

## Generating a Sitemap

**Source:** [https://fluentcommunity.co/docs/generating-a-sitemap/](https://fluentcommunity.co/docs/generating-a-sitemap/)

FluentCommunity Pro includes a built in Sitemap Configuration tool to help search engines like Google discover and index your public community content. This makes it easier for your spaces, courses, and member profiles to appear in search results without requiring a third-party SEO plugin.

> Use Case: You have created several public spaces and courses that you want to rank in Google search results. By generating a sitemap and submitting it to Google Search Console, you are giving Google a direct roadmap to all the important, indexable content in your community.

### How to Find the Sitemap Tool

You can access the sitemap settings directly from your WordPress dashboard.

1. Navigate to **FluentCommunity → Settings**.
2. Click on the **Tools** tab.
3. Here you will see the **Sitemap Configuration** page.

![Generating Sitemap](https://fluentcommunity.co/wp-content/uploads/2025/07/fluentcommunity-sitemap-scaled.webp)

### What the Sitemap Includes

To protect your privacy, the generated sitemap is designed to include only the public-facing content across your community.

- Public Spaces
- Public Courses (Pro)
- Public Posts & Discussions
- Member Profiles (only if profile visibility is set to public)

> Note: All Private and Secret content is automatically excluded from the sitemap to protect your members and any sensitive data.

### How It Works

The sitemap is generated and updated automatically by FluentCommunity; no manual setup is required. The system creates a standard XML file at a dedicated URL, which looks something like this: https://yourdomain.com/portal/site-map/index.xml

This URL is fully compatible with all major search engines and SEO tools.

### Using Your Sitemap

Once the sitemap is generated, you can use its URL in several ways:

- **Submit to Search Engines:** Copy the sitemap URL and submit it directly to Google Search Console and Bing Webmaster Tools.
- **Use with SEO Plugins:** If you use a plugin like Rank Math or Yoast SEO, find the setting for “Additional Sitemaps” or “External Sitemaps” and paste your FluentCommunity sitemap URL there. This tells your SEO plugin to include your community content in its main index.

> Troubleshooting: If your sitemap appears to be missing content, the most common reason is a caching issue. Try clearing all caches from your caching plugins and your server or CDN. Also, double-check that the spaces or courses you expect to see are set to “Public.”

---

## Content Moderation Settings

**Source:** [https://fluentcommunity.co/docs/content-moderation-settings/](https://fluentcommunity.co/docs/content-moderation-settings/)

**FluentCommunity** gives you more control over your community with its new **Content Moderation**feature. This feature allows you to review, filter, and manage user-generated content to keep the community safe and respectful for all members. It also helps prevent spam, harmful, and abusive **Content** (i.e., **Post** and **Comment**), ensuring a positive environment.

This article will guide you through setting up the **Content Moderation**in your  **FluentCommunity**.

## Enable Content Moderation

To start the process, first, you need to enable the **Content Moderation** in your FluentCommunity. To learn the process, follow the steps below –

Go to **Settings** from the **FluentCommunity** **Left Sidebar**, open the **Content Moderation**, click **Enable Content Moderation**, and the **Content Moderation Settings** will be enabled.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/1.-Enable-Content-Moderation-scaled.webp)

### Repost a Post/Comment

Once you enable the settings, the **Report Post** and **Report Comment** options will be enabled. Without enabling this option, users can not report any content.

To report a post/comment, go to the desired post/comment, click the three-dot icon, press the Report Post/Comment option, and that post/comment will be reported.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/2.-Report-a-desired-post-scaled.webp)

### Statuses of Moderated Content

In the **Content Moderation**settings page, you will have four **Status** options under which the reported content (includes feed **posts** and **comments**) will be held. These are:

- **A. Pending**: This status includes content that has been reported by community members and is awaiting admin/moderator approval for moderation. All reported content remains here until an admin/moderator reviews it and decides whether to keep it (by ignoring the report) or remove it (by unpublishing it).

- **B. Flagged**: Here, you will find content that has already been flagged (i.e., content that automatically goes into the review state before being posted, based on your Moderation Settings). All flagged content remains here until an admin/moderator reviews it and decides whether to approve it (by ignoring the report) or disapprove it (by unpublishing the report) for the feed.

- **C. Ignored**: In this section, you’ll find all the reported **Pending** and **Flagged** content you chose not to act on by simply ignoring the report requests and keeping the post/comment as it is on the feed.

- **D. Unpublished**: This status includes all reported **Pending** and **Flagged** content that you have unpublished (removed) from the feed.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/3.-four-Status-option-scaled.webp)

### Setup Moderation Settings

You will also have another **Settings** option to define which content will automatically go under the **Flagged** status (i.e., go for the review state before being posted).

To learn the process of setting up the **Moderation Settings**, follow the steps below:

Open the **Content Moderation** page from the left menu of **FluentCommunity** **Settings** and click the **Settings** button of**Content Moderation** in the top right corner.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/4.-Settings-of-Content-Moderation--scaled.webp)

Now, a **Moderation Settings**popup page will appear with various settings options. These are:

> Remember, before starting the process, make sure this Enable Content Moderation checkbox is enabled. But if you don’t want any content being reported by users, just disable the settings.

**A. Profanity Filte**r: This filtering tool detects and blocks offensive language in text or communication to maintain respectful and safe conversations. Here, provide the words (separated by commas) you want to use for content filtering.  If any Post/Comment contains the provided word/s, it will automatically be moved to the review state (i.e., **Flagged** status) and wait for the approval.

**B. Flag a post or comment after it’s reported X times**: Using this option, you can set the number of reports after which content will be unpublished automatically. Set it to **“0”** if you want this feature disabled.

**C. Make all new posts as Pending**: This setting ensures that every new post created by users is automatically marked as **Flagged** for review. This means new posts/comments will not appear on the feed until an admin/moderator reviews and approves them.

**D. Require approval for first post**: This setting requires admin/moderator approval only for the first post made by a new/old user. Once their first post is approved, their future posts will be published directly without requiring review.

**E. Mark all new posts as Pending in the given spaces:** Here you can define the space/s which new posts will be flagged. This means, any new posts of the selected space/s will be flagged for review and hidden until approved by admin/moderator.

After completing the setup, click the **Update** button to save all your changes and make it functional.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/5.-Moderation-Settings-pop-up.webp)

## How to Review/Ignore/Unpublish a Reported Content

To learn how to **Review/Ignore/Unpublish** a Reported Content, follow the steps below –

First, go to FluentCommunity **Settings**, open the **Content Moderation** page, go to the **Pending** or **Flagged** status, and select the desired **Post** or **Comment**.

Now, open the Three-dot Icon in the right side, and you will get the following options:

- **Review Report**: This option allows you to review the details of the report submitted by community members. It helps you understand why the post/comment was reported and decide whether further action is needed.

- **Ignore Reports**: This option lets you dismiss the report request without taking any action. The reported post/comment will remain published on the feed as it is.

- **Unpublish Comment/Post**: This option allows you to remove the reported post/comment from the feed without deleting it entirely. The content will no longer be visible to users but can be restored later if needed.

- **Delete Report**: This option removes the report itself from the system. It does not affect the post/comment, which will remain published unless you take additional action.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/6.-ReviewIgnoreUnpublishelete-any-Post-or-Comment-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Access Management Through FluentCRM Tags

**Source:** [https://fluentcommunity.co/docs/access-management-through-fluentcrm-tags/](https://fluentcommunity.co/docs/access-management-through-fluentcrm-tags/)

FluentCommunity allows you to automatically **Join/Enroll** the **Members/Students** and give them access to manage the **Spaces/Courses** based on **FluentCRM** **Tags**.

This article covers detailed information about **Access Management of Spaces/Courses** for **FluentCommunity** using **FluentCRM Tags**.

> Remember, before starting the process, make sure you install and activate the FluentCommunity Pro Plugin and FluentCRM plugin on your WordPress Site to use this feature.

## Enabling Access Management

First, go to **Settings** of **FluentCommunity** from the below-left corner and open the **Access Management** tab from the left-side menu.

Now, check the **Enable Access Management with FluentCRM** box to enable this feature.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/1.-Enable-Access-Management-with-FluentCRM-option-scaled.webp)

### Configuring Tags with Spaces/Courses

Once you enable the **Access Management** option, you will get three more checkboxes. These are:

1. **Create Contact in Fluent CRM**: Check this box if you want to create a new contact in FluentCRM when a member who does not exist in CRM Contacts joins the configured Spaces/Courses.

1. **Create User in WordPress**: Check this box if you want to create a new WordPress when configured tag will be applied to a CRM contact to add to the Spaces/Courses.

1. **Send default welcome email**: Check this box if you want to send the default WordPress welcome and password set email to the users created through tagging.

Finally, map the **FluentCRM** **Tag/s** to their corresponding **Space/s** or **Course/s**by clicking the**Arrow Icon**.

Also, don’t forget to check the “**Sync this tag with Space/Course access”**box to ensure the CRM Contacts add to the **Spaces/Courses**based on selected **Tag/s**.

**“For example**, I set “**New**” as the CRM tag for the “**Announcement**” space. Now, any **CRM** **Contact** with the “**New**” tag will automatically become a member of the **Announcement** space.”

Once you are done, click the **Save Settings** button to save all the changes.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/2.-Save-Settings.webp)

### Workaround for Existing Contacts

Access Management controls adding contacts to Spaces and Courses based on tags. However, it only takes effect after a tag is set within Access Management. If a contact already had the tag before it was configured in Access Management, they won’t be added automatically. The contact will only join the Space or Course once the tag is set through Access Management.

Here, we’ll show you how to add contacts to your Space or Courses using that tag. This workaround also allows you to perform various actions in Fluent Community.

First, go to **FluentCRM** and select **Contacts** from the navigation bar. Then, filter your contacts by **Tags** and find the tag that you’ve set in **FluentCommunity Access Management**. Once you locate it, select the tag.

For example, here, we have selected the **“New”** tag.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/Existing-Contact-Tag-1-1-scaled.webp)

Alternatively, you can use FluentCRM’s **Advanced Filter** option to find contacts more precisely, add them to another tag, or perform other actions as needed.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/Adding-Existing-Contact-1-1-scaled.webp)

Now, you’ll see the filtered contacts for the **“New”** tag that we selected as an example. Select all contacts or choose specific ones that existed previously, based on your preference.

Next, you’ll find the **Select Action** option, which provides various bulk actions for your contacts.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/Existing-Contact-Tag-2-scaled.webp)

In the dropdown menu, you’ll find several **FluentCommunity** actions, including:

- **Add to Space**
- **Remove from Space**
- **Add to Course**
- **Remove from Course**
- **Add Badge to Profile**
- **Remove Badge from Profile**

Select the action you want to apply to your contacts. For example, here, we’re choosing **“Add to Course.”** After selecting this option, another dropdown will appear where you can choose the specific course to add your contacts to.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/Existing-Contact-Tag-3-scaled.webp)

Finally, click the **“Add to Selected Course”** button, and all selected contacts will be added to the course you’ve chosen.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/Existing-Contact-Tag-4-scaled.webp)

#### Preview of Added Contacts

Here, you can see the “**New**” tag is applied to a CRM Contact named “**Tulip Daisy**”.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/3.-Preview-of-tagged-crm-contacts.webp)

And, you can see the**“Tulip Daisy”**contact is directly added to the “**Announcement**” space.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/4.-preview-of-added-space-members-scaled.webp)

#### Removing Tags from Contacts

Also, if you removed the configured tag from the CRM Contacts like below.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/5.-removed-New-tag-from-CRM-Contacts.webp)

You can see, the contact will be automatically removed from the configured space.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/6.-Member-is-removed-automatically.webp)

#### Viewing Added Contacts through Specific User Profile

You can also, see the added contacts from the **Members** section in the top navbar.

Once you go to a specific user profile, you can see the added **Tag/s** and **CRM Profile** activities in the right-hand box.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/7.-Global-Members-section-from-to-navbar.webp)

From this user profile, you can also view all the configured space/s or course/s joined as a member through FluentCRM Tag/s.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/8.-Spaces-in-a-specific-User-Profile-.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Customizing Login/Signup Form

**Source:** [https://fluentcommunity.co/docs/customizing-login-signup-form/](https://fluentcommunity.co/docs/customizing-login-signup-form/)

You can customize your FluentCommunity user Login page as you want. To do so simply follow the below simple steps to customize your login page.

## Login Page Customization Settings

Go to FluentCommunity and click on the **Settings** button. Open the **General Settings** tab from the left sidebar now scroll down and see the **Customize Login/ Signup Form**. Click on the **Customize** button.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/Customizing-settings-1-scaled.webp)

Now you will see your Login page and in the left sidebar, **Customize Login** settings will be available.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/Login-page-2-scaled.webp)

Here you will see two options you can modify them anytime. To change them simply click on the **Pencil** icon button along with the field. You can only hide the Banner section, if you want to hide it, click on the **Eye** icon button.

You can also change the position of the Login Form and Banner by clicking on the Up-Down button along with them.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/Customization-3.webp)

Down here we are explaining both settings options for customizing like your own.

**Banner Settings**

After clicking on the Pencil icon button along with the Banner section you will see the options for customizing your Banner section.

**Content**

This section is for customizing the content of your banner.

**Logo:** You can add your logo here. To do so simply click on the **Upload Image** button and upload your logo from the local storage.

**Title:** Here you can set the title for your Banner section.

**Description:** To add any description simply type your description in the description field here.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/Customization-4.webp)

**Design**

From the Design section, you can customize the design of your Login page banner.

**Background Image:** To set the background image on your banner click on the Upload Image button then select an image from the local storage.

**Background Color:** If you want to set any background click on the color field and choose the color for your banner background.

**Title Color:** From here you can choose your title color.

**Text Color:** Choose your banner text color from here.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/Customization-5.webp)

By clicking on the color field you will be able to see the color option to choose for your text, title, or background like the below screenshot. Click on the **Ok** button after choosing the color to save your chosen color.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/Customization-6.webp)

Login Form Settings

Clicking on the **Pencil** icon button along with the Form will redirect you to this page. From here you can customize your Login Form section.

**Content**

**Title:** You can set your title for the Login Form here.

**Description:** Set the description for your Login Form from here.

**Button Lebel:** You can change the button label from this button label field.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/Customization-7-scaled.webp)

**Design**

**Background Image:**You can set any background Image by clicking on the Upload Image button.

**Background Color:** This is to change the color of the Login Form section.

**Title:** If you want to change the Title Color of the Login Form.

**Text Color:** Change the Text Color of the login form from here.

**Button Text Color:**You can also change the button text color if you want to.

**Button Background:** Button background could be changed from here.

![](https://fluentcommunity.co/wp-content/uploads/2024/12/Customization-8-scaled.webp)

After making all the necessary changes don’t forget to click on the **Save Changes** button.

That’s how you can customize your User Login page in your FluentCommunity. If you have any further queries please feel free to contact our [support](https://wpmanageninja.com/support-tickets/) team.

---

## Manage Topic

**Source:** [https://fluentcommunity.co/docs/manage-topic/](https://fluentcommunity.co/docs/manage-topic/)

Topics help organize posts within your Spaces for better segmentation. Managing Topic Settings in FluentCommunity allows admins to configure how topics are created, displayed, and interacted with by space members. Follow this guide to set up and manage topics effectively.

## Access the Manage Topic Feature

To access the topic management feature, go to the Fluent Community dashboard. Click on **Settings** from the bottom left corner. Then, select **Manage Topics** from the left sidebar.

#### Set up Topic

Go to the Settings of the FluentCommunity, then in the left sidebar click on **Manage Topics**, and click on **Settings**.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Community-Topic-Management-scaled.webp)

Here you can:

- Set the **Maximum Number of Topics** users can add to a post. Use the (+) or (-) buttons to adjust.
- Set the **Maximum Number of Topics** allowed in a space.
- If you want to display the topic name on the Post Card, simply check the **Show Topics on Post Card** option. Once enabled, any topic you add to a post will appear on its card. To hide the topic, just uncheck the box.

Once done, click **Update** to save your changes.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Topic-Settings-02.webp)

#### Create a New Topic

To add a new topic, go to the topic section and click the **New Topic** button at the top right section.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/New-Topic-03.webp)

A form will appear. Fill in the following details:

- **Topic Title**: The name users will see.
- **Topic Slug**: A short, URL-friendly identifier.
- **Topic Subtitle**: A brief description of the topic.
- **Space Visibility**: Select the Spaces where this topic will be visible.

If you want only admins or moderators to use the topic, check the restricted access box. Click **Save** to finish.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/add-topics-04-scaled.webp)

You can add multiple spaces at the same time in one topic. You can also edit or delete topics anytime:

- To edit, click on the **Edit** icon button next to a topic, make your changes, and save.
- To delete, click on the **Delete** icon button next to the topic.

You can also use the search bar to quickly find a topic.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/edit-or-delete-topic-05-scaled.webp)

#### Use Topics in Spaces

To use topics, open the desired Space, go to the **Feeds** section, click **Post**, add a title and description, and select a **Topic** from the dropdown.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/create-post-06-scaled.webp)

Preview your post to check that it’s spaced under the right topic.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/support-08-scaled.webp)

For example: if you select the topic announced, then only show the post related to all announced topics.

**Public vs. Private Topics**

- **Public Topics**: Shown in public Spaces and visible to everyone.
- **Private Topics**: Only visible in private Spaces for specific members.

With these steps, you can easily organize your community’s topics. If you have questions, contact our [support](https://wpmanageninja.com/support-tickets/) team.

---

## Privacy Settings

**Source:** [https://fluentcommunity.co/docs/privacy-settings/](https://fluentcommunity.co/docs/privacy-settings/)

Privacy settings in FluentCommunity allow admins to control who can view specific pages and spaces, ensuring a secure and customized experience. This guide explains how to access and manage these settings for your community.

## Accessing Privacy Settings

Navigate to the Fluent Community **Settings** tab located in the bottom left corner of the dashboard. Click on **Privacy Settings** to manage your community’s privacy preferences.

#### Visibility Permissions

These options control who has access to view various parts of your community. For each, you can select from **Everybody**, **Only logged-in members**, or **Only Admin/Moderators**:

- **Who can view all members page?:** Determines who can access the main member directory list.
- **Who can view user profile page?:** Controls the visibility of individual member profile pages.
- **Who can view leaderboard top members?:** Sets the visibility for the community leaderboard and its top-ranked members.
- **Who can view membership spaces on the user profile page?:** Determines who can see the list of spaces a member has joined when viewing their profile.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/accessing-privacy-settings-1-scaled.webp)

#### Member Account Permissions

Admins can decide which account details members are allowed to manage on their own:

- **Allow users to change their community username:** When enabled, members can update their username; otherwise, only an admin or moderator can make this change.
- **Allow users to change their account email address:** Enabling this allows members to update their WordPress user account email directly.
- **Allow users to deactivate their account directly from their profile settings:** This gives members the option to disable their own accounts through their personal settings.

#### System and Profile Configuration

- **Automatically login the user to the portal from email notification links:** This feature uses secure, signed URLs to automatically log users in when they click a link in a notification email.

> Note: For security, users with post edit access will not be logged in automatically.

- **Use Gravatar Photo Service for default user photo:** When enabled, the system automatically fetches user avatars based on their email address via Gravatar.
- **Sync Community Profile with WordPress User Data:** Enabling this ensures that any updates to a user’s community profile automatically sync with their WordPress user data.
- **Show last activity of a user on the profile card:** When checked, the user’s most recent activity time will be visible on their profile card. If unchecked, this information is only visible to admins and moderators.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Member-Account-Permissions-2-scaled.webp)

After you’ve configured all your privacy preferences, remember to click the **Save Settings** button to proceed.

So, now you can ensure the privacy and security of your community while providing flexibility for admins and members. If you have further questions or need assistance, please [contact us](https://wpmanageninja.com/support-tickets/).

---

## Media Module

**Source:** [https://fluentcommunity.co/docs/media-module/](https://fluentcommunity.co/docs/media-module/)

In your Fluentcommunity, you can select a Media Storage for better and smoother service of your media on your site.

## Access Media Settings

Go to the Fluent Community **Settings** and then select the **Feature and Addons** section from the left sidebar. Here you will find the **Media Module** option for your community’s storage for the Media. Click on the **Configure** button for the settings option.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Media-Module-1-scaled.webp)

In the Community Media Storage option, you will find three configuring settings.

1. Server Storage.
2. [Cloudflare R2 Storage](https://fluentcommunity.co/docs/configuring-cloudflare-r2/)
3. [Amazon S3 Storage](https://fluentcommunity.co/docs/configuring-amazon-s3/)
4. [BunnyCDN](https://fluentcommunity.co/docs/configuring-bunnycdn/)

**Server Storage:** This option saves your content to the Fluent-Community folder located within the WordPress Uploads directory on your site.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Media-Module-2.webp)

**Cloudflare R2:** Cloudflare R2 is the cloud server storage for your site you can use this cloud server for your FluentCommunity after integrating with the Cloudflare R2. Please read this [documentation](https://fluentcommunity.co/docs/configuring-cloudflare-r2/) in order to configure your FluentCommunity with the Cloudflare R2 server.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Media-Module-3.webp)

**Amazon S3:** Amazon S3 is another cloud storage server where you can store your community media files. You need to configure the Amazon S3 server in order to use the server. Please read this [documentation](https://fluentcommunity.co/docs/configuring-amazon-s3/) to connect your Fluent Community Storage with the Amazon S3 server.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Media-Module-4.webp)

**BunnyCDN:** Bunny is the cloud server storage for your site, you can use this cloud server for storing media of your FluentCommunity. Please read this [documentation](https://fluentcommunity.co/docs/configuring-bunnycdn/) in order to configure your FluentCommunity with the BunnyCDN.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Features-Settings-bunny-.webp)

If you have any further questions about this guide, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/).

---

## User Badge

**Source:** [https://fluentcommunity.co/docs/user-badge/](https://fluentcommunity.co/docs/user-badge/)

User Badges in FluentCommunity add a personalized and fun way to highlight achievements or roles on user profiles. This guide will show you how to enable and set up User Badges in FluentCommunity.

## How to Access Badge Settings

Go to **Settings** in FluentCommunity. From the left sidebar, choose **Feature and Addons**. Find the **User Badge** and click on the **Settings** button next to it.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcw3hfFE9gtUtsxlOtSg6cP7t1waFGdVj1etltS2Hm2QhO54hC8Il8iB6gXCfXS8KSsVh0rUsO7PaXi61CQsjYvxksZhoeuylcE-12PIXMA3uK2ldmshbSZgxM2X922R5jDS8hjqmlnTwc-4fUSQ6FBBUhy?key=YJW107Z5UvobCcBLSWH8OcrB)

## Enabling the User Badge Module

A pop-up will appear on the right side. Check the **Enable User Badge** box to turn on badge features. Once enabled, you can start adding badges for your members.

**Adding a New User Badge**

Click the **Add New** button to create a badge.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXetQ5A6pgSyCoA9vdU1SkM5t6_f_jsD0wgdCbwKjQvuWmyw5l79-XCypUX9PrN_ZXNOwXFQp1KHkn8RcS1YxU6jUyi6N5P6xg8tdLRHB5VC9ciZfNqxs4qSzEVbFND79eoWiAfuL-6hFmLoQwz2U0oOUI_5?key=YJW107Z5UvobCcBLSWH8OcrB)

A pop-up will appear titled **Add User Badge**:

1. **Title**: Enter a name for the badge.
2. **Emoji**: Optionally, add an emoji for visual appeal.
3. **Label**: If you’d like a label to show with the badge, add the emoji alongside the title.
4. **Background Color**: Choose a background color if desired, but for a clean and user-friendly design, it’s best to leave it simple.

Click on the **Save** button to save your all changes.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdRSk0NRMEbgRiuzfFV9v4EAiUfXwYT9pFrjEBrDAngfxpQ23ezP4Y6h39WuCSkThWNH1Cgyj4tp1jvSBXBi-mCNjIHeu8ul-JGzVp4juhYEFhb1tC6v83qVvBZ6qxL3hFCMvGD_DiodXJL0vOlKGNzOuM2?key=YJW107Z5UvobCcBLSWH8OcrB)

#### Managing Your Badges

- To **edit** an existing badge, click the **Edit** icon next to the badge name.
- To **delete** a badge, click the **Delete** icon.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcu5m0fXUhGLwWQ120Wt1wKFcBxcop5BIcA_caOaKzVbkBSgWp13W4Zi3o7I0hFGWqNdAAIJoupmsg1P6_kvjP5ce3ZN5dtsY5IXDnVXfF6BnRZFVPvS6nKGNYwhw5lQoUMe0QOGP1-HVI18Te0c-Pcs1OZ?key=YJW107Z5UvobCcBLSWH8OcrB)

After you’re done customizing your badges, click **Save Settings**. If you have any further questions about this guide, please don’t hesitate to[contact us](https://wpmanageninja.com/support-tickets/).

---

## Customize your Portal

**Source:** [https://fluentcommunity.co/docs/customize-your-portal/](https://fluentcommunity.co/docs/customize-your-portal/)

You can easily customize the user interface (UI) features of your portal to enhance your community experience.

To explore the portal customization options, go to **Settings** and select **Customization** from the left sidebar. Here, you’ll discover various settings to personalize your portal, which are detailed below.

## Enable Dark Mode

Switch between dark and light themes to suit different lighting conditions and user preferences.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Customize-Portal-1.webp)

## Enable Sticky Page Headers

When this option is on, the page header will stay at the top of the screen while users scroll down, making navigation easier.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Customize-Portal-2.webp)

## Show Default Feed Link on Sidebar

This feature adds a link to the default Feed in the sidebar, giving users quick access to the all feeds page.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Customize-Portal-3.webp)

## Show Powered By Text

Display a Powered by FluentCommunity link to acknowledge the platform and boost its visibility. You can also click here to add your affiliate ID, a pop-up will appear where you have to give your Affiliate ID then click on the **Save** button.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Customize-Portal-4.webp)

## Show Icons on Header Menu Items

Add icons next to the text in header menu items for better navigation and a more appealing look.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Customize-Portal-5.webp)

## Use Modal UI for Quick Post View

Enable this setting to display posts as modals when interacting, providing a more engaging and streamlined user experience.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Customization-Settings-Zoro-03-11-2025_12_33_PM.webp)

## Rich Media Post Layout

Choose between two post layouts:

- **Classic**: Image/Video appears after the content.
- **Modern**: Image/Video is displayed first.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Customize-Portal-7.webp)

## Post Title Requirements

Here, you can configure the post title requirements with three options: Optional, Required, or Disabled. Simply check the circle that fits your needs.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Customization-Settings.webp)

## Members List Layout

This option is for customizing how member profiles are displayed on your platform. You can choose between a**List View** or **Grid View** for a more personalized experience. Read this [documentation](https://fluentcommunity.co/docs/members-list-grid-layout-view/) to know more.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Customization-Settings-1.webp)

> Always remember to click the Save Settings button after making changes in Customize your Portal to ensure they are applied.

Customize your portal to create a more engaging and user-friendly community experience!

If you have any further questions about this guide, please don’t hesitate to[contact us](https://wpmanageninja.com/support-tickets/).

---

## General Settings

**Source:** [https://fluentcommunity.co/docs/general-settings/](https://fluentcommunity.co/docs/general-settings/)

The General Settings of FluentCommunity allow you to configure essential features, manage site logos, and set access preferences for your community. Customize these settings to create an environment that enhances engagement and meets your community’s needs.

## Community Title

The **FluentCommunity Title** is the name of your community, which appears in different areas like the **meta title** and **email notifications**. It helps users recognize your community and should match your site title for consistency.

To update it, go to **FluentCommunity Settings**, you will see the **Community** **Title** option, enter your preferred name, and save the changes.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/FluentCommunity-Title-.webp)

## Site Logo

Go to **Settings** then choose **General** from the left sidebar, you will see the option to upload your site logo.

**Site Logo( For Light Background):** This site logo will shown when someone is using the FluentCommunity in light mode. To set up the Logo for the Light Mode of the Community click on the **Set Logo**button and upload the logo from your storage.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Site-Logo-1.webp)

**Site Logo (For Dark Mode):**This site logo option is for the Dark Mode of the FluentCommunity. To set up the Logo for the Dark Mode of the Community click on the **Set Logo** button and upload the logo from your storage.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Site-Logo-2.webp)

## Default Open Graph

The **Default Open Graph** refers to metadata that automatically defines how your webpage content appears when shared on social platforms like Facebook or LinkedIn. It includes elements like title, description, and image, helping ensure that links look visually appealing and informative when shared.

If you want to set this Default Open Graph image then click on the **Set Featured Image** button and upload the image you want to set from your storage.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Open-Graph-Image-3.webp)

## Global Post Status

The **Global Post Status** in Fluent Community lets you display a post on the main portal for all members. You can **Disable** it from here by checking on the checkbox if not needed.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Post-Status-4.webp)

## Portal Access Settings

**Portal Access Settings** in FluentCommunity lets you control who can join and participate in your community. In Portal Access Settings, you have three audience control options for your community. To learn more about **Portal Access Settings**, check out this [documentation.](https://fluentcommunity.co/docs/portal-access-settings/)

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Portal-5.webp)

> Always remember to click the Save Settings button after making changes to your General Settings to ensure they are applied.

If you have any further questions about this guide, please don’t hesitate to[contact us](https://wpmanageninja.com/support-tickets/).

---

## Portal Access Settings

**Source:** [https://fluentcommunity.co/docs/portal-access-settings/](https://fluentcommunity.co/docs/portal-access-settings/)

FluentCommunity provides you with easy-to-manage Portal Access Settings, allowing you to control how members access your community. One of the key settings here is the Portal Access URL, which gives users a direct link to your community’s front-end portal.

## Configure Portal Access Settings

In your WordPress dashboard, navigate to the top menu and select **FluentCommunity**. Then, click on the **General Settings** tab. Within the General Settings, find the **Portal Access** **Settings** section.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Portal-Access-1--scaled.webp)

#### Everyone

By selecting this option, everyone can access the portal and view the public spaces feed. However, they will not be able to take any actions or make interactions on the portal.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/FC-Portal-Access-Settings-1-1.webp)

**Login / Registration URLs**

This process works the same for other options as well.

**Use Default**

- **Default Login URL:** This is the standard login URL for the FluentCommunity portal.
- **Default Signup URL:** This is the default signup URL for the FluentCommunity portal.

**Use Custom Login Page**

- **Please Provide your Custom Authentication URL:** Enter a custom login or registration URL to override the default WordPress authentication system. This allows you to direct users to a specific login or registration page.
- **Default Login URL:** These URLs remain unchanged and cannot be modified.
- **Default Signup URL:** The signup URL will also remain the default.

> If you select “Use Custom Login Page,” then you will not get the option to set Customize Login/Signup Form on the FluentCommunity settings page.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/FC-Portal-Access-Settings-2-1.webp)

#### Only Logged In Users

This option limits access to registered members only. Users need to log in to view and interact with the community content. In **Portal Access Settings** under the **Only Logged In Users**option.

**Redirect URL**: This URL specifies where non logged in users will be redirected when trying to access community content. It helps guide them to a different page, such as a landing page or signup page, encouraging them to log in or sign up.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Portal-Access-2.webp)

#### Only Selected User Roles

Restricts access to specific user roles (e.g., Admins, Members, or other custom roles). Only users assigned these roles can access the community, allowing for targeted engagement.

In the **Only Selected User Roles** setting for **Portal Access**, these options control access for specific user roles:

**User Roles**: This option allows you to select specific roles (like Admin, Member, etc.) that can access the community content. Only users with these roles will be able to view the portal. Select the roles from the dropdown field.

**Not Matched User Roles**: A message is displayed to users who don’t have the specified roles. It informs them why they don’t have access or prompts them to take action, like logging in or upgrading their role. Type the notice into the **Text field**if you want to show them a notice.

**Redirect URL**: This URL redirects non logged in users when they try to access community content. It sends them to a page like a landing or signup page, encouraging them to log in or sign up.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Portal-Access-3.webp)

Always remember to click the **Save Settings**button after making changes to your **Portal Access Settings** to ensure they are applied.

If you have any further questions about this guide, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/).

---

## Manager Settings

**Source:** [https://fluentcommunity.co/docs/manager-settings/](https://fluentcommunity.co/docs/manager-settings/)

The Manager Settings in FluentCommunity allow you to assign and manage users who will oversee your spaces or courses. This setting lets you assign a manager for your space or courses.

> Only the WordPress Admin can assign the Manager role for the community.

## Access Manager Settings

Go to your **FluentCommunity > Settings** then from the left sidebar, click on **Managers**. Here you will find four roles for the Managers. The permission of the roles are explained below:

Space Management Roles and Permissions

**Space Admin** has full access to manage space settings, allowing them to add or remove members and control content management.

**Space Moderator** is responsible for monitoring interactions and content within the space, with the ability to edit or delete inappropriate posts and comments.

**Course Admin** manages course settings and content oversees course enrollments, and monitors user engagement in courses.

**Course Creator** has the ability to design and develop course materials, control course structure and learning objectives, set enrollment options, and manage access permissions for courses.

## Assigning a Manager

On the Manager Settings page, click the **Add Manager** button.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Managers-1-scaled.webp)

A pop-up will appear, now from the **Users** dropdown, select the WordPress user you wish to assign as a manager. Choose the appropriate **Community Management Role** for that user.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/MAnager-2.webp)

## Managing Existing Managers

To edit a manager’s role, click the **Edit** button next to the manager’s name.

To remove a manager, click the **Delete** button next to their name.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Managers-3-scaled.webp)

This feature gives you flexibility in managing your team by allowing you to easily assign, edit, or remove managers as needed.

If you have any further questions about this guide, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/).

---

## Features & Addons Settings

**Source:** [https://fluentcommunity.co/docs/feature-settings/](https://fluentcommunity.co/docs/feature-settings/)

FluentCommunity’s Feature Settings allow you to enable powerful functionalities and integrations to enhance community management. Here’s how to access and activate each feature.

## Access Feature Settings

Go to **Settings** and select **Features** from the left sidebar to explore available options.

#### Advanced Features

**Leaderboard Module**Activate the Leaderboard to highlight top participants. Simply enable the Leaderboard Module. Learn more about managing the [Leaderboard](https://fluentcommunity.co/docs/leaderboard-overview-and-management/) here.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Features-1.webp)

**User Badges**Display badges beside user names to showcase achievements. Enable badges to assign them to profiles. Find more details about User Badges [here](https://fluentcommunity.co/docs/user-badge/).

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Features-2.webp)

**Course Module**Offer courses within your community by activating the Course Module. Click **Settings** next to the module, check the box, and save. Read the Course [documentation](https://fluentcommunity.co/docs/creating-and-managing-course/) to learn more.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Features-3.webp)

**GIF Module**Enable users to add GIFs to chats and comments. Click on **Settings** next to the GIF Module and set up your Giphy API key. [Documentation](https://fluentcommunity.co/docs/giphy-integration-with-fluent-community/) on Giphy setup here.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Features-4.webp)

**Emoji Module******To allow emojis in posts, comments, and chats, enable the Emoji Module. Click **Settings**, check the **Enable Emoji** box, and save.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Features-5.webp)

**Media Module**Manage media uploads by enabling Media Storage. Configure storage options like local, Cloudflare R2, or Amazon S3. Setup guide for Cloudflare R2 and Amazon S3 [here](https://fluentcommunity.co/docs/media-module/).

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Features-6.webp)

**Profile Social Media Links**

This setting allows you to choose which social media links to include or remove from community member profiles.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Features-Settings.webp)

**Recommended Plugins and Addons**

The **Recommended Plugins and Addons** section in FluentCommunity provides curated tools to expand your community’s functionality.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Features-8.webp)

If you have any further questions about this guide, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/).

---

## Menu Settings

**Source:** [https://fluentcommunity.co/docs/menu-settings/](https://fluentcommunity.co/docs/menu-settings/)

FluentCommunity provides the flexibility to customize your menus, allowing you to organize both the sidebar and top menus. You can easily enable, disable, or reorganize menu items based on your community’s needs.

## Access Menu Settings

Start customizing your menus, go to **Settings**, then select **Menu Settings** from the left sidebar. Here, you can manage each menu section.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Menu-Settings-1-scaled.webp)

## Customize Menus

There are four key menu sections available in FluentCommunity:

**Primary Menu Items**

These are the items in the top menu of your FluentCommunity Plugin. You can add any custom link here by clicking on the **Add Link** button.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Menu-Settings-2.webp)

A Pop-up will arrive here from where you can give the details for your external link. Click on the **Square** space before the name field to add any **Emoji** with your custom Link.

Now give a name for your link in the **Name field** then put the URL in the dedicated field. Now Check the **Enable this link** checkbox to enable the link.

Lastly, click on the  **Save** button to save the link and show it in your top menu.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Menu-Settings-4-scaled.webp)

If you want to edit any menu link just click on the **Edit** button next to the **Menu Item** names.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Menu-Settings-3.webp)

**Profile Drop-down Items**

These items appear in the user’s profile dropdown menu, providing easy access to custom links. In the same way, you can also link the custom links here.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Menu-Settings-6.webp)

**Top Links (At Sidebar)**

This section displays custom links at the top of the sidebar, making it a prime spot for important or frequently accessed links. If you want to add any link to this section just click on the **Add New Link** button.

A pop-up will appear to give detailed information about the link. Then click on the **Save** button to save your link.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Menu-Settings-7.webp)

**Bottom Links** **(At Sidebar)**

Links are displayed at the bottom of the page on the left sidebar. Links in this section can be grouped for better organization.

To organize links, you can create a new group by typing a **Group Name**in the text field and clicking **Save**. Once a group is created, click **Add New Link** within the group. Enter link details and click **Save** to include it.

To change or remove links in this section, use the **Edit** or **Delete** buttons next to each link name.

If you want to add another group click on the **Add Another Group** button placed down here.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Menu-Settings-8.webp)

**Organizing Menu Items**

**Drag-and-Drop**

You can arrange items in each section by dragging and dropping them into the desired order.

This flexibility helps ensure that your community’s menus are tailored to your preferences, making navigation intuitive for members.

If you have any further questions about this guide, please don’t hesitate to[contact us](https://wpmanageninja.com/support-tickets/).

---

## Space Group Settings

**Source:** [https://fluentcommunity.co/docs/space-group-settings/](https://fluentcommunity.co/docs/space-group-settings/)

FluentCommunity allows you to organize your spaces into groups, making it easier to manage and structure your communities.

## Create a Space Group

Go to your FluentCommunity. Then, go to **Settings** and select **Space Group** from the left sidebar.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Group-Settings--scaled.webp)

### Create a New Group

To create a new group, click the **Create New Group** button. A pop-up will appear asking for the following details:

**Group Title:** The name of the group.

**Slug:** A URL-friendly version of the group title.

**Description:** A brief description of the group’s purpose.

**Set Group Visibility**

You can choose the visibility of the group from **Appearance** by selecting the **Show Spaces Even if the User is not a Member of any Space**checkbox.

Once you’ve filled in the details and set the visibility, click the **Create** button to create the group.

![](https://fluentcommunity.co/wp-content/uploads/2024/09/Group-Settings-3-scaled.webp)

### Managing Space Groups

**Reorganize Communities:** You can easily reorganize the spaces or communities within a group by dragging and dropping them into the desired order.

**Edit/Delete Group:** To change the details of a group, click the **Edit Info** button next to the group. This will allow you to update the title, slug, description, or visibility settings.

If you want to delete the group simply click on the **Delete** button next to the Group name.

That’s how you can efficiently create and manage your Space Groups to keep your community organized.

If you have any further questions about this guide, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/).

---

