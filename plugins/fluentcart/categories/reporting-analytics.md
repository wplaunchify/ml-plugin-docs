# Reporting Analytics

*Category from FluentCart documentation*

---

## Reporting & Analytics ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/](https://docs.fluentcart.com/guide/reporting-analytics/)

# Reporting & Analytics ​

The **Reporting & Analytics** section in FluentCart provides you with powerful insights into your store's performance. By leveraging comprehensive reports, you can monitor key metrics, identify trends, and make data-driven decisions to optimize your sales, products, and customer engagement.

This section covers various types of reports to give you a holistic view of your business:

- **Reports Dashboard Overview:** A one-screen summary of sales, customers, refunds, and subscriptions, with a Needs Attention list and your top products, channels, and countries.
- **How Reports Count:** The rules every report shares: net sales, which orders count, new and returning customers, store days, currencies, and who sees customer names.
- **Orders Report:** Detailed analytics focused on order performance, including sales by customer, day, and hour.
- **Revenue Report:** In-depth financial insights into your store's gross sales, net revenue, refunds, taxes, shipping, and discounts.
- **Refunds Report:** Specific analytics focused on refund activity, helping you understand refund trends and their impact.
- **Subscription Report:** Key insights into your recurring revenue, including active subscribers, total revenue, and retention rates.
- **Retention Report:** Subscription retention and churn analytics, filters, charts, lifetime value, and monthly summary data.
- **Cohorts Report:** Cohort-based subscription analytics with retention views, period comparisons, and exportable grouped data.
- **Future Renewals Report:** Forecasted subscription renewal revenue and counts to help with near-term cash flow planning.
- **Installments Report:** Collected, scheduled, and overdue payments on your installment plans, with the plans that stopped paying.
- **Product Report:** Detailed analytics on individual product performance, including units sold and top-selling items.
- **Compare Products Report:** Side-by-side comparison of the products or variations you pick, with a chart and a totals table.
- **Order Sources Report:** Revenue grouped by marketing campaign, source, and medium, so you can see which channels produce paying customers.
- **Coupons Report:** Discount given, how much of your store relies on coupons, and how each coupon code performs.
- **Payment Methods Report:** Sales, refunds, payment success, and failing subscriptions for each payment gateway, so you can spot payment problems early.
- **Locations Report:** Net sales, customers, and refunds by country on a world map, with international share and per-country breakdowns.
- **Accounting Export:** A CSV or JSON file of every sale and refund with its tax line, currency, and exchange rates, for your accountant or tax software.

By regularly reviewing these reports, you can gain a deeper understanding of your store's health and strategize for future growth.

---

## Accounting Export ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/accounting-export](https://docs.fluentcart.com/guide/reporting-analytics/accounting-export)

# Accounting Export ​

The **Accounting Export** gives you a file of every sale and refund in your store, with its tax line, currency, and exchange rates, ready to hand to your accountant or import into your accounting or tax software. It is especially useful when you sell in more than one currency, because each row records the rate the sale was made at.

The accounting export requires FluentCart Pro

FluentCart Pro adds the **Export** item to the Reports sidebar. It appears for users who have permission to export reports.
## Accessing the Accounting Export ​

To open the accounting export:

1. From your WordPress dashboard, navigate to **FluentCart > Reports**.
2. Select **Export** at the bottom of the Reports sidebar.

The note at the top of the form reminds you that the export covers this store only. It is not a complete EU OSS return, because a business that runs several stores files one OSS return for all of them.

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

The Cohorts page has no date filter, because every cohort is followed from its first payment to today.

- **Products:** Open the **All products** dropdown in the filter bar to see the cohorts of specific subscription products only.
- **Billing interval:** When you sell plans with more than one billing interval, a dropdown beside **Generate Snapshots** lets you read one interval at a time, or keep **All intervals**. *(FluentCart Pro)*

Each row counts the customers who first paid in that month or year, and each column shows how many of them still had a running subscription after that many months or years. A customer who leaves and comes back counts again. Installment plans are not included. Hover over the info icon beside the **Subscription Cohorts** title to read this definition in the app.

## Cohort Visualization & Table ​

The **Subscription Cohorts** table breaks down your data into a "heat map" format, making it easy to spot trends at a glance. The settings row above the table controls what it shows.

### 1. Time Granularity ​

You can toggle the view between **Yearly** and **Monthly**.

- **Yearly View:** Best for long-term business health analysis.
- **Monthly View:** Best for tracking the immediate impact of seasonal promotions or product updates.

### 2. Metric Selection ​

With **FluentCart Pro**, you can choose whether to follow customers or revenue:

- **Customers:** Tracks the number of customers from the original group who are still subscribed.
- **MRR (Monthly Recurring Revenue):** Tracks how much of the group's starting MRR is still coming in. It can pass 100% when customers upgrade.

Without Pro, the table follows customers.

### 3. Data Representation Styles ​

Use the second pair of buttons to change how the cells read:

- **% of start:** Shows how many customers (or how much revenue) remain compared to the cohort's start.
- **Values:** Displays the actual customer count or currency amount instead of percentages.

### 4. Count Rebuys as Retained ​

With **FluentCart Pro**, turn on **Count rebuys as retained** to treat a customer whose subscription ended, and who bought the same product again within 30 days of their paid term ending, as kept the whole time. Use it when customers cancel and rebuy to get a new-customer price.

## Understanding the Cohort Table ​

Each row represents a **Cohort** (a group of subscribers who first paid in the same month or year).

- **First paid:** The month or year the group first paid.
- **Start:** The size of the group when it started (customers, or MRR in **MRR** view).
- **Month 1, Month 2, etc.** (or **Year 1, Year 2** in yearly view): These columns track that specific group as it moves through its lifecycle.
- **Weighted average:** The bottom row averages how all cohorts perform at each stage, weighted by cohort size, giving you a baseline for your business's overall retention health.

Hover over any cell to see the exact numbers behind it, for example **80%: 40 of 50 customers still subscribed**.

### Partial Periods ​

A cohort that is still maturing has not yet had every month of its later periods.

- In **Monthly** view, a figure for the current month reads **so far: this month has not ended yet**.
- In **Yearly** view, FluentCart sizes each yearly cohort from its monthly cohorts and marks the figures that are not complete. The hover text says how many of the monthly cohorts have reached that point, for example **from the 7 of 12 monthly cohorts that have reached this point**.

Treat these figures as a preview, because they will change as the remaining months pass.

## Retention Curve ​

With **FluentCart Pro**, the **Retention curve** under the table draws the average cohort: the share of its customers (or of its starting MRR) still subscribed after each period, weighted by cohort size. Pro also adds a **Cancel and rebuy** section that shows who let a subscription end and bought the same product again soon after. Without Pro, sample previews take their place.

## Managing Cohort Data ​

FluentCart allows you to manage and export this data for external reporting or deeper analysis.

- **Last generated:** The text beside the **Generate Snapshots** button shows when the cohort data was last refreshed, for example **Last generated October 15, 2026 4:46 pm**. The table is built from snapshots, so new signups and cancellations appear only after the next refresh.
- **Generate Snapshots:** Click this button to rebuild the cohort data from all subscriptions. FluentCart asks you to confirm first, because it can take a minute on a large store. The snapshots are built in short steps while the page is open, and the button shows the progress, for example **Building snapshots 3/12**. Keep the page open until the success message appears. If you close the tab before it finishes, your previous snapshots stay in place.
- **Stale data warning:** When the cohort data has never been generated, or was last generated more than 7 days ago, a warning above the table tells you so. Click **Generate now** in the warning to rebuild it. If you have never generated snapshots, the table also asks you to click **Generate Snapshots**.
- **After a plugin update:** When an update changes how snapshots are built, the page rebuilds them once by itself on your next visit, without asking.
- **Export:** Use the Export button to download your cohort data as a CSV file for use in spreadsheet software like Excel or Google Sheets.

INFO

Snapshots no longer run as a background job, so they don't depend on WP-Cron or Action Scheduler. They work on any host, as long as the Cohorts page stays open while they build.With the **Subscription Cohorts** report, you can identify exactly when customers are most likely to leave and which products attract the most loyal subscribers. By understanding these patterns, you can make data-driven decisions to improve your long-term recurring revenue.

---

## Coupons Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/coupons-report](https://docs.fluentcart.com/guide/reporting-analytics/coupons-report)

# Coupons Report ​

The **Coupons** report shows what your discount codes cost you and what they bring back. You can see how much discount you gave away, how much of your store depends on coupons, and which codes win new customers rather than just discounting orders you would have made anyway.

## Accessing the Coupons Report ​

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on **Coupons** in the reports sidebar.

You can also reach it from the **Orders** report: the **Discount** part of the **Order mix** card has a **Coupons report** link.

## Report Filters and Controls ​

The filter bar at the top of the page works the same way as on the other reports.

