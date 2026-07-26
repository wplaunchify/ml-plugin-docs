# User Journeys

*Category from Independent Analytics Pro documentation*

---

## How Does this Affect Visitor Privacy?

**Source:** [https://independentwp.com/knowledgebase/user-journeys/user-journeys-visitor-privacy/](https://independentwp.com/knowledgebase/user-journeys/user-journeys-visitor-privacy/)

**We are not lawyers, and this is not legal advice 🙂**

It’s important to understand that the User Journeys feature does not record any data itself. Rather, this feature gives you an interface with a novel way to view and explore your data.

In other words, this feature does not add any new privacy implications on its own, but rather highlights an existing issue, which is the ability to cross-reference data sources.

This is easier to understand with an example, so take a look at this session shown in the User Journeys report:

![User Journeys eCommerce sale](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:631/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/01/user-journeys-ecommerce-sale.png)

You could not know who this customer is based on what is shown here (or stored in the database tables).

However, you can see that the order happened at 4:02am, and if you were the store owner, you could easily find which sale took place at that time. For eCommerce transactions, there is also a link to the order page, which removes any ambiguity.

When you view the order page, you can plainly see the personal data of this customer, so there is no longer any question who this visitor is. This essentially makes their data in the User Journeys report personal data as well, by association.

In the User Journeys report, you can see their browsing history on your site from before the sale, their approximate geolocation, device type, browser, and the referrer/campaign info. If they have visited the site before, you *may* see previous sessions, but [identifying individuals over time](https://independentwp.com/knowledgebase/user-journeys/repeat-visitors-recognized/) is not always reliable.

The big picture is that while Independent Analytics Pro does not collect personal data, the User Journeys report makes it easier to cross-reference your analytics data with personal data collected via other means, which can thus turn some data recorded by IA Pro into personal data. Again, this is not a new issue and was always possible via looking at your database tables directly for timestamps, but the User Journeys report makes it easier.

If your site does not collect any personal data, i.e., it has no forms, then this will not be a concern. It will never be possible to identify someone via User Journeys or by examining the database tables directly.

If your site does collect personal data, i.e., you have forms, then it’s important to outline what you track in your privacy policy.

Below every form on your website, you could include a required checkbox that says the user agrees to your privacy policy. In your privacy policy, you could let them know what other data you may be able to find out about them via manual cross-referencing with your analytics. The user can review this information and, once informed, decide whether or not they would like to proceed with submitting the form.

---

## How Long Are Repeat Visitors Recognized?

**Source:** [https://independentwp.com/knowledgebase/user-journeys/repeat-visitors-recognized/](https://independentwp.com/knowledgebase/user-journeys/repeat-visitors-recognized/)

Since website analytics are used to measure visits from anonymous guests, recognizing them over long periods of time is difficult. How long Independent Analytics is able to recognize the same visitor depends on a few factors.

**If a visitor accesses your site from a different device, browser, or IP address, they will not be seen as the same visitor.**

For this reason, visitors are often recognized during the same day and even over a few days, but recognizing the same visitor over months is extremely unlikely.

You can [set the salt token](https://independentwp.com/knowledgebase/data/refresh-visitor-salt/) to refresh every day if you want to ensure visitors can’t be recognized for more than 24 hours for privacy reasons.

There is little that can be done to improve how long visitors can be recognized while adhering to a privacy-friendly policy. In fact, even if cookies were used, visitors still would not be recognized if they changed browsers or devices, or simply cleared their cookies.

When analyzing your user journeys, understand that if you see a few sessions over the course of the week, this user may have accessed your site from another device, browser, or IP address as well. And it is possible that they first visited your site months ago, but have since changed their device, browser, or IP address.

---

## How to Use the User Journeys Report

**Source:** [https://independentwp.com/knowledgebase/user-journeys/user-journeys-report/](https://independentwp.com/knowledgebase/user-journeys/user-journeys-report/)

When someone visits your site, they eventually leave. Everything they do while on your site is included in one session.

With the User Journeys report, you can view every single one of these sessions:

![User Journeys report](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:676/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/01/user-journeys.png)

When you visit the User Journeys report, you’ll see the most recent session at the top. Each session includes essential data so you can analyze it at a glance.

These are the data points included in each session:

- **Session Start:** The time that the visitor first arrived at your site.
- **Landing Page:** The page the visitor arrived at.
- **Referrer:** The site the visitor came from.
- **UTM Source:** The value from the 
```
utm_source
```

 parameter, if one was used ([more info on campaign parameters here](https://independentwp.com/knowledgebase/campaigns/what-is-utm-parameter/)).
- **Pages Viewed:** The number of pages the visitor looked at during their session.
- **Duration:** How long the visitor was on your site.
- **Conversions:** Indicates whether there was a click, form submission, or eCommerce order recorded during the session.

These data points make it easy to pick out interesting sessions to explore further. To learn more about a session, all you have to do is click on it, and the timeline will be revealed.

The Pages Viewed and Duration values are color-coded, so sessions with higher engagement use a darker orange, and less engaged sessions use a lighter orange.

## Exploring the timeline

When a session is clicked on, it reveals a complete timeline of the visitor’s experience on your website.

![User Journeys timeline](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:676/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/01/user-journeys-timeline.png)

It begins with the date of their arrival and the site they came from, followed by each of their views. Every view includes a timestamp, the page they viewed, and how long they viewed that page.

You’ll also notice that clicks, form submissions, and eCommerce orders are displayed within the timeline with timestamps for when they occurred.

On the right side is the Conversions log, which lists every tracked event. This can be useful if a session has 10+ views and you want to quickly find out what form they submitted or how much revenue an order was worth without scanning the entire timeline.

To the right of the timeline, there are icons indicating the country, device type, and browser used by the visitor. You can hover your cursor over any of them to reveal a tooltip with the country/device/browser name.

Above the icons, you may see a link that says “View all X sessions for this visitor.” If IA Pro recognizes other sessions for this visitor, you will be able to click on this link to see all of their recorded sessions on one page.

Here is an example of a visitor page accessed in this way:

![User Journeys individual visitor page](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:535/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/01/user-journeys-visitor-page.png)

This can be helpful to understand the actions a user took leading up to a conversion event. For instance, in the example above, you can see a visitor who first reached the site via a MailChimp email, and then purchased a product the following day.

It is not possible to look up sessions based on an individual user’s name, email, or other personal data. The data recorded by Independent Analytics Pro is fully anonymized and does not include personal data.

## Using filters is essential

While it can be valuable (and fun) to visit this report each day and look through a few journeys, you’re unlikely to look at them all. In fact, you might look at fewer than 1 in every 1,000 sessions that get recorded.

This is why it’s so important to utilize the filters.

With filters, you can quickly find sessions that match certain criteria. For instance, you can find sessions with a specific landing page, more than 1 page view, or those from a particular country.

Here’s a look at all the available filters:

![User Journeys filters](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:686/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/01/user-journey-filters.png)

The **Landing Page** filter will find sessions with a matching landing page, whereas the **Page** filter will find sessions where the matching page was viewed at any point during the session.

The Conversion filters are especially useful and a bit more advanced than the other ones.

For example, if you select the **Form Submissions** filter, you can choose to display sessions with any form submission, or only include sessions with a submission for a specific form.

![User Journeys form filter](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:408/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/01/user-journeys-form-filter.png)

The **Clicked Link** filter works the same way, in that you can filter by any clicks or clicks that match a specific link pattern.

![User Journeys Clicked Link filter](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:435/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/01/user-journeys-clicked-link-filter.png)

To find eCommerce orders, you can use the **Gross sales** filter, which works a bit differently from the other ones. With this filter, you can simply search for sessions with gross sales greater than zero, and that will eliminate any sessions without an order.

![User Journeys Gross Sales filter](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:437/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/01/user-journeys-gross-sales-filter.png)

You have the flexibility to increase the value beyond zero if you only want to see sales with a certain value.

And like other reports, you can add multiple conditions. You could search for things like sessions with more than one view AND from Canada, or sessions with a form submission OR a click.

If you find a filter combination that’s valuable for your business, remember to [save a new report](https://independentwp.com/knowledgebase/dashboard/save-reports-revisit-later/), so you can revisit it easily in the future.

Lastly, the User Journeys report can display data from any date range, so you aren’t limited to only the most recent sessions. You can change the date using the date picker, just like any other report.

That’s everything you need to know to analyze your visitors and their behavior with the User Journeys report!

---

