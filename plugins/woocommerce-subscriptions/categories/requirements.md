# Requirements

*Category from WooCommerce Subscriptions documentation*

---

## How to test if WP-Cron is working

**Source:** [https://woocommerce.com/document/subscriptions/requirements/](https://woocommerce.com/document/subscriptions/requirements/)

# How to test if WP-Cron is working

			WooCommerce Subscriptions uses scheduled events to process renewals and other time-sensitive tasks. A working WordPress cron system helps those events run when they are due.

## Check WordPress cron status

[↑ Back to top](#doc-title)

Use WooCommerce System Status to confirm whether WordPress cron is enabled on the site.

1. Go to **WooCommerce > Status > System status**.
2. Find the **WordPress cron** row in the **WordPress environment** section.
3. Confirm that the row shows WordPress cron is enabled.

![WooCommerce System Status screen showing WordPress environment rows with WordPress cron enabled.](https://woocommerce.com/wp-content/uploads/2026/08/woocommerce-system-status-wordpress-cron-context.png?strip=all&w=704)The WordPress environment section in WooCommerce System Status shows whether WordPress cron is enabled.

## What the result means

[↑ Back to top](#doc-title)

If WordPress cron is enabled, WordPress can trigger scheduled events when the site receives traffic. This does not guarantee that every scheduled subscription action will complete successfully, but it confirms that cron has not been disabled in WordPress configuration.

If WordPress cron is disabled, check the site’s 
```
wp-config.php
```

 file or ask the host whether 
```
DISABLE_WP_CRON
```

 is set to 
```
true
```

. Some hosts disable the built-in visitor-triggered cron and replace it with a server-level cron job. In that setup, confirm with the host that the server cron is configured and running often enough for subscription renewals.

## If subscription events still do not run

[↑ Back to top](#doc-title)

After confirming WordPress cron is enabled, check scheduled subscription events directly.

- Go to **WooCommerce > Status > Scheduled Actions** and look for pending or failed subscription actions.
- Use the [Testing Subscription Renewal Payments](https://woocommerce.com/document/subscriptions/testing-subscription-renewal-payments/) guide to run a controlled test renewal on a staging site.
- Use the [Subscriptions Scheduled Action Errors](https://woocommerce.com/document/subscriptions/scheduled-action-errors/) guide if subscription actions are failing or remaining pending.
- For developer-level troubleshooting, see the [Complete Guide to Scheduled Events with Subscriptions](https://woocommerce.com/document/subscriptions/develop/complete-guide-to-scheduled-events-with-subscriptions/#debugging-wp-cron).

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to...
				![](https://woocommerce.com/wp-content/uploads/2013/05/Product_Addons_icon-marketplace-160x160-2.png)

### Product Add-Ons

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer add-ons like gift wrapping, special messages or other special options for your products.

---

