# Stripe Add On

*Category from LearnDash documentation*

---

## Stripe Add-on Deprecation FAQ

**Source:** [https://learndash.com/support/kb/add-ons/stripe-add-on/stripe-add-on-deprecation-faq/](https://learndash.com/support/kb/add-ons/stripe-add-on/stripe-add-on-deprecation-faq/)

The[Stripe Add-on](https://learndash.com/support/docs/add-ons/stripe/) has been a longstanding add-on of LearnDash, providing integration between course sales and the Stripe Payment Gateway.

In the past year, a simpler interface called [Stripe Connect](https://learndash.com/support/docs/core/settings/stripe-connect) was introduced to link Stripe Accounts without requiring an additional add-on. Starting **June 13, 2023**, support for the original [Stripe Add-on](https://learndash.com/support/docs/add-ons/stripe/) will be discontinued. Support will continue for Stripe Connect, which is included in the main LearnDash core installation.

Given that this may be a big change for a lot of users,  a simple FAQ has been prepared to address common questions and issues that you may encounter during this transition. Feel free to reach out to support if you don’t find the answers you are looking for in this documentation.

Moving to Stripe Connect allows for streamlined development processes and enables more focused resources on creating better improvements for users in the future.

.kt-accordion-id5044_111816-7f31 .kt-accordion-inner-wrap{column-gap:var(--global-kb-gap-md, 2rem);row-gap:8px;}.kt-accordion-id5044_111816-7f31 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;background:#ffffff;padding-top:var(--global-kb-spacing-sm, 1.5rem);padding-right:var(--global-kb-spacing-sm, 1.5rem);padding-bottom:var(--global-kb-spacing-sm, 1.5rem);padding-left:var(--global-kb-spacing-sm, 1.5rem);}.kt-accordion-id5044_111816-7f31 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background:#ffffff;color:#444444;padding-top:14px;padding-right:10px;padding-bottom:6px;padding-left:16px;}.kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}.kt-accordion-id5044_111816-7f31 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id5044_111816-7f31 .kt-blocks-accordion-header:focus-visible{color:#444444;background:#ffffff;border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}.kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion--visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger, body:not(.hide-focus-outline) .kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}.kt-accordion-id5044_111816-7f31 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id5044_111816-7f31 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{color:#333333;background:#ffffff;border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}.kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#333333;}.kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger{background:#333333;}.kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id5044_111816-7f31:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}@media all and (max-width: 1024px){.kt-accordion-id5044_111816-7f31 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;}}@media all and (max-width: 1024px){.kt-accordion-id5044_111816-7f31 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;}}@media all and (max-width: 1024px){.kt-accordion-id5044_111816-7f31 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id5044_111816-7f31 .kt-blocks-accordion-header:focus-visible{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}}@media all and (max-width: 1024px){.kt-accordion-id5044_111816-7f31 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id5044_111816-7f31 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}}@media all and (max-width: 767px){.kt-accordion-id5044_111816-7f31 .kt-accordion-inner-wrap{display:block;}.kt-accordion-id5044_111816-7f31 .kt-accordion-inner-wrap .kt-accordion-pane:not(:first-child){margin-top:8px;}.kt-accordion-id5044_111816-7f31 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;}.kt-accordion-id5044_111816-7f31 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;}.kt-accordion-id5044_111816-7f31 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id5044_111816-7f31 .kt-blocks-accordion-header:focus-visible{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}.kt-accordion-id5044_111816-7f31 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id5044_111816-7f31 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}}
**Will this affect my current customers?**No, they will continue to be billed as they have been. Switching over will only affect any users that purchase after you setup Stripe Connect.

**What changes will my users see?**For the most part, none. If you are using the standard Stripe checkout process where users are redirected to a Stripe checkout page, they pay there and get redirected back to your site, they will still run through that flow.

**I use the Legacy Checkout type for the Stripe addon and like the popup modal instead of the redirect, will I still have that?**Unfortunately no, Stripe has decided to no longer support updates to that method of purchase and it is not available when using Stripe Connect. That said, we realize that you may prefer this type of purchase flow and not want to redirect your users. We are working on some updates towards that but for the time being, you users will be redirected to a Stripe checkout page and then redirected back to your domain.

**How do I start using Stripe Connect?**Go to LearnDash LMS > Settings > Payments in your WordPress admin dashboard. Click on Manage for the Stripe Connect payment method. Click on the Connect Stripe button and follow the prompts provided to setup the use of Stripe Connect.

You can find more information on the entire process in our support documentation at [https://learndash.com/support/docs/core/settings/stripe-connect/](https://learndash.com/support/docs/core/settings/stripe-connect/)

**Will the Stripe addon stop working after June 13, 2023?**Yes, the addon will continue functioning as usual after this date, though updating beforehand is recommended. However, please note that no new feature updates will be provided after June 13, and any existing issues will remain unresolved.

Moving to Stripe Connect allows for streamlined development processes and enables more focused resources on creating better improvements for users in the future.

If you do not find the answers that you are looking for in this documentation, feel free to reach out to our support team to aid you in this transition.

---

## Stripe Connect

**Source:** [https://learndash.com/support/kb/core/stripe-add-on/stripe-connect/](https://learndash.com/support/kb/core/stripe-add-on/stripe-connect/)

The Stripe Connect integration is one of the quickest ways to start selling your LearnDash courses. [Stripe](https://stripe.com/)is also one of the most popular payment gateways to set up, and their processing fees are similar to other gateways.

**NOTE**If you don’t already have a Stripe account, you can create one during the setup process. Stripe is not available in all countries. [View available countries](https://stripe.com/global)

## Who Should Use Stripe Connect?

**You should consider using the Stripe Connect integration if:**

- You want to easily start accepting secure credit card payments on your site for LearnDash content
- You don’t want to spend time creating an entire checkout experience for your users

![Connect LearnDash to Stripe](https://learndash.com/support/wp-content/uploads/2022/03/learndash-stripe-connect-settings-w-webhook.png)

## Connect Your Stripe Account

1. Navigate to **LearnDash LMS > Settings**
2. Click on the**Payments Tab**
3. Click the**Stripe Connect**link
4. Click on**Connect Stripe**
5. You will be redirected to Stripe to sign in to your account or to create a new account.
6. After you are redirected back to your WP admin dashboard, LearnDash will attempt to automatically configure your Stripe Webhook for both Live and Test Mode. If automatic configuration fails, you can configure your webhooks manually. To do so, please refer to the instructions [here](https://learndash.com/support/kb/core/stripe-add-on/stripe-connect/#h-webhook-url).

## Stripe Settings

Even with Stripe Connect, there are still a few settings that you need to fill out in order for this integration to work correctly.

### Test Mode / Live Mode

There are two ways you can set up the LearnDash Stripe integration: Test mode or Live mode.

- **Test mode**should be used when you’re still testing your site internally. No real money will actually change hands, but Stripe will record if the transaction succeeded or failed. You know you are in Test Mode when the Stripe dashboard is highlighted in orange.
- **Live mode**should be used when you’re ready to launch your course. All transactions in this mode are real transactions, and money will exchange hands. Once you’ve launched your site, you should stay in Live Mode indefinitely.

![Stripe Settings Live and Test Mode](https://learndash.com/support/wp-content/uploads/2022/03/stripe-test-and-live-mode.jpg)

**IMPORTANT:**Stripe updated the [Test Mode Subscription Data Retention policies](https://support.stripe.com/questions/test-mode-subscription-data-retention)and introduced their [test clocks feature](https://stripe.com/docs/billing/testing/test-clocks). Find out more about it below.

Stripe introduced thetest clocksfeature for Stripe Billing, which offers powerful testing capabilities and dramatically reduces the need to keep test mode subscriptions indefinitely. Test clocks simulate what your subscriptions and billing integrations would look like as if time has advanced to a future date. This will cause Billing resources, such as Subscriptions, to change state and trigger webhook events for testing purposes. You can learn more about them [here](https://stripe.com/docs/billing/testing/test-clocks).

Stripe has also updated their Data Retention policies for test mode data. Starting February 1, 2023, Stripe will:

- Automatically cancel test mode subscriptions 90 days after creation
- Automatically delete test mode subscriptions 30 days after cancellation
- You can mark up to 50 test mode subscriptions as exempt in the Dashboard

Take note that this updated data retention policy only impacts test mode subscriptions. They have also updated their[subscription testing guide](https://stripe.com/docs/billing/testing)to show you how you can continue to test throughout the entire subscription life cycle. You can check out their[additional FAQs on the matter from their support site.](https://support.stripe.com/questions/test-mode-subscription-data-retention)If you have any concerns or issues pertaining to this or other Stripe-related concerns, feel free to reach out to them at:[https://support.stripe.com](https://support.stripe.com).

### Payment Methods – Credit Card and Ideal

If you’re running a course that targets both an international and European audience, you can offer**Credit Card**payments for most users, but you can also enable**iDEAL**as a payment method for students in the Netherlands. This way, users have the flexibility to choose the payment method that works best for them.

Make sure to enable**Credit Card**and save your changes if it’s not already selected.

### Webhook URL

Stripe requires a**Webhook URL**to communicate with your site. This URL is automatically generated in LearnDash and must be pasted into your[Stripe account’s webhook settings](https://dashboard.stripe.com/webhooks).

LearnDash will attempt to automatically configure your Stripe Webhook for both Live and Test Mode. If automatic configuration fails, you can configure your webhooks manually. To do so, please refer to the instructions [here](https://learndash.com/support/kb/core/stripe-add-on/stripe-connect/#h-webhook-url).

#### Add a Stripe Webhook

1. Log in to your Stripe account and navigate to[https://dashboard.stripe.com/webhooks](https://dashboard.stripe.com/webhooks)
2. Click the**Add endpoint**button
3. From your WordPress dashboard, go to **LearnDash LMS > Settings > Payments > Stripe Connect** and copy the auto-generated**Webhook URL**
4. Back in Stripe, paste the**Webhook URL**you copied into the**Endpoint URL**field
5. For**Version**, select the latest API version
6. Under**Events to send**, enable ONLY the following events:
- ```
customer.subscription.deleted
```
- ```
invoice.payment_failed
```
- ```
invoice.paid
```
- ```
checkout.session.completed
```
- ```
coupon.deleted
```

**NOTE**: If you’re having problems with duplicated users after a failed payment or canceled transaction, you can also include the following events:**charge.failed, payment_intent.payment_failed, payment_intent.canceled**

1. Click**Add endpoint**to save

![Add specific Stripe events to LearnDash Stripe webhook](https://learndash.com/support/wp-content/uploads/2022/03/add-specific-events-to-LearnDash-Stripe_webhook.gif)

### Validate Webhook Setup

After connecting your Stripe Account, the Live and Test Mode webhooks will be validated automatically. If you need to manually configure your webhook, you can validate the configuration by clicking the **Validate Webhook Setup** button.

![Stripe webhook validated](https://learndash.com/support/wp-content/uploads/2022/03/learndash-stripe-connected-successfully.png)

### Return URL (optional)

You can choose to send users to a confirmation page after their purchase. If no return URL is provided, they will stay on the course page.

You can create this confirmation page using WordPress or a page builder, or use a page on another site. It’s entirely up to you.

Enter the full URL, beginning with
```
https://
```

.

## Course Configuration

After you’ve configured your Stripe for LearnDash settings, the final thing you need to do is set up your course to accept payments.

1. In the WordPress admin area, navigate to **LearnDash LMS > Courses**
2. Click on the course you’d like to sell with Stripe
3. Click on**Settings**at the top
4. Scroll down to**Course Access Settings**
5. Set the Access Mode to one of two values:
- **Buy Now:**Use Buy Now for one-time payments
- **Recurring:**Use Recurring if you’d like to set up a recurring payment (aka: subscription)

And finally, enter your price in the**Course Price**field. Ex:29.99

- The currency symbol will be added automatically for you
- If your price is an even dollar amount, you may omit the decimal point and cents (ex: 29)

For recurring payments, you need to include the Billing Cycle in days, weeks, months, or years.

![LearnDash course payment configuration](https://learndash.com/support/wp-content/uploads/2022/03/learndash-course-payment-configuration.png)

## The User Experience

When users visit your course page, they will see a **Take This Course** button (this language can be customized using[custom labels](https://learndash.com/support/docs/documentation/settings/custom-labels/)).

When a user clicks the purchase button, they will be taken to a secure checkout page (that is hosted on Stripe’s secure servers), where they can enter payment details and complete their purchase.

After payment is complete, a new user account is automatically created, and that user is enrolled in the course they just purchased.

![Stripe LearnDash user experience](https://learndash.com/support/wp-content/uploads/2022/03/old-learndash-stripe-connect-checkout-800x517-1.png)

**NOTE:**Existing website users must first be logged in before purchasing another course via Stripe to prevent duplicate customer account creation in Stripe or failed transactions on the customer’s end.

## FAQ

.kt-accordion-id4475_e767dc-ec24 .kt-accordion-inner-wrap{column-gap:var(--global-kb-gap-md, 2rem);row-gap:8px;}.kt-accordion-id4475_e767dc-ec24 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;background:#ffffff;padding-top:var(--global-kb-spacing-sm, 1.5rem);padding-right:var(--global-kb-spacing-sm, 1.5rem);padding-bottom:var(--global-kb-spacing-sm, 1.5rem);padding-left:var(--global-kb-spacing-sm, 1.5rem);}.kt-accordion-id4475_e767dc-ec24 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background:#ffffff;color:#444444;padding-top:14px;padding-right:10px;padding-bottom:6px;padding-left:16px;}.kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}.kt-accordion-id4475_e767dc-ec24 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id4475_e767dc-ec24 .kt-blocks-accordion-header:focus-visible{color:#444444;background:#ffffff;border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}.kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion--visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#444444;}.kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger, body:not(.hide-focus-outline) .kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger{background:#444444;}.kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:hover .kt-blocks-accordion-icon-trigger:before, body:not(.hide-focus-outline) .kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:after, body:not(.hide-focus-outline) .kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header:focus-visible .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}.kt-accordion-id4475_e767dc-ec24 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id4475_e767dc-ec24 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{color:#333333;background:#ffffff;border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}.kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basiccircle ):not( .kt-accodion-icon-style-xclosecircle ):not( .kt-accodion-icon-style-arrowcircle )  > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#333333;}.kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger{background:#333333;}.kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:after, .kt-accordion-id4475_e767dc-ec24:not( .kt-accodion-icon-style-basic ):not( .kt-accodion-icon-style-xclose ):not( .kt-accodion-icon-style-arrow ) .kt-blocks-accordion-header.kt-accordion-panel-active .kt-blocks-accordion-icon-trigger:before{background:#ffffff;}@media all and (max-width: 1024px){.kt-accordion-id4475_e767dc-ec24 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;}}@media all and (max-width: 1024px){.kt-accordion-id4475_e767dc-ec24 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;}}@media all and (max-width: 1024px){.kt-accordion-id4475_e767dc-ec24 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id4475_e767dc-ec24 .kt-blocks-accordion-header:focus-visible{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}}@media all and (max-width: 1024px){.kt-accordion-id4475_e767dc-ec24 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id4475_e767dc-ec24 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}}@media all and (max-width: 767px){.kt-accordion-id4475_e767dc-ec24 .kt-accordion-inner-wrap{display:block;}.kt-accordion-id4475_e767dc-ec24 .kt-accordion-inner-wrap .kt-accordion-pane:not(:first-child){margin-top:8px;}.kt-accordion-id4475_e767dc-ec24 .kt-accordion-panel-inner{border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;}.kt-accordion-id4475_e767dc-ec24 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header{border-top:0px solid #f2f2f2;border-right:0px solid #f2f2f2;border-bottom:4px solid #f2f2f2;border-left:0px solid #f2f2f2;}.kt-accordion-id4475_e767dc-ec24 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header:hover, 
				body:not(.hide-focus-outline) .kt-accordion-id4475_e767dc-ec24 .kt-blocks-accordion-header:focus-visible{border-top-color:#eeeeee;border-top-style:solid;border-right-color:#eeeeee;border-right-style:solid;border-bottom-color:#eeeeee;border-bottom-style:solid;border-left-color:#eeeeee;border-left-style:solid;}.kt-accordion-id4475_e767dc-ec24 .kt-accordion-header-wrap .kt-blocks-accordion-header:focus-visible,
				.kt-accordion-id4475_e767dc-ec24 > .kt-accordion-inner-wrap > .wp-block-kadence-pane > .kt-accordion-header-wrap > .kt-blocks-accordion-header.kt-accordion-panel-active{border-top-color:#0e9cd1;border-top-style:solid;border-right-color:#0e9cd1;border-right-style:solid;border-bottom-color:#0e9cd1;border-bottom-style:solid;border-left-color:#0e9cd1;border-left-style:solid;}}
**Can I use both PayPal AND Stripe?**Yes. You will need to [configure the PayPal settings](https://learndash.com/support/docs/documentation/settings/paypal-settings/) within LearnDash, but once you’ve added that information, along with all the Stripe information, users will be presented with two options when they click the Take This Course button. It will look like this:
*(design may vary based on your theme)*
![Choose PayPal or Stripe](https://learndash.com/support/wp-content/uploads/2022/03/choose-payment-method.jpg)

**When will I receive my money?**This is determined by your settings in Stripe. Please reference[Stripe’s documentation on payouts](https://support.stripe.com/topics/payouts).

**Can I set up Recurring Payments (also known as Transactions)?**Yes. In the course settings, just set your Access Mode to **Recurring**and choose a billing cycle.

**Can I offer coupons or discounts?**Yes, you can use coupons with Stripe Connect. Check out Stripe’s documentation on using coupons to learn more. Also, consider using one of our other[e-commerce or membership add-ons](https://learndash.com/support/docs/documentation/add-ons/) for more flexibility on payments.

**How do I issue refunds and/or cancel subscriptions for my customers?**Issuing refunds and canceling subscriptions is done from your Stripe account.

**Are users automatically removed from a course if they are issued a refund?**No. You can[remove the course access from their profile](https://learndash.com/support/docs/users-groups/user-management/#user_enrolled_in_courses).

**Is user access removed if their payment fails on a recurring subscription?**Yes, as long as either**invoice.payment_failed**or **customer.subscription.deleted** events happen in Stripe, the user’s access will be removed. Both of these events happen in Stripe, which they then send back to your website.

From the Stripe events documentation page: [https://stripe.com/docs/api/events/types](https://stripe.com/docs/api/events/types)
**invoice.payment_failed** – Occurs whenever an invoice payment attempt fails, either due to a declined payment or the lack of a stored payment method.
**customer.subscription.deleted** – Occurs whenever a user’s subscription ends.

**How do I provide more checkout options or more customization to the process?**Consider using a robust checkout plugin such as WooCommerce and pair it with our LearnDash WooCommerce addon (**LearnDash LMS > Addons**).

**How do I migrate from the Stripe Add-on to Stripe Connect?**1. First, deactivate the Stripe Add-on from your Plugins page or go to **LearnDash LMS > Add-ons**, and deactivate the Stripe Add-on
2. Next, navigate to LearnDash LMS > Settings > [Payments](https://learndash.com/support/glossary/payments/) in your WordPress [Admin](https://learndash.com/support/glossary/admin/) [Dashboard](https://learndash.com/support/glossary/dashboard/)
3. Click on Manage for the Stripe Connect payment method.
4. Click on the Connect Stripe button and follow the provided prompts to set up Stripe Connect.

You can find more information on the entire process in our support documentation at: [https://learndash.com/support/docs/core/settings/stripe-connect/](https://learndash.com/support/docs/core/settings/stripe-connect/)

**Why is it showing two transactions on my records?**For LearnDash 4.5.0 or newer, there will be 2 transaction records per single transaction. This is normal, and your user will not be charged twice for each transaction. See our explanation on this inour[Payment Transaction Records documentation.](https://learndash.com/support/docs/core/settings/payments/)

## Troubleshooting

### My Take this Course button is missing.

The most likely cause for this is that you don’t have any active payment methods configured in **LearnDash LMS > Settings > Payments**

![Take This Course Button is Missing](https://learndash.com/support/wp-content/uploads/2022/03/troubleshooting-take-this-course-button-missing.png)

If you have one of the payment methods active, configured properly, and you are still not seeing the **Take this Course** button, please submit a support ticket with us and our team will be happy to investigate further.

### My transactions are not going through.

Please make sure your webhook settings are configured correctly. In order for the webhook to work, it needs to have at least these events active in your Stripe account:

- ```
checkout.session.completed
```
- ```
invoice.paid
```
- ```
invoice.payment_failed
```
- ```
customer.subscription.deleted
```
- ```
coupon.deleted
```

### I’m seeing a 500 HTTP and timeout error.

If you are seeing the above error when checking out, make sure that the webhook settings are configured to ONLY the following events (enabling all events will likely cause a timeout error).

- ```
checkout.session.completed
```
- ```
invoice.paid
```
- ```
invoice.payment_failed
```
- ```
customer.subscription.deleted
```
- ```
coupon.deleted
```

### I’m getting duplicate customer accounts created after an initial failed or canceled transaction.

If you see duplicate customer accounts being created after an initial failed or canceled transaction, and a subsequent successful purchase, you must have the following events enabled on your webhook settings in addition to the events above:

- ```
charge.failed
```
- ```
payment_intent.payment_failed
```
- ```
payment_intent.canceled
```

In case your user is an existing user or customer, ask them to first log in to their account prior to purchasing another course via Stripe to avoid account duplication.

### The temporary development URL remains in your Live website, and you can’t edit it.

When testing your Stripe configuration on a development site, you might find that once you point the production domain to make the site live, your Stripe webhook URL retains the old, temporary development URL. This will keep the endpoint from validating – it just gets stuck.

The solution: You can edit this webhook URL with the following line of code.
Add the following to your website’s wp-config.php file above the line that says –   /* That’s all stop editing.

```
define('LEARNDASH_DEBUG', true);
```

You should then be able to edit the URL on the Stripe payments page to reflect the updated website address.

Finally, make sure to remove the **LEARNDASH_DEBUG** code from **wp-config.php** once you have edited the URL.

---

