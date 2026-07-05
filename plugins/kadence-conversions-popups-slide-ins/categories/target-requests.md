# Target Requests

*Category from Kadence Conversions - Popups, slide-ins documentation*

---

## Target Requests

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-conversions/target-requests/](https://www.kadencewp.com/help-center/docs/kadence-conversions/target-requests/)

When a request is made to your website, there can often be additional parameters sent by the request. Kadence Conversions can detect these additional parameters, and you as the site owner can show a conversion item to a user based on the request that they have made.

These are optional settings, but they give you an additional way to personalize your conversions so that they can better be received by site visitors and increase the conversion rate for the offers you create.

## Show If Query String is in URL

A query string is a group of variables that is often sent along with the request to your website. They look like anything after your webpage URL and a question mark, for example:

*www.example.com/webpage-address?source_name=friendsite.com&campaign_name=october+sale*

In the example above, everything after the question mark (?) is part of the query string. The variable “source_name” is set to “friendsite.com” and the campaign_name is set to “october+sale”.

These can be tracking codes, most notably UTM codes that tell us where your site visitor is coming from and the campaign from which they are visiting. You can easily add the UTM tracking variables to Kadence Conversions in the Target Requests section of your conversion item settings.

In our example, we want to show our conversion item to anyone coming in on our October sale campaign, so we will set our conversion target request setting as shown below.

![Kadence Conversions - Target Requests - single URL parameter](https://www.liquidweb.com/wp-content/uploads/2021/12/campaignname.png)Our site visitors will see the conversion item when they’ve arrived from any site and the URL contains *campaign_name=october+sale*.

If we wanted to restrict showing the conversion item to someone only coming from friendsite.com, then we would enter *source_name=friendsite.com*.

If we wanted to only show the conversion item to someone coming from friendsite.com AND for the October sale campaign, we would enter both items on separate lines as shown below.

![Kadence Conversions - Target Requests - multiple URL parameters](https://www.liquidweb.com/wp-content/uploads/2021/12/campaign-and-source.png)
## Show based on Referrer Domain

Many sites will not show a referring domain, but if you are certain that a referring site will, you can limit the display of your conversion item if a referrer is picked up by environment variables in PHP.

![Kadence Conversions - Show Based on Referer Domain](https://res.cloudinary.com/lwcom/images/w_560,h_298,c_scale/f_auto,q_auto/v1779387480/prod/Screenshot-2026-05-21-at-1.17.37-PM/Screenshot-2026-05-21-at-1.17.37-PM.png?_i=AA)
## Show if Cookie is Present

If you know the name of a cookie that is being set, you can limit display of your conversion item only if a cookie is detected. Be aware that the cookie name must match exactly and must be set prior to loading the page.

![Kadence Conversions - Show if cookie is present](https://res.cloudinary.com/lwcom/images/w_560,h_200,c_scale/f_auto,q_auto/v1779387563/prod/Screenshot-2026-05-21-at-1.18.46-PM/Screenshot-2026-05-21-at-1.18.46-PM.png?_i=AA)
## Only show after a specific amount of page views

If you turn this toggle on, you will then be able to set the number of page views you would like a visitor to view prior to seeing the conversion item.

![Kadence Conversions - Show after X page views](https://res.cloudinary.com/lwcom/images/w_560,h_244,c_scale/f_auto,q_auto/v1779387636/prod/Screenshot-2026-05-21-at-1.20.18-PM/Screenshot-2026-05-21-at-1.20.18-PM.png?_i=AA)Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

