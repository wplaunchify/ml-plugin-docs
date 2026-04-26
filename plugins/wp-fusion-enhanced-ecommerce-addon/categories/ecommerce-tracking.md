# Ecommerce Tracking

*Category from WP Fusion - Enhanced Ecommerce Addon documentation*

---

## Groundhogg Enhanced Ecommerce

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/groundhogg-ecommerce/](https://wpfusion.com/documentation/ecommerce-tracking/groundhogg-ecommerce/)

### Overview

WP Fusion’s Enhanced Ecommerce Addon (available for Plus and Professional license holders) supports sending ecommerce transaction data as deals to your [Groundhogg](https://wpfusion.com/go/groundhogg) CRM for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)
- and [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)

WP Fusion’s enhanced ecommerce integration with Groundhogg is supported when connected to Groundhogg either on the same site, or [via the REST API](https://wpfusion.com/tutorials/running-a-headless-crm-with-wp-fusion-and-groundhogg/).

**Note:** This functionality requires the [Sales Pipeline extension](https://www.groundhogg.io/downloads/pipeline/?aff=124) for Groundhogg.

### Getting started

Once you install the addon, the Enhanced Ecommerce tab will appear in the WP Fusion settings. Select a default pipeline and stage from the dropdown to enable the integration.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/08/groundhogg-enhanced-ecom-settings-1024x341.jpg)

If you’ve just added a new pipeline or stage, click *Resynchronize Available Tags and Fields* at the top of the page to load the latest options from Groundhogg.

### How it works

When a customer checks out on your store, a new deal will be created in your selected Groundhogg pipeline and stage.

The deal title will be name of the order in WooCommerce (or other supported ecommerce plugin), and the deal value will be set to the total amount of the sale.

![A deal created by WP Fusion in Groundhogg](https://wpfusion.com/wp-content/uploads/2024/08/groundhogg-enhanced-ecom-deal-1024x635.jpg)Deals created in Groundhogg include the order total and purchased products.
The deal will be associated with the contact who made the purchase, and any purchased products and line items will be attached to the deal.

![groundhogg pipeline reporting.png](https://wpfusion.com/wp-content/uploads/2024/08/groundhogg-pipeline-reporting.png-1024x754.webp)Groundhogg’s [Sales Pipeline extension](https://www.groundhogg.io/downloads/pipeline/?aff=124) includes extensive automation and reporting features for managing your entire sales funnel.

### WooCommerce order statuses

If you’re using WooCommerce you can also associate WooCommerce order statuses with deal stages in Groundhogg.

This setting appears under the Enhanced Ecommerce tab in the WP Fusion settings.

![screenshot](https://wpfusion.com/wp-content/uploads/2024/08/groundhogg-enhanced-ecom-woo-status-stages-1024x634.jpg)With WooCommerce you can map order statuses with deal stages in Groundhogg.
When the order status is updated in WooCommerce, the deal stage will be updated in Groundhogg.

**Warning:** It is recommended *not* to sync **Pending payment** orders with Groundhogg. When this is enabled, WP Fusion needs to create a contact record and a deal in Groundhogg as soon as the pending order is created in WooCommerce, and then update it less than a second later when the payment is processed.

This slows down your checkout with many duplicate API calls and in most cases isn’t necessary. A more performant method of tracking incomplete payments is to use [Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/hubspot-abandoned-cart/).

### Modifying the API data

WP Fusion supports using [filters](https://developer.wordpress.org/plugins/hooks/filters/) to modify the data sent to Groundhogg with an ecommerce order.

#### Ignore free orders

This example bypasses creating a deal for any free orders.

```
function ignore_free_orders( $deal, $order_id ) {

	if ( empty( $deal['deal_value'] ) ) {
		return false;
	}

	return $deal;

}

add_filter( 'wpf_ecommerce_groundhogg_add_deal', 'ignore_free_orders', 10, 2 );
```

#### Exclude taxes

This example subtracts the amount of tax paid (if applicable) from the deal total.

```
function orders_tax_exclusive( $deal, $order_id ) {

	$order = wc_get_order( $order_id );

	$deal['deal_value'] -= $order->get_total_tax();

	return $deal;

}

add_filter( 'wpf_ecommerce_groundhogg_add_deal', 'orders_tax_exclusive', 10, 2 );
```

---

## Salesforce Enhanced Ecommerce

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/)

### Overview

WP Fusion’s Enhanced Ecommerce Addon (available for Plus and Professional license holders) supports sending ecommerce transaction data as [Orders](https://help.salesforce.com/s/articleView?id=sf.order_overview.htm&type=5) to your Salesforce account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### Getting started

Once you install the addon, the Enhanced Ecommerce tab will appear in the WP Fusion settings. To begin syncing orders with Salesforce, you must set an account ID for all orders.

![](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-ecommerce-account-id-setting-1024x383.jpg)

Once this is set, your new orders will begin syncing into Salesforce automatically.

### How it works

When a customer checks out on your site, WP Fusion will create a new order in Salesforce with the order label, date, and total.

The products purchased will be added to the order as items, including their individual prices and quantities.

This order will be associated with the contact record who made the purchase.

#### Associating products with Salesforce products

When editing any product, download, plan, or membership level in any of the [supported Enhanced Ecommerce plugins](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/#supported-plugins), you will see a dropdown where you can select an associated Salesforce product.

![](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-woo-product-setup-1024x494.jpg)

If the product you’re looking for doesn’t appear, click the Refresh Available Tags and Fields button in the WP Fusion settings to update the list.

If you don’t select a product, then at checkout WP Fusion will:

1. Attempt to find a product in Salesforce by searching its name and SKU
2. If no match is found, a new product will be created based on the product details in WordPress

### How it looks

![](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-ecommerce-orders-1024x788.jpg)Orders appear in Salesforce with their details and order items.
![](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-ecommerce-order-item-1024x594.jpg)Order items are associated with the order and the corresponding pricebook entry.

### Known limitations

#### Accounts

Salesforce requires an Account for all new orders. At the moment, WP Fusion associates all orders with a single account ID (set in the WP Fusion settings). We are exploring options for automatically creating Accounts based on customer data, and this will be included in a future release.

#### Custom fields

The integration does not currently support updating custom fields on orders or products (though it is supported via filters, see below). We will make it a priority to find a solution for this in upcoming updates.

#### Pricebooks

At the moment WP Fusion just interfaces with the [standard pricebook](https://help.salesforce.com/s/articleView?id=sf.pricebooks_landing_page.htm&type=5). We will look into adding support for multiple pricebooks in a future update.

#### Field security

![a screenshot of the wp fusion activity log shows error messages related to a salesforce api call, highlighting an invalid field error and processing halted due to a previous unsuccessful operation. filters and log options are visible at the top.](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-ecommerce-field-errors-1024x451.jpg)

Salesforce uses a system of **field-level security** to control which profiles can view or edit specific fields on objects. Even if the 
```
Name
```

 field exists on the 
```
Order
```

 object, if the user profile associated with the connected Salesforce API user does not have access to it, Salesforce responds as if the field does not exist at all.

This results in WP Fusion logging an 
```
INVALID_FIELD
```

 error, and potentially halting further processing due to 
```
PROCESSING_HALTED
```

.

To resolve this error:

1. Log in to Salesforce with an account that has administrative privileges.
2. Go to **Setup** → **Object Manager** → **Order**.
3. Under the Order object, click on **Fields & Relationships**.
4. Click on the **Name** field.
5. Click on **Set Field-Level Security**.
6. Ensure that the field is **visible** to the profile(s) used by your Salesforce integration (e.g., “API User”).
7. Save changes.

### Modifying the API data

WP Fusion supports using [filters](https://developer.wordpress.org/plugins/hooks/filters/) to modify the data sent to Salesforce with an ecommerce order.

The order data can be modified using the 
```
wpf_ecommerce_salesforce_add_deal
```

 filter.

In this example, we overwrite the order title to use a custom title, *My custom order title*, with the order number.

```
function my_custom_deal_properties( $deal, $order_id ) {

	/* $deal is structured like:

        $deal['compositeRequest'] = array(
            '0' => array(
                    'method' => 'POST',
                    'url' => '/services/data/v57.0/sobjects/Order',
                    'referenceId' => 'orderRef',
                    'body' => array(,
                        'AccountId' => '0013u00001AD9OzAAL',
                        'Name' => 'WooCommerce Order #1989',
                        'EffectiveDate' => '2023-06-06',
                        'Status' => 'Draft',
                        'Pricebook2Id' => '01s6A000001rZ0EQAU',
                        'ShipToContactId' => '0036A0000078r6QQAQ',
                        'BillToContactId' => '0036A0000078r6QQAQ',
                        'CustomerAuthorizedById' => '0036A0000078r6QQAQ',
                    ),
                ),
            '1' => array(
                    'method' => 'POST',
                    'url' => '/services/data/v57.0/sobjects/OrderItem',
                    'referenceId' => 'orderItemRef0',
                    'body' => array(,
                        'OrderId' => '@{orderRef.id}',
                        'PricebookEntryId' => '01u3u00000CGLymAAH',
                        'Quantity' => '1',
                        'UnitPrice' => '99.00',
                    ),
                )
            )
        ); */

	$deal['compositeRequest'][0]['body']['Name'] = 'My custom order title #' . $order_id;

	return $deal;

}

add_filter( 'wpf_ecommerce_salesforce_add_deal', 'my_custom_deal_properties', 10, 2 );
```

---

## MailerLite Enhanced Ecommerce

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/](https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/)

### Overview

WP Fusion’s Ecommerce Addon (available for Plus and Professional license holders) supports sending ecommerce transaction data to your [MailerLite](https://wpfusion.com/go/mailerlite) account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

Using WP Fusion you can see real-time stats in MailerLite on the revenue from your campaigns and workflows, as well as track order counts and lifetime values for your subscribers.

### Getting Started

Install and activate the Ecommerce Addon, and make sure the MailerLite ecommerce campaign tracking script is [enabled on your site](https://developers.mailerlite.com/guides/ecommerce.html#e-commerce-campaign-tracking).

You can either add this yourself, [using Google Tag manager](https://www.mailerlite.com/help/how-to-add-your-mailerlite-tracking-script-to-google-tag-manager), or you can simply check the box for [MailerLite Site Tracking](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#mailerlite) from the General tab in the WP Fusion settings.

That’s it! Your new customers and orders will automatically be synced to MailerLite as they check out on your store.

### Additional settings

There are two additional settings on the Enhanced Ecommerce tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2023/06/mailerlite-ecom-general-settings-1024x384.jpg)

#### Sync attributes

If you’re using a WooCommerce extension which attaches additional metadata to orders (i.e. [WooCommerce Product Addons](https://wpfusion.com/documentation/ecommerce/woocommerce-addons/)) and you wish to see this data in MailerLite, check the box for **Sync Attributes**.

On most stores this isn’t necessary.

#### Sync product edits

By default, WP Fusion syncs your products with MailerLite as customers check out on your store. However, this means that you can only use a [Product Content Block](https://www.mailerlite.com/features/email-marketing-for-ecommerce) in an email with products that have already been purchased.

By enabling **Sync Product Edits**(with WooCommerce), WP Fusion will create and update products in MailerLite as they are published and edited in WooCommerce.

![](https://wpfusion.com/wp-content/uploads/2023/06/mailerlite-ecom-product-block-1024x425.jpg)Products from your ecommerce shop or membership platform in WordPress can be displayed in dynamic MailerLite email blocks.

### How it works

When a customer checks out on your site, WP Fusion will create a new order in MailerLite with the products purchased, the quantities, and total sale value.

#### How it looks

The basic level of integration will add two rows to the *Subscriber Details* panel showing your store name and the customer’s lifetime value and total orders count.

![](https://wpfusion.com/wp-content/uploads/2023/06/mailerlite-ecom-store-stats-1024x381.jpg)Any orders synced by any of WP Fusion’s ecommerce integrations will be used to update the lifetime values and total order counts on your subscribers’ records.
If you have enabled [MailerLite site tracking](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#mailerlite), you can also use WP Fusion to track the ecommerce performance of your automations and campaigns.

First create an automation or campaign and ensure that **E-commerce link tracking** is enabled.

![](https://wpfusion.com/wp-content/uploads/2023/06/mailerlite-ecom-enable-tracking-1024x526.jpg)

When a customer visits a link in the email to your store and makes a purchase, WP Fusion will attribute their order to that email.

You can then view the performance of your automation and campaign emails from the **E-commerce Stats** tab when editing any subscriber in MailerLite.

![](https://wpfusion.com/wp-content/uploads/2018/01/mailerlite-ecom-showing-campaign-revenue-1024x693.jpg)When the tracking script is enabled, you can view ecommerce performance from your automations and campaigns on subscribers in MailerLite.
You can also view the performance of individual campaigns by clicking the **E-commerce** tab when viewing any campaign report.

![](https://wpfusion.com/wp-content/uploads/2023/06/mailerlite-campaign-ecommerce-conversions-1024x727.jpg)Revenue in WordPress generated by MailerLite campaign emails show up in the campaign’s E-commerce report.

#### Products in emails

WP Fusion also makes your products and membership plans available for embedding into MailerLite emails.

To use this feature, open the visual email builder, add a product block, and click *Add products from your store*.

![](https://wpfusion.com/wp-content/uploads/2023/06/mailerlite-ecommerce-product-blocks-1024x644.jpg)WP Fusion’s Enhanced Ecommerce integration with syncs your products into MailerLite so they can be embedded in emails.
A window will open showing all the products that WP Fusion has synced with MailerLite, and you can select them and embed them in your email.

---

## HighLevel Enhanced Ecommerce

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/highlevel-ecommerce/](https://wpfusion.com/documentation/ecommerce-tracking/highlevel-ecommerce/)

### Overview

WP Fusion’s Enhanced Ecommerce Addon (available for Plus and Professional license holders) supports sending ecommerce transaction data as [Opportunities](https://help.gohighlevel.com/support/solutions/folders/48000666159) to your [HighLevel](https://wpfusion.com/go/highlevel) account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### Getting started

Once you install the addon, Opportunities will automatically be added to HighLevel when someone makes a purchase on your site.

The deal title will be name of the order in WooCommerce (or other supported ecommerce plugin), and the deal value will be set to the total amount of the sale.

You can set the default pipeline, stage, and status for new orders via the **Enhanced Ecommerce** tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2023/05/highlevel-ecommerce-settings-1-1024x370.jpg)

If you’ve just added a new pipeline or stage, click *Resynchronize Available Lists and Fields* on the **Setup** tab to load the latest values.

#### Duplicate opportunities

By default, HighLevel allows each contact to have a single opportunity in a pipeline. This will cause an error if you have a customer come back and place a new order.

To fix this, enable **Allow Duplicate Opportunity** in your HighLevel account settings.

![](https://wpfusion.com/wp-content/uploads/2023/05/highlevel-enable-duplicate-opportunities-1024x758.jpg)

For more information [see the HighLevel knowledgebase](https://help.gohighlevel.com/support/solutions/articles/48001066144-multiple-opportunities-for-the-same-person-in-the-same-pipeline).

### How it works

When a customer checks out on your site, WP Fusion will create a new opportunity in HighLevel with the order label, date, and invoice total. This sale data will be associated with the contact record who made the purchase.

### How it looks

![](https://wpfusion.com/wp-content/uploads/2023/05/highlevel-sales-pipelines-1024x498.jpg)WooCommerce orders are displayed in HighLevel pipeline stages.
![](https://wpfusion.com/wp-content/uploads/2023/05/highlevel-single-opportunity-1024x891.jpg)Clicking on an opportunity opens up a window where you can see the opportunity details.

### WooCommerce order statuses

If you’re using WooCommerce you can also associate WooCommerce order statuses with deal stages in HighLevel. This setting appears under the Enhanced Ecommerce tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2023/05/highlevel-woo-order-statuses-1024x729.jpg)

When the order status is updated in WooCommerce, the deal stage will be updated in HighLevel.

**Warning:** It is recommended *not* to sync **Pending payment** orders with HighLevel. When this is enabled, WP Fusion needs to create a contact record and a deal in HighLevel as soon as the pending order is created in WooCommerce, and then update it less than a second later when the payment is processed.

This slows down your checkout with many duplicate API calls and in most cases isn’t necessary. A more performant method of tracking incomplete payments is to use [Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/hubspot-abandoned-cart/).
**Note:**By default, running a WooCommerce Orders (Ecommerce addon) export operation from the Advanced settings tab will only export “paid” orders (Processing or Completed). However, if you have enabled additional order statuses for sync to a HighLevel pipeline, then running the export will process those additional statuses as well.

This can be used to export refunded or cancelled orders to HighLevel in addition to the paid orders.

### Modifying the API data

WP Fusion supports using [filters](https://developer.wordpress.org/plugins/hooks/filters/) to modify the data sent to HighLevel with an ecommerce order.

The order data can be modified using the 
```
wpf_ecommerce_highlevel_add_deal
```

 filter.

In this example, we overwrite the deal title to use a custom title, *My custom order title*, with the order number.

```
function my_custom_deal_properties( $deal, $order_id ) {

	/* $deal is structured like:

	$deal = array(
		'pipelineId'      => 'GB7VXCu6jGCkhBW8OBHG',
		'locationId'      => 'E2kFlpE3DXXglIFdWEl0',
		'name'            => 'WooCommerce Order #123',
		'pipelineStageId' => '4fa50d09-b7d3-4afb-81af-d09bd22bd628',
		'status'          => 'all',
		'contactId'.      => 'Qx9bKawvMwfhb9cINwKp',
		'monetaryValue'   => 100,
		'customFields'    => array(
			array(
				'key'         => 'custom_opportunity_field',
				'field_value' => 'Custom Field value',
			),
		),

	); */

	$deal['name'] = 'My custom order title #' . $order_id;

	return $deal;

}

add_filter( 'wpf_ecommerce_highlevel_add_deal', 'my_custom_deal_properties', 10, 2 );
```

To locate your custom field keys, head to Settings » Custom Fields in the HighLevel admin. The key will be the second part of the merge tag, in this case 
```
custom_opportunity_field
```

.

![](https://wpfusion.com/wp-content/uploads/2023/05/highlevel-custom-opportunity-fields-1024x454.png)

For more information on the supported parameters with HighLevel opportunities, see the [HighLevel API documentation](https://highlevel.stoplight.io/docs/integrations/802093aa63900-create-opportunity).

---

## Brevo Enhanced Ecommerce

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/brevo-enhanced-ecommerce/](https://wpfusion.com/documentation/ecommerce-tracking/brevo-enhanced-ecommerce/)

### Overview

WP Fusion’s Enhanced Ecommerce Addon (available for Plus and Professional license holders) supports sending ecommerce transaction data as Deals to your [Brevo](https://wpfusion.com/go/sendinblue) account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### Getting started

As of the v1.26.0 Enhanced Ecommerce update, WP Fusion supports both Orders and Deals with Brevo.

![screenshot of the wp fusion settings interface focused on the enhanced ecommerce tab. options to select transaction type as orders, deals, or both, with a dropdown for deal stage and a checkbox for syncing attributes and meta data as line items are visible. integration with brevo is also highlighted.](https://wpfusion.com/wp-content/uploads/2022/08/brevo-enhanced-ecommerce-1024x513.jpg)

The default for new sites is Orders, sites with existing pipelines and stages will default to Deals.

#### Orders

Orders are a new feature in Brevo that are part of the new [E-commerce portal](https://www.brevo.com/features/ecommerce/).

The E-commerce dashboard provides a more detailed insight into your store’s performance than was previously possible with Deals.

![the enhanced e commerce dashboard showcases analytics: revenue at 122.00, orders at 4, new customers at 4. brevos popular product impulse duffle generated revenue of 74.00. live feed shows no events identified in the past 24 hours, with a time comparison from feb 8 mar 9 and jan 8 feb 6.](https://wpfusion.com/wp-content/uploads/2022/08/brevo-ecommerce-overview-1024x776.jpg)Brevo’s new Ecommerce features provide enhanced reporting and product management features compared to Deals.
![the product performance dashboard offers an enhanced ecommerce view of four products: impulse duffle, hat, shirt green, and shirt. each item is detailed with metrics on orders, quantity, revenue, and retention percentages to empower data driven decision making.](https://wpfusion.com/wp-content/uploads/2022/08/brevo-ecommerce-product-performance-1024x484.jpg)The Brevo E-commerce portal includes detailed reports on product performance.
![screenshot of a contact profile in brevo. the main section provides enhanced ecommerce insights, featuring statistics and recent history with orders for green shirt and interactions from february 2023. the user friendly interface includes navigation menus on the left.](https://wpfusion.com/wp-content/uploads/2022/08/brevo-ecommerce-subscriber-orders-1024x890.jpg)Order details and ecommerce data are shown in detail on the subscriber record when using the new E-commerce Orders integration.
In most cases, we recommend configuring WP Fusion to create Orders in Brevo, since these more accurately reflect the order experience in WordPress, and have more powerful reporting and filtering features in Brevo.

#### Deals

As an alternative to (or in addition to) Orders, WP Fusion can also create “Deals” inside of sales pipelines in Brevo.

Once you install the Enhanced Ecommerce addon, WP Fusion will load your available deal stages from Brevo. You can also refresh the available stages at any time by clicking the Refresh Available Lists & Fields button in the WP Fusion settings.

To begin syncing deals with Brevo you must first select a **Deal Stage** for new deals from the Enhanced Ecommerce tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2022/08/brevo-enhanced-ecom-sales-pipelines-1024x535.jpg)WooCommerce orders appear as Deals in Brevo sales pipelines
The deal title will be name of the order in WooCommerce (or other supported ecommerce plugin), and the deal value will be set to the total amount of the sale.

![](https://wpfusion.com/wp-content/uploads/2022/08/brevo-enhanced-ecom-single-deal-1-1024x789.jpg)The single deal view shows the title and value, and the deal description contains a list of purchased products and their prices.

### How it works

When a customer checks out on your site, WP Fusion will create a new order and/or deal in Brevo with the order label, date, and invoice total.

This sale data will be associated with the subscriber record who made the purchase.

### WooCommerce order statuses

If you’re using WooCommerce you can also associate WooCommerce order statuses with deal stages in Brevo.

This setting appears under the Enhanced Ecommerce tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2022/08/sendinblue-woo-order-status-stages-1024x747.jpg)

When the order status is updated in WooCommerce, the deal stage will be updated in Brevo.

**Warning:** It is recommended *not* to sync **Pending payment** orders with Brevo. When this is enabled, WP Fusion needs to create a contact record and a deal in Brevo as soon as the pending order is created in WooCommerce, and then update it less than a second later when the payment is processed.

This slows down your checkout with many duplicate API calls and in most cases isn’t necessary. A more performant method of tracking incomplete payments is to use [Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).
**Note:**By default, running a WooCommerce Orders (Ecommerce addon) export operation from the Advanced settings tab will only export “paid” orders (Processing or Completed). However, if you have enabled additional order statuses for sync to a Brevo stage, then running the export will process those additional statuses as well.

This can be used to export refunded or cancelled orders to Brevo in addition to the paid orders.

### Modifying the API data

WP Fusion supports using [filters](https://developer.wordpress.org/plugins/hooks/filters/) to modify the data sent to Brevo with an ecommerce order.

#### Custom deal fields

At the moment WP Fusion doesn’t have a visual interface for associating WordPress data with custom deal attributes in Brevo.

However you can still make this work using the 
```
wpf_ecommerce_sendinblue_add_deal
```

 filter.

In this case we’re going to update the Order URL field, which has an internal name of 
```
order_url
```

, and update it with the edit link to a WooCommerce order.

```
function my_custom_deal_properties( $deal, $order_id ) {

	/* $deal is structured like:

	 $deal = array(
	 	 'name'              => 'WooCommerce Order #123',
	 	 'linkedContactsIds' => array( 123 ), // the contact ID of the customer.
	 	 'attributes' => array(
	 	 	 'deal_description' => 'Cool Product - $100', // the products purchased and prices.
	 	 	 'amount'           => 100, // the total amount.
	 	 	 'deal_stage'       => 'Completed', // the deal stage.
	 	 	 'close_date'       => '2023-05-16', // the order date.
	 	 ),
	 ); */

	$deal['attributes']['order_url'] = admin_url( 'post.php?post=' . $order_id . '&action=edit' ); // adds a custom attribute.

	return $deal;

}

add_filter( 'wpf_ecommerce_sendinblue_add_deal', 'my_custom_deal_properties', 10, 2 );
```

And here in Brevo you can see that when WP Fusion creates the deal, the custom properties are automatically populated:

![](https://wpfusion.com/wp-content/uploads/2022/08/brevo-custom-deal-attributes-1024x653.jpg)

---

## Ontraport Enhanced Ecommerce

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/)

### Overview

WP Fusion’s Ecommerce Addon (available for Plus and Professional license holders) now supports sending ecommerce transaction data to your Ontraport account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### Global Setup

There are several global settings for Enhanced Ecommerce with Ontraport. These are found within the WP Fusion settings, on the Enhanced Ecommerce tab. The default settings are appropriate for most stores, but you can change them if needed.

![](https://wpfusion.com/wp-content/uploads/2019/10/ontraport-ecommerce-global-1-1024x781.jpg)

#### Ontraport Pricing

WP Fusion can send product prices to Ontraport in two different ways:

- **Use product prices as set in Ontraport:**With this setting WP Fusion will just send the ID of the product that was purchased, and Ontraport will calculate the order totals based on the product price that’s set in Ontraport. This is useful if you have a multi-currency store or a store in a different currency than Ontraport supports. For example a product that sells for €100 on your site could be configured in Ontraport with a price of $111. When someone purchases the product, $111 would be recorded on the invoice in Ontraport.
- **Use product prices as paid at checkout:**This setting sends the product prices as they’re paid at checkout. With this setting a €100 purchase in WooCommerce would be recorded as a $100 purchase in Ontraport. It also works with discounts, so a $100 purchase in WooCommerce with a 20% off coupon would show as $80 in Ontraport.

#### Shipping Product

Ontraport doesn’t currently have an API method for tracking shipping charges. To get around this, WP Fusion can create a pseudo-product named “Shipping” which is added to your invoices and includes the shipping amount paid by the customer.

![](https://wpfusion.com/wp-content/uploads/2019/10/ontraport-ecommerce-shipping-1024x538.jpg)

By default WP Fusion will create a new product to record shipping charges automatically during checkout. To disable this feature select *Don’t Track Shipping* from the dropdown. You can also select a custom product to use to record shipping charges.

#### Taxes

By default WP Fusion excludes taxes from product prices sent over the API. However if you sell your products tax-inclusive (for example in Australia) you can select **Include in product prices**to send the product prices tax-inclusive.

Or, optionally, you can select a pre-existing tax object in Ontraport to be used for taxes on your products.

**Note:** If you’ve just created a tax object in Ontraport, click *Resynchronize Available Tags and Fields* from the Setup tab and reload the page to load the new tax object into the dropdowns.
![](https://wpfusion.com/wp-content/uploads/2019/10/ontraport-ecommerce-with-tax-1024x656.jpg)A WooCommerce purchase synced into Ontraport using WP Fusion, using a tax object with a 10% tax rate
When a tax object is selected, WP Fusion will send your product prices to Ontraport without tax, and Ontraport will then calculate the tax on the order based on the tax rate set on your tax object.

As an example, let’s imagine that **we’re selling a Hoodie for $5, and there’s a 10% tax configured in WooCommerce**. For each of the options in WP Fusion, the data would show in Ontraport as:

**Don’t sync taxes:**Hoodie: $5

Tax: $0 ($0.50 tax is ignored)

**Include in product prices:**Hoodie: $5.50 ($5 + $0.50 tax)

Tax: $0

**Existing Ontraport tax object set to 10%:**Hoodie: $5

Tax: $0.50 (calculated by Ontraport)

#### Sync Attributes

Some WooCommerce extensions (like WooCommerce Product Addons) collect additional information from the customer for certain products. For example a ring could have a custom engraving, or a shirt might have a size and a color.

Enabling **Sync Attributes** will add selected attributes as separate line items to the invoice in Ontraport. It’s recommended to leave this disabled unless you need to see that data in Ontraport.

### Product Setup

After you install the Ecommerce Addon (or update to the latest version), WP Fusion will load a list of all configured products in your Ontraport account.

When you go to configure a product in one of our supported ecommerce plugins, you’ll see a new dropdown field where you can link a product on your store with a product already in your Ontraport account.

![](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-product-config-1024x437.jpg)

If you don’t already have the products created in Ontraport, don’t worry… WP Fusion will automatically create them for you at the time of checkout, based on the existing details. WP Fusion will intelligently detect variable products in WooCommerce and create additional Ontraport products based on those variations.

### How it Works

When a customer checks out on your site, WP Fusion will create a new transaction in Ontraport with the products purchased, the quantities, and total sale value. This sale data will be tied to the contact record who made the purchase.

#### How it Looks

![](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-products-1024x300.jpg)Products dynamically added to the Ontraport products list, including variable products.
![](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-purchases-1024x326.jpg)Purchases will be tracked in Ontraport’s purchase logs and can be used in all reports.
![](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-customer-profile-1024x410.jpg)You can also view a customer’s purchase history from the Purchases tab within their contact record.

#### Video – Enhanced Ecommerce – Ontraport

### Refunds

If you refund an order in WooCommerce, or change an order’s status to Refunded, the transaction will automatically be updated in Ontraport.

![](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-order-refunded-1024x289.jpg)

### Affiliates / referral partners

WP Fusion will automatically detect Ontraport partner tracking cookies and will associate them with new orders sent over the API.

This will work as long as the 
```
oprid
```

 cookie is set, which requires [Ontraport site tracking](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/) to be enabled on your site.

![](https://wpfusion.com/wp-content/uploads/2019/10/ontraport-ecom-referrals-1024x304.jpg)

When a referral is recorded for an order it will be logged in the [WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/) with a message, “Recording referral for partner ID”.

### Modifying the API data

WP Fusion supports using [filters](https://developer.wordpress.org/plugins/hooks/filters/) to modify the data sent to Ontraport with an ecommerce order. The filter is 
```
wpf_ecommerce_ontraport_add_transaction
```

.

#### Custom affiliate logic

As an example, in this snippet we limit affiliate commissions based on the products in the order.

```
/**
 * Conditionally set the affiliate ID for a transaction.
 *
 * @link https://api.ontraport.com/doc/#the-order-object
 *
 * @param array $order_data The order data.
 * @param int   $order_id   The order ID in WordPress.
 * @return array The order data.
 */
function conditionally_set_affiliate( $order_data, $order_id ) {

	/* $order_data is structured like:

		$order_data = array(
			'objectID'          => 0,
			'contact_id'        => 123,
			'chargeNow'         => 'chargeLog',
			'trans_date'        => 1686818840000,
			'invoice_template'  => 0,
			'delay'             => 0,
			'external_order_id' => 1234, // order ID in WP.
			'oprid'             => 5, // affiliate ID.
			'offer'             => array(
				'products' => array(
					array(
						'name'     => 'Product name',
						'id'       => 123,
						'quantity' => 1,
						'sku'      => 'SKU',
					),
				),
			),
		);
	*/

	// If the order contains a product named "Widget", disable affiliate referrals.

	if ( isset( $order_data['oprid'] ) ) {

		// An affiliate is set.

		foreach ( $order_data['offer']['products'] as $product ) {

			if ( 'Widget' === $product['name'] ) {
				unset( $order_data['oprid'] );
			}
		}
	}

	return $order_data;

}

add_filter( 'wpf_ecommerce_ontraport_add_transaction', 'conditionally_set_affiliate', 10, 2 );
```

In this case, if the order has an affiliate ID set, and it contains a product called “Widget”, then the affiliate ID is removed from the order data and no referral will be awarded.

---

## Zoho Enhanced Ecommerce

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/zoho-ecommerce/](https://wpfusion.com/documentation/ecommerce-tracking/zoho-ecommerce/)

### Overview

WP Fusion’s Ecommerce Addon (available for Plus and Professional license holders) supports sending ecommerce transaction data as Deals to your Zoho account account, for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### Getting Started

Once you install the addon, Deals will automatically be added to Zoho when someone makes a purchase on your site. The default stage for new deals is *Closed (Won)*, but you can change this via the Enhanced Ecommerce tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2019/08/zoho-enhanced-ecommerce-settings-1024x631.jpg)

If you’ve just added a new stage, click Resynchronize on the Setup tab to load the latest options into the dropdown.

Because Zoho requires all deals to have a corresponding Account, you will also need to select an account from the Enhanced Ecommerce tab before deals can be created.

### How it Works

When a customer checks out on your site, WP Fusion will create a new deal in Zoho with the order label, date, and order total. This sale data will be associated with the contact record who made the purchase.

#### How it Looks

![](https://wpfusion.com/wp-content/uploads/2019/08/zoho-ecommerce-2-1024x803.jpg)WooCommerce orders shown in the Deals list in Zoho
![](https://wpfusion.com/wp-content/uploads/2019/08/zoho-ecommerce-3-1024x759.jpg)The deal is created with the total order value and associated with the contact who made the purchase
![](https://wpfusion.com/wp-content/uploads/2019/08/zoho-ecommerce-4-1024x412.jpg)The order details are added to the deal description field

#### Products

If you have access to products in Zoho CRM, you’ll have the option to associate your WooCommerce products with existing Zoho products.

**Note:** Products in Zoho are available on the Professional plan and higher. For an overview of Zoho plans and features, see the [Feature Availability chart](https://www.zoho.com/crm/help/feature-availability.html).
![](https://wpfusion.com/wp-content/uploads/2019/08/zoho-enhanced-ecom-product-1024x496.jpg)

To refresh the available options in the product dropdowns, click the Refresh Available Tags and Fields button from the main WP Fusion settings page.

If you do not select a product, a new one will be created automatically in Zoho the first time a customer checks out with that product.

![](https://wpfusion.com/wp-content/uploads/2019/08/zoho-enhanced-ecom-product-on-invoice-1024x554.jpg)

Each time a customer purchases the product, it will be associated with the new deal in Zoho.

**Note:** Because each product requires a separate API call to create and associate with the deal, this can slow down the order processing time for orders that have many products.

If you are noticing slowness when syncing orders to Zoho, you can disable the **Sync Products** option on the Enhanced Ecommerce settings tab.

#### Video – Enhanced Ecommerce – Zoho

### WooCommerce Order Statuses

If you’re using WooCommerce you can also associate each WooCommerce order status with a deal stage in Zoho. This setting appears under the Addons tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2019/08/zoho-ecommerce-5-1024x770.jpg)

When the order status is updated in WooCommerce, the deal stage will be updated in Zoho.

**Warning:** It is recommended *not* to sync **Pending payment** orders with Zoho. When this is enabled, WP Fusion needs to create a contact record and a deal in Zoho as soon as the pending order is created in WooCommerce, and then update it less than a second later when the payment is processed.

This slows down your checkout with many duplicate API calls and in most cases isn’t necessary. A more performant method of tracking incomplete payments is to use [Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).
**Note:**By default, running a WooCommerce Orders (Ecommerce addon) export operation from the Advanced settings tab will only export “paid” orders (Processing or Completed). However, if you have enabled additional order statuses for sync to a Zoho pipeline, then running the export will process those additional statuses as well.

This can be used to export refunded or cancelled orders to Zoho in addition to the paid orders.

### Modifying the API Data

WP Fusion supports using filters to modify the data sent to Zoho with an ecommerce order.

#### Ignore Free Orders

This example bypasses creating a deal for any free orders.

```
function ignore_free_orders( $data, $order_id ) {
    if ( empty( $data['Amount'] ) ) {
        return false;
    }
    return $data;
}
add_filter( 'wpf_ecommerce_zoho_add_deal', 'ignore_free_orders', 10, 2 );
```

#### Exclude Taxes

This example subtracts the amount of tax paid (if applicable) from the deal total.

```
function orders_tax_exclusive( $data, $order_id ) {
    $order = wc_get_order( $order_id );
    
    $data['Amount'] -= $order->get_total_tax();
    $data['Expected_Revenue'] -= $order->get_total_tax();
    
    return $data;
}
add_filter( 'wpf_ecommerce_zoho_add_deal', 'orders_tax_exclusive', 10, 2 );
```

#### Custom Deal Fields

You can add custom fields to your Zoho deals using the 
```
wpf_ecommerce_zoho_add_deal
```

 filter. The data structure for Zoho deals includes standard fields like Deal_Name, Amount, Stage etc.

```
function my_custom_deal_properties( $data, $order_id ) {
    /* $data is structured like:
    $data = array(
        'Deal_Name'        => 'WooCommerce Order #123',
        'Account_Name'     => $account,
        'Contact_Name'     => $contact_id,
        'Closing_Date'     => date('Y-m-d'),
        'Stage'            => $stage,
        'Amount'           => 123.00,
        'Expected_Revenue' => 123.00,
        'Description'      => $description,
        'Currency'         => 'USD'
    ); */

    // Add custom field
    $data['Custom_Field'] = 'Custom Value';
    
    // Add order edit link
    $data['Order_Link'] = admin_url( 'post.php?post=' . $order_id . '&action=edit' );

    return $data;
}
add_filter( 'wpf_ecommerce_zoho_add_deal', 'my_custom_deal_properties', 10, 2 );
```

For more information, [see the Zoho documentation on updating records](https://www.zoho.com/crm/developer/docs/api/v7/update-records.html).

#### Add Additional Product Data

When syncing products to Zoho, you can modify the product data using the 
```
wpf_ecommerce_zoho_add_product
```

 filter:

```
function modify_product_data( $data, $product ) {
    /* $data is structured like:
    $data = array(
        'Product_Name' => $product['name'],
        'Unit_Price'   => $product['price']
    ); */

    // Add SKU
    $data['Product_Code'] = $product['sku'];
    
    // Add custom field
    $data['Custom_Product_Field'] = 'Custom Value';

    return $data;
}
add_filter( 'wpf_ecommerce_zoho_add_product', 'modify_product_data', 10, 2 );
```

Note: Make sure any custom fields you reference are already created in your Zoho CRM before attempting to sync data to them.

#### Sync renewal orders to the parent order deal

By default WP Fusion will create a new deal in Zoho for each renewal order with [WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/).

This snippet checks to see if the order is a renewal order, and if so, updates the properties on the existing parent order’s deal, rather than creating a new deal.

Note that the custom properties in this snippet will need to first be [created in the Zoho Deals module](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/customizing-fields/articles/use-custom-fields) before they can be used. If you don’t need any of these properties in Zoho, you can just remove the lines from the code.

```
/**
 * Update existing Zoho deals from renewal orders.
 *
 * @param array $data The data to update.
 * @param int   $order_id The order ID.
 * @return array The data to update.
 */
function update_existing_zoho_deals_from_renewal_orders( $data, $order_id ) {

	$order = wc_get_order( $order_id );

	// Check if this is a renewal order
	if ( function_exists( 'wcs_order_contains_renewal' ) && wcs_order_contains_renewal( $order ) ) {

		// Get parent order ID
		$subscriptions = wcs_get_subscriptions_for_order( $order, array( 'order_type' => 'any' ) );

		if ( ! empty( $subscriptions ) ) {
			$subscription = array_pop( $subscriptions );
			$parent_order = $subscription->get_parent();

			if ( $parent_order ) {
				// Get the parent order's deal ID
				$parent_deal_id = $parent_order->get_meta( 'wpf_ec_zoho_invoice_id' );

				if ( ! empty( $parent_deal_id ) ) {
					// Set the ID so we update the existing deal rather than creating a new one.
					$data['id'] = $parent_deal_id;

					// Basic renewal info
					$data['Last_Renewal_Date']   = gmdate( 'Y-m-d', $order->get_date_created()->getTimestamp() );
					$data['Last_Renewal_Amount'] = $order->get_total();

					// Subscription status and dates
					$data['Subscription_Status']   = $subscription->get_status();
					$data['Next_Renewal_Date']     = $subscription->get_date( 'next_payment' );
					$data['Trial_End_Date']        = $subscription->get_date( 'trial_end' );
					$data['Subscription_End_Date'] = $subscription->get_date( 'end' );

					// Billing details
					$data['Billing_Period']   = $subscription->get_billing_period();
					$data['Billing_Interval'] = $subscription->get_billing_interval();

					// Subscription metrics
					$data['Total_Renewals']  = $subscription->get_payment_count();
					$data['Failed_Payments'] = $subscription->get_failed_payment_count();
					$data['Total_Revenue']   = $subscription->get_total();

					// Subscription products
					$items = array();
					foreach ( $subscription->get_items() as $item ) {
						$items[] = $item->get_name() . ' (x' . $item->get_quantity() . ')';
					}
					$data['Subscription_Products'] = implode( ', ', $items );

					// Customer metrics
					$data['Customer_Since'] = gmdate( 'Y-m-d', $parent_order->get_date_created()->getTimestamp() );
					$data['Payment_Method'] = $subscription->get_payment_method_title();

					// Calculate lifetime value
					$all_orders     = $subscription->get_related_orders();
					$lifetime_value = 0;
					foreach ( $all_orders as $related_order_id ) {
						$related_order = wc_get_order( $related_order_id );
						if ( $related_order && $related_order->is_paid() ) {
							$lifetime_value += $related_order->get_total();
						}
					}
					$data['Lifetime_Value'] = $lifetime_value;

					// Maybe update the cumulative deal amount
					$data['Amount']           = $lifetime_value;
					$data['Expected_Revenue'] = $lifetime_value;
				}
			}
		}
	}

	return $data;
}

add_filter( 'wpf_ecommerce_zoho_add_deal', 'update_existing_zoho_deals_from_renewal_orders', 10, 2 );
```

---

## HubSpot Enhanced Ecommerce

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/)

### Overview

WP Fusion’s Enhanced Ecommerce Addon (available for Plus and Professional license holders) supports sending ecommerce transaction data as Deals to your [HubSpot](https://wpfusion.com/go/hubspot) account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### Getting started

Once you install the addon, Deals will automatically be added to Hubspot when someone makes a purchase on your site.

The deal title will be name of the order in WooCommerce (or other supported ecommerce plugin), and the deal value will be set to the total amount of the sale.

The default stage for new deals is *Sales Pipeline » Closed Won*, but you can change this via the **Enhanced Ecommerce** tab in the WP Fusion settings.

![screenshot of the wp fusion settings interface for hubspot enhanced ecommerce. options include record type (deals or orders) and pipeline/stage selection. sync products toggle for adding purchased items to hubspot deals is shown. perfect for optimizing your seo strategy with hubspot integration.](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-1-4-1024x578.jpg)

If you’ve just added a new pipeline or stage, click *Resynchronize Available Lists and Fields* on the **Setup** tab to load the latest values.

#### Deal Owner (New in v1.26.1)

You can optionally assign a default owner to all new deals created in HubSpot. This is useful if you want deals automatically assigned to a specific sales representative or team member.

To set up a default deal owner:

1. Navigate to the **Enhanced Ecommerce** tab in the WP Fusion settings
2. In the **Default Deal Owner** dropdown, select the HubSpot user you want to assign as the owner for new deals
3. Save your settings

**Note:** The Default Deal Owner setting only applies when the Record Type is set to “Deals”. It does not apply to “Orders” as the HubSpot Commerce API does not currently support owner assignment for orders.

If you’ve just added new users to HubSpot, click *Resynchronize Available Lists and Fields* on the **Setup** tab to load the latest owners.

#### Products

Optionally you can have WP Fusion sync products from WooCommerce (or any other supported ecommerce plugin) to HubSpot, and add those products as line items on deals.

![](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-4-1024x649.jpg)When “Sync Products” is enabled, products are automatically synced from WordPress to HubSpot at checkout
When you’ve enabled **Sync Products**, products will automatically be created in HubSpot as people check out in WordPress.

You can also manually associate WooCommerce and other products with HubSpot product IDs. For more info [see the Enhanced Ecommerce Overview documentation](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/#supported-plugins).

#### Line items

With **Sync Products** enabled, line items will also be synced to the HubSpot deal (but not created as HubSpot products).

HubSpot supports line items for shipping, taxes, and fees. HubSpot [does not support line items for discounts](https://developers.hubspot.com/docs/api/crm/line-items#create-a-line-item).

### Deals vs. Orders

By default, WP Fusion creates [Deals](https://knowledge.hubspot.com/records/create-deals) in HubSpot for each purchase or transaction in WordPress.

[Orders](https://knowledge.hubspot.com/integrations/view-the-order-object) are a new feature, which work very similarly to deals at the moment, but we hope will eventually be connected to the new [HubSpot Commerce portal](https://knowledge.hubspot.com/payments/manage-payments) for enhanced reporting and inventory management.

Orders are optimized for storing ecommerce data collected by third-party platforms, like Shopify or WordPress (via WP Fusion).

#### Deals

**Pros:**

- Well tested with WP Fusion, in use for many years.
- Supports assigning a default owner to deals (new in v1.26.1).

**Cons:**

- Some terminology like “Deal” and “Close date” don’t match the terminology in WordPress.
- Deals cannot be associated with Carts.
- New ecommerce reporting features in HubSpot will be created for Orders and Carts, not deals.
- No native support for tax or shipping.
- Does not support discounts at all.

#### Orders

**Pros:**

- Will eventually have better reporting features than Deals.
- Better optimized for ecommerce orders placed via outside systems.
- Can be associated with Carts via the Abandoned Cart Addon (work in progress).
- Native support for tax, shipping, and discounts.

**Cons:**

- Relatively untested with WP Fusion, may still be bugs.
- At the moment functionally very similar to Deals, most reporting enhancements have yet to be released.
- Does not support owner assignment.

**Which should you choose?**We recommend existing stores to stick with Deals, however if you’re setting up a new site and want to (eventually) benefit from the enhanced reporting capabilities of Orders, then give Orders a try.

![the HubSpot Commerce hub dashboard, styled with hubspots intuitive design, showcases bar charts: top left for monthly total payment volume; top right for paying customers monthly; bottom left for quarterly payment volume; and bottom right highlights yearly trends from 2020 to 2023.](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-commerce-hub-1024x708.jpg)The [HubSpot Commerce Hub](https://knowledge.hubspot.com/payments/manage-payments) will eventually offer improved reporting for ecommerce orders and abandoned carts, but at the moment it only works with payments charged via HubSpot’s payment platform.
You can also switch the record type from the WP Fusion settings and export your [orders in bulk](https://wpfusion.com/documentation/ecommerce/woocommerce/#syncing-historical-orders) to create new Orders in HubSpot for all your historical orders in WordPress, when/if you eventually decide to switch.

### How it works

When a customer checks out on your site, WP Fusion will create a new deal in Hubspot with the order label, date, and invoice total. This sale data will be associated with the contact record who made the purchase.

If you’ve enabled **Sync Products**, then each of the products from the order will be synced to HubSpot with their name, price, and SKU. Each product will then be associated with the deal.

If you’ve configured a **Default Deal Owner**, the deal will be automatically assigned to that HubSpot user when created.

#### Multi-currency

If you’re selling in multiple currencies, for example using [WooCommerce Multi-Currency](https://woocommerce.com/document/multi-currency/?aff=71266), WP Fusion can sync order totals to HubSpot in the currency used at checkout.

![](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-multi-currency-1024x578.jpg)WP Fusion can sync deals to HubSpot from WooCommerce in multiple currencies.
To set this up you will first need to [add any desired currencies to HubSpot](https://knowledge.hubspot.com/deals/add-and-edit-your-account-currencies) by going to Settings » Account Defaults » Currencies.

![](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-manage-multiple-currencies-1024x450.jpg)Additional currencies need to be added to HubSpot before they can be used by WP Fusion.

### How it looks

#### WooCommerce

![](https://wpfusion.com/wp-content/uploads/2020/07/hubspot_ecom-1024x493.png)The deal is added to HubSpot and associated with the contact record of the customer
![](https://wpfusion.com/wp-content/uploads/2018/12/Image-2020-07-07-at-10.19.30-PM.png)A note is added to the deal containing the products purchased (if “Add Note” is selected)

#### Event Espresso

![](https://wpfusion.com/wp-content/uploads/2018/12/event-espresso-enhanced-ecommerce-hubspot-1024x597.jpg)The Event Espresso transaction is synced to HubSpot as a deal, including the contact who made the registration, and a line item (in the right sidebar) indicating the ticket purchased.

#### GiveWP

![](https://wpfusion.com/wp-content/uploads/2018/12/give-enhanced-ecom-hubspot-1024x658.jpg)The WP Fusion metabox on each GiveWP payment shows the donor’s contact ID in HubSpot, as well as the deal ID for the donation.
![](https://wpfusion.com/wp-content/uploads/2018/12/givewp-enhanced-ecom-hubspot-deal-1024x598.jpg)Individual deals in HubSpot include the order details, as well as line items for the donation form and amount.
![](https://wpfusion.com/wp-content/uploads/2018/12/givewp-enhanced-ecommerce-hubspot-pipelines-1024x633.jpg)Visualize GiveWP donations in HubSpot, and automatically follow up with donors using pipeline automation.

#### SureCart

![screenshot](https://wpfusion.com/wp-content/uploads/2022/12/hubspot-surecart-enhanced-ecommerce-1024x501.jpg)A SureCart order synced to HubSpot contains line items for the products purchased as well as the order title and total.

#### Video – Enhanced Ecommerce – Hubspot

### WooCommerce order statuses

If you’re using WooCommerce you can also associate WooCommerce order statuses with deal stages in HubSpot. This setting appears under the Enhanced Ecommerce tab in the WP Fusion settings.

![WP Fusion's WooCommerce + HubSpot order status sync settings](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-3-1-1024x673.jpg)Map WooCommerce order statuses to HubSpot pipelines with WP Fusion.
When the order status is updated in WooCommerce, the deal stage will be updated in HubSpot.

**Warning:** It is recommended *not* to sync **Pending payment** orders with HubSpot. When this is enabled, WP Fusion needs to create a contact record and a deal in HubSpot as soon as the pending order is created in WooCommerce, and then update it less than a second later when the payment is processed.

This slows down your checkout with many duplicate API calls and in most cases isn’t necessary. A more performant method of tracking incomplete payments is to use [Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/hubspot-abandoned-cart/).
**Note:**By default, running a WooCommerce Orders (Ecommerce addon) export operation from the Advanced settings tab will only export “paid” orders (Processing or Completed). However, if you have enabled additional order statuses for sync to a HubSpot pipeline, then running the export will process those additional statuses as well.

This can be used to export refunded or cancelled orders to HubSpot in addition to the paid orders.

### Modifying the API data

WP Fusion supports using [filters](https://developer.wordpress.org/plugins/hooks/filters/) to modify the data sent to HubSpot with an ecommerce order.

#### Assign a specific owner to deals

While you can set a default owner for all deals in the settings (as of v1.26.1), you can also programmatically assign owners based on custom logic using the 
```
wpf_ecommerce_hubspot_add_deal
```

 filter.

```
function assign_deal_owner_by_product( $deal, $order_id ) {

	$order = wc_get_order( $order_id );
	
	// Example: Assign different owners based on product category
	foreach ( $order->get_items() as $item ) {
		$product = $item->get_product();
		
		if ( has_term( 'enterprise', 'product_cat', $product->get_id() ) ) {
			// Assign to enterprise sales rep (replace with actual HubSpot user ID)
			$deal['properties']['hubspot_owner_id'] = '12345678';
			break;
		}
	}

	return $deal;

}

add_filter( 'wpf_ecommerce_hubspot_add_deal', 'assign_deal_owner_by_product', 10, 2 );
```

#### Ignore free orders

This example bypasses creating a deal for any free orders.

```
function ignore_free_orders( $deal, $order_id ) {

	if ( empty( $deal['properties']['amount'] ) ) {
		return false;
	}

	return $deal;

}

add_filter( 'wpf_ecommerce_hubspot_add_deal', 'ignore_free_orders', 10, 2 );
```

#### Exclude taxes

This example subtracts the amount of tax paid (if applicable) from the deal total.

```
function orders_tax_exclusive( $deal, $order_id ) {

	$order = wc_get_order( $order_id );

	$deal['properties']['amount'] -= $order->get_total_tax();

	return $deal;

}

add_filter( 'wpf_ecommerce_hubspot_add_deal', 'orders_tax_exclusive', 10, 2 );
```

#### Custom deal fields

At the moment WP Fusion doesn’t have a visual interface for associating WordPress data with custom deal fields in HubSpot.

However you can still make this work using the 
```
wpf_ecommerce_hubspot_add_deal
```

 filter.

First go into the Properties editor in HubSpot and find the internal name for your property.

![](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-deal-properties-1024x745.jpg)

In this case we’re going to update the Custom Deal Text Field field, which has an internal name of 
```
custom_deal_text_field
```

, and update it with the edit link to a WooCommerce order.

```
function my_custom_deal_properties( $deal, $order_id ) {

	/* $deal is structured like:

	$deal = array(
		'associations' => array(
			array(
				'to'    => array(
					'id' => 123, // contact ID.
				),
				'types' => array(
					array(
						'associationCategory' => 'HUBSPOT_DEFINED',
						'associationTypeId'   => 3,
					),
				),
			),
		),
		'properties'   => array(
			'deal_currency_code' => 'USD', // currency.
			'dealname'           => 'WooCommerce Order #123', // title.
			'pipeline'           => 'default', // pipeline.
			'dealstage'          => 'closedwon', // stage.
			'closedate'          => 1614617984000, // closed date - microseconds since the epoch
			'amount'             => 123.00, // total deal amount.
			'hubspot_owner_id'   => '45678', // owner ID (if set via settings or filter).
		),
	); */

	$deal['properties']['custom_deal_text_field'] = admin_url( 'post.php?post=' . $order_id . '&action=edit' ); // set the custom property.

	return $deal;

}

add_filter( 'wpf_ecommerce_hubspot_add_deal', 'my_custom_deal_properties', 10, 2 );
```

And here in HubSpot you can see that when WP Fusion creates the deal, the custom properties are automatically populated:

![](https://wpfusion.com/wp-content/uploads/2020/09/hubspot-custom-deal-properties-1024x915.jpg)

#### Add the MemberPress transaction expiration date to a custom deal property

```
function wpf_add_expiration_to_deal( $deal, $transaction_id ) {

    // Get the MemberPress transaction.
    $txn = new MeprTransaction( $transaction_id );
    
    // Get expiration based on the membership settings
    if( $txn->expires_at && strtotime( $txn->expires_at ) > 0 ) {
       $deal['properties']['membership_expiration_date'] = $txn->expires_at;
    }

    return $deal;
}

add_filter( 'wpf_ecommerce_hubspot_add_deal', 'wpf_add_expiration_to_deal', 10, 2 );
```

#### Customize note content

If you enable the **Add Note** options in the WP Fusion Enhanced Ecommerce settings, WP Fusion will attach a note (also known as an “engagement”) to your newly created deals containing the products purchased and line item totals.

It’s possible to override the contents of this note using the 
```
wpf_ecommerce_hubspot_add_engagement
```

 filter.

```
/**
 * Add address to HubSpot note
 */
function add_address_to_note( $engagement_data, $order_id ) {

	/* $engagement_data is structured like:

	$engagement_data = array(
		'engagement'   => array(
			'type' => 'NOTE',
		),
		'associations' => array(
			'dealIds' => array( $deal_id ),
		),
		'metadata'     => array(
			'body' => $body,
		),
	); */

	$order      = wc_get_order( $order_id );
	$order_data = $order->get_data();

	$new_text = 'Address:';
	$new_text .= '';
	$new_text .= 'Address 1: ' . $order_data['billing']['address_1'] . '';
	$new_text .= 'Address 2: ' . $order_data['billing']['address_2'] . '';
	$new_text .= 'City: ' . $order_data['billing']['city'] . '';
	$new_text .= 'State: ' . $order_data['billing']['state'] . '';
	$new_text .= 'Postcode: ' . $order_data['billing']['postcode'] . '';
	$new_text .= '';

	$engagement_data['metadata']['body'] .= $new_text;

	return $engagement_data;
}

add_filter( 'wpf_ecommerce_hubspot_add_engagement', 'add_address_to_note', 10, 2 );
```

This example appends the customer’s billing address to the contents of the note.

For more information on engagements, see [the HubSpot API documentation](https://developers.hubspot.com/docs/api/crm/notes).

---

## Enhanced Ecommerce Changelog

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/)

#### #1.27.2 - 4/21/2026

- ✨ New Added - WooCommerce product variations are now included in the "WooCommerce Products (Ecommerce addon)" batch export alongside simple products (especially useful for CRMs like Keap where per-product API creation is slow)
- ⚡️ Improved When a WooCommerce order status change fails because the linked opportunity has been deleted in the CRM (HighLevel), WP Fusion will now clear the stored opportunity ID and re-create it, instead of only logging the error
- 🔧 Fixed Fixed SureCart subscription renewals overwriting the original CRM deal (including its close/start date and custom fields) instead of creating a new deal for the renewal payment
- 🔧 Fixed Fixed NationBuilder donations not syncing after reconnecting the site with the new v2 OAuth flow (the donations endpoint still requires v1, and needed its own request headers and auth format)
- Removed the 
```
Requires Plugins: wp-fusion
```

 header from the plugin file

#### #1.27.1 - 12/9/2025

- 🔧 Fixed Fixed ArgumentCountError with Paid Memberships Pro order status changes

#### #1.27.0 - 12/8/2025

- ✨ New Added support for syncing [Paid Memberships Pro](http://wpfusion.com/documentation/membership/paid-memberships-pro/) membership orders as ecommerce transactions
- ⚡️ Improved Paid Memberships Pro abandoned carts will now be converted to completed orders in the CRM (for CRMs that support cart tracking)
- ⚡️ Improved Abandoned cart data structure now includes products, line items, and order totals for better ecommerce reporting
- 🔧 Fixed Fixed WooCommerce order statuses not being able to be mapped to HubSpot pipelines
- 🔧 Fixed Fixed refunds in Zoho always getting sent to the Deals module, even when using the Sales Orders module with the Zoho Ecommerce settings

#### #1.26.2 - 10/7/2025

- ✨ New Added - Ontraport invoice template setting to configure which invoice template to use when creating transactions
- ⚡️ Improved Stopped syncing the product name and description to HubSpot line items that already have a HubSpot product ID (was taking precedence over the HS product name and breaking reports)
- ⚡️ Improved Improved HubSpot logging
- 🔧 Fixed Fixed - Ontraport coupons now distribute discounts proportionally based on product prices instead of equally by quantity (prevents negative prices on free or discounted products)

#### #1.26.1 - 8/7/2025

- ✨ New Added a dropdown for default owner for HubSpot deals
- ✨ New Added translations for Spanish, French, German, Italian, Portuguese (Brazil), Dutch, Russian, Japanese, Chinese (Simplified), and Korean
- ⚡️ Improved Keap / Infusionsoft affiliate ID will now be saved to pending orders so it can be synced during iFrame or offsite checkouts
- 🔧 Fixed Fixed LifterLMS orders not syncing when a manual gateway recurring payment had its status set to active in the admin
- 🔧 Fixed Fixed fatal error with Groundhogg integration when the Groundhogg - Sales Pipeline plugin was not active
- 🔧 Fixed Fixed WooCommerce order dates not being consistently synced as UTC
- 🔧 Fixed Fixed error "The url field must be a string" when creating new CartFlows products with MailerLite

#### #1.26.0 - 3/10/2025

- ✨ New Added support for [Brevo E-commerce](https://wpfusion.com/documentation/ecommerce-tracking/brevo-enhanced-ecommerce/#orders)
- ✨ New Added support for the [HubSpot Commerce API](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#deals-vs-orders)
- ✨ New Added support for updating existing products with Zoho
- ✨ New Added support for syncing SKUs to Zoho products
- ✨ New Added support for syncing to Sales Orders with Zoho as an alternative to Deals
- ✨ New Added option to ignore free transactions with MemberPress
- ⚡️ Improved WooCommerce customer notes will now be added to Infusionsoft / Keap orders as notes
- ⚡️ Improved Bulk order status changes with WooCommerce are now processed in a background job (no longer limited to 20 orders)

#### #1.25.1 - 10/3/2024

- ✨ New Added support for syncing line items (shipping, taxes, fees) with HubSpot
- ✨ New Added support for syncing partial refunds with SureCart
- ✨ New Added support for syncing variation images with SureCart
- ✨ New Added support for updating existing deals with Zoho
- ⚡️ Improved With Ontraport, if a refunded WooCommerce order is changed back to processing or complete, the Ontraport order will be marked as paid
- 🔧 Fixed Fixed SureCart integration not creating a new contact record for existing users who did not already have a contact record
- 🔧 Fixed Fixed missing order label in SureCart error message
- 🔧 Fixed Fixed undefined offset warnings in SureCart integration when no customer last name is provided
- 🔧 Fixed Fixed duplicate deals being created in Zoho when the Pending Payment order status in WooCommerce was mapped to a pipeline stage
- 🔧 Fixed Fixed unhandled error looking up existing products in the CRM when the Sync Product Edits setting is enabled
- 🔧 Fixed Fixed Drip integration syncing the 
```
occurred_at
```

 field in local time, not UTC
- 🔧 Fixed Fixed incorrect invoice ID being saved from Infusionsoft / Keap orders with the new API
- 🛠️ Dev Added 
```
wpf_ecommerce_hubspot_refund_deal
```

 filter

#### #1.25.0 - 8/7/2024

- ✨ New Added a [SureCart integration](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- ✨ New Added a [Groundhogg Enhanced Ecommerce integration](https://wpfusion.com/documentation/ecommerce-tracking/groundhogg-ecommerce/)
- ✨ New Added support for updating existing deals in HighLevel
- ⚡️ Improved Declared compatibility with the WooCommerce block-based checkout to avoid "Incompatible plugin" notices in the admin
- ⚡️ Improved When editing a pending WooCommerce order, updated data will only be synced to the CRM if the order total changes
- ⚡️ Improved Improved Drip error handling
- 🔧 Fixed Fixed WooCommerce orders being synced without line items when the Pending Payment order status was mapped to a deal stage
- 🔧 Fixed Fixed division by zero error when syncing WooCommerce orders to Ontraport with a discount, when all order items had been refunded
- 🔧 Fixed Fixed pending WooCommerce subscriptions getting synced as 0 value orders/deals when the Pending Payment order status was mapped to a deal stage
- 🔧 Fixed Fixed error "Uncaught Error: Undefined constant 'result'" when submitting a recurring payment with Gravity Forms and Ontraport
- 🔧 Fixed Fixed missing error handling for failed API call to create a new Infusionsoft product

#### #1.24.1 - 5/15/2024

- 🔧 Fixed Fixed invalid Brevo stage ID error when adding deals without specifying a pipeline, since 1.24.0

#### #1.24.0 - 5/10/2024

- ✨ New Added support for syncing deals with multiple pipelines in Brevo
- ⚡️ Improved With Infusionsoft and Keap, if an order is processed again, it will now delete the old invoice and create a new one (to avoid duplicates)
- 🔧 Fixed Fixed bug whereby sometimes EDD would have an empty 
```
_edd_completed_date
```

 meta key and this would set the order date to the epoch (now uses the )
- 🔧 Fixed Fixed - With WooCommerce, pending orders that transitioned to failed were not moving deals to the correct pipeline stage
- 🔧 Fixed Fixed HighLevel integration syncing pipelines on every page load for accounts with no pipelines
- 🔧 Fixed Fixed - Removed "Draft" from available order statuses with WooCommerce. Causes errors since the customer email hasn't been saved to the order yet
- 🛠️ Dev Added 
```
wpf_ecommerce_hubspot_add_product
```

 filter
- 🛠️ Dev CRMs that require an ISO8601 date for the order date will now use the new 
```
wpf_get_iso8601_date()
```

 function (standardizes order date formatting and timezone handling across the integtrations)
- Updated required WP Fusion version to 3.43.6

#### #1.23.5 - 2/20/2024

- ✨ New Added Requires Plugins header for WordPress 6.5
- ⚡️ Improved Updated order total calculation method in Zoho integration to get around rounding errors when 
```
serialize_precision
```

 wasn't set correctly on the server
- ⚡️ Improved 
```
wpf_ec_complete
```

 meta key with MemberPress is now set to the current time instead of 
```
true
```
- 🔧 Fixed Fixed broken "Gravity Forms Entries (Ecommerce addon)" batch operation
- 🔧 Fixed Fixed missing enhanced ecommerce settings on Gravity Forms feeds since WP Fusion 3.42.7
- 🔧 Fixed Fixed HubSpot getting existing invoice IDs from the MakeWebBetter plugin for non-WooCommerce orders
- 🔧 Fixed Fixed missing logging for associating HubSpot line items with deals
- 🔧 Fixed Fixed missing warning notice when using the Enhanced Ecommerce plugin with an unsupported CRM

#### #1.23.4.2 - 1/29/2024

- 🔧 Fixed Fixed a fatal error when syncing pending orders with the CRM and a pending order was created with an empty shipping method, since 1.23.4

#### #1.23.4.1 - 1/26/2024

- Re-added the 
```
CustomerAuthorizedById
```

 field that was removed from the Salesforce integration in 1.23.4

#### #1.23.4 - 1/24/2024

- ✨ New Added support for syncing HighLevel opportunities to different statuses in addition to pipelines and stages
- ✨ New Added option (under Advanced) to delete the ActiveCampaign Deep Data connection without opening a new one
- ⚡️ Improved Removed the 
```
CustomerAuthorizedById
```

 from Salesforce order data. It's not a required field and was causing validation issues on some accounts
- ⚡️ Improved Synced shipping methods will now include the shipping method title instead of just "Shipping"
- ⚡️ Improved The Ontraport integration will always search for a product by name before creating a new one (to avoid creating duplicate products)
- ⚡️ Improved [Shipping products with Ontraport](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#shipping-product) will be created based on the shipping method title, instead of just "Shipping"
- ⚡️ Improved If pending orders are enabled for sync with WooCommerce, creating a pending order in the admin will create a corresponding contact record and deal
- ⚡️ Improved If a pending order is edited in the admin, the deal will automatically be updated in the CRM without having to click Process WP Fusion Actions Again
- 🔧 Fixed Fixed undefined index warnings when editing a Gravity Forms feed for a form that includes payments

#### #1.23.3 = 11/10/2023

- 🔧 Fixed Fixed 
```
Error: Call to undefined function wc_get_order()
```

 when syncing non-WooCommerce orders to Drip since 1.23.2
- ✨ New Added support for syncing the checkout URL to Drip with EDD

#### #1.23.2 - 11/8/2023

- ✨ New Added support for [syncing MemberPress transaction status changes with sales pipelines](https://wpfusion.com/documentation/membership/memberpress/#sales-pipelines) in Brevo, HighLevel HubSpot, and Zoho
- ✨ New Added support for syncing the checkout URL to Drip with WooCommerce, CartFlows, and FunnelKit
- ✨ New Added support for updating existing deals with Brevo
- ✨ New Added a warning when the Reepay payment gateway is configured in a way that will send duplicate data to the CRM
- ⚡️ Improved When "Skip already processed" is un-checked during the WooCommerce Products batch operation, the cached CRM product ID will be cleared out and looked up again via API call
- ⚡️ Improved Improved error handling with ActiveCampaign
- 🔧 Fixed Fixed the WooCommerce Products batch operation not working unless Sync Product Edits was enabled in the Enhanced Ecommerce settings
- 🔧 Fixed Fixed PHP warning 
```
Undefined array key "sku"
```

 in Salesforce integration when creating a new product without an SKU
- 🔧 Fixed Fixed PHP warning 
```
Unknown property: name
```

 when syncing MemberPress transactions from the 
```
manual
```

 gateway
- 🔧 Fixed Fixed a bug with WooCommerce Discount Rules Pro where cart-based discounts were being synced without a title
- 🔧 Fixed Fixed Ontraport integration not syncing partially refunded orders where a single item's quantity was refunded to zero
- 🔧 Fixed Fixed fatal error adding new WooCommerce products with Drip, MailerLite, and Zoho when Sync Product Edits was enabled in the WP Fusion settings
- 🔧 Fixed Fixed PHP warning performing initial sync with HubSpot when no products existed in HubSpot

#### #1.23.1 - 8/17/2023

- ⚡️ Improved If you are running a WooCommerce Orders batch operation via the core plugin, and the orders have already been processed by Enhanced Ecommerce, they will be skipped (and a notice will be logged)
- 🔧 Fixed Fixed Cancelled WooCommerce orders not updating the order total to 0 in ActiveCampaign
- 🔧 Fixed Fixed HighLevel integration only adding opportunities to the first pipeline (requires Refresh Tags and Fields and selecting a pipeline again in the setup)
- 🔧 Fixed Fixed Brevo integration recording orders as successfully synced even when a deal stage hadn't been selected in the settings
- 🔧 Fixed Fixed MemberPress integration not syncing transactions that had already been synced, despite "Skip already processed" being un-checked
- 🔧 Fixed Fixed MemberPress Transactions export operation picking up fallback and subscription_confirmation transactions
- PHP 8.2.8 compatibility

#### #1.23.0 - 7/24/2023

- ✨ New Added [Salesforce integration](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/)
- ⚡️ Improved If a deal is deleted in HubSpot, and updating the deal fails, WP Fusion will clear the cached deal ID and create a new deal
- 🔧 Fixed Fixed MailerLite integration not handling errors related to looking up a shop ID or creating a new shop
- 🔧 Fixed Fixed CRMs with products (AgileCRM, Infusionsoft, Ontraport, Zoho) updating the product name in the CRM based on the WordPress product name even when Sync Product Edits was disabled
- 🔧 Fixed Fixed free MemberPress transactions not being synced

#### #1.22.0 - 6/19/2023

- ✨ New Added [MailerLite integration](https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/)
- 🔧 Fixed Fixed - v1.20.0 added WooCommerce HPOS support, but forgot to declare the compatibility. The plugin now shows up as compatible with HPOS

#### #1.21.1 - 6/5/2023

- ✨ New Added filter 
```
wpf_ecommerce_nationbuilder_add_donation
```
- ⚡️ Improved Custom HubSpot deal properties added using the 
```
wpf_ecommerce_hubspot_add_deal
```

 for the v1 HubSpot API will now automatically be fixed to be compatible with the v3 API
- 🔧 Fixed Fixed WooCommerce Susbcriptions signup fees getting synced twice since 1.21.0
- Removed the deprecated option to add a note to HubSpot deals, for new WP Fusion installs

#### #1.21.0 - 5/24/2023

- ✨ New Added [HighLevel integration](https://wpfusion.com/documentation/ecommerce-tracking/highlevel-ecommerce/)
- ✨ New Added filter 
```
wpf_ecommerce_brevo_add_deal
```

 (alias of 
```
wpf_ecommerce_sendinblue_add_deal
```

)
- Updated Sendinblue integration to Brevo
- Updated HubSpot integration to use new v3 API
- 🔧 Fixed Fixed an issue with WooCommerce refunds whereby if you did a partial refund on an order, and then subsequently fully refunded the order, the amount of the initial partial refund would be synced twice (causing a negative balance)
- 🔧 Fixed Fixed WooCommerce refunds being synced to Drip twice
- 🔧 Fixed Fixed signup fees getting synced as line items with every WooCommerce subscriptions renewal order
- 🔧 Fixed Fixed duplicate transaction data being sent when using the Memberpress WooCommerce Plus plugin

#### #1.20.3 - 3/28/2023

- 🔧 Fixed Fixed signup fees not being synced with WooCommerce Subscriptions
- 🔧 Fixed Fixed variation names missing from product names since 1.20.0
- 🔧 Fixed Fixed prices for variable products not syncing correctly at checkout since 1.20.0
- 🔧 Fixed Fixed PHP warnings updating existing products with Ontraport

#### #1.20.2 - 3/22/2023

- ⚡️ Improved Calling wp_fusion_ecommerce()->woocommerce->send_order_data() will now always sync the order, regardless of its status (fixes an issue with FunnelKit and the Run on Primary Order Accepted setting)
- ⚡️ Improved Infusionsoft / Keap refunds will now be [synced with a credit note](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/#refunds) to prevent the order from displaying as having a balance due
- 🔧 Fixed Fixed fatal error 
```
Call to a member function get_name() on bool
```

 when trying to export WooCommerce orders that contained deleted products, since 1.20.0
- 🔧 Fixed Fixed error 
```
Unsupported operand types: string * int
```

 when syncing products that have no value (like Gift Cards) with ActiveCampaign

#### #1.20.1 - 3/2/2023

- 🔧 Fixed Fixed fatal error (missing second argument) running the "WooCommerce Products (Ecommerce addon)" batch operation since 1.20.0

#### #1.20.0 - 2/27/2023

- ✨ New Added - With CRMs that support products (AgileCRM, Drip, HubSpot, Keap / Infusionsoft, Ontraport, and Zoho), you can now sync products when they are created or updated in WooCommerce, instead of when the order is placed
- ✨ New Added support for [WooCommerce High Performance Order Storage](https://developer.woocommerce.com/2022/09/14/high-performance-order-storage-progress-report/)
- ⚡️ Improved When looking up an Infusionsoft product, if a match isn't found by name, an additional search will be performed by SKU before creating a new product
- ⚡️ Improved The HubSpot integration can now update deals created by the MakeWebBetter HubSpot for WooCommerce plugin
- 🔧 Fixed Fixed broken link to Give payments in ActiveCampaign (and other CRMs with payment links)
- 🔧 Fixed Fixed 
```
Undefined variable $payment
```

 in LifterLMS integration

#### #1.19.3 - 12/6/2022

- ✨ New Added multi-currency support to Zoho integration
- ✨ New Added option to reset the ActiveCampaign Deep Data connection ID and open a new connection
- ⚡️ Improved Variable WooCommerce products will now be synced to Drip with their variation ID for the 
```
product_variant_id
```

 parameter
- ⚡️ Improved Clicking Process WP Fusion Actions Again on a WooCommerce order will now trigger the Enhanced Ecommerce addon to re-sync the invoice as well
- 🔧 Fixed Fixed Completed WooCommerce orders being exported to Drip as Fulfilled, which didn't correctly set the order date
- 🔧 Fixed Fixed "Invalid data passed for field" error updating deal stages with Zoho

#### #1.19.2 - 10/26/2022

- 🔧 Fixed Fixed fatal error refunding MemberPress transactions with ActiveCampaign since 1.19.0

#### #1.19.1 - 10/11/2022

- ⚡️ Improved Refunded item quantities will now be synced with Drip, and trigger an order refunded event
- ⚡️ Improved Removed legacy Orders API and Events API integrations with Drip in favor of the Shopper Activity API
- ⚡️ Improved New Completed WooCommerce orders will be sent to Drip as "fulfilled" instead of being synced as "placed" and then updated to "fulfilled" a moment later
- 🔧 Fixed Fixed the Record a Converson Event option not working with Drip and the Shopper Activity API
- 🔧 Fixed Fixed multiple partial refunds on WooCommerce orders not correctly being synced with Drip (only the most recent refund was synced)
- 🔧 Fixed Fixed partial refund amounts not being rounded to two decimal places

#### #1.19.0 - 8/29/2022

- Addded [Sendinblue integration](https://wpfusion.com/documentation/ecommerce-tracking/sendinblue-enhanced-ecommerce/)
- ✨ New Added [Gravity Forms integration](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/#gravity-forms)
- ✨ New Added support for WooCommerce refunds and partial refunds with ActiveCampaign, AgileCRM, HubSpot, NationBuilder, and Zoho
- ✨ New Added custom Drip properties for payment method and discount code
- ⚡️ Improved Improved Zoho error handling for creating products and linking them with deals
- ⚡️ Improved Improved / Fixed - Refunds will be synced to Drip with the date of the refund as the 
```
occurred_at
```

 parameter, in order to trigger the Refunded An Order workflow trigger
- 🔧 Fixed Fixed Zoho integration not correctly detecting when the Products module was unavailable on the account
- 🔧 Fixed Fixed MemberPress integration syncing confirmation transactions with PayPal (Standard)
- 🛠️ Dev Moved EDD Recurring Payments 
```
edd_recurring_add_subscription_payment
```

 hook from priority 10 to 20 so it runs after the renewal meta keys have been set for the order by EDD

#### #1.18.6 - 4/20/2022

- ⚡️ Improved the WooCommerce Orders (Ecommerce Addon) batch operation no longer requires the orders to be processed by the core plugin first
- ⚡️ Improved If a non-paid order status (i.e. Pending, Failed) is linked to a pipeline in Zoho or HubSpot, then it will be exported when running a WooCommerce Orders batch operation
- 🔧 Fixed Fixed PHP warning loading ActiveCampaign deal stages if no deal stages exist
- 🔧 Fixed Fixed fatal error in ActiveCampaign integration if someone checked out and their existing contact record had been deleted

#### #1.18.5 - 3/8/2022

- 🔧 Fixed Fixed fatal error changing WooCommerce order statuses when WooCommerce Subscriptions wasn't active, since 1.18.4

#### #1.18.4 - 3/8/2022

- ✨ New Added option to re-process already exported orders using the batch operations with WooCommerce, EDD, MemberPress, and GiveWP
- ⚡️ Improved Sync Products with HubSpot will now be enabled by default
- ⚡️ Improved Sync Orders with Drip will now be enabled by default
- ⚡️ Improved If a WooCommerce order is marked completed, the 
```
date_completed
```

 will be synced for the order date instead of the 
```
date_paid
```
- ⚡️ Improved If a customer checks out with a different email from their AC Deep Data customer email, and this results in an error, WP Fusion will re-send the order data with the email from their contact record
- ⚡️ Improved ActiveCampaign Deep Data connection will no longer be deleted when disabling Deep Data

#### #1.18.3 - 12/28/2021

- ✨ New Added warning about syncing Pending Payment orders with HubSpot and Zoho
- ✨ New Added 
```
wpf_ecommerce_ontraport_add_product
```

 filter
- ✨ New Added SKU field to Ontraport products
- ⚡️ Improved Improved support for taxes with Ontraport — Only order items that have tax will be markd 
```
taxable
```
- ⚡️ Improved If WooCommerce Subscriptions is active and the site is a staging site, order status changes will not be synced to the CRM
- ⚡️ Improved Improved ActiveCampaign error handling so that it now looks at the response code instead of message (some errors were not being caught properly with non-English accounts)
- 🔧 Fixed Fixed incorrect totals when syncing Ontraport product prices tax-inclusive when some cart items were tax exempt
- 🔧 Fixed Fixed free shipping showing up in Infusionsoft as a $0 order adjustment

#### #1.18.2 - 11/1/2021

- 🔧 Fixed Fixed coupons / discounts getting synced twice since 1.18.1

#### #1.18.1 - 10/19/2021

- ✨ New Added support for product discounts added as adjustments to individual line items for manually created WooCommerce orders
- ⚡️ Improved When bulk-editing the status for more than 20 WooCommerce orders, status changes will not be synced to the CRM (to prevent a gateway timeout)
- 🔧 Fixed Fixed duplicate record error syncing products with HubSpot that have no SKU
- 🔧 Fixed Fixed EDD discount code not syncing with ActiveCampaign Deep Data

#### #1.18.0 - 8/20/2021

- ✨ New Added support for coupons with ActiveCampaign Deep Data connections
- ✨ New Added support for exporting non-paid order statuses with HubSpot and Zoho
- ⚡️ Improved If a deal ID is saved for a HubSpot deal, the existing deal will be updated rather than create a duplicate
- ⚡️ Improved When a MemberPress transaction is refunded, the corresponding deal/invoice will be marked refunded in the CRM
- ✨ New Added wpf_ecommerce_ontraport_add_transaction filter
- 🔧 Fixed Fixed PHP warnings during initial Zoho sync if there were no Accounts in Zoho

#### #1.17.10 - 7/1/2021

- ✨ New Added third parameter $order_id to wpf_ecommerce_hubspot_add_line_item filter
- ⚡️ Improved Cancelled WooCommerce orders will now update their ActiveCampaign Deep Data total to $0.00
- Updated for compatibility with Abandoned Cart Addon v1.7.0

#### #1.17.9 - 5/31/2021

- ✨ New Added "MemberPress transactions (Ecommerce addon)" batch operation
- 🔧 Fixed Fixed MemberPress integration trying to sync transactions for users with no contact record
- 🔧 Fixed Fixed errors when WP Fusion wasn't connected to a CRM
- 🔧 Fixed Fixed Ontraport tax object options not populating in dropdowns
- ✨ New Added wpf_ecommerce_activecampaign_add_deal_note filer
- ✨ New Added wpf_ecommerce_hubspot_add_line_item filter
- ✨ New Added wpf_ecommerce_hubspot_change_deal_stage filter

#### #1.17.8 - 3/23/2021

- ✨ New Added wpf_ecommerce_zoho_add_product filter
- ✨ New Added wpf_ecommerce_zoho_add_deal filter
- ✨ New Added wpf_ecommerce_activecampaign_add_deep_data
- ✨ New Added note to the settings about WP Fusion-customer tag being applied with ActiveCampaign
- ✨ New Added note to the logs when an EDD order was blocked from being synced due to the payment gateway not being enabled
- 🔧 Fixed Fixed ActiveCampaign Deep Data not respecting Staging Mode

#### #1.17.7 - 2/15/2021

- ⚡️ Improved Improved handling for duplicate SKUs with HubSpot
- 🔧 Fixed Fixed HubSpot not loading more than 100 products

#### #1.17.6 - 2/10/2021

- ✨ New Added tracking code slug setting for NationBuilder
- 🔧 Fixed Fixed PHP warning loading tax rates from Ontraport when there are no tax rates in the account
- 🔧 Fixed Fixed PHP warning loading available products from HubSpot

#### #1.17.5 - 1/12/2021

- 🔧 Fixed Fixed error updating WP Fusion and the Ecommerce Addon simultaneously
- 🔧 Fixed Fixed error activating the Enhanced Ecommerce addon with WP Fusion Lite

#### #1.17.4 - 1/8/2021

- ✨ New Added download image URL to ecommerce data with Easy Digital Downloads
- ✨ New Added download description to ecommerce data with Easy Digital Downloads and supported CRMs
- ⚡️ Improved You can now prevent an order from being synced to the CRM by returning false from the wpf_ecommerce_order_args filter
- 🔧 Fixed Fixed HubSpot not loading more than 10 products

#### #1.17.3 - 12/31/2020

- ✨ New Added super secret debug tool to clear _wpf_ec_complete flag from Give donations
- ✨ New Added wpf_ecommerce_order_args filter
- ⚡️ Improved ActiveCampaign integration will now give a registered user's email address priority over the billing email
- ActiveCampaign module will now record a warning if a transaction comes through but neither Deep Data nor Deals are enabled
- 🔧 Fixed Fixed Give export operation ignoring renewal orders
- 🔧 Fixed Fixed Drip invoice ID not being saved correctly after logging a new order

#### #1.17.2 - 11/30/2020

- 🔧 Fixed Fixed uncaught error when registering a new product with HubSpot failed
- 🔧 Fixed Fixed PHP notices when syncing ActiveCampaign deal owners

#### #1.17.1 - 11/30/2020

- ⚡️ Improved When ActiveCampaign gives a "The ecomOrder already exists in the system." error, WP Fusion will try and update the existing order
- ⚡️ Improved Disabled the Total Revenue field when ActiveCampaign Deep Data or Drip Shopper Activity was in use
- 🔧 Fixed Fixed "Sync Attributes" in WooCommerce being enabled despite being un-checked

#### #1.17 - 11/23/2020

- ✨ New Added support for products and line items with HubSpot

#### #1.16.2 - 11/19/2020

- ✨ New Added support for tax objects with Ontraport
- ✨ New Added option to send product prices tax-inclusive with Ontraport
- ✨ New Added Fees support to Infusionsoft integration
- ✨ New Added Give Donations (Ecommerce addon) batch operation
- ⚡️ Improved Improved logging for deal status changes

#### #1.16.1 - 8/25/2020

- ✨ New Added Drip for WooCommerce compatibility notice
- 🔧 Fixed Fixed "The ecomOrder currency was not provided" errors with ActiveCampaign and free EDD orders
- 🔧 Fixed Fixed order totals not syncing correctly with Infusionsoft
- 🔧 Fixed Fixed product prices not syncing correctly when prices included tax

#### #1.16 - 6/24/2020

- ✨ New Added batch operation for EDD orders
- ✨ New Added compatibility notices when other CRM ecommerce plugins are detected
- Refactored ActiveCampaign integration
- ⚡️ Improved Improved error handling for ActiveCampaign Deep Data and Customer IDs

#### #1.15.1 - 5/2/2020

- 🔧 Fixed Fixed "No method matching arguments" error recording payments in Infusionsoft

#### #1.15 - 4/27/2020

- Order status changes in WooCommerce will now update order statuses in Drip
- ✨ New Added wpf_ecommerce_hubspot_add_engagement filter
- ✨ New Added wpf_ecommerce_hubspot_add_deal filter
- 🔧 Fixed Fixed MemberPress free trials with 0 Net creating orders
- Restrict Content Pro integration bugfixes

#### #1.14.3 - 3/26/2020

- ✨ New Added support for syncing product addons with Ontraport
- ActiveCampaign integration will now mark carts as recovered if a pending cart is found
- 🔧 Fixed Fixed syncing WooCommerce order fees with negative values to Drip

#### #1.14.2 = 2/11/2020

- 🔧 Fixed Fixed crash created while logging error from a failed API call to register a product in Zoho

#### #1.14.1 = 2/3/2020

- 🔧 Fixed Fixed "Invalid data for Amount" error with Zoho

#### #1.14 - 1/31/2020

- ✨ New Added MemberPress support
- ✨ New Added support for Products with Zoho
- ✨ New Added support for assigning a default owner to new ActiveCampaign deals
- ActiveCampaign pipelines / stages are no longer limited to 20
- WooCommerce integration will now inherit store settings regarding product prices being inclusive vs exclusive of tax

#### #1.13.6 - 1/6/2020

- ✨ New Added shipping support to Ontraport integration
- Zoho integration will now attempt to assign a new deal to the account of an existing contact
- Removed taxes, shipping, and discounts as separate products from ActiveCampaign Deep Data orders
- 🔧 Fixed Fixed error caused with WooCommerce Dynamic Pricing and Drip's Shopper Activity API
- 🔧 Fixed Fixed time zone offset calculation with ActiveCampaign

#### #1.13.5 - 11/25/2019

- 🔧 Fixed Fixes for line items and fees causing problems with missing product titles in Drip and ActiveCampaign

#### #1.13.4 - 11/21/2019

- WooCommerce variation images will now be sent in detailed order data
- ✨ New Added option to disable syncing product attributes with WooCommerce

#### #1.13.3 - 11/18/2019

- 🔧 Fixed Fixed bug with ActiveCampaign rejecting orders with incomplete tax data

#### #1.13.2 - 10/21/2019

- ✨ New Added support for Fees with WooCommerce
- ⚡️ Improved Improved discounts and shipping support for ActiveCampaign
- 🔧 Fixed Fixed conflict with Event Espresso Stripe gateway

#### #1.13.1 = 10/9/2019

- 🔧 Fixed Fixed UTC+0 timezone causing errors with Drip and NationBuilder

#### #1.13 - 10/8/2019

- ✨ New Added NationBuilder integration
- 🔧 Fixed Fixed time zone calculation for occurred_at with Drip

#### #1.12 - 9/18/2019

- ✨ New Added refund support to ActiveCampaign
- ✨ New Added Give (donations) support
- ✨ New Added batch tool for resyncing AC customer IDs
- Increased product image size sent to Drip and ActiveCampaign
- ⚡️ Improved Improved logging
- 🔧 Fixed Fixed error in Drip with line item descriptions longer than 255 characters

#### #1.11 - 8/26/2019

- ✨ New Added Zoho integration
- ✨ New Added product price re-calculation for Ontraport when discounts are used
- ✨ New Added support for custom WooCommerce order numbers with ActiveCampaign

#### #1.10 - 8/7/2019

- ✨ New Added Event Espresso support
- 🔧 Fixed Fixes for deleted products in WooCommerce

#### #1.9.3 - 7/28/2019

- ✨ New Added support for sale prices on products with Ontraport
- 🔧 Fixed Fixed additional "Properties Value is not an integer" warnings with Drip Events

#### #1.9.2 - 7/8/2019

- ✨ New Added refund support for Infusionsoft
- ✨ New Added option to send product prices tax-inclusive
- ✨ New Added product image to ActiveCampaign order payload
- ✨ New Added product categories to Drip Shopper Activity data
- ✨ New Added product image to Drip order payload
- ✨ New Added support for free trials in Woo Subscriptions

#### #1.9.1 - 5/17/2019

- AgileCRM performance improvements
- Updated Drip with option for newer v3 API
- 🔧 Fixed Fixed "Properties value is not an integer" error in Drip

#### #1.9 - 4/12/2019

- ✨ New Added LifterLMS support

#### #1.8.2 - 4/8/2019

- AgileCRM bugfixes

#### #1.8.1 - 4/6/2019

- Order date tweaks in WooCommerce
- Better date handling for orders with AgileCRM
- 🔧 Fixed Fix for variation product IDs not saving

#### #1.8 - 2/15/2019

- ✨ New Added refunds support to Ontraport
- ✨ New Added option to update deal stages in HubSpot when WooCommerce order status is changed

#### #1.7.3 - 2/5/2019

- ✨ New Added tax line item support with Drip
- Drip now receives proper order date (and time zone)

#### #1.7.2 - 1/25/2019

- Error handling for WooCommerce order meta data that is not a meta object

#### #1.7.1 - 1/23/2019

- Option for turning off Conversion tracking with Drip
- ✨ New Added product ID into product dropdowns for Infusionsoft / Ontraport
- Integration classes can now be accessed via wp_fusion_ecommerce()->integrations->woocommerce (etc)

#### #1.7 - 12/24/2018

- Hubspot integration
- Restrict Content Pro integration
- Error handling for "The integration already exists in the system." message with ActiveCampaign
- ✨ New Added EDD payment gateway selector
- ✨ New Added SKU to Ontraport product data

#### #1.6.2 - 11/11/2018

- ✨ New Added bulk processing tool for WooCommerce orders
- 🔧 Fixed Fix for & symbols in product names causing errors with Infusionsoft
- ✨ New Added support for EDD Discounts Pro

#### #1.6.1 - 10/23/2018

- Bugfixes for addons / variations handling with Infusionsoft

#### #1.6 - 9/13/2018

- ✨ New Added support for WooCommerce Addons in ecommerce data
- Improvements to support changes in Drip's ecommerce functionality
- Amounts less than a dollar now syncing correctly with ActiveCampaign's Deep Data

#### #1.5.1 - 2/26/2018

- AgileCRM bugfixes
- 🔧 Fixed Fixed product lookup issues for Infusionsoft products with ampersands in the title

= 1.5 - 2/3/2018 =
- ✨ New Added AgileCRM ecommerce support
- Addded Ontraport referral tracking

#### #1.4

- ✨ New Added Drip ecommerce support
- 🔧 Fixed Fixed GMT offset issues with Infusionsoft

#### #1.3.5

- Order dates now use the date from the order instead of the current time
- Ontraport bugfixes

#### #1.3.4

- Russian character encoding fixes
- ✨ New Added admin tools for resetting wpf_ec_complete hooks on WooCommerce / EDD orders
- Prevent duplicate orders being sent on WooCommerce subscription auto-renewals

#### #1.3.3

- Disabled invoices being sent by Ontraport
- ✨ New Added backwards compatibility support for WC < 3.0
- Integrated WPF logging tools
- AC Deep Data integrations now triggers the "Makes A Purchase" action
- ✨ New Added error handling and logging for API failures

#### #1.3.2

- Misc. ActiveCampaign improvements
- 🔧 Fixed Fixed Infusionsoft affiliate cookie expiration

#### #1.3.1

- Bugfixes for WooCommerce 3.0.3

#### #1.3

- ✨ New Added Ontraport ecommerce integration
- Updated to support WooCommerce 3.0

#### #1.2

- ✨ New Added ActiveCampaign Deep Data Integration
- Better support for coupons using Easy Digital Downloads
- ✨ New Added support for Infusionsoft referral partner links

#### #1.1

- ✨ New Added support for EDD Recurring Payments

#### #1.0

- Further fixes to Asian character encodings

#### #0.9

- Updates for Woo Subscriptions 2.x

#### #0.8

- Support for Infusionsoft products with special character encodings

#### #0.7

- Support for WooCommerce variations
- Ability to manually associate WooCommerce products with Infusionsoft products
- Speed improvements for ActiveCampaign users with no configured sales pipelines

#### #0.6

- Pull revenue field before calculating if local record is empty
- Better handling for batch processing of old orders

#### #0.5

- 🔧 Fixed Fix for special characters in product names in Infusionsoft

#### #0.4

- Bugfixes

#### #0.3

- ✨ New Added ActiveCampaign integration

#### #0.2

- ✨ New Added Woo Subscriptions support

#### #0.1

- Initial release

---

## AgileCRM Enhanced Ecommerce

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/agilecrm-ecommerce/](https://wpfusion.com/documentation/ecommerce-tracking/agilecrm-ecommerce/)

### Overview

WP Fusion’s Ecommerce Addon (available for Plus and Professional license holders) supports sending ecommerce transaction data to your AgileCRM account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### Getting Started

After you install the Ecommerce Addon (or update to the latest version), WP Fusion will load a list of all configured products in your AgileCRM account. When you go to configure a product in any of our supported plugins, you’ll see a new dropdown field where you can link a product on your store with a product already in your AgileCRM account.

![](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-product-config-1024x437.jpg)

If you don’t already have the products created in AgileCRM, don’t worry… WP Fusion will automatically create them for you at the time of checkout, based on the existing product details in WordPress. WP Fusion will intelligently detect variable products in WooCommerce and create additional AgileCRM products based on those variations.

#### 

### How it Works

When a customer checks out on your site, WP Fusion will create a new deal in AgileCRM with the products purchased, the quantities, and total sale value. This sale data will be tied to the contact record who made the purchase.

#### How it Looks

![](https://wpfusion.com/wp-content/uploads/2018/02/agile-ecommerce-add-on-1024x274.jpg)Deal added to the “Won” column with order number and order value
![](https://wpfusion.com/wp-content/uploads/2018/02/agile-ecommerce-add-on-2-1024x343.jpg)Deal details with products purchased

#### Video – Enhanced Ecommerce – AgileCRM

---

## Drip Enhanced Ecommerce

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/)

### Overview

WP Fusion’s Ecommerce Addon (available for Plus and Professional license holders) supports sending ecommerce transaction data to your Drip account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### Getting Started

Install and activate the Ecommerce Addon, and then navigate to the Enhanced Ecommerce tab of the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2017/11/drip-enhanced-ecommerce-settings-1024x778.jpg)

The **Orders** setting is enabled by default— as long as this is checked, WP Fusion will automatically sync order data to Drip from any of the supported ecommerce plugins (above).

There are two additional settings:

#### Sync attributes

If you’re using a WooCommerce extension which attaches additional metadata to orders (i.e. [WooCommerce Product Addons](https://wpfusion.com/documentation/ecommerce/woocommerce-addons/)) and you wish to see this data in Drip, check the box for **Sync Attributes**.

Each product attribute or variation will be sent to Drip as a separate line item.

![](https://wpfusion.com/wp-content/uploads/2017/11/drip-sync-attributes-1024x610.jpg)When Sync Attributes is enabled in the WP Fusion settings, each selected product attribute is set to Drip as a line item on the order.
This can be used to trigger workflows based on specific variation purchases, or custom field values collected at checkout.

For example you could use [WooCommerce Gravity Forms Product Addons](https://wpfusion.com/documentation/ecommerce/woocommerce-gravity-forms-product-add-ons/) to ask the customer if their gift needs personalizing, and then use this value as a condition in your Drip workflows.

#### Sync product edits

By default, WP Fusion syncs your products with Drip as customers check out on your store. However, this means that you can only use a [Product Content Block](https://help.drip.com/hc/en-us/articles/4424695627277-Product-Content-Block) in an email with products that have already been purchased.

By enabling **Sync Product Edits**(with WooCommerce), WP Fusion will create and update products in Drip as they are published and edited in WooCommerce.

**Note:** Products created in WooCommerce don’t show up in Drip right away. In our experience it can take about an hour for Drip to process the new product data and make it available for the Product Content Block.

### How it works

When a customer checks out on your site, WP Fusion will create a new order in Drip with the products purchased, the quantities, and total sale value. This sale data will be tied to the contact record who made the purchase. The contact’s Lifetime Value will also be updated.

#### Variable products

If you’re selling variable products with WooCommerce, WP Fusion will update the *Product Variant ID*property in Drip with the ID of the product variation.

![](https://wpfusion.com/wp-content/uploads/2017/11/drip-variation-trigger-1024x694.jpg)WP Fusion updates the Product Variant ID field in Drip with a variable product’s ID, and this can be used in triggers and conditions.
This can be used to trigger workflows based on a specific product variation purchase— for example a monthly vs annual subscription.

#### How it looks

![](https://wpfusion.com/wp-content/uploads/2017/11/drip-orders-v3-1-1024x386.jpg)Orders are shown in the subscriber’s orders feed
![](https://wpfusion.com/wp-content/uploads/2017/11/drip-orders-v3-2-1024x460.jpg)Order details are stored including products purchased, images, taxes, discounts, and shipping
![](https://wpfusion.com/wp-content/uploads/2017/11/drip-ecommerce-2-1024x163.jpg)Lifetime values are updated automatically

#### Video – Enhanced Ecommerce – Drip

#### Order status changes

With WooCommerce, when an order status is updated, WP Fusion will automatically sync the status to Drip.

- When an order is marked **Processing**, the status in Drip will be updated to Placed
- When an order is marked **Completed**, the status in Drip will be updated to Fulfilled
- When an order is marked **Cancelled**, the status in Drip will be updated to Cancelled
- When an order is **Refunded**, the status in Drip will be updated to Refunded and the order total will be set to 0

![](https://wpfusion.com/wp-content/uploads/2017/11/drip-ecom-order-refunded-1024x657.jpg)A cancelled order in WooCommerce is updated in Drip
Note that the status shown in the Drip Orders list doesn’t fully indicate the status of the order:

- - Both Placed and Fulfilled orders appear exactly the same, with a green badge and the total amount paid.
- Refunded orders show a green badge but a $0.00 total order amount.
- Cancelled orders show a red “Cancelled” badge.

---

## NationBuilder Enhanced Ecommerce

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/nationbuilder-ecommerce/](https://wpfusion.com/documentation/ecommerce-tracking/nationbuilder-ecommerce/)

### Overview

WP Fusion’s Ecommerce Addon (available for Plus and Professional license holders) now supports sending ecommerce transaction data to your NationBuilder account for sales or donations made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### Getting Started

After you install the Ecommerce Addon (or update to the latest version), WP Fusion will begin sending transactions from any of the plugins listed above to your NationBuilder account, as donations.

#### General Settings

WP Fusion allows you to specify a custom tracking code slug for donations synced from WordPress. This setting is found at Settings » WP Fusion » Enhanced Ecommerce.

![](https://wpfusion.com/wp-content/uploads/2017/04/nationbuilder-enhanced-ecommerce-1024x384.jpg)

If a tracking code slug is specified, it will be displayed in the donations list in NationBuilder. You can use tracking codes to differentiate between different donation sources.

![](https://wpfusion.com/wp-content/uploads/2017/04/nationbuilder-tracking-codes-1024x355.jpg)Tracking codes are displayed in the donations list in NationBuilder

### How it Works

When a customer checks out on your site, WP Fusion will create a new donation NationBuilder with the order date and total value. This donation data will be tied to the Person record who made the donation.

#### How it Looks

![](https://wpfusion.com/wp-content/uploads/2017/04/nationbuilder-ecom-1-1024x394.jpg)Donor badge is displayed on the Person record in NationBuilder
![](https://wpfusion.com/wp-content/uploads/2017/04/nationbuilder-ecom-2-1024x348.jpg)Donations are displayed on the Person details view
![](https://wpfusion.com/wp-content/uploads/2017/04/nationbuilder-ecom-3-1024x706.jpg)The integration name and transaction ID are shown in the donation notes

#### Video – Enhanced Ecommerce – NationBuilder

### Modifying the API data

WP Fusion supports using [filters](https://developer.wordpress.org/plugins/hooks/filters/) to modify the data sent to Nationbuilder with an ecommerce order.

The filter for Nationbuilder is the 
```
wpf_ecommerce_nationbuilder_add_donation
```

 filter.

In this case example we’re going to set the name of the employer for the donation based on the value entered on the Give donation form, and mark the donation as a corporate contribution.

```
function my_custom_deal_properties( $deal, $order_id ) {

	/* $deal is structured like:

	$deal = array(
		'donor_id'              => 123,
		'amount'                => '$100',
		'amount_in_cents'       => 10000,
		'payment_type_name'     => 'Credit Card',
		'payment_type_ngp_code' => 'D',
		'succeeded_at'          => '2023-05-30T15:19:21',
		'note'                  => 'Give payment #1234',
	); */

	$payment = new Give_Payment( $order_id );
	$donor   = new Give_Donor( $payment->get_donor_id() );

	$company_name = $donor->get_company_name();

	if ( ! empty( $company_name ) ) {
		$deal['corporate_contribution'] = true;
		$deal['employer']               = $company_name;
	}

	return $deal;

}

add_filter( 'wpf_ecommerce_nationbuilder_add_donation', 'my_custom_deal_properties', 10, 2 );
```

For more information on the available fields, see the [Nationbuilder API documentation](https://nationbuilder.com/donations_api).

---

## ActiveCampaign Enhanced Ecommerce

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/activecampaign-ecommerce/](https://wpfusion.com/documentation/ecommerce-tracking/activecampaign-ecommerce/)

### Overview

WP Fusion’s Ecommerce Addon (available for Plus and Professional license holders) allows you to track customer purchases and lifetime revenue in ActiveCampaign for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

After installing the plugin, go to the WP Fusion settings page and click on the *Enhanced Ecommerce* tab to see the configurable options.

### Deep Data

**Note:** Deep Data integration with ActiveCampaign requires a Plus level plan or higher.
**Warning:** If you’re connecting WooCommerce to ActiveCampaign via WP Fusion’s Deep Data integration, make sure you’ve deactivated and disconnected ActiveCampaign’s [native WooCommerce integration](https://help.activecampaign.com/hc/en-us/articles/115000652490-WooCommerce-Deep-Data-integration-overview), as having two active connections will result in duplicate order data.
WP Fusion includes support for ActiveCampaign’s [Deep Data API](http://www.activecampaign.com/deep-data/). On the *Enhanced Ecommerce* tab in the WP Fusion settings, check the box next to Deep Data and save the settings to initialize the connection.

![](https://wpfusion.com/wp-content/uploads/2016/07/ac-deep-data-3-1-1024x894.jpg)

In your ActiveCampaign account, navigate to the settings and click on the Integrations tab. You should see WP Fusion listed.

![](https://wpfusion.com/wp-content/uploads/2016/07/ac-deep-data-connected-integrations-1024x561.jpg)

Any sales made in any of the supported plugins will be added to the corresponding contact record using the new deep data display. ActiveCampaign will automatically track lifetime revenue, total orders, and total products purchased for the contact.

**Note:** When WP Fusion is connected to ActiveCampaign via Deep Data, ActiveCampaign will apply a tag “WP Fusion-customer” to anyone who makes a purchase. This is an ActiveCampaign feature and can’t be turned off, though the tag can be removed using an automation.

#### How it looks

![](https://wpfusion.com/wp-content/uploads/2016/07/ac-deep-data-5-1024x875.jpg)Deep Data from WooCommerce showing on the contact record in ActiveCampaign
![](https://wpfusion.com/wp-content/uploads/2016/07/ac-deep-data-6.jpg)The order details are shown inside ActiveCampaign
![](https://wpfusion.com/wp-content/uploads/2016/07/ac-deep-data-with-attributes-773x1024.jpg)Deep Data order showing selected product attributes, with the **Sync Attributes** setting on.

#### Refunds

ActiveCampaign doesn’t have a specific order state for “refunded”. However, when Deep Data is enabled, if an order is refunded or cancelled in WooCommerce the order total in ActiveCampaign will be updated to $0.00 so that lifetime values are still calculated accurately.

#### Coupons

ActiveCampaign’s email editor has a [coupon block](https://help.activecampaign.com/hc/en-us/articles/10765932583196-Use-the-Coupon-block-with-your-email-campaigns) that can be used to insert a WooCommerce coupon into an email campaign.

At the moment the coupon block is **not supported****with WP Fusion**. Since the coupon is not unique per contact (i.e. everyone who receives the campaign receives the same coupon), we’ve found it’s just as easy to [create the coupon in WooCommerce](https://woocommerce.com/posts/coupons-with-woocommerce/) and copy the code into the campaign email.

However, if you would prefer to have access to the coupon block, you can disable the Enhanced Ecommerce addon for WP Fusion, and instead use [ActiveCampaign’s WooCommerce plugin](https://wordpress.org/plugins/activecampaign-for-woocommerce/).

### Revenue Tracking

**Note:** If you’re using our Deep Data integration with ActiveCampaign, revenue tracking is handled automatically by ActiveCampaign. You only need to set up revenue tracking if you’ve elected *not* to use the Deep Data API.
To set up revenue tracking, first create a new contact custom field in ActiveCampaign. This field will be used to track the total amount spent by a customer in your store. If the field doesn’t appear in the Total Revenue Field dropdown, begin typing the name and click “Resynchronize” at the prompt to load the new custom field from ActiveCampaign.

Whenever a customer checks out on your store, this field will be incremented with the total value of their purchase.

![ac-setup](https://wpfusion.com/wp-content/uploads/2016/07/ac-setup-1024x308.jpg)

### Deals Tracking

For more advanced ecommerce automation, [ActiveCampaign’s Deals system](http://www.activecampaign.com/crm/) is one of the best systems available. Using the Enhanced Ecommerce Addon, WP Fusion can create deals in ActiveCampaign with the order value and other details, and associate those deals with the originating customer.

![](https://wpfusion.com/wp-content/uploads/2016/07/deals-tracking-01-1024x445.jpg)

**Note:** The Deal settings will be hidden if your ActiveCampaign account doesn’t support Deals, or if you haven’t created any Pipelines or Stages yet. If you’ve just created a new Pipeline, click Resynchronize on the Setup tab to reload the available Pipelines and Stages. The settings should now be visible.

#### How to Enable Deals

To enable deals tracking, first check the box next to Deals in the Ecommerce Tracking settings. Next select a pipeline and stage where new deals will be inserted (deals can later be moved using automations).

![](https://wpfusion.com/wp-content/uploads/2016/07/ac-deals-admin-1024x645.jpg)

If you’ve just created a pipeline or stage and it doesn’t appear in the list, go to the Setup tab and the Refresh Available Tags & Fields button to reset the list of available pipelines and stages.

Once enabled, deals will be added to ActiveCampaign like in the screenshot below.

![](https://wpfusion.com/wp-content/uploads/2016/07/ac-deals-1-1024x674.jpg)

Each deal will have a title indicating the plugin that created the deal and order number. The deal value will be set to the total value of the purchase, and the deal will be assigned to the contact record who made the order.

A note will be attached to the deal containing the products purchased and a link to view the associated order in your WordPress admin.

Using [ActiveCampaign’s Automations](http://www.activecampaign.com/automation/) you can then move deals between stages, create followup tasks, set deal statuses, and much more.

#### Custom deal fields

WP Fusion does not have the ability to directly map custom order fields with custom deal fields (for example options collected by [WooCommerce Product Options](https://wpfusion.com/documentation/ecommerce/woocommerce-product-options/)).

However, you can use an automation to copy the values from the contact record to custom deal fields.

Since WP Fusion creates the contact at checkout before the deal, we will use *Contact’s deal stage changes* as the start trigger for the automation, to ensure the contact is fully saved.

![](https://wpfusion.com/wp-content/uploads/2016/07/ac-ecom-deal-custom-fields-3-1024x581.jpg)

Next, set any entry criteria, for example you can limit the trigger to only a specific stage, or to only contact’s with a specific tag.

Connect the trigger to an *Update a custom deal field* action.

![](https://wpfusion.com/wp-content/uploads/2016/07/ac-ecom-deal-custom-fields-1-1024x458.jpg)

And in the settings, select your custom deal field, and choose *Copy data from an existing Contact* as the action. For the Value, select the custom field on the contact to copy the value from.

You can add multiple fields by clicking the *Add a field* link.

Finally, for *Affects*, select *Triggered Deal*, to ensure that only the deal that was just created is updated.

![](https://wpfusion.com/wp-content/uploads/2016/07/ac-ecom-deal-custom-fields-2-1024x639.jpg)

In the example above, we have an automation that is triggered whenever a deal is created in the Order Placed deal stage, by contacts who have the tag *Event Attendee*.

The action copies the value of Event Name from the contact to the Registered Event Name on the deal. This lets us see the name of the ticket the contact registered for (for example with [The Events Calendar / Event Tickets](https://wpfusion.com/documentation/events/the-events-calendar-event-tickets/)).

### Video – Enhanced Ecommerce – ActiveCampaign

### Developers

The Enhanced Ecommerce addon has three filters specific to ActiveCampaign, 
```
wpf_ecommerce_activecampaign_add_deal
```

, 
```
wpf_ecommerce_activecampaign_add_deal_note
```

 and 
```
wpf_ecommerce_activecampaign_add_deep_data
```

 depending on whether you’re syncing Deals or Deep Data.

#### Deal Filter

For example to modify the deal title:

```
function my_custom_deal_properties( $deal, $order_id ) {

	/* $deal is structured like (see https://developers.activecampaign.com/reference#create-a-deal-new)

	$deal = array(
		'title'     => 'WooCommerce Order #XXX',
		'value'     => 100,
		'currency'  => 'usd',
		'pipeline'  => '1',
		'stage'     => '1',
		'contactid' => '123',
		'owner'     => '1',
	); */

	$deal['title'] = 'My Order #' . $order_id; // Change the title

	return $deal;

}

add_filter( 'wpf_ecommerce_activecampaign_add_deal', 'my_custom_deal_properties', 10, 2 );
```

#### Deal Note Filter

For example to modify the note description:

```
function my_custom_note( $note, $order_id ) {

	$note = 'My custom note for order #' . $order_id;

	return $note;

}

add_filter( 'wpf_ecommerce_activecampaign_add_deal_note', 'my_custom_note', 10, 2 );
```

#### Deep Data Filter

For example to record the use of a WooCommerce coupon:

```
function my_custom_deep_data_properties( $data, $order_id ) {

	/* $data is structured like below (for more info https://developers.activecampaign.com/reference#create-order)

	$data = array(
		'ecomOrder' => array(
			'externalid'    => '123',
			'source'        => '1',
			'email'         => 'email@example.com',
			'orderNumber'   => '123',
			'orderProducts' => array(
				'externalid'  => 'PROD12345',
				'name'        => 'Pogo Stick',
				'price'       => 4900,
				'quantity'    => 1,
				'category'    => 'Toys',
				'sku'         => 'POGO-12',
				'description' => 'lorem ipsum...',
				'imageUrl'    => 'https://example.com/product.jpg',
				'productUrl'  => 'https://store.example.com/product12345'
			),
			'orderUrl'      => 'https://store.example.com/wp-admin/edit.php?post_id=123',
			'orderDate'     => '2016-09-13T17:41:39-04:00',
			'totalPrice'    => 4900,
			'currency'      => 'USD',
			'connectionid'  => '1',
			'customerid'    => '123',
		),
	); */

	$order = wc_get_order( $order_id );

	$coupons = $order->get_coupon_codes(); // See if a coupon was used

	if ( ! empty( $coupons ) ) {

		// Add it to the deep data

		$data['orderDiscounts'] = array(
			array(
				'name'           => $coupons[0],
				'type'           => 'order',
				'discountAmount' => $order->get_total_discount(),
			),
		);
	}

	return $data;

}

add_filter( 'wpf_ecommerce_activecampaign_add_deep_data', 'my_custom_deep_data_properties', 10, 2 );
```

---

## Infusionsoft / Keap Enhanced Ecommerce

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/)

### Overview

WP Fusion’s Ecommerce Addon (available for Plus and Professional license holders) supports sending order data to your Infusionsoft (or Keap) account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### Getting Started

After you install the Ecommerce Addon (or update to the latest version), WP Fusion will load a list of all configured products in your Infusionsoft account, and attempt to match them up with existing products in your store.

When you go to configure a product in one of our supported plugins, you’ll see a new dropdown field where you can link a product on your store with a product already in your Infusionsoft account.

![](https://wpfusion.com/wp-content/uploads/2016/07/infusionsoft-ecommerce-product-config-1024x449.jpg)

If you don’t already have the products created in Infusionsoft, don’t worry… WP Fusion will automatically create them for you at the time of checkout, based on the existing product details.

WP Fusion will intelligently detect variable products in WooCommerce and create additional products in Infusionsoft based on those variations.

#### How it Works

When a customer checks out on your site, WP Fusion will create a new order in Infusionsoft with the products purchased, quantities, and total sale value.

WP Fusion will also add line items to the order for additional line items such as taxes, shipping, and any coupons used. This sale data will be tied to the contact record who made the purchase.

Any recurring payments, such as from WooCommerce subscriptions, will also automatically be added once the automatic payment has completed successfully.

**Note:** It is currently [not possible to refund an order over the Infusionsoft / Keap API](https://developer.infusionsoft.com/faqs/add-refund-order-api/). If you refund an order in WordPress it will still show as paid in Infusionsoft. The WP Fusion logs and WooCommerce order notes will include a link to the order in Infusionsoft so you can log in and manually mark it refunded.

#### How it Looks

![is-orders-overview](https://wpfusion.com/wp-content/uploads/2016/07/is-orders-overview-1024x116.jpg)Orders will be displayed under the orders tab for each contact record.
![is-ss](https://wpfusion.com/wp-content/uploads/2016/07/is-ss-1024x460.jpg)Clicking on an order will give you the full details of the order, including the products purchased, payment type, and any additional line items.

### Affiliate Tracking

The Ecommerce Addon can detect affiliate links and referral partner links generated through Infusionsoft’s referral partner center.

Sales generated via a referral link will set the Sale Referral Partner on the order and any applicable commissions will be credited.

**Note:** For the best results with referral partner tracking, it’s recommended to enable the Infusionsoft tracking script. It can be [enabled in the WP Fusion settings](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/), or you can embed it yourself following the [instructions from Infusionsoft](https://help.infusionsoft.com/help/embed-tracking-code-into-your-website).
![](https://wpfusion.com/wp-content/uploads/2016/07/infusionsoft-affiliate-tracking.jpg)

#### Modified redirect URL

To use referral links with WP Fusion, you’ll need to [modify your tracking links](https://help.infusionsoft.com/help/track-referral-activity-via-the-api) so they can pass data to outside services. This allows the tracking link to pass the affiliate ID to WP Fusion, so it can be synced back to Infusionsoft after someone makes a purchase.

There are two ways to do this:

#### Using the referral partner code

Each referral partner has a unique code. You can see this in the Referral Partners list in Infusionsoft.

![](https://wpfusion.com/wp-content/uploads/2016/07/infusionsoft-referral-partner-code-1024x483.png)

You can manually create a tracking link by appending 
```
?aff=CODE
```

 to any link to your site.

For example if we wanted to give the partner Dwight (from the screenshot above), a link to our sales page, the URL could look like 
```
https://mysite.com/sales-page/?aff=dwight
```

This is a quick way to generate a tracking link for a specific partner.

#### Via the Referral Partner Center

If you want your partners to generate their own links, you will need to use the [modified tracking link](https://help.infusionsoft.com/userguides/referral-partners/set-up-a-referral-partner-program/manage-referral-tracking-links-using-the-api).

Head to Referral Partners » Referral tracking links » Add a Referral Tracking link.

![](https://wpfusion.com/wp-content/uploads/2016/07/infusionsoft-referral-tracking-links-1024x549.jpg)

Instead of entering the direct URL to your site, enter 
```
https://appName.infusionsoft.com/aff.html?to=
```

, followed by the URL to your site. For example 
```
https://APPNAME.infusionsoft.com/aff.html?to=https://mysite.com/
```

 where 
```
APPNAME
```

 is the name of your Infusionsoft or Keap app.

The link will show up in the partner center for all your partners. When the link is clicked, Infusionsoft will append a 
```
&affiliate=
```

 parameter to the end of the URL which contains the ID of the tracked affiliate. WP Fusion will then use this to award the sale to the correct referral partner.

For more information, see [Standard referral tracking link modification](https://help.infusionsoft.com/help/track-referral-activity-via-the-api) in the Infusionsoft documentation.

#### Testing

You can test the referral link tracking by following a tracking link and doing a test order. The WP Fusion logs will show a message indicating which referral partner ID is being credited with the sale.

![](https://wpfusion.com/wp-content/uploads/2016/07/infusionsoft-referral-logs-1024x504.png)The WP Fusion activity logs show when a sale is being credited to a referral partner.
You can also confirm that the visitor is being tracked by following a tracking link and looking at your cookies in your browser’s developer tools.

![](https://wpfusion.com/wp-content/uploads/2016/07/infusionsoft-affiliate-cookies-1024x289.jpg)

The referral partner ID will be indicated by the 
```
is_aff
```

 cookie.

### Video – Infusionsoft Enhanced Ecommerce

Here’s a video demo showing WP Fusion’s Enhanced Ecommerce integration in action (with WooCmmerce).

---

## Ecommerce Tracking Overview

**Source:** [https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/)

### Overview

WP Fusion already connects your ecommerce platform [to your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/), allowing you to create contacts and apply tags when products are purchased, but only contact data is transferred, not the transaction details for each purchase.

Our **Ecommerce Addon**, available to Plus and Professional license holders, builds on this functionality by letting you create separate order records in your CRM’s ecommerce platform, including products purchased, coupons and discounts used, shipping, and taxes.

#### How it Works

Using this addon you can keep track of ecommerce data in your CRM alongside each contact record, allowing for greater flexibility in creating campaigns and automations, as well as using your CRM’s reporting tools to monitor your sales performance.

When a customer checks out, WP Fusion will create an order record and send it to your CRM. If your CRM supports products WP Fusion will also create new product records and add them to the order.

		The CRMs supported by Enhanced Ecommerce are listed below. Click on each to learn more about the capabilities of the integration.

- [ActiveCampaign](https://wpfusion.com/documentation/ecommerce-tracking/activecampaign-ecommerce/)
- [AgileCRM](https://wpfusion.com/documentation/ecommerce-tracking/agilecrm-ecommerce/)
- [Brevo](https://wpfusion.com/documentation/ecommerce-tracking/brevo-enhanced-ecommerce/)
- [Drip](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/)
- [Groundhogg](https://wpfusion.com/documentation/ecommerce-tracking/groundhogg-ecommerce/)
- [HighLevel](https://wpfusion.com/documentation/ecommerce-tracking/highlevel-ecommerce/)
- [HubSpot](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/)
- [Infusionsoft / Keap](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/)
- [MailerLite](https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/)
- [NationBuilder](https://wpfusion.com/documentation/ecommerce-tracking/nationbuilder-ecommerce/)
- [Ontraport](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/)
- [Salesforce](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/)
		

#### Pipelines

With CRMs that support sales pipelines, WP Fusion can automatically move deals through pipelines based on order status changes in WooCommerce.

![](https://wpfusion.com/wp-content/uploads/2018/12/givewp-enhanced-ecommerce-hubspot-pipelines-1024x633.jpg)Visualize [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce) donations in [HubSpot](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/), and automatically follow up with donors using pipeline automation.
The CRMs that support sales pipelines are:

- [ActiveCampaign](https://wpfusion.com/documentation/ecommerce-tracking/activecampaign-ecommerce/)
- [Brevo](https://wpfusion.com/documentation/ecommerce-tracking/brevo-enhanced-ecommerce/)
- [Groundhogg](https://wpfusion.com/documentation/ecommerce-tracking/groundhogg-ecommerce/)
- [HighLevel](https://wpfusion.com/documentation/ecommerce-tracking/highlevel-ecommerce/)
- [HubSpot](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/),
- [Salesforce](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/)
- and [Zoho](https://wpfusion.com/documentation/ecommerce-tracking/zoho-ecommerce/)

#### Products

With CRMs that support products, WP Fusion can automatically create product records in the CRM based on products in your ecommerce plugin, and associate products and line items with orders.

![](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-products-1024x300.jpg)Using [Enhanced Ecommerce with Ontraport](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/) allows you to track sales performance of individual products in your CRM.
The CRMs that support products are:

- [AgileCRM](https://wpfusion.com/documentation/ecommerce-tracking/agilecrm-ecommerce/)
- [Drip](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/)
- [HubSpot](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/)
- [Infusionsoft / Keap](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/),
- [MailerLite](https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/),
- [Ontraport](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/)
- [Salesforce](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/)
- and [Zoho](https://wpfusion.com/documentation/ecommerce-tracking/zoho-ecommerce/)

### Supported Plugins

#### WooCommerce

The Ecommerce Addon will send enhanced ecommerce data for all orders, including support for products, variations, quantities, discounts, shipping, and taxes.

In CRMs that have Products as separate entities from Orders, you can associate your WooCommerce products with CRM products by selecting them from the product dropdowns.

![](https://wpfusion.com/wp-content/uploads/2016/06/woo-ecommerce-product-select-1024x582.jpg)

Variable products can be associated within the individual variations.

#### Easy Digital Downloads

The Ecommerce Addon will send enhanced ecommerce data for all orders, including support for downloads, download price IDs, discounts, and taxes.

In CRMs that have Products as separate entities from Orders, you can associate your EDD products with CRM products by selecting them from the product dropdown.

![](https://wpfusion.com/wp-content/uploads/2016/06/edd-ecommerce-product-1024x479.jpg)

#### LifterLMS

The Ecommerce Addon will send enhanced ecommerce data for all purchases of access plans, including support for discounts.

In CRMs that have Products as separate entities from Orders, you can associate your LifterLMS access plans with CRM products by selecting them from the product dropdown while editing the access plan.

![](https://wpfusion.com/wp-content/uploads/2016/06/lifterlms-ecommerce-product-1024x303.jpg)

#### Gravity Forms

The Ecommerce Addon can send enhanced ecommerce data to your CRM for any Gravity Forms payment form that already has a WP Fusion feed configured on it. The available options depend on your connected CRM. For more information, see the [Gravity Forms documentation](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce).

![](https://wpfusion.com/wp-content/uploads/2016/01/gravity-forms-enhanced-ecommerce-1024x890.jpg)

The integration supports products, shipping, discounts, and product options (i.e. addons).

![](https://wpfusion.com/wp-content/uploads/2016/06/gravity-forms-enhanced-ecommerce-logs-1024x604.jpg)

The activity logs will show the data being synced as well as any errors.

#### MemberPress

The Ecommerce Addon will send enhanced ecommerce data for all purchases of memberships, including recurring subscription payments.

In CRMs that have Products as separate entities from Orders, you can associate your MemberPress membership products with CRM products by selecting them from the product dropdown while editing the membership level.

![](https://wpfusion.com/wp-content/uploads/2016/06/memberpress-ecom-1024x549.jpg)

#### Event Espresso

The Ecommerce Addon will send enhanced ecommerce data for all purchases of tickets in Event Espresso.

In CRMs that have Products as separate entities from Orders, you can associate your Event Espresso tickets with CRM products by selecting them from the product dropdown while editing the ticket.

![](https://wpfusion.com/wp-content/uploads/2016/06/event-espresso-ecommerce-1024x409.jpg)

#### Give

The Ecommerce Addon will send enhanced ecommerce data for all donations made in [Give](https://wpfusion.com/documentation/other/give/).

In CRMs that have Products as separate entities from Orders, you can associate your Give donation levels with CRM products by selecting them from the product dropdown while editing the donation level.

![](https://wpfusion.com/wp-content/uploads/2016/06/give-ecom-1024x619.jpg)

#### SureCart

With [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce), the Ecommerce Addon will automatically send enhanced ecommerce data for all orders, including support for products, product variants, quantities, discounts, shipping, taxes, and recurring payments.

In CRMs that have Products as separate entities from Orders, you can associate your SureCart products with CRM products by selecting them in the Integrations settings of each SureCart product.

![surecart-enhanced-ecom-select-product](https://wpfusion.com/wp-content/uploads/2022/12/surecart-enhanced-ecom-select-product-1024x639.jpg)WP Fusion’s Enhanced Ecommerce integration allows you to link SureCart products with products in your CRM, in this case [Ontraport](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/).
For more information, see the [SureCart documentation](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce).

#### Paid Memberships Pro

The Ecommerce Addon will send enhanced ecommerce data for all purchases of memberships, including recurring subscription payments.

In CRMs that have Products as separate entities from Orders, you can associate your membership products with CRM products by selecting them from the product dropdown while editing the membership level.

![screenshot of a form titled level specific field mapping displaying dropdown menus for mapping crm fields like membership level, status, start and expiration dates, subscription price, payment date, and hubspot product for ecommerce tracking.](https://wpfusion.com/wp-content/uploads/2016/06/PMPro-Enhanced-Ecommerce-CRM-Product-1024x520.png)

####

---

