# Faq

*Category from FacetWP documentation*

---

## Can FacetWP be installed with Composer?

**Source:** [https://facetwp.com/help-center/faq/can-facetwp-be-installed-with-composer/](https://facetwp.com/help-center/faq/can-facetwp-be-installed-with-composer/)

No, FacetWP does not support [Composer](https://getcomposer.org/).

There are currently no plans to add Composer support in the short term. The main reason is that our custom licensing system would need to be refactored to accommodate it.

    
## See also

    - [Installation and your account](https://facetwp.com/help-center/installation/)

                    Last updated: August 6, 2024

---

## Can FacetWP detect the currently logged-in user?

**Source:** [https://facetwp.com/help-center/faq/can-facetwp-detect-logged-in-state/](https://facetwp.com/help-center/faq/can-facetwp-detect-logged-in-state/)

If your FacetWP template or custom code depends on detecting the currently logged-in user, or if you [restrict WordPress or FacetWP REST API access to logged-in users](/help-center/developers/facetwp-rest-api/#restrict-the-rest-api-and-facet-filtering-to-authenticated-users), you will run into issues with your code not working after an AJAX refresh is triggered (which happens when using facets).

Fortunately, there is [an easy workaround](/how-to-pass-authentication-data-through-rest-api-requests/).

    
## See also

    - [The FacetWP REST API](https://facetwp.com/help-center/developers/facetwp-rest-api/)
- [Using FacetWP with the WordPress REST API Authentication plugin](https://facetwp.com/help-center/using-facetwp-with/wordpress-rest-api-authentication/)
- [Using FacetWP with the All-In-One Security (AIOS) plugin](https://facetwp.com/help-center/using-facetwp-with/all-in-one-security-aios/)

                    Last updated: September 5, 2024

---

## Can FacetWP filter single product variations?

**Source:** [https://facetwp.com/help-center/faq/can-facetwp-filter-single-product-variations/](https://facetwp.com/help-center/faq/can-facetwp-filter-single-product-variations/)

Variable products are a combination of product attributes. After [enabling product variations in the settings](/help-center/using-facetwp-with/woocommerce/#enable-facetwp-support-for-product-variations), and re-indexing, you can create facets with product attributes as data source, to **filter parent products by these attributes**, [as explained here](/help-center/using-facetwp-with/woocommerce/#using-woocommerce-product-variations).

Keep in mind that product attributes are attributed to their parent products during indexing. Because FacetWP can only filter posts (products in this case), **only parent products will show up in the listing, not individual product variations**.

If you want to display **single product variations** in your listing, you can use Iconic’s [WooCommerce Show Single Variations](https://iconicwp.com/products/woocommerce-show-single-variations/) plugin, which has its own integration with FacetWP. However, because of all the proprietary things this plugin does, like keeping its own index table, you need to **contact Iconic for support when this plugin is active**.

    
## See also

    - [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)

                    Last updated: August 14, 2025

---

## Can I add multiple users to my account?

**Source:** [https://facetwp.com/help-center/faq/can-i-add-multiple-users-to-my-account/](https://facetwp.com/help-center/faq/can-i-add-multiple-users-to-my-account/)

![How to add a manager email address.](https://facetwp.com/wp-content/uploads/2026/04/account_manager_emails.png)How to add a manager email address.
Yes, it is possible to add one or more account manager email addresses, so that multiple people can access the same account with their own email address.

Each manager email address can be used to log in, and has full access to the account.

To add manager email addresses, log into [your account](/account/), scroll down to the “Manager Emails” section at the bottom, fill in the email address, and click the “Add Manager” button.

Important:A manager email address cannot be an email address that is already connected to an existing account. There can only be one account per email address.
    
## See also

    - [Your account](https://facetwp.com/account/)
- [Installation and your account](https://facetwp.com/help-center/installation/)
- [How can I change my account email address?](https://facetwp.com/help-center/faq/how-can-i-change-my-account-email-address/)

                    Last updated: April 8, 2026

---

## Can I show facet choices with no results?

**Source:** [https://facetwp.com/help-center/faq/can-i-show-facet-choices-with-no-results/](https://facetwp.com/help-center/faq/can-i-show-facet-choices-with-no-results/)

A frequently asked question is if it is possible to show *all* facet choices (for example *all* terms in a taxonomy), also if there are no results for some of those choices.

The answer is no; FacetWP only [indexes](/help-center/indexing/) and displays facet choices that have results.

Note that some facet types (like [Checkboxes](/help-center/facets/facet-types/checkboxes/#what-are-ghosts), [Radio](/help-center/facets/facet-types/radio/#what-are-ghosts) and [fSelect](/help-center/facets/facet-types/fselect/#what-are-ghosts)) have a “Show ghosts” setting, which will show “ghost” (dimmed) choices if there are no results for them. But the same applies for these ghost choices: they need to appear in the unfiltered results, and can only become ghosts after being filtered out. If a facet choice has no associated posts, then it will **never** appear.

    
## See also

    - [Indexing](https://facetwp.com/help-center/indexing/)
- [The Checkboxes facet type](https://facetwp.com/help-center/facets/facet-types/checkboxes/)
- [The Radio facet type](https://facetwp.com/help-center/facets/facet-types/radio/)
- [The fSelect facet type](https://facetwp.com/help-center/facets/facet-types/fselect/)

                    Last updated: August 22, 2023

---

## Can I use FacetWP to filter categories or terms?

**Source:** [https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-categories-or-terms/](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-categories-or-terms/)

No, FacetWP does **not** support filtering directly on categories or taxonomy terms, with one exception: [product categories on WooCommerce shop- and product category archive pages](/help-center/using-facetwp-with/woocommerce/#filter-product-categories).

But you can filter posts, pages, and posts of any custom post types *by* category or taxonomy term(s): by setting a taxonomy as a facet’s data source.

Besides posts, pages and custom post types, you can filter users, if you install the [User Post Type](/help-center/add-on-features-and-extras/user-post-type/) add-on, which comes with a [Professional license](/pricing).

    
## See also

    - [What are facets?](https://facetwp.com/help-center/facets/)
- [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [The User Post Type add-on](https://facetwp.com/help-center/add-on-features-and-extras/user-post-type/)
- [FacetWP licenses and pricing](https://facetwp.com/pricing/)
- [Can I use FacetWP to filter pages?](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-pages/)
- [Can I use FacetWP to filter custom post types?](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-custom-post-types/)
- [Can I use FacetWP to filter user listings?](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-user-listings/)
- [What are posts, post types, taxonomies and custom fields?](https://facetwp.com/what-are-posts-post-types-taxonomies-and-custom-fields/)
- [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)

                    Last updated: November 28, 2025

---

## Can I use FacetWP to filter custom post types?

**Source:** [https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-custom-post-types/](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-custom-post-types/)

Yes, FacetWP supports listing and filtering of posts, pages, and any custom post type (as long as it is [searchable](/help-center/indexing/common-indexing-issues/#fix-issues-with-indexing-post-types)).

Additionally, with a [Professional license](/pricing) you can install the [User Post Type](/help-center/add-on-features-and-extras/user-post-type/) add-on, which allows you to map users to a 
```
upt_user
```

post type, which can the be used to display and filter users.

Note that you don’t need to “tell” a facet which posts or post type it needs to index or filter. All [searchable](/help-center/indexing/common-indexing-issues/#fix-issues-with-indexing-post-types) post types are indexed for all facets. And facets will filter whatever post type(s) is/are in the query of the FacetWP-enabled [listing template](/help-center/listing-templates/) on the page.

    
## See also

    - [The User Post Type add-on](https://facetwp.com/help-center/add-on-features-and-extras/user-post-type/)
- [FacetWP licenses and pricing](https://facetwp.com/pricing/)
- [Indexing](https://facetwp.com/help-center/indexing/)
- [Can I use FacetWP to filter pages?](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-pages/)
- [Can I use FacetWP to filter categories or terms?](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-categories-or-terms/)
- [Can I use FacetWP to filter user listings?](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-user-listings/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)

                    Last updated: June 3, 2025

---

## Can I use FacetWP to filter pages?

**Source:** [https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-pages/](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-pages/)

Yes, FacetWP supports listing and filtering of posts, pages, and any custom post type (as long as it is [searchable](/help-center/indexing/common-indexing-issues/#fix-issues-with-indexing-post-types)).

Additionally, with a [Professional license](/pricing) you can install the [User Post Type](/help-center/add-on-features-and-extras/user-post-type/) add-on, which allows you to map users to a post type, and therefore filter users.

    
## See also

    - [The User Post Type add-on](https://facetwp.com/help-center/add-on-features-and-extras/user-post-type/)
- [FacetWP licenses and pricing](https://facetwp.com/pricing/)
- [Can I use FacetWP to filter custom post types?](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-custom-post-types/)
- [Can I use FacetWP to filter categories or terms?](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-categories-or-terms/)
- [Can I use FacetWP to filter user listings?](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-user-listings/)

                    Last updated: November 22, 2024

---

## Can I use FacetWP to filter user listings?

**Source:** [https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-user-listings/](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-user-listings/)

Yes, [Professional licenses](/pricing) include the [User Post Type](/help-center/add-on-features-and-extras/user-post-type/) add-on, allowing you to map users to a post type, and therefore filter users.

    
## See also

    - [FacetWP licenses and pricing](https://facetwp.com/pricing/)
- [The User Post Type add-on](https://facetwp.com/help-center/add-on-features-and-extras/user-post-type/)
- [Can I use FacetWP to filter pages?](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-pages/)
- [Can I use FacetWP to filter custom post types?](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-custom-post-types/)
- [Can I use FacetWP to filter categories or terms?](https://facetwp.com/help-center/faq/can-i-use-facetwp-to-filter-categories-or-terms/)

                    Last updated: February 12, 2024

---

## Can I use FacetWP with a Strict Content Security Policy (CSP)?

**Source:** [https://facetwp.com/help-center/faq/can-i-use-facetwp-with-a-strict-content-security-policy-csp/](https://facetwp.com/help-center/faq/can-i-use-facetwp-with-a-strict-content-security-policy-csp/)

Yes. See [this tutorial](/how-to-use-facetwp-with-a-strict-content-security-policy-csp/) on how to use FacetWP with a Strict Content Security Policy.

In FacetWP versions older than v4.5, this was problematic. But [since FacetWP v4.5](/whats-new-in-facetwp-4-5/#use-facetwp-with-a-strict-content-security-policy-csp)+, all inline scripts are added with WP’s [wp_print_inline_script_tag()](https://developer.wordpress.org/reference/functions/wp_print_inline_script_tag/) function. The same is true for add-ons that load inline scripts: [Elementor v1.9.4+](/whats-new-in-elementor-1-9-4/#use-facetwp-with-a-strict-content-security-policy-csp), [Beaver Builder v1.5+](/whats-new-in-beaver-builder-1-5/#use-facetwp-with-a-strict-content-security-policy-csp), [Bricks v0.7.1+](/whats-new-in-bricks-0-7-1/), [Multilingual v1.0.2+](/whats-new-in-multilingual-1-0-2/), and [Flatsome v0.4.6+](/whats-new-in-flatsome-0-4-6/).

    
## See also

    - [How to use FacetWP with a Strict Content Security Policy (CSP)](https://facetwp.com/how-to-use-facetwp-with-a-strict-content-security-policy-csp/)
- [What’s new in FacetWP 4.5](https://facetwp.com/whats-new-in-facetwp-4-5/)

                    Last updated: April 16, 2026

---

## Can I use FacetWP with WordPress blocks?

**Source:** [https://facetwp.com/help-center/faq/can-i-use-facetwp-with-wordpress-blocks/](https://facetwp.com/help-center/faq/can-i-use-facetwp-with-wordpress-blocks/)

Yes, if you install [the Blocks add-on](/help-center/using-facetwp-with/blocks/), you can use facets alongside the following block types, in classic and block themes:

| Source/Plugin | Block name |
| --- | --- |
| WordPress | Query Loop
      Posts List
      Latest Posts |
| WooCommerce | Products (Beta) (Deprecated)Product Collection |
| GenerateBlocks | Query Loop (v1)
      Query (v2) |
| Kadence Blocks | Posts |
| Stackable | Posts |
| Spectra | Post Grid |
| Spectra Pro (v1.2.0+) | (Advanced) Loop Builder |
| Otter Blocks | Posts |

Consequently, with this add-on installed, you can also [use FacetWP with these supported blocks in .html templates in block themes](/help-center/using-facetwp-with/blocks/#use-blocks-and-facetwp-in-wordpress-html-templates).

See the [the Blocks add-on page](/help-center/using-facetwp-with/blocks/) for notes and caveats when using the above block types.

The FacetWP Blocks add-on (v0.3+) also adds the following FacetWP blocks:

| Plugin | Block name |
| --- | --- |
| FacetWP | FacetListing |

    
## See also

    - [Using WordPress blocks](https://facetwp.com/help-center/listing-templates/using-wordpress-blocks/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [Using a page builder](https://facetwp.com/help-center/listing-templates/using-a-page-builder/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)

                    Last updated: March 30, 2026

---

## Can I use multiple queries / FacetWP templates on the same page?

**Source:** [https://facetwp.com/help-center/faq/can-i-use-multiple-queries-facetwp-templates-on-the-same-page/](https://facetwp.com/help-center/faq/can-i-use-multiple-queries-facetwp-templates-on-the-same-page/)

No, FacetWP was intentionally built to support only one **filterable** listing per page.

Adding support for multiple filterable listings would greatly increase the complexity of the core plugin, which we are not interested in doing. Adding this is currently **not on the roadmap**.

Using any of the [supported listing template types](https://facetwp.com/help-center/listing-templates/), you can put multiple listings on a page, but **only one can be enabled for FacetWP**.

Note that if you are [using the Listing Builder](/help-center/listing-templates/listing-builder/), you can [add more than one listing shortcodes to the same page](https://facetwp.com/help-center/listing-templates/listing-builder/#multiple-listing-templates-on-the-same-page). Each listing template can have its own grid layout, styling, and query. But still, **only one** of them can be “dynamic” and will react to the facets on the page. The others must be [“static” listing templates that will not react to facets](/help-center/listing-templates/listing-builder/#display-static-listing-templates).

If you are using [the Elementor add-on](/help-center/using-facetwp-with/elementor/), the same applies: you should place **only one** filterable [Elementor FacetWP listing widget](/help-center/using-facetwp-with/elementor/#the-facetwp-listing-widget) on the page. Other, [static listings](/help-center/listing-templates/listing-builder/#display-static-listing-templates) can be used, but they will not be filterable. Static listings can be placed [with a Shortcode widget](/help-center/using-facetwp-with/elementor/#add-facetwp-shortcodes-with-a-shortcode-widget).

    
## See also

    - [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Using the Listing Builder in Dev Mode](https://facetwp.com/help-center/listing-templates/listing-builder/using-the-listing-builder-in-dev-mode/)
- [Using FacetWP with Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/)

                    Last updated: May 8, 2024

---

## Can I use “OR” logic between facets?

**Source:** [https://facetwp.com/help-center/faq/can-i-use-or-logic-between-facets/](https://facetwp.com/help-center/faq/can-i-use-or-logic-between-facets/)

No, when using multiple facets, the choices between them are always compared using 
```
AND
```

 logic. FacetWP is designed to “filter down”, thus reducing the results.

![The 'Facet logic' setting.](https://facetwp.com/wp-content/uploads/2026/02/facet-logic-setting.png)The “Facet logic” setting.
Using 
```
OR
```

 logic is possible **within individual facets**. The following facet types have a “Facet logic” setting, that determines the logic used between multiple choices **within the facet**:

- [Checkboxes](/help-center/facets/facet-types/checkboxes/#facet-logic)
- [fSelect](/help-center/facets/facet-types/fselect/#facet-logic)
- [Range List](/help-center/facets/facet-types/range-list/#facet-logic)
- [Color](/help-center/facets/facet-types/color/#facet-logic)

Selecting “AND (match all)” will **reduce** the results with multiple selections, while “OR (match any)” will **increase** the results.

Note:To change the “Facet logic” setting for a certain facet with PHP, you can [use the facetwp_facet_filter_posts hook](/help-center/developers/hooks/querying-hooks/facetwp_facet_filter_posts/#change-facet-logic). This can be used to change the logic for a facet on specific pages or for specific templates only.
Note:To let the user change the “Facet logic” for individual facets on the front-end, see [this tutorial](/how-to-switch-the-facet-logic-on-the-front-end/).
    
## See also

    - [The Checkboxes facet type](https://facetwp.com/help-center/facets/facet-types/checkboxes/)
- [The fSelect facet type](https://facetwp.com/help-center/facets/facet-types/fselect/)
- [The Conditional Logic add-on](https://facetwp.com/help-center/add-on-features-and-extras/conditional-logic/)
- [The Range List facet type](https://facetwp.com/help-center/facets/facet-types/range-list/)
- [The facetwp_facet_filter_posts hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_facet_filter_posts/)
- [How to switch the facet logic on the front-end](https://facetwp.com/how-to-switch-the-facet-logic-on-the-front-end/)

                    Last updated: February 13, 2026

---

## Can I use sticky posts with FacetWP?

**Source:** [https://facetwp.com/help-center/faq/can-i-use-sticky-posts-with-facetwp/](https://facetwp.com/help-center/faq/can-i-use-sticky-posts-with-facetwp/)

FacetWP does not work well with [sticky posts](https://developer.wordpress.org/themes/functionality/sticky-posts/) out of the box.

Our [sticky posts tutorial](/how-to-use-sticky-posts-with-facetwp/) explains workarounds you can implement to ignore sticky posts in FacetWP listings entirely or partially, and how to make them work if you actually want them.

    
## See also

    - [How to use sticky posts with FacetWP](https://facetwp.com/how-to-use-sticky-posts-with-facetwp/)
- [The facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
- [The facetwp_pre_filtered_post_ids hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_pre_filtered_post_ids/)
- [The facetwp_filtered_post_ids hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_filtered_post_ids/)

                    Last updated: June 21, 2024

---

## Can I use the offset query argument with FacetWP?

**Source:** [https://facetwp.com/help-center/faq/can-i-use-the-offset-query-argument-with-facetwp/](https://facetwp.com/help-center/faq/can-i-use-the-offset-query-argument-with-facetwp/)

No, not directly. FacetWP **does not work** with a directly set 
```
offset
```

 query argument.

See [our offset tutorial](/how-to-use-the-offset-query-argument-with-facetwp/) for an [explanation of the issues](/how-to-use-the-offset-query-argument-with-facetwp/#the-issues-with-using-offset), and [an alternative solution that lets you use offset indirectly](https://facetwp.com/how-to-use-the-offset-query-argument-with-facetwp/#an-alternative-offset-solution).

    
## See also

    - [How to use the offset query argument with FacetWP](https://facetwp.com/how-to-use-the-offset-query-argument-with-facetwp/)
- [How to use sticky posts with FacetWP](https://facetwp.com/how-to-use-sticky-posts-with-facetwp/)
- [How to filter or order a WP_Query by one or more custom fields](https://facetwp.com/how-to-filter-or-order-a-wp_query-by-one-or-more-custom-fields/)

                    Last updated: June 25, 2024

---

## Do I get plugin updates?

**Source:** [https://facetwp.com/help-center/faq/do-i-get-plugin-updates/](https://facetwp.com/help-center/faq/do-i-get-plugin-updates/)

As long as your [license is active](/help-center/installation/#whitelist-your-sites-and-activate-your-license-key), FacetWP will automatically notify you when new updates are available.

When your license expires, FacetWP will continue to work, but you will no longer receive plugin updates or [support](/help-center/get-support/).

If plugin updates are not appearing, see [this troubleshooting section](/help-center/installation/#solve-plugin-update-issues).

    
## See also

    - [Your account](https://facetwp.com/account/)
- [Installation and your account](https://facetwp.com/help-center/installation/)
- [FacetWP licenses and pricing](https://facetwp.com/pricing/)
- [Why is Wordfence showing an abandoned plugin warning?](https://facetwp.com/help-center/faq/why-is-wordfence-showing-an-abandoned-plugin-warning/)

                    Last updated: April 8, 2026

---

## Do local/staging/development sites count against my license plan’s site limit?

**Source:** [https://facetwp.com/help-center/faq/do-local-staging-development-sites-count-against-my-license-plans-site-limit/](https://facetwp.com/help-center/faq/do-local-staging-development-sites-count-against-my-license-plans-site-limit/)

No. You are allowed to activate your license on as many local, development or staging sites as needed. These kinds of sites do **not** count against the [allowed limit of your license plan](/help-center/installation/#license-key-restrictions).

To activate a license on such a site, browse to Settings > FacetWP > Settings > General, add your key to the “License key” field, and click the “Activate” button. These sites will **not** show up in [your account](/account/) and do **not** have to be [whitelisted manually](/help-center/installation/#whitelist-your-sites-and-activate-your-license-key), like normal/live sites.

To determine if a site is a local/staging/development site, our account system compares the URL to [these URL patterns](/help-center/installation/#whitelist-pattern).

    
## See also

    - [Installation and your account](https://facetwp.com/help-center/installation/)
- [FacetWP licenses and pricing](https://facetwp.com/pricing/)

                    Last updated: April 8, 2026

---

## Do you offer a free trial version?

**Source:** [https://facetwp.com/help-center/faq/do-you-offer-a-free-trial-version/](https://facetwp.com/help-center/faq/do-you-offer-a-free-trial-version/)

We offer a free trial version, with the following limitations:

1. Only **2 facets** will render on a page.
2. The trial is for **testing purposes only** (local / dev / staging sites).
3. A persistent admin notice will appear in the WP admin dashboard.
4. We will **not** respond to any support requests.

The free trial version [can be downloaded on this page](/free-trial/).

    
## See also

    - [Free Trial](https://facetwp.com/free-trial/)
- [What are facets?](https://facetwp.com/help-center/facets/)
- [Facet types](https://facetwp.com/help-center/facets/facet-types/)
- [Get support](https://facetwp.com/help-center/get-support/)
- [FacetWP licenses and pricing](https://facetwp.com/pricing/)

                    Last updated: May 9, 2025

---

## Do you offer custom development services?

**Source:** [https://facetwp.com/help-center/faq/do-you-offer-custom-development-services/](https://facetwp.com/help-center/faq/do-you-offer-custom-development-services/)

We do not current offer paid implementation services. For custom development (site buildouts, design tweaks, other customizations) we recommend [Codeable.io](https://codeable.io/?ref=LXTyA).

                    Last updated: June 28, 2022

---

## Do you offer refunds?

**Source:** [https://facetwp.com/help-center/faq/do-you-offer-refunds/](https://facetwp.com/help-center/faq/do-you-offer-refunds/)

No, we do not offer refunds. Please use our [free trial](/free-trial/) to see if FacetWP is right for you.

    
## See also

    - [Free Trial](https://facetwp.com/free-trial/)
- [FacetWP licenses and pricing](https://facetwp.com/pricing/)

                    Last updated: June 28, 2022

---

## Does FacetWP integrate with WooCommerce?

**Source:** [https://facetwp.com/help-center/faq/does-facetwp-integrate-with-woocommerce/](https://facetwp.com/help-center/faq/does-facetwp-integrate-with-woocommerce/)

Yes! FacetWP supports any plugin that uses post types to store products. [WooCommerce](/help-center/using-facetwp-with/woocommerce/), [Easy Digital Downloads](/help-center/using-facetwp-with/easy-digital-downloads/), and Jigoshop are all compatible.

One caveat: some page components (e.g. pagination and sorting) may need to be replaced with FacetWP facets for [paging](/help-center/facets/facet-types/pager/) and [sorting](/help-center/facets/facet-types/sort/), although FacetWP has built-in support for WooCommerce’s default [pagination](/help-center/using-facetwp-with/woocommerce/#using-woocommerce-pagination) and [sorting](/help-center/using-facetwp-with/woocommerce/#using-woocommerce-sort).

    
## See also

    - [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [Using FacetWP with WooCommerce plugins](https://facetwp.com/help-center/using-facetwp-with/woocommerce-plugins/)
- [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)

                    Last updated: June 28, 2022

---

## Does FacetWP support infinite scroll?

**Source:** [https://facetwp.com/help-center/faq/does-facetwp-support-infinite-scroll/](https://facetwp.com/help-center/faq/does-facetwp-support-infinite-scroll/)

No, FacetWP does not support infinite scroll. Any form of infinity load / infinite scroll / load more button that is added by other plugins, themes, blocks, or page builder modules/widgets **will not work as expected**. It may look like it is working because new posts are loaded, but the posts will not be correctly filtered by facets.

The closest thing is the [Pager facet](/help-center/facets/facet-types/pager/), which has a [pager type that generates a “Load more” button](/help-center/facets/facet-types/pager/#load-more-pager-type).

    
## See also

    - [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [Using a page builder](https://facetwp.com/help-center/listing-templates/using-a-page-builder/)
- [Using FacetWP with WordPress blocks](https://facetwp.com/help-center/using-facetwp-with/blocks/)
- [Why is my “load more” button/feature not working?](https://facetwp.com/help-center/faq/why-is-my-load-more-button-feature-not-working/)
- [Why is my pagination not working?](https://facetwp.com/help-center/faq/why-is-my-pagination-not-working/)
- [How to scroll the page on facet interaction](https://facetwp.com/how-to-scroll-the-page-on-facet-interaction/)

                    Last updated: November 27, 2024

---

## Does FacetWP support PHP8?

**Source:** [https://facetwp.com/help-center/faq/does-facetwp-support-php8/](https://facetwp.com/help-center/faq/does-facetwp-support-php8/)

Yes, FacetWP fully supports PHP 8.x.

The **minimum** supported version is PHP 7.0 (since [FacetWP v4.0](/whats-new-in-facetwp-4-0/)). The [PHP Stats page](/php-stats/) helps us determine when to drop support for older PHP versions.

    
## See also

    - [What are the system requirements?](https://facetwp.com/help-center/faq/what-are-the-system-requirements/)

                    Last updated: June 19, 2023

---

## Does FacetWP support pretty permalinks?

**Source:** [https://facetwp.com/help-center/faq/does-facetwp-support-pretty-permalinks/](https://facetwp.com/help-center/faq/does-facetwp-support-pretty-permalinks/)

We are occasionally asked whether FacetWP supports pretty URLs, e.g. 
```
/make/audi/model/a4/
```

 instead of 
```
?_make=audi&_model=a4
```

.

FacetWP only supports GET-based permalinks. “Pretty” permalinks quickly lose their appeal as more selections are made. Plus it may actually be **bad for SEO**, since search engines would see many different URLs with the same content.

That’s probably why most large eCommerce sites stick with GET-based permalinks.

For more info about FacetWP’s URL, see [this page](/help-center/developers/the-facetwp-url/).

    
## See also

    - [The FacetWP URL](https://facetwp.com/help-center/developers/the-facetwp-url/)

                    Last updated: September 7, 2022

---

## Does FacetWP support WordPress multi-site?

**Source:** [https://facetwp.com/help-center/faq/does-facetwp-support-wordpress-multi-site/](https://facetwp.com/help-center/faq/does-facetwp-support-wordpress-multi-site/)

Yes, FacetWP works well in a WordPress [multi-site network](https://wordpress.org/support/article/create-a-network/) setup. It can be activated in each sub-site individually, or you can use Network Activation (recommended). But be aware that each sub-site counts against your license’s [site limit](/pricing).

FacetWP will be able to filter content **within** each individual sub-site. It cannot filter or search **across** sub-sites, and there a no plans to support this in the future.

See [this page](/help-center/using-facetwp-with/wordpress-multi-site/) for more info about using FacetWP with multi-site.

    
## See also

    - [Using FacetWP with WordPress multi-site](https://facetwp.com/help-center/using-facetwp-with/wordpress-multi-site/)
- [Installation and your account](https://facetwp.com/help-center/installation/)
- [FacetWP licenses and pricing](https://facetwp.com/pricing/)

                    Last updated: July 3, 2024

---

## Does FacetWP work on WordPress.com?

**Source:** [https://facetwp.com/help-center/faq/does-facetwp-work-on-wordpress-com/](https://facetwp.com/help-center/faq/does-facetwp-work-on-wordpress-com/)

No, FacetWP is a plugin for [self-hosted](https://wordpress.org/download/) WordPress installs.

                    Last updated: June 28, 2022

---

## Does FacetWP work with my theme?

**Source:** [https://facetwp.com/help-center/faq/does-facetwp-work-with-my-theme/](https://facetwp.com/help-center/faq/does-facetwp-work-with-my-theme/)

*Probably*. There’s tens of thousands of themes out there. If you [tell us](/about-us/) which theme, and we’ll try to figure out whether the theme is compatible.

    
## See also

    - [Using FacetWP with the Listable theme](https://facetwp.com/help-center/using-facetwp-with/listable/)
- [Using FacetWP with the Listify theme](https://facetwp.com/help-center/using-facetwp-with/listify/)
- [Using FacetWP with the Flatsome theme](https://facetwp.com/help-center/using-facetwp-with/flatsome/)
- [Using FacetWP with Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/)
- [Using FacetWP with Beaver Builder](https://facetwp.com/help-center/using-facetwp-with/beaver-builder/)

                    Last updated: May 4, 2023

---

## Does FacetWP work with object caching?

**Source:** [https://facetwp.com/help-center/faq/does-facetwp-work-with-object-caching/](https://facetwp.com/help-center/faq/does-facetwp-work-with-object-caching/)

No, in most cases not. See [our page on object caching](/help-center/using-facetwp-with/object-caching/) for more information.

    
## See also

    - [Using FacetWP with object caching](https://facetwp.com/help-center/using-facetwp-with/object-caching/)
- [Why am I seeing “FacetWP was unable to auto-detect the post listing”?](https://facetwp.com/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/)
- [Using FacetWP with WP Engine](https://facetwp.com/help-center/using-facetwp-with/wp-engine/)
- [Using FacetWP with Pressable](https://facetwp.com/help-center/using-facetwp-with/pressable/)
- [Using FacetWP with Timber](https://facetwp.com/help-center/using-facetwp-with/timber/)
- [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)

                    Last updated: June 4, 2026

---

## Does FacetWP work with SearchWP Live Ajax Search?

**Source:** [https://facetwp.com/help-center/faq/does-facetwp-work-with-searchwp-live-ajax-search/](https://facetwp.com/help-center/faq/does-facetwp-work-with-searchwp-live-ajax-search/)

FacetWP does **not** integrate with the [SearchWP Live Ajax Search plugin](https://wordpress.org/plugins/searchwp-live-ajax-search/) (which is a separate plugin from [SearchWP](/help-center/using-facetwp-with/searchwp/), that FacetWP integrates with).

FacetWP has a different goal, which is to narrow down a listing, whereas SearchWP Live Ajax Search’s goal is to take users directly to a single result page.

With SearchWP installed, you can have a [SearchWP-enabled Search facet](/help-center/using-facetwp-with/searchwp/#setup) on the page, to filter a [listing](/help-center/listing-templates/) together with other [facets](/help-center/facets/). But any Live Ajax Search box will function separately from that.

    
## See also

    - [Using FacetWP with SearchWP](https://facetwp.com/help-center/using-facetwp-with/searchwp/)
- [The Search facet type](https://facetwp.com/help-center/facets/facet-types/search/)
- [What are facets?](https://facetwp.com/help-center/facets/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)

                    Last updated: August 14, 2025

---

## How can I add a prefix, suffix, or HTML to facet choice labels?

**Source:** [https://facetwp.com/help-center/faq/how-can-i-add-a-prefix-suffix-or-html-to-facet-choice-labels/](https://facetwp.com/help-center/faq/how-can-i-add-a-prefix-suffix-or-html-to-facet-choice-labels/)

For some data source types, you may want to add a prefix or suffix to each facet choice. For example, if the data is stored in an [ACF](/help-center/using-facetwp-with/advanced-custom-fields/) [Number field](https://www.advancedcustomfields.com/resources/number/), but it’s actually a price or a weight. In those instances, you may want to prepend the choice label with a currency sign, e.g. 
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

 hook, this is very easy to do. You can [prepend or append any text you like](/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/#add-a-prefix-or-suffix-to-facet-choice-labels). You can also use HTML.

If needed, you can do this conditionally, only for a specific facet or facet type. Or based on choice parameters like its hierarchical depth, or if it is selected.

Note:Some facet types already have a prefix or suffix setting of their own, like the [Slider facet type](/help-center/facets/facet-types/slider/#prefix), and the [Exclude facet type](/help-center/facets/facet-types/exclude/#prefix).
    
## See also

    - [The facetwp_facet_display_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/)
- [The Slider facet type](https://facetwp.com/help-center/facets/facet-types/slider/)
- [The Exclude facet type](https://facetwp.com/help-center/facets/facet-types/exclude/)

                    Last updated: April 23, 2026

---

## How can I change my account email address?

**Source:** [https://facetwp.com/help-center/faq/how-can-i-change-my-account-email-address/](https://facetwp.com/help-center/faq/how-can-i-change-my-account-email-address/)

If you want to change your account name or email address, log in to [your account](/account/). At the top of the page, click the pencil icon next to your name or email address to change it.

![How to change your account name and email address.](https://facetwp.com/wp-content/uploads/2026/04/account_change_name_email.png)How to change your account name and email address.
If you cannot access the current email address to receive the login link, please [open a support ticket](/help-center/get-support/).

Note that the account name also appears on [your invoice](/help-center/installation/#generate-download-or-customize-your-invoice).

Tip:It is also possible to [add one or more account manager emails to your account](/help-center/installation/#add-a-manager-email-address), so that multiple people can access the same account with their own email address.
    
## See also

    - [Your account](https://facetwp.com/account/)
- [Installation and your account](https://facetwp.com/help-center/installation/)
- [Get support](https://facetwp.com/help-center/get-support/)
- [Can I add multiple users to my account?](https://facetwp.com/help-center/faq/can-i-add-multiple-users-to-my-account/)

                    Last updated: April 8, 2026

---

## How can I change my payment/billing info or payment method?

**Source:** [https://facetwp.com/help-center/faq/how-can-i-change-my-payment-billing-info/](https://facetwp.com/help-center/faq/how-can-i-change-my-payment-billing-info/)

You can change your subscription payment details in [your account](/account/), in the “Subscriptions” section.

See [this section on the installation and account page](https://facetwp.com/help-center/installation/#change-your-subscription-payment) for more info.

    
## See also

    - [Your account](https://facetwp.com/account/)
- [Installation and your account](https://facetwp.com/help-center/installation/)

                    Last updated: April 8, 2026

---

## How can I create an image facet?

**Source:** [https://facetwp.com/help-center/faq/how-can-i-create-an-image-facet/](https://facetwp.com/help-center/faq/how-can-i-create-an-image-facet/)

There are multiple ways to create a facet with images.

If you have a facet based on a taxonomy or custom (text) field, you can use the 
```
facetwp_facet_display_value
```

 hook to [change the facet’s choices into images, using the term or field value in the image file name](/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/#display-facet-choices-as-images).

Another option is to [create an image facet based on an Advanced Custom Fields Image field type](/help-center/using-facetwp-with/advanced-custom-fields/#create-an-image-facet), using the selected images directly.

    
## See also

    - [The facetwp_facet_display_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)
- [How to add a “Has featured image?” facet](https://facetwp.com/how-to-add-a-has-featured-image-facet/)

                    Last updated: August 9, 2024

---

## How can I disable the admin notices to install add-on integrations?

**Source:** [https://facetwp.com/help-center/faq/how-can-i-disable-the-admin-notices-to-install-add-on-integrations/](https://facetwp.com/help-center/faq/how-can-i-disable-the-admin-notices-to-install-add-on-integrations/)

Since version 4.1.8 FacetWP displays admin notices when you have certain plugins installed and the necessary [integration add-ons](/add-ons/) are missing.

These notices were added because many users are unaware of the fact that some plugins do not work with FacetWP unless the related add-on is installed. For example, WPML needs the [Multilingual add-on](/help-center/using-facetwp-with/multilingual/) installed to work with FacetWP.

There are certain situations however in which you don’t need the integration add-ons. In these cases you can permanently disable these notices by adding the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_dismiss_notices', '__return_true' );
```

    
## See also

    - [FacetWP Add-Ons](https://facetwp.com/add-ons/)
- [Installation and your account](https://facetwp.com/help-center/installation/)
- [Using FacetWP with Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/)

                    Last updated: April 11, 2024

---

## How can I filter or order a query by a custom field value?

**Source:** [https://facetwp.com/help-center/faq/how-can-i-filter-or-sort-a-query-by-one-or-more-custom-fields/](https://facetwp.com/help-center/faq/how-can-i-filter-or-sort-a-query-by-one-or-more-custom-fields/)

Although this is not really FacetWP-related, we get this question a lot in support.

We wrote [this tutorial](/how-to-filter-or-order-a-wp_query-by-one-or-more-custom-fields/) to explain how to use 
```
meta_query
```

 to filter or sort queries by one or more custom field values.

    
## See also

    - [How to filter or order a WP_Query by one or more custom fields](https://facetwp.com/how-to-filter-or-order-a-wp_query-by-one-or-more-custom-fields/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [The facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
- [How to use sticky posts with FacetWP](https://facetwp.com/how-to-use-sticky-posts-with-facetwp/)
- [How to use the offset query argument with FacetWP](https://facetwp.com/how-to-use-the-offset-query-argument-with-facetwp/)
- [How to order a WP_Query by terms or categories](https://facetwp.com/how-to-order-a-wp_query-by-terms-or-categories/)
- [Random ordering in FacetWP](https://facetwp.com/random-ordering-in-facetwp/)

                    Last updated: December 18, 2025

---

## How can I get a (customized) invoice?

**Source:** [https://facetwp.com/help-center/faq/how-can-i-get-a-customized-invoice/](https://facetwp.com/help-center/faq/how-can-i-get-a-customized-invoice/)

To view or download an invoice, log in to [your account](/account/) and scroll down to the “Purchase History” section. Click the “View Invoice” link on the right of the purchase you want to generate an invoice for. This will take you to the invoice, which you can print or download as a PDF with the button at the top.

![How to view and download an invoice for your purchase.](https://facetwp.com/wp-content/uploads/2026/04/account_view_download_invoice.png)How to view and download an invoice for your purchase.
If you want to customize the billing details on the invoice, for example, to add a company name, a billing address, or a tax/VAT number, go to the top of the account page, and click the pencil icon next to “Invoice details”:

![How to change your invoice/billing details.](https://facetwp.com/wp-content/uploads/2026/04/account_change_invoice_details.png)How to change your invoice/billing details.
The saved content will show up in the PDF invoice under your name, under “Bill to”. The invoice name can be changed by clicking the pencil icon next to your name.

    
## See also

    - [Your account](https://facetwp.com/account/)
- [Installation and your account](https://facetwp.com/help-center/installation/)

                    Last updated: April 8, 2026

---

## How can I order a query by terms or categories?

**Source:** [https://facetwp.com/help-center/faq/how-can-i-order-a-query-by-terms-or-categories/](https://facetwp.com/help-center/faq/how-can-i-order-a-query-by-terms-or-categories/)

Although this is not really FacetWP-related, we often get this question. With the bonus question of how to add a term heading above each group of posts sharing a term/category.

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

Both workarounds are quite complicated to implement and may not work in all situations. So if you can avoid this, we recommend using another [built-in](https://developer.wordpress.org/reference/classes/wp_query/#order-orderby-parameters) 
```
orderby
```

 parameter.

    
## See also

    - [How to order a WP_Query by terms or categories](https://facetwp.com/how-to-order-a-wp_query-by-terms-or-categories/)
- [How to filter or order a WP_Query by one or more custom fields](https://facetwp.com/how-to-filter-or-order-a-wp_query-by-one-or-more-custom-fields/)
- [Random ordering in FacetWP](https://facetwp.com/random-ordering-in-facetwp/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [The facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
- [How to use sticky posts with FacetWP](https://facetwp.com/how-to-use-sticky-posts-with-facetwp/)
- [How to use the offset query argument with FacetWP](https://facetwp.com/how-to-use-the-offset-query-argument-with-facetwp/)

                    Last updated: March 24, 2026

---

## How to show only certain levels in a hierarchical facet?

**Source:** [https://facetwp.com/help-center/faq/how-can-i-show-only-certain-levels-in-a-hierarchical-facet/](https://facetwp.com/help-center/faq/how-can-i-show-only-certain-levels-in-a-hierarchical-facet/)

If you have a facet with a taxonomy or categories as data source, you may want to show only the parent terms/categories, and/or only one or more child levels.

This can be achieved [with the facetwp_index_row hook](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#usage-examples).

This highly versatile hook can also be used to do [all kinds of other manipulations of indexed facet choices](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#applications).

    
## See also

    - [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)

                    Last updated: November 28, 2025

---

## How can I style a Dropdown facet or select element consistently across browsers?

**Source:** [https://facetwp.com/help-center/faq/how-can-i-style-a-dropdown-facet-or-select-element-consistently-across-browsers/](https://facetwp.com/help-center/faq/how-can-i-style-a-dropdown-facet-or-select-element-consistently-across-browsers/)

![A cross-browser styled select dropdown in a facet.](https://facetwp.com/wp-content/uploads/2026/04/cross-browser-styled-dropdown.png)A cross-browser styled 
```
<select>
```

 dropdown in a facet.
The 
```
<select>
```

 element that the [Dropdown facet](/help-center/facets/facet-types/dropdown/) and many other facet types use in their UI, is notoriously difficult to style consistently across browsers, but it can be done.

See [this section](/help-center/facets/facet-types/dropdown/#style-a-dropdown-consistently-across-browsers) for a set of CSS styles to start from. These will style FacetWP’s dropdowns consistently cross-browser, and make them look like the image on the right.

    
## See also

    - [The Dropdown facet type](https://facetwp.com/help-center/facets/facet-types/dropdown/)
- [The Proximity facet type](https://facetwp.com/help-center/facets/facet-types/proximity/)
- [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [The Hierarchy Select facet type](https://facetwp.com/help-center/facets/facet-types/hierarchy-select/)
- [The Range List facet type](https://facetwp.com/help-center/facets/facet-types/range-list/)
- [The Time Since facet type](https://facetwp.com/help-center/facets/facet-types/time-since/)
- [The Exclude facet type](https://facetwp.com/help-center/facets/facet-types/exclude/)

                    Last updated: April 23, 2026

---

## How can I upgrade my license plan?

**Source:** [https://facetwp.com/help-center/faq/how-can-i-upgrade-my-license-plan/](https://facetwp.com/help-center/faq/how-can-i-upgrade-my-license-plan/)

We currently offer [four license plans](/pricing/): **Basic** (3 sites), **Professional** (20 sites), **Agency** (100 sites), and **Enterprise** (500 sites).

You can upgrade your plan at any time. The system will automatically calculate the prorated upgrade cost for the remainder of the running subscription period. Note that we cannot process downgrades this way.

To upgrade your current license plan to a higher tier, log into [your account](/account/), scroll down to the Subscriptions section, and click the blue “Upgrade…” button beside the active subscription:

![Click 'Upgrade' to upgrade to a higher license tier.](https://facetwp.com/wp-content/uploads/2026/04/account_upgrade_tier.png)Click “Upgrade” to upgrade to a higher license tier.
See [this section](/help-center/installation/#upgrade-to-a-higher-license-tier) for more information about the upgrading procedure.

Note that running [PayPal subscriptions will automatically be switched to Stripe when upgrading them to a higher tier](/help-center/installation/#upgrade-a-paypal-subscription).

    
## See also

    - [Your account](https://facetwp.com/account/)
- [Installation and your account](https://facetwp.com/help-center/installation/)
- [FacetWP licenses and pricing](https://facetwp.com/pricing/)

                    Last updated: April 8, 2026

---

## How do I display the active facet selections?

**Source:** [https://facetwp.com/help-center/faq/how-do-i-display-the-active-facet-selections/](https://facetwp.com/help-center/faq/how-do-i-display-the-active-facet-selections/)

There is a facet type for that: [User Selections](/help-center/facets/facet-types/user-selections/). After adding its shortcode, it will display the active facet selections, and allows each selection to be unselected individually. By default, the selections are preceded by the facet’s label:

![FacetWP User Selections facet](https://facetwp.com/wp-content/uploads/2022/03/userselections-bare.png)The User Selections facet
The User Selections facet is a good companion for a [Reset facet](/help-center/facets/facet-types/reset/), which resets all choices at once (or, depending on its settings, a selection of facets).

    
## See also

    - [The User Selections facet type](https://facetwp.com/help-center/facets/facet-types/user-selections/)
- [The Reset facet type](https://facetwp.com/help-center/facets/facet-types/reset/)

                    Last updated: March 31, 2026

---

## How fast is FacetWP?

**Source:** [https://facetwp.com/help-center/faq/how-fast-is-facetwp/](https://facetwp.com/help-center/faq/how-fast-is-facetwp/)

Important:First of all, make sure to **disable Debug Mode** in Settings > FacetWP > Settings. Depending on your site, Debug Mode can sometimes influence loading speeds.
FacetWP was built with performance in mind and is [very fast itself](/help-center/developers/facetwp-performance-speed-limits-and-scalability/). We’ve structured and highly optimized our data storage and have analyzed every query to make sure that it runs as efficiently as possible.

So ultimately, FacetWP’s speed depends on your server, the theme setup, your plugins, and the amount of content. If your server is overloaded (i.e. too many heavy plugins or other users) or underpowered (too little memory or CPU power), then obviously FacetWP will not run at its peak.

See [our guide on how to make your website load faster](/how-to-make-your-website-load-faster/) for an overview to get you started with increasing server and website performance.

Factors that determine the speed of filtering *itself*:

- the type of [listing template](/help-center/listing-templates/) used
- the total number of results in your listing
- the number of posts per page
- the number of queries and amount of HTML per post item
- the number of active facets on the page
- the [facet types](/help-center/facets/facet-types/) in use
- [caching of FacetWP’s AJAX requests](/help-center/add-on-features-and-extras/caching/)

You can read more about each of these factors in [our performance article](/help-center/developers/facetwp-performance-speed-limits-and-scalability/#speed-up-facet-filtering-itself), which also describes the possible causes of slow filtering, and FacetWP’s speed and limitations when indexing, filtering and searching.

If you want to increase the (true, uncached) loading speed of your pages with facets, check out our tutorial about [how to use Query Monitor to optimize performance](/how-to-use-query-monitor-to-optimize-performance/) by optimizing your database queries.

We also have a free [Caching add-on](/help-center/add-on-features-and-extras/caching/) that caches FacetWP’s AJAX requests, which may help on high-traffic sites.

    
## See also

    - [FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
- [How to use Query Monitor to optimize performance](https://facetwp.com/how-to-use-query-monitor-to-optimize-performance/)
- [How to make your website load faster](https://facetwp.com/how-to-make-your-website-load-faster/)
- [The Caching add-on](https://facetwp.com/help-center/add-on-features-and-extras/caching/)
- [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)

                    Last updated: February 20, 2024

---

## How much do renewals cost?

**Source:** [https://facetwp.com/help-center/faq/how-much-do-renewals-cost/](https://facetwp.com/help-center/faq/how-much-do-renewals-cost/)

By default, if you did not [cancel it](/help-center/installation/#cancel-your-subscription), your subscription will **automatically renew** after one year.

A 20% discount on the [normal price](/pricing/) is automatically applied when your subscription is [renewed](/help-center/installation/#renewals).

    
## See also

    - [Your account](https://facetwp.com/account/)
- [Installation and your account](https://facetwp.com/help-center/installation/)
- [FacetWP licenses and pricing](https://facetwp.com/pricing/)

                    Last updated: April 8, 2026

---

## How to add a loading spinner or fade the results during facet refresh?

**Source:** [https://facetwp.com/help-center/faq/how-to-add-a-loading-spinner-or-fade-the-results-during-facet-refresh/](https://facetwp.com/help-center/faq/how-to-add-a-loading-spinner-or-fade-the-results-during-facet-refresh/)

[This tutorial](/how-to-add-a-loading-text-or-spinner-icon-to-the-listing-template-during-refresh/) explains how to add a loading text or spinner icon to the listing template during facet refresh.

You can also [fade the listing template during refresh](/how-to-fade-the-listing-template-during-refresh/), or [hide it until facets are selected](/how-to-hide-the-listing-template-until-facets-are-selected/).

    
## See also

    - [How to add a loading text or spinner icon to the listing template during refresh](https://facetwp.com/how-to-add-a-loading-text-or-spinner-icon-to-the-listing-template-during-refresh/)
- [How to fade the listing template during refresh](https://facetwp.com/how-to-fade-the-listing-template-during-refresh/)
- [How to hide the listing template until facets are selected](https://facetwp.com/how-to-hide-the-listing-template-until-facets-are-selected/)

                    Last updated: November 29, 2023

---

## How to add a Map facet to single posts or pages?

**Source:** [https://facetwp.com/help-center/faq/how-to-add-a-map-facet-to-single-posts-or-pages/](https://facetwp.com/help-center/faq/how-to-add-a-map-facet-to-single-posts-or-pages/)

We often get the question if it is possible to use [the Map add-on](/help-center/facets/facet-types/map/) to show a map on a singular page, post, or custom post type post. A use case would be to show the location of the store, hotel, restaurant, or event on that page.

This is possible, and actually not very complicated. Just follow [the steps described in this tutorial](https://facetwp.com/how-to-add-a-map-facet-to-single-posts-or-pages/).

    
## See also

    - [How to add a Map facet to single posts or pages](https://facetwp.com/how-to-add-a-map-facet-to-single-posts-or-pages/)
- [The Map facet type](https://facetwp.com/help-center/facets/facet-types/map/)
- 

                    Last updated: September 9, 2025

---

## How to add labels / headings above each facet?

**Source:** [https://facetwp.com/help-center/faq/how-to-add-labels-headings-above-each-facet/](https://facetwp.com/help-center/faq/how-to-add-labels-headings-above-each-facet/)

See [this explanation](/help-center/facets/#how-to-add-labels-headings-above-each-facet) on how to add headings above facets, and how to customize them.

    
## See also

    - [What are facets?](https://facetwp.com/help-center/facets/)

                    Last updated: June 28, 2022

---

## How to create a month and/or year facet?

**Source:** [https://facetwp.com/help-center/faq/how-to-create-a-month-and-or-year-facet/](https://facetwp.com/help-center/faq/how-to-create-a-month-and-or-year-facet/)

![A Checkboxes facet to filter by month and year.](https://facetwp.com/wp-content/uploads/2025/01/month-year-facet.png)A Checkboxes facet to filter by month and year. This can also be [just years or months](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#create-a-month-year-facet).
You can use the 
```
facetwp_index_row
```

 hook to [create a facet with months and years (or only years or months) as facet choices](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#create-a-month-year-facet).

The facet’s data source can be the Post Date or any other custom field that stores dates, like the [ACF Date (Time) Picker field](/help-center/using-facetwp-with/advanced-custom-fields/#using-a-date-picker-or-date-time-picker-field).

To create a facet that filters posts by date / time **since** a specified interval, you can use the [Time Since facet type](/help-center/facets/facet-types/time-since/).

    
## See also

    - [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)
- [The Time Since facet type](https://facetwp.com/help-center/facets/facet-types/time-since/)
- [How to create a past/future facet?](https://facetwp.com/help-center/faq/how-to-create-a-past-future-facet/)

                    Last updated: February 11, 2026

---

## How to create a past/future facet?

**Source:** [https://facetwp.com/help-center/faq/how-to-create-a-past-future-facet/](https://facetwp.com/help-center/faq/how-to-create-a-past-future-facet/)

![A future/past Time Since facet.](https://facetwp.com/wp-content/uploads/2026/01/time-since-future-past.png)A future/past facet.
To create a past/future facet, you can [use the Time Since facet type](/help-center/facets/facet-types/time-since/#create-a-past-future-facet), or any other facet type [using the facetwp_index_row hook](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/#create-a-past-future-facet).

The facet’s data source can be the Post Date or any other custom field that stores dates, like the [ACF Date (Time) Picker field](/help-center/using-facetwp-with/advanced-custom-fields/#using-a-date-picker-or-date-time-picker-field).

    
## See also

    - [The Time Since facet type](https://facetwp.com/help-center/facets/facet-types/time-since/)
- [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)
- [How to create a month and/or year facet?](https://facetwp.com/help-center/faq/how-to-create-a-month-and-or-year-facet/)

                    Last updated: February 11, 2026

---

## How to hide empty facets?

**Source:** [https://facetwp.com/help-center/faq/how-to-hide-empty-facets/](https://facetwp.com/help-center/faq/how-to-hide-empty-facets/)

![To be able to hide empty facets, the 'Show ghosts' setting must be disabled.](https://facetwp.com/wp-content/uploads/2022/04/showghosts-off.png)To be able to hide empty facets, the “Show ghosts” setting must be **disabled**.
A facet can become empty when it has no choices left after filtering. But only if its “Show ghost” setting (if it has that) is not enabled.

Facets can also be empty *before* filtering, if they have no choices indexed/available for the posts in the listing. Or if the listing template’s query has 
```
0
```

 results.

Although empty facets may become invisible because their container element is empty, FacetWP does not actively hide them (except [in the Mobile Flyout](/help-center/add-on-features-and-extras/mobile-flyout/#hide-empty-facets-in-the-flyout)). So if there is styling attached to the facet container, it will remain visible.

To hide empty facets using a custom code snippet, follow the instructions in [this section](/help-center/facets/#how-to-hide-empty-facets).

Note that if your facets are added with a Facet block (available in the [Blocks add-on](/help-center/using-facetwp-with/blocks/) v0.3+), you need to use [the Facet block’s “Hide when empty” setting](/help-center/using-facetwp-with/blocks/#the-hide-when-empty-setting) instead, which does the same as the custom code.

    
## See also

    - [What are facets?](https://facetwp.com/help-center/facets/)
- [How to hide the listing template until facets are selected](https://facetwp.com/how-to-hide-the-listing-template-until-facets-are-selected/)
- [Using FacetWP with WordPress blocks](https://facetwp.com/help-center/using-facetwp-with/blocks/)
- [The Mobile Flyout add-on](https://facetwp.com/help-center/add-on-features-and-extras/mobile-flyout/)

                    Last updated: February 19, 2026

---

## How to hide facet counts?

**Source:** [https://facetwp.com/help-center/faq/how-to-hide-facet-counts/](https://facetwp.com/help-center/faq/how-to-hide-facet-counts/)

How to hide the counts depends on the facet type and how general or specific you want to target facets to hide the counts for.

Facets with a dropdown UI type need a different approach than facets with checkboxes or radios. Some facets can have different UI types, so the method varies.

How to hide counts for facets of type:

- [Checkboxes](/help-center/facets/facet-types/checkboxes/#hide-counts)
- [Dropdown](/help-center/facets/facet-types/dropdown/#hide-counts)
- [Radio](/help-center/facets/facet-types/radio/#hide-counts)
- [fSelect](/help-center/facets/facet-types/fselect/#hide-or-customize-the-counts)
- [Hierarchy](/help-center/facets/facet-types/hierarchy/#hide-counts)
- [Hierarchy Select](/help-center/facets/facet-types/hierarchy-select/#hide-counts)
- [Range List](/help-center/facets/facet-types/range-list/#hide-counts)
- [Time Since](/help-center/facets/facet-types/time-since/#hide-counts)

                    Last updated: December 19, 2024

---

## How to let a facet display only child terms of the current term on a taxonomy archive page?

**Source:** [https://facetwp.com/help-center/faq/how-to-let-the-facet-display-only-child-terms-of-the-archives-current-term/](https://facetwp.com/help-center/faq/how-to-let-the-facet-display-only-child-terms-of-the-archives-current-term/)

If you have a category/tag/taxonomy term archive page with a facet on it that uses the same hierarchical category/tag/taxonomy as its data source, the facet will display **all** choices (terms) for which posts on that page have been indexed. And as posts can have multiple terms selected, this can include terms anywhere in the taxonomy’s term hierarchy, not only children of the archive’s current term.

To let the facet display only child terms of the archive’s current term (with or without the current term itself), you can use the 
```
facetwp_facet_render_args
```

 hook to [remove all terms from the facet that are not a child term of the current term of the archive template](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/#remove-facet-choices-that-are-not-children-of-the-current-term).

If you choose to keep the current term, it is available to [automatically pre-select it in the facet on page load](/how-to-pre-select-facet-choices/#pre-select-a-facet-choice-for-a-category-tag-or-taxonomy-term-archive), and again [after a reset](/how-to-pre-select-facet-choices/#reset-preselected-value-term-archive).

    
## See also

    - [The facetwp_facet_render_args hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_render_args/)
- [How to pre-select facet choices](https://facetwp.com/how-to-pre-select-facet-choices/)
- [The facetwp_template_use_archive hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/)
- [What are posts, post types, taxonomies and custom fields?](https://facetwp.com/what-are-posts-post-types-taxonomies-and-custom-fields/)
- [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)

                    Last updated: November 28, 2025

---

## How to pre-select facet choices?

**Source:** [https://facetwp.com/help-center/faq/how-to-pre-select-facet-choices/](https://facetwp.com/help-center/faq/how-to-pre-select-facet-choices/)

Check out [this tutorial](/how-to-pre-select-facet-choices/) to learn how to pre-select facet choices on page load, using the 
```
facetwp_preload_url_vars
```

 hook.

This hook can also be used to [pre-select the current term in a taxonomy-based facet on a category, tag, or taxonomy term archive](/how-to-pre-select-facet-choices/#pre-select-a-facet-choice-for-a-category-tag-or-taxonomy-term-archive).

    
## See also

    - [How to pre-select facet choices](https://facetwp.com/how-to-pre-select-facet-choices/)
- [The facetwp_preload_url_vars hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_preload_url_vars/)
- [How to let a facet display only child terms of the current term on a taxonomy archive page?](https://facetwp.com/help-center/faq/how-to-let-the-facet-display-only-child-terms-of-the-archives-current-term/)
- [The facetwp_template_use_archive hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/)
- [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)

                    Last updated: November 28, 2025

---

## How to automatically scroll the page on facet interaction?

**Source:** [https://facetwp.com/help-center/faq/how-to-scroll-the-page-on-facet-interaction/](https://facetwp.com/help-center/faq/how-to-scroll-the-page-on-facet-interaction/)

An often-asked question is how to automatically scroll the page to the results (or to the top of the page, or another target) when using facets, a specific face (type), or even a specific facet choice.

Our [page scrolling tutorial](/how-to-scroll-the-page-on-facet-interaction/) shows a wide range of examples that should cover most scrolling scenarios.

Pagination scrolling can be enabled with the Pager facet’s [scroll target setting](/help-center/facets/facet-types/pager/#scroll-target) (available since FacetWP 4.2.12).

Note: Except with the Pager facet’s [scroll target setting](/help-center/facets/facet-types/pager/#scroll-target), FacetWP and its add-ons do not add any scrolling behavior anywhere. If you see **unwanted scrolling behavior**, check your theme settings and other plugins. If you are using the Beaver Builder add-on, check if you have Beaver Builder’s “Render CSS/JS assets inline” setting enabled, or if you are using the 
```
fl_builder_render_assets_inline
```

 filter hook, [which both cause a JavaScript error that re-enables Beaver Builder’s page scroll that is prevented by FacetWP’s Beaver Builder add-on](/help-center/using-facetwp-with/beaver-builder/#prevent-unwanted-scrolling).
    
## See also

    - [How to scroll the page on facet interaction](https://facetwp.com/how-to-scroll-the-page-on-facet-interaction/)
- [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [Using FacetWP with Beaver Builder](https://facetwp.com/help-center/using-facetwp-with/beaver-builder/)
- [FAQ: Why is my page scrolling?](https://facetwp.com/help-center/faq/why-is-my-page-scrolling/)

                    Last updated: March 22, 2024

---

## How to track pageviews with Google Analytics?

**Source:** [https://facetwp.com/help-center/faq/how-to-track-pageviews-with-google-analytics/](https://facetwp.com/help-center/faq/how-to-track-pageviews-with-google-analytics/)

[This page](/help-center/using-facetwp-with/google-analytics-4/) explains how to track pageviews of facet pages with Google Analytics 4.

    
## See also

    - [How to track facet pages with Google Analytics 4](https://facetwp.com/help-center/using-facetwp-with/google-analytics-4/)

                    Last updated: June 19, 2023

---

## I forgot my account email address

**Source:** [https://facetwp.com/help-center/faq/i-forgot-my-account-email-address/](https://facetwp.com/help-center/faq/i-forgot-my-account-email-address/)

If you forgot which email address you used for [your account](/account/), [open a support ticket](/help-center/get-support/) from within the plugin settings. We can see your payment ID in the ticket and can retrieve your email address.

    
## See also

    - [Your account](https://facetwp.com/account/)
- [Installation and your account](https://facetwp.com/help-center/installation/)
- [I lost access to the account email address](https://facetwp.com/help-center/faq/i-lost-access-to-the-account-email-address/)
- [Get support](https://facetwp.com/help-center/get-support/)

                    Last updated: June 26, 2026

---

## I lost access to the account email address

**Source:** [https://facetwp.com/help-center/faq/i-lost-access-to-the-account-email-address/](https://facetwp.com/help-center/faq/i-lost-access-to-the-account-email-address/)

If you lost access to the account email address, for example because someone left your company, [open a support ticket](/help-center/get-support/) from within the plugin settings. We can send you an [access link](https://facetwp.com/help-center/installation/#create-and-send-access-links) which can be used for 8 hours, to log in and change the main account email address.

    
## See also

    - [Your account](https://facetwp.com/account/)
- [Installation and your account](https://facetwp.com/help-center/installation/)
- [I forgot my account email address](https://facetwp.com/help-center/faq/i-forgot-my-account-email-address/)
- [Get support](https://facetwp.com/help-center/get-support/)

                    Last updated: June 26, 2026

---

## I’m not a developer. Can I still use FacetWP?

**Source:** [https://facetwp.com/help-center/faq/im-not-a-developer-can-i-still-use-facetwp/](https://facetwp.com/help-center/faq/im-not-a-developer-can-i-still-use-facetwp/)

See our [Getting Started](/help-center/getting-started/) screencast. If the video doesn’t make sense to you, then you’ll probably need to find a developer to assist you.

    
## See also

    - [Getting started](https://facetwp.com/help-center/getting-started/)
- [How FacetWP works](https://facetwp.com/help-center/developers/how-facetwp-works/)

                    Last updated: June 28, 2022

---

## Is there a button, tab, or toggle/switch facet type?

**Source:** [https://facetwp.com/help-center/faq/is-there-a-button-tab-or-toggle-switch-facet-type/](https://facetwp.com/help-center/faq/is-there-a-button-tab-or-toggle-switch-facet-type/)

No, but most [facet types](/help-center/facets/facet-types/) can easily be styled to your liking, as long as their functionality works for your use case. They consist of simple HTML, like nested 
```
<div>
```

 and 
```
<span>
```

 elements. Even the ones that look like they use real HTML form elements, for example, the [Checkboxes](/help-center/facets/facet-types/checkboxes) and [Radio](/help-center/facets/facet-types/radio) facet types, use simple CSS background images for their icons.

Some styling examples:

- To display single-select facet choices as **buttons or pills**, you could re-style a Radio facet. [This example shows how to display a Radio facet as a horizontal row of buttons/pills](/help-center/facets/facet-types/radio/#style-radio-facet-choices-as-buttons).
- To display single-select facet choices as **tabs**, you could also re-style a Radio facet. [This example shows how to display a Radio facet as a horizontal row of tabs](/help-center/facets/facet-types/radio/#style-radio-facet-choices-as-tabs).
- To display multiple-select facet choices as **toggles or switches**, you could re-style a Checkboxes facet. [This example shows how to use SVG icons to make checkbox choices look like toggle switches](/help-center/facets/facet-types/checkboxes/#style-checkboxes-facet-choices-as-toggles).

---

## Is there a single-select Checkboxes facet type?

**Source:** [https://facetwp.com/help-center/faq/is-there-a-single-select-checkboxes-facet-type/](https://facetwp.com/help-center/faq/is-there-a-single-select-checkboxes-facet-type/)

A [Checkboxes facet](/help-center/facets/facet-types/checkboxes/) is multi-select by definition. There is currently no direct way or setting to make it single-select.

An option would be to use a single-select [Radio facet](/help-center/facets/facet-types/radio/) instead, and [change its radio icons to checkbox icons with a few lines of CSS](/help-center/facets/facet-types/radio/#style-radio-facet-choices-as-checkboxes). However, keep in mind that a Radio facet cannot display a hierarchy of choices, like the Checkboxes facet can (with its [Hierarchical setting](https://facetwp.com/help-center/facets/facet-types/checkboxes/#hierarchical) enabled).

Another alternative would be a single-select [fSelect facet](/help-center/facets/facet-types/fselect/), with its [multi-select](/help-center/facets/facet-types/fselect/#multi-select) setting disabled.

    
## See also

    - [The Checkboxes facet type](https://facetwp.com/help-center/facets/facet-types/checkboxes/)
- [The Radio facet type](https://facetwp.com/help-center/facets/facet-types/radio/)
- [The fSelect facet type](https://facetwp.com/help-center/facets/facet-types/fselect/)

                    Last updated: April 16, 2026

---

## What are FacetWP’s limits and scalability?

**Source:** [https://facetwp.com/help-center/faq/what-are-facetwps-limits-and-scalability/](https://facetwp.com/help-center/faq/what-are-facetwps-limits-and-scalability/)

Check out [our performance article](/help-center/developers/facetwp-performance-speed-limits-and-scalability/) about FacetWP’s speed, limits and scalability when indexing, filtering and searching.

    
## See also

    - [FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
- [How to use Query Monitor to optimize performance](https://facetwp.com/how-to-use-query-monitor-to-optimize-performance/)
- [How to make your website load faster](https://facetwp.com/how-to-make-your-website-load-faster/)

                    Last updated: June 28, 2022

---

## What are the system requirements?

**Source:** [https://facetwp.com/help-center/faq/what-are-the-system-requirements/](https://facetwp.com/help-center/faq/what-are-the-system-requirements/)

FacetWP requires PHP 7.0+ (since [FacetWP v4.0](/whats-new-in-facetwp-4-0/)) and WordPress 5.0+ (fully compatible with WordPress 7.1).

    
## See also

    - [Does FacetWP support PHP8?](https://facetwp.com/help-center/faq/does-facetwp-support-php8/)

                    Last updated: June 19, 2023

---

## What happens when my license expires?

**Source:** [https://facetwp.com/help-center/faq/what-happens-when-my-license-expires/](https://facetwp.com/help-center/faq/what-happens-when-my-license-expires/)

FacetWP will continue to work, but you will no longer receive [plugin updates](/help-center/installation/#plugin-updates) or [support](/help-center/get-support/).

You can see all your active and expired [licenses and subscriptions](/help-center/installation/#manage-your-subscriptions) in [your account](/account/).

To manually renew an expired (or active) subscription, [buy a new subscription](/pricing/), and **enter your existing license key (active or expired) into the “Discount Code” box during checkout**. It will then:

1. Apply the 20% renewal discount;
2. Add one extra year to the existing license’s expiration date. If the existing license hasn’t expired, it will add one year to the prior expiration date. If the existing license *has* expired, it will add one year from the date of purchase.

    
## See also

    - [Your account](https://facetwp.com/account/)
- [Installation and your account](https://facetwp.com/help-center/installation/)
- [FacetWP licenses and pricing](https://facetwp.com/pricing/)

                    Last updated: April 8, 2026

---

## What is “Advanced/Strict query detection”?

**Source:** [https://facetwp.com/help-center/faq/what-is-advanced-strict-query-detection/](https://facetwp.com/help-center/faq/what-is-advanced-strict-query-detection/)

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

For the above reasons, the setting is now **enabled by default** for new installs in FacetWP versions newer than [v4.2.3](/help-center/changelog/#4-2-3). In 99% of cases **you should keep it enabled**. Disabling it will cause FacetWP to filter the wrong query on the page, resulting in a disconnect between your facets and the listing to filter.

Only disable the setting if you have a specific reason and understand what it does, or if you are instructed to do so in support.

Note that you can also [enable “Advanced query detection” with PHP](/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/#enable-advanced-query-detection-with-php), using the 
```
facetwp_is_main_query
```

 hook. The linked snippet shows exactly what this setting does.

    
## See also

    - [Using a page builder](https://facetwp.com/help-center/listing-templates/using-a-page-builder/)
- [The facetwp_is_main_query hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_is_main_query/)
- [Using the right query](https://facetwp.com/help-center/troubleshooting/using-the-right-query/)
- [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)
- [Why is my facet empty?](https://facetwp.com/help-center/faq/why-is-my-facet-empty/)

                    Last updated: February 26, 2026

---

## What should I do if indexing stalls?

**Source:** [https://facetwp.com/help-center/faq/what-should-i-do-if-indexing-stalls/](https://facetwp.com/help-center/faq/what-should-i-do-if-indexing-stalls/)

FacetWP’s [indexer](/help-center/indexing/) **can** stall temporarily, for several reasons. If this happens, the first thing to do is wait a few minutes. FacetWP includes built-in resume functionality. It *should* resume automatically after a minute or two, if you keep the FacetWP settings screen open.

In specific circumstances, the indexer can get permanently stuck, often around the same percentage. These are the most common causes:

## Fix memory exhaustion

The server running out of memory is the most common cause of a stuck indexer. This can be confirmed in the server’s error log. If you don’t have access to your server’s error log, you can confirm it as follows:

- First [enable WP_DEBUG and WP_DEBUG_LOG](https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/) in your wp-config.php file.
- 
- Then, start a re-index by clicking [the Re-index button](https://facetwp.com/help-center/indexing/#how-to-run-the-indexer), and wait until the indexer is definitively stuck.
- After that, go to your site’s 
```
wp-content/
```

 directory on your server and find the text file called 
```
debug.log
```

. Open it in a text editor to view your server’s error log.
- The log file can be very large. Check for errors near the bottom, around the time the indexer last got stuck, which is probably the last error logged. Most likely you’ll find a so-called “Fatal error” relating to memory, something like: “PHP Fatal error:  Allowed memory size of {x} bytes exhausted (tried to allocate {x} bytes)”.

If you find there are memory exhaustion errors, the next step is to [give WordPress more memory, while making sure this amount does not exceed the server’s memory limit](/how-to-make-your-website-load-faster/#set-wordpress-and-server-memory-limits).

You may also find other errors related to indexing in the log, which could give a clue as to what is going wrong. See [our page about common indexing issues](/help-center/indexing/common-indexing-issues/) for an overview of issues and steps to take.

## Fix a .htpasswd login blocking resuming

If your site is behind a .htpasswd login, the indexer might be blocked from resuming. In these cases, you’ll need to [pass the access credentials to FacetWP](/help-center/indexing/common-indexing-issues/#fix-a-htpasswd-login-blocking-resuming).

## Fix WP Engine settings

If you are hosting your website on [WP Engine](/help-center/using-facetwp-with/wp-engine/) and you are experience problems with FacetWP’s indexer stalling or not indexing all your posts, try adding the following line to **wp-config.php** (**not** functions.php):

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infodefine( 'WPE_GOVERNOR', false );
```

WP Engine’s 
```
WPE_GOVERNOR
```

 [limits long queries](https://wpengine.com/support/platform-settings/#toc-long-query-governor) (longer than 1024 characters) for performance reasons. The above line in wp-config.php prevents this.

## Other possible reasons

See [this list of other common reasons for a stuck indexer](/help-center/indexing/common-indexing-issues/#other-possible-reasons).

    
## See also

    - [Common indexing issues](https://facetwp.com/help-center/indexing/common-indexing-issues/)
- [Indexing](https://facetwp.com/help-center/indexing/)
- [Using FacetWP with WP Engine](https://facetwp.com/help-center/using-facetwp-with/wp-engine/)
- [FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
- [How to use Query Monitor to optimize performance](https://facetwp.com/how-to-use-query-monitor-to-optimize-performance/)
- [How to make your website load faster](https://facetwp.com/how-to-make-your-website-load-faster/)
- [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)

                    Last updated: August 20, 2026

---

## Which page builders does FacetWP support?

**Source:** [https://facetwp.com/help-center/faq/which-page-builders-does-facetwp-support/](https://facetwp.com/help-center/faq/which-page-builders-does-facetwp-support/)

FacetWP integrates with  [Bricks](/help-center/using-facetwp-with/bricks/), [Elementor](/help-center/using-facetwp-with/elementor/) and [Beaver Builder](/help-center/using-facetwp-with/beaver-builder/). [Breakdance](/help-center/using-facetwp-with/breakdance/) has its own integration.

FacetWP does **not** officially integrate with Divi, WP Bakery, or Oxygen Builder or other builders. Depending on your template setup and available hooks, you may get things to work, but these builders are not officially supported.

If you’re using these non-supported builders, you can always use FacetWP’s built-in [Listing Builder](/help-center/listing-templates/listing-builder/) to build your post listing. Or you could [use Gutenberg blocks](/help-center/using-facetwp-with/blocks/), or a [custom WP_Query](/help-center/listing-templates/custom-wp-query/), or the [WP archive page](/help-center/listing-templates/wp-archive-page/) itself (if your post listing is an archive).

    
## See also

    - [Using FacetWP with Bricks Builder](https://facetwp.com/help-center/using-facetwp-with/bricks/)
- [Using FacetWP with Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/)
- [Using FacetWP with Beaver Builder](https://facetwp.com/help-center/using-facetwp-with/beaver-builder/)
- [Using WordPress blocks](https://facetwp.com/help-center/listing-templates/using-wordpress-blocks/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)

                    Last updated: December 11, 2025

---

## Why am I missing exactly one post in my listing/query?

**Source:** [https://facetwp.com/help-center/faq/why-am-i-missing-exactly-one-post-in-my-listing-query/](https://facetwp.com/help-center/faq/why-am-i-missing-exactly-one-post-in-my-listing-query/)

If you are unexpectedly missing one (and only one) post in a listing that uses a WP archive or custom 
```
WP_Query
```

, you are probably adding an extra 
```
the_post()
```

 somewhere in your template code, or it is in the wrong place.

The WP function [the_post()](https://developer.wordpress.org/reference/functions/the_post/) checks if the loop has started and then sets the current post by moving, each time, to the next post in the queue. This means that 
```
the_post()
```

 must be placed **within the loop** (within the 
```
while()
```

 part) and should be used **only once** in your template.

For the correct use in a WP archive, see [this example](/help-center/listing-templates/wp-archive-page/#the-loop-with-class), and for a custom 
```
WP_Query
```

, see [this example](/help-center/listing-templates/custom-wp-query/#the-loop).

Another reason for a missing post could be that the query has an 
```
offset
```

 query argument. If this is intentional: using an 
```
offset
```

 query argument does **not** work with FacetWP-enabled queries. See [this page](/how-to-use-the-offset-query-argument-with-facetwp/) for workarounds.

    
## See also

    - [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [How to use the offset query argument with FacetWP](https://facetwp.com/how-to-use-the-offset-query-argument-with-facetwp/)

                    Last updated: June 11, 2025

---

## Why am I seeing duplicate results in my listing?

**Source:** [https://facetwp.com/help-center/faq/why-am-i-seeing-duplicate-results-in-my-listing/](https://facetwp.com/help-center/faq/why-am-i-seeing-duplicate-results-in-my-listing/)

If you are seeing duplicate posts in your listing, especially in combination with a [Pager/Load more](/help-center/facets/facet-types/pager/) facet or [Sort facet](/help-center/facets/facet-types/sort/), the cause is almost always the way the posts are ordered in the query, which is determined by the [orderby query argument](https://developer.wordpress.org/reference/classes/wp_query/#order-orderby-parameters).

If results are ordered by a value that is the same (or empty) for multiple posts, or by a [random value](/random-ordering-in-facetwp/), MySQL does not have a fallback and will often sort erratically.

In [this tutorial](https://facetwp.com/how-to-prevent-duplicate-results/) you can read which scenarios can cause this, and how to fix it quickly by [adding a secondary, fallback sort order to the listing query.](/how-to-prevent-duplicate-results/#add-a-fallback-sort-order)

    
## See also

    - [How to prevent duplicate results](https://facetwp.com/how-to-prevent-duplicate-results/)
- [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [Random ordering in FacetWP](https://facetwp.com/random-ordering-in-facetwp/)

                    Last updated: December 1, 2022

---

## Why am I seeing “FacetWP has not detected a listing template” in the Console?

**Source:** [https://facetwp.com/help-center/faq/why-am-i-seeing-facetwp-has-not-detected-a-listing-template-in-the-console/](https://facetwp.com/help-center/faq/why-am-i-seeing-facetwp-has-not-detected-a-listing-template-in-the-console/)

If you see this error in the browser Console, FacetWP can’t find a FacetWP-enabled [listing template](/help-center/listing-templates/) on the page. This usually happens when FacetWP’s auto-detection of the listing breaks, or when a page has [facets](/help-center/facets/) but no listing at all.

Most often, the page *does* have a FacetWP-enabled listing, but another plugin breaks FacetWP’s auto-detection of it. There can be several reasons, but the usual culprit is **HTML minification** by another plugin.

HTML minification removes HTML comments. FacetWP uses the 
```
<!--fwp-loop-->
```

 HTML comment (placed by itself) to automatically add a 
```
facetwp-template
```

 class to the container element surrounding the posts in the listing. The 
```
facetwp-template
```

 class is needed to dynamically replace the HTML within this element when filtering. Without this class, FacetWP does not know which content to dynamically replace, and facets will not work. This issue can happen on all [types of listing templates](/help-center/listing-templates/), except on [Listing Builder listings](/help-center/listing-templates/listing-builder/).

Possible fixes are:

- Disable HTML minification in any performance/optimization plugin you have installed.
- If you are [using Cloudflare](/help-center/using-facetwp-with/cloudflare/), open Cloudflare’s dashboard, browse to Speed > Optimization > Content Optimization, and [disable the HTML option in the “Auto Minify” settings](https://facetwp.com/help-center/using-facetwp-with/cloudflare/#disable-auto-minify-html).
- If you don’t want to, or cannot disable HTML minification, or if HTML minification is not involved, you’ll have to add the 
```
facetwp-template
```

 class manually to the container element surrounding your listing’s post loop. In an archive or custom WP_Query, this would look like [this example](https://facetwp.com/help-center/listing-templates/wp-archive-page/#the-loop-with-class). In WooCommerce templates, you can also use [these hooks](/help-center/using-facetwp-with/woocommerce/#fix-woocommerce-pagination-result-counts-and-sorting) that do the same.

If you opt to manually add the 
```
facetwp-template
```

 class to a container element, make sure that all your **facets are outside of it**. In WooCommerce templates that use WooCommerce pagination or a WooCommerce sort box, [make sure these two elements are inside of the container element](https://facetwp.com/help-center/using-facetwp-with/woocommerce/#fix-woocommerce-pagination-result-counts-and-sorting).

## Filter out the “FacetWP has not detected a listing template” error

In niche scenarios it may be useful to remove the “FacetWP has not detected a listing template” error message. For example when FacetWP JavaScript assets are loaded on *all* pages, e.g. if included in a code compilation pipeline.

Add the following snippet to your (child) theme’s functions.php to filter the error out of the Console errors:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_action('wp_footer', function() {
  ?>
  <script>
    const originalConsoleError = console.error;
    console.error = function() {
      if (arguments[0] &&
        typeof arguments[0] === 'string' &&
        arguments[0].includes('FacetWP has not detected')) {
        return;
      }
      originalConsoleError.apply(console, arguments);
    };
  </script>
  <?php
});
```

    
## See also

    - [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [What are facets?](https://facetwp.com/help-center/facets/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Using FacetWP with Cloudflare](https://facetwp.com/help-center/using-facetwp-with/cloudflare/)
- [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [Why am I seeing “FacetWP was unable to auto-detect the post listing”?](https://facetwp.com/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/)

                    Last updated: March 20, 2025

---

## Why am I seeing “FacetWP was unable to auto-detect the post listing”?

**Source:** [https://facetwp.com/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/](https://facetwp.com/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/)

If you see this error, FacetWP can’t find a suitable query. This usually happens when you have a [custom WP_Query](/help-center/listing-templates/custom-wp-query/) on a standard WordPress page. To let FacetWP detect the custom query, you have to add 
```
facetwp => true
```

 to the query arguments. See [this section](/help-center/listing-templates/custom-wp-query/#how-to-create-a-custom-query) for more information.

This error can also happen:

- If you are [using the WP External Links plugin](/help-center/using-facetwp-with/wp-external-links/).
- If the 
```
facetwp-template
```

 class exists multiple times on a page. There should only be **one** 
```
facetwp-template
```

 class on a page. Check your page source HTML to see if this is the case. This can happen:
- If you added multiple listings to the page yourself, which does not work. [You can have only one filterable listing on a page](/help-center/faq/can-i-use-multiple-queries-facetwp-templates-on-the-same-page/).
- If you added the 
```
facetwp-template
```

 class manually somewhere on the page, for example on a 
```
<div>
```

 surrounding a [Listing Builder listing](/help-center/listing-templates/listing-builder/). Adding the 
```
facetwp-template
```

 class manually is almost never necessary: all [listing template types](/help-center/listing-templates/) add it automatically. The only reason to add this class manually would be [if FacetWP’s automatic loop detection fails](/help-center/listing-templates/custom-wp-query/#solving-issues-with-facetwps-automatic-post-loop-detection).
- If you are using [the Bricks add-on](/help-center/using-facetwp-with/bricks/) with a [FacetWP-enabled Bricks element](/help-center/using-facetwp-with/bricks/#supported-elements). To fix the issue, go to Bricks > Settings  > Performance and [disable the “Cache query loops” setting](/help-center/using-facetwp-with/bricks/#fix-facetwp-was-unable-to-auto-detect-the-post-listing-error).
- If you are [using Elementor](/help-center/using-facetwp-with/elementor/), with the [Element Caching](https://elementor.com/help/element-caching-help/) feature enabled. Element Caching is incompatible with FacetWP. If you see a “FacetWP was unable to auto-detect the post listing” error, or if your facets are not showing (or disappearing after use), make sure to [disable Element Caching globally or in every FacetWP-related widget](/help-center/using-facetwp-with/elementor/#fix-issues-caused-by-elementors-element-caching-feature).
- If you are [using the AIOSEO plugin](/help-center/using-facetwp-with/all-in-one-seo-pro/) with the “Run Shortcodes” setting enabled. To fix the issue, go to All in One SEO > Search Appearance > Advanced, and [disable the “Run Shortcodes” setting, or exclude FacetWP shortcodes from being parsed](/help-center/using-facetwp-with/all-in-one-seo-pro/#fix-a-facetwp-was-unable-to-auto-detect-the-post-listing-error).
- If you are using an object caching plugin, like [Redis Object Cache](https://wordpress.org/plugins/redis-cache/) or [Object Cache Pro](https://objectcache.pro/). Object caching can interfere with FacetWP’s ability to detect the right query on refresh. Depending on the implementation or plugin used, you may be able to exclude your facet page or its [cache groups](https://objectcache.pro/docs/ignoring-groups/) from being cached. Or you could disable object caching entirely. See [this page](/help-center/using-facetwp-with/object-caching/) for more info.
- If you are hosting your site on WP Engine:
- By [WP Engine caching FacetWP’s API URL](/help-center/using-facetwp-with/wp-engine/#add-facetwps-api-url-to-wp-engines-cache-exclusions).
- Because of [WP Engine’s object cache](/help-center/using-facetwp-with/wp-engine/#disable-wp-engines-object-cache).
- If you are hosting your site on Pressable, because of [Pressable’s object caching](/help-center/using-facetwp-with/pressable/).
- If you are [using Timber with Timber caching](https://facetwp.com/help-center/using-facetwp-with/timber/).

    
## See also

    - [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)
- [Using FacetWP with WP External Links](https://facetwp.com/help-center/using-facetwp-with/wp-external-links/)
- [Can I use multiple queries / FacetWP templates on the same page?](https://facetwp.com/help-center/faq/can-i-use-multiple-queries-facetwp-templates-on-the-same-page/)
- [Using FacetWP with Bricks Builder](https://facetwp.com/help-center/using-facetwp-with/bricks/)
- [Using FacetWP with Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/)
- [Using FacetWP with All in One SEO (Pro)](https://facetwp.com/help-center/using-facetwp-with/all-in-one-seo-pro/)
- [Using FacetWP with WP Engine](https://facetwp.com/help-center/using-facetwp-with/wp-engine/)
- [Using FacetWP with Pressable](https://facetwp.com/help-center/using-facetwp-with/pressable/)
- [Using FacetWP with Cloudflare](https://facetwp.com/help-center/using-facetwp-with/cloudflare/)
- [Why do I have missing posts or no results at all after using facets?](https://facetwp.com/help-center/faq/why-do-i-see-no-results-after-using-facets/)
- [Why am I seeing “FacetWP has not detected a listing template” in the Console?](https://facetwp.com/help-center/faq/why-am-i-seeing-facetwp-has-not-detected-a-listing-template-in-the-console/)
- [Using FacetWP with object caching](https://facetwp.com/help-center/using-facetwp-with/object-caching/)
- [Using FacetWP with Timber](https://facetwp.com/help-center/using-facetwp-with/timber/)

                    Last updated: June 4, 2026

---

## Why am I seeing no results on my search results page?

**Source:** [https://facetwp.com/help-center/faq/why-am-i-seeing-no-results-on-my-search-results-page/](https://facetwp.com/help-center/faq/why-am-i-seeing-no-results-on-my-search-results-page/)

If you are using FacetWP together with [SearchWP](https://facetwp.com/help-center/using-facetwp-with/searchwp/) or Relevanssi (with the [Relevanssi add-on](https://facetwp.com/help-center/using-facetwp-with/relevanssi/) installed), and your search results page (the page with 
```
/?s=searchterm
```

 in the URL) **does not have facets**, the search will not work properly: most often it will show no results, or other unexpected query interference may happen, like a different order of results than expected.

This is caused by FacetWP’s SearchWP/Relevanssi integration having to intercept the search query before it can know if facets are being used on the page.

To fix this issue, you have to disable FacetWP for the search results page only, by adding the following code to your (child) theme’s functions.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
  if ( $query->is_search() && $query->is_main_query() ) {
    $is_main_query = false;
  }
  return $is_main_query;
}, 5, 2 );
```

Important:**Do not use this code if you have facets on the search results page**. And remember to remove this code if you later decide to add facets.
If you are seeing no results on search- or other pages/templates **with facets**, see [this FAQ that lists all common causes](/help-center/faq/why-do-i-see-no-re).

    
## See also

    - [Using FacetWP with SearchWP](https://facetwp.com/help-center/using-facetwp-with/searchwp/)
- [Using FacetWP with Relevanssi](https://facetwp.com/help-center/using-facetwp-with/relevanssi/)
- [The Search facet type](https://facetwp.com/help-center/facets/facet-types/search/)
- [Why do I have missing posts or no results at all after using facets?](https://facetwp.com/help-center/faq/why-do-i-see-no-results-after-using-facets/)

                    Last updated: January 30, 2026

---

## Why are automatic updates not appearing in my plugins dashboard?

**Source:** [https://facetwp.com/help-center/faq/why-are-automatic-updates-not-appearing-in-my-plugins-dashboard/](https://facetwp.com/help-center/faq/why-are-automatic-updates-not-appearing-in-my-plugins-dashboard/)

Make sure that you’ve [activated your license key](/help-center/installation/#whitelist-your-sites-and-activate-your-license-key) correctly.

If plugin updates are still not appearing, see [this troubleshooting section](/help-center/installation/#solve-plugin-update-issues).

Note that if you are [using FacetWP in a WordPress multi-site setup](/help-center/using-facetwp-with/wordpress-multi-site/), the update notifications appear in: My Sites > Network Admin > Plugins.

    
## See also

    - [Your account](https://facetwp.com/account/)
- [Installation and your account](https://facetwp.com/help-center/installation/)
- [FacetWP licenses and pricing](https://facetwp.com/pricing/)
- [How can I disable the admin notices to install add-on integrations?](https://facetwp.com/help-center/faq/how-can-i-disable-the-admin-notices-to-install-add-on-integrations/)
- [Why is Wordfence showing an abandoned plugin warning?](https://facetwp.com/help-center/faq/why-is-wordfence-showing-an-abandoned-plugin-warning/)
- [Using FacetWP with WordPress multi-site](https://facetwp.com/help-center/using-facetwp-with/wordpress-multi-site/)
- [Changelog](https://facetwp.com/help-center/changelog/)

                    Last updated: April 8, 2026

---

## Why are my facets loading slowly?

**Source:** [https://facetwp.com/help-center/faq/why-are-my-facets-loading-slowly/](https://facetwp.com/help-center/faq/why-are-my-facets-loading-slowly/)

Important:First of all, make sure to **disable Debug Mode** in Settings > FacetWP > Settings. Depending on your site, Debug Mode can sometimes influence loading speeds.
FacetWP itself [is very fast](/help-center/developers/facetwp-performance-speed-limits-and-scalability/). It normally takes a fraction of a second to load results. However, every WordPress request (including AJAX) is only as fast as the slowest plugin.

The AJAX requests that FacetWP uses on pages with filters are ignored by most caching plugins, so the load time you’re seeing with FacetWP is your server’s and website’s *true speed*.

If FacetWP takes a while to load, there’s likely a larger underlying issue. Make sure to disable any unnecessary plugins, and ensure that your server has sufficient resources.

You can read more about the possible causes of slow filtering, and FacetWP’s speed and limitations when indexing, filtering and searching [in our performance article](/help-center/developers/facetwp-performance-speed-limits-and-scalability/), which also lists [things you can do to speed up the filtering process itself](/help-center/developers/facetwp-performance-speed-limits-and-scalability/#speed-up-facet-filtering-itself).

If you want to increase the (true, uncached) loading speed of you pages, check out our tutorial about [how to use Query Monitor to optimize performance](/how-to-use-query-monitor-to-optimize-performance/) by optimizing your database queries.

And see [our guide on how to make your website load faster](/how-to-make-your-website-load-faster/) for an overview to get you started with increasing server and website performance.

We also have a free [Caching add-on](/help-center/add-on-features-and-extras/caching/) that caches FacetWP’s AJAX requests, which may help on high-traffic sites.

    
## See also

    - [FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
- [How to use Query Monitor to optimize performance](https://facetwp.com/how-to-use-query-monitor-to-optimize-performance/)
- [How to make your website load faster](https://facetwp.com/how-to-make-your-website-load-faster/)
- [The Caching add-on](https://facetwp.com/help-center/add-on-features-and-extras/caching/)
- [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)

                    Last updated: February 20, 2024

---

## Why are my facets not filtering my Elementor listing widget?

**Source:** [https://facetwp.com/help-center/faq/why-are-my-facets-not-filtering-my-elementor-listing-widget/](https://facetwp.com/help-center/faq/why-are-my-facets-not-filtering-my-elementor-listing-widget/)

There could be multiple reasons for facet choices not showing up, or the facets not filtering your posts:

- First of all, make sure the [FacetWP Elementor add-on](/help-center/using-facetwp-with/elementor/) is installed and activated.
- Check if your Elementor widget [is supported by FacetWP](/help-center/using-facetwp-with/elementor/#supported-widgets).
- In the widget’s settings, [enable FacetWP](/help-center/using-facetwp-with/elementor/#usage). Make sure there is **only one FacetWP-enabled widget on a page**.

![To use an Elementor Posts or Loop Grid widget, or an UAE Posts or Woo Products widget on a WP archive page, set the 'Query' setting to use the 'Current Query' or 'Main Query'.](https://facetwp.com/wp-content/uploads/2023/10/elementor-current-query.png)To use an Elementor Posts or Loop Grid widget, or an UAE Posts or Woo Products widget **on a WP archive page**, set the “Query” setting to use the “Current Query” or “Main Query”.
- If your page is a **WP archive page/template**, make sure that the Elementor widget is using the archive query. To do this:
- [Use an Archive Posts or Archive Products widget](/help-center/using-facetwp-with/elementor/#using-facetwp-on-wp-archive-templates) (which are meant for archives).
- Or, if you want to use other supported widgets (like the Posts or Loop Grid widget), you need to [set the widget’s Query > Source setting to use the “Current Query” (or “Main Query”)](/help-center/using-facetwp-with/elementor/#using-a-posts-loop-grid-woo-products-or-blog-widget-on-a-wp-archive-template).
- If you are trying to use a FacetWP Listing widget on an archive template, read about your options [here](https://facetwp.com/help-center/using-facetwp-with/elementor/#use-a-facetwp-listing-widget-on-a-wp-archive-template).

    
## See also

    - [Using FacetWP with Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/)

                    Last updated: February 25, 2026

---

## Why are my facets not showing choices for all my products?

**Source:** [https://facetwp.com/help-center/faq/why-are-my-facets-not-showing-choices-for-all-my-products/](https://facetwp.com/help-center/faq/why-are-my-facets-not-showing-choices-for-all-my-products/)

The most common reason is that you are showing out-of-stock products on your products page, which is default WooCommerce behavior ([which can be changed with a setting](/help-center/using-facetwp-with/woocommerce/#show-facet-choices-for-out-of-stock-products)).

![Using FacetWP with WooCommerce - Index out-of-stock products? setting.](https://facetwp.com/wp-content/uploads/2023/02/woocommerce-index-out-of-stock-products-setting.png)Enable the “Index out-of-stock products?” setting.
However, FacetWP does not index out-of-stock products by default. You can make FacetWP index them by enabling the “Index out-of-stock products” setting under FacetWP > Settings > Woocommerce.

After enabling this setting, make sure to [re‑index](/help-center/indexing/).

    
## See also

    - [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [Using FacetWP with WooCommerce plugins](https://facetwp.com/help-center/using-facetwp-with/woocommerce-plugins/)
- [Indexing](https://facetwp.com/help-center/indexing/)
- [Why is my facet missing some choices?](https://facetwp.com/help-center/faq/why-is-my-facet-missing-some-choices/)
- [Why is my facet empty?](https://facetwp.com/help-center/faq/why-is-my-facet-empty/)

                    Last updated: July 15, 2026

---

## Why are my facets not working after updating to WP 6.9?

**Source:** [https://facetwp.com/help-center/faq/why-are-my-facets-not-working-after-updating-to-wp-6-9/](https://facetwp.com/help-center/faq/why-are-my-facets-not-working-after-updating-to-wp-6-9/)

Some users are experiencing non-functional facets and a JSON error in the browser console after updating to WordPress 6.9.

We are investigating what triggers this issue exactly. It is caused by WP’s new [template enhancement output buffer](https://make.wordpress.org/core/2025/11/18/wordpress-6-9-frontend-performance-field-guide/#introduce-the-template-enhancement-output-buffer) that conflicts with FacetWP’s output buffering in some situations, depending on other installed plugins.

We added a hotfix for this issue in [FacetWP v4.5](https://facetwp.com/help-center/changelog/#4-5). If you are using a version older than that, you can fix this issue by adding the following snippet to your (child) theme’s functions.php. The snippet disables the new template enhancement buffer in WP 6.9 during FacetWP’s AJAX refresh.

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info<?php
// Disables the new template enhancement buffer in WP 6.9 during FacetWP's AJAX refresh
add_filter( 'wp_should_output_buffer_template_for_enhancement', function( $should ) {
  if ( function_exists( 'FWP' ) && FWP()->request && FWP()->request->is_refresh ) {
    return false;
  }
  return $should;
} );
```

Note that other plugins, like Elementor, are experiencing similar issues, and have disabled this new feature in their latest version or have issued a fix. So make sure to update all your plugins when updating to WP6.9.

### Using Borlabs Cookie plugin

If you are using the [Borlabs Cookie plugin](https://borlabs.io/borlabs-cookie/), the above snippet is not enough to fix the buffer issue. It needs to accompanied by this snippet:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'borlabsCookie/outputBufferManager/status', function( $active ) {
  if ( function_exists( 'FWP' ) && FWP()->request && FWP()->request->is_refresh ) {
    return false;
  }
  return $active;
} );
```

    
## See also

    - [Using FacetWP with Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/)

                    Last updated: February 25, 2026

---

## Why are my facets not working on mobile?

**Source:** [https://facetwp.com/help-center/faq/why-are-my-facets-not-working-on-mobile/](https://facetwp.com/help-center/faq/why-are-my-facets-not-working-on-mobile/)

In the following scenarios, facets may not work correctly on mobile:

- If you have a “Filter” link/button that opens a custom mobile sidebar containing your facets. If that link/button is set up as a link with a hash in its 
```
href
```

, like this: 
```
<a href="#"
```

, when it is clicked, the 
```
#
```

 will be added to the page URL. This causes issues with FacetWP’s facet refresh, which [uses URL variables](/help-center/developers/the-facetwp-url/). Be aware that some page builders automatically add a hash when creating a button or link element with an empty 
```
href
```

 attribute. To fix this, replace the 
```
#
```

 or empty 
```
href
```

 with ```
java­script:;
```, like this:

```
<a href="javascript:;">Filter</a>
```

- Note that you can also [use FacetWP’s Mobile Flyout add-on](/help-center/add-on-features-and-extras/mobile-flyout/) to create a sidebar with facets.
- If there are SSL issues. We’ve mostly seen this happen in IOS Safari. Often, users are testing a 
```
http://
```

 URL, while the page is trying to connect to the 
```
https://
```

 URL for the facet refresh. To fix this, make sure to force-redirect non-secure 
```
http://
```

 URLs to secure 
```
https://
```

 URLs. Most hosts have settings for this. You can also do this manually by adding a 
```
RewriteRule
```

 in your 
```
.htaccess
```

 file, or by using a plugin, like [Really Simple SSL](https://wordpress.org/plugins/really-simple-ssl/). If this is not the issue, try re-adding the SSL certificate for your domain.
- 
- If you have some sort of security or firewall app installed on your phone. Try deactivating these kinds of apps while testing.
- It could be that the issue is not caused by being on mobile, but because you are testing on mobile **while not being logged-in**. Several scenarios and issues can cause a difference between being logged in and being logged out. One of them is Yoast SEO’s [“Remove unregistered URL parameters” setting](https://yoast.com/help/advanced-crawl-settings-permalink-cleanup/) ([which must be disabled](/help-center/using-facetwp-with/yoast-seo/)), which only has an effect when you are logged out. Other possible culprits are member plugins like [Members](/help-center/using-facetwp-with/members/) and [Memberpress](/help-center/using-facetwp-with/memberpress/). Or you may be [restricting WordPress or FacetWP REST API access to logged-in users only](/help-center/developers/facetwp-rest-api/#restrict-the-rest-api-and-facet-filtering-to-authenticated-users).

---

## Why are my Listable / Listify homepage facets and submit button not working?

**Source:** [https://facetwp.com/help-center/faq/why-are-my-listable-listify-homepage-facets-and-submit-button-not-working/](https://facetwp.com/help-center/faq/why-are-my-listable-listify-homepage-facets-and-submit-button-not-working/)

The Listable and Listify themes both have FacetWP integration that, at the time of writing, is incompatible with FacetWP 3.9.x.

Listable and Listify are using [deprecated FacetWP functions](/deprecated-functions-removed-in-facetwp-3-9/), causing facets and the submit button on the homepage to malfunction.

When clicking the facet options or the search button, you will see several JavaScript errors in the browser console, similar to these:

```
Uncaught TypeError: FWP.parse_facets is not a function
Uncaught TypeError: FWP.build_query_string is not a function
```

The Listable / Listify team authors are aware of the problem but at the time of writing, this has not been fixed yet.

While waiting for a fix in the themes themselves, the quickest way to repair this is to put this hook in your (child) theme’s function.php:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More infoadd_filter( 'facetwp_load_deprecated', '__return_true' );
```

Alternatively, if you don’t want to touch your (child) theme you can add it through our Custom Hooks Plugin:

- [Download the Custom Hooks plugin](/help-center/add-on-features-and-extras/custom-hooks/)
- Browse to Plugins > Add New. Click the “Upload Plugin” button at the top.
- Upload, then activate the Custom Hooks plugin
- Browse to Plugins > Plugin Editor. Then in the dropdown, select “Custom Hooks”.
- At the bottom of the code, paste in the above custom 
```
add_filter()
```

 hook.

This filter can be removed as soon as the issue is fixed and you have updated your theme. We will update this page as soon as the Listable / Listify themes have been fixed.

    
## See also

    - [Using FacetWP with the Listable theme](https://facetwp.com/help-center/using-facetwp-with/listable/)
- [Using FacetWP with the Listify theme](https://facetwp.com/help-center/using-facetwp-with/listify/)
- [Deprecated functions removed in FacetWP 3.9](https://facetwp.com/deprecated-functions-removed-in-facetwp-3-9/)

                    Last updated: May 2, 2023

---

## Why are my value modifiers not working?

**Source:** [https://facetwp.com/help-center/faq/why-are-my-value-modifiers-not-working/](https://facetwp.com/help-center/faq/why-are-my-value-modifiers-not-working/)

Value modifiers need to be entered like this:

![How to enter value modifiers correctly: use the exact labels with capitals and spaces, each on one line, without commas.](https://facetwp.com/wp-content/uploads/2023/02/value_modifiers_exclude.png)How to enter value modifiers correctly: use the exact labels with capitals and spaces, each on one line, without commas.
The following things often go wrong:

The values you enter in a facet’s “Value modifiers” field **each need to be on a separate line** in the form field. Do not put them on one line with commas or add commas to each line.

The values need to match the **label** (not the slug) of the value **exactly**, **including spaces and capitalization**. For example, if you have a category called “Fall Collection”, the value entered in the “Value modifiers” field needs to be exactly that: 
```
Fall Collection
```

, and **not** 
```
fall collection
```

, 
```
fall-collection
```

 or any other variant.

If you have not modified the facet display values with [output hooks](/help-center/developers/hooks/output-hooks/) like [facetwp_facet_display_value](/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/), the quickest way to determine the values to use is to look at the facet choice labels themselves: the labels beside the checkbox or radio button, or the options in the dropdown. Also make sure to check if capitalization is not changed with CSS, for example with 
```
text-transform: lowercase
```

.

For [Color facets](/help-center/facets/facet-types/color/#what-are-value-modifiers) you can find the facet display value by checking the swatch’s HTML code in the browser inspector. The value to use in the Value modifier setting is the value in the 
```
data-color
```

 attribute of the swatch, which is the term name (not slug) if your are using a taxonomy as data source. Unless you are using [Variation Swatches for WooCommerce](/help-center/using-facetwp-with/variation-swatches-for-woocommerce/) or [WooCommerce Attribute Swatches](/help-center/using-facetwp-with/woocommerce-attribute-swatches/), then you need to use the value in the 
```
title
```

 attribute of the swatch instead.

In hierarchical facets, if you use “Show only these values”, if you want only specific child terms to show up, you need to include their parent terms (on all levels) too. Or you need to set their parent term ID in the “Parent term” setting. If you use “Exclude these values”, you can directly exclude child terms, without excluding their parent terms.

    
## See also

    - [The facetwp_facet_display_value hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_display_value/)
- [Output hooks](https://facetwp.com/help-center/developers/hooks/output-hooks/)
- [The Checkboxes facet type](https://facetwp.com/help-center/facets/facet-types/checkboxes/)
- [The Dropdown facet type](https://facetwp.com/help-center/facets/facet-types/dropdown/)
- [The Radio facet type](https://facetwp.com/help-center/facets/facet-types/radio/)
- [The fSelect facet type](https://facetwp.com/help-center/facets/facet-types/fselect/)
- [The Hierarchy facet type](https://facetwp.com/help-center/facets/facet-types/hierarchy/)
- [The Color facet type](https://facetwp.com/help-center/facets/facet-types/color/)
- [The Exclude facet type](https://facetwp.com/help-center/facets/facet-types/exclude/)

                    Last updated: March 30, 2026

---

## Why are not all my posts appearing in my listing?

**Source:** [https://facetwp.com/help-center/faq/why-are-not-all-my-posts-appearing-in-my-listing/](https://facetwp.com/help-center/faq/why-are-not-all-my-posts-appearing-in-my-listing/)

Posts missing from your [listing template](/help-center/listing-templates/) on first page load (**before** using any facets) can be caused by several reasons.

First, make sure you are not unintentionally **filtering** the query (for example by category or a custom field). The way you could be doing that depends on the type of listing template you are using. For example, when [using a custom WP_Query](/help-center/listing-templates/custom-wp-query/), you could be [setting a meta_query argument](/how-to-filter-or-sort-a-wp_query-by-one-or-more-custom-fields/), or you could be [using a pre_get_posts hook](/how-to-customize-wp-archive-queries/). When you are [using the Listing Builder](/help-center/listing-templates/listing-builder), you could be [using query filtering rules](https://facetwp.com/help-center/listing-templates/listing-builder/#add-query-filtering-rules), or [the facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/).

Next, check if you are **ordering** the query by one or more custom fields that **do not exist** for certain posts. If this is the case, you need to either make sure the field exists for all posts (usually by saving them), or [adapt the meta_query to account for both the existing and the non-existing custom field(s)](/how-to-filter-or-order-a-wp_query-by-one-or-more-custom-fields/#order-a-query-by-multiple-custom-fields-that-can-be-empty-for-some-posts).

    
## See also

    - [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [How to filter or order a WP_Query by one or more custom fields](https://facetwp.com/how-to-filter-or-order-a-wp_query-by-one-or-more-custom-fields/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [The facetwp_query_args hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_query_args/)
- [Why am I seeing duplicate results in my listing?](https://facetwp.com/help-center/faq/why-am-i-seeing-duplicate-results-in-my-listing/)
- [How to prevent duplicate results](https://facetwp.com/how-to-prevent-duplicate-results/)

                    Last updated: March 24, 2026

---

## Why am I not seeing all search results when using a Search facet?

**Source:** [https://facetwp.com/help-center/faq/why-do-i-not-see-all-search-results-when-using-a-search-facet/](https://facetwp.com/help-center/faq/why-do-i-not-see-all-search-results-when-using-a-search-facet/)

By default, Search facets use [WordPress core search](/help-center/facets/facet-types/search/#using-default-wordpress-core-search). WordPress core search is pretty limited: it searches the post title, excerpt, and post content, but nothing else.

For more flexibility, you can use FacetWP’s [SearchWP](/help-center/using-facetwp-with/searchwp/) (built-in) or [Relevanssi](/help-center/using-facetwp-with/relevanssi/) (with add-on) integration. Both plugins let you search other data (custom fields, taxonomy terms, PDF content, etc) too. They each offer many settings and add-ons to make search results more relevant.

FacetWP displays the search results by using the post IDs returned by WP core search, or by SearchWP or Relevanssi if you are using their engine in the Search facet’s settings.

**FacetWP itself does not influence the returned search results in any way**. This means that if you see unexpected search results, the first place to look is the SearchWP or Relevanssi settings.

There is one exception to this: for performance reasons, FacetWP **limits the number of returned results**, which in some cases can lead to missing posts in the search results.

For example, when using the “WP Default” [search engine](/help-center/facets/facet-types/search/#search-engine), a Search facet will use WordPress core search, which returns a maximum of **200** results. These results include all post types that are searchable. This can cause the 200 returned posts to not include all posts in the current category and/or results of other facet filters in your listing.

So if you are missing posts in the results that you know should be there, the first thing to try is customize or remove the post limit. The exact limit depends on the chosen [search engine](/help-center/facets/facet-types/search/#search-engine). For all engines, it can be removed or customized:

| Search engine | Default post limit |  |
| --- | --- | --- |
| WP Default | 200 | Remove or customize |
| SearchWP | 200 | Remove or customize |
| Relevanssi | 500 | Remove or customize |

    
## See also

    - [The Search facet type](https://facetwp.com/help-center/facets/facet-types/search/)
- [Using FacetWP with SearchWP](https://facetwp.com/help-center/using-facetwp-with/searchwp/)
- [Using FacetWP with Relevanssi](https://facetwp.com/help-center/using-facetwp-with/relevanssi/)

                    Last updated: April 24, 2026

---

## Why do I see all posts/products after filtering, sorting or using pagination on a category/term, author, or search archive page?

**Source:** [https://facetwp.com/help-center/faq/why-do-i-see-all-posts-products-after-filtering-sorting-or-using-pagination-on-a-category-term-author-or-search-archive-page/](https://facetwp.com/help-center/faq/why-do-i-see-all-posts-products-after-filtering-sorting-or-using-pagination-on-a-category-term-author-or-search-archive-page/)

This happens when you are [using a Listing Builder listing on a category/tag/term, author, or search achive page](https://facetwp.com/help-center/listing-templates/listing-builder/#using-a-listing-builder-listing-template-on-a-wp-archive).

On category/term/tag, author, and search archive pages, FacetWP will automatically detect and use the native archive query. This means that on WP archives, the recommended approach is to just [use the WP archive query itself](https://facetwp.com/help-center/listing-templates/wp-archive-page/), instead of creating a new query with the Listing Builder (or a [custom WP_Query](/help-center/listing-templates/custom-wp-query/)).

If you do add a Listing Builder listing on a WP archive, what happens is that before filtering, FacetWP uses the native query. And to generate the filtered results, it will use the Listing Builder listing query, which will get **all** posts/products.

To fix this difference, you have two options:

## Option 1: Pre-filter Listing Builder listing templates for the query

The recommended way to solve this is to [use the facetwp_template_use_archive filter](/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/). With this hook in place, FacetWP will automatically **pre-filter** the Listing Builder query based on the current category/tag/term, author, or search term(s), by injecting them into the query arguments during filtering.

Note that even with this hook in place the native archive query will still be used **before** filtering. This may [lead to differences before and after filtering](/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/#fixing-query-differences-before-and-after-filtering), caused by query arguments *other* than the current category/tag/term, author or search term(s), like 
```
posts_per_page
```

, 
```
order
```

 and 
```
orderby
```

. These differences can be fixed by manually bringing the native archive/search query arguments in line with the Listing Builder listing’s query arguments [with a pre_get_posts filter](/how-to-customize-wp-archive-queries/). Or by [forcing FacetWP to entirely ignore the archive query](/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/#ignore-the-archive-search-query-entirely).

## Option 2: Pre-filter results based on the archive page URI

Instead of pre-filtering the listing based on the archive query that the listing is on, with the 
```
facetwp_template_use_archive
```

 hook ([option 1 above](#option-1-pre-filter-listing-builder-listing-templates-for-the-query)), you can also pre-filter the listing query based on the page URI of the archive page.

This can be done with a so-called dynamic URL tag. See [this section in our tutorial on dynamic URL tags](/how-to-pre-filter-listing-builder-queries-with-dynamic-url-tags/#using-dynamic-url-tags-on-archive-templates) for how to do this exactly.

In general, for Listing Builder listings placed on archives, we recommend [using the facetwp_template_use_archive hook](/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/), because it is only one line in your functions.php and works for all types of archives. Using a dynamic URL tag can be useful if you want to build complex queries in the Listing Builder, instead of [customizing the native archive query with a pre_get_posts hook](/how-to-customize-wp-archive-queries/).

    
## See also

    - [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [The facetwp_template_use_archive hook](https://facetwp.com/help-center/developers/hooks/querying-hooks/facetwp_template_use_archive/)
- [How to pre-filter Listing Builder listing queries with dynamic URL tags](https://facetwp.com/how-to-pre-filter-listing-builder-queries-with-dynamic-url-tags/)
- [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [How to customize WordPress archive queries](https://facetwp.com/how-to-customize-wp-archive-queries/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)

                    Last updated: July 28, 2026

---

## Why do I see more posts than my “post per page”?

**Source:** [https://facetwp.com/help-center/faq/why-do-i-see-more-posts-than-my-post-per-page/](https://facetwp.com/help-center/faq/why-do-i-see-more-posts-than-my-post-per-page/)

If you see more posts in your [listing](/help-center/listing-templates/) than you have set in your listing query’s 
```
posts_per_page
```

 argument (or setting), check if you are using [sticky posts](https://developer.wordpress.org/themes/functionality/sticky-posts/).

See our [sticky posts tutorial](/how-to-use-sticky-posts-with-facetwp/) for workarounds you can implement to ignore sticky posts in FacetWP listings entirely or partially, and how to make them work if you actually want them.

![Enable 'Advanced query detection' in FacetWP's settings.](https://facetwp.com/wp-content/uploads/2025/10/advanced-query-detection.png)Enable “Advanced query detection” in FacetWP’s settings.
Another reason could be that your listing is using the wrong query. First, try [enabling the “Advanced query detection” setting](/help-center/troubleshooting/#enable-advanced-query-detection) (called “Strict query detection” in FacetWP versions older than [v4.5](/help-center/changelog/#4-5)). If that does not help, see [this page about using the right query](/help-center/troubleshooting/using-the-right-query/) and the [Troubleshooting page](/help-center/troubleshooting/) for more info.

    
## See also

    - [How to use sticky posts with FacetWP](https://facetwp.com/how-to-use-sticky-posts-with-facetwp/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [Using the right query](https://facetwp.com/help-center/troubleshooting/using-the-right-query/)
- [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)

                    Last updated: October 21, 2025

---

## Why do I have missing posts or no results at all after using facets?

**Source:** [https://facetwp.com/help-center/faq/why-do-i-see-no-re](https://facetwp.com/help-center/faq/why-do-i-see-no-re)

When there are no results in the listing (actually nothing, or a “no results” message) after using facets, but results do appear after a hard page reload, more often than not, the issue is a malformed HTML structure of the page. This happens quite often, for example by accidentally copy-pasting a piece of code in the wrong spot.

On  AJAX refresh, when using facets, FacetWP processes the HTML between the first opening 
```
<body>
```

 tag and the first closing 
```
</body>
```

 tag. When there are multiple opening or closing 
```
<body>
```

 tags on the page, or if they are missing, or in the wrong place, the processed content/template will not include the listing/results, causing the “no results” issue to happen.

So, if you see this issue, open the page source in your browser, copy the whole HTML into an editor, and check if your HTML structure is sound. Make sure all opening and closing 
```
<html>
```

```
</html>
```

, 
```
<head>
```

```
</head>
```

 and 
```
<body>
```

```
</body>
```

 tags are present, in the right place, and appearing only once. Pay special attention to the opening 
```
<body>
```

 and closing 
```
</body>
```

 tags.

## Diagnosing issues with the Console Network XHR Response tab

Another way to diagnose the “no results” issue (and other refresh issues) is to use the browser Console.

Open the Console, then click the “Network” tab. Reload the page, then select the “XHR” tab, and use a facet. You’ll see an item appear that represents the AJAX refresh. Click on the item so the info about it appears. In the “Response” tab of this info will be the JSON that represents the refreshed content:

![Getting the template HTML for a FacetWP AJAX refresh, from the JSON Response tab in the Network > XHR tab in the browser Console.](https://facetwp.com/wp-content/uploads/2024/03/network-xhr-response.png)Getting the template HTML for a FacetWP AJAX refresh, from the JSON Response tab in the Network > XHR tab in the browser Console. The above screenshot is from Firefox. Other browsers have similarly named tabs.
If you copy the HTML of the “template” part of the JSON response to an editor, you can check whether that HTML is structured right and if it includes the results. If it does not, check your template file and/or its includes (like the header.php and footer.php files) for stray, duplicate, missing, or unclosed 
```
<html>
```

, 
```
<head>
```

 and 
```
<body>
```

 tags.

Note that this issue will never happen when using a [Listing Builder listing template](/help-center/listing-templates/listing-builder/), because this type of template is processed differently. It can happen on all other [supported listing templates](/help-center/listing-templates/) though.

## Other possible causes for missing posts or no results after using facets

Some other possible causes for missing posts or “no results” after using facets:

- [When using All in One SEO (Pro) in combination with a theme that does not support the “title-tag” feature](/help-center/using-facetwp-with/all-in-one-seo-pro/#fix-no-results-after-filtering).
- When using WPML or Polylang together with the [Multilingual add-on](/help-center/using-facetwp-with/multilingual/), without having [everything set up correctly](/help-center/using-facetwp-with/multilingual/). Basically, all posts need to have an explicit language set and must have a translation. And if you are using facets on a listing that has only posts **without** a language set, you need to [tell FacetWP to ignore its language parameter](/help-center/using-facetwp-with/multilingual/#fix-issues-with-filtering-posts-with-no-language-set).
- When [using the Members plugin](/help-center/using-facetwp-with/members/), you may run into disappearing posts or no results at all after using facets. This issue is caused by the Members plugin filtering out protected posts from 
```
WP_Query
```

, if accessed through the WP REST API. FacetWP uses the WP REST API to retrieve posts with AJAX, when filtering. To fix this issue, [see our Member page](/help-center/using-facetwp-with/members/).
- When [using the MemberPress plugin](/help-center/using-facetwp-with/memberpress/), you may run into disappearing posts or no results at all after using facets. This issue is caused by the MemberPress plugin (since version 1.12.0) filtering out protected posts from 
```
WP_Query
```

, if accessed through the WP REST API. FacetWP uses the WP REST API to retrieve posts with AJAX, when filtering. To fix this issue, [see our MemberPress page](/help-center/using-facetwp-with/memberpress/).
- A JSON parse error, which is visible as an error in the XHR Response tab ([as explained above](#diagnosing-issues-with-the-console-network-xhr-response-tab)). This is usually caused by a plugin or the theme incorrectly appending part of the page HTML to the JSON response, often caused by improperly opened or closed 
```
ob_*()
```

 (output buffering) functions. The source of this can sometimes be hard to find. You can disable all but necessary plugins to find the culprit (for example with the [Health Check & Troubleshooting plugin](https://wordpress.org/plugins/health-check/)), or search your plugins and theme for 
```
ob_
```

 strings with your editor or the [String Locator plugin](https://wordpress.org/plugins/string-locator/). Another possible cause of JSON errors is a plugin or even the server incorrectly filtering the return data as if it were HTML, even though it is not. That is an even more difficult issue to diagnose. [Contact support](/help-center/get-support/) if you need help with this.
- Is your site hosted on WP Engine? Try [disabling WPE_GOVERNOR](/help-center/using-facetwp-with/wp-engine/#disable-wpe_governor), which is a WP Engine feature that limits long queries for performance reasons. The 
```
WPE_GOVERNOR
```

 limit can also cause the indexer to stall or not index all your posts. See [our WP Engine page](/help-center/using-facetwp-with/wp-engine/) for other WP Engine issues and solutions.

If you see “**FacetWP was unable to auto-detect the post listing**” instead of no results, [this FAQ answer lists common causes](/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/).

## No results on the search results page, without facets on the page

If you are seeing no results on your search results page (the page with 
```
/?s=searchterm
```

 in the URL), you are using [SearchWP](/help-center/using-facetwp-with/searchwp/) or [Relevanssi](/help-center/using-facetwp-with/relevanssi/), and your search results page **does not have facets on the page**, [this FAQ explains how to disable FacetWP on the search results page only](/help-center/faq/why-am-i-seeing-no-results-on-my-search-results-page/).

    
## See also

    - [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [Using FacetWP with All in One SEO (Pro)](https://facetwp.com/help-center/using-facetwp-with/all-in-one-seo-pro/)
- [Using FacetWP with WPML or Polylang](https://facetwp.com/help-center/using-facetwp-with/multilingual/)
- [Using FacetWP with SearchWP](https://facetwp.com/help-center/using-facetwp-with/searchwp/)
- [Using FacetWP with Relevanssi](https://facetwp.com/help-center/using-facetwp-with/relevanssi/)
- [Using FacetWP with the Members plugin](https://facetwp.com/help-center/using-facetwp-with/members/)
- [Using FacetWP with the MemberPress plugin](https://facetwp.com/help-center/using-facetwp-with/memberpress/)
- [Why am I seeing “FacetWP was unable to auto-detect the post listing”?](https://facetwp.com/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/)
- [Using the right query](https://facetwp.com/help-center/troubleshooting/using-the-right-query/)
- [How to pass authentication data through REST API requests](https://facetwp.com/how-to-pass-authentication-data-through-rest-api-requests/)
- [Why am I seeing no results on my search results page?](https://facetwp.com/help-center/faq/why-am-i-seeing-no-results-on-my-search-results-page/)

                    Last updated: August 20, 2026

---

## Why do I have missing posts or no results at all after using facets?

**Source:** [https://facetwp.com/help-center/faq/why-do-i-see-no-results-after-using-facets/](https://facetwp.com/help-center/faq/why-do-i-see-no-results-after-using-facets/)

When there are no results in the listing (actually nothing, or a “no results” message) after using facets, but results do appear after a hard page reload, more often than not, the issue is a malformed HTML structure of the page. This happens quite often, for example by accidentally copy-pasting a piece of code in the wrong spot.

On  AJAX refresh, when using facets, FacetWP processes the HTML between the first opening 
```
<body>
```

 tag and the first closing 
```
</body>
```

 tag. When there are multiple opening or closing 
```
<body>
```

 tags on the page, or if they are missing, or in the wrong place, the processed content/template will not include the listing/results, causing the “no results” issue to happen.

So, if you see this issue, open the page source in your browser, copy the whole HTML into an editor, and check if your HTML structure is sound. Make sure all opening and closing 
```
<html>
```

```
</html>
```

, 
```
<head>
```

```
</head>
```

 and 
```
<body>
```

```
</body>
```

 tags are present, in the right place, and appearing only once. Pay special attention to the opening 
```
<body>
```

 and closing 
```
</body>
```

 tags.

## Diagnosing issues with the Console Network XHR Response tab

Another way to diagnose the “no results” issue (and other refresh issues) is to use the browser Console.

Open the Console, then click the “Network” tab. Reload the page, then select the “XHR” tab, and use a facet. You’ll see an item appear that represents the AJAX refresh. Click on the item so the info about it appears. In the “Response” tab of this info will be the JSON that represents the refreshed content:

![Getting the template HTML for a FacetWP AJAX refresh, from the JSON Response tab in the Network > XHR tab in the browser Console.](https://facetwp.com/wp-content/uploads/2024/03/network-xhr-response.png)Getting the template HTML for a FacetWP AJAX refresh, from the JSON Response tab in the Network > XHR tab in the browser Console. The above screenshot is from Firefox. Other browsers have similarly named tabs.
If you copy the HTML of the “template” part of the JSON response to an editor, you can check whether that HTML is structured right and if it includes the results. If it does not, check your template file and/or its includes (like the header.php and footer.php files) for stray, duplicate, missing, or unclosed 
```
<html>
```

, 
```
<head>
```

 and 
```
<body>
```

 tags.

Note that this issue will never happen when using a [Listing Builder listing template](/help-center/listing-templates/listing-builder/), because this type of template is processed differently. It can happen on all other [supported listing templates](/help-center/listing-templates/) though.

## Other possible causes for missing posts or no results after using facets

Some other possible causes for missing posts or “no results” after using facets:

- [When using All in One SEO (Pro) in combination with a theme that does not support the “title-tag” feature](/help-center/using-facetwp-with/all-in-one-seo-pro/#fix-no-results-after-filtering).
- When using WPML or Polylang together with the [Multilingual add-on](/help-center/using-facetwp-with/multilingual/), without having [everything set up correctly](/help-center/using-facetwp-with/multilingual/). Basically, all posts need to have an explicit language set and must have a translation. And if you are using facets on a listing that has only posts **without** a language set, you need to [tell FacetWP to ignore its language parameter](/help-center/using-facetwp-with/multilingual/#fix-issues-with-filtering-posts-with-no-language-set).
- When [using the Members plugin](/help-center/using-facetwp-with/members/), you may run into disappearing posts or no results at all after using facets. This issue is caused by the Members plugin filtering out protected posts from 
```
WP_Query
```

, if accessed through the WP REST API. FacetWP uses the WP REST API to retrieve posts with AJAX, when filtering. To fix this issue, [see our Member page](/help-center/using-facetwp-with/members/).
- When [using the MemberPress plugin](/help-center/using-facetwp-with/memberpress/), you may run into disappearing posts or no results at all after using facets. This issue is caused by the MemberPress plugin (since version 1.12.0) filtering out protected posts from 
```
WP_Query
```

, if accessed through the WP REST API. FacetWP uses the WP REST API to retrieve posts with AJAX, when filtering. To fix this issue, [see our MemberPress page](/help-center/using-facetwp-with/memberpress/).
- A JSON parse error, which is visible as an error in the XHR Response tab ([as explained above](#diagnosing-issues-with-the-console-network-xhr-response-tab)). This is usually caused by a plugin or the theme incorrectly appending part of the page HTML to the JSON response, often caused by improperly opened or closed 
```
ob_*()
```

 (output buffering) functions. The source of this can sometimes be hard to find. You can disable all but necessary plugins to find the culprit (for example with the [Health Check & Troubleshooting plugin](https://wordpress.org/plugins/health-check/)), or search your plugins and theme for 
```
ob_
```

 strings with your editor or the [String Locator plugin](https://wordpress.org/plugins/string-locator/). Another possible cause of JSON errors is a plugin or even the server incorrectly filtering the return data as if it were HTML, even though it is not. That is an even more difficult issue to diagnose. [Contact support](/help-center/get-support/) if you need help with this.
- Is your site hosted on WP Engine? Try [disabling WPE_GOVERNOR](/help-center/using-facetwp-with/wp-engine/#disable-wpe_governor), which is a WP Engine feature that limits long queries for performance reasons. The 
```
WPE_GOVERNOR
```

 limit can also cause the indexer to stall or not index all your posts. See [our WP Engine page](/help-center/using-facetwp-with/wp-engine/) for other WP Engine issues and solutions.

If you see “**FacetWP was unable to auto-detect the post listing**” instead of no results, [this FAQ answer lists common causes](/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/).

## No results on the search results page, without facets on the page

If you are seeing no results on your search results page (the page with 
```
/?s=searchterm
```

 in the URL), you are using [SearchWP](/help-center/using-facetwp-with/searchwp/) or [Relevanssi](/help-center/using-facetwp-with/relevanssi/), and your search results page **does not have facets on the page**, [this FAQ explains how to disable FacetWP on the search results page only](/help-center/faq/why-am-i-seeing-no-results-on-my-search-results-page/).

    
## See also

    - [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [Using FacetWP with All in One SEO (Pro)](https://facetwp.com/help-center/using-facetwp-with/all-in-one-seo-pro/)
- [Using FacetWP with WPML or Polylang](https://facetwp.com/help-center/using-facetwp-with/multilingual/)
- [Using FacetWP with SearchWP](https://facetwp.com/help-center/using-facetwp-with/searchwp/)
- [Using FacetWP with Relevanssi](https://facetwp.com/help-center/using-facetwp-with/relevanssi/)
- [Using FacetWP with the Members plugin](https://facetwp.com/help-center/using-facetwp-with/members/)
- [Using FacetWP with the MemberPress plugin](https://facetwp.com/help-center/using-facetwp-with/memberpress/)
- [Why am I seeing “FacetWP was unable to auto-detect the post listing”?](https://facetwp.com/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/)
- [Using the right query](https://facetwp.com/help-center/troubleshooting/using-the-right-query/)
- [How to pass authentication data through REST API requests](https://facetwp.com/how-to-pass-authentication-data-through-rest-api-requests/)
- [Why am I seeing no results on my search results page?](https://facetwp.com/help-center/faq/why-am-i-seeing-no-results-on-my-search-results-page/)

                    Last updated: August 20, 2026

---

## Why do my facets disappear?

**Source:** [https://facetwp.com/help-center/faq/why-do-my-facets-disappear/](https://facetwp.com/help-center/faq/why-do-my-facets-disappear/)

The most common causes for disappearing facets are:

## Issues with the “facetwp-template” class

Most often, facets disappear because facet shortcodes are placed **inside** the 
```
facetwp-template
```

 container element, or they end up there after filtering. The content of the HTML element with that class is dynamically replaced when using facets, so facets always need to be **outside** of it to keep functioning properly.

In listings made with the [Listing Builder](/help-center/listing-templates/listing-builder/), this issue will never happen, because the class will be automatically placed on the right element.

But if you are using a [WP Archive](/help-center/listing-templates/wp-archive-page/) or a [custom WP_Query](/help-center/listing-templates/custom-wp-query/), or a setup with a [page builder](/help-center/listing-templates/using-a-page-builder/) query/posts block for your listing, your facets may end up **inside** the element that has the 
```
facetwp-template
```

 class after filtering, because in some situations the class is dynamically moved to a higher level parent element that also contains the facets.

The solution in all cases is removing the 
```
facetwp-template
```

 class from where you placed it (if you did), and manually placing it on an element that (directly) surrounds the post loop.

For further explanations about the role of the 
```
facetwp-template
```

 class in FacetWP’s automatic query detection, and ways to fix issues with it, see the sections about it on the [Using a WP Archive](/help-center/listing-templates/wp-archive-page/#solving-issues-with-facetwps-automatic-post-loop-detection) and [Using a custom WP_Query](/help-center/listing-templates/custom-wp-query/#solving-issues-with-facetwps-automatic-post-loop-detection) pages.

## Elementor Element Caching

Disappearing facets can also happen if you are [using Elementor](/help-center/using-facetwp-with/elementor/), with the [Element Caching](https://elementor.com/help/element-caching-help/) feature enabled. Element Caching is incompatible with FacetWP.

If you see a “[FacetWP was unable to auto-detect the post listing](/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/)” error, or if your facets are not showing (or disappearing after use), make sure to [disable Element Caching globally or in every FacetWP-related widget](/help-center/using-facetwp-with/elementor/#fix-issues-caused-by-elementors-element-caching-feature).

    
## See also

    - [Using a WP archive page](https://facetwp.com/help-center/listing-templates/wp-archive-page/)
- [Using a custom WP_Query](https://facetwp.com/help-center/listing-templates/custom-wp-query/)
- [Using the Listing Builder](https://facetwp.com/help-center/listing-templates/listing-builder/)
- [Using a page builder](https://facetwp.com/help-center/listing-templates/using-a-page-builder/)
- [Using FacetWP with Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/)
- [Why am I seeing “FacetWP was unable to auto-detect the post listing”?](https://facetwp.com/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/)
- [Why is my facet empty?](https://facetwp.com/help-center/faq/why-is-my-facet-empty/)

                    Last updated: March 14, 2025

---

## Why does FacetWP prefix its URL vars?

**Source:** [https://facetwp.com/help-center/faq/why-does-facetwp-prefix-its-url-vars/](https://facetwp.com/help-center/faq/why-does-facetwp-prefix-its-url-vars/)

FacetWP’s query variables use a 
```
_
```

 prefix to prevent conflicts with WordPress and other plugins.

WordPress has many [reserved terms](https://codex.wordpress.org/Reserved_Terms) and [reserved query variables](https://codex.wordpress.org/WordPress_Query_Vars#List_of_Query_Vars). Unexpected things would happen if FacetWP would use them.

For more info about FacetWP’s URL variables, see [this page](/help-center/developers/the-facetwp-url/).

    
## See also

    - [The FacetWP URL](https://facetwp.com/help-center/developers/the-facetwp-url/)

                    Last updated: September 7, 2022

---

## Why is my facet empty?

**Source:** [https://facetwp.com/help-center/faq/why-is-my-facet-empty/](https://facetwp.com/help-center/faq/why-is-my-facet-empty/)

- Have you hit the [Re-index button](/help-center/indexing/#how-to-run-the-indexer)?
- Does a valid [listing template](/help-center/listing-templates/) exist on your page?
- Do you see a 
```
facetwp-template
```

 class on a container element surrounding your listing? If not, check the documentation on the [listing template type](/help-center/listing-templates/) you are using for ways to fix this. In most scenarios, you can add this class manually. If you are using an optimization plugin, check if you have an HTML minification setting enabled. HTML minification will remove FacetWP’s 
```
<!--fwp-loop-->
```

 HTML comment, which (on some listing template types) is used to automatically detect the listing and add the needed 
```
facetwp-template
```

 class. This happens most often [using Cloudflare’s “Auto Minify” feature](/help-center/using-facetwp-with/cloudflare/#disable-auto-minify-html), and [using Fast Velocity Minify](/help-center/using-facetwp-with/fast-velocity-minify/).
- Is your post type [searchable](/help-center/indexing/common-indexing-issues/#fix-issues-with-indexing-post-types)? (is the 
```
exclude_from_search
```

 parameter set to 
```
false
```

 when the post type is registered)?
- Does your facet [show any rows after indexing](/help-center/indexing/common-indexing-issues/#fix-empty-row-counts)? If not, there could be something wrong with the facet’s selected Data Source. Make sure that you select a valid data source and check if your posts have (valid) values saved for the selected field. After making corrections, [re-index](/help-center/indexing/#how-to-run-the-indexer) again to see the updated row counts. Also, make sure that any custom code [using the facetwp_index_row hook](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/) is correct, or remove it temporarily to test (make sure to re-index after doing so). To check if facets are working okay in general, create a test facet with its Data Source set to “Post Type” and re-index. This is a Data Source that should always work.
- FacetWP could be detecting the wrong query to use for filtering. Make sure that [the “Advanced query detection” setting](/help-center/faq/what-is-advanced-strict-query-detection/) (called “**Strict query detection**” in FacetWP versions older than [v4.5](/help-center/changelog/#4-5)) is enabled. It prevents FacetWP’s automatic query detection from incorrectly choosing (invisible) archive queries on the page to filter.
- For some specific types of custom fields — like [serialized data](/help-center/indexing/#how-to-index-serialized-data) or relationship fields — you may need to [tell FacetWP’s indexer how to properly index the data](/help-center/developers/hooks/indexing-hooks/facetwp_index_row/).
- Are you [using Elementor](/help-center/using-facetwp-with/elementor/), with the [Element Caching](https://elementor.com/help/element-caching-help/) feature enabled? Element Caching is incompatible with FacetWP. If you see a [“FacetWP was unable to auto-detect the post listing” error](/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/), or if your facets are not showing (or disappearing after use), make sure to [disable Element Caching globally or in every FacetWP-related widget](/help-center/using-facetwp-with/elementor/#fix-issues-caused-by-elementors-element-caching-feature).
- Is your site hosted on WP Engine, and are your facets empty after filtering? Try [disabling WPE_GOVERNOR](/help-center/using-facetwp-with/wp-engine/#disable-wpe_governor), which is a WP Engine feature that limits long queries for performance reasons. The 
```
WPE_GOVERNOR
```

 limit can also cause the indexer to stall or not index all your posts. See [our WP Engine page](/help-center/using-facetwp-with/wp-engine/) for other WP Engine issues and solutions.
- If you are using WPML or Polylang, [with the Multilingual add-on](/help-center/using-facetwp-with/multilingual/), FacetWP expects posts to have a language. [Set up translations as instructed](/help-center/using-facetwp-with/multilingual/), and make sure your page and the posts in the listing all have a language set. To filter posts without a language you can [tell FacetWP to ignore the language](/help-center/using-facetwp-with/multilingual/#fix-issues-with-filtering-posts-with-no-language-set).
- Are there any JavaScript errors in your browser’s Console that can be fixed or give a clue?
- Turn on [Debug Mode](/help-center/troubleshooting/#enabling-debug-mode) and make sure that [FacetWP is using the right query](/help-center/troubleshooting/using-the-right-query/).
- Is the WordPress [wp_footer()](https://developer.wordpress.org/reference/functions/wp_footer/) function present in your (child) theme’s footer section? The footer section is usually a file named 
```
footer.php
```

. If this function is not there, FacetWP’s [JavaScript and CSS assets](/help-center/developers/hooks/advanced-hooks/facetwp_assets/) cannot load in the footer, resulting in empty facets. Also [code snippets using the “wp_footer” action](/how-to-use-custom-code/) will not work. If 
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
- If you are using the **Pro** version of [The Events Calendar](/help-center/using-facetwp-with/the-events-calendar-pro/), facets will be empty if you are trying to filter a query containing the 
```
tribe_events
```

 post type. See the [explanation of the issue and possible fixes](/help-center/using-facetwp-with/the-events-calendar-pro/#fix-issues-with-the-events-calendar-pro).
- Do you have post IDs higher than 
```
4294967295
```

 (
```
2^32-1
```

)? If so, your posts cannot be properly indexed because of the limitations of the database field that stores these post IDs. Implement [this fix to increase this limit](/help-center/indexing/common-indexing-issues/#fix-indexing-issues-with-very-high-post-ids).

    
## See also

    - [Indexing](https://facetwp.com/help-center/indexing/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [What is “Advanced/Strict query detection”?](https://facetwp.com/help-center/faq/what-is-advanced-strict-query-detection/)
- [Using FacetWP with Cloudflare](https://facetwp.com/help-center/using-facetwp-with/cloudflare/)
- [Using FacetWP with Fast Velocity Minify](https://facetwp.com/help-center/using-facetwp-with/fast-velocity-minify/)
- [Why am I seeing “FacetWP was unable to auto-detect the post listing”?](https://facetwp.com/help-center/faq/why-am-i-seeing-facetwp-was-unable-to-auto-detect-the-post-listing/)
- [Using FacetWP with Advanced Custom Fields](https://facetwp.com/help-center/using-facetwp-with/advanced-custom-fields/)
- [Using FacetWP with Pods](https://facetwp.com/help-center/using-facetwp-with/pods/)
- [The facetwp_index_row hook](https://facetwp.com/help-center/developers/hooks/indexing-hooks/facetwp_index_row/)
- [Using FacetWP with Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/)
- [Using FacetWP with WP Engine](https://facetwp.com/help-center/using-facetwp-with/wp-engine/)
- [Troubleshooting guide](https://facetwp.com/help-center/troubleshooting/)
- [Using the right query](https://facetwp.com/help-center/troubleshooting/using-the-right-query/)
- [Using FacetWP with The Events Calendar](https://facetwp.com/help-center/using-facetwp-with/the-events-calendar-pro/)
- [The facetwp_assets hook](https://facetwp.com/help-center/developers/hooks/advanced-hooks/facetwp_assets/)
- [How to use custom code?](https://facetwp.com/how-to-use-custom-code/)
- [Why do my facets disappear?](https://facetwp.com/help-center/faq/why-do-my-facets-disappear/)
- [Why is my facet missing some choices?](https://facetwp.com/help-center/faq/why-is-my-facet-missing-some-choices/)
- [Why are my facets not showing choices for all my products?](https://facetwp.com/help-center/faq/why-are-my-facets-not-showing-choices-for-all-my-products/)

                    Last updated: August 20, 2026

---

## Why is my facet missing some choices?

**Source:** [https://facetwp.com/help-center/faq/why-is-my-facet-missing-some-choices/](https://facetwp.com/help-center/faq/why-is-my-facet-missing-some-choices/)

These are the most common reasons for missing facet choices:

## No posts in the listing for the missing choices

FacetWP only [indexes](/help-center/indexing/) and displays facet choices that have results in the listing. This means that for a choice to show up, at least one post in the listing needs to have a value set for the data source used.

For example, if your facet uses a taxonomy as data source, make sure there is at least one post in the listing that has the missing term selected for the taxonomy used. If your facet uses a custom field, make sure the field is populated for at least one of the posts.

## The facet’s Limit setting is too low

If your facet is missing some choices despite posts in the listing using them (as explained above), or if the 
```
[+]
```

 icon(s) don’t show up in a hierarchical [Checkboxes facet](/help-center/facets/facet-types/checkboxes/#hierarchical) or [Exclude facet](/help-center/facets/facet-types/exclude/#hierarchical), make sure the facet’s [“Limit” setting](/help-center/facets/facet-types/checkboxes/#limit) is high enough, or disable the “[Limit choices](/help-center/facets/facet-types/checkboxes/#limit-choices)” setting entirely.

In facets with a hierarchical taxonomy as data source, **the limit includes child terms/categories**. If the limit is set too low, (some) child options will not show up. To fix this, the same applies: either set a count high enough to include all child terms/categories, or set it to 
```
-1
```

 to show *all* choices, or disable the “[Limit choices](/help-center/facets/facet-types/checkboxes/#limit-choices)” setting entirely.

Note that not all facet types have “Limit choices” and “Limit” settings. In FacetWP versions older than v4.6, the “Limit” setting was called “Count”. The “[Limit choices](/help-center/facets/facet-types/checkboxes/#limit-choices)” setting is available in FacetWP v4.6+.

## Multiple facet choices sharing a truncated facet_value of 50 characters long

FacetWP’s indexing table has a [maximum of 50 characters](/help-center/developers/facetwp-performance-speed-limits-and-scalability/#indexing-value-limits) for the 
```
facet_value
```

 (the technical value of the choice) that is stored during indexing. If the value is longer, it is truncated to 50 characters before storing. If the truncated value is the same for multiple choices, this will result in one of the choices missing in the facet.

For example, if you have a facet using a taxonomy, and there are two terms with a **slug** that is more than 50 characters long, and the difference between those slugs is in the truncated part, both facet choices will be stored with the same 
```
facet_value
```

. Despite these two choices having a different term **name** (which is stored in 
```
facet_display_value
```

), the shared 
```
facet_value
```

 will result in one of the choices missing in the facet.

To fix this, make sure the indexed values (the term slugs in this example) are less than 50 characters. Or if you need them that long, make sure their difference is in the first 50 characters, not in the truncated part.

    
## See also

    - [Indexing](https://facetwp.com/help-center/indexing/)
- [Can I show facet choices with no results?](https://facetwp.com/help-center/faq/can-i-show-facet-choices-with-no-results/)
- [Why are my facets not showing choices for all my products?](https://facetwp.com/help-center/faq/why-are-my-facets-not-showing-choices-for-all-my-products/)
- [Why is my facet empty?](https://facetwp.com/help-center/faq/why-is-my-facet-empty/)
- [The Checkboxes facet type](https://facetwp.com/help-center/facets/facet-types/checkboxes/)
- [The Dropdown facet type](https://facetwp.com/help-center/facets/facet-types/dropdown/)
- [The Radio facet type](https://facetwp.com/help-center/facets/facet-types/radio/)
- [The fSelect facet type](https://facetwp.com/help-center/facets/facet-types/fselect/)
- [The Hierarchy facet type](https://facetwp.com/help-center/facets/facet-types/hierarchy/)
- [The Color facet type](https://facetwp.com/help-center/facets/facet-types/color/)
- [The Exclude facet type](https://facetwp.com/help-center/facets/facet-types/exclude/)
- [FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
- [FacetWP and taxonomies](https://facetwp.com/help-center/developers/facetwp-and-taxonomies/)

                    Last updated: July 30, 2026

---

## Why is my layout different or are images missing after filtering?

**Source:** [https://facetwp.com/help-center/faq/why-is-my-layout-different-and-or-images-missing-after-filtering/](https://facetwp.com/help-center/faq/why-is-my-layout-different-and-or-images-missing-after-filtering/)

Some plugins and themes use JavaScript to modify the layout, load images, or apply animation effects. Some examples include masonry or isotope layouts/grids, image lazy loading, and sliders/carousels.

These scripts run on the initial page load, but do not usually run after each FacetWP AJAX refresh, meaning that they’ll likely need to be manually re-triggered within a [facetwp-loaded](/help-center/developers/javascript-reference/facetwp-loaded/) event.

Some theme and plugins offer a setting that (re-)triggers these scripts on AJAX refresh.

    
## See also

    - [The facetwp-loaded event](https://facetwp.com/help-center/developers/javascript-reference/facetwp-loaded/)

                    Last updated: November 15, 2023

---

## Why is my “load more” button/feature not working?

**Source:** [https://facetwp.com/help-center/faq/why-is-my-load-more-button-feature-not-working/](https://facetwp.com/help-center/faq/why-is-my-load-more-button-feature-not-working/)

Any form of infinity load / infinite scroll / load more button that is added by other plugins, themes, blocks, or page builder modules/widgets **will not work as expected**. It may look like it is working because new posts are loaded, but the posts will not be correctly filtered by facets.

The closest thing is the [Pager facet](/help-center/facets/facet-types/pager/), which has a [pager type that generates a “Load more” button](/help-center/facets/facet-types/pager/#load-more-pager-type).

    
## See also

    - [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [Using a page builder](https://facetwp.com/help-center/listing-templates/using-a-page-builder/)
- [Using FacetWP with WordPress blocks](https://facetwp.com/help-center/using-facetwp-with/blocks/)
- [Why is my pagination not working?](https://facetwp.com/help-center/faq/why-is-my-pagination-not-working/)
- [Does FacetWP support infinite scroll?](https://facetwp.com/help-center/faq/does-facetwp-support-infinite-scroll/)
- [How to scroll the page on facet interaction](https://facetwp.com/how-to-scroll-the-page-on-facet-interaction/)

                    Last updated: November 27, 2024

---

## Why is my page scrolling?

**Source:** [https://facetwp.com/help-center/faq/why-is-my-page-scrolling/](https://facetwp.com/help-center/faq/why-is-my-page-scrolling/)

Since [version 4.2.12](/help-center/changelog/#4-2-12), FacetWP has a [Scroll target setting](/help-center/facets/facet-types/pager/#scroll-target) to enable page scrolling when [using a Pager facet](/help-center/facets/facet-types/pager/). Except in this Pager facet setting, **FacetWP and its add-ons do not add any scrolling behavior anywhere**.

If you see unwanted scrolling behavior, check your theme settings and other plugins.

Make sure you are not using a custom scrolling solution from [our scrolling tutorial](/how-to-scroll-the-page-on-facet-interaction/) in your (child) theme’s functions.php or a code snippets plugin.

If you are using the Beaver Builder add-on, check if you have Beaver Builder’s “Render CSS/JS assets inline” setting enabled, or if you are using the 
```
fl_builder_render_assets_inline
```

 filter hook, [which both cause a JavaScript error that re-enables Beaver Builder’s page scroll that is prevented by FacetWP’s Beaver Builder add-on](/help-center/using-facetwp-with/beaver-builder/#prevent-unwanted-scrolling).

    
## See also

    - [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [How to scroll the page on facet interaction](https://facetwp.com/how-to-scroll-the-page-on-facet-interaction/)
- [Using FacetWP with Beaver Builder](https://facetwp.com/help-center/using-facetwp-with/beaver-builder/)
- [FAQ: How to automatically scroll the page on facet interaction?](https://facetwp.com/help-center/faq/how-to-scroll-the-page-on-facet-interaction/)
- [Does FacetWP support infinite scroll?](https://facetwp.com/help-center/faq/does-facetwp-support-infinite-scroll/)

                    Last updated: March 22, 2024

---

## Why is my pagination not working?

**Source:** [https://facetwp.com/help-center/faq/why-is-my-pagination-not-working/](https://facetwp.com/help-center/faq/why-is-my-pagination-not-working/)

FacetWP in most cases is **not** compatible with “normal” (link-based) numbered pagination that comes with your theme, [page builder widgets/modules](/help-center/listing-templates/using-a-page-builder/) or [blocks](/help-center/listing-templates/using-wordpress-blocks/). Link-based pagination reloads the page with e.g. 
```
/page/2
```

 in the URL, while FacetWP refreshes the page with AJAX. Also (non-FacetWP) AJAX-based pagination is **not** compatible with FacetWP.

To get your pagination to work with your [listing template](/help-center/listing-templates/), you need to replace it with a (numbered) [Pager facet](/help-center/facets/facet-types/pager/). Make sure that this Pager facet is **outside** of the listing container with class 
```
facetwp-template
```

, like any facet should be. This is important to check because link-based pagination is often inside the listing container.

Note that there are several **exceptions** to the above. For some modules/widgets in the [FacetWP-supported page builders](/help-center/listing-templates/using-a-page-builder/) and [blocks](/help-center/listing-templates/using-wordpress-blocks/), you *can* use their built-in pagination. Check the respective Help Center pages for info on where it works and where not. FacetWP also [supports WooCommerce built-in pagination](/help-center/using-facetwp-with/woocommerce/#using-woocommerce-pagination-and-sorting). In all situations, it is also possible to use a Pager facet instead.

It is also possible to make link-based pagination work with FacetWP:

## Make link-based pagination work with FacetWP

If you are a developer, it is also possible to customize any link-based pagination to work with FacetWP, by intercepting the click events and letting them trigger a FacetWP AJAX refresh.

Here is a basic example:

```
How to use custom PHP code?PHP code can be added to your (child) theme's functions.php file. Alternatively, you can use the Custom Hooks add-on, or a code snippets plugin. More info// Change 'a.page-numbers' in line 9 to match the element of the links.
// Line 11 matches on page link format of '/page/x/'. Change this if needed.
// Important: the pager must be within the element with the 'facetwp-template' class.

add_action( 'facetwp_scripts', function() {
  ?>
  <script>
    (function($) {
      $().on('click', 'a.page-numbers', function(e) {
        e.preventDefault();
        var matches = $(this).attr('href').match(/\/page\/(\d+)/);
        if (null !== matches) {
          FWP.paged = parseInt(matches[1]);
          FWP.soft_refresh = true;
          FWP.refresh();
        }
      });
    })(fUtil);
  </script>
  <?php
}, 100 );
```

When using this setup, you need to make sure the pager is **inside** the listing container with class 
```
facetwp-template
```

 (as opposed to when using a Pager facet), because otherwise the pager will not update its “current” page when used.

FacetWP uses this concept itself in several places: in the WooCommerce integration JavaScript file, and in the JS code of our [Blocks](https://facetwp.com/help-center/using-facetwp-with/blocks/), [Bricks](https://facetwp.com/help-center/using-facetwp-with/bricks/), [Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/) and [Beaver Builder](https://facetwp.com/help-center/using-facetwp-with/beaver-builder/) add-ons. You can also check out [this example using the WP PageNavi plugin](/help-center/developers/the-facetwp-url/#use-wp-pagenavi-pagination).

    
## See also

    - [The Pager + Load more facet type](https://facetwp.com/help-center/facets/facet-types/pager/)
- [Listing templates](https://facetwp.com/help-center/listing-templates/)
- [Using FacetWP with WordPress blocks](https://facetwp.com/help-center/using-facetwp-with/blocks/)
- [Using a page builder](https://facetwp.com/help-center/listing-templates/using-a-page-builder/)
- [Using FacetWP with Elementor](https://facetwp.com/help-center/using-facetwp-with/elementor/)
- [Using FacetWP with Beaver Builder](https://facetwp.com/help-center/using-facetwp-with/beaver-builder/)
- [Using FacetWP with Bricks Builder](https://facetwp.com/help-center/using-facetwp-with/bricks/)
- [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [The FacetWP URL](https://facetwp.com/help-center/developers/the-facetwp-url/)
- [Why is my “load more” button/feature not working?](https://facetwp.com/help-center/faq/why-is-my-load-more-button-feature-not-working/)
- [Does FacetWP support infinite scroll?](https://facetwp.com/help-center/faq/does-facetwp-support-infinite-scroll/)

                    Last updated: November 27, 2024

---

## Why is my Sort facet not working on my products/shop page?

**Source:** [https://facetwp.com/help-center/faq/why-is-my-sort-facet-not-working-on-my-products-shop-page/](https://facetwp.com/help-center/faq/why-is-my-sort-facet-not-working-on-my-products-shop-page/)

![The only two WooCommerce's 'Default product sorting' options that work with Sort facets.](https://facetwp.com/wp-content/uploads/2023/03/woocommerce-default-product-sorting.png)The only two WooCommerce’s “Default product sorting” options that work with Sort facets.
If you are [using WooCommerce](/help-center/using-facetwp-with/woocommerce/), and your [Sort facet](/help-center/facets/facet-types/sort/) does not work on your products/shop page, you probably have set WooCommerce’s “Default product sorting” setting to a sort option that is incompatible with Sort facets.

There are only two “Default product sorting” options that work with Sort facets:

1. Default sorting (custom ordering + name)
2. Sort by most recent

The other sort options are incompatible because FacetWP cannot change them.

For more info and ways to still use one of the incompatible sort options, see [this section on the WooCommerce page](/help-center/using-facetwp-with/woocommerce/#replace-woocommerce-sorting-with-a-sort-facet).

    
## See also

    - [The Sort facet type](https://facetwp.com/help-center/facets/facet-types/sort/)
- [Using FacetWP with WooCommerce](https://facetwp.com/help-center/using-facetwp-with/woocommerce/)
- [The facetwp_facet_sort_options hook](https://facetwp.com/help-center/developers/hooks/output-hooks/facetwp_facet_sort_options/)

                    Last updated: March 13, 2024

---

## Why is Wordfence showing an abandoned plugin warning?

**Source:** [https://facetwp.com/help-center/faq/why-is-wordfence-showing-an-abandoned-plugin-warning/](https://facetwp.com/help-center/faq/why-is-wordfence-showing-an-abandoned-plugin-warning/)

If you have Wordfence installed, after performing a scan, you may see a warning that certain FacetWP add-ons “appear to be abandoned”. Wordfence will show this warning [when a plugin has not been updated in 2 years or more](https://www.wordfence.com/help/scan/scan-results/#plugin-abandoned).

Rest assured, **FacetWP does not have any abandoned add-ons**. All add-ons mentioned on [the Add-Ons page](/add-ons/) are maintained and kept up-to-date. Some just don’t need updates that often because they work fine as they are. We will update add-ons as needed.

Sometimes we may retire certain legacy add-ons, like the [Pods add-on](https://facetwp.com/help-center/using-facetwp-with/pods), but if that happens it will be removed from the Add-Ons page, and there will be a clear banner on the add-on’s page.

If you don’t like these Wordfence warnings, you can disable them in Wordfence under All options > Scan options > Scan for out of date, abandoned, and vulnerable plugins, themes, and WordPress versions.

    
## See also

    - [FacetWP Add-Ons](https://facetwp.com/add-ons/)
- [Installation and your account](https://facetwp.com/help-center/installation/)
- [Do I get plugin updates?](https://facetwp.com/help-center/faq/do-i-get-plugin-updates/)
- [Why are automatic updates not appearing in my plugins dashboard?](https://facetwp.com/help-center/faq/why-are-automatic-updates-not-appearing-in-my-plugins-dashboard/)
- [Using FacetWP with Pods](https://facetwp.com/help-center/using-facetwp-with/pods/)

                    Last updated: July 24, 2024

---

## Why isn’t FacetWP working with my caching plugin?

**Source:** [https://facetwp.com/help-center/faq/why-isnt-facetwp-working-with-caching-plugins/](https://facetwp.com/help-center/faq/why-isnt-facetwp-working-with-caching-plugins/)

If you’re using a caching plugin, in general, make sure that [HTML minification and script deferring are disabled](/help-center/developers/facetwp-performance-speed-limits-and-scalability/#using-caching-plugins).

FacetWP has [built-in support for WP Rocket](/help-center/using-facetwp-with/wp-rocket/). See our tips and tricks for using [Cloudflare](/help-center/using-facetwp-with/cloudflare/), [Fast Velocity Minify](/help-center/using-facetwp-with/fast-velocity-minify/), [WP Engine](/help-center/using-facetwp-with/wp-engine/), and [Pressable](/help-center/using-facetwp-with/pressable/).

Also be aware that in most cases, [using FacetWP in combination with (persistent) object caching is problematic](/help-center/using-facetwp-with/object-caching/).

    
## See also

    - [FacetWP performance, speed, limits and scalability](https://facetwp.com/help-center/developers/facetwp-performance-speed-limits-and-scalability/)
- [How to make your website load faster](https://facetwp.com/how-to-make-your-website-load-faster/)
- [Using FacetWP with WP Rocket](https://facetwp.com/help-center/using-facetwp-with/wp-rocket/)
- [The Caching add-on](https://facetwp.com/help-center/add-on-features-and-extras/caching/)
- [Using FacetWP with Cloudflare](https://facetwp.com/help-center/using-facetwp-with/cloudflare/)
- [Using FacetWP with Fast Velocity Minify](https://facetwp.com/help-center/using-facetwp-with/fast-velocity-minify/)
- [Using FacetWP with WP Engine](https://facetwp.com/help-center/using-facetwp-with/wp-engine/)
- [Using FacetWP with Pressable](https://facetwp.com/help-center/using-facetwp-with/pressable/)
- [Using FacetWP with object caching](https://facetwp.com/help-center/using-facetwp-with/object-caching/)

                    Last updated: January 24, 2025

---

