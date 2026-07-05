# Uncategorized

*Category from Custom Post Type UI documentation*

---

## Example Instantsearch Widgets with WooCommerce Attributes.

**Source:** [https://docs.pluginize.com/article/example-instantsearch-widgets-with-woocommerce-attributes/](https://docs.pluginize.com/article/example-instantsearch-widgets-with-woocommerce-attributes/)

## Terminology

Indexed Algolia Object
  A complete representation of a WooCommerce product with all the details indexed by WP Search with Algolia and configured product details included by WP Search with Algolia Pro.
  
  Object property
  An individual part of the Algolia object. In our example, “sku” is the property, and “DABULLS” is the property value. Example: “sku”: “DABULLS”
  
  InstantSearch Widget
  A javascript powered UI element that allows users to refine their current search.

## Example indexed Algolia WooCommerce Product object

```
{
  "objectID": "73-0"
  "post_id": 73,
  "post_type": "product",
  "post_type_label": "Products",
  "post_title": "Men's Chicago Bulls Mitchell & Ness Red/Black Hardwood Classics Split Pullover Hoodie",
  "post_excerpt": "",
  "post_date": 1679941778,
  "post_date_formatted": "March 27, 2023",
  "post_modified": 1680013386,
  "comment_count": 1,
  "menu_order": 0,
  "post_author": {
    "user_id": 3,
    "display_name": "michael@webdevstudios.com",
    "user_url": "",
    "user_login": "michael@webdevstudios.com"
  },
  "images": {
    "thumbnail": {
      "url": "https://lab.algolia.test/wp-content/uploads/2023/03/black-chicago-bulls-hardwood-classics-split-pullover-hoodie_pi5176000_altimages_ff_5176737-8624c1a10-150x150.png",
      "width": 150,
      "height": 150
    }
  },
  "permalink": "https://lab.algolia.test/product/mens-chicago-bulls-mitchell-ness-red-black-hardwood-classics-split-pullover-hoodie/",
  "post_mime_type": "",
  "taxonomies": {
    "product_type": [
      "simple"
    ],
    "product_visibility": [
      "rated-5"
    ],
    "product_cat": [
      "Hoodies"
    ],
    "pa_size": [
      "Large",
      "Medium",
      "Small"
    ]
  },
  "taxonomies_hierarchical": {
    "product_cat": {
      "lvl0": [
        "Clothing"
      ],
      "lvl1": [
        "Clothing > Hoodies"
      ]
    }
  },
  "is_sticky": 0,
  "sku": "DABULLS",
  "short_description": "",
  "total_sales": 0,
  "total_ratings": 1,
  "average_rating": "5.00",
  "price": 109.99,
  "price_formatted": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>109.99</bdi></span>",
  "sale_price": 76.99,
  "sale_price_formatted": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>76.99</bdi></span>",
  "currency_symbol": "$",
  "content": "Your Chicago Bulls spirit is noticeable year-round when you sport this Mitchell & Ness Split pullover hoodie during cooler months. It features a vintage Hardwood Classics design with eye-catching Chicago Bulls graphics. Plus, a midweight construction keeps you warm from tip-off to the final whistle.",
  "record_index": 0,
}
```

## Product Categories

> The DOM container ID will need to match up with the container object value for the widget used

### DOM container markup

Place where you wish the widget to appear:

```
<div id="facet-product-categories"></div>
```

### Widget examples

#### refinementList

[refinementList Widget Docs](https://www.algolia.com/doc/api-reference/widgets/refinement-list/js/)

```
instantsearch.widgets.refinementList({
    container: '#facet-product-categories',
    attribute: 'taxonomies.product_cat',
    operator: 'and',
    limit: 15,
    sortBy: ['isRefined:desc', 'count:desc', 'name:asc'],
}),
```

#### menu

[menu Widget Docs](https://www.algolia.com/doc/api-reference/widgets/menu/js/)

```
instantsearch.widgets.menu({
    container: '#facet-product-categories',
    attribute: 'taxonomies.product_cat',
    sortBy: ['isRefined:desc', 'count:desc', 'name:asc'],
    limit: 10,
}),
```

#### hierarchicalMenu widget

> Note that we are using the taxonomies_hierarchical property from our example object, because that property represents a hierarchical taxonomy.

[hierarchicalMenu Widget Docs](https://www.algolia.com/doc/api-reference/widgets/hierarchical-menu/js/)

```
instantsearch.widgets.hierarchicalMenu({
    container: '#facet-product-categories',
    separator: ' > ',
    sortBy: ['count'],
    attributes: [
        'taxonomies_hierarchical.product_cat.lvl0',
        'taxonomies_hierarchical.product_cat.lvl1',
        'taxonomies_hierarchical.product_cat.lvl2'],
}),
```

## Price

> The DOM container ID will need to match up with the container object value for the widget used

### DOM container markup

Place where you wish the widget to appear:

```
<div id="facet-prices"></div>
```

### Widget examples

#### numericMenu

[numericMenu Widget Docs](https://www.algolia.com/doc/api-reference/widgets/numeric-menu/js/)

```
instantsearch.widgets.numericMenu({
    container: '#facet-prices',
    attribute: 'price',
    items    : [
        {label: 'All'},
        {label: 'Less than $40', end: 40},
        {label: 'Between $40 - $75', start: 40, end: 75},
        {label: 'More than $75$', start: 75},
    ],
}),
```

#### rangeInput

[rangeInput Widget Docs](https://www.algolia.com/doc/api-reference/widgets/range-input/js/)

```
instantsearch.widgets.rangeInput({
    container: '#facet-prices',
    attribute: 'price',
    max: 999, // You will want to set a sensible maximum around highest product price.
}),
```

#### rangeSlider

[rangeSlider Widget Docs](https://www.algolia.com/doc/api-reference/widgets/range-slider/js/)

```
instantsearch.widgets.rangeInput({
    container: '#facet-prices',
    attribute: 'price',
    max: 999, // You will want to set a sensible maximum around highest product price.
}),
```

---

## Single Algolia index for Multisite installs

**Source:** [https://docs.pluginize.com/article/single-algolia-index-for-multisite-installs/](https://docs.pluginize.com/article/single-algolia-index-for-multisite-installs/)

With the release of WP Search with Algolia Pro version 1.3.0, site owners now have the ability to push content from each site in the network into a single Algolia index. This type of functionality is useful if you’re perhaps wanting a global search of content from all sites in the network. This is particularly useful for Institutions or Universities where different departments all have their own sites.

With this documentation page, we want to outline important notes regarding this functionality.

> For data safety sake, we recommend starting with a fresh index instead of one that has already existing content.

> Note that this functionality is not available multiple separate websites to push into a single index. It’s meant for a single WordPress Multisite network.

1. WP Search with Algolia Pro needs to be network activated to enable the functionality
2. It overrides and customizes the 
```
objectID
```

 property to include the site ID from the multisite network. Example: 
```
1-2
```

 for main site “Sample Page”, 
```
12-342
```

 for some piece of content in site ID 12.
3. Each site needs to be public to be considered and indexed. This would be the “Search engine visibility” setting from “Settings > Reading” in your site options area.
4. Most of the settings pages will be moved from the individual sites’ admin areas, into the network admin.

## Search page settings

Due to how WP Search with Algolia interacts with the 
```
pre_get_posts
```

 hook for the “Use Algolia with the native WordPress search template” setting, this is disabled as an option. Instantsearch will need to be used so that Algolia’s Instantsearch library can pull from the index as it’s source.

## Meta data

As part of the development of the network-wide indexing, we had need to also include the ability to specify comma-separated metadata keys, per-post type, to index. Thus there is a new setting page in each site to provide the list of keys to fetch and include the values from. There is also the ability to set some defaults at the network level.

> Note: When meta fields are defined for an individual site, these settings will supersede any meta fields defined at the network level for the site in question.

## Autocomplete

Because of the nature of this feature, Autocomplete is set up to be one, network-wide configuration. The configuration settings are filterable, using the `wpswa_pro_network_wide_autocomplete_config` filter. Below is the out-of-box settings for the Autocomplete configuration

```
[
	'admin_name'      => 'All posts',
	'index_id'        => 'searchable_posts', // E.g. 'searchable_posts'.
	'index_name'      => Utils::get_network_index_name_prefix() . 'searchable_posts', // E.g. "prefix_$index_id".
	'label'           => 'All posts',
	'max_suggestions' => 5,
	'position'        => 1,
	'tmpl_suggestion' => 'autocomplete-post-suggestion'
]
```

> We recommend settings a prefix that will make it obvious that the index is the network-wide index.

## Network status page

You will be able to access a status page for the site by visiting the Network Admin area. There you will be presented with:

1. List of current sites, including site ID, name, path, and public visibility.
2. Total indexable sites, the amount currently indexed, the amount not currently indexed, amount excluded, and batch data for the sites.

When the network indexing process is started, each site eligible for indexing will be processed one at a time. By default, up to 100 posts will be processed at a time. This process runs asynchronously to avoid timeouts, but indexing will be interrupted if the user navigates away from the page once the process is started.

If the indexing process is interrupted, the option to resume indexing will be available. When indexing is resumed, sites that have already been fully indexed under the current network batch will be skipped and the process will start from the last site that was not fully indexed. Note that partial site resuming is not supported, so if a site is only partially indexed when indexing is interrupted, it will be re-indexed in its entirety when resuming.

## Indexing a single site within the network index

Individual sites can have their index rebuilt within the network index by visiting the Algolia Settings page for the site to be indexed. This operation is available to admin users, whereas the network-wide indexing settings are reserved for super admins.

---

> Given the volume potentially being indexed, and due to a performance regression in WP Search with Algolia Free version 2.6.0, we recommend upgrading to version 2.6.1 or later.

---

## WP Search with Algolia Pro Changelog

**Source:** [https://docs.pluginize.com/article/wp-search-with-algolia-pro-changelog/](https://docs.pluginize.com/article/wp-search-with-algolia-pro-changelog/)

Available for purchase at [WP Search with Algolia Pro on Pluginize.com](https://pluginize.com/plugins/wp-search-with-algolia-pro/)

## 1.6.1 – 2025-09-25

- Fixed: PHP compatibility issue for PHP7.4

## 1.6.0 – 2025-07-29

- Added: Initial support for WooCommerce Event to Algolia event sending. Requires WP Search with Algolia 2.10.2 or higher.
- Added: WooCommerce image size data to the indexed content.
- Added: Filter to prevent disabling typo tolerance for SKU properties.
- Added: Filter to allow for customizing network indexing AJAX settings, most specifically for custom timeout values.
- Updated: Network settings page match version seen in WP Search with Algolia.

## 1.5.2 – 2025-07-16

- Fixed: Updated license page code to fix issues around license deactivation and improved multisite support.

## 1.5.1 – 2025-06-30

- Fixed: Fatal errors in network admin settings if “network-wide indexing” isn’t enabled.

## 1.5.0 – 2025-05-27

- Added: Network-wide indexing, local/development installs will be allowed to index site content for testing purposes, even if “Search engine visibility” is toggled on. Hosting providers dev urls include: WPEngine, Pantheon, Pagely, WP Stagecoach, WPVIP.
- Added: `wpswa_pro_should_index_network_site` filter to allow for disabling of index-ability for a given site in network. Defaults to true.
- Added: Indexed status for sites in the Network-wide index list.

## 1.4.1 – 2024-05-29

- Fixed: Logic bug with indexing for network-wide indexing. More than what should have been was getting indexed.

## 1.4.0 – 2024-04-08

- Added: Confirmed compatibility with and require WordPress 6.5.
- Added: Support for “noindex” settings with The SEO Framework.
- Added: “Indexing complete” messaging for network wide indexing.
- Added: Network batch date to status table.
- Added: Filters to remove default attributes from Free plugin.
- Added: Ability to de-index sold out products.
- Added: Ability to not index “shop only” and “hidden” products.
- Added: Ability to index product weight and dimensions.
- Updated: Improved styling of the Network Admin status table.

## 1.3.4 – 2023-12-18

- Fixed: Small breaking change. Adjusted how product “rating” properties are stored, and now store average rating as integer.

## 1.3.3 – 2023-11-28

- Fixed: Issues around unchecking general “No index” metabox not tied to an SEO plugin.
- Added: Admin notice upon successful save for Meta Fields with Network Wide Indexing.

## 1.3.2 – 2023-11-20

- Updated: Fixed and improved logic around noindex determination for both Yoast SEO and SEOPress. This should help with accuracy.

## 1.3.1 – 2023-10-18

- Fixed: Mismatched option indexes for Rank Math and SEOPress “noindex” checks.

## 1.3.0 – 2023-10-16

- Added: SEOPress “noindex” support.
- Added: Ability to push content from all sites in a multisite network into one searchable index.
- Added: Meta fields UI for searchable content types when network wide enabled.

## 1.2.1 – 2023-06-22

- Fixed: Prevent fatal error if WooCommerce not available.

## 1.2.0 – 2023-05-01

- Added: Rank Math SEO “noindex” support.
- Added: Filter to disable our out-of-box “noindex” metabox.
- Added: Filter to limit Autocomplete and Instantsearch to just Woocommerce’s `product` post type.
- Added: Filter to disable automatic index settings push on settings page save.
- Added: Index cumulative averge rating alongside total ratings, if enabled.

## 1.1.0 – 2023-04-12

- Added: Initial support for fetching and including prices for variable products, and total variations.
- Fixed: Don’t add total sales to custom ranking if total sales aren’t set to be included.

## 1.0.0 – 2023-03-27

- Initial Release

---

## WP Search with Algolia Pro Behind The Scenes

**Source:** [https://docs.pluginize.com/article/wp-search-with-algolia-pro-behind-the-scenes/](https://docs.pluginize.com/article/wp-search-with-algolia-pro-behind-the-scenes/)

> Accurate for version 1.2.0

> This page is a work in progress

What all happens when you click “Save Changes” on the WooCommerce and SEO pages with WP Search with Algolia Pro?

First and perhaps most obvious, we save the options to the database, but there’s more.

We also push settings to your Algolia indexes with configuration changes. Depending on what settings you enabled, the next time you edit a product or do a bulk re-index, new attributes will be included with your products.

## Prices

Enabling the Product SKU, Price, Sale Price, Short description, total sales, and product rating all add those details to your product listings in Algolia. However, there’s a bit more that we do.

If you’ve included prices as part of what to index, we also add in your shop’s chosen currency symbol, along with a float version of your prices and a formatted version.

## Total sales

Including total sales of a product can help with ranking by popularity, but total sales are also something you don’t want public. Because of that, we automatically set total sales as irretrievable. This way no one can poke at the right spots during a search and get your sales numbers.

After that, we push total sales to be a custom ranking value, in descending order.

We also listen to your store and monitor when new sales occur. When you get a new product sale, we will do a sync for the product and update the total sales information in Algolia.

## Product rating

Product ratings can be used for filtering and faceting, allowing for users to specify a minimum value to show. Both total ratings and average rating get indexed

## SKUs

We believe that you should be able to provide a SKU value and if there’s a match, that should be the only result shown. To achieve that, we disable typo tolerance for SKUs in the Algolia settings.

## Searchable attributes

Attributes need to be searchable if you want them to be considered during a given search query. So we make sure to add the SKU and short description attributes to the searchable attributes list, both with unordered settings.

## Product only indexing

Out of box, any post type that’s considered as searchable gets pushed into the searchable posts index within Algolia. Now you can choose to limit the searchable posts to be just 
```
product
```

 post type and only those posts will be indexed.

## No Index settings

Out of box, we have a small metabox that we add to post editor screens that you can use to toggle whether or not that post should be indexed. If you check the checkbox and click publish/update for the post, that post should no longer be listed in Algolia

If you are using an SEO plugin and making use of their own 
```
noindex
```

 settings for your content, we will respect that and remove from the Algolia index as well.

Current supported SEO Plugins:

- [Yoast SEO](https://wordpress.org/plugins/wordpress-seo/)
- [All In One SEO](https://wordpress.org/plugins/all-in-one-seo-pack/)
- [Rank Math SEO](https://wordpress.org/plugins/seo-by-rank-math/)

Updated 12:51 pm

---

## EDD Product Layout

**Source:** [https://docs.pluginize.com/article/cptui-extended-block/edd-product-layout/](https://docs.pluginize.com/article/cptui-extended-block/edd-product-layout/)

![EDD Download layout and all available settings with version 1.11.x](https://docs.pluginize.com/wp-content/uploads/2022/10/edd-download-layout-1.11-1024x442.png)EDD Download layout and settings in Custom Post Type UI Extended version 1.11.x

## Options:

> Current as of version 1.11.0

- Choose specific products – Specific products you want to highlight
- Featured image toggle – Whether or not to show the post’s featured image
- Order selection: Ascending and descending – Whether to show the posts in the order of ascending: “1, 2, 3” or descending: “3, 2, 1”.
- Order By selection: Post Date, Post Title, Post ID – Which field to order the posts by

Updated Oct 25, 2022 2:50 PM

---

## Woo Product Layout

**Source:** [https://docs.pluginize.com/article/cptui-extended-block/woo-product-layout/](https://docs.pluginize.com/article/cptui-extended-block/woo-product-layout/)

![Woo Product layout and all available settings with version 1.11.x](https://docs.pluginize.com/wp-content/uploads/2022/10/woo-product-layout-1.11-1024x441.png)Woo Product layout and settings in Custom Post Type UI Extended version 1.11.x

## Options:

> Current as of version 1.11.0

- Choose specific products – Specific products you want to highlight
- Featured image toggle – Whether or not to show the post’s featured image
- Order selection: Ascending and descending – Whether to show the posts in the order of ascending: “1, 2, 3” or descending: “3, 2, 1”.
- Order By selection: Post Date, Post Title, Post ID – Which field to order the posts by

Updated Oct 25, 2022 2:53 PM

---

## Grid with Overlay Layout

**Source:** [https://docs.pluginize.com/article/cptui-extended-block/grid-with-overlay-layout/](https://docs.pluginize.com/article/cptui-extended-block/grid-with-overlay-layout/)

![Grid with Overlay layout and all available settings with version 1.11.x](https://docs.pluginize.com/wp-content/uploads/2022/10/grid-with-overlay-layout-1.11-1024x881.png)Grid with Overlay layout and settings in Custom Post Type UI Extended version 1.11.x

## Options:

> Current as of version 1.11.0

- Show post title toggle – Whether or not to show the post title
- Show excerpt toggle – Whether or not to show the excerpt
- Show read more toggle – Whether or not to show a read more link
- Show post date toggle – Whether or not to show the post’s date
- Choose specific posts – Specific posts you want to highlight
- Order By selection: Post Date, Post Title, Post ID – Which field to order the posts by
- Order selection: Ascending and descending – Whether to show the posts in the order of ascending: “1, 2, 3” or descending: “3, 2, 1”.
- Posts per page – How many posts to show per page.
- Choose by taxonomy terms – Choose which terms a post must have to be included. Varies based on associated taxonomies for the post type.

Updated Oct 25, 2022 3:07 PM

---

## Grid Layout

**Source:** [https://docs.pluginize.com/article/cptui-extended-block/grid-layout/](https://docs.pluginize.com/article/cptui-extended-block/grid-layout/)

![Grid layout and all available settings with version 1.11.x](https://docs.pluginize.com/wp-content/uploads/2022/10/grid-layout-1.11-1024x919.png)Grid layout and settings in Custom Post Type UI Extended version 1.11.x

## Options:

> Current as of version 1.11.0

- Featured image toggle – Whether or not to show the post’s featured image
- Show post title toggle – Whether or not to show the post’s title
- Show categories toggle – Whether or not to show associated categories
- Show excerpt toggle – Whether or not to show the post’s excerpt.
- Show read more toggle – Whether or not to show a read more link
- Choose specific posts – Specific posts you want to highlight
- Order By selection: Post Date, Post Title, Post ID – Which field to order the posts by
- Order selection: Ascending and descending – Whether to show the posts in the order of ascending: “1, 2, 3” or descending: “3, 2, 1”.
- Posts per page – How many posts to show per page.
- Choose by taxonomy terms – Choose which terms a post must have to be included. Varies based on associated taxonomies for the post type.

Updated Oct 25, 2022 3:11 PM

---

## Featured Plus Layout

**Source:** [https://docs.pluginize.com/article/cptui-extended-block/featured-plus-layout/](https://docs.pluginize.com/article/cptui-extended-block/featured-plus-layout/)

![Featured Plus layout and all available settings with version 1.11.x](https://docs.pluginize.com/wp-content/uploads/2022/10/featured-plus-layout.1.11-1024x502.png)Featured Plus layout and settings in Custom Post Type UI Extended version 1.11.x

## Options:

> Current as of version 1.11.0

- Layout toggle for left or top positioning
- Posts per page – How many posts to show per page.
- Choose by taxonomy terms – Choose which terms a post must have to be included. Varies based on associated taxonomies for the post type.

Updated Oct 25, 2022 3:13 PM

---

## Post Cards Layout

**Source:** [https://docs.pluginize.com/article/cptui-extended-block/post-cards-layout/](https://docs.pluginize.com/article/cptui-extended-block/post-cards-layout/)

![Post Cards layout and all available settings with version 1.11.x](https://docs.pluginize.com/wp-content/uploads/2022/10/post-cards-layout-1.11-1024x849.png)Post Cards layout and settings in Custom Post Type UI Extended version 1.11.x

## Options:

> Current as of version 1.11.0

- Layout toggle for Grid, Column, or Row
- Featured image toggle – Whether or not to show the post’s featured image
- Choose specific posts – Specific posts you want to highlight
- Order By selection: Post Date, Post Title, Post ID – Which field to order the posts by
- Order selection: Ascending and descending – Whether to show the posts in the order of ascending: “1, 2, 3” or descending: “3, 2, 1”.
- Posts per page – How many posts to show per page.
- Choose by taxonomy terms – Choose which terms a post must have to be included. Varies based on associated taxonomies for the post type.

Updated Oct 25, 2022 2:58 PM

---

## Post Slider Layout

**Source:** [https://docs.pluginize.com/article/cptui-extended-block/post-slider-layout/](https://docs.pluginize.com/article/cptui-extended-block/post-slider-layout/)

![Post Slider layout and all available settings with version 1.11.x](https://docs.pluginize.com/wp-content/uploads/2022/10/post-slider-layout-1.11-1024x488.png)Post slider layout and settings in Custom Post Type UI Extended version 1.11.x

## Options:

> Current as of version 1.11.0

- Choose specific posts – Specific posts you want to highlight
- Slider height field – How tall should the slider output be
- Post title toggle – Whether or not to include post title
- Slider bullet toggle – Whether or not to show bullet pagination
- Autoplay toggle – Whether or not the slideshow should autoplay

Updated 2:57 pm

---

## Taxonomy List Layout

**Source:** [https://docs.pluginize.com/article/cptui-extended-block/taxonomy-list-layout/](https://docs.pluginize.com/article/cptui-extended-block/taxonomy-list-layout/)

![Taxonomy List layout and all available settings with version 1.11.x](https://docs.pluginize.com/wp-content/uploads/2022/10/taxonomy-list-layout-1.11-1024x429.png)Taxonomy list layout and settings in Custom Post Type UI Extended version 1.11.x

## Options:

> Current as of version 1.11.0

- List type selection: Unordered, ordered
- Choose taxonomy terms. Varies based on associated taxonomies for post type.

Updated Oct 25, 2022 2:54 PM

---

## How to exclude post type from search but retain taxonomy archive listing

**Source:** [https://docs.pluginize.com/article/exclude-post-type-from-search-but-retain-taxonomy-archive-listing/](https://docs.pluginize.com/article/exclude-post-type-from-search-but-retain-taxonomy-archive-listing/)

If you have set a post type to be excluded from search, you may have noticed that this has an odd drawback of also excluding the post type from any term archives for custom taxonomies as well.

This is a detail coming from how WordPress core handles the query for the term archive. If you’re needing to retain the exclusion from search functionality, while still retaining archive inclusion, it is better to make use of the code below.

First you’ll want to re-set “Exclude from Search” back to 
```
false
```

 in your post type settings. Next you’ll want to modify and add the code below to your active theme’s 
```
functions.php
```

 file.

```
function my_cptui_custom_exclude_post_type_search( $query ) {
	// We do not want unintended consequences.
	if ( is_admin() || ! $query->is_main_query() ) {
		return;
	}

	if ( is_search() ) {
		// Get an array of all searchable post types.
		$searchable_types = get_post_types( array( 'exclude_from_search' => false ) );
		// Unset the one we don't want to be searchable
		unset( $searchable_types['movie'] );

		$query->set(
			'post_type',
			$searchable_types
		);
	}
}
add_filter( 'pre_get_posts', 'my_cptui_custom_exclude_post_type_search' );
```

Here we are hooking into the pre_get_posts filter, and grabbing all of the searchable post type slugs, and then unsetting 
```
movie
```

 as our example post type. This solves our issue of not being able to search “movie” post types, but still allow them as part of term archives associated with 
```
movie
```

 .

Updated Dec 9, 2022 8:40 PM

---

## Customizing permalinks

**Source:** [https://docs.pluginize.com/article/customizing-permalinks/](https://docs.pluginize.com/article/customizing-permalinks/)

When it comes to permalink customization, outside of slugs for the content types themselves, we do not have any official or formal settings for customizing permalink structures.

This is because with the plugin, we’ve aimed to focus on just what can be set and created via the 
```
register_post_type(
```

) and 
```
register_taxonomy()
```

 functions.

Because of that, we recommend the free [Permalink Manager Lite](https://wordpress.org/plugins/permalink-manager/) plugin or if you need even more customization, their [Pro version](https://permalinkmanager.pro/)

We have reviewed their functionality and feel like they would be a great fit to meet almost any permalink structure you’re looking to achieve, and successfully.

Updated Dec 9, 2022 8:35 PM

---

## Recommended Plugins

**Source:** [https://docs.pluginize.com/article/recommended-plugins/](https://docs.pluginize.com/article/recommended-plugins/)

We recommend these plugins to be used in conjunction with Custom Post Type UI to further enhance your website.

## Permalinks

Customizing permalinks to formats you’re wanting.

> Permalink Manager Lite

## Meta Data

> Advanced Custom Fields (ACF)

> CMB2

## Content Type Management

Migrating post content between post types and administration

> Post Type Switcher

> Post Types Order

> Taxonomy Switcher

## General debugging

Query monitor can be used to inspect queries being made, templates being used for given permalinks, and other very useful information.

> Query Monitor

Updated Dec 9, 2022 8:42 PM

---

## Load CPTUI Settings Data From File

**Source:** [https://docs.pluginize.com/article/load-cptui-settings-data-from-file/](https://docs.pluginize.com/article/load-cptui-settings-data-from-file/)

In [Save CPTUI settings data to file](https://docs.pluginize.com/article/save-cptui-settings-data-to-file/) we showed how to automatically save post type and taxonomy data to a local file stored in your active theme, every time you save a post type or taxonomy.

However, we never showed how to potentially load those data files and let that data handle the registration of content types. When the documentation post was originally written, the functionality to properly import was not in place. Since then, Custom Post Type UI (CPTUI) has evolved and we have the ability to successfully pull the data back in.

Below are some useful functions and callbacks to read and import local JSON files and pass them into the CPTUI registration process.

```
/**
 * Load local post type JSON data.
 *
 * @return string $value overriding content for CPTUI
 */
function pluginize_load_local_cptui_post_type_data( $data ) {

	$loaded = pluginize_load_local_cptui_data( 'cptui_post_type_data.json' );

	if ( false === $loaded ) {
		return $data;
	}

	$data_new = json_decode( $loaded, true );

	if ( $data_new ) {
		return $data_new;
	}

	return $data;
}
add_filter( 'cptui_post_types_override', 'pluginize_load_local_cptui_post_type_data' );

/**
 * Load local taxonomy JSON data.
 *
 * @return string $value overriding content for CPTUI
 */
function pluginize_load_local_cptui_taxonomies_data( $data ) {
	$loaded = pluginize_load_local_cptui_data( 'cptui_taxonomy_data.json' );

	if ( false === $loaded ) {
		return $data;
	}

	$data_new = json_decode( $loaded, true );

	if ( $data_new ) {
		return $data_new;
	}

	return $data;
}
add_filter( 'cptui_taxonomies_override', 'pluginize_load_local_cptui_taxonomies_data' );

/**
 * Helper function to load a specific file.
 * @param string $file_name Name of the local JSON file.
 *
 * @return false|string
 */
function pluginize_load_local_cptui_data( $file_name = '' ) {
	if ( empty( $file_name ) ) {
		return false;
	}
	$theme_dir = get_stylesheet_directory() . '/cptui_data';
	$path      = $theme_dir . '/' . $file_name;

	return file_get_contents( $path );
}
```

Updated Dec 9, 2022 8:41 PM

---

## Shortcode ID attribute

**Source:** [https://docs.pluginize.com/article/shortcode-id-attribute/](https://docs.pluginize.com/article/shortcode-id-attribute/)

Have you wondered what this “Shortcode ID” value is?

If you’ve looked at the Extended block, it appeared as a read-only field. If you’re using the Shortcode Builder, it appeared as a shortcode attribute. In both cases these are self generated but the purpose of them isn’t necessarily clear.

## Primary purpose for the Shortcode ID

The primary thing that CPTUI-Extended uses the value for is to provide a unique value used with the 
```
paginate_links()
```

 function that we use for blocks that have pagination available. This helps make sure that we only move to the “next page” for the contents in our layout. For example, if you had an Extended layout shown in a blog post, and clicked for the next page in the layout, this prevents WordPress from also navigating to page 2 of your blog archive.

## Secondary uses for the Shortcode ID

Since we append the shortcode ID value to our wrapping markup, this also allows for unique markup attributes that could be used with your CSS and Javascript. If you need to make some tweaks to a specific layout, say it’s breaking somehow, this would allow you to affect only one instance.

You can also use it to perform conditional logic if you’re are doing any [template customization](https://docs.pluginize.com/article/customizing-shortcode-templates-with-cptui-extended/). For example, if you’re using a layout for multiple content types, but only one specific instance of the layout needs custom field output, you could check for that shortcode ID being the current displayed instance and display out appropriately.

> If you can think of other use cases for a unique numeral value, let us know and we can add to our list.

Updated Dec 9, 2022 8:42 PM

---

## Single Post Type Layout

**Source:** [https://docs.pluginize.com/article/cptui-extended-block/single-post-type-layout/](https://docs.pluginize.com/article/cptui-extended-block/single-post-type-layout/)

![Single Post Type layout and all available settings with version 1.11.x](https://docs.pluginize.com/wp-content/uploads/2022/10/single-post-type-layout-1.11-1024x382.png)Single post type layout and settings in Custom Post Type UI Extended version 1.11.x

## Options

- Featured image toggle – Whether or not to show the featured image
- Post selection: Available posts in the chosen post type

Updated Oct 25, 2022 2:43 PM

---

## List Layout

**Source:** [https://docs.pluginize.com/article/cptui-extended-block/list-layout/](https://docs.pluginize.com/article/cptui-extended-block/list-layout/)

![List layout and all available settings with version 1.11.x](https://docs.pluginize.com/wp-content/uploads/2022/10/list-layout-1.11-1024x853.png)List layout and settings in Custom Post Type UI Extended version 1.11.x

## Options:

> Current as of version 1.11.0

- Excerpt toggle
- List type selection: Unordered, ordered
- Order selection: Ascending and descending – Whether to show the posts in the order of ascending: “1, 2, 3” or descending: “3, 2, 1”.
- Order By selection: Post Date, Post Title, Post ID – Which field to order the posts by
- Posts per page – How many posts to show per page.
- Choose specific posts – Specific posts you want to highlight
- Choose by taxonomy terms – Choose which terms a post must have to be included. Varies based on associated taxonomies for the post type.

Updated Oct 25, 2022 2:44 PM

---

## Default Layout

**Source:** [https://docs.pluginize.com/article/cptui-extended-block/default-layout/](https://docs.pluginize.com/article/cptui-extended-block/default-layout/)

![Default layout and all available settings with version 1.11.x](https://docs.pluginize.com/wp-content/uploads/2022/10/default-layout-1.11-1024x730.png)Default layout and settings in Custom Post Type UI Extended version 1.11.x

## Options:

> Current as of version 1.11.0

- Choose specific posts – Specific posts you want to highlight
- Posts per page – How many posts to show per page.
- Featured image toggle – Whether or not to show the post’s featured image
- Order selection: Ascending and descending – Whether to show the posts in the order of ascending: “1, 2, 3” or descending: “3, 2, 1”.
- Order By selection: Post Date, Post Title, Post ID – Which field to order the posts by
- Choose by taxonomy terms – Choose which terms a post must have to be included. Varies based on associated taxonomies for the post type.

Updated Oct 25, 2022 2:51 PM

---

## Custom Post Type UI Extended Block

**Source:** [https://docs.pluginize.com/article/cptui-extended-block/](https://docs.pluginize.com/article/cptui-extended-block/)

Starting with version 1.7.0, Custom Post Type UI Extended formally moved in to the block era for WordPress.

Initial version of the block included a small set of attributes for just the “Default” layout. With the following release, version 1.8.0, more of the attributes were added to the “Default” layout, while also beginning the “List” layout and including a completed “Single Post Type” layout option.

With each subsequent release, we will continue adding more layouts, continuing started layouts, and finishing them as well. This process will continue until we have all available options completed for each available layout.

![Screenshot of a brand new Custom Post Type UI Extended block selected](https://docs.pluginize.com/wp-content/uploads/2022/10/cptui-extended-block-default-state-1024x518.png)Brand new CPTUI-Extended block added to the editor.

## Post Type

Field used to choose the post type to act on.

## Layout

Field used to choose which layout to use.

Customized templates should not be affected and still used as expected.

## Title

Title to show above the layout of the chosen block.

## Available Layouts

> Current as of version 1.11.0

### Default

Options:

- Choose specific posts
- Posts per page
- Featured image toggle
- Order selection: Ascending and descending
- Order By selection: Post Date, Post Title, Post ID
- Choose by taxonomy terms. Varies based on associated taxonomies for post type

Read more at the [Default layout page](https://docs.pluginize.com/article/cptui-extended-block/default-layout/).

### List

Options:

- Excerpt toggle
- List type selection: Unordered, ordered
- Order selection: Ascending and descending
- Order By selection: Post Date, Post Title, Post ID
- Posts per page
- Choose specific posts
- Choose by taxonomy terms. Varies based on associated taxonomies for post type

Read more at the [List layout page](https://docs.pluginize.com/article/cptui-extended-block/list-layout/).

### Single Post Type

Options:

- Featured image toggle
- Post selection: Available posts in the chosen post type

Read more at the [Single Post Type layout page](https://docs.pluginize.com/article/cptui-extended-block/single-post-type-layout/).

### Taxonomy List

Options:

- List type selection: Unordered, ordered
- Choose taxonomy terms. Varies based on associated taxonomies for post type.

Read more at the [Taxonomy List layout page](https://docs.pluginize.com/article/cptui-extended-block/taxonomy-list-layout/)

### Post Slider

Options:

- Choose specific posts
- Slider height field
- Post title toggle
- Slider bullet toggle
- Autoplay toggle

Read more at the [Post Slider layout page](https://docs.pluginize.com/article/cptui-extended-block/post-slider-layout/)

### Post Cards

Options:

- Layout toggle for Grid, Column, or Row
- Featured image toggle
- Choose specific posts
- Order By selection: Post Date, Post Title, Post ID
- Order selection: Ascending and descending
- Posts per page
- Choose by taxonomy terms. Varies based on associated taxonomies for post type

Read more at the [Post Cards layout page](https://docs.pluginize.com/article/cptui-extended-block/post-cards-layout/)

### Featured Plus

Options:

- Layout toggle for left or top positioning
- Posts per page
- Choose by taxonomy terms. Varies based on associated taxonomies for post type

Read more at the [Featured Plus layout page](https://docs.pluginize.com/article/cptui-extended-block/featured-plus-layout/)

### Grid

Options:

- Featured image toggle
- Show post title toggle
- Show categories toggle
- Show excerpt toggle
- Show read more toggle
- Choose specific posts
- Order By selection: Post Date, Post Title, Post ID
- Order selection: Ascending and descending
- Posts per page
- Choose by taxonomy terms. Varies based on associated taxonomies for post type

Read more at the [Grid layout page](https://docs.pluginize.com/article/cptui-extended-block/grid-layout/)

### Grid with Overlay

Options:

- Show post title toggle
- Show excerpt toggle
- Show read more toggle
- Show post date toggle
- Choose specific posts
- Order By selection: Post Date, Post Title, Post ID
- Order selection: Ascending and descending
- Posts per page
- Choose by taxonomy terms. Varies based on associated taxonomies for post type

Read more at the [Grid with Overlay layout page](https://docs.pluginize.com/article/cptui-extended-block/grid-with-overlay-layout/)

### Woo Product

> Only available if you have WooCommerce installed.

Options:

- Choose specific products
- Show featured image toggle
- Order selection: Ascending and descending
- Order By selection: Post Date, Post Title, Post ID

Read more at the [Woo Product layout page](https://docs.pluginize.com/article/cptui-extended-block/woo-product-layout/)

### EDD Download

> Only available if you have Easy Digital Downloads installed.

Options:

- Choose specific products
- Show featured image toggle
- Order selection: Ascending and descending
- Order By selection: Post Date, Post Title, Post ID

Read more at the [EDD Download layout page](https://docs.pluginize.com/article/cptui-extended-block/edd-product-layout/)

## Global attributes

### Shortcode ID

Automatically generated and read only. This value gets used with pagination, where available.

Updated Oct 25, 2022 3:16 PM

---

## Custom Post Types and Divi

**Source:** [https://docs.pluginize.com/article/custom-post-types-and-divi/](https://docs.pluginize.com/article/custom-post-types-and-divi/)

## Customizing Search Module

By default, the Divi Search Module only searches posts and pages, depending on the settings configured in the module itself. The code snippet below allows to retain those settings, but also add in the post types registered with Custom Post Type UI to be considered with the search as well.

```
function cptui_docs_include_cptui_in_divi_search_module( $query ) {
	if ( is_admin() || ! $query->is_main_query() ) {
		return;
	}

	if ( $query->is_search() ) {
		$post_types = [];
		$cptui_types = cptui_get_post_type_slugs();

		if ( isset( $_GET['et_pb_searchform_submit'] ) ) {
			// Respect the $_GET parameters set by Divi
			if ( ! isset( $_GET['et_pb_include_posts'] ) && ! isset( $_GET['et_pb_include_pages'] ) ) {
				$post_types = array( 'post' );
			}
			if ( isset( $_GET['et_pb_include_pages'] ) ) {
				$post_types = array( 'page' );
			}
			if ( isset( $_GET['et_pb_include_posts'] ) ) {
				$post_types[] = 'post';
			}
			// Merge in our own types as well.
			$post_types = array_merge( $post_types, $cptui_types );
		}
		$query->set( 'post_type', $post_types );
	}

	return $query;
// We set the priority to 11 so that our modifications run after Divi's
}
add_action( 'pre_get_posts', 'cptui_docs_include_cptui_in_divi_search_module', 11 );
```

## Blog Module

At the time of this docs article, we have yet to find a workable way to get taxonomy term output included for listing of custom post types, without attempting to modify Divi core files.

Updated Dec 9, 2022 8:35 PM

---

## Custom Post Type UI and WP-CLI

**Source:** [https://docs.pluginize.com/article/custom-post-type-ui-and-wp-cli/](https://docs.pluginize.com/article/custom-post-type-ui-and-wp-cli/)

If you weren’t aware, you can actually do a good amount of of administration and site management via your computer terminal console with a tool like [WP-CLI](https://wp-cli.org/). We are not going to go into all of the powerful things it can do out of box, as that’s a documentation site on its own. We are going to highlight the fact that it was made extensible so that plugin authors could add in their own commands to do various tasks.

In October 2018, with the 1.6.0 release of Custom Post Type UI, we added WP-CLI commands for importing and exporting your content type settings. This is what we will highlight here.

As of version 1.12.0, there are two WP-CLI commands available to you, which you can access with the 
```
wp cli
```

 command in your terminal. They are 
```
import
```

 and 
```
export
```

 and each has two flags available to it.

The first flag specifies the content type, is 
```
--type
```

 with “post_type” and “taxonomy” available. This flag applies to both 
```
import
```

 and 
```
export
```

, and indicates which option we will be importing JSON data into.

The second flag, specific to importing, is 
```
--data-path
```

. This is used to specify where the saved JSON data is located at, so that it can be read and processed. For exporting, the flag is 
```
--dest-path
```

 which indicates where to put and save the JSON content as a file.

> Both --data-path and --dest-path are relative to your current working directory in your terminal prompt.

## Examples

### Exporting post type settings to a cptui-post-types.json file

```
wp cptui export --type=post_type --dest-path=cptui-post-types.json
```

### Importing cptui-post-types.json to an install

```
wp cptui import --type=post_type --data-path=cptui-post-types.json
```

> To work with taxonomies, just change the --type to use taxonomy instead of post_type

Updated Dec 9, 2022 8:33 PM

---

## Custom Post Type UI Hooks

**Source:** [https://docs.pluginize.com/article/custom-post-type-ui-hooks/](https://docs.pluginize.com/article/custom-post-type-ui-hooks/)

> Current as of version 1.12.0. Reach out if you’ve found one we’re missing.

Custom Post Type UI has 107 action and filter hooks available for usage. Some may prove more useful than others. Some are used primarily for integration with [Custom Post Type UI Extended](https://pluginize.com/plugins/custom-post-type-ui-extended/). Would love to hear how you’re using any of them.

This is also a work in progress as we continue getting descriptions and hook parameters documented.

## Registration file

This is the custom-post-type-ui.php file where all the actual registration occurs for your post types and taxonomies.

### Action hooks

7 available

```
cptui_extra_menu_items
```

```
cptui_loaded
```

```
cptui_init
```

```
cptui_pre_register_post_types
```

```
cptui_post_register_post_types
```

```
cptui_pre_register_taxonomies
```

```
cptui_post_register_taxonomies
```

### Filter hooks

13 available

```
cptui_admin_notice
```

```
cptui_disable_cpt
```

```
cptui_disable_tax
```

```
cptui_disable_{$post_type['name']}_cpt
```

```
cptui_disable_{$tax['name']}_tax
```

```
cptui_get_tabs
```

```
cptui_map_meta_cap
```

```
cptui_post_types_override
```

```
cptui_pre_register_post_type
```

```
cptui_pre_register_taxonomy
```

```
cptui_required_capabilities
```

```
cptui_taxonomies_override
```

```
cptui_user_supports_params
```

## Post Types page

### Action hooks

8 available

```
cptui_after_delete_post_type
```

```
cptui_after_update_post_type
```

```
cptui_before_delete_post_type
```

```
cptui_before_update_post_type
```

```
cptui_below_post_type_select
```

```
cptui_below_post_type_tab_menu
```

```
cptui_inside_post_type_wrap
```

```
cptui_post_type_after_fieldsets
```

### Filter hooks

17 available

```
cptui_attach_taxonomies_to_post_type
```

```
cptui_convert_post_type_posts
```

```
cptui_current_post_type
```

```
cptui_filtered_post_type_post_global_arrays
```

```
cptui_filtered_post_type_post_global_strings
```

```
cptui_get_taxonomies_for_post_types
```

```
cptui_post_type_delete_type
```

```
cptui_post_type_deleted
```

```
cptui_post_type_slug_exists
```

```
cptui_post_type_submit_add
```

```
cptui_post_type_submit_delete
```

```
cptui_post_type_submit_edit
```

```
cptui_post_type_submit_select
```

```
cptui_post_type_update_save
```

```
cptui_post_types_dropdown_options
```

```
cptui_pre_save_post_type
```

```
cptui_reserved_post_types
```

## Taxonomies page

### Action hooks

8 available

```
cptui_after_delete_taxonomy
```

```
cptui_after_update_taxonomy
```

```
cptui_before_delete_taxonomy
```

```
cptui_before_update_taxonomy
```

```
cptui_below_taxonomy_select
```

```
cptui_below_taxonomy_tab_menu
```

```
cptui_inside_taxonomy_wrap
```

```
cptui_taxonomy_after_fieldsets
```

### Filter hooks

15 available

```
cptui_attach_post_types_to_taxonomy
```

```
cptui_convert_taxonomy_terms
```

```
cptui_current_taxonomy
```

```
cptui_get_post_types_for_taxonomies
```

```
cptui_pre_save_taxonomy
```

```
cptui_reserved_taxonomies
```

```
cptui_taxonomies_dropdown_options
```

```
cptui_taxonomy_delete_tax
```

```
cptui_taxonomy_deleted
```

```
cptui_taxonomy_slug_exists
```

```
cptui_taxonomy_submit_add
```

```
cptui_taxonomy_submit_delete
```

```
cptui_taxonomy_submit_edit
```

```
cptui_taxonomy_submit_select
```

```
cptui_taxonomy_update_save
```

## Listings page

### Action hooks

7 available

```
cptui_inside_listings_wrap
```

```
cptui_before_post_type_listing
```

```
cptui_after_post_type_listing
```

```
cptui_no_post_types_listing
```

```
cptui_before_taxonomy_listing
```

```
cptui_after_taxonomy_listing
```

```
cptui_no_taxonomies_listing
```

### Filter hooks

0 available

## Tools page

### Action hooks

3 available
2 deprecated

```
cptui_inside_tools_wrap
```

```
cptui_tools_sections
```

```
cptui_after_site_info
```

### #

If you find any of these, please update to appropriate hook.

```
cptui_inside_importexport_wrap
```

```
cptui_import_export_sections
```

### Filter hooks

10 available

```
cptui_tools_tabs
```

```
cptui_map_meta_cap
```

```
cptui_user_supports_params
```

```
cptui_third_party_post_type_import
```

```
cptui_third_party_taxonomy_import
```

```
cptui_post_type_import_delete_save
```

```
cptui_post_type_import_update_save
```

```
cptui_taxonomy_import_delete_save
```

```
cptui_taxonomy_import_update_save
```

```
cptui_debug_email_submit_button
```

## Support page

### Action hooks

3 available

```
cptui_main_page_before_faq
```

```
cptui_main_page_custom_questions
```

```
cptui_main_page_after_faq
```

### Filter hooks

0 available

## Utility functions

9 available

These are hooks available in the various functions from our [utility.php file](https://github.com/WebDevStudios/custom-post-type-ui/blob/master/inc/utility.php)

```
cptui_post_form_action
```

```
cptui_get_post_type_data
```

```
cptui_get_taxonomy_data
```

```
cptui_get_post_type_exists
```

```
cptui_get_taxonomy_exists
```

```
cptui_ads
```

```
cptui_admin_notice
```

```
cptui_custom_error_message
```

```
cptui_is_new_install
```

## Debug information page

### Action hooks

2 available

```
cptui_custom_debug_info
```

```
cptui_after_debug_email_sent
```

### Filter hooks

1 available

```
cptui_debug_email_subject
```

## About page

### Action hooks

4 Available

```
cptui_main_page_start
```

```
cptui_main_page_after_header
```

```
cptui_main_page_before_changelog
```

```
cptui_main_page_extra_notes
```

### Filter hooks

0 available

Updated Dec 9, 2022 8:34 PM

---

## Understanding and customizing HTML classes added to shortcode output

**Source:** [https://docs.pluginize.com/article/customizing-cptui-class-output/](https://docs.pluginize.com/article/customizing-cptui-class-output/)

## Reasons you may want to customize classes

CPTUI-Extended outputs a number of classes on its markup already, but there may be times or cases where they are not enough, or you are trying to match up the markup to existing styles on your site, and those styles are looking for specific classes.

With the filters outlined below, you can safely include those new classes without having to edit CPTUI-Extended templates yourself.

## Wrapper classes

These are the classes that get applied to the

```
<div>
```

 that we wrap all of a shortcode’s markup in. #’s indicate a post ID will be in that place

### Default classes

- ```
cptui-shortcode
```
- ```
cptui-shortcode-#
```
- shortcode slug ex. default-shortcode

### Customizing the wrapper classes.

```
/** 
 * Callback to customize CPTUI-Extended classes.
 * 
 * @param string $classes   Current string of classes to output with shortcode wrapper.
 * @param string $shortcode The current shortcode layout type being rendered. 
 */ 
function pluginize_customize_shortcode_classes( $classes, $shortcode ) {
	// Add a class for all shortcodes' output.
	$classes .= ' my-demo-class';

	// Add an extra class for just the default shortcode.
	if ( 'default_shortcode' === $shortcode ) {
	    $classes .= ' my-default-shortcode-demo-class';
	}

	return $classes;
}
add_filter( 'cptui_shortcode_classes', 'pluginize_customize_shortcode_classes', 10, 2 );
```

### Notes

Things to keep in mind here is that the

```
$classes
```

 parameter is going to be a string that needs concatenated on. If you completely overwrite the variable, then only your specified classes will get returned. You will also want to check and confirm if you need to include spaces in your concatenation, so that you don’t get something like “default-shortcodemy-demo-class”.

The shortcode parameter is available so that you can customize the classes conditionally. If you only want the classes to be appended for certain layout types, check to see if the current shortcode is the one you’re targeting, and proceed from there.

## Individual Posts classes

These are the classes applied to each item found in the resulting query. They will be useful for making style changes to the individual items.

### Default classes

- ```
cptui-entry
```
- Results of the 
```
get_post_class()
```

 function.

### Customizing the item classes

```
/**
 * Callback to customize classes for individual items in CPTUI-Extended output.
 * 
 * @param string $classes             String of classes already set for a given item.
 * @param array $shortcode_attributes Array of the attributes provided for the current
 *                                    shortcode being rendered.
 */
function pluginize_customize_shortcode_items_classes( $classes, $shortcode_attributes ) {
	// Add a class for all items' output.
	$classes .= ' my-demo-item-class';

	// Add an extra class for just the default shortcode.
	if ( 'default_shortcode' === $shortcode_attributes['cptui_shortcode'] ) {
    	$classes .= ' my-default-shortcode-demo-item-class';
	}

	return $classes;
}
add_filter( 'cptui_post_class', 'pluginize_customize_shortcode_items_classes', 10, 2 );
```

### Notes

If you have ever peaked at the output of a post and seen a lot of classes, similar to the following, then you’re already familiar with what the

```
$classes
```

 parameter will have.

```
cptui-entry post-125 post type-post status-publish format-standard has-post-thumbnail hentry category-test-category category-uncategorized
```

The

```
$shortcode_attributes
```

 is an array with this filter and provides all of the attributes used when the shortcode got generated. With that information, you can conditionally do a lot more. You can still add classes dependent on the shortcode, but you can also go based off of the current post type queried for, or the shortcode ID that we include to differentiate between shortcode instances in the post editors.

Updated Dec 12, 2022 8:44 PM

---

## Including hidden BuddyPress groups in dropdown

**Source:** [https://docs.pluginize.com/article/including-hidden-buddypress-groups-in-dropdown/](https://docs.pluginize.com/article/including-hidden-buddypress-groups-in-dropdown/)

Out of box, BuddyPages only includes public groups for consideration when where to assign a given page. The code below will allow for including hidden groups as part of that query.

```
function pluginizehelp_include_hidden_groups( $args ) {
	$args['show_hidden'] = true;
	
	return $args;
}
add_filter( 'buddypages_groups_get_is_admin', 'pluginizehelp_include_hidden_groups' );
```

Updated Dec 12, 2022 8:57 PM

---

## Getting Started

**Source:** [https://docs.pluginize.com/article/getting-started/](https://docs.pluginize.com/article/getting-started/)

So you just purchased Custom Post Type UI Extended. Awesome! We appreciate it. However, what do you do with this zip file that you’ve been provided? Inside the zip file is the Custom Post Type UI Extended plugin, and it needs to be installed alongside the rest of your site’s plugins.

## Installing Custom Post Type UI Extended

If you’re already familiar with how to install plugins in WordPress, you can skip to the next section. If you are not familiar how, let’s carry on

### Installing through WordPress admin.

Since Custom Post Type UI Extended isn’t hosted on WordPress.org, we do not have the “Search” install method available, and will have to utilize the zip upload.

1. Visit the Add New plugin screen and click the “Upload Plugin” button.
2. Click the “Browse…” button and select zip file from your computer.
3. Click “Install Now” button.
4. Once done uploading, activate Custom Post Type UI Extended from the plugins list screen.

### Manual

1. Extract the contents of the provided zip folder and put in a spot you can locate in a moment.
2. Connect to the server that your website is hosted on, via SFTP/FTP/your preferred method and navigate to your wp-content/plugins folder.
3. Upload the Custom Post Type UI Extended folder from your computer into the plugins folder on the server.
4. Log in to your administrator account and activate from the plugins list screen.

## Using Custom Post Type UI Extended

Custom Post Type UI Extended doesn’t do anything immediately, upon activation. To begin utilizing  it’s features, first we must go find a place where we want to display some content.

### Using the shortcode builder

The shortcode builder is the primary feature for Custom Post Type UI Extended and likely the component you will work with the most. It’s through this that you choose the parameters for the content you want, as well as what layout to use for the display.

> Gutenberg is an in-the-works post editor experience overhaul that is slated to be merged in to WordPress core in the near future. For the sake of this documentation page, we will refer to the current experience as “Traditional TinyMCE” or “TinyMCE”, and the Gutenberg version as “Gutenberg”

#### Triggering the shortcode builder

If you are using the TinyMCE version of the post editor, the way to trigger the shortcode builder for Custom Post Type UI Extended will be via either of these buttons highlighted below:

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/5ae74bf90428631126f184bf/file-q8I4yjO7pP.png)Visual tab version of the shortcode builder button.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/5ae74c632c7d3a3f981f14ad/file-kbc0Xvbtkm.png)Text tab version of the shortcode builder button.

Updated Dec 12, 2022 9:06 PM

---

## Listing posts by post title in WP Admin

**Source:** [https://docs.pluginize.com/article/listing-posts-by-post-title-in-wp-admin/](https://docs.pluginize.com/article/listing-posts-by-post-title-in-wp-admin/)

If you want to list your custom post type posts in alphabetical order when viewing the WordPress admin area, the following code will help. It should go in your active theme’s functions.php file or a custom plugin.

```
function pluginize_order_cpt_by_title( $query ) {
	if ( ! is_admin() ) {
		return;
	}

	if ( ! $query->is_main_query() ) {
		return;
	}

	$screen = get_current_screen();
	if ( ! is_object( $screen ) ) {
		return;
	}

	if ( 'movie' === $screen->post_type ) {
		$query->set( 'orderby', 'title' );
		$query->set( 'order', 'ASC' );
	}
}
add_action( 'pre_get_posts', 'pluginize_order_cpt_by_title' );
```

You will need to change the “movie” value towards the end to match the post type you want to order by the title values. If you want them to be Z-A instead of A-Z, change the order “ASC” to “DESC”

Updated Dec 12, 2022 9:09 PM

---

## Removing page title from My Profile BuddyPages

**Source:** [https://docs.pluginize.com/article/removing-page-title-from-my-profile-buddypages/](https://docs.pluginize.com/article/removing-page-title-from-my-profile-buddypages/)

When creating a BuddyPages page that get set to display on “My Profile”, there will be a page title at the top of the content area. However, this may not be desirable for what you are aiming for. If you wish to remove the display of the title completely, the following snippet will help.

You will want to add the following to your active theme’s functions.php file or a custom plugin.

```
function custom_buddypages_title_removal() {
	remove_action( 'bp_template_title', 'buddypages_screen_title' );
}
add_action( 'wp_head', 'custom_buddypages_title_removal' );
```

This code will remove the callback that BuddyPages uses to add our custom title.

Updated Dec 12, 2022 8:57 PM

---

## Extra feature settings for post types

**Source:** [https://docs.pluginize.com/article/extra-feature-settings-for-post-types/](https://docs.pluginize.com/article/extra-feature-settings-for-post-types/)

On top of being able to add any post type to the main “Blog” posts query, CPTUI-Extended also allows you to add your post types to a variety of other archives or features.

These setting can also be found at the bottom of the post type’s add/edit screen when Custom Post Type UI Extended is active. All the features are also available on the network-wide post type settings for each post type. Checking this setting at the network level is going to make the chosen post type automatically appear in the query in **ALL** sites in your network.

![](https://docs.pluginize.com/wp-content/uploads/2020/04/extra-post-type-settings-15x-1024x471.png)

Available settings as of CPTUI-Extended 1.5.x

Once you check any of the options and hit add/update, the post type you added it for should automatically start taking effect.

## Default category archive

If you have added category support via the “Categories” that WordPress core ships with, checking this option will add the post type to the query when visiting the term archives for that category. This makes WordPress query for more than just the “post” post type.

## Default tag archive

If you have added tag support via the “Tags” that WordPress core ships with, checking this option will add the post type to the query when visiting the term archives for that tag. This is just like the category archive above, but for the tags instead.

## Default post query

Checking this option will add the post type to the main query when visiting the frontpage when a static page is not set, or the blogs page when a dedicated blog page is used.

## Google AMP support via AMP

This option, when coupled with [AMP by Automattic](https://wordpress.org/plugins/amp/) will help add the necessary configuration to have the post type supported with the AMP specification. Learn more about AMP at [AMP Project](https://www.ampproject.org/)

## Divi Builder support

If you are a Divi user, and utilize Divi Builder to manage your site, then checking this setting will help add support for your custom post type inside of Divi Builder. This setting requires Divi version 2.4 or higher.

## RSS Support

Checking this option will add the post type to the RSS feed which is frequently found when appending 
```
/feed/
```

 to your main domain.

---

## Change thumbnail size for default shortcode display

**Source:** [https://docs.pluginize.com/article/change-thumbnail-size-for-default-shortcode-display/](https://docs.pluginize.com/article/change-thumbnail-size-for-default-shortcode-display/)

When using the “Default” shortcode for CPTUI-Extended, you have the option to output the featured image with each post. By default, CPTUI-Extended uses the “medium” thumbnail size. This may work fine for some, but if you’d prefer to use a different size, you can change it via a filter.

You will add the following snippets to your theme’s functions.php file or if you want, to a custom plugin build just for your own website.

```
function my_cptui_change_thumbnail_size( $original_size = '', $attributes, $post_id ) {
	return 'thumbnail';
}
add_filter( 'template_posts_thumbnail_size', 'my_cptui_change_thumbnail_size' );
```

With this snippet, we instead tell CPTUI-Extended to use the “thumbnail” image size, which is 150px by 150px. You can return whichever named image size is available, or an array of width and height pixel values. CPTUI-Extended will then pass the value to the `the_post_thumbnail()` function for final display.

Updated Dec 12, 2022 8:40 PM

---

## How to add your custom post type to RSS feeds

**Source:** [https://docs.pluginize.com/article/how-to-add-your-custom-post-type-to-rss-feeds/](https://docs.pluginize.com/article/how-to-add-your-custom-post-type-to-rss-feeds/)

Out of the box, WordPress does not include custom post types in RSS feeds. Because of this, you need to add the post types to the query yourself.

You will add the following snippets to your theme’s functions.php file or if you want, to a custom plugin build just for your own website.

**Don’t want to worry about coding this yourself?**

**This is available via user interface with our premium CPTUI-Extended product.**

## Adding all CPTUI post types to the RSS feeds.

> This example requires Custom Post Type UI 1.3.0+ due to cptui_get_post_type_slugs() function.

```
function my_cptui_add_post_types_to_rss( $query ) {
	// We do not want unintended consequences.
	if ( ! $query->is_feed() ) {
		return;    
	}

	$cptui_post_types = cptui_get_post_type_slugs();

	$query->set(
		'post_type',
		array_merge(
			array( 'post' ),
			$cptui_post_types
		)
	);
}
add_filter( 'pre_get_posts', 'my_cptui_add_post_types_to_rss' );
```

In this code, we check for if we’re querying for a feed. If so, then we fetch an array of all CPTUI based post type slugs, and merge it into an array with the ‘post’ post type. With that array constructed, we pass it into the query parameters so that WordPress knows to query for all these post types.

## Adding only some CPTUI post types to the RSS feeds.

```
function my_cptui_add_post_types_to_rss( $query ) {
	// We do not want unintended consequences.
	if ( ! $query->is_feed() ) {
		return;    
	}

	// Replace these slugs with the post types you want to include.
	$cptui_post_types = array( 'my_post_type', 'my_other_post_type' );

	$query->set(
  		'post_type',
		array_merge(
			array( 'post' ),
			$cptui_post_types
		)
	);
}
add_filter( 'pre_get_posts', 'my_cptui_add_post_types_to_rss' );
```

This snippet will be very much like the first one, except we’re only including specific post types from CPTUI.

Updated Jan 17, 2023 5:53 PM

---

## Setting InstaGo URLs

**Source:** [https://docs.pluginize.com/article/setting-instago-urls/](https://docs.pluginize.com/article/setting-instago-urls/)

# Methods to set the URL to send users to with the dynamic URL

There are two different types of URLs to send a user to. Internal redirect, and external redirect. Internal redirects are posts or pages within you WordPress installation, and external redirects are destinations outside of your WordPress install.

## Internal redirect

For the internal redirect specifically, you can set the value in two places.

First is on the settings page. There will be an input that will dynamically search for a post or a page after a certain amount of characters have been typed. Once a value is chosen, it will be saved to the option.

Second method to set a value is to edit the specific post or page you wish to set. There will be a “InstaGo Redirect” metabox along the right side of the screen that offers a single checkbox. Checking the checkbox will set the value of the settings page, so it will be global. Checking the same checkbox on a different post or page will provide the same behavior, and the first checkbox will thus be unchecked. There will only be one value to redirect to at any given time.

## External redirect

The settings page is the only place to set an external redirect value. The setting is a standard text file that you can paste an entire URL into.

## Order of priority

Provided values are important. Specifically, if any internal page is provided at all, that will be the value the user is redirected to. If only an external URL is provided, then that value will be redirected to.

Updated Dec 12, 2022 9:02 PM

---

## Settings Page

**Source:** [https://docs.pluginize.com/article/settings-page/](https://docs.pluginize.com/article/settings-page/)

# Settings page

## Dynamic URL slug

This setting is for providing the slug to be used for social media profiles. Eg. 
```
https://www.mydomain.com/go
```

. This will be what users visit and the WordPress install handles the redirection to the actual intended destination.

## Internal Redirect

This setting is for where, inside your WordPress install, the Dynamic URL should go to. If this value is set at all, it will be where the user is sent to.

## External Redirect

This setting is for where to send the user to, external from your WordPress install. If the “internal redirect” value is set at all, this value will be ignored. If this is the only value set, this value will be where the user ends up at.

## License Activation

### License key

This is going to be for the license key provided by Pluginize and your purchase of InstaGo. Without it set, you will not receive update ability without this and the email saved.

Updated Dec 12, 2022 9:02 PM

---

## InstaGo Introduction

**Source:** [https://docs.pluginize.com/article/instago-introduction/](https://docs.pluginize.com/article/instago-introduction/)

# InstaGo

## Welcome

Hello and welcome to the official InstaGo documentation. Here we will do our best to provide all the information you need to accomplish what you want with your site and social media promotion.

## Current version

The current version of InstaGo is 1.0.1 and it was released on 2017/05/03.

Updated Dec 12, 2022 9:00 PM

---

## How to cancel your subscription

**Source:** [https://docs.pluginize.com/article/how-to-cancel-your-subscription/](https://docs.pluginize.com/article/how-to-cancel-your-subscription/)

Each purchase of a plugin on pluginize.com comes with 6 months of automatic updates and support and is set up as a subscription and renews automatically. If you would prefer to not have your subscription new automatically, you can cancel your subscription at any time. To do so, follow these steps:

1. Log into your account at pluginize.com

2. Click the My Account link in the top menu

3. Click the Subscriptions link on the right-hand menu

4. Click “Cancel” under “Actions”

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/58b08361dd8c8e56bfa7fed2/file-MK1cIxQScF.png)

## PayPal Users

PayPal stores your subscription in your PayPal account. Another way to cancel your subscription, or if you would like to confirm that your subscription has been cancelled, you can [follow these instructions](https://www.paypal.com/us/selfhelp/article/how-do-i-cancel-a-subscription-faq577) from PayPal.

Updated Dec 12, 2022 9:04 PM

---

## How to upgrade your license

**Source:** [https://docs.pluginize.com/article/how-to-upgrade-your-license/](https://docs.pluginize.com/article/how-to-upgrade-your-license/)

If you purchased a Single Site license or a 2-5 Site license and would like to upgrade to a larger license option, as long as your license hasn’t expired, you can upgrade by paying the difference. To do this, follow these steps:

1. Log in to your account at pluginize.com

2. Click the My Account link in the top menu

3. The My Account page will show you your purchase history. Click the View Licenses button next to your purchase.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/589b4d37dd8c8e73b3e9690c/file-iJc36dOQpU.png)

4. On the View Licenses page, click the View Upgrades button next to the product you wish to upgrade.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/589b4e902c7d3a784630b49c/file-PVkCFiB5y1.png)

5. On the View Upgrades page, click the Upgrade License link next to the appropriate option. You’ll notice that the original purchase price has been deducted and the upgrade cost is the difference between your original purchase price and the full price for the remaining license options.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/589b4ef4dd8c8e73b3e96917/file-5KTpdqLfLN.png)

6. Complete the checkout process and you’re all set!

Updated Dec 12, 2022 9:04 PM

---

## Duplicating post types and taxonomies registered with Custom Post Type UI

**Source:** [https://docs.pluginize.com/article/duplicating-post-types-and-taxonomies-registered-with-custom-post-type-ui/](https://docs.pluginize.com/article/duplicating-post-types-and-taxonomies-registered-with-custom-post-type-ui/)

While it was actually not a planned feature, it is possible to use Custom Post Type UI to duplicate post types and taxonomies. If you have a planned list that are all going to have matching or similar labels and settings, then this handy trick will help get you set up quickly.

> Note: This will apply for CPTUI version 1.0.0 or higher.
> 
> 
> 
> Note: This will not duplicate existing posts or terms in the content type. It will only duplicate settings used for the post types or taxonomies.

## Set up the initial post type or taxonomy

First you will want to configure and save your first content type. Set the labels and the settings the way you will be wanting for it, as well as more afterwards.

## Performing the duplication

Once you have saved the “template” post type or taxonomy, to get the next one started, you will want to rename the slug being used for it, but
**DO NOT** check the checkbox to migrate posts or terms. If you want, you can edit other fields, like the labels to match the new intended slug. You can also do this afterwards, it shouldn’t matter.

Once satisfied, click the save button again. This should create a new entry in your list of post types or taxonomies, instead of replacing the previous one. Continue to do this until you are happy with your results.

Updated Dec 12, 2022 9:05 PM

---

## Customizing shortcode templates with CPTUI-Extended

**Source:** [https://docs.pluginize.com/article/customizing-shortcode-templates-with-cptui-extended/](https://docs.pluginize.com/article/customizing-shortcode-templates-with-cptui-extended/)

> This is only for CPTUI-Extended 1.4.0 or higher

With the release of CPTUI-Extended version 1.4.0, our users are now able to fully customize the templates provided with the plugin. If you are familiar with customizing templates the way WooCommerce, The Events Calendar, and similar, you will feel right at home with CPTUI-Extended’s templates.

## Where to find CPTUI-Extend’s template files.

You can find the template files inside the available zip file and in

```
cptui-extended/templates/
```

. Each will relate to a different shortcode available in the UI when inserting the shortcode.

## Where to place the template files.

In order to properly override the templates, safely without losing changes on next update, they should be put in a folder inside your active theme folder. The name of the folder should be

```
cptui-extended
```

. After that, upload your modified template file into that folder.

> In order to successfully override, make sure you are leaving the file name the same.

## What now?

From here, you can edit your copies of the template files and those changes should be used when using the associated shortcode. Make sure to read the comments and notes provided in the template so you can get a good idea of what all may be needed or what’s available to use for your custom output.

> Without making use of some sort of conditional checking, changes will be applied to all shortcode instances using the template.

Updated Dec 12, 2022 8:43 PM

---

## How to make CPTUI-Extended show posts with any of selected terms instead of all selected terms.

**Source:** [https://docs.pluginize.com/article/make-cptui-extended-show-posts-with-any-terms-over-all-terms/](https://docs.pluginize.com/article/make-cptui-extended-show-posts-with-any-terms-over-all-terms/)

CPTUI-Extended offers the ability to select terms from multiple taxonomies when setting up some layouts. When you choose terms from multiple taxonomies, the results will only have posts that have each terms. That may be what you want, but what if it is not? What if you want a list of results that have any of the selected terms, but not all?

If you want to change this behavior, add the following code to your active theme’s functions.php file or a custom plugin.

```
<?php
function cptuiext_return_or_relation() {
    return 'OR';
}
add_filter( 'cptui_tax_query_relation', 'cptuiext_return_or_relation' );
```

The snippet will return the “OR” keyword to the code and will make it choose posts that have any of the terms. By default “AND” is used, making the query more restrictive.

Updated Dec 12, 2022 8:44 PM

---

## Which shortcode templates use which CPTUI-Extended template file

**Source:** [https://docs.pluginize.com/article/shortcode-template-file-map/](https://docs.pluginize.com/article/shortcode-template-file-map/)

All template files can be found in the /wp-content/plugins/cptui-extended/templates folder.

| Shortcode to embed | Template file | Notes |
| --- | --- | --- |
| Default | posts.php |
| List | list.php |  |
| Taxonomy List | taxonomy-list.php |  |
| Post Slider | slider.php |  |
| Single Post | single.php | Only available if selected post type is “Post” |
| Single Page | page.php | Only available if selected post type is “Page” |
| EDD Product | edd.php | Only available if selected post type is “Download” |
| Woo Product | woo.php | Only available if selected post type is “Product” |
| Featured Plus | featured-plus.php |  |
| Grid | grid.php |  |
| Grid With Overlay | grid-with-overlay.php |  |

Updated Dec 12, 2022 8:44 PM

---

## How to get dashes in post type/taxonomy slugs for URL SEO purposes

**Source:** [https://docs.pluginize.com/article/dashes-in-post-type-taxonomy-slugs-for-url-seo/](https://docs.pluginize.com/article/dashes-in-post-type-taxonomy-slugs-for-url-seo/)

> As of Custom Post Type UI version 1.13.2, this tutorial no longer applies. That release finalized allowing dashes in your content type slugs.

Custom Post Type UI version 1.3.0 introduced JavaScript that enforces underscore characters in slugs. When a user tried to type a dash in the slug field, it gets automatically switched to an underscore. We have always tried to use smart defaults in CPTUI for our users. The slug field is another place where we continue that.

In WordPress core, there are many places that allow customization via post type slugs. For those to work properly, they need to have underscores, and not dashes. This is one reason we decided to take this route.

One challenge from forcing underscores is that search engines favor URLs that use hyphens. It is not an insurmountable challenge, and is actually quite easy to resolve.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/57dc13899033606f71aba300/file-ukcP0OJrz5.png)

For years, Custom Post Type UI has provided post type and taxonomy custom rewrite slug fields. With these fields you can change the post type or taxonomy to show hyphens instead of underscores. Having a post type of my_post_type remains, but when used in URLs, it will appear as my-post-type. The same applies for the taxonomies.

With this, you can have the best of both worlds.

Updated Dec 12, 2022 9:09 PM

---

## Creating an all term taxonomy archive

**Source:** [https://docs.pluginize.com/article/creating-an-all-term-taxonomy-archive/](https://docs.pluginize.com/article/creating-an-all-term-taxonomy-archive/)

WordPress does not provide the easiest way to achieve post archives that have any term from a taxonomy. There is no functional URL that provides all the posts for a given taxonomy. WordPress does provide
*term* archives, but that is just one term at a time. If we’re blogging about mustards of the world, I don’t want to see just “yellow mustard” posts. I want that dijon! I want that honey mustard!

If you are willing to be a little flexible, we can create a taxonomy archive. The way we will achieve that is by tagging each post with a generic “all” tag. We will need to accept that we will have a URL like http://domain.com/mustards/all. We could do much worse.

## The Setup

For our fictional foodies blog, we are going to use Custom Post Type UI to handle content type registration. We will imagine we have one post type of “condiments” and one taxonomy of “mustards”.

Cook’s note: If you have more than one post type registered, you may need to amend spots using cptui_get_post_type_slugs().

## Automating the “all” term assignment

To handle the assignment of the “all term”, we are going to use the following:

```
/**
 * Add publish hooks to all our CPTUI post types.
 *
 * @since 1.0.0
 */
function pluginize_post_type_listener() {
	$post_types = cptui_get_post_type_slugs(); // We default to just our CPTUI post types.

	foreach ( $post_types as $type ) {
		add_action( "publish_{$type}", 'pluginize_auto_add_taxonomy_terms_on_publish' );
	}
}
add_action( 'init', 'pluginize_post_type_listener' );
```

```
/** * Automatically add our taxonomy term upon publish. * * Term needs to already be created in the database. * * @since 1.0.0 * * @param int $post_id Published post ID. */function pluginize_auto_add_taxonomy_terms_on_publish( $post_id = 0 ) {	if ( ! wp_is_post_revision( $post_id ) ) {		$terms = array( 25 ); // Set to the appropriate term ID.		wp_set_object_terms( $post_id, $terms, 'category', true ); // You will need to customize the taxonomy.	}}
```

Above we have two functions.

The first one is our “listener” plugin, and it runs on the `init` hook. With it, we are fetching our CPTUI post types (in this case, “condiments,”) and looping over each. In the loop, we are adding a callback function to the the publish action hook.

For our example, it will be the `publish_condiments` hook. Every time we publish a new condiments post, the `pluginize_auto_add_taxonomy_terms_on_publish` function will run. That function will receive the now published post ID from WordPress.

For safety’s sake, we will make sure we are not receiving a revision’s post ID. If not, we are going to set the term ID 25, which is our “all” term for the “mustards” taxonomy. With this, we will never have to assign the “all” term ourselves. We just need to worry about the other mustard terms we have, and hit publish.

## Assigning existing content with new term.

Chances are you have been posting for awhile already. Plenty of your posts are going to be missing our “all” term. To hep automate this, we will use the following code:

```
/**
 * Run queries for posts and assign our term to them.
 *
 * Conditionally able to run on just one-to-many post types, or all.
 *
 * @since 1.0.0
 *
 * @param mixed $chosen Individual post type to potentially use.
 */
function pluginize_backfill_posts_by_post_type( $chosen = '' ) {

	// We only want to run this if there is a $_GET param of `?fill_posts=true` or `&fill_posts=true`.
	if ( empty( $_GET ) ) {
		return;
	}

	if ( ! isset( $_GET['fill_posts'] ) || 'true' != $_GET['fill_posts'] ) {
		return;
	}

	if ( ! empty( $chosen ) && is_string( $chosen ) && post_type_exists( $chosen ) ) { // If we are passed a string as a chosen post type and it's valid.
		$post_types = array( $chosen );
	} elseif ( is_array( $chosen ) ) { // If we are passed an array of post types.
		$post_types = array();
		foreach ( $chosen as $item ) {
			if ( post_type_exists( $item ) ) { // If we have valid post types.
				$post_types[] = $item;
			}
		}
	} else { // Nothing at all passed in, default to all of them.
		$post_types = cptui_get_post_type_slugs();
	}

	$args = array(
		'post_type' => $post_types,
		'post_status' => 'publish',
		'fields' => 'ids',
		'posts_per_page' => -1,
	);
	$backfill = new WP_Query( $args ); // We are only needing our post IDs, from published posts.

	while( $backfill->have_posts() ) {
		$backfill->the_post();
		// We can reuse our function from above!
		pluginize_auto_add_taxonomy_terms_on_publish( get_the_ID() );
	}
}
add_action( 'init', 'pluginize_backfill_posts_by_post_type' );
```

Astute developers will note that this function is a callback on the init hook, and that we have many checks that return early if not met. In order for this code to execute, you need to have either “?fill_posts=true” or “&fill_posts=true” in your url. If we meet that condition, we’ll continue into the rest of the function.

A few things to note:

- We’re keeping the function flexible, in case we have another need for it.
- We’re accepting a value as a parameter to the function, so users can pass in a single post type or array of post types. If we receive a single post type, we check if the post type exists, and if so, add it to a new array. If we receive an array, we loop over each and check if each post type exists. If so, we’ll add each into the array. If we are not provided anything specific, we’ll grab all the post types from CPTUI.

Once we have our post types to work with, we do a query for all posts from all the types. At the same time, we only need the IDs of the posts, so we use the “fields” parameter to limit to just IDs. At this point, we have all the posts we need to update.

We are able to re-use our previous callback, attached to our publish_condiments action hook All we need to do is loop over our WP_Query results and pass in the ID to our `pluginize_auto_add_taxonomy_terms_on_publish()` function, and it will handle the rest.

## What if I do not want a custom taxonomy?

That is fine. We have you covered. Say you are already using categories instead of a custom taxonomy. With a little bit of extra code, we can include the condiments post type in the category archives:

```
/**
 * Add our post types to the query.
 *
 * @since 1.0.0
 *
 * @param object $query WP_Query instance.
 */
function pluginize_amend_term_archive( $query ) {

	if ( is_admin() || ! $query->is_main_query() ) {
		return;
	}

	if ( ! $query->is_category() ) {
		return;
	}

	$query->set(
		'post_type',
		array_merge(
			array( 'post' ),
			cptui_get_post_type_slugs()
		)
	);

}
add_action( 'pre_get_posts', 'pluginize_amend_term_archive' );
```

The code above uses the pre_get_posts hook to include our “condiments” post type in the query. This will make sure the category archives query for posts in the “post” and “condiments” post types.

## Now what?

At this point, we should have plenty of posts associated with our “all” term. All future posts should also be receiving it automatically. The only thing that remains is providing a link to the “all” term archive. When editing a chosen menu in Appearance > Menus, you should have the ability to add the “all” term as a menu item. Finally, we have a place for visitors to sit and consume all of the content from your taxonomy.

**Extra!** Download the code above in a convenient install-able plugin: [pluginize_all_terms_taxonomy.zip](https://pluginize.com/wp-content/uploads/2016/08/pluginize_all_terms_taxonomy.zip)

Updated Dec 3, 2025 8:55 AM

---

## Changing posts per page for a post type

**Source:** [https://docs.pluginize.com/article/changing-posts-per-page-for-a-post-type/](https://docs.pluginize.com/article/changing-posts-per-page-for-a-post-type/)

By default, post type archives inherit the same posts per page amount as the Reading settings page and the “Blog pages show at most” setting. However, depending on your use case, you may need to change that value **just** for a given post type.

Utilizing the 
```
pre_get_posts
```

 action hook, you can easily modify the posts per page value for a given post type.

You will add the following snippets to your theme’s functions.php file or if you want, to a custom plugin built just for your own website.

## Changing posts per page total

```
<?php
function my_cptui_change_posts_per_page( $query ) {
    if ( is_admin() || ! $query->is_main_query() ) {
       return;
    }

    if ( is_post_type_archive( 'movie' ) ) {
       $query->set( 'posts_per_page', 30 );
    }
}
add_filter( 'pre_get_posts', 'my_cptui_change_posts_per_page' );
```

In this code we check to see if WordPress is in the admin dashboard or not acting on the main query, and return early. If we are acting on the main query for the request, and are not in the admin, then we check to see if we are on the “movie” post type archive. If so, then we set the 
```
posts_per_page
```

 parameter to a total of 30 instead of the default 10.

The 
```
is_post_type_archive
```

 accepts an array of post types if you want to change the value for multiple post types.

Updated Dec 12, 2022 9:08 PM

---

## CPTUI: I’m trying to…

**Source:** [https://docs.pluginize.com/article/im-trying-to/](https://docs.pluginize.com/article/im-trying-to/)

## Post type things.

- [Adding featured image support to your post types](http://docs.pluginize.com/article/22-adding-featured-image-support-to-your-post-types)
- [Adding post type posts to WP Nav Menus](http://docs.pluginize.com/article/79-adding-post-type-posts-to-wp-nav-menus)
- [Displaying post type descriptions](http://docs.pluginize.com/article/82-displaying-post-type-descriptions)

## Category/tag/taxonomy things.

- [Post type support in category and tag archives](http://docs.pluginize.com/article/17-post-types-in-category-tag-archives)

## Add support for _____

- [Visual Composer Grid](http://docs.pluginize.com/article/24-visual-composer-grid-support-for-new-post-types)
- [Adding post type support for specific features from other plugins](http://docs.pluginize.com/article/28-third-party-support-upon-registration)

## Start fresh with post types and taxonomy settings.

- [Resetting CPTUI Settings](http://docs.pluginize.com/article/20-resetting-cptui-settings)

## Contribute back to CPTUI

- [Contributing back to Custom Post Type UI](http://docs.pluginize.com/article/35-contributing-back-to-custom-post-type-ui)
- [How to request new features and report potential bugs](http://docs.pluginize.com/article/21-new-features-and-bug-reports)

Updated Dec 12, 2022 8:57 PM

---

## Adding content after “Default” shortcode items.

**Source:** [https://docs.pluginize.com/article/adding-content-after-default-shortcode-items/](https://docs.pluginize.com/article/adding-content-after-default-shortcode-items/)

The “Default” shortcode comes with twelve different action hooks that you can use to customize displayed content on the page.

They are all listed below, and hopefully they are self explanatory.

```
template_posts_before_title
template_posts_after_title
template_posts_before_item
template_posts_before_featured_image
template_posts_after_featured_image
template_posts_before_item_title
template_posts_after_item_title
template_posts_before_excerpt
template_posts_after_excerpt
template_posts_after_item
template_posts_before_pagination
template_posts_after_shortcode
```

For this tutorial, I am going to show you how you can use the “template_posts_after_item” hook to add custom field data to each listing on the screen.

## Creating a callback.

The first thing we need to do is create a function to be used as a callback for the hook. We are going to place it in our current theme’s functions.php file.

```
function pluginize_after_post_content( $attributes, $post_id ) {

}
add_action( 'template_posts_after_excerpt', 'pluginize_after_post_content' );
```

## Gaining access to the custom fields.

For our example here, imagine that you have a list of movies being displayed on screen, and each has a custom field that holds the calendar year that it was released in. We want to display that at the end of each movie.

```
function pluginize_after_post_content( $attributes, $post_id ) {
	echo '<p>Release year: ' . get_post_meta( $post_id, 'release_year', true ) . '</p>';
}
add_action( 'template_posts_after_excerpt', 'pluginize_after_post_content' );
```

With this code in place, we would grab the custom field from the current post being displayed, and echo the content after the post’s excerpt data.

Feel free to tinker with the other template hooks listed above and see what you can achieve with your content. If you need to see the template code that will be used, open the /cptui-extended/templates/posts.php file to see where the hooks are in greater detail.

Updated Dec 12, 2022 8:39 PM

---

## Save CPTUI settings data to file

**Source:** [https://docs.pluginize.com/article/save-cptui-settings-data-to-file/](https://docs.pluginize.com/article/save-cptui-settings-data-to-file/)

If you ever find need to save your Custom Post Type UI settings data to a file, on top of to the database like normal, the following snippet should help you out.

This will be particularly useful if you find need to version control the settings, as databases aren’t easy to version control themselves.

```
<?php
/**
 * Saves post type and taxonomy data to JSON files in the theme directory.
 *
 * @param array $data Array of post type data that was just saved.
 */
function pluginize_local_cptui_data( $data = array() ) {
    $theme_dir = get_stylesheet_directory();
    // Create our directory if it doesn't exist.
    if ( ! is_dir( $theme_dir .= '/cptui_data' ) ) {
        mkdir( $theme_dir, 0755 );
    }

    if ( array_key_exists( 'cpt_custom_post_type', $data ) ) {
        // Fetch all of our post types and encode into JSON.
        $cptui_post_types = get_option( 'cptui_post_types', array() );
        $content = json_encode( $cptui_post_types );
        // Save the encoded JSON to a primary file holding all of them.
        file_put_contents( $theme_dir . '/cptui_post_type_data.json', $content );
    }

    if ( array_key_exists( 'cpt_custom_tax', $data ) ) {
        // Fetch all of our taxonomies and encode into JSON.
        $cptui_taxonomies = get_option( 'cptui_taxonomies', array() );
        $content = json_encode( $cptui_taxonomies );
        // Save the encoded JSON to a primary file holding all of them.
        file_put_contents( $theme_dir . '/cptui_taxonomy_data.json', $content );
    }
}
add_action( 'cptui_after_update_post_type', 'pluginize_local_cptui_data' );
add_action( 'cptui_after_update_taxonomy', 'pluginize_local_cptui_data' );
```

What the snippet essentially does is create a directory in your active theme, if it does not already exist. Then, it checks if a post type or a taxonomy is being saved. Depending on which object type is saved, the code fetches the appropriate complete option from the database, encodes it into JSON, and writes to a file inside the provided directory.

All of this happens on the “cptui_after_update_$object” hooks. Despite how they sound, they are run on both new and existing items being saved.

For loading and dynamically reading the content from these files, check out [Load CPTUI Settings Data From File](https://docs.pluginize.com/article/load-cptui-settings-data-from-file/)

Updated Dec 12, 2022 9:10 PM

---

## Using the Debug Info tab for Custom Post Type UI

**Source:** [https://docs.pluginize.com/article/using-the-debug-info-tab-for-custom-post-type-ui/](https://docs.pluginize.com/article/using-the-debug-info-tab-for-custom-post-type-ui/)

If you have used our
[support forums](http://wordpress.org/support/plugin/custom-post-type-ui) at any time in the past number of years, chances are you’ve received a response from Michael, helping debug whatever issue you were experiencing at the time. Hopefully Michael has proved helpful and resolved a given issue swiftly and timely. However, there are cases where Michael just needed more information from you regarding your setup and your registered content. That’s what brings us to this tutorial today.

In version 1.2.0, released in January of 2016, Michael introduced a “Debug info” tab, found in the Import/Export section of Custom Post Type UI. The purpose of this was to provide a streamlined way to get myself information regarding your install, without having to require excessive copy/pasting into emails, risking unintentionally lost data. Michael intended to make a case where you, the user, enters an email, and clicks “Send debug info” and things carry on.

## Information included in the debug info

The debug information textarea provides a wide variety of data for anyone who may be receiving the data. All of it is intended to help deduce sources of issues.

Information provided includes multisite status, URLs for the website, current WP version, permalink structure, active theme, registered post types, PHP/MySQL/Server information, active/inactive plugins, Memory limits, and CPTUI-specific post type and taxonomy data.

In my own cases, chances are I’m going to use the CPTUI-specific data most, importing those values into my own install to see what is going on with the provided settings, and why they may, or may not be working the way they are.

## Sending the information

When trying to send to someone for debugging purposes, you just need to input the provided email address to the field shown below, and hit “Send debug info”.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/579d9b71c6979160ca149627/file-yuCMoNgoL9.png)

Doing so will send all the relevant data to that user, for them to look over and use as necessary to help debug your issue.

Updated Dec 12, 2022 9:10 PM

---

## Displaying post type descriptions

**Source:** [https://docs.pluginize.com/article/displaying-post-type-descriptions/](https://docs.pluginize.com/article/displaying-post-type-descriptions/)

Ever since post type creation became “public” in WordPress 3.0.0 in June 2010, users have been able to provide a description for their post type. However, for whatever reasons that the WordPress core team has, they have never provided an official way to retrieve that description value. Thankfully, the “get_post_type_object()” function provides that value for a provided post type. This allows us to create our own custom function that can be used to display the description value.

```
function pluginize_display_post_type_description( $post_type_slug = '' ) {
	$mytype = get_post_type_object( $post_type_slug );
	if ( ! empty( $mytype ) ) {
		echo $the_post_type->description;
	}
}
```

Using this function, which you can rename however you prefer, will return the description of whatever post type slug you provide it. This would be good to potentially use in your theme and specifically archives for any given post type you may want to provide more details for.

Updated Dec 12, 2022 9:09 PM

---

## Cleanly-done pagination with custom WP_Query objects

**Source:** [https://docs.pluginize.com/article/cleanly-done-pagination-with-custom-wpquery-objects/](https://docs.pluginize.com/article/cleanly-done-pagination-with-custom-wpquery-objects/)

If you have ever created a custom WP_Query object, chances are you have potentially needed to also provide pagination for the resulting loop and display of posts. Sadly, WordPress core does not make this the easiest to achieve, but it is possible depending on which pagination-based functions you use. This tutorial aims to show how to achieve functional pagination without getting very “dirty” in your code.

What I mean by “dirty” in this case is having to utilize the global “$wp_query” variable name. Many of the following functions rely on that specifically, without allowing custom setting overrides. If you have ever come across a tutorial that brings up setting the original $wp_query object to a temporary variable, and then setting $wp_query to null before re-purposing it, then you know what I am referring to here.

## Pagination functions to use

The biggest key is the ability to provide a “max pages” value. The WordPress core source code shows that the only two functions that provide the ability to custom set those are:

- get_next_posts_link()
- get_previous_posts_link()

They have a second parameter available that allows you to set your own max_num_pages value, instead of absolutely relying on the “$wp_query” variable name.

Imagine your custom WP_Query object is named “$my_query”, to use its own “max_num_pages” property, you just need to do the following:

```
printf( '<div>%s</div>', get_next_posts_link( 'Older posts', $my_query->max_num_pages ) );
printf( '<div>%s</div>', get_previous_posts_link( 'Newer posts', $my_query->max_num_pages ) );
```

This makes the two functions use the custom queries’ values instead of the global “$wp_query” values which get used if nothing is passed in.

## Pagination functions to avoid for clean pagination

These functions do not allow a way to filter in or pass in “max pages” overriding values, and all rely on the global “$wp_query” object instead.

- posts_nav_link()
- get_posts_nav_link()
- get_the_posts_navigation()
- get_the_posts_pagination()
- the_posts_pagination()

## Full Basic WP_Query example

```
if ( get_query_var( 'paged' ) ) {
	$paged = get_query_var( 'paged' );
} else if ( get_query_var( 'page' ) ) {
	// This will occur if on front page.
	$paged = get_query_var( 'page' );
} else {
	$paged = 1;
}
$my_query = new WP_Query( array(
	'post_type'           => 'movie',
	'posts_per_page'      => 2,
	'paged'               => $paged,
) );
while ( $my_query->have_posts() ) : $my_query->the_post(); ?>
	<h2><?php the_title(); ?></h2>
	<?php
	the_excerpt();
endwhile;
printf( '<div>%s</div>', get_next_posts_link( 'Older posts', $my_query->max_num_pages ) );
printf( '<div>%s</div>', get_previous_posts_link( 'Newer posts', $my_query->max_num_pages ) );
```

What this example does is grab the paged value for the current pagination, and pass it into the WP_Query calls, along with our movie post type and 2 posts per page. Afterwards, it’ll show the title and excerpt of any found movies, and pass in its own max number of pages into our pagination functions.

## Conclusion

While not the most flexible, it does show that there is possible pagination available for custom WP_Query calls. At least in theory, re-purposing the “$wp_query” variable name specifically, should make the other functions work as well, but on a personal level, I’ve never been a fan of that detail. Thankfully we have a couple functions that allow overriding of the value so that we can provide a more “clean” option.

Updated Dec 12, 2022 9:09 PM

---

## Adding WordPress REST API support

**Source:** [https://docs.pluginize.com/article/adding-wordpress-rest-api-support/](https://docs.pluginize.com/article/adding-wordpress-rest-api-support/)

The pending WordPress REST API has been a hot topic for WordPress developers and agencies for awhile now. While it’s true the endpoints are not presently merged into WordPress core, the framework needed to create endpoints are, making them able to be manually added by developers, coupled with having the [REST API](https://wordpress.org/plugins/rest-api/) plugin installed and active.

With the release of Custom Post Type UI 1.2.0 in January 2016, we added the ability for you to add support for your custom post types and taxonomies. There are two fields you need to be aware of, for both post types and taxonomies

## “Show in REST API”

The “Show in REST API” field is one of our true/false drop-downs, and it defaults to false. You will want to set it to true and hit save on any of your desired post types and taxonomies to enable the support for that content.

## “REST API base slug”

This “REST API base slug” field is what you use to set what slug to reference when interacting with the API endpoints. By default, it is the post type slug that you register. However, you can set it to be something else if you like. If you have a post type of “movies” and want to reference it by “films” then you’d save “films” in the field before saving.

That’s all you need!

Updated Dec 12, 2022 9:08 PM

---

## Adding post type posts to WP Nav Menus

**Source:** [https://docs.pluginize.com/article/adding-post-type-posts-to-wp-nav-menus/](https://docs.pluginize.com/article/adding-post-type-posts-to-wp-nav-menus/)

If you want to add custom post type posts, you first need to make sure each desired post type is getting the necessary parameter. Once it is, you should see a section for it on the left side of the menu builder screen.

## Adding the support.

When editing your post type, locate the “Show in Nav Menus” option and make sure the associated dropdown is set to “true”. It is set to be true by default.

## Checking the menu builder screen.

Once you have ensured all your desired post types have the support, visit “/wp-admin/nav-menus.php” and confirm seeing each post type along the left. Each will get their own collapsible section.

## Debugging missing listed post types.

If you are not seeing some or all of them listed, click on the “screen options” tab at the top right corner of the screen and double check that each has the associated checkbox checked. This is how WordPress toggles them in the builder screen, and they may not be toggled right away.

Updated Dec 12, 2022 9:08 PM

---

## CPTUI-Extended Compatibility Fixes

**Source:** [https://docs.pluginize.com/article/compatibility-fixes/](https://docs.pluginize.com/article/compatibility-fixes/)

## Z-index issues with wpDataTables

The modal popup appears below the semi-transparent background due to conflicting z-index vaues on a “.ui-dialog” CSS selector. The code below should help fix. Place it in your active theme’s functions.php file.

```
function cptui_mod_css() {
?>
	<style>
	.cptui.ui-dialog {
	     z-index: 100102 !important;
	}
	</style>
<?php
}
add_action( 'admin_head', 'cptui_mod_css' );
```

Updated Dec 12, 2022 8:41 PM

---

## Modifying the BuddyPages editor

**Source:** [https://docs.pluginize.com/article/modifying-the-buddypages-editor/](https://docs.pluginize.com/article/modifying-the-buddypages-editor/)

How to modify the wp_editor instance for BuddyPages. You will need to be familiar with how WordPress filters work.

## Default values

```
/**
 * Filters wp_editor args for BuddyPages content editor.
 *
 * @since 1.0.0
 *
 * @param array $attributes wp_editor arguments.
 */
$editor_args = apply_filters( 'buddypages_textarea_editor_args', array(
	'teeny' => true,
	'media_buttons' => false,
	'quicktags' => true,
	'textarea_rows' => 1,
), 'admin' );
```

## Modify array values to change arguments

The following will make BuddyPages use the full TinyMCE UI instead of the smaller condensed version. You should put this snippet into your theme’s functions.php file or a custom plugin.

```
function prefix_buddypages_tinymce( $args = array() ) {
        // Makes it use the full TinyMCE instead of the PressThis condensed version.
	$args['teeny'] = false;

	return $args;
}
add_filter( 'buddypages_textarea_editor_args', 'prefix_buddypages_tinymce' );
```

The following will make BuddyPages add the “Add Media” button above the editor. You should put this snippet into your theme’s functions.php file or a custom plugin.

> Note: Users will need a user level of author or higher to see the button shown.

```
function prefix_buddypages_tinymce( $args = array() ) {
	$args['media_buttons'] = true;

	return $args;
}
add_filter( 'buddypages_textarea_editor_args', 'prefix_buddypages_tinymce' );
```

Updated Dec 12, 2022 8:57 PM

---

## BuddyPages Settings

**Source:** [https://docs.pluginize.com/article/buddypages-settings/](https://docs.pluginize.com/article/buddypages-settings/)

By default only admins can create BuddyPages. To turn on page creation for all user visit the BuddyPress options page in the Settings menu. Settings -> BuddyPress then click the options tab and find the BuddyPages options section.

Click the checkbox Member Pages and save to allow all users to create BuddyPages.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/5731f27bc697915bcd92d333/file-qajJxQbQxk.png)

## BuddyBoss

To access the admin page for the Member pages settings above, you need to visit https://mysite.com/wp-admin/admin.php?page=bp-integrations&tab=bp-compatibility It will be listed under “BuddyPress” integration.

Updated Dec 12, 2022 8:56 PM

---

## Deleting BuddyPages

**Source:** [https://docs.pluginize.com/article/deleting-buddypages/](https://docs.pluginize.com/article/deleting-buddypages/)

BuddyPages are deleted from the edit page screen. Click “Edit” when viewing a BuddyPage. On the lower right you will find a delete link.  Site Admins can edit and delete BuddyPages from the BuddyPages admin menu item.

Note: this completely removes the content from the site. if you want to keep a page but not display it on the site choose the draft option in post status.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/5730d8c1c697915bcd92cea9/file-re8S1lSV2E.png)

## BuddyBoss

To get to the BuddyPages management screen with BuddyBoss, you need to visit the Account Settings section and find the “Pages” listing in the menu shown.

Example URL for BuddyPages management: https://mysite.com/members/USERNAME/settings/pages/

Once there, the same general UI demo’d above should be present, though it may visually look different based on current theme.

Updated Dec 12, 2022 8:56 PM

---

## Editing BuddyPages

**Source:** [https://docs.pluginize.com/article/editing-buddypages/](https://docs.pluginize.com/article/editing-buddypages/)

Editing BuddyPages can be done by clicking edit link above a BuddyPage you are viewing or from the Settings -> Pages list.  Any BuddyPage title in the user navigation with a “Pencil” icon is set to draft status. Draft pages only display  to the author of the page.

Note: only an author of a BuddyPage can edit their own pages.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/5730d42e90336066ec9b822a/file-xfOyWXDyFB.png)

A member can see all their BuddyPages from their profile Settings -> Pages. Listed here is all profile and group pages with link to edit.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/5730d6dbc697915bcd92ce9f/file-m5SvtrIihg.png)

## BuddyBoss

To get to the BuddyPages management screen with BuddyBoss, you need to visit the Account Settings section and find the “Pages” listing in the menu shown.

Example URL for BuddyPages management: https://mysite.com/members/USERNAME/settings/pages/

Once there, the same general UI demo’d above should be present, though it may visually look different based on current theme.

Updated Dec 12, 2022 8:56 PM

---

## Adding BuddyPages

**Source:** [https://docs.pluginize.com/article/adding-buddypages/](https://docs.pluginize.com/article/adding-buddypages/)

BuddyPages are added on the front of the site. Site admins can view all BuddyPages from the admin from the top level “BuddyPages” menu item. A site member can get to the BuddyPage creation/editing by visiting the “Pages” menu under user settings on their profile.

Click “Add New” to add a new page.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/5730cc6e90336066ec9b820b/file-xGBONJNNJv.png)

Enter a title and contents of your page. Choose to display it on your profile or in a group you administer. Save as a draft (only you can see) or publish (all members can see). The content editor will embed content links from 
[oEmbed services](https://codex.wordpress.org/Embeds) listed here.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/5730ccf490336066ec9b820c/file-jJBhX2Qppo.png)Click “Add Page” when finished with adding content and the page directs you to the edit screen for your new page. There will also be a link in the user navigation menu if you chose to display the page on your profile.

### Site Admin

The site administrator creates pages in the same way as outlined above. However, there are a few more options from the “Post In” dropdown select. Site Administrators have the option to create pages to display on
**All Users** profiles as well as **All Groups**. These are known as “Site Wide” BuddyPages.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/5730d0ca90336066ec9b8217/file-5f3prEQEiD.png)

## BuddyBoss

To get to the BuddyPages management screen with BuddyBoss, you need to visit the Account Settings section and find the “Pages” listing in the menu shown.

Example URL for BuddyPages management: https://mysite.com/members/USERNAME/settings/pages/

Once there, the same general UI demo’d above should be present, though it may visually look different based on current theme.

Updated Dec 12, 2022 8:56 PM

---

## BuddyPages Frequently Asked Questions

**Source:** [https://docs.pluginize.com/article/buddypages-faq/](https://docs.pluginize.com/article/buddypages-faq/)

Coming soon.

Updated Dec 12, 2022 8:48 PM

---

## BuddyPages Changelog

**Source:** [https://docs.pluginize.com/article/buddypages-changelog/](https://docs.pluginize.com/article/buddypages-changelog/)

## 1.2.3

- Fixed: Load internationalization files earlier to ensure they are ready to be used
- Added: Inline documentation link in Plugin list screen for our list item.
- Updated: Minimum PHP required version to 5.6.

## 1.2.2

- Fixed: Bug regarding “Allow Members to Create Pages” setting not being respected.
- Updated: Removed legacy HelpScout integration and Google+ Social share link.

## 1.2.1

- Fixed: Unintentionally missed merging of code related to “can edit” logic.
- Updated: Translation files

## 1.2.0

- Added: “Add New Page” link next to “Edit” link for more convenient adding of multiple pages at a time.
- Added: Admin notice regarding using the frontend for creating BuddyPages when visiting the editor screen for any BuddyPages based posts.
- Added: Integration with Pluginize’s free “BuddyPress Registration Options” plugin.
- Fixed: PHP notices regarding trying to use a bool value as an array.
- Fixed: Removed “Edit” link display for all users when viewing an “All users” generated page by an administrator.
- Updated: Revised text on save button when editing an existin BuddyPages page. Should now say “Save page”.

## 1.1.2

- Fixed: Prevent fatal errors if the bp_get_settings_slug function is not available.
- Fixed: Removed early return for group pages that caused some page access issues.
- Fixed: Updated internal Browser.php library to more recent version.

## 1.1.1

- Fixed: Pencil icon issue for user profile pages when a draft.
- Fixed: Addressed unintended display of draft pages to users who don’t own the page

## 1.1.0

- Added: Filter for arguments used in group_get_groups function call.
- Updated: Replaced all instances of global $bp with buddypress() function assignments.
- Updated: Many details revolving around internationalization.
- Fixed: Issue with the setting to allow all members to create pages. Only administrators should have been able to by default.
- Fixed: Continued issues with shortcodes in BuddyPages.

## 1.0.1

- Fixed: Remove PHP warnings around wp_kses() errors.
- Fixed: Touched up styling around messages when no BuddyPages are created yet.
- Fixed: Issues with shortcodes and the BuddyPages post editor.
- Added: Div wrapper and classes around BuddyPages group output.

## 1.0.0

- Initial release

Updated Jul 3, 2025 7:07 PM

---

## BuddyPages Introduction

**Source:** [https://docs.pluginize.com/article/buddypages-introduction/](https://docs.pluginize.com/article/buddypages-introduction/)

With BuddyPages, you can add custom pages to BuddyPress groups and member profile pages with ease–and without ever touching a line of code. Save yourself the time and trouble while still getting the most out of BuddyPress.

BuddyPress doesn’t make it easy to add custom pages to groups or member’s profile pages without amending the code, which means that if you don’t know how to write code, it might as well be impossible. Even if you do know how to write code, it still can be time-consuming and challenging. With BuddyPages, we’ve made it easy for anyone to add all of the BuddyPress pages they could ever want or need.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/5730dbadc697915bcd92ceb8/file-IGl2OYyD8l.jpg)

## Group Pages

BuddyPages is perfect for site admins who want to keep important information in front of their group members without it getting lost in the activity stream. For example, you can show your group members the rules for posting to the group, or remind your book club of the upcoming schedule.

If you have information you would like displayed in *all* groups, we’ve made that simple, too!

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/5730dbd8c697915bcd92ceb9/file-CuRForoCeF.png)

## Member Profile Pages

When it comes to your members, we’ve made it easy for them to create static pages on their profiles. For example, they could add a page with links to their social media profiles, or a list of their top ten favorite bands.

If you want to reserve that option exclusively for your admins, you can do that too. You can disable this feature for members, but keep it active for admins.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/5730dbf4c697915bcd92ceba/file-e0tSTZojd4.png)

Updated Dec 12, 2022 8:48 PM

---

## Extending the shortcode builder

**Source:** [https://docs.pluginize.com/article/extending-shortcode-builder/](https://docs.pluginize.com/article/extending-shortcode-builder/)

> Potentially being superseded by focus on Block editor experiences, started in version 1.7.0

## Registering a shortcode

In order to register a new shortcode for the shortcode builder, you need to provide a function callback to the cptui_register_shortcode() function. This will be the function that should be called at the time of display in the shortcode builder. You should register the shortcode on the cptuiext_loaded action hook so that everything is ready at the appropriate time.

```
function my_custom_cptui_shortcode() {
    cptui_register_shortcode( 'my_custom_shortcode' );
}
add_action( 'cptuiext_loaded', 'my_custom_cptui_shortcode' );
```

## Creating the shortcode callback function

Once you have added a function callback to the cptui_register_shortcode() function, you need to also define that function. It will not have any parameters passed in, and it does need to return an array of parameters to use for the custom shortcode fields.

### Shortcode callback parameters

- (string) id: ID for the shortcode for CMB2
- (string) name: The name of the shortcode. Appears in select drpdown.
- (string) template: The name of the template file to use for the shortcode output.
- (string) template_location: Where to find the specified template file.
- (string) style: handle for a registered wp_register_style() call.
- (string) script: handle for a registered wp_register_script() call.
- (string) post_type: Which post types to allow the shortcode to be used for.
- (string) description: Appears above the shortcode fields.
- (array) fields: array of arrays holding CMB2-style field declarations. See [CMB2 Wiki](https://github.com/WebDevStudios/CMB2/wiki/Field-Types)

```
// Very basic shortcode with no fields.
function my_custom_shortcode() {
	$shortcode = array(
		'id' => 'my_custom_shortcode',
		'name' => 'My Custom',
		'template' => 'posts',
		'template_location' => 'plugin-dir/my-templates',
		'style' => 'my_shortcode_css',
		'script' => 'my_shortcode_js',
		'post_type' => 'post',
		'description' => ' ',
		'fields' => array()
	);
	return $shortcode;
}
```

In order to start displaying some fields, we need to add them to the fields array at the end.

```
'fields' => array(
	array(
		'name' => 'Title',
		'id'   => 'title',
		'description' => 'Title to display above CPTs',
		'type' => 'text',
	),
	array(
		'name' => 'Amount',
		'id'   => 'amount',
		'description' => 'How many posts to show?',
		'type' => 'text',
	),
	array(
		'name' => 'Featured Image',
		'description' => 'Would you like a featured image',
		'id'   => 'featured_image',
		'type' => 'checkbox',
	),
)
```

Here we add two basic text fields to store some information in and then a checkbox. These fields will show when the user selects your custom shortcode to use and fill in values for, to be inserted into where they want the shortcode used.

### Scripts and styles

If you are wanting or needing to add custom javascript or css file for your shortcode, you can do so with the ‘script’ and ‘style’ parameters. These parameters should only have the handle provided from a wp_register_script or wp_register_style function call. Custom Post Type UI Extended will handle the enqueuing of the files.

```
function my_custom_shortcode_enqueue() {
	wp_register_style( 'my_shortcode_css', 'plugin-dir/css/style.css' );
	wp_register_script( 'my_shortcode_js', 'plugin-dir/js/shortcode.js' );
}
add_action( 'wp_enqueue_scripts', 'my_custom_shortcode_enqueue' );
```

### Custom template loading

> This applies for version 1.4.0+

In order for the template loader, added in version 1.4.0, to find your template, you need to add its location to the stack. This value will be the same value specified above for ‘template_location’.

```
function my_custom_shortcode_template_stack( $paths ) {
	$paths[15] = 'plugin-dir/my-templates';

	return $paths;
}
add_filter( 'cptui_extended_template_paths', 'my_custom_shortcode_template_stack' );
```

With this filter callback, we are passed an array of already set paths to check. Each will have a numeral index that indicate priority for the location. For example, the template loader by default checks the child theme folder with a priority of 1. It then checks the parent folder, with a priority of 10, followed by the default location that we provide, with a priority of 100.

If you are familiar with how action/filter priorities work, this works in the exact same way.

### Template file

The template file that you create is pretty much up to you. If you have set up themes that use get_template_part() that retrieve files that contain only WordPress loops, then these will be along the same lines. The key difference is that we need to invoke our own WP_Query object using the attributes provided by the shortcode.

#### Template file function calls

For compatibility sake, it’s best to include a call to cptui_shortcode_atts() that passes in the $attributes variable that will be made available to you inside the template. Doing this allows for the arguments to be filtered right before usage. The following snippet will provide a solid example.

```
$attributes = (array) cptui_shortcode_atts( $attributes );
```

> The “(array)” casting in front of the function call is optional. The Template loading in 1.4.0 passes a PHP object into the template file. You can use either version.

Next would be grabbing the appropriate values from the “$attributes” variable to pass into a new WP_Query instance to fetch the posts. Finally, you would want to iterate over the results and output the markup however which way you want based on parameters provided by the shortcode.

Updated Dec 12, 2022 8:43 PM

---

## Managing and viewing network-level post types and taxonomies

**Source:** [https://docs.pluginize.com/article/managing-viewing-network-level-post-types-and-taxonomies/](https://docs.pluginize.com/article/managing-viewing-network-level-post-types-and-taxonomies/)

## Creating and managing items

Managing network-level post types and taxonomies is going to be a very familiar process. It is almost exactly the same steps as you are already used to, but is done from the network admin for your multisite installation.

To get started with a network-level item do the following steps:

1. Click “My Sites” in the admin bar
2. Hover over “Network Admin” and then click “Dashboard” in the right side menu.
3. In the side menu on the Network Admin Dashboard, hover on “CPTUI Extended and choose either “Add/Edit Post Types” or “Add/Edit Taxonomies”.
4. Fill in fields as desired like you have done before and hit save.

## Viewing existing items

Getting an overall view of what network-level post types and taxonomies you have registered is also going to be a familiar experience to a single-site install. Below the “Add/Edit” menu items in the CPTUI Extended admin menu is the “Registered Types/Taxes” and it behaves the same way. This time, however, it’s going to show just the network-level types and taxonomies.

Updated Dec 12, 2022 8:44 PM

---

## Locating a post’s post ID

**Source:** [https://docs.pluginize.com/article/locating-post-id/](https://docs.pluginize.com/article/locating-post-id/)

Often you will find functionality for your site that needs a post ID specified. This may be something provided by your current theme, or a plugin you have installed to manage certain tasks. The issue is that not all of them provide easy ways to look up the associated ID, and leave that up to the user. In this brief tutorial, we hope to help you easily find the needed post ID.

## Regular way

Whenever you are in the post editor for a started post, the ID is present within the URL. The URL will look something like the image below, and be structured like /wp-admin/post.php?post=2&action=edit. The number after the “post=” is the ID of the post you’re editing.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/56fc3f5ac6979111dc39a481/file-T04NJ1ZKEP.png)

Do note that this value won’t be present when you first click “Add new” as the post has not been recorded into the database quite yet and assigned an ID. Saving as a draft or hitting publish will save the post to the appropriate database and refresh the page for you, providing the newly created ID in the URL.

## Custom Post Type UI Extended way

While this way will not apply to ALL custom post types in your WordPress install, it will apply to all post types created with Custom Post Type UI with Custom Post Type UI Extended active.

When viewing the posts list for your CPTUI-based post  types, you will see two extra columns. The first one is the ID for each post, and this will correspond to the ID you’d see with the method above. The second column is just a small thumbnail of that post’s featured image, if one is set.

> The “Regular Way” applies no matter what plugins you have installed.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/56fc3f66c6979111dc39a484/file-ac0nE8RFxq.png)

Regardless of the method you use to retrieve a given post’s ID, both methods highlighted above should help you out with working with your Custom Post Type UI content.

Updated Dec 12, 2022 9:10 PM

---

## How to add post type to main blog query

**Source:** [https://docs.pluginize.com/article/post-types-in-main-blog-query/](https://docs.pluginize.com/article/post-types-in-main-blog-query/)

One of the features of Custom Post Type Extended is the easy ability to add any post type to the main “Blog” posts query for your website. This setting can be found at the bottom of the post type’s add/edit screen when Custom Post Type UI Extended is active.

![](https://docs.pluginize.com/wp-content/uploads/2020/04/posts-query-setting-1024x105.png)

Once you check that option and hit add/update, the post type you added it for should automatically start appearing alongside your blog posts.

## Network-wide settings.

This “add to post query” feature is also available on the network-wide post type settings for each post type. Checking this setting at the network level is going to make the chosen post type automatically appear in the query in **ALL** sites in your network.

Updated Dec 12, 2022 8:44 PM

---

## CPTUI-Extended Changelog

**Source:** [https://docs.pluginize.com/article/cptui-extended-changelog/](https://docs.pluginize.com/article/cptui-extended-changelog/)

## 1.11.1 – 2022-10-26

- Updated: Adjusted default toggled options for Grid Layout block options.
- Updated: Adjusted default toggled options for the Grid with Overlay layout block options.
- Updated: Adjusted default toggled options for the Slider Layout block options.
- Updated: Adjusted default display for Taxonomy List layout when no options chosen yet.
- Updated: Added “About CPTUI-Extended” menu item to main CPTUI menu area.
- Updated: Changed Shortcode ID to plain text instead of read-only text input.
- Fixed: Amended how we apply 
```
pre_get_posts
```

 filters to respect other filters that may have been added.
- Fixed: Javascript meant for network admin causing issues for individual sites admin.
- Fixed: changed 
```
class
```

 to 
```
className
```

 in block-icon file that was throwing console warnings.

## 1.11.0 – 2022-09-19

### Added

- Added: Grid layout in the block, with all available options.
- Added: Grid with Overlay layout in the block, with all available options.
- Added: Featured Plus layout in the block, with all available options.

### Updated

- Updated: Added layout title output for layouts that were missing it, despite having the setting.
- Updated: Ensured compatibility with TwentyTwentyTwo Full Site Editor theme.
- Updated: PropType checking for our block to help ensure stability.
- Updated: Cleaned up unused legacy code, and other code organization work.

## 1.10.0 – 2022-08-08

### Added

- Added: Post Cards layout in the block, with all available options.
- Added: Easy Digital Downloads layout in the block, with all available options.
- Added: Post Slider layout in the block.
- Added: Template versioning similar to WooCommerce to help notify about potential template updates.
- Added: WordPress filter on our usage of the excerpt output.

### Updated

- Updated: List layout to have all remaining options finished.
- Updated: Label verbiage when choosing a post type post for Single Post Type layout.
- Updated: Removed HelpScout integration.
- Updated: Show “no content found” message in layout if no posts were found.

### Fixed

- Fixed: Post type screen in individual multisite site was receiving network-wide taxonomies as options.

## 1.9.0 – 2022-06-08

### Added

- Added: WooCommerce layout in the block, with all available options.
- Added: Taxonomy List layout in the block, with all available options.
- Added: New hook located after pagination markup in Posts, WooCommerce, and Easy Digital Downloads layouts.

### Updated

- Updated: Finished remaining options for “Default” layout.
- Updated: Continued adding options for “List” layout, specifically “Order” and “Orderby” options.
- Updated: Changed wording from “Amount” to “Posts Per Page” for consistency with WordPress.
- Updated: Slick Slider to the latest version.
- Updated: Touched up text for screen readers around pagination for our layouts.

## 1.8.1 – 2022-05-23

### Fixed

- Error around CMB2 and fatal error around loading files.

## 1.8.0 – 2022-05-19

### Added

- Began move of List layout into Block
- Single Post Type layout added into block

### Updated

- Moved more options from Default layout shortcode into Block. Specifically “Order by” and “Order” attributes.
- CMB2 library
- Gamajo Template Loading library
- EDD Software License Library
- Activate license upon setting save. Fewer clicks!
- Made Slider layout code depend on jQuery library.

## 1.7.1 – 2022-05-12

### Fixed

- Issue around featured image display and new block functionality.

## 1.7.0 – 2022-04-26

### Added

- Added: “Default” Layout Block

### Bug Fixes

- Fixed: Made default/fallback values for get_option() based calls consistent with expected type.

### Updates

- Updated: Made ID attributes unique for wrapping div on our output.

## 1.6.3 – 2022-03-16

### Bug Fixes

- Fixed: PHP Deprecations regarding parameter order
- Fixed: Issues around content type deletion in network admin
- Fixed: Empty confirmation dialog in network admin.

## 1.6.2 – 2021-12-09

### Bug Fixes

- Fixed: Issues regarding saving “Extended” section settings after CPTUI 1.10.0 release.
- Fixed: Missing saving of Divi/RSS feed options to network-wide post types.

## 1.6.1 – 2021-11-08

### Bug Fixes

- Fixed: Issues with network import of post type/taxonomy data after Custom Post Type UI 1.10.0 release

### Updates

- Updated: Removed usage of deprecated jQuery change function
- Updated: noopener attributes to links that open in new windows

## 1.6.0 – 2021-02-10

### Updates

- Added: Filter for featured image post thumbnail size for “Grid with Overlay” layout.
- Updated: Removed “safe_mode” checks from System Information panel.
- Updated: Removed HelpScout integration due to no longer using platform for our support.

### Bug Fixes

- Fixed: Woocommerce property incorrectly called.
- Fixed: Escaped list markup in list.php template file.
- Fixed: Calling for WooCommerce price on a boolean value.

## 1.5.3 – 2018-02-20

### Updates

- Added: Jo Murgel as a listed contributor to the plugin. Jo is the person who brought our lovely new layouts from version 1.5.0.
- Added: Filters for `the_post_thumbnail()` usage in our new layouts. Allows to custom-set the image size to use.
- Added: Enqueue CPTUI styles when in network admin, after CPTUI 1.6.0 changes.

### Bug Fixes

- Fixed: “Amount” field not being respected for the Grid layout.

## 1.5.2 – 2018-05-15

### Updates

- Added: Filter to remove taxonomies from consideration for modal popup. Example: Yoast SEO Prominent keywords
- Updated: Changed where to apply Pluginize license. License page no longer in Network admin for Multisite users. Please apply to just main site.
- Updated: Added note about AMP 0.6.0+ and AMP’s dedicated options page.

### Bug Fixes

- Fixed: Some layouts were not having custom amount values respected and applied.
- Fixed: Addressed PHP errors for 5.3 and lower, coming from new 1.5.0 layouts.
- Fixed: Fixed issue with “Grid with Overlay” layout not respecting custom post type selection.

## 1.5.1 – 2018-02-27

### Bug Fixes

- Fixed: Resolved PHP error occurring for customers on older PHP versions.

## 1.5.0 – 2018-02-26

### Updates

- Added: Allow filtering by taxonomy terms for the list template.
- Added: Checkbox setting support for adding post types to the primary RSS feed.
- Added: New display formats: Grid, Grid with Overlay, Post Cards, Featured Plus.
- Added: Include shortcode ID as available html class attribute in frontend output.
- Updated: Reworded “Shortcode to Embed” to “Choose a Layout”.
- Updated: Clarified “Taxonomy” section of shortcode builder modal.
- Updated: CMB2 library to 2.3.0 for purposes of PHP 7.2.x compatibility.
- Updated: TGM-Plugin-Activation library.

### Bug Fixes

- Fixed: Display “post”, “page”, “attachment” WP core post types as available options for taxonomy editor screen in network admin.
- Fixed: Import issues going to network-wide settings when importing settings in single site.
- Fixed: Ensured compatibility with WooCommerce 3.x.
- Fixed: Issue with individual site imports going to network admin when they should not.

## 1.4.4 – 2017-11-15

### Bug Fixes

- Fixed: Conflict with with checkboxes and radio buttons on post editor screen getting unset when interacting with shortcode builder.
- Fixed: Re-added “amount” field to the default shortcode option, used to specify how many posts to show.

## 1.4.3 – 2017-03-20

### Bug Fixes

- Fixed: Issue involving arrays and objects for error template when no template found.
- Fixed: Adjusted styles to expand CPTUI areas to 100% when no mini-sidebar displayed.

## 1.4.2 – 2017-02-23

### Bug Fixes

- Fixed: Scroll issues when CPTUI-Extend shortcode builder is toggled from an already open modal toggle.

## 1.4.1 – 2017-02-02

### Bug Fixes

- Fixed: Add missed code, required for network import/export to work. Sorry about that everyone.

## 1.4.0 – 2017-01-12

### Bug Fixes

- Fixed: Potential broken HTML in list template.

### Updates

- Updated: More WordPress hook inline documentation.
- Added: Convenience function for changing tax query relations.
- Added: Theme developers! You can now override CPTUI-Extended shortcode templates from your active theme. See Pluginize.com for more details.
- Added: Customize font colors, font sizes, and margins around shortcodes via Customizer controls.
- Added: Network-wide import/export support.
- Added: Ability to declare support for Divi Builder.

## 1.3.4 – 2016-12-7

### Bug Fixes

- Fixed: Fixed compatibility issue with WordPress 4.7 and ksort errors.

## 1.3.3 – 2016-11-29

### Enhancements

- Moved to EDD license handling from WooCommerce.

## 1.3.2 – 2016-11-14

### Bug Fixes

- Fixed: Fix issue with term name display in taxonomy list template. Term slug was showing instead, due to change in 1.3.0 release.

## 1.3.1 – 2016-09-28

### Bug Fixes

- Fixed issue with enqueued JS that prevents metabox toggling in post editor.

## 1.3.0 – 2016-09-20

### Enhancements

- Added: Options to add post type to WordPress category and tag archives.
- Added: Google AMP support via [https://wordpress.org/plugins/amp/](https://wordpress.org/plugins/amp/)
- Added: New template for single custom post types.
- Added: Filter for the featured image size parameters in all shortcode templates.
- Added: Post IDs to template filters for more fine-tuned control of content.

### Bug Fixes

- Fixed: Removed need for extra page refresh for network post types/taxonomies to appear.
- Fixed: Prevent possible empty term links.
- Fixed: Issues surrounding javascript and stylesheet paths on IIS hosting.
- Fixed: Proper use of term slug for shortcode attributes instead of term label.
- Fixed: More admin notices are dismissable.

### Misc

- Removed: Plugin shop section from Dashboard widget.
- Updated: Latest version of CMB2 library.
- Updated: Moved from PHP’s `rand()` function to `mt_rand()`.

## 1.2.1 – 2016-06-21

### Bug Fixes

- Fix error with activation key option
- Fix to remove ads from CPTUI when Extended activated

## 1.2.0 – 2016-06-06

### Bug Fixes

- Fix for tax query.
- Fix for post type in query.
- Filterable relation for AND in tax query.

### Enhancements

- Taxonomy list shortcode.
- Post slider shortcode.
- Allow array of styles and scripts per shortcode.

## 1.1.1 – 2016-5-19

**Bugfixes**

- Fix for taxonomy label selecting first input
- Fix for taxonomy not filtering query
- Use AND for tax query
- Use tax slug instead of Name

## 1.1.0 – 2016-04-19

**Bugfixes**

- Better description for search on modal.
- Fixes EDD downloads not displaying if none chosen.
- Fixed Woo Product template not displaying title.
- Fix for quotes in shortcode attributes.
- Fixed EDD Default template displaying posts, not downloads.
- Fix for custom CPT, search box shows blog posts instead of CPT posts.

**Enhancements**

- Only show featured image column if CPT supports it in post list columns.
- Add dismiss button to License Key message.
- Add title and featured image options to the WooCommerce Product modal.
- Add quantity option to list template.
- Make the list templates available to all CPTs.
- New templates for WooCommerce, Easy Digital Downloads and ordered/unordered list.
- Enhanced HTML in templates. Enhanced CSS.
- 66 template hooks added for displaying custom data

## 1.0.0 – 2016-04-05

Initial release

Updated Dec 12, 2022 9:05 PM

---

## CPTUI-Extended Frequently Asked Questions

**Source:** [https://docs.pluginize.com/article/frequently-asked-questions/](https://docs.pluginize.com/article/frequently-asked-questions/)

## How do I access the Shortcode generator?

If you are using the block editor, you will need to make use of the “Classic Editor” block to get access to the legacy TinyMCE UI where our modal popup button can be found. If you are still using the classic editor in general, and not one based on blocks, then it should be in the same spot for the post content area.

## When will the block support my most used or favorite layout?

As soon as we can manage. We definitely want to get everything converted into the block as soon as we can, but we are staggering out those changes over time.

## Do I need to be running WordPress multisite to make use of Custom Post Type UI Extended?

No, you do not. If your primary interest is the shortcode builder, then you will be just fine. Multisite is not a requirement. The only requirement is
[Custom Post Type UI](http://wordpress.org/plugins/custom-post-type-ui/)

## Will installing Custom Post Type UI Extended affect my post types and taxonomies that I created using Custom Post Type UI?

No, it will not have any effect on existing registered post types and taxonomies. The network-level settings for Custom Post Type UI Extended creates a second saved option that registers just those across all the sites.

## Is the shortcode builder limited to just post types registered with Custom Post Type UI?

No, we have made it inclusive of all public registered post types available on your website.

## I don’t see the button to use the shortcode builder, where is it at?

The appearance of the button is dependent on which version of the post editor you are presently looking at. There are two available with out-of-the-box WordPress. The visual editor and then the text editor.

If you are on the visual editor tab, it will look like the button shown below.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/56fb2182c6979111dc399fa7/file-ZNSGAE8qKr.png)

If you are on the text tab, it will look like this one.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/56fb219fc6979111dc399fa8/file-9GFjLLO1ZM.png)

## What is the difference between single site settings and network-wide settings?

When working with Custom Post Type UI Extended, this will be an important distinction to make. You will be able to create post types and taxonomies in both levels of your website.

### Single site settings

Creating post types and taxonomies from within an individual subsite are going to do so only for the site you created them in. This is the exact same behavior as with Custom Post Type UI without the Extended addon enabled. You can have many different post types and taxonomies created for individual subsite needs with this.

### Network-wide site settings

Creating post types and taxonomies from the network admin panel is going to do so for every site in your network. CPTUI Extended will handle the registration of them for you and no extra action is needed from you. With that, tweaking the settings for the network-wide settings is just as easy and propagates across all automatically as well.

## How do I hide or show the Dashboard widget?

When you are viewing your Dashboard, if you want to hide or re-show the Pluginize-provided Dashboard widget, you will need to click the “Screen options” tab at the top of the page, and either check or uncheck the “Pluginize Support” option presented.

If you do not have a “Screen options” tab available, check and see if you have any plugins installed that may be visually removing it for you.

Updated Dec 12, 2022 9:06 PM

---

## CPTUI-Extended Introduction

**Source:** [https://docs.pluginize.com/article/custom-post-type-ui-extended-intro/](https://docs.pluginize.com/article/custom-post-type-ui-extended-intro/)

# Custom Post Type UI Extended

Welcome to the official Custom Post Type UI Extended documentation.

All of the documentation content here for Custom Post Type UI Extended relates specifically to the extension, and not post types in general. For Custom Post Type UI and post types in general, please see the
[Custom Post Type UI section.](https://docs.pluginize.com/category/126-custom-post-type-ui)

## Current version

The current version of Custom Post Type UI Extended is 1.4.3 and it was released in March, 2017.

## Custom Post Type UI Extended Features

### Network-wide post types and taxonomies

If you are running a WordPress Multisite network, Custom Post Type UI Extended will help you create network-wide post types and taxonomies. This will allow you to create a post type or taxonomy in a single location, and have it immediately available for every site in your network. You will no longer have to recreate the same one in each site or update one change for each one. All the while, you can still create post types and taxonomies for specific individual sites.

To begin with network post types and taxonomies, visit your network admin and network-activate Custom Post Type UI Extended before visiting the network admin panel.

### Blocks

Starting with version 1.7.0, we are finally working to convert all of our layouts to be accessible via a WordPress block. This is not presently going to completely replace existing shortcodes previously generated with CPTUI Extended and we are not planning to deprecate the shortcodes. Instead, we are bringing our layouts into modern WordPress content creation and making it easier to insert a layout.

An instant benefit for using the block is re-usability. No longer will you need to click the legacy TinyMCE icon and start over setting all the fields again. Instead you will be able to tweak just that one detail that you want to try out, and also see the results in real time before you even click publish or save.

We will be rolling these out over multiple releases and continue evolving the settings for each layout until we have 100% recreation, so make sure you keep uptodate. If you don’t yet see the layout you want to use in the block, then the shortcode generator is your go-to for the time being.

### Shortcode generator

With the shortcode generator, provided by Custom Post Type UI Extended, we have made it extremely easy to display individual post type posts or lists of posts type posts anywhere that you can use a shortcode. We provide a new UI to select the display parameters and click a button to insert the shortcode wherever you want. Once saved, we take care of the rest and display the data you selected.

### Extra Custom Post Type UI post types information

To aid in seeing the bigger picture regarding your content, we have added more information to the list of posts for your Custom Post Type UI post types. This extra information includes showing the post type post ID, the author for the post, and if there is a featured image added, a preview of the currently set thumbnail.

### Integrated documentation and support

We have made it easy to search available documentation for Custom Post Type UI and Custom Post Type UI Extended right from your WordPress dashboard. No need to try and hunt down the location yourself. You can also start a new support ticket with WebDevStudios to get one-on-one support for any questions you have.

Updated Dec 12, 2022 9:06 PM

---

## Contributing back to Custom Post Type UI.

**Source:** [https://docs.pluginize.com/article/contributing-back-to-custom-post-type-ui/](https://docs.pluginize.com/article/contributing-back-to-custom-post-type-ui/)

We at WebDevStudios love when users contribute back to any of our plugins, and Custom Post Type UI is definitely no exception. However, some may not know how they could contribute to the plugin. I would like to lay out some various methods that may pique your interest.

## Translate Custom Post Type UI

If you are multi-lingual, we would love to have your help translating Custom Post Type UI into other languages besides English. You can see where we are at at the
[Custom Post Type UI Language Pack status page](https://translate.wordpress.org/projects/wp-plugins/custom-post-type-ui). Many languages are only partially covered or not covered at all. If you are interested, let us know and we will contact the Polyglots team to get you authorized to translate the files.

## Beta test

We test Custom Post Type UI as much as we can before a new major release, but we are going to fail in testing all possible scenarios and setups. Because of this, we are always in need of our actual users to help test newest upcoming versions. Whether it’s with a developer clone of an existing website, or a brand new install, testing things out and reporting what you find will help us create a much more solid release.

## Help confirm reported bugs

Alongside helping beta test, just helping to confirm open reported bugs goes a long way. If you have coding skills, trying to solve the bug yourself and contributing back what you find helps us resolve bugs quicker and put the best solution out there. If we accept your contributions, which we try to as much as possible, we even give you credit in the readme file for that change. Your name will be there for all to see.

## Rate Custom Post Type UI

Did you know that you can rate plugins in the WordPress.org plugin repo? We love seeing reviews come in for Custom Post Type UI, whether good or bad. We do keep an eye on them and they let us know what we are doing well and what we may not be doing so well on. When we are not doing so well, we evaluate why and work hard to amend the presented issues. Leaving your own feedback can help with that and help us make sure we are consistently presenting the best product we can.

## Promote

Last contribution method I want to cover is promoting Custom Post Type UI. If you have had good experiences, promote Custom Post Type UI to your friends and colleagues. Blog about how you utilized Custom Post Type UI to solve problems you faced, and what you did to reach a solution. Perhaps give a talk about the plugin at a local meetup. Any way you can to spread word about our plugin helps promote it and let more people know about it.

Updated Dec 12, 2022 8:57 PM

---

## Migrating Custom Post Type UI settings between installs.

**Source:** [https://docs.pluginize.com/article/migrating-custom-post-type-ui-settings/](https://docs.pluginize.com/article/migrating-custom-post-type-ui-settings/)

When we released version 1.0.0 of Custom Post Type UI, we added the ability to import and export settings for all of your post types and taxonomies. Not only did this help make your CPTUI settings portable, but it also proved to help with other issues as users created various content types.

> You will need at least version 1.0.0 on both sites for this to work

In order to migrate the settings between sites, you will need to take the following steps.

1. Visit the Import/Export Custom Post Type UI page in the current WordPress site.
2. If you are wanting to migrate post types, select the data in the right textarea and press cmd+c for Mac, and ctrl+c for Windows.
3. If you are wanting to migrate taxonomies, click the Taxonomies tab at the top before selecting the data in the right textarea and pressing cmd+c for Mac, and ctrl+c for Windows.
4. Log into the new WordPress site that you want to import the settings to, and make sure you have Custom Post Type UI active.
5. Visit the Import/Export Custom Post Type UI page and select the appropriate tab based on what you are importing.
6. Paste the content into the left side, empty textarea and click import.
7. If everything went well, you should now have the settings imported and registering in the new site.
8. Repeat as necessary for each site wanting to be imported.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/5702c35a903360288a77faca/file-JElFHWbFD6.png)

Updated Dec 12, 2022 9:10 PM

---

## Adding post type support for specific features from other plugins.

**Source:** [https://docs.pluginize.com/article/third-party-support-upon-registration/](https://docs.pluginize.com/article/third-party-support-upon-registration/)

Some third party themes or plugins have features that can be added to custom post types, but the support needs to be done at the point of post type registration. If a plugin you are using says to add a provided value to the “supports” section of your post type’s registration parameters, this is where you would provide the value. Custom Post Type UI has had an extra field option to allow providing custom “supports” elements since version 1.1.0.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/57049fd8903360288a78045a/file-CHbPUMigYV.png)

## Genesis SEO and archives features

If you are a Genesis theme user, then you may want to add SEO settings and archives support for your custom post types. To do so, you should provide the following two items in the custom “supports” field for each post type you want supported:

- genesis-seo
- genesis-cpt-archives-settings

Once entered, save your post type. After that, the post types should receive support for the features.

## Yet Another Related Posts Plugin

The “Yet Another Related Posts Plugin”, or “YARPP” for short has built in support with Custom Post Type UI, though is handled differently than above. You will still enter the support for it the same way, but internal code associates the intended support in the proper way so you don’t have to worry about it.

To add YARPP support for the post type, add “yarpp” to the custom supports field.

## Jetpack

### Publicize support

If you want to add support for the Jetpack’s publicize module, add ‘publicize’ to the custom supports field. More information about Publicize support can be found at [https://jetpack.com/support/publicize/](https://jetpack.com/support/publicize/)

### Markdown support

If you want to add support for the Jetpack’s markdown module, add ‘wpcom-markdown’ to the custom supports field. More information about Markdown support can be found at [https://jetpack.com/support/markdown/](https://jetpack.com/support/markdown/)

> If you know of any other plugins that have feature support handled this way, let us know and we can get them added to the list.

## Instant Articles for WP

> Note: if wanting all Custom Post Type UI post types then you will need Custom Post Type UI version 1.3.0 or higher due to the cptui_get_post_type_slugs() function usage.

If you wan to add support for Instant articles via [https://wordpress.org/plugins/fb-instant-articles/](https://wordpress.org/plugins/fb-instant-articles/) you will need to utilize a filter made available by the plugin itself. This plugin has a different setup than the custom “supports” field highlighted above.

```
function my_cptui_add_post_types_to_instant_articles( $post_types ) {
	
		// Option 1: If you want ALL of your CPTUI items.
		$cptui_post_types = cptui_get_post_type_slugs();

		// Option 2: If you want just some of them.
		$cptui_post_types = array( 'my_post_type', 'my_other_post_type' );

		return array_merge(
			$post_types,
			$cptui_post_types
		);
}
add_filter( 'instant_articles_post_types', 'my_cptui_add_post_types_to_instant_articles' );
```

The code above should not be used as is, but instead a decision made if you want to use ALL post types registered with CPTUI, or if you just want support for specific ones. Option 1 will use all of them, while option 2 requres specifying the slugs to add support for.

## Slug field for non publicly queryable post types

If you have a post type set to not be publicly queryable, but still want to have the “slug” field made available to you in the Block Editor, you can pass a value of “slug” to the “custom supports” field. This will re-add the UI to the block editor for that non-public post, and allow you access to the slug field.

> This is Block based only, and does not work with Classic editor.

Updated Oct 12, 2023 3:50 PM

---

## Changing post type or taxonomy slugs

**Source:** [https://docs.pluginize.com/article/changing-post-type-or-taxonomy-slugs/](https://docs.pluginize.com/article/changing-post-type-or-taxonomy-slugs/)

## Post type renaming

In Custom Post Type UI version 1.1.0, we added the ability for our users to rename post type slugs while preserving the posts created for the post type.

If you are wanting to rename the slug used for a post type, follow these steps.

1. Click on the “Edit Post Types” tab in the “Add/Edit Post Types” area.
2. Select the post type you want to rename so the proper post type is chosen for editing.
3. Enter the new slug you want to use.
4. Check the available checkbox to migrate the posts in the post type.
5. Click the “Save Post Type” button.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/56fdea72903360288a77edec/file-gMT3II8jdM.png)

If everything went well, you should have a newly renamed post type that has all the posts from the previous post type slug. The original post type should also be deleted from the Custom Post Type UI settings.

## Taxonomy renaming

In version 1.3.0, we added support for taxonomy renaming with preservation of terms.

If you are wanting to rename the slug used for a taxonomy, follow these steps.

1. Click on the “Edit Taxonomies” tab in the “Add/Edit Taxonomies” area.
2. Select the taxonomy you want to rename so the proper taxonomy is chosen for editing.
3. Enter the new slug you want to use.
4. Check the available checkbox to migrate the terms in the taxonomy.
5. Click the “Save Taxonomy” button.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/56e826ea90336026d871841e/images/56fdec79903360288a77eded/file-bLQy3sknHw.png)

If everything went well for this, you should have a newly renamed taxonomy that has all the terms from the previous taxonomy. The original taxonomy should also be deleted from the Custom Post Type UI settings.

## Caveats of renaming post types or taxonomies

One thing you will need to keep in mind with renaming your post types or taxonomies is that if you’re referencing the slugs anywhere in template files, plugin files, or settings in the WordPress admin, you will need to make sure those are updated to the new slugs. Without taking these steps, those locations will no longer accurately work or query the proper data.

Updated Dec 12, 2022 9:08 PM

---

## How to add support for presently missing registration parameters

**Source:** [https://docs.pluginize.com/article/how-to-add-support-for-presently-missing-registration-parameters/](https://docs.pluginize.com/article/how-to-add-support-for-presently-missing-registration-parameters/)

While we strive to provide fields for as many post type and taxonomy parameters as we can, we admit we do not have 100% of all available parameters. We do try to provide the most useful fields to our users. On occasion, people run into parameters that just aren’t supported yet. If you are in that position, do not fret. You are not out of luck.

## Adding missing parameters to post types before registration.

Right before the registration of post types, we run the parameters through a filter for last-second modifications by others. Because of this, you are able to add support for the missing parameter just in time.

All code examples should be placed in your active theme’s functions.php file or into your own custom plugin.

### Code snippet from in Custom Post Type UI for the post type arguments

> This is not part that you copy/paste to customize the arguments

```
/**
 * Filters the arguments used for a post type right before registering.
 *
 * @since 1.0.0
 * @since 1.3.0 Added original passed in values array
 *
 * @param array  $args      Array of arguments to use for registering post type.
 * @param string $value     Post type slug to be registered.
 * @param array  $post_type Original passed in values for post type.
 */
$args = apply_filters( 'cptui_pre_register_post_type', $args, $post_type['name'], $post_type );

return register_post_type( $post_type['name'], $args );
```

The cptui_pre_register_post_type passes in the $args variable, the current post type slug that is being registered, and the original array of post type data from the CPTUI settings.

The $args variable is going to hold an array of data that matches the proper parameter for the register_post_type function. This array will have all the calculated values from the CPTUI settings ready to use. Refer to the
[register_post_type](https://codex.wordpress.org/Function_Reference/register_post_type) WordPress codex page for more information all of the parameters. With this variable, you should be able to add your own array index values and return the new array.

Unless you’re wanting to have the custom setting applied to all of the post types you’re registering, you are going to want to utilize the second filter parameter to conditionally add the setting.

### Example amending the post type arguments

> These are older examples. “Delete with user” UI fields were added in 1.6.0.

```
function my_cptui_amend_post_type_args( $args, $post_type_slug, $post_type_settings ) {
	// Set the post type posts to be deleted when their author's user is deleted.
	$args['delete_with_user'] = true;

	return $args;
}
add_filter( 'cptui_pre_register_post_type', 'my_cptui_amend_post_type_args', 10, 3 );
```

```
function my_cptui_amend_post_type_args( $args, $post_type_slug, $post_type_settings ) {
	// Set to delete the posts when the author's user is deleted, only for the `movie` post type.
	if ( 'movie' === $post_type_slug ) {
		$args['delete_with_user'] = true;
	}
	
	return $args;
}
add_filter( 'cptui_pre_register_post_type', 'my_cptui_amend_post_type_args', 10, 3 );
```

> Don’t use both examples at the same time unless you plan to rename one of the functions. Using both, as is, will result in a PHP error due to duplicate function name.

## Adding missing parameters to taxonomies before registration.

Just like with post types, we also run the determined taxonomy parameters through a filter for last-second modifications.

### Code snippet from in Custom Post Type UI for the taxonomy arguments

> This is not part that you copy/paste to customize the arguments

```
/**
 * Filters the arguments used for a taxonomy right before registering.
 *
 * @since 1.0.0
 * @since 1.3.0 Added original passed in values array
 *
 * @param array  $args     Array of arguments to use for registering taxonomy.
 * @param string $value    Taxonomy slug to be registered.
 * @param array  $taxonomy Original passed in values for taxonomy.
 */
$args = apply_filters( 'cptui_pre_register_taxonomy', $args, $taxonomy['name'], $taxonomy );

return register_taxonomy( $taxonomy['name'], $object_type, $args );
```

Just like with the post type filter, the cptui_pre_register_taxonomy filter filters the $args variable used for the taxonomy being registered. It also passes in the current taxonomy slug being registered, and the original array of taxonomy data. Refer to the
[register_taxonomy](https://codex.wordpress.org/Function_Reference/register_taxonomy) WordPress Codex page for more information all of the parameters. Once again, you can add your own array index values and return the new array.

### Example amending the post type arguments

> These are older examples. A field for specifying custom callbacks was added in 1.6.0.

```
function my_cptui_amend_taxonomy_args( $args, $taxonomy_slug, $taxonomy_settings ) {
	// Set the callback for the taxonomy metaboxes to be "my_custom_function". You would need to define that
	// function yourself and have it handle registering the metabox output.
	$args['meta_box_cb'] = 'my_custom_function';

	return $args;
}
add_filter( 'cptui_pre_register_taxonomy', 'my_cptui_amend_taxonomy_args', 10, 3 );
```

```
function my_cptui_amend_taxonomy_args( $args, $taxonomy_slug, $taxonomy_settings ) {
	// Set the callback for the taxonomy metaboxes to be "my_custom_function". You would need to define that
	// function yourself and have it handle registering the metabox output.
	if ( 'genre' === $taxonomy_slug ) {
		$args['meta_box_cb'] = 'my_custom_function';
	}
	
	return $args;
}
add_filter( 'cptui_pre_register_taxonomy', 'my_cptui_amend_taxonomy_args', 10, 3 );
```

> Don’t use both examples at the same time unless you plan to rename one of the functions. Using both, as is, will result in a PHP error due to duplicate function name.

Updated Dec 12, 2022 9:09 PM

---

## Ensuring your post type posts show in search results.

**Source:** [https://docs.pluginize.com/article/post-type-posts-in-search-results/](https://docs.pluginize.com/article/post-type-posts-in-search-results/)

Out of the box, WordPress does not include custom post types in the search results. Because of this, you need to add the post types to the query yourself.

You will add the following snippets to your theme’s functions.php file or if you want, to a custom plugin build just for your own website.

**Don’t want to worry about coding this yourself?**

**This is available via user interface with our premium CPTUI-Extended product.**

## Adding all CPTUI post types to the search results.

> This example requires Custom Post Type UI 1.3.0+ due to cptui_get_post_type_slugs() function.

```
<?php
function my_cptui_add_post_type_to_search( $query ) {
	if ( is_admin() ) {
		return;
	}

	if ( $query->is_search() ) {
		$cptui_post_types = cptui_get_post_type_slugs();
		$query->set(
			'post_type',
			array_merge(
				array( 'post' ), // May also want to add the "page" post type.
				$cptui_post_types
			)
		);
	}
}
add_filter( 'pre_get_posts', 'my_cptui_add_post_type_to_search' );
```

In this code we check to see if WordPress is performing a search. If that’s true, then we fetch an array of all CPTUI based post type slugs, and merge it into an array with the “post” post type. With that array constructed, we pass in it all into the query parameters so that WordPress knows to query within them all.

## Adding only some CPTUI post types to the search results.

```
<?php
function my_cptui_add_post_type_to_search( $query ) {
	if ( $query->is_search() ) {
		// Replace these slugs with the post types you want to include.
		$cptui_post_types = array( 'my_post_type', 'my_other_post_type' );

		$query->set(
			'post_type',
			array_merge(
				array( 'post' ),
				$cptui_post_types
			)
		);
	}
}
add_filter( 'pre_get_posts', 'my_cptui_add_post_type_to_search' );
```

This snippet will be very much like the first one, except we’re only including specific post types from CPTUI.

Updated Jan 17, 2023 5:53 PM

---

## Adding featured image support to your post types

**Source:** [https://docs.pluginize.com/article/adding-featured-image-support-to-your-post-types/](https://docs.pluginize.com/article/adding-featured-image-support-to-your-post-types/)

Featured images are an extremely popular and handy piece of content that help make your post content stand out and shine, whether it’s from you featured articles section, all the way to when shared on social media. If your theme does not already support featured images, you will need to use one of the following snippets.

> Any of the following snippets you choose would need to go into your theme’s functions.php

## Adding support for all post types

If you want support for all post types, use the snippet below.

```
function my_cptui_featured_image_support() {
	add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'my_cptui_featured_image_support' );
```

## Adding support for all Custom Post Type UI post types

If you want support for just your CPTUI post types, the snippet below can be used.

```
function my_cptui_featured_image_support() {
	$cptui_post_types = cptui_get_post_type_slugs();
	add_theme_support( 'post-thumbnails', $cptui_post_types );
}
add_action( 'after_setup_theme', 'my_cptui_featured_image_support' );
```

## Adding support for specific post types

If you want support for very specific post types, this snippet will work.

```
function my_cptui_featured_image_support() {
	// Replace these post type slugs with the actual slugs you need support for.
	$cptui_post_types = array( 'my_post_type', 'my_other_post_type' );
	add_theme_support( 'post-thumbnails', $cptui_post_types );
}
add_action( 'after_setup_theme', 'my_cptui_featured_image_support' );
```

Updated Dec 12, 2022 9:08 PM

---

## How to reset your Custom Post Type UI settings

**Source:** [https://docs.pluginize.com/article/resetting-cptui-settings/](https://docs.pluginize.com/article/resetting-cptui-settings/)

If you wish to start fresh and remove all current post type or taxonomy settings, there are a few ways to do so.

> None of the provided methods will delete the content created with the post types or taxonomies, just the settings used to register them. If you want to delete the content as well, do so via the appropriate WordPress screens for each.

## Manually delete each registered item

The first way would be through the edit tab for both post types and taxonomies. Select each one and use the provided delete button.

## Delete directly from database tables

When it comes to CPTUI specific settings, we use two different rows in the wp_options table.

> Your prefix may be different than “wp_”. If you are not sure what yours is, check your wp-config.php file.

In the options table, look for rows with an option key of either

```
cptui_post_types
```

or

```
cptui_taxonomies
```

and manually delete them.

> Would be advisable to back up your database first just in case.

## Delete from the Import/Export page

If you do not want to manually go through each post type and taxonomy, and are not comfortable editing the database tables directly, there is one last way you could clear out the settings.

If you visit the Import/Export page and import the following, it will also clear out your saved options:

```
{""}
```

The double quotes are important to make this successful. Single quotes will report an import failure.

Essentially what this does is import an empty value, and clear out the previous values.

Updated Dec 12, 2022 9:09 PM

---

## How to add your new post type to WordPress category and tag archives

**Source:** [https://docs.pluginize.com/article/post-types-in-category-tag-archives/](https://docs.pluginize.com/article/post-types-in-category-tag-archives/)

Out of the box, WordPress does not include custom post types in the archives for the default categories and tags archives. Because of this, you need to add the post types to the query yourself.

You will add the following snippets to your theme’s functions.php file or if you want, to a custom plugin build just for your own website.

**Don’t want to worry about coding this yourself?**

**This is available via user interface with our premium CPTUI-Extended product.**

## Adding all CPTUI post types to the archives.

> This example requires Custom Post Type UI 1.3.0+ due to cptui_get_post_type_slugs() function.

```
function my_cptui_add_post_types_to_archives( $query ) {
	// We do not want unintended consequences.
	if ( is_admin() || ! $query->is_main_query() ) {
		return;    
	}

	if ( is_category() || is_tag() && empty( $query->query_vars['suppress_filters'] ) ) {
		$cptui_post_types = cptui_get_post_type_slugs();

		$query->set(
			'post_type',
			array_merge(
				array( 'post' ),
				$cptui_post_types
			)
		);
	}
}
add_filter( 'pre_get_posts', 'my_cptui_add_post_types_to_archives' );
```

In this code, we check for if we’re on a category archive or a tag archive and if we’re not suppressing filters. If that’s all true, then we fetch an array of all CPTUI based post type slugs, and merge it into an array with the ‘post’ post type. With that array constructed, we pass it into the query parameters so that WordPress knows to query for all these post types.

## Adding only some CPTUI post types to the archives.

```
function my_cptui_add_post_types_to_archives( $query ) {
	// We do not want unintended consequences.
	if ( is_admin() || ! $query->is_main_query() ) {
		return;    
	}

	if ( is_category() || is_tag() && empty( $query->query_vars['suppress_filters'] ) ) {

		// Replace these slugs with the post types you want to include.
		$cptui_post_types = array( 'my_post_type', 'my_other_post_type' );

		$query->set(
	  		'post_type',
			array_merge(
				array( 'post' ),
				$cptui_post_types
			)
		);
	}
}
add_filter( 'pre_get_posts', 'my_cptui_add_post_types_to_archives' );
```

This snippet will be very much like the first one, except we’re only including specific post types from CPTUI.

Make sure to change “my_post_type” and “my_other_post_type” to actually match your post type slugs that you want included.

## Notes

If you only one either the category archive or the tag archive, then amend the second if statement like so:

```
if ( is_category() && empty( $query->query_vars['suppress_filters'] ) )
```

or

```
if ( is_tag() && empty( $query->query_vars['suppress_filters'] ) )
```

Updated Jan 17, 2023 5:39 PM

---

## Custom Post Type UI Introduction

**Source:** [https://docs.pluginize.com/article/custom-post-type-ui-intro/](https://docs.pluginize.com/article/custom-post-type-ui-intro/)

# Custom Post Type UI

## Welcome

Hello and welcome to the official Custom Post Type UI documentation. Here we will do our best to provide all the information you need to accomplish what you want with your site and your newly created post types and taxonomies, powered by Custom Post Type UI.

> Please note that this will not be an end all, be all, guide to custom post types and taxonomies in general.

## Quickstart links:

- [I’m trying to…](http://docs.pluginize.com/article/86-im-trying-to)
- [Changelog](https://wordpress.org/plugins/custom-post-type-ui/changelog/)
- [FAQ](#)

Updated Dec 12, 2022 8:58 PM

---

