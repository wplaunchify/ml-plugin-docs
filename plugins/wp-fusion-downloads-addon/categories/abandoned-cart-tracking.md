# Abandoned Cart Tracking

*Category from WP Fusion - Downloads Addon documentation*

---

## Other CRMs

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/other-crms/](https://wpfusion.com/documentation/abandoned-cart-tracking/other-crms/)

### Overview

Because WP Fusion’s abandoned cart tracking uses tags or lists in your CRM to track abandoned carts, it’s compatible with [all 5o+ of WP Fusion’s supported CRMs](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

If you don’t find a guide to your specific CRM here, you can follow the general setup instructions in the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

---

## Brevo Abandoned Cart Tracking

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/brevo-abandoned-cart/](https://wpfusion.com/documentation/abandoned-cart-tracking/brevo-abandoned-cart/)

### Overview

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in Brevo.

		WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)
		
After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to Brevo (even if they don’t complete the checkout).

You can then use automations in Brevo to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on lists.

### Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)

There are two important settings:

1. In the **Apply Lists** setting, select a list to use for tracking abandoned carts. This list will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart lists.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in Brevo. These fields can then be added to cart recovery emails using [merge tags](https://help.brevo.com/hc/en-us/articles/360000946299-Personalize-your-emails-using-Brevo-Template-Language).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)

#### Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in Brevo.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in Brevo.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.
You can then use a merge field in the email editor in Brevo to include the unique recovery URL.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### Setup in Brevo

In Brevo, create an automation that is triggered when the Abandoned Cart list is applied, and connect it to one or more cart recovery emails.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/brevo-abandoned-cart-automation-1024x660.jpg)

In your email, you can dynamically include the cart recovery URL by inserting the merge tag using the merge tag editor.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/brevo-abandoned-cart-email-1024x579.jpg)Screenshot
Publish the workflow to make it live.

### Testing

To test your abandoned cart workflow, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in Brevo, the list will be applied, and the email will be sent.

![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to Brevo.
You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s lists in Brevo, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

---

## HighLevel Abandoned Cart Tracking

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/highlevel-abandoned-cart-tracking/](https://wpfusion.com/documentation/abandoned-cart-tracking/highlevel-abandoned-cart-tracking/)

### Overview

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in HighLevel.

		WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)
		
After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to HighLevel (even if they don’t complete the checkout).

You can then use workflows in HighLevel to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on tags.

### Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)

There are two important settings:

