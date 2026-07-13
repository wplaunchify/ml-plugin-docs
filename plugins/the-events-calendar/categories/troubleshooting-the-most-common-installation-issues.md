# Troubleshooting The Most Common Installation Issues

*Category from The Events Calendar documentation*

---

## Common Installation Issues

**Source:** [https://docs.nexcess.com/software/the-events-calendar/troubleshooting-the-most-common-installation-issues/](https://docs.nexcess.com/software/the-events-calendar/troubleshooting-the-most-common-installation-issues/)

Are you having trouble installing one of our plugins? Don’t worry, we can help! We’re going to take a look at some common problems that pop up from time to time when installing The Events Calendar and walk through some possible solutions for them. If you need additional help, you can always post to [our help desk](https://support.theeventscalendar.com/submit_ticket).
- [Fatal errors](#fatal-errors)
- [Events option missing](#events-options-missing)
- [License key tab missing](#license-tab-missing)
- [No calendar link](#no-calendar-link)
- [Calendar layout doesn’t look right](#layout-issue)

---

### I get a fatal error when activating the plugin

This issue is likely due to pairing The Events Calendar with an older (and thus incompatible) version of WordPress. If you log into WordPress, is there an update for it available? Are you able to update it without breaking anything else? If you are able to, go ahead and update WordPress (and [back up your site](https://docs.nexcess.com/software/the-events-calendar/creating-site-backups/), of course!) and see if that helps.

If you need to stick with an older version of WordPress, then perhaps installing an older version of The Events Calendar will work. We typically advise using the most recent versions of our plugins, but know there are circumstances where that might not be possible. Do note that we cannot provide any support to folks using an outdated version of WordPress and/or our plugins.

You can download older versions of TEC on [WordPress.org](https://wordpress.org/plugins/the-events-calendar/developers/). If you need an older version of a premium plugin, you can get those from [your account’s downloads page](https://theeventscalendar.com/my-account/downloads/). Don’t see the one you need? Send an email to support (at) theeventscalendar.com and we’ll help you.

Are you getting a different error message? Here’s a handy article with [more common error messages](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-wordpress-errors/) and how to correct them.

### I activated PRO and now events are gone

A common confusion is that Events Calendar PRO is a replacement plugin for The Events Calendar. Not so! The Events Calendar is our core plugin, and it’s the foundation for all of our add-ons. That means you need The Events Calendar installed and active in order to use any of our premium plugins.

If you installed and activated Events Calendar PRO (or any of our other premium add-ons) and do not see Events as an option in your WordPress menu any longer, make sure that the [most current version](https://theeventscalendar.com/my-account/downloads/) of The Events Calendar is installed and active too. Then that option should pop back up.

Please note that even if the Events option does temporarily disappear from your WordPress menu, your events and settings are not lost. Once you’ve got The Events Calendar activated, they’ll be right where you left them.

### I can’t find where to enter my license keys

Say you activate the plugin, head to the Events > Settings screen and cannot locate where to enter your license key. You know there should be a Licenses tab on that screen but it just isn’t there.
![kb-common-installation-issues-settings-tab](https://docs.nexcess.com/wp-content/uploads/2026/06/kb-common-installation-issues-settings-tab-665x98-1.jpg)

If you do not see the Licenses tab in your Event Settings, then it’s likely that you are running two different versions of The Events Calendar and The Events Calendar PRO (or one of the other add-ons). Try updating both plugins to the latest versions (or reverting both to the same older version) and see if the tab displays.

If you’re still bumping into issues here, please try running through the steps in our [Testing for Conflicts Guide](https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/) to see if there’s a conflict with your theme or another installed plugin at play.

### There is no link to my calendar on the site

You installed the calendar, published some events and now need a way to add the calendar to your site’s navigation. The Events Calendar will not add a link to your site’s navigation for you. It does, however, create a URL for you which can then be added to the site navigation. For example:

**[your-site].com/events**

You can locate your exact calendar URL by logging into WordPress and selecting “View Calendar” from the Events dropdown in the top admin bar.

Copy your calendar’s URL, then head to Appearance > Menus and add the calendar to your navigation as you would any other page. Need help? We’ve got [a handy walk through for you](https://theeventscalendar.com/knowledgebase/k/adding-a-calendar-link-to-your-site-menu/).

### My calendar layout doesn’t look right

Maybe the fonts are too big. Perhaps the site header is obscured by the calendar header. Whatever the reason, the page is there but just doesn’t look good.

The first thing to note is that this is likely due to styling conflicts with your active theme. While we have tried to build our plugins to be compatible with as many themes and other plugins as we can, it’s impossible to work with all of them. We regularly test our plugins against default WordPress themes as well as many of the most popular commercial themes, but that doesn’t mean the calendar will look or function perfectly in all of them.

That said, we can tackle this from two angles:
- **Try using a different events template.** Head on over to Events > Settings > Display. Are you using the Default Events Template in your display settings? If not, try selecting that and saving to see if there’s a difference. Or, if you’re already using the Default Events Template, what happens if you change to one of the other theme templates?
- **Customizing the styles.** There are some cases where the theme’s stylesheet is too opinionated and there is no other option but to re-style the calendar. In this scenario, check out our [Themer’s Guide](https://docs.nexcess.com/software/the-events-calendar/customize-calendar/) for more information on how to [customize the default calendar styles](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/) (or our [earlier views styles](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/)) with you own. You may also find [this tutorial on using DevTools](https://docs.nexcess.com/software/the-events-calendar/using-google-chrome-developer-tools/) helpful for identifying which styles need to be updated.

---

There are a variety of reasons why an issue might pop up during the installation and activation process for The Events Calendar. Hopefully, this post helps clear up some of the most common reasons. If you find yourself bumping into something else more specific, please hit us up at [our Help Desk](http://support.theeventscalendar.com) with steps to recreate the issue and we’d be happy to check it out!

---

