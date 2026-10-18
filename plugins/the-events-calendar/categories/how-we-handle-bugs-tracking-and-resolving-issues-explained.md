# How We Handle Bugs Tracking And Resolving Issues Explained

*Category from The Events Calendar documentation*

---

## How We Handle Bugs: Tracking and Resolving Issues Explained

**Source:** [https://docs.nexcess.com/software/the-events-calendar/how-we-handle-bugs-tracking-and-resolving-issues-explained/](https://docs.nexcess.com/software/the-events-calendar/how-we-handle-bugs-tracking-and-resolving-issues-explained/)

When you report a problem and we confirm it’s a bug in one of our plugins, we write it up for our developers, link your support ticket to it, and let you know when a release includes the fix. This article explains what counts as a bug, how you can help us confirm one, and what happens after that.

## What Counts as a Bug?

A bug is a problem in one of our plugins that we can reproduce on a basic WordPress site: one running only the plugins involved (for example, The Events Calendar, Events Calendar Pro, Event Tickets and Event Tickets Plus) with a default WordPress theme such as Twenty Twenty-Five. If the problem happens there too, it’s in our plugin, and we treat it as a bug.

Some problems look like bugs but have a different cause:

- **A conflict with another plugin, theme or custom code.** The problem goes away when the other plugin or code is turned off. We’ll help you find the conflict and suggest a workaround where we can.
- **Site or server configuration.** For example, caching, security rules or server limits that affect how the plugin works.
- **A feature that works differently than you’d like, or doesn’t exist yet.** These are feature requests rather than bugs. You can suggest a new idea or upvote an existing one on our [Ideas board](https://the-events-calendar.featureos.app/).

If we can’t reproduce a problem, we’ll keep troubleshooting it with you based on your site’s setup.

## How Can I Help Confirm a Bug?

The more of the following you include in your ticket, the faster we can confirm the problem. For a full walkthrough, see [How to Get the Fastest Support](https://docs.nexcess.com/software/the-events-calendar/how-to-get-the-fastest-support/).

1. **The steps that cause it**, in order, and what you expected to happen instead.
2. **The result of a conflict test** on a staging copy of your site, with only our plugins active and a default theme. See [How to Test for Plugin Conflicts](https://docs.nexcess.com/software/general/how-to-test-for-plugin-conflicts/).
3. **Your System Information.** Go to **Events > Troubleshooting**, click **Copy to clipboard** under System Information, and paste it into your ticket. Ticking the “automatically share my system information” checkbox on that screen isn’t enough on its own for us to see it in your ticket.
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

## What Happens After a Bug Is Confirmed?

1. **We write a bug report.** It includes the steps to reproduce the problem, the versions and setup involved, and anything we learned while troubleshooting. Your support ticket is linked to it, along with any other tickets about the same problem.
2. **Our product team prioritizes it.** They assess how severe the problem is compared with other open bug reports and new features, and give it a priority level. Our developers work on the highest-priority issues first.
3. **A developer fixes it, and the fix is tested.** Testing checks that the fix solves the problem without causing new ones.
4. **The fix is released in a plugin update** and listed in that plugin’s changelog.

If there’s a workaround that helps in the meantime, such as a different setting or another way to set something up, we’ll share it in your ticket.

## When Will the Fix Be Released?

We usually can’t give a date right away. Because bug reports are prioritized against other work, we can’t estimate when a developer will start on a particular report. As soon as we know which release will include the fix, we’ll let you know in your ticket.

## How Will I Know When It’s Fixed?

We keep your ticket linked to the bug report and let you know when an update with the fix is available. You can also check each plugin’s release notes in our [changelogs](https://docs.nexcess.com/software/changelogs/events/).

[CALLOUT: tip | Test updates on staging first | Before updating your live site, test the update on a staging site and make sure you have a recent backup.]

If you have more information that could help our developers, or the problem is affecting your site more than before, reply to your ticket. New details can help with prioritizing and fixing the bug.

## Related Articles

- [How to Get the Fastest Support](https://docs.nexcess.com/software/the-events-calendar/how-to-get-the-fastest-support/): what to include in a ticket so we can help you quickly.
- [How to Test for Plugin Conflicts](https://docs.nexcess.com/software/general/how-to-test-for-plugin-conflicts/): find out whether another plugin or your theme is causing a problem.
- [What Kind of Support Do You Provide for Paid Plugins?](https://docs.nexcess.com/software/the-events-calendar/what-support-is-provided-for-license-holders/): what our support covers and what it doesn’t.
- [Changelogs](https://docs.nexcess.com/software/changelogs/events/): release notes for each plugin update.

---

