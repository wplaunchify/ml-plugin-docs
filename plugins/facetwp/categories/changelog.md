# Changelog

*Category from FacetWP documentation*

---

## Changelog

**Source:** [https://facetwp.com/help-center/changelog/](https://facetwp.com/help-center/changelog/)

## 4.5

- March 23, 2026
- Newsee the [FacetWP 4.5 release post](https://facetwp.com/whats-new-in-facetwp-4-5/)

## 4.4.1

- April 23, 2025
- Newsee the [FacetWP 4.4 release post](https://facetwp.com/whats-new-in-facetwp-4-4/)
- Fixed4.4.1 fixed a gmaps_api_key upgrade error for some sites

## 4.3.6

- January 31, 2025
- Fixedescape the gmaps API key field (props Tom B)

## 4.3.5

- December 16, 2024
- Fixedvarious bugfixes and tweaks
- Fixedbetter support ACF fields in the "Other data source" setting
- Improvedrevamped the "UI type" component (used for various add-ons)

## 4.3.4

- November 21, 2024
- Improvedlots of admin UI tweaks
- Improvedimproved import/export UI to allow "select all"
- Improvedsupport WooCommerce stock status for ACF fields
- FixedCodeMirror (code editor) initialization bug
- Fixedthe temp table should get deleted when the index is purged
- Fixedonly modify term_link URLs after the `woocommerce_shop_loop_header` action fires
- Newadded `total_unfiltered` property to the pager arguments (get unfiltered count)
- New`Enable automatic indexing` setting for those wanting to re-index manually

## 4.3.3

- August 20, 2024
- Fixednot all "product" post types belong to WooCommerce
- Fixedrenamed the `facetwp_transients` wp_option to prevent 3rd party conflicts

## 4.3.2

- August 19, 2024
- Newvisual code editor (for listing templates)!
- Improvedbetter update-check logic
- Improvedability to translate listing builder button labels
- ImprovedfSelect - support for 3+ nesting levels
- Improvedadded `facetwp_admin_settings_capability` hook to allow trusted editors to access FacetWP settings
- Improvedbetter ACF handling for out-of-stock WooCommerce products
- Improvedadded admin warning icon when Debug Mode is enabled
- FixedACF nested repeater field indexing
- Fixedindexing progress bar not updating correctly when the auto-indexer is disabled
- Fixedset a global default facet orderby (count)

## 4.3.1

- June 20, 2024
- Improvedstyling for "locked" (i.e. code-based) facets and templates
- ImprovedListing builder - hide the "Reset" facet mobile header
- Improvedcheckboxes - the "See more/less" links are translatable
- Fixedquery detection should ignore queries running inside `get_the_excerpt` (i.e. some block-based templates)
- FixedACF - prevent deprecated notices for NULL date values
- Fixed`FWP.active_facet` not working in some browsers

## 4.3

- May 7, 2024
- Newsearch facets - added "Enable relevance" UI setting
- Improvedslider facets - only trigger a refresh when the slider handles actually move
- Improveddebug mode - show all FacetWP-related hooks in use (even ones that return a boolean)
- Improvedproximity facets - allow radius unit to be translatable
- ImprovedWooCommerce - better counts calculation for the `facetwp_woocommerce_support_categories_display` hook (WC category filtering)
- Updateddependencies

## 4.2.12

- March 12, 2024
- Newpager facet - added "Scroll target" and "Scroll offset" UI settings to fine-tune pager scrolling
- ImprovedDate range - hide date range when no dates are available
- ImprovedDate range - add placeholder for disabled dates
- Improvedbetter Multi-site debugging
- Improvedmisc styling tweaks and Slider facet styling for RTL support
- Improvedbetter ACF checks to ensure that fields still exist
- Fixedchange date defaults from 0 to empty string
- Fixedensure that Pager facet's scroll offset is an integer

## 4.2.11

- January 22, 2024
- Fixedanother Date Range typo (last one!)

## 4.2.10

- January 18, 2024
- Fixedtypo causing Date Range facets to break

## 4.2.9

- January 17, 2024
- ImprovedGoogle maps - added sessionTokens to (hopefully) reduce the number of API calls
- Improvedadded "indexable cpts" to the debug info for easier troubleshooting
- Fixedsome PHP8 deprecation notices
- Fixedhide the "user selections" area when empty
- Fixedquery detection issue involving SearchWP
- Fixedadded more reserved words for facet/listing names (automatically prefixed with underscore)

## 4.2.8

- December 1, 2023
- FixedACF "button_group" fields can now have labels too
- Fixedquery detection issue with SearchWP active

## 4.2.7

- November 8, 2023
- Fixedmysqli notice for sites on WP 6.4+
- Fixedctype_digit() notice for sites on PHP 8.1+

## 4.2.6

- October 31, 2023
- Improvedshort-circuit SearchWP when "s" is empty and a search facet is in use
- Improveda11y - added `aria-label` attribute for number range facets
- Fixedpreloaded selections now appear in the "User Selections" box
- FixedJS error upon reset click for non-existant facets
- Fixedsupport - replace ".php" in plugin names to prevent Cloudflare from going haywire

## 4.2.5

- September 7, 2023
- Newadded "ui_ghosts" setting (needed for range_list and future facets)
- Improvedimproved main query detection for when query args are in a slightly different order

## 4.2.4

- August 3, 2023
- Fixedissue preventing "_builtin" post types from indexing

## 4.2.3

- August 1, 2023
- ImprovedStar rating facet - added new UI color settings
- Improvedenable "Strict query detection" by default for new installs
- Fixedadmin UI - row counts not updating after re-indexing
- Fixedreplaced default post_types from "any" to an actual array, for better WooCommerce compatibility
- FixedListing builder - WooCommerce source field inconsistencies
- FixedWooCommerce - hid the `cf/_product_attributes` custom field, in favor of `cf/attribute_*`

## 4.2.2

- June 28, 2023
- Newadded `facetwp_scripts` WP action to manually add custom scripts
- NewProximity facet - added Placeholder field
- Fixedbetter detection / handling when `facetwp_pre_filtered_post_ids` or `facetwp_filtered_post_ids` hooks are in use
- FixedDate range - PHP warning when no end date is set (props Oscar M.)
- FixedWooCommerce - prevent issues for custom-translated stock statuses
- Fixedmore PHP8 deprecation notices

## 4.2.1

- June 5, 2023
- Fixed`FWP()->is_filtered` should account for `facetwp_pre_filtered_post_ids` hook usage (fixes Advanced Woo Search)

## 4.2.0

- May 17, 2023
- Fixedadmin - prevent caching of index table row counts
- Fixedadmin - plugin install notice listed the wrong add-on name (e.g. "WPML" instead of "Multilingual")
- Fixedload more - prevent injecting results into static templates
- Fixedindexer - issue causing index values for a post to clear on save
- Improvedsupport - include memory stats
- Improvedsupport - include whether Debug Mode is turned on
- 

## 4.1.9

- May 1, 2023
- Improvedinclude `aria-label` for fSelect dropdowns
- Fixedadmin UI loading issues on Safari
- Fixedpossible undefined facet limits

## 4.1.8

- Apr 14, 2023
- Improved(re-)added notices when necessary integration add-ons are missing
- Improvedadmin UI - show the HTTP status code when an ajax request fails
- Improvedmigration script efficiency tweaks
- FixedHierarchy facet - changed "Count" setting to "Soft limit" for consistency
- FixedListing builder - switched button items back from HTML button to link elements
- Fixed"Show indexable post types" UI setting now takes the `facetwp_indexer_query_args` hook into account

## 4.1.7

- Mar 20, 2023
- FixedPHP 8.2 "AllowDynamicProperties" deprecation notices (props Andrew M.)

## 4.1.6

- Mar 6, 2023
- Improvedautocomplete - support `facetwp_facet_display_value` hook
- Improvedlisting builder - use a <form> for button links ("A" tags around buttons is invalid HTML)

## 4.1.5

- Feb 7, 2023
- Newadded `facetwp_proximity_store_latlng` hook
- Improvedlisting builder - shortcode support for the "No results text" box
- ImprovedWooCommerce - renamed "Include all products" UI setting to "Index out-of-stock products"
- Fixedensure that `facetwp_get_distance` returns the closest distance when a post contains multiple locations
- FixedSearchWP - prevent extra escaped quotes
- Fixedproximity - added the (now required) gmap `callback` argument
- Fixedplaceholder text not appearing for autocomplete and search facets

## 4.1.4

- Jan 16, 2022
- Newadded "No results text" field to the listing builder
- ImprovedWP-CLI integration - use temp table, just like the UI version
- FixedJSON response - ensure that "action" is a string (3rd party plugins sometimes break this standard)
- Updatedbuild tools

## 4.1.3

- Dec 15, 2022
- Improveddata source dropdown - add taxonomy names after the labels (helps distinguish taxonomies sharing the same label)
- Fixedlisting builder - prevent double timezone offset

## 4.1.2

- Nov 10, 2022
- Fixedquery builder - "EMPTY" and "NOT EMPTY" clauses
- FixedACF integration - prevent PHP8 error on invalid parent fields
- Fixedtypo with "Strict query detection" setting, please re-save if using that setting

## 4.1.1

- Nov 4, 2022
- Newadded experimental "Strict query detection" UI setting
- Improvedindex table charset switched to utf8mb4 (for Emoji support)
- Improveddate range - input labels can now be translated via facetwp_i18n
- Improveddate range - a11y support
- FixedfSelect lib - fire a change event, even when the value is empty
- Fixeda11y - added "aria-hidden" to hidden items to prevent ARIA warnings
- Fixedthe `facetwp_template_use_archive` hook should support the "s" argument
- Fixedquery builder - issue with the "EXISTS" / "NOT EXISTS" query filter clauses

## 4.1

- October 4, 2022
- Improvedtweaked admin UI styling
- Improvedslider - prefix / suffix fields are now translatable via `facetwp_i18n`
- Improvedslider - better styling for the disabled state
- ImprovedfUtil lib now supports `.prepend`
- Fixedcheckboxes - choices ordered incorrectly when "Preserve ghosts order" was combined with "Highest count" sort
- Fixedimproved back-compat for the `get_filtered_post_ids` method

## 4.0.9

- Sept 15, 2022
- Fixedquery builder - issue when filtering by custom field values
- Fixedlisting builder - move `display: grid` CSS inline to prevent layout shifts

## 4.0.8

- Sept 7, 2022
- Improvedrevamped the "User selections" logic for number/date range facets
- Improvedrefined the sort logic, modified the new `facetwp_facet_sort_options` hook slightly
- Improvedslider facet - display the UI even when only 1 available choice
- Improvedcustomized noUiSlider.js lib to support `data-disabled` attribute (long story)
- Improvedlisting builder - added `post:title` dynamic tag
- Improvedlisting builder - renamed "Name" setting to "Unique name" and added tooltip
- Improvedadded label to range facet "Compare type" setting
- ImprovedfSelect lib - don't auto-focus the search box on touch devices
- Improvedcache the row counts lookup
- Fixedprevent PHP notices when indexing proximity facets (props @mgratch)
- FixedPHP notice caused by undefined `$exists_clause`
- FixedfSelect "No results" text wasn't appearing
- Fixedreset facet didn't reset pager or sort

## 4.0.7

- August 25, 2022
- New`facetwp_facet_sort_options` hook for Sort facets (mimics behavior of the "old" sort feature)
- Improveddisplay WP compatibility data for update checks
- Improvedauto-ignore "nav_menu_item" and "wp_block" post types
- Improvednumber range - when input is focused, Enter key now triggers a refresh
- FixedfComplete library - prefix the "hidden" class to prevent conflicts
- FixedPHP error when using the API `fetch` method

## 4.0.6

- August 15, 2022
- Improvedrefactored sort logic
- Improvedmultisite update notification support
- Improveda11y - allow for translations of pager-related ARIA attributes
- Improvedquery builder - added `EMPTY` and `NOT EMPTY` clauses to the query filter UI
- Fixedadmin UI styling tweaks (font sizes)
- Updatedtranslations

## 4.0.5

- July 22, 2022
- ImprovedQuery builder styling tweaks
- Improvedvalue modifiers UI setting supports both HTML entities (e.g. & copy;) and symbols (e.g. ©)
- Fixedprevent scrollbar shift when using the actions popup (on the facet/template listing screens)
- Fixedlayout builder - `date_format` and `input_format` settings should have a default value
- Fixedprevent manual indexing issues when the `facetwp_indexer_is_enabled` hook is false
- UpdatedVueJS, SortableJS, noUiSlider, and vue-select

## 4.0.4

- July 5, 2022
- Fixedprevent facets from being named `labels` to prevent issues
- Fixedignore non-facet (i.e. custom) fSelects

## 4.0.3

- June 6, 2022
- Newslider facets - added "Reset text" UI setting
- Improvedadmin - only show "Compare type" setting when "Other data source" is used
- Fixedformatting bug preventing sliders from loading properly

## 4.0.2

- May 31, 2022
- New`facetwp_builder_query_data` hook
- Improvedproximity facets are now up to 40x faster (props And)
- Improvedslider - support "Enclose" compare type
- Improvedadded `FWP.response` JS object containing ajax response data
- ImprovedQuery builder - better styling of vue-select (dropdown) inputs
- Improvedapply `facetwp_facet_display_value` hook to dropdown and fselect facets
- Fixedmoved the `facetwp/set_options/slider` JS hook (allows for "range" to be overriden)
- Fixedadmin - prevent 3rd party menus from moving the top nav bar

## 4.0.1

- May 2, 2022
- Improvedadmin UI - display facet / template names in the list tables
- Improvedsupport value-less shortcode atts, e.g. `[facetwp template="test" static]`
- Fixedprevent reset facets from resetting other reset facets (reset-ception)
- Fixedsort facet - make default label translatable via `facetwp_i18n` hook
- FixedCSS issue when using multiple FacetWP (shortcode) listings on a page
- FixedCSS issue preventing listing builder's default 1-column mobile layout
- Fixedrestore a11y compat for the "old" sort feature
- Fixedcounts shortcode display issue when per_page = -1
- Fixedcast page numbers as `int` for FWP()->facet->pager_args

## 4.0

- Apr 18, 2022
- ImportantFacetWP 4.0 requires PHP 7.0 or above
- New[Reset facets](https://facetwp.com/help-center/facets/facet-types/reset/)
- Newsupport for WP Rocket
- Newsupport for multiple (static) FacetWP templates on a page
- Newability to duplicate facets/templates from the admin listing
- Newability to copy facet/template shortcodes from the admin listing
- Newadded `post:image` dynamic tag to the Listing Builder
- New`facetwp_facet_pager_link` hook to customize the pager output
- Improvedmuch better Listing Builder admin UI
- Improvedtweaked the order of the "Data source" options
- Improvedadded `span` around checkbox / radio display values
- Improvedadmin.css uses CSS variables to standardize colors
- Improvedbetter admin UI tooltip help text
- Improveda11y - better support for pager and sort facets
- Improvedpager - "Per page" facets support a "Show All" option
- Improvedfacetwp_display() now supports an optional 3rd argument ($atts)
- Improvedallow sort labels to be translated using `facetwp_i18n`
- Improvedmade the admin tooltip UI less subtle
- Improvedrenamed "Templates" to "Listings"
- Fixedsort facet choices by depth only when hierarchical
- Fixedsort facets should override the default relevancy sort when in use
- Fixedautocomplete - the UI should adhere to the `facetwp_facet_autocomplete_limit` hook
- Fixedstar rating facets work with the "Hide empty facets" tutorial
- Fixedissue with multiple EDD `[downloads]` shortcodes on a page
- Fixedremove Reset and Sort facets from the "User selections" list
- Fixedprevent duplicate refreshes when using custom fSelect elements
- FixedfSelect - when "Hierarchical" setting is off, ignore depth to prevent display issues
- UpdatednoUiSlider
- Updatedpackage.json
    
## See also

    - [Changelog (older versions)](https://facetwp.com/help-center/changelog/changelog-old/)
- [News and announcements](https://facetwp.com/help-center/news/)

                    Last updated: September 10, 2024

---

