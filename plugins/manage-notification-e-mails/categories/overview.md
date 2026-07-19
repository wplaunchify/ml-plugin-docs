# Overview

*Category from Manage Notification E-mails documentation*

---

## Manage Notification E-mails

**Source:** [https://wordpress.org/plugins/manage-notification-emails/](https://wordpress.org/plugins/manage-notification-emails/)

## Description

	With this plugin you can switch the different WordPress notification e-mails on and off, like options as the new user and password change notifications send by WordPress to the administrator and user. Works perfectly in combination with a lot of other plugins!

Watch this nice tut made by Robert Orzanna:

**The options you can manage are:**

1. New user notification to admin
2. New user notification to user
3. Notify post author
4. Notify moderator
5. Password change notification to admin
6. Password change notification to user
7. E-mail address change notification to user
8. Forgotten password e-mail to user
9. Forgotten password e-mail to administrator
10. Automatic WordPress core update e-mail
11. Automatic WordPress plugin update e-mail
12. Automatic WordPress theme update e-mail
13. Send admin notifications to extra admin e-mail addresses *(1.7.0)*
14. Send an e-mail to administrators after a user requested to update his or her e-mail address *(1.7.0)*
15. Send an e-mail to administrators after a user successfully updated his or her e-mail address *(1.7.0)*
16. Multi-site support! Now you can manage your notification settings in one single environment *(1.8.0)*
17. Export and import settings *(1.8.0)*

The automatic core, plugin, and theme updates have a special built-in feature. When one of these options is disabled, successful e-mails don’t get send out, but failed updates still will send an e-mail to the admin.

This version contains some nice new stuff. If you find any issues, let me know. If you like the new features, please be so kind to give this plugin a good rating! It will help me to keep up the good work for you 🙂

Want regular updates? Feel free to support me with a small donation 🙂

## Screenshots

	![Settings view: Core options.](https://ps.w.org/manage-notification-emails/assets/screenshot-1.png?rev=2538453)Settings view: Core options.

![Settings view: Available modules.](https://ps.w.org/manage-notification-emails/assets/screenshot-2.png?rev=2538453)Settings view: Available modules.

![Settings view: Multi-site network settings.](https://ps.w.org/manage-notification-emails/assets/screenshot-3.png?rev=2538453)Settings view: Multi-site network settings.

## Installation

	1. Upload 
```
manage-notification-emails.zip
```

 via the plugins menu
2. Activate the plugin through the ‘Plugins’ menu in WordPress
3. Use the settings-page to enable or disable sending of notifications

## FAQ

	### Is it active right away?
Yes, after activating you can go to the settings page and disable or enable the notification e-mails that suits you.
### Can I use this plugin for multi-site?
Yes! starting from version 1.8.0 multi-site is supported.
### Disabling user notifications does not work
Some other plugins also use their custom notifications which overwrite the core notifications of WordPress. To be sure, please first try the plugin without other plugins installed or at least temporarily disable them.

## Reviews

	![](https://secure.gravatar.com/avatar/b8a00dbec193eb6c474fa1dfbaf460977ffa713ed1ce1473326a2f0e4d1daf7a?s=60&d=retro&r=g)### Perfect
							[thomasobrien](https://profiles.wordpress.org/thomasobrien/)
								October 24, 2024
						thanks a lot
							![](https://secure.gravatar.com/avatar/1f57cc3f5a095e8b0a748eac0410c1b7af5dd6db0b1079d04bb38373e8f4a98e?s=60&d=retro&r=g)### Really useful plugin
							[TomCobbley](https://profiles.wordpress.org/tomcobbley/)
								October 2, 2024
						This is a really useful plugin for disabling those annoying ‘plugin x has just automatically updated’ emails. Suggestion for author – the plugin isn’t easy to find in WordPress’s plugin search for terms like ’email notifications’. This is because you spell email as e-mail. This might be the technically correct spelling, but it’s not helping people find your plugin. I would consider changing the spelling.
							![](https://secure.gravatar.com/avatar/104f98ec78288e14c888065567c94980e022d09e25ef99d7cbb0be0825f9ea5c?s=60&d=retro&r=g)### 功能很完整
							[richard0508](https://profiles.wordpress.org/richard0508/)
								March 12, 2024
						很不錯的外掛，大力推薦!
							![](https://secure.gravatar.com/avatar/0e4c579db8a7b778e1c775590a1bd7d3164aea647d3a8c992986e969920c94fc?s=60&d=retro&r=g)### Good plugin
							[snoringdragon](https://profiles.wordpress.org/snoringdragon/)
								August 1, 2023
						This plugin has made life easier.

Thanks for its development.
							![](https://secure.gravatar.com/avatar/a42d25acf5b596bb17b79e45fd5a222b8da9c04e977117c024f7d53561fb15bb?s=60&d=retro&r=g)### Prevents password changes
							[lookwhoo](https://profiles.wordpress.org/lookwhoo/)
								June 23, 2023
																1 reply
						This plugin no longer works and seems to have been abandoned. Within the past half year, users were complaining they weren’t receiving the password reset emails. Sure enough, we found it was this plugin preventing password reset emails from going out. Disabled it and all is working as should now.
							![](https://secure.gravatar.com/avatar/58f21f24bac3a93827752d959c7e0540626c39a48890678826419d27362c2878?s=60&d=retro&r=g)### Works without any problem
							[samtr](https://profiles.wordpress.org/samtr/)
								May 23, 2023
						Works without any problem

		[Read all 54 reviews](https://wordpress.org/support/plugin/manage-notification-emails/reviews/)

## Contributors & Developers

	“Manage Notification E-mails” is open source software. The following people have contributed to this plugin.

Contributors
		- ![](https://secure.gravatar.com/avatar/9afb9d144b82a5bcc6cf0378efaacea46e068d163b4ce067dba2af2e282389dd?s=32&d=mm&r=g)				[3D Virge](https://profiles.wordpress.org/virgial/)“Manage Notification E-mails” has been translated into 13 locales. Thank you to [the translators](https://translate.wordpress.org/projects/wp-plugins/manage-notification-emails/contributors) for their contributions.

[Translate “Manage Notification E-mails” into your language.](https://translate.wordpress.org/projects/wp-plugins/manage-notification-emails)

### Interested in development?

[Browse the code](https://plugins.trac.wordpress.org/browser/manage-notification-emails/), check out the [SVN repository](https://plugins.svn.wordpress.org/manage-notification-emails/), or subscribe to the [development log](https://plugins.trac.wordpress.org/log/manage-notification-emails/) by [RSS](https://plugins.trac.wordpress.org/log/manage-notification-emails/?limit=100&mode=stop_on_copy&format=rss).

## Changelog

	
#### 1.8.6

FIXED: Medium vulnerability in settings module. Thanks to Wordfence for reporting this.

UPDATED: Lowered the priority to 99 in the filters fixing some issues where plugins overwrite the disabling of sending the e-mails.

#### 1.8.5

UPDATED: Compatibility fix with WP 6.1+ where new user notifications are managed by filters.

#### 1.8.4

UPDATED: Refactoring.

#### 1.8.3

FIXED: (CSRF) Security fix. Special thanks to Muhammad Daffa (Patchstack Alliance) for reporting this.

#### 1.8.2

FIXED: fixed an issue with automatic plugin update notification.

FIXED: fixed issues with not correct activating options in multisite environment.

UPDATED: language corrections.

#### 1.8.0

ADDED: Multi-site support.

ADDED: Import and export of settings.

UPDATED: A lot of files are refactored and added some more comments along with it.

#### 1.7.1

FIXED: Email automatic plugin update notification to admin sometimes still send out.

#### 1.7.0

UPGRADED: Refactored the plugin and added a more suitable modular system for adding new features.

ADDED: Send admin notifications to extra admin e-mail addresses

ADDED: Send an e-mail to administrators after a user requested to update his or her e-mail address

ADDED: Send an e-mail to administrators after a user successfully updated his or her e-mail address

#### 1.6.1

FIXED: Email automatic plugin update notification to admin sometimes still send out.

#### 1.6.0

ADDED: Automatic WordPress plugin, and theme update e-mail options.

#### 1.5.1

FIXED: php-notice for missing $deprecated variable.

#### 1.5.0

UPGRADED: Upgraded the pluggable functions file. Fixing the missing PassWordHash Class bug.

#### 1.4.2

FIXED: Loading local language.

#### 1.4.1

ADDED: Manage sending e-mail after a successful automatic WordPress core update to administrators. E-mails about failed updates will always be sent to the administrators and will not be disabled.

#### 1.4.0

ADDED: Multi-language support

#### 1.3.0

ADDED: passing through the $notify variable, available sinds 4.6. This is for other plugins to override default sending to admin or user. Only useful if sending within this plugin is activated.

UPDATED: updated with the newer pluggable send functions of WordPress 4.7.

FIXED: Missing blogname in user email

#### 1.2.0

ADDED: Manage sending password forgot e-mail to registered user.

ADDED: Manage sending password forgot e-mail to administrator.

#### 1.1.0

FIXED: Checking password change notification to admin now works.

ADDED: Splitted the manage option for new user notification e-mail into user and admin e-mail.

UPDATED: Clarified some comments and fixed some typo’s.

#### 1.0

- It all starts here.

---

