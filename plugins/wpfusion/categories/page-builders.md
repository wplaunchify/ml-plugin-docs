# Page Builders

*Category from WP Fusion documentation*

---

## Breakdance

**Source:** [https://wpfusion.com/documentation/page-builders/breakdance/](https://wpfusion.com/documentation/page-builders/breakdance/)

### Overview

WP Fusion lets you control the visibility of Breakdance builder elements based on a user’s tags or lists in your connected CRM or marketing automation platform.

When editing any element, click on the gear icon to access the settings panel.

Click on Edit Conditions to edit the conditions.

From the conditions dropdown, select the Required CRM Tags option, and then select either has tag or does not have tag.

The logic works like:

- has tag: The element will be displayed if the user is logged in and has at least one of the selected tags.
- does not have tag: The element will be displayed if the user is logged out, or if they are logged in and have none of the selected tags

---

## WPBakery Page Builder

**Source:** [https://wpfusion.com/documentation/page-builders/wpbakery-page-builder/](https://wpfusion.com/documentation/page-builders/wpbakery-page-builder/)

### Overview

WP Fusion includes an integration with the WPBakery Page Builder plugin to let you control visibility of page elements based on a user’s tags or lists in your CRM or marketing automation platform.

### Access Control

To set up access rules on WPBakery elements, open the settings for any widget, and click on the WP Fusion tab.

The Visibility dropdown sets the default visibility for the widget. The options are:

- Everyone: The widget will be visible to everyone regardless of whether they’re logged in or not (this is the default)
- Logged In Users: The widget will only be visible to logged in users
- Logged Out Users:  The widget will only be visible to guests on your site

Depending on the visibility mode you’ve selected, there will be additional options

- Required Tags (any): The element will only be shown if the user is logged in and has at least one of the specified tags
- Required Tags (all): The element will only be shown if the user is logged in and has all of the specified tags
- Required Tags (not): If the Visibility mode is set to Everyone, the element will be shown to guests, and hidden from logged in users if they have any of the specified tags. If the visibility mode is set to Logged In Users, the element will be hidden from guests, and hidden from logged in users if they have any of the specified tags

#### Visibility indicator

When editing content with WP Bakery, widgets that are protected by WP Fusion access rules will be displayed with an orange dotted line.

---

## Bricks

**Source:** [https://wpfusion.com/documentation/page-builders/bricks/](https://wpfusion.com/documentation/page-builders/bricks/)

### Overview

WP Fusion includes an integration with the Bricks visual site builder to let you control visibility of page elements based on a user’s tags or lists in your CRM or marketing automation platform.

### Access Control

To set up access rules on Bricks elements, open the settings for any widget, and click on the WP Fusion control group at the bottom of the Content tab.

WP Fusion’s Brick’s integration settings can be found on the Content tab when editing any element.
The Visibility dropdown sets the default visibility for the widget. The options are:

- Everyone: The widget will be visible to everyone regardless of whether they’re logged in or not (this is the default)
- Logged in users: The widget will only be visible to logged in users
- Logged out users:  The widget will only be visible to guests on your site
- Users who can access the post: Visibility will be determined based on the access rules configured on the underlying post (see below)
- Users who cannot access post: Users who cannot access the post, based on the access rules configured on the post

Depending on the visibility mode you’ve selected, there will be additional options

- Required Tags (any): The element will only be shown if the user is logged in and has at least one of the specified tags
- Required Tags (all): The element will only be shown if the user is logged in and has all of the specified tags
- Required Tags (not): If the Visibility mode is set to Everyone, the element will be shown to guests, and hidden from logged in users if they have any of the specified tags. If the visibility mode is set to Logged In Users, the element will be hidden from guests, and hidden from logged in users if they have any of the specified tags

#### Visibility indicator

When editing content with Bricks, widgets that are protected by WP Fusion access rules will be displayed with an orange dotted line.

Elements protected by WP Fusion access rules are displayed with an orange visibility indicator in the Bricks editor.
Note that the visibility indicator style is applied when the editor is loaded, so after making changes to an element’s visibility you will need to save and reload the editor to see the indicator.

#### Inheriting access rules from posts

Bricks includes a powerful template builder that allows you to create templates for specific post types, grids, and archives.

WP Fusion supports the template builder by allowing you to set the visibility of an element based on the rules configured in the WP Fusion meta box on the underlying post.

To use this feature, select any element, and set the WP Fusion Visibility dropdown to either Users who can access the post or Users who cannot access the post.

In this example, we’ve built a course grid where the buttons are shown dynamically based on the user’s tags in your CRM, and the access rules configured on the underlying course.

The buttons in the course catalog are displayed dynamically based on the user’s CRM tags.
The Take This Course button is set to Users who can access the post, the Upgrade to unlock button is set to Users who cannot access the post.

When the course grid is displayed, the buttons are shown dynamically based on the current user’s tags and the access rules configured on each course.

### Filter Queries

WP Fusion adds an option to the Posts widgets which allows you to filter the displayed results using WP Fusion’s access rules.

To turn this on enable the setting for Filter Queries in the WP Fusion control group (beneath the access settings).

With this setting on, any posts the user doesn’t have access to will be removed from the results.

You can use this to create personalized post listings, for example of courses or media items.

This is the same as enabling Filter Queries in the main WP Fusion settings, but it applies only to a single posts list at a time (which is better for performance).

---

## Thrive Architect

**Source:** [https://wpfusion.com/documentation/page-builders/thrive-architect/](https://wpfusion.com/documentation/page-builders/thrive-architect/)

### Overview

WP Fusion lets you control the visibility of Thrive Architect elements based on a user’s tags or lists in your connected CRM or marketing automation platform.

For information on syncing leads to your CRM from Thrive contact forms, see the Thrive Leads documentation.

When editing an element, on the sidebar menu, add a conditional display by clicking the “Add Display”.

Add a new rule, and specify tags that are required to display/hide the element.

If the condition is set to “Display content”, and tags are specified, the element will be hidden from logged out users, and will only be displayed for users who have at least one of the selected tags.

If the condition is set to “Hide content”, and tags are specified, the element will be displayed for logged out users, and will be hidden for users who have at least one of the selected tags.

### Optin forms

For integration with Thrive Architect’s opt-in forms, see the Thrive Automator documentation.

---

## Oxygen

**Source:** [https://wpfusion.com/documentation/page-builders/oxygen/](https://wpfusion.com/documentation/page-builders/oxygen/)

### Overview

WP Fusion lets you control the visibility of Oxygen components based on a user’s CRM tags. When editing a component, open the Conditions menu, and click Set Conditions to open the conditions modal.

Under the User section, select CRM Tags.

For each condition you can either select Has tag or Does not have tag. You can combine multiple conditions by clicking the Add Condition button.

If Does not have tag is selected, the component will be shown to logged-out users. You can limit visibility to only logged-in users by adding an additional User Logged In condition.

---

## Gutenberg

**Source:** [https://wpfusion.com/documentation/page-builders/gutenberg/](https://wpfusion.com/documentation/page-builders/gutenberg/)

### Video Tutorial

https://www.youtube.com/watch?v=E6hpOJPYnWw&t=4sOverview

WP Fusion integrates with the Gutenberg block editor in WordPress 5.0+ to let you control access to content based on a user’s logged-in status and CRM tags.

### Block Visibility

The recommended solution for block visibility control with WP Fusion is to use the Block Visibility plugin.

After installing Block Visibility, click on your block, and in the right panel, scroll down to the Visibility section.

Using Block Visibility you can control access to Gutenberg blocks using CRM tags.
If the WP Fusion section doesn’t appear, click on the Controls banner, and enable the WP Fusion controls.

In the WP Fusion settings, there are three block visibility options:

- Required Tags (Any): The block will only be shown if the user is logged in and has at least one of the specified tags (requires User Role to be set to Logged-in).
- Required Tags (All): The block will only be shown if the user is logged in and has all of the specified tags
- (requires User Role to be set to Logged-in).
- Required Tags (Not): If a user is logged in and has any of the specified tags, the block will be hidden.

### Layout Block

WP Fusion also includes a built-in layout block, which allows you to drop other blocks into a container that is protected using tags in your CRM.

#### Basic usage

To get started, click on the + icon to add a new block, and select the WP Fusion block from the Layout Elements section.

The WP Fusion block will then be added to the content editor. Once the block appears, click on it and the block settings will appear in the sidebar.

The top section of the block is what will be shown if the user is logged in. You can also specify any tags that are required in the sidebar. If the user is not logged in, and does not have any of the specified tags, they will be shown the content in the bottom section.

You can type text directly into the block, or add any other block to the inner section by clicking the + icon.

#### Advanced usage

You can nest multiple WP Fusion blocks within eachother to create more complex access rules.

In the screenshot above, the message “Welcome back, membership customer!” will be shown to logged in users who have both of the tags “Customer” and “Purchased Membership”.

“Welcome back, one-time purchase customer!” will be shown if they just have the “Customer” tag.

---

## Elementor

**Source:** [https://wpfusion.com/documentation/page-builders/elementor/](https://wpfusion.com/documentation/page-builders/elementor/)

### Overview

WP Fusion includes an integration with Elementor to let you control visibility of page elements based on a user’s tags in your CRM or marketing automation platform.

WP Fusion also supports syncing Elementor Forms entries to your CRM. For more info on that, [see this page](https://wpfusion.com/documentation/lead-generation/elementor-forms/).

### Access Control

**Heads up:** Elementor’s **Element Cache** can cause issues with elements that are conditionally displayed (including those controlled by WP Fusion). We recommend disabling it by going to **Elementor » Settings » Performance** and turning Element Cache to *Disable*.
To set up access rules on Elementor elements, open the settings for any widget, and click on the Advanced tab. Under the WP Fusion section, you will see several settings.

The Visibility dropdown sets the default visibility for the widget. The options are:

- Everyone: The widget will be visible to everyone regardless of whether they’re logged in or not (this is the default)
- Logged in users: The widget will only be visible to logged in users
- Logged out users:  The widget will only be visible to guests on your site
- Users who can access the post: Visibility will be determined based on the access rules configured on the underlying post (see below)
- Users who cannot access post: Users who cannot access the post, based on the access rules configured on the post

Depending on the visibility mode you’ve selected, there will be additional options

- Required Tags (any): The element will only be shown if the user is logged in and has at least one of the specified tags
- Required Tags (all): The element will only be shown if the user is logged in and has all of the specified tags
- Required Tags (not): If the Visibility mode is set to Everyone, the element will be shown to guests, and hidden from logged in users if they have any of the specified tags. If the visibility mode is set to Logged In Users, the element will be hidden from guests, and hidden from logged in users if they have any of the specified tags

#### Visibility indicator

When editing content with Elementor, widgets that are protected by WP Fusion access rules will be displayed with an orange dotted line.

#### Display conditions

WP Fusion also supports display conditions with Elementor Pro.

This allows you to combine tag-based access rules with other criteria such as the user’s role, the date, custom fields, and more.

#### Inheriting access rules from posts

The Loop Builder is a powerful feature in Elementor that allows you to create custom “loops” (i.e. post grids) of other posts on your site. WP Fusion supports the loop builder by allowing you to set the visibility of an element based on the rules configured in the WP Fusion meta box on the underlying post.

To use this feature, select any element in a loop builder template, and set the WP Fusion Visibility dropdown to either Users who can access the post or Users who cannot access the post.

In this example, we’ve built a course grid where the buttons are shown dynamically based on the user’s tags in your CRM, and the access rules configured on the underlying post.

The Take This Course button is set to Users who can access the post, the Upgrade to unlock button is set to Users who cannot access the post.

When the course grid is displayed, the buttons are shown dynamically based on the current user’s tags and the access rules configured on each course.

The buttons in the course catalog are displayed dynamically based on the user’s CRM tags.
Note: to use this feature, you must set the Cache Settings to “Inactive” under Advanced » Layout » Display Conditions for any widgets you’d like to be conditionally displayed.

The Cache Settings for the widget must be set to *Inactive* to display the widget conditionally based on tags.

### Hotspots

WP Fusion supports the Hotspot Widget with Elementor Pro, allowing you to conditionally display hotspots on images based on a user’s tags or lists in your connected CRM.

A great use case for this is creating interactive diagrams or maps that unlock new steps as users progress through course content on your site.

When editing any hotspot, you can select one or more required tags in your CRM from the “Required tags” dropdown. If set, the hotspot will only be shown to users who are logged in and have at least one of the specified tags.

**Heads up:** WP Fusion’s hotspot integration is not compatible with Elementor’s element caching. You will need to disable caching on the Hotspot widget by clicking on the widget, and going to Advanced » Layout » Cache Settings. Set the cache to *Inactive*.

### Elementor Popups

With Elementor Pro, WP Fusion also adds the ability to control the display of popups based on a user’s tags. To set this up, first create your popup, and then open the Advanced Rules window.

Click the toggle switch to turn on the WP Fusion condition. There are two options:

- Show: The popup will only be shown to logged in users who have at least one of the specified tags.
- Hide: The popup will be hidden from logged in users who have at least one of the specified tags.

### Filter Queries

WP Fusion adds an option to the Posts and Portfolio widgets in Elementor Pro which allows you to filter the displayed results using WP Fusion’s access rules.

To turn this on enable the setting for Filter Queries in the Query tab of the widget settings.

With this setting on, any posts the user doesn’t have access to will be removed from the results.

You can use this to create personalized post listings, for example of courses or media items.

Filter Queries is also supported with Jet Engine’s Listing Grid widget.

### Tracking clicks

WP Fusion can track clicks on Elementor buttons and elements by applying tags in your CRM. For more info see the bottom of Link Click Tracking.

### Developers

WP Fusion includes one filter for Elementor which allows you to create more advanced visibility rules than are possible via the UI. You can learn more and find examples under wpf_elementor_can_access.

---

## Divi

**Source:** [https://wpfusion.com/documentation/page-builders/divi/](https://wpfusion.com/documentation/page-builders/divi/)

### Overview

WP Fusion lets you control the visibility of Divi modules based on a logged-in user’s CRM tags.

When editing a module, select the Advanced tab, and scroll down to the Visibility section.

There are two settings:

- Required tags (any): You can enter a comma-separated list of tag names or tag IDs. The user must have at least one of the listed tags to see the module.
- Required tags (all): The user must have all of the tags listed here to see the module.
- Required tags (not): If the user has any of the tags listed here, the module will be hidden.

#### Advanced method

For more advanced control, install and activate the Content Visibility for Divi plugin. When editing any module, you’ll now see a new setting where you can put in rules regarding when that module should be displayed.

The setting accepts any PHP expression that evaluates to either “true” or “false”. Using WP Fusion’s has_tag() function you can create very specific rules regarding when a module should be displayed.

For example:

- Require the tag Active Subscriber to view the module:
wpf_has_tag( 'Active Subscriber' )
- Require both the Active Subscriber and Gold Member tags to view the module:
wpf_has_tag( 'Active Subscriber' ) && wpf_has_tag( 'Gold Member' )
- Require either the Active Subscriber or Gold Member tags:
wpf_has_tag( 'Active Subscriber' ) || wpf_has_tag( 'Gold Member' )
- Only show the module if the user is logged in and does not have the tag Payment Failed:
! wpf_has_tag( 'Payment Failed' )

### Dynamic CSS

Divi has a feature called Dynamic CSS, which can generate a CSS file for your pages based on just the elements that are visible on the page.

This feature has been known to potentially cause problems with conditionally displaying Divi widgets (both with WP Fusion and Content Visibility).

The reason is, if a user views a page and there are hidden elements, the CSS for that page will be generated without the CSS for the protected elements.

Then when another user views the page and has access to the protected elements, they will be able to view the content (the HTML), but any custom style applied to the elements will be missing, since it wasn’t generated with the dynamic CSS.

If you have issues with irregular styling using WP Fusion and Divi, it’s recommended to disable the Dynamic Module Framework and Dynamic CSS features in the Divi general settings.

---

## Beaver Builder

**Source:** [https://wpfusion.com/documentation/page-builders/beaver-builder/](https://wpfusion.com/documentation/page-builders/beaver-builder/)

### Overview

WP Fusion includes an integration with Beaver Builder to let you control visibility of modules based on a logged in user’s tags in your CRM. You can also personalize post grids in Beaver Builder based on a user’s access permissions.

### Module Visibility

To set this up, open the settings for any row or module, and click on the Advanced tab. Under the Visibility section, you will see two options in the dropdown: “User Tags (any)”, and “User Tags (not).”

In the select box, you can select any number of tags that are required to display that element.

- User Tags (any): If tags are specified, the element will be hidden from logged out users, and will only be displayed for users who have at least one of the selected tags.
- User Tags (not): The element will not be shown to users who have any of the specified tags.

The second method is useful for hiding content like popups and lead forms from subscribers or paying members.

If you select “User Tags (not)”, an additional option will appear: Logged Out Behavior. This has two options:

- Default (hidden): The element will not be shown to users who have any of the specified tags, and will not be shown to guests.
- Display: The element will not be shown to users who have any of the specified tags, but will be shown to guests.

### Filter Queries

In the WP Fusion general settings there is a Filter Queries setting that lets you hide all posts on your site if a user doesn’t have the right access permissions to access that post.

This works with the Beaver Builder Posts module as well, but there may be situations where you need to leave that option turned off globally, but do want to enable query filtering on a single Beaver Builder posts list. For example to show a personalized list of courses or products that are available to that user.

To enable this on a single Posts module, set the Source to Custom Query, and at the bottom of the Content tab, set Filter Queries to Yes.

With this enabled any posts that the user doesn’t have the correct tags to access will be removed from the posts listing.

### Beaver Themer

With the Beaver Themer plugin installed, WP Fusion registers additional options in the conditional logic editor. These can be used to create display rules based on a user’s CRM tags that are more complex than the options available when using Beaver Builder alone.

From the conditions dropdown, select User’s CRM Tags and then you can select either contains or does not contain, and select a CRM tag.

The rules will be calculated when a page is displayed and the element will be hidden or shown based on the current user’s tags in your CRM.

---

