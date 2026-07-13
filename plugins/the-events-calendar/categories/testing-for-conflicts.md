# Testing For Conflicts

*Category from The Events Calendar documentation*

---

## Testing Conflicts With Themes and Other Plugins

**Source:** [https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/](https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/)

We work hard to make our plugins broadly compatible. However, like all WordPress developers we cannot test with every plugin, theme, and server environment out there. Sometimes “conflicts” occur. This happens when code from one plugin or theme conflicts with another plugin or theme. Most problems that arise with WordPress plugins (like The Events Calendar) are actually conflicts.

This tutorial will help you to determine if a conflict is happening, and find out if it is your theme, or which of your plugin(s) are causing it. Carefully following these steps is often essential to finding a solution, because each step can help you quickly narrow down the possible causes of the problem.

Here are the steps:

- [Test if there is a conflict](#test-for-conflict)
- [Find the source of a conflict](#find-source-of-conflict)
- [Look for a solution](#look-for-solution)

The process we describe here can result in some amount of disruption to your site. To avoid this, we recommend you either make use of a [staging site](https://docs.nexcess.com/software/the-events-calendar/creating-and-using-a-wordpress-staging-site/#set-up) and test things there or, if that is not possible, consider using a plugin like [Plugin Detective](https://wordpress.org/plugins/plugin-detective/) and/or [Health Check](https://wordpress.org/plugins/health-check/), each of which provide a [troubleshooting mode](https://make.wordpress.org/support/handbook/appendix/troubleshooting-using-the-health-check/#troubleshooting) that aims to ensure your site will continue to operate as normal for regular visitors.

Please note, however, if you **change any settings** (e.g. default calendar view) while running a *Health Check* those will be **reflected on your live site** as well.

### Test if there is a conflict

**Step 1: Switch to the Twenty Twenty theme.**Go to your site’s [WP Admin area](http://codex.wordpress.org/Administration_Screens). In the left-column menu, click *Appearance > Themes*. You will see the themes available on your site. Move your cursor over the “Twenty Twenty” theme, and click “Activate”.

**💡** **Note:** The Events Calendar is not fully compatible yet with Full Site Editing, which is a part of the Twenty TwentyTwo theme. Thus, we recommend running the conflict test with Twenty Twenty.

**Step 2: Disable all plugins (including The Events Calendar extensions) except The Events Calendar and Event Tickets plugins.** In the left-column menu of WP Admin, click *Plugins > Installed Plugins*. You will now see all the plugins you have installed. Click the checkbox next to every one except The Events Calendar, and any Events Calendar add-ons like Events Calendar Pro. From the Bulk Actions drop-down menu, select “Deactivate” and then click “Apply”.

**Step 3: Clear your browser cache and retest.** Once you have followed the [steps for clearing your browser cache](http://www.refreshyourcache.com/), go into your site and try to recreate the problem you originally noticed. If it is now fixed, that means there was a conflict. The next step is to find the source of that conflict.

![Demo site banner ad](https://docs.nexcess.com/wp-content/uploads/2026/06/banner-ad-tec-demo-site.png)

### Find the source of a conflict

While these steps can be a bit tedious, they are usually necessary for finding the root cause of a conflict. Understanding the cause makes finding a solution possible.

**Step 1: Switch back to your original theme, retest.** In WP Admin go back to *Appearance > Themes*. Find your original theme, and click Activate. Try to recreate the problem again. If you can recreate the problem again, you have a theme conflict. If not, continue to step 2.

**Step 2: Re-enable your plugins one at a time, retest between each.** Return to the *WP Admin > Plugins > Installed Plugins* page. Find one of the plugins that you have disabled and click “Activate”. Now try to recreate the problem again. If everything works, try this step again but Activate a different plugin. If the problem has reappeared, you have a plugin conflict. Make a note of which plugin you activated that causes the problem to reappear.

**Step 2B: Use the Binary Search Method to Identify the Conflict** **(Faster)**

If you have many plugins installed, reactivating them one by one can be time-consuming. A faster, more efficient way to find the conflicting plugin is by using the **binary search method**. This involves activating plugins in groups, to quickly pinpoint the source of the conflict.

1. **Reactivate Half of the Plugins:**
Reactivate half of the plugins, then, check if the issue persists.
2. **Narrow Down the Problem:**
- If the issue returns, the conflicting plugin is in the half you just reactivated.
- If the issue doesn’t return, the conflict is in the other half.
3. **Repeat the Process:**
Continue splitting the remaining plugins in half, reactivating one group at a time, and testing after each round. This method quickly reduces the number of potential conflicts.
4. **Find the Culprit:**
Eventually, you’ll identify the exact plugin causing the problem. Make a note of which plugin you activated that causes the problem to reappear.

### Look for a solution

Once you’ve identified what is causing the conflict, you can look for a solution. If you want help and have purchased premium support for your plugin, please post to [our help desk](https://theeventscalendar.com/support/). To help us assist you as quickly as possible, please include as much information as you can. For instance:

- Statethat you have found a conflict, and give the name of the conflicting plugin/theme along with its version number.
- Describe in detail the problem that happens when you are running that plugin/theme with a given Tribe plugin.
- If possible, privately post a copy of your System Information from the *WP Admin > Events > Troubleshooting: System Information* box.

**Note:** If the conflict involves a third-party plugin that isn’t part of our products, we’re happy to help point you in the right direction. However, since it’s [outside our scope](https://docs.nexcess.com/software/the-events-calendar/what-support-is-provided-for-license-holders/), we recommend reaching out to the plugin’s developers directly for more in-depth support.

The following is a list of things that frequently cause conflicts. This is especially helpful for those who have not purchased a plugin that includes premium support or who simply wish to research the problem on their own.

- **Known issues:** Some problems have been documented by others as well. To find out if others are experiencing the same issue, try using our search box or even Google. Sometimes others have already found a fix that you can use, or we have helped someone with the same problem at [our help desk](https://theeventscalendar.com/support/).
- **Theme Override:** Do you have any [theme overrides](https://theeventscalendar.com/knowledgebase/k/themers-guide/)? Try disabling them by renaming your
```
[themename]/tribe/events/
```

 folder to 
```
tribe-events-bak
```

.
- **JavaScript Error:** [Open up your browser’s console](https://docs.nexcess.com/software/the-events-calendar/how-to-see-a-javascript-console-error-on-your-site/) and see if there are any relevant errors. Identifying a specific error can help you research further.
- **Performance issue**: If you’re noticing any [slowdown on your calendar pages](https://docs.nexcess.com/software/the-events-calendar/calendar-performance/), it could be related to the volume of events in your database, particularly past events or [recurring events with no defined end date](https://docs.nexcess.com/software/the-events-calendar/recurring-events/). These can accumulate over time and may begin to impact performance.
- **Calendar pages not found or 404**: This is a fairly common issue and often happens after updating WordPress core or installing a new version of one of our plugins. The usual fix is to [flush your site’s permalink settings](https://docs.nexcess.com/software/the-events-calendar/fix-404-errors/), which refreshes how URLs are handled.
- **Unauthorized access to API path** **or 403**: If your calendar navigation isn’t updating data, or if Promoter can’t sync your events, the issue might be tied to blocked API endpoints, specifically at 
```
yourdomain.com/wp-json/tribe/
```

. This can happen if a [caching](https://docs.nexcess.com/software/the-events-calendar/calendar-caching/) or a [membership plugin](https://docs.nexcess.com/software/the-events-calendar/the-events-calendar-membership-plugins/) restricts public access to those paths. Double-check any tools that might be limiting access, and try temporarily disabling them to test.
- **Out-of-date Plugins/Theme/WordPress:** Are all of your plugins, your theme, and WordPress itself up-to-date? You especially want to run the latest version of The Events Calendar plugins, as we often release compatibility fixes. While new is not always better, the latest versions of everything usually result in the best compatibility.

It is our sincere hope that this tutorial has helped you. Thank you for reading!

If you’re looking for a way to test for conflicts without affecting the live site, and you don’t have a staging site handy, please read our [Conflict Testing With the Health Check Plugin](https://docs.nexcess.com/software/the-events-calendar/conflict-testing-with-the-health-check-plugin/) for a guide on how to test for conflicts without affecting the live site.

---

