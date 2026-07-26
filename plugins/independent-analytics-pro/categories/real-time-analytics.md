# Real Time Analytics

*Category from Independent Analytics Pro documentation*

---

## How Often Does the Real-time Dashboard Update?

**Source:** [https://independentwp.com/knowledgebase/real-time-analytics/how-often-does-the-real-time-dashboard-update/](https://independentwp.com/knowledgebase/real-time-analytics/how-often-does-the-real-time-dashboard-update/)

**The Real-time analytics dashboard updates every ten seconds.**

In order to conserve server resources, the Real-time dashboard only refreshes while you’re currently viewing it. If you are in another tab or not currently using your browser, it won’t refresh until you return to the tab, at which point it will refresh immediately.

You can click the pause button at the top of the report if you want to pause it to analyze the existing data.

![Real time pause](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:674/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/07/real-time-pause.png)

---

## How to Use the Real-time Analytics

**Source:** [https://independentwp.com/knowledgebase/real-time-analytics/real-time-analytics/](https://independentwp.com/knowledgebase/real-time-analytics/real-time-analytics/)

*We are working on a new video recording to match the updated design. It will be published shortly!*

The Real-time dashboard in Independent Analytics shows you how many people are on your site right now, what pages they’re viewing, and where they came from.

## What data is included?

At the top of the report, you’ll see a count of your site’s [Active Visitors](https://independentwp.com/knowledgebase/real-time-analytics/what-is-an-active-visitor/), which is the number of people who have viewed at least one page in the last five minutes.

![Real time active visitors count](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:344/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/07/real-time-active-visitors-count.png)

There’s also a chart that shows your recent views, orders, clicks, and form submissions. You can click on any of the labels to hide the corresponding bars in the chart.

Below the Active Visitors count and chart, you’ll find six lists. There is one for each of the basic reports, plus a world map at the bottom.

![Real time popular lists](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:646/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/07/real-time-popular-lists.png)

Each list is sorted by the number of visitors. For instance, the Pages list in the screenshot above tells you that 4 visitors are looking at the Homepage. Likewise, 3 visitors came from Google, 11 are using Desktop devices, and 2 of them reached your site via campaign links.

At the top of each list (besides Pages), there is an option to change the grouping. For example, the Geographic list at the bottom shows countries by default, but can be changed to show cities instead.

![Real time city grouping](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:393/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/07/real-time-city-grouping.png)

This data gives you an overview of what’s happening on your site, but you can dive even deeper with filters.

The grouping you select will stay selected even when you refresh the report. This is so that local businesses can always keep the Geographic list showing cities, since country-level data is never useful for them.

## How to filter the real-time report

If you hover over any list item in the real-time report, you’ll see it gets highlighted and shows a filter icon.

![Real time hover list item](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:750/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/11/real-time-hover-list-item.png)

Clicking on that item will apply a filter so that the report only shows data for visitors who viewed that page. This way, you can see the referrers, devices, campaigns, and geolocations of visitors who viewed that page.

This works for every list, so you could also click on a referrer to see which pages those visitors looked at.

![Real time filtered](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:710/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/07/real-time-filtered.png)

This is a fun way to explore your data and learn more about the visitors on your site. But it does create one issue…

## How to pause the report

When you are changing the list grouping and filtering the report, you may get annoyed by the data refreshes that take place every 10 seconds. Sometimes, you don’t want the latest data; you want to freeze time so you can analyze the data you’re currently looking at.

To do this, you can click on the pause button at the top of the report.

![Real time pause](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:674/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/07/real-time-pause.png)

Clicking this button will freeze the report until you either click the unpause button or reload the page. The real-time report will then fetch the latest data and resume refreshing the data every 10 seconds.

---

## What is an Active Visitor?

**Source:** [https://independentwp.com/knowledgebase/real-time-analytics/what-is-an-active-visitor/](https://independentwp.com/knowledgebase/real-time-analytics/what-is-an-active-visitor/)

**An Active Visitor is someone who viewed a page on your site within the last five minutes.**

This method has its pros and cons, so we’d like to explain these details so you can understand this metric clearly.

## How Active Visitors are counted

When someone arrives at your site, they will show up as an Active Visitor for the next five minutes. The drawback to this method is that if they leave in thirty seconds, they’ll still be counted for the full five minutes, and if they read the same page for ten minutes, they won’t be counted as Active after the first five minutes. If that same visitor views another page, they’ll be counted as an Active Visitor again for the next five minutes.

While we could “ping” visitors every ten seconds to see if they are still on the site, this would have huge performance costs. Put simply, each page view could take the resources of 10+ views, eating up a considerable amount of server resources, all just to get a more accurate reading in the Real-time dashboard.

Our method of counting Active Visitors isn’t perfect, but it has **zero additional impact on your site’s performance**. We use data that’s already been recorded, so it doesn’t take any additional bandwidth or slow down your pages.

---

