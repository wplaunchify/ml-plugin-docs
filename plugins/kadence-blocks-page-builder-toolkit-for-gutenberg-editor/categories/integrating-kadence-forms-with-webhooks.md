# Integrating Kadence Forms With Webhooks

*Category from Kadence Blocks — Page Builder Toolkit for Gutenberg Editor documentation*

---

## Integrating Kadence Forms with Webhooks

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/integrating-kadence-forms-with-webhooks/](https://www.kadencewp.com/help-center/docs/kadence-blocks/integrating-kadence-forms-with-webhooks/)

The [Kadence Form](https://www.liquidweb.com/docs/kadence-blocks/form-block/) and [Form (Adv) Blocks](https://www.liquidweb.com/docs/kadence-blocks/advanced-form-block/) both support integration with **Webhooks**. This is an integration available with [Kadence Blocks Pro](https://www.liquidweb.com/software/kadence/).

To use the *Kadence Forms Webhook integration*, you must have the **Kadence Blocks Pro**plugin installed and activated on the website. [You can click here to learn how to get started with Kadence Blocks Pro](https://www.liquidweb.com/docs/kadence-blocks/kadence-blocks-pro-plugin/).

## What is a Webhook

Webhooks are automated messages sent from one system to another via the web. When a webhook is called, it pushes information from your site to a unique third-party URL. Webhooks are typically used to connect apps and systems, allowing them to share real-time data. [Zapier](https://zapier.com/apps) is a popular service that utilizes webhooks to connect disparate systems.

Both **Kadence Forms** and **Kadence Forms (Adv)** support Webhooks. Once your form has been created and you’ve enabled the Webhook action, the Webhook Settings configuration is identical.

## Creating a Kadence Form with a Webhook

### Creating a Kadence Form

Get started by adding a **Form Block** to a page.

Once your form has been created, you’ll need to enable the Webhook action.

- In the form settings, click on the **Actions After Submit** section.
- Scroll down and check **WebHook**![Kadence Form - Actions After Submit](https://www.liquidweb.com/wp-content/uploads/2025/05/Screenshot-2025-05-12-at-1.18.15 PM-482x1024.png)### Creating a Kadence Form (Adv)

Get started by adding a **Form (Adv) Block** to a page.

Once your form has been created, you’ll need to enable the Webhook action.

- In the Forms settings, click on the **Submit Actions** section.
- Search for and add a **WebHook** to any existing actions.![Kadence Form Adv - Submit Actions](https://www.liquidweb.com/wp-content/uploads/2025/05/Screenshot-2025-05-12-at-1.40.05 PM.png)
## Configure Your Form Webhook

After enabling Webhooks for either the **Kadence Form** or **Kadence Form (Adv)**, you will now see a new **Webhook Settings** section.  This section is identical for both form blocks.

**Webhook URL:** this URL will be supplied by your webhook service provider. This is the unique URL that information will be sent to.

**Map Fields:** This section will display each of your form fields and allow you to map them to the corresponding Webhook Field Name.

When you’re done, be sure to save your changes.![Kadence Form - Webhook Settings](https://www.liquidweb.com/wp-content/uploads/2025/05/Screenshot-2025-05-12-at-1.28.10 PM.png)
## Testing Your Form Webhook

To test your form, you can use a third-party test site such as **Webhook Tester**. This site will provide you with a temporary URL that you can use as your **Webhook URL**. After updating your form, you can submit a test entry and see the results on the Webhook Tester website.

![Webhook Tester - https://webhook-test.com/](https://www.liquidweb.com/wp-content/uploads/2025/05/Screenshot-2025-05-12-at-2.37.31 PM.png)Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

