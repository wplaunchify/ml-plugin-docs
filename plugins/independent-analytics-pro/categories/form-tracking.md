# Form Tracking

*Category from Independent Analytics Pro documentation*

---

## How to Track Superb Addons Forms

**Source:** [https://independentwp.com/knowledgebase/form-tracking/track-superb-addons-forms/](https://independentwp.com/knowledgebase/form-tracking/track-superb-addons-forms/)

Forms added with Superb Addons are not tracked automatically, but can be tracked with a few manual edits to the form block.

First, add a hidden field to the form. Then, with the hidden field selected, open the **Advanced** section and enter 
```
iawp-form-id
```

 into the **Custom Field Name** input. Lastly, enter a number into the **Default Value** input. This number will serve as the form’s ID.

![Superb Addons hidden form field](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:550/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/07/superb-addons-hidden-field.png)

With this hidden field added, Independent Analytics Pro will record every submission. The form will show up in the analytics once the first submission is recorded.

## Tracking multiple forms

You can repeat these same steps for every form you want to track. When you add the hidden field to other forms, make sure to give each one a unique ID value. For instance, the form in the screenshot above is using 5, so the next form could use 6. Repeating the same ID on two forms will cause IA Pro to track them as a single form.

## Editing the form name

The name that shows up in the analytics comes from the **Form Name** field.

![Superb Addons form name](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/07/superb-addons-form-name.png)

After changing the form’s name, Independent Analytics Pro will update it in the analytics after the next submission is recorded.

---

## How to Track Breakdance Forms

**Source:** [https://independentwp.com/knowledgebase/form-tracking/breakdance-form-submissions/](https://independentwp.com/knowledgebase/form-tracking/breakdance-form-submissions/)

Forms created with Breakdance are not tracked automatically, but they can be recorded by adding a new action.

In the Breakdance editor, start by selecting the form you want to track. Then, open the **Actions** section. Click on the dropdown that appears and choose the **Independent Analytics Pro** action at the bottom.

![Selecting Breakdance form action](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/03/selecting-breakdance-form-action.png)

Once this action is added, save your changes, and your form will be tracked!

You won’t see the form show up in your analytics until at least one submission has been recorded. If you want to test the submission for yourself, make sure to do so via a private browser window so that your activity can be tracked.

## Editing the form name

Here’s how the form will appear when toggling your Quick Stats:

![Breakdance form submission stats](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:743/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/03/breakdance-form-submission-stats.png)

The name that appears in the analytics comes from the **Form Name** entered here:

![Breakdance form name](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/03/breakdance-form-name.png)

If you change the name in that field, it will be updated in the Analytics menu once a new submission has been recorded.

---

## Why Aren’t My Forms Showing Up?

**Source:** [https://independentwp.com/knowledgebase/form-tracking/why-arent-forms-showing/](https://independentwp.com/knowledgebase/form-tracking/why-arent-forms-showing/)

Independent Analytics Pro will report on all forms that have at least one recorded submission. If you don’t see one of your forms available for display, it means that IA Pro hasn’t tracked a submission for that form yet.

**There is no action needed on your part; the forms will show up automatically as submissions are recorded.**

For example, here’s what it would look like if you were using the Fluent Forms plugin and had forms titled “Contact Form” and “Lead Gen,” each with at least one recorded submission:

![Mutiple forms available](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:697/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/11/mutiple-forms-available.png)

If you created a new form called “Spring Campaign,” and checked your analytics right away, you would not see it listed here. It would only show up once a visitor’s submission has been tracked.

If you want to test a submission yourself, make sure that you do so via a private browser window and from an unblocked IP address. Otherwise, IA Pro will ignore your activity on the site.

## Why does it work this way?

If IA Pro scanned your form plugin’s database tables for forms every time the analytics were loaded, it would add to the performance overhead. It could also end up including a large number of forms that are published but no longer displayed anywhere on your site.

By reporting only on forms with tracked submissions, the performance overhead is avoided, and the list of available forms remains restricted to those with data available for analysis.

---

## How to Track Submissions from Custom Forms (Developer Guide)

**Source:** [https://independentwp.com/knowledgebase/form-tracking/track-submissions-custom-forms/](https://independentwp.com/knowledgebase/form-tracking/track-submissions-custom-forms/)

If you are building a site for a client and you’ve coded your own forms, then you won’t find an automatic integration available to track submissions. However, it is possible to add automatic tracking for forms you develop yourself, and it’s easy too!

All you have to do is trigger the 
```
iawp_custom_form_submissions
```

 hook after a submission is completed by your form, like this:

```
do_action('iawp_custom_form_submissions', 1, 'My Form');
```

The second argument is the form’s ID, which must be an integer. The third argument is the name of the form and must be a string.

The ID is used to recognize the form, so you can place it on multiple pages and have all submissions recorded as the same form. The title will be displayed inside the analytics interface. Once you have at least one submission recorded, you’ll see it appear in the **Toggle Stats** modals for the Quick Stats and data table.

When testing submissions, please make sure that you’re being tracked, or the submission won’t be recorded. You may need to visit your site in a private browser tab or enable tracking of logged-in visitors.

If you are a plugin developer, [please email us](https://independentwp.com/contact/), and we’ll be happy to add an official integration for your plugin. The hook described here is recommended for developers building custom form solutions for their clients.

---

## How to Track Bricks Builder Form Submissions

**Source:** [https://independentwp.com/knowledgebase/form-tracking/bricks-builder-forms/](https://independentwp.com/knowledgebase/form-tracking/bricks-builder-forms/)

Unlike the dedicated form plugins, Bricks Builder forms cannot be tracked automatically. However, there are just a few simple steps required to track every submission.

To track submissions for a Bricks Builder form, start by clicking on the form in the editor and then opening the **Fields** section.

Add a new hidden field and give it a name attribute called 
```
iawp-form-id
```

. The value can be anything you want. The label can also be anything, but you can use “ID” for clarity.

![Bricks builder id](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:598/h:1024/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/06/bricks-builder-id.png)The name must exactly match “iawp-form-id”

Next, add a second hidden field and give it a name attribute of 
```
iawp-form-title
```

. The value of this field is important as it’s the title that will show up in the Analytics menu. The label can be anything, but “Title” is clear.

![Bricks builder title](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:496/h:1024/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/06/bricks-builder-title.png)The name must exactly match “iawp-form-title”

Lastly, open the **Actions** section and add a new **Custom** action.

![Bricks builder action](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/06/bricks-builder-action.png)

Once these steps are done you can save your changes.

To test, make sure you visit via a logged-out browser window so that your activity is tracked and submit the form. The form will be available in the Quick Stats once a submission has been recorded.

![Bricks builder form stats](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:691/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/06/bricks-builder-form-stats.png)“Contact Form” came from the value of the “iawp-form-title” hidden field

## Additional tips

You can track as many forms as you want this way. If you want to track a second form, just add the hidden inputs with the 
```
iawp-form-id
```

 and 
```
iawp-form-title
```

 name attributes, and give them new values to differentiate them from the first form.

Now, let’s say you have a contact form, and you want to add it to two pages of your site and track them as the same form. To do this, you just have to make sure that the value of 
```
iawp-form-id
```

 is the same in both forms. The ID tells Independent Analytics that both forms are the same.

Lastly, let’s imagine you make a mistake and title the form “Conact form.” To correct it, you can simply update the value of the 
```
iawp-form-title
```

 field. The name will update in the Analytics menu the next time a form submission is tracked.

---

## What Form Plugins Does It Integrate With?

**Source:** [https://independentwp.com/knowledgebase/form-tracking/form-plugin-integrations/](https://independentwp.com/knowledgebase/form-tracking/form-plugin-integrations/)

Independent Analytics Pro integrates with the following plugins:

1. ARForms
2. Amelia
3. Avada Forms
4. Bit Form
5. Breakdance
6. Bricks Builder
7. Contact Form 7
8. Convert Pro
9. Core Forms
10. Divi
11. Elementor Pro
12. Everest Forms
13. Fluent Forms
14. Formidable Forms
15. Forminator
16. Gravity Forms
17. Hustle
18. JetFormBuilder
19. Kadence Blocks
20. Kali Forms
21. MailOptin
22. MailPoet
23. Mailchimp for WordPress
24. Newsletter
25. Ninja Forms
26. Request a Quote for WooCommerce
27. Superb Addons
28. SureForms
29. Thrive Leads
30. WP Store Locator
31. WPForms
32. WS Form

Most of the plugins are tracked automatically, but some require a small amount of configuration. These plugins are [Bricks Builder](https://independentwp.com/knowledgebase/form-tracking/bricks-builder-forms/), [Breakdance](https://independentwp.com/knowledgebase/form-tracking/breakdance-form-submissions/), Kadence Blocks, and [Superb Addons](https://independentwp.com/knowledgebase/form-tracking/track-superb-addons-forms/).

Kadence Blocks forms can be tracked only if they’re created via the Forms menu in Kadence. Forms created with a block within the post editor are not trackable.

## Can other plugins be added?

Yes, if you’re using another plugin you’d like us to integrate with, please get in touch, and we’ll see if it’s possible.

---

## How to Track Form Submissions

**Source:** [https://independentwp.com/knowledgebase/form-tracking/track-form-submissions/](https://independentwp.com/knowledgebase/form-tracking/track-form-submissions/)

[Full list of supported form plugins here](https://independentwp.com/knowledgebase/form-tracking/form-plugin-integrations/)

After installation, Independent Analytics Pro will automatically track submissions of any form created by one of the supported plugins. There is no configuration required beyond installing Independent Analytics Pro and using a supported plugin to create your forms.

There are two places where you can find stats for your form submissions.

## Form stats in the Quick Stats

Above the Quick Stats, you’ll see the **Toggle Stats** button.

![Toggle stats button](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:645/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/05/toggle-stats-button.png)

Click this button, and then in the modal that appears, select the **Forms** section.

![Quick Stats form stat checkboxes](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:589/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/05/quick-stats-form-stat-checkboxes.png)

Here, you can see all the form metrics available. There is an overall **Form Submissions** metric and **Form Conversion Rate** metric. These give you the total values for all your forms combined.

Below that, you’ll see the title of the form plugin you’re using and the metrics for each individual form. In the example above, you can see submission and conversion rate metrics for a “Contact Us” form and a “Lead Gen” form.

**Please note** that you will not see all the forms listed immediately. Forms will only show up after at least one submission has been recorded.

You can check any of these boxes, and the associated stat will appear in the Quick Stats right away.

![Quick Stats form stats](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:559/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/05/quick-stats-form-stats.png)Stats that come from a plugin will also show the plugin’s logo

You can show/hide whichever stats you’d like, and if you want to revisit this data quickly in the future, you can [save a new report](https://independentwp.com/knowledgebase/dashboard/save-reports-revisit-later/). This will save every change you’ve made, including your customizations to the Quick Stats.

The stats update with any filters applied, so you can easily see data like your submissions that came from social media sites or cities in Canada.

## Form stats in the data table

Another place you can find the form stats is in the data table. Just like the Quick Stats, you can click the **Toggle Columns** button and choose which form metrics you want displayed.

![Toggle Columns button](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:612/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/02/edit-columns-button.png)

This gives you more granular data than the Quick Stats. For instance, you can compare the number of submissions between individual traffic sources in the Referrers report.

![Referrers form submissions](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:328/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/05/referrers-form-submissions.png)

This data is available in all reports, so you can also see each form’s stats for individual cities and countries, device types, browsers, and UTM campaigns.

## Does the form have to come from a plugin?

Yes, the form needs to be created with a WordPress plugin. Form plugins save the forms in the DB with names and IDs, which Independent Analytics uses to recognize and differentiate between forms regardless of which page they’re on.

The main advantage is that you don’t have to configure anything yourself. However, it also means that you can update a form’s title and it will update automatically in the analytics, and you can embed the same form in multiple places, and it will be tracked as the same form.

---