- **Date Range:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates. Every figure on the page covers orders placed in this range.
- **Compare To:** Choose an earlier period, such as **Previous period** or **Previous year**, to measure the summary cards against. Without FluentCart Pro, the comparison stays on **Previous period**. See [Comparing With an Earlier Period](/guide/reporting-analytics/reports-dashboard-overview#comparing-with-an-earlier-period).
- **Currency:** Appears when your orders are in more than one currency.
- **Filters:** Narrow the report by **Order Type**, for example to leave out renewals. The **Filters** menu is part of **FluentCart Pro**.

## Key Coupon Metrics ​

At the top of the report, four summary cards tell you how much your store leans on coupons in the selected period. Hover over the info icon beside a card to read its definition.

- **Discount given:** The total coupon discount on the orders placed in this period.
- **Orders with a coupon:** The share of paid orders that used a coupon, renewals included. The tooltip shows the actual counts, for example 40 of 500 paid orders.
- **New customers with a coupon:** The share of new customers who used a coupon on their first purchase.
- **Average discount:** The discount given as a share of what the coupon orders would have cost at full price.

Each card also shows how it changed against the comparison period. The three share cards change in percentage points (**pts**). On every card, a rise reads as a cost, so more discounting shows in red.

## Discounts Over Time ​

The **Discounts Over Time** chart plots your coupon activity across the date range.

- **Discount given:** Bars showing the coupon discount in each period.
- **Orders with a coupon:** A line showing the share of orders that used a coupon in each period, read against the percentage axis on the right.

When there are no orders in the range, the chart reads **No orders in this date range**.

## Coupon vs Full Price ​

The **Coupon vs Full Price** card compares the new customers you won in this period, split by whether their first purchase used a coupon. It answers a simple question: are coupon customers as good as the ones who pay full price?

The table has a **With a coupon** column and an **At full price** column, with these rows:

- **New customers:** How many new customers fall into each group.
- **Average first order:** The average value of their first order.
- **Average lifetime value:** What these customers have spent with you since, on average.
- **Bought again:** The share who made a second purchase.
- **First order refunded in part or full:** The share whose first order was refunded.

INFO

**Coupon vs Full Price** is part of **FluentCart Pro**. Without Pro, a sample preview takes its place.
## Coupons Table ​

Below the charts, the coupons table lists every coupon code used on orders in the period, one row per coupon. It is sorted by **Orders** by default, and you can click any number column heading to sort by it.

- **Coupon:** The coupon code. If you renamed a coupon, the row lists the earlier codes underneath, for example **Used as SUMMER20**. A coupon you have since removed is marked **Deleted coupon**.
- **Orders:** The number of orders that used the coupon.
- **New Customers:** Orders that were a customer's first purchase, counted the same way as on the [Customers](/guide/reporting-analytics/customer-report) report.
- **Returning:** Orders from customers who had bought before.
- **Discount Given:** The total discount the coupon gave.
- **Net:** What those orders brought in.
- **Discount Rate:** The discount divided by what the orders would have cost at full price.
- **Value of Customers Won:** What the customers this coupon won have spent with you to date, each. *(FluentCart Pro)*
- **Refund Rate:** The share of the coupon's orders that were refunded in part or full. *(FluentCart Pro)*
- **Refunds:** The amount refunded on the coupon's orders.

The **Total** row at the bottom is calculated per order, so an order that used two coupons counts once there even though it appears in two rows.

- **Search:** Type in the **Search** box to filter the rows by coupon code or title. The search also matches the earlier codes of a renamed coupon.
- **Export CSV:** Click the download icon to save the table, including the **Total** row, as a CSV file. The file always holds every row, whatever you searched for.

### Discount With No Code ​

Some orders carry a coupon discount without a recorded coupon code, for example renewal discounts imported from another platform. When there are any, a **Discount with no code** line under the table shows their total discount and order count. These orders are not part of the rows or the totals above.

## Empty and Error States ​

- **No coupon orders in this period:** No order in the date range used a coupon. Widen the date range or check the **Order Type** filter.
- **Failed to load the coupons report:** The request did not finish. Reload the page or pick the date range again to retry.

The Coupons report now shows you which codes pay for themselves and which ones only give money away.

---

## Customer Report Dashboard ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/customer-report](https://docs.fluentcart.com/guide/reporting-analytics/customer-report)

# Customer Report Dashboard ​

The **Customer** Report tab is your dedicated tool for measuring the success of your customer acquisition and growth efforts. It shows who paid in each period, how many of them were new, how many came back, and what your customers are worth over time, allowing you to assess the long-term health and loyalty of your business.

## Accessing the Customer Report ​

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Customers** tab.

### Report Filters and Controls ​

The top of the dashboard provides crucial controls that determine the data displayed in the cards, chart, and table.

- **Date Range Selector:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates.
- **Compare To:** This dropdown determines the earlier period used for comparison. Each option in the list shows its own dates.
- **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.

The Customers report has no **Filters** menu.

### Key Customer Metrics ​

At the top of the Customer Report, six summary cards describe your customers in the selected period. Hover over the info icon beside a card to read its definition.

- **Customers:** Customers who paid in the period, renewals included.
- **New customers:** Customers whose first purchase was in the period. A renewal is never a first purchase.
- **Returning customers:** Customers who had bought before and made a new purchase in the period. Renewals alone do not count.
- **Repeat purchase rate:** Of the customers who paid in the period, the share who have made two or more purchases. Renewals are not purchases.
- **Average lifetime value:** What the customers who paid in the period have spent with you over all time, less refunds and tax, on average.
- **Revenue from existing customers:** The share of the period's revenue from customers who had bought before: their new purchases and renewals.

The first three cards also show the change against the comparison period.

### Customers Over Time ​

The **Customers Over Time** chart shows who paid in each period, split into **New customers**, **Returning customers**, and customers who only renewed (**Renewing only**).

- **Customers / Revenue:** Use the buttons in the chart header to count customers or show the revenue each group brought in. In **Revenue** view, the last group reads **Renewals**.
- **Grouping:** Use the dropdown beside the buttons to pick **Auto**, **Daily**, **Monthly**, or **Yearly**.

When no customer paid in the range, the chart reads **No customer paid in this date range**.

### Customer Value, Repeat Behavior, and Segments ​

With **FluentCart Pro**, more sections help you understand your customer base:

- **Lifetime Value by First Purchase Month:** What each month's new customers have spent since their first purchase.
- **Revenue Concentration:** How much of your revenue comes from your best customers.
- **Value by First Product:** Customers whose first purchase was in the period, grouped by the product they first bought, with what they have spent since and how many bought again.
- **Purchases per Customer:** Customers who paid in the period, grouped by how many times they have bought from you.
- **Time to Second Purchase:** Of the customers gained in the last 12 months, how many bought again and how soon. Renewals do not count as a second purchase.
- **Customer Segments:** Every customer as of today, grouped by how recently, how often, and how much they buy (for example **Champions**, **Loyal**, and **At risk**), with a CSV export for each segment. The date range does not apply to this section.

Without Pro, sample previews take their place.

### Top Customers ​

The **Top Customers** table lists the customers who paid in the period, highest lifetime value first.

- **Customer:** The customer's name and email.
- **Orders:** Their orders in the period.
- **Renewals:** Their renewals in the period.
- **Net in Period:** What they spent in the period.
- **Lifetime Value:** What they have spent with you over all time.
- **First Order** and **Last Order:** The dates of their first and latest orders.

INFO

**Top Customers** lists names and emails, so it appears only for users who also have permission to view customers. A user with report access only still sees the cards and charts.By using the Customer Report, you can move beyond simple sales numbers to understand the most valuable asset of your store: your customer base.

---

## Subscription Future Renewals Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/future-renewals](https://docs.fluentcart.com/guide/reporting-analytics/future-renewals)

# Subscription Future Renewals Report ​

The **Future Renewals** report provides a predictive look into your store's upcoming income. By analyzing your live recurring subscriptions and their next billing dates, FluentCart shows what your renewals would bring in if every customer renewed, and what you can realistically expect at your store's own renewal rates. This report is a vital tool for cash flow forecasting and business planning.

## Accessing Future Renewals ​

Go to your WordPress dashboard, navigate to **FluentCart Pro → Reports**, and select the **Future Renewals** sub-tab under the **Subscriptions** category.

## Report Filters and Controls ​

The Future Renewals report looks forward from today, so it has no date filter.

- **Horizon:** Use the dropdown beside the page title to choose how far ahead to look: **Next 3 months** (the default), **Next 6 months**, or **Next 12 months**.
- **Products:** Open the **All products** dropdown in the filter bar to forecast specific subscription products only.
- **Currency:** When your orders are in more than one currency, a **Currency** chip appears in the filter bar. Pick a currency, or read everything combined in your base currency. See [Viewing Reports in More Than One Currency](/guide/reporting-analytics/reports-dashboard-overview#viewing-reports-in-more-than-one-currency).

The forecast covers renewals scheduled by your live recurring subscriptions, at their renewal price, by the month they fall due. Installment plans are not included; see the [Installments](/guide/reporting-analytics/installments-report) report for those. Hover over the info icon beside the page title to read this definition in the app.

## Understanding Future Revenue Estimates ​

The cards at the top of the page summarize the horizon you picked. Hover over the info icon beside a card to read its definition.

- **Ideal Renewals (100%):** Every renewal due in the horizon, if every customer renews. Canceled subscriptions are not included. The line under it shows how many renewals are due.
- **Projected Renewals:** The ideal amount at the renewal rates you set below. The line under it shows the projection as a share of the ideal amount.
- **Projected Shortfall:** The ideal amount less the projected one: what you are not expected to collect at these rates, and the room a win-back or dunning effort has.
- **Won't Renew:** Canceled subscriptions still in their paid term that end inside the horizon: the renewals they would have paid, unless the customer comes back.
- **At Risk Now:** Renewals already due and not paid, either retrying payment (failing or past due) or overdue. They are not in the forecast, but they may still come in. The line under it splits them into retrying and overdue.

## Renewal Rate Assumptions ​

The **Renewal rate assumptions** card holds one slider for each billing interval you sell, such as **Monthly plans** or **Yearly plans**. Each slider sets the share of renewals you expect to be paid.

- The sliders start at your store's own rates: the renewals paid out of those due in the last 12 closed months, the same as on the [Retention](/guide/reporting-analytics/retention) report. The hint under each slider shows that history, for example **Your last 12 closed months: 92% renewed.**
- If no renewal of those plans was due in that time, the slider starts at your store's overall rate.
- When subscriptions in a free trial renew inside the horizon, a **Free trials converting** slider appears too. It starts at the share of ended trials that paid, or at 50% when no trial has ended yet.
- A subscription's second renewal in the horizon counts only if it paid the first, so the rate compounds over longer horizons.

Move a slider to try other rates, and the **Projected Renewals** and **Projected Shortfall** cards and the chart update. Click **Reset to your history** to return to your store's own rates.

## Renewals by Month ​

The main feature of this report is an interactive chart that visualizes your projected income over the months of the horizon.

- **Ideal (100%):** Bars for the renewals due each month if every customer renews.
- **Projected:** A line for what you can expect at the renewal rates you set.
- **Won't renew:** Bars for the renewals of canceled subscriptions that end that month.

When nothing is scheduled, the chart reads **No renewal is scheduled in this horizon**.

## Renewals by Variant ​

With **FluentCart Pro**, the **Renewals by Variant** table splits the forecast by product and variant, to see which plans carry your recurring revenue. For each variant, it shows the renewals due and the ideal and projected amounts. Without Pro, a sample preview takes its place.

## Tips for Forecasting ​

> Note: These figures are estimates. Actual revenue may vary depending on factors like payment failures, mid-month cancellations, or manual plan changes.

- **Plan for Growth:** Use the peak months on the chart to plan your marketing budget or inventory purchases, knowing when your cash reserves will be strongest.
- **Identify Gaps:** If you notice a significant drop in future renewals in a specific month, consider launching a promotional campaign to attract new subscribers or encourage annual upgrades.
- **Size Your Win-Back Effort:** The **Projected Shortfall** and **At Risk Now** cards show how much a dunning or win-back campaign could recover.

With the **Future Renewals** report feature, you no longer have to guess what next month's income will look like. By providing a clear projection of upcoming subscription billing, FluentCart helps you manage your business with confidence and financial clarity.

---

## How Reports Count ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/how-reports-count](https://docs.fluentcart.com/guide/reporting-analytics/how-reports-count)

# How Reports Count ​

Every FluentCart report uses the same rules for money, orders, customers, and dates. Once you know these rules, a figure on one report matches the same figure on every other report, and you can trust what you compare. This page explains them once, so the individual report pages can stay short.

## Where to Find Reports ​

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu. When FluentCart Pro is active, the menu reads **FluentCart Pro > Reports**.

The left sidebar lists every report: **Overview**, **Orders**, **Revenue**, **Refunds**, **Subscriptions** (with **Retention**, **Cohorts**, **Future Renewals**, and **Installments**), **Products** (with **Compare**), **Customers**, **Sources**, **Coupons**, **Payment Methods**, and **Locations**. FluentCart Pro adds **Export** for the [accounting export](/guide/reporting-analytics/accounting-export). Add-ons that ship their own reports add them to the same sidebar. Click **Reports** at the top of the sidebar to collapse it.

## The Filter Bar ​

The top-right corner of each report holds the controls that decide what the report reads.

- **Date range:** Opens a list of presets: **Today**, **Last 7 days**, **Last 30 days**, **This month**, **Last month**, **Last 12 months**, **Year to date**, and **All time**. **Custom…** opens a calendar where you pick a start and end date, then click **Apply**. The note under the list, for example **In store time: America/New_York**, names the timezone the report uses. A preset always counts from today, so **Last 7 days** opened tomorrow shows the seven days up to tomorrow.
- **Compare:** The button that reads **vs Previous period** picks the earlier period the report compares with. See [Comparing With an Earlier Period](#comparing-with-an-earlier-period).
- **Currency:** Appears only when your orders in the range use two or more currencies. See [Currencies](#currencies).
- **Filters:** Narrows the report by order type or product. See [Filters](#filters-pro).

When a filter is set, it appears as a chip under the title bar. Click **Clear all** to remove every filter at once.

Some reports have their own controls instead. The subscription reports have a product picker that lists only subscription products. The **Installments** report has its own plan start dates and product picker. **Cohorts** and **Future Renewals** have no date range, because they look at all your subscriptions.

### Comparing With an Earlier Period ​

Figures with a small green or red arrow compare the selected range with an earlier period. Every comparison period has the same number of days as your range. The options differ in where the period starts:

- **Previous period:** Ends the day before your range starts.
- **Previous month:** Starts one month before your range starts.
- **Previous quarter:** Starts three months before your range starts.
- **Previous year:** Starts one year before your range starts.
- **Custom:** Starts on the date you pick in the **Compare from** box.
- **No comparison:** Turns the comparison off.

Each option in the list shows the dates it would use. When your range runs past today, the report and its comparison count only up to today.

Choosing the comparison period requires FluentCart Pro

Without Pro, every report compares with the previous period, and the compare button is locked.
### Filters (Pro) ​

Click **Filters** to narrow the **Orders**, **Revenue**, **Refunds**, **Products**, **Sources**, **Coupons**, **Payment Methods**, and **Locations** reports.

- **Order Type:** **All**, **One time**, **Subscription**, **Renewal**, **Installment sign-up**, or **Installment payment**.
- **Products:** Pick whole products or single variations. With a product filter, money figures count only those products' share of each order.
- **Currency:** The same currency choice as the chip in the filter bar.

Filters require FluentCart Pro

Without Pro, the **Filters** button shows an **Upgrade to Pro** notice instead of the filter list.
### Chart Grouping ​

Most trend charts have a grouping dropdown: **Auto**, **Daily**, **Monthly**, or **Yearly**. **Auto** picks the grouping from your date range and shows its choice, for example **Auto (Daily)**. Ranges up to 91 days group by day, ranges up to a year group by month, and longer ranges group by year. The grouping changes the shape of the chart, not the totals.

## Net Sales ​

**Net sales** is the main money figure on every report. It is what customers paid, less refunds, and less the tax, shipping, and fees the store collected on top of the products. The **Revenue** report shows the full calculation:

1. **Gross sales:** Product sales before discounts, refunds, shipping, and tax.
2. **Discounts:** Coupon and manual discounts, taken away.
3. **Refunds:** Refunds on these orders, taken away. The tax, shipping, and fees refunded with them are left out here, because they were never part of net sales.
4. **Net sales:** What is left.
5. **Shipping**, **Fees**, and **Taxes** are added back, each less its refunded part.
6. **Total sales:** Net sales plus shipping, fees, and taxes. This is what customers paid, less refunds.

The Overview, Orders, Products, Customers, Sources, Coupons, Payment Methods, and Locations reports all use this same net sales figure, so their totals agree.

INFO

The FluentCart **Dashboard** tiles read the Revenue report for the last 30 store days, with all currencies converted to your base currency. The **Revenue** tile is net sales.
## Which Orders Count ​

A report counts an order when its payment status is paid, partially paid, refunded, or partially refunded, and it was created inside the date range.

- **Renewals count.** Subscription renewal orders are orders like any other.
- **$0 orders count.** An order with nothing to pay, such as a 100% coupon or a free product, counts as an order. The Orders report lists these as **Free order**.
- **Unpaid and failed orders do not count.** The Orders and Payment Methods reports show failed orders in their own card or column.

Refunds are counted in two ways, and the reports say which one they use:

- The **Revenue**, **Orders**, and **Products** reports count refunds on orders placed in the range, whenever the refund happened.
- The **Refunds** report counts money refunded during the range, whenever the order was placed.

## New and Returning Customers ​

Customer counts look at paid orders only.

- **New customer:** A customer whose first paid purchase falls in the range. A renewal is never a first purchase.
- **Returning customer:** A customer who had paid before and made a new purchase in the range. Renewals alone do not make a customer returning.
- **Repeat purchase rate:** Of the customers who paid in the range, the share who have made two or more purchases.
- **Lifetime value:** What a customer has spent with you over all time, less refunds and tax.

On the **Locations** report, a customer counts once in each place they bought from. If they are new in one order and returning in another for the same place, they count as new.

## Store Days and Timezone ​

Reports read every day and hour in the WordPress site timezone, which you set in **Settings > General**. A day on a report is a store day: midnight to midnight in that timezone. The date presets, the monthly groups, the busiest hours, and the comparison periods all follow it. Chart tooltips name the timezone, for example **In store time: Europe/Berlin**.

Recent dates in admin tables show the time instead of the date. An order from earlier today shows as **2:50 PM**, and one from late yesterday shows as **Yesterday, 11:30 PM**.

## Customer Names and Emails ​

A user needs permission to view customers to see customer names and emails in reports. A user who can only view reports sees all the figures, but not the lists that name customers: **Top Customers** on the Customers report, and the **Overdue** and **Lapsed** plans on the Installments report. The same user does not see the recent orders on the FluentCart dashboard.

## When a Report Does Not Load ​

If a report cannot load, for example because the connection dropped, the section shows **This report could not be loaded** and a **Retry** button. It never shows zeros or the figures of your previous filters in its place.

## Currencies ​

Every report reads one currency at a time, so amounts in different currencies never add up into a meaningless total. When your orders in the range use two or more currencies, a **Currency** chip appears in the filter bar. It starts on the currency with the most orders in the range.

- **A single currency:** Pick a code, such as **USD** or **EUR**. The report shows only orders in that currency, in its own amounts.
- **All currencies:** The option reads **All currencies (in USD)**, with your own base currency in place of USD. Each order is converted to the base currency at the exchange rate saved on the order. Orders without a trusted saved rate are left out, and the option tells you how many.

**All currencies** is available on the **Orders**, **Revenue**, **Refunds**, **Products**, **Compare**, **Customers**, **Sources**, **Coupons**, **Payment Methods**, **Locations**, **Retention**, **Future Renewals**, and **Installments** reports. The **Overview**, **Subscriptions**, and **Cohorts** reports read one currency at a time. If **All currencies** was selected on another report, they switch to your base currency, or to the currency with the most orders when the range has no orders in your base currency.

**Cohorts**, **Future Renewals**, and **Installments** do not use the date range, so their currency list includes every currency that has orders.

## Live and Test Mode ​

Reports read the orders of the mode your store is in. In **Live** mode, they show live orders. In **Test** mode, they show test orders only, so test purchases never mix with real sales. The [accounting export](/guide/reporting-analytics/accounting-export) has its own **Include test-mode orders** option.

## Free and Pro ​

Every report is available on every FluentCart store, and every free store can pick any date range. FluentCart Pro adds deeper sections, the comparison period choice, and the **Filters** menu. Without Pro, a Pro section shows a locked preview with **Sample data** and an **Upgrade to Pro** button. If Pro is active but too old for a section, the preview asks you to update FluentCart Pro.

| Report | Free | Pro adds |
| --- | --- | --- |
| Overview | Everything |  |
| Orders | Summary cards, Order Chart, Order mix, New vs. Returning Customers, average order charts | Orders by day and hour, spend by day and hour, item count, order value, completion time |
| Revenue | Everything | Comparison period choice |
| Refunds | Cards, chart, breakdown, reasons | Most refunded products, weeks between order and refund |
| Subscriptions | Right now cards, period cards, Subscription movement | MRR by plan and billing interval, free trial conversion |
| Retention | Summary cards, Retention Rate chart | Renewals chart, lifetime estimate |
| Cohorts | Customer cohorts, yearly or monthly, as a percent or values | MRR cohorts, billing intervals, retention curve, cancel and rebuy |
| Future Renewals | Every horizon, rate sliders, chart, won't renew, at risk | Renewals by variant |
| Installments | Summary cards, Overdue and Lapsed lists | Monthly schedule, projected to collect, plans started by month, plans by variation |
| Products | Cards, Sales Over Time, Products table | Product details drawer, Compare |
| Customers | Cards, Customers Over Time, Top Customers | Customer value, repeat purchases, customer segments |
| Sources | Channels with built-in rules, Order Sources by UTM | Custom channel rules, grouping by product, variation, day, week, month, or referrer, advanced filter |
| Coupons | Cards, Discounts Over Time, coupons table | Coupon vs Full Price, value of customers won, refund rate per coupon |
| Payment Methods | Cards, chart, sales and risk table | Disputes, dispute rate, card brands and methods |
| Locations | Cards, map, countries | States and cities, lifetime value and repeat rate by place, biggest movers |
| Export |  | Accounting export |

With these rules in mind, every report in FluentCart reads the same way.

---

## Installments Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/installments-report](https://docs.fluentcart.com/guide/reporting-analytics/installments-report)

# Installments Report ​

The **Installments** report follows every installment plan in your store, from its first payment to its last. You can see how much your plans have already collected, how much is still scheduled, what falls due in the next 30 days, and which customers have stopped paying. It is the place to check the health of your payment plans, separate from your regular recurring subscriptions.

## Accessing the Installments Report ​

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu. In the reports sidebar, open the **Subscriptions** group and click on **Installments**.

A line under the page title tells you what the figures cover. By default it reads **Installment plans as of today, over all time.** When you pick a start range, it changes to name those dates, for example **Plans started from Jan 1 to Mar 31, as they stand today.**

## Report Filters and Controls ​

The Installments report keeps its own filters in the title bar. The date range, comparison, and **Filters** menu of the other reports do not apply here, because every figure describes your plans as they stand today.

- **Plans started between:** Use the **Started from** and **Started to** picker to look only at plans whose first payment falls in that range. Quick picks include **This month**, **Last 3 months**, **Last 6 months**, **This year**, and **Last year**. Leave it empty to see all time.
- **Products:** Open the **All products** dropdown to limit the report to specific installment variations. The list is grouped by product and shows only products that have started installment plans.
- **Currency:** When your store sells in more than one currency, a currency chip appears under the title bar. See [Viewing Reports in More Than One Currency](/guide/reporting-analytics/reports-dashboard-overview#viewing-reports-in-more-than-one-currency).

The filters appear once your store has at least one installment plan.

## Key Installment Metrics ​

At the top of the page, summary cards give you the state of your plans. Hover over the info icon beside a card to read its definition.

- **Collected:** What your started plans have paid so far, net of refunds. When an order holds a plan and other items, the plan's share of that order's tax, shipping, and refunds is estimated by line amount.
- **Scheduled:** The payments left on active plans.
- **Due next 30 days:** The payments on active and overdue plans that fall due in the next 30 days, or are already past due. When some of that amount is late, a note under the card reads, for example, **Includes $120.00 already past due**.
- **Projected to collect:** The scheduled and overdue payments at the collection rate you set on the **Monthly Schedule**. *(FluentCart Pro)*
- **Overdue:** The payments left on plans that are expiring, past due, or failing.
- **Lapsed unpaid:** The payments left on plans that ended without being completed and had no refund.
- **Plans started:** The number of plans with at least one paid order.
- **Completion rate:** Completed plans out of the plans that have ended (completed, lapsed, or refunded). Running and overdue plans are left out.

## Plans Started by Month ​

The **Plans Started by Month** chart groups your plans by the month of their first payment and splits each bar by how those plans stand today.

- **Completed:** Every installment was paid.
- **Running:** The plan is active and on schedule.
- **Overdue:** A payment failed and the plan is behind.
- **Paused:** The plan is paused.
- **Upgraded:** The customer moved to another plan.
- **Lapsed:** The plan ended with payments still unpaid and no refund.
- **Refunded:** The plan ended with a refund.

Hover over a bar to see the number of plans started that month, the count in each status, and the amount collected. When you have no plans yet, the chart reads **No installment plans yet**.

## Monthly Schedule ​

The **Monthly Schedule** chart shows the payments left on active and overdue plans, month by month, until the last installment.

- **Scheduled:** Bars for the payments due on running plans.
- **Overdue:** Bars, stacked on top, for payments on plans that are behind. A payment that was due before today is shown in the current month.
- **Projected:** A dashed line showing what you can expect to collect at the collection rate.

Use the **Collection rate** slider in the chart header to try other rates and watch the **Projected** line and the **Projected to collect** card update. The slider starts at your store's own rate, taken from how much of their payments your ended plans actually paid after the first one. If no plan has ended yet, it starts at 100%. Click **Reset** to return to your store's rate.

When there are no payments left, the chart reads **No payments left on active or overdue plans**.

INFO

**Plans Started by Month**, **Monthly Schedule**, and the **Projected to collect** card are part of **FluentCart Pro**. Without Pro, a sample preview of the schedule takes their place.
## Plans by Variation, Overdue, and Lapsed ​

The card at the bottom of the page has up to three tabs. Only the open tab loads, so switching tabs refreshes just that table.

### Plans by Variation ​

This tab compares your installment prices. Plans are grouped by the price they were sold at, so a later upgrade does not move a plan to its new price. A plan sold on a price that is not set up as an installment price is listed as **Custom plan**.

- **Variation:** The installment price the plans were sold at.
- **Terms:** The range of plan prices and payment counts.
- **Started:** The number of plans started.
- **Net collected:** What those plans have paid so far, net of refunds.
- **Scheduled:** The payments still to come.
- **Total:** Collected and scheduled together.
- **Completed, Running, Overdue, Paused, Upgraded, Lapsed, Refunded:** The number of plans in each status.

Click a number column heading to sort by it.

INFO

**Plans by Variation** is part of **FluentCart Pro**. Without Pro, the tab shows a sample preview, and the **Overdue** tab opens first.
### Overdue and Lapsed ​

The **Overdue** tab lists plans with a failed payment that still owe money. The **Lapsed** tab lists plans that ended with payments unpaid and no refund. Each tab label shows its plan count, and a line above the table gives the total, for example **$450.00 still owed on 3 plans with a failed payment, largest balance first.**

- **Customer:** The customer's name and email. Click the name to open the subscription.
- **Product:** The product, with the variation and its ID underneath.
- **Status:** The subscription status.
- **Paid:** How many installments were paid out of the total, for example **2 / 6**.
- **Collected:** What the plan has paid so far.
- **Left:** What the plan still owes.
- **Reactivation:** Click **Copy link** to copy a link you can send the customer so they can restart their payments. The column reads **Not available** when the plan has no reactivation link.

Use the **Search name or email** box to find a customer. The table pages through long lists, largest balance first.

INFO

The **Overdue** and **Lapsed** tabs list customers by name and email, so they appear only for users who also have permission to view customers. A user with report access only sees the summary cards, the charts, and the **Plans by Variation** tab.
## Empty and Error States ​

- **No overdue plans** or **No lapsed plans:** No plan is in that state. With a search term, the table reads **No plans match this search** instead.
- If a request fails, an error message appears. Pick a filter again to reload the page's figures.

Your installment plans are now easy to track, from the money already collected to the customers who need a reminder to finish paying.

---

## Locations Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/locations-report](https://docs.fluentcart.com/guide/reporting-analytics/locations-report)

# Locations Report ​

The **Locations Report** shows where your sales and customers come from. It maps your net sales by country and breaks down orders, customers, refunds, and order value for each place, so you can see your strongest markets, how much of your business is international, and which regions are growing or declining.

## Accessing the Locations Report ​

Go to your WordPress dashboard, then go to **FluentCart** > [Reports](/guide/reporting-analytics/reports-dashboard-overview) and click on the **Locations** tab in the reports menu.

You need permission to view reports to open this page.

## Report Filters and Controls ​

The filter bar at the top of the page decides which orders the report covers.

- **Date range:** Choose a preset such as **Last 30 days** or **This month**, or pick **Custom…** to set your own dates.
- **Compare:** Pick the earlier period your figures are measured against, such as **vs Previous period**, or choose **No comparison**. Changing it is a FluentCart Pro feature.
- **Currency:** Appears when your orders are in more than one currency. You can read one currency at a time, or pick **All currencies** to combine everything in your base currency.
- **Filters:** Narrow the report by **Order Type** or specific **Products**. This is a FluentCart Pro feature. With a product filter, each location's money is those products' share of each order.
- **Address:** The dropdown above the table switches between the **Billing** address (the default) and the **Shipping** address. An order without a shipping address falls back to its billing address.

The [shared report controls](/guide/reporting-analytics/reports-dashboard-overview#comparing-with-an-earlier-period) work the same way on every report.

## Key Metrics ​

The summary cards at the top cover your whole store for the selected period, whichever level of the table you are viewing. Hover over the info icon beside each title to see how it is counted.

- **Net sales:** What customers paid in this period, less refunds and tax, across all locations.
- **International sales:** Net sales from outside your store country, as a share of all net sales. It changes in percentage points against the compared period.
- **International new customers:** Customers outside your store country whose first purchase was in this period.
- **Countries with sales:** The number of countries with at least one order in this period.
- **Top country:** The country with the most net sales, and its share of the total.

The two **International** cards only appear when your store address has a **Country** set in the [Store Settings](/guide/settings-configuration/store-settings). Each card except **Top country** shows a badge with the change against the compared period. Hover over the badge to see the previous value.

## World Map ​

At the country level, a world map shades each country by its net sales, from light to dark blue, with a scale at the bottom left. Hover over a country to see its name and net sales, and drag or scroll to pan and zoom. With FluentCart Pro, clicking a country on the map opens its states.

## Locations Table ​

Below the map, the table lists one row per country, with a **Total** row at the bottom. Rows are sorted by net sales, and you can click any column header to sort by it.

- **Country:** The country's name. At deeper levels this column becomes **State** or **City**.
- **Orders:** The number of orders from this place.
- **Customers:** The number of distinct customers who ordered from this place.
- **New Customers:** Customers whose first purchase was in this period.
- **Returning Customers:** Customers who had bought from you before.
- **Net:** Net sales from this place, after refunds and tax.
- **Change:** How net sales changed against the compared period. A place with no sales in the compared period shows **New**. This column only appears while a comparison is active.
- **Share of Net:** This place's net sales as a share of the total.
- **Refunds:** The amount refunded on this place's orders.
- **Refund Rate:** The share of this place's orders that were refunded in part or in full.
- **Average Order (Net):** Net sales divided by orders.
- **Lifetime Value:** What the new customers won here have spent with you to date, each. *(FluentCart Pro)*
- **Bought Again:** The share of new customers won here who made a second purchase. Renewals do not count. *(FluentCart Pro)*

### How an Order Is Placed ​

A note below the table explains where each order's location comes from. FluentCart uses the order's latest address of the type you selected. When an order has no address of its own, FluentCart falls back to:

1. The original order's billing address, for a subscription renewal.
2. The country saved on the customer's record, at the country level only.

When either fallback was used, the note tells you how many orders it applied to. Orders with no location at all appear in an **Unknown** row.

## States, Cities, and Biggest Movers (FluentCart Pro) ​

With FluentCart Pro, the report goes deeper than countries:

- **Drill-down:** Click a country, on the map or in the table, to see its states, then click a state to see its cities. The breadcrumb above the table (**All countries** / country / state) takes you back up. The summary cards stay store-wide while you drill down.
- **Lifetime Value and Bought Again:** These two columns appear at every level.
- **Biggest Movers:** A card above the table lists the places with the largest gains (**Growing**) and drops (**Declining**) in net sales against the compared period, at the level you are viewing, up to three on each side. It needs an active comparison.

When one state holds most of a country's orders, a warning above the table points out that this is often a checkout default rather than real demand, so you can check your address settings before reading it as a trend.

Without Pro, the report shows countries only, and a preview with sample data describes these extras.

## Exporting the Report ​

Click the download icon (**Export CSV**) above the table to save the level you are viewing, for example 
```
locations-country.csv
```

. The file has one row per place plus the total, and it also includes gross sales and the previous period's net sales. The Pro columns are included when Pro is active.

## Empty and Error States ​

When no orders match the selected period and filters, the table shows **No orders in this period**, the map is hidden, and the export button is disabled. If the world map's shapes cannot load, the map is skipped and the table still lists every country. If the report itself cannot load, the message **Failed to load the locations report** appears.

With the Locations Report, you can see exactly where your customers are and decide which markets deserve more of your attention.

---

## Order Sources Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/order-sources-report](https://docs.fluentcart.com/guide/reporting-analytics/order-sources-report)

# Order Sources Report ​

The **Order Sources** report answers the question every store owner eventually asks: *where are my paying customers actually coming from?*

It groups your orders by the UTM parameters attached to them, so you can see which campaign, which channel, and which specific ad produced real revenue, not just traffic. A campaign that sends thousands of visitors but produces four orders looks very different here than it does in your analytics tool.

## Accessing the Order Sources Report ​

Go to your WordPress dashboard, then **FluentCart → Reports**, and open the **Sources** tab. The page itself is titled **Order Sources**.

## New Customers by Channel ​

The top of the page looks at the new customers you won in the period and where their first purchase came from.

- **New customers:** The number of new customers in the period.
- **With a known source:** The share of those customers whose first purchase has a known source, with the share of their revenue in brackets.
- **Top channel:** The channel that brought in the most new customers.

The **New Customers by Channel** chart sorts each new customer's first purchase into a channel: **Email**, **Paid ads**, **Social**, **AI assistants**, **Search**, **Other websites**, **Other campaigns**, or **Direct or unknown**. Your channel rules are applied first, then the purchase's UTM tags, then the website that sent it.

The **Channels** table below the chart shows, for each channel, the **New customers**, what they spent on their **First orders**, their **Average lifetime value**, the share who **Bought again**, and their **Refund rate**.

INFO

With **FluentCart Pro**, the **Channel rules** button lets you name your own channels from UTM source, medium, campaign, or referring site (for example a partner or newsletter channel), and mark your other sites as direct.
## Report Columns and Metrics ​

Below the channels, the sources table groups your orders by their UTM values. Every order matching a row is rolled up into it.

### Group By ​

Use the **Group by** dropdown above the table to choose what each row stands for:

- **Campaign:** the campaign the link belonged to (
```
utm_campaign
```

). This is the default.
- **Source:** where the traffic came from, such as 
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
- **Medium:** the kind of channel, such as 
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
- **Source / Medium:** source and medium together.
- **Term:** the keyword, for paid search (
```
utm_term
```

).
- **Content:** which variant of an ad or link was clicked (
```
utm_content
```

).
- **Campaign / Source / Medium:** all three together.

With **FluentCart Pro**, you can also group by **Product**, **Variation**, **Day**, **Week**, **Month**, or **Referrer domain**. Without Pro, these options are marked **(Pro)**. A **Day**, **Week**, or **Month** grouping also draws a chart above the table.

By default, only orders that carry the field you group by appear. Turn on **Include (none)** to add a **(none)** row for orders without that source data, so the table adds up to your revenue for the same filters. A row whose value is missing reads **(not set)**.

### Revenue Metrics ​

- **Orders:** how many orders came from this source.
- **Gross:** total paid across those orders.
- **Net:** gross sales minus refunds and tax. This is the figure to judge a campaign on.
- **Lifetime Value:** the first-order net plus later payments, such as renewals of those first orders, whatever their date.
- **Average Order:** gross sales divided by order count.
- **Average Order Net:** net sales divided by order count.
- **Refund Rate:** the share of these orders refunded.
- **Refunds:** the amount refunded on these orders.

The **Gross / Net** switch above the table toggles which pair of these the table displays: **Gross** shows Gross and Average Order, **Net** shows Net and Average Order Net. A change badge beside the sales figure compares it with the comparison period.

Click a column heading to sort the table. The **Total** row adds up every row. Spellings that differ only in case, 
```
_
```

, 
```
-
```

, or spaces count as one source.

Click the download icon to export the table as a CSV file.

Judge campaigns on Net, not Gross

Gross includes tax and orders that were later refunded. A campaign that drives high-refund purchases can look strong on gross and poor on net. Net is the honest number.
## Filtering the Report ​

### Date Range ​

The date selector at the top scopes the report to a period. Every metric recalculates, and comparison figures update alongside it so you can see whether a source is growing or fading.

### Search ​

The **Search** field above the table filters the rows by name as you type. Click a value in the table to search for it. While you search, the total row reads **Total (all sources)**, because it still covers every source, and the CSV export holds only the rows the search shows.

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

- **Date Filter:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates. See [Choosing the Date Range](/guide/reporting-analytics/reports-dashboard-overview#choosing-the-date-range).
- **Compare To:** This dropdown allows you to choose a past time period to compare with your current data. Each option in the list shows its own dates.
- **Filters:** Click **Filters** to break down the report by options like **Order Type** or specific **Products**. Applied filters appear as chips below the filter bar, and **Clear all** removes them.
- **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.

### Key Order Metrics ​

At the top of the Orders Report, you will find summary cards highlighting your key order metrics for the selected period.

- **Orders:** The number of paid, partially paid, and refunded orders created in the period. Renewal orders are included, and unpaid orders are not.
- **Average Order Value (Net):** Revenue divided by the number of orders counted in the period.
- **Items per Order:** The number of items divided by the number of orders counted in the period.
- **Refunded Orders:** The orders in the period with a full or partial refund. The line under the value shows them as a share of all orders.
- **Failed Orders:** Orders created in the period whose payment failed. They are not counted in the other cards. The line under the value shows the failure rate.
- **Orders per Day:** The number of orders divided by the days of the period that have passed. For ranges longer than 90 days, this card becomes **Orders per Month**.

Each metric also includes a percentage that indicates the increase or decrease compared to the period you are comparing against (except **Failed Orders**). Hover over the info icon beside a metric to read its definition.

#### Order Chart ​

Just below the metric cards, the **Order Chart** gives you a clear visual of your store's performance over time. Orders appear as light bars and **Net sales** appears as a line, with the comparison period drawn beside them.

- **Chart View Dropdown:** You can adjust the chart's timeline using the dropdown menu in the top-right corner of the chart. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or change it to **Daily**, **Monthly**, or **Yearly**.
- **Export CSV:** Click the download icon to save the chart data as a CSV file.

#### Order Mix ​

The **Order mix** card splits the orders from the **Orders** card in several ways. Each split is drawn as one bar, and every split adds up to the same total.

- **Order type:** The kind of sale, such as one-time orders, new subscriptions, renewals, installment sign-ups, and installment payments.
- **Order status:** How the orders stand, for example completed or processing.
- **Discount:** Orders with a coupon or manual discount (**Discounted**) against orders at **Full price**. The **Coupons report** link beside it opens the [Coupons report](/guide/reporting-analytics/coupons-report).
- **Shipping:** The shipping status of your physical orders. This split appears only when the period has physical orders.

#### New vs. Returning Customers ​

This table breaks down your order data by customer type, helping you measure customer loyalty and the effectiveness of your acquisition strategies. Hover over the info icon beside the title to read the definitions in the app.

- **Customer types:** Each paid order is placed in one group, so the table always adds up to your total orders.

- **New:** The customer's first paid purchase, counted the same way as on the Customers report.
- **Returning:** A repeat order from a customer who had paid before.
- **Renewal:** An automatic subscription renewal. Renewals are kept apart so they do not inflate your Returning numbers.
- **Installment payment:** A later payment of an installment plan.
- **Free order:** An order where nothing was paid.
- **Guest:** An order placed without a customer account.
- **Columns:** The table displays **Type**, **Customers**, **Orders**, **Net Sales**, and **Average Order (Net)** for each customer type.
- **Show Percentages:** Enable this checkbox to view the data as percentages, making it easy to see the proportion of sales from each customer type.
- **Export CSV:** Click the download icon to save this table as a **CSV** file for further analysis.

To see orders by country or by payment method, open the [Locations](/guide/reporting-analytics/locations-report) or [Payment Methods](/guide/reporting-analytics/payment-methods-report) report.

#### Average Order Charts ​

Two charts sit side by side under the table.

- **Average Order Value (Net):** Net sales divided by orders, for each period on the timeline.
- **Average Order Items:** The average number of items per order, for each period on the timeline.

#### Order Patterns ​

At the bottom of the report, you'll find detailed charts that help you understand when and how customers order. Use the zoom icon in the top-right corner of a chart to enlarge it.

- **Orders by Day and Hour:** A heatmap of your busiest times. Darker squares mean more orders.
- **Spend by day:** Gross sales grouped by the days of the week, shown as a line over the number of orders, so you can see which days earn the most.
- **Spend by hour:** Gross sales grouped by the hours of the day, allowing you to pinpoint your peak sales times.
- **Item count distribution:** How many orders have 1 item, 2 items, 3 items, and so on, helping you understand how many items customers usually buy.
- **Order value distribution:** How many orders fall into different price ranges (like 0-100 or 100-200), so you can see which order amounts happen most often.
- **Time between an order's created & completed date:** Orders grouped by how many hours it took to complete them, helping you see how quickly orders are fulfilled.

INFO

The order pattern charts are part of **FluentCart Pro**. Without Pro, a sample preview takes their place.

---

## Payment Methods Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/payment-methods-report](https://docs.fluentcart.com/guide/reporting-analytics/payment-methods-report)

# Payment Methods Report ​

The **Payment Methods Report** shows how each of your payment gateways performs. It answers questions like which gateway brings in the most money, where refunds pile up, which gateway declines the most charges, and how much recurring revenue is at risk from subscriptions whose renewal payment is failing.

## Accessing the Payment Methods Report ​

Go to your WordPress dashboard, then go to **FluentCart** > [Reports](/guide/reporting-analytics/reports-dashboard-overview) and click on the **Payment Methods** tab in the reports menu.

You need permission to view reports to open this page.

## Report Filters and Controls ​

The filter bar at the top of the page decides which orders the report covers.

- **Date range:** Choose a preset such as **Last 30 days** or **This month**, or pick **Custom…** to set your own dates.
- **Compare:** Pick the earlier period your figures are measured against, such as **vs Previous period**, or choose **No comparison**. Changing it is a FluentCart Pro feature.
- **Currency:** Appears when your orders are in more than one currency. You can read one currency at a time, or pick **All currencies** to combine everything in your base currency.
- **Filters:** Narrow the report by **Order Type** or specific **Products**. This is a FluentCart Pro feature.

The [shared report controls](/guide/reporting-analytics/reports-dashboard-overview#comparing-with-an-earlier-period) work the same way on every report.

## Key Metrics ​

Four summary cards at the top give you the store-wide picture for the selected period. Hover over the info icon beside each title to see how it is counted.

- **Net sales:** What customers paid in this period, less refunds and tax.
- **Payment success rate:** Paid orders out of paid orders plus the declined charges your gateways recorded. Some gateways, such as PayPal, retry failed payments on their side and record no declines, so their success rate can read higher.
- **Refund rate:** The share of this period's orders that were refunded in part or in full.
- **MRR at risk (now):** The monthly recurring revenue of subscriptions whose renewal payment is failing today. The date range does not apply, so this card shows no change badge.

The other cards show a badge with the change against the compared period. Hover over the badge to see the previous value. Rates change in percentage points, shown as **pts**, and a rising refund rate shows in red.

## Net Sales by Payment Method ​

The **Net Sales by Payment Method** chart shows the net sales of the orders each gateway took, period by period. Each gateway is a colored segment in a stacked bar, so the full bar is your total net sales and each segment is one gateway's share. The timeline groups by day, month, or year automatically from your date range. Only gateways with orders in the period are drawn.

## Payment Methods Table ​

The table below the chart gives you one row per payment gateway, with a **Total** row at the bottom. Columns are grouped under two headings, and you can click any column header to sort by it.

### Sales ​

- **Orders:** The number of paid orders the gateway took in this period.
- **Net:** Net sales from those orders, after refunds and tax.
- **Share of Net:** The gateway's net sales as a share of all net sales.
- **From Renewals:** Net sales from subscription renewals and installment payments.
- **Refunds:** The amount refunded on the gateway's orders.
- **Refund Rate:** The share of the gateway's orders that were refunded in part or in full.
- **Average Order:** The gateway's net sales divided by its orders.

### Risk ​

- **Payment Success:** Paid orders out of paid orders and recorded declined charges.
- **Declined Charges:** Declined charges the gateway recorded in this period. Some gateways, such as PayPal, record none.
- **Failed Orders:** Orders created in this period whose payment failed.
- **Failing Subscriptions (Now):** Subscriptions whose renewal payment is failing today, grouped by the payment method they renew with. The date range does not apply.
- **MRR at Risk (Now):** The monthly recurring revenue of those failing subscriptions, as on the Subscriptions report.

A few rows are worth knowing about. A payment made with a saved card is counted under the gateway that charged it. A gateway you have since removed still appears under a readable version of its name, and orders with no recorded gateway appear as **Unknown**.

## Disputes and Card Brands (FluentCart Pro) ​

With FluentCart Pro, two more sections appear below the table:

- **Disputes:** Your store's overall **Dispute rate**, its change in points against the previous period, and a table of **Disputed Orders** and **Disputes Lost** (with the amount lost) for each payment method. Card networks start to monitor a store at a dispute rate of about 0.75%. Disputes can arrive months after the order, so the rate for a recent period can still rise.
- **Card Brands and Methods:** How customers paid, such as each card brand or a bank debit, with **Orders**, **Net**, and **Share of Net** for each. The subtitle tells you what share of orders had this detail recorded by the gateway. The section is hidden when none of your gateways record it.

Without Pro, this area shows a preview with sample data. If Pro is active but too old to include these sections, the preview asks you to update FluentCart Pro.

INFO

Even without Pro, the [Overview](/guide/reporting-analytics/reports-dashboard-overview) warns you in its **Needs Attention** card when your store's dispute rate rises above 0.75%.
## Exporting the Report ​

Click the download icon (**Export CSV**) above the table to save it as 
```
payment-methods.csv
```

. The file has one row per gateway plus the total, and it includes gross sales and the amount of declined charges, which the table on screen does not show.

## Empty and Error States ​

When no orders match the selected period and filters, the chart shows **No orders in this period**. The table shows the same message, and the export button is disabled, when no gateway has anything to report. If the report cannot load, the message **Failed to load the payment methods report** appears.

With the Payment Methods Report, you can see which gateways earn their place at checkout and catch payment problems before they cost you recurring revenue.

---

## Compare Products Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/product-compare-report](https://docs.fluentcart.com/guide/reporting-analytics/product-compare-report)

# Compare Products Report ​

The **Compare Products** report puts the products you choose side by side. Each product or variation gets its own line on a trend chart and its own column in a head-to-head table, so you can see which one sells, keeps, and refunds best over the same dates. Use it to judge a new launch against an established bestseller, or to check how the variations of one product perform against each other.

INFO

This report is part of **FluentCart Pro**. Without Pro, the page shows a sample preview.
## Accessing the Compare Products Report ​

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu. Open the **Products** group and click on the **Compare** tab.

## Choosing Products to Compare ​

You pick the products on the page itself, not in the **Filters** menu. The page reads **Pick two or more products or variations to compare.** until you do.

1. Open the first **Pick a product or variation** dropdown and choose a product. Choose **All variants** to compare the whole product, or pick a single variation.
2. Do the same in the second dropdown, beside **vs**.
3. Click **+ Add** to add more, up to six items in total. Click the **✕** beside a dropdown to remove it.

Each item gets its own color, which it keeps on the chart and in the table. Your picks are saved in the page address, so you can bookmark or share a comparison.

## Report Filters and Controls ​

- **Date:** The date range the report covers.
- **Compare to:** The earlier period used for the change figures in the table.
- **Currency:** Appears when your orders are in more than one currency.

## The Trend Chart ​

The **Trend** chart draws one colored line for each item you picked.

- **Metric:** Use the buttons in the chart header to switch between **Net sales**, **Units**, **Orders**, and **New customers**.
- **Cumulative:** Tick this box to add each period to the ones before it, so you can see the running total.
- **Align by launch:** Tick this box to line items up from their own launch instead of by calendar date. A launch is the first of three months in a row with sales, and the chart follows each item over its first five years, so the date range does not apply. In this view, only **Net sales** and **Units** are available.
- **Grouping:** The dropdown sets how the timeline is bucketed (**Auto**, **Daily**, **Monthly**, or **Yearly**). It is hidden while **Align by launch** is on.

Hover over a point to see the exact value for each item on that date.

## Head to Head ​

Under the chart, the **Head to head** table has one column for each item and one row for each figure. The leader on each row is marked **Leader**, and changes are measured against the comparison period.

### Sales ​

- **Net sales:** What the item earned, less refunds and tax.
- **Share of compared sales:** The item's share of the net sales of all the items you picked.
- **Units sold:** The quantity sold.
- **Orders:** The number of orders that included the item.
- **Customers:** The number of customers who bought it.
- **New customers:** Customers whose first purchase included the item.
- **Average order value:** Net sales divided by orders.
- **Average price per unit:** The average price customers paid for one unit.
- **Refund rate:** Refunds as a share of what customers paid. A lower rate wins here, and its change is shown in points.

### Revenue Mix ​

- **New sales, Renewals, Installment payments:** The item's net sales split by type. The **Installment payments** row appears only when one of the items has any.

### Subscriptions ​

This group appears when at least one item sells subscriptions.

- **Live subscriptions:** The item's subscriptions that are running now.
- **MRR:** Their monthly recurring revenue.
- **Renewal rate:** The share of due renewals that were paid.
- **Canceled, ends soon:** Canceled subscriptions still in their paid term.
- **Failing payments:** Subscriptions whose renewal payment is failing.

## Customer Overlap ​

The **Customer overlap** table shows, for each item's customers in the period, how many have ever bought each of the other items, and how many bought that other item first. Use it to see whether two products compete for the same buyers or lead customers from one to the other.

If the report cannot load, the page shows **This report could not be loaded.** with a **Retry** button.

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

- **Date Filter:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates.
- **Compare to:** This dropdown allows you to choose a past time period to compare with your current data. Each option in the list shows its own dates, so you always know which period your numbers are measured against.
- **Currency:** Appears when your orders are in more than one currency. See [Viewing Reports in More Than One Currency](/guide/reporting-analytics/reports-dashboard-overview#viewing-reports-in-more-than-one-currency).
- **Filters:** Click **Filters** to break down the report by options like **Order Type** or specific **Products**. Products you pick appear below the filter bar as collapsed chips, so a long selection does not push the report down the page. Picks that do not fit on the row collapse into a **+N** chip, and hovering over it shows the full list. **Clear all** removes every filter.
- **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.

## Key Product Metrics ​

At the top of the **Product Report**, you will find summary cards highlighting your key product metrics for the selected period.

- **Net sales:** What customers paid for products in the period, less refunds and tax. Shipping is not included.
- **Units sold:** The quantity sold, including renewals. A signup fee does not count as a unit.
- **Orders:** Paid orders in the period, renewals included.
- **New customers:** Customers whose first purchase was in the period. A renewal is never a first purchase.
- **Refund rate:** Refunds as a share of what customers paid, for orders placed in the period. It changes in percentage points, and a rise reads as a cost.
- **Average order value:** Net sales divided by orders.

Each metric also includes a percentage that indicates the increase or decrease compared to the period you are comparing against. Hover over the info icon beside a metric to see exactly what it counts.

## Sales Over Time ​

The **Sales Over Time** chart shows your product sales across the date range.

- **Net sales:** Bars split into **New sales**, **Renewals**, and, when you sell installment plans, **Installment payments**.
- **Units:** Switch to **Units** in the chart header to see **Units sold** instead.
- **Grouping:** Use the dropdown in the chart header to pick **Auto**, **Daily**, **Monthly**, or **Yearly**.

When there were no sales in the range, the chart reads **No sales in this date range**.

## Products Table ​

Below the chart, the **Products** table lists every product sold in the period. Expand a row for its variants, and click a product name for details.

- **Product:** The product name, with its number of variants underneath.
- **Net sales:** The product's net sales, with its share of all sales underneath.
- **Change:** The change in net sales against the comparison period. A product with no sales in the comparison period reads **New**.
- **New sales, Renewals, Installment payments:** The net sales split by type. The **Installment payments** column appears only when you sell installment plans.
- **Units:** The quantity sold.
- **Orders:** The number of orders that included the product.
- **New customers:** Customers whose first purchase included the product.
- **Refund rate:** The refunds as a share of what customers paid for the product.

Use the **Search products** box to find a product, and click a column heading to sort the table. Click the **Export** button above the table to download it as a CSV file.

## Product Details ​

With **FluentCart Pro**, clicking a product name opens a details panel with the product's sales over time, each variation's share (**Variant mix**), its refunds, its **Subscriptions** figures (**Live subscriptions**, **MRR**, **Renewal rate**, and **Canceled, ends soon**), and the other products customers buy with it (**Bought together**). Without Pro, a sample preview opens instead.

To put specific products side by side, open the [Compare Products](/guide/reporting-analytics/product-compare-report) report.

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

- **Date Filter:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates. Refunds are counted by the day they were made.
- **Compare To:** This dropdown lets you pick a past period (for example, the previous period, previous month, or the same time last year). Your current data is then compared with that past period. This helps you see if your store is doing better, worse, or staying the same over time. Each option in the list shows its own dates.
- **Filters:** Click **Filters** to segment the report by criteria such as **Order Type** or specific **Products**, allowing you to isolate refunds associated with certain items. Applied filters appear as chips below the filter bar, and **Clear all** removes them.
- **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.

### Key Refund Metrics ​

At the top of the **Refunds Report**, you will find summary cards highlighting your key refund metrics for the selected period.

- **Refunded:** The money refunded during the period, tax included, whatever date the order was placed. The **Revenue** report counts refunds on orders placed in the period, before tax, so the two figures can differ.
- **Refunds:** The number of refunds made in the period. An order can be refunded more than once, so the line under the value tells you how many orders they cover and how many were full or partial refunds.
- **Average Refund:** The refunded amount divided by the number of refunds.
- **Refund Rate:** The share of the period's orders refunded in part or full so far, counted the same way as on the Orders, Payment Methods, and Locations reports. The line under it, **Refunds per order placed**, compares refunds made in the period with orders placed in it. That second figure can pass 100% when older orders are refunded.
- **Days to Refund:** The median number of days from an order to its first refund, for orders first refunded in this period.

Each metric also shows a percentage, telling you whether the value went up or down compared to the period you selected for comparison.

#### Refunds Chart ​

The main chart on this dashboard is the **Refunds Chart**. It helps you easily spot refund trends by the day refunds were made.

The chart plots the **Refunded Amount** and **Refunds per order placed** for each period, with the **Previous Refunded Amount** and **Previous refunds per order placed** of the comparison period shown in a lighter style. Hover over a period to see its number of refunds and orders. Use the dropdown above the chart to change the grouping.

### Detailed Refund Analysis ​

Below the main chart, you’ll find more detailed breakdowns that show the data behind the charts. This helps you understand refunds in more detail.

- **Refund breakdown:** This card splits the refunded amount three ways, and each split adds up to the **Refunded** card: - **Full or partial:** **Full refunds** against **Partial refunds**.
- **Sale type:** One-time orders, subscriptions, renewals, and other kinds of sale.
- **Payment method:** The gateway the refund went back through.
- **Most refunded products:** The products that get refunded most, with their refund amount and refund rate. *(FluentCart Pro)*
- **Weeks Between Order and Refund:** This bar chart shows how many weeks after the order each refund came. It helps you set a fair refund window and spot products that disappoint early. *(FluentCart Pro)*
- **Refund reasons:** The most common reasons given for refunds in the period, with how many refunds gave each one. The line at the top tells you what share of refunds have a reason. When none were given, it reads **No reasons given in this period**.

INFO

**Most refunded products** and **Weeks Between Order and Refund** are part of **FluentCart Pro**. Without Pro, a sample preview takes their place.If the report cannot load, an error message with a **Retry** button takes the place of the figures, so a failed request never reads as zero refunds.

The Refunds Report goes deeper than sales data, showing you how often money goes back to customers and where it happens, so you can improve your products and services.

---

## Reports Dashboard Overview ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/reports-dashboard-overview](https://docs.fluentcart.com/guide/reporting-analytics/reports-dashboard-overview)

# Reports Dashboard Overview ​

FluentCart's **Reports** section is your built-in business analytics hub. It turns your orders, refunds, subscriptions, and customers into clear charts and tables, so you can understand how your store is doing without exporting data to an external tool.

The **Overview** page is the first stop. It gathers the headline figure from each detailed report onto one screen, flags anything that needs your attention, and links you straight to the report that explains each number.

## Accessing the Reports ​

Go to your WordPress dashboard, then go to **FluentCart** > **Reports**. The section always opens on the **Overview** page, and the menu on the left lets you switch to any other report.

## The Full Report Section ​

The Reports menu is divided into focused pages, each covering one area of your store:

- **Overview:** A one-screen summary of sales, customers, refunds, subscriptions, and your top products, channels, and countries.
- **Orders:** Order counts, order value, and how your orders are spread over time.
- **Revenue:** What you actually earned after refunds and tax, with trend charts and breakdowns.
- **Refunds:** How often and how much money goes back to customers.
- **Subscriptions:** Recurring revenue and subscriber movement. Its sub-pages cover **Retention**, **Cohorts**, **Future Renewals**, and [Installments](/guide/reporting-analytics/installments-report).
- **Products:** How each product sells. Its **Compare** sub-page puts the products you pick side by side.
- **Customers:** New and returning customers and what they are worth.
- **Sources:** Orders grouped by marketing channel, campaign, source, and medium.
- **Coupons:** How much discount you give and how each coupon code performs. See the [Coupons Report](/guide/reporting-analytics/coupons-report).
- **Payment Methods:** Sales, refunds, and payment failures for each payment gateway. See the [Payment Methods Report](/guide/reporting-analytics/payment-methods-report).
- **Locations:** Sales and customers by country, with a world map. See the [Locations Report](/guide/reporting-analytics/locations-report).
- **Export:** An accounting export of your sales and refunds. This page is added by FluentCart Pro.

INFO

The Reports menu is **extensible**. When you install a FluentCart add-on that ships its own reports, those pages appear automatically in the same menu, after the built-in ones. There's nothing to configure.
## The Overview Page ​

The **Overview** follows the date range and compare period you pick in the filter bar at the top of the page, so every card and list covers the same period. Two parts are exceptions because they describe your store right now or a fixed window: the subscription cards marked **(now)** and the **Last 12 Months** chart ignore the date range.

The Overview is store-wide. It has no **Filters** menu, so an **Order Type** or **Products** filter you set on another report does not apply here. It also reads one currency at a time, so its **Currency** chip lists your individual currencies only, without an **All currencies** option.

### Sales Cards ​

The first row of cards sums up your sales for the selected period. Each card title is a link to the report it comes from, and the info icon beside it explains how the figure is counted.

- **Net sales:** What customers paid in this period, less refunds and tax, counted the same way as on the Revenue report. The title opens the **Revenue** report.
- **Orders:** The number of paid orders placed in this period, renewals included. It links to the **Orders** report.
- **Average order value:** Net sales divided by the number of orders. It links to the **Orders** report.
- **New customers:** Customers whose first purchase was in this period. A renewal never counts as a first purchase. It links to the **Customers** report.
- **Repeat purchase rate:** Of the customers who paid in this period, the share who have made two or more purchases. Renewals are not counted as purchases. This card shows no change badge, because the Customers report has no figure for the compared period.
- **Refund rate:** The share of this period's orders that were refunded in part or in full, matching the headline figure on the **Refunds** report.

Below each figure, a badge shows how it changed against the compared period. Hover over the badge to see the previous value. Amounts change as a percentage of themselves, while rates such as **Refund rate** change in percentage points, shown as **pts**. A green badge is good news and a red one is not, so a rising refund rate shows in red. When you choose **No comparison**, the badges disappear.

### Subscription Cards ​

If your store has subscriptions, a second row of cards appears:

- **MRR (now):** Your monthly recurring revenue today, as on the Subscriptions report. The date range does not apply.
- **Paying subscriptions (now):** Active subscriptions, discounted first years, and canceled subscriptions that are still in their paid term. The date range does not apply.
- **Churn rate:** Subscriptions that ended in this period, as a share of those active at its start. It changes in percentage points against the compared period.

All three cards link to the **Subscriptions** report. Stores without any subscriptions don't see this row.

### Needs Attention ​

The **Needs Attention** card lists problems worth acting on. It only appears when at least one of these checks applies:

- **Failed renewals:** Subscriptions with a failed renewal payment, and how much monthly recurring revenue is at risk.
- **High dispute rate:** Your dispute rate is above 0.75%, the level at which card networks start to monitor a store.
- **Failed installment payments:** Installment plans with a failed payment, and how much is still owed.
- **Rising refund rate:** The refund rate rose clearly against the compared period, by at least 2 percentage points and to at least one and a half times the earlier rate. Small swings are ignored.

Each item has a **View report** link to the page where you can investigate it.

### Net Sales Chart ​

The **Net Sales** chart plots your net sales across the selected period, with the compared period drawn as a dotted line, so you can see at a glance whether you are ahead or behind. The chart groups the timeline automatically from your date range: by day for short ranges, by month for ranges up to a year, and by year beyond that. If there were no sales in either period, it shows **No sales in this period**.

### Top Lists ​

Three short lists rank what drove your sales in the period. Each shows up to five rows, with a bar for each row's share of the total and a **View report** link to the full report.

- **Top Products:** Your best products by net sales. It links to the **Products** report.
- **Top Channels:** The marketing channels that brought in the most new customers. It links to the **Sources** report.
- **Top Countries:** The countries with the most net sales, by billing address. Orders without a known country are left out. It links to the **Locations** report.

When a list has nothing to show, it says so, for example **No product sales in this period** or **No new customers in this period**.

### Last 12 Months ​

The final chart shows your net sales for each of the last 12 months as bars, with the same month a year earlier drawn as a dotted line. It is counted the same way as the Revenue report. The date range does not apply here, and the current month is still in progress, so its bar is not final.

### Loading and Errors ​

The Overview loads in stages: the cards at the top appear first, and the lists further down the page load as you scroll to them. If one section cannot load, only that section shows an error with a **Retry** button, and the rest of the page keeps working. A card whose figure failed to load shows **Unavailable** instead of a misleading zero, and the message **Some figures could not be loaded.** offers a retry. If a Needs Attention check fails, the card warns that the list may be incomplete.

## Choosing How a Trend Chart Is Grouped ​

The **Orders**, **Revenue**, **Refunds**, **Subscriptions**, **Products**, **Customers**, and **Compare** pages each carry a trend chart with a small grouping dropdown above it. That dropdown decides how tightly the timeline is bucketed, and it changes the shape of what you see without changing the numbers underneath.

- **Auto:** Lets FluentCart pick the grouping from the date range you selected. This is the default.
- **Daily:** One point per day. Best for spotting the exact day a campaign landed or a problem started.
- **Monthly:** One point per month, which smooths daily noise into a readable trend.
- **Yearly:** One point per year, for long-range comparisons.

On the **Orders**, **Revenue**, **Refunds**, and **Subscriptions** charts, **Auto** tells you what it decided. While it is the active choice, the option reads **Auto (Daily)**, **Auto (Monthly)**, or **Auto (Yearly)** to show which grouping your current date range resolves to. Ranges up to about three months group daily, up to a year group monthly, and anything longer groups yearly. The label goes back to a plain **Auto** while you have picked a grouping yourself.

Pick a grouping explicitly when Auto is not what you want, such as reading a full year day by day to find a single spike.

## Choosing the Date Range ​

The date button at the left of the filter bar sets the period a report covers. Pick one of the presets (**Today**, **Last 7 days**, **Last 30 days**, **This month**, **Last month**, **Last 12 months**, **Year to date**, or **All time**), or choose **Custom…** to pick a start and end date yourself and click **Apply**.

Presets always count from today, so **Last 7 days** still means the last seven days when you come back tomorrow. Dates follow your WordPress site timezone, which the menu shows at the bottom, for example **In store time: UTC+06:00**. Without FluentCart Pro, the reports start on **This month**.

## Comparing With an Earlier Period ​

The compare dropdown beside the date button decides which earlier period your numbers are measured against. Its label reads, for example, **vs Previous period**. Each option in the list shows the dates it would use, so you never have to work out the comparison window yourself.

All comparison periods last as many days as your selected range. They differ in where they start:

- **Previous period:** Ends the day before your selected range begins.
- **Previous month:** Starts one month before your selected range starts.
- **Previous quarter:** Starts three months before your selected range starts.
- **Previous year:** Starts one year before your selected range starts.
- **Custom:** You choose the start date in the **Compare from** date picker that appears beside the dropdown.
- **No comparison:** Turns the comparison off.

Changing the comparison period is a FluentCart Pro feature. Without Pro, the dropdown is locked on **Previous period**.

On charts, the comparison period is drawn as a dotted line or a lighter series, so the two periods are easy to tell apart. If a report cannot load, an error message with a **Retry** button appears instead of a blank chart or zeros.

## Using Advanced Filters ​

The **Filters** button at the right end of the filter bar opens the advanced filters, a FluentCart Pro feature. Pick a filter from the list, choose its values, and the report updates. The button shows how many filters are active, the applied filters appear as chips below the filter bar, and **Clear all** removes them.

- **Order Type:** Choose **All**, **One time**, **Subscription**, **Renewal**, **Installment sign-up**, or **Installment payment** to limit the report to those kinds of orders.
- **Products:** Pick specific products or variations to see only their numbers.

The **Filters** button appears on the **Orders**, **Revenue**, **Refunds**, **Products**, **Sources**, **Coupons**, **Payment Methods**, and **Locations** reports. The subscription reports (**Subscriptions**, **Retention**, **Cohorts**, and **Future Renewals**) replace it with their own product picker, which lists subscription products only. The **Overview**, **Customers**, **Compare**, and **Installments** pages have no Filters menu.

## Viewing Reports in More Than One Currency ​

If you sell in more than one currency with [Multi Currency](/guide/settings-configuration/multi-currency-settings), your orders end up in different currencies. Adding those amounts together without converting them would give you a meaningless total, so the reports let you choose how to read them.

When the selected date range contains orders in two or more currencies, a **Currency** chip appears in the filter bar. It lists every currency that has orders in that range, and it starts on the currency with the most orders. You can read your data in two ways:

- **A single currency:** Pick a currency code, such as **USD** or **GBP**. The report shows only the orders placed in that currency, in that currency's own amounts, with no conversion.
- **All currencies (in USD):** Pick this option to combine everything in your base currency. The label shows your own base currency code in place of USD. Each order is converted at the exchange rate it was placed at. Orders that have no exchange rate on record are left out, and the option tells you how many.

The **All currencies** option is available on the **Orders**, **Revenue**, **Refunds**, **Products**, **Compare**, **Customers**, **Sources**, **Coupons**, **Payment Methods**, **Locations**, **Retention**, **Future Renewals**, and **Installments** reports. The **Overview**, **Subscriptions**, and **Cohorts** pages always read one currency at a time, so only the individual currency codes are listed there.

All amounts on a report, including the figures for the comparison period, are shown in the currency you selected, with that currency's symbol.

INFO

On the **Future Renewals**, **Cohorts**, and **Installments** reports, the **Currency** chip lists every currency that has ever had orders, not only those in a date range.By starting on the Overview, you see the most important numbers first and know exactly which detailed report to open next.

---

## Subscription Retention & Churn Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/retention](https://docs.fluentcart.com/guide/reporting-analytics/retention)

# Subscription Retention & Churn Report ​

The **Retention** report in FluentCart provides a deep dive into your subscription health, helping you track how many customers you keep versus how many you lose (churn) over time. This dashboard is essential for measuring long-term stability and customer loyalty.

## Accessing the Retention Report ​

Go to your WordPress dashboard, navigate to **FluentCart Pro → Reports**, and select the **Retention** sub-tab under the **Subscriptions** category.

## Report Filters and Controls ​

Use the controls at the top of the page to customize the data displayed in your charts and tables.

- **Date Filter:** Define a specific date range to analyze retention trends over months or years.
- **Products:** Open the **All products** dropdown to limit the report to specific subscription products.
- **Monthly / Yearly:** Use the buttons beside the page title to measure retention month by month or year by year.
- **Billing interval:** When you sell plans with more than one billing interval, a dropdown beside the buttons lets you read one interval at a time, for example **Monthly** or **Yearly** plans, or keep **All intervals**. A monthly plan can churn every month, while a yearly one can churn only at renewal, so reading them apart gives a fairer picture.

Retention compares the subscriptions active when a period began with those still active at its end. New subscriptions are not counted, and installment plans are not included. Hover over the info icon beside the **Subscription Retention** title to read this definition in the app.

## Retention Summary ​

Three cards highlight your ability to keep subscribers and the revenue they bring. Each card shows the figure for the latest closed period beside the **Average of closed periods**, so you can tell whether the latest month or year is above or below your norm.

- **Subscription Retention:** Of the subscriptions active when the period began, the share still active at its end. The note under it shows how much churned.
- **MRR Retention:** Of the monthly recurring revenue at the start of the period, the share kept at its end. The note under it shows the share of MRR that churned.
- **Renewal Rate:** Of the renewals that fell due in the period, the share that was paid. A plan canceled early counts as a lost renewal when its paid term ends. Renewals still retrying payment count once they settle, and the note under the card tells you how many are still retrying.

Under each figure, a sentence puts the numbers in plain words, for example **41 of the 43 subscriptions active when Sep 2026 began were still active at its end.**

If your date range does not yet cover a full closed month (or year, in **Yearly** view), the cards ask you to pick a range that covers at least one past period.

## Retention Rate Chart ​

The **Retention Rate** chart provides a visual period-over-period comparison of your subscriber stability.

- **Subscription Retention vs. MRR Retention:** The chart plots both metrics side-by-side, allowing you to see if customer loss is impacting your revenue proportionally.
- **Zoom:** Use the zoom icon in the top-right corner to enlarge the chart.

## Renewals and Lifetime Value ​

With **FluentCart Pro**, a further section shows what happened to your renewals and why subscriptions left, and uses your retention to estimate the long-term value of a subscriber.

- **Renewals:** The renewals that fell due in each period: **Renewed**, **Lost**, or **Retrying payment**. A plan canceled early counts as lost when its paid term ends.
- **Why subscriptions left:** The subscriptions that ended in each period, by reason: **Canceled**, **Payment failed**, **Retrying payment**, **Paused**, or **Completed**.
- **Lifetime (estimate):** Your expected subscription lifetime (1 divided by the average churn rate of the closed periods) and the expected lifetime value of a subscriber (average monthly revenue per subscriber times that lifetime). When retention is at or near 100%, the lifetime reads **over 10 years** instead of an unrealistic number of months. Both figures assume churn stays as it was.

Without Pro, a sample preview takes the place of this section.

If the report cannot load, the page shows **This report could not be loaded.** with a **Retry** button.

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

- **Date Filter:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates.
- **Compare To:** This dropdown allows you to choose a past time period to compare with your current data. Each option in the list shows its own dates.
- **Currency:** Appears when your orders are in more than one currency. See [Viewing Reports in More Than One Currency](/guide/reporting-analytics/reports-dashboard-overview#viewing-reports-in-more-than-one-currency).
- **Filters:** Click **Filters** to break down the report by options like **Order Type** or specific **Products**. Applied filters appear as chips below the filter bar, and **Clear all** removes them.
- **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.

### Key Revenue Metrics ​

At the top of the report, you’ll see a quick summary of your store’s sales activity. Each number shows the total for the selected date range, along with the change against the comparison period.

- **Gross Sales:** Product sales before discounts, refunds, shipping, and tax, on paid, partially paid, and refunded orders created in the period.
- **Discounts:** Coupon and manual discounts on these orders.
- **Refunds:** Refunds on orders placed in the period, whenever they were refunded. Tax, shipping, and fees refunded with them are left out here, because they come off their own lines. The **Refunds** report counts all money refunded during the period instead, so the two figures can differ.
- **Net Sales:** Gross sales less discounts and refunds. Shipping, fees, and tax are not part of it.
- **Shipping:** Shipping charged on these orders, less refunded shipping, before shipping tax.
- **Fees:** Payment and other fees charged on these orders, less refunded fees.
- **Taxes:** Tax collected on these orders, including tax on shipping, less the tax share of refunds.
- **Total Sales:** Net sales plus shipping, fees, and taxes: what customers paid, less refunds.

The **Shipping**, **Fees**, and **Taxes** cards appear only when your orders have them. Without any of the three, **Total Sales** equals **Net Sales** and its card is hidden too. Hover over the info icon beside any metric to read its definition.

### Detailed Revenue Analysis ​

Below the key metrics, you’ll find detailed breakdowns of your store’s income. This section helps you see how well your store is performing.

- **Revenue Chart:** This chart shows your **Net Sales** over time, with **Compare Net Sales** for the comparison range drawn beside it. **Discounts** and **Refunds** are off by default: click them in the legend to add them to the chart.
- **Revenue Breakdown:** This table gives a summary of your store by year, with the net sales of the comparison period and the change beside it. - **Year:** Click the arrow at the start of a row to expand it into a row for each date in your range, each with the same columns.
- **Order Count, Gross Sales, Discounts, Refunds, Net Sales:** The totals for that row.
- **Taxes, Shipping, Total Sales:** Shown when your orders have tax, shipping, or other extras.
- **Compare Net Sales:** The net sales of the matching comparison period.
- **Change (%):** The percentage of change between the two, color-coded green or red.

Click a column heading to sort the table. Numeric columns sort by their value. Click the download icon above the table to export it as a CSV file.

#### Net Sales by Order Type ​

The **Net sales by order type** table shows where your net sales come from: one-time orders, new subscriptions, renewals, installment sign-ups, and installment payments. The rows add up to your net sales.

- **Order type:** The kind of sale.
- **Orders:** The number of orders of that type.
- **Net Sales:** The net sales from those orders.
- **Share:** That type's share of your total net sales.
- **Net Sales per Order:** Net sales divided by orders.
- **Change (%):** The change against the comparison period. This column is hidden when you choose **No comparison**.

To see revenue by country or by payment method, open the [Locations](/guide/reporting-analytics/locations-report) or [Payment Methods](/guide/reporting-analytics/payment-methods-report) report.

The Revenue Report shows how your store is earning over time. You can easily see what’s working, understand your store’s earnings, and plan to make it grow.

---

## Subscription Report ​

**Source:** [https://docs.fluentcart.com/guide/reporting-analytics/subscription-report](https://docs.fluentcart.com/guide/reporting-analytics/subscription-report)

# Subscription Report ​

The **Subscription Report** provides a clear overview of your recurring business: how much monthly recurring revenue (MRR) you have right now, and how many subscriptions you won and lost in the period you pick. This dashboard is designed to give you a simple, at-a-glance look at how your subscription offerings are performing.

#### Accessing the Subscription Report ​

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Subscriptions** tab.

### Report Filters and Controls ​

The top of the dashboard gives you key controls to choose what data appears in the report.

- **Date Filter:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates. It applies to the **In this period** section only.
- **Compare To:** This dropdown allows you to choose a past time period to compare with your current data. Each option in the list shows its own dates.
- **Products:** Open the **All products** dropdown to limit the report to specific subscription products. It lists subscription products only and replaces the **Filters** menu of the other reports.

Installment plans are not part of this report. Track them on the [Installments](/guide/reporting-analytics/installments-report) report.

### Right Now ​

The **Right now** cards describe your subscriptions as they stand today. They are not affected by the date range. Hover over the info icon beside a card to read its definition.

- **MRR:** Monthly recurring revenue now: active subscriptions at their renewal price, plus discounted first years at the price paid now, plus canceled subscriptions until their paid term ends. Installment plans, trials, failing, and paused subscriptions are not included.
- **Paying Subscriptions:** Active subscriptions, discounted first years, and canceled subscriptions still in their paid term.
- **ARPU:** Average revenue per paying subscription: MRR divided by the subscriptions that pay more than 0.
- **Discounted First Years:** The MRR from subscriptions in a discounted first cycle, at the price paid now.
- **Uplift When Discounts Renew:** What MRR gains when those discounted first cycles renew at their full price.
- **Free Trials:** The number of subscriptions in a free trial. They are not in MRR, and the tooltip shows their MRR after the trial.
- **MRR at Risk:** The MRR of subscriptions whose renewal payment failed. It is not in MRR.
- **Canceled, Ends Soon:** The MRR of canceled subscriptions still in their paid term. It stays in MRR until the term ends, then leaves unless the customer comes back.
- **Paused MRR:** The MRR of paused subscriptions. It is not in MRR.

### In This Period ​

The **In this period** cards follow your date range and compare against the period you chose.

- **New Subscriptions:** Recurring subscriptions started in the period. A free trial counts when it first pays.
- **Churned:** Recurring subscriptions that ended in the period: canceled, expired, failing, past due, or paused. The line under the value shows the churn rate against the subscriptions active at the start.
- **Net Change:** New subscriptions less churned ones.
- **Net MRR Change:** The MRR of new subscriptions less the MRR of churned ones, plus plan upgrades less downgrades. A plan upgrade is neither churn nor a new subscription. The line under the value splits it into its parts.
- **Renewals:** Paid subscription renewals in the period. Installment payments are not counted.
- **Failed Renewals:** Subscription renewal payments that failed in the period.

### Subscription Movement ​

The **Subscription movement** chart shows new and churned subscriptions for each period, with a **Net** line for the change.

- **Subscriptions / MRR:** Use the buttons in the chart header to count subscriptions or show the MRR they carry. In **MRR** view, plan **Upgrades** and **Downgrades** are drawn too, whenever the period has any.
- **Grouping:** Use the dropdown beside the buttons to change how the timeline is bucketed.

When nothing moved in the date range, the chart reads **No new or churned subscriptions in this period**.

### Where MRR Comes From ​

With **FluentCart Pro**, the **Where MRR comes from** card splits your current MRR **by plan** and **by billing interval**, and shows the **Free trial conversion** of trials started in the period: **Converted to paid**, **Ended without paying**, and **Still in trial**. Without Pro, a sample preview takes its place.

If the report cannot load, an error message with a **Retry** button takes the place of the figures.

With the Subscription Report, you can easily see where your recurring revenue stands today and how it moved over time, giving you the insights you need to measure your growth.

---

