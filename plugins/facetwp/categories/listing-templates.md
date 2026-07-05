# Listing Templates

*Category from FacetWP documentation*

---

## Listing templates

**Source:** [https://facetwp.com/help-center/listing-templates/](https://facetwp.com/help-center/listing-templates/)

A listing template tells FacetWP which posts to filter. For any [facet](/help-center/facets/facet-types/) to work, there needs to be a FacetWP-enabled listing on the page. **Without a valid listing template, facets will not show up**.

## Supported listing templates

FacetWP supports the following listing template types:

- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [Using a custom WP_Query in an ACF block](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/#create-a-custom-acf-block-with-a-facetwp-enabled-custom-wp_query) (with ACF Pro)
- [Using WordPress blocks](https://facetwp.com/help-center/listing-templates/using-wordpress-blocks/) (with add-on)
- Using a page builder:
- [Bricks](https://facetwp.com/help-center/using-facetwp-with/bricks/) (with add-on)
- [Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/) (with add-on)
- [Beaver Builder](https://facetwp.com/help-center/using-facetwp-with/beaver-builder/) (with add-on)
- [Breakdance](https://facetwp.com/help-center/using-facetwp-with/breakdance/)
- [Using FacetWP’s Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Using FacetWP’s Listing Builder in Dev Mode](https://facetwp.com/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/)

## Using multiple listing templates

You can have multiple listings on a page, but [only one of them should be FacetWP-enabled](/help-center/faq/can-i-use-multiple-queries-facetwp-templates-on-the-same-page/). **FacetWP will filter only one listing per page** and will not function correctly with multiple FacetWP-enabled listings.

If you are [using the Listing Builder](https://facetwp.com/help-center/listing-templates/) to build your listings, the same applies. But it may be good to know that in this case you can [add one or more “static” listings](/help-center/listing-templates/listing-builder/#multiple-listing-templates-on-the-same-page) if needed. These will just not react to facets.

As FacetWP-enabled listings always have the class 
```
facetwp-template
```

, you can check your page’s source code for the number of times this class appears. It should be only once.

## Solving issues with listings

There could be many reasons why your listing is not reacting correctly to your facets. First check [the documentation page of the listing template type](#supported-listing-templates) you are using, to see if you have set up things correctly.

![Enable 'Advanced query detection' in FacetWP's settings.](https://facetwp.com/wp-content/uploads/2025/10/advanced-query-detection.png)Enable “Advanced query detection” in FacetWP’s settings.
The next thing to try is to enable “Advanced query detection” in the settings. This setting (called “Strict query detection” in FacetWP versions older than [v4.5](/help-center/changelog/#4-5)) is enabled by default, except on older installations that existed before [v4.2.3](/help-center/changelog/#4-2-3)). In most cases, this will fix the issue. If not, check if FacetWP is [using the right query](/help-center/troubleshooting/using-the-right-query/). Also check [the FAQs](/help-center/#faq) and [the Troubleshooting page](/help-center/troubleshooting/) for more clues.

    
## See also

    - [What are facets?](https://facetwp.com/help-center/facets/)
- [Can I use multiple queries / FacetWP templates on the same page?](https://facetwp.com/help-center/faq/can-i-use-multiple-queries-facetwp-templates-on-the-same-page/)
- [Using the right query](https://facetwp.com/help-center/troubleshooting/using-the-right-query/)
- [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)

                    Last updated: October 21, 2025

---

## Using a custom WP_Query

**Source:** [https://facetwp.com/help-center/listing-templates/custom-wp-query/](https://facetwp.com/help-center/listing-templates/custom-wp-query/)

FacetWP works with custom WP queries, as long as you point FacetWP to that query with a special query argument, [as shown below](#define-the-query-arguments-and-enable-facetwp).

## How to create a custom query

Important:Make sure to create your custom query with [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/). Don’t use 
```
get_posts()
```

 as this will **not** work with FacetWP.
A custom query exists of the [definition of the query in the query arguments](#define-the-query-arguments-and-enable-facetwp), and the [query loop](#create-the-query-loop). Both need to be present on your page for your posts/results to show up.

See the section below for [where to place your custom query](#where-to-place-the-custom-query).

### Define the query arguments and enable FacetWP

To run the query with 
```
new WP_Query( $args );
```

, you first need to define the query arguments.

The arguments determine which posts need to be fetched from the database, how many per page, and how they are ordered:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Define the query arguments
$args = [
  "post_type"      => ["event"],
  "posts_per_page" => 10,
  "orderby"        => ["title" => "ASC"],
  // ... your arguments
  "facetwp"        => true //This flags this custom query as the one to be used by FacetWP
];

// Run the query
$my_query = new WP_Query( $args );
```

See WordPress’ [WP_Query documentation](https://developer.wordpress.org/reference/classes/wp_query/) for all query arguments you can use in the query arguments. If you have trouble writing your query arguments, [this WP_Query generator](https://generatewp.com/wp_query/) could be useful. And if you need to filter or sort your query by one or more custom fields, see [our tutorial](/how-to-filter-or-order-a-wp_query-by-one-or-more-custom-fields/) about that.

For FacetWP to work with this custom query, the 
```
facetwp => true
```

 argument needs to be added. FacetWP uses this special argument to [automatically detect this query](#how-it-works) as the main query to use for filtering. **Without it, facets will not show up**.

### Create the query loop

A basic loop example using [the above custom query](#wp-query-L11) would look like this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoif ( $my_query->have_posts() ) :
  while ( $my_query->have_posts() ) :
    $my_query->the_post(); // Use only here, NOT outside the loop.
    ?>
    <h1><?php the_title(); ?></h1>
    <div><?php the_content(); ?></div>
  <?php
  endwhile;
else :
  ?>
  <p><?php  _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php
endif;
wp_reset_postdata();

// get_footer(); // Make sure to include footer.php in your template, and make sure the wp_footer(); function is present in it.
```

Notice how 
```
$my_query
```

 is named the same as in 
```
$my_query = new WP_Query( $args );
```

 in [above snippet](#wp-query-L11).

A “no results” message (translatable by using 
```
_e()
```

) can be defined within the 
```
else
```

 statement, as shown on [line 11](#the-loop-L11).

#### Prevent empty facets

If you’re building your template from scratch, make sure that the [wp_footer()](https://developer.wordpress.org/reference/functions/wp_footer/) function is present in your (child) theme’s footer section. The footer section is usually a file named 
```
footer.php
```

. If this function is not there, FacetWP’s [JavaScript and CSS assets](/help-center/developers/hooks/advanced-hooks/facetwp_assets/) cannot load in the footer, **resulting in empty facets**. Also [code snippets using the “wp_footer” action](/how-to-use-custom-code/) will not work. If 
```
wp_footer();
```

 is not present in your 
```
footer.php
```

 (or your main template, if it does not use a separate footer include), you can add it manually by adding 
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

 is actually included in the template used, usually with WP’s [get_footer()](https://developer.wordpress.org/reference/functions/get_footer/) function.

## Solving issues with FacetWP’s automatic post loop detection

Most of the time, after placing the custom query and some [facets](/help-center/facets/#display-a-facet) on a single page/post ([not on an archive](#where-to-place-the-custom-query)), the above template will just work: FacetWP will automatically detect the custom query and the post loop that it needs to dynamically change when filtering with facets.

However, there are circumstances in which FacetWP’s automatic detection fails, resulting in the facets and listing not being updated.

### How it works

The above 
```
facetwp => true
```

 query argument flags the custom query as the main query to use for filtering.

Using WP’s [loop_start](https://developer.wordpress.org/reference/hooks/loop_start/) hook, Facetwp identifies the post loop that uses this query, and a 
```
<!--fwp-loop-->
```

 HTML comment is placed above the post loop in the template.

Next, FacetWP’s front-end JavaScript looks for that HTML comment and automatically adds a 
```
facetwp-template
```

 class on its direct parent HTML element, unless there is already another 
```
facetwp-template
```

 class present on the page. FacetWP needs this class to dynamically replace all HTML within this container with the AJAX refresh that happens when facets are used.

When the 
```
facetwp-template
```

 class ends up missing because one of these steps goes wrong, the solution is to add it [manually](#fix-the-loop-detection).

Note that this is also the fix for issues with some caching and optimization plugins (like [Cloudflare](/help-center/using-facetwp-with/cloudflare/#html-minification-and-the-facetwp-template-class)) that minify HTML. HTML minification removes HTML comments, including the 
```
<!--fwp-loop-->
```

 comment needed by FacetWP.

### Fix the loop detection

When the [above described](#how-it-works) automatic query/post-loop detection fails (which can happen for a myriad of reasons), the 
```
facetwp-template
```

 class will not be not placed on the post-loop parent element. Without it, FacetWP does not know which content to dynamically replace, the facets will not work and the listing will not get updated when filtering.

The solution is easy: manually place the 
```
facetwp-template
```

 class on an element that (directly) surrounds the post loop, in the template file that contains the loop:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info?>
<div class="facetwp-template">

<?php
if ( $my_query->have_posts() ) :
  while ( $my_query->have_posts() ) :
    $my_query->the_post(); // Use only here, NOT outside the loop.
    ?>
      <h1><?php the_title(); ?></h1>
      <div><?php the_content(); ?></div>
  <?php
  endwhile;
else :
  _e( 'Sorry, no posts matched your criteria.' );
endif;
wp_reset_postdata();
?>

</div>

<?php
// get_footer(); // Make sure to include footer.php in your template, and make sure the wp_footer(); function is present in it.
```

As can be seen in the above code, the 
```
facetwp-template
```

 class needs to be placed on a container element (usually a 
```
<div>
```

) that **surrounds** the loop code, preferably on the **direct parent** element. If there is no container element, you can add one yourself.

Important: all [facets](/help-center/facets/) on a page need to be placed **outside** the container element that has the 
```
facetwp-template
```

 class. If you do not place the class on a direct parent element (or close enough), you may end up with facets that are *inside* the container. This will cause issues like disappearing facets, and a Console error: “Facets should not be inside the “facetwp-template” container”.

## Where to place the custom query?

It’s recommended to place your custom query **on a single page or post**, and not on a WP archive page. If you do place it on an archive page, keep the following in mind:

### Using a custom WP_Query on a WP archive

We often see developers using a custom 
```
WP_Query
```

 in [WP archive templates](/help-center/listing-templates/wp-archive-page/#what-is-a-wp-archive-page), in order to replace WP’s default archive query (or to change its arguments, like the number of posts per page). The downside of this approach is that the database is getting queried twice, adding unnecessary overhead. It also breaks plugins that rely on WP’s default archive query.

A more efficient approach is to modify the already existing archive query itself, [with a pre_get_posts filter](/how-to-customize-wp-archive-queries/), instead of using a separate custom 
```
WP_Query
```

.

However, if you have a custom 
```
WP_Query
```

 on a WP archive page, and you don’t want or cannot move the custom 
```
WP_Query
```

 from the WP archive, you have to tell FacetWP explicitly which query (not) to use.

FacetWP has built-in query detection that determines which query on the page is the main query to use for filtering. On WP archive pages, **FacetWP by default will always prioritize the archive query** ahead of any other query on the page, including the custom 
```
WP_Query
```

 you placed on that page. This is the reason why a custom query on a WP archive will lead to unexpected results: FacetWP is using another query than the one defined in the custom query.

Using the [facetwp_is_main_query](/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/) hook, it is possible to force FacetWP to **ignore** the archive query, and use the custom query instead. Add the following code to your (child) theme’s functions.php to do this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ( $query->is_archive() && $query->is_main_query() ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 10, 2 );
```

Notes: If you set a static page for your posts (blog) page in WP’s “Reading” settings, for that page 
```
is_archive()
```

 will return 
```
false
```

. For the above code to work on such a posts page, replace 
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

## Use a FacetWP-enabled custom WP_Query in a custom ACF block

To learn how to create a filterable custom 
```
WP_Query
```

 as an [ACF Pro block](https://www.advancedcustomfields.com/resources/blocks/), read [this section on our Advanced Custom Fields page](/help-center/using-facetwp-with/advanced-custom-fields/#create-a-custom-acf-block-with-a-facetwp-enabled-custom-wp_query).

    
## See also

    - [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [The facetwp_is_main_query hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/)
- [How to prevent duplicate results](https://facetwp.com/how-to-prevent-duplicate-results/)
- [How to filter or order a WP_Query by one or more custom fields](https://facetwp.com/how-to-filter-or-order-a-wp_query-by-one-or-more-custom-fields/)
- [How to order a WP_Query by terms or categories](https://facetwp.com/how-to-order-a-wp_query-by-terms-or-categories/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)

                    Last updated: December 18, 2025

---

## Using the Listing Builder

**Source:** [https://facetwp.com/help-center/listing-templates/listing-builder](https://facetwp.com/help-center/listing-templates/listing-builder)

## What is the Listing Builder?

FacetWP’s Listing Builder allows you to quickly and visually design a results listing.

It’s a convenient alternative to building your own [WP archive pages](/help-center/listing-templates/wp-archive-page/) or [Custom WP_Query](/help-center/listing-templates/custom-wp-query/) loops.

After building the listing template, you can display it on any WordPress page [with a shortcode](#display-a-listing-template), or include it in a template directly [with PHP](#display-a-listing-template-with-php). Then put any number of [facets](/help-center/facets/) on the page to interact with it.

It is even possible to have [multiple listing templates](#multiple-listing-templates-on-the-same-page) on the same page: one being the dynamic listing that the facets on the page interact with, the others being “static” listings.

If you prefer to code your post loops and query arguments by hand, you can still take advantage of the Listing Builder by using its [Dev mode](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/).

## Create a listing template

Browse to **Settings > FacetWP**, click the “Listings” tab and then “Add new”.

The Listing Builder is covered in the video below, starting at 1:49.

### Using Dev mode

![FacetWP Listing Builder Dev Mode](https://facetwp.com/wp-content/uploads/2022/04/devmode.png)New templates use the “visual” Listing Builder by default. However, if you need more flexibility and you’re experienced in WordPress coding, you can switch both the Display tab and [Query tab](#using-the-query-tab) independently from each other to “Dev mode”, by clicking the checkbox on the right.

In Dev mode, you can [use PHP to build the listing template output and the query arguments](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/).

Note that although you can freely switch each tab between the “visual mode” and Dev mode, the two modes are not related (except momentarily when you use the [Convert to query args](#convert-to-query-arguments) button). For the Display tab as well as the Query tab, a listing template uses one mode **or** the other: the mode in which you leave the tabs when you save the listing template, is used.

You can also mix modes. For example, you can use visual mode in the Display tab and Dev mode in the Query tab.

### Naming your listings

In a listing’s settings, the “name” is what is shown in the gray input field:

![A listing name field](https://facetwp.com/wp-content/uploads/2025/10/listing-builder-name-field.png)A listing’s name field
The listing’s name is its technical name, used to identify it in code, for example in its [shortcode](#display-a-listing-template).

The name field is automatically generated from the listing’s “Label” field (the input field to the left of it) when it is first entered. But you can easily change the name, for example to shorten or simplify it. The auto-generated or customized name is **sanitized** on auto-generation or after changing and saving. Special characters are removed, and spaces and dashes are replaced with underscores.

To prevent issues, make sure all your listings have a **unique name**. In FacetWP 4.5+, a numbered suffix is automatically appended when a duplicate name is detected. For example, when creating a second listing with the name 
```
new_template
```

, the name field will automatically append a number: 
```
new_template_1
```

.

## Using the Query tab

The Query tab offers an easy visual alternative to manually building a WP query with PHP. You can define which results (posts or other post types) should be fetched in the initial post listing, before any filtering is applied by the user. You can also set the number of posts per page and the sorting method, and apply filtering rules to narrow the results.

### Set the post types to fetch

![Listing builder - Query tab - fetch post types.](https://facetwp.com/wp-content/uploads/2022/10/listing-builder-query-tab-fetch-post-types.png)Fetch post types in the Query tab of the Listing Builder.
In the first line of the settings you can select one or more post types that have to be fetched.

Make sure that these post types are “searchable”, meaning that the 
```
exclude_from_search
```

 parameter of the [register_post_type()](https://developer.wordpress.org/reference/functions/register_post_type/#exclude_from_search) function is set to false. Otherwise your posts [will not get indexed](/help-center/indexing/common-indexing-issues/#fix-issues-with-indexing-post-types).

### Set the number of posts per page

![Listing builder - Query tab - fetch post types.](https://facetwp.com/wp-content/uploads/2022/10/listing-builder-query-tab-set-posts-per-page.png)Set posts per page in the Query tab of the Listing Builder.
Next, if you intend to use pagination (for example with a [Pager facet](/help-center/facets/facet-types/pager/)), set the number of posts per page.

It is advisable to set the number to something reasonable, like 15-20 posts max. This will reduce the number of queries needed to load the data for all displayed posts, which will [speed up filtering](/help-center/developers/facetwp-performance-speed-limits-and-scalability/#speed-up-facet-filtering-itself). If you use 
```
-1
```

, all posts will be retrieved. Use this only if you have a limited number of posts. If you leave the field empty, the default number of posts per page is 
```
10
```

.

### Add query sorting rules

![Listing builder - Query tab - define sorting rules.](https://facetwp.com/wp-content/uploads/2022/10/listing-builder-query-tab-multiple-sorting-rules.png)Define one or more sorting rules in the Query tab of the Listing Builder.
Click the “Add query sort” button to add a sorting rule. A sorting rule consists of a (custom) field to initially sort the listing by, and the sort order. 
```
ASC
```

 means ascending, e.g. A-Z. 
```
DESC
```

 means descending, e.g. Z-A.

The defined order determines the *initial* sort order (on page load or after using a [Reset facet](/help-center/facets/facet-types/reset/)). If you add a [Sort facet](/help-center/facets/facet-types/sort/), you can offer the user other ways of sorting the listing.

You can add multiple sorting rules, by clicking the “Add query sort” button again. The sorting rules are applied in the order you define them, so subsequent rules can be used to apply a backup sort order. For example, if you want to sort by post date, but multiple posts share the same post date, you can sort by post date first, and by post title second.

To delete a sorting rule, click the red minus button on the right.

### Add query filtering rules

Click the “Add query filter” button to add a filtering rule. With a filtering rule, you can narrow the posts that are shown in the listing.

![Listing builder - Query tab - define filtering rules.](https://facetwp.com/wp-content/uploads/2022/10/listing-builder-query-tab-multiple-filtering-rules.png)Define one or more filtering rules in the Query tab of the Listing Builder.
A filtering rule consists of:

1. The (custom) field that will be used to compare against.
2. A type selector (which appears for some customs fields). The possible values 
```
TEXT
```

, 
```
NUMERIC
```

, or 
```
DATE
```

 determine which compare operators are possible, and the way the values will be compared. [See below](#comparing-text-numeric-and-date-values) for more info about these field types.
3. A [compare operator](#using-compare-operators).
4. [One or more values to be used in the comparison](#entering-values-to-compare-against).

You can add multiple filtering rules, by clicking the “Add query filter” button again. When multiple filtering rules are used, the logic operator between them is 
```
AND
```

.

To delete a filtering rule, click the red minus button on the right.

#### Using compare operators

The table below gives an overview of the available compare operators and their behavior.

The available options depend on the type of source field you have selected. If you select a custom field as source, the options will depend on the field type you set: 
```
TEXT
```

, 
```
NUMERIC
```

, or 
```
DATE
```

. For example, the 
```
>
```

 and  
```
<
```

 operators are not available when you use a custom field with 
```
TEXT
```

 set as its field type.

| Operator | Behavior if multiple values | Comparison description |
| --- | --- | --- |
| = | OR | The field EXISTS for the post, and the value IS [x] (OR [y]) |
| != | AND | The field EXISTS for the post, and the value is NOT [x] (AND is NOT [y]) |
| > | Only first value is used | The field EXISTS for the post, and the value is GREATER THAN [x] |
| >= | Only first value is used | The field EXISTS for the post, and the value is GREATER THAN OR EQUAL to [x] |
| < | Only first value is used | The field EXISTS for the post, and the value is LESSER THAN [x]. Note: posts for which the field exists but is empty are considered to have a value of 0, so they will appear with this comparison. |
| <= | Only first value is used | The field EXISTS for the post, and the value is LESSER THAN OR EQUAL to [x]. Note: posts for which the field exists but is empty are considered to have a value of 0, so they will appear with this comparison. |
| IN | OR | The field EXISTS for the post, and the value is IN the list of values provided. Note: this is functionally the same as using the = operator with multiple values. |
| NOT IN | AND | The field EXISTS for the post, and the value is  is NOT IN the list of values provided. Note: this is functionally the same as using the != operator with multiple values. |
| EXISTS | n.a. | The field EXISTS for the post (and the value is empty or not empty). Note: that a field exists in the settings of e.g. Advanced Custom Fields or Custom Fields Suite, does not mean the field exists for each post. A post needs to be saved for a custom field to exist for that post. |
| NOT EXISTS | n.a. | The field does NOT EXIST for the post. E.g. because the post has not been saved: see EXISTS. |
| EMPTY | n.a. | The field EXISTS for the post and is EMPTY. |
| NOT EMPTY | n.a. | The field EXISTS for the post and is NOT EMPTY. |

#### Entering values to compare against

When adding values, make sure they are **saved properly**, otherwise the query filter will not work. Make sure that after entering a value, you always click the value in the dropdown that appears, or use “Enter”. A correctly entered value has an individual gray border and background with an “x” button. Click “Save changes” afterward.

![Listing builder - Query tab - query filter - entering values correctly.](https://facetwp.com/wp-content/uploads/2022/10/query-filter-enter-values-correctly.png)How to correctly enter values for a query filter in the Query tab of the Listing Builder.

#### Comparing text, numeric and date values

In most cases, if you select a custom field as source field, a type selector will appear. The options 
```
TEXT
```

, 
```
NUMERIC
```

, or 
```
DATE
```

 determine the field type and the comparison operators that can be used.

![Listing Builder - Query tab - query filter field type selector.](https://facetwp.com/wp-content/uploads/2022/10/listing-builder-query-tab-field-type-selector.png)Using the field type selector in a query filter in the Query tab of the Listing Builder.
Comparing numerical values
If you set the field type to 
```
NUMERIC
```

, you specify the comparison to be between numerical values. Numbers are internally compared as decimals (
```
DECIMAL(16,4)
```

), so you can compare numbers with a precision of up to 4 decimals.

Note that the decimals in the source field and the comparison values both need to have **a dot as decimal separator**. Currently, FacetWP’s “Separator” setting is ignored in these comparison rules. A comma will not work: decimals behind a comma are ignored: 10,3 is interpreted as 10, both for the source field and for the values to compare against.

Comparing date values
If you want to narrow the post listing by using dates, there are only four comparison operators available: 
```
<
```

, 
```
<=
```

, 
```
>
```

, and 
```
>=
```

. In these, 
```
<
```

 means: before a certain date, and 
```
>
```

 after a certain date.

For the source field, you can use the Post Date, or any other custom field, as long as you set the field type selector to 
```
DATE
```

.

The date value in the selected source field needs to be in “
```
YYYY-MM-DD
```

” format (
```
Y-m-d
```

 in PHP).

The date value you are entering yourself on the right side of the filtering rule, can be [any valid date/time date format](https://www.php.net/manual/en/datetime.formats.php) that is accepted by PHP’s [strtotime() function](https://www.php.net/manual/en/function.strtotime.php). Of course,
```
YYYY-MM-DD
```

 will work, but a lot of other formats will work too, including [relative formats](https://www.php.net/manual/en/datetime.formats.php#datetime.formats.relative). So these will all work (individually):

![Listing builder - Query tab - query filter - valid date values.](https://facetwp.com/wp-content/uploads/2023/03/listing-builder-query-filter-valid-dates.png)Valid date values for a query filter in the Query tab of the Listing Builder.

#### Fix issues with (ACF) serialized field values

For certain types of custom fields, the options in the query filter interface are not enough. If your chosen field stores its values as a serialized string, the compare operators will not work.

One example of such a field is Advanced Custom Fields’ [Checkbox field](https://www.advancedcustomfields.com/resources/checkbox/). See the ACF page for instructions on [how to get a serialized field working with the Listing Builder’s query settings](/help-center/using-facetwp-with/advanced-custom-fields/#using-an-acf-checkbox-field-as-meta_query-filter). The described solution will work for Checkbox fields as well as other fields with serialized values.

### Convert to query arguments

![Listing builder - Query tab - convert to query args.](https://facetwp.com/wp-content/uploads/2022/10/listing-builder-query-tab-convert-args.png)Convert to query args button in the Query tab of the Listing Builder.
When you click the “Convert to query args” button, the Query tab is switched to “[Dev mode](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/)” and the setting you have entered are converted to PHP query arguments.

In Dev mode, you can [manually adapt the converted query arguments and add others](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/#how-to-use-query-arguments-in-dev-mode).

This can be useful if your desired query is more complicated and you want to manually build a query with [WP_Query arguments](https://developer.wordpress.org/reference/classes/wp_query) that are not covered in the Listing Builder’s settings.

Be aware that the button works only one way: it converts the visual settings to PHP code only at the moment you click. You can switch back to visual mode, but the two modes are independent. The mode you leave the Query tab in when you click “Save changes” is the mode that will be used for the listing template’s query.

## Using dynamic tags

Within the Listing Builder you can use so-called “dynamic tags”, which are very useful in building more sophisticated layouts of the retrieved individual posts. A dynamic tag lets you pull in all kinds of post data, to be used in for example an HTML builder item or in a builder item’s setting field.

Besides the set of [built-in tags](#built-in-dynamic-tags) the Listing Builder comes with, you can use your own tags, created from custom fields [within the Listing Builder itself](#create-dynamic-tags-within-the-listing-builder).

For more complex needs it is also possible to [create custom tags by modifying the output of existing tags or by writing them from scratch](#create-or-modify-custom-dynamic-tags).

### Built-in dynamic tags

The following built-in tags are available:

| Tag | Output |
| --- | --- |
| {{ post:id }} | Returns the post’s id |
| {{ post:title }} | Returns the post’s title |
| {{ post:name }} | Returns the post’s name (slug) |
| {{ post:type }} | Returns the post’s type |
| {{ post:url }} | Returns the post’s url |
| {{ post:image }} | Returns the post’s featured image URL (in “full” size).
If you need another WordPress image size, you can can use the facetwp_builder_dynamic_tag_value hook. |

### Create dynamic tags within the Listing Builder

By creating a dynamic tag in the Listing Builder itself, you can pull in a post’s custom field value into a builder item’s field or setting.

The way this works is that you create a *hidden* builder item from the custom field you want to pull the value from, and use its “Unique name” as the dynamic tag name, to be used in other builder items’ fields. This may sound complicated but it’s actually very easy:

Let’s say you have a 
```
photo_url
```

 custom field and you want to wrap it into an 
```
<a>
```

 tag:

1. First, add a new builder item and select the desired field:

![Selecting a custom field as item source and creating a dynamic tag from the item's name.](https://facetwp.com/wp-content/uploads/2022/09/listing_builder_dynamic_tag-v2.png)Selecting a custom field as item source and creating a dynamic tag from the item’s unique name.
1. Next, enter 
```
photo-url
```

 in the builder item’s “Unique name” field and click the “Hide item” checkbox. In the builder, the item will become grayed out with a “hidden” icon next to it, and this item will be hidden on the front-end. We hide it because this builder item is only used to generate the dynamic tag: the content of its “Unique name” field becomes the dynamic tag: 
```
{{ photo-url }}
```

.
2. Finally, add a new HTML builder item and set its “Content” to:

```
<a href="{{ photo-url }}">{{ photo-url }}</a>
```

![Adding a custom dynamic tag to the Content field of an HTML item.](https://facetwp.com/wp-content/uploads/2022/09/listingbuilder-html-tags-html-field-v2.png)Adding a custom dynamic tag to the “Content” field of an HTML item.
FacetWP will now automatically replace all instances of 
```
{{ photo-url }}
```

 with the custom field’s value. You can even pull in multiple fields.

### Create or modify custom dynamic tags

It is also possible to modify existing dynamic tags or create your own custom tags from scratch.

There are two hooks available for this (with the second one being the more efficient of the two):

- [facetwp_builder_dynamic_tags](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tags/)
- [facetwp_builder_dynamic_tag_value](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/)

You could for example create a tag to [pull in content from a custom field](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/#create-a-dynamic-tag-to-output-the-value-of-a-custom-field) and modify it. Or a tag to [output the featured image url in any (default or custom) WordPress image size](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/#change-the-image-size-for-the-built-in-postimage-tag).

Besides modifying the output of [built-in tags](#built-in-dynamic-tags), you can also modify the dynamic tags you made [within the Listing Builder itself](#create-dynamic-tags-within-the-listing-builder). An example of this would be to modify a dynamic tag that pulls in data from a 
```
Price
```

 custom field, so that [the output value of the tag is prepended with a currency sign](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/#modify-a-custom-dynamic-tag-made-within-the-listing-builder).

See the above hook pages for more examples.

## Display a listing template

There are multiple ways to display a Listing Builder listing template on your page. You can [copy its shortcode](#copy-the-shortcode) and [place it in several ways](#place-the-shortcode). Or you can [use PHP](#display-a-listing-template-with-php), or [use an Elementor FacetWP Listing widget](#display-a-listing-template-with-an-elementor-facetwp-listing-widget).

### Copy the shortcode

![Copy shortcode button](https://facetwp.com/wp-content/uploads/2022/04/copyshortcodebutton-listing.png)![Copy shortcode in listings overview](https://facetwp.com/wp-content/uploads/2022/04/copyshortcode.png)After [creating the listing template](#create-a-listing-template), click the red “Copy shortcode” button.

It’s also possible to copy shortcodes directly from the Listings screen. Click the cog/gear icon on the right side of the listing’s row and click “Copy shortcode” in the dropdown.

You can also create your shortcode manually, using the listing name (the name in the grey box). Each listing’s shortcode looks like this:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp template="the_listing_name"]
```

### Place the shortcode

![How to past a facet or listing shortcode into a WordPress Gutenberg Shortcode widget block.](https://facetwp.com/wp-content/uploads/2019/02/block-editor-shortcode.gif)How to past a facet or listing shortcode into a WordPress Gutenberg Shortcode widget block.
Paste the shortcode into the body field [of your page](#where-to-place-the-listing-template), or into a Text widget (**Appearance > Widgets**).

If you are using the WordPress block editor, you can also paste shortcodes into a Shortcode block.

And if you are using a [supported page builder](/help-center/listing-templates/using-a-page-builder/), you can paste shortcodes in a Shortcode or HTML module/widget. For example in [an Elementor Shortcode widget](/help-center/using-facetwp-with/elementor/#add-facetwp-shortcodes-with-a-shortcode-widget).

### Display a listing template with PHP

Instead of [with a shortcode](#place-the-shortcode), listing templates can also be placed directly in your page template (or PHP include) with the 
```
facetwp_display()
```

 function:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho facetwp_display( 'template','the_listing_name' );
```

You can also output [listing shortcodes](#copy-the-shortcode) directly in your PHP templates, with WordPress’ [do_shortcode()](https://developer.wordpress.org/reference/functions/do_shortcode/) function:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho do_shortcode( '[facetwp template="the_listing_name"]' );
```

### Display a listing template with an Elementor FacetWP Listing widget

![The FacetWP Elementor Listing widget settings.](https://facetwp.com/wp-content/uploads/2024/12/facetwp-elementor-add-on-listing-widget-settings.png)The FacetWP Elementor Listing widget settings.
If you are using Elementor, and have [the Elementor add-on](/help-center/using-facetwp-with/elementor/) installed, you can also [use the FacetWP Listing widget](/help-center/using-facetwp-with/elementor/#the-facetwp-listing-widget) to place a Listing Builder listing template on your page.

After adding the widget to your page, use the “Listing” setting dropdown to select one of your previously created listings.

The Listing widget will show your listing, including its full layout, in the Elementor editor.

Note that [facets](/help-center/facets/) can also be placed with Elementor, [using the FacetWP Facet widget](/help-center/using-facetwp-with/elementor/#the-facetwp-facet-widget).

#### Adding static listings templates with an Elementor FacetWP Listing widget

![Add a static listing with the FacetWP Elementor Listing widget.](https://facetwp.com/wp-content/uploads/2024/12/facetwp-elementor-add-on-static-listing-widget-settings.png)Add a static listing with the FacetWP Elementor Listing widget.
You should add **only one** filterable Listing widget to a page.

If you need more listings, you can add one or more [non-filterable “static” listings](#display-static-listing-templates).

Using Elementor, these can be added [by enabling the “Static” toggle in the FacetWP Listing widget](/help-center/using-facetwp-with/elementor/#add-a-static-listing).

### Where to place the listing template?

If you place the listing template shortcode (or [PHP code](#display-a-listing-template-with-php), or [Elementor Listing widget](#display-a-listing-template-with-an-elementor-facetwp-listing-widget)) and your facets **on a single page or post**, your facets will just work.

But if you place the listing on a WP archive page, things will not function correctly out of the box. [See below for a few options to get this working](#using-a-listing-builder-listing-template-on-a-wp-archive).

If you are unsure what a WP archive is, or how to determine if you are using one, [read this](/help-center/listing-templates/wp-archive-page/#how-to-determine-if-you-are-on-a-wp-archive-page).

#### Using a Listing Builder listing template on a WP archive

Generally, on WP archive pages, it would be better **not** to use a Listing Builder listing template, but to [use the WP archive template query itself](/help-center/listing-templates/wp-archive-page/). But if you don’t want or cannot change the way things are set up, and want to keep using a Listing Builder listing template on a WP archive page, you have to tell FacetWP explicitly which query (not) to use.

FacetWP has built-in query detection that determines which query on the page is the main query to use for filtering. On WP archive pages, **FacetWP by default will always prioritize the archive query** ahead of any other query on the page, including the query of the Listing Builder listing template you placed on that page. This is the reason why a Listing Builder listing template on a WP archive will lead to unexpected results: FacetWP is using another query than the one defined in the Listing Builder.

There are a few possible approaches to this situation:

Option 1: Ignore the archive query
The first option is to use the [facetwp_is_main_query](/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/) hook to force FacetWP to **ignore the archive query**, and use the Listing Builder’s listing query instead. Add the following code to your (child) theme’s functions.php to do this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ( $query->is_archive() && $query->is_main_query() ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 10, 2 );
```

Notes: If you set a static page for your posts (blog) page in WP’s “Reading” settings, for that page 
```
is_archive()
```

 will return 
```
false
```

. For the above code to work on such a posts page, replace 
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
Option 2: Pre-filter results based on the archive query
The second option, which **only works on category, tag, taxonomy term, author, and search archive pages**, is to use the Listing Builder listing template but let FacetWP pre-filter its query with the current category, tag, term, or search term(s) from the archive itself.

This can be done by adding the 
```
facetwp_template_use_archive hook
```

 to your (child) theme’s functions.php. See that hook’s page for [detailed info about using this approach](/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/).

For example, on the 
```
category.php
```

 archive template, you could place a Listing Builder listing template that fetches posts. Without this hook, on the 
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

Option 3: Use the archive query itself
Last but not least, if you are deliberately placing facets on a WP archive page, instead of using a Listing Builder listing template, you could consider using the native WP archive query and loop instead.

On a WP archive [FacetWP will auto-detect and use the archive’s native query](/help-center/listing-templates/wp-archive-page/). Just place some facets on the page and they will work. And if you need to customize the native archive query, you can easily [adapt it with WP’s pre_get_posts filter](/how-to-customize-wp-archive-queries/).

## Multiple listing templates on the same page

Introduced in FacetWP v4.0 is the possibility to add more than one listing template to the same page.

Each listing template can have its own grid layout, styling, and query. But **only one** of them can be “dynamic” and will react to the facets on the page. The others have to be “static” listing templates and **will not react to facets**.

### Display static listing templates

Static listing templates can be added with a shortcode similar to dynamic templates, but with an extra “static” attribute:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp template="the_listing_name" static]
```

Static listing templates can also be placed directly in your WordPress archive templates, custom templates or includes, with PHP:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho facetwp_display( 'template','the_listing_name', [ 'static' => true ] );
```

If you are using Elementor, you can add static listings by [using a FacetWP Listing widget with the “Static” toggle enabled](/help-center/using-facetwp-with/elementor/#add-a-static-listing).

### Using (static) listings without facets

From version 4.3.5, FacetWP is not loading unneeded JS, CSS, and JSON assets anymore when there is/are only one (or more) static listing template(s) on the page, without a “normal” non-static listing template.

So if you only need a listing template on a page, **without any facets**, the recommendation is to [set this listing to static](#display-static-listing-templates), to prevent unnecessary loading of all assets.

Note that, starting from version 1.9.3 of the [Elementor add-on](/help-center/using-facetwp-with/elementor/), it is also possible to [add static listings with a FacetWP Listing widget](/help-center/using-facetwp-with/elementor/#add-a-static-listing).

Tip:To debug a complicated custom 
```
WP_Query
```

 that you created in the Listing Builder’s Query tab, you can normally use 
```
FWP.settings.debug.sql
```

 in the browser Console to see the SQL used by the query. However, Debug Mode will **not** work for static listings, because FacetWP’s assets are not loaded in this case for performance reasons, as explained above. In this scenario, or if you find this easier, you can 
```
var_dump()
```

 the SQL [by adding a code snippet to the listing’s Display tab in Dev mode](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/#debug-static-listing-builder-listing-queries).

## How to duplicate a listing template

![Duplicate, copy or clone a FacetWP listing template](https://facetwp.com/wp-content/uploads/2022/04/duplicate-facet.png) Since [FacetWP v4.0](/help-center/changelog/#4-0) it is very easy to clone/duplicate a listing template, including all its settings:

Go to **Settings > FacetWP** and click the Listings tab. On the right side of the listing template that you want to clone, click the cog/gear icon and click “Duplicate”. This instantly creates a full copy of the listing template and its settings, with the label and facet name having the word “copy” added.

Note:If you are using an older FacetWP version, you can still clone listing templates with the [Import / Export tool](https://facetwp.com/help-center/add-on-features-and-extras/back-up-or-move-facets-and-listing-templates/). This tool can also be used to back up facets and listing templates, or move them between sites.
You can then change the new template’s label, name and settings and click “Save changes”.

## Responsive support

![Setting the number of grid columns and grid spacing for a Listing Builder listing.](https://facetwp.com/wp-content/uploads/2025/11/listing-grid-columns.png)Setting the number of grid columns and grid spacing for a Listing Builder listing.
A Listing Builder listing will have as many grid columns as set in its “Number of grid columns” setting, as shown in the image on the right.

If the browser window’s width is decreased (or if the page is opened in a smaller screen, like on mobile), the listing’s [grid layout](https://css-tricks.com/snippets/css/complete-guide-grid/) will automatically change to *1 column*, at exactly 
```
480px
```

. This happens because its default CSS has one so-called “breakpoint”, set with a “media query” at 
```
max-width: 480px
```

. This means that if the window width is 
```
<= 480px
```

, the grid layout follows the CSS set for it, as shown below in [lines 24-29](#responsive-css-L24-L29).

You can add additional breakpoints with some custom CSS, and determine the number of grid columns (and any other layout changes you want to happen) at that width.

For example, add the following code to your (child) theme’s functions.php to add an **additional** breakpoint at 
```
max-width: 980px
```

 to switch the layout to *3 columns* if the browser width is 
```
<= 980px
```

. This is set in [lines 6-12](#responsive-css-L6-L12).

This example also shows how to add additional breakpoints, as many as you want. It adds a third one at 
```
max-width: 780px
```

 in [lines 15-21](#responsive-css-L15-L21), to set the grid layout to 2 columns.

If you want to keep the default breakpoint at 
```
480px
```

, it **must** be included in the snippet, as shown in [lines 24-29](#responsive-css-L24-L29). This is because we load this snippet in the footer with the 
```
facetwp_scripts
```

 hook, so it will override the default listing CSS that is loaded inline. Due to the cascading (overriding) nature of CSS, if you would not include the default breakpoint, the listing would display with 2 columns below 
```
780px
```

 and would ignore the breakpoint at 
```
480px
```

.

Another thing to look out for is the **order of the breakpoints**. When using 
```
max-width
```

 in the 
```
@media
```

 media query, the breakpoints must be ordered from high to low. In theory, you could also use 
```
min-width
```

 (called a “mobile first” approach), for which the order would have to be low to high.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
  <style>

    /* Add a custom breakpoint */
    @media (max-width: 980px) {
      body .facetwp-template .fwpl-layout,
      body .facetwp-template-static .fwpl-layout {
        grid-template-columns: repeat(3, 1fr); /* 3 columns */
        grid-gap: 20px; /* Optional: change the spacing at this breakpoint */
      }
    }

    /* Optional: add more custom breakpoints */
    @media (max-width: 780px) {
      body .facetwp-template .fwpl-layout,
      body .facetwp-template-static .fwpl-layout {
        grid-template-columns: repeat(2, 1fr); /* 2 columns */
        grid-gap: 30px; /* Optional: change the spacing at this breakpoint */
      }
    }

    /* The default breakpoint must be included if this snippet is loaded in the footer with 'facetwp_scripts' */
    @media (max-width: 480px) {
      body .facetwp-template .fwpl-layout,
      body .facetwp-template-static .fwpl-layout {
        grid-template-columns: 1fr; /* 1 column*/
      }
    }

  </style>
  <?php
}, 100 );
```

## Align the last item to the bottom

![Align the last item to the bottom of the post item in a simple Listing Builder layout.](https://facetwp.com/wp-content/uploads/2025/01/listing_builder_align_bottom.png)Align the last item to the bottom of the post item in a simple Listing Builder layout.
An often-asked question is how to align the last item to the bottom of the post item in a (simple) Listing Builder listing. Usually, the last item is a button, like in the image to the right.

The answer depends on the complexity of the layout, but if you have a simple column of builder items, all in one row, you can use the following CSS to align the last item to the bottom. It sets the (single) row to 100% of the height of the post item container, displays the child column as a grid, and aligns the last item in that column to the bottom:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
  <style>
    .fwpl-row {
      height: 100%;
    }
    .fwpl-col {
      display: grid;
    }
    .fwpl-item:last-child {
      align-self: end;
    }
  </style>
  <?php
}, 100 );
```

## Hide empty items

The layout builder automatically adds the CSS class 
```
is-empty
```

 to any items that contain no value. You could use this (within your theme’s 
```
style.css
```

) to hide these empty container elements with CSS, e.g.

```
How to use custom CSS?CSS code can be placed in your (child) theme's style.css file. Alternatively, you can add it manually between <style> tags in the <head> section, in your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer.  Or you can use a code snippets plugin. More info.fwpl-item.is-empty {
  display: none;
}
```

## Use shortcodes in builder items

A handy feature worth mentioning is that you can use shortcodes in builder items. FacetWP will automatically parse shortcodes in “Post Content” and [“HTML”](#use-shortcodes-in-html-builder-items) builder items.

In *other* builder item types, like “Post Title”, “Post Excerpt”, or items based on a custom field, you need to explicitly [tell FacetWP to parse shortcodes, using the facetwp_builder_item_value hook](/help-center/developers/hooks/output-hooks/facetwp_builder_item_value/#use-shortcodes-in-builder-items).

### Use shortcodes in HTML builder items

Shortcodes added to the “Content” field of an HTML builder item will automatically be parsed when the listing template is displayed:

![How to use shortcodes in an HTML builder item in the Listing Builder.](https://facetwp.com/wp-content/uploads/2022/09/listing_builder_html_parse_shortcode-v2.png)How to use shortcodes in an HTML builder item in the Listing Builder.

## Add links to builder items

In a post listing or grid, you’d usually want to link each post item (or elements of it, like the post title or a “read more” link) to the post’s permalink. In the Listing Builder, there are a few ways to do this:

### Add links with a setting

![The Link setting in a Button, Featured image, Post Title, or Custom field item in the Listing Builder.](https://facetwp.com/wp-content/uploads/2023/04/listing-builder-item-link-setting.png)The Link setting in a Button, Featured image, Post Title, or Custom field item in the Listing Builder.
The following types of builder items have their own “Link” setting which you can use to link the item to the post URL (or a custom URL):

- Button
- Featured image
- Post Title
- Custom fields (standard custom fields, not fields made with [Advanced Custom Fields](/help-center/using-facetwp-with/advanced-custom-fields/) or [Pods](/help-center/using-facetwp-with/pods/))

If you are using a builder item without a “Link” setting, you can use any of the following solutions:

### Add links with the Prefix and Suffix settings

![Add a post link to listing builder items with the Prefix and Suffix fields.](https://facetwp.com/wp-content/uploads/2022/08/listing_builder_prefix_suffix_link.png)Add a post link to listing builder items with the Prefix and Suffix fields.
Most builder item types have a “Prefix” and “Suffix” setting. These two setting fields accept HTML, and thus can be used together to wrap a link tag around the item. To dynamically output the URL to the post, you can use the built-in 
```
{{ post:url }}
```

 [dynamic tag](#built-in-dynamic-tags).

So, to add a complete link,  add 
```
<a href="{{ post:url }}">
```

 to the “Prefix” field, and 
```
</a>
```

 to the “Suffix field, as shown in the image on the right.

### Add links with an HTML builder item

Another approach would be to use an HTML builder item. These can be very useful if you want to include the contents of one or more custom fields from Advanced Custom Fields or Pods in your item, or if your builder item is more complex. HTML items can be extra powerful if you combine them with [built-in](#built-in-dynamic-tags) or [custom dynamic tags](#create-dynamic-tags-within-the-listing-builder).

An example: let’s say you want to create a link to the post URL, with the link text coming from an ACF custom field:

1. First, click the “+” icon and create a builder item from your ACF field. Give the item a name with the “Unique name” field (or use the generated name), and enable the “Hide item” setting (to prevent it from being displayed itself):

![Add a hidden builder item from an ACF field in the Listing Builder.](https://facetwp.com/wp-content/uploads/2022/09/listing-builder-add-link-step1-v2.png)Add a hidden builder item from an ACF field in the Listing Builder.
1. Then, add an HTML builder item, and use its “Content” field to create a link element. For the link URL in the 
```
href
```

 attribute, use the **built-in** 
```
{{ post:url }}
```

 dynamic tag. For the link text, use the “Unique name” of the builder item created in the first step. This name can be used as a **custom** dynamic tag by wrapping it with double curly brackets: 
```
{{ my-field-name }}
```

:

```
<a href="{{ post:url }}">{{ my-field-name }}</a>
```

The settings then should look like this:

![Add an HTML item in the Listing Builder with a built-in and a custom dynamic tag.](https://facetwp.com/wp-content/uploads/2022/09/listing-builder-add-link-step2-v2.png)Add an HTML item in the Listing Builder with a built-in and a custom dynamic tag.

### Add links with the facetwp_builder_item_value hook

It’s also possible to use the [facetwp_builder_item_value](/help-center/developers/hooks/output-hooks/facetwp_builder_item_value/) hook to add links:

#### Add a link to each builder item

For example, you could add a **link to each builder item**, like this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  return '<a href="' . get_permalink() . '">' . $value . '</a>';
}, 10, 2 );
```

Obviously, don’t do this when one or more of your builder items already have a link (created with one of the methods above), or you’d get invalid, nested link tags.

#### Add a link to a specific builder item

The above example can be adapted to only add a **link to one specific builder item**, identified by its “Unique name”. Note that you can also use dynamic tags in the code. To illustrate this, in the example below we used a [built-in dynamic tag](#built-in-dynamic-tags) for the post URL, instead of 
```
get_permalink()
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// replace 'my-item-name' with the name of your builder item
add_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if( $item['settings']['name'] == 'my-item-name' ) {
    return '<a href="{{ post:url }}">'. $value. '</a>';
  }
  return $value;
}, 10, 2 );
```

#### Add a read more link to a Post Excerpt builder item

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

#### Add a post author link to a Post Author builder item

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
// Replace 'my-author-item' with the 'Unique name' of your Post Author builder item
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

### Add a link to the whole post item block

Each post in a post listing normally consists of several builder items. For example, a post block could consist of a post title, a featured image, and an excerpt item.

With all of the [above methods](#add-links-to-builder-items) you can add links to individual builder items, like the post title. But what if you want to add a **link to the whole post block** instead of to the individual builder items it consists of?

There are two ways of accomplishing this:

#### Build the whole post block in one HTML builder item

One approach is to build the whole post block in one HTML builder item and use the 
```
{{ post:url }}
```

 [built-in dynamic tag](#built-in-dynamic-tags) to add a link to the surrounding 
```
<a>
```

 tag.

Then use one or more other builder items for everything you want displayed within the link, by using their “Unique name” as [custom dynamic tag](#create-dynamic-tags-within-the-listing-builder). Make sure to set each of these builder items to be hidden, so they are not displayed in the listing.

The following example code for a HTML item generates the post title, the featured image and the excerpt inside the link. It assumes two hidden builder items: one for the featured image and one for the excerpt. The 
```
{{ post:title }}
```

 dynamic tag is already built-in.

```
<a href="{{ post:url }}">
  <span class="post-title">{{ post:title }}</span>
  <span class="featured-image">{{ my-featured-image-item }}</span>
  <span class="excerpt">{{ my-excerpt-item }}</span>
</a>
```

Using this code, the template settings would look like this:

![Use only one HTML builder item for the whole post.](https://facetwp.com/wp-content/uploads/2022/09/listing-builder-html-block-example-v2.png)Use only one HTML builder item for the whole post.

#### Link the whole post block with Javascript

Another approach is to link only one of the builder items, for example the post title, using any of the [above methods](#add-links-to-builder-items). Then, we can use a bit of JavaScript to find that link and use it in a click event attached to the whole post block (which has the 
```
fwpl-result
```

 class).

The following example shows how to do this. The code assumes that the post block has a builder item with the “Unique name” 
```
my-item-name
```

, which contains a link:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// replace 'my-item-name' with the name of your linked builder item
add_action( 'facetwp_scripts', function() {
  ?>
  <script>
    (function($) {
      $('.facetwp-template').on('click', '.fwpl-result', function() {
        window.location.href = $(this).find('.my-item-name a').attr('href');
      });
    })(fUtil);
  </script>
  <?php
}, 100 );
```

Now each whole post block links to its post URL. The only issue left is that when you hover over the post block, it does not *look or behave* like a link: the cursor does not change, and there is no feedback for the user that this is actually a link.

We can fix this with a few lines of CSS. The example code below applies a light gray background when hovering the post block, and sets the cursor to look like it is a real link:

```
How to use custom CSS?CSS code can be placed in your (child) theme's style.css file. Alternatively, you can add it manually between <style> tags in the <head> section, in your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer.  Or you can use a code snippets plugin. More info/* Style the hover behavior of each post block */
.facetwp-template .fwpl-result:hover {
  background: #eee;
  cursor: pointer;
}

/* Optional: (re)style the hover of the only link */
.facetwp-template .fwpl-result:hover .my-item-name a {
  color: red;
  text-decoration: none;
}
```

## Using builder items with dates

![A Listing Builder Post Date field's Date format setting displaying as 'January 18, 2025'.](https://facetwp.com/wp-content/uploads/2025/03/listing-builder-date-format.png)A Listing Builder Post Date field’s Date format setting displaying as “January 18, 2025”.
If you create a builder item based on the Post Date, or a date-based custom field (with the “Field type” setting set to “Date”), you’ll see a “Date format” setting. This setting determines the date output in the front-end. The default format is set to 
```
F j, y
```

, will display the item as e.g. “January 18, 2025”.

The following [PHP datetime formats](https://www.php.net/manual/en/datetime.format.php) can be used to customize the date format:

- ```
d
```

 – day (2 digits)
- ```
j
```

 – day (without leading zeros)
- ```
m
```

 – month number (2 digits)
- ```
n
```

 – month number (without leading zeros)
- ```
F
```

 – month (full)
- ```
M
```

 – month (short)
- ```
y
```

 – year (last 2 digits)
- ```
Y
```

 – year (full)

![A Listing Builder custom date field's format settings.](https://facetwp.com/wp-content/uploads/2025/03/listing-builder-input-format.png)A Listing Builder custom date field’s format settings.
Some examples:

- ```
Y-m-d
```

 – 2025-01-18
- ```
d/m/Y
```

 – 18/01/2025
- ```
F j, Y
```

 – January 18, 2025
- ```
j M Y
```

 – 18 Jan 2025

If the builder item is based on a custom field containing a date, and the “Field type” setting is set to “Date”, you can also set an “Input format”. This format should match the format in which the date is stored in the database. In most cases dates are stored as 
```
YYYY-MM-DD
```

, for which the setting should be set to 
```
Y-m-d
```

 (which is the default). If your custom field stores the date differently, you need to adapt the “Input format” accordingly, using [PHP datetime formats](https://www.php.net/manual/en/datetime.format.php).

## Limit the number of characters or words of a “Post Excerpt” builder item

To limit the number of characters in the Listing Builder’s “Post Excerpt” item, add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( 'post_excerpt' == $item['source'] ) {
    $value = substr( $value, 0, 120 ); // Limit to 120 characters
  }
  // Optional: add something after the trimmed excerpt:
  if ( strlen($value) == 120 ) {
    $value .= ' (&hellip;)'; // Adds a space, then an ellipsis character (&hellip;) within parentheses.
  }
  return $value;
}, 10, 2 );
```

If you want to limit the excerpt by number of words instead of characters, you can use the [wp_trim_words() function](https://developer.wordpress.org/reference/functions/wp_trim_words/), which also has parameter to append something after the trimmed string, like an ellipsis character (
```
&hellip;
```

, displaying as: 
```
…
```

):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( 'post_excerpt' == $item['source'] ) {
    $value = wp_trim_words( $value, 10, ' (&hellip;)' ); // Trim to 10 words and add space and ellipsis.
  }
  return $value;
}, 10, 2 );
```

To add a “read more” link to the end of your trimmed excerpt, see [this example above](#add-a-read-more-link-to-a-post-excerpt-builder-item).

## Add a “No results” text

![How to add a No results text to the Listing Builder.](https://facetwp.com/wp-content/uploads/2023/01/listing-builder-no-results-text.png)How to add a “No results” text to the Listing Builder.
Since [FacetWP v4.1.5](/help-center/changelog/#4-1-5), Listing Builder listings have a “No results text” setting.

Just add the text that you want to show when there are no results.

The field also accepts HTML and shortcodes.

### Customize or translate the “No results” output

If the “No results text” field is not flexible enough, you can use the [facetwp_template_html](/help-center/developers/hooks/output-hooks/facetwp_template_html/) hook to create the desired output. Note that anything that is output by this hook will **override** the listing’s “No results text” setting completely.

Here is a simple example that sets a “No results found” text wrapped in 
```
<p>
```

 tags:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_template_html', function(  $output, $class ) {
  if ( $class->query->found_posts < 1 ) {
    $output = '<p>No results found</p>';
  }
  return $output;
}, 10, 2 );
```

If you need the message to be translatable, you can wrap the text in 
```
__()
```

. This makes the text a translatable string that will appear in e.g. [WPML string translations](https://wpml.org/documentation/getting-started-guide/string-translation/) or any other translation plugin. The string can also be translated with WP’s [gettext filter](https://developer.wordpress.org/reference/hooks/gettext/) (see [this example](/help-center/facets/facet-types/autocomplete/#translate-the-ui-texts)).

In the following example, we additionally pass the string through the 
```
facetwp_i18n
```

 filter hook, which now can also be used to [add your translations](/help-center/developers/hooks/advanced-hooks/facetwp_i18n/).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_template_html', function( $output, $class ) {
  if ( $class->query->found_posts < 1 ) {
    $output = '<p>' . facetwp_i18n( __( 'No results found', 'fwp-front' ) ) . '</p>';
  }
  return $output;
}, 10, 2 );
```

The 
```
facetwp_template_html
```

 hook can be used to output any plain HTML or PHP-generated content, so you could also use a (custom) shortcode:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_template_html', function(  $output, $class ) {
  if ( $class->query->found_posts < 1 ) {
    $output = do_shortcode('[my-shortcode]');
  }
  return $output;
}, 10, 2);
```

It is also possible to dynamically output facet value(s) to the text, so you can display a “No results found for { facet value(s) }” text. This will only be usable if you have a limited number of facets. Or you can use it only if a [Search facet](/help-center/facets/facet-types/search/) is in use, to display the search keywords in the message:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_template_html', function(  $output, $class ) {
  if ( $class->query->found_posts < 1 ) {

    // The default (translatable) text
    $output = __('No results found', 'fwp-front' );

    // Output default text + "for" (translatable) + chosen facet value(s),
    // resulting in the text: "No results found for { facet value(s) }"
    // Change "my_facet_name" to the name of your facet (2x):
    if ( isset( FWP()->facet->facets['my_facet_name'] ) ) {
      $keywords = FWP()->facet->facets['my_facet_name']['selected_values'];
      $keywords = is_array( $keywords ) ? implode( ' ', $keywords ) : $keywords;
    }
    if ( ! empty( $keywords ) ) {
      $output .= ' ' . __( 'for', 'fwp-front' ) . ' ' . $keywords;
    }

    // Add extra HTML tags
    $output = '<h3>'. $output . '</h3>';
  }
  return $output;
}, 10, 2);
```

## Translate the Button item text

If you are using a Button item in your listing, the Button text (as set in the Button item’s settings) can be translated [using the facetwp_i18n hook](/help-center/developers/hooks/advanced-hooks/facetwp_i18n/).

The following example translates a Button text “More information” to Dutch and Spanish. Note that this code assumes [a multi-lingual site setup](/help-center/using-facetwp-with/multilingual/), in which each page has a set language.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_i18n', function( $string ) {
  
  if ( isset( FWP()->facet->http_params['lang'] ) ) {
    $lang = FWP()->facet->http_params['lang'];

    $translations = [];
    $translations['nl']['More information'] = 'Meer informatie'; // Translate default text to Dutch
    $translations['es']['More information'] = 'Más información'; // Translate default text to Spanish

    if ( isset( $translations[ $lang ][ $string ] ) ) {
      return $translations[ $lang ][ $string ];
    }
  }

  return $string;
});
```

## Customize Listing Builder listing queries

If you need to override the query arguments that you have set in the Query tab (for example only on certain pages), you can [use the facetwp_query_args hook](/help-center/developers/hooks/querying-hooks/facetwp_query_args/).

This hook works similarly to WP’s [pre_get_posts hook](/how-to-customize-wp-archive-queries/#how-to-use-pre_get_posts-to-modify-the-wp-archive-query), but unlike that hook, it only runs on pages with facets, and it has access to information about the page, listing template and facets used. This can be used to let the code run only in certain conditions. For example, you can check:

- if a specific Listing Builder template is used,
- if the page has a specific URI, or
- if specific facets or facet choices are currently in use.

[See the examples on the hook’s page](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/#usage-examples) for ways to use this.

### Add custom shortcode attributes

The 
```
facetwp_query_args
```

 hook can also be used to add one or more custom attributes to a Listing Builder shortcode:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp template="publications" project="housing"]
```

And then [use those custom attributes to change or narrow the query](/help-center/developers/hooks/querying-hooks/facetwp_query_args/#add-a-taxonomy-query-based-on-a-shortcode-attribute).

## Register listings programmatically

With the 
```
facetwp_templates
```

 hook, it is possible to [programmatically register/add new listings in code](/help-center/developers/hooks/advanced-hooks/facetwp_templates/), rather than using the plugin interface. There are several reasons why you may consider doing this:

- To prevent users from changing listing settings.
- You can have your listings and their settings under version control. This way you can revert to previous sets of listings or previous listing settings.
- If your listings and settings are tied to a theme, anyone using the code/theme automatically has the registered listings and their settings.
- If you are [using FacetWP with WordPress multi-site](/help-center/using-facetwp-with/wordpress-multi-site/), all sites in the multi-site network can have the same listings and lising settings, as long as they are using the same theme.

Note that there is a similar hook, 
```
facetwp_facets
```

, to [programmatically register facets](/help-center/developers/hooks/advanced-hooks/facetwp_facets/).

    
## See also

    - [Using the Listing Builder in Dev Mode](https://facetwp.com/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/)
- [Indexing](https://facetwp.com/help-center/indexing/)
- [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [The Reset facet type](https://facetwp.com/help-center/facets/facet-types/reset/)
- [FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
- [Back up or move facets and listing templates](https://facetwp.com/help-center/add-on-features-and-extras/back-up-or-move-facets-and-listing-templates/)
- [The facetwp_builder_item_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_item_value/)
- [The facetwp_builder_dynamic_tags hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tags/)
- [The facetwp_builder_dynamic_tag_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [The facetwp_is_main_query hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/)
- [The facetwp_template_use_archive hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/)
- [How to pre-select facet choices](https://facetwp.com/how-to-pre-select-facet-choices/)
- [How to prevent duplicate results](https://facetwp.com/how-to-prevent-duplicate-results/)
- [The facetwp_template_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_template_html/)
- [Using the facetwp_i18n hook to translate facet labels and strings](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_i18n/)
- [The facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
- [The facetwp_templates hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_templates/)
- [The facetwp_facets hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facets/)
- [Using FacetWP with WordPress multi-site](https://facetwp.com/help-center/using-facetwp-with/wordpress-multi-site/)
- [Using FacetWP with WPML or Polylang](https://facetwp.com/help-center/using-facetwp-with/multilingual/)

                    Last updated: January 29, 2026

---

## Using the Listing Builder

**Source:** [https://facetwp.com/help-center/listing-templates/listing-builder/](https://facetwp.com/help-center/listing-templates/listing-builder/)

## What is the Listing Builder?

FacetWP’s Listing Builder allows you to quickly and visually design a results listing.

It’s a convenient alternative to building your own [WP archive pages](/help-center/listing-templates/wp-archive-page/) or [Custom WP_Query](/help-center/listing-templates/custom-wp-query/) loops.

After building the listing template, you can display it on any WordPress page [with a shortcode](#display-a-listing-template), or include it in a template directly [with PHP](#display-a-listing-template-with-php). Then put any number of [facets](/help-center/facets/) on the page to interact with it.

It is even possible to have [multiple listing templates](#multiple-listing-templates-on-the-same-page) on the same page: one being the dynamic listing that the facets on the page interact with, the others being “static” listings.

If you prefer to code your post loops and query arguments by hand, you can still take advantage of the Listing Builder by using its [Dev mode](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/).

## Create a listing template

Browse to **Settings > FacetWP**, click the “Listings” tab and then “Add new”.

The Listing Builder is covered in the video below, starting at 1:49.

### Using Dev mode

![FacetWP Listing Builder Dev Mode](https://facetwp.com/wp-content/uploads/2022/04/devmode.png)New templates use the “visual” Listing Builder by default. However, if you need more flexibility and you’re experienced in WordPress coding, you can switch both the Display tab and [Query tab](#using-the-query-tab) independently from each other to “Dev mode”, by clicking the checkbox on the right.

In Dev mode, you can [use PHP to build the listing template output and the query arguments](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/).

Note that although you can freely switch each tab between the “visual mode” and Dev mode, the two modes are not related (except momentarily when you use the [Convert to query args](#convert-to-query-arguments) button). For the Display tab as well as the Query tab, a listing template uses one mode **or** the other: the mode in which you leave the tabs when you save the listing template, is used.

You can also mix modes. For example, you can use visual mode in the Display tab and Dev mode in the Query tab.

### Naming your listings

In a listing’s settings, the “name” is what is shown in the gray input field:

![A listing name field](https://facetwp.com/wp-content/uploads/2025/10/listing-builder-name-field.png)A listing’s name field
The listing’s name is its technical name, used to identify it in code, for example in its [shortcode](#display-a-listing-template).

The name field is automatically generated from the listing’s “Label” field (the input field to the left of it) when it is first entered. But you can easily change the name, for example to shorten or simplify it. The auto-generated or customized name is **sanitized** on auto-generation or after changing and saving. Special characters are removed, and spaces and dashes are replaced with underscores.

To prevent issues, make sure all your listings have a **unique name**. In FacetWP 4.5+, a numbered suffix is automatically appended when a duplicate name is detected. For example, when creating a second listing with the name 
```
new_template
```

, the name field will automatically append a number: 
```
new_template_1
```

.

## Using the Query tab

The Query tab offers an easy visual alternative to manually building a WP query with PHP. You can define which results (posts or other post types) should be fetched in the initial post listing, before any filtering is applied by the user. You can also set the number of posts per page and the sorting method, and apply filtering rules to narrow the results.

### Set the post types to fetch

![Listing builder - Query tab - fetch post types.](https://facetwp.com/wp-content/uploads/2022/10/listing-builder-query-tab-fetch-post-types.png)Fetch post types in the Query tab of the Listing Builder.
In the first line of the settings you can select one or more post types that have to be fetched.

Make sure that these post types are “searchable”, meaning that the 
```
exclude_from_search
```

 parameter of the [register_post_type()](https://developer.wordpress.org/reference/functions/register_post_type/#exclude_from_search) function is set to false. Otherwise your posts [will not get indexed](/help-center/indexing/common-indexing-issues/#fix-issues-with-indexing-post-types).

### Set the number of posts per page

![Listing builder - Query tab - fetch post types.](https://facetwp.com/wp-content/uploads/2022/10/listing-builder-query-tab-set-posts-per-page.png)Set posts per page in the Query tab of the Listing Builder.
Next, if you intend to use pagination (for example with a [Pager facet](/help-center/facets/facet-types/pager/)), set the number of posts per page.

It is advisable to set the number to something reasonable, like 15-20 posts max. This will reduce the number of queries needed to load the data for all displayed posts, which will [speed up filtering](/help-center/developers/facetwp-performance-speed-limits-and-scalability/#speed-up-facet-filtering-itself). If you use 
```
-1
```

, all posts will be retrieved. Use this only if you have a limited number of posts. If you leave the field empty, the default number of posts per page is 
```
10
```

.

### Add query sorting rules

![Listing builder - Query tab - define sorting rules.](https://facetwp.com/wp-content/uploads/2022/10/listing-builder-query-tab-multiple-sorting-rules.png)Define one or more sorting rules in the Query tab of the Listing Builder.
Click the “Add query sort” button to add a sorting rule. A sorting rule consists of a (custom) field to initially sort the listing by, and the sort order. 
```
ASC
```

 means ascending, e.g. A-Z. 
```
DESC
```

 means descending, e.g. Z-A.

The defined order determines the *initial* sort order (on page load or after using a [Reset facet](/help-center/facets/facet-types/reset/)). If you add a [Sort facet](/help-center/facets/facet-types/sort/), you can offer the user other ways of sorting the listing.

You can add multiple sorting rules, by clicking the “Add query sort” button again. The sorting rules are applied in the order you define them, so subsequent rules can be used to apply a backup sort order. For example, if you want to sort by post date, but multiple posts share the same post date, you can sort by post date first, and by post title second.

To delete a sorting rule, click the red minus button on the right.

### Add query filtering rules

Click the “Add query filter” button to add a filtering rule. With a filtering rule, you can narrow the posts that are shown in the listing.

![Listing builder - Query tab - define filtering rules.](https://facetwp.com/wp-content/uploads/2022/10/listing-builder-query-tab-multiple-filtering-rules.png)Define one or more filtering rules in the Query tab of the Listing Builder.
A filtering rule consists of:

1. The (custom) field that will be used to compare against.
2. A type selector (which appears for some customs fields). The possible values 
```
TEXT
```

, 
```
NUMERIC
```

, or 
```
DATE
```

 determine which compare operators are possible, and the way the values will be compared. [See below](#comparing-text-numeric-and-date-values) for more info about these field types.
3. A [compare operator](#using-compare-operators).
4. [One or more values to be used in the comparison](#entering-values-to-compare-against).

You can add multiple filtering rules, by clicking the “Add query filter” button again. When multiple filtering rules are used, the logic operator between them is 
```
AND
```

.

To delete a filtering rule, click the red minus button on the right.

#### Using compare operators

The table below gives an overview of the available compare operators and their behavior.

The available options depend on the type of source field you have selected. If you select a custom field as source, the options will depend on the field type you set: 
```
TEXT
```

, 
```
NUMERIC
```

, or 
```
DATE
```

. For example, the 
```
>
```

 and  
```
<
```

 operators are not available when you use a custom field with 
```
TEXT
```

 set as its field type.

| Operator | Behavior if multiple values | Comparison description |
| --- | --- | --- |
| = | OR | The field EXISTS for the post, and the value IS [x] (OR [y]) |
| != | AND | The field EXISTS for the post, and the value is NOT [x] (AND is NOT [y]) |
| > | Only first value is used | The field EXISTS for the post, and the value is GREATER THAN [x] |
| >= | Only first value is used | The field EXISTS for the post, and the value is GREATER THAN OR EQUAL to [x] |
| < | Only first value is used | The field EXISTS for the post, and the value is LESSER THAN [x]. Note: posts for which the field exists but is empty are considered to have a value of 0, so they will appear with this comparison. |
| <= | Only first value is used | The field EXISTS for the post, and the value is LESSER THAN OR EQUAL to [x]. Note: posts for which the field exists but is empty are considered to have a value of 0, so they will appear with this comparison. |
| IN | OR | The field EXISTS for the post, and the value is IN the list of values provided. Note: this is functionally the same as using the = operator with multiple values. |
| NOT IN | AND | The field EXISTS for the post, and the value is  is NOT IN the list of values provided. Note: this is functionally the same as using the != operator with multiple values. |
| EXISTS | n.a. | The field EXISTS for the post (and the value is empty or not empty). Note: that a field exists in the settings of e.g. Advanced Custom Fields or Custom Fields Suite, does not mean the field exists for each post. A post needs to be saved for a custom field to exist for that post. |
| NOT EXISTS | n.a. | The field does NOT EXIST for the post. E.g. because the post has not been saved: see EXISTS. |
| EMPTY | n.a. | The field EXISTS for the post and is EMPTY. |
| NOT EMPTY | n.a. | The field EXISTS for the post and is NOT EMPTY. |

#### Entering values to compare against

When adding values, make sure they are **saved properly**, otherwise the query filter will not work. Make sure that after entering a value, you always click the value in the dropdown that appears, or use “Enter”. A correctly entered value has an individual gray border and background with an “x” button. Click “Save changes” afterward.

![Listing builder - Query tab - query filter - entering values correctly.](https://facetwp.com/wp-content/uploads/2022/10/query-filter-enter-values-correctly.png)How to correctly enter values for a query filter in the Query tab of the Listing Builder.

#### Comparing text, numeric and date values

In most cases, if you select a custom field as source field, a type selector will appear. The options 
```
TEXT
```

, 
```
NUMERIC
```

, or 
```
DATE
```

 determine the field type and the comparison operators that can be used.

![Listing Builder - Query tab - query filter field type selector.](https://facetwp.com/wp-content/uploads/2022/10/listing-builder-query-tab-field-type-selector.png)Using the field type selector in a query filter in the Query tab of the Listing Builder.
Comparing numerical values
If you set the field type to 
```
NUMERIC
```

, you specify the comparison to be between numerical values. Numbers are internally compared as decimals (
```
DECIMAL(16,4)
```

), so you can compare numbers with a precision of up to 4 decimals.

Note that the decimals in the source field and the comparison values both need to have **a dot as decimal separator**. Currently, FacetWP’s “Separator” setting is ignored in these comparison rules. A comma will not work: decimals behind a comma are ignored: 10,3 is interpreted as 10, both for the source field and for the values to compare against.

Comparing date values
If you want to narrow the post listing by using dates, there are only four comparison operators available: 
```
<
```

, 
```
<=
```

, 
```
>
```

, and 
```
>=
```

. In these, 
```
<
```

 means: before a certain date, and 
```
>
```

 after a certain date.

For the source field, you can use the Post Date, or any other custom field, as long as you set the field type selector to 
```
DATE
```

.

The date value in the selected source field needs to be in “
```
YYYY-MM-DD
```

” format (
```
Y-m-d
```

 in PHP).

The date value you are entering yourself on the right side of the filtering rule, can be [any valid date/time date format](https://www.php.net/manual/en/datetime.formats.php) that is accepted by PHP’s [strtotime() function](https://www.php.net/manual/en/function.strtotime.php). Of course,
```
YYYY-MM-DD
```

 will work, but a lot of other formats will work too, including [relative formats](https://www.php.net/manual/en/datetime.formats.php#datetime.formats.relative). So these will all work (individually):

![Listing builder - Query tab - query filter - valid date values.](https://facetwp.com/wp-content/uploads/2023/03/listing-builder-query-filter-valid-dates.png)Valid date values for a query filter in the Query tab of the Listing Builder.

#### Fix issues with (ACF) serialized field values

For certain types of custom fields, the options in the query filter interface are not enough. If your chosen field stores its values as a serialized string, the compare operators will not work.

One example of such a field is Advanced Custom Fields’ [Checkbox field](https://www.advancedcustomfields.com/resources/checkbox/). See the ACF page for instructions on [how to get a serialized field working with the Listing Builder’s query settings](/help-center/using-facetwp-with/advanced-custom-fields/#using-an-acf-checkbox-field-as-meta_query-filter). The described solution will work for Checkbox fields as well as other fields with serialized values.

### Convert to query arguments

![Listing builder - Query tab - convert to query args.](https://facetwp.com/wp-content/uploads/2022/10/listing-builder-query-tab-convert-args.png)Convert to query args button in the Query tab of the Listing Builder.
When you click the “Convert to query args” button, the Query tab is switched to “[Dev mode](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/)” and the setting you have entered are converted to PHP query arguments.

In Dev mode, you can [manually adapt the converted query arguments and add others](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/#how-to-use-query-arguments-in-dev-mode).

This can be useful if your desired query is more complicated and you want to manually build a query with [WP_Query arguments](https://developer.wordpress.org/reference/classes/wp_query) that are not covered in the Listing Builder’s settings.

Be aware that the button works only one way: it converts the visual settings to PHP code only at the moment you click. You can switch back to visual mode, but the two modes are independent. The mode you leave the Query tab in when you click “Save changes” is the mode that will be used for the listing template’s query.

## Using dynamic tags

Within the Listing Builder you can use so-called “dynamic tags”, which are very useful in building more sophisticated layouts of the retrieved individual posts. A dynamic tag lets you pull in all kinds of post data, to be used in for example an HTML builder item or in a builder item’s setting field.

Besides the set of [built-in tags](#built-in-dynamic-tags) the Listing Builder comes with, you can use your own tags, created from custom fields [within the Listing Builder itself](#create-dynamic-tags-within-the-listing-builder).

For more complex needs it is also possible to [create custom tags by modifying the output of existing tags or by writing them from scratch](#create-or-modify-custom-dynamic-tags).

### Built-in dynamic tags

The following built-in tags are available:

| Tag | Output |
| --- | --- |
| {{ post:id }} | Returns the post’s id |
| {{ post:title }} | Returns the post’s title |
| {{ post:name }} | Returns the post’s name (slug) |
| {{ post:type }} | Returns the post’s type |
| {{ post:url }} | Returns the post’s url |
| {{ post:image }} | Returns the post’s featured image URL (in “full” size).
If you need another WordPress image size, you can can use the facetwp_builder_dynamic_tag_value hook. |

### Create dynamic tags within the Listing Builder

By creating a dynamic tag in the Listing Builder itself, you can pull in a post’s custom field value into a builder item’s field or setting.

The way this works is that you create a *hidden* builder item from the custom field you want to pull the value from, and use its “Unique name” as the dynamic tag name, to be used in other builder items’ fields. This may sound complicated but it’s actually very easy:

Let’s say you have a 
```
photo_url
```

 custom field and you want to wrap it into an 
```
<a>
```

 tag:

1. First, add a new builder item and select the desired field:

![Selecting a custom field as item source and creating a dynamic tag from the item's name.](https://facetwp.com/wp-content/uploads/2022/09/listing_builder_dynamic_tag-v2.png)Selecting a custom field as item source and creating a dynamic tag from the item’s unique name.
1. Next, enter 
```
photo-url
```

 in the builder item’s “Unique name” field and click the “Hide item” checkbox. In the builder, the item will become grayed out with a “hidden” icon next to it, and this item will be hidden on the front-end. We hide it because this builder item is only used to generate the dynamic tag: the content of its “Unique name” field becomes the dynamic tag: 
```
{{ photo-url }}
```

.
2. Finally, add a new HTML builder item and set its “Content” to:

```
<a href="{{ photo-url }}">{{ photo-url }}</a>
```

![Adding a custom dynamic tag to the Content field of an HTML item.](https://facetwp.com/wp-content/uploads/2022/09/listingbuilder-html-tags-html-field-v2.png)Adding a custom dynamic tag to the “Content” field of an HTML item.
FacetWP will now automatically replace all instances of 
```
{{ photo-url }}
```

 with the custom field’s value. You can even pull in multiple fields.

### Create or modify custom dynamic tags

It is also possible to modify existing dynamic tags or create your own custom tags from scratch.

There are two hooks available for this (with the second one being the more efficient of the two):

- [facetwp_builder_dynamic_tags](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tags/)
- [facetwp_builder_dynamic_tag_value](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/)

You could for example create a tag to [pull in content from a custom field](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/#create-a-dynamic-tag-to-output-the-value-of-a-custom-field) and modify it. Or a tag to [output the featured image url in any (default or custom) WordPress image size](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/#change-the-image-size-for-the-built-in-postimage-tag).

Besides modifying the output of [built-in tags](#built-in-dynamic-tags), you can also modify the dynamic tags you made [within the Listing Builder itself](#create-dynamic-tags-within-the-listing-builder). An example of this would be to modify a dynamic tag that pulls in data from a 
```
Price
```

 custom field, so that [the output value of the tag is prepended with a currency sign](/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/#modify-a-custom-dynamic-tag-made-within-the-listing-builder).

See the above hook pages for more examples.

## Display a listing template

There are multiple ways to display a Listing Builder listing template on your page. You can [copy its shortcode](#copy-the-shortcode) and [place it in several ways](#place-the-shortcode). Or you can [use PHP](#display-a-listing-template-with-php), or [use an Elementor FacetWP Listing widget](#display-a-listing-template-with-an-elementor-facetwp-listing-widget).

### Copy the shortcode

![Copy shortcode button](https://facetwp.com/wp-content/uploads/2022/04/copyshortcodebutton-listing.png)![Copy shortcode in listings overview](https://facetwp.com/wp-content/uploads/2022/04/copyshortcode.png)After [creating the listing template](#create-a-listing-template), click the red “Copy shortcode” button.

It’s also possible to copy shortcodes directly from the Listings screen. Click the cog/gear icon on the right side of the listing’s row and click “Copy shortcode” in the dropdown.

You can also create your shortcode manually, using the listing name (the name in the grey box). Each listing’s shortcode looks like this:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp template="the_listing_name"]
```

### Place the shortcode

![How to past a facet or listing shortcode into a WordPress Gutenberg Shortcode widget block.](https://facetwp.com/wp-content/uploads/2019/02/block-editor-shortcode.gif)How to past a facet or listing shortcode into a WordPress Gutenberg Shortcode widget block.
Paste the shortcode into the body field [of your page](#where-to-place-the-listing-template), or into a Text widget (**Appearance > Widgets**).

If you are using the WordPress block editor, you can also paste shortcodes into a Shortcode block.

And if you are using a [supported page builder](/help-center/listing-templates/using-a-page-builder/), you can paste shortcodes in a Shortcode or HTML module/widget. For example in [an Elementor Shortcode widget](/help-center/using-facetwp-with/elementor/#add-facetwp-shortcodes-with-a-shortcode-widget).

### Display a listing template with PHP

Instead of [with a shortcode](#place-the-shortcode), listing templates can also be placed directly in your page template (or PHP include) with the 
```
facetwp_display()
```

 function:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho facetwp_display( 'template','the_listing_name' );
```

You can also output [listing shortcodes](#copy-the-shortcode) directly in your PHP templates, with WordPress’ [do_shortcode()](https://developer.wordpress.org/reference/functions/do_shortcode/) function:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho do_shortcode( '[facetwp template="the_listing_name"]' );
```

### Display a listing template with an Elementor FacetWP Listing widget

![The FacetWP Elementor Listing widget settings.](https://facetwp.com/wp-content/uploads/2024/12/facetwp-elementor-add-on-listing-widget-settings.png)The FacetWP Elementor Listing widget settings.
If you are using Elementor, and have [the Elementor add-on](/help-center/using-facetwp-with/elementor/) installed, you can also [use the FacetWP Listing widget](/help-center/using-facetwp-with/elementor/#the-facetwp-listing-widget) to place a Listing Builder listing template on your page.

After adding the widget to your page, use the “Listing” setting dropdown to select one of your previously created listings.

The Listing widget will show your listing, including its full layout, in the Elementor editor.

Note that [facets](/help-center/facets/) can also be placed with Elementor, [using the FacetWP Facet widget](/help-center/using-facetwp-with/elementor/#the-facetwp-facet-widget).

#### Adding static listings templates with an Elementor FacetWP Listing widget

![Add a static listing with the FacetWP Elementor Listing widget.](https://facetwp.com/wp-content/uploads/2024/12/facetwp-elementor-add-on-static-listing-widget-settings.png)Add a static listing with the FacetWP Elementor Listing widget.
You should add **only one** filterable Listing widget to a page.

If you need more listings, you can add one or more [non-filterable “static” listings](#display-static-listing-templates).

Using Elementor, these can be added [by enabling the “Static” toggle in the FacetWP Listing widget](/help-center/using-facetwp-with/elementor/#add-a-static-listing).

### Where to place the listing template?

If you place the listing template shortcode (or [PHP code](#display-a-listing-template-with-php), or [Elementor Listing widget](#display-a-listing-template-with-an-elementor-facetwp-listing-widget)) and your facets **on a single page or post**, your facets will just work.

But if you place the listing on a WP archive page, things will not function correctly out of the box. [See below for a few options to get this working](#using-a-listing-builder-listing-template-on-a-wp-archive).

If you are unsure what a WP archive is, or how to determine if you are using one, [read this](/help-center/listing-templates/wp-archive-page/#how-to-determine-if-you-are-on-a-wp-archive-page).

#### Using a Listing Builder listing template on a WP archive

Generally, on WP archive pages, it would be better **not** to use a Listing Builder listing template, but to [use the WP archive template query itself](/help-center/listing-templates/wp-archive-page/). But if you don’t want or cannot change the way things are set up, and want to keep using a Listing Builder listing template on a WP archive page, you have to tell FacetWP explicitly which query (not) to use.

FacetWP has built-in query detection that determines which query on the page is the main query to use for filtering. On WP archive pages, **FacetWP by default will always prioritize the archive query** ahead of any other query on the page, including the query of the Listing Builder listing template you placed on that page. This is the reason why a Listing Builder listing template on a WP archive will lead to unexpected results: FacetWP is using another query than the one defined in the Listing Builder.

There are a few possible approaches to this situation:

Option 1: Ignore the archive query
The first option is to use the [facetwp_is_main_query](/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/) hook to force FacetWP to **ignore the archive query**, and use the Listing Builder’s listing query instead. Add the following code to your (child) theme’s functions.php to do this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ( $query->is_archive() && $query->is_main_query() ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 10, 2 );
```

Notes: If you set a static page for your posts (blog) page in WP’s “Reading” settings, for that page 
```
is_archive()
```

 will return 
```
false
```

. For the above code to work on such a posts page, replace 
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
Option 2: Pre-filter results based on the archive query
The second option, which **only works on category, tag, taxonomy term, author, and search archive pages**, is to use the Listing Builder listing template but let FacetWP pre-filter its query with the current category, tag, term, or search term(s) from the archive itself.

This can be done by adding the 
```
facetwp_template_use_archive hook
```

 to your (child) theme’s functions.php. See that hook’s page for [detailed info about using this approach](/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/).

For example, on the 
```
category.php
```

 archive template, you could place a Listing Builder listing template that fetches posts. Without this hook, on the 
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

Option 3: Use the archive query itself
Last but not least, if you are deliberately placing facets on a WP archive page, instead of using a Listing Builder listing template, you could consider using the native WP archive query and loop instead.

On a WP archive [FacetWP will auto-detect and use the archive’s native query](/help-center/listing-templates/wp-archive-page/). Just place some facets on the page and they will work. And if you need to customize the native archive query, you can easily [adapt it with WP’s pre_get_posts filter](/how-to-customize-wp-archive-queries/).

## Multiple listing templates on the same page

Introduced in FacetWP v4.0 is the possibility to add more than one listing template to the same page.

Each listing template can have its own grid layout, styling, and query. But **only one** of them can be “dynamic” and will react to the facets on the page. The others have to be “static” listing templates and **will not react to facets**.

### Display static listing templates

Static listing templates can be added with a shortcode similar to dynamic templates, but with an extra “static” attribute:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp template="the_listing_name" static]
```

Static listing templates can also be placed directly in your WordPress archive templates, custom templates or includes, with PHP:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho facetwp_display( 'template','the_listing_name', [ 'static' => true ] );
```

If you are using Elementor, you can add static listings by [using a FacetWP Listing widget with the “Static” toggle enabled](/help-center/using-facetwp-with/elementor/#add-a-static-listing).

### Using (static) listings without facets

From version 4.3.5, FacetWP is not loading unneeded JS, CSS, and JSON assets anymore when there is/are only one (or more) static listing template(s) on the page, without a “normal” non-static listing template.

So if you only need a listing template on a page, **without any facets**, the recommendation is to [set this listing to static](#display-static-listing-templates), to prevent unnecessary loading of all assets.

Note that, starting from version 1.9.3 of the [Elementor add-on](/help-center/using-facetwp-with/elementor/), it is also possible to [add static listings with a FacetWP Listing widget](/help-center/using-facetwp-with/elementor/#add-a-static-listing).

Tip:To debug a complicated custom 
```
WP_Query
```

 that you created in the Listing Builder’s Query tab, you can normally use 
```
FWP.settings.debug.sql
```

 in the browser Console to see the SQL used by the query. However, Debug Mode will **not** work for static listings, because FacetWP’s assets are not loaded in this case for performance reasons, as explained above. In this scenario, or if you find this easier, you can 
```
var_dump()
```

 the SQL [by adding a code snippet to the listing’s Display tab in Dev mode](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/#debug-static-listing-builder-listing-queries).

## How to duplicate a listing template

![Duplicate, copy or clone a FacetWP listing template](https://facetwp.com/wp-content/uploads/2022/04/duplicate-facet.png) Since [FacetWP v4.0](/help-center/changelog/#4-0) it is very easy to clone/duplicate a listing template, including all its settings:

Go to **Settings > FacetWP** and click the Listings tab. On the right side of the listing template that you want to clone, click the cog/gear icon and click “Duplicate”. This instantly creates a full copy of the listing template and its settings, with the label and facet name having the word “copy” added.

Note:If you are using an older FacetWP version, you can still clone listing templates with the [Import / Export tool](https://facetwp.com/help-center/add-on-features-and-extras/back-up-or-move-facets-and-listing-templates/). This tool can also be used to back up facets and listing templates, or move them between sites.
You can then change the new template’s label, name and settings and click “Save changes”.

## Responsive support

![Setting the number of grid columns and grid spacing for a Listing Builder listing.](https://facetwp.com/wp-content/uploads/2025/11/listing-grid-columns.png)Setting the number of grid columns and grid spacing for a Listing Builder listing.
A Listing Builder listing will have as many grid columns as set in its “Number of grid columns” setting, as shown in the image on the right.

If the browser window’s width is decreased (or if the page is opened in a smaller screen, like on mobile), the listing’s [grid layout](https://css-tricks.com/snippets/css/complete-guide-grid/) will automatically change to *1 column*, at exactly 
```
480px
```

. This happens because its default CSS has one so-called “breakpoint”, set with a “media query” at 
```
max-width: 480px
```

. This means that if the window width is 
```
<= 480px
```

, the grid layout follows the CSS set for it, as shown below in [lines 24-29](#responsive-css-L24-L29).

You can add additional breakpoints with some custom CSS, and determine the number of grid columns (and any other layout changes you want to happen) at that width.

For example, add the following code to your (child) theme’s functions.php to add an **additional** breakpoint at 
```
max-width: 980px
```

 to switch the layout to *3 columns* if the browser width is 
```
<= 980px
```

. This is set in [lines 6-12](#responsive-css-L6-L12).

This example also shows how to add additional breakpoints, as many as you want. It adds a third one at 
```
max-width: 780px
```

 in [lines 15-21](#responsive-css-L15-L21), to set the grid layout to 2 columns.

If you want to keep the default breakpoint at 
```
480px
```

, it **must** be included in the snippet, as shown in [lines 24-29](#responsive-css-L24-L29). This is because we load this snippet in the footer with the 
```
facetwp_scripts
```

 hook, so it will override the default listing CSS that is loaded inline. Due to the cascading (overriding) nature of CSS, if you would not include the default breakpoint, the listing would display with 2 columns below 
```
780px
```

 and would ignore the breakpoint at 
```
480px
```

.

Another thing to look out for is the **order of the breakpoints**. When using 
```
max-width
```

 in the 
```
@media
```

 media query, the breakpoints must be ordered from high to low. In theory, you could also use 
```
min-width
```

 (called a “mobile first” approach), for which the order would have to be low to high.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
  <style>

    /* Add a custom breakpoint */
    @media (max-width: 980px) {
      body .facetwp-template .fwpl-layout,
      body .facetwp-template-static .fwpl-layout {
        grid-template-columns: repeat(3, 1fr); /* 3 columns */
        grid-gap: 20px; /* Optional: change the spacing at this breakpoint */
      }
    }

    /* Optional: add more custom breakpoints */
    @media (max-width: 780px) {
      body .facetwp-template .fwpl-layout,
      body .facetwp-template-static .fwpl-layout {
        grid-template-columns: repeat(2, 1fr); /* 2 columns */
        grid-gap: 30px; /* Optional: change the spacing at this breakpoint */
      }
    }

    /* The default breakpoint must be included if this snippet is loaded in the footer with 'facetwp_scripts' */
    @media (max-width: 480px) {
      body .facetwp-template .fwpl-layout,
      body .facetwp-template-static .fwpl-layout {
        grid-template-columns: 1fr; /* 1 column*/
      }
    }

  </style>
  <?php
}, 100 );
```

## Align the last item to the bottom

![Align the last item to the bottom of the post item in a simple Listing Builder layout.](https://facetwp.com/wp-content/uploads/2025/01/listing_builder_align_bottom.png)Align the last item to the bottom of the post item in a simple Listing Builder layout.
An often-asked question is how to align the last item to the bottom of the post item in a (simple) Listing Builder listing. Usually, the last item is a button, like in the image to the right.

The answer depends on the complexity of the layout, but if you have a simple column of builder items, all in one row, you can use the following CSS to align the last item to the bottom. It sets the (single) row to 100% of the height of the post item container, displays the child column as a grid, and aligns the last item in that column to the bottom:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'facetwp_scripts', function() {
  ?>
  <style>
    .fwpl-row {
      height: 100%;
    }
    .fwpl-col {
      display: grid;
    }
    .fwpl-item:last-child {
      align-self: end;
    }
  </style>
  <?php
}, 100 );
```

## Hide empty items

The layout builder automatically adds the CSS class 
```
is-empty
```

 to any items that contain no value. You could use this (within your theme’s 
```
style.css
```

) to hide these empty container elements with CSS, e.g.

```
How to use custom CSS?CSS code can be placed in your (child) theme's style.css file. Alternatively, you can add it manually between <style> tags in the <head> section, in your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer.  Or you can use a code snippets plugin. More info.fwpl-item.is-empty {
  display: none;
}
```

## Use shortcodes in builder items

A handy feature worth mentioning is that you can use shortcodes in builder items. FacetWP will automatically parse shortcodes in “Post Content” and [“HTML”](#use-shortcodes-in-html-builder-items) builder items.

In *other* builder item types, like “Post Title”, “Post Excerpt”, or items based on a custom field, you need to explicitly [tell FacetWP to parse shortcodes, using the facetwp_builder_item_value hook](/help-center/developers/hooks/output-hooks/facetwp_builder_item_value/#use-shortcodes-in-builder-items).

### Use shortcodes in HTML builder items

Shortcodes added to the “Content” field of an HTML builder item will automatically be parsed when the listing template is displayed:

![How to use shortcodes in an HTML builder item in the Listing Builder.](https://facetwp.com/wp-content/uploads/2022/09/listing_builder_html_parse_shortcode-v2.png)How to use shortcodes in an HTML builder item in the Listing Builder.

## Add links to builder items

In a post listing or grid, you’d usually want to link each post item (or elements of it, like the post title or a “read more” link) to the post’s permalink. In the Listing Builder, there are a few ways to do this:

### Add links with a setting

![The Link setting in a Button, Featured image, Post Title, or Custom field item in the Listing Builder.](https://facetwp.com/wp-content/uploads/2023/04/listing-builder-item-link-setting.png)The Link setting in a Button, Featured image, Post Title, or Custom field item in the Listing Builder.
The following types of builder items have their own “Link” setting which you can use to link the item to the post URL (or a custom URL):

- Button
- Featured image
- Post Title
- Custom fields (standard custom fields, not fields made with [Advanced Custom Fields](/help-center/using-facetwp-with/advanced-custom-fields/) or [Pods](/help-center/using-facetwp-with/pods/))

If you are using a builder item without a “Link” setting, you can use any of the following solutions:

### Add links with the Prefix and Suffix settings

![Add a post link to listing builder items with the Prefix and Suffix fields.](https://facetwp.com/wp-content/uploads/2022/08/listing_builder_prefix_suffix_link.png)Add a post link to listing builder items with the Prefix and Suffix fields.
Most builder item types have a “Prefix” and “Suffix” setting. These two setting fields accept HTML, and thus can be used together to wrap a link tag around the item. To dynamically output the URL to the post, you can use the built-in 
```
{{ post:url }}
```

 [dynamic tag](#built-in-dynamic-tags).

So, to add a complete link,  add 
```
<a href="{{ post:url }}">
```

 to the “Prefix” field, and 
```
</a>
```

 to the “Suffix field, as shown in the image on the right.

### Add links with an HTML builder item

Another approach would be to use an HTML builder item. These can be very useful if you want to include the contents of one or more custom fields from Advanced Custom Fields or Pods in your item, or if your builder item is more complex. HTML items can be extra powerful if you combine them with [built-in](#built-in-dynamic-tags) or [custom dynamic tags](#create-dynamic-tags-within-the-listing-builder).

An example: let’s say you want to create a link to the post URL, with the link text coming from an ACF custom field:

1. First, click the “+” icon and create a builder item from your ACF field. Give the item a name with the “Unique name” field (or use the generated name), and enable the “Hide item” setting (to prevent it from being displayed itself):

![Add a hidden builder item from an ACF field in the Listing Builder.](https://facetwp.com/wp-content/uploads/2022/09/listing-builder-add-link-step1-v2.png)Add a hidden builder item from an ACF field in the Listing Builder.
1. Then, add an HTML builder item, and use its “Content” field to create a link element. For the link URL in the 
```
href
```

 attribute, use the **built-in** 
```
{{ post:url }}
```

 dynamic tag. For the link text, use the “Unique name” of the builder item created in the first step. This name can be used as a **custom** dynamic tag by wrapping it with double curly brackets: 
```
{{ my-field-name }}
```

:

```
<a href="{{ post:url }}">{{ my-field-name }}</a>
```

The settings then should look like this:

![Add an HTML item in the Listing Builder with a built-in and a custom dynamic tag.](https://facetwp.com/wp-content/uploads/2022/09/listing-builder-add-link-step2-v2.png)Add an HTML item in the Listing Builder with a built-in and a custom dynamic tag.

### Add links with the facetwp_builder_item_value hook

It’s also possible to use the [facetwp_builder_item_value](/help-center/developers/hooks/output-hooks/facetwp_builder_item_value/) hook to add links:

#### Add a link to each builder item

For example, you could add a **link to each builder item**, like this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  return '<a href="' . get_permalink() . '">' . $value . '</a>';
}, 10, 2 );
```

Obviously, don’t do this when one or more of your builder items already have a link (created with one of the methods above), or you’d get invalid, nested link tags.

#### Add a link to a specific builder item

The above example can be adapted to only add a **link to one specific builder item**, identified by its “Unique name”. Note that you can also use dynamic tags in the code. To illustrate this, in the example below we used a [built-in dynamic tag](#built-in-dynamic-tags) for the post URL, instead of 
```
get_permalink()
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// replace 'my-item-name' with the name of your builder item
add_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if( $item['settings']['name'] == 'my-item-name' ) {
    return '<a href="{{ post:url }}">'. $value. '</a>';
  }
  return $value;
}, 10, 2 );
```

#### Add a read more link to a Post Excerpt builder item

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

#### Add a post author link to a Post Author builder item

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
// Replace 'my-author-item' with the 'Unique name' of your Post Author builder item
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

### Add a link to the whole post item block

Each post in a post listing normally consists of several builder items. For example, a post block could consist of a post title, a featured image, and an excerpt item.

With all of the [above methods](#add-links-to-builder-items) you can add links to individual builder items, like the post title. But what if you want to add a **link to the whole post block** instead of to the individual builder items it consists of?

There are two ways of accomplishing this:

#### Build the whole post block in one HTML builder item

One approach is to build the whole post block in one HTML builder item and use the 
```
{{ post:url }}
```

 [built-in dynamic tag](#built-in-dynamic-tags) to add a link to the surrounding 
```
<a>
```

 tag.

Then use one or more other builder items for everything you want displayed within the link, by using their “Unique name” as [custom dynamic tag](#create-dynamic-tags-within-the-listing-builder). Make sure to set each of these builder items to be hidden, so they are not displayed in the listing.

The following example code for a HTML item generates the post title, the featured image and the excerpt inside the link. It assumes two hidden builder items: one for the featured image and one for the excerpt. The 
```
{{ post:title }}
```

 dynamic tag is already built-in.

```
<a href="{{ post:url }}">
  <span class="post-title">{{ post:title }}</span>
  <span class="featured-image">{{ my-featured-image-item }}</span>
  <span class="excerpt">{{ my-excerpt-item }}</span>
</a>
```

Using this code, the template settings would look like this:

![Use only one HTML builder item for the whole post.](https://facetwp.com/wp-content/uploads/2022/09/listing-builder-html-block-example-v2.png)Use only one HTML builder item for the whole post.

#### Link the whole post block with Javascript

Another approach is to link only one of the builder items, for example the post title, using any of the [above methods](#add-links-to-builder-items). Then, we can use a bit of JavaScript to find that link and use it in a click event attached to the whole post block (which has the 
```
fwpl-result
```

 class).

The following example shows how to do this. The code assumes that the post block has a builder item with the “Unique name” 
```
my-item-name
```

, which contains a link:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// replace 'my-item-name' with the name of your linked builder item
add_action( 'facetwp_scripts', function() {
  ?>
  <script>
    (function($) {
      $('.facetwp-template').on('click', '.fwpl-result', function() {
        window.location.href = $(this).find('.my-item-name a').attr('href');
      });
    })(fUtil);
  </script>
  <?php
}, 100 );
```

Now each whole post block links to its post URL. The only issue left is that when you hover over the post block, it does not *look or behave* like a link: the cursor does not change, and there is no feedback for the user that this is actually a link.

We can fix this with a few lines of CSS. The example code below applies a light gray background when hovering the post block, and sets the cursor to look like it is a real link:

```
How to use custom CSS?CSS code can be placed in your (child) theme's style.css file. Alternatively, you can add it manually between <style> tags in the <head> section, in your (child) theme's header.php file. You can also load it with a hook in your (child) theme's functions.php file, or in the Custom Hooks add-on. To load the code only on pages with facets, use the facetwp_scripts hook. To load it on all pages, use wp_head or wp_footer.  Or you can use a code snippets plugin. More info/* Style the hover behavior of each post block */
.facetwp-template .fwpl-result:hover {
  background: #eee;
  cursor: pointer;
}

/* Optional: (re)style the hover of the only link */
.facetwp-template .fwpl-result:hover .my-item-name a {
  color: red;
  text-decoration: none;
}
```

## Using builder items with dates

![A Listing Builder Post Date field's Date format setting displaying as 'January 18, 2025'.](https://facetwp.com/wp-content/uploads/2025/03/listing-builder-date-format.png)A Listing Builder Post Date field’s Date format setting displaying as “January 18, 2025”.
If you create a builder item based on the Post Date, or a date-based custom field (with the “Field type” setting set to “Date”), you’ll see a “Date format” setting. This setting determines the date output in the front-end. The default format is set to 
```
F j, y
```

, will display the item as e.g. “January 18, 2025”.

The following [PHP datetime formats](https://www.php.net/manual/en/datetime.format.php) can be used to customize the date format:

- ```
d
```

 – day (2 digits)
- ```
j
```

 – day (without leading zeros)
- ```
m
```

 – month number (2 digits)
- ```
n
```

 – month number (without leading zeros)
- ```
F
```

 – month (full)
- ```
M
```

 – month (short)
- ```
y
```

 – year (last 2 digits)
- ```
Y
```

 – year (full)

![A Listing Builder custom date field's format settings.](https://facetwp.com/wp-content/uploads/2025/03/listing-builder-input-format.png)A Listing Builder custom date field’s format settings.
Some examples:

- ```
Y-m-d
```

 – 2025-01-18
- ```
d/m/Y
```

 – 18/01/2025
- ```
F j, Y
```

 – January 18, 2025
- ```
j M Y
```

 – 18 Jan 2025

If the builder item is based on a custom field containing a date, and the “Field type” setting is set to “Date”, you can also set an “Input format”. This format should match the format in which the date is stored in the database. In most cases dates are stored as 
```
YYYY-MM-DD
```

, for which the setting should be set to 
```
Y-m-d
```

 (which is the default). If your custom field stores the date differently, you need to adapt the “Input format” accordingly, using [PHP datetime formats](https://www.php.net/manual/en/datetime.format.php).

## Limit the number of characters or words of a “Post Excerpt” builder item

To limit the number of characters in the Listing Builder’s “Post Excerpt” item, add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( 'post_excerpt' == $item['source'] ) {
    $value = substr( $value, 0, 120 ); // Limit to 120 characters
  }
  // Optional: add something after the trimmed excerpt:
  if ( strlen($value) == 120 ) {
    $value .= ' (&hellip;)'; // Adds a space, then an ellipsis character (&hellip;) within parentheses.
  }
  return $value;
}, 10, 2 );
```

If you want to limit the excerpt by number of words instead of characters, you can use the [wp_trim_words() function](https://developer.wordpress.org/reference/functions/wp_trim_words/), which also has parameter to append something after the trimmed string, like an ellipsis character (
```
&hellip;
```

, displaying as: 
```
…
```

):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_builder_item_value', function( $value, $item ) {
  if ( 'post_excerpt' == $item['source'] ) {
    $value = wp_trim_words( $value, 10, ' (&hellip;)' ); // Trim to 10 words and add space and ellipsis.
  }
  return $value;
}, 10, 2 );
```

To add a “read more” link to the end of your trimmed excerpt, see [this example above](#add-a-read-more-link-to-a-post-excerpt-builder-item).

## Add a “No results” text

![How to add a No results text to the Listing Builder.](https://facetwp.com/wp-content/uploads/2023/01/listing-builder-no-results-text.png)How to add a “No results” text to the Listing Builder.
Since [FacetWP v4.1.5](/help-center/changelog/#4-1-5), Listing Builder listings have a “No results text” setting.

Just add the text that you want to show when there are no results.

The field also accepts HTML and shortcodes.

### Customize or translate the “No results” output

If the “No results text” field is not flexible enough, you can use the [facetwp_template_html](/help-center/developers/hooks/output-hooks/facetwp_template_html/) hook to create the desired output. Note that anything that is output by this hook will **override** the listing’s “No results text” setting completely.

Here is a simple example that sets a “No results found” text wrapped in 
```
<p>
```

 tags:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_template_html', function(  $output, $class ) {
  if ( $class->query->found_posts < 1 ) {
    $output = '<p>No results found</p>';
  }
  return $output;
}, 10, 2 );
```

If you need the message to be translatable, you can wrap the text in 
```
__()
```

. This makes the text a translatable string that will appear in e.g. [WPML string translations](https://wpml.org/documentation/getting-started-guide/string-translation/) or any other translation plugin. The string can also be translated with WP’s [gettext filter](https://developer.wordpress.org/reference/hooks/gettext/) (see [this example](/help-center/facets/facet-types/autocomplete/#translate-the-ui-texts)).

In the following example, we additionally pass the string through the 
```
facetwp_i18n
```

 filter hook, which now can also be used to [add your translations](/help-center/developers/hooks/advanced-hooks/facetwp_i18n/).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_template_html', function( $output, $class ) {
  if ( $class->query->found_posts < 1 ) {
    $output = '<p>' . facetwp_i18n( __( 'No results found', 'fwp-front' ) ) . '</p>';
  }
  return $output;
}, 10, 2 );
```

The 
```
facetwp_template_html
```

 hook can be used to output any plain HTML or PHP-generated content, so you could also use a (custom) shortcode:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_template_html', function(  $output, $class ) {
  if ( $class->query->found_posts < 1 ) {
    $output = do_shortcode('[my-shortcode]');
  }
  return $output;
}, 10, 2);
```

It is also possible to dynamically output facet value(s) to the text, so you can display a “No results found for { facet value(s) }” text. This will only be usable if you have a limited number of facets. Or you can use it only if a [Search facet](/help-center/facets/facet-types/search/) is in use, to display the search keywords in the message:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_template_html', function(  $output, $class ) {
  if ( $class->query->found_posts < 1 ) {

    // The default (translatable) text
    $output = __('No results found', 'fwp-front' );

    // Output default text + "for" (translatable) + chosen facet value(s),
    // resulting in the text: "No results found for { facet value(s) }"
    // Change "my_facet_name" to the name of your facet (2x):
    if ( isset( FWP()->facet->facets['my_facet_name'] ) ) {
      $keywords = FWP()->facet->facets['my_facet_name']['selected_values'];
      $keywords = is_array( $keywords ) ? implode( ' ', $keywords ) : $keywords;
    }
    if ( ! empty( $keywords ) ) {
      $output .= ' ' . __( 'for', 'fwp-front' ) . ' ' . $keywords;
    }

    // Add extra HTML tags
    $output = '<h3>'. $output . '</h3>';
  }
  return $output;
}, 10, 2);
```

## Translate the Button item text

If you are using a Button item in your listing, the Button text (as set in the Button item’s settings) can be translated [using the facetwp_i18n hook](/help-center/developers/hooks/advanced-hooks/facetwp_i18n/).

The following example translates a Button text “More information” to Dutch and Spanish. Note that this code assumes [a multi-lingual site setup](/help-center/using-facetwp-with/multilingual/), in which each page has a set language.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_i18n', function( $string ) {
  
  if ( isset( FWP()->facet->http_params['lang'] ) ) {
    $lang = FWP()->facet->http_params['lang'];

    $translations = [];
    $translations['nl']['More information'] = 'Meer informatie'; // Translate default text to Dutch
    $translations['es']['More information'] = 'Más información'; // Translate default text to Spanish

    if ( isset( $translations[ $lang ][ $string ] ) ) {
      return $translations[ $lang ][ $string ];
    }
  }

  return $string;
});
```

## Customize Listing Builder listing queries

If you need to override the query arguments that you have set in the Query tab (for example only on certain pages), you can [use the facetwp_query_args hook](/help-center/developers/hooks/querying-hooks/facetwp_query_args/).

This hook works similarly to WP’s [pre_get_posts hook](/how-to-customize-wp-archive-queries/#how-to-use-pre_get_posts-to-modify-the-wp-archive-query), but unlike that hook, it only runs on pages with facets, and it has access to information about the page, listing template and facets used. This can be used to let the code run only in certain conditions. For example, you can check:

- if a specific Listing Builder template is used,
- if the page has a specific URI, or
- if specific facets or facet choices are currently in use.

[See the examples on the hook’s page](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/#usage-examples) for ways to use this.

### Add custom shortcode attributes

The 
```
facetwp_query_args
```

 hook can also be used to add one or more custom attributes to a Listing Builder shortcode:

```
How to use shortcodes?Shortcodes can be placed directly in post/page edit screens. You can also add them in text/HTML widgets. The WordPress Block Editor has a Shortcode block to place them in. And most Page builders have a dedicated shortcode module/widget. In PHP templates, shortcodes can be displayed with WP's do_shortcode() function: echo do_shortcode('[my-shortcode]');. More info[facetwp template="publications" project="housing"]
```

And then [use those custom attributes to change or narrow the query](/help-center/developers/hooks/querying-hooks/facetwp_query_args/#add-a-taxonomy-query-based-on-a-shortcode-attribute).

## Register listings programmatically

With the 
```
facetwp_templates
```

 hook, it is possible to [programmatically register/add new listings in code](/help-center/developers/hooks/advanced-hooks/facetwp_templates/), rather than using the plugin interface. There are several reasons why you may consider doing this:

- To prevent users from changing listing settings.
- You can have your listings and their settings under version control. This way you can revert to previous sets of listings or previous listing settings.
- If your listings and settings are tied to a theme, anyone using the code/theme automatically has the registered listings and their settings.
- If you are [using FacetWP with WordPress multi-site](/help-center/using-facetwp-with/wordpress-multi-site/), all sites in the multi-site network can have the same listings and lising settings, as long as they are using the same theme.

Note that there is a similar hook, 
```
facetwp_facets
```

, to [programmatically register facets](/help-center/developers/hooks/advanced-hooks/facetwp_facets/).

    
## See also

    - [Using the Listing Builder in Dev Mode](https://facetwp.com/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/)
- [Indexing](https://facetwp.com/help-center/indexing/)
- [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [The Reset facet type](https://facetwp.com/help-center/facets/facet-types/reset/)
- [FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
- [Back up or move facets and listing templates](https://facetwp.com/help-center/add-on-features-and-extras/back-up-or-move-facets-and-listing-templates/)
- [The facetwp_builder_item_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_item_value/)
- [The facetwp_builder_dynamic_tags hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tags/)
- [The facetwp_builder_dynamic_tag_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_builder_dynamic_tag_value/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [The facetwp_is_main_query hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/)
- [The facetwp_template_use_archive hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/)
- [How to pre-select facet choices](https://facetwp.com/how-to-pre-select-facet-choices/)
- [How to prevent duplicate results](https://facetwp.com/how-to-prevent-duplicate-results/)
- [The facetwp_template_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_template_html/)
- [Using the facetwp_i18n hook to translate facet labels and strings](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_i18n/)
- [The facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
- [The facetwp_templates hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_templates/)
- [The facetwp_facets hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_facets/)
- [Using FacetWP with WordPress multi-site](https://facetwp.com/help-center/using-facetwp-with/wordpress-multi-site/)
- [Using FacetWP with WPML or Polylang](https://facetwp.com/help-center/using-facetwp-with/multilingual/)

                    Last updated: January 29, 2026

---

## Using the Listing Builder in Dev Mode

**Source:** [https://facetwp.com/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/](https://facetwp.com/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/)

## What is Dev mode?

If you browse to **Settings > FacetWP**, click the “Listings” tab and then “Add new”, the new template will by default use the “visual” [Listing Builder](/help-center/listing-templates/listing-builder/).

However, if you need more flexibility or prefer to code your post loops and query arguments by hand in PHP, you can still take advantage of the Listing Builder by using its “Dev mode”.

Dev mode can be enabled independently on both the “Display” and “Query” tabs, by clicking the checkbox on the right.

Note that although you can freely switch each tab between the “visual mode” and Dev mode, the two modes are not related (except momentarily when you use the “[Convert to query args](#convert-to-query-args-button)” button). For the Display tab as well as the Query tab, a listing template uses one mode **or** the other: the mode in which you leave the tabs when you save the listing template, is used.

You can also mix modes. For example, you can use visual mode in the Display tab and Dev mode in the Query tab.

Note: “Dev mode” was called “Advanced mode” in FacetWP versions older than v4.0.

## How to use Display Code in Dev mode

![FacetWP Listing Builder Dev Mode](https://facetwp.com/wp-content/uploads/2022/04/devmode.png)When the “Display” tab is active, click the 
```
Dev mode
```

 checkbox.

Use the “Display Code” box to build the [WordPress loop](https://developer.wordpress.org/themes/basics/the-loop/) for your template: the output for a single listing item.

The following example will output the linked title for each post item:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<?php if ( have_posts() ) : ?>
  <?php while ( have_posts() ): the_post(); ?>
    <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
  <?php endwhile; ?>
<?php else : ?>
  <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>
```

Alternatively, you could save your display code into a PHP template file and include it in the “Display Code” box:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<?php
  include( get_stylesheet_directory() . '/your-post-loop.php' );
?>
```

## How to use Query Arguments in Dev mode

![FacetWP Listing Builder Dev Mode](https://facetwp.com/wp-content/uploads/2022/04/devmode.png)When the “Query” tab is active, click the 
```
Dev mode
```

 checkbox.

Use the Query Arguments box to build the query for your template. The query determines the initial posts to load, how many per page, and in which order. You can use query parameters from [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/).

The following example fetches published posts, orders them alphabetically by title, and shows 15 posts per page:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<?php
return [
  'post_type' => [
    'post'
  ],
  'post_status' => [
    'publish'
  ],
  'orderby' => [
    'title' => 'ASC'
  ],
  'posts_per_page' => 15
];
```

### Convert to query args button

![FacetWP Listing Builder - 'Convert to query args' button.](https://facetwp.com/wp-content/uploads/2022/04/convert-to-query-args.png)The ‘Convert to query args’ button.
You can write all query arguments directly in Dev mode [as shown above](#query-arguments), but you can also build the query in visual mode first, and then click the “Convert to query args” button.

This will automatically enable Dev mode for the Query tab and convert the visual settings to PHP query arguments, which you can then further adapt yourself if needed.

### Using the current post or page ID or queried object

Listing Builder listing templates on single posts or pages **do not have any page/post context during the AJAX refresh** (when filtering). This allows these types of listings to load faster, but has the side effect that any info about the queried object, like the post ID of the page itself, is unknown during the refresh. The usual methods to get the post ID, like 
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

For example, if you want to get the post ID of the post/page itself to set certain query arguments (for example in a 
```
tax_query
```

 argument), you will notice that this only works on the first page load, but not after filtering.

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

Then, in the Query tab of the Listing Builder (in Dev mode), you can retrieve the stored post ID or current term slug as follows:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info$post_id = isset( FWP()->facet->http_params[ 'post_id' ] ) ? FWP()->facet->http_params[ 'post_id' ] : get_the_id();
// Do something with $post_id

$current_term_slug = isset( FWP()->facet->http_params[ 'current_term_slug' ] ) ? FWP()->facet->http_params[ 'current_term_slug' ] : get_queried_object()->ID;
// Do something with $current_term_slug
```

This solution can also be used in hooks you may be using to customize the Listing Builder query, like a 
```
pre_get_posts()
```

 hook, or better, [the facetwp_query_args hook](/help-center/developers/hooks/querying-hooks/facetwp_query_args/#using-the-current-post-or-page-id-or-queried-object).

## Customize Listing Builder listing queries

If you need to override the query arguments that you have set in the Query tab (for example only on certain pages), you can [use the facetwp_query_args hook](/help-center/developers/hooks/querying-hooks/facetwp_query_args/).

This hook works similarly to WP’s [pre_get_posts hook](/how-to-customize-wp-archive-queries/#how-to-use-pre_get_posts-to-modify-the-wp-archive-query), but unlike that hook, it only runs on pages with facets, and it has access to information about the page, listing template and facets used. This can be used to let the code run only in certain conditions. For example, you can check:

- if a specific Listing Builder template is used,
- if the page has a specific URI, or
- if specific facets or facet choices are currently in use.

[See the examples on the hook’s page](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/#usage-examples) for ways to use this.

## Display a listing template

Templates can be displayed [with a shortcode](/help-center/listing-templates/listing-builder/#display-a-listing-template) or [with PHP](https://facetwp.com/help-center/listing-templates/listing-builder/#display-a-listing-template-with-php).

## Debug (static) Listing Builder listing queries

If you need to debug a complicated custom 
```
WP_Query
```

 that you created in the Listing Builder’s Query tab ([in Visual mode](/help-center/listing-templates/listing-builder/#using-the-query-tab) or [in Dev mode](#how-to-use-query-arguments-in-dev-mode)), you can normally use 
```
FWP.settings.debug.sql
```

 in the browser Console to see the SQL used by the query, and check if everything is correct. Sidenote: FacetWP’s Debug Mode needs to be enabled in the settings for this to work.

However, Debug Mode will **not** work if your listing is a so-called “static” listing ([a listing not reacting to facets](/help-center/listing-templates/listing-builder/#multiple-listing-templates-on-the-same-page)), because in that case, FacetWP’s assets that are needed for this [are not loaded for performance reasons](/help-center/listing-templates/listing-builder/#using-static-listings-without-facets).

In this scenario, or if you find this easier, you can 
```
var_dump()
```

 the SQL by adding the following to the listing’s Display tab in Dev mode:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<pre>
<?php var_dump( $GLOBALS['wp_query']->request ); ?>
</pre>
```

Which should then look like this:

![How to var_dump() listing query SQL in the listing's Display tab in Dev mode.](https://facetwp.com/wp-content/uploads/2025/09/var_dump_sql_listing_builder_display_tab.png)How to 
```
var_dump()
```

 listing query SQL in the listing’s Display tab in Dev mode.
    
## See also

    - [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [How to prevent duplicate results](https://facetwp.com/how-to-prevent-duplicate-results/)
- [The facetwp-refresh event](https://facetwp.com/help-center/developers/javascript-reference/facetwp-refresh/)
- [The facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
- [The facetwp_templates hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_templates/)
- [The facetwp_template_html hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_template_html/)

                    Last updated: June 18, 2026

---

## Using a page builder

**Source:** [https://facetwp.com/help-center/listing-templates/using-a-page-builder/](https://facetwp.com/help-center/listing-templates/using-a-page-builder/)

FacetWP integrates with Bricks Builder, Beaver Builder, and Elementor Pro.

	[Bricks](https://facetwp.com/help-center/using-facetwp-with/bricks/)
					[Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/)
					[Beaver Builder](https://facetwp.com/help-center/using-facetwp-with/beaver-builder/)
					[Breakdance](https://facetwp.com/help-center/using-facetwp-with/breakdance/)

                    Last updated: August 6, 2024

---

## Blocks

**Source:** [https://facetwp.com/help-center/listing-templates/using-wordpress-blocks/](https://facetwp.com/help-center/listing-templates/using-wordpress-blocks/)

This add-on lets you display facets alongside supported WordPress blocks, in classic and block themes.

## Supported blocks

The following blocks are supported and can be used to [create FacetWP compatible listings](#usage). Note that all blocks [need to be enabled for FacetWP](#usage) to be filterable by facets.

| Source/Plugin | Block name | Block type |
| --- | --- | --- |
| WordPress | Query Loop
Posts List
Latest Posts | WP Query Loop
WP Query Loop
posts loop |
| WooCommerce | Products (Beta)* Deprecated. See warning banner belowProduct Collection
Notes:

The Product Collection block comes with its own set of product filtering and pagination blocks, which all are incompatible with FacetWP. Remove these blocks and use facets instead.
Read this section if you want to use a Sort facet with the Product Collection block.
Read this section if you want to  sort by price when using product variations. | WP Query Loop WP Query Loop |
| GenerateBlocks | Query Loop (v1)
Query (v2)
Notes:

When using GenerateBlocks Pro, the Query (v2) block has a “Query Type” setting, for which only the “Post Query” option is supported. FacetWP cannot filter post meta or options.
See this page for how to switch between v1 and v2 blocks. | GB Query LoopGB Query Loop |
| Kadence Blocks | Posts | posts loop |
| Stackable | Posts | posts loop |
| Spectra | Post Grid | posts loop |
| Spectra Pro (v1.2.0+) | (Advanced) Loop Builder
Notes:

The Spectra Pro Loop Builder block comes with its own set of filtering, sorting, searching, and pagination blocks, which all are incompatible with FacetWP. Remove these blocks and use facets instead. | Spectra Query Loop |
| Otter Blocks | Posts | posts loop |

Note:Not all block features and settings are supported. [See below](#known-issues-incompatibilities-and-unsupported-block-settings) for known issues, incompatibilities, and unsupported block settings.
The FacetWP Blocks add-on (v0.3+) adds the following FacetWP blocks:

| Plugin | Block name |
| --- | --- |
| FacetWP | FacetListing |

Warning:The Blocks add-on currently only supports the exact block types mentioned above. Some plugins build on these block types by adding block variations. Despite that these block variations sometimes show an [“Enable FacetWP” setting](#usage), FacetWP does **not** officially support these blocks. They may or may not work as expected, depending on what block features are changed.
Warning:WooCommerce is [phasing out support for the Products (Beta) block](https://developer.woocommerce.com/2024/02/22/announcing-the-product-collection-block/), and has replaced this block (and other product block types) with a new [Product Collection](https://woocommerce.com/document/woocommerce-store-editing/customizing-shop-page-catalog/product-collection-block/") block. In WooCommerce version 9.1.0 (released on 11 July 2024) and newer, the Products (Beta) block is hidden in the Block Inserter. It will still function if you were already using it on a page, but we’re not sure for how long. FacetWP is also still functioning on this block. Going forward, we recommend replacing any Products (Beta) block with the Product Collection block.

## Supported WordPress context

This add-on was tested with WordPress v6.2.3 and newer versions. It may or may not work with older versions. Due to the highly evolving nature of the WordPress Block- and Site Editor, future WordPress updates may unexpectedly break functionality. [Let us know](https://facetwp.com/help-center/get-support/) if you experience any issues.

This add-on expects the Block Editor to be functional. So don’t use any code or plugins to “disable Gutenberg” or reinstate the Classic Editor.

### Don’t use the Gutenberg plugin

You **don’t** need [the Gutenberg plugin](https://wordpress.org/plugins/gutenberg/) to use the WordPress Block Editor.

Gutenberg is now a “beta plugin”, giving access to bleeding-edge and experimental Gutenberg features. It is meant to be used by developers who need to test features of the Block- and Site Editor before they are officially released. As such, this plugin may contain non-final code that is possibly incompatible with FacetWP’s Blocks add-on or other block plugins.

To prevent issues, **don’t install the Gutenberg plugin, or deactivate it**, unless you really need it.

## Usage

Follow these steps to set up FacetWP with one of the supported blocks:

1. Download the Blocks add-on from your [account page](/account/), then install and activate it.
2. Open a new or existing page in the Block Editor, or a template page in the Site Editor (if you are using a block theme), and add one of the [supported blocks](#supported-blocks) to the page.
3. ![Enable FacetWP for a supported block.](https://facetwp.com/wp-content/uploads/2025/07/block-enabled-setting.png)Enable FacetWP for a supported block.
When this add-on is active, supported blocks will display an extra “Enable FacetWP” setting in the block settings in the right sidebar. **Enable this setting** to let FacetWP dynamically filter this block listing with facets. Note that the [FacetWP Listing block](#the-facetwp-listing-block) does not have this setting, it will just work by itself.

Important:Make sure to use **only one FacetWP-enabled block on a page**. Using multiple FacetWP-enabled blocks per page is **not** supported. If you use a [FacetWP Listing block](#the-facetwp-listing-block), it is possible to [add one or more “static” Listing blocks](#add-a-static-listing), which are not filterable.
4. ![Add a FacetWP shortcode to a Shortcode block.](https://facetwp.com/wp-content/uploads/2023/11/blocks-facetwp-shortcode.png)Add a FacetWP shortcode to a Shortcode block.
Next, add one or more [facets](/help-center/facets/) to the page. The easiest is to use FacetWP’s own built-in [Facet block](#the-facetwp-facet-block) (available in v0.3+ of the Blocks add-on). Alternatively, you can paste each facet shortcode into a separate Shortcode block.
5. If needed, add pagination with a [Pager facet](/help-center/facets/facet-types/pager/), and/or sorting with a [Sort facet](/help-center/facets/facet-types/sort/), both of which can be added with a [Facet block](#the-facetwp-facet-block). Note that [Pagination blocks are not supported](#add-pagination-and-sorting). Some supported blocks automatically add a Pagination block, [which needs to be deleted](#remove-dont-add-pagination-blocks).
6. If your block is a [Query Loop type block](#query-loop-block-structure-and-block-nesting), it is possible to [add a custom-built No Results block](#add-a-custom-no-results-block) to replace the default “Nothing found” message. Some blocks, like a custom-defined Product Collection block, and the GenerateBlocks Query (v2) block, add a No Results block automatically.
7. If needed, [customize/translate the “Nothing found” message or the No Results block content](#customize-translate-or-override-the-nothing-found-message-or-no-results-block-content).

## FacetWP blocks

![Insert built-in FacetWP blocks.](https://facetwp.com/wp-content/uploads/2025/07/facetwp-blocks-insert.png)Insert built-in FacetWP blocks.
Since v0.3, the FacetWP Blocks add-on comes with two built-in FacetWP blocks:

1. [Facet](#the-facetwp-facet-block) – adds a [facet](/help-center/facets/).
2. [Listing](#the-facetwp-listing-block) – adds a [Listing Builder listing](/help-center/listing-templates/listing-builder/).

### The FacetWP Facet block

![The FacetWP Facet block settings.](https://facetwp.com/wp-content/uploads/2025/07/the-facet-block-settings.png)The FacetWP Facet block settings.
With a Facet block you can add an existing facet to your page. The block is a convenient alternative to [adding facet shortcodes in a Shortcode block](#add-facet-with-shortcode-block).

After adding the block to your page, use the “Select a facet” dropdown in the placeholder or the sidebar to select one of your [existing facets](/help-center/facets/).

The dropdown will show all previously created facets.

At the bottom of the dropdown, you can select the [User Selections facet](/help-center/facets/facet-types/user-selections/), which is not a facet you can create (and does not appear in the back-end facet overview in the FacetWP settings).

#### The “Heading” setting

Optionally, you can add a facet heading/label by toggling the “Heading” setting and entering text in the Heading block that appears above the facet placeholder after selecting a facet. You can determine the HTML tag used in the inline block settings and style it further in the sidebar. Disabling the Heading setting will remove the facet’s Heading block.

Note:If your facets are added with a Facet block, [this custom code to add facets labels/headings](/help-center/facets/#how-to-add-labels-headings-above-each-facet) **should not be used**. Use the Facet block’s “Heading” setting instead, which does the same if enabled.

#### The “Hide when empty” setting

If you want to hide “empty” facets, including their [heading](#add-a-facet-heading), enable the “Hide when empty” setting.

Facets can become empty because they have no choices left after filtering. Facets can also be empty *before* filtering, if they have no choices indexed/available for the posts in the listing. Or if the listing template’s query has 
```
0
```

 results. The setting also hides facets if the listing template’s query has 
```
0
```

 results, before or after filtering.

![To be able to hide empty facets, the 'Show ghosts' setting must be disabled.](https://facetwp.com/wp-content/uploads/2022/04/showghosts-off.png)To be able to hide empty facets, the “Show ghosts” setting must be **disabled**.
Make sure the facets  that have their “Hide when empty” setting enabled, do **not** have the “Show ghosts” setting enabled (if they have this setting). Because facets with ghosts will never become empty.

Note that the “Hide when empty” setting is only available for facet types that store their number of choices left. This means that the setting will **not** display for the following facet types:

- [Search](/help-center/facets/facet-types/search/)
- [Autocomplete](/help-center/facets/facet-types/autocomplete/)
- [Date Range](/help-center/facets/facet-types/date-range/)
- [Number Range](/help-center/facets/facet-types/number-range/)
- [Map](/help-center/facets/facet-types/map/)
- [Proximity](/help-center/facets/facet-types/proximity/)
- [Sort](/help-center/facets/facet-types/sort/)
- [Reset](/help-center/facets/facet-types/reset/)
- [User Selections](/help-center/facets/facet-types/user-selections/)
- [A-Z Listing](/help-center/facets/facet-types/alphabetical-listing/)

To hide these facet types (or any other facet, or their container/wrapper element) when there are no results, you can use the [Conditional Logic add-on](/help-center/add-on-features-and-extras/conditional-logic/). Create a rule with the [Condition](/help-center/add-on-features-and-extras/conditional-logic/#available-conditions) set to a “Result count” of 
```
0
```

. Add one or more [Actions](/help-center/add-on-features-and-extras/conditional-logic/#actions) to hide the desired facet(s), or their container/wrapper element (if needed with a [custom selector](/help-center/add-on-features-and-extras/conditional-logic/#using-custom-selectors)).

Note:If your facets are added with a Facet block, [this custom code to hide empty facets](/help-center/facets/#how-to-hide-empty-facets) **should not be used**. Use the Facet block’s “Hide when empty” setting instead, which does the same if enabled.

#### Facet placeholders in the block editor

Facets will **not** display in the block editor. A placeholder is shown instead:

![An example placeholder for a Radio facet, with a heading block.](https://facetwp.com/wp-content/uploads/2025/08/the-facetwp-facet-block-placeholder-example.png)An example placeholder for a Radio facet, with a heading block.
Check your front-end page to see if your facets are functioning correctly. If they are not appearing, make sure you also have added a listing to the page. This can be a [supported block](#supported-blocks), a [Listing Builder listing](/help-center/listing-templates/listing-builder/) (added with a [Listing block](#the-facetwp-listing-block) or Shortcode block), or any [other supported listing template type](/help-center/listing-templates/). Make sure there is **only one FacetWP-enabled listing on a page**.

### The FacetWP Listing block

![The FacetWP Listing block settings.](https://facetwp.com/wp-content/uploads/2025/07/the-listing-block-settings.png)The FacetWP Listing block settings.
With a Listing block you can add an existing [Listing Builder listing template](/help-center/listing-templates/listing-builder/) to your page. It is a convenient alternative to adding listing shortcodes in a Shortcode block.

After adding the Listing block to your page, use the “Select a listing” dropdown in the placeholder or the sidebar to select one of your previously created [Listing Builder listings](/help-center/listing-templates/listing-builder/).

[Unlike the Facet block](#the-facetwp-facet-block), the Listing block will show your listing, including its full layout, in the editor.

Note that if you want to use a Listing block on an archive template (instead of on a normal page), see [this section on how to let FacetWP use (or ignore) the archive query](/help-center/listing-templates/listing-builder/#using-a-listing-builder-listing-template-on-a-wp-archive).

Important:There should be **only one filterable (non-static) Listing block** on a page. FacetWP does **not** support multiple filterable Listing Builder listings on a page. If you do add more than one on a page, even though they will appear to work in the edit screen, they will **not work** in the front-end. If you want to use multiple listings, the only way is to [add them as “static” (non-filterable) listings](#add-a-static-listing).
Note:If you see the error “This block has encountered an error and cannot be previewed”, when selecting a listing in the Listing block’s Listing Template dropdown, the cause is most likely a server error caused by the selected listing’s [Dev mode Display code](/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/#how-to-use-display-code-in-dev-mode). Check your server’s error logs for clues, or [use the Query Monitor plugin](/how-to-use-query-monitor-to-optimize-performance/#fixing-php-errors).

#### Add a static listing

![How to add a static listing.](https://facetwp.com/wp-content/uploads/2025/07/the-listing-block-settings-static.png)How to add a static listing.
By enabling the Listing block’s “Static” setting, you can add a [static Listing Builder listing](/help-center/listing-templates/listing-builder/#multiple-listing-templates-on-the-same-page) to the page. A “static” listing is a listing that does not react to facets.

You can even add **multiple static listings** to a page, also to a page that already has a “normal” filterable (non-static) listing. But there should be **only one filterable (non-static) listing on a page**.

Note that static Listing Builder listings [can also be added with a shortcode or PHP](/help-center/listing-templates/listing-builder/#multiple-listing-templates-on-the-same-page). When using a shortcode, you can add them with a Shortcode block.

## Using blocks on archive templates

![In WP v6.7+, enable Query Type 'Default' for Query Loop type blocks on archive pages.](https://facetwp.com/wp-content/uploads/2025/03/block-query-type-setting.png)In WP v6.7+, enable Query Type “Default” for Query Loop type blocks on archive pages.
![In WP pre-v6.7, or for the GenerateBlocks Query Loop (v1) block, the GenerateBlocks Query (v2) block, or the WooCommerce Products (Beta) block, enable 'Inherit query from template' on archive pages.](https://facetwp.com/wp-content/uploads/2023/11/blocks-inherit-query-from-template.png)In WP pre-v6.7, or for the GenerateBlocks Query Loop (v1) block, the GenerateBlocks Query (v2) block, or the WooCommerce Products (Beta) block, enable “Inherit query from template” on archive pages.
If you use a supported block on an archive template (in classic as well as block themes), make sure the query is using the native archive query, by **enabling Query Type “Default”**.

In WP versions older than v6.7, and for the GenerateBlocks Query Loop (v1) block, the GenerateBlocks Query (v2) block, or the WooCommerce Products (Beta) block, **enable “Inherit query from template”**.

This setting is only visible in archive templates, and in the following [Query Loop type blocks](#query-loop-block-structure-and-block-nesting):

- WordPress Query Loop block
- WordPress Posts List block
- WooCommerce Products (Beta) block
- WooCommerce Product Collection
- GenerateBlocks Query Loop (v1) block
- GenerateBlocks Query (v2) block

Note that to customize the query for these block types, when used on archive templates with the mentioned setting enabled, you need to use the 
```
pre_get_posts
```

 hook, [as described below](#customize-query-loop-type-block-queries-on-archive-templates).

The Spectra Pro (Advanced) Loop Builder block for some reason does not have an “Inherit query from template” setting. This means that when you use this block on an archive template, this block will create a new custom 
```
WP_Query
```

. In this situation, you need to [tell FacetWP to ignore the archive query](#let-facetwp-ignore-archive-queries-for-blocks), because FacetWP prioritizes the archive query.

If you want to use a [FacetWP Listing block](#the-facetwp-listing-block) on an archive template, see [this section on how to let FacetWP use (or ignore) the archive query](/help-center/listing-templates/listing-builder/#using-a-listing-builder-listing-template-on-a-wp-archive).

### Let FacetWP ignore archive queries for blocks

If you have a reason to use a block on an archive template [without enabling the “Default” Query Type or “Inherit query from template” setting](#using-blocks-on-archive-templates), you need to tell FacetWP to ignore the archive query and use the block’s custom query instead. The reason is that otherwise, FacetWP will automatically detect and prioritize the archive query.

This can be done with [the facetwp_is_main_query hook](/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/). Add the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ( $query->is_archive() && $query->is_main_query() ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 10, 2 );
```

Notes: If you set a static page for your posts (blog) page in WP’s “Reading” settings, for that page 
```
is_archive()
```

 will return 
```
false
```

. For the above code to work on such a posts page, replace 
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

## Add pagination and sorting

This add-on supports using [Sort facets](/help-center/facets/facet-types/sort/) and [Pager facets](/help-center/facets/facet-types/pager/), including the [Load More type Pager facet](/help-center/facets/facet-types/pager/#load-more-pager-type). You can add these facets with a [Facet block](#the-facetwp-facet-block), or by pasting their shortcode in a Shortcode block.

It does **not** support [Pagination blocks](#remove-dont-add-pagination-blocks), or pagination that is added by settings in any of the supported blocks themselves (with one exception: [the Spectra Post Grid block’s pagination](#spectra-post-grid-block-pagination)).

The add-on also does **not** support any sorting, pagination, filtering or search blocks, like the [WooCommerce Pagination block and other product filtering blocks](#dont-use-any-woocommerce-product-filtering-or-pagination-blocks), and the [Spectra Pro (Advanced) Loop Builder block’s filtering, sorting, reset and searching blocks](#dont-use-any-spectra-pro-advanced-loop-builder-search-sort-filter-and-pagination-blocks). Remove these blocks if added automatically, and use facets instead.

For the Product Collection block specifically, make sure to read [this section](#using-a-product-collection-block-with-a-sort-facet) if you want to use a Sort facet with it. And [this section](#product-variations-and-sorting-by-price-with-a-sort-facet) if you want to  sort by price when using product variations.

### Remove / don’t add Pagination blocks

The add-on **does not work with a separate Pagination block** (which can be added when the child “Post Template” block in a [Query Loop type block](#query-loop-block-structure-and-block-nesting) is selected.

![Delete the automatically added Pagination block. Use a Pager facet instead, which you can add with a Facet block.](https://facetwp.com/wp-content/uploads/2025/07/block-woo-product-collection-pagination-delete.png)Delete the automatically added Pagination block. Use a Pager facet instead, which you can add with a [Facet block](#the-facetwp-facet-block).
Note that the WooCommerce Product Collection and Products (Beta) blocks, some Query Loop / Posts List block layout patterns, the GenerateBlocks Query (v2) block, and the Spectra Pro (Advanced) Loop builder block automatically add one or more Pagination blocks on insertion. **These Pagination blocks need to be removed manually**, as they will not work. Use a [Pager facet](/help-center/facets/facet-types/pager/) instead, which you can add with a [Facet block](#the-facetwp-facet-block), or by pasting its shortcode in a Shortcode block.

### GenerateBlocks Query Loop (v1) block pagination

The GenerateBlocks Query Loop (v1) block has [a button in the top/floating block toolbar to add pagination](https://docs.generateblocks.com/article/query-loop-overview/#pagination). This type of pagination should not be used as it is incompatible with FacetWP. Use a [Pager facet](/help-center/facets/facet-types/pager/) instead, which you can add with a [Facet block](#the-facetwp-facet-block), or by pasting its shortcode in a Shortcode block.

### GenerateBlocks Query (v2) block pagination

![Delete the GenerateBlocks Query (v2) pagination blocks. Use a Pager facet instead, which you can add with a Facet block.](https://facetwp.com/wp-content/uploads/2025/07/block-generateblocks-query-pagination-delete.png)Delete the GenerateBlocks Query (v2) pagination blocks. Use a Pager facet instead, which you can add with a [Facet block](#the-facetwp-facet-block).
The GenerateBlocks Query (v2) block adds a Container block with three pagination blocks. This type of pagination is incompatible with FacetWP. Remove the Container block with its three child pagination blocks. Use a [Pager facet](/help-center/facets/facet-types/pager/) instead, which you can add with a [Facet block](#the-facetwp-facet-block), or by pasting its shortcode in a Shortcode block.

### Stackable Posts block pagination

If you have Stackable Premium installed, the Stackable Posts block [can have a Pagination block or a Load More Button block added](https://docs.wpstackable.com/article/470-how-to-add-the-load-more-button-and-pagination-to-the-posts-block) (with the 
```
+
```

 icon at the bottom of the Posts block). Both of these blocks are incompatible with FacetWP. Use a [Pager facet](/help-center/facets/facet-types/pager/) instead, which also has a Load More Pager type if needed. You can add it a [Facet block](#the-facetwp-facet-block), or by pasting its shortcode in a Shortcode block.

### Spectra Post Grid block pagination

![The Spectra Post Grid block's Pagination settings.﻿](https://facetwp.com/wp-content/uploads/2023/12/spectra-post-grid-pagination.png)The Spectra Post Grid block’s Pagination settings.
The Spectra Post Grid block has a “Post Pagination” setting. This pagination *can* be used with FacetWP. If enabled, the “Pagination Type” can be set to “Ajax” or “Normal”. It will work no matter which type you choose, as the add-on will intercept the pagination clicks.

Alternatively, you can use a [Pager facet](/help-center/facets/facet-types/pager/), which you can add with a [Facet block](#the-facetwp-facet-block), or by pasting its shortcode in a Shortcode block.

![The Spectra Post Grid block's Page Limit setting.](https://facetwp.com/wp-content/uploads/2023/12/spectra-post-grid-page-limit.png)The Spectra Post Grid block’s Page Limit setting.
Note that this block also has a “Page Limit” setting which limits the number of pages in the pagination. Be aware that in Pager facets (of all [Pager types](/help-center/facets/facet-types/pager/#choose-a-pager-type), also Result Counts) this setting is ignored. It *does* work with the block’s own pagination, so if you don’t see all results, make sure the Page Limit is set high enough to show all posts in the listing query.

One other caveat is that this block’s own pagination is repeated when using a [“Load more” type Pager facet](/help-center/facets/facet-types/pager/#load-more-pager-type). So don’t combine the block’s own pagination with a “Load more” facet.

### Using a Product Collection block with a Sort facet

To let users sort products in a Product Collection block, you can use a Sort facet, or a WooCommerce Catalog Sorting block. The Catalog Sorting block is only available on product archive templates though, not on normal pages.

There are a few important things to keep in mind:

![The only two Product Collection block “Default Sort by” options that work with Sort facets.](https://facetwp.com/wp-content/uploads/2026/04/woo-product-collection-ordering.png)The only two Product Collection block “Default Sort by” options that work with Sort facets.
If you use Sort facet, **on a product archive template**, it is important that the Product Collection block’s “Default sort by” setting is **not** set to any of the Price, Sales, or Rating options. If you use any of those orders, **the Sort facet will not work**.

The reason is that these options are not standard [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/#order-orderby-parameters) ordering methods. With these custom ordering methods, WooCommerce uses special joins with its own tables, which conflict with the Sort facet functionality.

The only options that work together with a Sort facet are “Newest to oldest”, and “Manual (menu order + name)”.

If you want to use any of the other default sorting methods in the “Default sort by” setting, you need to use a [pre_get_posts](https://developer.wordpress.org/reference/hooks/pre_get_posts/) hook to set it. For example, if you want to use a default ordering by price, from high to low:

1. First, set the Product Collection block’s “Default sort by” setting to “Manual (menu order + name)” and save.
2. Next, add the following snippet to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action('pre_get_posts', function ( $query ) {

  if ( is_admin() || ! $query->is_main_query() ) {
    return;
  }

  // For product archive pages and product category archive pages
  if ( is_post_type_archive('product') || is_shop() || is_tax('product_cat') ) {
    $query->set('orderby', 'meta_value_num');
    $query->set('meta_key', '_price');
    $query->set('order', 'DESC');
  } 
});
```

This makes the products order by price, from high to low (
```
DESC
```

), on product archives and product category archives.
3. You can now use a Sort facet without issues. If your Sort facet also has an option to sort by price (desc), you can [pre-select it with the facetwp_preload_url_vars hook](/how-to-pre-select-facet-choices/#pre-select-a-sort-facet-choice), like this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Replace 'my/page' with the URI of your shop page (everything after the domain name, excluding any slashes at the beginning and end).
// Replace 'product-category' with the URL base for the product category archives (the part of the URL before the term name, without the domain name, excluding any slashes at the beginning and end. E.g. for domain.com/product-category/tools, it would be 'product-category'.
// Replace 'my_sort_facet' with the name of your Sort facet (2x).
// Replace 'price_high_low' with the Sort facet option to be pre-selected.

add_filter( 'facetwp_preload_url_vars', function( $url_vars ) {
  if ( 'my/page' == FWP()->helper->get_uri() || false !== strpos( FWP()->helper->get_uri(), 'product-category' ) ) {
    if ( empty( $url_vars['my_sort_facet'] ) ) {
      $url_vars['my_sort_facet'] = ['price_high_low'];
    }
  }
  return $url_vars;
} );
```

This example assumes that your Sort facet has a 
```
price_high_low
```

 [sort option](/help-center/facets/facet-types/sort/#setting-sort-options) set. It pre-selects this sort option on product archives and product category archives.

#### Product variations and sorting by price with a Sort facet

Be aware that sorting by price is currently **not** supported with the [Sort facet](/help-center/facets/facet-types/sort/) if you are [using product variations](/help-center/using-facetwp-with/woocommerce/#using-woocommerce-product-variations) and have variable products in the query. It may seem to work, but the logic of the Sort facet is based on 
```
WP_Query
```

 and therefore supports only basic custom fields-based sorting by meta key. Product variation prices are unfortunately more complex than that because all variation prices are synced to the parent product’s post meta.

If you need user sorting by product variation price, you could use WooCommerce’s built-in Catalog Sorting block, which is only available in WooCommerce product archives.

## Query Loop block structure and block nesting

![A Query Loop block with an added No Results block.](https://facetwp.com/wp-content/uploads/2023/11/blocks-query-loop-structure.png)A Query Loop block with an added No Results block.
The supported blocks that are marked as “Query Loop type” blocks in [the above table](#supported-blocks) are all based on WP’s core Query Loop block structure.

These blocks are a set of nested blocks: they consist of at least a main parent container block and a child Post Template block. This Post Template block determines the contents of each individual post in the loop. It consists of one or more nested child blocks, depending on the initially chosen “layout pattern” and additional blocks you may add. Within the Post Template block, you can build the individual posts however you like.

The main parent block can also contain other direct child blocks, such as a [No Results block](#add-a-custom-no-results-block), as shown in the image above.

![The default nesting structure of a GenerateBlocks Query Loop (v1) block.](https://facetwp.com/wp-content/uploads/2023/11/block-generateblocks-query-loop.png)The default nesting structure of a [GenerateBlocks Query Loop (v1) block](https://docs.generateblocks.com/article/query-loop-overview/).
This add-on also supports (deeper) block nesting. All supported blocks can be nested in other container blocks (like Group, Container, Column, or Section blocks).

When using a Query Loop type block, its child Post Template block can also be nested in other container blocks if needed, like for example in the [GenerateBlocks Query Loop (v1) block](https://docs.generateblocks.com/article/query-loop-overview/), where the Post Template block is nested within a Grid block, as shown in the image on the right.

![The default nesting structure of a GenerateBlocks Query (v2) block.](https://facetwp.com/wp-content/uploads/2025/07/block-generateblocks-query.png)The default nesting structure of a [GenerateBlocks Query (v2) block](https://learn.generatepress.com/blocks/block/query/).
The [GenerateBlocks Query (v2) block](https://learn.generatepress.com/blocks/block/query/) has an even more elaborate structure with a Looper and Loop Item block, as shown in the image on the right.

This block also adds a Container block with three pagination blocks. These pagination blocks need to be removed, because they don’t work with FacetWP. Use a [Facet block](#the-facetwp-facet-block) with a Pager facet instead.

The block’s own No Results block, with its child block(s), can be used with FacetWP. If needed, [its output can be overridden](#override-the-nothing-found-message-or-no-results-block-content-with-a-hook).

## Add a custom No Results block

Every [supported block](#supported-blocks) has a default “Nothing found” message that displays when there are no results (for example when using a [Search facet](/help-center/facets/facet-types/search/)). This message can easily be [customized, translated or overridden](#customize-translate-or-override-the-nothing-found-message-or-no-results-block-content).

In [Query Loop type blocks](#query-loop-block-structure-and-block-nesting) (except in the GenerateBlocks Query Loop (v1) block and the Spectra Pro (Advanced) Query Loop block, which has a “If Posts Not Found” setting), it is also possible to replace the default message with a No Results block containing custom-built content (consisting of other blocks).

Some blocks, like a custom-defined Product Collection block, and the GenerateBlocks Query (v2) block, add a No Results block automatically.

To add a No Results block manually, first select a direct child block of the main parent block. The No Results block will then be available to [choose from the Block Inserter](https://wordpress.org/documentation/article/adding-a-new-block/).

Note:If you don’t see the No Results block in the Block Inserter, make sure to first select a direct child block of the main parent block and try again.
![Add a No Results block directly before or after the Post Template block.](https://facetwp.com/wp-content/uploads/2023/11/block-no-results.png)Add a No Results block directly before or after the Post Template block.
In a WP Query Loop block, if you add the No Results block as a direct child block of the main Query Loop block, it can be placed before or after the Post Template block. However, if you nest it in another block for some reason, [it has to be placed before the Post Template block](#nesting-no-results-blocks).

By default, the No Results block only contains a Paragraph child block, which you can use to add your custom message. You can change this block to something else, or add other child blocks to build whatever layout you want to display when the main parent block’s query returns no results.

If you need more flexibility, the contents of a No Results block can also be [customized or completely overridden with a hook](#override-the-nothing-found-message-or-no-results-block-content-with-a-hook).

### Nesting No Results blocks

![A nested No Results block needs to be placed above the Post Template block, not below it.](https://facetwp.com/wp-content/uploads/2023/11/block-nested-no-results.png)A nested No Results block needs to be placed above the Post Template block, not below it.
In a [WP Query Loop type block](#query-loop-block-structure-and-block-nesting), if the No Results block is nested in another block for some reason, its container needs to be placed **before** the Post Template block (or its container block if it is nested) in the block tree.

If this is not the case, the No Results block will not work and the Query Loop block will show the default no results message. Stand-alone (non-nested) No Results blocks can be placed before or after the Post Template block.

## Customize, translate, or override the “Nothing found” message or No Results block content

Both the default “Nothing found” message and the contents of a [custom No Results block](#add-a-custom-no-results-block) can be changed or translated in various ways.

The default “Nothing found” message is a translatable string that can be translated with the internationalization function 
```
__()
```

 (e.g. with a translation plugin), or with the WordPress 
```
gettext
```

 filter:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'gettext', function( $translated_text, $text, $domain ) {
  if ( 'fwp-front' == $domain ) {
    if ( 'Nothing found.' == $translated_text ) {
      $translated_text = 'Niets gevonden.';
    }
  }
  return $translated_text;
}, 10, 3 );
```

In a [multi-lingual site](/help-center/using-facetwp-with/multilingual/), you can also translate the “Nothing found” message with the [facetwp_i18n hook](/help-center/developers/hooks/advanced-hooks/facetwp_i18n/):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_i18n', function( $string ) {

  if ( isset( FWP()->facet->http_params['lang'] ) ) {
    $lang = FWP()->facet->http_params['lang'];

    $translations = [];
    $translations['nl']['Nothing found.'] = 'Niets gevonden.';
    $translations['de']['Nothing found.'] = 'Nichts gefunden.';

    if ( isset( $translations[ $lang ][ $string ] ) ) {
      return $translations[ $lang ][ $string ];
    }
  }

  return $string;
});
```

### Override the “Nothing found” message or No Results block content with a hook

The default “Nothing found” message and the contents of a [No Results block](#add-a-custom-no-results-block) can both also be customized or completely overridden with a hook. This makes it possible to output any custom HTML when there are no results.

The hook to use depends on the block type. The following snippets need to be added to your (child) theme’s functions.php:

WP Query Loop block / WP Posts List block / WooCommerce Product Collection block / WooCommerce Products (Beta) block
For the WordPress **Query Loop block**, WordPress **Posts List block**,  WooCommerce **Product Collection block**, and the WooCommerce **Products (Beta) block**, use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_blocks_query_loop_no_results', function( $no_results_html ) {

  // customize $no_results_html, or completely override it:
  $no_results_html = '<p>' . facetwp_i18n( __( 'Niets gevonden.', 'fwp-front' ) ) . '</p>';

  return $no_results_html;
}, 10 );
```
WP Latest Posts block
For the WordPress **Latest Posts block**, use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_blocks_latest_posts_no_results', function( $no_results_html ) {

  // customize $no_results_html, or completely override it:
  $no_results_html = '<p>' . facetwp_i18n( __( 'Niets gevonden.', 'fwp-front' ) ) . '</p>';

  return $no_results_html;
}, 10 );
```
GenerateBlocks Query Loop (v1) block
For the **GenerateBlocks Query Loop (v1) block**, use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_blocks_gb_query_loop_no_results', function( $no_results_html ) {

  // customize $no_results_html, or completely override it:
  $no_results_html = '<p>' . facetwp_i18n( __( 'Niets gevonden.', 'fwp-front' ) ) . '</p>';

  return $no_results_html;
}, 10 );
```
GenerateBlocks Query (v2) block
For the **GenerateBlocks Query (v2) block**, use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_blocks_gb_query_no_results', function( $no_results_html ) {

  // customize $no_results_html, or completely override it:
  $no_results_html = '<p>' . facetwp_i18n( __( 'Niets gevonden.', 'fwp-front' ) ) . '</p>';

  return $no_results_html;
}, 10 );
```
Kadence Blocks Posts block
For the **Kadence Blocks Posts block**, use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'kadence_blocks_posts_empty_query', function( $no_results_html ) {

  // customize $no_results_html, or completely override it:
  $no_results_html = '<p>' . facetwp_i18n( __( 'Niets gevonden.', 'fwp-front' ) ) . '</p>';

  return $no_results_html;
}, 10 );
```
Stackable Posts block
For the **Stackable Posts block**, use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_blocks_stk_posts_no_results', function( $no_results_html ) {

  // customize $no_results_html, or completely override it:
  $no_results_html = '<p>' . facetwp_i18n( __( 'Niets gevonden.', 'fwp-front' ) ) . '</p>';

  return $no_results_html;
}, 10 );
```
Spectra Post Grid block
For the **Spectra Post Grid block**, use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_blocks_uagb_postgrid_no_results', function( $no_results_html ) {

  // customize $no_results_html, or completely override it:
  $no_results_html = '<p>' . facetwp_i18n( __( 'Niets gevonden.', 'fwp-front' ) ) . '</p>';

  return $no_results_html;
}, 10 );
```

![Add a custom 'Nothing Found' message in the Spectra Post Grid block.](https://facetwp.com/wp-content/uploads/2023/12/spectra-post-grid-nothing-found.png)Add a custom “Nothing Found” message in the Spectra Post Grid block.
Note that the above hook also overrides the Spectra Post Grid block’s own “If Posts Not Found” setting, with which you can set a custom “Display Message”. This setting accepts text and HTML.

If you leave this setting empty, the default message is “Nothing found.”.
Spectra Pro (Advanced) Loop Builder block
For the **Spectra Pro (Advanced) Loop Builder block**, use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_blocks_uagb_loop_builder_no_results', function( $no_results_html ) {

  // customize $no_results_html, or completely override it:
  $no_results_html = '<p>' . facetwp_i18n( __( 'Niets gevonden.', 'fwp-front' ) ) . '</p>';

  return $no_results_html;
}, 10 );
```

![Add a custom 'Nothing Found' message in the Spectra Pro (Advanced) Loop Builder block.](https://facetwp.com/wp-content/uploads/2023/12/spectra-post-grid-nothing-found.png)Add a custom “Nothing Found” message in the Spectra Pro (Advanced) Loop Builder block.
Note that the above hook also overrides the Spectra Pro (Advanced) Loop Builder block’s own “If Posts Not Found” setting, with which you can set a custom “Display Message”. This setting accepts text and HTML.

If you leave this setting empty, the default message is “Nothing found.”.
Otter Blocks Posts block
For the **Otter Blocks Posts block**, use:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_blocks_themeisle_blocks_posts_no_results', function( $no_results_html ) {

  // customize $no_results_html, or completely override it:
  $no_results_html = '<p>' . facetwp_i18n( __( 'Niets gevonden.', 'fwp-front' ) ) . '</p>';

  return $no_results_html;
}, 10 );
```

## Customize block queries

To customize a block’s query arguments, you can use a hook. The specific hook to use depends on the block type and its template context. The following snippets need to be added to your (child) theme’s functions.php:

### Customize WP Query Loop type block queries

To customize the query arguments **on normal (non-archive) pages**, for the WordPress **Query Loop** and **Posts List** blocks, and the WooCommerce **Product Collection** and **Products (Beta)** blocks, use [the  query_loop_block_query_vars hook](https://developer.wordpress.org/reference/hooks/query_loop_block_query_vars/). On **archive templates**, use the 
```
pre_get_posts
```

 hook instead, [as explained below](#customize-query-loop-type-block-queries-on-archive-templates).

In this example, we restrict the hook to blocks that are [enabled for FacetWP](#enable-facetwp). Add other [Conditional Tags](https://codex.wordpress.org/Conditional_Tags) to further restrict the hook as needed. This example only runs on a page with ID 
```
123
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'query_loop_block_query_vars', function( $query, $block, $page ) {
  if ( is_page(123) && ( strpos( ( $classname = $block->parsed_block['attrs']['className'] ?? '' ), 'facetwp-template') !== false ) ) { // Adapt the is_page() conditional as needed
    $query['posts_per_page'] = 9;
  }
  return $query;
}, 11, 3 ); // Important: use with priority 11 or later.
```

Note:Don’t use the 
```
pre_get_posts
```

 hook for Query Loop type blocks on **non-archive** templates, as it will cause issues with [pagination](#add-pagination-and-sorting).
Note:[The  query_loop_block_query_vars hook](https://developer.wordpress.org/reference/hooks/query_loop_block_query_vars/) is available since WP v6.1.0.

#### Customize Query Loop type block queries on archive templates

![In WP v6.7+, enable Query Type 'Default' for Query Loop type blocks on archive pages.](https://facetwp.com/wp-content/uploads/2025/03/block-query-type-setting.png)In WP v6.7+, enable Query Type “Default” for Query Loop type blocks on archive pages.
![In WP pre-v6.7, or for the GenerateBlocks Query Loop (v1) block, the GenerateBlocks Query (v2) block, or the WooCommerce Products (Beta) block, enable 'Inherit query from template' on archive pages.](https://facetwp.com/wp-content/uploads/2023/11/blocks-inherit-query-from-template.png)In WP pre-v6.7, or for the GenerateBlocks Query Loop (v1) block, the GenerateBlocks Query (v2) block, or the WooCommerce Products (Beta) block, enable “Inherit query from template” on archive pages.
If you use a [Query Loop type block](#query-loop-block-structure-and-block-nesting) on an **archive template** (in classic as well as block themes), and you have [enabled the “Default” Query type (or “Inherit query from template”) setting](#using-blocks-on-archive-templates) (so it uses the native archive query), the [above-mentioned query_loop_block_query_vars hook](#customize-query-loop-type-block-queries) will not work or will lead to [pagination](#add-pagination-and-sorting) issues. The same applies to both below-mentioned [GenerateBlocks v1 and v2 query hooks](#customize-generateblocks-query-loop-v1-block-queries).

On archive templates, you need to always use the 
```
pre_get_posts
```

 hook.

The following example only runs on the 
```
products
```

 post-type archive. Adapt the condition as needed: for example, for all archives, use 
```
is_archive()
```

, and for the blog page 
```
is_home()
```

.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'pre_get_posts', function( $query ) {
  if ( is_post_type_archive('product') ) {
    $query->set( 'posts_per_page', 9);
  }
}, 10);
```

Note:**On archive templates**, use the 
```
pre_get_posts
```

 hook only for Query Loop type blocks that have [the Query Type “Default” (or “Inherit query from template”) setting enabled](#using-blocks-on-archive-templates). With this setting set to **“Custom” (or disabled)** this hook will cause issues with [pagination](#add-pagination-and-sorting). In this situation, use the mentioned query hooks for the block instead, and make sure to [tell FacetWP to ignore the native archive query](#let-facetwp-ignore-archive-queries-for-blocks).

### Customize Latest Posts block queries

For the WordPress **Latest Posts** block, you can use the 
```
pre_get_posts
```

 hook, but its priority needs to be set to 
```
11
```

. In this situation, you can check for the 
```
facetwp
```

 query variable as conditional, so it will only run on Latest Posts blocks that are [enabled for FacetWP](#enable-facetwp). Add other [Conditional Tags](https://codex.wordpress.org/Conditional_Tags) to further restrict the hook as needed. This example only runs on a page with ID 
```
123
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action( 'pre_get_posts', function( $query ) {
  if ( is_page(123) && $query->get('facetwp') == true ) { // Adapt is_page() conditional as needed
    $query->set( 'posts_per_page', 9);
  }
}, 11);
```

### Customize GenerateBlocks Query Loop (v1) block queries

For the **GenerateBlocks Query Loop (v1)** block, use GenerateBlocks’ 
```
generateblocks_query_loop_args
```

 hook. Add other [Conditional Tags](https://codex.wordpress.org/Conditional_Tags) to further restrict the hook as needed. This example only runs on a page with ID 
```
123
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'generateblocks_query_loop_args', function( $query_args, $attributes, $block ) {
  if ( is_page(123) && ( ! empty( $attributes['className'] ) && strpos( $attributes['className'], 'facetwp-template' ) !== false ) ) { // Adapt is_page() conditional as needed
    $query_args['posts_per_page'] = 9;
  }
  return $query_args;
}, 10, 3 );
```

On archive templates, when using “Inherit query from template”, [use the pre_get_posts hook instead](#customize-query-loop-type-block-queries-on-archive-templates).

### Customize GenerateBlocks Query (v2) block queries

For the **GenerateBlocks Query (v2)** block, use GenerateBlocks’ 
```
generateblocks_query_wp_query_args
```

 hook. Add other [Conditional Tags](https://codex.wordpress.org/Conditional_Tags) to further restrict the hook as needed. This example only runs on a page with ID 
```
123
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'generateblocks_query_wp_query_args', function( $args, $attributes, $block) {
  if ( is_page(123) && ( $attributes['enableFacetWP'] ?? null ) === true ) { // Adapt is_page() conditional as needed
    $args['posts_per_page'] = 3;
  }
  return $args;
}, 10, 3 );
```

On archive templates, when using “Inherit query from template”, [use the pre_get_posts hook instead](#customize-query-loop-type-block-queries-on-archive-templates).

### Customize Kadence Blocks Posts block queries

For the **Kadence Blocks Posts** block, use Kadence Blocks’ 
```
kadence_blocks_posts_query_args
```

 hook. Add other [Conditional Tags](https://codex.wordpress.org/Conditional_Tags) to further restrict the hook as needed. This example only runs on a page with ID 
```
123
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'kadence_blocks_posts_query_args', function( $query_args ) {
  if ( is_page(123) ) { // Adapt is_page() conditional as needed
    $query_args['posts_per_page'] = 9;
  }
  return $query_args;
}, 10 );
```

### Customize Stackable Posts block queries

For the **Stackable Posts** block, use Stackable’s 
```
stackable/posts/post_query
```

 hook. Add other [Conditional Tags](https://codex.wordpress.org/Conditional_Tags) to further restrict the hook as needed. This example only runs on a page with ID 
```
123
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'stackable/posts/post_query', function( $query_args ) {
  if ( is_page(123) ) { // Adapt is_page() conditional as needed
    $query_args['posts_per_page'] = 9;
  }
  return $query_args;
}, 10 );
```

### Customize Spectra Post Grid block queries

For the **Spectra Post Grid** block, use Spectra’s 
```
uagb_post_query_args_grid
```

 hook. Add other [Conditional Tags](https://codex.wordpress.org/Conditional_Tags) to further restrict the hook as needed. This example only runs on a page with ID 
```
123
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'uagb_post_query_args_grid', function( $query_args ) {
  if ( is_page(123) ) { // Adapt is_page() conditional as needed
    $query_args['posts_per_page'] = 9;
  }
  return $query_args;
}, 10 );
```

Note:If you customize the number of posts per page like this, and you are missing posts in the listing, make sure [the block’s “Page Limit” setting](#spectra-post-grid-block-pagination) is high enough to show all posts.

### Customize Spectra Pro (Advanced) Loop Builder block queries

For the **Spectra Pro v1.2.0+ (Advanced) Loop Builder** block, use the 
```
spectra_loop_builder_main_query_args
```

 hook. Add other [Conditional Tags](https://codex.wordpress.org/Conditional_Tags) to further restrict the hook as needed. This example only runs on a page with ID 
```
123
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'spectra_loop_builder_main_query_args', function( $query ) {
  if ( is_page(123) ) { // Adapt is_page() conditional as needed
    $query['posts_per_page'] = 9;
  }
  return $query;
}, 10 );
```

For this block, you can also use [the query_loop_block_query_vars](https://developer.wordpress.org/reference/hooks/query_loop_block_query_vars/) hook on the parent block’s Wrapper child block. Add other [Conditional Tags](https://codex.wordpress.org/Conditional_Tags) to further restrict the hook as needed. This example only runs on a page with ID 
```
123
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'query_loop_block_query_vars', function( $query, $block, $page ) {
  if ( is_page(123) && $block->parsed_block['blockName'] === 'uagb/loop-wrapper' ) { // Adapt is_page() conditional as needed
    $query['posts_per_page'] = 9;
  }
  return $query;
}, 10, 3 );
```

Note that the above-mentioned 
```
spectra_loop_builder_main_query_args
```

 hook runs after the 
```
query_loop_block_query_vars
```

 hook.

### Customize Otter Blocks Posts block queries

For the **Otter Blocks Posts** block, use Otter Blocks’ 
```
themeisle_gutenberg_posts_block_query
```

 hook. Add other [Conditional Tags](https://codex.wordpress.org/Conditional_Tags) to further restrict the hook as needed. This example only runs on a page with ID 
```
123
```

:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'themeisle_gutenberg_posts_block_query', function( $query, $attributes ) {
  if ( is_page(123) && $attributes['enableFacetWP'] === true ) { // Adapt is_page() conditional as needed
    $query['posts_per_page'] = 9;
  }
  return $query;
}, 10, 2 );
```

## Use blocks and FacetWP in WordPress .html templates

With this add-on installed, it is possible to use [supported blocks](#supported-blocks) in [WordPress .html templates](https://developer.wordpress.org/themes/basics/template-files/#block-themes), the type of template used by block themes.

For example, suppose you are using a block theme that has a 
```
search.html
```

 template for the search results page, and you want it to use a Query Loop block with a few facets above it to let the user filter the search results.

The quickest way to do this is:

1. Create a new (temporary) page.
2. [Add a Query Loop block to the page](#usage) with the Block Inserter, [enable FacetWP with the “Enable FacetWP” setting](#enable-facetwp). Make sure to [enable the Query Type “Default” (or “Inherit query from template”) setting](#using-blocks-on-archive-templates), because the search template is an archive, and we need the Query Loop block to use the native archive query.
3. ![Enable Code Editor view in the WordPress block editor.](https://facetwp.com/wp-content/uploads/2023/11/wp-code-editor.png)Enable Code Editor view in the WordPress block editor.
[Create a few facets](/help-center/facets/). In the example below, we created a [Search facet](/help-center/facets/facet-types/search/) and a [Pager facet](/help-center/facets/facet-types/pager/).
4. Add a [Facet block](#the-facetwp-facet-block) for each facet. Or you can use a Shortcode block for each facet and copy your facet shortcode(s) into them.
5. Switch the Block Editor to “Code Editor” view, as shown in the image on the right.
6. Copy the whole block code from the Code editor.
7. Open the 
```
search.html
```

 theme file and replace the part of the block code that is the content with the copied block code from your temporary page. Make sure to leave the header and footer template part intact, as well as any container or group block(s).
8. You can now remove the temporary page, or keep it as draft for future changes.

Your 
```
search.html
```

 file will now look something like the following code, and will work with the facets:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","style":{"spacing":{"margin":{"top":"var:preset|spacing|70","bottom":"var:preset|spacing|70"}}},"layout":{"type":"constrained"}} -->
<main class="wp-block-group" style="margin-top:var(--wp--preset--spacing--70);margin-bottom:var(--wp--preset--spacing--70)">
  <!-- wp:query-title {"type":"search","align":"wide","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|50"}}}} /-->

  <!-- Start pasted Shortcode blocks with facets, and Query Loop block -->

  <!-- wp:shortcode -->  [facetwp facet="search"]
  <!-- /wp:shortcode -->

  <!-- wp:shortcode -->  [facetwp facet="pager_numbers"]
  <!-- /wp:shortcode -->

  <!-- wp:query {"queryId":1,"query":{"perPage":5,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"enableFacetWP":true} -->
  <div class="wp-block-query"><!-- wp:post-template -->
    <!-- wp:post-title /-->

    <!-- wp:post-excerpt /-->
    <!-- /wp:post-template -->

    <!-- wp:query-no-results -->
    <!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
    <p>No results found.</p>
    <!-- /wp:paragraph -->
    <!-- /wp:query-no-results --></div>
  <!-- /wp:query -->

  <!-- End pasted blocks -->

  
</main><!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

Notice 
```
"enableFacetWP":true
```

 in the Query Loop block settings on [line 16](#search-html-template-L16), which is the result of [the “enable FacetWP” setting](#enable-facetwp).

## Disable inline block styles

WordPress dynamically adds a range of inline default CSS styles for each block, as well as corresponding classes in the block’s HTML.

It is possible to remove these inline styles. The method depends on your WordPress version and the theme used. Due to the evolving nature of the WP Block- and Site Editor, the way to do this will probably change over time. At the time of writing, adding the following lines to your (child) theme’s functions.php seems to do the trick for most styles.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info//  Opt out of generated layout styles with the 'disable-layout-styles' support flag
add_theme_support( 'disable-layout-styles' );

// These two lines will probably not be necessary eventually
remove_filter( 'render_block', 'wp_render_layout_support_flag', 10, 2 );
remove_filter( 'render_block', 'gutenberg_render_layout_support_flag', 10, 2 ); // Needed if you have the Gutenberg plugin installed
```

More info about the various inline styles and ways to remove them can be found in  [this article](https://fullsiteediting.com/lessons/how-to-remove-default-block-styles/).

## Known issues, incompatibilities, and unsupported block settings

There are a few things known to not work with this add-on:

### Layout patterns with multiple query loops

![Don't choose or create layout patterns with multiple Query Loop blocks. FacetWP should only be enabled for one block on a page.](https://facetwp.com/wp-content/uploads/2023/11/query_loop_multiple.png)**Don’t** choose or create layout patterns with multiple Query Loop blocks. FacetWP should only be enabled for one block on a page.
When adding a [Query Loop type block](#query-loop-block-structure-and-block-nesting), you will be prompted to choose a layout pattern. WordPress currently has at least one layout pattern that adds **two** separate Query Loop blocks. Enabling FacetWP on multiple Query Loop (or other) blocks **is not supported**. Choose a layout pattern with only one Query Loop block for FacetWP to interact with.

In general, make sure to have only one block on a page or template that is enabled for FacetWP.

### Don’t use the query offset setting

Don’t use a block’s query query “offset” setting (if available). In general, [using query offset is incompatible with FacetWP](/how-to-use-the-offset-query-argument-with-facetwp/#the-issues-with-using-offset), because it is also applied *after* using facets. Another issue is that offsets breaks [pagination](#add-pagination-and-sorting), because it is used by WordPress internally to calculate which posts need to be on which paged page.

See [our offset tutorial](/how-to-use-the-offset-query-argument-with-facetwp/) for an alternative offset solution.

### Don’t use any WooCommerce product filtering or pagination blocks

Depending on the WooCommerce version used, several [product filtering and sorting blocks](https://woocommerce.com/document/woocommerce-store-editing/customizing-shop-page-catalog/filter-products/) are available for use together with the Product Collection and Products (Beta) blocks:

- Product Filters
- Filter by Price
- Filter by Attribute
- Filter by Stock
- Filter by Rating
- Active Filters
- [Pagination](#add-pagination-and-sorting)

These blocks are all **incompatible** with FacetWP. Don’t use these blocks, or remove them when they are added automatically. Use facets instead.

The only exception is the Catalog Sorting block, which is only available on product archive templates. That block can be used, and also works to [sort products by price if you are using product variations, for which Sort facets will not work](#product-variations-and-sorting-by-price-with-a-sort-facet).

### GenerateBlocks Query (v2) block unsupported “Query Type” settings

When using GenerateBlocks **Pro**, the Query (v2) block has a “Query Type” setting, for which only the “Post Query” option is supported. FacetWP cannot filter post meta or options.

### Don’t use any Spectra Pro (Advanced) Loop Builder search, sort, filter and pagination blocks

![Don't use any Spectra Pro (Advanced) Loop Builder search, sort, filter and pagination blocks. Remove them and use facets instead.](https://facetwp.com/wp-content/uploads/2025/07/block-spectra-loop-builder-blocks-delete.png)Don’t use any Spectra Pro (Advanced) Loop Builder search, sort, filter and pagination blocks. Remove them andoes not work with a separate Pagination block d use facets instead.
Depending on the block variation used, the Spectra Pro v1.2.0+ (Advanced) Loop Builder block [inserts its own set of filtering, sorting, searching, and pagination child blocks](https://wpspectra.com/docs/advanced-loop-builder/#new-variations-with-filters-):

- Category – Filter
- Sorting – Filter
- Search – Filter
- Reset – Filter
- [Pagination](#add-pagination-and-sorting)

These blocks are all **incompatible** with FacetWP. Don’t use these blocks, or remove them (including their Container blocks) when they are added automatically. Use facets instead.

### Otter Blocks Posts block Featured Posts setting

The Otter Blocks Posts block has an “Enable Featured Post” setting. This setting is incompatible with FacetWP’s [Pager facet](/help-center/facets/facet-types/pager/) pagination: it adds the same featured post to each page of the listing, and also counts it towards the number of posts per page.

### Using a core Accordion block with FacetWP

WordPress 6.9 [introduced](https://make.wordpress.org/core/2025/11/25/wordpress-6-9-field-guide/#accordion-block-now-supports-anchors) a new core [Accordion block](https://github.com/WordPress/gutenberg/issues/21584).

As long as you use this block **outside** of FacetWP-enabled [listing templates](/help-center/listing-templates/) and [supported listing blocks](#supported-blocks), the accordion will work just fine. You could, for example, add your [facet shortcodes](/help-center/facets/#display-a-facet) in a Shortcode block or [facet blocks](#the-facetwp-facet-block), *inside* an Accordion block.

However, using an Accordion block **within** a listing template or listing block, for example to store items within the retrieved post items, is problematic. This is because every script that runs on post elements in a listing needs to be re-initialized after an AJAX refresh (which happens when using facets).

Normally, this re-triggering can easily be accomplished by [re-initializing the script(s) within the facetwp-loaded hook](/help-center/developers/javascript-reference/facetwp-loaded/#re-initialize-a-script-on-ajax-refresh), which fires after each refresh. The problem however with the Accordion block is that it uses [WP’s Interactivity API](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/), which works with React and its virtual DOM. This makes it impossible to re-initialize the Accordion block’s script after FacetWP’s AJAX refresh.

To make a long story short: don’t use an Accordion block (or any other existing or future block that uses the Interactivity API, like [the AJAX-enabled “Add to Cart Button” block](#using-the-add-to-cart-button-block-in-the-product-collection-block)) within a FacetWP-enabled listing template (or listing block).

### Using the “Add to Cart Button” block in the Product Collection block

![The 'Add to Cart Button' block only works after a facet refresh with the 'AJAX add to cart buttons' setting disabled.](https://facetwp.com/wp-content/uploads/2026/02/woo-disable-ajax-add-to-cart.png)The “Add to Cart Button” block only works after a facet refresh with the “AJAX add to cart buttons” setting **disabled**.
If you are using the Blocks add-on, the default “Add to Cart Button” block within the [WooCommerce Product Collection block](https://woocommerce.com/document/woocommerce-store-editing/customizing-shop-page-catalog/product-collection-block/) will **not** work after FacetWP’s AJAX refresh, if the “Enable AJAX add to cart buttons on archives” setting (under WooCommerce > Settings > Products > Add to cart behaviour) is enabled.

This issue unfortunately does not have a simple fix: at the time of writing, there is no way to [re-trigger the block’s JavaScript after a facet refresh](/help-center/developers/javascript-reference/facetwp-loaded/#re-initialize-a-script-on-ajax-refresh), because it is using the WP Interactivity API. You can follow [this GitHub issue](https://github.com/woocommerce/woocommerce/issues/55439) for updates on a possible fix in a future WooCommerce version.

So the only way to get the default “Add to Cart Button” block working after a facet refresh is to **disable** the “Enable AJAX add to cart buttons on archives” setting.

If you don’t like a non-AJAX add-to-cart button, you could find and use a third-party “add to cart” block that does not use the WP Interactivity API, and [retrigger its JavaScript using the facetwp-loaded hook](/help-center/developers/javascript-reference/facetwp-loaded/#re-initialize-a-script-on-ajax-refresh).

Or, the most practical solution, is to use a custom shortcode to render the “regular” (classic/non-block) WooCommerce add-to-cart button in the Product Collection block:

#### Render the classic add-to-cart button in the Product Collection block with a custom shortcode

A solution to the [above issues](#using-the-add-to-cart-button-block-in-the-product-collection-block) with the default “Add to Cart Button” block in the Product Collection block, is to create a custom shortcode to render the “regular” (classic/non-block) add-to-cart button instead. You can do this as follows.

First, add the following snippet to your (child) theme’s functions.php. This will create a custom 
```
[dynamic-add-to-cart]
```

 shortcode that outputs WooCommerce’s “regular” [“add-to-cart” shortcode](https://woocommerce.com/document/woocommerce-shortcodes/related-products-add-to-cart-and-notification-shortcodes/#add-to-cart).

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_shortcode( 'dynamic-add-to-cart', function() {
  $product_id = get_the_ID();
  if ( ! $product_id ) {
    return '';
  }
  return do_shortcode( '[add_to_cart id="' . $product_id . '"]' );
});
```

You’d expect that adding this shortcode in a Shortcode block, within the Product Collection block’s Product Template block, would now output the add to cart button. However, there is a [longstanding bug](https://github.com/WordPress/gutenberg/issues/43053) that prevents shortcodes in Query Loop type blocks from having access to the post ID with 
```
get_the_ID()
```

.

![Using a Meta Field Block within a Product Collection block to output a custom shortcode.](https://facetwp.com/wp-content/uploads/2026/02/meta-field-block-within-product-collection-block.png)Using a Meta Field Block within a Product Collection block to output a custom shortcode.
![How to use a Meta Field Block to output a custom shortcode.](https://facetwp.com/wp-content/uploads/2026/02/meta-field-block-shortcode.png)How to use a Meta Field Block to output a custom shortcode.
Luckily, this can be solved by installing the [Meta Field Block plugin](https://wordpress.org/plugins/display-a-meta-field-as-block/). Add a Meta Field Block within the Product Collection block’s Product Template block, as shown in the image on the right.

In the block’s settings, under “Field Type” select “Dynamic field”.

Then, paste the custom shortcode 
```
[dynamic-add-to-cart]
```

 into the “Field Name” field. The settings should look like the image on the right.

After saving the page, the regular “add-to-cart button will now work, both with and without the “Enable AJAX add to cart buttons on archives” setting (under WooCommerce > Settings > Products > Add to cart behaviour) enabled. It will also preserve facet selections when clicking the button.

## Fix issues with facets and listings in block patterns

If you are using [facets](/help-center/listing-templates/listing-builder/) or [Listing Builder listings](/help-center/listing-templates/listing-builder/) in [block pattern](https://developer.wordpress.org/themes/patterns/) template files, you may run into the issue that your facets/listings don’t render in the front-end, and disappear in the block editor.

The cause is the way WordPress (currently) processes shortcodes and PHP code contained in block patterns templates, in the editor. The exact behaviour can be erratic and confusing, and depends on:

- in which view (the Visual editor or the Code editor) the pattern was added and saved;
- if the editor was switched between these views.

In most situations, the shortcode or PHP contained in the pattern template will be processed in the editor, and with that, converted to HTML. This does not work with facets and listings.

Using any of the following usual methods to render facets (or listings) in the pattern template **will not work**, and will trigger the above-described issues:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoecho facetwp_display( 'facet', 'my_facet_name' );
// Or
echo do_shortcode('[facetwp facet="my_facet_name"]');
```

The trick to get this working is to add the facet/listing as follows. Using this method, the facet/listing will render as a normal processed shortcode in the frontend, and as an unprocessed shortcode block in the block editor:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoif ( ! is_admin() && ! ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
  echo do_shortcode('[facetwp facet="my_facet_name"]');
} else {
  echo '<!-- wp:shortcode -->[facetwp facet="my_facet_name"]<!-- /wp:shortcode -->';
}
```

If using the above still leads to the same issues, try starting from a new fresh page/post, as in our tests this often fixed the issues.

## Use a FacetWP-enabled custom WP_Query in a custom ACF block

To learn how to create a filterable custom 
```
WP_Query
```

 as an [ACF Pro block](https://www.advancedcustomfields.com/resources/blocks/), read [this section on our Advanced Custom Fields page](/help-center/using-facetwp-with/advanced-custom-fields/#create-a-custom-acf-block-with-a-facetwp-enabled-custom-wp_query). Note that you don’t need the Blocks add-on to do this.

                    ## Changelog

                        
### 0.3

- March 23, 2026
- Newsee the [Blocks 0.3 release post](https://facetwp.com/whats-new-in-blocks-0-3/)

### 0.2

- Jan 5, 2024
- NewAdded support for Stackable Posts block, and Stackable nested container block types
- NewAdded support for Spectra Post Grid block, and Spectra nested container block types
- NewAdded support for Spectra Pro Loop Builder block
- NewAdded support for Otter Blocks Posts blocks and Otter Blocks nested container block types
- ImprovedAdded support for more Kadence Blocks nested container block types
- FixedFixed issue with blocks running through `get_the_excerpt()`, and in Yoast SEO OpenGraph data and Twitter card data excerpt generation, causing duplicate FacetWP enabled queries
- UpdatedPackage.json, removed unused packages

### 0.1

- Nov 15, 2023
- NewInitial release

                    
## See also

    - [What are facets?](https://facetwp.com/help-center/facets/)
- [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [The Search facet type](https://facetwp.com/help-center/facets/facet-types/search/)
- [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [Using FacetWP with WPML or Polylang](https://facetwp.com/help-center/using-facetwp-with/multilingual/)
- [Using the facetwp_i18n hook to translate facet labels and strings](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_i18n/)
- [The facetwp_is_main_query hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/)
- [How to use sticky posts with FacetWP](https://facetwp.com/how-to-use-sticky-posts-with-facetwp/)
- [How to use the offset query argument with FacetWP](https://facetwp.com/how-to-use-the-offset-query-argument-with-facetwp/)
- [Using FacetWP with Bricks Builder](https://facetwp.com/help-center/using-facetwp-with/bricks/)
- [Using FacetWP with Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/)
- [Using FacetWP with Beaver Builder](https://facetwp.com/help-center/using-facetwp-with/beaver-builder/)
- [Using FacetWP with Breakdance](https://facetwp.com/help-center/using-facetwp-with/breakdance/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Using the Listing Builder in Dev Mode](https://facetwp.com/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)
- [The Conditional Logic add-on](https://facetwp.com/help-center/add-on-features-and-extras/conditional-logic/)

                Last updated: April 20, 2026

---

## Using a WP archive page

**Source:** [https://facetwp.com/help-center/listing-templates/wp-archive-page/](https://facetwp.com/help-center/listing-templates/wp-archive-page/)

When you [place facets](/help-center/facets/#display-a-facet") on an existing WordPress **archive**, **search**, **blog/home** or WooCommerce **shop**  page, FacetWP will automatically detect the right query and post loop, and your facets will just work.

However, there are circumstances in which FacetWP’s automatic query/post-loop detection fails, resulting in the facets and listing not being updated:

## Solving issues with FacetWP’s automatic post loop detection

### How it works

On WordPress archive pages, including search result pages, blog pages, and the WooCommerce shop page and product category pages, FacetWP will automatically detect the main archive query to use for filtering.

Using WP’s [loop_start](https://developer.wordpress.org/reference/hooks/loop_start/) hook, Facetwp identifies the post loop that uses this query, and a 
```
<!--fwp-loop-->
```

 HTML comment is placed above the post loop in the template.

Next, FacetWP’s front-end JavaScript looks for that HTML comment and automatically adds a 
```
facetwp-template
```

 class on its direct parent HTML element, unless there is already another 
```
facetwp-template
```

 class present on the page. FacetWP needs this class to dynamically replace all HTML within this container with the AJAX refresh that happens when facets are used.

When the 
```
facetwp-template
```

 class ends up missing because one of these steps goes wrong, the solution is to add it [manually](#fix-the-loop-detection).

Note that this is also the fix for issues with some caching and optimization plugins that minify HTML (like [Cloudflare](/help-center/using-facetwp-with/cloudflare/#html-minification-and-the-facetwp-template-class) or [Fast Velocity Minify](/help-center/using-facetwp-with/fast-velocity-minify/) or [WP Super Minify](https://nl.wordpress.org/plugins/wp-super-minify/)). HTML minification removes HTML comments, including the 
```
<!--fwp-loop-->
```

 comment needed by FacetWP.

### Fix the loop detection

When the [above described](#how-it-works) automatic query/post-loop detection fails (which can happen for a myriad of reasons), the 
```
facetwp-template
```

 class will not be placed on the post-loop’s parent element. Without it, FacetWP does not know which content to dynamically replace, the facets will not work and the listing will not get updated when filtering.

The solution is easy: manually place the 
```
facetwp-template
```

 class on an element that (directly) surrounds the post loop, in the WP archive’s template file. To do so, follow these instructions:

#### Find the correct WP archive file

First, you need to determine which template file is used for the archive page you are on. The exact file depends on your theme’s setup. See WordPress’ built-in [Template Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/#visual-overview) for more information about how these filenames work.

As a general rule, these will be some of the file names:

| Template | File name |
| --- | --- |
| Default template: | archive.php |
| Category archive: | category.php |
| Taxonomy archive: | taxonomy.php |
| Date archive: | date.php |
| Author archive: | author.php |
| Custom Post Type archive: | archive-[posttype].php |
| Custom Taxonomy archive: | taxonomy-[posttype].php |
| WooCommerce shop: | archive-product.php |
| Search page: | search.php |
| Blog home: | home.php |

#### Manually add the facetwp-template class

In the archive’s template file, you will find a post loop that starts with 
```
if ( have_posts() )
```

 and an 
```
else
```

 statement for when there are no posts found, similar to this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info?>
<div class="facetwp-template">

<?php
if ( have_posts() ) :
  while ( have_posts() ) :
    the_post(); // Use only here, NOT outside the loop.
    ?>
      <h1><?php the_title() ?></h1>
      <div><?php the_content() ?></div>
  <?php
  endwhile;
else :
  _e( 'Sorry, no posts matched your criteria.' );
endif;
?>
    
</div>
```

As can be seen in the above code, the 
```
facetwp-template
```

 class needs to be placed on a container element (usually a 
```
<div>
```

) that **surrounds** the loop code, preferably on the **direct parent** element. If there is no container element, you can add one yourself.

Important: all [facets](/help-center/facets/) on a page need to be placed **outside** the container element that has the 
```
facetwp-template
```

 class. If you do not place the class on a direct parent element (or close enough), you may end up with facets that are *inside* the container. This will cause issues like disappearing facets, and a Console error: “Facets should not be inside the “facetwp-template” container”.

## Customizing WP archive queries

What is the right approach if you want to use a WP archive query but customize how it works, for example, sort it in a different way or modify the number of posts per page?

We often see developers doing this by using a custom [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/) *in* a WP archive template. The downside of this approach is that the database is getting queried twice, adding unnecessary overhead. It also breaks plugins that rely on WP’s default archive query.

If your desired query is very complicated, it may indeed be best to [build it with a custom WP_Query](/help-center/listing-templates/custom-wp-query/). But make sure to place it on a single page or post template, not on a WP archive. If you don’t want or cannot move the custom WP_Query from the WP archive, read the [instructions below](#using-a-custom-wp_query-on-a-wp-archive) on how to make this work with FacetWP.

However, instead of using a separate custom WP_Query, it is often much easier to modify the already existing WP archive query [with a pre_get_posts filter](/how-to-customize-wp-archive-queries/). Especially for basic query arguments like the post types to be fetched, the number of posts per page, or the sorting method.

### Using a custom WP_Query on a WP archive

If you have a custom WP_Query on a WP archive page, and don’t want or cannot change the way things are set up, you have to tell FacetWP explicitly which query (not) to use.

FacetWP has built-in query detection that determines which query on the page is the main query to use for filtering. On WP archive pages, **FacetWP by default will always prioritize the archive query** ahead of any other query on the page, including the custom WP_Query you placed on that page. This is the reason why a custom query on a WP archive will lead to unexpected results: FacetWP is using another query than the one defined in the custom query.

Using the [facetwp_is_main_query](/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/) hook, it is possible to force FacetWP to **ignore** the archive query, and use the custom query instead. Add the following code to your (child) theme’s functions.php to do this:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Ignore the archive query
add_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ( $query->is_archive() && $query->is_main_query() ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 10, 2 );
```

Notes: If you set a static page for your posts (blog) page in WP’s “Reading” settings, for that page 
```
is_archive()
```

 will return 
```
false
```

. For the above code to work on such a posts page, replace 
```
is_archive()
```

 in [line 3](#ignore-archive-queries-L3) with 
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

### Using a Listing Builder listing template on a WP archive

You may be tempted to [place a Listing Builder listing template](/help-center/listing-templates/listing-builder/#display-a-listing-template) on a WP archive, in order to customize the query, or to make use of the Listing Builder’s layout and styling features.

However, generally, on WP archive pages it would be better to not use a Listing Builder listing template but to use the WP archive template query and loop itself (and if necessary, to [customize the archive query](/how-to-customize-wp-archive-queries/)). Listing Builder listing templates [can best be placed on single pages or posts](/help-center/listing-templates/listing-builder/#where-to-place-the-listing-template).

If you want to keep using a Listing Builder listing template on a WP archive page, you’ll have to tell FacetWP explicitly which query (not) to use. There are [a few approaches to this](/help-center/listing-templates/listing-builder/#using-a-listing-builder-listing-template-on-a-wp-archive), depending on what type of archive you are using.

## How to determine if you are on a WP archive page

WP archive templates are a crucial part of how WordPress works, and a lot of plugins rely on these templates working correctly. But how do you know for sure if you are on a WP archive template (or any other type of default WordPress template)?

### What is a WP archive page?

An “archive page” in WordPress refers to a collection of posts grouped by post type, category, tag, term, author, or date. The blog page (the post type archive for posts) and the search results page are also considered archive pages. The [WooCommerce](/help-center/using-facetwp-with/woocommerce/) shop page is also an archive: it is a custom post-type archive of the post type “product”. The same is true for product category pages: they are custom taxonomy term archive pages.

WordPress automatically creates the queries on its archive templates. It has a built-in [Template Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/#visual-overview) that defines which default archives are available and how you can add your own. When you create new custom post types or custom taxonomies (for example with plugins like [Pods](/help-center/using-facetwp-with/pods/) or [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/)), these also will automatically have their own post-type and term archives.

### Check for WP archive body classes

A quick way to determine if you are on a WP archive page is to look at the body classes of the page. WordPress automatically adds one or more classes depending on the archive type.

Most archives have the 
```
archive
```

 class. Additionally, there will be multiple classes specific to the type of archive. For example, categories will have 
```
category
```

, terms 
```
term
```

, and post type archives 
```
post-type-archive
```

. The WooCommerce main shop page will have the body class 
```
post-type-archive-product
```

.

The blog/home page will have the class 
```
blog
```

 and the search page the class 
```
search
```

.

You are not on an archive when you are on a single page or post. Pages have the class 
```
page
```

, and posts have the class 
```
single
```

 and, depending on the post type: 
```
single-[post-type]
```

.

### Use WP’s Conditional Tags

Another way to determine on what type of template you are, is to temporarily 
```
echo
```

 or 
```
var_dump()
```

 one of WP’s [Conditional Tags](https://codex.wordpress.org/Conditional_Tags) in your template file and see what its output is: x

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Is an archive/search/blog template if true
is_archive(); // Returns true on category, tag, author, date, custom post type, and custom taxonomy-based archives
is_search(); // Returns true on the WP search results page
is_home(); // Returns true on the blog page (the post type archive for posts - which is not necessarily the home page)

// Is not an archive if true
is_page(); // Returns true on single pages
is_singular(); // Returns true on single posts of any post type (post, attachment, page, custom post types).

// Use like this:
var_dump( is_archive() ); // Returns bool(true) if it is on a WP archive page

// Or like this
if ( is_archive() ) { 
  echo "This is an archive template";
}
```

    
## See also

    - [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [The facetwp_is_main_query hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [How to prevent duplicate results](https://facetwp.com/how-to-prevent-duplicate-results/)
- [Using FacetWP with Cloudflare](https://facetwp.com/help-center/using-facetwp-with/cloudflare/)
- [Using FacetWP with Fast Velocity Minify](https://facetwp.com/help-center/using-facetwp-with/fast-velocity-minify/)
- [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)

                    Last updated: November 27, 2025

---

