# Reporting Analytics

*Category from FluentCart documentation*

---

## Reporting & Analytics ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/](https://docs.fluentcart.com/guide/reporting-analytics/)

# Reporting & Analytics ​

The **Reporting & Analytics** section in FluentCart provides you with powerful insights into your store's performance. By leveraging comprehensive reports, you can monitor key metrics, identify trends, and make data-driven decisions to optimize your sales, products, and customer engagement.

This section covers various types of reports to give you a holistic view of your business:

- **Reports Dashboard Overview:** A summary dashboard presenting key performance indicators (KPIs) at a glance.
- **Orders Report:** Detailed analytics focused on order performance, including sales by customer, day, and hour.
- **Revenue Report:** In-depth financial insights into your store's gross sales, net revenue, refunds, taxes, shipping, and discounts.
- **Refunds Report:** Specific analytics focused on refund activity, helping you understand refund trends and their impact.
- **Subscription Report:** Key insights into your recurring revenue, including active subscribers, total revenue, and retention rates.
- **Retention Report:** Subscription retention and churn analytics, filters, charts, lifetime value, and monthly summary data.
- **Cohorts Report:** Cohort-based subscription analytics with retention views, period comparisons, and exportable grouped data.
- **Future Renewals Report:** Forecasted subscription renewal revenue and counts to help with near-term cash flow planning.
- **Product Report:** Detailed analytics on individual product performance, including units sold and top-selling items.
- **Compare Products Report:** Side-by-side comparison of the products or variations you pick, with a chart and a totals table.
- **Order Sources Report:** Revenue grouped by marketing campaign, source, and medium, so you can see which channels produce paying customers.
- **Accounting Export:** A CSV or JSON file of every sale and refund with its tax line, currency, and exchange rates, for your accountant or tax software.

By regularly reviewing these reports, you can gain a deeper understanding of your store's health and strategize for future growth.

---

## Accounting Export ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/accounting-export](https://docs.fluentcart.com/guide/reporting-analytics/accounting-export)

# Accounting Export ​

The **Accounting Export** gives you a file of every sale and refund in your store, with its tax line, currency, and exchange rates, ready to hand to your accountant or import into your accounting or tax software. It is especially useful when you sell in more than one currency, because each row records the rate the sale was made at.

INFO

The accounting export is part of **FluentCart Pro**. Without Pro, the screen shows a warning instead of the export form.
## Accessing the Accounting Export ​

To open the accounting export:

1. From your WordPress dashboard, navigate to **FluentCart > Reports**.
2. Select **Export** from the left-hand sidebar.

INFO

The export covers this store only. It is not a complete EU OSS return, because a business that runs several stores files one OSS return for all of them.
## Setting Up Your Export ​

- **Period (UTC):** Choose the start and end dates of the export. All dates are in UTC. The form opens on the previous quarter, and the two buttons next to the date picker, such as **2026-Q3** and **2026-Q4**, fill in the previous and the current quarter in one click.
- **Tax scheme:** Limit the export to one kind of sale, or leave it on **All**. - **Domestic:** Sales where the customer's tax country is your store's own country.
- **EU OSS:** Sales to other EU countries made under your OSS VAT number.
- **EU, other registration:** Sales to other EU countries made under a different VAT registration.
- **EU reverse charge:** Sales where the reverse charge was applied.
- **Outside the EU:** Sales to customers in countries outside the EU.
- **No tax country:** Sales with no tax country recorded.
- **Format:** Choose **CSV** for spreadsheets and most accounting tools, or **JSON** for systems that import structured data.
- **Include test-mode orders:** *(Optional)* Tick this to add orders placed while your store was in test mode. By default only live orders are exported.

Click **Export** to start. FluentCart builds the file in batches, shows how many rows have been written, and downloads it as 
```
accounting-export-
```

 followed by the date when it finishes. You can click **Cancel** while it is running.

INFO

The tax scheme is worked out with your current EU VAT setting, not the setting that was in place when the sale was made.
## What the File Contains ​

Each row is one tax line of one payment or refund, so an order with two tax rates produces two rows for each payment.

- **Sales** are dated by the day the payment was made, not the day the order was placed.
- **Refunds** appear as negative rows. FluentCart stores only the total of a refund, so each refund's tax is estimated in proportion to the order, and the **Tax estimated** column is set to **yes** on those rows.
- **Orders without a recorded payment**, such as imported orders or ones you recorded by hand, produce one estimated payment row built from the order itself.
- **The untaxed part of an order**, such as shipping or exempt items, appears as a **Not taxed** row with a 0 rate.

The columns fall into these groups:

- **Order and payment:** **Row type**, **Order ID**, **Invoice number**, **Transaction ID**, **Date (UTC)**, and **Period** (for example 
```
2026-Q3
```

).
- **Tax details:** **Customer tax country**, **Tax scheme**, **Reverse charge**, **Customer VAT number**, **Store VAT number**, **Tax label**, **Tax rate (%)**, and **Tax estimated**.
- **Amounts in the order currency:** **Currency**, **Taxable amount**, **Tax**, **Order net**, **Order tax**, and **Order gross**.
- **Amounts in your base currency:** **Base currency**, **Sales rate (per 1 base)**, **Taxable amount (base)**, **Tax (base)**, and **Order gross (base)**. These are the order amounts converted back to your base currency at the rate the order was sold at. They stay empty when a rate was never known for that order.
- **ECB reference rates:** **ECB rate on date (per 1 EUR)**, **ECB rate at period end (per 1 EUR)**, and **Period end date**. These show how many units of the order currency equal 1 EUR on the transaction date and on the last day of its quarter. The period-end columns stay empty until the quarter has ended, and every ECB column stays empty for currencies the European Central Bank does not publish.

Your accounting export is now ready to share with your accountant.

---

## Subscription Cohorts Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/cohorts](https://docs.fluentcart.com/guide/reporting-analytics/cohorts)

# Subscription Cohorts Report ​

The **Cohorts** report provides a detailed look at customer behavior over time by grouping subscribers based on when they started their journey. This report is essential for identifying patterns in customer retention and revenue stability, allowing you to see exactly how long specific "groups" of customers stay with your business.

## Accessing the Cohorts Report ​

Go to your WordPress dashboard, navigate to **FluentCart Pro → Reports**, and select the **Cohorts** sub-tab under the **Subscriptions** category.

---

## Report Filters and Controls ​

The Cohorts dashboard offers powerful filtering options to help you drill down into specific datasets.

- **Date Filter:** Select a specific timeframe to view the cohorts that started during that period.
- **Reset Filters:** Instantly clear your custom selections to return to the default overview.
- **Advanced Filters (Funnel Icon):** Filter your cohort data by **Order Type**, **Subscription Type**, or specific **Products** to see how different offerings perform over time.

## Cohort Visualization & Table ​

The **Subscription Cohorts** table breaks down your data into a "heat map" format, making it easy to spot trends at a glance.

### 1. Time Granularity ​

You can toggle the view between **Year** and **Month**.

- **Yearly View:** Best for long-term business health analysis.
- **Monthly View:** Best for tracking the immediate impact of seasonal promotions or product updates.

### 2. Metric Selection ​

Choose whether to analyze retention based on customer count or financial value:

- **Subscriptions:** Tracks the number of active subscribers remaining from the original group.
- **MRR (Monthly Recurring Revenue):** Tracks how much revenue the specific group continues to generate over time.

### 3. Data Representation Styles ​

The dropdown menu allows you to change how the percentages in the table are calculated:

- **% of Total:** Shows how many customers/revenue remains compared to the original start date.
- **% of Previous:** Shows the retention rate compared to the immediately preceding month.
- **Total Value:** Displays the actual currency or subscriber numbers instead of percentages.
- **% of Total Ended:** Shows how much of the original group has churned so far, instead of how much remains. A cohort counts as churned when its subscription goes on hold or officially ends, taking the end date into account. Hover over the info icon beside the report title to read this definition in the app.

