# Overview

*Category from Simple Post Redirect documentation*

---

## Simple Page Redirect

**Source:** [https://wordpress.org/plugins/simple-post-redirect/](https://wordpress.org/plugins/simple-post-redirect/)

## Description

	Simple Page Redirect is an easy-to-use WordPress plugin that lets you quickly redirect any post, page, or custom post type to an internal or external URL. Perfect for managing individual redirects across your site, this plugin simplifies URL redirection with a straightforward metabox on the edit screen and quick management directly from WordPress post list tables.

#### Free Features

- **Individual Redirect Setup**: Redirect any individual post, page, or custom post type to any internal path or external URL.
- **Seamless Editor Integration**: Works in both the Block Editor (Gutenberg) and Classic Editor with a dedicated sidebar metabox.
- **List Table Column**: View redirect targets at a glance directly within the WordPress Posts and Pages list tables.
- **Quick Edit Support**: Update or remove redirect destinations instantly via WordPress Quick Edit without opening the editor.
- **Loop & Self-Redirect Protection**: Automatically detects and prevents accidental redirect loops pointing back to the post’s own URL.
- **Preview Safe**: Does not redirect editors or administrators during WordPress post preview and editing workflows.
- **Lightweight & Clean**: Zero frontend scripts or styles, zero external requests, and no telemetry.

#### Premium Version

Need to manage redirects across a larger site or organize campaigns?

**Simple Page Redirect Premium** adds advanced redirect management tools on top of the free version:

- **Central Redirect Dashboard** – Search, filter, and manage all site redirects from one central screen.
- **Redirect Hit Tracking** – Monitor visit counts and last-accessed timestamps for every redirect.
- **Bulk Editing** – Apply, update, or remove redirects on multiple posts at once.
- **Redirect Labels** – Categorize and organize redirects with custom tags and labels.
- **Expiration Dates** – Set scheduled end dates to automatically disable temporary redirects.
- **Export Options** – Export redirect configurations to CSV for backups or migrations.
- **Priority Support** – Dedicated email support from the plugin development team.

👉 Learn more about [Simple Page Redirect Premium](https://simpleproplugins.com/product/simple-page-redirect/).

### Short Description

Quickly redirect any post, page, or custom post type to another URL using a simple metabox or Quick Edit.

### Support & Reviews

Have questions or need assistance? Visit our support forum on WordPress.org for prompt help. If you find the plugin helpful, please consider leaving a 5-star review!

### After Activation

1. Edit any post, page, or custom post type.
2. Enter the destination URL in the “Simple Redirect to:” metabox on the right sidebar.
3. Save or update the post.
4. To remove a redirect, simply blank out the field and save.
5. You can also view and edit redirects directly from the Posts/Pages list tables using the Redirect column and Quick Edit.

## Screenshots

	![The plugin metabox with the Classic Editor
screenshot-1.png](https://ps.w.org/simple-post-redirect/assets/screenshot-1.png?rev=3133384)The plugin metabox with the Classic Editor

screenshot-1.png

![The plugin metabox with the Gutenberg Editor
screenshot-2.png](https://ps.w.org/simple-post-redirect/assets/screenshot-2.png?rev=3133384)The plugin metabox with the Gutenberg Editor

screenshot-2.png

## Installation

	1. Upload 
```
simple-post-redirect
```

 to the 
```
/wp-content/plugins/
```

 directory.
2. Activate the plugin through the ‘Plugins’ menu in WordPress.
3. Edit any post or page and add the destination URL to the metabox.

## Reviews

	![](https://secure.gravatar.com/avatar/d367c2724423333f4680ed408ac37dc0aac5ed63c88410ba08d93f1cf3480f51?s=60&d=retro&r=g)### time delay neede…
							[looktr](https://profiles.wordpress.org/looktr/)
								February 27, 2025
																1 reply
						Excellent, but time delay feature needed.
							![](https://secure.gravatar.com/avatar/a5014f3a800b6e7ffb42eb7a082a4e72b8a3d1fd328eac25119d3612cdca0385?s=60&d=retro&r=g)### Does exactly what it says on the tin
							[wpcreations](https://profiles.wordpress.org/wpcreations/)
								November 14, 2024
						Great plugin, does exactly what it says on the tin. Would be nice to see a target option, feel that's the only thing missing.
							![](https://secure.gravatar.com/avatar/4928f78ad4c8d821803790deb82438e48c08f7d7616cc2ba5522322a32e8f180?s=60&d=retro&r=g)### Simple to the Point
							[cavuapparel](https://profiles.wordpress.org/cavuapparel/)
								March 3, 2024
						A good simple plugin with no learning curve needed….Does exactly what it says it will do
							![](https://secure.gravatar.com/avatar/945f3e77f603bfd1e9230895add3b2ce5384055b20a08fe7f79d4acd0809b8d7?s=60&d=retro&r=g)### Nice plugin
							[rolandassisla](https://profiles.wordpress.org/rolandassisla/)
								September 26, 2020
						Thanks.
Simple and convenient plugin.

Please add a category redirect.
							![](https://secure.gravatar.com/avatar/83f7b8017d7f8227382b2c2cc9244e78d15df91e6d67389eb76a7c3902c4ba1d?s=60&d=retro&r=g)### Simple and Easy to use
							[nadatamas](https://profiles.wordpress.org/nadatamas/)
								August 21, 2020
						Simple and very easy to use. Great support from developer. Thank you for the plugin!
							![](https://secure.gravatar.com/avatar/c9937c0b152b9066e1b47d9e8f25ab0ebfa6ece9a94b9fcad43306b488788e11?s=60&d=retro&r=g)### Great Plugin – Simple and clever
							[Joerg Romanowski](https://profiles.wordpress.org/romanowski72/)
								April 16, 2020
						I use it to redirect Avada's portfolio items. Just insert URL – ready. 
Thanks for this plugin.

		[Read all 9 reviews](https://wordpress.org/support/plugin/simple-post-redirect/reviews/)

## Contributors & Developers

	“Simple Page Redirect” is open source software. The following people have contributed to this plugin.

Contributors
		- ![](https://secure.gravatar.com/avatar/4a89a9bd7d56cb2f0b9e75586ea6d510cb0d7cd667497077cb2f941fa03dc435?s=32&d=mm&r=g)				[imemine](https://profiles.wordpress.org/imemine/)“Simple Page Redirect” has been translated into 6 locales. Thank you to [the translators](https://translate.wordpress.org/projects/wp-plugins/simple-post-redirect/contributors) for their contributions.

[Translate “Simple Page Redirect” into your language.](https://translate.wordpress.org/projects/wp-plugins/simple-post-redirect)

### Interested in development?

[Browse the code](https://plugins.trac.wordpress.org/browser/simple-post-redirect/), check out the [SVN repository](https://plugins.svn.wordpress.org/simple-post-redirect/), or subscribe to the [development log](https://plugins.trac.wordpress.org/log/simple-post-redirect/) by [RSS](https://plugins.trac.wordpress.org/log/simple-post-redirect/?limit=100&mode=stop_on_copy&format=rss).

## Changelog

	
#### 1.8.1

- Fix: Enqueue block editor assets only within the editor (
```
enqueue_block_editor_assets
```

) to prevent editor CSS from loading on frontend pages.
- Fix: Add self-redirect loop protection to prevent redirects from targeting the post’s own permalink or the current requested URL.
- Fix: Delete redirect post meta when cleared instead of saving empty string values.
- Fix: Enhanced URL validation and sanitization for HTTP, HTTPS, and relative URLs while preserving query parameters and fragments.
- Fix: Prevent redirects during WordPress post previews and customizer previews.
- Feature: Add lightweight Redirect column to WordPress post, page, and custom post type list tables.
- Feature: Add Quick Edit support for redirect URLs on list tables.
- Feature: Add overview and feature comparison page under Settings > Simple Page Redirect.
- Compatibility: Tested up to WordPress 7.1.2.

#### 1.8

- Maintenance update and block editor styling improvements.

#### 1.7.4

- Compatibility checks and minor fixes.

---

