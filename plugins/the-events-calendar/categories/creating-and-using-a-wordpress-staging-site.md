# Creating And Using A Wordpress Staging Site

*Category from The Events Calendar documentation*

---

## Testing Updates in a Staging Environment

**Source:** [https://docs.nexcess.com/software/the-events-calendar/creating-and-using-a-wordpress-staging-site/](https://docs.nexcess.com/software/the-events-calendar/creating-and-using-a-wordpress-staging-site/)

Have you logged in to your site and been tempted to click on all the places where WordPress is telling you updates are available?

Perhaps it was a new version of WordPress available to install. Or a long-awaited update to a particular plugin. Maybe it’s a general theme update. Whatever the case, all of us have clicked those shiny options at some point, initiated the update, and… uh oh.

*Something’s wrong.*

Updating WordPress, plugins, and themes can cause fatal errors, gnarly-looking notices on your site’s front end, service disruptions, or even the dreaded [white screen of death](https://kinsta.com/blog/wordpress-white-screen-of-death/). Any of these are scary and terrible on their own, but it’s even worse knowing that’s it’s happening right now on your *live website* for the world to see.

This is probably the single most common thing our team sees in our support inbox. If you’ve ever encountered a similar scenario of your own, you know how stressful it can be to navigate troubleshooting processes while a compromised site is being displayed to your users.

The good news is that this is all totally preventable and with just a bit of forethought and preparation. The secret lies in a useful tool called a **staging site**, and it’s one that we strongly recommend for any and all WordPress users. In this article, we’ll go over the what’s, why’s, and how’s of staging sites so you’ll be armed with all the information you need to set up and use your own. Let’s get started!

## What’s a staging site?

A staging site, simply put, is an exact duplicate of your live site’s server, settings, and content, used for testing changes before they’re applied to your live site. You might think of staging for WordPress as being similar to a dress rehearsal: when coordinating a stage production, there are many rehearsals completed in private before presenting the finished play to an audience. These rehearsals ensure that all players are able to perform their roles under simulated conditions and that any changes, such as the substitution of a cast member, can be prepared for prior to opening night. If any complications should arise along the way, they can be dealt with using whatever means are appropriate—*without* compromising the quality of your performance in front of an audience.

## Why use a staging site at all?

If you’ve never used a staged version of your WordPress site before, you may be wondering whether it’s necessary to set one up. The truth is that staging sites provide a wealth of benefits for administrating all kinds of WordPress sites, and there are options available for users of all technical skill levels. What are some of the perks you’ll get with a WordPress staging site? Here are a few to consider:

### Zero (non-server-related) downtime

While staging sites are unable to prevent causes of server-related downtime, such as scheduled maintenance periods, the use of a staging site can effectively prevent downtime from any WordPress-related causes. By deploying any changes or updates to your staging site *first*, you can detect any potential problems in a safe environment and hold off on pushing changes to your live site until it’s safe to do so.

### Better, faster technical support

Many WordPress developers (ourselves included) rely on a process known as [conflict testing](https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/) to help root out potential conflicts between themes and/or plugins. This process typically involves disabling all third-party plugins and reverting to a stock WordPress theme, then reactivating each theme and plugin one at a time until the problem reappears.

The information our support team obtains from this process is crucial to resolving issues in a timely manner and knowing the source of a particular conflict can be helpful in preventing future conflicts of the same type. However, disabling themes and/or plugins on a live site can be a deterrent to potential visitors, and we often see users who are unwilling to perform this type of testing. Without the benefit of conflict testing data, our support team is severely limited in its ability to assist, and there are many inquiries that simply cannot be resolved.

A staging site resolves this issue handily because there are no visitors who would be impacted by conflict testing in a staging environment. As a result, any necessary troubleshooting steps can be completed quickly and under ideal conditions. Plus, there’s less impact to your business or organization, since any issues that may require technical support will appear first on your staging site, far from any visitors’ eyes.

### Using your license on your staging site

And don’t worry, you can use your license on both your staging site and live site at the same time. We’ve whitelisted many domains so that your license will be recognized on both sites simultaneously. Read more about using your license on your live and staging sites [here](https://docs.nexcess.com/software/the-events-calendar/using-one-license-for-live-and-dev-sites/).

### It’s a step above backups

Many WordPress site owners choose to [rely on backups](https://theeventscalendar.com/options-to-create-a-wordpress-backup-database/) for added peace of mind when updating WordPress, adding plugins, or changing site settings. The benefits of maintaining off-site backups are numerous, and many popular plugins exist to further simplify and streamline the backup process. However, depending *solely* on backups may expose your site to added risk from routine updates, especially if your site isn’t configured to perform these backup tasks automatically.

If a WordPress or plugin update introduces an unexpected issue, a proper backup may help to restore your site’s functionality, but any content updates published after the last backup may be permanently lost. Furthermore, backups cannot prevent downtime or site malfunctions that may result from such issues, resulting in potential lost business and poor experiences for your visitors. In the most severe of cases, your WordPress site’s dashboard may be rendered completely inaccessible. A complicated backup restoration process from your site’s database may be the only solution in such cases.

Backups certainly serve their purpose in the WordPress world, as they do elsewhere, and it’s worth maintaining regular backups of your site and its contents. For the most frequent site updates you’re likely to perform on a regular basis, however, a staging site will provide you with the same sense of security, and you’ll sidestep many of the potential pitfalls.

## How is a staging site set up?

As with most things in the WordPress world, users have a number of choices when it comes to establishing staging sites, ranging from one-click solutions to highly-customized hands-on setups. We’ve listed a few possibilities below that provide a solid balance between features and ease of use. For technical users, a quick web search should provide plenty of resources for further reading and exploration. That said, we think you’ll find that the below options should cover most needs adequately and with minimal fuss–which means more time for managing your site and events!

### Option 1: Use your web host’s tools

Many WordPress-focused web hosts provide options for setting up staging sites with a single click, with little or no extra configuration required. Simply create your WordPress site, populate your initial content, and click to deploy to a staging environment. Any future updates can then be performed on your staging site and tested before pushing live. Each web host’s offering will perform somewhat differently, so you’ll want to review your host’s documentation before diving in. That said, if your host provides this functionality to its users, this is definitely one of the simplest options for day-to-day use!

A few web hosts that provide one-click staging functionality are listed below.

- [Nexcess](https://www.nexcess.net/help/nexcess-managing-dev-staging-environments/)
- [Flywheel](https://getflywheel.com/wordpress-support/staging-on-flywheel/)
- [Kinsta](https://kinsta.com/knowledgebase/staging-environment/)
- [Pressable](https://pressable.com/features/wordpress-staging-environments/)
- [SiteGrou](https://www.siteground.com/tutorials/staging/)[nd](https://www.siteground.com/tutorials/staging/?gclid=EAIaIQobChMIpZeRr__o_wIVU-_ICh31twAuEAAYASAAEgLbpfD_BwE)
- [WP Engine](https://wpengine.com/resources/what-is-a-staging-site-why-have-one/)

### Option 2: Use a third-party hosted solution

If you prefer the simplicity of a one-click setup but don’t have access to this feature through your current host, you’re still in luck. Third-party hosted solutions such as [BlogVault](https://blogvault.net/features/one-click-wordpress-staging/) and [WP Stagecoach](https://wpstagecoach.com/) provide many of the same features as web host staging sites, and many provide extra perks such as dedicated support services. These platforms typically employ the use of a plugin installed on your WordPress site, which serves as an intermediary for transferring data between both servers.

Since these platforms are not included as part of an existing hosting plan, they typically come with a monthly fee, which may cover one or multiple staging sites. If you’re considering a hosted service for your staging environment, be sure to review your options fully to ensure that you’re covered for the features and functionality that you need.

### Option 3: Use a WordPress staging plugin

If neither of the above-listed options is an ideal fit for your setup, you might consider using a plugin-based method for setting up your staging environment. One such plugin, [WP Staging](https://wordpress.org/plugins/wp-staging/), automates the process of establishing a staging site from your existing WordPress install. Simply install, activate, and follow the provided steps to duplicate your live site to a staging environment. This plugin is free and is available for download on WordPress.org’s plugin repository.

For more information on WP Staging, please refer to [the plugin’s WordPress.org directory listing](https://wordpress.org/plugins/wp-staging/) or check out the developer’s site at [wp-staging.com](https://wp-staging.com/).

The Events Calendar is not affiliated with the developers of this plugin, and we are unable to assist with any inquiries related to its use.

## How is a staging site used?

Once you’ve successfully established your staging site using your method of choice and copied over the contents of your live site, you’re ready to get started.

Now, whenever you’d like to make changes to your live site, whether it’s installing a theme update or adding a new plugin, you’ll want to navigate over to your staging site and **perform those updates on the staging site first.**

Pushing site updates to your staging environment first ensures that any post-update issues will be restricted *solely* to your staging site—and visitors on your live site won’t experience any technical difficulties or downtime. Should you encounter a problem with a particular update, you can delay updating your live site and take the time to troubleshoot thoroughly on staging.

We recommend starting with [our conflict testing steps](https://docs.nexcess.com/software/the-events-calendar/testing-for-conflicts/), then moving on to more advanced troubleshooting as needed. If you should need any extra help as you go, [our support team](https://support.theeventscalendar.com/submit_ticket) is always just a click away.

Once you’ve confirmed that an update is safe to install on staging, you can easily complete the same update on your live site without fear of consequences! Some staging sites may allow you to perform this task automatically, while others may require updates to be installed manually on both staging and live environments. If you should have any questions about your particular staging setup, please refer to your provider’s documentation for more information.

---

We hope that this guide has successfully demonstrated the many benefits of staging sites and helped you in getting started with your very own! As always, if you should have any further questions or concerns, please don’t hesitate to reach out to [our support team](https://support.theeventscalendar.com/submit_ticket) for a chat. Cheers, and happy staging!

---

