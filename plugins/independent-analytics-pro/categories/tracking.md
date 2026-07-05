# Tracking

*Category from Independent Analytics Pro documentation*

---

## How to Require Consent with the Complianz Plugin

**Source:** [https://independentwp.com/knowledgebase/tracking/require-consent-complianz-plugin/](https://independentwp.com/knowledgebase/tracking/require-consent-complianz-plugin/)

It is our understanding that Independent Analytics can track visitors without requiring consent, as it does not store personal data, use cookies, or communicate with external servers.

However, we want to offer flexible options for our users, as some organizations have more stringent guidelines, and regional privacy laws can vary worldwide.

If you would prefer to require your visitors to give consent before the Independent Analytics plugin records their activity, you can do so using the [Complianz](https://wordpress.org/plugins/complianz-gdpr/) plugin. Independent Analytics has an integration designed for Complianze that makes it very easy to use.

After setting up your consent banner with Complianz, all you have to do is visit the **Integrations** menu, click on the **Plugins** menu in the left sidebar, and then enable the Independent Analytics integration there.

![Complianze integration](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:513/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/03/complianze-integration.png)

Once you save your changes, the Independent Analytics plugin will not run its tracking script until your visitors have explicitly agreed to your policy in the consent pop-up.

---

## How to Ignore Your Own Activity

**Source:** [https://independentwp.com/knowledgebase/tracking/ignore-your-own-activity/](https://independentwp.com/knowledgebase/tracking/ignore-your-own-activity/)

There are four ways to ignore your own activity on the site:

1. Ignore logged-in visitors
2. Ignore by user role
3. Ignore by IP address
4. Ignore using a cookie

By default, Independent Analytics [ignores logged-in visitors](https://independentwp.com/knowledgebase/tracking/how-to-track-logged-in-visitors/) and anyone [with the administrator user role](https://independentwp.com/knowledgebase/tracking/block-user-roles/).

If you also want to ensure that your visits are ignored when you are logged out, you can [ignore your own IP address](https://independentwp.com/knowledgebase/tracking/block-ip-addresses/).

If your ISP rotates your IP address every day, then that might not be the best solution. In this case, there is a setting to [ignore yourself via a cookie](https://independentwp.com/knowledgebase/tracking/block-user-roles/#ignore-with-cookie). This option can be set for the entire administrator user role.

---

## How to Track Facebook Ads Performance

**Source:** [https://independentwp.com/knowledgebase/tracking/track-facebook-ads/](https://independentwp.com/knowledgebase/tracking/track-facebook-ads/)

All organic traffic from Facebook will show up as the **Facebook** referrer with a **Social** referrer type. Traffic from visitors clicking on paid ads will be listed as **Facebook Ads** with an **Ad** referrer type.

![Facebook Ads referrer](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:646/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2025/05/facebook-ads-referrer.png)

This lets you easily compare how much traffic you get from your regular posts versus your paid ads. With Independent Analytics Pro, you can also compare [form submissions](https://independentwp.com/features/form-tracking/) and [eCommerce sales](https://independentwp.com/features/ecommerce-analytics) from free vs. paid Facebook traffic.

Independent Analytics differentiates between these visitors by checking for the 
```
?fbclid
```

 URL parameter that Facebook includes in ads.

## How to see traffic from individual ads

If you’d like to see how much traffic you get from individual ads, this can be done with campaign URLs.

Independent Analytics Pro includes a dedicated campaign builder for creating these URLs and a [Campaigns report](https://independentwp.com/features/campaigns/) where you can review stats for each ad.

![WooCommerce sales data in the Campaigns report](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:461/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/01/campaigns-woocommerce-data.png)

---

## How to Track Email Visitors

**Source:** [https://independentwp.com/knowledgebase/tracking/track-email-visitors/](https://independentwp.com/knowledgebase/tracking/track-email-visitors/)

When a visitor reaches your site from another website, the browser normally includes the domain of the referring website. This is how Independent Analytics (and every other analytics app) is able to report on where your traffic came from.

Traffic from emails is harder to track because most inboxes, like Outlook and Apple Mail, will hide the referrer info from the browser. This is done primarily for security purposes, and it means that Independent Analytics is not able to report accurately on how many visitors reached your site via email. These visitors are included in the **Direct** referrer instead.

However, there is a way to win back most of this data with the [Campaigns](https://independentwp.com/features/campaigns/) feature in Independent Analytics Pro.

When sending an email to your list, you can include [campaign parameters](https://independentwp.com/knowledgebase/campaigns/campaign-builder/) in each URL linking to your website. When a visitor clicks on one of these links, IA Pro will be able to record their visit in the Campaigns report. Using the UTM parameters, you can then see exactly how many visitors you’ve gotten from each individual email you’ve sent.

![Email campaign traffic](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/12/email-campaigns.png)

These visitors will still be reported as coming from the **Direct** referrer in the Referrers report, but this way, you’ll be able to get accurate visitor counts for your email broadcasts in the [Campaigns](https://independentwp.com/features/campaigns/) report.

---

## How to Track Google Ads Performance

**Source:** [https://independentwp.com/knowledgebase/tracking/track-google-ads-performance/](https://independentwp.com/knowledgebase/tracking/track-google-ads-performance/)

If a visitor clicks on your ad in a Google results page, the referrer will be recorded as **Google Ads**. If they click on an ad displayed on another site through Google’s ad network, the visit will be recorded as **Google Display Network**.

![Google ad traffic](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:537/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/06/google-ad-traffic.png)

This makes it easy to separate your paid Google traffic from your organic Google traffic.

Traffic from Google ads is distinguished by the **gclid** URL parameter that Google includes in all ad links.

## How to track individual ads

If you’d like to see the performance of individual ads, you can do that with the [Campaign tracking](https://independentwp.com/features/campaigns/) feature in Independent Analytics Pro.

The [Campaign Builder](https://independentwp.com/knowledgebase/campaigns/campaign-builder/) allows you to create links with UTM parameters and use them in your ads. When someone clicks on one of these links, you’ll see the visit appear in the Campaigns report.

![WooCommerce sales data in the Campaigns report](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:461/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/01/campaigns-woocommerce-data.png)

The benefit is that you can see exactly how many visitors you get from each link. Even better, if you are [using WooCommerce](https://independentwp.com/features/ecommerce-analytics) or if you’re [tracking form submissions](https://independentwp.com/features/form-tracking/), you can see how many conversions you get from each ad.

Google Ads does not automatically add UTM parameters to the ad URLs. You can add them using a [tracking template](https://support.google.com/google-ads/answer/10070427).

---

## How the Tracking Script Works

**Source:** [https://independentwp.com/knowledgebase/tracking/how-does-tracking-script-work/](https://independentwp.com/knowledgebase/tracking/how-does-tracking-script-work/)

Independent Analytics outputs a small tracking script on each page of your site. When a visitor arrives on your site, the tracking script runs, collecting data about the visitor and the page they’re viewing. Once the page is finished loading, the script sends this data to your own site via the WordPress REST API, and the data is then saved in your database.

This offers superior privacy to third-party apps that transmit your data to their own servers. With Independent Analytics, your data is both created and saved entirely on your site.

---

## How to Ignore Traffic by User Role

**Source:** [https://independentwp.com/knowledgebase/tracking/block-user-roles/](https://independentwp.com/knowledgebase/tracking/block-user-roles/)

If you run a membership or eCommerce website, you might want to see traffic from logged-in Subscribers but not Admins or Editors.

This is simple to configure with the user role blocking feature in the settings menu.

**Important**: you must [enable tracking for logged-in visitors](/knowledgebase/tracking/how-to-track-logged-in-visitors/) first.

## How to block a user role

Start by visiting the **Settings** menu and locating the **Ignore by User Role** section.

![Block by User Role form](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:529/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/block-by-user-role.png)

You will see the Administrator role blocked by default. If you’d like to track visits from administrators, click the **Remove** button and then click **Save User Roles**.

To ignore activity from additional user roles, use the dropdown to select a user role and then click the **Add** button.

![Blocking a new user role](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:592/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/blocked-user-role.png)

Lastly, click the **Save User Roles** button to finalize your changes.

You can ignore as many user roles as you’d like, and this feature works with every user role on your site, including those added by other plugins.

Once a user role is blocked, their activity on the site will not be recorded as long as they’re logged in.

## Ignore using a cookie

If you want to ensure these members are ignored even when logged out, you can check the **Ignore via cookie** box.

If enabled, anyone who logs into your site with one of the ignored user roles will have a cookie added to their browser. Independent Analytics checks for the presence of this cookie, which allows it to ignore them when they aren’t logged in.

**Please note that this cookie has zero implications for visitor privacy.** It is an opt-in feature made for you and other managers of the site to use, and the cookie itself contains no data.

The cookie is called **iawp_ignore_visitor** if you’d like to check it with your browser dev tools.

If you want an alternative solution to ignore activity from yourself when you are logged out, you can [ignore your IP address](/knowledgebase/tracking/block-ip-addresses/).

---

## How to Secure the REST-API and Still Use Independent Analytics

**Source:** [https://independentwp.com/knowledgebase/tracking/secure-rest-api/](https://independentwp.com/knowledgebase/tracking/secure-rest-api/)

When someone visits a page on your site, Independent Analytics makes a single REST-API request that records the visit. Without the ability to use the REST-API, it cannot record any data.

**If your site has disabled the REST API, you have to re-enable it now, or Independent Analytics will not be able to record stats.**

Once the REST API has been re-enabled on your site, Independent Analytics will be able to record visits.

## Can I still secure the REST API endpoints?

If you are concerned with securing the REST API while still using Independent Analytics, there are multiple options.

First, you can install a plugin like [Disable REST API](https://wordpress.org/plugins/disable-json-api/). This plugin allows you to disable the REST API while selectively enabling some endpoints.

Once you activate the Disable REST API plugin, you’ll find a new menu at **Settings >** **Disable REST API**. In this menu, you can click on the **/iawp** route to enable it, and then save your changes.

![Enable rest route](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:672/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/enable-rest-route.png)“iawp” stands for “Independent Analytics WordPress”

This will ensure that the **/iawp** route can be triggered by your visitors while locking down all other routes.

Alternatively, if you’d like to avoid installing another plugin, you can use the code snippet below:

```
function block_rest_api_except_ia( $access ) {
    if (!is_user_logged_in() && $_SERVER['REQUEST_URI'] != '/wp-json/iawp/search') {
        return new WP_Error( 'rest_disabled', __('The WordPress REST API has been disabled.'), array( 'status' => rest_authorization_required_code()));
    }
    return $access;
}
add_filter( 'rest_authentication_errors', 'block_rest_api_except_ia' );
```

This function will disable the REST API for anyone who isn’t logged in unless the request is for the Independent Analytics endpoint. This allows your analytics to be recorded without exposing any other endpoints.

You can add this code to a child theme, a custom plugin, or use a code snippet plugin like [Code Snippets](https://wordpress.org/plugins/code-snippets/).

---

## How to Ignore Traffic by IP Address

**Source:** [https://independentwp.com/knowledgebase/tracking/block-ip-addresses/](https://independentwp.com/knowledgebase/tracking/block-ip-addresses/)

Independent Analytics can [ignore traffic from logged-in users](/knowledgebase/tracking/how-to-track-logged-in-visitors/), but that might not be enough.

You might want to block your own visits even when you’re not logged in. For this reason, Independent Analytics includes the ability to block IP addresses.

Devices with IP addresses that have been blocked can still access the site and use it normally. The only difference is that their activity won’t be recorded in your analytics.

## How to ignore an IP

To block an IP address from being recorded, start by visiting your settings page and locate the **Ignore IP Addresses** section.

![Block IP address form](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:591/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/10/block-ips-form.png)

Right away, you’ll notice the form is showing you that your current IP address is not blocked. It’s always a good idea to block your own IP so that your activity on the site doesn’t show up in your analytics.

To add your IP, simply click the **Block this IP** button next to the IP address, and it will be added to the list of ignored IPs.

![Unsaved IP address](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:666/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/10/blocked-ips.png)

Lastly, click the **Save IP Addresses** button to finalize your changes. The notice will now confirm that your IP address is blocked.

![IP blocking form](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:609/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/08/block-ip.png)

It’s worth noting that the IP address comes from your router and not your device, so blocking your IP while at home will prevent traffic from all of your devices from being recorded in your analytics. Likewise, it is a good idea to also block your IP at the office or other places you frequently work from.

If you’d like to track a blocked IP again in the future, click the **Remove** button to stop blocking it.

IP address blocking works for both IPv4 and IPv6.

## Using Wildcards

Independent Analytics also supports blocking dynamic IP addresses using wildcards.

![Blocking IP addresses with wildcards](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:619/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/11/blocking-ip-addresses-wildcards.png)

A wildcard (*) will allow any number to take its place. For example, the IP address 
```
76.98.172.122
```

 will be blocked by 
```
76.98.172.*
```

.

Multiple wildcards are also allowed. For instance, that same client IP address would be blocked by 
```
76.98.*.*
```

.

Please use wildcards carefully, as they have the power to unintentionally block more visitors than desired.

## Using CIDR notation

Independent Analytics also supports CIDR notation for blocking ranges of IP addresses, which may be preferable to using the wildcard syntax.

![Example of an ignored IP address using CIDR notation](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:615/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/10/ip-address-cidr-notation.png)

---

## How to Block Spam and Bot Traffic on Your Website

**Source:** [https://independentwp.com/knowledgebase/tracking/bot-visits/](https://independentwp.com/knowledgebase/tracking/bot-visits/)

Independent Analytics recognizes and ignores activity from over 500 self-identifying bots. This includes search engine bots, SEO crawlers, and uptime monitoring services.

However, Independent Analytics makes no attempt to recognize malicious bots that disguise themselves as human visitors. We view the detection of these bots as outside the scope of our product.

Instead, we recommend using [Cloudflare](http://cloudflare.com), which has excellent security rules for blocking bots included in its free tier. If you are unable to use the Cloudflare CDN, then we recommend using the [Wordfence](https://wordpress.org/plugins/wordfence/) plugin, which can also block bots with its firewall.

## Bad bots should be blocked entirely

It’s important to understand that when you get a visit from a self-identifying bot, like a search engine bot, Independent Analytics does not block it from accessing your site. It only ignores the bot so that its activity doesn’t show up in your stats.

If you are getting traffic from a malicious bot, you wouldn’t want to ignore it in your analytics but still allow it to access your website. This malicious bot could be submitting spam, testing for vulnerabilities, or scraping your site, using up valuable bandwidth. It would be best to deny this bot access to your site entirely, and that can be done with a firewall added to your site using either Cloudflare or Wordfence (or both).

---

## How to Track Logged-in Visitors

**Source:** [https://independentwp.com/knowledgebase/tracking/how-to-track-logged-in-visitors/](https://independentwp.com/knowledgebase/tracking/how-to-track-logged-in-visitors/)

By default, Independent Analytics won’t output the tracking script if the visitor is logged in.

This is the right setting for most sites, but if you are using WooCommerce or a membership plugin, you’ll want to enable tracking of logged-in visitors. This will ensure that your customers/subscribers are tracked even when logged in.

To enable tracking for logged-in visitors, check the **Track logged-in users**box in the **Settings** menu and click the **Save Settings** button.

![](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:877/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/06/track-logged-in-users.png)

Once you’ve enabled this setting, all activity from logged-in visitors will be counted.

## Next steps

Independent Analytics ignores admins, even if they’re logged in. However, if you have editors and other users you want to ignore, you can [customize which user roles get ignored](https://independentwp.com/knowledgebase/tracking/block-user-roles/). For instance, this will allow you to track activity from subscribers, but ignore admins and editors.

---

