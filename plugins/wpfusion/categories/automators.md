# Automators

*Category from WP Fusion documentation*

---

## Bit Integrations

**Source:** [https://wpfusion.com/documentation/automators/bit-integrations/](https://wpfusion.com/documentation/automators/bit-integrations/)

### Overview

WP Fusion integrates with Bit Integrations to provide a powerful automation bridge between WordPress and your connected CRM. Bit Integrations is a comprehensive automation plugin that connects WordPress with over 290+ platforms, allowing you to automate workflows without coding.

With this integration, you can:

- Sync form submissions from various form builders to your CRM via WP Fusion
- Apply tags based on user actions in WordPress
- Create advanced automation workflows between WordPress plugins and your CRM
- Trigger actions in other platforms based on tag changes in your CRM

### Setup

To use WP Fusion with Bit Integrations, you’ll need:

1. WP Fusion installed and connected to your CRM
2. Bit Integrations plugin installed and activated

Once both plugins are installed, WP Fusion will automatically appear as an available integration within Bit Integrations.

### Creating a WP Fusion Integration

To create a new integration with WP Fusion in Bit Integrations:

1. Navigate to Bit Integrations » Create Integration
2. Select your trigger (e.g., form submission, user registration, etc.)
3. Choose WP Fusion as the action
4. Configure the integration settings based on your needs

### Available Actions

Bit Integrations provides several actions for WP Fusion:

- Apply Tags: Apply one or more tags to a user in your connected CRM
- Remove Tags: Remove specific tags from a user
- Update Contact Fields: Sync custom field data to your CRM

### Supported Triggers

Bit Integrations supports triggers from numerous WordPress plugins and can sync data to WP Fusion, including:

- Form submissions (WPForms, Contact Form 7, Ninja Forms, Forminator, Bit Form, and more)
- User registration and profile updates
- WooCommerce purchases and subscription events
- Learning Management System (LMS) course completions
- Membership level changes
- Custom webhooks and API triggers

### Use Cases

Here are some common automation workflows you can create with Bit Integrations and WP Fusion:

#### Form Submission to CRM

When a user submits a form:

1. Bit Integrations captures the form data
2. Creates or updates the contact in your CRM via WP Fusion
3. Applies relevant tags based on form fields or selections

#### Tag-Based Automation

Trigger actions in other platforms when specific tags are applied in your CRM:

1. WP Fusion detects tag changes via webhooks
2. Bit Integrations triggers corresponding actions
3. Execute workflows in connected platforms

#### Multi-Step Workflows

Create complex automation sequences:

1. User completes a course in your LMS
2. Bit Integrations triggers WP Fusion to apply a “Course Completed” tag
3. Tag application triggers email sequence in your CRM
4. Additional actions fire based on email engagement

### Advanced Features

#### Conditional Logic

Bit Integrations supports conditional logic, allowing you to:

- Apply different tags based on form field values
- Route contacts to different lists or segments
- Trigger different workflows based on user data

#### Field Mapping

Map form fields and other data sources directly to CRM fields through WP Fusion’s field mapping interface, ensuring accurate data synchronization.

---

## AutomatorWP

**Source:** [https://wpfusion.com/documentation/automators/automatorwp/](https://wpfusion.com/documentation/automators/automatorwp/)

### Overview

WP Fusion integrates with AutomatorWP to allow you to automate actions in hundreds of plugins and third-party services based on tag changes in your connected CRM.

For more information on the similarities and differences between WP Fusion and AutomatorWP, check out WP Fusion vs AutomatorWP.

Note: To use WP Fusion with AutomatorWP, you must install the AutomatorWP – WP Fusion addon.

### Setup

Create a new recipe and choose WP Fusion as the trigger. The available options are Tag Applied and Tag Removed. For each you can select a single tag from the dropdown.

In this automation, when the Entry Approved tag is applied, a course is marked complete for the user.
Then, connect your trigger to one or more actions. When the selected tag is applied (or removed), the connected actions will be triggered.

### Action

WP Fusion can also be used as an action connected to another trigger. The available actions are Apply tag, Remove tag, and Track Event (via the Event Tracking addon).

In this example, a tag is applied the first time the user logs in to the site.

---

## Uncanny Automator

**Source:** [https://wpfusion.com/documentation/automators/uncanny-automator/](https://wpfusion.com/documentation/automators/uncanny-automator/)

### Overview

WP Fusion integrates with Uncanny Automator (Pro) to allow you to automate actions in hundreds of plugins and third-party services based on tag changes in your connected CRM.

For more information on the similarities and differences between WP Fusion and Uncanny Automator, check out WP Fusion vs Uncanny Automator.

### Setup

Create a new recipe and choose WP Fusion as the trigger.

The available options are Tag is added to a user and Tag is removed from a user. For each you can select a single tag from the dropdown.

In this example, when the First Referral tag is applied to a user, a message is posted in a BuddyBoss group’s activity feed.
Then, connect your trigger to one or more actions. When the selected tag is applied (or removed), the connected actions will be triggered.

### Action

WP Fusion can also be used as an action connected to another trigger. The available actions are Add a tag to the user and Remove a tag from the user.

---

## OttoKit

**Source:** [https://wpfusion.com/documentation/automators/suretriggers/](https://wpfusion.com/documentation/automators/suretriggers/)

### Overview

WP Fusion includes an integration with OttoKit (formerly SureTriggers) to allow you to trigger hundreds of third-party services based on tag changes in your connected CRM.

### Setup

Create a new workflow and select WP Fusion as the trigger.

The available options are Tag Added to User, Tag Removed from User and User Tag Modified. For each you can select a single tag from the dropdown.

Then, connect your trigger to one or more actions.

When the selected tag is applied (or removed), the connected actions will be triggered.

### Action

WP Fusion can also be used as an action connected to another trigger. The available actions are Add Tag to User and Remove Tag from User.

---

## Thrive Automator

**Source:** [https://wpfusion.com/documentation/automators/thrive-automator/](https://wpfusion.com/documentation/automators/thrive-automator/)

### Overview

WP Fusion includes an integration with Thrive Automator to allow you to integrate the Thrive Themes family of products with your connected CRM.

WP Fusion’s Automator integration can be used:

- As a trigger
- As a condition
- As a mailing list integration

### Triggers

WP Fusion adds three triggers to Thrive Automator.

To start, create a new automation, and in the “When this happens” dropdown, open the WP Fusion section.

The options are:

- Tags (or lists) applied: The automation will be triggered when tags are applied.
- Tags (or lists) removed: The automation will be triggered when tags are removed.
- Tags (or lists) modified: The automation will be triggered whenever a user’s tags are modified.

For each option you can select one or more tags or lists:

### Conditions

WP Fusion also allows you to use tags in your connected CRM as conditions in any Automator automation.

Tags and lists in your connected CRM can be used both as triggers and conditions in Automator automations.
In this example, the automation only continues if the user has the tag Active Customer in ActiveCampaign.

### Mailing list integration

With Thrive Automator, WP Fusion is registered as a mailing list provider. This means that you can sync data to your CRM from other Thrive plugins, like Architect, Leads and Apprentice.

To use the integration, in the Actions dropdown, open the Email section, and choose either Add user in autoresponder or Tag user in autoresponder.

WP Fusion can create and tag contacts in your connected CRM based on Thrive Architect form submissions.
In this example, we are using a Thrive Architect form submission as a trigger. WP Fusion creates a contact record in the connected CRM (HubSpot), and applies the tag Form Submit.

If the lead opted in to marketing, it additionally applies the tag Opted-in to marketing.

WP Fusion’s Automator integration can also be used to apply tags based on events in other Thrive plugins, like Thrive Apprentice.

In this example, the automation is triggered when a user completes a course in Apprentice, and WP Fusion applies the tag Completed Apprentice Course %course_title% in ActiveCampaign.

---

