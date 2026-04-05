# Crm Specific Docs

*Category from WP Fusion - Abandoned Cart Addon documentation*

---

## Pipedrive Labels

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/)

## Overview

Pipedrive offers a built-in [Labels](https://support.pipedrive.com/en/article/contact-labels) system for organizing and segmenting your contacts. For the purposes of segmenting contacts, [restricting access to content](https://wpfusion.com/documentation/getting-started/access-control/), and [tracking user activity](https://wpfusion.com/documentation/getting-started/tracking-user-activity/) on your site, WP Fusion can use either Labels or a custom multiselect field.

## Labels vs. Custom Fields

### When to Use Labels

Pipedrive’s built-in Labels system is the recommended approach for most WP Fusion users. Benefits include:

- **Native integration:** Labels are a core Pipedrive feature with full platform support
- **Visual organization:** Each label can have its own color for easy visual identification
- **Better performance:** Labels are optimized for filtering and searching in Pipedrive
- **No setup required:** Works out of the box without creating custom fields
- **Mobile support:** Labels display properly in Pipedrive’s mobile apps

### When to Use a Custom Multiselect Field

In some cases, you may prefer to use a custom multiselect field instead of labels:

- **Migration from existing setup:** If you’re already using a custom field for segmentation
- **Custom field requirements:** When you need segmentation data to appear in custom reports or specific views
- **Label limit concerns:** If you’re approaching Pipedrive’s label limits and need separate tracking
- **Integration requirements:** When other tools or integrations expect a specific custom field

## Configuration

### Default Setup (Labels)

When you first connect WP Fusion to Pipedrive, the integration will automatically detect and use the 
```
label_ids
```

 field for segmentation. You can verify this in **WP Fusion » Settings » Setup** under the **Segmentation Field** setting.

### Custom Field (“Tags”)

To use a custom field for segmenting contacts with Pipedrive, open Pipedrive and head to Settings » Data Fields.

![](https://wpfusion.com/wp-content/uploads/2022/10/pipedrive-tags-2-1024x606.jpg)

Click **Add custom field**, and choose *Multiple Options* as the field type.

![](https://wpfusion.com/wp-content/uploads/2022/10/pipedrive-tags-1024x599.jpg)

Now you can enter your available tags into the options list.

If you name the field “Tags”, WP Fusion will detect it and load the available tags automatically once the connection to Pipedrive is initialized.

If you use a different name, you can also manually select the desired tags field from the Setup tab.

![](https://wpfusion.com/wp-content/uploads/2022/10/pipedrive-tags-3-1024x689.jpg)

After changing the segmentation type, click Refresh Available Tags & Fields in the WP Fusion settings to load the updated options.

## Managing Labels in Pipedrive

Labels in Pipedrive are managed centrally and can be applied to any person record:

1. In Pipedrive, go to **Settings » Data fields » Labels**
2. Create new labels with descriptive names and colors
3. Apply labels to person records as needed

WP Fusion will automatically sync these labels to WordPress when you click **Resync Tags** in the WP Fusion settings.

### Read-Only Labels

**Important:** WP Fusion can apply and remove existing labels from contact records, but it cannot create new labels in Pipedrive through the API. All labels must be created in Pipedrive first, then synced to WP Fusion.

This is by design—it ensures your label taxonomy remains organized and prevents automatic creation of unwanted or duplicate labels.

---

## ActiveCampaign Accounts

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/)

### Overview

As of [WP Fusion v3.44.21](https://wpfusion.com/documentation/faq/changelog/), the ActiveCampaign integration has the ability to create and update [Accounts in ActiveCampaign](https://help.activecampaign.com/hc/en-us/articles/360008034900-How-to-use-Accounts-in-ActiveCampaign), and associate contacts with accounts.

Accounts are normally used for keeping track of business entities and their related contacts.

![accountactivitystream crm](https://wpfusion.com/wp-content/uploads/2025/01/AccountActivityStream_CRM-1024x502.webp)Accounts in ActiveCampaign allow you to keep track of your relationships with businesses and other organizations that may have multiple contacts.

### Setup

If you’ve just updated WP Fusion to 3.44.21, first click *Refresh Available Tags and Fields* in the WP Fusion settings to load your available account fields into the CRM field dropdowns.

![screenshot](https://wpfusion.com/wp-content/uploads/2025/01/activecampaign-account-field-mapping-1024x325.jpg)

The Account Fields will appear in a group at the bottom of the list, beneath Standard Fields and Custom Fields.

WP Fusion supports all the standard account fields in addition to [custom account fields](https://help.activecampaign.com/hc/en-us/articles/360008034920-Custom-account-field-overview).

### How it works

When a user or customer’s data is synced to ActiveCampaign, WP Fusion will identify any account-related field mappings. An account will then be created or updated as necessary, and the contact will be linked to the account.

The functionality works differently depending on the scenario:

#### If a contact is new or not linked to an account

If a contact is not linked to an account, WP Fusion will use the Account Name field to attempt to find an existing account with that name. If a match is found, that account will be updated with any provided account fields, and the contact will be linked to the account.

If no match is found, a new account will be created based on the provided data, and the contact will be linked to the new account.

#### If a contact is already linked to an account

**If a contact is already linked to an account in ActiveCampaign**, and the Account Name field in the synced data matches the name on the ActiveCampaign account, then the existing account will be updated with any provided account fields or custom fields.

This also applies if the Account Name field is not synced at all— WP Fusion will update the contact’s existing account based on the linked account ID stored on their contact record.

**Tip:** If all your contacts in ActiveCampaign are already linked with accounts, and you just want to update existing account details without accidentally creating new accounts (for example due to a typo), keep the *Account Name* field sync disabled in the [contact fields settings](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).
**If the contact is synced with an Account Name that does not match their current account**, WP Fusion will attempt to find an existing account with that name. If a match is found, the contact’s existing account relationship will be deleted, and they will be linked to the new account (ActiveCampaign contacts can only be linked to one account at a time).

The existing account will be updated with any custom account fields supplied with the contact data.

If no match is found, WP Fusion will create a new account based on the Account Name and provided account data, and the contact will be linked to that account.

![Screenshot shows WP Fusion updating a contact's account association after they supplied a new Billing Company at checkout.](https://wpfusion.com/wp-content/uploads/2025/01/activecampaign-accounts-1024x918.jpg)This example shows WP Fusion updating a contact’s account association after they supplied a new Billing Company at checkout.
In the example above from the [WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/), you can see WP Fusion updating an existing contact’s account association after they supplied a new Billing Company at checkout.

The new account was created based on the provided data, the contact was un-linked from their previous account, and linked to the new account.

---

## Updating Leads with ConvertFox, Intercom, and Zoho

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/updating-leads/](https://wpfusion.com/documentation/crm-specific-docs/updating-leads/)

### Overview

With most CRMs, WP Fusion interfaces with the Contacts object by default, though this can be [overridden with a filter](https://wpfusion.com/documentation/filters/wpf_crm_object_type/).

With ConvertFox, Intercom, and Zoho, the Lead object is sufficiently similar to the Contact object that WP Fusion can automatically switch between the object types during a form submission.

To enable this, check the box for Sync Leads on the Integrations tab in the WP Fusion settings.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/08/zoho-sync-leads-1024x636.jpg)

Whenever a form is submitted from one of WP Fusion’s [supported form integrations](https://wpfusion.com/documentation/#lead-generation), WP Fusion will first check to see if there is a matching contact ID for the submitted email address.

If no contact is found, WP Fusion will create a new Lead record instead of a new Contact record (it will also update an existing Lead record if one is found).

Note this is an experimental feature and may not work with all tags or custom fields. For more flexibility, consider using the [wpf_crm_object_type filter](https://wpfusion.com/documentation/filters/wpf_crm_object_type/).

---

## Klaviyo marketing consent

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/)

### Overview

With Klaviyo, subscribers can be added to lists with either implicit or explicit marketing consent. You will only be able to send marketing emails to subscribers who have given their explicit consent to receive email marketing.

### Understanding explicit vs. implicit consent

#### Implicit consent

**Implicit consent** is when someone gives you their contact information (e.g., email address, phone number, etc.) but does not explicitly say they want to receive marketing messages from your brand.

These profiles will have the consent status 
```
NEVER_SUBSCRIBED
```

. A common example of implicit consent is when a customer makes a purchase and provides their email at checkout. They have not explicitly said they want to receive marketing messages from the brand, but it can be inferred that they have an interest in relevant content. In this case, you have their information, but they haven’t agreed to receive marketing communications.

These profiles are able to receive emails, but you should exercise caution when contacting them. Depending on your local regulations, you may (or may not) be permitted to email these profiles if you believe they have implied consent. Read [Understanding explicit vs. implicit consent](https://help.klaviyo.com/hc/en-us/articles/4404203889947) to learn more, and make sure to check your local laws and regulations regarding implicit consent.

#### Explicit consent

**Explicit consent** occurs when someone directly tells you that they want to receive marketing messages from your brand. You can get express consent when they:

- Sign up through a form
- Give you their information on an in-person mailing list (in your store or at a booth)
- Tell you verbally that they want to get marketing messages from you and provide you with their contact information
- Opt in to a push notifications through a permission prompt when opening the app
- With explicit consent, the subscriber must knowingly consent to receive marketing messages.

### Marketing permissions with WP Fusion

By default WP Fusion adds subscribers to Klaviyo lists with the 
```
NEVER_SUBSCRIBED
```

 status. This means subscribers can receive emails, but they will not show as confirmed for marketing.

You can choose to add subscribers to specific lists with marketing consent by selecting the alternate *(opt-in to marketing)*list name in the WP Fusion Select Lists dropdown.

![](https://wpfusion.com/wp-content/uploads/2024/02/klaviyo-marketing-consent-lists-1024x596.jpg)

In this case the subscriber will be added to the list as 
```
SUBSCRIBED
```

. The current timestamp will be used as the date of consent, and the marketing consent source will be recorded as 
```
WP Fusion
```

.

---

## HighLevel white-labelled accounts

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/highlevel-white-labelled-accounts/](https://wpfusion.com/documentation/crm-specific-docs/highlevel-white-labelled-accounts/)

### Overview

When using a white-labelled [HighLevel](https://wpfusion.com/go/highlevel) account, it’s also possible to white-label the CRM name in the WordPress admin, or even white-label WP Fusion itself.

### White-labelling the CRM name in WP Fusion

Renaming the CRM in the WP Fuusion UI can be achieved with the [wp_fusion_init_crm action](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/).

```
function wpf_whitelabel_crm( &$crm ) {
	$crm->name = 'Custom Name';
}

add_action( 'wp_fusion_init_crm', 'wpf_whitelabel_crm' );
```

### Change the View in CRM links

This example changes the *View in CRM* links across the WP Fusion UI. The 
```
%s
```

 will be replaced by the contact ID of the relevant contact.

```
function wpf_rewrite_view_in_crm_links( &$crm ) {
	$crm->edit_url = 'https://app.mybrand.com/v2/location/' . $crm->location_id . '/contacts/detail/%s';
}
add_action( 'wp_fusion_init_crm', 'wpf_rewrite_view_in_crm_links' );
```

### White-labelling WP Fusion

For more info on white-labelling WP Fusion, see [this documentation page](https://wpfusion.com/documentation/advanced-developer-tutorials/white-labelling-wp-fusion/).

---

## Zoho Tags

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/zoho-tags/](https://wpfusion.com/documentation/crm-specific-docs/zoho-tags/)

### Overview

Zoho has very limited support for tags, which can make it difficult to segment your contacts with WP Fusion.

The total number of tags you can have in your account are:

- 10 on Standard
- 30 on Professional
- 50 on Enterprise

The maximum number of tags a single contact can have regardless of plan is 10.

As a workaround, WP Fusion offers the option to use a multi-select field for segmentation in Zoho instead of tags.

### Setup

To enable this, go into the Zoho Setup » Modules and Fields » Contacts and add a new multi-select field to your contact record layout.

![](https://wpfusion.com/wp-content/uploads/2023/06/zoho-picklist-options-1024x664.jpg)

The name of the field can be anything you like. For the Multi Pick List Options, enter any tags you would like to use with WP Fusion.

Back in the WP Fusion settings, on the Setup tab, choose Multi-Select from the **Segment Type** selector.

![](https://wpfusion.com/wp-content/uploads/2023/06/zoho-use-multi-select-as-tags-1024x574.jpg)

In the dropdown, select your multi-select field. If the field doesn’t appear, first click Refresh Available Tag & Fields to load your new field.

Save the settings, and WP Fusion will update the saved tags for all users based on the values in your selected multi-select field.

**Note:** If you had previously configured products, memberships, and access rules using Zoho tags and are switching to a multi-select, these settings *do not* need to be updated. As long as the “tag” names are the same, the settings will copy over automatically between the Tags and Multi-select segment types.

---

## Dynamics 365 – Associating entities

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/)

### Overview

Dynamics 365 Marketing supports linking records with each other via the use of lookup fields— for example linking a Contact to an Account, or associating an Account with an Owner.

### Mapping lookup fields

When [mapping fields between WordPress and Dynamics](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) via the WP Fusion settings, lookup fields will be indicated in the dropdowns with a *Lookup Field* badge.

![](https://wpfusion.com/wp-content/uploads/2023/02/lookup-fields-in-settings-1024x412.jpg)

### Updating lookup fields

You can update a lookup field to link a contact to another entity. The syntax for this is the entity name, followed by the entity’s ID in parenthesis. For example

- ```
/systemusers(5cfb32d8-dbb4-ed11-9885-6045bd01004c)
```

: To set a contact’s owner
- ```
/accounts(bb49b790-c3b6-ed11-83fe-002248041c09)
```

: To set a contact’s account

If you try to sync a value with a lookup field that does not match this pattern, WP Fusion will record a notice to the logs, and the data will be removed from the payload being sent to the CRM (to avoid an API error).

![](https://wpfusion.com/wp-content/uploads/2023/02/dynamics-lookup-fields-error-1024x286.jpg)

For more information on working with lookup fields and associated entities, see [Associate and disassociate entities using the web API](https://learn.microsoft.com/en-us/previous-versions/dynamicscrm-2016/developers-guide/mt607875(v=crm.8)).

#### Multi-value lookup fields

As of [v3.41.23](https://wpfusion.com/documentation/faq/changelog/#3-41-23), WP Fusion also supports updating multi-value lookup fields (for example the Customer field on the Case object).

Multi-value lookup fields can accept multiple object types for their relationships, and this is reflected in the WP Fusion UI.

In the CRM field dropdown, you’ll see each of the supported lookup values for the field next to the field name.

![](https://wpfusion.com/wp-content/uploads/2023/02/d365-multi-value-lookup-fields-1024x396.jpg)

In this example, if we selected the first option, **Customer (Lookup Field » Account)**, we could sync a value of 
```
/accounts(bb49b790-c3b6-ed11-83fe-002248041c09)
```

 to set the Case’s Customer field to be linked to an account with that ID.

Or, we could select **Customer (Lookup Field » Contact)**and sync a value of 
```
/contacts(cb49b790-c3b6-ed11-83fe-002248041c09)
```

 to link the Case with the customer of that ID.

---

## Mautic Points

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/mautic-points/](https://wpfusion.com/documentation/crm-specific-docs/mautic-points/)

### Overview

Mautic has a [built-in lead scoring system](https://docs.mautic.org/en/points) called points. While WP Fusion doesn’t have a visual interface for assigning points, it’s pretty easy to do so with a short snippet of custom code.

### Examples

#### Add ten points when a form is submitted

This example runs on the [wpf_forms_post_submission hook](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/) and adds 10 points to a contact in Mautic after WP Fusion has synced it to Mautic from one of our [supported form integrations](https://wpfusion.com/documentation/#lead-generation).

```
function add_points_in_mautic( $update_data, $user_id, $contact_id, $form_id ) {

	$points = 10;

	wp_remote_post(
		wp_fusion()->crm->url . "api/contacts/{$contact_id}/plus/{$points}",
		wp_fusion()->crm->get_params()
	);

}

add_action( 'wpf_forms_post_submission', 'add_points_in_mautic', 10, 4 );
```

#### Add 50 points when an order is placed

By changing the hook to [wpf_woocommerce_payment_complete](https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/), we can likewise assign 50 points after an order has been placed.

```
function add_points_in_mautic( $order_id, $contact_id ) {

	$points = 50;

	wp_remote_post(
		wp_fusion()->crm->url . "api/contacts/{$contact_id}/plus/{$points}",
		wp_fusion()->crm->get_params()
	);

}

add_action( 'wpf_woocommerce_payment_complete', 'add_points_in_mautic', 10, 2 );
```

---

## MailerLite double opt-ins

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/)

### Overview

Using WP Fusion with [MailerLite](https://wpfusion.com/go/mailerlite) you have several options for managing your subscribers’ opt-in status.

### Default opt-in status

You can configure WP Fusion’s default status for new subscribers at Settings » WP Fusion » General » Default Optin Status.

![](https://wpfusion.com/wp-content/uploads/2022/12/mailerlite-default-optin-status-1024x385.jpg)

The options are:

- **Default:**WP Fusion will not specify an opt-in status for new subscribers. This means subscribers will follow the status you’ve configured in MailerLite— either active (by default), or unconfirmed if you’ve enabled [Double opt-in for API and integrations](https://www.mailerlite.com/help/how-to-use-double-opt-in-when-collecting-subscribers#new/enable-double-opt-in-for-api).
- **Active:**All subscribers created by WP Fusion will be set to active.
- **Unconfirmed:**All subscribers created by WP Fusion will be set to unconfirmed, and a double opt-in email will be sent.
- **Unsubscribed:**All subscribers created by WP Fusion will be set to unsubscribed. You can still use groups to [grant access to content](https://wpfusion.com/documentation/getting-started/access-control/) in WordPress, but you will not be able to send emails to the subscribers, and they will not count towards your plan limit.

#### MailerLite subscribe settings

In MailerLite, at Account Settings » Subscribe Settings, you can set your opt-in preference for subscribers added over the API.

![](https://wpfusion.com/wp-content/uploads/2022/12/mailerlite-subscribe-settings-1024x396.jpg)

If you enable **Double opt-in for API and integrations** and WP Fusion creates a subscriber either with the status set to “default”, or “unconfirmed”, then MailerLite will send a double op-tin email to confirm their subscription.

If **Double opt-in for API and integrations**is disabled, MailerLite will never send a double opt-in email to subscribers created by WP Fusion— regardless of their status.

### Overriding the default status

It’s also possible to override the default status, in the case of an ecommerce plugin, or form.

#### Ecommerce plugins

With [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#email-optins), [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#email-optins), and [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#email-optins), WP Fusion includes the option to add an email marketing opt-in checkbox to your payment forms.

![](https://wpfusion.com/wp-content/uploads/2016/01/woo-email-optin-1024x615.jpg)With WooCommerce, WP Fusion [includes the option](https://wpfusion.com/documentation/ecommerce/woocommerce/#email-optins) to add an email marketing opt-in checkbox to the checkout form.
To sync this email opt-in field with MailerLite, first enable it for sync from [the Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/), and map it to the Optin Status field in MailerLite.

![](https://wpfusion.com/wp-content/uploads/2022/12/mailerlite-woo-optin-field-1024x203.jpg)

The value of this field will override the default opt-in status set in the General settings. The logic works like this:

**For new subscribers:**

- If the opt-in checkbox is *checked*, the subscriber will be created as *unconfirmed*, and a double-opt-in email will be triggered.
- Unless the default opt-in status in the General settings is *active*. In that case, the subscriber will be created as active.
- If the opt-in checkbox is *un-checked*, the subscriber will be created as *unsubscribed.*

**For existing subscribers:**

- If the opt-in checkbox is checked and the subscriber’s current status is *unsubscribed*, their status will be updated to *unconfirmed*(and a confirmation email will be sent).
- If the subscriber’s current status is either *active* or *unconfirmed*, their status will not be modified, regardless of whether or not the opt-in checkbox is checked.

#### Form plugins

Similar to the ecommerce plugins, you can also manage subscriber opt-ins using any one of WP Fusion’s [supported form plugins](https://wpfusion.com/documentation/#lead-generation).

The simplest implementation is to add a checkbox field to your form, and map it with the Optin Status field in MailerLite via WP Fusion’s form feed settings. The logic works the same as when using a checkbox on the checkout form (see above).

However, note that with this method, existing subscribers will not be able to unsubscribe.

For more granular control, you can add a radio, dropdown, or hidden field to your form, using any of the values:

- active
- unsubscribed
- unconfirmed

![](https://wpfusion.com/wp-content/uploads/2022/12/mailerlite-optins-form-settings-1024x446.jpg)In this screenshot [a Gravity Form](https://wpfusion.com/documentation/lead-generation/gravity-forms/) has a field to allow a subscriber to update their status.
When the form is submitted, the selected value will be synced to MailerLite, and will update the subscriber’s opt-in status.

### Ignoring customers who don’t opt in

It’s also possible to completely ignore customers who don’t opt in to marketing. For WooCommerce, this is achieved via the [wpf_woocommerce_customer_data filter](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#only-sync-customers-who-opt-in-to-marketing). For more information, see [the WooCommerce documentation](https://wpfusion.com/documentation/ecommerce/woocommerce/#only-sync-confirmed-customers).

---

## Salesforce Tags

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/)

### Overview

Salesforce does not have a built in equivalent to “tags” like WP Fusion would normally use with email marketing CRMs (such as ActiveCampaign).

As such, you have four options for segmenting contact records with WP Fusion:

- Topics
- Picklist
- Personal tags
- Public tags

You can select which method you’d like to use from the **Segment Type** setting on the Setup tab, after configuring your connection to Salesforce.

![](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-segment-type-1024x449.jpg)

After changing the segment type, save the settings to update the available options in the *Select Tag(s)*dropdowns.

Not sure which to use? We recommend using a [Picklist](#picklist).

### Topics

By default WP Fusion uses [Topics](https://help.salesforce.com/s/articleView?id=sf.basics_topics_records_overview.htm&type=5) in Salesforce to segment contacts. Topics are enabled by default in Salesforce Lightning and can be [manually enabled for Salesforce Classic](https://help.salesforce.com/s/articleView?id=sf.collab_topics_records_admin.htm&type=5).

![](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-topics-1024x484.jpg)Topics can be configured to be displayed on Salesforce contact records and function similarly to tags in other CRMs.
![](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-topics-overview-1024x413.jpg)Topic detail pages show all contacts who have the topic.
Topics generally work well for segmenting with WP Fusion but there are a few things to note:

1. Salesforce does not allow you to bulk-assign topics to contacts without using an external tool (like [Data Loader](https://help.salesforce.com/s/articleView?id=000338350&type=1)). This makes bulk [auto-enrollments](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment) or [imports](https://wpfusion.com/documentation/tutorials/import-users/) difficult.
2. Because Topics have their own API endpoints separate from the contacts, applying multiple topics requires multiple API calls, which can slow down the visitor or checkout experience (each API call takes ~1 second).
3. Because Topic data is not stored with contact data in the CRM, exports of contacts from Salesforce will not include their topics.
4. Many third party tools can interface with Salesforce contact records and custom contact fields, but few external tools can access Topic data.

### Picklist

As of WP Fusion v3.39.4 (April 2022), you have the option to use a custom picklist field to store “tags” for your contacts.

To set this up, first head to the [Object Manager](https://help.salesforce.com/s/articleView?id=sf.viewing_fields.htm&type=5) in Salesforce and create a new **Picklist (Multi-Select)**field for the Contact object.

![](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-tags-picklist-setup-1024x739.jpg)

For the field configuration:

- **Field Label:**Can be whatever you want but we’ll use “Tags” for this example.
- **Values:** Should be “*Enter values”*, this allows you to use a custom set of tag values instead of the global options. You can optionally enter some tag names into the box, or leave it blank (WP Fusion can create tags later as needed).
- **Display values alphabetically:**It’s recommended to select this to make it easier to view and manage tags when editing contact records.
- **Restrict picklist to the values defined:**You must *un-check* this setting. Disabling this setting will allow WP Fusion to create new picklist values (i.e. “tags”) over the API.

Once you’ve created your custom field, head back to the WP Fusion setup tab and select *Picklist* from the **Segment Type** setting.

In the **Tags Picklist** dropdown, begin typing the name of your new field. If a match is not found, click the prompt to resynchronize your fields, and then select your new field once the resync is complete. Save the settings.

You can now type any tag name into the *Select Tag(s)*dropdowns, and WP Fusion will prompt you to *add new*.

![](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-tags-add-new-1024x514.jpg)

Once the new tag is applied to a user, it will show up on their Salesforce contact record, and as an option in the picklist and in the WP Fusion tags select dropdowns.

The Tags field can be added to the contact edit layout, and can be edited just like any other picklist field in Salesforce.

![](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-tags-as-picklist-1024x509.jpg)

Because WP Fusion can create new picklist values over the API, this also lets you use the [automatic tagging features with WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#automatic-tagging), as well as the *Create Tag(s) from Value* option when [mapping CRM fields](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#dynamic-tagging) or form fields.

The selected picklists values are available over the normal contacts APIs, and can be included in exports. Using the *Picklist* option for tags is the most compatible with connecting Salesforce to other third-party apps and services.

### Personal and Public tags

Personal and Public tags are a feature from Salesforce Classic, but aren’t available in Salesforce Lightning.

WP Fusion supports using Personal or Public tags for segmenting contacts for legacy accounts, but it’s recommended to use either Topics or a Picklist for new installs as these options provide the best compatibility with the latest editions of Salesforce.

For more information on tags, see:

- [Enable Tags](https://help.salesforce.com/s/articleView?id=sf.customize_tag_settings.htm&type=5)
- [Personal Tags FAQ](https://help.salesforce.com/s/articleView?id=000325224&type=1)
- [Organize Records with Tags and Topics](https://help.salesforce.com/s/articleView?id=sf.basics_topics_records_overview.htm&type=5)

---

## HubSpot – How to use lists

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/)

### Overview

With most marketing automation platforms, WP Fusion uses *tags* to segment your subscribers, trigger workflows, and control access to content in WordPress.

HubSpot doesn’t have tags, instead it has *lists*. When you connect WP Fusion to HubSpot, you will see the interfaces update to read “lists” instead of “tags”.

For example in the general settings here:

![](https://wpfusion.com/wp-content/uploads/2022/01/settings-read-as-lists-1024x210.jpg)When connected to HubSpot (or Brevo, SendFox, MailJet), the WP Fusion interfaces update to read “Lists” instead of “Tags”
**This is just a labeling difference—**the functionality with WP Fusion is the same, and everything you see in our documentation works the same way with Lists as it does with Tags.

You can apply lists based on events in WordPress, and also use lists to [restrict access to content](https://wpfusion.com/documentation/getting-started/access-control/).

### Active vs Static Lists

HubSpot is unique among our supported platforms in that it has two types of lists: **Active Lists** and **Static Lists**.

You can see the active lists marked as *(read only)*when viewing a user’s CRM lists in the admin.

![](https://wpfusion.com/wp-content/uploads/2022/01/active-vs-static-lists-in-the-admin-1024x324.jpg)The WP Fusion admin interfaces will indicate whether a list is Static or Active (aka read only)
What’s the difference?

- **Active lists:** These lists are managed by HubSpot, based on [the criteria](https://knowledge.hubspot.com/lists/determine-your-list-criteria) you set when creating the list. As contacts meet the criteria, HubSpot will add them to the list. And when they no longer meet the criteria they will be removed from the list. You cannot manually add a contact to an Active list, and WP Fusion cannot add someone to an Active list over the API.
- **Static lists:** These lists are not updated by HubSpot. You can add contacts to these lists manually, including over the API (via WP Fusion).

For a more detailed explanation, see [the HubSpot documentation](https://knowledge.hubspot.com/lists/what-is-the-difference-between-saved-filters-smart-lists-and-static-lists).

#### How it works with WP Fusion

Because Active Lists are managed by HubSpot, they are “read only”, i.e. you can see if someone is on a list, *but you cannot use WP Fusion to add someone to an active list*, or you’ll get an error.

For that reason, Active lists can only be used for access control to your content. For example in the main WP Fusion meta box when editing any post or page:

![](https://wpfusion.com/wp-content/uploads/2022/01/using-active-lists-for-access-control-1024x555.png)

Active lists cannot be selected anywhere that WP Fusion is going to *apply* those lists— for example as part of a product purchase, or course progress.

Trying to apply an active list over the API will result in an error saying “You cannot operate manually on an active list”.

### Active lists for auto-enrollments

If you’re using WP Fusion to auto-enroll users into courses or groups (i.e. with [LearnDash](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment) or [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#course-auto-enrollment)) based on lists in HubSpot, you might be wondering why you only see static lists in the dropdowns.

![](https://wpfusion.com/wp-content/uploads/2022/01/static-lists-course-enrollment-1024x591.jpg)WP Fusion only allows you to select static lists to use as “linked lists” for auto-enrollment triggers.
The reason is that the linked list is also an *un-enrollment* trigger, i.e. if someone is removed from the list, they will be removed from the course.

Imagine this scenario, using an active list for the Link with List setting:

1. A friend or family member is interested in taking your course, and so you manually give them a user account and add them to the course via the LearnDash admin
2. WP Fusion sends an API call to add the contact to the linked active list in HubSpot
3. The API call fails with a “Can not operate manually on a dynamic list” error
4. The next time the user logs in, WP Fusion sees that they are not on the list, and **they are unenrolled from the course**

For this reason, we recommend only using static lists for automated enrollments, as it’s the only way we can ensure that users will stay properly enrolled.

#### Enabling active lists for auto-enrollments

If you understand the risks and want to proceed with using active lists for auto-enrollments anyway, you can do so by adding this snippet to your functions.php file (or via a [code snippets plugin](https://wordpress.org/plugins/code-snippets/)).

```
add_filter(
	'wpf_render_tag_multiselect_args',
	function( $args ) {
		$args['read_only'] = true;
		return $args;
	}
);
```

This will update the UI so that active lists can be selected and used for auto-enrollments.

**However**, by using active lists for auto-enrollments, you will lose the ability to manually manage course and enrollments inside of WordPress. Any time you need to add a user to a course or group, you will have to first log into HubSpot and make sure they are on the correct active list.

For this reason we recommend always using static lists for automatic course and group enrollments.

### Using a multiselect for segmentation

In most cases, Lists are the best way to segment contacts with HubSpot.

However, HubSpot has a limit of 1,000 static lists per account. If you need to create more than 1,000 segments, WP Fusion supports using a multiselect field instead of lists. Multiselect fields can support up to 5,000 options.

To set this up, first create a multiselect field in HubSpot and add your options (i.e. segments). From the setup tab in the WP Fusion settings, select Multiselect under **Segment Type**.

Select your desired multi-select field, save the settings, and click Refresh Available Lists & Fields to load your available multiselect options into the dropdowns.

![](https://wpfusion.com/wp-content/uploads/2022/01/hubspot-multi-select-for-segments-1024x463.jpg)

Once this is set up, WP Fusion will stop updating contact lists, and will instead select and deselect multiselect options from the selected field for each contact.

You can optionally use the selected values in the conditions editor for creating Active Lists.

---

## HubSpot Custom Objects

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/)

### Overview

In addition to supporting custom objects with Zoho, Salesforce, and Ontraport via the [wpf_crm_object_type filter](https://wpfusion.com/documentation/filters/wpf_crm_object_type/) and the [add_object() method](https://wpfusion.com/documentation/functions/add_object/), WP Fusion supports adding and updating custom objects with HubSpot.

For a video walkthrough of custom objects, check out [Data in HubSpot: Custom Objects and Other Tools](https://academy.hubspot.com/lessons/custom-objects) in HubSpot’s Academy.

For additional information and examples please review HubSpot’s [CRM Custom Objects documentation](https://developers.hubspot.com/docs/api/crm/crm-custom-objects).

The examples below assume you have already [created a custom object schema](https://developers.hubspot.com/docs/api/crm/crm-custom-objects) and know the object type ID as well as any association type IDs (if you plan to associate your objects with other objects).

### Methods

The methods are basically the same as those with [other CRMs](https://wpfusion.com/documentation/functions/add_object/), those are:

- ```
add_object( $properties, $object_type_id )
```
- ```
update_object( $object_id, $properties, $object_type_id )
```
- ```
load_object( $object_id, $object_type_id )
```

#### add_object()

This method creates a new object of the specified object type ID. Following the [HubSpot custom objects walkthrough](https://developers.hubspot.com/docs/api/crm/crm-custom-objects), we have created a new Car custom object, with an 
```
objectTypeId
```

 of 
```
2-4370788
```

.

```
$properties = array(
	'condition'     => 'used',
	'date_received' => '1582416000000',
	'year'          => '2014',
	'make'          => 'Nissan',
	'model'         => 'Frontier',
	'vin'           => '4Y1SL65848Z411439',
	'color'         => 'White',
	'mileage'       => '80000',
	'price'         => '12000',
	'notes'         => 'Excellent condition. No accidents.',
);

$object_type_id = '2-4370788';

$object_id = wp_fusion()->crm->add_object( $properties, $object_type_id );

if ( is_wp_error( $object_id ) ) {
	wpf_log( 'error', wpf_get_current_user_id(), 'Error adding object: ' . $object_id->get_error_message() );
	return false;
}

// Do what you want with $object_id here.
```

Now we have an 
```
$object_id
```

 with the ID of the new object. This can then be used for additional operations.

For example to associate the new object with a contact ID 
```
101
```

, we can make a 
```
PUT
```

 request against the [associations API](https://developers.hubspot.com/docs/api/crm/associations):

```
$contact_id          = '101';
$association_type_id = '3';

$request = "https://api.hubapi.com/crm/v3/objects/{$object_type_id}/{$object_id}/associations/contacts/{$contact_id}/{$association_type_id}/?hapikey=" . HUBSPOT_API_KEY;

$params   = array( 'method' => 'PUT' );
$response = wp_safe_remote_request( $request, $params );

if ( is_wp_error( $response ) ) {
	wpf_log( 'error', wpf_get_current_user_id(), 'Error associating object with contact: ' . $response->get_error_message() );
	return false;
}
```

Then the new object is associated with the contact, like so:

![](https://wpfusion.com/wp-content/uploads/2021/12/hubspot-custom-objects-1024x497.jpg)

#### update_object()

This method allows you to update an existing object. For example to change our Nissan Frontier with ID 
```
599237525
```

 into a Ford Ranger:

```
$properties = array(
	'make'  => 'Ford',
	'model' => 'Ranger',
);

$object_id      = '599237525';
$object_type_id = '2-4370788';

$response = wp_fusion()->crm->update_object( $object_id, $properties, $object_type_id );

if ( is_wp_error( $response ) ) {
	wpf_log( 'error', wpf_get_current_user_id(), 'Error updating object: ' . $response->get_error_message() );
	return false;
}
```

#### load_object()

This method loads an object by ID and returns its properties. Note that unlike other CRMs, you must specify the properties you want returned.

Using our Car example from above, we can request the Condition, Year, Make, and Model:

```
$object_id      = '599237525';
$object_type_id = '2-4370788';
$properties     = array( 'condition', 'year', 'make', 'model' );

$response = wp_fusion()->crm->load_object( $object_id, $object_type_id, $properties );

if ( is_wp_error( $response ) ) {
	wpf_log( 'error', wpf_get_current_user_id(), 'Error loading object: ' . $response->get_error_message() );
	return false;
}

print_r( $response );

/*

Array
(
	[id] => 599237525
	[properties] => Array
		(
			[condition] => used
			[hs_createdate] => 2021-12-15T09:41:24.159Z
			[hs_lastmodifieddate] => 2021-12-15T10:10:22.801Z
			[hs_object_id] => 599237525
			[make] => Ford
			[model] => Ranger
			[year] => 2014
		)

	[createdAt] => 2021-12-15T09:41:24.159Z
	[updatedAt] => 2021-12-15T10:10:22.801Z
	[archived] =>
)

*/
```

### Companies

Companies in HubSpot are special in that they are not considered a custom object type, but instead have [their own API](https://developers.hubspot.com/docs/api/crm/companies) (accessible at 
```
https://api.hubapi.com/crm/v3/objects/companies
```

). The example below runs when a new user registers, or an existing user updates their profile, and syncs any configured fields to the user’s associated HubSpot company. If a company does not exist yet for the user, one will be created.

This is a very simple example and would need additional logic to handle situations where a new user is joining an existing company, and for allowing changing a user’s company, but we hope it’s useful as a starting place.

You may also want to look into [automatically creating and associating companies with contacts](https://knowledge.hubspot.com/object-settings/automatically-create-and-associate-companies-with-contacts).

```
/**
 * Create or update a HubSpot company for a user.
 *
 * @param int    $user_id     The user ID.
 * @param string $contact_id  The contact ID.
 * @param array  $user_meta   The user meta.
 * @return int|false The company ID, or false if the company could not be created.
 */
function create_or_update_hubspot_company( $user_id, $contact_id, $user_meta ) {

	// The static data to update, or pull it from $user_meta.

	$company_data = array(
		'name'         => 'Company Name',
		'domain'       => 'company.com',
		// 'property_one' => 'Value one',
		// 'property_two' => 'Value two',
		// 'property_three' => $user_meta['user_custom_field'],
	);

	$update_data = array(
		'properties'   => $company_data,
		'associations' => array(
			array(
				'to' => array(
					'id' => $contact_id,
				),
				'types' => array(
					array(
						'associationCategory' => 'HUBSPOT_DEFINED',
						'associationTypeId'   => 280, // "Company to Contact".
					),
				),
			),
		),
	);

	// Get the authorization headers from WP Fusion.
	$params           = wp_fusion()->crm->get_params();
	$params['body']   = wp_json_encode( $update_data );

	// See if we have a company ID already.
	$company_id = get_user_meta( $user_id, 'hubspot_company_id', true );

	if ( empty( $company_id ) ) {
		// New company.
		$request = 'https://api.hubapi.com/crm/v3/objects/companies';
	} else {
		// Update existing company.
		$request = 'https://api.hubapi.com/crm/v3/objects/companies/' . $company_id;
		$params['method'] = 'PUT';
	}

	// Send the API call.
	$response = wp_remote_post( $request, $params );

	if ( is_wp_error( $response ) ) {
		wpf_log( 'error', $user_id, 'Error adding company to HubSpot: ' . $response->get_error_message() );
		return;
	}

	$response = json_decode( wp_remote_retrieve_body( $response ) );

	// Save the company ID to the user meta.
	update_user_meta( $user_id, 'hubspot_company_id', $response->id );

	return $response->id;

}

add_action( 'wpf_pushed_user_meta', 'create_or_update_hubspot_company', 10, 3 );
add_action( 'wpf_user_created', 'create_or_update_hubspot_company', 10, 3 );
```

---

## MailerLite email address changes

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/email-address-changes-with-mailerlite/](https://wpfusion.com/documentation/crm-specific-docs/email-address-changes-with-mailerlite/)

### Overview

[MailerLite](https://wpfusion.com/go/mailerlite) gives you a very capable email marketing automation solution, at a great price.

In *almost* every way it’s just as powerful as one of our [A-rated marketing automation tools](https://wpfusion.com/documentation/faq/crm-compatibility-table/#a1), like [ActiveCampaign](https://wpfusion.com/go/activecampaign), but at a fraction of the cost.

The one limitation with MailerLite is that **it is not possible for subscribers to change their email address**.

Unfortunately this basically cripples MailerLite in terms of being a marketing automation tool for use with WP Fusion / WordPress, and makes it suitable only for the most basic of businesses.

### Email address changes

To get around this, WP Fusion has two options for ways to deal with email address changes. These can be configured at Settings » WP Fusion » Advanced.

![](https://wpfusion.com/wp-content/uploads/2021/02/mailerlite-email-changes-1024x567.jpg)

The options are **Ignore** or **Duplicate and Delete.**

#### Ignore

The default setting is to ignore email address changes and not sync them to MailerLite (since trying to update a subscriber’s email address will create an API error).

With this setting, if someone changes their email address in WordPress, their WordPress user record will become unlinked from their MailerLite subscriber record. This will remove any MailerLite groups from the user record, which means the user will lose access to any purchased courses or membership content until you manually create a new record for them in MailerLite.

#### Duplicate and Delete

If you’re worried about members losing access to purchased content, you can choose **Duplicate and Delete**.

When this option is selected, if a user changes their email address, WP Fusion will load their subscriber record and groups over the MailerLite API. It will then create a new subscriber in MailerLite with the same custom fields and groups, but the updated email address. Then the original subscriber record (with the old email) will be deleted.

While this does allow users to change their email address without losing their groups (and group-based access), anything else about the subscriber will be lost. That means any site tracking data, email open history, and positions in automations and campaigns will be permanently lost.

---

## Inactive / Unsubscribed People in Drip

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/](https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/)

### Overview

When someone unsubscribes from marketing emails in Drip, their status becomes Inactive. This affects how WP Fusion can interact with those records over the API.

You can view your inactive subscribers in Drip under People » Inactive.

![](https://wpfusion.com/wp-content/uploads/2020/06/drip-inactive-1024x754.jpg)

### With WP Fusion

If you don’t “Activate” the inactive people, WP Fusion is affected in a few ways:

- If you run a [Resync Contact IDs and Tags operation](https://wpfusion.com/documentation/tutorials/exporting-data/), or click Resync Tags on an individual user’s profile, their contact ID and tags will be lost. You’ll see a *No Contact Record Found* message. The user will lose access to any content protected by tags.
- If the user updates their profile, this data will not be synced to Drip. A message will be logged to the WP Fusion logs saying *“Person has unsubscribed from marketing. Updates may not have been saved.”*
- Tags can still be applied to and removed from the person, but the person will not show up in Drip when you search by those tags.

To view a list of all inactive users, head to Users » All Users in the WordPress admin, and choose *(Inactive in Drip)* from the Filter By Tag dropdown.

![](https://wpfusion.com/wp-content/uploads/2020/06/drip-inactive-search-1024x449.jpg)

### Re-subscribing people

It is also possible to use WP Fusion to re-subscribe unsubscribed people. To do that, pass a value of “active” for the “Status” field, which you can select from WP Fusion’s *Select A CRM Field*dropdown.

For example, we can do this with [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/) by creating a hidden form field with the value “active”.

![](https://wpfusion.com/wp-content/uploads/2020/06/drip-reactivate-subscriber-1-1024x645.jpg)

And then via the WP Fusion feed settings, linking that hidden field with the Status field in Drip.

![](https://wpfusion.com/wp-content/uploads/2020/06/drip-reactivate-subscriber-2-1024x509.jpg)

Now when the form is submitted, the person will be re-activated.

Note that you can also unsubscribe people, by passing a value of “unsubscribed”. As another example, instead of a hidden field, we can use a Radio type field, with the input values set to match the Drip subscriber statuses:

![](https://wpfusion.com/wp-content/uploads/2020/06/drip-reactivate-subscriber-3-1024x833.jpg)

It doesn’t matter which type of field you use, or which plugin, as long as the value “active” is sent over the API for the Status field, the subscriber will be activated. You can see the data that WP Fusion is sending to Drip by checking [the Activity Logs](https://wpfusion.com/documentation/getting-started/activity-logs/).

---

## Salesforce Sandbox Accounts

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/salesforce-sandboxes/](https://wpfusion.com/documentation/crm-specific-docs/salesforce-sandboxes/)

It’s possible to connect WP Fusion to a Salesforce sandbox account for testing purposes. To do so you’ll need to add a filter to your theme’s functions.php file to override the authentication URL:

```
function salesforce_auth_url( $url ) {

	return 'https://test.salesforce.com/services/oauth2/token';

}

add_filter( 'wpf_salesforce_auth_url', 'salesforce_auth_url' );
```

Then enter the credentials for your sandbox user into the main WP Fusion setup tab, and click Test Connection to establish a connection to Salesforce.

For more information about user credentials with Salesforce sandboxes please see [https://help.salesforce.com/articleView?id=data_sandbox_create.htm&type=5](https://help.salesforce.com/articleView?id=data_sandbox_create.htm&type=5).

---

## ConvertKit Unsubscribes

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/convertkit-unsubscribe-notifications/](https://wpfusion.com/documentation/crm-specific-docs/convertkit-unsubscribe-notifications/)

### Overview

When a contact unsubscribes from emails in ConvertKit, ConvertKit prevents the subscriber from being accessed via the API.

This means that any tags associated with the subscriber will no longer be available in WordPress, and they will lose access to any content [protected by tags](https://wpfusion.com/documentation/getting-started/access-control/).

The only way to restore their access is to either delete the subscriber and manually re-create them with their tags, or get the subscriber to fill out a form and re-confirm their subscription.

### Notifications

Under the Advanced tab in the WP Fusion settings, you can choose to be notified via email when a subscriber unsubscribes.

![](https://wpfusion.com/wp-content/uploads/2019/06/convertkit-unsubscribe-1024x386.jpg)

When this setting is enabled you’ll receive an email at the specified address containing the email address of the unsubscribed person.

### Re-subscribing unsubscribed subscribers

You can re-subscribe a subscriber by adding them to a ConvertKit form.

ConvertKit will then send an email notification asking them to confirm their subscription.

To add a subscriber to a form, you can select a form from the bottom of the *Select Tag(s)* dropdown in any of the WP Fusion settings, under the Forms heading.

![](https://wpfusion.com/wp-content/uploads/2019/06/convertkit-forms-as-tags-gravity-forms-1024x400.jpg)

Forms will be shown with *(form)*to help differentiate them from tags.

When a form is selected, WP Fusion will add the subscriber to form in addition to applying any selected tags.

![](https://wpfusion.com/wp-content/uploads/2019/06/convertkit-forms-as-tags-woocommerce-1024x499.jpg)

This will give the subscriber the opportunity to re-confirm their email address, and to continue to receive marketing emails.

---

## Unexpected Tags with ConvertKit

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/convertkit-unexpected-tags/](https://wpfusion.com/documentation/crm-specific-docs/convertkit-unexpected-tags/)

Due to some quirks with ConvertKit, you cannot create a new subscriber via the API without also applying a tag. It’s recommended to set a general tag in the Assign Tags setting to be applied to all new subscribers.

![](https://wpfusion.com/wp-content/uploads/2018/07/ck-default-tag-1024x361.jpg)

If you don’t specify a tag here, the first available tag in the list will be applied.

---

## Custom fields not loading with AgileCRM

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/custom-fields-not-loading-with-agilecrm/](https://wpfusion.com/documentation/crm-specific-docs/custom-fields-not-loading-with-agilecrm/)

AgileCRM doesn’t currently have an API method for listing all of the custom fields in your account. To get around this, we query the first 100 contacts in your account, and build the list of available custom fields based on fields found on those contacts.

If you’re missing custom fields in WP Fusion, or if you’ve just added a custom field in Agile, try adding some data to the custom field for a few contacts, then resynchronize the available fields by going to Settings >> WP Fusion >> Setup, and clicking the green Resynchronize button.

---

## Infusionsoft API Goals

**Source:** [https://wpfusion.com/documentation/crm-specific-docs/infusionsoft-api-goals/](https://wpfusion.com/documentation/crm-specific-docs/infusionsoft-api-goals/)

WP Fusion supports making API calls to your Infusionsoft application when a user profile is updated on your WordPress site. This is useful if you want to trigger a campaign sequence after a user’s updated profile data is synced with your application. For example, you could perform actions based on the contents of certain fields, like assigning an owner, or applying a tag.

![api-call](https://wpfusion.com/wp-content/uploads/2015/01/api-call.png)

In the main WP Fusion settings page, check the API Call checkbox, and then optionally specify an integration name and API call name. For most setups you can leave these at default.

Then, in the Infusionsoft campaign builder, create an “API Call goal”, and configure it to match the integration name and call name you set in the WP Fusion settings.

Now, whenever a user profile is updated, the goal will be achieved, and the contact will be moved through the subsequent campaign!

---