A subscriber stops counting toward a cohort from the moment their subscription is canceled or expires, so the later columns reflect only the people who are still subscribed.

## Understanding the Cohort Table ​

Each row represents a **Cohort** (a group of subscribers who started in the same month/year).

- **Subscribed/Start:** This column shows the date the group joined and the initial value (Total subscribers or MRR) they brought in.
- **Month 1, Month 2, etc.:** These columns track that specific group as they move through their lifecycle.
- **Weighted Avg. Retained:** The bottom row provides an aggregate average of how all cohorts perform at each stage, giving you a baseline for your business's overall retention health.

Hover over any cell to see the exact numbers behind it.

### Partial Years ​

In the **Year** view, a cohort that started this year, or one that is still maturing, has not yet had every month of its later years. FluentCart sizes each yearly cohort from all of its monthly cohorts and marks the figures that are not complete. The hover text on a marked cell reads **Partial** followed by how many of the monthly cohorts have reached that point, for example **Partial: 7 of 12 monthly cohorts have reached this point**. Treat these figures as a preview, because they will change as the remaining months pass.

## Managing Cohort Data ​

FluentCart allows you to manage and export this data for external reporting or deeper analysis.

- **Last generated:** The text beside the buttons shows when the cohort data was last refreshed, for example **Last generated October 15, 2026 4:46 pm**. The table is built from snapshots, so new signups and cancellations appear only after the next refresh.
- **Generate Snapshots:** Click this button to refresh and capture the latest data for your cohorts. FluentCart asks you to confirm because it rebuilds every snapshot, which can take 30 to 60 seconds. It runs in the background, and a message tells you when it finishes. If you have never generated snapshots, the table asks you to click **Generate Snapshots** first.
- **Export:** Use the Export button to download your cohort data as a CSV file for use in spreadsheet software like Excel or Google Sheets.

With the **Subscription Cohorts** report, you can identify exactly when customers are most likely to leave and which products attract the most loyal subscribers. By understanding these patterns, you can make data-driven decisions to improve your long-term recurring revenue

---

## Customer Report Dashboard ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/customer-report](https://docs.fluentcart.com/guide/reporting-analytics/customer-report)

# Customer Report Dashboard ​

The **Customer** Report tab is your dedicated tool for measuring the success of your customer acquisition and growth efforts. It provides a clear, comparative view of how your customer base is expanding over time, allowing you to assess the long-term health and loyalty of your business.

## Accessing the Customer Report ​

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Customers** tab.

### Report Filters and Controls ​

The top of the dashboard provides crucial controls that determine the data displayed in the chart and table.

- **Date Range Selector:** This field allows you to define the **Current Range** for your report. You can select a custom start and end date to focus on specific periods, such as a major sale or a specific fiscal quarter.
- **Compare To:** This dropdown determines the historical period used for comparison. Options allow you to benchmark your **Current Range** data against previous time periods. The dates of the selected period appear in grey text beside the dropdown, and each option in the list shows its own dates.
- **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.
- **Reset Filters:** Click this button to instantly clear all applied date and comparison selections and revert the report to its default view.

### Key Customer Growth Metrics ​

At the top of the Customer Report, you will find a summary card highlighting your key customer growth metric for the selected period:

- **Customer Growth:** This figure displays the net number of new customers acquired during the specified date range. The percentage indicates the growth or decline compared to the previous, equivalent time period you are comparing against.

### New Customers ​

The main visualization on this dashboard is the **New Customers** chart. Each customer is counted on the date of their first order, so the chart shows how many people bought from you for the first time on each day. Hover over the info icon beside the title to read this definition in the app. The chart allows for easy trend analysis and comparison.

- **Visual Comparison:** The chart overlays two distinct series: the **Current Range** (the period currently selected in the date filter, drawn as a solid line with a light fill) and the **Compare Range** (the historical period you are measuring against, drawn as a dotted line in the same color).
- **Trend Analysis:** By showing the current period's customer acquisition alongside the past, you can quickly identify seasonal impacts, measure the success of specific marketing campaigns, and see if your acquisition rate is accelerating or slowing down.

### Comparison Breakdown ​

Below the chart, a detailed **Comparison** table breaks down the growth trend month-by-month, providing the specific data behind the visualization. This section is essential for granular analysis.

- **Date:** Shows the specific month and year being compared (e.g., "January 2025 vs January 2024").
- **Current Range:** The total number of new customers acquired during the current month.
- **Compare Range:** The total number of new customers acquired during the equivalent comparison month.
- **Change [%]:** The exact percentage of change (growth or decline) between the two months, allowing you to pinpoint exactly when and how much your customer acquisition shifted.

By using the Customer Report, you can move beyond simple sales numbers to understand the most valuable asset of your store: your customer base.

---

## Subscription Future Renewals Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/future-renewals](https://docs.fluentcart.com/guide/reporting-analytics/future-renewals)

# Subscription Future Renewals Report ​

The **Future Renewals** report provides a predictive look into your store's upcoming income. By analyzing your currently active subscriptions and their next billing dates, FluentCart estimates the expected revenue you will receive over the next few months. This report is a vital tool for cash flow forecasting and business planning.

## Accessing Future Renewals ​

Go to your WordPress dashboard, navigate to **FluentCart Pro → Reports**, and select the **Future Renewals** sub-tab under the **Subscriptions** category.

## Understanding Future Revenue Estimates ​

This report is calculated by looking at all active subscriptions and extrapolating their scheduled renewals over a specific time period (typically a 90-day window). A note at the top of the page spells out the exact dates the estimate covers, for example **between October 15, 2026 and January 15, 2027**.

