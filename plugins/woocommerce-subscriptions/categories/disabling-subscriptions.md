# Disabling Subscriptions

*Category from WooCommerce Subscriptions documentation*

---

## Deactivating WooCommerce Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/disabling-subscriptions/](https://woocommerce.com/document/subscriptions/disabling-subscriptions/)

# Deactivating WooCommerce Subscriptions

			Deactivating plugins often helps troubleshoot problems. However, deactivating [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) can cause issues because it powers your store’s recurring billing system. Potential problems include:

- Missed scheduled renewal payments, [including automatic retries](https://woocommerce.com/document/subscriptions/failed-payment-retry/).
- Subscriptions not transitioning to expired status at term end.
- Prepaid subscriptions not transitioning to cancelled status at term end.

This guide provides a general overview of how to safely deactivate WooCommerce Subscriptions and manage related processes to avoid disruptions to your store.

**Further Reading:**If you’re doing testing and have a staging site or you’re migrating your store, read [How Subscriptions Handles Staging Sites and Migrations](https://woocommerce.com/document/subscriptions/subscriptions-handles-staging-sites/)

## Stop Scheduled Actions

[↑ Back to top](#doc-title)

When deactivating WooCommerce Subscriptions, stop associated scheduled actions. WooCommerce’s [Action Scheduler](https://actionscheduler.org/) library processes these events, which continue running even if WooCommerce Subscriptions is inactive. This can trigger events without executing the appropriate actions, such as creating renewal orders or processing payments. These events won’t be flagged as failures.

To stop Action Scheduler download and activate the [Action Scheduler Disable Default Runner](https://github.com/Prospress/action-scheduler-disable-default-runner/) plugin

This stops the Action Scheduler queue completely, halting actions for all plugins using it, including WooCommerce Subscriptions.

## Deactivate a Payment Gateway Plugin

[↑ Back to top](#doc-title)

If you disable a gateway plugin (by clicking Deactivate under the plugin in the **Plugins** menu) while Subscriptions is active, subscriptions that use that payment gateway for automatic renewal payments convert to [manual renewals](https://woocommerce.com/document/subscriptions/renewal-process/#deactivating-a-payment-gateway-associated-with-a-subscription). Customers must log in and pay using a different gateway, as automatic payments won’t process.

Merchants typically complete this process when migrating customers to a new payment gateway, often as the final step in a complex subscription migration procedure.

## Turn off a Payment Method

[↑ Back to top](#doc-title)

You can disable individual payment methods via **WooCommerce > Settings > Payments.** This prevents new subscriptions from using the deactivated payment method but allows active, existing subscriptions to renew as expected. [Automatic refunds](https://woocommerce.com/document/woocommerce-refunds/#automatic-refunds) for subscription orders also remain possible.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to content/products and member discounts.
				![](https://woocommerce.com/wp-content/uploads/2019/03/All_Products_Woo_Subscriptions_icon-marketplace-160x160-2.png)

### All Products for WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer your existing products on subscription, with this powerful add-on for WooCommerce Subscriptions.

---

