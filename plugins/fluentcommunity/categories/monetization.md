# Monetization

*Category from FluentCommunity documentation*

---

## Collect Recurring Payments for Private Spaces/Courses

**Source:** [https://fluentcommunity.co/docs/collect-recurring-payments-for-private-spaces-courses/](https://fluentcommunity.co/docs/collect-recurring-payments-for-private-spaces-courses/)

In **FluentCommunity**, you can make your **Spaces** and **Courses** private to get paid by your clients. In this case, if you need to collect recurring payments from your clients, you can use [Paymattic](http://paymattic.com) (a WordPress Plugin for collecting payments through Forms). Paymattic will allow you to collect **Recurring Payments**for the **Private Space/Course**.

This guide will guide you on how to collect recurring payments from a space/course within **FluentCommunity** using **Paymattic**.

## Collect Recurring Payments from Space/Course

Before starting the process, ensure you monetize your Space/Course through the Paymattic.

To learn how to Monetize Space/Course using Paymattic Plugin, read this [Documentation](https://fluentcommunity.co/docs/monetizing-your-spaces-courses-with-paymattic/) thoroughly.

### Add Monetized Space/Course in Paymattic Subscription Form

To collect recurring payments for a space/course, you need to integrate the desired Space/Course of FluentCommunity into a Subscription Form of Paymattic.

To learn how to add a space/course in a Subscription Form of Paymattic, follow the steps below –

First, go to **Paymattic Dashboard**, go to **All Forms**, and open a desired **Subscription Form** where you want to add the space/course.

> But, if you do not have an existing Subscription Form, read this Documentation to create a new one.

For example, I chose an existing subscription form to show you the process.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/1.-Open-desired-Payamttic-Form-scaled.webp)

Once you are on the **Editor** page, you can see that the Subscription Item field is already added.

You can customize its settings anytime according to your requirements by clicking the **Settings Icon**on the right side.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/2.-Form-Editor-scaled.webp)

Once you click the Settings, you will get all the options shown in the screenshot below to set up your subscription payment plans based on your needs.

To learn the detailed use of all settings options, [click here](https://paymattic.com/docs/how-to-add-susbcription-payment-item-fields-in-paymattic/#1-toc-title).

![](https://fluentcommunity.co/wp-content/uploads/2025/03/3.-General-settings-of-subscription-field.webp)

Once you complete the setup of your subscription field, go to the **Integrations** tab, open the **Add New Integration** dropdown list, and add the **FluentCommunity Integration**option.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/4.-Adding-Fluent-Community-Integration--scaled.webp)

Now, a pop-up page will appear with various settings options for configuring FluentCommunity.

**All the settings options mentioned in the screenshot below are briefly explained:**

**A. Name**: Here, you can set a name according to your preference for your feed

**B. Select Spaces or Courses to Enroll**: Here, you can select your desired or all Space/s and Course/s to set where your users will add as members/students immediately after form submission. For example, I selected a Space (Developer Space) and a Course (Advanced Course on Programming).

**C. Email Address**: In this field, you need to select the **Email Address**.

**D. Full Name (Only for new users)**: Here, use the {input.customer_name} shortcode by clicking the **ShortCode Icon**.

**E. Password (Only for new users)**: Here, you can set a fixed password for every new user. Or, you can keep it empty to automatically generate a new password for each user.

**F. Allow the user login automatically after Form submission**: Enable this option and your user will be directly logged into your Paymattic User Dashboard after submitting the form.

**G. Send default WordPress welcome email to a user after registration**: Enable this option to send a welcome email notification to your users with login details including a password reset option.

**H. Join/Enroll space/course on payment success only**: Check this option if you want your users to Join/Enroll in a Space/Course only when the payment is successful. If you keep it unchecked, users can get access to the space/course without payment succeed.

I. **Remove from space/course if payment refunded**: Checking this option will allow you to remove users automatically from space/course if payment is refunded.

**J. Remove from space/course if subscription canceled**: Checking this option will allow you to remove users automatically from space/course if they cancel their subscription.

**K. Enable conditional logic**: Enable this toggle if you want to set any conditions on this form submission. To learn the details of the use of this Conditional Logic, read this [Documentation](https://paymattic.com/docs/how-to-use-conditional-logic-in-form-fields-with-paymattic/). Plus, to get access to this feature, you need the [Paymattic Pro Plugin](https://paymattic.com/docs/how-to-install-and-activate-paymattic-in-wordpress/#1-toc-title).

Once you set up the page, click the **Create Fluent Community Feed** button and the feed will be added.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/5.-Create-New-FluentCommunity-Integration-Feed.webp)

### Publish Your Paymattic Subscription Form

Once you added the desired FluentCommunity Space/Course into the Subscription Form, publish the form.

To learn the detailed process on how to publish a form, [click here](https://fluentcommunity.co/docs/monetizing-your-spaces-courses-with-paymattic/#11-toc-title).

## Start Collecting Your Recurring Payments from Space/Course

After publishing the Subscription Form and adding the Form URL to the desired Space/Course, you can start collecting the recurring payments.

When users visit the Space/Course, they’ll see the Lock Screen with the CTA button directing them to the payment form. Upon completion, you can grant them access to the space/course

“Additionally, to learn more detailed guidelines on how to manage or cancel a  Subscription, refer to the following Documentation.

- [How to Manage your Subscriptions in Paymattic](https://paymattic.com/docs/how-to-manage-subscriptions-in-wordpress-with-paymattic/)
- [How to Cancel a Subscription Manually in Paymattic](https://paymattic.com/docs/manually-cancel-any-subscription/)

This setup enables seamless space/course monetization within your FluentCommunity platform. If you have any further questions about this guide, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/).

---

## Monetizing Your Spaces/Courses with Paymattic

**Source:** [https://fluentcommunity.co/docs/monetizing-your-spaces-courses-with-paymattic/](https://fluentcommunity.co/docs/monetizing-your-spaces-courses-with-paymattic/)

In **FluentCommunity**, you can create, share, and even monetize spaces/courses. This guide will walk you through monetizing your spaces/courses within **FluentCommunity** using **Paymattic**.

## Monetize Space with Paymattic

To monetize your Space, you need to complete a few steps to set up the desired Space in FluentCommunity.

Follow the steps with screenshots below to learn the process of setting up Space –

### Create or Edit a Space

First, you need to open the desired space you want to monetize. You can start the process by creating a new Space in FluentCommunity or using an existing one.

For example, I opened an existing Space to show you the whole process. To learn the detailed guide on Space creation, check out this [documentation](https://fluentcommunity.co/docs/how-to-create-a-space/) here.

### Set Space Privacy to Private

Once you are on the desired space you wish to monetize, click the **Three-dot** button in the top right corner and select the **Space Settings** option.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/1.-Settings-of-desired-Space-scaled.webp)

Now set the Space **Privacy** to **Private** and select **Custom Lock Screen**. The **Custom Lock Screen**will only be visible when the privacy setting is set to Private.

After setting the Space to private, click on the **Lock Screen** option at the top menu.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/2.-Setup-Space-Privacy-to-Private-scaled.webp)

### Enable Space Lock Screen

Once you are on the Lock Screen, go to the **Editor** of **Call to action (CTA)** option by clicking the **Pencil Icon**from the left menu.

“Additionally, to learn more details about Lock Screen Customization, read this [documentation](https://fluentcommunity.co/docs/managing-privacy-of-spaces/#4-toc-title).”

![](https://fluentcommunity.co/wp-content/uploads/2025/03/3.-CTA-editor-of-Space-scaled.webp)

Now, finally, provide the desired **Paymattic Form URL** inside the **Button Link** field in the left menu through which you want to add members to this space and collect payments from them.

[Paymattic](https://paymattic.com/docs/paymattic-introduction/) is a WordPress plugin that can build forms to collect payment and donation. To learn the process of getting this Paymattic Form URL, click here.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/4.-Button-Link-field-of-Space-scaled.webp)

## Monetize Course with Paymattic

In FluentCommunity, you need to complete a few steps to set up the desired Course to monetize your Courses.

Follow the steps with screenshots below to learn the process of setting up Course–

### Create or Edit a Course

To start the process, select the desired course you want to monetize. You can do it by creating a new course in FluentCommunity or using an existing one.

For example, I opened an existing Course to show you the whole process. To learn the detailed guide on Course creation, check out this [documentation](https://fluentcommunity.co/docs/creating-and-managing-course/) here.

### Set Course Privacy to Private

Once you are on the preferred course you want to monetize, and go to its **General Settings**option.

Now set the **Privacy** to **Private** and select **Custom Lock Screen**. The **Custom Lock Screen**will only be visible when the privacy setting is set to Private.

Once set up the Course to private, click on the **Lock Screen** option at the top menu.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/5.-Setup-Course-Privacy-to-Private-scaled.webp)

### Enable Course Lock Screen

When you are on the Lock Screen, go to the **Editor** of **Call to action (CTA)** option by clicking the **Pencil Icon**from the left menu.

> Additionally, to learn more details about Lock Screen Customization, read this documentation.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/6.-CTA-Editor-of-Course-scaled.webp)

Finally, provide the desired **Paymattic Form URL** under the **Button Link** field in the left menu through which you want to add members to this course and collect payments from them.

[Paymattic](https://paymattic.com/docs/paymattic-introduction/) is a WordPress plugin that can build forms to collect payment and donation. To learn the process of getting this Paymattic Form URL, click here.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/7.-Button-Link-field-of-Course-scaled.webp)

## Collect Paymattic Form URL to add in Space/Course

You can monetize your Space/Course easily using the Payment Form created through the Paymattic plugin. To learn the whole process, follow the steps below accordingly –

### Integrate Paymattic with FluentCommunity

At first, you need to integrate Paymattic with your FluentCommunity. Integrating [Paymattic](https://paymattic.com/) with [FluentCommunity](https://fluentcommunity.co/) allows you to collect payments and add members to the **Premium** (paid) **Spaces** and **Courses** of FluentCommunity directly through Paymattic Forms.

> To learn the detailed guideline of Integrating Paymattic with FluentCommunity, read this documentation.

### Add Desired Space/Course in Paymattic Form

At this stage, you need to add the desired Space or Course into any Paymattic Form to monetize them.

> But, remember, you need to add the Space/Course into the Payment Form to collect the money. To learn how to create a Payment Form, read this documentation.

For example, I chose an existing payment form to show you the process.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/8.-Open-desired-Payamttic-Form-scaled.webp)

Once you are on the **Editor** page of your desired form, go to the **Integrations** tab, open the **Add New Integration** dropdown list, and select the **FluentCommunity Integration**option.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/9.-Adding-Fluent-Community-Integration--scaled.webp)

Now, a pop-up page will appear with various settings options for configuring FluentCommunity.

**All the settings options mentioned in the screenshot below are briefly explained:**

**A. Name**: Here, you can set a name according to your preference for your feed

**B. Select Spaces or Courses to Enroll**: Here, you can select your desired or all Space/s and Course/s to set where your users will add as members/students immediately after form submission. For example, I selected a Space (Developer Space) and a Course (Advanced Course on Programming).

**C. Email Address**: In this field, you need to select the **Email Address**.

**D. Full Name (Only for new users)**: Here, use the {input.customer_name} shortcode by clicking the **ShortCode Icon**.

**E. Password (Only for new users)**: Here, you can set a fixed password for every new user. Or, you can keep it empty to automatically generate a new password for each user.

**F. Allow the user login automatically after Form submission**: Enable this option and your user will be directly logged into your Paymattic User Dashboard after submitting the form.

**G. Send default WordPress welcome email to a user after registration**: Enable this option to send a welcome email notification to your users with login details including a password reset option.

**H. Join/Enroll space/course on payment success only**: Check this option if you want your users to Join/Enroll in a Space/Course only when the payment is successful. If you keep it unchecked, users can get access to the space/course without payment succeed.

I. **Remove from space/course if payment refunded**: Checking this option will allow you to remove users automatically from space/course if payment is refunded.

**J. Remove from space/course if subscription canceled**: Checking this option will allow you to remove users automatically from space/course if they cancel their subscription.

**K. Enable conditional logic**: Enable this toggle if you want to set any conditions on this form submission. To learn the details of the use of this Conditional Logic, read this [Documentation](https://paymattic.com/docs/how-to-use-conditional-logic-in-form-fields-with-paymattic/). Plus, to get access to this feature, you need the [Paymattic Pro Plugin](https://paymattic.com/docs/how-to-install-and-activate-paymattic-in-wordpress/#1-toc-title).

Once you set up the page, click the **Create Fluent Community Feed** button and the feed will be added.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/10-.-Create-New-FluentCommunity-Integration-Feed.webp)

Now you will see that your **FluentCommunity Integration Feed**has been added here.

You can modify your **FluentCommunity Feed** anytime by clicking the**Pencil Icon** and delete it from here by clicking the **Trash Icon**. Also, you can **disable/enable** this feed anytime by clicking the **Toggle** button if needed.

> Additionally, to add Users automatically in WordPress through the Payamttic Form Entries, you can also add the User Registration Integration Feed. To learn the process of adding User Registration Feed, read this documentation.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/11.-Added-FluentCommunity-Integration-Feed-scaled.webp)

### Publish Your Paymattic Form

You can display the Paymattic Form where you add the FluentCommunity Space/Course on the front-end using its shortcode.

To display your Payment Form on the front end of your desired WordPress Site, **copy** the **Shortcode** of your desired Form.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/12.-Copy-Shortcode-scaled.webp)

Then, **paste the shortcode** to the desired**Page/Post**where you want to display your Payment Form.

Plus, use this “**[wppayform_dashboard]”** shortcode to add the **Paymattic User Dashboard** to your form. This will allow the users who access the FluentCommunity **Spaces/Courses** through Paymattic Form to see a dedicated section called “**Spaces & Courses**” in their user dashboard.

> To learn the detailed guideline about Paymattic User Dashboard with FluentCommunity, read this.

Once you are done, click the **Publish** button (or **Save** button to update existing Post/Page).

![](https://fluentcommunity.co/wp-content/uploads/2025/03/13.-Publish-Paymattic-Form-scaled.webp)

Finally, here is your desired **Paymattic Form URL**. Now, copy it.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/14.-Copy-Form-URL-scaled.webp)

#### Link the Form URL to the Space/Course Lock Screen

Now, go back to your Lock Screen’s CTA button of pace or Course and paste the form URL into the**Button Link** field.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/15.-Button-Link-of-Space-scaled.webp)

![](https://fluentcommunity.co/wp-content/uploads/2025/03/16.-Button-Link-of-Course-scaled.webp)

### Paymattic Form & User Dashboard Preview

Here, you can see the Preview of your Form where you integrated the FluentCommunity Space and Course.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/17.-Form-Preview.webp)

Once the user fills out the form and clicks the **submit** button, they will see this **Paymattic User Dashboard** with a dedicated section for **Spaces & Courses**.

This section provides an overview of their community activities, such as the spaces they have joined and the courses they are enrolled in.

![](https://fluentcommunity.co/wp-content/uploads/2025/03/18.-Dashboard-preview.webp)

## Start Selling Your Space/Course

With these settings, your Space/Course is ready to be sold. When users visit the Space/Course, they’ll see the Lock Screen with the CTA button directing them to the payment form. Upon completion, you can grant them access to the space/course.

This setup enables seamless space/course monetization within your FluentCommunity platform. If you have any further questions about this guide, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/).

---

## Monetizing Your Spaces

**Source:** [https://fluentcommunity.co/docs/monetizing-your-spaces/](https://fluentcommunity.co/docs/monetizing-your-spaces/)

In FluentCommunity, you can create, share, and even monetize spaces. This guide will walk you through the process of monetizing your spaces within FluentCommunity.

## Set Up Your Space in FluentCommunity

**Create or Edit a Space**

****Start by creating a new Space in FluentCommunity or using an existing one. For a detailed guide on Space creation, check out this [documentation](https://fluentcommunity.co/docs/how-to-create-a-space/) here.

**Set Space Privacy to Private**

****Navigate to the space you wish to monetize, then click on the three-dot button in the top right corner and select the **Space Settings** option.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Space-1-scaled.webp)

Now set the Space privacy to **Private**and select **Custom Lock Screen**. The **Custom Lock Screen**will only be visible when the privacy setting is set to **Private**. After setting the Space to private, click on the **Lock Screen** option at the top menu.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Space-2-scaled.webp)

**Enable Lock Screen**

****Here, you can customize a Lock Screen with a **Call to Action (CTA)**button. Refer to this Lock Screen [documentation](https://fluentcommunity.co/docs/managing-privacy-of-spaces/#4-toc-title) for design tips.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Space-3-scaled.webp)

#### Add a Payment Option Using Fluent Forms

> You will need Fluent Forms Pro to complete these steps.

**Create a Payment Form**

In Fluent Forms, create a new payment form by adding essential fields and a [Payment Field](https://wpmanageninja.com/docs/fluent-form/field-types/payment-field-in-wp-fluent-forms/)for the Space price. Save the form once completed.

**FluentCommunity Integration** Feed

> To access the FluentCommunity Integration Feed in your forms, you must activate the FluentCommunity module in Fluent Forms.

Now go to the **Settings & Integration** option of the form then choose **Configure Integration** from the left sidebar. Click on the **Add New Integration** button and select the **FluentCommunity Integration Feed** option.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/FFIntegration-1-scaled.webp)

Here configure your **FluentCommunity Integration Feed** by mapping your necessary fields.

- **Name**: Provide a name for your FluentCommunity Integration Feed to easily identify it later.
- **Select Space or Course** **to Enroll:** Use the dropdown to select the **Space** where members will be added. Also, both **Secret Spaces** and **Secret Courses** will appear in the list for selection.

**Map Fields**

- **Email Address**: Select the email field from the dropdown to map users’ email addresses.

**For New Users Outside WordPress**

- **Full Name**: Map the name field for new users. You can also use shortcodes for mapping.
- **Password**: Link the password field from the form to allow users to set a login password for your community. can also use shortcodes for mapping password.

**Additional Options**

- **Allow the user to login automatically after form submission**: Check this box to allow users to log in automatically after form submission.
- **Send Welcome Emails**: Check this box to send WordPress’s default welcome email to new users after registration.

**Conditional Logic:** You can apply conditional logic to this feed for more efficient and targeted integration.

Click the **Save Feed** button to save your configuration.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Add-New-Fluent-Community-Integration-Feed-Fluent-Forms-12-03-2024_06_31_PM-scaled.webp)

#### Publish your Monetization Form

> You can display this form on the front-end using either its shortcode or the landing page URL. In this guide, we’ll use the landing page option to share the form.

You can now set up a Landing Page for your form in Fluent Forms. Head over to the **Settings & Integration** section of the form and select **Landing Page** from the left sidebar. Enable the landing page by checking the **Enable Form Landing Page Mode** option.

Click on the **Save** button and **Share** to get the landing page URL. Publish your form, and copy its URL. For more details on customizing your Landing Page, refer to this [documentation](https://wpmanageninja.com/docs/fluent-form/advanced-features-functionalities-in-wp-fluent-form/dedicated-landing-page-fluent-forms/).

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Form-5-scaled.webp)

> You can also create a WooCommerce product and use its payment method to monetize your space. Then, run a FluentCRM automation funnel to automatically add members to the space after payment.

#### Link the Payment Form to the Lock Screen

****Now, go back to your Lock Screen’s CTA button and paste the form URL into the **Button Link** field.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Space-4-scaled.webp)

#### Start Selling Your Space

With these settings, your Space is ready to be sold. When users visit the Space, they’ll see the Lock Screen with the CTA button directing them to the payment form. Upon completion, you can grant them access to the space.

This setup enables seamless space monetization within your FluentCommunity platform. If you have any further questions about this guide, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/).

---

## Monetizing Your Courses

**Source:** [https://fluentcommunity.co/docs/monetizing-your-courses/](https://fluentcommunity.co/docs/monetizing-your-courses/)

In FluentCommunity, you can create, share, and even monetize courses. This guide will walk you through the process of monetizing your courses within FluentCommunity.

## Set Up Your Course in FluentCommunity

**Create or Edit a Course**Start by creating a new course in FluentCommunity or using an existing one. For a detailed guide on course creation, check out this [documentation](https://fluentcommunity.co/docs/creating-and-managing-course/) here.

**Set Course Privacy to Private**Navigate to the course you wish to monetize, go to the **Edit** option, and set the course’s privacy to **Private**. The **Custom Lock Screen**will only be visible when the privacy setting is set to **Private**. After setting the course to private, click on the **Lock Screen** option at the top menu.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Lock-Screen--scaled.webp)

**Enable Lock Screen**Here, you can customize a Lock Screen with a **Call to Action (CTA)**button. Refer to this [documentation](https://fluentcommunity.co/docs/course-privacy/#3-toc-title) for design tips.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Lock-Screen-Settings--scaled.webp)

#### Add a Payment Option Using Fluent Forms

> You will need Fluent Forms Pro to complete these steps.

**Create a Payment Form**

****In Fluent Forms, create a new payment form by adding essential fields and a **Payment Field** for the course price. Save the form once completed.

**FluentCommunity Integration** Feed

> To access the FluentCommunity Integration Feed in your forms, you must activate the FluentCommunity module in Fluent Forms.

Now go to the **Settings & Integration** option of the form then choose **Configure Integration** from the left sidebar. Click on the **Add New Integration** button and select the **FluentCommunity Integration Feed** option.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/FFIntegration-1-scaled.webp)

Here configure your **FluentCommunity Integration Feed** by mapping your necessary fields.

- **Name**: Provide a name for your FluentCommunity Integration Feed to easily identify it later.
- **Select Space or Course** **to Enroll:** Use the dropdown to select the **Course** where members will be added. Also, both **Secret Spaces** and **Secret Courses** will appear in the list for selection.

**Map Fields**

- **Email Address**: Select the email field from the dropdown to map users’ email addresses.

**For New Users Outside WordPress**

- **Full Name**: Map the name field for new users. You can also use shortcodes for mapping.
- **Password**: Link the password field from the form to allow users to set a login password for your community. can also use shortcodes for mapping password.

**Additional Options**

- **Allow the user to login automatically after form submission**: Check this box to allow users to log in automatically after form submission.
- **Send Welcome Emails**: Check this box to send WordPress’s default welcome email to new users after registration.

**Conditional Logic:**You can apply conditional logic to this feed for more efficient and targeted integration.

Click the **Save Feed** button to save your configuration.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Add-New-Fluent-Community-Integration-Feed-Fluent-Forms-12-03-2024_07_45_PM-scaled.webp)

#### Publish your Monetization Form

> You can display this form on the front-end using either its shortcode or the landing page URL. In this guide, we’ll use the landing page option to share the form.

You can now set up a Landing Page for your form in Fluent Forms. Head over to the **Settings & Integration** section of the form and select **Landing Page** from the left sidebar. Enable the landing page by checking the **Enable Form Landing Page Mode** option.

Click on the **Save** button and **Share** to get the landing page URL. Publish your form, and copy its URL. For more details on customizing your Landing Page, refer to this [documentation](https://wpmanageninja.com/docs/fluent-form/advanced-features-functionalities-in-wp-fluent-form/dedicated-landing-page-fluent-forms/).

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Form-5-scaled.webp)

> You can also create a WooCommerce product and use its payment method to monetize your Course. Then, run a FluentCRM automation funnel to automatically add Students to the Course after payment.

#### Link the Payment Form to the Lock Screen

****Now, go back to your Lock Screen’s CTA button and paste the form URL into the **Button Link** field.

![](https://fluentcommunity.co/wp-content/uploads/2024/11/Zoro-11-14-2024_04_58_PM-scaled.webp)

#### Start Selling Your Course

With these settings, your course is ready to be sold. When users visit the course, they’ll see the Lock Screen with the CTA button directing them to the payment form. Upon completion, you can grant them access to the course.

If you have any further questions about this guide, please don’t hesitate to[contact us](https://wpmanageninja.com/support-tickets/).

---

