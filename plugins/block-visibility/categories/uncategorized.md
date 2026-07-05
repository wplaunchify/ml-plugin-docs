# Uncategorized

*Category from Block Visibility documentation*

---

## Filter & Slot Reference

**Source:** [https://blockvisibilitywp.com/knowledge-base/filter-slot-reference/](https://blockvisibilitywp.com/knowledge-base/filter-slot-reference/)

Please note that this documentation is under active development.

Block Visibility includes 12+ ways to conditionally display block content. That said, plenty of additional features and integrations could be added. This article details the filters and slots available in Block Visibility, allowing you to extend the plugin with your own visibility controls.

## JavaScript Filters

### Editor

#### blockVisibility.attributes

📁 src → 📁 editor → index.js

Filter the 
```
blockvisibility
```

 attribute specification (schema). Use this filter to add sub-attributes to the main 
```
blockvisibility
```

 attribute. Otherwise, a block error will likely occur.

| Parameters | Description |
| --- | --- |
| attributes | (Object) The blockvisibility attribute specification |

#### blockVisibility.globallyRestrictedBlockTypes

📁  src → 📁  editor → index.js

Use for blocks that are not compatible with visibility controls or when you want to manually restrict block types from having visibility controls.

| Parameters | Description |
| --- | --- |
| blocks | (Array) All blocks that should have visibility controls disabled |

#### blockVisibility.widgetAreaRestrictedBlockTypes

📁 src → 📁 editor → index.js

Used for blocks that are not compatible with visibility controls when the blocks are used as Widgets.

| Parameters | Description |
| --- | --- |
| blocks | (Array) All blocks that should have visibility controls disabled |

### Inspector Controls

#### blockVisibility.addInspectorControls

📁 src → 📁 editor → 📁 inspector-controls → index.js

Filter used to add additional top-level visibility controls and functionality. For example, the [Hide Block](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-hide-block-control/) control is registered at this level.

This filter should **not** be used to add controls that need to be part of a control set. Use  
```
blockVisibility.addControlSetControls
```

 instead.

| Parameters | Description |
| --- | --- |
| blockAtts | (Object) The current attributes of the block |
| enabledControls | (Array) Array of all enabled visibility controls |
| ...props | (Object) All the other props passed to the VisibilityInspectorControls component |

#### blockVisibility.addControlSetControls

📁 src → 📁 editor → 📁 inspector-controls → controls-panel.js

Filter used to add additional visibility controls and functionality at the control set level. Controls added using this filter will appear at the block level and in [Visibility Presets](https://blockvisibilitywp.com/knowledge-base/guide-to-visibility-presets/).

| Properties | Description |
| --- | --- |
| uniqueIndex | (String) A unique index for the control set |
| enabledControls | (Array) All enabled visibility controls |
| setControlAtts | (Function) Update the control set attributes |
| ...props | (Object) All additional props passed to the ControlSet component |

### Visibility Controls

#### blockVisibility.screenSizeIncompatibleBlockTypes

📁 src → 📁 controls →  📁 screen-size → index.js

Use for blocks that are not compatible with the [Screen Size](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-screen-size-control/) control. Typically this occurs when blocks do not support CSS classes.

| Parameters | Description |
| --- | --- |
| blocks | (Array) All blocks that should have visibility controls disabled |

### Conditional Indicators

#### blockVisibility.contextualIndicatorActiveControls

📁 src → 📁 editor → 📁 contextual-indicators → index.js

Filter the object of active visibility controls used to display contextual indicators.

| Parameters | Description |
| --- | --- |
| activeControls | (Object) All active visibility controls on the block |
| blockVisibility | (Object) The blockVisibility attribute |
| controls | (Object) All visibility controls available to the selected block |
| hasControlSets | (Boolean) Whether or not the block has a control set |
| enabledControls | (Array) Array of all enabled visibility controls |
| variables | (Object) All plugin variables |

#### blockVisibility.contextualIndicatorClasses

📁 src → 📁 editor → 📁 contextual-indicators → index.js

Filter the CSS indicator classes that are added to each block based on the individual indicator tests.

| Parameters | Description |
| --- | --- |
| classes | (String) The current indicator classes applied to the block |

### Settings

#### blockVisibility.PluginSettings

📁 src → 📁 settings → 📁 visibility-controls → index.js

Allows you to add additional content to the Plugin Settings tab.

| Properties | Description |
| --- | --- |
| pluginSettings | (Object) Current plugin settings |
| setPluginSettings | (Function) Update the plugin settings |
| ...props | (Object) All additional props passed to this component |

#### blockVisibility.VisibilityControls

📁 src → 📁 settings → 📁 visibility-controls → index.js

Allows you to add additional content to the Visibility Controls tab.

| Properties | Description |
| --- | --- |
| visibilityControls | (Object) Current visibility control settings |
| setVisibilityControls | (Function) Update the visibility control settings |
| ...props | (Object) All additional props passed to this component |

### Global Utilities

#### blockVisibility.controls

📁 src → 📁 utils → get-enabled-controls.js

Filters the array of all available visibility controls, including those added by third-party extensions. Use this filter to register your own custom controls.

| Parameters | Description |
| --- | --- |
| controls | (Array) All available visibility controls |

#### blockVisibility.enabledControls

📁 src → 📁 utils → get-enabled-controls.js

Filters the array of all enabled visibility controls, including those added by third-party extensions. Enabled controls are ones that have not been disabled in the plugin settings. For third-party integration controls, we also make sure that the respective plugins are installed and activated. Use this filter to override enabled controls.

| Parameters | Description |
| --- | --- |
| enabledControls | (Array) All enabled controls |
| settings | (Object) All available plugin settings |
| variables | (Object) All available plugin variables |

## PHP Filters

### Frontend Tests

#### block_visibility_is_block_visible

📁 includes → 📁 frontend → render-block.php

Filter whether or not a block should be visible. All the frontend visibility tests are run through this filter, which returns true or false. When writing your own frontend tests, if 
```
is_visible
```

 is already 
```
false
```

, this means another active test indicated the block should be hidden. In this case, you should return 
```
false
```

 as well.

| Parameters | Description |
| --- | --- |
| is_visible | (Boolean) Should the block be visible |
| settings | (Object) All available plugin settings |
| attributes | (Object) All available plugin attributes |

### Settings

#### block_visibility_settings

📁 includes → register-settings.php

Use this filter to add custom plugin settings.

| Parameters | Description |
| --- | --- |
| settings | (Array) All available plugin settings |

#### block_visibility_setting_defaults

📁 includes → register-settings.php

Use this filter to add default values for custom plugin settings.

| Parameters | Description |
| --- | --- |
| defaults | (Array) Default values for all plugin settings |

## Slots

### Inspector Controls

#### ControlSetControls-[uniqueIndex]

📁 src → 📁 editor → 📁 inspector-controls → controls-panel.js

📁 src → 📁 editor → 📁 preset-manager → controls-set.js

Use this slot to render custom visibility control UI.

| Properties | Description |
| --- | --- |
| uniqueIndex | (String) A unique index for the control set |
| enabledControls | (Array) All enabled visibility controls |
| setControlAtts | (Function) Update the control set attributes |
| ...props | (Object) All additional props passed to the ControlSet component |

#### ControlSetControlsIntegrations-[uniqueIndex]

📁 src → 📁 editor → 📁 inspector-controls → controls-panel.js

📁 src → 📁 editor → 📁 preset-manager → controls-set.js

Use this slot to render custom visibility control UI for third-party integrations.

| Properties | Description |
| --- | --- |
| uniqueIndex | (String) A unique index for the control set |
| enabledControls | (Array) All enabled visibility controls |
| setControlAtts | (Function) Update the control set attributes |
| ...props | (Object) All additional props passed to the ControlSet component |

### Settings

#### PluginSettings

📁 src → 📁 settings → 📁 plugin-settings → index.js

Use this slot to add custom UI to the “General Settings” tab on the Block Visibility plugin settings page.

| Properties | Description |
| --- | --- |
| pluginSettings | (Object) Current plugin settings |
| setPluginSettings | (Function) Update the plugin settings |
| ...props | (Object) All additional props passed to this component |

#### VisibilityControls

📁 src → 📁 settings → 📁 visibility-controls → index.js

Use this slot to add custom UI to the “Visibility Controls” tab on the Block Visibility plugin settings page. Content will appear above the Integration Controls section.

| Properties | Description |
| --- | --- |
| visibilityControls | (Object) Current visibility control settings |
| setVisibilityControls | (Function) Update the visibility control settings |
| ...props | (Object) All additional props passed to this component |

#### VisibilityControlsGeneral

📁 src → 📁 settings → 📁 visibility-controls → 📁 general → index.js

Use this slot to add custom UI to the “General” panel on the “Visibility Controls” tab on the Block Visibility plugin settings page. Content will appear at the bottom of the panel.

| Properties | Description |
| --- | --- |
| visibilityControls | (Object) Current visibility control settings |
| setVisibilityControls | (Function) Update the visibility control settings |
| ...props | (Object) All additional props passed to this component |

#### VisibilityControlsIntegrations

📁 src → 📁 settings → 📁 visibility-controls → 📁 integrations → index.js

Use this slot to add custom UI to the “Visibility Controls” tab on the Block Visibility plugin settings page. Content will appear at the bottom of the Integration Controls section.

| Properties | Description |
| --- | --- |
| visibilityControls | (Object) Current visibility control settings |
| setVisibilityControls | (Function) Update the visibility control settings |
| ...props | (Object) All additional props passed to this component |

---

## How to Use the Cookie Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-cookie-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-cookie-control/)

## Control Overview

With the Cookie control, you will be able to easily display blocks based on HTML cookies. Note that Block Visibility does not allow you to create/set your own HTML cookies from within the plugin. You will need to handle this separately or use another third-party plugin.

## Configuration

### How to Enable

Click on any block in the Block Editor and navigate to the Visibility panel. You will notice an eye icon in the Controls Toolbar. See the screenshot below. Click on the eye, and all available visibility controls will appear. Select “Cookie” and the Cookie control panel will be added to the selected block.

![Enabling the Cookie control in the block settings sidebar.](https://blockvisibilitywp.com/wp-content/uploads/2022/04/Cookie-Enable-1024x683.jpg)Enabling the Cookie control in the block settings sidebar

### How to Configure

Let’s assume your website sets a custom cookie called 
```
test_cookie
```

 and you want to display an Image block whenever that cookie has the value 
```
yum_cookies
```

.

#### Steps to Complete

1. Select the Image block and navigate to the Cookie control settings in the Visibility panel.
2. In the cookie name field, enter 
```
test_cookie
```

.
3. Choose “Value is equal to” for the condition.
4. Finally enter 
```
yum_cookies
```

 for the cookie value.

The resulting configuration should resemble the screenshot below. While this is a relatively simple example, you are limited only by your own creativity!

![Configuring the Cookie control (Pro v1.5.0)](https://blockvisibilitywp.com/wp-content/uploads/2022/04/Cookie-Configure-1024x683.jpg)Configuring the Cookie control

### How to Disable

If you would like to disable the Cookie control at the block level, click on the eye icon in the “Controls” toolbar and deselect it. The control can also be disabled globally in the plugin’s [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/).

Note that if this control is disabled globally, any blocks that are actively being hidden by the Cookie control will become visible again.

## Rules & Rule Sets

Similar to other controls in Block Visibility, the Cookie control is powered by rules and rule sets. All rules within a rule set must be satisfied for the selected block to be visible. However, you can also create multiple rule sets. Only one rule set needs to apply for the block to be visible.

**Within** a rule set, you are creating AND conditions between multiple rules. **Between** two rule sets, you are creating OR conditions.

There are instances when rule errors can occur. For example, if rule inputs are not completely filled out or if the rule is based on a product that has since been deleted from your store. In these situations, the plugin defaults to showing the block unless other rules apply, which would hide the block.

![Cookie rules and rule sets in the block settings sidebar.](https://blockvisibilitywp.com/wp-content/uploads/2022/04/Cookie-Rule-Sets-1024x683.jpg)Cookie rules and rule sets in the block settings sidebar

### Cookie Rules

Begin by entering the cookie name. You have the choice of 6 operators. These include:

- Has any value
- Has no value (Does not exist)
- Value is equal to
- Value is not equal to
- Value contains
- Value does not contain

Once the operator is selected, enter the value to test against the cookie value.

### Hide When Rules Apply

By default, the block will be visible if the applied rules are satisfied. Toggle the “Hide when rules apply” setting to hide the block instead.

---

## Guide to Visibility Presets

**Source:** [https://blockvisibilitywp.com/knowledge-base/guide-to-visibility-presets/](https://blockvisibilitywp.com/knowledge-base/guide-to-visibility-presets/)

## What is a Visibility Preset?

A Visibility Preset is a collection of visibility conditions that can be applied to any number of WordPress blocks in the Block Editor. This allows you to independently configure and manage the visibility of multiple blocks at once.

Check out the video below for a brief overview of how Visibility Presets work and how you can use them on your website.

Introducing Visibility Presets in Block Visibility Pro

## Getting Started with Presets

### Access the Visibility Preset Manager

First, you need to create your first visibility preset via the Visibility Preset Manager, which can be accessed in two ways.

#### Individual Blocks

Select any block and navigate to the Visibility panel in the Settings Sidebar. Using the options icon (three vertical dots), insert the Visibility Presets control. Then, click on the settings icon to launch the manager. If you have not created a preset yet, you will be given instructions on adding a new preset.

![](https://blockvisibilitywp.com/wp-content/uploads/2024/01/image-1.png)Adding a new Visibility Preset on a block

#### Block Editor Options Menu

Alternatively, you can access the Visibility Preset Manager directly from the options dropdown menu in the Block Editor.

![Accessing the Preset Manager from the Options menu.](https://blockvisibilitywp.com/wp-content/uploads/2021/10/Accessing-Preset-Manager-Options-Menu.png)Accessing the Preset Manager from the Options menu

Please note that presets can only be created and edited by Administrators or Editors. Authors will be able to apply existing presets to blocks, but they cannot make any changes to the presets themselves.

### Create a New Preset

When the Visibility Preset Manager opens, you will be prompted to create a new preset or edit an existing one. All available presets are accessible from the sidebar navigation, which is fully searchable. You can also create a new preset at any time by clicking the plus (+) icon in the sidebar.

![Create a new preset in the Preset Manager](https://blockvisibilitywp.com/wp-content/uploads/2021/10/Create-a-New-Preset.png)Create a new preset in the Preset Manager

### Configuring a Preset

Visibility Presets operate similarly to the visibility controls on individual blocks. Simply configure the controls that you would like to apply to the preset. When finished, publish the preset, and it will become available site-wide.

![Configuring a new preset in the Preset Manager](https://blockvisibilitywp.com/wp-content/uploads/2021/10/Configuring-a-Preset.png)Configuring a new preset in the Preset Manager

### Add a Preset to a Block

Now that you have created a preset, the next step is to add it to an individual block. In the Block Editor, choose the block that should have the preset applied. Navigate to the Visibility panel and select your new preset from the dropdown. Presets can be added to any number of blocks, and a block can have any number of presets.

![Add a preset to a block.](https://blockvisibilitywp.com/wp-content/uploads/2021/10/Add-a-Preset-to-a-Block.png)Add a preset to a block

Note that if a block has multiple presets, all presets need to apply for the block to be visible.  Furthermore, if a block has individual visibility settings in addition to presets, those will also apply when determining if the block should be shown or hidden.

### Add Additional Control Sets

When a preset is first created, it includes a single control set. A control set is a group of visibility controls that form “AND” conditions. For example, if a set includes the [Date & Time](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-date-time-control/) control and the [User Role](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-user-role-control/) control, both controls must be satisfied for the block to be visible.

There may be instances where you need “OR” conditions. Visibility presets make this easy. Simply add an additional control set by clicking the plus (+) icon in the navigation bar.

![Adding an additional control set in the Preset Manager](https://blockvisibilitywp.com/wp-content/uploads/2021/10/Adding-an-Additional-Control-Set.png)Adding an additional control set in the Preset Manager

Blocks with this preset will be visible if **either** control set is satisfied. For more information on how controls and control sets work in Block Visibility, visit their dedicated [Knowledge Base article](https://blockvisibilitywp.com/knowledge-base/guide-to-visibility-controls-and-control-sets/).

### How to Disable

Each preset includes the option to enable or disable. When a preset is disabled, any block currently hidden by the preset will become visible again. This functionality can be useful when you are still configuring a preset and are not quite ready to make it active. Disabled presets will have a little red dot to indicate they are disabled.

![Disabling a visibility preset in the Preset Manager](https://blockvisibilitywp.com/wp-content/uploads/2021/10/Disabling-a-Preset.png)Disabling a visibility preset in the Preset Manager

The Visibility Preset functionality can also be disabled entirely in the plugin’s [Visibility Control Settings.](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/) Again, any block that is actively being hidden by a preset will become visible again if presets are disabled globally.

---

## How to Use the Metadata Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-metadata-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-metadata-control/)

## Control Overview

With the Metadata control, you will be able to easily display blocks based on post and/or user metadata. Metadata is often referred to as [custom fields](https://wordpress.org/support/article/custom-fields/) and can be easily added to posts, pages, and custom post types in WordPress core. User metadata, on the other hand, is a bit more restrictive. Adding custom user metadata requires a bit of custom coding. That said, WordPress provides a decent amount of default user metadata, such as 
```
first_name
```

, 
```
last_name
```

, etc., that can be useful in configuring block visibility.

If you are looking for additional control over metadata, many great third-party plugins provide more sophisticated solutions than WordPress core, namely Meta box and Advanced Custom Fields (ACF). Note that if you are using ACF on your website, we recommend using the [ACF control](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-advanced-custom-fields-control/) directly since it provides direct integration with ACF fields.

## Configuration

### How to Enable

Click on any block in the Block Editor and navigate to the Visibility panel. You will notice an ellipsis icon in the Controls Toolbar. See the screenshot below. Click on the ellipsis, and all available visibility controls will appear. Select “Metadata” and the Metadata control panel will be added to the selected block.

![Enabling the Metadata control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/09/Metadata-Enable.jpg)Enabling the Metadata control in the block settings sidebar

### How to Configure

Instructions are always better with examples. Let’s assume your website has a custom field on posts that indicates if a banner image should be displayed. Assume the post metadata key is 
```
show_banner_image
```

 and the custom field is configured like so.

![](https://blockvisibilitywp.com/wp-content/uploads/2021/09/Metadata-Setting-Custom-Fields.jpg)Custom field configuration using core WordPress functionality.

You want to conditionally display an Image block if this field is set to 
```
true
```

.

#### Steps to Complete

1. Select the Image block and navigate to the Metadata control settings in the Visibility panel.
2. Select “Post Metadata” from the rules selector.
3. In the meta key field, enter 
```
show_banner_image
```

.
4. Choose “Value is equal to” for the condition.
5. Finally enter 
```
true
```

 for the meta key value.

The resulting configuration should resemble the screenshot below.

![](https://blockvisibilitywp.com/wp-content/uploads/2021/09/Metadata-Configure.jpg)

### How to Disable

If you would like to disable the Metadata control at the block level, simply click on the ellipsis icon in the “Controls” toolbar and deselect it. The control can also be disabled globally in the plugin’s [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/).

Note that if this control is disabled globally, any blocks that are actively being hidden by the Metadata control will become visible again.

## Rules & Rule Sets

Like other Block Visibility controls, the Metadata control is powered by rules and rule sets. All rules within a rule set must be satisfied for the selected block to be visible. However, you can also create multiple rule sets. Only one rule set needs to apply for the block to be visible.

**Within** a rule set, you are creating AND conditions between multiple rules. **Between** two rule sets, you are creating OR conditions.

There are instances when rule errors can occur. For example, if rule inputs are not completely filled out or if the rule is based on a product that has since been deleted from your store. In these situations, the plugin defaults to showing the block unless other rules apply, which would hide the block.

![Metadata rules and rule sets in the block settings sidebar.](https://blockvisibilitywp.com/wp-content/uploads/2021/09/Metadata-Rule-Set.jpg)Metadata rules and rule sets in the block settings sidebar

### Metadata Rules

When creating a new rule, you will have the option to choose either “Post Metadata” or “User Metadata”. When post metadata is selected, the plugin will check if the current post, page, or custom post type has the provided meta key and satisfies the rule. If user metadata is selected, the plugin will check if the current logged-in user has the provided meta key.

Note that if you select “User Metadata” and the current user is not logged in, the rule will fail, and the block will be hidden.

When a specific meta key is entered, you have the choice of 6 operators. These include:

- Has any value
- Has no value
- Value is equal to
- Value is not equal to
- Value contains
- Value does not contain

Once the operator is selected, enter the value to test the meta key against.

### Hide When Rules Apply

By default, the block will be visible if the applied rules are satisfied. Simply toggle the “Hide when rules apply” setting to hide the block instead.

---

## How to Install

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-install/](https://blockvisibilitywp.com/knowledge-base/how-to-install/)

## Block Visibility

Block Visibility plugin is **freely** available on the [WordPress.org](https://wordpress.org/plugins/block-visibility/) plugin repository. Once installed, you will receive automatic updates as you would any other plugin in the repository.

### Installation

You can install the plugin in multiple ways. The easiest method is directly from your WordPress dashboard.

#### Installation via Plugins Dashboard

1. Navigate to the **Plugins → Add New** page in your WordPress dashboard.
2. Search for “Block Visibility”.
3. When the plugin appears, select “Install” and then “Activate”.
4. Block Visibility is now up and running!

#### Upload the Plugin Files Manually

Alternatively, you can download the plugin files from the plugin listing on WordPress.org and upload them manually.

1. Download the plugin .zip file from [WordPress.org](https://wordpress.org/plugins/block-visibility/).
2. Navigate to the **Plugins → Add New** page in your WordPress dashboard.
3. At the top of the page, click on the button that reads “Add New”.
4. On the following page, click on the button that reads “Upload Plugin”.
5. Click on the “Choose File” button and navigate to where you downloaded 
```
block-visibility.zip
```

 on your computer.
6. Click on the “Install Now” button to install Block Visibility.
7. On the following page, find
8. Block Visibility in the list of installed plugins and click on the “Activate” link.
9. Block Visibility is now up and running!

Once Block Visibility is installed and activated, proceed to the [Getting Started Guide](https://blockvisibilitywp.com/knowledge-base/guide-to-getting-started-with-block-visibility/) for more information on optimally setting up and using the plugin.

## Block Visibility Pro

[Block Visibility Pro](https://blockvisibilitywp.com/pro/) is the premium add-on for the core Block Visibility plugin. Pro add-on files are distributed through this website.

### Retrieving Your Files

If you purchased [Block Visibility Pro](https://blockvisibilitywp.com/pro/), you should receive an email confirmation with your purchase receipt, username, download link, and product license key. Click on the link in the email to download Block Visibility Pro. Your downloads and license keys are also always available from [your account](https://blockvisibilitywp.com/account/) page.

### Installation

Block Visibility is required for the Pro Add-on. Attempting to install Pro without the core plugin installed and activated will trigger an error message.

1. Download the plugin .zip file from your purchase confirmation email or from [your account.](https://blockvisibilitywp.com/account/)
2. Navigate to the **Plugins → Add New** page in your WordPress dashboard.
3. At the top of the page, click on the button that reads “Add New”.
4. On the following page, click on the button that reads “Upload Plugin”.
5. Click on the “Choose File” button and navigate to where you downloaded 
```
block-visibility-pro.zip
```

 on your computer. Note, the .zip file name will likely include the current version number as well.
6. Click on the “Install Now” button to install Block Visibility.
7. On the following page, find Block Visibility Pro in the list of installed plugins and click on the “Activate” link.
8. Once active, click on the “Activate License” link to proceed with [license activation](https://blockvisibilitywp.com/knowledge-base/activating-your-pro-license/).

---

## How to Use the URL Path Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-url-path-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-url-path-control/)

## Control Overview

The URL Path control allows you to conditionally display blocks based on the URL of the page that the block is on. While Block Visibility already includes the [Location](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-location-control/) control, which was designed for location-based visibility, the URL Path control provides an additional level of flexibility.

## Configuration

### How to Enable

Click on any block in the Block Editor and navigate to the Visibility panel. You will notice an ellipsis icon in the Controls Toolbar. See the screenshot below. Click on the ellipsis, and all available visibility controls will appear. Select “URL Path” and the URL Path control panel will be added to the selected block.

![Enabling the URL Path control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/URL-Path-Enable-1024x683.jpg)Enabling the URL Path control in the block settings sidebar

### How to Configure

Instructions are always better with examples. For example, assume your website is:

```
https://www.example.com
```

You want to display the block on archive pages for the post categories “Travel” and “Destinations” as well as any sub-categories for each. The URL path for category archives on your site follows the format:

```
https://www.example.com/category/example
```

#### Steps to Complete

1. Navigate to the URL Path control settings in the Visibility panel.
2. Navigate to the [Referral URL Contains](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-referral-source-control/#referral-url-contains) textbox.
3. Add “/category/travel” and “/category/destinations”.

The resulting configuration should resemble the screenshot below.

![Configuring the URL Path control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/URL-Path-Configure-1024x683.jpg)Configuring the URL Path control

## Control Settings

Below are the setting available to the URL Path control. In order for the control to work properly, only enter one path per line in each textbox.

**Note that you should not include the website domain when entering your paths.**For example, if you wanted to show a block on pages with the URL path:

```
https://www.example.com/category/destinations
```

Simply enter the following in the URL Path Contains textbox:

```
/category/destinations
```

### URL Path Contains

The block will only be shown if the current URL contains at least one of the provided paths.

### URL Path Does Not Contain

The block will be hidden whenever at least one of the provided paths is present in the URL of the current page. When determining block visibility, the “Does Not Contain” values take precedence over the “Contains” values.

---

## How to Use the Browser & Device Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-browser-device-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-browser-device-control/)

## Control Overview

With the Browser & Device control, you will be able to easily display custom content based on the browser and/or device of the current user.

The core [Block Visibility](https://wordpress.org/plugins/block-visibility/) plugin includes the [Screen Size](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-screen-size-control/) control, which allows you to conditionally display block content based on the width of the screen. This is useful for responsive design, especially on mobile devices. While this works great, the Screen Size control uses CSS media queries to show content dynamically. This means block content is still loaded on the page, whether it’s visible or not.

The Browser & Device control works at the server level by detecting the user’s current browser and device properties from the [user agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) string. Any content that is “hidden” will not be loaded to the page. It is important to note that browser detection using the user agent will never be 100% accurate. See the [limitations](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-browser-device-control/#limitations) below.

## Configuration

### How to Enable

Click on any block in the Block Editor and navigate to the Visibility panel. You will notice an ellipsis icon in the Controls Toolbar. See the screenshot below. Click on the ellipsis, and all available visibility controls will appear. Select “Browser & Device” and the Browser & Device control panel will be added to the selected block.

![Enabling the Browser & Device control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Browser-Device-Enable-1024x683.jpg)Enabling the Browser & Device control in the block settings sidebar

### How to Configure

Instructions are always better with examples. Let’s assume your website has some custom functionality that really works best on Google Chrome. You want to create a message for non-Chrome users to let them know they will have a sub-optimal experience and should download Chrome.

#### Steps to Complete

1. Navigate to the Browser & Device control settings in the Visibility panel.
2. Select “Browser” from the rules selector.
3. Choose “Is none of the selected” from the condition selector.
4. Choose “Chrome” from the browser selector.

The resulting configuration should resemble the screenshot below.

![Configuring the Browser & Device control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Browser-Device-Configure-1024x683.jpg)Configuring the Browser & Device control

### How to Disable

If you would like to disable the Browser & Device control at the block level, click on the ellipsis icon in the “Controls” toolbar and deselect it. The control can also be disabled globally in the plugin’s [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/).

Note that if this control is disabled globally, any blocks that are actively being hidden by the Browser & Device control will become visible again.

## Rules & Rule Sets

Like other Block Visibility controls, the Browser & Device control is powered by rules and rule sets. All rules within a rule set must be satisfied for the selected block to be visible. However, you can also create multiple rule sets. Only one rule set needs to apply for the block to be visible.

**Within** a rule set, you are creating AND conditions between multiple rules. **Between** two rule sets, you are creating OR conditions.

There are instances when rule errors can occur. For example, if rule inputs are not completely filled out or if the rule is based on a product that has since been deleted from your store. In these situations, the plugin defaults to showing the block unless other rules apply, which would hide the block.

### Browser Rules

The Browser category currently only has one rule. More options may be added in the future.

#### Browser

The Browser rule allows you to conditionally display blocks based on the user’s current browser. The following browsers are supported:

- Chrome
- Firefox
- Microsoft Edge
- Internet Explorer
- Opera
- Safari
- Samsung Internet

### Device Rules

The Device rules detect the user’s device platform (operating system) as well as the type. For improved detection accuracy, platforms are limited to those most used on the internet, according to [W3Counter](https://www.w3counter.com/globalstats.php).

#### Device Platform

The Device Platform rule allows you to conditionally display blocks based on the platform (operating system) of the user’s current browser. The following platforms are currently supported:

- Android
- iOS (iPhone and iPad)
- Linux
- Macintosh
- Windows

#### Device Type

The Device Type rule evaluates all the details in the user agent string and attempts to determine if the user is on a mobile device, if the user is actually a robot scraping your website (Googlebot, etc.), or if they are using another device. If the user is not on mobile and is not a robot, the default is to assume they are on a desktop device. The available options are:

- Is Mobile
- Is Robot
- Is Desktop (Other)

## Limitations

Accurate browser and device detection is difficult, which is why we have limited the options to the most used browsers and devices. While this control has a 99.95% accuracy ratio, it will never be 100%. Today’s modern world has thousands of different devices, operating systems, and browsers. This leads to situations where accurate detection could fail, so keep that in mind when creating content. Note that it’s also possible for users to “fake” their browser and device.

---

## Changelog

**Source:** [https://blockvisibilitywp.com/knowledge-base/changelog/](https://blockvisibilitywp.com/knowledge-base/changelog/)

This is the historical changelog for Block Visibility Pro, which is no longer being developed as of [Block Visibility 3.0.0](https://blockvisibilitywp.com/block-visibility-3-0-0-a-new-chapter-begins/). If you are a Pro customer, you can still download the latest version of Pro from [your account](https://blockvisibilitywp.com/account/).

**The current changelog for the main Block Visibility plugin is available on WordPress.org.**

## 1.6.2

*Release Date: 2023-01-27*

**Added**

- [Visibility Presets] Added filter allowing custom visibility controls to be added to the preset manager.
- [Visibility Presets] Added help notice for when no presets exist.
- [Visibility Presets] Added spinner to improve UI while presets are being fetched.

**Changed**

- Removed deprecated contextual indicator filter and added new one.

**Fixed**

- [Easy Digital Downloads] Fixed error in visibility tests with version 3.1+ of Easy Digital Downloads.
- Fixed error message on block-based Widgets screen when debug is enabled.

## 1.6.1

*Release Date: 2022-12-12*

**Fixed**

- [Location] Guard against a potential error when a post type has custom taxonomies, but those taxonomies are not exposed to the REST API and cannot be fetched in the Editor.

## 1.6.0

*Release Date: 2022-12-05*

**Added**

- [Location] Added the ability to show or hide blocks if the post has no set taxonomy terms.
- Added the ability to enable or disable help notices and popovers in the Editor.

**Changed**

- [Location] Fetch authors directly rather than rely on the Block Visibility variables endpoint.
- [Location] Fetch post data directly rather than rely on the Block Visibility variables endpoint.
- [Location] Fetch taxonomy terms directly rather than rely on the Block Visibility variables endpoint.
- [Easy Digital Downloads] Fetch download categories directly rather than rely on the Block Visibility variables endpoint.
- [WooCommerce] Fetch product categories directly rather than rely on the Block Visibility variables endpoint.
- Redesigned the Editor UI to match the WordPress 6.1 design system.
- Redesigned the Visibility Preset manager.
- Optimized all custom SVG icons.
- Consolidated all external plugin links into a single directory.
- Changed labels on information popovers to improve consistency with the base plugin.
- Changed modal styling to improve consistency with the base plugin.
- Disable the paste button in the Import modal when the site is not secure (https).

**Fixed**

- [Date & Time] Fixed bug where time intervals were not removed correctly.

## 1.5.3

*Release Date: 2022-10-08*

**Changed**

- Simplify REST API requests on the plugin settings page to increase performance and attempt to fix edge case fetch errors. Note this change will only take effect when using Block Visibility 2.4.4+.

## 1.5.2

*Release Date: 2022-05-09*

**Changed**

- Disabled autocomplete on rule set text fields to reduce user confusion.
- Reduce internal dependencies and use Block Visibility functions where possible.

**Fixed**

- Fixed minor CSS error in [Visibility Preset](https://blockvisibilitywp.com/knowledge-base/guide-to-visibility-presets/) modal.
- [Screen Size](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-screen-size-control/) controls now work in Visibility Presets. Note that this requires Block Visibility 2.4.1 or above.

## 1.5.1

*Release Date: 2022-04-1*9

**Fixed**

- Reverted PHP warning fix on the Widgets screen ([#25](https://github.com/ndiego/block-visibility/issues/25)) due to conflict with [EditorsKit](https://wordpress.org/plugins/block-options/). Will look for an alternative solution to the PHP warning in the next version of Pro.

## 1.5.0

*Release Date: 2022-04-11*

**Added**

- Added the Cookie control.
- Added information icons to all visibility controls with links to [Knowledge Base](https://blockvisibilitywp.com/knowledge-base/).

**Changed**

- Pro now requires Block Visibility 2.4.0 or greater.
- Increased WordPress version requirement from 5.5 to 5.9. This is required so the plugin can take advantage of new WordPress features.
- Removed tip/information modals from Editor. Information icons now direct users to the corresponding [Knowledge Base](https://blockvisibilitywp.com/knowledge-base/) pages.
- Removed custom SearchControl component in favor of native WordPress component.

**Fixed**

- Fixed PHP warning on the Widgets screen. ([#25](https://github.com/ndiego/block-visibility/issues/25))

## 1.4.0

*Release Date: 2021-12-16*

**Added**

- Visibility Presets: Added the ability to show a block if At least one, All, or No presets apply.
- Visibility Presets: Added the ability to hide a block based on selected presets.
- Added the ability to disable local block controls.

**Changed**

- Pro now requires Block Visibility 2.3.0 or greater.
- Rule sets now support a custom rule label.

**Fixed**

- Individual control settings and data are only fetched from the REST API when the control is actually enabled to improve performance.
- Fix fatal error when current user’s roles cannot be fetched due to third-party plugin conflict.
- Fixed incorrect documentation URLs.

## 1.3.2

*Release Date: 2021-11-04*

**Changed**

- Super Admins in multisite installs can now edit Visibility Presets without having to be administrators on each site.

**Fixed**

- Fixed the ordering of posts in the Location control multi-select fields.
- Fixed bug in fetching hierarchical post types with both parent and child posts. Thanks, Jason for discovering this issue and opening a support ticket!

## 1.3.1

*Release Date: 2021-11-02*

**Changed**

- Changed how user roles are checked in the Block Editor for Visibility Presets due to a potential bug in the WordPress function 
```
canUser()
```

. Will revert this change in the future should the issue be identified and resolved.

## 1.3.0

*Release Date: 2021-10-2*9

**Added**

- Added the [Visibility Presets](https://blockvisibilitywp.com/knowledge-base/guide-to-visibility-presets/) control type and the corresponding Preset Manager.
- Added the visibility_preset custom post type (CPT). This CPT is hidden and only accessible through the Preset Manager.
- Using presets, multiple [control sets](https://blockvisibilitywp.com/knowledge-base/guide-to-visibility-controls-and-control-sets/) are now possible which enables “OR” conditions.

**Changed**

- Minor user interface enhancements.

## 1.2.4

*Release Date: 2021-10-20*

**Changed**

- When a page is set as the “Posts Page”, it is now disabled as a selectable page the Location control. The Posts Page should be targeted directly.
- The configured “Front Page” and “Posts Page” are now denoted in the Page selector in the Location control.

**Fixed**

- Fixed bug in the Location control when using the Archive Type rule and attempting to target the Posts page. Thanks, Paul for discovering this issue and opening a support ticket!

## 1.2.3

*Release Date: 2021-10-05*

**Fixed**

- Fixed bug in the Location control when using the Post Type rule. Thanks, Paul for discovering this issue and opening a support ticket!

## 1.2.2

*Release Date: 2021-09-26*

**Fixed**

- Fixed bug caused by admin scripts being enqueued during DOING_AJAX. Thanks, Ted for discovering this issue and opening a support ticket!

## 1.2.1

*Release Date: 2021-09-18*

**Fixed**

- Fixed bug in the Metadata control frontend test.

## 1.2.0

*Release Date: 2021-09-15*

**Added**

- Added time-base Customer History rules to the [WooCommerce](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-woocommerce-control/) control.
- Added support for variable pricing in the WooCommerce control.
- Added time-base Customer History rules to the [Easy Digital Downloads](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-easy-digital-downloads-control/) control.
- Added support for variable pricing in the Easy Digital Downloads control.
- Added the [Metadata](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-metadata-control/) control.
- Added the ability to copy/import visibility settings between blocks.
- Added post hierarchy and relative hierarchy rules to the [Location](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-location-control/) control.

**Changed**

- Refactored all rule and rule set functionality.

**Fixed**

- Fixed occasion bug in license activation checks.
- Fixed issue with the translation file.

## 1.1.0

*Release Date: 2021-07-28*

**Added**

- Added the [URL Path](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-url-path-control/) control.
- Added the [Browser & Device](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-browser-device-control/) control.

**Fixed**

- Fixed bug with the WooCommerce product inventory rule test.
- Fixed bug in license activation function that would cause activation to fail if the user also has EDD Software Licensing active on their website.
- Fixed display logic in rule sets that caused a bug when an individual rule set was disabled by a user.
- Fixed Pro Support link in settings masthead.
- Fixed incorrect text domains in plugin settings.
- Fixed styling bugs in the Referral Source control UI.

## 1.0.1

*Release Date: 2021-06-18*

**Added**

- Added preliminary support for Block Visibility Pro on the new block-based Widgets screen, the new Widget pane in the customizer, and the experimental Navigation screens added by Gutenberg.

## 1.0.0

*Release Date: 2021-06-08*

- Initial Release ????

---

## How to Use the Referral Source Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-referral-source-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-referral-source-control/)

## Control Overview

The Referral Source control allows you to configure block visibility based on the referral source URL. You can restrict visibility by specific domains, complete URLs, or URL fragments. You can also display dynamic content as users navigate between pages on your own website.

### Usage Examples

There are many applications for the Referral Source control. Here are a few examples to get you started.

- Display unique promotions to website visitors arriving from specific domains.
- Display dynamic messaging to users depending on how they navigate through your own website. For example, if a user navigates back to the homepage from the shopping cart page, perhaps prompt them with a message like: “Do you need any help completing your order?”
- When visitors from social media websites arrive at your site, prompt them to “like” and “share” your content.

## Configuration

### How to Enable

Click on any block in the Block Editor and navigate to the Visibility panel. You will notice an ellipsis icon in the Controls Toolbar. See the screenshot below. Click on the ellipsis, and all available visibility controls will appear. Select “Referral Source” and the Referral Source control panel will be added to the selected block.

![Enabling the Referral Source control in Block Visibility Pro.](https://blockvisibilitywp.com/wp-content/uploads/2021/06/Referral-Source.jpg)Enabling the Referral Source control in the block settings sidebar (v1.9)

### How to Configure

Instructions are always better with examples. Let’s assume you own a hotel. On your website, you want to encourage visitors from Expedia.com to book directly, which will save you on fees. You have created your call to action, and now you need to configure the block to be visible if the user is visiting from “expedia.com”.

#### Steps to Complete

1. Navigate to the Referral Source control settings in the Visibility panel.
2. Navigate to the [Referral URL Contains](#referral-url-contains) text area.
3. Add “expedia.com”.

The resulting configuration should resemble the screenshot below.

![Configuring the Referral Source control in Block Visibility Pro.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Referral-Source-Configure.jpg)Configuring the Referral Source control (v1.9)

### How to Disable

If you would like to disable the Referral Source control at the block level, simply click on the ellipsis icon in the Controls Toolbar and deselect it. That said, if you don’t think you will need this control on your website at all, it can be disabled globally in the [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/).

Note that if this control is disabled globally, any blocks that are actively being hidden by the Referral Source control will become visible again.

## Control Settings

Below are the setting available to the Referral Source control. For the control to work properly, only enter one value per line in each textbox.

### Referral URL Contains

The block will only be shown if the referral source URL contains at least one of the provided values.

### Referral URL Does Not Contain

The block will be hidden whenever at least one of the provided values is present in the referral source URL. The “Does Not Contain” values take precedence over the “Contains” values when determining block visibility.

### Show if no referral URL

Sometimes a referral source URL will not be available. There are a number of reasons for this. Click the learn more link below for more information. This setting allows you to decide what should happen if a referral source URL is not available. By default, the block will be hidden if the Referral Source control is enabled.

## Limitations

Detecting the domain referrer URL can be tricky. There are instances when the referrer will not be detected, or the browser will prevent it from being detected. If your referral condition is not working for a specific block, it might be due to one of the following reasons.

#### HTTPS → HTTP

The Referral control will not work if the referral source uses HTTPS protocol and your website is not secure and only uses HTTP. If this is the case, we recommend creating a custom link and using the [Query String](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-query-string-control/) control. Below is a quick reference guide.

- HTTPS → HTTP – Will **not** work
- HTTPS → HTTPS – Should work
- HTTP → HTTP – Should work

#### rel Link Attributes

Some websites choose not to pass on referral information. This can be done by adding the 
```
rel="noreferrer"
```

 attribute to any link. If you’re having trouble, double-check the link markup on the referring site to ensure this attribute is not set. If it is, you will need to request the website admin to remove it or consider using the [Query String](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-query-string-control/) control instead.

#### URL Shorteners

Double-check that the referral URL that you have set is actually the correct referral URL. Some websites, notably social media sites like Twitter, use URL shorteners. So while you might think that setting 
```
twitter.com
```

 would display the block to all visitors from Twitter. You actually want to use 
```
t.co
```

.

#### Can’t Detect the HTTP Referrer?

If the block cannot detect the referral URL due to one of the above reasons, The Referral control includes the option to Show if there is no referral URL. You can toggle this option on and off at the block level. This gives you a fallback option if the referral URL can’t be detected.

---

## How to Use the Location Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-location-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-location-control/)

## Control overview

The Location control allows you to conditionally show or hide content based on where the block is located on your website and the attributes of its location. For example, you could limit block visibility based on a post’s categories and tags, or you could display specific content depending on the author of the post.

This control was built with block themes in mind. If you use a theme that supports the Site Editor, you will be able to unlock the true potential of the Location control. Similarly, you can dynamically control widgets in the [block-based widget editor](https://make.wordpress.org/core/2021/06/29/block-based-widgets-editor-in-wordpress-5-8/) screen available in WordPress 5.8+.

### Usage examples

There are many applications for the Location control. Here are a few examples to get you started.

- Display unique calls to action or advertisements depending on a post’s category with the [Post Taxonomy](#post-taxonomy) rule.
- Assume your theme registers a sidebar widget area. Using the block-based Widget Editor, display a related posts block on all posts but hide the block on other post types with the [Post Type](#post-type) rule.
- In the Site Editor or within a Query block, display a default featured image if the post does not have one set with the [Featured Image](#featured-image) attribute rule.
- Using the Site Editor, display different navigation blocks depending on the current page of your website with the [Post](#post) rule. For example, you could hide your main navigation on the checkout page of your online store.
- Using the Site Editor and the [Archive](#archive) rule, dynamically display a call to action in an archive template depending on a specific taxonomy. Say you have a post category called “Tutorials.” On the “Tutorials” archive page, create a banner to promote your video tutorials on YouTube.

## Configuration

### How to enable

Click on any block in the Block Editor and navigate to the Visibility panel in the Settings Sidebar. Depending on your plugin settings, you will see either a vertical ellipsis or a plus icon. See the screenshot below. Click on the icon and select **Location**. The Location control panel will be added to the selected block.

![](https://blockvisibilitywp.com/wp-content/uploads/2021/06/location-configuration-x2.png)Enabling the Location control in the block settings sidebar (v1.9)

### How to configure

The Location control uses rules and rule sets to determine whether the block should be visible. Below is a thorough overview of [each available rule](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-woocommerce-control/#rules-and-rule-sets).

Let’s configure the block to be visible if the current post has the category “Tutorials” AND the post was written by “Nick Diego.”

#### Steps to complete

1. Navigate the Location control settings in the Visibility panel.
2. Select “Post Taxonomy” from the rule selector.
3. Choose “Category” from the taxonomy selector.
4. Select “Is at least one of the selected” from the condition selector.
5. Choose “Tutorials” from the terms selector.
6. Click on the “Add rule” button to add a second rule.
7. Choose “Author” from the rule selector.
8. Select “Is any of the selected” from the condition selector.
9. Choose “Nick Diego” from the author selector.

The resulting configuration should resemble the screenshot below.

![](https://blockvisibilitywp.com/wp-content/uploads/2021/06/location-configuration-taxonomy-x2.png)Configuring the Location control (v3.6.0)

### Terminology and notes

When working with the Location control, you will see many references to the term “post”, particularly in the rules detailed below. This can be confusing, so we want to clearly detail the terminology here. In short, “post” generally refers to any page, post, or custom post type on your site. Third-party plugins often add custom post types. For example, WooCommerce adds the products custom post type.

### How to disable

If you want to disable the Location control at the block level, click on the vertical ellipsis icon in the toolbar and deselect it. The control can also be disabled globally in the plugin’s [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/).

Note that if this control is disabled globally, any blocks that are actively being hidden by the Location control will become visible again.

## Rules and rule sets

Similar to other controls in Block Visibility, the Location control is powered by rules and rule sets. All rules within a rule set must be satisfied for the selected block to be visible. However, you can also create multiple rule sets. Only one rule set needs to apply for the block to be visible.

**Within** a rule set, you are creating AND conditions between multiple rules. **Between** two rule sets, you are creating OR conditions.

Rule errors can occur, for example, if rule inputs are not completely filled out or if the rule is based on a product that has since been deleted from your store. In these situations, the plugin defaults to showing the block unless other rules apply, which would hide the block.

![](https://blockvisibilitywp.com/wp-content/uploads/2021/06/location-configuration-rule-set-x2.png)Location rules and rule sets in the block settings sidebar (v3.6.0)

### Type rules

The Type category currently has only one rule. In the future, expect more options related to the Site Editor, such as rules based on templates and template parts.

#### Page Type

The Page Type rule should not be confused with the Post Type rule detailed below. This rule allows you to conditionally display block content based on a set of conditionals that define how the current page is used and/or what it is.

The available conditions are:

- Front Page (Homepage) – The page configured in the WordPress admin [Reading Settings](https://wordpress.com/support/settings/reading-settings/).
- Posts Page (Blog page) – The page configured in the WordPress admin [Reading Settings](https://wordpress.com/support/settings/reading-settings/).
- Singular Page – Is the current page a single post?
- Archive Page – Is the current page an archive?
- Search Page – Is the current page a search results page?
- 404 Page – Is the current page a 404 page?

### Post rules

The following rules pertain to post types, taxonomies, and individual posts. As a reminder, posts here refer to native posts, pages, and any custom post types on your website.

#### Post Type

This rule lets you conditionally display block content based on the post type of the current post. This rule shines when used in conjunction with page templates and template parts in the Site Editor.

#### Post Taxonomy

This rule lets you conditionally display block content based on the taxonomy terms of the current post. First, choose the taxonomy and then include or exclude individual taxonomy terms. For example, you would use this rule if you only wanted to show a block if the current post had a specific category.

If you want to display blocks only on taxonomy archives, use the Archive Type rule detailed below.

#### Post

This rule lets you conditionally display block content on specific posts. You first choose the post type and then include or exclude individual posts.

#### Post ID

This rule lets you conditionally display block content based on the ID of the current post. You can also set multiple IDs.

### Post attribute rules

Attribute rules enable conditional block visibility based on various post *attributes*. Does the post have comments? Is there a featured image set? Who is the post author? Is the post hierarchical, and does it have child posts? The list goes on.

#### Author

Display blocks based on the current post’s author or if the current user is the post’s author.

#### Featured Image

Display blocks based on whether the current post has a featured image or not. The available options are:

- Post has a featured image
- Post has no featured image

#### Excerpt

Display blocks based on whether an excerpt has been set or not. The available options are:

- Post has an excerpt
- Post has no excerpt

#### Comments

This rule lets you conditionally display block content based on the existence or a specific number of user comments. The available options are:

- Post has comments
- Post has no comments
- Comment count.

#### Hierarchy

This rule lets you display content based on the hierarchy of the current post and only works for hierarchical post types. The available options are:

- Top level page (no parent)
- Parent page (has children)
- Child Page (has a parent)

This rule pairs nicely with page templates. There are many situations where you may want to display specific blocks on child pages versus parent pages.

#### Relative Hierarchy

This rule lets you display content based on the relative hierarchy of the current post and only works for hierarchical post types. The available options are:

- Is a parent of
- Is not a parent of
- Is a child of
- Is not a child of

#### Supports

This rule lets you display content based on what the current post type supports. It’s a convenient rule to use in post templates or Query blocks. The available options are:

- Comments
- Excerpts
- Featured Images

### Archive rules

The Location control currently contains two rules for configuring archive-based conditional visibility. To get the most out of these controls, you will need to use the Site Editor or the block-based Widget Editor.

#### Archive Type

This rule allows you to conditionally display block content on archive pages based on the archive *type*. The type includes the post types and taxonomies, as well as author and date archives.

#### Archive

This rule provides more control than the Archive Type control detailed above. It allows you to conditionally display block content in archives based on individual taxonomy terms and specific authors.

### Taxonomy attribute rules

The Location control currently contains three rules for configuring block visibility based on taxonomy archive attributes. To get the most out of these controls, you will need to use the Site Editor or the block-based Widget Editor.

#### Term Hierarchy

This rule lets you display content based on the hierarchy of the taxonomy associated with the current archive template. It only works for hierarchical taxonomies, like post categories. The available options are:

- Top level page (no parent)
- Parent page (has children)
- Child Page (has a parent)

#### Relative Term Hierarchy

This rule lets you display content based on the relative hierarchy of the taxonomy associated with the current archive template. It only works for hierarchical taxonomies, like post categories, and only evaluates direct parents and children. Grandparents and grandchildren will be evaluated as 
```
false
```

. The available options are:

- Is a parent of
- Is not a parent of
- Is a child of
- Is not a child of

#### Supports

This rule lets you display content based on what the current taxonomy supports. The available options are:

- Term hierarchy

### Hide when rules apply

The block will be visible if the applied rules are satisfied by default. Simply toggle the “Hide when rules apply” setting to hide the block instead.

---

## How to Use the Easy Digital Downloads Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-easy-digital-downloads-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-easy-digital-downloads-control/)

## Control Overview

Built exclusively for the [Easy Digital Downloads](https://easydigitaldownloads.com/) plugin, this control allows you to create dynamic block content based on a variety of [store-related rules](#rules-and-rule-sets). From the quantity of downloads in a customer’s cart to their total lifetime spend in your store, there is no easier way to personalize the shopping experience. Additional highlights include:

- 16 conditional visibility rules and counting
- Full support for products with variable pricing

While eCommerce personalization is not a new concept, the Easy Digital Downloads control in Block Visibility allows you to work seamlessly in the Block Editor with blocks you are already familiar with. There is no external content editor or interface to deal with. If you are looking to increase sales and improve customer engagement while using native Gutenberg blocks for messaging, this is the solution for you!

### Usage Examples

There are many applications for the Easy Digital Downloads control. Here are a few examples to get you started.

- Recommend additional downloads at checkout based on what items the customer has already added to their cart with the [Cart Contents](#cart-contents) rule.
- Reward loyal customers with a special coupon based on how much they have spent in your store with the [Total Spent](#total-spend) rule.
- Recommend new downloads, or entice customers to upgrade based on downloads they have ordered in the past with the [Quantity of Products Ordered](#quantity-of-products-ordered) rule.
- Display messaging to all customers that have not purchased a product in the last year with the [Time Since Order](#time-since-order) rule.

## Configuration

### How to Enable

Begin by installing and activating the [Easy Digital Downloads](https://wordpress.org/plugins/easy-digital-downloads/) plugin. The control will not be available if the plugin is inactive.

Click on any block in the Block Editor and navigate to the Visibility panel. You will notice a vertical ellipsis icon in the Controls Toolbar. See the screenshot below. Click on the ellipsis, and all available visibility controls will appear. Select “Easy Digital Downloads” to add the Easy Digital Downloads control panel to the selected block.

![Enabling the Easy Digital Downloads control in Block Visibility Pro.](https://blockvisibilitywp.com/wp-content/uploads/2021/06/EDD-Enable.jpg)Enabling the Easy Digital Downloads control in the block settings sidebar (v1.9)

### How to Configure

Instructions are always better with examples. Let’s configure the block to be visible if the current customer has spent more than $1000 in your Easy Digital Downloads store **and** they have completed 2 or more separate orders.

*The Easy Digital Downloads control uses rules and rule sets to determine if the block should be visible. A thorough overview of each available rule is provided below.*

#### Steps to Complete

1. Navigate to the Easy Digital Downloads control settings in the Visibility panel.
2. Choose “Total Spent” from the rules selector.
3. Choose “Is greater than” from the condition selector.
4. Enter 1000 in the value field.
5. Click on the “Add rule” button to add a second rule.
6. Choose “Total Orders” from the rules selector.
7. Choose “Is greater or equal to” from the condition selector.
8. Enter 2 in the value field.

The resulting configuration should resemble the screenshot below.

![Configuring the Easy Digital Downloads control in Block Visibility Pro.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/EDD-Configure.jpg)Configuring the Easy Digital Downloads control (v1.9)

### How to Disable

If you would like to disable the Easy Digital Downloads control at the block level, simply click on the ellipsis icon in the “Controls” toolbar and deselect it. The control can also be disabled globally in the plugin’s [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/).

Note that if this control is disabled globally or the Easy Digital Downloads plugin is deactivated, any blocks that are actively being hidden by the Easy Digital Downloads control will become visible again.

## Rules and Rule Sets

Similar to other controls, rules and rule sets power the Easy Digital Downloads control. A “rule” is simply a conditional. A “rule set” is a collection of rules.

All rules within a rule set must be satisfied for the selected block to be visible. However, you can create multiple rule sets. Only one rule set needs to apply for the block to be visible.

**Within** a rule set, you are creating AND conditions between multiple rules. **Between** two rule sets, you are creating OR conditions.

There are instances when rule errors can occur. This can happen when rule inputs are not completely filled out or if the rule is based on a product that has since been deleted from your store. In these situations, the plugin defaults to showing the block unless other rules apply, which would hide the block.

![Adding a rule to the Location control in Block Visibility Pro.](https://blockvisibilitywp.com/wp-content/uploads/2021/06/EDD-Rule-Sets.jpg)Easy Digital Downloads rules and rule sets in the block settings sidebar (v1.9)

### Cart Rules

The Easy Digital Downloads control contains a robust set of cart-based rules which are perfect for providing up-sells, product recommendations, and more.

#### Cart Contents

This rule evaluates the contents of your Easy Digital Downloads cart. Is the cart empty or not? Does the cart contain specific products or products with specific categories?

The available sub-fields are:

- Is empty
- Is not empty
- Contains (Products) – Contains specific products
- Contains (Categories) – Contains products with specific categories

If **Contains (Products)** or **Contains (Categories)**are selected, you will be presented with your choice of condition, and then you will choose the specific products or categories for the rule to evaluate.

The available conditions are:

- At least one of the selected – At least one of the selected products or categories is present in the cart.
- All of the selected – All of the selected products or categories are present in the cart. There could be additional products and categories as well.
- None of the selected – None of the selected products or categories are present in the cart.

#### Total Products in Cart

This rule evaluates the total number of products in your Easy Digital Downloads cart. The total includes the number of each product, not just the number of unique products in your cart.

**Example**

Assume the cart contained 2 Music Albums and 3 Individual Music Track downloads, the **Total Products in Cart** would be 5.

#### Total Cart Value

This rule evaluates the total value of all products in your Easy Digital Downloads cart.

#### Quantity of Product in Cart

This rule evaluates the total quantity of specific products in your Easy Digital Downloads cart. You can select multiple products, but the quantity value is evaluated per product and must be satisfied for all products for the rule to pass.

**Example**

Assume the cart contained 2 Music Albums and 3 Music Track downloads.

You choose both **Music Albums** and **Music Track** in the product selector and set the rule to **Is greater than** a quantity of **2**. In this case the rule would fail and the block would not be shown. There is exactly 2 Music Albums in the cart, not more than 2.

Instead, if you only chose **Music Track** in the product selector and set the rule to **Is greater than** a quantity of **2**, the block would be shown. Given this setup, we don’t care how many other products there are, only the number of Music Tracks.

#### Quantity of Category in Cart

This rule evaluates the total quantity of products in a specific category in your Easy Digital Downloads cart. You can select multiple categories, but the quantity value is evaluated per category and must be satisfied for all categories for the rule to pass. In other words, the quantity value applies to the number of products in each category, not total products across all categories.

**Example**

Assume there are 2 Music Albums, 3 Music Tracks, 2 Images and 1 Video download in the cart. The albums and tracks are part of the Music category and the images and video are part of the Media category.

You choose both **Music** and **Media** in the category selector and set the rule to **Is greater than** a quantity of **4**. In this case the rule would fail and the block would not be shown. There are only a total of 3 products (2 Images and 1 Video) in the cart from the category Media, not 4.

Instead, if you only chose **Music** in the product selector and set the rule to **Is greater than** a quantity of **4**, the block would be shown. Given this setup, we don’t care how many other products there are, only the number of products from the category of Music.

### Customer History

Customer History rules require the customer to be logged-in to function. If the customer is not logged-in, and such rules are applied to the block, the rules will fail causing the block to be hidden.

#### Total Spend

This rule evaluates the total lifetime spend of the logged-in customer in your Easy Digital Downloads store.

#### Average Order Value

This rule evaluates the average order value of the logged-in customer in your Easy Digital Downloads store.

#### Total Orders

This rule evaluates the total number of orders made by the logged-in customer in your Easy Digital Downloads store.

#### Quantity of Products Ordered

This rule evaluates the total quantity of specific products that the current logged-in customer purchased from your Easy Digital Downloads store. You can select multiple products, but the quantity value is evaluated per product and must be satisfied for all products for the rule to pass.

**Example**

Assume the customer ordered 2 Music Albums and 3 Music Track downloads.

You choose both **Music Albums** and **Music Track** in the product selector and set the rule to **Is greater than** a quantity of **2**. In this case the rule would fail and the block would not be shown. The customer purchase exactly 2 Music Albums, not more than 2.

Instead, if you only chose **Music Track** in the product selector and set the rule to **Is greater than** a quantity of **2**, the block would be shown. Given this setup, we don’t care how many other products there are, only the number of Music Tracks.

#### Quantity of Category Ordered

This rule evaluates the total quantity of products in a specific category that the current logged-in customer purchased from your Easy Digital Downloads store. You can select multiple categories, but the quantity value is evaluated per category and must be satisfied for all categories for the rule to pass. In other words, the quantity value applies to the number of products in each category. It does not count the total products across all categories.

**Example**

Assume that the customer purchased 2 Music Albums, 3 Music Tracks, 2 Images and 1 Video download. The albums and tracks are part of the Music category and the images and video are part of the Media category.

You choose both **Music** and **Media** in the category selector and set the rule to **Is greater than** a quantity of **4**. In this case the rule would fail and the block would not be shown. The customer only purchased a total of 3 products (2 Images and 1 Video) from the category Media, not more than 4.

Instead, if you only chose **Music** in the product selector and set the rule to **Is greater than** a quantity of **4**, the block would be shown. Given this setup, we don’t care how many other products there are, only the number of products from the category of Music.

#### Time Since Order

This rule evaluates the total number of days since the customer’s first, or last, completed order of any product in your Easy Digital Downloads store.

#### Time Since Product Ordered

This rule evaluates the total number of days since the customer’s first, or last, completed order of a specific product from your Easy Digital Downloads store. You can select multiple products, but the number of days is evaluated per product and must be satisfied for all products for the rule to pass.

#### Time Since Category Ordered

This rule evaluates the total number of days since the customer’s first, or last, completed and order of products in a specific category from your Easy Digital Downloads store. You can select multiple categories, but the number of days is evaluated per category and must be satisfied for all categories for the rule to pass.

#### Date of Order

This rule evaluates when the customer’s first, or last, completed an order of any product in your Easy Digital Downloads store.

#### Date of Product Ordered

This rule evaluates when the customer’s first, or last, completed an order of a specific product from your Easy Digital Downloads store. You can select multiple products, but the order date is evaluated per product and must be satisfied for all products for the rule to pass.

#### Date of Category Ordered

This rule evaluates when the customer’s first, or last, completed an order of products in a specific category from your Easy Digital Downloads store. You can select multiple categories, but the order date is evaluated per category and must be satisfied for all categories for the rule to pass.

### Hide When Rules Apply

By default, the block will be visible if the applied rules are satisfied. Simply toggle the “Hide when rules apply” setting to hide the block instead.

---

## How to Use the WooCommerce Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-woocommerce-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-woocommerce-control/)

## Control Overview

Built exclusively for the [WooCommerce](https://woocommerce.com/) plugin, this control allows you to create dynamic block content based on a variety of [store-related rules](#rules-and-rule-sets). From the quantity of products in a customer’s cart to their total lifetime orders in your store, there is no easier way to personalize the shopping experience. Additional highlights include:

- 18 conditional visibility rules and counting
- Full support for products with variable pricing

While eCommerce personalization is not a new concept, the WooCommerce control in Block Visibility allows you to work seamlessly in the Block Editor with blocks you are already familiar with. There is no external content editor or interface to deal with. If you are looking to increase sales and improve customer engagement while using native Gutenberg blocks for messaging, this is the solution for you!

### Usage Examples

There are many applications for the WooCommerce control. Here are a few examples to get you started.

- Recommend additional products at checkout based on what items the customer has already added to their cart with the [Cart Contents](#cart-contents) rule.
- Reward loyal customers with a special coupon based on how much they have spent in your store with the [Total Spent](#total-spend) rule.
- Dynamically display a “Free Shipping” message at checkout based on the total value of the shopping cart with the [Total Cart Value](#total-cart-value) rule.
- Display a custom message when a product is out of stock with the [Product Inventory](#product-inventory) rule.
- Combine with the [Date & Time](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-date-time-control/) control to run a timed promotion where customers are encouraged to purchase a specific product. You could then dynamically hide the promotion when the product inventory reaches a specific value with the [Amount of Product in Stock](#amount-of-product-in-stock) rule to avoid oversells.
- Display messaging to all customers that have not purchased a product in the last year with the [Time Since Order](#time-since-order) rule.

## Configuration

### How to Enable

Begin by installing and activating the [WooCommerce](https://wordpress.org/plugins/woocommerce/) plugin. The control will not be available if the plugin is inactive.

Click on any block in the Block Editor and navigate to the Visibility panel. You will notice an ellipsis icon in the Controls Toolbar. See the screenshot below. Click on the ellipsis, and all available visibility controls will appear. Select “WooCommerce” to add the WooCommerce control panel to the selected block.

![WooCommerce control in the block settings sidebar (v1.9)](https://blockvisibilitywp.com/wp-content/uploads/2021/05/WooCommerce-Configure.jpg)WooCommerce control in the block settings sidebar (v1.9)

### How to Configure

Instructions are always better with examples. Let’s configure the block to be visible if the current customer has spent more than $1000 in your WooCommerce store **and** they have completed 2 or more separate orders.

*The WooCommerce control uses rules and rule sets to determine if the block should be visible. A thorough overview of each available rule is provided below.*

#### Steps to Complete

1. Navigate to the WooCommerce control settings in the Visibility panel.
2. Choose “Total Spent” from the rules selector.
3. Choose “Is greater than” from the condition selector.
4. Enter 1000 in the value field.
5. Click on the “Add rule” button to add a second rule.
6. Choose “Total Orders” from the rules selector.
7. Choose “Is greater or equal to” from the condition selector.
8. Enter 2 in the value field.

The resulting configuration should resemble the screenshot below.

![Configuring the WooCommerce control (v1.9)](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Woo-Configure.png)Configuring the WooCommerce control (v1.9)

### How to Disable

If you would like to disable the WooCommerce control at the block level, simply click on the ellipsis icon in the “Controls” toolbar and deselect it. The control can also be disabled globally in the plugin’s [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/).

Note that if this control is disabled globally or the WooCommerce plugin is deactivated, any blocks that are actively being hidden by the WooCommerce control will become visible again.

## Rules and Rule Sets

Similar to other controls, rules and rule sets power the WooCommerce control. A “rule” is simply a conditional. A “rule set” is a collection of rules.

All rules within a rule set must be satisfied for the selected block to be visible. However, you can create multiple rule sets. Only one rule set needs to apply for the block to be visible.

**Within** a rule set, you are creating AND conditions between multiple rules. **Between** two rule sets, you are creating OR conditions.

There are instances when rule errors can occur. This can happen when rule inputs are not completely filled out or if the rule is based on a product that has since been deleted from your store. In these situations, the plugin defaults to showing the block unless other rules apply, which would hide the block.

![](https://blockvisibilitywp.com/wp-content/uploads/2021/06/WooCommerce-Rule-Set.jpg)WooCommerce rules and rule sets in the block settings sidebar (v1.9)

### Cart Rules

The WooCommerce control contains a robust set of cart-based rules which are perfect for providing up-sells, product recommendations, free shipping notices once the cart value has reached a certain threshold, and more.

#### Cart Contents

This rule evaluates the contents of your WooCommerce cart. Is the cart empty or not? Does the cart contain specific products or products with specific categories?

The available sub-fields are:

- Is empty
- Is not empty
- Contains (Products) – Contains specific products
- Contains (Categories) – Contains products with specific categories

If **Contains (Products)** or **Contains (Categories)**are selected, you will be presented with your choice of condition and then you will choose the specific products or categories for the rule to evaluate.

The available conditions are:

- At least one of the selected – At least one of the selected products or categories is present in the cart.
- All of the selected – All of the selected products or categories are present in the cart. There could be additional products and categories as well.
- None of the selected – None of the selected products or categories are present in the cart.

#### Total Products in Cart

This rule evaluates the total number of products in your WooCommerce cart. The total includes the number of each product, not just the number of unique products in your cart.

**Example**

Assume the cart contained 5 White Shirts and 1 Black Pants. The **Total Products in Cart** would be 6.

#### Total Cart Value

This rule evaluates the total value of all products in your WooCommerce cart.

#### Quantity of Product in Cart

This rule evaluates the total quantity of specific products in your WooCommerce cart. You can select multiple products, but the quantity value is evaluated per product and must be satisfied for all products for the rule to pass.

**Example**

Assume there are 5 White Shirts and 1 Black Pants in the cart.

You choose both **White Shirt** and **Black Pants** in the product selector and set the rule to **Is greater than** a quantity of **2**. In this case the rule would fail and the block would not be shown. There is only one pair of Black Pants in the cart, not 2.

Instead, if you only chose **White Shirt** in the product selector and set the rule to **Is greater than** a quantity of **2**, the block would be shown. Given this setup, we don’t care how many other products there are, only the number of White Shirts.

#### Quantity of Category in Cart

This rule evaluates the total quantity of products in a specific category in your WooCommerce cart. You can select multiple categories, but the quantity value is evaluated per category and must be satisfied for all categories for the rule to pass. In other words, the quantity value applies to the number of products in each category, not the total products across all categories.

**Example**

Assume there are 2 White Shirts, 3 Red Shirts, 2 Blue Pants and 1 Black Pants in the cart. The shirts are part of the Shirts category and the pants are part of the Pants category.

You choose both **Shirts** and **Pants** in the category selector and set the rule to **Is greater than** a quantity of **4**. In this case the rule would fail and the block would not be shown. There are only a total of 3 products (2 Blue Pants and 1 Black Pants) in the cart from the category Pants, not 4.

Instead, if you only chose **Shirts** in the product selector and set the rule to **Is greater than** a quantity of **4**, the block would be shown. Given this setup, we don’t care how many other products there are, only the number of products from the category of Shirts.

### Customer History Rules

Customer History rules require the customer to be logged in to function. If the customer is not logged in, and such rules are applied to the block, the rules will fail, which causes the block to be hidden.

#### Total Spend

This rule evaluates the total lifetime spend of the logged-in customer in your WooCommerce store.

#### Total Orders

This rule evaluates the total unique orders made by the logged-in customer in your WooCommerce store.

#### Average Order Value

This rule evaluates the average order value of the logged-in customer in your WooCommerce store.

#### Quantity of Products Ordered

This rule evaluates the total quantity of specific products that the current logged-in customer purchased from your WooCommerce store. You can select multiple products, but the quantity value is evaluated per product and must be satisfied for all products for the rule to pass.

**Example**

Assume the customer ordered 5 White Shirts and 1 Black Pants.

You choose both **White Shirt** and **Black Pants** in the product selector and set the rule to **Is greater than** a quantity of **2**. In this case the rule would fail and the block would not be shown. The customer only purchased one pair of Black Pants, not 2.

Instead, if you only chose **White Shirt** in the product selector and set the rule to **Is greater than** a quantity of **2**, the block would be shown. Given this setup, we don’t care how many other products there are, only the number of White Shirts.

#### Quantity of Category Ordered

This rule evaluates the total quantity of products in a specific category that the current logged-in customer purchased from your WooCommerce store. You can select multiple categories, but the quantity value is evaluated per category and must be satisfied for all categories for the rule to pass. In other words, the quantity value applies to the number of products in each category, not total products across all categories.

**Example**

Assume the customer purchased 2 White Shirts, 3 Red Shirts, 2 Blue Pants and 1 pair of Black Pants. The shirts are part of the Shirts category and the pants are part of the Pants category.

You choose both **Shirts** and **Pants** in the category selector and set the rule to **Is greater than** a quantity of **4**. In this case the rule would fail and the block would not be shown. The customer only purchased 3 products (2 Blue Pants and 1 Black Pants) from the category Pants, not 4.

Instead, if you only chose **Shirts** in the product selector and set the rule to **Is greater than** a quantity of **4**, the block would be shown. Given this setup, we don’t care how many other products there are, only the number of products from the category of Shirts.

#### Time Since Order

This rule evaluates the total number of days since the customer’s first, or last, completed order of any product in your WooCommerce store.

#### Time Since Product Ordered

This rule evaluates the total number of days since the customer’s first, or last, completed order of a specific product from your WooCommerce store. You can select multiple products, but the number of days is evaluated per product and must be satisfied for all products for the rule to pass.

#### Time Since Category Ordered

This rule evaluates the total number of days since the customer’s first or last completed order of products in a specific category from your WooCommerce store. You can select multiple categories, but the number of days is evaluated per category and must be satisfied for all categories for the rule to pass.

#### Date of Order

This rule evaluates when the customer’s first or last order was completed for any product in your WooCommerce store.

#### Date of Product Ordered

This rule evaluates when the customer’s first or last order was completed for a specific product from your WooCommerce store. You can select multiple products, but the order date is evaluated per product and must be satisfied for all products for the rule to pass.

#### Date of Category Ordered

This rule evaluates when the customer’s first or last order was completed for products in a specific category from your WooCommerce store. You can select multiple categories, but the order date is evaluated per category and must be satisfied for all categories for the rule to pass.

### Product Rules

There are currently two product rules available in the WooCommerce control. These rules allow you to display content based on product inventory and other attributes conditionally. Expect more product rules in the future. That said, if you are looking to display blocks based on product taxonomies, like categories, that functionality already exists in the [Location control](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-location-control/).

Product controls also include the option to “Detect current product”. So, instead of you choosing a product, Block Visibility will attempt to detect the current product if the block has been placed on a single product page, template, or in a Query block.

![How to enable "Detect current user"](https://blockvisibilitywp.com/wp-content/uploads/2023/09/detect-current-product.gif)

#### Product Inventory

This rule evaluates the inventory status of the selected product (in stock, out of stock, on backorder).

#### Amount of Product in Stock

This rule evaluates the total stock quantity of a specific product in your WooCommerce store. You can select multiple products, but the quantity value is evaluated per product and must be satisfied for all products for the rule to pass.

**Example**

Assume there are 5 White Shirts and 1 Black Pants in stock.

You choose both **White Shirt** and **Black Pants** in the product selector and set the rule to **Is greater than** a quantity of **2**. In this case, the rule would fail, and the block would not be shown. There is only one pair of Black Pants in stock, not 2.

Instead, if you only chose **White Shirt** in the product selector and set the rule to **Is greater than** a quantity of **2**, the block would be shown. Given this setup, we don’t care how many other products there are, only the number of White Shirts.

### Hide When Rules Apply

By default, the block will be visible if the applied rules are satisfied. Simply toggle the “Hide when rules apply” setting to hide the block instead.

---

## Frequently Asked Questions

**Source:** [https://blockvisibilitywp.com/knowledge-base/frequently-asked-questions/](https://blockvisibilitywp.com/knowledge-base/frequently-asked-questions/)

## General Questions

**Does this plugin really work with any block? (i.e. What is Full Control Mode?)**

Yes! However, not all block types are enabled by default. Visibility controls are only provided to blocks that can be added directly to a page/post by the block inserter. Therefore, some specialized blocks, such as child blocks, are not included by default. An example is the individual Column block that is part of the larger Columns block.

That said, you can enable [Full Control Mode](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-general-settings/#h-full-control-mode) in the plugin settings. This removes all restrictions and adds visibility controls to every block. You probably will not need Full Control Mode, but it is there if you do.

Furthermore, while this plugin was designed to be compatible with all blocks, the WordPress ecosystem is ever-expanding. If you find a conflict with a certain block, please let us know in the [plugin support forum](https://wordpress.org/support/plugin/block-visibility/), and we will investigate. We are committed to bringing visibility control to every block.

**Can Block Visibility be used with any WordPress theme?**

Yup, this plugin is not theme-specific. You just need to be running the latest version of WordPress (5.5+) and be using the Block Editor. This plugin provides zero functionality to the Classic Editor.

**Will more visibility controls be added in the future?**

Yes, and if you have a specific idea of what you would like to see, please submit a feature request in the [plugin support forum](https://wordpress.org/support/plugin/block-visibility/) on WordPress.org or through the [contact form](https://blockvisibilitywp.com/contact/) on this website.

**Does this plugin work with Full Site Editing and block-based themes?**

As of version 1.4.0, Block Visibility is supported in the Site Editor, which is available when using a block theme. We are committed to ensuring 100% compatibility with all Full Site Editing features. Please let us know in the plugin support forum if you find bugs or compatibility issues.

**Does Block Visibility work with Elementor and other page builders?**

No. Block Visibility was designed specifically for the WordPress Block Editor and therefore does not work on pages that are controlled by the Elementor editor or another page builder. As long as you are editing native WordPress “block” content, Block Visibility will work.

**Is the visibility of blocks controlled using CSS?**

Visibility is controlled primarily on the server, so if a block should be hidden based on the set controls, it will not even be rendered. This ensures the plugin does not load any additional resources on the front end of your site, thereby optimizing performance.

The **one exception** to this is the Screen Size controls. Visibility by screen size requires the use of CSS, which is loaded to the front end of your site if, and only if, these controls are enabled. You can opt to disable this CSS and add the necessary yourself.

---

## How to Use the Advanced Custom Fields Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-advanced-custom-fields-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-advanced-custom-fields-control/)

## Control Overview

Built exclusively for the [Advanced Custom Fields (ACF)](https://www.advancedcustomfields.com/) plugin, this control allows you to create dynamic block content based on ACF fields. There are thousands of applications for the Advanced Custom Fields control. You are only limited by your own creativity and how you have implemented ACF.

Check out the video below for a brief overview of how you can use Block Visibility with the Advanced Custom Fields plugin. Note that this video was recorded in version 1.8. Additional [rule set](#rules-and-rule-sets) functionality was added to the control in version 1.9, but the overall functionality is the same.

## Configuration

### How to Enable

Begin by installing and activating the [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/) plugin. The control will not be available if the plugin is inactive.

Click on any block in the Block Editor and navigate to the Visibility panel. You will notice a vertical ellipsis icon in the Controls Toolbar. See the screenshot below. Click on the ellipsis, and all available visibility controls will appear. Select “Advanced Custom Fields” to add the Advanced Custom Fields control panel to the selected block.

![Enabling the Advanced Custom Fields control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/ACF-Enable.jpg)Enabling the Advanced Custom Fields control in the block settings sidebar (v1.9)

### How to Configure

Instructions are always better with examples. Let’s assume that you have an ACF field group entitled “Event”. Each event can have a number of fields, including “Start Date” and “Featured”. You want to configure a block to be visible if the start date occurs in 2021 and the current event is a “Featured” event.

*The Advanced Custom Fields control uses rules and rule sets to determine if the block should be visible. A thorough overview of how this works is provided below.*

#### Steps to Complete

1. Navigate to the Advanced Custom Fields control settings in the Visibility panel.
2. Click on the rules selector and then choose “Featured” from the list of field options.
3. Choose “Has any value” from the condition selector.

*Note that the “Featured” field is a boolean. When it’s set to false, the field value is evaluated as empty and, therefore, has no value. Pay close attention to the field types when setting up your rules.*

1. Next, click on the “Add rule” button to add a second rule.
2. Click on the rules selector and then choose “Start Date” from the list of field options.
3. Choose “Value contains” from the condition selector.
4. Enter 2021 in the value field.

The resulting configuration should resemble the screenshot below.

![Configuring the Advanced Custom Fields control in Block Visibility Pro.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/ACF-Configure.jpg)Configuring the Advanced Custom Fields control (v1.9)

### Known limitations

**Field evaluation**

The ACF control only evaluates fields stored on the current post/page/custom post type, or you can optionally evaluate user fields. Fields stores on site-wide options pages cannot (currently) be evaluated using the ACF control in Block Visibility.

**Previewing changes**

At the top of the editor, there is a preview button that will open the page/post in a new window. It is not (currently) possible to accurately fetch ACF fields on a “preview” page. Therefore, the ACF visibility conditions may appear to not be working. But don’t worry. If you view the actual page on the front end of your site, all block conditions will function as you expect.

### How to Disable

If you would like to disable the Advanced Custom Fields control at the block level, simply click on the ellipsis icon in the “Controls” toolbar and deselect it. The control can also be disabled globally in the plugin’s [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/).

Note that if this control is disabled globally or the Advanced Custom Fields plugin is deactivated, any blocks that are actively being hidden by the Advanced Custom Fields control will become visible again.

## Rules and Rule Sets

Similar to other controls, rules and rule sets power the Advanced Custom Fields control. A “rule” is simply a conditional. A “rule set” is a collection of rules.

All rules within a rule set must be satisfied for the selected block to be visible. However, you can create multiple rule sets. Only one rule set needs to apply for the block to be visible.

**Within** a rule set, you are creating AND conditions between multiple rules. **Between** two rule sets, you are creating OR conditions.

There are instances when rule errors can occur. This can happen when rule inputs are not completely filled out or if the rule is based on a product that has since been deleted from your store. In these situations, the plugin defaults to showing the block unless other rules apply, which would hide the block.

![Adding a rule to the Advanced Custom Fields control in Block Visibility Pro.
](https://blockvisibilitywp.com/wp-content/uploads/2021/07/ACF-Rule-Sets.jpg)Advanced Custom Fields rules and rule sets in the block settings sidebar (v1.9)

### ACF Rules

Rules in the Advanced Custom Fields control are unique from other controls in Block Visibility in that they are themselves dynamic. The available ACF rules depend on the fields and field groups that you have set up in the Advanced Custom Fields plugin.

When a specific field is selected, you will then have the choice of 10 operators. These include:

- Has any value
- Has no value
- Value is equal to
- Value is not equal to
- Value is greater than
- Value is greater than or equal to
- Value is less than
- Value is less than or equal to
- Value contains
- Value does not contain

Once the operator is selected, you then enter the value to test the field against.

### Hide When Rules Apply

By default, the block will be visible if the applied rules are satisfied. Simply toggle the “Hide when rules apply” setting to hide the block instead.

---

## How to Use the Hide Block Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-hide-block-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-hide-block-control/)

## Control Overview

The Hide Block control allows you to completely hide **any** block in WordPress from public view. It was one of the first controls included in Block Visibility, all the way back in version 1.0.0. This functionality is what inspired the plugin’s name.

### Usage Examples

Content management is the best application for the Hide Block control. It creates an entirely new workflow in WordPress that you will not want to live without after you’ve grown accustomed to it. Hopefully, the two examples below illustrate just how powerful the Hide Block control can be. In fact, the second example was the real-life inspiration for the entire Block Visibility plugin.

#### Create new content for an already published page or post

As a WordPress user, you have likely run into the following issue.

*Assume you have a page that is already published, but you need to make edits to it. You can’t set the page to “draft” while you are making your edits because it’s an important page that needs to remain live. And what if you have lots of edits to make that need to be reviewed by others?*

Without the Hide Block control, you would have to make all your edits in one go. There is no way in WordPress core to save your pending edits without making them live. But you have installed Block Visibility. Now you can “hide” any incomplete blocks or groups of blocks and save the page. The public will be none the wiser!

#### Temporarily hide content that you will need again in the future

The example frequently happens with businesses using WordPress. Let’s assume you operate a hotel website that has a page dedicated to upcoming events. Christmas and New Year’s have just passed, so you need to remove that holiday content from the upcoming events page.

It would be simple enough to just delete the relevant blocks. But what if next year’s holiday content will be very similar? Recreating it will be very annoying. What if you could just “hide” the blocks instead? Then the following year, all you need to do is tweak the content and “un-hide” it. The Hide Block control to the rescue!

## Configuration

### How to Enable

The Hide Block control is automatically enabled on all blocks that also have the Visibility panel enabled.

### How to Configure

The Hide Block control is unique in that it can be configured in two ways, the traditional Settings Sidebar as well as the Block Toolbar.

#### Sidebar Control

Click on any block in the Block Editor and navigate to the Visibility panel in the Settings Sidebar. You will notice the Hide Block control located right at the top. See the screenshot below. As mentioned above, this control is enabled by default for all blocks.

![Configuring the Hide Block control in the block settings sidebar in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/03/Hide-Block.jpg)Hide Block control in the block settings sidebar (v1.7)

Click the toggle to “hide” the selected block on the front end of your website. The block will be hidden for everyone, including Administrators and other logged-in users.

Note that the Hide Block control takes precedence over all other visibility controls. If activated, the block will be completely hidden from the public.

#### Toolbar Control

Unlike all other controls in Block Visibility, the Hide Block control can also be accessed in the toolbar of each block. This will streamline your workflow if you are using it for content management. See the screenshot below.

![Show or hide the block using the Hide Block control in the block toolbar.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Hide-Block-Toolbar.jpg)Hide Block control in the block toolbar (v1.9)

### How to Disable

The Hide Block control is unique from all other visibility controls in that it cannot be disabled at the block level. That said, the control can be disabled globally in the plugin’s [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/).

Note that if this control is disabled globally, any blocks that are actively being hidden by the Hide Block control will become visible again.

---

## How to Use the WP Fusion Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-wp-fusion-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-wp-fusion-control/)

## Control Overview

The WP Fusion control was built specifically for [WP Fusion](https://wpfusion.com/) users and works with both the Lite and paid versions of the plugin. Combining Block Visibility with the power of WP Fusion allows you to conditionally show or hide content based on data from your favorite CRM or marketing automation platform. Not a WP Fusion user? Check out [their website](https://wpfusion.com/) to learn more.

This functionality is freely available in the core [Block Visibility](https://wordpress.org/plugins/block-visibility/) plugin, which is available on WordPress.org.

## Configuration

### How to Enable

Begin by installing and activating the [WP Fusion](https://wpfusion.com/) plugin. The control will not be available if the plugin is inactive.

Click on any block in the Block Editor and navigate to the Visibility panel. You will notice an ellipsis icon in the Controls Toolbar. See the screenshot below. Click on the ellipsis, and all the available controls will appear. Select “WP Fusion” and the WP Fusion control panel will be added to the block.

While you are at it, make sure the [User Role](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-user-role-control/) control is also active. The WP Fusion control relies heavily on user roles.

![Configuring the WP Fusion control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/03/WP-Fusion.jpg)WP Fusion control in the block settings sidebar (v1.7)

### How to Configure

Instructions are always better with examples. Let’s assume you are running a website that offers courses and uses [LifterLMS](https://lifterlms.com/).  You have connected WP Fusion to your LMS, and one of the available tags is “Course Complete”. You want to set up a banner that celebrates users that have completed the course.

#### Steps to Complete

1. Navigate to the WP Fusion control settings in the Visibility panel.
2. Navigate to the [Required Tags (Any)](#required-tags-any) selector.
3. Choose the “Course Complete” tag.

The resulting configuration should resemble the screenshot below.

![Configuring the WP Fusion control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/WP-Fusion-Configure.jpg)Configuring the WP Fusion control (v1.9)

Note that the available fields depend on the User Role control settings. If the User Role control is disabled or is set to *Public*, only the *Required Tags (Not)* field will be available. See the screenshot below.

![](https://blockvisibilitywp.com/wp-content/uploads/2021/03/WP-Fusion-Public.jpg)Disabled WP Fusion settings when User Role is set to Public (v1.7)

If the User Role control is set to *Logged-out*, all WP Fusion fields will be disabled. This indicates that the block should only be shown to guests on your website, and logged-out users cannot have any tags.

### How to Disable

If you would like to disable the WP Fusion control at the block level, simply click on the ellipsis icon in the “Controls” toolbar and deselect it. The control can also be disabled globally in the plugin’s [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/).

Note that if this control is disabled globally or the WP Fusion plugin is deactivated, any blocks that are actively being hidden by the WP Fusion control will become visible again.

## Control Settings

Below are the settings available for the WP Fusion control. As a reminder, to use the *Required Tags (Any)* or the *Required Tags (All)* fields, you will need to set the User Role control to *Logged-in* or *User Roles*. Below is an overview of how each field works.

### Required Tags (Any)

The block will only be shown if the user is logged in and has at least one of the selected tags. This field is disabled if the User Role control is set to *Public*, *Logged-out*, or disabled.

### Required Tags (All)

The block will only be shown if the user is logged in and, at a minimum, has all of the selected tags. They could have more. This field is disabled if the User Role control is set to Public, Logged-out, or disabled.

### Required Tags (Not)

The block will be hidden from logged-in users if they have at least one of the selected tags. If the User Role control is set to *Public* or is disabled, the block will still display to logged-out users. This field is disabled if the User Role control is set to *Logged-out*.

## Important Notes

The WP Fusion control respects the “Exclude Administrators” setting in the WP Fusion plugin settings. If this setting is enabled, when you preview the selected block while logged in as an Administrator, the content will remain visible regardless of the WP Fusion visibility control settings.

---

## How to Use the Screen Size Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-screen-size-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-screen-size-control/)

## Control Overview

The Screen Size control allows you to conditionally show or hide blocks based on the width of the current screen. This control can be useful to assist with “responsive design”, where some content is hidden or displayed based on the current user’s screen size. Think mobile or tablet users versus desktop users.

It’s important to note that the Screen Size control is the only control that hides blocks using CSS. All other controls conditionally render content at the server level. This means that content hidden by the Screen Size control is still loaded on the page/post. It’s just hidden with 
```
display:none
```

 CSS. Consider the [Browser & Device](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-browser-device-control/) control if you are looking to conditionally render blocks based on devices.

### Usage Examples

- Hide content on mobile devices that would clutter the page.
- Display content that is specific to mobile devices, such as App download links that would not be compatible with desktop devices.

## Configuration

### How to Enable

Click on any block in the Block Editor and navigate to the Visibility panel in the Settings Sidebar. You will notice the Screen Size control located beneath the User Role control. See the screenshot below. This control is enabled by default for all blocks. You can choose which controls are automatically enabled in the plugin’s [General Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-general-settings/).

![Enabling the Screen Size control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Screen-Size-Enable.jpg)Screen Size control in the block settings sidebar (v1.9)

### How to Configure

Instructions are always better with examples. Let’s assume that we have a header image on our page that we only want to be visible on Tablets and Desktops. On Mobile, we just want to present the user with the written content on the page.

#### Steps to Complete

1. Navigate to the Screen Size control settings in the Visibility panel.
2. Toggle on the “Hide on mobile” option.

The resulting configuration should resemble the screenshot below.

![Configuring the Screen Size control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Screen-Size-Configure-1024x683.jpg)Configuring the Screen Size control (v1.9)

### Advanced Configuration

By default, the Screen Size control includes three options, “Hide on desktop”, “Hide on tablet” and “Hide on mobile”. Each screen size has a preset “breakpoint”. A breakpoint is a point at which the screen turns from a “mobile-sized screen” to a “tablet-sized screen”, etc. The default settings are highlighted in the screenshot below.

![Screen Size control settings showcasing standard breakpoints and size options.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Screen-Size-Control-Settings.jpg)Screen Size control settings showcasing standard breakpoints and size options (v1.9)

All presets can be controlled from the Screen Size control panel in the plugin’s Visibility Control Settings, which is what you see above. This allows you to alter the default breakpoint values to better match your current theme if needed.  You can also enable or disable certain screen size options that you may not want to allow your Editors/Authors to use.

For even more advanced usage, you can enable two additional screen sizes and breakpoints. See the screenshot below.

![Advanced Screen Size control settings showcasing all breakpoints and size options.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Screen-Size-Control-Settings-Advanced.jpg)Advanced Screen Size control settings showcasing all breakpoints and size options (v1.9)

### How to Disable

If you would like to disable the Screen Size control at the block level, simply click on the vertical ellipsis icon in the “Controls” bar and deselect it. That said, if you don’t think you will need this control on your website at all, it can be disabled globally in the [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/).

Note that if this control is disabled globally, any blocks that are actively being hidden by the Screen Size control will become visible again.

### Limitations

This visibility control adds CSS classes to each block when enabled. It uses these classes to show or hide blocks. Unfortunately, not all blocks support CSS classes, notably the Shortcode and HTML blocks.

If you run into a block that is not working with the Screen Size control, there is a quick and easy workaround that can be applied in most use cases. Simply wrap the block in a Group block. Then apply the screen size settings to the Group block, and everything will work as expected.

For more information and a live walkthrough, check out the video below.

---

## How to Use the User Role Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-user-role-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-user-role-control/)

## Control Overview

The User Role control allows you to conditionally show or hide blocks based on the “role” of the user viewing the webpage. This control can be extremely useful for showing specific content to logged-in users, customers, members, etc.

### Usage Examples

- Conditionally display a navigation block to logged-in users for account settings.
- Display a special promotion to customers that are logged into your store website.
- Entice website visitors that are not logged in to subscribe to your blog.
- You are using a membership plugin that registers a number of custom user roles. Show and hide certain content depending on the membership role of each user.

## Configuration

### How to Enable

Click on any block in the Block Editor and navigate to the Visibility panel in the Settings Sidebar. You will notice the User Role control located beneath the Date & Time control. See the screenshot below. This control is enabled by default for all blocks. You can choose which controls are automatically enabled in the plugin’s [General Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-general-settings/).

![](https://blockvisibilitywp.com/wp-content/uploads/2021/07/User-Role-Enable.jpg)User Role control in the block settings sidebar (v1.9)

### How to Configure

Instructions are always better with examples. Let’s assume that we are running a promotion that should only be visible to logged-in users that are also “customers” of our WooCommerce store or Administrators of the website.

*We will use the Cover block to create the promotional banner.*

#### Steps to Complete

1. Navigate to the User Role control settings in the Visibility panel.
2. Click on the “User Roles” option.
3. Choose “Customer” and “Administrator” from the role selector.

The resulting configuration should resemble the screenshot below.

![](https://blockvisibilitywp.com/wp-content/uploads/2021/07/User-Role-Configure.jpg)Configuring the User Role control (v1.9)

### How to Disable

If you would like to disable the User Role control at the block level, simply click on the ellipsis icon in the “Controls” bar and deselect it. That said, if you don’t think you will need this control on your website at all, it can be disabled globally in the [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/).

Note that if this control is disabled globally, any blocks that are actively being hidden by the User Role control will become visible again.

## Control Settings

User Role control allows you to control *who* can see the block. There are four options:

### Public

When a block is set to Public, the block will be visible to everyone. This is the default option.

### Logged-out

When a block is set to Logged-out, only website visitors that **are not** logged into your website will see the block.

### Logged-in

When a block is set to Logged-in, only website visitors that **are** logged into your website will see the block. This setting does not care about the user’s specific user role (Administrator, Subscriber, Customer…). They just need to be logged in.

### User Role

The User Role setting allows you to fine-tune the visibility of the block. When enabled, you will be able to select the individual user roles that should be able to see the block. For example, in the screenshot above, the block is only visible to administrators and authors on the website.

The list of available roles includes the standard user roles that come with WordPress, as well as any additional roles provided by third-party plugins or themes.

#### Hide on Selected Roles

When the User Roles option is enabled, you will also see a toggle for “Hide on Selected Roles”. By default, if specific user roles are selected, the block will only display to users of those selected roles. For example if 
```
Administrator
```

 and 
```
Author
```

 are selected, the block will only be visible to administrators and authors.

But what if you wanted to display the block to everyone **except** administrators and authors? That is where “Hide on Selected Roles” comes in. Simply toggle that setting, and now the block will only be visible to users **without** the selected roles.

### Users

The Users option was introduced in version 2.0.0 and allows you to restrict the selected block to specific users on your website.  For example, in the screenshot below, only the users 
```
Ron Swanson
```

 and 
```
Tom Haverford
```

 would be able to view the selected block.

![Configuring the Users option in the User Role control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/User-Role-Users.jpg)Configuring the Users option in the User Role control (v2.0)

Note that the Users option allows you to see all available users on your current WordPress installation. Because of this, the configuration of the Users option is restricted to Administrator-level users. Those who are not Administrators will see the following message.

![Error message when a non-Admin users attempts to edit the Users option.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/User-Role-Users-Admin-Error.jpg)

#### Hide on Selected Users

When the Users option is enabled, you will also see a toggle for “Hide on Selected Users”. By default, if a specific user(s) is chosen, the block will only display to that user(s). For example if 
```
Ron Swanson
```

 and 
```
Tom Haverford
```

 are selected, the block will only be visible to those two users.

But what if you wanted to display the block to everyone **except**  
```
Ron Swanson
```

 and 
```
Tom Haverford
```

 ? That is where “Hide on Selected Users” comes in. Simply toggle that setting, and now the block will only be visible to users that have not been selected.

### User Rule Sets

Like other Block Visibility controls, the User Role control can optionally be powered by rules and rule sets. This functionality was added in version 2.3.0 and allows you to create more advanced conditions. For example, you could display a block to all Administrators and Editors **except** a specific group of users.

![Configuring the User Rule Sets option in the User Role control.](https://blockvisibilitywp.com/wp-content/uploads/2021/12/User-Role-Rule-Sets.jpg)Configuring the User Rule Sets option in the User Role control (v2.3)

There are a couple of things to note when using rule sets:

This option allows you to see all available users on your current WordPress installation. Because of this, the User Rule Sets option configuration is restricted to Administrator-level users.

All rules within a rule set must be satisfied for the selected block to be visible. However, you can also create multiple rule sets. Only one rule set needs to apply for the block to be visible.

**Within** a rule set, you are creating AND conditions between multiple rules. **Between** two rule sets, you are creating OR conditions.

There are instances when rule errors can occur. For example, if rule inputs are not completely filled out or if the rule is based on a custom user role that has since been deleted from your website. In these situations, the plugin defaults to showing the block unless other rules apply, which would hide the block.

#### User is Logged-out

This rule is the same as the main “Logged-out” setting but is included in User Rule Sets so you can combine it with other rules.

#### User is Logged-in

This rule is the same as the main “Logged-in” setting but is included in User Rule Sets so you can combine it with other rules.

#### User’s Role

Similar to the main “User role” setting, this rule allows you conditionally display the block based on the role(s) of the current user.

#### Users

Similar to the main “Users” setting, this rule allows you conditionally display the block based on who the current user is.

#### Hide When Rules Apply

By default, the block will be visible if the applied rules are satisfied. Simply toggle the “Hide when rules apply” setting to hide the block instead.

---

## How to Use the Date & Time Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-date-time-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-date-time-control/)

## Control Overview

The Date & Time control allows you to schedule when content should be visible on your website.

### Usage Examples

- Create timed promotional content that starts and stops at specific times.
- Automate the public release of course or presentation material. Keep your content hidden until the course or presentation has started.
- Use the [Day of Week](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-date-time-control/#day-of-week) settings to present a special offer on Mondays. Or let your customers know you are closed on the weekend.
- Use the [Time of Day](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-date-time-control/#time-of-day) settings to let your users know when support requests are being monitored, like on our [Contact](https://blockvisibilitywp.com/contact/) page.

### Video Tutorial

## Configuration

### How to Enable

Click on any block in the Block Editor and navigate to the Visibility panel. You will notice the Date & Time control located underneath the Controls Toolbar. See the screenshot below. This control is enabled by default for all blocks. You can choose which controls are automatically enabled in the plugin’s [General Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-general-settings/).

![Enabling the Date & Time control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Date-Time-Enable.jpg)Date & Time control in the block settings sidebar (v1.9)

### How to Configure

*If you haven’t already, watch the video above for an overview of all the new Date & Time features available in Block Visibility 1.8.0.*

Instructions are always better with examples. Let’s assume that we are running a promotion that needs to be visible between 9:00 am on July 12th and run through midnight on July 30th. Then we want to create another schedule for the same promotion in September. We want the promotion to run from September 1st through noon on September 15th.

*We will use the Cover block to create the promotional banner.*

#### Steps to Complete

1. Navigate to the Date & Time control settings in the Visibility panel.
2. Click on the “Now” button under the “Start showing” heading, and a calendar will appear.
3. Choose July 12, 2021, and set the time to 9:00 am. Then close the calendar popup.
4. Click on the “Never” button under the “Stop showing” heading, and a calendar will appear.
5. Choose July 30, 2021, and set the time to 11:59 pm. Then close the calendar popup.
6. Click on the “Add schedule” button to create the second schedule.
7. Click on the “Now” button under the “Start showing” heading in the new schedule, and a calendar will appear.
8. Choose September 1, 2021, and set the time to 12:00 am. Then close the calendar popup.
9. Click on the “Never” button under the “Stop showing” heading, and a calendar will appear.
10. Choose September 15, 2021, and set the time to 12:00 pm. Then close the calendar popup.

The resulting configuration should resemble the screenshot below.

![Configuring the Date & Time control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Date-Time-Configure.jpg)Configuring the Date & Time control (v1.9)

### How to Disable

If you would like to disable the Date & time control at the block level, simply click on the three-dots icon in the Controls Toolbar and deselect it. That said, if you don’t think you will need this control on your website at all, it can be disabled globally in the [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/).

Note that if this control is disabled globally, any blocks that are actively being hidden by the Date & Time control will become visible again.

## Control Settings

### Schedules

The Date & Time control uses schedules, which are similar to rule sets in other visibility controls like the [Location](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-location-control/) control. All settings within a schedule must be satisfied for the selected block to be visible. However, you can also create multiple schedules. Only one schedule needs to be applied for the block to be visible.

**Within** a schedule, you create AND conditions between each setting. **Between** two schedules, you create OR conditions.

As of Block Visibility 3.4.0, you can now set seasonal schedules. A seasonal schedule does not rely on the year. So, as long as the current date (year agnostic) falls within the range selected, the block will be displayed.

![](https://blockvisibilitywp.com/wp-content/uploads/2024/03/image-1.png)Seasonal schedules (v3.4.0)

In addition to standard scheduling, the Date & Time control also supports recursion.

#### Day of Week

Enable the Day of Week settings by clicking on the “recursion” icon below the main schedule settings. Then choose the day(s) of the week that you would like the block to be visible. See the screenshot below.

![Day of Week settings in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Day-of-Week.jpg)Day of Week settings in Block Visibility

The Day of Week settings override the main Start and Stop settings. For example, assume you set the block to be visible between June 1st and June 3th and also chose Monday through Friday in the Day of Week settings. The block will be hidden on all Saturdays and Sundays between June 1st and June 3th.

That said, you do not necessarily need to set a Start and Stop date/time. Assume you want the selected block to only be visible every Monday. Just leave all other settings blank and choose “M” from the Day of Week settings.

#### Time of Day

Enable the Time of Day settings by clicking on the “clock” icon below the main schedule settings. Then choose the time interval that you would like the block to be visible on. You can also set multiple time intervals. See the screenshot below.

![Time of Day settings in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Time-of-Day.jpg)Time of Day settings in Block Visibility

The Time of Day settings behave as you would expect. They override the main Start and Stop settings and partially override the Day of Week settings. For example, assume you set the block to be visible Monday through Friday between June 1st and June 3th. In the Time of Day settings, you set a time interval of 9:00 am to 5:00 pm. The block will be hidden on all Saturdays and Sundays between June 1st and June 3rd due to the Day of Week settings. Then on Monday through Friday, the block will only be visible from 9:00 am to 5:00 pm.

That said, you do not necessarily need to set a Start and Stop date/time or Day of Week settings. Assume you want the selected block to only be visible from 9:00 am to 5:00 pm. Just leave all other settings blank and set the time interval accordingly in the Time of Day settings.

### Hide When Schedules Apply

By default, the block will be visible if the applied schedule settings are satisfied. Simply toggle the “Hide when schedules apply” setting to hide the block instead.

## Timezones

Note that the timezone reflects the WordPress date and time settings for your website. To change this, edit them in the Settings → General admin screen. See below. You can also edit the date and time formats to better suit your needs, which will be reflected in the Block Visibility user interface.

![WordPress General admin screen with settings for timezone and date/time formats](https://blockvisibilitywp.com/wp-content/uploads/2020/11/Date-Time-Admin-Settings.png)WordPress General admin screen with settings for timezone and date/time formats

---

## How to Use the Query String Control

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-use-the-query-string-control/](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-query-string-control/)

## Control Overview

The Query String control allows you to conditionally show or hide blocks based on query strings. What is a “query string” you might ask?

Well, you undoubtedly have come across them while browsing the internet, and they appear after the 
```
?
```

 in URLs. For example:

```
https://www.example.com/?example_parameter=example_value
```

The orange text is a query string, which is made up of a parameter and a value. You can also concatenate multiple strings using the 
```
&
```

 symbol. Query strings are used for all manner of things, notably for tracking and marketing purposes.

This functionality is freely available in the core [Block Visibility](https://wordpress.org/plugins/block-visibility/) plugin, which is available on WordPress.org.

## Configuration

### How to Enable

Click on any block in the Block Editor and navigate to the Visibility panel. . You will notice a vertical ellipsis icon in the Controls Toolbar. See the screenshot below. Click on the ellipsis, and all available visibility controls will appear. Select “Query String” and the Query String control panel will be added to the block.

![Enabling the Query String control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/03/Query-String.jpg)Query String control in the block settings sidebar (v1.7)

### How to Configure

Instructions are always better with examples. Let’s assume that we are writing documentation for the Query String control and we want to provide a live demo. In this example, the user will click on a button that will refresh the page with the query string parameter applied to the URL. Based on the query string, display a hidden message.

#### Steps to Complete

1. Using a Paragraph block, write a message that will be hidden by the Query String control.
2. Navigate to the Query String control settings in the Visibility panel.
3. In the “Required Queries (Any)” text box, enter the parameter 
```
docs=query-string-test
```

.

The resulting configuration should resemble the screenshot below.

![Configuring the Query String control in Block Visibility.](https://blockvisibilitywp.com/wp-content/uploads/2021/07/Query-String-Configure.jpg)Configuring the Query String control (v1.9)

1. Next use the Buttons block to create a button with the link:

```
https://blockvisibilitywp.com/knowledge-base/how-to-use-the-query-string-control/?docs=query-string-test#how-to-configure
```

It should resemble the button below. Now, give it a click and see what happens!

[Test the Query String](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-query-string-control/?docs=query-string-test#how-to-configure)

### How to Disable

If you would like to disable the Query String control at the block level, simply click on the ellipsis icon in the Controls Toolbar and deselect it. That said, if you don’t think you will need this control on your website at all, it can be disabled globally in the [Visibility Control Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/) in the Integrations section.

Note that if this control is disabled globally, any blocks that are actively being hidden by the Query String control will become visible again.

## Control Settings

Below are the settings available for the Query String control. In order for the control to work properly, only enter one value per line in each textbox. The following three formats are accepted.

| param=value | Query parameter with a specific value. |
| --- | --- |
| param=* | Query parameter with a wildcard value. (i.e. the value could be anything) |
| param | Query parameter with no value. Operates the same as a wildcard value. |

### Required Queries (Any)

The block will only be shown if the URL has at least one of the provided query strings.

### Required Queries (All)

The block will only be shown if the URL, at a minimum, has all of the provided query strings. It could have more.

### Required Queries (Not)

The block will be hidden whenever at least one of the provided query strings is present in the URL. The “Not” queries take precedence over all other queries.

---

## Guide to Visibility Controls and Control Sets

**Source:** [https://blockvisibilitywp.com/knowledge-base/guide-to-visibility-controls-and-control-sets/](https://blockvisibilitywp.com/knowledge-base/guide-to-visibility-controls-and-control-sets/)

## What are Controls and Control Sets?

Visibility **controls** are the settings that determine whether a block is hidden on the front end of your website. A **control set** is simply a collection of controls. Active controls within a control set form “AND” conditions, i.e. all controls need to be satisfied in order for the block to be displayed. The current controls that are available in Block Visibility are listed below.

- [Hide Block](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-hide-block-control/)
- [Date & Time](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-date-time-control/)
- [User Role](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-user-role/)
- [Screen Size](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-screen-size-control/)
- [Query String](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-query-string-control/)
- [Advanced Custom Fields](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-advanced-custom-fields-control/)
- [WP Fusion](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-wp-fusion-control/)

- [Location](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-location-control/)
- [Metadata](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-metadata-control/)
- [Browser & Device](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-browser-device-control/)
- [URL Path](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-url-path-control/)
- [Referral Source](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-referral-source-control/)
- [WooCommerce](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-woocommerce-control/)
- [Easy Digital Downloads](https://blockvisibilitywp.com/knowledge-base/how-to-use-the-easy-digital-downloads-control/)
- [Visibility Presets](https://blockvisibilitywp.com/knowledge-base/guide-to-visibility-presets/)

The following video provides a detailed overview of how controls and control sets work within Block Visibility.

## Configuring Controls

We strive to provide as much visibility control as possible, and as development for Block Visibility continues, expect even more functionality in the future. However, we understand that some users do not need every option. It is equally important to have a decluttered and streamlined user interface. Therefore, on the Visibility Controls tab of the Block Visibility settings page, you can enable or disable any control.

![Visibility Controls](https://blockvisibilitywp.com/wp-content/uploads/2020/11/visibility-controls-v1.1.png)The Visibility Controls tab of the Block Visibility settings page (v1.1.0)

Referring to the screenshot above, simply toggle the controls you would like to use on your website. When a visibility control is disabled, blocks that relied on the disabled control will become visible again. Likely this is what you intended, but we wanted to provide this warning just in case.

For example, assume you have an Image block that is currently hidden by the Hide Block control. If you disable the Hide Block control in the Visibility Control settings, the Image block will become visible on the front end of your website. Furthermore, if you re-enable the Hide Block control, the Image block will be hidden again, assuming no other changes were made to that block.

## Visibility Presets

As mentioned in the video above, Visibility Presets allow you to create “OR” conditions with multiple control sets. Visit the [Knowledge Base article](https://blockvisibilitywp.com/knowledge-base/guide-to-visibility-presets/) dedicated to presets for more information.

---

## Guide to Getting Started with Block Visibility

**Source:** [https://blockvisibilitywp.com/knowledge-base/guide-to-getting-started-with-block-visibility/](https://blockvisibilitywp.com/knowledge-base/guide-to-getting-started-with-block-visibility/)

This brief article provides a quick overview of the Block Visibility plugin for WordPress and helps you get started with block-based visibility control.

## How does it work?

In short, Block Visibility allows you to easily control the visibility of any block in the WordPress editor. This includes those provided by third-party plugins like WooCommerce and Jetpack. The video below provides a plugin overview and usage examples.

As the name suggests, the Block Visibility plugin is built exclusively for the [block editor](https://wordpress.org/support/article/wordpress-editor/). It does not work in the classic editor. So long as you are running the latest WordPress version and not utilizing the Classic Editor plugin, you are good to go!

By default, this plugin adds a Visibility panel to the block [settings sidebar](https://wordpress.org/support/article/wordpress-editor/#the-anatomy-of-a-block) of each selected block in the WordPress editor. While there are a few minor exceptions, visibility controls will be enabled for all core WordPress blocks and any third-party blocks you might be using.

![](https://blockvisibilitywp.com/wp-content/uploads/2021/03/Getting-Started-Block-Inspector.jpg)Visibility panel in the block settings sidebar (v1.5)

On the Visibility panel, you will be able to show or hide the selected block based on several different controls. The primary option is to simply hide the block from view. This can be useful if you want to disable some content but you still need to publish other changes to the page or post. You can also restrict who can see certain blocks. For example, maybe you have a special promotion that you only want to show subscribers of your website. If you haven’t already, watch the video above for a quick demo.

## Next Steps

Now that you have an overview of what the plugin can do take a deeper dive into the usage and configuration of Block Visibility. It’s easy to get started!

Using Block Visibility

## Visibility Controls

[Learn More](https://blockvisibilitywp.com/knowledge-base-category/visibility-controls/)

Configuring Block Visibility

## Plugin Settings

[Learn More](https://blockvisibilitywp.com/knowledge-base-category/plugin-settings/)

---

## How to Configure the General Settings

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-general-settings/](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-general-settings/)

The General Settings tab is accessible via the Block Visibility settings page in the WordPress admin and allows you to configure some general functionality for the plugin. As development continues on Block Visibility, expect an expanded list of options.

![The General Settings tab of the Block Visibility settings page (v2.4.0)](https://blockvisibilitywp.com/wp-content/uploads/2022/04/general-settings-v2.4-1024x814.png)The General Settings tab of the Block Visibility settings page (v2.4.0)

## Block Editor

The Block Editor section contains a variety of settings that impact how the plugin interacts with the WordPress editor. As the development of Block Visibility continues, more features will be added the increase the usability of the plugin and make it easier for users to configure the visibility settings of each block. That said, if there is a certain feature you do not like, you can simply turn it off in the Block Editor settings.

### Contextual Indicators

Contextual indicators make it easier to see which blocks have enabled visibility controls in the Editor. That said, you may want to turn them off, or change the color of the indicators. These settings allow you to do that.

### Contextual Block Opacity

While contextual indicators are great, many users asked for even more visual queues that a block has visibility controls enabled. Therefore, we have also included the option to add opacity to each block with active visibility controls.

Note that there are some limitations with this setting. To preserve native WordPress Editor functionality, the opacity is added to all **inner content** of a block. Since some blocks do not have wrapper “containers”, such as the Paragraph and Heading blocks, the opacity will not be applied.

### Toolbar Controls

This setting allows you to enable/disable the toolbar controls added by Block Visibility. Currently, only the Hide Block control is supported. See the screenshot below for reference:

![Toolbar controls in Block Visibility (v2.4.0)](https://blockvisibilitywp.com/wp-content/uploads/2022/04/image.png)Toolbar controls in Block Visibility (v2.4.0)

### Utilities

Control set utilities to allow you to copy and import visibility settings. This functionality is useful when advanced setting configurations need to be used across multiple blocks. See the screenshot below for reference:

![Control set utilities in Block Visibility](https://blockvisibilitywp.com/wp-content/uploads/2022/04/image-1.png)Control set utilities in Block Visibility

## User Permissions

As of version 1.3.0, Block Visibility has user permissions that allow website administrators to decide who can use visibility controls.

By default, any user that is able to edit blocks in the Block Editor will also be allowed to control block visibility. To restrict this functionality, simply enable restrictions and choose the user roles that you would like to have access. Note that administrators will always have access.

Contextual indicators will display for users that have been restricted, so long as contextual indicators are enabled. This allows restricted users to still see which blocks are controlled by visibility settings, but they are not able to adjust those settings.

## Full Control Mode

By default, not all blocks are provided with visibility controls. These include child blocks and blocks that may exist in WordPress but cannot actually be added directly to the editor.

If you are looking for the visibility panel on a selected block and do not see it, or cannot find a certain block in the [Block Manager](https://blockvisibilitywp.com/knowledge-base/plugin-settings/block-manager/), then you likely need to enable Full Control Mode. For most applications of the Block Visibility plugin, you will not need Full Control Mode, but it’s there in case you do.

There are a few things about Full Control Mode (FCM) that you should be aware of:

1. If a block receives visibility settings due to FCM being enabled, these settings will remain if FCM is ever disabled. For example, the Column block is a child block of the larger Columns block. Visibility controls are not provided to Column blocks by default, only Columns blocks. When you enable Full Control Mode, you will be able to control visibility on both block types. Now let’s assume you had configured visibility on a number of Column blocks. If you were to ever disable FCM, you would no longer be able to control visibility on the Column block. **However**, any previously set visibility settings would still be applied on the front end of your website, assuming no other changes were made to those Column blocks. This functionality is not ideal and is a current limitation of the plugin. That said, it is easy to avoid any unexpected results. If you ever enable FCM, just be careful disabling it in the future and make sure there are no FCM enabled block types with active visibility settings.
2. When you enable FCM, this will add any previously unavailable block types to the [Block Manager](https://blockvisibilitywp.com/documentation/block-manager/). You will now be able to control these new block types within the manager.

## Uninstall

When you enable this setting, the Block Visibility plugin settings will be removed when the plugin is uninstalled. Under the hood, the 
```
block_visibility_settings
```

 option will be removed from your website database. If you ever reinstall Block Visibility, the default plugin settings will be applied.

Note that this setting does not remove the visibility settings from individual blocks. These settings, or “attributes”, will no longer do anything since Block Visibility has been uninstalled but will remain on each block until save-triggering changes are made.

---

## Guide to Plugin Settings in Block Visibility

**Source:** [https://blockvisibilitywp.com/knowledge-base/guide-to-plugin-settings-in-block-visibility/](https://blockvisibilitywp.com/knowledge-base/guide-to-plugin-settings-in-block-visibility/)

## Overview

Block Visibility provides many powerful settings that allow you to configure the plugin to your specific needs. The settings page can be accessed by from the Plugins screen, or from the WordPress admin sidebar in the “Settings” section.

![](https://blockvisibilitywp.com/wp-content/uploads/2021/03/Block-Visibility-Admin-Link.jpg)The Block Visibility settings screen (v1.5)

There are three main sections of the Block Visibility settings page are:

1. [General Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-general-settings/)
2. [Visibility Controls](https://blockvisibilitywp.com/knowledge-base/guide-to-plugin-settings-in-block-visibility/how-to-configure-the-visibility-control-settings/)
3. [Block Manager](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-block-manager/)

---

## How to Configure the Visibility Control Settings

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-visibility-control-settings/)

The Visibility Controls tab is accessible via the Block Visibility settings page in the WordPress admin and allows you to enable and disable the available visibility controls, which includes all third-party integrations. Certain controls also have additional settings that can be configured.

This Visibility Control settings are very useful if you know that there are certain controls that you will never use. Simply disable them here to “declutter” the Visibility panel in the Block Editor.

![](https://blockvisibilitywp.com/wp-content/uploads/2021/06/Visibility-Controls.jpg)Visibility Control settings with the User Role control disabled (v1.9)

## Notes

- When disabling a control, note that if there are blocks currently using that control, those blocks will become visible again unless there are other controls that are restricting visibility.
- Third-party integration controls will appear at the bottom of the page in their designated section. Integration settings will only display for third-party plugins installed **and** active on your WordPress site.

---

## How to Configure the Block Manager

**Source:** [https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-block-manager/](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-block-manager/)

The Block Manager is accessible via the Block Visibility settings page in the WordPress admin and allows you to restrict [visibility controls](https://blockvisibilitywp.com/knowledge-base/visibility-controls/) to specific block types. By default, all block types have visibility enabled, but you may want to limit this functionality depending on the needs of your website or client.

![](https://blockvisibilitywp.com/wp-content/uploads/2020/08/block-manager-1200x500-1.jpg)The Block Manager tab of the Block Visibility settings page (v1.0.0)

### Using the Block Manager

Referring to the screenshot above, use the checkboxes to disable visibility controls on selected block types. The search bar allows you to quickly find the block types you are looking for.

While using the Block Manager is fairly straightforward. It is important to understand how it works behind the scenes.

If you disable a particular block type, the visibility panel for that block type will no longer appear in the WordPress editor, as you would expect. However, if you had previously set visibility settings for that block type, they will no longer be applied on the front end of your website. This can potentially lead to unexpected results.

For example, let’s assume that you had hidden a number of Image blocks on your website using the Hide Block visibility control. If you were to disable the Image block type in the Block Manager, all of the images that had previously been hidden will reappear. Likely this is what you intended when disabling the Image block type, but it is important to point out.

#### Can’t find a block type?

If you are looking for a specific block type in the Block Manager but do not see it listed, you may need to enable Full Control Mode. You can learn more about Full Control Mode on the [General Settings](https://blockvisibilitywp.com/knowledge-base/how-to-configure-the-general-settings/) documentation page.

---

