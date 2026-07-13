# Promoter Tracking Links

*Category from The Events Calendar documentation*

---

## Understanding Link Tracking in Promoter Emails

**Source:** [https://docs.nexcess.com/software/the-events-calendar/promoter-tracking-links/](https://docs.nexcess.com/software/the-events-calendar/promoter-tracking-links/)

Once you connect your website to Promoter and set up your [Mail Deliverability](https://theeventscalendar.com/knowledgebase/mail-delivery-settings-and-domain-verification-for-promoter/), you’ll be ready to send messages to your attendees using Promoter.

During this setup process, you need to add some new entries to your DNS like new CNAME and TXT records. Those records have different functions and one of their functions is to track the clicks your message receives. By doing this, the Promoter can tell you how many people have opened your email, how many have clicked on the link you shared inside the message, etc.

## Changing Links

If you try to inspect the link once you receive a message from Promoter, you’ll notice that the link is different from what you used when you created the message using Promoter Dashboard. **This is expected, don’t worry!**

Under the hook, the Promoter creates brand new links for your message and adds some parameters to ensure that each message’s link will be unique.

This is what allows the Promoter to track the clicks you receive. Every time a user clicks on one of those links, they will be redirected to the exact address that you used when you created the message. Promoter uses this redirection to make a count of how many clicks your messages are receiving.

## Are There Any Risks Involved?

Short answer: **No**.

This is a normal behavior from many mailing systems, even if you use Gmail or any other system that lets you know once the user has received/read the message or provides any metrics this is what they’re using under the hook.

## How to Disable It?

Promoter Dashboard doesn’t offer a setting focused on that. So far, the CNAME entry in your DNS is the one responsible for tracking.

If you don’t want to track your messages, remove this entry from your DNS.
But, keep in mind that the Promoter will be unable to tell you how many messages have been delivered, opened or which links have more clicks.

## Links from Promoter Emails Display “Your Connection is Not Secure”

If links in your Promoter emails are showing a “Your connection is not secure” message, this issue is often related to the SSL certificate for the domain added in the [Mail Delivery Settings](https://theeventscalendar.com/knowledgebase/mail-delivery-settings-and-domain-verification-for-promoter/) page. In some cases, the SSL certificate might not have been generated correctly, which results in this error when users click on the email links.

To fix this, please follow these steps:

1. Reach out to our [Help Desk](https://theeventscalendar.com/support/#contact) for assistance.
2. Provide them with details of the issue, including the domain you’ve configured in the Mail Delivery Settings.
3. The support team will ensure the missing SSL certificate is properly generated and applied.

Once the SSL certificate is correctly installed, the issue should be resolved, and the links in your Promoter emails will no longer display the “Your connection is not secure” message.

---

