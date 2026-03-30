# 2checkout Add On

*Category from LearnDash documentation*

---

## 2Checkout Integration

**Source:** [https://learndash.com/support/kb/add-ons/2checkout-add-on/2checkout/](https://learndash.com/support/kb/add-ons/2checkout-add-on/2checkout/)

The LearnDash 2Checkout integration is one of several options for selling your courses. If you already have a 2Checkout account, or you like what their payment gateway has to offer, you can use this integration to sell courses on your LearnDash site.

**NOTE**: You will need to register for a [free 2Checkout account](https://www.2checkout.com/) before you can use this integration.

The 2Checkout integration will allow you to sell courses, but it doesn’t come with a lot of flexibility. If you’re looking for more robust member management, a customizable checkout experience or integrations with other WordPress plugins or services, check out our [ecommerce and membership add-ons](https://account.learndash.com/plugins/).

For other simple ways to accept payments, consider our [built-in PayPal integration](https://learndash.com/support/docs/documentation/settings/paypal-settings/) or the free [Stripe add-on](https://learndash.com/support/docs/add-ons/stripe/).

## Who Should Use the 2Checkout Integration?

You should consider using the 2Checkout integration if:

- You’re looking for a quick and easy way to start selling courses
- You want to use the 2Checkout payment gateway

You might not want to use the 2Checkout integration if:

- You want to customize the user’s checkout experience
- You are creating a fully functional membership site
- You’re selling other products in addition to courses
- You want to closely manage the account creation and login process

## Sign Up for a 2Checkout Account

- Navigate to [2checkout.com](https://www.2checkout.com/) and follow the instructions for registering a new account
- Once your account is set up, you can navigate to [secure.2checkout.com](https://secure.2checkout.com/cpanel) to access your account settings, as well as the information you’ll need to set up the LearnDash integration

## Install the 2Checkout Integration

### Option 1: Add-ons Menu(requires an active LearnDash license)

1. In your WordPress admin area, navigate to LearnDash LMS > Add-Ons
2. Locate the 2Checkout for LearnDash add-on
3. Click Install Now
4. Click the Activate Plugin button

![LearnDash 2Checkout plugin card](https://learndash.com/support/wp-content/uploads/2019/03/learndash-2checkout-plugin-card.jpg)

### Option 2: Manual Upload

1. [Download the plugin](https://support.learndash.com/download/18010/)[file](https://account.learndash.com/plugins/) (must be [logged](https://support.learndash.com/)[in](https://account.learndash.com/) to download)
2. In WordPress, navigate to Plugins > Add New
3. Click Upload Plugin
4. Browse for the 
```
.zip
```

 file you downloaded in Step 1
5. Click Install Now
6. Click Activate Plugin

## 2Checkout Settings

To finish setting up the integration, there are a few pieces of information you’ll need to provide to LearnDash. Let’s walk through each one, and show you where to find the information in your 2Checkout account.

All the information you need can be found in your [2Checkout Dashboard](https://secure.2checkout.com/cpanel).

### Enable Instant Notification System (INS)

1. In 2Checkout, navigate to Integrations > Webhooks & API
2. Scroll to the Instant Notification System (INS) section
3. Check the box to enable INS
4. Click Update

![Enable INS in 2Checkout](https://learndash.com/support/wp-content/uploads/2019/03/2checkout-enable-ins.jpg)

### Merchant Code

To locate your merchant code in 2Checkout:

1. Still on the Integrations > Webhooks & API page
2. Under the API section, you’ll find your Merchant Code

![2Checkout Merchant Code in dashboard](https://learndash.com/support/wp-content/uploads/2019/03/2checkout-merchant-code.jpg)

### INS Secret Word

To locate your INS secret word in 2Checkout:

1. Still on the Integrations > Webhooks & API page
2. Under the Secret Word section, you’ll find your INS secret word

![2Checkout INS secret word](https://learndash.com/support/wp-content/uploads/2019/03/2checkout-secret-word-ins.jpg)

---

Now you’ll switch over to your WordPress admin area to enter the information.

1. Navigate to LearnDash LMS > Settings
2. Click the 2Checkout Settings tab at the top
3. Enter your merchant code and INS secret word from above

### Approved URL (Header Redirect)

This one is a little different. You actually have to provide the approved URL to 2Checkout.

![2Checkout URL redirect](https://learndash.com/support/wp-content/uploads/2019/03/2checkout-redirect-url.jpg)

1. Copy the URL that is displayed in the box
2. Navigate your [2Checkout Dashboard](https://secure.2checkout.com/cpanel)
3. Go to the Integrations > Webhooks & API page
4. Find the Redirect URL section
5. Check the box to Enable return after sale
6. Paste the URL in the Approved URL box
7. In the Return Method****dropdown, choose Header redirect
8. Click Update

### Demo Mode

Enable demo mode if you’d like to perform a test transaction, without any money exchanging hands.

After you’ve confirmed everything is working properly, you’ll want to disable this to begin receiving actual payments on your live site.

## Course Configuration

After you’ve configured your 2Checkout for LearnDash settings, the final thing you need to do is set up your course to accept payments.

1. In the WordPress admin area, navigate to LearnDash LMS > Courses
2. Click on the course you’d like to sell with 2Checkout
3. Click on Settings at the top
4. Scroll down to Course Access Settings
5. Set the “Access Mode” to one of two values:

- **Buy Now:** Use “Buy Now” for one-time payments
- **Recurring:** Use “Recurring” if you’d like to set up a recurring payment or subscription

And finally, enter your price in the Course Price field. Ex: 
```
29.99
```

- The currency symbol will be added automatically for you
- If your price is an even dollar amount, you may omit the decimal point and cents (for example: 
```
29
```

)

For recurring payments, you need to include the “Billing Cycle” in days, weeks, months or years.

![Setting price on Buy Now course in LearnDash](https://learndash.com/support/wp-content/uploads/2019/03/learndash-buy-now-course-set-price-animation.gif)

## The User Experience

Now when a user navigates to your course page, and they click the “Take this Course” button, they will be redirected to 2Checkout to complete their purchase.

After payment is complete, a new user account is automatically created, and that user is enrolled into the course they just purchased.

## FAQ

**Does 2Checkout support payments in my country?** Please reference [2Checkout’s list of supported countries](https://www.2checkout.com/global-payments/). **How do I issue refunds and/or cancel subscriptions for my customers?** Issuing refunds and canceling subscriptions is done from your 2Checkout account, not from LearnDash or this add-on. **Are users automatically removed from a course if they are issued a refund?** No. You can [remove the course access from their profile](https://learndash.com/support/docs/users-groups/user-management/#user_enrolled_in_courses). **Why is it showing two transactions on my records?** For LearnDash 4.5.0 or newer, there will be 2 transaction record per single transaction. This is normal and your user will not be charged twice for each transaction. See our explanation on this on our [Payment Transaction Records documentation.](https://learndash.com/support/docs/core/settings/payments/)

---

