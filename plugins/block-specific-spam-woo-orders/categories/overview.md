# Overview

*Category from Block Specific Spam Woo Orders documentation*

---

## Block Specific Spam Woo Orders

**Source:** [https://wordpress.org/plugins/block-specific-spam-woo-orders/](https://wordpress.org/plugins/block-specific-spam-woo-orders/)

## Description

	This plugin prevents a specific set of WooCommerce fake/spam orders.

Simply install and activate the plugin; there are no settings or tweaks to be made unless you want to add your own filters.

The plugin extends WooCommerce’s built-in checkout validations to check for a specific set of known spam email accounts and names. If triggered, the spam bot simply cannot checkout and importantly does not get to the account creation stage.

The names/emails it checks for would only be used by spam bots, so there is no need to worry about false positives.

If you’ve found this plugin useful, you can support my work by buying me a coffee at:

[Buy Me a Coffee](https://buymeacoffee.com/alexwigmore).

### How to Use Custom Filters

Starting from plugin version 0.77, you can extend the list of blocked email domains and blocked customer names using custom filters.

### Available Filters:

1. **BSSO_extra_domains:** Add custom email domains to block during the checkout process.
2. **BSSO_extra_names:** Add custom first names to block during the checkout process.

### Example Usage

To use these filters, add code to your theme’s 
```
functions.php
```

 file or a custom plugin.

#### 1. Blocking Additional Email Domains

If you want to block additional email domains like 
```
exampledomain.com
```

 and 
```
spamdomain.net
```

, use the 
```
BSSO_extra_domains
```

 filter. Domains can be supplied with or without a leading 
```
@
```

.

**Code Example:**

```
add_filter('BSSO_extra_domains', function () {
    return ['exampledomain.com', 'spamdomain.net'];
});
```

#### 2. Blocking Additional First Names

If you want to block additional first names like 
```
spambot
```

 and 
```
faker
```

, use the 
```
BSSO_extra_names
```

 filter.

**Code Example:**

```
add_filter('BSSO_extra_names', function () {
    return ['spambot', 'faker'];
});
```

### Complete Example

Here’s how you might use both filters together:

**Code Example:**

```
add_filter('BSSO_extra_domains', function () {
    return ['exampledomain.com', 'spamdomain.net'];
});

add_filter('BSSO_extra_names', function () {
    return ['spambot', 'faker'];
});
```

## FAQ

	### Will you keep this plugin updated?
Yes, where possible, I will try my best to add additional checks if the attack vectors change.

## Reviews

	![](https://secure.gravatar.com/avatar/e48271a8d83a0b66e303b910f233d97d6c9a3ef289ebbc87389ce4463743d234?s=60&d=retro&r=g)### simple wonderful plugin, great support, and extensible
							[James Revillini](https://profiles.wordpress.org/jrevillini/)
								September 4, 2024
						I love this plugin and the ability to add additional problem bot names and domains has solved my issues. IMO any WooCommerce site needs this.
							![](https://secure.gravatar.com/avatar/79db4f3f68167121e814ee997acd3b2ac4e122181bd1b9e2259b43b0be0306f1?s=60&d=retro&r=g)### VERY SIMPLE PLUGIN TO BLOCK FAKE ORDERS – THANK YOU !
							[clitopwebsite](https://profiles.wordpress.org/clitopwebsite/)
								April 19, 2024
																2 replies
						VERY SIMPLE PLUGIN TO BLOCK FAKE ORDERS – THANK YOU ! But can you add a settings page to let us add the email addresses that we want to block ? Thank you !
							![](https://secure.gravatar.com/avatar/51668923ac314e89a00e130057108ac7abeaaac80e8c7462dbf319d36f73e77e?s=60&d=retro&r=g)### Great plugin until today when I get orders with email addresses that end by fake
							[catvetbeb](https://profiles.wordpress.org/catvetbeb/)
								October 29, 2022
																1 reply
						Great plugin until today when I get orders with email addresses that end by fakemail(dot)com

Any helpe please ?

Thank you.
							![](https://secure.gravatar.com/avatar/7855b1802efaac70def792f4b01f82c24b989fcb3f98690b0f13d95cd7010447?s=60&d=retro&r=g)### BEST & EASIEST PLUGIN TO BLOCK SPAM ORDERS
							[cacabe](https://profiles.wordpress.org/cacabe/)
								February 1, 2022
																2 replies
						BEST & EASIEST PLUGIN TO BLOCK SPAM ORDERS AS

bbbbb bbbbb
bbbbb
[ Fake email and address removed ]
BUT SAD:

This plugin hasn’t been tested with the latest 3 major releases of WordPress. It may no longer be maintained or supported and may have compatibility issues when used with more recent versions of WordPress.
							![](https://secure.gravatar.com/avatar/3eaec2daced26ebc1e364cdf227aaec0e6220afa7fc1777ad8de0e97b30a4877?s=60&d=retro&r=g)### Excellent simple plugin
							[Kristof Loyens Quantum Leap](https://profiles.wordpress.org/quantum-leap/)
								January 22, 2021
						Works as expected. Thank you author!
							![](https://secure.gravatar.com/avatar/03f451f696eee9a4d87f6d076b2edf4e2cc90a71eb4c1c4d6160f8eb6a8ddc31?s=60&d=retro&r=g)### Awesome Plugin – Read the code
							[DL](https://profiles.wordpress.org/dlinstedt/)
								January 21, 2021
						Thank you so much for this small snippet of code, I’ve had a minor problem with this bot attacking our site, and the code seems to fix it / prevent it from completing registration.   The code is clean, and simple and does the job.

		[Read all 10 reviews](https://wordpress.org/support/plugin/block-specific-spam-woo-orders/reviews/)

## Contributors & Developers

	“Block Specific Spam Woo Orders” is open source software. The following people have contributed to this plugin.

Contributors
		- ![](https://secure.gravatar.com/avatar/f9ce848abdad8d864fc19620619792c135eb6bf147d928563fdcae3b63d60aaf?s=32&d=mm&r=g)				[wigster](https://profiles.wordpress.org/wigster/)[Translate “Block Specific Spam Woo Orders” into your language.](https://translate.wordpress.org/projects/wp-plugins/block-specific-spam-woo-orders)

### Interested in development?

[Browse the code](https://plugins.trac.wordpress.org/browser/block-specific-spam-woo-orders/), check out the [SVN repository](https://plugins.svn.wordpress.org/block-specific-spam-woo-orders/), or subscribe to the [development log](https://plugins.trac.wordpress.org/log/block-specific-spam-woo-orders/) by [RSS](https://plugins.trac.wordpress.org/log/block-specific-spam-woo-orders/?limit=100&mode=stop_on_copy&format=rss).

## Changelog

	
#### 0.80

- Tested compatibility with WordPress 7.0.
- Tested compatibility with WooCommerce 10.8.1.
- Fixed WooCommerce active detection for network-activated WooCommerce on multisite.
- Declared WooCommerce as a plugin dependency for WordPress versions that support plugin dependencies.
- Improved email domain matching to compare against the billing email domain instead of arbitrary substrings.
- Hardened custom filter handling for invalid domain/name values.

#### 0.79

- Tested compatibility with WordPress 6.9
- Minor change to enforce case insensitive comparison of names.

#### 0.78

- Tested compatibility with WooCommerce 9.8.1
- Tested compatibility with WP 6.8

#### 0.77

- Added filters for extending blocked email domains and names.
- Tested compatibility with WooCommerce 9.2.3.

#### 0.76

- Tested compatibility with WP 6.6.1 and WC 9+.
- Added confirmation that this plugin is compliant with the new WooCommerce HPOS (High-Performance Order Storage) / Custom Order Tables (COT) systems.

#### 0.75

- Tested compatibility with WP 6.5.2 and WC.

#### 0.7

- Updated logic slightly to simplify checks. Names are now also array-based if people want to manually extend.
- Added ability to translate/localize the Spam Validation message with typical language translators (WPML, etc.).
- Confirmed support with WP 6.4 and the latest WooCommerce.

#### 0.6

- Added a new function to handle checking against multiple blocked domains, now including [“@fakemail”].
- Confirmed support with WP 6.1 and the latest WooCommerce.

#### 0.55

- Tested support with WP 6.0 and the latest WC – works fine.

#### 0.54

- Updated supported versions for WP and WooCommerce.

#### 0.53

- Added support for readme.txt changelogs.

#### 0.52

- Updated support for WooCommerce – no code changes, minor updates to comment wording.

#### 0.51

- Initial release.

---

