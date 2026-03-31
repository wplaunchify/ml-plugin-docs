# Skip Subscriptions Renewal

*Category from WooCommerce Subscriptions documentation*

---

## Use case: skip a Subscriptions renewal based on signup date

**Source:** [https://woocommerce.com/document/subscriptions/skip-subscriptions-renewal/](https://woocommerce.com/document/subscriptions/skip-subscriptions-renewal/)

# Use case: skip a Subscriptions renewal based on signup date

			In the case of [synchronized renewals](https://woocommerce.com/document/subscriptions/renewal-synchronisation/), you might want to skip the immediate next renewal date if you charge the full recurring amount during the purchase for customers who buy the subscription after the first 10 days of the month. This use case explains how you can do that both using the standard settings in Woo Subscriptions and, optionally, with Automate Woo.

Here’s the synchronized renewal scenario we’ll use throughout this use case:

- Renewals are synchronized and take place on the 1st of the month.
- When a customer signs up **between 1-10 of the month**, they pay the full monthly fee right away, and the next renewal is on the next 1st (e.g. they sign up on **September 8**, then the next charge will be on **October 1st**).
- When a customer signs up between **11-31 of the month**, they still pay the full monthly fee, **but** we want the next renewal to be *skipped* (e.g. they sign up on **September 23**, then there should be no charge on October 1st. The next charge will be on **November 1st**).

## Solutions

[↑ Back to top](#doc-title)

### Use Subscriptions settings

[↑ Back to top](#doc-title)

If you want to skip a renewal for customers who purchase between 11-31 of the month using the subscription product settings,  here’s how you would do it:

Set the subscription product settings as follows:

- **Signup fee**: same as monthly fee for the subscription.
- **Free trial period**: the same time period as customers who sign up between 11-31 of the month (or 20 days) based on the example scenario above.

This is what will happen after making these changes to the product settings for the subscription:

- When someone signs up on **September 8**, they pay the full signup fee, the 20-day trial ends on September 28, and the next renewal is on **October 1st**.

- When someone signs up on **September 23**, they pay the full signup fee, the 20 day trial ends on October 13 (so it will skip the October 1 renewal), and the next renewal then takes place on **November 1st**.

### Subscriptions and AutomateWoo

[↑ Back to top](#doc-title)

AutomateWoo can change the billing period or interval with the [Subscriptions Add On for AutomateWoo](https://href.li/?https://github.com/woocommerce/automatewoo-subscriptions). Here’s [an example of how to pause subscription renewals](https://woocommerce.com/document/automatewoo/examples/subscription-workflows/pause-monthly-subscriptions-renewals-for-three-months/) (i.e. skip one or more renewals).

What AutomateWoo can’t do is set a subscription to renew or expire on a specific date. You can’t set up a workflow to change all your subscriptions to have their renewal dates set to the 15th of the month or to set an expiry date on your subscriptions. However, you can set up a workflow to change from a monthly renewal to a yearly renewal.

## Options that won’t work

[↑ Back to top](#doc-title)

### Coupons and AutomateWoo

[↑ Back to top](#doc-title)

Technically, a recurring coupon for 100% discount for 1 renewal could be used, in combination with AutomateWoo but it’s not ideal. The workflow would trigger when the subscription is created, it will check if the next renewal is within the next 20 days, and if that’s the case, the coupon will be added. That will make the next renewal free, after which the coupon is no longer valid.

However, there will be multiple spots (checkout, order confirmation, subscription details, etc.) where the customer will see that the next renewal date is still on **October 1st**. There are two reason for this – first because the coupon isn’t applied yet since it’s for the renewal, therefore it won’t be reflected in the next renewal date and second is because the coupon is to make the next renewal *free*, it doesn’t eliminate the renewal from running (or skip it) if the customer purchases the subscription between 1st-10th of the month.

### Grace period

[↑ Back to top](#doc-title)

Setting a grace period for the subscription also wouldn’t work since grace periods only apply to the amount paid at *signup*, not the next renewal period.

---

