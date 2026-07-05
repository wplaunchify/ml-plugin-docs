# Real Time Analytics

*Category from Independent Analytics Pro documentation*

---

## How Often Does the Real-time Dashboard Update?

**Source:** [https://independentwp.com/knowledgebase/real-time-analytics/how-often-does-the-real-time-dashboard-update/](https://independentwp.com/knowledgebase/real-time-analytics/how-often-does-the-real-time-dashboard-update/)

**The Real-time analytics dashboard updates every ten seconds.**

In order to conserve server resources, the Real-time dashboard only refreshes while you’re currently viewing it. If you are in another tab or not currently using your browser, it won’t refresh until you return to the tab, at which point, it will refresh immediately.

*The refresh can take anywhere from 0.1-3 seconds, depending on how quickly your server processes Ajax requests.*

---

## How to Use the Real-time Analytics

**Source:** [https://independentwp.com/knowledgebase/real-time-analytics/real-time-analytics/](https://independentwp.com/knowledgebase/real-time-analytics/real-time-analytics/)

The Real-time dashboard in Independent Analytics shows you how many people are on your site right now, what pages they’re viewing, and where they came from.

You can reach this dashboard via the **Real-time** menu item. Here’s what it looks like:

![Real-time analytics dashboard](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:818/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/02/real-time-analytics-dashboard.png)

## What this dashboard tells you

At the top of the page, you’ll see a count of your site’s [Active Visitors](https://independentwp.com/knowledgebase/real-time-analytics/what-is-an-active-visitor/), which is the number of people who have viewed at least one page in the last five minutes.

![Active Visitors count](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/02/active-visitors-count.png)

It also displays the total number of pages being viewed and the total referrers and countries visitors came from.

Below the Active Visitors count, you’ll see charts showing your site’s views over the last five minutes and thirty minutes. Every time a page is viewed, it will show up in these charts.

![Active visitors charts](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:381/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/02/real-time-charts.png)

Lastly, you’ll find a few Top 10 lists below the charts. They list the ten most popular pages, referrers, countries, and campaigns **over the last five minutes**.

![Top 10 lists in real-time analytics report](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:534/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/02/real-time-lists.png)

The entire dashboard, including these lists, updates every ten seconds, and the progress bar at the bottom of the page indicates when the next refresh will take place.

---

## What is an Active Visitor?

**Source:** [https://independentwp.com/knowledgebase/real-time-analytics/what-is-an-active-visitor/](https://independentwp.com/knowledgebase/real-time-analytics/what-is-an-active-visitor/)

**An Active Visitor is someone who viewed a page on your site within the last five minutes.**

This method has its pros and cons, so we’d like to explain these details so you can understand this metric clearly.

## How Active Visitors are counted

When someone arrives at your site, they will show up as an Active Visitor for the next five minutes. The drawback to this method is that if they leave in thirty seconds, they’ll still be counted for the full five minutes, and if they read the same page for ten minutes, they won’t be counted as Active after the first five minutes. If that same visitor views another page, they’ll be counted as an Active Visitor again for the next five minutes.

While we could “ping” visitors every ten seconds to see if they are still on the site, this would have huge performance costs. Put simply, each page view could take the resources of 10+ views, eating up a considerable amount of server resources, all just to get a more accurate reading in the Real-time dashboard.

Our method of counting Active Visitors isn’t perfect, but it has **zero additional impact on your site’s performance**. We use data that’s already been recorded, so it doesn’t take any additional bandwidth or slow down your pages.

Funnily enough, this is also how Google Analytics counts active visitors, so we figured it must be accurate enough for most folks 😉

![Google Analytics active visitors](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:561/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/11/google-analytics-active-visitors.png)

---

