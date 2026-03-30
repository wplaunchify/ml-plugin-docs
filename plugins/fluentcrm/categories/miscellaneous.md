# Miscellaneous

*Category from FluentCRM documentation*

---

## Auto-Fill Fluent Forms Fields with FluentCRM Data

**Source:** [https://fluentcrm.com/docs/auto-fill-fluent-forms-fields-with-fluentcrm-data/](https://fluentcrm.com/docs/auto-fill-fluent-forms-fields-with-fluentcrm-data/)

You can pre-fill FluentCRM contact data into Fluent Forms fields with a few simple steps. This feature enhances user experience by saving time and providing a seamless, personalized touch as their information is automatically populated.

This guide will walk you through the steps to automatically populate form fields with FluentCRM contact data.

> Only logged-in users will see the pre-filled form fields with FluentCRM data when submitting the form.

## Enable the FluentCRM Module

Before using this feature, make sure FluentCRM and Fluent Forms are installed and activated on your website. Follow these steps to enable the FluentCRM integration:

First, go to **Integrations** from the Fluent Forms Navbar, search for **FluentCRM**through the search bar, and get the **FluentCRM integration module**.

Now, turn on the **Toggle** to enable the **FluentCRM**module.

![enable fluentcrm module 01](https://fluentcrm.com/wp-content/uploads/2025/02/enable-FluentCRM-module-01-scaled.webp)

## Using FluentCRM Smartcode

To auto-fill form fields with FluentCRM data, follow these steps-

First, go to****the**Forms**section from the **Fluent Forms Navbar,**choose****a****desired**Form,**and click the **Edit** icon to open the **Editor** page of that form.

If you do not have any existing forms, read [Create a Form from Scratch](https://fluentforms.com/wp-admin/post.php?post=45036&action=edit) or [Create a Form using Templates](https://fluentforms.com/wp-admin/post.php?post=45127&action=edit) documentation to create a new one.

![form editor 02](https://fluentcrm.com/wp-content/uploads/2025/02/form-editor-02-scaled.webp)

Once you are on the **Editor** page, click the **Plus** **Icon** in your form editor and choose the desired **Field**by clicking on it or **Dragging & Dropping** it into your editor.

![add field 03](https://fluentcrm.com/wp-content/uploads/2025/02/add-field-03-scaled.webp)

Now, hover over the newly added field and click the **Pencil Icon**. Navigate to the Input Customization tab on the right sidebar. Scroll to **Advanced Options** and find the **Default Value** field. In some**Input Fields** you will find this **Default Value**option as**Dynamic Default**.

In the **Default Value** field, add FluentCRM shortcodes to automatically fetch and populate data from FluentCRM contact information into the form fields.

![access default value 04](https://fluentcrm.com/wp-content/uploads/2025/02/access-default-value-04-scaled.webp)

Click the **Three-dot Icon**, then scroll down to find **FluentCRM Data**. Then click on the smartcode, and it will automatically appear in your field.

![fluentcrm data smartcode 05](https://fluentcrm.com/wp-content/uploads/2025/02/FluentCRM-Data-smartcode-05-scaled.webp)

### Insert FluentCRM Data into Fields

To get pre-filled data from **FluentCRM**, you need to use the smartcode with a small modification. **Fluent Forms** will automatically prefill with the **FluentCRM Contact** data available on your website. But remember, you will only get the pre-filled data **if you are logged in** and your **FluentCRM contact profile contains the data**.

For example, if you want to fetch the **email** from your **FluentCRM Contact’s profile** into the **Fluent Forms Email field**, first, add the smartcode 
```
{fluentcrm.data}
```

 in the field. Now, modify the smartcode by adding the field name like this: 
```
{fluentcrm.email}
```

.

Once done, the **email field** will be pre-filled with data from FluentCRM. You can check out more **FluentCRM smartcodes** in this [article](https://fluentcrm.com/docs/merge-codes-smart-codes-usage/).

If you want to pre-fill **Custom Fields** data from FluentCRM, first add the **desired field** to your form. Then, use the shortcode {fluentcrm.data} and modify it with the specific **Custom Field slug**. To learn more about **Custom Field slug**, check out this [documentation](https://fluentcrm.com/docs/global-custom-contact-fields/).

![email field 06](https://fluentcrm.com/wp-content/uploads/2025/02/email-field-06-scaled.webp)

## Embed the Form on a Page or Post

Once your form is ready, click the **Save Form** button to save your changes. Click **Preview & Design** to check how the form looks.

After that, copy the **Shortcode** from the top-right corner. **Paste** it into the **page** or **post** where you want the form to appear.

![save form 07](https://fluentcrm.com/wp-content/uploads/2025/02/save-form-07-scaled.webp)

## Check the Pre-filled FluentCRM Data

After embedding the form, test it to make sure the fields are auto-filled correctly. Go to **FluentCRM Contacts** in your dashboard. Find the contact with the stored data. Now, you can match the field data with the form.

![preview 08](https://fluentcrm.com/wp-content/uploads/2025/02/preview-08.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Cloudflare or Security Plugin Compatibility

**Source:** [https://fluentcrm.com/docs/cloudflare-or-security-plugin-compatibility/](https://fluentcrm.com/docs/cloudflare-or-security-plugin-compatibility/)

FluentCRM is built on top of WordPress REST API and depends on CRON jobs and REST API endpoints. Please read the docs carefully and implement associate actions if your FluentCRM is not sending emails or getting errors in different FluentCRM actions.

### FluentCRM URL Structures:

**FluentCRM REST API URL Base:** https://your-site.com/wp-json/fluent-crm/v2/

FluentCRM also uses a few internal AJAX calls to run long-process jobs.  These ajax calls are mostly POST requests, and it will always contain **fluentcrm** as a body action value.

**List of Ajax Action Names:**

- fluentcrm-post-campaigns-emails-processing
- fluentcrm_callback_for_background
- fluentcrm-post-campaigns-send-now

FluentCRM also has few frontend-based URLs to process different actions like redirecting Email URLs, and handling Smart URLs.

**Frontend URL Patterns:**

- https://youtsite.com/?fluentcrm=1&route=*****
- https://youriste.com/?ns_url=****&mid=***

You may disable caching for these URL patterns in your cloudflare settings or caching Plugins.

### Recommended Cloudflare Page Rules

You may configure your Cloudflare page rule like the screenshot. If you are using CloudFlare pro plan then you can set the rules individually for each endpoint pattern.

![image 1](https://fluentcrm.com/wp-content/uploads/2022/11/image-1-1024x856.png)

### For Caching Plugins

You may exclude these URL patterns if you use a caching plugin or Security Plugin like WordFence. For WordFence, active the Learning Mode for a week and then you may activate the full protection mode.

---

## FluentCRM Contacts Status

**Source:** [https://fluentcrm.com/docs/fluentcrm-contacts-status/](https://fluentcrm.com/docs/fluentcrm-contacts-status/)

There are **5 types** of **Contact Status** in FluentCRM. The status will be changed automatically based on the audience’s response, also you can change them manually.

**Subscribed:** Someone who has opted in from your lead sources and also confirmed the double opt-in email you sent. This can also be set manually on importing new contacts or individually.

**Pending:** Someone who has interacted with your lead source, but hasn’t opted in to receive your email or note confirmed the subscription yet. This is the default status of an audience coming into FluentCRM. All pending audiences will get a double opt-in email to confirm their subscription unless otherwise defined. This is required by GDPR policy and is very useful to avoid spammers and helps in list hygiene.

**Unsubscribed:** Someone who opted in to receive your email marketing campaign but currently opted out to not receive your communication emails.

**Bounced:** An email is marked as bounced if an email has not been received by the recipient’s mail server and reached the recipient. A bounced email means that your mail has not been delivered. This happens in various incidents like the mailbox quota for the recipient is full, temporary DNS error, Mailserver is unreachable, the email existed before but now is deleted or does not exist anymore, the email actually does not exist, etc.

**Complained:** If a user provides feedback to the email as complaints, spam, phishing, or even to the sender’s network owner these are categorized as Complaint Reports and the most harmful and sensitive for an email marketer or a business. To avoid such situations please use cleaned lists, opt-in confirmations, and other best practices, especially with the contents of the email.

![crm contacts filter by status](https://fluentcrm.com/wp-content/uploads/2022/08/crm_contacts_filter_by_status.png)

---

## Merge Codes / Smart Codes usage

**Source:** [https://fluentcrm.com/docs/merge-codes-smart-codes-usage/](https://fluentcrm.com/docs/merge-codes-smart-codes-usage/)

FluentCRM offers lots of dynamic merge codes for your email subject, the body that you can use to personalize your emails.

### Basic Structure:

Merge codes are structured as {{DataGroup.Property|FallbackValue|Transformer}}

- **DataGroup**: FluentCRM has different types of data group. Examples: contact, contact.custom, wp etc.
- **Property**: Each data groups offer many data values, and you can call that the property. For example: first_name, last_name, email
- **Fallback Value (Optional)**: This is an optional parameter. If the defined property is empty, the fallback value will be returned.
- **Transformer (optional):**Fluent Forms offers utility functions to transform the dynamic return value. For example: {{contact.first_name|Hi|ucfirst}} will make this first letter of the first as uppercase.

### Usage:

Using merge is very easy. From your email composer, just type @ and then type the name or title of the merge code and you can see all of them.

![image](https://fluentcrm.com/wp-content/uploads/2022/05/image-1024x747.png)

You can see all the merge codes by clicking the {{ }} icon in your email composer’s top bar.

![image 1](https://fluentcrm.com/wp-content/uploads/2022/05/image-1-1024x250.png)

This will show a pop-up and you can copy any SmartCode you want and use it in your email body or subject.

![image 2](https://fluentcrm.com/wp-content/uploads/2022/05/image-2-1024x724.png)Merge code Lists

### Contact’s Default Merge Codes

| Code | Description |
| --- | --- |
| {{contact.full_name}} | Full name of the contact |
| {{contact.prefix}} | Name Prefix of the contact |
| {{contact.first_name}} | First Name of the contact |
| {{contact.last_name}} | Last Name of the contact |
| {{contact.email}} | Email address |
| {{contact.id}} | Contact’s unique ID (Numeric) |
| {{contact.user_id}} | Connected User ID of the contact |
| {{contact.address_line_1}} | Address Line 1 |
| {{contact.address_line_2}} | Address Line 2 |
| {{contact.city}} | Address City |
| {{contact.state}} | Address State |
| {{contact.postal_code}} | Address Postal Code |
| {{contact.country}} | Address Country |
| {{contact.phone}} | Phone Number |
| {{contact.status}} | Contact’s Status |
| {{contact.date_of_birth}} | Date of Birth |
| {{contact.custom.CUSTOM_FIELD_SLUG}} | Custom Field value of the contact. Please replace CUSTOM_FIELD_SLUG with your defined slug of the field |

### Other General Codes

| Code | Description |
| --- | --- |
| {{crm.business_name}} | Business Name defined in FluentCRM Settings |
| {{crm.business_address}} | Business Address defined in FluentCRM Settings |
| {{wp.admin_email}} | Email Address defined in WordPress settings |
| {{wp.url}} | Your Website URL |
| {{other.date.+2 days}} | Dynamic Date Field. You can replace +2 days with your own date strings. it will return the date (WP Date Format) when parsing the data. |
| {{other.date_format.Y-m-d}} | Current date field as your own date format. Support Y-m-d date formate. |
| ##crm.unsubscribe_url## | Unsubscribe URL of the contact |
| ##crm.manage_subscription_url## | Manage Subscription page URL of the contact |
| ##web_preview_url## | Web preview Url of an email |
| {{crm.unsubscribe_html|Unsubscribe}} | This will return an unsubscribe link with HTML code and link text will be Unsubscribe. |
| ‘{{crm.manage_subscription_html|Manage Preference}} | Manage Subscription Hyperlink HTML with link text “Manage Preference” |

### WP User Codes

If the contact is also your WordPress user then you can use the following merge codes in your email

| Code | Description |
| --- | --- |
| {{user.ANY_USER_PROPERY}} | example: get any user property from WP_User Class. Example: user_login, user_first_name etc. |
| {{user.meta.USER_META_KEY}} | access meta value of a user |
| {{user.password_reset_direct_link}} | Direct Password Reset link of a user |

### Data Transformers

Using Data Transformers you can transform / Format a dynamic value easily. Here is the list of available transformers

| Transformer | Usage | Description |
| --- | --- | --- |
| trim | {{contact.first_name|There|trim}} | if the contact.first_name returns value and have space at first or after it will trim that. |
| ucfirst | {{contact.first_name|There|ucfirst}} /{{contact.first_name||ucfirst}} | If the contact.first_name returns the first letter lowercase, it will make it uppercase of the first letter |
| strtolower | {{contact.first_name|There|strtolower}} /{{contact.first_name||strtolower}} | It will make the all the letters as lowercase |
| strtoupper | {{contact.first_name|There|strtoupper}} /{{contact.first_name||strtoupper}} | It will make the all the letters as uppercase |
| ucwords | {{contact.full_name|There|ucwords}} /{{contact.full_name||ucwords}} | This will make the first letter of each word uppercase. |
| concat_first | {{contact.first_name||concat_first|Hello}} | if a contact’s first name is John then it will return as “Hello John” |
| concat_last | {{contact.first_last||concat_last|,}} | Sometimes you need to add “,” after the first name if the name exists. This example will return “John,” if the first name exists . If first name does not exist then nothing will return. |
| show_if | {{contact.full_name||show_if|First name exist}} | If contact’s full name exist then it will return “First name exist” |

---

