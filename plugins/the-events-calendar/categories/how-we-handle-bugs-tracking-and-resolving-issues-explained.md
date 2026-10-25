# How We Handle Bugs Tracking And Resolving Issues Explained

*Category from The Events Calendar documentation*

---

## How We Handle Bugs: Tracking and Resolving Issues Explained

**Source:** [https://docs.nexcess.com/software/the-events-calendar/how-we-handle-bugs-tracking-and-resolving-issues-explained/](https://docs.nexcess.com/software/the-events-calendar/how-we-handle-bugs-tracking-and-resolving-issues-explained/)

When you report a problem and we confirm it’s a bug in one of our plugins or themes, we write it up for our developers, link your support ticket to it, and let you know when a release includes the fix. This article explains what counts as a bug, how you can help us confirm one, and what happens after that.

## What Counts as a Bug?

A bug is a problem in one of our products that we can reproduce on a basic WordPress site: one running only the plugins involved, with a default WordPress theme such as Twenty Twenty-Five (or our own theme, if the problem is in the theme). If the problem happens there too, it’s in our product, and we treat it as a bug.

Some problems look like bugs but have a different cause:

- **A conflict with another plugin, theme or custom code.** The problem goes away when the other plugin or code is turned off. We’ll help you find the conflict and suggest a workaround where we can.
- **Site or server configuration.** For example, caching, security rules or server limits that affect how the plugin works.
- **A feature that works differently than you’d like, or doesn’t exist yet.** These are feature requests rather than bugs, and you’re welcome to tell us about them in a support ticket.

If we can’t reproduce a problem, we’ll keep troubleshooting it with you based on your site’s setup.

## How Can I Help Confirm a Bug?

The more of the following you include in your ticket, the faster we can confirm the problem. For a full walkthrough, see [How to Get the Fastest Support](https://docs.nexcess.com/software/the-events-calendar/how-to-get-the-fastest-support/).

1. **The steps that cause it**, in order, and what you expected to happen instead.
2. **The result of a conflict test** on a staging copy of your site, with only our plugins active and a default theme. See [How to Test for Plugin Conflicts](https://docs.nexcess.com/software/general/how-to-test-for-plugin-conflicts/).
3. **Your system information**, copied and pasted into your ticket (see the list below for where to find it).
4. **A debug log.** Turn on the WordPress debug log (
```
WP_DEBUG
```

 and 
```
WP_DEBUG_LOG
```

 in 
```
wp-config.php
```

) or install the free [Debug Log Manager](https://wordpress.org/plugins/debug-log-manager/) plugin, repeat the steps that cause the problem, and send us the log.
5. **Screenshots or a short screen recording**, and the exact text of any error message.

Where to copy your system information:

- **The Events Calendar and Event Tickets:** **Events > Troubleshooting**, then click **Copy to clipboard** under System Information.
- **GiveWP:** **GiveWP > Tools > System Info**, then click **Get System Report** and copy the text.
- **LearnDash LMS:** **LearnDash LMS > Settings > Support**, then copy the text in the **Copy System Info** box.
- **Kadence:** **Tools > Site Health > Info**, then click **Copy site info to clipboard**.

Please paste the text into your ticket. Ticking a “share my system information” checkbox isn’t enough on its own for us to see it in your ticket.

## What Happens After a Bug Is Confirmed?

1. **We write a bug report.** It includes the steps to reproduce the problem, the versions and setup involved, and anything we learned while troubleshooting. Your support ticket is linked to it, along with any other tickets about the same problem.
2. **Our product team prioritizes it.** They assess how severe the problem is compared with other open bug reports and new features, and give it a priority level. Our developers work on the highest-priority issues first.
3. **A developer fixes it, and the fix is tested.** Testing checks that the fix solves the problem without causing new ones.
4. **The fix is released in an update** and listed in that product’s changelog.

If there’s a workaround that helps in the meantime, such as a different setting or another way to set something up, we’ll share it in your ticket.

## When Will the Fix Be Released?

We usually can’t give a date right away. Because bug reports are prioritized against other work, we can’t estimate when a developer will start on a particular report. As soon as we know which release will include the fix, we’ll let you know in your ticket.

## How Will I Know When It’s Fixed?

We keep your ticket linked to the bug report and let you know when an update with the fix is available. You can also check the release notes for each product in our [changelogs](https://docs.nexcess.com/software/changelogs/), where you can choose the brand and then the plugin or theme.

Tip

				

Before updating your live site, test the update on a staging site and make sure you have a recent backup.

If you have more information that could help our developers, or the problem is affecting your site more than before, reply to your ticket. New details can help with prioritizing and fixing the bug.

## Related Articles

- [How to Get the Fastest Support](https://docs.nexcess.com/software/the-events-calendar/how-to-get-the-fastest-support/): what to include in a ticket so we can help you quickly.
- [How to Test for Plugin Conflicts](https://docs.nexcess.com/software/general/how-to-test-for-plugin-conflicts/): find out whether another plugin or your theme is causing a problem.
- [What Kind of Support Do You Provide for Paid Plugins?](https://docs.nexcess.com/software/the-events-calendar/what-support-is-provided-for-license-holders/): what our support covers and what it doesn’t.
- [Changelogs](https://docs.nexcess.com/software/changelogs/): release notes for every product, by brand.

---

