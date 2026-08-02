# Developers

*Category from FacetWP documentation*

---

## Developers

**Source:** [https://facetwp.com/help-center/developers/](https://facetwp.com/help-center/developers/)

[Indexing hooks](https://facetwp.com/help-center/developers/hooks/indexing-hooks/)
					[Querying hooks](https://facetwp.com/help-center/developers/hooks/querying-hooks/)
					[Output hooks](https://facetwp.com/help-center/developers/hooks/output-hooks/)
					[Advanced hooks](https://facetwp.com/help-center/developers/hooks/advanced-hooks/)
					[JavaScript reference](https://facetwp.com/help-center/developers/javascript-reference/)
					[Shortcodes reference](https://facetwp.com/help-center/developers/shortcodes-reference/)
					[FacetWP REST API](https://facetwp.com/help-center/developers/facetwp-rest-api/)
					[How FacetWP works](https://facetwp.com/help-center/developers/how-facetwp-works/)
					[The FacetWP URL](https://facetwp.com/help-center/developers/the-facetwp-url/)
					[FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
					[FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)
					[Tutorials](https://facetwp.com/help-center/tutorials/)
					[Changelog](https://facetwp.com/help-center/changelog/)
					[News and announcements](https://facetwp.com/help-center/news/)

                    Last updated: November 27, 2025

---

## FacetWP and taxonomies

**Source:** [https://facetwp.com/help-center/developers/facetwp-and-taxonomies/](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)

This page is meant to give a comprehensive overview in one place of all aspects and intricacies of using FacetWP with taxonomies.

[Taxonomies](https://developer.wordpress.org/themes/classic-themes/basics/categories-tags-custom-taxonomies/), and specifically [“hierarchical” taxonomies](#what-is-a-hierarchical-taxonomy) are one of the most important ways to structure and order content in WordPress. This makes them an excellent candidate to filter content by, with [facets](/help-center/facets/).

FacetWP works very well with (hierarchical) taxonomies. Any [supported listing template](/help-center/listing-templates/) can be filtered with [facets that have a (hierarchical) taxonomy as data source](#use-a-hierarchical-taxonomy-as-facet-data-source).

And, any [facet type](/help-center/facets/facet-types/) can be placed [on a taxonomy term archive page](#use-facetwp-on-taxonomy-term-archives). Also facets that have [that same (hierarchical) taxonomy as data source](#using-a-hierarchical-taxonomy-facet-on-a-term-archive-page).

## What is a taxonomy?

First things first: what is a taxonomy? A [taxonomy](https://developer.wordpress.org/themes/classic-themes/basics/categories-tags-custom-taxonomies/) is a WordPress construct that stores and orders “terms”.

Taxonomies can be “attached” to one or more [built-in or custom post types](https://developer.wordpress.org/themes/basics/post-types/). In posts of these post types, the user will see the option to check one or more terms for each taxonomy that is attached to that post type.

### What is a “hierarchical” taxonomy?

![A hierarchical taxonomy with five levels](https://facetwp.com/wp-content/uploads/2025/11/hierarchical_taxonomy.png)A hierarchical taxonomy with five levels.
Any taxonomy can be defined ([registered](#how-to-create-a-custom-hierarchical-taxonomy)) as being “non-hierarchical” ( or “flat”) or “hierarchical”.

In a non-hierarchical/flat taxonomy, there are no levels: all terms are at the same level. In a hierarchical taxonomy, the terms are structured in a tree-like hierarchy: one or more (nested) levels of parent and child terms. The example on the right shows a “location” taxonomy with five nested levels of terms.

WordPress [has several built-in taxonomies](https://developer.wordpress.org/themes/basics/categories-tags-custom-taxonomies/). Most used is the 
```
category
```

 taxonomy, which is a **hierarchical** taxonomy. When you add a new category, you can set its parent category, which creates a hierarchical relationship between these categories.

Another built-in taxonomy is 
```
post_tag
```

, which lets you select tags in posts. This is a **non-hierarchical** or “flat” taxonomy: tags never have a parent or child tag. It is possible to [make tags hierarchical](https://css-tricks.com/how-and-why-to-convert-wordpress-tags-from-flat-to-hierarchical/#aa-how-to-convert-wordpress-built-in-flat-tags-to-the-hierarchical-equivalent), but if you need this, it would be better to [create a custom taxonomy instead](#how-to-create-a-custom-hierarchical-taxonomy).

Besides
```
category
```

 and 
```
post_tag
```

, WordPress has a few more built-in taxonomies: 
```
post_format
```

, 
```
nav_menu
```

, and 
```
link_category
```

. But these generally are not used to structure and filter your content.

### How to create a custom (hierarchical) taxonomy

If WP’s built-in 
```
category
```

 (hierarchical) and 
```
post_tag
```

(non-hierarchical) taxonomies are not enough to structure (and filter) your content, you can add your own custom taxonomies.

As many plugins and themes do, you can programmatically add taxonomies with WP’s [register_taxonomy()](https://developer.wordpress.org/reference/functions/register_taxonomy/) function. For example, WooCommerce adds the 
```
product_cat
```

 taxonomy for product categories.

Or you can use a plugin like [Advanced Custom Fields](https://www.advancedcustomfields.com/resources/registering-a-custom-taxonomy/), [Pods](https://docs.pods.io/creating-editing-pods/creating-a-custom-taxonomy/) or [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/) to create (“register”) your own custom taxonomies.

![The 'Hierarchical' setting in Advanced Custom Fields' 'Edit Taxonomy' settings.](https://facetwp.com/wp-content/uploads/2025/11/acf_hierarchical_taxonomy_setting.png)The “Hierarchical” setting in Advanced Custom Fields’ “Edit Taxonomy” settings.
To be “hierarchical”, (custom) taxonomies need to have the 
```
hierarchical
```

 [argument of register_taxonomy()](https://developer.wordpress.org/reference/functions/register_taxonomy/#arguments) set to 
```
true
```

. If you use the above-mentioned plugins, this is a setting you can enable, as shown on the right for Advanced Custom Fields.

### How to make an existing taxonomy hierarchical

To be hierarchical, existing (custom) taxonomies would need to have the 
```
hierarchical
```

 argument set to 
```
true
```

 when they are created with WP’s [register_taxonomy()](https://developer.wordpress.org/reference/functions/register_taxonomy/) function.

If you created the custom taxonomy yourself, using 
```
register_taxonomy()
```

, just set the 
```
hierarchical
```

 [argument of register_taxonomy()](https://developer.wordpress.org/reference/functions/register_taxonomy/#arguments) to 
```
true
```

. If you used a plugin like [Advanced Custom Fields](https://www.advancedcustomfields.com/resources/registering-a-custom-taxonomy/), [Pods](https://docs.pods.io/creating-editing-pods/creating-a-custom-taxonomy/) or [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/)), this is a setting you can enable.

However, if you don’t have access to the 
```
register_taxonomy()
```

 arguments, for example because the taxonomy was registered in a theme or plugin, you can also set the 
```
hierarchical
```

 argument to 
```
true
```

 with the [register_taxonomy_args filter](https://developer.wordpress.org/reference/hooks/register_taxonomy_args/), like this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'register_taxonomy_args', function($args, $taxonomy) {
  if ( $taxonomy === 'my_taxonomy_name' ) { // Replace 'my_taxonomy_name' with the name of your taxonomy
    $args['hierarchical'] = true;
  }
  return $args;
}, 10, 2 );
```

For some taxonomies, you may need to use specific hooks, like for WooCommerce product attributes and product tags, which are both taxonomies:

#### Make product attributes or product tags hierarchical

[WooCommerce](/help-center/using-facetwp-with/woocommerce/) product attributes (which are custom taxonomies) are not hierarchical by default. If you want them to be, add the following code to your (child) theme’s functions.php. Make sure to replace 
```
color
```

 with the name (the slug) of your attribute, and keep 
```
pa_
```

 before it:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Make Woo product attributes hierarchical.
// Replace "color" with the name (slug) of your attribute. Keep "pa_" before it.
add_filter('woocommerce_taxonomy_args_pa_color', function( $args ) {
  $args['hierarchical'] = true;
  return $args;
});
```

Now you can use this attribute in a hierarchical facet and show parent and child terms/choices.

The same can be done with product tags:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Make Woo product tags hierarchical.
add_filter('woocommerce_taxonomy_args_product_tag', function( $args ) {
  $args['hierarchical'] = true;
  return $args;
});
```

Note:In one of the category/term ordering plugins that FacetWP supports, [Category Order and Taxonomy Terms Order](/help-center/using-facetwp-with/category-order-and-taxonomy-terms-order/), taxonomies need to be hierarchical to show up in the ordering interface. So, to order product attributes or product tags with this plugin, use the above snippets to make them hierarchical first. You can also order product categories and product attribute terms with the default WooCommerce drag-and-drop interface in their WP list screens. Both can be ordered like this by default. Product attribute taxonomies do not have to be hierarchical for this. However, if you want to order product tags with drag-and-drop, see [this section](/help-center/using-facetwp-with/woocommerce/#make-product-tags-sortable-with-drag-and-drop).

## Use a hierarchical taxonomy as facet data source

Most [facet types](/help-center/facets/facet-types/) can have a (custom) taxonomy set as their data source. The selected taxonomy can be a non-hierarchical or a [hierarchical taxonomy](#what-is-a-hierarchical-taxonomy).

Some facet types have a [“Hierarchical” setting](#the-hierarchical-setting), which will make the facet visually display the hierarchical levels of the terms.

![Display only children of a parent with term ID 46.](https://facetwp.com/wp-content/uploads/2025/11/parent_term_setting.png)Display only children of a parent with term ID 
```
46
```

.
The [Checkboxes](/help-center/facets/facet-types/checkboxes/), [Dropdown](/help-center/facets/facet-types/dropdown/), [Radio](/help-center/facets/facet-types/radio/), [fSelect](/help-center/facets/facet-types/fselect/), [Color](/help-center/facets/facet-types/color/), and [Exclude](/help-center/facets/facet-types/exclude/) facet have a [“Parent term” setting](#index-only-child-terms-of-a-specific-parent). This setting is only visible if the facet’s selected data source is a taxonomy. If you enter a parent term ID ([here’s how to find it](/how-to-find-a-wordpress-terms-id/)), the facet will only display the child terms of that specific term. If you need more control over which term levels are shown, you can use the 
```
facetwp_index_row
```

 hook. For example, to [show only specific term levels](#index-only-specific-term-levels), or to [show only children of multiple parent terms](#index-only-children-of-one-or-more-parents).

Other facet types are specifically meant to be used with a hierarchical taxonomy as their data source. The [Hierarchy facet](/help-center/facets/facet-types/hierarchy/) lets users navigate through the separate term levels. And the [Hierarchy Select facet](/help-center/facets/facet-types/hierarchy-select/), which has a dropdown for each hierarchical level:

![FacetWP Hierarchy facet](https://facetwp.com/wp-content/uploads/2015/07/facet-type-hierarchy.png)The [Hierarchy facet](/help-center/facets/facet-types/hierarchy/)
![FacetWP Hierarchy Select facet](https://i.imgur.com/hXzcqVR.gif)The [Hierarchy Select facet](/help-center/facets/facet-types/hierarchy-select/)

### The “Hierarchical” setting

![The 'Hierarchical' facet setting, available when a taxonomy is chosen as data source, in Checkboxes, Dropdown, fSelect, and Exclude facets.](https://facetwp.com/wp-content/uploads/2022/07/checkboxes-hierarchical-enabled.png)The “Hierarchical” facet setting, available when a taxonomy is chosen as data source, in Checkboxes, Dropdown, fSelect, and Exclude facets.
For [Checkboxes](/help-center/facets/facet-types/checkboxes/), [Dropdown](/help-center/facets/facet-types/dropdown/), [fSelect](/help-center/facets/facet-types/fselect/), and [Exclude](/help-center/facets/facet-types/exclude/) facets, if a taxonomy is selected as data source, a “Hierarchical” setting will become visible (for both [hierarchical taxonomies](#what-is-a-hierarchical-taxonomy) and non-hierarchical taxonomies).

If this setting is enabled, and the taxonomy is actually a hierarchical taxonomy, the facet will visually show the hierarchy of the taxonomy terms in the facet’s choices, by ordering the child terms below their parent term and by indenting the child terms.

![Part of a hierarchical Checkboxes facet, with expanded child levels.](https://facetwp.com/wp-content/uploads/2025/11/hierarchical-facet-example.png)Part of a hierarchical Checkboxes facet, with expanded child levels.
For example, let’s assume a [Checkboxes facet](/help-center/facets/facet-types/checkboxes/) with a taxonomy “location” set as its data source. This taxonomy has five hierarchical levels, from continents to countries, cities, boroughs, and areas.

If this facet has its “Hierarchical” setting enabled and if there are [posts indexed for each term](#indexing-of-term-hierarchies), the facet will look like the image on the right, with all child levels expanded.

The child levels will be collapsible with 
```
[+]
```

 / 
```
[-]
```

 icons. By default, all child levels will be in the collapsed state and can be expanded with the 
```
[+]
```

 icons. With the extra “[Show expanded](/help-center/facets/facet-types/checkboxes/#show-expanded)” setting enabled, child levels can be shown as expanded all the time. And if you want to hide the expand/collapse icons in this case, you can do so  [with one line of CSS](/help-center/facets/facet-types/checkboxes/#hide-the-expand-and-collapse-buttons).

### Order facet choices by a specific term order

![The 'Sort by > Term order' facet setting.](https://facetwp.com/wp-content/uploads/2025/12/sort_by_term_order.png)The “Sort by > Term order” facet setting.
The following facet types have a “Sort by” setting that supports ordering facet choices by “Term order”: [Checkboxes](/help-center/facets/facet-types/checkboxes/), [Dropdown](/help-center/facets/facet-types/dropdown/), [Radio](/help-center/facets/facet-types/radio/), [fSelect](/help-center/facets/facet-types/fselect/), [Hierarchy](/help-center/facets/facet-types/hierarchy/), [Hierarchy Select](/help-center/facets/facet-types/hierarchy-select/), [Color](/help-center/facets/facet-types/color/), and [Exclude](/help-center/facets/facet-types/exclude/).

If you enable this setting, the facet uses the 
```
term_order
```

 term query argument, which is only available when using a plugin that sets an explicit order for taxonomy terms.

FacetWP supports 
```
term_order
```

 set with the following plugins:

- The [WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/) product categories/attributes drag-and-drop order.
- [Intuitive Custom Post Order](/help-center/using-facetwp-with/intuitive-custom-post-order/) (free)
- [Advanced Taxonomy Terms Order](/help-center/using-facetwp-with/advanced-taxonomy-terms-order/) (paid)
- [Category Order and Taxonomy Terms Order](/help-center/using-facetwp-with/category-order-and-taxonomy-terms-order/) (free) – the [“Hierarchical” setting](#the-hierarchical-setting) **must** be enabled when using a [hierarchical taxonomy](#what-is-a-hierarchical-taxonomy) as data source.
- [Custom Taxonomy Order](/help-center/using-facetwp-with/custom-taxonomy-order/) (free) – the [“Hierarchical” setting](#the-hierarchical-setting) **must** be enabled when using a [hierarchical taxonomy](#what-is-a-hierarchical-taxonomy) as data source.

If you want to use one of the above taxonomy ordering plugins, make sure to read their linked pages for their specific setup instructions and incompatibilities. We recommend choosing [Advanced Taxonomy Terms Order](/help-center/using-facetwp-with/advanced-taxonomy-terms-order/) (paid), or [Intuitive Custom Post Order](/help-center/using-facetwp-with/intuitive-custom-post-order/) (free), because these two work in most situations for all facet types. The other two have a range of incompatibilities in specific situations, which are described on their pages.

Also make sure to check the description of the “Sort by > Term order” setting on the page of the [facet type](/help-center/facets/facet-types/) you want to use with this, because not all facet types work with the above four plugins. Specifically, the [Radio facet type](/help-center/facets/facet-types/radio/) needs either [Advanced Taxonomy Terms Order](/help-center/using-facetwp-with/advanced-taxonomy-terms-order/) (paid), or [Intuitive Custom Post Order](/help-center/using-facetwp-with/intuitive-custom-post-order/) (free), to order its choices correctly by term order.

## Results filtering with hierarchical facets

The relationship between [facets with a (hierarchical) taxonomy as data source](#use-a-hierarchical-taxonomy-as-facet-data-source) and the filtered results is often a source of confusion.

What happens, for example, if you select a parent term in the facet? Will the results contain posts that have only that parent’s child term selected?

This is determined by how term hierarchies are [indexed](/help-center/indexing/):

### Indexing of term hierarchies

![Posts with only the Paris term selected in the back-end will be displayed in the front-end results if you select Europe or France in the facet.](https://facetwp.com/wp-content/uploads/2022/07/checkbox-hierarchy-with-three-levels.png)Posts with only the 
```
Paris
```

 term selected in the back-end will be displayed in the front-end results if you select “Europe” or “France” in the facet.
With the “Hierarchical” setting enabled, FacetWP automatically indexes both **explicit** and **implicit** term hierarchies.

This means that if your taxonomy includes 
```
Europe > France
```

 and a post has only the 
```
France
```

 term selected, then 
```
Europe
```

 will get indexed too for that post.

On the front-end this means that if you have a post that has only the 
```
Paris
```

 term selected, but not its parent terms (
```
France
```

 or 
```
Europe
```

), the post will still be displayed in the results if you filter by “Europe”, or “France” in the facet.

### When to re-index term hierarchies

You do **not** have to re-index after editing an individual item (post, page, and category or term name/slug). When a post or term is saved, an automatic single re-index for that specific term/post is done. This keeps the index up to date, without putting the heavy burden of a full re-index on your site.

However, there are a few specific situations in which you **do** need to [re-index](/help-center/indexing/#how-to-run-the-indexer) after a change to categories or terms:

- When a category or term’s **hierarchy** has changed. For example, after changing a term’s parent term.
- When a category or term’s custom field content has changed. (Terms can have custom fields added by [Advanced Custom Fields](/help-center/using-facetwp-with/advanced-custom-fields/#taxonomy-term-custom-fields) or [Pods](/help-center/using-facetwp-with/pods/#taxonomy-term-custom-fields)).

Note that there are more [situations that would require re-indexing](/help-center/indexing/#when-to-run-the-indexer).

## Customize which terms or levels are displayed in a facet

There are many scenarios in which you may want a hierarchical facet to display **only a part of** the entire term hierarchy, sometimes depending on the context in which the facet is displayed, like [on a term archive page](#use-facetwp-on-taxonomy-term-archives).

This can be done by making sure FacetWP only [indexes](/help-center/indexing/) a part of the term hierarchy, as demonstrated in the examples below.

Important:If you use any of the following code snippets that use the 
```
facetwp_index_row
```

 hook, remember to click the [Re-index button](/help-center/indexing/#how-to-run-the-indexer) after adding the to your (child) theme’s functions.php. If you make changes to the code, you also need to re-index again.

### Index only child terms of a specific parent

![Index only children of a parent with term ID 46.](https://facetwp.com/wp-content/uploads/2025/11/parent_term_setting.png)Index only children of a parent with term ID 
```
46
```

.
If you only want to display the child terms of a specific parent term, you can use the built-in “Parent term” setting of the facet, which is available in the [Checkboxes](/help-center/facets/facet-types/checkboxes/), [Dropdown](/help-center/facets/facet-types/dropdown/), [Radio](/help-center/facets/facet-types/radio/), [fSelect](/help-center/facets/facet-types/fselect/), [Color](/help-center/facets/facet-types/color/), and [Exclude](/help-center/facets/facet-types/exclude/) facet types.

[Look up the parent’s term ID](/how-to-find-a-wordpress-terms-id/) and enter it in the “Parent term” setting. Save the facet settings, and click the Re-index button.

Note: the “Parent term” setting will not work in a [multi-lingual setup](/help-center/using-facetwp-with/multilingual/), because the parent term ID will be different for each language.
For facet types that do not have this setting, you can [use the facetwp_index_row hook](#index-only-children-of-one-or-more-parents).

Note that if you have a category/tag/taxonomy term archive page with a facet on it that uses the same hierarchical category/tag/taxonomy set as its data source, and you want your facet to only display choices that have the current term archive’s term as parent, see [the solution below](#only-display-facet-choices-that-are-children-of-the-current-term).

### Index only specific term levels

![Hierarchical taxonomy depth levels.](https://facetwp.com/wp-content/uploads/2025/01/hierarchical_taxonomy_depths.png)Hierarchical taxonomy depth levels.
If you want your facet to display only certain levels of the term hierarchy, you can use the [facetwp_index_row hook](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/).

Because this hook has access to the depth level of each term as it is being indexed (with 
```
$params['depth']
```

), you can define which depth levels of the hierarchy are included or excluded.

The following code examples have to be added to your (child) term’s functions.php. Make sure to [re-index](/help-center/indexing/#how-to-run-the-indexer) after adding and editing them.

The first example below will index only the top-level terms (with depth == 
```
0
```

). To accomplish that, terms with depth levels 
```
> 0
```

, which are all child levels, are excluded from being indexed by setting 
```
$params['facet_value']
```

 to an empty string. Using the example taxonomy on the right, only “North America” and its sibling terms will be shown in the facet:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) { // replace 'my_facet_name' with the name of your facet
    if ( $params['depth'] > 0 ) {
      $params['facet_value'] = ''; // don't index this row
    }
  }
  return $params;
}, 10, 2 );
```

To index only the top-level terms (depth == 
```
0
```

) *and* their **direct** children (depth == 
```
1
```

):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) { // Replace 'my_facet_name' with the name of your facet.
    if ( $params['depth'] > 1 ) {
      $params['facet_value'] = ''; // Don't index this row.
    }
  }
  return $params;
}, 10, 2 );
```

The above examples exclude (lower) child levels from being indexed. It is also possible to exclude (higher) parent levels and keep child levels, by setting 
```
$params['depth'] > x
```

 to be indexed only. Or to keep only a child level, but not their parents or children, by setting 
```
$params['depth'] === x
```

 to be indexed only.

Three examples of this are shown below. Note that when higher levels are excluded, all lower levels that *are* indexed need to shift upward in the term hierarchy so that the highest included child level now becomes level 
```
0
```

. The example code in all snippets below accounts for that.

Use the following to index only direct child terms (depth == 
```
1
```

) and deeper levels. In other words, to skip the top-level terms (depth == 
```
0
```

):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) { // replace 'my_facet_name' with the name of your facet.
    if ( $params['depth'] > 0 ) {
      $params['depth'] = $params['depth'] - 1; // Shift the depth level one upwards for every child level.
    } else {
      $params['facet_value'] = ''; // Don't index the highest level.
    }
  }
  return $params;
}, 10, 2 );
```

To index only terms on a specific depth, including all children at lower levels, you can use the following snippet. Make sure to set the desired level in [line 3](#index-children-only-L3). Note that the top level is 
```
0
```

, so 
```
2
```

 in this example is the grandchild level, three levels deep:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) { // Replace 'my_facet_name' with the name of your facet
    $depth = 2; // Set the desired depth to show, including its children. The top level is 0, so 2 is grandchild level.
    if ( $params['depth'] >= $depth ) {
      $params['depth'] = $params['depth'] - $depth; // Shift the depth level one upwards for every child level.
    } else {
      $params['facet_value'] = ''; // Don't index this row.
    }
  }
  return $params;
}, 10, 2 );
```

To index only the first-level direct child terms (depth == 
```
1
```

), but **not** their parent or child terms:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) { // Replace 'my_facet_name' with the name of your facet.
    if ( $params['depth'] === 1 ) {
      $params['depth'] = $params['depth'] - 1; // Shift the depth level one upwards for every child level.
    } else {
      $params['facet_value'] = ''; // Don't index the highest level.
    }
  }
  return $params;
}, 10, 2 );
```

### Combine the “Parent term” setting with indexing specific term levels

![Index only children of a parent with term ID 46.](https://facetwp.com/wp-content/uploads/2025/11/parent_term_setting.png)Index only children of a parent with term ID 
```
46
```

.
![Shifted depth levels with term ID 46 set in the 'Parent term' setting.](https://facetwp.com/wp-content/uploads/2025/11/hierarchical_taxonomy_shifted_depths.png)Shifted depth levels with term ID == 
```
46
```

 set in the “Parent term” setting.
It is possible to [set a parent term in the facet’s setting](#index-only-child-terms-of-a-specific-parent), while at the same time [limiting indexing to certain hierarchy levels](#index-only-specific-term-levels).

But when using the above code examples, be aware that the depth levels will shift as soon as you set a “Parent term” in the facet’s setting. The direct child terms of that parent term will now have a depth of 
```
0
```

, their children will be 
```
1
```

, etc.

So if you set term ID 
```
46
```

 as “Parent term”, and use [the second code example above](#index-parents-and-direct-children) to index only depth levels 
```
0
```

 and 
```
1
```

, the facet will only show “New York” and “Manhattan”.

### Index only children of one or more parents

To display only child terms of **one specific parent term** in a facet, you can use the [“Parent term” setting](/help-center/facets/facet-types/checkboxes/#parent-term) (if the facet type has this setting).

For more flexibility, or if the facet type does not have a “Parent term” setting (for example the [Hierarchy Select facet](/help-center/facets/facet-types/hierarchy-select/)), you can also do this programmatically. This also has the advantage that you can display only child terms of **multiple parent terms**.

Add the following code to your (child) theme’s functions.php. Set the parent ID(s) of which you want the child terms to be shown, in the array in [line 5](#index-children-of-one-or-more-parents-L5). Make sure to **re-index after adding or changing the code**.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {

  if ( 'my_facet_name' == $params['facet_name'] ) { // Replace 'my_facet_name' with the name of your facet.

    $parent_id = [ 305,306 ]; // List all parents of which the child terms should be shown. Can be one or more.

    $taxonomy = str_replace( 'tax/', '', $params['facet_source'] ); // Get the taxonomy used as the facet data source
    $ancestors = get_ancestors( $params['term_id'], $taxonomy ); // Get all ancestors of the term being indexed.
    $term_id_parents = array_intersect( $parent_id, $ancestors ); // Get the parent id(s) are among the ancestors.

    if ( $term_id_parents ) { // If the parent(s) is/are among the ancestors
      $term_id_parent = end( $term_id_parents ); // Store the highest level parent id (in case there are more)
      $parent_depth = count( get_ancestors( $term_id_parent, $taxonomy ) ); // Get parent depth
      $params['depth'] = $params['depth'] - ( $parent_depth + 1 ); // Shift the depth level based on the depth of the parent id
    } else {
      $params['facet_value'] = ''; // Don't index this row.
    }
  } 

  return $params;
}, 10, 2 );
```

A few things to keep in mind when using the above code:

- For this code to work, the [data source of the facet](/help-center/facets/facet-types/checkboxes/#data-source) needs to be a taxonomy. The code will work with or without the facet’s [Hierarchical](/help-center/facets/facet-types/checkboxes/#hierarchical) setting enabled.
- Make sure **not** to use the facet’s [“Parent term” setting](/help-center/facets/facet-types/checkboxes/#parent-term).
- If you add multiple parent IDs that are at *different* hierarchical levels, each of their child trees is shifted upwards in the hierarchy until the highest child level is at level 0. The tree may then look different than the original one.
- If you add parent IDs that are within the same vertical parent-child tree, the code takes the highest one in the hierarchy and shows the children of that parent.

Note:Indexing child terms of multiple parent terms can also be useful [in a multi-lingual setup](/help-center/using-facetwp-with/multilingual/#using-a-facets-parent-term-setting-in-a-multi-lingual-setup). If a taxonomy is translated, the term ID of the parent term you want to use in a facet’s “Parent term” setting will be different for each language. Using the above snippet with the parent IDs of all languages set in [line 5](#index-children-of-one-or-more-parents-L5) will fix the issue. After re-indexing, the facet will show the children of the correct parent term on each language page, because it will only show choices for which there are posts in the listing.

## Use FacetWP on taxonomy term archives

The instructions for using FacetWP on **taxonomy term archive templates** are no different than for [any other type of WP archive template](/help-center/listing-templates/wp-archive-page/). If you [place facets](/help-center/facets/#display-a-facet) on an existing WP archive template, FacetWP will automatically detect the right query and post loop, and your facets will “just work”.

In some cases, FaceWP’s automatic query detection can fail. If this happens, follow [these troubleshooting steps](/help-center/listing-templates/wp-archive-page/#solving-issues-with-facetwps-automatic-post-loop-detection).

### Use Listing Builder listing shortcode on a taxonomy term archive

You may be tempted to [place a Listing Builder listing shortcode](/help-center/listing-templates/listing-builder/#display-a-listing-template) on a taxonomy term archive, in order to customize the query, or to make use of the Listing Builder’s display features.

Generally, on WP archive pages, it would be better to **not** use shortcode templates but to [use the WP archive template query itself](/help-center/listing-templates/wp-archive-page/) (and if necessary, [customize the archive query](/how-to-customize-wp-archive-queries/)). Shortcode templates [can best be placed on single pages or posts](/help-center/listing-templates/listing-builder/#where-to-place-the-shortcode).

But if you want to keep using a Listing Builder listing shortcode on a taxonomy term archive, you have two options to make this work:

#### Option 1: Pre-filter Listing Builder listing templates for the current term

For each (custom or built-in) taxonomy, a term archive page exists for each term in the taxonomy. But your Listing Builder query will not automatically pre-filter for posts that use the current term archive page’s term; it will just return **all posts** of the post type(s) you have set in its query settings. In theory, you could create a separate Listing Builder template for each term archive, but that would be very impractical, as you will often have many terms in each taxonomy, and you’d have to make a new listing template each time you add a term.

Fortunately, FacetWP has the [facetwp_template_use_archive hook](/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/) which lets your Listing Builder query pre-filter the returned posts based on the current term archive page’s term, by injecting it into the shortcode template’s query arguments when filtering.

For example, on the 
```
category.php
```

 archive template, you could place a listing template shortcode that fetches all posts. Without this hook in place, on the 
```
/category/events
```

 term archive page, after using facets, the filtered results will be fetched from **all posts**, including posts that are not in the category 
```
events
```

. With this hook in place, the results will only contain posts within the category 
```
events
```

.

To use this hook, add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_template_use_archive', '__return_true' );
```

However, there is one catch when using this hook: WP’s native term archive query will still be used *before* filtering, because FacetWP’s automatic query detection by default will always prioritize the archive query ahead of any other query on the page. This may lead to differences before and after filtering caused by [query arguments](https://developer.wordpress.org/reference/classes/wp_query/#parameters) other than the current taxonomy term.

For example, you may see a different number of paged results before and after filtering, caused by the 
```
posts_per_page
```

 query argument in the native term archive query being different than the one in the shortcode query. Similarly, there may be differences caused by the 
```
order
```

 and 
```
orderby
```

 query arguments not being the same.

See the hook’s documentation page for [two ways of fixing this](/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/#fixing-query-differences-before-and-after-filtering).

#### Option 2: Pre-filter results based on the term archive page URI

Instead of pre-filtering the listing based on the term archive query that the listing is on, with the 
```
facetwp_template_use_archive
```

 hook ([option 1 above](#option-1-pre-filter-listing-builder-listing-templates-for-the-current-term)), you can also pre-filter the listing query based on the page URI of the term archive page.

This can be done with a so-called dynamic URL tag. See [this section in our tutorial on dynamic URL tags](/how-to-pre-filter-listing-builder-queries-with-dynamic-url-tags/#using-dynamic-url-tags-on-taxonomy-term-archives) for how to do this exactly.

In general, for Listing Builder listings placed on (term) archives, we recommend [using the facetwp_template_use_archive hook](/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/), because it is only one line in your functions.php and works for all types of archives. Using a dynamic URL tag can be useful if you want to build complex queries in the Listing Builder, instead of [customizing the native archive query with a pre_get_posts hook](/how-to-customize-wp-archive-queries/).

### Using a (hierarchical) taxonomy facet on a term archive page

A common scenario is that you have a category, tag, or taxonomy term archive page, with a facet that uses **the same category/taxonomy as its data source**.

Wouldn’t it be nice if that facet “knows” on which term archive page it lives, and if it would pre-select the “current” term’s choice? And even better, if it would only display choices from the term hierarchy that have the current term as parent?

Both are possible with a bit of custom code, as shown below. The following solutions can also be combined.

#### Pre-select the current term’s facet choice

![Events category pre-selected in a categories facet](https://facetwp.com/wp-content/uploads/2022/11/pre-selected-category.png)Pre-select 
```
events
```

 on the 
```
events
```

 term archive page
For example, say you have a category archive page 
```
/category/events/
```

, on which you have a facet named 
```
categories
```

 which has categories (technically the 
```
category
```

 taxonomy) as data source, and you want the facet choice “events” to be pre-selected automatically.

The following code uses the [facetwp_preload_url_vars hook](/help-center/developers/hooks/querying-hooks/facetwp_preload_url_vars/) to [pre-select](/how-to-pre-select-facet-choices/) the current term’s corresponding choice in the facet. Add it to your (child) theme’s functions.php, and adapt the facet name in [line 4](#preselect-term-L4) and [line 6](#preselect-term-L6), and the taxonomy slug in [line 3](#preselect-term-L3).

Note that this code will only work when the category/tag/term slug (
```
events
```

 in this example) is the same as the facet value (which can be seen in the URL when you select the facet choice: 
```
/category/events/?categories=events
```

). The slug also needs to be the last part of the URI. The URI is the part of the URL after the domain name, without slashes at the beginning or end, and without the query variables. In this example: 
```
category/events
```

.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Change 'categories' to the name of the categories/terms facet (2x)
add_filter( 'facetwp_preload_url_vars', function( $url_vars ) {
  if ( false !== strpos( FWP()->helper->get_uri(), 'category' ) ) { // Change 'category' whatever the main URL slug is for the taxonomy term archive
    if ( empty( $url_vars['categories'] ) ) {
      $term = basename( FWP()->helper->get_uri() );
      $url_vars['categories'] = [$term];
    }
  }
  return $url_vars;
} );
```

#### Pre-select a facet choice after a reset

If you are using a [Reset facet](/help-center/facets/facet-types/reset/), the pre-selected option will be deselected again after a reset.

The following code (p)re-selects that option again when a user clicks the Reset button/link:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<?php
add_action( 'facetwp_scripts', function() {
  ?>
    <script>
      document.addEventListener('facetwp-loaded', function() {
        if (! FWP.loaded && false !== FWP_HTTP.uri.indexOf('category')) { // Change 'category' whatever the main URL slug is for the taxonomy term archive
          let term = FWP_HTTP.uri.split('/').reverse()[0];
          FWP.hooks.addAction('facetwp/reset', function() {
            FWP.facets['categories'] = [term]; // Change 'categories' to the name of the categories/terms facet 
          });
        }
      });
    </script>
  <?php
}, 100 );
```

#### Only display facet choices that are children of the current term

If you have a category/tag/taxonomy term archive page with a facet on it that uses the same [hierarchical](#what-is-a-hierarchical-taxonomy) category/tag/taxonomy [set as its data source](#use-a-hierarchical-taxonomy-as-facet-data-source), the facet will display **all** choices (terms) for which posts on that page have been indexed. And as posts can have multiple terms selected, this can include terms anywhere in the taxonomy’s term hierarchy, not only children of the archive’s current term.

A common question is **how to let the facet display only child terms of the archive’s current term** (with or without the current term itself)?

This is currently not built into FacetWP as an option. There are a few ways to accomplish this:

Manually create a facet for each term archive
If you only have a very limited number of terms, you could make a separate facet for each term archive page, and use the “[Parent term](#index-only-child-terms-of-a-specific-parent)” setting to pre-select the term archive’s term for each facet.

In most situations, manually creating a facet for each term archive would be very impractical, as you will often have many terms in each taxonomy, and you’d have to make a new facet each time you add a term. Below are two approaches to this situation.

Remove all terms that are not a child term of the current term
![For a facet with a hierarchical location taxonomy on the /category/new-york term archive page, how to only show New York and its child terms (purple frame), and pre-select New York? Or, only show its child terms (green frame)?](https://facetwp.com/wp-content/uploads/2025/03/prefilter-term-archive-page.png)For a facet with a hierarchical location taxonomy on the 
```
/category/new-york
```

 term archive page, how to only show New York and its child terms (purple frame), and pre-select New York? Or, only show its child terms (green frame)?
The easiest solution is to use the same facet on each term archive page (without setting a “Parent term”) and to combine it with the following code.

The code uses the [facetwp_facet_render_args hook](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/) to dynamically remove all terms from the facet that are not a child term of the current term. This will result in the facet displaying only child terms, on **all hierarchical levels below** the archive’s current term. If you want the facet to display **only the direct child level**, replace the 
```
if
```

 statement on [line 25](#show-current-term-branch-only-L25) with the alternative one on [line 28](#show-current-term-branch-only-L28).

This code works with the following facet types: [Checkboxes](/help-center/facets/facet-types/checkboxes/), [Dropdown](/help-center/facets/facet-types/dropdown/), [Radio](/help-center/facets/facet-types/radio/), [fSelect](/help-center/facets/facet-types/fselect/), [Hierarchy Select](/help-center/facets/facet-types/hierarchy-select/), and [Exclude](/help-center/facets/facet-types/exclude/). It does **not** work with [Hierarchy](/help-center/facets/facet-types/hierarchy/) facets, which do not have 
```
term_id
```

 and 
```
parent_id
```

 in their arguments.

The code assumes a [hierarchical taxonomy](#what-is-a-hierarchical-taxonomy), but it will work both with the facet’s “[Hierarchical](#use-a-hierarchical-taxonomy-as-facet-data-source)” setting enabled and disabled.

Add the code to your (child) theme’s functions.php. Change 
```
my_taxonomy_name
```

 in [line 3](#show-current-term-branch-only-L3) to the name of your taxonomy, and 
```
my_facet_name
```

 in [line 4](#show-current-term-branch-only-L4) to the name of your facet.

If you want the facet to include the archive’s term, in [line 5](#show-current-term-branch-only-L5) set 
```
$keep_current_term
```

 to 
```
true
```

. When you do this, the current term is available to [automatically pre-select it in the facet on page load](#pre-select-the-current-terms-facet-choice), and again [after a reset](#pre-select-a-facet-choice-after-a-reset).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<?php
add_filter( 'facetwp_facet_render_args', function( $args ) {

  $taxonomy = 'my_taxonomy_name'; // Change 'my_taxonomy_name' to the name of your taxonomy
  $facet    = 'my_facet_name'; // Change 'my_facet_name' to the name of your facet
  $keep_current_term = false; // Set this to true if you want to include the current term

  $is_term_archive = false;

  if ( 'category' === $taxonomy ) {
    $is_term_archive = is_category();
  } elseif ( 'post_tag' === $taxonomy || 'tag' === $taxonomy ) {
    $is_term_archive = is_tag();
  } else {
    $is_term_archive = is_tax( $taxonomy );
  }

  if ( $facet == $args['facet']['name'] && $is_term_archive ) {

    // Exclude the Hierarchy facet
    if ( in_array( $args['facet']['type'], [ 'hierarchy' ] ) ) {
      return $args;
    }

    $current_term = get_queried_object_id();

    if ( ! empty( $args['values'] ) ) {
      $current_term_depth = '0';
      foreach ( $args['values'] as $key => $val ) {
        $term_id = $val['term_id'];
        if ( intval( $term_id ) === $current_term ) {
          $current_term_depth = intval( $val['depth'] );
        }
        
        // This keeps sub-terms of the current term archive page
        if ( $val['parent_id'] && in_array( $current_term, get_ancestors( $val['term_id'], $taxonomy, 'taxonomy' )  )  ) {
            
     // Alternative if-statement: only keep direct children of the current term, no deeper level children:
     // if ( $val['parent_id'] == $current_term ) { 
          
          continue;
          
        // This keeps parent term for current archive page
        } else if ( $keep_current_term && $current_term == $val['term_id'] ) {
          -- $current_term_depth;
          continue;
        } else {
          unset( $args['values'][ $key ] );
        }
      }

      // Shift depths after deleting values
      $depthshift = ++ $current_term_depth;
      array_walk( $args['values'], function( &$item ) use ( & $depthshift ) {
        $newdepth      = intval( $item['depth'] ) - $depthshift;
        $item['depth'] = (string) $newdepth;
      } );
      $args['values'] = array_values( $args['values'] );
    }
  }

  return $args;
} );
```

Dynamically create a facet for each term archive
Another, more complicated approach could be to programmatically create facets for all the parent terms you need, with the [facetwp_facets hook](/help-center/developers/hooks/advanced-hooks/facetwp_facets/). And then to conditionally display the correct facet in your term archive template. Depending on how automated you need this process to be, you may also need to [programmatically trigger a full re-index](/help-center/indexing/#how-to-trigger-the-indexer-programmatically) for each new facet added. Or you could use [WP-CLI indexing](/help-center/using-facetwp-with/wp-cli/#how-to-trigger-indexing-with-wp-cli), with which you can trigger indexing for specific facets only.

## Redirect term archive links to pre-selected facets

It is possible to let term archive links automatically redirect to a page with a facet that is automatically pre-selected for the clicked term.

Say you have a list of term links on your site, generated using [get_term_link()](https://developer.wordpress.org/reference/functions/get_term_link/). For example, a list of categories, like this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$terms = get_terms('category');
echo '<ul>';
foreach ($terms as $term) {
  echo '<li><a href="'.get_term_link($term->slug, 'category').'">'.$term->name.'</a></li>';
}
echo '</ul>';
```

With WP’s [term_link](https://developer.wordpress.org/reference/hooks/term_link/) hook, which filters the 
```
get_term_link()
```

 link URL output in [line 4](#get-term-link-L4) above, you can now redirect these term links to a page with a facet that has that same taxonomy (
```
category
```

 in this example) as data source, and let the facet be pre-selected based on the clicked term link.

The following example redirects 
```
/category/
```

 archive links to a 
```
/blog/
```

 page with a “categories” facet pre-selected for the clicked category archive link. So a 
```
/category/events/
```

 link will redirect to 
```
/blog/?_categories=events
```

, resulting in the “categories” facet on that page to be pre-selected with the “events” choice:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'term_link', function( $termlink, $term, $taxonomy ) { 
  if ( 'category' == $taxonomy ) { // Replace 'category' with the name of your taxonomy
    $termlink = '/blog/?_categories=' . $term->slug; // Replace 'categories' with the name of your taxonomy-based facet
  }
  return $termlink;
}, 10, 3);
```

## Order a WP_Query by terms or categories

While not directly related to FacetWP, we often get the question of how to order a query by taxonomy terms or categories. With the bonus question of how to add a term heading above each group of posts sharing a term/category.

The 
```
orderby
```

 parameter [in WP_Query](https://developer.wordpress.org/reference/classes/wp_query/#order-orderby-parameters) can be used to order by many things, including [custom fields](/how-to-filter-or-order-a-wp_query-by-one-or-more-custom-fields/). But unfortunately, ordering by taxonomy terms or categories is **not directly  possible**.

We wrote [this tutorial](/how-to-order-a-wp_query-by-terms-or-categories/) that explores two different workarounds to accomplish this. Both approaches order a query by terms or categories in a custom 
```
WP_Query
```

 template, then (optionally) output a heading above each group of posts in a term/category, and wrap each group in a container element (for styling).

    
## See also

    - [What are posts, post types, taxonomies and custom fields?](https://facetwp.com/what-are-posts-post-types-taxonomies-and-custom-fields/)
- [What are facets?](https://facetwp.com/help-center/facets/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [Facet types](https://facetwp.com/help-center/facets/facet-types/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)
- [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [The Checkboxes facet type](https://facetwp.com/help-center/facets/facet-types/checkboxes/)
- [The Dropdown facet type](https://facetwp.com/help-center/facets/facet-types/dropdown/)
- [The Radio facet type](https://facetwp.com/help-center/facets/facet-types/radio/)
- [The fSelect facet type](https://facetwp.com/help-center/facets/facet-types/fselect/)
- [The Hierarchy facet type](https://facetwp.com/help-center/facets/facet-types/hierarchy/)
- [The Hierarchy Select facet type](https://facetwp.com/help-center/facets/facet-types/hierarchy-select/)
- [The Color facet type](https://facetwp.com/help-center/facets/facet-types/color/)
- [The Exclude facet type](https://facetwp.com/help-center/facets/facet-types/exclude/)
- [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [Indexing](https://facetwp.com/help-center/indexing/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [How to find a WordPress term’s ID](https://facetwp.com/how-to-find-a-wordpress-terms-id/)
- [Using FacetWP with WPML or Polylang](https://facetwp.com/help-center/using-facetwp-with/multilingual/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [The facetwp_template_use_archive hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/)
- [How to pre-filter Listing Builder listing queries with dynamic URL tags](https://facetwp.com/how-to-pre-filter-listing-builder-queries-with-dynamic-url-tags/)
- [The facetwp_preload_url_vars hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_preload_url_vars/)
- [How to pre-select facet choices](https://facetwp.com/how-to-pre-select-facet-choices/)
- [The facetwp_facet_render_args hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/)
- [The Reset facet type](https://facetwp.com/help-center/facets/facet-types/reset/)
- [The facetwp_facets hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facets/)
- [Indexing with WP-CLI](https://facetwp.com/help-center/using-facetwp-with/wp-cli/)
- [Using FacetWP with Intuitive Custom Post Order](https://facetwp.com/help-center/using-facetwp-with/intuitive-custom-post-order/)
- [Using FacetWP with Advanced Taxonomy Terms Order](https://facetwp.com/help-center/using-facetwp-with/advanced-taxonomy-terms-order/)
- [Using FacetWP with Category Order and Taxonomy Terms Order](https://facetwp.com/help-center/using-facetwp-with/category-order-and-taxonomy-terms-order/)
- [Using FacetWP with Custom Taxonomy Order](https://facetwp.com/help-center/using-facetwp-with/custom-taxonomy-order/)
- [How to order a WP_Query by terms or categories](https://facetwp.com/how-to-order-a-wp_query-by-terms-or-categories/)

                    Last updated: July 28, 2026

---

## FacetWP performance, speed, limits and scalability

**Source:** [https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)

We often get questions about FacetWP’s scalability and limitations, the speed of indexing, filtering and search, and how to fix slow page loads or slow filtering.

Below we will go into all the different factors that can be at play for indexing, filtering and search:

1. [Indexing speed and limits](#indexing-speed-and-limits)
2. [Website and filtering speed](#website-and-facet-filtering-speed)
3. [Search performance, limits and alternatives](#search-performance-limits-and-alternatives)

Important:First of all, make sure to **disable Debug Mode** in Settings > FacetWP > Settings. Debug Mode exposes some of your settings and can influence loading speeds. Make sure to disable it when it is not needed anymore for troubleshooting. When Debug Mode is enabled, FacetWP v4.3.2+ will show a red warning icon in the Settings tab.

## Indexing speed and limits

As a general guideline, **on average** FacetWP’s indexer will run at about 700-1000 database rows per minute when indexing WooCommerce products with product variations (a particularly heavy type of content to index).

### Indexing speed factors

A lot of factors weigh into the time it takes FacetWP to [index](/help-center/indexing/) your content. Besides the [number of post types](#index-only-the-post-types-you-need), the number of posts, custom fields and terms/categories, other factors are the [number of facets](#reduce-the-number-of-facets), the [types of the facets](#choose-efficient-facet-types) being indexed, and the [server specs](/how-to-make-your-website-load-faster/#choose-a-faster-server).

Indexed data is stored in FacetWP’s 
```
facetwp_index
```

 database table. A row in this table consists of the data of one facet choice for a specific facet, for a specific post ID. So a combination of many post types, many posts (and product variations), many facets, and many facet choices can quickly add up to a huge number of rows. FacetWP and its index table are highly optimized to handle large amounts of content. But there are [limits to servers, the database, and MySQL itself](#indexing-limits-and-scalability) to take into account.

See [this explanation of how the indexing process works](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#how-it-works) and which/how facet data is stored in the 
```
facetwp_index
```

 table.

### Improve indexing speed

To improve the time it takes to re-index, besides [improving your server speed](/how-to-make-your-website-load-faster/#choose-a-faster-server), think about how you can limit the number of [database rows to be indexed](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#how-it-works):

- [Index only the post types you need](#index-only-the-post-types-you-need).
- Reduce the number of post IDs to index. This also includes the number of [WooCommerce product variations](/help-center/using-facetwp-with/woocommerce/#using-woocommerce-product-variations), because each variation needs to be indexed separately.
- [Disable FacetWP’s “Support product variations” setting](/help-center/using-facetwp-with/woocommerce/#enable-facetwp-support-for-product-variations) if you are not using variable products on your facet page.
- [Disable FacetWP’s “Index out-of-stock products” setting](/help-center/using-facetwp-with/woocommerce/#show-facet-choices-for-out-of-stock-products) if you are not displaying out-of-stock products on your facet page.
- [Reduce the number of facets](#reduce-the-number-of-facets).
- Reduce the number of facet choices, for example by reducing the number of terms/categories in taxonomies that facets use as data source.
- Reduce the time it takes to look up each facet’s data source field. For example by checking if you can improve custom code used in the  [facetwp_index_row hook](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/).
- [Trigger the indexer programmatically](#index-programmatically), for example only after importing posts.
- [Trigger the indexer with WP-Cli](#index-with-wp-cli), with fine control over what exactly is being indexed (which post types, post IDs or facets), if needed on a server cron schedule.
- [Trigger the indexer with a cron schedule](#index-on-a-cron-schedule), letting it run only in quiet times, e.g. at night.

#### Index only the post types you need

If your website has a lot of content, indexing can take a long time. One simple way of speeding things up is to [use the facetwp_indexer_query_args hook](/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/) to limit indexing to the post types you are actually using with FacetWP.

Even if your facets don’t apply to all post types that exist, FacetWP will still look up every post from every indexable post type, and check it against each facet to see if it needs to be indexed. So removing post types that are not used with facets can potentially speed up indexing.

![How to check indexable post types.](https://facetwp.com/wp-content/uploads/2025/10/indexing_button_show_indexable_post_types.png)How to check indexable post types.

To check which post types FacetWP currently indexes, click the “Show indexable post types” button in the settings, as shown in the image on the right.

With the 
```
facetwp_indexer_query_args
```

 hook, you can [specify which post types to index](/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/#index-only-specific-post-types). Or you can [prevent specific post types from being indexed](/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/#prevent-indexing-of-searchable-post-types). Changes you make with this hook will be reflected when you click the “Show indexable post types” button again.

#### Index programmatically

FacetWP offers many ways to [trigger the indexer programmatically](/help-center/indexing/how-to-trigger-the-indexer-programmatically/), so you have much more control over **what** is being indexed, and **when**.

FacetWP’s automatic indexing [can be disabled](/help-center/indexing/#disable-automatic-indexing), making it possible to only index when you want. For example [after importing new or updated posts](/help-center/indexing/how-to-trigger-the-indexer-programmatically/#trigger-re-indexing-after-importing-posts-or-products).

#### Index with WP-Cli

If you index with the index button, FacetWP indexes **everything**. If you want to limit what is indexed, you can also [use WP-Cli](/help-center/using-facetwp-with/wp-cli/). This is the recommended approach for sites with a lot of content that changes often, in which case FacetWP’s automatic indexing can become problematic.

With WP-Cli you can do **partial** indexes, by specifying the post type(s), post ID(s) or facet(s) to index.

Besides entering WP-Cli commands manually in the server command line, you can also [use a server cron job to trigger the WP-Cli indexing commands](/help-center/using-facetwp-with/wp-cli/#wp-cli-indexing-with-a-cron-job) at pre-defined moments.

If you go for indexing with WP-CLI, it is recommended to [turn off automatic indexing](/help-center/indexing/#disable-automatic-indexing).

#### Index on a cron schedule

You can also [use a cron schedule](/help-center/indexing/how-to-trigger-the-indexer-programmatically/#trigger-re-indexing-with-wp-cron) to determine the exact time the indexer runs. This makes it possible to let the indexer for example run at night or at times the server is not busy.

The indexing cron schedule can be run [on WP Cron](/help-center/indexing/how-to-trigger-the-indexer-programmatically/#trigger-periodic-re-indexing-with-wp-cron), with the help of the [Schedule Indexer add-on](/help-center/add-on-features-and-extras/schedule-indexer/), or [on a server cron with WP-Cli](/help-center/using-facetwp-with/wp-cli/#wp-cli-indexing-with-a-cron-job).

Also in this case it is recommended to [turn off automatic indexing](/help-center/indexing/#disable-automatic-indexing).

### Indexing limits and scalability

We’ve been tweaking FacetWP’s database index table over the years, and its current form is as efficient as it can get with MySQL. Keep in mind that MySQL is a general-purpose database so in terms of performance it’s not going to compare well with dedicated search solutions like [Elasticsearch or Algolia](#alternative-search-solutions).

The best-case maximum limit of FacetWP would probably be somewhere in the hundreds of thousands of posts. We’ve had a customer successfully testing the plugin with 500K+ results, but the reliable maximum depends a lot on the [server specs](/how-to-make-your-website-load-faster/#choose-a-faster-server) and the other [factors mentioned above](#indexing-speed).

When reading these numbers be aware that if you are [using WooCommerce product variations](/help-center/using-facetwp-with/woocommerce/#using-woocommerce-product-variations), the number of indexed posts will be a lot higher than you’d guess. Each variation is a separate item that needs to be indexed, so the true count will be much higher than the number of products.

### Indexing value limits

When [indexing facets](/help-center/indexing/) into its 
```
wp_facetwp_index
```

 table, and displaying facets, FacetWP uses the following limits:

| Value | Maximum | Description |
| --- | --- | --- |
| facet_name | 50 characters | The facet’s technical name. The name is also visible in the URL when the facet has active selections. |
| facet_value | 50 characters | The facet choice’s technical value, see explanation below. |
| facet_display_value | 200 characters | The facet choice’s display value, see explanation below. |
| post_id | 4294967295 | The maximum post ID. See below for an explanation, and how to increase this number. |
| facet choices | unlimited or 1000 | The maximum number of facet choices in facets with a “Limit” setting is as high as you set it. If your page/server can handle it, you can set it as high as you like. However, very high counts can kill the loading of the page just from all the HTML this produces. For this reason, if the “Limit” is set to -1, or if the “Limit choices” setting is disabled, the number of choices is limited to 1000. This applies to the following facet types: Checkboxes, Dropdown, Radio, fSelect, Hierarchy, Color, and Exclude facets. |
| term depth | 50 levels | The maximum number of term levels indexed when a facet uses a hierarchical taxonomy as data source. |

#### The indexing of facetwp_value and facetwp_display_value

FacetWP indexes two values for each facet choice. The 
```
facetwp_value
```

 is a facet choice’s technical value. It [can be seen in the URL](/help-center/developers/the-facetwp-url/#facet-choices-in-the-url) when the choice is selected. The 
```
facetwp_display_value
```

 is the choice’s label as displayed in the facet itself.

Depending on the data source of the facet, and the value itself, these two values can be the same or different. For simple custom fields they are the same. But for example for taxonomy terms they are different: term slugs are indexed as 
```
facetwp_value
```

, and term names as 
```
facetwp_display_value
```

.

Also, depending on the presence of special characters, the 
```
facetwp_value
```

 value [can be hashed](/help-center/developers/the-facetwp-url/#sanitized-and-hashed-facet-choices) for security reasons.

### Indexing issues

If you have a very large site and the indexer is stalling, make sure to check your web server’s PHP error log for clues. The most common cause is the [server running out of memory](/how-to-make-your-website-load-faster/#set-wordpress-and-server-memory-limits). See [this page](/help-center/indexing/common-indexing-issues/) for all other common indexing issues.

#### Indexing and WP Engine

If you are hosting your website on the [WP Engine](https://wpengine.com) platform and you are experience problems with the indexer stalling or not indexing all your posts, be aware that WP Engine is [limiting long queries](https://wpengine.com/support/platform-settings/#Long_Query_Governor) (longer than 1024 characters) for performance reasons. The following line in **wp-config.php** will prevent that:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infodefine( 'WPE_GOVERNOR', false );
```

#### Fix indexing issues with very high post IDs

FacetWP uses 
```
INT unsigned
```

 as the SQL data type for the 
```
post_id
```

 column in the 
```
wp_facetwp_index
```

 table. This SQL data type can contain 8-byte integer data, which means the highest post ID that can be indexed is 
```
4294967295
```

 (
```
2^32-1
```

).

Believe it or not, in our support we regularly encounter users with post IDs higher than this. If that happens, those posts will not be indexed properly, which will lead to empty facets or facets with choices missing, depending on if all or some post IDs are above this limit.

Fortunately, there is an easy fix. Add the following code to your (child) theme’s functions.php to change the data type for the 
```
post_id
```

 column from 
```
INT unsigned
```

 to 
```
BIGINT unsigned
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_use_bigint', '__return_true' );
```

![How to purge the index table.](https://facetwp.com/wp-content/uploads/2025/10/indexing_button_purge_the_index_table.png)How to purge the index table.

The 
```
BIGINT unsigned
```

 data type can hold integers up to 
```
18446744073709551615
```

 (
```
2^64-1
```

), which should be enough even in the most extreme scenarios.

After adding the above code, make sure to re-create the indexing table by **purging it first, and then performing a full-re-index**, by clicking the red “Re-index” button.

## Website and facet filtering speed

Important:First of all, make sure to **disable Debug Mode** in Settings > FacetWP > Settings. Depending on your site, Debug Mode can sometimes influence loading speeds.
FacetWP was built with performance in mind and is *very* fast itself. We’ve structured and highly optimized our data storage and have analyzed every query to make sure that it runs as efficiently as possible.

So ultimately, FacetWP’s speed depends on your server, the theme setup, your plugins, and the amount of content. If your server is overloaded (i.e. too many heavy plugins or other users) or underpowered (too little memory or CPU power), then obviously FacetWP will not run at its peak.

Check out our [tutorial on how to make your website faster](/how-to-make-your-website-load-faster/), that covers many of these subjects.

### Causes for slow page loads and filtering

To understand where slowness on your listing page may come from, keep in mind that **FacetWP can be only as fast as your uncached site**. This is because FacetWP uses AJAX requests to refresh the facets and results listing. WordPress AJAX requests aren’t cached by default and require all of WordPress to load. FacetWP uses WP’s 
```
init
```

 hook to ensure that WP (and all other plugins) are loaded. Otherwise, no integrations would work, post types wouldn’t be registered, etc. This means that if it takes three seconds for the initial unfiltered (uncached) page to load, then it will also take three seconds for a filtered AJAX request.

The effect of this is that if you have any type of page caching (like [WP Rocket](/help-center/using-facetwp-with/wp-rocket/)) enabled, the initial (unfiltered) cached page load may be faster than the AJAX filtering after interacting with facets, sorting, or pagination. [Page caching](/how-to-make-your-website-load-faster/#page-caching) works by serving pages directly from the cache, as pure HTML, CSS, and Javascript. The database is never queried in this process (except the first time to generate the cached page itself), so serving these cached pages is very fast. But caching plugins like WP Rocket (intentionally) do not cache AJAX requests. So FacetWP’s subsequent AJAX requests (for filtering, pagination, sorting and loading the updated results) have to query the database on each page load, and will show all inefficiencies that may be present in that process.

If you see filtering being slower than the initial (or other) cached page loads, it’s tempting to come to the conclusion that slow filtering or pagination is caused by FacetWP. Although possible, this is very unlikely. Most often it is due to (a combination of) [server performance](/how-to-make-your-website-load-faster/#choose-a-faster-server), [inefficient listing templates or loop code](/how-to-use-query-monitor-to-optimize-performance/#reducing-the-number-of-queries) with large amounts of queries to render each post, the amount of content, or [other plugins slowing the AJAX request](/how-to-use-query-monitor-to-optimize-performance/#plugin-profiling-with-queries-by-component). Even on a fast server, FacetWP can only be as fast as the slowest plugin on your site.

Certain types of [caching](#caching) can help to speed things up, but if you don’t resolve the underlying issues, you are just sweeping all inefficiencies “under the rug” and they will keep slowing down each AJAX request.

The best course of action if you want to speed up your page and facet filtering is to first (temporarily) disable **all** caching, and start analyzing your true (uncached) page load times and queries to find out where the slowness is coming from. The recommended tool to do this is the free [Query Monitor plugin](https://wordpress.org/plugins/query-monitor/).

Check out [our tutorial about how you can use Query Monitor to optimize performance](/how-to-use-query-monitor-to-optimize-performance/) by reducing the total query time and the number of queries on your page, optimizing the code of your listing template and loops, profiling your plugins, and optimizing your server setup.

A lot of performance can usually be gained by [profiling the plugins you are using](/how-to-make-your-website-load-faster/#test-and-reconsider-your-plugins), de-activating unnecessary or heavy plugins, and making sure the remaining ones work well together. Also make sure to de-activate any plugins you are not continuously using, like WP All Import, database optimization plugins, and Query Monitor itself.

Besides caching and optimizing your queries, the list of things you can do to speed up your website and page loads is near endless. Check out our separate [tutorial on improving page load speed](/how-to-make-your-website-load-faster/) to give you an overview and get you started.

Also consider using FacetWP’s built-in [Listing Builder](/help-center/listing-templates/listing-builder/) for your post listing/grid. On WP archive pages, FacetWP makes a custom AJAX request to the same page URL, but the Listing Builder uses its own REST API endpoint, which is faster. It also loads less HTML in its AJAX call than FacetWP does on a WP archive ([see below](#use-the-listing-builder-for-you-listing-template)).

If you want page load times in the ~1s range, the best approach would be to code your own theme and listing archive with as little overhead as possible. Or maybe start with a skeleton theme of some sort, then use our FacetWP’s built-in Listing Builder for your listing template.

### Speed up facet loading and filtering

After optimizing your theme, plugins, and server specs to speed up page load times, there are a few things you can do to speed up the facet loading on first page load and the facet filtering itself.

Factors that influence facet loading and filtering speed include:

- [the listing template itself](#use-the-listing-builder-for-your-listing-template) (how efficient is the loop and display of each result):
- [the total number of posts in your listing](#reduce-the-total-number-of-posts)
- [the number of posts per page](#reduce-the-number-of-posts-per-page)
- [the number of queries per post](#reduce-the-number-of-queries-per-post)
- [the number of active facets on the page](#reduce-the-number-of-facets)
- [the facet types in use](#choose-efficient-facet-types)
- [the facet settings](#avoid-or-use-certain-facet-settings)
- [caching of FacetWP’s AJAX requests](#cache-facetwps-ajax-requests)

#### Use the Listing Builder for your listing template

Using a [Listing Builder template](/help-center/listing-templates/listing-builder/) is usually faster than using FacetWP on WP archive pages or with a custom query. The Listing Builder is optimized to makes as few SQL queries as possible. On WP archive queries, FacetWP has to load all HTML within the page’s 
```
<body>
```

 tag (using AJAX), then parse the response HTML using JavaScript to get the necessary data. The Listing Builder uses its own REST API endpoint and only returns the HTML for the actual listing, which is always less than the whole page, so it is more efficient in that regard too.

#### Reduce the total number of posts

To get accurate facet counts, FacetWP needs to use the unpaginated query. So you could consider reducing the total number of results in your listing query. If you have a lot of content, you could split it up into different listings/archives, or offer content in separate category/term archive pages. You could consider not using facets on the main listing, only on the “deeper” category/term archives.

#### Reduce the number of posts per page

Try to minimize the number of posts per page in your listing to something reasonable, like 16-20 posts. This will [reduce the number of queries](/how-to-use-query-monitor-to-optimize-performance/#reducing-the-number-of-queries) needed to load the data for all displayed posts.

#### Reduce the number of queries per post

[Minimize the number of queries needed to display all information for a post](/how-to-use-query-monitor-to-optimize-performance/#reduce-the-number-of-queries-per-post). Even if you have only one unnecessary query taking only milliseconds, because of the number of times it runs (the number of posts per page) it can have a – sometimes huge – negative impact on the resulting total query time, especially if your number of posts per page is high.

#### Reduce the number of facets

Each facet will slow down the page slightly because the choices have to be queried and calculated. We’ve seen users with an enormous amount of facets on a page. Try to limit the amount by going with a few well-chosen [facet types](/help-center/facets/facet-types/) tailored to your type of content and your users’ needs.

#### Choose efficient facet types

Another thing to consider is the choice of [facet types](/help-center/facets/facet-types/) . Most facet types are comparable in speed, but a few facet types will be faster than others to load.

Facet types that show distinct choices (which are most of them) need to calculate which of those choices are available for the post IDs that are in the query, and what the count for each choice should be. The queries that run for each of these facets can become a large part of the page load time if the listing query has a (very) high number of posts.

To prevent these facet queries, you could [reduce the number of facets](#reduce-the-number-of-facets). Or reduce the number of choices to load for each facet, by [reducing the count or disabling ghosts](#avoid-or-use-certain-facet-settings).

You could also choose facet types that do not need to run these queries at all: [Autocomplete](/help-center/facets/facet-types/autocomplete/), [Slider](/help-center/facets/facet-types/slider/), [Date Range](/help-center/facets/facet-types/date-range/), [Number Range](/help-center/facets/facet-types/number-range/), [Search](/help-center/facets/facet-types/search/), [Rating](/help-center/facets/facet-types/rating/), and [A-Z Listing](/help-center/facets/facet-types/alphabetical-listing/) facets.

#### Avoid or use certain facet settings

If your listing template query has a very large number of posts to retrieve, FacetWP’s facet queries that need to run to get all facet choice values (and their counts) can become a large part of the page load time, partly depending on each facet’s settings.

As mentioned above, to get accurate facet counts for each facet choice, FacetWP needs to use the unpaginated query. So [reducing the number of posts in the query](#reduce-the-total-number-of-posts) will have the biggest impact. And obviously, [reducing the number of facets](#reduce-the-number-of-facets) will also reduce the number of queries that need to run.

In addition, the following settings can also help reduce the query time needed to load all the facet values, sometimes drastically:

- Disable the [“Show ghosts” setting](/help-center/facets/facet-types/checkboxes/#show-ghosts) (if your facet has that). The fewer choices that have to be retrieved and compared to the posts in the query, the less time it takes to get them all for each facet.
- Don’t use [“Sort by” > “Term Order”](/help-center/facets/facet-types/checkboxes/#sort-by). Sorting by 
```
term_order
```

 is much less efficient, and thus will take much longer than ordering by one of the other options like “Display value”.
- Don’t use a (very) high number in the facet’s [“Limit” setting](/help-center/facets/facet-types/checkboxes/#limit). Reducing the limit will reduce the query time needed to calculate all choice values.
- To reduce the number of choices to be retrieved in a facet, you could also use its [“Value modifiers” setting](/help-center/facets/facet-types/checkboxes/#value-modifiers) and make a distinct selection.
- If your facet’s data source is a [hierarchical taxonomy](/help-center/developers/facetwp-and-taxonomies/#what-is-a-hierarchical-taxonomy), you could reduce the number of choices by only showing choices at a certain hierarchical level. For deeper levels, you could use the facet’s [“Parent term” setting](/help-center/facets/facet-types/checkboxes/#parent-term). Or you could [use the facetwp_index_row hook to let the facet index and display only a specific term level](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#index-only-specific-term-levels), for example, [only the top parent level](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#index-only-top-level).

#### Cache FacetWP’s AJAX requests

Filtering can be sped up by installing the [FacetWP Caching add-on](/help-center/add-on-features-and-extras/caching/). It caches FacetWP’s own AJAX requests for each used filter combination in the database. [See below](#the-facetwp-caching-add-on) for more info and its limitations.

### Website and server optimization

[As explained above](#causes-for-slow-page-loads-and-filtering), FacetWP’s filtering speed depends on how fast your uncached pages load. Important factors in this are the hardware and software your site is running on, your theme and plugins, and the efficiency of your template code. But the list of other things that you can do to increase performance is near endless. We wrote a separate [tutorial on how to improve your page load speed](/how-to-make-your-website-load-faster/) to give an overview and get you started.

There are many tools and plugins you can use to debug and optimize your site’s code and analyze page loading times to determine the effectiveness of improvements you make. The recommended tool to do this is the free [Query Monitor plugin](https://wordpress.org/plugins/query-monitor/).

Check out [our tutorial about how you can use Query Monitor to optimize performance](/how-to-use-query-monitor-to-optimize-performance/) by optimizing the code and (number of) queries generated by your theme, listing template and loops, profiling your plugins, and optimizing your server setup.

### Caching

One of the things that can help speed up your site enormously is to enable one or more caching solutions. But only some of the server-side caching solutions (like [OPcache](/how-to-make-your-website-load-faster/#php-opcode-caching) and [object caching](/how-to-make-your-website-load-faster/#object-caching)) will speed up FacetWP filtering.

If you have a high-traffic site, [CDN caching](/how-to-make-your-website-load-faster/#cdn-caching) can also help a lot in terms of caching all static assets (like images). With a CDN, images will load super fast around the world, and it will save a lot of bandwidth.

Check our tutorial about performance for [an introduction to several types of server- and page caching](/how-to-make-your-website-load-faster/#enable-server-caching) and other things you can do to improve page load speed.

#### Using caching plugins

There are many WordPress [caching/optimization plugins](/how-to-make-your-website-load-faster/#caching-and-optimization-plugins) that each offer a range of different caching solutions, often combined with code optimization features like script minification, concatenation and deferring, image optimization, CDN image storage solutions, etc.

FacetWP has [built-in support for WP Rocket](/help-center/using-facetwp-with/wp-rocket/), a popular (paid) caching plugin. And a lot of our users are using [Cloudflare](/help-center/using-facetwp-with/cloudflare/) with the [Cloudflare plugin](https://wordpress.org/plugins/cloudflare/).

If you’re using a caching plugin with FacetWP, in general, make sure that HTML minification and script deferring is disabled. HTML minification is often problematic because – depending on the settings – it removes HTML comments, including the 
```
<!--fwp-loop-->
```

 comments that FacetWP uses to automatically detect the query results. This often happens when users turn on [Cloudflare’s Auto Minify feature](/help-center/using-facetwp-with/cloudflare/). Sometimes you can exclude HTML comment from the minification process, which could prevent this (but test to make sure FacetWP is still working correctly). Script deferring is often problematic because of script timing issues.

If you are using the [Pods plugin](https://wordpress.org/plugins/pods/) (which has built-in caching), [experiment with the Pods Alternative Cache add-on plugin](/how-to-make-your-website-load-faster/#caching-and-the-pods-plugin), especially if you are hosting your site on [WP Engine](/help-center/using-facetwp-with/wp-engine/).

#### The FacetWP Caching add-on

For extra filtering speed you can enable FacetWP’s [Caching add-on](/help-center/add-on-features-and-extras/caching/), which caches FacetWP’s own AJAX requests in the database. The Caching add-on can help speed up high-traffic pages by preventing FacetWP from having to calculate the choices for each facet on each page load.

Each unique facet filter combination that is used will be cached and retrieved from the cache the next time someone chooses that combination. If you have many users selecting a lot of different unique combinations (e.g. entering their own location or making random assortments of facet selections), then caching the AJAX requests isn’t going to help much because those combinations will not have been cached yet. So the Caching add-on will only be effective on frequently visited pages (like landing pages) with only a few facets and facet options/combinations that are used often.

The FacetWP Caching add-on doesn’t cache anything else than its own AJAX requests, so it will not negatively affect other caching systems you are using. It can be used side-by-side with other caching plugins, like WP Rocket, because most of them intentionally ignore AJAX requests.

Depending on how often your content changes, you may want to experiment with [the cache expiration time](/help-center/add-on-features-and-extras/caching/#setting-the-expiration). By default, the cache expires after 1 hour (3600 seconds). If your content only changes weekly or monthly, it would make sense to increase the cache lifetime as well. If your content rarely changes you could set the cache to a really long expiration time, then manually clear it when necessary. That’s actually what we do on facetwp.com because our demo content almost never changes.

## Search performance, limits and alternatives

FacetWP – on a WP search page and by extension in [Search facets](/help-center/facets/facet-types/search/)  – by default uses WP Core search, which is [extremely basic in functionality](/help-center/facets/facet-types/search/#using-default-wordpress-core-search). It searches only titles and the content and excerpt fields for matches, and has no understanding of relevancy.

FacetWP’s main limitation in search *speed* is MySQL itself. Ultimately, MySQL is a general-purpose database and wasn’t built with the intention of being a scalable search engine.

For more flexibility, you can use FacetWP’s [SearchWP](/help-center/using-facetwp-with/searchwp/) (built-in) or [Relevanssi](/help-center/using-facetwp-with/relevanssi/) (with add-on) integration. Both plugins let you search other data (custom fields, taxonomy terms, PDF content, etc) too. They each offer many settings and add-ons to make search results more relevant.

### Remove or customize the post limit

By default, when using a Search facet, **the number of search results are limited for performance reasons**. The exact limit depends on the chosen [Search engine](/help-center/facets/facet-types/search/#search-engine) and can be removed or customized:

| Search engine | Default post limit |  |
| --- | --- | --- |
| WP Default | 200 | Remove or customize |
| SearchWP | 200 | Remove or customize |
| Relevanssi | 500 | Remove or customize |

### Using SearchWP

FacetWP has [built-in integration](/help-center/using-facetwp-with/searchwp/) with [SearchWP](https://searchwp.com/?ref=7), which is much more flexible than WP Core search. It can search all your custom fields and has lots of features to fine-tune the relevancy of the returned results. It can even search pdfs and documents in your Media Libary.

For large sites, keep in mind that SearchWP has a much lower maximum post limit than FacetWP itself because all the advanced features and extra calculations SearchWP is doing behind the scenes require more server resources. SearchWP works best on a site with anywhere from a few posts to a few thousand. If your website has tens of thousands of posts or even hundreds of thousands, SearchWP does recommend not using it (see their [FAQ](https://searchwp.com/documentation/faq/)).

### Using Relevanssi

FacetWP has an [add-on integration](https://facetwp.com/help-center/using-facetwp-with/relevanssi/) with the [Relevanssi](https://wordpress.org/plugins/relevanssi/) search plugin. Relevanssi greatly improves the quality and relevancy of search results by maintaining its own search index in the database.

Be aware that using Relevanssi may require large amounts (hundreds of MBs) of database space (for a reasonable estimate, multiply the size of your wp_posts database table by three). If your hosting setup has a limited amount of space for database tables, using Relevanssi may cause problems. The following information is from the Relevanssi site:

“The upper limit of how big a site Relevanssi can support depends on your hardware. On shared hosting accounts with limited resources, tens of thousands of posts can be too much. If your hardware is solid, especially your database, there’s probably no upper boundary. The biggest site we’ve heard run Relevanssi without problems had two million posts, using a dedicated database server with SSD drives.”

### Alternative search solutions

If you are expecting to have hundreds of thousands or even millions of results then you may want to look into [Elasticsearch](https://www.elastic.co/elasticsearch/) or [Algolia](https://www.algolia.com), which FacetWP both doesn’t integrate with. These solutions offload search functionality to an external server that’s specialized in handling those searches, which will help speed up your site search.

#### Elasticsearch with the Elasticpress plugin

The [Elasticpress](https://wordpress.org/plugins/elasticpress/) plugin works with Elasticsearch too. This is a complicated setup to get running, see [this tutorial](https://www.cloudways.com/blog/elasticsearch-on-wordpress/) for an overview.

Note that FacetWP does not fully integrate with ElasticPress. We have not tested ElasticPress with FacetWP ourselves, but some users have been able to get it working with [Search facets](/help-center/facets/facet-types/search/) specifically, for example with [this script](https://github.com/mvirenius/vafael). But it does not work with other facet types which still require MySQL (the WordPress database) in order to function properly.

Also note that Elasticpress limits results to 10000 for performance reasons, so FacetWP will also not index or show more than 10000 results. See [our Elasticpress page](/help-center/using-facetwp-with/elasticpress/) for a way to fix this, and tips on how to get Elasticpress working with FacetWP Search facets.

#### Algolia DocSearch

[Algolia DocSearch](https://docsearch.algolia.com/) is a great service – we use it too on this site for the [Help Center search](javascript:void(0);). But there is no way to integrate Algolia DocSearch with FacetWP, and we have currently no plans to build this.

Algolia DocSearch is *very* fast, mainly because all of its databases are in-memory. The drawback is that it’s expensive. Their pricing used to be more reasonable (and they even had their own in-house WordPress plugin), but years back they shifted focus towards enterprise clients.

    
## See also

    - [How to use Query Monitor to optimize performance](https://facetwp.com/how-to-use-query-monitor-to-optimize-performance/)
- [How to make your website load faster](https://facetwp.com/how-to-make-your-website-load-faster/)
- [The FacetWP URL](https://facetwp.com/help-center/developers/the-facetwp-url/)
- [Indexing](https://facetwp.com/help-center/indexing/)
- [Common indexing issues](https://facetwp.com/help-center/indexing/common-indexing-issues/)
- [How to trigger the indexer programmatically](https://facetwp.com/help-center/indexing/how-to-trigger-the-indexer-programmatically/)
- [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [The facetwp_indexer_query_args hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/)
- [Indexing with WP-CLI](https://facetwp.com/help-center/using-facetwp-with/wp-cli/)
- [The Schedule Indexer add-on](https://facetwp.com/help-center/add-on-features-and-extras/schedule-indexer/)
- [The Caching add-on](https://facetwp.com/help-center/add-on-features-and-extras/caching/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [The Search facet type](https://facetwp.com/help-center/facets/facet-types/search/)
- [Using FacetWP with SearchWP](https://facetwp.com/help-center/using-facetwp-with/searchwp/)
- [Using FacetWP with Relevanssi](https://facetwp.com/help-center/using-facetwp-with/relevanssi/)
- [Using FacetWP with WP Engine](https://facetwp.com/help-center/using-facetwp-with/wp-engine/)
- [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)
- [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)
- [The Checkboxes facet type](https://facetwp.com/help-center/facets/facet-types/checkboxes/)
- [The Dropdown facet type](https://facetwp.com/help-center/facets/facet-types/dropdown/)
- [The Radio facet type](https://facetwp.com/help-center/facets/facet-types/radio/)
- [The fSelect facet type](https://facetwp.com/help-center/facets/facet-types/fselect/)
- [The Hierarchy facet type](https://facetwp.com/help-center/facets/facet-types/hierarchy/)
- [The Color facet type](https://facetwp.com/help-center/facets/facet-types/color/)
- [The Exclude facet type](https://facetwp.com/help-center/facets/facet-types/exclude/)

                    Last updated: July 15, 2026

---

## FacetWP REST API

**Source:** [https://facetwp.com/help-center/developers/facetwp-rest-api/](https://facetwp.com/help-center/developers/facetwp-rest-api/)

FacetWP has two API endpoints: the 
```
/facetwp/v1/fetch
```

 and the 
```
/facetwp/v1/refresh
```

 endpoint. The 
```
/facetwp/v1/fetch
```

 endpoint lets you query raw FacetWP data, with which you can build custom applications. The 
```
/facetwp/v1/refresh
```

 endpoint is used by FacetWP itself in the front-end, for filtering.

By default, the 
```
/facetwp/v1/fetch
```

 endpoint is disabled, to protect your data. To use it, you need to [enable it](#enable-the-fetch-api-endpoint).

The 
```
/facetwp/v1/refresh
```

 endpoint is always open. If you want to protect this endpoint (and with that, facet filtering) from being accessed by non-logged-in users, [see the section below](#restrict-the-rest-api-and-facet-filtering-to-authenticated-users).

## Enable the fetch API endpoint

By default, the 
```
/facetwp/v1/fetch
```

 API endpoint is disabled. To enable it, use this hook in your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_api_can_access', function( $boolean ) {
  return current_user_can( 'manage_options' );
});
```

Important: Secure the API using [authentication](https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/), otherwise anonymous users will be able to access private data! One way to do this is with the [WordPress REST API Authentication plugin](https://wordpress.org/plugins/wp-rest-api-authentication/). With the paid version you can also secure selected third-party plugin endpoints, like FacetWP’s. Or, [protect the whole WordPress REST API](#restrict-the-rest-api-and-facet-filtering-to-authenticated-users).

## Fetch endpoint URL

```
/wp-json/facetwp/v1/fetch
```

The 
```
/facetwp/v1/fetch
```

 endpoint expects a 
```
POST
```

 request with 1 parameter: 
```
data
```

. This parameter should be a *string* (a stringified JSON object).

## Example

Let’s retrieve 
```
cars
```

 with 
```
make = audi
```

, and also grab choices for the 
```
vehicle_type
```

 facet.

Here’s an example of the request JSON, and how to stringify it:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infovar request_data = {
  'data': {
    'facets': {
      'make': ['audi'],
      'vehicle_type': []
    },
    'query_args': {
      'post_type': 'cars',
      'posts_per_page': 4,
      'paged': 1
    }
  }
};

// Log the data formatted as stringified JSON
console.log( JSON.stringify( request_data ) );
```

Note: 
```
query_args
```

 accepts any [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/) params (like tax_query, meta_query, etc).
Here’s a full example request using JavaScript’s 
```
fetch()
```

 method:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infovar request_data = {
  'data': {
    'facets': {
      'make': ['audi'],
      'vehicle_type': []
    },
    'query_args': {
      'post_type': 'cars',
      'posts_per_page': 4,
      'paged': 1
    }
  }
};

var response = fetch('https://yoursite.com/wp-json/facetwp/v1/fetch', {
  'method': 'POST',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('username:password') // base64-encoded
  },
  'body': JSON.stringify( request_data )
})
  .then(response => response.json())
  .then(result => console.log( result ));
```

### API test example in Postman

If you want to test your site’s 
```
/facetwp/v1/fetch
```

 endpoint in [Postman](https://www.postman.com/), see the screenshot below for the settings to use. The request needs to be 
```
POST
```

 request, and the data needs to be sent in the request body, as a [stringified JSON object](#api-data).

In the “Authorization” tab choose “Basic Auth” and use your WordPress username and password. Make sure the 
```
/facetwp/v1/fetch
```

 endpoint [is enabled](#enable-the-fetch-api-endpoint).

![An example test request to the /facetwp/v1/fetch endpoint in Postman.](https://facetwp.com/wp-content/uploads/2024/11/facetwp_api_postman.png)An example test request to the 
```
/facetwp/v1/fetch
```

 endpoint in Postman.

## Response data

```
{
  "results":[
    1,
    2,
    3,
    4
  ],
  "facets":{
    "make":{
      "name":"make",
      "label":"Make",
      "type":"checkboxes",
      "selected":[
        "audi"
      ],
      "choices":[
        {
          "value":"audi",
          "label":"Audi",
          "depth":0,
          "count":20
        }
      ]
    },
    "vehicle_type":{
      "name":"vehicle_type",
      "label":"Vehicle Type",
      "type":"checkboxes",
      "selected":[

      ],
      "choices":[
        {
          "value":"car",
          "label":"Car",
          "depth":0,
          "count":17
        },
        {
          "value":"suv",
          "label":"SUV",
          "depth":0,
          "count":3
        },
        {
          "value":"minivan",
          "label":"Minivan",
          "depth":0,
          "count":0
        },
        {
          "value":"truck",
          "label":"Truck",
          "depth":0,
          "count":0
        },
        {
          "value":"van",
          "label":"Van",
          "depth":0,
          "count":0
        }
      ]
    }
  },
  "pager":{
    "page":1,
    "per_page":4,
    "total_rows":20,
    "total_pages":5
  }
}
```

## Restrict the REST API (and facet filtering) to authenticated users

By default, the 
```
/facetwp/v1/fetch
```

 endpoint is closed, [unless enabled](#enable-the-fetch-api-endpoint). But the 
```
/facetwp/v1/refresh
```

 endpoint is always open, because it is used by FacetWP itself in the front-end, for filtering.

If you have facet pages that are only available to logged-in users, you may want to prevent non-logged-in users from accessing the 
```
/facetwp/v1/refresh
```

 endpoint entirely. To do this, you could use a plugin like [WordPress Rest API Authentication](https://facetwp.com/help-center/using-facetwp-with/wordpress-rest-api-authentication/) by miniOrange. The paid version of this plugin lets you protect selected endpoints of third-party plugins (like FacetWP).

You could also protect the whole WordPress REST API. Note that is [not advisable](https://developer.wordpress.org/rest-api/frequently-asked-questions/#can-i-disable-the-rest-api) to **disable** the WordPress REST API, because doing so will break WordPress Admin functionality that depends on the API being active. But you can **require authentication** for all WordPress REST API requests, effectively protecting the entire API from anonymous external access.

To do so, you can add the following code to your (child) theme’s functions.php, [as advised in the WordPress REST API handbook](https://developer.wordpress.org/rest-api/frequently-asked-questions/#require-authentication-for-all-requests):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Source: 
// https://developer.wordpress.org/rest-api/frequently-asked-questions/
add_filter( 'rest_authentication_errors', function( $result ) {

    // If a previous authentication check was applied,
    // pass that result along without modification.
    if ( true === $result || is_wp_error( $result ) ) {
        return $result;
    }

    // No authentication has been performed yet.
    // Return an error if user is not logged in.
    if ( ! is_user_logged_in() ) {
        return new WP_Error(
            'rest_not_logged_in',
            __( 'You are not currently logged in.' ),
            array( 'status' => 401 )
        );
    }

    // Our custom authentication check should have no effect
    // on logged-in requests
    return $result;
});
```

Note that with the above code in place, also FacetWP’s 
```
/facetwp/v1/refresh
```

 endpoint will be blocked from non-logged-in users. You’ll notice that **facet filtering will now no longer work, also not for logged-in users**, because by default, the WordPress REST API doesn’t pass along authentication data. To fix this, you need to add a second piece of code, as explained in [this tutorial on how to pass authentication data through REST API requests](/how-to-pass-authentication-data-through-rest-api-requests/).

## Fix refresh issues when using user authentication

By default, the [WordPress REST API](https://developer.wordpress.org/rest-api/) doesn’t pass along authentication data. So if your FacetWP template or custom code depends on the currently logged-in user (e.g. with 
```
is_user_logged_in()
```

), or if you [restrict WordPress REST API access to logged-in users](#restrict-the-rest-api-and-facet-filtering-to-authenticated-users), you will run into issues with your code not working after an AJAX refresh is triggered (which happens when using facets). See [this tutorial on how to pass authentication data through REST API requests](/how-to-pass-authentication-data-through-rest-api-requests/).

## Trigger the indexer programmatically

You may need to [trigger the indexer programmatically](/help-center/indexing/how-to-trigger-the-indexer-programmatically/) if posts aren’t saved via the normal /wp-admin/.

The [second code sample](/help-center/indexing/how-to-trigger-the-indexer-programmatically/#re-index-a-single-post) on the above-linked section shows how to force FacetWP to re-index a specific post.

    
## See also

    - [Indexing](https://facetwp.com/help-center/indexing/)
- [How to pass authentication data through REST API requests](https://facetwp.com/how-to-pass-authentication-data-through-rest-api-requests/)
- [Using FacetWP with the WordPress REST API Authentication plugin](https://facetwp.com/help-center/using-facetwp-with/wordpress-rest-api-authentication/)
- [Using FacetWP with the All-In-One Security (AIOS) plugin](https://facetwp.com/help-center/using-facetwp-with/all-in-one-security-aios/)

                    Last updated: November 22, 2024

---

## Hooks reference

**Source:** [https://facetwp.com/help-center/developers/hooks/](https://facetwp.com/help-center/developers/hooks/)

Hooks allow us to customize functionality without touching the original codebase. This prevents any code changes from getting lost whenever a plugin and/or theme gets updated.

FacetWP provides a wide range of hooks and filters to influence its behavior and filtering results.

These hooks and filters can be used directly in your (child)theme’s code (mostly in functions.php). But we recommend using our [Custom Hooks add-on](/help-center/add-on-features-and-extras/custom-hooks/).

## FacetWP Hooks

	[Indexing hooks](https://facetwp.com/help-center/developers/hooks/indexing-hooks/)
					[Querying hooks](https://facetwp.com/help-center/developers/hooks/querying-hooks/)
					[Output hooks](https://facetwp.com/help-center/developers/hooks/output-hooks/)
					[Advanced hooks](https://facetwp.com/help-center/developers/hooks/advanced-hooks/)
					[Deprecated Hooks](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/)

                    Last updated: May 24, 2024

---

## Advanced hooks

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/)

These hooks allow you to modify FacetWP’s core functionality, such as registering new facet data sources, registering facets programmatically, and even [creating entirely new facet types](/help-center/facets/facet-types/custom-facet-types/).

	[facetwp_i18n](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_i18n/)
					[facetwp_scripts](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_scripts/)
					[facetwp_assets](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_assets/)
					[facetwp_asset_html](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_asset_html/)
					[facetwp_facet_types](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facet_types/)
					[facetwp_facets](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facets/)
					[facetwp_templates](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_templates/)
					[facetwp_facet_sources](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facet_sources/)
					[facetwp_excluded_custom_fields](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields/)
					[facetwp_excluded_custom_fields_like](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields_like/)
					[facetwp_use_preloader](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_use_preloader/)
					[facetwp_debug_hooks](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_debug_hooks/)
					[facetwp_admin_settings_capability](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_admin_settings_capability/)
					[upt_admin_settings_capability](https://facetwp.com/help-center/developers/hooks/advanced-hooks/upt_admin_settings_capability/)

                    Last updated: April 1, 2026

---

## facetwp_admin_settings_capability

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_admin_settings_capability/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_admin_settings_capability/)

## Overview

With this hook, you can determine which WordPress user role has access to the FacetWP settings. This makes it possible to let for example Editors use facets and listings.

The hook lets you specify a user [capability](https://wordpress.org/documentation/article/roles-and-capabilities/), which in turn determines the role. The default capability is set to 
```
manage_options
```

, which is an [Administrator capability](https://wordpress.org/documentation/article/roles-and-capabilities/#administrator).

The hook is applied to the main FacetWP plugin, and these add-ons:

- [Caching](/help-center/add-on-features-and-extras/caching/)
- [Conditional Logic](/help-center/add-on-features-and-extras/conditional-logic/)

Note:This hook is **not** applied to the [User Post Type add-on](/help-center/add-on-features-and-extras/user-post-type/), because that add-on is not dependent on FacetWP. User Post Type has its own hook to do the same: [upt_admin_settings_capability](https://facetwp.com/help-center/developers/hooks/advanced-hooks/upt_admin_settings_capability/).

## Parameters

- **$capability** | string | The [capability](https://wordpress.org/documentation/article/roles-and-capabilities/) that has access to the FacetWP settings. Default: 
```
manage_options
```

.

## Usage

This example shows how to give the [Editor role](https://wordpress.org/documentation/article/roles-and-capabilities/#editor) access to FacetWP settings, by setting the 
```
$capability
```

 to 
```
edit_pages
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_admin_settings_capability', function( $capability ) {
  return 'edit_pages'; // Give Editors access to the FacetWP settings pages. Default: 'manage_options'.
}, 10, 1 );
```

    
## See also

    - [The Caching add-on](https://facetwp.com/help-center/add-on-features-and-extras/caching/)
- [The Conditional Logic add-on](https://facetwp.com/help-center/add-on-features-and-extras/conditional-logic/)
- [The User Post Type add-on](https://facetwp.com/help-center/add-on-features-and-extras/user-post-type/)
- [The upt_admin_settings_capability hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/upt_admin_settings_capability/)

                    Last updated: December 17, 2024

---

## facetwp_asset_html

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_asset_html/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_asset_html/)

## Overview

With this hook, you can customize the HTML of FacetWP’s JavaScript and CSS assets (
```
<script>
```

 and 
```
<link>
```

 tags), before they are output in the footer of the page.

This hooks runs both on all of the main plugin’s assets, and on all [add-on](/add-ons/) assets.

Note:To customize **which** of FacetWP’s JavaScript and CSS files are rendered, you can use [the facetwp_assets hook](/help-center/developers/hooks/advanced-hooks/facetwp_assets/).
Note:FacetWP intentionally does **not** use WP enqueue or dequeue functions. Assets are only loaded when facets are detected on the page, which cannot be done using [wp_enqueue_script()](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) or [wp_enqueue_style()](https://developer.wordpress.org/reference/functions/wp_enqueue_style/). This also means that you cannot use the [wp_script_attributes](https://developer.wordpress.org/reference/hooks/wp_script_attributes/) hook to add attributes to FacetWP’s linked 
```
<script>
```

 tags, for example to [add a nonce attribute in a Strict Content Security Policy (CSP) implementation](https://facetwp.com/how-to-use-facetwp-with-a-strict-content-security-policy-csp/). To add a 
```
nonce
```

 or other attribute, you can [use the facetwp_asset_html hook](#add-a-nonce-attribute-to-facetwps-linked-scripts) instead.

## Parameters

- **$html** | string | The HTML of the asset, as output in the page footer
- **$url** | string | The URL of the asset, as output in the 
```
src
```

 attribute of the asset HTML

## Examples

### Add a cookiebot attribute

The following example adds the 
```
data-cookieconsent="ignore"
```

 attribute ([more info](https://support.cookiebot.com/hc/en-us/articles/360009063660-Disable-automatic-cookie-blocking-for-a-specific-script)) to all of FacetWP’s JavaScript assets, to prevent the [Cookiebot plugin](https://wordpress.org/plugins/cookiebot/) from blocking FacetWP’s scripts:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter('facetwp_asset_html', function( $html, $url ) {

  // Check if it's a <script> tag
  if ( strpos($html, '<script') !== false ) {
    
    // Add the data-cookieconsent attribute
    $html = str_replace('<script ', '<script data-cookieconsent="ignore" ', $html);
  }

  return $html;
}, 10, 2);
```

Because of the check in [line 4](#cookiebot-data-cookieconsent-L4) code, the the new attribute is only added to 
```
<script>
```

 tags, and not to 
```
<link>
```

 tags (CSS files).

With this hook added to the (child) theme’s functions.php, all of FacetWP’s 
```
<script>
```

 tags will now look like this:

```
<script data-cookieconsent="ignore" src="https://domain.com/wp-content/plugins/facetwp/assets/js/dist/front.min.js?ver=x.x.x"></script>
```

### Add a “nonce” attribute to FacetWP’s linked scripts

If you are [implementing a Strict Content Security Policy (CSP)](https://facetwp.com/how-to-use-facetwp-with-a-strict-content-security-policy-csp/), you’ll notice that you cannot use the [wp_script_attributes](https://developer.wordpress.org/reference/hooks/wp_script_attributes/) hook to add the required 
```
nonce
```

 attribute to FacetWP’s linked scripts. This is because FacetWP intentionally does **not** use WP enqueue or dequeue functions that this hook runs on. FacetWP’s assets are only loaded when facets are detected on the page, which cannot be done using [wp_enqueue_script()](https://developer.wordpress.org/reference/functions/wp_enqueue_script/).

To add the 
```
nonce
```

 attribute to FacetWP’s **linked** scripts you can instead use the 
```
facetwp_asset_html
```

 hook.

Add the following code to your (child) theme’s functions.php to add the 
```
nonce
```

 attribute if you are using the [Strict CSP plugin](https://wordpress.org/plugins/strict-csp/):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_asset_html', function( $html, $url ) {

  // Only add nonces to the scripts using the Strict CSP plugin if it is active:
  if ( function_exists( '\StrictCSP\get_nonce' ) ) {

    // Only modify <script src="..."> tags, not <link> CSS tags
    if ( strpos( $html, '<script' ) !== false ) {
      $nonce = \StrictCSP\get_nonce();
      $html = str_replace( '<script ', '<script nonce="' . esc_attr( $nonce ) . '" ', $html );
    }

  }

  return $html;
}, 10, 2 );
```

The exact function to get the nonce value, in [line 11](#add-nonce-strict-csp-plugin-L11), depends on the chosen implementation. See the [Strict CSP tutorial](/how-to-use-facetwp-with-a-strict-content-security-policy-csp/) for several [alternative ways to do this](/how-to-use-facetwp-with-a-strict-content-security-policy-csp/#implement-a-strict-csp).

Note that for FacetWP’s **inline** scripts you can use the [wp_inline_script_attributes](https://developer.wordpress.org/reference/hooks/wp_inline_script_attributes/) hook, as these scripts are added with the  the [wp_print_inline_script_tag()](https://developer.wordpress.org/reference/functions/wp_print_inline_script_tag/) function, [since version 4.5](#use-facetwp-with-a-strict-content-security-policy-csp).

    
## See also

    - [The facetwp_assets hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_assets/)
- [Using FacetWP with Cookiebot](https://facetwp.com/help-center/using-facetwp-with/cookiebot/)
- [How to use FacetWP with a Strict Content Security Policy (CSP)](https://facetwp.com/how-to-use-facetwp-with-a-strict-content-security-policy-csp/)

                    Last updated: May 8, 2026

---

## facetwp_assets

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_assets/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_assets/)

## Overview

With this hook, you can control which FacetWP JavaScript and CSS files are rendered.

Note:To customize the **HTML** of FacetWP’s JavaScript and CSS assets (
```
<script>
```

 and 
```
<link>
```

 tags), before they are output in the footer of the page, you can use [the facetwp_asset_html hook](/help-center/developers/hooks/advanced-hooks/facetwp_asset_html/).
Note:FacetWP intentionally does **not** use WP enqueue or dequeue functions. Assets are only loaded when facets are detected on the page, which cannot be done using [wp_enqueue_script()](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) or [wp_enqueue_style()](https://developer.wordpress.org/reference/functions/wp_enqueue_style/). This also means that you cannot use the [wp_script_attributes](https://developer.wordpress.org/reference/hooks/wp_script_attributes/) hook to add attributes to FacetWP’s linked 
```
<script>
```

 tags, for example to [add a nonce attribute in a Strict Content Security Policy (CSP) implementation](https://facetwp.com/how-to-use-facetwp-with-a-strict-content-security-policy-csp/). To add a 
```
nonce
```

 or other attribute, you can [use the facetwp_asset_html hook](/help-center/developers/hooks/advanced-hooks/facetwp_asset_html/#add-a-nonce-attribute-to-facetwps-linked-scripts) instead.
Note:If you don’t see **any** FacetWP assets in the footer of your page, make sure the [wp_footer()](https://developer.wordpress.org/reference/functions/wp_footer/) function is present in your (child) theme’s footer section. The footer section is usually a file named 
```
footer.php
```

. If the function is not present in footer.php (or your main template, if it does not use a separate footer include), you can add it manually by adding 
```
<?php wp_footer(); ?>
```

 to the file, right before 
```
</body>
```

. And of course, make sure 
```
footer.php
```

 is actually included in the template used.

## Parameters

- **$assets** | array | An associative array of assets to load

## Usage

Add a custom JavaScript file to facet pages:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_assets', function( $assets ) {
  $assets['custom.js'] = 'URL/TO/YOUR/custom.js';
  return $assets;
});
```

To remove an existing asset, you can use the following code. For all available asset keys, see [the overview below](#available-asset-keys).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_assets', function( $assets ) {
  unset( $assets['event-manager.js'] );
  return $assets;
});
```

## Remove FacetWP’s CSS styles

If you want to remove FacetWP’s front-end CSS styles entirely, for example to style your facets entirely from scratch, you can remove 
```
front.css
```

 like this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_assets', function( $assets ) {
  unset( $assets['front.css'] );
  return $assets;
});
```

Alternatively, you can use the following filter:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_load_css', '__return_false' );
```

## Enable accessibility support programmatically

FacetWP’s includes built-in [accessibility support](/help-center/add-on-features-and-extras/accessibility-support/). This consists of the 
```
accessibility.js
```

 script and a few 
```
JSON
```

 settings, stored in 
```
FWP_JSON.a11y
```

.

While you could enable the accessibility script independently with the 
```
facetwp_assets
```

 hook, this would not include the needed 
```
JSON
```

, so **don’t do that**.

The recommended way to enable FacetWP’s built-in accessibility support programmatically is to add the following to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_load_a11y', '__return_true' );
```

Note that this does **not** override the [“Load a11y support” setting](/help-center/add-on-features-and-extras/accessibility-support/#enable-accessibility-support). If either the setting is enabled, *or* the above hook returns 
```
true
```

, the script will be loaded and accessibility support will be enabled.

## Enable deprecated JS functions

In [FacetWP 3.9](/help-center/changelog/changelog-old/#3-9), [a few deprecated JavaScript methods were removed](/deprecated-functions-removed-in-facetwp-3-9/). If your custom code relies on any of the old methods, add the following hook to resolve issues:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_load_deprecated', '__return_true' );
```

## Available asset keys

- event-manager.js
- [front.css](#remove-facetwps-css-styles)
- front.js
- front-facets.js
- [front-deprecated.js](#enable-deprecated-js-functions)
- [accessibility.js](#enable-accessibility-support-programmatically)
- jquery.autocomplete.css
- jquery.autocomplete.js
- flatpickr.css
- flatpickr.js
- fSelect.css
- fSelect.js
- gmaps (only in versions before FacetWP v4.4 and Maps add-on v2.0)
- nouislider.css
- nouislider.js
- nummy.js
- edd.js
- query-string.js
- woocommerce.js

[More examples](https://gist.facetwp.com/?_keywords=facetwp_assets)

    
## See also

    - [The facetwp_asset_html hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_asset_html/)
- [Accessibility support](https://facetwp.com/help-center/add-on-features-and-extras/accessibility-support/)
- [The facetwp_scripts hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_scripts/)
- [Using fUtil](https://facetwp.com/help-center/developers/javascript-reference/using-futil/)
- [Deprecated functions removed in FacetWP 3.9](https://facetwp.com/deprecated-functions-removed-in-facetwp-3-9/)
- [How to use FacetWP with a Strict Content Security Policy (CSP)](https://facetwp.com/how-to-use-facetwp-with-a-strict-content-security-policy-csp/)

                    Last updated: April 16, 2026

---

## facetwp_debug_hooks

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_debug_hooks/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_debug_hooks/)

## Overview

With [Debug Mode enabled in FacetWP’s settings](/help-center/troubleshooting/#enable-debug-mode), typing 
```
FWP.settings.debug.hooks_used
```

 in the browser console will list all relevant hooks that are in use on the page, with their file name and line number:

![How to use FWP.settings.debug.hooks_used in the browser console to track the usage of hooks.](https://facetwp.com/wp-content/uploads/2025/04/facetwp_debug_hooks.png)How to use 
```
FWP.settings.debug.hooks_used
```

 in the browser console to track the usage of hooks.
The listed hooks are all hooks with a name that starts with 
```
facetwp
```

, the [pre_get_posts hook](https://developer.wordpress.org/reference/hooks/pre_get_posts/), and (since [FacetWP v4.4](/help-center/changelog/#4-4)) the [posts_results hook](https://developer.wordpress.org/reference/hooks/posts_results/).

The 
```
facetwp_debug_hooks
```

 hook (available since [FacetWP v4.4](/help-center/changelog/#4-4)), makes it possible to add **any other hook** to the list of detectable hooks. You could use this to track the usage of any hook and quickly find the corresponding file and line number in any plugin or theme.

## Parameters

- **$debug_hooks** | array | The array of detectable hooks when using Debug Mode.

## Usage example

The following example adds the hooks 
```
rest_authentication_errors
```

, 
```
rest_api_init
```

, and 
```
rest_endpoints
```

 to the array of detectable hooks, visible when typing 
```
FWP.settings.debug.hooks_used
```

 in the browser console.

These hooks can be useful when debugging issues with FacetWP endpoints and authentication errors.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Adds 3 hook to the list of detectable hooks, visible when typing FWP.settings.debug.hooks_used in the browser console
add_filter( 'facetwp_debug_hooks', function( $debug_hooks ) {
  $debug_hooks = array_merge( $debug_hooks, [ 'rest_authentication_errors', 'rest_api_init', 'rest_endpoints' ] ); 
  return $debug_hooks;
} );
```

    
## See also

    - [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)

                    Last updated: February 17, 2026

---

## facetwp_excluded_custom_fields

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields/)

## Overview

In FacetWP’s admin area, FacetWP uses the 
```
FWP()->helper->get_data_sources()
```

 function to fetch existing custom fields, to show them in each facet’s “Data source” setting dropdown and in the dropdown used to add new [Listing Builder listing](/help-center/listing-templates/listing-builder/) items.

In some cases, you may want to prevent one or more custom field(s) from showing up in these dropdowns. This hook can be used to exclude specified fields by an **exact match** of the field name.

Note that there is also a sister hook, [facetwp_excluded_custom_fields_like](/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields_like/), with which you can filter out fields with a **partial match**, e.g. for a range of fields that have a hashed part of the name.

For more elaborate customizations, you could also use the [facetwp_facet_sources hook](/help-center/developers/hooks/advanced-hooks/facetwp_facet_sources/). This hook can be used to customize the **entire** list of data sources, including taxonomies and fields from other plugins that FacetWP integrates with, and their labels. It also lets you add new fields and field groups, or change the order of the groups in the dropdown. The results of this hook are not cached though, so it is recommended to use the 
```
facetwp_excluded_custom_fields
```

 hook or [the facetwp_excluded_custom_fields_like hook](/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields_like/), if possible.

## Parameters

- **$fields** | array | An array of field names to exclude

## Example

The following example removes the 
```
my_custom_field
```

 from the facets’ and Listing Builder listing items’ Data source dropdowns:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_excluded_custom_fields', function( $fields ) {
  $fields[] = 'my_custom_field'; // Exclude 'my_custom_field' from all data sources dropdowns
  return $fields;
});
```

    
## See also

    - [What are facets?](https://facetwp.com/help-center/facets/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [The facetwp_excluded_custom​_fields_like hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields_like/)
- [The facetwp_facet_sources hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facet_sources/)

                    Last updated: April 3, 2026

---

## facetwp_excluded_custom_fields_like

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields_like/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields_like/)

## Overview

In FacetWP’s admin area, FacetWP uses the 
```
FWP()->helper->get_data_sources()
```

 function to fetch existing custom fields, to show them in each facet’s “Data source” setting dropdown and in the dropdown used to add new [Listing Builder listing](/help-center/listing-templates/listing-builder/) items.

In some cases, you may want to prevent one or more custom field(s) from showing up in these dropdowns. This hook (available in FacetWP v4.5+) can be used to exclude specified fields with a **partial match**, e.g. for a range of fields that have a hashed part of their name. This hook uses the 
```
FWP()->helper->get_data_sources()
```

 function’s 
```
NOT LIKE
```

 SQL clause for its partial matching.

A use case would be to remove a range of fields that heavily pollute the dropdowns. For example, we’ve seen issues with certain plugins that continually add postmeta rows, which then blow up the amount of fields to fetch, causing 
```
404
```

 (or 
```
403
```

 or 
```
500
```

) errors in the FacetWP admin area.

Note that there is also a sister hook, [facetwp_excluded_custom_fields](/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields/), with which you can filter out fields with an **exact match** of the field name.

For more elaborate customizations, you could also use the [facetwp_facet_sources hook](/help-center/developers/hooks/advanced-hooks/facetwp_facet_sources/). This hook can be used to customize the **entire** list of data sources, including taxonomies and fields from other plugins that FacetWP integrates with, and their labels. It also lets you add new fields and field groups, or change the order of the groups in the dropdown. The results of this hook are not cached though, so it is recommended to use [the facetwp_excluded_custom_fields hook](/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields/) or 
```
facetwp_excluded_custom_fields_like
```

 hook, if possible.

## Parameters

- **$not_like** | array | An array of strings to use as a partial match to exclude fields by name

## Example

The following example removes custom fields that have 
```
_crp_cache_
```

 in their name from the facets’ and Listing Builder listing items’ Data source dropdowns:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_excluded_custom_fields_like', function( $not_like ) {
  $not_like[] = '_crp_cache_'; // Exclude custom fields that have '_crp_cache_' in their name from all data sources dropdowns
  return $not_like;
});
```

    
## See also

    - [What are facets?](https://facetwp.com/help-center/facets/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [The facetwp_excluded_custom​_fields hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields/)
- [The facetwp_facet_sources hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facet_sources/)

                    Last updated: April 3, 2026

---

## facetwp_facet_sources

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facet_sources/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facet_sources/)

## Overview

This hook lets you modify the choices within the Data source dropdown of [facets](/help-center/facets/) and [Listing Builder](/help-center/listing-templates/listing-builder/) items, in the FacetWP settings. This filter can also be used to add custom data sources to these dropdowns.

If you’re adding new data sources for facets, depending on the data, you may have to [use the facetwp_index_row hook to control how the data gets saved to the index table](#customize-the-indexed-data-for-added-custom-fields).

This hook can also be used to [add virtual, non-existing data sources for facets](#add-a-non-existing-custom-field-option-and-handle-its-indexing), as long as you tell FacetWP how to handle them when indexing the facets that use them.

Note:If you only need to exclude certain custom fields from the Data source dropdowns, it is recommended to use [the facetwp_excluded_custom_fields hook](/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields/) (for exact matches), or [the facetwp_excluded_custom_fields_like hook](/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields_like/) (for partial matches) instead, because the results of these hooks are cached.

## Parameters

- **$sources** | array | An associative array of data sources
- **$context** | string | (optional) 
```
default
```

 for facet data sources, 
```
builder
```

 for Listing  Builder item data sources

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$sources = [
  'posts' => [
    'label' => 'Posts',
    'choices' => [
      'post_type' => 'Post Type',
      'post_date' => 'Post Date',
      'post_modified' => 'Post Modified',
      'post_title' => 'Post Title',
      'post_author' => 'Post Author',
      // etc...
    ],
    'weight' => 10
  ],
  'taxonomies' => [
    'label' => 'Taxonomies',
    'choices' => [
      'tax/category' => 'Categories',
      'tax/post_tag' => 'Tags'
      // etc...
    ],
    'weight' => 20
  ],
  'custom_fields' => [
    'label' => 'Custom Fields',
    'choices' => [
      'cf/horsepower' => 'horsepower',
      'cf/mpg_city' => 'mpg_city',
      'cf/mpg_highway' => 'mpg_highway',
      'cf/torque' => 'torque'
      // etc...
    ],
    'weight' => 30
  ],
  'woocommerce' => [
    'label' => __( 'WooCommerce', 'fwp' ),
    'choices' => [
      'woo/price' => __( 'Price' ),
      'woo/sale_price' => __( 'Sale Price' ),
      'woo/regular_price' => __( 'Regular Price' ),
      'woo/average_rating' => __( 'Average Rating' ),
      'woo/stock_status' => __( 'Stock Status' ),
      'woo/on_sale' => __( 'On Sale' ),
      'woo/featured' => __( 'Featured' ),
      'woo/product_type' => __( 'Product Type' ),
      // etc...
    ],
    'weight' => 5
  ],
  'acf' => [
    'label' => 'ACF',
    'choices' => [
      'acf/my_acf_field' => 'my_acf_field',
      'acf/my_acf_field2' => 'my_acf_field2',
      // etc...
    ],
    'weight' => 5
  ],
  'upt' => [
    'label' => 'User Fields',
    'choices' => [
      'upt/my_user_field' => 'my_user_field',
      'upt/my_user_field2' => 'my_user_field2',
      // etc...
    ],
    'weight' => 10
  ],
];
```

### Notes

- Each 
```
$sources
```

 array key is its own 
```
<optgroup>
```

 in the data source dropdown. For example: 
```
$sources['posts']
```

 for Posts fields, 
```
$sources['taxonomies']
```

 for Taxonomies, and 
```
$sources['custom_fields']
```

 for “normal” Custom fields.
- Plugins that FacetWP integrates with have their own array key and 
```
<optgroup>
```

. For example: 
```
$sources['woocommerce']
```

 for [WooCommerce](/help-center/using-facetwp-with/woocommerce/) fields, 
```
$sources['acf']
```

 for [Advanced Custom Fields](/help-center/using-facetwp-with/advanced-custom-fields/) fields, and 
```
$sources['upt']
```

 for [User Post Type](/help-center/add-on-features-and-extras/user-post-type/) fields.
- Each type/group of fields has a 
```
label
```

 value for its 
```
<optgroup>
```

 heading, a 
```
choices
```

 array containing its fields, and a 
```
weight
```

 value determining the order in the data source dropdown.
- Each field in a group’s 
```
choices
```

 array is a key/value pair, where the value is the field’s dropdown option label, and the key is the field name, prefixed with the field type: 
```
tax/
```

 for taxonomies, 
```
cf/
```

 for “normal” custom fields, 
```
woo/
```

 for [WooCommerce](/help-center/using-facetwp-with/woocommerce/) fields, 
```
acf/
```

 for [Advanced Custom Fields](/help-center/using-facetwp-with/advanced-custom-fields/), and 
```
upt/
```

 for [User Post Type](/help-center/add-on-features-and-extras/user-post-type/) fields. [Posts fields](#sources-L5-L9) do not have a prefix.
- By adding new items to 
```
$sources
```

, each with a 
```
label
```

 value, 
```
choices
```

 array, and 
```
weight
```

 value, you can create your own custom 
```
<optgroup>
```

 groups of fields in the dropdown.

## Examples

### Add custom fields

The following example adds an existing custom field named 
```
my_data
```

 to the [custom_fields choices](#sources-L25-L31) of the dropdown.

Note the 
```
cf/
```

 prefix that we need to use in [the key of “normal” custom fields](#sources-L26-L29), as [explained in above notes](#notes).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_sources', function( $sources, $context ) {
  $sources['custom_fields']['choices']['cf/my_data'] = 'my_data';
  return $sources;
}, 20, 2 );
```

The following example adds “Post Status” to the [posts choices](#sources-L4-L11):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_sources', function( $sources, $context ) {
  $sources['posts']['choices']['post_status'] = 'Post Status';
  return $sources;
}, 20, 2 );
```

This may be helpful if you want to [index, filter, and display posts with a post_status other than “publish”](/how-to-filter-wp-attachments-and-draft-pending-or-private-posts/#create-a-post-status-facet), like 
```
draft
```

, 
```
future
```

, 
```
pending
```

, or 
```
private
```

 posts.

#### Customize the indexed data for added custom fields

Depending on the custom field that are adding, you may have to use the [facetwp_index_row](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/) hook to control how the data gets saved to the [index table](/help-center/indexing/).

[Here is an example](/how-to-filter-wp-attachments-and-draft-pending-or-private-posts/#create-a-media-type-facet) that uses the 
```
facetwp_index_row
```

 hook to customize the value of an indexed 
```
post_mime_type
```

, in a Media Type facet.

The example below does something similar, with a 
```
facetwp_indexer_post_facet
```

 hook:

### Add a (non-existing) custom field/option and handle its indexing

It is also possible to add a custom field/option that does not exist, as long as you tell FacetWP how to handle it when indexing a facet that uses it as its data source.

The following example adds a (non-existing) “Price (incl. tax)” field to the [woocommerce choices](#sources-L36-L46) in the dropdown.

In [line 2](#add-price-including-tax-field-L2) we use 
```
'default' == $context
```

 as a check, so that the field is only added to facets’ Data source dropdowns, not to Listing Builder item dropdowns.

Because 
```
woo/price_incl_tax
```

 is not an existing field, FacetWP needs directions on how to get and index its value correctly. In this example, we are using the 
```
facetwp_indexer_post_facet
```

 hook to get the price including tax with WooCommerce’s 
```
wc_get_price_including_tax()
```

 function:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_sources', function( $sources, $context ) {
  if ( 'default' == $context ) { // Only in facets' Data source dropdowns, not in Listing Builder item dropdowns
    $sources['woocommerce']['choices']['woo/price_incl_tax'] = __( 'Price (incl. tax)' );
  }
  return $sources;
}, 20, 2 );

// Handle the new data source when indexing
add_filter( 'facetwp_indexer_post_facet', function( $return, $params ) {
    $facet = $params['facet'];
    $defaults = $params['defaults'];
    $post_id = (int) $defaults['post_id'];

    if ( 'product' == get_post_type( $post_id ) && 'woo/price_incl_tax' == $defaults['facet_source'] ) {
        $product = wc_get_product( $post_id );
        $price = wc_get_price_including_tax( $product );
        $defaults['facet_value'] = $price;
        $defaults['facet_display_value'] = $price;
        FWP()->indexer->index_row( $defaults );
        return true;
    }

    return $return;
}, 20, 2 );
```

### Remove custom fields

The following example removes custom fields that start with 
```
_stcr
```

 from the [custom_fields choices](#sources-L25-L31) of the dropdown:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_sources', function( $sources, $context ) {
  foreach ( $sources['custom_fields']['choices'] as $key => $value ) {
    if ( 0 === strpos( $value, '_stcr' ) ) {
      unset( $sources['custom_fields']['choices'][ $key ] );
    }
  }
  return $sources;
}, 20, 2 );
```

Below is another example that removes all custom fields that have a [meta key](#sources-L26-L29) starting with 
```
cf/_
```

.

In [line 3](#remove-fields-starting-with-L3) we use 
```
custom_fields
```

 as 
```
$key
```

, to target [the custom fields dropdown group](#sources-L23-L33). And we use 
```
default
```

 as 
```
$context
```

 to target facet data source dropdowns only. For Listing Builder data sources, you’d have to use 
```
builder
```

 as 
```
$context
```

.

In [line 5](#remove-fields-starting-with-L5), we need to use the 
```
cf/
```

 prefix to target [the key of “normal” custom fields](#sources-L26-L29), as [explained above](#notes).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_sources', function( $sources, $context ) {
  foreach ( $sources AS $key => $value ) {
    if ( 'custom_fields' == $key && 'default' == $context ) {
      $choices = array_values( array_filter( $value['choices'], function( $value, $key ) {
        if ( str_starts_with( $key, 'cf/_' ) ) {
          return false;
        }
        return true;
      }, ARRAY_FILTER_USE_BOTH ) );
      $sources[$key]['choices'] = $choices;
    }
  }
  return $sources;
}, 20, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_facet_sources)

    
## See also

    - [The facetwp_excluded_custom​_fields hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields/)
- [The facetwp_excluded_custom​_fields_like hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_excluded_custom_fields_like/)
- [What are facets?](https://facetwp.com/help-center/facets/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [Indexing](https://facetwp.com/help-center/indexing/)
- [What are posts, post types, taxonomies and custom fields?](https://facetwp.com/what-are-posts-post-types-taxonomies-and-custom-fields/)
- [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)
- [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)
- [The User Post Type add-on](https://facetwp.com/help-center/add-on-features-and-extras/user-post-type/)
- [How to filter WP attachments and draft, pending or private posts](https://facetwp.com/how-to-filter-wp-attachments-and-draft-pending-or-private-posts/)

                    Last updated: April 3, 2026

---

## facetwp_facet_types

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facet_types/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facet_types/)

## Overview

This hook is needed to register/add [custom facet types](/help-center/facets/facet-types/custom-facet-types/).

## Parameters

- **$facet_types** | array | An array of facet type objects

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$facet_types = [
  'checkboxes' => new FacetWP_Facet_Checkboxes(),
  'date_range' => new FacetWP_Facet_Date_Range(),
  'dropdown' => new FacetWP_Facet_Dropdown(),
  'hierarchy' => new FacetWP_Facet_Hierarchy(),
  //...
];
```

## Usage

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_types', function( $facet_types ) {
  $facet_types['map'] = new FacetWP_Facet_Map();
  return $facet_types;
});
```

## Remove facet types from the admin settings

The 
```
facetwp_facet_types
```

 hook can only be used to **add** new facet types, **not** to **remove** facet types entirely.

However, if you use an 
```
is_admin()
```

 check, so that it only runs in the admin area, you can use this hook to prevent specificied facet types from loading in the facet settings page. The result is that these facet types cannot be selected when creating a new facet. Existing facets of these types will remain visible but will not be editable.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_types', function( $facet_types ) {

  if ( is_admin() ) {
    
    // Remove these facet types from the admin settings
    $disabled_facets = [
      'autocomplete',
      'slider',
      'date_range',
    ];

    foreach( $disabled_facets as $facet ) {
      if( isset( $facet_types[ $facet ] ) ) {
        unset( $facet_types[ $facet ] );
      }
    }
    
  }

  return $facet_types;
});
```

    
## See also

    - [Custom facet types](https://facetwp.com/help-center/facets/facet-types/custom-facet-types/)
- [The facetwp_facets hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facets/)

                    Last updated: February 3, 2026

---

## facetwp_facets

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facets/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facets/)

## Overview

With this hook, you can programmatically register/add [facets](/help-center/facets/), instead of using the plugin interface.

Note:There is a similar hook, [facetwp_templates](/help-center/developers/hooks/advanced-hooks/facetwp_templates/), to programmatically register [Listing Builder](/help-center/listing-templates/listing-builder/) listing templates.

### Why register facets programmatically?

Here are several reasons why you may want to register your facets in code:

- To prevent users from changing facet settings. Facets that are added this way will appear as “[locked facets](#locked-facets)” in the plugin settings. While this does not absolutely prevent users from changing the facet settings, it will take a deliberate “unlock” action to do so (and this “unlock” action [can be disabled too](#prevent-unlocking-of-li)).
- You can have your facets and their settings under version control (e.g. with [git](https://git-scm.com)). This way you can revert to previous sets of facets or previous facet settings.
- If your facets and settings are tied to a theme, anyone using the code/theme automatically has the registered facets and their settings.
- If you are [using FacetWP with WordPress multi-site](/help-center/using-facetwp-with/wordpress-multi-site/), all sites in the multi-site network can have the same facets and facet settings, as long as they are using the same theme. You no longer have to change facet settings in each site separately, and you can maintain them in one place: the theme’s functions.php file.

## Parameters

- **$facets** | array | An array of existing facets

## How to register a facet programmatically

To register one or more facets in code, you need to pass an array of the facet(s) settings to the hook, either [in JSON](#using-exported-json-directly), or [in PHP](#using-a-converted-php-array), as shown below.

But how to get all available settings for a particular [facet type](/help-center/facets/facet-types/)? Every facet at least has a 
```
label
```

, 
```
name
```

, and 
```
type
```

. Most facet types have a 
```
source
```

. But the rest of the settings depend on the facet type.

You could check [this (incomplete) overview](https://gist.github.com/mgibbs189/11aaddeaeebab5ce7f68). But the quickest way to get a complete and up-to-date array of all available settings for any given facet type is to first create the facet in the interface, set all its options, and then export the facet.

To do so, go to **Settings > FacetWP > Settings > Import/Export**, select one or more facets and click the “Export” button:

![How to export a facet's settings.](https://facetwp.com/wp-content/uploads/2023/03/facetwp-facets-export-facet-settings.png)How to export a facet’s settings.
Copy the exported JSON code that appears in the text box. Make sure to keep the JSON safe, because the next step is to **delete the facet(s) you just exported** (use the gear icon, then click “Save changes”), otherwise the code-registered facet(s) will not appear.

Now you have two options to register the facet(s):

1. [Use the exported JSON directly](#using-exported-json-directly)
2. [Convert the exported JSON to a PHP array first](#using-a-converted-php-array)

### Using exported JSON directly

To use the exported JSON of one or more facets directly, you can add the following code to your (child) theme’s functions.php. Paste the exported JSON between [the single quotes on line 5](#facetwp-facets-example-json-directly-L5).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facets', function( $facets ) {

  // Paste the exported JSON between the single quotes like this: json_decode('PASTE JSON HERE');
  $add_facets = json_decode(
    '{"facets":[{"enable_relevance":"yes","name":"my_search","label":"My Search","type":"search","search_engine":"","placeholder":"Enter keywords","auto_refresh":"no"}]}',
    true
  );

  foreach ( $add_facets['facets'] AS $new_facet ) {
    $facets[] = $new_facet;
  }

  return $facets;
});
```

After refreshing the page, your new code-registered facet(s) should appear in the list, at the bottom, with [a “locked” icon](#locked-facets). If you don’t see the locked facet(s), make sure you have **deleted the facet(s) you exported** (use the gear icon, then click “Save changes”), otherwise the code-registered facet(s) will not appear.

### Using a converted PHP array

![How to quickly convert a facet's exported JSON to a PHP array online.](https://facetwp.com/wp-content/uploads/2023/03/facetwp-facets-convert-json-settings-to-php-array-online.png)How to quickly convert a facet’s exported JSON to a PHP array online.
If you prefer seeing the facet settings array, or you want to make manual changes more easily, you can convert the exported JSON to a PHP array first.

A quick way to do this is to paste it into an online JSON to PHP array converter like [https://jsontophp.com](https://jsontophp.com).

Copy the converted PHP array’s key/value pairs with all the facet’s settings and paste them into the hook code, as shown in the examples below.

#### Register one new facet

For example, to register a new [Search facet](/help-center/facets/facet-types/search/) named 
```
my_search
```

, add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facets', function( $facets ) {

  // add a new 'my_search' facet to the existing $facets array
  $facets[] = [
    // settings for this facet
    'enable_relevance' => 'yes',
    'name' => 'my_search',
    'label' => 'My Search',
    'type' => 'search',
    'search_engine' => '',
    'placeholder' => 'Enter keywords',
    'auto_refresh' => 'no'
  ];

  // return the modified $facets array
  return $facets;
}, 10, 1 );
```

After refreshing the page, your new code-registered facet should appear in the list, at the bottom, with [a “locked” icon](#locked-facets). If you don’t see the locked facet, make sure you have **deleted the facet you exported** (use the gear icon, then click “Save changes”), otherwise the code-registered facet will not appear.

#### Register multiple new facets

To register multiple facets at once, just add another facet to the 
```
$facets
```

 array. The following example adds two new facets: a [Checkboxes facet](/help-center/facets/facet-types/checkboxes/) named 
```
categories
```

 and a [Search facet](/help-center/facets/facet-types/search/) named 
```
my_search
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facets', function( $facets ) {

  // add a new 'categories' facet to the existing $facets array
  $facets[] = [
    // settings for this facet
    'label' => 'Categories',
    'name' => 'categories',
    'type' => 'checkboxes',
    'source' => 'tax/category',
    'parent_term' => '',
    'hierarchical' => 'no',
    'orderby' => 'count',
    'count' => '20',
    'show_expanded' => 'no',
    'ghosts' => 'no',
    'preserve_ghosts' => 'no',
    'operator' => 'and',
    'soft_limit' => '5'
  ];

  // add a new 'my_search' facet to the existing $facets array
  $facets[] = [
    // settings for this facet
    'enable_relevance' => 'yes',
    'name' => 'my_search',
    'label' => 'My Search',
    'type' => 'search',
    'search_engine' => '',
    'placeholder' => 'Enter keywords',
    'auto_refresh' => 'no'
  ];

  // return the modified $facets array
  return $facets;
}, 10, 1 );
```

After refreshing the page, your new code-registered facets should appear in the list, at the bottom, with [a “locked” icon](#locked-facets). If you don’t see the locked facets, make sure you have **deleted the facets you exported** (use the gear icon, then click “Save changes”), otherwise the code-registered facets will not appear.

## Locked facets

After [registering a facet with this hook](#how-to-register-a-facet-programmatically), it will appear in FacetWP’s Facets overview with a “locked” icon:

![When a facet is registered with the facetwp_facets hook, the facet label will have a 'locked' icon.](https://facetwp.com/wp-content/uploads/2023/03/facetwp-facets-locked-facet.png)When a facet is registered with the facetwp_facets hook, the facet label will have a ‘locked’ icon.
If the new facet does not appear, make sure its name is unique and not already used for another facet. Make sure you have **deleted the facet(s) you exported** (use the gear icon, then click “Save changes”), otherwise the code-registered facet(s) will not appear.

The settings screen of a locked facet will have a red “This facet is registered in code. Click to allow edits” warning on top, and the settings will be dimmed and become unclickable:

![WWhen a facet is registered with the facetwp_facets hook, the facet settings will be locked.](https://facetwp.com/wp-content/uploads/2023/03/facetwp-facets-locked-facet-settings.png)When a facet is registered with the facetwp_facets hook, the facet settings will be locked.
When you click the lock icon behind “Click to allow edits”, and then change the settings (or leave the settings as they are) and click “Save changes”, the facet will no longer be registered by your code, but again in the database like a normal facet. After that, changes to the facet settings in the hook will no longer have an effect unless you change the facet’s name in the code, which will then create a new code-registered facet with that name.

If you want to prevent other users from unlocking facets this way, you’ll have to register them in a slightly different way:

### Prevent unlocking of facets

If you are registering your facets in code, and want to prevent admin users from unlocking facets (accidentally or on purpose), you can register your facet(s) as follows. The extra code makes sure that unlocked code-registered facets are deleted and added again as a locked facet, basically preventing them from being changed or removed.

Don’t forget to add [the extra CSS that removes the “Click to allow edits” link](#prevent-unlocking-css).

To register facets directly [with JSON](#using-exported-json-directly), use the following:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facets', function( $facets ) {

  $add_facets = json_decode(
    '{"facets":[{"enable_relevance":"yes","name":"my_search","label":"My Search","type":"search","search_engine":"","placeholder":"Enter keywords","auto_refresh":"no"}]}',
    true
  );

  $adding = wp_list_pluck( $add_facets['facets'], 'name' );
  foreach ( $facets AS $facet => $values ) {
    if ( in_array( $values['name'], $adding ) && !isset( $values['_code'] ) ) {
      unset( $facets[$facet] ); // Unset unlocked code-based facets
    }
  }
  foreach ( $add_facets['facets'] AS $new_facet ) {
    $facets[] = array_merge( $new_facet, [ '_code' => true ] ); // Re-lock facets if previously unlocked
  }

  return $facets;
});
```

Or, to register facets [with a PHP array](#using-a-converted-php-array):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facets', function( $facets ) {

  $add_facets = [
    'facets' => [
      [
        // settings for this facet
        'label' => 'Categories',
        'name' => 'categories',
        'type' => 'checkboxes',
        'source' => 'tax/category',
        'parent_term' => '',
        'hierarchical' => 'no',
        'orderby' => 'count',
        'count' => '20',
        'show_expanded' => 'no',
        'ghosts' => 'no',
        'preserve_ghosts' => 'no',
        'operator' => 'and',
        'soft_limit' => '5'
      ],
      [
        // settings for this facet
        'enable_relevance' => 'yes',
        'name' => 'my_search',
        'label' => 'My Search',
        'type' => 'search',
        'search_engine' => '',
        'placeholder' => 'Enter keywords',
        'auto_refresh' => 'no'
      ]
    ]
  ];

  $adding = wp_list_pluck( $add_facets['facets'], 'name' );
  foreach ( $facets AS $facet => $values ) {
    if ( in_array( $values['name'], $adding ) && !isset( $values['_code'] ) ) {
      unset( $facets[$facet] ); // Unset unlocked code-based facets
    }
  }
  foreach ( $add_facets['facets'] AS $new_facet ) {
    $facets[] = array_merge( $new_facet, [ '_code' => true ] ); // Re-lock facets if previously unlocked
  }

  return $facets;
});
```

Next, add the following CSS, which makes sure there is no way to edit the locked settings. The “Click to allow edits” link will be removed, and a “This facet is registered in code. It cannot be edited.” will show:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action('admin_head', function() {
  echo '<style>
    #app .facetwp-region .item-locked { 
      display: none;
    }  
    #app .facetwp-region-facets .locked:before {
      content: "This facet is registered in code. It cannot be edited.";
      display: block;
      padding: 10px;
      margin-bottom: 20px;
      background-color: var(--red);
      border-radius: 3px;
      color: var(--white);
      position: relative;
      z-index: 100000;
    }
</style>';
});
```

With this CSS the red “locked” banner will look like this:

![Prevent users from unlocking a code-registered facet.](https://facetwp.com/wp-content/uploads/2024/07/facetwp_facets_prevent_unlocking.png)Prevent users from unlocking a code-registered facet.
    
## See also

    - [What are facets?](https://facetwp.com/help-center/facets/)
- [The facetwp_templates hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_templates/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Using FacetWP with WordPress multi-site](https://facetwp.com/help-center/using-facetwp-with/wordpress-multi-site/)
- [Facet types](https://facetwp.com/help-center/facets/facet-types/)
- [The Search facet type](https://facetwp.com/help-center/facets/facet-types/search/)
- [The Checkboxes facet type](https://facetwp.com/help-center/facets/facet-types/checkboxes/)
- [Back up or move facets and listing templates](https://facetwp.com/help-center/add-on-features-and-extras/back-up-or-move-facets-and-listing-templates/)
- [The facetwp_facet_types hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facet_types/)

                    Last updated: February 3, 2026

---

## facetwp_i18n

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_i18n/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_i18n/)

## Overview

Generally, text strings that appear in the UI of your site and in FacetWP will be translatable using 
```
__()
```

 or 
```
_e()
```

. You’d use a translation plugin, or a WordPress [gettext filter](https://developer.wordpress.org/reference/hooks/gettext/) (see [this example](/help-center/facets/facet-types/autocomplete/#translate-the-ui-texts)).

However, some of the UI strings that appear in various [facet types](/help-center/facets/facet-types/) are *dynamic*, “in-database” strings, which means that [WPML or Polylang](/help-center/using-facetwp-with/multilingual/) for example cannot see them directly. The 
```
facetwp_i18n
```

 filter allows [these strings](#translatable-strings) to be translated.

An alternative to using the 
```
facetwp_i18n
```

 hook would be to transform these UI strings to 
```
__()
```

 translatable strings, [with the facetwp_facet_render_args hook](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#convert-pager-facet-labels-to-translatable-strings).

This filter can also be used to [translate facet labels](#translate-facet-labels).

## Translatable strings

The following [facet types’](/help-center/facets/facet-types/) strings can be translated with this hook. For an example of how to use it, [see below](#translate-ui-strings).

| Facet type | Option / string |
| --- | --- |
| Checkboxes | “See {num} more” / “See less” link text |
| Dropdown facet | Default label |
| Radio facet | Default label |
| fSelect facet | Default label |
| Hierarchy facet | Default label
“See {num} more” / “See less” link text |
| Slider facet | Reset text
Prefix
Suffix
Slider handles’ aria-labels |
| Search facet | Placeholder text |
| Autocomplete facet | Placeholder text |
| Date Range facet | Placeholder texts. Note: the Date Range facet’s calendar can be translated with the facetwp_render_output hook. |
| Star Rating facet | “& up” and “Undo” link texts |
| Proximity facet | Placeholder textUnit of measurement label (“km” or “mi”) in the radius dropdown/slider |
| Pager facet | See this example |
| Type: Page numbers | Dots label
Prev button label
Next button label |
| Type: Result counts | Count text (plural)
Count text (singular)
Count text (no results) |
| Type: Load more | Load more text
Loading text |
| Type: Per page | Default label
“Show all” text (if a non-numeric option is added in the settings) |
| Sort facet | Default label
All sort option labels |
| Reset facet | Reset text |
| Map facet | “Enable map filtering” button text
“Reset” button text |
| Hierarchy Select facet | Depth labels |
| Range List facet | Default label |
| Time Since facet | Choices labels
Default label |
| A-Z Listing | Default label |
| Color | “See {num} more” / “See less” link text |
| Exclude | Default label
“See {num} more” / “See less” link text
Prefix
Suffix |
| All facet types | Facet labels (which appear as headings in the Mobile Flyout and as labels in the User Selections facet). See below for an example. |

The following [Listing Builder](/help-center/listing-templates/listing-builder/) item can be translated:

| Item | Option / string |
| --- | --- |
| Button | Button item text |

The following [Elementor FacetWP widget](/help-center/using-facetwp-with/elementor/#facetwp-elementor-widgets) item can be translated:

| Item | Option / string |
| --- | --- |
| Facet widget | Facet Header text |

## Parameters

- **$string** | string | The string to translate

## Usage examples

### Translate UI strings

To translate one or more of the UI strings [listed above](#translatable-strings), add the following code (adapted with your translated strings) to your (child) theme’s functions.php.

In this example, the default language is English and the code gives translations for 2 strings, for the 2 non-default languages, in this case Spanish (‘es’) and German (‘de’). You should only list the **non-default** language(s), and use the strings as used in the **default** language (in this case the English ‘Any’ and ‘Enter keywords’). These are the strings as they are set by default in FacetWP’s code, or in each facet’s settings (for example the Placeholder text you can set in the [Search facet’s settings](/help-center/facets/facet-types/search/#placeholder-text)).

Also important for this to work is that any strings you set in your facets’ settings are in the default language. Last but not least: the strings need to match exactly, including capitalization and spaces.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_i18n', function( $string ) {
  if ( isset( FWP()->facet->http_params['lang'] ) ) {
    $lang = FWP()->facet->http_params['lang'];

    $translations = [];
    $translations['es']['Any'] = 'Cualquier';
    $translations['de']['Any'] = 'Jeder';
    $translations['es']['Enter keywords'] = 'Introduzca las palabras clave';
    $translations['de']['Enter keywords'] = 'Geben Sie Schlüsselwörter';

    if ( isset( $translations[ $lang ][ $string ] ) ) {
      return $translations[ $lang ][ $string ];
    }
  }

  return $string;
});
```

An alternative to using the 
```
facetwp_i18n
```

 hook would be to transform these UI strings to 
```
__()
```

 translatable strings, [with the facetwp_facet_render_args hook](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#convert-pager-facet-labels-to-translatable-strings).

### Translate facet labels

Besides [translating UI strings](#translate-ui-strings), the 
```
facetwp_i18n
```

 filter can also be used to translate facet **labels**. The facet label is the label you give it when creating it (not to be confused with the facet’s **name**, which is its technical name):

![The facet label vs. the facet name.](https://facetwp.com/wp-content/uploads/2023/06/the-facet-name-vs-label.png)The facet label vs. the facet name.
The facet label appears as facet heading in the [Mobile Flyout](/help-center/add-on-features-and-extras/mobile-flyout/#facet-headings-labels) and as label in the [User Selections facet](/help-center/facets/facet-types/user-selections/)).

Translating facet labels works the same as [translating UI strings](#translate-ui-strings). Here is an example for a facet with label “Size” in the default English language, which is translated to “Maat” when the page is viewed in the Dutch language. Note that the label needs to match exactly, including capitalization and spaces:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_i18n', function( $string ) {
    
  if ( isset( FWP()->facet->http_params['lang'] ) ) {
    $lang = FWP()->facet->http_params['lang'];

    $translations = [];
    $translations['nl']['Size'] = 'Maat';

    if ( isset( $translations[ $lang ][ $string ] ) ) {
      return $translations[ $lang ][ $string ];
    }
  }

  return $string;
});
```

Don’t confuse translating facet labels with translating facet **choices**:

### Translate facet choices

There are multiple ways to translate facet choices. The best way is to translate the content of the [data source field](/help-center/facets/#set-facet-options) that the facet uses. For example, if your facet uses a taxonomy as data source, you can translate the taxonomy terms [with WPML](https://wpml.org/documentation/getting-started-guide/translating-post-categories-and-custom-taxonomies/), or [with Polylang](https://polylang.pro/doc/multilingual-custom-post-types-and-taxonomies/).

If your facet uses a custom field as data source, just translate that custom field. For WPML see [this tutorial](https://wpml.org/documentation/getting-started-guide/translating-custom-fields/). Or, for facets [using a custom field created with Advanced Custom Fields](/help-center/using-facetwp-with/advanced-custom-fields/), use the [ACF Multilingual plugin](https://wpml.org/documentation/related-projects/translate-sites-built-with-acf/). For Polylang, see [this page](https://polylang.pro/doc/working-with-acf-pro/) for how to translate ACF fields.

Alternatively, you can translate facet choices manually. You can use [the facetwp_facet_display_value hook](/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/#customize-or-translate-facet-choices), or [the facetwp_facet_render_args hook](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#translate-facet-choices-and-facet-settings). With this last hook, you can [change specific or all facet choice labels into __() translatable strings](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#translate-facet-choices-and-facet-settings). These can then be translated [with a translation plugin or a gettext filter](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#how-to-translate-dynamically-added-strings).

### Use the facetwp_i18n hook without the Multilingual add-on

If you are not using WPML or Polylang (with the [FacetWP Multilingual add-on](/help-center/using-facetwp-with/multilingual/)), you can still use the 
```
facetwp_i18n
```

 hook. You only need a way to detect the current language of the page (or site if you are [using a multi-site setup](/help-center/using-facetwp-with/wordpress-multi-site/)).

The following code example gets the language from the current page/site with WP’s [get_locale() function](https://developer.wordpress.org/reference/functions/get_locale/):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_i18n', function( $string ) {

  // Get the current site's locale
  $lang = get_locale();

  $translations = [
    'fr_FR' => [
      'All categories' => 'Toutes les catégories',
    ],
  ];

  if ( isset( $translations[ $lang ][ $string ] ) ) {
    return $translations[ $lang ][ $string ];
  }

  return $string;
});
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_i18n)

    
## See also

    - [Facet types](https://facetwp.com/help-center/facets/facet-types/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Using FacetWP with WPML or Polylang](https://facetwp.com/help-center/using-facetwp-with/multilingual/)
- [The Mobile Flyout add-on](https://facetwp.com/help-center/add-on-features-and-extras/mobile-flyout/)
- [The User Selections facet type](https://facetwp.com/help-center/facets/facet-types/user-selections/)
- [The facetwp_facet_display_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/)
- [The facetwp_facet_render_args hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/)
- [Using FacetWP with WordPress multi-site](https://facetwp.com/help-center/using-facetwp-with/wordpress-multi-site/)

                    Last updated: March 26, 2026

---

## facetwp_scripts

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_scripts/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_scripts/)

## Overview

With this hook, introduced in [FacetWP v4.2.2](/help-center/changelog/#4-2-2), you can inject custom code snippets (JavaScript, CSS) into the page footer, **only on pages where FacetWP is active**.

This hook is an alternative to [using the wp_footer hook](/how-to-use-custom-code/#using-the-wp_footer-hook), which runs on **all** pages. Using the 
```
facetwp_scripts
```

 hook instead prevents JavaScript errors when injecting FacetWP-dependent custom code, like [code using FacetWP’s fUtil libary](#prevent-javascript-errors-when-using-futil-code).

## Usage examples

Add custom JavaScript to the footer, only on pages where FacetWP is active:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
  <script>
    // Your custom JavaScript code
  </script>
  <?php
}, 100 );
```

Add custom CSS to the footer, only on pages where FacetWP is active:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
  <style>
   /* Your custom CSS code */
  </style>
  <?php
}, 100 );
```

## Prevent JavaScript errors when using fUtil code

If you use the [wp_footer](https://developer.wordpress.org/reference/functions/wp_footer/) hook to inject custom code that contains JavaScript that is dependent on code that is loaded only on pages where FacetWP is active, like FacetWP’s [fUtil library](/help-center/developers/javascript-reference/using-futil/), you’ll get JavaScript errors on pages where FacetWP is not loaded. Using 
```
facetwp_scripts
```

 instead prevents these errors.

For example, say your site does not load jQuery, and you want to use the fUtil libary to add a class to the 
```
.facetwp-template
```

 element, like this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'wp_footer', function() {
  ?>
  <script>
    (function($) {
      $('.facetwp-template').addClass('my-class');
    })(fUtil);
  </script>
  <?php
}, 100 );
```

The above code will cause 
```
fUtil not defined
```

 errors in the Console on all pages without facets. Using the 
```
facetwp_scripts
```

 hook will prevent these errors:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
  <script>
    (function($) {
      $('.facetwp-template').addClass('my-class');
    })(fUtil);
  </script>
  <?php
}, 100 );
```

Note that if you have code using fUtil that you *want* to run on non-FacetWP pages, you’ll have to [load the fUtil library independently](/help-center/developers/javascript-reference/using-futil/#use-futil-on-non-facetwp-pages) on those pages.

    
## See also

    - [Using fUtil](https://facetwp.com/help-center/developers/javascript-reference/using-futil/)
- [How to use custom code?](https://facetwp.com/how-to-use-custom-code/)
- [The facetwp_assets hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_assets/)
- [JavaScript reference](https://facetwp.com/help-center/developers/javascript-reference/)

                    Last updated: December 14, 2023

---

## facetwp_templates

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_templates/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_templates/)

## Overview

With this hook, you can programmatically register/add new [Listing Builder](/help-center/listing-templates/listing-builder/) listing templates, instead of using the plugin interface.

Note:There is a similar hook, [facetwp_facets](/help-center/developers/hooks/advanced-hooks/facetwp_facets/), to programmatically register [facets](/help-center/facets/).

### Why register listings programmatically?

Here are several reasons why you may want to register your listings in code:

- To prevent users from changing listing settings. Listings that are added this way will appear as “[locked listings](#locked-listings)” in the plugin settings. While this does not absolutely prevent users from changing the listing settings, it will take a deliberate “unlock” action to do so (and this “unlock” action [can be disabled too](#prevent-unlocking-of-listings)).
- You can have your listings and their settings under version control (e.g. with [git](https://git-scm.com)). This way you can revert to previous sets of listings or previous listing settings.
- If your listings and settings are tied to a theme, anyone using the code/theme automatically has the registered listings and their settings.
- If you are [using FacetWP with WordPress multi-site](/help-center/using-facetwp-with/wordpress-multi-site/), all sites in the multi-site network can have the same listings and listing settings, as long as they are using the same theme. You no longer have to change listing settings in each site separately, and you can maintain them in one place: the theme’s functions.php file.

## Parameters

- **$templates** | array | An array of existing listings

## How to register a listing programmatically

To register one or more listing templates in code, you need to pass an array of the listings(s) settings to the hook, either [in JSON](#using-exported-json-directly), or [in PHP](#using-a-converted-php-array), as shown below.

But how to get all available settings for a particular listing? The quickest way to get a complete and up-to-date array of all available settings for a specific listing is to first create the listing in the interface, set all its options, and then export the listing.

To do so, go to **Settings > FacetWP > Settings > Import/Export**, select one or more listings and click the “Export” button:

![How to export a listing's settings.](https://facetwp.com/wp-content/uploads/2023/03/facetwp-templates-export-listing.png)How to export a listing’s settings.
Copy the exported JSON code that appears in the text box. Make sure to keep the JSON safe, because the next step is to **delete the listing(s) you just exported** (use the gear icon, then click “Save changes”), otherwise the code-registered listing(s) will not appear.

Now you have two options to register the listing(s):

1. [Use the exported JSON directly](#using-exported-json-directly)
2. [Convert the exported JSON to a PHP array first](#using-a-converted-php-array)

### Using exported JSON directly

To use the exported JSON of one or more listings directly, you can add the following code to your (child) theme’s functions.php. Paste the exported JSON between [the single quotes on line 5](#facetwp-templates-example-json-directly-L5).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_templates', function( $templates ) {

  // Paste the exported JSON between the single quotes like this: json_decode('PASTE JSON HERE');
  $add_templates = json_decode(
    '{"templates":[{"name":"products_listing","label":"Products listing","query":"","template":"","layout":{"items":[{"type":"row","items":[{"type":"col","items":[{"type":"item","source":"post_title","settings":{"link":{"type":"none","href":"","target":""},"prefix":"","suffix":"","border":{"style":"none","color":"","width":{"unit":"px","top":0,"right":0,"bottom":0,"left":0}},"background_color":"","padding":{"unit":"px","top":0,"right":0,"bottom":0,"left":0},"text_color":"","text_style":{"align":"","bold":false,"italic":false},"font_size":{"unit":"px","size":0},"name":"el-zi717e","css_class":"","is_hidden":""}}],"settings":{"border":{"style":"none","color":"","width":{"unit":"px","top":0,"right":0,"bottom":0,"left":0}},"background_color":"","padding":{"unit":"px","top":0,"right":0,"bottom":0,"left":0},"text_color":"","text_style":{"align":"","bold":false,"italic":false},"font_size":{"unit":"px","size":0},"name":"el-25bd2a","css_class":""}}],"settings":{"grid_template_columns":"1fr","border":{"style":"none","color":"","width":{"unit":"px","top":0,"right":0,"bottom":0,"left":0}},"background_color":"","padding":{"unit":"px","top":0,"right":0,"bottom":0,"left":0},"text_color":"","text_style":{"align":"","bold":false,"italic":false},"font_size":{"unit":"px","size":0},"name":"el-49y6ye","css_class":""}}],"settings":{"num_columns":1,"grid_gap":10,"no_results_text":"","border":{"style":"none","color":"","width":{"unit":"px","top":0,"right":0,"bottom":0,"left":0}},"background_color":"","padding":{"unit":"px","top":0,"right":0,"bottom":0,"left":0},"text_color":"","text_style":{"align":"","bold":false,"italic":false},"font_size":{"unit":"px","size":0},"name":"el-xi1t6","css_class":"","custom_css":""}},"query_obj":{"post_type":[{"label":"Products","value":"product"}],"posts_per_page":10,"orderby":[{"key":"title","order":"ASC","type":"CHAR"}],"filters":[]},"modes":{"display":"visual","query":"visual"}}]}',
    true
  );

  foreach ( $add_templates['templates'] AS $new_template ) {
    $templates[] = $new_template;
  }

  return $templates;
});
```

After refreshing the page, your new code-registered listing(s) should appear in the list, at the bottom, with [a “locked” icon](#locked-listings). If you don’t see the locked listings(s), make sure you have **deleted the listing(s) you exported** (use the gear icon, then click “Save changes”), otherwise the code-registered listing(s) will not appear.

### Using a converted PHP array

![How to quickly convert a listing's exported JSON to a PHP array online.](https://facetwp.com/wp-content/uploads/2023/03/facetwp-templates-convert-json-to-php-online.png)How to quickly convert a listing’s exported JSON to a PHP array online.
If you prefer seeing the listing settings array, or you want to make manual changes more easily, you can convert the exported JSON to a PHP array first.

A quick way to do this is to paste it into an online JSON to PHP array converter like [https://jsontophp.com](https://jsontophp.com).

Copy the converted PHP array’s key/value pairs with all the listings’s settings and paste them into the hook code, as shown in the examples below.

Warning:If you are using [Dev mode](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/) in your Listing Builder listing template, make sure to **only use single quotes** in your PHP code in the “Display” tab and in your query arguments in the “Query” tab. Any double quotes in these two fields will cause (fatal) errors as soon as you add the hook with the settings array to your functions.php.

#### Register one new listing

For example, to register a new listing named 
```
products_listing
```

, add the following code to your (child) theme’s functions.php:

Note:Because the array of settings for a template is very long, it is shortened in the following examples, making this example code incomplete and unfunctional. Follow the [above instructions](#how-to-register-a-listing-programmatically) to get a working example.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_templates', function( $templates ) {

  // add a new 'products_listing' listing to the existing $templates array
  $templates[] = [
    "name" => "products_listing",
    "label" => "products listing",
    "query" => "",
    "template" => "",
    "layout" => [
      "items" => [
        // ...etc.
      ],
      "settings" => [
        // ...etc.
      ]
    ],
    "query_obj" => [
      "post_type" => [
        [
          "label" => "Products",
          "value" => "product"
        ]
      ],
      "posts_per_page" => 10,
      "orderby" => [
        [
          "key" => "title",
          "order" => "ASC",
          "type" => "CHAR"
        ]
      ],
      "filters" => [
      ]
    ],
    "modes" => [
      "display" => "visual",
      "query" => "visual"
    ]
  ] ;

  // return the modified $templates array
  return $templates;
}, 10, 1 );
```

After refreshing the page, your new code-registered listing should appear in the list, at the bottom, with [a “locked” icon](#locked-listings). If you don’t see the locked listing, make sure you have **deleted the listing you exported** (use the gear icon, then click “Save changes”), otherwise the code-registered listing will not appear.

#### Register multiple new listings

To register multiple listings at once, just add another listing to the 
```
$templates
```

 array. The following example adds two new listings: one named 
```
products_listing
```

 and another named 
```
blog_listing
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_templates', function( $templates ) {

  // add a new 'products_listing' listing to the existing $templates array
  $templates[] = [

    // settings for this listing
    "name" => "products_listing",
    "label" => "products listing",
    "query" => "",
    "template" => "",
    "layout" => [
      "items" => [
        // ...etc.
      ],
      "settings" => [
        // ...etc.
      ]
    ],
    // ... etc.
  ] ;

  // add a new 'blog_listing' listing to the existing $templates array
  $templates[] = [

    // settings for this listing
    "name" => "blog_listing",
    "label" => "blog listing",
    "query" => "",
    "template" => "",
    "layout" => [
      "items" => [
        // ...
      ],
      "settings" => [
        //... etc.
      ]
    ],
    // ... etc.
  ] ;

  // return the modified $templates array
  return $templates;
}, 10, 1 );
```

After refreshing the page, your new code-registered listings should appear in the list, at the bottom, with [a “locked” icon](#locked-listings). If you don’t see the locked listings, make sure you have **deleted the listings you exported** (use the gear icon, then click “Save changes”), otherwise the code-registered listings will not appear.

### Locked listings

After [registering a listing with this hook](#how-to-register-a-listing-programmatically), it will appear in FacetWP’s Listings overview with a “locked” icon:

![When a listing is registered with the facetwp_templates hook, the listing label will have a 'locked' icon.](https://facetwp.com/wp-content/uploads/2023/03/facetwp-facets-locked-template.png)When a listing is registered with the facetwp_templates hook, the listing label will have a ‘locked’ icon.
If the new listing does not appear, make sure its name is unique and not already used for another listing. Make sure you have **deleted the listing(s) you exported** (use the gear icon, then click “Save changes”), otherwise the code-registered listing(s) will not appear.

The settings screen of a locked listing will have a red “This template is registered in code. Click to allow edits” warning on top, and the settings will be dimmed and become unclickable:

![When a listing is registered with the facetwp_templates hook, the listing's settings will be locked.](https://facetwp.com/wp-content/uploads/2023/03/facetwp-facets-locked-template-settings.png)When a listing is registered with the facetwp_templates hook, the listing’s settings will be locked.
When you click the lock icon behind “Click to allow edits”, and then change the settings (or leave the settings as they are) and click “Save changes”, the listing will no longer be registered by your code, but again in the database like a normal listing. After that, changes to the listing settings in the hook will no longer have an effect unless you change the listing’s name in the code, which will then create a new code-registered listing with that name.

If you want to prevent other users from unlocking listings this way, you’ll have to register them in a slightly different way:

### Prevent unlocking of listings

If you are registering your listings in code, and want to prevent admin users from unlocking listings (accidentally or on purpose), you can register your listing(s) as follows. The extra code makes sure that unlocked code-registered listings are deleted and added again as a locked listing, basically preventing them from being changed or removed.

Don’t forget to add [the extra CSS that removes the “Click to allow edits” link](#prevent-unlocking-css).

To register listings directly [with JSON](#using-exported-json-directly), use the following:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_templates', function( $templates ) {

  $add_templates = json_decode(
    '{"templates":[{"name":"products_listing","label":"Products listing","query":"","template":"","layout":{"items":[{"type":"row","items":[{"type":"col","items":[{"type":"item","source":"post_title","settings":{"link":{"type":"none","href":"","target":""},"prefix":"","suffix":"","border":{"style":"none","color":"","width":{"unit":"px","top":0,"right":0,"bottom":0,"left":0}},"background_color":"","padding":{"unit":"px","top":0,"right":0,"bottom":0,"left":0},"text_color":"","text_style":{"align":"","bold":false,"italic":false},"font_size":{"unit":"px","size":0},"name":"el-zi717e","css_class":"","is_hidden":""}}],"settings":{"border":{"style":"none","color":"","width":{"unit":"px","top":0,"right":0,"bottom":0,"left":0}},"background_color":"","padding":{"unit":"px","top":0,"right":0,"bottom":0,"left":0},"text_color":"","text_style":{"align":"","bold":false,"italic":false},"font_size":{"unit":"px","size":0},"name":"el-25bd2a","css_class":""}}],"settings":{"grid_template_columns":"1fr","border":{"style":"none","color":"","width":{"unit":"px","top":0,"right":0,"bottom":0,"left":0}},"background_color":"","padding":{"unit":"px","top":0,"right":0,"bottom":0,"left":0},"text_color":"","text_style":{"align":"","bold":false,"italic":false},"font_size":{"unit":"px","size":0},"name":"el-49y6ye","css_class":""}}],"settings":{"num_columns":1,"grid_gap":10,"no_results_text":"","border":{"style":"none","color":"","width":{"unit":"px","top":0,"right":0,"bottom":0,"left":0}},"background_color":"","padding":{"unit":"px","top":0,"right":0,"bottom":0,"left":0},"text_color":"","text_style":{"align":"","bold":false,"italic":false},"font_size":{"unit":"px","size":0},"name":"el-xi1t6","css_class":"","custom_css":""}},"query_obj":{"post_type":[{"label":"Products","value":"product"}],"posts_per_page":10,"orderby":[{"key":"title","order":"ASC","type":"CHAR"}],"filters":[]},"modes":{"display":"visual","query":"visual"}}]}',
    true
  );

  $adding = wp_list_pluck( $add_templates['templates'], 'name' );
  foreach ( $templates AS $template => $values ) {
    if ( in_array( $values['name'], $adding ) && !isset( $values['_code'] ) ) {
      unset( $templates[$template] ); // Unset unlocked code-based listings
    }
  }
  foreach (  $add_templates['templates'] AS $new_template ) {
    $templates[] = array_merge( $new_template, [ '_code' => true ] ); // Re-lock listings if previously unlocked
  }

  return $templates ;
});
```

Or, to register listings [with a PHP array](#using-a-converted-php-array):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_templates', function( $templates ) {

  $add_templates = [
    'templates' => [
      [
        // settings for this listing
        "name" => "products_listing",
        "label" => "products listing",
        "query" => "",
        "template" => "",
        "layout" => [
          "items" => [
            // ...etc.
          ],
          "settings" => [
            // ...etc.
          ]
        ],
        "query_obj" => [
          "post_type" => [
            [
              "label" => "Products",
              "value" => "product"
            ]
          ],
          "posts_per_page" => 11,
          "orderby" => [
            [
              "key" => "title",
              "order" => "ASC",
              "type" => "CHAR"
            ]
          ],
          "filters" => [
          ]
        ],
        "modes" => [
          "display" => "visual",
          "query" => "visual"
        ]
      ],
      [
        // settings for this listing
        "name" => "blog_listing",
        "label" => "blog listing",
        "query" => "",
        "template" => "",
        "layout" => [
          "items" => [
            // ...
          ],
          "settings" => [
            //... etc.
          ]
        ],
        // ... etc.

      ]
    ]
  ];

  $adding = wp_list_pluck( $add_templates['templates'], 'name' );
  foreach ( $templates AS $template => $values ) {
    if ( in_array( $values['name'], $adding ) && !isset( $values['_code'] ) ) {
      unset( $templates[$template] ); // Unset unlocked code-based listings
    }
  }
  foreach (  $add_templates['templates'] AS $new_template ) {
    $templates[] = array_merge( $new_template, [ '_code' => true ] ); // Re-lock listings if previously unlocked
  }

  return $templates ;
});
```

Next, add the following CSS, which makes sure there is no way to edit the locked settings. The “Click to allow edits” link will be removed, and a “This listing is registered in code. It cannot be edited.” will show:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action('admin_head', function() {
  echo '<style>
    #app .facetwp-region .item-locked { 
      display: none;
    }  
    #app .facetwp-region-templates .locked:before {
      content: "This listing is registered in code. It cannot be edited.";
      display: block;
      padding: 10px;
      margin-bottom: 20px;
      background-color: var(--red);
      border-radius: 3px;
      color: var(--white);
      position: relative;
      z-index: 100000;
    }
</style>';
});
```

With this CSS the red “locked” banner will look like this:

![Prevent users from unlocking a code-registered listing.](https://facetwp.com/wp-content/uploads/2024/07/facetwp_templates_prevent_unlocking.png)Prevent users from unlocking a code-registered listing.
    
## See also

    - [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [The facetwp_facets hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facets/)
- [What are facets?](https://facetwp.com/help-center/facets/)
- [Using FacetWP with WordPress multi-site](https://facetwp.com/help-center/using-facetwp-with/wordpress-multi-site/)
- [Using the Listing Builder in Dev Mode](https://facetwp.com/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/)
- [Back up or move facets and listing templates](https://facetwp.com/help-center/add-on-features-and-extras/back-up-or-move-facets-and-listing-templates/)

                    Last updated: July 26, 2024

---

## facetwp_use_preloader

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_use_preloader/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_use_preloader/)

FacetWP “preloads” its data on first page load, and stores it in 
```
FWP_JSON.preload_data
```

 on the page. This data is then used to render the facets almost instantly, without fetching the data with an AJAX call (which happens when using facets).

In some exotic template setups and customized loading sequences, it can be helpful to be able to disable the preloading behavior and instead force an AJAX refresh on first page load. This can be done by adding the following hook to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Force an AJAX refresh on first page load
add_filter( 'facetwp_use_preloader', '__return_false' );
```

Be aware that this will cause your facets to load slightly slower the first time because FacetWP has to fetch the data first, instead of using it immediately.

    
## See also

    - [The facetwp_preload_url_vars hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_preload_url_vars/)
- [How to pre-select facet choices](https://facetwp.com/how-to-pre-select-facet-choices/)
- [JavaScript reference](https://facetwp.com/help-center/developers/javascript-reference/)
- [FacetWP JavaScript objects and functions](https://facetwp.com/help-center/developers/javascript-reference/js-objects-and-functions/)
- [The facetwp-refresh event](https://facetwp.com/help-center/developers/javascript-reference/facetwp-refresh/)
- [The facetwp-loaded event](https://facetwp.com/help-center/developers/javascript-reference/facetwp-loaded/)
- [Using FacetWP with Weglot](https://facetwp.com/help-center/using-facetwp-with/weglot/)

                    Last updated: May 11, 2026

---

## upt_admin_settings_capability

**Source:** [https://facetwp.com/help-center/developers/hooks/advanced-hooks/upt_admin_settings_capability/](https://facetwp.com/help-center/developers/hooks/advanced-hooks/upt_admin_settings_capability/)

## Overview

With this hook, you can determine which WordPress user role has access to the [User Post Type add-on](/help-center/add-on-features-and-extras/user-post-type/) settings.

The hook lets you specify a user [capability](https://wordpress.org/documentation/article/roles-and-capabilities/), which in turn determines the role. The default capability is set to 
```
manage_options
```

, which is an [Administrator capability](https://wordpress.org/documentation/article/roles-and-capabilities/#administrator).

Note:This hook is **only** applied to the [User Post Type add-on](/help-center/add-on-features-and-extras/user-post-type/). If you need to customize access to the main FacetWP plugin settings and other add-ons with settings pages ([Caching](/help-center/add-on-features-and-extras/caching/) and [Conditional Logic](/help-center/add-on-features-and-extras/conditional-logic/)), you can use the [facetwp_admin_settings_capability](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_admin_settings_capability/) hook.

## Parameters

- **$capability** | string | The [capability](https://wordpress.org/documentation/article/roles-and-capabilities/) that has access to the User Post Type settings. Default: 
```
manage_options
```

.

## Usage

This example shows how to give the [Editor role](https://wordpress.org/documentation/article/roles-and-capabilities/#editor) access to User Post Type settings, by setting the 
```
$capability
```

 to 
```
edit_pages
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'upt_admin_settings_capability', function( $capability ) {
  return 'edit_pages'; // Give Editors access to the User Post Type settings pages. Default: 'manage_options'.
}, 10, 1 );
```

    
## See also

    - [The User Post Type add-on](https://facetwp.com/help-center/add-on-features-and-extras/user-post-type/)
- [The facetwp_admin_settings_capability hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_admin_settings_capability/)
- [The Caching add-on](https://facetwp.com/help-center/add-on-features-and-extras/caching/)
- [The Conditional Logic add-on](https://facetwp.com/help-center/add-on-features-and-extras/conditional-logic/)

                    Last updated: December 17, 2024

---

## Deprecated Hooks

**Source:** [https://facetwp.com/help-center/developers/hooks/deprecated-hooks/](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/)

These hooks are for the old, now [deprecated shortcodes for sorting and paging](/help-center/developers/shortcodes-reference/#deprecated-shortcodes). These shortcodes have been replaced by the [Pager](/help-center/facets/facet-types/pager/) and [Sort](/help-center/facets/facet-types/sort/) facet types.

These old shortcodes and the deprecated hooks below still work, and will keep working for the foreseeable future, but we strongly recommend you use the new facet types they are replaced with, and the available hooks for them.

	[facetwp_sort_options](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_sort_options/)
					[facetwp_sort_html](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_sort_html/)
					[facetwp_pager_html](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_pager_html/)
					[facetwp_per_page_options](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_per_page_options/)
					[facetwp_result_count](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_result_count/)

                    Last updated: January 31, 2022

---

## facetwp_pager_html

**Source:** [https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_pager_html/](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_pager_html/)

Deprecated:This hook is for the [old pager shortcode](/help-center/developers/shortcodes-reference/#display-a-pager). FacetWP now has a [Pager facet type](/help-center/facets/facet-types/pager/). The links in the Pager facet can be changed with the [facetwp_facet_pager_link](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_pager_link/) hook.

## Overview

This filter lets you modify how the [old pager](/help-center/developers/shortcodes-reference/#display-a-pager/) appears.

## Parameters

- **$output** | string | The pager HTML
- **$params** | array | An associative array of pagination settings (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'page' => 1,
  'per_page' => 10,
  'total_rows' => 205,
  'total_pages' => 21
];
```

## Usage

This example will output all page numbers:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_pager_html', function( $output, $params ) {
  $output = '';

  if ( 1 < $params['total_pages'] ) {
    for ( $i = 1; $i <= $params['total_pages']; $i++ ) {
      $is_curr = ( $i === $params['page'] ) ? ' active' : '';
      $output .= '<a class="facetwp-page' . $is_curr . '" data-page="' . $i . '">' . $i . '</a>';
    }
  }

  return $output;
}, 10, 2 );
```

This example will output “Prev” and “Next” links:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_pager_html', function( $output, $params ) {
  $output = '';
  $page = $params['page'];
  $total_pages = $params['total_pages'];

  if ( $page > 1 ) {
    $output .= '<a class="facetwp-page" data-page="' . ($page - 1) . '">Previous</a>';
  }

  if ( $page < $total_pages && $total_pages > 1 ) {
    $output .= '<a class="facetwp-page" data-page="' . ($page + 1) . '">Next</a>';
  }

  return $output;
}, 10, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_pager_html)

    
## See also

    - [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The facetwp_facet_pager_link hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_pager_link/)
- [The facetwp_pager_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pager_args/)
- [Shortcodes reference](https://facetwp.com/help-center/developers/shortcodes-reference/)

                    Last updated: June 14, 2024

---

## facetwp_per_page_options

**Source:** [https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_per_page_options/](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_per_page_options/)

Deprecated:This hook is for the [old per page shortcode](/help-center/developers/shortcodes-reference/#display-a-per-page-box). FacetWP now has a [Pager facet type](/help-center/facets/facet-types/pager/), which includes a “per page” mode.

## Overview

This filter lets you customize the choices for the [old per page box](/help-center/developers/shortcodes-reference/#display-a-per-page-box).

## Parameters

- **$options** | array | An associative array of integers

## Usage

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_per_page_options', function( $options ) {
  return [ 5, 10, 25, 50, 100, 250 ];
});
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_per_page_options)

    
## See also

    - [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [Shortcodes reference](https://facetwp.com/help-center/developers/shortcodes-reference/)

                    Last updated: May 2, 2023

---

## facetwp_result_count

**Source:** [https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_result_count/](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_result_count/)

Deprecated:This hook is for the [old result counts shortcode](/help-center/developers/shortcodes-reference/#display-result-counts). FacetWP now has a [Pager facet type](/help-center/facets/facet-types/pager/), which includes a “result counts” mode.

## Overview

This filter lets you modify how the [old result counts](/help-center/developers/shortcodes-reference/#display-result-counts) appears (e.g. “1-10 of 234”).

## Parameters

- **$output** | string | The result count HTML
- **$params** | array | An associative array of result count settings (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'lower' => 1,
  'upper' => 10,
  'total' => 234
];
```

## Usage

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_result_count', function( $output, $params ) {
  $output = $params['lower'] . '-' . $params['upper'] . ' of ' . $params['total'] . ' results';
  return $output;
}, 10, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_result_count)

    
## See also

    - [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [Shortcodes reference](https://facetwp.com/help-center/developers/shortcodes-reference/)

                    Last updated: May 2, 2023

---

## facetwp_sort_html

**Source:** [https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_sort_html/](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_sort_html/)

Deprecated:This hook is for the [old sort shortcode](/help-center/developers/shortcodes-reference/#display-a-sort-box). FacetWP now has a [Sort facet type](/help-center/facets/facet-types/sort/). FacetWP now has a [Sort facet type](/help-center/facets/facet-types/sort/). The Sort facet’s settings and logic can be customized with the [facetwp_facet_sort_options hook](/help-center/developers/hooks/output-hooks/facetwp_facet_sort_options/).

## Overview

This hook lets you customize the [old sort box’s](/help-center/developers/shortcodes-reference/#display-a-sort-box) dropdown appearance.

Note:To change the sorting **logic and options**, use the [facetwp_sort_options](/help-center/developers/hooks/deprecated-hooks/facetwp_sort_options/) filter.

## Parameters

- **$html** | string | The sort box output
- **$params** | array | Associative array of extra variables (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'template_name' => 'default',
  'sort_options' => [
    // See $options within the facetwp_sort_options hook
  ]
];
```

## Usage

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_sort_html', function( $html, $params ) {
  $html = '<select class="facetwp-sort-select">';
  foreach ( $params['sort_options'] as $key => $atts ) {
    $html .= '<option value="' . $key . '">' . $atts['label'] . '</option>';
  }
  $html .= '</select>';
  return $html;
}, 10, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_sort_html)

    
## See also

    - [The facetwp_sort_options hook](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_sort_options/)
- [The facetwp_facet_sort_options hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_sort_options/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [Shortcodes reference](https://facetwp.com/help-center/developers/shortcodes-reference/)

                    Last updated: May 2, 2023

---

## facetwp_sort_options

**Source:** [https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_sort_options/](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_sort_options/)

Deprecated:This hook is for the [old sort shortcode](/help-center/developers/shortcodes-reference/#display-a-sort-box). FacetWP now has a [Sort facet type](/help-center/facets/facet-types/sort/). The Sort facet’s settings and logic can be customized with the [facetwp_facet_sort_options hook](/help-center/developers/hooks/output-hooks/facetwp_facet_sort_options/).

## Overview

![FacetWP Sort facet dropdown example](https://facetwp.com/wp-content/uploads/2022/09/sort-facet-dropdown.png)This hook lets you customize the [old sort box’s](/help-center/developers/shortcodes-reference/#display-a-sort-box) dropdown *options* and sort *logic*.

## Parameters

- **$options** | array | Options array (see below)
- **$params** | array | Associative array of extra input variables (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$options = [
  'default' => [
    'label' => __( 'Sort by', 'fwp' ),
    'query_args' => []
  ],
  'title_asc' => [
    'label' => __( 'Title (A-Z)', 'fwp' ),
    'query_args' => [
      'orderby' => 'title',
      'order' => 'ASC',
    ]
  ],
  'title_desc' => [
    'label' => __( 'Title (Z-A)', 'fwp' ),
    'query_args' => [
      'orderby' => 'title',
      'order' => 'DESC',
    ]
  ],
  'date_desc' => [
    'label' => __( 'Date (Newest)', 'fwp' ),
    'query_args' => [
      'orderby' => 'date',
      'order' => 'DESC',
    ]
  ],
  'date_asc' => [
    'label' => __( 'Date (Oldest)', 'fwp' ),
    'query_args' => [
      'orderby' => 'date',
      'order' => 'ASC',
    ]
  ]
];
```

The **$params** array provides the template name, if needed.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'template_name' => 'default', 
];
```

## Changing the default “Sort by”

In the above code, notice that the default sort’s 
```
query_args
```

 is empty.

The “Sort by” option is only a placeholder. When the “Sort by” option is active, it falls back to the query’s default sort. To change the default sort, you’ll need to change the query itself.

## Usage

**Example 1**: Change the sort label

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_sort_options', function( $options, $params ) {
  $options['default']['label'] = 'My sort label';
  return $options;
}, 10, 2 );
```

**Example 2**: Remove the “Date (Oldest)” sort option

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_sort_options', function( $options, $params ) {
  unset( $options['date_asc'] );
  return $options;
}, 10, 2 );
```

**Example 3**: Remove the “Date (Oldest)” sort option only if the template is named 
```
cars
```

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_sort_options', function( $options, $params ) {
  if ( 'cars' == $params['template_name'] ) {
    unset( $options['date_asc'] );
  }
  return $options;
}, 10, 2 );
```

**Example 4**: Add a “Price (Highest)” sort option.

Note: Use 
```
_price
```

 for WooCommerce, or 
```
edd_price
```

 for Easy Digital Downloads

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_sort_options', function( $options, $params ) {
  $options['price_desc'] = [
    'label' => 'Price (Highest)',
    'query_args' => [
      'orderby' => 'meta_value_num',
      'meta_key' => '_price',
      'order' => 'DESC',
    ]
  ];
  return $options;
}, 10, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_sort_options)

    
## See also

    - [The facetwp_facet_sort_options hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_sort_options/)
- [The facetwp_sort_html hook](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_sort_html/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [Shortcodes reference](https://facetwp.com/help-center/developers/shortcodes-reference/)

                    Last updated: May 2, 2023

---

## Indexing hooks

**Source:** [https://facetwp.com/help-center/developers/hooks/indexing-hooks/](https://facetwp.com/help-center/developers/hooks/indexing-hooks/)

These hooks let you modify how FacetWP interacts with the 
```
facetwp_index
```

 table during the [indexing process](/help-center/indexing/).

	[facetwp_index_row](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
					[facetwp_indexer_row_data](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_row_data/)
					[facetwp_indexer_query_args](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/)
					[facetwp_indexer_is_enabled](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled/)

                    Last updated: May 30, 2022

---

## facetwp_index_row

**Source:** [https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)

## Overview

Modify individual facet values before they are saved into FacetWP’s [index table](#how-it-works).

Note:**Don’t** try to add HTML to facet choices with this hook. This hook is only meant to customize [the bare indexed values](#how-it-works) of the facets’ data source fields. To customize the facet display value output (e.g. add HTML), [use the facetwp_facet_display_value hook](/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/).

## Parameters

- **$params** | array | An associative array of data to be indexed (see below)
- **$class** | object | The indexer class

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'post_id' => 123,
  'facet_name' => 'my_facet',
  'facet_source' => 'tax/category',
  'facet_value' => '45',
  'facet_display_value' => 'My Test Category',
  'term_id' => 0,
  'parent_id' => 0,
  'depth' => 0,
  'variation_id' => 0
];
```

Except for 
```
$params['facet_source']
```

, the 
```
$params
```

 array keys/values correspond to columns in the 
```
facetwp_index
```

 table:

## How it works

The 
```
facetwp_index_row
```

 hook is one of the most powerful and most used hooks in FacetWP, because it can manipulate the values and labels for each facet at the moment they are stored in the index table.

To get how this works exactly, it is important to understand how FacetWP’s 
```
facetwp_index
```

 database table is structured. Below is an example of a small part of this indexing table:

![An example of a part of FacetWP's indexing table.](https://facetwp.com/wp-content/uploads/2024/02/facetwp-index-table-example.png)An example of a part of FacetWP’s indexing table.
As you can see, the post with ID 
```
4070
```

 has four rows indexed for a facet named 
```
categories
```

. These four rows correspond to four choices in the 
```
categories
```

 facet, each of which will make this post appear in the results when this choice is clicked.

Each of the rows in the 
```
facetwp_index
```

 table has a value in the following nine columns:

| Column | Explanation |
| --- | --- |
| id | The table row ID. |
| post_id | The post ID. |
| facet_name | The facet name. |
| facet_value | The raw, technical facet value, as shown in the URL when this facet choice is selected. This is the term slug if the facet’s data source is a taxonomy. |
| facet_display_value | The label of the facet choice, as shown in the facet itself in the front-end. This is the term name if the facet’s data source is a taxonomy. |
| term_id | The term ID. Only used if the facet’s data source is a taxonomy, 0 otherwise. |
| parent_id | The term parent ID. Only used if the facet’s data source is a hierarchical taxonomy, 0 otherwise. |
| depth | The term depth. Only used if the facet’s data source is a hierarchical taxonomy, 0 otherwise. |
| variation_id | The product variation ID. Only used if the indexed post is a WooCommerce product and indexing of product variations is enabled, 0 otherwise. |

It is important to keep in mind that the 
```
facetwp_index_row
```

 hook runs once on the insertion of **each** of these table rows. So it runs for each post ID, for each facet, and then for each value that this post has stored for that facet’s data source (generally a custom field or one or more terms in a taxonomy).

While it is running, you have access to all of the above values for the current row, via the [$params variable](#index-row-params). You can use these values to manipulate the 
```
facet_value
```

 and 
```
facet_display_value
```

 (or the other values) for the row, and pass them back to 
```
$params
```

 just before the data is inserted into the row.

Good to know is that **if you set the** 
```
$params['facet_value']
```

 **variable to an empty string, the insertion of the whole row will be skipped**. This can be useful if you want to prevent certain facet values from being indexed. For example, if you want to [index only specific levels in a term hierarchy](#index-only-specific-term-levels).

Another important thing to remember is that when a facet has a taxonomy set as its data source, the term **slug** is stored in 
```
facet_value
```

 and the term **name** in 
```
facet_display_value
```

.

Important:The 
```
facetwp_index_row
```

 hook itself will **only** run if the facet’s [data source](/help-center/facets/facet-types/checkboxes/#data-source) **is returning a non-empty value** for the post being indexed. This is an important distinction in the scenario that you are using this hook to *completely override* the indexed values for 
```
facet_value
```

 and 
```
facet_display_value
```

 for a certain facet, while completely ignoring the original values returned by the facet’s data source. To make sure the hook runs for each post, you need to set the facet’s “Data source” setting to something that will be **certain to always return a value**. A safe choice would be to set it to “**Post Type**”, because each post will always have a post type value, no matter what. A good example of this scenario would be if you are [indexing values from a custom field in a related post type](#index-values-in-a-related-custom-field).

### Applications

The [access to the indexing process and its variables](#how-it-works) makes this hook very versatile. Some things you can do with it:

- [Overwrite/change values for a facet choice](#create-a-month-year-facet).
- [Remove one or more facet choices](#remove-facet-choices) (by setting the 
```
$params['facet_value']
```

 value to an empty string).
- [Prevent one or more posts from showing up when using a facet](#exclude-one-or-more-posts-from-a-facet).
- [Show only specific term levels in a taxonomy-based facet](#index-only-specific-term-levels).
- [Split a facet choice into multiple choices](#split-or-add-facet-choices).
- [Insert new facet choices](#split-or-add-facet-choices) (with the 
```
insert()
```

 function).
- Combine multiple facet choices into one choice. See [this tutorial about combining facet choices](/how-to-combine-facet-choices/), and below examples for how to combine indexed dates into a [month/year facet](#create-a-month-year-facet) or a [past/future facet](#create-a-past-future-facet).
- [Combine multiple facet sources](/how-to-combine-facet-sources/) (by indexing one facet into another).
- [Index custom fields with serialized data](#index-a-serialized-array)

You can find a lot more examples in [our code snippet library](https://gist.facetwp.com/?_keywords=facetwp_index_row).

Important:**Do not** try to add HTML to facet choices with this hook. This hook is only meant to customize [the bare indexed values](#how-it-works) of the facets’ data source fields. To customize the facet values’ output (e.g. add HTML), [use the facetwp_facet_display_value hook](/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/).

## Usage examples

Important:The following code examples have to be added to your (child) term’s functions.php. After adding them, remember to click the [Re-index button](/help-center/indexing/#how-to-run-the-indexer). If you make changes to the code, you also need to re-index again.

### Index only specific term levels

![Hierachical taxonomy depth levels.](https://facetwp.com/wp-content/uploads/2025/01/hierarchical_taxonomy_depths.png)Hierachical taxonomy depth levels.
In facets that use a taxonomy as data source, the 
```
facetwp_index_row
```

 hook can be used to display only certain levels of the term hierarchy.

Because the hook has access to the depth level of each term as it is being indexed (with 
```
$params['depth']
```

), you can define which depth levels of the hierarchy are included or excluded.

The first example below will index only the top-level terms (with depth == 
```
0
```

). To accomplish that, terms with depth levels 
```
> 0
```

, which are all child levels, are excluded from being indexed, by setting 
```
$params['facet_value']
```

 to an empty string. Using the example taxonomy on the right, only “North America” and its sibling terms will be shown in the facet:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) { // Replace 'my_facet_name' with the name of your facet.
    if ( $params['depth'] > 0 ) {
      $params['facet_value'] = ''; // Don't index this row.
    }
  }
  return $params;
}, 10, 2 );
```

To index only the top-level terms (depth == 
```
0
```

) *and* their **direct** children (depth == 
```
1
```

):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) { // Replace 'my_facet_name' with the name of your facet
    if ( $params['depth'] > 1 ) {
      $params['facet_value'] = ''; // Don't index this row.
    }
  }
  return $params;
}, 10, 2 );
```

The above examples exclude (lower) child levels from being indexed. It is also possible to exclude (higher) parent levels and keep child levels, by setting 
```
$params['depth'] > x
```

 to be indexed only. Or to keep only a child level, but not their parents or children, by setting 
```
$params['depth'] === x
```

 to be indexed only.

Three examples of this are shown below. Note that when higher levels are excluded, all lower levels that *are* indexed need to shift upward in the term hierarchy so that the highest included child level now becomes level 
```
0
```

. The example code in all snippets below accounts for that.

Use the following to index only direct child terms (depth == 
```
1
```

) and deeper levels. In other words, to skip the top-level terms (depth == 
```
0
```

):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) { // Replace 'my_facet_name' with the name of your facet.
    if ( $params['depth'] > 0 ) {
      $params['depth'] = $params['depth'] - 1; // Shift the depth level one upwards for every child level.
    } else {
      $params['facet_value'] = ''; // Don't index the highest level.
    }
  }
  return $params;
}, 10, 2 );
```

To index only terms on a specific depth, including all children at lower levels, you can use the following snippet. Make sure to set the desired level in [line 3](#index-children-only-L3). Note that the top level is 
```
0
```

, so 
```
2
```

 in this example is the grandchild level, three levels deep:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) { // Replace 'my_facet_name' with the name of your facet
    $depth = 2; // Set the desired depth to show, including its children. The top level is 0, so 2 is grandchild level.
    if ( $params['depth'] >= $depth ) {
      $params['depth'] = $params['depth'] - $depth; // Shift the depth level one upwards for every child level.
    } else {
      $params['facet_value'] = ''; // Don't index this row.
    }
  }
  return $params;
}, 10, 2 );
```

To index only the first-level direct child terms (depth == 
```
1
```

), but **not** their parent or child terms:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) { // Replace 'my_facet_name' with the name of your facet.
    if ( $params['depth'] === 1 ) {
      $params['depth'] = $params['depth'] - 1; // Shift the depth level one upwards for every child level.
    } else {
      $params['facet_value'] = ''; // Don't index the highest level.
    }
  }
  return $params;
}, 10, 2 );
```

### Index only children of one or more parents

To display only child terms of **one specific parent term** in a facet, you can use the [“Parent term” setting](/help-center/facets/facet-types/checkboxes/#parent-term) (if the facet type has this setting).

For more flexibility, or if the facet type does not have a “Parent term” setting (for example the [Hierarchy Select facet](/help-center/facets/facet-types/hierarchy-select/)), you can also do this programmatically. This also has the advantage that you can display only child terms of **multiple parent terms**.

Add the following code to your (child) theme’s functions.php. Set the parent ID(s) of which you want the child terms to be shown, in the array in [line 5](#index-children-of-one-or-more-parents-L5). Make sure to **re-index after adding or changing the code**.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {

  if ( 'my_facet_name' == $params['facet_name'] ) { // Replace 'my_facet_name' with the name of your facet.

    $parent_id = [ 305,306 ]; // List all parents of which the child terms should be shown. Can be one or more.

    $taxonomy = str_replace( 'tax/', '', $params['facet_source'] ); // Get the taxonomy used as the facet data source
    $ancestors = get_ancestors( $params['term_id'], $taxonomy ); // Get all ancestors of the term being indexed.
    $term_id_parents = array_intersect( $parent_id, $ancestors ); // Get the parent id(s) are among the ancestors.

    if ( $term_id_parents ) { // If the parent(s) is/are among the ancestors
      $term_id_parent = end( $term_id_parents ); // Store the highest level parent id (in case there are more)
      $parent_depth = count( get_ancestors( $term_id_parent, $taxonomy ) ); // Get parent depth
      $params['depth'] = $params['depth'] - ( $parent_depth + 1 ); // Shift the depth level based on the depth of the parent id
    } else {
      $params['facet_value'] = ''; // Don't index this row.
    }
  } 

  return $params;
}, 10, 2 );
```

A few things to keep in mind when using the above code:

- For this code to work, the [data source of the facet](/help-center/facets/facet-types/checkboxes/#data-source) needs to be a taxonomy. The code will work with or without the facet’s [Hierarchical](/help-center/facets/facet-types/checkboxes/#hierarchical) setting enabled.
- Make sure **not** to use the facet’s [“Parent term” setting](/help-center/facets/facet-types/checkboxes/#parent-term).
- If you add multiple parent IDs that are at *different* hierarchical levels, each of their child trees is shifted upwards in the hierarchy until the highest child level is at level 0. The tree may then look different than the original one.
- If you add parent IDs that are within the same vertical parent-child tree, the code takes the highest one in the hierarchy and shows the children of that parent.

Note:Indexing child terms of multiple parent terms can also be useful [in a multi-lingual setup](/help-center/using-facetwp-with/multilingual/#using-a-facets-parent-term-setting-in-a-multi-lingual-setup). If a taxonomy is translated, the term ID of the parent term you want to use in a facet’s “Parent term” setting will be different for each language. Using the above snippet with the parent IDs of all languages set in [line 5](#index-children-of-one-or-more-parents-L5) will fix the issue. After re-indexing, the facet will show the children of the correct parent term on each language page, because it will only show choices for which there are posts in the listing.

### Exclude one or more posts from a facet

To prevent one or more posts from being indexed for a certain facet, you can use the following code:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  $post_ids = [ 123, 456, 789 ]; // add your post IDs here
  if ( 'my_facet_name' == $params['facet_name'] && in_array( $params['post_id'], $post_ids ) ) { // replace 'my_facet_name' with the name of your facet
    $params['facet_value'] = ''; // don't index this row
  }
  return $params;
}, 10, 2 );
```

This will exclude the specified posts from the results if they would normally show up when filtering with the specified facet.

Note that this code will not prevent these post(s) from showing up in the *unfiltered* results. To prevent posts from being in the results at all, you can adapt your query, or use the [facetwp_pre_filtered_post_ids hook](/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/).

Or, if you only want to prevent them from being in the filtered results, no matter which facet is used, you can use the [facetwp_filtered_post_ids hook](/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/), or the following approach:

### Exclude posts with a specific term from being indexed for all facets

To prevent posts that have a specific term from being indexed for all facets, you can use the following code:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {

  $post_id = $params['post_id'];
  $excluded_terms = [ 'my_term', 'my_other_term' ]; // Add terms to be excluded
  $taxonomy = 'product_cat'; // The taxonomy that contains the terms

  foreach ( $excluded_terms as $term ) {
    if ( has_term( $term, $taxonomy, $post_id ) ) {
      $params['facet_value'] = ''; // Skip this row
      break;
    }
  }
  return $params;
}, 10, 2 );
```

As in the [previous example](#exclude-one-or-more-posts-from-a-facet), this will exclude the specified posts from the results if they would normally show up when filtering with any facet.

And also here, this code will not prevent these post(s) from showing up in the *unfiltered* results. To prevent posts from being in the results at all, you can adapt your query, or use the [facetwp_pre_filtered_post_ids hook](/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/).

As an alternative to the above code, you can also use the [facetwp_filtered_post_ids hook](/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/).

### Combine facet choices

Combine multiple facet choices into one choice:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'fruits' == $params['facet_name'] ) { // Replace 'fruits' with the name of your facet.
    $val = $params['facet_value'];
    if ( 'oranges' == $val || 'grapefruits' == $val || 'lemons' == $val ) { // Replace 'oranges'/'grapefruits'/'lemons' with the facet choices to combine (we use the technical name here). Note that || means OR.
      $params['facet_value'] = 'citrus-fruits'; // Replace 'citrus-fruits' with the new facet_value (technical name/slug). Don't use spaces or special characters.
      $params['facet_display_value'] = 'Citrus Fruits'; // Replace 'Citrus Fruits' with the new facet choice's display name.
    }
  }
  return $params;
}, 10, 2 );
```

Important to distinguish here is that each facet choice consists of two values that are [indexed](/help-center/indexing/) and stored in the index table. The 
```
facet_value
```

 is its technical name (“slug”) as it appears in the URL after filtering. And the 
```
facet_display_value
```

 is the choice’s display value as it shows up in the facet itself in the front-end.

Another thing to notice is that in line 3 and 4 of the above example, we are using 
```
facet_value
```

 to select the choices that will be combined. You could also use 
```
facet_display_value
```

 here, as it is available in the hook’s [parameters](#parameters).

### Split or add facet choices

This hook can also be used to add new rows to the indexing table, with the 
```
insert()
```

 function. The following code example splits comma-separated facet values into individual facet values. It then uses the 
```
insert()
```

 function to enter these values as new rows in the indexing table.

Say you have a facet with a choice 
```
apples, oranges, bananas
```

. After implementing the below code, and doing a full re-index, you will now have three facet choices: 
```
apples
```

, 
```
oranges
```

, and 
```
bananas
```

.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) { // Replace 'my_facet_name' with the name of your facet

    // Split the original facetwp_display_value by comma
    $values = explode(",", $params['facet_display_value']);

    // Store each separate value as a new row
    foreach ($values as $value) {
      $value = trim( $value ); // Remove any whitespace from the beginning and end of the new value
      $params['facet_value'] = $value;
      $params['facet_display_value'] = $value;
      $class->insert( $params );
    }
    $params['facet_value'] = ''; // skip the original row
  }
  return $params;
}, 10, 2 );
```

### Remove facet choices

With this hook you can also remove facet choices. The easiest way to do this is with the facet’s [value modifiers](/help-center/facets/facet-types/checkboxes/#value-modifiers) (if it has that setting). But in some situations, this will not work. For example, if you have a facet that uses categories as data source, and there are multiple terms with the same name, but different slugs. To remove these duplicate terms, you need to be able to select them by 
```
facet_value
```

 (the term slug), and not 
```
facet_display_value
```

 (the term name, as used in the facet’s “Value modifiers” setting).

The following example assumes three facet choices, all with the label “X-lock” and with slugs 
```
x-lock
```

, 
```
x-lock-2
```

 and 
```
x-lock-3
```

. The snippet removes the two facet choices with slugs 
```
x-lock-2
```

 and 
```
x-lock-3
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  $exclude_values = [ 'x-lock-2', 'x-lock-3' ]; // add the raw values / slugs of choices to remove
  if ( 'my_facet_name' == $params['facet_name'] && in_array( $params['facet_value'], $exclude_values ) ) { // replace 'my_facet_name' with the name of your facet
    $params['facet_value'] = ''; // don't index this row
  }
  return $params;
}, 10, 2 );
```

Note that to remove facet choice **conditionally**, for example, only on a specific page, template or archive, you can [use the facetwp_facet_render_args hook](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#conditionally-remove-facet-choices).

### Filter posts with a (non-)empty custom field

The 
```
facetwp_index_row
```

 can also be used to create a facet that filters posts where a particular custom field (set as the facet’s data source) is **not empty**, and/or **empty**.

By default, facet choices for which 
```
facet_value
```

 is empty are skipped when indexing. When they are not empty, they are indexed with their technical value in 
```
facet_value
```

, and their display value (the choice label) in 
```
facet_display_value
```

, [as explained above](#how-it-works).

The following code checks the 
```
facet_value
```

 while indexing, and adds a custom-defined choice for it when it is not empty, and optionally another choice for when it is empty.

If you only want to include a choice for when the field is not empty, remove [line 8-12](#index-custom-field-not-empty-L8-L12).

Adapt the 
```
facet_display_value
```

 choice label(s) in [line 6](#index-custom-field-not-empty-L6) and [line 11](#index-custom-field-not-empty-L11) to your liking. Make sure to replace 
```
my_facet_name
```

 with the name of your facet in [line 2](#index-custom-field-not-empty-L2), and re-index after adding or changing this code in your (child) theme’s functions.php.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) { // Replace "my_facet_name" with the name of your facet
    // When custom field is not empty
    if ( $params['facet_value'] !== '' ) {
      $params['facet_value'] = 'yes';
      $params['facet_display_value'] = 'Yes - has a value';
    }
    // When custom field is empty
    else {
      $params['facet_value'] = 'no';
      $params['facet_display_value'] = 'No - does not have a value';
    }
  }
  return $params;
}, 10, 2 );
```

### Index values in a related custom field

The following code example shows how to index values in a related custom field. The code demonstrates how to set/overwrite the indexed 
```
lat
```

/
```
lng
```

 values of a [Proximity facet](/help-center/facets/facet-types/proximity/) (or [Map facet](/help-center/facets/facet-types/map/)) to the values of a custom field that is **not in the post itself** but in a related post, linked to it with an ACF [Post Object](https://www.advancedcustomfields.com/resources/post-object/) or [Relationship](https://www.advancedcustomfields.com/resources/relationship/) field.

For example, consider a scenario where you have a listing of 
```
event
```

 posts. For every 
```
event
```

 post, there’s a corresponding 
```
venue
```

 post connected via an ACF Post Object field. And each 
```
venue
```

 post has an ACF [Google Map](https://www.advancedcustomfields.com/resources/google-map/) field that you want indexed as the data source for a [Proximity](/help-center/facets/facet-types/proximity/) (or [Map](/help-center/facets/facet-types/map/)) facet.

In this case, you can’t set the related Google Map field directly as the Proximity facet’s data source, so you need the 
```
facetwp_index_row
```

 hook to first retrieve the related post ID, and then, with that, the related post’s Google Map field’s value.

First of all, set the Proximity/Map facet’s [Data Source setting](/help-center/facets/facet-types/proximity/#data-source) to “Post Type” (which is certain to always have a value for each event). This is important because the 
```
facetwp_index_row
```

 hook only runs if there is already a non-empty value being indexed for the post. **Don’t** set anything for the [Longitude setting](/help-center/facets/facet-types/proximity/#longitude).

In [line 8](#index-proximity-location-field-related-post-object-field-L8) we first get the post ID of the related post that is in the Post Object field. If it exists, we use that post ID to get the value of the Google Maps field in [line 13](#index-proximity-location-field-related-post-object-field-L13). We then store the 
```
lat
```

 value in 
```
facet_value
```

 and the 
```
lng
```

 value in 
```
facet_display_value
```

.

In [lines 20-29](#index-proximity-location-field-related-post-object-field-L20-L29) are some (optional) extra checks on the 
```
lat
```

/
```
lng
```

 values that are normally performed when indexing Proxomity facets. They make sure the indexed values are valid floats and are within the range of [possible, valid](/help-center/facets/facet-types/proximity/#choose-a-data-source) 
```
lat
```

/
```
lng
```

 values.

Note that it does not matter if you set the ACF [Post Object](https://www.advancedcustomfields.com/resources/post-object/) field’s “Return Format” setting to “Post Object” or “Post ID”.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {

  if ( 'my_proximity_facet' == $params['facet_name'] ) { // Change "my_proximity_facet" to the name of your Proximity facet

    $post_id = $params['post_id'];
      
    // Get the Post Object field value 
    $location_id = get_field( 'my_acf_post_object field', $post_id ); // Change "my_acf_post_object field" to the name of your ACF Post Object field

    $location = '';
    if ( $location_id ) { // Check if the Post Object field has a value
      // If we have a Post Object field value, use it to get the Google Maps field value  
      $location = get_field( 'my_acf_googlemapfield', $location_id ); // Change "my_acf_googlemapfield" to the name of your ACF Google Maps field
    }

    // If there is a location, index it, otherwise skip this post by setting facet_value to ''.  
    $params['facet_value'] = empty( $location ) ? '' : $location['lat'];
    $params['facet_display_value'] = empty( $location ) ? '' : $location['lng'];

    // Optionally replicate the extra checks that Proximity facets normally have:

    // 1. Make sure lat and lng are valid floats
    $params['facet_value'] = $params['facet_value'] == (float)$params['facet_value'] ? (float)$params['facet_value'] : '';
    $params['facet_display_value'] = $params['facet_display_value'] == (float)$params['facet_display_value'] ? (float)$params['facet_display_value'] : '';

    // 2. Check for a valid range of lat and lng
    if  ( '' == $params['facet_value'] || '' == $params['facet_display_value'] || 90 < abs( $params['facet_value'] ) || 180 < abs( $params['facet_display_value'] ) ) {
      $params['facet_value'] = ''; // don't index
    }

  }

  return $params;
}, 10, 2 );
```

Note that if you are [using The Events Calendar](/help-center/using-facetwp-with/the-events-calendar-pro/), and on a page retrieving 
```
tribe_events
```

 posts, you want to use venue locations in a Proximity and/or Map facet, you can [do it like this](/help-center/using-facetwp-with/the-events-calendar-pro/#use-venue-coordinates-in-a-map-or-proximity-facet).

### Create a month/year facet

This hook can also be used to create a facet with months and years (or only years or months) as facet choices.

First, create a facet (for example a [Checkboxes facet](/help-center/facets/facet-types/checkboxes/)), and set its Data Source to 
```
Post Date
```

 (or any custom field that stores a date in the 
```
YYYY-MM-DD
```

 format), like an [ACF Date Picker field](/help-center/using-facetwp-with/advanced-custom-fields/#using-a-date-picker-or-date-time-picker-field).

Then add the following code to your (child) theme’s functions.php. Make sure to change 
```
my_facet_name
```

 in [line 2](#month-year-facet-L2) to the name of your facet, and **re-index**.

![A Checkboxes facet to filter by month and year.](https://facetwp.com/wp-content/uploads/2025/01/month-year-facet.png)A Checkboxes facet to filter by month and year.
Using this example code, the facet will display choices formatted as 
```
November 2024
```

, determined by the 
```
F Y
```

 format passed in the 
```
date()
```

 function for the 
```
facet_display_value
```

 in [line 13](#month-year-facet-L13).

When selected, the facet choice will show as 
```
11-2024
```

 in the URL, as set in the 
```
facet_value
```

 (the “raw” technical value) in [line 12](#month-year-facet-L12). Note that we have set the 
```
facet_value
```

 to 
```
m-Y
```

 and not to 
```
Y-m
```

. This way, you can have the months ordered correctly in the facet, by setting the facet’s “Sort by” setting to “Raw value”.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) { // change "my_facet_name" to the name of your facet
    $raw_value = $params['facet_value'];

    // Skip empty or unparseable date values
    if ( empty( $raw_value ) || false === strtotime( $raw_value ) ) {
      $params['facet_value'] = ''; // skip these values
      $params['facet_display_value'] = '';
      return $params;
    }

    $params['facet_value'] = date( 'm-Y', strtotime( $raw_value ) ); // Use "11-2024" for the facet choice in the URL, so you can set the facet's "Sort by" setting to "Raw value" and order the months correctly.
    $params['facet_display_value'] = date( 'F Y', strtotime( $raw_value ) ); // Use "November 2024" for the facet choice's display value
  }
  return $params;
}, 10, 2 );
```

![A Checkboxes facet to filter by year.](https://facetwp.com/wp-content/uploads/2025/01/filter-by-year-facet.png)A Checkboxes facet to filter by year.
The date formats for the 
```
facet_value
```

 (in [line 12](#month-year-facet-L12)) and 
```
facet_display_value
```

 (in [line 13](#month-year-facet-L13)) can be customized to any other format. See [the examples on the PHP.net date() documentation page](https://www.php.net/manual/en/function.date.php#refsect1-function.date-examples), and [this overview of PHP date formats](https://www.php.net/manual/en/datetime.format.php#refsect1-datetime.format-parameters).

For example, to show **only years**, just use 
```
Y
```

 for both formats. A Checkboxes facet showing available years will then look like the image on the right. Another example is [a Slider facet showing years, using the Post Date as data source](/help-center/facets/facet-types/slider/#create-a-year-slider).

![A Radio facet to filter by month.](https://facetwp.com/wp-content/uploads/2026/02/months-only-facet.png)A Radio facet to filter by month.
To show **only months**, use 
```
m
```

 (the month number, e.g. 
```
01
```

) for the 
```
facet_value
```

 and 
```
F
```

 (the whole month name, e.g. 
```
January
```

) for the 
```
facet_display_value
```

. A Radio facet showing available months will then look like the image on the right.

For abbreviated, 3-letter month names (e.g. 
```
Dec
```

), use 
```
M
```

 instead of 
```
F
```

.

For more formatting option, see [this overview table](https://www.php.net/manual/en/datetime.format.php#refsect1-datetime.format-parameters) of PHP’s 
```
DateTime
```

 format characters.

To reverse the order of the date/month/year choices in the facet from ascending to descending, you can [use the facetwp_facet_orderby hook](/help-center/developers/hooks/querying-hooks/facetwp_facet_orderby/#sort-by-date).

Note that to prevent empty date values showing up as 
```
1970
```

 in the facet (caused by 
```
date('m-Y', false)
```

 returning 
```
1970
```

), we check the 
```
$raw_value
```

 for empty or unparseable date values in [lines 6-10](#month-year-facet-L6-L10), and skip them if they are encountered.

Note:You can use the [Time Since add-on](/help-center/facets/facet-types/time-since/) to create facets that can filter posts by date / time **since** a specified interval.

### Create a past/future facet

![A future-past Radio facet.](https://facetwp.com/wp-content/uploads/2025/01/future-past-facet.png)A future-past Radio facet.
This hook can also be used to create a facet to filter posts by past or future date. The date can be the post date or any custom field containing a date.

First, create a facet (for example a [Radio facet](/help-center/facets/facet-types/radio/)), and set its Data Source to 
```
Post Date
```

 (or any custom field that stores a date in the 
```
YYYY-MM-DD
```

 format), like an [ACF Date Picker field](/help-center/using-facetwp-with/advanced-custom-fields/#using-a-date-picker-or-date-time-picker-field).

Then add the following code to your (child) theme’s functions.php. Make sure to change 
```
my_facet_name
```

 in [line 3](#future-past-facet-L3) to the name of your facet, and **re-index**.

This example creates an “Open” (future) and “Closed” (past) option.

To customize the text, for both choices change the values for 
```
facetwp_value
```

 (the technical value as shown in the URL) and 
```
facetwp_display_value
```

 (the choice as shown in the facet itself). Make sure that the 
```
facetwp_value
```

 values are lowercase and do not contain any spaces or special characters. Re-index again after making any changes.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  
  if ( 'my_facet_name' == $params['facet_name'] ) { // Change "my_facet_name" to the name of your date-based facet
    $raw_value = $params['facet_value']; // The date field needs to be in YYYY-MM-DD format

    $date = new DateTime($raw_value);
    $now = new DateTime('now');

    if ( $date > $now ) {
      // Date is in the future
      $params['facet_value'] = 'open'; // Lowercase, don't use spaces or special characters
      $params['facet_display_value'] = 'Open';
    } else {
      // Date is in the past
      $params['facet_value'] = 'closed'; // Lowercase, don't use spaces or special characters
      $params['facet_display_value'] = 'Closed';
    }

  }
  return $params;
}, 10, 2 );
```

Note:It is also possible to [create a future/past facet with the Time Since facet type](/help-center/facets/facet-types/time-since/#create-a-past-future-facet).

### Index a serialized array

Some custom fields store their values as a serialized array, which looks like this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoa:2:{i:0;s:6:"Monday";i:1;s:8:"Thursday";}
```

FacetWP will recognize some custom field types that do this (like [ACF](/help-center/using-facetwp-with/advanced-custom-fields/) Checkboxes fields) and will automatically unserialize the value while indexing. But this will not always be the case. There are also situations in which FacetWP does not recognize the field as being serialized, for example if a facet uses an ACF Relationship field or Post Object field as its data source, and the related field is a field that stores its data serialized, like an ACF Checkboxes field.

In these situations, you can use the 
```
facetwp_index_row
```

 hook as shown in the example below. To index each value within a serialized array, it first needs to be unserialized. Then each value in the array can be inserted individually into the database. And last but not least, the original (serialized) value needs to be skipped over:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'my_facet_name' == $params['facet_name'] ) {  // Replace 'my_facet_name' with the name of your facet
    $values = maybe_unserialize( $params['facet_value'] );
    if ( is_array( $values ) && ! empty( $values ) ) {
      foreach ( $values as $value ) {
        $params['facet_value'] = $value; // Set the choice's technical value (as seen in the URL).
        $params['facet_display_value'] = $value; // set the choice's display value (as seen in the facet).
        $class->insert( $params ); // insert each new value into the database as a new row.
      }
      $params['facet_value'] = ''; // skip the original row, by setting the technical value to nothing.
    }
  }
  return $params;
}, 10, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_index_row)

    
## See also

    - [Indexing](https://facetwp.com/help-center/indexing/)
- [The facetwp_facet_display_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/)
- [The facetwp_indexer_row_data hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_row_data/)
- [The facetwp_indexer_query_args hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/)
- [The facetwp_indexer_is_enabled hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled/)
- [How to combine facet sources](https://facetwp.com/how-to-combine-facet-sources/)
- [How to combine facet choices](https://facetwp.com/how-to-combine-facet-choices/)
- [How to include / exclude facet choices](https://facetwp.com/how-to-exclude-certain-categories/)
- [How to add a “Percent discount” facet](https://facetwp.com/how-to-add-a-percent-discount-facet/)
- [The Schedule Indexer add-on](https://facetwp.com/help-center/add-on-features-and-extras/schedule-indexer/)
- [The facetwp_pre_filtered_post_ids hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/)
- [The facetwp_filtered_post_ids hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/)
- [The Dropdown facet type](https://facetwp.com/help-center/facets/facet-types/dropdown/)
- [The Hierarchy Select facet type](https://facetwp.com/help-center/facets/facet-types/hierarchy-select/)
- [The facetwp_facet_render_args hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/)
- [The facetwp_facet_orderby hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_facet_orderby/)
- [The Time Since facet type](https://facetwp.com/help-center/facets/facet-types/time-since/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)
- [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [The Slider facet type](https://facetwp.com/help-center/facets/facet-types/slider/)
- [The Proximity facet type](https://facetwp.com/help-center/facets/facet-types/proximity/)
- [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)
- [What’s new in Bricks 0.7.1](https://facetwp.com/whats-new-in-bricks-0-7-1/)

                    Last updated: April 16, 2026

---

## facetwp_indexer_is_enabled

**Source:** [https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled/](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled/)

## Overview

FacetWP has an automatic indexer that performs a single re-index when an individual item (a post, page, and category or term name/slug) is edited or saved. This keeps the index up to date automatically without having to worry about it, and without putting the potentially heavy burden of a full re-index on your site.

With this hook, you can temporarily or permanently disable this automatic (re-)indexing process.

This can be useful if you prefer to re-index manually [with the Re-index button](/help-center/indexing/#how-to-run-the-indexer). Or if you want to [run the indexer programmatically](/help-center/indexing/how-to-trigger-the-indexer-programmatically/), [directly with PHP](/help-center/indexing/how-to-trigger-the-indexer-programmatically/#available-indexing-functions), [with a non-recurring WP-Cron event](/help-center/indexing/how-to-trigger-the-indexer-programmatically/#trigger-one-time-re-indexing-with-wp-cron), [periodically with the Schedule Indexer add-on](/help-center/add-on-features-and-extras/schedule-indexer/) (which works with WP-Cron), or [with WP-CLI/server cron](/help-center/using-facetwp-with/wp-cli/#how-to-trigger-indexing-with-wp-cli). Other reasons for using this hook could be if you want to (temporarily) pause automatic indexing when [importing content](/help-center/indexing/how-to-trigger-the-indexer-programmatically/#trigger-re-indexing-after-importing-posts-or-products), if you are testing custom indexing code, or if you want to [disable automatic indexing for certain types of content](#conditionally-disable-automatic-indexing).

### Using the “Enable automatic indexing” setting

![Disable automatic indexing.](https://facetwp.com/wp-content/uploads/2024/11/disable_automatic_indexing.png)Disable automatic indexing.
Note that automatic indexing can also be disabled with the “Enable automatic indexing” setting ([introduced in version 4.3.4](/whats-new-in-facetwp-4-3-4/)). This setting is **enabled by default**. When disabled, it does exactly the same as [using the hook](#disable-automatic-indexing) in your functions.php.

When the 
```
facetwp_indexer_is_enabled
```

 hook is used [like below](#disable-automatic-indexing), the setting will display a warning, because in this scenario, the setting is ignored:

![The 'Enable automatic indexing' warning when the 'facetwp_indexer_is_enabled' hook is in use.](https://facetwp.com/wp-content/uploads/2025/10/enable_automatic_indexer_warning.png)The ‘Enable automatic indexing’ warning when the 
```
facetwp_indexer_is_enabled
```

 hook is in use.

## Parameters

- **$is_enabled** | boolean | Whether FacetWP’s automatic indexer is enabled

## Disable automatic indexing

Add the following code to your (child) theme’s functions.php to entirely disable automatic indexing:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_indexer_is_enabled', '__return_false' );
```

## Conditionally disable automatic indexing

The following example disables automatic re-indexing for [Advanced Custom Fields](/help-center/using-facetwp-with/advanced-custom-fields/) field groups:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_indexer_is_enabled', function( $enabled ) {
  if ( isset( $_POST['action'] ) && 'editpost' == $_POST['action'] &&
       isset( $_POST['post_type'] ) && 'acf-field-group' == $_POST['post_type'] ) {
    return false;
  }
  return $enabled;
});
```

### Disable automatic indexing for a file

If you are adding posts or terms programmatically, with the intention to [index the new/changed posts programmatically](/help-center/indexing/how-to-trigger-the-indexer-programmatically/) at the end of the process, you may run into trouble with FacetWP’s automatic indexer being triggered along the way.

For example, if you are using [wp_set_object_terms](https://developer.wordpress.org/reference/functions/wp_set_object_terms/) to set new terms, which will trigger an automatic re-index of the post at that point. In this situation, you can disable the automatic indexing for your file, like this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_indexer_is_enabled', function( $enabled ) {
  if ( 'my_file.php' == FWP()->helper->get_uri() ) { // Change my_file.php
    return false;
  }
  return $enabled;
} );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_indexer_is_enabled)

    
## See also

    - [Indexing](https://facetwp.com/help-center/indexing/)
- [The Schedule Indexer add-on](https://facetwp.com/help-center/add-on-features-and-extras/schedule-indexer/)
- [Indexing with WP-CLI](https://facetwp.com/help-center/using-facetwp-with/wp-cli/)
- [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [The facetwp_indexer_row_data hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_row_data/)
- [The facetwp_indexer_query_args hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/)

                    Last updated: October 22, 2025

---

## facetwp_indexer_query_args

**Source:** [https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/)

## Overview

This filter lets you customize which posts and post types get [indexed](/help-center/indexing/). You have access to [the query arguments array](#parameters) that gets passed to [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/).

## Parameters

- **$args** | array | An array of WP_Query arguments (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$args = [
  'post_type'         => 'any',
  'post_status'       => 'publish',
  'posts_per_page'    => -1,
  'fields'            => 'ids',
];
```

## Customize indexable post types

One of the things this hook lets you customize is the “indexable post types”: the post types that FacetWP indexes. This makes it possible to [fix issues with some post types not being indexed](#force-indexing-of-non-searchable-post-types), or to [force FacetWP to index only specific post types](#index-only-specific-post-types), or to [prevent indexing of specific post types](#prevent-indexing-of-searchable-post-types).

![How to check indexable post types.](https://facetwp.com/wp-content/uploads/2025/10/indexing_button_show_indexable_post_types.png)How to check indexable post types.

To check which post types FacetWP currently indexes, click the “Show indexable post types” button in the settings, as shown in the image on the right. Changes you make with this hook will be reflected when you click the “Show indexable post types” button again.

Reducing the post types that FacetWP indexes can [improve indexing speed](/help-center/developers/facetwp-performance-speed-limits-and-scalability/#improve-indexing-speed). Even if your facets don’t apply to all post types that exist, FacetWP will still look up every post from every indexable post type, and check it against each facet to see if it needs to be indexed. So removing post types that are not used with facets can potentially speed up indexing.

### Searchable and non-searchable post types

Post types can be “searchable” or “non-searchable”. Searchable post types will show up in search results, and non-searchable ones not. **FacetWP by default only indexes searchable post types**.

To be searchable, the 
```
exclude_from_search
```

 [argument of the register_post_type() function](https://developer.wordpress.org/reference/functions/register_post_type/#exclude_from_search) must be set to 
```
false
```

. You can do this directly [in the function’s arguments, or with a hook](/help-center/indexing/common-indexing-issues/#ways-to-fix-indexing-specific-post-types).

But you may want to keep a post type non-searchable, to prevent these posts from showing up in the front-end WordPress search results, and still be able to index them. With this hook, you can [force FacetWP to index and filter non-searchable post types](#force-indexing-of-non-searchable-post-types). If you need a working [Search facet](/help-center/facets/facet-types/search/), you also have to [re-add these post types to the Search facet’s query](#search-non-searchable-post-types-with-a-search-facet).

## Usage examples

Important: After adding or changing any custom code that uses this indexing hook, remember to hit the [Re-index button](/help-center/indexing/#how-to-run-the-indexer).

### Force indexing of non-searchable post types

FacetWP by default only indexes [so-called “searchable” post types](#searchable-and-non-searchable-post-types) (that have 
```
exclude_from_search
```

 set to 
```
false
```

). This hook can be used to force FacetWP to index and filter post types that are “non-searchable”.

For example, to force the 
```
wprm_recipe
```

 post type to be indexed and filterable, even though it’s non-searchable, add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_indexer_query_args', function( $args ) {
  $args['post_type'][] = 'wprm_recipe';  // Force this non-searchable post type to be indexed
  return $args;
});
```

#### Search non-searchable post types with a Search facet

If a post type is non-searchable, it will also not be returned as search result when using a [Search facet](/help-center/facets/facet-types/search/), even though you are forcing FacetWP to index and filter it, [as shown above](#add-post-type). This can be fixed by re-adding the non-searchable post type(s) back into the Search facet’s query, with the 
```
facetwp_search_query_args
```

 hook. This way the post type(s) will still not be searchable on the normal WP search page, but will show up when using a Search facet.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_search_query_args', function( $search_args, $params ) {
  $search_args['post_type'] =  ['wprm_recipe','my-other-post-type']; // Add non-searchable post type(s) to the Search facet's search query 
  return $search_args;
}, 10, 2 );
```

### Index only specific post types

To index only specific post types, overwrite the 
```
$args['post_type']
```

 array, as shown in the following snippet. This example indexes only the 
```
post
```

and 
```
wprm_recipe
```

 post types.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_indexer_query_args', function( $args ) {
  $args['post_type'] = ['post', 'wprm_recipe']; // Index only these post types
  return $args;
});
```

### Prevent indexing of searchable post types

To prevent indexing of a searchable post type, you can remove it, as shown in the following snippet. This example prevents indexing of pages:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_indexer_query_args', function( $args ) {
  unset ( $args['post_type']['page'] ); // Prevent this post type from being indexed
  return $args;
});
```

### Index attachments and draft, pending or private posts

By default, FacetWP only [indexes](/help-center/indexing/), displays and filters “published” items, meaning posts that have their 
```
post_status
```

 set to 
```
publish
```

.

This excludes attachments (like images, media, and PDFs), which are posts that have their 
```
post_status
```

 automatically set to 
```
inherit
```

. It also excludes [other possible post statuses](https://wordpress.org/documentation/article/post-status/#default-statuses), like 
```
draft
```

, 
```
pending
```

 and 
```
private
```

.

To force FacetWP to index the 
```
attachment
```

 post type for all facets, add the code following to your (child) theme’s functions.php, and then click the re-index button:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Also index media/attachments (post-status "inherit")
add_filter( 'facetwp_indexer_query_args', function( $args ) {
  $args['post_status'] = [ 'publish', 'inherit' ];
  return $args;
});

// Index media/attachments when newly added
add_action( 'add_attachment', function( $post_ID) {
  FWP()->indexer->index( $post_ID );
} );

// Re-index media/attachments when edited
add_action( 'attachment_updated', function( $post_ID ) {
  FWP()->indexer->index( $post_ID );
} );
```

To index published and pending posts, use the following:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_indexer_query_args', function( $args ) {
  $args['post_status'] = [ 'publish', 'pending' ];
  return $args;
});
```

Note that **indexing** attachments (or other post statuses) is not enough to **display** them in your post listing. See [this tutorial](https://facetwp.com/how-to-filter-wp-attachments-and-draft-pending-or-private-posts/) for more info about filtering and displaying attachments, and/or draft, pending, or private posts.

If you are using SearchWP, see our SearchWP page for [additional options to search within attachments/PDFs](/help-center/using-facetwp-with/searchwp/#search-in-attachments-media-pdfs).

[More examples](https://gist.facetwp.com/?_keywords=facetwp_indexer_query_args)

    
## See also

    - [Indexing](https://facetwp.com/help-center/indexing/)
- [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
- [The facetwp_indexer_row_data hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_row_data/)
- [The facetwp_indexer_is_enabled hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled/)
- [The Schedule Indexer add-on](https://facetwp.com/help-center/add-on-features-and-extras/schedule-indexer/)
- [The Search facet type](https://facetwp.com/help-center/facets/facet-types/search/)
- [How to filter WP attachments and draft, pending or private posts](https://facetwp.com/how-to-filter-wp-attachments-and-draft-pending-or-private-posts/)
- [Using FacetWP with SearchWP](https://facetwp.com/help-center/using-facetwp-with/searchwp/)
- [Using FacetWP with Relevanssi](https://facetwp.com/help-center/using-facetwp-with/relevanssi/)

                    Last updated: October 23, 2025

---

## facetwp_indexer_row_data

**Source:** [https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_row_data/](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_row_data/)

## Overview

Modify the array of values (for a specific facet) before each is passed through the [facetwp_index_row](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/) hook and saved into FacetWP’s [index table](/help-center/indexing/).

## Parameters

- **$rows** | array | An array of associative arrays. The elements of each associative array corresponds to columns in the 
```
facetwp_index
```

 table.
- **$params** | array | Extra helper data (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'defaults' => [
    'post_id'               => 123,
    'facet_name'            => 'facet_1',
    'facet_source'          => 'tax/category',
    'facet_value'           => '',
    'facet_display_value'   => '',
    'term_id'               => 0,
    'parent_id'             => 0,
    'depth'                 => 0,
    'variation_id'          => 0,
  ],
  'facet' => [
    'label'     => 'Facet 1',
    'name'      => 'facet_1',
    'type'      => 'checkboxes',
    'source'    => 'tax/category',
    // ...
  ]
];
```

## Usage

Important: After adding any custom code that uses this indexing hook, remember to hit the [Re-index button](/help-center/indexing/#how-to-run-the-indexer).
Force FacetWP to index the value “Matt” into the 
```
first_name
```

 facet for every post:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_indexer_row_data', function( $rows, $params ) {
  if ( 'first_name' == $params['facet']['name'] ) {
    $new_row = $params['defaults'];
    $new_row['facet_value'] = 'matt';
    $new_row['facet_display_value'] = 'Matt';
    $rows[] = $new_row;
  }
  return $rows;
}, 10, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_indexer_row_data)

    
## See also

    - [Indexing](https://facetwp.com/help-center/indexing/)
- [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [The facetwp_indexer_query_args hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/)
- [The facetwp_indexer_is_enabled hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_is_enabled/)
- [The Schedule Indexer add-on](https://facetwp.com/help-center/add-on-features-and-extras/schedule-indexer/)

                    Last updated: May 2, 2023

---

## Output hooks

**Source:** [https://facetwp.com/help-center/developers/hooks/output-hooks/](https://facetwp.com/help-center/developers/hooks/output-hooks/)

These hooks let you modify the output data of various FacetWP features ([pager](/help-center/facets/facet-types/pager/), [sort box](/help-center/facets/facet-types/sort/), [Listing Builder items and dynamic tags](/help-center/listing-templates/listing-builder/), etc).

	[facetwp_facet_display_value](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/)
					[facetwp_facet_html](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_html/)
					[facetwp_facet_render_args](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/)
					[facetwp_facet_pager_link](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_pager_link/)
					[facetwp_facet_sort_options](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_sort_options/)
					[facetwp_template_html](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_template_html/)
					[facetwp_shortcode_html](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_shortcode_html/)
					[facetwp_render_params](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_render_params/)
					[facetwp_render_output](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_render_output/)
					[facetwp_builder_item_value](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_item_value/)
					[facetwp_builder_dynamic_tags](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tags/)
					[facetwp_builder_dynamic_tag_value](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/)

                    Last updated: August 15, 2023

---

## facetwp_builder_dynamic_tag_value

**Source:** [https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/)

## Overview

This filter lets you create your own custom dynamic tags, or modify the value of [built-in](/help-center/listing-templates/listing-builder/#built-in-dynamic-tags) or [custom](/help-center/listing-templates/listing-builder/#create-dynamic-tags-within-the-listing-builder) dynamic tags, to be used in the [Listing Builder](/help-center/listing-templates/listing-builder/).

This hook calculates values on-the-fly, meaning that if a post doesn’t use a given tag, then its value won’t be calculated. As opposed to the [facetwp_builder_dynamic_tags](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tags/) hook, which calculates the values for each tag automatically for each post, whether the post uses them or not.

## Parameters

- **$tag_value** | string | The tag value
- **$tag_name** | string | The tag name
- **$params** | array | An associative array of extra data:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params['layout'] // the raw layout data for this template
$params['post'] // the current post
```

## Create new custom dynamic tags

Below are two examples of how to create your own custom dynamic tag. You can make up the tag name yourself, 
```
{{ myamazingtag }}
```

 is entirely valid.

### Create a dynamic tag to output the value of a custom field

The following example creates a custom dynamic tag to output an [ACF](/help-center/using-facetwp-with/advanced-custom-fields/) custom field named 
```
first_name
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_dynamic_tag_value', function( $tag_value, $tag_name, $params ) {
  if ( 'acf:firstname' == $tag_name ) {
    $tag_value = get_field( 'first_name', $params['post']->ID );
  }
  return $tag_value;
}, 10, 3 );
```

Then within the [Listing Builder](/help-center/listing-templates/listing-builder/), you can use 
```
{{ acf:firstname }}
```

 to output the first name.

### Create a dynamic tag to output a clickable link to a URL

The following example creates a custom dynamic tag 
```
{{ website }}
```

 that outputs a link to a website, of which the URL is stored as a string value in an [ACF custom field](/help-center/using-facetwp-with/advanced-custom-fields/). It only outputs the link if the post has a website URL entered.

Add the following to your (child) theme’s functions.php. Make sure to replace 
```
my_website_field
```

 in [line 4](#example-output-website-link-L4) with the name of your ACF website/URL field.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Create a {{ website }} custom dynamic tag that conditionally outputs a link, if the 'my_website_field' is not empty
add_filter( 'facetwp_builder_dynamic_tag_value', function( $tag_value, $tag_name, $params ) {
  if ( 'website' == $tag_name ) {
    $website = get_field( 'my_website_field', $params['post']->ID ); // Replace 'my_website_field' with the name of your ACF website/URL field
    if ( $website ) { // If this post has a website URL entered in the 'my_website_field' field
      $tag_value = '<a href="' . $website . '" target="_blank">website</a>';
    }
  }
  return $tag_value;
}, 10, 3 );
```

Now you can add the 
```
{{ website }}
```

 dynamic tag to a Listing Builder item where you want the link to appear, for example in an HTML item. This tag will now output the URL as a clickable 
```
<a>
```

 tag, in each post item that has a value for the website field.

Note that you can output any post data by directly using the data available in 
```
$params['post']
```

. For example, to use the post title as link text:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Create a {{ website }} custom dynamic tag that conditionally outputs a link, if the 'my_website_field' is not empty
add_filter( 'facetwp_builder_dynamic_tag_value', function( $tag_value, $tag_name, $params ) {
  if ( 'website' == $tag_name ) {
    $website = get_field( 'my_website_field', $params['post']->ID ); // Replace 'my_website_field' with the name of your ACF website/URL field
    if ( $website ) { // If this post has a website URL entered in the 'my_website_field' field
      $tag_value = '<a href="' . $website . '" target="_blank">' . $params['post']->post_title . '</a>'; // output the post title as link text
    }
  }
  return $tag_value;
}, 10, 3 );
```

### Create a dynamic tag to output a clickable email link

The following example creates a custom dynamic tag 
```
{{ email }}
```

 that outputs a link of an email address stored as a string value in an [ACF custom field](/help-center/using-facetwp-with/advanced-custom-fields/). It only outputs the link if the post has an email address entered.

A clickable email address would look like this: [name@gmail.com](mailto:name@gmail.com). The HTML for this email address would look like this:

```
<a href="mailto:name@gmail.com">name@gmail.com</a>
```

Note that the 
```
href
```

 attribute value starts with 
```
mailto:
```

, which will open the link in the user’s email app.

Add the following to your (child) theme’s functions.php. Make sure to replace 
```
my_email_field
```

 in [line 4](#example-email-link-L4) with the name of your ACF email field.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Create an {{ email }} custom dynamic tag that conditionally outputs an email link, if the 'my_email_field' is not empty
add_filter( 'facetwp_builder_dynamic_tag_value', function( $tag_value, $tag_name, $params ) {
  if ( 'email' == $tag_name ) {
    $email_address = get_field( 'my_email_field', $params['post']->ID ); // Replace 'my_email_field' with the name of your ACF email field
    if ( $email_address ) { // If this post has an email address entered in the 'my_email_field' field

      $cleaned_email_address = str_replace(' ', '', $email_address); // Strip spaces

      $tag_value = '<a href="mailto:' . $cleaned_email_address . '" target="_blank">' . $email_address . '</a>';
    }
  }
  return $tag_value;
}, 10, 3 );
```

Now you can add the 
```
{{ email }}
```

 dynamic tag to a Listing Builder item where you want the link to appear, for example in an HTML item. This tag will now output the email as a clickable 
```
<a>
```

 tag, in each post item that has a value for the email field.

If you want to make sure that the link is only displayed if the email address is a **valid** email address, you can add a validation function, as shown below. The code will only output a link for valid addresses, and the field value  as text if it is not.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Validate email addresses
function isValidEmail ( $email ) {

  // Sanitize the email first to remove potentially problematic characters
  $email = filter_var( $email, FILTER_SANITIZE_EMAIL );

  // Validate the sanitized email
  if ( filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
    return true;
  } else {
    return false;
  }
}

// Create an {{ email }} custom dynamic tag that conditionally outputs an email link, if the 'my_email_field' is not empty,
// and the email address is valid.
add_filter( 'facetwp_builder_dynamic_tag_value', function( $tag_value, $tag_name, $params ) {

  if ( 'email' == $tag_name ) {
    $email_address = get_field( 'my_email_field', $params['post']->ID );  // Replace 'my_email_field' with the name of your ACF email field
    if ( $email_address ) { // If this post has an email address entered in the 'my_email_field' field

      $cleaned_email_address = str_replace(' ', '', $email_address); // Strip spaces

      // Only output a link if the cleaned email address is a valid address
      if ( isValidEmail( $cleaned_email_address ) ) {
        $tag_value = '<a href="mailto:' . $cleaned_email_address . '" target="_blank">' . $email_address . '</a>';
      } else {
        $tag_value = $email_address;
      }

    }
  }
  return $tag_value;
}, 10, 3 );
```

### Create a dynamic tag to output a clickable phone number link

The following example shows how to create a custom dynamic tag 
```
{{ phonenumberlink}}
```

 that outputs a clickable phone number link in a Listing Builder listing. It assumes your posts have a phone number stored as a string value in an [ACF custom field](/help-center/using-facetwp-with/advanced-custom-fields/). It only outputs the link if the post has a phone number entered.

A clickable phone number would look like this: [123-456-7890](tel:1234567890). The HTML for this phone number would look like this:

```
<a href="tel:1234567890">123-456-7890</a>
```

And for an international number [+31 6 1234 5678](tel:+31612345678), formatted with spaces instead of dashes, it would look like this:

```
<a href="tel:+31612345678">+31 6 1234 5678</a>
```

Note that the 
```
href
```

 attribute value starts with 
```
tel:
```

. The phone number that follows should not have any spaces, dashes, or other characters. Except international numbers, which may start with a 
```
+
```

 sign.

To create a custom dynamic tag to output phone numbers like this, add the following code to your (child) theme’s functions.php. Make sure to replace 
```
my_phone_number_field
```

 in [line 5](#example-phone-number-link-L5) with the name of your ACF custom field that contains the phone number.

The code first gets the phone number string value from the ACF phone number field, and removes all non-numeric characters (including spaces and dashes), except any 
```
+
```

 sign(s). It then removes any 
```
+
```

 sign that is not at the beginning of the string.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Create a {{ phonenumberlink }} custom dynamic tag that conditionally outputs a clickable phone number, if the 'my_phone_number_field' is not empty
add_filter( 'facetwp_builder_dynamic_tag_value', function( $tag_value, $tag_name, $params ) {
  if ( 'phonenumberlink' == $tag_name ) {

    $storedphonenumber = get_field( 'my_phone_number_field', $params['post']->ID );  // Replace 'my_phone_number_field' with the name of your ACF phone number field

    if ( $storedphonenumber ) { // If this post has a phone number entered in the 'my_phone_number_field' field

      // Remove all non-numeric characters except "+"
      $cleanedphonenumber = preg_replace( '/[^0-9+]/', '', $storedphonenumber );

      // If the number starts with '+' and has other '+' signs, remove the non-leading '+'
      $cleanedphonenumber = preg_replace( '/(?<!^)\+/', '', $cleanedphonenumber );

      // Create the dynamic tag's output HTML
      $tag_value = '<a href="tel:' . $cleanedphonenumber . '" class="phonenumber">' . $storedphonenumber . '</a>';

    }

  }
  return $tag_value;
}, 10, 3 );
```

![Add a custom-made dynamic tag to an HTML item to output a clickable phone number.](https://facetwp.com/wp-content/uploads/2025/06/phonenumberlink-dynamictag.png)Add a custom-made dynamic tag to an HTML item to output a clickable phone number.
With this code in place, go to your Listing Builder listing, add an HTML item, and add the 
```
{{ phonenumberlink }}
```

 custom dynamic tag to its content field, as shown in the image on the right.

This tag will now output the clickable phone number as an 
```
<a>
```

 tag with class 
```
phonenumber
```

, in each post item that has a value for the phone number field.

### Create a dynamic tag that outputs terms as classes

The following example creates a custom dynamic tag 
```
{{ resource_type }}
```

 that outputs the terms of the 
```
resource-type
```

 taxonomy for the current post. The terms are output as space-separated slugs, to be used as classes in an HTML builder element in a [Listing Builder](/help-center/listing-templates/listing-builder/) listing.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_dynamic_tag_value', function( $tag_value, $tag_name, $params ) {
  if ( 'resource_type' == $tag_name ) {
    $terms = wp_get_post_terms( $params['post']->ID, 'resource-type', array( 'fields' => 'slugs' ) );
    $tag_value = implode( ' ', $terms );
  }
  return $tag_value;
}, 10, 3 );
```

This new dynamic tag can now be used in an HTML builder item. The following HTML adds a 
```
<div>
```

 with the post type and all current terms from the 
```
resource-type
```

 taxonomy as classes. Note that  
```
{{ post:type }}
```

 is a [built-in dynamic tag](/help-center/listing-templates/listing-builder/#built-in-dynamic-tags).

```
<div class="{{ post:type }} {{ resource_type }}"></div>
```

### Create a dynamic tag that outputs the featured image, with a link only for some posts

Say you want to create a listing that displays featured images of team member posts, each linked to their single post. And that, for some team members (like the office cat), you want only the image to display, without the link.

The following example shows how to create a 
```
{{ teamimage }}
```

 custom dynamic tag that outputs the linked images, except for the post IDs in the array in [line 5](#example-featured-image-with-link-L5), for which it outputs just the image, with no link. The [image size](https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/#image-sizes) (here 
```
full
```

) can be customized in line [line 7](#example-featured-image-with-link-L7) and [line 9](#example-featured-image-with-link-L9).

After adding the code to your (child) theme’s functions.php, this new 
```
{{ teamimage }}
```

 dynamic tag can now be used in an HTML builder item.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Create a {{ teamimage }} custom dynamic tag that outputs the featured image, with a link only for some posts
add_filter( 'facetwp_builder_dynamic_tag_value', function( $tag_value, $tag_name, $params ) {
  if ( 'teamimage' == $tag_name ) {
    $postid = get_the_ID();
    $posts_with_no_link = [ 100, 101, 102 ]; // The post IDs for which only the image is shown, without the link to the post
    if ( in_array( $postid, $posts_with_no_link ) ) {
      $tag_value = '<img src="' . get_the_post_thumbnail_url( $params['post']->ID, 'full' ) . '"/>';
    } else {
      $tag_value = '<a href="' . get_permalink( $params['post']->ID ) . '"><img src="' . get_the_post_thumbnail_url( $params['post']->ID, 'full' ) . '"/></a>';
    }
  }
  return $tag_value;
}, 10, 3 );
```

### Output a parsed shortcode with a custom dynamic tag

Say you have an existing shortcode 
```
[my-shortcode post_id="123"]
```

 that uses a post ID attribute to do something with it in the shortcode’s output. And now you want to use this shortcode in a Listing Builder listing item.

You may try using the [built-in dynamic tag](/help-center/listing-templates/listing-builder/#built-in-dynamic-tags) 
```
{{ post_id }}
```

, like this:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info// this does NOT work
[my-shortcode post_id="{{ post:id }}"]
```

You’ll notice that this does not work: the dynamic tag is not replaced before parsing the shortcode. The solution is to create a custom dynamic tag that parses the shortcode:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_dynamic_tag_value', function( $tag_value, $tag_name, $params ) {
  if ( 'my-shortcode' == $tag_name ) {
    $tag_value = do_shortcode( '[my-shortcode post_id="'.$params['post']->ID.'"]' );
  }
  return $tag_value;
}, 10, 3 );
```

Now you can use the new custom dynamic tag 
```
{{ my-shortcode }}
```

 directly in a Listing Builder listing item, instead of the shortcode. The tag will parse the shortcode with the post ID as input and will output whatever the output of the shortcode was.

## Modify existing dynamic tags

Below are a few examples of how to modify the output of existing tags and how to apply them:

### Change the image size for the built-in ‘post:image’ tag

This example changes the image size used by the [built-in](/help-center/listing-templates/listing-builder/#built-in-dynamic-tags) 
```
{{ post:image }}
```

 dynamic tag, from the default 
```
full
```

 to the 
```
medium
```

 size. You can use any [default or custom-made WordPress image size](https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/#image-sizes).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_dynamic_tag_value', function( $tag_value, $tag_name, $params ) {
  if ( 'post:image' == $tag_name ) {
    $tag_value = get_the_post_thumbnail_url( $params['post']->ID, 'medium' ); // Default size is 'full'
  }
  return $tag_value;
}, 10, 3 );
```

### Change the image size for the built-in ‘post:image’ tag with fallback image

The example does the same as the previous example, but with a fallback image. Change 
```
http://example.com/image.jpg
```

 to an image to use when no image URL is found:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_dynamic_tag_value', function( $tag_value, $tag_name, $params ) {
  if ( 'post:image' == $tag_name ) {
    $tag_value = ( $image = get_the_post_thumbnail_url( $params['post']->ID, 'medium' ) ) ? esc_url( $image ) : 'http://example.com/image.jpg'; // Default size is 'full'
  }
  return $tag_value;
}, 10, 3 );
```

### Modify the post title with the built-in ‘post:title’ tag

This example uses the [built-in](/help-center/listing-templates/listing-builder/#built-in-dynamic-tags) 
```
{{ post:title }}
```

 dynamic tag, and modifies it to prepend the post title with “Sale: ” if a product has the term “sale” selected in the Product Category (
```
product_cat
```

) taxonomy:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_dynamic_tag_value', function( $tag_value, $tag_name, $params ) {
  if ( 'post:title' == $tag_name && has_term('sale', 'product_cat')) {
    $tag_value = 'Sale: '. get_the_title( $params['post']->ID);
  }
  return $tag_value;
}, 10, 3 );
```

### Modify a custom dynamic tag made within the Listing Builder

This example shows how you can modify the value of a dynamic tag that was made with a hidden builder item [within the Listing Builder itself](/help-center/listing-templates/listing-builder/#create-dynamic-tags-within-the-listing-builder).

![Creating a dynamic tag from a custom field in the Listing Builder.](https://facetwp.com/wp-content/uploads/2022/09/listing_builder_dynamic_tag_price_example-v2.png)Creating a dynamic tag from a custom field in the Listing Builder.
The created dynamic tag 
```
{{ product_price }}
```

 pulls the price from the 
```
Price
```

 custom field. The example below shows how to modify the output of this tag so that the price is prepended with a 
```
€
```

 currency sign:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_dynamic_tag_value', function( $tag_value, $tag_name, $params ) {
  if ( 'product_price' == $tag_name) {
    $tag_value = '€ '. $tag_value;
  }
  return $tag_value;
}, 10, 3 );
```

## Using a custom dynamic tag in the Listing Builder

An example of how to use two of the above examples in the [Listing Builder](/help-center/listing-templates/listing-builder/) would be to create an HTML builder item with [the modified post title](#modify-the-post-title-with-the-built-in-posttitle-tag) in a 
```
<h3>
```

 heading, and a 
```
div
```

 that uses [the featured image url](#change-the-image-size-for-the-built-in-postimage-tag) as CSS background image:

![A Listing Builder HTML item with custom image tag as a CSS background image.](https://facetwp.com/wp-content/uploads/2022/08/listingbuilder-html-2-tags.png)A Listing Builder HTML item with a “post:title” dynamic tag as title, and a “post:image” tag as CSS background image.
[More examples](https://gist.facetwp.com/?_keywords=facetwp_builder_dynamic_tag_value)

    
## See also

    - [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [The facetwp_builder_dynamic_tags hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tags/)
- [The facetwp_builder_item_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_item_value/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)

                    Last updated: September 10, 2025

---

## facetwp_builder_dynamic_tags

**Source:** [https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tags/](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tags/)

## Overview

This filter lets you create your own custom dynamic tags, to be used in the [Listing Builder](/help-center/listing-templates/listing-builder/).

This hook calculates the values for each tag automatically for each post, whether the post uses them or not. For this reason consider using the [facetwp_builder_dynamic_tag_value](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/) hook instead, which calculates values only if a post uses the tag, which is more efficient.

## Parameters

- **$tags** | array | An associative array of tags and their values
- **$params** | array | An associative array of extra data (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$tags = [
  'post:id' => $post->ID,
  'post:name' => $post->post_name, // slug
  'post:type' => $post->post_type,
  'post:title' => $post->post_title,
  'post:url' => get_permalink()
];
```

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'layout' => $layout, // the raw layout data for this template
  'post' => $post // the current post
];
```

## Create new custom dynamic tags

Below are a few examples of how to create your own custom tags. You can make up the tag name yourself, 
```
{{ myamazingtag }}
```

 is entirely valid.

### Dynamic tag for a custom field

The following example creates a dynamic tag from an [ACF](/help-center/using-facetwp-with/advanced-custom-fields/) custom field named 
```
first_name
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_dynamic_tags', function( $tags, $params ) {
  $tags['acf:firstname'] = get_field( 'first_name', $params['post']->ID );
  return $tags;
}, 10, 2 );
```

Then within the [Listing Builder](/help-center/listing-templates/listing-builder/), you can use 
```
{{ acf:firstname }}
```

.

### Dynamic tag for the featured image

This example retrieves the URL of the featured image at a specified size. The size in the example, 
```
medium
```

, can be changed to any [default or custom WordPress image size](https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/#image-sizes):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_dynamic_tags', function( $tags, $params ) {
  $tags['attachment:url'] = wp_get_attachment_image_url( get_post_thumbnail_id(), 'medium' );
  return $tags;
}, 10, 2 );
```

Then within the [Listing Builder](/help-center/listing-templates/listing-builder/), you can use 
```
{{ attachment:url }}
```

.

Note:You can also accomplish this by modifying the built-in 
```
{{ post:image }}
```

 tag [with the facetwp_builder_dynamic_tag_value hook](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/#change-the-image-size-for-the-built-in-postimage-tag).

### Dynamic tag for the featured image with fallback image

The example below creates the same dynamic tag as the previous example, but with a fallback image. Change 
```
http://example.com/image.jpg
```

 to an image to use when no image URL is found:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_dynamic_tags', function( $tags, $params ) {
  $tags['attachment:url'] = ( $image = wp_get_attachment_image_url( get_post_thumbnail_id(), 'medium' ) ) ? esc_url( $image ) : 'http://example.com/image.jpg';
  return $tags; 
}, 10, 2 );
```

Then within the [Listing Builder](/help-center/listing-templates/listing-builder/), you can use 
```
{{ attachment:url }}
```

.

## Using a custom dynamic tag in the Listing Builder

An example of how to use the above example in the [Listing Builder](/help-center/listing-templates/listing-builder/) would be to create an HTML builder item with a 
```
div
```

 that uses [the featured image url](#dynamic-tag-for-the-featured-image) as CSS background image:

![A Listing Builder HTML item with custom image tag as CSS background image](https://facetwp.com/wp-content/uploads/2022/09/listingbuilder-html-v2.png)A Listing Builder HTML item with a custom image url tag as CSS background image.
[More examples](https://gist.facetwp.com/?_keywords=facetwp_builder_dynamic_tags)

    
## See also

    - [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [The facetwp_builder_dynamic_tag_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/)
- [The facetwp_builder_item_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_item_value/)

                    Last updated: May 2, 2023

---

## facetwp_builder_item_value

**Source:** [https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_item_value/](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_item_value/)

## Overview

This filter lets you modify the output value of a [Listing Builder](/help-center/listing-templates/listing-builder/) item.

## Parameters

- **$value** | mixed | The item value
- **$item** | array | An associative array of item data:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$item = [
  'source' => 'cf/photo_url',
  'settings' => [
    'prefix' => '',
    'suffix' => '',
    'is_hidden' => false,
    'name' => 'photo_url',
    'css_class' => '',
    // other settings based on the item type
  ]
];
```

Within this hook, you also have access to the current post, for example:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoglobal $post;
$post_id = $post->ID;

$post_id = get_the_ID();
$post_url = get_the_permalink();
```

Another feature that makes this hook very powerful is that you can use [built-in](/help-center/listing-templates/listing-builder/#built-in-dynamic-tags) and [custom dynamic tags](/help-center/listing-templates/listing-builder/#create-dynamic-tags-within-the-listing-builder) within it. The built-in tags get post properties like the URL or title. Custom dynamic tags can get content from other (hidden) builder items, which gives you access to content from custom fields:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// built-in dynamic tags
{{ post:id }} // Returns the post’s id
{{ post:name }} // Returns the post’s name (slug)
{{ post:type }} // Returns the post’s type
{{ post:title }} // Returns the post’s title
{{ post:url }} // Returns the post’s url
{{ post:image }} // Returns the post’s featured image (in "full”" size).

// custom dynamic tags
{{ my-builder-item-name }}
```

Check out [the example below](#use-dynamic-tags) to see how to implement these dynamic tags.

## Examples

Below are a few examples that show how versatile this hook makes the Listing Builder, and how creative you can get.

### Limit a builder item to a number of characters

This example takes a Post Excerpt builder item, limits its output to 120 *characters*, and appends an ellipsis between parentheses (…) to the end of the string:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( 'post_excerpt' == $item['source'] ) {
    $value = substr( $value, 0, 120 ).' (&hellip;)';
  }
  return $value;
}, 10, 2 );
```

Be aware that the above example can cause problems if the excerpt string contains HTML. The 
```
substr
```

 function trims to the set number of characters. It does not recognize HTML and could leave broken HTML tags.

If you have HTML in your excerpts, you could also use 
```
wp_trim_words
```

 to trim the item to a specific number of words:

### Limit a builder item to a number of words

This example selects a builder item by name and limits its output to 8 *words* (not characters) with the [wp_trim_words](https://developer.wordpress.org/reference/functions/wp_trim_words/) function. It uses the third parameter of this function to append an ellipsis between parentheses (…) after the last word:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( 'my-excerpt' == $item['settings']['name'] ) {
    $length = 8; // set the number of words
    $more =  ' (&hellip;)'; // append an ellipsis between parentheses (…) after the last word
    $value = wp_trim_words( $value, $length, $more );
  } 
  return $value;
}, 10, 2 );
```

### Add a read more link to a Post Excerpt builder item

This example takes a Post Excerpt builder item, trims it to 8 words, then adds an ellipsis between parentheses (…) and a “read more” link to the post URL:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( 'post_excerpt' == $item['source'] ) {
    $length = 8; // set the number of words
    $more  = '<a href="' . get_permalink() . '" class="readmorelink"> (&hellip;) read more</a>'; // Append an ellipsis with a read more link to the post URL
    $value = wp_trim_words( $value, $length, $more );
  }
  return $value;
}, 10, 2 );
```

### Change the date format from a custom field

The following example takes the value from a builder item made from a custom field with a date/time string, and changes the format:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( 'date-field' == $item['settings']['name'] ) {
    $value = date_create( $value );
    $value = date_format( $value, "d-m-Y" );
  }
  return $value;
}, 10, 2 );
```

### Using array fields – output a comma-separated string with line breaks instead

If the source of the builder item is a custom field that outputs an array (for example an [ACF Checkboxes or Taxonomy field](/help-center/using-facetwp-with/advanced-custom-fields/)), FacetWP will automatically output the array values as a comma-separated string. This array-to-string conversion takes place **after** the 
```
facetwp_builder_item_value
```

 hook has already run. So if you want to override this comma-separated string output, you’ll have to do the array-to-string conversion within the hook itself.

The following example shows how to convert the array output from the 
```
my-item-name
```

 builder item to a string with 
```
<br/>
```

 tags, making each item display on its own line. The delimiter can be changed to any character or HTML:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( $item['settings']['name'] == 'my-item-name' ) { // Change "my-item-name" to the name of your builder item.
    if ( is_array( $value ) && ! empty( $value ) ) {
      return implode( '<br />', $value ); // '<br />' is the delimiter. This can be changed to any character or HTML.
    } else {
      return '';
    }
  }
  return $value;
}, 1000, 2 ); // Use priority 1000 for ACF array fields.
```

Note that for this to work on all types of ACF array fields, the hook needs to run at priority 
```
1000
```

, because FacetWP’s own processing of ACF custom field values also uses this hook, at priority 
```
999
```

.

### Add a link to specific builder items

Some builder item types [have their own “Link” setting](/help-center/listing-templates/listing-builder/#add-links-with-a-setting) to link them to the post URL (or a custom URL), but others, like the ones made from [Advanced Custom Fields](/help-center/using-facetwp-with/advanced-custom-fields/) or [Pods](/help-center/using-facetwp-with/pods/) custom fields, do not. This hook can be used to add a link to those kinds of items.

The following example adds a link to the builder item with the name 
```
my-item-name
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<?php
// replace 'my-item-name' with the name of your builder item
add_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if($item['settings']['name'] == 'my-item-name') {
    return '<a href="' . get_permalink() . '">' . $value . '</a>';
  }
  return $value;
}, 10, 2 );
```

Within the hook you can also access other post properties. You could for example retrieve the post ID with 
```
get_the_ID()
```

 in order to link each item to an external website with the post ID as part of the link:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<?php
// replace 'my-item-name' with the name of your builder item
add_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( $item['settings']['name'] == 'my-item-name' ) {
    return '<a href="https://my-other-website.com/products/' . get_the_ID() . '" target="_blank" rel="nofollow noopener">' . $value . '</a>';
  }
  return $value;
}, 10, 2 );
```

### Add a post author link to a Post Author builder item

![A Post Author builder item returning the author ID.](https://facetwp.com/wp-content/uploads/2024/01/post_author_builder_item.png)A Post Author builder item returning the author ID.
The following example shows how to add a post author link to a Post Author builder item.

First, set your Post Author Listing Builder item’s ‘Author field’ setting to ‘User ID’, as shown in the image on the right. Also give the item a unique name.

Then add the following snippet to your (child) theme’s functions.php, and replace 
```
my-author-item
```

 with the ‘Unique name’ of your Post Author builder item:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Set your Post Author Listing Builder item's 'Author field' setting to 'User ID'
// Replace 'my-item-name' with the 'Unique name' of your Post Author builder item
add_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if( $item['settings']['name'] == 'my-author-item' ) {
    $author_id = $value;
    $author_link = get_author_posts_url( $author_id );
    $author_name = get_the_author_meta( 'display_name', $author_id );
    return '<a href="' . $author_link . '">'. $author_name . '</a>';  
  }
  return $value;
}, 10, 2 );
```

### Add a custom class to a specific builder item of specific posts

The following example shows how to add a custom class to a specific builder item of selected posts only.

For example, say you have a “Featured Image” builder item with its “Link” setting set to “Post URL”. And say you want *some* posts in the listing to **not** have the link around the image.

The code below wraps the specified builder item of these posts in a container 
```
<div>
```

 with class 
```
no-link
```

. This class can then be used to set 
```
pointer-events: none;
```

 with CSS, which disables the link for these posts.

Replace 
```
my-item-name
```

 in [line 2](#add-custom-class-to-some-items-L2) with the “Unique name” of your builder item. Then, in [line 4](#add-custom-class-to-some-items-L4) customize the array that contains the post IDs for which you want to add the container with the class.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( $item['settings']['name'] == 'my-item-name' ) { // Change 'my-item-name' to the Unique name of your item
    $postid = get_the_ID();
    $posts = [ 101, 102, 103 ]; // The post IDs for which the class is added
    if ( in_array( $postid, $posts ) ) {
      $value = '<div class="no-link">'. $value.'</div>';
    }
  }
  return $value;
}, 10, 2 );

add_action( 'facetwp_scripts', function() {
  ?>
  <style>
    .fwpl-item .no-link a {
      pointer-events: none; /* Disable these links */
    }
  </style>
  <?php
}, 100 );
```

Alternatively, you could [create a custom dynamic tag that outputs the featured image, with a link only for some posts](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/#create-a-dynamic-tag-that-outputs-the-featured-image-with-a-link-only-for-some-posts).

### Use shortcodes in builder items

FacetWP will automatically parse shortcodes in “Post Content” and [“HTML” builder items](https://facetwp.com/help-center/listing-templates/listing-builder/#use-shortcodes-in-html-builder-items). The following code shows how to use the 
```
facetwp_builder_item_value
```

 hook to tell FacetWP to parse shortcodes in *other* builder item types.

As shown in [lines 3-16](#parse-shortcodes-in-builder-items-L3-L16) you can select the item by its 
```
$item[source]
```

. FacetWP will then parse all shortcodes in all builder items with that source. A quick way to find the exact source name is by typing 
```
FWP.settings.debug.template.layout.items
```

 in the browser console (with [Debug Mode enabled](/help-center/troubleshooting/#enable-debug-mode)), and clicking open the items arrays.

![A Listing Builder item's 'Unique name' field.](https://facetwp.com/wp-content/uploads/2025/04/listing-builder-item-unique-name.png)A Listing Builder item’s “Unique name” field.
Another way to select an item is by its name, as specified in the item’s “Unique name” field in the Listing Builder’s right column, when the item is selected. By default the name is a string of random characters, which can be customized. An example is shown in the image on the right, and in [lines 19-21](#parse-shortcodes-in-builder-items-L19-L21).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {

    // Parse shortcodes in "Post Title" builder items
    if ( 'post_title' == $item['source'] ) {
        $value = do_shortcode( $value );
    }
    
    // Parse shortcodes in "Post Excerpt" builder items
    if ( 'post_excerpt' == $item['source'] ) {
        $value = do_shortcode( $value );
    }

    // Parse shortcodes in builder items based on a specific custom field
    if ( 'acf/field_67f39c1f3857b' == $item['source'] ) {
        $value = do_shortcode( $value );
    }

    // Parse shortcodes in builder items with a specific "Unique name"
    if ( 'el-e2alfw' == $item['settings']['name'] ) {
        $value = do_shortcode( $value );
    }

    return $value;
}, 10, 2 );
```

### Add a WooCommerce “Add to cart” button to product listing items

![Add a builder item in the Listing Builder with the Unique name 'add-to-cart'.](https://facetwp.com/wp-content/uploads/2024/01/add-to-cart-button-item.png)Add a builder item in the Listing Builder with the Unique name 
```
add-to-cart
```

.
To add a WooCommerce “Add to cart” button to each product in a product listing, add a Listing Builder item (any type will work, e.g. a Button or HTML item), and set its ‘Unique name’ to 
```
add-to-cart
```

.

Then, add the following snippet to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( 'add-to-cart' == $item['settings']['name'] ) {
    global $post;
    $value = do_shortcode( '[add_to_cart id="' . $post->ID . '"]' );
  }
  return $value;
}, 10, 2 );
```

### Use dynamic tags

The following example demonstrates how to use [dynamic tags](/help-center/listing-templates/listing-builder/#using-dynamic-tags) within this hook. In this case we used two types of tags: a [built-in dynamic tag](/help-center/listing-templates/listing-builder/#built-in-dynamic-tags), 
```
{{ post:url }}
```

, which generates the post URL in the 
```
href
```

 attribute. And a [custom dynamic tag](/help-center/listing-templates/listing-builder/#create-dynamic-tags-within-the-listing-builder), 
```
{{ my-item-price }}
```

, made from a separate (hidden) builder item by that name, which retrieves the price from a custom field. The resulting output is a link to the post URL with the link text containing the value of the 
```
my-item-name
```

 builder item (which could be the post title), plus the price.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<?php
// replace 'my-item-name' and 'my-item-price' with the names of your builder items
add_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( $item['settings']['name'] == 'my-item-name' ) {
    return '<a href="{{ post:url }}">' . $value . ' - $ {{ my-item-price }}</a>';
  }
  return $value;
}, 10, 2 );
```

### Output a simple HTML5 audio player from a file upload field

This creative example outputs a simple HTML5 audio / mp3 player using a builder item made from an [ACF](/help-center/using-facetwp-with/advanced-custom-fields/) file upload field. The builder item needs to have the ‘Unique name’ 
```
mp3-preview
```

.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<?php
add_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( 'mp3-preview' == $item['settings']['name'] ) {
    if ( is_array( $value ) && ! empty( $value['url'] ) ) {
      $src   = $value['url'];
      $value = '<audio controls>';
      $value .= '<source src="' . $src . '" type="audio/mpeg">';
      $value .= 'Your browser does not support the audio element.';
      $value .= '</audio>';
    }
  }
  return $value;
}, 10, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_builder_item_value)

    
## See also

    - [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [The facetwp_builder_dynamic_tags hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tags/)
- [The facetwp_builder_dynamic_tag_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/)
- [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)

                    Last updated: September 10, 2025

---

## facetwp_facet_display_value

**Source:** [https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/)

## Overview

With this hook you can modify the display value (the label) of specific facet choices.

This is a very versatile hook. It can for example be used to [customize the HTML output of facet choices](#add-a-span-with-class-around-facet-choices), to [add a prefix or suffix to facet choice labels](#add-a-prefix-or-suffix-to-facet-choice-labels), to [create a facet with images](#display-facet-choices-as-images), [display term data in facet choices](#use-the-term-description-as-facet-choice-label), or to [translate facet choices](#customize-or-translate-facet-choices).

Note:This hook is meant to customize the facet display values, which are output as the front-end facet choices. To customize the [the bare indexed values](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#how-it-works) of the facets’ data source fields, [use the facetwp_index_row hook](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/) instead (or use them together).

## Parameters

- **$label** | string | The facet choice label (text or HTML)
- **$params** | array | An associative array of facet settings and indexed facet choice data (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'selected' => false, // [bool] - true if this choice is selected, false otherwise
  'facet' => [
    'name' => 'brand', // [string - The facet's name
    'label' => 'Brand', // [string] - The facet's label
    'type' => 'radio', // [string] - The facet's type
    'source' => 'tax/brand', // [string] - The facet's data source
    // + all other facet-specific settings
  ],
  'row' => [
    'facet_value' => 'alfa-romeo', // [string] - The technical "raw" value as indexed and displayed in the URL after selecting this choice
    'facet_display_value' => 'Alfa Romeo', // [string] - The facet choice label as indexed
    'term_id' => '456', // [string] - The term ID. Only if the data source is a taxonomy. Default: 0
    'parent_id' => '123', // [string] - The parent ID. Only if the data source is a hierarchical taxonomy. Default: 0
    'depth' => '1', // [int or string] - The hierarchical depth level. Only if the data source is a hierarchical taxonomy. Default: 0
    'counter' => '5' // [string] - The facet choice count
    'order' => '10' // [int or string] - The facet choice order number. Can be dot-separated (e.g. '20.10.5') for hierarchical facets
    'is_choice' => true // [bool] - If the choice is a choice and not a label (only in Hierarchy facets)
    'overflow' => false // [bool] - If the choice is a choice hidden by the 'Soft limit' setting (only in Color facets)
  ]
];
```

Each row in the 
```
facetwp_index
```

 database table [consists of nine columns](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#how-it-works), in which all values are stored for a specific facet choice. This hook has access to most of these values, stored within the 
```
$params['row']
```

 array ([see all available values above](#facet-params-L10-L20)). It also has access to other data, some of which is facet-type specific.

Normally, a facet choice’s label is the 
```
facet_display_value
```

 indexed for that choice. This value is available in this hook via 
```
$params['row']['facet_display_value']
```

. The following examples demonstrate how you can replace this label with something else, if needed based on available data in the hook’s 
```
$params
```

 array.

## Usage examples

### Add a span with class around facet choices

The following example adds a 
```
<span>
```

 around each facet choice label, with the facet choice’s 
```
facet_value
```

 as its class name:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_display_value', function( $label, $params ) {
  if ( 'my_facet_name' == $params['facet']['name'] ) { // Replace "my_facet_name" with the name of your facet
    $val = $params['row']['facet_value'];
    $label = '<span class="' . $val . '">' . $label . '</span>';
  }
  return $label;
}, 20, 2 );
```

#### Add HTML output to fSelect facet choices

When you are using an [fSelect facet type](/help-center/facets/facet-types/fselect/), any HTML will be automatically stripped away from the facet choice label output. To prevent this, add an 
```
esc_html()
```

 function around the output, as follows:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_display_value', function( $label, $params ) {
  if ( 'my_facet_name' == $params['facet']['name'] ) { // Replace "my_facet_name" with the name of your facet
    $val = $params['row']['facet_value'];
    $label = esc_html('<span class="' . $val . '">' . $label . '</span>');
  }
  return $label;
}, 20, 2 );
```

### Add a prefix or suffix to facet choice labels

For some data source types, you may want to add a prefix or suffix to each facet choice. For example, if the data is stored in an [ACF](/help-center/using-facetwp-with/advanced-custom-fields/) [Number field](https://www.advancedcustomfields.com/resources/number/), but it’s actually a price or a weight. In those instances, you may want to prepend the choice label with a currency sign,e.g. 
```
€
```

, or append it with 
```
kg
```

.

With the 
```
facetwp_facet_display_value
```

 hook, this is very easy to do. You can prepend or append any text you like. You can also use HTML, as shown below.

Note:Some facet types already have a prefix or suffix setting of their own, like the [Slider facet type](/help-center/facets/facet-types/slider/#prefix), and the [Exclude facet type](/help-center/facets/facet-types/exclude/#prefix).

#### Add a prefix

The following example **prepends** a 
```
€
```

 sign inside a 
```
<strong>
```

 tag, followed by a space.

Add the code to your (child) theme’s functions.php, and make sure to replace 
```
my_facet_name
```

 in [line 2](#prepend-facet-choice-L2) with the name of your facet:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_display_value', function( $label, $params ) {
  if ( 'my_facet_name' == $params['facet']['name'] ) { // Replace "my_facet_name" with the name of your facet
    $label = '<strong>€</strong> ' . $label; // Add a bold "€ " prefix to each facet choice label
  }
  return $label;
}, 20, 2 );
```

#### Add a suffix

The following example **appends** 
```
kg
```

 (preceded by a space) to a weight value:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_display_value', function( $label, $params ) {
  if ( 'my_facet_name' == $params['facet']['name'] ) { // Replace "my_facet_name" with the name of your facet
    $label = $label . ' kg'; // Add a  " kg" suffix to each facet choice label
  }
  return $label;
}, 20, 2 );
```

#### Add a prefix or suffix using facet or choice parameters as condition

You can also pre- or append something to the facet choice label **conditionally**, using the data that is available for each choice in [the hook’s parameters](#parameters). Below are two examples.

The following example uses the 
```
$params['selected']
```

 parameter to prepend a 
```
✓
```

 check mark to **the selected choice** of a specific facet:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_display_value', function( $label, $params ) {
  if ( 'my_facet_name' == $params['facet']['name'] ) { // Replace "my_facet_name" with the name of your facet
    if ( $params['selected'] ) {
      $label = '<strong>&check;</strong> ' . $label; // Prepend a "✓ " check mark to each selected facet choice label in this facet
    }
  }
  return $label;
}, 20, 2 );
```

And the following example appends 
```
m2
```

 to each facet label choice that is **at the hierarchical depth level** of 
```
1
```

 (which is the first child level).

Note that his 
```
depth
```

 value is only available in facet types that support using a [hierarchical taxonomy](/help-center/developers/facetwp-and-taxonomies/#what-is-a-hierarchical-taxonomy) as data source, like a Checkboxes facet with its [“Hierarchical” setting](/help-center/facets/facet-types/checkboxes/#hierarchical) enabled.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_display_value', function( $label, $params ) {
  if ( 'checkboxes' == $params['facet']['name'] ) { // Replace "my_facet_name" with the name of your facet
    if ( $params['row']['depth'] == 1 ) {
      $label = $label . ' m<sup>2</sup>'; // Append " m2" to each facet selected choice label with hierarchical depth level 1
    }
  }
  return $label;
}, 20, 2 );
```

### Display facet choices as images

FacetWP does not have a dedicated image facet. But you can use the 
```
facetwp_facet_display_value
```

 hook to display any facet’s choices as icons or images.

The following example shows how to do this for facets based on a taxonomy or custom text field, using the indexed term or field value in the image file name. Note that it is also possible to [create an image facet based on an Advanced Custom Fields Image field type](/help-center/using-facetwp-with/advanced-custom-fields/#create-an-image-facet), using the selected images directly.

Add the following code to your (child) theme’s functions.php. Make sure to replace 
```
vehicle_type
```

 in [line 4](#use-images-L4) with the name of your facet. Also change the directory in [line 10](#use-images-L10) to a folder within your theme, in which you place your images. In this example we use SVGs.

The icon/image names are based on each facet choice’s 
```
facet_value
```

, e.g. “car”, “truck”, “suv”. The 
```
facet_value
```

 of a choice is its technical “raw value” that can be seen in the URL parameter of the facet when you select that choice.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_display_value', function( $label, $params ) {

  // Only apply to a facet named "vehicle_type"
  if ( 'vehicle_type' == $params['facet']['name'] ) { // Repace "vehicle_type" with the name of your facet

    // Get the raw value
    $val = $params['row']['facet_value'];

    // Use the raw value to generate the image URL
    $label = '<img src="/wp-content/themes/yourtheme/images/{val}.svg" alt="{val}" />';
    $label = str_replace( '{val}', $val, $label );
  }
  return $label;
}, 20, 2 );
```

Note:When you are using an [fSelect facet type](/help-center/facets/facet-types/fselect/), any HTML will be automatically stripped away from the facet choice label output. To prevent this, add an 
```
esc_html()
```

 function around the output, as shown in [the above code example](#add-html-output-to-fselect-facet-choices).

### Use the term description as facet choice label

One of the values stored in the 
```
facetwp_index
```

 database table for each facet choice is the 
```
term_id
```

. This value only exists if the facet has a taxonomy set as its data source.

The following example uses this 
```
term_id
```

, stored 
```
$params['row']['term_id']
```

, to look up the term’s description with WP’s [get_term_by()](https://developer.wordpress.org/reference/functions/get_term_by/) function. After sanitizing the value, it sets the description as facet label:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_display_value', function( $label, $params ) {
  if ( 'my_taxonomy_facet' == $params['facet']['name'] ) { // Replace "my_taxonomy_facet" with the name of your taxonomy-based facet
    $term = get_term_by( 'id', $params['row']['term_id'] );
    if ( ! empty( $term ) && ! empty( $term->description ) ) {
      $label = esc_html( $term->description );
    }
  }
  return $label;
}, 10, 2 );
```

### Customize or translate facet choices

To “manually” customize a specific facet choice label (normally its 
```
facet_display_value
```

), just give 
```
$label
```

 another value. For example its translation:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_display_value', function( $label, $params ) {
  if ( 'my_facet_name' == $params['facet']['name'] ) { // Replace "my_facet_name" with the name of your facet
    if ( 'Monday' == $label ) { 
      $label = 'Δευτέρα'; // Change "Monday" to the Greek translation
    }
  }
  return $label;
}, 20, 2 );
```

To translate a facet choice based on the currently set language, you can extend the above code as follows. This example is for when you are [using WPML](/help-center/using-facetwp-with/multilingual/) (use line 7 instead of line 4 for Polylang):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_display_value', function( $label, $params ) {

  if ( 'my_facet_name' == $params['facet']['name'] ) { // Replace "my_facet_name" with the name of your facet

    // Get current language for WPML:
    $lang = ( ! empty( FWP()->facet->http_params['lang'] ) ) ? FWP()->facet->http_params['lang'] : apply_filters( 'wpml_current_language', null );

    // Get current language for Polylang:
    // $lang = ( !empty( FWP()->facet->http_params['lang'] ) ) ? FWP()->facet->http_params['lang'] : pll_current_language(); 
    
    switch ( $lang ) {
      case 'gr' :
        if ( 'Monday' == $label ) {
          $label = 'Δευτέρα'; // translate "Monday" into Greek
        }
        break;
      case 'nl':
        if ( 'Monday' == $label ) {
          $label = 'Maandag'; // translate "Monday" into Dutch
        }
        break;
    }  
  }
  return $label;
}, 20, 2 );
```

Alternatively, you can do the same [using the facetwp_facet_html hook](/help-center/developers/hooks/output-hooks/facetwp_facet_html/#translate-facet-choices), or [the facetwp_facet_render_args hook](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#translate-facet-choices-and-facet-settings). With this last hook, you can not only [directly translate (and re-order) the choices](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#translate-and-re-order-facet-choices), but also [change specific or all facet choice labels into __() translatable strings](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#convert-facet-choices-to-translatable-strings). These can then be translated [with a translation plugin or a gettext filter](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#how-to-translate-dynamically-added-strings).

Also see [this section on the Multilingual page](/help-center/using-facetwp-with/multilingual/#translate-facet-choices) for more info about the recommended way to translate facet choices, which is to translate the facet’s data source itself (the custom field or taxonomy terms).

[More examples](https://gist.facetwp.com/?_keywords=facetwp_facet_display_value)

    
## See also

    - [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [The fSelect facet type](https://facetwp.com/help-center/facets/facet-types/fselect/)
- [The Slider facet type](https://facetwp.com/help-center/facets/facet-types/slider/)
- [The Exclude facet type](https://facetwp.com/help-center/facets/facet-types/exclude/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)
- [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)
- [Indexing](https://facetwp.com/help-center/indexing/)
- [The facetwp_facet_render_args hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/)
- [The facetwp_facet_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_html/)
- [Using FacetWP with WPML or Polylang](https://facetwp.com/help-center/using-facetwp-with/multilingual/)
- [Using the facetwp_i18n hook to translate facet labels and strings](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_i18n/)

                    Last updated: April 23, 2026

---

## facetwp_facet_html

**Source:** [https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_html/](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_html/)

## Overview

This filter lets you modify a facet’s HTML output.

Note:This hook only has access to the HTML of a facet’s **content**. If you want to customize the facet’s **container/placeholder element**, for example to add a custom class or attribute, [use the facetwp_shortcode_html hook](/help-center/developers/hooks/output-hooks/facetwp_shortcode_html/#set-a-custom-facet-class) instead.
Note:If you want to change the facet choices’ HTML, [use the facetwp_facet_display_value hook](/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/) instead.

## Parameters

- **$output** | string | The facet HTML
- **$params** | array | An associative array of facet settings (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'facet' => [
    'name' => 'my_facet',
    'type' => 'checkboxes',
    'source' => 'tax/category',
    // any other facet-specific settings
  ],
  'values' => [], // available for checkbox & dropdown facets
  'selected_values' => [ 100, 101 ]
];
```

## Examples

### Add a class to a facet type

The following code adds a “form-control” CSS class to all [Dropdown facets](/help-center/facets/facet-types/dropdown/):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_html', function( $output, $params ) {
  if ( 'dropdown' == $params['facet']['type'] ) {
    $output = str_replace( 'facetwp-dropdown', 'facetwp-dropdown form-control', $output );
  }
  return $output;
}, 10, 2 );
```

### Translate facet choices

To translate a facet choice based on the currently set language, you can use this hook as follows. This example is for when you are using WPML, with the [Multilingual add-on](/help-center/using-facetwp-with/multilingual/) installed.

For Polylang, use [lines 9-10](#translate-facet-choices-L9-L10) instead of [lines 5-6](#translate-facet-choices-L5-L6).

Make sure to replace 
```
my_facet_name
```

 in  [line 2](#translate-facet-choices-L2) with the name of your facet.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_html', function( $output, $params ) {
  if ( 'my_facet_name' == $params['facet']['name'] ) {

    // For WPML:
    $current = ( !empty( FWP()->facet->http_params['lang'] ) ) ? FWP()->facet->http_params['lang'] :  apply_filters( 'wpml_current_language', null );
    $default = apply_filters('wpml_default_language', NULL );

    // For Polylang, use these 2 lines instead of 2 above
    //$current = ( !empty( FWP()->facet->http_params['lang'] ) ) ? FWP()->facet->http_params['lang'] : pll_current_language();
    //$default = pll_default_language();

    $replace_values = [];
    $replace_values['nl'] = [
      'Belgium' => 'België',
      'Bulgaria' => 'Bulgarije'
    ];
    if ( $current != $default && !empty( $replace_values[$current] ) ) {
      $default_values = [];
      $new_values = [];
      foreach ( $replace_values[$current] AS $replace_value => $replacement ) {
        $default_values[] = $replace_value;
        $new_values[] = $replacement;
      }
      $output = str_replace( $default_values, $new_values, $output );
    }
  }

  return $output;
}, 10, 2 );
```

Alternatively, you can do the same [using the facetwp_facet_display_value hook](/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/#customize-or-translate-facet-choices), or [the facetwp_facet_render_args hook](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#translate-facet-choices-and-facet-settings). With this last hook, you can not only [directly translate (and re-order) the choices](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#translate-and-re-order-facet-choices), but also [change specific or all facet choice labels into __() translatable strings](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#convert-facet-choices-to-translatable-strings). These can then be translated [with a translation plugin or a gettext filter](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#how-to-translate-dynamically-added-strings).

Also see [this section on the Multilingual page](/help-center/using-facetwp-with/multilingual/#translate-facet-choices) for more info about the recommended way to translate facet choices, which is to translate the facet’s data source itself (the custom field or taxonomy terms).

[More examples](https://gist.facetwp.com/?_keywords=facetwp_facet_html)

    
## See also

    - [The facetwp_shortcode_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_shortcode_html/)
- [The facetwp_facet_display_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/)
- [The facetwp_facet_render_args hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/)
- [The Dropdown facet type](https://facetwp.com/help-center/facets/facet-types/dropdown/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [Using FacetWP with WPML or Polylang](https://facetwp.com/help-center/using-facetwp-with/multilingual/)

                    Last updated: February 10, 2026

---

## facetwp_facet_pager_link

**Source:** [https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_pager_link/](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_pager_link/)

## Overview

If your [Pager facet](/help-center/facets/facet-types/pager/) is set to display as [page numbers](/help-center/facets/facet-types/pager/#page-numbers-pager-type), this hook lets you modify the HTML output of the pager links: the numbers, dots, and “Prev”/”Next” links.

Note:To change or translate the various Pager facet labels, you can [use the facetwp_i18 hook](/help-center/facets/facet-types/pager/#translate-the-pager-texts-and-labels), or [the facetwp_facet_render_args hook](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#convert-pager-facet-labels-to-translatable-strings).

## Parameters

- **$html** | string | The pager link HTML
- **$params** | array | An associative array of pager link data (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'page' => 5, // The page link number (integer)
  'label' => 'Next', // The page link text (string, or integer if it is a number)
  'extra_class' => 'last', // The page link extra class: 'first', 'last', 'next', 'prev', 'dots' (string)
];
```

## Usage examples

### Add a class to a pager link

The following example adds a 
```
sr-only
```

 class to the 
```
last
```

 page link:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_pager_link', function( $html, $params ) {
  if ( 'last' == $params['extra_class'] ) {
    $html = str_replace( 'last', 'last sr-only', $html );
  }
  return $html;
}, 10, 2 );
```

### Remove pager links

The following example removes all links from the pager that are not the “Next” or “Prev” link:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_pager_link', function( $html ) {
  if ( ! preg_match('~(prev|next)~', $html) ) {
    return '';
  }
  return $html;
});
```

### Replace or customize the dots

The following example replaces the … dots with dashes:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_pager_link', function( $html, $params ) {
  $html = str_replace( '…', '---', $html );
  return $html;
}, 10, 2 );
```

Or, to override the HTML of (only) the dots part, you can use the following code. This example changes the 
```
<a>
```

 tags around the dots to 
```
<span>
```

 tags, and lets the dots use an ellipsis character between parentheses: 
```
(…)
```

.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_pager_link', function( $html, $params ) {
  if ( '' == $params['page'] ) { // Is only true for the dots part
    $html = '<span class="facetwp-page dots">(&hellip;)</span>';
  }
  return $html;
}, 10, 2 );
```

### Replace all pager links HTML tags

The following example replaces the 
```
<a>
```

 HTML tags of *all* pager links with 
```
<span>
```

 tags:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_pager_link', function( $html ) {
    return str_replace( [ '<a', '/a>' ], [ '<span', '/span>' ], $html );
});
```

## The Pager facet and links for SEO

If you are looking for a way to add 
```
href
```

 attributes with pagination links to the Pager facet for SEO purposes, that is not possible.

If you are concerned about the implications for SEO or accessibility of using the Pager facet’s AJAX-based pagination, read [this section that lists a few possible approaches](/help-center/developers/the-facetwp-url/#facetwp-pagination-seo-and-accessibility).

    
## See also

    - [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The facetwp_pager_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pager_args/)
- [The facetwp_pager_html hook](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_pager_html/)
- [Using the facetwp_i18n hook to translate facet labels and strings](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_i18n/)
- [The facetwp_facet_render_args hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/)
- [The FacetWP URL](https://facetwp.com/help-center/developers/the-facetwp-url/)

                    Last updated: February 10, 2026

---

## facetwp_facet_render_args

**Source:** [https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/)

## Overview

This filter lets you modify the data passed to a facet’s render() method. This is useful if you need to [alter the selected values](#modify-selected-facet-values), or [translate facet settings or facet choices](#translate-facet-choices-and-facet-settings).

## Parameters

- **$args** | array | An associative array of facet render arguments (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$args = [
  'facet' => [
    'name' => 'model_year',
    'label' => 'Model Year',
    'type' => 'checkboxes',
    'source' => 'tax/year',
    ...
  ],
  'where_clause' => 'AND post_id IN (18670,18671,18672,18673,18674)',
  'selected_values' => [
    '2014',
    '2015',
    '2016'
  ],
  // Only available in these facet types: Checkboxes, Radio, Dropdown, fSelect, Hierarchy, Star Rating, Hierarchy Select, Range List, Time Since, Color
  'values' => [
    [0] => [
        ['facet_value'] => '2016',
        ['facet_display_value'] => '2016',
        ['term_id'] => '502',
        ['parent_id'] => '0',
        ['depth'] => '0',
        ['counter'] => '2',
    ],
    // ... etc. All available facet values
  ]
];
```

Note that only the facet types mentioned in [line 15](#args-L15) have the 
```
$args['values']
```

 parameter, as only these facet types have a 
```
load_values()
```

 method.

## Usage examples

### Modify selected facet values

Modify the selected values for a specific facet (e.g. 
```
model_year
```

):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_render_args', function( $args ) {
  if ( 'model_year' == $args['facet']['name'] ) {
    $args['selected_values'] = [ '2015' ];
  }
  return $args;
});
```

### Conditionally remove facet choices

The recommended way to remove facet choices is with the facet’s [value modifiers](/help-center/facets/facet-types/checkboxes/#value-modifiers) (if it has that setting), or [with the facetwp_index_row hook](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#remove-facet-choices), during indexing. But with both of these methods, the choices will never appear in the facet.

To remove facet choice **conditionally**, for example, only on a specific page, template or archive, you can use the 
```
facetwp_facet_render_args
```

 hook. The following example removes the three choices specified in [line 4](#remove-facet-choices-L4) from the facet specified in [line 3](#remove-facet-choices-L3), but only on the category archive specified in [line 2](#remove-facet-choices-L2). For the condition, you can use any [Conditional Tag](https://developer.wordpress.org/themes/basics/conditional-tags/).

Note that in [line 6](#remove-facet-choices-L6) of this example, we filter out the specified facet choices by their 
```
facet_value
```

. This is not the facet choice label as displayed in the facet itself (which is the 
```
facet_display_value
```

), but the indexed raw, technical value of the choice, as displayed in the URL when that choice is selected. If the facet’s data source is a taxonomy, this would be the term slug. See the 
```
facetwp_index_row
```

 page for [more information about the indexing of facet values](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#how-it-works).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_render_args', function( $args ) {
  if ( is_category('my-category' ) ) { // Use any condition tag here.
    if ( 'my_facet_name' == $args['facet']['name'] ) {  // Replace 'my_facet_name' with the name of your facet.
      $excluded_values = ['value_1', 'value_2', 'value_3']; // Exclude these facet values (the raw values as they appear in the URL after filtering).
      foreach ( $args['values'] as $key => $row ) {
        if ( in_array( $row['facet_value'], $excluded_values)  ) {
          unset( $args['values'][$key] ); // Remove these items
        }
      }
      $args['values'] = array_values( $args['values'] ); // Fix the array indexes.
    }
  }
  return $args;
});
```

Note the above code will only work in the facet types mentioned in [line 15 of the above parameters](#args-L15), as only these facet types have the needed 
```
$args['values']
```

 parameter.

### Remove facet choices that are not children of the current term

If you have a category/tag/taxonomy term archive page with a facet on it that uses the same hierarchical category/tag/taxonomy as its data source, the facet will display **all** choices (terms) for which posts on that page have been indexed. And as posts can have multiple terms selected, this can include terms anywhere in the taxonomy’s term hierarchy, not only children of the archive’s current term.

A common question is **how to let the facet display only child terms of the archive’s current term** (with or without the current term itself)? This can be accomplished by using the 
```
facetwp_facet_render_args
```

 to remove all terms from the facet that are not a child term of the current term of the archive template.

![For a facet with a hierarchical location taxonomy on the /category/new-york term archive page, how to only show New York and its child terms (purple frame), and pre-select New York? Or, only show its child terms (green frame)?](https://facetwp.com/wp-content/uploads/2025/03/prefilter-term-archive-page.png)For a facet with a hierarchical location taxonomy on the 
```
/category/new-york
```

 term archive page, how to only show New York and its child terms (purple frame), and pre-select New York? Or, only show its child terms (green frame)?
Using the following code, you can use the same facet on each term archive page (without setting a “Parent term”). The code dynamically removes all terms from the facet that are not a child term of the archive’s current term. This will result in the facet displaying only child terms, on **all hierarchical levels below** the archive’s current term. If you want the facet to display **only the direct child level**, replace the 
```
if
```

 statement on [line 25](#show-current-term-branch-only-L25) with the alternative one on [line 28](#show-current-term-branch-only-L28).

This code works with the following facet types: [Checkboxes](/help-center/facets/facet-types/checkboxes/), [Dropdown](/help-center/facets/facet-types/dropdown/), [Radio](/help-center/facets/facet-types/radio/), [fSelect](/help-center/facets/facet-types/fselect/), [Hierarchy Select](/help-center/facets/facet-types/hierarchy-select/), and [Exclude](/help-center/facets/facet-types/exclude/). It does **not** work with [Hierarchy](/help-center/facets/facet-types/hierarchy/) facets, which do not have the needed 
```
term_id
```

 and 
```
parent_id
```

 in the hook’s arguments.

The code assumes a hierarchical taxonomy for the archive and facet’s data source, but it will work both with the facet’s “Hierarchical” setting enabled and disabled.

Add the code to your (child) theme’s functions.php. Change 
```
my_taxonomy_name
```

 in [line 3](#show-current-term-branch-only-L3) to the name of your taxonomy, and 
```
my_facet_name
```

 in [line 4](#show-current-term-branch-only-L4) to the name of your facet.

If you want the facet to include the archive’s term, in [line 5](#show-current-term-branch-only-L5) set 
```
$keep_current_term
```

 to 
```
true
```

. When you do this, the current term is available to [automatically pre-select it in the facet on page load](/how-to-pre-select-facet-choices/#pre-select-a-facet-choice-for-a-category-tag-or-taxonomy-term-archive), and again [after a reset](/how-to-pre-select-facet-choices/#reset-preselected-value-term-archive).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<?php
add_filter( 'facetwp_facet_render_args', function( $args ) {

  $taxonomy = 'my_taxonomy_name'; // Change 'my_taxonomy_name' to the name of your taxonomy
  $facet    = 'my_facet_name'; // Change 'my_facet_name' to the name of your facet
  $keep_current_term = false; // Set this to true if you want to include the current term

  $is_term_archive = false;

  if ( 'category' === $taxonomy ) {
    $is_term_archive = is_category();
  } elseif ( 'post_tag' === $taxonomy || 'tag' === $taxonomy ) {
    $is_term_archive = is_tag();
  } else {
    $is_term_archive = is_tax( $taxonomy );
  }

  if ( $facet == $args['facet']['name'] && $is_term_archive ) {

    // Exclude the Hierarchy facet
    if ( in_array( $args['facet']['type'], [ 'hierarchy' ] ) ) {
      return $args;
    }

    $current_term = get_queried_object_id();

    if ( ! empty( $args['values'] ) ) {
      $current_term_depth = '0';
      foreach ( $args['values'] as $key => $val ) {
        $term_id = $val['term_id'];
        if ( intval( $term_id ) === $current_term ) {
          $current_term_depth = intval( $val['depth'] );
        }
        
        // This keeps sub-terms of the current term archive page
        if ( $val['parent_id'] && in_array( $current_term, get_ancestors( $val['term_id'], $taxonomy, 'taxonomy' )  )  ) {
            
     // Alternative if-statement: only keep direct children of the current term, no deeper level children:
     // if ( $val['parent_id'] == $current_term ) { 
          
          continue;
          
        // This keeps parent term for current archive page
        } else if ( $keep_current_term && $current_term == $val['term_id'] ) {
          -- $current_term_depth;
          continue;
        } else {
          unset( $args['values'][ $key ] );
        }
      }

      // Shift depths after deleting values
      $depthshift = ++ $current_term_depth;
      array_walk( $args['values'], function( &$item ) use ( & $depthshift ) {
        $newdepth      = intval( $item['depth'] ) - $depthshift;
        $item['depth'] = (string) $newdepth;
      } );
      $args['values'] = array_values( $args['values'] );
    }
  }

  return $args;
} );
```

### Customize a facet setting

The following example shows how to programmatically customize the “[Default radius](/help-center/facets/facet-types/proximity/#radius-default)” setting in a [Proximity facet](/help-center/facets/facet-types/proximity/), only on a specific page.

Make sure to change the page ID on [line 2](#proximity-radius-L2) (or use another [conditional tag](https://codex.wordpress.org/Conditional_Tags)). And change 
```
my_proximity_facet
```

 on [line 3](#proximity-radius-L3) to the name of your Proximity facet:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_render_args', function( $args ) {
  if ( is_page( 4956 ) ) { // Change to your page ID or use another condition
    if ( 'my_proximity_facet' == $args['facet']['name'] ) { // Change 'my_proximity_facet' to the name of your Proximity facet
      $args['facet']['radius_default'] = 300; // Set the default radius
    }
  }
  return $args;
});
```

Note that if the Proximity facet’s “[Radius UI](/help-center/facets/facet-types/proximity/#radius-ui)” setting is set to “Slider”, the custom default radius set in [line 4](#proximity-radius-L4) must be within the range of the “[Range (min)](/help-center/facets/facet-types/proximity/#range-min)” and “[Range (max)](/help-center/facets/facet-types/proximity/#range-max)” setting.

If the Proximity facets  “Radius UI” setting is set to “Dropdown”, the custom radius will be appended at the bottom of the list of choices if it is not one of the defined choices in the “[Radius options](/help-center/facets/facet-types/proximity/#radius-options)” setting.

### Translate facet choices and facet settings

This hook can also be used to [directly translate facet choices](#translate-and-re-order-facet-choices), or to [dynamically change facet choices](#convert-facet-choices-to-translatable-strings) and/or [facet settings](#convert-pager-facet-labels-to-translatable-strings) into 
```
__()
```

 translatable strings. Which then can be [translated with a string translation plugin](#how-to-translate-dynamically-added-strings).

Note that you can also use [the facetwp_facet_display_value hook](/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/#customize-or-translate-facet-choices) or [the facetwp_facet_html hook](/help-center/developers/hooks/output-hooks/facetwp_facet_html/#translate-facet-choices) to directly translate facet choices.

And, see [this section on the Multilingual add-on page](/help-center/using-facetwp-with/multilingual/#translate-facet-choices) for more info about the recommended way to translate facet choices, which is to translate the facet’s **data source** itself (the custom field or taxonomy terms).

#### Translate and re-order facet choices

To translate a facet choice based on the currently set language, you can use this hook as follows. This example is for when you are using WPML, with the [Multilingual add-on](/help-center/using-facetwp-with/multilingual/) installed.

For Polylang, use [lines 9-10](#translate-facet-choices-change-order-L9-L10) instead of [lines 5-6](#translate-facet-choices-change-order-L5-L6).

Make sure to replace 
```
my_facet_name
```

 in [line 2](#translate-facet-choices-change-order-L2) with the name of your facet.

Optionally, you can re-order the translated choices (stored in 
```
facetwp_display_value
```

). Include lines [lines 33-35](#translate-facet-choices-change-order-L33-L35) to re-order them alphabetically. Remove these lines if you want to keep the original order.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_render_args', function( $args ) {
  if ( 'my_facet_name' == $args['facet']['name'] ) { // Replace "my_facet_name" with the name of your facet

    // For WPML:
    $current = ( !empty( FWP()->facet->http_params['lang'] ) ) ? FWP()->facet->http_params['lang'] :  apply_filters( 'wpml_current_language', null );
    $default = apply_filters('wpml_default_language', NULL );

    // For Polylang, use these 2 lines instead of 2 above
    //$current = ( !empty( FWP()->facet->http_params['lang'] ) ) ? FWP()->facet->http_params['lang'] : pll_current_language();
    //$default = pll_default_language();

    $translations = [
      'nl' => [
        'Belgium'     => 'België',
        'Germany'     => 'Duitsland',
        'France'      => 'Frankrijk',
        'Netherlands' => 'Nederland',
      ],
    ];
    if ( $current != $default && isset( $translations[ $current ] ) ) {

      $map = $translations[ $current ];

      // Translate the labels
      foreach ( $args['values'] as $key => $row ) {
        $label = $row['facet_display_value'];
        if ( isset( $map[ $label ] ) ) {
          $args['values'][$key]['facet_display_value'] = $map[ $label ];
        }
      }

      // Optional: Sort the newly translated labels alphabetically
      usort( $args['values'], function( $a, $b ) {
        return strcoll( $a['facet_display_value'], $b['facet_display_value'] );
      });

    }
  }

  return $args;
}, 10, 2 );
```

Note that more or less the same is possible using [the facetwp_facet_display_value hook](/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/#customize-or-translate-facet-choices) or [the facetwp_facet_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_html/#translate-facet-choices).

Or, you could change facet choices into 
```
__()
```

 translatable strings:

#### Convert facet choices to translatable strings

The following example changes **specific** facet choices within the facet named 
```
country
```

 to 
```
__()
```

 translatable strings:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_render_args', function( $args ) {
  if ( 'country' == $args['facet']['name'] ) { // Change 'country' to the name of your facet
    $translations = [
      'Spain' => __( 'Spain', 'fwp-front' ),
      'United States' => __( 'United States', 'fwp-front' ),
      'France' => __( 'France', 'fwp-front' )
    ];

    if ( ! empty( $args['values'] ) ) {
      foreach ( $args['values'] as $key => $val ) {
        $display_value = $val['facet_display_value'];
        if ( isset( $translations[ $display_value ] ) ) {
          $args['values'][ $key ]['facet_display_value'] = $translations[ $display_value ];
        }
      }
    }
  }
  return $args;
});
```

Alternatively, change **all** facet choices in the 
```
country
```

 into 
```
__()
```

 translatable strings:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_render_args', function( $args ) {
  if ( 'country' == $args['facet']['name'] ) { // Change 'country' to the name of your facet
    if ( ! empty( $args['values'] ) ) {
      foreach ( $args['values'] as $key => $val ) {
        $display_value = $val['facet_display_value'];
        $args['values'][ $key ]['facet_display_value'] = __( $display_value, 'fwp-front' );
      }
    }
  }
  return $args;
});
```

These dynamically added strings can now be [translated wi#translate-facet-choicesth a string translation plugin](#how-to-translate-dynamically-added-strings).

#### Convert Pager facet labels to translatable strings

The following example changes all labels that [Pager facets](/help-center/facets/facet-types/pager/) use, into 
```
__()
```

 translatable strings:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_render_args', function( $args ) {
  if ( 'pager'== $args['facet']['type'] ) {
    $args['facet']['prev_label'] = __('« Prev', 'fwp-front' );
    $args['facet']['next_label'] = __('Next »', 'fwp-front' );
    $args['facet']['dots_label'] = __('…', 'fwp-front' );
    $args['facet']['count_text_plural'] = __('[lower] - [upper] of [total] results', 'fwp-front' );
    $args['facet']['count_text_singular'] = __('1 result', 'fwp-front' );
    $args['facet']['count_text_none'] = __('No results', 'fwp-front' );
    $args['facet']['load_more_text'] = __('Load more', 'fwp-front' );
    $args['facet']['loading_text'] = __('Loading...', 'fwp-front' );
    $args['facet']['default_label'] = __('Per page', 'fwp-front' );
    $args['facet']['per_page_options'] = __('10, 25, 50, 100, Show all', 'fwp-front' );
  }
  return $args;
});
```

These dynamically added strings can now be [translated with a string translation plugin](#how-to-translate-dynamically-added-strings).

Note that these Pager facet labels can also be translated [with the facetwp_i18n hook](/help-center/facets/facet-types/pager/#translate-the-pager-texts-and-labels). And the Pager facet links’ HTML can be customized [with the facetwp_facet_pager_link hook](/help-center/developers/hooks/output-hooks/facetwp_facet_pager_link/).

#### How to translate dynamically added strings

With the above snippets in your (child) theme’s functions.php, these dynamically added 
```
__()
```

 strings for [facet choices](#convert-facet-choices-to-translatable-strings) and [facet setting labels](#convert-pager-facet-labels-to-translatable-strings) can now be translated with a string translation plugin.

![How to auto-register dynamically added translatable strings with WPML String Translation.](https://facetwp.com/wp-content/uploads/2024/07/wpml-auto-register-strings.png)How to auto-register dynamically added translatable strings with WPML String Translation. Visit the facet page with this setting enabled.
For WPML, use [WPML String translation](https://wpml.org/documentation/getting-started-guide/string-translation/). To let WPML auto-detect these new strings, go to: WPML > String Translation > Auto register strings for translation. Enable the “Look for strings while pages are rendered”, and (within the time frame the setting is active), visit the page where the facets are. The new facet choice strings will then be detected and added to the 
```
fwp-front
```

 domain. Disable the setting again when all strings have been detected.

Another useful plugin for string translations is [Loco Translate](https://wordpress.org/plugins/loco-translate/). If needed, you can use it together with a tool like [PoEdit](https://poedit.net/download) to handle or create the language pot/po/mo files.

Translatable strings can also be translated with the 
```
gettext_{$domain}
```

 [WordPress filter](https://developer.wordpress.org/reference/hooks/gettext_domain/), as shown in the following example:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'gettext_fwp-front', function( $translated_text, $text, $domain ) {
  if ( 'Spain' == $text ) {
    $translated_text = 'Spanje';
  }
  if ( 'United States' == $text ) {
    $translated_text = 'Verenigde Staen';
  }
  if ( 'France' == $text ) {
    $translated_text = 'Frankrijk';
  }
  return $translated_text;
}, 10, 3 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_facet_render_args)

    
## See also

    - [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [How to pre-select facet choices](https://facetwp.com/how-to-pre-select-facet-choices/)
- [The facetwp_template_use_archive hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/)
- [Using the facetwp_i18n hook to translate facet labels and strings](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_i18n/)
- [The facetwp_facet_display_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/)
- [The facetwp_facet_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_html/)
- [Using FacetWP with WPML or Polylang](https://facetwp.com/help-center/using-facetwp-with/multilingual/)
- [The Proximity facet type](https://facetwp.com/help-center/facets/facet-types/proximity/)
- [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The facetwp_facet_pager_link hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_pager_link/)
- [The facetwp_pager_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pager_args/)
- [How to use a different post per page on the first page](https://facetwp.com/how-to-use-a-different-post-per-page-on-the-first-page/)
- [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)
- [The Checkboxes facet type](https://facetwp.com/help-center/facets/facet-types/checkboxes/)
- [The Dropdown facet type](https://facetwp.com/help-center/facets/facet-types/dropdown/)
- [The Radio facet type](https://facetwp.com/help-center/facets/facet-types/radio/)
- [The fSelect facet type](https://facetwp.com/help-center/facets/facet-types/fselect/)
- [The Hierarchy Select facet type](https://facetwp.com/help-center/facets/facet-types/hierarchy-select/)
- [The Exclude facet type](https://facetwp.com/help-center/facets/facet-types/exclude/)

                    Last updated: July 17, 2026

---

## facetwp_facet_sort_options

**Source:** [https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_sort_options/](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_sort_options/)

## Overview

![FacetWP Sort facet dropdown example](https://facetwp.com/wp-content/uploads/2022/09/sort-facet-dropdown.png)This hook lets you customize the [Sort facet’s](/help-center/facets/facet-types/sort/) dropdown *options* and sort *logic*.

## Parameters

- **$options** | array | Options array (see below)
- **$params** | array | Associative array of extra input variables (see below)

The 
```
$options
```

 array contains an array of settings for each sort option that is set in the Sort facet’s settings. This example has two sort options:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$options = [
  'title_asc' => [
    'label' => 'Title (a-z)',
    'query_args' => [
      'orderby' => [
        'title' => 'ASC'
      ]
    ]
  ],
  'title_desc' => [
    'label' => 'Title (z-a)',
    'query_args' => [
      'orderby' => [
        'title' => 'DESC'
      ]
    ]
  ],
  //...
];
```

The 
```
$params
```

 array provides the Sort facet’s settings, and the listing template’s name:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'facet' => [
    'name' => 'my_sort_facet_name',
    'label' => 'My sort facet label',
    'type' => 'sort',
    'default_label' => 'Sort by',
    'sort_options' => [
      [
        'label' => 'Title (a-z)',
        'name' => 'title_a_z',
        'orderby' => [
          'key' => 'title',
          'order' => 'ASC',
          'type' => 'CHAR',
        ],
      ],
      [
        'label' => 'Title (z-a)',
        'name' => 'title_z_a',
        'orderby' => [
          'key' => 'title',
          'order' => 'DESC',
          'type' => 'CHAR',
        ]
      ],
      //...
    ],
    'operator' => 'or',
    'selected_values' => [
      'the_selected_sort_value'
    ]
  ],
  'template_name' => 'my_template_name'
];
```

## Usage

A few examples of how to use this hook:

### Remove a sort option

The following code removes the sort option with the name 
```
title_z_a
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_sort_options', function( $options, $params ) {
  unset( $options['title_z_a'] );
  return $options;
}, 10, 2 );
```

### Remove a sort option conditionally

The following code removes the sort option with the name 
```
date
```

, if the template name is  
```
cars
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_sort_options', function( $options, $params ) {
  if ( 'cars' == $params['template_name'] ) {
    unset( $options['date'] );
  }
  return $options;
}, 10, 2 );
```

Or, alternatively, use the Sort facet’s name as condition:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_sort_options', function( $options, $params ) {
  if ( 'my_sort_facet' == $params['facet']['name'] ) {
    unset( $options['date'] );
  }
  return $options;
}, 10, 2 );
```

### Add a sort option conditionally

The following code adds a sort option if the template name is 
```
my_listing
```

. You can use any [orderby parameter accepted by WP_Query](https://developer.wordpress.org/reference/classes/wp_query/#order-orderby-parameters). In this example, we add an option to sort by post type:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_sort_options', function( $options, $params ) {
  if ( 'my_listing' == $params['template_name'] ) {
    $options['post_type'] = [
      'label'      => 'Post type',
      'query_args' => [
        'orderby' => [
          'type' => 'ASC'
        ]
      ]
    ];
  }
  return $options;
}, 10, 2 );
```

### Add an option to sort by multiple (custom) fields

The following example adds a “Price (Highest)” sort option. As you can see in [line 6](#add-option-meta-query-L6), the 
```
meta_query
```

 has a named key: 
```
sort_0
```

. This name can be anything you want. This key name is then used in the 
```
orderby
```

 clause on [line 11](#add-option-meta-query-L11).

The query will first sort by the custom field 
```
_price
```

, from high to low. This custom field is a numeric field containing decimals. After that it sorts by the secondary, backup sorting method 
```
title
```

. This means that items with the same price will be sorted by post title:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_sort_options', function( $options, $params ) {
  $options['price_desc'] = [
    'label' => 'Price (Highest)',
    'query_args' => [
      'meta_query' => [
        'sort_0' => [
          'key' => '_price',
          'type' => 'DECIMAL(16,4)',
        ]
      ],
      'orderby'=> [
        'sort_0' => 'DESC',
        'title' => 'ASC'
      ]
    ]
  ];
  return $options;
}, 10, 2 );
```

This above added sort option is equivalent to adding it like this in the Sort facet’s settings:

![Sort facet option: sort by a price custom field and then post title.](https://facetwp.com/wp-content/uploads/2022/09/sort_option_price_post_title.png)Sort facet option: sort by a custom field and then by post title.
Note: If you want to sort by price, use 
```
_price
```

 for WooCommerce, or 
```
edd_price
```

 for Easy Digital Downloads

### Add an option to sort by a custom field and include posts without that field

If you have set up a sort option that sorts by a custom field, you will notice that posts that do not have that custom field disappear when you use that sort option.

The following snippet shows how to prevent this. You can use this to customize/override the query for an existing sort option, or to create a new sort option.

With this snippet, the query first sorts by the custom field, then by post title. Posts without the custom field will be sorted by post title and added after the ones with the custom field:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Replace 'my_custom_field' with the name of your custom field.
// Replace 'my_custom_field_sort' with an existing sort option's technical name. Or use a non-existing name to create a new sort option.
// Replace 'My custom field sort label' with your sort option label.
// Use 'meta_value' in line 24 if the custom field does not contain numeric values.

add_filter('facetwp_facet_sort_options', function ($options, $params) {

  $options['my_custom_field_sort'] = [

    'label' => 'My custom field sort label',
    'query_args' => [
      'meta_query' => [
        'relation' => 'OR',
        [
          'key' => 'my_custom_field',
          'compare' => 'NOT EXISTS'
        ],
        [
          'key' => 'my_custom_field',
          'compare' => 'EXISTS'
        ]
      ],
      'orderby' => [
        'meta_value_num' => 'DESC', // Sort by 'my_custom_field' first. Use DESC to show posts with the field existing first. Use ASC to show posts with the field existing last. Use 'meta_value' instead if the custom field does not contain numeric values.
        'title' => 'ASC' // Sort by post title A-Z
      ],
      'meta_key' => 'my_custom_field'
    ]
  ];
  
  return $options;
  
}, 10, 2 );
```

Make sure to use 
```
meta_value
```

 in [line 24](#add-option-custom-field-empty-L24) if the custom field does not contain numeric values.

It’s important that the 
```
NOT EXISTS
```

 comparison is **before** the 
```
EXISTS
```

 comparison. See [this StackExchange question](https://wordpress.stackexchange.com/q/102447) for more info and examples.

Also keep in mind that [ordering with named meta_query keys](/how-to-filter-or-order-a-wp_query-by-one-or-more-custom-fields/
#order-a-query-by-a-custom-field) does not work in this setup.

[More examples](https://gist.facetwp.com/?_keywords=facetwp_facet_sort_options)

    
## See also

    - [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [How to filter or order a WP_Query by one or more custom fields](https://facetwp.com/how-to-filter-or-order-a-wp_query-by-one-or-more-custom-fields/)
- [Random ordering in FacetWP](https://facetwp.com/random-ordering-in-facetwp/)
- [The facetwp_facet_orderby hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_facet_orderby/)
- [The facetwp_sort_options hook](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_sort_options/)

                    Last updated: January 14, 2026

---

## facetwp_render_output

**Source:** [https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_render_output/](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_render_output/)

## Overview

This filter lets you modify the final output array, before it’s converted to JSON and returned to the client (via AJAX).

## Parameters

- **$output** | array | An associative array of output data (see below)
- **$params** | array | An associative array of input parameters (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$output = [
  'facets' => [
    'the_facet_name' => 'HTML output',
    'another_facet' => 'HTML output',
  ],
  'template' => 'HTML string',
  'settings' => [
    'the_facet_name' => [
      'setting1' => 'value'
    ]
  ],
  'pager' => 'HTML output',
  'sort' => 'HTML output',
];
```

```
$params
```

 contains the data (selected values, etc.) passed in client-side from AJAX.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'facets'      => [
    [
      'facet_name'      => 'the_facet_name',
      'selected_values' => [ 1, 2, 3 ],
    ],
    [
      'facet_name'      => 'another_facet',
      'selected_values' => [ 4, 5 ],
    ],
  ],
  'template'    => 'my_template',
  'http_params' => [
    'uri' => 'the/page/url'
  ],
  'extras'      => [
    'sort'  => 'default',
    'pager' => true,
  ],
  'paged'       => 1
];
```

## Examples

### Modify a Slider facet setting

In this example, we modify the “start” setting for a [Slider facet](/help-center/facets/facet-types/slider/) with name “price”. On first load, the slider will only show items with a price between 500 and 1000:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_render_output', function( $output, $params ) {
  $output['settings']['price']['start'] = [ 500, 1000 ];
  return $output;
}, 10, 2 );
```

### Customize a Date Range facet’s date picker range

The following code forces the range of the date picker of a [Date Range facet](/help-center/facets/facet-types/date-range/) between a specific date and today:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Replace "my-daterange-facet" with the name of your Date Range facet
add_filter( 'facetwp_render_output', function( $output, $params ) {
  $output['settings']['my-daterange-facet']['range']['min']['minDate'] = '2022-01-01';
  $output['settings']['my-daterange-facet']['range']['min']['maxDate'] = date( 'Y-m-d' ); // Today
  return $output;
}, 10, 2 );
```

### Disable the search box for all fSelect facets

The following example disables the search box for all [fSelect facets](/help-center/facets/facet-types/fselect/) on the page:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_render_output', function( $output ) {
  $facets = FWP()->helper->get_facets();
  foreach ( $facets as $facet ) {
    if ( 'fselect' == $facet['type'] ) {
      $output['settings'][ $facet['name'] ]['showSearch'] = false;
    }
  }
  return $output;
});
```

### Modify the template HTML

This example modifies a [Listing Builder](/help-center/listing-templates/listing-builder/) template’s **content** output HTML, which is contained in 
```
$output['template']
```

. The code inserts a 
```
<div>
```

 element with class 
```
header
```

 in the 
```
.fwpl-layout
```

 container element, above the results:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_render_output', function( $output, $params ) {
  if ( 'my_listing_template_name'  == $params['template'] ) { // Replace "my_listing_template_name" with the name of your Listing Builder listing
    $output['template'] = preg_replace( '/<div class=\"fwpl-layout(.*?)\">/', '<div class="fwpl-layout$1"><div class="header"></div>', $output['template'] );
  }
  return $output;
}, 10, 2 );
```

To modify the **placeholder/container** HTML of a Listing Builder listing instead, use the [facetwp_shortcode_html hook](/help-center/developers/hooks/output-hooks/facetwp_shortcode_html/). Or, to completely override the listing output, you can use the [facetwp_template_html hook](/help-center/developers/hooks/output-hooks/facetwp_template_html/).

[More examples](https://gist.facetwp.com/?_keywords=facetwp_render_output)

    
## See also

    - [The facetwp_template_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_template_html/)
- [The facetwp_shortcode_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_shortcode_html/)
- [The Slider facet type](https://facetwp.com/help-center/facets/facet-types/slider/)
- [The fSelect facet type](https://facetwp.com/help-center/facets/facet-types/fselect/)
- [The Date Range facet type](https://facetwp.com/help-center/facets/facet-types/date-range/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)

                    Last updated: October 22, 2024

---

## facetwp_render_params

**Source:** [https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_render_params/](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_render_params/)

## Overview

Modify the raw data passed from AJAX into 
```
FacetWP_Renderer
```

.

## Parameters

- **$params** | array | An array of input data (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'facets' => [
    [
      'facet_name' => 'facet_1',
      'selected_values' => [ 'foo' ]
    ],
    [
      'facet_name' => 'facet_2',
      'selected_values' => [ 'foo', 'bar' ]
    ]
  ],
  'template' => 'example',
  'http_params' => [ 'uri' => 'demo/cars' ],
  'extras' => [],
  'soft_refresh' => 0,
  'is_bfcache' => 1,
  'first_load' => 0,
  'paged' => 1,
];
```

## Usage

Modify the passed in URI:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_render_params', function( $params ) {
  $params['http_params']['uri'] = 'foo/bar';
  return $params;
});
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_render_params)

                    Last updated: May 2, 2023

---

## facetwp_shortcode_html

**Source:** [https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_shortcode_html/](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_shortcode_html/)

## Overview

This filter lets you modify the placeholder/container HTML for any FacetWP shortcode ([facet shortcodes](/help-center/facets/#display-a-facet), Listing Builder [listing shortcodes](/help-center/listing-templates/listing-builder/#display-a-listing-template) and [other shortcodes](/help-center/developers/shortcodes-reference/)).

Note:This hook is only meant to modify the **placeholder/container HTML** part of the output. Don’t try to use this hook to customize a facet’s or listing’s **content HTML**, as it will be overwritten after filtering. To customize a **facet’s content HTML** (but not its placeholder/container element), you can [use the facetwp_facet_html hook](/help-center/developers/hooks/output-hooks/facetwp_facet_html/). To customize a **Listing Builder listing template’s content HTML** (but not its placeholder/container element), you can use [use the facetwp_render_output hook](/help-center/developers/hooks/output-hooks/facetwp_render_output/), or the [facetwp_template_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_template_html/) to override the template entirely.
Note:If you want to change the facet choices’ HTML, [use the facetwp_facet_display_value hook](/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/) instead.

## Parameters

- **$output** | string | The output HTML
- **$atts** | array | The array of shortcode attributes

## Usage examples

### Add an id and/or custom classes to a Listing Builder listing

This example adds an additional 
```
id
```

 and/or extra classes to the 
```
<div>
```

 with class 
```
facetwp-template
```

, generated by a [Listing Builder listing template](/help-center/listing-templates/listing-builder/). The extra classes could for example be used to set the column layout for different widths in a grid system, like Bootstrap:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_shortcode_html', function( $output, $atts ) {
  if ( isset( $atts['template'] ) && 'my_template_name' == $atts['template'] ) { // Change "my_template_name" to the name of your listing
    $output = str_replace( 'class="facetwp-template"', 'id="grid-container" class="facetwp-template col-sm-1 col-md-2 col-lg-3"', $output );
  }
  return $output;
}, 10, 2 );
```

Note that the 
```
facetwp-template
```

 class needs to remain present for FacetWP to work.

### Add a custom attribute to a Listing Builder listing

The following example adds an [aria-live=”polite”](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) attribute to the 
```
<div>
```

 with class 
```
facetwp-template
```

, generated by a [Listing Builder listing template](/help-center/listing-templates/listing-builder/):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_shortcode_html', function( $output, $atts ) {
  if ( isset( $atts['template'] ) ) {
    $output = str_replace( 'class="facetwp-template"', 'class="facetwp-template" aria-live="polite"', $output );
  }
  return $output;
}, 10, 2 );
```

### Set a custom listing template class based on a custom attribute

This hook has access to the shortcode’s attributes, with the 
```
$atts
```

 parameter. This makes it possible to set any custom attribute and use that attribute as a check to do something, or use the value of the attribute itself.

For example, you could add a custom 
```
type
```

 attribute, in this case with a value of 
```
products
```

:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp template="my_listing_name" type="products"]
```

Then, within the hook, check if this attribute is set, and add the attribute’s value (
```
products
```

) as a custom class:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_shortcode_html', function( $output, $atts ) {
  if ( isset( $atts['template'] ) && 'my_template_name' == $atts['template'] ) { // Change "my_template_name" to the name of your listing
    if ( isset($atts['type']) ) {
      $extraclass = $atts['type'];
      $output = str_replace( 'class="facetwp-template"', 'class="facetwp-template ' . $extraclass . '"', $output );
    }
  }
  return $output;
}, 10, 2 );
```

Note that (custom) shortcode attributes, like in [above example](#custom-attribute), can also be accessed with 
```
FWP()->display->shortcode_atts
```

, which for example can be used within a 
```
facetwp_query_args
```

 hook, to [make changes to the listing query based on a custom shortcode attribute](/help-center/developers/hooks/querying-hooks/facetwp_query_args/#add-a-taxonomy-query-based-on-a-shortcode-attribute).

### Hide a template on page load

The following example adds an 
```
is_hidden
```

 class to the Listing Builder listing template 
```
<div>
```

. This class will hide the listing on the initial page load. This can be useful in combination with a logic rule in [the Conditional Logic add-on](/help-center/add-on-features-and-extras/conditional-logic/) that hides the template on page load (with JavaScript). This snippet prevents a flash of content in this situation:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_shortcode_html', function( $output, $atts ) {
  if ( isset( $atts['template'] ) && 'my_listing_name' == $atts['template'] ) { // Change "my_template_name" to the name of your listing
    $output = str_replace( 'class="facetwp-template"', 'class="facetwp-template is-hidden"', $output );
  }
  return $output;
}, 10, 2 );
```

### Set a custom facet class

The following example adds a custom 
```
my-class
```

 class to a facet named 
```
my_facet_name
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_shortcode_html', function( $output, $atts ) {
  if ( isset( $atts['facet'] ) && 'my_facet_name' == $atts['facet'] ) { // Change "my_facet_name" to the name of your facet
    $output = str_replace( 'facetwp-facet-my_facet_name', 'facetwp-facet-my_facet_name my-class', $output );  // Change "my_facet_name" to the name of your facet and "my-class" to the name of your custom class.
  }
  return $output;
}, 10, 2 );
```

Make sure to keep the existing class of the facet (that contains its name, after 
```
facetwp-facet-
```

), twice in [line 3](#facet-add-class-L3).

### Add a custom attribute to a facet

The following example can be used to add a 
```
role="status"
```

 attribute to the HTML of [a “Result counts” type Pager facet](/help-center/facets/facet-types/pager/#result-counts-pager-type). This can be useful to provide an automatically updated [status message](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html) to the page, [to improve accessibility](/help-center/add-on-features-and-extras/accessibility-support/#add-a-rolestatus-element-to-the-page).

Make sure to change 
```
my_pager_facet_name
```

 to the name of your Pager facet:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_shortcode_html', function( $output, $atts ) {
  if ( isset( $atts['facet'] ) && 'my_pager_facet_name' == $atts['facet'] ) { // Change "my_pager_facet_name" to the name of your Pager facet
    $output = str_replace( 'data-name', 'role="status" data-name', $output ); 
  }
  return $output;
}, 10, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_shortcode_html)

    
## See also

    - [Shortcodes reference](https://facetwp.com/help-center/developers/shortcodes-reference/)
- [The facetwp_facet_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_html/)
- [The facetwp_render_output hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_render_output/)
- [The facetwp_template_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_template_html/)
- [The facetwp_facet_display_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/)
- [Accessibility support](https://facetwp.com/help-center/add-on-features-and-extras/accessibility-support/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [The Conditional Logic add-on](https://facetwp.com/help-center/add-on-features-and-extras/conditional-logic/)
- [The facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
- [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)

                    Last updated: April 13, 2026

---

## facetwp_template_html

**Source:** [https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_template_html/](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_template_html/)

## Overview

This filter lets you override a [Listing Builder](/help-center/listing-templates/listing-builder/) template’s output HTML.

Note: You cannot use this hook to **modify** the output HTML, only to **replace it entirely**. If you need to modify the output HTML, [use the facetwp_render_output hook](/help-center/developers/hooks/output-hooks/facetwp_render_output/#modify-the-template-html) instead. Modify 
```
$output['template']
```

, which contains the template HTML. Alternatively, you can [use the facetwp_shortcode_html hook](/help-center/developers/hooks/output-hooks/facetwp_shortcode_html/), which also has access to the placeholder/container element.

## Parameters

- **$output** | string | The output HTML
- **$class** | object | The 
```
FacetWP_Renderer
```

 class instance

## Usage

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_template_html', function( $output, $class ) {
  $query = $class->query;
  ob_start();
  while ( $query->have_posts() ): $query->the_post(); ?>
    <p><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></p>
  <?php endwhile;
  wp_reset_postdata();
  return ob_get_clean();
}, 10, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_template_html)

    
## See also

    - [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [The facetwp_render_output hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_render_output/)
- [The facetwp_shortcode_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_shortcode_html/)

                    Last updated: July 31, 2024

---

## Querying hooks

**Source:** [https://facetwp.com/help-center/developers/hooks/querying-hooks/](https://facetwp.com/help-center/developers/hooks/querying-hooks/)

These hooks let you modify how FacetWP loads results from the database.

	[facetwp_query_args](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
					[facetwp_pre_filtered_post_ids](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/)
					[facetwp_facet_filter_posts](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_facet_filter_posts/)
					[facetwp_filtered_post_ids](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/)
					[facetwp_filtered_query_args](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_filtered_query_args/)
					[facetwp_is_main_query](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/)
					[facetwp_template_use_archive](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/)
					[facetwp_preload_url_vars](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_preload_url_vars/)
					[facetwp_pager_args](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pager_args/)
					[facetwp_search_query_args](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_search_query_args/)
					[facetwp_facet_orderby](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_facet_orderby/)

                    Last updated: April 24, 2026

---

## facetwp_facet_filter_posts

**Source:** [https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_facet_filter_posts/](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_facet_filter_posts/)

## Overview

This hook lets you override the filtering logic for (a) specific facet(s). It can be used to pass a custom array of matching post IDs for a specific facet, or with specific facet choices selected.

By default, FacetWP uses its own [index table](/help-center/indexing/) to determine matching posts. You could use this filter to hook into custom database tables (e.g. for doing real-time booking availability) or 3rd party services, as shown in the [first example below](#filter-available-rooms-for-selected-dates).

Or you could let a specific facet use a different filtering logic on specific pages or templates, as shown in the [second example](#change-facet-logic).

Note that this hook has no knowledge of the original matching posts for the facet or facet choice(s) (without using this hook). If you want to customize the original matching post IDs for a facet (choice), for example to remove one or more posts, use the [facetwp_filtered_post_ids](/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/) hook instead. And to customize the post IDs also before any facet filtering has happened, use [facetwp_pre_filtered_post_ids](/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/).

## Parameters

- **$return** | mixed | FALSE (default), or an array of post IDs
- **$params** | An associative array of parameters (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'facet' => [
    'label' => 'My facet',
    'name' => 'my_facet',
    'type' => 'checkboxes',
    'source' => 'cf/the_field_name',
    // ... other facet settings (different for each facet type)
  ],
  'selected_values' => []
];
```

## Returns

An array of post IDs, or 
```
FALSE
```

 to use FacetWP’s default filtering logic.

## Examples

### Filter available rooms for selected dates

In this example, we fetch available rooms from a custom database table for selected dates in a [Date Range facet](/help-center/facets/facet-types/date-range/):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_filter_posts', function( $return, $params ) {
  $selected_values = $params['selected_values'];

  if ( 'availability' == $params['facet']['name'] ) {
    $start_date = $selected_values[0];
    $end_date = $selected_values[1];

    // Get post IDs of available rooms between the facet's selected dates, from another database table, with a custom function
    $post_ids = get_available_rooms( $start_date, $end_date );
    return $post_ids;
  }
  return $return;
}, 10, 2 );
```

### Change facet logic

![The 'Facet logic' setting.](https://facetwp.com/wp-content/uploads/2026/02/facet-logic-setting.png)The “Facet logic” setting.
The following example shows how to change the facet logic (“AND (match all)” or “OR (match any)”) for a specific facet. Of course, this only works for facet types that have a “Facet logic” setting:

- [Checkboxes](/help-center/facets/facet-types/checkboxes/#facet-logic)
- [fSelect](/help-center/facets/facet-types/fselect/#facet-logic)
- [Range List](/help-center/facets/facet-types/range-list/#facet-logic)
- [Color](/help-center/facets/facet-types/color/#facet-logic)

This can be used to change the facet’s 
```
AND
```

/
```
OR
```

filtering logic on specific pages or templates, or based on a custom condition. In this example, we change it to “OR (match any)” if the facet is on a specific category archive:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_filter_posts', function( $return, $params ) {

  if ( is_category( 'my-category' ) ) {

    if ( 'my_facet_name' == $params['facet']['name'] ) { // Replace 'my_facet_name' with the name of your facet
      $params['facet']['operator'] = 'or'; // Set to "OR (match any)"
      $matches = FWP()->facet->facet_types[ $params['facet']['type'] ]->filter_posts( $params );
      return $matches;
    }

  }
  return $return;
}, 10, 2 );
```

Note:To let the user change the “Facet logic” for individual facets on the front-end, see [this tutorial](/how-to-switch-the-facet-logic-on-the-front-end/).
[More examples](https://gist.facetwp.com/?_keywords=facetwp_facet_filter_posts)

    
## See also

    - [Indexing](https://facetwp.com/help-center/indexing/)
- [The facetwp_pre_filtered_post_ids hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/)
- [The facetwp_filtered_post_ids hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/)
- [The Date Range facet type](https://facetwp.com/help-center/facets/facet-types/date-range/)
- [The Checkboxes facet type](https://facetwp.com/help-center/facets/facet-types/checkboxes/)
- [The fSelect facet type](https://facetwp.com/help-center/facets/facet-types/fselect/)
- [The Range List facet type](https://facetwp.com/help-center/facets/facet-types/range-list/)
- [The Color facet type](https://facetwp.com/help-center/facets/facet-types/color/)
- [Can I use “OR” logic between facets?](https://facetwp.com/help-center/faq/can-i-use-or-logic-between-facets/)
- [How to switch the facet logic on the front-end](https://facetwp.com/how-to-switch-the-facet-logic-on-the-front-end/)

                    Last updated: February 13, 2026

---

## facetwp_facet_orderby

**Source:** [https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_facet_orderby/](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_facet_orderby/)

## Overview

This filter lets you customize the display order of choices within a facet, if you can’t get the order you need with the available [“Sort by” facet setting options](/help-center/facets/facet-types/checkboxes/#sort-by).

## How it works

FacetWP uses the [facetwp_index table](/help-center/indexing/) to store facet values. When loading values for a facet, the SQL query looks like the following:

```
SELECT * FROM wp_facetwp_index f WHERE {where} ORDER BY {orderby};
```

This filter lets you dynamically customize the 
```
{orderby}
```

 above. You have access to the table columns (
```
facet_value
```

, 
```
facet_display_value
```

, 
```
term_id
```

, etc.), but not 
```
menu_order
```

. If you need to sort by arbitrary values, see the [example below](#sort-by-arbitrary-values).

## Parameters

- **$orderby** | string | The original “ORDER BY”
- **$facet** | array | An array of facet properties (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$facet = [
  'name' => 'my_facet',
  'type' => 'checkboxes',
  'source' => 'tax/category',
  // ...
];
```

## Switch the default ASC/DESC order

Many [facet types](/help-center/facets/facet-types/) have a “Sort by” setting which determines the order of the facet choices. For example, a Checkboxes facet has these four sort options: [Highest count, Display value, Raw value, and Term order](/help-center/facets/facet-types/checkboxes/#sort-by).

The ascending (
```
ASC
```

) or descending (
```
DESC
```

order) of these default options is hard-coded. With this hook you can easily switch this order, by setting the desired order with the 
```
$orderby
```

 variable.

To do this, you must first know what the current 
```
$orderby
```

 value is. This depends on the order set in the “Sort by” setting, and on other settings of the facet. The easiest way to determine the current order, is to display it with 
```
print( $orderby )
```

, as follows:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_orderby', function( $orderby, $facet ) {
  if ( 'my_facet_name' == $facet['name'] ) { // Change 'my_facet_name' to the name of your facet. Add more facet names to the array if needed.
    print( $orderby ); // Prints the current order to the bottom of the page. Comment out or remove this line when done.
  }
  return $orderby;
}, 10, 2 );
```

This will output the current/default order to the bottom of the page displaying the facet. You can then copy this output, adapt it, and pass the desired order into 
```
$orderby
```

 variable.

Here is an example: if you have a [Checkboxes facet](/help-center/facets/facet-types/checkboxes/) with its “Sort by” setting set to order by “Display value” and its “Hierarchical” setting enabled, the 
```
print( $orderby )
```

 in the above snippet will output this SQL to the bottom of the page:

```
f.depth, f.facet_display_value ASC
```

This means: order by hierarchical 
```
depth
```

 level first, then by 
```
facet_display_value
```

, in 
```
ASC
```

 (A-Z) order.

Say you now want to switch this order to 
```
DESC
```

 (Z-A), you only have to adapt this order and pass it into the 
```
$orderby
```

 variable as follows:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_orderby', function( $orderby, $facet ) {
  if ( 'my_facet_name' == $facet['name'] ) { // Change 'my_facet_name' to the name of your facet. Add more facet names to the array if needed.
    // print( $orderby ); // Prints the current order to the bottom of the page. Comment out or remove this line when done.
    $orderby = 'f.depth, f.facet_display_value DESC'; // Switches the default ASC order to DESC in a hierarchical facet set to order by "Display value".
  }
  return $orderby;
}, 10, 2 );
```

These are the default hard-coded facet 
```
$orderby
```

 values you’ll encounter depending on the facet settings:

```
/* Sort by Highest count */
counter DESC, f.facet_display_value ASC

/* Sort by Highest count - Hierarchical */
f.depth, counter DESC, f.facet_display_value ASC

/* Sort by Display value */
f.facet_display_value ASC

/* Sort by Display value - Hierarchical */
f.depth, f.facet_display_value ASC

/* Sort by Raw value */
f.facet_value ASC

/* Sort by Raw value - Hierarchical */
f.depth, f.facet_value ASC

/* Sort by Term order (example term ids) */
f.depth, FIELD(f.term_id, 185,186,205,149,65,70,49,58,62,38)

/* Sort by Term order - Hierarchical (example term ids) */
f.depth, FIELD(f.term_id, 185,186,205,149,65,70,49,58,62,38)
```

Note: Using “Term order” sorts the facet choices by taxonomy 
```
term_order
```

. This is a custom order determined by the drag/drop order in WooCommerce product categories and attributes, or as set with one of the [supported ordering plugins](/help-center/facets/facet-types/checkboxes/#sort-by). See below for an [example of how to set term_order with this hook](#sortby-term-order) instead of the facet’s “Sort by” setting.

## Sort numerically

If your facet’s data source is a custom field or taxonomy containing numbers, and you want to sort the facet choices numerically, you can use the following code to sort by 
```
facet_value
```

 (the raw/technical facet value as seen in the URL when selected) and add a 
```
+0
```

 to it.

The 
```
+0
```

 will (try to) convert the 
```
facet_value
```

 string values to number values, and will make the hook sort the number-based choices correctly, in the specified 
```
ASC
```

 (low to high) or 
```
DESC
```

 (high to low) order. This also works if the numbers have decimals (with a 
```
.
```

 as separator), because the 
```
+0
```

 forces MySQL to treat the value as a float/decimal rather than just an integer or a string.

The following example sorts two facets named 
```
number_of_bedrooms
```

 and 
```
number_of_guests
```

 numerically. Adapt the facet name(s) to your situation and add the code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_orderby', function( $orderby, $facet ) {
  if ( in_array( $facet['name'], [ 'number_of_bedrooms', 'number_of_guests' ] ) ) { // change 'number_of_bedrooms' and  'number_of_guests' to the name(s) of your facet(s). Add or remove facets from the array if needed.
    $orderby = 'f.facet_value+0 ASC'; // Order numerically by raw value, in ascending order.
  }
  return $orderby;
}, 10, 2 );
```

To sort by facet label instead of raw value, replace 
```
facet_value
```

 with 
```
facet_display_value
```

. To use a descending order, replace 
```
ASC
```

 with 
```
DESC
```

.

## Sort by arbitrary values

The following example sorts a facet named 
```
day_of_week
```

 by day order. Adapt the facet name and options to your situation and add the code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_orderby', function( $orderby, $facet ) {
  if ( 'day_of_week' == $facet['name'] ) { // Change 'day_of_week' to the name of your facet
    $orderby = 'FIELD(f.facet_display_value, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")'; // Adapt to your facet's options
  }
  return $orderby;
}, 10, 2 );
```

Note that if your facet uses a taxonomy as data source, you could also use a term ordering plugin to manually create a specific order. Set the [“Sort by” facet setting](/help-center/facets/facet-types/checkboxes/#sort-by) to “Term order” and install one of the recommended term ordering plugins mentioned in the facet type’s document page. After implementing the desired order, make sure to re-index.

## Sort by a custom term field

Say you have a facet with its data source set to tags, categories, or a custom taxonomy, and this taxonomy has one or more custom fields set for its terms ([which is possible using Advanced Custom Fields](https://www.advancedcustomfields.com/resources/adding-fields-taxonomy-term)).

To order your facet’s choices by the values of a custom term field, you can use the following code. Make sure to replace 
```
my_facet_name
```

 in [line 4](#sortby-custom-term-field-L4) with the name of your facet.

In this example, we order the choices by a custom term field called 
```
my_custom_term_field
```

 (set in [line 9](#sortby-custom-term-field-L9)), attached to a taxonomy called 
```
my_taxonomy
```

 (set in [line 8](#sortby-custom-term-field-L8)).

Assuming the custom term field contains numerical values, we set the 
```
orderby
```

 value to 
```
meta_value_num
```

 in [line 10](#sortby-custom-term-field-L10). If the values are non-numerical, use 
```
meta_value
```

 instead.

Note that terms that do not have a value set for the 
```
my_custom_term_field
```

 custom field will appear first in the facet’s order. So if you want them ordered like this, make sure all terms have a value.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_orderby', function( $orderby, $facet ) {

  // Change "my_facet_name" to the name of your facet.
  if ( 'my_facet_name' == $facet['name'] ) {

    // Get the terms in the desired order
    $term_args = [
      'taxonomy'   => 'my_taxonomy',          // Change "my_taxonomy" to the name of your taxonomy used as the facet's data source
      'meta_key'   => 'my_custom_term_field', // Change "my_custom_term_field" to the name of your custom term field you want used for sorting the facet's choices
      'orderby'    => 'meta_value_num',       // Order by numeric value. Use "meta_value" for non-numerical values
      'order'      => 'ASC',                  // Ascending order
      'fields'     => 'ids',                  // Only return term IDs
      'hide_empty' => false                   // Retrieve terms even if it has no posts attached
    ];

    $ordered_terms_ids = get_terms( $term_args );

    // Order the facet's choices in the order of the above retrieved terms array
    if ( ! empty( $ordered_terms_ids ) && ! is_wp_error( $ordered_terms_ids ) ) {
      $ordered_terms_ids = implode( ',', $ordered_terms_ids );
      $orderby = "FIELD(f.term_id, $ordered_terms_ids)";
    }
  }

  return $orderby;
}, 10, 2 );
```

## Sort by date

If you have a facet with dates as data source, you can use the following to customize the order of the date choices.

Date field (like [ACF Date Picker or Date Time Picker fields](/help-center/using-facetwp-with/advanced-custom-fields/#using-a-date-picker-or-date-time-picker-field)) are stored in the database (and indexed by FacetWP) as 
```
YYYY-MM-DD
```

 or 
```
YYYYMMDD
```

 values. This means you can sort date facets by setting the “Sort by” setting to “Raw value”. The default order will then be 
```
ASC
```

, [as shown in line 14 above overview](#default-orderby-sql-L14). This means dates will be ordered from old to new.

If you want the order reversed (from new to old), you can use the following snippet:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Change date order to DESC. We're using the facet_value which is yyyymmdd for e.g. ACF date fields
add_filter( 'facetwp_facet_orderby', function( $orderby, $facet ) {
  if ( 'my_date_facet' == $facet['name'] ) { // Replace 'my_date_facet' with the name of your facet
    $orderby = 'f.depth, f.facet_value DESC'; // From new to old
  }
  return $orderby;
}, 10, 2 );
```

Note that if you want to format the dates in the facet, for example like 
```
January 17, 2024
```

, you can customize the 
```
facet_display_value
```

 with the 
```
facetwp_index_row
```

 hook. [See these examples](/help-center/using-facetwp-with/advanced-custom-fields/#format-the-dates-in-the-facet).

## Sort by term order

Most facets have a setting to order by 
```
term_order
```

. This is a custom order determined by the drag/drop order in [WooCommerce](/help-center/using-facetwp-with/woocommerce/) product categories and attributes, or as set with one of the [supported ordering plugins](/help-center/facets/facet-types/checkboxes/#sort-by).

If you have a reason to want to set or customize 
```
term_order
```

 programmatically, you can use the 
```
facetwp_facet_orderby
```

 hook as follows:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_facet_orderby', function( $orderby, $facet ) {
 
  // Change 'my_facet_name' to the name of your facet.
  if ( 'my_facet_name' == $facet['name'] ) { 
 
    // Change 'my_taxonomy_name' to the name of the taxonomy used int the facet's Data source setting.
    $term_ids = get_terms( [
      'taxonomy' => 'my_taxonomy_name', 
      'term_order' => true,
      'fields' => 'ids',
    ] );
 
    if ( ! empty( $term_ids ) && ! is_wp_error( $term_ids ) ) {
      $term_ids = implode( ',', $term_ids );
      $orderby = "FIELD(f.term_id, $term_ids)";
    }
 
  }
  return $orderby;
}, 10, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_facet_orderby)

    
## See also

    - [Indexing](https://facetwp.com/help-center/indexing/)
- [Facet types](https://facetwp.com/help-center/facets/facet-types/)
- [The Checkboxes facet type](https://facetwp.com/help-center/facets/facet-types/checkboxes/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [The facetwp_facet_sort_options hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_sort_options/)
- [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [The Color facet type](https://facetwp.com/help-center/facets/facet-types/color/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)

                    Last updated: February 11, 2026

---

## facetwp_filtered_post_ids

**Source:** [https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/)

## Overview

With this hook you can customize the returned post IDs, **after** the 
```
WP_Query
```

 has been executed and **after** any facets have been [processed](#how-this-hook-works).

This hook can be used to customize the returned post IDs after facet **filtering**. For this to work, the hook needs to run with a condition that checks [if any facet is filtering](#customize-post-ids-after-any-facet-filtering), or [if a specific facet, or even a specific facet choice is filtering](#customize-post-ids-if-a-specific-facet-is-filtering). If used in this way, the hook can be used on any [type of listing template](/help-center/listing-templates/).

### How this hook works

To understand what this hook does exactly, be aware that – despite what the name suggests – it runs in the rendering process **after** facet choices are **processed**, not after facets are actually **filtering**: also facets with no selections are processed. So this hook will run on each page load, also on the first page load ([if used on a Listing Builder listing template](#using-this-hook-on-non-listing-builder-listings)), and **also when no facets are filtering**.

It is not recommended to use this hook “bare”, meaning without any extra checks for facets being in use. In that case, it will do the same as its sister hook: [facetwp_pre_filtered_post_ids](/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/), but it will cause issues in some specific use cases.  So make sure to only use it with those extra checks, [as shown in the examples below](#usage-examples).

Notes:If you just need to customize the returned post IDs on the page, also **before** facet filtering, use the [facetwp_pre_filtered_post_ids](/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/) hook instead. And another way to customize the returned posts for specific facets, is the [facetwp_facet_filter_posts](/help-center/developers/hooks/querying-hooks/facetwp_facet_filter_posts/) hook.
Within the hook, you have access to information about the page, listing template and facets used, via the 
```
FacetWP_Renderer
```

 class. This can be used to let the code run only in certain conditions. For example, you can check:

- if a specific Listing Builder template is used (with 
```
$class->ajax_params['template']
```

).
- if the page has a specific URI (with 
```
$class->http_params['uri']
```

). Note that the “URI” is the part of the URL without the domain name and the query variables, and without beginning or ending slashes.
- if specific facets or facet choices are currently in use (with 
```
$class->facets[ $facet_name ]['selected_values']
```

).

See the [code examples below](#usage-examples) for ways to use this.

## Parameters

- **$post_ids** | array | An array of post IDs
- **$class** | object | The 
```
FacetWP_Renderer
```

 class (see /includes/class-renderer.php)

## Usage examples

### Customize post IDs after any facet filtering

The following examples show how to customize the returned post IDs after **any** facets are filtering:

#### Remove one post ID after facet filtering

This example prevents post ID = 
```
42
```

 from appearing in the results after any facet filtering, if the [Listing Builder listing template](/help-center/listing-templates/listing-builder/) is named “books”. The listing template name is available in the 
```
ajax_params
```

 object within the 
```
FacetWP_Renderer
```

 class:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_filtered_post_ids', function( $post_ids, $class ) {
  if ( 'books' == $class->ajax_params['template'] ) { // Change 'books' to the name of your listing
    if ( $post_ids !== FWP()->unfiltered_post_ids ) { // Is only true after facet filtering
      if ( false !== ( $key = array_search( 42, $post_ids ) ) ) { // Remove post ID 42 after facet filtering
        unset( $post_ids[ $key ] );
      }
    }
  }
  return $post_ids;
}, 10, 2 );
```

#### Remove multiple post IDs after facet filtering

This example prevents multiple post IDs from appearing in the results after any facet filtering, on a page where the URI is 
```
recipes/vegetarian
```

. The URI is available in the 
```
http_params
```

 object within the 
```
FacetWP_Renderer
```

 class:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_filtered_post_ids', function( $post_ids, $class ) {
  if ( 'recipes/vegetarian' == $class->http_params['uri'] ) { // Change 'recipes/vegetarian' to your page URI
    if ( $post_ids !== FWP()->unfiltered_post_ids ) { // Is only true after facet filtering
      $remove = [42,43,44]; // Remove these post IDs after facet filtering
      $post_ids = array_diff($post_ids, $remove);
    }
  }
  return $post_ids;
}, 10, 2 );
```

#### Keep a specific post ID after facet filtering

This example prevents post ID = 
```
42
```

 from being filtered out after any facet filtering. Note that this post ID needs to be present when no facets are in use.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_filtered_post_ids', function( $post_ids, $class ) {
  if ( 'recipes/vegetarian' == $class->http_params['uri'] ) { // Change 'recipes/vegetarian' to your page URI
    if ( $post_ids !== FWP()->unfiltered_post_ids ) { // Is only true after facet filtering
      $newPostID = 42; // Keep post ID 42 after facet filtering
      if ( ! in_array( $newPostID, $post_ids ) ) {
        $post_ids[] = $newPostID;
      }
    }
  }
  return $post_ids;
}, 10, 2 );
```

#### Keep only a selection of post IDs after facet filtering

To display only a selection of post IDs in the results after any facet filtering, you can pass them in an array:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_filtered_post_ids', function( $post_ids, $class ) {
  if ( 'recipes/vegetarian' == $class->http_params['uri'] ) { // Change 'recipes/vegetarian' to your page URI
    if ( $post_ids !== FWP()->unfiltered_post_ids ) { // Is only true after facet filtering
      $post_ids = [ 42, 43, 44 ];  // Only show these post IDs
    }
  }
  return $post_ids;
}, 10, 2 );
```

This will effectively disable filtering logic entirely, because no matter what filters you use, the results will only contain the post IDs in the array. So this example is not very practical, unless you extend it with more conditions to check for certain facets and/or facet choices:

### Customize post IDs if a specific facet is filtering

The facets and their selected values are available via 
```
$class->facets
```

. This can be used to add extra conditions that check if a **specific facet** is currently filtering, or even if that facet has a **specific choice** selected. Two examples:

#### Remove one post ID if a specific facet is filtering

Prevent post ID = 
```
42
```

 from appearing in the results if the specified facet has **any choice(s)** selected:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_filtered_post_ids', function( $post_ids, $class ) {
  if ( 'recipes/vegetarian' == $class->http_params['uri'] ) { // Change 'recipes/vegetarian' to your page URI
    $facet_name = 'my_facet_name'; // Replace 'my_facet_name' with the name of your facet
    if ( $post_ids !== FWP()->unfiltered_post_ids ) { // Is only true after facet filtering
      if ( isset( $class->facets[ $facet_name ] ) ) { // If this facet is present
        $selected = $class->facets[ $facet_name ]['selected_values'];
        if ( ! empty( $selected ) ) { // If this facet has any selected choices
          if ( false !== ( $key = array_search( 42, $post_ids ) ) ) { // Remove post ID 42
            unset( $post_ids[ $key ] );
          }
        }
      }
    }
  }
  return $post_ids;
}, 10, 2 );
```

#### Remove one post ID if a specific facet is filtering with a specific choice

Prevent post ID = 
```
42
```

 from appearing in the results if the specified facet has **one or more specific choices** selected:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_filtered_post_ids', function( $post_ids, $class ) {
  if ( 'recipes/vegetarian' == $class->http_params['uri'] ) { // Change 'recipes/vegetarian' to your page URI
    $facet_name = 'my_facet_name'; // Replace 'my_facet_name' with the name of your facet
    if ( $post_ids !== FWP()->unfiltered_post_ids ) { // Is only true after facet filtering
      if ( isset( $class->facets[ $facet_name ] ) ) { // If this facet is present
        $selected = $class->facets[ $facet_name ]['selected_values'];
        $facet_values = array(
          'my_facet_choice',
          'my_other_facet_choice'
        ); // Replace with one or more facet choices. Use the facet value (as displayed in the URL when that choice is selected).
        if ( count( array_intersect( $selected, $facet_values ) ) > 0 ) {
          if ( false !== ( $key = array_search( 42, $post_ids ) ) ) { // Remove post ID 42
            unset( $post_ids[ $key ] );
          }
        }
      }
    }
  }
  return $post_ids;
}, 10, 2 );
```

### Float sticky posts to the top

Another example can be found in our [sticky posts tutorial](/how-to-use-sticky-posts-with-facetwp/), where this hook is used to float sticky posts to the top of the listing when they are already in the results, [after facet filtering](/how-to-use-sticky-posts-with-facetwp/#option-a2-only-after-filtering), or [after (not) using a specific facet](/how-to-use-sticky-posts-with-facetwp/#option-a3-only-after-filtering-with-a-specific-facet).

## Using this hook on non-Listing-Builder listings

As [explained above](#how-this-hook-works), it is not recommended to use this hook “bare”, meaning without any extra checks for facets being in use. However, if you have a use case for running it this way, be aware that it will change results on the first page load and after filtering only in [Listing Builder listing templates](/help-center/listing-templates/listing-builder/). For performance reasons, in other [types of listing templates](/help-center/listing-templates/) (like WP archives and custom WP_Query templates), this hook is prevented from changing the query on the first page load and will only affect the results *after* facet filtering.

To make this hook also run on the first page load in these other listing types, you can combine it with the following hook in your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_preload_force_query', '__return_true' );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_filtered_post_ids)

    
## See also

    - [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [The facetwp_pre_filtered_post_ids hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/)
- [The facetwp_facet_filter_posts hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_facet_filter_posts/)
- [The facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
- [How to use sticky posts with FacetWP](https://facetwp.com/how-to-use-sticky-posts-with-facetwp/)
- [How to export filtered post data to a CSV](https://facetwp.com/how-to-export-filtered-post-data-to-a-csv/)

                    Last updated: May 6, 2026

---

## facetwp_filtered_query_args

**Source:** [https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_filtered_query_args/](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_filtered_query_args/)

## Overview

With this hook, you can change the raw [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/) arguments before the query is executed, and **after** facets are processed in the rendering process.

The query argument array is the input for the query: it tells WordPress which posts to retrieve from the database, in which order, how many per page, etc.

This hook is similar to the 
```
facetwp_query_args
```

 hook, but it runs much later. In most scenarios where you want to change FacetWP’s query arguments, [using the facetwp_query_args hook](/help-center/developers/hooks/querying-hooks/facetwp_query_args/) is recommended. But in some specific situations, you may want to change the query arguments **after** facet selections have changed them:

### When to use this hook

Where the 
```
facetwp_query_args
```

 hook runs **before** the facet selections have been processed, the 
```
facetwp_filtered_query_args
```

 runs **after** all of the following facet-processing hooks:

- [facetwp_pre_filtered_post_ids](/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/)
- [facetwp_facet_filter_posts](/help-center/developers/hooks/querying-hooks/facetwp_facet_filter_posts/)
- [facetwp_filtered_post_ids](/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/)

This means that 
```
facetwp_filtered_query_args
```

 has access to the query arguments that may be updated (or added) by the facet selections made:

- ```
post__in
```

 — contains all post IDs in the filtered results.
- ```
paged
```

 — contains the page number after using a [“Page numbers” Pager facet type](/help-center/facets/facet-types/pager/#page-numbers-pager-type).
- ```
posts_per_page
```

 — contains the updated 
```
posts_per_page
```

 after using a [“Per page” Pager facet type](/help-center/facets/facet-types/pager/#per-page-pager-type).
- ```
orderby
```

 — contains the updated 
```
orderby
```

 after using a [Sort facet](/help-center/facets/facet-types/sort).

Keep in mind that [Sort facets](/help-center/facets/facet-types/sort) set/change the 
```
orderby
```

 query argument with this same 
```
facetwp_filtered_query_args
```

 hook too, at priority 
```
1
```

. So if you use this hook at a later priority, this updated 
```
orderby
```

 query argument is also available.

### How it works

The hook works similarly to WP’s [pre_get_posts hook](/how-to-customize-wp-archive-queries/#how-to-use-pre_get_posts-to-modify-the-wp-archive-query), but unlike that hook, it only runs on pages with facets, and it has access to information about the page, listing template and facets used, via the 
```
FacetWP_Renderer
```

 class. This can be used to let the code run only in certain conditions. For example, you can check:

- if a specific Listing Builder template is used (with 
```
$class->ajax_params['template']
```

).
- if the page has a specific URI (with 
```
$class->http_params['uri']
```

). Note that the “URI” is the part of the URL without the domain name and the query variables, and without beginning or ending slashes.
- if specific facets or facet choices are currently in use (with 
```
$class->facets[ $facet_name ]['selected_values']
```

).

See the [code examples below](#usage-examples) for ways to use this.

### Where to use this hook

In [Listing Builder listing templates](/help-center/listing-templates/listing-builder/), this hook changes the results on the first page load *and* after facet filtering. For performance reasons, in other [types of listing templates](/help-center/listing-templates/) (like WP archives and custom 
```
WP_Query
```

 templates), this hook is prevented from changing the query on the first page load and will only affect the results *after* facet filtering.

To make this hook also run on the first page load in these other listing types, you can combine it with the following hook in your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_preload_force_query', '__return_true' );
```

## Parameters

- **$query_args** | array | An associative array of query arguments (see below)
- **$class** | object | The 
```
FacetWP_Renderer
```

 class (see /includes/class-renderer.php)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Based on WP_Query. 
$query_args = [
  'post_type' => 'post',
  'posts_per_page' => 15,
  // ...
  'post__in' => [ 201,205,208 ], // The array of filtered post IDs.
  'paged' => 2, // The page number after using a Pager facet.
  'orderby' => 'post__in' // The order. E.g. 'post__in' if a Search facets is in use with "Order by relevance" enabled. The 'orderby' value is changed after using a Sort facet.
];
```

## Usage examples

### Move some posts to the end of the results when using a Search facet

This hook is most useful if you need to manipulate or have access to one of the [above-mentioned](#when-to-use-this-hook)query arguments, which are added or changed **after** processing facet selections.

The most obvious one is 
```
post__in
```

 which contains all post IDs in the filtered results.

The post IDs in 
```
post__in
```

 will not be in the order that they are in the results, which is determined by the 
```
orderby
```

 argument. However, in some situations, the 
```
orderby
```

 argument is set to 
```
'orderby' => 'post__in'
```

. This happens when a [Search facet](/help-center/facets/facet-types/search/) is in use and its [“Order by relevance” setting](/help-center/facets/facet-types/search/#orderbyrelevance) is enabled, or when a [Proximity facet](/help-center/facets/facet-types/proximity/) is in use and it is [ordering the results by distance](/help-center/facets/facet-types/proximity/#sort-results-by-distance).

The following example shows how to make use of this. The code moves the post IDs in the array on [line 7](#move-posts-to-last-if-post-in-L7) to the end of the filtered results, if a Search facet is in use that has its “Order by relevance” setting enabled.

This example only works when the listing name is 
```
my_listing_template
```

, as set in [line 3](#move-posts-to-last-if-post-in-L3). You could change this condition to use the page URI instead, by using 
```
$class->http_params['uri']
```

. See [the facetwp_query_args page](/help-center/developers/hooks/querying-hooks/facetwp_query_args/#usage-examples) for some examples.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_filtered_query_args', function( $query_args, $class ) {

  if ( 'my_listing_template' == $class->ajax_params['template'] ) { // Change 'my_listing_template' to the name of your listing.

    if ( ! empty( $query_args['post__in'] ) && isset( $query_args['orderby'] ) && $query_args['orderby'] === 'post__in' ) {

      $move_to_last = [ 12875, 12748, 15678 ]; // Move these post IDs to the end of the results.

      foreach ( $move_to_last as $post_id ) {
        $key = array_search( $post_id, $query_args['post__in'] );
        if ( $key !== false ) {
          array_splice( $query_args['post__in'], $key, 1 );
          $query_args['post__in'][] = $post_id;
        }
      }

    }
  }
  return $query_args;
}, 10, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_filtered_query_args)

    
## See also

    - [The facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
- [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [The facetwp_pre_filtered_post_ids hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/)
- [The facetwp_facet_filter_posts hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_facet_filter_posts/)
- [The facetwp_filtered_post_ids hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Using the Listing Builder in Dev Mode](https://facetwp.com/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [How to filter or order a WP_Query by one or more custom fields](https://facetwp.com/how-to-filter-or-order-a-wp_query-by-one-or-more-custom-fields/)
- [How to order a WP_Query by terms or categories](https://facetwp.com/how-to-order-a-wp_query-by-terms-or-categories/)
- [Random ordering in FacetWP](https://facetwp.com/random-ordering-in-facetwp/)
- [How to use sticky posts with FacetWP](https://facetwp.com/how-to-use-sticky-posts-with-facetwp/)
- [How to use the offset query argument with FacetWP](https://facetwp.com/how-to-use-the-offset-query-argument-with-facetwp/)
- [How to use a different post per page on the first page](https://facetwp.com/how-to-use-a-different-post-per-page-on-the-first-page/)

                    Last updated: April 24, 2026

---

## facetwp_is_main_query

**Source:** [https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/)

## Overview

This hook is useful if FacetWP is unable to auto-detect the correct query (such as when there’s a custom query on a page).

This hook is not relevant for shortcode templates (made with the [Listing Builder](/help-center/listing-templates/listing-builder/)).

## Parameters

- **$is_main_query** | boolean | Whether FacetWP should use the current query
- **$query** | object | The WP_Query object

## How it works

On [WP archive templates](/help-center/listing-templates/wp-archive-page/), or when using a [custom WP Query](/help-center/listing-templates/custom-wp-query/), FacetWP will automatically try to find the right query. FacetWP uses the following logic to determine whether a query should be used:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$is_main_query = ( $query->is_archive || $query->is_search || ( $query->is_main_query() && ! $query->is_singular ) );
```

FacetWP uses the **first query** that matches the above criteria. While this works great most of the time, we understand that this won’t work 100% of the time with all themes. This hook is useful when the above logic isn’t sufficient.

## Forcing a custom query

Let’s say we have a [custom WP_Query](/help-center/listing-templates/custom-wp-query/) on a page that FacetWP isn’t able to auto-detect.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$args = [
  'post_type' => 'event',
  'posts_per_page' => 10,
  'facetwp' => true, // we added this
];
$query = new WP_Query( $args );
```

By adding 
```
facetwp => true
```

 to the query arguments, FacetWP will use this query for filtering unless another query has already been chosen.

## How to ignore archive queries

On [WP archive pages](/help-center/listing-templates/wp-archive-page/#how-to-determine-if-you-are-on-a-wp-archive-page) (such as post type archives, category, term or 
```
/shop/
```

 archives, the home page, or the search results page), **FacetWP by default will always prioritize the archive query** ahead of any other query on the page.

If you are using a [custom WP Query](/help-center/listing-templates/custom-wp-query/) or a [Listing Builder listing template](/help-center/listing-templates/listing-builder/) on a WP archive page, you have to tell FacetWP explicitly which query (not) to use, otherwise unexpected things will happen.

Using this hook, it is possible to force FacetWP to **ignore** the archive query, and use the custom query or Listing Builder listing query instead. Add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ( $query->is_archive() && $query->is_main_query() ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 10, 2 );
```

Notes: If you set a static page for your “Posts page” (blog) page in WP’s Settings > Reading settings, for that page 
```
is_archive()
```

 will return false. For the above code to work on such a posts page, replace 
```
is_archive()
```

 on [line 2](#ignore-archives-L2) with 
```
is_home()
```

. Depending on the “Reading” settings for the homepage, the homepage may also be the post type archive for posts. Also for this kind of homepage, replace 
```
is_archive()
```

 with 
```
is_home()
```

. Similarly, if you want this code to work on a search results page, replace 
```
is_archive()
```

 with 
```
is_search()
```

.
Important: Generally, [custom WP Queries](/help-center/listing-templates/custom-wp-query/) should not be used in [WP archive templates](/help-center/listing-templates/wp-archive-page/) (such as post type archives, taxonomy archives, etc) to replace WP’s default archive query. We recommend modifying the existing archive query [with a pre_get_posts](/how-to-customize-wp-archive-queries/) filter if needed.

### How to ignore archive queries conditionally

If you need to ignore the archive query only on specific archive templates, you can apply the above code conditionally:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {

  $uri = FWP()->helper->get_uri();
  $is_desired_page = in_array( $uri, [ 'some/page', 'some/other/page', 'also/this/page'] );

  if ( $query->is_archive() && $query->is_main_query() && $is_desired_page ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 10, 2 );
```

For the condition, you can also use regular WordPress [conditional tags](https://codex.wordpress.org/Conditional_Tags), for example 
```
is_category('events')
```

.

## How to ignore other queries

In some cases, FacetWP’s automatic query detection latches on to the wrong query on the page. This example tells FacetWP to ignore queries with the post_type set to 
```
tribe_events
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ( 'tribe_events' == $query->get( 'post_type' ) ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 10, 2 );
```

## Disable automatic query detection

FacetWP will automatically try to detect the right query on the page. If you want to disable this feature, and only allow explicitly set queries, add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ( true !== $query->get( 'facetwp', false ) ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 10, 2 );
```

With this code in place, queries must be explicitly set to enable FacetWP. This happens when:

- [using a Listing Builder listing template](/help-center/listing-templates/listing-builder/).
- [using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/) with 
```
facetwp => true
```

 set, either directly in its query arguments, or added with a 
```
pre_get_posts
```

 (or other) filter.
- [using a supported page builder module](/help-center/listing-templates/using-a-page-builder/), with its “enable FacetWP” setting enabled.
- [using a supported block](/help-center/using-facetwp-with/blocks/#supported-blocks), with its “enable FacetWP” setting enabled.

## Enable “Advanced query detection”

### What is “Advanced query detection”?

![Enable 'Advanced query detection' in FacetWP's settings.](https://facetwp.com/wp-content/uploads/2025/10/advanced-query-detection.png)Enable “Advanced query detection” in FacetWP’s settings.
FacetWP’s “Advanced query detection” setting (called “**Strict query detection**” in FacetWP versions older than [v4.5](/help-center/changelog/#4-5)) prevents FacetWP’s automatic query detection from incorrectly choosing (invisible) archive queries on the page to filter.

If the setting is disabled, FacetWP will try to use the first query on the page that WP treats as an archive query (for which 
```
is_archive()
```

 is 
```
true
```

). In the past, this was useful in situations with a [page builder widget](/help-center/listing-templates/using-a-page-builder/), to auto-detect the widget’s custom query as the main query to filter. However, over time, more and more plugins and custom code started adding 
```
WP_Query
```

 queries for all kinds of purposes. With the setting disabled, these will be incorrectly auto-detected as the main query to filter. Enabling the setting fixes this by letting FacetWP choose only WordPress’s main query (for which 
```
is_main_query()
```

 is true) to filter.

For the above reasons, the setting is now  **enabled by default** for new installs in FacetWP versions newer than [v4.2.3](/help-center/changelog/#4-2-3). In 99% of cases **you should keep it enabled**. Disabling it will cause FacetWP to filter the wrong query on the page, resulting in a disconnect between your facets and the listing to filter.

Only disable the setting if you have a specific reason and understand what it does, or if you are instructed to do so in support.

### Enable “Advanced query detection” with PHP

If you want to “enable” this setting with PHP, you can add the following code to your (child) theme’s functions.php. This code does exactly the same as the setting if it is enabled:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ( $query->is_archive() && ! ( $query->is_main_query() || true === $query->get( 'facetwp', false ) ) ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 100, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_is_main_query)

    
## See also

    - [Using the right query](https://facetwp.com/help-center/troubleshooting/using-the-right-query/)
- [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [Using a page builder](https://facetwp.com/help-center/listing-templates/using-a-page-builder/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [The facetwp_template_use_archive hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/)

                    Last updated: May 9, 2026

---

## facetwp_pager_args

**Source:** [https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pager_args/](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pager_args/)

## Overview

If you are using a [Pager facet](/help-center/facets/facet-types/pager/), this hooks lets you manipulate the paging data that the Pager uses to display itself: the currently displayed 
```
page
```

, the number of posts 
```
per_page
```

, the 
```
total_rows
```

 (total number of posts) and the 
```
total_pages
```

 (total number of pages).

This hook can be useful if you are manipulating the query with an 
```
offset
```

 [query argument](https://developer.wordpress.org/reference/classes/wp_query/#pagination-parameters), or if you are changing 
```
posts_per_page
```

 on the fly. In these types of scenarios, this hook can be used to correct the values displayed in the Pager.

## Parameters

- **$pager_args** | array | An associative array of pager data (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<?php
$pager_args = [
  'page' => 1, // The page link number (integer) - Starts at 1, not 0
  'per_page' => 6, // Number of posts per page (integer)
  'total_rows' => 30, // Total number of posts (integer)
  'total_pages' => 5 // Total number of pages (float)
];
```

## Usage example

The following example manipulates the 
```
total_pages
```

 and 
```
per_page
```

 values used by the Pager facet:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_pager_args', function( $pager_args ) {

  $per_page = $pager_args['per_page'];
  $per_page_new = 10;

  $pager_args['total_pages'] = 1 + ceil( ( $pager_args['total_rows'] - $per_page ) / $per_page_new );

  if ( $pager_args['page'] > 1 ) {
    $pager_args['per_page'] = $per_page_new;
  }

  return $pager_args;

}, 10, 1 );
```

Note that this snippet by itself does not accomplish anything useful. This example is part of [a larger piece of code that makes it possible to set a different a different posts_per_page for the first page](/how-to-use-a-different-post-per-page-on-the-first-page/#different-posts-per-page-fixes).

    
## See also

    - [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The facetwp_facet_pager_link hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_pager_link/)
- [The facetwp_pager_html hook](https://facetwp.com/help-center/developers/hooks/deprecated-hooks/facetwp_pager_html/)
- [The facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
- [The facetwp_facet_render_args hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/)
- [How to use a different post per page on the first page](https://facetwp.com/how-to-use-a-different-post-per-page-on-the-first-page/)

                    Last updated: July 3, 2024

---

## facetwp_pre_filtered_post_ids

**Source:** [https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/)

## Overview

With this hook you can customize the initial bucket of post IDs, **after** the 
```
WP_Query
```

 has been executed but **before** any facets have been [processed](#how-this-hook-works).

This hook can be used to [remove a single](#remove-one-post-id) or [multiple posts](#remove-multiple-post-ids) from the page, or [pass a custom array of post IDs](#keep-only-a-selection-of-post-ids), overruling the 
```
WP_Query
```

 entirely.

Using this hook can be an alternative to using 
```
post__in
```

 or 
```
post__not_in
```

, either in the original query arguments, or added later [with a pre_get_posts hook](/how-to-customize-wp-archive-queries/#how-to-use-pre_get_posts-to-modify-the-wp-archive-query), or a [facetwp_query_args hook](/help-center/developers/hooks/querying-hooks/facetwp_query_args/).

Note:[WP_Query](https://developer.wordpress.org/reference/classes/wp_query/#post-page-parameters) has the limitation that you cannot use 
```
post__in
```

 and 
```
post__not_in
```

 simultaneously.

### How this hook works

To understand what this hook does exactly, be aware that – despite what the name suggests – it runs in the rendering process **before** facet choices are **processed**, not before facets are actually **filtering**: also facets with no selections are processed. So this hook will run on each page load, also on the first page load, no matter if facets are being used or not.

In Listing Builder templates, if you filter out post IDs with this hook, the posts will be removed before and after filtering. (Note: [in other listing template types only after filtering](#where-to-use-this-hook)). If you need to change the returned post IDs **only after facet filtering**, use the [facetwp_filtered_post_ids](/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/) hook instead. That hook can be made to run only if any (or specific) facets are in use, or even only if specific facet choices have been made. Another way to customize filtered posts for specific facets, is the [facetwp_facet_filter_posts](/help-center/developers/hooks/querying-hooks/facetwp_facet_filter_posts/) hook.

Within the hook, you have access to information about the page, listing template and facets used, via the 
```
FacetWP_Renderer
```

 class. This can be used to let the code run only in certain conditions. For example, you can check:

- if a specific Listing Builder template is used (with 
```
$class->ajax_params['template']
```

).
- if the page has a specific URI (with 
```
$class->http_params['uri']
```

). Note that the “URI” is the part of the URL without the domain name and the query variables, and without beginning or ending slashes.

See the [code examples below](#usage-examples) for ways to use this.

### Where to use this hook

In [Listing Builder listing templates](/help-center/listing-templates/listing-builder/), this hook changes the results on the first page load *and* after facet filtering. For performance reasons, in other [types of listing templates](/help-center/listing-templates/) (like WP archives and custom WP_Query templates), this hook is prevented from changing the query on the first page load and will only affect the results *after* facet filtering.

To make this hook also run on the first page load in these other listing types, you can combine it with the following hook in your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_preload_force_query', '__return_true' );
```

A usage example can be found in our [sticky posts tutorial](/how-to-use-sticky-posts-with-facetwp/), where the 
```
facetwp_pre_filtered_post_ids
```

 hook is used to float sticky posts to the top of the listing when they are already in the results, and the 
```
facetwp_preload_force_query
```

 hook is needed [to make sure this also happens on first page load](/how-to-use-sticky-posts-with-facetwp/#option-b1-before-and-after-filtering), on [WP archive](/help-center/listing-templates/wp-archive-page/) or [custom WP_Query](/help-center/listing-templates/custom-wp-query/) listing templates.

## Parameters

- **$post_ids** | array | An array of post IDs
- **$class** | object | The 
```
FacetWP_Renderer
```

 class (see /includes/class-renderer.php)

## Usage examples

### Remove one post ID

This example prevents post ID = 
```
42
```

 from appearing in the results, if the [Listing Builder listing template](/help-center/listing-templates/listing-builder/) is named “books”. The listing template name is available in the 
```
ajax_params
```

 object within the 
```
FacetWP_Renderer
```

 class:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_pre_filtered_post_ids', function( $post_ids, $class ) {
  if ( 'books' == $class->ajax_params['template'] ) { // Change 'books' to the name of your listing
    if ( false !== ( $key = array_search( 42, $post_ids ) ) ) { // Remove post ID 42
      unset( $post_ids[ $key ] );
    }
  }
  return $post_ids;
}, 10, 2 );
```

### Remove multiple post IDs

This example prevents multiple post IDs from appearing in the results on a page where the URI is 
```
recipes/vegetarian
```

. The URI is available in the 
```
http_params
```

 object within the 
```
FacetWP_Renderer
```

 class:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_pre_filtered_post_ids', function( $post_ids, $class ) {
  if ( 'recipes/vegetarian' == $class->http_params['uri'] ) { // Change 'recipes/vegetarian' to your page URI
    $remove_ids = [42,43,44]; // Remove these post IDs
    $post_ids = array_diff( $post_ids, $remove_ids );
  }
  return $post_ids;
}, 10, 2 );
```

### Keep only a selection of post IDs

To display only a selection of post IDs in the results, you can pass them in an array:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_pre_filtered_post_ids', function( $post_ids, $class ) {
 if ( 'recipes/vegetarian' == $class->http_params['uri'] ) { // Change 'recipes/vegetarian' to your page URI
    $post_ids = [42,43,44]; // Only show these post IDs
  }
  return $post_ids;
}, 10, 2 );
```

Note that this does not influence filtering: you can still filter these posts with facets. If you need to prevent this, use the [facetwp_filtered_post_ids](/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/) hook instead, with which you can customize returned post IDs **after** facet filtering.

### Float sticky posts to the top

Another example can be found in our [sticky posts tutorial](/how-to-use-sticky-posts-with-facetwp/), where this hook is used to [float sticky posts to the top of the listing when they are already in the results](/how-to-use-sticky-posts-with-facetwp/#a-alternative-sticky-posts-in-a-listing-builder-listing).

[More examples](https://gist.facetwp.com/?_keywords=facetwp_pre_filtered_post_ids)

    
## See also

    - [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [The facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
- [The facetwp_filtered_post_ids hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/)
- [The facetwp_facet_filter_posts hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_facet_filter_posts/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [How to use sticky posts with FacetWP](https://facetwp.com/how-to-use-sticky-posts-with-facetwp/)

                    Last updated: September 18, 2025

---

## facetwp_preload_url_vars

**Source:** [https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_preload_url_vars/](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_preload_url_vars/)

## Overview

With this hook you can pre-select facet choices on page load.

## Parameters

- **$url_vars** | array | An associative array of facets and their active choices (see below)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$url_vars = [
  'my_facet_one' => [
    'choice_one',
    'choice_two',
    // ..
  ],
  'my_facet_two' => [
    'choice_one',
    'choice_two',
    'choice_three',
    // ..
  ],
// ...
];
```

## Usage

For example, to pre-select 
```
audi
```

 in the ‘make’ facet if the current page URI is 
```
demo/cars
```

 and the facet isn’t already in use, add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_preload_url_vars', function( $url_vars ) {
  if ( 'demo/cars' == FWP()->helper->get_uri() ) { // Replace 'demo/cars' with the URI of your page (everything after the domain name, excluding any slashes at the beginning and end)
    if ( empty( $url_vars['make'] ) ) { // Replace 'make' with the name of your facet
      $url_vars['make'] = [ 'audi' ]; // Replace 'audi' with the facet choice that needs to be pre-selected. Use the technical name/slug as it appears in the URL when filtering
    }
    // add more facet selections
    if ( empty( $url_vars['vehicle_type'] ) ) { // Replace 'vehicle_type' with the name of your facet
      $url_vars['vehicle_type'] = [ 'coupe' ];
    }
  }
  return $url_vars;
} );
```

When a user visits 
```
http://yoursite.com/demo/cars/
```

, ‘Audi’ will now be pre-selected in the ‘make’ facet.

Important:**Always use a condition that checks for the current page**, as is shown in the above snippet [on line 2](#preselect-facets-L2). Also, make sure the facet you are pre-selecting is actually present on the page. The reason is that even if the facet is not on the page, FacetWP will filter by it (if it exists), because at the point in the process that this hook runs, FacetWP does not know yet which facets are present on the page.
For more information and code examples of how to use this hook exactly in all situations, please refer to [our tutorial on how to pre-select facet choices](/how-to-pre-select-facet-choices/).

    
## See also

    - [How to pre-select facet choices](https://facetwp.com/how-to-pre-select-facet-choices/)
- [The FacetWP URL](https://facetwp.com/help-center/developers/the-facetwp-url/)
- [How to use get_query_var(‘paged’) with FacetWP](https://facetwp.com/how-to-use-get_query_varpaged-with-facetwp/)
- [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)

                    Last updated: November 27, 2025

---

## facetwp_query_args

**Source:** [https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)

## Overview

With this hook, you can change the raw [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/) arguments before the query is executed, and **before** facet selections are processed in the rendering process.

The query argument array is the input for the query: it tells WordPress which posts to retrieve from the database, in which order, how many per page, etc.

In most scenarios where you want to change FacetWP’s query arguments, using the 
```
facetwp_query_args
```

 hook is recommended. But in some specific situations, you may want to change the query arguments **after** facet selections have changed them. For example to manipulate or use the 
```
post__in
```

 query argument which contains all post IDs in the filtered results. In these scenarios, you can use [the facetwp_filtered_query_args hook](/help-center/developers/hooks/querying-hooks/facetwp_filtered_query_args/) instead.

### How it works

The hook works similarly to WP’s [pre_get_posts hook](/how-to-customize-wp-archive-queries/#how-to-use-pre_get_posts-to-modify-the-wp-archive-query), but unlike that hook, it only runs on pages with facets, and it has access to information about the page, listing template and facets used, via the 
```
FacetWP_Renderer
```

 class. This can be used to let the code run only in certain conditions. For example, you can check:

- if a specific Listing Builder template is used (with 
```
$class->ajax_params['template']
```

).
- if the page has a specific URI (with 
```
$class->http_params['uri']
```

). Note that the “URI” is the part of the URL without the domain name and the query variables, and without beginning or ending slashes.
- if specific facets or facet choices are currently in use (with 
```
$class->facets[ $facet_name ]['selected_values']
```

).

See the [code examples below](#usage-examples) for ways to use this.

### Where to use this hook

In [Listing Builder listing templates](/help-center/listing-templates/listing-builder/), this hook changes the results on the first page load *and* after facet filtering. For performance reasons, in other [types of listing templates](/help-center/listing-templates/) (like WP archives and custom 
```
WP_Query
```

 templates), this hook is prevented from changing the query on the first page load and will only affect the results *after* facet filtering.

To make this hook also run on the first page load in these other listing types, you can combine it with the following hook in your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_preload_force_query', '__return_true' );
```

## Parameters

- **$query_args** | array | An associative array of query arguments (see below)
- **$class** | object | The 
```
FacetWP_Renderer
```

 class (see /includes/class-renderer.php)

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Based on WP_Query. 
$query_args = [
  'post_type' => 'post',
  'posts_per_page' => 15,
  // ...
];
```

## Usage examples

### Change the listing order

This example sorts the results by post title if the [Listing Builder listing template](/help-center/listing-templates/listing-builder/) is named “books”. The listing template name is available in the 
```
ajax_params
```

 object within the 
```
FacetWP_Renderer
```

 class:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_query_args', function( $query_args, $class ) {
  if ( 'books' == $class->ajax_params['template'] ) { // Change 'books' to the name of your listing
    $query_args['orderby'] = 'title';
    $query_args['order'] = 'ASC';
  }
  return $query_args;
}, 10, 2 );
```

### Remove posts

This example removes specific posts from the query on a page where the URI is 
```
events/festivals
```

. The URI is available in the 
```
http_params
```

 object within the 
```
FacetWP_Renderer
```

 class:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_query_args', function( $query_args, $class ) {
  if ( 'events/festivals' == $class->http_params['uri'] ) { // Change 'events/festivals' to your page URI
    $query_args['post__not_in'] = [42,43,44]; // Remove these posts
  }
  return $query_args;
}, 10, 2);
```

Note:Instead of the 
```
post__not_in
```

 argument you can also use the [facetwp_pre_filtered_post_ids](/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/) hook to customize which post IDs are returned in the listing. To customize returned post IDs only after facet filtering, use the [facetwp_filtered_post_ids](/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/) hook.

### Customize query arguments when a specific facet is in use

The facets and their selected values are available via 
```
$class->facets
```

. The following example uses that to change the 
```
orderby
```

 and 
```
order
```

 query arguments only if **a specific facet** is in use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_query_args', function( $query_args, $class ) {
  $facet_name = 'my_facet_name'; // Replace 'my_facet_name' with the name of your facet
  if ( isset( $class->facets[ $facet_name ] ) ) { // If this facet is present
    $selected = $class->facets[ $facet_name ]['selected_values'];
    if ( ! empty( $selected ) ) { // If this facet has any selected choices
      $query_args['orderby'] = 'title';
      $query_args['order'] = 'DESC';
    }
  }
  return $query_args;
}, 10, 2 );
```

The following more elaborate example unsets a 
```
meta_query
```

 query argument (in [line 13](#unset-meta-query-if-search-facet-in-use-L13)) if one of two Search facets in the [array on line 7](#unset-meta-query-if-search-facet-in-use-L7) is in use.

The code is applied only for the Listing Builder listing templates that are in the array on [line 3](#unset-meta-query-if-search-facet-in-use-L3).

The result of the code is that if the query of one of these listings has a [query filter set up](/help-center/listing-templates/listing-builder/#add-query-filtering-rules) to, for example, only show posts with a certain custom field value, this query filter (which is a 
```
meta_query
```

 argument), will be unset (removed) when one of the Search facets is in use.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_query_args', function( $query_args, $class ) {

  $target_templates = [ 'portraits', 'dance_portraits' ];  // The listing templates to target

  if ( in_array( $class->ajax_params['template'], $target_templates ) ) {

    $facet_names = [ 'portraits_search', 'dance_portraits_search',]; // The facets to target

    foreach ( $facet_names as $facet_name ) {
      if ( isset( $class->facets[ $facet_name ] ) ) { // If this facet is present
        $selected = $class->facets[ $facet_name ]['selected_values'];
        if ( ! empty( $selected ) ) { // If this facet has any selected choices
          unset( $query_args['meta_query'] );
          break;
        }
      }
    }
  }
  return $query_args;
}, 10, 2 );
```

### Customize query arguments when specific facet choices are selected

You can go even further and only change the query arguments if **one or more specific facet choices** are selected:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_query_args', function( $query_args, $class ) {
  $facet_name = 'my_facet_name'; // Replace 'my_facet_name' with the name of your facet
  if ( isset( $class->facets[ $facet_name ] ) ) { // If this facet is present
    $selected = FWP()->facet->facets[ $facet_name ]['selected_values'];
    $facet_values = array(
      'my_facet_choice',
      'my_other_facet_choice'
    ); // Replace with one or more facet choices. Use the facet value (as displayed in the URL when that choice is selected).
    if ( count( array_intersect( $selected, $facet_values ) ) > 0 ) {
      $query_args['orderby'] = 'title';
      $query_args['order'] = 'DESC';
    }
  }
  return $query_args;
}, 10, 2 );
```

### Customize query arguments when any facet is in use, and/or on specific listing templates

The following example sets the 
```
orderby
```

 query argument if **any facet** [is currently in use](#orderby-if-any-facet-in-use-L7).

It also shows how to apply the code only on specific [Listing Builder](/help-center/listing-templates/listing-builder/) listing templates, in [line 4](#orderby-if-any-facet-in-use-L4). And it shows how to add a fallback 
```
orderby
```

/
```
order
```

 argument, [in an array](#orderby-if-any-facet-in-use-L8-L11).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_query_args', function( $query_args, $class ) {

  // Define an array of Listing Builder listing names you want to target
  $target_templates = array( 'template1', 'template2', 'template3' );

  if ( in_array( $class->ajax_params['template'], $target_templates ) ) {
    if (! empty( $class->facets ) ) { // If any facet is selected
      $query_args['orderby'] = array(
        'date'  => 'DESC', // Order by date, in DESC order
        'title' => 'ASC' // Order by post title in ASC order, as fallback order (if dates are the same)
      );
    }
  }
  return $query_args;
}, 10, 2 );
```

### Add a taxonomy query

This example filters the query with a 
```
tax_query
```

, which makes it return only posts that have one of the specified terms selected for the specified taxonomy 
```
types
```

. Because of the checks in line 2, the filter only runs on the [Listing Builder listing template](/help-center/listing-templates/listing-builder/) with name 
```
gluten_free
```

, and only if the URI is 
```
gluten-free/recipes
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_query_args', function( $query_args, $class ) {
  if ( 'gluten_free' == $class->ajax_params['template'] && 'gluten-free/recipes' == $class->http_params['uri'] ) {
    $query_args['tax_query'] = array(
      array(
        'taxonomy' => 'types', // Change 'types' to your (custom) taxonomy name
        'field'    => 'slug',
        'terms'    => array( 'breakfast', 'lunch', 'dinner' ) // Change to your term slugs to filter
      )
    );
  }
  return $query_args;
}, 10, 2 );
```

### Ignore sticky posts

FacetWP does not work well with [sticky posts](https://developer.wordpress.org/themes/functionality/sticky-posts/) out of the box. To ignore sticky posts in FacetWP Listing Builder listings entirely, you can use the following snippet:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_query_args', function( $query_args, $class ) {
  if ( 'my_listing_name' == $class->ajax_params['template'] ) { // Replace 'my_listing_name' with the name of your Listing Builder listing
    $query_args['ignore_sticky_posts'] = true;
  }
  return $query_args;
}, 10, 2);
```

See our [sticky posts tutorial](/how-to-use-sticky-posts-with-facetwp/) for more code examples and information about ignoring sticky posts in FacetWP listings, and how to make them work if you actually want them.

### Add a taxonomy query based on a shortcode attribute

The following example checks if a [Listing Builder listing template](/help-center/listing-templates/listing-builder/) shortcode has an custom attribute 
```
project
```

:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp template="publications" project="housing,architecture"]
```

If it does, it uses a taxonomy query to narrow the query to only show posts with the term(s) specified in the attribute, in this example 
```
housing
```

 and 
```
architecture
```

. The code assumes that if there are multiple terms in the attribute, they are comma-separated (with or without spaces).

The [first part](#tax-query-shortcode-attributes-L1-L23) of the code stores the shortcode attribute values in a JavaScript variable 
```
FWP_HTTP.shortcode_atts
```

, so they can also be used *after* a facet refresh, when 
```
FWP()->display->shortcode_atts
```

 does not work.

The [second part](#tax-query-shortcode-attributes-L25-L62) gets the specified shortcode attribute’s values, [converts them into an array](#tax-query-shortcode-attributes-L48), and passes them into a [tax_query argument](#tax-query-shortcode-attributes-L50-L56). Make sure to adapt the template name, attribute name and taxonomy in [L28-30](#tax-query-shortcode-attributes-L28-L30).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Part 1: Store the shortcode attribute values for use after filtering
add_action( 'facetwp_scripts', function() {

    foreach ( FWP()->display->shortcode_atts as $atts ) {
        if ( isset( $atts['template'] ) && isset( $atts['type'] ) ) {
            $shortcode_atts = $atts['type'];
            break;
        }
    }

    if( isset( $shortcode_atts ) ) {
        ?>
        <script>
          (function($) {
            $(document).on('facetwp-refresh', function() {
              FWP_HTTP.shortcode_atts = '<?php echo $shortcode_atts; ?>';
            });
          })(jQuery);
        </script>

        <?php
    }
}, 100 );

// Part 2: Get the shortcode attribute values and use them in a tax_query argument
add_filter( 'facetwp_query_args', function( $query_args, $class ) {

    $template = 'publications'; // Change 'publications' to the name of your listing template
    $attribute = 'project'; // Change 'project' to your custom attribute
    $taxonomy = 'category';// Change 'category' to the name of your (custom) taxonomy name

    if ( $template == $class->ajax_params['template'] ) {

        // Get the shortcode attributes from FWP_HTTP.shortcode_atts for use after filtering
        $shortcode_atts = isset( $class->http_params['shortcode_atts'] ) ? $class->http_params['shortcode_atts'] : '';

        // Get the shortcode attributes before filtering
        foreach ( FWP()->display->shortcode_atts as $atts ) {
            if ( isset( $atts['template'] ) && $template == $atts['template'] && isset( $atts[ $attribute ] ) ) {
                $shortcode_atts = $atts[ $attribute ];
                break;
            }
        }

        if ( $shortcode_atts !== '' ) {

            // Convert the attribute values to an array
            $terms = array_map( 'trim', explode( ',', $shortcode_atts ) );

            $query_args['tax_query'] = [
                [
                    'taxonomy' => $taxonomy,
                    'field'    => 'slug',
                    'terms'    => $terms
                ]
            ];

            // Add additional query arguments here

        }
    }
    return $query_args;
}, 10, 2 );
```

Note that there is also the 
```
facetwp_shortcode_html
```

 hook, which can be used to change the shortcode’s placeholder/container HTML output (for example set a custom class), [based on a custom shortcode attribute](/help-center/developers/hooks/output-hooks/facetwp_shortcode_html/#set-a-custom-listing-template-class-based-on-a-custom-attribute).

## Using the current post or page ID or queried object

If you are [using a Listing Builder listing template](/help-center/listing-templates/listing-builder/) on a single post or page, be aware that the listing query **does not have any page/post context during the AJAX refresh** (when filtering). This allows these types of listings to load faster, but has the side effect that any info about the queried object, like the post ID of the page itself, is unknown during the refresh. The usual methods to get the post ID, like 
```
get_the_ID()
```

, or 
```
global $post
```

 with 
```
$post->ID
```

, and functions like 
```
get_queried_object()
```

, will not work after filtering.

For example, if you want to get the post ID of the post/page itself to set certain query arguments (for example [in a taxonomy query argument](#add-a-taxonomy-query)), you will notice that this only works on the first page load, but not after filtering.

The solution is to store the post ID in a JavaScript variable with the [facetwp-refresh event](/help-center/developers/javascript-reference/facetwp-refresh/):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  if ( is_singular() ) : ?>
    <script>
      document.addEventListener('facetwp-refresh', function() {
        FWP_HTTP.post_id = <?php echo get_the_ID(); ?>;
      });
    </script>
  <?php endif;
}, 100 );
```

Or, similarly, to store the current term slug on a term archive page:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  if ( is_tax() ) : ?>
    <script>
      document.addEventListener('facetwp-refresh', function() {
        FWP_HTTP.current_term_slug = <?php echo get_queried_object()->slug; ?>;
      });
    </script>
  <?php endif;
}, 100 );
```

Then, within the 
```
facetwp_query_args
```

 hook, you can retrieve the stored post ID or current term slug as follows:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_query_args', function( $query_args, $class ) {
  if ( 'my_template_name' == $class->ajax_params['template'] ) { // Replace 'my_template_name' with the name of your facet. Or use $class->http_params['uri'] as conditional

    $post_id = isset( $class->http_params['post_id'] ) ? $class->http_params['post_id'] : get_the_id();
    // Do something with $post_id

    $current_term_slug = isset( $class->http_params['current_term_slug'] ) ? $class->http_params['current_term_slug'] : get_queried_object()->ID;
    // Do something with $current_term_slug

  }
  return $query_args;
}, 10, 2 );
```

If you are using other hooks that do not have access to 
```
$class->http_params
```

 (like a [pre_get_posts hook](/how-to-customize-wp-archive-queries/#how-to-use-pre_get_posts-to-modify-the-wp-archive-query)), or if you need to use the post ID or queried object info [directly in the Query tab of the Listing Builder in Dev mode](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/#using-the-current-post-or-page-id-or-queried-object), you can access the stored post ID or queried object info with this code instead:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$post_id = isset( FWP()->facet->http_params[ 'post_id' ] ) ? FWP()->facet->http_params[ 'post_id' ] : get_the_id();
// Do something with $post_id

$current_term_slug = isset( FWP()->facet->http_params[ 'current_term_slug' ] ) ? FWP()->facet->http_params[ 'current_term_slug' ] : get_queried_object()->ID;
// Do something with $current_term_slug
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_query_args)

    
## See also

    - [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Using the Listing Builder in Dev Mode](https://facetwp.com/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [The facetwp_pre_filtered_post_ids hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/)
- [The facetwp_filtered_post_ids hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/)
- [The facetwp_filtered_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_filtered_query_args/)
- [The facetwp_shortcode_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_shortcode_html/)
- [The facetwp-refresh event](https://facetwp.com/help-center/developers/javascript-reference/facetwp-refresh/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [How to filter or order a WP_Query by one or more custom fields](https://facetwp.com/how-to-filter-or-order-a-wp_query-by-one-or-more-custom-fields/)
- [How to order a WP_Query by terms or categories](https://facetwp.com/how-to-order-a-wp_query-by-terms-or-categories/)
- [Random ordering in FacetWP](https://facetwp.com/random-ordering-in-facetwp/)
- [How to use sticky posts with FacetWP](https://facetwp.com/how-to-use-sticky-posts-with-facetwp/)
- [How to use the offset query argument with FacetWP](https://facetwp.com/how-to-use-the-offset-query-argument-with-facetwp/)
- [How to use a different post per page on the first page](https://facetwp.com/how-to-use-a-different-post-per-page-on-the-first-page/)

                    Last updated: April 24, 2026

---

## facetwp_search_query_args

**Source:** [https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_search_query_args/](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_search_query_args/)

## Overview

With this hook, you can change the search query arguments used by [Search facets](/help-center/facets/facet-types/search/), before the query is executed.

This hook **only** works for Search facets that have their [search engine](/help-center/facets/facet-types/search/#search-engine) set to “**WP Default**“.

## Parameters

- **$search_args** | array | An associative array of query arguments:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Default WP search arguments
$search_args = [
  's' => $selected_values, // the search string
  'posts_per_page' => 200, // Default. Use -1 for all posts
  'fields' => 'ids',
];
```
- **$params** | array | An associative array of facet settings and the selected values (the search keyword string):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$params = [
  'facet' => [
    'name' => 'my_search_facet',
    'label' => 'my search facet',
    'type' => 'search',
    'search_engine' => '', // empty for "WP Default"
    'placeholder' => 'Type keywords',
    'auto_refresh' => 'yes',
    'operator' => 'or',
    'selected_values' => 'used keyword',
    'enable_relevance' => 'yes',
  ],
  'selected_values' => 'used keyword'
];
```

## Usage examples

### Customize the post limit for the WP Default engine

When using the “WP Default” [search engine](https://facetwp.com/help-center/facets/facet-types/search/#search-engine), a Search facet will return a maximum of **200** results. To remove or customize this limit, add the following code to your (child) theme’s functions.php.

If you set the 
```
posts_per_page
```

 to 
```
-1
```

, the number of results will not be limited, and **all** results will be retrieved. Be aware that doing this may harm performance if your listing template query has a high number of posts.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_search_query_args', function( $search_args, $params ) {
  $search_args['posts_per_page'] = -1; // Default: 200. Set to -1 to show all search results.
  return $search_args;
}, 10, 2 );
```

To customize the post limit when using a SearchWP engine, [see this section](/help-center/using-facetwp-with/searchwp/#customize-or-remove-the-post-limit), and for Relevanssi [see this section](/help-center/using-facetwp-with/relevanssi/#customize-or-remove-the-post-limit).

### Include draft posts

The following example shows how to force draft posts to appear in the search results by adding them to the 
```
post_status
```

 query argument:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_search_query_args', function( $search_args, $params ) {
  $search_args['post_status'] = [ 'publish', 'draft' ];
  return $search_args;
}, 10, 2 );
```

### Exclude posts from search results

Using the 
```
post__not_in
```

 query argument, you can prevent certain posts from showing up in the search results:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_search_query_args', function( $search_args, $params ) {
  $search_args['post__not_in'] = [ 893,894 ]; // The post ID(s) to exclude from the search results
  return $search_args;
}, 10, 2 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp_search_query_args)

    
## See also

    - [The Search facet type](https://facetwp.com/help-center/facets/facet-types/search/)
- [The facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
- [Using FacetWP with SearchWP](https://facetwp.com/help-center/using-facetwp-with/searchwp/)
- [Using FacetWP with Relevanssi](https://facetwp.com/help-center/using-facetwp-with/relevanssi/)
- [Using FacetWP with Stock status and Catalog visibility settings](https://facetwp.com/help-center/using-facetwp-with/woocommerce/using-facetwp-with-stock-status-and-catalog-visibility-settings/)
- [Using FacetWP with Weglot](https://facetwp.com/help-center/using-facetwp-with/weglot/)

                    Last updated: May 11, 2026

---

## facetwp_template_use_archive

**Source:** [https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/)

## Overview

This hook is useful if you are [using a Listing Builder listing template](/help-center/listing-templates/listing-builder/#display-a-listing-template) on a **category, tag, taxonomy term, author, or search archive page**.

With this hook in place, FacetWP will automatically **pre-filter results** based on the current category, tag, taxonomy term, author, or search term(s), by injecting them into the Listing Builder listing’s query arguments when filtering.

### Examples

For example, on the 
```
category.php
```

 term archive template, you could place a Listing Builder listing template that fetches posts. Without this hook, on the 
```
/category/events
```

 archive page, after using facets, the filtered results will be fetched from *all posts*, including posts that do not have the category ‘events’. With this hook in place, the results will only contain posts within the category ‘events’.

Similarly, consider a search results page based on the 
```
search.php
```

 template that contains a Listing Builder listing template that fetches products. Without this hook, on the search results page with the URL 
```
/?s=hoodies
```

, selecting facet choices will generate results from *all products*, including those that do not contain the search term ‘hoodies’. With this hook in place, the results will be pre-filtered with that search term, so users can use the facets on the page to further ‘drill down’ into those results.

Note:**Pre-filtering** the query with the 
```
facetwp_template_use_archive
```

 hook does not **pre-select** any facet choices. In the above category archive example, it is possible to pre-select the ‘events’ option in a facet that uses categories as its source. See [this example](/how-to-pre-select-facet-choices/#pre-select-a-facet-choice-for-a-category-tag-or-taxonomy-term-archive) to learn how to pre-select a facet choice for a category, tag or taxonomy term archive.

### Alternative

Instead of pre-filtering the listing based on the archive query that the listing is on, with the 
```
facetwp_template_use_archive
```

 hook described on this page, you can also pre-filter the listing query based on the page URI of the archive.

This can be done with a so-called dynamic URL tag. See [this section in our tutorial on dynamic URL tags](/how-to-pre-filter-listing-builder-queries-with-dynamic-url-tags/#using-dynamic-url-tags-on-archive-templates) for how to do this exactly.

In general, for Listing Builder listings placed on archives, we recommend using the 
```
facetwp_template_use_archive hook
```

, because it is only one line in your functions.php and works for all types of archives. Using a dynamic URL tag can be useful if you want to build complex queries in the Listing Builder, instead of [customizing the native archive query with a pre_get_posts hook](/how-to-customize-wp-archive-queries/).

## Parameters

- **$use_archive** | boolean | Should FacetWP pre-filter?

## Usage

Add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_template_use_archive', '__return_true' );
```

## Fixing query differences before and after filtering

As explained above, this hook pre-filters the results with the current category/tag/term or search terms by injecting them into the Listing Builder listing’s query arguments when filtering.

But when you use a Listing Builder listing template on an archive (or search page), the native category/tag/term archive query (or search query) will still be used *before* filtering, because FacetWP’s automatic query detection by default will always prioritize the archive query (or search query) ahead of any other query on the page.

This may lead to differences before and after filtering caused by [query arguments](https://developer.wordpress.org/reference/classes/wp_query/#parameters) other than the current category/tag/term or search term(s).

For example, you may see a different number of paged results before and after filtering, caused by the 
```
posts_per_page
```

 query argument in the native archive/search query being different than the one in the Listing Builder listing query. Similarly, there may be differences caused by the 
```
order
```

 and 
```
orderby
```

 query arguments not being the same.

There are two ways of fixing this:

### Ignore the archive/search query entirely

One way of fixing this is to use the [facetwp_is_main_query hook](/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/) to force FacetWP to ignore the archive / search query entirely, **in combination with the above facetwp_template_use_archive hook**.

The following code will do that for category/tag/term archives:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ( $query->is_archive() && $query->is_main_query() ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 10, 2 );
```

For a search page, use this instead:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ($query->is_search() && $query->is_main_query() ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 10, 2 );
```

### Change the archive query with a pre-get-posts filter

An alternative way of fixing differences before and after filtering is to bring the native archive/search query arguments in line with the Listing Builder listing’s query arguments [with a pre_get_posts filter](/how-to-customize-wp-archive-queries/).

## Remove facet choices that are not children of the current term

If you have a category/tag/taxonomy term archive page with a facet on it that uses the same hierarchical category/tag/taxonomy as its data source, the facet will display **all** choices (terms) for which there are posts on the page. However, posts can have multiple terms selected, so this can include terms anywhere in the taxonomy’s term hierarchy, not only children of the archive’s current term.

A common question is **how to let the facet display only child terms of the archive’s current term** (with or without the current term itself)? This can be accomplished by using the 
```
facetwp_facet_render_args
```

 to [remove all terms from the facet that are not a child term of the current term of the archive template](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#remove-facet-choices-that-are-not-children-of-the-current-term).

If you [retain the current term in the facet by setting](/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#show-current-term-branch-only-L5) by setting 
```
$keep_current_term
```

 to 
```
true
```

, you can then also [pre-select the current term](/how-to-pre-select-facet-choices/#pre-select-a-facet-choice-for-a-category-tag-or-taxonomy-term-archive), if needed also [after a reset](/how-to-pre-select-facet-choices/#reset-preselected-value-term-archive).

    
## See also

    - [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [How to pre-filter Listing Builder listing queries with dynamic URL tags](https://facetwp.com/how-to-pre-filter-listing-builder-queries-with-dynamic-url-tags/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [How to pre-select facet choices](https://facetwp.com/how-to-pre-select-facet-choices/)
- [The facetwp_facet_render_args hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/)

                    Last updated: July 28, 2026

---

## How FacetWP works

**Source:** [https://facetwp.com/help-center/developers/how-facetwp-works/](https://facetwp.com/help-center/developers/how-facetwp-works/)

This page gives a comprehensive overview of how FacetWP works.

## Facets

[Facets](/help-center/facets/) are UI elements used to filter a [listing template](#listing-templates) that retrieves and displays post items.

Facets can filter listing templates with post items (or simply “posts”) of any [(custom) post type](/what-are-posts-post-types-taxonomies-and-custom-fields/), and users (with the [User Post Type add-on](/help-center/add-on-features-and-extras/user-post-type/)). Facets cannot filter categories or terms, but they can filter posts *by* them.

Facets can filter posts by any post data, [custom field](/help-center/using-facetwp-with/advanced-custom-fields/), or [built-in or custom taxonomies](/help-center/developers/facetwp-and-taxonomies/).

Facets are aware of each other and the content in the filtered listing, and will only display relevant choices.

FacetWP offers many different [facet types](/help-center/facets/facet-types/), such as checkboxes, dropdowns, etc. Some facet types are built-in, others you have to [install as add-on plugins](/add-ons/).

## Indexing

After adding some [facets](/help-center/facets/), you’re asked to [click the Re-index button](/help-center/indexing/#how-to-run-the-indexer). [Indexing](/help-center/indexing/) is the process of storing facet data into a custom database table. This index table allows FacetWP to retrieve data very quickly.

FacetWP adds one database table: 
```
facetwp_index
```

. This table contains all the information needed to generate the facets.

![The columns in the facetwp_index database table.](https://facetwp.com/wp-content/uploads/2025/11/the-facetwp_index-table.png)The columns in the 
```
facetwp_index
```

 database table.

### How indexing works

When the [Re-index button](/help-center/indexing/#how-to-run-the-indexer) is clicked, FacetWP first retrieves all post IDs that should be indexed. It uses 
```
WP_Query
```

, for which the query arguments are customizable [with the facetwp_indexer_query_args hook](/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/).

FacetWP then loops through the array of post IDs. For each, it loops through all available facets and saves applicable values in the indexing table. Below is a pseudocode example:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoforeach ( $post_ids as $post_id ) {
  foreach ( $facets as $facet ) {
    index_values( $post_id, $facet );
  }
}
```

The values in the 
```
facet_value
```

 column are the internal technical value of each facet choice. These values are visible to the user in [the query variables of the URL when the choice is selected](/help-center/developers/the-facetwp-url/).

The values in the 
```
facet_display_value
```

 column are the facet choice labels that are visible in the facet itself, in the front-end.

The indexed values for each database row can be modified using the [facetwp_index_row hook](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/), one of the most powerful and most used [hooks](/help-center/developers/hooks/) in FacetWP.

The output of the 
```
facet_display_value
```

 labels can be further customized with the [facetwp_facet_display_value hook](/help-center/developers/hooks/output-hooks/facetwp_facet_display_value).

### Automatic indexing

FacetWP has an **automatic indexer** that performs a single re-index when an individual item (a post, page, and category or term name/slug) is edited or saved. This keeps the index up to date automatically without having to worry about it, and without putting the potentially heavy burden of a full re-index on your site. This means you **don’t** have to re-index after adding or editing/saving posts or terms, with [a few exceptions](/help-center/indexing/#when-to-re-index).

## Listing templates

Facets can filter [a wide variety of listing templates](/help-center/listing-templates/), including FacetWP’s own Listing Builder listing templates.

The [Listing Builder](/help-center/listing-templates/listing-builder/) is a very powerful and convenient alternative to [using a custom WP_Query](/help-center/listing-templates/custom-wp-query/) or other template type, especially if used in [Dev mode](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/).

For any facet to show up and work, there **needs** to be a FacetWP-enabled listing on the page. **Without a valid listing template, facets will not show up**.

Also keep in mind that [there can only be one FacetWP-enabled listing per page](/help-center/faq/can-i-use-multiple-queries-facetwp-templates-on-the-same-page/).

## Shortcodes

FacetWP uses [shortcodes](/help-center/developers/shortcodes-reference/) to let you control where on the page to display your [facets](/help-center/facets/) and [Listing Builder listing templates](/help-center/listing-templates/listing-builder/).

When you use a shortcode for a facet or Listing Builder listing, it creates an empty placeholder element that [gets populated via JavaScript](#interaction-ajax) after pageload. Below is an example of what a facet shortcode outputs before that happens:

```
<div class="facetwp-facet facetwp-facet-make facetwp-type-checkboxes" data-name="make" data-type="checkboxes"></div>
```

## Interaction / AJAX

When the page loads, FacetWP uses JavaScript to scan for facet elements, as well as the 
```
facetwp-template
```

 CSS class, which is (or should be) added to the listing container, depending on the [listing template type](/help-center/listing-templates/) used.

To see lots of useful data involved in this process, type 
```
FWP
```

 into your browser console. Specifically, if you type 
```
FWP.facets
```

, you’ll see an object containing all active facets and their selected values:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.facets
```

This data is sent to the server via AJAX, and the response is a JSON object containing HTML for the listing template and HTML for each facet, among other things.

Remember those empty HTML placeholder elements [mentioned before](#shortcodes)? FacetWP simply injects the response HTML into the appropriate container elements.

## Debugging

To debug, or to see more of information that FacetWP uses, [enable Debug Mode](/help-center/troubleshooting/#enable-debug-mode), then type 
```
FWP.settings.debug
```

 into your browser console:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.settings.debug
```

See [this section of our Troubleshooting guide](/help-center/troubleshooting/#using-debug-mode-to-diagnose-issues) for more information about using Debug Mode in the browser console.

    
## See also

    - [What are facets?](https://facetwp.com/help-center/facets/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [What are posts, post types, taxonomies and custom fields?](https://facetwp.com/what-are-posts-post-types-taxonomies-and-custom-fields/)
- [The User Post Type add-on](https://facetwp.com/help-center/add-on-features-and-extras/user-post-type/)
- [Facet types](https://facetwp.com/help-center/facets/facet-types/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)
- [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)
- [FacetWP Add-Ons](https://facetwp.com/add-ons/)
- [Indexing](https://facetwp.com/help-center/indexing/)
- [The facetwp_indexer_query_args hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_indexer_query_args/)
- [Common indexing issues](https://facetwp.com/help-center/indexing/common-indexing-issues/)
- [FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
- [The FacetWP URL](https://facetwp.com/help-center/developers/the-facetwp-url/)
- [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [The facetwp_facet_display_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Using the Listing Builder in Dev Mode](https://facetwp.com/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/)
- [Can I use multiple queries / FacetWP templates on the same page?](https://facetwp.com/help-center/faq/can-i-use-multiple-queries-facetwp-templates-on-the-same-page/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [Shortcodes reference](https://facetwp.com/help-center/developers/shortcodes-reference/)
- [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)

                    Last updated: November 28, 2025

---

## JavaScript reference

**Source:** [https://facetwp.com/help-center/developers/javascript-reference/](https://facetwp.com/help-center/developers/javascript-reference/)

[JS objects and functions](https://facetwp.com/help-center/developers/javascript-reference/js-objects-and-functions/)
					[The facetwp-refresh event](https://facetwp.com/help-center/developers/javascript-reference/facetwp-refresh/)
					[The facetwp-loaded event](https://facetwp.com/help-center/developers/javascript-reference/facetwp-loaded/)
					[Using fUtil](https://facetwp.com/help-center/developers/javascript-reference/using-futil/)

                    Last updated: May 24, 2024

---

## The facetwp-loaded event

**Source:** [https://facetwp.com/help-center/developers/javascript-reference/facetwp-loaded/](https://facetwp.com/help-center/developers/javascript-reference/facetwp-loaded/)

## Overview

The 
```
facetwp-loaded
```

 event gets triggered when FacetWP has **finished** the refresh process. It fires after a user has interacted with any facet. It also runs on the initial page load, after all facets have finished processing. This event is useful for modifying facet (or other page) output after being rendered.

## Usage examples

### Scroll on AJAX refresh

This example makes the page scroll to the top of the page after each facet interaction:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
    <script>
      document.addEventListener('facetwp-loaded', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    </script>
  <?php
}, 100 );
```

See [our scrolling tutorial](/how-to-scroll-the-page-on-facet-interaction/) for more examples of how and when to automatically scroll the page.

### Re-initialize a script on AJAX refresh

Scripts that run on post items in the results listing (like lazy loading, masonry, isotope, or equal height scripts, etc.) will **not** work after an AJAX refresh, and need to be retriggered.

This example re-initializes Jetpack Lazy Load after an AJAX refresh:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
    <script>
      document.addEventListener('facetwp-loaded', function() {
        fUtil('body').trigger('jetpack-lazy-images-load');
      });
    </script>
  <?php
}, 100 );
```

However, besides after every AJAX refresh, the 
```
facetwp-loaded
```

 event also fires directly after the first page load, when your custom script already runs. So in most cases, you only need to (re-)trigger a script on AJAX refresh (after using facets), **after** the initial page load. This can be done by checking for the [FWP.loaded](/help-center/developers/javascript-reference/js-objects-and-functions/#using-fwp-loaded) variable, which is only 
```
true
```

 after the page has loaded for the first time:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
  <script>
    document.addEventListener('facetwp-loaded', function() {
      if ( FWP.loaded ) {
        FOOBOX.init();
      }
    });
  </script>
  <?php
}, 100 );
```

If you want to make sure the script re-initialization also happens when using the browser’s back button, you can check for 
```
FWP.is_bfcache
```

 like this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
  <script>
    document.addEventListener('facetwp-loaded', function() {
      if ( FWP.loaded || FWP.is_bfcache ) {
        FOOBOX.init();
      }
    });
  </script>
  <?php
}, 100 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp-loaded)

    
## See also

    - [The facetwp-refresh event](https://facetwp.com/help-center/developers/javascript-reference/facetwp-refresh/)
- [FacetWP JavaScript objects and functions](https://facetwp.com/help-center/developers/javascript-reference/js-objects-and-functions/)
- [How to scroll the page on facet interaction](https://facetwp.com/how-to-scroll-the-page-on-facet-interaction/)
- [How to add a loading text or spinner icon to the listing template during refresh](https://facetwp.com/how-to-add-a-loading-text-or-spinner-icon-to-the-listing-template-during-refresh/)
- [How to fade the listing template during refresh](https://facetwp.com/how-to-fade-the-listing-template-during-refresh/)
- [How to hide the listing template until facets are selected](https://facetwp.com/how-to-hide-the-listing-template-until-facets-are-selected/)

                    Last updated: October 2, 2025

---

## The facetwp-refresh event

**Source:** [https://facetwp.com/help-center/developers/javascript-reference/facetwp-refresh/](https://facetwp.com/help-center/developers/javascript-reference/facetwp-refresh/)

## Overview

The 
```
facetwp-refresh
```

 event gets triggered **before** FacetWP begins the refresh process. It runs before any AJAX is requested, and before the URL hash gets updated, also on the initial page load. This event is useful for modifying any FWP variables before getting sent to the server.

## Usage examples

### Override a facet value

On refresh, force or override a facet choice:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
    <script>
      document.addEventListener('facetwp-refresh', function() {
        FWP.facets['vehicle_type'] = ['car']; // Force a specific value
      });
    </script>
  <?php
}, 100 );
```

Note that the format of the set facet value (in [line 5)](#override-facet-L5)depends on the [facet type](/help-center/facets/facet-types/). To quickly see what (type of) value(s) a facet type needs, make a selection in the facet on the page, then open the browser Console, and type: 
```
FWP.facets
```

. This will show an object of all facets on the page, with their active values. The 
```
FWP.facets
```

 object can also be [used programmatically](/help-center/developers/javascript-reference/js-objects-and-functions/#using-fwp-facets).

For example, to set a selection for a [Proximity facet](/help-center/facets/facet-types/proximity/), it needs four separate values: the latitude, longitude, radius, and (URI-encoded) location string:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
  <script>
    document.addEventListener('facetwp-refresh', function() {
      FWP.facets['my_proximity_facet'] = ['42.0883603','-87.98062650000001','150','Arlington%20Heights%2C%20IL%2C%20USA']; // Set lat, lng, radius, location. Replace 'my_proximity_facet' with the name of your Proximity facet
    });
  </script>
  <?php
}, 100 );
```

Note that the fourth value in this facet type (the address) needs to be URI-encoded because it contains spaces and commas. To URI-encode readable location strings to usable facet values, you can use [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent), like this:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More info$address = 'Arlington Heights, IL, USA';
$location = encodeURIComponent( $address );
```

Tip:If you are looking for a way to pre-select facet choices on page load, use the [facetwp_preload_url_vars hook](/how-to-pre-select-facet-choices/) instead.

### Conditionally reset a facet

On refresh, reset facet A when any choice in facet B is currently selected. This works for all facet types that store their selection(s) in 
```
FWP.facets
```

. This includes Sort facets, but not Pager facets.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Change 'facet_a' and 'facet_b' to the names of your facets.
add_action( 'facetwp_scripts', function() {
  ?>
    <script>
      document.addEventListener('facetwp-refresh', function() {
        if (FWP.facets['facet_b'].length > 0) {
          FWP.facets['facet_a'] = []; // Reset this facet
        }
      });
    </script>
  <?php
}, 100 );
```

Or, on refresh, reset facet A when facet B is the “active” facet (currently being selected or unselected):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Change 'facet_a' and 'facet_b' to the names of your facets.
add_action( 'facetwp_scripts', function() {
  ?>
    <script>
      document.addEventListener('facetwp-refresh', function() {
        if (null !== FWP.active_facet && 'facet_b' == fUtil(FWP.active_facet.nodes[0]).attr('data-name')) {
          FWP.facets['facet_a'] = []; // Reset this facet
        }
      });
    </script>
  <?php
}, 100 );
```

Note that [the FWP.active_facet variable](/help-center/developers/javascript-reference/js-objects-and-functions/#using-fwp-active_facet) is only available during refresh, so within the 
```
facetwp-refresh
```

 hook.

### Reset all other facets on change of a specific facet

The following snippet resets all other facets when a specific facet is the “active” facet (currently being selected or unselected), on refresh.

Make sure to replace 
```
my_facet_name
```

 with the name of the active facet, in [line 5](#reset-other-facets-specific-facet-L5).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Change 'my_facet_name' to the name of the facet that resets other facets.
add_action( 'facetwp_scripts', function() { ?>
  <script>
    document.addEventListener('facetwp-refresh', function() {
      let facet_name = 'my_facet_name';
      if ( null !== FWP.active_facet && facet_name == fUtil(FWP.active_facet.nodes[0]).attr('data-name' ) ) {
        let others = FWP.facets;
        Object.keys(others).forEach(function (key) {
          if ( facet_name != key ) {
            FWP.facets[key] = [];
          }
        });
      }
    });
  </script>
<?php }, 100 );
```

The above code can be useful to [prevent Pager facets from including other facet selections on pages where auto-refresh is disabled](/how-to-disable-facet-auto-refresh-and-add-an-apply-button/#disabling-auto-refresh-and-pager-facets).

### Reset all other facets on change of any facet

On refresh, reset all other facets when any facet is the “active” facet (currently being selected or unselected):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() { ?>
  <script>
    document.addEventListener('facetwp-refresh', function() {
      if ( null !== FWP.active_facet ) {
        let current_facet = fUtil(FWP.active_facet.nodes[0]).attr('data-name' );
        let others = FWP.facets;
        Object.keys(others).forEach(function (key) {
          if ( current_facet != key ) {
            FWP.facets[key] = [];
          }
        });
      }
    });
  </script>
<?php }, 100 );
```

[More examples](https://gist.facetwp.com/?_keywords=facetwp-refresh)

    
## See also

    - [The facetwp-loaded event](https://facetwp.com/help-center/developers/javascript-reference/facetwp-loaded/)
- [FacetWP JavaScript objects and functions](https://facetwp.com/help-center/developers/javascript-reference/js-objects-and-functions/)
- [How to add a loading text or spinner icon to the listing template during refresh](https://facetwp.com/how-to-add-a-loading-text-or-spinner-icon-to-the-listing-template-during-refresh/)
- [How to fade the listing template during refresh](https://facetwp.com/how-to-fade-the-listing-template-during-refresh/)
- [How to pre-select facet choices](https://facetwp.com/how-to-pre-select-facet-choices/)
- [The Reset facet type](https://facetwp.com/help-center/facets/facet-types/reset/)
- [How to disable facet auto-refresh and add an apply button](https://facetwp.com/how-to-disable-facet-auto-refresh-and-add-an-apply-button/)
- [The Radio facet type](https://facetwp.com/help-center/facets/facet-types/radio/)
- [The Dropdown facet type](https://facetwp.com/help-center/facets/facet-types/dropdown/)
- [The Proximity facet type](https://facetwp.com/help-center/facets/facet-types/proximity/)

                    Last updated: May 28, 2026

---

## JS objects and functions

**Source:** [https://facetwp.com/help-center/developers/javascript-reference/js-objects-and-functions/](https://facetwp.com/help-center/developers/javascript-reference/js-objects-and-functions/)

FacetWP uses several different JS objects to store and handle data on the front-end: [FWP](#fwp), [FWP_HTTP](#fwp_http), and [FWP_JSON](#fwp_json). Each of these objects is described below.

## Viewing the data

To view the data in each of these objects, type its name into the browser console:

![How to view FacetWP JS objects in the browser Console.](https://facetwp.com/wp-content/uploads/2019/02/viewing-js-object.png)How to view FacetWP JS objects in the browser Console.
The data in these objects will change on each dynamic page load. So after each facet interaction you can check what the current status of the data is. This can be enormously helpful when developing custom code or debugging issues.

Here is a short explainer video to get you started:

## FWP

The 
```
FWP
```

 object contains the bulk of FacetWP’s data and logic. It contains a mixture of functions, variables, and data objects. Much of this is covered below.

### Data objects

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP // The main object containing everything below 
  FWP.facets; // Contains each facet's selected values.
  FWP.extras; // Determines which extra features to use (pager, sort, etc).
  FWP.hooks; // JS hook system, based on the WP_JS_Hooks library.
  FWP.frozen_facets; // A low-level object to force certain facet types to only re-render on AJAX refresh when needed. 'Hard' frozen facets don't re-render on refresh. For example, Proximity facets. 'Soft' frozen facets don't re-render on refresh when used themselves, but re-render when other facets are used. For example, Dropdown facets.
  FWP.ignored_facets // Array of facets that are ignored on auto-refresh. These can be set using the `facetwp/refresh/ignore` filter hook, available in FacetWP v4.5.1+.
  FWP.active_facet; // Stores information for the currently active, selected facet. Only available during the 'facetwp-refresh' event.
  FWP.response; //  Contains the AJAX response data.
  FWP.settings; // Facet-specific settings, as well as some global data:
    FWP.settings.labels; // The names and labels of all facets on the page.
    FWP.settings.num_choices; // The number of choices in all facets on the page.
    FWP.settings.pager; // Pagination information: the current page, post per page, number of pages, number of filtered posts, number of unfiltered posts.
```

### Functions

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.refresh(); // Parses the facets and triggers an ajax refresh
FWP.reset(); // Resets all facets
FWP.fetchData(); // Triggers an AJAX refresh without re-parsing the facets
FWP.parseFacets(); // Applies any facet HTML changes to FWP.facets
FWP.setHash(); // Updates the permalink URL
FWP.loadFromHash(); // Populates facet data from URL data (happens on pageload)
FWP.buildQueryString(); // Builds and returns the URL query string (without preceding questionmark)
FWP.init(); // Initializes all FacetWP event listeners
```

### Variables

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.auto_refresh = true; // Whether or not to auto-refresh when a facet choice is selected
FWP.soft_refresh = false; // This is set to true when using the Pager facet (page numbers, per page and load more), and the old sort box. Skips processing of other facets.
FWP.is_refresh = false; // This is set to true when a refresh is active
FWP.is_reset = false; // This is set to true when resetting
FWP.loaded = true; // This is false on the initial page load and true after the first "facetwp-loaded" JS event fires. It then remains true.
FWP.paged // Used in pagination
```

## FWP_HTTP

The 
```
FWP_HTTP
```

 object contains data for the current page’s URI and its 
```
$_GET
```

 variables.

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP_HTTP.get; // an object containing the page's $_GET variables
FWP_HTTP.uri; // the current page's URI (minus any beginning or trailing slashes)
```

## FWP_JSON

The 
```
FWP_JSON
```

 object contains generally static data, such as the endpoint URL (
```
ajaxurl
```

) and the facet URL prefix. Here are examples of its data:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP_JSON.a11y; // accessibility labels
FWP_JSON.ajaxurl; // the current AJAX endpoint URL
FWP_JSON.collapse; // the string used for the hierarchical Checkboxes facet's collapse icon
FWP_JSON.expand; // the string used for the hierarchical Checkboxes facet's expand icon
FWP_JSON.no_results; // the text that appears when there are no results in the Autocomplete facet
FWP_JSON.no_results_text; // the text that appears when there are no results in a Listing Builder listing
FWP_JSON.nonce; // useful when making authenticated AJAX requests
FWP_JSON.prefix; // the prefix for each facet's URL variable, usually "_" or "fwp_"
FWP_JSON.preload_data; // the data that FacetWP preloads to render facets on first page load without an AJAX refresh
```

## Using FWP.reset()

Besides using a [Reset facet](/help-center/facets/facet-types/reset/), it is also possible to reset (all or some) facets programmatically, with the 
```
FWP.reset()
```

 function:

### Reset all facets programmatically

Reset **all** facets:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.reset();
```

Reset all facets with a button:

```
<button onclick="FWP.reset()">Reset</button>
```

Or with a link:

```
<a href="javascript:;" onclick="FWP.reset()">Reset</a>
```

Paste the button or link into an HTML widget, HTML block, or directly into your PHP template file.

Warning 1:If you are using a link, make sure the 
```
href
```

 **does NOT contain a hash (#)** to prevent conflicts with FacetWP’s url for filtering. Use  
```
java­script:;
```

 instead. Be aware that some page builders automatically add a hash when creating a button or link element with an empty 
```
href
```

 attribute.
Warning 2:Don’t give the button or link the class 
```
facetwp-reset
```

, as we’ve seen some users do. This class conflicts with the [Reset facet type](/help-center/facets/facet-types/reset/).

### Reset some facets programmatically

Reset **one** facet:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.reset('make');
```

Reset **multiple** facets:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.reset(['make', 'model', 'year']);
```

Reset **individual facet choices**:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.reset({ 'make': 'audi' });
```

Note that can also [use FWP.facets within a facetwp-refresh event to (re)set facet values](/help-center/developers/javascript-reference/facetwp-refresh/#usage-examples), if needed [conditionally, based on other facet selections](/help-center/developers/javascript-reference/facetwp-refresh/#conditionally-reset-a-facet).

## Using FWP.fetchData()

### Set a facet value and trigger a refresh

Let’s say you want to programmatically set a facet value and trigger a refresh. Your gut might tell you to use 
```
FWP.refresh()
```

. Since this function parses the facets, it would actually **overwrite** the values you’re trying to set.

The following example shows how to do this, using [FWP.facets](#using-fwp-facets) to set the facet value, then using 
```
FWP.fetchData()
```

 to trigger an AJAX refresh without re-parsing all facets:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.facets['car_brand'] = ['audi'];
FWP.fetchData();
FWP.setHash(); // Optional: update the URL
```

Note that can also [use FWP.facets within a facetwp-refresh event to (re)set facet values](/help-center/developers/javascript-reference/facetwp-refresh/#usage-examples), if needed [conditionally, based on other facet selections](/help-center/developers/javascript-reference/facetwp-refresh/#conditionally-reset-a-facet).

## Using FWP.active_facet

The 
```
FWP.active_facet
```

 object contains info about the currently active facet, which is the facet that is currently used/clicked. The object is **only** available during the refresh process, so within [the facetwp_refresh event](/help-center/developers/javascript-reference/facetwp-refresh/), which gets triggered before FacetWP begins the refresh process.

### Get the currently active facet’s name or type

The following example shows how to get the active facet’s name or type within the 
```
facetwp-refresh
```

 event:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
    <script>
      document.addEventListener('facetwp-refresh', function() {  // Runs before the refresh process, on each AJAX page load, and on the initial page load.
        if (null !== FWP.active_facet) {
          let facet = FWP.active_facet;
          let facet_name = facet.attr('data-name');
          let facet_type = facet.attr('data-type');

          // Do something
          console.log(facet_name);
          console.log(facet_type);
        }
      });
    </script>
  <?php
} );
```

Note that 
```
FWP.active_facet
```

 contains no info about which facets or facet choices are currently selected. You can use the 
```
FWP.facets
```

 object for that:

## Using FWP.facets

The 
```
FWP.facets
```

 object can be used to check ([or set](#set-a-facet-value-and-trigger-a-refresh)) a facet’s selected choice(s).

### Check if a specific facet has any choice(s) selected

The following example uses the 
```
FWP.facets
```

 object to check if a specific facet has any choice(s) selected:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'wp_head', function() {
  ?>
  <script>
    document.addEventListener('facetwp-loaded', function() { // Runs after the refresh process, on each AJAX page load, and on the initial page load.
      let selected = FWP.facets['my_facet_name']; // Replace "my_facet_name" with the name of your facet
      if ( selected.length ) { // If any choice in this facet is selected
        // Do something
      }
    });
  </script>
  <?php
}, 100 );
```

### Check if a specific facet has a specific choice selected

The following example uses the 
```
FWP.facets
```

 object to check if a specific facet has a specific choice selected. The specified choice must be the indexed 
```
facet_value
```

, as it is displayed in the URL after selecting that choice.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'wp_head', function() {
  ?>
  <script>
    document.addEventListener('facetwp-loaded', function() { // Runs after the refresh process, on each AJAX page load, and on the initial page load.
      let selected = FWP.facets['my_facet_name'];  // Replace "my_facet_name" with the name of your facet
      if ( selected == 'my_facet_choice' ) {  // If the choice "my_facet_choice" in this facet is selected
        // Do something
      }
    });
  </script>
  <?php
}, 100 );
```

To check if *any* facet has *any* choice(s) selected, you can use [FWP.buildQueryString()](#using-fwp-buildquerystring).

### Output the number of active facets

The following example uses the 
```
FWP.facets
```

 object to calculate and output the number of **facets** that are currently in use on the page. You can optionally exclude your [Pager facet(s)](/help-center/facets/facet-types/pager/) and/or [Sort facet(s)](/help-center/facets/facet-types/sort/) (or any other facet) in [line 9](#number-of-active-facets-L9):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Replace 'mypagerfacetname' and 'mysortfacetname' with the name of your Pager facet and Sort facet.
// These facets will be excluded from the count.
add_action( 'wp_head', function() {
  ?>
  <script>
    document.addEventListener('facetwp-loaded', function() {
      var count = 0;
      Object.entries(FWP.facets).forEach(([name, val]) => {
        if (name !== 'mypagerfacetname' && name !== 'mysortfacetname' && val.length > 0) {
          count ++;
        }
      });
      // Do something with the count variable
      console.log( count ); // Outputs the number of facets in use to the Console.
    });
  </script>
  <?php
}, 100 );
```

Note that to get the currently active facet, at the moment that it is used/clicked, you can use [FWP.active_facet](#using-fwp-active_facet).

### Output the number of active facet choices

The following example uses the 
```
FWP.facets
```

 object to calculate and output the number of **facet choices** that are currently selected on the page. You can optionally exclude your [Pager facet(s)](/help-center/facets/facet-types/pager/) and/or [Sort facet(s)](/help-center/facets/facet-types/sort/) (or any other facet) in [line 9](#number-of-active-facet-selections-L9):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Replace 'mypagerfacetname' and 'mysortfacetname' with the name of your Pager facet and Sort facet.
// These facets will be excluded from the count.
add_action( 'wp_head', function() {
  ?>
  <script>
    document.addEventListener('facetwp-loaded', function() {
      var count = 0;
      Object.entries(FWP.facets).forEach(([name, val]) => {
        if (name !== 'mypagerfacetname' && name !== 'mysortfacetname' && val.length > 0) {
          count += val.length;
        }
      });
      // Do something with the count variable
      console.log( count ); // Outputs the number of selected facet choices to the Console.
    });
  </script>
  <?php
}, 100 );
```

Note that to get the currently active facet, at the moment that it is used/clicked, you can use [FWP.active_facet](#using-fwp-active_facet).

## Using FWP.buildQueryString()

The 
```
FWP.buildQueryString()
```

 function builds and returns the URL query string. It can be used to check if any facet choices have been selected:

### Check if any facet has any choice(s) selected

The following example uses 
```
FWP.buildQueryString()
```

 to check if any facet has any choice(s) selected, in which case the query string is not empty. This will work for any facet, except the [Reset facet](/help-center/facets/facet-types/reset/), which empties the query string.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'wp_head', function() {
  ?>
  <script>
    document.addEventListener('facetwp-loaded', function() { // Runs after the refresh process, on each AJAX page load, and on the initial page load.
      if ( '' != FWP.buildQueryString() ) { // Run only when there are facet selections in the URL
        // Do something
      }
    });
  </script>
  <?php
}, 100 );
```

## Using FWP.loaded

The 
```
FWP.loaded
```

 variable can be used to determine if it is the initial page load or not. You can use it in a condition to let code run only once on the initial page load, or only after that, on each subsequent AJAX page load.

The way it works is that the variable is 
```
false
```

 by default, then becomes (and remains) 
```
true
```

 **after** the first [facetwp-loaded JS event](/help-center/developers/javascript-reference/facetwp-loaded/) has fired, which is after FacetWP has finished the refresh process of the initial page load. See [the testing code below](/help-center/developers/javascript-reference/js-objects-and-functions/#test-fwp-loaded) which demonstrates this process.

### Let code run only after the initial page load

The following example shows how to run code only **after** the initial page load, meaning on every subsequent AJAX page load triggered by facet interaction.

The following example does the same as [the above example](#check-if-a-specific-facet-has-any-choices-selected) that checks if a specific facet has any choice(s) selected. But now, it only runs when 
```
FWP.loaded
```

 is 
```
true
```

, which it is after any facet interaction. It will **not** run anymore on the initial page load, also not when there are facet choices in the URL.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'wp_head', function() {
  ?>
  <script>
    document.addEventListener('facetwp-loaded', function() { // Runs after the refresh process, on each AJAX page load, and on the initial page load.
      if ( FWP.loaded ) { // Run after the initial page load
        let selected = FWP.facets['my_facet_name']; // Replace "my_facet_name" with the name of your facet
        if (selected.length) { // If any choice in this facet is selected
          // Do something
        }
      }
    });
  </script>
  <?php
}, 100 );
```

### Let code run only on the initial page load

If you want a script to only run on the initial page load (only once), you can do the opposite: add 
```
!
```

 (meaning “not”) before the variable: 
```
! FWP.loaded
```

. This is only 
```
true
```

 when the page loads the first time.

The following example does the same as [the above example](#check-if-any-facet-has-any-choices-selected) that checks if any facet has any choice(s) selected. But now, it only runs once, on the initial page load. In other words, this code checks if there are any facet choices in the URL when the page loads the first time. This can be useful to do something ([like a page scroll](/how-to-scroll-the-page-on-facet-interaction/#scroll-when-any-facet-choice-is-selected-on-the-initial-page-load)) only after [using a Submit Button](/help-center/add-on-features-and-extras/submit-button/), or after [a redirect from a search box on another page](/redirect-a-search-box-to-a-facetwp-results-page/).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'wp_head', function() {
  ?>
  <script>
    document.addEventListener('facetwp-loaded', function() { // Runs after the refresh process, on each AJAX page load, and on the initial page load.
      if ( ! FWP.loaded ) { // Run on the initial page load only
        if ( '' != FWP.buildQueryString() ) { // Run only when there are facet selections in the URL
          // Do something
        }
      }
    });
  </script>
  <?php
}, 100 );
```

You can use 
```
FWP.loaded
```

 both within the 
```
facetwp-refresh
```

 and in the 
```
facetwp-loaded
```

 events. The behavior is the same: it is 
```
false
```

 on initial page load, 
```
true
```

 after facet interaction, as the following script demonstrates:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'wp_footer', function() {
  ?>
  <script>

    alert('initial: ' + FWP.loaded); // 'undefined'

    document.addEventListener('facetwp-refresh', function() { // Runs before the refresh process, on each AJAX page load, and on the initial page load.
      alert('refresh-1: ' + FWP.loaded); // 'false' on initial page load, 'true' after facet interaction
      if ( FWP.loaded ) { // Runs only after the first page load
        alert('refresh-2 ' + FWP.loaded); // true' after facet interaction
      }
    });

    document.addEventListener('facetwp-loaded', function() {  // Runs after the refresh process, on each AJAX page load, and on the initial page load.
      alert('loaded-1 ' + FWP.loaded); // 'false' on initial page load, 'true' after facet interaction
      if ( FWP.loaded ) { // Runs only after the first page load
        alert('loaded-2 ' + FWP.loaded); // 'true' after facet interaction
      }
    });

  </script>

<?php }, 100 );
```

## Using FWP.auto_refresh and FWP.refresh()

### Completely disable auto-refresh and refresh with a button

One application of the 
```
FWP.refresh()
```

 function is in an “Apply” or “Submit” button. FacetWP automatically refreshes whenever any interaction happens, but it’s possible to **completely** disable auto-refresh for all facets, by setting the 
```
FWP.auto_refresh
```

 variable to 
```
false
```

. An “Apply” button triggering 
```
FWP.refresh()
```

 can then be used to trigger the facet refresh. See [this tutorial for a full explanation and code examples](/how-to-disable-facet-auto-refresh-and-add-an-apply-button/).

### Selectively ignore facets when refreshing with the `facetwp/refresh/ignore` filter hook

Since FacetWP [v4.6](/help-center/changelog/#4-6), it is also possible to **selectively** disable auto-refresh for certain facets, using the 
```
facetwp/refresh/ignore
```

 filter hook. Add the names of the facets you want to ignore to the [array in line 9-12](#facetwp-refresh-ignore-L9-L12).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
  <script>
    (function($) {
 
      FWP.hooks.addFilter('facetwp/refresh/ignore', function( ignored_facets ) {
 
        // facets ignored when auto-refreshing:
        ignored_facets = [
          'my_facet_name',
          'my_other_facet_name'
        ];
 
        return ignored_facets;
      });
 
    })(fUtil);
  </script>
  <?php
}, 100 );
```

You can then use 
```
FWP.refresh()
```

 to trigger a refresh on your own terms, for example [after a delay](/how-to-delay-facet-filtering-until-multiple-selections-are-made/#selectively-disable-auto-refresh-and-refresh-after-a-delay) or [with an “Apply” button](/how-to-disable-facet-auto-refresh-and-add-an-apply-button/).

Note that the facet names that are set to be ignored with the 
```
facetwp/refresh/ignore
```

 filter hook, are also available in the 
```
FWP.ignored_facets
```

 [JS array variable](#fwp-objects-L6), after a refresh.

## Using FWP.paged, FWP.soft_refresh and FWP.refresh()

If you have a use case for programmatically paginating with Javascript, you can do that like this:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.paged = 3; // Set the page number
FWP.soft_refresh = true; // Skip processing of other facets than the Pager facet
FWP.refresh(); // Run a refresh
```

This would have to be used within the [facetwp-refresh event](/help-center/developers/javascript-reference/facetwp-refresh/). See [this snippet](/help-center/developers/the-facetwp-url/#pagenavi-support) and [our code library](https://gist.facetwp.com/?_keywords=FWP.paged) for full examples.

    
## See also

    - [The facetwp-refresh event](https://facetwp.com/help-center/developers/javascript-reference/facetwp-refresh/)
- [The facetwp-loaded event](https://facetwp.com/help-center/developers/javascript-reference/facetwp-loaded/)
- [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [The Reset facet type](https://facetwp.com/help-center/facets/facet-types/reset/)
- [The FacetWP URL](https://facetwp.com/help-center/developers/the-facetwp-url/)
- [Using fUtil](https://facetwp.com/help-center/developers/javascript-reference/using-futil/)
- [How to scroll the page on facet interaction](https://facetwp.com/how-to-scroll-the-page-on-facet-interaction/)
- [The Submit Button add-on](https://facetwp.com/help-center/add-on-features-and-extras/submit-button/)
- [Redirect a search box to a FacetWP results page](https://facetwp.com/redirect-a-search-box-to-a-facetwp-results-page/)
- [How to hide the listing template until facets are selected](https://facetwp.com/how-to-hide-the-listing-template-until-facets-are-selected/)
- [How to fade the listing template during refresh](https://facetwp.com/how-to-fade-the-listing-template-during-refresh/)
- [How to add a loading text or spinner icon to the listing template during refresh](https://facetwp.com/how-to-add-a-loading-text-or-spinner-icon-to-the-listing-template-during-refresh/)
- [How to disable facet auto-refresh and add an apply button](https://facetwp.com/how-to-disable-facet-auto-refresh-and-add-an-apply-button/)
- [How to delay facet filtering until multiple selections are made](https://facetwp.com/?p=229923)

                    Last updated: July 30, 2026

---

## Using fUtil

**Source:** [https://facetwp.com/help-center/developers/javascript-reference/using-futil/](https://facetwp.com/help-center/developers/javascript-reference/using-futil/)

fUtil is a small JavaScript helper library that comes built-in with FacetWP.

Its functionality is similar to jQuery, with the difference that fUtil relies entirely on modern, vanilla JavaScript. fUtil is less than 2KB minified, very small compared to jQuery + Migrate which adds up to ~35KB.

fUtil can be used as a lightweight substitute on websites that don’t need or load jQuery. FacetWP itself does not need jQuery to function ([since v3.8](/whats-new-in-facetwp-3-8/)), and you can disable loading it in FacetWP’s settings if your theme or other plugins don’t need it.

## fUtil methods

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More info* fUtil library
* 
* Unless stated, methods return the fUtil instance
*/

// document.ready handler
$(function() { ... })

// select the document
$()

// get an element
$(selector)
// or
fUtil(selector)

// create a new fUtil instance
$(selector).clone()

// get the number of matching elements (returns int)
$(selector).len()

// add CSS class
$(selector).addClass(val)

// remove CSS class
$(selector).removeClass(val)

// has CSS class
$(selector).hasClass(val)

// toggle CSS class
$(selector).toggleClass(val)

// check for a match (returns bool)
$(selector).is(selector)

// check for a match
$(selector).find(selector)

// get first matching element
$(selector).first()

// get last matching element
$(selector).last()

// get previous matching element
$(selector).prev(selector)

// get next matching element
$(selector).next(selector)

// prepends selected element(s) with a value
$(selector).prepend(val)

// appends selected element(s) with a value
$(selector).append(val)

// get selected element(s) parents
$(selector).parents(selector)

// get selected element(s) closest parents
$(selector).closest(selector)

// remove current element(s)
$(selector).remove()

// adds event listener
$(selector).on('action', callback)

// removes event listener
$(selector).off('action', callback)

// trigger an event
$(selector).trigger('action', callback, extraData)

// set an attribute
$(selector).attr(name, val)

// remove an attribute (available in v4.5+)
$(selector).removeAttr(name)

// set data values
$(selector).data(key, val)

// set HTML
$(selector).html(val)

// set text value
$(selector).text(val)

// set input value
$(selector).val(val)

// get all matching DOM nodes (returns array of DOM nodes)
$(selector).nodes

// get first matching DOM node (returns DOM node)
$(selector).nodes[0]

// make an ajax POST
$.post(url, data, settings)

// check if a value or variable exists
$.isset(var)

// loop through an iterable
$.each(items, callback)
```

Note: For 
```
.each()
```

, jQuery uses 
```
(key, val)
```

, but fUtil and native JS both use 
```
(val, key)
```

. This ordering difference means that you may need to tweak any custom jQuery loops.

## Usage examples

Do something on document ready:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More info(function($) {
  $(function() {
    console.log('document ready');
  });
})(fUtil);
```

Remove the 
```
is-loading
```

 class from all “facet-wrap” elements:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More info$('.facet-wrap').removeClass('is-loading');
```

Prepend “Name: ” to all elements with class “the-name”:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More info$('.the-name').prepend('Name: ');
```

Loop through text inputs (class 
```
my-input
```

) and, if empty, remove the closest 
```
.item
```

 parent:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More info$('.my-input').each(function() {
  if ('' == $(this).val()) {
    $(this).closest('.item').remove(); // adios!
  }
});
```

## Add fUtil code with the facetwp_scripts hook

The fUtil library is only loaded on pages where FacetWP is loaded (pages with facets). It loads in the footer, included in FacetWP’s minified 
```
front.min.js
```

 script.

Custom code that uses fUtil can also best be loaded in the footer, with [the facetwp_scripts hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_scripts/). This hook also runs only on pages where FacetWP is loaded, so custom code added with it will never cause 
```
fUtil not defined
```

 errors. Depending on the exact code, these errors could happen if you would [use the wp_footer hook](/how-to-use-custom-code/#using-the-wp_footer-hook), which runs on *every* page.

The following example uses the 
```
facetwp_scripts
```

 hook to add CSS and fUtil JavaScript code to the footer. The code adds a 
```
template-loading
```

 class to the listing template while it is loading. The CSS then fades the template out when a facet is clicked, and back in when the results have loaded:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
  <style>
    .facetwp-template {
      opacity: 1;
      transition: opacity 0.2s ease-out;
    }
    .facetwp-template.template-loading {
      opacity: 0;
    }
  </style>
  <script>
    (function($) {
      document.addEventListener('facetwp-refresh', function() {
        if ( FWP.loaded ) {
         $( '.facetwp-template' ).addClass( 'template-loading' );
        }
      });
      document.addEventListener('facetwp-loaded', function() {
        $( '.facetwp-template' ).removeClass( 'template-loading' );
      });
    })(fUtil);
  </script>  
  <?php
}, 100 );
```

Note: see [this tutorial](/how-to-fade-the-listing-template-during-refresh/) for more info about fading the listing template on refresh.

## The dollar sign as alias for fUtil()

Just like in jQuery where the 
```
$
```

 sign is an alias for the 
```
jQuery()
```

 function, in fUtil, the 
```
$
```

 sign is an alias for the 
```
fUtil()
```

 function.

This means that the JavaScript part from [the previous example](#futil-template-fade-in-out) can also be written like this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
  <script>
    document.addEventListener('facetwp-refresh', function() {
      if ( FWP.loaded ) {
        fUtil( '.facetwp-template' ).addClass( 'template-loading' );
      }
    });
    document.addEventListener('facetwp-loaded', function() {
      fUtil( '.facetwp-template' ).removeClass( 'template-loading' );
    });
  </script>
  <?php
}, 100 );
```

## Use fUtil on non-FacetWP pages

As fUtil’s functionality is quite similar to jQuery, you can use it as a lightweight substitute on websites that don’t need or load jQuery. FacetWP itself does not need jQuery to function and you can disable loading it in FacetWP’s settings if your theme or other plugins don’t need it.

However, by default, the fUtil library is only loaded on pages where FacetWP is loaded (pages with facets). It loads in the footer, included in FacetWP’s minified 
```
front.min.js
```

 script. This means that you can’t use it on other, non-FacetWP pages.

To use fUtil on other pages too, you can add the following snippet to your (child) theme’s functions.php. It makes the fUtil library load independently, in the 
```
<head>
```

 section of all non-FacetWP pages:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'wp_enqueue_scripts', function() {
  if ( function_exists( 'FWP' ) && empty( FWP()->display->load_assets ) ) {
    wp_enqueue_script( 'futil', plugins_url( 'facetwp/assets/vendor/fUtil/fUtil.js' ), array(), FACETWP_VERSION, false );
  }
} );
```

When the fUtil library is available like this on *all* pages, instead of adding your custom fUtil code [with the facetwp_scripts hook](#add-futil-code-with-the-facetwp_scripts-hook) (which only runs on pages with facets), you can now better add it with [the wp_footer hook](https://developer.wordpress.org/reference/functions/wp_footer/), which also runs on *all* pages.

Note that on pages with facets, with the above snippet in place, the fUtil library is still loaded in the footer, included in 
```
front.min.js
```

 script.

## Other custom JS libraries included with FacetWP

Besides fUtil, FacetWP includes the following other custom lightweight helper libraries that you can use for your custom code:

- **fSelect** – used in [fSelect facets](/help-center/facets/facet-types/fselect/).
- **fDate** – our date-picker library, used in the [Date Range facet](/help-center/facets/facet-types/date-range/).
- **fTip** – our tooltip library to replace 
```
jquery-powertip
```

.
- **fComplete** – our autocomplete library to replace
```
jquery-autocomplete
```

. It is used in the [Autocomplete facet](/help-center/facets/facet-types/autocomplete/).
- **nummy** – our number formatting library.

[More examples](https://gist.facetwp.com/?_keywords=fUtil)

    
## See also

    - [JavaScript reference](https://facetwp.com/help-center/developers/javascript-reference/)
- [FacetWP JavaScript objects and functions](https://facetwp.com/help-center/developers/javascript-reference/js-objects-and-functions/)
- [How to use custom code?](https://facetwp.com/how-to-use-custom-code/)
- [The facetwp_scripts hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_scripts/)
- [The fSelect facet type](https://facetwp.com/help-center/facets/facet-types/fselect/)
- [The Date Range facet type](https://facetwp.com/help-center/facets/facet-types/date-range/)
- [The Autocomplete facet type](https://facetwp.com/help-center/facets/facet-types/autocomplete/)
- [What’s new in FacetWP 3.8](https://facetwp.com/whats-new-in-facetwp-3-8/)
- [How to fade the listing template during refresh](https://facetwp.com/how-to-fade-the-listing-template-during-refresh/)

                    Last updated: December 12, 2025

---

## Shortcodes reference

**Source:** [https://facetwp.com/help-center/developers/shortcodes-reference/](https://facetwp.com/help-center/developers/shortcodes-reference/)

The following features can be placed with a shortcode:

## Display a facet

All [facets](/help-center/facets/) you add can be placed with a shortcode:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp facet="the_facet_name"]
```

Or with PHP:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho facetwp_display('facet','the_facet_name');
```

If you are using Elementor, and have [the Elementor add-on](/help-center/using-facetwp-with/elementor/) installed, you can also [use the FacetWP Facet widget](/help-center/using-facetwp-with/elementor/#the-facetwp-facet-widget) to place a facet on your page.

## Display a template

All templates you create with the [Listing Builder](/help-center/listing-templates/listing-builder/) can be placed with a shortcode:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp template="the_template_name"]
```

Or with PHP:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho facetwp_display('template','the_template_name');
```

If you are using Elementor, and have [the Elementor add-on](/help-center/using-facetwp-with/elementor/) installed, you can also [use the FacetWP Listing widget](/help-center/using-facetwp-with/elementor/#the-facetwp-listing-widget) to place a Listing Builder listing template on your page.

## Display a User Selections facet

The [User Selections facet](/help-center/facets/facet-types/user-selections/) is a special facet type that displays active facet selections as a list, and allows for each individual selection to be unselected. The selections are preceded by the facet’s label:

![FacetWP User Selections facet](https://facetwp.com/wp-content/uploads/2022/03/userselections-bare.png)

The User Selections facet can be placed with a shortcode:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp selections="true"]
```

Or with PHP:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho facetwp_display('selections');
```

If you are using Elementor, and have [the Elementor add-on](/help-center/using-facetwp-with/elementor/) installed, you can also [use the FacetWP Facet widget](/help-center/using-facetwp-with/elementor/#the-facetwp-facet-widget) to place a User Selections facet on your page.

## Shortcode placement

![How to paste a facet or listing shortcode into a WP Block Editor Shortcode block.](https://facetwp.com/wp-content/uploads/2019/02/block-editor-shortcode.gif)How to paste a facet or listing shortcode into a WP Block Editor Shortcode block.
Shortcodes can be placed directly in post/page edit screens (in visual or code editor mode). You can also add them in text/HTML widgets (in Appearance > Widgets).

If you are using the WordPress block editor, you can also paste shortcodes into a Shortcode block.

If you are using a [supported page builder](/help-center/listing-templates/using-a-page-builder/), you can paste shortcodes in a Shortcode or HTML module/widget. For example in [an Elementor Shortcode widget](/help-center/using-facetwp-with/elementor/#add-facetwp-shortcodes-with-a-shortcode-widget).

You can also output shortcodes directly in your PHP templates, with WordPress’ [do_shortcode()](https://developer.wordpress.org/reference/functions/do_shortcode/) function:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho do_shortcode('[my-shortcode]');
```

## Deprecated shortcodes

The following shortcodes still work, and will keep working for the foreseeable future, but we strongly recommend you use the new facet types they are replaced with.

### Display a sort box

Deprecated:This shortcode is for displaying the **old** sort box. Please use the [Sort facet type](/help-center/facets/facet-types/sort/).
The old sort box can be placed with a shortcode:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp sort="true"]
```

Or with PHP:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho facetwp_display('sort');
```

The options and logic of the dropdown can be controlled with the (deprecated) [facetwp_sort_options](/help-center/developers/hooks/deprecated-hooks/facetwp_sort_options/) hook, and the appearance with the (deprecated) [facetwp_sort_html](/help-center/developers/hooks/deprecated-hooks/facetwp_sort_html/) hook.

### Display a pager

Deprecated:This shortcode is for displaying the **old** pager. Please use the [Pager facet type](/help-center/facets/facet-types/pager/).
The old pager can be placed with a shortcode:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp pager="true"]
```

Or with PHP:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho facetwp_display('pager');
```

The appearance of the pager can be controlled with the the (deprecated) [facetwp_pager_html](/help-center/developers/hooks/deprecated-hooks/facetwp_pager_html/) hook.

### Display a per page box

Deprecated:This shortcode is for displaying the **old** per page box. Please use the [Pager facet type](/help-center/facets/facet-types/pager/), which includes a “per page” mode.
The old per page box can be placed with a shortcode:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp per_page="true"]
```

Or with PHP:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho facetwp_display('per_page');
```

The choices of the per page box can be customized with the (deprecated) [facetwp_per_page_options](/help-center/developers/hooks/deprecated-hooks/facetwp_per_page_options/) hook.

### Display result counts

Deprecated:This shortcode is for displaying the **old** result counts. Please use the [Pager facet type](/help-center/facets/facet-types/pager/), which includes a “result counts” mode.
The old result counts can be placed with a shortcode:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp counts="true"]
```

Or with PHP:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho facetwp_display('counts');
```

The appearance of the result counts can be customized with the (deprecated) [facetwp_result_count](/help-center/developers/hooks/deprecated-hooks/facetwp_result_count/) hook.

    
## See also

    - [What are facets?](https://facetwp.com/help-center/facets/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [The User Selections facet type](https://facetwp.com/help-center/facets/facet-types/user-selections/)
- [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)

                    Last updated: May 24, 2024

---

## The FacetWP URL

**Source:** [https://facetwp.com/help-center/developers/the-facetwp-url/](https://facetwp.com/help-center/developers/the-facetwp-url/)

## FacetWP’s URL construction

When loading a [listing template](/help-center/listing-templates/) page for the first time, the page’s URL consists only of a base URL. For example, the base URL of the [Recipes demo](/demo/recipes-demo) page is:

```
https://facetwp.com/demo/recipes-demo/
```

When a user starts interacting with facets on that page, FacetWP adds variables to the page’s URL. Everything added after the base URL is called the “query string”.

Directly upon clicking a choice in a facet, a 
```
GET
```

 variable, or “query variable” representing that choice, is added to the query string. Each additional facet interaction will update that facet’s query variable, or it will add a new one if it’s the first interaction with that facet. The whole set of query variables is preceded by a question mark.

For example, selecting “Cake” in the Recipes demo’s “Categories” facet adds the following to the base URL:

```
?_recipe_categories=cake
```

Even [Pager facets](/help-center/facets/facet-types/pager/) and [Sort facets](/help-center/facets/facet-types/sort/) append their current selection to the URL. For example, this is page 2 of a listing:

```
?_paged=2
```

And this is the URL after sorting by “Title a-z” with a Sort facet with the name “sortby”:

```
?_sortby=title_a_z
```

The only exception is the “load more” pager type of the Pager facet, which [intentionally does not update its URL variables](/help-center/facets/facet-types/pager/#the-load-more-button-and-url-vars).

### Multiple facets used

When selecting one or more choices for a second facet, query variables for that facet will be added to the URL too and separated from the previous ones with an ampersand: 
```
&
```

.

For example, in the Recipes demo, after choosing “Cake” in the “Categories” facet, and “Almond” in the “Flavors” facet, the URL will look like this:

```
?_recipe_categories=cake&_flavors=almond
```

And the URL of page 2 of a listing that is sorted by title would look like this:

```
?_sortby=title&_paged=2
```

### Multiple choices selected in a facet

If a facet has multiple choices selected, for example a [Checkboxes facet](/help-center/facets/facet-types/checkboxes/), the choices will be separated in the URL with an encoded comma: 
```
%2C
```

. For example, selecting two categories in the Recipes Demo’s “Flavors” facet will result in:

```
?_flavors=almond%2Clemon
```

### Query variable construction

Each query variable – one for each facet – contains the following four items:

- The [prefix](#facetwps-url-prefix), which is a single underscore: 
```
_
```

.
- The facet’s “[name](#facet-names-in-the-url)”, e.g. 
```
flavors
```

.
- An 
```
=
```

 sign.
- The facet’s [choice(s)](#facet-choices-in-the-url) the user has made, e.g. 
```
almond%2Clemon
```

, where multiple choices are separated by an encoded comma 
```
%2C
```

.

### Non-FacetWP query variables

FacetWP’s ([prefixed](#facetwps-url-prefix)) query variables that appear in the URL when using facets will function “on top of” any other query variables in the URL that determine the “base” query of the listing. An example would be a [Listing Builder listing](/help-center/listing-templates/listing-builder/) that is using a 
```
http:get
```

 [dynamic URL tag to pre-filter a listing](/how-to-pre-filter-listing-builder-queries-with-dynamic-url-tags/#the-httpget-url-tag) based on existing 
```
GET
```

 variables in the page URL.

## FacetWP’s URL prefix

FacetWP’s query variables use an underscore 
```
_
```

 prefix to prevent conflicts with WordPress and other plugins. WordPress has many [reserved terms](https://codex.wordpress.org/Reserved_Terms) and [reserved query variables](https://codex.wordpress.org/WordPress_Query_Vars#List_of_Query_Vars), and unexpected things would happen if FacetWP would use them.

In the past FacetWP had a “URL prefix” setting, which let you choose between 
```
_
```

 and 
```
fwp_
```

. This setting was removed from the UI in [version 3.5.3](/help-center/changelog/changelog-old/#3-5-3) for clean installs. If you have an older website with a FacetWP install that existed before this version (which was released on April 21, 2020), you will still see this setting.

### Changing the URL prefix

Users sometimes ask how to change the 
```
_
```

 prefix. In versions newer than v3.5.3, the 
```
_
```

 prefix is fixed. It’s not possible anymore to change it in FacetWP’s settings.

If you absolutely need to change the prefix, for example back to 
```
fwp_
```

 in a legacy site with a newer FacetWP install, the only way to change the setting is directly in the database.

First, make sure to back up your database. In the database, go to the 
```
wp_options
```

 table and find the 
```
facetwp_settings
```

 option. The value of that option contains a long JSON string. Towards the end of it, you’ll see the “prefix” setting, which you can change and then save.

## Facet names in the URL

The first part of the query variable for each facet (after the 
```
_
```

 prefix), is the facet’s “name” (yellow highlighted in this example):

```
?_recipe_categories=cake
```

In a facet’s settings, the facet’s “name” is what is shown in the gray input field:

![A facet's 'name' field (the purple bordered field). Use digits (0-9) and Latin letters (a-z) only.](https://facetwp.com/wp-content/uploads/2022/09/facet_name_field.png)A facet’s “name” field (the purple bordered field). Use digits (0-9) and Latin letters (a-z) only.
The facet’s name is its technical name, used to identify it in code, for example in its [shortcode](/help-center/facets/#display-a-facet). Keep the name under 50 characters, as that is the [maximum that will be stored in FacetWP’s indexing table](/help-center/developers/facetwp-performance-speed-limits-and-scalability/#indexing-value-limits).

The name field is automatically generated from [the facet’s “Label” field](/help-center/facets/#the-facet-label) (the input field to the left of it) when it is first entered. But you can manually change the name, for example to shorten or simplify it.

The auto-generated or customized name is **sanitized** on auto-generation or after changing and saving. This is needed because the facet name is used in the URL (when facets are in use, [as shown above](#facet-names-in-the-url)) and in FacetWP’s internal JavaScript. The sanitization function will strip out any:

- punctuation symbols
- special symbols
- non-Latin characters (e.g. Chinese, Japanese, Greek, Cyrillic, or Arabic)

Spaces and standard hyphens (
```
-
```

) are replaced by underscores (
```
_
```

), and consecutive underscores are removed.

Any known [problematic or reserved names](#issues-with-certain-facet-names) will get an underscore as suffix.

What is allowed and remains after sanitization are **digits (0-9) and Latin letters (a-z)**, which are converted to lowercase.

To prevent issues with disappearing facets in the front- or back-end, make sure all your facets have a **unique name**. In FacetWP 4.5+ this happens automatically: a numbered suffix will be appended when a duplicate name is detected. For example, when creating a second facet with the name 
```
new_facet
```

, the name field will automatically append a number: 
```
new_facet_1
```

.

### Issues with certain facet names

One thing to keep in mind when choosing a name for your facets, is that WordPress has many [reserved terms](https://codex.wordpress.org/Reserved_Terms) and [reserved query variables](https://codex.wordpress.org/WordPress_Query_Vars#List_of_Query_Vars). Giving your facet one of these reserved names will cause unexpected behavior or errors.

For example, we’ve had users with a facet named 
```
name
```

, which is a reserved term. Changing the name to 
```
first_name
```

 (and [re-indexing](/help-center/indexing/) afterward) fixed their issues. Other examples of problematic names we have come across are 
```
length
```

, which causes issues with certain JavaScript code. And 
```
method
```

, which causes API 
```
404
```

 errors.

To prevent these issues, FacetWP automatically appends an underscore (
```
_
```

) to the following known problematic names: 
```
pager
```

, 
```
sort
```

, 
```
labels
```

, 
```
length
```

, 
```
name
```

, 
```
method
```

, 
```
num_choices
```

. But there may be more.

## Facet choices in the URL

As explained above, each choice a user selects in a facet adds that choice to the facet’s URL variable. For example, a facet with the name “flavors” with two selected choices will generate the following query string:

```
?_flavors=almond%2Clemon
```

![A facet with two choices](https://facetwp.com/wp-content/uploads/2022/09/facet-with-two-choices.png)In this example, “almond” and “lemon” are the (technical) names of the two values selected. If the facet’s source is a taxonomy, this name is the term slug. If it is a custom field, it is the [sanitized](#sanitized-and-hashed-facet-choices) value entered in that field.

### Sanitized and hashed facet choices

Sometimes you may encounter puzzling URL strings that look like this:

```
?_flavors=almond%2C12361053c4e8dd156950643ae742a789
```

![A facet with a choice that will be hashed](https://facetwp.com/wp-content/uploads/2022/09/facet-with-two-choices-hashed.png)This is caused by FacetWP’s internal function that automatically sanitizes facet choices that contain potentially URL-unsafe characters.

The above query string is the result of a facet named “flavors”, with two choices selected:

```
almond
```

 and 
```
lemon & lime
```

In this example, the ampersand 
```
&
```

 in the second choice is the cause of that choice being converted into a 128-bit ([md5](https://en.wikipedia.org/wiki/MD5)) hashed value, resulting in a string of alphanumerical characters in the URL (yellow highlighted). Additionally, [because there are two choices](#multiple-choices-selected-in-a-facet) in this example, the hashed choice is preceded by an encoded comma: the 
```
%2C
```

 part of the string.

### Prevent hashing of facet choices

If you want to prevent [hashing of your facet’s choices](#sanitized-and-hashed-facet-choices), be aware of the following rules for the source fields and terms of your facets’ choices:

- Allowed are: alphabetical (a-z) and numerical (0-9) characters, underscores 
```
_
```

, dashes 
```
-
```

 and dots 
```
.
```

.
- Any other type of character, including commas 
```
,
```

 and ampersands 
```
&
```

, will trigger the facet choice to be hashed in the URL.
- Spaces will be replaced by dashes 
```
-
```

.
- Multiple consecutive dashes will be replaced with a single dash.
- The [maximum number of characters is 50](/help-center/developers/facetwp-performance-speed-limits-and-scalability/#indexing-value-limits), above that the choice will be truncated.

If you can’t prevent users from breaking the above rules when entering values, or if manually fixing all source fields/terms is too much work (or impractical because of imported content), an alternative solution is to use the [facetwp_index_row](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/) hook to replace the offending characters **before** the sanitizer function runs.

The following code replaces commas 
```
,
```

 and ampersands 
```
&
```

 with dashes 
```
-
```

, when the choices are indexed. Make sure to [re-index](/help-center/indexing/) after adding this code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_index_row', function( $params, $class ) {
  if ( 'your_facet_name' == $params['facet_name'] ) { // replace 'your_facet_name' with the name of your facet
    $value = $params['facet_value'];
    $value = str_replace( ',', '-', $value );
    $value = str_replace( '&', '-', $value );
    $params['facet_value'] = $value;
  }
  return $params;
}, 10, 2 );
```

## FacetWP’s URL as permalink

The main reason for FacetWP’s query string is to enable the user to bookmark, forward or link to pages with specific facet combinations already pre-selected.

When a URL with a query string is opened for the first time, FacetWP uses its [FWP.loadFromHash()](/help-center/developers/javascript-reference/js-objects-and-functions/#functions) function to load the post listing and facets directly from the URL’s query string, resulting in a page with all relevant facets reflecting the choices contained in their query variables.

### Pretty permalinks

We are occasionally asked if FacetWP supports “pretty” URLs, for example 
```
/make/audi/model/a4/
```

 instead of 
```
?_make=audi&_model=a4
```

.

The answer is no, FacetWP only supports permalinks with query variables. “Pretty” permalinks quickly lose their appeal when multiple facet selections are made and/or multiple facets are combined. In which case there is no parent-child relationship between the subsequent sections of the URL and pretty permalinks would not make sense anymore.

Pretty permalinks would also be [bad for SEO](#facetwps-url-and-seo), since search engines would see many different URLs with the same content.

### Preserve facet selections across pages

FacetWP automatically [generates a query string](#facetwps-url-construction) when a user interact with the facets. The whole URL including the query string acts like a permalink: it allows users to bookmark, link to, or forward the page URL with the facets choices pre-selected.

However, when navigating to other pages on the site, the facet selections are lost. Fortunately, it’s possible to preserve the facets’ state across pages, by using cookies. See [our tutorial](/how-to-preserve-facet-selections-across-pages/) to learn how to accomplish this.

In this context it is also good to know that it is possible to [pre-select facet choices](/how-to-pre-select-facet-choices/) for specific URLs.

### Disable FacetWP’s query string

Sometimes we get asked if it’s possible to turn off FacetWP’s URL variables.

One reason mentioned for this is that it would be better [for SEO](#facetwps-url-and-seo). Another reason is that turning them off restores the functionality of the browser’s “Back” button. With the query variables in place, clicking the “Back” button leads to previous filtering results. Without them, the previous page is loaded.

Although we recommend against it, it *is* possible to completely disable the query variables. FacetWP does not need them for facets to function properly.

However, be aware that when you opt to turn query variables off, users will lose the ability to use the URL (with pre-selected facet choices) for bookmarking, linking, and forwarding. Also using the browser’s “Back” button will not restore the state of the previous facet selections anymore.

To disable the query string, add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'wp_footer', function() {
  ?>
    <script>
      document.addEventListener('facetwp-refresh', function() {
        if (! FWP.loaded) {
          FWP.setHash = function() { /* empty */ }
        }
      });
    </script>
  <?php
}, 100 );
```

## FacetWP’s URL and SEO

A question that comes up occasionally is if FacetWP’s URL affects SEO in any way.

Disclaimer: we are not SEO experts, but there are a few logical answers:

Facets themselves are invisible to search engines. So search engine spiders will not “click” on facet choices and generate all kinds of URLs with query variables that get indexed. So there is no risk of creating “duplicate content” this way (which would be bad for SEO). The exception would be if you have links in your site to URLs with filtered facet combinations, for example in a menu or post content. Those links would get indexed and will show up in search engine results and [Google Analytics](/help-center/using-facetwp-with/google-analytics-4/).

Further, WordPress itself, and SEO plugins like Yoast SEO and RankMath, add “[canonical link elements](https://yoast.com/rel-canonical/)” to the page, which tell search engines that similar URLs are actually the same, preventing duplicate content issues. For pages with facets, the canonical URL is the same for every FacetWP URL, regardless of what facet choices are selected (including [pagination](#facetwp-pagination-seo-and-accessibility) and sorting). So there is no issue with duplicate content this way.

### Set FacetWP URLs with query strings to “noindex”

If you want to make absolutely sure that URLs with FacetWP query variables are not indexed, you can use the following code snippets to prevent this, depending on your installed SEO plugin.

Warning: Use below code snippets at your own risk, test them thoroughly to not mess up your SEO.

#### Set FacetWP URLs with query strings to “noindex” with Yoast SEO

If you are using the [Yoast SEO plugin](https://wordpress.org/plugins/wordpress-seo/), you can use the [“wpseo_robots” hook](https://developer.yoast.com/customization/apis/metadata-api/#available-presenters) to change the robots meta tag from 
```
index
```

 to 
```
noindex
```

 for pages with facet choices in the URL.

Add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'wpseo_robots', function( $robots ) {
  if ( function_exists( 'FWP' ) && ! FWP()->request->is_refresh && ! empty( FWP()->request->url_vars ) ) {
    return str_replace( 'index', 'noindex', $robots );
  }
  return $robots;
} );
```

The above code changes the robots meta tag **only for directly loaded URLs** with a FacetWP query string containing facet choices, including [FacetWP pagination](#facetwp-pagination-seo-and-accessibility) and sorting.

Worth mentioning is that Yoast SEO automatically [removes the canonical link tag](https://yoast.com/help/canonical-urls-in-yoast-seo/#troubleshooting) when the robots meta tag is set to “noindex”, because it is not necessary for that situation.

#### Set FacetWP URLs with query strings to “noindex” with SEOPress

If you are using the [SEOPress plugin](https://wordpress.org/plugins/wp-seopress/), you can use the [“seopress_titles_noindex” hook](https://www.seopress.org/support/hooks/filter-meta-robots-noindex/) to change the robots meta tag from 
```
index
```

 to 
```
noindex
```

 for pages with facet choices in the URL.

Add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'seopress_titles_robots_attrs', function( $attrs ) {
    if ( function_exists( 'FWP' ) && ! FWP()->request->is_refresh && ! empty( FWP()->request->url_vars ) ) {
        $attrs = ['noindex,follow'];
    }
    return $attrs;
});
```

The above code changes the robots meta tag **only for directly loaded URLs** with a FacetWP query string containing facet choices, including [FacetWP pagination](#facetwp-pagination-seo-and-accessibility) and sorting.

### FacetWP pagination, SEO and accessibility

If you are using AJAX-based pagination on your page, like FacetWP’s [Pager facet](/help-center/facets/facet-types/pager/), be aware that the individual posts on the subsequent paged pages, and the paged pages themselves, will not be seen and indexed by search engines. The Pager facet’s 
```
<a>
```

 tags do not have 
```
href
```

 attributes with links that the search engine spider can follow. Also, users without JavaScript enabled will not be able to see and use any pagination on paged archives that you are using FacetWP on.

For SEO, this is not necessarily problematic, as long as all individual posts are reachable for the search engine spider through *other* archive pages on the site, like post-type archives and term archives. Another way to make sure all pages are found is by implementing a sitemap and [pointing to it in your robots.txt file](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt).

#### Give search engines clickable pagination links

If you don’t want to rely on other archive pages or your robots.txt file for SEO of your paged pages, a recommended approach is to give search engines “non-JavaScript/AJAX” pagination links that they can follow: anchor links *with* 
```
href
```

 attributes. And then **hide** those pagination links from users, who will get served the AJAX-based pagination. There are a few ways of doing that.

Note: the following sections and solutions do **not** apply to shortcode templates (made with the [Listing builder](https://facetwp.com/help-center/listing-templates/listing-builder/)) that are placed on normal WP pages, as these pages don’t have built-in PHP-based pagination.
Use WooCommerce pagination
If you are using WooCommerce, on shop/product archive pages you can use WooCommerce’s built-in pagination instead of a Pager facet. FacetWP [has built-in support for WooCommmerce pagination](/help-center/using-facetwp-with/woocommerce/#using-woocommerce-pagination), meaning that FacetWP listens for the click events on the WooCommerce pagination’s 
```
href
```

 anchor links and uses them for its AJAX pagination. This is the best of both worlds: users get AJAX pagination, and search engine spiders (and users without JavaScript enabled) can follow the 
```
href
```

 links.

Use WP-PageNavi pagination
If you don’t use WooCommerce, or for non-product archive templates, you could add pagination with the [WP-PageNavi](https://wordpress.org/plugins/wp-pagenavi/) plugin.

It is possible to make FacetWP work directly with WP-PageNavi’s pagination. With the code below in place, FacetWP will listen for the click events on WP-PageNavi’s 
```
href
```

 anchor links and use them for its AJAX pagination. Similar to [the way WooCommerce pagination works with FacetWP](#use-woocommerce-pagination), this is the best of both worlds: users get AJAX pagination, and search engine spiders (and users without JavaScript enabled) can follow the 
```
href
```

 links.

Note that this approach will work in [WP archive](/help-center/listing-templates/wp-archive-page/) or [custom WP_Query](/help-center/listing-templates/custom-wp-query/) templates, but **not** in [Listing Builder templates in Dev mode](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/).

Add the following code to your (child) theme’s functions.php to make this work:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Note: if your website is not in English, change "page" in the match() function to whatever it is in your language.
function fwp_pagenavi_support() {
  ?>
    <script>
      (function($) {
        $(document).on('facetwp-refresh', function() {
          if (! FWP.loaded) {
            $(document).on('click', '.wp-pagenavi a', function(e) {
              e.preventDefault();
              var matches = $(this).attr('href').match(/\/page\/(\d+)/);
              if (null != matches) {
                FWP.paged = parseInt(matches[1]);
              }
              FWP.soft_refresh = true;
              FWP.refresh();
            });
          }
        });
      })(jQuery);
    </script>
  <?php
}
add_action( 'wp_head', 'fwp_pagenavi_support', 50 );
```

For this code to work, the WP-PageNavi pagination needs to be **inside** the container element/div with class 
```
facetwp-template
```

, so it will be updated on AJAX refresh. If you did not create this element yourself in the template you are using (for example on WP archives), you need to create this container div manually and make sure the navigation is within it.

The WP-PageNavi plugin has the option to customize the pagination links so that *all* 
```
/paged/..
```

 pages are *individually* linked (not only with “prev”, “next” or “last” links). This helps to give the search engine spider direct “one-click” access to all paged pages, even if there are many.

If you don’t want to expose the user to a pagination that is set up this way, you could consider using it only as a **hidden**, secondary navigation meant for search engines, while giving the user AJAX-based pagination with a Pager facet:

Use secondary non-JavaScript pagination and hide it
Another approach is to use a [Pager facet](/help-center/facets/facet-types/pager/) to create the AJAX pagination for the user, but to add a secondary set of non-JavaScript/AJAX pagination just for search engines (and users without JavaScript enabled). Then you can hide this secondary pagination from the user with CSS, but only when they have JavaScript enabled, so it is still accessible to users without JavaScript enabled.

This secondary navigation can be added with any plugin, like the [above-mentioned WP-PageNavi plugin](#use-wp-pagenavi-pagination), with [WordPress’ built-in pagination functions](https://codex.wordpress.org/Pagination), or with pagination functionality that comes with your theme.

You could hide the secondary navigation simply by targeting it with a 
```
display: none;
```

 CSS rule. But then users without JavaScript enabled would not be able to see and navigate paged pages. So a better solution is to make that CSS rule dependent on whether the user has JavaScript enabled.

Detecting JavaScript can be done in many ways. The following is a very clean and simple solution ([by Paul Irish](https://www.paulirish.com/2009/avoiding-the-fouc-v3/)), based on [Modernizr](https://modernizr.com) :

First, give the 
```
<html>
```

 tag in your header.php file the attribute 
```
class="no-js"
```

.

Then place the following script **as high as possible** within the 
```
<head>
```

 tag in your header.php file. It needs to run as soon as possible, before the browser can render anything else:

```
<script>(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement)</script>
```

This code will replace the 
```
no-js
```

 class of the 
```
<html>
```

 tag with 
```
js
```

 if JavaScript is enabled.

These classes can now be used in conditional CSS rules. The following CSS code will hide the secondary pagination, but only when JavaScript is enabled (this is for WP-PageNavi, adapt the class as needed):

```
How to use custom CSS?CSS code can be placed in your (child) theme's style.css file. Alternatively, you can add it manually between <style> tags in the <head> section, in your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer.  Or you can use a code snippets plugin. More info.js .wp-pagenavi { 
  display: none;
}
```

#### Add a “noindex” robots meta tag on paged pages or not?

In the past, it used to be good practice to add a 
```
noindex
```

 robots meta tag to all paged pages, to prevent them from showing up in search engine results. This is no longer the case, as explained in [this article of Yoast SEO about pagination best practices](https://yoast.com/pagination-seo-best-practices/).

## Functions and objects to get and manipulate the URL

When you are customizing FacetWP, be aware of the following built-in [JavaScript objects and functions](/help-center/developers/javascript-reference/js-objects-and-functions/) to get and manipulate (the info in) the URL.

Say you have this page URL:

```
https://facetwp.com/demo/recipes-demo/­?_recipe_categories=cake&_flavors=almond
```

You can use the following methods to get and manipulate the different parts this URL consists of:

### Get the URI

To get the URI (Uniform Resource Identifier), which is the part of the URL without the domain name and the query variables, you can use the 
```
FWP_HTTP.uri
```

 variable:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'wp_footer', function() {
  ?>
    <script>
      document.addEventListener('facetwp-loaded', function() {
        console.log( FWP_HTTP.uri );
      });
    </script>
  <?php
}, 100 );
```

The above code will output the following string to the Console, without the beginning and trailing slashes:

```
demo/recipes-demo
```

#### Get the URI with PHP

If you need to get the URI with PHP, you can use the following:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoFWP()->helper->get_uri();
```

A usage example can be found in our tutorial on [How to Pre-Select Facet Choices](/how-to-pre-select-facet-choices/).

### Get the query variables

To get the query variables – which [are generated after interaction with facets](#facetwps-url-construction) – **as an object**, you can use the 
```
FWP_HTTP.get
```

 variable:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'wp_footer', function() {
  ?>
    <script>
      document.addEventListener('facetwp-loaded', function() {
        console.log( FWP_HTTP.get );
      });
    </script>
  <?php
}, 100 );
```

The above code will output the following object to the Console, containing the page’s 
```
$_GET
```

 variables:

```
{_recipe_categories: "cake", _flavors: "almond"}
```

#### Get the query variables with PHP

If you need to get the query variables with PHP, the following variable contains them as an array, after directly loading a page URL with facet selections in its query string:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoFWP()->request->url_vars
```

A usage example can be found in the above [robots meta tag code example](#set-facetwp-urls-with-query-strings-to-noindex-with-yoast-seo).

### Get the query string

To get the query variables – which [are generated after interaction with facets](#facetwps-url-construction) – **as a string**, you can use the 
```
FWP.buildQueryString()
```

 function, which  builds and returns the URL query string:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'wp_footer', function() {
  ?>
    <script>
      document.addEventListener('facetwp-loaded', function() {
        console.log( FWP.buildQueryString() );
      });
    </script>
  <?php
}, 100 );
```

The above code will output the following string to the Console, containing the page’s whole query string (without the preceding question mark):

```
_recipe_categories=cake&_flavors=almond
```

This function can be useful to determine if any facets are currently in use. An example would be to [show/hide the post listing based on whether there are facet query variables in the URL](/how-to-hide-the-listing-template-until-facets-are-selected/#hide-the-listing-when-no-facets-are-selected), or to  [scroll the page if there are facet selections](/how-to-scroll-the-page-on-facet-interaction/#scroll-when-any-facet-choice-is-selected-on-the-initial-page-load). See our code snippets for [more examples](https://gist.facetwp.com/?_keywords=FWP.buildQueryString).

### Get the selected facets and facet choices

To get the selected facets and/or facet choices that [are present as individual query variables in the URL](#facet-choices-in-the-url), you can use the 
```
FWP.facets
```

 object. Here is a simple example that checks if a specific facet has any choice(s) selected:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'wp_head', function() {
  ?>
  <script>
    document.addEventListener('facetwp-loaded', function() { 
      let selected = FWP.facets['my_facet_name']; // Replace "my_facet_name" with the name of your facet
      if ( selected.length ) { // If any choice in this facet is selected
        // Do something
      }
    });
  </script>
  <?php
}, 100 );
```

See our JS objects and functions page for [more examples of how to use FWP.facets](/help-center/developers/javascript-reference/js-objects-and-functions/#using-fwp-facets).

#### Get the selected facets and facet choices with PHP

If you need to get the selected facets and facet choices with PHP, you can use the following:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoFWP()->facet->facets // Returns all selected facets
FWP()->facet->facets[ 'my_facet_name' ]['selected_values'] // Returns selected values for the facet named "my_facet_name"
```

See [our code example library for usage examples](https://gist.facetwp.com/?_keywords=FWP()-%3Efacet-%3Efacets).

### Other URL related functions

Two other URL-related functions are 
```
FWP.setHash()
```

 and 
```
FWP.loadFromHash()
```

.

The first one can be used to update the query string, but also to [disable it](#disable-facetwps-query-string). The second one dynamically re-creates all facet selections when a URL with a query string populated with pre-selected facet choices is entered by a user:

```
How to use custom JavaScript code?JavaScript code can be placed in your (child) theme's main JavaScript file. Alternatively, you can add it manually between <script> tags in the <head> section of your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer. Or you can use a code snippets plugin. More infoFWP.setHash(); // Updates the permalink URL
FWP.loadFromHash(); // Populates facet data from URL data (happens on page load)
```

    
## See also

    - [What are facets?](https://facetwp.com/help-center/facets/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [Recipes Demo](https://facetwp.com/demo/recipes-demo/)
- [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [The Checkboxes facet type](https://facetwp.com/help-center/facets/facet-types/checkboxes/)
- [Indexing](https://facetwp.com/help-center/indexing/)
- [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [FacetWP JavaScript objects and functions](https://facetwp.com/help-center/developers/javascript-reference/js-objects-and-functions/)
- [How to preserve facet selections across pages](https://facetwp.com/how-to-preserve-facet-selections-across-pages/)
- [How to pre-select facet choices](https://facetwp.com/how-to-pre-select-facet-choices/)
- [How to hide the listing template until facets are selected](https://facetwp.com/how-to-hide-the-listing-template-until-facets-are-selected/)
- [How to track facet pages with Google Analytics 4](https://facetwp.com/help-center/using-facetwp-with/google-analytics-4/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [How to pre-filter Listing Builder listing queries with dynamic URL tags](https://facetwp.com/how-to-pre-filter-listing-builder-queries-with-dynamic-url-tags/)

                    Last updated: July 28, 2026

---

