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

### What Data is Stored

Simple History logs and stores the following types of information:

- User actions (logins, post edits, setting changes, etc.)
- Timestamps of actions
- User IDs and usernames
- User emails
- IP addresses (can be anonymized – see below)
- Browser and device information

It’s important to note that the plugin logs information that can be considered “personal data” under GDPR, meaning information relating to an identified or identifiable natural person. This includes usernames and email addresses in addition to other logged actions.

### Where the Data is Stored

All logged information is stored directly in your WordPress database, specifically in these custom tables:

- ```
{$wpdb->prefix}simple_history
```

 – Stores the main log entries
- ```
{$wpdb->prefix}simple_history_contexts
```

 – Stores additional context information

This means:

- The data never leaves your server
- No data is sent to external services
- You maintain complete control over the stored information

### Data Retention

By default, Simple History keeps log entries for 60 days, after which they are automatically deleted. You can [adjust this retention period](https://simple-history.com/support/change-number-of-days-to-keep-log/) to set it to any number of days.

### IP Address Anonymization

To enhance privacy compliance, Simple History offers IP address anonymization:

1. Go to Settings → Simple History
2. Select “IP Address Anonymization”
3. Choose between:
- No anonymization (stores full IP addresses)
- Partial anonymization (e.g., 192.168.xxx.xxx)
- Full anonymization (no IP addresses stored, *coming soon*)

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
A: You can search for all entries related to a specific user in the Simple History log interface and delete them manually. Alternatively, when you delete a user through WordPress, their username will remain in the logs but will no longer be linked to an active user account.

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

