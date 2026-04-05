# Lead Generation

*Category from WP Fusion - Downloads Addon documentation*

---

## SureForms

**Source:** [https://wpfusion.com/documentation/lead-generation/sureforms/](https://wpfusion.com/documentation/lead-generation/sureforms/)

### Overview

WP Fusion integrates with [SureForms](https://wpfusion.com/go/sureforms) to sync form submissions to any one of [50+ CRM or marketing automation systems](https://wpfusion.com/documentation/faq/crm-compatibility-table/). Using WP Fusion you can add and update contacts when forms are submitted, and also apply tags.

Note that WP Fusion’s SureForms integration requires [SureForms Pro](https://wpfusion.com/go/sureforms-pricing).

### Setup

First enable the WP Fusion integration globally by going to SureForms » Settings » Integrations. Click Add Integration, and select WP Fusion from the list.

Then, from any single form, navigate to the Single Form Settings, and click on the Integrations tab. Click Create Workflow and select WP Fusion from the list.

![a website dashboard shows the wp fusion integration setup screen, with options to select a workflow name, choose an action such as sync contact, apply tags, or assign lists, and navigation buttons back and continue.](https://wpfusion.com/wp-content/uploads/2025/11/sureforms-1-1024x734.jpg)

Then select an action from the Select Action dropdown:

- **Sync Contact:**Creates or updates a contact in your connected CRM (based on email address)
- **Apply Tags:**Applies one or more tags to a contact based on a form submission
- **Assign Lists:**(where applicable) Applies one or more lists to a contact

### Sync Contacts

![a wp fusion configuration screen displays input fields for email, account name, first name, last name, phone, and membership expiration date. the wordpress dashboard menu is visible on the left side.](https://wpfusion.com/wp-content/uploads/2025/11/sureforms-3-1024x629.jpg)

For each field in your CRM, you can select a corresponding field on the form. When the form is submitted, the selected fields will be synced.

---

## Forminator

**Source:** [https://wpfusion.com/documentation/lead-generation/forminator/](https://wpfusion.com/documentation/lead-generation/forminator/)

### Overview

WP Fusion integrates with [Forminator](https://wordpress.org/plugins/forminator/) to add contacts to your [CRM or email marketing platform](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they submit a form on your site. You can also tag contacts based on the form that was submitted.

### Setup

After creating your form, go to the form settings and click on Integrations, and click the + icon next to WP Fusion to add a new WP Fusion integration.

![](https://wpfusion.com/wp-content/uploads/2023/12/forminator-forms-1024x538.jpg)

In the popup that appears, give your integration a name, and then proceed to map your form fields with CRM fields.

![](https://wpfusion.com/wp-content/uploads/2023/12/forminator-field-mapping-1024x611.jpg)

Finally, select any tags or lists you’d like to be applied when the form is submitted.

![](https://wpfusion.com/wp-content/uploads/2023/12/forminator-additional-options-1024x633.jpg)

That’s it! When your form is submitted, a contact will be created or updated in your CRM based on the submitted data, and any selected tags or lists will be applied.

---

## Thrive Leads

**Source:** [https://wpfusion.com/documentation/lead-generation/thrive-leads/](https://wpfusion.com/documentation/lead-generation/thrive-leads/)

### Overview

WP Fusion integrates with [Thrive Leads](https://wpfusion.com/go/thrive-leads) to sync form submissions to any one of [50+ supported CRMs and marketing automation systems](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

Using WP Fusion you can add and update contacts when forms are submitted, and also apply tags.

### Setup

When editing any form, under the Main Options settings panel, click Add Connection to add a new API connection.

![](https://wpfusion.com/wp-content/uploads/2022/11/thrive-leads-1-1024x805.jpg)

Choose WP Fusion from the dropdown, and select a list and tags to apply when the form is submitted (lists are not supported with all CRMs).

![](https://wpfusion.com/wp-content/uploads/2022/11/thrive-leads-2-1024x799.jpg)

Once the API connection is enabled, you will be able to click on each of your form fields and select a field to sync with in your connected CRM.

![](https://wpfusion.com/wp-content/uploads/2022/11/thrive-leads-3-1024x890.jpg)

**Note:** As of Thrive Leads 3.12, custom fields are not automatically loaded into the field mapping interface after selecting the WP Fusion API integration. To map custom fields, first save your form and reload the page.

---

## WS Form

**Source:** [https://wpfusion.com/documentation/lead-generation/ws-form/](https://wpfusion.com/documentation/lead-generation/ws-form/)

### Overview

Using WP Fusion, you can send entries from [WS Form](https://wsform.com/) to any one of [42+ supported CRMs and marketing automation tools](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

### Setup

After creating your form and adding some fields, go to the Actions panel and add a new action. From the dropdown select *WP Fusion.*

![](https://wpfusion.com/wp-content/uploads/2021/05/ws-form-action-1-1-1024x452.jpg)

In the panel that appears, you can then configure how the form data should be synced to your CRM.

![](https://wpfusion.com/wp-content/uploads/2021/05/ws-form-action-2-2-1024x1000.jpg)

The options are:

- **Opt-In Field:**Here you can (optionally) select a custom field on your form that must be checked for data to be synced to your CRM, for example a GDPR consent field. This works best with a checkbox field.
- **Add Only****:**If checked, only new contacts will be synced to your CRM, existing contacts *will not* be updated.
- **Field Mapping:**For each field on your form you can select a corresponding custom field in your CRM. To add a new field mapping, click the + icon. If your CRM supports it, you can also select *Create Tag(s) from Value* to automatically convert the submitted value(s) into tags.
- **Custom Field Mapping:**Custom field mapping allows you to push custom values (including [WS Form variables](https://wsform.com/knowledgebase/variables/)) to fields in your CRM. Select a field in your CRM from *Key*dropdown and then enter your custom field value under the *Value* header.
- **Apply Tags:**Here you can select any number of tags to be applied in your CRM when the form is submitted. Press the + icon to add a new tag.

When the form is submitted a new contact record will be created in your CRM containing all of the fields you’ve enabled for sync. If an existing contact is found (by email address), then the existing contact will be updated (no duplicate contact will be created).

---

## Piotnet Forms

**Source:** [https://wpfusion.com/documentation/lead-generation/piotnet-forms/](https://wpfusion.com/documentation/lead-generation/piotnet-forms/)

### Overview

Using WP Fusion, you can send entries from [Piotnet Forms](https://wordpress.org/plugins/piotnetforms/) to any one of [42+ supported CRMs and marketing automation tools](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

### Setup

After creating your form and adding some fields, go to the admin Edit Form screen, and you’ll see a meta box where you can configure the field mapping between your form fields and fields in your CRM.

![](https://wpfusion.com/wp-content/uploads/2021/03/piotnet-forms-1024x636.jpg)

You can also apply tags to contacts when the form is submitted.

When the form is submitted a new contact record will be created in your CRM containing all of the fields you’ve enabled for sync. If an existing contact is found (by email address), then the existing contact will be updated (no duplicate contact will be created).

---

## Gravity PDF

**Source:** [https://wpfusion.com/documentation/lead-generation/gravity-pdf/](https://wpfusion.com/documentation/lead-generation/gravity-pdf/)

### Overview

Using the [Gravity PDF](https://gravitypdf.com/) extension for Gravity Forms you can automatically generate PDFs from your Gravity Form entries. WP Fusion can then sync the URL to the PDF to a custom field on the corresponding contact record in your CRM.

For an overview on WP Fusion’s features with Gravity Forms, see [this documentation page](https://wpfusion.com/documentation/lead-generation/gravity-forms/).

### Setup

First configure your PDFs for your form, and then [create a WP Fusion feed](https://wpfusion.com/documentation/lead-generation/gravity-forms/).

Underneath the form field mapping interface will be a heading, **PDF URLs**. For each PDF associated with the form, you can select a corresponding field in your connected CRM.

![](https://wpfusion.com/wp-content/uploads/2020/10/gravity-forms-pdf-1024x609.jpg)

Now when the form is submitted, WP Fusion will create a contact record in your CRM for the lead, and the URL to the generated PDF will be synced to the selected custom field.

---

## GravityView

**Source:** [https://wpfusion.com/documentation/lead-generation/gravityview/](https://wpfusion.com/documentation/lead-generation/gravityview/)

### Overview

WP Fusion integrates with [GravityView](https://wpfusion.com/go/gravityview) to apply tags to contacts in your CRM when Gravity Forms entries are marked approved with GravityView.

#### Setup

First create a WP Fusion feed for your form using our [Gravity Forms integration](https://wpfusion.com/documentation/lead-generation/gravity-forms/). When GravityView is active WP Fusion will display a new setting for **Apply Tags – Approved**.

![](https://wpfusion.com/wp-content/uploads/2019/12/gravityview-1-1024x364.jpg)

Here you can specify any tags that should be applied when entries are approved.

#### Usage

![](https://wpfusion.com/wp-content/uploads/2019/12/gravityview-2-1024x515.jpg)

When an entry is marked as approved (either a single entry or via bulk edit), WP Fusion will apply the specified tags to the contact record in your CRM that was created during the initial form submission.

### GravityEdit

When editing Gravity Forms entries using the [GravityEdit extension](https://www.gravitykit.com/products/gravityview-inline-edit/?ref=554), WP Fusion will automatically sync any updated form entries to the corresponding contact record in your CRM.

---

## Fluent Forms

**Source:** [https://wpfusion.com/documentation/lead-generation/fluent-forms/](https://wpfusion.com/documentation/lead-generation/fluent-forms/)

### Overview

WP Fusion integrates with [Fluent Forms](https://wordpress.org/plugins/fluentform/) to sync form submissions to any one of [50+ supported CRMs and marketing automation platforms](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

When a Fluent Forms form is filled out a contact record will be created (or updated) in your CRM, with support for any number of custom fields. You can also apply tags to contacts in your CRM based on the form that was submitted, including support for conditional logic.

### Setup

First navigate to Fluent Forms » Integrations in the WordPress admin and ensure the WP Fusion module is enabled:

![](https://wpfusion.com/wp-content/uploads/2019/10/enable-fluent-forms-integration-1024x583.jpg)

After creating your form, go to the form settings and open the **Configure Integrations** tab. Click Add New Integration, and choose “WP Fusion Integration” from the dropdown:

![](https://wpfusion.com/wp-content/uploads/2019/10/fluent-forms-2-300x191.jpg)

For each field on your form, you can select a corresponding contact field in your CRM to save the data.

![](https://wpfusion.com/wp-content/uploads/2019/10/Fluent-Forms-WP-Fusion-Integration-Feed-1024x550.png)

You can also optionally specify tags to be applied to the contact when they fill out the form:

![screenshot](https://wpfusion.com/wp-content/uploads/2019/10/fluentforms-tags-1024x428.jpg)

#### Conditional tags

By checking the *Enable Dynamic Tag Selection* box, you can conditionally apply tags based on the submitted form values.

![screenshot](https://wpfusion.com/wp-content/uploads/2019/10/fluentforms-conditional-tags-1024x657.jpg)

### User registration

The setup instructions above work with any version of Fluent Forms (including the [free version](https://wordpress.org/plugins/fluentform/)).

This treats the form submission like a “lead”, or “opt in”— the data is synced directly to your CRM, one time.

If you are using [Fluent Forms Pro](https://wpfusion.com/go/fluent-forms), with the [User Registration module](https://wpmanageninja.com/docs/fluent-form/advanced-features-functionalities-in-wp-fluent-form/how-to-create-a-wordpress-user-registration-form-with-wp-fluent-forms/), the setup is different. First, create your form, and add a User Registration module [following this tutorial](https://wpmanageninja.com/docs/fluent-form/advanced-features-functionalities-in-wp-fluent-form/how-to-create-a-wordpress-user-registration-form-with-wp-fluent-forms/).

Add any custom fields to the user registration feed as User Meta.

![User Meta entry on a Fluent Forms user registration feed](https://wpfusion.com/wp-content/uploads/2019/10/fluent-forms-user-reg-feed-1024x171.jpg)

Since your form fields are *user* fields, not *lead* fields, they will appear for mapping under [the main Contact Fields list](https://wpfusion.com/videos/tutorials/mapping-and-syncing-contact-fields/) in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2019/10/fluent-forms-user-reg-fields-map-1024x367.jpg)

For each form field, you can select a custom field in your CRM. The data will be synced to the selected custom field when a user registers or updates their profile.

You can also enable the **Generated Password** field to sync any generated passwords to your CRM (one time) when users register via Fluent Forms.

### Syncing historical entries

If you already have existing Fluent Forms entries from before you installed WP Fusion, you can use a batch processing tool to export all of those entries to your CRM.

First configure your form feeds. Then navigate to Settings » WP Fusion » Advanced and scroll down to the Batch Operations section.

![](https://wpfusion.com/wp-content/uploads/2023/05/fluent-forms-export.png)

Select “**Fluent Forms entries**” from the list of options, and click Create Background Task.

WP Fusion will go through all of your historical entries, processing each according to the feeds set up on the corresponding form. A status bar will appear at the top of the page indicating the progress.

---

## Caldera Forms

**Source:** [https://wpfusion.com/documentation/lead-generation/caldera-forms/](https://wpfusion.com/documentation/lead-generation/caldera-forms/)

### Overview

WP Fusion integrates with [Caldera Forms](https://calderaforms.com/) to add contacts to your CRM when they submit a form on your site. You can also tag contacts based on the form that was submitted.

#### Setup

After creating your form, go to the form Processors tab, and click Add Processor.

![](https://wpfusion.com/wp-content/uploads/2019/04/caldera-forms-1-1024x564.jpg)

From the list select WP Fusion, and a settings panel will display.

![](https://wpfusion.com/wp-content/uploads/2019/04/caldera-forms-2-1024x631.jpg)

At the top you can enter a comma-separated list of any tags you’d like to be applied when the form is submitted.

Beneath this is a list of all the available fields in your CRM. For each field you can associate a field from your form by clicking on the box in the right column.

---

## Convert Pro

**Source:** [https://wpfusion.com/documentation/lead-generation/convert-pro/](https://wpfusion.com/documentation/lead-generation/convert-pro/)

### Overview

WP Fusion extends [Convert Pro](https://www.convertpro.net/) to allow you to target call-to-actions based on a logged-in user’s tags in your CRM.

#### Setup

After designing your CTA, navigate to Configure » Target, and expand the WP Fusion section.

![](https://wpfusion.com/wp-content/uploads/2019/03/convert-pro-2-1024x633.jpg)

Once you’ve turned on the targeting rule you’ll be able to select a tag in your CRM from the dropdown.

- The default logic is “*Show only to users who have this tag”.* With this selected, the CTA will only be displayed when a user is logged in and has the selected tag.
- If you set the logic to “*Hide from users who have the tag”* the CTA will be shown only to guests and registered users who do *not* have the specified tag.

---

## Elementor Forms

**Source:** [https://wpfusion.com/documentation/lead-generation/elementor-forms/](https://wpfusion.com/documentation/lead-generation/elementor-forms/)

### Overview

Using WP Fusion with the Forms element in [Elementor Pro](https://elementor.com/) allows you to send form submissions to any one of of [40+ supported CRMs and marketing automation platforms](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

### Setup

After creating a form, open the Actions After Submit pane and select WP Fusion from the dropdown of available actions.

![](https://wpfusion.com/wp-content/uploads/2018/12/elementor-forms-1.jpg)

A new panel will appear where you can specify any tags that should be applied in your CRM when the form is submitted, as well as set up field mapping between fields on your form and fields in your CRM.

![screenshot](https://wpfusion.com/wp-content/uploads/2018/12/elementor-forms-mapping.jpg)

If your CRM supports lists in addition to tags, you will see an option to **Apply Lists** to contacts who submit the form.

You can also check **Add Only** if you want the form submission to only create new contacts, not update existing ones. If Add Only is enabled and an existing contact is found in your CRM (with the same email address), no data will be synced.

### Return after login

It’s possible to require an email optin via an Elementor form in order to access protected content on your site.

To set this up, first go into the post you’d like to protect, and in the [WP Fusion meta box](https://wpfusion.com/documentation/getting-started/access-control/), enable **Users must be logged in to view this content.**You can optionally specify some required tags. For the **Redirect if access is denied**, select the page with your Elementor form from the dropdown.

Then in the main [WP Fusion settings](https://wpfusion.com/documentation/getting-started/general-settings/), enable the option for [Form Auto Login](https://wpfusion.com/documentation/tutorials/auto-login-links/#form-auto-login). This will start a tracking session whenever your Elementor form is submitted.

Finally, enable the setting for [Return After Login](https://wpfusion.com/documentation/getting-started/general-settings/#return-after-login).

Now, when a visitor tries to access the protected content, they will be redirected to the page with your Elementor optin form on it. When the form is submitted, a contact record will be created in your connected CRM, and any specified tags will be applied.

This will start [an auto-login session](https://wpfusion.com/documentation/tutorials/auto-login-links/), which unlocks any content protected by WP Fusion. Finally, the Return After Login feature will redirect the lead back to the post or page they’d previously tried to access.

### Site tracking scripts

When a visitor submits an Elementor form, **WP Fusion will automatically identify them to your CRM’s tracking script** ([with supported platforms](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/)). This allows you to track page views and interactions on your site, including activity from before the form was submitted.

However, the tracking scripts are triggered each time a new page is *loaded*.

Because Elementor forms are submitted in a background request (the page does not fully reload), the form submission itself will not identify the contact. **They will be identified on the next page they visit** on your site.

![screenshot](https://wpfusion.com/wp-content/uploads/2018/12/brevo-site-tracking-logs-1024x566.jpg)The [event log in Brevo](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#brevo) shows contacts who were identified after submitting an Elementor form. Their activity is also shown on their contact record.
If you want to ensure that all contacts are immediately identified to the site tracking scripts after a form is submitted, you can [configure a redirect action on your form](https://elementor.com/help/redirect-visitors-after-they-submit-a-form/).

By redirecting visitors to a new page with a confirmation message, this will trigger a new page view, and they will be immediately identified to the tracking script.

### Syncing historical entries

If you already have existing Elementor Forms entries from before you installed WP Fusion, you can use a batch processing tool to export all of those entries to your CRM.

First [configure your forms with WP Fusion actions](#setup). Then navigate to Settings » WP Fusion » Advanced and scroll down to the Batch Operations section.

![](https://wpfusion.com/wp-content/uploads/2018/12/elementor-forms-batch-ops-1024x616.jpg)

Select “**Elementor Forms submissions**” from the list of options, and click Create Background Task.

WP Fusion will go through all of your historical entries, processing each according to the actions set up on the corresponding form. A status bar will appear at the top of the page indicating the progress.

After each entry is processed it will be locked by WP Fusion so it can’t be exported again, to prevent duplicate data from going to your CRM.

---

## Ninja Forms

**Source:** [https://wpfusion.com/documentation/lead-generation/ninja-forms/](https://wpfusion.com/documentation/lead-generation/ninja-forms/)

### Overview

WP Fusion integrates with [Ninja Forms](https://wpfusion.com/go/ninja-forms) to save form submissions to your CRM or marketing automation system.

![](https://wpfusion.com/wp-content/uploads/2018/12/ninja-forms-1-1024x650.jpg)

Using WP Fusion you can add and update contacts when forms are submitted, and also apply tags.

#### Setup

After creating a form, navigate to the *Emails & Actions* section and click the blue plus icon to add a new action.

![](https://wpfusion.com/wp-content/uploads/2018/12/ninja-forms-add-action-1024x534.jpg)

Select WP Fusion from the list, and click on the gear icon to open the WP Fusion configuration panel.

![](https://wpfusion.com/wp-content/uploads/2018/12/ninja-forms-2-1024x701.jpg)

At the top you will see a setting for **Apply Tags**. Here you can enter a comma-separated list of tags to apply in your CRM when the form is submitted. You can use either tag labels or tag IDs.

Below you will see a field mapping interface. Click **Add New** to add a new field mapping. In the left column you’ll be able to select a field from your Ninja Form, and in the right column you’ll be able to select a corresponding field in your connected CRM.

**Note:** For guest (not logged-in) form entries to sync, you must have *at least* an email address field on the form and configured for sync.

### Syncing historical entries

If you already have existing Ninja Forms entries from before you installed WP Fusion, you can use a batch processing tool to export all of those entries to your CRM.

First configure your form feeds. Then navigate to Settings » WP Fusion » Advanced and scroll down to the Batch Operations section.

![](https://wpfusion.com/wp-content/uploads/2018/12/ninja-forms-batch-tool-1024x565.jpg)

Select “**Ninja Forms entries**” from the list of options, and click Create Background Task.

WP Fusion will go through all of your historical entries, processing each according to the WP Fusion actions set up on the corresponding form. A status bar will appear at the top of the page indicating the progress.

After each entry is processed it will be locked by WP Fusion so it can’t be exported again, to prevent duplicate data from going to your CRM.

---

## WPForms

**Source:** [https://wpfusion.com/documentation/lead-generation/wpforms/](https://wpfusion.com/documentation/lead-generation/wpforms/)

### Overview

WP Fusion integrates with [WPForms](https://wpfusion.com/go/wpforms) to save form submissions to your CRM or marketing automation system. Using WP Fusion you can add and update contacts when forms are submitted, and also apply tags.

### Setup

After creating a form, navigate to the Marketing settings section and select WP Fusion from the list. Click “Add New Connection” to create a new feed.

![screenshot](https://wpfusion.com/wp-content/uploads/2018/11/wpforms-connection-1024x525.jpg)

For each field on your form you can select the corresponding CRM field where the data should be stored.

You can also specify any tags that should be applied to contacts when the form is submitted.

### Conditional Logic

You can also create multiple connections and use the conditional logic options to apply different tags depending on the values of form fields.

To avoid having to re-map your form fields for each condition, check the toggle for *Use as primary field mapping* on the connection you want to use to map your fields.

![screenshot](https://wpfusion.com/wp-content/uploads/2018/11/wp-forms-conditional-logic-1024x948.jpg)Create a single connection containing your field mapping, and then create multiple additional connections to apply tags based on conditional logic.
The field mapping for the selected connection will be used to create or update the contact in your CRM, and then tags in the remaining connections will be dynamically applied based on the configured conditional logic.

---

## Formidable Forms

**Source:** [https://wpfusion.com/documentation/lead-generation/formidable-forms/](https://wpfusion.com/documentation/lead-generation/formidable-forms/)

### Overview

WP Fusion integrates with [Formidable Forms](https://formidableforms.com) to add contacts to your [CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they submit a form on your site. You can also tag contacts based on the form that was submitted.

### Setup

After creating your form, go to the form settings and click on Actions & Notifications. From the actions row, click the WP Fusion icon to add a new form action.

![](https://wpfusion.com/wp-content/uploads/2017/01/formidable-forms-action-1024x616.jpg)

Then the WP Fusion form action panel will appear.

![](https://wpfusion.com/wp-content/uploads/2017/01/formidable-forms-action-1-1024x979.jpg)

For each field on your form, you can select a corresponding contact field in your CRM to save the data. You can also specify tags to be applied to the contact when they fill out the form.

If you are using Formidable Forms Pro and [conditional logic](https://formidableforms.com/knowledgebase/using-add-form-actions/#kb-conditional-logic), you can create multiple WP Fusion form actions to apply different tags based on your conditional logic rules.

### Payments

If you’re using a payment gateway addon for Formidable Forms (or the free Stripe integration with Formidable Forms Lite), you can also optionally trigger your WP Fusion actions based on payment or subscription status.

![](https://wpfusion.com/wp-content/uploads/2017/01/formidable-forms-payment-statuses-1024x438.jpg)

These options will appear in the *Trigger this action when* dropdown when editing the WP Fusion actions on any payment form.

**Note:** The *Payment Failed* trigger refers to a failed recurring payment. A failed initial payment will trigger the *Entry is created* trigger but will not fire any of the other triggers.

For more information [see the Formidable Forms documentation](https://formidableforms.com/knowledgebase/stripe/#kb-trigger-actions-after-payment).

### User Registration

If you’re using the [User Registration addon for Formidable Forms](https://formidableforms.com/user-registration/), WP Fusion can also sync user registrations and profile updates to your connected CRM.

In this case it’s not necessary to set up a WP Fusion form action.

#### Action Setup

After creating your registration or profile form, add a User Register action under the Actions and Notifications panel in the Formidable Forms settings.

![](https://wpfusion.com/wp-content/uploads/2017/01/formidable-registration-1-1024x472.jpg)

For each form entry you’d like to save to the user record, create a meta name, and select the corresponding form field.

For more information on the User Registration action setup, [see the Formidable Forms documentation](https://formidableforms.com/knowledgebase/user-registration/#kb-create-registration-form).

#### Syncing the fields to your CRM

Once you’ve configured the User Registration action, head to the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings and scroll down to the **Formidable Forms Registration** section.

![](https://wpfusion.com/wp-content/uploads/2017/01/formidable-registration-2-1024x293.jpg)

For each registration field you’ll be able to select a corresponding field in your CRM to store the data.

When a user registers or updates their profile, the selected fields will be synced to your CRM.

---

## Contact Form 7

**Source:** [https://wpfusion.com/documentation/lead-generation/contact-form-7/](https://wpfusion.com/documentation/lead-generation/contact-form-7/)

### Overview

Using WP Fusion, you can send entries from [Contact Form 7](https://wordpress.org/plugins/contact-form-7/) to any one of [42+ supported CRMs and marketing automation tools](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

### Setup

Navigate to your contact forms by going to Contact » Contact Forms in your WordPress admin. Click edit under the contact form you want to set up a CRM connection for.

![](https://wpfusion.com/wp-content/uploads/2016/05/contact-form-7-964x1024.jpg)

First add any fields to your form that you want to sync with your CRM, and then save the form. Then click on the WP Fusion tab to configure the field mapping between each form field and custom fields in your CRM.

You can also apply tags to contacts when the form is submitted.

When the form is submitted a new contact record will be created in your CRM containing all of the fields you’ve enabled for sync. If an existing contact is found (by email address), then the existing contact will be updated (no duplicate contact will be created).

### Payments

When using any of the ZealousWeb payment plugins for Contact Form 7, like [Stripe](https://www.zealousweb.com/store/accept-stripe-payments-using-contact-form-7-pro/), [PayPal](https://www.zealousweb.com/store/accept-paypal-payments-using-contact-form-7-pro/), or [Authorize.net](https://www.zealousweb.com/store/accept-authorize-net-payments-using-contact-form-7-pro/), an additional setting will appear allowing you to specify tags to apply when a payment has been successfully processed.

![](https://wpfusion.com/wp-content/uploads/2016/05/zealousweb-cf7-tags-1024x742.jpg)WP Fusion adds the option to apply tags specifically when payments are received via Contact Form 7 forms.

---

## Gravity Forms

**Source:** [https://wpfusion.com/documentation/lead-generation/gravity-forms/](https://wpfusion.com/documentation/lead-generation/gravity-forms/)

### Overview

WP Fusion integrates with [Gravity Forms](https://wpfusion.com/go/gravity-forms) to send new form submissions to [any one of 40+ CRMs and marketing automation tools](https://wpfusion.com/documentation/faq/crm-compatibility-table/), allowing you to track and engage with leads.

It also supports the [Gravity Forms User Registration Add-on](https://www.gravityforms.com/add-ons/user-registration/) for user registrations.

### Setup

First create a form in Gravity Forms and save it. Then you’ll be able to access the WP Fusion feeds list via the Form Settings menu.

![](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-form-settings-1024x540.jpg)

Here you can see all your WP Fusion “feeds”. Click *Add New* to create a new feed.

![](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-feeds-settings-1024x601.jpg)

You can optionally create multiple feeds that sync different fields or apply different tags— for more information, see [Conditional Logic](#conditional-logic) below.

#### Feed Settings

On the feed settings panel, you can press the + icon to add a new field mapping.

In the left column you can use the dropdown to select a custom field in your CRM, in the right column you can select a field from your form.

![a form settings page for wp fusion integrated with gravity forms displays feed settings and field mapping options, allowing users to map crm fields like first name, last name, email, and birthday. a preview button is in the top right corner.](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-new-field-mapping-1024x710.jpg)

For custom values, select “Add Custom Value” from the dropdown and enter a [merge tag](https://docs.gravityforms.com/field-merge-tags/) or custom text.

#### Tagging leads

Underneath the field mapping list, you can configure any tags you’d like to be applied when the form is submitted.

![](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-feed-additional-settings-1024x843.jpg)

Depending on your connected CRM you may see an option to select lists in addition to tags.

#### Conditional logic

By checking the box for **Opt-in Condition**, you can enable conditional logic on your WP Fusion feeds.

Using conditional logic, you can create multiple form feeds that apply different tags or sync different fields based on the submitted form values.

#### Payments

If your form collects payments (via Stripe, PayPal, or any other Gravity Forms payment gateway), you have the option to process the WP Fusion feed based on the customer’s payment status.

![](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-payment-status-1024x416.jpg)

The options are:

- Process this feed regardless of payment status
- Process this feed only if the payment is successful
- Process this feed only if the payment fails

#### Quizzes

If you’re using the [Gravity Forms Quiz Addon](https://www.gravityforms.com/add-ons/quiz/), WP Fusion provides additional options for syncing quiz data with your CRM.

![](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-quizzes-1024x565.jpg)

In addition to being able to sync the responses to quiz questions with custom fields in your CRM, you can sync four additional quiz fields.

- **Quiz Score Total:**This will be the total number of points earned— either one point for each correct answer, or a variable amount of points per question if you are using [weighted scoring rules](https://docs.gravityforms.com/quiz-scoring/#h-weighted-scoring-rules).
- **Quiz Score Percentage:**This will be the quiz score as a percentage, for example 85%.
- **Quiz Grade:**If you are using letter grading, this will be the letter grade earned for the quiz.
- **Quiz Pass/Fail:**This will sync a boolean value (
```
true
```

 or 
```
false
```

, i.e. for updating a checkbox in your CRM), depending on if the user passed or failed the quiz.

For more information on the different scoring options with Gravity Forms, see [Quiz Scoring](https://docs.gravityforms.com/quiz-scoring/).

For applying tags based on quiz answers or scores, you can create multiple feeds using [conditional logic](#conditional-logic).

#### Video

Here is a video showing the process.

### Form field conditional logic

WP Fusion allows you to use tags or lists in your connected CRM to control the visibility of fields on Gravity Forms forms.

This can be used to create personalized forms based on a user’s membership level, subscription status, or even answers to questions on other forms.

![](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-fields-conditional-logic-1024x592.jpg)

To configure, click on any field, and open the Conditional Logic settings panel.

Click the toggle to enable conditional logic, and then from the dropdown choose CRM Tags. You have the option to select *user has tag* or *user does not have tag*, and then you can select a tag from the third dropdown.

If the user does not meet the condition, the field will be hidden.

### Auto-login

You can enable [auto login](https://wpfusion.com/documentation/tutorials/auto-login-links/) on individual form feeds by checking the box for **Auto Login** in the WP Fusion feed settings.

If you have auto login enabled on the form feed or [form auto login](https://wpfusion.com/documentation/tutorials/auto-login-links/) enabled in the main WP Fusion settings, tracking cookies will be set when a visitor submits a form. This allows you to apply tags via a form submission and then use those tags on subsequent pages to grant access to content and track activity.

#### Pre-fill form fields

You can pre-fill Gravity Forms form fields with user data, and this also works with auto-login sessions. For example 
```
{user:first_name}
```

.

For a reference, see the [Gravity Forms documentation](https://docs.gravityforms.com/user-merge-tag/).

Note that the field names must be usermeta field names, not CRM field names (you can see your usermeta field names when looking at [the Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings).

When the auto-login link is visited, any enabled fields are loaded from your CRM and cached in the corresponding user meta field keys in WordPress. It’s these fields that are then displayed by the 
```
{user:field_name}
```

 merge tag.

Note that as of v3.38.5 of WP Fusion, this feature no longer requires **Set Current User** to be enabled in WP Fusion’s [auto-login settings](https://wpfusion.com/documentation/tutorials/auto-login-links/#set-current-user), it will work automatically when an auto-login session is detected.

### Return after login

It’s possible to require an email optin via a Gravity Forms form in order to access protected content on your site.

To set this up, first go into the post you’d like to protect, and in the [WP Fusion meta box](https://wpfusion.com/documentation/getting-started/access-control/), enable **Users must be logged in to view this content.**You can optionally specify some required tags. For the **Redirect if access is denied**, select the page with your form from the dropdown.

Then in the main [WP Fusion settings](https://wpfusion.com/documentation/getting-started/general-settings/), enable the option for [Form Auto Login](https://wpfusion.com/documentation/tutorials/auto-login-links/#form-auto-login). This will start a tracking session whenever your form is submitted.

Finally, enable the setting for [Return After Login](https://wpfusion.com/documentation/getting-started/general-settings/#return-after-login).

Now, when a visitor tries to access the protected content, they will be redirected to the page with your Gravity Forms optin form on it. When the form is submitted, a contact record will be created in your connected CRM, and any specified tags will be applied.

This will start [an auto-login session](https://wpfusion.com/documentation/tutorials/auto-login-links/), which unlocks any content protected by WP Fusion. Finally, the Return After Login feature will redirect the lead back to the post or page they’d previously tried to access.

### Merge fields

WP Fusion makes a 
```
{contact_id}
```

 merge field available for use in Gravity Forms notifications.

![](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-merge-field-1024x509.jpg)

You can use this to include a link to the contact record in notification emails, or to add the contact ID to a query parameter in a redirect URL.

### Managing entries

When WP Fusion processes a Gravity Forms entry it will add a note to the entry indicating the contact ID that was created/updated in your CRM. If there are any API errors these will also be saved as a note on the entry.

![](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-entry-1024x567.jpg)

WP Fusion also adds a metabox to the side of every entry where you can view the status of that entry, with a link to view the corresponding contact record in your CRM.

If an entry didn’t sync correctly for some reason, you can click the **Process WP Fusion actions again** button to re-send the form entry to your CRM.

### Enhanced Ecommerce

Using WP Fusion’s [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/), you can sync Gravity Forms entries and payments with the ecommerce or sales component in your connected CRM.

		The CRMs supported by Enhanced Ecommerce are listed below. Click on each to learn more about the capabilities of the integration.

- [ActiveCampaign](https://wpfusion.com/documentation/ecommerce-tracking/activecampaign-ecommerce/)
- [AgileCRM](https://wpfusion.com/documentation/ecommerce-tracking/agilecrm-ecommerce/)
- [Brevo](https://wpfusion.com/documentation/ecommerce-tracking/brevo-enhanced-ecommerce/)
- [Drip](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/)
- [Groundhogg](https://wpfusion.com/documentation/ecommerce-tracking/groundhogg-ecommerce/)
- [HighLevel](https://wpfusion.com/documentation/ecommerce-tracking/highlevel-ecommerce/)
- [HubSpot](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/)
- [Infusionsoft / Keap](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/)
- [MailerLite](https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/)
- [NationBuilder](https://wpfusion.com/documentation/ecommerce-tracking/nationbuilder-ecommerce/)
- [Ontraport](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/)
- [Salesforce](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/)
		
This can work in two ways depending on your connected CRM’s capabilities:

#### CRMs with sales pipelines

For CRMs with sales pipelines (like Brevo, HighLevel, HubSpot, and Zoho), the Enhanced Ecommerce settings section will show on *all* WP Fusion feeds regardless of whether or not the form is a payment form.

![](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-deals-pipelines-sendinblue-1024x669.jpg)In this screenshot, a mix of Gravity Forms lead form optins and payments have been synced to deal stages in Brevo’s CRM.
After enabling **Enhanced Ecommerce** for the feed, you can configure three settings:

- **Deal Title:**This will be the title of the deal in the CRM. Merge tags are supported.
- **Deal Stage:**This is the stage or pipeline for the deal.
- **Deal Value:**This is the value of the deal. For payment forms this will default to the total value of the form. You can also select any product field, or choose *No value* to sync the deal without a value (i.e. for lead generation forms).

![](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-enhanced-ecommerce-1024x890.jpg)

#### Ecommerce CRMs

For CRMs with an ecommerce component (like ActiveCampaign, Drip, Ontraport, and Infusionsoft), the option to enable **Enhanced Ecommerce** will only appear on forms that accept payments.

By enabling the **Enhanced Ecommerce** checkbox, any payments will be synced to your CRM’s ecommerce component, and will show up on the customer’s contact record and update their lifetime value.

![](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-ecommerce-keap-1024x782.jpg)Gravity Forms payments are shown in Infusionsoft with their order total and products (including shipping and discounts).

### Event Tracking

Using the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/), you can track Gravity Forms entries as events in supported CRMs.

Events can be configured when editing individual forms, by creating an Event Tracking Feed:

![](https://wpfusion.com/wp-content/uploads/2016/01/event-tracking-gravity-forms-1024x530.jpeg)Event tracking can be configured on the Event Tracking Feed when editing any Gravity Forms
		The Event Tracking addon currently supports the following plugins:

- [AffiliateWP](https://wpfusion.com/documentation/affiliates/affiliate-wp/#event-tracking)
- [bbPress (and BuddyBoss / BuddyPress forums)](https://wpfusion.com/documentation/forums/bbpress/#event-tracking)
- [BuddyPress / BuddyBoss](https://wpfusion.com/documentation/membership/buddypress/#event-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#event-tracking)
- [EDD Software Licensing](https://wpfusion.com/documentation/ecommerce/edd-software-licensing/#event-tracking)
- [Gamipress](https://wpfusion.com/documentation/gamification/gamipress#event-tracking)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#event-tracking)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#event-tracking)
- [LearnDash](https://wpfusion.com/documentation/learning-management/learndash/#event-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#event-tracking)
- [Presto Player](https://wpfusion.com/documentation/other/presto-player#event-tracking)
- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#event-tracking)
- [WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#event-tracking)
- [WP Fusion’s Abandoned Cart addon](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#event-tracking)
		

### Syncing historical entries

If you already have existing Gravity Forms entries from before you installed WP Fusion, you can use a batch processing tool to export all of those entries to your CRM.

First configure your form feeds. Then navigate to Settings » WP Fusion » Advanced and scroll down to the Batch Operations section.

![](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-export-1024x630.jpg)

Select “**Gravity Forms entries**” from the list of options, and click Create Background Task.

WP Fusion will go through all of your historical entries, processing each according to the feeds set up on the corresponding form. A status bar will appear at the top of the page indicating the progress.

After each entry is processed it will be locked by WP Fusion so it can’t be exported again, to prevent duplicate data from going to your CRM.

---

