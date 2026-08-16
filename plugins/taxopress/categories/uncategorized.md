# Uncategorized

*Category from TaxoPress documentation*

---

## Custom URLs in Auto Links

**Source:** [https://taxopress.com/docs/custom-urls-in-auto-links/](https://taxopress.com/docs/custom-urls-in-auto-links/)

You can choose any URL to use with the Auto Links feature.

By default, Auto Links can automatically add links to your terms when they’re inside posts. These links will go to the archive page for that term. Those archive pages are located at URLs like this: /tag/term/ or /category/wordpress/.

You can override that with any URL you wish. Here’s how to enable that feature.

- Go to Auto Links.
- Edit your configuration.
- Click the “Link Types” tab.
- Enable the Custom URLs option.

custom url

Now you can choose any destination URL you want. Here’s a comparison:

- **Term**: WordPress
- **Default link**: https://taxopress.com/tag/wordpress
- **Custom URL link**: https://wordpress.org

This screenshot shows the “Custom URL” field where you can add your choice of URL.

auto link url

---

## Metabox Access

**Source:** [https://taxopress.com/docs/metabox-access/](https://taxopress.com/docs/metabox-access/)

Under the “Metabox Access” tab you can also control the experience for different user roles. You can decide which roles can access the metabox, which taxonomies they can use, and whether or not they see the default metaboxes.

There are four key features available for each role:

- **Metabox Access**: Allow users in this role to use the TaxoPress metabox. If you disable this checkbox, the users won’t see the metabox at all.
- **Block Users from Creating New Terms**: If you check this box, users in this role will be blocked from creating new terms.
- **Taxonomies in Metabox**: Select the taxonomies that users in this role can manage in the TaxoPress metabox.
- **Remove Default WordPress**: This will remove default taxonomy metaboxes for users in this role. These are the metaboxes provided by WordPress.

metaboxes access

---

## Metabox Settings

**Source:** [https://taxopress.com/docs/metabox-settings/](https://taxopress.com/docs/metabox-settings/)

It’s possible to configure important options for the TaxoPress metaboxes under each post.

---

## Enabling Metabox Features

Go to TaxoPress > Metaboxes > Metabox Settings. There will be settings for “Posts”, “Pages” and other content types.

metabox settings tab

Scroll down the screen and you see options. For example, you can choose to show the number of times each term has been used (“Metabox Show Term Post Count”) or the slug for the term (“Show Term Slug”).

access features

Further down the screen you can control settings such as minimum and maximum length of terms created.

---

## Extra Display Options in TaxoPress Pro

This feature requires the Pro version of the TaxoPress plugin

With TaxoPress Pro you can customize the TaxoPress metabox. You can use the TaxoPress Pro settings to customize this layout. In this screenshot, we use the “Taxonomy Display” option.

This next screenshot shows a “Checkbox” display. With this display it’s no longer possible to add any more Tags or Categories. The authors can only choose terms that already exist.

metabox checkbox

You can customize the appearance of this metabox. For example, this next screenshot shows the same terms, but organized by popularity. You’ll always see the most commonly-used terms on the top of the list.

terms popularity

This next screenshot shows another way to customize the metabox. You can choose a search box display. This is ideal if you have really large number of terms.

metabox dropdown

---

## Who Can Create and Add Terms in TaxoPress?

**Source:** [https://taxopress.com/docs/add-terms-capabilities/](https://taxopress.com/docs/add-terms-capabilities/)

It is possible to control who can add terms to posts in TaxoPress. This plugin uses the same capabilities as the WordPress core. So if a user can add terms in WordPress, they can add terms in TaxoPress.

By default, anyone who can edit posts can also do this:

- Add Categories to a post, but not create new Categories.
- Add Tags to a post and create new Tags.

You can use a plugin such as [PublishPress Capabilities](https://wordpress.org/plugins/capability-manager-enhanced/) to control these settings in more detail. Go to “Capabilities” then “Capabilities” in the admin menu. Click the “Taxonomies” tab.

On the this screen you will see the “Manage” column. This will allow users access to main screen for each taxonomy. So if you check the box for “Categories”, users in this role will have the ability to edit, add, delete, and manage all your Categories.

capabilities terms

It is possible to get more detailed control over who can edit your taxonomies. In the sidebar, look for the “Detailed Taxonomy Capabilities” area. Check the boxes for your taxonomies and in the main area you will now see “Edit”, “Assign” and “Delete” boxes.

unique capabilities

One change you can make here is to prevent a user from assigning any terms to your posts. In the screenshot, you are blocking users in the Author role from managing, editing, assigning or deleting terms.

remove term access

If you make the changes shown in the screenshot above, users in that role will have no access to the normal Tags and Categories metaboxes. In the screenshot below, you can see that those boxes are missing.

missing terms boxes

These changes will apply to TaxoPress also. If the TaxoPress metabox is available to users in this role, they will see this message on the “Create Terms” tab: “You do not have the required capabilities to manage any of this post attached taxonomies”

no capabilities permissions

---

## Introduction to Hidden Terms

**Source:** [https://taxopress.com/docs/introduction-to-hidden-terms/](https://taxopress.com/docs/introduction-to-hidden-terms/)

The “Hidden Terms” feature in TaxoPress Pro will hide terms that are infrequently used. This helps remove low-value terms that are not attached to many posts. Having too many unused terms can be a problem for your site’s search engine optimization.

To enable this feature, go to “TaxoPress”, then “Settings” in your WordPress admin menu.

- Click the “Enable Hidden Terms” box and check the box.
- You can also choose the “Minimum Usage for Hidden Terms” option. This will set the minimum number of posts a term must be attached to. If you enter 5, any term used in fewer than 5 posts will be hidden across the site, and its archive page will redirect to the homepage.

hidden terms

One easy way to see which posts are hidden is go to “TaxoPress” and then “Terms” in your WordPress admin menu. In the screenshot below, you will see terms marked as either “Live” or “Hidden”. Here’s how terms marked as “Hidden” will be treated:

- They will not be show in any displays on the front of your site.
- If you try to access the archive pages for the terms, you will be redirected to your site’s homepage.

This feature will update automatically. So if you choose to hide terms that are used less than 5 times, the term will move to “Live” as soon as it is added to a fifth post.

live hidden

---

## The Metaboxes Screen

**Source:** [https://taxopress.com/docs/metaboxes-screen/](https://taxopress.com/docs/metaboxes-screen/)

The Metaboxes screen in the TaxoPress plugin allows you to customize an area that appears for users while editing posts. This feature uses the same metabox you see when editing posts, but you can rapidly move between different posts.

TThis image below shows the Metaboxes screen and it has these features:

- **Manage Post Terms**: This feature allows you to manage all the terms that are currently attached to a post.
- **Show All Existing Terms**: This feature allows you to browse all the terms in a taxonomy.
- **Auto Terms**: This feature allows you to scan your content and suggest relevant terms. The feature can suggest existing terms and also new terms.
- **Create Terms**: This feature allows you to create new terms that can be added to your posts.

metaboxes preview

This screen acts as a preview of the metaboxes under each post. You can use these settings to modify the preview and see how the Metaboxes screen will appear for different user roles and on different post types.

metaboxes preview settings

---

## Copy Terms

**Source:** [https://taxopress.com/docs/copy-terms/](https://taxopress.com/docs/copy-terms/)

WordPress does not have the ability to copy taxonomy terms. However, that is possible with the TaxoPress plugin.

---

## How to Copy Terms

After installing the TaxoPress plugin, go to the “[Terms](https://taxopress.com/docs/terms-screen/)” screen. You can click the “Copy” link next to any term. You will get a copy of the term that is attached to the same posts and taxonomy as the original term.

copy terms

In the screenshot below you can see there is new term called “open source Copy”. It is attached to the same two posts as the original term. You can now rename that term and remove the “Copy” portion of the name.

copied terms

It’s also possible to the term with any metadata that is attached to the term. This will bring over any metadata from plugins that add SEO data, fields, or other extra information to your terms.

copy with metadata

---

## Advanced Copy for Tags and Categories

There is also a more advanced “Copy” feature available. If you choose “Copy” from the “Bulk actions” dropdown, you’ll be able to move the copy of your term to a new taxonomy.

advanced copy term

Once you’ve selected the post, you’ll be able to choose a “Destination Taxonomy” from a dropdown. That option is shown in this screenshot below:

advanced copy terms

You will now see a copy of the term that is now attached to your new taxonomy. The term will not be attached to any posts.

copied terms

---

## Synonyms and Linked Terms in the Database (Pro)

**Source:** [https://taxopress.com/docs/synonyms-linked-terms-data/](https://taxopress.com/docs/synonyms-linked-terms-data/)

This feature requires the Pro version of the TaxoPress plugin

Data for the both the Synonyms and Linked Terms features are stored in the _termmeta table in the WordPress database.

---

## Synonym Data

In this example below, we’ve added 3 synonyms to the “Apple” term. The main “Apple” term has an term ID of 2 in the database.

This next screenshot shows the synonym entries for this term in the database. The term_id is set to 2. The synonyms are stored in a serialized array which is the WordPress standard for term meta with multiple entries.

---

## Linked Terms Data

In this example below, we’ve added 3 linked terms to the “Fruit” term. The main “Fruit” term has an term ID of 22 in the database.

This next screenshot shows the linked terms entries for this term in the database. The term_id is set to 22. The linked terms are stored in a serialized array which is the WordPress standard for term meta with multiple entries.

---

## Allow Auto Links to Skip Content Areas

**Source:** [https://taxopress.com/docs/avoid-elements/](https://taxopress.com/docs/avoid-elements/)

When using the Auto Links feature in TaxoPress, you may want to avoid adding links to some areas of your posts. For example, some users don’t want to automatically add links to headings inside their content.

---

## Skip Content Areas in TaxoPress Free

In the Free version of TaxoPress, the Auto Links feature allows you to skip some specified elements such as headings, “script”, “style”, “pre”, and “code”. Here’s how to stop Auto Links from adding links inside these elements:

- Go to TaxoPress > Auto Links.
- Edit an Auto Links entry and click the “Exceptions” tab.
- Check the boxes for any elements you want to avoid.

It is also possible to skip certain parts of your content using the HTML markup:

- Inspect the element on the page. Find the name of the wrapper for your element.
- Add the wrapper name into this field: “Prevent Auto Links inside classes or IDs”.

---

## Skip Content Areas in TaxoPress Pro

This feature requires the Pro version of the TaxoPress plugin

If you are using TaxoPress Pro, you are also able to add your own elements to skip. Look for the “Element tag” box in the screenshot below. Enter the name of the HTML element, without the brackets. For example, enter “blockquote” and click the “Add” button.

skip elements

You will now see your new element added to the list. You can check the box and the Auto Links feature will stop adding links to that element.

skipped element

Finally, TaxoPress Pro has the option to skip specific shortcodes and blocks. Terms inside these shortcodes and blocks will not have Auto Links applied.

exclude blocks

---

## Can I Modify the TaxoPress Plugin Code?

**Source:** [https://taxopress.com/docs/modify-code/](https://taxopress.com/docs/modify-code/)

Yes, you can modify all TaxoPress code. We don’t encrypt any code in our plugins. We release all our plugins under the [GPL license](https://publishpress.com/gpl-license).

However, we don’t provide support for custom code, so you are welcome to customize the code, but we can’t support your changes.

---

## TaxoPress and GPDR / Privacy Laws

**Source:** [https://taxopress.com/docs/privacy-compliance/](https://taxopress.com/docs/privacy-compliance/)

TaxoPress plugins do not access any data on your WordPress site. We provide the plugin code and then you are free to do whatever you wish with no connection to our site. TaxoPress plugins are fully GDPR compliant.

However, there are some areas to be aware of when it comes to privacy:

- We do ask for your name and billing details when you sign up.
- We do also record the URL if you enter the license key into your site.
- We do offer integrations with services such as Dandelion and Open Calais. Those services will have their own privacy policies.

---

## Introduction to the Posts Screen

**Source:** [https://taxopress.com/docs/posts-screen/](https://taxopress.com/docs/posts-screen/)

TaxoPress has a “Posts” screen that allows you to search for terms.

On the “Posts” screen, you can quickly and see all the posts attached to any term, even across multiple post types. The WordPress core does provide this information for single post types, but not across all the post types on your site.

So our goal with this screen is to provide a true count of how many times a term is used, and a full listing of all the posts that use that term.

This screenshot below shows the “Count” column on the “Terms” screen.

If you click a number in that “Count” column, or click “Posts” in the TaxoPress menu, you’ll be taken to this new screen below. There are two filters to help you find what you’re looking for:

- **Terms Filter**: Search for a specific term and find all the attached posts.
- **Post Types Filter**: Search only for posts in a specific post type.

This next screenshot shows the “Posts” screen with WooCommerce products:

---

## What’s the Difference Between Linked Terms and Synonyms? (Pro)

**Source:** [https://taxopress.com/docs/difference-linked-terms-synonyms/](https://taxopress.com/docs/difference-linked-terms-synonyms/)

This feature requires the Pro version of the TaxoPress plugin

TaxoPress Pro has two features called “Synonyms” and “Linked Terms”. Both of these new features allow you to have multiple words associated with a single term. Here are the differences between the two features:

- **Synonyms**: The extra words are not real terms. And those extra words can only be added to one term. For example, if your main term is “Apples” and the synonym is “Honeycrisp”, that synonym will not exist anywhere on your site. It will not have an archive page and users will be able to add it as a term.

- **Linked Terms**: The extra words are real terms. And those extra words can be added to as many terms as you want. For example, if your main term is “Apples” and the linked term is “Honeycrisp”, that linked term will have an archive page and users will be able to add it as a term.

---

## Introduction to Linked Terms (Pro)

**Source:** [https://taxopress.com/docs/linked-terms/](https://taxopress.com/docs/linked-terms/)

This feature requires the Pro version of the TaxoPress plugin

“Linked Terms” is a feature in TaxoPress Pro that allows you to connect terms. When the main term is added to a post, the linked terms will be added also.

For sites with a lot of terms, this feature makes it easier and quicker for your users to add the correct terms. For example, if you add the term “WordPress” to your posts, TaxoPress can automatically add Linked Terms that include “CMS”, “website”, and “website design”.

---

## How to Use Linked Terms

I’ll show you an example of how this Linked Terms feature works. Imagine you have four terms: “Apple”, “Honeycrisp”, “Red Delicious”, and “Golden Delicious”.

You can edit the “Apple” term, and select the other three terms as “Linked Terms”. In the image below, you can see I’ve added “Honeycrisp”, “Red Delicious”, and “Golden Delicious”. You can link terms across all the taxonomies on your site. For example, you can link a Tag to Category. Or you can link a WooCommerce Product Category to a WooCommerce Attribute.

Now, whenever the term “Apples” is added to a post, TaxoPress will automatically add the other terms too. In this screenshot, I’ve written a post about fruit and have added the term “Apples”.

When I save the post and refresh the page, all three Linked Terms have been added to the post:

---

## Linked Terms Screen

There is a “Linked Terms” screen in TaxoPress Pro which makes it easy to manage these connections.

linked terms screen

This screen has several options for managing the relationships between Linked Terms:

- Add primary term to posts with secondary term
- Add secondary term to posts with primary term
- Delete Relationship

linked terms links

---

## Linked Terms Options

It’s possible to customize the relationship between Linked Terms. Go to the “Settings” area of TaxoPress and click the “Linked Terms” tab.

Here you can choose with taxonomies to use with Linked Terms.

You can can also choose how this feature works. Imagine you have a main term called “Fruit” and a linked term called “Apple”. You can decide between multiple options:

- **2-way relationship**: When either “Fruit” or “Apple” is added to a post, the other term is added also.
- **Add the primary term, get the secondary term**: When “Fruit” is added to a post, the other term is added.
- **Add the secondary term, get the primary term**: When “Apple” is added to a post, the other term is added.

linked terms settings

---

## Introduction to Term Synonyms (Pro)

**Source:** [https://taxopress.com/docs/synonyms/](https://taxopress.com/docs/synonyms/)

This feature requires the Pro version of the TaxoPress plugin

Synonyms is a feature in TaxoPress Pro that allows you to have multiple words associated with a single term. If TaxoPress scans your content and finds a synonym, it will act as if it has found the main term.

---

## How to add Synonyms

Synonyms will be available on each term screen. In the screenshot below, the main name for the term is “Apple”. The synonyms are “Apples”, “Golden Delicious”, “Granny Smith”, “Pink Lady”, “Honeycrisp”, “Red Delicious”, “Braeburn” and “Gravenstein”.

---

## Examples of using Term Synonyms

Term Synonyms currently works with two key features of TaxoPress: Auto Terms and Auto Links.

With Auto Terms, TaxoPress will add the original term to the post if it finds a synonym in the content. So if you have “Apples”, “Golden Delicious” or “Granny Smith” in your post content, TaxoPress will add the term “Apple” to your post.

With Auto Links, there is a setting to enable the use of synonyms. If you check the box in the screenshot below, TaxoPress will add links to any synonyms in your post. So if you have “Apples”, “Golden Delicious” and “Granny Smith” in your post content, all of those words will be linked to the archive page for “Apple”.

---

## Synonyms are unique

It’s not possible to add a synonym to more than one term. If you attempt to add a synonym that already exists, you’ll see this message: “Duplicate synonyms found. apples is already added to another term.”

---

## Accordion Tag Cloud – Themes

**Source:** [https://taxopress.com/docs/accordion-tag-cloud-themes/](https://taxopress.com/docs/accordion-tag-cloud-themes/)

The Accordion Tag Cloud feature in the Tag Groups plugin allows you display a tag cloud with your groups as accordion panels. The Free version of the Tag Groups plugin provides one theme called “Delta” for your accordion tag layouts. You can see a preview of “Delta” in this screenshot below:

The Pro version of the Tag Groups plugin provides more themes, plus the ability to [create your own themes](https://taxopress.com/docs/creating-your-own-theme/). To choose a default theme, go to  “Tag Groups” in your WordPress admin menu, then “Front End” and “Themes and Appearance”.

**Please note**: Your choice of theme will automatically apply to all the Accordion Tag Cloud and Tabbed Tag Cloud displays on your site. These themes can’t be applied to individual displays.

This next screenshot is a preview of the “Base” theme with an Accordion Tag Cloud display:

This next screenshot is a preview of the “ui-gray” theme with an Accordion Tag Cloud display:

This next screenshot is a preview of the “ui-lightness” theme with an Accordion Tag Cloud display:

This next screenshot is a preview of the “ui-darkness” theme with an Accordion Tag Cloud display:

This next screenshot is a preview of the “blitzer” theme with an Accordion Tag Cloud display:

This next screenshot is a preview of the “aristo” theme with an Accordion Tag Cloud display:

---

## Alphabetical Tag Cloud – Themes

**Source:** [https://taxopress.com/docs/alphabetical-tag-cloud-themes/](https://taxopress.com/docs/alphabetical-tag-cloud-themes/)

The Alpabetical Tag Cloud allows you to display a tag cloud with your groups organized into tabs for their first letters. The Free version of the Tag Groups plugin provides one theme called “Delta” for your Alphabetical Tag Cloud layouts. You can see a preview of “Delta” in this screenshot below:

The Pro version of the Tag Groups plugin provides more themes, plus the ability to [create your own themes](https://taxopress.com/docs/creating-your-own-theme/). To choose a default theme, go to 
“Tag Groups” in your WordPress admin menu, then “Front End” and “Themes and Appearance”.

This next screenshot is a preview of the “Base” theme with the Alphabetical Tag Cloud display:

This next screenshot is a preview of the “ui-gray” theme with the Alphabetical Tag Cloud display:

This next screenshot is a preview of the “ui-lightness” theme with the Alphabetical Tag Cloud display:

This next screenshot is a preview of the “ui-darkness” theme with the Alphabetical Tag Cloud display:

This next screenshot is a preview of the “blitzer” theme with the Alphabetical Tag Cloud display:

This next screenshot is a preview of the “aristo” theme with the Alphabetical Tag Cloud display:

---

## Tabbed Tag Cloud – Themes

**Source:** [https://taxopress.com/docs/tabbed-tag-cloud-themes/](https://taxopress.com/docs/tabbed-tag-cloud-themes/)

The Tabbed Tag Cloud allows you to display a tag cloud with your groups organized into tabs. The Free version of the Tag Groups plugin provides one theme called “Delta” for your tabbed layouts. You can see a preview of “Delta” in this screenshot below:

The Pro version of the Tag Groups plugin provides more themes, plus the ability to [create your own themes](https://taxopress.com/docs/creating-your-own-theme/). To choose a default theme, go to “Tag Groups” in your WordPress admin menu, then “Front End” and “Themes and Appearance”.

**Please note**: Your choice of theme will automatically apply to all the Tabbed Tag Cloud and Accordion Tag Cloud displays on your site. These themes can’t be applied to individual displays.

This next screenshot is a preview of the “Base” theme with a Tabbed Tag Cloud display:

This next screenshot is a preview of the “ui-gray” theme with a Tabbed Tag Cloud display:

This next screenshot is a preview of the “ui-lightness” theme with a Tabbed Tag Cloud display:

This next screenshot is a preview of the “ui-darkness” theme with a Tabbed Tag Cloud display:

This next screenshot is a preview of the “blitzer” theme with a Tabbed Tag Cloud display:

This next screenshot is a preview of the “aristo” theme with a Tabbed Tag Cloud display:

---

## Introduction to the Terms Screen

**Source:** [https://taxopress.com/docs/terms-screen/](https://taxopress.com/docs/terms-screen/)

The “Terms” screen allows you to manage and search all the terms on your site.

Normally, all your WordPress terms are scattered into different areas of the site. To manage your terms, you have to visit the “Tags”, “Categories”, “WooCommerce Product Categories”, and other screens individually. However, with TaxoPress, you only need to find this “Terms” link in the TaxoPress admin menu:

This image below shows an example of the “Terms” screen with terms associated with several different taxonomies. There are several different columns with information on each term:

- Title
- Slug
- Description
- Taxonomy
- Post Types
- Count (number of posts attached to the term)

terms screen

This screen also provides key actions for each term:

- Edit
- Quick Edit
- Remove From All Posts
- Delete
- View
- Copy

action links terms

---

## Technical Requirements for TaxoPress Plugins

**Source:** [https://taxopress.com/docs/technical-requirements/](https://taxopress.com/docs/technical-requirements/)

In order to provide you with the best and most secure software, we do have minimum requirements to run TaxoPress plugins.

---

## PHP recommendations

We highly recommend that any website using TaxoPress plugins also uses PHP 7.2 or higher.

[WordPress officially recommends that you use PHP 7.4](https://wordpress.org/about/requirements/) as a minimum.

---

## MySQL and Server recommendations

- **Database**: MySQL version 5.7 or greater or MariaDB version 10.2 or greater.
- **Server**: We recommend [Apache](http://httpd.apache.org/) or [Nginx](http://nginx.org/) as the most robust and secure servers for running WordPress, but any server that supports PHP and MySQL should work.

For the official WordPress recommendations, [please check here](https://wordpress.org/about/requirements/).

---

## Does my site meet the requirements?

If you are unsure of what version of PHP and other software that your site is using, you can go use this tip:

- Go to Tools > Site Health in your WordPress admin menu.
- After installing the Health Check plugin, go to Dashboard, then “Health Check”. This screen will give any important news about your PHP version.

- You can also find the specific details of your server version by clicking the “Info” tab:

- Scroll down to the “Server” area for all the details:

---

## Automated Security Checks, including Checkmarx

**Source:** [https://taxopress.com/docs/automated-security-checks/](https://taxopress.com/docs/automated-security-checks/)

Here at TaxoPress, we deeply care about the security of our plugins.

We aim to solve all security issues. Our goal is develop, test, release and announce patches as quickly as possible after issues have been discovered.

If you have found a possible issue, [please read this guide on how to report to our team](https://taxopress.com/docs/security-issues/).

On several occasions, we’ve had reports from automated security scans. The most common provider of these is Checkmarx.

If these scans find any issues, **we definitely do want to hear the details**.

However, we do have a note of caution: these automated reports can sometimes produce a high rate of false positives. The scans are often useful indicators of *potential* problems that should be checked by a developer.

If you run one of these automated reports, please do contact us if it finds issues. Please don’t assume that the issues in the report are either correct or incorrect: seek confirmation from a human developer.

---

## Security Issues and How to Report Them

**Source:** [https://taxopress.com/docs/security-issues/](https://taxopress.com/docs/security-issues/)

We do our best at TaxoPress to solve all security issues. We aim to develop, test, release and announce patches as quickly as possible after issues have been discovered.

Full details are available to customers and other trusted parties on request.

---

## How to report a security issue

If you have discovered a vulnerability in TaxoPress, we want to hear from you as soon as possible.

Please gather as much information together as you can so we can work quickly to address it. Here’s a checklist of the details we’d like to see.

1. Severity (high, medium, low)
2. Vulnerability type: e.g., DoS, Overflow, XSS, CSRF, etc
3. Exploitation Requires Authentication?: yes/no
4. Which plugin is vulnerable and which version numbers.
5. A description of the vulnerability
6. Do you have reason to believe the vulnerability is being exploited?
7. Are details of an exploit publicly available? If so, please provide us with a URL.
8. What is the potential impact? How do you envisage it being used in an attack scenario?
9. DREAD score, if known.
10. CVE Identifier / Reference / Advisory Number, if applicable.
11. If you wish to be credited for the responsible disclosure in the release announcement and the change log, please let us know. If you plan to disclose details of the vulnerability, please do let us know so we can coordinate the timing of the disclosure together.
12. Any additional comments.

If you are a customer please open a support ticket as soon as possible and make it clear in the subject that your are reporting a security vulnerability.

If you are not a customer, send all the details to [security@taxopress.com](mailto:security@taxopress.com).

We’ll acknowledge receipt as soon as we’ve read it. If confirmed we’ll plan a patch and let you know when we plan to release it.

---

## Responsible disclosure of issues

Sometimes security researchers have contacted us to disclose a security vulnerability. In these cases, it’s understandable that the researcher might want to publish details of the discovery themselves.

We do expect researchers to respect the principles of responsible disclosure and to work with us to coordinate the content and timing of the public disclosure so customers are given a reasonable opportunity to update their sites.

---

## Introduction to the Mass Edit Terms Screen

**Source:** [https://taxopress.com/docs/mass-edit-terms/](https://taxopress.com/docs/mass-edit-terms/)

The Mass Edit Terms screen allows you to quickly add or remove taxonomy terms from any content in WordPress.

The first step is to choose which taxonomy you want to modify. At the top of the screen, use the dropdown boxes to choose your taxonomy. In the image below, I’m editing “Posts” and the “Tags” taxonomy.

In the main part of the screen, you will now see all your Posts and the Tags attached to them.

To add Tags to any Post, simply start typing in the box in the right column. In the image below, you’ll see that TaxoPress is suggesting Tags based on the characters I am typing.

To remove Tags from any Post, simply place your cursor into the box in the right sidebar and click “Delete”.

---

## Remove Terms From All Posts

**Source:** [https://taxopress.com/docs/remove-terms/](https://taxopress.com/docs/remove-terms/)

TaxoPress has a feature that allows you to remove terms from all posts. Unlike the “[Delete terms](https://taxopress.com/docs/delete-terms/)” option, the terms will still exist on your site after the removal.

You will find this feature on the “Terms” screen in TaxoPress.

In the example below, I’m removing the term “WordPress Plugins” from any associated posts.

- Click “Remove From All Posts”.
- You will now see a message showing that the terms were removed.

---

## Auto Links Options

**Source:** [https://taxopress.com/docs/auto-links-options/](https://taxopress.com/docs/auto-links-options/)

There are settings available for the Auto Links feature.

Go to “TaxoPress” and then “Auto Links” in your WordPress admin menu. Click “Edit” for one of your existing Auto Links.

auto links screen

---

## General

These are the important settings for each example of Auto Links:

- **Title**: This is only for your use in the WordPress admin area.
- **Taxonomy**: Choose which taxonomy terms will be linked.
- **Auto Link case**: This enables you to be consistent in your use of uppercase and lowercase.
- **Auto Link areas**: Choose which areas of the content will have links.
- **Auto Link title attribute**: This will appear when users hover over links. This is also customizable in TaxoPress Pro for [the Custom URLs feature](https://taxopress.com/docs/custom-urls-in-auto-links/).

---

## Post Types

TaxoPress will attempt to automatically add Auto Links to your chosen content. It may not be successful for all post types and layouts.

---

## Control

These options allow you to set maximum limits for how often Auto Links will appear in your content. It also allows you to choose terms of a minimum and maximum length. On this tab, you can also choose to only add links for whole words, not partial matches.

autolinks control

---

## Exceptions

In this area, you can exclude specific terms from being linked, and you can also stop Auto Links from working inside a wide range of HTML elements. We’ve defined 9 default elements from H1 and H2 to 
```
pre
```

 and 
```
code
```

. You can also add your own custom classes and IDs. [Click here for more on this Exceptions feature](https://taxopress.com/docs/avoid-elements/).

exceptions

This feature requires the Pro version of the TaxoPress plugin

In TaxoPress Pro, you will also have the option to specify new elements that will not be included in Auto Links. In this example below, we have excluded the “Blockquote” element from Auto Links:

shortcodes blocks exclude

---

## Options

Under the “Options” tab, you can use the “Add links for all terms” box to decide if links will be added to all terms, or only those attached to the post. TaxoPress Pro users will also be able to decide if links are added to [synonyms](https://taxopress.com/docs/synonyms/).

---

## Advanced

This area contains more complex options that only need to be modified if Auto Links is not working for you. Here you also will be able to add a CSS class to your term link.

---

## Link Types

This allows you to enable the [Custom URL](https://taxopress.com/docs/custom-urls-in-auto-links/) option and choose any URL to use with the Auto Links feature.

custom url

---

## Delete Terms

**Source:** [https://taxopress.com/docs/delete-terms/](https://taxopress.com/docs/delete-terms/)

TaxoPress has a feature that allows you to delete taxonomy terms individually or in bulk. This feature works for any WordPress taxonomy. You will find this feature on the “Terms” screen in TaxoPress.

- You can delete single terms by clicking the “Delete” link under the term:

- You can choose multiple terms to delete at once. Select the terms using the checkboxes on the “Terms” screen.
- Choose the “Delete” option from the dropdown.
- Click the “Apply” button.
- TaxoPress will show the message, “Terms deleted successfully.”

---

## Introduction to TaxoPress Metaboxes

**Source:** [https://taxopress.com/docs/introduction-taxopress-ai/](https://taxopress.com/docs/introduction-taxopress-ai/)

The TaxoPress Metaboxes feature enables you to replace the default way of adding Categories, Tags, and other terms in WordPress. When this feature is enabled, it will appear below each post. This screenshot gives an idea of how the feature will show:

metaboxes location

---

## Default WordPress Metaboxes

The default WordPress metatox options are shown in the screenshot below. These options are very limited. The Categories are shown in a series of checkboxes. The Tags are shown in a search box. There’s no way to modify either of those displays.

Here are some of the customer requests that are not possible with the default WordPress options:

- “How do I set a maximum or minimum number of Categories to add?”
- “I want to sort the Categories alphabetically.”
- “I need to see the most popular Tags first.”
- “Can I allow authors to add new Categories but not Tags?”

default metaboxes

---

## Introduction to Auto Links

**Source:** [https://taxopress.com/docs/introduction-to-auto-links/](https://taxopress.com/docs/introduction-to-auto-links/)

The Auto Links feature in TaxoPress will automatically add links to keywords your post content.

There are two choices for Auto Links:

- **Default:** For example, if you have a tag called “WordPress”, the Auto Links feature will find any instances of “WordPress” in your content and add links to the archive page for that term. This means that occurrences of “WordPress” will link to /tag/wordpress.
- **Custom Link**: You can override the default link and choose a custom URL.

---

## Why Use Auto Links?

The Auto Links feature is beneficial for at least two reasons:

1. It helps your site visitors find other posts about topics that interest them.
2. It can help increase the search engine ranking of your archive pages. Your archive pages are incredibly valuable for SEO and more links to those pages may help them rank higher. [Click this link for more on the SEO value of archive pages](https://yoast.com/taxonomy-seo-categories-tags/).

You can also choose a Custom URL to replace the link to an archive page.

---

## Enabling Auto Links

The Auto Links feature can be enabled by going to TaxoPress > Auto Links in your WordPress admin menu. On this screen, you will find one default example of “Auto Links”. You can edit this example to match the needs of your site.

This feature requires the Pro version of the TaxoPress plugin

On the “Auto Links” screen in the Pro version of TaxoPress Pro, you can click “Add New” and add your own display.

---

## Using Auto Links

If Auto Links are enabled, they will work automatically. In the image below, my site has Tags called “WordPress” and “CMS”. Those phrases are automatically linked to the appropriate URLs: 
```
/tag/wordpress
```

 and also 
```
/tag/cms
```

. This can be enabled for any taxonomy and any post type.

---

## Set a Custom URL for Auto Links

You can also choose any URL to use with the Auto Links feature.

By default, Auto Links can automatically add links to your terms when they’re inside posts. These links will go to the archive page for that term. Those archive pages are located at URLs like this: /tag/term/ or /category/wordpress/

You can also choose any destination URL you want. Here’s a comparison:

- **Term**: WordPress
- **Default link**: https://taxopress.com/tag/wordpress
- **Custom URL link**: https://wordpress.org

This screenshot shows the “Custom URL” field where you can add your choice of URL.

auto link url

---

## Tag Cloud Search – Shortcode Parameters

**Source:** [https://taxopress.com/docs/tag-cloud-search-shortcode-parameters/](https://taxopress.com/docs/tag-cloud-search-shortcode-parameters/)

This guide shows you how to use and customize the shortcode for the Tag Cloud Search feature in the Tag Groups plugin.

---

## Shortcode

```
jQuery(document).ready(function() {
        const tags = document.querySelectorAll('.tag-groups-cloud .tag-groups-tag');
        const cmInput = document.getElementById('cloud_search_6a815c7d5cc9a');
        const searchTitle = false;
        
        cmInput.addEventListener('keyup', function(el){TagGroupsCloudSearch.filter(el,'.tag-groups-cloud', tags, searchTitle);});
    });
```

---

## Example

```
Looking for a name?

    jQuery(document).ready(function() {
        const tags = document.querySelectorAll('.my-tag-cloud .tag-groups-tag');
        const cmInput = document.getElementById('cloud_search_6a815c7d5cd2c');
        const searchTitle = false;
        
        cmInput.addEventListener('keyup', function(el){TagGroupsCloudSearch.filter(el,'.my-tag-cloud', tags, searchTitle);});
    });
```

---

## Parameters

#### tag_cloud_class

This parameter is a class name (selector) that creates the connection between the search field and one or more [supported tag clouds](https://taxopress.com/docs/tag-cloud-search-overview/). By default it connects to all supported tag clouds on the same page.

Enter the same class name that you use in the tag cloud as “div_class” (or “table_class”). Example:

```
jQuery(document).ready(function() {
        const tags = document.querySelectorAll('.searchable-tag-cloud .tag-groups-tag');
        const cmInput = document.getElementById('cloud_search_6a815c7d5cd65');
        const searchTitle = false;
        
        cmInput.addEventListener('keyup', function(el){TagGroupsCloudSearch.filter(el,'.searchable-tag-cloud', tags, searchTitle);});
    });

  (function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-tabs-6a815c7d5cda7', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-tabs-6a815c7d5cda7');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

If you also need other class names in the tag cloud, you simply enter all of them in the tag cloud as “div_class”, separated by spaces. Example:

```
jQuery(document).ready(function() {
        const tags = document.querySelectorAll('.searchable-tag-cloud .tag-groups-tag');
        const cmInput = document.getElementById('cloud_search_6a815c7d5d715');
        const searchTitle = false;
        
        cmInput.addEventListener('keyup', function(el){TagGroupsCloudSearch.filter(el,'.searchable-tag-cloud', tags, searchTitle);});
    });

  (function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-tabs-6a815c7d5d743', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-tabs-6a815c7d5d743');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

| accepted values | default | example shortcode |
| --- | --- | --- |
| string (class name) | tag-groups-cloud | tag_cloud_class=searchable-tag-cloud-2 |

#### search_title

If you activate this option, the filter will also show tags where a part of the “tag description” matches the words in the text field.

The description can be added to tags when you create a new tag or click on a tag name to edit its information. It’s not editable via “Quick Edit” in the tag list.

Filtering by description works only if you display the description in the “custom title” (aka tooltip, visible when you hold your mouse pointer over the tag). Use the placeholder 
```
{description}
```

 in the custom title field of the connected tag cloud.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer (0 or 1) | 0 (off) | search_title=1 |

#### label

An optional label, displayed above or left of the input field.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | label="Search:" |

#### placeholder

The text that appears in the empty input field.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | Search a tag | placeholder="Start typing" |

#### div_class

You can use this to access the input field with CSS.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | div_class="my-custom-styling" |

---

## Tag Cloud Search – Gutenberg Block

**Source:** [https://taxopress.com/docs/tag-cloud-search-gutenberg-block/](https://taxopress.com/docs/tag-cloud-search-gutenberg-block/)

Tag Cloud Search is a feature of the Tag Groups Pro plugin. The Tag Cloud Search is an element that you can add into a page to let visitors filter tag clouds by tag names.

This guide will show you how to use the Gutenberg block that is available with the Tag Cloud Search feature.

---

## Connection

#### Class name used in the tag cloud(s)

This parameter is a class name (selector) that creates the connection between the search field and one or more [supported tag clouds](https://taxopress.com/docs/tag-cloud-search-overview/). By default it connects to all supported tag clouds on the same page.

Enter the same class name that you use in the tag cloud as “div_class” (or “table_class”). Example:

```
searchable-tag-cloud
```

If you also need other class names in the tag cloud, you simply enter all of them in the tag cloud as “div class”, separated by spaces. Example:

```
green-tags other-styling searchable-tag-cloud
```

In the Tag Cloud block you enter only “searchable-tag-cloud” – just the part that makes the connection.

---

## Filter

#### Search also in tag description

If you activate this option, the filter will also show tags where a part of the “tag description” matches the words in the text field.

The description can be added to tags when you create a new tag or click on a tag name to edit its information. It’s not editable via “Quick Edit” in the tag list.

Filtering by description works only if you display the description in the “custom title” (aka tooltip, visible when you hold your mouse pointer over the tag). Use the placeholder 
```
{description}
```

 in the custom title field of the connected tag cloud.

---

## Labels and Messages

#### Label

An optional label, displayed above or left of the input field.

#### Placeholder

The text that appears in the empty input field.

---

## Advanced Styling

#### div class

You can use this to access the input field with CSS.

---

## Tag Cloud Search – Overview

**Source:** [https://taxopress.com/docs/tag-cloud-search-overview/](https://taxopress.com/docs/tag-cloud-search-overview/)

Tag Cloud Search is a feature of the Tag Groups Pro plugin. The Tag Cloud Search is an element that you can add into a page to let visitors filter tag clouds by tag names.

- [Click here to see demos of the Tag Cloud Search](https://demo.taxopress.com/tag-cloud-search/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/tag-cloud-search-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/tag-cloud-search-shortcode-parameters/).

Here’s a screenshot of the Tag Cloud Search feature from [our demo site](https://demo.taxopress.com). This display combines a search box with a tabbed display. We’ve added a color scheme, plus text after each tag.

---

## Tag Cloud Search Integrations

The Tag Cloud Search feature works together with the following tag clouds:

- [Tabbed Tag Cloud](https://taxopress.com/docs/tabbed-tag-cloud-overview/)
- [Accordion Tag Cloud](https://taxopress.com/docs/accordion-tag-cloud-gutenberg-block-2/)
- [Alphabetical Tags](https://taxopress.com/docs/alphabetical-tag-index-overview/)
- [Table Tag Cloud](https://taxopress.com/docs/table-tag-cloud/)
- [Simple Tag Cloud](https://taxopress.com/docs/combined-tag-cloud/)

The Shuffle Box has its own text search field.

---

## Connect the Search to the Tag Cloud

You simply add this feature as shortcode or Gutenberg block to the same page where you use one or more of these tag clouds. It will generate an input field where visitors can enter a search term. The filtering will happen live while they type.

In order to tell the Tag Cloud Search which tag clouds to search, you need to connect them. Simply enter the same class name under “Connection” in the block or as tag_cloud_class that you have used in the corresponding tag cloud(s). You don’t need to replace existing class names in the tag cloud. It is sufficient to append it, separated by a space.

Example for shortcodes:

```
jQuery(document).ready(function() {
        const tags = document.querySelectorAll('.tag-groups-cloud .tag-groups-tag');
        const cmInput = document.getElementById('cloud_search_6a815c7d68c25');
        const searchTitle = false;
        
        cmInput.addEventListener('keyup', function(el){TagGroupsCloudSearch.filter(el,'.tag-groups-cloud', tags, searchTitle);});
    });
```

On the same page you use a tag cloud with the same class name “tag-groups-cloud-1” among its classes:

```
(function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-tabs-6a815c7d68c7f', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-tabs-6a815c7d68c7f');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

Now the search will filter the tags in this cloud.

---

## Notes on the Tag Cloud Search

- The filter always works on the tag names. You can chose to filter additionally by tag descriptions. For that to work you need to display the description in the “title” attribute (i.e. in the tooltip): Use the placeholder 
```
{description}
```

 in the “custom title” field or parameter.
- If you use the filter with the Tabbed Tag Cloud or the Alphabetical Tabs, we automatically open the tab of the first tag that matches the filter. This, however, doesn’t work if you connect the Tag Cloud Search with more than one tag clouds.
- The filter is case-insensitive: When you type “apple”, you see both the tags “Big Apple” and “pineapple”.
- Please note that – with or without the Tag Cloud Search – none of these tag clouds dynamically loads tags from the server. The filtering affects only tags that were *initially* loaded.

---

## Tag Groups Info – Overview

**Source:** [https://taxopress.com/docs/tag-groups-info-overview/](https://taxopress.com/docs/tag-groups-info-overview/)

The Tag Groups Info feature is part of the Tag Groups plugin and is available as a shortcode.

You can use a shortcode to display information about your tag groups. This usually comprises the group names and the post count (the number of posts that have tags in this group).

```
not assigned
            67
```

The output will look like this screenshot below:

It is also possible to display only the name or the post count of one group. For more details see the [list of parameters](https://taxopress.com/docs/tag-groups-info-shortcode-parameters/).

---

## Tag Groups Info – Shortcode Parameters

**Source:** [https://taxopress.com/docs/tag-groups-info-shortcode-parameters/](https://taxopress.com/docs/tag-groups-info-shortcode-parameters/)

This guide shows you how to use and customize the shortcode for the Tag Groups Info feature in the Tag Groups plugin.

---

## Shortcode

```
not assigned
            67
```

---

## Example

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

#### group_id

Determines which groups to display. If you select more than one group, the result will be displayed in a table.

| accepted values | default | example shortcode |
| --- | --- | --- |
| One group ID, a comma-separated list of IDs or the keyword “all” | all | group_id=1,3,6 |

#### taxonomy

Restrict the information only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of taxonomy names | Taxonomies selected in the settings under “Basics”. | taxonomy=post_tag,product_tag |

#### html_id

Value for id in the enclosing <table>, <span> or <a> element.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | html_id=“my_info_div” |

#### html_class

Value for class in the enclosing <table>, <span> or <a> element.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | html_class=“make-it-count” |

#### info

Determines which kind of information to display.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string, one of the options below | “number_of_tags” | info=label |

**Possible values**

| value | description |
| --- | --- |
| number_of_tags | Shows the number of assigned tags. For a single tag group, the output is only a number. For multiple tag groups, the output is a table with the group names on the left side. |
| label | Shows the label (name) of this group, or a table of group names for multiple groups. |
| link | (only available in the premium version) |

---

## Tabbed Tag Cloud – Shortcode Parameters

**Source:** [https://taxopress.com/docs/tabbed-tag-cloud-shortcode-parameters/](https://taxopress.com/docs/tabbed-tag-cloud-shortcode-parameters/)

This guide shows you how to use and customize the shortcode for the Tabbed Tag Cloud feature in the Tag Groups plugin.

---

## Shortcode

```
(function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-tabs-6a815c7e215ba', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-tabs-6a815c7e215ba');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

---

## Example

```
(function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-tabs-6a815c7e228f7', {"collapsible":true,"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-tabs-6a815c7e228f7');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Tags or Terms

#### taxonomy

Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of taxonomy names | Taxonomies selected in the settings under “Basics”. | taxonomy=post_tag,product_tag |

#### smallest

Font-size in pt of the smallest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 12 | smallest=12 |

#### largest

Font-size in pt of the largest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 22 | largest=20 |

#### include_terms

Here you can specify tags/terms by their IDs that alone should be included.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (= no restriction) | include_terms=4,5,212 |

** Available only in the shortcode!

#### exclude_terms

Here you can specify a list of tag/term IDs that should be excluded. **exclude_terms** is ignored if you use [include_terms](#include_terms).

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (= no restriction) | exclude_terms=3,2,11 |

** Available only in the shortcode!

#### orderby

Which field to use for sorting.

Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags with [amount](#amount), the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | name | orderby=natural |

#### order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string (“ASC” or “DESC”) | ASC | order=desc |

#### amount

Maximum amount of tags in one cloud (per group).

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 0 (unlimited) | amount=30 |

#### hide_empty

Whether to hide or show tags that are not assigned to any post.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (hide empty) | hide_empty=1 |

#### threshold

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups. Please also pay attention to the value of hide_empty.

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 | integer | threshold=2 |

#### tags_post_id

Display only tags that are assigned to the post (or page) with a specified ID. If the value is set to 0, the plugin will try to retrieve the current post ID. Turn it off with -1.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all tags displayed) | tags_post_id=0 |

#### assigned_class

A modification of the tags_post_id parameter: Rather than hiding tags that are not assigned to the post (or page), they can be styled differently. Tags will receive this class name with appended _1 or _0. (If you output the tags as an array, a new element with the key “assigned” will be true or false.)

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (off) | assigned_class=“color-for-assigned-tag” |

#### separator

A separator between the tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | separator=“•” |

#### adjust_separator_size

Whether to adjust the separator’s size to the size of the following tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | adjust_separator_size=1 |

#### separator_size

The size of the separator, if not automatically adjusted to the size of the following tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 12 | separator_size=12 |

#### prepend

Prepend to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | prepend=“#” |

#### append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | append=“{count}” |

#### link_append

Append something to each tag’s link, for example a query.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | link_append=“track=this” |

** Available only in the shortcode!

#### link_target

Set the “target” attribute for the links of the tags. Possible values are: _blank, _self, _parent or _top. In the shortcode you can also set the name of a frame.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string: “_blank”, “_self”, “_parent”, “_top”, or the name of a frame | empty (= opens in the same window, same as using _self) | link_target=“_blank” |

#### show_tag_count

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (show) | show_tag_count=0 |

#### custom_title

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

If you also use custom_title_plural then the text of custom_title will be used for a post count of 1 and you can use here the singular form

| Default | Possible Values | Example |
| --- | --- | --- |
| depends on show_tag_count | string | custom_title="One post uses {name}" |

#### custom_title_zero

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of 0 (i.e. they are not used with any published post).

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_zero="No post uses {name}" |

#### custom_title_plural

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of >1. You can use here plural forms.

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_plural="{count} posts use {name}" |

#### add_premium_filter

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 (no filter) | add_premium_filter=1 |

### Groups and Tabs

#### include

Tag groups that will be considered in the tag cloud. In the short code you use the IDs, which you find in the left column in the list of groups. Empty or not used means that all tag groups will be used.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | all | include=“1,5,9” |

#### exclude

groups to exclude

| Default | Possible Values | Example |
| --- | --- | --- |
| none | comma-separated list of group IDs | exclude=2,3,5 |

#### groups_post_id

Display only groups of which at least one assigned tag is also assigned to the post (or page) with the ID x. If set to 0, it will try to retrieve the current post ID. Matching groups will be added to the list specified by the parameter [include](#include)

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all groups displayed). | groups_post_id=14 |

#### show_tabs

Whether to show the tabs. This option is useful if you want to show only one group – see [include](#include).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | show_tabs=0 |

#### hide_empty_tabs

Whether to hide tabs without tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 (Not implemented for PHP function with second parameter set to ‘true’. Not effective with groups_post_id | hide_empty_tabs=1 |

#### show_all_groups

Whether to force showing all groups. Useful with the parameters [tags_post_id](#tags_post_id) and [assigned_class](#assigned_class).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | show_all_groups=1 |

** Available only in the shortcode!

#### show_not_assigned

Whether to show all not-assigned tags as an own group.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | show_not_assigned=1 |

#### not_assigned_name

The name used in the tab of not-assigned tags, if you activated [show_not_assigned](#show_not_assigned).

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “not assigned” | not_assigned_name=“Other” |

#### collapsible

Whether tabs are collapsible (toggle open/close).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | Settings in the back end. | collapsible=1 |

#### mouseover

Whether tabs can be selected by hovering over with the mouse pointer (without clicking).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | Settings in the back end. | mouseover=1 |

#### active

Whether tabs are initially expanded or collapsed. Useful in connection with the parameter [collapsible](#collapsible).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | active=1 |

#### delay

Since version 1.29.0, we reveal the tag cloud only after the tabs have finished rendering. This prevents that visitors of your site first see tags in a list (often with bullets) before the software is able to kick in. If for any reason you need to restore the previous behavior, you can turn it off here.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 1 (on) | delay=0 |

#### group_in_class

Add class names to each tag that indicates its group ID (tg_tag_group_id_1) and group label (tg_tag_group_label_first_group).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | group_in_class=1 |

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.
2. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (random value) | div_id=“sidebar_01” |

#### div_class

Define a class for the enclosing <div>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | tag-groups-cloud-tabs | div_class=“make-it-dark” |

#### ul_class

Define a class for the <ul> that generates the tabs with the group labels.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | ul_class=“change-pointer” |

---

## Alphabetical Tag Cloud – Overview

**Source:** [https://taxopress.com/docs/alphabetical-tag-cloud-overview/](https://taxopress.com/docs/alphabetical-tag-cloud-overview/)

The Alphabetical Tag Cloud feature allows you to show terms in a layout where they are automatically organized by their first letter. Your terms are sorted under tabs. Each tab displays the first letters that were found in the tags. You can use either shortcodes or Gutenberg blocks for this feature.

- [Click here to see demos of the Alpabetical Tag Cloud feature](https://demo.taxopress.com/alphabetical-tabs/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/alphabetical-tag-cloud-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/alphabetical-tag-cloud-shortcode-parameters/).

Here’s a screenshot of the Alphabetical Tag Cloud feature from [our demo site](https://demo.taxopress.com).

---

## Alphabetical Tag Cloud – Shortcode Parameters

**Source:** [https://taxopress.com/docs/alphabetical-tag-cloud-shortcode-parameters/](https://taxopress.com/docs/alphabetical-tag-cloud-shortcode-parameters/)

This guide shows you how to use and customize the shortcode for the Alphabetical Tag Cloud feature in the Tag Groups plugin.

---

## Shortcode

```
a
b
c
d
g
h
i
l
m
o
p
r
s
t
u
wAccordion Tag Cloud Add Terms Alphabetical List Alphabetical Tag Cloud Alphabetical Tag Index Artificial Intelligence Auto Links Auto Terms 
bbPress Topics 
Categories Create Terms Current Post Custom Taxonomies Custom URL 
Dandelion API default category Delete Terms Delete Unused Terms Display 
Gutenberg 
Hidden Terms 
IBM Watson 
Linked Terms 
Manage Terms Media Tags Merge Terms 
Open Calais OpenAI 
Parent Categories Post Filter Post List Posts Screen Private Taxonomies 
Related Posts Remove Terms Rename Terms 
Schedule Auto Terms Simple Tags Suggest Terms Synonyms 
Tag Cloud Tag Groups Tags Taxonomy Archives TaxoPress TaxoPress Pro Term Description Term Meta Term Order Term Slugs Terms Display Terms for Current Post Terms Screen 
Uncategorized category Understanding Content 
WooCommerce WooCommerce Product Categories WooCommerce Product Tags WordPress API WordPress Categories WordPress Search 

  (function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-alphabet-tabs-6a815c7e3165f', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-alphabet-tabs-6a815c7e3165f');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

---

## Example

```
a
b
c
d
g
h
i
l
m
o
p
r
s
t
u
wAccordion Tag Cloud Add Terms Alphabetical List Alphabetical Tag Cloud Alphabetical Tag Index Artificial Intelligence Auto Links Auto Terms 
bbPress Topics 
Categories Create Terms Current Post Custom Taxonomies Custom URL 
Dandelion API default category Delete Terms Delete Unused Terms Display 
Gutenberg 
Hidden Terms 
IBM Watson 
Linked Terms 
Manage Terms Media Tags Merge Terms 
Open Calais OpenAI 
Parent Categories Post Filter Post List Posts Screen Private Taxonomies 
Related Posts Remove Terms Rename Terms 
Schedule Auto Terms Simple Tags Suggest Terms Synonyms 
Tag Cloud Tag Groups Tags Taxonomy Archives TaxoPress TaxoPress Pro Term Description Term Meta Term Order Term Slugs Terms Display Terms for Current Post Terms Screen 
Uncategorized category Understanding Content 
WooCommerce WooCommerce Product Categories WooCommerce Product Tags WordPress API WordPress Categories WordPress Search 

  (function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-alphabet-tabs-6a815c7e38d4c', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-alphabet-tabs-6a815c7e38d4c');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Tags or Terms

#### taxonomy

Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of taxonomy names | Taxonomies selected in the settings under “Basics”. | taxonomy=post_tag,product_tag |

#### smallest

Font-size in pt of the smallest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 12 | smallest=12 |

#### largest

Font-size in pt of the largest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 22 | largest=20 |

#### include_terms

Here you can specify tags/terms by their IDs that alone should be included.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (= no restriction) | include_terms=4,5,212 |

Available only in the shortcode!

#### exclude_terms

Here you can specify a list of tag/term IDs that should be excluded. **exclude_terms** is ignored if you use include_terms.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (= no restriction) | exclude_terms=3,2,11 |

Available only in the shortcode!

#### orderby

Which field to use for sorting.

Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags with amount, the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | name | orderby=natural |

#### order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | ASC | order=desc |

#### amount

Maximum amount of tags in one cloud (per group).

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 0 (unlimited) | amount=30 |

#### hide_empty

Whether to hide or show tags that are not assigned to any post.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (hide empty) | hide_empty=1 |

### threshold

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups. Please also pay attention to the value of hide_empty.

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 | integer | threshold=2 |

#### tags_post_id

Display only tags that are assigned to the post (or page) with a specified ID. If the value is set to 0, the plugin will try to retrieve the current post ID. Turn it off with -1.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all tags displayed) | tags_post_id=0 |

#### assigned_class

A modification of the tags_post_id parameter: Rather than hiding tags that are not assigned to the post (or page), they can be styled differently. Tags will receive this class name with appended _1 or _0. (If you output the tags as an array, a new element with the key “assigned” will be true or false.)

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (off) | assigned_class=“color-for-assigned-tag” |

#### separator

A separator between the tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | separator=“•” |

#### adjust_separator_size

Whether to adjust the separator’s size to the size of the following tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | adjust_separator_size=1 |

#### separator_size

The size of the separator, if not automatically adjusted to the size of the following tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 12 | separator_size=12 |

#### prepend

Prepend to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | prepend=“#” |

#### append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | append=“{count}” |

#### link_append

Append something to each tag’s link, for example a query.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | link_append=“track=this” |

Available only in the shortcode!

#### link_target

Set the “target” attribute for the links of the tags. Possible values are: _blank, _self, _parent or _top. In the shortcode you can also set the name of a frame.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string: “_blank”, “_self”, “_parent”, “_top”, or the name of a frame | empty (= opens in the same window, same as using _self) | link_target=“_blank” |

#### show_tag_count

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (show) | show_tag_count=0 |

### custom_title

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

If you also use custom_title_plural then the text of custom_title will be used for a post count of 1 and you can use here the singular form

| Default | Possible Values | Example |
| --- | --- | --- |
| depends on show_tag_count | string | custom_title="One post uses {name}" |

### custom_title_zero

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of 0 (i.e. they are not used with any published post).

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_zero="No post uses {name}" |

### custom_title_plural

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of >1. You can use here plural forms.

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_plural="{count} posts use {name}" |

### Tabs and Alphabet

#### include_letters

Which letters should be used for the tabs.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (= all) | include_letters="abcdefghi" |

#### exclude_letters

Which letters should be excluded from the tabs.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (= all) | exclude_letters="äöüß" |

#### collapsible

Whether tabs are collapsible (toggle open/close).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | Settings in the back end. | collapsible=1 |

#### mouseover

Whether tabs can be selected by hovering over with the mouse pointer (without clicking).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | Settings in the back end. | mouseover=1 |

#### active

Whether tabs are initially expanded or collapsed. Useful in connection with the parameter “collapsible”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | active=1 |

#### locale

Customize the locale (language-specific setting) that is used for sorting the first letters (initials). By default we use the language setting of your site. This sort order affects only the *order of the first letters*, not the*tag order* (see “orderby” and “order”).

Accepted values depend on which locales PHP can use on your server. They can have formats like “fr”, “fr_FR” or “fr_FR.UTF8”.  Please ask your provider if you cannot find it by guessing or googling.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (site locale) | locale="fr_FR.UTF8" |

#### ignore_accents

If you turn this on, then accented (or umlaut) letters will be treated like normal letters. For a list of changes see [remove_accents](https://developer.wordpress.org/reference/functions/remove_accents/).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | ignore_accents=1 |

### Groups

#### include

Use only tags of specified groups.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (all groups) | include=1,3,11 |

This parameter is only available in the shortcode.

#### exclude

groups to exclude

| Default | Possible Values | Example |
| --- | --- | --- |
| none | comma-separated list of group IDs | exclude=2,3,5 |

#### delay

Since version 1.29.0, we reveal the tag cloud only after the tabs have finished rendering. This prevents that visitors of your site first see tags in a list (often with bullets) before the software is able to kick in. If for any reason you need to restore the previous behavior, you can turn it off here.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 1 (on) | delay=0 |

### Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.

1. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (random value) | div_id=“sidebar_01” |

#### div_class

Define a class for the enclosing <div>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | tag-groups-cloud-tabs | div_class=“make-it-dark” |

#### ul_class

Define a class for the <ul> that generates the tabs with the group labels.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | ul_class=“change-pointer” |

---

## Alphabetical Tag Cloud – Gutenberg Block

**Source:** [https://taxopress.com/docs/alphabetical-tag-cloud-gutenberg-block/](https://taxopress.com/docs/alphabetical-tag-cloud-gutenberg-block/)

The Alphabetical Tag Cloud allows you can display your tags under tabs, where each starting letter of a tag has its own cloud.

This guide will show you how to use the Gutenberg block that is available with the Alphabetical Tag Cloud.

---

## Tags and Terms

#### Included taxonomies

Restrict the tags only to these taxonomies (“tag types”). Available are only taxonomies that have been activated in the Tag Groups Settings.

#### Smallest font size

Font-size in pt of the smallest tags.

#### Largest font size

Font-size in pt of the largest tags.

#### Tags per group

Maximum amount of tags in one cloud (per group). Pull the slider to zero to show an unlimited number.

#### Order tags by

Which field to use for sorting the tags.

Note on using “Natural Sorting”: Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags, the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

Note on random order: The order only changes when all object and page caches refresh.

#### Sort order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

#### Hide unused tags

Whether to hide or show tags that are not used by any post.

#### Minimum post count for tags to appear

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups.

#### Separator

A separator between the tags.

#### Adjust separator size to following tag

Disable if you want to set a fixed size.

#### Separator size

The size of the separator, if not automatically adjusted to the size of the following tag.

#### Prepend

Prepend to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

#### Append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

#### Show post count in the tooltip

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag.

#### Custom title for post count = 0

The custom title can be configured separately for tags that have a post count of zero. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count =1

Tooltip text when hovering the mouse over the tag. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count >1

The custom title can be configured separately for tags that have a post count > 1 so that you can use here plural in your text. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Append to the link

Append something to each tag’s link, for example a query.

#### Link Target

Set the “target” attribute for the links of the tags. Possible values are:

- **_blank:** open in a new tab/window
- **_self:** open in the same frame
- **_parent:** open in the parent frame
- **_top:** open in the full tab/window of this frame

In the shortcode you can also set the name of a frame.

#### Add filter to tags for multiple groups

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups. If the resulting posts are not complete and troubleshooting doesn’t help, you can disable it here.

#### Use tags of the following post

Display only tags that are assigned to the post (or page) with a specified ID. If you need this option, you mostly want to “use this post”. The menu offers also some recent posts by title.

---

## Alphabet and Tabs

#### Delay the display of the tabs until they are fully rendered

By default the tabs are only revealed after they are fully rendered. That way your visitors don’t see the raw structure with all tags listed below each other before the software is able to kick in. If you use this feature in an unusual position or experience issues, you can disable it here.

#### Include letters

Which letters should be used for the tabs.

#### Exclude letters

Which letters should be excluded from the tabs.

#### Open tabs on mouseover

Whether tabs can be selected by hovering over with the mouse pointer (without clicking).

#### Make panels collapsible

Whether tabs are collapsible (toggle open/close).

#### Start with expanded tabs

Whether tabs are initially expanded or collapsed. Useful when you make tabs collapsible.

---

## Groups

#### Include groups

Use only tags of specified groups.

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.

1. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

#### div class

Define a class for the enclosing <div>.

#### ul class

Define a class for the <ul> that generates the tabs with the group labels.

---

## Alphabetical Tag Index – Gutenberg Block

**Source:** [https://taxopress.com/docs/alphabetical-tag-index-gutenberg-block/](https://taxopress.com/docs/alphabetical-tag-index-gutenberg-block/)

The Alphabetical Tag Index feature in the Tag Groups plugin allows you to display a tag cloud with your groups as tabs.

This guide will show you how to use the Gutenberg block that is available with the Alphabetical Tag Index feature.

---

## Tags and Taxonomies

#### Include taxonomies

Select the “tag type”. By default we use all that are enabled in the Tag Groups settings.

#### Smallest font size

Font size of the tags with the smallest post count.

#### Largest font size

Font size of the tags with the largest post count.

#### Tags per panel

Maximum number of tags per panel.

#### Order tags by

Field that we should compare when ordering the tag. If you choose “natural sorting” with “Tags per group” then the number will be determined after sorting by name (not natural sorting).

Note on random order: The order only changes when all object and page caches refresh.

#### Sort order

ascending or descending order

#### Hide unused tags

Hide tags with a post count of zero.

#### Minimum post count for tags to appear

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups.

#### Prepend

Character or text to place before each tag. You can use the placeholder {count} to insert the post count.

#### Append

Character or text to place after each tag. You can use the placeholder {count} to insert the post count.

#### Show post count in the tooltip

Show the number of posts that use that tag when hovering the mouse over the tag.

#### Custom title for post count = 0

The custom title can be configured separately for tags that have a post count of zero. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count =1

Tooltip text when hovering the mouse over the tag. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count >1

The custom title can be configured separately for tags that have a post count > 1 so that you can use here plural in your text. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Link target

Set the “target” attribute for the links of the tags. Possible values are:

- **_blank:** open in a new tab/window
- **_self:** open in the same frame
- **_parent:** open in the parent frame
- **_top:** open in the full tab/window of this frame

In the shortcode you can also set the name of a frame.

#### Append to link

Append something to each tag’s link, for example a URL query.

#### Add filter to tags for multiple groups

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups. If the resulting posts are not complete and troubleshooting doesn’t help, you can disable it here.

#### Use tags of the following post

Display only tags that are assigned to the post (or page) with a specified ID. If you need this option, you mostly want to “use this post”. The menu offers also some recent posts by title.

---

## Alphabet

#### Include letters

A list of letters/characters that should be used, if they appear among the first letters. If you leave it empty, we use all initial letters of the tags.

#### Exclude letters

A list of letters/characters that should be excluded, even if they are among the initial letters of the tags.

---

## Groups

#### Include groups

Tag groups that will be considered in the tag cloud.

---

## Columns

#### Column count

The number of columns.

#### Gap between columns

Width of the gap between columns.

#### Avoid breaking groups over columns

Try to keep the group header and its tags together in one block. That makes it easier to understand which tags belong to which group, but it might lead to empty spaces at the bottom of columns.

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### Title element

Level of the HTML <h?> element.

#### div id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.
2. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

#### div class

Define a class for the enclosing <div>. Here you can apply some themes.

#### tags div class

Define a class for the tags container.

#### header class

Define a class for the header.

---

## Tag List – Gutenberg Block

**Source:** [https://taxopress.com/docs/tag-list-gutenberg-block/](https://taxopress.com/docs/tag-list-gutenberg-block/)

With the Tag List feature, terms are displayed in columns under their group names. You can choose which groups to show and you can customize how the tags layout.

This guide will show you how to use the Gutenberg block that is available with the Tag List feature.

---

## Tags and Taxonomies

#### Include taxonomies

Select the “tag type”. By default we use all that are enabled in the Tag Groups settings.

#### Smallest font size

Font size of the tags with the smallest post count.

#### Largest font size

Font size of the tags with the largest post count.

#### Tags per group

Maximum number of tags per group.

#### Order tags by

Field that we should compare when ordering the tag. If you choose “natural sorting” with “Tags per group” then the number will be determined after sorting by name (not natural sorting).

Note on random order: The order only changes when all object and page caches refresh.

#### Sort order

ascending or descending order

#### Hide unused tags

Hide tags with a post count of zero.

#### Minimum post count for tags to appear

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups.

#### Prepend

Character or text to place before each tag. You can use the placeholder {count} to insert the post count.

#### Append

Character or text to place after each tag. You can use the placeholder {count} to insert the post count.

#### Show post count in the tooltip

Show the number of posts that use that tag when hovering the mouse over the tag.

#### Custom title for post count = 0

The custom title can be configured separately for tags that have a post count of zero. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count =1

Tooltip text when hovering the mouse over the tag. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count >1

The custom title can be configured separately for tags that have a post count > 1 so that you can use here plural in your text. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Link target

Set the “target” attribute for the links of the tags. Possible values are:

- **_blank:** open in a new tab/window
- **_self:** open in the same frame
- **_parent:** open in the parent frame
- **_top:** open in the full tab/window of this frame

In the shortcode you can also set the name of a frame.

#### Append to link

Append something to each tag’s link, for example a URL query.

#### Add filter to tags for multiple groups

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups. If the resulting posts are not complete and troubleshooting doesn’t help, you can disable it here.

#### Use tags of the following post

Display only tags that are assigned to the post (or page) with a specified ID. If you need this option, you mostly want to “use this post”. The menu offers also some recent posts by title.

---

## Groups

#### Hide empty groups

Whether to hide groups without tags.

#### Include groups

Tag groups that will be considered in the tag cloud.

#### Use groups of the following post

Display only groups of which at least one assigned tag is also assigned to the selectd post (or page). Matching groups will be added to the list specified by **Include groups**.

---

## Columns

#### Column count

The number of columns.

#### Gap between columns

Width of the gap between columns.

#### Avoid breaking groups over columns

Try to keep the group header and its tags together in one block. That makes it easier to understand which tags belong to which group, but it might lead to empty spaces at the bottom of columns.

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### Title element

Level of the HTML <h?> element.

#### div id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.
2. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

#### div class

Define a class for the enclosing <div>. Here you can apply some themes.

#### tags div class

Define a class for the tags container.

#### header class

Define a class for the header.

---

## Accordion Tag Cloud – Gutenberg Block

**Source:** [https://taxopress.com/docs/accordion-tag-cloud-gutenberg-block/](https://taxopress.com/docs/accordion-tag-cloud-gutenberg-block/)

The Accordion Tag Cloud feature allows you display a tag cloud with your groups as accordion panels.

This guide will show you how to use the Gutenberg block that is available with the Accordion Tag Cloud.

---

## Tags and Terms

#### Included taxonomies

Restrict the tags only to these taxonomies (“tag types”). Available are only taxonomies that have been activated in the Tag Groups Settings.

#### Smallest font size

Font-size in pt of the smallest tags.

#### Largest font size

Font-size in pt of the largest tags.

#### Tags per group

Maximum amount of tags in one cloud (per group). Pull the slider to zero to show an unlimited number.

#### Order tags by

Which field to use for sorting the tags.

Note on using “Natural Sorting”: Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags, the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

Note on random order: The order only changes when all object and page caches refresh.

#### Sort order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

#### Hide unused tags

Whether to hide or show tags that are not used by any post.

#### Minimum post count for tags to appear

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups.

#### Separator

A separator between the tags.

#### Adjust separator size to following tag

Disable if you want to set a fixed size.

#### Separator size

The size of the separator, if not automatically adjusted to the size of the following tag.

#### Prepend

Prepend to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

#### Append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

#### Show post count in the tooltip

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag.

#### Custom title for post count = 0

The custom title can be configured separately for tags that have a post count of zero. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count =1

Tooltip text when hovering the mouse over the tag. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count >1

The custom title can be configured separately for tags that have a post count > 1 so that you can use here plural in your text. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Link Target

Set the “target” attribute for the links of the tags. Possible values are:

- **_blank:** open in a new tab/window
- **_self:** open in the same frame
- **_parent:** open in the parent frame
- **_top:** open in the full tab/window of this frame

In the shortcode you can also set the name of a frame.

#### Append to the link

Append something to each tag’s link, for example a query.

#### Add filter to tags for multiple groups

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups.

#### Use tags of the following post

Display only tags that are assigned to the post (or page) with a specified ID. If you need this option, you mostly want to “use this post”. The menu offers also some recent posts by title.

---

## Groups and Panels

#### Delay the display of the panels until they are fully rendered

By default the panels are only revealed after they are fully rendered. That way your visitors don’t see the raw structure with all tags listed below each other before the software is able to kick in. If you use this feature in an unusual position or experience issues, you can disable it here.

#### Show panels

Whether to show the panels. This option is useful if you want to show only one group.

#### Hide empty panels

Whether to hide panels without tags.

#### Open panels on mouseover

Whether panels can be selected by hovering over with the mouse pointer (without clicking).

#### Make panels collapsible

Whether tabs are collapsible (toggle open/close).

#### Start with expanded panels

Whether panels are initially expanded or collapsed. Useful when you make tabs collapsible.

#### Which tab should be initially open?

(from version 1.31.0) Select a group that should be open when the tabs load.

#### Panel height

The height of the panels can be adjusted to the content or the parent element.

#### Include groups

Tag groups that will be considered in the tag cloud.

#### Label on tab for not-assigned tags

The name used in the tab of not-assigned tags.

#### Use groups of the following post

Display only groups of which at least one assigned tag is also assigned to the selectd post (or page). Matching groups will be added to the list specified by **Include groups**.

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.

1. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

#### div class

Define a class for the enclosing <div>. Here you can apply some themes.

#### h3 class

Define a class for the <h3> that contains the headers.

#### inner div class

Define a class for the inner <div> that contains the tags.

---

## Tabbed Tag Cloud – Gutenberg Block

**Source:** [https://taxopress.com/docs/tabbed-tag-cloud-gutenberg-block/](https://taxopress.com/docs/tabbed-tag-cloud-gutenberg-block/)

The Tabbed Tag Cloud feature allows you to display a tag cloud with your groups as tabs.

This guide will show you how to use the Gutenberg block that is available with the Tabbed Tag Cloud feature.

---

## Tags and Terms

#### Included taxonomies

Restrict the tags only to these taxonomies (“tag types”). Available are only taxonomies that have been activated in the Tag Groups Settings.

#### Smallest font size

Font-size in pt of the smallest tags.

#### Largest font size

Font-size in pt of the largest tags.

#### Tags per group

Maximum amount of tags in one cloud (per group). Pull the slider to zero to show an unlimited number.

#### Order tags by

Which field to use for sorting the tags.

Note on using “Natural Sorting”: Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags, the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

Note on random order: The order only changes when all object and page caches refresh.

#### Sort order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

#### Hide unused tags

Whether to hide or show tags that are not used by any post.

#### Minimum post count for tags to appear

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups.

#### Separator

A separator between the tags.

#### Adjust separator size to following tag

Disable if you want to set a fixed size.

#### Separator size

The size of the separator, if not automatically adjusted to the size of the following tag.

#### Prepend

Prepend to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

#### Append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

#### Show post count in the tooltip

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag.

#### Custom title for post count = 0

The custom title can be configured separately for tags that have a post count of zero. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count =1

Tooltip text when hovering the mouse over the tag. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count >1

The custom title can be configured separately for tags that have a post count > 1 so that you can use here plural in your text. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Append to the link

Append something to each tag’s link, for example a query.

#### Link Target

Set the “target” attribute for the links of the tags. Possible values are:

- **_blank:** open in a new tab/window
- **_self:** open in the same frame
- **_parent:** open in the parent frame
- **_top:** open in the full tab/window of this frame

In the shortcode you can also set the name of a frame.

#### Add filter to tags for multiple groups

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups. If the resulting posts are not complete and troubleshooting doesn’t help, you can disable it here.

#### Use tags of the following post

Display only tags that are assigned to the post (or page) with a specified ID. If you need this option, you mostly want to “use this post”. The menu offers also some recent posts by title.

---

## Groups and Tabs

#### Delay the display of the tabs until they are fully rendered

By default the tabs are only revealed after they are fully rendered. That way your visitors don’t see the raw structure with all tags listed below each other before the software is able to kick in. If you use this feature in an unusual position or experience issues, you can disable it here. (available from 1.30.5)

#### Show tabs

Whether to show the tabs. This option is useful if you want to show only one group.

#### Hide empty tabs

Whether to hide tabs without tags.

#### Open tabs on mouseover

Whether tabs can be selected by hovering over with the mouse pointer (without clicking).

#### Make panels collapsible

Whether tabs are collapsible (toggle open/close).

#### Start with expanded tabs

Whether tabs are initially expanded or collapsed. Useful when you make tabs collapsible.

#### Which tab should be initially open?

(from version 1.31.0) Select a group that should be open when the tabs load.

#### Include groups

Tag groups that will be considered in the tag cloud.

#### Label on tab for not-assigned tags

The name used in the tab of not-assigned tags.

#### Use groups of the following post

Display only groups of which at least one assigned tag is also assigned to the selectd post (or page). Matching groups will be added to the list specified by **Include groups**.

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

```
<a class="..._0"> or <a class="..._1">
```

Rather than hiding tags that are not assigned to the post (or page), they can be styled differently. Tags will receive this class name with appended _1 or _0. (If you output the tags as an array, a new element with the key “assigned” will be true or false.)

#### div id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.
2. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

#### div class

Define a class for the enclosing <div>. Here you can apply some themes.

#### ul class

Define a class for the <ul> that generates the tabs with the group labels.

---

## Post List – Gutenberg Block

**Source:** [https://taxopress.com/docs/post-list-gutenberg-block/](https://taxopress.com/docs/post-list-gutenberg-block/)

This is a guide to using “Post List” block in the Tag Groups Pro plugin. The following options appear in the editor side panel after you select the block:

---

## Tags and Taxonomies

- **Include taxonomy**: Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.
- **Logic operator**: How the tags should be logically connected. Possible values are “IN” (At least one tag matches.), “AND” (All tags match.) and “IN AND” (At least one tag from each group matches).

---

## Groups

- **Include groups**: Restrict the posts to those having tags in these groups.

---

## Posts

- **Posts per page**: How many posts appear under the filter. Use -1 to show all. Please note that high numbers of posts may impact the performance.
- **Use a pager**: If the pager is enabled then visitors can load the next or previous page or click on a page number. It is also possible to use the cursor keys left and right to flip through pages. Please note that for a random post order the posts will be randomized for each page and the same post might therefore appear on different pages.
- **Pager position**: top, bottom, both
- **Caching time**: Time in minutes that results remain in the cache on the server.
- **Order posts by**: Which field to use for sorting.
- **Sort order**: Whether to sort the posts in ascending or descending order. Ascending order also means from oldest to newest.
- **Display the total amount of posts**: Whether to display a line that shows the total amount of posts. This message appears only if the number is greater than zero.

---

## Post Template

The post template defines how each post is displayed. The default template shows the featured images on the left, the post title and meta on the right and the post excerpt below.

Customize the template

Customize the post template how you need it. In the text area you see the HTML of the last selected post template. Please be aware that when you return to one of the preset templates, your custom changes will be lost.

Possible placeholders are: {post_id}, {post_title}, {permalink}, {post_excerpt} (automatically generated), {post_excerpt_html} (preserves most common html tags), {post_date}, {post_author}, {image_src} or {image_src|image size}, {image_alt}, {post_category}, {post_tags}, {custom_field:<name>}

Please note that the HTML will be sanitized, i.e. some tags and attributes might be removed. In that case try to use a class instead.

Image sizes

The following formats are possible:

- keywords like “thumbnail”, “medium”, “large” or any custom image size((Custom sizes may be registered by your theme or another plugin.)). **This method provides the best performance when loading an image.** You can change the sizes in the general Media settings of your WordPress site and then use a plugin such as Regenerate Thumbnails to generate the new sizes.
- width and height, separated by “x”. On both sides you can use numbers (sizes in pixel), percentages or the keyword “auto”. The image loaded by the browser may actually be larger and scaled down.

Examples for the image tag:

```
<img src=”{image_src|medium}” alt=”{image_alt}” class=”tg-entry-image” />
```

```
<img src=”{image_src|100×150}” alt=”{image_alt}” class=”tg-entry-image” />
```

```
<img src=”{image_src|100%×auto}” alt=”{image_alt}” class=”tg-entry-image” />
```

#### Default image src

Here you can enter the path to an image that will be used as default, if the post doesn’t have a featured image. Leave empty to use the plugin’s default.

---

## Labels and Messages

- **Message if nothing was found**: Message to show if no posts were found.
- **Link to load more posts**: Label of the link to load more posts, if the pager is active.
- **Link to load previous posts**: Label of the link to go back, if the pager is active.
- **Message for one post in total**: Message if one post was found, if “Display the total amount of posts” is active.
- **Message for {count} posts in total**: Message if many posts were found, if “Display the total amount of posts” is active. May contain the placeholder {count}

---

## Advanced Styling

You can set here classes to be referred to in CSS. You need some knowledge of CSS to use these options.

- **div**id: Define an ID for the <div>.
- **div class**: Define a class for the <div>.
- **article class**: Define a class for the enclosing <article>.

---

## Dynamic Post Filter – Gutenberg Block

**Source:** [https://taxopress.com/docs/dynamic-post-filter-gutenberg-block/](https://taxopress.com/docs/dynamic-post-filter-gutenberg-block/)

The Dynamic Post Filter feature allows visitors to select groups and tags and immediately see posts that match their selection.

This guide will show you how to use the Gutenberg block that is available with the Dynamic Post Filter feature.

**Note:**This block can only be used **once** on a page (including widgets), and it cannot be used together with the shortcode or block of the Toggle Post Filter.

---

## Tags and Taxonomies

#### Include taxonomy

Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

#### Logic operator

The operator determines how selected tags and groups should be logically connected when searching for matching posts. Possible values are:

- **any tag matches** (“IN”/”OR”): At least one of the selected tags must be among the post tags for a post to be displayed.
- **all tags match** (“AND”): All selected tags across all groups must be among the post tags of the same group.
- **at least one tag matches from each group** (“IN AND”): At least one selected tag of each group must be among the post tags of the same group.
- **exact match of all selected tags** (“EXACT”): The selection of tags must be identical to the post tags of that same group, not more and not less((If you upgrade from a version before 1.39.0, go to the settings, Troubleshooting and run the maintenance.)) This option is not available for the option where you show groups only.

Groups where no tags are selected won’t be considered. If you use AND or IN AND on five groups and a visitors selects only tags from the first two groups, they may already see posts. The unused other three groups don’t count in.

If you need more precise control with different operators per group, you need to transform the block into a shortcode and then use the parameter “operator”.

---

## Groups

#### Include groups

Restrict the posts to those having tags in these groups.

#### Initially open

Tag groups that are initially open.

#### Show groups only

Skip the tag selection and display all products that match the selected groups.

#### Hide the close buttons

Disables the possibility to remove the input fields of groups. You can use that option if you want to show a fixed set of groups that cannot be altered by visitors.

---

## Posts

#### Posts per page

How many posts appear under the filter.

#### Use a pager

If the pager is enabled then visitors can load the next or previous page.

#### Caching time

Time in minutes that results remain in the cache on the server.

#### Order posts by

Which field to use for sorting.

#### Sort order

Whether to sort the posts in ascending or descending order. Ascending order also means from oldest to newest.

#### Display how many posts were found

This line will appear in a separate field that you create with the messages block. The message itself can be customized in the “Labels and Messages” menu.

From version 1.28.0: You can optionally display the message in an overlay notification that remains visible for three seconds. This is particularly useful for mobile devices, because your visitors will receive a feedback of their search even if the message and posts blocks are outside of their screen (viewport). You can select this option and omit the message block to show only overlay notifications.

When you use a pager, the number will be the total amount. Otherwise it’ll be the amount of visible posts, that is maximum what you choose for **Posts per Page**.

---

## Post template

The post template defines how each post is displayed. The default template shows the featured images on the left, the post title and meta on the right and the post excerpt below.

Starting from version 1.30.0, you can choose among popular templates.

#### Customize the template

Customize the post template how you need it. In the text area you see the HTML of the last selected post template. Please be aware that when you return to one of the preset templates, your custom changes will be lost.

Possible placeholders are: {post_id}, {post_title}, {permalink}, {post_excerpt} (automatically generated), {post_excerpt_html} (preserves most common html tags), {post_date}, {post_author}, {image_src} or {image_src|image size}, {image_alt}, {post_category}, {post_tags}, {custom_field:<name>}((A alue from the post meta <name>.

Please note that the HTML will be sanitized, i.e. some tags and attributes might be removed. In that case try to use a class instead.

#### Image sizes

The following formats are possible:

- keywords like “thumbnail”, “medium”, “large” or any custom image size((Custom sizes may be registered by your theme or another plugin.)). **This method provides the best performance when loading an image.** You can change the sizes in the general Media settings of your WordPress site and then use a plugin such as Regenerate Thumbnails to generate the new sizes.
- width and height, separated by “x”. On both sides you can use numbers (sizes in pixel), percentages or the keyword “auto”. The image loaded by the browser may actually be larger and scaled down.

Examples for the image tag:

```
<img src=”{image_src|medium}” alt=”{image_alt}” class=”tg-entry-image” />
```

```
<img src=”{image_src|100×150}” alt=”{image_alt}” class=”tg-entry-image” />
```

```
<img src=”{image_src|100%×auto}” alt=”{image_alt}” class=”tg-entry-image” />
```

#### Transition

Transition between loading the list of posts.

#### Static taxonomy

Optionally filter also by terms of an additional taxonomy (not necessarily one of the taxonomies used for tag groups). Used together with static terms.

#### Static terms

Optionally filter also by terms of an additional taxonomy (not necessarily one of the taxonomies used for tag groups). Used together with static taxonomy.

---

### Labels and Messages

#### Placeholder for tag field

Placeholder message in the tag input field. It disappears as soon as you enter tags.

#### Placeholder for posts field

Placeholder message for the list of posts.

#### Label for default option

What the pull-down menu should show if no group is selected.

#### Header above groups

Header above the list of selected groups.

#### Alert to use only existing tags

Error message if user tries to enter a tag that doesn’t exist.

#### Alert to use only tags from correct group

Error message if user tries to enter a tag from another group.

#### Message if nothing was found

Message to show if no posts were found. This will also be used for the overlay notification.

#### Link to load more posts

Label of the link to load more posts, if the pager is active.

#### Link to load previous posts

Label of the link to go back, if the pager is active.

#### Message for one post in total

Message if one post was found, if “Display the total amount of posts” is active.

#### Message for {count} posts in total

Message if many posts were found, if “Display the total amount of posts” is active. May contain the placeholder {count}

---

## Other

#### Remember selected filter and post

The Dynamic Post Filter can optionally remember the selection of groups and tags so that your visitors who clicked on an article and then return to this page will see the same list of articles again. After loading, the page will scroll to the group selection menu. (Otherwise the browser might go to a random post, depending on the loading speed.)

The data is saved in a browser cookie. If you use several Dynamic Post Filters on your site, you should give each a different div_id so that each will have its own cookie.

The value is the time in minutes. Zero means off.

---

### Advanced Styling

#### Use styling for selector.

Changes the default select menu to a more stylish one.

You can set here classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div class

Set a class for the <div>.

#### div id

Set an ID for the enclosing <div>.

---

## Simple Tag Cloud – Gutenberg Block

**Source:** [https://taxopress.com/docs/combined-tag-cloud-gutenberg-block/](https://taxopress.com/docs/combined-tag-cloud-gutenberg-block/)

The Simple Tag Cloud feature is part of the Tag Groups Pro plugin. This feature allows you to display taxonomy terms in a traditional “Tag Cloud” layout, but with many creative and stylish options.

This guide will show you how to use the Gutenberg block that is available with the Simple Tag Cloud.

---

## Tags and Terms

#### Included taxonomies

Restrict the tags only to these taxonomies (“tag types”). Available are only taxonomies that have been activated in the Tag Groups Settings.

#### Smallest font size

Font-size in pt of the smallest tags.

#### Largest font size

Font-size in pt of the largest tags.

#### Tags per group

Maximum amount of tags in one cloud (per group). Pull the slider to zero to show an unlimited number.

#### Order tags by

Which field to use for sorting the tags.

Note on using “Natural Sorting”: Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags, the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

Note on random order: The order only changes when all object and page caches refresh.

#### Sort order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

#### Hide unused tags

Whether to hide or show tags that are not used by any post.

#### Minimum post count for tags to appear

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups.

#### Separator

A separator between the tags.

#### Adjust separator size to following tag

Disable if you want to set a fixed size.

#### Separator size

The size of the separator, if not automatically adjusted to the size of the following tag.

#### Prepend

Prepend to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

#### Append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

#### Show post count in the tooltip

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag.

#### Custom title for post count = 0

The custom title can be configured separately for tags that have a post count of zero. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count =1

Tooltip text when hovering the mouse over the tag. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count >1

The custom title can be configured separately for tags that have a post count > 1 so that you can use here plural in your text. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Append to the link

Append something to each tag’s link, for example a query.

#### Link Target

Set the “target” attribute for the links of the tags. Possible values are:

- **_blank:** open in a new tab/window
- **_self:** open in the same frame
- **_parent:** open in the parent frame
- **_top:** open in the full tab/window of this frame

In the shortcode you can also set the name of a frame.

#### Add filter to tags for multiple groups

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups. If the resulting posts are not complete and troubleshooting doesn’t help, you can disable it here.

#### Use tags of the following post

Display only tags that are assigned to the post (or page) with a specified ID. If you need this option, you mostly want to “use this post”. The menu offers also some recent posts by title.

---

## Groups

#### Include groups

Tag groups that will be considered in the tag cloud.

#### Use groups of the following post

Display only groups of which at least one assigned tag is also assigned to the selectd post (or page). Matching groups will be added to the list specified by **Include groups**.

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.
2. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

#### div class

Define a class for the enclosing <div>. Here you can apply some themes.

---

## Table Tag Cloud – Gutenberg Block

**Source:** [https://taxopress.com/docs/table-tag-cloud-gutenberg-block/](https://taxopress.com/docs/table-tag-cloud-gutenberg-block/)

The Table Tag Cloud feature is part of the Tag Groups Pro plugin. This display organizes tags in a table, with groups as headers. You can use either shortcodes or Gutenberg blocks for this feature.

This guide will show you how to use the Gutenberg block that is available with the Table Tag Cloud.

---

## Tags and Taxonomies

#### Included taxonomies

Restrict the tags only to these taxonomies (“tag types”). Available are only taxonomies that have been activated in the Tag Groups Settings.

#### Smallest font size

Font-size in pt of the smallest tags.

#### Largest font size

Font-size in pt of the largest tags.

#### Amount of tags per group

Maximum amount of tags in one cloud (per group). Pull the slider to zero to show an unlimited number.

#### Order tags by

Which field to use for sorting the tags.

Note on using “Natural Sorting”: Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags with amount, the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

Note on random order: The order only changes when all object and page caches refresh.

#### Sort order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

#### Hide unused tags

Whether to hide or show tags that are not used by any post.

#### Minimum post count for tags to appear

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups.

#### Seperator

A separator between the tags.

#### Adjust separator size to following tag

Whether to adjust the separator’s size to the size of the following tag.

#### Separator size

The size of the separator, if not automatically adjusted to the size of the following tag.

#### Prepend

Prepend to each tag name. Can obtain the placeholder {count} that will be replaced with the post count for that tag. Please note that {count} is the total number – not per selected group.

#### Append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag. Please note that {count} is the total number – not per selected group.

#### Show the post count in the tooltip

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag. Please note that the value is the total number – not per selected group.

If you enter a custom title, this option will be unavailable.

#### Custom title for post count = 0

The custom title can be configured separately for tags that have a post count of zero. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count =1

Tooltip text when hovering the mouse over the tag. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count >1

The custom title can be configured separately for tags that have a post count > 1 so that you can use here plural in your text. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Link target

Set the “target” attribute for the links of the tags. Possible values are:

- **_blank:** open in a new tab/window
- **_self:** open in the same frame
- **_parent:** open in the parent frame
- **_top:** open in the full tab/window of this frame

In the shortcode you can also set the name of a frame.

#### Add filter to tags for multiple groups

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups.

#### Append to the link

Append something to each tag’s link, for example a query.

#### Use tags of the following post

Display only tags that are assigned to the post (or page) with a specified ID. If you need this option, you mostly want to “use this post”. The menu offers also some recent posts by title.

---

## Groups

#### Include groups

Tag groups that will be considered in the tag cloud. In the short code you use the IDs, which you find in the left column in the list of groups. Empty or not used means that all tag groups will be used.

#### Use groups of the following post

Display only groups of which at least one assigned tag is also assigned to the selected post (or page). Matching groups will be added to the list specified by **Include groups**.

#### Label on tab for not assigned tags

The name used in the tab of not-assigned tags, if you include the group for not-assigned tags.

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### Responsive breakpoint

Width of the viewport (window) when the table should switch into responsive mode.

#### table_id

Define an ID for the enclosing <table>. Avoid identifiers that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

#### table_class

Define a class for the enclosing <table> element.

#### th_class

Define a class for the <th> elements.

#### td_class

Define a class for the <td> elements.

---

## Tag List – Overview

**Source:** [https://taxopress.com/docs/tag-list/](https://taxopress.com/docs/tag-list/)

In the Tag List feature, terms are displayed in columns under their group names. You can choose which groups to show and you can customize how the tags layout. You can use either shortcodes or Gutenberg blocks for this feature.

- [Click here to see demos of the Tag List feature](https://demo.taxopress.com/tag-list/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/tag-list-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/tag-list-parameters/).

Here’s a screenshot of the Tag List feature from [our demo site](https://demo.taxopress.com). This example uses a red color scheme, plus the number of times the tag is used.

---

## Alphabetical Tag Index – Overview

**Source:** [https://taxopress.com/docs/alphabetical-tag-index/](https://taxopress.com/docs/alphabetical-tag-index/)

The Alphabetical Tag Index feature is part of the Tag Groups plugin. This feature allows you to show terms in a layout where they are automatically organized by their first letter. You can use either shortcodes or Gutenberg blocks.

- [Click here to see demos of the Alpabetical Tag Index feature](https://demo.taxopress.com/alphabetical-index/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/alphabetical-tag-index-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/alphabetical-tag-index-parameters/).

Here’s a screenshot of the Alphabetical Tag Index feature from [our demo site](https://demo.taxopress.com). We’re using a custom Unicode icon and a three column layout.

---

## Alphabetical Tag Index – Shortcode Parameters

**Source:** [https://taxopress.com/docs/alphabetical-tag-index-parameters/](https://taxopress.com/docs/alphabetical-tag-index-parameters/)

This guide shows you how to use and customize the shortcode for the Alphabetical Tag Index feature in the Tag Groups plugin.

---

## Shortcode

```
[tag_groups_alphabetical_index]
```

---

## Example

```
[tag_groups_alphabetical_index column_count=2]
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

This overview assumes that you know how to use shortcodes. Shortcodes are the traditional WordPress way how to add features into posts, pages and widgets.

### amount

the maximum number of tags per group to display

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 (no limit) | integer | amount=10 |

### append

adds something behind the tag name; placeholder: {count} for post count

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | append=” ({count})” |

### column_count

number of columns

| Default | Possible Values | Example |
| --- | --- | --- |
| 2 | integer | column_count=3 |

### column_gap

width of the gap between columns

| Default | Possible Values | Example |
| --- | --- | --- |
| 10px | string | column_gap=20px |

### custom_title

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

If you also use custom_title_plural then the text of custom_title will be used for a post count of 1 and you can use here the singular form

| Default | Possible Values | Example |
| --- | --- | --- |
| depends on show_tag_count | string | custom_title="One post uses {name}" |

### custom_title_zero

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of 0 (i.e. they are not used with any published post).

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_zero="No post uses {name}" |

### custom_title_plural

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of >1. You can use here plural forms.

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_plural="{count} posts use {name}" |

### div_class

class of the enclosing div for own styling

| Default | Possible Values | Example |
| --- | --- | --- |
| tag-groups-tag-list | string | div_class="my-class" |

### div_id

ID of the enclosing div

| Default | Possible Values | Example |
| --- | --- | --- |
| random | string (must be unique on the page) | div_id="my-id" |

### exclude_letters

letters/characters that should not appear in the list

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | exclude_letters=0123456789 |

### exclude_terms

a list of tags that should not appear

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | comma-separated list of tag IDs | exclude_terms= |

### h_level

<h3>/h3>, <h4></h4>, … of the headings with the group names

| Default | Possible Values | Example |
| --- | --- | --- |
| 3 | integer | h_level=2 |

### header_class

class for the headers

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | header_class="my-class" |

### hide_empty

hide tags with post count zero

| Default | Possible Values | Example |
| --- | --- | --- |
| 1 | 0 or 1 | hide_empty=0 |

### threshold

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups. Please also pay attention to the value of hide_empty.

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 | integer | threshold=2 |

### include

groups to include

| Default | Possible Values | Example |
| --- | --- | --- |
| all | comma-separated list of group IDs | include=2,3,5 |

### exclude

groups to exclude

| Default | Possible Values | Example |
| --- | --- | --- |
| none | comma-separated list of group IDs | exclude=2,3,5 |

### include_letters

which first letters to use

| Default | Possible Values | Example |
| --- | --- | --- |
| all initials of the displayed tags | string | include_letters=abcdz |

### include_terms

tags to include (see also “hide_empty”)

| Default | Possible Values | Example |
| --- | --- | --- |
| all | comma-separated list of tag IDs | include_terms=12,34,255 |

### keep_together

whether to keep headings and tag block together; otherwise tags lists may continue in a new column

| Default | Possible Values | Example |
| --- | --- | --- |
| 1 (on) | 0 or 1 | keep_together=1 |

### largest

max. font size in pt

| Default | Possible Values | Example |
| --- | --- | --- |
| 12 | integer | largest=32 |

### link_target

target attribute of the tag link (_blank, _top, _self, …)

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | link_target="_top" |

### link_append

append query to the link

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | link_append=“source=cloud” |

### locale

Customize the locale (language-specific setting) that is used for sorting the first letters (initials). By default we use the language setting of your site. This sort order affects only the *order of the first letters*, not the*tag order* (see “orderby” and “order”).

Accepted values depend on which locales PHP can use on your server. They can have formats like “fr”, “fr_FR” or “fr_FR.UTF8”.  Please ask your provider if you cannot find it by guessing or googling.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (site locale) | locale="fr_FR.UTF8" |

### ignore_accents

If you turn this on, then accented (or umlaut) letters will be treated like normal letters. For a list of changes see [remove_accents](https://developer.wordpress.org/reference/functions/remove_accents/).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | ignore_accents=1 |

### order

ascending or descending order; use with orderby

| Default | Possible Values | Example |
| --- | --- | --- |
| asc | string (asc or desc) | order=desc |

by what to order the tags

| option | description |
| --- | --- |
| name | display name of the tag |
| natural | natural sort order |
| count | post count |
| slug | tag slug |
| term_id | ID of the tag |
| description | tag description |
| random | random order that changes when all object + page caches refresh |
| term_order | A custom sort order is available with a 3rd-party plugin. |

use together with order

| Default | Possible Values | Example |
| --- | --- | --- |
| name | string | orderby=natural |

### prepend

prepend to the tag; placeholder: {count} for post count

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | prepend="#" |

### show_tag_count

show the post count in the title (deprecated option, better use custom_title

| Default | Possible Values | Example |
| --- | --- | --- |
| 1 (on) | 0 or 1 | show_tag_count=0 |

### smallest

min. font size in pt

| Default | Possible Values | Example |
| --- | --- | --- |
| 12 | integer | smallest=14 |

### tags_div_class

class name for the divs around tags

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | tags_div_class="my-class" |

### tags_post_id

Use post ID or zero for current post.

| Default | Possible Values | Example |
| --- | --- | --- |
| -1 (not used) | integer | tags_post_id=0 |

### taxonomy

taxonomies (tag types) to use

| Default | Possible Values | Example |
| --- | --- | --- |
| all selected in the settings | comma-separated list of taxonomy names/slugs | taxonomy=product_tag |

---

## Tag List – Shortcode Parameters

**Source:** [https://taxopress.com/docs/tag-list-parameters/](https://taxopress.com/docs/tag-list-parameters/)

This guide shows you how to use and customize the shortcode for the Tag List feature in the Tag Groups plugin.

---

## Shortcode

```
[tag_groups_tag_list]
```

---

## Example

```
[tag_groups_tag_list append="{count}"]
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

This overview assumes that you know how to use shortcodes. Shortcodes are the traditional WordPress way how to add features into posts, pages and widgets.

### add_premium_filter

Modifies the URL – for the case that you use the same tag in various groups.

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 (false) | 0 or 1 | add_premium_filter=1 |

### amount

the maximum number of tags per group to display

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 (no limit) | integer | amount=10 |

### append

adds something behind the tag name; placeholder: {count} for post count

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | append=” ({count})” |

### assigned_class

adds class name to tags that shows whether the tag is assigned or not; assigned tags have “_1” appended, unassigned “_0” to the class name

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | assigned_class="colored-tags" |

### column_count

number of columns

| Default | Possible Values | Example |
| --- | --- | --- |
| 2 | integer | column_count=3 |

### column_gap

width of the gap between columns

| Default | Possible Values | Example |
| --- | --- | --- |
| 10px | string | column_gap=20px |

### custom_title

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

If you also use custom_title_plural then the text of custom_title will be used for a post count of 1 and you can use here the singular form

| Default | Possible Values | Example |
| --- | --- | --- |
| depends on show_tag_count | string | custom_title="One post uses {name}" |

### custom_title_zero

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of 0 (i.e. they are not used with any published post).

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_zero="No post uses {name}" |

### custom_title_plural

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of >1. You can use here plural forms.

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_plural="{count} posts use {name}" |

### div_class

class of the enclosing div for own styling

| Default | Possible Values | Example |
| --- | --- | --- |
| tag-groups-tag-list | string | div_class="my-class" |

### div_id

ID of the enclosing div

| Default | Possible Values | Example |
| --- | --- | --- |
| random | string (must be unique on the page) | div_id="my-id" |

### exclude_terms

a list of tags that should not appear

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | comma-separated list of tag IDs | exclude_terms= |

### group_in_class

whether to add information about the groups into the class attribute; tg_tag_group_id_ + ID and tg_tag_group_label_ + tag name (spaces replaced with dashes)

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 (off) | 0 or 1 | group_in_class=1 |

### groups_post_id

ID of a post that the tags should be take from. 0 tries to get current post.

| Default | Possible Values | Example |
| --- | --- | --- |
| -1 (off) | integer | groups_post_id=5634 |

### h_level

H3, then H4 etc.. Headings with the group names

| Default | Possible Values | Example |
| --- | --- | --- |
| 3 | integer | h_level=2 |

### header_class

class for the headers

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | header_class="my-class" |

### hide_empty_content

hide empty groups

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 (off) | 0 or 1 | hide_empty_content=1 |

### hide_empty

hide tags with post count zero

| Default | Possible Values | Example |
| --- | --- | --- |
| 1 | 0 or 1 | hide_empty=0 |

### threshold

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups. Please also pay attention to the value of hide_empty.

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 | integer | hide_empty=0 |

### include

groups to include

| Default | Possible Values | Example |
| --- | --- | --- |
| all | comma-separated list of group IDs | include=2,3,5 |

### exclude

groups to exclude

| Default | Possible Values | Example |
| --- | --- | --- |
| none | comma-separated list of group IDs | exclude=2,3,5 |

### include_terms

tags to include (see also “hide_empty”)

| Default | Possible Values | Example |
| --- | --- | --- |
| all | comma-separated list of tag IDs | include_terms=12,34,255 |

### keep_together

whether to keep headings and tag block together; otherwise tags lists may continue in a new column

| Default | Possible Values | Example |
| --- | --- | --- |
| 1 (on) | 0 or 1 | keep_together=1 |

### largest

max. font size in pt

| Default | Possible Values | Example |
| --- | --- | --- |
| 12 | integer | largest=32 |

### link_target

target attribute of the tag link (_blank, _top, _self, …)

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | link_target="_top" |

### link_append

append query to the link

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | link_append=“source=cloud” |

### not_assigned_name

lets you choose a custom group name for not-assigned tags

| Default | Possible Values | Example |
| --- | --- | --- |
| not assigned | string | not_assigned_name="unsorted tags" |

### order

ascending or descending order; use with orderby

| Default | Possible Values | Example |
| --- | --- | --- |
| asc | string (asc or desc) | order=desc |

### orderby

by what to order the tags

use together with order

| Default | Possible Values | Example |
| --- | --- | --- |
| name | string | orderby=natural |

### prepend

prepend to the tag; placeholder: {count} for post count

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | prepend="#" |

### show_not_assigned

whether to show tags that are not assigned to any group

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 | 0 or 1 | show_not_assigned=1 |

### show_all_groups

whether to show also empty groups

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 (off) | 0 or 1 | show_all_groups=1 |

### show_tag_count

show the post count in the title (deprecated option, better use custom_title

| Default | Possible Values | Example |
| --- | --- | --- |
| 1 (on) | 0 or 1 | show_tag_count=0 |

### smallest

min. font size in pt

| Default | Possible Values | Example |
| --- | --- | --- |
| 12 | integer | smallest=14 |

### tags_div_class

class name for the divs around tags

| Default | Possible Values | Example |
| --- | --- | --- |
| empty | string | tags_div_class="my-class" |

### tags_post_id

Use post ID or zero for current post.

| Default | Possible Values | Example |
| --- | --- | --- |
| -1 (not used) | integer | tags_post_id=0 |

### taxonomy

taxonomies (tag types) to use

| Default | Possible Values | Example |
| --- | --- | --- |
| all selected in the settings | comma-separated list of taxonomy names/slugs | taxonomy=product_tag |

---

## Change the Icons on Tags Under Posts

**Source:** [https://taxopress.com/docs/how-do-i-change-the-styling-of-the-post-tags-under-the-posts/](https://taxopress.com/docs/how-do-i-change-the-styling-of-the-post-tags-under-the-posts/)

This guide will show you how to change the style of [the Tag Groups that appear underneath posts](https://taxopress.com/docs/post-tags/).

Use the following CSS in your Customizer -> CSS or your style.css to add a tag icon in front of each tag. The Dashicon used here is “f323”. You can find a new icon and the related number by [visiting the Dashicons guide on WordPress.org](https://developer.wordpress.org/resource/dashicons/).

For example, a “site” icon is “f319” and a “comments” icon is “f101”.

```
.tag-groups-premium-post-tags-table td a {
  text-decoration: none;
}

.tag-groups-premium-post-tags-table td a:before {
  content: "\f323";
  font-family: Dashicons;
  margin: 0 .2em 0 .4em;
  padding-right: .1em;
  padding-left: .5em;
}
```

The output using “f323” as a Dashicon will be like this screenshot below:

---

## Integration with WooCommerce Attributes

**Source:** [https://taxopress.com/docs/integration-with-woocommerce/](https://taxopress.com/docs/integration-with-woocommerce/)

Tag Groups Pro is able to show tags and groups among product attributes. This feature heavily depends on the template and was tested with the default and other themes. It therefore may not work with all themes.

Follow these steps:

1. Go to the **Taxonomies** settings and enable “Product tags”.
2. Go to the **Back End** settings, **Meta Box** tab, and enable the Meta Box for “Product tags”.
3. Go to the **Front End** settings, **WooCommerce** tab and activate “Display tag groups with WooCommerce attributes”.
4. Go to a product and use the Meta Box to add tags in groups.

---

## How to Show Tag Groups on Posts

**Source:** [https://taxopress.com/docs/post-tags/](https://taxopress.com/docs/post-tags/)

By default, WordPress posts usually show all the tags that belong to that post.

This default setting does not connect to the Tag Groups plugin. So if you want to show all the tags that belong to a post, and also show their groups, you will need to change the default display.

If you want to display your tags sorted into groups, you can use the “Post Tags” feature. When activated, we insert a table with groups and tags at the end of the post content. The image below shows an example of the “Post Tags” feature display at the bottom of a post.

Because themes are hard-coded, we cannot insert the tags at any position. It is only possible to add them after the post content.

---

## How to customize the Post Tags feature

You can customize the display of the Post Tags by going to Tag Groups > Frontend > Post Tags.

---

## How to Add Tag Groups Elsewhere in Your Posts

If you need to show the tags groups of a post in another position, you can try doing this:

- Use one of the Tag Groups shortcodes and add it the the required place in your post.
- Add the parameter 
```
tags_post_id=0
```

.

---

## Post List – Overview

**Source:** [https://taxopress.com/docs/the-post-list/](https://taxopress.com/docs/the-post-list/)

The Post List feature in the Tag Groups plugin allows you to show a list of posts with a specific term or in a particular tag group. The list is static and cannot be changed by visitors. There are optional links to the next or previous page.

- [Click here to see demos of the Post List feature](https://demo.taxopress.com/post-list/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/post-list-gutenberg-block/).
- [Click here for the list of shortcode parameters](https://taxopress.com/docs/post-list-parameters/).

Here’s a screenshot of the Post List feature from [our demo site](https://demo.taxopress.com). This example shows posts with a featured image and the publish date.

---

## Post List – Shortcode Parameters

**Source:** [https://taxopress.com/docs/post-list-parameters/](https://taxopress.com/docs/post-list-parameters/)

This is a guide to using shortcodes to display the “[Post List](https://taxopress.com/docs/the-post-list/)” feature in the Tag Groups Pro plugin.

---

## Shortcode

```
What's New at TaxoPress to Start 2026?
  Posted on January 18, 2026 by steveburgerv.  Releases
 
 
  TaxoPress 3.44 is available now. The Free version is available from the WordPress plugin directory and TaxoPress members can download the Pro version from this website. The big new feature to start 2026 involves the "Auto Terms" feature. Auto Terms is popular because it can automatically add relevant terms to your posts. For example, if...
 

        
                    
            
 
  Use TaxoPress to Customize the Order of Tags and Categories
  Posted on October 3, 2025 by steveburgerv.  Releases
 
 
  TaxoPress 3.37 is available now. The Free version is available from the WordPress plugin directory and TaxoPress members can download the Pro version from this website. There is one major new feature, but several helpful improvements in this release. Let me introduce you to the big new feature which allows to choose any order you...
 

        
                    
            
 
  How to Copy WordPress Tags and Categories
  Posted on September 3, 2025 by steveburgerv.  Tutorials
 
 
  WordPress does not have the ability to copy Tags and Categories. However, that is possible with the TaxoPress plugin. In this guide, I'll show you a basic and and advanced way to copy terms. Basic copying of Tags and Categories After installing the TaxoPress plugin, go to the "Terms" screen. You can click the "Copy"...
 

        
                    
            
 
  What's new at TaxoPress in June?
  Posted on June 3, 2025 by steveburgerv.  Releases
 
 
  TaxoPress 3.36 is available now. The Free version is available from the WordPress plugin directory and TaxoPress members can download the Pro version from this website. There are several helpful improvements in this release. All of these features were suggested by TaxoPress users like you. The main feature in this release is live previews of...
 

        
                    
            
 
  TaxoPress Cleans Up Your Rarely-Used Tags and Categories
  Posted on April 9, 2025 by steveburgerv.  Releases
 
 
  TaxoPress 3.33 is available now. The Free version is available from the WordPress plugin directory and TaxoPress members can download the Pro version from this website. The major new feature in this release is called “Hidden Terms". This will clean up terms that are infrequently used. This feature removes low-value terms that are not attached...
```

---

## Example

```
Nothing found.
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Tags and Terms

#### taxonomy

Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of taxonomy names | Taxonomies selected in the settings under “Basics”. | taxonomy=post_tag,product_tag |

#### operator

How the tags should be logically connected. Possible values are “OR” (At least one group matches.) or “AND” (All groups match.).

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | OR | operator="AND" |

### Tag Groups

#### include

Tag groups that will be selectable by visitors. In the short code you use the IDs, which you find in the left column in the list of groups. Empty or not used means that all tag groups will be used.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (=all) | include=1,5,9 |

### Posts

#### author

Filter by author.

| accepted values | default | example shortcode |
| --- | --- | --- |
| author ID or comma-separated list of IDs | off | author=1,3 |

#### cat

Filter by category.

| accepted values | default | example shortcode |
| --- | --- | --- |
| category ID | off | cat=5 |

#### caching_time

Time in minutes that results remain in the cache.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 10 | caching_time=10 |

#### posts_per_page

How many posts appear under the filter. Use -1 to show all.

Please note that high numbers of posts may impact the performance.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 5 | posts_per_page=10 |

#### pager

- 0: off
- 1: Simple pager; visitors can load the next or previous page.
- 2: Pagination; visitors can click on a page number

It is also possible to use the cursor keys left and right to flip through pages.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 0 | pager=2 |

#### pager_position

- top
- bottom
- both

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | bottom | pager_position=both |

#### orderby

Which field to use for sorting.

| option | description |
| --- | --- |
| author |  |
| date |  |
| modified |  |
| title |  |
| comment_count |  |

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | date | orderby=title |

#### order

Whether to sort the posts in ascending or descending order. Ascending order also means from oldest to newest.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | DESC | order=asc |

#### display_amount

Whether to display a line that shows the total amount of posts. This message appears only if the number is greater than zero.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | display_amount=1 |

#### search

Filter by a search term

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | search=hello |

#### tag

Filter by a tag slug.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | tag=my-tag |

#### tag__and

Filter by a list of tag IDs. Combine them with “and”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of tag IDs | empty | tag__and=12,45 |

#### tag__in

Filter by a list of tag IDs. Combine them with “or”. (“in” a set of tags)

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of tag IDs | empty | tag__in=12,45 |

#### tag__not_in

Filter by a list of tag IDs. Combine them with “nor”. (“not in” a set of tags)

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of tag IDs | empty | tag__not_in=12,45 |

#### tag_id

Filter by a tag ID.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | empty | tag_id=10 |

#### tag_slug__and

Filter by a list of tag slugs. Combine them with “and”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of tag slugs | empty | tag_slug__and=my-tag,your-tag |

#### tag_slug__in

Filter by a list of tag slugs. Combine them with “or”. (“in” a set of tags)

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of tag slugs | empty | tag_slug__in=my-tag,your-tag |

#### template

HTML code that contains some placeholders. If you use only one template on your entire website, it is recommended to leave this parameter empty and edit the default template in the Front End settings.

In order to prevent that WordPress parses the HTML and adds malformed <p></p> tags, it is recommended to encode it before using it.

Possible placeholders are: {post_id}, {post_title}, {post_guid} (link to the post, {post_excerpt} (automatically generated), {post_date}, {post_author}, {image_src} or {image_src|image size} (followed by the dimensions – will create also width and height attributes), {image_alt}, {post_category}, {post_tags}, {custom_field:<name>}

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | see below | template='JTNDZGl2JTIwY2x' |

Default template:

```
<header class="tg-entry-header">
<img src="{image_src|100x100}" alt="{image_alt}" class="tg-entry-image" />
<h3 class="tg-entry-title"><a href="{post_guid}" rel="bookmark">{post_title}</a></h3>
Posted on {post_date} by {post_author}.
<p>{post_category}</p></header>
<div class="tg-entry-content"><p>{post_excerpt}</p></div>
```

**Image sizes**

The following formats are possible:

- keywords like “thumbnail”, “medium”, “large” or any custom image size((Custom sizes may be registered by your theme or another plugin.)). **This method provides the best performance when loading an image.** You can change the sizes in the general Media settings of your WordPress site and then use a plugin such as Regenerate Thumbnails to generate the new sizes.
- width and height, separated by “x”. On both sides you can use numbers (sizes in pixel), percentages or the keyword “auto”. The image loaded by the browser may actually be larger and scaled down.

Examples for the image tag:

```
<img src=”{image_src|medium}” alt=”{image_alt}” class=”tg-entry-image” />
```

```
<img src=”{image_src|100×150}” alt=”{image_alt}” class=”tg-entry-image” />
```

```
<img src=”{image_src|100%×auto}” alt=”{image_alt}” class=”tg-entry-image” />
```

### Labels and Messages

#### message_nothing_found

Message to show if no posts were found.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “Nothing found.” | message_nothing_found="" |

#### message_load_more

Label of the link to load more posts, if the pager is active.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “Load more” | message_load_more="" |

#### message_go_back

Label of the link to go back, if the pager is active.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “Go back” | message_go_back="" |

#### message_amount_singular

Message if one post was found, if display_amount is active.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “1 post found.” | message_amount_singular="One recipe found." |

#### message_amount_plural

Message if many posts were found, if display_amount is active. May contain the placeholder {count}

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “{count} posts found.” | message_amount_plural="We found {count} recipes." |

---

## Advanced Styling

You can set here classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_class

Define a class for the <div>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | div_class=“change-pointer” |

#### article_class

Define a class for the enclosing <article>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | tg-post | article_class=“make-it-dark” |

---

## Does Tag Groups Work with the Polylang Plugin?

**Source:** [https://taxopress.com/docs/does-tag-groups-premium-work-with-the-polylang-plugin/](https://taxopress.com/docs/does-tag-groups-premium-work-with-the-polylang-plugin/)

Tag Groups was developed to work with the [WPML plugin](https://wpml.org/). Since the Polylang plugin tries to emulate some of the WPML functions, users have reported that Tag Groups also works well with Polylang.

Although we try to ensure also the compatibility with Polylang, we are currently only able to ensure the compatibility with WPML.

You can test most of the features that are relevant for translating your website with the free Tag Groups plugin.

---

## I Don’t See Posts In the Dynamic Post Filter

**Source:** [https://taxopress.com/docs/i-dont-see-any-or-all-posts/](https://taxopress.com/docs/i-dont-see-any-or-all-posts/)

If you click on a tag in the Dynamic Post Filter from the Tag Groups plugin and don’t see any or all posts, there can be various reasons:

1. Please make sure that these posts are published.
2. Check that the posts have the correct post type. In the Tag Groups settings you will find the submenu “Taxonomies” where you can select the taxonomy for that post type. By default we use Tags. If you have selected anything else, for example Product tags (product_tag) , you will need to use that same taxonomy again in the shortcode or Gutenberg block. This is done with the parameter taxonomy followed by the identifier of that Taxonomy, for example: taxonomy=”product_tag”
3. Sometimes it happens that the plugin was not able to process all your posts in order to update the information about tags and tag groups. You can solve that problem by going to “Tag Groups”, then “Tools”, and the “First Aid” tab. Click all the buttons.

---

## Translating Tag Group Names With WPML

**Source:** [https://taxopress.com/docs/wpml/](https://taxopress.com/docs/wpml/)

Translating tag group names in the Tag Groups plugin is possible with the [WordPress Multilingual (WPML) plugin](https://wpml.org).

Before you start, you need to set up WPML with all required languages.

Then you open the Tag Groups admin page where you create and edit tag groups. This page will not look much different from what you are used to. But now you can edit the names of the groups for each language independently.

All you need to do is to switch to another language in the admin bar and edit the names of the tag groups. If you now change the language, you will notice that the group names will change accordingly.

## Where The Translations Show Up

- On all **admin pages**, you see the group names that correspond to the language that you see in the admin bar.
- On the **front end**, the group names match the language of the page.

## Some More Details

- If you create a new group while you use a language that is not your default language, the default language will first receive its group name from that translated language so that it won’t remain empty.
- The order of the groups is the same across all languages.
- The label “not assigned” remains untranslated on your back end. On the front end you can choose the translation in the shortcode or Gutenberg block.
- Each language version of a tag can belong to a different group.((Because WPML internally treats them as different tags.))
- If you create a translation of a tag, the translated tag will receive the groups of the original tag, unless you set different groups during the translation. You can change this behavior in the settings.

This feature is available both with the Free and the Pro version of Tag Groups.

---

## Tag Groups Menu – Overview

**Source:** [https://taxopress.com/docs/tag-groups-menu/](https://taxopress.com/docs/tag-groups-menu/)

The Tag Groups Pro plugin gives you the possibility to filter posts by tag group. The filter is applied by adding a parameter to the URL where you list posts. [You can read more about it here](https://taxopress.com/docs/using-the-post-filter-on-the-front-end/).

Since you don’t want to let your visitors have to modify the URL manually, you can use the URL with that parameter in a menu, a button and so on.

Instead of creating that menu yourself, you can use a shortcode that will display a drop-down menu. Visitors select a group and are then redirected to the list of posts that is filtered by the selected tag group.

Please note that this page where you list your posts must be set in your WordPress Settings under “Reading”. By default it is your front page. If you, however, use a static page as front page, you need to choose another page for your posts.

The default format for this shortcode is:

```
not assigned
```

Parameters allow you to

- show or hide a submit button. If it is hidden, the filtering is triggered by selecting an option from the menu;
- set a taxonomy (such as product_tag);
- search among WooCommerce products; and
- give a custom URL where posts will be listed.

---

## Tag Groups Menu – Shortcode Parameters

**Source:** [https://taxopress.com/docs/tag-groups-menu-parameters/](https://taxopress.com/docs/tag-groups-menu-parameters/)

This guide shows you how to use and customize the shortcode for the Tag Groups Menu feature in the Tag Groups plugin.

---

## Shortcode

```
not assigned
```

---

## Example

```
not assigned
jQuery(document).ready(function(){
  jQuery("#tag-groups-menu-6a815c824054f select").on( "change", function(){
    var a = jQuery("#tag-groups-menu-6a815c824054f_form").submit();
  });
});
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Tags or Terms

#### include

Determines which groups to include.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of group IDs | empty (all enabled) | include=1,5 |

#### taxonomy

Determines the post page where the posts will be filtered. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example shortcode |
| --- | --- | --- |
| one taxonomy name | post_tag | taxonomy=product_tag |

### Menu

#### type

The type of menu.

- “select”: Drop-down menu with a submit button. The posts will only be displayed when the user clicks on the button.
- “autoselect”: Drop-down menu without a button. The posts will be displayed as soon as the user selects an option.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | select | type=select |

### 

### Target Page

#### custom_url

Optional custom URL where you want to display the posts.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | none | custom_url='https://www.example.com/posts/' |

#### shop

If you supply this parameter, then the search will happen on the default product page. This page is determined according to the e-commerce plugin. Currently there is only “wc”, which stands for “WooCommerce”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | shop=wc |

### Labels and Messages

#### submit_label

Text on the submit button, if you use one.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “search” | submit_label="submit" |

#### not_assigned_name

Label of the button for the “not assigned” group.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “not assigned” | not_assigned_name="all the rest" |

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_id

Define an ID for the enclosing <div>.

Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (random value) | div_id=“sidebar_01” |

#### div_class

Define a class for the enclosing <div>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | none | div_class=“make-it-dark” |

---

## Simple Tag Cloud – Overview

**Source:** [https://taxopress.com/docs/combined-tag-cloud/](https://taxopress.com/docs/combined-tag-cloud/)

The Simple Tag Cloud feature allows you to display taxonomy terms in a traditional “Tag Cloud” layout, but with many creative and stylish options. You can use either shortcodes or Gutenberg blocks for this feature.

- [Click here to see demos of the Tag Cloud feature](https://demo.taxopress.com/cloud/).
- [Click here for the Gutenberg block settings](https://taxopress.com/docs/combined-tag-cloud-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/combined-tag-cloud-parameters/).

Here’s a screenshot of the Simple Tag Cloud feature from [our demo site](https://demo.taxopress.com). This example uses a green color scheme. We also added the # sign before the tags and the number of associated posts after the tags.

---

## Table Tag Cloud – Overview

**Source:** [https://taxopress.com/docs/table-tag-cloud/](https://taxopress.com/docs/table-tag-cloud/)

The Table Tag Cloud feature is available in the Tag Groups Pro plugin. This display organizes tags in a table, with groups as headers. You can use either shortcodes or Gutenberg blocks for this feature.

- [Click here to see demos of the Tag Cloud feature](https://demo.taxopress.com/table-tag-cloud/).
- [Click here for the Gutenberg block settings](https://taxopress.com/docs/table-tag-cloud-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/table-tag-cloud-parameters/).

Here’s a screenshot of the Table Tag Cloud feature from [our demo site](https://demo.taxopress.com). This example has a color scheme and we’ve added the number of results after each term.

---

## Accordion Tag Cloud – Overview

**Source:** [https://taxopress.com/docs/accordion-tag-cloud/](https://taxopress.com/docs/accordion-tag-cloud/)

The Accordion Tag Cloud feature in the Tag Groups plugin allows you display a tag cloud with your groups as accordion panels. You can use either shortcodes or Gutenberg blocks for this feature.

- [Click here to see demos of the Accordion Tag Cloud](https://demo.taxopress.com/accordion-tab-cloud/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/accordion-tag-cloud-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/accordion-tag-cloud-parameters/).

Here’s a screenshot of the Accordion Tag Cloud feature from [our demo site](https://demo.taxopress.com). We’ve added the post count and a color format for each term.

---

## Tabbed Tag Cloud – Overview

**Source:** [https://taxopress.com/docs/tabbed-tag-cloud/](https://taxopress.com/docs/tabbed-tag-cloud/)

The Tabbed Tag Cloud allows you to display a tag cloud with your groups as tabs. You can use the Gutenberg block or a shortcode.

- [Click here to see demos of the Tabbed Tag Cloud](https://demo.taxopress.com/tabbed-tag-cloud/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/tabbed-tag-cloud-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/tabbed-tag-cloud-shortcode-parameters/).

Here’s a screenshot of the Tabbed Tag Cloud feature from [our demo site](https://demo.taxopress.com). This example uses the “append” and “prepend” options to add style to the terms. We’re using a Unicode icon of a photo, plus the “slategray” theme.

---

## Dynamic Post Filter – Overview

**Source:** [https://taxopress.com/docs/the-dynamic-post-filter/](https://taxopress.com/docs/the-dynamic-post-filter/)

This is a feature of the Tag Groups Pro plan. The Dynamic Post Filter feature allows visitors to select groups and tags and immediately see posts that match their selection.

- [Click here for demos of the Dynamic Post Filter](https://demo.taxopress.com/post-filter-dropdown-menu/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/dynamic-post-filter-gutenberg-block/).
- [Click here for the list of shortcode parameters](https://taxopress.com/docs/dynamic-post-filter-parameters/).

This shortcode or block can only be used once on a page (including widgets), and it cannot be used together with the shortcode or block of the Toggle Post Filter.

---

## Displaying Posts Filtered by Groups and Tags

Imagine you write posts about your travels and you tag these posts with the names of the countries. Now, you may want to assemble all those country tags under a tag group called “Countries”. Using the Dynamic Group Filter, your visitors can now open the group “Countries” and then select tags of your countries. The list of posts refreshes automatically and displays all posts that match one of the selected country tags.

Example of the 2-layered Dynamic Post Filter: First select the group, then the tags.

---

## Performance

Please note that it is unavoidable that complex queries take some time to process in the database. That is particularly the case if many tags are selected in multiple groups. It is therefore highly recommended to use the parameter caching_time (in minutes) to speed up queries that have appeared recently before.

---

## Alternatives

If you don’t want your visitors to enter the tags into the tag field, but select them with a toggle (on-off) switch, you could take a look at the Toggle Post Filter.

If you don’t need the interactivity of the Dynamic Post Filter, you may want to check out the Post List.

You can also use one of the tag clouds. They are highly customizable so that you can, for example, display all tags in the same size or prepend to each the same character. Using the tag clouds, however, visitors don’t see immediately the list of matching posts. Instead, a click on the tag takes them to a “tag page”, where all posts are listed that have this tag.

---

## Common Issues and Solutions

If no tags or no posts appear, please make sure that

- you have selected the correct taxonomy. If you use something else than the default post_tag, use the *taxonomy* parameter.
- you have assigned your tags to groups and used these tags in public posts.

---

## Dynamic Post Filter – Shortcode Parameters

**Source:** [https://taxopress.com/docs/dynamic-post-filter-parameters/](https://taxopress.com/docs/dynamic-post-filter-parameters/)

This guide shows you how to use and customize the shortcode for the Dynamic Post Filter feature in the Tag Groups Pro plugin.

**Note:**This shortcode or block can only be used **once** on a page (including widgets), and it cannot be used together with the shortcode or block of the Dynamic Post Filter With Toggles.

---

## Shortcode

```
Please select a group.    

    
    
    
        

  (function() {
    var termsOfGroup = {};
                  termsOfGroup[0] = [];
                      
    const options = {
      ajaxLink: 'https://taxopress.com/wp-admin/admin-ajax.php',
      cacheKey: '0db8a7f852ec8c5f060f089355f58352',
      cachingTime: 10,
      debug: false,
      defaultImageSrc: '',
      defaultOptionLabel: 'Filter by group',
      displayAmount: 0,
      groupIds: [0],
      groupsHeader: 'Selected groups:',
      groupsOnly: false,
      hideCloseButton: false,
      labels: ["not assigned"],
      messageAmountPl: '{count} posts found.',
      messageAmountSg: '1 post found.',
      messageGoBack: 'Go back',
      messageLoadMore: 'Load more',
      messageNothingFound: 'Nothing found.',
      messageOnlyExisting: 'Use only existing tags.',
      messageSameGroup: 'Not allowed to use tags from other groups.',
      open: false,
      openArray: [],
      operator: 'IN',
      order: 'DESC',
      orderBy: '',
      overlayNotifications: false,
      pager: 0,
      pagerPosition: 'bottom',
      persistentFilter: 0,
      placeholder: 'Please enter your tags here.',
      postsPerPage: 5,
      postsPlaceholder: 'Please select a group.',
      selectSearch: false,
      staticTaxonomy: '',
      staticTerms: '',
      sumoSelect: true,
      taxonomy: 'post_tag',
      template: ``,
      termsOfGroup: termsOfGroup,
      transition: '',
      translationClose: 'Close',
      translationCloseAll: 'Close all',
      translationOpenAll: 'Open all',
      translationTagAlreadySelected: 'Tag already selected.',
    };
    
    if (typeof TagGroupsDynamicPostFilter !== 'undefined' && typeof jQuery !== 'undefined' && ( ! options.groupsOnly || (typeof jQuery.fn.tagEditor !== 'undefined' && typeof jQuery.fn.caret !== 'undefined')) && ( !options.sumoSelect || typeof jQuery.fn.sumoSelect !== 'undefined' ) && ( options.displayAmount < 2 || typeof jQuery.fn.jnoty !== 'undefined') ) {
      TagGroupsDynamicPostFilter.load(options);
    } else {
      jQuery(document).ready(function(){
        setTimeout(function(){TagGroupsDynamicPostFilter.load(options)}, 500);
      });
    }
  })();
```

You can optionally display posts separated from the menu. Simply use in this shortcode separate=1 and add a second shortcode:

```
[tag_groups_dpf_body]
```

---

## Example

```
Please select a group.    

    
    
    
        

  (function() {
    var termsOfGroup = {};
                      
    const options = {
      ajaxLink: 'https://taxopress.com/wp-admin/admin-ajax.php',
      cacheKey: 'f41692fa28e56c3c745f71eaf2a8931d',
      cachingTime: 60,
      debug: false,
      defaultImageSrc: '',
      defaultOptionLabel: 'Filter by group',
      displayAmount: 1,
      groupIds: [],
      groupsHeader: 'Selected groups:',
      groupsOnly: false,
      hideCloseButton: false,
      labels: ["not assigned"],
      messageAmountPl: '{count} posts found.',
      messageAmountSg: '1 post found.',
      messageGoBack: 'Go back',
      messageLoadMore: 'Load more',
      messageNothingFound: 'Nothing found.',
      messageOnlyExisting: 'Use only existing tags.',
      messageSameGroup: 'Not allowed to use tags from other groups.',
      open: true,
      openArray: [],
      operator: 'IN',
      order: 'DESC',
      orderBy: '',
      overlayNotifications: false,
      pager: 1,
      pagerPosition: 'bottom',
      persistentFilter: 60,
      placeholder: 'Please enter your tags here.',
      postsPerPage: 5,
      postsPlaceholder: 'Please select a group.',
      selectSearch: false,
      staticTaxonomy: '',
      staticTerms: '',
      sumoSelect: true,
      taxonomy: 'post_tag',
      template: ``,
      termsOfGroup: termsOfGroup,
      transition: 'fade',
      translationClose: 'Close',
      translationCloseAll: 'Close all',
      translationOpenAll: 'Open all',
      translationTagAlreadySelected: 'Tag already selected.',
    };
    
    if (typeof TagGroupsDynamicPostFilter !== 'undefined' && typeof jQuery !== 'undefined' && ( ! options.groupsOnly || (typeof jQuery.fn.tagEditor !== 'undefined' && typeof jQuery.fn.caret !== 'undefined')) && ( !options.sumoSelect || typeof jQuery.fn.sumoSelect !== 'undefined' ) && ( options.displayAmount < 2 || typeof jQuery.fn.jnoty !== 'undefined') ) {
      TagGroupsDynamicPostFilter.load(options);
    } else {
      jQuery(document).ready(function(){
        setTimeout(function(){TagGroupsDynamicPostFilter.load(options)}, 500);
      });
    }
  })();
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Tags and Terms

#### taxonomy

Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example |
| --- | --- | --- |
| comma-separated list of taxonomy names | Taxonomies selected in the settings under “Basics”. | taxonomy=post_tag,product_tag |

#### operator

The operator determines how selected tags and groups should be logically connected when searching for matching posts. Possible values are “IN”/”OR” (at least one tag is among the post tags), “AND” (all tags are among the post tags of the same group), “IN AND” (at least one tag from each group is among the post tags), “EXACT” (the selection of tags must be identical to the post tags of that same group, not more and not less; this option is not available for the option groups_only=1), or a per-group definition:

```
operator="all:OPERATOR|group ID:OPERATOR|group ID:OPERATOR| ..."
```

Remarks about the per-group notation:

- You need at least one entry with the keyword “all”. The corresponding operator determines how the groups are connected.
- *OPERATOR* can be AND, OR or EXACT (upper or lower case). IN is an alias of OR.
- The order of groups doesn’t matter.
- If you use this format of the operator, all groups that you don’t specify will fall back to the operator OR.

**Note for the operator “exact”:** If you upgrade from a version before 1.39.0, go to the settings, Troubleshooting and run the maintenance.

| accepted values | default | example |
| --- | --- | --- |
| string | IN/OR | operator="IN AND"operator="all:and|1:or|5:exact|3:and" |

### Groups

#### include

Tag groups that will be selectable by visitors. In the short code you use the IDs, which you find in the left column in the list of groups. Empty or not used means that all tag groups will be used.

| accepted values | default | example |
| --- | --- | --- |
| comma-separated list of integers | empty (=all) | include=1,5,9 |

#### open

Tag groups that are initially open. If you use include, then all selected groups must also be included. Empty or not used means that all tag groups will be open.

| accepted values | default | example |
| --- | --- | --- |
| comma-separated list of integers | empty (=all) | open=1,9 |

#### hide_close_buttons

Disables the possibility to remove the input fields of groups. You can use that option together with the include and open parameters if you want to show a fixed set of groups that cannot be altered by visitors.

| accepted values | default | example |
| --- | --- | --- |
| integer | 0 | hide_close_buttons=1 |

#### sumoselect

Changes the default select menu to a more stylish one.

| accepted values | default | example |
| --- | --- | --- |
| integer | 1 | sumoselect=0 |

#### groups_only

Skip the tag selection and display all products that match the selected groups.

| accepted values | default | example |
| --- | --- | --- |
| integer | 0 | groups_only=1 |

### Posts

#### caching_time

Time in minutes that results remain in the cache.

| accepted values | default | example |
| --- | --- | --- |
| integer | 10 | caching_time=10 |

#### posts_per_page

How many posts appear under the filter. Use -1 to show all.

Please note that high numbers of posts may impact the performance.

Tip: If you use the parameter “display_amount” you can reduce the additional database request by using posts_per_page=-1 instead of a high number of posts.

| accepted values | default | example |
| --- | --- | --- |
| integer | 5 | posts_per_page=10 |

#### pager

If the pager is enabled then visitors can load the next or previous page.

| accepted values | default | example |
| --- | --- | --- |
| integer | 0 | pager=1 |

#### orderby

Which field to use for sorting.

| option | notes |
| --- | --- |
| author |  |
| date |  |
| modified |  |
| rand | random order; recommended not to use with a pager/pagination |
| title |  |
| comment_count |  |

| accepted values | default | example |
| --- | --- | --- |
| string | date | orderby=title |

#### order

Whether to sort the posts in ascending or descending order. Ascending order also means from oldest to newest.

| accepted values | default | example |
| --- | --- | --- |
| string | DESC | order=asc |

#### display_amount

Whether to display a line that shows the total amount of posts.

| accepted values | default | example |
| --- | --- | --- |
| 0 or 1 | 0 | display_amount=1 |

#### template

HTML code that contains some placeholders. If you use only one template on your entire website, it is recommended to leave this parameter empty and edit the default template in the Front End settings.

In order to prevent that WordPress parses the HTML and adds malformed <p></p> tags, it is recommended to encode it before using it.

Possible placeholders are: {post_id}, {post_title}, {permalink}, {post_excerpt} (automatically generated), {post_excerpt_html} (preserves most common html tags), {post_date}, {post_author}, {image_src} or {image_src|image size}, {image_alt}, {post_category}, {post_tags}, {custom_field:<name>}((A value from the post meta <name>.

image_src also accepts percentages or “auto” as values. If you want to use pixels, you enter the number without any “px”

| accepted values | default | example |
| --- | --- | --- |
| string | see below | template='JTNDZGl2JTIwY2xh' |

Default template:

```
<header class="tg-entry-header">
<a href="{permalink}" rel="bookmark"><img src="{image_src|100x100}" alt="{image_alt}" class="tg-entry-image" /></a>
<h3 class="tg-entry-title"><a href="{permalink}" rel="bookmark">{post_title}</a></h3>
Posted on {post_date} by {post_author}.
<p>{post_category}</p></header>
<div class="tg-entry-content"><p>{post_excerpt}</p></div>
```

**Image sizes**

The following formats are possible:

- keywords like “thumbnail”, “medium”, “large” or any custom image size((Custom sizes may be registered by your theme or another plugin.)). **This method provides the best performance when loading an image.** You can change the sizes in the general Media settings of your WordPress site and then use a plugin such as Regenerate Thumbnails to generate the new sizes.
- width and height, separated by “x”. On both sides you can use numbers (sizes in pixel), percentages or the keyword “auto”. The image loaded by the browser may actually be larger and scaled down.

Examples for the image tag:

```
<img src=”{image_src|medium}” alt=”{image_alt}” class=”tg-entry-image” />
```

```
<img src=”{image_src|100×150}” alt=”{image_alt}” class=”tg-entry-image” />
```

```
<img src=”{image_src|100%×auto}” alt=”{image_alt}” class=”tg-entry-image” />
```

#### transition

Transition between loading the list of posts.

| accepted values | default | example |
| --- | --- | --- |
| string | none | transition=fade |

#### static_taxonomy

Optionally filter also by terms of an additional taxonomy (not necessarily one of the taxonomies used for tag groups). Used together with [static_terms](#static_terms).

| accepted values | default | example |
| --- | --- | --- |
| string | none | static_taxonomy=category |

#### static_terms

Optionally filter also by terms of an additional taxonomy (not necessarily one of the taxonomies used for tag groups). Used together with [static_taxonomy](#static_taxonomy).

| accepted values | default | example |
| --- | --- | --- |
| comma-separated list of integers | none | static_terms=42,255 |

---

## Other

#### persistent_filter

The Dynamic Post Filter can optionally remember the selection of groups and tags so that your visitors who clicked on an article and then return to this page will see the same list of articles again. After loading, the page will scroll to the group selection menu. (Otherwise the browser might go to a random post, depending on the loading speed.)

The data is saved in a browser cookie. If you use several Dynamic Post Filters on your site, you should give each a different div_id so that each will have its own cookie.

The value is the time in minutes. Zero means off.

| accepted values | default | example |
| --- | --- | --- |
| integer | 0 (off) | persistent_filter=30 |

---

## Labels and Messages

#### placeholder

Placeholder message in the tag input field. It disappears as soon as you enter tags.

| accepted values | default | example |
| --- | --- | --- |
| string | “Please enter your tags here.” | placeholder="" |

#### posts_placeholder

Placeholder message for the list of posts.

| accepted values | default | example |
| --- | --- | --- |
| string | “Please select a group.” | posts_placeholder="" |

#### default_option_label

What the pull-down menu should show if no group is selected.

| accepted values | default | example |
| --- | --- | --- |
| string | “Filter by group” | default_option_label="" |

#### groups_header

Header above the list of selected groups.

| accepted values | default | example |
| --- | --- | --- |
| string | “Selected groups:” | groups_header="" |

#### message_only_existing

Error message if user tries to enter a tag that doesn’t exist.

| accepted values | default | example |
| --- | --- | --- |
| string | 0 | message_only_existing="" |

#### message_same_group

Error message if user tries to enter a tag from another group.

| accepted values | default | example |
| --- | --- | --- |
| string | 0 | message_same_group="" |

#### message_nothing_found

Message to show if no posts were found.

| accepted values | default | example |
| --- | --- | --- |
| string | “Nothing found.” | message_nothing_found="" |

#### message_load_more

Label of the link to load more posts, if the pager is active.

| accepted values | default | example |
| --- | --- | --- |
| string | “Load more” | message_load_more="" |

#### message_go_back

Label of the link to go back, if the pager is active.

| accepted values | default | example |
| --- | --- | --- |
| string | “Go back” | message_go_back="" |

#### message_amount_singular

Message if one post was found, if display_amount is active.

| accepted values | default | example |
| --- | --- | --- |
| string | “1 post found.” | message_amount_singular="One recipe found." |

#### message_amount_plural

Message if many posts were found, if display_amount is active. May contain the placeholder {count}

| accepted values | default | example |
| --- | --- | --- |
| string | “{count} posts found.” | message_amount_plural="We found {count} recipes." |

---

## Advanced Styling

You can set here classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_class

Define a class for the <div>.

| accepted values | default | example |
| --- | --- | --- |
| string | empty | div_class="change-pointer" |

#### div_id

Define an ID for the enclosing <div>.

| accepted values | default | example |
| --- | --- | --- |
| string |  | div_id="my_id" |

---

## Accordion Tag Cloud – Shortcode Parameters

**Source:** [https://taxopress.com/docs/accordion-tag-cloud-parameters/](https://taxopress.com/docs/accordion-tag-cloud-parameters/)

This guide shows you how to use and customize the shortcode for the Accordion Tag Cloud feature in the Tag Groups plugin.

---

## Shortcode

```
(function tagGroupsInitAccordion(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.accordion !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.accordion('tag-groups-cloud-accordion-6a815c85e05b1', {"heightStyle":"content","active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitAccordion(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-accordion-6a815c85e05b1');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Accordion is missing!');
  })(50);
```

---

## Example

```
(function tagGroupsInitAccordion(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.accordion !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.accordion('tag-groups-cloud-accordion-6a815c85e0d68', {"heightStyle":"content","active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitAccordion(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-accordion-6a815c85e0d68');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Accordion is missing!');
  })(50);
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.

- **integer:** A number without decimal places.

- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Tags or Terms

#### taxonomy

Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of taxonomy names | Taxonomies selected in the settings under “Basics”. | taxonomy=post_tag,product_tag |

#### smallest

Font-size in pt of the smallest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 12 | smallest=12 |

#### largest

Font-size in pt of the largest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 22 | largest=20 |

#### include_terms

Here you can specify tags/terms by their IDs that alone should be included.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (= no restriction) | include_terms=4,5,212 |

** Available only in the shortcode!

#### exclude_terms

Here you can specify a list of tag/term IDs that should be excluded. **exclude_terms** is ignored if you use include_terms.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | empty (= no restriction) | exclude_terms=3,2,11 |

** Available only in the shortcode!

#### orderby

Which field to use for sorting.

Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags with amount, the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | name | orderby=natural |

#### order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | ASC | order=desc |

#### amount

Maximum amount of tags in one cloud (per group).

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 0 (unlimited) | amount=30 |

#### hide_empty

Whether to hide or show tags that are not assigned to any post.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (hide empty) | hide_empty=1 |

#### threshold

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups. Please also pay attention to the value of hide_empty.

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 | integer | threshold=2 |

#### tags_post_id

Display only tags that are assigned to the post (or page) with a specified ID. If the value is set to 0, the plugin will try to retrieve the current post ID. Turn it off with -1.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all tags displayed) | tags_post_id=0 |

#### assigned_class

A modification of the tags_post_id parameter: Rather than hiding tags that are not assigned to the post (or page), they can be styled differently. Tags will receive this class name with appended _1 or _0. (If you output the tags as an array, a new element with the key “assigned” will be true or false.)

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (off) | assigned_class="color-for-assigned-tag“ |

#### separator

A separator between the tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | separator="•" |

#### adjust_separator_size

Whether to adjust the separator’s size to the size of the following tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | adjust_separator_size=1 |

#### separator_size

The size of the separator, if not automatically adjusted to the size of the following tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 12 | separator_size=12 |

#### prepend

Prepend to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | prepend="#" |

#### append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | append="{count}" |

#### link_append

Append something to each tag’s link, for example a query.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | link_append="track=this" |

** Available only in the shortcode!

#### link_target

Set the “target” attribute for the links of the tags. Possible values are: _blank, _self, _parent or _top. In the shortcode you can also set the name of a frame.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string: “_blank”, “_self”, “_parent”, “_top”, or the name of a frame | empty (= opens in the same window, same as using _self) | link_target="_blank" |

#### show_tag_count

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (show) | show_tag_count=0 |

#### custom_title

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

If you also use custom_title_plural then the text of custom_title will be used for a post count of 1 and you can use here the singular form

| Default | Possible Values | Example |
| --- | --- | --- |
| depends on show_tag_count | string | custom_title="One post uses {name}" |

#### custom_title_zero

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of 0 (i.e. they are not used with any published post).

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_zero="No post uses {name}" |

#### custom_title_plural

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of >1. You can use here plural forms.

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_plural="{count} posts use {name}" |

#### add_premium_filter

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 (no filter) | add_premium_filter=1 |

### Groups and Accordion

#### include

Tag groups that will be considered in the tag cloud. In the short code you use the IDs, which you find in the left column in the list of groups. Empty or not used means that all tag groups will be used.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | all | include="1,5,9" |

#### exclude

groups to exclude

| Default | Possible Values | Example |
| --- | --- | --- |
| none | comma-separated list of group IDs | exclude=2,3,5 |

#### groups_post_id

Display only groups of which at least one assigned tag is also assigned to the post (or page) with the ID x. If set to 0, it will try to retrieve the current post ID. Matching groups will be added to the list specified by the parameter include

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all groups displayed). | groups_post_id=14 |

#### show_accordion

Whether to show the accordion headers. This option is useful if you want to show only one group – see include.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | show_accordion=0 |

#### hide_empty_content

Whether to hide panels without tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 (Not implemented for PHP function with second parameter set to ‘true’. Not effective with groups_post_id) | hide_empty_content=1 |

#### show_all_groups

Whether to force showing all groups. Useful with the parameters tags_post_id and assigned_class.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | show_all_groups=1 |

** Available only in the shortcode!

#### show_not_assigned

Whether to show all not-assigned tags as an own group.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | show_not_assigned=1 |

#### not_assigned_name

The name used in the tab of not-assigned tags, if you activated show_not_assigned.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “not assigned” | not_assigned_name="Other" |

#### collapsible

Whether panels are collapsible (toggle open/close).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | Settings in the back end. | collapsible=1 |

#### mouseover

Whether panels can be selected by hovering over with the mouse pointer (without clicking).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | Settings in the back end. | mouseover=1 |

#### active

Whether panels are initially expanded or collapsed. Useful in connection with the parameter collapsible.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | active=1 |

#### heightstyle

The heightstyle parameter determines how the height of the boxes with tags will be determined. Possible values are “auto” (all boxes will be set to the height of the tallest box), “fill” (expand to the available height based on the accordion’s parent height) or “content” (each panel will be as tall as its content).

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | auto | heightstyle="make-it-dark" |

#### delay

Since version 1.29.0, we reveal the tag cloud only after the accordion has finished rendering. This prevents that visitors of your site first see tags in a list (often with bullets) before the software is able to kick in. If for any reason you need to restore the previous behavior, you can turn it off here.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 1 (on) | delay=0 |

#### group_in_class

Add class names to each tag that indicates its group ID (tg_tag_group_id_1) and group label (tg_tag_group_label_first_group).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | group_in_class=1 |

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_id

Define an ID for the enclosing <div>.

1. If you display more than one tag cloud on the same page, each shortcode needs a different value. The safest solution is to leave it empty so that div_id automatically receives a random value.

1. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (random value) | div_id="sidebar_01" |

#### div_class

Define a class for the enclosing <div>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | tag-groups-cloud-accordion | div_class="make-it-dark" |

#### header_class

Define a class for the <h3> that contains the headers.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | header_class="change-pointer" |

#### inner_div_class

Define a class for the inner <div> that contains the tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | inner_div_class="change-pointer" |

---

## Simple Tag Cloud – Shortcode Parameters

**Source:** [https://taxopress.com/docs/combined-tag-cloud-parameters/](https://taxopress.com/docs/combined-tag-cloud-parameters/)

This guide shows you how to use and customize the shortcode for the Simple Tag Cloud feature in the Tag Groups plugin.

---

## Shortcode

```
Accordion Tag Cloud Add Terms Alphabetical List Alphabetical Tag Cloud Alphabetical Tag Index Artificial Intelligence Auto Links Auto Terms bbPress Topics Categories Create Terms Current Post Custom Taxonomies Custom URL Dandelion API default category Delete Terms Delete Unused Terms Display Gutenberg Hidden Terms IBM Watson Linked Terms Manage Terms Media Tags Merge Terms Open Calais OpenAI Parent Categories Post Filter Post List Posts Screen Private Taxonomies Related Posts Remove Terms Rename Terms Schedule Auto Terms Simple Tags Suggest Terms Synonyms Tag Cloud Tag Groups Tags Taxonomy Archives TaxoPress TaxoPress Pro Term Description Term Meta Term Order Term Slugs Terms Display Terms for Current Post Terms Screen Uncategorized category Understanding Content WooCommerce WooCommerce Product Categories WooCommerce Product Tags WordPress API WordPress Categories WordPress Search
```

---

## Example

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal place.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Tags or Terms

#### taxonomy

Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of taxonomy names | Taxonomies selected in the settings under “Basics”. | taxonomy=post_tag,product_tag |

#### smallest

Font-size in pt of the smallest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 12 | smallest=12 |

#### largest

Font-size in pt of the largest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 22 | largest=20 |

#### orderby

Which field to use for sorting.

Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags with amount, the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | name | orderby=natural |

#### order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | ASC | order=desc |

#### amount

Maximum amount of tags in one cloud (per group).

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 0 (unlimited) | amount=30 |

#### hide_empty

Whether to hide or show tags that are not assigned to any post.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (hide empty) | hide_empty=1 |

#### threshold

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups. Please also pay attention to the value of hide_empty.

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 | integer | threshold=2 |

#### tags_post_id

Display only tags that are assigned to the post (or page) with a specified ID. If the value is set to 0, the plugin will try to retrieve the current post ID. Turn it off with -1.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all tags displayed) | tags_post_id=0 |

#### assigned_class

A modification of the tags_post_id parameter: Rather than hiding tags that are not assigned to the post (or page), they can be styled differently. Tags will receive this class name with appended _1 or _0. (If you output the tags as an array, a new element with the key “assigned” will be true or false.)

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (off) | assigned_class=“color-for-assigned-tag” |

#### separator

A separator between the tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | separator=“•” |

#### adjust_separator_size

Whether to adjust the separator’s size to the size of the following tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | adjust_separator_size=1 |

#### separator_size

The size of the separator, if not automatically adjusted to the size of the following tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 12 | separator_size=12 |

#### prepend

Prepend to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | prepend=“#” |

#### append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | append=“{count}” |

#### link_target

Set the “target” attribute for the links of the tags. Possible values are: _blank, _self, _parent or _top. In the shortcode you can also set the name of a frame.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string: “_blank”, “_self”, “_parent”, “_top”, or the name of a frame | empty (= opens in the same window, same as using _self) | link_target=“_blank” |

#### link_append

Append something to each tag’s link, for example a query.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | link_append=“track=this” |

** Available only in the shortcode!

#### show_tag_count

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (show) | show_tag_count=0 |

#### custom_title

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

If you also use custom_title_plural then the text of custom_title will be used for a post count of 1 and you can use here the singular form

| Default | Possible Values | Example |
| --- | --- | --- |
| depends on show_tag_count | string | custom_title="One post uses {name}" |

#### custom_title_zero

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of 0 (i.e. they are not used with any published post).

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_zero="No post uses {name}" |

#### custom_title_plural

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of >1. You can use here plural forms.

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_plural="{count} posts use {name}" |

### Groups

#### include

Tag groups that will be considered in the tag cloud. In the short code you use the IDs, which you find in the left column in the list of groups. Empty or not used means that all tag groups will be used.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | all | include=“1,5,9” |

#### exclude

groups to exclude

| Default | Possible Values | Example |
| --- | --- | --- |
| none | comma-separated list of group IDs | exclude=2,3,5 |

#### groups_post_id

Display only groups of which at least one assigned tag is also assigned to the post (or page) with the ID x. If set to 0, it will try to retrieve the current post ID. Matching groups will be added to the list specified by the parameter include

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all groups displayed). | groups_post_id=14 |

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_id

Define an ID for the enclosing <div>.

1. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | div_id=“sidebar_01” |

#### div_class

Define a class for the enclosing <div>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | tag-groups-cloud-combined | div_class=“make-it-dark” |

---

## Table Tag Cloud – Shortcode Parameters

**Source:** [https://taxopress.com/docs/table-tag-cloud-parameters/](https://taxopress.com/docs/table-tag-cloud-parameters/)

This guide shows you how to use and customize the shortcode for the Table Tag Cloud feature in the Tag Groups plugin.

---

## Shortcode

```
if (typeof tagGroupsMakeTableResponsive === 'undefined') {
    function tagGroupsMakeTableResponsive(tableId, responsiveBreakpoint) {
      jQuery("#"+tableId).basictable({
        breakpoint: responsiveBreakpoint,
        showEmptyCells: true
      });
    }
  }
  if (typeof TagGroupsDynamicPostFilter !== 'undefined' && jQuery !== 'undefined' && jQuery.basictable !== 'undefined') {
          tagGroupsMakeTableResponsive('tag-groups-cloud-table-6a815c8611b87','800');
    } else {
      jQuery(document).ready(function(){
        setTimeout(function(){tagGroupsMakeTableResponsive('tag-groups-cloud-table-6a815c8611b87','800');}, 500);
      });
    }
```

---

## Example

```
if (typeof tagGroupsMakeTableResponsive === 'undefined') {
    function tagGroupsMakeTableResponsive(tableId, responsiveBreakpoint) {
      jQuery("#"+tableId).basictable({
        breakpoint: responsiveBreakpoint,
        showEmptyCells: true
      });
    }
  }
  if (typeof TagGroupsDynamicPostFilter !== 'undefined' && jQuery !== 'undefined' && jQuery.basictable !== 'undefined') {
          tagGroupsMakeTableResponsive('tag-groups-cloud-table-6a815c86122e2','800');
    } else {
      jQuery(document).ready(function(){
        setTimeout(function(){tagGroupsMakeTableResponsive('tag-groups-cloud-table-6a815c86122e2','800');}, 500);
      });
    }
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.
- **integer:** A number without decimal places.
- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Tags or Terms

#### taxonomy

Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of taxonomy names | Taxonomies selected in the settings under “Basics”. | taxonomy=post_tag,product_tag |

#### smallest

Font-size in pt of the smallest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 12 | smallest=12 |

#### largest

Font-size in pt of the largest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 22 | largest=20 |

#### orderby

Which field to use for sorting.

Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags with [amount](#amount), the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | name | orderby=natural |

#### order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | ASC | order=desc |

#### amount

Maximum amount of tags in one cloud (per group).

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 0 (unlimited) | amount=30 |

#### hide_empty

Whether to hide or show tags that are not assigned to any post.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (hide empty) | hide_empty=1 |

#### threshold

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups. Please also pay attention to the value of hide_empty.

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 | integer | threshold=2 |

#### tags_post_id

Display only tags that are assigned to the post (or page) with a specified ID. If the value is set to 0, the plugin will try to retrieve the current post ID. Turn it off with -1.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all tags displayed) | tags_post_id=0 |

#### assigned_class

A modification of the tags_post_id parameter: Rather than hiding tags that are not assigned to the post (or page), they can be styled differently. Tags will receive this class name with appended _1 or _0. (If you output the tags as an array, a new element with the key “assigned” will be true or false.)

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (off) | assigned_class=“color-for-assigned-tag” |

#### separator

A separator between the tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | separator=“•” |

#### adjust_separator_size

Whether to adjust the separator’s size to the size of the following tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | adjust_separator_size=1 |

#### separator_size

The size of the separator, if not automatically adjusted to the size of the following tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 12 | separator_size=12 |

#### prepend

Prepend to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | prepend=“#” |

#### append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | append=“{count}” |

#### link_target

Set the “target” attribute for the links of the tags. Possible values are: _blank, _self, _parent or _top. In the shortcode you can also set the name of a frame.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string: “_blank”, “_self”, “_parent”, “_top”, or the name of a frame | empty (= opens in the same window, same as using _self) | link_target=“_blank” |

#### link_append

Append something to each tag’s link, for example a query.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | link_append=“track=this” |

** Available only in the shortcode!

#### show_tag_count

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (show) | show_tag_count=0 |

#### custom_title

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

If you also use custom_title_plural then the text of custom_title will be used for a post count of 1 and you can use here the singular form

| Default | Possible Values | Example |
| --- | --- | --- |
| depends on show_tag_count | string | custom_title="One post uses {name}" |

#### custom_title_zero

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of 0 (i.e. they are not used with any published post).

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_zero="No post uses {name}" |

#### custom_title_plural

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of >1. You can use here plural forms.

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_plural="{count} posts use {name}" |

#### add_premium_filter

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 (no filter) | add_premium_filter=1 |

### Groups and Tabs

#### include

Tag groups that will be considered in the tag cloud. In the short code you use the IDs, which you find in the left column in the list of groups. Empty or not used means that all tag groups will be used.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of integers | all | include=“1,5,9” |

#### exclude

groups to exclude

| Default | Possible Values | Example |
| --- | --- | --- |
| none | comma-separated list of group IDs | exclude=2,3,5 |

#### groups_post_id

Display only groups of which at least one assigned tag is also assigned to the post (or page) with the ID x. If set to 0, it will try to retrieve the current post ID. Matching groups will be added to the list specified by the parameter [include](#include)

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all groups displayed). | groups_post_id=14 |

#### hide_empty_columns

Whether to force hide columns (groups) that contain no tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | hide_empty_columns=1 |

#### show_all_groups

Whether to force showing all groups. Useful with the parameters tags_post_id and assigned_class.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | show_all_groups=1 |

** Available only in the shortcode!

#### show_not_assigned

Whether to show all not-assigned tags as an own group.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | show_not_assigned=1 |

** In the Gutenberg block this parameter is not available. Instead, add the “not assigned” group to the list of included groups.

#### not_assigned_name

The name used in the tab of not-assigned tags, if you activated show_not_assigned.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “not assigned” | not_assigned_name=“Other” |

#### group_in_class

Add class names to each tag that indicates its group ID (tg_tag_group_id_1) and group label (tg_tag_group_label_first_group).

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 | group_in_class=1 |

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### responsive_breakpoint

Width of the viewport (window) when the table should switch into responsive mode.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 800 | responsive_breakpoint=500 |

#### table_id

Define an ID for the enclosing <table>.

1. Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | table_id=“sidebar_01” |

#### table_class

Define a class for the enclosing <table>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | tag-groups-cloud-table | table_class=“make-it-dark” |

#### th_class

Define a class for the <th>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | th_class=“change-pointer” |

#### td_class

Define a class for the <td>.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | td_class=“change-pointer” |

---

