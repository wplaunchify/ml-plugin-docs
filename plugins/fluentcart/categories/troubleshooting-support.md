# Troubleshooting Support

*Category from FluentCart documentation*

---

## Troubleshooting & Support ​

**Source:** [https://docs.fluentcart.com/guide/troubleshooting-support/](https://docs.fluentcart.com/guide/troubleshooting-support/)

# Troubleshooting & Support ​

The **Troubleshooting & Support** section in FluentCart is designed to help you resolve common issues, understand system logs, and find assistance when you encounter challenges. Our goal is to ensure you have a smooth and efficient experience running your online store.

This section provides resources and guides for:

- **Understanding Logs:** Learn how to interpret FluentCart's system logs to diagnose issues and track events.
- **Common Issues & FAQs:** Find solutions to frequently asked questions and common problems encountered by FluentCart users.
- **How to Get Support:** Information on how to reach out to the WPManageNinja support team for personalized assistance.

By utilizing these resources, you can quickly address many operational questions and keep your FluentCart store running optimally.

---

## Common Issues & FAQs ​

**Source:** [https://docs.fluentcart.com/guide/troubleshooting-support/common-issues-faqs](https://docs.fluentcart.com/guide/troubleshooting-support/common-issues-faqs)

# Common Issues & FAQs ​

This section provides solutions to frequently encountered issues and answers to common questions about FluentCart. If you're experiencing a problem, check this guide first before reaching out for direct support.

## Frequently Asked Questions ​

### Q: Why are my PayPal/Stripe payments not going through in Live mode? ​

**A:**

- **Check API Credentials:** Ensure you have entered your **Live credentials** (API keys/secrets) correctly in **FluentCart Pro > Settings > Payment Settings > Stripe Settings** or **PayPal Settings**.
- **Switch Order Mode to 'Live':** Make sure your FluentCart store's "Order Mode" is set to "Live" (this setting is typically found under **FluentCart Pro > Settings > Store Settings > Store Setup**). Payments will not process in Live mode if your store is still configured for "Test" mode.
- **Configure Webhooks (for Stripe):** For Stripe, it's critical that you have correctly configured the Webhook URL in your Stripe Dashboard as instructed in the [Stripe Settings](/guide/payments-checkout/connecting-payment-gateways/stripe-settings) documentation.

### Q: My digital product downloads are not working, or files are missing. ​

**A:**

- **Verify Downloadable Assets:** In the **Product Edit** screen for your digital product, go to the "Downloadable Asset(s)" section and confirm that the correct files are uploaded or linked.
- **Check Storage Settings:** Ensure your [Storage Settings](/guide/settings-configuration/storage-settings) (Local or S3) are correctly configured and accessible. If using S3, verify your bucket credentials and permissions.
- **File Permissions:** On your server (for local storage), ensure the directories containing your digital files have the correct read/write permissions.

### Q: A customer can't access their license key or software updates. ​

**A:**

- **Check Order Status:** Ensure the customer's order for the licensed product is marked as "Completed" and fully paid.
- **Verify License Status:** On the [License Details screen](/guide/product-types-creation/creating-digital-products-with-licenses#product-specific-license-settings) for that customer's license, ensure its status is "Active" and the "Activation Limit" has not been exceeded.
- **License Key Activation:** Guide the customer to activate their license key on their site if it's for a WordPress plugin, as outlined in the plugin's instructions.
- **FluentCart License Activation:** Ensure *your* FluentCart plugin license is active in [FluentCart Pro > Settings > Licensing](/guide/settings-configuration/licensing-settings) to receive updates.

## General Troubleshooting Tips ​

- **Check System Status:** Look for a "System Status" or "Health Check" tool within FluentCart (if available) or WordPress that can provide diagnostic information.
- **Deactivate Conflicts:** Temporarily deactivate other plugins one by one to check for conflicts that might be causing unexpected behavior.
- **Review Logs:** Utilize the [Understanding Logs](/guide/troubleshooting-support/understanding-logs) guide to check for any related "Warning" or "Failed" entries.

---

## How to Get Support ​

**Source:** [https://docs.fluentcart.com/guide/troubleshooting-support/how-to-get-support](https://docs.fluentcart.com/guide/troubleshooting-support/how-to-get-support)

# How to Get Support ​

If you've reviewed the [Docs & FAQs](/guide/troubleshooting-support/common-issues-faqs) guides and still encountering a problem with FluentCart, our dedicated support team is here to help.

## How to Contact Support ​

To ensure you receive the quickest and most effective assistance, please follow these guidelines when contacting us:

1. **Visit the FluentCart Support Portal:** Go to the official FluentCart website. This is the primary channel for submitting support tickets.

- [FluentCart Account](https://fluentcart.com/account/)
2. **Submit a Support Ticket:**

- Log in to your FlunetCart account.
- Navigate to the "Support Tickets" section.
- Click on "Create Ticket."
3. **Provide Detailed Information:** When submitting your ticket, please include as much detail as possible. This helps our team understand your issue quickly and provide a precise solution. Include:

- **A Clear Description of the Problem:** Explain what you are trying to achieve and what is happening instead.
- **Steps to Reproduce:** List the exact steps you take that lead to the issue.
- **Screenshots or Screen Recordings:** Visual aids are incredibly helpful for diagnosing problems.
- **Error Messages:** If you see any error messages on your screen or in your WordPress debug log, copy and paste them.
- **Relevant Log Entries:** Check your FluentCart [Logs](/guide/troubleshooting-support/understanding-logs) screen for any "Warning" or "Failed" entries related to the issue and include them.
- **Your WordPress Version.**
- **Your FluentCart Plugin Version.**
- **Any Other Plugins Active on Your Site:** List them, especially if they are related to e-commerce, payments, or forms.
4. **Support Hours:** Our support team operates during business hours, typically Monday to Friday. We strive to respond to all inquiries as quickly as possible.

We are committed to helping you succeed with FluentCart!

---

## Understanding Logs ​

**Source:** [https://docs.fluentcart.com/guide/troubleshooting-support/understanding-logs](https://docs.fluentcart.com/guide/troubleshooting-support/understanding-logs)

# Understanding Logs ​

Think of the **Logs** screen as the diary for your store. It keeps a detailed record of every important event and action that happens, like when an order is paid or a setting is updated. This is an essential tool for keeping an eye on your store's operations and for figuring out what happened if something ever goes wrong.

## Accessing the Logs ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Logs** in the left sidebar.
2. This will open the **Logs** screen, displaying a detailed table of all recorded events.

## Understanding the Logs List Table ​

The Logs list table presents key information for each event entry:

- **ID:** A unique identification number for each log entry.
- **Date & Title:** The date and time when the event occurred, along along with a brief title describing the action.
- **Content:** A detailed description of the event that took place.
- **Status:** The outcome or severity of the action.
- **Module:** The FluentCart module or area from which the action originated.
- **Actions:** For many log entries, particularly those related to orders, a **"View Order"** link is provided. Clicking this link will navigate you directly to the [Order Details screen](/guide/store-management/orders-management/order-details-overview) for that specific transaction.

![Screenshot of Logs List Page](/images/troubleshooting-support/understanding-logs/Logs.webp)

## Filtering Logs ​

If you are looking for a specific event, you can easily filter the log entries to narrow down your search.

### Filtering by Status Tabs ​

At the top of the logs screen, you will find several tabs to filter by the most common statuses:

- **All:** Displays every log entry.
- **Success:** Shows only successfully completed actions.
- **Warning:** Filters for entries that indicate a minor issue.
- **Error:** Shows only entries that are reporting an error

### Using 'More Views' ​

For more specific filters, click the **More views** dropdown menu. Here you will find these options:

- **Failed:** Shows only actions that resulted in a failure.
- **Info:** Displays informational messages that aren't errors or successes.
- **API Only:** Narrows the list to only show events related to API interactions.

## Using Logs for Troubleshooting ​

- **Diagnosing Errors:** If you encounter unexpected behavior or errors in your store, checking the "Failed" or "Warning" log types can help identify the root cause.
- **Auditing Changes:** The "Success" logs keep a record of all successful actions. This is helpful for audits or seeing who did what and when.
- **Tracking Workflows:** By reviewing the sequence of events in the log, you can understand how certain processes (like order fulfillment or refunds) unfolded.

---

