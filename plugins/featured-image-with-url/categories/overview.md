# Overview

*Category from Featured Image with URL documentation*

---

## Featured Image with URL

**Source:** [https://wordpress.org/plugins/featured-image-with-url/](https://wordpress.org/plugins/featured-image-with-url/)

## Description

	
### Featured Image with URL :

Featured Image with URL allows to use an external URL Images as Featured Image for your post, page & custom post types like WooCommerce Product. Includes support for Product Gallery (WooCommerce). So, using this plugin you can easily set featured image from url.

### Features:

- Set Featured image by URL for all post types including custom post types.
- WooCommerce Product Gallery by URLs.
- Image from URL for WooCommerce Product variation.
- Display Resized Images as per image sizes like “thumbnail”, “medium” or any custom-size
- Lightweight & Easy to use

### Credits:

This plugin based on the initial fork of [Featured Image by URL](https://wordpress.org/plugins/featured-image-by-url/) plugin. Thanks to the plugin author for the awesome work.

#### Contributing

- You can contribute to development of the plugin on [Github](https://github.com/harikrut/featured-image-with-url/).
- If you have found a bug/issue or have a feature request, then create issue on [Github](https://github.com/harikrut/featured-image-with-url/).
- Want to add a new language to Featured Image with URL? Swell! You can contribute via [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/featured-image-with-url).

### 1.0.5 – 2026-06-22

- **Changed:** Bump WordPress “tested up to” version 7.0

### 1.0.4 – 2024-12-06

- **Changed:** Bump WordPress “tested up to” version 6.9
- **Dev:** Add PHPCS and Plugin Check GitHub action

### 1.0.3 – 2024-12-09

- **Changed:** Bump WordPress “tested up to” version 6.7

### 1.0.2 – 2024-08-25

- **Added:** Update plugin assets GitHub action workflow.
- **Changed:** Bump WordPress “tested up to” version 6.6
- **Changed:** Bump WooCommerce “tested up to” version 9.2

### 1.0.1

- **Added:** Backward compatibility for the “Featured Image by URL” plugin.

#### 1.0.0

- Initial Version.

## Screenshots

	![Fill the URL field with the External Image URL and click the Preview button.](https://ps.w.org/featured-image-with-url/assets/screenshot-1.png?rev=3031179)Fill the URL field with the External Image URL and click the Preview button.

![The image will be displayed there.](https://ps.w.org/featured-image-with-url/assets/screenshot-2.png?rev=3031179)The image will be displayed there.

![WooCommerce Product Featured Image by External URL & Product Gallery from External URLs.](https://ps.w.org/featured-image-with-url/assets/screenshot-3.png?rev=3031179)WooCommerce Product Featured Image by External URL & Product Gallery from External URLs.

![Front-end view of the WooCommerce Product page, which utilizes the Featured Image with URL.](https://ps.w.org/featured-image-with-url/assets/screenshot-4.png?rev=3031179)Front-end view of the WooCommerce Product page, which utilizes the Featured Image with URL.

![Settings page (Settings > Featured Image with URL).](https://ps.w.org/featured-image-with-url/assets/screenshot-5.png?rev=3031179)Settings page (Settings > Featured Image with URL).

## Installation

	
#### This plugin can be installed directly from your site.

1. Log in and navigate to Plugins & Add New.
2. Type “Featured Image with URL” into the Search input and click the “Search” button.
3. Locate the “Featured Image with URL” in the list of search results and click “Install Now”.
4. Click the “Activate Plugin” link at the bottom of the install screen.

#### It can also be installed manually.

1. Download the “Featured Image with URL” plugin from WordPress.org.
2. Unzip the package and move to your plugins directory.
3. Log into WordPress and navigate to the “Plugins” screen.
4. Locate “Featured Image with URL” in the list and click the “Activate” link.

## FAQ

	### Is this plugin works for all themes?
**Maybe Not.** Plugin is works fine with most of themes but as you know Featured image is depends on themes So, This plugin may not work for some highly customized themes which are using non-extensible functions like 
```
wp_get_attachment_url
```

.

**Please feel free to create ticket Here if this plugin not working well for you. we would be happy to help you**

## Reviews

	![](https://secure.gravatar.com/avatar/efe0e1ec647bebdea84c741b3fe41a5ff22356a0a19fdf5b5bb0898c1107f552?s=60&d=retro&r=g)### Great plugin
							[X.Company](https://profiles.wordpress.org/hsultd/)
								April 29, 2026
						Simple and super practical.  It’s a must plugin in my sites.Easy setting, no bloat.

I wish there’s a “import all featured image url from fifu” so I can get rid of that bloated plugin.
							![](https://secure.gravatar.com/avatar/69b74a8b449201f3e9e4c562803d8ede0bb97bd5ad04af631f12d6a7cac673ea?s=60&d=retro&r=g)### It does exactly what it says in the tin
							[danielepais](https://profiles.wordpress.org/danielepais/)
								July 31, 2025
						Excellent plugin that is very useful when you need to run your images from a remote server.
							![](https://secure.gravatar.com/avatar/95e6cc11b0a9926dabdfb5405716a2deef91e58e8fde2b672d57ad40f26ddf08?s=60&d=retro&r=g)### Very Good plugin
							[parikshit4024](https://profiles.wordpress.org/parikshit4024/)
								July 16, 2025
						Excellent design
							![](https://secure.gravatar.com/avatar/b1c82d28508e3befa9c4d51aaedc0437099281e50f3e162976693540f9af2f1e?s=60&d=retro&r=g)### Amazing plugin. You can use it with WP All Import also.
							[Nicolas Lagios](https://profiles.wordpress.org/nicolaslagios/)
								June 2, 2025
						I want to let you know that it is the perfect plugin for remote images. The solution if you are using WP All Import and you get the images from lets say {photos/photo} (this returns all the images separated by comma), is to create two functions that creates the serialized data to use it in custom fields:

function get_featured_image($photos) {if (empty($photos)) return ‘NO_PHOTOS’;if (!is_array($photos)) {    $photos = explode(‘,’, $photos);}$first = trim($photos[0]);return serialize([    ‘img_url’ => $first,    ‘width’ => ”,    ‘height’ => ”]);}function get_gallery_images($photos) {if (empty($photos)) return ”;if (!is_array($photos)) {    $photos = explode(‘,’, $photos);}if (count($photos) < 2) return ”;$gallery = [];for ($i = 1; $i < count($photos); $i++) {    $url = trim($photos[$i]);    $gallery[] = [        ‘url’ => $url,        ‘width’ => ”,        ‘height’ => ”    ];}return serialize($gallery);}

Then you just create a custom field for the featured image with name “_harikrutfiwu_url” and value: [get_featured_image({photos/photo})]

And a custom field for gallery images with name “_harikrutfiwu_wcgallary” and value: [get_gallery_images({photos/photo})]

That’s all.

Happy Import with this amazing plugin.
							![](https://secure.gravatar.com/avatar/5cecd0cc97be07668dce230e08992c025921179458e17767dfebb39355dc6111?s=60&d=retro&r=g)### Works perfectly
							[basivnia](https://profiles.wordpress.org/basivnia/)
								April 20, 2025
						I rarely give reviews but this plugin is my lifesaver and it’s hard not to recommend it. I’m using it for couple of months now and it works perfectly on older and newer vesions of Wordpress. Simple, no 200 pages of settings, just install and use. The only thing that doesn’t work for me is Yoast SEO’s social media image preview which worked with older version of Wordpress but doesn’t work with the latest, sadly. Other than this little thing, it’s simple, small and working well plugin.
							![](https://secure.gravatar.com/avatar/b1cbd89a7569fc500b97c38fd9f93dbc3363b3c358d55c9a4aa49efd2f2cdb1a?s=60&d=retro&r=g)### saved $$ perfect for woocommerce
							[rahaprogramming](https://profiles.wordpress.org/rahaprogramming/)
								February 24, 2025
						note the woocommerce rest api keys for images:meta_gallery = {“key”: “_harikrutfiwu_wcgallary”,”value”: [{“url”: img_url} for img_url in product_images]}meta_featured = { #  thumbnails”key”: “_harikrutfiwu_url”,”value”: product_images[0]}meta_featured_alt = {“key”: “_knawatfibu_alt”,”value”: product_images[0]}meta_images.append(meta_featured)product_data = {“name”: product_title,”type”: “simple”,”regular_price”: str(product_price),”price”: str(product_price),”sku”: str(product_sku),”description”: product_description,”short_description”: product_short,”status”: “publish”,”categories”: category_ids,”meta_data”: meta_images,#”images”: images,”attributes”:attributes_list}

		[Read all 9 reviews](https://wordpress.org/support/plugin/featured-image-with-url/reviews/)

## Contributors & Developers

	“Featured Image with URL” is open source software. The following people have contributed to this plugin.

Contributors
		- ![](https://secure.gravatar.com/avatar/699e80d9c851843d7c185cd6786d7310dbd93a86dbef9f64731196b437eda96e?s=32&d=mm&r=g)				[Harikrut Technolab](https://profiles.wordpress.org/harikrut/)“Featured Image with URL” has been translated into 1 locale. Thank you to [the translators](https://translate.wordpress.org/projects/wp-plugins/featured-image-with-url/contributors) for their contributions.

[Translate “Featured Image with URL” into your language.](https://translate.wordpress.org/projects/wp-plugins/featured-image-with-url)

### Interested in development?

[Browse the code](https://plugins.trac.wordpress.org/browser/featured-image-with-url/), check out the [SVN repository](https://plugins.svn.wordpress.org/featured-image-with-url/), or subscribe to the [development log](https://plugins.trac.wordpress.org/log/featured-image-with-url/) by [RSS](https://plugins.trac.wordpress.org/log/featured-image-with-url/?limit=100&mode=stop_on_copy&format=rss).

---

