# Restore Backup Subscriptions

*Category from WooCommerce Subscriptions documentation*

---

## Restoring backups with WooCommerce Subscriptions

**Source:** [https://woocommerce.com/document/subscriptions/restore-backup-subscriptions/](https://woocommerce.com/document/subscriptions/restore-backup-subscriptions/)

# Restoring backups with WooCommerce Subscriptions

			Having a regular backup schedule for your site is always a good idea. Backing up a site is one thing; restoring data from backup can be challenging.

Restoring sites with Woo Subscriptions from backup is complex. Read this documentation to understand the challenges, and please don’t hesitate to contact us for support if you have questions.

## Potential risks of restoring from backup

[↑ Back to top](#doc-title)

**WooCommerce**:

- Missing orders placed between the current date and the backup restore date (gap period)
- Missing customer accounts, saved payment tokens, and customer information collected during the gap period

**Subscriptions**:

- Missing subscriptions purchased during the gap period
- Missing renewal orders / all WooCommerce site-side records of renewals processed during the gap period, and
- Subscriptions will automatically re-run any renewals processed during the gap period (scheduled actions already processed will be restored to *Pending* with the backup). For more information, see our [action scheduler documentation](https://woocommerce.com/document/understanding-the-woocommerce-system-status-report/scheduled-actions/).

## Approach when restoring from a backup

[↑ Back to top](#doc-title)

Many of the actions described below are developer-level tasks. We can describe what needs to be done, but we won’t be able to help you with the implementation.

Here is a list of tasks to keep in mind when restoring from a backup:

- Remove the scheduled actions that have already been processed
- [Manually update the Next Payment Date](https://href.li/?https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-11) on any subscriptions whose renewals were processed during that period. When restoring the backup, you’ll also be wiping out the future scheduled actions and changing the payment date for active subscriptions. By not allowing the *Pending*scheduled actions to process (to prevent duplicate charges), the site will miss the process that sets the Next Payment Date.
- Recreate order and [subscription data](https://href.li/?https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-1) for customers who purchased during the gap period.
- If the subscriptions are tokenized, you should be able to get the saved payment tokens from the current site copy, manually recreate customer accounts, and [add the tokens to the manually created subscriptions](https://href.li/?https://woocommerce.com/document/subscriptions/add-or-modify-a-subscription/#section-8).
- Additionally, you may need to edit the database to add the customer’s saved payment method to the WooCommerce payment tokens tables.

## Best practices for migrating between hosts

[↑ Back to top](#doc-title)

When moving between hosts, the biggest concern for Subscriptions is maintaining the integrity of the database.

### Acceptable: Import/export

[↑ Back to top](#doc-title)

You can use our [migration tools](https://woocommerce.com/document/subscriptions/migrating-subscribers-woocommerce-subscriptions/#bulk-subscription-csv-importer) to export content from the old site and then import it into the new site. In theory, backup and restore options will work similarly.

This option is acceptable, but there’s always a risk with importing and exporting – for example, payment tokens can stop working correctly.

### Best: Import and export the database

[↑ Back to top](#doc-title)

The best option is to keep the database intact:

1. Move the database to the new server
2. Move the files to the new server
3. Update the database information in the 
```
wp-config.php
```

 file to match the newly imported database on the new server.

The advantage here is that everything is complete, such as subscription data and payment tokens, but it requires more technical expertise.

## Best practice for site redesign

[↑ Back to top](#doc-title)

#### Recommended approach

The ideal approach is one where the database stays intact. The trick is to do the testing on a cloned site, then apply the changes to the existing site – that means that the production database doesn’t move or shift, and provides continuity. Here’s an outline of the approach we recommend:

1. Clone the **live** site; this will be the staging site. Most hosting providers can help with this, or use the [WP Staging](https://wordpress.org/plugins/wp-staging/) plugin to create a clone in your dashboard.
2. On the **staging** site, delete everything that you’d like to redesign. This may include pages, posts, themes, and plugins besides WooCommerce, WooCommerce Subscriptions, and the payment gateway. This will help it feel like a fresh installation.
3. On the **staging** site, design the new site’s look and feel. Test thoroughly.
4. When you’re ready to apply the changes to the **live** site,  make a backup of the live site and then put it in maintenance mode while you are applying changes – this will ensure customers don’t see your site while it’s getting its makeover.
5. On the **live** site, remove any unnecessary content such as old pages, posts, plugins, themes, etc. Ideally, it’ll be a match for the staging site.
6. On the **staging** site, export the updated content: the theme, plugins, pages,  posts, and settings from the newly designed site.
7. On the **live** site, import the updated files and update any changed settings. When you’re done testing, turn off maintenance mode.

With this approach, orders, subscriptions, and payment tokens don’t move between a live and staging site. This significantly reduces the risk of errors, as the database remains fully intact.

#### Non-recommended approach

This is often cited as the best way to handle a migration or site redesign, but it’s a bad approach when WooCommerce Subscriptions are involved.

1. Copy the live site to a staging or development environment
2. Redesign the site or build a new site from scratch on a dev server
3. Just prior to bringing the new site live, import Customers, Orders, and Subscriptions (and other WooCommerce data) from the live site
4. Bring the new site live

We won’t be able to help troubleshoot issues with Subscriptions that have been exported/imported in this manner.

					
		
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

