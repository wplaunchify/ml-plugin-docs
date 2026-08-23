# Overview

*Category from Attributes for Blocks documentation*

---

## Attributes for Blocks

**Source:** [https://wordpress.org/plugins/attributes-for-blocks/](https://wordpress.org/plugins/attributes-for-blocks/)

## Description

	This plugin adds additional advanced inspector controls to Gutenberg blocks that allow to add any custom HTML attributes to the block’s front-end output. This allows you to add inline styles to fine-tune the block’s appearance, set aria attributes to improve your site’s accessibility, add data attributes to integrate with any JavaScript modules or even JavaScript DOM event attributes such as 
```
onclick
```

, 
```
onchange
```

 or 
```
onload
```

.

[Demo](https://playground.wordpress.net/?plugin=attributes-for-blocks&url=%2Fwp-admin%2Fpost.php%3Fpost%3D2%26action%3Dedit)

## Screenshots

	![Adding style attribute to paragraph block](https://ps.w.org/attributes-for-blocks/assets/screenshot-1.png?rev=2588242)Adding style attribute to paragraph block

## Installation

	
#### Install via admin dashboard

1. Go to your **WordPress admin dashboard -> Plugins**.
2. Click “Add New”.
3. Click “Upload Plugin”.
4. Select the 
```
attributes-for-blocks.zip
```

 file.
5. Click “Install Now”.
6. Activate the plugin from **WordPress admin dashboard -> Plugins**.

#### Manual install via FTP upload

1. Upload the folder “attributes-for-blocks” from 
```
attributes-for-blocks.zip
```

 file to your WordPress installations 
```
../wp-content/plugins
```

 folder.
2. Activate the plugin from **WordPress admin dashboard -> Plugins**.

## FAQ

	### How do I add an attribute?
In your selected block’s inspector controls (Block settings) scroll all the way to the bottom and click on “Advanced”. It should contain a section called “Additional attributes”.

Type an attribute name into the “Add attribute” field and press “Add” to add an attribute for the block. A new input with the attribute’s name should appear below, into which you can optionally insert the attribute value.

Example attributes: 
```
style
```

, 
```
title
```

, 
```
target
```

, 
```
class
```

, 
```
id
```

, 
```
onclick
```

, 
```
data-*
```

, 
```
aria-*
```

.
### Why is the input disabled?
When the current user doesn’t have 
```
unfiltered_html
```

 capabilities attributes cannot be added and all existing attributes are stripped when the post is updated.
### How does it work?
For regular blocks, attributes are added to the block save content’s root element, meaning they will be rendered only on the front end and not in the editor. For dynamic blocks the attributes are added via 
```
render_callback
```

 function and they may also be applied in the editor, depending if the block is rendered server or client side.
### Does it work for every block?
It should work with normal blocks that render a valid WP Element that can utilize the 
```
blocks.getSaveContent.extraProps
```

 filter as well as dynamic blocks that utilize a 
```
render_callback
```

. Third party blocks that do something unorthodox may not work.

[Known unsupported blocks](https://plugins.trac.wordpress.org/browser/attributes-for-blocks/trunk/includes/unsupported-blocks.php)
### Usage with Alpine.js
@ prefix in an attribute name is used for “override” mode in this plugin, for Alpine.js attributes use 
```
x-on:click
```

 instead of 
```
@click
```

 or use the shorthand syntax with two 
```
@
```

 characters instead of one: 
```
@@click
```

.
### Disable block support
The 
```
afb_unsupported_blocks
```

 filter can be used in your child theme’s 
```
functions.php
```

 file to disable block support for adding additional attributes.

```
add_filter('afb_unsupported_blocks', function($blocks) {
    $blocks[] = 'core/button';
    return $blocks;
});
```
### What happens when I disable this plugin?
Blocks with custom attributes may become invalid, depending on which attributes you’ve added. From there you can recover the block without the custom attributes by clicking “Attempt Block Recovery” or keep the block with custom attributes as HTML by choosing “Convert to HTML”. If you don’t want to risk blocks becoming invalid you need to remove all custom attributes before disabling the plugin.
### How do I add unfiltered_html capability to user roles?
You can modify which roles have the 
```
unfiltered_html
```

 capability using custom code in your theme’s 
```
functions.php
```

 file or via a custom plugin. Only grant this capability if you trust the current and future users of that role to not do anything malicious.

```
add_action('init', function() {
    if($role = get_role('contributor')) {
        $role->add_cap('unfiltered_html');
    }
});
```

## Reviews

	![](https://secure.gravatar.com/avatar/df445ecea9cca33d322bc9011daf5cd75f38c65ca1e4ee4b80ee3a62994b82fb?s=60&d=retro&r=g)### A must-have plugin that brings true flexibility to the block editor
							[Germán](https://profiles.wordpress.org/germanfrelo/)
								October 17, 2025
						Thank you so much for creating this plugin! It adds a level of versatility to the block editor that WordPress really needed. Being able to easily add custom attributes — like data-*, aria-*, or other HTML attributes — makes it incredibly useful for developers and site builders alike.

It works exactly as expected, saves tons of time, and feels lightweight and reliable. Perfect for anyone who wants finer control over blocks without having to write extra code or rely on complex workarounds.

Huge thanks to the authors for keeping it simple, powerful, and developer-friendly — I truly hope this continues to be maintained for future WordPress versions. Highly recommended!
							![](https://secure.gravatar.com/avatar/3a0d4408354ac7f1fddc273366daae9126187a427e91b7798e3502d2ba499b4d?s=60&d=retro&r=g)### Thank you, this is gold for improving accessibility!
							[Anne-Mieke Bovelett](https://profiles.wordpress.org/annebovelett/)
								December 14, 2024
						Thank you so much for creating this!
							![](https://secure.gravatar.com/avatar/11e6b9c29a68f8735b51fbf2e58b90d6c26e96b1887199c5df40b65f68143d50?s=60&d=retro&r=g)### Saved me tons of work
							[Dunkan](https://profiles.wordpress.org/dunkanmccloud/)
								November 6, 2024
						This is perfect, it saved me tons of work. I am used it for adding the view-transition-classes to query block elements.websevendev & jimedwards million thanks to you!
							![](https://secure.gravatar.com/avatar/de46ac8aba3c1e3cf6e476d77765d6cdba0803016583b8575033d3297b66a9cf?s=60&d=retro&r=g)### Worked great!
							[dallinchase](https://profiles.wordpress.org/dallinchase/)
								July 18, 2024
						Worked exacltly as needed, I recomend it!
							![](https://secure.gravatar.com/avatar/cc6790afcae10f85481e673c9127c4b502d5af9b056d9b0b4f2a2e488c799c1b?s=60&d=retro&r=g)### Very nice and useful
							[mauri01](https://profiles.wordpress.org/mauri01/)
								February 14, 2024
						Thank you very much for providing this plugin, I have been able to use SAL scroll animation library with it works perfectly!

Hope you keep going with this Plugin for future Wordpress versions.

Thank YOU!
							![](https://secure.gravatar.com/avatar/45e3dfb5e418c9d670a2c0b158440b929e2d64bf3a0f63c002d7ef1141e8e83a?s=60&d=retro&r=g)### Awesome plugin!
							[Nazar Hotsa](https://profiles.wordpress.org/bugnumber9/)
								January 4, 2024
						I absolutely love this plugin! Does what it says easily and reliably, doesn’t add any bloat. Amazing.

		[Read all 21 reviews](https://wordpress.org/support/plugin/attributes-for-blocks/reviews/)

## Contributors & Developers

	“Attributes for Blocks” is open source software. The following people have contributed to this plugin.

Contributors
		- ![](https://secure.gravatar.com/avatar/3dd1e9fea8078a6534337b652bc0da7d51a37fd426c07290d6361ef744b4b82d?s=32&d=mm&r=g)				[ska-dev](https://profiles.wordpress.org/skadev/)
- ![](https://secure.gravatar.com/avatar/aae0a45ced6be8eabb8d80cae88108dcf6b60b26c6c280ea470684241d78d007?s=32&d=mm&r=g)				[jimedwards](https://profiles.wordpress.org/jimedwards/)“Attributes for Blocks” has been translated into 5 locales. Thank you to [the translators](https://translate.wordpress.org/projects/wp-plugins/attributes-for-blocks/contributors) for their contributions.

[Translate “Attributes for Blocks” into your language.](https://translate.wordpress.org/projects/wp-plugins/attributes-for-blocks)

### Interested in development?

[Browse the code](https://plugins.trac.wordpress.org/browser/attributes-for-blocks/), check out the [SVN repository](https://plugins.svn.wordpress.org/attributes-for-blocks/), or subscribe to the [development log](https://plugins.trac.wordpress.org/log/attributes-for-blocks/) by [RSS](https://plugins.trac.wordpress.org/log/attributes-for-blocks/?limit=100&mode=stop_on_copy&format=rss).

## Changelog

	
#### 1.0.15

- Tweaked UI for WordPress 7.1.

#### 1.0.14

- Tweaked UI for WordPress 7.0.

#### 1.0.13

- Tested with WordPress 6.9.

#### 1.0.12

- Added a donate link on the plugin page – supporters get a 50% off coupon for my brand new WordPress theme.
- Fix potential duplication when merging style attribute values.
- Update 
```
@wordpress/*
```

 packages.
- Tested with Gutenberg 21.7.0.

#### 1.0.11

- WP 6.8.

#### 1.0.10

- Added 
```
afb_get_attributes
```

 filter, allowing to dynamically modify attributes.

#### 1.0.9

- Try fix issue with 
```
current_user_can
```

 check in 
```
pre_kses
```

 when 
```
SECURE_AUTH_COOKIE
```

 isn’t defined.

#### 1.0.8

- Try fix issue with 
```
current_user_can
```

 check in 
```
pre_kses
```

 when WP pluggable functions aren’t loaded.

#### 1.0.7

- Security update: users without 
```
unfiltered_html
```

 capability can no longer add attributes. When a user without the capability updates a post all existing attributes are stripped. Issue discovered by Francesco Carlucci (CVE ID: CVE-2024-8318, CVSS Severity Score: 6.4 (Medium)). The vulnerability made it possible for authenticated attackers, with Contributor-level access and above, to inject arbitrary web scripts in pages that will execute whenever a user accessed an injected page.
- Tested up to WordPress 6.6.
- Update 
```
@wordpress/*
```

 packages.

#### 1.0.6

- Tested up to WordPress 6.5.
- Fix PHP notice when rendering a block that doesn’t have any attributes.
- Update 
```
@wordpress/*
```

 packages.

#### 1.0.5

- Use 
```
WP_HTML_Tag_Processor
```

 for adding HTML attributes.
- Remove 
```
afb_sanitize_attribute_key
```

 and 
```
afb_sanitize_attribute_value
```

 filters (now handled by 
```
WP_HTML_Tag_Processor
```

).
- Use 
```
render_block
```

 filter to apply attributes instead of overriding block’s 
```
render_callback
```

.
- Move all PHP code to main file for simplicity.
- Add 
```
$attribute
```

 param to 
```
afb_attribute_separator
```

 filter.
- Remove uppercase text transform from attribute input labels, use monospace font for value.
- Add button to edit attributes in a modal for more space.
- Update 
```
@wordpress/*
```

 packages.
- Regression: for blocks that render multiple root elements attributes are only applied to the first one.

#### 1.0.4

- Add 
```
afb_sanitize_attribute_key
```

 and 
```
afb_sanitize_attribute_value
```

 filters.
- Catch errors when using invalid characters in attribute name/value.
- Update 
```
@wordpress/*
```

 packages.

#### 1.0.3

- Update 
```
@wordpress/*
```

 packages.
- Test with WordPress 6.0.
- Convert advanced style attribute editor to TypeScript and refactor.
- Fix duplicate attribute values being output when the block has both JS and PHP render functions.
- Add GitHub link.
- Remove 
```
src
```

 folder from plugin.

#### 1.0.2

- Add advanced editor for style attribute.
- Remove jQuery.

#### 1.0.1

- Fix special character encoding for dynamic blocks.

---

