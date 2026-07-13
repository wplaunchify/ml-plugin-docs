# Target Requests

*Category from Kadence Conversions - Popups, slide-ins documentation*

---

## Target Requests

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-conversions/target-requests/](https://www.kadencewp.com/help-center/docs/kadence-conversions/target-requests/)

When a request is made to your website, there can often be additional parameters sent by the request. Kadence Conversions can detect these additional parameters, and you as the site owner can show a conversion item to a user based on the request that they have made.

These are optional settings, but they give you an additional way to personalize your conversions so that they can better be received by site visitors and increase the conversion rate for the offers you create.

## Show if Query Strings in URL

A query string is a group of variables that is often sent along with the request to your website. They look like anything after your webpage URL and a question mark, for example:

www.example.com/webpage-address?source_name=friendsite.com&campaign_name=october+sale

In the example above, everything after the question mark (?) is part of the query string. The variable “source_name” is set to “friendsite.com” and the campaign_name is set to october+sale.

These can be tracking codes, most notably UTM codes that tell us where your site visitor is coming from and the campaign from which they are visiting. You can easily add the UTM tracking variables to Kadence Conversions in the Target Requests section of your conversion item settings.

In our example, we want to show our conversion item to anyone coming in on our October sale campaign, so we will set our conversion target request setting as shown below.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/campaignname.png)

Our site visitors will see the conversion item whether they came from friendsite.com or anywhere else.

If we wanted to restrict showing the conversion item to someone only coming from friendsite.com, then we would enter source_name=friendsite.com.

If we wanted to only show the conversion item to someone coming from friendsite.com AND for the October sale campaign, we would enter both items on separate lines as shown below.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/campaign-and-source.png)

## Show based on Referrer Domain

Many sites will not show a referring domain, but if you are certain that a referring site will, you can limit the display of your conversion item if a referrer is picked up by environment variables in PHP.

## Show if Cookie is Present

If you know the name of a cookie that is being set, you can limit display of your conversion item only if a cookie is detected. Be aware that the cookie name must match exactly.

## Only show after a specific amount of page views

If you turn this toggle on, you will then be able to set the number of page views you would like a visitor to view prior to seeing the conversion item.

---

