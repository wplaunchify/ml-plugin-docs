# Overview

*Category from Disable Comments documentation*

---

## Disable Comments – Remove Comments & Stop Spam [Multi-Site Support]

**Source:** [https://wordpress.org/plugins/disable-comments/](https://wordpress.org/plugins/disable-comments/)

## Description

	
#### Disable Comments – Remove Comments & Stop Spam [Multi-Site Support]

Enable/Disable comments on any WordPress content (Pages, Posts, or Media) to stop spammers. WP-CLI, XML-RPC & REST-API support to stop spam comments.

[More About Plugin](https://wpdeveloper.com/plugins/disable-comments/) ◼️ [Documentation](https://wpdeveloper.com/docs-category/disable-comments/) ◼️ [Support Forum](https://wordpress.org/support/plugin/disable-comments/)

### Take Global Control Over Your WordPress Site

Override all comments-related settings throughout your website & manage your comments just the way you want.

### Disable Comments On Posts, Pages & Media

Choose which posts, pages or media should allow comments from site visitors & configure Disable Comments accordingly

### Disallow Comments On Multi-Site Network

Have multiple websites? Get rid of irrelevant comments on the entire network using Disable Comments Plugin

### KEY FEATURES OF DISABLE COMMENTS

- All “Comments” links are hidden from the Admin Menu and Admin Bar.
- All comment-related sections (“Recent Comments”, “Discussion” etc.) are hidden from the WordPress Dashboard.
- All comment-related widgets are disabled (so your theme cannot use them).
- The “Discussion” settings page is hidden.
- All comment RSS/Atom feeds are disabled (and requests for these will be redirected to the parent post).
- The X-Pingback HTTP header is removed from all pages.
- Outgoing pingbacks are disabled.
- Stop spam comments entirely from the site with one click.
- Delete comments by type, including WooCommerce product reviews.
- Disable comments via [XML-RPC](https://wpdeveloper.com/docs/how-to-disable-comments-made-via-xml-rpc/) & [REST-API](https://wpdeveloper.com/docs/how-to-disable-comments-made-via-rest-api/)
- Fully Multi-site Network supported.
- Manage multiple website network-specific subsites or entire network comments in advance.
- Exclude Disable Comments Settings based on user roles.
- Keep the WordPress 6.9+ Block Editor “Notes” comment type working while every other comment stays off.
- **[New in 2.8.0]** AI-agent ready: supports the WordPress Abilities API (WP 6.9+), so AI assistants and MCP clients can read your comment settings.

Please delete any existing comments on your site **before applying this setting**, otherwise (depending on your theme) those comments may still be displayed to visitors. You can use the **Delete Comments tool** to delete any existing comments on your site.

### 🌟 WHAT’S NEW WITH DISABLE COMMENTS 2.0

**AMAZING USER FRIENDLY INTERFACE**

Easily configure your comment-related settings with an amazing and attractive app-like user interface.

**WP-CLI COMMANDS TO DISABLE COMMENTS**

Use [WP-CLI](https://wpdeveloper.com/docs/how-to-use-disable-comments-plugin-with-wp-cli-command-line/) control for comment-related settings to disable comments on posts, pages, attachments or everywhere on your website.

**GET STARTED WITH QUICK SETUP WIZARD**

Use the quick setup wizard after activating the plugin to instantly configure comment-related settings for your WordPress website.

**DISABLE COMMENTS ON DOCS**

Instantly disable comments on your documentation pages or WordPress knowledge base with a single click.

**DELETE CERTAIN COMMENT TYPE(S)**

Permanently delete certain comment types from your WordPress website including WooCommerce product reviews as well as generic comments.

**DISABLE COMMENTS VIA XML-RPC And REST API**

Block any comments made on your WordPress website via XML-RPC specification and REST API.

**Important note**: Use this plugin if you don’t want comments at all on your site (or on certain post types). Don’t use it if you want to selectively disable comments on individual posts – WordPress lets you do that anyway. If you don’t know how to disable comments on individual posts, there are instructions in **the FAQ.**

If you come across any bugs or have suggestions, please use the plugin support forum. I can’t fix it if I don’t know it’s broken! Please check the **FAQ** for common issues.

Want to contribute? Here’s the **GitHub development repository**.

A [must-use version](https://github.com/WPDevelopers/disable-comments-mu) of the plugin is also available.

### Advanced Configuration

Some of the plugin’s behavior can be modified by site administrators and plugin/theme developers through code:

- Define 
```
DISABLE_COMMENTS_REMOVE_COMMENTS_TEMPLATE
```

 and set it to 
```
false
```

 to prevent the plugin from replacing the theme’s comment template with an empty one.
- Define 
```
DISABLE_COMMENTS_ALLOW_DISCUSSION_SETTINGS
```

 and set it to 
```
true
```

 to prevent the plugin from hiding the Discussion settings page.

These definitions can be made either in your main 
```
wp-config.php
```

 or in your theme’s 
```
functions.php
```

 file.

**THIS PLUGIN IS NOW MAINTAINED BY THE TEAM** [WPDeveloper](https://wpdeveloper.com/).

### 💙 LOVED DISABLE COMMENTS?

- For documentation and tutorials go to our [Documentation](https://wpdeveloper.com/docs-category/disable-comments/)
- For video tutorials go to our [YouTube Playlist](https://www.youtube.com/watch?v=J9AteKzQpPs&list=PLWHp1xKHCfxD2_xOIR5dMAGf3wd4hv-8K)
- Join our [Facebook Group](https://www.facebook.com/groups/wpdeveloper.net/)
- If you love Disable Comments, [rate us on WordPress](https://wordpress.org/support/plugin/disable-comments/reviews/?filter=5)
- For more information about features, FAQs, and documentation, check out our website at [Disable Comments](https://wpdeveloper.com/plugins/disable-comments/)

### 🔥 GET FREEBIES FOR YOUR WORDPRESS SITE

Consider checking out our other WordPress solutions & boost your WordPress website:

🔝 [Essential Addons For Elementor](https://wordpress.org/plugins/essential-addons-for-elementor-lite/): Most popular Elementor addons with 2 million+ happy users & 95+ widgets & ready blocks

🔔 [NotificationX](https://notificationx.com/) – Best Social Proof & FOMO Marketing Solution to increase conversion rates.

🔗 [BetterLinks](https://wordpress.org/plugins/betterlinks/): Latest best WordPress link management plugin for link shortening, tracking & analyzing.

📄 [EmbedPress](https://wordpress.org/plugins/embedpress/): EmbedPress lets you embed anything including videos, images, posts, audio, maps and upload PDF, DOC, PPT etc.

☁ [Templately](https://wordpress.org/plugins/templately/): 6000+ Free templates library for Elementor & Gutenberg along with the cloud collaboration for WordPress.

📚 [BetterDocs](https://wordpress.org/plugins/betterdocs/): Best Documentation & Knowledge Base Plugin for WordPress reduce manual support tickets & improve user experience.

⏰ [SchedulePress](https://wordpress.org/plugins/wp-scheduled-posts/): Advanced editorial calendar with WordPress Post Scheduling, Social Sharing, Missed scheduled alerts, and more.

⚡ [Flexia](https://wordpress.org/themes/flexia/): Most lightweight, customizable & multi purpose theme for WordPress.

Visit [WPDeveloper](https://wpdeveloper.com/) to learn more about how to do better in WordPress with [Help Tutorial, Tips & Tricks](https://wpdeveloper.com/blog).

### Source Code

The JavaScript and CSS shipped in 
```
assets/
```

 are compiled with Grunt and Babel from uncompiled sources that are not included in the plugin zip: JavaScript in 
```
src/
```

 and Sass in 
```
assets/scss/
```

.

Both the sources and the build configuration live in the [GitHub development repository](https://github.com/WPDevelopers/disable-comments). To build them yourself:

```
npm install
npm run build
```

## Screenshots

	![Setting Screen for Disable Comments](https://ps.w.org/disable-comments/assets/screenshot-1.jpg?rev=2509854)Setting Screen for Disable Comments

![Delete Comments under Tools menu.](https://ps.w.org/disable-comments/assets/screenshot-2.jpg?rev=2509854)Delete Comments under Tools menu.

![Multisite Network support](https://ps.w.org/disable-comments/assets/screenshot-3.jpg?rev=2700436)Multisite Network support

## Installation

	
#### Modern Way:

1. Go to the WordPress Dashboard “Add New Plugin” section.
2. Search For “Disable Comments”.
3. Install, then Activate it.
4. The plugin settings can be accessed via the ‘Settings’ menu in the administration area (either your site administration for single-site installs, or your network administration for network installs).

#### Old Way:

1. Upload the plugin folder to the 
```
/wp-content/plugins/
```

 directory
2. Activate the plugin through the ‘Plugins’ menu in WordPress
3. The plugin settings can be accessed via the ‘Settings’ menu in the administration area (either your site administration for single-site installs, or your network administration for network installs).

## FAQ

	### Nothing happens after I disable comments on all posts – comment forms still appear when I view my posts.
This is because your theme is not checking the comment status of posts in the correct way.

You may like to point your theme’s author to [this explanation](https://wpdeveloper.com/wordpress-posts-have-comments-allowed/) of what they are doing wrong, and how to fix it.
### How can I remove the text that says “comments are closed” at the bottom of articles where comments are disabled?
The plugin tries its very best to hide this (and any other comment-related) messages.

If you still see the message, then it means your theme is overriding this behaviour, and you will have to edit its files manually to remove it. Two common approaches are to either delete or comment out the relevant lines in 
```
wp-content/your-theme/comments.php
```

, or to add a declaration to 
```
wp-content/your-theme/style.css
```

 that hides the message from your visitors. In either case, make sure you know what you are doing!
### I only want to disable comments on certain posts, not globally. What do I do?
Go to the edit page for the post you want to disable comments on. Scroll down to the “Discussion” box, where you will find the comment options for that post. If you don’t see a “Discussion” box, then click on “Screen Options” at the top of your screen, and make sure the “Discussion” checkbox is checked.

You can also bulk-edit the comment status of multiple posts from the [posts screen](https://codex.wordpress.org/Posts_Screen).
### I want to delete comments from my database. What do I do?
Go to the tools page for the Disable Comments plugin and use the Delete Comments tool to delete all comments or according to the specified post types from your database.

**This cannot be undone.** Back up your database before running it.
### How do I disable comments across an entire multisite network?
Network-activate the plugin. The settings then live under your Network Admin, where you can either apply one configuration to every site at once or configure individual subsites from the network screen. If you activate the plugin on a single site instead, it only ever affects that site.
### How do I disable WooCommerce product reviews?
WooCommerce product reviews are stored as comments on the 
```
product
```

 post type, so disabling comments on 
```
product
```

 turns reviews off too. To remove reviews that already exist, use the Delete Comments tool and select the product post type.
### Can I configure the plugin from WP-CLI?
Yes. Settings and deletion are both scriptable, which is useful across a fleet of sites:

```
wp disable-comments settings --types=post
wp disable-comments settings --types=page --add
wp disable-comments settings --xmlrpc --rest-api
wp disable-comments delete --types=all
```

Run 
```
wp help disable-comments settings
```

 for the full list of options. [Full WP-CLI documentation](https://wpdeveloper.com/docs/how-to-use-disable-comments-plugin-with-wp-cli-command-line/).
### WordPress 6.9 added “Notes” in the Block Editor. Will this plugin break them?
No, as long as you allow them. Notes are technically a comment type (
```
note
```

), so a blanket disable would switch them off along with everything else. Use the **Enable Certain Comment Types** setting to keep Notes working while all other comments stay disabled.
### I disabled comments but a cached page still shows the comment form.
As of version 2.8.0 the plugin clears page caches automatically whenever you save settings or delete comments, so this should resolve itself. If your host or CDN is not covered, it can hook 
```
disable_comments_purge_caches
```

 to clear its own cache at the same moment.

Note that the plugin never touches your object cache — only page caches. The stale thing is rendered HTML.
### Can AI assistants read my comment settings?
Yes, on WordPress 6.9 and above. The plugin registers a read-only 
```
disable-comments/get-status
```

 ability through the WordPress Abilities API, so AI assistants, the command palette and MCP clients can ask the site where comments are disabled. It is read-only and requires the 
```
manage_options
```

 capability — nothing can change your settings through it.
### What happens if I deactivate the plugin?
Comments go back to whatever WordPress and your theme did before. The plugin filters comment status at runtime rather than rewriting your posts, so your original per-post settings are still intact underneath.

The one exception is the Delete Comments tool: comments it removed are permanently gone and deactivating will not bring them back.

## Reviews

	![](https://secure.gravatar.com/avatar/c717edc6315622ec9c362d4393638a683293bd90c1289a41b1d0aba8e6cb0615?s=60&d=retro&r=g)### Awsome
							[checmark](https://profiles.wordpress.org/checmark/)
								July 21, 2026
						One of my many websites has been getting hacked by numerous Russian comments, as many as twenty a day! I spent hours online with my hosting company, InMotion Hosting, trying to block this, but they suggested using their CloudFlare feature, which was a total pain! I then researched how to block comments on a WordPress site and this was just as much of a pain, with no way to block comments on all posts and pages. Then I discovered this plugin and it worked in about two minutes to block comments everywhere on the site. Thank you!
							![](https://secure.gravatar.com/avatar/da1844de47919ff7ecfd97eecd0b93b3b7ad45b1bd3d328b6b2a5f52bec71418?s=60&d=retro&r=g)### Really love this plugin
							[piercand](https://profiles.wordpress.org/piercand/)
								July 13, 2026
						It does exactly what it’s needed, easy, affordable and lightweight. A must-use in all my websites.
							![](https://secure.gravatar.com/avatar/cbf651e14f0c4e169762d09b30524f067f8dd2cfb1b5b1967a74254a9c34eaa9?s=60&d=retro&r=g)### Simple and Helpful
							[lanalina](https://profiles.wordpress.org/lanalina/)
								April 8, 2026
																1 reply
						Disable Comments did what I needed without much setup. Easy to use and saves time when managing site content. Worked fine on my end, though a few extra options would make it even better.
							![](https://secure.gravatar.com/avatar/dbb5cdab527755bc2ec352ec703c57a63a67514dba3134025ad9fed17025bbb5?s=60&d=retro&r=g)### Simple & Useful
							[callietrinh](https://profiles.wordpress.org/callietrinh/)
								March 31, 2026
																1 reply
						Does exactly what it says. Helps disable comments easily without extra setup. Works fine on most parts. But a few settings could be more flexible. Overall good. tnx 👍
							![](https://secure.gravatar.com/avatar/735875a394dc10d76cd49a4000483770408deaf95211c4f1b9038f3bb9296d75?s=60&d=retro&r=g)### Does The Job
							[kameron156](https://profiles.wordpress.org/kameron156/)
								March 6, 2026
																2 replies
						Installed this to quickly turn off comments across my site. Setup took like a minute and everything worked as expected. Simple settings, no confusion. Could use a few more options maybe, but overall pretty solid.
							![](https://secure.gravatar.com/avatar/097eb8039f90dffcbe14e64b32888625ea4520eb0b6b06c0788ab9b84ebdcadd?s=60&d=retro&r=g)### BRILLIANT! Thank you!!
							[isolshell1](https://profiles.wordpress.org/isolshell1/)
								November 9, 2025
						I had a daunting task of first moving 500+ the Pending Comments that I have identified as all SPAM to the Trash folder, page by fricken page, then having to go into the Trash folder to permentantly delete them, page by painstaking page.Then I said there must be a plugin for this. Lo & Behold there was.  It was yours.  Task finished in less than 3 minute and that included installing and activating the plugin and figuring out which choice I had within the plugin that would accomplish the task.  BAM! IT WAS DONE.Bravo!!

		[Read all 280 reviews](https://wordpress.org/support/plugin/disable-comments/reviews/)

## Contributors & Developers

	“Disable Comments – Remove Comments & Stop Spam [Multi-Site Support]” is open source software. The following people have contributed to this plugin.

Contributors
		- ![](https://secure.gravatar.com/avatar/78597fc6182399eaab6afcc3ac4324f4c4234266e2ec607a8770c57241301903?s=32&d=mm&r=g)				[WPDeveloper](https://profiles.wordpress.org/wpdevteam/)
- ![](https://secure.gravatar.com/avatar/751c37e897d7e5350a12329d48cb0a166c77f87fe00c47b9289e70417459fb92?s=32&d=mm&r=g)				[M Asif Rahman](https://profiles.wordpress.org/asif2bd/)
- ![](https://secure.gravatar.com/avatar/fb8f3134e4dbbcb540ce412931c8fe4108927714d7e00cf34332dc48d8bf4389?s=32&d=mm&r=g)				[PriyoMukul](https://profiles.wordpress.org/priyomukul/)
- ![](https://secure.gravatar.com/avatar/a39cec9005b0dca1bdfd5c6f884f6da77d28f893d60274ca947586b638ab970f?s=32&d=mm&r=g)				[Rupok](https://profiles.wordpress.org/re_enter_rupok/)
- ![](https://secure.gravatar.com/avatar/450ce66f0232ce15aada15b4ebbb8d86a717dfa604eeb18325c8ddbfa814b94b?s=32&d=mm&r=g)				[Alimuzzaman Alim](https://profiles.wordpress.org/alimuzzamanalim/)
- ![](https://secure.gravatar.com/avatar/fb6525bdf0b9bc628522d50e4b3dbb0e790500c154b0de255cf133619843efd0?s=32&d=mm&r=g)				[Samir Shah](https://profiles.wordpress.org/solarissmoke/)
- ![](https://secure.gravatar.com/avatar/e8084b0a02eed1df748f38811d0989e5f345250fb17a61e46b3304e7a85278a7?s=32&d=mm&r=g)				[Garrett Hyder](https://profiles.wordpress.org/garrett-eclipse/)“Disable Comments – Remove Comments & Stop Spam [Multi-Site Support]” has been translated into 41 locales. Thank you to [the translators](https://translate.wordpress.org/projects/wp-plugins/disable-comments/contributors) for their contributions.

[Translate “Disable Comments – Remove Comments & Stop Spam [Multi-Site Support]” into your language.](https://translate.wordpress.org/projects/wp-plugins/disable-comments)

### Interested in development?

[Browse the code](https://plugins.trac.wordpress.org/browser/disable-comments/), check out the [SVN repository](https://plugins.svn.wordpress.org/disable-comments/), or subscribe to the [development log](https://plugins.trac.wordpress.org/log/disable-comments/) by [RSS](https://plugins.trac.wordpress.org/log/disable-comments/?limit=100&mode=stop_on_copy&format=rss).

## Changelog

	The format is based on [Keep a Changelog](http://keepachangelog.com/)

and this project adheres to [Semantic Versioning](http://semver.org/).

This will be maintained from August 19, 2020 – @asif2bd

#### [2.9.0] – 2026-09-01

- New Feature: Conditional rules – disable or re-enable comments by taxonomy term, page template, or post age, instead of by post type alone
- New Feature: Dry-run preview for Delete Comments – see which comments a delete will remove before running it, and download them as CSV first
- New Feature: Blocked-attempt counter – see how many comment, trackback and REST attempts the plugin has turned away, reported in Site Health
- New Feature: Export and import settings as JSON, with a diff preview before anything is written
- New Feature: WooCommerce product reviews are now a first-class setting, separate from ordinary comments, including closing reviews while other product comments stay open
- New Feature: Theme conflict scanner – diagnoses a theme that still renders a comment form after comments are disabled
- New Feature: Abilities API write support (WordPress 6.9+) – AI assistants and MCP clients can change comment settings and delete comments, gated on the same capabilities as the admin screens
- New Feature: The advanced tools now have a Settings tab of their own, leaving the first screen to the core choice of where comments are off
- Improved: The Delete Comments preview lists the comments it matched – author, date, post and an excerpt – rather than only how many there are
- Improved: Conditional rule terms are searchable, so a taxonomy with more than 200 terms is fully reachable
- Improved: Site Health reports conditional rules, so the overview no longer reads “comments are enabled everywhere” while a rule is closing them
- Improved: Settings screen layout – aligned rule controls, a readable blocked-attempt breakdown, consistent label sizes, and result boxes that match the rest of the plugin
- Improved: readme and plugin directory listing rewritten for clarity
- Fixed: CSV backups escape every free-text column, so a comment cannot execute as a formula when the file is opened in a spreadsheet
- Fixed: An anonymous REST read is no longer counted as a blocked attempt
- Fixed: “Counting blocked attempts since” keeps its start date instead of showing today’s date until the first block
- Fixed: A delete that matches nothing no longer reloads the whole settings screen
- Fixed: The review prompt can be dismissed on every screen it appears on
- Fixed: Uninstall removes the review-prompt data the plugin created
- Fixed: The Abilities API set-status summary describes the site’s configuration rather than the calling user’s role exemption
- Fixed: “Total Comments” says what it counts, so it no longer contradicts the mode-specific delete preview
- Developer: 
```
disable-comments delete
```

 gains 
```
--dry-run
```

 and 
```
--export=<file>
```

; new 
```
disable-comments export
```

 and 
```
disable-comments import
```

 WP-CLI commands

#### [2.8.0] – 2026-07-27

- New Feature: WordPress Abilities API support (WordPress 6.9+) — AI assistants, the command palette and MCP clients can now ask the site where comments are disabled, via the read-only 
```
disable-comments/get-status
```

 ability
- Fixed: Page caches are now purged when settings are saved or comments are deleted — previously a cached page kept serving the comment form after comments were disabled
- Compatible with WordPress 7.0

#### [2.7.1] – 2026-07-22

- Improvement: General improvements

#### [2.7.0] – 2026-04-05

- Improvement: Improved overall performance and stability

#### [2.6.2] – 2026-01-20

- Fixed: An issue where deleting Notes in WordPress 6.9+ throws an error

#### [2.6.1] – 2025-12-02

- Compatible with WordPress 6.9
- Added: Introduced the “Enable Certain Comment Types” setting, allowing you to exclude the new Block Editor “Notes” comment type introduced in WordPress 6.9

Older releases are listed in [changelog.txt](https://plugins.svn.wordpress.org/disable-comments/trunk/changelog.txt).

---

