# Campaigns

*Category from Independent Analytics Pro documentation*

---

## How to Export Your Campaign Links to CSV

**Source:** [https://independentwp.com/knowledgebase/campaigns/export-campaign-links-2/](https://independentwp.com/knowledgebase/campaigns/export-campaign-links-2/)

If you want to export the campaign links you’ve created, you can do so by clicking the **Export All Campaigns** button in the toolbar.

![Export all campaigns](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:465/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/export-all-campaigns.png)

You’ll receive a CSV containing every link with each parameter organized as its own column.

If you want to export a selection of links, start by applying a new filter. Click the **Add Filter** button and then apply your desired filter.

![Add filter button](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:491/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/add-filter-button.png)

Once the links have been filtered, you’ll see that the export button has updated to reflect the applied filter. Clicking it will generate an export of the same links that are left visible on screen.

![Campaign filter applied](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:426/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/campaign-filter-applied.png)

---

## How to Use the UTM Parameters

**Source:** [https://independentwp.com/knowledgebase/campaigns/how-to-utm-parameters/](https://independentwp.com/knowledgebase/campaigns/how-to-utm-parameters/)

If you’re new to campaign tracking, all the parameters can be overwhelming. Here’s how to use each parameter.

### Landing page path (optional)

Campaign URLs have to point to your site, which is why the Site URL field cannot be edited. Next to it is the **Landing Page Path** field, which is used to create a link pointing to a specific page on your site.

For example, if your site is called mysite.com and you want to link to mysite.com/blog/awesome-article/, you would enter the following into the **Landing Page Path** field:

```
blog/awesome-article/
```

If you want to link to your homepage, you can leave the **Landing Page Path** field empty.

### Source (required)

The source is the name of the site that sent you traffic, such as Facebook or Etsy.

For email marketing campaigns, you can use the name of the automation/series. For example, “newsletter” or “7-day course.”

### Medium (required)

The medium is the type of site the link is on. For instance, you can use “Social” or “Social Media” for a campaign link placed on Facebook.com.

### Campaign (required)

Campaigns are more open to interpretation, but they’re generally used to discern between different marketing campaigns on the same medium and source. For example, if you write two guest posts for the same blog, the source and medium would be the same, but you could use the title of the post as the campaign to differentiate between the two posts.

### Term (optional)

The Term parameter is mainly used for paid advertising campaigns. You can use it to store the keywords you used for the link so you can track performance on a keyword level. Again, it’s mainly used for paid advertising campaigns.

### Content (optional)

The Content parameter is used when multiple links on the same page are present. For instance, imagine you have an email urging readers to purchase a product, and there’s a link in the middle of the email and at the bottom. You can use the Content parameter to differentiate between these two links and find out which one is getting the most clicks.

---

## Why Aren’t My Campaigns Getting Tracked?

**Source:** [https://independentwp.com/knowledgebase/campaigns/campaigns-not-tracked/](https://independentwp.com/knowledgebase/campaigns/campaigns-not-tracked/)

There are a few common reasons why visits to your campaign links might not be tracked.

Please note that campaigns you create with the Campaign Builder don’t show up in the Campaigns report until they’ve received at least one visitor.

## Missing required parameters

The most common reason is that the URL does not include all three required UTM parameters. In order to be tracked, the campaign URL must include these three parameters:

- utm_source
- utm_medium
- utm_campaign

Take this URL, for instance:

```
website.com/?utm_source=Source&utm_campaign=Campaign
```

It would not be tracked since it is missing the 
```
utm_medium
```

 parameter. You can manually check the URL to see if it has all the required parameters.

We recommend using the [Campaign Builder](https://independentwp.com/knowledgebase/campaigns/campaign-builder/) when possible to ensure your URLs are properly formatted.

The 
```
utm_term
```

 and 
```
utm_content
```

 parameters are both optional.

## Your activity is being ignored

If you are manually checking the campaign URL yourself, your activity could be getting ignored by Independent Analytics due to being logged in or using a blocked IP address.

To ensure you can test properly, it would be best to visit using a private browser tab, or if necessary, use a VPN to change your IP address.

## Google Ads isn’t adding the parameters

Google Ads does not automatically add UTM parameters to the ad URLs. You can add them using a [tracking template](https://support.google.com/google-ads/answer/10070427).

## Bad redirect rule

On rare occasions, we have seen sites that have redirects in place that eliminate or replace the parameters in the URL, which prevents Independent Analytics Pro from being able to track them.

Here is a valid campaign URL for reference:

```
website.com/?utm_source=Source&utm_medium=Medium&utm_campaign=Campaign
```

The three required parameters need to be present, but they can be in any order. The first parameter (of any kind) should be preceded by a question mark (?), while the rest are preceded by an ampersand (&).

To make sure your site doesn’t have any redirects affecting the parameters, you can simply visit your site using a valid campaign URL and then check your browser address bar to make sure the parameters are still in place and properly formatted.

---

## Why Am I Seeing Weird Looking Campaigns I Didn’t Create?

**Source:** [https://independentwp.com/knowledgebase/campaigns/weird-campaigns/](https://independentwp.com/knowledgebase/campaigns/weird-campaigns/)

On occasion, you may see campaigns that you didn’t create show up in your Campaigns report.

This is because Independent Analytics Pro will track all campaign URLs that visitors use to reach your site. The [Campaign Builder](https://independentwp.com/knowledgebase/campaigns/campaign-builder/) makes it easy to create campaign URLs, but tracking is not limited to those URLs only.

There is an upside and a downside to this. If you’re reading this article, you’ve likely experienced the downside: you can end up with weird-looking data in your Campaigns report due to bot visitors. For instance, you might see a campaign name with random gibberish in it, like “cybbzefbdwefu.”

There’s no harm in these campaigns being present, but if you’d like to limit their occurrence, the best approach is to work on [blocking spam bots](https://independentwp.com/knowledgebase/tracking/bot-visits/) from your website.

As for the upside, you will also see traffic from real, valuable campaigns that other people are running. For instance, if someone else links to you with a campaign URL from an email newsletter, you will be able to see that. Instead of being unsure why you had a traffic spike, you will know exactly where the visitors came from.

---

## How to Create QR Codes for Campaign URLs

**Source:** [https://independentwp.com/knowledgebase/campaigns/qr-codes/](https://independentwp.com/knowledgebase/campaigns/qr-codes/)

Independent Analytics Pro allows you to quickly generate QR codes for any of your campaign URLs.

To generate a QR code, start by visiting the **Analytics > Campaign Builder** menu. Then, locate the campaign link you want to create a QR code for, and click the QR code button.

![QR code button](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/qr-code-button.png)

This will open the robust QR code customization window.

![QR code generator](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:735/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/10/qr-code-generator.png)

From here, you can customize every aspect of the QR code, from its colors to the border styles. You can even upload your own logo to display within the pattern.

When you’re happy with your customizations, click the **Download PNG** or **Download SVG** button to get a copy of the QR code.

You can then use it in any of your digital and print media, and when scanned, it will take you directly to the campaign URL. This allows you to track precisely how many people scanned the QR code in your Campaigns report.

Your QR code customizations are saved silently in the background, so future QR codes will automatically apply the same settings.

---

## How to Shorten Your Campaign URLs

**Source:** [https://independentwp.com/knowledgebase/campaigns/shorten-campaign-urls/](https://independentwp.com/knowledgebase/campaigns/shorten-campaign-urls/)

When generating a campaign URL with the required UTM parameters, the URL can become very long. This can look ugly when you have to paste the full URL somewhere, like a social media post.

In order to make the link more appealing, you can use a link shortener. We would like to include a link shortener in IA Pro in a future update, but for now, we recommend [Short.io](https://short.io/), which has a very generous free plan.

## An example

Here’s an example of what a full-length campaign URL might look like:

```
https://independentwp.com/?utm_source=Example.me&utm_medium=Example&utm_campaign=Example
```

Using a free link shortener [like this one](https://www.shorturl.at/), you could turn it into a shortened URL like this:

```
https://shorturl.at/xVRcw
```

When a visitor clicks on this link, they will be redirected to the full-length URL, and your campaign data will still get recorded by Independent Analytics Pro.

While this does effectively shorten the URL, there are a couple of ways to make it look nicer. First, it helps if you can customize the slug to make it readable, and it’s even better if you can brand the domain too.

With Short.io, you can use a custom domain for your shortened links. For example, we use 
```
iawp.io
```

 as a short, branded URL for our own redirects. This allows us to create shortened links that look like this:

```
https://iawp.io/cool-campaign-here
```

Using a branded domain looks more professional, and you have full control over the URL slug this way.

It is extremely difficult to find a 
```
.com
```

 domain under five characters long, so we recommend checking other TLDs like 
```
.io
```

 and 
```
.org
```

.

---

## When to Use Click Tracking vs. Campaign Tracking

**Source:** [https://independentwp.com/knowledgebase/campaigns/when-click-tracking-vs-campaign-tracking/](https://independentwp.com/knowledgebase/campaigns/when-click-tracking-vs-campaign-tracking/)

With all the tracking tools available in Independent Analytics Pro, it can be tricky to decide which technique will best fit the job.

Generally speaking, if you need to track clicks on a link on your website, you’ll want to use the [click-tracking](https://independentwp.com/knowledgebase/click-tracking/click-tracking/) feature. Alternatively, if you need to track clicks on a link on someone else’s website, you’ll want to use a [campaign URL](https://independentwp.com/knowledgebase/campaigns/campaigns-dashboard/).

![Click tracking vs campaign tracking](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:805/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2025/02/click-tracking-vs-campaign-tracking.png)

If you have a landing page on your site with a “Signup” button, you can track clicks on it by adding a new link pattern in the [Click Tracking Menu](https://independentwp.com/knowledgebase/click-tracking/click-tracking/). This will work whether the “Signup” button takes visitors to another page on your website or an external website.

Now, let’s say you want to track clicks in an ad placed on another website. You can use a campaign URL to track how many visitors reach your website via this link.  As long as the link points to your website and includes the required [UTM parameters](https://independentwp.com/knowledgebase/campaigns/what-is-utm-parameter/), the visitors will be recorded in the [Campaigns report](https://independentwp.com/knowledgebase/campaigns/campaigns-dashboard/).

---

## How Sales Attribution Works with Campaigns

**Source:** [https://independentwp.com/knowledgebase/campaigns/campaign-sales-attribution/](https://independentwp.com/knowledgebase/campaigns/campaign-sales-attribution/)

**When someone is referred to your site via a campaign URL, all other actions they take are attributed to that campaign.**

Let’s imagine you share a campaign URL in a Facebook post. Someone clicks on the campaign link, taking them to the landing page on your site. They leave your site without viewing another page.

Here’s what that would look like in the Campaigns menu.

![Campaign with one view](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:92/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/11/campaign-with-one-view.png)

Now, let’s imagine that instead of leaving your site, they browse a few products, add one to their cart, and complete a purchase before leaving.

That same campaign would look like this instead:

![Campaign with sale](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:93/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/11/campaign-with-sale.png)

As you can see, this campaign is now responsible for 8 views and $99 in sales.

In other words, the campaign stats aren’t tied to the landing page. The landing page is just one element of the campaign. When someone visits other pages on your site and completes a purchase, that is also attributed to the campaign.

This way, you are able to see the total result of a campaign and not just views for the landing page. In this example, it’s a Facebook post that generated $99 in sales.

---

## Why Clicks from PPC Ads are Lower in the Campaigns menu

**Source:** [https://independentwp.com/knowledgebase/campaigns/clicks-difference-ppc-ads-campaigns/](https://independentwp.com/knowledgebase/campaigns/clicks-difference-ppc-ads-campaigns/)

When running PPC campaigns in ad networks like Facebook and Google, you’ll get data on how many people clicked on the ad.

You might expect Independent Analytics to report the same number of Visitors in the Campaigns menu for that ad. However, it’s normal to see fewer Visitors in the Campaigns menu than Clicks reported by an ad network because these metrics work differently.

Here are a few reasons why these numbers differ.

## Multiple clicks from the same person

One reason you’ll see more Clicks than Visitors is that some people will click on your ad multiple times.

For example, if someone clicks your Google ad twice, Google will show you two Clicks, but you’ll only see one Visitor in Independent Analytics.

## The Facebook Clicks metric is misleading

In Facebook, the “Clicks” metric is misleading because it measures more than the number of clicks to your website. The Clicks metric also includes other engagements, such as someone clicking the Like button. For this reason, you will always see significantly more Clicks on your FB ads than Visitors in Independent Analytics Pro.

## Some visitors exit quickly

It is also possible that someone clicks on your ad and then closes the browser tab immediately. In this case, the click will be counted in the ad network, but they won’t show up in your analytics because the site never got a chance to load.

## Benchmarks

For Google Ads, it’s normal for the Visitors metric in Independent Analytics to equal ~90% of the Clicks reported by Google. For instance, it would be normal to see 100 clicks in Google Ads and 90 visitors for that campaign in Independent Analytics.

Since the Clicks metric in Facebook includes numerous other interactions, it is normal for it to be as much as twice the number of Visitors reported in Independent Analytics. For example, if 100 people Like your ad and another 100 click on the link, you’ll see 200 clicks in FB and 100 visitors for that campaign in Independent Analytics Pro.

---

## Why Should I Use Campaign URLs?

**Source:** [https://independentwp.com/knowledgebase/campaigns/why-use-campaign-urls/](https://independentwp.com/knowledgebase/campaigns/why-use-campaign-urls/)

Campaign URLs give you the ability to track exactly which links sent visitors to your site.

For example, let’s say you want to know how many visitors click on the link in your Twitter bio. Using the Campaign URL Builder, you could create a URL like this:

```
mywebsite.com/?utm_source=Twitter&utm_medium=Social+Media&utm_campaign=Bio
```

This URL tells us that the source is Twitter, the medium is social media, and this link, in particular, is from your Twitter bio.

In the Campaigns dashboard, you’ll be able to see how many visitors click on this link:

![Campaigns dashboard](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:765/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/campaigns-table.png)

As you can see, Campaign URLs are extremely useful for tracking precisely where your traffic comes from, so you can evaluate the effectiveness of your marketing efforts.

You can use Campaign URLs any time you have control over an external link. This applies to:

- Paid ads
- Guest posts
- Email marketing
- Social posts
- And more

Now that you understand the value of using campaign URLs, here’s how you can get started creating campaign links:

[How to Use the Campaign URL Builder](https://independentwp.com/knowledgebase/campaigns/campaign-builder/)

---

## How to Use the Campaign URL Builder

**Source:** [https://independentwp.com/knowledgebase/campaigns/campaign-builder/](https://independentwp.com/knowledgebase/campaigns/campaign-builder/)

Watch the [video tutorial here](https://independentwp.com/knowledgebase/campaigns/campaigns-dashboard/) to learn how to use the Campaigns report and the Campaign Builder.

Using the UTM parameters, you can create new links that will be tracked in the Campaigns menu.

While you can type out campaign URLs manually, it’s easy to make a mistake, and if you misspell a parameter name, it won’t be tracked.

For this reason, it’s easier and more reliable to use the Campaign Builder.

You can access the Campaign Builder via its link under the **Analytics** menu item in your WP admin sidebar.

![Campaign URL builder menu item](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:768/h:708/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/campaign-builder-link.png)

You don’t have to create your campaign URLs with the Campaign Builder for them to be tracked. Campaign URLs that are created dynamically by email and ad platforms will be tracked too.

## How to use the Campaign Builder

Here’s what you’ll see when you open the Campaign Builder for the first time:

![Campaign Builder with no campaigns](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:438/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/10/campaign-builder-no-campaigns.png)

To create your first campaign, you can click the **Create New Campaign** button in the middle of the page or the purple button in the toolbar. This will open the form to create a new campaign.

![Campaign URL Builder](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:671/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/02/campaign-url-builder.png)

You can find a detailed [description of each UTM parameter here](https://independentwp.com/knowledgebase/campaigns/how-to-utm-parameters/).

The campaign link is automatically set to point to your homepage. If you’d like to link to another page on your site, you can enter that path into the **Landing Page Path** field.

Next, you are required to enter the **Source**, **Medium**, and **Campaign** fields to create a valid campaign link. Optionally, you can fill out the **Term** and **Content** fields, but they are not required.

Lastly, there is a **Private Note** field you can enter. This note is only shown in the Campaign Builder menu and exists to help you keep your campaigns organized.

Once you’re ready, click the **Create New Campaign** button, and you’ll see your new campaign show up immediately in the list of created campaigns below.

![New campaign URL created](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:284/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/campaign-url-example.png)

Over time, you’ll create many campaigns, and you can browse them easily here.

![List of previously created campaign URLs](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:468/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/latest-campaigns.png)

## Filtering your campaigns

Once you have a lot of campaigns, you may want to find certain ones to replicate or reuse. To do that, you can click on the **Add Filter** button in the toolbar.

![Add filter button](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:491/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/add-filter-button.png)

Right away, you’ll see that it finds some suggestions for you, based on your existing entries.

![Filter suggestions](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:614/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/filter-suggestions.png)

In the screenshot above, you can see that there are 12 campaigns that have all used “Email” as their medium, so that’s why it’s being suggested first.

You can click on any of the suggestions to immediately apply the filter, and only matching campaigns will remain in the list.

![Campaign filter applied](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:426/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/campaign-filter-applied.png)Only campaigns with their utm_medium set to “Email” remain.

Alternatively, you can use the search bar to search for a term yourself. If you do this, you also have the option to filter by any field. For instance, instead of filtering by campaigns with a medium set to “Email,” you can search for campaigns that use the term “Email” in any of their fields.

![Filtering by any field](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:539/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/filtering-by-any-field.png)

## How to generate QR codes

Every campaign link has the option to create a unique QR code.

You can create a QR code by clicking on the QR code button under the campaign URL.

![QR code button](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/qr-code-button.png)

This will open a modal window where you can customize the size and style of the QR code.

![QR code generator](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:735/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/10/qr-code-generator.png)

When you’re happy with your changes, you can download the QR code as either a PNG or an SVG image.

The changes that you make are silently saved, so the next time you open the QR code builder, you’ll see the same colors and settings applied.

## How to export your links

You may want to export all your campaign links for use in another tool. This can be done easily by clicking the **Export All Campaigns** button in the toolbar.

![Export all campaigns](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:465/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/export-all-campaigns.png)

This will immediately generate and download a nicely formatted CSV containing each link in a row with each UTM parameter in its own column.

If you apply a filter first, the export button will update to only export links matching the applied filter conditions.

## How to edit a link

If you make a mistake, it’s easy to reopen the builder and edit a campaign URL.

To do so, click on the More Options button in the campaign, and then select the **Edit** option.

![Edit campaign link](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/10/edit-campaign-link.png)

This will reopen the builder so you can make your changes and save them.

## How to duplicate a link

You may want to create a variation of an existing campaign. For instance, you’re happy with all the fields except for the Content field.

The best way to do this is to click on the More Options button in the campaign and then choose the **Duplicate** option.

![Duplicate campaign link](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/10/duplicate-campaign-link.png)

This will immediately create a second copy of a campaign, which you can then edit.

## How to delete a link

If you’d like to delete a campaign link, perhaps one you created for testing, you can do so by clicking the More Options button and then selecting the **Delete** option.

![Delete campaign link](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/10/delete-campaign-link.png)

The text will update to say, “Confirm Delete.” Click it once more, and the campaign link will be permanently deleted.

Please note that this does not affect any recorded data in the analytics; it only removes the link from the Campaign Builder menu.

## Tip: keep your fields consistent

If you create a campaign link for Facebook and you enter “Social” into the Medium field, and then you create another campaign link for Facebook but enter “Social Media” into the Medium field, this will make it harder to analyze your links in the Campaigns report because they will get grouped separately when grouping by Medium.

That’s why the builder will auto-suggest your most used terms in each field. This makes it easier to stay consistent and avoid spelling mistakes and other variations that will make your data harder to analyze in the future.

![Campaign builder auto suggest](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:619/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/campaign-builder-auto-suggest.png)

---

## What is a UTM Parameter?

**Source:** [https://independentwp.com/knowledgebase/campaigns/what-is-utm-parameter/](https://independentwp.com/knowledgebase/campaigns/what-is-utm-parameter/)

[URL parameters](https://www.botify.com/insight/what-are-url-parameters) are used to add information to a URL without changing the page it points to.

UTM parameters are a specific set of URL parameters used for tracking the origin of website visitors. These parameters have been adopted by many marketing tools over decades and are essentially standardized.

The UTM parameters are as follows:

- utm_source
- utm_medium
- utm_campaign
- utm_term
- utm_content

An example URL using UTM parameters might look like this:

```
https://website.com/?utm_source=Facebook&utm_medium=Advertising&utm_campaign=Buy+Our+Product
```

## What does “UTM” mean?

When creating campaign links, you’ll notice that the fields have names like “Source,” but the link parameters look like “utm_source.”

You may be wondering, what’s with the “utm” part?

Back in 2005, Google acquired an analytics company called Urchin and rebranded their platform as Google Analytics. Urchin had a campaign tracking feature called “Urchin Tracking Module,” which is where UTM is derived from.

Google Analytics retained this naming convention because it was already widely used. Fast forward 17 years, and we’re doing the same thing.

We know that many of our users already make use of UTM parameters, and we want their transition to Independent Analytics Pro to be as smooth as possible, so we’ve stuck with the same parameter names.

Furthermore, these parameters have been adopted by many other marketing tools and ad platforms, making their use essential for seamless tracking & integration.

---

## How to Use the Campaigns Report

**Source:** [https://independentwp.com/knowledgebase/campaigns/campaigns-dashboard/](https://independentwp.com/knowledgebase/campaigns/campaigns-dashboard/)

We will be updating this video soon to show the new changes made to the Campaign Builder in [version 2.16.0](https://independentwp.com/changelog/version-2-16-0/).

In order to use the Campaigns dashboard, you’ll want to start by creating campaign links with the [Campaign Builder](https://independentwp.com/knowledgebase/campaigns/campaign-builder/).

The links you create will show up in the Campaigns dashboard once they’ve received at least one click. In the Campaigns dashboard, you’ll see every view and visitor that came from a click on a campaign URL.

![Campaigns dashboard](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:765/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/campaigns-table.png)

With this dashboard, you can see exactly how many views and visitors you’ve received from each campaign URL.

The **Terms** and **Content** columns are hidden by default but can be shown by [using the Edit Columns option](https://independentwp.com/knowledgebase/dashboard/how-to-customize-the-columns/).

Like other dashboards in Independent Analytics, the table rows can be filtered by any of the columns.

![Filtering campaigns](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:421/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/filter-campaigns.png)

You can follow the [filters tutorial](https://independentwp.com/knowledgebase/dashboard/how-to-filter-your-data/) to learn how this works.

And like the other dashboards, you can [change the date range](https://independentwp.com/knowledgebase/dashboard/how-to-change-the-date/) and [sort the table](https://independentwp.com/knowledgebase/dashboard/how-to-sort-your-data/) by any of the columns.

With the Campaigns report, you’ve got one centralized location where you can review your campaign performance any time.

## Grouping options

By default, the table will show you every unique campaign. This is very useful, but it can become problematic if you have tons of unique Term and Content fields. This can cause a single campaign to occupy dozens of rows, making it hard to review its performance.

For this reason, you will find a dropdown option above the table that lets you switch the row grouping from Unique to Landing Page, Source, Medium, or Campaign.

![Campaign grouping option](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:515/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/campaign-grouping-option.png)

For example, if you group the table rows by Source, it will look like this:

![Campaigns grouped by source](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:657/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/campaigns-grouped-by-source.png)

This lets you see exactly how many campaign visitors you’ve gotten from individual sources, like Facebook or your Mailchimp emails.

Likewise, you can group the rows by the Campaign field.

![Campaigns grouped by campaign](https://mlqmtwka8c9g.i.optimole.com/cb:uyRF.20614/w:1024/h:610/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/campaigns-grouped-by-campaign.png)

This reveals the performance of each campaign, regardless of the landing page, source, or medium. This makes it much easier to evaluate and compare your marketing campaigns to find out which ones are working best.

---

