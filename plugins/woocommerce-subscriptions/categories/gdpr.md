# Gdpr

*Category from WooCommerce Subscriptions documentation*

---

## Subscriptions and the GDPR

**Source:** [https://woocommerce.com/document/subscriptions/gdpr/](https://woocommerce.com/document/subscriptions/gdpr/)

# Subscriptions and the GDPR

			Woo Subscriptions supports the tools that enable store managers to comply with the[General Data Protection Regulation](https://eugdpr.org/)(GDPR). This support is built on the functionality included in[WooCommerce](https://woocommerce.wordpress.com/2018/05/04/woocommerce-3-4-gdpr-features/)and[WordPress](https://wordpress.org/news/2018/05/wordpress-4-9-6-privacy-and-maintenance-release/). Below is information on how these two handle customer data.
## Data Subscriptions Uses

[↑ Back to top](#doc-title)
Subscriptions accesses and records data similar to[WooCommerce](https://woocommerce.wordpress.com/2018/05/04/woocommerce-3-4-gdpr-features/). The data used by the two includes:
- Subscription ID Number
- Date Created
- Recurring Total
- Subscription Items
- IP Address
- Browser User Agent
- Billing Address
- Shipping Address
- Phone Number
- Email Address
- Payment Gateway tokens

### Data retention

[↑ Back to top](#doc-title)

#### Inactive user data retention

With WooCommerce, it is possible to erase customers’ data after a set amount of time. This setting is under**WooCommerce > Settings > Accounts & Privacy > Personal data retention**. With Woo Subscriptions, customers who have at least one subscription are exempt from this cleanup. This is to**prevent customers who have subscriptions from having their data removed while they still have a subscription**.

![Inactive Account Cleanup Setting - Subscribers Exempt](https://woocommerce.com/wp-content/uploads/2019/03/gdpr_1_exempt_cleanup.png?strip=all&w=704)Inactive Account Cleanup Setting – Subscribers Exempt

#### Ended subscription data retention

It is possible to anonymize data associated with subscriptions after a set amount of time. This applies to subscriptions that are ended, meaning that they have a status of cancelled, expired, switched, or trash.

To find this setting:
1. Go to**WooCommerce > Settings > Accounts & Privacy**
2. Scroll to the section labeled**Personal data retention**
3. The setting is called **Retain ended subscriptions**

![Retain Ended Subscriptions Setting](https://woocommerce.com/wp-content/uploads/2019/03/gdpr_2_data_retention.png?strip=all&w=704)Retain Ended Subscriptions Setting
## Export or Erase Customer Data

[↑ Back to top](#doc-title)
The ability to[export](https://codex.wordpress.org/Tools_Export_Personal_Data_Screen)or[erase](https://codex.wordpress.org/Tools_Erase_Personal_Data_Screen)customer data is built into tools in[WordPress](https://wordpress.org/news/2018/05/wordpress-4-9-6-privacy-and-maintenance-release/). We supports these tools by including subscription data as a part of the data that is exported or erased.
### Data export

[↑ Back to top](#doc-title)
When data is exported, the user is given a file that contains their data. Both extensions add each subscription the user has, and data that is connected to each subscription, to this file. Similarly, when data is erased, each extension erases this data.

Example of the Woo Subscriptions portion of a data export:

![Example Subscription Related Portion of Data Export](https://woocommerce.com/wp-content/uploads/2019/03/gdpr_3_data_export.png?strip=all&w=704)Example Subscription Related Portion of Data Export
### Data erasure

[↑ Back to top](#doc-title)

#### Data erasure setting

To remove personal data from subscriptions during a data erasure request, a setting must be enabled. To enable this setting:
1. Go to**WooCommerce > Settings > Accounts & Privacy**
2. Go to the section labeled**Account erasure requests**
3. Check the box labeled **Remove personal data from subscriptions**

![Enable Removal of Personal Data from Subscriptions](https://woocommerce.com/wp-content/uploads/2019/03/gdpr_4_privacy_settings.png?strip=all&w=704)Enable Removal of Personal Data from Subscriptions

When personal data is erased and the data removed from the corresponding subscriptions, the subscriptions will be cancelled.

#### Bulk erase data from subscriptions

It is also possible to erase personal data on subscriptions in bulk. The corresponding subscriptions will then be cancelled and have the personal data removed. This only removes the data from the subscriptions chosen and not the related orders.

To erase personal data on subscriptions:
1. Go to the**WooCommerce > Subscriptions**administration screen
2. Select the subscriptions that you wish to remove personal data from using the checkboxes
3. In the**Bulk Actions**dropdown, select**Cancel and remove personal data**
4. Click **Apply**

![Bulk Remove Personal Data from Subscriptions](https://woocommerce.com/wp-content/uploads/2019/03/gdpr_5_bulk_edit.png?strip=all&w=704)Bulk Remove Personal Data from Subscriptions
## Privacy Policy Guide

[↑ Back to top](#doc-title)
In order to ensure store managers have what they need to comply with the GDPR, WordPress includes a[privacy policy guide](https://wordpress.org/news/2018/05/wordpress-4-9-6-privacy-and-maintenance-release/). Subscriptions adds a section to this guide to help store managers understand what information Subscriptions uses and be better able to write their own privacy policies.

To see Subscriptions’ section in the privacy policy guide:
1. Go to the WordPress administrator dashboard
2. Go to**Settings > Privacy**and click the link to*Check out our guide*
3. Scroll to the section labeled**Source: Woo Subscriptions**

OR
1. Go to 
```
https://example.com/wp-admin/tools.php?wp-privacy-policy-guide#wp-privacy-policy-guide-woocommerce-subscriptions
```

, replacing 
```
example.com
```

 with your site’s URL.

![Subscriptions Section in the Privacy Policy Guide](https://woocommerce.com/wp-content/uploads/2019/03/gdpr_6_subscriptions_policy.png?strip=all&w=704)Subscriptions Section in the Privacy Policy Guide

					
		
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

