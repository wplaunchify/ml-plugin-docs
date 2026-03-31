# Common Issues And Error Messages For Woocommerce Subscriptions

*Category from WooCommerce Subscriptions documentation*

---

## Common Issues and Error Messages for WooCommerce Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/common-issues-and-error-messages-for-woocommerce-subscriptions/](https://woocommerce.com/document/subscriptions/common-issues-and-error-messages-for-woocommerce-subscriptions/)

# Common Issues and Error Messages for WooCommerce Subscriptions

			This article lists the most common renewal-related errors in WooCommerce Subscriptions and provides troubleshooting guidance to help you identify why they occur, what to look for, and how to resolve them.

If you still need help after reading, please gather all your findings, including error logs and subscription order numbers, and contact us via the [WooCommerce.com support page](https://woocommerce.com/my-account/contact-support/#contact-us).

## Renewal orders are not automatically created

[↑ Back to top](#doc-title)

WooCommerce Subscriptions relies on [scheduled actions](https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/) to automatically generate renewal orders. If cron jobs aren’t running or the Action Scheduler queue fails, renewals aren’t created when expected.

#### What to check for

1. Check **Action Scheduler** under **WooCommerce > Status > Scheduled Actions**.
- Type the affected subscription number in the search box and search for any pending or failed actions.
- Verify if there are any error messages under the **Logs** column.
2. [Confirm WP-Cron is working](https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/#debugging-wp-cron). If cron is disabled or broken, scheduled renewals won’t trigger.
3. Review [PHP memory limits](https://woocommerce.com/document/subscriptions/scheduled-action-errors/#php-time-limit). Low limits can prevent scheduled actions from running.

#### Next action steps

1. If there are errors in the Scheduled Actions log, [check which error message](https://woocommerce.com/document/subscriptions/scheduled-action-errors/) is present to diagnose and fix.
2. If cron jobs aren’t running, you can reach out to your host to have them re-enable WP-Cron or to set up a [real server cron job](https://woocommerce.com/document/automatewoo/replace-wordpress-cron-real-cron-job/).
3. To continue receiving renewal payments while investigating, you can [manually trigger a renewal order](https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#create-pending-renewal-order) by selecting **Create Pending Renewal Order** under the order Actions widget within the subscription in question. Then select **Process renewal** to charge the customer manually.

## Renewal Has Failed

[↑ Back to top](#doc-title)

A renewal can fail when the payment gateway declines or cannot process the customer’s payment method. This can be due to missing payment tokens, customer card issues, gateway errors, or problems with scheduled actions.

#### What to check for

1. Go to **WooCommerce > Subscriptions** and open the affected subscription.
- Under the Billing****section, click the pencil icon and confirm there is a payment method and saved token (Customer ID and Payment ID).
2. Open the **failed renewal order** and review **Order Notes** for payment gateway error messages.
- If the issue is with the customer’s card (expired, insufficient funds, or declined), there should be a message indicating this.
3. Check **Action Scheduler logs** for failed or stuck renewal actions.
- Go to **WooCommerce > Status > Scheduled Actions** and type the affected subscription number in the search box.
- Verify if there are any error messages under the **Logs** column.
4. Review payment gateway debug logs and 
```
failed-scheduled-actions
```

 log under **WooCommerce > Status > Logs** for specific error messages.

#### Next action steps

1. If the payment token is missing or invalid, ask the customer to re-add their payment method under **My Account >**[Payment Methods](https://woocommerce.com/document/subscriptions/customers-view/subscriber-payment-methods/).
2. If the customer’s payment failed due to card issues, ask them to update the subscription’s payment method from **My Account > Subscriptions**. From the subscription, they can click the **Change payment** button to add a new card.
3. Enable and configure the [failed recurring payment retry system](https://woocommerce.com/document/subscriptions/failed-payment-retry/) if it’s not already active. This can help recoup otherwise lost revenue due to a customer’s payment method being temporarily declined.
4. Review payment gateway logs for errors and contact the plugin’s support.
5. Review any failed scheduled action logs and [check which error message](https://woocommerce.com/document/subscriptions/scheduled-action-errors/) is present to diagnose and fix.
6. To avoid further interruptions with your renewals as you investigate, you can retry the renewal manually from the subscription order by clicking **Process Renewal**.

## Duplicate Renewal Orders

[↑ Back to top](#doc-title)

Duplicate renewal orders can occur when more than one renewal action is triggered for the same billing period. This often results from overlapping scheduled actions, manual intervention during a pending renewal, or conflicts with plugins or custom code that trigger renewals.

#### What to check for

1. Go to **WooCommerce > Status > Scheduled Actions** and look for multiple 
```
woocommerce_scheduled_subscription_payment
```

 actions with the same subscription ID and timestamp.
2. Review the **Related Orders** section in the subscription to confirm duplicate renewals exist.
3. Check order notes to see if an admin manually clicked **Process Renewal** or **Create Pending Renewal Order** while a renewal was already pending.
4. Verify WP-Cron isn’t running too frequently (e.g., every minute) or firing duplicate renewal hooks.
5. Check your payment gateway logs under **WooCommerce > Status > Logs** to confirm whether duplicate charges came from WooCommerce or the payment processor.
6. Temporarily disable recently added or updated plugins that might interact with subscriptions, payment gateways, or scheduled actions. Common culprits include automation tools, custom code snippets, or caching systems that interfere with WP-Cron.

#### Next action steps

1. **Void or refund** duplicate renewal orders. Keep one valid renewal for the billing cycle.
2. **Cancel duplicate scheduled actions** in Action Scheduler to prevent future duplicates.
3. **Disable or correct** any plugin or custom code causing multiple renewal triggers.
4. **Verify subscription dates** — make sure the **Next Payment Date** and **Last Order Date** are correct. Update if necessary to align with the correct billing cycle.

## Payment failure error: PaymentMethod detached or invalid

[↑ Back to top](#doc-title)

```
Error: “Sorry, we are unable to process the payment at this time. Reason: The provided PaymentMethod was previously used with a PaymentIntent without Customer attachment, shared with a connected account without Customer attachment, or was detached from a Customer. It may not be used again. To use a PaymentMethod multiple times, you must attach it to a Customer first.”
```

This error message will show up on the order notes. This error commonly affects payment gateways that use tokenization, such as Stripe. It occurs when the token, which WooCommerce Subscriptions uses to process recurring payments, becomes invalid or detached from the customer’s profile within the payment gateway, preventing renewals from being processed. Some scenarios that could cause this include issues during subscription migrations, change in associated Stripe account, or the staging site processing renewals.

#### What to check for

1. Go to **WooCommerce > Subscriptions** and open the affected subscription.
2. Click the pencil icon next to the Billing section and check for missing or invalid payment tokens.
3. Review your payment gateway’s error log under **WooCommerce > Status > Logs**

#### Next action steps

1. Ask affected customers to re-save their payment method. This will attach the payment method for all future renewals. Have customers[follow the steps outlined in this documentation](https://woocommerce.com/document/subscriptions/customers-view/subscriber-payment-methods/#change-subscription-payment-method) to update the payment method.
2. They should then be able to pay for the pending renewal order.

## Questions and support

[↑ Back to top](#doc-title)

**Something missing from this documentation? Still have questions and need assistance?**

- If you have a question about a specific extension or theme you’d like to purchase, [contact us](https://woocommerce.com/contact-us/#sales-form) to get answers.
- If you already purchased this product and need some assistance, get in touch with a Happiness Engineer via our [support page](https://woocommerce.com/my-account/create-a-ticket/) and select this product’s name from the Product dropdown.

---

