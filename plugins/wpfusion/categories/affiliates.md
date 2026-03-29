# Affiliates

*Category from WP Fusion documentation*

---

## ClickWhale

**Source:** [https://wpfusion.com/documentation/affiliates/clickwhale/](https://wpfusion.com/documentation/affiliates/clickwhale/)

### Overview

WP Fusion includes an integration with ClickWhale to allow you to apply tags (or lists, groups, and segments) in your CRM or marketing automation system when tracking links are clicked.

This allows you to track link clicks in your CRM, and trigger emails and other automations based on engagement with your links— for example to follow up with customers regarding their experience with a third-party vendor.

### Setup

When editing any link, click the WP Fusion tab to access the settings.

Here you can specify one or more tags to be applied when the link is clicked.

When a logged-in (or identified) user clicks a tracking link, the selected tags will be applied to their contact record in your CRM.

---

## ThirstyAffiliates

**Source:** [https://wpfusion.com/documentation/affiliates/thirstyaffiliates/](https://wpfusion.com/documentation/affiliates/thirstyaffiliates/)

### Overview

WP Fusion includes an integration with ThirstyAffiliates to allow you to apply tags (or lists, groups, and segments) in your CRM or marketing automation system when tracking links are clicked.

This allows you to track link clicks in your CRM, and trigger emails and other automations based on engagement with your links— for example to follow up with customers regarding their experience with a third-party vendor.

### Setup

When editing any link, you’ll see a WP Fusion – Link Settings meta box.

Here you can specify one or more tags to be applied when the link is clicked.

When a logged-in (or identified) user clicks a tracking link, the selected tags will be applied to their contact record in your CRM.

---

## Pretty Links

**Source:** [https://wpfusion.com/documentation/affiliates/pretty-links/](https://wpfusion.com/documentation/affiliates/pretty-links/)

### Overview

WP Fusion includes an integration with Pretty Links to allow you to apply tags (or lists, groups, and segments) in your CRM or marketing automation system when tracking links are clicked.

This allows you to track link clicks in your CRM, and trigger emails and other automations based on engagement with your links— for example to follow up with customers regarding their experience with a third-party vendor.

### Setup

When editing any link, click the WP Fusion tab to access the settings.

Here you can specify one or more tags to be applied when the link is clicked.

When a logged-in (or identified) user clicks a tracking link, the selected tags will be applied to their contact record in your CRM.

---

## SliceWP

**Source:** [https://wpfusion.com/documentation/affiliates/slicewp/](https://wpfusion.com/documentation/affiliates/slicewp/)

### Overview

WP Fusion integrates with SliceWP to sync affiliates with your CRM or marketing automation tool when they register on your site or update their affiliate profiles, and tag affiliates based on status changes.

You can also tag customers when they make a purchase via an affiliate link, and sync referrer metadata to customer contact records in your CRM.

### Syncing affiliate and referrer data

#### Syncing affiliate meta fields

In addition to the standard user fields, you’ll also see several SliceWP-specific fields available for sync under the SliceWP – Affiliate heading in WP Fusion’s contact fields settings.

These fields are related to the affiliate, and will be synced when an affiliate registers or updates their profile.

The fields Affiliate’s Total Earnings and Affiliate’s Total Referrals will also be synced each time a commission is recorded for the affiliate, if they are enabled.

#### Syncing referrer meta fields

WP Fusion also supports synchronizing details about an affiliate to a customer’s contact record when they make a purchase using an affiliate link.

These fields are available for mapping under the SliceWP – Referrer Fields heading in the contact fields list.

You can use these fields to personalize the marketing sent to a customer based on the affiliate who referred them.

At the moment syncing referrer meta fields is only supported for referrals recorded via WooCommerce.

### Applying tags to affiliates

You can also specify tags to be applied when new affiliates register on your site. This can be found under the Integrations tab in the WP Fusion settings.

The available options are:

- Apply Tags – Registration: These tags will be applied when someone registers to be an affiliate, regardless of their approval status.
- Apply Tags – Affiliate Approval: If you’re requiring manual approval of affiliates you can also specify additional tags to be applied when an affiliate has been approved.
- Apply Tags – Affiliate Rejected: These tags will be applied if a pending affiliate is rejected.
- Apply Tags – First Referral: These tags will be applied to the affiliate the first time they earn a referral.
- Apply Tags – Customers: This option will appear if WooCommerce is active and lets you specify tags to be applied to customers that make a purchase via an affiliate link (for example a tag like “Referred by Affiliate”).

#### Applying tags to WooCommerce customers

You can specify tags to be applied to WooCommerce customers when they make a purchase after following a referral URL.

This is configured from the Integrations tab in the WP Fusion settings (described above), via the Apply Tags – Customers setting.

While editing any affiliate you can also specify tags to be applied to the WooCommerce customer if they purchase from that specific affiliate’s link.

### Export options

WP Fusion includes an export / batch processing tool for SliceWP affiliates.

Head to Settings » WP Fusion » Advanced and select the SliceWP Affiliates option from the Batch Operations list:

Then click Create Background Task to start the process.

Each of your affiliates will be updated in your connected CRM with any enabled custom fields. They will also be tagged with any tags you’ve selected to be applied to affiliates based on their current status.

---

## Solid Affiliate

**Source:** [https://wpfusion.com/documentation/affiliates/solid-affiliate/](https://wpfusion.com/documentation/affiliates/solid-affiliate/)

### Overview

WP Fusion integrates with Solid Affiliate to add affiliates to your CRM or marketing automation platform when they register on your site or update their affiliate profiles.

You can also tag customers when they make a purchase via an affiliate link, and sync referrer metadata to custom fields on customer contact records.

#### Syncing affiliate meta fields

In addition to the normal signup fields, you’ll also see several new Solid Affiliate specific fields added to the Contact Fields tab in the WP Fusion settings.

These fields are related to the affiliate, and will be synced when an affiliate registers or updates their profile.

#### Syncing referrer meta fields

WP Fusion also supports synchronizing details about an affiliate to a customer’s contact record when they make a purchase using an affiliate link.

You can use these fields to personalize the marketing sent to a customer based on the affiliate who referred them.

At the moment syncing referrer meta fields is only supported for referrals recorded via WooCommerce.

### Applying tags to affiliates

You can also specify tags to be applied when new affiliates register on your site. This can be found under the Integrations tab in the WP Fusion settings.

The available options are:

- Apply Tags – Affiliate Registration: These tags will be applied when someone registers to be an affiliate, regardless of their approval status.
- Apply Tags – Approved: If you’re requiring manual approval of affiliates you can also specify additional tags to be applied when an affiliate has been approved.
- Apply Tags – Rejected: These tags will be applied if a pending affiliate is rejected.
- Apply Tags – Customers: This option will appear if WooCommerce is active and lets you specify tags to be applied to customers that make a purchase via an affiliate link (for example a tag like “Referred by Affiliate”).
- Link with Tag – Affiliate Activation: This allows you to select a tag that becomes linked to an affiliate’s account activation. When the tag is applied to a user, an affiliate account will be created and activated. If the tag is removed (or a user doesn’t have the tag) their affiliate account will be deleted. Use with caution.

### Linking tags to groups

In addition to applying tags to affiliates and WooCommerce customers, you can also specify a linked tag for each Solid Affiliate group.

When an affiliate joins the group, the linked tag will be automatically applied. When they leave the group, the linked tag will be removed.

Likewise, if the linked tag is applied in your CRM, this will automatically enroll the user into the group. If the user is not already an affiliate, they will be added as a new affiliate at the default rate. If the linked tag is removed, the user will be removed from the group.

This can be used to automatically create and group affiliates using automations in your connected CRM.

The group linking settings can be found with the rest of the WP Fusion integration settings for Solid Affiliate under the Integrations tab in the WP Fusion settings.

### Export options

WP Fusion includes an export tool for Solid Affiliate affiliates. Head to Settings » WP Fusion » Advanced and select the Solid Affiliate Affiliates option from the Batch Operations list:

Then click Create Background Task to start the process.

Each of your approved affiliates will be updated in your connected CRM with any enabled custom fields. They will also be tagged with any tags you’ve selected to be applied to approved affiliates.

---

## WP Affiliate Manager

**Source:** [https://wpfusion.com/documentation/affiliates/wp-affiliate-manager/](https://wpfusion.com/documentation/affiliates/wp-affiliate-manager/)

### Overview

WP Fusion integrates with WP Affiliate Manager to add affiliates to your CRM when they register on your site.

You can also tag affiliates when they apply for an account, and when their affiliate account is accepted.

---

## AffiliateWP

**Source:** [https://wpfusion.com/documentation/affiliates/affiliatewp/](https://wpfusion.com/documentation/affiliates/affiliatewp/)

### Overview

WP Fusion integrates with AffiliateWP to sync affiliates with your CRM or marketing automation tool when they register on your site or update their affiliate profiles, and tag affiliates based on status changes.

You can also tag customers when they make a purchase via an affiliate link, and sync referrer metadata to customer contact records in your CRM.

#### Syncing affiliate meta fields

In addition to the normal signup fields, you’ll also see several new AffiliateWP-specific fields added to the Contact Fields tab in the WP Fusion settings.

These fields are related to the affiliate, and will be synced when an affiliate registers or updates their profile.

#### Syncing referrer meta fields

WP Fusion also supports synchronizing details about an affiliate to a customer’s contact record when they make a purchase using an affiliate link.

You can use these fields to personalize the marketing sent to a customer based on the affiliate who referred them, as well as their landing page and referring URL.

At the moment syncing referrer meta fields is supported for referrals recorded via:

- WooCommerce purchase
- Gravity Forms submission
- Ultimate Member signup

### Applying tags

You can also specify tags to be applied when new affiliates register on your site, or based on affiliate status changes. This can be found under the Integrations tab in the WP Fusion settings.

The available options are:

- Apply Tags – Affiliate Registration: These tags will be applied when someone registers to be an affiliate, regardless of their approval status.
- Apply Tags – First Referral: These tags will be applied to the affiliate the first time they earn a referral.
- Apply Tags – Customers: This option will appear if WooCommerce is active and lets you specify tags to be applied to customers that make a purchase via an affiliate link (for example a tag like “Referred by Affiliate”).
- Apply Tags – Active: If you require manual approval of affiliates you can also specify additional tags to be applied when an affiliate has been approved.
- Apply Tags – Inactive: These tags will be applied when an affiliate’s status is changed to Inactive.
- Apply Tags – Pending: These tags will be applied when a Pending affiliate is created.
- Apply Tags – Rejected: These tags will be applied to the affiliate when their application is rejected.
- Apply Tags – Deleted:  These tags will be applied when an affiliate’s account is deleted
- Link Tag – Affiliate Activation: This setting allows you to link a tag with affiliate activation— when the tag is applied in your CRM, an affiliate account will be created for the user and activated. If the user was already an affiliate, they will be activated. If the tag is removed (or if any affiliate does not have the tag), they will be deactivated. Use with caution.

#### Applying tags to WooCommerce customers

You can specify tags to be applied to WooCommerce customers when they make a purchase after following a referral URL. This is configured from the Integrations tab in the WP Fusion settings (above), using the Apply Tags – Customers setting.

While editing any affiliate you can also specify tags to be applied to the WooCommerce customer if they purchase from that specific affiliate’s link.

#### Linking tags to groups

In addition to applying tags to affiliates and WooCommerce customers, you can also specify a linked tag for each AffiliateWP group.

When an affiliate joins the group, the linked tag will be automatically applied. When they leave the group, the linked tag will be removed.

Likewise, if the linked tag is applied in your CRM, this will automatically enroll the user into the group. If the user is not already an affiliate, they will be added as a new affiliate at the default rate. If the linked tag is removed, the user will be removed from the group.

This can be used to automatically create and group affiliates using automations in your connected CRM.

The group linking settings can be found with the rest of the WP Fusion integration settings for AffiliateWP under the Integrations tab in the WP Fusion settings.

### Event Tracking

Using the Event Tracking addon, you can track AffiliateWP registrations, status changes, visits, and referrals as real-time events in supported CRMs.

Events can be configured in the main Event Tracking settings page.

WP Fusion’s event tracking features for AffiliateWP let you track affiliate events in real time in your CRM or email marketing system.
The available triggers for event tracking with AffiliateWP are:

- Affiliate Registration: Triggered when a new affiliate registers on your site.
- Affiliate Status Updated: Triggered when an affiliate’s status changes (for example from Pending to Active).
- New Visit: Triggered each time someone visits the affiliate’s referral link.
- Referral Earned: Triggered when an affiliate earns a referral.

For more information on event tracking and the supported platforms, see the Event Tracking Overview.

### Export options

WP Fusion includes two export / batch processing tools for AffiliateWP. Head to Settings » WP Fusion » Advanced and scroll down to the Batch Operations section to see the available options.

With AffiliateWP there are two available operations:

- AffiliateWP affiliate data: Syncs any enabled “AffiliateWP – Affiliate” fields to your CRM for each affiliate, and applies any tags related to that affiliate’s status.
- AffiliateWP referrals: Processes all Accepted or Paid referrals as if they had just been accepted: syncs any enabled “AffiliateWP – Referral” fields to your CRM, and applies any configured tags, such as First Referral Accepted and/or any affiliate tags applied to WooCommerce customers.

After selecting an operation, click Create Background Task to start the process. A progress indicator will appear at the top of the page.

For more information on exporting data, see the Batch Operations documentation.

---

