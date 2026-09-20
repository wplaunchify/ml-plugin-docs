# Sec Rule 204 2 Compliance With Simple History

*Category from Simple History documentation*

---

## SEC Rule 204-2 Compliance with Simple History

**Source:** [https://simple-history.com/support/sec-rule-204-2-compliance-with-simple-history/](https://simple-history.com/support/sec-rule-204-2-compliance-with-simple-history/)

If you’re an SEC-registered investment adviser, you need to be able to show what your website said, and when. Simple History logs every update to your pages, which covers part of that.

## What the rule asks for

[Rule 204-2](https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.204-2) under the Investment Advisers Act (17 CFR 275.204-2) applies to advisers who are registered, or required to be registered, with the SEC. Among other records, you need to keep:

- a copy of each advertisement you publish or distribute, directly or indirectly (paragraph (a)(11)(i)(A))
- the records behind any performance figures you show (paragraph (a)(16))
- those records for five years from the end of the fiscal year the advertisement was last distributed, with the first two years in an appropriate office (paragraph (e)(3)(i))

Electronic records also have to meet paragraph (g). They must be indexed so any record can be found, produced promptly as a true and complete copy, backed up by a separate duplicate, protected from loss, alteration or destruction, and only accessible to authorized people.

What counts as an advertisement? Under the [Marketing Rule](https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.206(4)-1), in force since November 2022, it’s any communication to more than one person that offers your advisory services. So a public page describing your services will usually count.

If you’re a broker-dealer, [Rule 17a-4](https://www.ecfr.gov/current/title-17/chapter-II/part-240/section-240.17a-4) applies instead.

## What the free plugin records

Every time a page or post is updated, Simple History logs:

- who made the change (the WordPress user, with login and email)
- when, to the second
- the IP address, anonymized by default
- what changed in the content, with the removed and added text highlighted
- other changed fields, like title, URL slug, status, publish date, author and page template
- a link to the WordPress revision the edit created, if revisions are on

You don’t need to set anything up. The content and field changes are recorded when the page is saved from the normal WordPress edit screen.

Every change is dated, so the log also shows when a version was last live. You need that date to work out when its five years start.

## What Premium adds

[Premium](https://simple-history.com/add-ons/premium/) lets you keep events for any number of days, or forever, which is long enough for the rule.

The free plugin exports the whole log as CSV, JSON or HTML. Premium can export just the events you’ve filtered to, for example one page within a date range.

Log forwarding is in beta. The free plugin can write events to a log file on the server. Premium adds syslog, Datadog, Splunk and webhooks, which get a one-line summary of each event, and an external database, which stores the full event including the content changes.

## Limitations

- **Default retention is 30 or 60 days.** Five years from the end of the fiscal year is often close to six years. The log isn’t retroactive, so set retention before you need it.
- **No copy of the rendered page.** The log stores the text that changed. Theme, menus, widgets, images and dynamic content aren’t in it. We tested Elementor: a save from its editor is logged with who and when, but without the before-and-after text. The front-end editors of Divi and WPBakery likely work the same way. The rule asks for a copy of each advertisement, so keep WordPress revisions turned on and consider a website archiving service.
- **Not tamper-proof.** Events are stored in ordinary WordPress database tables, not write-once storage. If someone uses **Clear log now** in the settings, one event is left saying how many rows were removed. If they use the WP-CLI command 
```
wp simple-history db clear
```

, nothing is left. Anyone with database access can edit rows. For a copy that clearing the log doesn’t touch, forward events to an external database with Premium.
- **Not legal advice.** Whether your records meet Rule 204-2 is a question for your chief compliance officer or counsel.

## FAQ

**Does installing Simple History make us compliant?**
No. It gives you evidence of what changed on your site, who changed it and when.

**What retention should we set?**
Ask your compliance officer. If you’re unsure, pick “Keep forever” in Premium.

**Can we hand the log to an SEC examiner?**
You can give them an export. Search for the page, pick the date range and export with Premium. HTML and JSON exports include the change details. CSV has one summary line per event. Whether that’s enough is for your compliance officer to judge.

---

Not sure if this covers your setup? [Get in touch](https://simple-history.com/support/) and tell us how your site is built.

---

