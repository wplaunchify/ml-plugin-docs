# Gdpr And Privacy

*Category from Simple History documentation*

---

## GDPR and Privacy: How Your Data is Stored in Simple History

**Source:** [https://simple-history.com/support/gdpr-and-privacy/](https://simple-history.com/support/gdpr-and-privacy/)

## Is the Simple History plugin GDPR compliant?

Maybe. It depends.

[No WordPress plugin in itself can provide legal compliance](https://make.wordpress.org/plugins/2018/04/12/legal-compliance-added-to-guidelines/), and the responsibility for making your website compliant with legislation lies with the site administrators.

The [WordPress Compliance Disclaimers FAQ says](https://developer.wordpress.org/plugins/wordpress-org/compliance-disclaimers/):

> Still, at the end of the day, the responsibility remains with the site administrators to ensure their sites meet the qualifications for any compliance.

So it depends on how you use the plugin. The [GDPR law](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) is complicated and we are not lawyers, so we can’t say if it’s compliant for your specific site or use case.

## What is GDPR?

The General Data Protection Regulation (GDPR) is a comprehensive privacy law enacted by the European Union that gives individuals greater control over their personal data. It applies to all organizations that process the personal data of EU residents, regardless of where the organization is located.

## How Simple History Handles Your Data

Simple History is a WordPress plugin that logs user activity on your website. Here’s what you need to know about how we handle data in relation to GDPR:

Some key GDPR-related points about Simple History:

- The plugin does not use [Google Fonts](https://en.wikipedia.org/wiki/Google_Fonts)
- The plugin sets no [cookies](https://en.wikipedia.org/wiki/HTTP_cookie)
- The plugin uses no [local storage](https://en.wikipedia.org/wiki/Web_storage)
- The plugin can store anonymized [IP addresses](https://en.wikipedia.org/wiki/IP_address)

### What is logged, and where it lives

Simple History logs user actions such as logins, post edits and settings changes, along with timestamps, user IDs, usernames, email addresses, IP addresses and browser information. Under the GDPR some of this counts as personal data, meaning information relating to an identified or identifiable person.

All of it is stored directly in your own WordPress database, in two custom tables. It is not sent to us, and we have no access to it — which means you keep complete control over it, and you are the data controller for it.

**For the full detail** — the exact table names, the default retention period, every connection the plugin can make to a third party, and what data we hold about you as a customer — see our [privacy policy](https://simple-history.com/privacy/). We keep those facts in one place so they can’t drift out of date.

### Data Retention

Log entries are deleted automatically after a set number of days. Keeping logs only as long as you actually need them is good practice under the GDPR’s data minimisation principle, so it’s worth reviewing this setting — you can [adjust the retention period](https://simple-history.com/support/change-number-of-days-to-keep-log/) to any number of days.

### IP Address Anonymization

To enhance privacy compliance, Simple History offers IP address anonymization:

1. Go to Settings → Simple History
2. Select “IP Address Anonymization”
3. Choose between:
- No anonymization (stores full IP addresses)
- Partial anonymization (e.g., 192.168.xxx.xxx)
- Full anonymization (no IP addresses stored, *coming soon*)

## Responding to data subject requests

WordPress has built-in tools for the two requests people make most often — a copy of their data (Tools → Export Personal Data) and deletion of it (Tools → Erase Personal Data). As of [version 5.29.0](https://simple-history.com/2026/simple-history-5-29-0-released/), Simple History works with both.

When you process an export request, the activity a person performed on your site is now included automatically — so the record of what they did is part of the export instead of missing from it.

Two related options sit behind the experimental features setting (Settings → Simple History → Experimental) while we refine them:

- Exports can also include activity *about* a person carried out by others (an admin editing their profile, or failed logins targeting their account), with other people’s names and emails redacted.
- Running an erasure can anonymize that person’s details in matching log entries — IP address, user agent, login, email, and role — while keeping each entry as an audit record, so you don’t lose log integrity.

There’s a Privacy & Data tab under Settings → Simple History that summarizes how this works. As always, this helps you *respond* to these requests — it doesn’t by itself make your site compliant.

## GDPR Compliance Considerations

### Data Controller Responsibilities

As the website owner using Simple History, you are considered the “data controller” under GDPR. This means:

- You determine the purposes and means of processing the personal data
- You are responsible for implementing appropriate security measures
- You must respond to data subject requests (access, deletion, etc.)

### Recommendations for GDPR Compliance

1. **Update your Privacy Policy** to mention:
- That you use Simple History to log user activities
- What data is collected and why
- How long data is retained
- How users can request access to or deletion of their data
2. **Configure data retention** to keep logs only as long as necessary
3. **Consider anonymizing IP addresses** to minimize personal data collection
4. **Implement a process** for handling data subject requests:
- Right to access their data
- Right to be forgotten (deletion)
- Right to data portability

## FAQs

**Q: Does Simple History set cookies?**
A: No, Simple History does not set or use cookies for tracking purposes.

**Q: Is Simple History compliant with GDPR?**
A: Simple History provides tools that help you maintain GDPR compliance, but compliance ultimately depends on how you configure and use the plugin. The plugin itself processes data only on your server and provides options for data minimization and retention management.

**Q: How can I delete all data for a specific user?**
A: If you run WordPress’s Erase Personal Data tool (Tools → Erase Personal Data) for that person, Simple History can anonymize their details — IP address, user agent, login, email, and role — in matching log entries, while keeping the entries themselves as audit records. This is currently an experimental feature, so enable it first under Settings → Simple History → Experimental. You can also search the log for entries related to a user and delete them manually.

**Q: Do I need user consent to use Simple History?**
A: Since Simple History is used for legitimate administrative purposes and security monitoring, you may be able to process this data under the “legitimate interest” basis rather than consent. However, legal requirements vary, so consult with a legal professional regarding your specific situation.

## Need More Help?

If you have additional questions about Simple History and GDPR compliance, please [contact us](https://simple-history.com/contact/) or visit our [documentation](https://simple-history.com/documentation/).

Check out these related questions in the support forum:

- [GDPR Jetpack Google Fonts API](https://wordpress.org/support/topic/gdpr-jetpack-google-fonts-api/)
- [GDPR Compliance #250](https://wordpress.org/support/topic/gdpr-compliance-250/)
- [GDPR Compliance #236](https://wordpress.org/support/topic/gdpr-compliance-236/)
- [GDPR Compliance #66](https://wordpress.org/support/topic/gdpr-compliance-66/)
- [Is that plugin GDPR conform?](https://wordpress.org/support/topic/is-that-plugin-gdpr-conform/)

---

*This information is provided as general guidance and does not constitute legal advice. For specific legal questions regarding GDPR compliance, please consult with a qualified legal professional.*

---