When your orders are in more than one currency, a **Currency** chip appears in the filter bar at the top of the page, the same one the other reports use. Pick a currency, or read everything combined in your base currency. See [Viewing Reports in More Than One Currency](/guide/reporting-analytics/reports-dashboard-overview#viewing-reports-in-more-than-one-currency).

- **Renewal Revenue:** The total estimated dollar amount expected from successful subscription renewals in the upcoming period.
- **Renewals:** The total count of individual subscription transactions scheduled to occur.

## Upcoming Renewal Revenue Chart ​

The main feature of this report is an interactive chart that visualizes your projected income and transaction volume over the coming months.

- **Revenue (Blue Line):** Tracks the total monetary value of renewals. Use this to identify "peak months" where high-value subscriptions are set to renew.
- **Count (Light Grey Bars):** Represents the number of individual renewals happening each month.
- **Combined View:** By seeing both the line and the bars together, you can determine if your revenue is coming from a high volume of small transactions or a few high-value renewals.

## Renewals by Variant ​

Below the chart, the **Renewals by Variant** table shows where the projected income comes from, one row for each product variation.

- **Product:** The product the variation belongs to.
- **Variant:** The subscription plan or variation, for example a monthly or yearly plan.
- **Renewals:** The number of renewals expected for that variation in the period.
- **Projected revenue:** The estimated income from those renewals.

Click the **Renewals** or **Projected revenue** heading to sort the table by that column. The rows add up to the **Renewal Revenue** and **Renewals** totals at the top of the page, so you can see which plan carries your forecast.

## Feature Breakdown & Controls ​

The Future Renewals interface is designed to be clean and easy to interpret at a glance.

- **Timeline Axis:** The horizontal axis shows the upcoming months (for example, October 2026 through January 2027), giving you a clear window into your immediate financial future.
- **Data Toggle:** Use the interactive legend to toggle between viewing just the **Revenue** line or just the renewal **Count** bars.
- **Zoom & Focus:** Use the icons in the top-right corner of the chart to zoom into specific dates or expand the view for a more detailed analysis.

## Tips for Forecasting ​

> Note: These figures are estimates based on active subscriptions. Actual revenue may vary slightly depending on factors like payment failures, mid-month cancellations, or manual plan changes.

- **Plan for Growth:** Use the peak months on the chart to plan your marketing budget or inventory purchases, knowing when your cash reserves will be strongest.
- **Identify Gaps:** If you notice a significant drop in future renewals in a specific month, consider launching a promotional campaign to attract new subscribers or encourage annual upgrades.

With the **Future Renewals** report feature, you no longer have to guess what next month's income will look like. By providing a clear projection of upcoming subscription billing, FluentCart helps you manage your business with confidence and financial clarity.

---

## Order Sources Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/order-sources-report](https://docs.fluentcart.com/guide/reporting-analytics/order-sources-report)

# Order Sources Report ​

The **Order Sources** report answers the question every store owner eventually asks: *where are my paying customers actually coming from?*

It groups your orders by the UTM parameters attached to them, so you can see which campaign, which channel, and which specific ad produced real revenue, not just traffic. A campaign that sends thousands of visitors but produces four orders looks very different here than it does in your analytics tool.

## Accessing the Order Sources Report ​

Go to your WordPress dashboard, then **FluentCart → Reports**, and open the **Sources** tab.

Only orders that carry a UTM source appear here. Orders placed by someone who came to your store directly, through an untagged link, or over a channel you never tagged are excluded. The report would otherwise be dominated by a single meaningless "unknown" row.

## Report Columns and Metrics ​

Each row is a unique combination of **campaign, source, and medium**. Every order matching that combination is rolled up into it.

### UTM Columns ​

Use the **Columns** control above the table to show or hide any of these:

- **UTM Campaign:** the campaign the link belonged to (
```
utm_campaign
```

).
- **UTM Source:** where the traffic came from, such as 
```
google
```

 or 
```
newsletter
```

 (
```
utm_source
```

).
- **UTM Medium:** the kind of channel, such as 
```
cpc
```

 or 
```
email
```

 (
```
utm_medium
```

).
- **UTM Term:** the keyword, for paid search (
```
utm_term
```

).
- **UTM Content:** which variant of an ad or link was clicked (
```
utm_content
```

).
- **UTM ID:** your own campaign identifier (
```
utm_id
```

).

### Revenue Metrics ​

- **Orders:** how many orders came from this source.
- **Gross Sales:** total paid across those orders.
- **Revenue:** gross sales minus refunds, tax, and shipping tax. This is the figure to judge a campaign on.
- **Average Order:** gross sales divided by order count.
- **Average Order Net:** revenue divided by order count.

The **Gross / Net** switch above the table toggles which pair of these the table displays: **Gross** shows Gross Sales and Average Order, **Net** shows Revenue and Average Order Net.

Rows are sorted by gross sales, highest first, so your best-performing sources are always at the top.

Judge campaigns on Revenue, not Gross

Gross Sales includes tax, shipping tax, and orders that were later refunded. A campaign that drives high-refund purchases can look strong on gross and poor on net. Revenue is the honest number.
## Filtering the Report ​

### Date Range ​

The date selector at the top scopes the report to a period. Every metric recalculates, and comparison figures update alongside it so you can see whether a source is growing or fading.

### Search ​

The **Search** field above the table filters results by UTM values as you type, matching against UTM Campaign, UTM Source, and UTM Medium. It's the quickest way to jump to a specific campaign.

### Advanced Filters ​

Beyond the date range, you can narrow the report using the same advanced filter engine that powers the Orders screen. That means you can answer much more specific questions: *which campaigns produced orders over $100?*, *which sources brought in subscription customers?*, *how did this campaign perform for customers in Germany?*

Turn on the **Advanced Filter** switch above the table, click **+ Add**, and pick a property group (**Order Property**, **Customer Property**, **Transactions Property**, **Utm Property**, or **Tax Property**), then choose a field within it, an operator, and a value. Conditions can be combined into groups joined with **AND** / **OR**, so complex questions are expressible without exporting anything.

Available operators depend on the field, and include **Equals** for exact matches (including matching an order by its order hash or a payer's email address) and **Includes** for partial text matches on fields such as customer email.

Advanced filtering requires FluentCart Pro

The Order Sources report itself is available to every FluentCart store. Advanced filters on it are a Pro feature.
## How FluentCart Attributes an Order ​

Understanding what the report is measuring makes it far more useful.

### Last touch wins ​

FluentCart records attribution on **every** order using a last-touch model. When a visitor arrives through a tagged link, that marketing touch replaces whatever was previously stored for them. Whichever campaign brought them back for the visit where they actually bought is the one credited.

This matters when a customer discovers you through one campaign and returns weeks later through another. Only the returning touch is credited. The report shows what closed the sale, not what started the relationship.

### Ad click identifiers ​

Alongside the six standard UTM parameters, FluentCart captures the click identifiers ad platforms append to your links:

| Identifier | Platform |
| --- | --- |
| gclid | Google Ads |
| gbraid, wbraid | Google Ads, for iOS clicks where gclid is unavailable |
| gad_campaignid, gad_source | Google Ads campaign details carried on the URL itself |
| fbclid | Meta (Facebook and Instagram) |
| msclkid | Microsoft Advertising |

These appear on the order's source card rather than as report columns, and they're what lets you reconcile an individual FluentCart order against the click record in your ad platform. They also survive situations where cookie-based attribution fails, because they travel on the URL.

### Referring URL ​

When a visitor arrives without UTM parameters, FluentCart records the referring URL instead. Referrals from your own domains are ignored, so a customer moving between your own pages doesn't overwrite the real external source that brought them.

### Consent and stored attribution ​

To credit the right campaign at checkout, FluentCart has to remember the marketing touch that brought a visitor in, and it does that by storing the campaign values in the visitor's own browser. Privacy rules such as GDPR and Germany's TDDDG treat that storage the same way they treat cookies, and campaign attribution is not something a shop strictly needs in order to sell.

FluentCart therefore announces every attribution write before it happens, so a consent manager can step in and decide. Three things can follow:

- **No consent integration is present.** The write goes ahead exactly as it always has, which is the case for most stores. Nothing changes and nothing needs configuring.
- **A consent manager holds the decision.** The campaign values stay in page memory only and are never written to the device. If the visitor accepts on that same page, the touch is stored and the campaign is not lost.
- **The visitor refuses, or withdraws later.** Nothing is written, and anything already stored is cleared, so a withdrawal takes effect on past data rather than only on future visits.

Orders that arrive without stored attribution still appear in your reports. They simply carry no marketing source, the same as any untagged visit.

INFO

Wiring your consent banner to this gate takes a few lines of JavaScript, and there is a working example among the [code snippets](/guide/customization-and-themes/code-snippets).
### Where to see a single order's attribution ​

The report shows aggregates. To see the attribution recorded against one specific order, open the order and check its source card; see [Order Details Overview](/guide/store-management/orders-management/order-details-overview).

## Using the Report ​

**Find your most profitable channel.** Sort by Revenue and compare Average Order Net across sources. A channel with fewer orders but a much higher average order value is often worth more than a high-volume one.

**Check whether a campaign paid for itself.** Filter to the campaign's run dates, read Revenue, and compare against what you spent.

**Spot untagged traffic.** If your report totals are far below your actual order count, most of your orders are arriving without UTM tags. Tag your outbound links (email campaigns, ads, affiliate links, social posts) and the report fills in.

**Compare ad variants.** With 
```
utm_content
```

 set per creative, the UTM Content column tells you which variant actually converted.

---

## Orders Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/orders-report](https://docs.fluentcart.com/guide/reporting-analytics/orders-report)

# Orders Report ​

The **Orders Report** in FluentCart provides a deep dive into your store's order performance with in-depth analytics. This powerful dashboard allows you to analyze various aspects of your sales data through detailed charts and tables, helping you understand trends, customer behavior, and fulfillment efficiency.

#### Accessing the Orders Report ​

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Orders** tab.

#### Filtering Your Report Data ​

Want to look at a specific time frame? Or maybe you want to see how this month's orders compare to last month's? FluentCart makes this easy with simple filtering tools.

### Report Filters and Controls ​

The top of the dashboard gives you key controls to choose what data appears in the report.

- **Date Filter:** This field allows you to define the date range for your report, enabling you to focus on specific periods.
- **Compare To:** This dropdown allows you to choose a past time period to compare with your current data. The dates of the selected period appear in grey text beside the dropdown, and each option in the list shows its own dates.
- **Advanced Filters:** Click the **filter** icon to break down the report by options like **Order Type** or specific **Products**. This helps you focus on detailed order data for a closer view.
- **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.
- **Reset Filters:** Click the **Reset Filter** button to quickly remove all selections and return the report to its original view.

### Key Order Metrics ​

At the top of the Orders Report, you will find summary cards highlighting your key order metrics for the selected period.

- **Gross Sales:** The total paid on paid, partially paid, and refunded orders created in the period, including tax and shipping. Discounts are already applied, and refunds are not deducted.
- **Refunds:** The total amount of money refunded on orders created in the period.
- **Revenue:** Gross sales less refunds and taxes. Shipping charges and payment fees are not deducted.
- **Orders:** The number of paid, partially paid, and refunded orders created in the period. Renewal orders are included, and unpaid orders are not.
- **Items:** The total quantity of product units on those orders. With a product filter applied, only the matching items are counted.
- **Average Gross:** Gross sales divided by the number of orders.
- **Average Revenue:** Revenue divided by the number of orders.
- **Average Order Items:** Items divided by the number of orders.

Each metric also includes a percentage that indicates the increase or decrease compared to the period you are comparing against. Hover over the info icon beside a metric to read its definition.

#### Order Chart ​

Just below the metric cards, the **Order Chart** gives you a clear visual of your store's performance over time. Orders appear as light bars, and **Gross Sales** and **Revenue** appear as lines.

- **Metric checkboxes:** The checkboxes on the **Gross Sales**, **Revenue**, and **Orders** cards turn each series on or off in the chart.
- **Chart View Dropdown:** You can adjust the chart's timeline using the dropdown menu in the top-right corner of the chart. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or change it to **Daily**, **Monthly**, or **Yearly**.

#### Monthly Averages and Tax & Shipping ​

Under the chart, a row of four small cards shows your **Average Monthly Gross**, **Average Monthly Revenue**, **Average Monthly Orders**, and **Average Monthly Items** for the selected range, each with its change against the comparison period.

When your orders in the period include tax or shipping, two more cards appear: **Taxes** (the total amount of taxes) and **Shipping** (the total amount of shipping costs). They stay hidden when there is neither.

#### New vs. Returning Customers ​

This table breaks down your order data by customer type, helping you measure customer loyalty and the effectiveness of your acquisition strategies. Hover over the info icon beside the title to read the definitions in the app.

- **Customer types:** Each paid order is placed in one of four groups, so the table always adds up to your total orders. - **New:** The customer's first paid order.
- **Returning:** A repeat order from a customer who already had an earlier paid order. A customer can be counted as New for one order and Returning for the next.
- **Renewal:** An automatic subscription renewal. Renewals are kept apart so they do not inflate your Returning numbers.
- **Guest:** An order placed without a customer account.
- **Columns:** The table displays Customer Count, Order Count, Gross Sales, Average Gross Sales, Revenue, and Average Revenue for each customer type.
- **Show Percentages:** Enable this checkbox to view the data as percentages, making it easy to see the proportion of sales from each customer type.
- **Export:** Click the **Export** button to download this data as a **CSV** file for further analysis.

#### Orders Grouped By ​

This table breaks down your orders by a criterion you choose with the dropdown beside the title.

- **Billing Country:** The default. Orders grouped by the customer's billing country, helping you identify your key international markets.
- **Shipping Country:** Orders grouped by the shipping destination.
- **Payment Method:** Orders grouped by the way customers paid, such as Stripe or PayPal.

The table shows Orders, Gross Sales, Average Gross Sales, Revenue, and Average Revenue for each group. Click a column heading to sort by it. The **Export** button downloads the table as a CSV file.

#### Orders by Day and Hour ​

This heatmap visualizes your store's busiest times, showing which days of the week and which hours of the day generate the most orders. Darker squares mean more orders.

#### Additional Order Analytics ​

At the bottom of the report, you'll find detailed charts that help you understand customer behavior and order trends. Use the zoom icon in the top-right corner of a chart to enlarge it.

- **Spend by day:** Gross sales grouped by the days of the week, shown as a line over the number of orders, so you can see which days earn the most.
- **Spend by hour:** Gross sales grouped by the hours of the day, allowing you to pinpoint your peak sales times.
- **Item count distribution:** How many orders have 1 item, 2 items, 3 items, and so on, helping you understand how many items customers usually buy.
- **Order value distribution:** How many orders fall into different price ranges (like 0-100 or 100-200), so you can see which order amounts happen most often.
- **Average Order Gross:** A chart that tracks the average gross value of your orders over the selected period.
- **Average Order Items:** A chart that tracks the average number of items per order over the selected period.
- **Time between an order's created & completed date:** Orders grouped by how many hours it took to complete them, helping you see how quickly orders are fulfilled.

---

## Compare Products Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/product-compare-report](https://docs.fluentcart.com/guide/reporting-analytics/product-compare-report)

# Compare Products Report ​

The **Compare Products** report puts the products you choose side by side. Each product gets its own line on a chart and its own row in a totals table, so you can see which one sells the most, earns the most, or gets refunded the most over the same dates. Use it to judge a new launch against an established bestseller, or to check how the variations of one product perform against each other.

INFO

This report is part of **FluentCart Pro**.
## Accessing the Compare Products Report ​

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu. Open the **Products** group and click on the **Compare** tab.

## Choosing Products to Compare ​

The page stays on a preview until you pick at least two products. The preview shows an example chart, so you know what to expect.

1. Click the **filter** icon at the right end of the filter bar.
2. Select **Products** from the list.
3. Open the **Select Products** dropdown, then tick the checkbox beside each product you want to compare. Click the arrow beside a product to see its variations and tick only the ones you need.
4. Click anywhere outside the dropdown to close it.

You can also click **Open the Product filter** inside the preview to jump straight to the picker.

Once you pick two or more products, they appear in the filter bar as chips, and the report loads. Hover over a chip to see which variations it covers.

INFO

The report compares up to 50 picked variations. If you pick more, FluentCart tells you it is comparing the first ones you picked, so narrow the selection for an exact comparison.
## Report Filters and Controls ​

- **Date:** The date range the report covers.
- **Compare to:** The earlier period used for the change figures in the totals table. The dates of that period appear beside the dropdown, and again above the table as **Change compared with** followed by the dates.
- **Currency:** Appears when your orders are in more than one currency.
- **Reset Filters:** Clears your picks and returns the report to its preview.

## The Comparison Chart ​

The chart draws one colored line for each product you picked, and a legend underneath tells you which color is which product.

- **Metric:** Use the buttons in the top-right corner to switch between **Orders**, **Revenue**, and **Units**. The chart title follows your choice, for example **Revenue by product**.
- **Grouping:** The dropdown beside the metric buttons sets how the timeline is bucketed (**Auto**, **Daily**, **Monthly**, or **Yearly**).

Hover over a point to see the exact value for each product on that date.

## The Totals Table ​

Under the chart, the **Totals** table has one row for each product, with the color that matches its line on the chart.

- **Entity:** The product name, with the number of its variations underneath.
- **Orders:** The number of orders that include the product. An order that holds two variations of the same product is counted twice in the product row.
- **Revenue:** What the product earned after discounts and refunds, excluding tax.
- **Units:** The quantity sold.
- **Customers:** The number of customers who bought it. A customer who bought two variations of one product counts twice in the product row.
- **Discounts:** The discounts applied to the product.
- **Refunds:** Refunds on orders placed in your date range, counted by the order date and not by the date the refund was issued.
- **Share:** The percentage of the selected total this product accounts for. It follows the chart metric you chose: the share of total orders, revenue, or units.

Next to each figure, a small green or red arrow with a percentage shows the change compared with your comparison period. The final **Selected total** row adds up all the products you picked.

Click a column heading to sort the table by that column. Numeric columns sort by their value, so $1,000 correctly ranks above $900.

### Product or Variation ​

Use the **Product** and **Variation** buttons at the top-right of the table to change what each row stands for.

- **Product:** One row per product, with all of its variations added together.
- **Variation:** One row per variation, for example each size or color of a hoodie. The chart switches to variation lines too.

When you have more than five rows, the table shows the top 5 for the column you sorted by, and the chart draws only those same five. Click **Show all** to see every row, or **Show top 5** to collapse it again.

Your product comparison now shows you which products are pulling their weight, and which variations deserve more attention.

---

## Product Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/product-report](https://docs.fluentcart.com/guide/reporting-analytics/product-report)

# Product Report ​

The **Product Report** provides detailed analytics on the performance of your individual products. This dashboard is essential for understanding which products and variations are your bestsellers, tracking sales volume, and comparing performance over different time periods to identify trends.

## Accessing the Product Report ​

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Products** tab.

## Report Filters and Controls ​

The top of the dashboard gives you key controls to choose what data appears in the report.

- **Date Filter:** This field allows you to define the date range for your report, enabling you to focus on specific periods.
- **Compare to:** This dropdown allows you to choose a past time period to compare with your current data. The dates of the selected comparison period appear in grey text beside the dropdown, and each option in the list shows its own dates, so you always know which period your numbers are measured against.
- **Currency:** Appears when your orders are in more than one currency. See [Viewing Reports in More Than One Currency](/guide/reporting-analytics/reports-dashboard-overview#viewing-reports-in-more-than-one-currency).
- **Advanced Filters:** Click the filter icon to break down the report by options like **Order Type** or specific **Products**. Products you pick appear in the filter bar as collapsed chips, so a long selection does not push the report down the page. The same chip style is used wherever FluentCart asks you to pick products, such as list filters and coupon product pickers. Picks that do not fit on the row collapse into a **+N** chip, and hovering over it shows the full list.
- **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.
- **Reset Filters:** Click the **Reset Filters** button to quickly remove all selections and return the report to its original view.

## Key Product Metrics ​

At the top of the **Product Report**, you will find summary cards highlighting your key product metrics for the selected period.

- **Units Sold:** The total quantity of all product units sold.
- **Customers:** The number of customers who bought these products.
- **Item Sales:** The total amount of money made from product sales before discounts and refunds.
- **Discounts:** The total value of discounts applied to these products, including each product's share of discounts that were applied to the whole order.
- **Refunds:** The total monetary value of refunds for these products, counted by the date of the original order.
- **Revenue:** The final income from products after discounts and refunds are subtracted, excluding tax.

Each metric also includes a percentage that indicates the increase or decrease compared to the period you are comparing against. Hover over the info icon beside a metric to see exactly what it counts.

## Product Report Chart ​

This chart gives you a picture of your overall product performance, visually comparing units sold between two different time periods.

- **Current Range:** Shown in solid blue, this is the performance for the period you selected.
- **Compare Range:** Shown in a lighter shade of blue, this is the performance for the period you are comparing against.

Use the icons in the top-right corner of the chart to switch between a line and a bar chart, zoom into specific dates, or download the chart as an image.

## Units Sold by Period ​

Below the chart, the **Units Sold by Period** table lists the numbers behind the chart, one row for each day, month, or year depending on your chart grouping.

- **Period:** The day, month, or year the row covers.
- **Units Sold:** The quantity of product units sold in that period.
- **Customers:** The number of customers who bought in that period.
- **Item Sales:** Sales before discounts and refunds.
- **Discounts:** Discounts applied to those products.
- **Refunds:** Refunds on orders placed in that period.
- **Revenue:** What you keep after discounts and refunds are subtracted, excluding tax.

Click the **Export** button above the table to download it as a CSV file.

## Top Sold Products and Variants ​

Two lists sit side by side under the table.

- **Top Sold Products:** Your best-selling products in the selected period, with the number of units sold and the sales amount. Click **View All** to jump to your Products screen.
- **Top Sold Variants:** Your best-selling variations, each shown with the product it belongs to. This helps you spot the size, color, or plan that actually drives a product's sales.

## Product Performance Comparison ​

At the bottom of the page, a comparison table allows you to analyze the performance of individual products between two specific months. Pick a year and month on each side of **vs**, and the table will show:

- **Product:** This column lists your individual products and their variations.
- **Sales:** This column uses a bar chart to visually compare the units sold in each of the two months you selected, making it easy to see which products are trending up or down.
- **Change:** This column shows the exact percentage of change between the two months, color-coded for a quick view of performance.

To put specific products side by side over the whole date range, open the [Compare Products](/guide/reporting-analytics/product-compare-report) report.

With the Product Report, you can see clear patterns in product demand, giving you the insights you need to make smarter decisions about your inventory and marketing.

---

## Refunds Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/refunds-report](https://docs.fluentcart.com/guide/reporting-analytics/refunds-report)

# Refunds Report ​

The **Refunds Report** provides a focused analysis of all refund activity in your store. This dashboard is essential for understanding your refund rate, tracking the total amount of money being returned to customers, and identifying trends that might indicate issues with products or customer satisfaction.

#### Accessing the Refunds Report ​

Go to your WordPress dashboard, then go to **FluentCart** > [Reports](/guide/reporting-analytics/reports-dashboard-overview) in the side menu, and click on the **Refunds** tab.

### Report Filters and Controls ​

The top of the dashboard gives you key controls to choose what data appears in your charts and tables.

- **Date Filter:** This field allows you to define the date range for your report, enabling you to focus on specific periods.
- **Compare To:** This dropdown lets you pick a past period (for example, the previous week, last month, or the same time last year). Your current data is then compared with that past period. This helps you see if your store is doing better, worse, or staying the same over time. The dates of the selected period appear in grey text beside the dropdown, and each option in the list shows its own dates.
- **Advanced Filters:** Click the **filter** icon to segment the report by criteria such as **Order Type** or specific **Products**, allowing you to isolate refunds associated with certain items.
- **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.
- **Reset Filters:** Click the **Reset Filter** button to quickly remove all selections and return the report to its original view.

### Key Refund Metrics ​

At the top of the **Refunds Report**, you will find summary cards highlighting your key refund metrics for the selected period.

- **Refunds:** The number of orders that have been refunded, fully or partially, in the selected period.
- **Refunded:** The total amount of money refunded to customers. For example, if you refunded $200 and $150, the total refunded amount is $350.
- **Average Amount:** The total refunded amount divided by the number of refunded orders. Orders without a refund are not counted.
- **Refund Rate:** The share of your money that was returned, calculated as the total refunded amount divided by the total amount customers paid. A rate of 1% means that for every $100 paid, $1 was refunded.

Each metric also shows a percentage, telling you whether the value went up or down compared to the period you selected for comparison.

#### Refunds Chart ​

The main chart on this dashboard is the **Refunds Chart**. It helps you easily spot refund trends.

It compares the current period with the comparison period, so you can quickly see if refunds are going up or down. The chart plots the **Refunded Amount** as a line and the number of **Total Refunds** as bars, with the **Previous** versions of each shown in a lighter style. Use the dropdown above the chart to change the grouping.

### Detailed Refund Analysis ​

Below the main chart, you’ll find more detailed breakdowns that show the data behind the charts. This helps you understand refunds in more detail.

- **Weeks between an order's created date and refund date:** This bar chart shows how long it takes for refunds to happen after the original order. It helps you see if problems appear right away or later.
- **Refunds Grouped By:** This table breaks down refunds by the option you pick in the dropdown: **Billing Country** (the default), **Shipping Country**, or **Payment Method**. It shows the number of **Refunds**, the total **Refunded Amount**, and the **Average Refund**, helping you find patterns in specific regions or payment methods. Click **Export** to download it as a CSV file.

The Refunds Report goes deeper than sales data, showing you how often money goes back to customers and where it happens, so you can improve your products and services.

---

## Reports Dashboard Overview ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/reports-dashboard-overview](https://docs.fluentcart.com/guide/reporting-analytics/reports-dashboard-overview)

# Reports Dashboard Overview ​

FluentCart Pro’s Reports section is your **built-in Business Analytics command center**. It provides detailed, real-time data visualizations designed to help you understand your store's financial performance, customer behavior, and product success without the need for complex external tools.

This powerful reporting suite allows you to:

- **Track Profitability:** Get instant comparisons of **Gross Sales** versus **Net Revenue** and monitor your **Refund Rate**.
- **Analyze Growth:** Track changes in your **Customer Base**, identify **Subscription** trends, and calculate **Customer Lifetime Value (CLTV)**.
- **Optimize Operations:** Use the **Order Heatmap** to identify peak sales hours and analyze the speed of your refund process.
- **Pinpoint Performance:** See detailed breakdowns by **Product**, **Variant**, and **Country** to know exactly what is selling best and where.

You can access the full reporting suite by navigating to **FluentCart Pro** > **Reports** in your top menu bar.

## 360-Degree View: The Full Report Section ​

The reporting hub is divided into several focused tabs, giving you a comprehensive view of every key area of your e-commerce operation:

- **Overview:** Your instant dashboard summary for high-level financial health and growth comparisons.
- **Sales:** Tracks volume, revenue, and identifies your top-performing products and product variants.
- **Orders:** Focuses on transaction count, order value, and features a **Sales Heatmap** to show peak ordering times.
- **Revenue:** Delivers the true income earned after deductions, with trend charts and geographical (per-country) breakdowns.
- **Refunds:** Provides detailed metrics on returns, the total refunded amount, and the time it takes to process a refund.
- **Subscriptions:** Essential for recurring sales, tracking subscriber growth, and installments still due. Its sub-pages cover **Retention**, **Cohorts**, and **Future Renewals**.
- **Products:** Analyzes individual item performance, units sold, discounts, and refunds. Its **Compare** sub-page puts products you pick side by side.
- **Customers:** Monitors your store’s customer acquisition and growth, helping you understand long-term customer value.
- **Sources:** Groups your orders by UTM campaign, source, and medium.
- **Export:** Downloads an accounting export of your sales and refunds.

INFO

The Reports sidebar is **extensible**. When you install a FluentCart add-on that ships its own reports, those report pages appear automatically in this same sidebar alongside the built-in tabs — there's nothing to configure. If you don't have any reporting add-ons active, the menu simply shows the core reports listed above.
## Reports Dashboard Overview (The Summary Page) ​

When you first enter the Reports section, you land on the **Overview** tab. This tab is your main summary page, built to give you the most important information about your store's status and momentum instantly.

### Reporting Overview - Gross Summary ​

A small label at the top of the page tells you what the whole Overview covers, for example **Last 12 Months · Base currency (USD)**. All the figures on this page are shown in your store's base currency. The Overview does not follow the date filters used on the other report tabs. It always looks at the most recent months, and the quarterly cards always show the last four quarters, including the current quarter so far, compared with the same quarters a year earlier.

At the top, two cards give you a direct summary of your store's financial volume and growth:

- **Gross Summary:** The total sales amount before anything is taken out, charted month by month. The subtitle under the card title shows the total for the period with its year-over-year growth figure.
- **Gross Revenue Quarterly:** The same gross figure grouped into three-month quarters, with its own total and growth figure in the subtitle.
- **Year-over-Year Growth (YoY):** This figure shows the percentage change compared to the same period last year, giving you crucial context on expansion. Hover over the info icon beside it to see how the number is calculated.

### Key Performance Trends ​

The middle section presents key visual trends that inform your business strategy:

- **Gross Volume Breakdown:** A line chart showing the monthly trend of your raw sales, with the year-over-year growth plotted against the right-hand axis. A sentence above the chart sums it up in plain words, for example how much you have sold so far this month, how that compares with last month, and the figure for the same month last year. When your store has no sales from the same period last year, the sentence says **no prior-year figure** instead of showing a misleading percentage.
- **Gross Revenue Breakdown:** The same view by quarter. Its sentence tells you how far into the current quarter you are, how many days are left, and how the quarter so far compares with the previous one.

### Core Revenue and Geographic Metrics ​

These sections move beyond raw sales to show real profitability and market performance:

- **Net Revenue:** Your total income after refunds and taxes have been removed, with its own year-over-year growth in the subtitle.
- **Net Revenue Quarterly:** The net income broken down by three-month periods for easier fiscal review.
- **Top Country Gross/Net Volume:** Stacked monthly charts that split your sales and revenue by the customer’s billing country. This helps you identify your most valuable geographical markets and how their share changes over time.

### Top Countries ​

The final charts rank the countries behind your sales:

- **Top Countries Gross Revenue:** The countries that bring in the most gross sales, so you can see where your customers are.
- **Top Countries Net Revenue:** The same ranking after refunds and taxes.

By reviewing the Overview first, you get a clean summary of the most critical numbers, allowing you to choose which detailed tab (Sales, Refunds, etc.) you need to investigate further.

## Choosing How a Trend Chart Is Grouped ​

The **Orders**, **Revenue**, **Refunds**, **Subscriptions**, **Products**, **Customers**, and **Compare** pages each carry a trend chart with a small grouping dropdown above it. That dropdown decides how tightly the timeline is bucketed, and it changes the shape of what you see without changing the numbers underneath.

- **Auto:** Lets FluentCart pick the grouping from the date range you selected. This is the default.
- **Daily:** One point per day. Best for spotting the exact day a campaign landed or a problem started.
- **Monthly:** One point per month, which smooths daily noise into a readable trend.
- **Yearly:** One point per year, for long-range comparisons.

**Auto** tells you what it decided rather than leaving you guessing. While it is the active choice, the option reads **Auto (Daily)**, **Auto (Monthly)**, or **Auto (Yearly)** to show which grouping your current date range resolves to. Ranges up to about three months group daily, up to a year group monthly, and anything longer groups yearly.

Pick a grouping explicitly when Auto is not what you want, such as reading a full year day by day to find a single spike. The label goes back to a plain **Auto** while an explicit choice is active, so it never echoes your own selection back at you.

## Comparing With an Earlier Period ​

The **Compare to** dropdown on the report filter bar decides which earlier period your numbers are measured against. Each option in the list shows the dates it would use, and once you pick one, the dates stay visible in grey text beside the dropdown, so you never have to work out the comparison window yourself.

All comparison periods last as many days as your selected range. They differ in where they start:

- **Previous Period:** Ends the day before your selected range begins.
- **Previous Month:** Starts one month before your selected range starts.
- **Previous Quarter:** Starts three months before your selected range starts.
- **Previous Year:** Starts one year before your selected range starts.
- **Custom:** You choose the start date with a separate date picker.
- **No Comparison:** Turns the comparison off.

On charts, the comparison period is drawn as a dotted line in the same color as the current period, or as a faded bar, so the two are easy to tell apart. If your date range runs past today, the report counts only up to today.

If a report cannot load, an error message with a retry option appears instead of a blank chart.

## Using Advanced Filters ​

The funnel icon at the right end of the filter bar opens **Advanced Filters**, a Pro feature. Pick a filter from the list, choose its values, and the report updates. Applied filters appear in the filter bar, and **Reset Filters** clears them.

- **Order Type:** Choose **All**, **One time**, **Subscription**, or **Renewal** to limit the report to those kinds of orders. It is available on the Sales, Orders, Revenue, Refunds, Products, Compare, Retention, Cohorts, and Future Renewals reports.
- **Subscription Type:** Choose **New**, **Renewal**, **Expired**, or **Canceled** to focus on one kind of subscription event. It is available on the subscription reports only.
- **Products:** Pick specific products or variations to see only their numbers. On the **Compare** page, this is also how you choose what to compare.

The Customers report has no Advanced Filters, and the [Order Sources](/guide/reporting-analytics/order-sources-report) report has its own UTM filter.

## Viewing Reports in More Than One Currency ​

If you sell in more than one currency with [Multi Currency](/guide/settings-configuration/multi-currency-settings), your orders end up in different currencies. Adding those amounts together without converting them would give you a meaningless total, so the reports let you choose how to read them.

When the selected date range contains orders in two or more currencies, a **Currency** filter appears with the report filters. It lists every currency that has orders in that range, and it starts on the currency with the most orders. If you clear the currency chip, it resets to that default instead of disappearing. You can read your data in two ways:

- **A single currency:** Pick a currency code, such as **USD** or **GBP**. The report shows only the orders placed in that currency, in that currency's own amounts, with no conversion.
- **All currencies (in USD):** Pick this option to combine everything in your base currency. The label shows your own base currency code in place of USD. Each order is converted at the exchange rate it was placed at. Orders that have no exchange rate on record are left out, and the option tells you how many, for example **3 orders without an exchange rate left out**.

The **All currencies** option is available on the **Sales**, **Orders**, **Revenue**, **Refunds**, **Products**, **Compare**, **Sources**, **Retention**, and **Future Renewals** reports. The **Subscriptions**, **Cohorts**, and **Customers** reports always read one currency at a time, so on those pages only the individual currency codes are listed.

All amounts on a report, including the figures for the comparison period, are shown in the currency you selected, with that currency's symbol. The **Overview** always shows your base currency.

INFO

The **Future Renewals** report has no date or comparison filters, so its filter bar shows only the **Currency** chip when your orders include more than one currency.

---

## Subscription Retention & Churn Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/retention](https://docs.fluentcart.com/guide/reporting-analytics/retention)

# Subscription Retention & Churn Report ​

The **Retention** report in FluentCart provides a deep dive into your subscription health, helping you track how many customers you keep versus how many you lose (churn) over time. This dashboard is essential for measuring long-term stability and customer loyalty.

## Accessing the Retention Report ​

Go to your WordPress dashboard, navigate to **FluentCart Pro → Reports**, and select the **Retention** sub-tab under the **Subscriptions** category.

## Report Filters and Controls ​

Use the controls at the top of the page to customize the data displayed in your charts and tables.

- **Date Filter:** Define a specific date range to analyze retention trends over weeks, months, or years. The first and last months are measured only within the dates you pick, so a range that starts mid-month does not pull in the earlier days of that month.
- **Advanced Filters (Funnel Icon):** Narrow the report to specific **Products** or a **Subscription Type**. See [Using Advanced Filters](/guide/reporting-analytics/reports-dashboard-overview#using-advanced-filters).
- **Reset Filters:** Instantly clear your custom date selections to return to the default report view.

## Subscription & MRR Retention ​

This section highlights your ability to keep active subscribers and the revenue they generate.

- **Subscription Retention:** The percentage of individual subscribers who remained active compared to the previous period.
- **MRR (Monthly Recurring Revenue) Retention:** The percentage of recurring revenue maintained. This helps you see if you are keeping your most valuable customers.
- **Average In Period:** A helpful benchmark showing your historical average for these metrics to help you identify if current performance is above or below your norm. Months in which you had no subscribers at the start are left out of the average, so an empty month does not drag it down.

Under each figure, a sentence puts the numbers in plain words, for example **You retained 95.35% (41) of your Sep 2026 subscriptions (43).** Subscriptions that start and cancel within the same month count as lost, so they appear in the churn figures.

## Retention Rate Chart ​

The **Retention Rate** chart provides a visual month-over-month comparison of your subscriber stability.

- **Subscription Retention vs. MRR Retention:** The chart plots both metrics side-by-side, allowing you to see if customer loss is impacting your revenue proportionally.
- **Interactive Controls:** Use the icons in the top-right corner to zoom into specific dates, toggle between chart types, or download the graph for your internal business reviews.

## Lifetime Analysis ​

This section uses your current data to predict the long-term value of your average customer.

- **Expected Subscription Lifetime:** An estimate of how many months a customer will stay subscribed based on your current retention rate. When your retention is at or near 100%, the estimate is capped at 10 years and the card reads "over 10 years" instead of showing an unrealistic number of months.
- **Expected Lifetime Value (LTV):** The total revenue you can expect to earn from a single subscriber before they churn. This is a critical metric for determining how much you can afford to spend on marketing.

## Subscription & MRR Churn ​

Churn is the measure of lost customers. Monitoring this helps you identify "leaks" in your subscription model.

- **Subscription Churn:** The percentage of customers who cancelled their subscriptions during the selected period.
- **MRR Churn:** The total amount of recurring revenue lost due to cancellations or downgrades.
- **Churn Rate Trend:** This line graph visualizes whether your churn is increasing or decreasing over time, helping you spot negative trends before they impact your bottom line.

> Note: High churn in a specific month often correlates with the end of a promotional period or a technical issue. Use these dates to investigate and improve your customer experience.

With the **Retention Report**, you can move beyond simple signup numbers and focus on building a sustainable, recurring business by keeping the customers you've already won.

---

## Revenue Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/revenue-report](https://docs.fluentcart.com/guide/reporting-analytics/revenue-report)

# Revenue Report ​

The **Revenue Report** in FluentCart shows a clear breakdown of your store’s earnings. You can use it to track sales over time, see where your income comes from, and check how refunds, taxes, and discounts affect your total revenue.

#### Accessing the Revenue Report ​

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Revenue** tab.

### Report Filters and Controls ​

The top of the dashboard gives you key controls to choose what data appears in the report.

- **Date Filter:** This field allows you to define the date range for your report, enabling you to focus on specific periods.
- **Compare To:** This dropdown allows you to choose a past time period to compare with your current data. The dates of the selected period appear in grey text beside the dropdown, and each option in the list shows its own dates.
- **Currency:** Appears when your orders are in more than one currency. See [Viewing Reports in More Than One Currency](/guide/reporting-analytics/reports-dashboard-overview#viewing-reports-in-more-than-one-currency).
- **Advanced Filters:** Click the **filter** icon to break down the report by options like Order Type or specific Products. This helps you focus on detailed revenue data for a closer view.
- **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.
- **Reset Filters:** Click the **Reset Filter** button to quickly remove all selections and return the report to its original view.

### Key Revenue Metrics ​

At the top of the report, you’ll see a quick summary of your store’s sales activity. Each number shows the total for the selected date range, along with a small visual that compares it to the period you chose in the “**Compare to**” filter.

- **Gross Sales:** The total paid on paid, partially paid, and refunded orders created in the period, including tax and shipping. Discounts are already applied, and refunds are not deducted. The percentage and trend arrow icon (▲ or ▼) next to the value show the increase or decrease compared to the comparison period.
- **Refunds:** The amount refunded on orders created in the period. It is deducted from gross sales to calculate revenue. The percentage and trend arrow show how it has changed compared to the comparison period.
- **Taxes:** The tax collected on orders created in the period, including tax on shipping. It is deducted from gross sales to calculate revenue.
- **Shipping:** The shipping charged on orders created in the period, before shipping tax. Shipping is not deducted when revenue is calculated.
- **Revenue:** Gross sales less refunds and taxes. Shipping charges and payment fees are not deducted. The percentage and trend arrow provide a direct comparison of your revenue between the two periods.

Hover over the info icon beside any metric to read its definition.

### Detailed Revenue Analysis ​

Below the key metrics, you’ll find detailed breakdowns of your store’s income. This section helps you see how well your store is performing.

- **Revenue Chart:** This chart shows how your earnings have changed over time. The solid line is the current range, and the dotted line in the same color is the comparison range, so the two periods are easy to tell apart.
- **Revenue Breakdown:** This table gives a summary of your store by year, with the revenue of the comparison period and the change beside it. It replaces the separate comparison table, so every number you need sits in one place. - **Year:** Click the arrow at the start of a row to expand it into a row for each date in your range, each with the same columns.
- **Order Count, Gross Sales, Refunds, Revenue:** The totals for that row.
- **Compare Revenue:** The revenue of the matching comparison period.
- **Change (%):** The percentage of change between the two, color-coded green or red.

Click a column heading to sort the table. Numeric columns sort by their value.

The Revenue Report shows how your store is earning over time. You can easily see what’s working, understand your store’s earnings, and plan to make it grow.

#### Grouped By ​

This section allows you to break down revenue by different criteria, making it easier to see what drives your store’s income.

- **Grouping Options:** Use the dropdown menu on the right to choose how you want to group the data. Common options include:

- **Billing Country:** Shows your revenue by the customer's billing country, so you can see which countries bring in the most money.
- **Shipping Country:** Shows your revenue for each shipping destination.
- **Payment Method:** Shows revenue by payment type (like Stripe or PayPal) so you can see which options your customers use most.
- **Data Table:** The table will dynamically update to show a detailed breakdown of your revenue based on the selected grouping, including metrics like Order Count, Gross Sales, Refunds, and Revenue for each item in the group (e.g., for each country or payment method).
- **Export:** Click the **Export** button to download the currently displayed grouped data as a CSV file.

---

## Sales Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/sales-report](https://docs.fluentcart.com/guide/reporting-analytics/sales-report)

# Sales Report ​

The **Sales Report** provides a clear and comprehensive overview of your store's performance, helping you track key metrics and understand your sales trends at a glance. This dashboard is designed to give you actionable insights into your revenue, orders, and customer behavior.

#### Accessing the Sales Report ​

Go to your WordPress dashboard, then go to **FluentCart** > **Reports** in the side menu, and click on the **Sales** tab.

### Filtering Your Report Data ​

Want to look at a specific time frame? Or maybe you want to see how your sales this month compare to last month? FluentCart makes this easy with simple filtering tools.

### Report Filters and Controls ​

The top of the dashboard gives you key controls to choose what data appears in the report.

- **Date Filter:** This field allows you to define the date range for your report, enabling you to focus on specific periods.
- **Compare To:** This dropdown allows you to choose a past time period to compare with your current data. The dates of the selected period appear in grey text beside the dropdown, and each option in the list shows its own dates.
- **Advanced Filters:** Click the **filter** icon to break down the report by options like **Order Type** or specific **Products**. This helps you focus on detailed sales data for a closer view.
- **Reset Filters:** Click this button to instantly clear all applied date and comparison selections and revert the report to its default view.

### Key Sales Metrics ​

At the top of the **Sales Report**, you will find summary cards highlighting your key sales metrics for the selected period.

- **Gross Sales:** The total paid on orders in the period, including tax and shipping, before refunds are deducted.
- **Refunds:** The total monetary value of refunds made on orders in the period. It is deducted from gross sales to calculate revenue.
- **Revenue:** Gross sales less refunds and taxes. Shipping charges and payment fees are not deducted.
- **Orders:** The total number of orders placed in the period.
- **Items:** The total number of items sold in the period.
- **Total Refunds:** The number of orders that were refunded, counting partial refunds too.

Each metric also includes a percentage that indicates the increase or decrease compared to the period you are comparing against.

#### Detailed Sales Analysis ​

Below the key metrics, detailed breakdowns provide specific data about your best-performing products. This section is essential for understanding customer purchasing behavior.

**Top Sold Products:** This list shows your best-selling products with the number of units sold and the sales amount for each. Click **View All** to jump to your Products screen.

**Top Sold Variants:** This list shows sales by individual product variations (like size or color), each with the product it belongs to. It gives you detailed insight into which options are most popular, helping you make smarter decisions about inventory and marketing.

**Sources:** The Sources pie chart gives you a quick visual summary of how you're making money. It's a simple way to understand your business model at a glance. Use the **Revenue** and **Orders** buttons above the chart to switch between the revenue and the number of orders. It breaks them down into three main types:

- **Onetime Payments:** This represents customers making a single, straightforward purchase.
- **Subscriptions:** This slice shows the revenue from customers who have signed up for recurring payments for a product or service.
- **Renewals:** This shows income from existing subscribers who have renewed their subscriptions.

With the Sales Report, you can see clear patterns in revenue and product demand, giving you the insights you need to plan and grow your store effectively.

---

## Subscription Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/subscription-report](https://docs.fluentcart.com/guide/reporting-analytics/subscription-report)

# Subscription Report ​

The **Subscription Report** provides a clear overview of your subscription growth, helping you track new signups and compare trends over time. This dashboard is designed to give you a simple, at-a-glance look at how your subscription offerings are performing.

#### Accessing the Subscription Report ​

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Subscriptions** tab.

### Report Filters and Controls ​

The top of the dashboard gives you key controls to choose what data appears in the report.

- **Date Filter:** This field allows you to define the date range for your report, enabling you to focus on specific periods.
- **Compare To:** This dropdown allows you to choose a past time period to compare with your current data. The dates of the selected period appear in grey text beside the dropdown, and each option in the list shows its own dates.
- **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.
- **Advanced Filters:** Click the filter icon to narrow the report by **Subscription Type** (**New**, **Renewal**, **Expired**, or **Canceled**) or by specific **Products**. See [Using Advanced Filters](/guide/reporting-analytics/reports-dashboard-overview#using-advanced-filters).
- **Reset Filters:** Click this button to instantly clear all applied date and comparison selections and revert the report to its default view.

### Installments Still Due ​

The card at the top of the page, **Installments Still Due**, shows the remaining balance on installment plans that started in the selected period. Hover over the info icon beside it to read the definition. It helps you see how much of your payment-plan income is still to come.

### Subscription Chart ​

The main feature of this report is the **Subscription Chart**. It shows your growth trends by visually comparing new subscriptions across two different time periods.

- **Current Range:** Drawn as a solid blue line, this shows new subscriptions for the period you selected.
- **Compare Range:** Drawn as a dotted line in the same color, this shows new subscriptions for the historical period you are comparing against.

You can also use the interactive controls in the top-right corner of the chart to change the view, zoom, or download the chart as an image.

### Subscription Comparison ​

The **Comparison** table provides the exact numbers from the visualization. This section is essential for seeing the precise data behind your growth trends.

- **Date:** This column shows the specific months being compared (e.g., "May 2025 vs April 2025").
- **Current Range:** This shows the total number of new subscriptions from the current month.
- **Compare Range:** This shows the total number of new subscriptions from the comparison month.
- **Change (%):** This column displays the percentage of change between the two months, color-coded for a quick view of your growth.

### Detailed Subscription Analysis ​

Below the main comparison, you’ll find detailed charts that show customer loyalty and new customer trends. This section helps you clearly see how healthy your subscription business is.

- **Retention Chart:** This chart shows you how long your customers stay subscribed after their initial purchase. The horizontal axis is divided into time periods like 7 Days, 30 Days, 180 Days, and More than Year, making it easy to see at which point customers are most likely to drop off. Type your own number of days into the **Enter custom days** box above the chart to add a bucket of your choice. This is a key tool for measuring customer loyalty. Only subscriptions that actually started are counted, so abandoned checkouts do not inflate the numbers.
- **Daily Signups:** This chart tracks the number of new subscriptions you get each day. It helps you visualize your daily growth and identify trends in customer acquisition, which can be useful for seeing the impact of marketing campaigns.

With the Subscription Report, you can easily see patterns in your subscription signups, giving you the insights you need to measure your growth.

---

