# Woocommerce

*Category from Independent Analytics Pro documentation*

---

## Why Are My Sales Metrics Different in WooCommerce vs. Independent Analytics Pro?

**Source:** [https://independentwp.com/knowledgebase/woocommerce/metrics-different-woocommerce/](https://independentwp.com/knowledgebase/woocommerce/metrics-different-woocommerce/)

There are a few reasons why your sales metrics can appear different in WooCommerce vs. Independent Analytics Pro.

These are mainly differences in the way the data is reported due to the analytics serving different purposes.

## Revenue attributed to different days

**WooCommerce attributes revenue to the day it’s received, while Independent Analytics Pro attributes revenue to the day the order was placed.**

For example, if a customer places an order on the 1st day of the month and pays on the 3rd, WooCommerce will attribute the revenue to the 3rd. From the perspective of an eCommerce platform, this makes sense because you need to see clearly when you receive revenue so you can understand your cash flow.

In this same scenario, Independent Analytics Pro will report the order on the 1st, and when the customer pays, it will also attribute the revenue to the 1st. This is necessary so that the order and earnings can be attributed to the session where the order took place.

For instance, when you view the Referrers report for the 1st, you can see that a visitor came from Google and spent $20. The idea is to attach earnings to a single referrer/campaign/page, and this approach makes that easy.

If the revenue is reported on a separate day, it becomes more difficult to trace where your earnings came from, and the results can get very confusing when viewing sales for individual days, e.g. you could view the Campaigns report for today and see $100 in revenue but no campaigns to attribute it to because the sales all came from a campaign that people visited yesterday but not today.

## Counting taxes and shipping costs

WooCommerce has a variety of metrics for evaluating revenue with and without taxes and shipping costs.

Independent Analytics Pro includes all revenue in its Gross Sales metric, which includes taxes and shipping costs. We do this to keep the metric simple and to enable consistency with other eCommerce plugins, like Easy Digital Downloads and FluentCart.

For this reason, you may see a difference in some metrics, like Average Order Volume, when comparing WooCommerce with IA Pro. Namely, the value might be higher in IA Pro because taxes and shipping costs are included.

The Total Sales metric is Gross Sales – Refunds.

## Missing orders

There are times when you may see an order reported in WooCommerce, but not in Independent Analytics Pro. For instance, if you manually create an order for a customer, this will not be reported by IA Pro because there was no recorded session where the order took place.

If you have other orders that are missing, please follow the [steps in this guide](https://independentwp.com/knowledgebase/woocommerce/why-arent-sales-tracked/) to resolve the issue.

---

## Why Aren’t My Sales Getting Tracked?

**Source:** [https://independentwp.com/knowledgebase/woocommerce/why-arent-sales-tracked/](https://independentwp.com/knowledgebase/woocommerce/why-arent-sales-tracked/)

There are a few reasons why you could see missing sales in the analytics.

## Track logged-in visitors

First, make sure that you are [tracking logged-in visitors](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/06/track-logged-in-users.png). Otherwise, the activity of your logged-in customers will go untracked, leading to unrecorded sales.

![Tracking logged-in visitors](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:877/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/06/track-logged-in-users.png)

## Check the order statuses

Independent Analytics only reports orders with certain statuses, including Processing, Refunded, and Completed. If your store has custom order statuses added by a plugin, those won’t be tracked by default.

You can [choose which order statuses](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/08/woocommerce-order-statuses.png) should be counted via the **Analytics > Settings** menu. You can update these at any time to change which orders are shown in the analytics.

![WooCommerce order statuses](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:468/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/08/woocommerce-order-statuses.png)

## Check your error log

If the solutions above don’t help, then there may be an error occurring during the checkout process. Please [enable error logging](https://independentwp.com/knowledgebase/common-questions/enable-error-logging/) on your site and then wait until another sale goes untracked. You can then check the debug log for a “Fatal” error that occurred at the same time as the sale.

The debug log will be located in the 
```
/wp-content/
```

 folder.

If you need additional assistance, please reach out to us at support@independentwp.com, and we’ll be happy to help.

---

## Do Sales Show Up Right Away?

**Source:** [https://independentwp.com/knowledgebase/woocommerce/do-sales-show-up-right-away/](https://independentwp.com/knowledgebase/woocommerce/do-sales-show-up-right-away/)

Yes, all eCommerce sales show up immediately in the Analytics dashboard.

There is an exception to this rule for SureCart upsells and refunds. If you’re using SureCart, regular sales will show up immediately, but upsells and refunds can take **up to 5 minutes** to appear in the Analytics menu. This is because we sync our database with SureCart’s platform every 5 minutes to update the orders with additional upsell and refund data.

---

## Which eCommerce Plugins Does it Integrate With?

**Source:** [https://independentwp.com/knowledgebase/woocommerce/supported-ecommerce-plugins/](https://independentwp.com/knowledgebase/woocommerce/supported-ecommerce-plugins/)

Independent Analytics Pro currently integrates with the following eCommerce plugins:

1. WooCommerce
2. FluentCart
3. SureCart
4. Easy Digital Downloads
5. Paid Memberships Pro

Sales tracking is automatic and does not require any configuration.

[Learn how to use an eCommerce integration](https://independentwp.com/knowledgebase/woocommerce/woocommerce-integration/).

---

## How to Choose Which WooCommerce Order Statuses to Track

**Source:** [https://independentwp.com/knowledgebase/woocommerce/woocommerce-order-statuses/](https://independentwp.com/knowledgebase/woocommerce/woocommerce-order-statuses/)

By default, the following three order statuses will be counted in the analytics:

- Completed
- Processing
- Refunded

If you have a plugin that adds more statuses, or if you’ve created your own custom statuses, you may want to include them in the analytics too.

To choose which order statuses get counted, visit the **Analytics > Settings** menu and then scroll down to the **WooCommerce Order Statuses** section.

![WooCommerce order statuses](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:468/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/08/woocommerce-order-statuses.png)

To include an additional status in the analytics, all you have to do is check the box next to it, and then click the **Save** button.

This change will show up immediately in the analytics reports, and can be modified whenever needed.

## A brief example

Let’s say that your orders are marked as Processing after a customer pays. You then change the order status to Shipped once it’s mailed. In this case, you would see the order appear in the analytics while its status is Processing, but it would then disappear when the status is switched to Shipped. Once the order is marked as Completed, it would show up in the analytics again.

That would be extremely confusing! In this case, you would want to include the Shipping status in the analytics, and then you would have consistent sales reporting.

---

## The eCommerce Metrics Explained

**Source:** [https://independentwp.com/knowledgebase/woocommerce/woocommerce-metrics/](https://independentwp.com/knowledgebase/woocommerce/woocommerce-metrics/)

The eCommerce integrations add eight new metrics to the reports. Below are simple explanations of each metric.

**Orders:**the number of completed orders.

**Gross sales:** the total revenue of completed orders.

**Refunds:** the number of refunded orders.

**Refunded amount:** the total value of refunded orders.

**Total sales:** total earnings after refunds, including shipping costs (*gross sales – refunded amount*)

**Conversion rate:** the percentage of visitors that completed a purchase (*orders / visitors*).

**Earnings per visitor:** the average monetary value from each visitor  (*net sales / visitors*).

**Average order volume:** the average value of an order (*gross sales / orders*).

---

## What the WooCommerce “Customer Journey” Box Displays

**Source:** [https://independentwp.com/knowledgebase/woocommerce/order-referrers-box/](https://independentwp.com/knowledgebase/woocommerce/order-referrers-box/)

To help you track the source of individual sales, Independent Analytics Pro adds a **Customer Journey** box inside the Order details page.

To find this info, start by visiting the **WooCommerce > Orders** menu and then select an Order from the menu. In the Order details page, you’ll find the **Customer Journey** box in the right sidebar below the **Order Notes** box.

![Order referrer box](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:817/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/01/order-referrer-box.png)You can move it higher up in the sidebar by clicking the up arrow button

This data is only available for orders completed after the installation of Independent Analytics (free version).

In the **Customer Journey** box, you’ll find the customer’s:

- Time of arrival
- Referrer
- Landing page
- Number of pages viewed
- Time of purchase
- Device data
- Geolocation

There is also a button at the bottom linking to the full [user journey](https://independentwp.com/knowledgebase/user-journeys/user-journeys-report/) for further analysis.

**Note:** the “Pages viewed” count includes all pages they viewed both before and after their purchase.

If the sale was referred via a campaign URL, you’ll also see the campaign parameters included.

![Order referrer box with campaign data](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:774/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/01/order-referrer-box-campaign-data.png)

Sales are always attributed to the last referrer. You can learn more about how our attribution model works here:

[How Does Attribution Work?](https://independentwp.com/knowledgebase/woocommerce/how-does-attribution-work/)

If you want to learn more about the various referrer types recognized in Independent Analytics, check out this tutorial next:

[What is a Referrer?](https://independentwp.com/knowledgebase/data/what-is-a-referrer/)

---

## WooCommerce Multi-Currency Plugin Support

**Source:** [https://independentwp.com/knowledgebase/woocommerce/multi-currency-plugin-support/](https://independentwp.com/knowledgebase/woocommerce/multi-currency-plugin-support/)

Since WooCommerce doesn’t support multiple currencies, this feature has to be added with a plugin.

Independent Analytics Pro integrates with the following plugins:

- [Aelia Currency Switcher](https://aelia.co/shop/currency-switcher-woocommerce/)
- [WPML Multi-Currency](https://wpml.org/documentation/related-projects/woocommerce-multilingual/multi-currency-support-woocommerce/)
- [Price Based on Country for WooCommerce](https://wordpress.org/plugins/woocommerce-product-price-based-on-countries/)
- [Curcy](https://wordpress.org/plugins/woo-multi-currency/)
- [YITH Multi Currency Switcher](https://yithemes.com/themes/plugins/yith-multi-currency-switcher-for-woocommerce/)
- [WooPayments](https://woocommerce.com/document/woopayments/currencies/multi-currency-setup/)
- [YayCurrency](https://wordpress.org/plugins/yaycurrency/)

Independent Analytics Pro will use the currency conversion rates provided by the plugin and show your sales in your store’s base currency in the analytics reports.

If there is another currency switcher plugin you’d like us to support, please [let us know](https://independentwp.com/contact/), and we can add a new integration.

---

## How Does Attribution Work?

**Source:** [https://independentwp.com/knowledgebase/woocommerce/how-does-attribution-work/](https://independentwp.com/knowledgebase/woocommerce/how-does-attribution-work/)

When a visitor arrives on your site, a new [session](https://independentwp.com/knowledgebase/data/what-is-session/) is recorded, and it continues until a period of inactivity that lasts for 30 minutes or longer.

**When someone purchases a product, the sale is attributed to the referrer of that session.**

For example, if someone clicks on your site in Google, looks at a few pages, and purchases a product, Google will be attributed with the sale.

Now, let’s say they find your site through Google, look at a few pages, and leave. The next day, they see a Facebook ad for your product, so they click the ad and buy the product. In this case, Facebook will be attributed the sale because it was the referrer of the session that included the purchase.

This is sometimes referred to as a “last click” attribution model.

As you might expect, this works the same way for the Geographic, Devices, and Campaigns reports; the sale will be attributed to the location, device, and campaign of the session with the sale.

Independent Analytics doesn’t include support for alternate attribution models, but this is a feature we would like to explore in the future.

## Attribution for the Pages report

Sales attribution works differently for the Pages report than the other reports.

If the Pages report showed you the sale where the purchase happened, then you would see all of the sales attributed to the Checkout page. Instead, it is more useful to attribute the sale to the landing page i.e. the first page in the session.

Let’s say someone clicks on your site in Google, lands on “Article A,” views a few products, and then completes a purchase. The credit for the sale would go to Article A.

This is particularly useful for evaluating your SEO landing pages. Rather than measuring their performance by traffic, you can see the number of sales and conversion rate of each page.

---

## How to Use the eCommerce Integration

**Source:** [https://independentwp.com/knowledgebase/woocommerce/woocommerce-integration/](https://independentwp.com/knowledgebase/woocommerce/woocommerce-integration/)

**Note:** if you have customers logging in to checkout, please make sure to [enable logged-in visitor tracking](https://independentwp.com/knowledgebase/tracking/how-to-track-logged-in-visitors/) in order to track their sales.

## Supported plugins

Independent Analytics Pro integrates with the following eCommerce plugins:

1. WooCommerce
2. FluentCart
3. SureCart
4. Easy Digital Downloads
5. Paid Memberships Pro

## The new Quick Stats

After installing Independent Analytics Pro, you’ll see the Orders and Total Sales metrics appear in the Quick Stats like this:

![WooCommerce Quick Stats](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:674/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/woocommerce-quick-stats.png)

If you click the **Toggle Stats** button and then select the **eCommerce** section, you’ll see that there are 8 different metrics you can enable in the Quick Stats.

![WooCommerce toggle Quick Stats](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:664/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/05/woocommerce-toggle-quick-stats.png)The eCommerce section will be by the eCommerce plugin you’re using

While you may find similar stats in the analytics reports provided by your eCommerce plugin, these stats become especially powerful when combined with a filter. For example, you can filter a report to show only blog posts or social media sites and see how the metrics compare to the global averages.

One unique stat is the Conversion Rate, which lets you see the global conversion rate for your store. This can be especially useful when making optimizations that should lift the profitability of your store as a whole.

## The new table columns

You’ll see all the same metrics from the Quick Stats available as new data columns.

![New WooCommerce data columns](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:604/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/new-woocommerce-columns-1.png)

Enabling these columns will let you evaluate the performance of specific pages, referrers, locations, devices, and campaigns.

For instance, here’s an example showing the orders and net sales for each referrer:

![Woocommerce sales data](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:546/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/woocommerce-sales-data-1.png)

You can find definitions for each eCommerce metric here: [The eCommerce Metrics Explained](https://independentwp.com/knowledgebase/woocommerce/woocommerce-metrics/)

## Sales tracking is semi-retroactive

Independent Analytics Pro can report on eCommerce sales since the free version was installed. For instance, if you installed the free version 30 days ago and switched to the Pro version today, you would see sales show up for the past 30 days.

Sales from before the installation of Independent Analytics (free or pro) are not included in the analytics.

New orders that are placed will show up in the analytics immediately.

## How does attribution work?

Please refer to the following tutorial to learn about how the sales attribution works:

[How does attribution work?](https://independentwp.com/knowledgebase/woocommerce/how-does-attribution-work/)

---

