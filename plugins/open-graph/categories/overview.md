# Overview

*Category from Open Graph documentation*

---

## Open Graph

**Source:** [https://wordpress.org/plugins/opengraph/](https://wordpress.org/plugins/opengraph/)

## Description

	The [Open Graph protocol](https://ogp.me/) enables any web page to become a rich object in a social graph.  Most notably, this allows for these pages to be used with Facebook’s [Like Button](https://developers.facebook.com/docs/reference/plugins/like) and [Graph API](https://developers.facebook.com/docs/reference/api/) as well as within Twitter posts.

The Open Graph plugin inserts the Open Graph metadata into WordPress posts and pages, and provides a simple extension mechanism for other plugins and themes to override this data, or to provide additional Open Graph data.

This plugin does not directly add social plugins like the Facebook Like Button to your pages (though they’re pretty simple to add).  It will however make your pages look great when shared using those kinds of tools.

## FAQ

	### How do I configure the Open Graph plugin?
You don’t; there’s nothing to configure and there is no admin page.  By default, it will use whatever standard WordPress data it can to populate the Open Graph data.  There are very simple yet powerful filters you can use to modify or extend the metadata returned by the plugin, described below.
### How do I extend the Open Graph plugin?
There are two main ways to provide Open Graph metadata from your plugin or theme.  First, you can implement the filter for a specific property.  These filters are of the form 
```
opengraph_{name}
```

 where {name} is the unqualified Open Graph property name.  For example, if you have a plugin that defines a custom post type named “movie”, you could override the Open Graph ‘type’ property for those posts using a function like:

```
function my_og_type( $type ) {
    if ( get_post_type() == "movie" ) {
        $type = "movie";
    }
    return $type;
}
add_filter( 'opengraph_type', 'my_og_type' );
```

This will work for all of the core Open Graph properties.  However, if you want to add a custom property, such as ‘fb:admin’, then you would need to hook into the 
```
opengraph_metadata
```

 filter.  This filter is passed an associative array, whose keys are the qualified Open Graph property names.  For example:

```
function my_og_metadata( $metadata ) {
    $metadata['fb:admin'] = '12345,67890';
    return $metadata;
}
add_filter( 'opengraph_metadata', 'my_og_metadata' );
```

Note that you may need to define the RDFa prefix for your properties.  Do this using the 
```
opengraph_prefixes
```

 filter.
### How to enable/disable “strict mode”
The plugin populates the meta ‘name’ attribute alongside the ‘property’ attribute by default. Because both, the 
```
og:*
```

 and 
```
twitter:*
```

 names, are actually registered at https://wiki.whatwg.org/wiki/MetaExtensions, this stays compliant with the HTML5 spec. If you want to use a more strict way anyways, you can enable the scrict mode by adding the following line to your 
```
config.php
```

```
define( 'OPENGRAPH_STRICT_MODE', true );
```

## Reviews

	![](https://secure.gravatar.com/avatar/828f961ebbf8e24f66355160385314e16ad864132ef7b46002bd75dafde40157?s=60&d=retro&r=g)### Бұл қондырма жақсы істейді
							[Данияр НАУРЫЗ](https://profiles.wordpress.org/dnauryz/)
								March 10, 2025
						Иә, қарапайым әрі мықты қондырма. Бәрі көңілдегідей.
							![](https://secure.gravatar.com/avatar/e1e47d93778d48deed9aa9e18ee8ea488e4d4bb5bca389dd2455bbb4e54b33f7?s=60&d=retro&r=g)### Excellent and just do the job
							[Chise Hachiroku](https://profiles.wordpress.org/chise86/)
								October 29, 2024
						This plugin does what it says it does – it adds open graph metadata on website.

No configuration and do the work just as advertised. Simply excellent.
							![](https://secure.gravatar.com/avatar/f790d4d6de8b1345cc7111be40be7f6ec2d6c6f5fd94fc5ed3a5d3ef6c618b20?s=60&d=retro&r=g)### Funciona perfectamente bien
							[jvasquez1000](https://profiles.wordpress.org/jvasquez1000/)
								August 31, 2023
						El plugin funciona muy bien, solo lo instalé y pude compartir los productos de mi tienda en FB sin problema. Hasta ahorita todo bien.
							![](https://secure.gravatar.com/avatar/7e5a6869581c7f518721262d397b98c29ac58a5104a993d954acd7e5135f12b1?s=60&d=retro&r=g)### Easy Plugin to Add Open Graph
							[Generasi Muda Khonghucu Indonesia](https://profiles.wordpress.org/generasikhonghucu/)
								August 7, 2022
						Very easy to install and add ability to have open graph for my website
							![](https://secure.gravatar.com/avatar/4f8efc2ba7fd0c3de24056b58eb227a2ed47e69123342238cb7f267b3b3274de?s=60&d=retro&r=g)### Works amazing!!
							[MI](https://profiles.wordpress.org/seppier/)
								July 26, 2021
						Wow thank you for making this plugin!!!
I was so stressed about thumbnails errors but now I don’t need to worry about it! 
Thanks!
							![](https://secure.gravatar.com/avatar/b9e2cf33a19a5964e97eccbe63b3793eb2df9a757482bee9991ee4f49a24cff2?s=60&d=retro&r=g)### worked on my website when others wouldn’t
							[stargirl1](https://profiles.wordpress.org/stargirl1/)
								June 29, 2021
						Great plug-in! I just installed it last night and now the og:image (large image preview) is looking correct on my posts when shared to Facebook. I normally don’t leave reviews but noticed this plug-in had very few. It worked like a charm on my website to show the big preview when others (including some well known ones) wouldn’t. I was getting frustrated and wasting time googling plug-ins that didn’t work on my site for some reason. Finally this one worked! It does what it says, and is very simple to use, no configuration needed.

		[Read all 13 reviews](https://wordpress.org/support/plugin/opengraph/reviews/)

## Contributors & Developers

	“Open Graph” is open source software. The following people have contributed to this plugin.

Contributors
		- ![](https://secure.gravatar.com/avatar/f2f0944d8507601e15793d1032ff5f6ba1cd582bd0307cd86a9bf18956d658e5?s=32&d=mm&r=g)				[Will Norris](https://profiles.wordpress.org/willnorris/)
- ![](https://secure.gravatar.com/avatar/55be13f44d2f6b002041de75a3981568cfc3842eaa7a07e6a42f980539c129f3?s=32&d=mm&r=g)				[Matthias Pfefferle](https://profiles.wordpress.org/pfefferle/)[Translate “Open Graph” into your language.](https://translate.wordpress.org/projects/wp-plugins/opengraph)

### Interested in development?

[Browse the code](https://plugins.trac.wordpress.org/browser/opengraph/), check out the [SVN repository](https://plugins.svn.wordpress.org/opengraph/), or subscribe to the [development log](https://plugins.trac.wordpress.org/log/opengraph/) by [RSS](https://plugins.trac.wordpress.org/log/opengraph/?limit=100&mode=stop_on_copy&format=rss).

## Changelog

	Project maintained on github at [pfefferle/wordpress-opengraph](https://github.com/pfefferle/wordpress-opengraph).

### 2.0.2 (Feb 25, 2025)

- Add a constant to easily change the max number of images to be included in the OpenGraph meta tags.

### 2.0.1 (Dec 16, 2024)

- Fixed a warning
- Improved 
```
opengraph_max_images
```

 handling

### 2.0.0 (Dec 01, 2024)

- complete rewrite of image handling
- added support for block images
- added parsing of HTML 
```
<img>
```

 tags
- improved WordPress Coding Standards compliance

### 1.12.2 (Nov 17, 2024)

- optimized readme and updated dependencies

### 1.12.1 (Jul 15, 2024)

- fix fediverse account normalization

### 1.12.0 (Jul 3, 2024)

- support 
```
<meta name="fediverse:creator" />
```

### 1.11.3 (Jun 4, 2024)

- don’t return description for password protected posts

### 1.11.2 (Nov 13, 2023)

- stript tags from title, site-name and description

### 1.11.1 (Apr 03, 2023)

- fixed a typo

### 1.11.0 (Oct 21, 2021)

- fixed attachment issue
- fixed PHP 7.4 issue

### 1.10.0 (Apr 20, 2020)

- basic video support
- basic audio support

### 1.9.0 (Mai 14, 2019)

- show only featured image if available
- prefer header images over site-icon
- use avatar for profile pages
- fallback to description if title is empty
- better twitter 
```
card
```

 handling

### 1.8.3 (Jan 27, 2019)

- added escaping for the missing attributes

### 1.8.2 (Nov 21, 2018)

- fixed PHP warning issue: [https://wordpress.org/support/topic/php-warning-count-parameter-must-be-an-array-or-an-object-that-implements-c/](https://wordpress.org/support/topic/php-warning-count-parameter-must-be-an-array-or-an-object-that-implements-c/)

### 1.8.1 (Nov 19, 2016)

- change 
```
og:image
```

 to use the full size of image (props @torenord)

### 1.8.0 (Jan 29, 2016)

- fixed 
```
article:author
```

 property
- added 
```
article:modified_time
```
- added first category as 
```
article:section
```

### 1.7.0 (Jan 18, 2016)

- added “strict mode” setting
- better twitter:card handling
- basic twitter:creator support
- WordPress coding standard

### 1.6 (Dec 30, 2014)

- implemented 
```
get_the_archive_title
```

 and 
```
get_the_archive_description
```

 (new in WordPress 4.1)
- basic twitter cards support (thanks to elroyjetson)
- replace 
```
$post->post_title
```

 with 
```
get_the_title()
```

 (see #[17](https://github.com/willnorris/wordpress-opengraph/issues/17) for details)

### 1.5.1 (Nov 13, 2012)

- fix duplicate opengraph markup when used with jetpack plugin (for real)

### 1.5 (Nov 13, 2012)

- include descriptions on tag and category pages
- include profile metadata on author pages
- fix bug with 404 pages include extra og:image values
- general code cleanup (including removal of dependency on global vars)
- fix duplicate opengraph markup when used with jetpack plugin

### 1.4 (Aug 24, 2012)

- better default description
- include all images that are attached to a post, so that users can choose

which to use when sharing the page.  If the post has a post thumbnail, that

is still used as the primary image.

### 1.3 (May 21, 2012)

- add ‘opengraph_prefixes’ filter for defining additional prefixes
- add new basic properties, and remove some old ones.  This is a breaking

change for anyone that was using the old properties, but they can always be

added using the ‘opengraph_metadata’ filter. (see [f476552](https://github.com/willnorris/wordpress-opengraph/commit/f47655202d59c0e5b5032b4b86764f7a87813640) for details)
- updates to many default values, particularly for individual posts and pages

(thanks pfefferle)
- add basic support for array values (see [d987eb7](https://github.com/willnorris/wordpress-opengraph/commit/d987eb76e2da1431e5df3311fde3d9c2407b06f5))

### 1.2 (Feb 21, 2012)

- switch to newer RDFa prefix syntax rather than XML namespaces (props

pfefferle)

### 1.1 (Nov 7, 2011)

- fix function undefined error when theme doesn’t support post thumbnails

### 1.0 (Apr 24, 2010)

- initial public release

---

