# Logs 2

*Category from WooCommerce Subscriptions documentation*

---

## Subscriptions Logs

**Source:** [https://woocommerce.com/document/subscriptions/logs-2/](https://woocommerce.com/document/subscriptions/logs-2/)

# Subscriptions Logs

			WooCommerce Subscriptions creates a variety of WooCommerce logs to record errors and other events. Recording these events can be important, especially when an issue occurs and the cause needs investigation. These logs record histories of different events that can provide clues about the cause and repercussions of an issue.

The types of logs you’ll find for WooCommerce Subscriptions are

- **Error Logs** – Failed Status Change Logs, Failed Scheduled Action Logs, Failed PayPal IPN logs, and PayPal Logs.
- **Upgrade Logs**– General notes about upgrades.
- **Switch Logs** – Log that records details about when and how a subscription was upgraded, downgraded, or items switched.
- **PayPal Standard Logs** – While not directly created by WooCommerce Subscriptions, it does add certain, related subscription info to them.

## Where to find WooCommerce Subscriptions error logs

[↑ Back to top](#doc-title)

You can find the subscription logs on the WP Admin dashboard of a site. To view the WooCommerce Subscriptions (and other WooCommerce-related) logs:

1. Go to **WooCommerce > Status**
2. Click on the **Logs** tab
3. Click on the **Source** name of a log to view its contents
4. Or arrange logs by **Source**, **Date created**, **Date modified**, or **File size**, by clicking the respective column heading.

Log names will begin with 
```
wcs-
```

 and, like other logs, contain the date it was created, the date it was last updated, and the filesize of the log.

![WooCommerce Subscription logs start with "wcs" when viewing the Logs tab under WooCommerce > Status. ](https://woocommerce.com/wp-content/uploads/2024/07/the-logs-tab-under-status.webp?strip=all&w=704)WooCommerce Logs Tab

## Subscription Error Logs

[↑ Back to top](#doc-title)

The following sections explain the different types of Subscriptions error logs you’ll find in **WooCommerce > Status Logs**.

### Failed Status Change Logs

[↑ Back to top](#doc-title)

This log is labeled 
```
wcs-update-status-failures
```

. This log records when there has been an error when updating the status of a subscription.

Example log entry:

![](https://woocommerce.com/wp-content/uploads/2018/10/2_logs_status_change.png?strip=all&w=704)Failed Status Change Log Example

### Failed Scheduled Action Logs

[↑ Back to top](#doc-title)

This log has a failed-scheduled-actions label. Failed scheduled actions are recorded here along with information such as the scheduled action’s name and ID, how long it was attempted, and the arguments.

Example log entry:

![](https://woocommerce.com/wp-content/uploads/2018/10/failed-scheduled-actions-log.webp?strip=all&w=704)Failed Scheduled Action Log Example

## Upgrade Logs

[↑ Back to top](#doc-title)

When WooCommerce Subscriptions updgrades to a new version, for example, from version 6.4.1 to 6.5.0, the logs record various bits of information about the upgrade. The information is stored in a log named 
```
wcs-upgrade
```

, and is listed under the **WooCommerce > Status > Logs**. The upgrade log is generated on the date an upgrade takes place, so multiple logs may exist.

![The wcs-upgrade log appears on the list of WooCommerce logs](https://woocommerce.com/wp-content/uploads/2018/10/wcs-upgrade-log-list-view.webp?strip=all&w=704)The wcs-upgrade log appears on the list of WooCommerce logs

### General Upgrade Notes Logs

[↑ Back to top](#doc-title)

This log records deatils about which other plugins and extensions, and their versions, were active at the time of the update. Each log can contain the following:

- Timestamp of when the upgrade occurred
- The version number for the Subscriptions  update
- Old version of Subscriptions updated from
- WooCommerce version during this upgrade
- WooCommerce database version
- Environment info, which includes WordPress version
- Info about active plugins, such as name, author, and version
- Most of the information has a 
```
Notice
```

 label, unless an error occurs.

Example log entry:

![An example WooCommerce Subscriptions upgrade log](https://woocommerce.com/wp-content/uploads/2018/10/wcs-upgrade-log-contents-sample.webp?strip=all&w=704)An example WooCommerce Subscriptions upgrade log

## Subscription Switch Logs

[↑ Back to top](#doc-title)

The Subscription Switch Log records events related to when a customer upgrades, downgrades, or changes their subscriptions. This is a primarily a source of information for store managers to refer back to if an error occurs or they need to track down information about the switch.

The 
```
wcs-switch-cart-items
```

 log records the following:

- A timestamp with the subscription number
- The canonical product ID of the product involved
- The unix timestamp for when the next payment is due
- The unix timestamp for when an associated order was last paid
- How many days there were in the last subscription cycle
- How much was paid during the current period
- The old price-per day
- Days in the new cycle
- The new price per day
- What type of switch occured

Example entry log:

![An example WooCommerce switch cart items log](https://woocommerce.com/wp-content/uploads/2018/10/wcs-switch-cart-items-log.webp?strip=all&w=704)An example WooCommerce switch cart items log

## PayPal Standard Logs

[↑ Back to top](#doc-title)

Support for PayPal Standard is **very limited** and you might be asked to switch to PayPal Payments if troubleshooting cannot fix reported issues. Since WooCommerce version 5.5.0, [PayPal Standard is hidden for new installations](https://developer.woocommerce.com/2021/07/12/developer-advisory-paypal-standard-will-be-hidden-on-new-installs/). We strongly encourage everyone using PayPal Standard to use the recommended **PayPal Payments extension instead**, which is our full-stack solution (credit card processing, PayPal checkout, subscriptions, pay later options, etc).

### PayPal Logs

[↑ Back to top](#doc-title)

This log is labeled 
```
paypal
```

. Subscriptions does not generate this log—it’s created by WooCommerce core—but it adds to it. This log records PayPal Standard IPNs, the actions taken with them, and errors.

Example log entry:

![](https://woocommerce.com/wp-content/uploads/2018/10/5_logs_paypal.png?strip=all&w=704)PayPal Log Example

### Failed PayPal Standard IPN Logs

[↑ Back to top](#doc-title)

This labeled 
```
wcs-ipn-failures
```

. This log records fatal errors that occur while a PayPal IPN is being processed when using PayPal with the Woo Subscriptions extension. These error messages will contain info such as a stack trace for where the error occurred.

Example log entry:

![](https://woocommerce.com/wp-content/uploads/2018/10/4_logs_ipn_failures.png?strip=all&w=704)Failed PayPal IPN Log Example

					
		
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

