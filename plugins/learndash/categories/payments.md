# Payments

*Category from LearnDash documentation*

---

## PayPal Checkout

**Source:** [https://learndash.com/support/kb/core/payments/paypal-checkout/](https://learndash.com/support/kb/core/payments/paypal-checkout/)

LearnDash integrates with PayPal Checkout, a secure and modern payment solution for course sales. This integration uses PayPal’s latest API and offers a streamlined setup with built-in support, no additional plugins required.

With PayPal Checkout, you can:

- Provide a smoother checkout experience for students
- Accept credit card payments directly on your site
- Ensure more reliable payment processing compared to older systems
- Manage student and admin subscriptions with ease
- Reduce setup complexity with native LearnDash support

## Upgrading from PayPal Standard

If you’re using the PayPal Standard (IPN) integration, LearnDash recommends switching to PayPal Checkout. Here’s what you need to know:

- **PayPal Standard support ends in 2026**
- You’ll see a warning in LearnDash until PayPal Standard is disconnected
- Once disconnected, it cannot be re-enabled

**Important for Subscriptions:** Existing subscriptions created via PayPal Standard **cannot** be migrated to PayPal Checkout. Students will need to re-purchase the course to continue their subscription. LearnDash is exploring support for PayPal Vaulting, which would allow students to update their payment method without repurchasing. This feature is not yet available, but [please share your feedback here](https://learndash.featureos.app/admin/p/create-update-payment-path-for-paypal-ipn-to-new-api-transition). If you rely on custom code or automation based on PayPal Standard, these will need to be updated for compatibility with PayPal Checkout.

## New to PayPal?

PayPal Checkout is the only PayPal option available for new LearnDash sites. PayPal Standard will not appear in your settings.

## How to Set Up PayPal Checkout

Make sure you have:

- LearnDash 3.0+ using the LearnDash 3.0 Template
- Modern Appearance enabled: **WordPress Dashboard > LearnDash > Settings > General**
- A verified **PayPal Business Account**
- An active SSL certificate (HTTPS)
- Registration and login set up on your site ([guide here](https://learndash.com/support/kb/core/settings/login-registration/))

### Step 1: Connect PayPal

You can connect PayPal using either:

**Option 1: Setup Wizard**
Select PayPal as your payment method during onboarding.

![](https://learndash.com/support/wp-content/uploads/2025/08/paypal-checkout-1.png)

**Option 2: Manual Setup**

1. Go to **LearnDash LMS > Settings**
2. Click the **Payments** tab
3. Activate **PayPal Checkout**
4. Click **Connect PayPal Checkout**
5. Log in to your PayPal account
6. Click **Return to Store**

![Paypal Checkout payment methods](https://learndash.com/support/wp-content/uploads/2025/08/paypal-checkout-2.png)

## Test Your Setup (PayPal Sandbox)

To test payments in a sandbox environment:

### Step 1: Create Sandbox Accounts

1. Visit [developer.paypal.com](https://developer.paypal.com/)
2. Navigate to **Testing Tools > Sandbox Accounts**
3. Create two accounts:
- **Business Account** (to simulate your store)
- **Personal Account** (to simulate a student)

![Sandbox test accounts screen](https://learndash.com/support/wp-content/uploads/2025/08/paypal-checkout-5.png)

### Step 2: Enable Test Mode in LearnDash

1. Go to 
```
LearnDash LMS > Settings > Payments
```
2. Click on **PayPal Checkout**
3. Disconnect the live account if connected
4. Enable **Test Mode**
5. Log in with your sandbox Business Account
6. Click **Return to Store**

**Note:**To view or copy sandbox passwords, click on the email in the Sandbox dashboard and use the password icon.

## Failed Payment Handling

If a PayPal subscription payment fails, LearnDash will automatically handle the retries to reduce accidental cancellations.

- LearnDash automatically **retries the payment up to three times**
- **Email notifications** are sent to the user for each retry attempt
- Retries occur **over several days** before the system stops trying
- This helps prevent cancellations caused by temporary payment issues (like expired cards or insufficient funds)

## Cancellation Behavior and Course Access

- When a **PayPal Checkout** subscription is canceled, the student is automatically unenrolled from any associated courses.
- The unenrollment happens immediately once the cancellation is processed.
- This ensures that course access always matches the student’s current subscription status.
- Previously, students remained enrolled until the subscription period ended — this update provides a faster and more accurate response to cancellations.

## LearnDash Profile – Saved Cards

When using the Profile Block or the [ld_profile] shortcode, PayPal Checkout automatically adds a Saved Cards section to each user’s profile.

- The Saved Cards section only appears when PayPal Checkout is properly configured.
- If users do not see the Saved Cards option, it means PayPal Checkout has not been fully set up.
- This feature helps users manage their payment methods for active or future subscriptions.

## Developer Hooks and Filters for PayPal Checkout

LearnDash provides several new actions, filters and templates to extend or customize how PayPal Checkout behaves. These can be used by developers to adjust subscription retry settings, email templates, and display options in the LearnDash profile.

**New Action:**

- [learndash_paypal_standard_migration_shortcode_after](https://developers.learndash.com/hook/learndash_paypal_standard_migration_shortcode_after/)

**New Filters**

- [learndash_profile_show_saved_cards](https://developers.learndash.com/hook/learndash_profile_show_saved_cards/)
- [learndash_show_telemetry_modal](https://developers.learndash.com/hook/learndash_show_telemetry_modal/)
- [learndash_subscription_max_retries](https://developers.learndash.com/hook/learndash_subscription_max_retries/)
- [learndash_subscription_payment_retry_email_message](https://developers.learndash.com/hook/learndash_subscription_payment_retry_email_message/)
- [learndash_subscription_payment_retry_email_placeholders](https://developers.learndash.com/hook/learndash_subscription_payment_retry_email_placeholders/)
- [learndash_subscription_payment_retry_email_subject](https://developers.learndash.com/hook/learndash_subscription_payment_retry_email_subject/)
- [learndash_subscription_retry_intervals](https://developers.learndash.com/hook/learndash_subscription_retry_intervals/)

**New Templates**

- src/admin_views/modules/payments/orders/edit/subscription/details/cells/status.php
- themes/ld30/templates/shortcodes/profile/saved-cards/index.php
- themes/ld30/templates/shortcodes/profile/subscriptions/canceled/cancellation-date.php

## Managing Subscriptions

PayPal Checkout gives both admins and students tools to manage subscriptions directly.

**For Administrators:**

1. Go to**LearnDash LMS > Orders**
2. Click on the order number
3. Under **Status**, click **Cancel Subscription**

![Managing subscriptions for Admins](https://learndash.com/support/wp-content/uploads/2025/08/paypal-checkout-12.png)

**For Students:**

1. Visit the page with the 
```
[ld_profile]
```

 shortcode
2. Locate your subscription
3. Click **Cancel**

![Managing subscriptions for students](https://learndash.com/support/wp-content/uploads/2025/08/paypal-checkout-13.png)

## Troubleshooting Tips

**If PayPal Connection Window Doesn’t Load (especially on Safari):**

- Go to **Safari > Settings > Privacy**
- Disable “Prevent cross-site tracking”
- Allow ads/trackers for your site

**Other Requirements:**

- PayPal account must be a **Business Account**
- Site must be secured with **HTTPS**
- Disable caching or firewall plugins if the connection fails

## Frequently Asked Questions

.kt-accordion-id10563_28b4fe-d0 .kt-accordion-inner-wrap{column-gap:var(--global-kb-gap-md, 2rem);row-gap:8px;}.kt-accordion-id10563_28b4fe-d0 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;background:#ffffff;padding-top:var(--global-kb-spacing-sm, 1.5rem);padding-right:var(--global-kb-spacing-sm, 1.5rem);padding-bottom:var(--global-kb-spacing-sm, 1.5rem);padding-left:var(--global-kb-spacing-sm, 1.5rem);}.kt-accordion-id10563_28b4fe-d0 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background:#ffffff;color:#444444;padding-top:14px;padding-right:10px;padding-bottom:6px;padding-left:16px;}.kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}.kt-accordion-id10563_28b4fe-d0 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id10563_28b4fe-d0 .kt-blocks-accordion-header:focus-visible{color:#444444;background:#ffffff;border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}.kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion--visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger, body:not(.hide-focus-outline) .kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}.kt-accordion-id10563_28b4fe-d0 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id10563_28b4fe-d0 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{color:#333333;background:#ffffff;border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}.kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#333333;}.kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger{background:#333333;}.kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id10563_28b4fe-d0:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}@media all and (max-width: 1024px){.kt-accordion-id10563_28b4fe-d0 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;}}@media all and (max-width: 1024px){.kt-accordion-id10563_28b4fe-d0 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;}}@media all and (max-width: 1024px){.kt-accordion-id10563_28b4fe-d0 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id10563_28b4fe-d0 .kt-blocks-accordion-header:focus-visible{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}}@media all and (max-width: 1024px){.kt-accordion-id10563_28b4fe-d0 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id10563_28b4fe-d0 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}}@media all and (max-width: 767px){.kt-accordion-id10563_28b4fe-d0 .kt-accordion-inner-wrap{display:block;}.kt-accordion-id10563_28b4fe-d0 .kt-accordion-inner-wrap .kt-accordion-pane:not(:first-child){margin-top:8px;}.kt-accordion-id10563_28b4fe-d0 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;}.kt-accordion-id10563_28b4fe-d0 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;}.kt-accordion-id10563_28b4fe-d0 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id10563_28b4fe-d0 .kt-blocks-accordion-header:focus-visible{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}.kt-accordion-id10563_28b4fe-d0 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id10563_28b4fe-d0 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}}
Can I migrate existing subscriptions from PayPal Standard to Checkout?No. Subscriptions cannot be transferred. Students must purchase the course again. LearnDash is exploring a future solution using PayPal Vaulting.

Why is PayPal Standard missing from my settings?Once PayPal Checkout is connected, PayPal Standard is hidden. You can temporarily re-enable it using this filter:

.kt-accordion-id10563_626fa9-62 .kt-accordion-inner-wrap{column-gap:var(--global-kb-gap-md, 2rem);row-gap:10px;}.kt-accordion-id10563_626fa9-62 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:1px solid transparent;border-bottom:1px solid transparent;border-left:1px solid transparent;background:#ffffff;padding-top:var(--global-kb-spacing-sm, 1.5rem);padding-right:var(--global-kb-spacing-sm, 1.5rem);padding-bottom:var(--global-kb-spacing-sm, 1.5rem);padding-left:var(--global-kb-spacing-sm, 1.5rem);}.kt-accordion-id10563_626fa9-62 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:1px solid #eeeeee;border-right:1px solid #eeeeee;border-bottom:1px solid #eeeeee;border-left:2px solid #eeeeee;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background:#ffffff;color:#444444;padding-top:14px;padding-right:16px;padding-bottom:14px;padding-left:16px;}.kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}.kt-accordion-id10563_626fa9-62 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id10563_626fa9-62 .kt-blocks-accordion-header:focus-visible{color:#444444;background:#ffffff;border-top-color:#d4d4d4;border-top-style:solid;border-right-color:#d4d4d4;border-right-style:solid;border-bottom-color:#d4d4d4;border-bottom-style:solid;border-left-color:#d4d4d4;border-left-style:solid;}.kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion--visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger, body:not(.hide-focus-outline) .kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}.kt-accordion-id10563_626fa9-62 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id10563_626fa9-62 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{color:#444444;background:#ffffff;border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}.kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id10563_626fa9-62:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}@media all and (max-width: 1024px){.kt-accordion-id10563_626fa9-62 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:1px solid transparent;border-bottom:1px solid transparent;border-left:1px solid transparent;}}@media all and (max-width: 1024px){.kt-accordion-id10563_626fa9-62 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:1px solid #eeeeee;border-right:1px solid #eeeeee;border-bottom:1px solid #eeeeee;border-left:2px solid #eeeeee;}}@media all and (max-width: 1024px){.kt-accordion-id10563_626fa9-62 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id10563_626fa9-62 .kt-blocks-accordion-header:focus-visible{border-top-color:#d4d4d4;border-top-style:solid;border-right-color:#d4d4d4;border-right-style:solid;border-bottom-color:#d4d4d4;border-bottom-style:solid;border-left-color:#d4d4d4;border-left-style:solid;}}@media all and (max-width: 1024px){.kt-accordion-id10563_626fa9-62 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id10563_626fa9-62 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}}@media all and (max-width: 767px){.kt-accordion-id10563_626fa9-62 .kt-accordion-inner-wrap{display:block;}.kt-accordion-id10563_626fa9-62 .kt-accordion-inner-wrap .kt-accordion-pane:not(:first-child){margin-top:10px;}.kt-accordion-id10563_626fa9-62 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:1px solid transparent;border-bottom:1px solid transparent;border-left:1px solid transparent;}.kt-accordion-id10563_626fa9-62 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:1px solid #eeeeee;border-right:1px solid #eeeeee;border-bottom:1px solid #eeeeee;border-left:2px solid #eeeeee;}.kt-accordion-id10563_626fa9-62 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id10563_626fa9-62 .kt-blocks-accordion-header:focus-visible{border-top-color:#d4d4d4;border-top-style:solid;border-right-color:#d4d4d4;border-right-style:solid;border-bottom-color:#d4d4d4;border-bottom-style:solid;border-left-color:#d4d4d4;border-left-style:solid;}.kt-accordion-id10563_626fa9-62 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id10563_626fa9-62 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}}
I’m getting the following error when trying to connect my PayPal Business account:*****“Advanced Credit and Debit is not enabled for your account, please login into your PayPal account to provide more information.”*This error typically appears with older PayPal Business accounts. To resolve it, contact PayPal Support and complete the verification process, which may include submitting additional documents to enable credit card payments.

---