1. In the **Apply Tags** setting, select a tag to use for tracking abandoned carts. This tag will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart tags.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in HighLevel. These fields can then be added to cart recovery emails using [merge fields](https://help.gohighlevel.com/support/solutions/articles/48001161575-how-to-use-custom-values).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)

#### Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in HighLevel.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in HighLevel.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.
You can then use a merge field in the email editor in HighLevel to include the unique recovery URL.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### Setup in HighLevel

In HighLevel, create an workflow that is triggered when the Abandoned Cart tag is applied, and connect it to one or more cart recovery emails.

![highlevel abandoned cart workflow](https://wpfusion.com/wp-content/uploads/2023/10/highlevel-abandoned-cart-workflow.png)

In your email, you can dynamically include the cart recovery URL by inserting the merge field using the merge field editor.

![highlevel abandoned cart email](https://wpfusion.com/wp-content/uploads/2023/10/highlevel-abandoned-cart-email.png)

Publish the workflow to make it live.

### Testing

To test your abandoned cart workflow, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in HighLevel, the tag will be applied, and the email will be sent.

![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to HighLevel.
You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s tags in HighLevel, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

---

## FluentCRM Abandoned Cart Tracking

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/fluentcrm-abandoned-cart-tracking/](https://wpfusion.com/documentation/abandoned-cart-tracking/fluentcrm-abandoned-cart-tracking/)

### Overview

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in FluentCRM.

		WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)
		
After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to FluentCRM (even if they don’t complete the checkout).

You can then use automations in FluentCRM to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on tags.

### Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)

There are two important settings:

1. In the **Apply Tags** setting, select a tag to use for tracking abandoned carts. This tag will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart tags.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in FluentCRM. These fields can then be added to cart recovery emails using [merge codes / smart codes](https://fluentcrm.com/docs/merge-codes-smart-codes-usage/).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)

#### Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in FluentCRM.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in FluentCRM.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.
You can then use a merge codes / smart codes in the email editor in FluentCRM to include the unique recovery URL.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### Setup in FluentCRM

In FluentCRM, create an automation that is triggered when the Abandoned Cart tag is applied, and connect it to one or more cart recovery emails.

![fluentcrm abandoned cart](https://wpfusion.com/wp-content/uploads/2023/03/fluentcrm-abandoned-cart.png)

In your email, you can dynamically include the cart recovery URL by inserting the merge tag using the merge code editor.

![](https://wpfusion.com/wp-content/uploads/2023/03/fluentcrm-abandoned-cart-email-1024x619.jpg)

Publish the automation to make it live.

#### Merging the cart contents

WP Fusion doesn’t have the ability to dynamically merge the cart contents into the abandoned cart email, but you *can* [apply tags based on which products were abandoned](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#plugin-integrations).

If you don’t have a lot of products (for example a small store or membership site), it’s simple to [create conditional sections](https://fluentcrm.com/docs/conditional-sections-in-fluentcrm-email-editor/) in the email editor, based on the tags applied for the abandoned products.

![](https://wpfusion.com/wp-content/uploads/2023/03/fcrm-abandoned-cart-conditions-1024x492.jpg)In this example the Fatal Error Notify checkout link is only shown if the customer has the Fatal Error Notify Pro tag (to indicate the product was abandoned in their cart).

#### Benchmark and reporting

Finally, it’s recommended to end the automation with a benchmark (goal), to track the cart recovery rate of the campaign.

![](https://wpfusion.com/wp-content/uploads/2023/03/fluentcrm-abandoned-cart-benchmark-1024x728.jpg)This benchmark is triggered when the Abandoned Cart tag is removed after checkout, and allows you to track the recovery rate of your campaign.
The benchmark is triggered if the customer is still in the automation (i.e. the cart recovery email has been sent), and the *Abandoned Cart* tag is removed.

Make sure to check **Essential Point**, so the benchmark is only triggered when the tag is removed, and un-check **Contacts can entry directly to this sequence point** so that the goal will only trigger for contacts who’d received the cart recovery email.

Publish the automation, and you’re good to go!

![](https://wpfusion.com/wp-content/uploads/2023/03/fluentcrm-abandoned-cart-reporting-1024x355.jpg)By adding a “Recovered Cart” goal to the automation, we can see the percentage of customers who finished checking out after receiving the cart recovery email.
You can come back later and see stats on the number of abandoned carts and the recovery rate by using the **View Reports** button.

### Testing

To test your abandoned cart workflow, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in FluentCRM, the tag will be applied, and the email will be sent.

![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to FluentCRM.
You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s tags in FluentCRM, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

---

## HubSpot Abandoned Cart Tracking

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/hubspot-abandoned-cart/](https://wpfusion.com/documentation/abandoned-cart-tracking/hubspot-abandoned-cart/)

### Overview

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in HubSpot.

		WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)
		
After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to HubSpot (even if they don’t complete the checkout).

You can then use workflows in HubSpot to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on lists.

### Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)

There are two important settings:

1. In the **Apply Lists** setting, select a list to use for tracking abandoned carts. This list will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart lists.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in HubSpot. These fields can then be added to cart recovery emails using [personalization tokens](https://knowledge.hubspot.com/website-pages/personalize-your-content).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)

#### Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in HubSpot.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in HubSpot.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.
You can then use a personalization token in the email editor in HubSpot to include the unique recovery URL.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### Setup in HubSpot

First [create a static list](https://knowledge.hubspot.com/lists/create-active-or-static-lists) in HubSpot for tracking abandoned carts. In this case we’ll call it “Abandoned Cart”.

![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-1-1024x551.jpg)

Then, in the WP Fusion settings, click **Refresh Available Lists and Fields** to load the new list into WordPress.

Create an automation that is triggered when the Abandoned Cart list is applied, and connect it to one or more cart recovery emails.

![hubspot abandoned cart workflow](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-workflow.png)

In your email, you can dynamically include the cart recovery URL by inserting the personalize token using the personalize token editor.

![hubspot abandoned cart email](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-email.png)

Publish the workflow to make it live.

### Testing

To test your abandoned cart workflow, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in HubSpot, the list will be applied, and the email will be sent.

![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to HubSpot.
You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s lists in HubSpot, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

---

## Automatic Discounts

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/)

### Overview

WP Fusion’s [WooCommerce integration](https://wpfusion.com/documentation/ecommerce/woocommerce/#auto-discounts) has the ability to automatically apply a discount based on a contact’s tags in your CRM.

This can be used in conjunction with the Abandoned Cart addon to automatically give a discount to customers who abandon their carts.

### Setup

First create a coupon in WooCommerce. In this example we’ve created a coupon called Recovered Cart Discount with a 10% discount.

![](https://wpfusion.com/wp-content/uploads/2019/06/abandoned-cart-auto-discounts-1-1024x593.jpg)

Then click on the WP Fusion tab, and select a tag that should trigger the discount.

![](https://wpfusion.com/wp-content/uploads/2019/06/abandoned-cart-auto-discounts-2-1024x550.jpg)

In this example we’re using the *Abandoned Cart* tag. You can also make product specific coupons and use product specific tags to trigger them.

You can optionally override the discount label and discount message, or leave them at their defaults.

Then head over to Settings » WP Fusion » Addons and configure the same tag to be applied when a cart is abandoned.

![](https://wpfusion.com/wp-content/uploads/2019/06/abandoned-cart-auto-discounts-3-1024x633.jpg)

#### How it works

When a customer begins checkout a contact record will be created and the *Abandoned Cart* tag will be applied.

If you’re using [Drip](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/) or [ActiveCampaign](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/) the recovery URL will be sent along with the rest of the cart details, and can be merged into an email sent to the customer.

For other CRMs, the cart recovery URL will be synced to the custom field specified in the **Recovery URL** setting. This will look like 
```
https://mysite.com/cart/?wpfrc=xxxxxxxxx
```

.

**Heads up:** If you are using a Recovery URL custom field in your CRM as the parameter for a button or link in an email, it’s recommended to turn *off* Google Analytics tracking on that link.
The reason is that the UTM parameters can get appended to the contact ID, which causes the cart recovery not to work.
When the customer follows this link they’ll be taken back to your site, their cart contents will be restored, and their information will be pre-filled on the checkout form.

![](https://wpfusion.com/wp-content/uploads/2019/06/abandoned-cart-auto-discounts-4-1024x776.jpg)

WP Fusion will load the contact’s tags, and when it detects the *Abandoned Cart* tag it will automatically apply the associated discount.

---

## Abandoned Cart Tracking Changelog

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/)

#### #2.1.0.1 - 12/30/2025

- 🔧 Fixed Fixes settings input on LifterLMS access plans overlapping with the LifterLMS UI with LifterLMS 9.1+

#### #2.1.0 - 12/8/2025

- 🔧 Fixed Fixed - Progressive updates with Paid Memberships Pro not syncing first_name/last_name when PMPro-specific fields (pmpro_bfirstname, pmpro_blastname) aren't enabled for sync - now falls back to standard first_name/last_name fields
- ⚡️ Improved Cart data now includes enhanced product and line item details for better ecommerce integration (products array, line items array with taxes)
- ⚡️ Improved Paid Memberships Pro carts now include standardized order data structure for compatibility with Enhanced Ecommerce addon

#### #2.0.9 - 11/2/2025

- ✨ New Added cart recovery support for Paid Memberships Pro - checkout fields (including custom fields) will be pre-filled when a customer clicks the cart recovery link
- 🔧 Fixed Fixed progressive updates not working with Paid Memberships Pro when the Abandoned Cart Delay option is enabled
- 🔧 Fixed Fixed progressive updates with Paid Memberships Pro only syncing email address instead of all form fields (caused by WooCommerce and PMPro handlers both running on the same AJAX action)
- 🔧 Fixed Fixed cart recovery URL not syncing during progressive updates with Paid Memberships Pro

#### #2.0.8 - 10/9/2025

- ✨ New Added support for progressive updates with Paid Memberships Pro (updates contact as additional fields are filled in)
- ✨ New Added setting to configure which field triggers progressive updates for Paid Memberships Pro checkouts
- 🔧 Fixed Fixed Paid Memberships Pro only syncing email, first name, and last name fields instead of all checkout form fields (phone, address, custom fields, etc.)

#### #2.0.7 - 8/26/2025

- ✨ New Added support for CheckoutWC
- 🔧 Fixed Fixed abandoned cart tags not being applied with MemberPress when using the Abandoned Cart Delay option
- 🔧 Fixed Fixed fatal error auto-applying WooCommerce coupons during an auto-login session if loading the user's tags resulted in an API error

#### #2.0.6 - 3/10/2025

- ⚡️ Improved When recovering a cart with EDD, the ?wpfrc= query var will be removed from the URL and the user will be redirected to properly set up the session
- 🔧 Fixed Fixed "Undefined array key 0" warning when syncing shipping methods with WooCommerce and WooCommerce Multivendor Marketplace
- 🔧 Fixed Fixed warning 
```
Undefined array key "mepr_product_id"
```

 when saving MemberPress carts
- 🔧 Fixed Fixed some rare cases where a cart would get saved without an email address, WP Fusion would try to process it every 15 minutes
- 🔧 Fixed Fixed error "Object of class stdClass could not be converted to string" with Paid Memberships Pro when logged in users switched memberships
- 🛠️ Dev Added 
```
wpf_abandoned_cart_saved
```

 action hook

#### #2.0.5 - 10/15/2024

- 🔧 Fixed Fixed abandoned cart tags not applying for WooCommerce guest checkouts since 2.0.4

#### #2.0.4 - 10/2/2024

- ✨ New Added support for syncing shipping total and method with WooCommerce and ActiveCampaign
- ✨ New Added support for recovering discounts that were applied to the WooCommerce cart, when the recovery link is visited
- ⚡️ Improved If the cart recovery URL isn't enabled for sync, and the CRM doesn't support cart recovery, no pending cart will be saved to the database
- ⚡️ Improved If a logged in Paid Memberships Pro member reaches the checkout and doesn't have a saved contact ID, an API call will be made to look up their contact ID in the CRM
- 🔧 Fixed Fixed multiple coupons on a WooCommerce cart being each being synced with the total cart discount, instead of their individual discount amounts

#### #2.0.3 - 8/26/2024

- ✨ New Added cart product name(s) as an available field for sync
- ⚡️ Improved Abandoned cart tags will now be removed after every successful checkout, even if the current cart was not yet considered abandoned
- ⚡️ Improved If creating a contact fails when using the delay option, the cart will be deleted instead of retried
- ⚡️ Improved Declared compatibility with the WooCommerce block-based checkout to avoid "Incompatible plugin" notices in the admin
- 🔧 Fixed Fixed uncaught error if adding a contact to the CRM failed during the initial abandoned cart sync
- 🔧 Fixed Fixed fatal error recovering EDD carts when multiple discounts were applied
- 🔧 Fixed Fixed broken link to the Abandoned Cart documentation on the WP Fusion website

#### #2.0.2 - 7/18/2024

- ⚡️ Improved Now supports custom email fields on the WooCommerce (classic) checkout, instead of just "billing_email"
- 🔧 Fixed Fixed unhandled error when processing abandoned carts using the delay option, if the API call to create a contact failed
- 🔧 Fixed Fixed fatal error "Call to member function get_cart() on null" when logging in over the REST API

#### #2.0.1 - 6/3/2024

- ⚡️ Improved Registered users that have their carts synced after a delay will now have their user ID recorded to the logs
- 🔧 Fixed Fixed fatal error "Uncaught Error: Call to a member function get_cart() on null" when editing posts in the admin with the block editor, since 2.0.0

#### #2.0.0 - 5/31/2024

- **Heads up! This is a major update! We have tested it thorughly but there may still be gremlins. Please contact support if you run into any issues.**
- Major refactor and standardization of all integrations
- ✨ New Added support for [Paid Memberships Pro](https://wpfusion.com/documentation/membership/paid-memberships-pro/#abandoned-cart-tracking)
- ✨ New Added support for delaying the sync of contact data, tags, and cart data for a specified number of minutes. If the customer completes their purchase in the meantime, no abandoned cart data will be synced.
- ✨ New Added support for the block-based checkout in WooCommerce
- ✨ New Added a metabox showing the cart contents of the saved cart post type
- 🔧 Fixed Fixed ActiveCampaign error "The ecomOrder with externalcheckoutid already exists in the system" when an existing checkout session started checkout a second time
- 🔧 Fixed Fixed error "Call to a member function get() on null" when calling woocommerce_form_field() outside of the WooCommerce checkout (i.e. on the Account page registration form)

#### #1.9.0 - 5/6/2024

- ✨ New Added option to delay sending any abandoned cart details to the CRM until after a delay period (experimental, currently just for WooCommerce)
- ✨ New Added option to enable progressive updates with the WooCommerce checkout fields (previously it was on by default)
- ✨ New Added Requires Plugins header for WordPress 6.5
- ⚡️ Improved High Performance Order Storage for WooCommerce is now declared regardless of whether or not WP Fusion has been connected to the CRM
- ⚡️ Improved With WooCommerce, no cart data will be sent until at least a first name and email have been entered on the checkout
- 🔧 Fixed Fixed Drip and ActiveCampaign integrations not sending the correct order totals when the Cart Value field was not enabled for sync (cart value was not being recalculated early enough)
- 🔧 Fixed Fixed deprecated use of 
```
get_page_by_title()
```
- 🔧 Fixed Fixed errors related to visiting a cart recovery URL inside the WordPress admin

#### #1.8.0 - 6/30/2023

- ⚡️ Improved Guest sessions will now be tracked in WooCommerce's session storage, and cart updates can sync in real time to the CRM (ActiveCampaign or Drip) when cart contents are modified (previously this only worked for registered users)
- ⚡️ Improved If a user registers or logs in and has items in their cart, and Trigger on Add to Cart is enabled, the cart contents will be synced at that time
- ⚡️ Improved If a WooCommerce cart is completely emptied, the corresponding Deep Data cart will be deleted in ActiveCampaign
- 🔧 Fixed Fixed abandoned cart tags not being removed after a MemberPress customer had signed up for a new free trial
- 🔧 Fixed Fixed PHP warning 
```
Undefined array key "line_subtotal"
```

 with free WooCommerce products

#### #1.7.4 - 2/20/2023

- ✨ New Added support for [WooCommerce High Performance Order Storage](https://woocommerce.wordpress.com/2021/03/02/high-performance-order-storage-in-woocommerce-5-5/)
- ⚡️ Improved The checkout scripts will now wait 5 seconds before watching inputs for changes, to prevent auto-filled customer data from being synced
- ⚡️ Improved The 
```
email_optin
```

 field will no longer be synced with the abandoned cart data
- ⚡️ Improved The Trigger On Submit option with MemberPress is now disabled when using Single Page Checkout
- 🔧 Fixed Fixed abandoned carts not syncing with MemberPress Single Page Checkout
- 🔧 Fixed Fixed abandoned cart tags not applying when MemberPress checkout forms were embedded in other pages

#### #1.7.3 - 11/1/2022

- Tested for WordPress 6.1.0
- ⚡️ Improved If a registered user completes checkout and doesn't have abandoned cart tags, they will be removed directly from the CRM. This fixes an issue whereby if someone completed checkout before the API calls had finished processing to apply the tags, then the tags wouldn't be removed.
- ⚡️ Improved Improved handling for "Could not process request: Duplicate entry" errors with ActiveCampaign
- ⚡️ Improved Product descriptions will now use the Short Description field instead of the excerpt
- ⚡️ Improved Moved cart storage to postmeta instead of post content (fixes a weird infinite loop issue with Divi and 
```
wp_insert_post()
```

)
- 🔧 Fixed Fixed infinite loop error when using Divi to build a checkout page with FunnelKit (WooFunnels)
- 🔧 Fixed Fixed variable price settings not displaying in Easy Digital Downloads since EDD 3.0
- 🔧 Fixed Fixed carts not being updated in the CRM when a logged-in user updated a cart item quantity
- 🔧 Fixed Fixed PHP warning 
```
Undefined array key 0
```

 in EDD integration when checking out with a license renewal discount

#### #1.7.2 - 2/7/2022

- ✨ New Added option to trigger MemberPress abandoned cart actions only when the first checkout step has been submitted
- ⚡️ Improved If the cart total is updated on the WooCommerce cart page it will be synced to the CRM (for logged in users)
- ⚡️ Improved Cart updates on the checkout page (i.e. via WooFunnels, CartFlows, etc) will now trigger a sync of the updated cart total to the CRM
- 🔧 Fixed Fixed notice 
```
WP_Scripts::localize was called incorrectly
```

#### #1.7.1 - 1/6/2022

- ⚡️ Improved Will now try to remove malformed 
```
utm_*
```

 variables that may have gotten appended to the cart recovery link by the ESP, and are preventing the contact ID from being read
- 🔧 Fixed Fixed cached carts being publicly queryable on the frontend
- 🔧 Fixed Fixed fatal error resulting from unhandled WP_Error when the initial contact creation failed
- Tested for WooCommerce 6.0.0

#### #1.7.0 - 7/2/2021

- Moved cart storage out of transients and into a custom post type
- ✨ New Added support for auto-applied discounts with EDD when using cart recovery URLs
- ⚡️ Improved Abandoned cart tracking at checkout will also identify the visitor to site tracking scripts with supported CRMs
- ⚡️ Improved Cart recovery links with WooCommerce and EDD will identify the visitor to site tracking scripts with supported CRMs
- 🔧 Fixed Fixed Sendinblue contacts with + symbols in their email address not working with cart recovery URLs
- 🔧 Fixed Fixed errors recovering carts when both WooCommerce and Easy Digital Downloads are active at the same time

#### #1.6.8 - 5/28/2021

- 🔧 Fixed Fixed cart recovery not working with WooCommerce 5.2.x
- 🔧 Fixed Fixed errors when WP Fusion wasn't connected to a CRM

#### #1.6.7 - 3/10/2021

- ✨ New Added support for syncing cart discounts to ActiveCampaign (Deep Data) from Easy Digital Downloads and WooCommerce
- ✨ New Added Cart Discount Code and Cart Discount Amount fields for sync
- ✨ New Added wpf_abandoned_cart_apply_tags filter
- ✨ New Added wpf_abandoned_cart_data filter
- ⚡️ Improved Cart fields have been moved to the Contact Fields settings tab
- EDD cart recovery will now restore cart discounts, fees, and the selected payment gateway
- EDD cart recovery will now pre-fill customer information

#### #1.6.6 - 2/22/2021

- ⚡️ Improved customer_id created by an ActiveCampaign cart will now be passed to the Enhanced Ecommerce addon at checkout
- 🔧 Fixed Fixed error adding products to cart with ActiveCampaign and Deep Data categories being generated from product attributes
- 🔧 Fixed Fixed Easy Digital Downloads cart tracking not working when only one payment gateway was active
- 🔧 Fixed Fixed fatal error activating the Abandoned Cart addon with WP Fusion Lite

#### #1.6.5 - 1/8/2021

- ✨ New Added download image URL to cart data with Easy Digital Downloads
- ✨ New Added product description to cart data with Easy Digital Downloads and WooCommerce

#### #1.6.4 - 9/28/2020

- ⚡️ Improved Improved pre-filling the checkout fields when using the recovery link
- 🔧 Fixed Fixed compatibility bug with WP Multilang
- 🔧 Fixed Fixed some bugs when syncing a cart during an active auto-login session
- Updated for tags select compatibility with WP Fusion 3.35

#### #1.6.3 - 8/11/2020

- 🔧 Fixed Fixed abandoned cart actions not running when EDD payment gateway was changed
- ✨ New Added .pot file

#### #1.6.2 - 5/11/2020

- 🔧 Fixed Fixed fatal error with EDD getting cart recovery URL

#### #1.6.1 - 4/28/2020

- 🔧 Fixed Fixed cart recovery URL not working with CRMs without cart support

#### #1.6 - 4/22/2020

- ✨ New Added LifterLMS abandoned cart tracking
- ✨ New Added Sync Carts support for Easy Digital Downloads
- ActiveCampaign integration will now update an existing cart if one exists instead of creating a new one
- 🔧 Fixed Fixed MemberPress trying to sync carts during WooCommerce checkout
- 🔧 Fixed Fixed MemberPress assigning an empty tag if no abandoned cart tag was specified

#### #1.5.4 - 2/24/2020

- ✨ New Added support for currencies other than USD with ActiveCampaign Deep Data
- 🔧 Fixed Fixed cart recovery links not restoring variation IDs

#### #1.5.3 - 2/17/2020

- ✨ New Added per-product abandoned cart tagging to MemberPress
- ✨ New Added option to sync selected product attributes to categories in Drip
- WooCommerce integration will now inherit store settings regarding product prices being inclusive vs exclusive of tax
- 🔧 Fixed Fixed MemberPress abandoned cart tags not being applied to logged in users

#### #1.5.2 - 1/23/2020

- ✨ New Added Deep Data / Shopper Activity support for MemberPress abandoned cart tracking
- 🔧 Fixed Fixed not detecting email field properly on some MemberPress checkouts

#### #1.5.1 - 11/20/2019

- 🔧 Fixed Fixed time zone calculation in ActiveCampaign cart data

#### #1.5 - 11/11/2019

- ✨ New Added MemberPress integration
- ✨ New Added support for WooCommerce product variations in cart data with Drip and ActiveCampaign
- ✨ New Added option to send prices tax-inclusive with WooCommerce
- 🔧 Fixed Fixed time zone calculation for occurred_at with Drip
- 🔧 Fixed Fixed tags not applying for guest checkouts with EDD

#### #1.4.1 - 9/19/2019

- ✨ New Added option to select cart image size for Drip and ActiveCampaign
- ✨ New Added progressive updates for checkout form data

#### #1.4 - 6/12/2019

- ✨ New Added Deep Data Abandoned Cart support for ActiveCampaign
- ✨ New Added support for auto-applied coupons during cart recovery
- Recovered abandoned carts will now pre-fill the name and email address at checkout
- 🔧 Fixed Fixed Drip Shopper Activity cart recovery URL not syncing if URL was also being sent to a custom field

#### #1.3.1 - 6/4/2019

- 🔧 Fixed Fixed product variations breaking Shopper Activity abandoned carts with Drip

#### #1.3 - 4/22/2019

- ✨ New Added Shopper Activity API support for Drip
- ✨ New Added option to change the cart recovery URL destination

#### #1.2 - 4/16/2019

- ✨ New Added option for syncing total cart value to a custom field

#### #1.1 - 3/18/2019

- 🔧 Fixed Fixes for tags sometimes not applying when "On Add to Cart" setting was enabled
- Abandoned cart async actions will only run once per checkout form

#### #1.0 - 1/25/2019

- Fallback for when product ID isn't present on variation cart items
- 🔧 Fixed Fix for sending cart recovery URL for logged in users

#### #0.9 - 9/23/2018

- Bugfixes

#### #0.8 - 9/22/2018

- Updated WooCommerce settings storage

#### #0.7 - 8/16/2018

- ✨ New Added cart recovery URL for WooCommerce

#### #0.6 - 12/22/2017

- ✨ New Added abandoned cart tags for Woo / EDD product variations

#### #0.5

- 🔧 Fixed Fixed issues where sometimes duplicate contacts would be created

#### #0.4

- Compatibility updates for WPF v3.3
- WooCommerce 3.0 fixes

#### #0.3

- 🔧 Fixed Fixed checkout errors

#### #0.2

- ✨ New Added support for per-product tagging
- ✨ New Added option to apply tags on Add To Cart for logged in users

#### #0.1

- Initial release

---

## ActiveCampaign Abandoned Cart Tracking

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/)

### Overview

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in ActiveCampaign.

		WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)
		
After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to ActiveCampaign (even if they don’t complete the checkout).

You can then use automations in ActiveCampaign to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on tags.

### Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)

There are two important settings:

1. In the **Apply Tags** setting, select a tag to use for tracking abandoned carts. This tag will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart tags.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in ActiveCampaign. These fields can then be added to cart recovery emails using [merge tags](https://help.activecampaign.com/hc/en-us/articles/220709307-Personalization-Tags#h_01HP55MYTZDYVR2T18HP4X3J00).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)

#### Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in ActiveCampaign.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in ActiveCampaign.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.
You can then use a merge field in the email editor in ActiveCampaign to include the unique recovery URL.

**Heads up:** If you are using the recovery URL field in a button in an ActiveCampaign email, it’s recommended to turn *off* Google Analytics tracking on the email.

The reason is that the UTM parameters can get appended to the contact ID in the button, which causes the cart recovery not to work.
When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### Deep Data API

The [Deep Data API](https://help.activecampaign.com/hc/en-us/articles/360001046024-How-do-I-create-an-abandoned-cart-automation-Deep-Data-integration-) supports syncing the full cart contents to ActiveCampaign when a customer updates their cart in WooCommerce or Easy Digital Downloads.

To enable this feature check the box for *Sync Carts* from the Addons tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2018/01/abandoned-cart-ac-3-1024x442.jpg)

You can also specify the page the customer should be taken to when they click on the cart recovery link. The *Current Page* option can be used if you have multiple checkout pages (for example with CartFlows).

**Note:** With this method enabled it’s not necessary to use tags for tracking cart abandonment, and it’s not necessary to use a custom field for the recovery URL.

#### Setup in ActiveCampaign

When a customer begins checking out a new cart will be created in ActiveCampaign, which will trigger an abandoned cart action. You can use this action as an entry point for your automation.

![](https://wpfusion.com/wp-content/uploads/2018/01/abandoned-cart-ac-5-1024x617.jpg)

After the trigger, you can send the abandoned cart followup email. Here’s the full automation:

![activecampaign abandonedcart deepdata](https://wpfusion.com/wp-content/uploads/2018/01/activecampaign-abandonedcart-deepdata.png)

ActiveCampaign includes a pre-built abandoned cart recovery email which is compatible with WP Fusion. You can also create your own email from scratch by adding an Abandoned Cart block to any email.

### How it looks

Your carts will automatically be synced to the associated contact in ActiveCampaign, and will appear in the WP Fusion Deep Data section on the contact record, with a status *Abandoned*.

![](https://wpfusion.com/wp-content/uploads/2018/01/ac-abandoned-cart-recovered-1024x603.jpg)

If you’re using WP Fusion’s [Enhanced Ecommerce Addon](https://wpfusion.com/documentation/ecommerce-tracking/activecampaign-ecommerce/), carts will automatically be marked as *Completed* once the order is completed.

#### In emails

The customer’s cart contents will be merged into the recovery email, including product names, prices, and images.

![](https://wpfusion.com/wp-content/uploads/2018/01/abandoned-cart-ac-2-881x1024.jpg)

When the customer clicks the **Return to Checkout** link they will be taken back to the checkout and their cart contents will be restored.

#### Troubleshooting

When a customer begins to check out you should see an entry appear on their activity stream in ActiveCampaign with the cart contents. This will appear on the sidebar when viewing the contact record.

![](https://wpfusion.com/wp-content/uploads/2018/01/abandoned-cart-ac-1-1024x978.jpg)

If this entry doesn’t appear or you experience other unexpected behavior with abandoned cart tracking, please first turn on WP Fusion’s [activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) and begin a test checkout to trigger the abandoned cart actions.

![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-5-1024x439.jpg)

The Abandoned Cart Addon will write detailed information to the logs, which you can include in [your support ticket](https://wpfusion.com/support/contact/).

### Tag based method

This method is available for people who don’t want to use the Deep Data API or don’t have an ActiveCampaign Plus plan.

Check out how we use tag-based abandoned cart tracking with ActiveCampaign [in this blog post](https://wpfusion.com/tutorials/abandoned-cart-recovery-with-easy-digital-downloads-wp-fusion-and-your-marketing-automation-tool/).

#### Setup in WordPress

First, go to the Addons tab under the WP Fusion settings and select a tag to be used for abandoned cart tracking. You use an existing tag, or type a new one into the box.

![abandoned-cart-config](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-config-1024x243.jpg)

WP Fusion will automatically apply this tag to the user when checkout is begun, and the tag will be removed if checkout is completed successfully.

Next, log into your ActiveCamaign account and create a new Automation. The automation should be triggered when the “Abandoned Cart” tag is added and you can send an email, and/or create an internal task for further followup. See the image below for an overview of the entire automation.

![activecampaign abandonedcart tag based](https://wpfusion.com/wp-content/uploads/2018/01/activecampaign-abandonedcart-tag-based.png)

### Testing

To test your abandoned cart automation, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in ActiveCampaign, the tagwill be applied, and the email will be sent.

![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to ActiveCampaign.
You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s tags in ActiveCampaign, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

---

## Mautic Abandoned Cart Tracking

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/mautic-abandoned-cart/](https://wpfusion.com/documentation/abandoned-cart-tracking/mautic-abandoned-cart/)

### Overview

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in Mautic.

		WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)
		
After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to Mautic (even if they don’t complete the checkout).

You can then use automations in Mautic to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on tags.

### Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)

There are two important settings:

1. In the **Apply Tags** setting, select a tag to use for tracking abandoned carts. This tag will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart tags.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in Mautic. These fields can then be added to cart recovery emails using [token fields](https://docs.mautic.org/en/5.x/configuration/variables.html).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)

#### Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in Mautic.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in Mautic.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.
You can then use a token field in the email editor in Mauticto include the unique recovery URL.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### Setup in Mautic

In Mautic, create a campaign that is triggered when the Abandoned Cart tag is applied, and connect it to one or more cart recovery emails.

![mautic abandoned cart tracking campaign setup](https://wpfusion.com/wp-content/uploads/2018/01/mautic-abandoned-cart-tracking-campaign-setup.png)

In your email, you can dynamically include the cart recovery URL by inserting the token field using the token field editor.

![mautic abandoned cart tracking email](https://wpfusion.com/wp-content/uploads/2018/01/mautic-abandoned-cart-tracking-email.png)

Publish the campaign to make it live.

### Testing

To test your abandoned cart campaign, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in Mautic, the tag will be applied, and the email will be sent.

![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to Mautic.
You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s tags in Mautic, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

---

## ConvertKit Abandoned Cart Tracking

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/convertkit-abandoned-cart/](https://wpfusion.com/documentation/abandoned-cart-tracking/convertkit-abandoned-cart/)

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in ConvertKit.

		WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)
		
After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to ConvertKit (even if they don’t complete the checkout).

You can then use automations in ConvertKit to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on tags.

### Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)

There are two important settings:

1. In the **Apply Tags** setting, select a tag to use for tracking abandoned carts. This tag will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart tags.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in ConvertKit. These fields can then be added to cart recovery emails using [liquid codes](https://help.convertkit.com/en/articles/2502633-basic-email-personalization-with-liquid-faqs).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)

#### Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in ConvertKit.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in ConvertKit.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.
You can then use a liquid code in the email editor in ConvertKit to include the unique recovery URL.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### Setup in ConvertKit

In ConvertKit, create an automation that is triggered when the Abandoned Cart tag is applied, and connect it to one or more cart recovery emails.

![convertkit abandoned cart automation](https://wpfusion.com/wp-content/uploads/2018/01/convertkit-abandoned-cart-automation.png)

In your email, you can dynamically include the cart recovery URL by inserting the liquid code using the email personalization with Liquid.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/convertkit-abandoned-cart.png)Screenshot
Publish the automation to make it live.

### Testing

To test your abandoned cart automation, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in Contact, the tag will be applied, and the email will be sent.

![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to ConvertKit.
You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s tags in ConvertKits, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

---

## AgileCRM Abandoned Cart Tracking

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/agilecrm-abandoned-cart/](https://wpfusion.com/documentation/abandoned-cart-tracking/agilecrm-abandoned-cart/)

### Overview

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in AgileCRM.

		WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)
		
After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to AgileCRM (even if they don’t complete the checkout).

You can then use automations in AgileCRM to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on tags.

### Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)

There are two important settings:

1. In the **Apply Tags** setting, select a tag to use for tracking abandoned carts. This tag will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart tags.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in AgileCRM. These fields can then be added to cart recovery emails using [merge fields](https://github.com/agilecrm/campaigns-merge-fields).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)

#### Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in AgileCRM.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in AgileCRM.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.
You can then use a merge field in the email editor in AgileCRM to include the unique recovery URL.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### Setup in AgileCRM

In AgileCRM, create an automation that is triggered when the Abandoned Cart tag is applied, and connect it to one or more cart recovery emails.

![agilecrm abandoned cart](https://wpfusion.com/wp-content/uploads/2024/07/agilecrm-abandoned-cart.png)

In your email, you can dynamically include the cart recovery URL by inserting the merge tag using the merge field editor.

![agilecrm abandoned cart 2](https://wpfusion.com/wp-content/uploads/2018/01/agilecrm-abandoned-cart-2.png)

Publish the automation to make it live.

### Testing

To test your abandoned cart automation, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in AgileCRM, the tag will be applied, and the email will be sent.

![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to AgileCRM.
You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s tags in AgileCRM, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

---

## Drip Abandoned Cart Tracking

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/)

### Overview

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in Drip.

		WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)
		
After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to Drip (even if they don’t complete the checkout).

You can then use workflows in Drip to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on tags.

### Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)

There are two important settings:

1. In the **Apply Tags** setting, select a tag to use for tracking abandoned carts. This tag will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart tags.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in Drip. These fields can then be added to cart recovery emails using [merge tags](https://help.drip.com/hc/en-us/articles/6419179169165-Pre-Defined-Merge-Tags).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)

#### Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in Drip.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in Drip.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.
You can then use a merge field in the email editor in Drip to include the unique recovery URL.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### Setup in Drip

In Drip, create a workflow that is triggered when the Abandoned Cart tag is applied, and connect it to one or more cart recovery emails.

![drip abandoned cart workflow01](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-workflow01.png)

In your email, you can dynamically include the cart recovery URL by inserting the merge tag using the merge tag editor.

![drip abandoned cart workflow email](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-workflow-email.png)

Publish the workflow to make it live.

### Shopper Activity API New

The [Shopper Activity API](https://help.drip.com/hc/en-us/articles/360022922031-Install-a-Cart-Abandonment-Workflow-Using-the-Shopper-Activity-API) supports syncing the full cart contents to Drip when a customer updates their cart in WooCommerce.

To enable this feature check the box for *Sync Carts* from the Addons tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart.png)

You can also specify the page the customer should be taken to when they click on the cart recovery link. The *Current Page* option can be used if you have multiple checkout pages (for example with CartFlows).

**Note:** With this method enabled it’s not necessary to use tags for tracking cart abandonment, and it’s not necessary to use a custom field for the recovery URL.

#### Setup in Drip

When a customer begins checking out a new cart will be created in Drip, which will trigger the “Created a cart” action. When a customer adds something new to their cart it will trigger the “Updated a cart” action. You can use these actions as an entry point for your workflows.

![drip abandoned cart workflow2](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-workflow2.png)

**Update:**You can use the “Cart Abandonment” Block to merge the abandoned cart contents into your email.

![](https://wpfusion.com/wp-content/uploads/2018/01/cart-abandonedment.png)

Alternatively, for additional control over the layout, consider using Liquid code. Below is an example Liquid template:

```
{% for item in event.items %}

<table style="width: 100%;">

<tbody>

<tr>

<td width="50%"><img src="{{ item.image_url }}" style="width:100%;display:inline-block;" /></td>

<td style="padding-left:24px; vertical-align: top;" width="50%">

<h2 style="margin-top:0;margin-bottom:12px;"><span style="font-size:28px">{{ item.name }}</span></h2>

<span style="font-size:16px">Price: ${{ item.price }}</span><br />

<span style="font-size:16px">Quantity: {{ item.quantity }}</span><br />

<a href="{{ item.product_url }}" style="background:#000000; padding:6px 12px; margin-top:12px;color:#fff;border-radius:6px;display:inline-block;">View Product</a></td>

</tr>

</tbody>
</table>
{% endfor %}
```

To edit the Liquid code in your Drip emails, click on any text area and switch over into Source mode by clicking the **<>**icon, then paste in the code above.

![](https://wpfusion.com/wp-content/uploads/2018/01/drip-code-mode.jpg)

Your email should then look something like this:

![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-7-1024x926.jpg)

See [the Drip documentation](https://help.drip.com/hc/en-us/articles/360025224972-Order-Activity#h_72636af6-7738-44f6-9325-4af4025a104b) for more info on the syntax for Liquid tags.

The cart recovery link can be added by creating a button with the URL 
```
{{ event.cart_url }}
```

.

![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-6.jpg)

#### How it looks

Your customer’s cart contents will be merged into the email, including product names, prices, and images.

![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-4-1024x1004.jpg)

### Testing

To test your abandoned cart workflow, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in Drip, the tag will be applied, and the email will be sent.

![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to Drip.
You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### Troubleshooting

When a customer begins to check out you should see an entry appear (within a couple of minutes) on their activity stream in Drip with the cart contents.

![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-8-1024x619.jpg)

If this entry doesn’t appear or you experience other unexpected behavior with abandoned cart tracking, please first turn on WP Fusion’s [activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) and begin a test checkout to trigger the abandoned cart actions.

![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-5-1024x439.jpg)

The Abandoned Cart Addon will write detailed information to the logs, which you can include in [your support ticket](https://wpfusion.com/support/contact/).

### Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s tags in Drip, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

---

## Ontraport Abandoned Cart Tracking

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/)

### Overview

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in Ontraport.

		WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)
		
After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to Ontraport (even if they don’t complete the checkout).

You can then use automations in Ontraport to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on tags.

### Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)

There are two important settings:

1. In the **Apply Tags** setting, select a tag to use for tracking abandoned carts. This tag will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart tags.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in Ontraport. These fields can then be added to cart recovery emails using [merge fields](https://ontraport.com/university/Ontraport-for-marketing/Pages/Personalizing-with-merge-fields).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)

#### Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in Ontraport.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in Ontraport.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.
You can then use a merge field in the email editor in Ontraport to include the unique recovery URL.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### Setup in Ontraport

In Ontraport, create an automation that is triggered when the Abandoned Cart tag is applied, and connect it to one or more cart recovery emails.

![ontarport abandoned cart tracking automation trigger](https://wpfusion.com/wp-content/uploads/2018/01/ontarport-abandoned-cart-tracking-automation-trigger-1024x276.png)

![ontarport abandoned cart tracking automation](https://wpfusion.com/wp-content/uploads/2018/01/ontarport-abandoned-cart-tracking-automation.png)

In your email, you can dynamically include the cart recovery URL by inserting the merge fied using the merge field editor.

![ontarport abandoned cart tracking email](https://wpfusion.com/wp-content/uploads/2018/01/ontarport-abandoned-cart-tracking-email.png)

Publish the automation to make it live.

### Testing

To test your abandoned cart automation, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in Ontraport, the tag will be applied, and the email will be sent.

![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to Ontraport.
You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s tags in Ontraport, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

---

## Infusionsoft / Keap Abandoned Cart Tracking

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/infusionsoft-abandoned-cart/](https://wpfusion.com/documentation/abandoned-cart-tracking/infusionsoft-abandoned-cart/)

### Overview

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in Infusionsoft.

		WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)
		
After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to Infusionsoft (even if they don’t complete the checkout).

You can then use automations in Infusionsoft to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on tags.

### Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)

There are two important settings:

1. In the **Apply Tags** setting, select a tag to use for tracking abandoned carts. This tag will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart tags.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in Infusionsoft. These fields can then be added to cart recovery emails using [merge fields](https://help.keap.com/help/campaign-merge-fields).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)

#### Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in Infusionsoft.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in Infusionsoft.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.
You can then use a merge field in the email editor in Infusionsoft to include the unique recovery URL.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### Setup in Infusionsoft

In Infusionsoft, create an automation that is triggered when the Abandoned Cart tag is applied, and connect it to one or more cart recovery emails.

![keap abandoned cart 3](https://wpfusion.com/wp-content/uploads/2016/06/keap-abandoned-cart-3.png)

![keap abandoned cart 01](https://wpfusion.com/wp-content/uploads/2016/06/keap-abandoned-cart-01-1024x642.png)

![keap abandoned cart 2](https://wpfusion.com/wp-content/uploads/2016/06/keap-abandoned-cart-2.png)

In your email, you can dynamically include the cart recovery URL by inserting the merge field using the merge field editor.

![keap abandoned cart merge field 1](https://wpfusion.com/wp-content/uploads/2016/06/keap-abandoned-cart-merge-field-1.png)

Publish the automation to make it live.

### Testing

To test your abandoned cart automation, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in Infusionsoft, the tag will be applied, and the email will be sent.

![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to Infusionsoft.
You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s tags in Infusionsoft, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

There are a lot of strategies for tracking and following up on abandoned carts. This guide will provide an overview of how to set up a basic abandoned cart tracking workflow for Infusionsoft.

![abandoned-cart-config](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-config-1024x243.jpg)

---

## Abandoned Cart Tracking Overview

**Source:** [https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/)

### Overview

WP Fusion’s Abandoned Cart addon works with:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)

to sync customer data and apply tags in your CRM when customers fail to finish checking out on your store or membership website.

After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to your CRM (even if they don’t complete the checkout).

You can then use automations in your CRM to follow up with customers who don’t complete checkout within a specified period of time.

The Abandoned Cart addon is available with Plus and Professional licenses.

### General settings

![WP Fusion's abandoned cart addon configuration](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-config-3-2-1024x972.jpg)WP Fusion provides a variety of settings for tracking and following up with abandoned carts on your WordPress website.
This addon has several general settings, which are found at Settings » WP Fusion » Addons » Abandoned Cart Tracking.

Depending on your connected CRM, different options will appear. The available settings are:

- **Sync Carts:**Both [ActiveCampaign](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/) and [Drip](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/) have the ability to sync entire cart contents over their APIs, including the cart products, prices, categories, product images, and applied discounts. If you’re connected to ActiveCampaign or Drip, you can enable this “enhanced” cart functionality by checking the box for **Sync Carts**. For more details see [ActiveCampaign Abandoned Cart Guide](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/) and [Drip Abandoned Cart Guide](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/).
- **Cart Items Image Size:**This setting appears when **Sync Carts** is enabled and lets you specify the product cart image size that should be synced into your CRM. Larger images will display more clearly in cart recovery emails, but will make the emails slower to load.
- **Product Categories:**This setting appears when **Sync Carts**is enabled and lets you select how product categories should be treated in ActiveCampaign or Drip. When “*categories*” is selected the product categories will be synced, when “*attributes*” is selected, the selected product attributes will be synced (for example “Large”, “Blue”)
- **Recovery URL Destination:** When using recovery URLs (see below), you can select where the URL should take the returning customer. *Current Page*  works best with plugins like CartFlows, WooFunnels, or LaunchFlows where different products have different checkout pages.
- **Apply Tags****:**You can specify tags to be applied to the customer, which can trigger sequences in your CRM to follow up with customers who didn’t complete a purchase. Tags can also be configured for specific products while editing each product (see Plugin Integrations below). After a successful checkout any abandoned cart tags will be automatically removed.
- **Abandoned Cart Delay:**Normally WP Fusion sends customer data to your CRM immediately after they’ve entered their details on the checkout screen. Using this feature, you can delay sending any data to your CRM unless the customer hasn’t completed checkout within the specified time (in minutes). Using this setting simplifies the [automation strategy](#strategy) in your CRM since you no longer need to add a wait and condition to see if the cart is still abandoned.
- **Trigger on Add to Cart:** This lets you start the abandoned cart process for logged in users when they add a product to the cart (instead of at checkout).

### Syncing Cart Fields

With all CRMs, WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in the CRM. These fields can then be added to cart recovery emails using merge tags.

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)

The available fields are:

- **Recovery URL:**This will be a one-click recovery URL to restore the customer’s cart, for example 
```
https://mysite.com/checkout/?wpfrc=123
```

.
- **Cart Value:**The total value of the cart contents.
- **Cart Discount Code:**The discount code (if any) applied when the cart was abandoned.
- **Cart Discount Amount:**The discount amount (if any) applied when the cart was abandoned.
- **Cart Product Name(s):**The name of the product in the abandoned cart. If multiple products were in the cart, they will be comma-separated.

Any enabled fields will be synced to the corresponding custom fields in your CRM whenever a cart is updated (currently limited to WooCommerce and Easy Digital Downloads).

### Recovery URLs

WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in your CRM.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in your CRM.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.
You can then use a merge field in the email editor in your CRM to include the unique recovery URL.

**Heads up:** If you are using a Recovery URL custom field in your CRM as the parameter for a button or link in an email, it’s recommended to turn *off* Google Analytics tracking on that link.

The reason is that the UTM parameters can get appended to the contact ID, which causes the cart recovery not to work.
When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### Event Tracking

Only [ActiveCampaign](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/) and [Drip](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/) have dedicated APIs for abandoned cart data, with other CRMs you typically need to use a combination of a tag and custom field to trigger abandoned cart emails and send recovery URLs.

This is effective for triggering an email, but doesn’t give a full picture of your customers’ activity over time.

Thankfully, the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/) also includes an integration with the Abandoned Cart addon, allowing you to track cart activity as events in [15+ CRMs and marketing automation systems](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/#overview).

After installing the Event Tracking addon, head to the Event Tracking settings page, and add a new trigger for Abandoned Cart Created.

![screenshot](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-event-tracking-1024x644.jpg)WP Fusion’s [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/) has been extended to support syncing cart data from the Abandoned Cart addon.
Create a title for your event, and include any relevant properties, such as the cart value, recovery URL, currency, and the user’s current page on your site.

When WP Fusion sends abandoned cart data to your CRM (either immediately, or [after a delay](#general-settings)), the event will be triggered and appear on the contact’s timeline. When combined with the event [tracking features for WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#event-tracking) this helps you visualize customer behavior on your checkout in real time.

### Plugin integrations

WP Fusion’s abandoned cart addon can track abandoned carts in [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking), [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking), [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#abandoned-cart-tracking), [MemberPress](https://wpfusion.com/documentation/membership/memberpress/#abandoned-cart-tracking), and [Paid Memberships Pro](https://wpfusion.com/documentation/membership/paid-memberships-pro/#abandoned-cart-tracking).

In addition to the global settings, you can also track individual products by specifying tags to be applied in your CRM when a specific product or membership is in an abandoned cart.

#### WooCommerce

With [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking) you can specify product-specific abandoned cart tags from the WP Fusion panel while editing any product.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-woo-1024x573.jpg)

You can also specify variation-specific tags when editing any variation.

#### Easy Digital Downloads

With [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking) cart abandonment tags can be set on the [main WP Fusion meta box](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/) for each download.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-edd-1024x442.jpg)

You can also specify cart abandonment tags for individual price IDs when editing a price ID.

#### LifterLMS

With [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#abandoned-cart-tracking), cart abandonment tags can be set up specific to each access plan.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-llms-1024x527.jpg)

#### MemberPress

With [MemberPress](https://wpfusion.com/documentation/membership/memberpress/#abandoned-cart-tracking), cart abandonment tags can be set on the WP Fusion tab when editing any membership level.

![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-memberpress-1024x634.jpg)

**General settings**

With MemberPress you also have the option to delay WP Fusion’s abandoned cart actions until after the first step of the checkout has been submitted.

This can be enabled by selecting **Trigger on Submit** at Settings » WP Fusion » Addons » Abandoned Cart Tracking.

![](https://wpfusion.com/wp-content/uploads/2016/06/memberpress-abandoned-cart-general-settings-1024x203.jpg)

This is designed to fix situations where a user’s browser might autofill an incorrect email address on the checkout, which then triggers the abandoned cart actions.

#### Paid Memberships Pro

With [Paid Memberships Pro](https://wpfusion.com/documentation/membership/paid-memberships-pro/#abandoned-cart-tracking), in addition to the global abandoned cart tags, membership-specific abandoned cart tags can be configured while editing any membership level.

![screenshot](https://wpfusion.com/wp-content/uploads/2016/06/pmpro-abandoned-cart-tracking-1024x379.jpg)

### Strategy

The general strategy for tracking abandoned carts in your CRM with WP Fusion is to set it to apply tags when a checkout has started.

Because the addon will remove those tags when checkout is completed, you can user timers and logic in your CRM to identify customers who started checkout but haven’t yet completed it.

![](https://wpfusion.com/wp-content/uploads/2016/06/MailChimp-Before@2x-796x1024.png)

**The Abandoned Cart addon works with all of our CRM integrations.** See the other articles in this section for more specific strategies for tracking abandoned carts for specific CRMs.

---

