# Tag Cloud Search

*Category from TaxoPress documentation*

---

## Tag Cloud Search – Shortcode Parameters

**Source:** [https://taxopress.com/docs/tag-cloud-search-shortcode-parameters/](https://taxopress.com/docs/tag-cloud-search-shortcode-parameters/)

This guide shows you how to use and customize the shortcode for the Tag Cloud Search feature in the Tag Groups plugin.

---

## Shortcode

```
jQuery(document).ready(function() {
        const tags = document.querySelectorAll('.tag-groups-cloud .tag-groups-tag');
        const cmInput = document.getElementById('cloud_search_6a9d07132e4c1');
        const searchTitle = false;
        
        cmInput.addEventListener('keyup', function(el){TagGroupsCloudSearch.filter(el,'.tag-groups-cloud', tags, searchTitle);});
    });
```

---

## Example

```
Looking for a name?

    jQuery(document).ready(function() {
        const tags = document.querySelectorAll('.my-tag-cloud .tag-groups-tag');
        const cmInput = document.getElementById('cloud_search_6a9d07132e51e');
        const searchTitle = false;
        
        cmInput.addEventListener('keyup', function(el){TagGroupsCloudSearch.filter(el,'.my-tag-cloud', tags, searchTitle);});
    });
```

---

## Parameters

#### tag_cloud_class

This parameter is a class name (selector) that creates the connection between the search field and one or more [supported tag clouds](https://taxopress.com/docs/tag-cloud-search-overview/). By default it connects to all supported tag clouds on the same page.

Enter the same class name that you use in the tag cloud as “div_class” (or “table_class”). Example:

```
jQuery(document).ready(function() {
        const tags = document.querySelectorAll('.searchable-tag-cloud .tag-groups-tag');
        const cmInput = document.getElementById('cloud_search_6a9d07132e554');
        const searchTitle = false;
        
        cmInput.addEventListener('keyup', function(el){TagGroupsCloudSearch.filter(el,'.searchable-tag-cloud', tags, searchTitle);});
    });

  (function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-tabs-6a9d07132e583', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-tabs-6a9d07132e583');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

If you also need other class names in the tag cloud, you simply enter all of them in the tag cloud as “div_class”, separated by spaces. Example:

```
jQuery(document).ready(function() {
        const tags = document.querySelectorAll('.searchable-tag-cloud .tag-groups-tag');
        const cmInput = document.getElementById('cloud_search_6a9d07132eb84');
        const searchTitle = false;
        
        cmInput.addEventListener('keyup', function(el){TagGroupsCloudSearch.filter(el,'.searchable-tag-cloud', tags, searchTitle);});
    });

  (function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-tabs-6a9d07132ebae', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-tabs-6a9d07132ebae');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

| accepted values | default | example shortcode |
| --- | --- | --- |
| string (class name) | tag-groups-cloud | tag_cloud_class=searchable-tag-cloud-2 |

#### search_title

If you activate this option, the filter will also show tags where a part of the “tag description” matches the words in the text field.

The description can be added to tags when you create a new tag or click on a tag name to edit its information. It’s not editable via “Quick Edit” in the tag list.

Filtering by description works only if you display the description in the “custom title” (aka tooltip, visible when you hold your mouse pointer over the tag). Use the placeholder 
```
{description}
```

 in the custom title field of the connected tag cloud.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer (0 or 1) | 0 (off) | search_title=1 |

#### label

An optional label, displayed above or left of the input field.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | label="Search:" |

#### placeholder

The text that appears in the empty input field.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | Search a tag | placeholder="Start typing" |

#### div_class

You can use this to access the input field with CSS.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | div_class="my-custom-styling" |

---

## Tag Cloud Search – Gutenberg Block

**Source:** [https://taxopress.com/docs/tag-cloud-search-gutenberg-block/](https://taxopress.com/docs/tag-cloud-search-gutenberg-block/)

Tag Cloud Search is a feature of the Tag Groups Pro plugin. The Tag Cloud Search is an element that you can add into a page to let visitors filter tag clouds by tag names.

This guide will show you how to use the Gutenberg block that is available with the Tag Cloud Search feature.

---

## Connection

#### Class name used in the tag cloud(s)

This parameter is a class name (selector) that creates the connection between the search field and one or more [supported tag clouds](https://taxopress.com/docs/tag-cloud-search-overview/). By default it connects to all supported tag clouds on the same page.

Enter the same class name that you use in the tag cloud as “div_class” (or “table_class”). Example:

```
searchable-tag-cloud
```

If you also need other class names in the tag cloud, you simply enter all of them in the tag cloud as “div class”, separated by spaces. Example:

```
green-tags other-styling searchable-tag-cloud
```

In the Tag Cloud block you enter only “searchable-tag-cloud” – just the part that makes the connection.

---

## Filter

#### Search also in tag description

If you activate this option, the filter will also show tags where a part of the “tag description” matches the words in the text field.

The description can be added to tags when you create a new tag or click on a tag name to edit its information. It’s not editable via “Quick Edit” in the tag list.

Filtering by description works only if you display the description in the “custom title” (aka tooltip, visible when you hold your mouse pointer over the tag). Use the placeholder 
```
{description}
```

 in the custom title field of the connected tag cloud.

---

## Labels and Messages

#### Label

An optional label, displayed above or left of the input field.

#### Placeholder

The text that appears in the empty input field.

---

## Advanced Styling

#### div class

You can use this to access the input field with CSS.

---

## Tag Cloud Search – Overview

**Source:** [https://taxopress.com/docs/tag-cloud-search-overview/](https://taxopress.com/docs/tag-cloud-search-overview/)

Tag Cloud Search is a feature of the Tag Groups Pro plugin. The Tag Cloud Search is an element that you can add into a page to let visitors filter tag clouds by tag names.

- [Click here to see demos of the Tag Cloud Search](https://demo.taxopress.com/tag-cloud-search/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/tag-cloud-search-gutenberg-block/).
- [Click here for the shortcode parameters](https://taxopress.com/docs/tag-cloud-search-shortcode-parameters/).

Here’s a screenshot of the Tag Cloud Search feature from [our demo site](https://demo.taxopress.com). This display combines a search box with a tabbed display. We’ve added a color scheme, plus text after each tag.

---

## Tag Cloud Search Integrations

The Tag Cloud Search feature works together with the following tag clouds:

- [Tabbed Tag Cloud](https://taxopress.com/docs/tabbed-tag-cloud-overview/)
- [Accordion Tag Cloud](https://taxopress.com/docs/accordion-tag-cloud-gutenberg-block-2/)
- [Alphabetical Tags](https://taxopress.com/docs/alphabetical-tag-index-overview/)
- [Table Tag Cloud](https://taxopress.com/docs/table-tag-cloud/)
- [Simple Tag Cloud](https://taxopress.com/docs/combined-tag-cloud/)

The Shuffle Box has its own text search field.

---

## Connect the Search to the Tag Cloud

You simply add this feature as shortcode or Gutenberg block to the same page where you use one or more of these tag clouds. It will generate an input field where visitors can enter a search term. The filtering will happen live while they type.

In order to tell the Tag Cloud Search which tag clouds to search, you need to connect them. Simply enter the same class name under “Connection” in the block or as tag_cloud_class that you have used in the corresponding tag cloud(s). You don’t need to replace existing class names in the tag cloud. It is sufficient to append it, separated by a space.

Example for shortcodes:

```
jQuery(document).ready(function() {
        const tags = document.querySelectorAll('.tag-groups-cloud .tag-groups-tag');
        const cmInput = document.getElementById('cloud_search_6a9d07133925f');
        const searchTitle = false;
        
        cmInput.addEventListener('keyup', function(el){TagGroupsCloudSearch.filter(el,'.tag-groups-cloud', tags, searchTitle);});
    });
```

On the same page you use a tag cloud with the same class name “tag-groups-cloud-1” among its classes:

```
(function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-tabs-6a9d07133929c', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-tabs-6a9d07133929c');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

Now the search will filter the tags in this cloud.

---

## Notes on the Tag Cloud Search

- The filter always works on the tag names. You can chose to filter additionally by tag descriptions. For that to work you need to display the description in the “title” attribute (i.e. in the tooltip): Use the placeholder 
```
{description}
```

 in the “custom title” field or parameter.
- If you use the filter with the Tabbed Tag Cloud or the Alphabetical Tabs, we automatically open the tab of the first tag that matches the filter. This, however, doesn’t work if you connect the Tag Cloud Search with more than one tag clouds.
- The filter is case-insensitive: When you type “apple”, you see both the tags “Big Apple” and “pineapple”.
- Please note that – with or without the Tag Cloud Search – none of these tag clouds dynamically loads tags from the server. The filtering affects only tags that were *initially* loaded.

---

