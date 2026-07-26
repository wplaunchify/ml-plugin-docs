# How To Set Up A Reminder Email For Expiring Coupons

*Category from WooCommerce Smart Coupons documentation*

---

## How to set up a reminder email for expiring coupons

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-set-up-a-reminder-email-for-expiring-coupons/](https://woocommerce.com/document/smart-coupons/how-to-set-up-a-reminder-email-for-expiring-coupons/)

# How to set up a reminder email for expiring coupons

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers, extending the core functionality of WooCommerce coupons.

This document provides a step-by-step guide on how to set up an email to remind users that their coupons/gift cards are about to expire.

## How to enable reminder coupon/gift card emails:

[↑ Back to top](#doc-title)

1. Navigate to **WooCommerce > Settings > Emails**, then locate **Smart Coupons – Coupon Expiry Reminder**.
2. Click on the Manage button.
3. Click on the Enable checkbox to enable the feature.
4. In the “**Send reminder X days before expiry**” field, set this as “2” or as per your requirements.
5. Click on Save changes.

![](https://woocommerce.com/wp-content/uploads/2024/11/smart-coupons-enable-the-coupon-expiry-reminder.png?strip=all&w=704)

Once saved, the emails will start scheduling in the background. The emails are ready to send once the process is completed.

That’s it.

**Note**: It is mandatory that the coupon/gift card should have an **expiration date** and email on the **Allowed Emails** field for the reminder emails to be scheduled.

### How does this work:

[↑ Back to top](#doc-title)

Once the scheduling action is completed, the emails will be sent to users within two days or the number of days before expiry that you have entered. You can view the scheduled emails by navigating to the **WooCommerce > Status > Scheduled Actions** tab. Paste the hook 
```
wc_sc_send_coupon_expiry_reminder
```

****into the search bar and hit enter to see the pending and completed actions.

[← WooCommerce Smart Coupons Documentation](https://woocommerce.com/document/smart-coupons/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis.
				![](https://woocommerce.com/wp-content/uploads/2015/03/Conditional_Shipping_Payments_icon-marketplace-160x160-1.png)

### Conditional Shipping and Payments

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Use conditional logic to restrict the shipping and payment options available on your store.

---

