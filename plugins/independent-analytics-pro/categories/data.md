# Data

*Category from Independent Analytics Pro documentation*

---

## What Refreshing the Visitor Salt Every Day Means

**Source:** [https://independentwp.com/knowledgebase/data/refresh-visitor-salt/](https://independentwp.com/knowledgebase/data/refresh-visitor-salt/)

In this guide, we will be covering:

- How to refresh the salt daily
- What is a salt?
- How Independent Analytics uses salts
- Why you may want to refresh the salt daily
- The ramifications of daily salt refreshes

Let’s start by covering how to switch to daily salt refreshing, and then we’ll get into the technical details.

## How to refresh the salt daily

The salt is never refreshed after installing Independent Analytics, but you can switch it to daily refreshing.

Start by visiting the **Settings** menu and locate the **Salt refresh rate** setting. Then, check the box labeled, “Refresh the visitor salt every day.”

![Daily salt refresh setting](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:507/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/01/daily-salt-refresh-setting.png)

Once this box is checked, click the **Save Settings** button to complete your changes.

## What is a salt?

A “salt” is a string of random data used as an additional input to a one-way hash function.

Salts are used to add a level of uniqueness to data that’s about to be hashed. Salts ensure that if the same value is hashed twice, the hash result won’t be the same for both.

When Independent Analytics is first installed, it creates a salt, which might look something like this:

```
wR5tlJX9UjDV94wAQWoSRDnLCFLUftAMsKC7uyzaW0k=
```

This salt is stored in the **wp_options** table in an option named **iawp_salt**.

## How Independent Analytics uses salts

In order to recognize repeat visitors without the use of cookies, Independent Analytics needs to remember the IP address of each visitor. This way, it can recognize the same IP and understand that this is not a new visitor but the same visitor returning again.

However, IP addresses are considered “Personally Identifiable Information” under the GDPR, so they can’t be stored in plain text. They can be saved in the database as long as they are obfuscated into an unrecognizable state that is sufficiently challenging to crack. This is why the IP addresses are hashed using both the visitor’s IP address and the User Agent string.

In summary, the salt is part of our solution to convert IP addresses into an obfuscated state while retaining the ability to recognize repeat visitors.

## Why you may want to refresh the salt daily

While the IP addresses are sufficiently obfuscated, it is theoretically possible to crack them. If cracked, this would provide data on all the page views and activities of specific IP addresses on your site. These IP addresses could then be linked with other data sources to reveal the visitor’s identity.

Since the salt never changes, the activities of each IP address would be viewable since the installation of Independent Analytics, which could be months or years of activity.

On the other hand, if the salt is refreshed daily, then even if it is cracked, the activities of an IP address would only be viewable for one day. Each day would have to be cracked separately, which is essentially unfeasible.

## The ramifications of daily salt refreshes

There is one downside to refreshing the salt daily, and that is the reduced accuracy of the Visitors metric.

For example, if someone visits your site every day in a week, Independent Analytics would normally count them as one visitor. If the salt is refreshed daily, this same visitor will be counted as seven different visitors because they can’t be recognized beyond 24 hours. If they visit seven times within one day, they will still be counted as one visitor.

In practice, the change in your analytics likely won’t be dramatic, but you will see an overall higher count of unique visitors.

For this reason and the fact that not all of our users operate in or with visitors from the EU, we opted to make daily salt refreshes optional.

We will refrain from making recommendations and would like to clarify that the above is not legal advice but rather a technical explanation of how salt refreshes work in Independent Analytics. We understand that this is a highly technical subject, and we hope that this guide has helped you in finding the best course of action for your website.

---

## What are Entrances, Exits, and Exit Rate?

**Source:** [https://independentwp.com/knowledgebase/data/what-are-entrances-exits-exit-percentage/](https://independentwp.com/knowledgebase/data/what-are-entrances-exits-exit-percentage/)

The Pages report includes a few columns that will help you understand how visitors navigate your website. These columns are:

- Entrances
- Exits
- Exit Rate

These columns are not visible by default and can be enabled via the [columns toggle](https://independentwp.com/knowledgebase/dashboard/how-to-customize-the-columns/) option.

**Entrances** tell you how many times a page was the first page in a session.

**Exits** tell you how many times a page was the last page in a session.

**Exit Rate** tells you how often a page was the last page in a session whenever it’s viewed.

To make things clearer, let’s consider an example. Imagine someone visits your site and they view the following three pages in this order:

- Page A
- Page B
- Page C

In your Pages report, all three pages would have 1 view. Page A would have 1 **Entrance**, while the others would have zero. Likewise, Page C would have 1 **Exit**, while the other pages would have none.

Entrance pages are often referred to as landing pages.

While entrances and exits are intuitive, the **Exit Rate** is a bit more complicated. If this was the only recorded session, Page C would have an **Exit Rate** of 100% because it’s the last page visitors view before leaving your site 100% of the time it’s viewed.

Now, let’s say a second visitor arrives and views the following pages:

- Page B
- Page A

Page A would have an **Exit Rate** of 50% because it’s the exit page 50% of the time it’s viewed. Page C would still have an **Exit Rate** of 100% because it’s the last page viewed 100% of the time it’s viewed.

In other words, **Exit Rate** tells you how often a page is the exit page *when it’s viewed*, not how often it’s the exit page *when the site is viewed*.

## How to find insights with these columns

In practice, you can use the Entrances column to find pages that bring the most visitors to your website and the Exits column to find the pages where visitors leave most often.

Since popular pages will naturally have more exits, you can use the Exit Rate column to find pages where visitors are more likely than usual to leave your website.

---

## What is Views Per Session?

**Source:** [https://independentwp.com/knowledgebase/data/what-is-views-per-session/](https://independentwp.com/knowledgebase/data/what-is-views-per-session/)

Views Per Session tells you how many pages visitors look at (on average) when they visit your site.

For instance, imagine someone visits your site and has the following session:

**Homepage -> Article A**

This session included two views. Now another visitor arrives and looks at the following pages:

**Article A -> Homepage -> Article B**

This session includes three views.

Since the first session had two views and the second one had three, the Views Per Session would be 2.5.

## “Views” not “pages”

There’s one minor detail you might like to be aware of.

We call this metric “views per session” and not “pages per session” because of the way it’s calculated. Take the following session, for example:

**Article A -> Homepage -> Article A**

This session includes three views, but technically, only two pages were viewed. Pages per session would imply the number of unique pages that were viewed (two in this case), and we feel that isn’t what most people are interested in when analyzing this metric.

What’s more instructive is the total number of views (three), so that’s why we call this metric “views per session” instead of “pages per session.”

---

## What is Bounce Rate?

**Source:** [https://independentwp.com/knowledgebase/data/what-is-bounce-rate/](https://independentwp.com/knowledgebase/data/what-is-bounce-rate/)

**Bounce rate is the percentage of visitors who viewed one page and left.**

![Bounce rate stat](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/08/bounce-rate-stat.png)

Imagine a visitor lands on your homepage and reads two articles before leaving. This visitor did not “bounce” because they viewed multiple pages. This would make your bounce rate 0%.

Now imagine a second visitor arrives on the homepage and leaves without viewing any other pages. This would qualify as a “bounce,” and your bounce rate would increase to 50% since half of your visitors left after viewing one page.

## Tips for using bounce rate

Bounce rate is more useful for some types of sites than others but serves as a decent health check for most websites.

For instance, if you see your bounce rate increase suddenly, this could be a sign that there’s a technical glitch affecting visitors. This can be checked for individual pages and page types as well.

If your bounce rate is high (80% or higher), this doesn’t mean visitors aren’t enjoying your site. For blogs, in particular, it’s common for visitors to read one post, find what they need, and leave without viewing more pages. It’s important to see bounce rate for exactly what it is and nothing more: the percentage of one-page visits.

You can also see the bounce rate for each referrer, and this will give you a clearer picture of the engagement level you’re getting.

For example, you may find visitors from search engines bounce frequently, but loyal followers from your social channels are less likely to bounce.

## Our bounce rate is (usually) higher than Google’s

If you’re transitioning from Google Analytics, you will notice that the bounce rate in Independent Analytics may be higher. This happens because we calculate bounce rate strictly as the percentage of one-page sessions.

Most people aren’t aware of this, but Google Analytics doesn’t calculate bounce rate as the number of single-page sessions; it uses the number of sessions with a single request to their server. This means they also include other events. For example, if you have a social sharing plugin with Google Analytics integration, it likely fires an event when someone clicks a button, and this is counted towards bounce rate.

Counting events as if they are page views has the effect of artificially lowering your bounce rate, and the effect can be significant if you have a lot of events firing on your site. It also makes bounce rate very confusing.

For instance, your bounce rate could be a percentage of people who viewed one page, didn’t click a share button, didn’t optin to your newsletter, or didn’t add an item to the cart. This is confusing, not to mention impossible to optimize for. If your bounce rate lowers, you won’t know if it’s because visitors are viewing more pages or clicking the Add to Cart button more.

For these reasons, our bounce rate is a simple calculation of *single-page sessions / total sessions*.

If you’re wondering if your site’s bounce rate is healthy, we have a blog post about outlining [what a good bounce rate is](https://independentwp.com/blog/whats-a-good-bounce-rate/) and how to optimize it.

---

## What is View Duration?

**Source:** [https://independentwp.com/knowledgebase/data/what-is-view-duration/](https://independentwp.com/knowledgebase/data/what-is-view-duration/)

**View Duration is a measure of how long visitors spend on a specific page, on average.** You’ll see the View Duration appear in the data table of the Pages menu.

![View Duration column in Pages menu](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:375/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/05/view-duration-annotated.png)

View Duration is measured in a similar way as [Session Duration](https://independentwp.com/knowledgebase/data/what-is-session-duration/). We take the time that visitors land on a page and subtract it from the previous page. For instance, the following session would tell us that the visitor spent two minutes on Page 1:

- Page 1: 1:25pm
- Page 2: 1:27pm

For this session, we would simply ignore Page 2. Likewise, when visitors only view one page, we don’t calculate View Duration.

This is the same way that Google Analytics calculates *Time on Page*, but with one critical difference. We omit unknown values from our calculation, while Google counts them as zero. This has the effect of lowering the View Duration towards zero, especially if you have lots of one-page sessions. For this reason, you will see that the View Duration reported in Independent Analytics is higher than the Time on Page metric in Google Analytics.

---

## What is Session Duration?

**Source:** [https://independentwp.com/knowledgebase/data/what-is-session-duration/](https://independentwp.com/knowledgebase/data/what-is-session-duration/)

**Session Duration is a measure of how long people spend on your site when they visit, on average.**

You’ll see Session Duration show up in the Quick Stats of every page as well as in the table of the Referrer, Geographic, and Campaigns menus.

![Session Duration in Referrers table](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:228/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/05/referrer-session-duration-annotated.png)

When someone arrives on your site, a new session is created, and each page they view is included in this session. The session concludes when there is a thirty-minute period of inactivity.

To calculate the duration of a session, we take the time of each view and subtract it from the previous one. For instance, imagine a session has views at the following times:

- Page 1: 1:23pm
- Page 2: 1:25pm
- Page 3: 1:27pm

From this data, the session duration would be calculated as 4 minutes. While this works reasonably well, there is a drawback.

We know they spent 2 minutes on Page 1 and Page 2, but we don’t know how long they spent on Page 3, so that data is simply omitted.

Omitting the time spent on the last page lowers the average session duration, but since single-page sessions are also excluded (they tend to be brief), this has the effect of increasing the average session duration. In practice, the value is approximate but accurate enough to get a clear picture of engagement and see similar results over time.

This is similar to how Google Analytics calculates session duration, so the values should be similar when switching to Independent Analytics.

## Why do I see “-” instead of a session duration?

If you’re looking at the table in a report, such as the Referrers report, you may see some referrers with a session duration of “-” instead of a real duration.

When a visitor views only one page before leaving, Independent Analytics cannot determine how long they spent on the site. If you have a referrer with 5 visitors and the session duration is omitted (-), it means all 5 visitors viewed only one page. You’ll also see that the bounce rate is 100%. If even one of them viewed a second page, Independent Analytics could calculate an average duration. For this reason, the issue of missing session durations usually resolves itself as more visitors arrive.

---

## What is a Session?

**Source:** [https://independentwp.com/knowledgebase/data/what-is-session/](https://independentwp.com/knowledgebase/data/what-is-session/)

A new session is recorded when a visitor arrives on your site. As they view additional pages, these views are included in the same session until there is a 30-minute period of inactivity. If that visitor views any pages after that, they’ll be recorded in new sessions.

As an example, if a visitor arrives on your site, views 5 pages, and leaves, this will be recorded as 1 visitor, 5 views, and 1 session. If that same visitor returns the next day, views 2 pages, and leaves, the total values will be 1 visitor, 7 views, and 2 sessions.

There is one exception to the 30-minute inactivity period. If a visitor reaches your site from Facebook, then a new session is started, and Facebook is the referrer. If they return to your site 5 minutes later via Google, a new session is started and Google is the referrer of the session. This allows Independent Analytics to capture more referrer data.

---

## Why are there fewer visitors in the Geographic dashboard?

**Source:** [https://independentwp.com/knowledgebase/data/fewer-visitors-geographic-dashboard/](https://independentwp.com/knowledgebase/data/fewer-visitors-geographic-dashboard/)

If you check the Quick Stats on the Pages or Referrers menu and then visit the Geographic menu, you will likely see fewer total visitors and views.

This happens because the Geographic dashboard only counts visitors that could have their geolocation resolved. Sometimes, a visitor’s IP address is obfuscated and cannot be mapped to a location, so while their visit is recorded, they do not have a location saved and thus aren’t reported in the Geographic menu.

For most sites, the difference will be less than 1% of visitors, but it can be higher.

---

## What is a Location?

**Source:** [https://independentwp.com/knowledgebase/data/what-is-a-location/](https://independentwp.com/knowledgebase/data/what-is-a-location/)

Independent Analytics records the location of each visitor that arrives on your site.

The location data includes the visitor’s:

- Continent
- Country
- Subdivision
- City

This data is derived from the visitor’s IP address, which is then encrypted to comply with [GPDR regulations](/knowledgebase/common-questions/what-makes-it-gdpr-compliant/).

You can see how this data is presented in the dashboard in this tutorial:

[How to use the Geographic Dashboard](https://independentwp.com/knowledgebase/dashboard/how-to-geodata/)

---

## How Accurate is the Geographic Data?

**Source:** [https://independentwp.com/knowledgebase/data/geo-data-accuracy/](https://independentwp.com/knowledgebase/data/geo-data-accuracy/)

**Geo data derived from an IP address is never perfectly accurate.**This technology is not like the GPS in your phone used when calling an Uber, where permission is granted for precise tracking. In this case, the visitor’s location is approximated based on their IP address. This ensures the calculated location is nearby, but there is a bit of guesswork involved, which can lead to inaccuracies.

## Accuracy estimates

**Continent and country locations are accurate roughly 99% of the time. Subdivision accuracy is about 80%, and city accuracy is around 66%.**

When a city is incorrectly interpreted, it’s because a nearby city was selected as the most likely location instead. For instance,  a visitor in Philadelphia, Pennsylvania, could be recorded as being from Pittsburgh, Pennsylvania. While incorrect, the location is still relatively close. You will not see, however, a location that is wildly inaccurate, like a New York visitor recorded as being in Paris.

In summary, you can have great confidence in the continents and countries reported in the world map and data table, while subdivision and city data should be viewed as more approximate.

---

## What is a Visitor?

**Source:** [https://independentwp.com/knowledgebase/data/what-is-a-visitor/](https://independentwp.com/knowledgebase/data/what-is-a-visitor/)

A **Visitor** is a person who visited your site.

For example, if someone visits a blog post, clicks to the homepage, and then clicks on another post, this would be recorded as 1 visitor and 3 views. If they come back tomorrow and view two more posts, this would be totaled as 1 visitor and 5 views.

When viewing the dashboard, the [Quick Stats](https://independentwp.com/knowledgebase/dashboard/quick-stats/) above the chart will tell you how many unique visitors were found in the given time period. When you hover over a day in the chart, you’ll see the number of visitors that are unique to that day.

![](https://mlqmtwka8c9g.i.optimole.com/cb:CJJc.205f4/w:1024/h:634/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/06/visitor-data.png)

Because the chart shows the number of visitors that are unique to each day, the total will be higher than what you see in the Quick Stat above.

For instance, if the chart shows 30 days and you have 1 view every day from 1 visitor, the Quick Stat will show a total of 1 visitor and each day in the chart will also show 1 visitor. If you added up the chart visitors, you’d have 30. To restate, this is because each day in the chart shows the number of visitors unique to that day, while the Quick Stats show you the number of visitors unique to the selected time period (30 days in this example).

In practice, this is intuitive and is the same way Google Analytics displays Users.

## Visitor counts aren’t perfect

Like any analytics tool, the methodology for recording Visitors isn’t perfect.

If a visitor arrives on your site from their laptop and then later with their smartphone, they will be counted as two separate visitors. Additionally, if they use a different browser, this will also cause them to be counted as a different visitor. These data collection imperfections are similar to the ones found in Google Analytics.

While the count is not perfect, it’s still more than accurate enough to give you an idea of what’s happening on your site so you can [find insights](https://independentwp.com/knowledgebase/insights/) and make valuable business changes.

---

## What Metrics Does it Track?

**Source:** [https://independentwp.com/knowledgebase/data/what-data-does-it-track/](https://independentwp.com/knowledgebase/data/what-data-does-it-track/)

Independent Analytics records the following properties and metrics from visitor activity:

- [Views](https://independentwp.com/knowledgebase/data/what-is-a-view/)
- [Visitors](https://independentwp.com/knowledgebase/data/what-is-a-visitor/)
- [Sessions](https://independentwp.com/knowledgebase/data/what-is-session/)
- [Referrers](https://independentwp.com/knowledgebase/data/what-is-a-referrer/)
- [Session Duration](https://independentwp.com/knowledgebase/data/what-is-session-duration/)
- [View Duration](https://independentwp.com/knowledgebase/data/what-is-view-duration/)
- [Bounce Rate](https://independentwp.com/knowledgebase/data/what-is-bounce-rate/)
- [Views Per Session](https://independentwp.com/knowledgebase/data/what-is-views-per-session/)
- [Geolocation](https://independentwp.com/knowledgebase/data/what-is-a-location/)
- [Campaign URLs](https://independentwp.com/knowledgebase/campaigns/why-use-campaign-urls/)
- [Entrances](https://independentwp.com/knowledgebase/data/what-are-entrances-exits-exit-percentage/)
- [Exits & Exit Rate](https://independentwp.com/knowledgebase/data/what-are-entrances-exits-exit-percentage/)

All other data in the reports come from WordPress.

---

## What are the Page Types?

**Source:** [https://independentwp.com/knowledgebase/data/what-are-all-the-page-types/](https://independentwp.com/knowledgebase/data/what-are-all-the-page-types/)

WordPress includes numerous distinct types of pages.

Here’s a comprehensive list of all the possible page types with explanations for the more complex one:

- Posts
- Pages
- Categories
- Tags
- Blog / Posts page
- This is only present on sites that display their posts on the homepage and haven’t selected a static homepage via the **Settings > Reading** menu
- Author archives
- Every author has an archive page automatically generated by WordPress
- Date archives (Year/Month/Day)
- Archives for the year, month, and day each post was published are automatically generated by WordPress
- Custom Post Types
- Each CPT is listed separately
- Custom Taxonomies
- Each taxonomy is listed separately
- Custom Post Type Archives
- This is an archive listing all published posts of the custom post type and is automatically generated by WordPress
- Search results page
- Every search query gets a dynamically generated page
- 404s
- These are URLs where no page was found. While technically not pages, 404s are still recorded and included in your analytics

---

## What is a Referrer?

**Source:** [https://independentwp.com/knowledgebase/data/what-is-a-referrer/](https://independentwp.com/knowledgebase/data/what-is-a-referrer/)

A **referrer** is the site that a visitor came from.

For example, if someone clicks a link in a Tweet that takes them to your site, then the referrer is Twitter.com. If they click on your site in a Google search results page, then the referrer is Google.com.

## Referrer types

There are six **referrer types** included in the dashboard:

- Search
- Social
- AI
- Ad
- Referral
- Direct

**Search:** search engines like Google, Bing, and DuckDuckGo.

**Social:** popular social media sites like Twitter, Facebook, and Instagram.

**AI:** AI tools like ChatGPT, Gemini, and Perplexity.

**Ad:** advertising platforms, such as Google Ads and Google Display Network

**Referral:** websites that don’t fit into the social, search, or referral categories. This includes mostly blogs and news sites.

**Direct:** used when there is no referrer data. This occurs when a visitor types your site’s address into their browser rather than visiting from another site. It can also occur when a privacy feature in the browser strips out the referrer data.

## Can I see the page they came from?

Unfortunately, no.

Browsers used to include the page the visitor was referred from, but now they only include the domain. This means that if a visitor arrives on your site from an article on Wikipedia, you can see that they came from Wikipedia, but not the exact page they came from.

The exception is if you have the ability to create the referring link yourself. In this case, you can [create a campaign link](https://independentwp.com/knowledgebase/campaigns/campaign-builder/) to track the exact page visitors come from.

---

## What is a View?

**Source:** [https://independentwp.com/knowledgebase/data/what-is-a-view/](https://independentwp.com/knowledgebase/data/what-is-a-view/)

A **view** is recorded every time a page is loaded.

For instance, if someone visits one of your blog posts, that is counted as a view. If they click on your homepage, that’s another view. And if they click back to the blog post, that’s another view.

Independent Analytics does not record views for logged-in users, so your activity on the site will not be recorded as long as you’re logged in. You can [follow these steps](/knowledgebase/tracking/how-to-track-logged-in-visitors/) to enable tracking of logged-in users.

---

