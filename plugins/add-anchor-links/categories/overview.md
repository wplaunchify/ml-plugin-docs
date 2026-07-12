# Overview

*Category from Add Anchor Links documentation*

---

## Add Anchor Links

**Source:** [https://wordpress.org/plugins/add-anchor-links/](https://wordpress.org/plugins/add-anchor-links/)

## Description

	Creates anchor links to heading tags in the content of selected posts, just like Github does within the Readme.md files.

Get involved and [join Github](https://github.com/vyskoczilova/add-anchor-links)!

### Features

- Select post type where the anchor links will be added.
- Disable CSS.

### Compatibility

- PHP PHP 7 & PHP 8

## Installation

	1. Follow the standard [WordPress plugin installation procedere](https://codex.wordpress.org/Managing_Plugins).
2. When installed, go to 
```
Settings -> Add Anchor Links
```

 and when should be applied.

## FAQ

	### How can I report security bugs?
You can report security bugs through the Patchstack Vulnerability Disclosure Program. The Patchstack team help validate, triage and handle any security vulnerabilities. [Report a security vulnerability.](https://patchstack.com/database/vdp/add-anchor-links).
### I found a bug. Where should I post it?
I personally prefer GitHub, to keep things straight. The plugin code is here: [GitHub](https://github.com/vyskoczilova/add-anchor-links)

But you may use the WordPress Forum as well.
### I found a bug and fixed it. How can I contribute?
Either post it on [GitHub](https://github.com/vyskoczilova/add-anchor-links) or—if you are working on a cloned repository—send me a pull request.

## Reviews

	![](https://secure.gravatar.com/avatar/e44d017256488614fe23753b0db94cadb37088856241423ceee37148914fbee5?s=60&d=retro&r=g)### great plugin 👏
							[David Klhufek](https://profiles.wordpress.org/brtak/)
								December 13, 2024
						5 stars for your work
							![](https://secure.gravatar.com/avatar/a122815811c4d4dd543a3e3f022f07a4f2431f854c5c4f005d8e5c5ab81865d9?s=60&d=retro&r=g)### Why Scroll and not copy?
							[gregfuller](https://profiles.wordpress.org/gregfuller/)
								June 24, 2022
						This plugin works well and apparently works as intended.

I’m probably missing something, but I don’t understand why it scrolls the header to the top when the icon is clicked, instead of copying the corresponding anchored link (i.e.”pageurl/#header-title)” to the clipboard. After all, the header already has to be in view in order to click the icon beside the header.

If the plugin author would make the above modification and add an automatically fading “copied to clipboard,” message, the plugin would be ideal, IMHO.
,
							![](https://secure.gravatar.com/avatar/fccf55474efeda3e8ee66896c6101f5ac9ea3ec3c4be9b4fd633aa51767929fa?s=60&d=retro&r=g)### Worked instantly
							[Jan Reilink](https://profiles.wordpress.org/janr/)
								May 31, 2022
						Installed and enabled the plugin, saved settings and done! Thanks!
							![](https://secure.gravatar.com/avatar/0e4450ad00c9c23a7439a07cc76c79e43917dffc32070c800f31de441519892d?s=60&d=retro&r=g)### Best heading anchor plugin on the marketplace
							[balwuw](https://profiles.wordpress.org/balwuw/)
								June 10, 2020
						Add Anchor Links adds a beautifully designed embedded SVG link icon to the upper left of the headings, hidden by default and showing up when the mouse pointer hovers the heading’s box (extending over the full width).

Thanks to Add Anchor Links, authors of posts and pages in any writing system don’t need to manually add IDs and hyperlinks to headings, nor extra CSS rules to remove the standard link style from the headings.

Being an SVG coded in-line, the link icon is stable and very lightweight. It is easily copy-pasted along with the heading when the preceding paragraph break and (at least) one character before are included (the latter may be deleted afterwards). Instead of copy-pasting merely the URL, we can send the link in the icon with the heading, e.g. in an HTML email.

The link icon’s positioning is also compatible with heading numbers added from CSS counters.

Add Anchor Links is compatible with the Easy Table of Contents plugin. The reader doesn’t need to scroll to the TOC any more to pick a heading’s link. TOCs are often missing, at least when the number of headings in a given page doesn’t meet the setting for the TOC to be generated.

Add Anchor Links is absolute top quality and a must-have plugin for use on all websites having h2 or lower-level headings. Visitors thankfully appreciate being able to easily cite particular sections in pages, articles and posts. A really easy way to significantly enhance user experience.
							![](https://secure.gravatar.com/avatar/6ac7c2e9bb1e43d09d87b780c06c09b391a52680c3b1512bcd094176376a1a26?s=60&d=retro&r=g)### Works exactly as described
							[OllieJones](https://profiles.wordpress.org/olliejones/)
								March 16, 2020
						Thanks for this! It works exactly as described, adding id values to headings and showing an anchor item. Right-clicking allows users to capture a link to an exact section.
							![](https://secure.gravatar.com/avatar/7c7c7d3e6219a951c029f5aee439ff9d0b9784d77bb8e0ef4a180b21baa640dc?s=60&d=retro&r=g)### Excellent!
							[tlinkowski](https://profiles.wordpress.org/tlinkowski/)
								December 10, 2018
																1 reply
						Works like a charm. Thanks, Karolína!

		[Read all 6 reviews](https://wordpress.org/support/plugin/add-anchor-links/reviews/)

## Contributors & Developers

	“Add Anchor Links” is open source software. The following people have contributed to this plugin.

Contributors
		- ![](https://secure.gravatar.com/avatar/07a20c9f56b2b62f304e1e3820aec06f9bf96bd4fd2533749b0e738042fb6e6c?s=32&d=mm&r=g)				[Karolina Vyskocilova](https://profiles.wordpress.org/vyskoczilova/)“Add Anchor Links” has been translated into 2 locales. Thank you to [the translators](https://translate.wordpress.org/projects/wp-plugins/add-anchor-links/contributors) for their contributions.

[Translate “Add Anchor Links” into your language.](https://translate.wordpress.org/projects/wp-plugins/add-anchor-links)

### Interested in development?

[Browse the code](https://plugins.trac.wordpress.org/browser/add-anchor-links/), check out the [SVN repository](https://plugins.svn.wordpress.org/add-anchor-links/), or subscribe to the [development log](https://plugins.trac.wordpress.org/log/add-anchor-links/) by [RSS](https://plugins.trac.wordpress.org/log/add-anchor-links/?limit=100&mode=stop_on_copy&format=rss).

## Changelog

	
#### 1.0.5 (2026-03-18)

- Fix: Duplicate headings now generate unique anchor IDs (e.g. 
```
overview
```

, 
```
overview-2
```

, 
```
overview-3
```

)

#### 1.0.4

(2021-03-07)

* Make 
```
Kybernaut\AddAnchorLinks::add_anchors( $string )
```

 function available for custom calls

#### 1.0.3

(2021-03-07)

* Fix: Use escaping attribute on admin screens

* Add PHPCS & simple PHPUnit test

* Use Travis CI/CD (PHPCS, PHPUnit)

#### 1.0.2 (2020-01-13)

- Fix: Fix link position when header has attributes ([PR#1](https://github.com/vyskoczilova/add-anchor-links/pull/1) by [@a-mt](https://github.com/a-mt))

#### 1.0.1 (2018-02-12)

- Fix: Few typos in readme files.
- Fix: Post types error.
- Added: Notice about settings shown on plugin activation.
- Added: Constant ADD_ANCHOR_LINKS_DONT_LOAD_CSS (see Github).
- Added: Banner & icon image to the WP repository (by [Dušan Konečný](http://abmanufaktura.cz)).

#### 1.0.0 (2018-02-08)

- Initial release

---

