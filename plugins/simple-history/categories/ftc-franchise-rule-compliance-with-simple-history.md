# Ftc Franchise Rule Compliance With Simple History

*Category from Simple History documentation*

---

## FTC Franchise Rule Compliance with Simple History

**Source:** [https://simple-history.com/support/ftc-franchise-rule-compliance-with-simple-history/](https://simple-history.com/support/ftc-franchise-rule-compliance-with-simple-history/)

Do your franchise sales pages show earnings or revenue figures? Then you may need to prove what those figures said, and when they changed. Simple History keeps that record.

## What the rule requires

The [FTC Franchise Rule](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-436) (16 CFR Part 436) covers *financial performance representations*. That’s any statement, express or implied, of a specific level or range of actual or potential sales, income or profits, including historical figures from existing outlets. A figure on your website counts.

With a few exceptions, you can only use one if it’s also in Item 19 of your Franchise Disclosure Document, and you had a reasonable basis and written substantiation for it when you made it ([16 CFR 436.9](https://www.ecfr.gov/current/title-16/section-436.9)). It also needs the warning that a new franchisee’s results may differ. More in the FTC’s [compliance guide](https://www.ftc.gov/business-guidance/resources/franchise-rule-compliance-guide).

## What the free plugin records

When a page is updated, Simple History logs:

- who made the change, with name and email
- when, to the second
- the IP address, anonymized by default (
```
142.250.74.x
```

). Premium can store the full address.
- what changed: the edited text before and after, plus title, slug, status, date and author

For pages edited in the block editor or the classic editor, there’s nothing to switch on.

## What Premium adds

The free plugin keeps 30 days of events (60 on older installs), which you can change [with a filter](https://simple-history.com/support/change-number-of-days-to-keep-log/). [Premium](https://simple-history.com/add-ons/premium/) keeps any number of days, or forever.

The free plugin exports the whole log. Premium can export just the page and dates you’re asked about. Pick HTML or JSON to get the before-and-after text. CSV has one summary line per event.

Premium can also send events off-site. An external MySQL or MariaDB database gets the full event. Syslog, Datadog, Splunk and webhooks get a one-line summary. Log forwarding is in beta.

## Limitations

- Page builders work differently. We tested Elementor: saving from its editor logs who and when, but not the before-and-after text, though the linked WordPress revision has the new version. Divi’s and WPBakery’s front-end editors likely behave the same.
- Retention isn’t retroactive. Set it before anyone asks about an old change.
- The log records changes, not snapshots. To show exactly how a page looked on a certain date, keep WordPress revisions on, or keep backups.
- The log is stored in your site’s database. An administrator can empty it with the Clear log now button (that gets logged too) or with the WP-CLI command 
```
wp simple-history db clear
```

 (that doesn’t), and anyone with database access can change it. For a record that stands on its own, forward events to an external database.
- This isn’t legal advice. The rule’s own record-keeping covers disclosure documents and signed receipts for three years (16 CFR 436.6(h), (i)), and state laws can add more. Ask your franchise counsel what applies.

---

Not sure if this covers your setup? [Get in touch](https://simple-history.com/support/) and tell us which editor you use for the page.

---

