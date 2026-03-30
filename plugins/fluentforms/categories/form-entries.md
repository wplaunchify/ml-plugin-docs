# Form Entries

*Category from Fluent Forms documentation*

---

## Frontend Entry View

**Source:** [https://fluentforms.com/docs/front-end-entry-view/](https://fluentforms.com/docs/front-end-entry-view/)

With the **Frontend Entry View** feature in Fluent Forms, users (or admins) can view a submitted form through a unique link. This link is **hash-based**, meaning it’s secure and unique to each submission.

As the admin, you have full control over who gets to view these entries. You can choose to show them only to the person who submitted the form, other admins, or even anyone else. It’s completely up to you.

In this article, you will learn how to enable the frontend entry view feature and share the view link with the form submitter.

## Enable Frontend Entry View

To use the frontend entry view feature, first create a new form or edit an existing one. From the form editor, go to the **Settings & Integrations** section. Then click on **Confirmation Settings** under the Settings tab.

Next, scroll down and you’ll see the **Frontend Entry View** section. Just check the box labeled **Enable Frontend View of User Submission**. Once enabled, a few more options will appear:

#### Content

In the content area, you can add a paragraph using the visual editor or code editor. You can also style your content here. You can include media files or shortcodes to make the content more useful or personalized.

#### Enable Restriction

If you check this box, only****the **form submitter** or an**admin** can view the submission. If left unchecked, **anyone with the link** will be able to view the entry.

#### Background Color

This option lets you set a background color for the front-end entry view page. Use the color palette to select a color that complements your design.

#### SEO Settings

If you enable this option by checking the box, the submission page will be **hidden from search engines**.

After setting everything up, click the Save Settings button to apply the changes.

![](https://fluentforms.com/wp-content/uploads/2025/07/01-1-1024x552.webp)

## Add Fronted View URL Link

Go to the **Confirmation Settings** section. Click on **Add Shortcode**, then choose **Entry Attributes** from the list. Scroll down and find the option called **Entry Frontend View Link**. Just click on it to insert the link.

You can also add a button for the entry’s frontend view link. Just click on the **Button** option and paste the **Entry frontend view link** shortcode in the URL field.

After adding the link, click the **Save Settings** button.

![](https://fluentforms.com/wp-content/uploads/2025/07/2.webp)

Now, when someone submits the form, they’ll see a link to view their entry on the frontend, just like in the screenshot example.

![](https://fluentforms.com/wp-content/uploads/2025/07/3.webp)

If you added a button for the entry frontend view link, they’ll see it, as shown in the screenshot below. After clicking on the button, the user will be able to see the submitted entries.

![](https://fluentforms.com/wp-content/uploads/2025/07/4.webp)

### View the Frontend Entry

Visit the generated link, and you will now see the **Frontend view** of your form submission.

![](https://fluentforms.com/wp-content/uploads/2025/07/5.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Search and Filter Form Entries

**Source:** [https://fluentforms.com/docs/how-to-search-and-filter-form-entries/](https://fluentforms.com/docs/how-to-search-and-filter-form-entries/)

Fluent Forms provides a simple and effective way to search and filter form entries, allowing you to quickly find specific data and manage your submissions with ease.

This guide explains step-by-step how to use these features.

## Search Entries

Go to the **Entries** section of your specific form. Now, locate the **Search Bar** on the top-right corner of the page. Use keywords like a name, email, or other relevant details to find specific entries instantly.

![](https://fluentforms.com/wp-content/uploads/2024/12/01-scaled.webp)

## Filter Entries

Fluent Forms offers multiple filtering options:

There are four types of filters available. You can choose any of them to sort the data.

- **Unread**: Displays entries not yet reviewed.
- **Read**: Shows entries already viewed.
- **Favorite**: Filters entries marked as favorites.
- **Trashed**: Displays deleted entries.

![](https://fluentforms.com/wp-content/uploads/2024/12/02-scaled.webp)

**Date Filter:**Click on the **Date Filter** dropdown. Here options include pre-defined timeframes or custom date ranges using the **Select a Timeframe** option.

![](https://fluentforms.com/wp-content/uploads/2024/12/03-scaled.webp)

Using Fluent Forms’ search and filter tools can help you manage your data more effectively. If you have any questions or need assistance, contact our[support team](https://wpmanageninja.com/support-tickets/).

---

## How to Add a Date and Time Stamp to Form Entries

**Source:** [https://fluentforms.com/docs/how-to-add-a-date-and-time-stamp-to-form-entries/](https://fluentforms.com/docs/how-to-add-a-date-and-time-stamp-to-form-entries/)

Fluent Forms makes it easy to track when forms are submitted. Adding a date and time stamp helps analyze user activity and submission patterns.

This documentation will show you how to add a date and time stamp to form entries with fluent form.

## Check Default Timestamps

First, navigate to the **Entries** section in your Fluent Forms dashboard. Each submission includes a **Submitted at** timestamp, showing the date and time when the form was submitted.

To view more details, hover over the displayed timestamp to reveal the precise **month**, **day**, and **time**.

![](https://fluentforms.com/wp-content/uploads/2024/12/defualt-date-and-time-01-scaled.webp)

## Add Custom Date and Time Stamps

To add a more customized timestamp to your forms, open the form editor and add a **Hidden Field** from the **Advanced Fields** section.

![](https://fluentforms.com/wp-content/uploads/2024/12/Hidden-field-02-scaled.webp)

Now click the **three-dot menu** in the **Input Customization** section. Select one of the predefined formats:

```
Date (mm/dd/yyyy)
Date (dd/mm/yyyy)
```

After setting the desired format, click the **Save Form** button.

![](https://fluentforms.com/wp-content/uploads/2024/12/03-1-scaled.webp)

When a user submits the form, the custom date and time stamp will automatically appear in the **Entries** section.

![](https://fluentforms.com/wp-content/uploads/2024/12/04-scaled.webp)

Adding a date and time stamp to your form entries is simple and highly useful for tracking user activity. If you encounter any issues, reach out to our [support team](https://wpmanageninja.com/support-tickets/) for assistance.

---

## Partial Entries for Step Forms

**Source:** [https://fluentforms.com/docs/partial-entries-for-step-forms/](https://fluentforms.com/docs/partial-entries-for-step-forms/)

Long or multi-step forms can be overwhelming, and many users leave them incomplete. Fluent Forms solves this problem with its **Partial Entries (Abandoned)** feature. Now, users can save their progress step-by-step, ensuring no data is lost even if they leave mid-way.

This guide will show you how to enable this feature, helping users pick up exactly where they left off.

## Enable Partial Entries

To enable partial entries in your forms, first, Open the form editor and add the **Form Step** field from the **Advanced Fields** section.

Click on the **Enable Per Step Data Save (Save & Continue)** option to save data after each step.

> Partial entries will be saved after clicking on the Next button, not on form submission.

**Example:** If you have a five-step form and the user fills up the three-step and leaves the form, you will get the three-step data as partial entries.

### Enable Resume Step from Last Session

Enable the **Resume Stop from last step form session**option, allowing users to continue from the last session.

**Example:** If the user fills up three-step from five steps forms and leaves the form or refreshes the page, he will resume in the step he left, which is the third step.

![](https://fluentforms.com/wp-content/uploads/2025/01/Partial-Steps-scaled.webp)

### View Partial Entries

You can track incomplete submissions by hovering over the **Settings & Entries** and click the **Partial Entries** tab in your Forms dashboard.

![](https://fluentforms.com/wp-content/uploads/2025/01/partial-entries-show-scaled.webp)

After setting up the form your users can leave a form midway and continue later without losing their data, improving overall user experience.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

