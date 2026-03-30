# Shortcode

*Category from Fluent Forms documentation*

---

## Using Helper Shortcodes in Fluent Forms

**Source:** [https://fluentforms.com/docs/using-helper-shortcodes-in-fluent-forms/](https://fluentforms.com/docs/using-helper-shortcodes-in-fluent-forms/)

Fluent Forms offers powerful helper shortcodes that enable you to display dynamic form data, including submission counts, entry details, and payment statuses, anywhere on your website. The helper shortcodes and all of their attributes are listed below.

This guide will walk you through the available shortcodes and their attributes.

[https://gist.github.com/reachkamrul/5737af6ed143fa06a7294a1d7e95f9bb](https://gist.github.com/reachkamrul/5737af6ed143fa06a7294a1d7e95f9bb)

## Form Info

This shortcode is used to display information about a form, including submission counts and creation dates. It always requires the form ID.

### Displaying General Form Info

Use the info attribute to display general information about the form. The available options are **submission_count, created_at, updated_at, and payment_total.**

```
[fluentform_info id="9" info="submission_count"]
```

- **Total Submissions:** Use the info=”**submission_count**” attribute to show the total number of times the form has been submitted. It will show total submission at the bottom of the form.

![](https://fluentforms.com/wp-content/uploads/2025/08/Submission-info.webp)

- **Creation Date:** Use the info=”created_at” attribute to show the date the form was created. It will show the creation date below the form.

```
[fluentform_info id="9" info="created_at"]
```

![](https://fluentforms.com/wp-content/uploads/2025/08/creation-date.webp)

- **Last Updated Date:** Use the info=”**updated_at**” attribute to show the date the form was last modified.
- **Total Payments:** For payment forms, use the info=”**payment_total**” attribute to show the total amount received.

### Custom Date Formatting

You can format the created_at and updated_at dates by adding the date_format attribute. This uses standard [date formatting](https://www.php.net/manual/en/function.date.php). For example, to show the date as “Friday 17 April 2025, 10 AM”, the shortcode would be:

```
[fluentform_info id="9" date_format="l d F Y g A" info="created_at"]
```

### Submission & Field Specific Shortcode

If you want to show a specific form submission’s specific entry using a shortcode, you can now add that manually in the FluentForms shortcode.

```
[ff_entry form_id='1' entry_id='{submission.id}' field='url' is_html=false]
```

### Submissions Based On Entry Status

You can filter the submission count based on its status (read or unread).

- Show All Entries (Default): **0**
- Show Read Entries: **0**
- Show Unread Entries: **0**

![](https://fluentforms.com/wp-content/uploads/2025/08/Entry-Status-scaled.webp)

### Trashed Entries

You can specify whether to include or exclude entries that are in the trash.

- Exclude Trashed Entries (Default): **0**
- Include Trashed Entries: **0**

### Show Remaining Submission Slots (Subtract From)

If you have set a maximum entry limit in the form settings, you can display how many submission slots are still available.

Use the **subtract_from** attribute with your maximum limit. For example, if you set a limit of 20 entries:

```
[fluentform_info id="9" info="submission_count" substract_from="20"]
```

![](https://fluentforms.com/wp-content/uploads/2025/08/Maximum-number-of-entries-scaled.webp)

If 5 entries have been submitted, this will display “15”.

You can also make the count disappear when it reaches zero by adding the **hide_on_zero=”yes”** attribute. The final shortcode would be:

```
[fluentform_info id="9" info="submission_count" substract_from="20" hide_on_zero="yes"]
```

![](https://fluentforms.com/wp-content/uploads/2025/08/all-entries.webp)

### Show Total Entries Based on Payment Status

For payment forms, you can filter the entries shown based on their payment status. The available statuses are paid, pending, failed, refunded, partially-refunded, and processed.

- Show All (Default):**0**
- Show Only Paid:**0**
- Show Only Pending: **0**
- Show Only Failed: **0**

To show the total payment amount with a formatted currency symbol (e.g., $10.00), add the **currency_formatted=”yes”** attribute.

![](https://fluentforms.com/wp-content/uploads/2025/08/Payment-Status-scaled.webp)

### Other Shortcodes

#### Display a Specific Field from an Entry

To show a specific value from a single form submission, use the ****shortcode.

```
[ff_entry form_id='1' entry_id='{submission.id}' field='url']
```

#### Display GET Parameter Value

If you pass data in a URL (e.g., your-site.com/page?my_param=hello), you can display that value on the page using the****shortcode.

```
[ff_get param="my_param"]
```

This would display “hello”.

So, this is the all-in-one helper shortcode of FluentForms. If you have any questions, then contact our [support](https://wpmanageninja.com/account/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/) team.

---

## Fluent Forms Shortcodes Overview

**Source:** [https://fluentforms.com/docs/fluent-forms-shortcodes-overview/](https://fluentforms.com/docs/fluent-forms-shortcodes-overview/)

Fluent Forms shortcodes allow you to add different types of form displays on your WordPress site. They help make your website dynamic and user-friendly.

Here are the types of Fluent Forms shortcodes:

In this article, below are explanations of what type of shortcode and their use case purpose.

### Smart Shortcode

This shortcode collects data from your website, user profiles, post details, and FluentCRM contacts. Want to learn more? Read the full [article](https://fluentforms.com/?post_type=docs&p=50118).

### Confirmation Settings Shortcode

Displays submitted data dynamically on your website. You can use it for confirmation pages, emails, PDFs, quizzes, form submission details, post details, and payment reports. Check out the [article](https://fluentforms.com/docs/shortcodes-in-confirmation-settings/) for more details.

### Helper Shortcode

This shortcode helps you collect and filter data, count submissions, check payment statuses, and display URL parameters after form submissions. Learn more in the [article](https://fluentforms.com/docs/using-helper-shortcodes-in-fluent-forms/).

### Conditional Shortcode

Used in form confirmations, email notifications, and PDFs to show or hide content based on user selections. These shortcodes work using fields, values, and conditions. Read this [article](https://fluentforms.com/docs/conditional-shortcodes-in-fluent-forms/) for a deeper understanding.

Explore the powerful and easy-to-use shortcode features in Fluent Forms.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Pre-Fill Form Fields with FluentCRM Data

**Source:** [https://fluentforms.com/docs/pre-fill-form-fields-with-fluentcrm-data/](https://fluentforms.com/docs/pre-fill-form-fields-with-fluentcrm-data/)

Fluent Forms allows you to pre-fill form fields using subscriber data from [FluentCRM](https://fluentcrm.com/). This feature is useful for personalizing form experiences and improving user engagement.

This guide will walk you through the steps to automatically populate form fields with FluentCRM contact data.

> Only logged in users will get pre-populate form fields with FluentCRM data.

## Enable the FluentCRM Module

Before using this feature, ensure that FluentCRM is installed and activated on your website. Follow these steps to enable the FluentCRM integration module-

First, go to **Integrations** from the Fluent Forms Navbar, search for **FluentCRM**through the search bar, and get the **FluentCRM integration module**.

Now, turn on the **Toggle** to enable the **FluentCRM**module.

![](https://fluentforms.com/wp-content/uploads/2025/02/enable-FluentCRM-module-01-scaled.webp)

## Using FluentCRM Data Smartcode

To pre-fill the FluentCRM data in your form fields, follow the steps given below-

First, go to****the**Forms**section from the **Fluent Forms Navbar,**choose****a****desired**Form,**and click the **Edit** icon to open the **Editor** page of that form.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/02/form-editor-02-scaled.webp)

Once you are on the **Editor** page, click the **Plus** **Icon** in your form editor and choose the desired **Field**by clicking on it or **Dragging & Drop**ping it into your editor.

![](https://fluentforms.com/wp-content/uploads/2025/02/add-field-03-scaled.webp)

Now, hover over the newly added field and click the **Pencil Icon**. Navigate to the **Input Customization**tab on the right sidebar. Scroll to **Advanced Options** and find the **Default Value** drop-down. In some**Input Fields**, you will find this **Default Value**option as**Dynamic Default**.

In the **Default Value** field, add FluentCRM shortcodes to automatically fetch and populate data from FluentCRM contact information into the form fields.

![](https://fluentforms.com/wp-content/uploads/2025/02/access-default-value-04-scaled.webp)

Click the **Three-dot Icon**, then scroll down to locate **FluentCRM Data**. Then, click on the smartcode, and it will be automatically generated in your field.

![](https://fluentforms.com/wp-content/uploads/2025/02/FluentCRM-Data-smartcode-05-scaled.webp)

## Insert FluentCRM Data into Fields

To get pre-filled data from **FluentCRM**, you need to use the shortcode with a small modification. **Fluent Forms** will automatically prefill with the **FluentCRM Contact** data available on your website. But remember, you will only get the pre-filled data **if you are logged in** and your **FluentCRM contact profile contains the data**.

For example, if you want to fetch the **email** from your **FluentCRM Contact’s profile** into the **Fluent Forms Email field**, first, add the shortcode **{fluentcrm.data}** in the **shortcode section** of the field. Now, modify the shortcode by adding the field name like this: {**fluentcrm.email}**.

Once done, the **email field** will be pre-filled with data from FluentCRM. You can check out more **FluentCRM shortcodes** in this [article](https://fluentforms.com/docs/form-editor-smart-codes/).

If you want to pre-fill **Custom Fields** data from FluentCRM, first add the **desired field** to your form. Then, use the shortcode **{fluentcrm.data}** and modify it with the specific **Custom Field slug**. To learn how to find the **Custom Field slug**, check out this [documentation](https://fluentcrm.com/docs/global-custom-contact-fields/).

![](https://fluentforms.com/wp-content/uploads/2025/02/email-field-06-scaled.webp)

### Embed the Form into the Front

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design**button****in the middle to see the form preview.

After that, copy the **Shortcode** from the top-right corner. **Paste** it into the **page** or **post** where you want the form to appear.

![](https://fluentforms.com/wp-content/uploads/2025/02/save-form-07-2-scaled.webp)

### Pre-populated FluentCRM Data Field Preview

After embedding, you can preview the form with the pre-populated FluentCRM data fields. Here you will see the fields are automatically filled with **FluentCRM Data**.

![](https://fluentforms.com/wp-content/uploads/2025/02/preview-08-2.webp)

## FluentCRM Contact Data

To verify pre-populated data, go to the **FluentCRM** contacts. Locate the contact with the custom profile data. Now, match the field **slug** with the **FluentCRM** smartcode used in the form. If you want to learn the custom profile data read this [article](https://fluentcrm.com/docs/global-custom-contact-fields/#:~:text=When%20you%20need%20additional%20fields,as%20in%20the%20below%20screenshot.).

![](https://fluentforms.com/wp-content/uploads/2025/02/custom-fluentcrm-data-09-scaled.webp)

So, this feature helps your user auto-fille your users details and helps to not re enter the data again and again.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Shortcodes in Confirmation Settings

**Source:** [https://fluentforms.com/docs/shortcodes-in-confirmation-settings/](https://fluentforms.com/docs/shortcodes-in-confirmation-settings/)

Fluent Forms provides **Smart Shortcodes** that allow users to dynamically display submitted data on the Confirmation Page, emails, PDFs, Custom posts, and **Quiz** submissions.

This article explains each available shortcode and how it functions within Fluent Forms.

So, let’s get started.

## Input Options

These shortcodes can be used in **email notifications, confirmation messages, PDFs,**and**custom post submissions**.

| ShortCode | Description |
| --- | --- |
| {inputs.names} | Displays the full name field. |
| {inputs.names.first_name} | Retrieves the first name from the name field. |
| {inputs.names.last_name} | Retrieves the last name from the name field. |
| {inputs.email} | Displays the email address entered by the user. |
| {inputs.description} | Shows the message input field (a textarea where users enter text). |
| {inputs.payment_input} | Shows the payment item selected or entered in the form. |
| {inputs.payment_method} | Displays the payment method selected by the user. |
| {form_title} | Shows the title of the form. |
| {all_data} | Displays all submitted data from the form |
| {all_data_without_hidden_fields} | Displays all submitted data but excludes hidden fields. |

## Label Options

Label Shortcodes dynamically display the **field names** from the form, making them useful for **emails, PDFs,**and**automated messages**.

| ShortCode | Description |
| --- | --- |
| {labels.names} | Shows the label for the Name field. |
| {labels.names.first_name} | Displays the label for the First Name field. |
| {labels.names.last_name} | Displays the label for the Last Name field. |
| {labels.email} | Shows the label for the Email field. |
| {labels.description} | Displays the label for the Your Message field. |
| {labels.payment_input} | Shows the label for the Payment Item field. |
| {labels.payment_method} | Display the label of the Payment Method |

## General SmartCodes

These shortcodes dynamically display **WordPress-related**and**user-specific**details.

| ShortCode | Descriptions |
| --- | --- |
| {wp.admin_email} | Displays the email address of the site administrator from WordPress settings. |
| {wp.site_url} | Retrieves the URL of the website. |
| {wp.site_title} | Displays the site title. |
| {ip} | Displays the user’s IP address. |
| {date.m/d/Y} | Displays the current date in the format MM/DD/YYYY ( 04/25/1991). |
| {date.d/m/Y} | Displays the current date in the format DD/MM/YYYY ( 25/04/2020). |
| embed_post.ID} | Displays the ID of the post/page where the form was submitted. |
| {embed_post.post_title} | Displays the title of the post/page where the form was submitted. |
| {embed_post.permalink} | Displays the URL of the post/page where the form was submitted. |
| {http_referer} | Retrieves the HTTP referrer URL. |
| {user.ID} | Displays the ID of the logged-in user. |
| {user.display_name} | Displays the display name of the logged-in user. |
| {user.first_name} | Displays the first name of the logged-in user. |
| {user.last_name} | Displays the last name of the logged-in user. |
| {user.user_email} | Displays the email address of the logged-in user. |
| {user.user_login} | Displays the username of the logged-in user. |
| {browser.name} | Displays the browser name of the logged-in user. |
| {browser.platform} | Displays the operating system of the logged-in user. |
| {random_string.your_prefix} | Generates a random string (prefix can be customized). Useful for unique identifiers. |

## Entry Attributes

These shortcodes display **form submission details** dynamically. These include-

| ShortCode | Description |
| --- | --- |
| {submission.id} | Displays the unique ID assigned to each form submission. |
| {submission.serial_number} | Shows a serial number for submissions. |
| {submission.source_url} | Captures the URL where the form was submitted. |
| {submission.user_id} | Displays the WordPress user ID of the logged-in user who submitted the form. |
| {submission.browser} | Shows the browser used by the submitter. |
| {submission.device} | Identifies whether the form was submitted from a desktop, mobile, or tablet. |
| {submission.status} | Displays the current status of the form entry (Pending, Approved, Rejected). |
| {submission.created_at} | Shows the date and time when the form was submitted. |
| {submission.admin_view_url} | Provides a direct link to view the submission in the admin panel. |
| {submission.currency} | Displays the currency used in payment forms. |
| {submission.payment_method} | Shows the payment method used ( PayPal, Stripe, Credit Card). |
| {submission.payment_status} | Indicates whether the payment was successful, pending, or failed. |
| {submission.total_paid} | Show the Total Paid amount. |
| {submission.payment_total} | Displays the Total Amount. |

## Payment Details

These shortcodes display **transaction details** dynamically in emails, confirmation messages, PDFs, and reports.

| ShortCode | Description |
| --- | --- |
| {payment.receipt} | Generates a payment receipt for the transaction. |
| {payment.summary} | Displays a summary of the transaction, including key details. |
| {payment.order_items} | Shows a table of purchased items in an order. |
| {payment.payment_status} | Specify whether the payment was successful, pending, or failed. |
| {payment.payment_total} | Displays the total amount paid for the order. |
| {payment.payment_method} | Shows the payment method used (PayPal, Stripe, Credit Card) |

## PDF

| ShortCode | Description |
| --- | --- |
| {pdf.download_link} | Generates a downloadable PDF link for users. Admins can restrict access or share encrypted URLs. |

## Post

These shortcodes display **post-related information** dynamically.

| ShortCode | Description |
| --- | --- |
| {post.ID} | Displays the unique ID of the post |
| {post.post_title} | Displays the title of the post where the form is submitted. |
| {post.post_permalink} | Generates the URL of the post where the form is submitted. |

## Quiz

| ShortCode | Description |
| --- | --- |
| {quiz_result} | Display the results of the Quiz. |

## Submission & Field Specific Shortcode

If you want to show a specific form submission’s specific entry using a shortcode, now you can add that manually in the Fluent Forms shortcode.

```
[ff_entry form_id='1' entry_id='{submission.id}' field='url' is_html=false]
```

Smart Shortcodes in Fluent Forms allow you to display **dynamic content** based on user inputs, payments, and WordPress-related data. If you need **customized confirmation pages, automated email notifications,**or**PDF reports**, these shortcodes make it easy to use your forms.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Form Editor Smart Codes

**Source:** [https://fluentforms.com/docs/form-editor-smart-codes/](https://fluentforms.com/docs/form-editor-smart-codes/)

Fluent Forms offers various **dynamic smart codes** that can be used in the form builder to set **default input values**. These codes pull information from your **website, user profile, post details,**and**FluentCRM contacts**.

This article explains each available shortcode and how they function within Fluent Forms.

So, Let’s get started.

### General Smart Codes

These codes fetch **basic website and user details**.

| ShortCode | Description |
| --- | --- |
| {get.input_text} | Shows the text. |
| {wp.admin_email} | Shows the site admin’s email. |
| {wp.site_url} | Displays the website link. |
| {wp.site_title} | Shows the website name. |
| {ip} | Displays the user’s IP address. |
| {date.m/d/Y} | Shows the date ( 02/25/2025). |
| {date.d/m/Y} | Displays the date (23/02/2025) |
| {user.ID} | Displays the logged-in user’s ID. |
| {http_referer} | Shows the page the user visited before this one. |
| {user.display_name} | Shows the user’s display name. |
| {user.first_name} | Displays the user’s first name. |
| {user.last_name} | Shows the user’s last name. |
| {user.user_email} | Displays the user’s email. |
| {user.user_login} | Shows the user’s username. |
| {browser.name} | Displays the user’s web browser (example: Chrome) |
| {random_string.your_prefix} | Creates a random string with your chosen prefix. |
| {cookie.cookie_name} | Shows the cookies |

### EmbeddedPost Smart Codes

These codes pull details about the**page/post** where the form is placed.

| ShortCode | Description |
| --- | --- |
| {embed_post.ID} | Shows the Post/Page ID. |
| {embed_post.post_title} | Displays the Post/Page title. |
| {embed_post.permalink} | Shows the URL of the Post/Page. |

### FluentCRM Shortcode

These codes work if you use **FluentCRM** and want to **auto-fill contact details**.

| SmartCode | Description |
| --- | --- |
| {user.meta.META_KEY} | Gets extra user info using a special meta key. |
| {wp.admin_email} | Shows the site admin’s email |
| {wp.site_url} | Displays the website link. |
| {wp.site_title} | Shows the website name. |
| {ip} | Displays the user’s IP address. |
| {date.m/d/Y} | Shows the date (04/25/2024) |
| {http_referer} | Shows the page the user visited before this one. |
| {user.ID} | Displays the logged-in user’s ID. |
| {user.display_name} | Shows the user’s display name. |
| {user.first_name} | Fetches the user’s first name. |
| {user.last_name} | Fetches the user’s last name. |
| {user.user_email} | Displays the user’s email. |
| {user.user_login} | Shows the user’s username. |
| {browser.name} | Displays the user’s web browser ( Chrome). |
| {browser.platform} | Shows the user’s device type (Windows, Mac). |
| {random_string.your_prefix} | Creates a random string with your chosen prefix. |
| {get.YOUR_GET_PARAM} | Fetches data from the web address (URL). |

So, this is all the smartCode in Fluent Form. If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Conditional Shortcodes in Fluent Forms

**Source:** [https://fluentforms.com/docs/conditional-shortcodes-in-fluent-forms/](https://fluentforms.com/docs/conditional-shortcodes-in-fluent-forms/)

Fluent Forms allows you to show or hide content dynamically based on user selections using **conditional shortcodes**. These shortcodes can be applied in **Form Confirmations, Email Notifications, and PDF Documents**, making your forms more interactive and personalized.

This article explains each available conditional shortcode and how they function within Fluent Forms.

> You need the Fluent Forms Pro version to use conditional shortcodes.

## How to use Conditional Shortcode

If you want to show a message based on user input, you can use a simple shortcode like this:

```
[ff_if]

    Whatever you want to show if the conditions matched.

[/ff_if]
```

![](https://fluentforms.com/wp-content/uploads/2025/02/Conditional-shortcode-01-scaled.webp)

There are three key parameters when using conditional shortcodes-

- Field
- Condition
- Value

#### Field

The **field** parameter is required to define which form input should be checked. You need to grab the field name and include it in the shortcode like this:

```
[ff_if field="input_radio"]

    Whatever you want to show if the conditions matched.

[/ff_if]
```

For example,  you have a radio button field and want to show a message only when the user selects **“Yes”**, you can write-

```
[ff_if field="input_radio" is="equal" to="yes"]
    Glad to hear that you loved our product!
[/ff_if]
```

If the user selects **“No”**, a different message will appear:

```
[ff_if field="input_radio" is="equal" to="no"]
    Thanks for using our product. We are working on improvement.
[/ff_if]
```

#### Conditions

The second parameter is Condition. You can set different types of conditions such as-

| Condition | Description |
| --- | --- |
| equal | Matches exactly |
| not_equal | Does not match |
| greater_than | Checks if the value is more than given number |
| less_than | Checks if the value is less than given number |
| greater_or_equal | Checks if the value is more than or equal to given number |
| less_or_equal | Checks if the value is less than or equal to given numbe |
| starts_with | Checks if text starts with a certain word |
| ends_with | Checks if text ends with a certain word |
| contains | Checks if text includes a word or phrase |
| not_contains | Checks if text does NOT include a word |

You need to use **is=**”**Your Condition Here**”, let’s take the first one as an example; at this stage, our shortcodes will be:

```
[ff_if field="input_radio" is="equal"]

    Whatever you want to show if the conditions matched.

[/ff_if]
```

#### Value

The value parameter defines what the field should be compared against. Add it using to=”Your Value Here”.

The value needs to be added like this**to=”Your Value Here”.**

Suppose our radio field has two values, which is ‘**ABC**’ and ‘**XYZ**’. Suppose I want to take the value if the user has selected ‘**ABC**’, we have to write the shortcode value in small letters so the final shortcode will be-

```
[ff_if field="input_radio" is="equal" to="abc"]

    Whatever you want to show if the conditions matched.

[/ff_if]
```

![](https://fluentforms.com/wp-content/uploads/2025/02/show-value-02.webp)

You can use as many conditions as you want. For example, if you want to show different messages based on user feedback:

```
[ff_if field="feedback" is="equal" to="great"]
    Thank you for your positive feedback! 
[/ff_if]
```

```
[ff_if field="feedback" is="equal" to="okay"]
    Thanks for your response! Let us know how we can improve.
[/ff_if]
```

```
[ff_if field="feedback" is="equal" to="bad"]
    We're sorry to hear that. We'll work to improve! 
[/ff_if]
```

### Nested Condition

Sometimes, you may want to **check two conditions** at the same time. You can do this using **nested shortcodes**.

You need to use the other 3 parameters (**field**, **is**, **to**) as mentioned earlier.

An example of a nested conditional shortcode is below –

Suppose, in addition to our earlier logic, if the user selected ‘**yes**’, and if he/she gave us a review **greater than 2**, we want to show a text to that user.

So after using the field name field**=”ratings”**, conditions is=”**greater_than**” and value to=”**2**″ to our nested conditional shortcode, the final shortcode will be –

```
[ff_if]

    You can also show something if the first conditions matched.

    [ff_sub_if]

        Whatever you want to show if both conditions match.

    [/ff_sub_if]

[/ff_if]
```

```
[ff_if field="input_radio" is="equal" to="yes"]

    Glad to hear that you loved our product.

    [ff_sub_if field="ratings" is="greater_than" to="2"]

        Also, we want to Thank You for your valuable Ratings.
 
    [/ff_sub_if]

[/ff_if]

[ff_if field="input_radio" is="equal" to="no"]

    Thanks for using our product. We are working on improvement.

[/ff_if]
```

That’s all about **Conditional Shortcodes in Fluent Forms**! These shortcodes help you personalize messages and make your forms more interactive.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

